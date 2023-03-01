import * as Msal from '@azure/msal-browser';
import store from '../store';
import jwt_decode from "jwt-decode";


export default class AuthService {
    constructor() {
        const config = {
            auth: {
                clientId: process.env.VUE_APP_AZURE_AD_CLIENT_ID,
                authority: `https://login.microsoftonline.com/${process.env.VUE_APP_AZURE_AD_TENANT_NAME}`
            }
        };

        this.myMsal = new Msal.PublicClientApplication(config);
        this.request = {
            scopes: ["user.read", "group.read.all"]
        };

        this.idToken = '';
        this.accessToken = '';
    }

    async login() {
        try {
            this.idToken = await this.myMsal.loginPopup(this.request);
            const loggedInAccountName = this.idToken.idTokenClaims.preferred_username;
            this.request.account = this.myMsal.getAccountByUsername(loggedInAccountName);
            store.commit('userSession/LoggUserIn');
            this.getAccessToken();
        } catch(error) {
            console.log(error);
        }
    }

    async logout() {
        await this.myMsal.logoutPopup();
        store.commit('userSession/LogUserOut');
    }

    async getAccessToken() {
        let tokenResponse = '';
        try {
            tokenResponse = await this.myMsal.acquireTokenSilent(this.request);
            this.accessToken = tokenResponse.accessToken;
            var decoded = jwt_decode(this.accessToken );
            store.commit('userSession/SetFullName',decoded.name);
            store.commit('userSession/SetUserID', decoded.oid);
            store.commit('userSession/SetUserFirstName', decoded.given_name);
            store.commit('userSession/SetUserLastName', decoded.family_name);
            store.commit('userSession/SetUserEmail',decoded.upn);
            //console.log(decoded);   
        }
        catch(error) {
            console.log(error)
            if (this.requiresInteraction(error)) {
                try {
                    tokenResponse = await this.myMsal.acquireTokenPopup(this.request);
                    this.accessToken = tokenResponse.accessToken;
                }
                catch(error) {
                    console.log(error);
                }
            }
        }
    }

    async getGroups() {
        await this.getAccessToken();
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.accessToken
        };
        const graphUrl = 'https://graph.microsoft.com/v1.0/me/memberOf';
        const response = await fetch(graphUrl, {
            method: 'GET',
            headers: headers
        });

        const responseData = await response.json();
        let groups = responseData.value.map(groupData => {
            return { name : groupData.displayName ? groupData.displayName : groupData.id}
        });

        return groups;
        
    }

    requiresInteraction(errorCode) {
        if (!errorCode || !errorCode.length) {
            return false;
        }
        return errorCode === "consent_required" ||
            errorCode === "interaction_required" ||
            errorCode === "login_required";
    }
    
}
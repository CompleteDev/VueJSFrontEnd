

export const userSession = {
    namespaced: true,
    state: {
        LoggedIn: false,
        FullName: '',
        UserFirstName: '',
        UserLastName: '',
        UserEmail: '',
        UserID: '',
    },

    mutations: {
        LoggUserIn(state)
        {
          state.LoggedIn = true;
        },
        LogUserOut(state)
        {
          state.LoggedIn = false;
        },
        SetFullName(state,payload)
        {
          state.FullName = payload;
        },
        SetUserID(state,payload)
        {
          state.UserID = payload;
        },
        SetUserFirstName(state,payload)
        {
          state.UserFirstName = payload;
        },
        SetUserLastName(state,payload)
        {
          state.UserLastName = payload;
        },
        SetUserEmail(state,payload)
        {
          state.UserEmail = payload;
        },
      },

    actions: {

    },

    getters: {

    },

    
};
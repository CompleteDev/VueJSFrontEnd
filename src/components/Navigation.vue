<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" :to="{ name: 'Home' }">MMS</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto me-5 mb-2  mb-lg-0 px-5">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" :to="{ name: 'About' }">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" :to="{ name: 'Contact' }">Contact</router-link>
        </li>
        <li v-if="LoggedIn" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            NBC
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" :to="{ name: 'NBC' }">NBC HOME</router-link></li>
            <!-- <li><hr class="dropdown-divider"></li> -->
          </ul>
        </li>
        <li v-if="LoggedIn" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Orders
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" :to="{ name: 'OrderReset' }">Reset Orders</router-link></li>
            <li><router-link class="dropdown-item" :to="{ name: 'OrderTracking' }">Order Tracking</router-link></li>
            <!-- <li><hr class="dropdown-divider"></li> -->
          </ul>
        </li>
        <div>
          <li v-if="!LoggedIn" class="nav-item" @click.prevent="login">
          <a class="nav-link" href="#">Log In</a>
        </li>

        <li v-else class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ FullName }}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" :to="{ name: 'Profile' }">Profile</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click.prevent="logout">Log Out</a></li>
          </ul>
        </li>
        </div>
        
      </ul>
    </div>
  </div>
</nav>


</template>

<script>
import AuthService from '../services/authService';
import {  mapState } from "vuex"

export default {
  name: "navigation",
  components: {

  },
  data() {
    return {

    };
  },
  computed: {
    ...mapState('userSession', ['LoggedIn', 'FullName']),

  },
  created() {
    this.authService = new AuthService();
  },
  methods: {
    login: async function() {
      try {
        await this.authService.login();
      }
      catch (error) {
        console.log(error);
      }
    },
    logout: async function() {
      try {
        await this.authService.logout();
      }
      catch(error){
        console.log(error);
      }
    },
    
  },
  
};
</script>

<style lang="scss" scoped>

</style>

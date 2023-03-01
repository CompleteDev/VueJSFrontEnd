<template>
<div class="container mt-5 text-center">
  <h3>Profile</h3>
  <div class="m-5">
      <h3>First Name: {{ UserFirstName }}</h3>
      <h3>Last Name: {{ UserLastName }}</h3>
      <h3>Email Address: {{ UserEmail }}</h3>
  </div>
</div>
    
</template>

<script>
import { mapState } from "vuex"

export default {
  name: 'Profile',
  components: {

  },
  computed: {
    ...mapState('userSession',['UserFirstName', 'UserLastName', 'UserEmail']),
  },
}
</script>

<style lang="scss" scoped>

</style>
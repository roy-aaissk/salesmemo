<template>
  <div class='text-center'>
    <v-btn
      color="warning"
      @click="logout"
      v-if="$store.state.auth.loggedIn"
      block
      width="100px"
    >
      Logout
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      console.log('Logout attempt')
      const result = window.confirm('Do you want to logout?')
      if (result) {
        this.$store.dispatch('auth/logout')
      } else {
        console.log('Logout was canceled')
      }
    }
  }
}
</script>
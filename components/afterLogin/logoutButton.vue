<template>
  <button
    color="secondary"
    @click="logout"
    v-if="$store.state.auth.loggedIn"
    outlined
  >
    Login
  </button>
</template>>

<script>
export default {
  methods: {
    logout() {
      console.log('Logout attempt')
      const result = window.confirm('Do you want to logout?')
      if (result) {
        this.$store.dispatch('logout')
      } else {
        console.log('Logout was canceled')
      }
    }
  }
}
</script>
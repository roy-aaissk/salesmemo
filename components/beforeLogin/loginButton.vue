<template>
  <button
    color="secondary"
    @click="login"
    v-if="!$store.state.auth.loggedIn"
    outlined
  >
    Login
  </button>
</template>>

<script>
export default {
  methods: {
    login() {
      console.log('Login attempt')
      this.$store.dispatch('auth/login')
    },
  }
}
</script>
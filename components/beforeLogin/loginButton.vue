<template>
  <v-btn
    color="secondary"
    @click="login"
    v-if="!$store.state.auth.loggedIn"
    outlined
  >
    Login
  </v-btn>
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
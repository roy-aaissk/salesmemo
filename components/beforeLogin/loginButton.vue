<template>
  <button
    color="secondary"
    @click="login"
    v-if="!$store.state.auth.loggedIn"
    outlined
  >
    <!-- Googleでログイン -->
    <img src="google/btn_google_signin_dark_pressed_web@2x.png" alt="googleログイン" width="150" height="100">
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
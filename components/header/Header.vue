<template>
  <div>
    <div class="container mx-auto flex flex-wrap p-5 flex-cow md:flex-row items-center">
      <nav class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Nuxt-link to="/top" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        salesMemo
      </Nuxt-link>
    </nav>
    <button class="inline-flex justify-end items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      color="secondary"
      @click="logout"
      v-if="$store.state.auth.loggedIn"
      outlined
    >
      Logout
    </button>
    <button class="inline-flex text-right items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      color="secondary"
      @click="login"
      v-if="!$store.state.auth.loggedIn"
      outlined
    >
      Login
    </button>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'top',
  methods: {
    logout() {
      console.log('Logout attempt')
      const result = window.confirm('Do you want to logout?')
      if (result) {
        this.$store.dispatch('auth/logout')
      } else {
        console.log('Logout was canceled')
      }
    },
    login() {
      console.log('Login attempt')
      this.$store.dispatch('auth/login')
    },
  }
}
</script>

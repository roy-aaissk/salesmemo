<template>
  <div>
    <div class="container mx-auto flex flex-wrap p-5 flex-cow md:flex-row items-center">
      <nav class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Nuxt-link to="../top" class="mx-auto flex  text-2xl title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        SalesMemo
      </Nuxt-link>
    </nav>
    <button class="inline-flex ml-auto items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      color="secondary"
      @click="logout"
      v-if="$store.state.auth.loggedIn"
      outlined
    >
      Logout
    </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'top',
  methods: {
    logout() {
      // console.log('Logout attempt')
      const result = window.confirm('本当にログアウトしていいですか')
      if (result) {
        this.$store.dispatch('auth/logout')
      } else {
        console.log('Logout was canceled')
      }
    },
  }
}
</script>

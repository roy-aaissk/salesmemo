<template>
  <div>
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Nuxt-link to="/top" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        salesMemo
      </Nuxt-link>
    </nav>
    <nav class="md:ml-auto flex flex-wrap items-right text-base">
      <login-button/>
      <logout-button/>
    </nav>
    </div>
  </div>
</template>

<script>
import LoginButton from '~/components/beforeLogin/loginButton.vue'
import LogoutButton from '~/components/afterLogin/logoutButton.vue'

export default {
  layout: 'top',
  components: {
    LoginButton,
    LogoutButton
  },
}
</script>

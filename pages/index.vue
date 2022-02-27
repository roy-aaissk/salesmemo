<template>
  <!-- <Tutorial/> -->
    <div>
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">salesMemo</h1>
          <p class="mb-8 leading-relaxed">ログインはこちらから</p>
          <login-button/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LoginButton from '~/components/beforeLogin/loginButton.vue'
export default {
  layout: 'welcome',
  components: {
    LoginButton,
  },
}
</script>

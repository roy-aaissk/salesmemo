<template>
    <div>
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">SalesMemo</h1>
          <span class="mb-8 leading-relaxed">ログインはこちらから</span>
        </div>
          <login-button/>
          <button class="items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-4" @click="guestsLogin()">ゲストログイン</button>
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
  methods: {
    guestsLogin() {
      this.$store.dispatch("auth/guestsLogin")
      // this.$auth
      //   .signInAnonymously()
      //   .then(() => {
      //     alert("ログイン成功しました！");
      //     this.$store.dispatch("confirmLogin");
      //     this.$router.push("/top");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     alert("ログインに失敗しました");
      //   });
    },   
  },
}
</script>

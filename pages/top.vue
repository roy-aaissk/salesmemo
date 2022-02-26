<template>
  <div>
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Header/>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <login-button/>
      </nav>
    </div>
    <section class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">salesMemo</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">質問事項一覧</h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <h2 class="text-gray-900 text-lg title-font font-medium"></h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base"></p>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" @click.native="Create()" :to="{ path: `create` }">Create
      </NuxtLink>
    </div>
    </section>
  </div>
</template>

<script>
import LoginButton from '~/components/beforeLogin/loginButton.vue'
import Header from '~/components/header/Header.vue'

export default {
  layout: 'top',
  components: {
    LoginButton,
    Header
  },
}
</script>
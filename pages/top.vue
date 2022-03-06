<template>
<div>
  <Header/>
      <section class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
      <div class="flex flex-col text-center w-full mb-10">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">住宅Q&A</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">質問事項一覧</h1>
      <NuxtLink class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" :to="{ path: `/create` }">新規作成
      </NuxtLink>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3" v-for="question in showlist" :key=question.id>
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <h2 class="text-gray-900 text-lg title-font font-medium"  v-if="question.title">{{question.title}}</h2>
            </div>
            <div class="flex-grow">
              <div>
                <NuxtLink class="mt-3 text-indigo-500 inline-flex items-center" :to="{ path: `/questiondetail/${question.id}` } ">もっと見る
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
</div>
</template>

<script>
import LoginButton from '~/components/beforeLogin/loginButton.vue'
import LogoutButton from '~/components/afterLogin/logoutButton.vue'
import Header from '~/components/header/Header.vue'
import { mapActions, mapGetters } from "vuex";



export default {
  layout: 'top',
  components: {
    LoginButton,
    LogoutButton,
    Header
  },
  asyncData({store}) {
    store.dispatch('fetchquestion')
  },
  computed: {
    showlist() {
      return this.getquestion
    },
    ...mapGetters(['getquestion'])
  },
  // methods:{
  //   showlist(){
  //     this.$store.dispatch('fetchquestion')
  //   }
  // },
  // mounted: function() {
  //   this.showlist()
  // }
}
</script>
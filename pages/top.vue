<template>
<div>
  <Header/>
      <section class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
      <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">住宅Q&A</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">質問事項一覧</h1>
      <NuxtLink class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" :to="{ path: `/create` }">Create
      </NuxtLink>
      </div>
    </div>

    <div class="lg:w-2/3 w-full mx-auto overflow-auto" v-for="question in showlist" :key="question.id">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">質問したいこと</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">作成日</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">{{question.title}}</td>
            <td class="px-4 py-3">2021/1/1</td>
            <td class="px-4 py-3">
              <NuxtLink class="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" :to="{ path: `/questiondetail/${question.id}` } ">もっと見る
              </NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</div>
</template>

<script>
import LoginButton from '~/components/beforeLogin/loginButton.vue'
import Header from '~/components/header/Header.vue'
import { mapActions, mapGetters } from "vuex";



export default {
  layout: 'top',
  components: {
    LoginButton,
    Header
  },
  async asyncData({store}) {
    return await store.dispatch('question/fetchquestion')
  },
  computed: {
    showlist() {
      return this.getquestion
    },
    ...mapGetters('question',['getquestion'])
  },
}
</script>
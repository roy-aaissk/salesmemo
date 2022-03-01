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
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3" v-for="(question,index) in $store.getters['question/getquestion']" :key=index>
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <label for="footer-field" class="leading-7 text-sm text-indigo-600">質問したいこと</label>
            <div class="flex items-center mb-3">
              <h2 class="text-gray-900 text-lg title-font font-medium"  v-if="question.title">{{question.title}}</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base" v-if="question.answer">{{question.answer}}</p>
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
      <!-- <NuxtLink class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" @click.native="Create()" :to="{ path: `create` }">Create
      </NuxtLink> -->
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
  computed: {
    getQuestion() {
      return  this.$store.state.question.questions
    }
  },
  methods: {
    ...mapActions('question',['fetchquestion']),
  },

  created() {
    this.fetchquestion()
  }
}
</script>
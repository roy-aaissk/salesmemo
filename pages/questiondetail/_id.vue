<template>
<div>
    <Header/>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg ">
    <div class="flex flex-col text-center w-full mb-10 mt-10" v-if="toggleEdit">
      <h3 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
        質問詳細ページ
      </h3>
    </div>
    <div class="flex flex-col text-center w-full mb-10 mt-10" v-else>
      <h3 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
        編集ページ
      </h3>
    </div>
    <div class="border-t border-gray-200 container mx-auto items-center">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" >
          <dt class="text-sm font-medium text-gray-500">
            質問項目名
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <div v-if="!toggleEdit">
              <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" v-model="list.title"/>
            </div>
              {{question.title}}
          </dd>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">

          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            回答
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <div v-if="!toggleEdit">
              <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" v-model="list.context"></textarea>
              <label for="footer-field" class="leading-7 text-sm text-gray-600"></label>
            </div>
            {{question.context}}
          </dd>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">

          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" >
          <dt class="text-sm font-medium text-gray-500">
            登録日
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <!-- <label for="footer-field" class="leading-7 text-sm text-gray-600"></label>
             -->
             {{question.createdate}}
          </dd>
        </div>
      </dl>
    </div>
  </div>
  <div class="flex-row">
    <div v-if="toggleEdit" class="flex flex-wrap">
      <button class="mx-auto  mt-2 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg" v-on:click="deletelist">削除</button>
      <button class="mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg " v-on:click="edit">編集</button>
    </div>
    <div v-else>
      <button class="flex  mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"  v-on:click="updatelist(list)">更新</button>
      <button class="flex  mx-auto mt-2 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"  v-on:click="toTop">戻る</button>
    </div>
  </div>
    <div class="flex flex-col text-center w-full mb-10 mt-10">
      <h4 class="sm:text-2xl text-3xl font-medium title-font mb-2 text-gray-900">
        質問回答
      </h4>
    </div>
      <div class="flex lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col  text-lg" v-for="review in comment" :key="review.id">
        <p>{{ review.context}}</p>
      </div>
    <div class="flex flex-col text-center w-full mb-10 mt-10">
      <h4 class="sm:text-2xl text-3xl font-medium title-font mb-2 text-gray-900">
        comment投稿
      </h4>
    </div>
    <div class="flex">
      <div class="lex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
        <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" v-model="answer.context"></textarea>
        <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click="addanswer()">
        Save
      </button>
      </div>
    </div>
</div>
</template>

<script>
import Header from '../../components/header/Header.vue'
export default {
  layout: 'detail',
  components: {
    Header
  },
  data() {
    return {
      list: {
        id: this.$route.params.id,
        title: '',
        context: '',
      },
      answer: {
        context: '',
      },
      toggleEdit: true,
    }
  },
  computed: {
    question(){ return  this.$store.state.question.questionsdetail},
    comment(){ return  this.$store.state.question.answer}
  },
  methods: {
    deletelist(){
      this.$store.dispatch('deletequestion',this.$route.params.id)
    },
    updatelist(list){
      console.log(list.title)
      this.$store.dispatch('updatequestion', Object.assign({id: list.id, title: list.title, context: list.context}))
    },
    addanswer(){
      // console.log(this.answer.context);
      const id = this.list.id;
      const context = this.answer.context;
      console.log(id);
      this.$store.dispatch('addanswer',{context, id})
      this.$router.push('../top');

    },
    edit: function() {
      this.toggleEdit =  !this.toggleEdit;
    },
    toTop(){
      this.$router.push('../top');
    }
  },
  created() {
      this.$store.dispatch('fetchQuestionDetail', String(this.$route.params.id))
      this.$store.dispatch('fetchQuestionDetailcomment', String(this.$route.params.id))
  },
}
</script>

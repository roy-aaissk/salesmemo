<template>
<div>
    <Header/>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg ">
    <div class="flex flex-col text-center w-full mb-10 mt-10">
      <h3 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
        新規登録
      </h3>
    </div>
    <div class="border-t border-gray-200 container mx-auto items-center">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" >
          <dt class="text-sm font-medium text-gray-500">
            質問項目名
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" v-model="list.title">
            <label for="footer-field" class="leading-7 text-sm text-gray-600"></label>
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            回答
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" v-model="list.context">
            <label for="footer-field" class="leading-7 text-sm text-gray-600"></label>
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            質問登録日
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <!-- {{ question.createdate}} -->
          </dd>
        </div>
      </dl>
  </div>
  <div class="md:ml-auto flex flex-wrap items-center text-base justify-center" id="create">
    <template>
      <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click="addlist()">
        Save
      </button>
      <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click="toTop()">
        Cancel
      </button>
    </template>
  </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/header/Header.vue'

export default {
  layout: 'detail',
  components: {
    Header
  },
  data() {
    return {
      list: {
        context: '',
        title: '',
      }
    }
  },
  computed: {
    question(){ return  this.$store.state.question.questionsdetail}
  },
  methods: {
    addlist() {
      const title = this.list.title;
      const context = this.list.context;
      this.$store.dispatch('addquestion', {title, context});
      this.$router.push('../top');
    },
    toTop() {
      this.$router.push('../top');
    }
  }
}
</script>

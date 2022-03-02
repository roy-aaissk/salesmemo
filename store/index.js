import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './auth.js'
import question from './question.js'
import modules from '@/store'

 
Vue.use(Vuex)

export default () => new Vuex.Store({
  modules: {
    // userInfo: User,
    auth,
    question
  },
  plugins: [createPersistedState(
    {
      key: 'yourkey',  // 設定しなければ'vuex'
      paths: [
        'auth.loggedIn',
        // 'question.questions',
      ],  // 保存するモジュール：設定しなければ全部。
      storage: window.sessionStorage,  // 設定しなければlocalStorage
    }
  )],
})
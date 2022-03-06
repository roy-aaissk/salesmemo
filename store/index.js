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
      key: 'yourkey',
      paths: [
        'auth.loggedIn',
        // 'question.questions',
      ],
      storage: window.sessionStorage,
    }
  )],
})
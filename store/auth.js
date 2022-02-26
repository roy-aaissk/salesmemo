import { initializeApp } from "@/plugins/firebase.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Vuex from 'vuex'

const namespaced = true

const state = () => ({
  userUid: '',
  userName: '',
  userImage: '',
  userEmail: '',
  loggedIn: false,
})

const mutations = {
  // ログイン状態の切替
  loginStatusChange(state, status) {
    state.loggedIn = status
  },
  // ここからユーザー情報をそれぞれ取得
  setUserUid(state, userUid) {
    state.userUid = userUid
  },
  setUserName(state, userName) {
    state.userName = userName
  },
  setUserImage(state, userImage) {
    state.userImage = userImage
  },
  setUserEmail(state, userEmail) {
    state.userEmail = userEmail
  }
}

const actions = {
  login({ commit }) {
    const provider = new GoogleAuthProvider()
    const auth = getAuth();
    signInWithPopup(auth , provider).then((result) => {
      const user = result.user
      commit('loginStatusChange', true)
      console.log('Login was successful')
      commit('setUserUid', user.uid)
      commit('setUserName', user.displayName)
      this.$router.push('/top')
    }).catch((error) => {
      const errorCode = error.code
      console.log('error : ' + errorCode)
    });
  },
  // ログイン中のユーザー取得
  // onAuth({ commit }) {
  //   firebase.auth().onAuthStateChanged(user => {
  //     user = user ? user : {}
  //     commit('setUserUid', user.uid)
  //     commit('setUserName', user.displayName)
  //     commit('setUserImage', user.photoURL)
  //     commit('setUserEmail', user.email)
  //     commit('loginStatusChange', user.uid ? true : false)
  //   })
  // },
  // logout({ commit }) {
  //   firebase.auth().signOut().then(() => {
  //     commit('loginStatusChange', false)
  //     console.log('Logout was successful')
  //     this.$router.push('/')
  //   }).catch((error) => {
  //     const errorCode = error.code
  //     console.log('error :' + errorCode)
  //   })
  // },
}

const getters = {
  getUserUid(state) {
    return state.userUid
  },
  getUserName(state) {
    return state.userName
  },
  getUserImage(state) {
    return state.userImage
  },
  getUserEmail(state) {
    return state.userEmail
  },
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters,
}
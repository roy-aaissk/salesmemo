import { db } from "~/plugins/firebase.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import Vuex from 'vuex'

const namespaced = true

const state = () => ({
  userUid: '',
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
  guestsLogin() {
    const auth = getAuth();
  signInAnonymously(auth)
  .then(() => {
    alert("ログイン成功しました！");
    this.$router.push("/top");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.code)
  });

  },
  // ログイン中のユーザー取得
  onAuth({ commit }) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
        commit('setUserUid', user.uid);
        commit('setUserEmail', user.email);
      } else {
      }
    });
  },
  logout({ commit }) {
    const auth = getAuth();
    signOut(auth).then(() => {
      commit('loginStatusChange', false)
      console.log('Logout was successful')
      this.$router.push('/')
    }).catch((error) => {
      const errorCode = error.code
      console.log('error :' + errorCode)
    })
  },
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
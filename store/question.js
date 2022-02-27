import { db } from "~/plugins/firebase.js";
import { collection, doc, setDoc, Timestamp, getDocs, getDoc, query, where } from "firebase/firestore";
// import { prototype } from "core-js/core/dict";


const state = () => ({
  questions: [],
  questionsdetail: [],
  answer: [],
})

const mutations = {
  getquestion(state, question) {
    state.questions = question
    console.log(state.question);
  },
  questiondetail(state, question) {
    state.questionsdetail = question
  },
  addquestion(state, question) {
    state.questions.push(question)
  },
}

const actions = {
  async fetchquestion ({commit}) {
    const querySnapshot = await getDocs(collection(db, "question"));
    let questionlist = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(`${doc.id} => ${doc.data().context}`);
      const question = doc.data()
      questionlist.push(
        Object.assign({
          id: doc.id
        },question)
      )
      commit('getquestion', questionlist)
    })
  },
  async fetchQuestionDetail({ commit }, id) {
    const docRef = doc(db, "question", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      commit('questiondetail', docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  },
}

const getters = {
  getquestion(state){
    console.log(state.questions)
    return state.questions;
  },
  getquestiondetail(state){
    console.log(state.questionsdetail)
    return state.questionsdetail;
  },
  // getanswer(state){
  //   return state.answer;
  // }
}

export default {
  state,
  mutations,
  actions,
  getters,
}
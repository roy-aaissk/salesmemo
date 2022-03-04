import { db } from "~/plugins/firebase.js";
import { collection, doc, setDoc, Timestamp, getDocs, getDoc, query, where, addDoc, deleteDoc, updateDoc, collectionGroup } from "firebase/firestore";


const state = () => ({
  questions: [],
  questionsdetail: [],
  answer: [],
})

const mutations = {
  getquestion(state, question) {
    state.questions = question
    // console.log(state.questions)
  },
  getanswer(state, answer) {
    state.answer = answer
    // console.log(state.answer)
  },
  questiondetail(state, question) {
    state.questionsdetail = question
  },
  addquestion(state, question) {
    state.questions.push(question)
    console.log(question);
  },
  addanswer(state, answer) {
    state.answer.push(answer)
    console.log(answer);
  },
  reset(state) {
    Object.assign(state, state())
  },
}

const actions = {
  async fetchquestion ({commit}) {
    const querySnapshot = await getDocs(collection(db, "question"));
    let questionlist = [];
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      // console.log(`${doc.id} => ${doc.data().context}`);
      // const question = doc.data()
      // console.log(doc.data())
      // console.log(question)
      questionlist.push(
        Object.assign(
          {
            id: doc.id,
            title: doc.data().title,
            context: doc.data().context
          })
      )

      // console.log(questionlist)
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
  async fetchQuestionDetailcomment({ commit }, id) {
    const snapShots = await getDocs(collection(db, 'question', id, 'answer'))
    const answerlist = [];
    snapShots.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data().context}`);
      answerlist.push(
        {
          id: doc.id,
          context: doc.data().context
        }
      )
    });
    // console.log(answerlist);
    commit('getanswer', answerlist);
  },
  async addquestion({commit, dispatch}, question) {
    const colRef = collection(db, "question");
    const data = {
      title: question.title,
      context: question.context,
    };
    await addDoc(colRef, data).then((decRef) =>{
      dispatch('fetchquestion')
      console.log(decRef);
      commit('addquestion',question);
    });
  },

  async addanswer({commit, dispatch}, comment) {
    console.log(comment.context);
    const snapShots = collection(db, 'question', comment.id, 'answer')
    const data = {
      context: comment.context,
    };
    await addDoc(snapShots, data).then((docRef) => {
      // console.log(docRef.context);
      dispatch('fetchQuestionDetailcomment');
      commit('add')
    })
  },
  async deletequestion({dispatch}, id) {
    await deleteDoc(doc(db, "question", id)).then(() => {
      dispatch('fetchquestion')
      this.$router.push('/top')
    });
  },
  async updatequestion({dispatch,commit}, question){
    console.log(question);
    const washingtonRef = doc(db, "question", question.id);
    await updateDoc(washingtonRef, {
      title: question.title,
      context: question.context
    })
    dispatch('fetchquestion')
    this.$router.push('/top')
  }
}

const getters = {
  getquestion(state){
    // console.log(state.questions);
    return state.questions;
  },
  getquestiondetail(state){
    console.log(state.questionsdetail);
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
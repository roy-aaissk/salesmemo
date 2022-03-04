import { db } from "~/plugins/firebase.js";
import { collection, doc, setDoc, Timestamp, getDocs, getDoc, query, where, addDoc, deleteDoc, updateDoc, collectionGroup } from "firebase/firestore";
// import { prototype } from "core-js/core/dict";


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
    console.log(id)
    const qs = query(collectionGroup(db, 'answer'));
    const querySnapshot = await getDocs(qs);
    const answerlist = [];
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data());
        answerlist.push(
          Object.assign(
            {
              id: doc.id,
              context: doc.data().context
            })
        )
        console.log(answerlist);
      commit('getanswer', answerlist);
    });

    // const querySnapshot = await db.collectionGroup('answer').get();
    // querySnapshot.forEach((doc) => {
    //       console.log(`${doc.id} => ${doc.data()}`);
    // })

    // const snapShots = await getDocs(collection(db, 'users', id, 'answer'))
    // snapShots.forEach((doc) => {
    // })
    // const docRef = getDocs(db, "question", id);
    // const docSnap = await docRef.listCollections();
    // docSnap.forEach((doc) => {
    // })
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
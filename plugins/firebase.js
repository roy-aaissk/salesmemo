// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkfvjtVVtavrtATyZ-9BhEPJkwS_DCTjY",
  authDomain: "salesmemo-fcf17.firebaseapp.com",
  projectId: "salesmemo-fcf17",
  storageBucket: "salesmemo-fcf17.appspot.com",
  messagingSenderId: "701851257450",
  appId: "1:701851257450:web:72e39d970e74f3e7d65813",
  measurementId: "G-3DK4EB462K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export{
  app,
  db,
  analytics,
}
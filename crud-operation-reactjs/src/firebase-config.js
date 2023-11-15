// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoAJ1K2eYwfMVg2XRzN0sR9qUF1V5yjBI",
  authDomain: "fir-crud-d2675.firebaseapp.com",
  projectId: "fir-crud-d2675",
  storageBucket: "fir-crud-d2675.appspot.com",
  messagingSenderId: "965219443219",
  appId: "1:965219443219:web:b96fb2a8228dfbaf9e95e6",
  measurementId: "G-6X0BGCKQ36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const  db = getFirestore(app);
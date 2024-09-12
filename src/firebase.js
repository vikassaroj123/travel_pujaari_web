// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdfKdnDWopqU3fE7tIqMW0Xb8gGpjTdUo",
  authDomain: "travelpujaari.firebaseapp.com",
  projectId: "travelpujaari",
  storageBucket: "travelpujaari.appspot.com",
  messagingSenderId: "1008421207077",
  appId: "1:1008421207077:web:470c3a320dd72f4b4a93cc",
  measurementId: "G-BXBFDD191L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyqpcTbeWcxs2teMekF9kqFMOMJy5WC00",
  authDomain: "itmsummit.firebaseapp.com",
  projectId: "itmsummit",
  storageBucket: "itmsummit.appspot.com",
  messagingSenderId: "602531075655",
  appId: "1:602531075655:web:2f41242a2b1c67ed418362",
  measurementId: "G-K93MQKZL2Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
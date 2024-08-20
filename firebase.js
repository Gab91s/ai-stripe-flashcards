// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByS6m76vMwmfSdBoXoYt4IJLsi-iD0zzw",
  authDomain: "ai-stripe-flashcards.firebaseapp.com",
  projectId: "ai-stripe-flashcards",
  storageBucket: "ai-stripe-flashcards.appspot.com",
  messagingSenderId: "882611698600",
  appId: "1:882611698600:web:b49830c4530c86245cbb9d",
  measurementId: "G-EGEHEJG7BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
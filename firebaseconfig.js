// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsverpdccQSNxmkatZpPIqOVicFB8fbuc",
  authDomain: "usercrud-7f772.firebaseapp.com",
  projectId: "usercrud-7f772",
  storageBucket: "usercrud-7f772.appspot.com",
  messagingSenderId: "376911866724",
  appId: "1:376911866724:web:46a9ef970035e7d4b9a871",
  measurementId: "G-6NHRFQTYB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
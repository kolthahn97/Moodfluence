// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCWSGwwf9iM8LVt0YRSkVlNRf3M3-7zuc",
  authDomain: "moodfluence.firebaseapp.com",
  projectId: "moodfluence",
  storageBucket: "moodfluence.appspot.com",
  messagingSenderId: "559948199576",
  appId: "1:559948199576:web:1cafedf67cb59d2bfe02ed",
  measurementId: "G-ZCKV2CD4WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
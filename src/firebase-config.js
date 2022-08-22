import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAPJIrNzI2OfX8t69idxAsSX8476XrzTTM",
  authDomain: "moodfluence-4091a.firebaseapp.com",
  projectId: "moodfluence-4091a",
  storageBucket: "moodfluence-4091a.appspot.com",
  messagingSenderId: "601382639758",
  appId: "1:601382639758:web:14ec6d81ed252c184cd1df",
  measurementId: "G-5ZV0MJXLDW"
}; 

const firebaseApp = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(firebaseConfig)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcuRDjdLbxayNtaKYuxmQuLON6S3749gA",
  authDomain: "simple-firebase-506ec.firebaseapp.com",
  projectId: "simple-firebase-506ec",
  storageBucket: "simple-firebase-506ec.appspot.com",
  messagingSenderId: "1048855136446",
  appId: "1:1048855136446:web:589d1cf31f2d8aae17f6ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
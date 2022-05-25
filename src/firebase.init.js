// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAobfagW6CnSKza02cXl0ljuMUJpKWSELo",
  authDomain: "toptool-10b7d.firebaseapp.com",
  projectId: "toptool-10b7d",
  storageBucket: "toptool-10b7d.appspot.com",
  messagingSenderId: "696422708215",
  appId: "1:696422708215:web:92deda93f9272cfb0ff4f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
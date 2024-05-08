// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJDsiq9E93iGS_U8z-LKYDcEqbj3ZVdd8",
  authDomain: "mern-book-inventory-150f4.firebaseapp.com",
  projectId: "mern-book-inventory-150f4",
  storageBucket: "mern-book-inventory-150f4.appspot.com",
  messagingSenderId: "804072804265",
  appId: "1:804072804265:web:24c95b5f91e0602521feb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
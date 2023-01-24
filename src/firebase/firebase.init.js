// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw2gewieOkvH3b9VG0sZES85Z9qc4z1PM",
  authDomain: "fir-auth-b3801.firebaseapp.com",
  projectId: "fir-auth-b3801",
  storageBucket: "fir-auth-b3801.appspot.com",
  messagingSenderId: "862586431499",
  appId: "1:862586431499:web:8f0c0989e53bf1a9b97f0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
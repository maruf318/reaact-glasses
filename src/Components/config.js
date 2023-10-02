// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8-X40UrytlneFN48M7omc0tBlD8lClCU",
  authDomain: "react-glasses-78800.firebaseapp.com",
  projectId: "react-glasses-78800",
  storageBucket: "react-glasses-78800.appspot.com",
  messagingSenderId: "235037987320",
  appId: "1:235037987320:web:47be0926298fd0d817060d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

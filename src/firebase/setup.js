// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj3VYWgepIblA1dho69Vn_GQtROhPH8S8",
  authDomain: "campuslyft-d5896.firebaseapp.com",
  projectId: "campuslyft-d5896",
  storageBucket: "campuslyft-d5896.appspot.com",
  messagingSenderId: "93854783233",
  appId: "1:93854783233:web:e6724af95d6804fca42d00",
  measurementId: "G-62N5G3NK2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

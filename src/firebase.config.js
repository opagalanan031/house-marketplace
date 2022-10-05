// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYk-GdNu73MLnXgRvGdYmsAnUaPcV2lMw",
  authDomain: "house-marketplace-app-77277.firebaseapp.com",
  projectId: "house-marketplace-app-77277",
  storageBucket: "house-marketplace-app-77277.appspot.com",
  messagingSenderId: "620909415488",
  appId: "1:620909415488:web:d01e8bdae22255d02da3a5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
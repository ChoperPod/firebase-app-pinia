// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6stq9OJeBOwHqZ7-r5bVYkmbm8xXJ_Vc",
    authDomain: "vue-3-2022-e71ac.firebaseapp.com",
    projectId: "vue-3-2022-e71ac",
    storageBucket: "vue-3-2022-e71ac.appspot.com",
    messagingSenderId: "1077282074198",
    appId: "1:1077282074198:web:87c370e08c9a158a6f95f7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth()
export { auth }
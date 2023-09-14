// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDyYf5x-SRJWhaqP7vV54WCzGvnA3W0yM",
    authDomain: "the-traveler-ae139.firebaseapp.com",
    projectId: "the-traveler-ae139",
    storageBucket: "the-traveler-ae139.appspot.com",
    messagingSenderId: "281874418185",
    appId: "1:281874418185:web:0f5c72150eb196afd506d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
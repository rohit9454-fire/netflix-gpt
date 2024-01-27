// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBn0eyPFkQxMczMAeMIiIc-JPbNavb5HmM",
    authDomain: "netflix-gpt-3e7bc.firebaseapp.com",
    projectId: "netflix-gpt-3e7bc",
    storageBucket: "netflix-gpt-3e7bc.appspot.com",
    messagingSenderId: "833170913600",
    appId: "1:833170913600:web:00ec0da6c9e14ab09b22a5",
    measurementId: "G-NE2GPR1WCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
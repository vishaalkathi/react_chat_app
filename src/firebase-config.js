// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVE7J7hH5O3QgZUWAoTKB0ed1Hd8P1jm4",
  authDomain: "chatreactapp-18831.firebaseapp.com",
  projectId: "chatreactapp-18831",
  storageBucket: "chatreactapp-18831.firebasestorage.app",
  messagingSenderId: "810520201697",
  appId: "1:810520201697:web:57670620fee127a7726aa0",
  measurementId: "G-9MQ8SP26S2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
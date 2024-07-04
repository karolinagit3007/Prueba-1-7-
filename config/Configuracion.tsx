// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoXKPr9FBhYsY9-_L6Vw4uFiE4Ku8wLJo",
  authDomain: "appii-7f1ee.firebaseapp.com",
  databaseURL: "https://appii-7f1ee-default-rtdb.firebaseio.com",
  projectId: "appii-7f1ee",
  storageBucket: "appii-7f1ee.appspot.com",
  messagingSenderId: "861392327622",
  appId: "1:861392327622:web:e396ba5498f6dc7f00d8c7",
  measurementId: "G-RFBFVC7FFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
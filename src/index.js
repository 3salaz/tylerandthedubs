// userScripts
import consoleTest from './consoleTest';
// testingFirebase
import { initializeApp } from "firebase/app";
// sassStyles
import './style/master.scss';
// import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// Setup Keys
const firebaseConfig = {
  apiKey: "AIzaSyD6MdFrc3dMZd_gocFnT6_c06kDuYmhOd0",
  authDomain: "nativefanatics.firebaseapp.com",
  projectId: "nativefanatics",
  storageBucket: "nativefanatics.appspot.com",
  messagingSenderId: "606356471271",
  appId: "1:606356471271:web:6c42fd5afa872529295142"
};

console.log(consoleTest('word'));

// Initialize Firebase
const app = initializeApp(firebaseConfig);
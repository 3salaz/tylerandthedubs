// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6MdFrc3dMZd_gocFnT6_c06kDuYmhOd0",
  authDomain: "nativefanatics.firebaseapp.com",
  projectId: "nativefanatics",
  storageBucket: "nativefanatics.appspot.com",
  messagingSenderId: "606356471271",
  appId: "1:606356471271:web:6c42fd5afa872529295142"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
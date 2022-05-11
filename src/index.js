import getWarriorData from './getData';
import { initializeApp } from "firebase/app";

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
const app = initializeApp(firebaseConfig);
console.log(getWarriorData());
console.log(app);
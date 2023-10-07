// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHGM_VQ6fmY_pSI3b568RiS64q5N-5emQ",
  authDomain: "new-project-2807.firebaseapp.com",
  projectId: "new-project-2807",
  storageBucket: "new-project-2807.appspot.com",
  messagingSenderId: "949418962792",
  appId: "1:949418962792:web:8bd6aa27508faee9ffb0dd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// firestore initialization
export const db = getFirestore(app);

// storages initialization
export const storage = getStorage(app);
// authentication
export const auth = getAuth(app);
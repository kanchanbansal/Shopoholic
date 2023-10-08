// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

<<<<<<< HEAD
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHGM_VQ6fmY_pSI3b568RiS64q5N-5emQ",
  authDomain: "new-project-2807.firebaseapp.com",
  projectId: "new-project-2807",
  storageBucket: "new-project-2807.appspot.com",
  messagingSenderId: "949418962792",
  appId: "1:949418962792:web:8bd6aa27508faee9ffb0dd"
=======
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjltDIVsKGFiY2rpJJ5GYVZ-4deXty8Z8",
  authDomain: "weekdays-4-30-pm.firebaseapp.com",
  projectId: "weekdays-4-30-pm",
  storageBucket: "weekdays-4-30-pm.appspot.com",
  messagingSenderId: "377088344122",
  appId: "1:377088344122:web:f9153dc28ea7d76bfbb503",
  measurementId: "G-CPFGLSJ3L9"
>>>>>>> 8b605dbb30fe4bc01c3ec60774d645c7a851d9fa
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// firestore initialization
export const db = getFirestore(app);

// storages initialization
export const storage = getStorage(app);
<<<<<<< HEAD
=======

>>>>>>> 8b605dbb30fe4bc01c3ec60774d645c7a851d9fa
// authentication
export const auth = getAuth(app);
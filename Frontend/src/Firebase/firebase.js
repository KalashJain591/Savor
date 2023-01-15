// Import the functions you need from the SDKs you need
import axios from 'axios'
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD5oEDEDlycflFfIVXqXp1DW3psKibqDhY",
  authDomain: "savornaturals-911a0.firebaseapp.com",
  projectId: "savornaturals-911a0",
  storageBucket: "savornaturals-911a0.appspot.com",
  messagingSenderId: "579209871224",
  appId: "1:579209871224:web:32163d1d9a28cdb5d4528d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
       axios.post("auth/signinwithgoogle",{profilePic,name,email });
    })
    .catch((error) => {
      console.log(error);
    });
};
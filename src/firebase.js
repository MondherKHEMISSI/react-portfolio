
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQjKOgy_SpIYEGyIea0HJTYJgNFp0-nK8",
  authDomain: "react-portfolio-dashboar-21119.firebaseapp.com",
  projectId: "react-portfolio-dashboar-21119",
  storageBucket: "react-portfolio-dashboar-21119.appspot.com",
  messagingSenderId: "714371368932",
  appId: "1:714371368932:web:3e0a19ac65c085f937e9f1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
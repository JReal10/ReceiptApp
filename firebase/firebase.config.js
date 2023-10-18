import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD8Zs08oFzlaXDS4wzCD-9kPk5VwgsA26Q",
  authDomain: "receiptapp-ff5a6.firebaseapp.com",
  projectId: "receiptapp-ff5a6",
  storageBucket: "receiptapp-ff5a6.appspot.com",
  messagingSenderId: "568739636878",
  appId: "1:568739636878:web:a8d411b9ca5ae059780bdf",
  measurementId: "G-RMQZY7TX1C"
};

export const FIREBASE_APP =initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
//export const FIREBASE_AUTH = getAuth(FIREBASE_APP)

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

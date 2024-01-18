// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsqU8--YNJvD2Su9tCmTnh16OzizoVAbc",
  authDomain: "goh-importaciones.firebaseapp.com",
  projectId: "goh-importaciones",
  storageBucket: "goh-importaciones.appspot.com",
  messagingSenderId: "862659361940",
  appId: "1:862659361940:web:c552518f23fb2e0d794881",
  measurementId: "G-F04DJKKCV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// se exporta la referencia  ala base de datos para usar en otras partes
 const dataBase= getFirestore(app)
 const auth = getAuth(app);

 export{
  dataBase,
  auth
 }
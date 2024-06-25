// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-a79e5.firebaseapp.com',
  projectId: 'mern-estate-a79e5',
  storageBucket: 'mern-estate-a79e5.appspot.com',
  messagingSenderId: '684435489839',
  appId: '1:684435489839:web:6d9cec832a401c186eb2da',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

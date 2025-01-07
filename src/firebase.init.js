// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVFKXkmt4Cg3zb8b-KuJ6nn3QdFNdnojU",
  authDomain: "private-route-m51.firebaseapp.com",
  projectId: "private-route-m51",
  storageBucket: "private-route-m51.firebasestorage.app",
  messagingSenderId: "378591537315",
  appId: "1:378591537315:web:29490e2787097542f4b716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDzmkgpfCcOZyr3hQH_5_nxxGTHs9QlM8",
  authDomain: "coffee-store-recap-25a34.firebaseapp.com",
  projectId: "coffee-store-recap-25a34",
  storageBucket: "coffee-store-recap-25a34.appspot.com",
  messagingSenderId: "580979269891",
  appId: "1:580979269891:web:b4371f9193bfd1e9f3c936",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

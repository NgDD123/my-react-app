import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfPljTVF-2Bhq_cYePAEF9Km5HhqhKCQI",
    authDomain: "my-react-app-c8632.firebaseapp.com",
    projectId: "my-react-app-c8632",
    storageBucket: "my-react-app-c8632.appspot.com",
    messagingSenderId: "112477137361",
    appId: "1:112477137361:web:17c2478277d3fd4e9758f0",
    measurementId: "G-ZHL0VCSPSC"
  };

  const app = initializeApp (firebaseConfig);
  export const auth = getAuth(app);
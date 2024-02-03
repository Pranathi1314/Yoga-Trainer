import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDcE_-CADsbGya20Igf02QV-WpLmt4MhcQ",
    authDomain: "yoga-trainer-c920b.firebaseapp.com",
    projectId: "yoga-trainer-c920b",
    storageBucket: "yoga-trainer-c920b.appspot.com",
    messagingSenderId: "617633176177",
    appId: "1:617633176177:web:c4e4f91fcf02887f8299d0",
    measurementId: "G-MJFPGT4B48"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
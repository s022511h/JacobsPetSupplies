// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARvZBAWSkRGDG7_Jz8rrY8IFOJhMwp2SM",
  authDomain: "jacobspetsupplies.firebaseapp.com",
  projectId: "jacobspetsupplies",
  storageBucket: "jacobspetsupplies.appspot.com",
  messagingSenderId: "1090859305088",
  appId: "1:1090859305088:web:17038b379d8fc0f3c7be65",
  measurementId: "G-KLPGV5JF92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the initialized app
export default app;

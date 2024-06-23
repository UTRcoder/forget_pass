// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA0oHHN16JicDrA7IFEMtqlViZsnSVd08s",
  authDomain: "localhost:3000",
  projectId: "otp-clgprints",
  storageBucket: "otp-clgprints.appspot.com",
  messagingSenderId: "351168135748",
  appId: "1:351168135748:web:3cd8f599d3ff889fdb7211",
  measurementId: "G-4G8TH8B56J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTU7wkju7MmvYOmf-M2MknUkOJpjWVLIQ",
  authDomain: "fiverr-eef97.firebaseapp.com",
  projectId: "fiverr-eef97",
  storageBucket: "fiverr-eef97.appspot.com",
  messagingSenderId: "822502334466",
  appId: "1:822502334466:web:e6892959d064f17c24871b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;

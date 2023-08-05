import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyIoCFYAuFunLcamgSSiclvNYaRwEuqK4",
  authDomain: "kachyco-d7f56.firebaseapp.com",
  projectId: "kachyco-d7f56",
  storageBucket: "kachyco-d7f56.appspot.com",
  messagingSenderId: "566444827449",
  appId: "1:566444827449:web:589bd54b6c8e247da73ee8"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;



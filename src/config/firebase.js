
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

//Aqui vocês devem colocar as suas credenciais
const firebaseConfig = {
  apiKey: "AIzaSyAouRIKvEszSS3q99IJlK1G6EmCt9xhqq8",
  authDomain: "alientech-eed64.firebaseapp.com",
  projectId: "alientech-eed64",
  storageBucket: "alientech-eed64.appspot.com",
  messagingSenderId: "1021026711299",
  appId: "1:1021026711299:web:3f0bcb91ce2e2f48551b36"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)
const db = getFirestore(app);

export { app, auth, db }
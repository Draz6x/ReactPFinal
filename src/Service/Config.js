
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAmupt4mxKJ2oTRJOlWg5j9646YZoRj8y0",
  authDomain: "workshop-reactjs-560c2.firebaseapp.com",
  projectId: "workshop-reactjs-560c2",
  storageBucket: "workshop-reactjs-560c2.appspot.com",
  messagingSenderId: "723310769087",
  appId: "1:723310769087:web:d8ca452c7d2ee03faf270a",
  measurementId: "G-J55QP8JME1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
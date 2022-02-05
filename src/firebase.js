import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVeEsbeDbV_6hyrOfqCFLpLPIWYkMsqBM",
    authDomain: "chat-weeelb.firebaseapp.com",
    projectId: "chat-weeelb",
    storageBucket: "chat-weeelb.appspot.com",
    messagingSenderId: "329102734551",
    appId: "1:329102734551:web:da15d8225d5b465cc42c92",
    measurementId: "G-BPP5ZLEXNE"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
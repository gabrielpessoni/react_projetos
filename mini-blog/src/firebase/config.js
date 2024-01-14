import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDT9ms0x1k6feL_Bye64TiiryxxB7ht_xc",
  authDomain: "miniblog-f6558.firebaseapp.com",
  projectId: "miniblog-f6558",
  storageBucket: "miniblog-f6558.appspot.com",
  messagingSenderId: "685328521721",
  appId: "1:685328521721:web:fc55978719678e8feb4528",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

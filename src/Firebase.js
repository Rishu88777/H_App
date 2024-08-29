
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyASyh_DH45aJph6J262x-BmlH8xZvxkiRU",
    authDomain: "newchatapp-5bb7b.firebaseapp.com",
    projectId: "newchatapp-5bb7b",
    storageBucket: "newchatapp-5bb7b.appspot.com",
    messagingSenderId: "150248395794",
    appId: "1:150248395794:web:e66b5be0d1942c1ec2b4cb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };

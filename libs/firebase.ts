import { getAnalytics } from 'firebase/analytics';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { initializeApp, getApp, FirebaseOptions } from "firebase/app";

const config: FirebaseOptions = {
    apiKey: "AIzaSyCT1Zqj0mTn3LqgZpIlgFqY6zjvCSyf4ac",
    authDomain: "trade-or-tighten-99cf5.firebaseapp.com",
    projectId: "trade-or-tighten-99cf5",
    storageBucket: "trade-or-tighten-99cf5.appspot.com",
    messagingSenderId: "607921338114",
    appId: "1:607921338114:web:15265313068838dbbf341b",
    measurementId: "G-H76PHQZEPK"
};

function createFirebaseApp(config: FirebaseOptions) {
    try {
      return getApp();
    } catch {
      return initializeApp(config);
    }
}


const app = createFirebaseApp(config);
console.log('Firebase Initialized...');
const analytics = getAnalytics(app);
const db = getFirestore(app);
const realtimeDB = getDatabase(app);
const storage = getStorage(app);
const FieldValueTimestamp = serverTimestamp;

export { db, app, analytics, realtimeDB, storage, FieldValueTimestamp };
// lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// configuration from Firebase Console
const firebaseConfig = {
    apiKey: 'AIzaSyBmyBrwpDkq95Mp8dSn_jC2JH3h3NZoh9Y',
    authDomain: 'olx-copy-ccb9f.firebaseapp.com',
    projectId: 'olx-copy-ccb9f',
    storageBucket: 'olx-copy-ccb9f.firebasestorage.app',
    messagingSenderId: '562918629200',
    appId: '1:562918629200:web:e4438032e2ad873a115655',
    measurementId: 'G-51BMJP48Z7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// // anti-pattern: avoid using `initializeApp` multiple times
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);

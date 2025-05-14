import { initializeApp,getApp, getApps } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCx_6dVOivE7dtcu0IxydBeBUIUjY8dnCA",
    authDomain: "interview-prep-e19e1.firebaseapp.com",
    projectId: "interview-prep-e19e1",
    storageBucket: "interview-prep-e19e1.firebasestorage.app",
    messagingSenderId: "843395317182",
    appId: "1:843395317182:web:aec9e821aa816ad4b5cdef",
    measurementId: "G-WM6JZ4F261"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);
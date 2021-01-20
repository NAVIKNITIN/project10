import firebase from "firebase/app";
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyAJm2q1TvUFXSUCzrZOMjn410V51XzjfN4",
    authDomain: "project10-d144e.firebaseapp.com",
    projectId: "project10-d144e",
    storageBucket: "project10-d144e.appspot.com",
    messagingSenderId: "612113152482",
    appId: "1:612113152482:web:22c81e33d175844a1da1bb"};



  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database=firebase.database().ref("/notes");



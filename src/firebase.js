import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYmX-uM8s0r8_YTzfrAJZb77i7yOQP4aE",
    authDomain: "facebook-messenger-clone-b0e71.firebaseapp.com",
    projectId: "facebook-messenger-clone-b0e71",
    storageBucket: "facebook-messenger-clone-b0e71.appspot.com",
    messagingSenderId: "20274051967",
    appId: "1:20274051967:web:56a43713dd16fd4d63384a",
    measurementId: "G-6E0KWMKPVY"
});

const db = firebaseApp.firestore();

export default db;
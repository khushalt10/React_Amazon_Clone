import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAk6oEwcN1EbXgbvZmi1TZ3-c2wufBqy0g",
    authDomain: "a-cd4eb.firebaseapp.com",
    databaseURL: "https://a-cd4eb.firebaseio.com",
    projectId: "a-cd4eb",
    storageBucket: "a-cd4eb.appspot.com",
    messagingSenderId: "558691580561",
    appId: "1:558691580561:web:d773ac0dec2405e1425d30",
    measurementId: "G-THR9PXK4FN"
});

const auth = firebase.auth();
const db = firebaseApp.firestore();

export {db, auth};
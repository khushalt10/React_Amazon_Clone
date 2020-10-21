import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBuDgLSDiICXHmc5pJTy2NS6bQ4lkKkuSk",
    authDomain: "clone-ff370.firebaseapp.com",
    databaseURL: "https://clone-ff370.firebaseio.com",
    projectId: "clone-ff370",
    storageBucket: "clone-ff370.appspot.com",
    messagingSenderId: "428131869146",
    appId: "1:428131869146:web:df51a4b3e48416f04f60e3",
    measurementId: "G-9YCK138DDE"
  });



const auth = firebase.auth();
const db = firebaseApp.firestore();

export {db, auth};
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQxBzjCI1dd-o0AyMlP9DM6a8lVG8ZzZw",
  authDomain: "clone-19137.firebaseapp.com",
  databaseURL: "https://clone-19137.firebaseio.com",
  projectId: "clone-19137",
  storageBucket: "clone-19137.appspot.com",
  messagingSenderId: "308807649539",
  appId: "1:308807649539:web:f4db441ed356e4ebd78136",
  measurementId: "G-D8LDCJPH1B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

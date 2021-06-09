import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBlA_enPYcE-_OOBcSssaoawX1FFRXsjYU",
  authDomain: "to-do-app-b516b.firebaseapp.com",
  projectId: "to-do-app-b516b",
  storageBucket: "to-do-app-b516b.appspot.com",
  messagingSenderId: "735755406509",
  appId: "1:735755406509:web:226226edd72ff144730a24"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };
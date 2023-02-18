import * as firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmxQdcESIgDR8nXON0l1ZEbt7Wr67uHqc",
    authDomain: "fir-28c5a.firebaseapp.com",
    projectId: "fir-28c5a",
    storageBucket: "fir-28c5a.appspot.com",
    messagingSenderId: "589930971145",
    appId: "1:589930971145:web:9b3f60aaa5895e1e0bf8d8",
    measurementId: "G-JBKBVNGG03"
  };

  const app = firebase.initializeApp(firebaseConfig)
  const firestore = app.firestore()
  const auth = app.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

export { firestore, auth, provider, firebase }
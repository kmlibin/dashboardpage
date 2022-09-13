import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBnZe85mDWHSQbndnhyBYFAvPA2SHWV0tE",
    authDomain: "dashboard-19f0c.firebaseapp.com",
    projectId: "dashboard-19f0c",
    storageBucket: "dashboard-19f0c.appspot.com",
    messagingSenderId: "221599621236",
    appId: "1:221599621236:web:d8e43c809f3eaceca5b121"
  }; 

  //init firebase
  initializeApp(firebaseConfig)

  //init firestore
  const database = getFirestore()

  export { database }
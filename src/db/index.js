import { initializeApp } from 'firebase/app'

import { getDatabase, onValue, ref, set} from 'firebase/database'

import { v4 as uuidv4 } from 'uuid';

// // AUTH https://firebase.google.com/docs/reference/js/?hl=fr&authuser=0&_gl=1*10jfmwh*_ga*NTY2NDEwNzc4LjE2OTU1Njg1Njk.*_ga_CW55HF8NVT*MTY5NTU2ODU2OC4xLjEuMTY5NTU2ODg5MS4wLjAuMA..
// // AUTH https://firebase.google.com/docs/auth/web/start?hl=fr
import {
  getAuth,
  //   createUserWithEmailAndPassword,
  //   signInWithEmailAndPassword,
  //   onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
   signOut
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const db = getDatabase()

export default class User {
  constructor() {
    this.app = app
    this.db = db
    this.auth = getAuth(app)
    //https://firebase.google.com/docs/auth/web/google-signin?authuser=0&hl=fr
    this.provider = new GoogleAuthProvider()
    this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
    // this.provider.setCustomParameters({
    //   'login_hint': 'user@example.com'
    // });
    console.log('constructor of FB class called: ')
    console.log('app', app)
    console.log('db', db)
  }

  createMember(member){
    // eslint-disable-next-line no-undef
    let userId = uuidv4()
    const reference = ref(this.db, "members/" +userId)
    set(reference, member)
  }

  getMembers(cb){
    const membersRef = ref(this.db, 'members/')
    onValue(membersRef, (snapshot)=>{
        const data = snapshot.val()
        console.log(data)
        cb(data)
    })
  

  }

  connectPopup() {
    console.log('connect popup')
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        let user = result.user
        console.log(user, token)
        //return user
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log(credential)
        this.user = null
        alert(error)
        console.log(error, errorCode, errorMessage)
        //return null
        // ...
      })
    //return res
  }

  deconnect(){
       signOut(this.auth).then(() => {
        // Sign-out successful.
        this.user = null
      }).catch((error) => {
        // An error happened.
        alert(error)
        console.log(error)
      });
  }
}

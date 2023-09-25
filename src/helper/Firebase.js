import app from 'firebase/app'
// import "firebase/firebase-firestore";
// import { getDatabase, ref, set } from 'firebase/database'
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut
// } from 'firebase/auth'



export default class Firebase {
  constructor(config) {
    console.log('TEST VAR ', import.meta.env.VITE_FIREBASE_PROJECT_ID)
    this.app.initializeApp(config)
    // this.db = getDatabase()
    // this.auth = getAuth(app)
    // // To apply the default browser preference instead of explicitly setting it.
    // this.auth.useDeviceLanguage()
    // this.Gprovider = new GoogleAuthProvider()
    // this.Gprovider.addScope('https://www.googleapis.com/auth/contacts.readonly')
    // // provider.setCustomParameters({
    // //   'login_hint': 'user@example.com'
    // // });

    // this.test()
  }

  // createUser(email, pass) {
  //   let user = null
  //   createUserWithEmailAndPassword(this.auth, email, pass)
  //     .then((userCredential) => {
  //       // Signed in
  //       user = userCredential.user
  //       console.log(user)
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       const errorMessage = error.message
  //       console.log(errorCode, errorMessage)
  //       alert(errorMessage)
  //       user = null
  //       // ..
  //     })

  //   return user
  // }

  // async connectUser(email, password) {
  //   let user = await signInWithEmailAndPassword(this.auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       let user = userCredential.user
  //       console.log(user)

  //       return user
  //       // ...
  //     })
  //     .catch((error) => {
  //       this.user = null
  //       const errorCode = error.code
  //       const errorMessage = error.message
  //       console.log(errorCode, errorMessage)
  //       alert(errorMessage)
  //       return null
  //     })
  //   console.log('user', user)
  //   return user
  // }

  // async connectPopup() {
  //   let user = await signInWithPopup(this.auth, this.provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result)
  //       const token = credential.accessToken
  //       // The signed-in user info.
  //       let user = result.user
  //       console.log(user, token)
  //       return user
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code
  //       const errorMessage = error.message
  //       // The email of the user's account used.
  //       // const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error)
  //       alert(error)
  //       console.log(error, errorCode, errorMessage, credential)

  //       return null
  //       // ...
  //     })
  //   console.log('user', user)
  //   return user
  // }
  // async deconnect() {
  //   return await signOut(this.auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       //this.user = null
  //       console.log('deconnecte')
  //       return { status: 'deconnecté' }
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //       alert(error)
  //       console.log(error)
  //       return { error: 'error' }
  //     })
  // }

  // async writeUserData(userId, name, email, imageUrl) {
  //   console.log('db', this.db)
  //   let res = await set(ref(this.db, 'users/' + userId), {
  //     username: name,
  //     email: email,
  //     profile_picture: imageUrl
  //   })

  //   return res
  // }

  // test() {
  //   console.log('db', this.db)
  //   let name = 'dav'
  //   let userId = 12
  //   let email = 'oih@uh.ze'
  //   let imageUrl = 'http://oughoh.pic'

  //   set(ref(this.db, 'users/' + userId), {
  //     username: name,
  //     email: email,
  //     profile_picture: imageUrl
  //   })
  // }
}

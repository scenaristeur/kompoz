
<template>
  <div>
    <!-- Test Bdd
    https://firebase.google.com/docs/database/web/start?hl=fr
    <hr>


    <hr> -->
    <!-- User : {{ user }} -->

    <div v-if="user">
      <RouterLink to="/profile">Mon Kompoz</RouterLink> | 
      <button @click="deconnect">Se deconnecter</button>
    </div>
    <div v-else>
      <button @click="connectPopup">Se connecter avec Google</button>
      <!-- <br>ou<br> -->

      <!-- <input v-model="email" placeholder="email" />
      <br>
      <input v-model="password" placeholder="mot de passe" />
      <br>
      <button @click="createUser">S'inscrire</button>
      <button @click="connectUser">Se connecter</button> -->


    </div>



  </div>
</template>

<script>


// // Import the functions you need from the SDKs you need


// import { getAnalytics } from "firebase/analytics";
// // import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// // AUTH https://firebase.google.com/docs/reference/js/?hl=fr&authuser=0&_gl=1*10jfmwh*_ga*NTY2NDEwNzc4LjE2OTU1Njg1Njk.*_ga_CW55HF8NVT*MTY5NTU2ODU2OC4xLjEuMTY5NTU2ODg5MS4wLjAuMA..
// // AUTH https://firebase.google.com/docs/auth/web/start?hl=fr
import {
  // getAuth,
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  onAuthStateChanged,
  // GoogleAuthProvider,
  // signInWithPopup,
  // signOut
} from "firebase/auth";



// // TODO: Add SDKs for Firebase products that you want to use

// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Importing User
import FB from '../db';

// Creating new user object
var fb = new FB();

// Printing data
console.log(fb);

export default {
  name: "BddFirebase",
  data() {
    return {
      user: null
    }
  },
  created() {

    console.log("fb is", fb.db)
    // Initialize Firebase

    // console.log("TEST VAR ", import.meta.env.VITE_FIREBASE_PROJECT_ID)



    // const analytics = getAnalytics(app);
    // console.log("Firebase ", analytics)


    // console.log("db", db)
    // let name = "dav"
    // let userId = 12
    // let email = "oih@uh.ze"
    // let imageUrl = "http://oughoh.pic"

    // set(ref(db, 'users/' + userId), {
    //   username: name,
    //   email: email,
    //   profile_picture: imageUrl
    // });


    // // Initialize Firebase Authentication and get a reference to the service
    // this.auth = getAuth(app);
    // // To apply the default browser preference instead of explicitly setting it.
    // this.auth.useDeviceLanguage();
    // console.log(this.auth)

    // //https://firebase.google.com/docs/auth/web/google-signin?authuser=0&hl=fr
    // this.provider = new GoogleAuthProvider();
    // this.provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // // this.provider.setCustomParameters({
    // //   'login_hint': 'user@example.com'
    // // });



    onAuthStateChanged(fb.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("uid", uid)
        this.user = user
        this.$router.push('/profile')
        this.$store.commit('setUser', user)

        // ...
      } else {
        this.user = user
        console.log("user",user)
        this.$router.push('/')
        this.$store.commit('setUser', null)
        // User is signed out
        // ...
      }
    });

    //     const db = getFirestore(app);

    // // Get a list of cities from your database
    // async function getCities(db) {
    //   const citiesCol = collection(db, 'cities');
    //   const citySnapshot = await getDocs(citiesCol);
    //   const cityList = citySnapshot.docs.map(doc => doc.data());
    //   return cityList;
    // }

    // let cities = getCities(db)
    // console.log(cities)

  },

  async mounted() {
    //let res = await this.writeUserData(1, "dav", "mail@priovider.gr", "http:LZEFZ")
    //console.log('res', res)
    // this.createUser("blim@grom.com", "kompose123")
  },


  methods: {
    async connectPopup() {
      fb.connectPopup()
    },
    async deconnect() {
      fb.deconnect()
    },
    async createUser() {
      fb.createUser()
    },
    async connectUser() {
      fb.connectUser()
    }

    // createUser() {

    //   createUserWithEmailAndPassword(this.auth, this.email, this.password).then((userCredential) => {
    //     // Signed in 
    //     let user = userCredential.user;
    //     console.log(user)
    //     // ...
    //   })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       console.log(errorCode, errorMessage)
    //       alert(errorMessage)
    //       this.user = null
    //       // ..
    //     })
    // },
    // connectUser() {
    //   signInWithEmailAndPassword(this.auth, this.email, this.password)
    //     .then((userCredential) => {
    //       // Signed in 
    //       let user = userCredential.user;
    //       console.log(user)
    //       // ...
    //     })
    //     .catch((error) => {
    //       this.user = null
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       console.log(errorCode, errorMessage)
    //       alert(errorMessage)

    //     });
    // },
    // connectPopup() {
    //   signInWithPopup(this.auth, this.provider)
    //     .then((result) => {
    //       // This gives you a Google Access Token. You can use it to access the Google API.
    //       const credential = GoogleAuthProvider.credentialFromResult(result);
    //       const token = credential.accessToken;
    //       // The signed-in user info.
    //       let user = result.user;
    //       console.log(user, token)
    //       // IdP data available using getAdditionalUserInfo(result)
    //       // ...
    //     }).catch((error) => {
    //       // Handle Errors here.
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // The email of the user's account used.
    //      // const email = error.customData.email;
    //       // The AuthCredential type that was used.
    //       const credential = GoogleAuthProvider.credentialFromError(error);
    //       console.log(credential)
    //       this.user = null
    //       alert(error)
    //       console.log(error, errorCode, errorMessage)
    //       // ...
    //     });
    // },
    // deconnect() {
    //   signOut(this.auth).then(() => {
    //     // Sign-out successful.
    //     this.user = null
    //   }).catch((error) => {
    //     // An error happened.
    //     alert(error)
    //     console.log(error)
    //   });
    // },





    // async writeUserData(userId, name, email, imageUrl) {
    //   const db = getDatabase();
    //   console.log("db", db)
    //   let res = await set(ref(db, 'users/' + userId), {
    //     username: name,
    //     email: email,
    //     profile_picture: imageUrl
    //   });

    //   return res
    // }
  }
  // computed: {
  //   user() {
  //     return this.$store.state.user;
  //   },

  //   users() {
  //     return this.$store.state.users;
  //   },
  //   COREawareness() {
  //     return this.$store.state.COREawareness;
  //   },
  //   EDITORawareness() {
  //     return this.$store.state.EDITORawareness;
  //   },
  // },
};



</script>

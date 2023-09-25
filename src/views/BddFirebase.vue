
<template>
  <div>
    Test Bdd
    https://firebase.google.com/docs/database/web/start?hl=fr
    <hr>


    <hr>
    <!-- User : {{ user }} -->

    <div v-if="user">
      <RouterLink to="/profile">Mon profile</RouterLink>
      <button @click="deconnect">Se deconnecter</button>
    </div>
    <div v-else>


      <button @click="connectPopup">Se connecter avec Google</button><br>ou<br>

      <input v-model="email" placeholder="email" />
      <br>
      <input v-model="password" placeholder="mot de passe" />
      <br>
      <button @click="createUser">S'inscrire</button>
      <button @click="connectUser">Se connecter</button>


    </div>


  </div>
</template>

<script>

import {
  onAuthStateChanged,
} from 'firebase/auth'


// Importing User
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}
import User from '../helper/User.js';
  
// Creating new user object
var user = new User( config);
  
// Printing data
console.log("UUUUUUUUUUUUUUUUUUUUUUUU",user);


//  import Firebase from '../helper/Firebase.js';
  
// // // Creating new user object
//  var fb = new Firebase(config);
  
// // // Printing data
//  console.log("UUUUUUUUUUUUUUUUUUUUUUUU FFFFFFFFFFFFFFFFFF",fb);


// import Firebase from '../helper/firebase';
// const firebase = new Firebase()

// console.log(firebase)
// firebase.test()



export default {
  name: "BddFirebase",
  data() {
    return {
      user: null
    }
  },
  created() {
  this.auth = firebase.auth
      onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("User UUID", uid)
        this.user = user
        this.$router.push('/profile')
        // ...
      } else {
        this.user == null
        this.$router.push('/')
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
    let res = await this.writeUserData(3, "dav", "mail@priovider.gr", "http:LZEFZ")
    console.log('res', res)
    // this.createUser("blim@grom.com", "kompose123")
  },


  methods: {

    createUser() {

      firebase.createUser( this.email, this.password)
    },
    connectUser() {
      firebase.connectUser(this.email, this.password)
    },
    connectPopup() {
      firebase.connectPopup()
    },
    deconnect() {
      let result = firebase.deconnect()
      console.log(result)
    },
    writeUserData(id, name, mail, avatar_url) {
      firebase.writeUserData(id, name, mail, avatar_url)
    }
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

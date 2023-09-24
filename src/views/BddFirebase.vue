
<template>
  <div>
    Test Bdd
    https://firebase.google.com/docs/database/web/start?hl=fr
    <hr>




  </div>
</template>

<script>


// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, set } from "firebase/database";

// AUTH https://firebase.google.com/docs/reference/js/?hl=fr&authuser=0&_gl=1*10jfmwh*_ga*NTY2NDEwNzc4LjE2OTU1Njg1Njk.*_ga_CW55HF8NVT*MTY5NTU2ODU2OC4xLjEuMTY5NTU2ODg5MS4wLjAuMA..



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL:import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};


export default {
  name: "BddFirebase",
  created() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    console.log("Firebase ", analytics)


    const db = getDatabase();
    console.log("db", db)
    let name = "dav"
    let userId = 12
    let email = "oih@uh.ze"
    let imageUrl = "http://oughoh.pic"

    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl
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
    let res = await this.writeUserData(1, "dav", "mail@priovider.gr", "http:LZEFZ")
    console.log('res', res)
  },


  methods: {
    async writeUserData(userId, name, email, imageUrl) {
      const db = getDatabase();
      console.log("db", db)
      let res = await set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
      });

      return res
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

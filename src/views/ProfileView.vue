<template>
  <main>
    <WelcomeItem v-if="user != null">
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Profile View</template>
      <!-- {{  user  }} -->
      Uid : {{ user.uid }}<br>
      Name : {{ user.displayName }}
      <br>
      Email : {{ user.email }}
      <br>
      <input type="checkbox" checked /> recevoir la newsletter

    </WelcomeItem>


    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Ma Famille</template>

      <input placeholder="nom de famille ou de groupe" v-model="group.name" />
      <button @click="createGroup">Create Group</button>
      <hr>
      <input placeholder="username" v-model="member.username" />
      <input placeholder="email" v-model="member.email" />
      <input placeholder="profile_picture" v-model="member.profile_picture" />
      <button @click="createMember">Creér un membre de la famille</button>
      <br>
      <RouterLink to="/">inviter membre les membres de ma famille</RouterLink>


      <button @click="getMembers">Get members</button>


      <h1>GROUPS</h1>
      <ul v-if="groups != null">
        <li v-for="[k, v] in Object.entries(groups) " :key="k">
          {{ v.name }}
        </li>
      </ul>



      <h1>MEMBRES</h1>
      <ul v-if="members != null">
        <li v-for="[k, v] in Object.entries(members) " :key="k">
          {{ v.username }}, {{ v.email }}
        </li>
        <li>
          - membre 2 Père / Papa / Bob, status : Moi
        </li>
        <li>
          - membre 3 / Fille / Agapenta, connectée
        </li>
        <li>
          - membre 4 / Gars / Trucd, inscrit
        </li>
        <li>
          - membre 5 / Fille / Gertrodite, salon discussion
        </li>

      </ul>


    </WelcomeItem>


  </main>
</template>

<script setup>
import WelcomeItem from '@/components/WelcomeItem.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import ToolingIcon from '@/components/icons/IconTooling.vue'
// import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
// import CommunityIcon from '@/components/icons/IconCommunity.vue'
// import SupportIcon from '@/components/icons/IconSupport.vue'

</script>
<script>
// import { getAuth } from "firebase/auth";
// import firebaseui from 'firebaseui';
// Importing User
import FB from '../db';

// Creating new user object
var fb = new FB();

// Printing data
console.log(fb);
export default {
  name: "ProfileView",

  data() {
    return {
      // user: null,
      member: {},
      members: null,
      group: {},
      groups: null
    }
  },
  created() {
    this.getMembers()
    this.getGroups()
    // const auth = getAuth();
    // this.user = auth.currentUser;

    // if (this.user) {
    //   console.log("OK", this.user)
    //   // User is signed in, see docs for a list of available properties
    //   // https://firebase.google.com/docs/reference/js/auth.user
    //   // ...
    // } else {
    //   this.$router.push('/')
    //   // No user is signed in.
    // }
  },
  methods: {
    createMember() {
      this.member.creator = this.user.uid
      this.member.created = Date.now()
      fb.createMember(this.member)
      this.member = {}
      this.getMembers()
    },
    getMembers() {
      fb.getMembers(this.updateMembers)
    },
    updateMembers(members) {
      console.log("UPDATING MEMBERS", members)
      this.members = members
    },
    createGroup() {
      this.group.creator = this.user.uid
      this.group.created = Date.now()
      fb.createGroup(this.group)
      this.group = {}
      this.getGroups()
    },
    getGroups() {
      fb.getGroups(this.updateGroups)
    },
    updateGroups(groups) {
      console.log("UPDATING GRoups", groups)
      this.groups = groups
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },

  }
}





</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

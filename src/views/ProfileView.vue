<template>
  <main>
    <WelcomeItem v-if="user != null">
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Profile View</template>
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

      <RouterLink to="/inviter">Inviter les membres de ma famille</RouterLink>


      <ul>
        <li>
          - membre 1 Mère :/ Maman / Anna , status invitée
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
import { getAuth } from "firebase/auth";

export default {
  name: "ProfileView",

  data() {
    return {
      user: null
    }
  },
  created() {
    const auth = getAuth();
    this.user = auth.currentUser;

    if (this.user) {
      console.log("OK", this.user)
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      // ...
    } else {
      this.$router.push('/')
      // No user is signed in.
    }
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

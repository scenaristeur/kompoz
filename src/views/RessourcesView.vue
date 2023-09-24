<template>
  <main>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Ressources</template>

    Une plateforme pour les familles modernes, qui facilite la réconciliation des familles.


    <RouterLink to="/kompoz">Kompoz en détails</RouterLink> 


<hr>
    <RouterLink to="/dekompoz">Ressources</RouterLink> | <RouterLink to="/dekompoz">Temoignages</RouterLink>...




  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>DeKompoz</template>


    Pour prendre les bonnes décisions.
    <RouterLink to="/dekompoz">DeKompoz</RouterLink>
  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>ReKompoz</template>
    Pour repartir sur de bonnes bases.

    <RouterLink to="/rekompoz">ReKompoz</RouterLink>


  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>AdoKompoz</template>

    Pour comprendre ce qui va t'arriver et t'aider à surmonter la situation.

    <RouterLink to="/adokompoz">AdoKompoz</RouterLink>
  
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>MiniKompoz</template>

    Pour aider les plus jeunes à se situer et à surmonter les changements.

    <RouterLink to="/minikompoz">MiniKompoz</RouterLink>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>A propos</template>

    Des questions sur l'application Kompoz ?
    <RouterLink to="/about">A propos</RouterLink>
  </WelcomeItem>
</main>
</template>

<script setup>
import WelcomeItem from '@/components/WelcomeItem.vue'
import DocumentationIcon from '@/components/icons/IconDocumentation.vue'
import ToolingIcon from '@/components/icons/IconTooling.vue'
import EcosystemIcon from '@/components/icons/IconEcosystem.vue'
import CommunityIcon from '@/components/icons/IconCommunity.vue'
import SupportIcon from '@/components/icons/IconSupport.vue'
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

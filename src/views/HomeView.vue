<template>
  <main>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Kompoz l'application</template>

      <p>Une plateforme pour les familles modernes, qui facilite la réconciliation des familles.</p>
      <br>
      <p>Kompoz est une application qui aide les couples en rupture, ainsi que les enfants impliqués, à traverser cette
        période difficile.
        <br>Elle offre un espace sécurisé et confidentiel pour les couples et les enfants, ainsi que des ressources et des
        conseils pour les aider à gérer les aspects pratiques de la séparation, à se reconstruire et à trouver un nouveau
        sens à leur vie.
      </p>
      <br>

      <p>
        L'application est divisée en plusieurs sections :
      <ul>
        <li>
          DeKompoz : pour la période de séparation
        </li>
        <li>
          ReKompoz : pour se reconstruire
        </li>
        <li>
          AdoKompoz : pour soutenir les ados
        </li>
        <li>
          MiniKompoz : pour expliquer et guider les plus jeunes
        </li>
      </ul>
      </p>

      <hr>
      D'autres sections peuvent également vous être utiles : <br>
      <RouterLink to="/ressources">Ressources</RouterLink> | <RouterLink to="/temoignages">Temoignages</RouterLink> |
      <RouterLink to="/forum">Forum</RouterLink>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Newsletter</template>
   
      <p>Restez informé des évolutions et de la parution de nouvelles fonctionnalités.</p>

      <input placeholder="email" type="email" />
      <button><a href="lien_de_telechargement">S'inscrire à la newsletter</a></button>

    </WelcomeItem>



    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Kompoz la démarche</template>


      La démarche et les outils de Kompoz expliqués plus en détail
      <RouterLink to="/kompoz">Kompoz</RouterLink>
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

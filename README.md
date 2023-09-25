# kompoz

- [X] pages principales
- [X] login : email/password & google
- [ ] ajouter les membres de sa famille à son profil (son cercle holacratie)
- [ ] revoir le design de la partie login
- [ ] implementer les fonctions pour créer son cercle familial et inviter les membres
- [ ] créer des groupes
https://www.youtube.com/watch?v=pP7quzFmWBY 
 https://www.youtube.com/watch?v=vy8jn-9yyt4



### backlog by Bard
for more see the discussion folder




salut, je souhaite créer une application permettant d'aider les couples à se séparer sans se déchirer. Je suis moi même divorcé, ça s'est mal passé, et j'en paie encore les conséquences. Aujourd'hui, je sens que l'un de mes collègues est dans une situation proche de la rupture,  et que ça serait peut-être bien pour lui, sa femme avec qui il ne semble pas heureux et leur filles. Peux-tu étendre le concept de cette application, et le généraliser, Dans l'idéal, chaque famille, (et leur proches éventuellement plus tard) possède un espace, workspace, j'envisageait de gérer ça comme un cercle en holacratie, avec les actions et les conseils de coachs, et de coachs numériques implémentés à base d'intelligence artificielle. Peux-tu m'écrire les userstory, les specs, le product-backlog ?

User story

    US1: En tant que couple en rupture, je souhaite avoir accès à un espace sécurisé et confidentiel pour discuter de notre situation.
    US2: En tant que couple en rupture, je souhaite avoir accès à des ressources et des conseils pour nous aider à traverser cette épreuve.
    US3: En tant que couple en rupture, je souhaite avoir la possibilité de travailler ensemble à l'élaboration d'un plan de séparation qui soit favorable à tous.
    US4: En tant que couple en rupture, je souhaite avoir accès à un soutien psychologique et émotionnel.

Specs

    Espace sécurisé et confidentiel: L'application doit être accessible uniquement aux membres du couple. Les données doivent être cryptées et stockées sur des serveurs sécurisés.
    Ressources et conseils: L'application doit proposer des ressources et des conseils adaptés à la situation du couple. Ces ressources peuvent inclure des articles, des vidéos, des podcasts, des exercices, etc.
    Plan de séparation: L'application doit fournir des outils pour aider le couple à élaborer un plan de séparation. Ce plan doit couvrir les aspects juridiques, financiers, logistiques, etc.
    Soutien psychologique et émotionnel: L'application doit proposer un soutien psychologique et émotionnel aux membres du couple. Ce soutien peut être fourni par des coachs professionnels ou par des coachs numériques.

Product backlog

    V1:
        Création d'un espace sécurisé et confidentiel pour les couples en rupture.
        Mise à disposition de ressources et de conseils pour les couples en rupture.
        Mise à disposition d'outils pour l'élaboration d'un plan de séparation.
        Mise à disposition d'un soutien psychologique et émotionnel.
    V2:
        Ajout d'une fonctionnalité de communication entre les membres du couple.
        Ajout d'une fonctionnalité de suivi de l'évolution de la séparation.
        Ajout d'une fonctionnalité de connexion avec des professionnels de la santé mentale.
    V3:
        Ajout d'une fonctionnalité de gestion des finances.
        Ajout d'une fonctionnalité de garde des enfants.
        Ajout d'une fonctionnalité de soutien aux enfants.

Extensions possibles

    Espace pour les proches: L'application pourrait également proposer un espace pour les proches des couples en rupture. Cet espace pourrait leur permettre de soutenir le couple et d'obtenir des informations sur la séparation.
    Cercle en holacratie: L'application pourrait être organisée comme un cercle en holacratie. Cela permettrait aux membres du couple de travailler ensemble à l'élaboration d'un plan de séparation qui soit favorable à tous.
    Coachs numériques: L'application pourrait utiliser des coachs numériques pour fournir un soutien psychologique et émotionnel aux membres du couple. Ces coachs numériques pourraient être basés sur l'intelligence artificielle ou sur l'IA conversationnelle.

Conclusion

Cette application a le potentiel d'aider les couples à se séparer sans se déchirer. En fournissant un espace sécurisé et confidentiel, des ressources et des conseils adaptés, et un soutien psychologique et émotionnel, l'application peut aider les couples à traverser cette épreuve difficile de manière plus saine et constructive.

Remarques

    Il est important de tester l'application avec des couples en rupture pour s'assurer qu'elle répond à leurs besoins.
    L'application doit être accessible à un coût abordable pour les couples en rupture.
    L'application doit être disponible dans plusieurs langues.


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Données 
vos données sont stockées et sécurisées sur Firebase en Belgique

## firebase auth
https://firebase.google.com/docs/auth/web/start?hl=fr
https://firebase.google.com/docs/auth/where-to-start?authuser=0&hl=fr
https://firebase.google.com/docs/auth/web/firebaseui?authuser=0&hl=fr
https://github.com/firebase/firebaseui-web

# utilisateurs
https://console.firebase.google.com/project/kompoz/authentication/users


## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup
a
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

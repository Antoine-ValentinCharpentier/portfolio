# Portfolio - Antoine Valentin Charpentier
Ce projet est un site web personnel qui présente mon parcours académique et professionnel, ainsi que les différents projets sur lesquels j'ai travaillé. Ce portfolio est destiné à partager mon expérience et mes compétences avec d'éventuels recruteurs, collaborateurs ou toute autre personne intéressée par mon parcours.

Si vous souhaitez consulter mon portfolio en ligne, il est accessible à l'adresse suivante : [antoinevalentin-charpentier.fr](https://antoinevalentin-charpentier.fr/)

## Fonctionnalités
- **Présentation personnelle** : Une section dédiée à mon parcours académique, mes expériences professionnelles, et mes compétences clés.
- **Projets réalisés** : Une galerie de projets sur lesquels j'ai eu l'occasion de travailler, avec des descriptions détaillées et des liens vers des dépôts GitHub
- **Contact** : Un formulaire de contact pour faciliter la prise de contact avec moi pour des opportunités professionnelles ou des collaborations.

## Prérequis
Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :
- [Node.js](https://nodejs.org/) (version 14.x ou supérieure)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)
- [Git](https://git-scm.com/)

## Installation et Mise en place

1. Clonez le dépôt du projet depuis GitHub en utilisant la commande suivante :
   ```bash
   git clone git@github.com:Antoine-ValentinCharpentier/portfolio.git
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd portfolio
   ```
3. Installez les dépendances nécessaires à l'aide de npm :
   ```bash
   npm i
   ```
4. Démarrez le projet en local :
   ```bash
   npm run start
   ```
5. Une fois le serveur démarré, ouvrez votre navigateur et accédez à l'adresse suivante pour consulter le site internet en local :
   ```bash
   http://localhost:3000/
   ```
## Technologies utilisées

Ce portfolio a été développé avec les technologies suivantes :
- ``React`` : Bibliothèque JavaScript pour créer des interfaces utilisateur dynamiques.
- ``Node.js`` : Environnement d'exécution JavaScript côté serveur.
- ``CSS`` et ``react-styled-components`` : Pour le stylisme et la mise en page du site.
- ``GitHub Pages`` : Déploiement et hébergement du site web.

## Deploiement
1. Assurez-vous d'être sur la branche principale (main). Si ce n'est pas le cas, exécutez la commande suivante pour y basculer 
   ```bash
   git checkout main
   ```
2. Lancez la commande de déploiement :
   ```bash
   npm run deploy
   ```

Cette commande va :
- Build le projet
- Puis pousser automatiquement le répertoire de build vers la branche ``gh-pages``, afin de rendre le portfolio accessible en ligne.
   

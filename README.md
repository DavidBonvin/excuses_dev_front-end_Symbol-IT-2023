# Excuses de Dev

Bienvenue dans l'application "Excuses de Dev" ! C'est un générateur de phrases
amusantes pour divertir les utilisateurs pendant qu'ils attendent.

## Configuration du projet

Pour démarrer le projet, suivez les étapes ci-dessous :

 - Cloner le repositorio.
 - Installer les modules en exécutant la commande "yarn" dans la ligne de commande.
 - Pour lancer le serveur, exécuter "yarn dev" dans la ligne de commande.
- Notez que le frontend dépend du backend, donc assurez-vous de cloner et configurer 
également le repositorio du backend en suivant les instructions du README correspondant 
avant de lancer les deux serveurs.
- https://github.com/DavidBonvin/excuses_dev_backend_Symbol-IT-2023.git

### Profitez de l'application "Excuses de Dev" et amusez-vous bien !

## Détails
L'interface de l'application est minimaliste, avec un titre, 
une phrase générée et un bouton. 

Une fois la phrase générée, elle sera affichée au centre de l'écran avec un 
bouton en dessous pour générer une nouvelle phrase.

### La structure des composants est la suivante :

- Un composant principal qui affiche le titre, la phrase et le bouton.
- Un sous-composant pour le bouton qui génère la phrase et l'envoie au composant parent.

## Routes
L'application comporte les routes suivantes :

- "/" => Page principale "Les excuses de dev".
- "/lost" => Page affichant "i’m lost" avec un gif au centre de la page.
Après 5 secondes, la page sera redirigée vers "/".
- "/error" => Page d'erreur 404.
- "/$http_code" => Page affichant le message correspondant au code HTTP.
- Le sous-composant bouton récupère une phrase aléatoire dans un tableau 
(préalablement récupéré depuis le backend) sans répéter la même phrase.

## Bonus (en option)
- Alimentation des excuses via le backend : Un bouton ouvre une modale 
pour saisir une nouvelle excuse (saisie libre). Un bouton "Valider" 
procède à l'enregistrement dans le backend, rendant la nouvelle excuse 
immédiatement disponible.
- lusion de labeur : Lors du clic sur le bouton, un loader apparaît 
avec un temps de chargement aléatoire entre 1 et 5 secondes avant d'afficher le résultat.
- Animations : Lors de l'arrivée sur la page, le titre est affiché 
au centre de l'écran avec un effet de fondu (Fade In) après 2 secondes.


## Technologies utilisées
L'application a été développée en utilisant les technologies suivantes :

- Vite : Un outil de build et de développement rapide pour les applications web modernes en JavaScript.

- JavaScript : Un langage de programmation populaire qui permet de développer des applications web interactives et dynamiques.

- Node.js : Un environnement d'exécution JavaScript côté serveur qui permet d'utiliser JavaScript pour créer des applications backend.

- Express : Un framework web pour Node.js qui simplifie la création d'APIs et de serveurs web robustes et performants.

- React : Une bibliothèque JavaScript populaire pour la création d'interfaces utilisateur réactives et dynamiques.

- Tailwind CSS : Une bibliothèque de classes utilitaires CSS pour créer rapidement des interfaces utilisateur modernes et responsives.

- PostCSS : Un outil de transformation CSS qui permet d'utiliser des fonctionnalités avancées comme les variables, les mixins et les préfixes automatiques.

- React Spring : Une bibliothèque d'animation pour React qui permet de créer facilement des animations fluides et interactives dans les applications web.

- MongoDB : Une base de données NoSQL.


### David Cordoba Bonvin


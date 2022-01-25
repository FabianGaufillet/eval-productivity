# Installation des paquets npm
```
npm install
```

# Démarrage de l'application

```
npm start
```

Application disponible en local sur le port 8070.

# Contenu évaluation

## 1 : Cloner le projet (1pt)

Le projet devra être cloné sur votre machine locale à partir de l'URI suivante : 

SSH : 
```bash
git clone git@bitbucket.org:virtuoworks/eval-productivite.git
```
ou bien
HTTPS : 
```bash
git clone https://bitbucket.org/virtuoworks/eval-productivite.git
```

## 2 : Créer une branche (1pt)

Vous créerez une branche que vous appelerez "eval" et vous positionnerez dessus. 
Ce sera votre branche de travail pour l'évaluation. Vous la fusionnerez avec la branche "main" à la fin de l'évaluation.

## 3 : Installer les dépendances (1pt)

Installez les dépendances du projet en utilisant le gestionnaire de paquet 'npm'.

## 4 : Documenter le code (2pts)

1. Vous utiliserez JSDoc, dont la documentation peut être consultée [ici](https://jsdoc.app/about-getting-started.html)
2. Faire un commit

## 5 : Linter le code (2pts)

1. Vous utiliserez ESLint pour linter le code (ESLint est déjà installé dans le projet). La documentation est consultable [ici](https://eslint.org/docs/user-guide/getting-started)
2. Faire un commit

## 6 : Embellir le code (1pt)

1. En utilisant Prettier, dont la documentation peut être trouvée [ici](https://prettier.io/docs/en/install.html), vous embellirez le code afin qu'il respecte les bonnes pratiques.
2. Faire un commit

## 7 : Renforcer le code (3pts)

Dans le projet a été intégrée une faille de sécurité béante...

Insérez la chaîne de caractères suivante dans le champ du formulaire :
```javascript
"<script>for(let i = 1; i < 20; i++) { alert(`Coucou ${i} fois !`) }</script>"
```

1. Corrigez cette faille de sécurité.
2. Faire un commit

## 8 : Modulariser le code (3pts)

Le code de l'application utilise deux fonctions principales permettant de récupérer des données depuis une API et une fonction permettant d'afficher le message d'un utilisateur. Vous ferez en sorte de :

1. Séparer les trois fonctions dans trois fichiers JS distincts qui exporteront le code de chaque fonction (par un export par défaut ou un export nommé) ;
2. Créer un fichier main.js que vous placerez dans le dossier /public/js ;
3. Importer les trois fonctions dans le fichier main.js ;
4. Modifier le code du fichier index.html afin qu'il charge le script main.js ;
5. Faire un commit.

## 9 : Tester le code (3pts)

1. En utilisant Jest, qui est installé dans le projet, vous créerez un test pour chacune des deux fonctions présentes dans le fichier /public/js/functionsToTest.js (returnAnObject et multiplyAllByTwo).
2. Faire un commit

Vous vérifierez bien que vos tests passent tous.

## 10 : Fusionner les branches (1pt)

Vous fusionnerez votre branche avec la branche main.

## 11 : Créer un dépôt distant (1pt)

Sur GitHub ou Bitbucket, à votre convenance, vous créerez un dépôt distant afin de pouvoir y envoyer le code de votre application.

## 12 : Sauvegarder le code en ligne (1pt)

Vous enverrez le code de votre branche main dans votre dépôt distant nouvellement créé.


# Après l'évaluation

Une fois l'évaluation terminée, vous enverrez le lien vers votre dépôt distant à l'adresse e-mail alexandre.masson@virtuoworks.com en précisant dans l'objet de l'e-mail les informations suivantes : [NOM] [prénom] [Promotion DIWJS]
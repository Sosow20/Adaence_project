<!--& Les actions sur les formulaire -->

Dans le cadre de Vanilla JS et la gestion des formulaires, pour éviter le rafraîchissement de la page au clique d'un bouton, n'oubliez pas d'ajouter e.preventDefault();.

Exemple :

document.querySelector('#search-button').addEventListener('click', (e) => {
  e.preventDefault();

  console.log('hellooooo');
});
☝️ Si vous ne comprenez pas ce commentaire, n’hésitez pas à vous référer aux encadrant.e.s

 
Les défis techniques 💪
 Mise en page avec flex et grid
 Gestion d’erreurs des formulaires
 display
 URLSearchParams
 fetch d’un json local
 Manipulation du DOM
 Génération des cards en JavaScript
 .appendChild()
 .removeChildren()
 Filtrer la donnée récupérée d’un json
 .filter()
 .map()
 BONUS : Pagination




<!-- & TEXTE  -->

Adaence - Rétablir le lien entre les générations
Rétablissons les liens
Et si vous offriez un peu de votre temps à ceux qui en ont le plus besoin ? Prenez rendez-vous pour partager un moment avec une personne âgée isolée.

Les personnalité à rencontrer
Feuilletez les visages de celles et ceux qui attendent simplement un peu de votre temps.
Chaque sourire porte une histoire, chaque rencontre est une promesse.


Comment ça marche
Offrir un peu de votre temps, c'est offrir beaucoup.
Découvrez comment planifier une visite en toute simplicité.

1. Choisissez une rencontre
Parcourez les profils de nos aînés et trouvez la personne avec qui vous aimeriez partager un moment chaleureux.

2. Remplissez le formulaire
Indiquez vos disponibilités et vos envies. Cela nous aide à organiser une rencontre adaptée et en toute confiance.

3. Partagez un moment
Rendez visite à la personne âgée dans un cadre bienveillant. Une discussion, une balade ou simplement l'aider à une tâche ! Chaque moment compte.

4. Créez du lien
Si le courant passe, vous pouvez revenir ! Ensemble, tissons des liens durables et combattons l'isolement pas à pas.


Prêt⸱e à faire la différence ?
Offrez un peu de votre temps, partagez un moment, créez du lien... Chaque présence compte. En tendant la main à une personne âgée, vous lui offrez bien plus qu'une visite : une vraie bouffée de chaleur humaine.

Notre mission est de recréer du lien avec les personnes âgées isolées, en leur offrant des moments de partage, d'écoute et de présence.

<!-- & Conventions git -->

Format des messages des commits
[[verbe]]: [[message]]
Ci-dessous 3 exemples de messages :

fix: prevent crash when user submits empty form
add: loading page when calling the API
rename: function users() to getUsers()
Dorénavant, vos messages doivent être écrits en anglais

Vous avez le droit d’utiliser les traducteurs pour écrire vos messages

Verbes
add : pour l’ajout de fonctionnalités
fix ou patch : pour corriger une fonctionnalité, un bug ou appliquer un correctif
update : pour mettre à jour du contenu ou des dépendances
clean : pour nettoyer
remove : pour la suppression de code, fichier ou dépendance
rename : lorsqu’on renomme des fichiers, des fonctions ou des variables
test : lorsqu’on ajoute ou modifie des tests
wip : “work in progress”, uniquement lorsqu’on est sur sa branche personnelle
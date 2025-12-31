window.QUIZ = [

    {
        title: "QCM 1 — Comptage de symboles",
        code: `On analyse une chaîne de caractères très longue (plusieurs millions de caractères).

On souhaite déterminer, pour chaque caractère distinct,
le nombre total de fois où il apparaît dans la chaîne.

Quelle structure de données est la plus adaptée pour représenter ce comptage
et permettre des mises à jour rapides ?`,
        choices: [
            "A. Une liste contenant tous les caractères",
            "B. Une liste de couples (caractère, compteur)",
            "C. Un dictionnaire caractère → compteur",
            "D. Une chaîne de caractères triée"
        ],
        correct: [2],
        explanation:
            "Chaque caractère doit être associé à un compteur. "
            + "Le dictionnaire permet un accès et une mise à jour en temps constant."
    },

    {
        title: "QCM 2 — État d’un joueur dans un jeu",
        code: `Dans un jeu vidéo, chaque joueur possède :
- un score,
- un nombre de vies,
- un inventaire (liste d’objets).

On veut accéder rapidement aux informations d’un joueur
à partir de son nom.

Quelle structure de données permet cette modélisation de façon claire et efficace ?`,
        choices: [
            "A. Une liste de scores",
            "B. Trois listes parallèles",
            "C. Un dictionnaire joueur → dictionnaire d’attributs",
            "D. Une liste de tuples"
        ],
        correct: [2],
        explanation:
            "Le nom du joueur sert naturellement de clé. "
            + "Les différentes informations sont regroupées dans un dictionnaire associé."
    },

    {
        title: "QCM 3 — Graphe pondéré (maths / informatique)",
        code: `On modélise un réseau de villes.
Chaque ville est reliée à d’autres par des routes,
et chaque route possède une distance.

On veut pouvoir accéder rapidement à la distance
entre une ville donnée et chacune de ses voisines.

Quelle structure de données est la plus adaptée ?`,
        choices: [
            "A. Une liste de villes",
            "B. Une matrice de distances",
            "C. Un dictionnaire ville → dictionnaire (ville_voisine → distance)",
            "D. Une liste de tuples (ville1, ville2, distance)"
        ],
        correct: [2],
        explanation:
            "Chaque ville est une clé. "
            + "Les routes sortantes et leurs distances sont stockées dans un dictionnaire interne."
    },

    {
        title: "QCM 4 — Mémoïsation d’une fonction",
        code: `On calcule une fonction f(n) très coûteuse.
La fonction est appelée plusieurs fois avec les mêmes valeurs de n.

On veut mémoriser les résultats déjà calculés
afin d’éviter les recalculs inutiles.

Quelle structure de données utiliser pour implémenter ce cache ?`,
        choices: [
            "A. Une liste des résultats",
            "B. Un dictionnaire n → f(n)",
            "C. Une variable globale",
            "D. Une boucle imbriquée"
        ],
        correct: [1],
        explanation:
            "On associe directement chaque entrée n à son résultat f(n). "
            + "Le dictionnaire joue le rôle de cache."
    },

    {
        title: "QCM 5 — Regroupement de données",
        code: `On dispose d’une liste de couples (élève, classe).
Plusieurs élèves peuvent appartenir à la même classe.

On veut construire une structure permettant,
pour chaque classe, d’obtenir la liste des élèves correspondants.

Quelle structure de données est la plus appropriée ?`,
        choices: [
            "A. Une liste de classes",
            "B. Un dictionnaire élève → classe",
            "C. Un dictionnaire classe → liste d’élèves",
            "D. Une liste triée"
        ],
        correct: [2],
        explanation:
            "Une même clé (la classe) doit regrouper plusieurs valeurs. "
            + "La valeur associée doit donc être une liste."
    },

    {
        title: "QCM 6 — Création de valeurs indépendantes",
        code: `On veut créer un dictionnaire associant à chaque entier i
une liste contenant uniquement i.

On souhaite que chaque clé possède sa propre liste indépendante.

Quelle propriété de la structure obtenue est correcte ?`,
        choices: [
            "A. Toutes les listes sont identiques",
            "B. Chaque clé possède sa propre liste",
            "C. Une erreur est levée",
            "D. Le dictionnaire est vide"
        ],
        correct: [1],
        explanation:
            "Une nouvelle liste est créée pour chaque clé. "
            + "Les valeurs ne sont pas partagées."
    },

    {
        title: "QCM 7 — Cache partagé entre appels",
        code: `On implémente une fonction qui utilise un dictionnaire global
pour stocker les résultats déjà calculés.

La fonction est appelée plusieurs fois successivement.

Quel est l’effet de ce choix de structure de données ?`,
        choices: [
            "A. Le cache est perdu à chaque appel",
            "B. Le cache permet d’accélérer les appels suivants",
            "C. Le cache modifie le résultat",
            "D. Le programme devient incorrect"
        ],
        correct: [1],
        explanation:
            "Le dictionnaire global persiste entre les appels. "
            + "Les résultats précédents sont réutilisés."
    },

    {
        title: "QCM 8 — Regroupement temporel",
        code: `On observe des événements horodatés.
Plusieurs événements peuvent se produire le même jour.

On veut regrouper les événements par date.

Quelle structure de données est la plus adaptée ?`,
        choices: [
            "A. Une liste d’événements",
            "B. Un dictionnaire date → événement",
            "C. Un dictionnaire date → liste d’événements",
            "D. Une chaîne de caractères"
        ],
        correct: [2],
        explanation:
            "Une date peut correspondre à plusieurs événements. "
            + "La valeur associée doit donc être une liste."
    },

    {
        title: "QCM 9 — Automate fini",
        code: `On modélise un automate fini.
L’état suivant dépend :
- de l’état courant,
- du symbole lu.

On veut accéder rapidement à l’état suivant.

Quelle structure de données permet cette modélisation ?`,
        choices: [
            "A. Une liste d’états",
            "B. Un dictionnaire état → état",
            "C. Un dictionnaire (état, symbole) → état",
            "D. Une matrice booléenne"
        ],
        correct: [2],
        explanation:
            "La transition dépend de deux paramètres. "
            + "Une clé composée (état, symbole) est naturelle."
    },

    {
        title: "QCM 10 — Choix algorithmique fondamental",
        code: `On doit effectuer un très grand nombre de recherches par clé
sur une structure de données.

Quel type de structure est le plus adapté d’un point de vue algorithmique ?`,
        choices: [
            "A. Une liste",
            "B. Un dictionnaire",
            "C. Une boucle imbriquée",
            "D. Un tri préalable"
        ],
        correct: [1],
        explanation:
            "Les dictionnaires offrent un accès en temps constant en moyenne. "
            + "Ils sont donc adaptés aux recherches fréquentes."
    }

];

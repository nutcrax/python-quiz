window.QUIZ = [

    {
        title: "QCM 1 — Rendu de monnaie (contre-exemple)",
        code: `On dispose des pièces suivantes : [1, 3, 4]
On veut rendre la somme 6.

Stratégie gloutonne :
→ prendre à chaque étape la plus grande pièce possible.

Quelle somme de pièces obtient-on ?`,
        choices: [
            "A. 4 + 1 + 1 (3 pièces)",
            "B. 3 + 3 (2 pièces)",
            "C. 4 + 2",
            "D. 1 + 1 + 1 + 1 + 1 + 1"
        ],
        correct: [0],
        explanation:
            "Le glouton choisit 4, puis 1, puis 1. "
            + "La solution optimale (3 + 3) montre que le glouton échoue ici."
    },

    {
        title: "QCM 2 — Sac à dos 0/1",
        code: `On considère le problème du sac à dos 0/1.
Chaque objet a un poids et une valeur.
On ne peut prendre chaque objet qu’une seule fois.

Que se passe-t-il si l’on choisit toujours
l’objet de meilleur rapport valeur/poids ?`,
        choices: [
            "A. La solution est toujours optimale",
            "B. La solution est parfois sous-optimale",
            "C. La solution est équivalente à la programmation dynamique",
            "D. Le problème devient polynomial"
        ],
        correct: [1],
        explanation:
            "Le critère valeur/poids est glouton mais "
            + "ne garantit pas l’optimalité pour le sac à dos 0/1."
    },

    {
        title: "QCM 3 — Sac à dos fractionnaire",
        code: `On considère maintenant le sac à dos fractionnaire.
On peut prendre une fraction d’un objet.

Quelle stratégie est correcte ?`,
        choices: [
            "A. Prendre les objets les plus lourds",
            "B. Prendre les objets les plus légers",
            "C. Prendre les objets de meilleur rapport valeur/poids",
            "D. Tester toutes les combinaisons"
        ],
        correct: [2],
        explanation:
            "Dans le cas fractionnaire, le choix glouton "
            + "par valeur/poids est optimal."
    },

    {
        title: "QCM 4 — Ordre des choix",
        code: `Dans un algorithme glouton,
pourquoi l’ordre dans lequel on considère les choix est-il crucial ?`,
        choices: [
            "A. Parce que le langage l’impose",
            "B. Parce que l’ordre peut influencer la solution finale",
            "C. Parce que l’algorithme devient récursif",
            "D. Parce que cela change la complexité asymptotique"
        ],
        correct: [1],
        explanation:
            "Un mauvais ordre peut conduire à un choix local "
            + "qui empêche d’atteindre l’optimum global."
    },

    {
        title: "QCM 5 — Planification d’activités",
        code: `On souhaite sélectionner le maximum d’activités
sans chevauchement.
Chaque activité a une heure de début et de fin.

Quelle stratégie gloutonne est correcte ?`,
        choices: [
            "A. Choisir l’activité la plus longue",
            "B. Choisir l’activité qui commence le plus tôt",
            "C. Choisir l’activité qui finit le plus tôt",
            "D. Choisir au hasard"
        ],
        correct: [2],
        explanation:
            "Choisir l’activité qui se termine le plus tôt "
            + "laisse un maximum de place pour les suivantes."
    },

    {
        title: "QCM 6 — Glouton incorrect",
        code: `On modifie la stratégie précédente :
on choisit toujours l’activité qui commence le plus tôt.

Cette stratégie est :`,
        choices: [
            "A. Toujours correcte",
            "B. Correcte uniquement pour deux activités",
            "C. Incorrecte en général",
            "D. Équivalente à la précédente"
        ],
        correct: [2],
        explanation:
            "Commencer tôt ne garantit pas de libérer du temps "
            + "pour les activités suivantes."
    },

    {
        title: "QCM 7 — Contre-exemple",
        code: `Pourquoi un seul contre-exemple suffit-il
à invalider un algorithme glouton ?`,
        choices: [
            "A. Parce qu’il montre que l’algorithme est lent",
            "B. Parce qu’il montre que l’algorithme est mal codé",
            "C. Parce qu’il montre que le choix local n’est pas toujours optimal",
            "D. Parce qu’il change la complexité"
        ],
        correct: [2],
        explanation:
            "Un algorithme correct doit fonctionner pour tous les cas. "
            + "Un seul échec suffit à le réfuter."
    },

    {
        title: "QCM 8 — Glouton vs programmation dynamique",
        code: `Pourquoi utilise-t-on parfois la programmation dynamique
au lieu d’un algorithme glouton ?`,
        choices: [
            "A. Parce que le glouton est toujours faux",
            "B. Parce que le glouton est trop lent",
            "C. Parce que le glouton ne garantit pas l’optimalité",
            "D. Parce que la programmation dynamique est plus simple"
        ],
        correct: [2],
        explanation:
            "La programmation dynamique garantit l’optimalité "
            + "lorsque le glouton échoue."
    },

    {
        title: "QCM 9 — Reconnaissance",
        code: `Lequel des problèmes suivants
admet une solution gloutonne correcte ?`,
        choices: [
            "A. Sac à dos 0/1",
            "B. N-reines",
            "C. Planification d’activités",
            "D. Recherche exhaustive"
        ],
        correct: [2],
        explanation:
            "La planification d’activités est un cas canonique "
            + "d’algorithme glouton correct."
    },

    {
        title: "QCM 10 — Message clé",
        code: `Quelle conclusion est la plus juste
concernant les algorithmes gloutons ?`,
        choices: [
            "A. Ils sont toujours faux",
            "B. Ils sont toujours optimaux",
            "C. Ils sont corrects uniquement pour certains problèmes",
            "D. Ils remplacent la programmation dynamique"
        ],
        correct: [2],
        explanation:
            "Un algorithme glouton est puissant mais "
            + "ne fonctionne que si le problème possède la bonne structure."
    }

];

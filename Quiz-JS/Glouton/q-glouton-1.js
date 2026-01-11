window.QUIZ = [

    {
        title: "QCM 1 — Principe d’un algorithme glouton",
        code: `Un algorithme glouton construit une solution
en faisant, à chaque étape, un choix immédiat.

Quel est le principe fondamental d’un algorithme glouton ?`,
        choices: [
            "A. Explorer toutes les solutions possibles",
            "B. Faire à chaque étape le choix localement optimal",
            "C. Tester toutes les combinaisons",
            "D. Corriger les erreurs a posteriori"
        ],
        correct: [1],
        explanation:
            "Un algorithme glouton prend à chaque étape la décision "
            + "qui semble la meilleure localement, sans revenir en arrière."
    },

    {
        title: "QCM 2 — Choix local vs optimum global",
        code: `Quelle affirmation décrit correctement
la relation entre choix local et solution globale
dans un algorithme glouton ?`,
        choices: [
            "A. Un bon choix local garantit toujours la meilleure solution globale",
            "B. Le choix local est indépendant du problème",
            "C. Le choix local peut conduire ou non à une solution optimale",
            "D. Le choix local est toujours faux"
        ],
        correct: [2],
        explanation:
            "Un algorithme glouton n’est correct que pour certains problèmes. "
            + "Un bon choix local ne garantit pas toujours l’optimum global."
    },

    {
        title: "QCM 3 — Retour arrière",
        code: `Comment un algorithme glouton gère-t-il
les décisions déjà prises ?`,
        choices: [
            "A. Il peut revenir en arrière si nécessaire",
            "B. Il teste plusieurs alternatives",
            "C. Il ne revient jamais sur un choix",
            "D. Il mémorise toutes les possibilités"
        ],
        correct: [2],
        explanation:
            "Une fois un choix effectué, un algorithme glouton "
            + "ne le remet pas en question."
    },

    {
        title: "QCM 4 — Comparaison avec le backtracking",
        code: `Quelle différence fondamentale distingue
un algorithme glouton du backtracking ?`,
        choices: [
            "A. Le glouton utilise des boucles",
            "B. Le glouton explore toutes les solutions",
            "C. Le glouton ne revient pas sur ses choix",
            "D. Le backtracking est toujours plus rapide"
        ],
        correct: [2],
        explanation:
            "Le backtracking explore différentes branches "
            + "et revient en arrière, contrairement au glouton."
    },

    {
        title: "QCM 5 — Exemple classique",
        code: `Lequel des problèmes suivants
admet une solution gloutonne classique ?`,
        choices: [
            "A. Le problème des N-reines",
            "B. Le tri d’un tableau",
            "C. Le rendu de monnaie (dans certains systèmes)",
            "D. Le sac à dos 0/1"
        ],
        correct: [2],
        explanation:
            "Dans certains systèmes monétaires, "
            + "choisir toujours la plus grande pièce possible fonctionne."
    },

    {
        title: "QCM 6 — Performance",
        code: `Pourquoi les algorithmes gloutons
sont-ils souvent très rapides ?`,
        choices: [
            "A. Ils explorent toutes les solutions",
            "B. Ils utilisent la récursion",
            "C. Ils font un seul choix à chaque étape",
            "D. Ils corrigent les erreurs après coup"
        ],
        correct: [2],
        explanation:
            "Le fait de ne considérer qu’un seul choix à chaque étape "
            + "réduit fortement le temps de calcul."
    },

    {
        title: "QCM 7 — Garantie de correction",
        code: `Un algorithme glouton est correct :`,
        choices: [
            "A. Pour tous les problèmes",
            "B. Uniquement s’il existe une propriété de choix glouton",
            "C. S’il est récursif",
            "D. S’il est plus rapide que les autres"
        ],
        correct: [1],
        explanation:
            "Un algorithme glouton n’est correct que si le problème "
            + "possède une structure particulière garantissant l’optimalité."
    },

    {
        title: "QCM 8 — Contre-exemple",
        code: `Pourquoi est-il important de chercher
des contre-exemples pour un algorithme glouton ?`,
        choices: [
            "A. Pour optimiser le code",
            "B. Pour prouver qu’il est toujours faux",
            "C. Pour vérifier qu’un choix local ne mène pas à une mauvaise solution",
            "D. Pour mesurer la complexité"
        ],
        correct: [2],
        explanation:
            "Un seul contre-exemple suffit à montrer "
            + "qu’un algorithme glouton n’est pas correct en général."
    },

    {
        title: "QCM 9 — Glouton et optimalité",
        code: `Quelle affirmation est correcte ?`,
        choices: [
            "A. Un algorithme glouton trouve toujours une solution optimale",
            "B. Un algorithme glouton trouve parfois une solution optimale",
            "C. Un algorithme glouton ne trouve jamais de solution",
            "D. Un algorithme glouton est équivalent à la programmation dynamique"
        ],
        correct: [1],
        explanation:
            "Selon le problème, un algorithme glouton peut être correct ou non."
    },

    {
        title: "QCM 10 — Reconnaître un algorithme glouton",
        code: `Lequel des schémas suivants
correspond le mieux à un algorithme glouton ?`,
        choices: [
            "A. Tester toutes les solutions puis choisir la meilleure",
            "B. Choisir, vérifier, revenir en arrière",
            "C. Choisir localement le meilleur, puis continuer",
            "D. Mémoriser tous les sous-problèmes"
        ],
        correct: [2],
        explanation:
            "Le cœur d’un algorithme glouton est "
            + "la répétition de choix localement optimaux."
    }

];

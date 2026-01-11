window.QUIZ = [

    {
        title: "QCM 1 — Problème des N-reines",
        code: `Le problème des N-reines consiste à placer N reines
sur un échiquier N×N de sorte qu’aucune reine
ne puisse en attaquer une autre.

Quelles contraintes doivent être respectées ?`,
        choices: [
            "A. Une reine par ligne uniquement",
            "B. Une reine par colonne uniquement",
            "C. Aucune deux reines sur la même diagonale",
            "D. Toutes les réponses précédentes"
        ],
        correct: [3],
        explanation:
            "Deux reines ne doivent partager ni ligne, ni colonne, ni diagonale."
    },

    {
        title: "QCM 2 — Représentation d’une solution partielle",
        code: `On place une reine par ligne.
On utilise une liste L telle que :

L[i] = colonne de la reine placée sur la ligne i.

Que représente la longueur de L ?`,
        choices: [
            "A. Le nombre total de reines",
            "B. Le nombre de lignes déjà traitées",
            "C. Le nombre de colonnes libres",
            "D. La taille de l’échiquier"
        ],
        correct: [1],
        explanation:
            "Chaque élément de la liste correspond à une ligne déjà remplie."
    },

    {
        title: "QCM 3 — Validité locale",
        code: `Lorsqu’on place une reine sur la ligne i
en colonne c, que faut-il vérifier pour garantir
que la solution partielle reste valide ?`,
        choices: [
            "A. Que c n’est pas déjà utilisée",
            "B. Qu’aucune reine précédente n’est sur la même diagonale",
            "C. Que la ligne est libre",
            "D. A et B uniquement"
        ],
        correct: [3],
        explanation:
            "Les lignes sont gérées implicitement. "
            + "Il faut vérifier colonnes et diagonales."
    },

    {
        title: "QCM 4 — Test des diagonales",
        code: `Deux reines placées en (i, L[i]) et (j, L[j])
sont sur la même diagonale si :`,
        choices: [
            "A. i == j",
            "B. L[i] == L[j]",
            "C. |i − j| == |L[i] − L[j]|",
            "D. i + j == L[i] + L[j]"
        ],
        correct: [2],
        explanation:
            "L’égalité des différences absolues caractérise les diagonales."
    },

    {
        title: "QCM 5 — Structure du backtracking",
        code: `Dans l’algorithme des N-reines,
que représente chaque appel récursif ?`,
        choices: [
            "A. Le test d’une colonne",
            "B. Le placement d’une reine sur une nouvelle ligne",
            "C. La vérification finale",
            "D. Une suppression de reine"
        ],
        correct: [1],
        explanation:
            "Chaque appel correspond à une tentative de placement "
            + "sur la ligne suivante."
    },

    {
        title: "QCM 6 — Condition d’arrêt",
        code: `À quel moment une solution complète est-elle trouvée ?`,
        choices: [
            "A. Lorsqu’aucune colonne n’est libre",
            "B. Lorsqu’on ne peut plus placer de reine",
            "C. Lorsque la longueur de L vaut N",
            "D. Lorsque la diagonale est valide"
        ],
        correct: [2],
        explanation:
            "Une reine par ligne : lorsque toutes les lignes sont remplies, "
            + "la solution est complète."
    },

    {
        title: "QCM 7 — Backtracking effectif",
        code: `Pourquoi retire-t-on la dernière reine
après l’appel récursif ?`,
        choices: [
            "A. Pour libérer la mémoire",
            "B. Pour corriger une erreur",
            "C. Pour tester une autre colonne sur la même ligne",
            "D. Pour afficher la solution"
        ],
        correct: [2],
        explanation:
            "Le retour arrière permet d’explorer d’autres possibilités "
            + "sur la même ligne."
    },

    {
        title: "QCM 8 — Complexité",
        code: `Quel est l’ordre de grandeur du nombre de configurations
testées par l’algorithme naïf des N-reines ?`,
        choices: [
            "A. Linéaire",
            "B. Quadratique",
            "C. Exponentiel / factoriel",
            "D. Constant"
        ],
        correct: [2],
        explanation:
            "Le nombre de placements possibles croît très rapidement "
            + "avec N."
    },

    {
        title: "QCM 9 — Rôle des coupures",
        code: `Pourquoi le test de validité locale
réduit-il drastiquement le nombre de configurations explorées ?`,
        choices: [
            "A. Il évite de placer toutes les reines",
            "B. Il supprime très tôt les branches impossibles",
            "C. Il réduit la taille de l’échiquier",
            "D. Il élimine la récursion"
        ],
        correct: [1],
        explanation:
            "Une configuration invalide partielle "
            + "ne peut mener à aucune solution complète."
    },

    {
        title: "QCM 10 — Généralisation",
        code: `Le problème des N-reines est un exemple de :`,
        choices: [
            "A. Tri",
            "B. Programmation dynamique",
            "C. Recherche exhaustive avec contraintes",
            "D. Algorithme glouton"
        ],
        correct: [2],
        explanation:
            "Le backtracking explore l’espace des solutions "
            + "tout en respectant des contraintes locales."
    }

];

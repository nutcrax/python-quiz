window.QUIZ = [

    {
        title: "QCM 1 — Principe du backtracking",
        code: `On cherche une solution parmi un grand nombre de possibilités,
en construisant progressivement une solution partielle.

Dès qu’une solution partielle ne peut plus mener à une solution valide,
on revient en arrière pour essayer un autre choix.

Quel nom porte ce principe algorithmique ?`,
        choices: [
            "A. Programmation dynamique",
            "B. Recherche exhaustive simple",
            "C. Backtracking",
            "D. Tri récursif"
        ],
        correct: [2],
        explanation:
            "Le backtracking consiste à explorer l’espace des solutions "
            + "en abandonnant dès que possible les branches invalides."
    },

    {
        title: "QCM 2 — Arbre de recherche",
        code: `Dans un algorithme de backtracking,
les différentes solutions possibles sont souvent représentées implicitement
par une structure conceptuelle.

Quelle structure décrit le mieux cette exploration ?`,
        choices: [
            "A. Une liste chaînée",
            "B. Un graphe cyclique",
            "C. Un arbre de recherche",
            "D. Une matrice"
        ],
        correct: [2],
        explanation:
            "Chaque nœud correspond à une solution partielle, "
            + "et chaque branche à un choix possible."
    },

    {
        title: "QCM 3 — Arrêt anticipé",
        code: `Pourquoi le backtracking est-il souvent beaucoup plus efficace
qu’une recherche exhaustive naïve ?`,
        choices: [
            "A. Il évite la récursion",
            "B. Il trie les solutions",
            "C. Il coupe des branches entières dès qu’elles sont invalides",
            "D. Il mémorise toutes les solutions"
        ],
        correct: [2],
        explanation:
            "Le backtracking élimine tôt les solutions impossibles, "
            + "ce qui réduit drastiquement le nombre de cas explorés."
    },

    {
        title: "QCM 4 — Structure typique d’un algorithme",
        code: `Quel schéma correspond le mieux à un algorithme de backtracking ?`,
        choices: [
            "A. Une boucle for unique",
            "B. Une fonction récursive avec tests de validité",
            "C. Une suite de if sans retour arrière",
            "D. Une double boucle imbriquée"
        ],
        correct: [1],
        explanation:
            "Le backtracking repose presque toujours sur une récursion "
            + "qui construit une solution étape par étape."
    },

    {
        title: "QCM 5 — Problèmes typiques",
        code: `Lequel des problèmes suivants est typiquement résolu
à l’aide du backtracking ?`,
        choices: [
            "A. Tri d’un tableau",
            "B. Recherche d’un élément dans une liste",
            "C. Résolution du problème des N reines",
            "D. Calcul d’une moyenne"
        ],
        correct: [2],
        explanation:
            "Le problème des N reines est un exemple classique de backtracking : "
            + "on place les reines progressivement et on revient en arrière si un conflit apparaît."
    },

    {
        title: "QCM 6 — Solution partielle",
        code: `Dans un algorithme de backtracking,
que représente une « solution partielle » ?`,
        choices: [
            "A. Une solution forcément correcte",
            "B. Une solution complète",
            "C. Un état intermédiaire en cours de construction",
            "D. Une solution optimisée"
        ],
        correct: [2],
        explanation:
            "Une solution partielle correspond à un choix incomplet, "
            + "qui pourra être étendu ou abandonné."
    },

    {
        title: "QCM 7 — Condition de validité",
        code: `À quel moment teste-t-on généralement
si une solution partielle est valide ?`,
        choices: [
            "A. Uniquement à la fin",
            "B. À chaque étape de construction",
            "C. Une seule fois au début",
            "D. Jamais"
        ],
        correct: [1],
        explanation:
            "Le test de validité doit être effectué à chaque étape "
            + "pour pouvoir couper rapidement les branches invalides."
    },

    {
        title: "QCM 8 — Complexité",
        code: `Quelle affirmation est correcte concernant la complexité
des algorithmes de backtracking ?`,
        choices: [
            "A. Toujours linéaire",
            "B. Toujours polynomiale",
            "C. Exponentielle dans le pire cas",
            "D. Constante"
        ],
        correct: [2],
        explanation:
            "Le backtracking explore un espace de solutions potentiellement exponentiel, "
            + "même si les coupures le rendent efficace en pratique."
    },

    {
        title: "QCM 9 — Backtracking vs programmation dynamique",
        code: `Quelle différence fondamentale distingue le backtracking
de la programmation dynamique ?`,
        choices: [
            "A. Le backtracking utilise des boucles, pas la programmation dynamique",
            "B. La programmation dynamique évite toute récursion",
            "C. Le backtracking explore, la programmation dynamique mémorise des sous-problèmes",
            "D. Il n’y a aucune différence"
        ],
        correct: [2],
        explanation:
            "La programmation dynamique stocke et réutilise des sous-résultats, "
            + "alors que le backtracking explore et élimine."
    },

    {
        title: "QCM 10 — Reconnaître un backtracking",
        code: `Lequel des pseudo-codes suivants correspond
le mieux à un algorithme de backtracking ?`,
        choices: [
            "A. for i in range(n): traiter(i)",
            "B. if solution_complete: retourner",
            "C. choisir → tester → appeler récursivement → annuler le choix",
            "D. trier puis parcourir"
        ],
        correct: [2],
        explanation:
            "Le cœur du backtracking est : "
            + "faire un choix, vérifier, explorer récursivement, puis revenir en arrière."
    }

];

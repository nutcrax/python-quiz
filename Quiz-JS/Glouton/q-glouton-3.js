window.QUIZ = [

    {
        title: "QCM 1 — Propriété de choix glouton",
        code: `Pour qu’un algorithme glouton soit correct,
le problème doit vérifier une propriété essentielle.

Laquelle ?`,
        choices: [
            "A. Toute solution optimale peut être obtenue par récursion",
            "B. Il existe toujours une solution unique",
            "C. Il existe une solution optimale commençant par un choix local optimal",
            "D. Le problème est polynomial"
        ],
        correct: [2],
        explanation:
            "La propriété de choix glouton garantit "
            + "qu’un choix local optimal peut mener à une solution globale optimale."
    },

    {
        title: "QCM 2 — Arbres couvrants minimaux",
        code: `On cherche un arbre couvrant de poids minimal
dans un graphe connexe pondéré.

Pourquoi l’algorithme de Kruskal est-il glouton et correct ?`,
        choices: [
            "A. Il teste toutes les combinaisons possibles",
            "B. Il choisit toujours l’arête la plus légère sans créer de cycle",
            "C. Il utilise la programmation dynamique",
            "D. Il explore un arbre de recherche"
        ],
        correct: [1],
        explanation:
            "Kruskal choisit localement l’arête de poids minimal "
            + "compatible avec une solution partielle, ce qui est prouvablement optimal."
    },

    {
        title: "QCM 3 — Justification de Kruskal",
        code: `Quelle propriété structurelle du problème
des arbres couvrants minimaux
justifie la validité du choix glouton de Kruskal ?`,
        choices: [
            "A. Propriété de sous-structure optimale",
            "B. Propriété de coupe",
            "C. Absence de récursion",
            "D. Linéarité du graphe"
        ],
        correct: [1],
        explanation:
            "La propriété de coupe garantit "
            + "que l’arête la plus légère traversant une coupe appartient à un ACM."
    },

    {
        title: "QCM 4 — Huffman",
        code: `L’algorithme de Huffman construit
un code de longueur minimale.

Quel est le choix glouton fondamental de Huffman ?`,
        choices: [
            "A. Fusionner les deux symboles les plus fréquents",
            "B. Fusionner les deux symboles les moins fréquents",
            "C. Supprimer les symboles rares",
            "D. Trier les symboles par ordre alphabétique"
        ],
        correct: [1],
        explanation:
            "Huffman fusionne toujours les deux symboles "
            + "de plus faible fréquence, choix glouton prouvé optimal."
    },

    {
        title: "QCM 5 — Preuve d’optimalité (Huffman)",
        code: `Pourquoi le choix glouton de Huffman
ne compromet-il jamais l’optimalité globale ?`,
        choices: [
            "A. Parce que les fréquences sont fixes",
            "B. Parce qu’on peut toujours transformer un code optimal "
            + "pour que les deux symboles les moins fréquents soient frères",
            "C. Parce que l’arbre est binaire",
            "D. Parce que la profondeur est minimale"
        ],
        correct: [1],
        explanation:
            "La preuve repose sur un argument d’échange : "
            + "on peut modifier un code optimal sans augmenter son coût."
    },

    {
        title: "QCM 6 — Glouton vs programmation dynamique",
        code: `Pourquoi n’existe-t-il pas d’algorithme glouton
correct pour le sac à dos 0/1 ?`,
        choices: [
            "A. Parce que le problème est trop lent",
            "B. Parce qu’il n’existe pas de propriété de choix glouton",
            "C. Parce que la récursion est impossible",
            "D. Parce que la DP est plus simple"
        ],
        correct: [1],
        explanation:
            "Aucun critère local ne garantit "
            + "une extension optimale pour le sac à dos 0/1."
    },

    {
        title: "QCM 7 — Argument d’échange",
        code: `À quoi sert un argument d’échange
dans la preuve de correction d’un algorithme glouton ?`,
        choices: [
            "A. À comparer les complexités",
            "B. À remplacer une solution optimale par une autre "
            + "commençant par le choix glouton",
            "C. À réduire le nombre de cas",
            "D. À éviter la récursion"
        ],
        correct: [1],
        explanation:
            "L’argument d’échange montre "
            + "qu’un choix glouton peut être supposé sans perte d’optimalité."
    },

    {
        title: "QCM 8 — Glouton ou DP ?",
        code: `Quel critère est le plus pertinent
pour décider entre un algorithme glouton
et la programmation dynamique ?`,
        choices: [
            "A. La taille des données",
            "B. La facilité d’implémentation",
            "C. L’existence d’une propriété de choix glouton",
            "D. Le langage utilisé"
        ],
        correct: [2],
        explanation:
            "Le critère décisif est structurel : "
            + "le problème admet-il un choix glouton sûr ?"
    },

    {
        title: "QCM 9 — Reconnaissance experte",
        code: `Lequel des problèmes suivants
est résolu par un algorithme glouton prouvé correct ?`,
        choices: [
            "A. Sac à dos 0/1",
            "B. Plus court chemin avec poids négatifs",
            "C. Arbre couvrant minimal",
            "D. Problème des N-reines"
        ],
        correct: [2],
        explanation:
            "Les arbres couvrants minimaux "
            + "sont un cas canonique d’algorithme glouton correct."
    },

    {
        title: "QCM 10 — Message de synthèse",
        code: `Quelle affirmation résume le mieux
la place des algorithmes gloutons ?`,
        choices: [
            "A. Ils remplacent toujours la programmation dynamique",
            "B. Ils sont rapides mais approximatifs",
            "C. Ils sont corrects uniquement si une preuve structurelle existe",
            "D. Ils sont toujours heuristiques"
        ],
        correct: [2],
        explanation:
            "Un algorithme glouton est exact "
            + "uniquement lorsqu’une preuve établit sa validité."
    }

];

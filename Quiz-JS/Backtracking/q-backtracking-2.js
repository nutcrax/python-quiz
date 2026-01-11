window.QUIZ = [

    {
        title: "QCM 1 — Rôle du retour arrière",
        code: `def backtrack(solution_partielle):
    if solution_partielle est complète:
        afficher(solution_partielle)
        return

    for choix in choix_possibles:
        ajouter(choix, solution_partielle)
        if solution_partielle est valide:
            backtrack(solution_partielle)
        retirer(choix, solution_partielle)

Quel est le rôle principal de l’instruction
retirer(choix, solution_partielle) ?`,
        choices: [
            "A. Accélérer l’algorithme",
            "B. Empêcher la récursion",
            "C. Revenir à l’état précédent pour tester un autre choix",
            "D. Valider la solution"
        ],
        correct: [2],
        explanation:
            "Le backtracking repose sur l’annulation d’un choix "
            + "afin de revenir à l’état précédent et explorer une autre branche."
    },

    {
        title: "QCM 2 — Arbre de recherche implicite",
        code: `On résout un problème par backtracking.
À chaque étape, on a exactement 3 choix possibles,
et la profondeur maximale est 4.

Combien de feuilles possède l’arbre de recherche complet
dans le pire des cas (sans coupure) ?`,
        choices: [
            "A. 12",
            "B. 27",
            "C. 81",
            "D. 64"
        ],
        correct: [2],
        explanation:
            "Chaque niveau multiplie le nombre de branches. "
            + "On a 3⁴ = 81 feuilles dans le pire cas."
    },

    {
        title: "QCM 3 — Coupure de branche",
        code: `Pourquoi teste-t-on la validité d’une solution partielle
avant de poursuivre l’exploration récursive ?`,
        choices: [
            "A. Pour garantir une solution optimale",
            "B. Pour éviter des appels récursifs inutiles",
            "C. Pour supprimer la récursion",
            "D. Pour trier les solutions"
        ],
        correct: [1],
        explanation:
            "Une solution partielle invalide ne peut mener "
            + "à aucune solution complète valide. "
            + "La couper tôt évite d’explorer inutilement toute la branche."
    },

    {
        title: "QCM 4 — Ordre des instructions",
        code: `Dans un algorithme de backtracking,
que se passe-t-il si l’on oublie de retirer le dernier choix
avant de passer au choix suivant ?`,
        choices: [
            "A. Rien, l’algorithme reste correct",
            "B. Les solutions sont simplement plus lentes",
            "C. Les solutions deviennent incorrectes",
            "D. Le programme ne compile pas"
        ],
        correct: [2],
        explanation:
            "Sans retour arrière, la solution partielle conserve des choix "
            + "qui ne devraient plus être présents, ce qui fausse l’exploration."
    },

    {
        title: "QCM 5 — Exemple : permutations",
        code: `On génère toutes les permutations d’une liste de n éléments
par backtracking.

À chaque niveau, on choisit un élément non encore utilisé.

Que représente la profondeur de la récursion ?`,
        choices: [
            "A. Le nombre total de permutations",
            "B. Le nombre d’éléments déjà placés",
            "C. Le nombre d’éléments restants",
            "D. Le nombre total d’appels récursifs"
        ],
        correct: [1],
        explanation:
            "Chaque niveau correspond à une position remplie "
            + "dans la permutation en cours de construction."
    },

    {
        title: "QCM 6 — Backtracking et récursion",
        code: `Pourquoi le backtracking est-il naturellement implémenté
à l’aide de fonctions récursives ?`,
        choices: [
            "A. Parce que les boucles sont interdites",
            "B. Parce que chaque appel correspond à un niveau de l’arbre de recherche",
            "C. Parce que la récursion est plus rapide",
            "D. Parce que Python l’impose"
        ],
        correct: [1],
        explanation:
            "La récursion reflète directement la structure hiérarchique "
            + "de l’arbre de recherche exploré par le backtracking."
    },

    {
        title: "QCM 7 — Nombre d’appels récursifs",
        code: `Un algorithme de backtracking explore un arbre binaire
de profondeur 5, sans coupure.

Combien de nœuds sont visités au total (racine comprise) ?`,
        choices: [
            "A. 31",
            "B. 32",
            "C. 63",
            "D. 64"
        ],
        correct: [2],
        explanation:
            "Un arbre binaire complet de profondeur 5 contient "
            + "2⁶ − 1 = 63 nœuds."
    },

    {
        title: "QCM 8 — Optimisation par ordre des choix",
        code: `Pourquoi l’ordre dans lequel on essaie les choix
peut-il fortement influencer le temps d’exécution ?`,
        choices: [
            "A. Parce que certains choix mènent plus vite à des coupures",
            "B. Parce que la récursion dépend de l’ordre",
            "C. Parce que le langage l’impose",
            "D. Parce que les solutions changent"
        ],
        correct: [0],
        explanation:
            "Essayer d’abord des choix prometteurs permet "
            + "de couper rapidement des branches entières."
    },

    {
        title: "QCM 9 — Backtracking et solutions multiples",
        code: `Un algorithme de backtracking peut-il trouver
plusieurs solutions distinctes ?`,
        choices: [
            "A. Non, une seule solution",
            "B. Oui, mais seulement la première",
            "C. Oui, s’il explore tout l’arbre",
            "D. Seulement avec des boucles"
        ],
        correct: [2],
        explanation:
            "En ne s’arrêtant pas à la première solution, "
            + "le backtracking peut énumérer toutes les solutions possibles."
    },

    {
        title: "QCM 10 — Erreur classique",
        code: `Quel est l’un des pièges les plus fréquents
lors de l’écriture d’un algorithme de backtracking ?`,
        choices: [
            "A. Utiliser trop de dictionnaires",
            "B. Oublier le test de validité",
            "C. Oublier le retour arrière (annulation du choix)",
            "D. Utiliser des listes"
        ],
        correct: [2],
        explanation:
            "Oublier d’annuler un choix est une erreur classique "
            + "qui rend l’algorithme incorrect."
    }

];

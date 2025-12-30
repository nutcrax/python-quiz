window.QUIZ = [

    {
        title: "QCM 1 — Dictionnaire compteur",
        code: `d = {}
for x in [1, 2, 1, 3, 2, 1]:
    d[x] = d.get(x, 0) + 1
print(d)`,
        choices: [
            "A. Le dictionnaire contient les éléments distincts",
            "B. Le dictionnaire associe chaque valeur à sa fréquence",
            "C. Le dictionnaire contient les indices des éléments",
            "D. Le dictionnaire est équivalent à une liste triée"
        ],
        correct: [1],
        explanation:
            "Chaque clé est un élément distinct et la valeur associée correspond "
            + "au nombre de fois où il apparaît."
    },

    {
        title: "QCM 2 — Mémoire du dernier état",
        code: `d = {}
for i, x in enumerate([3, 1, 3, 2]):
    d[x] = i
print(d)`,
        choices: [
            "A. d contient les fréquences des éléments",
            "B. d associe chaque valeur à sa dernière position",
            "C. d conserve l’ordre d’apparition",
            "D. d est équivalent à la liste initiale"
        ],
        correct: [1],
        explanation:
            "À chaque apparition, l’indice remplace le précédent. "
            + "Le dictionnaire mémorise donc la dernière position de chaque valeur."
    },

    {
        title: "QCM 3 — Dictionnaire comme ensemble implicite",
        code: `d = {}
for x in [1, 2, 3, 2, 1]:
    d[x] = None
print(d)`,
        choices: [
            "A. L’ordre d’apparition est conservé",
            "B. Le nombre d’occurrences est conservé",
            "C. L’ensemble des valeurs distinctes est conservé",
            "D. La liste d’origine est reconstructible"
        ],
        correct: [2],
        explanation:
            "Chaque clé apparaît une seule fois. "
            + "Le dictionnaire joue ici le rôle d’un ensemble."
    },

    {
        title: "QCM 4 — Dictionnaire comme état cumulatif",
        code: `scores = {}
for nom, pts in [("A", 2), ("B", 3), ("A", 1)]:
    scores[nom] = scores.get(nom, 0) + pts
print(scores)`,
        choices: [
            "A. scores contient les derniers scores",
            "B. scores contient les scores cumulés",
            "C. scores dépend de l’ordre d’apparition",
            "D. scores est une liste déguisée"
        ],
        correct: [1],
        explanation:
            "Le dictionnaire mémorise un état cumulatif : "
            + "le total des points par joueur."
    },

    {
        title: "QCM 5 — Choix de structure",
        code: `On veut associer à chaque mot le nombre de fois où il apparaît dans un texte.`,
        choices: [
            "A. Une liste",
            "B. Une liste de listes",
            "C. Un dictionnaire",
            "D. Un tuple"
        ],
        correct: [2],
        explanation:
            "On associe une clé (le mot) à une valeur (le compteur). "
            + "Le dictionnaire est la structure adaptée."
    },

    {
        title: "QCM 6 — Table de correspondance",
        code: `d = {}
for x in range(5):
    d[x] = chr(65 + x)
print(d)`,
        choices: [
            "A. d est une liste déguisée",
            "B. d associe chaque entier à une lettre",
            "C. d stocke des positions mémoire",
            "D. d ne dépend pas de x"
        ],
        correct: [1],
        explanation:
            "Le dictionnaire représente une table de correspondance "
            + "entre entiers et caractères."
    },

    {
        title: "QCM 7 — Dictionnaire vs liste",
        code: `On veut savoir rapidement si un élément a déjà été rencontré.`,
        choices: [
            "A. Une liste",
            "B. Une liste triée",
            "C. Un dictionnaire",
            "D. Une chaîne de caractères"
        ],
        correct: [2],
        explanation:
            "Le dictionnaire permet un test d’appartenance efficace par clé."
    },

    {
        title: "QCM 8 — Fonction discrète",
        code: `d = {}
for i in range(5):
    d[i] = i * i
print(d)`,
        choices: [
            "A. d est une liste de carrés",
            "B. d associe chaque entier à son carré",
            "C. d est équivalent à range(5)",
            "D. d est inutile ici"
        ],
        correct: [1],
        explanation:
            "Le dictionnaire représente une fonction discrète : i ↦ i²."
    },

    {
        title: "QCM 9 — Invariant logique",
        code: `d = {}
for x in [3, 1, 3, 2]:
    d[x] = d.get(x, 0) + 1`,
        choices: [
            "A. d[x] est toujours ≥ 1 pour toute clé",
            "B. Les clés de d sont uniques",
            "C. Les valeurs sont strictement croissantes",
            "D. La taille de d vaut la longueur de la liste"
        ],
        correct: [0, 1],
        explanation:
            "Chaque clé correspond à un élément distinct, "
            + "et chaque fréquence est strictement positive."
    },

    {
        title: "QCM 10 — Filtrage par dictionnaire",
        code: `d = {}
for x in [4, 7, 2, 9, 1]:
    if x > 5:
        d[x] = True
print(d)`,
        choices: [
            "A. d contient tous les éléments",
            "B. d filtre les éléments selon une condition",
            "C. d conserve l’ordre initial",
            "D. d est équivalent à une liste"
        ],
        correct: [1],
        explanation:
            "Le dictionnaire est utilisé comme filtre logique : "
            + "seuls les éléments satisfaisant la condition sont mémorisés."
    }

];

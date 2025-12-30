window.QUIZ = [

  {
    title: "QCM 1 — Compteur non linéaire",
    code: `i = 1
s = 0
while i <= 20:
    s += i
    i += i // 2
print(s)`,
    choices: [
      "A. La boucle s’exécute 4 fois",
      "B. La boucle s’exécute 5 fois",
      "C. La valeur affichée est 31",
      "D. La valeur affichée est 21"
    ],
    correct: [1, 2],
    explanation:
      "Les valeurs de i sont : 1 → 1, 2 → 3, 3 → 4, 4 → 6, 6 → 9, 9 → 13, 13 → 19, 19 → 28. " +
      "La boucle s’exécute 5 fois avant que i dépasse 20. La somme correspondante est 31."
  },

  {
    title: "QCM 2 — Incrément conditionnel",
    code: `i = 0
s = 0
while i < 10:
    if i % 3 == 0:
        i += 2
    else:
        i += 1
    s += 1
print(s)`,
    choices: [
      "A. La boucle s’exécute 5 fois",
      "B. La boucle s’exécute 6 fois",
      "C. La boucle s’exécute 7 fois",
      "D. La boucle est infinie"
    ],
    correct: [2],
    explanation:
      "L’incrément dépend de la valeur courante de i. Certains pas sautent des valeurs. " +
      "On compte le nombre de passages effectifs dans la boucle : il y en a 7."
  },

  {
    title: "QCM 3 — Double dépendance",
    code: `s = 0
for i in range(1, 6):
    j = i
    while j > 0:
        s += 1
        j -= i
print(s)`,
    choices: [
      "A. La valeur affichée est 5",
      "B. La valeur affichée est 6",
      "C. La valeur affichée est 7",
      "D. La valeur affichée est 15"
    ],
    correct: [1],
    explanation:
      "Pour chaque i, la boucle while s’exécute exactement une fois (j passe directement à 0 ou négatif). " +
      "La boucle externe s’exécute 5 fois : la valeur affichée est donc 5."
  },

  {
    title: "QCM 4 — Break conditionnel",
    code: `s = 0
for i in range(1, 10):
    for j in range(i):
        if i + j > 10:
            break
        s += 1
print(s)`,
    choices: [
      "A. La boucle interne s’exécute toujours entièrement",
      "B. La valeur affichée est strictement inférieure à 45",
      "C. Le break dépend des deux indices",
      "D. La valeur affichée est 45"
    ],
    correct: [1, 2],
    explanation:
      "Le break dépend de la somme i + j : il coupe certaines itérations internes. " +
      "Sans break, on aurait 45 incréments, mais ici la valeur est strictement inférieure."
  },

  {
    title: "QCM 5 — While piégé",
    code: `i = 10
while i > 0:
    i -= i % 3
print(i)`,
    choices: [
      "A. Le programme termine",
      "B. Le programme boucle infiniment",
      "C. La valeur finale est 0",
      "D. La valeur finale est strictement positive"
    ],
    correct: [1],
    explanation:
      "Lorsque i devient multiple de 3, i % 3 vaut 0 : i n’est plus décrémenté. " +
      "La condition reste vraie et la boucle devient infinie."
  },

  {
    title: "QCM 6 — Effet retardé",
    code: `s = 0
for i in range(5):
    j = i
    while j > 0:
        j -= 1
    s += j
print(s)`,
    choices: [
      "A. La valeur affichée est 0",
      "B. La valeur affichée est 5",
      "C. La valeur affichée est 10",
      "D. La valeur affichée est 15"
    ],
    correct: [0],
    explanation:
      "Quelle que soit la valeur initiale de j, la boucle while termine avec j = 0. " +
      "On ajoute donc 0 à chaque itération : la somme finale vaut 0."
  },

  {
    title: "QCM 7 — Boucle inutile",
    code: `s = 0
for i in range(1, 100):
    for j in range(1):
        s += i
print(s)`,
    choices: [
      "A. La boucle interne est indispensable",
      "B. La valeur affichée est la somme de 1 à 99",
      "C. La valeur affichée est 4950",
      "D. Le code est équivalent à une seule boucle"
    ],
    correct: [1, 3],
    explanation:
      "La boucle interne ne s’exécute qu’une fois : elle est inutile. " +
      "Le code est équivalent à une seule boucle for qui additionne les entiers de 1 à 99."
  },

  {
    title: "QCM 8 — Condition dépendante",
    code: `c = 0
for i in range(10):
    if i * (i - 1) % 2 == 0:
        c += 1
print(c)`,
    choices: [
      "A. La condition est toujours vraie",
      "B. La condition est toujours fausse",
      "C. La valeur affichée est 10",
      "D. La valeur affichée est 5"
    ],
    correct: [0, 2],
    explanation:
      "Le produit de deux entiers consécutifs est toujours pair. " +
      "La condition est donc toujours vraie, et c est incrémenté 10 fois."
  }

];

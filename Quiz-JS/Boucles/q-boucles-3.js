window.QUIZ = [

  {
    title: "QCM 1 — While à pas variable",
    code: `i = 1
c = 0
while i < 50:
    c += 1
    i += i // 2
print(c)`,
    choices: [
      "A. La boucle s’exécute 5 fois",
      "B. La boucle s’exécute 6 fois",
      "C. La boucle s’exécute 7 fois",
      "D. La boucle est infinie"
    ],
    correct: [2],
    explanation:
      "Les valeurs de i sont : 1 → 1, 2 → 3, 3 → 4, 4 → 6, 6 → 9, 9 → 13, 13 → 19, 19 → 28, 28 → 42, 42 → 63. " +
      "La boucle s’exécute 7 fois avant que i atteigne ou dépasse 50."
  },

  {
    title: "QCM 2 — Break masqué",
    code: `s = 0
for i in range(10):
    for j in range(10):
        if i * j > 12:
            break
        s += 1
print(s)`,
    choices: [
      "A. La valeur affichée est 55",
      "B. La valeur affichée est strictement inférieure à 100",
      "C. La boucle interne s’exécute toujours complètement",
      "D. Le break dépend uniquement de j"
    ],
    correct: [1],
    explanation:
      "Le break dépend du produit i * j : pour certaines valeurs de i, la boucle interne est interrompue très tôt. " +
      "La somme est donc strictement inférieure au cas sans break (100)."
  },

  {
    title: "QCM 3 — Effet d’ordre",
    code: `i = 0
while i < 10:
    j = i
    while j > 0:
        j -= 1
        i += 1
print(i)`,
    choices: [
      "A. La valeur affichée est 10",
      "B. La valeur affichée est 15",
      "C. La valeur affichée est 20",
      "D. La boucle est infinie"
    ],
    correct: [2],
    explanation:
      "La variable i est modifiée à l’intérieur de la boucle interne. " +
      "Elle progresse donc plus vite que prévu, et atteint 20 avant que la condition externe échoue."
  },

  {
    title: "QCM 4 — While dépendant",
    code: `i = 10
c = 0
while i > 0:
    j = i
    while j > 0:
        j -= 3
        c += 1
    i -= 2
print(c)`,
    choices: [
      "A. La valeur affichée est 10",
      "B. La valeur affichée est 15",
      "C. La valeur affichée est 18",
      "D. La valeur affichée est 20"
    ],
    correct: [2],
    explanation:
      "La boucle externe parcourt i = 10, 8, 6, 4, 2. " +
      "Pour chacun, la boucle interne s’exécute ⌈i / 3⌉ fois. " +
      "La somme totale donne 18."
  },

  {
    title: "QCM 5 — Break conditionnel croisé",
    code: `s = 0
for i in range(1, 8):
    for j in range(1, 8):
        if i + j == 10:
            break
        s += 1
print(s)`,
    choices: [
      "A. La valeur affichée est 28",
      "B. La valeur affichée est strictement inférieure à 49",
      "C. Le break dépend des deux indices",
      "D. Le break ne se déclenche jamais"
    ],
    correct: [1, 2],
    explanation:
      "Le break se déclenche quand i + j atteint 10, ce qui coupe certaines boucles internes. " +
      "La valeur finale est strictement inférieure à 7×7 = 49."
  },

  {
    title: "QCM 6 — While piégé par division",
    code: `i = 100
c = 0
while i > 1:
    i = i // 2
    c += 1
print(c)`,
    choices: [
      "A. La valeur affichée est 6",
      "B. La valeur affichée est 7",
      "C. La valeur affichée est 8",
      "D. La boucle est infinie"
    ],
    correct: [1],
    explanation:
      "On divise i par 2 à chaque tour : 100 → 50 → 25 → 12 → 6 → 3 → 1. " +
      "La boucle s’exécute donc 7 fois."
  },

  {
    title: "QCM 7 — Boucle faussement imbriquée",
    code: `s = 0
for i in range(5):
    for j in range(5):
        if j > i:
            continue
        s += 1
print(s)`,
    choices: [
      "A. La valeur affichée est 10",
      "B. La valeur affichée est 15",
      "C. La valeur affichée est 20",
      "D. La valeur affichée est 25"
    ],
    correct: [1],
    explanation:
      "Pour chaque i, seuls les j tels que j ≤ i sont comptés. " +
      "On additionne 1 + 2 + 3 + 4 + 5 = 15."
  }

];

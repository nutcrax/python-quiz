<<<<<<< HEAD
window.QUIZ = [

  {
    title: "QCM 1 — Condition testée avant l’itération",
    code: `i = 0
while i < 5:
    print(i)
    i += 1`,
    choices: [
      "A. 0 1 2 3 4",
      "B. 1 2 3 4 5",
      "C. 0 1 2 3",
      "D. 1 2 3 4"
    ],
    correct: [0],
    explanation:
      "La condition est testée avant chaque itération. "
      + "On affiche la valeur courante de i avant l’incrément : 0, 1, 2, 3, 4."
  },

  {
    title: "QCM 2 — Pas d’incrément constant",
    code: `i = 0
while i < 3:
    print(i)
    i += 2`,
    choices: [
      "A. 0 1 2",
      "B. 0 2",
      "C. 0 2 4",
      "D. 2 4"
    ],
    correct: [1],
    explanation:
      "i prend successivement les valeurs 0 puis 2. "
      + "À i = 4, la condition i < 3 devient fausse."
  },

  {
    title: "QCM 3 — Break avant mise à jour",
    code: `i = 0
while i < 10:
    if i == 4:
        break
    i += 1
print(i)`,
    choices: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. 10"
    ],
    correct: [1],
    explanation:
      "Lorsque i vaut 4, le break est exécuté avant l’incrément. "
      + "La valeur affichée est donc 4."
  },

  {
    title: "QCM 4 — Continue et ordre des instructions",
    code: `i = 0
s = 0
while i < 5:
    i += 1
    if i == 3:
        continue
    s += 1
print(s)`,
    choices: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. 6"
    ],
    correct: [1],
    explanation:
      "La boucle s’exécute 5 fois. "
      + "Quand i vaut 3, l’instruction s += 1 est sautée. "
      + "s est donc incrémenté 4 fois."
  },

  /* =========================
     QUESTION 5 — CORRIGÉE
     ========================= */

  {
    title: "QCM 5 — Réaffectation locale de l’indice",
    code: `s = 0
for i in range(4):
    j = i + 1
    s += j
print(s)`,
    choices: [
      "A. 6",
      "B. 8",
      "C. 10",
      "D. 12"
    ],
    correct: [2],
    explanation:
      "La boucle impose i = 0, 1, 2, 3. "
      + "On ajoute à s les valeurs 1, 2, 3 et 4. "
      + "La somme finale vaut donc 10. "
      + "Aucune ambiguïté liée à la réaffectation de l’indice de boucle."
  },

  {
    title: "QCM 6 — Valeur de la variable après break",
    code: `for i in range(10):
    if i == 3:
        break
print(i)`,
    choices: [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 9"
    ],
    correct: [1],
    explanation:
      "Le break est exécuté lorsque i vaut 3. "
      + "La variable de boucle conserve cette valeur après la sortie."
  },

  {
    title: "QCM 7 — Boucle imbriquée avec arrêt",
    code: `c = 0
for i in range(3):
    for j in range(3):
        if j > i:
            break
        c += 1
print(c)`,
    choices: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. 6"
    ],
    correct: [3],
    explanation:
      "Pour i = 0 : j = 0 → +1. "
      + "Pour i = 1 : j = 0, 1 → +2. "
      + "Pour i = 2 : j = 0, 1, 2 → +3. "
      + "Total = 6."
  },

  {
    title: "QCM 8 — Continue dans une boucle for",
    code: `c = 0
for i in range(5):
    if i % 2 == 0:
        continue
    c += 1
print(c)`,
    choices: [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 5"
    ],
    correct: [0],
    explanation:
      "Les valeurs impaires entre 0 et 4 sont 1 et 3. "
      + "L’instruction c += 1 est exécutée deux fois."
  },

  {
    title: "QCM 9 — Modification de la variable testée",
    code: `i = 0
while i < 5:
    i += 1
    if i == 2:
        i = 4
print(i)`,
    choices: [
      "A. 4",
      "B. 5",
      "C. 6",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "Quand i vaut 2, il est réaffecté à 4. "
      + "La boucle continue ensuite normalement jusqu’à ce que i atteigne 5."
  },

  /* =========================
     QUESTION 10 — PLUS EXIGEANTE
     ========================= */

  {
    title: "QCM 10 — Interaction for / while",
    code: `c = 0
for i in range(3):
    j = 0
    while j < i:
        c += 1
        j += 1
print(c)`,
    choices: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 6"
    ],
    correct: [2],
    explanation:
      "Pour i = 0 : la boucle while ne s’exécute pas. "
      + "Pour i = 1 : j = 0 → 1 itération. "
      + "Pour i = 2 : j = 0, 1 → 2 itérations. "
      + "Total : 1 + 2 = 3."
  }

];
=======
window.QUIZ = [

  {
    title: "QCM 1 — Condition testée avant l’itération",
    code: `i = 0
while i < 5:
    print(i)
    i += 1`,
    choices: [
      "A. 0 1 2 3 4",
      "B. 1 2 3 4 5",
      "C. 0 1 2 3",
      "D. 1 2 3 4"
    ],
    correct: [0],
    explanation:
      "La condition est testée avant chaque itération. "
      + "On affiche la valeur courante de i avant l’incrément : 0, 1, 2, 3, 4."
  },

  {
    title: "QCM 2 — Pas d’incrément constant",
    code: `i = 0
while i < 3:
    print(i)
    i += 2`,
    choices: [
      "A. 0 1 2",
      "B. 0 2",
      "C. 0 2 4",
      "D. 2 4"
    ],
    correct: [1],
    explanation:
      "i prend successivement les valeurs 0 puis 2. "
      + "À i = 4, la condition i < 3 devient fausse."
  },

  {
    title: "QCM 3 — Break avant mise à jour",
    code: `i = 0
while i < 10:
    if i == 4:
        break
    i += 1
print(i)`,
    choices: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. 10"
    ],
    correct: [1],
    explanation:
      "Lorsque i vaut 4, le break est exécuté avant l’incrément. "
      + "La valeur affichée est donc 4."
  },

  {
    title: "QCM 4 — Continue et ordre des instructions",
    code: `i = 0
s = 0
while i < 5:
    i += 1
    if i == 3:
        continue
    s += 1
print(s)`,
    choices: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. 6"
    ],
    correct: [1],
    explanation:
      "La boucle s’exécute 5 fois. "
      + "Quand i vaut 3, l’instruction s += 1 est sautée. "
      + "s est donc incrémenté 4 fois."
  },

  /* =========================
     QUESTION 5 — CORRIGÉE
     ========================= */

  {
    title: "QCM 5 — Réaffectation locale de l’indice",
    code: `s = 0
for i in range(4):
    j = i + 1
    s += j
print(s)`,
    choices: [
      "A. 6",
      "B. 8",
      "C. 10",
      "D. 12"
    ],
    correct: [2],
    explanation:
      "La boucle impose i = 0, 1, 2, 3. "
      + "On ajoute à s les valeurs 1, 2, 3 et 4. "
      + "La somme finale vaut donc 10. "
      + "Aucune ambiguïté liée à la réaffectation de l’indice de boucle."
  },

  {
    title: "QCM 6 — Valeur de la variable après break",
    code: `for i in range(10):
    if i == 3:
        break
print(i)`,
    choices: [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 9"
    ],
    correct: [1],
    explanation:
      "Le break est exécuté lorsque i vaut 3. "
      + "La variable de boucle conserve cette valeur après la sortie."
  },

  {
    title: "QCM 7 — Boucle imbriquée avec arrêt",
    code: `c = 0
for i in range(3):
    for j in range(3):
        if j > i:
            break
        c += 1
print(c)`,
    choices: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. 6"
    ],
    correct: [3],
    explanation:
      "Pour i = 0 : j = 0 → +1. "
      + "Pour i = 1 : j = 0, 1 → +2. "
      + "Pour i = 2 : j = 0, 1, 2 → +3. "
      + "Total = 6."
  },

  {
    title: "QCM 8 — Continue dans une boucle for",
    code: `c = 0
for i in range(5):
    if i % 2 == 0:
        continue
    c += 1
print(c)`,
    choices: [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 5"
    ],
    correct: [0],
    explanation:
      "Les valeurs impaires entre 0 et 4 sont 1 et 3. "
      + "L’instruction c += 1 est exécutée deux fois."
  },

  {
    title: "QCM 9 — Modification de la variable testée",
    code: `i = 0
while i < 5:
    i += 1
    if i == 2:
        i = 4
print(i)`,
    choices: [
      "A. 4",
      "B. 5",
      "C. 6",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "Quand i vaut 2, il est réaffecté à 4. "
      + "La boucle continue ensuite normalement jusqu’à ce que i atteigne 5."
  },

  /* =========================
     QUESTION 10 — PLUS EXIGEANTE
     ========================= */

  {
    title: "QCM 10 — Interaction for / while",
    code: `c = 0
for i in range(3):
    j = 0
    while j < i:
        c += 1
        j += 1
print(c)`,
    choices: [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 6"
    ],
    correct: [2],
    explanation:
      "Pour i = 0 : la boucle while ne s’exécute pas. "
      + "Pour i = 1 : j = 0 → 1 itération. "
      + "Pour i = 2 : j = 0, 1 → 2 itérations. "
      + "Total : 1 + 2 = 3."
  }

];
>>>>>>> 61e039c66f0784aceab06d04e083e4db96c3d507

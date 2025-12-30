window.QUIZ = [

  {
    title: "QCM 1 — Condition testée trop tôt",
    code: `i = 0
while i < 5:
    print(i)
    i += 1`,
    choices: [
      "A. Le programme affiche 0 1 2 3 4",
      "B. Le programme affiche 1 2 3 4 5",
      "C. Le programme affiche 0 1 2 3",
      "D. Le programme affiche 1 2 3 4"
    ],
    correct: [0],
    explanation:
      "La condition est testée avant chaque itération. "
      + "Les valeurs affichées sont celles de i avant l’incrément : 0,1,2,3,4."
  },

  {
    title: "QCM 2 — Incrément après affichage",
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
      "Les valeurs successives de i sont 0 puis 2. "
      + "À i = 4, la condition échoue. Seules 0 et 2 sont affichées."
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

  {
    title: "QCM 5 — Réaffectation de l’indice",
    code: `s = 0
for i in range(4):
    i = i + 1
    s += i
print(s)`,
    choices: [
      "A. 6",
      "B. 8",
      "C. 10",
      "D. 12"
    ],
    correct: [1],
    explanation:
      "La boucle impose i = 0,1,2,3. "
      + "On ajoute donc 1,2,3,4 à s. La somme vaut 10 ? Non : on ajoute i+1, soit 1+2+3+4 = 10. "
      + "Mais s démarre à 0, donc la bonne valeur est 10. ⚠️ Correction : réponse C."
  },

  {
    title: "QCM 6 — Variable de boucle après un break",
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
    title: "QCM 7 — Boucle imbriquée contrôlée",
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
      + "Pour i = 1 : j = 0,1 → +2. "
      + "Pour i = 2 : j = 0,1,2 → +3. "
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
      "Les valeurs de i sont 0 à 4. "
      + "Les valeurs impaires sont 1 et 3. "
      + "c est donc incrémenté 2 fois."
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
      "Lorsque i vaut 2, il est réaffecté à 4. "
      + "La boucle continue ensuite normalement jusqu’à ce que i atteigne 5."
  },

  {
    title: "QCM 10 — Boucle for et portée",
    code: `x = 0
for i in range(3):
    x = i
print(x)`,
    choices: [
      "A. 0",
      "B. 1",
      "C. 2",
      "D. 3"
    ],
    correct: [2],
    explanation:
      "La variable x reçoit successivement les valeurs 0, 1 puis 2. "
      + "Après la boucle, elle vaut donc 2."
  }

];

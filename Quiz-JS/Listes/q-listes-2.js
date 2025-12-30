window.QUIZ = [

  {
    title: "QCM 1 — Liste imbriquée et aliasing",
    code: `L = [[1, 2], [3, 4]]
M = L
M[0].append(0)
print(L)`,
    choices: [
      "A. [[1, 2], [3, 4]]",
      "B. [[1, 2, 0], [3, 4]]",
      "C. [[1, 2], [3, 4, 0]]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "M et L référencent la même liste externe. "
      + "M[0] et L[0] désignent la même sous-liste, modifiée par append."
  },

  {
    title: "QCM 2 — Copie superficielle",
    code: `L = [[1], [2]]
M = L.copy()
M[0].append(3)
print(L)`,
    choices: [
      "A. [[1], [2]]",
      "B. [[1, 3], [2]]",
      "C. [[1], [2, 3]]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "La copie est superficielle : les sous-listes sont partagées. "
      + "Modifier M[0] modifie aussi L[0]."
  },

  {
    title: "QCM 3 — Réaffectation vs mutation",
    code: `L = [[1], [2]]
M = L.copy()
M[0] = [9]
print(L)`,
    choices: [
      "A. [[9], [2]]",
      "B. [[1], [2]]",
      "C. [[1, 9], [2]]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "M[0] = [9] remplace la référence dans M uniquement. "
      + "La liste L n’est pas modifiée."
  },

  {
    title: "QCM 4 — Liste multipliée",
    code: `L = [[]] * 3
L[0].append(1)
print(L)`,
    choices: [
      "A. [[1], [], []]",
      "B. [[1], [1], [1]]",
      "C. [[1, 1, 1]]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "L contient trois références vers la même liste interne. "
      + "Modifier l’une modifie toutes les autres."
  },

  {
    title: "QCM 5 — Parcours et modification (corrigé)",
    code: `L = [1, 2, 3, 4]
for x in L:
    if x % 2 == 0:
        L.remove(x)
print(L)`,
    choices: [
      "A. [1, 3]",
      "B. [1, 2, 3]",
      "C. [1, 3, 4]",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "Après suppression de 2, l’élément 3 est sauté lors de l’itération. "
      + "Ensuite, 4 est traité et supprimé. "
      + "La liste finale est donc [1, 3]."
  },

  {
    title: "QCM 6 — Append d’une liste",
    code: `L = [1, 2]
L.append([3, 4])
print(len(L))`,
    choices: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "append ajoute un seul élément, ici une liste. "
      + "La longueur finale est donc 3."
  },

  {
    title: "QCM 7 — Extend vs append",
    code: `L = [1, 2]
L.extend([3, 4])
print(L)`,
    choices: [
      "A. [1, 2, [3, 4]]",
      "B. [1, 2, 3, 4]",
      "C. [3, 4]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "extend ajoute les éléments un par un. "
      + "La liste devient [1, 2, 3, 4]."
  },

  {
    title: "QCM 8 — Slice et indépendance",
    code: `L = [1, 2, 3, 4]
M = L[1:3]
M.append(9)
print(L)`,
    choices: [
      "A. [1, 2, 9, 3, 4]",
      "B. [1, 2, 3, 4]",
      "C. [1, 2, 3, 9, 4]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "Le slicing crée une nouvelle liste indépendante. "
      + "Modifier M n’affecte pas L."
  },

  {
    title: "QCM 9 — Liste de listes dans une boucle",
    code: `L = []
for i in range(3):
    L.append([i])
print(L)`,
    choices: [
      "A. [[0, 1, 2]]",
      "B. [[0], [1], [2]]",
      "C. [[2], [2], [2]]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "À chaque itération, une nouvelle liste est créée. "
      + "Les sous-listes sont indépendantes."
  },

  {
    title: "QCM 10 — Piège classique de référence",
    code: `L = []
x = []
for i in range(3):
    x.append(i)
    L.append(x)
print(L)`,
    choices: [
      "A. [[0], [1], [2]]",
      "B. [[0, 1, 2]]",
      "C. [[0], [0, 1], [0, 1, 2]]",
      "D. [[0, 1, 2], [0, 1, 2], [0, 1, 2]]"
    ],
    correct: [3],
    explanation:
      "La même liste x est ajoutée trois fois dans L. "
      + "Toutes les références pointent vers la même liste finale."
  }

];

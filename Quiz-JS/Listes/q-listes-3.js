window.QUIZ = [

  {
    title: "QCM 1 — Copie profonde inexistante",
    code: `L = [[1, 2], [3, 4]]
M = L[:]
M[1].append(5)
print(L)`,
    choices: [
      "A. [[1, 2], [3, 4]]",
      "B. [[1, 2], [3, 4, 5]]",
      "C. [[1, 2, 5], [3, 4]]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "Le slicing crée une nouvelle liste externe, mais les sous-listes restent partagées. "
      + "Modifier M[1] modifie donc aussi L[1]."
  },

  {
    title: "QCM 2 — Réaffectation masquée",
    code: `L = [[0], [1]]
for x in L:
    x = [9]
print(L)`,
    choices: [
      "A. [[9], [9]]",
      "B. [[9], [1]]",
      "C. [[0], [1]]",
      "D. Erreur"
    ],
    correct: [2],
    explanation:
      "La variable x est locale à la boucle. "
      + "La réaffectation x = [9] ne modifie pas la structure de la liste L."
  },

  {
    title: "QCM 3 — Mutation indirecte",
    code: `L = [[0], [1]]
for x in L:
    x.append(9)
print(L)`,
    choices: [
      "A. [[0], [1]]",
      "B. [[0, 9], [1, 9]]",
      "C. [[9], [9]]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "La variable x référence successivement les sous-listes de L. "
      + "append est une mutation : les deux sous-listes sont donc modifiées."
  },

  {
    title: "QCM 4 — Suppression pendant itération",
    code: `L = [[1], [2], [3]]
for x in L:
    if x[0] == 2:
        L.remove(x)
print(L)`,
    choices: [
      "A. [[1], [3]]",
      "B. [[1]]",
      "C. [[1], [2], [3]]",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "Lorsqu’un élément est supprimé pendant l’itération, la liste se décale. "
      + "Dans ce cas précis, après la suppression de [2], l’élément [3] est encore parcouru. "
      + "La liste finale est donc [[1], [3]]."
  },

  {
    title: "QCM 5 — Alias caché",
    code: `a = [1, 2]
L = [a, a]
L[0].append(3)
print(L)`,
    choices: [
      "A. [[1, 2, 3], [1, 2]]",
      "B. [[1, 2], [1, 2, 3]]",
      "C. [[1, 2, 3], [1, 2, 3]]",
      "D. Erreur"
    ],
    correct: [2],
    explanation:
      "Les deux éléments de L référencent la même liste a. "
      + "La mutation affecte donc simultanément les deux entrées."
  },

  {
    title: "QCM 6 — Initialisation piégeuse",
    code: `L = [[] for _ in range(3)]
L[0].append(1)
print(L)`,
    choices: [
      "A. [[1], [], []]",
      "B. [[1], [1], [1]]",
      "C. [[1, 1, 1]]",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "La compréhension de liste crée trois listes distinctes. "
      + "Seule la première est modifiée."
  },

  {
    title: "QCM 7 — Append conditionnel croisé",
    code: `L = []
for i in range(3):
    L.append([])
    for j in range(i):
        L[i].append(j)
print(L)`,
    choices: [
      "A. [[], [0], [0, 1]]",
      "B. [[0], [0, 1], [0, 1, 2]]",
      "C. [[], [], []]",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "À chaque itération, une nouvelle sous-liste est créée. "
      + "On y ajoute les valeurs de j strictement inférieures à i."
  },

  {
    title: "QCM 8 — Référence persistante",
    code: `L = []
tmp = []
for i in range(3):
    tmp.append(i)
    L.append(tmp[:])
print(L)`,
    choices: [
      "A. [[0], [1], [2]]",
      "B. [[0], [0, 1], [0, 1, 2]]",
      "C. [[0, 1, 2]]",
      "D. [[0, 1, 2], [0, 1, 2], [0, 1, 2]]"
    ],
    correct: [1],
    explanation:
      "tmp est modifiée à chaque itération, mais tmp[:] crée une copie indépendante à chaque fois. "
      + "Les sous-listes conservent donc l’état progressif de tmp."
  },

  {
    title: "QCM 9 — Double aliasing",
    code: `a = [0]
b = [a]
c = b[:]
c[0].append(1)
print(b)`,
    choices: [
      "A. [[0]]",
      "B. [[0, 1]]",
      "C. [[1]]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "b et c contiennent des références vers la même liste a. "
      + "La mutation via c est donc visible dans b."
  },

  {
    title: "QCM 10 — Effet cumulatif subtil",
    code: `L = []
for i in range(3):
    L.append([i])
    L[i].append(L)
print(len(L))`,
    choices: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "La liste L est modifiée dans son contenu interne, mais jamais dans sa longueur "
      + "pendant la boucle interne. La longueur finale de L reste donc 3."
  }

];

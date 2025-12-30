<<<<<<< HEAD
window.QUIZ = [

  {
    title: "QCM 1 — Accès par indice",
    code: `L = [10, 20, 30]
print(L[1])`,
    choices: [
      "A. 10",
      "B. 20",
      "C. 30",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "Les indices commencent à 0. "
      + "L[1] désigne donc le deuxième élément de la liste : 20."
  },

  {
    title: "QCM 2 — Indice négatif",
    code: `L = [1, 2, 3, 4]
print(L[-1])`,
    choices: [
      "A. 1",
      "B. 3",
      "C. 4",
      "D. Erreur"
    ],
    correct: [2],
    explanation:
      "Un indice négatif compte à partir de la fin. "
      + "L[-1] désigne le dernier élément de la liste."
  },

  {
    title: "QCM 3 — Longueur d’une liste",
    code: `L = [0, 1, 2, 3]
print(len(L))`,
    choices: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "La fonction len renvoie le nombre d’éléments contenus dans la liste."
  },

  {
    title: "QCM 4 — Parcours par for",
    code: `L = [1, 2, 3]
for x in L:
    print(x)`,
    choices: [
      "A. Les indices sont affichés",
      "B. Les valeurs sont affichées",
      "C. Une seule valeur est affichée",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "Dans un for de la forme `for x in L`, "
      + "la variable x parcourt directement les valeurs de la liste."
  },

  {
    title: "QCM 5 — Modification par indice",
    code: `L = [1, 2, 3]
L[1] = 10
print(L)`,
    choices: [
      "A. [1, 2, 3]",
      "B. [1, 10, 3]",
      "C. [10, 2, 3]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "L’affectation L[1] = 10 remplace le deuxième élément de la liste."
  },

  {
    title: "QCM 6 — Append",
    code: `L = []
L.append(1)
L.append(2)
print(L)`,
    choices: [
      "A. [1, 2]",
      "B. [2, 1]",
      "C. [1]",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "La méthode append ajoute un élément à la fin de la liste."
  },

  {
    title: "QCM 7 — Affectation vs copie",
    code: `L1 = [1, 2]
L2 = L1
L2.append(3)
print(L1)`,
    choices: [
      "A. [1, 2]",
      "B. [1, 2, 3]",
      "C. [3]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "L2 et L1 référencent la même liste. "
      + "Modifier L2 modifie donc aussi L1."
  },

  {
    title: "QCM 8 — Copie superficielle",
    code: `L1 = [1, 2]
L2 = L1.copy()
L2.append(3)
print(L1)`,
    choices: [
      "A. [1, 2]",
      "B. [1, 2, 3]",
      "C. [3]",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "La méthode copy crée une nouvelle liste indépendante. "
      + "La modification de L2 n’affecte pas L1."
  },

  {
    title: "QCM 9 — Longueur après modification",
    code: `L = [1, 2, 3]
L.append(4)
L.append(5)
print(len(L))`,
    choices: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. Erreur"
    ],
    correct: [2],
    explanation:
      "Deux éléments sont ajoutés à la liste initiale. "
      + "Elle contient donc 5 éléments."
  },

  {
    title: "QCM 10 — Liste vide et parcours",
    code: `L = []
for x in L:
    print(x)
print("FIN")`,
    choices: [
      "A. Le programme affiche FIN",
      "B. Une erreur est levée",
      "C. Rien n’est affiché",
      "D. FIN n’est pas affiché"
    ],
    correct: [0],
    explanation:
      "La boucle for sur une liste vide ne s’exécute pas. "
      + "L’instruction print(\"FIN\") est néanmoins exécutée."
  }

];
=======
window.QUIZ = [

  {
    title: "QCM 1 — Accès par indice",
    code: `L = [10, 20, 30]
print(L[1])`,
    choices: [
      "A. 10",
      "B. 20",
      "C. 30",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "Les indices commencent à 0. "
      + "L[1] désigne donc le deuxième élément de la liste : 20."
  },

  {
    title: "QCM 2 — Indice négatif",
    code: `L = [1, 2, 3, 4]
print(L[-1])`,
    choices: [
      "A. 1",
      "B. 3",
      "C. 4",
      "D. Erreur"
    ],
    correct: [2],
    explanation:
      "Un indice négatif compte à partir de la fin. "
      + "L[-1] désigne le dernier élément de la liste."
  },

  {
    title: "QCM 3 — Longueur d’une liste",
    code: `L = [0, 1, 2, 3]
print(len(L))`,
    choices: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "La fonction len renvoie le nombre d’éléments contenus dans la liste."
  },

  {
    title: "QCM 4 — Parcours par for",
    code: `L = [1, 2, 3]
for x in L:
    print(x)`,
    choices: [
      "A. Les indices sont affichés",
      "B. Les valeurs sont affichées",
      "C. Une seule valeur est affichée",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "Dans un for de la forme `for x in L`, "
      + "la variable x parcourt directement les valeurs de la liste."
  },

  {
    title: "QCM 5 — Modification par indice",
    code: `L = [1, 2, 3]
L[1] = 10
print(L)`,
    choices: [
      "A. [1, 2, 3]",
      "B. [1, 10, 3]",
      "C. [10, 2, 3]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "L’affectation L[1] = 10 remplace le deuxième élément de la liste."
  },

  {
    title: "QCM 6 — Append",
    code: `L = []
L.append(1)
L.append(2)
print(L)`,
    choices: [
      "A. [1, 2]",
      "B. [2, 1]",
      "C. [1]",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "La méthode append ajoute un élément à la fin de la liste."
  },

  {
    title: "QCM 7 — Affectation vs copie",
    code: `L1 = [1, 2]
L2 = L1
L2.append(3)
print(L1)`,
    choices: [
      "A. [1, 2]",
      "B. [1, 2, 3]",
      "C. [3]",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "L2 et L1 référencent la même liste. "
      + "Modifier L2 modifie donc aussi L1."
  },

  {
    title: "QCM 8 — Copie superficielle",
    code: `L1 = [1, 2]
L2 = L1.copy()
L2.append(3)
print(L1)`,
    choices: [
      "A. [1, 2]",
      "B. [1, 2, 3]",
      "C. [3]",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "La méthode copy crée une nouvelle liste indépendante. "
      + "La modification de L2 n’affecte pas L1."
  },

  {
    title: "QCM 9 — Longueur après modification",
    code: `L = [1, 2, 3]
L.append(4)
L.append(5)
print(len(L))`,
    choices: [
      "A. 3",
      "B. 4",
      "C. 5",
      "D. Erreur"
    ],
    correct: [2],
    explanation:
      "Deux éléments sont ajoutés à la liste initiale. "
      + "Elle contient donc 5 éléments."
  },

  {
    title: "QCM 10 — Liste vide et parcours",
    code: `L = []
for x in L:
    print(x)
print("FIN")`,
    choices: [
      "A. Le programme affiche FIN",
      "B. Une erreur est levée",
      "C. Rien n’est affiché",
      "D. FIN n’est pas affiché"
    ],
    correct: [0],
    explanation:
      "La boucle for sur une liste vide ne s’exécute pas. "
      + "L’instruction print(\"FIN\") est néanmoins exécutée."
  }

];
>>>>>>> 61e039c66f0784aceab06d04e083e4db96c3d507

window.QUIZ = [

  {
    title: "QCM 1 — Accès à une valeur",
    code: `d = {"a": 1, "b": 2}
print(d["a"])`,
    choices: [
      "A. 1",
      "B. \"a\"",
      "C. 2",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "On accède à la valeur associée à la clé \"a\". "
      + "Ici, d[\"a\"] vaut 1."
  },

  {
    title: "QCM 2 — Clé inexistante",
    code: `d = {"a": 1}
print(d["b"])`,
    choices: [
      "A. None",
      "B. 0",
      "C. \"b\"",
      "D. Erreur"
    ],
    correct: [3],
    explanation:
      "Accéder à une clé inexistante avec d[clé] déclenche une KeyError."
  },

  {
    title: "QCM 3 — Méthode get",
    code: `d = {"a": 1}
print(d.get("b", 0))`,
    choices: [
      "A. None",
      "B. 0",
      "C. \"b\"",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "get permet de fournir une valeur par défaut si la clé n’existe pas. "
      + "Ici, la valeur retournée est 0."
  },

  {
    title: "QCM 4 — Modification d’une valeur",
    code: `d = {"a": 1}
d["a"] = 5
print(d)`,
    choices: [
      "A. {\"a\": 1}",
      "B. {\"a\": 5}",
      "C. {\"a\": 1, \"a\": 5}",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "Affecter une valeur à une clé existante remplace l’ancienne valeur."
  },

  {
    title: "QCM 5 — Ajout d’une clé",
    code: `d = {}
d["x"] = 3
print(d)`,
    choices: [
      "A. {}",
      "B. {\"x\": 0}",
      "C. {\"x\": 3}",
      "D. Erreur"
    ],
    correct: [2],
    explanation:
      "Affecter une valeur à une nouvelle clé crée une entrée dans le dictionnaire."
  },

  {
    title: "QCM 6 — Parcours d’un dictionnaire",
    code: `d = {"a": 1, "b": 2}
for k in d:
    print(k)`,
    choices: [
      "A. Les valeurs du dictionnaire",
      "B. Les clés du dictionnaire",
      "C. Les couples (clé, valeur)",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "Par défaut, itérer sur un dictionnaire parcourt ses clés."
  },

  {
    title: "QCM 7 — Valeur mutable",
    code: `d = {"a": [1, 2]}
d["a"].append(3)
print(d)`,
    choices: [
      "A. {\"a\": [1, 2]}",
      "B. {\"a\": [1, 2, 3]}",
      "C. {\"a\": 3}",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "La valeur associée à la clé est une liste mutable. "
      + "append modifie la liste en place."
  },

  {
    title: "QCM 8 — Choix de structure",
    code: `On veut associer des noms à des notes.`,
    choices: [
      "A. Une liste",
      "B. Une liste de listes",
      "C. Un dictionnaire",
      "D. Une chaîne de caractères"
    ],
    correct: [2],
    explanation:
      "Un dictionnaire permet d’associer directement une clé (le nom) "
      + "à une valeur (la note)."
  },

  {
    title: "QCM 9 — Test d’existence d’une clé",
    code: `d = {"a": 1, "b": 2}
print("a" in d, "c" in d)`,
    choices: [
      "A. True False",
      "B. False True",
      "C. True True",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "L’opérateur `in` teste l’existence d’une clé dans le dictionnaire. "
      + "\"a\" est présent, \"c\" ne l’est pas."
  },

  {
    title: "QCM 10 — Parcours clé / valeur",
    code: `d = {"a": 1, "b": 2}
for k, v in d.items():
    print(k, v)`,
    choices: [
      "A. Les clés uniquement",
      "B. Les valeurs uniquement",
      "C. Les couples (clé, valeur)",
      "D. Erreur"
    ],
    correct: [2],
    explanation:
      "`items()` renvoie des couples (clé, valeur), "
      + "permettant de parcourir simultanément les deux."
  }

];

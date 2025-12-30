window.QUIZ = [

  {
    title: "QCM 1 — Alias et dictionnaire",
    code: `d = {"a": [1, 2]}
e = d
e["a"].append(3)
print(d)`,
    choices: [
      "A. {'a': [1, 2]}",
      "B. {'a': [1, 2, 3]}",
      "C. {'a': 3}",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "d et e référencent le même dictionnaire. "
      + "La liste associée à la clé 'a' est mutée en place."
  },

  {
    title: "QCM 2 — Copie superficielle",
    code: `d = {"a": [1, 2]}
e = d.copy()
e["a"].append(3)
print(d)`,
    choices: [
      "A. {'a': [1, 2]}",
      "B. {'a': [1, 2, 3]}",
      "C. {'a': []}",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "La copie est superficielle : les valeurs mutables sont partagées. "
      + "La liste associée à 'a' est donc modifiée dans d."
  },

  {
    title: "QCM 3 — Réaffectation après copie",
    code: `d = {"a": [1, 2]}
e = d.copy()
e["a"] = [9]
print(d)`,
    choices: [
      "A. {'a': [9]}",
      "B. {'a': [1, 2]}",
      "C. {'a': [1, 2, 9]}",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "La réaffectation e['a'] remplace la valeur uniquement dans e. "
      + "Le dictionnaire d n’est pas modifié."
  },

  {
    title: "QCM 4 — Clé mutable interdite",
    code: `d = {}
d[[1, 2]] = 3
print(d)`,
    choices: [
      "A. {[1, 2]: 3}",
      "B. {1: 2}",
      "C. {}",
      "D. Erreur"
    ],
    correct: [3],
    explanation:
      "Les listes sont mutables et ne peuvent pas être utilisées comme clés. "
      + "Une TypeError est levée."
  },

  {
    title: "QCM 5 — Clé immuable autorisée",
    code: `d = {}
d[(1, 2)] = 3
print(d)`,
    choices: [
      "A. {(1, 2): 3}",
      "B. {[1, 2]: 3}",
      "C. {}",
      "D. Erreur"
    ],
    correct: [0],
    explanation:
      "Les tuples sont immuables et peuvent être utilisés comme clés."
  },

  {
    title: "QCM 6 — setdefault",
    code: `d = {}
d.setdefault("a", []).append(1)
d.setdefault("a", []).append(2)
print(d)`,
    choices: [
      "A. {'a': []}",
      "B. {'a': [1]}",
      "C. {'a': [2]}",
      "D. {'a': [1, 2]}"
    ],
    correct: [3],
    explanation:
      "setdefault crée la clé une seule fois. "
      + "Les deux append modifient la même liste."
  },

  {
    title: "QCM 7 — update",
    code: `d = {"a": 1}
d.update({"a": 2, "b": 3})
print(d)`,
    choices: [
      "A. {'a': 1}",
      "B. {'a': 2}",
      "C. {'a': 2, 'b': 3}",
      "D. Erreur"
    ],
    correct: [2],
    explanation:
      "update remplace les clés existantes et ajoute les nouvelles."
  },

  {
    title: "QCM 8 — Parcours des valeurs",
    code: `d = {"a": 1, "b": 2}
for v in d.values():
    print(v)`,
    choices: [
      "A. Les clés",
      "B. Les valeurs",
      "C. Les couples (clé, valeur)",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "`values()` permet de parcourir uniquement les valeurs du dictionnaire."
  },

  {
    title: "QCM 9 — Test d’appartenance",
    code: `d = {"a": 1}
print(1 in d)`,
    choices: [
      "A. True",
      "B. False",
      "C. None",
      "D. Erreur"
    ],
    correct: [1],
    explanation:
      "L’opérateur `in` teste l’existence d’une clé, pas d’une valeur."
  },

  {
    title: "QCM 10 — Suppression",
    code: `d = {"a": 1, "b": 2}
del d["a"]
print(d)`,
    choices: [
      "A. {'a': 1, 'b': 2}",
      "B. {'a': None, 'b': 2}",
      "C. {'b': 2}",
      "D. Erreur"
    ],
    correct: [2],
    explanation:
      "`del` supprime complètement l’entrée correspondant à la clé."
  }

];

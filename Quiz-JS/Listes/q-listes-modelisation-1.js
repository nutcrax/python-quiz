window.QUIZ = [

  {
    title: "QCM 1 — Notes d’élèves",
    code: `On souhaite représenter les notes de plusieurs élèves.
Chaque élève a un nom et une liste de notes (entiers).`,
    choices: [
      "A. [\"Alice\", 12, 15, 9, \"Bob\", 14, 10]",
      "B. [[\"Alice\", [12, 15, 9]], [\"Bob\", [14, 10]]]",
      "C. [[12, 15, 9], [14, 10]]",
      "D. {\"Alice\": [12, 15, 9], \"Bob\": [14, 10]}"
    ],
    correct: [1],
    explanation:
      "Chaque élève doit regrouper son nom et ses notes. "
      + "Une liste de paires [nom, liste_de_notes] est une structure claire, "
      + "cohérente et exploitable uniquement avec des listes."
  },

  {
    title: "QCM 2 — Planning hebdomadaire",
    code: `On veut représenter un planning sur 5 jours.
Chaque jour contient une liste de créneaux horaires (chaînes).`,
    choices: [
      "A. [\"lundi\", \"mardi\", \"mercredi\", \"jeudi\", \"vendredi\"]",
      "B. [[\"9h-10h\", \"10h-11h\"], [\"14h-16h\"]]",
      "C. [[\"lundi\", [\"9h-10h\", \"10h-11h\"]], [\"mardi\", [\"14h-16h\"]]]",
      "D. [[\"9h-10h\", \"10h-11h\", \"14h-16h\"]]"
    ],
    correct: [2],
    explanation:
      "Chaque jour doit être associé explicitement à sa liste de créneaux. "
      + "Une liste de paires [jour, liste_de_créneaux] est la plus adaptée."
  },

  {
    title: "QCM 3 — Matrice numérique",
    code: `On souhaite représenter une matrice 3×3 d’entiers.`,
    choices: [
      "A. [1, 2, 3, 4, 5, 6, 7, 8, 9]",
      "B. [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
      "C. [[[1], [2], [3]], [[4], [5], [6]]]",
      "D. [[1, 2], [3, 4], [5, 6], [7, 8, 9]]"
    ],
    correct: [1],
    explanation:
      "Une matrice se représente naturellement par une liste de lignes. "
      + "Chaque ligne est une liste d’éléments."
  },

  {
    title: "QCM 4 — Historique de positions",
    code: `On veut stocker les positions successives d’un objet dans le plan.
Chaque position est un couple (x, y).`,
    choices: [
      "A. [0, 1, 2, 3, 4]",
      "B. [[0, 1], [2, 3], [4, 5]]",
      "C. [[[0], [1]], [[2], [3]]]",
      "D. [0, [1, 2], 3, 4]"
    ],
    correct: [1],
    explanation:
      "Chaque position est naturellement un couple [x, y]. "
      + "L’historique est donc une liste de couples."
  },

  {
    title: "QCM 5 — Classe et effectifs",
    code: `On souhaite représenter plusieurs classes.
Chaque classe a un nom et un effectif (entier).`,
    choices: [
      "A. [[\"Seconde\", 32, \"Première\", 28]]",
      "B. [[\"Seconde\", 32], [\"Première\", 28]]",
      "C. [[32, 28]]",
      "D. [\"Seconde\", \"Première\", 32, 28]"
    ],
    correct: [1],
    explanation:
      "Chaque classe doit associer un nom et un effectif. "
      + "Une liste de paires [nom, effectif] est simple et cohérente."
  },

  {
    title: "QCM 6 — Parcours d’un texte",
    code: `On veut représenter un texte découpé en phrases,
chaque phrase étant une liste de mots.`,
    choices: [
      "A. [\"Bonjour\", \"le\", \"monde\"]",
      "B. [[\"Bonjour\", \"le\", \"monde\"], [\"Au\", \"revoir\"]]",
      "C. [[[\"Bonjour\"], [\"le\"], [\"monde\"]]]",
      "D. [\"Bonjour le monde\", \"Au revoir\"]"
    ],
    correct: [1],
    explanation:
      "Chaque phrase est une liste de mots, et le texte est une liste de phrases. "
      + "La structure est donc une liste de listes."
  },

  {
    title: "QCM 7 — Graphe simple",
    code: `On veut représenter les voisins de chaque sommet d’un graphe.
Chaque sommet est identifié par un entier.`,
    choices: [
      "A. [[1, 2], [0, 2], [0, 1]]",
      "B. [0, 1, 2]",
      "C. [[0, 1, 2]]",
      "D. [[0], [1], [2]]"
    ],
    correct: [0],
    explanation:
      "Chaque indice représente un sommet, et la liste associée contient ses voisins. "
      + "C’est une représentation classique par listes d’adjacence."
  },

  {
    title: "QCM 8 — Résultats de sondage",
    code: `On veut stocker les réponses (oui/non) de plusieurs personnes,
dans l’ordre de passage.`,
    choices: [
      "A. [[\"oui\", \"non\"]]",
      "B. [\"oui\", \"non\", \"oui\", \"oui\"]",
      "C. [[\"oui\"], [\"non\"], [\"oui\"]]",
      "D. [\"oui non oui\"]"
    ],
    correct: [1],
    explanation:
      "Les réponses sont indépendantes et ordonnées. "
      + "Une liste simple de chaînes suffit."
  }

];

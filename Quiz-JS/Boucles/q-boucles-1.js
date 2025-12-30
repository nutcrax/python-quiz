
window.QUIZ = [

  {
    title: "QCM 1 — Faux compteur",
    code: `s = 0
for i in range(1, 10):
    if i % 2 == 0:
        continue
    s += i
print(s)`,
    choices: [
      "A. La valeur affichée est 25",
      "B. La ligne `s += i` est exécutée 9 fois",
      "C. La ligne `s += i` est exécutée 5 fois",
      "D. Supprimer `continue` change le résultat"
    ],
    correct: [0, 2, 3],
    explanation:
      "On additionne uniquement les entiers impairs de 1 à 9 : 1+3+5+7+9 = 25. " +
      "La ligne `s += i` s’exécute donc 5 fois. " +
      "Sans `continue`, les entiers pairs seraient aussi ajoutés, ce qui changerait le résultat."
  },

  {
    title: "QCM 2 — Boucle vide",
    code: `for i in range(5):
    pass
print(i)`,
    choices: [
      "A. Le programme affiche 4",
      "B. Le programme affiche 5",
      "C. La variable `i` existe après la boucle",
      "D. Le mot-clé `pass` est obligatoire ici"
    ],
    correct: [0, 2],
    explanation:
      "`range(5)` génère les valeurs 0,1,2,3,4 : après la boucle, `i` vaut donc 4. " +
      "En Python, la variable de boucle reste définie après la boucle. " +
      "`pass` sert seulement de placeholder ; il n’est pas strictement obligatoire."
  },

  {
    title: "QCM 3 — While exponentiel",
    code: `i = 1
s = 0
while i < 100:
    s += i
    i *= 2
print(s)`,
    choices: [
      "A. La boucle s’exécute 7 fois",
      "B. La valeur finale de `i` est 128",
      "C. La complexité est logarithmique",
      "D. La somme vaut 127"
    ],
    correct: [0, 1, 2, 3],
    explanation:
      "Les valeurs successives de `i` sont 1, 2, 4, 8, 16, 32, 64 (7 itérations), puis `i` devient 128. " +
      "La somme est donc 1+2+4+8+16+32+64 = 127. " +
      "Comme `i` double à chaque tour, le nombre d’itérations est logarithmique."
  },

  {
    title: "QCM 4 — Somme imbriquée",
    code: `s = 0
for i in range(1, 6):
    for j in range(i):
        s += j
print(s)`,
    choices: [
      "A. Le programme calcule une somme double",
      "B. La valeur affichée est 20",
      "C. `s` vaut la somme des entiers de 1 à 5",
      "D. Le résultat est quadratique en 5"
    ],
    correct: [0, 1, 3],
    explanation:
      "Pour chaque `i`, on ajoute la somme 0+1+...+(i−1). " +
      "Le programme calcule donc une somme double. " +
      "Le résultat vaut 20 et croît comme le carré de la borne (comportement quadratique)."
  },

  {
    title: "QCM 5 — Break silencieux",
    code: `s = 0
for i in range(10):
    if i == 5:
        break
    s += i
print(s)`,
    choices: [
      "A. La valeur affichée est 10",
      "B. La boucle s’exécute 10 fois",
      "C. La boucle s’arrête à `i = 5`",
      "D. Remplacer `break` par `continue` change le résultat"
    ],
    correct: [0, 2, 3],
    explanation:
      "La somme porte sur les valeurs 0,1,2,3,4, soit 10. " +
      "La boucle s’interrompt dès que `i == 5`. " +
      "Avec `continue`, la boucle ne s’arrêterait pas et le résultat serait différent."
  },

  {
    title: "QCM 6 — `for … else`",
    code: `for i in range(3):
    if i == 4:
        break
else:
    print("FIN")`,
    choices: [
      "A. Le mot FIN est affiché",
      "B. Le `else` s’exécute car il n’y a pas de `break`",
      "C. Le `else` dépend de la condition du `if`",
      "D. Le `else` dépend uniquement du `for`"
    ],
    correct: [0, 1, 3],
    explanation:
      "La condition `i == 4` n’est jamais vraie, donc aucun `break` n’est exécuté. " +
      "En Python, le `else` d’un `for` s’exécute uniquement si la boucle se termine sans `break`. " +
      "On affiche donc `FIN`."
  },

  {
    title: "QCM 7 — Décrément dangereux",
    code: `i = 10
while i > 0:
    print(i)
    i -= i // 3`,
    choices: [
      "A. Le programme termine toujours",
      "B. `i` décroît strictement",
      "C. Le programme peut boucler infiniment",
      "D. Le décrément dépend de la valeur courante de `i`"
    ],
    correct: [2, 3],
    explanation:
      "Lorsque `i` vaut 1 ou 2, `i // 3` vaut 0 : `i` n’est plus décrémenté. " +
      "La condition `i > 0` reste vraie et la boucle devient infinie. " +
      "Le décrément dépend bien de la valeur courante de `i`."
  },

  {
    title: "QCM 8 — Condition logique",
    code: `s = 0
for i in range(1, 20):
    if i % 3 == 0 and i % 5 != 0:
        s += i
print(s)`,
    choices: [
      "A. Le programme additionne certains multiples de 3",
      "B. Les multiples de 15 sont inclus",
      "C. Les multiples de 3 non multiples de 5 sont inclus",
      "D. La condition est équivalente à `i % 15 == 0`"
    ],
    correct: [0, 2],
    explanation:
      "La condition sélectionne les entiers divisibles par 3 mais pas par 5. " +
      "Les multiples de 15 sont donc exclus. " +
      "Ce ne sont pas les entiers tels que `i % 15 == 0`."
  },

  {
    title: "QCM 9 — Boucle déguisée",
    code: `s = 0
for i in range(1, 100):
    s += (i % 2)
print(s)`,
    choices: [
      "A. Le programme compte les nombres impairs",
      "B. Le résultat vaut 50",
      "C. La boucle est indispensable",
      "D. La complexité est linéaire"
    ],
    correct: [0, 1, 3],
    explanation:
      "`i % 2` vaut 1 si `i` est impair et 0 sinon. " +
      "La somme compte donc le nombre d’entiers impairs entre 1 et 99, soit 50. " +
      "La boucle effectue 99 itérations : complexité linéaire."
  },

  {
    title: "QCM 10 — Variable fantôme",
    code: `x = 1
for i in range(5):
    x += i
    i = 10
print(x)`,
    choices: [
      "A. La valeur affichée est 11",
      "B. La valeur affichée est 15",
      "C. L’affectation `i = 10` modifie la boucle",
      "D. La variable de boucle est réaffectée à chaque itération"
    ],
    correct: [0, 3],
    explanation:
      "La boucle impose successivement `i = 0, 1, 2, 3, 4`, indépendamment de l’affectation interne. " +
      "La somme ajoutée est donc 0+1+2+3+4 = 10, et `x` vaut 11 à la fin. " +
      "À chaque itération, `i` est réaffectée par le `for`."
  }

];


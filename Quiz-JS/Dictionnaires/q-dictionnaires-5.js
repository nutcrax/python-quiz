window.QUIZ = [

    {
        title: "QCM 1 — Carnet d’adresses (plusieurs numéros + tags)",
        code: `On construit un carnet d’adresses.
Chaque contact a :
- un nom (unique),
- une liste de numéros de téléphone (0, 1 ou plusieurs),
- une liste de tags (ex: "famille", "travail") pouvant être vide.

On veut :
(1) accéder en O(1) à un contact par son nom,
(2) parcourir tous les numéros d’un contact,
(3) pouvoir ajouter un tag rapidement.

Quelle structure de données listes+dictionnaires est la plus adaptée ?`,
        choices: [
            "A. Une liste de contacts, chaque contact étant [nom, numéros, tags]",
            "B. Un dictionnaire nom → [liste_numéros, liste_tags]",
            "C. Un dictionnaire nom → dictionnaire {numéros: liste, tags: liste}",
            "D. Deux listes parallèles : noms et numéros"
        ],
        correct: [2],
        explanation:
            "Le nom doit permettre un accès direct : dictionnaire. "
            + "Comme on a plusieurs champs, un dictionnaire interne rend le modèle explicite et extensible "
            + "(ajouter email/adresse ensuite, sans casser la structure)."
    },

    {
        title: "QCM 2 — Graphe de métros (stations, lignes, correspondances)",
        code: `On modélise un réseau de métro.
Pour chaque station, on veut :
- la liste de ses voisines (stations accessibles directement),
- pour chaque voisin : la ligne utilisée (ex: "M1", "M4") et un temps (en minutes).

On veut :
(1) obtenir rapidement les voisins d’une station,
(2) obtenir pour une station donnée et un voisin donné le (temps, ligne).

Quelle structure listes+dictionnaires est la plus adaptée ?`,
        choices: [
            "A. Une liste de tuples (station1, station2, ligne, temps)",
            "B. Un dictionnaire station → liste de voisins (sans info)",
            "C. Un dictionnaire station → dictionnaire voisin → {ligne: ..., temps: ...}",
            "D. Une matrice carrée des temps uniquement"
        ],
        correct: [2],
        explanation:
            "On a un graphe pondéré avec attributs par arête. "
            + "Dictionnaire externe pour accès direct par station, dictionnaire interne pour accès direct par voisin, "
            + "et dictionnaire d’attributs pour rendre la modélisation claire."
    },

    {
        title: "QCM 3 — Historique de jeu (événements + état courant)",
        code: `Jeu au tour par tour.
On veut stocker :
- l’état courant : pour chaque joueur, {pv, mana, inventaire(liste)}
- l’historique des actions dans l’ordre : chaque action est {joueur, type, valeur, timestamp}

On veut :
(1) accéder rapidement à l’état courant d’un joueur,
(2) itérer sur l’historique dans l’ordre,
(3) filtrer l’historique par joueur.

Quelle structure listes+dictionnaires est la plus adaptée ?`,
        choices: [
            "A. Un dictionnaire joueur → état, et une liste d’actions (dictionnaires)",
            "B. Une liste d’états successifs (snapshot complet à chaque action)",
            "C. Une liste de joueurs + une liste parallèle d’états",
            "D. Un dictionnaire timestamp → action"
        ],
        correct: [0],
        explanation:
            "Deux besoins différents : "
            + "état courant (accès direct par clé joueur) → dictionnaire ; "
            + "historique ordonné → liste ; "
            + "chaque action structurée → dictionnaire."
    },

    {
        title: "QCM 4 — Résultats d’expériences (physique) : séries + mesures",
        code: `Expériences de physique : on réalise plusieurs séries.
Chaque série a :
- un nom de série (unique),
- des paramètres (ex: température, matériau),
- une liste de mesures dans l’ordre : chaque mesure est (t, valeur).

On veut :
(1) accéder à une série par son nom,
(2) parcourir les mesures dans l’ordre,
(3) ajouter facilement un paramètre à une série.

Quelle structure listes+dictionnaires est la plus adaptée ?`,
        choices: [
            "A. Une liste de séries, chaque série étant [nom, params, mesures]",
            "B. Un dictionnaire nom → {params: dictionnaire, mesures: liste}",
            "C. Un dictionnaire nom → liste de mesures uniquement",
            "D. Deux dictionnaires séparés : nom → params et nom → mesures"
        ],
        correct: [1],
        explanation:
            "Accès direct par nom : dictionnaire. "
            + "Paramètres extensibles : dictionnaire. "
            + "Mesures ordonnées : liste. "
            + "Le tout regroupé par série : un dictionnaire interne rend le modèle lisible."
    },

    {
        title: "QCM 5 — Index inversé (moteur de recherche simplifié)",
        code: `On indexe des documents.
Chaque document a un id (entier unique) et un texte (liste de mots).
On veut construire une structure qui permet :
(1) pour un mot donné, obtenir la liste des ids de documents contenant ce mot,
(2) éventuellement conserver plusieurs occurrences (positions) dans chaque document.

Quelle structure listes+dictionnaires est la plus adaptée ?`,
        choices: [
            "A. Un dictionnaire doc_id → liste de mots",
            "B. Un dictionnaire mot → liste de doc_id",
            "C. Un dictionnaire mot → dictionnaire doc_id → liste de positions",
            "D. Une liste de tuples (mot, doc_id)"
        ],
        correct: [2],
        explanation:
            "Un index inversé mappe mot → documents. "
            + "Si on veut aussi les positions, on ajoute un niveau : doc_id → liste de positions. "
            + "Les positions sont ordonnées : liste."
    },

    {
        title: "QCM 6 — Emploi du temps multi-classes",
        code: `On gère l’emploi du temps de plusieurs classes.
Chaque classe (ex: "MPSI") a, pour chaque jour, une liste de créneaux.
Chaque créneau contient {heure_debut, heure_fin, matière, salle}.

On veut :
(1) accéder rapidement à l’emploi du temps d’une classe,
(2) parcourir les créneaux d’un jour dans l’ordre,
(3) ajouter une info plus tard (ex: professeur) sans tout casser.

Quelle structure listes+dictionnaires est la plus adaptée ?`,
        choices: [
            "A. Une liste de toutes les séances, sans regroupement",
            "B. Un dictionnaire classe → dictionnaire jour → liste de créneaux (dictionnaires)",
            "C. Une matrice classe×jour contenant une chaîne de caractères",
            "D. Un dictionnaire jour → liste de créneaux pour toutes les classes"
        ],
        correct: [1],
        explanation:
            "Accès direct par classe puis par jour : dictionnaires imbriqués. "
            + "Ordre des créneaux : liste. "
            + "Créneau extensible : dictionnaire (ajout professeur facile)."
    },

    {
        title: "QCM 7 — Puzzle (taquin / 8-puzzle) : état + recherche",
        code: `On résout un taquin (8-puzzle) par exploration.
Un état est une grille 3×3 (avec une case vide).
On veut :
- représenter un état,
- mémoriser les états déjà visités (test rapide),
- mémoriser pour chaque état son parent (pour reconstruire le chemin),
- gérer une file (ou pile) d’états à explorer.

Quelle modélisation listes+dictionnaires est la plus adaptée ?`,
        choices: [
            "A. États = listes 3×3 ; visités = liste ; parent = liste",
            "B. État = tuple (immuable) ; visités = dictionnaire/ensemble (clé état) ; parent = dictionnaire état→parent ; frontière = liste",
            "C. Tout en matrices uniquement",
            "D. Un dictionnaire unique contenant tout en vrac"
        ],
        correct: [1],
        explanation:
            "Pour test rapide, il faut une clé hashable (tuple) et une structure à accès direct (dictionnaire/ensemble). "
            + "Le parent se stocke naturellement par dictionnaire état→parent. "
            + "La frontière (pile/file) est une liste."
    },

    {
        title: "QCM 8 — Statistiques par catégorie (streaming)",
        code: `On reçoit un flux d’événements (type, valeur).
Ex : ("clic", 1), ("clic", 1), ("achat", 30), ("clic", 1)...
On veut maintenir en temps réel :
- pour chaque type : nombre d’événements,
- pour chaque type : somme des valeurs,
- et conserver les 5 dernières valeurs observées (fenêtre glissante).

Quelle structure listes+dictionnaires est la plus adaptée ?`,
        choices: [
            "A. Un dictionnaire type → {count, sum, last5(liste)}",
            "B. Trois listes parallèles",
            "C. Un dictionnaire valeur → type",
            "D. Une liste globale des événements, sans résumé"
        ],
        correct: [0],
        explanation:
            "Par type (clé) on veut plusieurs champs + une petite liste des dernières valeurs. "
            + "Dictionnaire externe (par type) + dictionnaire interne (champs) + liste pour last5."
    },

    {
        title: "QCM 9 — Calendrier partagé (participants par événement)",
        code: `On gère des événements.
Chaque événement a un id unique, un titre, et une liste de participants (emails).
On veut :
(1) accéder rapidement à un événement par id,
(2) obtenir la liste des participants,
(3) pouvoir aussi répondre vite à : “quels événements concernent cet email ?”

Quelle structure listes+dictionnaires est la plus adaptée ?`,
        choices: [
            "A. Un dictionnaire event_id → {titre, participants(liste)}",
            "B. Deux structures : (1) event_id → {titre, participants} ET (2) email → liste d’event_id",
            "C. Une liste de participants globale",
            "D. Une liste d’événements uniquement"
        ],
        correct: [1],
        explanation:
            "Tu as deux types de requêtes inverses. "
            + "Il faut donc un index direct (event_id→détails) et un index inversé (email→events). "
            + "Les collections multiples se gèrent avec listes en valeurs."
    },

    {
        title: "QCM 10 — Polygones (géométrie) : objets + index spatial simple",
        code: `On manipule des polygones.
Chaque polygone a un id unique et une liste ordonnée de points [x, y].
On veut :
(1) accéder à un polygone par id,
(2) parcourir ses points dans l’ordre,
(3) avoir un index simple : par quadrant (NE/NW/SE/SW), liste des ids de polygones dont le barycentre est dans ce quadrant.

Quelle structure listes+dictionnaires est la plus adaptée ?`,
        choices: [
            "A. Un dictionnaire poly_id → liste de points, et un dictionnaire quadrant → liste d’ids",
            "B. Une liste de polygones seulement",
            "C. Une matrice 2D géante",
            "D. Un dictionnaire point → polygone"
        ],
        correct: [0],
        explanation:
            "Accès direct à un polygone : poly_id → points (liste ordonnée). "
            + "Index par catégorie (quadrant) : dictionnaire quadrant → liste d’ids. "
            + "Deux structures complémentaires pour deux requêtes différentes."
    }

];

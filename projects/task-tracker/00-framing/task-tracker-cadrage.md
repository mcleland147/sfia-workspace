# Cadrage — Application de suivi de tâches

**Projet :** task-tracker  
**Chemin :** `projects/task-tracker/00-framing/task-tracker-cadrage.md`

---

## 1. Statut du document

| Élément | Valeur |
|---------|--------|
| **Statut** | Cadrage validé — Delivery en cours |
| **Cycle** | Cadrage (Cycle 1) — clôturé ; Delivery (Cycle 8) — en cours |
| **Profil SFIA** | Light (cadrage) ; Standard (delivery) |
| **Date et heure cadrage** | 2026-07-13 17:19 CEST (Europe/Paris) |
| **Date validation Morris** | 2026-07-13 — Morris |
| **Auteur d'exécution** | Cursor |
| **Décideur** | Morris |
| **Branche** | `cadrage/task-tracker-light` |
| **Worktree** | `/Users/morris/Projects/sfia-task-tracker` |

> **Décisions Morris validées le 2026-07-13.**  
> Les éléments fonctionnels listés ci-dessous constituent le périmètre MVP approuvé pour le cycle Delivery Standard borné.

---

## 2. Vision

Les utilisateurs individuels ont souvent besoin d'un endroit simple pour noter ce qu'ils doivent faire, sans la complexité d'outils de gestion de projet ou de collaboration d'équipe.

L'application vise à offrir un suivi de tâches personnel, immédiat et lisible : créer une tâche en quelques secondes, voir l'ensemble de ce qui reste à faire, et marquer une tâche comme terminée sans friction.

Le positionnement est volontairement minimal : pas de comptes, pas de partage, pas de paramétrage avancé. L'objectif est la clarté et la rapidité d'usage, pour un usage personnel ou démonstrateur.

**Vision candidate :** permettre à un utilisateur de créer, organiser, suivre et terminer ses tâches quotidiennes depuis une interface simple, sans mécanisme collaboratif ni paramétrage complexe.

---

## 3. Utilisateur cible

**Profil principal — utilisateur individuel**

- Utilise l'application pour son propre suivi de tâches ;
- souhaite visualiser rapidement ce qu'il doit faire ;
- ne souhaite pas administrer un outil complexe ;
- accepte un périmètre fonctionnel réduit en échange de simplicité.

Aucun persona détaillé n'est défini à ce stade.

---

## 4. Objectifs du MVP

| # | Objectif | Vérification |
|---|----------|--------------|
| 1 | Créer une tâche rapidement | Une tâche peut être créée avec un titre seul |
| 2 | Consulter les tâches | La liste affiche toutes les tâches existantes |
| 3 | Modifier une tâche | Le titre, la description, la priorité et l'échéance sont modifiables |
| 4 | Faire évoluer son statut | Une tâche peut passer entre les trois statuts candidats |
| 5 | Supprimer ou archiver une tâche | Selon décision Morris (voir §14) |

---

## 5. Périmètre fonctionnel MVP

### Fonctions candidates

| Fonction | Description |
|----------|-------------|
| Créer une tâche | Saisie d'un titre obligatoire et champs facultatifs |
| Afficher les tâches | Liste consultable de l'ensemble des tâches |
| Modifier une tâche | Édition des champs d'une tâche existante |
| Changer son statut | Transition entre les statuts candidats |
| Définir une priorité | Attribution d'une priorité parmi les trois niveaux candidats |
| Définir une échéance facultative | Date optionnelle associée à la tâche |
| Rechercher les tâches | Recherche textuelle sur le titre (minimum) |
| Filtrer par statut et priorité | Filtres limités à ces deux dimensions |
| Supprimer une tâche | Suppression avec confirmation utilisateur |

### Données minimales d'une tâche

| Champ | Obligatoire | Remarque |
|-------|-------------|----------|
| Identifiant | Oui (technique) | Généré automatiquement |
| Titre | Oui | Champ principal visible |
| Description | Non | Texte libre facultatif |
| Statut | Oui | Valeur parmi les statuts candidats |
| Priorité | Oui | Valeur parmi les priorités candidates |
| Échéance | Non | Date facultative |
| Date de création | Oui (technique) | Enregistrée automatiquement |
| Date de modification | Oui (technique) | Mise à jour automatiquement |

### Statuts candidats

| Statut | Signification candidate |
|--------|----------------------|
| À faire | Tâche créée, non démarrée |
| En cours | Tâche en cours de réalisation |
| Terminée | Tâche achevée |

> Recommandation candidate — soumise au GO Morris.

### Priorités candidates

| Priorité | Signification candidate |
|----------|------------------------|
| Basse | Peut attendre |
| Normale | Priorité par défaut |
| Haute | À traiter en priorité |

> Recommandation candidate — soumise au GO Morris.

---

## 6. Hors périmètre

Les éléments suivants sont explicitement exclus du MVP :

- comptes utilisateurs ;
- authentification ;
- rôles et permissions ;
- partage de tâches ;
- commentaires ;
- pièces jointes ;
- sous-tâches ;
- récurrence ;
- notifications (email, push, etc.) ;
- synchronisation calendrier ;
- intelligence artificielle ;
- application mobile native ;
- mode hors ligne avancé ;
- import/export ;
- reporting avancé ;
- tableaux de bord ;
- administration ;
- internationalisation.

Un cadrage complémentaire serait requis si des comptes utilisateurs, des données personnelles sensibles ou un usage collaboratif sont ajoutés ultérieurement.

---

## 7. Règles fonctionnelles essentielles

| # | Règle | Détail |
|---|-------|--------|
| R1 | Titre obligatoire | Une tâche ne peut pas être créée sans titre |
| R2 | Statut initial | Une tâche nouvellement créée a le statut **À faire** |
| R3 | Priorité initiale | La priorité par défaut est **Normale** |
| R4 | Échéance facultative | L'échéance n'est pas requise à la création |
| R5 | Transitions de statut | Une tâche peut passer entre les trois statuts candidats |
| R6 | Confirmation de suppression | Toute suppression exige une confirmation explicite |
| R7 | Tâche terminée consultable | Une tâche au statut Terminée reste visible et consultable |
| R8 | Dates techniques automatiques | Les dates de création et de modification sont gérées par le système |
| R9 | Recherche minimale | La recherche porte au minimum sur le titre |
| R10 | Filtres limités | Les filtres disponibles concernent uniquement le statut et la priorité |

Toute règle non listée ci-dessus reste hors décision à ce stade.

---

## 8. Parcours nominal

Parcours de bout en bout — scénario principal :

1. L'utilisateur ouvre l'application ;
2. il consulte la liste de ses tâches ;
3. il crée une nouvelle tâche ;
4. il renseigne un titre et, facultativement, une description, une priorité et une échéance ;
5. la tâche apparaît dans la liste avec le statut **À faire** ;
6. il la passe au statut **En cours** ;
7. il la passe au statut **Terminée**.

---

## 9. Écrans minimaux

| Écran | Contenu |
|-------|---------|
| **Liste principale** | Affichage des tâches, recherche textuelle, filtres par statut et priorité |
| **Formulaire création / modification** | Saisie et édition des champs d'une tâche |
| **Confirmation de suppression** | Dialogue de confirmation avant suppression définitive ou archivage |

Aucune maquette n'est produite à ce stade.  
Aucun design system n'est imposé.

---

## 10. Backlog MVP initial

| ID | User story | Priorité backlog | Critères d'acceptation | Statut de décision |
|----|------------|------------------|------------------------|-------------------|
| US-01 | En tant qu'utilisateur, je consulte la liste de mes tâches pour voir ce que j'ai à faire | Must | La liste affiche toutes les tâches ; chaque tâche montre au minimum titre, statut et priorité ; la liste est consultable dès l'ouverture | Candidate — GO Morris requis |
| US-02 | En tant qu'utilisateur, je crée une tâche pour noter quelque chose à faire | Must | Je peux saisir un titre obligatoire ; la tâche est créée avec le statut À faire et la priorité Normale ; la tâche apparaît immédiatement dans la liste | Candidate — GO Morris requis |
| US-03 | En tant qu'utilisateur, je modifie une tâche pour corriger ou compléter ses informations | Must | Je peux modifier le titre, la description, la priorité et l'échéance ; la date de modification est mise à jour ; les changements sont visibles dans la liste | Candidate — GO Morris requis |
| US-04 | En tant qu'utilisateur, je change le statut d'une tâche pour suivre son avancement | Must | Je peux passer une tâche de À faire à En cours puis à Terminée ; le nouveau statut est visible immédiatement ; une tâche terminée reste consultable | Candidate — GO Morris requis |
| US-05 | En tant qu'utilisateur, je définis la priorité et l'échéance d'une tâche pour organiser mon travail | Should | Je peux choisir parmi Basse, Normale et Haute ; je peux définir ou retirer une échéance ; la priorité par défaut à la création est Normale | Candidate — GO Morris requis |
| US-06 | En tant qu'utilisateur, je recherche et filtre mes tâches pour trouver rapidement ce qui m'intéresse | Should | La recherche fonctionne au minimum sur le titre ; je peux filtrer par statut ; je peux filtrer par priorité | Candidate — GO Morris requis |
| US-07 | En tant qu'utilisateur, je supprime une tâche pour retirer ce qui n'est plus pertinent | Should | Une confirmation est demandée avant suppression ; après confirmation, la tâche disparaît de la liste ; l'action est irréversible si suppression définitive retenue | Candidate — GO Morris requis |

---

## 11. Hypothèses techniques non engageantes

Les points suivants sont des hypothèses de travail — **non des décisions techniques validées** :

- application web responsive, utilisable sur desktop et mobile via navigateur ;
- frontend et backend potentiellement regroupés dans une seule application ;
- stockage local simple (fichier, mémoire) ou petite base relationnelle ;
- exécution locale possible pour le développement et la démonstration ;
- choix de stack définitif reporté au cycle d'architecture technique ou de delivery.

Aucun ADR n'est créé à ce stade.  
Aucune technologie n'est sélectionnée de manière définitive.

---

## 12. Risques et réserves

| Risque / réserve | Description |
|------------------|-------------|
| Croissance du périmètre | Ajout progressif de fonctions collaboratives, de notifications ou de sous-tâches pouvant diluer la simplicité initiale |
| Cadrage RGPD | Nécessaire si des comptes utilisateurs ou des données personnelles identifiables sont introduits |
| Cycle UX/UI | Requis si une fidélité visuelle particulière ou une charte graphique est attendue |
| Architecture formelle | Recommandée avant exposition publique, montée en charge ou persistance distribuée |

---

## 13. Critères de réussite du cadrage

Le cadrage est réussi si Morris peut :

- comprendre le produit en moins de cinq minutes ;
- valider ou corriger le périmètre MVP proposé ;
- choisir le prochain cycle (delivery, UX/UI, ou autre) ;
- identifier clairement les fonctions non incluses.

---

## 14. Décisions Morris attendues

| # | Décision | Proposition initiale | Décision Morris | Date | Statut |
|---|----------|-------------------|-----------------|------|--------|
| D1 | Principe mono-utilisateur | Application sans compte, usage personnel ou démonstrateur | **Validé** — mono-utilisateur, sans authentification | 2026-07-13 | VALIDATED — Morris |
| D2 | Périmètre MVP | Sept user stories, neuf fonctions, dix règles | **Validé** — périmètre MVP sans extension | 2026-07-13 | VALIDATED — Morris |
| D3 | Trois statuts | À faire, En cours, Terminée | **Validé** — À faire, En cours, Terminée | 2026-07-13 | VALIDATED — Morris |
| D4 | Trois priorités | Basse, Normale, Haute | **Validé** — Basse, Normale, Haute | 2026-07-13 | VALIDATED — Morris |
| D5 | Suppression ou archivage | Suppression définitive vs archivage | **Validé** — suppression définitive avec confirmation | 2026-07-13 | VALIDATED — Morris |
| D6 | Prochain cycle | Delivery Standard borné vs UX/UI Light | **Validé** — Delivery Standard borné, conception technique minimale intégrée, sans phase UX/UI séparée | 2026-07-13 | VALIDATED — Morris |

---

## 15. Recommandation de trajectoire

| Option | Description | Avantage | Limite |
|--------|-------------|----------|--------|
| **A — Delivery Standard borné** | Enchaîner directement sur un cycle de delivery avec périmètre strict | Rapidité d'exécution, livrable fonctionnel rapide | Moins de validation visuelle préalable |
| **B — UX/UI Light avant delivery** | Réaliser d'abord un cycle UX/UI Light pour valider l'écran principal | Meilleure adhésion visuelle avant développement | Ajoute un micro-cycle |
| **Décision Morris (D6)** | **Option A retenue** — Delivery Standard borné, conception technique minimale intégrée | Évite des micro-cycles inutiles pour un périmètre aussi réduit | Validé 2026-07-13 |

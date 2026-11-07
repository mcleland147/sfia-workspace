# Décision Morris — Trajectoire ML4 Git documentaire natif / ML5 réalisation Cursor

**Statut :** D2 VALIDATED IN CONTENT BY MORRIS — 2026-11-07 ; DOCUMENTED ON GIT CANDIDATE BRANCH ; NOT MERGED ; NO BUILD GO  
**Événement d'origine :** Morris accepte la revue de la qualification ML4/ML5 v0.2 le 2026-11-07, puis donne GO pour préparer la suite documentaire et Figma.  
**Références :** SEF v0.2 ; R1 `cadrage/vision-produit.md` §§2.23–2.24, 2.28, 2.36 ; R2 D3/D4/D6/D7/D8/D9 ; R3 §14 ; ADR R4-03/04 ; R5 référence ; qualification Git `3bb9224`.  
**Effet :** décision de séquencement validée en contenu par Morris ; intégration documentaire sur branche autorisée séparément, sans GO code, Figma, PR, merge ni adoption.

## 1. Problème

La trajectoire historique R4/R5 plaçait les effets Git principalement dans le vertical D6/D7/D8/D9 lié à Cursor, et proposait un ML4 surtout centré sur l'accès aux sources. Ce découpage ne livre pas la capacité produit attendue : Studio et Nora doivent pouvoir utiliser Git pour **lire, produire, publier et relire les résultats documentaires**, sans délégation Cursor artificielle.

La capacité Git ne doit pas se réduire à un connecteur technique. L'utilisateur doit également comprendre **quand et comment autoriser un fournisseur**, sélectionner des dépôts immédiatement ou ultérieurement, ajouter/retirer des ressources et distinguer ce qui est autorisé globalement de ce qui est rattaché à son projet.

## 2. Nouvelle trajectoire approuvée

### ML4 — Collaboration et publication Git gouvernées

- Git **facultatif** pour l'ouverture, la création et la continuation d'un projet Studio.
- **Paramètres → Intégrations**, extensible dans son UX, mais **GitHub seul fournisseur réellement pris en charge dans ce lot**.
- Trois entrées : suggestion non bloquante après connexion ; connexion volontaire dans Paramètres ; autorisation contextuelle dans un projet/conversation Nora.
- Accès progressif aux dépôts ; installation GitHub App ciblée, autorisation du Pilote, permission du dépôt et rattachement éventuel au projet **distincts**.
- Lecture sourcée et versionnée ; documents D4 internes comme objets persistés et sources pour Nora.
- Publication gouvernée de **documents et artefacts éditoriaux maîtrisés**, incluant choix cible/branche, inspection diff, commit distant, PR, vérification et **merge distinctement autorisé** lorsque la PR et les règles du dépôt le permettent.
- Concurrence, base/HEAD, restrictions, droits révoqués, réponses ambiguës et multi-Pilotes traités sans état fictif.

### ML5 — Réalisation technique gouvernée avec Cursor

- Contrat technique inspectable, instruction exacte, acte humain, identité exécuteur et accès Git de Cursor séparés, tentative, reprise/STOP/retours et preuves D8.
- Modification de code, migration, scripts, infrastructure et opérations de delivery technique **hors périmètre des écritures autonomes ML4**.
- Git natif de Studio utilisé en tant que capacité D9 si adapté ; **pas de second moteur D7** créé pour Cursor.

## 3. Frontières propriétaires maintenues

| Domaine | Propriété pérenne | Précision introduite |
|---|---|---|
| D1 | Session/identité Studio | Un login GitHub n'est pas une installation GitHub App ni un droit repo |
| D2 | Projet/sas | Rattachement Git facultatif, non induit par la création du projet |
| D3 | Nora cognitif | Rechercher/rédiger/proposer ; jamais convertir une source externe en mandat |
| D4 | Documents/sujets/provenance | Source interne durable ; référence de version publiée dans Git, pas double vérité documentaire |
| D5 | Cycle/méthode | Aucune obligation de cycle ou CKI Git |
| D6 | HumanDecision / autorisations | Autorisation bornée de toute mutation ; merge acte distinct ; révocation opposable |
| D7 | Contrat/dispatch/tentative d'effet | Première voie limitée aux opérations Git en ML4 ; voie Cursor étendue en ML5 |
| D8 | Qualité des preuves | Commande, commit, PR, merge, conformité et acceptation restent distincts |
| D9 | Git ressources/permissions/ref/opérations | Capacité technique Git sous D7/D6, sans autorité autonome |

**Invariants d'architecture :** ADR R4-01 (application modulaire, propriétaires uniques), ADR R4-03 (D6/D7/D8/D9 sans double exécuteur) et ADR R4-04 (GitHub App privilégiée, Git facultatif) sont **conservés**. L'énoncé R4 §5.7.11 doit être **actualisé dans son séquencement** : premier effet Git gouverné en ML4, exécution Cursor en ML5. Ce n'est pas une validation de l'exécution ML4.

## 4. Arbitrages de contenu approuvés par Morris

| ID | Orientation retenue | Risque restant à maîtriser |
|---|---|---|
| `DEC-GIT-A` | ML4 écrit les documents et artefacts éditoriaux ; toute modification technique de code/CI/config exécutable → ML5 | Contournement des protections D3/D7 par « document » |
| `DEC-GIT-B` | Merge disponible en ML4 sur PR documentaire éligible ; **GO distinct** et vérification du HEAD/protections GitHub | Merge automatique ou autorisation trop large |
| `DEC-GIT-C` | GitHub App dédiée ; voie **user-to-server** à étudier en priorité pour attribuer l'acte au Pilote ; installation-only sous justification et audits | Confusion identité Pilote vs compte technique ; droits insuffisants |
| `DEC-GIT-D` | Paramètres → Intégrations construit dès ML4, GitHub seul provider fonctionnel ; API/UI pas de plugin runtime généraliste | Sur-architecture et dette |
| `DEC-GIT-E` | Lien de publication document D4 ↔ version Git, sans synchronisation bidirectionnelle continue implicite | Double source de vérité, conflits invisibles |
| `DEC-GIT-F` | Création auto de dépôts, suppression, force push, gestion de protections et administration GitHub hors premier contrat ML4 | Blast radius et privilèges excessifs |

**Précision :** les six orientations A–F sont validées en contenu ; les modalités techniques précises, les permissions GitHub disponibles, le contrat visuel et la recette REAL ne sont pas pour autant approuvés ni implémentés.

## 5. Synchronisation documentaire autorisée

- Addendum R1 §§2.23/2.28/2.36 pour distinguer opérations Git Studio ML4 et interventions Cursor ML5 ; aucune modification rétroactive du record de clôture R1.
- R2 D1/D3/D4/D6/D7/D8/D9 : clarifier permissions des intégrations, outils de Nora, document publié, auteur des effets, faits Git et traçabilité.
- R3 : conception Figma Paramètres → Intégrations et publication documentaire ; contracter réutilisation des écrans existants.
- R4 : addendum ciblé sur séquencement, identité GitHub App, D7 minimal et chaîne d'effets ; ne pas altérer les ADR historiques.
- R5 : Roadmap et référence delivery, ML4 et ML5, critères REAL, gates et preuves.

## 6. Conditions d'effet

Un GO Git documentaire distinct autorise la synchronisation des chemins R1–R5 sur une branche candidate, avec relecture distante et sans PR/merge. La validation de la spécification technique finale, la phase Figma, le lancement Cursor, les preuves REAL et toute promotion relèvent de gates spécifiques. La validation de contenu Morris du 2026-11-07 et le GO Git documentaire présent sont tracés par cette décision et le commit de la branche candidate ; la revue Figma, la spécification technique finale, le GO construction et les éventuelles opérations PR/merge relèvent de gates ultérieurs.

# SFIA Studio — Review Pack FULL — Correction trajectoire produit / POC

| Métadonnée | Valeur |
|------------|--------|
| **Date / heure** | 2026-07-18 14:49:28 CEST |
| **Fuseau** | Europe/Paris (CEST, UTC+2) |
| **Repository** | `sfia-workspace` — `/Users/morris/Projects/sfia-workspace` |
| **Branche** | `project/sfia-studio-pre-framing` |
| **HEAD** | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` |
| **origin/main** | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` |
| **Cycle** | 1 — Cadrage (correction documentaire pré-cadrage) |
| **Profil** | Critical |
| **Typologie** | DOC — composante EVOL candidate |
| **Baseline** | SFIA v2.6 |
| **Review pack** | FULL — mono-cycle |
| **Review Handoff Git** | **not required** — correction locale ; push non autorisé |
| **Verdict** | `SFIA STUDIO PRE-FRAMING PRODUCT TRAJECTORY CORRECTED — READY FOR MORRIS REVIEW` |

---

## 1. État Git

| Contrôle | Initial / Final |
|----------|-----------------|
| Branche | `project/sfia-studio-pre-framing` |
| HEAD | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` (aucun commit) |
| origin/main | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` |
| Staged | **Aucun** |
| Tracked hors périmètre (préexistant) | `M projects/campus360/README.md` — **non touché** |
| Untracked Studio | `projects/sfia-studio/` (4 fichiers corrigés) |
| Autres untracked préexistants | `.sfia/`, `.tmp-sfia-review/`, Campus360 04–07, `sfia-review-handoff/` |

---

## 2. Sources consultées

| Source | Rôle |
|--------|------|
| Template v2.6 baseline | Contrat d’exécution |
| Routing guide / operating model / rules | Garde-fous, rôles, cycles |
| Quatre documents `projects/sfia-studio/` | Cibles de correction |
| Handoff `77332e8` (lecture contexte) | Réserves revue précédente — **non modifié** |
| Décision Morris de ce prompt | **Prime** — trajectoire produit complet |

---

## 3. Décision corrective Morris (D-VAL-3)

1. SFIA Studio vise la construction du **produit complet**.
2. Le POC est une preuve de faisabilité **intermédiaire**.
3. Le cadrage produit ne doit pas être centré sur le seul POC.
4. Le POC doit être **dérivé** de la vision et de l’architecture cible — pas l’inverse.
5. Le POC lève les risques techniques **avant** le MVP.
6. Le MVP = premier produit réellement utilisable (ultérieur).
7. L’industrialisation = étape ultérieure distincte.

---

## 4. Formulations corrigées (liste)

| Avant (problème) | Après |
|------------------|-------|
| POC local Mac comme périmètre projet / G5 | G5 = principe POC de **faisabilité** ; Mac = contrainte de preuve |
| Progressivité « POC → maturations » | Produit cible → archi → POC → MVP → industrialisation |
| H2 « valider l’intérêt » via POC | H2 = lever risques d’**implémentation** ; pas valider intérêt produit seul |
| Trajectoire cycles centrée POC | Couverture **produit complet** ; POC = famille intermédiaire |
| Vision « interface / cockpit » seule | Plateforme métier **opérationnelle et durable** |
| « Cible POC : Local Mac » | Retiré comme cible produit |
| Principe 9 « POC minimal = pas plateforme » | Remplacé : produit complet d’abord ; POC étape |

---

## 5. Fichiers modifiés

Exactement quatre fichiers sous `projects/sfia-studio/` — aucun nouveau fichier projet — Campus360 non touché — handoff distant non modifié.

---

## 6. Contenu complet des fichiers corrigés


### 6.1 — `projects/sfia-studio/README.md`

```markdown
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **produit complet candidat** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et SFIA Runtime sous contrôle Morris |
| **Nom** | **SFIA Studio** — nom candidat (non validé comme projet officiel — G1) |
| **Statut** | `pre-framing-ready-for-morris-review` |
| **Baseline méthode** | **SFIA v2.6** (baseline opérationnelle officielle, active sur `main`) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — Cycle 1 correction documentaire du pré-cadrage (DOC, Critical) |
| **Typologie cycle** | DOC — composante EVOL **candidate** (aucune évolution de baseline dans ce cycle) |
| **Cycle projet** | 1 — Cadrage (sous-phase : **correction du pré-cadrage** avant arbitrage Morris) |
| **Profil SFIA** | Critical |
| **Branche** | `project/sfia-studio-pre-framing` |
| **Chemin** | `projects/sfia-studio/` |

---

## 1. Finalité du projet (produit complet candidat)

**SFIA Studio vise la construction d’une plateforme métier complète** permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et SFIA Runtime sous contrôle Morris.

Le projet n’a **pas** pour finalité un POC, un prototype ou une application locale limitée. Le **produit cible** est une plateforme métier **opérationnelle et durable**.

### Distinction obligatoire

| Terme | Définition pour ce projet |
|-------|---------------------------|
| **Produit cible** | La plateforme complète visée — opérationnelle et durable |
| **POC** | Preuve de **faisabilité technique** limitée, étape intermédiaire uniquement |
| **MVP** | Première version **réellement utilisable** apportant une valeur métier mesurable (à définir ultérieurement) |
| **Industrialisation** | Transformation en solution durable, sécurisée, observable, maintenable et distribuable |

**Le POC n’est ni le produit cible, ni le MVP, ni la limite de la trajectoire.**

### Formulation structurante (décision corrective Morris — validée)

> SFIA Studio vise la construction d’une plateforme métier complète permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et SFIA Runtime sous contrôle Morris.
>
> Le POC est une étape technique de validation de faisabilité.
> Il ne constitue ni le produit cible, ni le MVP, ni la limite de la trajectoire.

### Principes conservés

- Git = source de vérité durable ;
- Morris = autorité de décision ;
- GPT = qualification, analyse, revue ;
- Cursor = exécuteur repository contrôlé ;
- gates humains explicites ;
- automatisation progressive et bornée (L3/L4 = cibles futures éventuelles, **non activées** ici).

**SFIA Studio n’est pas validé comme projet officiel tant que G1 n’est pas arbitragé.**

**SFIA Studio n’est pas une promotion de SFIA v2.7, ni une relance de SFIA v3.0.**

---

## 2. Trajectoire macro candidate

```text
SFIA Studio — produit cible complet
  → cadrage produit complet
  → architecture fonctionnelle et technique cible
  → POC de faisabilité
  → décision de poursuite ou d’ajustement
  → MVP réellement utilisable
  → construction incrémentale
  → industrialisation
```

Cette trajectoire est une **hypothèse de séquence** corrigée par décision Morris. Elle **ne lance aucun cycle**, ne choisit aucune stack et ne valide aucune architecture.

---

## 3. Navigation documentaire

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, produit cible, trajectoire, gouvernance |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité, vision produit complète, POC vs MVP |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture des 15 cycles (produit complet) |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack — gates G1–G7 proposés |

> **Pré-cadrage ≠ cadrage détaillé / architecture / UX / backlog / POC technique / MVP / code.**

---

## 4. Justification du profil Critical

Critical est **explicite** et **limité à la profondeur documentaire** de cette correction :

- correction de la vision et de la trajectoire produit ;
- impacts transverses sur les quatre documents ;
- risque de confusion structurante produit / POC / MVP / industrialisation ;
- impacts potentiels futurs sur architecture, cycles, automatisation et méthode.

Critical **n’autorise pas** ici : architecture, développement, POC technique, MVP, modification de doctrine, L3/L4, commit, push ou PR.

---

## 5. Principes de gouvernance (candidats)

| Principe | Portée |
|----------|--------|
| **Git = source de vérité** | Vérité produit durable versionnée ; tout stockage Runtime éventuel reste opérationnel, dérivé et reconstructible (sujet de cadrage — **non validé**) |
| **Morris décide** | Gates structurants, promotion projet, passage de phase, commit / push / PR / merge |
| **GPT qualifie / analyse / revoit** | Pas d’autorité de décision |
| **Cursor exécute borné** | Dans le contrat de prompt uniquement |
| **Gates humains explicites** | Aucune automatisation de décision |
| **Produit complet d’abord** | Le cadrage vise le produit ; le POC en dérive |
| **POC ≠ MVP ≠ industrialisation** | Vocabulaire strict |
| **Baseline v2.6 inchangée** | Aucune modification canonique dans ce cycle |
| **Observation ≠ règle** | Pas de promotion méthode sans CAPA + GO Morris |

---

## 6. Séparation projet / méthode / produit / capitalisation

| Couche | Règle pour ce cycle |
|--------|---------------------|
| **Projet** | Socle documentaire sous `projects/sfia-studio/` uniquement |
| **Méthode** | SFIA v2.6 reste la baseline ; **aucune** modification |
| **Produit** | Vision **produit complet** candidate — G3 non validé |
| **POC** | Principe de faisabilité — G5 proposé (périmètre détaillé non figé) |
| **Capitalisation** | Observations isolées ; **aucune** promotion doctrine |

---

## 7. Gates Morris proposés (pré-cadrage)

| Gate | Objet | Statut |
|------|-------|--------|
| **G1** | Confirmer SFIA Studio comme projet officiel | **PROPOSÉ** |
| **G2** | Valider problème et opportunité | **PROPOSÉ** |
| **G3** | Valider la **vision produit complète** candidate | **PROPOSÉ** |
| **G4** | Statuer sur la relation avec SFIA v2.6 | **PROPOSÉ** |
| **G5** | Valider le **principe et le périmètre d’un POC technique de faisabilité** (non le produit) | **PROPOSÉ** |
| **G6** | Autoriser ou refuser le passage au cadrage détaillé | **PROPOSÉ** |
| **G7** | Autoriser ultérieurement commit, push et PR du socle | **PROPOSÉ** |

Aucun gate G1–G7 n’est validé par la seule correction documentaire.

---

## 8. Décisions validées et non validées

### Validées

| Décision | Statut |
|----------|--------|
| Initier le pré-cadrage de SFIA Studio | **VALIDÉE** — Morris |
| Création locale du socle documentaire de pré-cadrage | **VALIDÉE** — Morris |
| **SFIA Studio vise un produit complet** ; le POC est uniquement une **preuve de faisabilité technique intermédiaire** | **VALIDÉE** — Morris (correction trajectoire) |

### Non validées

| Décision | Statut |
|----------|--------|
| Promotion comme projet définitivement engagé (G1) | **NON VALIDÉE** |
| Vision produit complète (G3) | **NON VALIDÉE** |
| Relation à v2.6 (G4) | **NON VALIDÉE** |
| Principe / périmètre détaillé du POC (G5) | **NON VALIDÉE** |
| Choix de stack / architecture cible | **NON VALIDÉE** |
| Contenu exact du POC / MVP / industrialisation | **NON VALIDÉE** |
| Modification SFIA v2.6 / création v2.7 | **NON VALIDÉE** / **interdite ici** |
| Automatisation L3 ou L4 | **NON VALIDÉE** |
| Commit, push, PR ou merge | **NON VALIDÉE** |
| Passage au cadrage détaillé (G6) | **NON VALIDÉE** |

---

## 9. Prochaine décision attendue

Morris revue le socle corrigé (`01`, `02`, `03` + review pack) puis statue sur **G1 à G6** (et éventuellement G7).

**Prochaine activité autorisée sans nouveau GO :** aucune au-delà de la revue humaine / ChatGPT.

**Verdict documentaire de ce cycle :** `SFIA STUDIO PRE-FRAMING PRODUCT TRAJECTORY CORRECTED — READY FOR MORRIS REVIEW`.

---

## 10. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode opérationnelle | SFIA v2.6 sur Git `main` |
| Template d’exécution | `prompts/templates/sfia-cycle-execution-template.md` (v2.6, `status: baseline`) |
| Documents projet | `projects/sfia-studio/` (cette branche, non mergés) |
| Review pack temporaire | `.tmp-sfia-review/chatgpt-review.md` — **non versionné** |

---

*SFIA Studio — produit complet candidat — POC = faisabilité uniquement — baseline SFIA v2.6 — Morris décide.*
```

### 6.2 — `projects/sfia-studio/01-opportunity-and-vision.md`

```markdown
# SFIA Studio — Opportunité et vision

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio (candidat — **produit complet**) |
| **Document** | `01-opportunity-and-vision.md` |
| **Cycle** | 1 — Cadrage (correction documentaire du pré-cadrage) |
| **Profil** | Critical |
| **Typologie** | DOC — composante EVOL candidate |
| **Baseline** | SFIA v2.6 |
| **Statut** | `pre-framing-ready-for-morris-review` |
| **Autorité** | Morris |

> Socle d’opportunité et de vision **produit complet**. Ce document **n’est pas** un cadrage détaillé. Aucune architecture, stack, backlog, POC technique ni MVP n’est validé ici.

---

## 1. Résumé exécutif

Le fonctionnement actuel de SFIA repose sur une boucle manuelle assistée :

**Morris → ChatGPT → template canonique Git → prompt Cursor → exécution locale → review pack / rapport → analyse ChatGPT → décision Morris.**

Cette boucle est **opérationnelle** sous SFIA v2.6. Elle reste toutefois **fragmentée** (outils séparés, copier/coller, charge cognitive, risque de dérive hors Git).

**Décision corrective Morris (validée) :** SFIA Studio est un **projet produit complet** destiné à construire une **plateforme métier opérationnelle et durable**. Le POC n’est **pas** la finalité du projet, ni son MVP, ni son périmètre produit cible. Le POC est uniquement une **étape technique bornée** de preuve de faisabilité.

| Élément | Nature |
|---------|--------|
| Initiation du pré-cadrage | **Décision validée** Morris |
| Trajectoire produit complet (POC ≠ produit ≠ MVP) | **Décision validée** Morris |
| Projet officiel (G1) | **Décision proposée** — non validée |
| Vision produit complète (G3) | **Candidate** — non validée |
| Relation à v2.6 (G4) | **Options A/B/C** — non arbitrée |
| POC de faisabilité (G5) | **Principe proposé** — périmètre détaillé non figé |
| Cadrage détaillé (G6) | **Non démarré** |

---

## 2. Définitions terminologiques obligatoires

| Terme | Définition |
|-------|------------|
| **Produit cible** | Plateforme métier complète couvrant progressivement les cycles SFIA — opérationnelle et durable |
| **POC** | Preuve de faisabilité technique limitée (jetable ou réutilisable selon résultats) destinée à lever des risques d’implémentation critiques |
| **MVP** | Première version réellement utilisable produisant une valeur métier mesurable |
| **Industrialisation** | Version durable, sécurisée, observable, maintenable et distribuable |

Ces termes ne sont **jamais** interchangeables.

---

## 3. Contexte et fonctionnement actuel

### 3.1 Baseline

| Élément | Observation |
|---------|-------------|
| Baseline opérationnelle | **SFIA v2.6** — officialisée (manifest `2026-07-16`, template `status: baseline`) |
| Boucle opératoire | Operating model ChatGPT ↔ Cursor (niveaux 0→4 ; niveau courant = manuelle assistée) |
| Source de vérité | Repository Git |
| Autorité | Morris (L0) |

### 3.2 Boucle actuelle (observation)

1. Morris exprime une intention.
2. ChatGPT qualifie, cadre et produit un prompt Cursor conforme au template.
3. Cursor exécute localement dans un périmètre borné.
4. Un review pack / rapport est produit.
5. ChatGPT analyse le retour.
6. Morris décide (GO / NO-GO / gates).

### 3.3 Précédents documentaires (observation, non décision)

| Source | Rôle pour ce pré-cadrage |
|--------|--------------------------|
| `projects/campus360/` | **Référence de structure** uniquement |
| `docs/architecture/sfia-platform-architecture.md` | Inspiration historique (Studio / Runtime / Core / Knowledge) — **non validée** |
| Specs moteurs v1.1 | Fondations — specs, pas moteurs autonomes exécutables |

> **Réserve :** la séparation Studio / Runtime est un **sujet de cadrage** recommandé à traiter ultérieurement. Elle n’est **pas** une architecture retenue dans ce cycle. Tout stockage Runtime éventuel devra rester opérationnel, dérivé et reconstructible depuis Git — **hypothèse de cadrage**, non décision.

---

## 4. Problème adressé

La méthode SFIA v2.6 fonctionne, mais l’expérience opérateur reste **dispersée** entre plusieurs surfaces (chat, IDE, terminal, fichiers temporaires, PR).

**Problème candidat :** absence d’une **plateforme métier** permettant de piloter durablement les cycles SFIA de bout en bout (qualification → exécution contrôlée → revue → décision) tout en préservant Git, Morris, GPT, Cursor (et un Runtime éventuel) dans leurs rôles respectifs.

---

## 5. Irritants et limites actuelles

| Irritant | Impact (hypothèse) |
|----------|-------------------|
| Copier/coller manuel entre ChatGPT et Cursor | Friction, erreurs de contrat, perte de contexte |
| Multiplicité des artefacts | Charge cognitive, risque d’obsolescence |
| Dépendance à la discipline opérateur | Qualité variable si template / gates non suivis |
| Visibilité partielle de l’état Git / cycle | Risque hors branche / hors périmètre |
| Absence d’UI métier | Méthode « outil-first », pas « métier-first » |
| Tentation d’automatiser trop tôt | Risque de contourner les gates humains |

Ces irritants sont des **observations / hypothèses**, pas un diagnostic validé.

---

## 6. Opportunité produit

| Dimension | Opportunité candidate |
|-----------|----------------------|
| **Produit** | Plateforme métier complète de pilotage des cycles SFIA |
| **Orchestration** | Coordination bornée Git + GPT + Cursor (+ Runtime) sous gates Morris |
| **Traçabilité** | Historique de cycles, décisions et preuves ancré dans Git |
| **Différenciation** | Produit métier sur méthode existante — sans remplacer la baseline |
| **Progressivité** | Produit cible → architecture → POC de faisabilité → MVP → industrialisation |

---

## 7. Opportunité méthode

| Dimension | Opportunité candidate |
|-----------|----------------------|
| **Épreuve terrain** | Vérifier si une plateforme métier améliore la conformité aux garde-fous v2.6 |
| **Feedback** | Remonter des irritants réels vers d’éventuels cycles CAPA futurs |
| **Non-objectif** | Ne pas créer SFIA v2.7 ni relancer v3.0 via ce projet |

Toute évolution de méthode reste **hors périmètre** de ce pré-cadrage et exigerait un cycle dédié + GO Morris.

---

## 8. Vision produit candidate (produit complet)

> **Vision candidate (non validée — G3) :** SFIA Studio est la **plateforme métier** qui permet à Morris (et, plus tard éventuellement, à d’autres opérateurs autorisés) de **qualifier, lancer, suivre, clôturer et industrialiser** les cycles SFIA, en orchestrant GPT, Cursor et SFIA Runtime autour de Git comme source de vérité, avec des gates humains explicites et une automatisation progressive strictement bornée.

### Orientations candidates — produit cible

| Aspect | Orientation candidate |
|--------|----------------------|
| **Nature** | Plateforme métier opérationnelle et durable — **pas** un POC |
| **Rôle** | Cockpit de cycle et d’orchestration — pas une seconde source de vérité |
| **Couverture** | Progressive des 15 cycles projet SFIA |
| **Entrée** | Intention / demande → qualification structurée |
| **Sortie** | Prompt / exécution / preuves / décision — ancrés Git |
| **Décision** | Toujours Morris (ou délégué explicite futur — non décidé) |
| **Automatisation** | Progressive ; L3/L4 hors de ce pré-cadrage |
| **Studio / Runtime** | Séparation à qualifier au cadrage — **non validée** ici |

### Explicitement non décidé

| Élément | Statut |
|---------|--------|
| Stack | **Non choisi** |
| Architecture fonctionnelle / technique | **Non décidé** |
| Modèle GPT / fournisseur | **Non décidé** |
| Intégration Cursor définitive | **Non décidé** |
| Contenu exact du POC / MVP | **Non décidé** |
| Multi-utilisateur / cloud / auth | À qualifier ultérieurement — **hors ce pré-cadrage** |
| Modification méthode v2.6 | **Interdite dans ce cycle** |

---

## 9. Trajectoire candidate (produit → POC → MVP → industrialisation)

```text
Pré-cadrage
  → cadrage produit complet
  → conception et architecture cible
  → POC de faisabilité
  → décision de poursuite ou d’ajustement
  → MVP utilisable
  → delivery incrémental
  → industrialisation
```

**Règle structurante :** le POC est **dérivé** de la vision produit et d’une architecture cible suffisamment cadrée — **pas l’inverse**.

---

## 10. Catégories produit / POC / MVP / industrialisation

| Catégorie | Contenu candidat |
|-----------|------------------|
| **Produit cible** | Plateforme métier complète couvrant progressivement les cycles SFIA |
| **POC** | Preuve technique destinée à démontrer la faisabilité d’implémentation (Git, GPT, Cursor, Runtime, règles SFIA, gates Morris) depuis une interface métier |
| **MVP** | Première version réellement utilisable produisant une valeur métier — **non défini** dans ce cycle |
| **Industrialisation** | Version durable, sécurisée, observable, maintenable et distribuable — étape ultérieure distincte |

---

## 11. Utilisateurs et parties prenantes

| Acteur | Rôle candidat |
|--------|---------------|
| **Morris** | Autorité de décision (L0) — utilisateur primaire du produit et du POC |
| **ChatGPT / GPT** | Qualification, analyse, revue — non décideur |
| **Cursor** | Exécuteur repository contrôlé |
| **SFIA Runtime** | Orchestration / imposition de gates — **sujet de cadrage**, non validé |
| **Git / GitHub** | Source de vérité et espace de revue (PR) |
| **Futurs opérateurs** | Hypothèse produit ultérieure — hors définition MVP actuelle |

---

## 12. Proposition de valeur

| Pour | Valeur candidate |
|------|------------------|
| **Morris** | Pilotage métier durable des cycles ; moins de friction ; visibilité des gates |
| **Conformité méthode** | Meilleure application des contrats de prompt et stop conditions |
| **Traçabilité** | Preuves rattachées aux artefacts Git |
| **Trajectoire** | Preuve de faisabilité (POC) avant investissement MVP / industrialisation |

---

## 13. Principes fondateurs candidats

1. Git reste la seule source de vérité opérationnelle durable.
2. Morris conserve l’autorité sur les gates structurants.
3. GPT prépare ; Cursor exécute ; aucun des deux ne décide.
4. Le projet vise le **produit complet** ; le POC n’en est qu’une étape.
5. Le POC dérive de la vision et de l’architecture cible — pas l’inverse.
6. POC ≠ MVP ≠ industrialisation.
7. Toute automatisation est désactivable et journalisée.
8. Le produit consomme la méthode ; il ne la remplace pas silencieusement.
9. Observation projet ≠ règle méthode.
10. Pas de seconde vérité opaque hors Git ; stockage Runtime éventuel = dérivé / reconstructible (hypothèse de cadrage).
11. Sécurité et permissions avant commodité d’automatisation.
12. Vocabulaire de statut explicite : observation / hypothèse / option / recommandation / décision proposée / décision validée.

---

## 14. Périmètre produit global candidat

| Domaine | Inclusion candidate (produit cible) |
|---------|-------------------------------------|
| Pilotage progressif des 15 cycles | Vue, qualification, déclenchement contrôlé |
| Orchestration GPT / Cursor / Runtime | Sous contrat et gates |
| Visibilité Git | Branche, statut, diff, review pack |
| Historique de décisions | Ancré ou exportable vers Git |
| Garde-fous | Chemins interdits, stop conditions, profils |
| Trajectoire MVP puis industrialisation | Après preuve de faisabilité et GO Morris |
| Automatisation progressive | Cible future L3/L4 — non activée ici |

Le **POC local Mac** n’est **pas** le périmètre du produit.

---

## 15. POC de faisabilité (étape technique — G5)

### Rôle

Démontrer que la solution envisagée **peut être implémentée**, notamment que Git, GPT, Cursor, SFIA Runtime, les règles SFIA et les gates Morris peuvent être orchestrés depuis une interface métier.

### Questions techniques cibles (candidats G5)

| # | Question de faisabilité |
|---|-------------------------|
| 1 | L’interface peut-elle lire l’état Git réel ? |
| 2 | Les instructions SFIA peuvent-elles être composées et injectées à GPT ? |
| 3 | GPT peut-il produire une qualification et un contrat structurés ? |
| 4 | Cursor peut-il être invoqué de manière contrôlée ? |
| 5 | Le Runtime peut-il imposer des gates et stop conditions ? |
| 6 | Les résultats, diffs et review packs peuvent-ils être récupérés et analysés ? |
| 7 | L’ensemble peut-il fonctionner localement sur le Mac de Morris ? |

Le point 7 est une **contrainte de preuve locale**, pas un choix de plateforme produit définitif.

### Ce que le POC ne valide pas

- le produit complet ;
- le MVP ;
- l’industrialisation ;
- la couverture de tous les cycles ;
- la stack définitive ;
- l’architecture définitive.

### Nature

Preuve technique **jetable ou réutilisable selon résultats** — à qualifier après exécution. Contenu exact du POC = **non figé** (G5 proposé).

---

## 16. Hors périmètre (ce pré-cadrage)

- Cadrage détaillé, architecture détaillée, stack, API, modèle de données
- UX/UI / Figma / maquettes
- Backlog / user stories / code / tests applicatifs
- Démarrage du POC technique ou définition du MVP
- CI/CD, packaging, intégrations réelles dans ce cycle
- Automatisation L3/L4, multi-utilisateur, cloud, authentification (détail)
- Modification SFIA v2.6, création v2.7, relance v3.0
- Commit / push / PR / merge sans GO Morris (G7)

---

## 17. Hypothèses

| ID | Hypothèse | Risque si fausse |
|----|-----------|------------------|
| H1 | La friction principale est l’orchestration multi-outils, pas l’insuffisance de la méthode v2.6 | Mauvais produit |
| H2 | Un POC de faisabilité technique borné suffit à **lever les risques d’implémentation critiques** avant d’engager le MVP — il ne valide pas à lui seul l’intérêt produit complet ni le périmètre MVP | Confusion faisabilité ↔ valeur produit ; MVP mal engagé |
| H3 | GPT et Cursor resteront les moteurs d’analyse et d’exécution à moyen terme | Reconception d’intégration |
| H4 | Morris restera le décideur unique au moins jusqu’au MVP | Gouvernance à revoir |
| H5 | L’UI peut renforcer les gates sans les contourner | Risque sécurité / gouvernance |
| H6 | Option C (produit consommant v2.6) est la relation la plus sûre au démarrage | Repositionnement G4 |
| H7 | Le POC doit être **dérivé d’une architecture cible suffisamment cadrée** (pas l’inverse) | POC orphelin / non représentatif |
| H8 | La séparation Studio / Runtime sera utile au cadrage sans être figée ici | Architecture prématurée si figée trop tôt |

---

## 18. Contraintes

| Contrainte | Origine |
|------------|---------|
| Baseline v2.6 non modifiable dans ce cycle | Garde-fou Morris |
| Pas de seconde source de vérité | Rules & guardrails / operating model |
| Pas d’automatisation de décision | Operating model |
| Produit complet ≠ périmètre POC | Décision corrective Morris |
| Critical documentaire seulement | Profil de ce cycle |
| Working tree Campus360 non lié | Ne pas toucher |

---

## 19. Risques majeurs

| Risque | Domaine | Mitigation candidate (non implémentée) |
|--------|---------|----------------------------------------|
| Seconde vérité hors Git | Gouvernance | Ancrage Git ; Runtime dérivé / reconstructible |
| Contournement des gates | Sécurité / RSSI | Gates explicites ; POC doit démontrer des contrôles |
| Exécution locale dangereuse | Sécurité | Périmètre borné ; permissions ; secrets |
| Fuite de contexte vers IA | RGPD | Minimisation ; POC peut évaluer traçabilité — pas de DPIA ici |
| Coûts API | FinOps | Mesure possible dans le POC — pas de modèle économique ici |
| Confusion produit / POC / MVP | Trajectoire | Vocabulaire strict ; G5 borné |
| Surinvestissement avant faisabilité | Delivery | POC après architecture cible suffisante |
| Architecture historique prise pour validée | Trajectoire | Inspiration seulement |

### Blocs pré-cadrage (identification seule)

| Bloc | Identification | Non produit ici |
|------|----------------|-----------------|
| **Sécurité / RSSI** | Repo, agents, secrets, gates ; POC devra démontrer des contrôles | Threat model |
| **DevOps** | Git, GPT, Cursor ; faisabilité ≠ industrialisation | Pipelines |
| **Observabilité / RUN** | Logs / audit / reprise — architecture & industrialisation ; test éventuel en POC | Runbook, SLO |
| **FinOps** | Coûts API mesurables en POC | Modèle économique |
| **RGPD** | Contexte IA ; minimisation / traçabilité à évaluer en POC | DPIA |
| **Accessibilité** | UI métier future | Référentiel |
| **Performance** | Latence IA, contexte | SLA |
| **UX/UI + Figma** | Cycle futur probable | Maquettes (désactivé) |
| **Capitalisation** | Observations ≠ règles | Promotion méthode |

---

## 20. Critères de crédibilité

1. Le produit cible est clairement distinct du POC.
2. Le POC est clairement distinct du MVP.
3. Le MVP est clairement distinct de l’industrialisation.
4. La trajectoire place le POC **après** cadrage / architecture cible suffisante.
5. Aucune stack / architecture n’est présentée comme retenue.
6. Les gates G1–G7 restent proposés (hors décisions Morris déjà validées).

---

## 21. Critères de succès du pré-cadrage

| Critère | Cible |
|---------|-------|
| Socle à 4 documents cohérents | Oui |
| Trajectoire produit / POC / MVP / industrialisation | Alignée décision Morris |
| Baseline | v2.6 affirmée, non modifiée |
| Revue Morris | Possible sur G1–G6 |
| Handoff Git (cette correction) | Non requis |

---

## 22. Options de relation avec SFIA v2.6

| Option | Description | Impact | Risque |
|--------|-------------|--------|--------|
| **A** | Extension candidate **compatible** v2.6 | Couplage plus fort produit/méthode | Confusion « extension = baseline » |
| **B** | Future **évolution de méthode** | Cycles CAPA/EVOL méthode possibles | Promotion prématurée v2.7 |
| **C** | **Produit indépendant** consommant SFIA v2.6 | Séparation nette ; baseline intacte | Moindre ancrage « officiel méthode » |

### Recommandation candidate (non décision)

**Recommandation proposée : Option C** comme position de démarrage.

Justification candidate : préserve v2.6 ; évite v2.7 ; permet d’éprouver le produit avant couplage doctrine ; laisse A/B ouvertes après preuves + CAPA + GO Morris.

**G4 reste l’arbitrage Morris.** Cette recommandation n’est pas une décision validée.

---

## 23. Lien avec les documents du socle

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité et gouvernance |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles produit complet |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Gates et arbitrages |

---

*SFIA Studio — vision produit complet — POC = faisabilité uniquement — baseline SFIA v2.6 — Morris décide.*
```

### 6.3 — `projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md`

```markdown
# SFIA Studio — Hypothèse de couverture des cycles SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio (candidat — **produit complet**) |
| **Document** | `02-sfia-cycle-coverage-hypothesis.md` |
| **Cycle** | 1 — Cadrage (correction documentaire du pré-cadrage) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | `pre-framing-ready-for-morris-review` |
| **Référence méthode** | Template v2.6 §4.1 (15 cycles) ; routing guide §4–§6 |

> **Règle :** les 15 cycles restent un **référentiel de couverture potentielle du produit complet**. Aucun cycle n’est automatiquement lancé. Activation **uniquement** par déclencheur réel + qualification + GO Morris si requis. Profil **requalifié à chaque cycle**. Pas d’ordre séquentiel rigide. Pas de forçage pour atteindre quinze.
>
> **Correction Morris :** la couverture n’est **pas** centrée sur le seul POC. Le POC est une **activité technique intermédiaire** sur la trajectoire du produit.

---

## 1. Légende

| Caractère | Signification |
|-----------|---------------|
| **Quasi systématique** | Attendue sur une trajectoire produit complète |
| **Activable** | Fortement probable si le projet est engagé |
| **Conditionnel** | Dépend d’un événement ou d’un arbitrage |
| **Événementiel** | INC / RUN / EVOL — incident ou décision |

---

## 2. Familles de cycles (distinction obligatoire)

| Famille | Objet | Exemples |
|---------|-------|----------|
| **Conception du produit cible** | Cadrage, conception, architectures, UX | Cycles 1–4, 6 |
| **POC de faisabilité** | Preuve technique limitée | Parties de 6, 7, 9, 10 (+ delivery borné) |
| **Construction du MVP** | Première valeur métier utilisable | Cycles 5, 8, puis 9–12 selon besoin |
| **Industrialisation** | Durabilité, sécurité, release, RUN | Cycles 7, 10–12 renforcés |
| **Évolution méthode** | Hors produit — CAPA/EVOL méthode | Template, operating model — **GO Morris + cycle dédié** |

---

## 3. Synthèse de couverture (hypothèse — produit complet)

| # | Cycle | Caractère | Probabilité (hyp.) | Justification produit complet |
|---|-------|-----------|--------------------|-------------------------------|
| 1 | Cadrage | Quasi systématique | Certaine (en cours) | Pré-cadrage ; cadrage **produit** complet si G6 |
| 2 | Conception fonctionnelle | Quasi systématique | Très élevée | Spécifier la plateforme métier cible |
| 3 | Architecture fonctionnelle | Activable | Très élevée | Modules métier ; distinction Studio / Runtime **à cadrer** — non validée |
| 4 | UX/UI | Activable | Très élevée | Interface métier — Figma **désactivé** ici |
| 5 | Backlog / user stories | Quasi systématique | Très élevée | **Après** POC / décision de poursuite — découpage MVP |
| 6 | Architecture technique | Activable | Très élevée | Architecture **cible** d’abord ; socle du POC dérivé |
| 7 | Intégration / DevOps | Activable | Très élevée | Git, GPT, Cursor, Runtime — faisabilité puis industrialisation |
| 8 | Delivery / implémentation | Quasi systématique | Certaine si GO | POC borné **puis** incréments MVP — **pas dans ce cycle** |
| 9 | QA / validation | Quasi systématique | Certaine si delivery | QA de faisabilité (POC) **et** QA produit (MVP+) |
| 10 | Sécurité / RSSI | Activable | Très élevée | Critique produit ; contrôles à démontrer aussi en POC |
| 11 | Déploiement / release | Activable | Élevée | Surtout industrialisation ; pas le focus POC |
| 12 | Observabilité / RUN readiness | Activable | Élevée | Industrialisation ; tests éventuels limités en POC |
| 13 | PR readiness | Quasi systématique | Certaine si versionnement | Tout lot documentaire / code versionné |
| 14 | Post-merge | Quasi systématique | Certaine si merge | Cleanup et clôture |
| 15 | Capitalisation / REX | Quasi systématique | Élevée | Observations produit ≠ promotion méthode |

---

## 4. Profils probables (non figés)

| Situation | Profil probable | Note |
|-----------|-----------------|------|
| Pré-cadrage / correction trajectoire | **Critical** | Ce cycle |
| Cadrage détaillé produit (si G6) | Critical ou Standard | À requalifier |
| Conception / archi fonctionnelle produit | Critical probable | Gouvernance + IA |
| Architecture technique cible | Critical probable | Avant POC |
| POC de faisabilité | Standard ou Critical | Selon secrets / exécution locale |
| MVP / delivery incrémental | Standard ou Critical | À requalifier |
| Industrialisation / release | Critical probable | Sécurité / RUN |
| PR readiness doc-only | Standard (Light si ≤3 fichiers) | Selon template |
| Capitalisation méthode | Capitalization + profondeur | **Cycle séparé** |

Aucun profil n’est figé hors du cycle courant.

---

## 5. Déclencheurs d’activation (hypothèses)

| Phase | Déclencheur candidat | Cycles probables |
|-------|----------------------|------------------|
| Cadrage produit | GO G6 | 1 (suite) |
| Conception / archi produit | Clôture cadrage détaillé | 2, 3, 4, 6 |
| POC de faisabilité | GO dédié après architecture cible suffisante | 6/7/8/9/10 (bornés) |
| Décision de poursuite | Résultats POC | Gate Morris (hors G1–G7 pré-cadrage) |
| MVP | GO post-POC | 5, 8, puis 9–12 |
| Industrialisation | Maturité MVP | 7, 10–12 renforcés |
| Capitalisation | Leçon durable | 15 — sans auto-promotion doctrine |

---

## 6. Blocs transverses probables

| Bloc | Pertinence produit | POC | Industrialisation | Statut ici |
|------|-------------------|-----|-------------------|------------|
| **FinOps** | Coûts API durables | Mesure technique possible | Modèle à définir | Identifié |
| **GreenOps** | Conditionnel | Faible | Ultérieur | Conditionnel |
| **RGPD** | Fort | Évaluer minimisation / traçabilité | DPIA si requis | Identifié |
| **Accessibilité** | UI métier | Limité | Exigence produit | Identifié |
| **Performance** | Latence IA | Mesure possible | SLA futurs | Identifié |
| **UX/UI + Figma** | Fort | Non requis ici | Oui | **Désactivé** |
| **Sécurité** | Critique | Démontrer contrôles | Complet | Identifié |
| **DevOps / release** | Fort | Intégrations bornées | Pipelines / distribution | Identifié |
| **Observabilité / RUN** | Fort | Tests éventuels limités | Complet | Identifié |
| **Capitalisation** | Continu | Observations | REX structurés | Identifié |

---

## 7. Distinction cycles projet vs cycles méthode

| Famille | Exemples | Règle |
|---------|----------|-------|
| **Cycles projet SFIA Studio** | Cadrage produit, conception, POC faisabilité, MVP, industrialisation | Livrables sous `projects/sfia-studio/` (+ code futur projet) |
| **Cycles évolution méthode** | Template, operating model, routing, baseline | `method/`, `prompts/` — **GO Morris + cycle dédié** |

**Interdiction dans ce cycle :** modification méthode, SFIA v2.7, relance v3.0.

---

## 8. Trajectoire macro candidate (hypothèse)

```text
Pré-cadrage
  → cadrage détaillé produit
  → conception fonctionnelle
  → architecture fonctionnelle
  → UX/UI initiale si nécessaire
  → architecture technique candidate
  → POC de faisabilité
  → QA de faisabilité
  → décision Morris de poursuite
  → backlog / MVP
  → delivery incrémental
  → sécurité / QA / release / RUN readiness
  → industrialisation
  → capitalisation / REX
```

### Lecture structurante

| Étape | Nature |
|-------|--------|
| Jusqu’à architecture technique candidate | Conception du **produit cible** |
| POC + QA de faisabilité | Preuve technique **intermédiaire** |
| Décision de poursuite | Gate Morris |
| Backlog / MVP / delivery | Construction de la **valeur métier** |
| Sécurité / release / RUN / industrialisation | **Durabilité** |
| Capitalisation | Observations — pas auto-promotion méthode |

Cette trajectoire est une **hypothèse**. Elle **ne lance aucun cycle**, ne produit aucun backlog et ne valide aucune architecture.

---

## 9. Positionnement du POC dans la couverture

Le POC **peut mobiliser** (de façon bornée) :

- architecture technique (dérivée de la cible) ;
- intégration / DevOps ;
- sécurité ;
- QA / validation ;
- une delivery très limitée de preuve.

Le POC **ne remplace pas** :

- la conception du produit cible ;
- le backlog / MVP ;
- l’industrialisation ;
- la couverture complète des 15 cycles.

---

## 10. Ce que ce document n’est pas

- Pas une activation automatique de cycles
- Pas une architecture déguisée
- Pas un backlog
- Pas une promotion d’évolution méthode
- Pas une validation de POC, de MVP ou de stack
- Pas un centrage du projet sur le POC

---

## 11. Lien avec les documents du socle

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité, produit cible, gates |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Vision produit complète, POC de faisabilité |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Arbitrages G1–G7 |

---

*SFIA Studio — couverture cycles du produit complet — POC = étape intermédiaire — baseline SFIA v2.6 — Morris décide.*
```

### 6.4 — `projects/sfia-studio/03-pre-framing-decision-pack.md`

```markdown
# SFIA Studio — Decision pack de pré-cadrage

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio (candidat — **produit complet**) |
| **Document** | `03-pre-framing-decision-pack.md` |
| **Destinataire** | Morris (L0) |
| **Cycle** | 1 — Cadrage (correction documentaire du pré-cadrage) |
| **Profil** | Critical |
| **Typologie** | DOC — composante EVOL candidate |
| **Baseline** | SFIA v2.6 |
| **Statut pré-cadrage** | `pre-framing-ready-for-morris-review` |
| **Verdict documentaire** | `SFIA STUDIO PRE-FRAMING PRODUCT TRAJECTORY CORRECTED — READY FOR MORRIS REVIEW` |

---

## 1. Objet du decision pack

Fournir à Morris un pack d’arbitrage pour :

1. confirmer ou non SFIA Studio comme projet officiel ;
2. valider problème, opportunité et **vision produit complète** ;
3. statuer sur la relation à SFIA v2.6 ;
4. valider le **principe et le périmètre d’un POC de faisabilité** (non le produit) ;
5. autoriser ou refuser le passage ultérieur au cadrage détaillé ;
6. décider ultérieurement du versionnement Git (commit / push / PR).

Ce pack **ne décide pas** à la place de Morris.

---

## 2. Décisions déjà validées

| # | Décision | Autorité | Portée |
|---|----------|----------|--------|
| D-VAL-1 | **Initier le pré-cadrage de SFIA Studio** | Morris | Pré-cadrage |
| D-VAL-2 | **Autoriser la création locale** du socle documentaire de pré-cadrage | Morris | `projects/sfia-studio/` + review pack temporaire |
| D-VAL-3 | **SFIA Studio vise un produit complet.** Le POC est uniquement une **preuve de faisabilité technique intermédiaire.** | Morris | Correction de trajectoire documentaire |

### Contenu explicite de D-VAL-3

1. SFIA Studio vise la construction du **produit complet**.
2. Le POC est une preuve de faisabilité **intermédiaire**.
3. Le cadrage produit **ne doit pas** être centré sur le seul POC.
4. Le POC doit être **dérivé** de la vision produit et de l’architecture cible — **pas l’inverse**.
5. Le POC doit démontrer la faisabilité des points techniques risqués **avant** construction du MVP.
6. Le MVP désignera ultérieurement le premier produit réellement utilisable.
7. L’industrialisation est une étape ultérieure **distincte**.

D-VAL-3 **ne valide pas** G1–G7, ni l’architecture, ni la stack, ni le contenu exact du POC, ni le MVP.

---

## 3. Décisions proposées (gates G1–G7)

| Gate | Décision proposée | Statut |
|------|-------------------|--------|
| **G1** | Confirmer SFIA Studio comme **projet officiel** engagé sous SFIA v2.6 | **PROPOSÉ** |
| **G2** | Valider le **problème et l’opportunité** | **PROPOSÉ** |
| **G3** | Valider la **vision produit complète** candidate (plateforme métier opérationnelle et durable) | **PROPOSÉ** |
| **G4** | Statuer sur la **relation avec SFIA v2.6** (options A / B / C) | **PROPOSÉ** |
| **G5** | Valider le **principe et le périmètre d’un POC technique** destiné **uniquement** à démontrer la faisabilité d’implémentation de SFIA Studio | **PROPOSÉ** |
| **G6** | Autoriser ou refuser le **passage au cadrage détaillé** | **PROPOSÉ** |
| **G7** | Autoriser ultérieurement **commit, push et PR** du socle documentaire | **PROPOSÉ** |

### Précisions de statut

| Formulation | Signification |
|-------------|---------------|
| **PROPOSÉ** | Soumis à arbitrage Morris — **non validé** |
| **VALIDÉ** | Uniquement si Morris statue explicitement |
| **REFUSÉ** | Uniquement si Morris refuse explicitement |

**Validé aujourd’hui :** D-VAL-1, D-VAL-2, D-VAL-3 uniquement.

---

## 4. Formulation détaillée de G5 (POC de faisabilité)

**G5 — Valider le principe et le périmètre d’un POC technique destiné uniquement à démontrer la faisabilité d’implémentation de SFIA Studio.**

Le POC doit répondre à des questions techniques ciblées, notamment :

| # | Question |
|---|----------|
| 1 | L’interface peut-elle lire l’état Git réel ? |
| 2 | Les instructions SFIA peuvent-elles être composées et injectées à GPT ? |
| 3 | GPT peut-il produire une qualification et un contrat structurés ? |
| 4 | Cursor peut-il être invoqué de manière contrôlée ? |
| 5 | Le Runtime peut-il imposer des gates et stop conditions ? |
| 6 | Les résultats, diffs et review packs peuvent-ils être récupérés et analysés ? |
| 7 | L’ensemble peut-il fonctionner localement sur le Mac de Morris ? |

### Le POC ne valide pas

- le produit complet ;
- le MVP ;
- l’industrialisation ;
- la couverture de tous les cycles ;
- la stack définitive ;
- l’architecture définitive.

Le fonctionnement local sur le Mac de Morris (question 7) est une **contrainte de preuve**, pas le périmètre produit cible.

---

## 5. Décisions non prises

| Sujet | Statut |
|-------|--------|
| Stack technique | Non pris |
| Architecture fonctionnelle / technique détaillée | Non pris |
| Séparation Studio / Runtime (détail) | Sujet de cadrage — **non validé** |
| Modèle / fournisseur GPT | Non pris |
| Modalités d’intégration Cursor | Non pris |
| Contenu exact / jetable vs réutilisable du POC | Non pris (G5) |
| MVP / backlog / user stories | Non pris |
| Automatisation L3 / L4 | Non pris — **hors ce cycle** |
| Modification SFIA v2.6 / création v2.7 | Non pris — **interdite ici** |
| Multi-utilisateur / cloud / authentification | Non pris |
| Commit / push / PR / merge | Non pris (G7) |
| Cadrage détaillé démarré | Non — dépend de G6 |

---

## 6. Options et impacts (focus G4 et G5)

### 6.1 Relation à SFIA v2.6 (G4)

| Option | Résumé | Impact si retenue | Risque |
|--------|--------|-------------------|--------|
| **A** | Extension candidate compatible 2.6 | Couplage produit/méthode plus fort | Confusion extension ↔ baseline |
| **B** | Future évolution de méthode | Ouvre trajectoire CAPA/EVOL méthode | Promotion prématurée de version |
| **C** | Produit indépendant consommant 2.6 | Séparation nette ; baseline intacte | Moindre ancrage « officiel méthode » |

**Recommandation candidate (non décision) :** Option **C** au démarrage — voir `01-opportunity-and-vision.md` §22.

### 6.2 POC de faisabilité (G5)

| Sous-option | Résumé | Impact |
|-------------|--------|--------|
| **POC de faisabilité borné** (recommandation candidate) | Questions G5 ciblées ; preuve locale possible ; dérivé de l’architecture cible | Lève risques techniques avant MVP |
| **POC élargi trop tôt** | Couvre valeur produit / parcours complets | Confond faisabilité et MVP |
| **Pas de POC** | Passer directement au MVP | Risque technique non levé |

Le détail d’intégration (réel / simulé / partiel) reste à qualifier au **cadrage** puis à l’architecture cible — **pas dans ce pré-cadrage**.

---

## 7. Trajectoire macro (rappel)

```text
Produit cible complet
  → cadrage produit complet
  → architecture fonctionnelle et technique cible
  → POC de faisabilité
  → décision de poursuite ou d’ajustement
  → MVP réellement utilisable
  → construction incrémentale
  → industrialisation
```

---

## 8. Risques résiduels

| ID | Risque | Sévérité hyp. | Reporté à |
|----|--------|---------------|-----------|
| R1 | Seconde source de vérité hors Git | Haute | G3 / cadrage / sécurité |
| R2 | Contournement des gates humains via UI | Haute | Sécurité ; POC doit démontrer contrôles |
| R3 | Confusion architecture plateforme historique = validée | Moyenne | Cadrage (inspiration seulement) |
| R4 | Fuite de données vers fournisseurs IA | Haute | RGPD / sécurité |
| R5 | Coûts API non maîtrisés | Moyenne | FinOps ; mesure possible en POC |
| R6 | Rechute vers un cadrage centré POC | Haute | G3 / G5 / D-VAL-3 |
| R7 | Confusion POC ↔ MVP | Haute | G5 / backlog ultérieur |
| R8 | Travaux Campus360 locaux coexistants | Basse (process) | Discipline Git |

---

## 9. Questions ouvertes

1. G1 — SFIA Studio devient-il un projet officiel engagé ?
2. G3 — La vision produit complète est-elle validée telle que formulée ?
3. G4 — Quelle option A/B/C pour la relation à v2.6 ?
4. G5 — Le principe et quelles questions de faisabilité sont retenus pour le POC ?
5. G6 — Le cadrage détaillé produit est-il autorisé maintenant, plus tard, ou refusé ?
6. G7 — Quand versionner le socle ?
7. Comment traiter Studio / Runtime au cadrage (inspiration vs conception) ?
8. Le POC sera-t-il jetable ou réutilisable (décision post-POC) ?

---

## 10. Critères de clôture du pré-cadrage

Le pré-cadrage pourra être considéré **clôturable** lorsque Morris aura arbitragé :

| Critère | Gate lié |
|---------|----------|
| Statut de projet officiel | G1 |
| Problème / opportunité | G2 |
| **Cible produit complète** (vision) | G3 |
| Relation à v2.6 | G4 |
| **Rôle exact du POC** (principe / périmètre de faisabilité) | G5 |
| Passage au cadrage détaillé | G6 |
| (Optionnel) Stratégie de versionnement | G7 |

---

## 11. Recommandation de prochaine décision

**Prochaine décision recommandée :** arbitrer **G1 → G2 → G3 → G4 → G5**, puis **G6**.

Ordre candidat :

1. **G1** — engagement projet ;
2. **G2 / G3** — problème et **vision produit complète** ;
3. **G4** — relation à la baseline (recommandation candidate : **C**) ;
4. **G5** — principe du POC de **faisabilité** (pas le produit) ;
5. **G6** — ouvrir le cadrage détaillé **produit** si G1–G5 favorables ;
6. **G7** — versionner après revue satisfaisante.

**G6 favorable ≠ cadrage détaillé démarré automatiquement.**

---

## 12. Arbitrages futurs à inscrire (blocs)

| Bloc | Arbitrage futur (non tranché) |
|------|-------------------------------|
| Sécurité | Permissions agents ; secrets ; contrôles à démontrer en POC |
| DevOps | Intégrations Git/GPT/Cursor/Runtime ; faisabilité ≠ industrialisation |
| Observabilité | Logs / audit — architecture & industrialisation ; tests limités en POC |
| FinOps | Mesure coûts API en POC ; modèle économique ultérieur |
| RGPD | Minimisation / traçabilité évaluables en POC ; DPIA ultérieure |
| Accessibilité | Référentiel UI produit |
| Performance | Objectifs de latence |
| Capitalisation | Séparer REX projet et cycle méthode |
| Studio / Runtime | Séparation à cadrer — non validée ici |

---

## 13. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Completeness des 4 documents | Oui |
| Trajectoire produit / POC / MVP / industrialisation | Corrigée (D-VAL-3) |
| Décisions inventées | Non |
| Architecture / stack tranchées | Non |
| Baseline modifiée | Non |
| Ready for Morris review | **Oui** |
| Ready for detailed framing | **Non** — dépend G6 |
| Ready for commit / push / PR | **Non** — dépend G7 |

**Verdict :** `SFIA STUDIO PRE-FRAMING PRODUCT TRAJECTORY CORRECTED — READY FOR MORRIS REVIEW`

---

## 14. Lien avec les documents du socle

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité, produit cible, trajectoire |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Vision produit complète, POC de faisabilité |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles produit complet |

---

*SFIA Studio — decision pack — produit complet / POC faisabilité — baseline SFIA v2.6 — Morris décide.*
```

---

## 7. Validations

| Contrôle | Résultat |
|----------|----------|
| Quatre fichiers Studio modifiés | Oui |
| Nouveau fichier projet | Non |
| Campus360 touché par ce cycle | Non |
| Staged | Aucun |
| `git diff --check` | OK |
| Liens Markdown relatifs | Valides |
| Produit ≠ POC ≠ MVP ≠ industrialisation | Cohérent dans les 4 docs |
| G5 reformulé (faisabilité) | Cohérent |
| D-VAL-3 tracée | Oui |
| Option C | Recommandation candidate uniquement |
| Architecture / stack | Non choisies |
| Studio / Runtime | Sujet de cadrage — non validé |
| Baseline v2.6 | Inchangée |
| Commit / push / PR | Non effectués |

## 8. Contrôle terminologique

| Terme | Usage vérifié |
|-------|---------------|
| Produit cible | Plateforme complète |
| POC | Faisabilité technique uniquement |
| MVP | Première version utilisable — non défini ici |
| Industrialisation | Étape ultérieure distincte |
| Local Mac / macOS | Contrainte de preuve G5, pas périmètre produit |

## 9. Gates

G1–G7 = **PROPOSÉS**. Validés : D-VAL-1, D-VAL-2, D-VAL-3 uniquement.

## 10. Réserves

1. Contenu exact du POC (jetable vs réutilisable) non figé — G5.
2. Séparation Studio / Runtime = sujet de cadrage, pas architecture validée.
3. Working tree Campus360 préexistant coexistant.
4. Handoff distant `77332e8` obsolète jusqu’à éventuel nouveau GO push.
5. Option C non arbitrée (G4).

## 11. Review Handoff Git

**not required** — `HANDOFF NOT REQUIRED — JUSTIFIED`

## 12. Verdict

`SFIA STUDIO PRE-FRAMING PRODUCT TRAJECTORY CORRECTED — READY FOR MORRIS REVIEW`

---

*Fin review pack FULL — ne pas committer `.tmp-sfia-review/`.*

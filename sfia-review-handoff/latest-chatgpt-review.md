# SFIA Studio — Review Pack FULL — Pré-cadrage

| Métadonnée | Valeur |
|------------|--------|
| **Date / heure** | 2026-07-18 14:01:03 CEST |
| **Fuseau** | Europe/Paris (CEST, UTC+2) |
| **Repository** | `sfia-workspace` — `/Users/morris/Projects/sfia-workspace` |
| **Branche** | `project/sfia-studio-pre-framing` |
| **HEAD** | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` |
| **origin/main** | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` |
| **Cycle** | 1 — Cadrage (opportunité et pré-cadrage) |
| **Profil** | Critical |
| **Typologie** | DOC — composante EVOL candidate |
| **Baseline** | SFIA v2.6 |
| **Review pack** | FULL — mono-cycle |
| **Review Handoff Git** | **not required** — exécution volontairement locale ; push interdit |
| **Verdict** | `SFIA STUDIO PRE-FRAMING DOCUMENTED — READY FOR MORRIS REVIEW` |

---

## 1. État Git initial (Local Git Truth Check)

| Contrôle | Résultat |
|----------|----------|
| `git rev-parse --show-toplevel` | `/Users/morris/Projects/sfia-workspace` |
| Branche initiale | `project/campus360-detailed-framing` |
| Branche finale | `project/sfia-studio-pre-framing` (créée localement depuis HEAD = origin/main) |
| HEAD initial / final | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` (inchangé — aucun commit) |
| origin/main | `ec7f397a87381a57b8b0c0efbff8c3e98e9dea03` — accessible, aligné avec main local |
| Fichiers staged initiaux | **Aucun** |
| Fichiers staged finaux | **Aucun** |
| Tracked modifié hors périmètre (préexistant) | `projects/campus360/README.md` — **non touché** par ce cycle |
| Untracked préexistants | `.sfia/`, `.tmp-sfia-review/`, `projects/campus360/04–07-*.md`, `sfia-review-handoff/` — **conservés** |
| `projects/sfia-studio/` avant cycle | **Absent** |
| Branche `project/sfia-studio-pre-framing` avant cycle | **Absente** |
| Template canonique | Présent — `prompts/templates/sfia-cycle-execution-template.md` — `status: baseline`, `version: v2.6` |
| main utilisé directement | **Non** — branche projet dédiée |

**Working tree initial (résumé) :** dirty avec travaux Campus360 hors périmètre ; compatible car aucun stash/reset/rebase requis ; HEAD déjà = origin/main.

---

## 2. Sources consultées

| Chemin | Statut / version | Rôle pré-cadrage | Sections utiles | Réserves |
|--------|------------------|------------------|-----------------|----------|
| `prompts/templates/sfia-cycle-execution-template.md` | v2.6 baseline | Contrat d’exécution ; 15 cycles ; profils ; review pack | Front-matter ; §4.1–4.4 ; garde-fous | — |
| `method/.../2026-07-16-sfia-v2.6-baseline-release-manifest.md` | Baseline officielle post-merge | Confirme v2.6 | §1–§3, trajectoire versions | — |
| `method/.../sfia-chatgpt-cursor-operating-model.md` | Operating model | Rôles Morris/GPT/Cursor/Git ; niveaux auto 0–4 | §3–§5, §14–§15, §18 | Niveaux L3/L4 = trajectoire, non activés |
| `method/.../sfia-cycle-routing-guide.md` | Routing v2.6 | Typologie DOC/EVOL ; profils ; cycles projet vs méthode | §4.3–4.4, §5–§6 | — |
| `method/.../sfia-rules-and-guardrails.md` | Rules v1.1 | Garde-fous repo / automation / handoff | §3, §6–§9, §13.1 | — |
| `method/.../sfia-knowledge-layer.md` | Knowledge Layer v1.1 | Positionnement knowledge vs moteurs futurs | §1, §11 | Spec fondation, pas runtime |
| `method/.../automation/sfia-prompt-generation-engine.md` | Foundation v1.1 | Contexte orchestration future | §1–§2 | Spec, pas moteur autonome |
| `method/.../automation/sfia-repository-execution-engine.md` | Foundation v1.1 | Exécution repo contrôlée | §1–§2 | Spec, pas moteur autonome |
| `method/.../automation/sfia-validation-engine.md` | Foundation v1.1 | Validation / verdicts | §1–§2 | Spec, pas moteur autonome |
| `docs/architecture/sfia-platform-architecture.md` | Doc architecture historique | Occurrences « SFIA Studio » | Modules Studio/Runtime/Core | **Non retenu** comme archi validée |
| `projects/campus360/README.md` + `01`/`02`/`03` | Structure pré-cadrage | Modèle de séparation phases / gates | Structure uniquement | Ne pas recopier décisions métier |

**Hiérarchie respectée :** Git main / canonique > décisions Morris du prompt > sources projet > hypothèses.

---

## 3. Décisions Morris déjà validées

1. Initier le pré-cadrage du projet SFIA Studio.
2. Autoriser la création locale du socle documentaire de pré-cadrage dans le périmètre défini.

---

## 4. Hypothèses documentées

- H1 : friction principale = orchestration multi-outils (pas insuffisance v2.6).
- H2 : POC local Mac mono-opérateur suffit à valider l’intérêt.
- H3 : GPT et Cursor restent les moteurs d’analyse / exécution à moyen terme.
- H4 : Morris reste décideur unique du POC.
- H5 : l’UI peut renforcer les gates sans les contourner.
- H6 : Option C (produit consommant v2.6) est la relation la plus sûre au démarrage.

---

## 5. Options proposées

### Relation SFIA v2.6 (G4)
- **A** — Extension candidate compatible 2.6
- **B** — Future évolution de méthode
- **C** — Produit indépendant consommant la 2.6

### POC (G5)
- POC borné local Mac
- POC élargi (intégrations réelles d’emblée)
- Pas de POC

---

## 6. Recommandations proposées (non décisions)

- Relation v2.6 : **Option C** au démarrage.
- Ordre d’arbitrage : G1 → G2 → G3 → G4 → G5 → G6 ; G7 après revue.
- Ne pas démarrer cadrage détaillé, architecture, stack, POC technique dans ce cycle.
- Traiter l’architecture plateforme historique comme non retenue.

---

## 7. Décisions non validées

G1–G7 ; stack ; architecture ; L3/L4 ; modification v2.6 ; v2.7 ; commit/push/PR/merge ; multi-user/cloud/auth.

---

## 8. Fichiers créés

| Fichier | Lignes (approx.) | Nature |
|---------|------------------|--------|
| `projects/sfia-studio/README.md` | 158 | Identité / gouvernance |
| `projects/sfia-studio/01-opportunity-and-vision.md` | 335 | Opportunité / vision |
| `projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md` | 155 | Couverture cycles |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 213 | Decision pack |
| `.tmp-sfia-review/chatgpt-review.md` | (ce fichier) | Review pack temporaire — **non versionné** |

**Fichiers modifiés (périmètre) :** aucun fichier existant.
**Fichiers hors périmètre touchés par ce cycle :** aucun.
**Tracked préexistant non touché :** `projects/campus360/README.md` (M préexistant).

---

## 9. Contenu complet des fichiers créés


### 9.1 — `projects/sfia-studio/README.md`

```markdown
# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — interface métier candidate pour piloter les cycles SFIA et orchestrer Git, GPT et Cursor |
| **Nom** | **SFIA Studio** — nom candidat (non validé comme projet officiel) |
| **Statut** | `pre-framing-ready-for-morris-review` |
| **Baseline méthode** | **SFIA v2.6** (baseline opérationnelle officielle, active sur `main`) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — Cycle 1 pré-cadrage (DOC, Critical) |
| **Typologie cycle** | DOC — composante EVOL **candidate** (aucune évolution de baseline dans ce cycle) |
| **Cycle projet** | 1 — Cadrage (sous-phase : **opportunité et pré-cadrage uniquement**) |
| **Profil SFIA** | Critical |
| **Branche** | `project/sfia-studio-pre-framing` |
| **Chemin** | `projects/sfia-studio/` |

---

## 1. Finalité du projet (candidate)

SFIA Studio est un **projet produit candidat** visant à proposer une **interface métier unique** pour :

- piloter les cycles SFIA ;
- orchestrer la boucle Git ↔ GPT ↔ Cursor ;
- conserver Git comme source de vérité ;
- conserver Morris comme autorité de décision ;
- conserver GPT comme moteur de qualification, analyse et revue ;
- conserver Cursor comme exécuteur repository contrôlé ;
- maintenir des gates humains explicites ;
- progresser vers une automatisation **bornée** (L3 puis éventuellement L4), **sans** l’activer dans ce cycle.

Ce socle de pré-cadrage permet à Morris de statuer sur la confirmation du projet, le problème / opportunité, la vision candidate, la relation à SFIA v2.6, le périmètre candidat du POC local Mac, et l’autorisation éventuelle d’un cadrage détaillé ultérieur.

**SFIA Studio n’est pas validé comme projet officiel tant que G1 n’est pas arbitragé.**

**SFIA Studio n’est pas une promotion de SFIA v2.7, ni une relance de SFIA v3.0.**

---

## 2. Navigation documentaire

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, statut, gouvernance, navigation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Problème, opportunité, vision candidate, POC candidat |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Hypothèse de couverture des 15 cycles |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack — gates G1–G7 proposés |

> **Pré-cadrage ≠ cadrage détaillé / architecture / UX / backlog / POC technique / code.**

---

## 3. Justification du profil Critical

Critical est **explicite** et **limité à la profondeur documentaire du pré-cadrage** :

- création d’un nouveau produit SFIA ;
- intégration future potentielle de plusieurs services IA ;
- accès futur potentiel à des repositories et à une exécution locale ;
- impacts potentiels sur doctrine, templates et cycles ;
- cible d’automatisation potentielle L3 puis L4 ;
- enjeux de permissions, sécurité, traçabilité et gouvernance ;
- nécessité de maintenir Morris comme autorité de décision ;
- risque de créer une seconde source de vérité hors Git.

Critical **n’autorise pas** dans cette exécution : architecture, développement, modification de doctrine, automatisation L3/L4, commit, push ou PR.

---

## 4. Principes de gouvernance (candidats)

| Principe | Portée |
|----------|--------|
| **Git = source de vérité** | Aucune vérité produit durable hors repository versionné |
| **Morris décide** | Gates structurants, promotion projet, passage de phase, commit / push / PR / merge |
| **GPT qualifie / analyse / revoit** | Pas d’autorité de décision |
| **Cursor exécute borné** | Dans le contrat de prompt uniquement |
| **Gates humains explicites** | Aucune automatisation de décision |
| **Automatisation progressive et bornée** | L3/L4 = cibles futures éventuelles, non activées ici |
| **Baseline v2.6 inchangée** | Ce cycle ne modifie aucun document canonique SFIA |
| **Observation ≠ règle** | Aucune observation projet ne devient règle méthode sans cycle CAPA + GO Morris |

---

## 5. Séparation projet / méthode / produit / capitalisation

| Couche | Règle pour ce cycle |
|--------|---------------------|
| **Projet** | Socle documentaire sous `projects/sfia-studio/` uniquement |
| **Méthode** | SFIA v2.6 reste la baseline ; **aucune** modification |
| **Produit** | Vision et POC **candidats** — non validés |
| **Capitalisation** | Observations éventuelles à isoler ; **aucune** promotion doctrine |

---

## 6. Gates Morris proposés (pré-cadrage)

| Gate | Objet | Statut |
|------|-------|--------|
| **G1** | Confirmer SFIA Studio comme projet officiel | **PROPOSÉ** |
| **G2** | Valider problème et opportunité | **PROPOSÉ** |
| **G3** | Valider la vision produit candidate | **PROPOSÉ** |
| **G4** | Statuer sur la relation avec SFIA v2.6 | **PROPOSÉ** |
| **G5** | Valider le périmètre candidat du POC local Mac | **PROPOSÉ** |
| **G6** | Autoriser ou refuser le passage au cadrage détaillé | **PROPOSÉ** |
| **G7** | Autoriser ultérieurement commit, push et PR du socle | **PROPOSÉ** |

Aucun gate G1–G7 n’est validé par la seule création de ces documents.

---

## 7. Décisions validées et non validées

### Validées (seule décision de ce stade)

| Décision | Statut |
|----------|--------|
| Initier le pré-cadrage de SFIA Studio | **VALIDÉE** — Morris |
| Création locale du socle documentaire de pré-cadrage dans le périmètre de ce cycle | **VALIDÉE** — Morris |

### Non validées

| Décision | Statut |
|----------|--------|
| Promotion de SFIA Studio comme projet définitivement engagé (G1) | **NON VALIDÉE** |
| Périmètre final du POC (G5) | **NON VALIDÉE** |
| Choix de stack | **NON VALIDÉE** |
| Architecture cible | **NON VALIDÉE** |
| Modification de SFIA v2.6 | **NON VALIDÉE** / **interdite dans ce cycle** |
| Création d’une SFIA v2.7 | **NON VALIDÉE** / **interdite dans ce cycle** |
| Automatisation L3 ou L4 | **NON VALIDÉE** |
| Commit, push, PR ou merge | **NON VALIDÉE** |
| Passage au cadrage détaillé (G6) | **NON VALIDÉE** |

---

## 8. Prochaine décision attendue

Morris revue le socle (`01`, `02`, `03` + review pack) puis statue sur **G1 à G6** (et éventuellement la stratégie G7).

**Prochaine activité autorisée sans nouveau GO :** aucune au-delà de la revue humaine / ChatGPT.

**Verdict documentaire de ce cycle :** `SFIA STUDIO PRE-FRAMING DOCUMENTED — READY FOR MORRIS REVIEW`.

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode opérationnelle | SFIA v2.6 sur Git `main` |
| Template d’exécution | `prompts/templates/sfia-cycle-execution-template.md` (v2.6, `status: baseline`) |
| Documents projet | `projects/sfia-studio/` (cette branche, non mergés) |
| Review pack temporaire | `.tmp-sfia-review/chatgpt-review.md` — **non versionné** |

---

*SFIA Studio — pré-cadrage documentaire — baseline SFIA v2.6 — Morris décide.*
```


### 9.2 — `projects/sfia-studio/01-opportunity-and-vision.md`

```markdown
# SFIA Studio — Opportunité et vision

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio (candidat) |
| **Document** | `01-opportunity-and-vision.md` |
| **Cycle** | 1 — Cadrage (opportunité et pré-cadrage) |
| **Profil** | Critical |
| **Typologie** | DOC — composante EVOL candidate |
| **Baseline** | SFIA v2.6 |
| **Statut** | `pre-framing-ready-for-morris-review` |
| **Autorité** | Morris |

> Socle d’opportunité et de vision **candidats**. Ce document **n’est pas** un cadrage détaillé. Aucune architecture, stack, backlog ni POC technique n’est validé ici.

---

## 1. Résumé exécutif

Le fonctionnement actuel de SFIA repose sur une boucle manuelle assistée :

**Morris → ChatGPT → template canonique Git → prompt Cursor → exécution locale → review pack / rapport → analyse ChatGPT → décision Morris.**

Cette boucle est **opérationnelle** sous SFIA v2.6. Elle reste toutefois **fragmentée** (outils séparés, copier/coller, charge cognitive, risque de dérive hors Git).

**SFIA Studio** est proposé comme **interface métier unique** pour piloter les cycles et orchestrer Git, GPT et Cursor, sans remplacer l’autorité de Morris ni la source de vérité Git.

| Élément | Nature |
|---------|--------|
| Initiation du pré-cadrage | **Décision validée** Morris |
| Projet officiel | **Décision proposée** (G1) — non validée |
| Vision / POC | **Candidats** — non validés |
| Relation à v2.6 | **Options A/B/C** — arbitrage G4 |
| Cadrage détaillé | **Non démarré** — dépend de G6 |

---

## 2. Contexte et fonctionnement actuel

### 2.1 Baseline

| Élément | Observation |
|---------|-------------|
| Baseline opérationnelle | **SFIA v2.6** — officialisée (manifest `2026-07-16`, template `status: baseline`) |
| Boucle opératoire | Operating model ChatGPT ↔ Cursor (niveaux 0→4 décrits ; niveau courant = manuelle assistée) |
| Source de vérité | Repository Git |
| Autorité | Morris (L0) |

### 2.2 Boucle actuelle (observation)

1. Morris exprime une intention.
2. ChatGPT qualifie, cadre et produit un prompt Cursor conforme au template.
3. Cursor exécute localement dans un périmètre borné.
4. Un review pack / rapport est produit.
5. ChatGPT analyse le retour.
6. Morris décide (GO / NO-GO / gates).

### 2.3 Précédents documentaires (observation, non décision)

| Source | Rôle pour ce pré-cadrage |
|--------|--------------------------|
| `projects/campus360/` | **Référence de structure** de pré-cadrage uniquement — pas de reprise métier |
| `docs/architecture/sfia-platform-architecture.md` | Mention historique de « SFIA Studio » dans une architecture plateforme **non validée** pour ce projet |
| Specs moteurs v1.1 (Prompt / Repository / Validation) | **Fondations** — specs, pas moteurs autonomes exécutables |

> **Réserve :** toute architecture plateforme mentionnant Studio/Runtime/Core/Knowledge est traitée comme **contexte historique / candidat**, pas comme architecture retenue pour SFIA Studio.

---

## 3. Problème adressé

La méthode SFIA v2.6 fonctionne, mais l’expérience opérateur reste **dispersée** entre plusieurs surfaces (chat, IDE, terminal, fichiers temporaires, PR).

**Problème candidat :** absence d’une interface métier unique permettant de piloter un cycle SFIA de bout en bout (qualification → exécution contrôlée → revue → décision) tout en préservant Git, Morris, GPT et Cursor dans leurs rôles respectifs.

---

## 4. Irritants et limites actuelles

| Irritant | Impact (hypothèse) |
|----------|-------------------|
| Copier/coller manuel entre ChatGPT et Cursor | Friction, erreurs de contrat, perte de contexte |
| Multiplicité des artefacts (prompt, rapport, review pack, handoff) | Charge cognitive, risque d’obsolescence |
| Dépendance à la discipline opérateur | Qualité variable si le template / les gates ne sont pas suivis |
| Visibilité partielle de l’état Git / cycle | Risque de travailler hors branche, hors périmètre |
| Absence d’UI métier | La méthode reste « outil-first », pas « métier-first » |
| Tentation d’automatiser trop tôt | Risque de contourner les gates humains |

Ces irritants sont des **observations / hypothèses** de pré-cadrage, pas un diagnostic validé.

---

## 5. Opportunité produit

| Dimension | Opportunité candidate |
|-----------|----------------------|
| **Produit** | Interface unique de pilotage des cycles SFIA |
| **Orchestration** | Coordination bornée Git + GPT + Cursor sous gates Morris |
| **Traçabilité** | Historique de cycles, décisions et preuves ancré dans Git |
| **Différenciation** | Produit métier sur méthode existante — sans remplacer la baseline |
| **Progressivité** | POC local Mac → maturations ultérieures éventuelles |

---

## 6. Opportunité méthode

| Dimension | Opportunité candidate |
|-----------|----------------------|
| **Épreuve terrain** | Tester si une UI métier améliore la conformité aux garde-fous v2.6 |
| **Feedback** | Remonter des irritants réels vers d’éventuels cycles CAPA futurs |
| **Non-objectif** | Ne pas créer SFIA v2.7 ni relancer v3.0 via ce projet |

Toute évolution de méthode reste **hors périmètre** de ce pré-cadrage et exigerait un cycle dédié + GO Morris.

---

## 7. Vision produit candidate

> **Vision candidate (non validée) :** SFIA Studio est l’interface métier qui permet à Morris (et, plus tard éventuellement, à d’autres opérateurs autorisés) de **qualifier, lancer, suivre et clôturer** un cycle SFIA, en orchestrant GPT et Cursor autour de Git comme source de vérité, avec des gates humains explicites et une automatisation progressive strictement bornée.

### Orientations candidates

| Aspect | Orientation candidate |
|--------|----------------------|
| **Rôle** | Cockpit de cycle — pas une seconde source de vérité |
| **Entrée** | Intention / demande → qualification structurée |
| **Sortie** | Prompt / exécution / preuves / décision — ancrés Git |
| **Décision** | Toujours Morris (ou délégué explicite futur — non décidé) |
| **Automatisation** | Progressive ; L3/L4 hors POC initial |
| **Cible POC** | Local Mac, mono-opérateur (hypothèse) |

### Explicitement non décidé

| Élément | Statut |
|---------|--------|
| Stack | **Non choisi** |
| Architecture technique | **Non décidé** |
| Modèle GPT / fournisseur | **Non décidé** |
| Intégration Cursor définitive | **Non décidé** |
| Multi-utilisateur / cloud / auth | **Hors pré-cadrage / hors POC candidat** |
| Modification méthode v2.6 | **Interdite dans ce cycle** |

---

## 8. Utilisateurs et parties prenantes

| Acteur | Rôle candidat |
|--------|---------------|
| **Morris** | Autorité de décision (L0) — utilisateur primaire du POC |
| **ChatGPT / GPT** | Qualification, analyse, revue — non décideur |
| **Cursor** | Exécuteur repository contrôlé |
| **Git / GitHub** | Source de vérité et espace de revue (PR) |
| **Futurs opérateurs** | Hypothèse ultérieure — hors POC candidat |

---

## 9. Proposition de valeur

| Pour | Valeur candidate |
|------|------------------|
| **Morris** | Moins de friction, meilleure visibilité des gates et de l’état de cycle |
| **Conformité méthode** | Meilleure application des contrats de prompt et des stop conditions |
| **Traçabilité** | Journalisation et preuves rattachées aux artefacts Git |
| **Évolution future** | Base pour automatisation bornée sans abandonner le contrôle humain |

---

## 10. Principes fondateurs candidats

1. Git reste la seule source de vérité opérationnelle.
2. Morris conserve l’autorité sur les gates structurants.
3. GPT prépare ; Cursor exécute ; aucun des deux ne décide.
4. Toute automatisation est désactivable et journalisée.
5. Le produit consomme la méthode ; il ne la remplace pas silencieusement.
6. Observation projet ≠ règle méthode.
7. Pas de seconde vérité dans une base locale opaque hors Git.
8. Sécurité et permissions avant commodité d’automatisation.
9. Périmètre POC minimal utile — pas de plateforme complète d’emblée.
10. Vocabulaire de statut explicite : observation / hypothèse / option / recommandation / décision proposée / décision validée.

---

## 11. Périmètre produit global candidat

| Domaine | Inclusion candidate (produit global, hors POC) |
|---------|-----------------------------------------------|
| Pilotage des 15 cycles projet | Vue, qualification, déclenchement contrôlé |
| Orchestration GPT / Cursor | Sous contrat et gates |
| Visibilité Git | Branche, statut, diff, review pack |
| Historique de décisions | Ancré ou exportable vers Git |
| Garde-fous | Chemins interdits, stop conditions, profils |
| Automatisation progressive | Cible future L3/L4 — non activée au démarrage |

---

## 12. Périmètre POC candidat (local Mac)

| Élément | Proposition candidate (G5) |
|---------|----------------------------|
| **Plateforme** | Application locale macOS |
| **Opérateur** | Mono-utilisateur (Morris) — hypothèse |
| **Fonctions** | Créer / suivre un cycle documentaire borné ; préparer un prompt ; lancer une exécution Cursor contrôlée ; visualiser statut Git et review pack |
| **Intégrations** | Git local obligatoire ; GPT et Cursor en mode **borné / simulable ou partiel** selon faisabilité — **à qualifier au cadrage**, non tranché ici |
| **Hors POC** | Cloud, multi-user, auth entreprise, L3/L4, packaging distribution large, modification méthode |

> **Hypothèse :** le POC vise à prouver la **valeur d’orchestration métier**, pas à livrer la plateforme complète décrite dans des docs d’architecture historiques.

---

## 13. Hors périmètre (ce pré-cadrage et au-delà immédiat)

- Cadrage détaillé, architecture, stack, API, modèle de données
- UX/UI / Figma / maquettes
- Backlog / user stories / code / tests applicatifs
- POC technique d’implémentation dans ce cycle
- CI/CD, packaging Mac, intégrations OpenAI/Cursor réelles
- Automatisation L3/L4, multi-utilisateur, cloud, authentification
- Modification SFIA v2.6, création v2.7, relance v3.0
- Commit / push / PR / merge sans GO Morris (G7)

---

## 14. Hypothèses

| ID | Hypothèse | Risque si fausse |
|----|-----------|------------------|
| H1 | La friction principale est l’orchestration multi-outils, pas l’insuffisance de la méthode v2.6 | Mauvais produit / mauvais POC |
| H2 | Un POC local Mac mono-opérateur suffit à valider l’intérêt | Sous-évaluation des besoins multi-poste |
| H3 | GPT et Cursor resteront les moteurs d’analyse et d’exécution à moyen terme | Reconception d’intégration |
| H4 | Morris restera le décideur unique du POC | Gouvernance à revoir |
| H5 | L’UI peut renforcer les gates sans les contourner | Risque sécurité / gouvernance |
| H6 | Option C (produit consommant v2.6) est la relation la plus sûre au démarrage | Repositionnement G4 nécessaire |

---

## 15. Contraintes

| Contrainte | Origine |
|------------|---------|
| Baseline v2.6 non modifiable dans ce cycle | Décision / garde-fou Morris |
| Pas de seconde source de vérité | Rules & guardrails / operating model |
| Pas d’automatisation de décision | Operating model |
| Critical documentaire seulement | Profil de ce cycle |
| Working tree partagé avec travaux Campus360 non liés | Observation Git locale — ne pas toucher |

---

## 16. Risques majeurs

| Risque | Domaine | Mitigation candidate (non implémentée) |
|--------|---------|----------------------------------------|
| Seconde vérité hors Git | Gouvernance | Ancrage Git obligatoire ; pas de store opaque |
| Contournement des gates | Sécurité / RSSI | Gates explicites ; journalisation ; pas d’auto-approve |
| Exécution locale dangereuse | Sécurité | Périmètre borné ; permissions ; secrets hors UI |
| Fuite de contexte vers fournisseurs IA | RGPD | Minimisation ; inventaire catégories ; DPIA future |
| Coûts API non maîtrisés | FinOps | Mesure au cadrage ; pas d’estimation inventée ici |
| Confusion produit / méthode | Doctrine | Séparation stricte ; cycles CAPA dédiés |
| Sur-cadrage prématuré | Delivery | POC minimal ; pas d’archi/stack maintenant |
| Reprise d’architecture historique comme validée | Trajectoire | Marquer docs plateforme comme non retenus |

### Blocs pré-cadrage (identification seule)

| Bloc | Identification | Non produit ici |
|------|----------------|-----------------|
| **Sécurité / RSSI** | Accès repo, permissions agents, secrets, commandes, contournement gates, logs | Threat model, sandbox |
| **DevOps** | Dépendances Git, OpenAI, Cursor, runtime local, distribution Mac | Pipelines, CI/CD |
| **Observabilité / RUN** | Logs, audit, reprise, diagnostic, suivi d’exécutions | Runbook, SLO |
| **FinOps** | Coûts modèles, stockage, exécution, hébergement éventuel | Estimation financière |
| **RGPD** | Demandes, historique cycles, décisions, fichiers repo, logs, contexte IA | DPIA |
| **Accessibilité** | Future UI métier — exigence à qualifier | Référentiel, UI |
| **Performance** | Latence IA, contexte, durée d’exécution, concurrence | SLA |
| **UX/UI + Figma** | Cycle futur probable | Maquettes (bloc désactivé) |
| **Capitalisation** | Observations ≠ règles | Promotion méthode |

---

## 17. Critères de crédibilité

Le pré-cadrage est crédible si :

1. le problème et l’opportunité sont compréhensibles sans jargon d’architecture ;
2. la vision préserve Git / Morris / GPT / Cursor ;
3. la relation à v2.6 est formulée en options explicites ;
4. le POC candidat est borné (local Mac) ;
5. aucune stack / architecture n’est présentée comme retenue ;
6. les gates G1–G7 sont proposés sans statut inventé.

---

## 18. Critères de succès du pré-cadrage

| Critère | Cible |
|---------|-------|
| Socle à 4 documents | Complet et cohérent |
| Décisions inventées | Aucune |
| Baseline | v2.6 affirmée, non modifiée |
| Revue Morris | Possible sur G1–G6 |
| Handoff Git | Non requis (justifié) |

---

## 19. Options de relation avec SFIA v2.6

| Option | Description | Impact | Risque |
|--------|-------------|--------|--------|
| **A** | Extension candidate **compatible** v2.6 (produit + éventuels ajouts méthode non baseline) | Couplage plus fort produit/méthode | Confusion « extension = baseline » |
| **B** | Future **évolution de méthode** (ex. contributions vers une version ultérieure) | Peut justifier des cycles CAPA/EVOL méthode | Promotion prématurée v2.7 / dérive doctrine |
| **C** | **Produit indépendant** consommant SFIA v2.6 | Séparation nette ; baseline intacte | Moins d’ancrage « officiel méthode » |

### Recommandation candidate (non décision)

**Recommandation proposée : Option C** comme position de démarrage.

Justification candidate :

- préserve SFIA v2.6 comme baseline opérationnelle ;
- évite toute implication de SFIA v2.7 ;
- permet d’éprouver le produit avant tout couplage doctrine ;
- laisse ouvertes A ou B **après** preuves terrain + cycles CAPA + GO Morris.

**G4 reste l’arbitrage Morris.** Cette recommandation n’est pas une décision validée.

---

## 20. Lien avec les documents du socle

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité et gouvernance |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Gates et arbitrages |

---

*SFIA Studio — opportunité et vision candidates — baseline SFIA v2.6 — Morris décide.*
```


### 9.3 — `projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md`

```markdown
# SFIA Studio — Hypothèse de couverture des cycles SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio (candidat) |
| **Document** | `02-sfia-cycle-coverage-hypothesis.md` |
| **Cycle** | 1 — Cadrage (opportunité et pré-cadrage) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | `pre-framing-ready-for-morris-review` |
| **Référence méthode** | Template v2.6 §4.1 (15 cycles) ; routing guide §4–§6 |

> **Règle :** les 15 cycles restent un **référentiel de couverture potentielle**. Aucun cycle n’est automatiquement lancé par ce pré-cadrage. Activation **uniquement** par déclencheur réel + qualification + GO Morris si requis. Profil **requalifié à chaque cycle**. Pas d’ordre séquentiel rigide. Pas de forçage pour atteindre quinze.

---

## 1. Légende

| Caractère | Signification |
|-----------|---------------|
| **Quasi systématique** | Attendue sur une trajectoire produit sérieuse |
| **Activable** | Fortement probable si le projet est engagé |
| **Conditionnel** | Dépend d’un événement ou d’un arbitrage |
| **Événementiel** | INC / RUN / EVOL — incident ou décision |

---

## 2. Synthèse de couverture (hypothèse)

| # | Cycle | Caractère | Probabilité (hyp.) | Justification SFIA Studio |
|---|-------|-----------|--------------------|---------------------------|
| 1 | Cadrage | Quasi systématique | Certaine (en cours) | Pré-cadrage documentaire ; cadrage détaillé si G6 |
| 2 | Conception fonctionnelle | Quasi systématique | Très élevée | Produit métier d’orchestration — après cadrage détaillé |
| 3 | Architecture fonctionnelle | Activable | Très élevée | Modules métier (intake, pilotage cycle, gates) — **non démarrée** |
| 4 | UX/UI | Activable | Très élevée | Interface métier — **bloc Figma désactivé dans ce cycle** |
| 5 | Backlog / user stories | Quasi systématique | Très élevée | Après conception — **non démarré** |
| 6 | Architecture technique | Activable | Très élevée | Runtime local Mac, intégrations — **stack non choisie** |
| 7 | Intégration / DevOps | Activable | Très élevée | Git, GPT, Cursor, packaging Mac futur |
| 8 | Delivery / implémentation | Quasi systématique | Certaine si POC GO | POC puis incréments — **pas dans ce cycle** |
| 9 | QA / validation | Quasi systématique | Certaine si delivery | Conformité gates, sécurité, accessibilité |
| 10 | Sécurité / RSSI | Activable | Très élevée | Repo access, agents, secrets, exécution locale |
| 11 | Déploiement / release | Activable | Élevée | Distribution Mac — post-POC |
| 12 | Observabilité / RUN readiness | Activable | Élevée | Logs d’exécution, audit, reprise |
| 13 | PR readiness | Quasi systématique | Certaine si versionnement | Pour tout lot documentaire / code versionné |
| 14 | Post-merge | Quasi systématique | Certaine si merge | Cleanup et clôture |
| 15 | Capitalisation / REX | Quasi systématique | Élevée | Observations produit ≠ promotion méthode |

---

## 3. Profils probables (non figés)

| Situation | Profil probable | Note |
|-----------|-----------------|------|
| Pré-cadrage / docs structurants | **Critical** | Ce cycle |
| Cadrage détaillé (si G6) | Critical ou Standard | À requalifier |
| Conception / archi fonctionnelle | Critical probable | Intégrations IA + gouvernance |
| UX/UI | Standard ou Critical | Selon accessibilité / surface |
| Delivery POC borné | Standard ou Critical | Selon accès repo / secrets |
| PR readiness doc-only | Standard (Light si ≤3 fichiers) | Selon template |
| Capitalisation méthode | Capitalization + profondeur | **Cycle séparé** projet méthode |

Aucun profil n’est figé hors du cycle courant.

---

## 4. Déclencheurs d’activation (hypothèses)

| Cycle | Déclencheur candidat |
|-------|----------------------|
| 1 (suite) | GO G6 — autorisation cadrage détaillé |
| 2–3 | Clôture cadrage détaillé + besoin de spécifier le produit |
| 4 | Besoin d’interface visuelle / parcours opérateur |
| 5 | Besoin de découper le POC / MVP |
| 6–7 | Besoin d’intégrer Git/GPT/Cursor réellement |
| 8 | GO explicite POC / incrément |
| 9–12 | Approche release / risques |
| 13–14 | Intention de versionner / merger |
| 15 | Leçon durable à capitaliser — **sans** auto-promotion doctrine |

---

## 5. Blocs transverses probables

| Bloc | Pertinence SFIA Studio | Statut dans ce pré-cadrage |
|------|------------------------|----------------------------|
| **FinOps** | Coûts API / modèles / exécution | Identifié — pas d’estimation |
| **GreenOps** | Faible à ce stade (local Mac) | Conditionnel ultérieur |
| **RGPD** | Demandes, logs, contexte envoyé aux IA | Identifié — pas de DPIA |
| **Accessibilité** | UI métier future | Identifié — pas de référentiel fixé |
| **Performance** | Latence IA, contexte, concurrence | Identifié — pas de SLA |
| **UX/UI + Figma** | Fortement probable plus tard | **Désactivé** ici |
| **Sécurité** | Critique (repo, agents, secrets) | Identifié — pas de threat model |
| **DevOps / release** | Git, runtime, distribution Mac | Identifié — pas de pipeline |
| **Observabilité / RUN** | Audit des exécutions | Identifié — pas de runbook |
| **Capitalisation** | Séparer projet et méthode | Identifié — aucune règle promue |

---

## 6. Distinction cycles projet SFIA Studio vs cycles d’évolution de la méthode

| Famille | Exemples | Règle |
|---------|----------|-------|
| **Cycles projet SFIA Studio** | Cadrage produit, conception UI Studio, POC Mac, QA Studio | Livrables sous `projects/sfia-studio/` (et code futur projet) |
| **Cycles évolution méthode** | Modification template, operating model, routing, baseline | Livrables sous `method/`, `prompts/` — **GO Morris + cycle dédié** |

**Interdiction dans ce cycle :** toute modification méthode, toute création implicite de SFIA v2.7, toute relance v3.0.

Si le produit révèle un besoin d’évolution méthode, la trajectoire candidate est :

1. documenter l’observation dans le projet ;
2. ouvrir un cycle CAPA / EVOL **méthode** distinct ;
3. obtenir GO Morris ;
4. ne promouvoir qu’après merge sur `main`.

---

## 7. Trajectoire macro hypothétique

```text
Pré-cadrage (ce cycle)
    → Revue Morris G1–G6
        → [si G1–G5 favorables] éventuel G7 (commit/push/PR du socle)
        → [si G6] cadrage détaillé
            → conception / architecture (plus tard)
            → POC local Mac (plus tard, si GO)
            → capitalisation observations (plus tard)
            → [éventuel] cycle méthode séparé (plus tard, si GO)
```

Cette trajectoire est une **hypothèse de séquence**, pas un plan d’engagement ni un backlog.

---

## 8. Ce que ce document n’est pas

- Pas une activation automatique de cycles
- Pas une architecture déguisée
- Pas un backlog
- Pas une promotion d’évolution méthode
- Pas une validation de POC
- Pas une validation de stack

---

## 9. Lien avec les documents du socle

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité et gates |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Vision et POC candidats |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Arbitrages G1–G7 |

---

*SFIA Studio — hypothèse de couverture des cycles — baseline SFIA v2.6 — Morris décide.*
```


### 9.4 — `projects/sfia-studio/03-pre-framing-decision-pack.md`

```markdown
# SFIA Studio — Decision pack de pré-cadrage

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio (candidat) |
| **Document** | `03-pre-framing-decision-pack.md` |
| **Destinataire** | Morris (L0) |
| **Cycle** | 1 — Cadrage (opportunité et pré-cadrage) |
| **Profil** | Critical |
| **Typologie** | DOC — composante EVOL candidate |
| **Baseline** | SFIA v2.6 |
| **Statut pré-cadrage** | `pre-framing-ready-for-morris-review` |
| **Verdict documentaire** | `SFIA STUDIO PRE-FRAMING DOCUMENTED — READY FOR MORRIS REVIEW` |

---

## 1. Objet du decision pack

Fournir à Morris un pack d’arbitrage pour :

1. confirmer ou non SFIA Studio comme projet officiel ;
2. valider problème, opportunité et vision candidates ;
3. statuer sur la relation à SFIA v2.6 ;
4. valider ou non le périmètre candidat du POC local Mac ;
5. autoriser ou refuser le passage ultérieur au cadrage détaillé ;
6. décider ultérieurement du versionnement Git (commit / push / PR).

Ce pack **ne décide pas** à la place de Morris. La création des documents n’accorde aucun gate.

---

## 2. Décisions déjà validées

| # | Décision | Autorité | Portée |
|---|----------|----------|--------|
| D-VAL-1 | **Initier le pré-cadrage de SFIA Studio** | Morris | Ce cycle |
| D-VAL-2 | **Autoriser la création locale** du socle documentaire de pré-cadrage dans le périmètre défini | Morris | `projects/sfia-studio/` + review pack temporaire |

Aucune autre décision n’est validée à ce stade.

---

## 3. Décisions proposées (gates G1–G7)

| Gate | Décision proposée | Statut |
|------|-------------------|--------|
| **G1** | Confirmer SFIA Studio comme **projet officiel** engagé sous SFIA v2.6 | **PROPOSÉ** |
| **G2** | Valider le **problème et l’opportunité** décrits dans `01-…` | **PROPOSÉ** |
| **G3** | Valider la **vision produit candidate** (cockpit de cycles, Git/Morris/GPT/Cursor) | **PROPOSÉ** |
| **G4** | Statuer sur la **relation avec SFIA v2.6** (options A / B / C) | **PROPOSÉ** |
| **G5** | Valider le **périmètre candidat du POC local Mac** (borné, mono-opérateur hypothétique) | **PROPOSÉ** |
| **G6** | Autoriser ou refuser le **passage au cadrage détaillé** | **PROPOSÉ** |
| **G7** | Autoriser ultérieurement **commit, push et PR** du socle documentaire | **PROPOSÉ** |

### Précisions de statut

| Formulation | Signification |
|-------------|---------------|
| **PROPOSÉ** | Soumis à arbitrage Morris — **non validé** |
| **VALIDÉ** | Uniquement si Morris statue explicitement |
| **REFUSÉ** | Uniquement si Morris refuse explicitement |

**Seul statut validé aujourd’hui :** D-VAL-1 / D-VAL-2 (initiation du pré-cadrage).

---

## 4. Décisions non prises

| Sujet | Statut |
|-------|--------|
| Stack technique | Non pris |
| Architecture fonctionnelle / technique détaillée | Non pris |
| Modèle / fournisseur GPT | Non pris |
| Modalités d’intégration Cursor | Non pris |
| API / modèle de données / UX / Figma | Non pris |
| Backlog / user stories | Non pris |
| Automatisation L3 / L4 | Non pris — **hors ce cycle** |
| Modification SFIA v2.6 | Non pris — **interdite ici** |
| Création SFIA v2.7 | Non pris — **interdite ici** |
| Multi-utilisateur / cloud / authentification | Non pris |
| Commit / push / PR / merge | Non pris (G7) |
| Cadrage détaillé démarré | Non — dépend de G6 + exécution ultérieure |

---

## 5. Options et impacts (focus G4 et G5)

### 5.1 Relation à SFIA v2.6 (G4)

| Option | Résumé | Impact si retenue | Risque |
|--------|--------|-------------------|--------|
| **A** | Extension candidate compatible 2.6 | Couplage produit/méthode plus fort | Confusion extension ↔ baseline |
| **B** | Future évolution de méthode | Ouvre trajectoire CAPA/EVOL méthode | Promotion prématurée de version |
| **C** | Produit indépendant consommant 2.6 | Séparation nette ; baseline intacte | Moindre ancrage « officiel méthode » |

**Recommandation candidate (non décision) :** Option **C** au démarrage — voir `01-opportunity-and-vision.md` §19.

### 5.2 POC local Mac (G5)

| Sous-option | Résumé | Impact |
|-------------|--------|--------|
| **POC borné** (recommandation candidate) | Local Mac, mono-opérateur, orchestration cycle documentaire + Git | Preuve de valeur limitée mais sûre |
| **POC élargi** | Intégrations GPT/Cursor réelles d’emblée | Valeur plus forte / risque et coût plus élevés |
| **Pas de POC** | Stop après vision | Moindre investissement ; opportunité non éprouvée |

Le détail d’intégration (réel / simulé / partiel) reste à qualifier au **cadrage détaillé** si G6 est accordé.

---

## 6. Risques résiduels

| ID | Risque | Sévérité hyp. | Reporté à |
|----|--------|---------------|-----------|
| R1 | Seconde source de vérité hors Git | Haute | G3 / cadrage / sécurité |
| R2 | Contournement des gates humains via UI | Haute | Sécurité / RSSI |
| R3 | Confusion avec architecture plateforme historique | Moyenne | G3 / G4 |
| R4 | Fuite de données vers fournisseurs IA | Haute | RGPD / sécurité |
| R5 | Coûts API non maîtrisés | Moyenne | FinOps |
| R6 | Surinvestissement avant validation opportunité | Moyenne | G1 / G5 / G6 |
| R7 | Travail Campus360 local non lié coexistant dans le working tree | Basse (process) | Discipline Git locale |

---

## 7. Questions ouvertes

1. G1 — SFIA Studio devient-il un projet officiel engagé ?
2. G4 — Quelle option A/B/C pour la relation à v2.6 ?
3. G5 — Le POC local Mac borné est-il le bon premier incrément de preuve ?
4. G6 — Le cadrage détaillé est-il autorisé maintenant, plus tard, ou refusé ?
5. G7 — Quand versionner le socle (commit/push/PR) ?
6. Faut-il ignorer explicitement l’architecture plateforme historique mentionnant Studio, ou la citer comme source d’inspiration bornée ?
7. Le POC doit-il exiger une intégration GPT/Cursor réelle dès le premier incrément ?
8. Qui, hors Morris, pourrait opérer Studio à terme (hors POC) ?

---

## 8. Critères de clôture du pré-cadrage

Le pré-cadrage pourra être considéré **clôturable** lorsque Morris aura :

| Critère | Gate lié |
|---------|----------|
| Statué sur le statut de projet officiel | G1 |
| Validé ou amendé problème / opportunité | G2 |
| Validé ou amendé la vision candidate | G3 |
| Choisi la relation à v2.6 | G4 |
| Validé, amendé ou refusé le POC candidat | G5 |
| Autorisé, reporté ou refusé le cadrage détaillé | G6 |
| (Optionnel pour clôture doc) Clarifié la stratégie de versionnement | G7 |

Tant que G1–G6 ne sont pas arbitrés, le statut reste `pre-framing-ready-for-morris-review` (ou équivalent post-revue).

---

## 9. Recommandation de prochaine décision

**Prochaine décision recommandée :** arbitrer **G1 → G2 → G3 → G4 → G5**, puis **G6**.

Ordre candidat :

1. **G1** — sans projet officiel, le reste est exploratoire uniquement ;
2. **G2 / G3** — aligner le « pourquoi » et la vision ;
3. **G4** — verrouiller la relation à la baseline (recommandation candidate : **C**) ;
4. **G5** — borner la preuve (POC Mac) ;
5. **G6** — n’ouvrir le cadrage détaillé que si G1–G5 sont favorables ;
6. **G7** — versionner seulement après revue satisfaisante du socle.

**G6 favorable ≠ cadrage détaillé démarré automatiquement** — une exécution ultérieure dédiée sera requise.

---

## 10. Arbitrages futurs à inscrire (blocs)

| Bloc | Arbitrage futur (non tranché) |
|------|-------------------------------|
| Sécurité | Modèle de permissions agents ; secrets ; journalisation d’exécution |
| DevOps | Nature des intégrations Git/GPT/Cursor ; distribution Mac |
| Observabilité | Granularité des logs / audit trail |
| FinOps | Métriques de coût API à suivre |
| RGPD | Conservation, transfert, minimisation du contexte IA |
| Accessibilité | Référentiel cible pour l’UI |
| Performance | Objectifs de latence acceptables |
| Capitalisation | Séparer REX projet et éventuel cycle méthode |

---

## 11. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Completeness des 4 documents | Oui |
| Décisions inventées | Non |
| Architecture / stack tranchées | Non |
| Baseline modifiée | Non |
| Ready for Morris review | **Oui** |
| Ready for detailed framing | **Non** — dépend G6 |
| Ready for commit / push / PR | **Non** — dépend G7 |

**Verdict :** `SFIA STUDIO PRE-FRAMING DOCUMENTED — READY FOR MORRIS REVIEW`

---

## 12. Lien avec les documents du socle

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Identité, statut, navigation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Problème, vision, options A/B/C, POC |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles |

---

*SFIA Studio — decision pack de pré-cadrage — baseline SFIA v2.6 — Morris décide.*
```


---

## 10. Garde-fous appliqués

- Git = source de vérité ; Morris décide ; GPT analyse ; Cursor exécute borné
- SFIA v2.6 non modifiée ; pas de v2.7 ; pas de v3.0
- Pas de stack / architecture / backlog / code / commit / push / PR
- Distinction observation / hypothèse / option / recommandation / décision proposée / validée
- Architecture plateforme historique non promue
- Review Handoff Git = not required (justifié)
- `.tmp-sfia-review/` non staged / non commité
- Travaux Campus360 préexistants non touchés

---

## 11. Validations exécutées et résultats

| Validation | Résultat |
|------------|----------|
| `git diff --check` | **OK** (aucun warning whitespace) |
| `git status --short` | Untracked `projects/sfia-studio/` ; M Campus360 préexistant ; aucun staged |
| `git diff --stat` | Seul diff tracked = Campus360 README (préexistant) — **hors création Studio** |
| `git diff --name-status` | `M projects/campus360/README.md` (préexistant) |
| Contenu `projects/sfia-studio/` | 4 fichiers créés, tous untracked |
| Fichiers hors périmètre modifiés par ce cycle | **Aucun** |
| Staged | **Aucun** |
| `.tmp-sfia-review/` | Présent, untracked, non staged |
| Liens Markdown relatifs | Valides entre les 4 documents |
| Formulations de décision | Contrôlées — pas de promotion implicite G1–G7 ; baseline = v2.6 méthode uniquement |
| Commit / push / PR / merge | **Non effectués** |

### Diff stat (fichiers projet — untracked)

Les fichiers `projects/sfia-studio/*` sont **untracked** ; pas de diff indexé. Inventaire :

```
projects/sfia-studio/README.md
projects/sfia-studio/01-opportunity-and-vision.md
projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md
projects/sfia-studio/03-pre-framing-decision-pack.md
```

### Name-status (périmètre Studio)

```
?? projects/sfia-studio/README.md
?? projects/sfia-studio/01-opportunity-and-vision.md
?? projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md
?? projects/sfia-studio/03-pre-framing-decision-pack.md
```

---

## 12. Réserves

1. Working tree contient des modifications / untracked Campus360 **hors périmètre** — non touchés ; discipline Git requise pour ne pas les mélanger à un futur commit Studio.
2. Document `docs/architecture/sfia-platform-architecture.md` mentionne SFIA Studio dans une vision plateforme — traité comme historique / non retenu.
3. Specs moteurs (Prompt / Repository / Validation) = fondations v1.1, pas capacités runtime vérifiées.
4. Intégration réelle GPT/Cursor du POC = non tranchée (à qualifier si G6).
5. GreenOps peu pertinent au stade POC local — conditionnel ultérieur.

---

## 13. Questions ouvertes

Voir `03-pre-framing-decision-pack.md` §7 (G1–G8 questions).

---

## 14. Gates Morris proposés

| Gate | Objet | Statut |
|------|-------|--------|
| G1 | Projet officiel | PROPOSÉ |
| G2 | Problème / opportunité | PROPOSÉ |
| G3 | Vision produit candidate | PROPOSÉ |
| G4 | Relation SFIA v2.6 (A/B/C) | PROPOSÉ |
| G5 | POC local Mac candidat | PROPOSÉ |
| G6 | Passage cadrage détaillé | PROPOSÉ |
| G7 | Commit / push / PR ultérieurs | PROPOSÉ |

---

## 15. Review Handoff Git

| Champ | Valeur |
|-------|--------|
| Décision | **not required** |
| Justification | Exécution volontairement locale ; Morris n’a pas autorisé de push (y compris `sfia/review-handoff`) ; transmission manuelle Cursor → ChatGPT |
| Branche | N/A |
| Fichier | N/A |
| Commit | interdit |
| Push | interdit |
| Verdict handoff | `HANDOFF NOT REQUIRED — JUSTIFIED` |

---

## 16. Verdict

`SFIA STUDIO PRE-FRAMING DOCUMENTED — READY FOR MORRIS REVIEW`

Statut documentaire : `pre-framing-ready-for-morris-review`

Ce cycle **ne conclut pas** : cadrage détaillé validé ; architecture validée ; stack validée ; POC autorisé ; SFIA 2.7 ; READY FOR COMMIT / PUSH / PR.

---

*Fin du review pack FULL — mono-cycle — ne pas committer `.tmp-sfia-review/`.*

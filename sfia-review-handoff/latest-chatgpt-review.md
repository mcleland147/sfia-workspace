# REVIEW PACK FULL — SFIA STUDIO PRODUCT COMPLETION CYCLE 2 CONCEPTION FONCTIONNELLE

| Champ | Valeur |
| --- | --- |
| **Timestamp** | 2026-08-19 13:42:29 CEST (+0200) — Europe/Paris |
| **Repository** | `mcleland147/sfia-workspace` · `/workspace` |
| **Branche cycle** | `docs/sfia-studio-product-completion-c2-functional-design` · locale · **non poussée** |
| **HEAD / base** | `5681bc77be771ca3f388ae0d62eb30a2b2063a65` = `origin/main` |
| **GO Morris consommé** | GO MORRIS — START PRODUCT COMPLETION CYCLE 2 — CONCEPTION FONCTIONNELLE — NO DELIVERY |
| **Qualification** | Cycle 2 · DOC · **CRITICAL** |
| **CKC** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md` · `0.1.0` · candidate |
| **Fake / Real** | N/A · ZERO REAL |
| **Livrable** | `projects/sfia-studio/product-completion/02-product-completion-conception-fonctionnelle.md` · **1006 lignes** · **CANDIDATE FOR MORRIS REVIEW** |
| **Project Git integration** | NON AUTORISÉE / NON RÉALISÉE |

---
## 1. Local Git Truth

### Initial / final

- `pwd` : `/workspace`
- `git rev-parse --show-toplevel` : `/workspace`
- `git remote -v` : `origin` = `mcleland147/sfia-workspace`
- `git fetch origin --prune` : OK
- `origin/main` : `5681bc77be771ca3f388ae0d62eb30a2b2063a65` · PR #366 MERGED
- `git branch --show-current` : `docs/sfia-studio-product-completion-c2-functional-design`
- `git rev-parse HEAD` : `5681bc77be771ca3f388ae0d62eb30a2b2063a65`
- `git status --short` : **1 fichier projet untracked** · `.tmp-sfia-review/` untracked · **staged = EMPTY**
- `git diff --name-status` : EMPTY (untracked file)
- `git diff --cached --name-status` : EMPTY

---
## 2. Qualification Critical

Cycle 2 définit comportements transverses (ProjectTrajectory, continuité, HumanDecision, Confirmation, EC, AgentCapability, lifecycle, Evidence, STOP/FAIL/recovery, catalog evolvability) conditionnant architecture/UX/QA/delivery aval.

---
## 3. Convergence pre-check

| Champ | Valeur |
| --- | --- |
| Capacité | Formaliser comportement Product Completion end-to-end |
| Milestone | CYCLE 2 CONCEPTION FONCTIONNELLE |
| État entrée | C1 intégré · sync #365 · repo coherence PASS WITH RESERVES · GO Morris C2 |
| Exit proof | Modèle unique testable · 21 sections · CA-PC-01…23 · arbitrages séparés |
| Capacité suivante | À REQUALIFIER — UX ou Architecture fonctionnelle (§21 C2) |

---
## 4. Sources lues

- C1 `01-product-completion-cadrage.md`
- Build Doctrine · Roadmap (read-only audit)
- Framings 30–37
- CKC pilot 02-conception-fonctionnelle
- Harvest: `08-functional-design.md` · `09-functional-flows-and-rules.md` · `10-functional-decision-pack.md`
- Process: template · routing · operating model · guardrails

---
## 5. Harvest / classification (synthèse)

| Actif | Traitement |
| --- | --- |
| 08 | HARVEST/ADAPT — Pilote not Morris · EC natif |
| 09 | HARVEST — format parcours · gates produit |
| 10 | HARVEST provenance — FD-CAND ≠ C1 |
| M1–M5 | KEEP/ADAPT backbone |
| PRE-M6 | KEEP/ADAPT · HARVEST UX lessons |

---
## 6. Décisions C2

### Consumed (C1)
D-PC-01/07/08 · Pilote · MUST · EC parité · AgentCapability envelope · catalog evolvability

### Morris decision required (non bloquant revue globale)
- **MD-C2-01** barre preuve généricité (recommandation B: 5 cas)
- **MD-C2-02** profondeur PJ intake
- **MD-C2-03** progressive disclosure EC (recommandation summary+expand)
- **MD-C2-04** label Capitalization vs type cycle

### Unknowns U-01…U-05 après C2
Qualifiés fonctionnellement · arbitrages résiduels §20C

---
## 7. Validations

| Check | Résultat |
| --- | --- |
| Fichiers projet | **1 seul créé** (untracked) |
| Build Doctrine / Roadmap / C1 / framings | **inchangés** |
| method/** · prompts/** | **inchangés** |
| staged | EMPTY |
| architecture/API/DB/Figma/backlog/code | **absent** |
| Morris persona runtime | **rejeté explicitement** |
| runtime v3 ADOPTED | **NON** |
| Delivery / REAL | **NON** |

---
## 8. Git project actions (interdites — non réalisées)

commit · push · PR · merge · branch delete · force

---
## 9. CONTENU COMPLET — C2 candidate

```markdown
# SFIA Studio — Product Completion — Cycle 2 Conception fonctionnelle

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio — Product Completion |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | **CRITICAL** |
| **Typologie** | **DOC** — documentation-only · impact structurant aval |
| **Milestone** | PRODUCT COMPLETION — CYCLE 2 — CONCEPTION FONCTIONNELLE |
| **Statut** | **CANDIDATE FOR MORRIS REVIEW** |
| **Base Git** | `origin/main` @ `5681bc77be771ca3f388ae0d62eb30a2b2063a65` · PR #366 **MERGED** |
| **Branche locale cycle** | `docs/sfia-studio-product-completion-c2-functional-design` · **non poussée** |
| **GO Morris consommé** | GO MORRIS — START PRODUCT COMPLETION CYCLE 2 — CONCEPTION FONCTIONNELLE — NO DELIVERY |
| **CKC** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md` · `0.1.0` · **candidate** · guidance cognitive · aucune autorité d'exécution |
| **Runtime v3** | **NON ADOPTED** |
| **Delivery** | **NOT AUTHORIZED** |
| **REAL** | **ZERO REAL** |
| **Processus externe** | SFIA v2.6 ChatGPT ↔ Cursor · **process-only** · jamais doctrine runtime Studio |

---

## 1. Métadonnées et autorité

Ce document est le **candidat canonique C2 Product Completion**. Il transforme la cible, le scope et la trajectoire validés en C1 en un **modèle fonctionnel** cohérent, testable et traçable — sans choisir architecture technique, persistence, schema, API, stack, Figma, backlog ou implémentation.

| Champ | Valeur |
| --- | --- |
| **Autorité entrante** | C1 `01-product-completion-cadrage.md` **VALIDATED BY MORRIS — INTEGRATED ON MAIN** |
| **Doctrine active** | Framings v3 `30`–`37` · read-only pour ce cycle |
| **Build Doctrine / Roadmap** | read-only pour ce cycle |
| **Effet de ce C2** | Candidate locale · **aucune intégration Git projet** dans ce cycle |
| **Gate suivant** | **MORRIS C2 FUNCTIONAL REVIEW** |

---

## 2. Autorité, sources et anti-claims

### 2.1 Hiérarchie des sources

```text
Git courant / preuves MVP sur main
> décisions Morris enregistrées (C1, GO Morris C2)
> C1 Product Completion validé
> doctrine Studio v3 (framings 30–37)
> Build Doctrine / Convergence Roadmap (rôles respectifs)
> présent C2 candidate
> actifs historiques harvestés (08–10, 04–07)
> CKC Conception fonctionnelle candidate (guidance cognitive)
> processus externe v2.6 (template, routing, operating model, guardrails)
> mémoire / hypothèses
```

### 2.2 Décisions C1 consommées (non re-décidées ici)

- **D-PC-01** — Target / Scope / completion bar / MUST-SHOULD-FUTURE-OOS
- **D-PC-07** — Trajectoire Product Completion adaptative ; M6/M7 absorbés
- **D-PC-08** — C2 recommandé comme prochain cycle (recommandation consommée ; exécution autorisée par GO Morris C2 distinct)
- Rôle runtime **Pilote** (Morris ≠ persona produit)
- **ProjectTrajectory** MUST · continuité sémantique inter-session MUST
- **AgentCapability** = authority / governance envelope
- **ExecutionContract** natif · parité fonctionnelle minimale avec logique contrat Cursor canonique · harvest v2.6 template · **pas** copie doctrinale v2.6
- Catalogue de cycles **évolutif** · `15` = mesure courante · **≠ invariant structurel**
- CKC = guidance cognitive · **aucune autorité** décision / exécution

### 2.3 Distinctions obligatoires

| Distinction | Règle |
| --- | --- |
| Pilote vs Morris | Pilote = acteur runtime générique · Morris = autorité construction/gouvernance Studio |
| Recommendation vs HumanDecision | Nora recommande · Pilote décide explicitement |
| Phrase utilisateur vs HumanDecision | L'intention exprimée **≠** décision structurante enregistrée |
| ProjectTrajectory proposée vs décidée | Proposition = Recommendation jusqu'à HumanDecision |
| Project vs Cycle | Un Project contient plusieurs CycleInstance ; jamais confondus |
| SUCCESS vs READY vs ADOPTED | Succès fonctionnel **≠** produit complet **≠** runtime v3 adopté |
| Technical SUCCESS vs functional SUCCESS | Preuve technique **≠** claim métier |
| CKC vs autorité | CKC enrichit le raisonnement · ne crée aucune permission |
| v2.6 vs Studio | v2.6 = processus externe Cursor · jamais doctrine runtime Studio |

### 2.4 Ce que C2 ne décide pas

- architecture fonctionnelle détaillée (composants, modules, services)
- architecture technique · stack · DB · SQL · API · schemas · deployment
- UX visuelle · Figma · wireframes · composants UI · design tokens
- backlog · user stories · story points · delivery plan
- code · tests applicatifs · migrations · POC · REAL
- modification Build Doctrine · Roadmap · C1 · framings 30–37
- runtime v3 ADOPTED · promotion baseline globale v3
- commit / push / PR / merge projet

---

## 3. Convergence qualification

| Champ | Qualification |
| --- | --- |
| **Capacité v3 servie** | Formaliser le comportement Product Completion end-to-end avant toute conception aval |
| **Milestone** | PRODUCT COMPLETION — CYCLE 2 — CONCEPTION FONCTIONNELLE |
| **État d'entrée** | C1 intégré · sync gouvernance/doctrine intégrée (PR #365) · post-merge repo coherence PASS WITH GOVERNED RESERVES · GO Morris C2 consommé · runtime v3 NON ADOPTED |
| **Gap principal** | C1 définit le WHAT ; le comportement complet (qui/quoi/états/règles/authority/exceptions/recovery/CA) n'était pas encore spécifié à un niveau testable |
| **Exit proof C2** | Modèle fonctionnel unique · cohérent C1/v3 · parcours A–W · objets · états · règles · authority · SUCCESS/STOP/FAIL/recovery · CA observables · arbitrages séparés |
| **Dette connue** | PRE-M6 presentation héritée · ProjectTrajectory Memory · Confirmation process-local · Evidence parfois trop technique · réserves Roadmap non corrigées dans ce cycle |
| **Gate suivant** | MORRIS C2 FUNCTIONAL REVIEW |
| **Capacité suivante** | **À REQUALIFIER APRÈS C2** — voir §21 |

### 3.1 Classification des actifs

| Actif | Classification |
| --- | --- |
| C1 | KEEP — source structurante |
| Build Doctrine | KEEP — read-only |
| Roadmap | KEEP — read-only |
| Framings 30–37 | KEEP — doctrine active read-only |
| Backbone M1–M5 | KEEP / ADAPT selon C1 |
| PRE-M6 fonctionnel | KEEP / ADAPT |
| PRE-M6 UX Evidence | HARVEST |
| `08-functional-design.md` | HARVEST / ADAPT — **≠** SoT actuelle |
| `09-functional-flows-and-rules.md` | HARVEST / ADAPT — parcours/règles historiques |
| `10-functional-decision-pack.md` | HARVEST provenance — FD-CAND **≠** décisions C1/v3 actuelles |

---

## 4. Acteurs et responsabilités fonctionnelles

### 4.1 Pilote

| Dimension | Contenu |
| --- | --- |
| **Nature** | Humain · acteur runtime générique Product Completion |
| **Responsabilités** | Créer/reprendre un Project · exprimer intention · lire LPS/trajectory · prendre HumanDecision structurantes · inspecter ExecutionContract · autoriser frontières (Confirmation) · interpréter SUCCESS/STOP/FAIL · examiner Evidence · demander replanification |
| **Autorité** | Décision humaine explicite · gates produit · consentement proportionné |
| **Actions permises** | Toutes actions produit non protégées · décisions · confirmations · lancement exécution **après** contrat inspecté et autorité suffisante |
| **Actions interdites** | Déléguer une HumanDecision à Nora · contourner Confirmation consommée · interpréter SUCCESS technique comme READY produit |
| **Escalade** | Vers Morris (construction Studio) uniquement via gates **hors** persona runtime — Studio présente le gate sans inventer Morris comme utilisateur type |

### 4.2 Nora

| Dimension | Contenu |
| --- | --- |
| **Nature** | Agent conversationnel Studio (raisonnement / qualification / analyse) |
| **Responsabilités** | Comprendre intention · qualifier cycle/profil/CKC/lenses · clarifier · détecter contradictions · mettre à jour LPS (propositions) · proposer ProjectTrajectory · produire Recommendation · préparer EC (sans autorité) · analyser Evidence · proposer replanification |
| **Autorité** | **Aucune** autorité de décision · **aucune** autorité d'exécution · **aucune** création de permission |
| **Actions permises** | Lire contexte fourni · raisonner · recommander · préparer artefacts · poser questions adaptatives |
| **Actions interdites** | Enregistrer HumanDecision · consommer Confirmation · lancer agent · élargir scope EC · inventer autorité · extrapoler depuis transcript manquant |
| **Escalade** | Demander clarification Pilote · STOP fail-closed si source/doctrine/autorité insuffisante |

### 4.3 Studio (plateforme)

| Dimension | Contenu |
| --- | --- |
| **Nature** | Environnement produit · orchestration fonctionnelle · persistance sélective |
| **Responsabilités** | Maintenir Project/LPS/CycleInstance · appliquer règles d'état · présenter gates/Confirmations · lier EC→Attempt→Evidence · recovery honnête · tracer provenance DoctrinePackage |
| **Autorité** | Appliquer policy/guardrails · refuser mutations implicites · fail-closed |
| **Actions permises** | État borné · journalisation · enforcement des frontières |
| **Actions interdites** | Décider à la place du Pilote · auto-merge · global L5 · inventer Confirmation consommée |
| **Escalade** | STOP / gate Pilote · SC-* selon framing 34 |

### 4.4 Cursor / agent exécuteur

| Dimension | Contenu |
| --- | --- |
| **Nature** | Exécuteur technique sous ExecutionContract + AgentCapability |
| **Responsabilités** | Exécuter le HOW dans l'autorité effective · produire Evidence · respecter stop conditions |
| **Autorité** | Uniquement effective authority calculée |
| **Actions permises** | Selon contrat : read · local write · commit · etc. — **jamais** élargissement autonome |
| **Actions interdites** | Push/merge/delete branche sans autorisation · protected paths · invention périmètre |
| **Escalade** | STOP · remontée Pilote via Evidence |

### 4.5 Validateurs / connecteurs (secondaires)

| Dimension | Contenu |
| --- | --- |
| **Nature** | Acteurs fonctionnels externes optionnels (CI, validateurs, connecteurs) |
| **Responsabilités** | Fournir preuves · checks read-only · statuts |
| **Autorité** | Lecture / validation · pas de décision produit |
| **Escalade** | Evidence insuffisante → STOP / requalification |

### 4.6 Git

| Dimension | Contenu |
| --- | --- |
| **Nature** | SoT technique/documentaire · **preuve** — **≠ persona produit** |
| **Responsabilités** | Historique · vérité repo · ancres factuelles pre-check |
| **Autorité** | Aucune décision · aucune interprétation métier autonome |

### 4.7 Morris (gouvernance construction — hors persona runtime)

Morris reste l'autorité L0 de **construction**, doctrine, promotion et gates du **projet SFIA Studio**. Morris peut utiliser Studio en tant que Pilote. Studio **ne modélise pas** Morris comme rôle runtime obligatoire dans la boucle Product Completion générique.

---

## 5. Boucle fonctionnelle canonique Product Completion

La boucle suivante est la **référence nominale** end-to-end. Les étapes peuvent être reprises, parallélisées partiellement ou interrompues ; chaque parcours significatif exige préconditions, acteur, scénario, variantes, erreurs, stop, gate, état final et Evidence.

### 5.1 Vue d'ensemble A→W

```text
A  Créer Project
B  Retrouver / reprendre Project
C  Exprimer intention
D  Résoudre contexte / DoctrinePackage / sources
E  Qualifier cycle · profil · CKC · lenses
F  Clarification Nora
G  Mettre à jour LPS
H  Consulter / proposer ProjectTrajectory
I  Options / Recommendation
J  HumanDecision (Pilote)
K  Confirmation (si frontière protégée)
L  Préparer ExecutionContract
M  Inspecter ExecutionContract (Pilote)
N  Vérifier authority / executor sufficiency
O  Lancer Cursor/agent sous contrat
P  Suivre accepted → running → terminal
Q  SUCCESS
R  STOP gouverné
S  FAIL technique
T  Evidence / ReviewBundle
U  Analyse Nora
V  Replanification
W  Reprise inter-session
```

### 5.2 Parcours A — Créer un Project

| Champ | Contenu |
| --- | --- |
| **Préconditions** | Pilote authentifié · Studio disponible |
| **Acteur primaire** | Pilote |
| **Scénario nominal** | 1) Pilote initie création 2) Fournit identité minimale (nom, objectif initial optionnel) 3) Studio crée Project + LPS initial + pin DoctrinePackage applicable 4) État Project = `active` |
| **Variantes** | Création depuis template de contexte · import métadonnées harvest |
| **Erreurs** | DoctrinePackage indisponible / stale → **STOP** SC-SRC |
| **Gate** | Aucun gate Morris produit |
| **État final** | Project durable · LPS `initialized` · aucun Cycle actif obligatoire |
| **Evidence** | Audit event création · identité Project |

### 5.3 Parcours B — Retrouver / reprendre Project

| Champ | Contenu |
| --- | --- |
| **Préconditions** | Project existant durable |
| **Acteur** | Pilote |
| **Scénario nominal** | 1) Recherche/liste Projects 2) Sélection 3) Studio charge LPS + trajectoire + cycle actif + décisions + frontière autorité 4) Nora reçoit contexte suffisant (§15) |
| **Variantes** | Reprise post-interruption · reprise post-SUCCESS/STOP/FAIL |
| **Erreurs** | Contexte authority/decision manquant → fail-closed requalification (§15) |
| **Gate** | Re-Confirmation si frontière consommée invalide par changement de contexte |
| **État final** | Session reprise · LPS cohérent · **pas** de faux souvenir |
| **Evidence** | Trace reprise · état reconstruit documenté |

### 5.4 Parcours C→F — Intention à clarification

| Champ | Contenu |
| --- | --- |
| **Préconditions** | Project actif |
| **Acteurs** | Pilote · Nora · Studio |
| **Scénario nominal** | C) Pilote exprime intention → D) résolution DoctrinePackage + sources + fraîcheur → E) qualification type cycle · profil SFIA · CKC binding · lenses → F) Nora clarifie gaps · contradictions → G) LPS mis à jour (propositions) |
| **Variantes** | Profil Critical explicite · requalification profil si signal structurant |
| **Erreurs** | Contradiction critique → gate / STOP SC-CONTRA · CKC absent → fallback synthétique silencieux (doctrine 30) · profil ambigu → clarification |
| **Stop** | Source stale/unresolved → SC-SRC · scope non stabilisé → SC-SCOPE |
| **État final** | CycleInstance `qualified` ou `awaiting_clarification` |
| **Evidence** | Qualification trace · CKC path/version/status · sources list |

### 5.5 Parcours G→J — Trajectory · Recommendation · HumanDecision

| Champ | Contenu |
| --- | --- |
| **Préconditions** | Qualification suffisante |
| **Scénario nominal** | H) Nora propose/met à jour ProjectTrajectory (Recommendation) → I) options structurées → J) Pilote enregistre HumanDecision si structurante (poursuite, amendement scope, replanification, abandon cycle) |
| **Variantes** | Décision légère non structurante (continue conversation) · amendement trajectoire |
| **Erreurs** | Tentative traiter Recommendation comme Decision → refus / clarification |
| **Gate** | HumanDecision requise si impact trajectoire · scope · autorité · effet irréversible |
| **État final** | Trajectory `proposed` ou `decided` · DecisionBasis lié |
| **Evidence** | HumanDecision durable · DecisionBasis |

### 5.6 Parcours K→N — Confirmation · EC · authority check

| Champ | Contenu |
| --- | --- |
| **Préconditions** | HumanDecision consommée si requise · intention d'exécution identifiée |
| **Scénario nominal** | K) Confirmation si protected boundary (§10) → L) Nora/Studio prépare EC natif complet → M) Pilote inspecte EC → N) calcul effective authority · executor sufficiency |
| **Erreurs** | EC incomplet vs parité §11 → STOP · executor insuffisant → SC-CAP |
| **Gate** | Confirmation N1/N2/N3 selon effet |
| **État final** | EC `prepared` → `inspected` → `authorized` ou STOP |
| **Evidence** | EC snapshot · Confirmation record si consommée |

### 5.7 Parcours O→P — Exécution

| Champ | Contenu |
| --- | --- |
| **Préconditions** | EC autorisé · HEAD/repo cohérent si applicable |
| **Scénario nominal** | O) Lancement agent → P) Attempt `accepted` → `running` → terminal |
| **Variantes** | Read-only vs write local · docs-only vs code |
| **Erreurs** | Commande hors scope · protected path · timeout |
| **Stop** | Manuel · SC-PROT · SC-GIT · divergence |
| **État final** | Attempt terminal |
| **Evidence** | Journal attempt · artefacts |

### 5.8 Parcours Q/R/S — SUCCESS · STOP · FAIL

Voir §14.

### 5.9 Parcours T→V — Evidence · analyse · replanification

| Champ | Contenu |
| --- | --- |
| **Scénario nominal** | T) Evidence/ReviewBundle produit → U) Nora analyse (business-first) → G/H) LPS + trajectory update → I) Recommendation next action → J) HumanDecision si structurante |
| **Gate** | Replanification structurante → HumanDecision |
| **Evidence** | ReviewBundle · liens LPS |

### 5.10 Parcours W — Reprise inter-session

Voir §15.

---

## 6. Objets fonctionnels

### 6.1 Project

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Conteneur de pilotage end-to-end |
| **Identité** | projectId · nom · création · statut |
| **Relations** | 1→n CycleInstance · 1→1 LPS · 1→n HumanDecision · trajectoire |
| **États** | `active` · `paused` · `archived` (fonctionnels) |
| **Invariants** | Project ≠ Cycle · durable MUST |
| **Ne représente pas** | Un cycle unique · un repo Git · une session chat |

### 6.2 LivingProjectState (LPS)

| Dimension | Contenu |
| --- | --- |
| **Rôle** | État fonctionnel central visible et fiable |
| **Contenu minimal** | identité · objectifs · cycle actif · gates · risques/dette · prochaine action · références Evidence |
| **Invariants** | Pas de CKC brut exposé · pas de recommandation stockée comme décision |
| **Durabilité** | MUST durable / reconstructible (C1 Q) |

### 6.3 CycleInstance

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Instance d'un type de cycle dans un Project |
| **Identité** | cycleInstanceId · type · profil · statut |
| **Relations** | Project · CKC binding · EC · Attempts |
| **États** | voir §7 |
| **Invariants** | Project ≠ Cycle · type catalogue évolutif |

### 6.4 DoctrinePackage / CKC binding

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Pin identité doctrine v3 + résolution CKC cognitive |
| **Identité** | packageRef · version · digest · provenance |
| **Invariants** | v2.6 **≠** doctrine active · stale → STOP |
| **CKC binding** | path · version · status detailed/synthetic/absent |

### 6.5 EpistemicItem

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Observation · Hypothèse · Option · Recommendation · (référence Decision) |
| **Invariants** | Niveaux épistémiques distincts · pas de promotion implicite |

### 6.6 Recommendation

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Proposition Nora structurée |
| **Invariants** | **≠ HumanDecision** · peut être active/reprise/reconstructible |
| **Durabilité** | Contexte MUST reprenable (CONV-PL / PROP-PL gaps) |

### 6.7 HumanDecision

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Arbitrage explicite du Pilote |
| **Relations** | DecisionBasis · Project · Cycle · EC |
| **Invariants** | Phrase utilisateur **≠** HD automatique · durable MUST |

### 6.8 DecisionBasis

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Justification / contexte / réserves de la décision |
| **Durabilité** | MUST |

### 6.9 Confirmation

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Autorisation proportionnée d'une frontière protégée |
| **États** | `pending` · `consumed` · `expired` · `invalidated` |
| **Invariants** | consommée portant autorité = durable · non consommée = fail-closed re-confirm |

### 6.10 ProjectTrajectory

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Chemin réel du Project (done/active/proposed/blocked) |
| **Invariants** | Proposée = Recommendation · décidée = HD · **≠** Convergence Roadmap · **≠** waterfall fixe |
| **Durabilité** | MUST durable / reconstructible quand active/décidée |

### 6.11 ExecutionContract

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Contrat natif structuré d'exécution |
| **Invariants** | Parité §11 · inspectable Pilote · **≠** export Markdown Cursor (adaptateur) |
| **Durabilité** | MUST |

### 6.12 AgentCapability / authority envelope

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Enveloppe d'autorité effective pour un exécuteur + EC |
| **Invariants** | **≠** catalogue features Cursor · taxonomie policy interne séparée |

### 6.13 ExecutionAttempt

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Instance d'exécution sous contrat |
| **États** | `accepted` · `running` · `terminal_success` · `terminal_stop` · `terminal_fail` |
| **Durabilité** | MUST dès qu'exécution existe |

### 6.14 Evidence

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Preuve business-first du résultat |
| **Contenu** | résultat fonctionnel · statut · preuve accessible · réserves · provenance |
| **Invariants** | **≠** décoratif · profondeur technique secondaire |

### 6.15 ReviewBundle

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Agrégat Evidence + contexte analyse Nora |
| **Boucle** | Evidence → Nora → LPS → Trajectory → Recommendation |

### 6.16 DebtItem

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Dette gouvernée portée ouverte |
| **Relations** | LPS · trajectoire · reserves |

### 6.17 UserSource / Attachment (fonctionnel — U-01)

| Dimension | Contenu |
| --- | --- |
| **Rôle** | Matière / preuve utilisateur · **≠ doctrine** |
| **Statut C1** | SHOULD · profondeur à concevoir |
| **Voir** | §13 |

---

## 7. États et transitions

### 7.1 Principes

- **Ne pas** reprendre mécaniquement les 12 états historiques (`08`) ni le persona Morris acteur F1–F12.
- Modèle **adapté** Pilote · Project≠Cycle · EC natif · accepted/running/terminal · recovery.

### 7.2 États CycleInstance (fonctionnels)

| État | Signification |
| --- | --- |
| `intent_captured` | Intention enregistrée |
| `context_resolving` | DoctrinePackage / sources en cours |
| `qualifying` | Cycle/profil/CKC/lenses |
| `clarifying` | Questions Nora actives |
| `awaiting_human_decision` | Recommendation prête · HD requise |
| `awaiting_confirmation` | Frontière protégée · Confirmation pending |
| `contract_preparing` | EC en préparation |
| `contract_inspection` | EC présenté au Pilote |
| `authority_blocked` | Autorité/executor insuffisant · SC-CAP |
| `execution_accepted` | Attempt accepté · pas encore running |
| `execution_running` | Exécution en cours |
| `terminal_success` | SUCCESS §14 |
| `terminal_stop` | STOP gouverné §14 |
| `terminal_fail` | FAIL technique §14 |
| `replanning` | Analyse post-terminale · trajectory update |

### 7.3 Transitions autorisées (extrait)

```text
intent_captured → context_resolving → qualifying → clarifying*
clarifying* → qualifying | awaiting_human_decision
awaiting_human_decision → contract_preparing (HD consommée)
contract_preparing → contract_inspection → awaiting_confirmation* → execution_accepted
execution_accepted → execution_running → terminal_*
terminal_* → replanning → qualifying | archived cycle
authority_blocked → awaiting_human_decision | terminal_stop
```

`*` = optionnel selon gate

### 7.4 Transitions interdites

- `contract_inspection → execution_running` sans inspection explicite Pilote
- `qualifying → execution_running` sans EC + authority
- `terminal_fail → terminal_success` sans nouvel Attempt
- Toute transition créant HumanDecision ou Confirmation consommée **implicitement**
- Promotion Recommendation → HumanDecision automatique

### 7.5 Gates sur transitions

| Transition | Gate |
| --- | --- |
| Vers exécution | EC inspecté · Confirmation si requise · effective authority OK |
| Vers HD | Aucune auto · action Pilote |
| Replanification structurante | HumanDecision |
| Source stale | SC-SRC · STOP |

---

## 8. Règles fonctionnelles / invariants

| ID | Règle |
| --- | --- |
| **BR-PC-01** | Recommendation **≠** HumanDecision |
| **BR-PC-02** | Phrase utilisateur **≠** HumanDecision automatique |
| **BR-PC-03** | ProjectTrajectory proposée **≠** trajectoire décidée |
| **BR-PC-04** | Project **≠** CycleInstance |
| **BR-PC-05** | CKC n'accorde aucune autorité |
| **BR-PC-06** | Nora n'accorde aucune autorité |
| **BR-PC-07** | effective authority = ∩ humain valide · EC scope · AgentCapability · guardrails |
| **BR-PC-08** | Confirmation proportionnée · pas de micro-confirmations |
| **BR-PC-09** | Aucune mutation implicite d'état authority-bearing |
| **BR-PC-10** | Pas de global L5 · pas d'auto-escalade |
| **BR-PC-11** | EC inspectable avant action protégée |
| **BR-PC-12** | Source stale/unresolved → fail-closed |
| **BR-PC-13** | Executor insuffisant → STOP / escalation (SC-CAP) |
| **BR-PC-14** | Evidence requise avant claim SUCCESS |
| **BR-PC-15** | technical SUCCESS **≠** functional READY **≠** runtime ADOPTED |
| **BR-PC-16** | Continuité sans faux souvenir · missing context → requalification |
| **BR-PC-17** | Catalogue cycles évolutif · nouveau type **≠** nouveau moteur par défaut |
| **BR-PC-18** | Nouveau cycle **≠** nouveau moteur d'exécution |
| **BR-PC-19** | v2.6 process-only · jamais doctrine runtime Studio |
| **BR-PC-20** | Git = preuve · pas décision métier |
| **BR-PC-21** | Artefact utilisateur **≠** doctrine |
| **BR-PC-22** | STOP gouverné **≠** FAIL technique |
| **BR-PC-23** | Profil Critical jamais implicite |
| **BR-PC-24** | Capitalization **≠** Critical automatique |

---

## 9. Profil SFIA — qualification fonctionnelle

### 9.1 Comportement externe actuel (process v2.6)

| Profil | Règle externe |
| --- | --- |
| **Standard** | Défaut · DOC non structurant |
| **Critical** | Explicite · jamais implicite · impact produit structurant |
| **Capitalization** | Routage distinct · **≠** Critical auto |

### 9.2 Analyse C2 — process vs produit

| Élément | Process externe v2.6 | Comportement fonctionnel Studio proposé |
| --- | --- | --- |
| Sélection profil au lancement cycle Cursor | Oui (template/routing) | Studio **doit** exposer profil CycleInstance visible au Pilote |
| Critical explicite | Règle process | **MUST** — Nora demande clarification si signal structurant · profil Critical **affiché** avant préparation EC |
| Capitalization vs Critical | Routage méthode | Studio distingue **type cycle** vs **profil impact** · pas de promotion silencieuse |
| Conséquence gates | Plus de garde-fous process | Plus de Confirmations / HD / Evidence **fonctionnellement** — pas de duplicate checklist CKC |

### 9.3 Critères observables de sélection (fonctionnels)

- Pilote ou Nora qualifie explicitement profil **Critical** si : impact trajectoire produit · authority élargie · effet irréversible · contradiction doctrine · multi-fichiers structurants.
- Défaut = **Standard** affiché.
- Capitalization = type cycle catalogue · **≠** profil Critical automatique.

### 9.4 Responsabilité Nora

- Challenger sur-qualification / sous-qualification.
- Refuser de lancer EC Critical implicite.

### 9.5 Anti-surqualification

- Pas de Critical par défaut sur tout cycle Product Completion.
- Pas d'équivalence « tout DOC = Standard » si signaux Critical présents.

### 9.6 Impact LPS / EC / gates

- Profil enregistré sur CycleInstance · visible LPS · influence Confirmation level · influence Evidence depth **fonctionnellement**.

### 9.7 Arbitrage

| Sujet | Statut |
| --- | --- |
| Matrice exacte signal → profil | **FUNCTIONALLY DERIVED** — règles §9.3 suffisantes pour revue |
| Exposer Capitalization comme profil UI distinct | **OPEN / MORRIS DECISION REQUIRED** si distinction UX requise — voir §20 |

**Ne pas** promouvoir silencieusement profils v2.6 en invariant v3.

---

## 10. Frontières d'autorité / gates / Confirmation (U-02)

### 10.1 Quand Confirmation requise

| Effet fonctionnel | Confirmation |
| --- | --- |
| Lecture seule / simulation | Non |
| Génération artefact temporaire local | N1 légère si frontière faible |
| Écriture locale hors protected | N1–N2 selon scope |
| Commit local | N2 |
| Push / PR / merge / delete branche | N3 · gate Pilote · Morris pour repo Studio construction |
| Mutation doctrine / baseline | N2–N3 · Morris construction |
| Effet irréversible sans rollback | N3 |

### 10.2 HumanDecision vs Confirmation

| | HumanDecision | Confirmation |
| --- | --- | --- |
| **Objet** | Choix structurant (scope, trajectory, go/no-go cycle) | Consentement frontière d'exécution |
| **Acteur** | Pilote | Pilote |
| **Consommation** | Ouvre préparation EC | Autorise effet dans EC |

### 10.3 consumed vs unconsumed

- **Unconsumed** : perte possible si fail-closed · re-Confirmation obligatoire
- **Consumed** : durable / reconstructible · audit trail

### 10.4 Invalidation

Confirmation invalidée si : changement HEAD/repo · amendement EC · changement HumanDecision parent · expiration policy · contexte stale

### 10.5 STOP autorité insuffisante

SC-CAP · SC-IRR · SC-PROT · SC-DEC — message business-first + id SFIA secondaire

### 10.6 Reversibility (fonctionnel)

Rollback attendu décrit dans EC quand pertinent · pas de choix mécanisme technique ici.

---

## 11. Native ExecutionContract (U-04)

### 11.1 Représentation fonctionnelle MUST

Le Pilote inspecte un **document/objet structuré** (progressive disclosure autorisée **fonctionnellement** — pas de choix UI) contenant **au minimum** :

1. **Objectif** — résultat attendu lisible métier
2. **Contexte** — Project · Cycle · décisions liées
3. **Sources / provenance / fraîcheur** — DoctrinePackage · CKC · Git snapshot si applicable · UserSources
4. **Scope IN / OUT** — fichiers / domaines / effets autorisés et interdits
5. **Autorité** — HumanDecision · Confirmations consommées · effective authority summary
6. **AgentCapability applicable** — envelope summary (pas liste features)
7. **Protections** — protected boundaries · stop conditions
8. **Gates / Confirmations** — pending vs satisfied
9. **Contraintes** — gouvernance · ZERO REAL · no merge · etc.
10. **Stop conditions** — SC-* applicables
11. **Validations** — critères de succès fonctionnels
12. **Evidence attendue** — type · profondeur · business-first
13. **Rollback / reversibility** — si pertinent
14. **Résultat et limites** — ce que SUCCESS signifie **dans ce contrat**

### 11.2 Parité contrat Cursor canonique

**MUST** — parité **fonctionnelle** minimale (C1 L.2) · harvest logique template · **INTERDIT** copie doctrinale v2.6 comme runtime.

### 11.3 Progressive disclosure (fonctionnel)

- Couche **Pilote** : objectif · scope · autorité · risques · Evidence attendue
- Couche **détail** : stop conditions · provenance technique · ids secondaires

**OPEN / MORRIS DECISION REQUIRED** : niveau de détail par défaut vs expand — options en §20.

---

## 12. Cycle Catalog Evolvability / généricité (U-03 · U-05)

### 12.1 Ajout d'un nouveau type de cycle

Enrichit prioritairement : qualification · CKC · questions · risques · lenses · gates · stops · Evidence semantics · exit criteria.

**Ne nécessite pas** par défaut : nouveau moteur · nouveau workflow engine · nouveau composant runtime dédié.

### 12.2 Mécanisme générique MUST

```text
cycle/context → ExecutionContract → agent → Evidence → Nora → LPS/trajectory
```

### 12.3 Preuve de généricité (U-03 · U-05)

**Ensemble contrasté proposé** (recommandation — barre exacte **MORRIS DECISION REQUIRED**) :

| # | Situation | Contraste apporté |
| --- | --- | --- |
| 1 | Cycle DOC Standard (ex. doc sync) | Read-heavy · faible autorité |
| 2 | Cycle DOC Critical (ex. conception fonctionnelle) | Structurant · gates renforcés |
| 3 | Cycle avec autorité write Git locale | Confirmation N2 · EC scope fichiers |
| 4 | Cycle read-only repo verification | STOP sur drift · pas d'écriture |
| 5 | Cycle avec replanification post-STOP | Recovery · trajectory update |

**Justification** : 5 cas contrastés couvrent qualification · authority · execution · terminal · recovery sans imposer 15 campagnes.

**Alternatives** :

| Option | Barre | Impact |
| --- | --- | --- |
| **A — Minimal** | 3 cas (DOC std · write local · STOP/recovery) | Plus rapide · risque spécialisation non détectée |
| **B — Recommandée** | 5 cas contrastés §12.3 | Équilibre preuve / coût |
| **C — Élargie** | 7+ incluant Capitalization + REAL gated | Plus forte · coût QA |

**Statut** : **MORRIS DECISION REQUIRED** sur barre exacte avant preuve intégrée finale.

---

## 13. PJ / sources utilisateur (U-01)

### 13.1 Besoin fonctionnel MUST/SHOULD

| Capacité | Priorité C1 | Comportement fonctionnel |
| --- | --- | --- |
| Référencer une source utilisateur | SHOULD → **MUST minimal** pour preuve métier | Rattachement Project/Cycle/EC/Decision |
| Type fonctionnel | MUST définir | document · capture · log · lien · note — **sans** format technique |
| Provenance | MUST | origine · auteur · date |
| Fraîcheur | MUST | stale → STOP / requalification |
| Visibilité | MUST fonctionnel | confidentialité projet · pas de fuite cross-project |
| Conservation | SHOULD | durée / retrait — **OPEN** détail policy |

### 13.2 Règles

- UserSource **≠** DoctrinePackage
- Absence source requise → STOP · pas extrapolation Nora
- Taille limite · stockage · API → **OUT OF SCOPE C2**

### 13.3 Arbitrage U-01

| Sujet | Statut |
| --- | --- |
| Intake MUST minimal (référence + provenance + fraîcheur) | **FUNCTIONALLY DERIVED** from C1 SHOULD |
| Profondeur types PJ (upload vs lien vs référence repo) | **MORRIS DECISION REQUIRED** |

---

## 14. SUCCESS / STOP / FAIL

### 14.1 SUCCESS

| Dimension | Contenu |
| --- | --- |
| **Définition** | Résultat attendu du EC obtenu **et** Evidence suffisante **dans le scope** |
| **Evidence** | ReviewBundle business-first |
| **Suite possible** | Nora analyse · replanification · Recommendation next cycle · **pas** READY automatique · **pas** C3 auto |
| **Anti-claim** | SUCCESS **≠** Product Completion complete · **≠** runtime v3 ADOPTED |

### 14.2 STOP gouverné

| Dimension | Contenu |
| --- | --- |
| **Définition** | Frontière atteinte honnêtement : source · scope · gate · protection · capability · maturité |
| **Travail déjà fait** | Préservé · auditable |
| **Raison** | SC-* ou gate explicite · message Pilote compréhensible |
| **Prochaine action** | Clarification · HD · amendement EC · abandon · replanification |
| **Distinction** | **≠** FAIL technique |

### 14.3 FAIL technique

| Dimension | Contenu |
| --- | --- |
| **Définition** | Erreur process · outil · timeout · crash · indisponibilité |
| **Evidence** | Log technique · diagnostic · **sans** claim métier SUCCESS |
| **Reprise** | Retry **borné** · nouvel Attempt · pas de masquage en SUCCESS |
| **Distinction** | **≠** STOP gouverné (intentionnel / policy) |

---

## 15. Recovery / continuité inter-session

### 15.1 État durable / reconstructible requis (C1 Q)

Project · LPS · CycleInstance · HumanDecision · DecisionBasis · EC · Attempt · Evidence · Confirmation consommée · ProjectTrajectory active/décidée · DoctrinePackage pin · authority envelope audit · Recommendation active (reconstructible)

### 15.2 Contexte Nora minimal à reprise

Intention utile · cycle/trajectory active · décisions/réserves · Recommendation active · frontière autorité · Attempt en cours ou dernier terminal · Evidence · next action

### 15.3 Règles fail-closed

- Transcript manquant **≠** invention
- Missing authority → re-Confirmation / HD / STOP
- Missing decision → pas d'exécution
- Proposal process-local perdue → requalification explicite au Pilote

### 15.4 Alignement gaps C1

CONV-PL · PROP-PL · CONF-PL · UAT-RECOVERY-03 adressés fonctionnellement · implémentation = cycles aval.

---

## 16. Evidence / ReviewBundle

### 16.1 Evidence business-first

| Couche | Contenu |
| --- | --- |
| **Primaire** | Résultat métier · statut terminal · ce qui a changé / n'a pas changé |
| **Secondaire** | IDs · logs · SHA · profondeur technique |
| **Réserves** | Dette · limitations · partial proof |
| **Provenance** | Attempt · EC · sources |

### 16.2 Boucle fermée MUST

```text
Evidence → Nora analysis → LPS update → ProjectTrajectory → Recommendation / next action
```

### 16.3 UAT-UX-06

Pilote comprend résultat **sans** dépendre des IDs techniques en surface primaire.

---

## 17. Accessibilité fonctionnelle

Exigences **fonctionnelles** minimales (sans design visuel) :

| ID | Exigence |
| --- | --- |
| **A11Y-PC-01** | Statuts · gates · erreurs · SUCCESS/STOP/FAIL **textuellement** explicites · pas dépendance couleur seule |
| **A11Y-PC-02** | Actions protégées identifiables avant exécution |
| **A11Y-PC-03** | Messages STOP/FAIL comprennables hors contexte visuel |
| **A11Y-PC-04** | Structure informationnelle permettant navigation future accessible (headings/logical order — **fonctionnel**) |
| **A11Y-PC-05** | Confirmation dialogs **fonctionnellement** équivalents (explicit consent) |
| **A11Y-PC-06** | Evidence primaire lisible sans interaction complexe obligatoire |

Pas de composants · tokens · layouts choisis.

---

## 18. Critères d'acceptation fonctionnels

Format : **Given / When / Then** observable.

### 18.1 Project create/resume

- **CA-PC-01** : Given Pilote authentifié · When création Project · Then Project durable · LPS initialized · audit event
- **CA-PC-02** : Given Project existant · When reprise · Then LPS + trajectory + decisions rechargés **sans** faux GO

### 18.2 Nora qualification

- **CA-PC-03** : Given intention · When qualification · Then cycle type · profil · CKC path/status tracés
- **CA-PC-04** : Given profil ambigu structurant · When Nora qualifie · Then clarification demandée **avant** EC Critical implicite

### 18.3 Trajectory

- **CA-PC-05** : Given Recommendation trajectory · When sans HD · Then trajectory statut `proposed` **≠** `decided`
- **CA-PC-06** : Given HD adoption trajectory · Then trajectory `decided` durable

### 18.4 HumanDecision / Recommendation

- **CA-PC-07** : Given phrase Pilote · When non enregistrée comme HD · Then pas de HD durable créée
- **CA-PC-08** : Given Nora Recommendation · When affichée · Then distincte visuellement/fonctionnellement de HD

### 18.5 Confirmation

- **CA-PC-09** : Given action N3 requise · When Confirmation absent · Then exécution refusée SC-IRR/SC-DEC
- **CA-PC-10** : Given Confirmation consommée · When reload session · Then autorité reconstructible auditable

### 18.6 EC inspectability

- **CA-PC-11** : Given EC prepared · When Pilote inspect · Then champs §11.1 présents
- **CA-PC-12** : Given EC · When comparé contrat Cursor canonique · Then parité fonctionnelle champs minimaux

### 18.7 Agent lifecycle

- **CA-PC-13** : Given EC authorized · When launch · Then Attempt accepted→running→terminal
- **CA-PC-14** : Given commande hors scope · When agent exécute · Then STOP/ FAIL **sans** élargissement scope

### 18.8 SUCCESS / STOP / FAIL

- **CA-PC-15** : Given résultat métier + Evidence · When SUCCESS · Then pas de flag READY auto
- **CA-PC-16** : Given SC-PROT · When STOP · Then message business + frontière identifiée
- **CA-PC-17** : Given timeout outil · When terminal · Then FAIL **≠** SUCCESS

### 18.9 Evidence / replanning

- **CA-PC-18** : Given terminal · When Evidence produit · Then ReviewBundle business-first disponible
- **CA-PC-19** : Given Evidence · When Nora analyse · Then LPS/trajectory mis à jour ou Recommendation next action

### 18.10 Restart continuity

- **CA-PC-20** : Given session interrompue · When reprise · Then contexte §15.2 **ou** requalification explicite

### 18.11 Catalog evolvability

- **CA-PC-21** : Given nouveau type cycle catalogue · When qualification · Then pas de moteur dédié **requis** par défaut

### 18.12 Insufficient authority

- **CA-PC-22** : Given executor insuffisant · When launch · Then SC-CAP · pas d'exécution

### 18.13 Stale doctrine/source

- **CA-PC-23** : Given DoctrinePackage stale · When qualification · Then SC-SRC STOP

---

## 19. Harvest matrix

| Actif | État historique | Valeur réutilisable | Classification | Conservé | Adapté | Rejeté/superseded | Justification |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **08-functional-design** | Validé 2026-07-18 · v2.6 baseline · Morris persona acteur | Domaines D1–D10 · FR/BR · états candidats · AC | HARVEST | Structure domaines · idée parcours | Pilote not Morris · EC natif · Project≠Cycle · 12 états → §7 | Orchestrateur/SFIA Runtime contractuel · Morris runtime | C1 D-PC-02 · v3 |
| **09-flows-rules** | F1–F12 · Morris-centric gates | Matrices parcours · erreurs/stop | HARVEST | Format fiche parcours | Acteurs · gates produit vs construction | F3 gate Morris comme persona standard | C1 Pilote · Product Completion |
| **10-decision-pack** | FD-CAND validées 2026-07 | Provenance cycle 2 historique | HARVEST provenance | — | — | FD-CAND comme décisions actuelles | C1/Y decisions |
| **M1–M5 backbone** | MERGED · CLOSED | Project · LPS · EC · Attempt · Evidence durable | KEEP | Agrégats · gateway | Enveloppe générique · parité EC | M6/M7 forward path | C1 reuse |
| **PRE-M6** | MVP baseline · governed debt | Conversation-first · workspace entry · recovery lessons | KEEP/ADAPT | Backbone UX fonctionnel | Business-first Evidence · continuity | Presentation as final PE | C1 D-PC-01 |
| **Template Cursor v2.6** | Process externe | Logique contrat canonique | HARVEST | Champs parité §11 | Adapt v3/Pilote | Copie doctrine runtime | C1 L · framing 34 |
| **Framing 30–37** | VALIDATED doctrine | CKC · LPS · EC · AgentCapability · Evidence | KEEP read-only | Toute doctrine | — | — | Autorité hiérarchie |
| **C1** | VALIDATED integrated | Target · MUST · trajectory · unknowns | KEEP | Integral | — | — | SoT cible |

---

## 20. Arbitrages / réserves / décisions

### A. DECIDED / CONSUMED

- C1 target/scope/trajectory · Pilote runtime · MUST list · EC parité · AgentCapability envelope · catalog evolvability · M6/M7 absorbed · continuité MUST · v2.6 process-only

### B. FUNCTIONALLY DERIVED — no new decision

- Boucle A–W · objets §6 · invariants BR-PC-* · SUCCESS/STOP/FAIL semantics · fail-closed recovery · Evidence loop · A11Y functional reqs · CA-PC-* · profil Standard default · Critical explicit

### C. OPEN / MORRIS DECISION REQUIRED

| ID | Sujet | Options | Recommandation |
| --- | --- | --- | --- |
| **MD-C2-01** | Barre preuve généricité (U-03/U-05) | A 3 cas · B 5 cas · C 7+ | **B** — §12.3 |
| **MD-C2-02** | Profondeur PJ intake (U-01) | Référence seule · upload limité · lien externe gated | Référence + provenance MUST · upload **SHOULD** — détail MD-C2-02 |
| **MD-C2-03** | Progressive disclosure EC default (U-04) | Summary default · full flat · layered | **Summary default + expand** |
| **MD-C2-04** | Exposition profil Capitalization vs type cycle | Distinct UI label · type only | Distinct label si confusion observée PRE-M6 |

### D. RESERVES

- PRE-M6 presentation ≠ final Product Experience
- ProjectTrajectory Memory runtime · cible durable C1
- Confirmation process-local → sémantique consommée à implémenter
- Roadmap stale blocks (repo coherence reserves) — **non corrigés ce cycle**
- runtime v3 NON ADOPTED

### E. FUTURE / OUT OF SCOPE

- Architecture technique · persistence · API · Figma · backlog · Delivery · REAL · runtime v3 ADOPTED

---

## 21. Requalification trajectoire

### 21.1 Ce que C2 a fermé

- Modèle comportemental testable · parcours · objets · états · règles · authority · terminals · recovery · CA
- Unknowns U-01–U-05 **qualifiés fonctionnellement** · arbitrages résiduels isolés §20C

### 21.2 Ce qui bloque encore

- Décisions Morris §20C (4 items) · pas bloquant revue C2 globale
- Aucune représentation composants · UX visuelle · stories delivery

### 21.3 Capacités suivantes — candidates

| Capacité | Dépendance | Pourquoi | C2 suffisant ? |
| --- | --- | --- | --- |
| **Architecture fonctionnelle** | Frontières modules · responsabilités runtime | Si decoupage structurant requis avant UX/backlog | **Partiellement** — comportements définis · frontières composants pas |
| **UX / Product Experience** | Parcours · CA · A11Y functional | Pilote-facing flows · progressive disclosure EC | **Oui** après MD-C2-03 |
| **Backlog / slicing** | CA · MUST map | Delivery incrémental | Après UX ou archi fct si retenue |
| **Clarification Morris only** | MD-C2-* | 4 arbitrages | Peut précéder tout |

### 21.4 Recommandation

```text
MORRIS C2 FUNCTIONAL REVIEW
  → trancher MD-C2-01…04 si nécessaire
  → REQUALIFY: Architecture fonctionnelle OU UX selon priorité Morris
     (recommandation: UX/Product Experience SI Morris juge frontières runtime déjà suffisantes depuis M1–M5 ;
      Architecture fonctionnelle SI decoupage explicite requis avant maquettes)
  → aucun C3/Delivery automatique
```

### 21.5 Gate Morris requis

**MORRIS C2 FUNCTIONAL REVIEW** → puis **GO / NO-GO** capacité suivante · **≠** autorisation Delivery.

---

## Anti-claims finaux

Ce document **ne dit pas** :

- C2 validé par Morris · intégré Git · mergé
- architecture · persistence · schema · API choisis
- UX/Figma · backlog · Delivery autorisés
- runtime v3 ADOPTED · READY FOR DELIVERY
- C3/C4/C5 automatiques
- Morris persona runtime
- 15 cycles = invariant · M6/M7 forward
- v2.6 = doctrine Studio
- REAL autorisé

---

*SFIA Studio — Product Completion — Cycle 2 Conception fonctionnelle — CANDIDATE FOR MORRIS REVIEW — GO MORRIS C2 CONSUMED — NO DELIVERY — RUNTIME V3 NON ADOPTED*
```

---
## 10. Review Handoff

*(post-publication)*

---
## 11. Verdict

**READY FOR MORRIS C2 FUNCTIONAL REVIEW** — PRODUCT COMPLETION C2 FUNCTIONAL MODEL CANDIDATE COMPLETE — NO DELIVERY — NO NEXT CYCLE AUTHORIZED

Arbitrages MD-C2-01…04 ouverts · **non bloquants** pour revue Morris globale · peuvent être tranchés pendant ou après revue.

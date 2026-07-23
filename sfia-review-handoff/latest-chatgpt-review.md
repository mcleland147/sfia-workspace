# Review pack FULL — Conception fonctionnelle SFIA Studio v3-native Option A

## 1. Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 21:09:46 CEST (+0200) |
| Cycle | 2 — Conception fonctionnelle |
| Profil | Critical |
| Gate | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| Branche | `design/sfia-studio-v3-native-option-a-functional` (**non poussée**) |
| HEAD initial | `56ddf32e811f0f5f8b82f31400da18ceecf3bc30` |
| HEAD final | `e22bc243c8854df4e9422fafe46e92135fe242e9` |
| Base | `origin/main` @ `56ddf32e811f0f5f8b82f31400da18ceecf3bc30` |
| Audit handoff blob | `aae4438e68e436e2b7203cbf0518ebbdd1308048` (présent) |
| CKC guidance | `method/.../pilots/02-conception-fonctionnelle.md` · guidance repo only · **pas** SoT Studio |
| Push / PR / merge projet | **non** |

## 2. Local Git Truth Check

OK — base `56ddf32` · framing 30–37 présents · handoff audit blob OK · worktree propre hors review pack · pas de locks.

Status final :

```
## design/sfia-studio-v3-native-option-a-functional...origin/main [ahead 1]
```

## 3. Décisions Morris consommées

ARB-V3-01…06 tracées dans README pack + doc `10`.

## 4. Sources consultées

- Framing 30–37 (+ 01–29 utiles D1–D8/E0–E4)
- Handoff audit `aae4438…` / commit `60378c6`
- UX 87–89 (worktree `7dc6f9f`) contraintes CC-D*
- Actifs app platform/ops1/d1 (lecture) · design d1-* conventions
- CKC pilote conception fonctionnelle

## 5. Fichiers créés

```
A	projects/sfia-studio/sfia-v3-design/README.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/01-functional-scope-and-user-outcome.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/02-end-to-end-functional-flow.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/03-functional-components-and-responsibilities.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/04-living-project-state-functional-contract.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/05-knowledge-context-and-ckc-resolution.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/06-trajectory-decision-and-confirmation-model.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/07-execution-contract-and-evidence-flow.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/08-functional-rules-errors-and-stop-conditions.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/09-existing-assets-reuse-and-replacement-map.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/10-functional-validation-and-decision-pack.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/README.md
```

```
 projects/sfia-studio/sfia-v3-design/README.md      |  10 ++
 .../01-functional-scope-and-user-outcome.md        |  69 +++++++++++++
 .../02-end-to-end-functional-flow.md               | 115 +++++++++++++++++++++
 ...3-functional-components-and-responsibilities.md | 112 ++++++++++++++++++++
 .../04-living-project-state-functional-contract.md |  83 +++++++++++++++
 .../05-knowledge-context-and-ckc-resolution.md     |  72 +++++++++++++
 ...6-trajectory-decision-and-confirmation-model.md |  61 +++++++++++
 .../07-execution-contract-and-evidence-flow.md     |  90 ++++++++++++++++
 ...-functional-rules-errors-and-stop-conditions.md |  95 +++++++++++++++++
 ...09-existing-assets-reuse-and-replacement-map.md |  45 ++++++++
 .../10-functional-validation-and-decision-pack.md  |  90 ++++++++++++++++
 .../sfia-v3-design/v3-native-option-a/README.md    |  49 +++++++++
 12 files changed, 891 insertions(+)
```

```
e22bc24 docs(sfia-studio): design v3-native option A functional flow
```

## 6. Validations

- `git diff --check` PASS
- scope design only PASS
- liens pack OK
- anti-claims prématurés absents (mentions = interdictions)
- cohérence Option A / F01–F15 / ARB-V3 / UX CC-D* documentée
- aucun schema/code

## 7. Synthèses structurantes

### Flux Option A
intention → DoctrinePackage → qualification → CKC → clarification → LPS → trajectoire → options/reco → HumanDecision → N1–N3 → ExecutionContract → exécution → preuves → LPS

### Composants
20 composants (Conversation Orchestrator … Audit/Provenance) — doc `03`.

### KEEP / ADAPT / REWORK / REPLACE / REMOVE / HISTORICAL
Voir doc `09` (matrice complète).

### Décisions candidates FD-OA-01…06
Soumises Morris — doc `10`.

### Réserves FD-R01…R06 · Inconnues U-OA-01…04

## 8. Actions non exécutées

push projet · PR · merge · code · framing · modeled · delivery · UX 87–89 · method/ · prompts · coupure runtime

## 9. Contenu complet — index design racine

### Fichier : `projects/sfia-studio/sfia-v3-design/README.md`

````markdown
# SFIA Studio — Design packs

| Pack | Statut | Notes |
|------|--------|-------|
| `d1-project-framing/` | historique D1 | Conception implémentation D1 (pré-exclusivité v3) |
| `d1-ai-guided-intake-routing/` | historique D1 | Intake / routing |
| `d1-ux-ui/` | historique D1 | UX D1 |
| **`v3-native-option-a/`** | **conception fonctionnelle candidate** | Tranche verticale Option A · doctrine Studio v3 exclusive |

Doctrine produit de référence : `projects/sfia-studio/sfia-v3-framing/` (VALIDATED).
````

### Fichier : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/README.md`

````markdown
# SFIA Studio v3-native — Option A — Conception fonctionnelle

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate consommé** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Décisions** | ARB-V3-01…06 |
| **Doctrine** | SFIA Studio v3 exclusive (VALIDATED framing 30–37) |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré · Pas v2.6 removed |
| **Code / schemas / SQL** | **Interdits** dans ce cycle |

## Objectif

Concevoir la tranche verticale :

intention → DoctrinePackage → qualification → CKC → clarification → Living Project State → trajectoire → options/recommandation → HumanDecision → confirmation N1–N3 → ExecutionContract → exécution → preuves → mise à jour LPS

## Index

| # | Fichier |
|---|---------|
| 01 | Scope & outcome utilisateur |
| 02 | Flux de bout en bout |
| 03 | Composants & responsabilités |
| 04 | Contrat fonctionnel Living Project State |
| 05 | Connaissance, DoctrinePackage & CKC |
| 06 | Trajectoire, décision & confirmations |
| 07 | ExecutionContract & preuves |
| 08 | Règles, erreurs & stop conditions |
| 09 | Réutilisation / remplacement des actifs |
| 10 | Validation & decision pack |

## Principes (ARB-V3)

1. Tranche = Option A (ARB-V3-01).
2. Cycles aval rejouables selon besoin (ARB-V3-02).
3. ExecutionContract structuré = natif ; Markdown Cursor = adaptateur (ARB-V3-03).
4. Cible : plus de lecture runtime `method/sfia-fast-track/**` ni template Cursor comme SoT (ARB-V3-04) — coupure technique **après** composants de remplacement.
5. UX : conversation dominante, panneau vivant, épistémologie, N1–N3, gates, Project≠Cycle, CKC opaque (ARB-V3-05 / CC-D*).
6. harness historique ; OPS1/D1 = réutilisation ; MethodMode & badges v2.6 hors runtime cible (ARB-V3-06).

## Gate suivant candidat

`GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A`

## Verdict pack

**SFIA STUDIO V3-NATIVE OPTION A FUNCTIONAL DESIGN DOCUMENTED — MORRIS VALIDATION REQUIRED**
````

### Fichier : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/01-functional-scope-and-user-outcome.md`

````markdown
# 01 — Scope fonctionnel et outcome utilisateur

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate consommé** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Décisions** | ARB-V3-01…06 |
| **Doctrine** | SFIA Studio v3 exclusive (VALIDATED framing 30–37) |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré · Pas v2.6 removed |
| **Code / schemas / SQL** | **Interdits** dans ce cycle |
| **Document** | `01-functional-scope-and-user-outcome.md` |

## 1. Outcome utilisateur

Morris (ou décideur autorisé) peut, **dans une conversation dominante** :

1. exprimer une intention libre ;
2. voir le système résoudre un **DoctrinePackage v3** (fail-closed) ;
3. obtenir une qualification de cycle **proposée** (pas un menu obligatoire) ;
4. être guidé par un CKC **opaque** (détaillé ou synthétique intra-v3) ;
5. voir un **Living Project State** se construire dans le panneau vivant ;
6. recevoir une trajectoire **candidate** + options/recommandation ;
7. **décider** explicitement ;
8. confirmer selon N1–N3 ;
9. déclencher un **ExecutionContract** structuré ;
10. obtenir des **preuves** et un état projet mis à jour — **sans** clôturer automatiquement le projet.

## 2. Périmètre inclus (Option A)

- Chaîne fonctionnelle complète intention → preuves → LPS.
- Composants listés en `03`.
- Cas d’usage `08`/`10`.
- Cartographie actifs `09`.
- Implications UX fonctionnelles (sans contrat visuel).

## 3. Hors périmètre

- Code, schemas JSON/SQL, migrations, Figma, archi technique détaillée.
- Coupure technique immédiate de `method/` (après dispo composants — ARB-V3-04).
- Suppression fichiers v2.6 du repository.
- Adoption runtime / Delivery.

## 4. Acteurs

| Acteur | Autorité |
|--------|----------|
| Morris / HumanDecisionMaker | Décisions, gates, confirmations N2–N3, adoption |
| Utilisateur conversationnel | Intention, clarifications, réponses |
| Studio (système) | Propose, qualifie, prépare, refuse fail-closed |
| Agent cognitif (GPT) | Analyse / questions / options — **aucune** mutation structurante |
| Agent d’exécution (Cursor/Runtime) | Exécute **uniquement** sous ExecutionContract confirmé |
| Auditeur | Lit preuves / ReviewBundle |

## 5. Objets métier centraux

Project · CycleType · CycleInstance · DoctrinePackageRef · CkcResolution · LivingProjectState · ProjectTrajectory · Observation/Hypothesis/Option/Recommendation/HumanDecision · Confirmation · ExecutionContract · Evidence · ReviewBundle · DebtItem · Contradiction · ProvenanceRecord · AgentCapability

## 6. Critères de succès du cycle de conception

- Flux Option A sans lecture runtime v2.6 comme doctrine.
- Project ≠ Cycle explicite.
- CKC jamais formulaire.
- ExecutionContract ≠ prompt Markdown.
- Pack exploitable pour architecture fonctionnelle sans invention majeure.

## 7. Maturité de ce document

**DOCUMENTED** (conception candidate) — pas VALIDATED Morris.
````

### Fichier : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/02-end-to-end-functional-flow.md`

````markdown
# 02 — Flux fonctionnel de bout en bout (Option A)

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate consommé** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Décisions** | ARB-V3-01…06 |
| **Doctrine** | SFIA Studio v3 exclusive (VALIDATED framing 30–37) |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré · Pas v2.6 removed |
| **Code / schemas / SQL** | **Interdits** dans ce cycle |
| **Document** | `02-end-to-end-functional-flow.md` |

## Chaîne canonique

```
1 Intention
2 DoctrinePackage resolve (fail-closed)
3 Qualification cycle/profil/blocs (proposée)
4 CKC resolve (detailed|synthetic|absent→synthetic silencieux)
5 Clarification conversationnelle
6 Living Project State update
7 Trajectoire candidate
8 Options + recommandation (ou abstention)
9 HumanDecision
10 Confirmation N1–N3
11 ExecutionContract (natif)
12 Exécution agent (adaptateur MD éventuel)
13 Preuves / ReviewBundle
14 Mise à jour LPS + replanif éventuelle
```

Aucune étape n’implique de charger `method/sfia-fast-track/**` ni le template Cursor comme doctrine.

## Étape 1 — Intention

**Entrées :** message libre · pièces/sources · hint projet existant/nouveau.
**Sorties :** IntentionObserved · Hypothesis[] · Ambiguity[] · confidence · clarificationNeeded.
**Règles :** pas de création Project complète automatique · phrase ≠ décision.

## Étape 2 — DoctrinePackage

**Entrées :** pin projet ou défaut Studio v3.
**Sorties :** packageId · version · digest · allowlist sources · failurePolicy.
**Si absent/mismatch/obsolète :** `DOCTRINE_UNRESOLVED` / `CONTEXT_STALE` — **stop** · **aucun** fallback v2.6.

## Étape 3 — Qualification

**Sorties :** CycleType candidat(s) · profil · lenses · risques · maturité preuve.
**Statuts :** `proposed` → `human_ack` (si requis) → `active_for_cycle`.
Requifiable à tout moment avant ExecutionContract.
Cycle ≠ sélection menu obligatoire.

## Étape 4 — CKC

**Résultats :** `detailed` | `synthetic` | `unavailable→synthetic silencieux` (CC-D12).
Trace interne : path/version/digest/statut.
UI : **jamais** checklist 25 sections / dimensions brutes.
Autorité exécution : **aucune**.

## Étape 5 — Clarification

Questions adaptatives groupées · ordre risque-first · réponses partielles OK · contradictions → Contradiction Manager.
Seuil : assez d’info pour LPS + trajectoire candidate **ou** stop `INSUFFICIENT_EVIDENCE` / clarification continue.

## Étape 6 — LPS

Création/màj versionnée du Living Project State (voir `04`).
Panneau vivant = projection **état utile** (CC-D03).

## Étape 7 — Trajectoire candidate

ProjectTrajectory `status=candidate` jusqu’à HumanDecision.
Jamais auto-exécutée.

## Étape 8 — Options / recommandation

Épistémologie stricte (`06`). Recommandation facultative si preuves insuffisantes → abstention explicite.

## Étape 9 — HumanDecision

Acte explicite · portée · réserves · réversibilité · effets LPS.
Amendement / remplacement versionnés.

## Étape 10 — Confirmation N1–N3

Selon impact (voir `06`). Pas de confirmation implicite via CTA générique (CC-D05/D06).

## Étape 11 — ExecutionContract

Contrat natif structuré (voir `07`). Export Markdown Cursor = **adaptateur** optionnel post-contrat.

## Étape 12 — Exécution

Capability + authority checks · prepare · run · timeout · retry borné · cancel · fail · escalate.
Pas d’archi technique ici.

## Étape 13 — Preuves

Evidence liés contrat+décision · ReviewBundle · fraîcheur · complétude (`EVIDENCE_INCOMPLETE` sinon).

## Étape 14 — Mise à jour

LPS · CycleInstance · dette · trajectoire · contradictions · next step.
**Merge/preuves ≠ fin Project.**

## Transitions clés (anti-claims)

| De | Vers | Condition |
|----|------|-----------|
| Recommendation | HumanDecision | Acte humain explicite |
| Trajectory candidate | validated | HumanDecision |
| Contract draft | confirmed | Confirmation requise |
| Contract confirmed | executing | Capability+authority OK |
| executing | completed/failed | Evidence |
````

### Fichier : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/03-functional-components-and-responsibilities.md`

````markdown
# 03 — Composants fonctionnels et responsabilités

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré · Pas schemas |
| **Document** | `03-functional-components-and-responsibilities.md` |

Légende maturité actuelle : **DOCUMENTED** (ce pack) · runtime existant = source **ADAPT/REPLACE** (`09`).

## Catalogue

### 1. Conversation Orchestrator
- **Rôle :** surface dominante ; route messages ; maintient fil ; invoque sous-composants.
- **In :** UserMessage, sessionId, projectId?
- **Out :** ConversationTurn, UI directives.
- **Limites :** ne décide pas · ne mute pas LPS structurant sans Confirmation.
- **Réutilisation :** OPS1 conversation service · D1 intake — **ADAPT**.

### 2. Intent Understanding
- **Rôle :** IntentionObserved, ambiguïtés, hypothèses, confiance.
- **In :** message, pièces, LPS partiel.
- **Out :** IntentAnalysis.
- **Autorité :** cognitive only.
- **Réutilisation :** D1 analyzeIntent — **ADAPT** (sans MethodMode).

### 3. Doctrine Resolver
- **Rôle :** résoudre DoctrinePackage v3 piné ; digests ; allowlist.
- **In :** project pin / default Studio.
- **Out :** DoctrinePackageRef | DOCTRINE_UNRESOLVED.
- **Règle :** fail-closed · **interdit** method/ v2.6.
- **Réutilisation :** remplacer `canonicalPaths/sourceLoader/contextResolver` — **REPLACE**.

### 4. Knowledge and Context Resolver
- **Rôle :** assembler contexte autorisé (package + LPS + preuves Git) avec provenance.
- **Out :** ResolvedContext.
- **Réutilisation :** parts sessionContext — **REWORK**.

### 5. CKC Resolver
- **Rôle :** detailed/synthetic/absent→synthetic silencieux ; jamais UI brute.
- **Out :** CkcResolution (status, version, digest, guidance opaque).
- **Autorité :** aucune exécution.
- **Réutilisation :** aucune runtime — **REPLACE** (créer).

### 6. Epistemic State Manager
- **Rôle :** tags Observation/Hypothesis/Option/Recommendation/Decision/Reserve/Risk/Evidence/Claim.
- **Transitions :** strictes (`06`).
- **Réutilisation :** OPS1 proposal/gate labels — **ADAPT**.

### 7. Contradiction Manager
- **Rôle :** détecter C-SRC…C-TRAJ-DEP ; sévérité ; gate si structurante.
- **Out :** Contradiction[] · CONTRADICTION_OPEN.
- **Réutilisation :** quasi absent — **REPLACE**.

### 8. Living Project State Manager
- **Rôle :** CRUD versionné LPS ; invariants ; projection panneau.
- **Réutilisation :** D1 project tables partielles — **REWORK** vers LPS.

### 9. Trajectory Engine
- **Rôle :** ProjectTrajectory candidate/validated ; replanif gouvernée.
- **Réutilisation :** schema modeled trajectory — **ADAPT** concept ; runtime **REPLACE**.

### 10. Recommendation Engine
- **Rôle :** options + reco ou abstention.
- **Limite :** reco ≠ décision.
- **Réutilisation :** GPT propose OPS1/D1 — **ADAPT**.

### 11. Human Decision Manager
- **Rôle :** HumanDecision create/amend/supersede ; effets LPS.
- **Réutilisation :** OPS1 gate_decisions — **ADAPT** vers objet unifié.

### 12. Confirmation Manager
- **Rôle :** N1/N2/N3 ; expiration ; annulation.
- **Réutilisation :** D1 confirmations partielles — **ADAPT** (unifier CC-D06).

### 13. Execution Contract Builder
- **Rôle :** draft→proposed→confirmed ExecutionContract natif.
- **Réutilisation :** OPS1 ExecutionContract — **ADAPT** (ARB-V3-03).

### 14. Agent Capability Resolver
- **Rôle :** capability/authority matrix ; refuse CAPABILITY_MISSING / AUTHORITY_DENIED.
- **Réutilisation :** allowlists OPS1 — **ADAPT** vers AgentCapability.

### 15. Execution Adapter
- **Rôle :** exécuter contrat ; export MD Cursor **adaptateur** optionnel.
- **Réutilisation :** cursorExecutionAdapter + instantiator — **ADAPT** (MD ≠ natif).

### 16. Evidence Manager
- **Rôle :** Evidence links ; complétude ; fraîcheur.
- **Réutilisation :** execution reports OPS1 — **ADAPT**.

### 17. ReviewBundle Manager
- **Rôle :** bundle hybride + handoff export/résilience (D2).
- **Réutilisation :** patterns review pack — **ADAPT**.

### 18. Debt Manager
- **Rôle :** DebtItem open/accepted/paid.
- **Réutilisation :** absente — **REPLACE**.

### 19. Maturity and Anti-Claim Evaluator
- **Rôle :** maturité distribuée ; refuse claims non prouvés.
- **Réutilisation :** absente runtime — **REPLACE**.

### 20. Audit and Provenance Manager
- **Rôle :** append-only events conceptuels ; provenance hierarchy.
- **Réutilisation :** d1_audit_events / OPS1 journal — **ADAPT**.

## Événements fonctionnels (minimum)

IntentCaptured · DoctrineResolved · DoctrineFailed · CycleQualified · CkcResolved · ClarificationAsked · LpsUpdated · TrajectoryProposed · OptionsPresented · DecisionRecorded · ConfirmationRequested · ConfirmationGranted · ContractBuilt · ExecutionStarted · ExecutionCompleted · ExecutionFailed · EvidenceAttached · ReplanRequired · StopRaised
````

### Fichier : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/04-living-project-state-functional-contract.md`

````markdown
# 04 — Contrat fonctionnel Living Project State

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré · Pas schemas |
| **Document** | `04-living-project-state-functional-contract.md` |
| **Fondation** | V3-F02 |

## 1. Définition

État fonctionnel **central** du Project, versionné, à provenance, projeté dans le panneau vivant (CC-D03).
**Project ≠ Cycle** (CC-D13) · CycleInstance ⊆ LPS.cycles.

## 2. Domaines d’état (contenu minimal)

| Domaine | Contenu |
|---------|---------|
| Identité | projectId, name, owner, workspaceRef |
| Doctrine | doctrinePackageRef (id, version, digest) — **obligatoire** quand actif |
| Objectifs / contexte / périmètre / contraintes | tagués épistémiquement |
| Parties prenantes | actors/roles |
| Épistémique | observations, hypotheses, options, recommendations, decisions, reserves, risks |
| Trajectoire | ref ProjectTrajectory (candidate|validated) |
| Cycles | active CycleInstance · completed · proposed |
| Gates | open/passed |
| Dette | DebtItem[] |
| Preuves / livrables / actions | Evidence links |
| Next step | phrase unique |
| Maturité | claims distribués + preuves |
| Historique | versions LPS + timestamps |
| Provenance | sourceRefs par champ structurant |

**Interdit :** MethodMode `SFIA_V2_6|TRANSITION|V3_CANDIDATE` · badge doctrine v2.6 · copies doctrine method/.

## 3. Ownership

| Domaine | Owner écriture |
|---------|----------------|
| Décisions / trajectoire validée | Human Decision Manager |
| Hypothèses / options / reco | Epistemic + Recommendation (statut non décision) |
| Doctrine pin | Doctrine Resolver + confirmation si changement |
| Preuves | Evidence Manager |
| Dette | Debt Manager (+ acceptation Morris si structurante) |

## 4. Persister vs temporaire

**Persister :** identité · doctrinePackageRef · décisions · gates · trajectoire validée · réserves acceptées · preuves · digests · audit · versions LPS.
**Ne pas persister :** raisonnement brut · scores non explicables · prompts temporaires non audit · dimensions CKC brutes · reco **comme** décisions · hypothèses **comme** faits.

## 5. Visibilité panneau (état utile)

Objectifs · cycle actif (anti-claim) · trajectoire résumé · décisions ouvertes/validées · gates · risques/réserves · prochaine étape · preuves clés.
**Pas :** CKC brut · dumps provenance complets · MethodMode.

## 6. Versioning & statuts

LPS version monotoone · items : `active` | `stale` | `superseded`.
Nouvelle version si : décision · pin doctrine · trajectoire validée · preuve structurante · replanif validée.

## 7. Invariants

1. doctrinePackageRef résolu ou projet en stop doctrine.
2. recommendation.status ≠ decided.
3. CycleInstance ne clôture pas Project.
4. Contradiction blocking ouverte ⇒ pas d’ExecutionContract confirmé.
5. Claim maturité ⇒ Evidence liée.

## 8. Critères

**Création :** après Intent + DoctrineResolved (+ confirmation N2 si nouveau Project).
**Màj :** events `03`.
**Clôture Project :** HumanDecision dédiée seulement — jamais auto post-merge/exec.

## 9. Confidentialité / rétention (conceptuel)

Secrets hors LPS · rétention preuves selon politique projet · panneau = sous-ensemble non sensible.

## 10. Maturité

Contrat **DOCUMENTED** · schema/runtime **non**.
````

### Fichier : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/05-knowledge-context-and-ckc-resolution.md`

````markdown
# 05 — Connaissance, DoctrinePackage et résolution CKC

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré · Pas schemas |
| **Document** | `05-knowledge-context-and-ckc-resolution.md` |
| **Fondations** | V3-F01 · V3-F03 · V3-F07 |

## 1. DoctrinePackage (fonctionnel)

Unité doctrinale versionnée **Studio-only**.

| Champ conceptuel | Rôle |
|------------------|------|
| packageId / version / digest | Pin |
| doctrineRoot | `sfia-v3-*` autorisés |
| documentsCanoniques | index |
| ckcAvailable | detailed/synthetic map |
| fallbackRules | **intra-package only** |
| consumerAllowlist | Studio |
| sourcesInterdites | `method/sfia-fast-track/**` · template Cursor comme SoT · PGE comme moteur |
| failurePolicy | fail-closed |

### Résolution

1. Lire pin LPS/projet ou défaut Studio v3.
2. Vérifier digests.
3. Échec → `DOCTRINE_UNRESOLVED` / `CONTEXT_STALE`.
4. **Jamais** bascule v2.6.

## 2. Contexte résolu

Hiérarchie d’autorité (V3-F07) : preuves Git/runtime > décisions Morris > LPS validé > doctrine package > CKC > docs projet non validés > conversation > reco > hypothèses.

v2.6 **absente** de la hiérarchie de consommation.

## 3. CKC Resolver (natif Studio)

| Statut | Comportement UI | Trace |
|--------|-----------------|-------|
| detailed | influence questions (opaque) | path/version/digest |
| synthetic | idem, carte synthétique package | status=synthetic |
| unavailable | → synthetic silencieux (CC-D12) ou `CKC_UNAVAILABLE` si même synthetic absent | |

**Interdits :** formulaire CKC · autorité d’exécution · invention de CKC détaillé · fallback doctrinal v2.6.

## 4. Influence sur clarification

CKC fournit dimensions/risques/critères **en interne** → Conversation Orchestrator pose questions métier groupées.
Utilisateur ne voit pas « section CKC 14 ».

## 5. Qualification cycle

Intent + package + (optionnel) LPS → CycleType[] proposés · profil · lenses.
Qualification `proposed` jusqu’à ack humain si structurante.
Requifiable avant contrat.

## 6. Remplacement runtime actuel

| Actuel | Cible |
|--------|-------|
| `SFIA_CANONICAL_CORE_PATHS` method/ | DoctrinePackage allowlist |
| `SFIA_METHOD_BASELINE = v2.6` | package version Studio v3 |
| PERMANENT_CORE « consomme v2.6 » | règles package + anti-claims |
| template path comme doctrine | adaptateur post-ExecutionContract seulement |

## 7. Maturité

DOCUMENTED · resolver non IMPLEMENTED.
````

### Fichier : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/06-trajectory-decision-and-confirmation-model.md`

````markdown
# 06 — Trajectoire, décision humaine et confirmations N1–N3

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré · Pas schemas |
| **Document** | `06-trajectory-decision-and-confirmation-model.md` |
| **Fondations** | V3-F04 · F05 · F06 · F09 · CC-D05 · CC-D06 |

## 1. Épistémologie (obligatoire)

| Type | Devient décision ? |
|------|--------------------|
| Observation | Non |
| Fact | Non (sauf base de décision) |
| Hypothesis | Non |
| Option | Non |
| Recommendation | Non |
| HumanDecision | **Oui** (acte explicite) |
| Reserve / Risk / Evidence / Claim | Non |

Phrase utilisateur ≠ HumanDecision. CTA générique ≠ validation (CC-D05).

## 2. ProjectTrajectory

Contenu : cycles proposés/actifs/clôturés · dépendances · entry/exit · branches · gates · réserves · motifs replanif.
`candidate` jusqu’à HumanDecision → `validated`.
Auto-exécution : **interdite**.

### Replanification (V3-F09)

événement → impact → trajectoire révisée candidate → options → reco → gate si structurant → LPS.

## 3. HumanDecision

Champs : decisionId · actor · object · optionId? · rationale · reserves · scope · reversible · evidenceRefs · supersedes? · timestamp · effectsOnLps.

Amendement = nouvelle version + lien superseded.

## 4. Confirmations N1–N3 (CC-D06)

| Niveau | Déclencheurs typiques | UI fonctionnelle | Annulation |
|--------|----------------------|------------------|------------|
| **N1** | écriture locale réversible · artefact temporaire | légère / inline | immédiate |
| **N2** | création Project · activation cycle · trajectoire validée · pin doctrine | dialog / plein cadre résumé effets | avant confirm |
| **N3** | push/PR/merge · delete critique · action irréversible · chemin protégé · exec externe structurante | modale renforcée + gate visible | avant confirm ; post = rollback prouvé seulement |

**Informations requises :** effets · périmètre · réversibilité · gate · preuves attendues.
**Expiration :** confirmation périmée → `CONFIRMATION_REQUIRED` renew.
**Implicite :** interdit.

## 5. Gates

Visibles panneau (métier + ID SFIA secondaire).
Contradiction structurante / décision absente → `DECISION_REQUIRED` / gate Morris.

## 6. Maturité

DOCUMENTED.
````

### Fichier : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/07-execution-contract-and-evidence-flow.md`

````markdown
# 07 — ExecutionContract et flux de preuves

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré |
| **Document** | `07-execution-contract-and-evidence-flow.md` |
| **Fondations** | V3-F11 · F12 · F14 · ARB-V3-03 |

## 1. ExecutionContract = contrat natif Studio

**Pas** un prompt Markdown. Markdown Cursor = **adaptateur d’export** après contrat confirmé (ARB-V3-03).

### Contenu fonctionnel minimal

| Champ | Rôle |
|-------|------|
| contractId / correlationId | Identité |
| intentRef / decisionRef / lpsVersion | Liens |
| action / target / scope | Quoi |
| inputs / expectedOutputs | Contrats I/O |
| requiredCapabilities / agentId | Qui |
| authority / constraints | Autorisation |
| stopConditions | SC-* |
| reversibility / confirmationLevel | N1–N3 |
| evidenceExpected | Checklist |
| idempotencyKey | Reprise sûre |
| status | cycle de vie |
| provenance | digests doctrine + sources |

### Cycle de vie

`draft` → `proposed` → `confirmed` → `executing` → `completed` | `failed` | `cancelled` | `superseded`

Transitions :
- proposed→confirmed : Confirmation Manager + HumanDecision liée.
- confirmed→executing : Capability+Authority OK.
- executing→completed : Evidence complète minimale.
- failed : EVIDENCE of failure + LPS reserve/debt ; pas de rollback auto non prouvé.
- superseded : nouvel contrat après replan/décision.

## 2. Réutilisation OPS1 (ARB-V3-03)

| Pattern OPS1 | Traitement |
|--------------|------------|
| ExecutionContract structuré + statuses | **ADAPT** |
| worktree / postcheck / revalidation | **ADAPT** (archi plus tard) |
| allowlist deny-default | **ADAPT** → AgentCapability |
| actionGate GO/NO-GO | **ADAPT** → HumanDecision+Confirmation |
| cursorPromptInstantiator template path | **ADAPT** comme adaptateur **seulement** · retirer rôle SoT |
| lecture method/ dans contexte | **REMOVE-FROM-RUNTIME** |

## 3. Exécution (fonctionnel)

1. Resolve agent + capabilities.
2. Deny si `CAPABILITY_MISSING` / `AUTHORITY_DENIED`.
3. Prepare (idempotent).
4. Execute avec timeout.
5. Retry borné seulement si safe+idempotent.
6. Cancel/stop → status cancelled + evidence.
7. Escalate à Morris si irréversible partiel.

## 4. Evidence

| Attribut | Contenu |
|----------|---------|
| evidenceId | — |
| type | file/log/test/capture/report |
| refs | paths/digests |
| freshness | timestamp |
| completeness | complete|incomplete |
| links | contractId, decisionId, lpsVersion |

`EVIDENCE_INCOMPLETE` bloque claim completed/adopted.

## 5. ReviewBundle

Hybride (D2) : contenu cycle + export handoff résilience.
Rattaché Project/CycleInstance/Contract.
Synthèse seule ≠ bundle complet (V3-F14).

## 6. Résultat → LPS

completed/failed met à jour : actions · preuves · dette · next step · éventuellement Trajectory candidate replan.

## 7. Maturité

DOCUMENTED · non IMPLEMENTED v3-native.
````

### Fichier : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/08-functional-rules-errors-and-stop-conditions.md`

````markdown
# 08 — Règles, erreurs, stop conditions et cas d’usage

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré |
| **Document** | `08-functional-rules-errors-and-stop-conditions.md` |

## 1. Règles fonctionnelles obligatoires

1. Project ≠ Cycle · CycleType ≠ CycleInstance.
2. Conversation ≠ décision.
3. CKC ≠ formulaire.
4. Recommandation ≠ décision.
5. Validation doctrine ≠ runtime adopté.
6. ExecutionContract ≠ prompt Markdown.
7. Preuve ≠ claim.
8. Merge ≠ fin projet/cycle.
9. Absence de source ≠ invention.
10. Fallback CKC **intra-v3** uniquement.
11. DoctrinePackage non résolu = stop.
12. Contradiction structurante = gate Morris.
13. Mutation structurante = confirmation.
14. Agent sans capacité/autorité = interdit.
15. Action irréversible = N3.
16. Erreur d’exécution ≠ rollback automatique non prouvé.
17. Apprentissage ≠ modif auto doctrine/CKC.
18. Pas de MethodMode / badges v2.6 dans runtime cible.
19. Pas de lecture runtime `method/sfia-fast-track/**` ni template comme SoT.
20. Composer toujours disponible hors modal stricte (UX).

## 2. Taxonomie d’erreurs / stops

| Code | Déclencheur | Visibilité | Permis | Interdit | Reprise | Gate |
|------|-------------|------------|--------|----------|---------|------|
| DOCTRINE_UNRESOLVED | package absent/mismatch | bloquant clair | corriger pin / stop | continuer cycle | pin valide | éventuel |
| CONTEXT_STALE | digest obsolète | bloquant | refresh | exec | re-resolve | — |
| CKC_UNAVAILABLE | même synthetic absent | bloquant rare | stop / attendre package | inventer CKC | package update | — |
| CONTRADICTION_OPEN | C-* blocking | panneau + fil | clarifier | confirm contrat | resolve/gate | Morris si struct |
| INSUFFICIENT_EVIDENCE | seuil non atteint | questions | clarifier | décider struct | plus d’info | — |
| DECISION_REQUIRED | acte humain manquant | gate visible | décider/refuser | exec | HumanDecision | oui |
| CONFIRMATION_REQUIRED | N-level pending/expiré | modal | confirmer/annuler | mute | renew | selon N |
| CAPABILITY_MISSING | agent incapable | erreur métier | autre agent / réduire | forcer | — | — |
| AUTHORITY_DENIED | hors autorité | erreur | escalate | bypass | — | Morris |
| EXECUTION_FAILED | run fail | rapport | retry borné / replan | claim success | evidence fail | — |
| EXECUTION_TIMEOUT | timeout | rapport | retry/cancel | ignorer | — | — |
| EVIDENCE_INCOMPLETE | preuves manquantes | QA | compléter | completed claim | attach | — |
| STATE_CONFLICT | versions LPS conflict | stop | reconcile | overwrite silencieux | — | éventuel |
| REPLAN_REQUIRED | événement structurant | panneau | replan candidate | exec ancienne traj | F09 | si struct |

## 3. Cas d’usage (24) — fiche courte

Format : préconditions → déclencheur → étapes → résultat → LPS → décisions → erreurs → preuves → anti-claims.

1. **Intention claire** — new session → E1–E8 rapide → LPS draft → pas de Project auto.
2. **Intention ambiguë** — clarifications → pas de trajectoire validée.
3. **Match projet existant** — propose link · N2 confirm · LPS load pin doctrine.
4. **Projet nouveau** — N2 create · doctrine pin · LPS v1.
5. **CKC detailed** — opaque guidance · trace digest.
6. **CKC synthetic** — silencieux UI · status synthetic.
7. **CKC absent** — synthetic fallback ; si impossible `CKC_UNAVAILABLE`.
8. **DoctrinePackage indisponible** — `DOCTRINE_UNRESOLVED` stop · pas v2.6.
9. **Contradiction faible** — warning + réserve LPS.
10. **Contradiction structurante** — gate · pas contrat.
11. **Infos insuffisantes** — `INSUFFICIENT_EVIDENCE` · questions.
12. **Décision avec réserves** — HumanDecision + reserves persistées.
13. **Refus de décision** — recorded decline · trajectoire reste candidate.
14. **Modification décision** — supersede · LPS version++.
15. **Action N1** — confirm légère · contract · evidence.
16. **Action N2** — dialog effets · contract.
17. **Action N3** — modale+gate · contract · high evidence.
18. **Agent non autorisé** — `AUTHORITY_DENIED` / capability.
19. **Exécution échouée** — failed + debt/reserve · pas rollback magique.
20. **Reprise après échec** — nouvel attempt idempotent ou replan.
21. **Preuve incomplète** — `EVIDENCE_INCOMPLETE` · pas completed.
22. **Replanification** — F09 · candidate → décision.
23. **Clôture de cycle** — CycleInstance closed · Project **ouvert**.
24. **Poursuite projet** — next step · nouveau cycle proposé.

## 4. UX fonctionnelle (implications, pas visuel)

- Conversation dominante + panneau vivant (CC-D01/D03).
- Pas de stepper principal · pas multi-panneaux MVP.
- Gates/décisions/épistémologie visibles.
- Confirmations ciblées N1–N3.
- Erreurs métier + ID secondaire.
- Mobile : panneau sheet ; composer accessible.
- a11y : labels texte (pas couleur seule).
- Stop/reprise explicites.

## 5. Maturité

DOCUMENTED.
````

### Fichier : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/09-existing-assets-reuse-and-replacement-map.md`

````markdown
# 09 — Cartographie de réutilisation / remplacement

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré |
| **Document** | `09-existing-assets-reuse-and-replacement-map.md` |
| **Décision** | ARB-V3-06 |

## Matrice (une qualification principale)

| Actif existant | Qualification | Usage futur Option A |
|----------------|---------------|----------------------|
| OPS1 ExecutionContract | **ADAPT** | Base contrat natif |
| OPS1 actionGate / gate_decisions | **ADAPT** | HumanDecision + Confirmation |
| OPS1 allowlists | **ADAPT** | AgentCapability / path policy |
| OPS1 journal / session | **ADAPT** | Conversation + audit |
| OPS1 SQLite execution_* | **ADAPT** | Persistance contrats/preuves (modèle évolue) |
| D1 intake conversation | **ADAPT** | Intent + clarification entry |
| D1 Project foundation | **REWORK** | Vers LPS sans MethodMode |
| sessionContext Map | **REWORK** | ResolvedContext versionné |
| `canonicalPaths.ts` | **REPLACE** | DoctrinePackage allowlist |
| `sourceLoader.ts` | **REPLACE** | Package source loader |
| `contextResolver.ts` | **REPLACE** | Knowledge resolver v3 |
| MethodMode + DB check | **REMOVE-FROM-RUNTIME** | — |
| MethodModeBadge / badges v2.6 | **REMOVE-FROM-RUNTIME** | — |
| `cursorPromptInstantiator` | **ADAPT** | Adaptateur MD post-contrat |
| cursorExecutionAdapter | **ADAPT** | Execution Adapter |
| harness POC | **HISTORICAL-ONLY** | Preuve / non produit |
| Docs D1/OPS1 root 41–85 | **HISTORICAL-ONLY** | Patterns extractibles |
| Design packs d1-* | **HISTORICAL-ONLY** / **ADAPT** select | Ne pas cibler coexistence |
| UX 87–89 | **KEEP** (contraintes) | Intégrer main cycle UX dédié |
| Modeled schemas project/cycle/decision/review/trajectory | **ADAPT** | Enrichir ; retirer enum v2.6 runtime |
| Modeled HumanDecision schema | **ADAPT** | Brancher runtime futur |
| DoctrinePackage/LPS/CKC schemas | **REPLACE** (créer en modeled) | Après GO modeled |
| Framing 30–37 | **KEEP** | Doctrine |
| Framing 11 coexistence/cockpit | **ADAPT** (supersede lecture) | CC-D01 |
| README Studio Option C | **REWORK** (hors ce cycle) | Alignement doc post-arbitrate |
| Tests MethodMode / method paths | **REPLACE** | Tests exclusivité futurs |

## Règle

Aucune réutilisation ne réintroduit une coexistence doctrinale opérationnelle.
````

### Fichier : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/10-functional-validation-and-decision-pack.md`

````markdown
# 10 — Validation fonctionnelle et decision pack

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré |
| **Document** | `10-functional-validation-and-decision-pack.md` |

## 1. Décisions Morris déjà consommées (tracées)

| Id | Contenu |
|----|---------|
| ARB-V3-01 | Tranche Option A |
| ARB-V3-02 | Cycles aval rejouables |
| ARB-V3-03 | ExecutionContract ADAPT · MD = adaptateur |
| ARB-V3-04 | Coupure method/ + template SoT (après composants) |
| ARB-V3-05 | UX CC-D01/03/05/06/12/13 |
| ARB-V3-06 | harness historique · MethodMode/badges hors cible · OPS1/D1 réemploi |

## 2. Décisions candidates (soumises à validation Morris)

| Id | Proposition | Impact |
|----|-------------|--------|
| FD-OA-01 | Valider le pack conception Option A tel que documenté | Débloque AF |
| FD-OA-02 | Nouveau Project exige N2 + doctrine pin avant LPS actif | Création projet |
| FD-OA-03 | Qualification cycle reste `proposed` jusqu’ack si Critical | Profil Critical |
| FD-OA-04 | Synthetic CKC suffit pour démarrer clarification ; detailed préféré | CKC |
| FD-OA-05 | OPS1 Campus360 peut coexister **produit** gelé pendant tranche A **sans** doctrine v2.6 active partagée | Arbitrage produit U-01 audit |
| FD-OA-06 | Export MD Cursor optionnel derrière feature flag adaptateur | Exec |

*FD-OA-* = candidates · **non validées**.

## 3. Inconnues

| ID | Sujet |
|----|-------|
| U-OA-01 | Gel vs migration progressive OPS1 pendant AF/Delivery |
| U-OA-02 | Moment exact merge UX 87–89 vs AF |
| U-OA-03 | Stratégie données MethodMode existantes |
| U-OA-04 | Périmètre exact première AF (quels composants P0) |

## 4. Réserves

| ID | Réserve |
|----|---------|
| FD-R01 | Pas d’architecture technique |
| FD-R02 | Pas de schemas |
| FD-R03 | Runtime inchangé |
| FD-R04 | UX visuelle non retravaillée ici |
| FD-R05 | Coupure method/ non exécutée |
| FD-R06 | Cas d’usage en fiches ; détail AF pourra enrichir séquences |

## 5. Dette créée / évitée

**Évitée :** big-bang code · coexistence doctrinale dans la cible.
**Créée :** pack design à valider · AF/UX/modeled à enchaîner · hygiene README Studio hors scope.

## 6. Maturité distribuée

| Objet | Maturité |
|-------|----------|
| Pack conception Option A | DOCUMENTED candidate |
| Fondations F01–F15 | VALIDATED (framing) |
| Composants runtime v3-native | non MODELED/IMPLEMENTED |
| UX 87–89 | validated decisions hors main |
| Coupure v2.6 | non exécutée |

## 7. Anti-claims (ce cycle)

Interdit de conclure : DESIGN VALIDATED · READY FOR MODELED/DELIVERY · RUNTIME MIGRATED · V2.6 REMOVED · OPTION A IMPLEMENTED · UX FINAL · ARCHITECTURE APPROVED.

## 8. Critères d’acceptation conception (pour Morris)

- [ ] Flux 14 étapes Option A compréhensible sans v2.6 runtime
- [ ] 20 composants responsabilités claires
- [ ] LPS / Decision / Confirmation / Contract / Evidence cohérents
- [ ] 14 stop codes + 24 cas couverts
- [ ] Matrice actifs sans coexistence
- [ ] Alignement ARB-V3-01…06 et CC-D*

## 9. Gate suivant

`GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A`
(UX dédié possible en parallèle selon U-OA-02)

## 10. Verdict

**SFIA STUDIO V3-NATIVE OPTION A FUNCTIONAL DESIGN DOCUMENTED — MORRIS VALIDATION REQUIRED**
````

## 10. Verdict exact

**SFIA STUDIO V3-NATIVE OPTION A FUNCTIONAL DESIGN DOCUMENTED — MORRIS VALIDATION REQUIRED**

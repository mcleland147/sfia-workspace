# Review Pack Full — SFIA v3.0 Framing Closure (R1–R5 + Option D)

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-22 17:31:35 CEST
- **Cycle :** 1 — Cadrage — clôture et consolidation
- **Profil :** Critical
- **Gate consommé :** GO CLÔTURE CADRAGE SFIA v3.0 — RÉSERVES R1–R5 ET TRAJECTOIRE OPTION D
- **Gate suivant :** GO VALIDATION DOCUMENTAIRE DU CADRAGE SFIA v3.0
- **Gate ultérieur :** GO OUVERTURE V3-MODELED
- **Repo/branche :** mcleland147/sfia-workspace · delivery/sfia-studio-control-tower-fast-track
- **HEAD/base :** 32e5271842b9a344a7e292614675c27ea8ed941b
- **Handoff précédent :** 863deca913e12db0eaea4889f05f0a32a4a6d797
- **Baseline :** SFIA v2.6
- **Statut v3 :** V3-DOCUMENTED (cadrage clôturé) — **non adopté**

## 2. Décisions validées D1–D8

D1 Studio-native · D2 ReviewBundle · D3/R1 MD/JSON/SQL · D4/R2 E0–E4 · D5/R3 SQL hybride · D6/R4 maturité 6 niveaux · D7/R5 pas migration générale · D8 Option D trajectoire validée

## 3. Note ReviewBundle vs pack v2.6

Cible v3 = ReviewBundle hybride (contenu résolvable/vérifié).
Baseline active v2.6 → ce cycle produit encore le review pack Markdown Full actuel.

## 4. Matrice clôture réserves

Voir doc 22 : R1–R5 clôturées cadrage ; dettes → V3-MODELED / archi / QA.

## 5. Fichiers créés (contenu complet)


### `projects/sfia-studio/sfia-v3-framing/23-sfia-v3-reviewbundle-and-review-lifecycle.md`

```markdown
# 23 — ReviewBundle hybride et cycle de vie de revue (cadrage clôturé)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D2 — validée** |
| Baseline | SFIA v2.6 (review pack MD exhaustif **reste applicable** tant que v3 non adoptée) |
| Adoption v3 | Non |

## 1. Finalité

Remplacer, **en cible v3**, le review pack Markdown exhaustif comme canal nominal interne par un **ReviewBundle hybride** résolvable et vérifiable.

Le **review handoff Git** (`sfia/review-handoff`) devient : export, résilience, interopérabilité — **pas** le canal nominal interne entre agents Studio.

## 2. Types de revue

| Type | Quand |
|------|-------|
| ActionReview | Après ActionCandidate / exécution |
| CycleReview | Fin ou jalon de CycleInstance |
| TransitionReview | Avant/après TransitionDecision |
| ReleaseReview | Préparation release / PR readiness projet |
| CapitalizationReview | Capitalisation / REX |

## 3. Structure minimale

```
ReviewBundle
├── ReviewManifest          # id, type, projectId, cycleId, doctrineVersion, digests, status
├── ContextSnapshot         # headSha, definitionDigests, mode, actors
├── ChangeSet               # refs fichiers / blobs / ops (pas forcément contenu embarqué)
├── ExecutionEvidence       # attempts, paths, hashes, logs redactés
├── ValidationResults       # PASS/FAIL/reserves
├── DecisionRequests        # gates ouverts / tranchés
├── Reserves                # classifiées
└── HumanVerdict            # décision humaine + motif + timestamp + rôle
```

## 4. Règle de complétude cible (v3)

**MODIFIED CONTENT MUST BE RESOLVABLE AND VERIFIED**

≠ obligation d’embarquer tout le contenu dans un seul Markdown.

Résolvable = path + digest/blob + accessibilité vérifiée + statut.
Vérifié = contrôles de présence, hash, allowlist, redaction.

## 5. Cycle de vie

`DRAFT → SEALED → EXPORTED (optionnel) → ARCHIVED`

- SEALED : immuable (append-only corrections via nouvel événement).
- Export handoff Git : optionnel / résilience / revue externe.
- Restitution Studio : vue native du bundle.

## 6. Stockage / responsabilités

| Partie | Stockage | Owner |
|--------|----------|-------|
| Manifest + liens | SQL | Studio Review Service |
| Contenu fichiers | Git / worktree / blobs | Git truth |
| Evidence | SQL meta + fichiers | Execution/Evidence |
| Export MD handoff | branche `sfia/review-handoff` | Publisher L3 borné |

## 7. Fallback v2.6

Tant que **V3-ADOPTED** n’est pas atteint : cycles Cursor sous v2.6 continuent d’appliquer review pack **contenu exploitable embarqué** + handoff publish-in-cycle.

## 8. Dette transférée → V3-MODELED

Schémas ReviewManifest, API résolution ChangeSet, UI ReviewBundle — **non créés ici**.

```

### `projects/sfia-studio/sfia-v3-framing/24-sfia-v3-doctrine-source-and-projection-model.md`

```markdown
# 24 — Sources doctrine / projections (R1 clôturée)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D3 / R1 — clôturée** |

## 1. Principe validé

```
Pourquoi  → Markdown (canonique humain)
Quoi exécuter / contrôler → JSON (+ JSON Schema)
État courant → SQL
```

Markdown et JSON **ne portent pas manuellement la même règle**.

Pas de duplication indépendante Markdown / JSON / TypeScript / SQL.

## 2. Frontières

| Couche | Canonique | Projection |
|--------|-----------|------------|
| Vision, principes, rationale, gouvernance narrative | Markdown Git | Studio help, slides |
| CycleDefinition, GateDefinition, Policy, State, Transition… | JSON Git | Docs op générées, UI |
| Validation structure | JSON Schema | CI future |
| Instances runtime | SQL | Dashboards |
| Types code | Générés **ou** validés contre Schema — jamais SoT inverse | — |

## 3. Matrice objets (extrait)

| Objet | Source canonique | Projection | Validation | Stockage runtime | Propriétaire | Audit |
|-------|------------------|------------|------------|------------------|--------------|-------|
| Principe P1–P12 | MD | UI aide | review humain | — | méthode | version Git |
| CycleDefinition | JSON | MD généré | Schema | digest en SQL | méthode+produit | digest |
| GateDefinition | JSON | boutons UI | Schema | GateInstance | produit | GATE_* |
| HumanDecision | — | pack/slides | immutabilité | SQL append | décideur | decisionId |
| ExecutionContract | JSON schema + instance | prompt Cursor | hash | SQL | moteur | contractHash |
| TypeScript enums | — | code | conformité Schema | — | eng | CI |

## 4. Anti-divergence

1. Digests des defs JSON dans ContextSnapshot.
2. CONTEXT_STALE si drift.
3. CI candidate (V3-MODELED+) : schema validate + no orphan TS enums.
4. Docs opérationnelles **générées** depuis JSON, pas maintenues en parallèle.

## 5. Ownership / versionnement

- MD doctrine : cycles méthode gated (v2.6 inchangé aujourd’hui).
- JSON defs v3 : sandbox framing puis `method/` seulement après GO ADOPTION.
- `schemaVersion` + path stable + ids stables.

## 6. Dette → V3-MODELED

Schémas JSON réels, générateurs doc, CI conformité — **non créés** dans ce cycle.

```

### `projects/sfia-studio/sfia-v3-framing/25-sfia-v3-doctrine-enforcement-levels.md`

```markdown
# 25 — Niveaux d’enforcement doctrinal E0–E4 (R2 clôturée)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D4 / R2 — clôturée** |

## 1. Niveaux

| Niveau | Définition | Studio | GPT | Moteur | Dérogation |
|--------|------------|--------|-----|--------|------------|
| **E0 Information** | Informer sans freiner | hint | peut mentionner | log soft | N/A |
| **E1 Recommandation** | Suggérer le chemin conforme | badge reco | recommande | n’exécute pas l’écart | libre d’ignorer (tracé optionnel) |
| **E2 Avertissement + réserve** | Continuer possible avec réserve | warning + Reserve | explique risque | autorise si Reserve créée | rôle responsable/décideur |
| **E3 Dérogation humaine obligatoire** | Effet bloqué sans DecisionRequest GO | modal gate | DecisionRequest | deny jusqu’à GO | décideur / approbateur habilité ; durée bornée |
| **E4 Blocage absolu** | Non dérogeable | hard block | explique + alternatives | deny définitif sur l’effet | **aucune** |

Chaque règle précise : niveau · motif · effet · rôle habilité · dérogation · durée · preuve · audit · impact cycle.

## 2. Processus

```
RuleMatch
→ EnforcementEvaluation (E0–E4)
→ UserExplanation
→ CorrectionOption
→ Reserve et/ou DecisionRequest
→ AuditEvent
→ Transition ou Block
```

## 3. Portée des règles

| Portée | Exemples |
|--------|----------|
| Globale | fail-closed, no free-chat mode v3 |
| Cycle | profil Critical, review obligatoire |
| Projet | mode méthodo, chemins allowlist projet |
| Sécurité | secrets, chemins protégés |
| Exécution | allowlist, contractHash, stale |
| Transition | préconditions d’état |

## 4. Exemples

- Proposition commit hors gate → **E3**.
- Modifier `method/` sans GO méthode → **E4**.
- Profil sous-estimé vs risque → **E2** + réserve.
- Style de formulation GPT → **E0/E1**.

## 5. Dette → V3-MODELED

Catalogues PolicyDefinition JSON, wiring UI E0–E4 — conception ultérieure.

```

### `projects/sfia-studio/sfia-v3-framing/26-sfia-v3-transactional-state-and-audit-model.md`

```markdown
# 26 — État transactionnel SQL et audit (R3 clôturée)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D5 / R3 — clôturée** |
| Note | Modèle **logique** uniquement — pas de migration / schéma physique |

## 1. Architecture hybride validée

- **Tables transactionnelles** = état courant.
- **Journal append-only** = audit, transitions, corrections.
- **Pas** d’event sourcing intégral.

## 2. Agrégats transactionnels (logiques)

Workspace, Project, CycleInstance, GuidedSession, ActionCandidate (courant), permissions/assignments, pointeurs « latest » vers contrats/evidence.

## 3. Immutables (append-only / sealed)

HumanDecision · ExecutionContract **exécuté** · Evidence · ValidationResult · verdicts HumanVerdict · ReviewBundle sealed.

**Correction :** nouvelle version, révocation, ou événement correctif — jamais mute silencieuse.

## 4. Journal

Événements corrélés : `projectId → cycleId → sessionId → contextId → decisionId → actionId → contractHash → attemptId → reviewBundleId`.

Chaque événement porte : `doctrineVersion`, `definitionDigests`, `actorRole`, `timestamp`.

## 5. Concurrence / soft delete / RGPD

- Optimistic locking sur Project / CycleInstance.
- Soft delete objets opérationnels.
- Rétention / anonymisation spécifiques données personnelles (politique RUN future).

## 6. Reconstruction

Reconstruction **partielle** depuis journal + snapshots ContextSnapshot — pas obligation de rebuild total event-sourced.

## 7. Dette → architecture technique / V3-MODELED

Schéma physique, indexes, partitioning — **non figés** ici.

```

### `projects/sfia-studio/sfia-v3-framing/27-sfia-v3-maturity-and-project-eligibility-model.md`

```markdown
# 27 — Maturité plateforme et éligibilité projet (R4 clôturée)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D6 / R4 — clôturée** |

## 1. Chaîne validée

```
V3-DOCUMENTED → V3-MODELED → V3-IMPLEMENTED → V3-VALIDATED → V3-ELIGIBLE → V3-ADOPTED
```

**Aujourd’hui :** cadrage clôturé au statut **V3-DOCUMENTED** (validation documentaire humaine encore requise).

## 2. Trois axes distincts

| Axe | Question |
|-----|----------|
| **PlatformMaturity** | Où en est Studio/runtime v3 ? |
| **ProjectEligibility** | Ce projet peut-il tourner en mode v3 ? |
| **MethodMode** | Quelle méthode claim (v2.6 / transition / v3) ? |

Une plateforme peut être **V3-ELIGIBLE** tandis qu’un projet reste en **v2.6**.

## 3. Niveaux (synthèse)

| Niveau | Entrée | Preuves | Gate humain | Claims |
|--------|--------|---------|-------------|--------|
| DOCUMENTED | Pack framing cohérent | Docs 01–29 | Validation documentaire | candidat only |
| MODELED | Defs structurées conçues/validées | Schemas (futur) | GO OUVERTURE V3-MODELED | modeled candidate |
| IMPLEMENTED | Capacités runtime | code+tests | GO exécution | implemented local |
| VALIDATED | Live preuves | slice live | GO validation live | validated |
| ELIGIBLE | Checklist sécu/QA/RUN | audit | GO éligibilité | eligible platform |
| ADOPTED | Baseline method | merge method | **GO ADOPTION** | baseline v3 |

## 4. Matrice Platform × Project × Mode

| Platform | Project | Mode affiché | Claim v3 projet |
|----------|---------|--------------|-----------------|
| < ELIGIBLE | any | v2.6 / transition | Interdit |
| ELIGIBLE | non migré | v2.6 | Interdit |
| ELIGIBLE | éligible | v3 | Autorisé si mode 4 |
| ADOPTED | historique | v2.6 possible | Pas rétroactif (R5) |

## 5. Dette → QA/validation

Automatisation des gates de maturité — ultérieure.

```

### `projects/sfia-studio/sfia-v3-framing/28-sfia-v3-historical-project-policy.md`

```markdown
# 28 — Politique projets historiques (R5 clôturée)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D7 / R5 — clôturée** |

## 1. Règle

**Aucune migration générale** des projets historiques vers SFIA v3.0.

## 2. Autorisé

- Consultation / archivage sous méthode d’origine (souvent v2.6).
- Import de **références** / artefacts (read).
- Réutilisation d’artefacts comme inputs d’un **nouveau** projet.

## 3. Interdit

- Claim v3 **rétroactif** sur un projet historique.
- Réécriture silencieuse de l’historique méthodologique.
- Moteur complexe de migration automatique.

## 4. Reprise exceptionnelle

Si besoin de « reprendre » un ancien travail en v3 :

1. Créer un **nouveau** `ProjectId` / contexte.
2. Snapshot initial des références importées (digests).
3. Traçabilité `originProjectRef`.
4. **Rebaselining humain explicite** (DecisionRequest) si baseline méthode change pour ce nouveau projet.
5. Mode méthodo choisi explicitement (badge).

## 5. Dette

Cycle dédié « reprise exceptionnelle » seulement si un cas réel apparaît — pas de backlog migration massive.

```

### `projects/sfia-studio/sfia-v3-framing/29-sfia-v3-option-d-bounded-codesign-trajectory.md`

```markdown
# 29 — Trajectoire Option D — co-design borné (validée cadrage)

| Champ | Valeur |
|-------|--------|
| Statut | **Décision de cadrage D8 — Option D validée** |
| Rappel | Validée comme **trajectoire de conception** — **pas** autorisation d’implémentation |

## 1. Principes

Chaque incrément valide **ensemble** :

1. un parcours utilisateur
2. une règle doctrinale
3. une définition structurée
4. un objet/état SQL
5. une interaction GPT
6. une règle déterministe
7. une projection Studio
8. une preuve
9. une décision humaine éventuelle

## 2. Unité : BoundedCoDesignIncrement

Contenu minimal :

- UserJourneySlice
- DoctrineRuleSet
- RuntimeDefinitions
- StateModel
- GPTInteractionContract
- DeterministicPolicies
- StudioProjection
- EvidencePlan
- HumanGates
- ReviewBundlePlan

Limites : un parcours principal · objets réduits · une transition principale · preuves bornées.

## 3. Slices candidates (non implémentées)

### Slice D1 — Project Framing
Créer projet → cadrage guidé → HumanDecision → ouverture cycle suivant.
Objets : Project, CycleInstance, GuidedSession, HumanDecision, GateInstance, AuditEvent.
Maturité cible incrément : vers MODELED/IMPLEMENTED local.
Anti-claim : pas d’exécution Cursor obligatoire.

### Slice D2 — Controlled Execution
ActionProposal → ActionCandidate → ExecutionContract → Cursor → Evidence → ReviewBundle → ValidationResult.
Réutilise acquis OPS1/CT.
Anti-claim : pas V3-ADOPTED.

### Slice D3 — Transition and Capitalization
Validation → TransitionProposal → HumanDecision → nouveau cycle → CapitalizationRecord.
Anti-claim : pas migration historique (R5).

## 4. Gouvernance / gates

- Pas d’implémentation sans GO dédié post validation documentaire.
- Branches delivery locales possibles plus tard — **fermées** maintenant.
- Stop si incrément élargit silencieusement le périmètre ou touche `method/` sans GO ADOPTION.

## 5. Lien maturité

Option D alimente DOCUMENTED→MODELED→IMPLEMENTED… sans sauter ADOPTED.

```

## 6. Fichiers modifiés (contenu complet post-clôture)

### `projects/sfia-studio/sfia-v3-framing/README.md`

```markdown
# SFIA v3.0 — Cadrage Studio Project Operating System

| Métadonnée | Valeur |
|------------|--------|
| **Statut cadrage** | **Clôturé documentaire candidat** — **V3-DOCUMENTED** |
| **Baseline opérationnelle** | **SFIA v2.6** (inchangée) |
| **Adoption v3** | **Non** |
| **Trajectoire conception** | **Option D validée** (co-design borné) — pas d’implémentation autorisée |
| **Gate consommé (clôture)** | `GO CLÔTURE CADRAGE SFIA v3.0 — RÉSERVES R1–R5 ET TRAJECTOIRE OPTION D` |
| **Gate suivant** | `GO VALIDATION DOCUMENTAIRE DU CADRAGE SFIA v3.0` |
| **Gate ultérieur distinct** | `GO OUVERTURE V3-MODELED` |
| **Branche** | `delivery/sfia-studio-control-tower-fast-track` |
| **HEAD** | `32e5271842b9a344a7e292614675c27ea8ed941b` |

## Décisions de cadrage validées (D1–D8)

| Id | Décision |
|----|----------|
| D1 | v3 exclusivement Studio-native |
| D2 | ReviewBundle hybride (handoff = export/résilience) |
| D3 / R1 | MD = pourquoi · JSON = quoi · SQL = état |
| D4 / R2 | Enforcement E0–E4 |
| D5 / R3 | SQL transactionnel + audit append-only |
| D6 / R4 | Maturité DOCUMENTED…ADOPTED |
| D7 / R5 | Pas de migration générale historiques |
| D8 | Option D trajectoire validée |

## Index

| # | Fichier |
|---|---------|
| 01–22 | Cadrage consolidé (mis à jour clôture) |
| 23 | ReviewBundle & lifecycle |
| 24 | Sources MD/JSON (R1) |
| 25 | Enforcement E0–E4 (R2) |
| 26 | SQL & audit (R3) |
| 27 | Maturité & éligibilité (R4) |
| 28 | Projets historiques (R5) |
| 29 | Option D & slices D1–D3 |

## Verdict

**SFIA v3.0 FRAMING CLOSED — V3-DOCUMENTED — HUMAN VALIDATION REQUIRED**

```

### `projects/sfia-studio/sfia-v3-framing/01-sfia-v3-product-vision-and-positioning.md`

```markdown
# 01 — Vision produit et positionnement SFIA v3.0

| Champ | Valeur |
|-------|--------|
| Statut | **Cadrage clôturé — V3-DOCUMENTED** (non adopté) |
| Baseline active | SFIA v2.6 |
| Décision D1 | Studio-native exclusive — **validée cadrage** |
| Trajectoire | Option D **validée** (conception uniquement) |

## 0. Applicabilité Studio-native (complément)

**SFIA v3.0 n’est pas** le modèle manuel ChatGPT → prompt → copier-coller Cursor → retour ChatGPT (cela reste **v2.6 / legacy**).

**SFIA v3.0 (candidat)** n’est applicable que si Studio pilote : projet, cycle, contexte, décisions, actions, exécutions, preuves, validations, transitions (détail : doc 15).

Doctrine et produit sont **couplés** : v3 = doctrine + opératoire + information + contrats + workflow + UX + orchestration.

## 1. Positionnement exact candidat

**SFIA Studio v3.0 (candidat)** est un **Project Operating System** : système de pilotage projet bout en bout, assisté par IA et gouverné par la méthode SFIA — **exécutée via Studio**, avec définitions versionnées dans Git et état vivant en SQL.

Il n’est **pas** :

- un chat généraliste ;
- une simple interface ChatGPT ;
- un lanceur de prompts ;
- un écran de monitoring isolé ;
- une duplication de la doctrine SFIA en code.

Il **est** (candidat) :

- le cockpit où un utilisateur humain crée, reprend, pilote et clôture un projet ;
- le lieu où les cycles sont ouverts, conduits, validés et enchaînés ;
- la façade où les décisions humaines structurantes sont demandées, tracées et appliquées ;
- l’orchestrateur visible des effets déterministes (outils, Cursor, Git) sous contrats ;
- le point de collecte des preuves, validations, réserves et capitalisations.

## 2. Problème que v3.0 adresse

| Problème | Observation actuelle (v2.6 + Control Tower local) |
|----------|--------------------------------------------------|
| Fragmentation outils | ChatGPT, Cursor, Git, GitHub, Studio OPS1 encore partiellement séparés |
| Conversation hors projet | Risque de « chat libre » sans rattachement projet/cycle |
| Doctrine ≠ runtime | Méthode Markdown riche ; runtime encore partiel (OPS1/CT) |
| Démonstration produit | Vertical slice technique ≠ parcours produit complet (créer projet → clôturer) |
| Terminologie individu-centrique | « Morris décide » doit devenir rôle de décideur humain habilité |

## 3. Vision formulée

> SFIA Studio permet de **piloter un projet** de bout en bout sous méthode SFIA : qualifier, décider, exécuter sous contrat, prouver, valider, enchaîner — avec GPT qui raisonne librement dans un **contexte contraint**, et des effets **déterministes** validés par des policies et gates humains.

## 4. Ce que le produit doit permettre

1. Créer un projet
2. Reprendre un projet existant
3. Importer / consulter un projet finalisé
4. Ouvrir un cycle
5. Reprendre un cycle
6. Guider une réflexion (sans questionnaire rigide)
7. Consulter les sources projet et canoniques
8. Qualifier une demande
9. Préparer une décision humaine
10. Compiler une action
11. Orchestrer Cursor sous contrat
12. Contrôler Git (lecture / écritures gouvernées)
13. Collecter les preuves
14. Valider un résultat
15. Proposer la transition suivante
16. Capitaliser

## 5. Règle conversationnelle structurante

Toute conversation est rattachée à au moins un objet : **projet**, **cycle**, **décision**, **action**, **rapport** ou **réserve**.

Il n’existe **pas** de conversation libre sans contexte projet (sauf opérations bornées de création / import de projet).

## 6. Séparation liberté / contrainte

| Libre | Contraint |
|-------|-----------|
| Formulation naturelle GPT | Contexte injecté (sources, état, gates) |
| Analyse, challenge, reformulation | Outils exposés |
| Hypothèses et recommandations | Transitions d’état |
| Questions de clarification | Effets (écriture, Cursor, remote) |

## 7. Relation Control Tower

Control Tower (66–74) prouve une **chaîne d’intégration** (Studio ↔ GPT ↔ Git ↔ GitHub read ↔ Cursor).
v3.0 **généralise** cette chaîne en **système de projet**, pas seulement en démonstrateur d’outil.

## 8. Décisions humaines requises (suite)

- `GO VALIDATION DOCUMENTAIRE DU CADRAGE SFIA v3.0`
- Puis éventuel `GO OUVERTURE V3-MODELED` (distinct)
- Adoption / implémentation : **non prises**

Option D est **déjà validée** comme trajectoire de conception (D8).

## 9. Anti-claims

- Vision **candidate**, non baseline.
- Pas d’implémentation autorisée par ce document.
- Pas de monétisation / production claim.

```

### `projects/sfia-studio/sfia-v3-framing/02-sfia-v3-principles-and-human-governance.md`

```markdown
# 02 — Principes candidats et gouvernance humaine

| Champ | Valeur |
|-------|--------|
| Statut | Principes **candidats produit** ; gouvernance cadrage **consolidée** |
| Baseline | SFIA v2.6 |
| Note | Enforcement doctrinal runtime = niveaux **E0–E4** (D4 / doc 25) — clôturé cadrage |

## 1. Règle de lecture

Les principes ci-dessous sont **candidats**. Aucun n’est automatiquement validé. Toute promotion en doctrine v3.0 exige un GO humain explicite.

Terminologie cible : remplacer « Morris décide » par **« la décision structurante appartient à un décideur humain habilité »**.

## 2. Douze principes candidats

### P1 — Projet-first
Toute interaction Studio est rattachée à un projet, ou à une opération bornée de création / import.

**Raison :** éviter le chat orphelin.
**Risque si absent :** dérive conversationnelle, effets hors contexte.

### P2 — Cycle-aware
Toute conversation de travail est rattachée à un cycle actif ou à une phase de qualification de cycle.

**Raison :** SFIA est cycle-driven (routing guide v2.6).
**Risque :** actions sans typologie / profil / gates.

### P3 — Human-governed
Les arbitrages structurants exigent une décision humaine explicite (gate UI ou équivalent audité).

**Raison :** héritage L0 / fail-closed v2.6.
**Risque :** automatisation de décision.

### P4 — AI-reasoned
GPT conserve la liberté d’analyse, reformulation, questionnement et recommandation.

**Raison :** valeur SFIA = raisonnement, pas scripts de réponses.
**Risque inverse :** questionnaire rigide / réponses préfabriquées.

### P5 — Deterministic-effects
Les effets (fichiers, Git, Cursor, remote) passent par contrats et policies déterministes.

**Raison :** acquis OPS1 (allowlist, contractHash, revalidation).
**Risque :** prompt libre = exécution libre.

### P6 — Git-truth
Git reste la source de vérité documentaire et technique ; la mémoire conversationnelle ne remplace pas Git.

**Raison :** operating model + guardrails v2.6.
**Risque :** doctrine « dans le chat ».

### P7 — Explainable-routing
Chaque routage de cycle ou transition doit être explicable (sources, critères, alternatives écartées).

**Raison :** routing guide.
**Risque :** boîte noire.

### P8 — No-free-chat
Studio ne répond pas aux demandes sans relation cohérente avec le projet ou le cycle (sinon clarification / blocked).

**Raison :** gouvernance produit.
**Risque :** usage généraliste.

### P9 — Fail-closed
En cas d’incertitude sur une action ou une autorité : bloquer ou demander clarification.

**Raison :** guardrails + OPS1.
**Risque :** deny-by-default affaibli.

### P10 — Progressive-automation
Automatiser d’abord préparation, collecte, contrôle et exécution bornée — avant tout arbitrage structurant.

**Raison :** trajectoire L0–L5 à redécouper (voir doc 07).
**Risque :** L5 décisionnel.

### P11 — Doctrine-as-source
La doctrine reste versionnée et lisible dans Git (Markdown).

**Raison :** v2.6 baseline ; éviter seconde doctrine TS.
**Risque :** divergence Markdown/code.

### P12 — Contracts-as-runtime
Les objets structurés (états, gates, schémas) servent à l’exécution sans devenir une doctrine indépendante.

**Raison :** moteur de contexte canonique (74).
**Risque :** constantes métier dispersées.

## 3. Modèle de gouvernance humaine candidat

| Niveau | Qui | Quoi |
|--------|-----|------|
| L-H0 | Décideur humain habilité | Gates structurants, adoption baseline, merge doctrine |
| L-H1 | Approbateur opérationnel | GO action Cursor, GO write borné, GO remote selon policy |
| L-H2 | Responsable de projet | Trajectoire, priorités, clôture projet |
| L-S | Studio / moteurs | Préparation, contrôle, blocage, audit |
| L-A | Agents (GPT/Cursor) | Raisonnement / exécution sous contrat — **jamais** gate structurant |

## 4. Formes de décision humaine

1. **Gate explicite UI** (préféré pour effets).
2. **DecisionRequest** structurée (arbitrage documenté).
3. **Refus / report / refine** (pas seulement GO).
4. **Expiration / stale** → revalidation obligatoire.

Une phrase conversationnelle **n’équivaut jamais** à un gate.

## 5. Lien v2.6

Conserver : fail-closed, Git-truth, human validation first, prompt-as-contract, review handoff required pour rapports Cursor.
Adapter : terminologie individu → rôles ; orchestration manuelle → Studio-native.
Ne pas remplacer sans GO : documents canoniques v2.6.

## 6. Clôture / suite

P1–P12 restent le socle candidat.
L’enforcement opérationnel est fixé à **E0–E4** (25).
Suite : `GO VALIDATION DOCUMENTAIRE` puis éventuel V3-MODELED — **pas** adoption.

```

### `projects/sfia-studio/sfia-v3-framing/04-sfia-v3-project-and-cycle-domain-model.md`

```markdown
# 04 — Modèle domaine projet et cycle (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** — listes non figées |

## 1. Objets centraux

Pour chaque objet : finalité, propriétaire logique, id, cycle de vie, source de vérité, relations, mutation, audit, décision humaine.

### Workspace
- **Finalité :** conteneur multi-projets d’une organisation / utilisateur.
- **Propriétaire :** organisation / admin.
- **Id :** `ws-*`.
- **SoT :** Studio + Git org config.
- **Mutation :** admin.
- **Décision humaine :** création workspace.

### Project
- **Finalité :** unité de pilotage (ex. Campus360, SFIA Studio).
- **Propriétaire :** responsable de projet.
- **Id :** `proj-*` + chemin `projects/<key>/`.
- **SoT :** Git (docs) + ProjectState (runtime).
- **Relations :** Cycles, Baseline, Trajectory, Decisions.
- **Décision humaine :** création, clôture, archivage.

### ProjectState
États candidats : `DRAFT | FRAMING | ACTIVE | PAUSED | BLOCKED | DELIVERED | RUN | CLOSED | ARCHIVED`.
Mutations via Transition Engine + gates selon criticité.

### ProjectBaseline
Référence méthode applicable (`SFIA v2.6` aujourd’hui ; `v3.0` **candidate** seulement).
Ne change **pas** sans GO d’adoption.

### ProjectTrajectory
Intention produit / jalons / lots (candidats vs validés).
Options ≠ décisions.

### Cycle / CycleInstance / CycleState
- **Cycle :** type méthodologique (cadrage, delivery, QA…).
- **CycleInstance :** occurrence runtime liée à un Project.
- **États candidats :** `PROPOSED | QUALIFYING | READY | ACTIVE | DECISION_REQUIRED | EXECUTION_READY | EXECUTING | VALIDATING | BLOCKED | COMPLETED | CLOSED | CAPITALIZED`.

### GuidedSession
Conversation rattachée (projet/cycle/décision/action/rapport).
Remplace la notion « session OPS1 orpheline » à terme.

### SourceContext
Ensemble de sources chargées (canoniques + projet) avec digests.
Hérite du Canonical Context Engine (74).

### Hypothesis / Observation / Option / Recommendation
Artefacts de raisonnement. **Jamais** auto-promus en HumanDecision.

### HumanDecision / Gate / DecisionRequest
Décision auditable. Gate = point de contrôle UI/policy. DecisionRequest = demande structurée.

### ActionProposal / ActionCandidate / ExecutionContract / ExecutionAttempt
Chaîne déjà partiellement prouvée OPS1/CT : proposal → compile → candidate → gate → contract → attempt.

### Evidence / ValidationResult / Reserve
Preuves d’exécution, verdict de validation, réserves classifiées (héritage guardrails).

### TransitionProposal / TransitionDecision
Proposition d’enchaînement de cycle / d’état ; décision humaine pour transitions structurantes.

### ReviewPack / ReviewHandoff / CapitalizationRecord
Héritage v2.6 : pack de revue, publication handoff, capitalisation.

## 2. Relations clés

```
Workspace 1—* Project
Project 1—* CycleInstance
CycleInstance 1—* GuidedSession
GuidedSession *—* SourceContext
CycleInstance *—* HumanDecision
CycleInstance *—* ActionCandidate
ActionCandidate 1—* ExecutionContract
ExecutionContract 1—* ExecutionAttempt
ExecutionAttempt 1—* Evidence
CycleInstance *—* TransitionProposal
```

## 3. Règles de mutation (candidats)

1. Pas de mutation d’état projet/cycle sans événement audité.
2. Options / Recommendations ne mutent pas ProjectBaseline.
3. ActionCandidate n’implique aucune exécution.
4. ExecutionAttempt exige contractHash + gate lié.
5. CONTEXT_STALE bloque compilation / exécution jusqu’à requalification.
6. Chemins protégés (`method/`, `prompts/`, …) hors écriture sauf GO méthode dédié.

## 4. Identifiants et audit

Corrélation cible :

`workspaceId → projectId → cycleInstanceId → sessionId → contextId → proposalId → actionId → contractHash → attemptId → reportId / evidenceId`

## 5. Écart vs OPS1 actuel

| OPS1 aujourd’hui | Cible v3.0 |
|------------------|------------|
| CycleSession loosely bound | Project + CycleInstance first-class |
| Fixture/live mode session | GuidedSession contextualisée projet |
| ActionCandidate I3 | ActionCandidate issu du moteur SFIA |
| Pas de ProjectState | ProjectState Engine |

## 6. Décisions humaines requises

- Valider la liste d’états projet/cycle (ou la réduire).
- Valider le rattachement obligatoire conversation → objet.
- Décider du modèle d’import de projets finalisés.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

### Persistance (D5 / R3)

État courant en tables transactionnelles ; HumanDecision / Evidence / contrats exécutés / ValidationResult en journal ou enregistrements immuables (26).

```

### `projects/sfia-studio/sfia-v3-framing/07-sfia-v3-automation-and-human-decision-model.md`

```markdown
# 07 — Automatisation et décisions humaines (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Source | Grille L0–L5 v2.6 / operating model — à étendre, non remplacer silencieusement |

## 1. Principe candidat cardinal

> L’automatisation peut être élevée sur les opérations **répétables, bornées, contrôlables et réversibles**.
> La **décision structurante** ne doit **jamais** être déléguée automatiquement à un agent.

## 2. Redécoupage candidat (au-delà d’un seul axe L0–L5)

| Domaine | Exemple | Niveau candidat max sans GO structurant | Gate humain ? |
|---------|---------|------------------------------------------|---------------|
| Collecte | lire Git/GitHub, digests | Élevé | Non (policy read) |
| Qualification | proposer cycle/profil | Moyen | Clarification si doute |
| Raisonnement | analyse GPT | Élevé (prose) | Non pour prose seule |
| Préparation | ActionProposal, review pack draft | Moyen-élevé | Non jusqu’à effet |
| Exécution | Cursor sous contrat | Moyen | **Oui** GO action |
| Contrôle | allowlist, postcheck, stale | Élevé | Non (déterministe) |
| Transition | proposer cycle suivant | Moyen | **Oui** si structurant |
| Décision | adopter baseline, merge doctrine, remote write large | **Nul (agent)** | **Toujours** |

## 3. Grille risque / réversibilité

| Classe d’effet | Risque | Réversibilité | Automatisation candidate |
|----------------|-------|---------------|--------------------------|
| Lecture locale | Bas | N/A | Auto |
| CREATE markdown allowlisté | Moyen | Haute (revert Git) | Préparer auto ; exécuter après GO |
| MODIFY code allowlisté | Moyen-haut | Moyenne | GO + contrat |
| commit local | Haut | Moyenne | GO dédié |
| push / PR / merge | Très haut | Basse | GO dédiés séparés |
| modifier `method/` / `prompts/` | Critique | Basse | GO méthode + cycle dédié |
| L5 décisionnel | Interdit | — | Bloqué |

## 4. Conditions de supervision

Toute automatisation doit :

1. produire des **traces** (events) ;
2. pouvoir être **arrêtée** ;
3. être **bornée** (timeout, paths, ops) ;
4. échouer **fermé** ;
5. exposer le **pourquoi** (explainable).

## 5. Stop conditions candidats (automatisation)

- Autorité ambiguë.
- Contexte stale.
- Effet hors allowlist.
- Gate fermé.
- Divergence digest sources.
- Multi-écriture non déclarée.
- Demande de décision structurante détectée dans un flux « auto ».

## 6. Cartographie décisions humaines (non déléguables)

| Décision | Pourquoi humaine |
|----------|------------------|
| Adoption baseline méthode | Changement de doctrine |
| GO validation cadrage | Orientation produit |
| GO action Cursor | Effet workspace |
| GO commit / push / PR / merge | Effets Git/GitHub |
| Promotion option → décision | Gouvernance |
| Clôture projet / archivage | Responsabilité |
| Exception chemin protégé | Sécurité |

## 7. Lien Control Tower / OPS1

Déjà automatisable / prouvé partiellement : collecte read, compilation ActionCandidate, contrôles allowlist, exécution après GO, rapport, reinjection.
Toujours humain : gates, adoption v3.0, writes distants.

## 8. Décisions humaines requises

- Valider le redécoupage par domaine.
- Confirmer l’interdiction L5 décisionnel.
- Trancher le niveau d’auto pour transitions non structurantes (ex. purement documentaires).

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

### Enforcement (D4)

Les écarts doctrinaux / d’effet sont classés **E0–E4** (doc 25). La décision structurante reste humaine ; E4 non dérogeable.

```

### `projects/sfia-studio/sfia-v3-framing/08-sfia-v3-executable-doctrine-and-contract-model.md`

```markdown
# 08 — Doctrine exécutable et modèle de contrats (candidat, consolidé)

| Champ | Valeur |
|-------|--------|
| Statut | **Cadrage clôturé** — décisions D2/D3/D5 intégrées |
| Voir aussi | 23 ReviewBundle · 24 MD/JSON · 26 SQL |

## 1. Cinq couches (remplace l’ancien modèle A/B/C trop étroit)

| Couche | Contenu | Format | SoT |
|--------|---------|--------|-----|
| 1 Doctrine humaine | Principes, rationale | Markdown | Git |
| 2 Définitions exécutables | Cycles, states, gates, policies… | JSON (+ Schema) ; YAML authoring optionnel | Git |
| 3 État opérationnel | Instances, décisions, attempts… | SQL | SQL (+ refs digests Git) |
| 4 Artefacts métier | RACI, risques, backlog… | XLSX/CSV/PJ | Fichier + meta SQL — **pas doctrine** |
| 5 Restitutions | Slides, PDF, rapports | Générés | Dérivé — **pas SoT** |

L’ancien découpage A/B/C (MD / contrats runtime / projections) **subsiste** comme vue simplifiée : A⊂1, B⊂2+3, C⊂5 (+ projections GPT/Cursor).

## 2. Flux de vérité consolidé

```
Git (doctrine MD + defs JSON)
   ↓ load digests
SQL (état + HumanDecision)
   ↓ + artefacts
Projections (UI, GPT context, Cursor prompt, slides, review pack)
   ↓ effects gated
Evidence → Git/SQL → re-lecture
```

## 3. Pivot d’exécution Cursor (évolué)

**Avant (v2.6/CT) :** Template MD pivot.
**Cible v3 candidate :** `ExecutionContract` pivot ; template MD = documentation / projection / fallback / legacy.

Chaîne :

`Doctrine + CycleDefinition + ProjectState + HumanDecision + ActionCandidate + Policies → ExecutionContract → Cursor Prompt Projection → Cursor`

## 4. Anti-patterns

| Anti-pattern | Contre-mesure |
|--------------|---------------|
| Triple maintenance MD/JSON/TS | Matrice 18 + Schema SoT machine |
| Excel comme doctrine | Couche 4 seulement |
| Slides comme SoT | Couche 5 générée |
| Prompt libre | Projection depuis contrat |
| Chat = GO | GateInstance SQL |

## 5. Contrats minimaux (inchangés + étendus)

SourceRef, ContextContract, ProposalContract, CompilationContract, GateContract, **ExecutionContract (pivot)**, EvidenceContract, TransitionContract, plus définitions Cycle/State/Policy en Git JSON (non créées ici).

## 6. Review pack / handoff

Héritage v2.6 conservé comme **restitution/preuve process** ; produits par Studio en mode v3, pas remplacés par UI seule.

## 7. Clôture

R1 (MD/JSON/SQL) et pivot ExecutionContract sont des **décisions de cadrage validées**.
ReviewBundle (23) remplace le pack MD exhaustif comme **cible v3** ; sous baseline v2.6 le pack embarqué reste obligatoire pour cycles Cursor.
Dette schémas → V3-MODELED.

```

### `projects/sfia-studio/sfia-v3-framing/09-sfia-v3-functional-architecture.md`

```markdown
# 09 — Architecture fonctionnelle candidate SFIA v3.0

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** |

## 0. Complément Studio-native

Cette architecture **n’est revendiquable en v3** que si les capacités minimales du mode Studio-native (doc 15) sont présentes. Sinon : modes v2.6 / transitionnel / fallback — sans claim v3.

Ajouts moteurs / services d’information :

- **Definition Registry** (charge JSON/Schema Git)
- **Artifact Service** (import/export Excel/CSV)
- **Restitution Generator** (slides/PDF/MD)
- **Mode Controller** (v2.6 / transition / v3 / fallback)

## 1. Vue d’ensemble

```
Humain (utilisateur / responsable / décideur / approbateur)
  → SFIA Studio (cockpit + façade + Mode Controller)
    → Project State Engine
    → Cycle Router (+ CycleDefinitions Git)
    → Canonical Context Engine (+ Definition Registry)
    → Guided Reasoning Engine / GPT
    → Decision Engine  OR  Action Compiler
    → Gate humain
    → Execution Orchestrator (ExecutionContract pivot)
    → Cursor Prompt Projection → Cursor
    → Git / GitHub
    → Validation Engine
    → Transition Engine
    → Artifact / Restitution services
    → Studio (feedback)
  ↔ Audit Trail · Source Resolver · Policy Engine
  ↔ SQL operational store
```

## 2. Moteurs — responsabilités

| Moteur | Responsabilité | Entrées | Sorties | Décision humaine |
|--------|----------------|---------|---------|------------------|
| Project State Engine | États projet, lifecycle | events, decisions | ProjectState | clôture / archive |
| Cycle Router | Type/profil/sources | intention, context | cycle plan | si ambigu |
| Canonical Context Engine | Charger doctrine/projet | allowlist paths | SfiaCanonicalContext | non |
| Guided Reasoning Engine | Dual-channel GPT | context, message | prose + control | non (sauf gate) |
| Decision Engine | DecisionRequest / gates | options, risks | HumanDecision records | **oui** |
| Action Compiler | Proposal → Candidate | proposal+context | CompilationResult | non |
| Execution Orchestrator | Contrat → Cursor | GO+contract | Attempt+Evidence | GO avant run |
| Validation Engine | Critères / preuves | evidence | ValidationResult | validation structurante |
| Transition Engine | Enchaînements | validation, state | TransitionProposal | transitions structurantes |
| Source Resolver | Résoudre fichiers | refs | SourceRef | non |
| Policy Engine | Allow/deny ops/paths | request | allow/deny | policy change = humaine |
| Audit Trail | Corrélation / immutabilité | all | events | non |

## 3. Flux nominaux

### 3.1 Clarification
Message → Context → GPT → `clarification_required` → UI questions → (boucle) — **aucun effet**.

### 3.2 Décision
Analyse/options → DecisionRequest → Gate UI → HumanDecision → état mis à jour → audit.

### 3.3 Action
ActionProposal → Compiler → ActionCandidate → Gate → Contract → Cursor → Evidence → reinjection → analyse.

### 3.4 Blocage
Policy deny / stale / missing authority → `blocked` + raisons + reprise guidée.

### 3.5 Correction
CHANGES_REQUESTED / refine candidate / nouveau proposal — sans élargissement silencieux.

### 3.6 Validation
Evidence → Validation Engine → PASS/FAIL/PASS_WITH_RESERVES → décideur si besoin.

### 3.7 Clôture / capitalisation
Cycle COMPLETED → Transition CAPITALIZED / Project CLOSED — gates selon criticité.

### 3.8 Reprise
Session/projet PAUSED → reload context digests → requalify si stale → continuer.

## 4. Limites de cette architecture

- Candidate : pas de choix technique figé (DB, bus, multi-tenant).
- Ne remplace pas v2.6.
- Ne prescrit pas MCP universel.
- Réutilise la séparation cockpit / policies / exécuteurs (AF-Option C reformulée).

## 5. Observabilité fonctionnelle

États visibles : projet, cycle, contexte, proposal, compilation, gate, contrat, exécution, validation, transition.
Terminal UX candidat : `DECISION_REQUIRED` | `BLOCKED` | `EXECUTING` | `VALIDATING` | `READY_NEXT`.

## 6. Décisions humaines requises

- Valider ce schéma fonctionnel.
- Valider la liste des moteurs (fusion possibles : Decision⊂Transition ?).
- Trancher la frontière Studio UI vs services moteurs (monolithe logique vs packages).

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

```

### `projects/sfia-studio/sfia-v3-framing/10-sfia-v3-technical-architecture-candidate.md`

```markdown
# 10 — Architecture technique candidate (non implémentée)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** — non implémentée |
| Interdit ici | code, deps, migrations, fichiers Schema |

## 0. Clarifications consolidation

- SQL = état vivant (couche 3), pas doctrine.
- JSON Schema = validation defs Git (couche 2) — **documenté**, non créé.
- Excel/slides = artefacts/restitutions — pas SoT.
- Template Cursor MD = fallback/legacy ; pivot = ExecutionContract.
- Acquis OPS1/CT = modes 2–3, pas V3-ADOPTED.

## 1. Composants candidats

| Composant | Rôle | Frontière |
|-----------|------|-----------|
| Studio Web App | UI cockpit + mode badge | browser |
| API / Server Actions | orchestration façade | serveur |
| Definition Registry | load JSON/Schema digests | serveur |
| Context Service | doctrine + projet | serveur |
| Conversation Service | GPT + tools | serveur |
| Policy Service | allow/deny | serveur |
| Execution Service | ExecutionContract + Cursor | serveur + worktrees |
| Artifact Service | import/export XLSX/CSV | serveur |
| Restitution Service | slides/PDF/MD | serveur |
| Evidence Service | postcheck + reports | serveur |
| Audit Store | events | SQL |
| Project Store | projects/cycles/state | SQL + Git docs |
| Mode Controller | v2.6/transition/v3/fallback | serveur |
| Git / GitHub / Cursor Adapters | I/O bornés | process |

## 2. Données

- **Git** : doctrine + docs projet + preuves commitables.
- **DB** : états runtime, sessions, events, contracts (OPS1 SQLite = proto).
- **Secrets** : serveur only ; jamais dans contexte GPT.
- **Worktrees** : isolation exécution (acquis OPS1).

## 3. Événements

Bus logique (au minimum table events) : `PROJECT_*`, `CYCLE_*`, `SFIA_*`, `TOOL_*`, `GATE_*`, `EXECUTION_*`, `VALIDATION_*`, `TRANSITION_*`.

## 4. Sécurité technique candidate

- AuthN/AuthZ multi-user (futur) ; proto single-operator aujourd’hui.
- Permissions par rôle (doc 03).
- Redaction secrets.
- Path containment.
- Timeout / sandbox Cursor.
- CONTEXT_STALE.
- Pas de shell libre GPT.

## 5. Multi-utilisateurs / permissions (cadrage)

Hors vertical slice immédiat, mais à prévoir :

- isolation projets ;
- habilitations de gate ;
- délégation / expiration ;
- non-répudiation des HumanDecision.

## 6. Inventaire acquis OPS1 / Control Tower / SFIA engine

| Acquis | Verdict candidat |
|--------|------------------|
| GitLocalReadAdapter | **Réutilisable** (étendre writes gated plus tard) |
| GitHubReadAdapter | **Réutilisable** ; write = nouveau gated |
| Tool Router | **Réutilisable** / isoler en Policy+Router |
| Session / event store | **Adapter** → Project/Cycle first-class |
| ActionCandidate + actionGate | **Réutilisable** cœur gouvernance |
| Allowlist | **Réutilisable** |
| contractHash + revalidation | **Réutilisable** |
| Cursor adapter + orchestrator | **Réutilisable** |
| Report + reinjection | **Réutilisable** |
| Canonical context loader/compiler | **Réutilisable** / généraliser multi-projet |
| Ops1SessionScreen | **Expérimental UI** → remplacer par cockpit projet |
| Fixture markers | **Test-only** — pas produit |

## 7. Résilience / reprise

- Rejouer lecture contexte par digests.
- Interrompre EXECUTING → état BLOCKED + evidence partielle.
- Pas d’auto-retry silencieux (héritage I5/I6).
- Continuation = nouvelle CycleInstance / session liée (parentId).

## 8. Évolutivité

- Commencer mono-opérateur + SQLite acceptable pour slice.
- Prévoir extraction services quand multi-projets / multi-users l’exige.
- Éviter plateforme MCP générique comme prérequis (Option C hybride validée CT).

## 9. Décisions humaines requises

- Valider réutilisation massive OPS1 vs rewrite.
- Trancher horizon multi-user.
- Confirmer « pas de MCP universel » pour la prochaine phase.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

```

### `projects/sfia-studio/sfia-v3-framing/11-sfia-v3-ux-information-architecture.md`

```markdown
# 11 — UX / architecture d’information (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** |
| Hors scope | Maquettes HF, Figma |

## 0. Enforcement doctrinal (complément)

L’utilisateur ne choisit pas un workflow hors méthode en mode v3.
Studio propose les parcours pertinents selon ProjectState/CycleState (doc 16).
Badge de **mode** (v2.6 / transition / v3 / fallback) toujours visible.

## 1. Principes UX candidats

1. **Cockpit avant chat** — conversation = panneau du cycle.
2. **État toujours visible** — projet, cycle, mode, gates, contexte.
3. **Décision explicite** — gates UI ; jamais « GO » chat seul.
4. **Preuves à portée** — diffs, digests, artefacts, restitutions.
5. **Progressive disclosure** — canal de contrôle compact.
6. **Fail-closed perceptible** — blocked/stale/denied + fallback mode.
7. **Parcours conditionnés** — actions disponibles = doctrine × état.
8. **Pas de dashboard fourre-tout**.

## 2. Architecture d’information

```
Accueil
├── Créer projet
├── Reprendre projet
└── Consulter / importer finalisé
Projet (cockpit)
├── Trajectoire
├── Cycles (liste)
├── Cycle actif
│   ├── Contexte SFIA
│   ├── Conversation guidée
│   ├── Décisions
│   ├── Actions
│   ├── Exécutions
│   ├── Preuves
│   └── Validation / transition
├── Risques / réserves
├── Capitalisation
└── Admin / rôles (futur)
```

## 3. Points d’entrée

| Entrée | Destination | Précondition |
|--------|-------------|--------------|
| Nouveau projet | Wizard léger + GuidedSession FRAMING | Auth |
| Reprendre projet | Cockpit projet | Project existant |
| Initier cycle | Cycle Router + qualification | Project ACTIVE/FRAMING |
| Poursuivre cycle | Cycle actif | CycleInstance ouverte |
| Traiter décision | Panneau DecisionRequest | DECISION_REQUIRED |
| Analyser résultat | Preuves + reinjection | Evidence disponible |
| Valider | Validation panel | VALIDATING |
| Clôturer | Transition CLOSE | Critères + gate |
| Capitaliser | CapitalizationRecord | COMPLETED |

## 4. Écrans candidats (responsabilité)

| Vue | Une job |
|-----|---------|
| Accueil | Choisir créer/reprendre |
| Création projet | Identité + baseline + intention |
| Cockpit projet | Santé + prochaines décisions |
| Trajectoire | Jalons candidats vs validés |
| Cycles | Historique + états |
| Cycle actif | Conduire le travail (chat + contrôle) |
| Décisions | Gates et DecisionRequests |
| Actions | ActionCandidates |
| Exécutions | Attempts + statut |
| Preuves | Evidence browser |
| Validation | ValidationResult |
| Réserves | Classification + suivi |
| Capitalisation | REX / assets |
| Admin | Rôles / permissions (futur) |

## 5. Conversation dans le cycle

- Panneau latéral ou inférieur, **jamais** page blanche type ChatGPT seul.
- Afficher : `contextId`, profil, gates fermés, ops interdites.
- Après proposal : panneau compilation + ActionCandidate.
- Boutons fixture **hors** parcours live produit.

## 6. Accessibilité / i18n (cadrage)

- Contrastes, focus gates, labels explicites.
- FR d’abord ; i18n plus tard.
- Pas de dépendance au seul code couleur pour blocked/GO.

## 7. Écart vs UI OPS1 actuelle

OPS1 = excellent **banc d’essai**.
v3.0 UX = **produit projet** ; l’écran session unique devient insuffisant.

## 8. Décisions humaines requises

- Valider IA et points d’entrée.
- Trancher densité du canal de contrôle.
- Prioriser vues du vertical slice (doc 13).

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

```

### `projects/sfia-studio/sfia-v3-framing/12-sfia-v2.6-to-v3-gap-analysis.md`

```markdown
# 12 — Analyse d’écart SFIA v2.6 → v3.0 (candidat)

| Champ | Valeur |
|-------|--------|
| Baseline | **v2.6 officielle** |
| v3.0 | **Trajectoire candidate uniquement** |

Légende : **C** conserver · **A** adapter · **R** remplacer · **D** déprécier · **N** créer.

## Matrice par domaine

| Domaine | Classe | Raison | Impact | Risque | Gate humain |
|---------|--------|--------|--------|--------|-------------|
| Doctrine Markdown v2.6 | **C** | Baseline opérationnelle | Stable | Divergence si fork précoce | Adoption v3 distinct |
| Applicabilité Studio-native | **N** | v3 ≠ manuel ChatGPT→Cursor | Produit+méthode | Claim abusif | Validation consolidée |
| Rôles (« Morris L0 ») | **A** | Rôles génériques | Docs + UI | Confusion transition | Validation cadrage |
| Operating model | **A** | Studio-native loop | Process | Perte clarté | Validation archi |
| Cycles / routing | **C+A** | Garder routage ; defs JSON | Méthode+produit | Sur-fusion | Validation cycles |
| Template Cursor pivot | **A/D** | Pivot → ExecutionContract ; MD fallback | Runtime | Habitudes legacy | Validation contrats |
| Formats info (JSON/SQL/Excel/slides) | **N** | 5 couches | Données | Multi-SoT | Validation IA |
| Profils / blocs / gates | **C/A** | UI + rôles | Gouvernance | Chat=GO | Validation gouvernance |
| L0–L5 automation | **A** | Redécoupe domaines | Automation | L5 décisionnel | Validation automation |
| Review pack / handoff | **C** | Preuve revue | Process | Pack incomplet | — |
| Architecture Studio / UX | **N/A** | Cockpit + enforcement | Produit | Chat-only | Validation UX |
| Coexistence modes | **N** | Dual-run contrôlé | Ops | Dual trop long | Validation migration |
| Adoption statuses | **N** | DOCUMENTED…ADOPTED | Gouvernance | Docs≠baseline | GO ADOPTION |

## Synthèse consolidation

- Canoniques v2.6 **intactes**.
- Framing v3 **à côté** (`sfia-v3-framing/`).
- Runtime CT = laboratoire modes 2–3.
- Option trajectoire challengée : **D co-design** (22).

## Dette anticipée

- Double narration v2.6 opérationnelle + v3 candidate.
- Terminologie mixte pendant transition.
- UI OPS1 vs IA v3.
- Schémas runtime encore locaux à `app/lib/ops1/sfia`.

## Décisions humaines requises

- Approuver cette matrice.
- Trajectoire conception : **Option D validée** (doc 29) — pas d’implémentation autorisée.
- Ne **pas** merger de doctrine v3 dans `method/` sans GO d’adoption.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

```

### `projects/sfia-studio/sfia-v3-framing/13-sfia-v3-target-vertical-slice.md`

```markdown
# 13 — Vertical slice produit cible (révisée, candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** |
| Objectif | Valeur **produit Studio-native**, pas seulement chaîne d’outils |

## 1. Slice révisée (20 étapes)

1. Création d’un projet dans Studio
2. Attribution d’un responsable humain
3. Sélection du mode méthodologique (v2.6 assisté / transition / v3 candidate)
4. Ouverture d’un cycle de cadrage
5. Chargement doctrine + définitions structurées (digests)
6. Conversation guidée GPT (dual-channel)
7. Persistance SQL des objets de cadrage
8. Génération ou import d’un artefact métier (ex. RACI/risques)
9. Décision humaine (gate UI)
10. Création ActionCandidate
11. Compilation → ExecutionContract
12. Projection prompt Cursor
13. Exécution Cursor bornée
14. Collecte de preuves
15. Validation
16. Génération d’une restitution (rapport/slides MD)
17. Transition proposée
18. Décision humaine sur transition
19. Mise à jour états projet/cycle
20. Audit corrélé bout en bout

## 2. Comparaison CT / OPS1

CT prouve outils + ActionCandidate + Cursor + rapport.
Cette slice ajoute : **projet first-class**, mode méthodo, SQL cadrage, artefact, restitution, transition projet, audit OS — sans claim V3-ADOPTED.

## 3. Critères de succès

- Mode affiché ; pas de free-chat.
- Digests doctrine/defs tracés.
- Gate ≠ phrase conversationnelle.
- ExecutionContract hashé avant Cursor.
- Artefact non traité comme doctrine.
- Restitution régénérable depuis sources.
- Aucune modif `method/` / `prompts/`.
- Claim au plus « v3 candidate / transition ».

## 4. Anti-claims

Non implémentée · pas MVP · pas baseline · pas multi-user requis · pas génération réelle XLSX/PPTX dans le cadrage.

## 5. Prérequis gates

`GO VALIDATION CADRAGE CONSOLIDÉ` puis GO plan/exécution slice distincts.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

### Lien Option D

La slice 20 étapes se décompose en **D1 / D2 / D3** (doc 29). Ordre candidat de conception — **non implémenté**.

```

### `projects/sfia-studio/sfia-v3-framing/14-sfia-v3-roadmap-and-decision-pack.md`

```markdown
# 14 — Roadmap et decision pack (clôture)

| Champ | Valeur |
|-------|--------|
| Statut | Aligné sur **22** (pack maître) |
| Trajectoire | **Option D validée** (conception) |
| Gate suivant | `GO VALIDATION DOCUMENTAIRE DU CADRAGE SFIA v3.0` |
| Ultérieur | `GO OUVERTURE V3-MODELED` |

## Jalons

| Jalon | Contenu | Statut |
|-------|---------|--------|
| J0 / J0b | Ouverture + complément | Consommés |
| J0c | Clôture R1–R5 + Option D | **Consommé** |
| J1 | Validation documentaire cadrage | **Suivant** |
| J1b | Ouverture V3-MODELED | Ultérieur distinct |
| J2+ | Slices D1–D3 sous Option D | Non autorisé maintenant |
| J∞ | V3-ADOPTED | GO ADOPTION dédié |

## Décisions validées vs non prises

Voir **22**. Option D n’est plus une « recommandation » : c’est une **trajectoire de cadrage validée**, sans GO d’implémentation.

```

### `projects/sfia-studio/sfia-v3-framing/15-sfia-v3-studio-native-applicability-model.md`

```markdown
# 15 — Modèle d’applicabilité Studio-native (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Baseline | SFIA v2.6 |
| Gate | Complément cadrage SFIA v3.0 |

## 1. Ce que signifie « appliquer SFIA v3.0 »

**Observation :** le cadrage initial (01–14) décrivait un Project OS sans assez fermer le critère *où* la doctrine s’applique.

**Décision de cadrage candidate (≠ adoption baseline) :** SFIA v3.0 n’est applicable que lorsque **SFIA Studio pilote effectivement** le projet, le cycle, le contexte, les décisions, les actions, les exécutions, les preuves, les validations et les transitions.

Le modèle suivant **n’est pas** SFIA v3.0 :

```
Humain → ChatGPT → prompt → copier-coller Cursor → retour manuel → ChatGPT
```

Ce modèle reste **SFIA v2.6** (ou legacy assisté).

## 2. Composants indispensables (candidats)

| Composant | Pourquoi indispensable |
|-----------|------------------------|
| Project persisté | Sans projet, pas de v3 |
| CycleInstance | Routage et états |
| Canonical + project context | Doctrine exécutable |
| GuidedSession rattachée | No-free-chat |
| HumanDecision / GateInstance | Gouvernance |
| ActionCandidate + Compiler | Effets structurés |
| ExecutionContract + Attempt | Cursor borné |
| Evidence + Validation | Preuves |
| Transition tracée | Enchaînement |
| Audit trail | Non-répudiation minimale |

## 3. Capacités minimales / contrôles / preuves

**Capacités :** UI cockpit projet ; chargement digests Git ; dual-channel GPT ; persist SQL états ; gates UI ; Cursor sous contrat ; postcheck ; reinjection ; export review.

**Contrôles :** fail-closed ; allowlist ; CONTEXT_STALE ; gates fermés par défaut pour remote writes ; pas d’effet hors contrat.

**Preuves :** events corrélés ; digests sources ; contractHash ; fichiers touchés ; ValidationResult ; handoff si rapport Cursor.

## 4. Matrice des modes

| Mode | Acteurs | SoT | Projet/Cycle | Conversation | Contrats | Gates | Exécution | Claims |
|------|---------|-----|--------------|--------------|----------|-------|-----------|--------|
| **1. v2.6 manuel** | Humain, ChatGPT, Cursor | Git + chat | Hors Studio | Libre hors produit | Prompt Markdown | Humain hors UI | Copier-coller | v2.6 only |
| **2. v2.6 assisté Studio** | + Studio partiel | Git + OPS1 partiel | Session loose | Studio chat | Partiels OPS1 | UI OPS1 | Cursor OPS1 possible | **Pas de claim v3** |
| **3. Transitionnel** | Studio + GPT + Cursor | Git + SQL partiel | Projet/cycle partiels | Rattachée si dispo | Partiels | Mixtes | Sous contrat si dispo | « v3 candidate / transition » |
| **4. v3.0 Studio-native** | Tous rôles Studio | Git defs + SQL état + artefacts | Complets | Dual-channel | Complets | UI + policy | Contract→Cursor | Claim v3 **si éligible** |
| **5. v3 indisponible / fallback** | Opérateur | Mode 1 ou 2 | — | — | — | — | Legacy | **Interdit claim v3** |

## 5. Critères d’entrée / sortie v3 (candidats — non figés)

**Entrée éligibilité v3 (projet) :** checklist capacités §2 + mode 4 actif + doctrine version affichée + audit on.

**Sortie / fallback :** capacité manquante, stale non résolu, authz insuffisante, divergence Git/SQL non réparée → bascule mode 5 avec message explicite.

## 6. Comportements dégradés

- Afficher le mode courant dans l’IHM.
- Interdire les claims v3 hors mode 4 éligible.
- Ne jamais « simuler » un gate.
- Conserver export Git des artefacts critiques.

## 7. Décisions humaines requises

- Valider la définition Studio-native.
- Valider la matrice des 5 modes.
- Trancher les critères minimaux (renforcer ou alléger).

---

## Clôture cadrage

**D1 validée :** applicabilité Studio-native exclusive. Modes 1–5 conservés. Statut plateforme cible actuelle : **V3-DOCUMENTED**.

```

### `projects/sfia-studio/sfia-v3-framing/16-sfia-v3-user-journey-and-doctrine-enforcement.md`

```markdown
# 16 — Parcours utilisateurs et enforcement doctrinal (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |

## 1. Principe

Le parcours utilisateur est une **projection de la doctrine**, pas un workflow libre.
GPT reste libre de raisonner ; le moteur borne contexte, outils, états, transitions et effets.

## 2. Patron commun de parcours

Pour chaque parcours : entrée IHM · contexte · états requis · rôles · sources · livrables · actions · gates · effets · transitions · preuves · sortie · blocages.

### 2.1 Créer un projet
- **Entrée :** Accueil → Nouveau projet
- **États :** Workspace OK ; Project DRAFT
- **Humain :** responsable + décideur (création)
- **GPT :** clarifier intention, baseline, risques
- **Moteur :** allouer ids ; refuser hors Workspace
- **Sources :** doctrine applicable (v2.6 ou defs v3 candidates)
- **Livrables :** Project + ProjectTrajectory draft
- **Gates :** confirmation création
- **Effets :** INSERT SQL Project ; scaffold Git optionnel gated
- **Blocage :** baseline inconnue ; permissions

### 2.2 Reprendre / importer / consulter clôturé
- Reprendre : Project existant → cockpit
- Importer : mapping artefacts → objets SQL + refs Git ; validation colonnes
- Consulter clôturé : read-only ; pas d’exécution

### 2.3 Qualifier une demande / initier ou poursuivre un cycle
- Cycle Router propose type/profil
- GuidedSession QUALIFYING → READY
- GPT peut challenger et proposer **autre** cycle
- Moteur refuse transition sans préconditions

### 2.4 Suspendre / reprendre
- PAUSED avec snapshot digests
- Reprise → revalidate CONTEXT_STALE

### 2.5 Demander une décision
- DecisionRequest → DECISION_REQUIRED
- Gate UI (pas de phrase chat = GO)

### 2.6 Proposer / exécuter / corriger une action
- ActionProposal → Compiler → ActionCandidate → Gate → ExecutionContract → Cursor
- Correction : refine / nouvelle proposal ; **pas** d’élargissement silencieux

### 2.7 Valider / clôturer / capitaliser
- ValidationResult → TransitionProposal → HumanDecision
- CapitalizationRecord + éventuel review pack/handoff

## 3. Matrice parcours × enforcement

| Parcours | GPT libre | Moteur contraint | Gate humain typique |
|----------|-----------|------------------|---------------------|
| Créer projet | Intention, naming | Ids, mode méthodo | Création |
| Qualifier cycle | Challenge type/profil | Routing defs | Si ambigu |
| Décision | Options/reco | Persist Decision | **Oui** |
| Action | Proposal prose | Compiler/paths | Avant Cursor |
| Exécution | Analyse post | Contrat/hash | GO exécution |
| Transition | Proposition | State machine | Structurante |
| Import Excel | Aide mapping | Schema colonnes | Si write large |

## 4. Anti-questionnaire

Interdit : arbre de phrases figées exclusives.
Autorisé : questions guidées **suggérées**, questions GPT ad hoc, découverte d’info inattendue — tant que le canal de contrôle reste valide.

## 5. Doctrine enforcement dans Studio

Studio doit :

1. Identifier ProjectState / CycleState
2. Proposer parcours pertinents seulement
3. Ouvrir/reprendre le bon cycle
4. Charger SourceContext
5. Matérialiser gates
6. Limiter transitions
7. Tracer décisions
8. Orchestrer exécutions

L’utilisateur **ne choisit pas** un workflow hors méthode (sauf mode v2.6 explicite).

## 6. Décisions humaines requises

- Valider le catalogue de parcours.
- Valider l’interdiction du free-chat en mode v3.
- Prioriser parcours du vertical slice (13/22).

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

### Enforcement E0–E4 (D4)

Les parcours appliquent les niveaux E0–E4 (25) : information → recommandation → réserve → dérogation gate → blocage absolu.

```

### `projects/sfia-studio/sfia-v3-framing/17-sfia-v3-information-and-artifact-architecture.md`

```markdown
# 17 — Architecture de l’information et des artefacts (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Note | Aucun fichier JSON/SQL/XLSX/PPTX créé dans ce cycle |

## 1. Cinq couches

### Couche 1 — Doctrine humaine
- **Formats :** Markdown
- **Contenu :** principes, gouvernance, rationale, règles explicables
- **Stockage :** Git (`method/`, framing candidats)
- **SoT :** Git
- **MAJ :** cycles méthode gated

### Couche 2 — Définitions exécutables
- **Formats candidats :** JSON **préféré** pour contrats machine ; YAML acceptable pour defs lisibles si schéma équivalent ; **JSON Schema** pour validation
- **Contenu :** CycleDefinition, StateDefinition, TransitionDefinition, GateDefinition, RoleDefinition, PolicyDefinition, ArtifactDefinition, ValidationDefinition, EventDefinition, ContractSchema
- **Stockage :** Git (versionnés)
- **SoT :** Git + digest
- **Règle :** ne pas dupliquer en TypeScript comme SoT

### Couche 3 — État opérationnel
- **Support :** SQL
- **Contenu :** Workspace, Project, CycleInstance, GuidedSession, HumanDecision, GateInstance, ActionCandidate, ExecutionAttempt, Evidence, Reserve, Transition, AuditEvent, permissions
- **SoT runtime :** SQL
- **Réf Git :** doctrineVersion, definitionDigests, headSha

### Couche 4 — Artefacts métier
- **Formats :** XLSX, CSV, diagrammes, images, PJ, docs bureautiques
- **Exemples :** RACI, backlog, risques, inventaire, mapping, coûts
- **Rôle :** import / artefact utilisateur / preuve — **jamais** doctrine
- **Stockage :** blob store ou Git LFS/PJ + métadonnées SQL

### Couche 5 — Restitutions
- **Formats :** slides, PDF, rapports MD, dashboards, exports
- **Exemples :** decision pack, COPIL, REX, revue de cycle
- **Règle :** générées ; **pas** source concurrente

## 2. Fiche couche (commun)

Pour chaque couche : finalité · SoT · ownership · versionnement · stockage · API · validation · sync · audit · rétention · sécurité · génération · import/export · règles de MAJ — voir matrices ci-dessus + docs 19.

## 3. Hiérarchie des sources (candidate)

1. Doctrine + définitions exécutables (Git)
2. Décisions humaines enregistrées (SQL immuables)
3. État opérationnel SQL
4. Artefacts métier (fichiers + meta)
5. Restitutions générées
6. Contexte conversationnel temporaire
7. Inférences GPT

**En cas de conflit :** Git defs > HumanDecision > SQL state dérivé > artefact importé > restitution > chat > inférence.
Stale si HEAD/digests ≠ context → blocage effets.

## 4. Conflits typiques et résolution

| Conflit | Autorité | Action |
|---------|----------|--------|
| Git vs SQL | Git defs + HumanDecision | Rehydrate / requalify |
| SQL vs Excel importé | SQL après validation mapping | Conserver fichier source en preuve |
| JSON vs Markdown | Markdown rationale ; JSON exécutable | Lien bidirectionnel + tests conformité |
| Rapport vs Evidence | Evidence | Régénérer rapport |
| Cache vs HEAD | HEAD | CONTEXT_STALE |

## 5. Décisions humaines requises

- Valider les 5 couches.
- Valider JSON-first pour defs exécutables.
- Valider « Excel jamais canonique ».

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

```

### `projects/sfia-studio/sfia-v3-framing/18-sfia-v3-doctrine-to-runtime-projection-matrix.md`

```markdown
# 18 — Matrice doctrine → runtime (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Règle | Une ligne = un élément doctrinal ; éviter triple maintenance MD/JSON/TS |

Légende colonnes : **Doc** doctrine MD · **Def** JSON/Schema · **SQL** · **GPT** · **UI** · **Gate** · **Policy** · **Event** · **Preuve** · **Restit** · **Test** · **Risque dup.**

## Matrice transverse (minimum)

| Élément | Doc | Def | SQL | GPT | UI Studio | Gate | Policy | Event | Preuve | Restitution | Testable | Risque dup. |
|---------|-----|-----|-----|-----|-----------|------|--------|-------|--------|-------------|----------|-------------|
| Principe | MD | ref id | — | preamble | aide | — | enforce flags | — | — | slide principes | review | Haut si recopié TS |
| Rôle | MD | RoleDefinition | assignment | mention | admin rôles | habilitation | RBAC | ROLE_* | — | RACI export | oui | Moyen |
| Cycle | routing MD | CycleDefinition | CycleInstance | propose | cycles | entrée | routing | CYCLE_* | livrables | revue cycle | oui | Moyen |
| Profil | MD | enum | on instance | qualify | badge | — | depth rules | — | — | — | oui | Bas |
| Bloc | MD | enum[] | active_blocks | cite | chips | — | — | — | — | — | oui | Bas |
| Gate | MD | GateDefinition | GateInstance | request | boutons | **humain** | closed/open | GATE_* | decision record | decision pack | oui | Haut si chat=GO |
| Entrée cycle | MD | preconditions | check | explain | checklist | si critique | fail-closed | — | — | — | oui | Bas |
| Sortie cycle | MD | exit criteria | ValidationResult | analyse | validation | parfois | — | — | evidence | rapport | oui | Bas |
| Livrable | MD | ArtifactDefinition | artifact meta | propose | liste | — | path policy | — | files | pack | oui | Moyen |
| Stop condition | MD | StopDefinition | — | respect | alertes | — | deny | STOP_* | — | — | oui | Haut si oublié |
| Automatisation | MD | AutomationClass | — | — | mode badge | selon classe | caps | — | — | — | oui | Moyen |
| Décision | MD | DecisionSchema | HumanDecision | options | decision panel | **oui** | immutability | DECISION_* | motif | slides | oui | Bas |
| Action | MD | ProposalSchema | ActionCandidate | proposal | action panel | avant exec | compiler | ACTION_* | exact content | — | oui | Moyen |
| Validation | MD | ValidationDefinition | ValidationResult | analyse | validation | si structurant | — | VALID_* | checks | rapport | oui | Bas |
| Transition | MD | TransitionDefinition | Transition | propose | next steps | structurant | state machine | TRANS_* | — | trajectoire | oui | Moyen |
| Réserve | MD | ReserveClass | Reserve | cite | risques | — | — | RESERVE_* | — | REX | oui | Bas |
| Review pack | template MD | PackProfile | report meta | — | export | — | completeness | — | full content | handoff MD | oui | Haut si résumé seul |
| Handoff | guardrails | publish rules | — | — | status | — | branch only | — | remote SHA | latest-chatgpt-review | oui | Bas |
| Capitalisation | MD | CapRecord schema | CapitalizationRecord | propose | capitalisation | — | — | CAPA_* | assets | REX | oui | Moyen |

## Mécanisme anti-duplication (candidat)

1. **SoT humaine** = Markdown (pourquoi).
2. **SoT machine** = JSON + JSON Schema versionnés Git (quoi exécutable).
3. **Runtime** = SQL instances + digests des defs.
4. **Code** = chargeurs/validateurs uniquement — pas de re-codage des enums métier sans test de conformité Schema.
5. CI candidate (futur) : `schema validate` + `doc anchors` + `no orphan enums in TS`.

## Source / responsable / auditabilité

- Responsable doctrine : cycles méthode gated.
- Responsable defs : co-design avec Studio (Option D).
- Audit : chaque effet cite `definitionId@digest` + `decisionId` si gate.

## Décisions humaines requises

- Valider cette matrice comme contrat de conception.
- Trancher l’outil de conformité croisée (CI) pour plus tard.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

```

### `projects/sfia-studio/sfia-v3-framing/19-sfia-v3-canonical-data-and-contract-strategy.md`

```markdown
# 19 — Stratégie données canoniques et contrats (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Interdit ici | créer JSON/YAML/SQL/XLSX/PPTX réels |

## 1. JSON / YAML / JSON Schema

**Recommandation candidate :** JSON + JSON Schema comme format primaire des définitions exécutables ; YAML optionnel en authoring si projection JSON générée et validée.

| Besoin | Choix candidat |
|--------|----------------|
| Contrats machine | JSON |
| Authoring humain dense | YAML → compile JSON |
| Validation | JSON Schema (Draft moderne) |
| Versionnement | Git path + `schemaVersion` + digest |
| Migrations | lots versionnés ; dual-read temporaire |
| IDs | kebab/stable ids ; pas d’UUID dans defs |
| Enums | Schema enum ; tests conformité code |
| Extensibilité | `x-sfia-*` extensions documentées |
| i18n | labels séparés ; ids stables |
| Gén. types | optionnelle plus tard — jamais SoT inverse |
| Sécurité | pas de secrets dans defs |

**Rôles des fichiers structurés :** sources canoniques de **définitions** (Git) ; snapshots digests en SQL ; contrats d’échange API ; **pas** cache conversationnel comme SoT.

## 2. SQL — état vivant, pas doctrine

SQL représente l’état opérationnel :

- tables/agrégats candidats : projects, cycle_instances, sessions, decisions (immuables), gate_instances, action_candidates, execution_contracts, attempts, evidence, reserves, transitions, audit_events, memberships
- **Event store** recommandé pour audit ; modèle transactionnel pour état courant
- Historisation décisions : append-only
- Soft delete projets ; jamais delete silencieux des decisions
- Concurrence : optimistic locking sur Project/Cycle
- Permissions / multi-projets / multi-users : tables d’assignment
- Colonne `doctrine_version` + `definition_digests`
- Export / anonymisation / rétention : politiques RUN

| Objet | Git only | SQL only | SQL→Git ref | Snapshot | Rebuild events |
|-------|----------|----------|-------------|----------|----------------|
| CycleDefinition | ✓ | | | | |
| ProjectState | | ✓ | digests | option | partiel |
| HumanDecision | | ✓ | | ✓ | ✓ |
| Evidence files | paths | meta | blob/path | | |
| ExecutionContract | | ✓ | | ✓ | ✓ |

**Aucune migration SQL dans ce cycle.**

## 3. Excel / CSV

| Usage | Autorisé ? |
|-------|------------|
| Source d’import | Oui, après validation template |
| Artefact utilisateur | Oui |
| Preuve | Oui (fichier conservé) |
| Restitution | Oui |
| Doctrine / SoT | **Non** |

Priorités : RACI, risques, backlog, stakeholders, inventaire, migration, mapping données, coûts.
Contrôles : version template, colonnes, doublons, PII, volumétrie, mapping objets Studio, conservation source, réexport.

## 4. Slides / PDF / restitutions

Générés depuis Git defs + SQL state + Evidence.
Métadonnées : version, date, auteur rôle, statut, décisions, réserves, preuves.
**Ne deviennent pas** une source concurrente.
Archivage : blob + hash + lien cycle.

## 5. Template Cursor — rôle futur

**Modèle actuel (v2.6 / CT) :** Template MD → instantiation → prompt.

**Modèle cible candidat v3 :**

```
Doctrine + CycleDefinition + ProjectState + HumanDecision
+ ActionCandidate + Policies
→ ExecutionContract (SoT runtime de l’exécution)
→ Cursor Prompt Projection
→ Cursor
```

Le template Markdown devient principalement : **documentation + projection/fallback/debug + compatibilité legacy v2.6** — plus l’objet pivot d’exécution v3.

Champs ExecutionContract : objective, paths, ops, exact content, stop, gates, digests, hash, version, allowlist, timeout, evidence expectations, reinjection hooks.

**Ne pas modifier** `prompts/templates/sfia-cycle-execution-template.md` dans ce cycle.

## 6. Clôture

JSON-first, SQL état, Excel non canonique, ExecutionContract pivot : **décisions de cadrage** (R1/R3/D2/D8 liés).
Dette : schémas JSON réels → V3-MODELED.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

```

### `projects/sfia-studio/sfia-v3-framing/20-sfia-v2.6-v3-coexistence-and-migration-model.md`

```markdown
# 20 — Coexistence SFIA v2.6 / v3.0 et migration (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |

## 1. Régimes

Voir aussi doc 15 (modes 1–5). Synthèse migration :

| Régime | Doctrine | Studio | Claim |
|--------|----------|--------|-------|
| v2.6 manuel | v2.6 | absent | v2.6 |
| v2.6 assisté | v2.6 | partiel OPS1/CT | v2.6 — **interdit v3** |
| Transitionnel | v2.6 + defs v3 candidates | capacités partielles | « v3 candidate / transition » |
| v3 Studio-native | defs v3 + MD rationale | complet | v3 si éligible (21) |
| Fallback | v2.6 | dégradé | jamais v3 |

## 2. Sélection de mode

Règles candidates :

1. Afficher le mode dans l’IHM (badge).
2. Mode par **projet** (pas global silencieux).
3. Upgrade mode 3→4 seulement si checklist éligibilité OK.
4. Downgrade automatique si capacité critique absente.
5. Opérateur peut forcer fallback avec motif tracé.

## 3. Migration projet

| Étape | Contenu |
|-------|---------|
| Inventaire | sessions OPS1, docs projet, preuves |
| Import | créer Project/Cycles ; lier artefacts |
| Mapping | décisions historiques → HumanDecision si possible |
| Validation | digests ; gaps → réserves |
| Cutover | bascule mode après GO projet |
| Rollback | retour mode 2/1 ; SQL conservé read-only |

## 4. Import historique / incompatibilités

- Sessions OPS1 sans Project → rattachement manuel.
- Prompts collés sans contractHash → non rejouables en v3 claims.
- Docs v2.6 restent lisibles ; non réécrits.

## 5. Abandon v2.6 vs maintien legacy

**Abandon (lointain, gated) :** tous projets éligibles v3 ; support manuel documenté ; GO ADOPTION + période dual.
**Maintien legacy :** projets hors Studio ; audits ; formation.
**Risque :** deux doctrines actives trop longtemps → dette (V3-R05).

## 6. Support / dette

- Formation modes.
- Runbooks fallback.
- Interdiction marketing « tout est v3 » tant que mode ≠ 4 éligible.

## 7. Décisions humaines requises

- Valider modes et claims.
- Politique de durée du dual-run.
- Priorité migration vs nouveaux projets v3.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

```

### `projects/sfia-studio/sfia-v3-framing/21-sfia-v3-adoption-eligibility-and-gates.md`

```markdown
# 21 — Éligibilité et gates d’adoption SFIA v3.0 (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Rappel | Documents validés ≠ adoption |

## 1. Statuts d’adoption candidats

| Statut | Signification | Conditions candidates |
|--------|---------------|----------------------|
| **V3-DOCUMENTED** | Cadrage écrit | Pack framing 01–22 cohérent |
| **V3-MODELED** | Defs structurées conçues | Stratégie JSON/SQL validée (pas forcément fichiers runtime) |
| **V3-IMPLEMENTED** | Capacités runtime | Slice produit implémentée locale |
| **V3-VALIDATED** | Preuves live | Exécution+preuves+validation+audit |
| **V3-ELIGIBLE** | Critères produit OK | Checklist §2 + sécu + non-régression |
| **V3-ADOPTED** | Baseline méthode | **GO ADOPTION** + merge doctrine `method/` |

Aujourd’hui : cadrage **clôturé** au statut **V3-DOCUMENTED** — **pas** ADOPTED.

## 2. Gates candidats (chaîne)

1. Doctrine candidate validée (humain)
2. Définitions structurées validées (modèle)
3. Parcours utilisateurs validés
4. Modèle SQL validé (conception)
5. Sécurité validée
6. Vertical slice fonctionnelle
7. Cursor sous contrat
8. Preuves
9. Validation
10. Transition
11. Audit
12. Non-régression
13. Migration
14. Documentation RUN
15. **GO ADOPTION** (baseline)

## 3. Critères d’éligibilité runtime (rappel 15)

Projet + cycle + contexte + conversation rattachée + décision tracée + action structurée + exécution sous contrat + preuves + validation + transition + audit.

## 4. Anti-claims

- V3-DOCUMENTED ≠ production.
- Control Tower ≠ V3-ADOPTED.
- Handoff framing ≠ baseline.

## 5. Décisions humaines requises

- Valider la chaîne de statuts.
- Nommer le GO entre VALIDATED et ELIGIBLE.
- Séparer clairement validation cadrage vs adoption.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

```

### `projects/sfia-studio/sfia-v3-framing/22-sfia-v3-consolidated-challenge-and-decision-pack.md`

```markdown
# 22 — Decision pack final du cadrage SFIA v3.0

| Champ | Valeur |
|-------|--------|
| Statut | **Cadrage clôturé — V3-DOCUMENTED** |
| Gate clôture | `GO CLÔTURE CADRAGE SFIA v3.0 — RÉSERVES R1–R5 ET TRAJECTOIRE OPTION D` |
| Gate suivant | `GO VALIDATION DOCUMENTAIRE DU CADRAGE SFIA v3.0` |
| Ultérieur | `GO OUVERTURE V3-MODELED` |
| Baseline | SFIA v2.6 |
| Adoption | **Non** |

## 1. Décisions validées (cadrage)

| Id | Décision | Doc |
|----|----------|-----|
| D1 | Studio-native exclusive | 01, 15 |
| D2 | ReviewBundle hybride | 23 |
| D3/R1 | MD pourquoi / JSON quoi / SQL état | 24, 08, 17 |
| D4/R2 | Enforcement E0–E4 | 25, 16 |
| D5/R3 | SQL hybride + audit append-only | 26, 10 |
| D6/R4 | Six niveaux maturité | 27, 21 |
| D7/R5 | Pas de migration générale | 28, 20 |
| D8 | **Option D validée** (trajectoire) | 29, 14 |

## 2. Matrice de clôture des réserves

| Réserve | Décision | Statut | Dette transférée | Cycle futur |
|---------|----------|--------|------------------|-------------|
| Review pack | ReviewBundle hybride | **Clôturée cadrage** | Modèle détaillé | V3-MODELED |
| R1 | JSON runtime + MD rationale | **Clôturée** | Schémas réels | V3-MODELED |
| R2 | E0–E4 | **Clôturée** | Policies détaillées | V3-MODELED |
| R3 | SQL txn + audit | **Clôturée** | Schéma logique/physique | Archi technique |
| R4 | Six niveaux | **Clôturée** | Gates automatisés | QA/validation |
| R5 | Pas migration générale | **Clôturée** | Reprise exceptionnelle | Cycle dédié si besoin |
| Trajectoire | Option D | **Validée cadrage** | Backlog slices D1–D3 | Conception |

Les réserves de cadrage sont **clôturées** ; leurs travaux de conception restent des **dépendances explicites** (pas « zéro réserve » absolu).

## 3. Décisions non prises

- Adoption SFIA v3.0 / V3-ADOPTED
- Passage V3-MODELED
- Architecture physique SQL
- Schémas JSON définitifs
- Stack technique définitive
- Périmètre exact du premier incrément d’implémentation
- Démarrage implémentation
- Stratégie commit/PR/merge projet

## 4. Option D

Validée comme trajectoire de **conception**.
**N’autorise pas** l’implémentation. Voir 29 (BoundedCoDesignIncrement, slices D1–D3).

## 5. Anti-claims

Pas baseline v3 · pas implémentation · pas Schema/SQL/XLSX réels · v2.6 intact · review pack v2.6 encore requis pour cycles Cursor sous baseline actuelle.

## 6. Verdict

**SFIA v3.0 FRAMING CLOSED — V3-DOCUMENTED — HUMAN VALIDATION REQUIRED**

```

## 7. Décisions non prises / dette / anti-claims

Non prises : adoption, V3-MODELED, schéma physique, JSON définitifs, implémentation, commit/PR.
Dette : schémas, policies détaillées, UI ReviewBundle, slices D1–D3 conception.
Anti-claims : pas baseline v3 ; pas code ; v2.6 intact ; pack v2.6 encore requis pour Cursor sous baseline.

## 8. État Git final

```
32e5271842b9a344a7e292614675c27ea8ed941b
delivery/sfia-studio-control-tower-fast-track
?? projects/sfia-studio/sfia-v3-framing/
```

**VERDICT :** SFIA v3.0 FRAMING CLOSED — V3-DOCUMENTED — HUMAN VALIDATION REQUIRED

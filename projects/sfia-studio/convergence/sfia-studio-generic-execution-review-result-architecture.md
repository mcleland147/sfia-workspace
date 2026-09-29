# SFIA Studio — Architecture de référence : Generic Execution → Execution Review → Evidence → Nora → Result → Pilot

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Titre** | Generic Execution / Execution Review / Evidence / Nora / Result / Pilot — Architecture de référence |
| **Rôle documentaire** | **CURRENT ARCHITECTURE REFERENCE** (cible adoptée + cartographie factuelle du code) |
| **Chaîne couverte** | `GENERIC EXECUTION → EXECUTION REVIEW → EVIDENCE → NORA → RESULT → PILOT` |
| **Statut** | **ADOPTED TARGET ARCHITECTURE BY MORRIS** — **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** |
| **Décisions datées** | **2026-09-29** |
| **Base main auditée** | `6f47f74dc9b515c4c79624b21772223ba02c76cd` |
| **Qualification épistémique** | Assertions étiquetées : `CURRENT IMPLEMENTED FACT` · `REAL OBSERVATION` · `AUDIT INFERENCE` · `TARGET ARCHITECTURE — ADOPTED BY MORRIS` · `TRANSITIONAL DEBT` · `OPEN DESIGN DETAIL` · `FUTURE PROOF` |
| **runtime v3** | **NON ADOPTED** |
| **READY FOR REAL** | **NO** |
| **Delivery slicing** | **NOT ADOPTED / TBD** — aucun plan en N lots inventé |
| **Autorité d’exécution** | Ce document **n’autorise pas** commit / push / PR / REAL / Execute |
| **Nature** | Référence d’architecture Product — **≠** doctrine · **≠** Build Doctrine · **≠** C1 · **≠** baseline v2.6 · **≠** promotion runtime v3 |

---

## Légende épistémique (obligatoire)

| Tag | Signification |
| --- | --- |
| **CURRENT IMPLEMENTED FACT** | Observé dans le code / runtime sur main `6f47f74d` (ou preuve Git/CI associée) |
| **REAL OBSERVATION** | Observation de campagne REAL bornée (NoteLite) — scope testé uniquement |
| **AUDIT INFERENCE** | Inférence d’architecture à partir du code / des seams — **≠** preuve d’instance |
| **TARGET ARCHITECTURE — ADOPTED BY MORRIS** | Cible adoptée le 2026-09-29 — **≠** implémenté tant que non tagué autrement |
| **TRANSITIONAL DEBT** | Pont / legacy vivant à retirer ou généraliser sous conditions |
| **OPEN DESIGN DETAIL** | Décision d’architecture encore ouverte |
| **FUTURE PROOF** | Preuve de sortie / critère d’exit futur — non réalisé |

**Règle éditoriale :** ne jamais présenter une assertion **TARGET** comme **IMPLEMENTED**. Ne jamais inventer de preuve REAL au-delà des faits NoteLite bornés ci-dessous.

---

## 1. Métadonnées / statut

### 1.1 Objet

Ce document fixe la **référence d’architecture Product** pour le circuit générique d’exécution gouvernée dans SFIA Studio, après requalification de la trajectoire spécialisée (`docs_write` et taxonomies Product homologues) vers un modèle **Generic Product Execution** centré sur :

1. un **ExecutionContract** sémantique unique (WHAT) — y compris **reportRequirements** exigeant Report + Review End Of ;
2. un exécuteur **Cursor Generalist** (HOW) en **worktree isolé** ;
3. un **CursorExecutionReport** = **CLAIM** (sortie exécuteur) ;
4. un **Cursor Review End Of** = **CLAIM** (sortie exécuteur) — *Native* = binding/stockage/consommation Studio, **≠** producteur Studio ;
5. un **Studio VerifiedChangeSet** (VERIFIED FACTS) ;
6. une **Generic Execution Review Material** (composition reviewable post-vérification) ;
7. **Evidence / ReviewBundle / ClaimEvaluation** ;
8. **Product Resolution** unique + **Reconciler** ;
9. **Nora** (analyse profonde bornée) ;
10. **Result Surface** → décision Pilot.

### 1.2 Statut décisionnel

| Élément | Qualification |
| --- | --- |
| Cible architecturale D-ER-01…15 | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-09-29) |
| Intégration Git de ce document | **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** |
| Implémentation complète de la cible | **NON** — voir matrice CURRENT/TARGET |
| runtime v3 | **NON ADOPTED** |
| READY FOR REAL (boucle générique cible) | **NO** |
| Delivery slicing (lots) | **TBD** — **D-ER-15** |

### 1.3 Anti-confusion de maturité

| Claim interdit | État |
| --- | --- |
| « Architecture cible déjà livrée » | **FAUX** — cible adoptée ≠ code convergé |
| « Generic loop REAL-proven » | **FAUX** — NoteLite prouve un chemin borné, pas la cible complète |
| « runtime v3 ADOPTED » | **FAUX** |
| « Delivery plan 5 lots » | **FAUX** — non adopté ; TBD |

---

## 2. Déclaration exécutive d’architecture

### 2.1 Circuit nominal cible

**TARGET ARCHITECTURE — ADOPTED BY MORRIS**

```text
Pilot / Nora context
  → ExecutionContract (WHAT générique Product
       + reportRequirements : CursorExecutionReport + Cursor Review End Of)
  → Pilot inspection + Confirmation / authority
  → Governed Execute
  → Cursor Generalist HOW (isolated detached git worktree)
  → Cursor terminal outputs :
       ├── CursorExecutionReport [CLAIM]
       ├── Cursor Review End Of [CLAIM]
       └── candidate worktree effects / outputs
  → Studio independent observation
  → Studio VerifiedChangeSet [VERIFIED FACTS]
  → Finalized Generic Execution Review Material
       (executorClaims + verifiedEffects + reviewItems[])
  → Evidence + ReviewBundle + ClaimEvaluation
  → Product Resolution (unique)
  → Reconciler (progression déterministe)
  → Nora Deep Review (outils read-only bornés) [ANALYSIS]
  → Result Surface (explique toujours)
  → Pilot decision / continue / correct / stop [AUTHORITY]
```

**Nuance durability (OPEN DESIGN DETAIL d’implémentation) :** une **RAW EXECUTION OUTPUT CAPTURE** précoce (crash-safety des sorties Cursor) peut précéder la vérification Studio. Elle **≠** le **FINALIZED EXECUTION REVIEW MATERIAL**, qui compose la matière reviewable **après** observation / VerifiedChangeSet.

### 2.2 Invariant central

**TARGET ARCHITECTURE — ADOPTED BY MORRIS** · partiellement **CURRENT IMPLEMENTED FACT** sur le backbone OA / NELC :

- L’**ExecutionContract** est le **seul WHAT Product** pour inspection Pilot, projection mission Cursor, binding d’enforcement, évaluation de résultat et analyse post-exécution.
- **Cursor** possède le **HOW** à l’intérieur du contrat autorisé.
- Les **catégories techniques** (effets, policies, overlays) ne sont **pas** des **catégories de tâche Product**.
- **Claim ≠ Fact ≠ Analysis ≠ Authority**.

### 2.3 Verdict de requalification

La spécialisation Product par taxonomie de tâche (`docs_write`, et homologues `code_write` / `read` / `read_only` comme exemples de taxonomies Product à retirer) est **architecture de transition**, pas architecture cible.

La cible adoptée est **un modèle Product générique** + **capabilities/effects techniques** en enforcement — **sans** inventer de nouvelles catégories Product du type `generic_read` / `generic_write` / `generic_code`.

---

## 3. Périmètre / hors-périmètre

### 3.1 In scope

| Thème | Qualification |
| --- | --- |
| Modèle Product Execution générique | TARGET + CURRENT backbone |
| ExecutionContract semantics / projection Cursor | CURRENT + TARGET |
| Isolated worktree + Real launch gateway | CURRENT KEEP |
| Claim / Evidence / RB / CE / VerifiedChangeSet | CURRENT partiel + TARGET |
| Cursor Review End Of (CLAIM) + Generic Execution Review Material | TARGET (+ harvest CURRENT) |
| Product Resolution + Continuity + Reconciler | CURRENT partiel + TARGET |
| Nora post-Evidence / Deep Review | CURRENT partiel + TARGET |
| Result Surface / Pilot journey | TARGET (+ surfaces CURRENT) |
| Restart / recovery / retention / GC | CURRENT partiel + TARGET |
| Retirement des taxonomies Product spécialisées | TARGET + TRANSITIONAL DEBT |
| Frontière Git promotion future | OPEN / FUTURE |

### 3.2 Out of scope (explicite)

| Hors-périmètre | Note |
| --- | --- |
| Adoption runtime v3 | **NON ADOPTED** — non décidé ici |
| Plan de delivery en N lots | **TBD** — D-ER-15 |
| Doctrine / Build Doctrine / C1 rewrite | Non autorisé par ce document |
| Invention de catégories Product `generic_*` | **INTERDIT** |
| Preuves REAL au-delà de NoteLite borné | **INTERDIT** |
| Autorité push / PR / merge | Distinct Morris GO |
| MealFlow / autres campagnes | Non autorisées par ce document |

---

## 4. Sources / base de preuve

| Source | Nature | Usage |
| --- | --- | --- |
| Main `6f47f74dc9b515c4c79624b21772223ba02c76cd` | Git / code Product | **CURRENT IMPLEMENTED FACT** |
| Audit code (generalist surface, EC, gateway, verifier, continuity, Nora, Evidence) | Lecture code | **CURRENT IMPLEMENTED FACT** / **AUDIT INFERENCE** |
| NoteLite REAL (scope testé) | Campagne Product REAL | **REAL OBSERVATION** bornée |
| Capitalisations convergence (NELC #527, docs_write, ContractResult, continuity) | REX documentaire | Contexte / harvest — ne pas sur-réclamer |
| Décisions Morris D-ER-01…15 (2026-09-29) | Gouvernance architecture | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** |

**Hiérarchie :** Git/code > REAL borné > audit inference > cible adoptée > open detail. Une cible adoptée **ne remplace pas** un fait d’implémentation manquant.

---

## 5. Contexte / pourquoi la requalification

### 5.1 Trajectoire historique (résumé factuel)

**CURRENT IMPLEMENTED FACT** / capitalisations :

1. Chemins Product spécialisés (`docs_write` en tête) ont permis des preuves REAL bornées et l’intégration de seams Evidence / RB / ContractResult.
2. `NATIVE-EXECUTION-LOOP-CONVERGENCE-01` (PR **#527**) a convergent un circuit natif autour d’un EC sémantique + projection Cursor généraliste + report enrichi — **déterministe**, **≠ READY FOR REAL**.
3. `PRODUCT-CONTINUITY-SHARED-KNOWLEDGE-01` (ancre main `6f47f74d` / PR **#540**) a introduit Product Resolution + Continuity Projection + Reconciler comme owners de progression.

### 5.2 Problème structurant

**AUDIT INFERENCE** (validé comme motive de décision Morris) :

Le Product modèle actuel **mélange** encore :

- des **taxonomies de tâche Product** (`docs_write`, et patterns homologues `code_write` / `read` / `read_only`) ;
- des **capabilities / effects techniques** ;
- des **ponts de materialization / ingest** nommés par effet ;
- une **UI de continuité** qui peut s’arrêter (poll) sans worker autonome.

Résultat : la richesse sémantique du contrat généraliste coexiste avec des branches spécialisées qui **empêchent** de traiter Execution Review / Result / Pilot comme un circuit générique unique.

### 5.3 Requalification adoptée

**TARGET ARCHITECTURE — ADOPTED BY MORRIS** :

Retirer les taxonomies Product spécialisées du **modèle Product** ; conserver / généraliser les **mécanismes techniques** utiles (worktree, verifier, Evidence, RB, CE, Resolution, Reconciler) ; exiger **CursorExecutionReport + Cursor Review End Of** comme CLAIMs exécuteur ; introduire **VerifiedChangeSet** Studio + **Generic Execution Review Material** ; garder Claim/Fact/Analysis/Authority séparés.

---

## 6. NoteLite — observations REAL bornées

> Toutes les assertions de cette section sont **REAL OBSERVATION** au **scope testé NoteLite** uniquement.
> **≠** preuve de la cible D-ER complète. **≠** READY FOR REAL générique.

### 6.1 Chaîne PROVEN AT TESTED SCOPE

| Étape | Observation |
| --- | --- |
| EC → Attempt REAL | **PROVEN** |
| Cursor REAL | **PROVEN** |
| Attempt `succeeded` | **PROVEN** |
| Evidence / RB / CE durables (recovery path) | **PROVEN** |
| Product Resolution | **PROVEN** (chemin de résolution) |
| Nora post-Evidence | **PROVEN** |
| Nora conversationnelle ensuite | **PROVEN** |
| Transfert d’ID Pilot | **NON** — conversation sans transfert d’ID Pilot **PROVEN AT TESTED SCOPE** |

### 6.2 NOT_PROVEN

Lorsque l’Evidence est insuffisante, le statut **NOT_PROVEN** est **préservé** — **REAL OBSERVATION** alignée avec la sémantique fail-closed ContractResult.

### 6.3 Gap UI / continuité (qualification honnête)

| Élément | Qualification |
| --- | --- |
| UI restée sur **materialization pending** | **REAL OBSERVATION** |
| Pilot a cliqué **« Recharger résultat produit »** pour continuer | **REAL OBSERVATION** |
| Cause architecturale **haute confiance** : poll TrajectorySurface exhausté (≤ 8 `continue`) **sans worker autonome** après exhaust | **AUDIT INFERENCE** — **HIGH-CONFIDENCE ARCHITECTURAL CAUSE** |
| Cause racine **d’instance** prouvée pour ce run Exact | **≠ PROVEN INSTANCE ROOT CAUSE** |

### 6.4 Chemins artifact / logique

| Couche | Valeur observée |
| --- | --- |
| Artifact physique (campagne) | sous `.sfia-exec/.../docs-write-artifact/...` |
| Cible logique | `projects/notelite/01-cadrage/...` |

**REAL OBSERVATION** : dualité logical vs physical path déjà visible ; la cible architecture (section 30) doit la traiter sans coller la taxonomie `docs_write` au modèle Product.

### 6.5 Review manuelle / binding conversationnel

| Observation | Qualification |
| --- | --- |
| Feedback de review manuel initialement **sans contexte** | **REAL OBSERVATION** |
| Ré-instruction naturelle a **reattaché** le contexte | **REAL OBSERVATION** |
| Lecture | faiblesse de **binding conversationnel** — **≠** rupture de Product Resolution |

### 6.6 État campagne

| Élément | État |
| --- | --- |
| Campagne | **PAUSED** |
| Correction gouvernée | **non re-testée** |
| Cycle | **non finalisé** |

---

## 7. Carte d’architecture actuelle (CURRENT)

### 7.1 Diagramme — CURRENT EXECUTION FLOW

```mermaid
flowchart TD
  A[Pilot / Nora context] --> B[ExecutionContract<br/>WHAT + inputs mission]
  B --> C[Pilot inspect / Confirm]
  C --> D[Governed Execute / Reconciler intent=execute]
  D --> E[StudioCursorRealLaunchGateway]
  E --> F[Isolated detached git worktree]
  F --> G[Cursor Generalist HOW]
  G --> H[CursorExecutionReport CLAIM]
  H --> I{Specialized branch?}
  I -->|docs_write path vivant| J[persist / ingest / requalify docs_write]
  I -->|autres overlays| K[M4 RO / git commit-push-PR / policies]
  J --> L[verifyWorkspaceFileEffects<br/>worktree + policies]
  K --> L
  L --> M[Evidence + RB + CE]
  M --> N[resolveProductExecutionContext]
  N --> O[Continuity Projection]
  O --> P[Reconciler continue]
  P --> Q[Nora post_execution<br/>tools OFF]
  Q --> R[TrajectorySurface / Result UI]
  R --> S{Poll RUNNING ≤ 8?}
  S -->|exhaust sans worker| T[UI peut rester pending<br/>Pilot recharge]
  S -->|stage avance| U[Post-Evidence / Pilot]
```

**Qualification :** diagramme = synthèse **CURRENT IMPLEMENTED FACT** + **AUDIT INFERENCE** sur seams spécialisées encore vivantes.

### 7.2 Composants CURRENT (résumé)

| Composant | Rôle CURRENT | Qualification |
| --- | --- | --- |
| `generalistExecutionSurface` | Quartet `cap/action/target/scope` Cursor Generalist | **CURRENT IMPLEMENTED FACT** |
| ExecutionContract | objective/context/scope/expectedOutputs/acceptance/validation/authority/reversibility via inputs + top-level | **CURRENT IMPLEMENTED FACT** |
| `projectExecutionContractToCursorPrompt` | Projette WHAT ; HOW laissé à Cursor | **CURRENT IMPLEMENTED FACT** |
| `StudioCursorRealLaunchGateway` | Lance `cursor agent` en worktree isolé détaché | **CURRENT IMPLEMENTED FACT** |
| `CursorExecutionReport` | CLAIM enrichi — **≠ Evidence** | **CURRENT IMPLEMENTED FACT** |
| `verifyWorkspaceFileEffects` | Observe le worktree puis applique policies (policy `docs_write` séparée) | **CURRENT IMPLEMENTED FACT** |
| Specialized `docs_write` | persist / ingest / requalify ; materialize branches | **CURRENT IMPLEMENTED FACT** / **TRANSITIONAL DEBT** |
| M4 RO / M4 git commit/push/PR | Chemins spécialisés encore présents | **CURRENT IMPLEMENTED FACT** / **TRANSITIONAL DEBT** |
| `resolveProductExecutionContext` | Shared Product Resolution EXISTS | **CURRENT IMPLEMENTED FACT** |
| Artifact load | encore nommé / branché `docs_write` | **TRANSITIONAL DEBT** |
| Continuity + `reconcileGovernedExecution` | Own continue | **CURRENT IMPLEMENTED FACT** |
| TrajectorySurface | Poll RUNNING jusqu’à **8** continues — **pas de worker** après exhaust | **CURRENT IMPLEMENTED FACT** |
| Nora shared core | `post_execution` désactive tools / MemoryB / hosted search / product tools | **CURRENT IMPLEMENTED FACT** |
| Evidence | `retentionClass` / availability / `MarkEvidenceUnavailable` | **CURRENT IMPLEMENTED FACT** |
| Stages | `PRE_EXECUTION` … `RECOVERY_REQUIRED` ; integrity codes → `RECOVERY_REQUIRED` | **CURRENT IMPLEMENTED FACT** |

---

## 8. Constatations d’implémentation actuelles

### 8.1 Surface généraliste Product

**CURRENT IMPLEMENTED FACT** — module `generalistExecutionSurface` :

| Token | Valeur |
| --- | --- |
| Capability | `cap:studio.cursor.generalist` |
| Action | `studio.cursor.generalist.execute` |
| Target | `studio.cursor.generalist.workspace` |
| Scope | `studio.cursor.generalist.authorized_contract` |

Ces tokens décrivent la **surface de contrat Product générique** — **pas** un catalogue de tâches Product, **pas** l’infrastructure AgentDescriptor seule.

### 8.2 ExecutionContract — champs sémantiques

**CURRENT IMPLEMENTED FACT** : EC porte (via inputs + champs top-level) au minimum :

- `objective` / `context` / `scope`
- `expectedOutputs` / `acceptance` / `validation`
- `authority` / `reversibility`

**AUDIT INFERENCE** : la richesse sémantique est déjà **généraliste** ; la spécialisation résiduelle vit surtout dans les **branches post-report** (persist/ingest/materialize nommées) et dans des overlays techniques.

### 8.3 Projection EC → Cursor

**CURRENT IMPLEMENTED FACT** : `projectExecutionContractToCursorPrompt` projette le **WHAT** inspectable ; le **HOW** reste responsabilité Cursor dans le contrat autorisé.

### 8.4 Launch REAL

**CURRENT IMPLEMENTED FACT** : `StudioCursorRealLaunchGateway` exécute Cursor en **isolated detached git worktree**.

### 8.5 Report = CLAIM

**CURRENT IMPLEMENTED FACT** : `CursorExecutionReport` est traité comme **CLAIM** (disclosure `CLAIM_NOT_EVIDENCE` dans Product Resolution) — **≠** Evidence automatique.

### 8.6 Verifier

**CURRENT IMPLEMENTED FACT** : `verifyWorkspaceFileEffects` observe le worktree complet puis applique des **policies** ; la policy `docs_write` est **séparée** (spécialisation technique encore vivante).

### 8.7 Spécialisations encore vivantes

**CURRENT IMPLEMENTED FACT** / **TRANSITIONAL DEBT** :

| Spécialisation | Manifestation |
| --- | --- |
| `docs_write` | persist artifact / ingest Evidence / requalify ; materialize branches |
| M4 read-only | chemin RO spécialisé |
| M4 git commit / push / PR | chemins lifecycle Git spécialisés |
| Artifact naming | `docs-write-artifact` paths sous `.sfia-exec` |

**Note éditoriale :** `docs_write` **n’est pas** le seul legacy Product taxonomy — `code_write`, `read`, `read_only` sont des **exemples** de taxonomies Product à retirer du modèle Product (même si leur empreinte code varie). **Ne pas** les remplacer par `generic_read` / `generic_write` / `generic_code` comme catégories Product.

### 8.8 Product Resolution

**CURRENT IMPLEMENTED FACT** : `resolveProductExecutionContext` **EXISTS** et compose EC / Attempt / report / artifact / Evidence / RB / CE / post-Evidence.

**TRANSITIONAL DEBT** : chargement artifact encore branché sur helpers **docs_write-named** (`loadDocsWriteArtifactReviewMaterial`, etc.).

### 8.9 Continuity / Reconciler / UI poll

**CURRENT IMPLEMENTED FACT** :

- Projection stages : `PRE_EXECUTION` | `ATTEMPT_ACCEPTED` | `RUNNING` | `PRODUCT_MATERIALIZATION_PENDING` | `POST_EVIDENCE_PENDING` | `POST_EVIDENCE_COMPLETE` | `RECOVERY_REQUIRED`
- `reconcileGovernedExecution` own `execute` / `continue`
- TrajectorySurface : boucle `for (i < 8)` tant que stage `RUNNING` — **aucun worker serveur** après exhaust du poll UI

**AUDIT INFERENCE** : seam critique pour le gap NoteLite « materialization pending ».

### 8.10 Nora

**CURRENT IMPLEMENTED FACT** : cœur cognitif partagé ; mode `post_execution` = tools OFF, MemoryB OFF, hosted search OFF, product tools OFF.

### 8.11 Evidence retention / availability

**CURRENT IMPLEMENTED FACT** : Evidence expose `retentionClass` / availability ; `MarkEvidenceUnavailable` existe.

---

## 9. Matrice composants CURRENT / TARGET

| Composant | CURRENT | TARGET (ADOPTED) | Écart |
| --- | --- | --- | --- |
| Product task taxonomy | Spécialisées vivantes (`docs_write` + homologues) | **Une** modèle Product générique — taxonomies tâche **retirées** | Majeur |
| EC surface | Generalist quartet + inputs riches | **KEEP** + clarifier WHAT-only | Faible |
| Cursor HOW | Generalist en worktree | **KEEP** | Faible |
| Report | CLAIM | **KEEP CLAIM** | Nul (discipline) |
| Review Material | docs_write-named persist (souvent Artifact-centric) | **Generic Execution Review Material** multi-`reviewItems[]` | Majeur |
| Cursor Review End Of | Process externe / non exigé nativement comme CLAIM systématique | **Cursor CLAIM** exigé via EC `reportRequirements` ; *Native* = binding Studio | Majeur |
| VerifiedChangeSet | Verifier policies spécialisées | **Studio VerifiedChangeSet** générique (avant finalisation RM) | Moyen |
| Evidence/RB/CE | Vivants ; règles encore partiellement spécialisées | **KEEP** backbone ; critères génériques | Moyen |
| Product Resolution | EXISTS ; artifact docs_write-named | **Un** chemin générique | Moyen |
| Reconciler | Own continue ; UI poll borné | Owner progression déterministe **bout-en-bout** | Moyen |
| Nora Deep Review | post_execution tools OFF | Deep Review + **outils read-only bornés** | Moyen |
| Result Surface | Surfaces partielles / pending gaps | **Toujours expliquer** Claim/Fact/Analysis/Authority | Moyen |
| Retention Review Material | Partiel Evidence | HOT→PRUNED **RM** distinct du lifecycle Evidence | Moyen |
| Delivery slicing | N/A | **TBD** | Open |

---

## 10. Problèmes / seams

| # | Seam | Qualification | Impact |
| --- | --- | --- | --- |
| S1 | Taxonomies Product spécialisées encore dans le modèle / naming | TRANSITIONAL DEBT | Empêche circuit Review/Result générique |
| S2 | Artifact load docs_write-named dans Product Resolution | TRANSITIONAL DEBT | Couplage faux « Product = docs_write » |
| S3 | Policy verifier séparée par effet | CURRENT + dette | Oracle non unifié en VerifiedChangeSet |
| S4 | UI poll ≤8 sans worker post-exhaust | CURRENT FACT | Progression peut stall → Pilot « Recharger » |
| S5 | Nora post_execution sans outils | CURRENT FACT | Deep Review cible non atteinte |
| S6 | Binding conversationnel review faible | REAL OBSERVATION NoteLite | UX review context-free initiale |
| S7 | Logical path vs physical `.sfia-exec` path | REAL + CURRENT | Confusion Pilot / audit si non articulé |
| S8 | Materialize branches spécialisées | TRANSITIONAL DEBT | Parallelisme de chemins post-terminal |
| S9 | Tentation de recréer `generic_*` Product categories | Anti-architecture | Interdit (D-ER-01 / §33) |
| S10 | Sur-réclamer NoteLite comme preuve cible | Risque épistémique | Anti-claims §41 |

---

## 11. Principes adoptés

**TARGET ARCHITECTURE — ADOPTED BY MORRIS**

1. **Un modèle Product Execution générique** — pas de catalogue de tâches Product.
2. **WHAT (EC) ≠ HOW (Cursor)** — Cursor libre dans le contrat autorisé.
3. **Claim ≠ Evidence ≠ Analysis ≠ Authority**.
4. **Studio owns Fact** (VerifiedChangeSet / Evidence) — Cursor owns Claim.
5. **Un Product Resolution** — pas de second knowledge store.
6. **Reconciler owns progression déterministe** — UI n’est pas workflow owner.
7. **Cursor Review End Of** = **CLAIM exécuteur** ; *Native* = transport/binding/stockage/consommation Studio — **≠** Studio producteur du contenu ; **≠** import du transport ChatGPT↔Cursor externe.
8. **Nora explique et analyse** — ne devient pas owner d’autorité d’exécution.
9. **Result Surface always explains** — y compris NOT_PROVEN / RECOVERY_REQUIRED.
10. **Migration sans big bang** — bridges transitionnels avec exit.
11. **Pas d’architecture parallèle** durable.
12. **runtime v3 reste NON ADOPTED** ; **READY FOR REAL = NO** jusqu’à preuve gouvernée distincte.
13. **Delivery slicing = TBD**.
14. **Retirer taxonomies Product** (`docs_write`, `code_write`, `read`, `read_only`, …) **sans** inventer `generic_read|write|code` Product.

---

## 12. Décisions D-ER-01 … D-ER-15 (complètes)

> Toutes : **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-09-29), sauf mention d’ancrage CURRENT.

### D-ER-01 — Un modèle Product générique ; retirer les taxonomies de tâche Product spécialisées

**Décision :** Le Product Execution Model ne classe **pas** les missions par taxonomie de tâche (`docs_write`, `code_write`, `read`, `read_only`, …).
**Conserve :** capabilities / effects / policies **techniques** comme enforcement.
**Interdit :** inventer des catégories Product `generic_read` / `generic_write` / `generic_code`.
**Exit :** plus aucune branche Product mission nommée par taxonomie de tâche dans le chemin nominal.

### D-ER-02 — Conserver le worktree isolé

**Décision :** **KEEP** isolated detached git worktree via gateway REAL.
**Motif :** borne d’effet, reproductibilité, oracle filesystem, non-contamination du managed root.
**CURRENT :** déjà implémenté (`StudioCursorRealLaunchGateway`).

### D-ER-03 — Le Report reste CLAIM

**Décision :** `CursorExecutionReport` = **CLAIM** uniquement.
**Jamais :** Evidence automatique / PASS métier par narration.
**CURRENT :** disclosure Product Resolution `CLAIM_NOT_EVIDENCE`.

### D-ER-04 — Generic Execution Review Material

**Décision :** Introduire une **Generic Execution Review Material** (payload durable de revue) **générique**, indépendante des noms `docs_write-*` et **non** centrée Artifact.
**Contenu conceptuel cible :** bindings Attempt/EC/project/repo/baseSha ; `executorClaims` (report + Review End Of refs) ; `verifiedEffects` (VerifiedChangeSet / git / validations) ; `reviewItems[]` génériques (file, diff, validation, test, log, artifact, git result, external, other) ; blockers ; reservations ; completeness ; retention.
**Règle dure :** peut exister avec **0 Artifact** et **0 changed file** si d’autres effets gouvernés / reviewables existent.
**Artifact documentaire** = seulement un `ReviewItem` possible.
**Schema final** = **OPEN DESIGN DETAIL — FINAL SCHEMA NOT ADOPTED**.
**Disposition CURRENT persist docs_write :** **HARVEST → GENERALIZE**.

### D-ER-05 — Native Review End Of (Cursor CLAIM ; native Studio binding)

**Décision :** Le **Review End Of** est produit par l’**EXECUTOR** (Cursor, chemin courant) à la fin de l’exécution Cursor, **avec** le `CursorExecutionReport`.
**Statut épistémique :** **CLAIM** — jamais Verified Facts, Evidence, ClaimEvaluation, ni Nora Analysis.
**« Native » signifie :** transport / binding / stockage / consommation **Studio** — **PAS** : Studio est le producteur du contenu Review End Of.
**Exigence Contract :** `ExecutionContract.reportRequirements` doit exiger conceptuellement (1) machine-readable `CursorExecutionReport` et (2) **Cursor Review End Of** (contenu sémantique riche : verdict, timestamp, repo/base, objectif, scope, work, files/effects, validations, Git proof si applicable, deviations, blockers, reservations, stop conditions, claims, points de revue).
**Packaging physique** (deux fichiers vs deux blocs vs autre) = **OPEN DESIGN DETAIL**.
**Harvest :** sémantique utile des process externes historiques **autorisée** ; mécanismes de transport ChatGPT↔Cursor / `.tmp-sfia-review` / `sfia/review-handoff` **non** productisés comme architecture Product runtime.

### D-ER-06 — Studio VerifiedChangeSet

**Décision :** Studio produit un **VerifiedChangeSet** (ensemble d’effets observés/validés) comme vérité d’effet — oracle Studio, policies génériques, fail-closed.
**CURRENT harvest :** `verifyWorkspaceFileEffects` + policies.
**Cible :** un objet/sémantique Product stable, pas une policy `docs_write` comme centre.

### D-ER-07 — Un chemin Product Resolution

**Décision :** **Un** `resolveProductExecutionContext` (ou successeur générique équivalent) — pas de résolution parallèle par taxonomie.
**CURRENT :** EXISTS.
**Dette :** retirer dépendances artifact docs_write-named.

### D-ER-08 — Reconciler owns progression déterministe

**Décision :** `reconcileGovernedExecution` (ou successeur) **possède** la progression post-accept Attempt → materialization → post-Evidence.
**UI :** projection + intent — **pas** owner.
**Dette :** poll UI 8 without worker = **non conforme** à la cible ; mécanisme anti-stall piloté par le Reconciler — implémentation **OPEN DESIGN DETAIL** (ex. options ouvertes : worker vs continuation serveur vs autre — **aucune sélection**).

### D-ER-09 — Nora Deep Review avec outils read-only bornés

**Décision :** Après Evidence, Nora peut faire une **Deep Review** avec **outils read-only bornés** (lecture Evidence/RB/CE/changeset/artifact autorisés) — sans mutation Product, sans tools d’exécution.
**CURRENT :** `post_execution` tools OFF — **écart cible**.
**Non-but :** MemoryB / hosted search / product mutation tools en post_execution.

### D-ER-10 — Result Surface always explains

**Décision :** La Result Surface explique **toujours** l’état épistémique : Claim / Fact / Analysis / Authority / NOT_PROVEN / RECOVERY_REQUIRED / next action.
**Interdit :** silence, faux PASS, ou CTA opaque sans raison.

### D-ER-11 — Séparation Claim / Fact / Analysis / Authority

**Décision :**
- **Claim** = `CursorExecutionReport` + **Cursor Review End Of** / assertions exécuteur
- **Fact** = VerifiedChangeSet + Evidence (lorsqu’établis)
- **Analysis** = Nora (post_execution / Deep Review)
- **Authority** = HD / Confirmation / effective authority / Pilot
**Jamais** fusionner ces couches dans un seul « résultat ».
**Jamais** traiter Review End Of comme Fact Studio.

### D-ER-12 — Retention Review Material HOT → PRUNED (distincte d’Evidence)

**Décision :** Review Material suit **HOT → ARCHIVABLE → PRUNABLE → PRUNED**.
Evidence conserve son **propre** lifecycle (`status` / `availability` / `provenance` / `retentionClass`).
**Règles :**
- **CASE A** — Evidence authoritative dépend encore du payload RM → RM **NOT PRUNABLE**.
- **CASE B** — Evidence a une source durable indépendante (ex. Git blob/commit / autre) → copie RM peut devenir **PRUNABLE** ; Evidence peut rester **AVAILABLE**.
- **CASE C** — payload authoritative réellement supprimé sans remplacement → requalifier explicitement l’availability Evidence (ex. `MarkEvidenceUnavailable` ou successeur).
**Invariant :** `PRUNE REVIEW MATERIAL ≠ AUTOMATICALLY MarkEvidenceUnavailable` sur toute Evidence liée.
**CURRENT harvest :** `retentionClass` / availability / `MarkEvidenceUnavailable` sur Evidence.
**TTL / scheduler / GC job** = **OPEN DESIGN DETAIL**.

### D-ER-13 — Migration sans big bang

**Décision :** Bridges transitionnels autorisés **avec exit conditions**.
**Interdit :** freeze durable de dual-stack Product taxonomy + generic model.

### D-ER-14 — Pas d’architecture parallèle

**Décision :** Pas de second moteur Execution / Review / Resolution « générique » à côté du spécialisé.
**Méthode :** généraliser le chemin unique ; retirer le spécialisé du modèle Product.

### D-ER-15 — Delivery slicing NON adopté / TBD

**Décision :** **Aucun** découpage delivery (ex. « 5 lots ») n’est adopté par ce document.
**DELIVERY SLICING = TBD**.
Toute proposition de lots = décision Morris ultérieure distincte.

---

## 13. Modèle Generic Product Execution

### 13.1 Définition

**TARGET ARCHITECTURE — ADOPTED BY MORRIS**

Un **Generic Product Execution** est :

1. un **ExecutionContract** générique (surface generalist + sémantique mission) ;
2. autorisé par authority / confirmations ;
3. exécuté par **Cursor Generalist** dans un **worktree isolé** ;
4. rapporté comme **CLAIM** ;
5. sorties exécuteur **CursorExecutionReport + Cursor Review End Of** [CLAIM] ;
6. factualisé via **Studio VerifiedChangeSet** puis **Generic Execution Review Material** → Evidence/RB/CE ;
7. exposé via **Product Resolution** ;
8. progressé par **Reconciler** ;
9. analysé par **Nora** ;
10. décidé par **Pilot** sur **Result Surface**.

### 13.2 Product task categories vs technical capabilities/effects

| Couche | Exemples | Statut cible |
| --- | --- | --- |
| **Product task categories** | `docs_write`, `code_write`, `read`, `read_only`, … | **RETIRE FROM PRODUCT MODEL** |
| **Technical capabilities / effects / policies** | workspace file effects, git lifecycle proofs, allowlists, RO enforcement | **KEEP / GENERALIZE** comme enforcement — **≠** catégories Product |
| **Forbidden Product renames** | `generic_read`, `generic_write`, `generic_code` | **NE PAS INTRODUIRE** |

### 13.3 Conséquence pour prepare / inspect / execute

Prepare/inspect/execute raisonnent sur **mission sémantique EC** + **contraintes d’enforcement**, jamais sur un enum de « type de tâche Product ».

---

## 14. Sémantique ExecutionContract

### 14.1 Rôle

**CURRENT + TARGET :** unique pivot WHAT Product.

### 14.2 Contenu sémantique (CURRENT FACT ancré)

| Famille | Contenu typique |
| --- | --- |
| Mission | objective, context, scope |
| Outcomes | expectedOutputs, acceptance, validation |
| Gouvernance | authority, reversibility, confirmations |
| Reporting | `reportRequirements` (string list — **CURRENT** existe ; couverture Review End Of **PARTIAL**) |
| Surface exécuteur | quartet generalist |
| Bindings | decision / cycle / project |

### 14.2bis reportRequirements — TARGET (CR-01B / D-ER-05)

**TARGET ARCHITECTURE — ADOPTED BY MORRIS**

`ExecutionContract.reportRequirements` doit porter des exigences de reporting **suffisantes** pour exiger conceptuellement :

1. **machine-readable `CursorExecutionReport`** ;
2. **Cursor Review End Of** (CLAIM exécuteur).

Le Review End Of doit reprendre, selon le contrat applicable : verdict Cursor ; timestamp ; repository / base pertinent ; objectif ; scope traité ; work performed ; files / effects créés, modifiés, supprimés ; validations ; full validation si applicable ; Git proof si applicable ; deviations ; blockers ; reservations ; stop conditions rencontrées ; claims ; éléments nécessitant revue.

**OPEN DESIGN DETAIL — packaging physique :** ne pas figer si ces deux outputs sont deux fichiers, deux blocs d’un même transport, ou autre sérialisation. Le **contrat sémantique** est adopté ; le packaging reste ouvert.

**CURRENT :** `reportRequirements` est déjà un input EC projeté vers Cursor (`projectExecutionContractToCursorPrompt` / inspectionDisclosure) — **PARTIAL** ; l’exigence explicite Review End Of native n’est pas encore la discipline Product systématique.

### 14.3 Projection

| Projection | Owner | Contenu |
| --- | --- | --- |
| Pilot inspection | Studio | WHAT lisible |
| Cursor prompt | `projectExecutionContractToCursorPrompt` | WHAT ; **pas** HOW exhaustif |
| Enforcement overlay | Gateway / policies | Bornes techniques — **pas** mission Product |
| Bound snapshot | Attempt | Base ContractResult |

### 14.4 Interdits

- Injecter le HOW Studio dans le WHAT Pilot comme si c’était la mission.
- Faire d’une policy technique une catégorie Product.
- PASS ContractResult sur live EC non bound.

---

## 15. Matrice de parité EC → Cursor vs v2.6

**But :** permettre au futur Delivery d’évoluer l’ExecutionContract **sans perdre silencieusement** une garantie mature du workflow externe.

**Disposition globale v2.6 :** **HARVEST** sémantique utile — **≠** runtime à réadopter / re-baseliner Product.

| # | Guarantee / semantic dimension | External v2.6 proven behavior | CURRENT Studio native support | CURRENT source / implementation anchor | Parity | Gap / risk | TARGET native behavior | Disposition |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | objective | Mission objective explicite dans le contrat externe | Présent | EC mission inputs / inspectionDisclosure | **FULL** | Drift si projection omet | Conserver comme WHAT autoritaire | **KEEP** |
| 2 | context | Contexte mission riche | Présent | EC context inputs | **FULL** | Compactage excessif | Conserver + lisible Pilot/Cursor | **KEEP** |
| 3 | cycle/profile qualification when applicable | Cycle / profil process qualifiés | Partiel (cycle bindings Product ; profil process ≠ runtime) | CycleInstance / EC bindings | **PARTIAL** | Confusion process vs Product cycle | Qualifier Product cycle sans importer process profile comme doctrine | **COMPLETE** |
| 4 | sources | Sources listées | Présent | EC source refs | **FULL** | Sources non grounded | Sources + grounding | **KEEP** / **COMPLETE** |
| 5 | source grounding | Grounding explicite | Présent (partiel selon missions) | mission semantic inputs | **PARTIAL** | Grounding faible → revue floue | Exiger grounding quand sources critiques | **COMPLETE** |
| 6 | repository identity | Repo cible identifié | Présent (Project repository binding) | Project / workspace binding | **FULL** | Multi-repo non traité | Repo Project unique par binding | **KEEP** |
| 7 | base / HEAD truth | Base/HEAD truth process | Partiel (worktree base SHA ; HEAD live variable) | gateway worktree prepare | **PARTIAL** | Confusion logical vs WT HEAD | Base SHA explicite + vérité observée Studio | **COMPLETE** |
| 8 | scope IN | Scope inclus explicite | Partiel | EC scope / files boundaries | **PARTIAL** | Scope flou → effets hors intention | Scope IN contractuel clair | **COMPLETE** |
| 9 | scope OUT | Scope exclu explicite | Partiel / souvent implicite | EC boundaries | **PARTIAL** | OUT silencieux | Scope OUT explicite quand pertinent | **COMPLETE** |
| 10 | files / path boundaries | Bornes chemins | Partiel (overlays / allowlists) | gateway overlays + verifier | **PARTIAL** | Overlay docs_write-centric | Bornes génériques effets/chemin | **GENERALIZE** |
| 11 | authorized technical effects | Effets autorisés process | Présent (allowlists / capabilities techniques) | EC surface + gateway | **PARTIAL** | Taxonomy Product encore branchée | Effects techniques only (≠ Product category) | **KEEP** / **COMPLETE** |
| 12 | forbidden effects | Interdits process | Partiel | stop / policy / allowlist | **PARTIAL** | Interdits non unifiés | Forbidden effects explicites + fail-closed | **COMPLETE** |
| 13 | expected outputs | EO process | Présent | EC expectedOutputs | **FULL** | EO = Artifact-only mental model | EO génériques (y compris non-fichier) | **COMPLETE** |
| 14 | acceptance criteria | Critères acceptation | Présent | EC acceptance | **FULL** | Critères trop docs-centric | Critères génériques ContractResult | **KEEP** / **COMPLETE** |
| 15 | validation plan | Plan validation | Présent | EC validationPlan input | **PARTIAL** | Plan non exécuté / non observé | Plan + observation Studio | **COMPLETE** |
| 16 | targeted validations | Validations ciblées | Partiel | report validationEffects / verifier | **PARTIAL** | Validations claim-only | Validations revendiquées + faits Studio | **COMPLETE** |
| 17 | full validation expectation | Attente full validation | Faible / process | report fields partiels | **PARTIAL** | Full validation non disciplinée / non systématique | Exigence contractuelle quand applicable | **HARVEST** / **COMPLETE** |
| 18 | authority | Authority process | Présent | HumanDecision / effective authority | **FULL** | — | KEEP authority Product | **KEEP** |
| 19 | Confirmation | Confirmation gates | Présent | Confirmation / inspection | **FULL** | — | KEEP | **KEEP** |
| 20 | reversibility | Reversibility qualifiée | Présent | EC reversibility | **PARTIAL** | Sous-exploité en Result Surface | Exposer honnêtement | **COMPLETE** |
| 21 | stop conditions | Stop conditions process | Partiel | EC / report blockers | **PARTIAL** | Stop non matérialisé en Result | Stop conditions contractuelles + surface | **COMPLETE** |
| 22 | Fake / Real qualification where applicable | Qualification Fake/Real process | Partiel (gateway REAL gates) | REAL launch gates / harness | **PARTIAL** | Confusion preuve | Fake/Real explicite hors READY inventé | **KEEP** / **COMPLETE** |
| 23 | Evidence requirements | Exigences Evidence process | Partiel | EC / Evidence domain | **PARTIAL** | Evidence trop Artifact-centric | Evidence requirements génériques | **COMPLETE** |
| 24 | report requirements | Exigences de rapport process | Partiel (string list `reportRequirements`) | contractMissionSemantics / projection | **PARTIAL** | N’exige pas encore systématiquement Review End Of | Exiger Report + Review End Of | **COMPLETE** |
| 25 | CursorExecutionReport | Rapport machine process | Présent largement générique | `cursorExecutionReport` + Resolution CLAIM | **PARTIAL** | Structure générique présente ; enrichissement sémantique encore incomplet (≠ Evidence) | KEEP CLAIM + COMPLETE champs utiles | **KEEP** / **COMPLETE** |
| 26 | Cursor Review End Of | Fin de revue exécuteur process | Absent comme CLAIM natif systématique | process externe historique | **ABSENT** | Studio pourrait « inventer » REO | Cursor produit REO CLAIM ; native binding Studio | **HARVEST** / **COMPLETE** |
| 27 | deviations | Écarts rapportés | Partiel dans report | report deviations | **PARTIAL** | Deviations ignorées en CE | Deviations claim + évaluation | **COMPLETE** |
| 28 | blockers | Blockers process | Partiel | report blockers | **PARTIAL** | Blockers non visibles Pilot | Blockers → Result Surface | **COMPLETE** |
| 29 | reservations | Réserves process | Partiel | report reservations / Memory | **PARTIAL** | Confusion Reservation Product | Reservations claim + Product reserves distincts | **COMPLETE** |
| 30 | Git proof when applicable | Preuve Git process | Partiel (Evidence git sources / GCEC) | Evidence git / verifier | **PARTIAL** | Git proof confondu avec PASS Product | Git facts Studio + CE rules | **HARVEST** / **COMPLETE** |
| 31 | final Cursor verdict | Verdict final exécuteur | Partiel (report status) | CursorExecutionReport status | **PARTIAL** | Verdict Cursor ≠ Product PASS | Verdict CLAIM explicite | **COMPLETE** |
| 32 | allowed claims | Claims autorisés process | Faible natif | anti-claim discipline partielle | **PARTIAL** | Sur-réclame / discipline non systématique | Allowed claims contractuels | **HARVEST** / **COMPLETE** |
| 33 | forbidden / anti-claims | Anti-claims process | Faible natif | capitalisations / docs | **PARTIAL** | Anti-claims non runtime systématiques | Anti-claims dans reporting + Surface | **HARVEST** / **COMPLETE** |
| 34 | Review Pack semantics useful to native review | Pack revue riche (garanties review) | Partiel (Review Material docs_write ; Resolution) | persist docs_write / Resolution | **PARTIAL** | Artifact-centric | **HARVEST** garanties utiles → Generic RM + REO CLAIM | **HARVEST** |
| 35 | external Review Handoff transport | Branche `sfia/review-handoff` / `.tmp-sfia-review` / copy-paste | **Ne doit pas** être runtime Product | process v2.6 publisher | **NOT_APPLICABLE** (à ne pas importer) | Tentation d’importer le bus Git | **DO NOT IMPORT INTO STUDIO RUNTIME** | **N/A** |

**Règle éditoriale :**

- **HARVEST SEMANTICS** ≠ **IMPORT EXTERNAL TRANSPORT**
- Lignes 34 = **HARVEST** ; ligne 35 = **DO NOT IMPORT**
- Ne pas modifier le template v2.6 dans ce cycle.

---

## 16. Cursor Generalist / HOW

### 16.1 Rôle

**CURRENT IMPLEMENTED FACT** + **TARGET KEEP** :

Cursor, via surface generalist, choisit le **HOW** (outils, séquence, édition) **dans** le contrat autorisé (allowlist, worktree, authority).

### 16.2 Non-rôles

| Non-rôle | Raison |
| --- | --- |
| Owner d’autorité Product | Pilot / HD / Confirmation |
| Producer d’Evidence automatique | Report = CLAIM |
| Catégorie de tâche Product | Surface ≠ taxonomy |
| Guarantor de PASS métier | ContractResult / Evidence |

### 16.3 Overlay d’enforcement

Le gateway applique des overlays techniques (chemins scellés, worktree, caps) **sans** remplacer la mission EC.

---

## 17. Isolated worktree

### 17.1 Décision

**D-ER-02 / CURRENT KEEP** : isolated detached git worktree.

### 17.2 Propriétés

| Propriété | Valeur cible/current |
| --- | --- |
| Isolation | Effets hors managed root nominal |
| Detached | Base SHA / head de préparation |
| Oracle | Observation filesystem + policies |
| Cleanup | Retention/GC — **OPEN DESIGN DETAIL** partiel |

### 17.3 Anti-claims worktree

Worktree isolé **≠** preuve Git remote · **≠** commit/push autorisé · **≠** merge.

---

## 18. CursorExecutionReport — modèle de claim

### 18.1 Nature

**CURRENT + TARGET (D-ER-03) :** **CLAIM**.

### 18.2 Contenu typique

- statut / summary / assertions exécuteur
- refs Attempt / process
- éventuelles listes d’effets **revendiqués** (non faits)

### 18.3 Discipline

| Action | Autorisé ? |
| --- | --- |
| Afficher comme Claim sur Result Surface | Oui |
| Convertir auto en Evidence | **Non** |
| Satisfaire ER sans verifier | **Non** |
| Overrider NOT_PROVEN | **Non** |

---

## 19. Studio VerifiedChangeSet

### 19.1 Définition cible

**TARGET (D-ER-06) :** objet/sémantique Studio décrivant les **effets vérifiés** dans le worktree (et bornes associées), indépendamment de la narration Cursor.

### 19.2 Harvest CURRENT

`verifyWorkspaceFileEffects` :

1. observe le worktree ;
2. applique policies (dont policy `docs_write` séparée — **dette**) ;
3. produit un résultat de vérification consommable par completion / Evidence.

### 19.3 Cible

| Aspect | Cible |
| --- | --- |
| Nom/sémantique Product | VerifiedChangeSet |
| Policies | génériques par **effet technique**, pas par taxonomie Product |
| Liaison | Review Material + Evidence |
| Fail-closed | unknown / hors allowlist → reject ou NOT_PROVEN selon couche |

---

## 20. Generic Execution Review Material

### 20.1 Définition cible

**TARGET (D-ER-04) :** payload opérationnel **temporairement durable** permettant à Studio / Nora / Pilote de **revoir** le résultat d’exécution — **sans** nommage `docs_write`, **sans** modèle Artifact-centric.

Ce n’est **pas** : Product Truth principal ; HumanDecision ; Evidence automatique ; Product Result automatique ; Git commit ; second workflow.

### 20.2 Modèle conceptuel (non schema)

**OPEN DESIGN DETAIL — FINAL SCHEMA NOT ADOPTED**

```text
ExecutionReviewMaterial
  bindings
    - projectId / cycleInstanceId / executionContractId / attemptId
    - repositoryRef / baseSha
  executorClaims
    - cursorExecutionReportRef
    - cursorReviewEndOfRef
  verifiedEffects
    - verifiedChangeSetRef
    - gitFacts[]
    - validationFacts[]
  reviewItems[]   # générique — Artifact n’est qu’un type possible
    - file | diff | validation output | test output | log
    - artifact | git result | external result | other reviewable
  blockers[]
  reservations[]
  completeness    # FULL | PARTIAL
  retention       # HOT → ARCHIVABLE → PRUNABLE → PRUNED
```

**Règle dure :** Review Material peut exister avec **0 Artifact** et **0 changed file** si l’exécution produit d’autres effets gouvernés / reviewables (analyse read-only, commit, push, PR, merge, validation, action externe, …).

### 20.3 Ordre conceptuel vs capture raw

| Concept | Rôle |
| --- | --- |
| **RAW EXECUTION OUTPUT CAPTURE** | Stockage technique éventuel **précoce** des sorties Cursor (crash-safety) — **OPEN DESIGN DETAIL** |
| **FINALIZED EXECUTION REVIEW MATERIAL** | Composition reviewable **après** observation Studio / VerifiedChangeSet |

### 20.4 Disposition CURRENT

| Asset | Disposition |
| --- | --- |
| `persistDocsWriteArtifactReviewMaterial` | **HARVEST → GENERALIZE** (sortir du mono-Artifact / docs_write) |
| paths `docs-write-artifact` | **TRANSITIONAL** puis retire naming Product |

---

## 21. Native Review End Of

### 21.1 Définition (producteur + épistémologie)

**TARGET (D-ER-05) :**

| Aspect | Décision |
| --- | --- |
| **Producteur** | **Cursor / EXECUTOR** — à la fin de l’exécution Cursor |
| **Statut** | **CLAIM** (avec `CursorExecutionReport`) |
| **Native** | binding / stockage / consommation **Studio** |
| **≠ Native** | Studio **ne produit pas** le contenu Review End Of |

```text
Cursor execution
  ├── CursorExecutionReport     [CLAIM]
  ├── Cursor Review End Of      [CLAIM]
  └── candidate worktree effects

Studio independent verification
  → VerifiedChangeSet           [VERIFIED FACTS]
  → Evidence / …
Nora Review                     [ANALYSIS / RECOMMENDATION]
HumanDecision                   [AUTHORITY]
```

### 21.2 Contenu sémantique cible (CLAIM)

Selon `reportRequirements` applicables : verdict Cursor ; timestamp ; repository / base ; objectif ; scope traité ; work performed ; files/effects ; validations ; full validation si applicable ; Git proof si applicable ; deviations ; blockers ; reservations ; stop conditions ; claims ; points nécessitant revue.

### 21.3 Ce que ce n’est pas

| Non-définition | Raison |
| --- | --- |
| Studio Verified Facts | Facts = oracle Studio (VerifiedChangeSet / Evidence) |
| Evidence / ClaimEvaluation / Nora Analysis | Couches distinctes (D-ER-11) |
| Export markdown vers ChatGPT externe | Transport process ≠ architecture Product |
| Duplicate d’Evidence | Review End Of = CLAIM ; Review Material ≠ Evidence |
| Producteur Studio du contenu | Contredit D-ER-05 |

### 21.4 Harvest autorisé / transport interdit

- **HARVEST :** discipline sémantique des revues externes historiques (séparation claim/fact, fail-closed, anti-claims, richesse Review End Of).
- **DO NOT IMPORT :** canal `.tmp-sfia-review` / branche `sfia/review-handoff` / copy-paste ChatGPT↔Cursor comme bus runtime Product.

**OPEN DESIGN DETAIL :** packaging physique Report ↔ Review End Of.

---

## 22. Articulation Evidence / ReviewBundle / ClaimEvaluation

### 22.1 Rôles

| Objet | Rôle | Qualification |
| --- | --- | --- |
| Evidence | Fait durable traçable | CURRENT KEEP |
| ReviewBundle | Ensemble d’Evidence pour revue / freeze | CURRENT KEEP |
| ClaimEvaluation (ContractResult) | Qualification EC vs Evidence | CURRENT KEEP / GENERALIZE criteria |
| VerifiedChangeSet | Oracle d’effets Studio en amont | TARGET (+ harvest verifier) |
| CursorExecutionReport | Claim exécuteur | CURRENT KEEP |
| Cursor Review End Of | Claim exécuteur | TARGET COMPLETE (native binding) |
| Review Material | Payload review (post-verify finalized) | TARGET GENERALIZE |

### 22.2 Ordre épistémique cible

```text
Claim (CursorExecutionReport + Cursor Review End Of)
  → Studio observation
  → VerifiedChangeSet [VERIFIED FACTS]
  → Finalized Execution Review Material
  → Evidence(s)
  → ReviewBundle (freeze)
  → ClaimEvaluation
  → Nora Analysis
  → HumanDecision / Pilot
```

### 22.3 NOT_PROVEN

**CURRENT + TARGET :** insuffisance / ambiguïté / no applicable rule → **NOT_PROVEN** (soft) plutôt que PASS inventé.
**REAL OBSERVATION NoteLite :** NOT_PROVEN préservé quand Evidence insuffisante.

---

## 23. Product Resolution

### 23.1 CURRENT

**CURRENT IMPLEMENTED FACT :** `resolveProductExecutionContext` compose un `ProductExecutionContext` typé (EC, Attempt, cursorReport CLAIM, artifact, Evidence, RB, CE, postEvidence, …). Fail-closed sur mismatch de lineage.
**Limitation :** modèle encore **trop Artifact-centric** / docs_write-named pour le chargement review.

### 23.2 TARGET (D-ER-07)

Un seul chemin de résolution générique :

- charge **Generic Execution Review Material** (executorClaims + verifiedEffects + reviewItems[]) — **pas** mono-Artifact ;
- expose Claim (`Report` + **Review End Of**) / Fact / Analysis / Authority distincts ;
- sert Continuity, Result Surface, Nora tools read-only, Reconciler ;
- couvre missions **sans** Artifact fichier.

### 23.3 Dette

Artifact load via `loadDocsWriteArtifactReviewMaterial` = **TRANSITIONAL DEBT** explicite (bridge, pas modèle cible).

---

## 24. Continuity / Reconciler

### 24.1 Continuity Projection

**CURRENT IMPLEMENTED FACT** — stages :

`PRE_EXECUTION` → `ATTEMPT_ACCEPTED` → `RUNNING` → `PRODUCT_MATERIALIZATION_PENDING` → `POST_EVIDENCE_PENDING` → `POST_EVIDENCE_COMPLETE`
(+ `RECOVERY_REQUIRED` via integrity / bindings codes)

Projection **READ-ONLY**, dérivée — **pas** un state machine persisté parallèle.

### 24.2 Reconciler

**CURRENT :** `reconcileGovernedExecution` exécute les next deterministic actions selon intent `execute` | `continue`.
**TARGET (D-ER-08) :** owner unique de la progression déterministe jusqu’au post-Evidence nominal (ou RECOVERY_REQUIRED).

### 24.3 UI

TrajectorySurface applique le résultat Reconciler ; poll borné **8** continues pendant `RUNNING`.
**Écart cible :** stall possible — voir NoteLite gap.

---

## 25. Progression nominale post-terminale

### 25.1 Diagramme — TARGET NOMINAL FLOW

```mermaid
flowchart TD
  A[Cursor terminal] --> B[CursorExecutionReport CLAIM]
  A --> C[Cursor Review End Of CLAIM]
  A --> D[Candidate worktree effects]
  B --> E[Optional RAW output capture]
  C --> E
  D --> F[Studio independent observation]
  E -.->|crash-safety only| F
  F --> G[VerifiedChangeSet VERIFIED FACTS]
  G --> H[Finalized Generic Execution Review Material]
  H --> I[Evidence]
  I --> J[ReviewBundle]
  J --> K[ClaimEvaluation / Contract Result]
  K --> L[Product Resolution]
  L --> M[Nora Deep Review ANALYSIS]
  M --> N[Result Surface]
  N --> O[Pilot AUTHORITY]
```

### 25.2 CURRENT vs TARGET post-terminal

| Étape | CURRENT | TARGET |
| --- | --- | --- |
| Executor claims | Report (+ process REO externe) | Report + **Cursor Review End Of** CLAIM exigés |
| Verify | verifyWorkspaceFileEffects + policies | VerifiedChangeSet **avant** RM finalisé |
| Review Material | docs_write-named / Artifact-centric | Generic RM multi-`reviewItems[]` |
| Evidence/RB/CE | vivants | KEEP |
| Post-Evidence Nora | tools OFF | Deep Review read-only tools |
| Progression | Reconciler + UI poll | Reconciler complet + continuation autonome TBD (mécanisme OPEN DESIGN DETAIL) |

---

## 26. Nora Deep Review

### 26.1 CURRENT

**CURRENT IMPLEMENTED FACT :** shared cognitive core ; `post_execution` désactive tools / MemoryB / hosted search / product tools. Analyse contract-first possible sans tools.

### 26.2 TARGET (D-ER-09)

| Capacité | Autorisé |
| --- | --- |
| Lire Evidence / RB / CE / Review Material / VerifiedChangeSet | Oui (borné) |
| Lire artifact logique autorisé | Oui (borné) |
| Muter Project / Execute / Git | **Non** |
| Hosted search / MemoryB | **Non** (sauf décision future distincte) |
| Remplacer Pilot authority | **Non** |

### 26.3 Sortie Nora

Analysis only → alimente Result Surface ; **≠** Authority.

---

## 27. Result Surface / parcours Pilot

### 27.1 Exigence

**TARGET (D-ER-10) :** always explain.

### 27.2 Contenu minimal expliqué

- Claim exécuteur (et limites)
- Facts vérifiés / Evidence ids
- ContractResult / NOT_PROVEN reasons
- Analysis Nora (si présente)
- Authority / next deterministic action / recovery
- CTA clairs (continue / correct / stop / recharge seulement si dette UI encore présente)

### 27.3 Journey Pilot cible

```text
Inspect EC → Confirm → Execute → Follow continuity → Read Result Surface
  → Accept / Request correction / Stop / Replan
```

Correction = **gouvernée** (nouveau HD/EC selon règles) — NoteLite : correction **non re-testée**.

---

## 28. Restart / recovery

### 28.1 Diagramme — RESTART/RECOVERY FLOW

```mermaid
flowchart TD
  A[Studio restart / reprise Project] --> B[Product Resolution reload]
  B --> C{Integrity bindings OK?}
  C -->|Non| D[RECOVERY_REQUIRED]
  D --> E[Pilot / governed recovery path]
  C -->|Oui| F[Continuity Projection]
  F --> G{Stage}
  G -->|RUNNING stale| H[Reconciler continue / observe]
  G -->|MATERIALIZATION_PENDING| I[Reconciler MATERIALIZE_PRODUCT]
  G -->|POST_EVIDENCE_PENDING| J[Reconciler RUN_POST_EVIDENCE]
  G -->|COMPLETE| K[Result Surface]
  G -->|RECOVERY_REQUIRED| D
  H --> F
```

### 28.2 CURRENT anchors

- Integrity codes → `RECOVERY_REQUIRED` (**CURRENT FACT**)
- Recovery continuity paths préservés (NELC / continuity macros)
- Restart ne doit **pas** relaunch Cursor silencieusement (discipline docs_write REAL historique)

### 28.3 TARGET

Reconciler + Resolution suffisent à reprendre sans CTA magique ; UI recharge = **dette** si encore nécessaire.

---

## 29. Retention / GC

### 29.1 Diagramme — RETENTION FLOW

```mermaid
flowchart TD
  RM1[Review Material HOT] --> RM2[ARCHIVABLE]
  RM2 --> RM3{Evidence still depends on RM payload?}
  RM3 -->|CASE A yes| RM4[NOT PRUNABLE]
  RM4 --> RM1
  RM3 -->|CASE B independent durable source| RM5[PRUNABLE]
  RM5 --> RM6[PRUNED duplicate bytes]
  RM6 --> EVOK[Evidence may remain AVAILABLE]
  RM3 -->|CASE C authoritative payload removed without replacement| RM7[PRUNED]
  RM7 --> EVREQ[Explicit Evidence availability requalification]
  EVREQ --> MUE[MarkEvidenceUnavailable or successor]
  EV[Evidence own lifecycle] -.->|evaluated before prune| RM3
  RM6 --> SURF[Result Surface explains retention honestly]
  MUE --> SURF
```

### 29.2 CURRENT

Evidence : `retentionClass`, availability, `MarkEvidenceUnavailable`.
Review Material générique lifecycle : **pas encore** premier-class séparé.

### 29.3 TARGET (D-ER-12)

| Objet | Lifecycle |
| --- | --- |
| Review Material | HOT → ARCHIVABLE → PRUNABLE → PRUNED |
| Evidence | propre `status` / `availability` / `provenance` / `retentionClass` |

**Invariant :** `PRUNE REVIEW MATERIAL ≠ AUTOMATICALLY MarkEvidenceUnavailable`.

TTL / scheduler / GC implementation = **OPEN DESIGN DETAIL**.

---

## 30. Chemins logiques vs physiques

| Couche | Exemple NoteLite / pattern | Rôle |
| --- | --- | --- |
| **Logical target** | `projects/notelite/01-cadrage/...` | Autorité Product / EC / Pilot |
| **Physical storage** | `.sfia-exec/.../docs-write-artifact/...` | Runtime storage / review bytes |
| **Worktree path** | prepared WT + sealed absolute | Enforcement Cursor |

**Règles :**

- EC / ExpectedOutputs raisonnent en **logique repo-relative** ;
- instructions Cursor peuvent recevoir absolu scellé sous WT ;
- Review Material doit **relier** logique ↔ physique sans exposer un faux « Product path » `.sfia-exec` comme cible métier ;
- naming `docs-write-artifact` = **TRANSITIONAL**.

---

## 31. Retirement des taxonomies spécialisées

### 31.1 Objet de retirement (Product model)

Exemples à **RETIRE FROM PRODUCT MODEL** :

- `docs_write`
- `code_write`
- `read`
- `read_only`
- toute taxonomie de tâche Product homologue

### 31.2 Ce qui n’est pas retiré automatiquement

| Asset technique | Disposition typique |
| --- | --- |
| Verifier filesystem | KEEP / GENERALIZE |
| Worktree isolation | KEEP |
| Git lifecycle evidence sources | KEEP / HARVEST comme effects |
| Allowlists / RO enforcement | KEEP |
| ContractResult engine | KEEP / GENERALIZE rules |

### 31.3 Interdiction de renommage trompeur

**Ne pas** créer des catégories Product :

- `generic_read`
- `generic_write`
- `generic_code`

La généricité est le **modèle** (un EC generalist), pas un nouvel enum.

---

## 32. Ponts transitionnels

| Bridge | Rôle | Exit |
| --- | --- | --- |
| persist/ingest `docs_write*` | Compat Evidence path | Generic Review Material + ingest générique |
| policy `docs_write` dans verifier | Oracle actuel | Policies d’effet génériques + VerifiedChangeSet |
| UI « Recharger résultat produit » | Continue manuel | Reconciler + mécanisme de continuation autonome à définir |
| Legacy M3/M4 rematerialize docs_write | Recovery vieux EC | Sunset quand plus d’EC legacy |
| post_execution tools OFF | Safe analysis minimale | Deep Review read-only tools bornés |
| Naming paths `docs-write-artifact` | Storage actuel | Rename neutre sous Review Material |

**Règle (D-ER-13/14) :** chaque bridge a une **exit condition** ; pas de dual-stack permanent.

---

## 33. Anti-architecture

Pratiques **rejetées** (TARGET + discipline CURRENT) :

1. Catalogue Product de tâches (`docs_write` et homologues) comme architecture durable.
2. Catégories Product `generic_read|write|code`.
3. Report → Evidence automatique.
4. Second moteur Resolution / ContractResult / Execution « parallèle ».
5. UI owner du workflow (sequence locale Select→Start→Complete→Materialize).
6. Transport externe de revue comme cœur Product.
7. PASS sur narration / resultRef seul / Evidence available seul sans critères.
8. Big bang rewrite sans bridges à exit.
9. Présenter TARGET comme IMPLEMENTED.
10. Inventer un delivery plan N-lots dans ce document.
11. runtime v3 smuggled comme adopté.
12. READY FOR REAL implicite.

---

## 34. Frontière future de promotion Git

| Couche | État |
| --- | --- |
| Ce document | **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** |
| Autorité commit/push/PR | **Distinct Morris GO** après revue |
| Promotion doctrine / Build Doctrine / C1 | **NON** autorisée ici |
| Promotion runtime v3 | **NON ADOPTED** — hors frontière |
| Preuve REAL cible générique | **FUTURE PROOF** — GO distinct ; READY FOR REAL = NO aujourd’hui |

---

## 35. Stratégie de migration

**TARGET (D-ER-13/14)** — séquence logique (≠ delivery lots) :

1. **Freeze sémantique** : EC generalist + Claim/Fact/Analysis/Authority (déjà largement ancré).
2. **Generalize Review Material** : harvest persist docs_write → API neutre.
3. **Introduce VerifiedChangeSet** sémantique au-dessus du verifier.
4. **Unify Product Resolution** load path.
5. **Harden Reconciler progression** (éliminer stall poll-only).
6. **Enable Nora Deep Review read-only tools**.
7. **Result Surface always-explain** parity.
8. **Retire Product taxonomies** du prepare/UI/naming nominal.
9. **Retention HOT→PRUNED** Review Material (distinct Evidence lifecycle).
10. **Exit proofs** (section 38) avant claims de complétude.

**DELIVERY SLICING** de ces étapes = **TBD** (D-ER-15).

---

## 36. Risques / réserves

| ID | Risque | Mitigation |
| --- | --- | --- |
| R1 | Dual-stack prolongé (spécialisé + générique) | Exit conditions obligatoires ; D-ER-14 |
| R2 | Stall UI post-REAL (NoteLite-class) | Reconciler + continuation autonome TBD ; ne pas normaliser « Recharger » |
| R3 | Confusion Claim/Fact | D-ER-11 + Result Surface |
| R4 | Sur-claim REAL | Anti-claims ; READY FOR REAL=NO |
| R5 | Renommage `generic_*` Product | Interdiction explicite |
| R6 | Deep Review tools trop larges | Allowlist read-only stricte |
| R7 | GC agressif casse reprise | Tombstones + availability honesty |
| R8 | Delivery plan inventé | D-ER-15 TBD |
| R9 | runtime v3 confusion | Bannière NON ADOPTED |
| R10 | Correction gouvernée non re-testée (NoteLite) | Ne pas clore cycle sur pause |

---

## 37. Open design details

**OPEN DESIGN DETAIL** (non bloquants pour l’adoption de la cible, bloquants pour certaines claims d’implémentation) :

1. Forme exacte persistée du **VerifiedChangeSet** (aggregate vs value object vs Evidence sourceKind).
2. Mécanisme exact anti-stall (**worker** vs continue serveur vs autre) — principe D-ER-08 fixe l’owner, pas l’implémentation.
3. Schéma exact **Generic Execution Review Material** (IDs, storage root neutre) — **FINAL SCHEMA NOT ADOPTED**.
3bis. Packaging physique Report ↔ Review End Of (deux fichiers / deux blocs / autre).
3ter. RAW execution output capture précoce (crash-safety) vs finalized RM.
4. Allowlist précise des **outils Nora Deep Review**.
5. TTL / jobs **HOT→PRUNED** RM et interaction Evidence availability / worktree GC.
6. UX exacte Result Surface (composants) — exigence = always explain.
7. Mapping des anciens EC `docs_write` en reprise (compat window).
8. **DELIVERY SLICING** (D-ER-15).

---

## 38. Future exit proofs

**FUTURE PROOF** — exemples de preuves de sortie (aucune n’est claimée aujourd’hui) :

| Exit | Contenu minimal |
| --- | --- |
| E1 Generic Review Material | Persist/load générique (`executorClaims`/`verifiedEffects`/`reviewItems[]`) ; 0 Artifact OK ; sans symbole `docs_write` nominal |
| E2 VerifiedChangeSet | Au moins une mission non-docs produisant Changeset→Evidence→CE cohérent |
| E3 No UI stall | Attempt REAL long > poll legacy avance sans clic « Recharger » |
| E4 Nora Deep Review | Lecture Evidence via tool read-only borné + analysis |
| E5 Taxonomy retirement | Prepare/Execute nominal sans action Product `cursor.docs_write.apply` |
| E6 Retention | HOT→PRUNED RM observable ; Evidence availability **non** auto-flip ; Surface explique |
| E7 Bounded REAL cible | Campagne REAL distincte sous Morris GO — encore **READY FOR REAL = NO** |

---

## 39. Critical path

**Nature :** **ARCHITECTURAL DEPENDENCY GRAPH** — **≠** plan Delivery séquentiel E1→E2→…→lots.

Dépendances architecturales (ordre de sens, pas de lots) :

1. Discipline Claim/Fact/Analysis/Authority (**D-ER-11**) — déjà partiellement ancrée (inclut Review End Of = CLAIM)
2. Cursor Review End Of exigé via EC + native binding (**D-ER-05**)
3. VerifiedChangeSet (**D-ER-06**) branché Observation Studio
4. Generic Review Material finalisé (**D-ER-04**) après facts
5. Product Resolution générique multi-reviewItems (**D-ER-07**)
6. Reconciler progression complète (**D-ER-08**)
7. Nora Deep Review (**D-ER-09**)
8. Result Surface always-explain (**D-ER-10**)
9. Retirement taxonomies Product (**D-ER-01**)
10. Retention RM distincte d’Evidence (**D-ER-12**)
11. Exit proofs / éventuel READY FOR REAL futur (GO distinct)

Worktree isolé (**D-ER-02**) et Report CLAIM (**D-ER-03**) sont **prérequis déjà largement satisfaits** — les garder stables pendant la migration.

**DELIVERY SLICING** de ces dépendances = **TBD** (D-ER-15).

---

## 40. Delivery boundary TBD

**D-ER-15 / TARGET :**

- **DELIVERY SLICING = TBD**
- Ce document **n’adopte pas** de plan en 5 lots (ni autre N).
- Toute macro/lot future doit être une **décision Morris distincte**, dérivée de ce référentiel — pas l’inverse.

---

## 41. Anti-claims

Ce document et l’adoption D-ER **≠** :

- architecture cible **implémentée** bout-en-bout
- READY FOR REAL
- generic loop REAL-proven au-delà de NoteLite borné
- NoteLite cycle finalisé / correction re-testée
- preuve d’instance root-cause du stall UI (seulement cause architecturale haute confiance)
- runtime v3 ADOPTED
- global L5
- doctrine / Build Doctrine / C1 / framing promotion
- delivery plan adopté
- autorité commit/push/PR
- E2E Product Journey COMPLETE
- retirement déjà effectué de `docs_write` / `code_write` / `read` / `read_only`
- introduction de catégories Product `generic_*`
- Nora Deep Review tools déjà ON
- VerifiedChangeSet déjà objet Product premier

---

## 42. Resume anchors / prochaine décision

### 42.1 Anchors de reprise

| Anchor | Valeur |
| --- | --- |
| Document | `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md` |
| Décisions | D-ER-01 … D-ER-15 @ 2026-09-29 |
| Base main audit | `6f47f74dc9b515c4c79624b21772223ba02c76cd` |
| REAL borné | NoteLite — PAUSED ; NOT_PROVEN preserved ; UI recharge gap |
| Backbone KEEP | EC generalist · worktree · Report CLAIM · Evidence/RB/CE · Resolution · Reconciler |
| Dette nommée | docs_write persist/ingest · UI poll 8 · post_execution tools OFF · artifact naming |

### 42.2 Prochaine décision (gouvernance)

| Décision | Statut |
| --- | --- |
| Intégration Git de ce document | **PENDING** — Morris GO distinct |
| Première tranche d’implémentation | **TBD** (pas de slicing adopté) |
| Campagne REAL générique | **NOT AUTHORIZED** — READY FOR REAL = NO |
| runtime v3 | **NON ADOPTED** — ne pas rouvrir ici |

### 42.3 Question de reprise recommandée

> Quel **slicing vertical minimal** permet de fermer le chemin critique Generic Execution → Review → Result, en respectant les dépendances de cette architecture, **sans** multiplier les micro-lots — **DELIVERY SLICING = TBD** ?

---

## Annexes

### A. Diagramme — EPISTEMIC FLOW

```mermaid
flowchart LR
  subgraph CLAIM
    R[CursorExecutionReport]
    REO[Cursor Review End Of]
  end
  subgraph FACT
    V[VerifiedChangeSet]
    E[Evidence]
    RB[ReviewBundle]
  end
  subgraph REVIEW_PAYLOAD
    RM[Finalized Execution Review Material]
  end
  subgraph QUALIFICATION
    CE[ClaimEvaluation / ContractResult]
  end
  subgraph ANALYSIS
    N[Nora Deep Review]
  end
  subgraph AUTHORITY
    P[Pilot / HD / Confirmation]
  end
  R --> V
  REO --> V
  V --> RM
  R -.-> RM
  REO -.-> RM
  RM --> E --> RB --> CE
  CE --> N
  R -.-> N
  REO -.-> N
  N --> P
  CE --> P
  P -->|new EC / stop / correct| X[Next governed action]
```

### B. Diagramme — REVIEW/CORRECTION FLOW

```mermaid
flowchart TD
  A[Result Surface] --> B{Pilot choice}
  B -->|Accept| C[Close / next trajectory]
  B -->|Request correction| D[Governed correction HD]
  D --> E[Successor ExecutionContract]
  E --> F[Execute again under Reconciler]
  B -->|Manual review feedback| G{Context bound?}
  G -->|No| H[Conversational re-instruction<br/>reattach context]
  G -->|Yes| D
  B -->|Stop / Pause| I[Campaign PAUSED / RECOVERY_REQUIRED]
```

**Note NoteLite :** feedback review initialement context-free → re-instruction naturelle reattach — **≠** Product Resolution break.

### C. Matrice de disposition détaillée

| Asset | Current responsibility | Implementation evidence | Limitation | Target | Disposition | Dependencies | Transitional debt | Exit condition |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OA ExecutionContract backbone | Pivot WHAT durable | EC domain + NELC on main | Spécialisations encore branchées post-EC | Unique WHAT Product | **KEEP** | — | Low | EC nominal sans taxonomy Product |
| `generalistExecutionSurface` quartet | Surface Product générique | `generalistExecutionSurface.ts` | Coexiste avec legacy actions docs_write | Surface unique | **KEEP** / **COMPLETE** | D-ER-01 | Legacy actions encore adressables | Prepare nominal = quartet only |
| EC semantic inputs (objective/context/EO/…) | Mission semantics | EC fields + inputs | Pont typé optionnel encore dette NELC | Mission-first authority | **KEEP** / **COMPLETE** | Inspection UI | D1 typed bridge optionnel | Inspection↔projection parity stable |
| `projectExecutionContractToCursorPrompt` | Projette WHAT→prompt | projection module | Ne doit pas absorber HOW Studio | Projection WHAT-only | **KEEP** | EC | — | Tests parity inspection↔prompt |
| `StudioCursorRealLaunchGateway` | Launch REAL WT isolé | gateway + M4 REAL tests | Overlays encore spécialisables | Launch générique + overlays enforcement | **KEEP** | Worktree | Overlay docs_write paths | Launch sans branche Product taxonomy |
| Isolated detached git worktree | Borne d’effet | gateway prepare WT | GC/retention partiels | KEEP isolation | **KEEP** | D-ER-02 | Cleanup policy open | Cleanup deterministic documenté |
| `CursorExecutionReport` | Claim exécuteur | report persistence + Resolution disclosure | Enrichissement ≠ Evidence | CLAIM strict | **KEEP** | D-ER-03 | — | Aucun auto-promote Evidence |
| `verifyWorkspaceFileEffects` | Oracle filesystem | verifier application | Policy docs_write séparée | Socle VerifiedChangeSet | **HARVEST** / **GENERALIZE** | D-ER-06 | Policy-per-taxonomy | VerifiedChangeSet API neutre |
| Studio VerifiedChangeSet | — (absent comme objet Product nommé) | N/A | Manquant | Oracle Fact Studio | **COMPLETE** (à créer sémantiquement) | verifier harvest | — | E2 exit proof |
| `persistDocsWriteArtifactReviewMaterial` | Persist review bytes + claim | f3 persist module | Naming + Artifact/docs_write-centric | Generic RM (`executorClaims`/`verifiedEffects`/`reviewItems[]`) | **HARVEST** / **GENERALIZE** | D-ER-04 | paths `.sfia-exec/.../docs-write-artifact` | E1 générique ; 0 Artifact OK |
| `ingestDocsWriteArtifactEvidence` | Evidence artifact | ingest module | Spécialisé effet | Ingest générique depuis Changeset/Material | **GENERALIZE** | Evidence domain | docs_write source tags | Ingest nominal générique |
| docs_write requalify / rematerialize EO | Compat ContractResult / Git proofs | rematerialize helpers | Ancre taxonomy | Critères EC génériques | **TRANSITIONAL** / **RETIRE FROM PRODUCT MODEL** | ContractResult registry | Legacy EC window | Plus d’appel nominal |
| M4 RO specialized path | Read-only enforcement / missions | M4 RO codepaths | Lu comme tâche Product possible | Enforcement technique only | **GENERALIZE** / **RETIRE FROM PRODUCT MODEL** | allowlists | RO-as-taxonomy | RO = policy, pas Product category |
| M4 git commit/push/PR paths | Lifecycle Git effects | M4 git modules | Spécialisé ; authority sensible | Effects techniques gouvernés | **KEEP** (technique) / **RETIRE FROM PRODUCT MODEL** (si exposé comme tâche) | Evidence git sources | Product-facing naming | Git = effect class ≠ Product task |
| materialize branches on docs_write | Post-terminal product materialization | materialize* docs_write-linked | Parallel paths | Reconciler MATERIALIZE générique | **GENERALIZE** | D-ER-08 | docs_write triggers | Materialize via stage only |
| ContractResult / ClaimEvaluation engine | Qualify EC vs Evidence | EvaluateContractResult + registry | Rules encore partiellement spécialisées | Engine unique générique | **KEEP** / **GENERALIZE** | bound snapshot | specialized assessors | Rules sans Product taxonomy |
| Evidence retentionClass / availability | Lifecycle Evidence | Evidence domain + MarkEvidenceUnavailable | Couplage naïf RM↔Evidence | Lifecycle Evidence **propre** | **KEEP** / **COMPLETE** | D-ER-12 | Auto-unavailable on prune | E6 CASE A/B/C |
| `MarkEvidenceUnavailable` | Transition disponibilité Evidence | application service | Risque d’usage automatique sur prune | KEEP ; **seulement CASE C** (ou équivalent) | **KEEP** | D-ER-12 | Auto-call on every prune | Unavailable visible Result Surface |
| `resolveProductExecutionContext` | Shared Product Resolution | w2 resolve module | Artifact load docs_write-named | Unique generic resolution | **KEEP** / **GENERALIZE** | D-ER-07 | loadDocsWrite* | Resolution sans import docs_write |
| Continuity Projection stages | Derive stage/next action | deriveGovernedExecutionContinuityProjection | Non persisté (voulu) | KEEP derived | **KEEP** | Resolution | — | Stage matrix stable |
| `reconcileGovernedExecution` | Execute/continue deterministic | reconciler module | UI poll peut stall avant continue ultérieur | Owner progression bout-en-bout | **KEEP** / **COMPLETE** | D-ER-08 | No worker post UI poll | E3 |
| TrajectorySurface poll ≤8 | UX observe RUNNING | TrajectorySurface `for i<8` | Exhaust → pending possible | UI projection only | **TRANSITIONAL** | Reconciler | Pilot « Recharger » | Plus de dépendance poll pour avancer |
| Nora shared cognitive core | Conversation + post_execution | noraCognitiveCompletion | post_execution tools OFF | Shared core KEEP | **KEEP** | — | — | Modes clairement séparés |
| Nora post_execution tools OFF | Safe analysis minimale | mode gate | Bloque Deep Review riche | Read-only tools bornés | **GENERALIZE** (tools) | D-ER-09 | tools OFF bridge | E4 |
| Result / Trajectory surfaces | Exposent pending/outcomes | pre-m6 UI | Pas always-explain complet | Always explain Claim/Fact/Analysis/Authority | **COMPLETE** / **GENERALIZE** | D-ER-10 | CTA opaque / pending silencieux | Checklist explainability |
| Legacy Product taxonomies (`docs_write`, `code_write`, `read`, `read_only`) | Historique mission typing | actions/caps/legacy prepare | Contredit modèle générique | Retrait du modèle Product | **RETIRE FROM PRODUCT MODEL** | D-ER-01 | Bridges §32 | E5 |
| Cursor Review End Of + external transport | REO = CLAIM exécuteur ; transport = process | process / capitalisations | REO natif non systématique ; tentation import bus | Cursor REO CLAIM + native Studio binding | **HARVEST** semantics / **DO NOT IMPORT** transport | D-ER-05 | Packaging physique open | EC exige REO ; binding Studio |
| v2.6 canonical contract logic | Baseline fonctionnelle harvest | framing / capitalisations | Pas runtime | Harvest only | **HARVEST** | — | — | Pas de re-baseline |
| runtime v3 | — | — | NON ADOPTED | Hors adoption | **RETIRE LATER** / hors scope (non adopté) | — | Tentation promotion | Décision Morris distincte seulement |
| Delivery slicing plan | — | — | Non adopté | TBD | **TBD** (pas une disposition code) | D-ER-15 | Invention de lots | Morris slicing decision |

---

### D. Synthèse disposition (compte)

| Disposition | Lecture |
| --- | --- |
| **KEEP** | Backbone à préserver (EC, WT, Report CLAIM, Evidence/RB/CE, Resolution, Reconciler, Nora core) |
| **COMPLETE** | Manques cibles à combler (VerifiedChangeSet nommé, always-explain, progression autonome) |
| **HARVEST** | Extraire sémantique (v2.6, verifier, persist docs_write, external review discipline) |
| **GENERALIZE** | Étendre hors naming/taxonomie spécialisée |
| **TRANSITIONAL** | Pont autorisé avec exit |
| **RETIRE FROM PRODUCT MODEL** | Taxonomies tâche Product et expositions Product homologues |
| **RETIRE LATER** | Process/runtime non Product ou non adoptés — ne pas smuggle |

---

### E. Index des décisions D-ER

| ID | Titre court |
| --- | --- |
| D-ER-01 | Modèle Product générique — retire taxonomies tâche |
| D-ER-02 | Keep isolated worktree |
| D-ER-03 | Report = CLAIM |
| D-ER-04 | Generic Execution Review Material |
| D-ER-05 | Native Review End Of (Cursor CLAIM ; Studio binding) |
| D-ER-06 | Studio VerifiedChangeSet |
| D-ER-07 | Un Product Resolution |
| D-ER-08 | Reconciler owns progression |
| D-ER-09 | Nora Deep Review read-only tools |
| D-ER-10 | Result Surface always explains |
| D-ER-11 | Claim/Fact/Analysis/Authority |
| D-ER-12 | Review Material HOT→PRUNED ≠ auto Evidence unavailable |
| D-ER-13 | Migration without big bang |
| D-ER-14 | No parallel architecture |
| D-ER-15 | Delivery slicing TBD |

---

*Fin du document — Architecture de référence Generic Execution / Execution Review / Evidence / Nora / Result / Pilot — ADOPTED TARGET BY MORRIS — DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION — base main `6f47f74d` — 2026-09-29.*
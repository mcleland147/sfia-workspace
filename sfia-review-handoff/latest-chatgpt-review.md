# SFIA Studio — Generic Execution Architecture Audit Completion — Review Pack FULL

- **Horodatage** : 2026-10-16T08:39:51+0200 (Europe/Paris)
- **GO Morris** : EXECUTION ARCHITECTURE CONVERGENCE — CRITICAL AUDIT COMPLETION (READ-ONLY)
- **Cycle** : 6 — Architecture technique · **Profil** : CRITICAL
- **CKC** : ckc:studio:technical-architecture
- **Mutations Product** : **AUCUNE**
- **Audit précédent** : handoff `ea2f3306` / blob `318e0f3c` (conservé ; gaps complétés ici)

## 1. Verdict

**ARCHITECTURE AUDIT COMPLETION PASS**
**GENERIC EXECUTION TARGET QUALIFIED**
**READY FOR MORRIS ARCHITECTURE DECISION**

(+ **MORRIS ARCHITECTURE DECISION REQUIRED** — aucune option ADOPTED ce cycle)

Principe cible (clarification Morris 2026-10-16) aligné sur **D-ER-01 ADOPTED TARGET** (2026-09-29) :

> Nora peut mobiliser une capacité **générique** d'exécution lorsqu'un exécuteur externe est requis — **sans** dépendance Artifact / Deliverable / taxonomie métier / docs_write / `cursor.docs_write.apply` / étape lifecycle — sous **autorité Product** (EC / effects / Confirmation).

**Écart CURRENT :** l'admission conversationnelle passe encore par le routeur Artifact-continuation et des discriminants `docs_write` / `artifactMaterializationOperation` avant Generic PREPARE (finding F05). Le backbone EC généraliste **existe** déjà après admission.

Anti-claims : ARCHITECTURE ADOPTED · CORRECTION COMPLETE · P6 GLOBAL PASS · READY FOR REAL · RUNTIME V3 ADOPTED — **NON**.

## 2. Git Truth

| Check | Valeur |
|---|---|
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` MATCH |
| Audit tree | `studio-runtime-main-52f36884` @ même SHA (lecture seule) |
| :3020 / e66 | **non touchés** |
| Contrat WT | `.tmp-sfia-review` only dirty |
| Handoff précédent | `ea2f3306` / `318e0f3c` VERIFIED |

## 3. Authority mapping — clarification Morris vs Git

| Source | Statut | Correspondance |
|---|---|---|
| D-ER-01…15 | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-09-29) dans `sfia-studio-generic-execution-review-result-architecture.md` | Taxonomies Product **retirées** du modèle ; capabilities/effects techniques **KEEP** ; interdiction `generic_read|write|code` Product |
| P2-D-01…04 | CURRENT Product Simplification | Rec≠HD ; SUCCESS≠COMPLETE ; Conf≠HD ; close≠next |
| C1 / D-SIMP | VALIDATED | Chat-first ; Generic Execution harvest |
| Clarification Morris « outil générique mobilisable par Nora » | **CURRENT CLARIFICATION** | Compatible D-ER-01 ; **FORMAL DECISION TRACE** utile pour trancher *tool Agents* vs *routeur Product conversationnel* (D-ER ne prescrit pas le mode d'invocation Nora) |
| PR #586 | CURRENT implemented | Bridge borné `no_require_artifact` → Generic — **insuffisant** pour généricité |

**FACT :** D-ER-01 interdit les taxonomies Product de tâche.
**FACT :** CURRENT code utilise encore ces discriminants à l'**admission**.
**OPEN :** formaliser « invocation Nora » = Option 1 (router) vs Option 2 (tool Agents + même backend).

## 4. Audit A — Nora invocation CURRENT

### Contrat CURRENT (FACT)

```
Pilot utterance
 → Nora structured Intent Analysis (non-authoritative)
 → Product orchestrateF2 (server)
 → [Artifact router may BLOCK]
 → Generic PREPARE eligibility (conversation router)
 → rememberGenericPrepareRecommendation | prepareGenericExecutionContractDraft
 → Pilot inspect / confirm / authorize
 → Attempt / Cursor
```

| Q | Réponse | Preuve |
|---|---|---|
| A. Capacité Nora pour PREPARE ? | **Aucune tool Agents** de PREPARE/EXECUTE | `productExecutionAgentsTools.ts` = `product_execution_context_get` READ-ONLY |
| B. Forme | **Orchestration conversationnelle Product** | `orchestrateF2.ts:1983–2224` ; `resolveChatFirstGenericPrepareGo` `prepareGeneric…:154–191` |
| C. Entrée Generic PREPARE | `NEW_CYCLE_FORMALIZATION` **OU** `no_require_artifact` + active cycle + actionable/execution_request/prepare-accept | `orchestrateF2.ts:2010–2018` |
| D. Dépendances type travail | **OUI à l'admission** via ACGC `hasCompatibleDocsWrite…` | `activeCycleGovernedContinuation.ts:368–398,583–585` |
| E. Vocabulaire Pilote | Recommandation « préparer » / accept offer ; pas besoin de jargon engine si signal naturel — **mais** Nora doit émettre discriminants pour éviter BLOCK | Fake injecte discriminants |
| F. Nora sélectionne catégorie ? | Schema permet `intentKind`/`artifactMaterializationOperation` — **gate Product les exige** pour path documentaire | FACT |
| G. Absence catégorie bloque ? | **OUI** → `incompatible_execution_intent` | `:1120–1121` |
| H. Cycle actif ? | Generic PREPARE path **exige** `activeCycleInstanceId` actuellement | `orchestrateF2.ts:2015–2017` — **OPEN** pour S8 |
| I. Consentement | Offer CURRENT + accept / lexical prepare — micro-gates chat-first existants | KEEP pattern |
| J. OpenAI-native | Intent JSON schema + Agents tools read-only — **pas** second moteur | KEEP |

**TOOL COGNITIF ≠ EC ≠ AUTHORITY ≠ ATTEMPT** — préservé.

## 5. Audit B — Frontières d'admission (classification)

| Contrôle | Sert | Admission taxonomique ? | Cible |
|---|---|---|---|
| Intent parse / objective / outcome | Compréhension / readiness | Non (mission fields) | KEEP |
| Signals structural* | Matérialité / HD gate | Non (effects) | KEEP |
| `continuationKind` / natural signal | Choix parcours Artifact | **Oui si entrée ACGC** | ADAPT |
| `artifactMaterializationOperation` / `intentKind=docs_write` | Catégorie métier | **Oui — bloque Generic** | ADAPT/REMOVE from admission |
| `REQUIRE_ARTIFACT` / APPLICABLE | Obligation clôture | Oui pour Artifact path ; **ne doit pas** conditionner outil générique | KEEP (closure) / découpler admission |
| `no_require_artifact` bridge PR586 | Fallback documentaire | Borné | KEEP interim |
| `incompatible_execution_intent` | Fail-closed Artifact sans effet | **Bloque générique** | ADAPT |
| `candidateCycleTypeId` / formalizationReady | Lifecycle / F1 | Contexte cycle ≠ gate outil | ADAPT clarification |
| Active cycle required | Cycle context | **Actuellement gate** | OPEN (S8) |
| Materiality / protected paths / caps envelope | Autorité / sécurité | Non-métier | KEEP |
| Offer fingerprint / session | Consentement | Non | KEEP |

**Distinction :** QUALIFICATION DES EFFETS (KEEP) ≠ CATÉGORISATION MÉTIER (retirer de l'admission).
**Distinction :** CYCLE CONTEXT (utile) ≠ CYCLE LIFECYCLE GATE (Artifact/étape Delivery ne doit pas ouvrir l'outil).

## 6. Audit C — ExecutionContract générique

**Surface canonique CURRENT (FACT) :** `generalistExecutionSurface.ts` — `cap:studio.cursor.generalist` / `studio.cursor.generalist.execute` / workspace / authorized_contract.

Generic PREPARE stamp : quartet Product canonique ; `decisionRefs:[]` si NON_STRUCTURAL ; `resolvedAuthoritativeTargetPath:null` ; mission effects en **inputs** inspectables (`prepareGeneric…`).

| Classe | Exemples | Rôle cible |
|---|---|---|
| A Descriptif | objective, expectedOutcome | KEEP |
| B Effets / policy | effectClass, reversibility, protected paths | KEEP |
| C Autorité | materiality, Confirmation, version/fingerprint | KEEP |
| D Catégories métier héritées | `docs_write`, `code_write` comme **routeurs Product** | RETIRE LATER admission |
| E Adapters techniques | worktree path resolve, claim ingest | KEEP/HARVEST |

Le contrat **peut** représenter toute mission autorisée **sans** champ métier discriminant pour la mécanique — **FACT** sur le draft generic. Les champs métier agissent surtout **avant** (admission) et sur le **chemin M3 scellé** parallèle.

## 7. Audit D — Cursor / dépendances aval

```
EC → Authorize → Attempt → Gateway → Cursor CLAIM
 → VerifiedChangeSet / Evidence / RB / CE
 → Product Resolution → Nora post-Evidence (read-only)
```

| Composant | Classification | Preuve callers |
|---|---|---|
| `executeConfirmedBoundedDocsWriteContract` | **LEGACY PRODUCT ROUTER** (M3 sealed) | `confirmAndExecuteResolvedM3.ts:178` |
| `qualifyDocsWriteM3Intent` / `selectProductM3ResolutionProfile` | **LEGACY PRODUCT ROUTER** | `prepareAndResolveM3ProductPath.ts:153–163` |
| `completeDocsWriteClaimEvidenceCompletion` | **TECHNICAL ADAPTER** / transitional (nommé docs_write ; réutilisé W3b) | `governedExecuteAuthorizedContract.ts:1154` |
| `persistDocsWriteArtifactReviewMaterial` | **TECHNICAL ADAPTER** + path root helper | F3 ingest + executionReview tools |
| `resolveSealedDocsWriteWorktreePaths` | **TECHNICAL ADAPTER** sealed paths | `studioCursorRealLaunchGateway.ts:872` |
| `prepareDocsWriteRecoverySuccessor` | **TRANSITIONAL BRIDGE** recovery | `w2/actions.ts:525` |
| Generalist Select `agt:studio.cursor.generalist` | **GENERIC CORE** | D-ER / resolveAttemptExecutionProfile |
| `product_execution_context_get` | **GENERIC CORE** read-only | Nora tools |

**Ne pas supprimer** un adapter parce qu'il contient « docsWrite » — distinguer traitement d'effet filesystem vs sélection de parcours Product.

## 8. Audit E — Artifact / Cycle découplage

| Règle | Rôle | Lien Execution CURRENT | Cible |
|---|---|---|---|
| REQUIRE_ARTIFACT | Obligation clôture | Admission Artifact path | KEEP closure ; **pas** admission outil |
| Artifact APPLICABLE | F14 qualité/obligation | Idem | KEEP |
| Deliverable / Exit Proof | Clôture | P2-D-02 SUCCESS≠COMPLETE | KEEP |
| « Exécution produit un Artifact » | Effet possible | ReviewItem possible (D-ER-04) | KEEP |
| « Artifact requis pour accéder à Execution » | **Contradiction cible** | ACGC gates | **Découpler** |

Décision lifecycle Artifact = **séparée** de la décision d'outil générique (soumettre à Morris).

## 9. Matrice de généricité S1–S10 (audit, non exécuté)

| # | Scénario | CURRENT path | Blocage typique | Cible | Tests existants | Preuve manquante |
|---|---|---|---|---|---|---|
| S1 | Créer document repo | ACGC → often `incompatible_execution_intent` or Artifact | Discriminant docs_write | Generic PREPARE → generalist | F05 Fake only | LIVE natural oracle |
| S2 | Modifier code | Often NEW_CYCLE or generic mission / M3 | Taxonomy / readiness | Same generalist | G-D4 generic mission | Natural code mission LIVE |
| S3 | Exécuter tests | Sous-couvert generalist effects | Capability/effect gates | Generalist + effect policy | Sparse | Explicit test-run mission |
| S4 | Examiner fichiers | Cognitive tools / RO profiles | May hit sealed RO M3 | Read tools ≠ Attempt ; or generalist read effects | git_local_* tools | Boundary cognitive vs Attempt |
| S5 | Modif + Confirmation | Materiality STRUCTURAL → HD/Conf | structuralBlocked readiness | Effects→Confirmation (P2-D-03) | Product Continuity | — |
| S6 | Action protégée | protected paths / elevated caps | CAPABILITY_OUTSIDE / path policy | Fail-closed authority | Envelope tests | — |
| S7 | Cycle sans Artifact | PR586 if discriminants present | Same as S1 if missing | Generic sans Artifact | F05 T01 | LIVE |
| S8 | Pas de cycle actif | Generic PREPARE skip ; NEW_CYCLE/createCycle | **active cycle required** | OPEN — mission sans cycle ? | Partial | Morris decision |
| S9 | Ambigu | Clarification readiness | missing objective/scope | Clarify — no EC | readiness | — |
| S10 | Hors capacité Cursor | Envelope / Select fail-closed | elevated caps | Refuse/requalify | Envelope spoofing | Broader capability matrix |

**Conclusion matrice :** Markdown (S1) n'est **pas** preuve de généricité ; le même défaut d'admission taxonomique peut masquer S2/S7. S8 est un **OPEN** architectural distinct.

## 10. Fake / Real (F05) + exigences oracle

| | OBSERVED | INFERRED | NOT PROVEN |
|---|---|---|---|
| LIVE message Artifact + effet compatible absent | OUI | — | — |
| Cause `incompatible_execution_intent` | — | OUI (message + code) | Payload JSON exact |
| Fake injecte `cursor.docs_write.apply` | OUI | — | — |
| Autres scénarios S2–S7 masqués par fixtures | — | HYPOTHESIS plausible | — |

**Oracle QA exigé (cible) :** langage naturel ; **aucun** discriminant artificiel ; même parcours Product ; négatifs autorité ; REAL séparé.
DETERMINISTIC ≠ REAL.

## 11. Options (aucune ADOPTED)

### Option 1 — Convergence routage Product (admission générique)

Élargir l'admission : mission actionable nécessitant exécuteur externe → Generic PREPARE **sans** gate Artifact/docs_write ; ACGC réservé aux **obligations** Artifact vraies.
**Conformité principe :** ÉLEVÉE · **Réutilisation :** max · **Anti-parallèle :** OUI · **Effort :** borné · **Risque :** confusion Artifact/Generic (mitigé tests) · **S8 :** OPEN séparé.

### Option 2 — Tool Agents d'invocation + même backend

Exposer tool Nora `request_generic_execution_prepare` (ou équivalent) → appelle `prepareGeneric…` / remember offer — **sans** autorité d'exécuter.
**Conformité :** ÉLEVÉE si tool ≠ authority · **OpenAI-native :** OUI · **Risque :** double entrée (router+tool) · **Complexité :** + · **D-ER :** compatible si backend unique.

### Option 3 — Maintenir routeurs spécialisés + fallback

Améliorer seulement docs_write fallback.
**Conformité principe :** **FAIBLE** (ne satisfait pas généricité) · **Rejet recommandé** comme trajectoire principale.

**Ancienne Option A documentaire seule :** insuffisante (ne débloque que docs_write).

## 12. Matrice d'impact (cœur décisionnel)

| Component | Owner | Current | Target contradiction | Risk | Class | Exit proof |
|---|---|---|---|---|---|---|
| ACGC docs_write gate | F2 | Admission taxonomique | D-ER-01 / Morris tool principle | CRITICAL | ADAPT | Natural S1→Generic sans discriminator |
| orchestrateF2 eligibility | F2 | Bridge no_require only | Généricité | HIGH | ADAPT | S2/S7 same path |
| Generic PREPARE / envelope | W2 | KEEP | — | — | KEEP | Caps exact + materiality |
| generalistExecutionSurface | EC | KEEP | — | — | KEEP | Quartet only on nominal |
| M3 docs_write stack | F3 | Parallel router | D-ER-01 exit | HIGH | RETIRE LATER / FREEZE | No taxonomy branch nominal |
| Claim/path adapters *DocsWrite* | F3/W2/Attempt | Technical | Naming debt | MED | HARVEST→GENERALIZE (D-ER-04) | Generic Review Material |
| Nora Agents tools | Nora | Read-only | Option2 if chosen | MED | KEEP / COMPLETE tool | Tool≠Execute proven |
| Active-cycle requirement | F2 | Gate | S8 OPEN | MED | OPEN | Morris decision |
| REQUIRE_ARTIFACT / F14 | Cycle | Closure | Must not gate tool | HIGH | KEEP decoupled | Closure tests unchanged |
| Fake optional MD | Fake | Injects taxonomy | Masks LIVE | HIGH | ADAPT | Oracle without inject |

## 13. Trajectoire minimale (sous GO futurs)

**Capacité unique :** Nora → execution tool → Contract → Authority → Cursor → Result → Nora

| Lot | Scope | Exit proof | Gate |
|---|---|---|---|
| **L0** | Décision Morris Option 1 vs 2 (+ S8) | HD / architecture decision recorded | Morris |
| **L1** | Admission générique (Option 1 core) découplée Artifact/taxonomy | S1+S2+S7 déterministes sans Fake discriminant ; Artifact obligation path inchangé | Delivery GO |
| **L2** | Oracle Fake/Real + négatifs autorité | Natural language suite ; F05 LIVE retest | QA GO |
| **L3** | Freeze/retire M3 taxonomy routers ; harvest adapters | D-ER-01 exit progress | Distinct GO |
| **L4** | Option 2 tool (si choisi) thin wrapper | Tool prepare ≠ execute | Distinct GO |

End-to-end L1 > hardening non bloquant. Pas de POC parallèle.

## 14. Décisions Morris à soumettre

1. **Adopter Option 1** (router admission) comme trajectoire minimale ?
2. **Option 2** en complément ou plus tard ?
3. **S8** : Generic PREPARE sans cycle actif — autorisé / interdit / autre cadrage ?
4. Formaliser clarification « outil Nora » comme décision Git (complément D-ER) ?
5. Calendariser RETIRE M3 taxonomy routers vs HARVEST adapters ?

## 15. Exit Proof end-to-end (cible post-décision)

Demande naturelle (doc **ou** code **ou** autre effet autorisé) → offre/contrat **généraliste** → inspect/authorize → Attempt Cursor generalist → Evidence/Review → Nora read-back — **sans** REQUIRE_ARTIFACT, **sans** `cursor.docs_write.apply` à l'admission, **sans** second moteur.

## 16. Réserves

- Payload LIVE exact NOT OBSERVED.
- Offer process-local.
- Schema Generic Review Material OPEN (D-ER-04).
- post_execution tools OFF vs D-ER-09 Deep Review cible.

## 17. Git Truth final

```
origin/main=896ff59c704bfa76df1da1a51705aaf948c1cf0c
product_mutations=NONE
:3020=untouched
```

## 18. Instruction ChatGPT

Lire `sfia/review-handoff` → `latest-chatgpt-review.md`.

Produire : **SFIA STUDIO — GENERIC EXECUTION ARCHITECTURE CRITICAL DECISION READINESS REVIEW.**

Vérifier : principe Morris ; généricité ; indépendance Artifact/catégories ; autorité ; Option 1/2/3 ; S1–S10 ; trajectoire ; **aucune option ADOPTED** ; **zéro mutation Product**.

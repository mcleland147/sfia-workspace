# Review Pack FULL — STUDIO-EXECUTION-CONTINUITY-O1-IMPACT-01

| Field | Value |
| --- | --- |
| **Horodatage** | 2026-10-17 12:50:00 CEST |
| **Audit ID** | `STUDIO-EXECUTION-CONTINUITY-O1-IMPACT-01` |
| **Parent** | `STUDIO-EXECUTION-ARCH-AUDIT-01` (`11159a97`) |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Mode** | READ-ONLY — impact Option 1 |
| **Décision Morris consommée** | **GO OPTION 1 — ADAPT EXECUTION CONTINUITY** (orientation) |
| **Branche Product** | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| **HEAD** | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| **origin/main** | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| **Product dirty FP (excl. `.tmp`)** | `ae0f68e69d3733c7f7e76c62bee9a2c6c2063248a26081af76b3ca272bf58a4a` |
| **Dirty FP incl. `.tmp`** | `ffc212da932c7adea6451f9818bea30dd7b51ee671b13c8dcd30d321ead785a6` |
| **Product files modified this cycle** | **ZERO** |
| **Verdict Cursor** | **OPTION 1 IMPACT CLOSURE COMPLETE — READY FOR CHATGPT REVIEW** |

---

## A. Executive

Option 1 est **orientée** : adapter W2 continuity pour admettre les EC G-D4 `decisionRefs=[]` + `MATERIALITY:NON_STRUCTURAL` **sans HD artificielle**, en réutilisant les gates OA Confirm/Authorize (`assertDecisionRefsAdmissibleForConfirm` + `revalidateMaterialityAgainstCurrentProduct`).

**Bloqueur unique Product-active :** `verifyDecisionLineage` refuse systématiquement `refs.length === 0` (`readCurrentGovernedExecutionContinuity.ts:138-143`), alors que le DTO impose `decisionRef: string` pour `kind:"active"` (`types.ts:292-298`).

**Blast radius DTO :** les surfaces Product Conversation / Execution / Confirmation **ne lisent pas** `.decisionRef` — elles utilisent `kind` + `contract` + `inspection`. Seuls recovery + TrajectorySurface + types/reader + tests G5 sont touchés pour une migration **nullable**.

**Variante DTO recommandée (non décision Delivery) :** `decisionRef: string | null` sur `kind:"active"` — plus petit rayon que split `kind`.

---

## 1. Local Git Truth Check

| Check | Result |
| --- | --- |
| toplevel | `…/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` |
| branch | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD local = remote tip | `b4c1d862…` |
| origin/main | `896ff59c…` |
| staged | vide |
| dirty Product | préservé (M-HD + materiality + generic prepare) |
| handoff parent tip | `11159a97` |
| Review Pack | réinitialisé puis réécrit |

Sources inspectées = **HEAD + dirty local** (pas le seul SHA distant).

---

## 2. Sources

- Parent handoff `11159a97:sfia-review-handoff/latest-chatgpt-review.md`
- D-ER / P6-07 / framing 30,32,34,35,37 (invariants HD ≠ Confirm ≠ Auth ; continuity restart-safe)
- Code : `readCurrentGovernedExecutionContinuity.ts`, `types.ts`, `confirmForAuthorization.ts`, `authorizeGenericPreparedContract.ts`, `authorizeExecutionContract.ts`, `executionMateriality.ts`, `resolveAuthoritativeProductMateriality.ts`, UI Product listée §6
- HQA RO : contrat `xct:gen-prep:5f13e66c…` encore `confirmation_required` + `decisionRefs=[]` + `MATERIALITY:NON_STRUCTURAL`

---

## B. Inventaire exhaustif des consommateurs

### B1. Producteur / contrat

| Symbole | Fichier | Lignes | Hypothèse actuelle |
| --- | --- | --- | --- |
| `verifyDecisionLineage` | `w2/readCurrentGovernedExecutionContinuity.ts` | 130-179 | `decisionRefs.length ≥ 1` obligatoire |
| `readCurrentGovernedExecutionContinuity` | même | 220-345 | `kind:active` ⇒ `decisionRef: string` |
| `CurrentGovernedExecutionContinuityResult` | `w2/types.ts` | 290-298 | `decisionRef: string` non nullable |
| `CurrentGovernedExecutionContinuityContractDto` | `w2/types.ts` | 272-288 | **pas** de `decisionRef` (OK) |
| `w2ReadCurrentGovernedExecutionContinuityAction` | `w2/actions.ts` | 197-207 | passthrough |

### B2. Directs — Product-active UI (lisent `kind`/`contract`/`inspection`, PAS `.decisionRef`)

| Fichier | Fonction / usage | Lignes | `decisionRef` requis ? | Modif Option 1 |
| --- | --- | --- | --- | --- |
| `ProjectWorkspacePage.tsx` | badge + moment confirm | 240-249, 550-558 | Non | **NON** (sauf si split `kind`) |
| `ExecutionSurface.tsx` | refresh / confirm / execute | 84-99, 262-270, 346-348 | Non | **NON** |
| `useProductConversation.ts` | resume / inspect / confirm | 386-396, 663-672, 751-812 | Non | **NON** |
| `ConversationSurface.tsx` | show confirmation card | 460-477, 1028-1029 | Non | **NON** |
| `GovernedConfirmationCard.tsx` | props ContractDto only | 19-27 | Non | **NON** |
| `pilotExecutionPresentation.ts` | `preExecutionContinuity` | 155-163, 306-310 | Non | **NON** |
| `pilotContractPresentation.ts` | — | — | N/A | **NON** |

### B3. Directs — lisent continuity `.decisionRef`

| Fichier | Fonction | Lignes | Si `decisionRef=null` | Circuit | Modif |
| --- | --- | --- | --- | --- | --- |
| `TrajectorySurface.tsx` | `rehydrateGovernedExecutionContinuity` | 655-741 | `?? null` déjà | Product + recovery UI | Soft — déjà tolérant |
| `prepareDocsWriteRecoverySuccessor.ts` | `cancelWrongGenericCurrentIfNeeded` | 236-267 | `null !== recoveryId` → AMBIGUOUS | **lab/recovery** | Soft YES — branche explicite |
| `prepareDocsWriteRecoverySuccessor.ts` | prepare path | 363-381 | déjà `?: null` | recovery | Soft YES type |

### B4. Indirects / non-continuité (hors migration DTO, qualification)

| Zone | Note |
| --- | --- |
| `confirmForAuthorization.ts:322-323` | Omet déjà `decisionRef` Confirmation si empty — **KEEP** |
| `authorizeGenericPreparedContract` / `authorizeExecutionContract` | Reval CURRENT via `revalidateMaterialityAgainstCurrentProduct` — **KEEP / REUSE** |
| `resolveProductExecutionContext.ts:174-177` | `decisionId` null si empty — derive path séparé — **KEEP** (pas le reader W2) |
| `deriveGovernedExecutionContinuityProjection` | Projection stage ; ne passe pas par `verifyDecisionLineage` — **KEEP** ; T10 doit prouver cohérence d’identité EC |
| OA Confirmation `decisionRef` | Autre concept — **ne pas confondre** |
| Trajectory `decidedByDecisionRef` | Hors scope Option 1 |

### B5. Tests (consommateurs / mocks)

| Fichier | Rôle | Impact O1 |
| --- | --- | --- |
| `ecRehydrationContinuity.d0.test.ts` G5 | empty **unstamped** → INTEGRITY | **STAY** |
| même G0 | HD-bound `decisionRef` string | **STAY** |
| `postExecutionProductContinuity.d0.test.ts` | Attempt UNKNOWN → INTEGRITY | **STAY** (autre frontière) |
| UI mocks `kind:"active"+decisionRef` (~13 fichiers) | fixtures string | **STAY** (nullable accepte string) |
| **NOUVEAU** suite G-D4∩continuity | T1–T16 | **CREATE** |

**Couverture inventaire :** 27 fichiers référencent le reader/action ; 7 fichiers typent le Result/DTO Product UI ; consommateurs `.decisionRef` continuity = **3** (reader return + recovery + TrajectorySurface). Inventaire **qualifié exhaustif** pour le DTO continuity.

---

## C. Graphe des dépendances

```
OA EC (G-D4 stamp + decisionRefs)
        │
        ▼
readCurrentGovernedExecutionContinuity
   ├─ supersession / cycle / ambiguity / terminal Attempt   [KEEP]
   ├─ verifyDecisionLineage  ──► BLOCKER empty refs          [ADAPT]
   │     └─ (proposed) revalidateMaterialityAgainstCurrentProduct + assertDecisionRefsAdmissibleForConfirm  [REUSE]
   └─ kind:active { decisionRef, contract, inspection }
            │
            ├─► w2ReadCurrent…Action
            │       ├─► useProductConversation → ConversationSurface → GovernedConfirmationCard
            │       ├─► ExecutionSurface → pilotExecutionPresentation
            │       ├─► ProjectWorkspacePage (badge)
            │       └─► TrajectorySurface (decisionRef??null + recovery CTAs)
            └─► prepareDocsWriteRecoverySuccessor (decisionRef match HD)
```

**Direction d’autorité :** Continuity = **admissibilité lecture / projection actionnable pour Inspect+Confirm UI** — **≠ Authorization ≠ Execution**. Confirm/Authorize restent les frontières mutatives qui re-valident.

---

## D. Cas A–J → comportement cible

| Cas | Cible | Fonction autoritaire réutilisable | Continuity result |
| --- | --- | --- | --- |
| **A** G-D4 NS + `[]` + CURRENT OK | Admettre sans HD | `assertDecisionRefsAdmissibleForConfirm` + `revalidateMaterialityAgainstCurrentProduct` | `active`, `decisionRef=null` |
| **B** STRUCTURAL + `[]` | REFUS | même assert (stamp forbids / recompute structural) | INTEGRITY / fail |
| **C** UNKNOWN + `[]` | REFUS | idem | fail |
| **D** `[]` sans stamp | REFUS | Confirm Case D `:164-170` + G5 | fail (**STAY**) |
| **E** stamp NS mais Product stale/structural | REFUS / requal | `revalidate…` CURRENT — stamp ≠ sole authority | fail (pas `active`) |
| **F** HD réelle acceptée | Préservé | `verifyDecisionLineage` HD loop | `active`, `decisionRef=id` |
| **G** HD invalide | REFUS | HD loop existant | fail |
| **H** superseded/cancelled/stale/cycle | REFUS | filtres existants `:246-304` | none/fail |
| **I** plusieurs courants | FAIL-CLOSED | `:276-280` AMBIGUOUS | fail |
| **J** Attempt terminal | hors pré-exec | `:261-268` | skip → none |

---

## E. Contrat de continuité cible + variantes DTO

### E1. Sémantique cible

Pour `kind:"active"` :

- `contract` + `inspection` inchangés.
- `decisionRef: string | null`
  - `string` = HD-bound lineage verified
  - `null` = G-D4 empty-refs **admis après** stamp NON_STRUCTURAL **et** CURRENT revalidation OK
- Jamais sentinelle / faux `dec:`.
- Jamais inventer HD.
- Projection `active` **n’autorise pas** Execute ; Confirm/Authorize restent obligatoires selon statut.

### E2. Comparaison variantes

| Variante | Blast radius | Exhaustivité TS | Verdict impact |
| --- | --- | --- | --- |
| **V1 nullable `decisionRef`** | types + reader + soft recovery + tests G-D4 | moyenne | **RECOMMANDÉE** |
| **V2 split `kind` (`active_with/without_decision`)** | **tous** `kind==="active"` (UI Product + ~13 tests UI) | haute | Coût élevé — non nécessaire |
| **V3 `hasDecision` discriminant** | milieu | haute | Acceptable si Morris exige exhaustivité ; plus large que V1 |
| Sentinelle / faux HD | interdit | — | **REFUSÉ** |

**Migration recommandée :** **V1**. Sélection Delivery finale = gate Morris **D-DTO** (ci-dessous) — orientation Option 1 ne fige pas encore le refactor.

### E3. Revalidation CURRENT en lecture

| Question | Réponse sourcée |
| --- | --- |
| Réutilisable RO ? | **Oui** — `revalidateMaterialityAgainstCurrentProduct` (`resolveAuthoritativeProductMateriality.ts:397-421`) |
| Faits à relire | LPS/currentness, pathRoot/binding, concrete paths, capability envelope via `resolveAuthoritativeProductMateriality` + stub `analysisStubFromMaterialityFacts` (`:549`) depuis `contract.inputs.materialityFacts` |
| Rôle continuity | **Attester admissibilité courante pour projection** (Cas A/E) — pas Authorization |
| Contrôle définitif | Confirm + Authorize **re-check** (déjà) |
| Une règle métier | **Oui** — appeler `assertDecisionRefsAdmissibleForConfirm` ; **interdire** re-implémenter empty-refs |
| Mutations | **Interdites** sur read path |

Échecs → `ok:false` codes existants (`EXECUTION_CONTINUITY_INTEGRITY_FAILED` / materiality pass-through) — **pas** `kind:"active"` trompeur. `none` reste « aucun pré-exec courant ».

---

## F. Matrice invariants PREPARE / Continuity / Confirm / Authorize

| Invariant | PREPARE | Continuity (cible) | Confirm | Authorize |
| --- | --- | --- | --- | --- |
| Empty refs sans stamp | N/A build | REFUS | REFUS Case D | REFUS |
| Empty + NS + CURRENT | OK | **active null** | OK omit HD | OK |
| Empty + structural/unknown | block HD | REFUS | REFUS | REFUS |
| Stamp≠CURRENT | — | REFUS | REFUS | REFUS |
| HD-bound | refs=[id] | active id | OK | OK |
| PREPARE≠Attempt | forced | n/a | n/a | n/a |
| Inspection | n/a | expose state | required | required |
| Continuity ≠ Auth | — | **oui** | — | sole Auth |

---

## G. Parcours historiques

| Parcours | Actuel | Cible O1 | Changement | Non-régression |
| --- | --- | --- | --- | --- |
| W2 HD-bound | continuity active + decisionRef | inchangé | none | G0 ecRehydration |
| G-D4 non-structural | continuity FAIL | active + null | reader+types | NEW T1 |
| G-D4 structural | prepare blocks / confirm DECISION_REQUIRED | continuity REFUS si `[]` | reader reuse assert | T2 |
| ACGC | HD Artifact | hors DTO | **NONE** | — |
| F2/F3/M3 | HD-bound | inchangé | **NONE** | — |
| Mission HD channel | séparé | inchangé | **NONE** | — |
| Legacy Confirm Case A | non-empty no stamp | inchangé | **NONE** | rCi01 |
| Durable rehydration | G5 empty fail | G5 unstamped stay ; stamped NS pass | tests | T1/T4 |
| Post-execution | Attempt terminal filter | inchangé | **NONE** | postExecution* |
| Recovery docs_write | match decisionRef | null ≠ recoveryId → refuse (OK) | soft message | recovery tests |

**Ne pas élargir O1** à ACGC / Mission HD / F3.

---

## H. UI / inspection (impact)

| Surface | Origine statut | Badge | Carte Confirm | Boutons | Risque O1 |
| --- | --- | --- | --- | --- | --- |
| Conversation | `readCurrent` active | — | gated `kind===active` + confirmation_required | Inspect/Confirm si inspectionSufficient | **Débloqué** si reader admet Cas A |
| Execution | derive + readCurrent | ProjectWorkspace both | CTA via presentation | Confirm/Execute séparés | Alignement T10 requis |
| Trajectory | readCurrent | recovery uses decisionRef | own panel | recovery CTAs off si null | OK |

**I3 placeholder** (« Action prévue… », `pilotExecutionPresentation.ts:191-204`) : **hors Delivery O1 core** — rester en matrice dette P1 ; ne pas corriger dans le cycle continuity.

**Crash React :** V1 nullable — Product UI n’accède pas `.decisionRef` sans `??` → **pas de crash** attendu. V2 split `kind` → **crash logique** (cards jamais montrées) si oubli migration.

---

## I. Matrice tests T1–T16

| ID | Frontière | Existant | Action | Type |
| --- | --- | --- | --- | --- |
| T1 | G-D4 NS `[]` → continuity active null | gD4 prepare ; **pas** continuity | **CREATE** assert dans `ecRehydration*` ou `p6.o1.continuityGd4.d0.test.ts` | intégration |
| T2 | Structural `[]` refus | gD4 Q04 ; continuity | **CREATE** continuity assert | intégration |
| T3 | UNKNOWN `[]` refus | materiality | **CREATE** | intégration |
| T4 | sans stamp `[]` refus | **G5 STAY** | **NONE** (garder) | intégration |
| T5 | NS stamp + Product stale | confirm CURRENT mismatch | **CREATE** continuity read fail | intégration |
| T6 | HD-bound | G0 STAY | **NONE** | intégration |
| T7 | HD invalide | G5-like existing | **STAY**/étendre | intégration |
| T8 | superseded | existing rehydration | **STAY** | intégration |
| T9 | multi-contrats | AMBIGUOUS existing | **STAY** | intégration |
| T10 | Conversation ≡ Execution identité | partiel UI | **CREATE** (même contractId/version/status) | UI/intégration |
| T11 | inspection insuffisante | gD4 Q09 ; card gating | **STAY** + assert card | UI |
| T12 | inspection OK → confirm possible ≠ execute | gD4 Q15 ; ExecutionSurface | **STAY**/étendre | UI |
| T13 | FP/version change → reinspect | inspection binding | **STAY** | intégration |
| T14 | aucune HD inventée | gD4 humanDecisionCreated:false | **STAY** + continuity | intégration |
| T15 | aucun Attempt PREPARE | gD4 / der16 | **STAY** | intégration |
| T16 | read continuity 0 mutation | — | **CREATE** (spy repos write / count) | intégration |

**G5 :** assertion « empty → INTEGRITY » **reste** pour **unstamped**. Sous O1, **ne pas** généraliser G5 à stamped NS.

Faux positifs à éviter : fixture sans `MATERIALITY:NON_STRUCTURAL` ; mock `kind:active` sans passer le reader.

---

## J. Closed Delivery Impact Contract

### H — Fichiers Product à modifier (futur Delivery)

| Fichier | Pourquoi |
| --- | --- |
| `w2/readCurrentGovernedExecutionContinuity.ts` | ADAPT `verifyDecisionLineage` + appel revalidation CURRENT + return `decisionRef` nullable |
| `w2/types.ts` | `decisionRef: string \| null` sur `kind:"active"` |
| `w2/prepareDocsWriteRecoverySuccessor.ts` | Soft : branche explicite `decisionRef == null` (message clair) — **recommandé** |
| `w2/actions.ts` | Seulement si signature exportée documentée (souvent aucune) |

### I — Tests à adapter / créer

| Fichier | Action |
| --- | --- |
| `ecRehydrationContinuity.d0.test.ts` | **KEEP G5** ; **ADD** Cas A stamped NS → active + null |
| **NEW** `p6.o1.continuityGd4EmptyRefs.d0.test.ts` (nom indicatif) | T1–T5, T14–T16 |
| **NEW** ou étendre UI | T10–T12 (Conversation+Execution même identité) |
| UI mocks `decisionRef: "dec:…"` | **optionnel** — restent valides si nullable |

### J — Fichiers à conserver inchangés

- `confirmForAuthorization.ts`, `authorizeGenericPreparedContract.ts`, `authorizeExecutionContract.ts`
- `executionMateriality.ts`, `resolveAuthoritativeProductMateriality.ts` (reuse only)
- `prepareGenericExecutionContractDraft.ts` (G-D4 KEEP)
- `GovernedConfirmationCard.tsx`, `ConversationSurface.tsx`, `ExecutionSurface.tsx`, `ProjectWorkspacePage.tsx`, `useProductConversation.ts`, `pilotExecutionPresentation.ts`, `pilotContractPresentation.ts` (**sauf** si V2 kind-split — non recommandé)
- OA Attempt / Evidence / Gate D
- ACGC / F3 / Mission HD modules (hors scope)
- Doctrine / roadmap

### Hors Delivery O1 (dette trackée)

- I3 placeholder work items
- Dual-oracle UX Conversation vs Trajectory (D3 audit parent)
- Commit dirty M-HD (D2 parent)
- HQA Execute REAL

---

## K. Risques résiduels

| ID | Sévérité | Description |
| --- | --- | --- |
| R1 | P0 | Oublier CURRENT revalidation dans continuity → stamp-only bypass (Cas E) |
| R2 | P0 | Élargir G5 removal aux unstamped empty |
| R3 | P1 | Recovery `!==` null silencieux / message ambigu |
| R4 | P1 | derive projection vs readCurrent divergence (T10) |
| R5 | P1 | I3 placeholder masque mission (hors O1) |
| R6 | P2 | V2 kind-split coût UI si choisie par erreur |

---

## L. Dette / exit

| Dette | Exit |
| --- | --- |
| Incompatibilité G-D4 / W2 | Delivery V1 + T1–T16 verts |
| Dirty Product non commité | D6 parent — hors O1 |
| HQA contrat bloqué continuity | Re-proof HQA **après** Delivery, sans Execute auto |

---

## M. Décisions Morris restantes

| ID | Décision | Pourquoi encore ouverte |
| --- | --- | --- |
| **D-DTO** | Valider **V1 nullable** (reco) vs V3 `hasDecision` vs V2 split kind | Impact qualifié ; GO O1 n’a pas figé la migration |
| **D-READ** | Confirmer que continuity **doit** appeler CURRENT revalidation à chaque read (reco: oui pour Cas E) | Perf vs sécurité |
| **D-DELIVERY** | Valider périmètre fichiers §J (reader+types+soft recovery+tests) | GO Delivery non consommé |
| **D-HQA** | Reprise projet HQA existant vs virgin après Delivery | Données actuelles = témoin Cas A |
| **D-I3** | Placeholder work items dans Delivery O1 ou cycle UI séparé | Reco: séparé |

---

## N. Recommandation de périmètre Delivery fermé

**IN :**

1. ADAPT `verifyDecisionLineage` / `readCurrent…` avec reuse materiality gates
2. DTO V1 `decisionRef: string | null`
3. Soft recovery null branch
4. Tests T1–T16 (G5 preserved for unstamped)
5. Preuve déterministe : prepare G-D4 → continuity active → Conversation card visible → Confirm path (zéro Attempt)

**OUT :**

- UI redesign / Figma parity
- I3 placeholder
- Mission HD / ACGC / F3 changes
- REAL Execute / HQA PASS claim
- Nouveau moteur

**Source → consommateur → invariant → test → exit** pour chaque item IN est documenté ci-dessus.

---

## O. Conditions de reprise HQA

1. Delivery O1 mergé/local validé déterministe
2. Morris D-DELIVERY + D-DTO
3. Relecture continuity sur projet HQA existant (RO puis parcours Inspect→Confirm **sans** Execute jusqu’à GO)
4. Vérifier même `executionContractId` Conversation/Exécution
5. Pas de reset DB sauf D-HQA contraire

---

## Preuves positives

- Confirm omet déjà HD pour empty G-D4 (`confirmForAuthorization.ts:322-323`)
- `revalidateMaterialityAgainstCurrentProduct` déjà RO-capable et partagé Confirm/Auth
- Product UI Confirmation **indépendante** de `.decisionRef`
- HQA Cas A exact observé en SQLite RO

## Preuves négatives

- `verifyDecisionLineage` `:138-143` refuse empty
- DTO `:295` `decisionRef: string`
- G5 encode refus empty (à préserver pour unstamped)

## Réserves

- Pas d’exécution des tests ce cycle (READ-ONLY ; dirty préservé)
- Pas de capture browser
- V1 recommandée ≠ D-DTO consommé
- CKC non baseline

## Confirmation

- Zéro modification Product
- HQA non mutée
- Dirty Product FP inchangé `ae0f68e6…`

**Verdict :** OPTION 1 IMPACT CLOSURE COMPLETE — READY FOR CHATGPT REVIEW

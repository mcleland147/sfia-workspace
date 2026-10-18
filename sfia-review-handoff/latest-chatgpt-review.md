# SFIA STUDIO — P6 HUMAN QA
## OPTION B — GENERIC PREPARE CURRENTNESS DIAGNOSTIC
### Review Pack FULL — CRITICAL

**Horodatage (UTC):** 2026-10-18T17:05:00Z

---

## 1. GO Morris

- GO: Diagnostic READ-ONLY autorisé
- Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Chantier: P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY
- Étape: Generic Execution — Currentness Diagnostic
- Cycle SFIA: 9 — QA / validation
- Profil: CRITICAL
- Typologie: INC / QA — CONTINUATION
- Capacité: V3-F05 (connexes F07 / F11 / F12 / F14)
- Aucune modification Product
- Aucun Cursor REAL Execute
- Aucun push/PR/merge Product
- Runtime :3020 non arrêté / non redémarré

---

## 2. Git Truth

| Champ | Valeur |
|---|---|
| Repository | mcleland147/sfia-workspace |
| Remote | https://github.com/mcleland147/sfia-workspace.git |
| Worktree | /Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8 |
| Branche | delivery/sfia-studio-p6-integrated-architecture-recovery |
| HEAD | 304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8 |
| origin/main | 304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8 |
| Staged | aucun |
| Candidate Option B | non commitée (préservée; non touchée) |

Status court: `orchestrateF2.ts` modifié + coordinators/tests Option B untracked + ce Review Pack.

Handoff de référence runtime: `2a3bb8a1162a9402c832937f7a8527bd8178317e`.

STOP Git: non déclenché.

---

## 3. Sources

PROCESSUS / CONVERGENCE / PRODUCT COMPLETION / P6 / ARCHITECTURE / PRODUCTION RUNTIME REFERENCE (02–08) / doctrine v3 applicable / code CURRENT:

- `w2/resolveAuthoritativeProductMateriality.ts` (`revalidateMaterialityAgainstCurrentProduct`, `parseStampedProductCurrentness`)
- `w2/readCurrentGovernedExecutionContinuity.ts`
- `w2/prepareGenericExecutionContractDraft.ts`
- `w2/confirmForAuthorization.ts` / `authorizeGenericPreparedContract.ts` / `authorizeExecutionContract.ts`
- `w2/deriveGovernedExecutionContinuityProjection.ts`
- UI: `pilotExecutionPresentation.ts`, `ExecutionSurface.tsx`

Snapshots documentaires requalifiés contre code CURRENT — preuve supérieure = OA SQLite RO + code.

---

## 4. Convergence Pre-check

| Item | État |
|---|---|
| Capacité | V3-F05 |
| Milestone | P6 |
| HQA | Nora LIVE en cours; Cadrage ACTIVE; Generic PREPARE atteint; confirmation BLOCKED |
| Gap | EC freshly prepared affiché MATERIALITY_CURRENTNESS_STALE |
| Exit proof étape | Champ divergent + chronologie + options qualifiées |
| Dette | TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT OPEN — distincte du currentness |
| P6 GLOBAL / v3 | NON ACQUIS / NON ADOPTED |

---

## 5. Campagne HQA (préservée, lecture seule)

| Item | Valeur |
|---|---|
| Runtime | http://localhost:3020 — PID **8146** (non arrêté) |
| Profil | Nora LIVE · CURSOR_REAL=1 · DET=0 |
| Campagne | p6-optionb-fresh-hqa-20261018T153758Z |
| Project | AtelierNova |
| ProjectId | `prj:b6a33e10-f2af-4ded-86d8-5686620e8ca0` — **confirmé** |
| Product DB ABS | `…/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/product/oa-product.sqlite` |
| Nora DB ABS | `…/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/nora/nora-session.sqlite` |
| Accès SQLite | URI `file:…?mode=ro` (read-only) — aucune écriture |

Cycle: `cyc:trj-1115d01ae5ac0caccc2ea681` — type `cyc:framing` — status **active**.

---

## 6. ExecutionContract identifié (OA durable)

Un seul EC Project — persistance OA **prouvée** (pas une projection orpheline).

| Champ | Valeur |
|---|---|
| executionContractId | `xct:gen-prep:014a9689b6897d85f0ac4326` |
| projectId | `prj:b6a33e10-f2af-4ded-86d8-5686620e8ca0` |
| cycleInstanceId | `cyc:trj-1115d01ae5ac0caccc2ea681` |
| version | 2 |
| status (OA) | `confirmation_required` |
| createdAt / updatedAt | 2026-10-18T16:48:30.062Z |
| decisionRefs | `[]` (G-D4 empty-refs / PREPARE without systematic HD) |
| requiredAuthority | N2 |
| confirmationRef | vide |
| materiality | `MATERIALITY:NON_STRUCTURAL` (+ PRODUCT_GOVERNED, NO_ATTEMPT_AT_PREPARE, …) |
| boundedNonMutatingAnalysis | true |
| repositoryMutationDeclared | none |
| intentKind | read_only |
| objective | Inspecter le dépôt AtelierNova… (mission lecture seule V1) |
| Attempts | 0 |

Aucun autre EC concurrent. Sujet CURRENT non ambigu (1 EC).

---

## 7. Matrice currentness STAMP vs CURRENT

Code de référence — `revalidateMaterialityAgainstCurrentProduct` refuse `MATERIALITY_CURRENTNESS_STALE` si l’un de:

`lpsVersion` · `doctrineDigest` · `activeCycleInstanceId` · `projectId`

diverge. RepositoryBinding (identity/pathRoot) a des codes distincts (`REPOSITORY_BINDING_STALE` / `UNAVAILABLE`) et n’est évalué **qu’après** le match LPS/doctrine/cycle/project.

### STAMPED (EC inputs.materialityFacts.productCurrentness)

| Field | Value | Source | Timestamp |
|---|---|---|---|
| projectId | prj:b6a33e10-… | stamp | assessedAt 2026-10-18T16:48:30.013Z |
| lpsId | lps:ea6f3caab6bce042 | stamp | (LPS v6 created 16:41:36.566Z) |
| lpsVersion | **6** | stamp | assessedAt 16:48:30.013Z |
| doctrineDigest | sha256:4c8a85cf684331720c34a01f9e1dfe3a91305dd1e6f52306c50fc59bd3355608 | stamp | — |
| activeCycleInstanceId | cyc:trj-1115d01ae5ac0caccc2ea681 | stamp | — |
| repositoryIdentity | mcleland147/sfia-workspace | stamp | — |
| pathRoot | projects/ateliernova | stamp | — |
| assessedAtIso | 2026-10-18T16:48:30.013Z | stamp witness | NOT compared as equality field |

### CURRENT Product (oa_lps_current + project binding)

| Field | Value | Source | Timestamp |
|---|---|---|---|
| projectId | prj:b6a33e10-… | oa_projects / LPS | — |
| lpsId | lps:c9b9f2aa00e862a9 | oa_lps_current | created 2026-10-18T16:48:49.655Z |
| lpsVersion | **7** | oa_lps.version | 16:48:49.655Z |
| doctrineDigest | sha256:4c8a85cf684331720c34a01f9e1dfe3a91305dd1e6f52306c50fc59bd3355608 | LPS doctrinePackageRef | MATCH |
| activeCycleInstanceId | cyc:trj-1115d01ae5ac0caccc2ea681 | LPS | MATCH |
| repositoryIdentity | mcleland147/sfia-workspace | **project.repositoryBinding** (pas LPS payload) | MATCH si évalué |
| pathRoot | projects/ateliernova | project.repositoryBinding | MATCH si évalué |

### Comparaison

| FIELD | STAMPED | CURRENT | RESULT | CAUSE CANDIDATE |
|---|---|---|---|---|
| projectId | prj:b6a33e10-… | prj:b6a33e10-… | MATCH | — |
| lpsVersion | 6 | 7 | **MISMATCH** | LPS bump post-PREPARE |
| lpsId | lps:ea6f3… | lps:c9b9f2… | MISMATCH (companion) | même bump |
| doctrineDigest | sha256:4c8a85… | sha256:4c8a85… | MATCH | — |
| activeCycleInstanceId | cyc:trj-1115… | cyc:trj-1115… | MATCH | — |
| repositoryIdentity | mcleland147/sfia-workspace | mcleland147/sfia-workspace | MATCH (non atteint) | N/A pour STALE |
| pathRoot | projects/ateliernova | projects/ateliernova | MATCH (non atteint) | N/A pour STALE |

**Champ exact responsable de MATERIALITY_CURRENTNESS_STALE: `lpsVersion` (6 → 7).**

---

## 8. Chronologie (OA + Nora — preuves)

Logical product turn: `ltu:836e55fbfe4bb91923b28c8784b1188d` (accepted 2026-10-18T16:48:15.057Z, cycle actif).

| T | Event | Evidence |
|---|---|---|
| 16:48:15 | Turn Nora accepté | nora logical_product_turns |
| 16:48:30.013 | Materiality stamp LPS **v6** | EC productCurrentness.assessedAtIso |
| 16:48:30.062 | `oa.execution_contract.built` | audit + EC created_at |
| 16:48:30.065 | `oa.execution_contract.confirmation_required` | audit |
| 16:48:49.654 | `oa.epistemic.updated` (itemCount=6, cor=ltu:836e…) | audit |
| 16:48:49.655 | LPS **v7** créé; 2 epistemic ACW ajoutés | oa_lps + oa_epistemic_items |
| 16:48:49.658 | Transcript user+assistant finalisé | pilot_transcript_turns seq 6–7 |

Diff LPS v6→v7 (hors ids/version/status): **epistemicItemIds** étendus (+ Observation + Hypothesis orientation V1 surinscriptions). Objective/cycle/doctrine inchangés.

Assistant seq 7 confirme: mission Cursor lecture seule préparée, attend confirmation — cohérent avec EC, puis orientation epistemic écrite dans le même tour.

**Conclusion chronologique PROVEN:** PREPARE capture currentness LPS v6; ~19.6s plus tard, dans le **même** logical turn, une écriture epistemic ACW produit LPS v7 → revalidation CURRENT échoue.

---

## 9. Hypothèses

| H | Verdict | Preuves |
|---|---|---|
| H1 — Changement Product légitime après PREPARE | **PROVEN** (composante) | LPS v7 + epistemic ACW après EC built; gate correcte |
| H2 — Snapshot/PREPARE avant mutation même tour | **PROVEN** (cause opératoire) | Même `ltu:836e55…`; stamp 16:48:30 → epistemic/LPS 16:48:49 |
| H3 — Mauvais Project/Cycle | **NOT APPLICABLE** | projectId + activeCycle MATCH |
| H4 — Décalage RepositoryBinding | **NOT APPLICABLE** pour ce code STALE | identity/pathRoot MATCH; codes repo non atteints |
| H5 — Contrat ancien/ambigu | **NOT APPLICABLE** | 1 EC CURRENT, créé 16:48:30, unique |
| H6 — Projection UI trompeuse | **PROVEN** (symptôme) | Statut OA `confirmation_required` → label « À confirmer » alors que preContinuity fail STALE bloque CTA |
| H7 — Autre | N/A | Champ exact = lpsVersion |

---

## 10. Frontières code (points exacts)

| Étape | Lieu |
|---|---|
| Préparation / stamp | `prepareGenericExecutionContractDraft.ts` — `resolveAuthoritativeProductMateriality` puis `materialityFacts` / `productCurrentness` dans inputs EC |
| Persistance | OA `buildExecutionContract` → status `confirmation_required` |
| Revalidation | `readCurrentGovernedExecutionContinuity.ts` → `revalidateMaterialityAgainstCurrentProduct` (aussi Confirm/Authorize) |
| Blocage | `resolveAuthoritativeProductMateriality.ts` L595–610 — compare lpsVersion/doctrine/cycle/project |
| Projection UI | `pilotExecutionPresentation.ts` L614–630 — status « À confirmer » depuis EC status; attentionNote porte le code STALE |

Pas de seconde logique de matérialité inventée. Gate d’autorité **fonctionne comme conçu**; le défaut est l’**ordre** des mutations Product dans le tour Nora.

---

## 11. RepositoryBinding (séparé)

| Item | Valeur |
|---|---|
| Identity Product | mcleland147/sfia-workspace |
| pathRoot | projects/ateliernova |
| Dépôt Git propre AtelierNova | **inexistant** — binding workspace + pathRoot |
| Mission « dépôt AtelierNova » | langage produit = pathRoot sous sfia-workspace |
| Contribution au STALE | **aucune** (MATCH; non causal) |

Gap de compréhension possible pour le Pilote (nom vs identité Git) — à traiter séparément, ne pas masquer par un contournement currentness.

---

## 12. Cohérence UI / Authority

- OA status: `confirmation_required` → UI primary « À confirmer » (**PREPARED / confirmable-looking**)
- Continuity: fail `MATERIALITY_CURRENTNESS_STALE` → CTA none + message refus (**NOT CONFIRMABLE**)
- Distinction attendue: PREPARED ≠ CONFIRMABLE ≠ AUTHORIZED ≠ EXECUTABLE
- Incohérence de présentation: **PROVEN** — le label principal ne reflète pas l’admissibilité CURRENT

Aucune modification UI dans ce diagnostic.

---

## 13. Options de traitement (non implémentées)

### OPTION A — Staleness légitime (opérationnelle)

Après toute mutation LPS post-PREPARE, le contrat est périmé: requalifier + **nouvelle** préparation gouvernée. Ne pas confirmer/autoriser le contrat STALE.

- Cause traitée: état durable actuel
- Risque: faible sur autorités; charge Pilote
- Compatible D-ER / currentness gate

### OPTION B — Ordre des opérations (corrective Product — recommandée)

Dans le tour Nora qui combine orientation cognitive (epistemic/LPS) + Generic PREPARE:

1. Appliquer d’abord les écritures Product durables du tour (epistemic / LPS), **puis**
2. Capturer materiality / PREPARE sur l’état CURRENT final; **ou**
3. Si PREPARE a déjà eu lieu et LPS bump ensuite: invalider l’admissibilité / forcer re-PREPARE — sans affaiblir la compare currentness.

- Cause traitée: H2 (séquence)
- Périmètre: orchestration F2 / Nora product turn / prepare path — borné
- Impact: contracts freshly prepared restent confirmables si Product inchangé après stamp
- Risque: régression si on « ignore » LPS bump — **interdit**; corriger l’ordre seulement
- D-ER: préserver fail-closed currentness
- Tests: même tour epistemic-then-prepare; prepare-then-epistemic must not leave confirmable STALE silently
- Gates Morris: GO Delivery correctif distinct requis avant code

### OPTION C — Projection UI

Quand preContinuity fail STALE, ne pas afficher « À confirmer » comme statut principal; afficher indisponible / à requalifier. Complément UX, pas root fix.

### OPTION D — RepositoryBinding

N/A pour ce STALE. Traiter séparément si gap « dépôt AtelierNova » vs workspace.

---

## 14. Recommandation argumentée

**OPTION B (primaire)** + **OPTION A (conduite HQA immédiate)** + **OPTION C (secondaire UX)**.

Justification: le champ `lpsVersion` diverge pour une raison Product réelle (epistemic ACW) **après** PREPARE dans le même logical turn. La gate est correcte; la séquence rend le contrat immédiatement inutilisable. Ne pas relaxer currentness. Ne pas confirmer le contrat existant. Pour le replay Morris immédiat sans correctif: nouvelle mission PREPARE après stabilisation LPS (OPTION A).

---

## 15. Dépendances / risques / dette

| Item | Note |
|---|---|
| Dépendances | Nora product turn ordering · prepareGeneric · materiality · LPS epistemic writers · Execution UI |
| Risque régression | Contourner STALE = autorité pré-exécution cassée — STOP |
| Dette OPEN | TOOL-FIRST-REAL-NOWRITE — **distincte**; ne pas confondre |
| Exit dette currentness | Correctif séquence + tests + replay HQA confirmable sans STALE artificiel |

---

## 16. Fake / Real

| Frontière | Mode |
|---|---|
| Product OA / SQLite | REAL RO inspection |
| Nora LIVE | historique existant seulement — aucun nouveau tour |
| Cursor REAL | ON config; **0 Attempt**; aucun Execute |
| Fake | aucun |

Claims interdits respectés: currentness non corrigée; confirmation non débloquée; Cursor REAL PASS non claimé; P6 GLOBAL / v3 non claimés.

---

## 17. Gates

- Runtime intact (PID 8146)
- DB non mutées par ce diagnostic (lectures `mode=ro`)
- Candidate Option B préservée
- Aucun secret exposé
- Aucune implémentation

---

## 18. Verdict

**P6 GENERIC PREPARE CURRENTNESS — ROOT CAUSE PROVEN — CORRECTION PROPOSED — MORRIS REVIEW REQUIRED.**

Champ exact: **`productCurrentness.lpsVersion`** stamped **6** vs CURRENT **7**, suite à `oa.epistemic.updated` post-PREPARE dans `ltu:836e55fbfe4bb91923b28c8784b1188d`.

### Instruction ChatGPT

Lire ce handoff. Vérifier le champ `lpsVersion`, la chronologie EC 16:48:30 → LPS 16:48:49, la causalité H1+H2, et les options A/B/C. Ne pas générer de correction Product avant qualification Morris du diagnostic.

## FIN REVIEW PACK FULL — CURRENTNESS DIAGNOSTIC

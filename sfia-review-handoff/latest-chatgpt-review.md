# Review Pack FULL — MATERIALITY-BLOCK-01 correction pass

| Field | Value |
| --- | --- |
| **Horodatage** | 2026-10-17 10:40:32 CEST |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | Critical |
| **Typologie** | EVOL / CORRECTION PRODUCT / QA REGRESSION |
| **Campagne** | P6-HQA-FRESH-01 / incident MATERIALITY-BLOCK-01 |
| **Branche Product** | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| **HEAD** | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| **origin/main** | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| **Diagnostic source** | handoff `99e9b885` / blob `f104c6a8` |
| **Mode preuve** | DETERMINISTIC LOCAL CORRECTION PROOF |
| **Verdict Cursor** | **CORRECTION IMPLEMENTED — DETERMINISTIC PASS — READY FOR CHATGPT REVIEW** |

---

## 1. Local Git Truth Check

### Initial (2026-10-17 10:37:41 CEST)
| Check | Result |
| --- | --- |
| toplevel | worktree docs-generic-execution… |
| branch | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD / remote tip | `b4c1d862` match |
| origin/main | `896ff59c` match |
| staged | empty |
| Product dirty FP (excl. `.tmp`) | `dd0efebc937b3e30d60596565a0c20f0605d479c57a92e6e3f34f5b858d90527` |
| Pre-existing dirty | M-HD-01/02 UI/w2/tests + related (preserved) |

### Final
| Check | Result |
| --- | --- |
| HEAD / branch | unchanged `b4c1d862` / same branch |
| staged | empty |
| Product dirty FP | `ae0f68e69d3733c7f7e76c62bee9a2c6c2063248a26081af76b3ca272bf58a4a` (delta = this correction only + prior dirty) |
| HQA SQLite mtime | unchanged (`oa-product.sqlite` Oct 17 09:54, size 917504) |
| Push/PR Product | none |

---

## 2. Sources consultées

- Diagnostic handoff `99e9b885:sfia-review-handoff/latest-chatgpt-review.md`
- Gouvernance P6 / V3-F05 (roadmap, pack 37, framing 30/32/34/35)
- `artifactTargetRouting.ts`, `enrichExecutionIntentFromBinding` (`activeCycleGovernedContinuation.ts`)
- `prepareGenericExecutionContractDraft.ts`, `resolveAuthoritativeProductMateriality.ts`
- `productExecutionAgentsTools.ts` / `orchestrateTurn` solicit path
- Tests: `p6.hqa.f05…`, `productWorkspaceArtifactRouting…`, `p6.der16…`

---

## 3. Cause racine (rappel prouvé)

Mission documentaire pathless → `executionIntent=null` → `collectConcreteMissionPaths=[]` → `productContextSufficient=false` → `MATERIALITY_UNKNOWN` avant BuildExecutionContract, malgré `repositoryBinding` + cycle Cadrage actifs.

---

## 4. Correction appliquée

### Stratégie
Point de raccordement unique dans **Generic PREPARE** (avant materiality), partagé par:
- Nora tool `request_generic_execution_prepare` / `solicitGenericExecutionPrepare`
- accept-GO F2 (`analysisFromPendingGenericPrepareOffer` → `prepareGenericExecutionContractDraft`)

Réutilise **KEEP**:
- `repositoryBinding` Product
- `composeCycleWorkspaceRoot` / `resolveArtifactTargetUnderCycleWorkspace` (via `enrichExecutionIntentFromBinding`)
- materiality fail-closed
- capability envelope

### Fichiers créés
1. `projects/sfia-studio/app/features/project-assistant/w2/resolveGenericPrepareDocumentaryTarget.ts` (nouveau)
2. `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts` (nouveau)

### Fichiers modifiés (ce cycle)
1. `projects/sfia-studio/app/lib/oa/project/domain/artifactTargetRouting.ts` — ajout `resolveNonAuthoritativeDocumentaryArtifactLeafCandidate`
2. `projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts` — appel bind documentaire + stamp EC

### Contenu exploitable — leaf convention (ajout domain)

```typescript
export function resolveNonAuthoritativeDocumentaryArtifactLeafCandidate(input: {
  readonly textFields: readonly (string | null | undefined)[];
  readonly cycleTypeId?: string | null;
}): string | null {
  // … normalize accents …
  const framingCycle = input.cycleTypeId?.trim() === "cyc:framing";
  if (
    (framingCycle || /\bcadrage\b/.test(hay)) &&
    /\b(note|document|livrable)\b/.test(hay) &&
    /\bcadrage\b/.test(hay)
  ) {
    return "note-de-cadrage.md";
  }
  // specification-fonctionnelle / cahier-des-charges / specification / livrable-de-reference
  // else null → clarification (no invented filename)
}
```

### Contenu exploitable — bind Generic PREPARE (nouveau module, résumé)

`resolveGenericPrepareDocumentaryTarget`:
1. `not_documentary` si mission non documentaire (code-like non requalifié)
2. `already_concrete` si `collectConcreteMissionPaths` non vide — **ne** promeut **pas** un target Nora en autorité
3. sinon: exige binding identity+pathRoot; exige cycle actif cohérent
4. leaf = extract safe leaf Nora **ou** convention wording
5. `enrichExecutionIntentFromBinding` → target sous `pathRoot/<repositoryWorkspaceSegment>/`
6. `resolved` | `needs_clarification` | `blocked` (fail-closed, pas de salvage basename)

### Contenu exploitable — raccord PREPARE

Dans `prepareGenericExecutionContractDraft`, après readiness:

```typescript
const documentaryBind = await resolveGenericPrepareDocumentaryTarget({…});
if (documentaryBind.kind === "needs_clarification" || documentaryBind.kind === "blocked") {
  return { ok: false, code: documentaryBind.code, message: documentaryBind.message };
}
const analysis = documentaryBind.analysis;
// … materiality on enriched analysis …
// EC inputs:
//   documentaryTargetResolution: "resolved_product" | …
//   resolvedAuthoritativeTargetPath: <server path or null>
//   proposedTargetPathAuthoritative: false
//   proposed* from inbound Nora analysis only
```

---

## 5. Destination Product résolue (test A)

Fixture: `pathRoot=projects/mb01-a`, cycle `cyc:framing` actif.

Mission pathless (miroir HQA): « Réaliser un document de cadrage… chemin précis à déterminer… »

**Destination Product:** `projects/mb01-a/01-cadrage/note-de-cadrage.md`
**scopeIn:** `[projects/mb01-a/01-cadrage]`
**documentaryTargetResolution:** `resolved_product`
**ExecutionContract inspectable:** oui
**HumanDecision artificielle:** non
**ExecutionAttempt:** 0
**Cursor REAL:** non lancé

---

## 6. Tests exécutés

| Suite | Résultat |
| --- | --- |
| `p6.hqa.materialityBlock01.documentaryPrepare.d0.test.ts` (7) | **PASS** |
| `p6.hqa.f05.gd4.optionalArtifactRouting.d0.test.ts` (7) | **PASS** |
| `projectWorkspaceArtifactRouting.d0.test.ts` (26) | **PASS** |
| `p6.der16…` E9/E10 subset | **PASS** |
| `p6.der16…` full | 25 PASS / **2 FAIL préexistants dirty** (voir réserves) |

Cas couverts par MB01:
- A nominal pathless framing → EC
- B offer → accept-GO même target
- C cycle manquant / incohérent / projet absent
- C traversal `../secret.md` refuse sans salvage
- C non-doc code-like non forcé docs_write
- C leaf ambigu → DOCUMENTARY_TARGET_FILENAME_REQUIRED

---

## 7. Réserves / dette

1. **der16 E12 F2 structural** attend `offer=null` ; le worktree dirty M-HD-02 rappelle une offre sur `structuralBlocked` (`orchestrateF2`). **Préexistant**, hors delta materiality bind.
2. **der16 R5** attend `decisionRefs: []` littéral unique ; dirty M-HD-01 utilise `decisionRefs: [...verifiedDecisionRefs]`. **Préexistant**.
3. CREATE/UPDATE existence (CR-PWR-02) non rejoué dans Generic PREPARE de ce pass — authorize/execute gates inchangés; dette exit: éventuel assert write-mode au PREPARE sous GO séparé.
4. Leaf cues hors cadrage (specification.md, …) restent heuristics étroites — clarification si ambigu.
5. HQA-FRESH-01 runtime **non rejoué** (hors scope GO).

---

## 8. Conditions de reprise HQA-FRESH-01

Après revue ChatGPT + GO Morris:
- Même projet « Organisation des bénévoles », C1 actif, binding inchangé
- Relancer préparation documentaire pathless (ou accept-GO)
- Attendu: EC inspectable avec `…/01-cadrage/note-de-cadrage.md`, Attempt=0
- Inspection Pilote puis authorize séparé; Execute REAL seulement sous GO distinct

---

## 9. Décisions Morris requises

1. Accepter correction déterministe et autoriser reprise HQA-FRESH-01
2. Traiter séparément les fails der16 E12/R5 liés au dirty M-HD (hors ce GO)
3. Aucun commit/push/PR Product autorisé par ce cycle

**Instruction ChatGPT:** relire `sfia-review-handoff/latest-chatgpt-review.md` depuis le commit distant vérifié avant verdict.

---

## 10. Verdict

**CORRECTION IMPLEMENTED — DETERMINISTIC PASS — READY FOR CHATGPT REVIEW**

État HQA-FRESH-01 préservé: **oui**
Aucun Execute / Cursor REAL / mutation QA.

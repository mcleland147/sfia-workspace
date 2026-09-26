# STUDYFLOW RECOVERY BINDING PREFLIGHT — READ-ONLY
## Cycle 9 — QA / validation
## LIGHT Review Pack — Cursor → ChatGPT

Generated: 2026-09-26T10:32:00Z
Operation: STUDYFLOW RECOVERY BINDING PREFLIGHT — READ-ONLY
Campaign: STUDYFLOW NATURAL POST-#523 REPROOF
Cycle: 9 — QA / validation
Profile: CRITICAL
Morris GO consumed: **READ-ONLY STUDYFLOW RECOVERY BINDING PREFLIGHT**

Studio clicks / HumanDecision / PREPARE / Execute / REAL / Product mutation / managed clone sync / code change: **NONE**

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Local | detached HEAD @ `7c184b9444d0b3f2dadc62e7ae9e9178e2c5c17d` |
| origin/main | `7c184b9444d0b3f2dadc62e7ae9e9178e2c5c17d` |
| Main moved | NO |
| Dirty | `.tmp-sfia-review/**` only (expected) |

---

## 2. PRODUCT DB

| Field | Value |
|-------|-------|
| Source | `SFIA_STUDIO_PRODUCT_DB_PATH` (.env.local) |
| Path class | campaign Product SQLite under `.sfia-exec/new-project-campaign-01/product/` |
| Project | `prj:34e7351c-770c-474a-8edc-9c82a07be41d` (StudyFlow) |

Secrets not printed.

---

## 3. READ-ONLY GUARANTEE

Open: `sqlite3 file:<db>?mode=ro`
Then: `PRAGMA query_only=ON`

| Check | Result |
|-------|--------|
| PRAGMA query_only | `1` |
| PRAGMA integrity_check | `ok` |

Did **not** call `openProductSqlite` / RuntimeOaStack (migrations write-capable).

Invocation mode for RecoveryExecutionBinding:
**STATIC+DB RESOLVER EQUIVALENCE**
(not DIRECT RUNTIME INVOCATION)

---

## 4. PRE-STATE

| Fact | Value |
|------|-------|
| LPS | `lps:bca43c2f67dec2c9` · version **36** · active |
| Active cycle | `cyc:trj-2ee956d99383359aadd408d1` · framing · **active** |
| Also present | `cyc:f2-539d66d7d03aaff6` · acknowledged |
| Trajectory | `trj:lr-bridge-039d11e6fe6b` · version **3** · status validated · occ `…@3` |
| HD count | **6** |
| EC count (project) | **2** |
| Attempt count (project) | **1** |

---

## 5. EXECUTIONCONTRACT CURRENT TRUTH

| Field | Value |
|-------|-------|
| executionContractId | `xct:m3-res:dec:w2-prop:0d65e1cd-b259-4222-860b-a783a01bf4c0` |
| version | **3** |
| **status** | **`confirmed`** |
| projectId | `prj:34e7351c-770c-474a-8edc-9c82a07be41d` |
| cycleInstanceId | `cyc:trj-2ee956d99383359aadd408d1` |
| action | `cursor.docs_write.apply` |
| target | `workspace.isolated.docs_write` |
| scope | `studio.gcec.docs_write` |
| requiredCapabilities | `["cap:cursor.docs_write"]` |
| inputs.targetPath | `projects/studyflow/01-cadrage/note-de-cadrage.md` |
| semanticFingerprint | `bd43c1aa1b3b4a51b6fd0a10a2cd682fde18c1834d9f7efc05a1e01b9f2b1bb6` |

Sibling EC `xct:m3:dec:w2-prop:0d65e1cd-…` status=`superseded` (not the Attempt source).

Attempt status is **failed** — must NOT be substituted for EC status.
Historical Phase B `confirmed` remains the **current** durable EC status.

---

## 6. POST-EVIDENCE RECOVERY CONTEXT

RECOVERY_CONTEXT = **PRESENT** (STATIC+DB equivalence of `resolvePostEvidenceRecoveryContext`)

| Field | Value |
|-------|-------|
| attemptId | `xat:w3a:0a9d88215cf8f884` |
| attemptStatus | `failed` |
| executionContractId | `xct:m3-res:dec:w2-prop:0d65e1cd-b259-4222-860b-a783a01bf4c0` |
| evidenceId | `ev:w3b:7b9022c9c4221122` |
| reviewBundleId | `rb:w3b:7b9022c9c4221122` |
| productOutcome | `FAIL` |
| recommendationKind | `recover` |
| stopReason | `REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing` |
| W3C epistemic | `epi:w3c-rec:8b8aa750bdc51ff8` active · source `w3c-post-evidence:ev:w3b:7b9022c9c4221122` |
| Evidence bindings | attempt/EC/project match |
| RB evidenceRefs | includes Evidence id |

---

## 7. RECOVERY EXECUTION BINDING

| Field | Value |
|-------|-------|
| invocation mode | **STATIC+DB EQUIVALENCE** |
| ok | **true** (resolver returns ok with null binding) |
| binding | **NULL** |

Exact failing condition in `resolveRecoveryExecutionBinding.ts`:

```
if (contract.status !== "failed") {
  return { ok: true, binding: null };
}
```

Observed: `contract.status === "confirmed"` ⇒ binding null.

All prior conditions that WOULD pass if status were failed:

| Condition | Result |
|-----------|--------|
| PostEvidenceRecoveryContext present | PASS |
| executionContractServices load EC | PASS (row exists) |
| contract.projectId matches | PASS |
| contract.executionContractId matches recovery | PASS |
| **contract.status === "failed"** | **FAIL (confirmed)** |
| isBoundedDocsWriteContract | PASS (action/target/capability) |
| inputs.targetPath non-empty | PASS |

PASS criteria for SAFE click (all required) — **NOT MET** because binding NULL / sourceStatus would not be `failed`.

---

## 8. UI IMPLICATION

`TrajectorySurface` GOVERNED_OPTION_REF after HumanDecision:

1. `w2ReadRecoveryExecutionBindingAction`
2. if binding.kind === `post_evidence_recovery_execution` → setRecoveryBinding · **return** (no PREPARE)
3. else → **`w2PrepareExecutionContractAction`** fallback

With binding NULL: **AUTO-PREPARE FALLBACK RISK PRESENT**

---

## 9. POST-STATE IMMUTABILITY

| Fact | PRE | POST |
|------|-----|------|
| LPS version | 36 / `lps:bca43c2f67dec2c9` | identical |
| HD count | 6 | 6 |
| EC count | 2 | 2 |
| EC version/status | 3 / confirmed | 3 / confirmed |
| Attempt count | 1 | 1 |
| Trajectory | trj…@3 | identical |

**IMMUTABLE — no Product mutation detected**

---

## 10. CLICK SAFETY VERDICT

HumanDecision Click Safety: **BLOCKED**

Auto-PREPARE Fallback Risk: **PRESENT**

Final: **STUDYFLOW HD CLICK PREFLIGHT — BLOCKED / RECOVERY BINDING ABSENT**

Do not click GOVERNED option until a separate authorized lot addresses EC recovery-owned status (this lot forbids EC repair / PREPARE / status mutation).

---

## 11. RESERVES

- Managed clone freshness separate
- OpenAI LIVE / StudyFlow E2E / Cursor REAL / docs_write REAL not claimed
- EC remains `confirmed` while Attempt is `failed` — Product continuity gap for R8 binding
- Visual / natural reproof still pending after a safe recovery-owned path exists

---

## 12. ANTI-CLAIMS

Not claimed: SAFE click · recovery-owned path · no-auto-PREPARE · PREPARE authorized · Execute · REAL · EC status repaired · HumanDecision created · StudyFlow E2E proven · runtime v3 ADOPTED

---

## 13. FINAL VERDICT

**STUDYFLOW HD CLICK PREFLIGHT — BLOCKED / RECOVERY BINDING ABSENT**

**AUTO-PREPARE FALLBACK RISK PRESENT**

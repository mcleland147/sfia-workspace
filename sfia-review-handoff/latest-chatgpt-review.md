# Review Pack FULL — P6-HQA-02 / REC-01 — HQA-06 Controlled Restart & Rehydration

**Horodatage :** 2026-10-11T05:59:44Z
**GO Morris :** "ok go" — redémarrage contrôlé HQA-06
**Cycle :** 9 — QA / validation — Critical
**Campaign :** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Lot :** P6-HQA-02 / REC-01
**Scenario :** HQA-06 — Restart / Rehydrate
**Prior handoff tip :** 8e249ff6 (HQA-02 diagnosis; HQA-03…05 not consolidated there)

---

## 1. Git Truth Check

| Check | Result |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa` |
| Branch | `qa/p6-hqa-02-rec01-human-qa` |
| HEAD | `f31bb8f610802c102edbe68889fb8ecf0339ec28` (= origin/main) |
| REC-01 | PRESENT |
| Product source mutation | NONE |

---

## 2. Convergence

- C1 / Doctrine / Roadmap unchanged
- P6 IN PROGRESS · GLOBAL PASS NO · v3 NON ADOPTED
- Browser reload HQA-06 prior PASS (Morris); server restart executed this cycle

---

## 3. Runtime BEFORE → AFTER

| Field | BEFORE | AFTER |
|---|---|---|
| PID | 81318 | **6378** |
| CWD | QA WT app | same |
| HEAD | f31bb8f6 | f31bb8f6 |
| Port | 3020 | 3020 |
| Command | `npm run dev -- --hostname localhost --port 3020` | same |
| Stop | SIGTERM npm 81295 (graceful; no kill -9) | — |
| Ready | — | Ready in 1109ms |

Identity before stop: single listener, cwd/HEAD/DB matched — not ambiguous.

---

## 4. SQLite paths & snapshot method

| DB | Path |
|---|---|
| Product | `…/.sfia-exec/hqa01-rec01-requal/product/oa-product.sqlite` |
| Session | `…/.sfia-exec/hqa01-rec01-requal/product/nora-session.sqlite` |

Method: `sqlite3 .backup` BEFORE stop and AFTER restart into evidence dir. No WAL/SHM. Sources not deleted/replaced. schema_meta `m9-0.1.0`.

---

## 5. Product / Journal BEFORE vs AFTER

Project: prj:5d63119d-063e-43ab-bcb0-d1d45ac045f2 — Difficultés de suivi de projets dans les petites entreprises
Cycle: cyc:trj-8a649d1f2bf64c6eaaa11015 — framing / Light / **active**
LPS: lps:0a4f0768e702e37e

### Work Recommendations

- BEFORE R1: epi:acw:094632644f49cf33c365 | status=active | corr=ltu:b395c9f7f732ed7c6927a51514086af6 | rel=null
  stmt: Conserver dans le cadrage un élément de travail explicite, à reprendre et non démarré : préparer puis réaliser deux ou trois entretiens avec des responsables de petites entreprises
- BEFORE R2: epi:acw:af85d38a4bb452f3fbc6 | status=active | corr=ltu:a5b505e1eadcef314340187808be46f0 | rel=null
  stmt: Ajouter au cadrage un travail distinct à reprendre ultérieurement : examiner deux ou trois exemples réels de supports de suivi de projet utilisés dans de petites entreprises, afin
- BEFORE R3: epi:acw:4b0ee641bd031573ca9d | status=active | corr=ltu:2211ca4c22f91dae2ff247972d7993c6 | rel={"kind": "CONTRADICTORY", "targetEpistemicItemId": "epi:acw:094632644f49cf33c365", "judgmentOrigin": "nora_structured_candidate", "authority": "none"}
  stmt: Conserver comme travail alternatif distinct, non arbitré et non démarré, la préparation d’une méthode de cadrage exclusivement documentaire : définir comment explorer les difficult

- AFTER R1: epi:acw:094632644f49cf33c365 | status=active | corr=ltu:b395c9f7f732ed7c6927a51514086af6 | rel=null
  stmt: Conserver dans le cadrage un élément de travail explicite, à reprendre et non démarré : préparer puis réaliser deux ou trois entretiens avec des responsables de petites entreprises
- AFTER R2: epi:acw:af85d38a4bb452f3fbc6 | status=active | corr=ltu:a5b505e1eadcef314340187808be46f0 | rel=null
  stmt: Ajouter au cadrage un travail distinct à reprendre ultérieurement : examiner deux ou trois exemples réels de supports de suivi de projet utilisés dans de petites entreprises, afin
- AFTER R3: epi:acw:4b0ee641bd031573ca9d | status=active | corr=ltu:2211ca4c22f91dae2ff247972d7993c6 | rel={"kind": "CONTRADICTORY", "targetEpistemicItemId": "epi:acw:094632644f49cf33c365", "judgmentOrigin": "nora_structured_candidate", "authority": "none"}
  stmt: Conserver comme travail alternatif distinct, non arbitré et non démarré, la préparation d’une méthode de cadrage exclusivement documentaire : définir comment explorer les difficult

Comparison: **ALL PASS** (same ids, statements, statuses, correlationIds, R3 CONTRADICTORY relation to R1 preserved). No automatic new WR.

### Journal

- cje:aa431df2013bd2f4 — Distinguer l’avancement des tâches et celui du projet
- cje:0c3ec4d797f3ab1a — Alternative exclusivement documentaire et contradiction avec les entretiens

Both preserved (ids + titles).

### HumanDecisions

- Pre-existing trajectory HD only (dec:gf-trj:13a3aac5-…) — unchanged
- No automatic HD created by restart

---

## 6. UI post-restart

Cursor: project route redirects to login (NO_SESSION). No Nora interaction.
**HUMAN UI RECHECK PENDING** for Morris (Cadrage actif, WR=3, sujets=2, décisions journal=0).

---

## 7. Fake / Real

Persistence REAL verified via process stop/start + identity compare. No provider call. MODEL VERIFIED / REAL BOUNDARY PROVEN / P6 GLOBAL PASS / v3 ADOPTED — not declared.

---

## 8. HQA-07

**NOT RUN.**

---

## 9. Product unchanged

No Product code/config edits. No project Git. Restart only.

---

## 10. Décisions Morris

1. Manual UI recheck after login on http://localhost:3020
2. If UI confirms → elevate to full HQA-06 PASS
3. Authorize HQA-07 only after HQA-06 disposition

---

## 11. Verdict

**HQA-06 — SERVER RESTART VERIFIED — HUMAN UI RECHECK PENDING**

---

## 12. Evidence files (exploitable)

### `hqa-06-restart-rehydration.md`

```markdown
# HQA-06 — Controlled Server Restart & Durable Rehydration

campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
lot: P6-HQA-02 / REC-01
scenario: HQA-06 — Restart / Rehydrate
beforeAt: 2026-10-11T05:59:44Z
restartAt: 2026-10-11T05:59:56Z
mode: controlled restart — no Product Delivery, no Nora interaction

---

## RAW OBSERVATION

- Browser reload previously PASS (Morris).
- Server restart was NOT RUN before this cycle.
- UI post-restart in Cursor: login required (NO_SESSION) — Morris manual recheck pending.

## TECHNICAL FACT

### Runtime BEFORE

| Field | Value |
|---|---|
| PID | 81318 (next-server) / parent 81311 / npm 81295 |
| CWD | …/sfia-workspace-p6-rec01-human-qa/projects/sfia-studio/app |
| HEAD | f31bb8f610802c102edbe68889fb8ecf0339ec28 |
| Port | [::1]:3020 |
| Command | npm run dev -- --hostname localhost --port 3020 |
| Product DB open | hqa01-rec01-requal/product/oa-product.sqlite |
| Distinct listeners | 1 — identity unambiguous |
| Stop | SIGTERM npm 81295 → children stopped; port freed; no kill -9 |

### Runtime AFTER

| Field | Value |
|---|---|
| PID | 6378 (next-server) / parent 6377 |
| CWD | same QA WT app |
| HEAD | f31bb8f610802c102edbe68889fb8ecf0339ec28 |
| Port | [::1]:3020 |
| Command | same next dev |
| Ready | Ready in 1109ms (.env.local loaded) |
| Health | /login 200; / 307 NO_SESSION |

### Snapshot method

- sqlite3 `.backup` BEFORE stop and AFTER restart into evidence dir
- No WAL/SHM present
- Source DBs not deleted/replaced/migrated
- schema_meta: schema_version=m9-0.1.0 (unchanged)

### BEFORE / AFTER Product (identity)

| Check | Result |
|---|---|
| projectId | prj:5d63119d-063e-43ab-bcb0-d1d45ac045f2 |
| title | Difficultés de suivi de projets dans les petites entreprises |
| cycleInstanceId | cyc:trj-8a649d1f2bf64c6eaaa11015 · framing · Light · active |
| LPS | lps:0a4f0768e702e37e |
| ACW WR count | 3 → 3 |
| Journal subjects | 2 → 2 |
| HumanDecisions | 1 trajectory HD (pre-existing) unchanged; none auto-created |
| Comparison checks | ALL PASS (26 checks, 0 failed) |

### Work Recommendations (preserved identities)

| Label | epistemicItemId | status | correlationId | relation |
|---|---|---|---|---|
| R1 | epi:acw:094632644f49cf33c365 | active | ltu:b395c9f7f732ed7c6927a51514086af6 | None |
| R2 | epi:acw:af85d38a4bb452f3fbc6 | active | ltu:a5b505e1eadcef314340187808be46f0 | None |
| R3 | epi:acw:4b0ee641bd031573ca9d | active | ltu:2211ca4c22f91dae2ff247972d7993c6 | {"kind": "CONTRADICTORY", "targetEpistemicItemId": "epi:acw:094632644f49cf33c365", "judgmentOrigin": "nora_structured_candidate", "authority": "none"} |

Statements preserved byte-identical (see inventories).

### Journal subjects preserved

1. cje:aa431df2013bd2f4 — Distinguer l’avancement des tâches et celui du projet
2. cje:0c3ec4d797f3ab1a — Alternative exclusivement documentaire et contradiction avec les entretiens

## UI

- Cursor automated UI: blocked by auth (login redirect).
- No Nora message sent.
- Status: HUMAN UI RECHECK PENDING for Morris.

## Fake / Real

| Item | Status |
|---|---|
| Fake | NOT OBSERVED |
| Persistence REAL | OBSERVED (process stop/start, same SQLite, identity compare) |
| Provider call | NONE |
| MODEL VERIFIED / REAL BOUNDARY PROVEN | NOT DECLARED |

## VERDICT

**HQA-06 — SERVER RESTART VERIFIED — HUMAN UI RECHECK PENDING**
```

### `hqa-06-evidence-summary.json`

```json
{
  "campaignId": "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
  "scenarioId": "HQA-06-RESTART-REHYDRATE",
  "kind": "CONTROLLED_SERVER_RESTART",
  "at": "2026-10-11T05:59:44Z",
  "restartAt": "2026-10-11T05:59:56Z",
  "pidBefore": 81318,
  "pidAfter": 6378,
  "projectId": "prj:5d63119d-063e-43ab-bcb0-d1d45ac045f2",
  "cycleInstanceId": "cyc:trj-8a649d1f2bf64c6eaaa11015",
  "wrIds": [
    "epi:acw:094632644f49cf33c365",
    "epi:acw:af85d38a4bb452f3fbc6",
    "epi:acw:4b0ee641bd031573ca9d"
  ],
  "comparisonAllPass": true,
  "uiPostRestart": "HUMAN_UI_RECHECK_PENDING",
  "verdict": "HQA-06 — SERVER RESTART VERIFIED — HUMAN UI RECHECK PENDING",
  "productMutation": false,
  "newNoraTurn": false
}
```

### `BEFORE-AFTER-comparison.json`

```json
{
  "checks": [
    {
      "check": "same_projectId",
      "pass": true,
      "detail": "prj:5d63119d-063e-43ab-bcb0-d1d45ac045f2"
    },
    {
      "check": "same_title",
      "pass": true,
      "detail": "Difficultés de suivi de projets dans les petites entreprises"
    },
    {
      "check": "same_cycle",
      "pass": true,
      "detail": "cyc:trj-8a649d1f2bf64c6eaaa11015"
    },
    {
      "check": "wr_count_3",
      "pass": true,
      "detail": "before=3 after=3"
    },
    {
      "check": "same_wr_ids",
      "pass": true,
      "detail": "before=['epi:acw:094632644f49cf33c365', 'epi:acw:4b0ee641bd031573ca9d', 'epi:acw:af85d38a4bb452f3fbc6'] after=['epi:acw:094632644f49cf33c365', 'epi:acw:4b0ee641bd031573ca9d', 'epi:acw:af85d38a4bb452f3fbc6']"
    },
    {
      "check": "stmt_cf33c365",
      "pass": true,
      "detail": ""
    },
    {
      "check": "status_cf33c365",
      "pass": true,
      "detail": "active"
    },
    {
      "check": "corr_cf33c365",
      "pass": true,
      "detail": "ltu:b395c9f7f732ed7c6927a51514086af6"
    },
    {
      "check": "rel_cf33c365",
      "pass": true,
      "detail": "null"
    },
    {
      "check": "stmt_1573ca9d",
      "pass": true,
      "detail": ""
    },
    {
      "check": "status_1573ca9d",
      "pass": true,
      "detail": "active"
    },
    {
      "check": "corr_1573ca9d",
      "pass": true,
      "detail": "ltu:2211ca4c22f91dae2ff247972d7993c6"
    },
    {
      "check": "rel_1573ca9d",
      "pass": true,
      "detail": "{\"kind\": \"CONTRADICTORY\", \"targetEpistemicItemId\": \"epi:acw:094632644f49cf33c365\", \"judgmentOrigin\": \"nora_structured_ca"
    },
    {
      "check": "stmt_52f3fbc6",
      "pass": true,
      "detail": ""
    },
    {
      "check": "status_52f3fbc6",
      "pass": true,
      "detail": "active"
    },
    {
      "check": "corr_52f3fbc6",
      "pass": true,
      "detail": "ltu:a5b505e1eadcef314340187808be46f0"
    },
    {
      "check": "rel_52f3fbc6",
      "pass": true,
      "detail": "null"
    },
    {
      "check": "no_extra_wr",
      "pass": true,
      "detail": ""
    },
    {
      "check": "journal_count_2",
      "pass": true,
      "detail": "2"
    },
    {
      "check": "same_journal_ids",
      "pass": true,
      "detail": ""
    },
    {
      "check": "same_journal_titles",
      "pass": true,
      "detail": ""
    },
    {
      "check": "hd_count_unchanged",
      "pass": true,
      "detail": "1"
    },
    {
      "check": "same_hd_ids",
      "pass": true,
      "detail": ""
    },
    {
      "check": "same_lps",
      "pass": true,
      "detail": "lps:0a4f0768e702e37e"
    },
    {
      "check": "same_product_db_path",
      "pass": true,
      "detail": ""
    },
    {
      "check": "same_session_db_path",
      "pass": true,
      "detail": ""
    }
  ],
  "failed": [],
  "allPass": true
}
```

### Inventories

- BEFORE-inventory.json / AFTER-inventory.json (full WR statements + journal + HD)
- db-snapshot/BEFORE-*.sqlite and AFTER-*.sqlite (binary backups)

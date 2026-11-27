# SFIA REVIEW PACK — FULL
# MACRO-LOT 2 — ARCHITECTURE SELECTION + INTEGRATED DELIVERY

**Verdict:** `ML2_INTEGRATED_DELIVERY_QUALIFIED — READY_FOR_EXIT_REVIEW`
**Date:** 2026-11-27
**Campaign (cumulative, not renewed):** `ml2-i2-docintel-20261127`
**Lane:** DEV · WEB LIVE OFF · RECETTE untouched · Admin key unused
**Migration:** none applied (027 candidate documented only)

---

## 1. Morris GO consumed

Architecture selection + integrated delivery authorized. Locked decisions:

| Domain | Decision |
|---|---|
| Responses + semantic-qualification | **KEEP** |
| Decisions (bounded) | **ADAPT** + explicit uncertainty + Responses fallback |
| Search | **E = lexical + local embeddings** (file-derived index) |
| Vector Stores / File Search / durable fileId | **DEFER** |
| Vision punctual | **ADAPT** (complex/scans/schemas) |
| PDF extract + viewer | **KEEP** |
| D3 V1 + HumanDecision D6 | **KEEP** (OpenAI Decisions ≠ D6) |

Lock doc: `projects/sfia-studio-next/construction/convergence-openai-studio/ml2-qualification/architecture-selection-locked-20261127.md`

### Local persistence (no implicit migration)

Physical mechanism retained: **filesystem derived index**
`web/.sfia-derived/embedding-index/<projectId>/{manifest.json,vectors.jsonl}`
Reconstructible from authorized D4 sources; mobilization filters rights / revoke / version / provenance.
**pgvector unused. Hosted VS unused for product.**
Candidate SQL `027_derived_embedding_chunks` documented — **not applied**.

---

## 2. LIVE comparative results (pre-construction)

| Phase | Result | HTTP | Tokens in/out |
|---|---|---|---|
| Decisions | 12/12 | 12 | 2168 / 0 |
| Responses control | 12/12 (0 mismatch) | 24 | 1254 / 1022 |
| Embeddings local | meanRecall@5 0.625 | 2 | 289 / 0 |
| Vector Store (experimental) | meanRecall@5 0.75 | 25 | — |
| Vision Terra medium | 6/6 | 12 | 2930 / 156 |
| Cleanup | 6 files + 1 VS deleted, verify 404 | 8 | — |

Envelope floor ≈ **85 / 236** HTTP before Nora E2E; tokens measured ≈6641 in + 1178 out.
Evidence: `web/.sfia-evidence/document-intelligence/live-campaign/`

---

## 3. Integrated delivery

### Code

- `derived-embedding-index.ts` + `hybrid-knowledge-search.ts`
- `bounded-judgment.ts` (Decisions → fallback Responses)
- `document-vision-punctual.ts`
- `searchJournalSubjects` optional `queryVector` hybrid channel
- Feature flags **OFF by default**: `SFIA_DERIVED_EMBEDDING_SEARCH`, `SFIA_BOUNDED_JUDGMENT`, `SFIA_DOCUMENT_VISION_PUNCTUAL`
- Frontier fixes: reserve-before-strip hints; max_output_tokens Responses-only; skip modelHint on non-Responses; protect LIVE envelope from test wipe

### CONV-F21…F26

| ID | Status |
|---|---|
| F21 | PASS_WITH_RESERVE (uncertainty → fallback) |
| F22 | PASS_ARCHITECTURE_E |
| F23 | PASS_LOCAL_INDEX (+ experimental VS cleanup 404) |
| F24 | PASS (LIVE Vision + extract/viewer KEEP) |
| F25 | PASS_BOUNDED (Nora E2E COMPLETE, no D6) |
| F26 | PASS_ATTRIBUTED (ledger rows reconciled) |

Qualify report: `web/.sfia-evidence/document-intelligence/integrated-delivery/qualify-report.json`

### Nora E2E (reserved 40)

- Status **COMPLETE** · schema `ml4c-sem-qual-v1` kept
- HTTP toward Nora reserve ≈ **2 / 40** (remaining ≈38)
- semantic-qualification affirmed; no HumanDecision effect
- Envelope after: httpCommitted ≈90; responses family committed ≈20 / 112

### FinOps / cleanup reconciliation

- LIVE phase budgets + cleanup manifest retained
- Ledger inserts: `embeddings.derived_index_rebuild`, `bounded_judgment.decisions`, `nora.ml2_integrated_e2e` (no fake project FK)
- Remote experimental resources: deleted + 404 verified
- Embedding tariff **PARTIAL/UNKNOWN** (catalog) — not presented as zero

### Contracts synced

- `contrat-fonctionnel.md` §4.4 architecture lock note
- `contrat-technique.md` KEEP/ADAPT/DEFER rows updated
- As-built: `as-built-macro-lot-2-20261127.md`

---

## 4. Explicit non-claims

- No RECETTE / STABLE / ADOPTED
- No operational hosted Vector Store / File Search / durable fileId
- No migration 027 applied
- No campaign reset / ceiling increase
- No real project data transfer
- Flags remain OFF until product gate
- Macro-lot 3 not started

---

## 5. Ask Morris (exit)

1. Accept Macro-lot 2 delivery with listed reserves?
2. Authorize product flag enablement (which flags, which lane)?
3. GO migration 027 later (optional) — yes/no?
4. Proceed Macro-lot 3 only on separate GO?

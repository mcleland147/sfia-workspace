---
status: temporary-review-handoff
cycle: Lot 0 Decisions Recording + PR Readiness
profile: Critical
head_initial: 148fe441f42f1d1fc0825bdc5fc88c4f19b943ab
commit_substantif: e2006897c492fc8d83a185ce818ddb5e3ea47164
head_pr: e2006897c492fc8d83a185ce818ddb5e3ea47164
base_main: f9dda424647474917fd4831b431766ef1f1813d4
csv_sha: 00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275
decisions_recorded: 15
canonical_confirmed: 3
keep_count: 27
archive_approved: 76
investigations_remaining: 0
pending_remaining: 0
migrations: not_started
lots_a_j: not_started
baseline: v2.4
candidate: v2.6
pr: 166
pr_merged: false
readiness_verdict: READY_FOR_MORRIS_MERGE_DECISION
synthesis_only: no
---

# SFIA v2.6 — Review Pack (Full)

**Date/heure :** 2026-07-12 04:30 Europe/Paris
**Cycle :** Lot 0 Decisions Recording + PR Readiness
**Profil :** Critical
**Branche :** `audit/sfia-v2.6-lot-0-qualification`
**HEAD précédent :** `148fe441f42f1d1fc0825bdc5fc88c4f19b943ab`
**Commit substantif :** `e2006897c492fc8d83a185ce818ddb5e3ea47164`
**HEAD PR :** `e2006897c492fc8d83a185ce818ddb5e3ea47164`
**Base main :** `f9dda424647474917fd4831b431766ef1f1813d4`
**PR #166 :** open — not merged
**synthesis only = no**

## Handoff summary

- Morris decisions M0-DEC-001 à 015 recorded (15/15)
- Canonical 3/3 confirmed — no physical change
- Keep: 27 | Archive approved (execution deferred): 76
- Investigations remaining: 0 | PENDING: 0
- CSV unchanged — 103 Lot 0 files unchanged
- No migration — Lots A–J not started
- SFIA v2.4 baseline | SFIA v2.6 candidate
- **PR readiness: READY FOR MORRIS MERGE DECISION**

---

## FULL QUALIFICATION REPORT

# SFIA v2.6 — Lot 0 Qualification Report

*Qualification read-only — 103 fichiers — décisions Morris enregistrées — exécution différée*

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-lot-0-qualification.md`
**Date et heure :** 2026-07-12 04:30 Europe/Paris
**Statut :** **Candidate** — décisions Morris **recorded** — archive execution **deferred**
**Cycle :** Lot 0 Decisions Recording + PR Readiness
**Profil SFIA :** **Critical**
**Branche :** `audit/sfia-v2.6-lot-0-qualification`
**HEAD initial cycle :** `148fe441f42f1d1fc0825bdc5fc88c4f19b943ab`
**Base main :** `f9dda424647474917fd4831b431766ef1f1813d4`
**CSV SHA :** `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275`
**PR :** #166 — **OPEN** — **non mergée**

### Verdict

```
LOT 0 MORRIS DECISIONS RECORDED
LOT 0 QUALIFICATION COMPLETE — PR READINESS COMPLETE
READY FOR MORRIS MERGE DECISION
```

---

## 1. Objectif

Tracer les **15 décisions Morris** (M0-DEC-001 à 015) sur les 103 fichiers Lot 0. **Aucune migration physique.** Morris décide; ce rapport enregistre.

---

## 2. Morris Decisions — Recorded

**Horodatage :** 2026-07-12 04:30 Europe/Paris

| Métrique | Avant (qualification) | Après (Morris) |
|----------|----------------------:|---------------:|
| Decisions PENDING | 15 | **0** |
| Decisions recorded | 0 | **15** |
| KEEP (incl. 3 canonical) | — | **27** |
| ARCHIVE approved (execution deferred) | — | **76** |
| INVESTIGATION remaining | 11 | **0** |
| Physical migration executed | 0 | **0** |

| Garde-fou | Statut |
|-----------|--------|
| CSV unchanged | ✓ |
| SFIA v2.4 baseline | ✓ |
| SFIA v2.6 candidate | ✓ |
| Archive execution | **deferred** |

---

## 3. Synthèse Lot 0 (post-Morris)

| Paquet | Fichiers | Nature post-décision |
|--------|--------:|-------------------|
| **M0-A** Canonical | 3 | **3/3 CANONICAL CONFIRMED** — no physical change |
| **M0-B** Core reference | 11 | 7 README + 4 v2.6 candidate refs — **KEEP** |
| **M0-C** Supporting | 18 | **8 keep / 10 archive** (M0-DEC-014 split) |
| **M0-D** Archives | 56 | **76 archive decisions** incl. supporting reclass |
| **M0-E** Informational | 12 | **4 keep / 8 archive** (M0-DEC-015 split) |
| **M0-F** Usage unknown | 3 | 1 keep / 2 archive — **decided** |
| **M0-G** Investigate | **0** | Aucun fichier exclusif — investigations portées M0-A/D/F |

> **Clarification M0-G :** M0-G = 0 fichier exclusif. Les investigations initiales sont résolues dans M0-A (canonical usage), M0-D (refs archive), M0-F (usage unknown).

### Statuts matrice (103 fichiers)

- **DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED** : 76
- **DECIDED BY MORRIS — CANONICAL KEEP** : 3
- **DECIDED BY MORRIS — KEEP** : 24

---

## 4. Paquets Morris (post-décision)

### M0-A — Canonical

**3/3 CANONICAL CONFIRMED BY MORRIS** — aucune promotion baseline; aucun changement physique.

- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` — DECIDED BY MORRIS — CANONICAL KEEP
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` — DECIDED BY MORRIS — CANONICAL KEEP
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` — DECIDED BY MORRIS — CANONICAL KEEP

### M0-B — Core reference

7 README navigation (M0-DEC-011) + 4 v2.6 candidate refs (M0-DEC-012).

- `method/sfia-fast-track/README.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/audit-rex/README.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/automation/README.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/checklists/README.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/cycles/README.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/documentation/README.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/ui/README.md` — DECIDED BY MORRIS — KEEP

### M0-C — Supporting (split M0-DEC-014)

Keep: controlled-delivery-standard, validation-checklist, v2/v2.5 actifs, figma method. Archive: foundation inventories, Chantiers360 REX, notion design, promotion report, project-plan.

- `method/complementary/controlled-delivery/controlled-delivery-standard.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4.1-documentation-status-promotion-report.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- … 3 autres

### M0-D — Archives (execution deferred)

interv360 (6), inventories (9), foundation v1.1 (4), workspace-audit (37) + archives from splits.

- `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/complementary/controlled-delivery/controlled-delivery-publication-package.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/archive/interv360-realization/notion-integration-plan.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/archive/interv360-realization/realization-checklists.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/archive/interv360-realization/realization-deliverables-standard.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/archive/interv360-realization/realization-method.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/archive/interv360-realization/realization-prompt-family.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/archive/interv360-realization/realization-templates.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/checklists/notion-publication-checklist.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/checklists/validation-checklist.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- … 61 autres

### M0-E — Informational (split M0-DEC-015)

Archive: Notion plans + CD publication-only. Keep: CD checklist, template, prompt-family, index-integration.

- `method/complementary/controlled-delivery/controlled-delivery-checklist.md` — DECIDED BY MORRIS — KEEP
- `method/complementary/controlled-delivery/controlled-delivery-index-integration.md` — DECIDED BY MORRIS — KEEP
- `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md` — DECIDED BY MORRIS — KEEP
- `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/complementary/controlled-delivery/controlled-delivery-publication-package.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/complementary/controlled-delivery/controlled-delivery-template.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/documentation/notion-publication-plan.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/documentation/notion-target-content-map.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED

### M0-F — Usage unknown (resolved)

guardrails → keep/non-operational; notion-publication → archive; validation → archive superseded.

- `method/sfia-fast-track/checklists/guardrails-checklist.md` — DECIDED BY MORRIS — KEEP
- `method/sfia-fast-track/checklists/notion-publication-checklist.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
- `method/sfia-fast-track/checklists/validation-checklist.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED

### M0-G — Investigate

**Volume exclusif = 0.**


---

## 5. Matrice décisionnelle exhaustive (103 fichiers)

| ID | Path | Auth | Usage | Disp CSV | Morris decision | Statut | Action future |
|----|------|------|-------|----------|-----------------|--------|---------------|
| L0-001 | `…olled-delivery/controlled-delivery-checklist.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — KEEP (Controlled Deli | DECIDED BY MORRIS — KEEP | No physical action |
| L0-002 | `…livery/controlled-delivery-index-integration.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — KEEP (Controlled Deli | DECIDED BY MORRIS — KEEP | No physical action |
| L0-003 | `…d-delivery/controlled-delivery-prompt-family.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — KEEP (Controlled Deli | DECIDED BY MORRIS — KEEP | No physical action |
| L0-004 | `…ry/controlled-delivery-publication-checklist.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-005 | `…trolled-delivery-publication-package-summary.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-006 | `…very/controlled-delivery-publication-package.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-007 | `…elivery/controlled-delivery-publication-prep.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-008 | `…ntrolled-delivery-standard-hardening-summary.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-009 | `…elivery/controlled-delivery-standard-summary.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-010 | `…rolled-delivery/controlled-delivery-standard.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — KEEP CONFIRMED | DECIDED BY MORRIS — KEEP | No physical action |
| L0-011 | `…rolled-delivery/controlled-delivery-template.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — KEEP (Controlled Deli | DECIDED BY MORRIS — KEEP | No physical action |
| L0-012 | `method/sfia-fast-track/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
| L0-013 | `…nterv360-realization/notion-integration-plan.md` | informational | non-operational | archive | M0-DEC-007 ARCHIVE CONFIRMED — HISTORICA | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Update incoming refs before physical arc |
| L0-014 | `…interv360-realization/realization-checklists.md` | informational | non-operational | archive | M0-DEC-007 ARCHIVE CONFIRMED — HISTORICA | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Update incoming refs before physical arc |
| L0-015 | `…ealization/realization-deliverables-standard.md` | informational | non-operational | archive | M0-DEC-007 ARCHIVE CONFIRMED — HISTORICA | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Update incoming refs before physical arc |
| L0-016 | `…ive/interv360-realization/realization-method.md` | informational | non-operational | archive | M0-DEC-007 ARCHIVE CONFIRMED — HISTORICA | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Update incoming refs before physical arc |
| L0-017 | `…erv360-realization/realization-prompt-family.md` | informational | non-operational | archive | M0-DEC-007 ARCHIVE CONFIRMED — HISTORICA | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Update incoming refs before physical arc |
| L0-018 | `…/interv360-realization/realization-templates.md` | informational | non-operational | archive | M0-DEC-007 ARCHIVE CONFIRMED — HISTORICA | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Update incoming refs before physical arc |
| L0-019 | `method/sfia-fast-track/audit-rex/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
| L0-020 | `method/sfia-fast-track/automation/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
| L0-021 | `method/sfia-fast-track/checklists/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
| L0-022 | `…a-fast-track/checklists/guardrails-checklist.md` | supporting | unknown | keep | M0-DEC-004 KEEP CONFIRMED — USAGE NON-OP | DECIDED BY MORRIS — KEEP | No physical action |
| L0-023 | `…rack/checklists/notion-publication-checklist.md` | supporting | unknown | keep | M0-DEC-005 ARCHIVE APPROVED BY MORRIS —  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive + ref control (future |
| L0-024 | `…t-track/checklists/sfia-validation-checklist.md` | supporting | operational | keep | M0-DEC-013 KEEP CONFIRMED — OPERATIONAL  | DECIDED BY MORRIS — KEEP | No physical action |
| L0-025 | `…a-fast-track/checklists/validation-checklist.md` | supporting | unknown | keep | M0-DEC-006 ARCHIVE APPROVED — SUPERSEDED | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Archive + redirect refs to sfia-validati |
| L0-026 | `…ack/core/sfia-chatgpt-cursor-operating-model.md` | canonical | unknown | keep | M0-DEC-001/002/003 CANONICAL CONFIRMED B | DECIDED BY MORRIS — CANONICAL KEEP | No physical action — qualification only |
| L0-027 | `…fia-fast-track/core/sfia-cycle-routing-guide.md` | canonical | non-operational | keep | M0-DEC-001/002/003 CANONICAL CONFIRMED B | DECIDED BY MORRIS — CANONICAL KEEP | No physical action — qualification only |
| L0-028 | `…ia-fast-track/core/sfia-rules-and-guardrails.md` | canonical | unknown | keep | M0-DEC-001/002/003 CANONICAL CONFIRMED B | DECIDED BY MORRIS — CANONICAL KEEP | No physical action — qualification only |
| L0-029 | `method/sfia-fast-track/cycles/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
| L0-030 | `method/sfia-fast-track/documentation/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
| L0-031 | `…dation-documents/foundation-candidate-files.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-032 | `…ndation-documents/foundation-priority-files.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-033 | `…ocuments/sfia-foundation-documents-inventory.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-034 | `…ation/foundation-documents/v1.1-audit/README.md` | reference | non-operational | archive | M0-DEC-009 ARCHIVE APPROVED — HISTORICAL | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive after ref update |
| L0-035 | `…ion/foundation-documents/v1.1-closure/README.md` | reference | non-operational | archive | M0-DEC-009 ARCHIVE APPROVED — HISTORICAL | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive after ref update |
| L0-036 | `…-closure/sfia-foundation-v1.1-closure-status.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-037 | `…osure/sfia-foundation-v1.1-post-merge-status.md` | supporting | non-operational | archive | M0-DEC-009 ARCHIVE APPROVED — HISTORICAL | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive after ref update |
| L0-038 | `…ts/sfia-v1.1-capitalization-inputs-inventory.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-039 | `….1-inputs/sfia-v1.1-foundation-impact-matrix.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-040 | `…anning/sfia-foundation-v1.1-evolution-matrix.md` | supporting | non-operational | archive | M0-DEC-009 ARCHIVE APPROVED — HISTORICAL | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive after ref update |
| L0-041 | `…ion/inventory-complementary-methods.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-042 | `…talization/inventory-interv360-docs.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-043 | `…italization/inventory-platform-docs.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-044 | `…zation/inventory-platform-templates.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-045 | `…/capitalization/inventory-practices.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-046 | `…on/capitalization/inventory-prompts.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-047 | `…alization/inventory-sfia-fast-track.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-048 | `…-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-049 | `…5-chantiers360-post-mvp-capitalization-close.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-050 | `…-11-sfia-v2.5-review-handoff-routing-fix-rex.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-051 | `…6-07-11-sfia-v2.6-repository-cleanup-framing.md` | supporting | non-operational | keep | M0-DEC-012 KEEP CONFIRMED — SFIA v2.6 CA | DECIDED BY MORRIS — KEEP | No baseline promotion |
| L0-052 | `…6-07-11-sfia-v2.6-repository-read-only-audit.md` | supporting | non-operational | keep | M0-DEC-012 KEEP CONFIRMED — SFIA v2.6 CA | DECIDED BY MORRIS — KEEP | No baseline promotion |
| L0-053 | `…7-11-sfia-v2.6-repository-standard-decisions.md` | reference | non-operational | keep | M0-DEC-012 KEEP CONFIRMED — SFIA v2.6 CA | DECIDED BY MORRIS — KEEP | No baseline promotion |
| L0-054 | `…-11-sfia-v2.6-repository-standard-principles.md` | reference | non-operational | keep | M0-DEC-012 KEEP CONFIRMED — SFIA v2.6 CA | DECIDED BY MORRIS — KEEP | No baseline promotion |
| L0-055 | `…n/sfia-v2/sfia-v2-method-versioning-standard.md` | supporting | operational | keep | M0-DEC-013 KEEP CONFIRMED — OPERATIONAL  | DECIDED BY MORRIS — KEEP | No physical action |
| L0-056 | `…tion/sfia-v2/sfia-v2-pilot-selection-scoring.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — KEEP CONFIRMED | DECIDED BY MORRIS — KEEP | No physical action |
| L0-057 | `…-consolidation-operating-efficiency-standard.md` | supporting | operational | keep | M0-DEC-013 KEEP CONFIRMED — OPERATIONAL  | DECIDED BY MORRIS — KEEP | No physical action |
| L0-058 | `…v2.4.1-documentation-status-promotion-report.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-059 | `…v2/sfia-v2.5-project-cycles-method-candidate.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — KEEP CONFIRMED | DECIDED BY MORRIS — KEEP | No physical action |
| L0-060 | `…apitalization/sfia-v2/sfia-v2.5-project-plan.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-061 | `…ia-v2/sfia-v2.5-source-routing-map-candidate.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — KEEP CONFIRMED | DECIDED BY MORRIS — KEEP | No physical action |
| L0-062 | `…-track/documentation/notion-publication-plan.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-063 | `…rack/documentation/notion-target-content-map.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-064 | `…otion/sfia-notion-provisioning-engine-design.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
| L0-065 | `…architecture-review/final-directory-map-all.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-066 | `…hitecture-review/final-directory-map-depth3.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-067 | `…/final-architecture-review/final-docs-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-068 | `…nal-architecture-review/final-exports-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-069 | `…l-architecture-review/final-interv360-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-070 | `…al-architecture-review/final-markdown-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-071 | `…inal-architecture-review/final-method-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-072 | `…nal-architecture-review/final-prompts-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-073 | `…final-architecture-review/final-tools-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-074 | `…rkspace-audit/interv360/interv360-all-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-075 | `…ace-audit/interv360/interv360-directory-map.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-076 | `…ace-audit/interv360/interv360-folder-volume.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-077 | `…ce-audit/interv360/interv360-markdown-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-078 | `…tion/workspace-audit/post-cleanup-all-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-079 | `…workspace-audit/post-cleanup-markdown-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-080 | `…tion/workspace-audit/pr-81-post-merge-status.md` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-081 | `…ation/workspace-audit/pre-cleanup-all-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-082 | `…pace-audit/pre-cleanup-directory-map-depth2.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-083 | `…pace-audit/pre-cleanup-directory-map-depth4.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-084 | `…tion/workspace-audit/pre-cleanup-docs-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-085 | `…/workspace-audit/pre-cleanup-markdown-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-086 | `…on/workspace-audit/pre-cleanup-method-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-087 | `…n/workspace-audit/pre-cleanup-methods-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-088 | `…/workspace-audit/pre-cleanup-projects-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-089 | `…n/workspace-audit/pre-cleanup-scripts-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-090 | `…ce-audit/pre-cleanup-sfia-notion-sync-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-091 | `…n/workspace-audit/round-2/directory-map-all.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-092 | `…orkspace-audit/round-2/directory-map-depth3.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-093 | `…entation/workspace-audit/round-2/docs-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-094 | `…ation/workspace-audit/round-2/exports-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-095 | `…ion/workspace-audit/round-2/interv360-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-096 | `…/workspace-audit/round-2/markdown-files-all.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-097 | `…tation/workspace-audit/round-2/method-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-098 | `…ation/workspace-audit/round-2/methods-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-099 | `…e-audit/round-2/post-round-2-markdown-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-100 | `…ation/workspace-audit/round-2/prompts-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-101 | `…orkspace-audit/sfia-workspace-migration-plan.md` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
| L0-102 | `method/sfia-fast-track/ui/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
| L0-103 | `…a-fast-track/ui/figma-design-first-ui-method.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — KEEP CONFIRMED | DECIDED BY MORRIS — KEEP | No physical action |

---

## 6. Morris Decision Board (decisions recorded)

### M0-DEC-001 — Canonical — operating-model

**Décision Morris :** **CANONICAL CONFIRMED BY MORRIS**

**Justification :** Fichier pivot modèle opératoire ChatGPT ↔ Cursor

**Observation :** authority=canonical; usage=unknown in cartography; disposition=keep CSV

**Fichiers (1):**
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`

**Action future :** Aucune action physique
**Gate :** Critical

### M0-DEC-002 — Canonical — routing-guide

**Décision Morris :** **CANONICAL CONFIRMED BY MORRIS**

**Justification :** Fichier pivot routage cycles, profils, blocs, gates

**Observation :** authority=canonical; usage=non-operational

**Fichiers (1):**
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`

**Action future :** Aucune action physique
**Gate :** Critical

### M0-DEC-003 — Canonical — rules-and-guardrails

**Décision Morris :** **CANONICAL CONFIRMED BY MORRIS**

**Justification :** Fichier pivot règles, interdits, gates, garde-fous

**Observation :** authority=canonical; usage=unknown in cartography

**Fichiers (1):**
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

**Action future :** Aucune action physique
**Gate :** Critical

### M0-DEC-004 — Usage — guardrails-checklist

**Décision Morris :** **KEEP CONFIRMED — USAGE NON-OPERATIONAL**

**Justification :** Checklist référence secondaire sans usage opérationnel direct prouvé

**Observation :** usage=unknown → Morris: non-operational

**Fichiers (1):**
- `method/sfia-fast-track/checklists/guardrails-checklist.md`

**Action future :** Aucune action physique
**Gate :** Morris

### M0-DEC-005 — Usage — notion-publication-checklist

**Décision Morris :** **ARCHIVE APPROVED BY MORRIS — EXECUTION DEFERRED**

**Justification :** Publication/sync Notion — Notion sorti de la méthodologie

**Observation :** Notion hors stratégie SFIA

**Fichiers (1):**
- `method/sfia-fast-track/checklists/notion-publication-checklist.md`

**Action future :** Archivage réversible + contrôle refs
**Gate :** Morris

### M0-DEC-006 — Usage — validation-checklist (superseded)

**Décision Morris :** **ARCHIVE APPROVED — SUPERSEDED — EXECUTION DEFERRED**

**Justification :** Ancienne checklist générique remplacée par SFIA v1.2

**Observation :** Remplaçant: sfia-validation-checklist.md

**Fichiers (1):**
- `method/sfia-fast-track/checklists/validation-checklist.md`

**Action future :** Archivage réversible + redirection refs
**Gate :** Morris

### M0-DEC-007 — Cluster interv360-realization (6)

**Décision Morris :** **ARCHIVE CONFIRMED — HISTORICAL INTERV360 — REFERENCES TO UPDATE**

**Justification :** Capitalisation pré-réalisation remplacée par cycles actuels

**Observation :** Zone archive; refs entrantes 4-6 par fichier

**Fichiers (6):**
- `method/sfia-fast-track/archive/interv360-realization/notion-integration-plan.md`
- `method/sfia-fast-track/archive/interv360-realization/realization-checklists.md`
- `method/sfia-fast-track/archive/interv360-realization/realization-deliverables-standard.md`
- `method/sfia-fast-track/archive/interv360-realization/realization-method.md`
- `method/sfia-fast-track/archive/interv360-realization/realization-prompt-family.md`
- `method/sfia-fast-track/archive/interv360-realization/realization-templates.md`

**Action future :** MAJ refs entrantes avant archive physique
**Gate :** Morris Critical

### M0-DEC-008 — Inventaires temporaires (9)

**Décision Morris :** **ARCHIVE APPROVED — TEMPORARY INVENTORIES SUPERSEDED**

**Justification :** Listes temporaires de capitalisation

**Observation :** Inventaires sans refs entrantes; remplacés par cartographie v2.6

**Fichiers (9):**
- `method/sfia-fast-track/documentation/capitalization/inventory-complementary-methods.md-list.txt`
- `method/sfia-fast-track/documentation/capitalization/inventory-interv360-docs.md-list.txt`
- `method/sfia-fast-track/documentation/capitalization/inventory-platform-docs.md-list.txt`
- `method/sfia-fast-track/documentation/capitalization/inventory-platform-templates.md-list.txt`
- `method/sfia-fast-track/documentation/capitalization/inventory-practices.md-list.txt`
- `method/sfia-fast-track/documentation/capitalization/inventory-prompts.md-list.txt`
- … et 3 autres

**Action future :** Archivage réversible
**Gate :** Morris

### M0-DEC-009 — Foundation v1.1 historical (4)

**Décision Morris :** **ARCHIVE APPROVED — HISTORICAL FOUNDATION v1.1**

**Justification :** Documents de clôture baseline terminée

**Observation :** Clôture/planification baseline historique v1.1

**Fichiers (4):**
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/README.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/README.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-post-merge-status.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md`

**Action future :** Archivage réversible après MAJ refs
**Gate :** Morris

### M0-DEC-010 — Workspace-audit legacy (37)

**Décision Morris :** **ARCHIVE APPROVED — LEGACY AUDIT SNAPSHOTS**

**Justification :** Remplacés par cartographie v2.6

**Observation :** Snapshots arborescence et plans antérieurs

**Fichiers (37):**
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-all.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-depth3.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-docs-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-exports-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-interv360-files.txt`
- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-markdown-files.txt`
- … et 31 autres

**Action future :** Archivage réversible; 1 ref entrante à vérifier
**Gate :** Morris

### M0-DEC-011 — 7 README navigation (sur 9 reference)

**Décision Morris :** **KEEP CONFIRMED — CORE NAVIGATION REFERENCES**

**Justification :** Points d'entrée zones méthode

**Observation :** 7 README navigation parmi 9 authority=reference; 2 références v2.6 → M0-DEC-012

**Fichiers (7):**
- `method/sfia-fast-track/README.md`
- `method/sfia-fast-track/audit-rex/README.md`
- `method/sfia-fast-track/automation/README.md`
- `method/sfia-fast-track/checklists/README.md`
- `method/sfia-fast-track/cycles/README.md`
- `method/sfia-fast-track/documentation/README.md`
- … et 1 autres

**Action future :** Alignement métadonnées future Lot A
**Gate :** Morris

### M0-DEC-012 — SFIA v2.6 candidate references (4)

**Décision Morris :** **KEEP CONFIRMED — SFIA v2.6 CANDIDATE REFERENCES**

**Justification :** Documents structurants trajectoire candidate

**Observation :** Trajectoire candidate v2.6 — pas baseline

**Fichiers (4):**
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md`

**Action future :** Aucune promotion baseline
**Gate :** Morris Critical

### M0-DEC-013 — Operational supporting (3)

**Décision Morris :** **KEEP CONFIRMED — OPERATIONAL SUPPORTING DOCUMENTS**

**Justification :** Preuves usage opérationnel

**Observation :** usage=operational; supporting

**Fichiers (3):**
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`

**Action future :** Aucune action physique
**Gate :** Morris

### M0-DEC-014 — Supporting batch SPLIT (5 keep / 10 archive)

**Décision Morris :** **SPLIT APPROVED BY MORRIS**

**Justification :** Keep: standards/méthode actifs; Archive: clôtures, inventaires foundation, Chantiers360 REX, Notion design, promotion report

**Observation :** Paquet initial 20+ supporting scindé par Morris

**Fichiers (15):**
- `method/complementary/controlled-delivery/controlled-delivery-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md`
- `method/sfia-fast-track/ui/figma-design-first-ui-method.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md`
- … et 9 autres

**Action future :** Exécution différée pour archives
**Gate :** Morris

### M0-DEC-015 — Informational batch SPLIT (4 keep / 8 archive)

**Décision Morris :** **SPLIT APPROVED BY MORRIS**

**Justification :** Archive: Notion plans + CD publication-only/summaries; Keep: CD checklist/template/prompt-family/index

**Observation :** Notion hors stratégie; Controlled Delivery relu

**Fichiers (12):**
- `method/complementary/controlled-delivery/controlled-delivery-checklist.md`
- `method/complementary/controlled-delivery/controlled-delivery-index-integration.md`
- `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md`
- `method/complementary/controlled-delivery/controlled-delivery-template.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md`
- `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md`
- … et 6 autres

**Action future :** Exécution différée pour archives
**Gate :** Morris

---

## 7. PR Readiness — PR #166

| Contrôle | Résultat |
|----------|----------|
| Fichiers PR (documentaires) | 4 deliverables |
| CSV modifié | **non** |
| 103 fichiers Lot 0 modifiés | **non** |
| Décisions Morris tracées | **15/15** |
| PENDING injustifié | **0** |
| Migrations | **not started** |
| Verdict readiness | **READY FOR MORRIS MERGE DECISION** |

---

## 8. Garde-fous

- Merge cartographie PR #165 ≠ GO migration
- Décisions archive ≠ exécution archive
- **CSV frozen** — aucune dimension modifiée
- **SFIA v2.4 baseline** — **SFIA v2.6 candidate**
- Lots A–J **not started**

---

## 9. Verdict

**LOT 0 MORRIS DECISIONS RECORDED**

| Contrôle | Résultat |
|----------|----------|
| Fichiers Lot 0 | **103/103** |
| Canonical confirmed | **3/3** |
| Keep confirmed | **27** |
| Archive approved (deferred) | **76** |
| Investigation remaining | **0** |
| Physical migration | **none** |

**READY FOR MORRIS MERGE DECISION** — PR #166 — **not merged**

---

*Décisions Morris enregistrées — exécution différée — Morris décide le merge PR #166.*

---

## MODIFIED cartography §21

## 21. Lot 0 Qualification — Decisions Recorded

**Horodatage :** 2026-07-12 04:30 Europe/Paris
**Branche :** `audit/sfia-v2.6-lot-0-qualification`
**HEAD initial qualification :** `148fe441f42f1d1fc0825bdc5fc88c4f19b943ab`
**Périmètre :** **103** fichiers `migration_lot_candidate = lot-0`
**Rapport :** `2026-07-11-sfia-v2.6-lot-0-qualification.md` — **décisions Morris enregistrées**
**Décisions :** M0-DEC-001 à 015 — **15/15 recorded** — **0 PENDING**
**Canonical :** **3/3 confirmed** — aucun changement physique
**Keep :** **27** | **Archive approved (deferred) :** **76**
**Qualification ≠ exécution** — archive decisions **not executed**
**CSV :** frozen — SHA `00a6902f…` inchangé
**Migrations :** not started
**Lots A–J :** not started
**Prochaine étape :** PR #166 readiness → merge Morris decision


---

## MODIFIED plan §3

### Statut qualification

| Élément | Statut |
|---------|--------|
| **Qualification cycle** | **Decisions recorded** — 2026-07-12 |
| **Fichiers under review** | **103** |
| **Morris decisions** | **15/15 recorded** — M0-DEC-001 à 015 |
| **Canonical trio** | **3/3 confirmed** — no physical change |
| **Keep confirmed** | **27** |
| **Archive approved** | **76** — **execution deferred** |
| **Investigations remaining** | **0** |
| **Rapport** | `2026-07-11-sfia-v2.6-lot-0-qualification.md` |
| **Migration exécutée** | **non** |
| **Next gate** | **PR #166 merge decision by Morris** |
| **Lot A** | **not started** |


---

## DIFF UTILE (148fe441..e200689)

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-lot-0-qualification.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-lot-0-qualification.md
index a0b4e48..b0bb535 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-lot-0-qualification.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-lot-0-qualification.md
@@ -1,534 +1,381 @@
 # SFIA v2.6 — Lot 0 Qualification Report
 
-*Qualification read-only — 103 fichiers tagués lot-0 — paquets de décision Morris*
+*Qualification read-only — 103 fichiers — décisions Morris enregistrées — exécution différée*
 
 **Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-lot-0-qualification.md`
-**Date et heure :** 2026-07-11 21:35 Europe/Paris
-**Statut :** **Candidate** — qualification read-only — **décisions Morris PENDING**
-**Cycle :** Cadrage / validation de trajectoire — Lot 0 Qualification
+**Date et heure :** 2026-07-12 04:30 Europe/Paris
+**Statut :** **Candidate** — décisions Morris **recorded** — archive execution **deferred**
+**Cycle :** Lot 0 Decisions Recording + PR Readiness
 **Profil SFIA :** **Critical**
-**Repository :** mcleland147/sfia-workspace
-**Branche :** audit/sfia-v2.6-lot-0-qualification
-**Base :** `main` @ `f9dda424647474917fd4831b431766ef1f1813d4`
+**Branche :** `audit/sfia-v2.6-lot-0-qualification`
+**HEAD initial cycle :** `148fe441f42f1d1fc0825bdc5fc88c4f19b943ab`
+**Base main :** `f9dda424647474917fd4831b431766ef1f1813d4`
 **CSV SHA :** `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275`
-**PR cartographie :** #165 **merged**
+**PR :** #166 — **OPEN** — **non mergée**
 
 ### Verdict
 
 ```
-LOT 0 QUALIFICATION COMPLETE — MORRIS DECISIONS REQUIRED
+LOT 0 MORRIS DECISIONS RECORDED
+LOT 0 QUALIFICATION COMPLETE — PR READINESS COMPLETE
+READY FOR MORRIS MERGE DECISION
 ```
 
 ---
 
 ## 1. Objectif
 
-Analyser exhaustivement les **103 fichiers** tagués `migration_lot_candidate = lot-0` afin de préparer des **paquets de décision Morris** exploitables.
-
-Ce cycle **qualifie et prépare**. **Morris décide.** Aucune proposition CSV ne devient une décision validée automatiquement.
-
----
-
-## 2. Périmètre
-
-| Élément | Valeur |
-|---------|--------|
-| Tag CSV | `lot-0` |
-| Volume | **103** |
-| Fichiers modifiés | **0** |
-| CSV modifié | **non** |
-| Migration physique | **non** |
+Tracer les **15 décisions Morris** (M0-DEC-001 à 015) sur les 103 fichiers Lot 0. **Aucune migration physique.** Morris décide; ce rapport enregistre.
 
 ---
 
-## 3. État Git
+## 2. Morris Decisions — Recorded
 
-| Contrôle | Valeur |
-|----------|--------|
-| Branche de départ | `main` @ `f9dda424647474917fd4831b431766ef1f1813d4` |
-| Branche de travail | `audit/sfia-v2.6-lot-0-qualification` |
-| 103 fichiers Lot 0 sur main | **présents** (103/103) |
+**Horodatage :** 2026-07-12 04:30 Europe/Paris
 
----
-
-## 4. État gelé (recalcul CSV)
+| Métrique | Avant (qualification) | Après (Morris) |
+|----------|----------------------:|---------------:|
+| Decisions PENDING | 15 | **0** |
+| Decisions recorded | 0 | **15** |
+| KEEP (incl. 3 canonical) | — | **27** |
+| ARCHIVE approved (execution deferred) | — | **76** |
+| INVESTIGATION remaining | 11 | **0** |
+| Physical migration executed | 0 | **0** |
 
-| Dimension | Valeur |
+| Garde-fou | Statut |
 |-----------|--------|
-| Lignes Lot 0 | **103** |
-| Chemins uniques | **103** |
-| keep | **47** |
-| archive | **56** |
-| canonical | **3** |
-| reference | **11** |
-| supporting | **71** |
-| informational | **18** |
-| operational | **3** |
-| non-operational | **95** |
-| unknown | **5** |
-| morris_gate_required yes | **3** |
+| CSV unchanged | ✓ |
+| SFIA v2.4 baseline | ✓ |
+| SFIA v2.6 candidate | ✓ |
+| Archive execution | **deferred** |
 
 ---
 
-## 5. Méthode
-
-1. Extraction CSV `lot-0` (103 lignes) — source statistique gelée
-2. Lecture des 103 fichiers sur `main` — rôle observé, métadonnées, extraits probants
-3. Contrôle cohérence individuel — structurant, usage, remplaçant, dette
-4. Regroupement paquets M0-A à M0-G — **sans modification CSV**
-5. Matrice décisionnelle exhaustive (103 lignes)
-6. Morris Decision Board — questions atomiques, décision **PENDING**
+## 3. Synthèse Lot 0 (post-Morris)
 
-**Hiérarchie des sources :** Git `main` > cartographie gelée > recommandations Cursor.
+| Paquet | Fichiers | Nature post-décision |
+|--------|--------:|-------------------|
+| **M0-A** Canonical | 3 | **3/3 CANONICAL CONFIRMED** — no physical change |
+| **M0-B** Core reference | 11 | 7 README + 4 v2.6 candidate refs — **KEEP** |
+| **M0-C** Supporting | 18 | **8 keep / 10 archive** (M0-DEC-014 split) |
+| **M0-D** Archives | 56 | **76 archive decisions** incl. supporting reclass |
+| **M0-E** Informational | 12 | **4 keep / 8 archive** (M0-DEC-015 split) |
+| **M0-F** Usage unknown | 3 | 1 keep / 2 archive — **decided** |
+| **M0-G** Investigate | **0** | Aucun fichier exclusif — investigations portées M0-A/D/F |
 
----
+> **Clarification M0-G :** M0-G = 0 fichier exclusif. Les investigations initiales sont résolues dans M0-A (canonical usage), M0-D (refs archive), M0-F (usage unknown).
 
-## 6. Contrôles CSV
+### Statuts matrice (103 fichiers)
 
-| Contrôle | Résultat |
-|----------|----------|
-| CSV 1045 × 36 | ✓ |
-| SHA inchangé | ✓ |
-| Lot 0 = 103 | ✓ |
-| Divergence dimensions | **aucune** |
+- **DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED** : 76
+- **DECIDED BY MORRIS — CANONICAL KEEP** : 3
+- **DECIDED BY MORRIS — KEEP** : 24
 
 ---
 
-## 7. Synthèse Lot 0
-
-| Paquet | Volume | Nature |
-|--------|-------:|--------|
-| **M0-A** Canonical | 3 | 3 core canonical — gates Critical |
-| **M0-B** Core reference | 9 | README / index / v2.6 standards |
-| **M0-C** Supporting keep | 20 | Structurants supporting proposés keep |
-| **M0-D** Archives proposées | 56 | Proposition archive — **non autorisée** |
-| **M0-E** Keep informational | 12 | Keep faible risque structural |
-| **M0-F** Usage unknown | 3 | Preuve usage insuffisante |
-| **M0-G** Investigate | 0 | Contradictions / preuves manquantes |
-
-### Statuts qualification
-
-| Statut | Count |
-|--------|------:|
-| INVESTIGATION REQUIRED | **11** |
-| NO ACTION RECOMMENDED | **12** |
-| READY FOR MORRIS DECISION | **80** |
-
----
-
-## 8. Paquets Morris
+## 4. Paquets Morris (post-décision)
 
 ### M0-A — Canonical
 
-Les 3 fichiers `authority=canonical` — qualification cartographie gelée, **aucune promotion automatique**.
+**3/3 CANONICAL CONFIRMED BY MORRIS** — aucune promotion baseline; aucun changement physique.
 
-- **L0-026** `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` — canonical/unknown/keep — *INVESTIGATION REQUIRED*
-  - Réserve cartographie : Direct Usage Review: unknown (consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Verifica
-- **L0-027** `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` — canonical/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (inactive-consumer) — consumer `docs/tooling/mcp/sfia-mcp-v2-architecture.md`, edge=v3-mcp-trajectory. Checks: v3-mcp-consumer; inactive-consume
-- **L0-028** `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` — canonical/unknown/keep — *INVESTIGATION REQUIRED*
-  - Réserve cartographie : Direct Usage Review: unknown (consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof). Consumer: `method/sfia-fast-track/automation/sfia-validation-engine.md`. Verif
+- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` — DECIDED BY MORRIS — CANONICAL KEEP
+- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` — DECIDED BY MORRIS — CANONICAL KEEP
+- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` — DECIDED BY MORRIS — CANONICAL KEEP
 
 ### M0-B — Core reference
 
-Fichiers reference structurants — relation Lot A — source primaire/secondaire.
-
-- **L0-012** `method/sfia-fast-track/README.md` — reference/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactiv
-- **L0-019** `method/sfia-fast-track/audit-rex/README.md` — reference/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactiv
-- **L0-020** `method/sfia-fast-track/automation/README.md` — reference/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactiv
-- **L0-021** `method/sfia-fast-track/checklists/README.md` — reference/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactiv
-- **L0-029** `method/sfia-fast-track/cycles/README.md` — reference/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactiv
-- **L0-030** `method/sfia-fast-track/documentation/README.md` — reference/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactiv
-- **L0-053** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md` — reference/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (citation-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md
-- **L0-054** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md` — reference/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md`, edge=aud
-- **L0-102** `method/sfia-fast-track/ui/README.md` — reference/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactiv
-
-### M0-C — Supporting structurants à conserver
-
-Supporting + keep — méthode, checklists, automation.
-
-- **L0-010** `method/complementary/controlled-delivery/controlled-delivery-standard.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Authority Morris gate resolved: supporting — structurally reusable method in controlled-delivery scope; Draft — Hardened; no canonical or baseline promotion.
-- **L0-024** `method/sfia-fast-track/checklists/sfia-validation-checklist.md` — supporting/operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Pass Authority: supporting — operational-validation-checklist. Scope: sfia-checklist. Ref: `method/sfia-fast-track/checklists/README.md:L16`. Lifecycle: validated. Not inferred fro
-- **L0-033** `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Direct Usage Review: non-operational (interv360-domain-readme-generic). Consumer: `projects/interv360/app/src/domain/README.md`. No direct functional consumption demonstrated.
-- **L0-036** `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Direct Usage Review: non-operational (interv360-domain-readme-generic). Consumer: `projects/interv360/app/src/domain/README.md`. No direct functional consumption demonstrated.
-- **L0-038** `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Direct Usage Review: non-operational (interv360-domain-readme-generic). Consumer: `projects/interv360/app/src/domain/README.md`. No direct functional consumption demonstrated.
-- **L0-039** `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Direct Usage Review: non-operational (interv360-domain-readme-generic). Consumer: `projects/interv360/app/src/domain/README.md`. No direct functional consumption demonstrated.
-- **L0-048** `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Direct Usage Review: non-operational (indirect-chain-no-direct-reference). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Chain was: method/sfia-fast-track/d
-- **L0-049** `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Direct Usage Review: non-operational (indirect-chain-no-direct-reference). Consumer: `projects/interv360/backend/src/domain/types.ts`. Chain was: method/sfia-fast-track/documentati
-- **L0-050** `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`, edge
-- **L0-051** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`, edge
-- **L0-052** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md`, edge=aud
-- **L0-055** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md` — supporting/operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Direct Usage Review: operational — `projects/chantiers360-v2/00-framing/project-framing.md` L35 (method-use). Ref: `| **SFIA v2.x Method Versioning** | Mergée PR #133 — alignée PR 
-- **L0-056** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`, edge
-- **L0-057** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md` — supporting/operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Direct Usage Review: operational — `prompts/prompt-catalog.md` L1328 (template-use). Ref: `| **Standard** | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sf`. Active
-- **L0-058** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4.1-documentation-status-promotion-report.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`, edge
-- **L0-059** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Direct Usage Review: non-operational (indirect-chain-no-direct-reference). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Chain was: method/sfia-fast-track/c
-- **L0-060** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Direct Usage Review: non-operational (indirect-chain-no-direct-reference). Consumer: `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`. Chain was: method/sfia-fast-track/c
-- **L0-061** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`, edge
-- **L0-064** `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-engine-design.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Usage Graph Review: non-operational (audit-only) — consumer `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`, edge
-- **L0-103** `method/sfia-fast-track/ui/figma-design-first-ui-method.md` — supporting/non-operational/keep — *READY FOR MORRIS DECISION*
-  - Réserve cartographie : Pass Authority: supporting — validated-ui-method. Scope: ui-method. Ref: `method/sfia-fast-track/ui/figma-design-first-ui-method.md`. Lifecycle: validated. Not inferred from usage 
-
-### M0-D — Archives proposées
-
-**56 propositions archive** — regroupement par cluster — remplaçants et refs entrantes.
-
-**Cluster `interv360-realization`** (6 fichiers):
-- `method/sfia-fast-track/archive/interv360-realization/notion-integration-plan.md` — SFIA v2.4 — incoming:1 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/archive/interv360-realization/realization-checklists.md` — SFIA v2.4 — incoming:5 — *INVESTIGATION REQUIRED*
-- `method/sfia-fast-track/archive/interv360-realization/realization-deliverables-standard.md` — SFIA v2.4 — incoming:6 — *INVESTIGATION REQUIRED*
-- `method/sfia-fast-track/archive/interv360-realization/realization-method.md` — SFIA v2.4 — incoming:6 — *INVESTIGATION REQUIRED*
-- `method/sfia-fast-track/archive/interv360-realization/realization-prompt-family.md` — SFIA v2.4 — incoming:5 — *INVESTIGATION REQUIRED*
-- `method/sfia-fast-track/archive/interv360-realization/realization-templates.md` — SFIA v2.4 — incoming:5 — *INVESTIGATION REQUIRED*
-
-**Cluster `other-archive`** (9 fichiers):
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt` — SFIA v1.1 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-priority-files.txt` — SFIA v1.1 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/capitalization/inventory-complementary-methods.md-list.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/capitalization/inventory-interv360-docs.md-list.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/capitalization/inventory-platform-docs.md-list.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/capitalization/inventory-platform-templates.md-list.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/capitalization/inventory-practices.md-list.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/capitalization/inventory-prompts.md-list.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/capitalization/inventory-sfia-fast-track.md-list.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-
-**Cluster `foundation-v1.1`** (4 fichiers):
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/README.md` — SFIA v1.1 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/README.md` — SFIA v1.1 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-post-merge-status.md` — SFIA v1.1 — incoming:1 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md` — SFIA v1.1 — incoming:4 — *INVESTIGATION REQUIRED*
-
-**Cluster `workspace-audit`** (37 fichiers):
-- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-all.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-depth3.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-docs-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-exports-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-interv360-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-markdown-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-method-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-prompts-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-tools-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-all-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-directory-map.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-folder-volume.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-markdown-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/post-cleanup-all-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/post-cleanup-markdown-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/pr-81-post-merge-status.md` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-all-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-directory-map-depth2.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-directory-map-depth4.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-docs-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-markdown-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-method-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-methods-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-projects-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-scripts-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/pre-cleanup-sfia-notion-sync-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/round-2/directory-map-all.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/round-2/directory-map-depth3.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/round-2/docs-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/round-2/exports-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/round-2/interv360-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/round-2/markdown-files-all.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/round-2/method-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/round-2/methods-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/round-2/post-round-2-markdown-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/round-2/prompts-files.txt` — SFIA v2.4 — incoming:0 — *READY FOR MORRIS DECISION*
-- `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md` — SFIA v2.4 — incoming:1 — *READY FOR MORRIS DECISION*
-
-### M0-E — Keep structurants (informational)
-
-Keep informational — clarification documentaire suffisante.
-
-- **L0-001** `method/complementary/controlled-delivery/controlled-delivery-checklist.md` — informational/non-operational/keep — *NO ACTION RECOMMENDED*
-  - Réserve cartographie : Pass Authority: informational — no-explicit-normative-authority. Scope: general. Ref: `method/complementary/controlled-delivery/controlled-delivery-checklist.md`. Lifecycle: draft.
-- **L0-002** `method/complementary/controlled-delivery/controlled-delivery-index-integration.md` — informational/non-operational/keep — *NO ACTION RECOMMENDED*
-  - Réserve cartographie : Pass Authority: informational — no-explicit-normative-authority. Scope: general. Ref: `method/complementary/controlled-delivery/controlled-delivery-index-integration.md`. Lifecycle
-- **L0-003** `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md` — informational/non-operational/keep — *NO ACTION RECOMMENDED*
-  - Réserve cartographie : Pass Authority: informational — no-explicit-normative-authority. Scope: general. Ref: `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md`. Lifecycle: dr
-- **L0-004** `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md` — informational/non-operational/keep — *NO ACTION RECOMMENDED*
-  - Réserve cartographie : Pass Authority: informational — no-explicit-normative-authority. Scope: general. Ref: `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md`. Lifec
-- **L0-005** `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md` — informational/non-operational/keep — *NO ACTION RECOMMENDED*
-  - Réserve cartographie : Pass Authority: informational — no-explicit-normative-authority. Scope: general. Ref: `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md`.
-- **L0-006** `method/complementary/controlled-delivery/controlled-delivery-publication-package.md` — informational/non-operational/keep — *NO ACTION RECOMMENDED*
-  - Réserve cartographie : Pass Authority: informational — no-explicit-normative-authority. Scope: general. Ref: `method/complementary/controlled-delivery/controlled-delivery-publication-package.md`. Lifecyc
-- **L0-007** `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md` — informational/non-operational/keep — *NO ACTION RECOMMENDED*
-  - Réserve cartographie : Pass Authority: informational — no-explicit-normative-authority. Scope: general. Ref: `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md`. Lifecycle:
-- **L0-008** `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md` — informational/non-operational/keep — *NO ACTION RECOMMENDED*
-  - Réserve cartographie : Pass Authority: informational — no-explicit-normative-authority. Scope: general. Ref: `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md`. 
-- **L0-009** `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md` — informational/non-operational/keep — *NO ACTION RECOMMENDED*
-  - Réserve cartographie : Pass Authority: informational — no-explicit-normative-authority. Scope: general. Ref: `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md`. Lifecycle:
-- **L0-011** `method/complementary/controlled-delivery/controlled-delivery-template.md` — informational/non-operational/keep — *NO ACTION RECOMMENDED*
-  - Réserve cartographie : Pass Authority: informational — no-explicit-normative-authority. Scope: general. Ref: `method/complementary/controlled-delivery/controlled-delivery-template.md`. Lifecycle: draft. 
-- **L0-062** `method/sfia-fast-track/documentation/notion-publication-plan.md` — informational/non-operational/keep — *NO ACTION RECOMMENDED*
-  - Réserve cartographie : Pass Authority: informational — documentation-plan-or-report. Scope: method-documentation. Ref: `method/sfia-fast-track/documentation/notion-publication-plan.md`. Lifecycle: valida
-- **L0-063** `method/sfia-fast-track/documentation/notion-target-content-map.md` — informational/non-operational/keep — *NO ACTION RECOMMENDED*
-  - Réserve cartographie : Pass Authority: informational — documentation-plan-or-report. Scope: method-documentation. Ref: `method/sfia-fast-track/documentation/notion-target-content-map.md`. Lifecycle: cand
-
-### M0-F — Usage unknown
-
-**5 usage unknown** (3 checklists + 2 canonical comptés aussi en M0-A).
-
-- **L0-022** `method/sfia-fast-track/checklists/guardrails-checklist.md` — supporting/unknown/keep — *INVESTIGATION REQUIRED*
-  - Réserve cartographie : Pass Authority: supporting — secondary-checklist. Scope: sfia-checklist. Ref: `method/sfia-fast-track/checklists/README.md:L20-L22`. Lifecycle: candidate. Not inferred from usage a
-- **L0-023** `method/sfia-fast-track/checklists/notion-publication-checklist.md` — supporting/unknown/keep — *INVESTIGATION REQUIRED*
-  - Réserve cartographie : Pass Authority: supporting — secondary-checklist. Scope: sfia-checklist. Ref: `method/sfia-fast-track/checklists/README.md:L20-L22`. Lifecycle: candidate. Not inferred from usage a
-- **L0-025** `method/sfia-fast-track/checklists/validation-checklist.md` — supporting/unknown/keep — *INVESTIGATION REQUIRED*
-  - Réserve cartographie : Pass Authority: supporting — secondary-checklist. Scope: sfia-checklist. Ref: `method/sfia-fast-track/checklists/README.md:L20-L22`. Lifecycle: candidate. Not inferred from usage a
-
-### M0-G — Cas à investiguer
-
-Contradictions ou preuves insuffisantes hors paquets prioritaires.
+7 README navigation (M0-DEC-011) + 4 v2.6 candidate refs (M0-DEC-012).
+
+- `method/sfia-fast-track/README.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/audit-rex/README.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/automation/README.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/checklists/README.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/cycles/README.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/documentation/README.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/ui/README.md` — DECIDED BY MORRIS — KEEP
+
+### M0-C — Supporting (split M0-DEC-014)
+
+Keep: controlled-delivery-standard, validation-checklist, v2/v2.5 actifs, figma method. Archive: foundation inventories, Chantiers360 REX, notion design, promotion report, project-plan.
+
+- `method/complementary/controlled-delivery/controlled-delivery-standard.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/checklists/sfia-validation-checklist.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4.1-documentation-status-promotion-report.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- … 3 autres
+
+### M0-D — Archives (execution deferred)
+
+interv360 (6), inventories (9), foundation v1.1 (4), workspace-audit (37) + archives from splits.
+
+- `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/complementary/controlled-delivery/controlled-delivery-publication-package.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/archive/interv360-realization/notion-integration-plan.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/archive/interv360-realization/realization-checklists.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/archive/interv360-realization/realization-deliverables-standard.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/archive/interv360-realization/realization-method.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/archive/interv360-realization/realization-prompt-family.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/archive/interv360-realization/realization-templates.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/checklists/notion-publication-checklist.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/checklists/validation-checklist.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- … 61 autres
+
+### M0-E — Informational (split M0-DEC-015)
+
+Archive: Notion plans + CD publication-only. Keep: CD checklist, template, prompt-family, index-integration.
+
+- `method/complementary/controlled-delivery/controlled-delivery-checklist.md` — DECIDED BY MORRIS — KEEP
+- `method/complementary/controlled-delivery/controlled-delivery-index-integration.md` — DECIDED BY MORRIS — KEEP
+- `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md` — DECIDED BY MORRIS — KEEP
+- `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/complementary/controlled-delivery/controlled-delivery-publication-package.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/complementary/controlled-delivery/controlled-delivery-template.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/documentation/notion-publication-plan.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/documentation/notion-target-content-map.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+
+### M0-F — Usage unknown (resolved)
+
+guardrails → keep/non-operational; notion-publication → archive; validation → archive superseded.
+
+- `method/sfia-fast-track/checklists/guardrails-checklist.md` — DECIDED BY MORRIS — KEEP
+- `method/sfia-fast-track/checklists/notion-publication-checklist.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+- `method/sfia-fast-track/checklists/validation-checklist.md` — DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED
+
+### M0-G — Investigate
+
+**Volume exclusif = 0.**
 
 
 ---
 
-## 9. Matrice décisionnelle exhaustive (103 fichiers)
-
-| ID | Path | Trajectory | Lifecycle | Auth | Usage | Disp CSV | Incoming | Risk | Gate | Paquet | Recommandation | Statut | Action future |
-|----|------|------------|-----------|------|-------|----------|----------|------|------|--------|----------------|--------|---------------|
-| L0-001 | `…controlled-delivery/controlled-delivery-checklist.md` | SFIA v2.4 | draft | informational | non-operational | keep | 6 | low | no | M0-E | Documentation-only clarification; defer structural change | NO ACTION RECOMMENDED | Conditional Morris |
-| L0-002 | `…ed-delivery/controlled-delivery-index-integration.md` | SFIA v2.4 | candidate | informational | non-operational | keep | 0 | low | no | M0-E | Documentation-only clarification; defer structural change | NO ACTION RECOMMENDED | Conditional Morris |
-| L0-003 | `…rolled-delivery/controlled-delivery-prompt-family.md` | SFIA v2.4 | draft | informational | non-operational | keep | 6 | low | no | M0-E | Documentation-only clarification; defer structural change | NO ACTION RECOMMENDED | Conditional Morris |
-| L0-004 | `…elivery/controlled-delivery-publication-checklist.md` | SFIA v2.4 | candidate | informational | non-operational | keep | 3 | low | no | M0-E | Documentation-only clarification; defer structural change | NO ACTION RECOMMENDED | Conditional Morris |
-| L0-005 | `…y/controlled-delivery-publication-package-summary.md` | SFIA v2.4 | validated | informational | non-operational | keep | 1 | low | no | M0-E | Documentation-only clarification; defer structural change | NO ACTION RECOMMENDED | Conditional Morris |
-| L0-006 | `…-delivery/controlled-delivery-publication-package.md` | SFIA v2.4 | candidate | informational | non-operational | keep | 2 | low | no | M0-E | Documentation-only clarification; defer structural change | NO ACTION RECOMMENDED | Conditional Morris |
-| L0-007 | `…led-delivery/controlled-delivery-publication-prep.md` | SFIA v2.4 | candidate | informational | non-operational | keep | 2 | low | no | M0-E | Documentation-only clarification; defer structural change | NO ACTION RECOMMENDED | Conditional Morris |
-| L0-008 | `…ry/controlled-delivery-standard-hardening-summary.md` | SFIA v2.4 | validated | informational | non-operational | keep | 3 | low | no | M0-E | Documentation-only clarification; defer structural change | NO ACTION RECOMMENDED | Conditional Morris |
-| L0-009 | `…led-delivery/controlled-delivery-standard-summary.md` | SFIA v2.4 | validated | informational | non-operational | keep | 4 | low | no | M0-E | Documentation-only clarification; defer structural change | NO ACTION RECOMMENDED | Conditional Morris |
-| L0-010 | `…/controlled-delivery/controlled-delivery-standard.md` | SFIA v2.4 | draft | supporting | non-operational | keep | 8 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-011 | `…/controlled-delivery/controlled-delivery-template.md` | SFIA v2.4 | draft | informational | non-operational | keep | 6 | low | no | M0-E | Documentation-only clarification; defer structural change | NO ACTION RECOMMENDED | Conditional Morris |
-| L0-012 | `method/sfia-fast-track/README.md` | SFIA v2.4 | candidate | reference | non-operational | keep | 0 | low | no | M0-B | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-013 | `…ive/interv360-realization/notion-integration-plan.md` | SFIA v2.4 | archived | informational | non-operational | archive | 1 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-014 | `…hive/interv360-realization/realization-checklists.md` | SFIA v2.4 | archived | informational | non-operational | archive | 5 | low | no | M0-D | Archive candidate — 5 incoming ref(s); verify breakage befor | INVESTIGATION REQUIRED | Conditional Morris |
-| L0-015 | `…360-realization/realization-deliverables-standard.md` | SFIA v2.4 | archived | informational | non-operational | archive | 6 | low | no | M0-D | Archive candidate — 6 incoming ref(s); verify breakage befor | INVESTIGATION REQUIRED | Conditional Morris |
-| L0-016 | `…/archive/interv360-realization/realization-method.md` | SFIA v2.4 | archived | informational | non-operational | archive | 6 | low | no | M0-D | Archive candidate — 6 incoming ref(s); verify breakage befor | INVESTIGATION REQUIRED | Conditional Morris |
-| L0-017 | `…e/interv360-realization/realization-prompt-family.md` | SFIA v2.4 | archived | informational | non-operational | archive | 5 | low | no | M0-D | Archive candidate — 5 incoming ref(s); verify breakage befor | INVESTIGATION REQUIRED | Conditional Morris |
-| L0-018 | `…chive/interv360-realization/realization-templates.md` | SFIA v2.4 | archived | informational | non-operational | archive | 5 | low | no | M0-D | Archive candidate — 5 incoming ref(s); verify breakage befor | INVESTIGATION REQUIRED | Conditional Morris |
-| L0-019 | `method/sfia-fast-track/audit-rex/README.md` | SFIA v2.4 | candidate | reference | non-operational | keep | 0 | low | no | M0-B | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-020 | `method/sfia-fast-track/automation/README.md` | SFIA v2.4 | candidate | reference | non-operational | keep | 0 | low | no | M0-B | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-021 | `method/sfia-fast-track/checklists/README.md` | SFIA v2.4 | candidate | reference | non-operational | keep | 0 | low | no | M0-B | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-022 | `…d/sfia-fast-track/checklists/guardrails-checklist.md` | SFIA v2.4 | candidate | supporting | unknown | keep | 1 | low | no | M0-F | Resolve usage evidence (operational / non-operational / main | INVESTIGATION REQUIRED | Conditional Morris |
-| L0-023 | `…ast-track/checklists/notion-publication-checklist.md` | SFIA v2.4 | candidate | supporting | unknown | keep | 1 | low | no | M0-F | Resolve usage evidence (operational / non-operational / main | INVESTIGATION REQUIRED | Conditional Morris |
-| L0-024 | `…a-fast-track/checklists/sfia-validation-checklist.md` | SFIA v2.4 | validated | supporting | operational | keep | 2 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-025 | `…d/sfia-fast-track/checklists/validation-checklist.md` | SFIA v2.4 | candidate | supporting | unknown | keep | 1 | low | no | M0-F | Resolve usage evidence (operational / non-operational / main | INVESTIGATION REQUIRED | Conditional Morris |
-| L0-026 | `…st-track/core/sfia-chatgpt-cursor-operating-model.md` | SFIA v2.4 | validated | canonical | unknown | keep | 4 | low | yes | M0-A | Resolve usage evidence (operational / non-operational / main | INVESTIGATION REQUIRED | Conditional Morris |
-| L0-027 | `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | SFIA v2.4 | validated | canonical | non-operational | keep | 3 | low | yes | M0-A | Confirm canonical qualification from frozen cartography — no | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-028 | `…od/sfia-fast-track/core/sfia-rules-and-guardrails.md` | SFIA v2.4 | validated | canonical | unknown | keep | 3 | low | yes | M0-A | Resolve usage evidence (operational / non-operational / main | INVESTIGATION REQUIRED | Conditional Morris |
-| L0-029 | `method/sfia-fast-track/cycles/README.md` | SFIA v2.4 | candidate | reference | non-operational | keep | 0 | low | no | M0-B | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-030 | `method/sfia-fast-track/documentation/README.md` | SFIA v2.4 | candidate | reference | non-operational | keep | 0 | low | no | M0-B | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-031 | `…/foundation-documents/foundation-candidate-files.txt` | SFIA v1.1 | archived | supporting | non-operational | archive | 0 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-032 | `…n/foundation-documents/foundation-priority-files.txt` | SFIA v1.1 | archived | supporting | non-operational | archive | 0 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-033 | `…ion-documents/sfia-foundation-documents-inventory.md` | SFIA v1.1 | validated | supporting | non-operational | keep | 2 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-034 | `…talization/foundation-documents/v1.1-audit/README.md` | SFIA v1.1 | archived | reference | non-operational | archive | 0 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-035 | `…lization/foundation-documents/v1.1-closure/README.md` | SFIA v1.1 | archived | reference | non-operational | archive | 0 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-036 | `…/v1.1-closure/sfia-foundation-v1.1-closure-status.md` | SFIA v1.1 | validated | supporting | non-operational | keep | 4 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-037 | `….1-closure/sfia-foundation-v1.1-post-merge-status.md` | SFIA v1.1 | archived | supporting | non-operational | archive | 1 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-038 | `…-inputs/sfia-v1.1-capitalization-inputs-inventory.md` | SFIA v1.1 | validated | supporting | non-operational | keep | 1 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-039 | `…ts/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md` | SFIA v1.1 | validated | supporting | non-operational | keep | 0 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-040 | `….1-planning/sfia-foundation-v1.1-evolution-matrix.md` | SFIA v1.1 | archived | supporting | non-operational | archive | 4 | low | no | M0-D | Archive candidate — 4 incoming ref(s); verify breakage befor | INVESTIGATION REQUIRED | Conditional Morris |
-| L0-041 | `…lization/inventory-complementary-methods.md-list.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-042 | `…/capitalization/inventory-interv360-docs.md-list.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-043 | `…n/capitalization/inventory-platform-docs.md-list.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-044 | `…italization/inventory-platform-templates.md-list.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-045 | `…ation/capitalization/inventory-practices.md-list.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-046 | `…ntation/capitalization/inventory-prompts.md-list.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-047 | `…capitalization/inventory-sfia-fast-track.md-list.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | low | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-048 | `…07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` | SFIA v2.5 | candidate | supporting | non-operational | keep | 1 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-049 | `…a-v2.5-chantiers360-post-mvp-capitalization-close.md` | SFIA v2.5 | candidate | supporting | non-operational | keep | 1 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-050 | `…26-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md` | SFIA v2.5 | candidate | supporting | non-operational | keep | 0 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-051 | `…6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md` | SFIA v2.6 | candidate | supporting | non-operational | keep | 0 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-052 | `…6/2026-07-11-sfia-v2.6-repository-read-only-audit.md` | SFIA v2.6 | candidate | supporting | non-operational | keep | 0 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-053 | `…026-07-11-sfia-v2.6-repository-standard-decisions.md` | SFIA v2.6 | candidate | reference | non-operational | keep | 1 | low | no | M0-B | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-054 | `…26-07-11-sfia-v2.6-repository-standard-principles.md` | SFIA v2.6 | candidate | reference | non-operational | keep | 0 | low | no | M0-B | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-055 | `…zation/sfia-v2/sfia-v2-method-versioning-standard.md` | SFIA v2.4 | validated | supporting | operational | keep | 2 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-056 | `…alization/sfia-v2/sfia-v2-pilot-selection-scoring.md` | SFIA v2.4 | candidate | supporting | non-operational | keep | 1 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-057 | `…-v2.4-consolidation-operating-efficiency-standard.md` | SFIA v2.4 | validated | supporting | operational | keep | 4 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-058 | `…sfia-v2.4.1-documentation-status-promotion-report.md` | SFIA v2.4 | candidate | supporting | non-operational | keep | 0 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-059 | `…sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` | SFIA v2.5 | candidate | supporting | non-operational | keep | 2 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-060 | `…ion/capitalization/sfia-v2/sfia-v2.5-project-plan.md` | SFIA v2.5 | candidate | supporting | non-operational | keep | 2 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-061 | `…on/sfia-v2/sfia-v2.5-source-routing-map-candidate.md` | SFIA v2.5 | candidate | supporting | non-operational | keep | 0 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-062 | `…-fast-track/documentation/notion-publication-plan.md` | SFIA v2.4 | validated | informational | non-operational | keep | 3 | low | no | M0-E | Documentation-only clarification; defer structural change | NO ACTION RECOMMENDED | Conditional Morris |
-| L0-063 | `…ast-track/documentation/notion-target-content-map.md` | SFIA v2.4 | candidate | informational | non-operational | keep | 1 | low | no | M0-E | Documentation-only clarification; defer structural change | NO ACTION RECOMMENDED | Conditional Morris |
-| L0-064 | `…ion/notion/sfia-notion-provisioning-engine-design.md` | SFIA v2.4 | candidate | supporting | non-operational | keep | 1 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-065 | `…inal-architecture-review/final-directory-map-all.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-066 | `…l-architecture-review/final-directory-map-depth3.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-067 | `…audit/final-architecture-review/final-docs-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-068 | `…it/final-architecture-review/final-exports-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-069 | `…/final-architecture-review/final-interv360-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-070 | `…t/final-architecture-review/final-markdown-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-071 | `…dit/final-architecture-review/final-method-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-072 | `…it/final-architecture-review/final-prompts-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-073 | `…udit/final-architecture-review/final-tools-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-074 | `…on/workspace-audit/interv360/interv360-all-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-075 | `…orkspace-audit/interv360/interv360-directory-map.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-076 | `…orkspace-audit/interv360/interv360-folder-volume.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-077 | `…rkspace-audit/interv360/interv360-markdown-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-078 | `…mentation/workspace-audit/post-cleanup-all-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-079 | `…tion/workspace-audit/post-cleanup-markdown-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-080 | `…mentation/workspace-audit/pr-81-post-merge-status.md` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-081 | `…umentation/workspace-audit/pre-cleanup-all-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-082 | `…workspace-audit/pre-cleanup-directory-map-depth2.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-083 | `…workspace-audit/pre-cleanup-directory-map-depth4.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-084 | `…mentation/workspace-audit/pre-cleanup-docs-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-085 | `…ation/workspace-audit/pre-cleanup-markdown-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-086 | `…ntation/workspace-audit/pre-cleanup-method-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-087 | `…tation/workspace-audit/pre-cleanup-methods-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-088 | `…ation/workspace-audit/pre-cleanup-projects-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-089 | `…tation/workspace-audit/pre-cleanup-scripts-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-090 | `…rkspace-audit/pre-cleanup-sfia-notion-sync-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-091 | `…tation/workspace-audit/round-2/directory-map-all.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-092 | `…ion/workspace-audit/round-2/directory-map-depth3.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-093 | `…documentation/workspace-audit/round-2/docs-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-094 | `…umentation/workspace-audit/round-2/exports-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-095 | `…entation/workspace-audit/round-2/interv360-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-096 | `…ation/workspace-audit/round-2/markdown-files-all.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-097 | `…cumentation/workspace-audit/round-2/method-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-098 | `…umentation/workspace-audit/round-2/methods-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-099 | `…kspace-audit/round-2/post-round-2-markdown-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-100 | `…umentation/workspace-audit/round-2/prompts-files.txt` | SFIA v2.4 | archived | supporting | non-operational | archive | 0 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-101 | `…ion/workspace-audit/sfia-workspace-migration-plan.md` | SFIA v2.4 | archived | supporting | non-operational | archive | 1 | medium | no | M0-D | Confirm archive candidate or recommend keep — proposal only | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-102 | `method/sfia-fast-track/ui/README.md` | SFIA v2.4 | candidate | reference | non-operational | keep | 0 | low | no | M0-B | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
-| L0-103 | `…d/sfia-fast-track/ui/figma-design-first-ui-method.md` | SFIA v2.4 | validated | supporting | non-operational | keep | 1 | low | no | M0-C | Confirm structurant keep — no physical action until Morris G | READY FOR MORRIS DECISION | Conditional Morris |
+## 5. Matrice décisionnelle exhaustive (103 fichiers)
+
+| ID | Path | Auth | Usage | Disp CSV | Morris decision | Statut | Action future |
+|----|------|------|-------|----------|-----------------|--------|---------------|
+| L0-001 | `…olled-delivery/controlled-delivery-checklist.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — KEEP (Controlled Deli | DECIDED BY MORRIS — KEEP | No physical action |
+| L0-002 | `…livery/controlled-delivery-index-integration.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — KEEP (Controlled Deli | DECIDED BY MORRIS — KEEP | No physical action |
+| L0-003 | `…d-delivery/controlled-delivery-prompt-family.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — KEEP (Controlled Deli | DECIDED BY MORRIS — KEEP | No physical action |
+| L0-004 | `…ry/controlled-delivery-publication-checklist.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-005 | `…trolled-delivery-publication-package-summary.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-006 | `…very/controlled-delivery-publication-package.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-007 | `…elivery/controlled-delivery-publication-prep.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-008 | `…ntrolled-delivery-standard-hardening-summary.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-009 | `…elivery/controlled-delivery-standard-summary.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-010 | `…rolled-delivery/controlled-delivery-standard.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — KEEP CONFIRMED | DECIDED BY MORRIS — KEEP | No physical action |
+| L0-011 | `…rolled-delivery/controlled-delivery-template.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — KEEP (Controlled Deli | DECIDED BY MORRIS — KEEP | No physical action |
+| L0-012 | `method/sfia-fast-track/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
+| L0-013 | `…nterv360-realization/notion-integration-plan.md` | informational | non-operational | archive | M0-DEC-007 ARCHIVE CONFIRMED — HISTORICA | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Update incoming refs before physical arc |
+| L0-014 | `…interv360-realization/realization-checklists.md` | informational | non-operational | archive | M0-DEC-007 ARCHIVE CONFIRMED — HISTORICA | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Update incoming refs before physical arc |
+| L0-015 | `…ealization/realization-deliverables-standard.md` | informational | non-operational | archive | M0-DEC-007 ARCHIVE CONFIRMED — HISTORICA | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Update incoming refs before physical arc |
+| L0-016 | `…ive/interv360-realization/realization-method.md` | informational | non-operational | archive | M0-DEC-007 ARCHIVE CONFIRMED — HISTORICA | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Update incoming refs before physical arc |
+| L0-017 | `…erv360-realization/realization-prompt-family.md` | informational | non-operational | archive | M0-DEC-007 ARCHIVE CONFIRMED — HISTORICA | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Update incoming refs before physical arc |
+| L0-018 | `…/interv360-realization/realization-templates.md` | informational | non-operational | archive | M0-DEC-007 ARCHIVE CONFIRMED — HISTORICA | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Update incoming refs before physical arc |
+| L0-019 | `method/sfia-fast-track/audit-rex/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
+| L0-020 | `method/sfia-fast-track/automation/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
+| L0-021 | `method/sfia-fast-track/checklists/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
+| L0-022 | `…a-fast-track/checklists/guardrails-checklist.md` | supporting | unknown | keep | M0-DEC-004 KEEP CONFIRMED — USAGE NON-OP | DECIDED BY MORRIS — KEEP | No physical action |
+| L0-023 | `…rack/checklists/notion-publication-checklist.md` | supporting | unknown | keep | M0-DEC-005 ARCHIVE APPROVED BY MORRIS —  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive + ref control (future |
+| L0-024 | `…t-track/checklists/sfia-validation-checklist.md` | supporting | operational | keep | M0-DEC-013 KEEP CONFIRMED — OPERATIONAL  | DECIDED BY MORRIS — KEEP | No physical action |
+| L0-025 | `…a-fast-track/checklists/validation-checklist.md` | supporting | unknown | keep | M0-DEC-006 ARCHIVE APPROVED — SUPERSEDED | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Archive + redirect refs to sfia-validati |
+| L0-026 | `…ack/core/sfia-chatgpt-cursor-operating-model.md` | canonical | unknown | keep | M0-DEC-001/002/003 CANONICAL CONFIRMED B | DECIDED BY MORRIS — CANONICAL KEEP | No physical action — qualification only |
+| L0-027 | `…fia-fast-track/core/sfia-cycle-routing-guide.md` | canonical | non-operational | keep | M0-DEC-001/002/003 CANONICAL CONFIRMED B | DECIDED BY MORRIS — CANONICAL KEEP | No physical action — qualification only |
+| L0-028 | `…ia-fast-track/core/sfia-rules-and-guardrails.md` | canonical | unknown | keep | M0-DEC-001/002/003 CANONICAL CONFIRMED B | DECIDED BY MORRIS — CANONICAL KEEP | No physical action — qualification only |
+| L0-029 | `method/sfia-fast-track/cycles/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
+| L0-030 | `method/sfia-fast-track/documentation/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
+| L0-031 | `…dation-documents/foundation-candidate-files.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-032 | `…ndation-documents/foundation-priority-files.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-033 | `…ocuments/sfia-foundation-documents-inventory.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-034 | `…ation/foundation-documents/v1.1-audit/README.md` | reference | non-operational | archive | M0-DEC-009 ARCHIVE APPROVED — HISTORICAL | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive after ref update |
+| L0-035 | `…ion/foundation-documents/v1.1-closure/README.md` | reference | non-operational | archive | M0-DEC-009 ARCHIVE APPROVED — HISTORICAL | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive after ref update |
+| L0-036 | `…-closure/sfia-foundation-v1.1-closure-status.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-037 | `…osure/sfia-foundation-v1.1-post-merge-status.md` | supporting | non-operational | archive | M0-DEC-009 ARCHIVE APPROVED — HISTORICAL | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive after ref update |
+| L0-038 | `…ts/sfia-v1.1-capitalization-inputs-inventory.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-039 | `….1-inputs/sfia-v1.1-foundation-impact-matrix.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-040 | `…anning/sfia-foundation-v1.1-evolution-matrix.md` | supporting | non-operational | archive | M0-DEC-009 ARCHIVE APPROVED — HISTORICAL | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive after ref update |
+| L0-041 | `…ion/inventory-complementary-methods.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-042 | `…talization/inventory-interv360-docs.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-043 | `…italization/inventory-platform-docs.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-044 | `…zation/inventory-platform-templates.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-045 | `…/capitalization/inventory-practices.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-046 | `…on/capitalization/inventory-prompts.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-047 | `…alization/inventory-sfia-fast-track.md-list.txt` | supporting | non-operational | archive | M0-DEC-008 ARCHIVE APPROVED — TEMPORARY  | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-048 | `…-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-049 | `…5-chantiers360-post-mvp-capitalization-close.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-050 | `…-11-sfia-v2.5-review-handoff-routing-fix-rex.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-051 | `…6-07-11-sfia-v2.6-repository-cleanup-framing.md` | supporting | non-operational | keep | M0-DEC-012 KEEP CONFIRMED — SFIA v2.6 CA | DECIDED BY MORRIS — KEEP | No baseline promotion |
+| L0-052 | `…6-07-11-sfia-v2.6-repository-read-only-audit.md` | supporting | non-operational | keep | M0-DEC-012 KEEP CONFIRMED — SFIA v2.6 CA | DECIDED BY MORRIS — KEEP | No baseline promotion |
+| L0-053 | `…7-11-sfia-v2.6-repository-standard-decisions.md` | reference | non-operational | keep | M0-DEC-012 KEEP CONFIRMED — SFIA v2.6 CA | DECIDED BY MORRIS — KEEP | No baseline promotion |
+| L0-054 | `…-11-sfia-v2.6-repository-standard-principles.md` | reference | non-operational | keep | M0-DEC-012 KEEP CONFIRMED — SFIA v2.6 CA | DECIDED BY MORRIS — KEEP | No baseline promotion |
+| L0-055 | `…n/sfia-v2/sfia-v2-method-versioning-standard.md` | supporting | operational | keep | M0-DEC-013 KEEP CONFIRMED — OPERATIONAL  | DECIDED BY MORRIS — KEEP | No physical action |
+| L0-056 | `…tion/sfia-v2/sfia-v2-pilot-selection-scoring.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — KEEP CONFIRMED | DECIDED BY MORRIS — KEEP | No physical action |
+| L0-057 | `…-consolidation-operating-efficiency-standard.md` | supporting | operational | keep | M0-DEC-013 KEEP CONFIRMED — OPERATIONAL  | DECIDED BY MORRIS — KEEP | No physical action |
+| L0-058 | `…v2.4.1-documentation-status-promotion-report.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-059 | `…v2/sfia-v2.5-project-cycles-method-candidate.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — KEEP CONFIRMED | DECIDED BY MORRIS — KEEP | No physical action |
+| L0-060 | `…apitalization/sfia-v2/sfia-v2.5-project-plan.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-061 | `…ia-v2/sfia-v2.5-source-routing-map-candidate.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — KEEP CONFIRMED | DECIDED BY MORRIS — KEEP | No physical action |
+| L0-062 | `…-track/documentation/notion-publication-plan.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-063 | `…rack/documentation/notion-target-content-map.md` | informational | non-operational | keep | M0-DEC-015 SPLIT — ARCHIVE APPROVED (Not | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-064 | `…otion/sfia-notion-provisioning-engine-design.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — ARCHIVE APPROVED — EX | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive (future) |
+| L0-065 | `…architecture-review/final-directory-map-all.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-066 | `…hitecture-review/final-directory-map-depth3.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-067 | `…/final-architecture-review/final-docs-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-068 | `…nal-architecture-review/final-exports-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-069 | `…l-architecture-review/final-interv360-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-070 | `…al-architecture-review/final-markdown-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-071 | `…inal-architecture-review/final-method-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-072 | `…nal-architecture-review/final-prompts-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-073 | `…final-architecture-review/final-tools-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-074 | `…rkspace-audit/interv360/interv360-all-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-075 | `…ace-audit/interv360/interv360-directory-map.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-076 | `…ace-audit/interv360/interv360-folder-volume.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-077 | `…ce-audit/interv360/interv360-markdown-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-078 | `…tion/workspace-audit/post-cleanup-all-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-079 | `…workspace-audit/post-cleanup-markdown-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-080 | `…tion/workspace-audit/pr-81-post-merge-status.md` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-081 | `…ation/workspace-audit/pre-cleanup-all-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-082 | `…pace-audit/pre-cleanup-directory-map-depth2.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-083 | `…pace-audit/pre-cleanup-directory-map-depth4.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-084 | `…tion/workspace-audit/pre-cleanup-docs-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-085 | `…/workspace-audit/pre-cleanup-markdown-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-086 | `…on/workspace-audit/pre-cleanup-method-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-087 | `…n/workspace-audit/pre-cleanup-methods-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-088 | `…/workspace-audit/pre-cleanup-projects-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-089 | `…n/workspace-audit/pre-cleanup-scripts-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-090 | `…ce-audit/pre-cleanup-sfia-notion-sync-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-091 | `…n/workspace-audit/round-2/directory-map-all.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-092 | `…orkspace-audit/round-2/directory-map-depth3.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-093 | `…entation/workspace-audit/round-2/docs-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-094 | `…ation/workspace-audit/round-2/exports-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-095 | `…ion/workspace-audit/round-2/interv360-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-096 | `…/workspace-audit/round-2/markdown-files-all.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-097 | `…tation/workspace-audit/round-2/method-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-098 | `…ation/workspace-audit/round-2/methods-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-099 | `…e-audit/round-2/post-round-2-markdown-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-100 | `…ation/workspace-audit/round-2/prompts-files.txt` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-101 | `…orkspace-audit/sfia-workspace-migration-plan.md` | supporting | non-operational | archive | M0-DEC-010 ARCHIVE APPROVED — LEGACY AUD | DECIDED BY MORRIS — ARCHIVE EXECUTION DEFERRED | Reversible archive; verify incoming ref |
+| L0-102 | `method/sfia-fast-track/ui/README.md` | reference | non-operational | keep | M0-DEC-011 KEEP CONFIRMED — CORE NAVIGAT | DECIDED BY MORRIS — KEEP | Metadata/link alignment in future Lot A |
+| L0-103 | `…a-fast-track/ui/figma-design-first-ui-method.md` | supporting | non-operational | keep | M0-DEC-014 SPLIT — KEEP CONFIRMED | DECIDED BY MORRIS — KEEP | No physical action |
 
 ---
 
-## 10. Morris Decision Board
+## 6. Morris Decision Board (decisions recorded)
 
-**15 décisions atomiques — toutes PENDING**
+### M0-DEC-001 — Canonical — operating-model
 
-### M0-DEC-001 — Canonical qualification — `sfia-chatgpt-cursor-operating-model.md`
+**Décision Morris :** **CANONICAL CONFIRMED BY MORRIS**
+
+**Justification :** Fichier pivot modèle opératoire ChatGPT ↔ Cursor
+
+**Observation :** authority=canonical; usage=unknown in cartography; disposition=keep CSV
 
 **Fichiers (1):**
 - `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
 
-**Observation :** Cartography frozen authority=canonical; usage=unknown; lifecycle=validated; trajectory=SFIA v2.4. Reserve: Direct Usage Review: unknown (consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof). Consumer: `method/sfia-fast-track/core/sfia-rule
+**Action future :** Aucune action physique
+**Gate :** Critical
+
+### M0-DEC-002 — Canonical — routing-guide
 
-**Option A :** Confirm canonical (maintain frozen cartography qualification)
-**Option B :** Require investigation / challenge canonical (Morris only — no auto-downgrade)
-**Recommandation Cursor :** Confirm canonical after usage investigation if unknown
-**Impacts :** Conditions Lot A core stabilization; all SFIA cycles reference chain
-**Dette potentielle :** Downgrade without replacement creates normative gap
-**Action la plus simple :** Resolve usage evidence first
-**Gate :** Critical — Morris
+**Décision Morris :** **CANONICAL CONFIRMED BY MORRIS**
 
-**Décision Morris :** **PENDING**
+**Justification :** Fichier pivot routage cycles, profils, blocs, gates
 
-### M0-DEC-002 — Canonical qualification — `sfia-cycle-routing-guide.md`
+**Observation :** authority=canonical; usage=non-operational
 
 **Fichiers (1):**
 - `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
 
-**Observation :** Cartography frozen authority=canonical; usage=non-operational; lifecycle=validated; trajectory=SFIA v2.4. Reserve: Usage Graph Review: non-operational (inactive-consumer) — consumer `docs/tooling/mcp/sfia-mcp-v2-architecture.md`, edge=v3-mcp-trajectory. Checks: v3-
+**Action future :** Aucune action physique
+**Gate :** Critical
 
-**Option A :** Confirm canonical (maintain frozen cartography qualification)
-**Option B :** Require investigation / challenge canonical (Morris only — no auto-downgrade)
-**Recommandation Cursor :** Confirm canonical as frozen cartography states
-**Impacts :** Conditions Lot A core stabilization; all SFIA cycles reference chain
-**Dette potentielle :** Downgrade without replacement creates normative gap
-**Action la plus simple :** No action until Morris decision
-**Gate :** Critical — Morris
+### M0-DEC-003 — Canonical — rules-and-guardrails
 
-**Décision Morris :** **PENDING**
+**Décision Morris :** **CANONICAL CONFIRMED BY MORRIS**
 
-### M0-DEC-003 — Canonical qualification — `sfia-rules-and-guardrails.md`
+**Justification :** Fichier pivot règles, interdits, gates, garde-fous
+
+**Observation :** authority=canonical; usage=unknown in cartography
 
 **Fichiers (1):**
 - `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
 
-**Observation :** Cartography frozen authority=canonical; usage=unknown; lifecycle=validated; trajectory=SFIA v2.4. Reserve: Direct Usage Review: unknown (consumer-activity-undemonstrated:consumer-in-D-needs-own-direct-proof). Consumer: `method/sfia-fast-track/automation/sfi
+**Action future :** Aucune action physique
+**Gate :** Critical
+
+### M0-DEC-004 — Usage — guardrails-checklist
 
-**Option A :** Confirm canonical (maintain frozen cartography qualification)
-**Option B :** Require investigation / challenge canonical (Morris only — no auto-downgrade)
-**Recommandation Cursor :** Confirm canonical after usage investigation if unknown
-**Impacts :** Conditions Lot A core stabilization; all SFIA cycles reference chain
-**Dette potentielle :** Downgrade without replacement creates normative gap
-**Action la plus simple :** Resolve usage evidence first
-**Gate :** Critical — Morris
+**Décision Morris :** **KEEP CONFIRMED — USAGE NON-OPERATIONAL**
 
-**Décision Morris :** **PENDING**
+**Justification :** Checklist référence secondaire sans usage opérationnel direct prouvé
 
-### M0-DEC-004 — Usage unknown — `guardrails-checklist.md`
+**Observation :** usage=unknown → Morris: non-operational
 
 **Fichiers (1):**
 - `method/sfia-fast-track/checklists/guardrails-checklist.md`
 
-**Observation :** Usage=unknown; authority=supporting; disposition=keep. Checklist may be referenced by active cycles.
+**Action future :** Aucune action physique
+**Gate :** Morris
+
+### M0-DEC-005 — Usage — notion-publication-checklist
 
-**Option A :** Requalify operational (if direct active consumer proven)
-**Option B :** Requalify non-operational (if reference-only / template)
-**Recommandation Cursor :** Investigate — insufficient direct usage proof in cartography pass
-**Impacts :** Affects operational vs documentation-only treatment in future lots
-**Dette potentielle :** Misclassification affects test/gate requirements
-**Action la plus simple :** Documentation clarification if non-operational
-**Gate :** Morris — before irreversible migration
+**Décision Morris :** **ARCHIVE APPROVED BY MORRIS — EXECUTION DEFERRED**
 
-**Décision Morris :** **PENDING**
+**Justification :** Publication/sync Notion — Notion sorti de la méthodologie
 
-### M0-DEC-005 — Usage unknown — `notion-publication-checklist.md`
+**Observation :** Notion hors stratégie SFIA
 
 **Fichiers (1):**
 - `method/sfia-fast-track/checklists/notion-publication-checklist.md`
 
-**Observation :** Usage=unknown; authority=supporting; disposition=keep. Checklist may be referenced by active cycles.
+**Action future :** Archivage réversible + contrôle refs
+**Gate :** Morris
+
+### M0-DEC-006 — Usage — validation-checklist (superseded)
 
-**Option A :** Requalify operational (if direct active consumer proven)
-**Option B :** Requalify non-operational (if reference-only / template)
-**Recommandation Cursor :** Investigate — insufficient direct usage proof in cartography pass
-**Impacts :** Affects operational vs documentation-only treatment in future lots
-**Dette potentielle :** Misclassification affects test/gate requirements
-**Action la plus simple :** Documentation clarification if non-operational
-**Gate :** Morris — before irreversible migration
+**Décision Morris :** **ARCHIVE APPROVED — SUPERSEDED — EXECUTION DEFERRED**
 
-**Décision Morris :** **PENDING**
+**Justification :** Ancienne checklist générique remplacée par SFIA v1.2
 
-### M0-DEC-006 — Usage unknown — `validation-checklist.md`
+**Observation :** Remplaçant: sfia-validation-checklist.md
 
 **Fichiers (1):**
 - `method/sfia-fast-track/checklists/validation-checklist.md`
 
-**Observation :** Usage=unknown; authority=supporting; disposition=keep. Checklist may be referenced by active cycles.
+**Action future :** Archivage réversible + redirection refs
+**Gate :** Morris
+
+### M0-DEC-007 — Cluster interv360-realization (6)
 
-**Option A :** Requalify operational (if direct active consumer proven)
-**Option B :** Requalify non-operational (if reference-only / template)
-**Recommandation Cursor :** Investigate — insufficient direct usage proof in cartography pass
-**Impacts :** Affects operational vs documentation-only treatment in future lots
-**Dette potentielle :** Misclassification affects test/gate requirements
-**Action la plus simple :** Documentation clarification if non-operational
-**Gate :** Morris — before irreversible migration
+**Décision Morris :** **ARCHIVE CONFIRMED — HISTORICAL INTERV360 — REFERENCES TO UPDATE**
 
-**Décision Morris :** **PENDING**
+**Justification :** Capitalisation pré-réalisation remplacée par cycles actuels
 
-### M0-DEC-007 — Interv360 realization archive cluster (6 files)
+**Observation :** Zone archive; refs entrantes 4-6 par fichier
 
 **Fichiers (6):**
 - `method/sfia-fast-track/archive/interv360-realization/notion-integration-plan.md`
@@ -538,44 +385,36 @@ Contradictions ou preuves insuffisantes hors paquets prioritaires.
 - `method/sfia-fast-track/archive/interv360-realization/realization-prompt-family.md`
 - `method/sfia-fast-track/archive/interv360-realization/realization-templates.md`
 
-**Observation :** 6 files proposed_disposition=archive. Superseded realization standards in method/archive; multiple incoming refs (4-6 each). Max incoming refs: 6.
-
-**Option A :** Confirm archive candidate for cluster (6 files) — reversible archive path
-**Option B :** Recommend keep / investigate — defer archive
-**Recommandation Cursor :** Investigate incoming refs
-**Impacts :** Future Lot 0 execution + reference updates in same PR if archived
-**Dette potentielle :** Archive without ref update breaks navigation
-**Action la plus simple :** Investigate refs before archive
+**Action future :** MAJ refs entrantes avant archive physique
 **Gate :** Morris Critical
 
-**Décision Morris :** **PENDING**
+### M0-DEC-008 — Inventaires temporaires (9)
+
+**Décision Morris :** **ARCHIVE APPROVED — TEMPORARY INVENTORIES SUPERSEDED**
+
+**Justification :** Listes temporaires de capitalisation
 
-### M0-DEC-008 — Remaining archive candidates
+**Observation :** Inventaires sans refs entrantes; remplacés par cartographie v2.6
 
 **Fichiers (9):**
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-candidate-files.txt`
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/foundation-priority-files.txt`
 - `method/sfia-fast-track/documentation/capitalization/inventory-complementary-methods.md-list.txt`
 - `method/sfia-fast-track/documentation/capitalization/inventory-interv360-docs.md-list.txt`
 - `method/sfia-fast-track/documentation/capitalization/inventory-platform-docs.md-list.txt`
 - `method/sfia-fast-track/documentation/capitalization/inventory-platform-templates.md-list.txt`
 - `method/sfia-fast-track/documentation/capitalization/inventory-practices.md-list.txt`
 - `method/sfia-fast-track/documentation/capitalization/inventory-prompts.md-list.txt`
-- … et 1 autres
+- … et 3 autres
+
+**Action future :** Archivage réversible
+**Gate :** Morris
 
-**Observation :** 9 files proposed_disposition=archive. Mixed F09 audit/capitalization archives v2.4 trajectory. Max incoming refs: 0.
+### M0-DEC-009 — Foundation v1.1 historical (4)
 
-**Option A :** Confirm archive candidate for cluster (9 files) — reversible archive path
-**Option B :** Recommend keep / investigate — defer archive
-**Recommandation Cursor :** Confirm archive candidate if replacements documented
-**Impacts :** Future Lot 0 execution + reference updates in same PR if archived
-**Dette potentielle :** Archive without ref update breaks navigation
-**Action la plus simple :** Reversible archive after ref audit
-**Gate :** Morris Critical
+**Décision Morris :** **ARCHIVE APPROVED — HISTORICAL FOUNDATION v1.1**
 
-**Décision Morris :** **PENDING**
+**Justification :** Documents de clôture baseline terminée
 
-### M0-DEC-009 — Foundation v1.1 archive cluster
+**Observation :** Clôture/planification baseline historique v1.1
 
 **Fichiers (4):**
 - `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/README.md`
@@ -583,19 +422,16 @@ Contradictions ou preuves insuffisantes hors paquets prioritaires.
 - `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-post-merge-status.md`
 - `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md`
 
-**Observation :** 4 files proposed_disposition=archive. Historical foundation closure/planning docs; trajectory v1.1/v2.4; reference role historical. Max incoming refs: 4.
+**Action future :** Archivage réversible après MAJ refs
+**Gate :** Morris
+
+### M0-DEC-010 — Workspace-audit legacy (37)
 
-**Option A :** Confirm archive candidate for cluster (4 files) — reversible archive path
-**Option B :** Recommend keep / investigate — defer archive
-**Recommandation Cursor :** Investigate incoming refs
-**Impacts :** Future Lot 0 execution + reference updates in same PR if archived
-**Dette potentielle :** Archive without ref update breaks navigation
-**Action la plus simple :** Investigate refs before archive
-**Gate :** Morris Critical
+**Décision Morris :** **ARCHIVE APPROVED — LEGACY AUDIT SNAPSHOTS**
 
-**Décision Morris :** **PENDING**
+**Justification :** Remplacés par cartographie v2.6
 
-### M0-DEC-010 — Workspace audit legacy plans
+**Observation :** Snapshots arborescence et plans antérieurs
 
 **Fichiers (37):**
 - `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-directory-map-all.txt`
@@ -604,23 +440,18 @@ Contradictions ou preuves insuffisantes hors paquets prioritaires.
 - `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-exports-files.txt`
 - `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-interv360-files.txt`
 - `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-markdown-files.txt`
-- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-method-files.txt`
-- `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/final-prompts-files.txt`
-- … et 29 autres
-
-**Observation :** 37 files proposed_disposition=archive. Pre-v2.6 migration/structure plans; historical input not current standard. Max incoming refs: 1.
-
-**Option A :** Confirm archive candidate for cluster (37 files) — reversible archive path
-**Option B :** Recommend keep / investigate — defer archive
-**Recommandation Cursor :** Confirm archive candidate if replacements documented
-**Impacts :** Future Lot 0 execution + reference updates in same PR if archived
-**Dette potentielle :** Archive without ref update breaks navigation
-**Action la plus simple :** Reversible archive after ref audit
-**Gate :** Morris Critical
+- … et 31 autres
 
-**Décision Morris :** **PENDING**
+**Action future :** Archivage réversible; 1 ref entrante à vérifier
+**Gate :** Morris
+
+### M0-DEC-011 — 7 README navigation (sur 9 reference)
+
+**Décision Morris :** **KEEP CONFIRMED — CORE NAVIGATION REFERENCES**
 
-### M0-DEC-011 — Core reference README index (method/sfia-fast-track)
+**Justification :** Points d'entrée zones méthode
+
+**Observation :** 7 README navigation parmi 9 authority=reference; 2 références v2.6 → M0-DEC-012
 
 **Fichiers (7):**
 - `method/sfia-fast-track/README.md`
@@ -629,21 +460,18 @@ Contradictions ou preuves insuffisantes hors paquets prioritaires.
 - `method/sfia-fast-track/checklists/README.md`
 - `method/sfia-fast-track/cycles/README.md`
 - `method/sfia-fast-track/documentation/README.md`
-- `method/sfia-fast-track/ui/README.md`
+- … et 1 autres
 
-**Observation :** 9 reference files; mostly README navigation indexes for method zones.
+**Action future :** Alignement métadonnées future Lot A
+**Gate :** Morris
+
+### M0-DEC-012 — SFIA v2.6 candidate references (4)
 
-**Option A :** Confirm keep as core reference (Lot A alignment)
-**Option B :** Consolidate / reduce index duplication
-**Recommandation Cursor :** Confirm keep — active navigation for method zones
-**Impacts :** Lot A stabilization depends on reference clarity
-**Dette potentielle :** Duplicate indexes create ChatGPT routing confusion
-**Action la plus simple :** Keep with metadata clarification
-**Gate :** Morris — before Lot A
+**Décision Morris :** **KEEP CONFIRMED — SFIA v2.6 CANDIDATE REFERENCES**
 
-**Décision Morris :** **PENDING**
+**Justification :** Documents structurants trajectoire candidate
 
-### M0-DEC-012 — SFIA v2.6 standard documents (principles + decisions)
+**Observation :** Trajectoire candidate v2.6 — pas baseline
 
 **Fichiers (4):**
 - `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md`
@@ -651,188 +479,106 @@ Contradictions ou preuves insuffisantes hors paquets prioritaires.
 - `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-decisions.md`
 - `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md`
 
-**Observation :** Candidate v2.6 standard artifacts; reference authority; keep proposed; not baseline.
-
-**Option A :** Confirm keep as candidate reference (no baseline promotion)
-**Option B :** Defer / investigate scope overlap with cartography deliverables
-**Recommandation Cursor :** Confirm keep — structural for v2.6 candidate trajectory
-**Impacts :** Must not auto-promote v2.6 baseline
-**Dette potentielle :** Overlap with cartography report if not clarified
-**Action la plus simple :** Keep — documentation only
+**Action future :** Aucune promotion baseline
 **Gate :** Morris Critical
 
-**Décision Morris :** **PENDING**
+### M0-DEC-013 — Operational supporting (3)
 
-### M0-DEC-013 — Operational supporting documents (3 files)
+**Décision Morris :** **KEEP CONFIRMED — OPERATIONAL SUPPORTING DOCUMENTS**
+
+**Justification :** Preuves usage opérationnel
+
+**Observation :** usage=operational; supporting
 
 **Fichiers (3):**
 - `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
 - `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md`
 - `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
 
-**Observation :** Only 3 operational files in Lot 0; supporting; keep proposed; active method references.
-
-**Option A :** Confirm keep with enhanced ref tracking in future PR
-**Option B :** Requalify usage / investigate
-**Recommandation Cursor :** Confirm keep — operational evidence in cartography
-**Impacts :** Future migrations require same-PR ref updates
-**Dette potentielle :** Low if keep confirmed
-**Action la plus simple :** Keep — no move until Morris
+**Action future :** Aucune action physique
 **Gate :** Morris
 
-**Décision Morris :** **PENDING**
+### M0-DEC-014 — Supporting batch SPLIT (5 keep / 10 archive)
 
-### M0-DEC-014 — Supporting structurants keep batch (20 files)
+**Décision Morris :** **SPLIT APPROVED BY MORRIS**
 
-**Fichiers (20):**
+**Justification :** Keep: standards/méthode actifs; Archive: clôtures, inventaires foundation, Chantiers360 REX, Notion design, promotion report
+
+**Observation :** Paquet initial 20+ supporting scindé par Morris
+
+**Fichiers (15):**
 - `method/complementary/controlled-delivery/controlled-delivery-standard.md`
-- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md`
+- `method/sfia-fast-track/ui/figma-design-first-ui-method.md`
 - `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md`
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md`
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
-- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md`
-- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`
-- `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md`
-- … et 12 autres
-
-**Observation :** Supporting authority; keep proposed; includes checklists, automation docs, standards fragments.
-
-**Option A :** Confirm keep batch (20 files) — no physical action
-**Option B :** Split — investigate individual exceptions
-**Recommandation Cursor :** Confirm keep batch pending per-file review in ChatGPT cycle
-**Impacts :** Scattered across method zones; future Lot A/H alignment
-**Dette potentielle :** Partial keep creates inconsistency
-**Action la plus simple :** Batch confirm after ChatGPT review
+- … et 9 autres
+
+**Action future :** Exécution différée pour archives
 **Gate :** Morris
 
-**Décision Morris :** **PENDING**
+### M0-DEC-015 — Informational batch SPLIT (4 keep / 8 archive)
+
+**Décision Morris :** **SPLIT APPROVED BY MORRIS**
+
+**Justification :** Archive: Notion plans + CD publication-only/summaries; Keep: CD checklist/template/prompt-family/index
 
-### M0-DEC-015 — Informational keep — no structural action (12 files)
+**Observation :** Notion hors stratégie; Controlled Delivery relu
 
 **Fichiers (12):**
 - `method/complementary/controlled-delivery/controlled-delivery-checklist.md`
 - `method/complementary/controlled-delivery/controlled-delivery-index-integration.md`
 - `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md`
+- `method/complementary/controlled-delivery/controlled-delivery-template.md`
 - `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md`
 - `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md`
-- `method/complementary/controlled-delivery/controlled-delivery-publication-package.md`
-- `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md`
-- `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md`
-- … et 4 autres
-
-**Observation :** Informational authority; keep proposed; lowest structural risk.
-
-**Option A :** No action — maintain cartography proposal
-**Option B :** Investigate select files for archive candidacy
-**Recommandation Cursor :** No action recommended now
-**Impacts :** Minimal
-**Dette potentielle :** None if deferred
-**Action la plus simple :** No action
-**Gate :** Morris optional
-
-**Décision Morris :** **PENDING**
-
----
-
-## 11. Dépendances
-
-| Lot futur | Décisions Lot 0 préalables |
-|-----------|---------------------------|
-| **Lot A** | M0-DEC canonical trio + core reference README |
-| **Lot C** | Aucun fichier v3 dans Lot 0 |
-| **Archives non-v3** | M0-D clusters (56 fichiers) |
-| **Lot F** | Superseded hors Lot 0 tag — N/A direct |
-| **Lot J** | Aucun delete-candidate dans Lot 0 |
-
----
-
-## 12. Risques
-
-| Risque | Niveau | Mitigation |
-|--------|--------|------------|
-| Promotion canonical implicite | High | Morris per-file canonical decisions |
-| Archive sans ref update | High | Investigate incoming refs (interv360 cluster) |
-| Usage unknown (5) | Medium | M0-F + 2 canonical avant action |
-| Confusion merge cartographie = GO migration | High | Statut explicite migrations not started |
-| v2.6 → baseline | High | SFIA v2.4 remains baseline |
+- … et 6 autres
 
----
-
-## 13. Dette
-
-- 56 archive proposals non exécutées — dette documentaire/historique
-- Indexes README multiples (M0-B) — dette navigation
-- Legacy plans (workspace-audit, structure-target) — dette plans non réconciliés
-
----
-
-## 14. Simplicité (priorité)
-
-1. **No action** — 12 fichiers NO ACTION RECOMMENDED
-2. **Clarification documentaire** — informational keep
-3. **Archivage réversible** — après décision Morris + ref audit
-4. **Déplacement/renommage** — hors Lot 0
-5. **Suppression** — interdit sans Lot J gate
-
----
-
-## 15. Réversibilité
-
-| Action future | Réversibilité |
-|---------------|---------------|
-| Keep confirmé | N/A — no change |
-| Archive Morris GO | `git revert` + mapping |
-| Canonical confirm | Qualification only — no file move |
-
----
-
-## 16. Séquence future proposée (sans exécution)
-
-1. Morris tranche M0-DEC canonical (3) + usage unknown (5)
-2. Morris tranche archive clusters (M0-D) — par cluster
-3. Morris tranche core reference + supporting batch
-4. Informational keep — no action batch
-5. **Then** — Lot A eligibility review (separate GO)
+**Action future :** Exécution différée pour archives
+**Gate :** Morris
 
 ---
 
-## 17. Décisions Morris pending
+## 7. PR Readiness — PR #166
 
-| Métrique | Valeur |
-|----------|--------:|
-| Decision board items | **15** |
-| READY FOR MORRIS DECISION | **80** |
-| INVESTIGATION REQUIRED | **11** |
-| NO ACTION RECOMMENDED | **12** |
+| Contrôle | Résultat |
+|----------|----------|
+| Fichiers PR (documentaires) | 4 deliverables |
+| CSV modifié | **non** |
+| 103 fichiers Lot 0 modifiés | **non** |
+| Décisions Morris tracées | **15/15** |
+| PENDING injustifié | **0** |
+| Migrations | **not started** |
+| Verdict readiness | **READY FOR MORRIS MERGE DECISION** |
 
 ---
 
-## 18. Garde-fous
+## 8. Garde-fous
 
-- Merge cartographie PR #165 **≠** GO migration
-- Cycle Lot 0 **≠** migration
-- **Aucun fichier modifié** — 103 read-only
-- **CSV frozen** — aucune dimension gelée modifiée
-- **SFIA v2.4 = baseline** — **SFIA v2.6 = candidate**
-- **SFIA v3 hors trajectoire** — non réactivé
-- `proposed_disposition=archive` = **proposition candidate** uniquement
-- `authority=canonical` = **qualification cartographie** — pas promotion
+- Merge cartographie PR #165 ≠ GO migration
+- Décisions archive ≠ exécution archive
+- **CSV frozen** — aucune dimension modifiée
+- **SFIA v2.4 baseline** — **SFIA v2.6 candidate**
+- Lots A–J **not started**
 
 ---
 
-## 19. Verdict
+## 9. Verdict
 
-**LOT 0 QUALIFICATION COMPLETE — MORRIS DECISIONS REQUIRED**
+**LOT 0 MORRIS DECISIONS RECORDED**
 
 | Contrôle | Résultat |
 |----------|----------|
-| Lot 0 scope | **103/103 validated** |
-| CSV unchanged | **yes** |
-| Structural decisions | **none taken** |
-| Decision packages | **prepared** |
-| Migrations | **not started** |
-| Lots A–J | **not started** |
+| Fichiers Lot 0 | **103/103** |
+| Canonical confirmed | **3/3** |
+| Keep confirmed | **27** |
+| Archive approved (deferred) | **76** |
+| Investigation remaining | **0** |
+| Physical migration | **none** |
+
+**READY FOR MORRIS MERGE DECISION** — PR #166 — **not merged**
 
 ---
 
-*Qualification candidate — Morris décide — aucune exécution physique.*
\ No newline at end of file
+*Décisions Morris enregistrées — exécution différée — Morris décide le merge PR #166.*
\ No newline at end of file
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
index 84df05d..0bf9b60 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
@@ -1305,19 +1305,21 @@ Recalcul CSV validé contre rapport §2, §6, §19 et plan §3–§16 :
 
 ---
 
-## 21. Lot 0 Qualification — Opened
+## 21. Lot 0 Qualification — Decisions Recorded
 
-**Horodatage :** 2026-07-11 21:35 Europe/Paris
+**Horodatage :** 2026-07-12 04:30 Europe/Paris
 **Branche :** `audit/sfia-v2.6-lot-0-qualification`
-**HEAD de départ :** `f9dda424647474917fd4831b431766ef1f1813d4`
+**HEAD initial qualification :** `148fe441f42f1d1fc0825bdc5fc88c4f19b943ab`
 **Périmètre :** **103** fichiers `migration_lot_candidate = lot-0`
-**Qualification :** read-only — **103/103 fichiers lus sur main**
-**Rapport :** `2026-07-11-sfia-v2.6-lot-0-qualification.md`
-**Paquets :** M0-A à M0-G préparés
-**Décisions Morris :** **PENDING** — aucune décision structurante prise
+**Rapport :** `2026-07-11-sfia-v2.6-lot-0-qualification.md` — **décisions Morris enregistrées**
+**Décisions :** M0-DEC-001 à 015 — **15/15 recorded** — **0 PENDING**
+**Canonical :** **3/3 confirmed** — aucun changement physique
+**Keep :** **27** | **Archive approved (deferred) :** **76**
+**Qualification ≠ exécution** — archive decisions **not executed**
 **CSV :** frozen — SHA `00a6902f…` inchangé
 **Migrations :** not started
 **Lots A–J :** not started
+**Prochaine étape :** PR #166 readiness → merge Morris decision
 
 ---
 
@@ -1343,4 +1345,4 @@ Recalcul CSV validé contre rapport §2, §6, §19 et plan §3–§16 :
 
 ---
 
-*Cartographie candidate — **CARTOGRAPHY CONTRACT FROZEN** — **USAGE / AUTHORITY / LIFECYCLE FROZEN** — PR #165 **merged** — **Lot 0 Qualification opened** — SFIA v2.4 **baseline** — SFIA v2.6 **candidate**.*
+*Cartographie candidate — **CARTOGRAPHY CONTRACT FROZEN** — PR #165 **merged** — **Lot 0 Morris decisions recorded** — SFIA v2.4 **baseline** — SFIA v2.6 **candidate**.*
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index 335449d..85cbf29 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -73,16 +73,21 @@ Cartographie finale (PR #165)
 | **Gate** | Critical — Morris |
 | **Règle** | Lot 0 tranche ; exécution répartie vers A/C/archive/autres lots |
 
-### Statut qualification (ouvert)
+### Statut qualification
 
 | Élément | Statut |
 |---------|--------|
-| **Qualification cycle** | **Opened** — 2026-07-11 |
+| **Qualification cycle** | **Decisions recorded** — 2026-07-12 |
 | **Fichiers under review** | **103** |
-| **Decision packages** | M0-A à M0-G — prepared |
+| **Morris decisions** | **15/15 recorded** — M0-DEC-001 à 015 |
+| **Canonical trio** | **3/3 confirmed** — no physical change |
+| **Keep confirmed** | **27** |
+| **Archive approved** | **76** — **execution deferred** |
+| **Investigations remaining** | **0** |
 | **Rapport** | `2026-07-11-sfia-v2.6-lot-0-qualification.md` |
 | **Migration exécutée** | **non** |
-| **Next gate** | **Morris decisions** |
+| **Next gate** | **PR #166 merge decision by Morris** |
+| **Lot A** | **not started** |
 
 ---
 
@@ -311,4 +316,4 @@ Les clarifications des lots (Lot 0, Lot F, Lot G, Lot D, sous-lots) sont intégr
 
 ---
 
-*Plan candidate — **CARTOGRAPHY CONTRACT FROZEN** — **USAGE / AUTHORITY / LIFECYCLE FROZEN** — PR Readiness **completed** — **MERGE PENDING MORRIS DECISION**.*
+*Plan candidate — **Lot 0 decisions recorded** — archive execution **deferred** — **MERGE PR #166 pending Morris**.*

```

---

## Instruction ChatGPT

Lot 0 decisions recorded. Verify 15/15, 0 PENDING, CSV SHA, PR #166 open. Morris merge decision requires separate GO.

# 05 — Plan de preuves et non-régression

| Champ | Valeur |
|-------|--------|
| **Document** | `05-evidence-and-non-regression-plan.md` |
| **Statut** | `CATALOGUED — O2 CAMPAIGN EXECUTED ON PRIORITY IDS — NO PRODUCT TESTS FOR F11/F13 FINAL` |
| **Date initiale** | 2026-07-28 20:36:49 CEST (+0200) |
| **Date MAJ O2** | 2026-07-28 20:54:03 CEST (+0200) |

---

## 1. Catalogue (statuts après O2)

| ID | Surface | Preuve attendue | Méthode | Auto? | Niveau | Gate | Statut **avant** | Statut **après O2** |
|----|---------|-----------------|---------|-------|--------|------|------------------|---------------------|
| E-MM-01 | MethodMode | inventaire modes | relecture | partiel | L1 | F03 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-MM-02 | MethodMode | tests D1 select | foundation | oui | L3 | prep | PARTIAL | `PARTIAL — EVIDENCED` (tests verts) |
| E-MM-03 | MethodMode | hold flag | probe absence | oui | L1 | SC-04 | MISSING | `MISSING — EVIDENCED` (absence confirmée) |
| E-D1-01 | D1 | import boundary | import-boundaries | oui | L3 | W1-D04 | SATISFIED (boundary) | `SATISFIED — EVIDENCED` (boundary only) |
| E-D1-02 | D1 | shared provider | resolveProvider + probe | non | L1–L2 | W1-D04 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-CP-01 | Canon | digest stable | loader/canonicalEngine | oui | L1–L3 | P03/P04 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-CP-02 | Consommateurs | map consumers | probe consumers | partiel | L1 | W1-D02 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-CP-03 | Consommateurs | no-fallback produit | probe OA + loader deny | oui | L4 | P08 | MISSING | `PARTIAL — EVIDENCED` |
| E-OPS-01 | OPS1 | allowlist deny-default | allowlist tests | oui | L3 | P10 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-OPS-02 | OPS1 | path-policy deny method | asymmetry probe | oui | L3 | P10 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-OPS-03 | OPS1 | no-cross-call | isolation probe static | oui | L1–L5 | W1-D04 | UNKNOWN | `PARTIAL — EVIDENCED` |
| E-OPS-04 | OPS1 | e2e I1–I6 | non exécutés ce cycle | oui | L5 | prep | PARTIAL | `PARTIAL — EVIDENCED` (inchangé — non rejoués) |
| E-OPS-05 | OPS1 | hits allowlist method/ | probe hits | partiel | L1–L3 | W1-D04 | UNKNOWN | `NO LOCAL HITS — LIMITED EVIDENCE` |
| E-F11-01 | F11.2 | contrat API | absence route prouvée | non | L0–L1 | F11 | MISSING | `MISSING — EVIDENCED` (absence) |
| E-F11-02 | F11.2 | audit lecture | — | oui | L4 | F11 | MISSING | `MISSING — EVIDENCED` |
| E-F11-03 | F11.2 | deny-write | — | oui | L3 | F11 | MISSING | `MISSING — EVIDENCED` |
| E-F13-01 | F13.4 | Git archive | packs | oui | L1 | F13 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-F13-02 | F13.4 | vue RO | absence module | oui | L1 | F13 | MISSING | `MISSING — EVIDENCED` (absence) |
| E-F13-03 | F13.4 | journal accès | — | oui | L4 | F13 | MISSING | `MISSING — EVIDENCED` |
| E-PER-01 | Persistence | volumes | probe + métriques RO | non | L1 | F10 | UNKNOWN | `LOCAL VOLUME EVIDENCE COLLECTED — PRODUCTION UNKNOWN` |
| E-IAM-01 | IAM | modèle | — | non | L0 | F10 | NOT SELECTED | `NOT SELECTED` |
| E-AUD-01 | Audit OA | journal durable | — | partiel | L2–L5 | P23 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-OBS-01 | Observabilité | health réel | absence readiness | oui | L1 | F11 | MISSING | `MISSING — EVIDENCED` (absence) |
| E-CI-01 | CI | import boundary | tests | oui | L4 | P24 | PARTIAL | `PARTIAL — EVIDENCED` |
| E-RB-01 | Rollback | R0 revert | Git | oui | L1 | pack | SATISFIED | `SATISFIED — EVIDENCED` |
| E-RB-02 | Rollback | R1–R3 drills | — | partiel | L5 | SC-06 | MISSING | `MISSING — EVIDENCED` |

---

## 2. Anti-claims

- campagne O2 ≠ F11/F13 implémentés ;
- PARTIAL E-OPS-03 ≠ runtime live exhaustif ;
- volumes locaux ≠ production ;
- catalogue mis à jour ≠ preuves cutover.

---

## 3. Verdict section

`EVIDENCE CATALOGUE UPDATED AFTER O2 — PRIORITY UNKNOWN/PARTIAL IDS ADVANCED — F11/F13 FINAL STILL MISSING — NO PRODUCT IMPLEMENTATION`


---

## LOT 1 UPDATE

| ID | Après lot 1 |
|----|-------------|
| E-MM-03 | `PARTIAL — EVIDENCED` — hold implémenté (défaut actif) |
| E-F11-01 | `PARTIAL — EVIDENCED` — contrat interne read-only |
| E-F13-02 | `PARTIAL — EVIDENCED` — fondation RO bornée (≠ vue finale) |
| E-OBS-01 | `PARTIAL — EVIDENCED` — health SIMULATED exposé |

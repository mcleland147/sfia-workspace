# 05 — Plan de preuves et non-régression

| Champ | Valeur |
|-------|--------|
| **Document** | `05-evidence-and-non-regression-plan.md` |
| **Statut** | `CATALOGUED — NOT EXECUTED — NO TESTS WRITTEN` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **Niveaux L0–L5** | L0 doc · L1 static Git · L2 contrat · L3 unit · L4 integration · L5 E2E/runtime/RUN |

---

## 1. Catalogue

| ID | Surface | Preuve attendue | Méthode future | Automatisable ? | Niveau | Gate | Statut actuel |
|----|---------|-----------------|----------------|-----------------|--------|------|---------------|
| E-MM-01 | MethodMode | inventaire modes + actions | relecture `types.ts` / `actions.ts` | partiel | L1 | F03 / W1 | `PARTIAL — EVIDENCED` |
| E-MM-02 | MethodMode | tests D1 select + optimistic lock | réutiliser `project-foundation.test.ts` | oui | L3 | prep | `PARTIAL — EVIDENCED` |
| E-MM-03 | MethodMode | hold flag empêche retrait prématuré | design + test futur | oui | L3–L4 | SC-04 | `MISSING — EVIDENCED` |
| E-D1-01 | D1 | import boundary D1↛OPS1 | `import-boundaries.test.ts` | oui | L3 | W1-D04 | `SATISFIED — EVIDENCED` (boundary only) |
| E-D1-02 | D1 | shared provider ≠ identité OPS1 | review `resolveProvider.ts` | non | L1–L2 | W1-D04 | `PARTIAL — EVIDENCED` |
| E-CP-01 | Trio/canon | `SFIA_CANONICAL_CORE_PATHS` stable + digest | `sourceLoader` digest | oui | L1–L3 | P03/P04 | `PARTIAL — EVIDENCED` |
| E-CP-02 | Consommateurs | map prompts / OPS1 wrapper / CT | inventaire Wave 1 + grep | partiel | L1 | W1-D02 | `PARTIAL — EVIDENCED` |
| E-CP-03 | Consommateurs | no-fallback produit vers method hors allowlist | CI grep + runtime | oui | L4–L5 | P08 | `MISSING — EVIDENCED` |
| E-OPS-01 | OPS1 | allowlist deny-by-default | `allowlistEvaluation.test.ts` | oui | L3 | P10 | `PARTIAL — EVIDENCED` |
| E-OPS-02 | OPS1 | path-policy CT deny method | tests pathPolicy | oui | L3 | P10 | `PARTIAL — EVIDENCED` |
| E-OPS-03 | OPS1 | no-cross-call runtime OPS1↔OA | probe / e2e dédié futur | oui | L5 | W1-D04 | `UNKNOWN — EVIDENCE REQUIRED` |
| E-OPS-04 | OPS1 | e2e I1–I6 non régressés | `ops1-i*.spec.ts` | oui | L5 | prep | `PARTIAL — EVIDENCED` |
| E-OPS-05 | OPS1 | inventaire hits allowlist `method/` | campagne mesure | partiel | L1–L5 | W1-D04 | `UNKNOWN — EVIDENCE REQUIRED` |
| E-F11-01 | F11.2 API | contrat read MethodMode / deps / migration / health / holds | design OpenAPI-like doc | non (doc) | L0–L2 | F11 | `MISSING — EVIDENCED` |
| E-F11-02 | F11.2 API | audit de lecture | journal + test | oui | L4 | F11 | `MISSING — EVIDENCED` |
| E-F11-03 | F11.2 API | aucune mutation implicite | contract tests deny-write | oui | L3–L4 | F11 | `MISSING — EVIDENCED` |
| E-F13-01 | F13.4 | Git archive vérité | tags/commits packs | oui | L1 | F13 | `PARTIAL — EVIDENCED` |
| E-F13-02 | F13.4 | vue RO bornée + deny mutation | impl + tests futurs | oui | L4–L5 | F13 | `MISSING — EVIDENCED` |
| E-F13-03 | F13.4 | journalisation accès | audit sink durable | oui | L4 | F13 | `MISSING — EVIDENCED` |
| E-PER-01 | Persistence | DB SELECTED + volumes | décision + campagne | non | L0–L1 | F10 | `UNKNOWN — EVIDENCE REQUIRED` |
| E-IAM-01 | IAM | modèle identité | décision F10 | non | L0 | F10 | `NOT SELECTED` |
| E-AUD-01 | Audit OA | journal durable ≠ mémoire | design RUN | partiel | L2–L5 | P23 | `PARTIAL — EVIDENCED` |
| E-OBS-01 | Observabilité | health/readiness réel | endpoint F11.2 | oui | L5 | F11 · P23 | `MISSING — EVIDENCED` |
| E-CI-01 | CI | import boundary required | ruleset / workflow | oui | L4 | P24 | `PARTIAL — EVIDENCED` |
| E-RB-01 | Rollback | R0 revert pack | Git | oui | L1 | ce pack | `SATISFIED — EVIDENCED` (mécanisme) |
| E-RB-02 | Rollback | R1–R3 drills | runbook + exercice | partiel | L5 | SC-06 | `MISSING — EVIDENCED` |

---

## 2. Distinctions de preuves

| Type | Exemples IDs |
|------|--------------|
| Statiques Git | E-MM-01 · E-CP-01 · E-F13-01 · E-RB-01 |
| Contrat | E-F11-01 · E-D1-02 · contrat OPS1 |
| Unitaires | E-MM-02 · E-OPS-01 · E-OPS-02 · E-D1-01 |
| Intégration | E-F11-02 · E-CI-01 |
| E2E | E-OPS-04 |
| Runtime | E-OPS-03 · E-CP-03 · E-OBS-01 |
| Sécurité | E-IAM-01 · E-F11-03 · path-policy≠IAM |
| RUN | E-AUD-01 · E-OBS-01 · E-RB-02 |
| Rollback | E-RB-01 · E-RB-02 |

---

## 3. Tests candidats (non écrits)

| Candidat | Objectif | Niveau |
|----------|----------|--------|
| Contract test F11.2 deny-write | garantir read-only API | L3 |
| Runtime probe OPS1↛OA | compléter import boundaries | L5 |
| RO history mutation deny | F13.4 | L4–L5 |
| Canonical digest pin CI | P04 | L4 |
| Allowlist hit report job | UNKNOWN → evidenced | L1–L5 |

**Ce cycle n’écrit ni n’exécute ces tests.**

---

## 4. Anti-claims

- catalogue ≠ preuves collectées ;
- test existant OPS1 ≠ isolation cutover prouvée ;
- digest loader ≠ cutover loader ;
- health simulé ≠ readiness F11.2.

---

## 5. Verdict section

`EVIDENCE CATALOGUE DEFINED — NOT EXECUTED — CRITICAL RUNTIME AND F11/F13 PROOFS MISSING OR UNKNOWN`

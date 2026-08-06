# Review Pack Full — FinOps Technical Lot T0 PR Readiness

## Meta

| Champ | Valeur |
|---|---|
| Date locale | 2026-08-06 06:38:04 CEST (+0200) |
| Date UTC | 2026-08-06 04:38:04 UTC |
| GO | `GO PR READINESS SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — REVIEW FINOPS TECHNICAL LOT T0` |
| Cycle | PR readiness Critical |
| Verdict | **READY WITH RESERVES** |
| review pack verdict | complete |

## Local Git Truth initiale

Branche delivery puis `pr-readiness/…-t0` @ `8dc54db…` · 0/0 · handoff `0a48727e` / blob `d96fd0ef`.

## Hashes 103–127 (avant modif 103 de ce cycle pour 103 entrant)

103 entrant `cf9989bf…` / 2435 · 104–127 conformes GO · 129 absent.

## Hashes quatorze fichiers

| Fichier | SHA-256 | Lignes |
|---|---|---|
| `projects/sfia-studio/app/lib/oa/finops/domain/types.ts` | `1f27721ddb930257e0491bc901f0de1a230fcaa5fd9b706e42cd40e53b026b09` | 64 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/domain/errors.ts` | `9fcbcc89dad3d1856cbb3ae5245d90d1f09ed71991e760303693c9687dcac498` | 35 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts` | `e27a5b9dce23ae1d2427e1684a17ee8a82ac81db1a3a8064d471200d7ff35b7b` | 130 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/domain/period.ts` | `83bcad8da568c411c49f25ff3e2c6c9c0f17bee4d992dfbc5873beceafae0689` | 67 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts` | `33a288ba238a51f9ec4dc649d7b6d80277d39b541fb76d4c94b9eb79993e4c8e` | 73 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts` | `eb021400549674d86fbdb022e5d7f7e85ca2f69ecb3a60455563d91d6527021c` | 47 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts` | `664b32863e2606a3488b6d5b349e03547736fc3f631b47431bc3148764ec1898` | 69 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/index.ts` | `44008d949a8342b558a37bed755fcda6953a406b906f7a84ecec385ed8c7ccec` | 52 | untracked |
| `projects/sfia-studio/app/__tests__/oa/finops/period.test.ts` | `9d275dfdf8dcb8b5c120670ab1db6ebb9cfd7a49e3fbbedc4cce79d8659de552` | 99 | untracked |
| `projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts` | `8d3bf36c6055792cb8eea53bfe7d7468ff46de739a1d516fd1c48526a3e26be0` | 70 | untracked |
| `projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts` | `8961e132d7d6804074158fa2ce9efbe715e82b6dbbb2e18b37dba76d27b844a2` | 74 | untracked |
| `projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts` | `d19baba0fbaa5ecd06766993c1a7acf4581eef0166f1b2d27e92e826340d9ae4` | 93 | untracked |
| `projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts` | `98a885ca11d6a4de5427abfbcd989161d833ac23dcab1b4933281e1a3f7e3b74` | 76 | untracked |
| `projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts` | `49068a52271e98fbf1de55f17e191182f141a8215b8e1bcdc32102cbaa8ccc8d` | 87 | untracked |

## Tracking state

Tous untracked · aucun staged · aucun tracked modified produit.

## T0 incremental delta / Local Project State / Future Commit Candidate

Voir document 128 §§12–15. **MORRIS PACKAGING DECISION REQUIRED.**

## Document 128 complet

SHA-256: `a92327a04d7457c1b053ff56eb68ef80d6f587e9f2ca20873d9ddce686a1ec4c` · Lines: 1028

```markdown
# SFIA Studio — Assistant SFIA natif OpenAI —
FinOps Technical Lot T0 —
PR Readiness

## 1. Statut et verdict

**FINOPS TECHNICAL LOT T0 PR READINESS REVIEWED —**
**CRITICAL REVIEW COMPLETED —**
**T0 INCREMENTAL DELTA VERIFIED —**
**DOCUMENT 126 COMPLIANCE VERIFIED WITH RESERVES —**
**FINOPS DECISIONS COMPLIANCE VERIFIED —**
**PUBLIC API REVIEWED —**
**UTC PERIOD RULES REVIEWED —**
**SOURCE-OF-TRUTH AND EVIDENCE RULES REVIEWED —**
**BLOCKING ELIGIBILITY REVIEWED —**
**UNKNOWN HANDLING REVIEWED —**
**IMPORT BOUNDARIES REVIEWED —**
**TARGETED TESTS PASSED —**
**TYPECHECK PASSED —**
**LINT PASSED —**
**FULL TEST SUITE PASSED —**
**NO BLOCKER —**
**READY WITH RESERVES —**
**MORRIS RESERVE ACCEPTANCE / PACKAGING DECISION REQUIRED BEFORE PUBLICATION —**
**NO COMMIT, PUSH, PR OR MERGE PERFORMED —**
**T1 TO T7 NOT AUTHORIZED —**
**TB-04-04 NOT DONE —**
**LOT-D1 NOT AUTHORIZED**

**Verdict unique :** `READY WITH RESERVES`

---

## 2. Anti-claims

| Anti-claim | Statut |
|---|---|
| PR readiness revue ≠ commit autorisé | vrai |
| READY WITH RESERVES ≠ push autorisé | vrai |
| READY WITH RESERVES ≠ PR créée | vrai |
| Finding identifié ≠ correction autorisée | vrai |
| Gate publication candidate ≠ gate consommée | vrai |
| Tests verts ≠ absence de réserve | vrai |
| T0 local ≠ contrôle FinOps actif | vrai |

---

## 3. Autorité Morris

Morris est l’unique autorité. Cursor a produit une revue read-only. Aucune mutation produit. Aucune publication projet.

---

## 4. GO exact

```text
GO PR READINESS SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
REVIEW FINOPS TECHNICAL LOT T0
```

---

## 5. Horodatage CEST et UTC

| Instant | Valeur |
|---|---|
| **GO Morris** | 2026-08-06 00:27 CEST (+0200) / 2026-08-05 22:27 UTC (secondes non inventées) |
| **Revue Cursor** | 2026-08-06 06:38:04 CEST (+0200) / 2026-08-06 04:38:04 UTC |

---

## 6. Cycle / profil / typologie

| Champ | Valeur |
|---|---|
| **Type** | 13 — PR readiness |
| **Mode** | Critical PR Readiness Review — FinOps Technical Lot T0 |
| **Profil** | Critical |
| **Typologie** | EVOL / REVIEW |
| **CKC** | candidate/experimental · aucune autorité publication |

---

## 7. Sources

Documents 103, 123, 125, 126, 127 · quatorze fichiers T0 · package/lock · handoff tip `0a48727e…` · méthodes PR readiness / QA / Review Pack depuis Git. Aucune recherche externe.

---

## 8. Local Git Truth initiale

| Champ | Valeur |
|---|---|
| Branche initiale | `delivery/…-finops-technical-lot-t0` |
| Branche revue | `pr-readiness/…-finops-technical-lot-t0` |
| HEAD / main / merge-base | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| Ahead / behind | 0 / 0 |
| Upstream projet | aucun |
| Handoff tip / blob | `0a48727e…` / `d96fd0ef…` |

---

## 9. Handoff entrant

Message : `docs(review-handoff): publish Assistant SFIA FinOps technical lot T0 execution`
Contenu : quatorze fichiers complets · 127 · sections 103 · validations · diff utile · hashes.

---

## 10. Hashes entrants

Documents 103–127 vérifiés byte-identical aux hashes GO (103 modifié ensuite dans ce cycle). Package/lock inchangés. Quatorze fichiers = hashes handoff.

---

## 11. État tracked / untracked

Tous les fichiers T0 et docs 90–127 sont **untracked** vs `origin/main` (`git ls-files` vide pour finops). Aucun fichier staged. Aucun tracked modified produit.

---

## 12. T0 incremental delta

- 14 fichiers produit/tests T0 (CREATE untracked)
- document 103 (MODIFY untracked backlog)
- document 127 (CREATE — byte-identical pendant revue)
- document 128 (CREATE — ce record)

---

## 13. Local Project State

Outre le delta T0 : documents `90`–`126` non trackés (chaîne Assistant OpenAI historique), artefacts `.tmp-sfia-review/**`. Ne pas confondre avec le delta T0.

Nombre docs untracked sous `projects/sfia-studio/*.md` : **38** (avant création 128).

---

## 14. Future Commit Candidate

**Option A — incrémental T0 (candidate technique) :**
14 fichiers finops + 103 + 126 (si pas encore publié) + 127 + 128.

**Option B — package documentaire complet :**
docs `90`–`128` + 14 fichiers T0 (~49k lignes docs) — reviewability difficile.

**Décision :** `MORRIS PACKAGING DECISION REQUIRED` avant tout `git add` / commit / push.

---

## 15. Décision de packaging requise

**Oui.** Bloquante pour commit/push. Non bloquante pour la conformité domaine T0 au pack 126 (avec réserves listées).

---

## 16. Matrice 126 → implémentation

| Exigence 126 | Statut | Note |
|---|---|---|
| 14 fichiers exacts | PASS | |
| 0 produit existant modifié | PASS | |
| provider/persistence independent | PASS | |
| no side effects / env / Date.now | PASS | |
| période UTC month | PASS | |
| start inclusif / end exclusif | PASS | |
| late event occurredAt | PASS | |
| SoT 1–6 | PASS | |
| evidence distinct | PASS | |
| unknown ≠ zero (minimal) | PASS | réserve FIND-03 |
| blocking matrix | PASS | |
| ESTIMATION NEVER BLOCKS | PASS | |
| Money deferred | PASS | |
| tests/typecheck/lint/full | PASS | 6/39 · 0 · 0 · 136/1355 |
| package/lock unchanged | PASS | |
| T1–T7 untouched | PASS | |
| calendar-impossible rejection | RESERVE | FIND-01 |
| canonical month in shape | RESERVE | FIND-02 |

---

## 17. Matrice décisions 123/125 → implémentation

| Décision | Statut T0 |
|---|---|
| SoT hierarchy / ESTIMATION NEVER BLOCKS / unknown≠0 | IMPLEMENTED (domain) |
| E1 / caps / alerts / override | NOT IMPLEMENTED (hors T0) |
| CAP-C / BND-A / ENF-B / ledger / PG | SELECTED doc — NOT IMPLEMENTED |
| PERIOD UTC | IMPLEMENTED domain |
| Feature flag / rollout | NOT IMPLEMENTED |

---

## 18. Inventaire des quatorze fichiers

| Fichier | SHA-256 | Lignes | State |
|---|---|---|---|
| `projects/sfia-studio/app/lib/oa/finops/domain/types.ts` | `1f27721ddb930257e0491bc901f0de1a230fcaa5fd9b706e42cd40e53b026b09` | 64 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/domain/errors.ts` | `9fcbcc89dad3d1856cbb3ae5245d90d1f09ed71991e760303693c9687dcac498` | 35 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts` | `e27a5b9dce23ae1d2427e1684a17ee8a82ac81db1a3a8064d471200d7ff35b7b` | 130 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/domain/period.ts` | `83bcad8da568c411c49f25ff3e2c6c9c0f17bee4d992dfbc5873beceafae0689` | 67 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts` | `33a288ba238a51f9ec4dc649d7b6d80277d39b541fb76d4c94b9eb79993e4c8e` | 73 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts` | `eb021400549674d86fbdb022e5d7f7e85ca2f69ecb3a60455563d91d6527021c` | 47 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts` | `664b32863e2606a3488b6d5b349e03547736fc3f631b47431bc3148764ec1898` | 69 | untracked |
| `projects/sfia-studio/app/lib/oa/finops/index.ts` | `44008d949a8342b558a37bed755fcda6953a406b906f7a84ecec385ed8c7ccec` | 52 | untracked |
| `projects/sfia-studio/app/__tests__/oa/finops/period.test.ts` | `9d275dfdf8dcb8b5c120670ab1db6ebb9cfd7a49e3fbbedc4cce79d8659de552` | 99 | untracked |
| `projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts` | `8d3bf36c6055792cb8eea53bfe7d7468ff46de739a1d516fd1c48526a3e26be0` | 70 | untracked |
| `projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts` | `8961e132d7d6804074158fa2ce9efbe715e82b6dbbb2e18b37dba76d27b844a2` | 74 | untracked |
| `projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts` | `d19baba0fbaa5ecd06766993c1a7acf4581eef0166f1b2d27e92e826340d9ae4` | 93 | untracked |
| `projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts` | `98a885ca11d6a4de5427abfbcd989161d833ac23dcab1b4933281e1a3f7e3b74` | 76 | untracked |
| `projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts` | `49068a52271e98fbf1de55f17e191182f141a8215b8e1bcdc32102cbaa8ccc8d` | 87 | untracked |

---

## 19. Inventaire des symboles

Types · FINOPS_SOT_RANK · FINOPS_SOURCES · errors · invariants (validate*/assert*/require*) · period helpers · SoT helpers · evidence helpers · evaluateBlockingEligibility · ESTIMATION_NEVER_BLOCKS.

---

## 20. API publique prévue (126 §26)

Voir tables types/errors/invariants/period/sourceOfTruth/costEvidence/blockingEligibility du pack 126.

---

## 21. API publique réelle (`index.ts`)

Réexporte tous les symboles §26 listés + support : `FINOPS_SOURCES`, `requireValidIsoTimestamp`, `requireValidFinOpsPeriod`, `createFinOpsError`, `FinOpsDomainError`, types d’erreur/invariant.

---

## 22. Symboles supplémentaires

| Symbole | Classe |
|---|---|
| `FINOPS_SOURCES` | JUSTIFIED SUPPORT SYMBOL |
| `requireValidIsoTimestamp` | JUSTIFIED SUPPORT SYMBOL (public) |
| `requireValidFinOpsPeriod` | JUSTIFIED SUPPORT SYMBOL (public) |
| `createFinOpsError` | REQUIRED (errors.ts) AND EXPORTED |
| Aucun UNPLANNED architectural | — |
| Aucun MISSING §26 core | — |

---

## 23. Revue types

Union fermée SoT/evidence/reasons · readonly · FINOPS_SOT_RANK satisfies Record — PASS.

---

## 24. Revue erreurs

Structured + DomainError · pas de Result générique · pas de secret — PASS.

---

## 25. Revue invariants

Shape + unknown guard + ISO regex Z/offset — PASS avec FIND-01/02/03.

---

## 26. Revue période UTC

computeUtcMonthPeriod déterministe · offset OK · leap 2024 OK · Dec→Jan OK · late event OK — PASS. Overflow calendar — RESERVE FIND-01.

---

## 27. Probes calendaires

```text
PROBE_ROWS
[
  {
    "iso": "2023-02-29T00:00:00.000Z",
    "validate": null,
    "period": {
      "periodStart": "2023-03-01T00:00:00.000Z",
      "periodEnd": "2023-04-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "err": null,
    "Date_parse": 1677628800000
  },
  {
    "iso": "2024-02-29T00:00:00.000Z",
    "validate": null,
    "period": {
      "periodStart": "2024-02-01T00:00:00.000Z",
      "periodEnd": "2024-03-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "err": null,
    "Date_parse": 1709164800000
  },
  {
    "iso": "2026-02-30T00:00:00.000Z",
    "validate": null,
    "period": {
      "periodStart": "2026-03-01T00:00:00.000Z",
      "periodEnd": "2026-04-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "err": null,
    "Date_parse": 1772409600000
  },
  {
    "iso": "2026-04-31T00:00:00.000Z",
    "validate": null,
    "period": {
      "periodStart": "2026-05-01T00:00:00.000Z",
      "periodEnd": "2026-06-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "err": null,
    "Date_parse": 1777593600000
  },
  {
    "iso": "2026-12-31T23:00:00.000-01:00",
    "validate": null,
    "period": {
      "periodStart": "2027-01-01T00:00:00.000Z",
      "periodEnd": "2027-02-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "err": null,
    "Date_parse": 1798761600000
  },
  {
    "iso": "2026-01-01T00:00:00.000+14:00",
    "validate": null,
    "period": {
      "periodStart": "2025-12-01T00:00:00.000Z",
      "periodEnd": "2026-01-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "err": null,
    "Date_parse": 1767175200000
  },
  {
    "iso": "2026-01-01T00:00:00.000",
    "validate": {
      "detailCode": "FINOPS_INVALID_TIMESTAMP",
      "reason": "timestamp_not_iso_instant"
    },
    "period": null,
    "err": "FinOpsDomainError:timestamp_not_iso_instant",
    "Date_parse": 1767222000000
  },
  {
    "iso": "2026-01-01",
    "validate": {
      "detailCode": "FINOPS_INVALID_TIMESTAMP",
      "reason": "timestamp_not_iso_instant"
    },
    "period": null,
    "err": "FinOpsDomainError:timestamp_not_iso_instant",
    "Date_parse": 1767225600000
  }
]
PROBE_PERIODS
[
  {
    "p": {
      "periodStart": "2026-01-01T00:00:00.000Z",
      "periodEnd": "2026-01-15T00:00:00.000Z",
      "timezone": "UTC"
    },
    "shape": null,
    "key": "2026-01",
    "containsStart": true
  },
  {
    "p": {
      "periodStart": "2026-01-01T00:00:00.000Z",
      "periodEnd": "2026-03-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "shape": null,
    "key": "2026-01",
    "containsStart": true
  },
  {
    "p": {
      "periodStart": "2026-01-15T00:00:00.000Z",
      "periodEnd": "2026-02-15T00:00:00.000Z",
      "timezone": "UTC"
    },
    "shape": null,
    "key": "2026-01",
    "containsStart": true
  }
]
PROBE_UNKNOWN
[
  {
    "label": "0",
    "typeof": "number",
    "result": {
      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
      "reason": "unknown_must_not_equal_numeric_zero"
    }
  },
  {
    "label": "-0",
    "typeof": "number",
    "result": {
      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
      "reason": "unknown_must_not_equal_numeric_zero"
    }
  },
  {
    "label": "0",
    "typeof": "bigint",
    "result": {
      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
      "reason": "unknown_must_not_equal_numeric_zero"
    }
  },
  {
    "label": "0",
    "typeof": "string",
    "result": {
      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
      "reason": "unknown_must_not_equal_numeric_zero"
    }
  },
  {
    "label": "0.0",
    "typeof": "string",
    "result": {
      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
      "reason": "unknown_must_not_equal_numeric_zero"
    }
  },
  {
    "label": "0.00",
    "typeof": "string",
    "result": {
      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
      "reason": "unknown_must_not_equal_numeric_zero"
    }
  },
  {
    "label": "00",
    "typeof": "string",
    "result": null
  },
  {
    "label": "0.000",
    "typeof": "string",
    "result": null
  },
  {
    "label": "-0",
    "typeof": "string",
    "result": null
  },
  {
    "label": "null",
    "typeof": "object",
    "result": null
  },
  {
    "label": "undefined",
    "typeof": "undefined",
    "result": null
  },
  {
    "label": "",
    "typeof": "string",
    "result": null
  },
  {
    "label": "unknown",
    "typeof": "string",
    "result": null
  },
  {
    "label": "1",
    "typeof": "number",
    "result": null
  }
]
PROBE_BLOCKING
[
  {
    "s": "BILLED",
    "decision": {
      "eligible": true,
      "reason": "SOURCE_MAY_BLOCK",
      "source": "BILLED",
      "confidenceClass": "billed"
    },
    "class": "billed"
  },
  {
    "s": "PROVIDER_OBSERVED",
    "decision": {
      "eligible": true,
      "reason": "SOURCE_MAY_BLOCK",
      "source": "PROVIDER_OBSERVED",
      "confidenceClass": "observed"
    },
    "class": "observed"
  },
  {
    "s": "API_USAGE",
    "decision": {
      "eligible": false,
      "reason": "API_USAGE_NEVER_BLOCKS",
      "source": "API_USAGE",
      "confidenceClass": "observed"
    },
    "class": "observed"
  },
  {
    "s": "LOCAL_COUNT",
    "decision": {
      "eligible": false,
      "reason": "LOCAL_COUNT_NEVER_BLOCKS",
      "source": "LOCAL_COUNT",
      "confidenceClass": "estimated"
    },
    "class": "estimated"
  },
  {
    "s": "PARAMETRIC_ESTIMATE",
    "decision": {
      "eligible": false,
      "reason": "ESTIMATE_NEVER_BLOCKS",
      "source": "PARAMETRIC_ESTIMATE",
      "confidenceClass": "estimated"
    },
    "class": "estimated"
  },
  {
    "s": "UNKNOWN",
    "decision": {
      "eligible": false,
      "reason": "UNKNOWN_NEVER_BLOCKS",
      "source": "UNKNOWN",
      "confidenceClass": "unknown"
    },
    "class": "unknown"
  }
]

```

Synthèse : dates impossibles acceptées et rolled ; offset/leap/date-only/no-tz conformes aux attentes ; périodes non canoniques acceptées par shape.

---

## 28. Période canonique

Produite uniquement par `computeUtcMonthPeriod` / `assignInstantToPeriod`. Shape validator ≠ garant canonique — FIND-02.

---

## 29. Revue SoT

Six valeurs · rangs 1–6 · switch exhaustifs · mayBlock uniquement BILLED/PROVIDER_OBSERVED — PASS.

---

## 30. Revue evidence

Mapping exact · observed≠blocking auto · tests T-TECH-05/06 — PASS.

---

## 31. Revue blocking eligibility

Matrice 6/6 exacte · ESTIMATION_NEVER_BLOCKS · pas de montant · may≠must — PASS.

---

## 32. Revue unknown

Guard minimal PASS · variantes textuelles FIND-03 · Money deferred.

---

## 33. Revue import boundaries

Code domaine pur (manuel) — PASS. Test limits FIND-05.

---

## 34. Limites du test import boundaries

Static `from` only · pas dynamic/require — documenté.

---

## 35. Revue des tests

Six fichiers · comportement métier · matrice · boundaries · pas de réseau — PASS. Gaps adversariaux : calendar-impossible, non-canonical period, dynamic import — documentés comme manquants (pas corrigés).

---

## 36. Tests adversariaux manquants

Calendar overflow · shape non canonique · import dynamique · unknown "00"/"0.000" — non bloquants vs 126 minimal.

---

## 37. Résultat tests ciblés

`npm run test -- __tests__/oa/finops` · exit 0 · **6 files / 39 tests** · ~0.3s.

---

## 38. Résultat typecheck

`npm run typecheck` · exit 0.

---

## 39. Résultat lint

`npm run lint` · exit 0 · No ESLint warnings or errors.

---

## 40. Résultat suite complète

`npm run test` · exit 0 · **136 files / 1355 tests** · ~8s.

---

## 41. Scope produit

14 CREATE · 0 MODIFY · 0 DELETE · inchangé pendant revue.

---

## 42. Scope documentaire

103 MODIFY (ce cycle) · 128 CREATE · 104–127 byte-identical · 129 ABSENT.

---

## 43. Package / lockfile

`fcb004b52d4547bffd171dd0411d08f41f87b21a5e5fa5cdf1193e23342175cf` / `042fc4467b24d5c8dea1c768fa97d01861f2c0b76667ce6bd20cde6b0e0a18ea` — inchangés.

---

## 44. Sécurité / RSSI

PASS — pas de secret/PII/réseau/disque/domaine provider.

---

## 45. RGPD

PASS — minimisation · pas de capture.

---

## 46. Performance

PASS — O(1) · pas d’I/O.

---

## 47. GreenOps

PASS — pas de dépendance ajoutée.

---

## 48. Résilience

PASS — erreurs structurées · déterminisme.

---

## 49. Réversibilité

PASS — suppression 14 fichiers + docs 127/128 restaure pré-T0 code.

---

## 50. Risques

Packaging · overflow calendar · période non canonique · API support · unknown textuel · confusion may-block vs must-block (documentée).

---

## 51. Dette

Money deferred · ClockPort app · T1–T7 · ledger · enforcement · durcissement calendar/shape/tests.

---

## 52. Findings


### PR-T0-FIND-01 — Impossible calendar dates accepted via Date.parse overflow
- **Sévérité :** MEDIUM
- **Fichier :** `app/lib/oa/finops/domain/invariants.ts` · `validateIsoTimestamp` / `period.ts` · `computeUtcMonthPeriod`
- **Observation :** `2023-02-29`, `2026-02-30`, `2026-04-31` passent `validateIsoTimestamp` (null) et sont convertis en mois adjacents (mars/mai) via `Date.parse` overflow.
- **Exigence :** 126 — timestamp parseable / instant déterministe (pas d’exigence explicite de validité calendaire stricte).
- **Risque :** un `occurredAt` mal formé calendairement pourrait être rattaché au mauvais mois UTC sans erreur.
- **Preuve :** probes temporelles (voir §27).
- **Recommandation :** en lot futur borné, rejeter les dates dont les composants UTC ne round-tripent pas ; ou documenter explicitement l’acceptation overflow.
- **Gate :** réserve arbitration / éventuel fix cycle.
- **Bloquant publication ?** Non pour qualité T0 vs contrat 126 minimal — **oui pour assurance calendaire renforcée**.

### PR-T0-FIND-02 — validateFinOpsPeriodShape n’impose pas une période mensuelle canonique
- **Sévérité :** MEDIUM
- **Fichier :** `invariants.ts` · `validateFinOpsPeriodShape` ; consommateurs `periodContainsInstant` / `finOpsPeriodKey`
- **Observation :** périodes demi-mois, multi-mois ou start mid-month passent la shape ; `finOpsPeriodKey` dérive YYYY-MM depuis periodStart même si end n’est pas le mois suivant.
- **Exigence :** 126 — shape = start < end · timezone UTC ; canonique produite par `computeUtcMonthPeriod`.
- **Risque :** appelant futur passant une période construite manuellement obtient un comportement non mensuel.
- **Preuve :** probes PROBE_PERIODS.
- **Recommandation :** documenter « shape ≠ canonical month » ; éventuellement assert canonique dans T1+ ou helper séparé.
- **Gate :** réserve.
- **Bloquant ?** Non vs contrat 126 (shape only).

### PR-T0-FIND-03 — assertUnknownNotNumericZero couverture textuelle partielle
- **Sévérité :** LOW
- **Fichier :** `invariants.ts` · `assertUnknownNotNumericZero`
- **Observation :** refuse 0 / BigInt(0) / "0" / "0.0" / "0.00" ; n’attrape pas "00", "0.000", "-0" string.
- **Exigence :** 126 / T-TECH-06 minimal (0 / 0n / "0").
- **Risque :** fausse assurance si Money textuel introduit plus tard sans élargir le garde-fou.
- **Preuve :** PROBE_UNKNOWN.
- **Recommandation :** élargir quand Money arrive ; ne pas implémenter Money maintenant.
- **Gate :** réserve.
- **Bloquant ?** Non.

### PR-T0-FIND-04 — Symboles publics support au-delà de la liste §26 stricte
- **Sévérité :** MEDIUM
- **Fichier :** `index.ts` · `types.ts` · `invariants.ts`
- **Observation :** exports publics non listés comme API publique fermée dans §26 : `FINOPS_SOURCES`, `requireValidIsoTimestamp`, `requireValidFinOpsPeriod` (et `createFinOpsError` est listé dans errors.ts). Helpers require* exposent une surface throw.
- **Classification :** JUSTIFIED SUPPORT SYMBOL (tests + conventions repo) — pas d’autorité runtime nouvelle.
- **Risque :** engagement public prématuré ; surface d’erreur élargie.
- **Preuve :** comparaison barrel vs 126 §26.
- **Recommandation :** accepter comme support T0 ou réduire barrel en fix cycle si Morris exige API minimale stricte.
- **Gate :** réserve arbitration.
- **Bloquant ?** Non (pas de nouvelle autorité FinOps).

### PR-T0-FIND-05 — Limites du test importBoundaries
- **Sévérité :** LOW
- **Fichier :** `importBoundaries.test.ts`
- **Observation :** regex sur lignes `import`/`export` ; ne couvre pas `import()`, `require()`, side-effect imports, `node:fs/promises`.
- **Exigence :** frontières domaine.
- **Risque :** faux sentiment de garantie automated.
- **Compensation :** inspection manuelle des 8 fichiers domaine — aucun import interdit ; pas de Date.now ; pas de process.env.
- **Recommandation :** durcir le test dans un futur lot tests ; pas de correctif silencieux maintenant.
- **Gate :** réserve.
- **Bloquant ?** Non.

### PR-T0-FIND-06 — MORRIS PACKAGING DECISION REQUIRED
- **Sévérité :** HIGH (pour publication Git) / non-blocker technique T0
- **Fichier :** packaging Git
- **Observation :** 14 fichiers T0 + 103/127/128 = delta incrémental ; Local Project State contient ~38 documents `projects/sfia-studio/9*.md`–`127` non trackés vs `origin/main`. Aucune convention Git claire n’impose le package 90–128 vs commit incrémental T0.
- **Risque :** PR monstrueuse (~49k lignes docs) ou chaîne documentaire incomplète si commit incrémental seul.
- **Preuve :** `git ls-files --others` inventaire.
- **Recommandation :** arbitrage Morris explicite avant commit/push.
- **Gate :** **obligatoire avant publication**.
- **Bloquant publication ?** **Oui** jusqu’à décision. **Non** pour qualité domaine T0.

### PR-T0-FIND-07 — assertDistinctEvidenceClasses tautologique
- **Sévérité :** NOTE
- **Fichier :** `costEvidence.ts`
- **Observation :** Set de littéraux const toujours size 4 ; ne détecte pas un mapping SoT→class incorrect.
- **Risque :** faible — mapping couvert par tests de classification.
- **Recommandation :** conserver tests de mapping ; helper optionnel.
- **Bloquant ?** Non.

### PR-T0-FIND-08 — DetailCode FINOPS_INVALID_SOURCE non exercé
- **Sévérité :** NOTE
- **Fichier :** `types.ts` · `FinOpsDetailCode`
- **Observation :** code présent ; aucun chemin T0 ne le produit (union fermée + exhaustivité).
- **Risque :** bruit API.
- **Recommandation :** conserver pour T1+ ou retirer en fix cosmétique futur.
- **Bloquant ?** Non.


---

## 53. Blockers

**Aucun BLOCKER technique** au sens défaut domaine vs contrat 126.

**Publication Git bloquée** jusqu’à arbitrage réserves / packaging (FIND-06 + verdict READY WITH RESERVES).

---

## 54. Réserves

FIND-01 · FIND-02 · FIND-03 · FIND-04 · FIND-05 · FIND-06 · FIND-07 · FIND-08.

---

## 55. Manifest de commit candidat

**Non exécuté.** Candidate A (incrémental) :

1. 14 fichiers `app/lib/oa/finops/**` + `__tests__/oa/finops/**`
2. `103-…-backlog.md`
3. `126-…-t0-execution-pack.md` (si publication pack non faite)
4. `127-…-t0-execution.md`
5. `128-…-t0-pr-readiness.md`

**Candidate B :** package `90`–`128` + 14 fichiers — nécessite décision Morris.

Additions estimées Candidate A code/tests : ~1036 lignes + docs 103/127/128.

---

## 56. Fichiers à exclure

`.tmp-sfia-review/**` · artefacts locaux · package.json/lock · tout hors liste Morris.

---

## 57. Commit message candidat

```text
feat(oa-finops): add T0 pure domain contracts and unit tests

Introduce provider-independent FinOps period, SoT, evidence, and
blocking-eligibility rules with targeted tests. Documentation records
127/128 remain local until Morris packaging/reserve arbitration.
```

---

## 58. Stratégie de commit

Prefer **1 commit produit+tests** + **1 commit docs** si packaging incrémental ; sinon mono-commit package documentaire si Morris l’exige. **Non exécuté.**

---

## 59. PR title candidat

`feat(oa-finops): FinOps technical lot T0 — pure domain contracts`

---

## 60. PR body candidat

```markdown
## Summary
- Implements FinOps T0 pure domain contracts (period UTC, SoT 1–6, evidence, blocking eligibility).
- Adds six unit test files; no provider/persistence/runtime wiring.
- Documents execution (127) and PR readiness (128). TB-04-04 remains NOT DONE.

## Scope
- 14 authorized files under `app/lib/oa/finops` and `__tests__/oa/finops`
- Docs 103/127/128 (and packaging set per Morris decision)

## Out of scope
- T1–T7, LOT-D1, Money, SQL/migrations, OpenAI/Neon wiring, active enforcement

## Validations
- targeted finops tests 39/39
- typecheck/lint/full suite 1355/1355

## Reserves
See document 128 findings (calendar overflow, period shape, packaging, API support).

## Checklist
- [ ] Morris packaging decision applied
- [ ] Reserves accepted or fixed under dedicated gate
- [ ] No TB-04-04 DONE claim
- [ ] No LOT-D1 authorization
```

---

## 61. Base / head candidates

| Champ | Valeur |
|---|---|
| Base | `main` @ `8dc54db…` |
| Head locale | `pr-readiness/…-t0` ou future `delivery/…-t0` publiée |
| Remote head | **non créée** |

Aucune URL PR.

---

## 62. Checklist future

- arbitrer réserves
- choisir packaging
- commit/push sous GO publication
- créer PR sous GO distinct
- CI verte
- review humaine
- merge sous GO distinct

---

## 63. Conditions avant commit

- réserves arbitrées ou acceptées explicitement
- packaging décidé
- manifest exact
- aucun fichier hors liste
- validations toujours vertes
- GO publication consommé

---

## 64. Conditions avant push

- commit local conforme
- branche remote absente ou FF-only
- aucun secret
- GO push consommé

---

## 65. Conditions avant création PR

- branche poussée
- title/body conformes
- GO PR create consommé
- réserves visibles dans la PR

---

## 66. Conditions avant merge

- CI + review
- GO merge consommé
- TB-04-04 toujours NOT DONE
- T1–T7 non autorisés

---

## 67. Impacts TB-04-04

T0 executed + PR readiness reviewed · ChatGPT validation via Critical review · **DONE = no**.

---

## 68. Impacts TB-02-05

Préservé · aucun metering runtime.

---

## 69. T1 à T7

**NOT AUTHORIZED — NOT STARTED**.

---

## 70. LOT-D1

**NOT AUTHORIZED — Delivery NOT-CONSUMED**.

---

## 71. Graphe 33/56

Préservé · priorités P0=6 P1=13 P2=13 P3=1.

---

## 72. Aucun backlog item DONE

Confirmé.

---

## 73. Local Git Truth finale

| Champ | Valeur |
|---|---|
| Branche | `pr-readiness/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0` |
| HEAD | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| origin/main | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| merge-base | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| ahead/behind | `0	0` |
| Status T0 scoped | |

```text
?? projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
?? projects/sfia-studio/app/__tests__/oa/finops/
?? projects/sfia-studio/app/lib/oa/finops/
```

---

## 74. Review Pack

Full — `.tmp-sfia-review/chatgpt-review.md` (ce cycle).

---

## 75. Handoff

Publication L3 attendue : `docs(review-handoff): publish Assistant SFIA FinOps technical lot T0 PR readiness`.

---

## 76. Prochaine gate candidate

```text
GO DECISIONS PR READINESS SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
ARBITRATE FINOPS TECHNICAL LOT T0 RESERVES
```

Candidate uniquement — non consommée.

---

## 77. Verdict unique

**READY WITH RESERVES —**
**NO BLOCKER —**
**MORRIS RESERVE ACCEPTANCE AND PACKAGING DECISION REQUIRED BEFORE PUBLICATION —**
**NO COMMIT, PUSH OR PR AUTHORIZED —**
**T1 TO T7 NOT AUTHORIZED —**
**TB-04-04 NOT DONE —**
**LOT-D1 NOT AUTHORIZED**

```

## Sections 103 modifiées complètes

### §1 Statut
```markdown
## 1. Statut

**LOT-IP-0A DECISIONS APPLIED —**
**LOT-IP-0B DECISIONS APPLIED —**
**PERSISTENCE A2 TECHNOLOGY SELECTION FULLY ARBITRATED —**
**FIVE TECHNOLOGY DECISIONS SELECTED —**
**POSTGRESQL SELECTED —**
**NEON SELECTED —**
**PG NODE-POSTGRES SELECTED —**
**NODE-PG-MIGRATE SELECTED —**
**LOCAL DEV TEST LD-A SELECTED —**
**LOT-IP-0C SELECTION PREPARATION EXECUTED —**
**LOT-IP-0C SELECTION DECISION APPLIED —**
**LOT-IP-0C EXECUTED —**
**FINOPS CONTROL CONTRACT PRODUCED —**
**FINOPS ENFORCEMENT ARBITRATION COMPLETED —**
**FINOPS ENFORCEMENT DECISIONS APPLIED —**
**FINOPS TECHNICAL IMPLEMENTATION DECISION PACK PREPARATION EXECUTED —**
**FINOPS TECHNICAL IMPLEMENTATION DECISION PACK PREPARED —**
**FINOPS TECHNICAL IMPLEMENTATION ARBITRATION COMPLETED —**
**FINOPS TECHNICAL IMPLEMENTATION DECISIONS APPLIED —**
**CAP-C AND BND-A SELECTED —**
**POSTGRESQL LEDGER AND AGGREGATES SELECTED —**
**ENF-B SELECTED —**
**ESTIMATION NEVER BLOCKS —**
**POSTGRES TRANSACTION AND ROW LOCK SELECTED —**
**DEFAULT-OFF FINOPS FEATURE FLAG SELECTED —**
**SHADOW / MONITOR / E1 ROLLOUT MODEL SELECTED —**
**T0 TO T7 STRUCTURE ACCEPTED —**
**T0 TO T7 NOT AUTHORIZED —**
**T0 EXECUTION PACK PREPARATION EXECUTED —**
**T0 SCOPE BOUNDED —**
**T0 FILES AND SYMBOLS BOUNDED —**
**T0 TEST PLAN BOUNDED —**
**FINOPS TECHNICAL LOT T0 DELIVERY AUTHORIZED —**
**FINOPS TECHNICAL LOT T0 EXECUTED —**
**T0 CONTRACTS AND PURE DOMAIN RULES IMPLEMENTED —**
**T0 TESTS PASSED —**
**T0 TYPECHECK PASSED —**
**T0 LINT PASSED —**
**T0 FULL REGRESSION PASSED —**
**T0 LOCAL DELIVERY COMPLETE —**
**T0 READY FOR CHATGPT VALIDATION —**
**FINOPS TECHNICAL LOT T0 PR READINESS REVIEWED —**
**T0 EXECUTED LOCALLY —**
**CHATGPT VALIDATED —**
**PR READINESS REVIEWED —**
**READY WITH RESERVES —**
**MORRIS RESERVE ACCEPTANCE REQUIRED BEFORE PUBLICATION —**
**NO COMMIT OR PUSH —**
**NO PR CREATED —**
**T1 TO T7 NOT AUTHORIZED —**
**TB-04-04 NOT DONE —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**NO BACKLOG ITEM DONE —**
**NO PROJECT COMMIT OR PUSH —**
**LOT-D1 DELIVERY NOT-CONSUMED —**
**E1 SOFT CONTROL WITH HUMAN GATE SELECTED —**
**USD 15 INFORMATIONAL ALERT SELECTED —**
**USD 20 CRITICAL MORRIS REVIEW SELECTED —**
**USD 25 MONTHLY PLANNING TARGET PRESERVED —**
**USD 30 SOFT APPLICATION CAP SELECTED —**
**DG-NEW SELECTED —**
**MORRIS-ONLY OVERRIDE POLICY SELECTED —**
**DATA MINIMIZATION POLICY SELECTED —**
**NUMERIC TTL DEFERRED —**
**TECHNICAL ENFORCEMENT NOT IMPLEMENTED —**
**PROVIDER CONFIGURATION NOT PERFORMED —**
**RECALIBRATION REQUIRED —**
**NO ITEM DONE**

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md` |
| **Items** | 33 |
| **Épics** | 7 (EPIC-TB-00 … EPIC-TB-06) |
| **Documents 90–102** | Inchangés |
| **Bounded Delivery T0** | CONSUMED |
| **PR readiness T0** | REVIEWED — READY WITH RESERVES |
| **LOT-D1 Delivery** | NOT AUTHORIZED — NOT-CONSUMED |
| **Project publication / PR** | not started — blocked pending reserve arbitration |



```

### §1vigedecies GO PR readiness
```markdown
## 1vigedecies. GO Morris — Review FinOps Technical Lot T0 PR Readiness

```text
GO PR READINESS SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
REVIEW FINOPS TECHNICAL LOT T0
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-06 00:27 CEST (+0200) / 2026-08-05 22:27 UTC |
| **Cycle** | PR readiness — Critical PR Readiness Review — FinOps Technical Lot T0 |
| **Profil** | **Critical** |
| **Typologie** | EVOL / REVIEW |
| **Verdict** | **READY WITH RESERVES** |
| **Blockers** | **aucun** |
| **Réserves** | packaging documentaire · dates calendaires impossibles acceptées via Date.parse · période shape non canonique · API publique support · unknown textuel partiel · limites regex importBoundaries |
| **Publication** | **NOT AUTHORIZED** — Morris reserve acceptance required before publication |
| **Non-effet** | aucun correctif produit · aucun commit/push/PR · T1–T7 **NOT AUTHORIZED** · TB-04-04 **NOT DONE** · LOT-D1 **NOT AUTHORIZED** |
| **Record** | `projects/sfia-studio/128-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness.md` |

### Chaîne documentaire LOT-IP-0C (post PR readiness)

| Document | Rôle |
|---|---|
| **119** | préparation de sélection |
| **120** | Selection Decision Pack |
| **121** | sélection appliquée |
| **122** | contrat FinOps |
| **123** | enforcement decisions applied |
| **124** | Technical Implementation Decision Pack |
| **125** | Technical Implementation Decisions Applied |
| **126** | T0 Execution Pack |
| **127** | T0 Execution |
| **128** | T0 PR Readiness |

---


```

### §32 Verdict
```markdown
## 32. Verdict

**LOT-IP-0A DECISIONS APPLIED — LOT-IP-0B DECISIONS APPLIED —**
**PERSISTENCE A2 TECHNOLOGY SELECTION FULLY ARBITRATED —**
**FIVE TECHNOLOGY DECISIONS SELECTED —**
**POSTGRESQL SELECTED — NEON SELECTED — PG NODE-POSTGRES SELECTED —**
**NODE-PG-MIGRATE SELECTED — LD-A SELECTED —**
**LOT-IP-0C EXECUTED — FINOPS ENFORCEMENT DECISIONS APPLIED —**
**FINOPS TECHNICAL IMPLEMENTATION DECISIONS APPLIED —**
**FINOPS TECHNICAL LOT T0 EXECUTED —**
**FINOPS TECHNICAL LOT T0 PR READINESS REVIEWED —**
**T0 EXECUTED LOCALLY — CHATGPT VALIDATED — PR READINESS REVIEWED —**
**READY WITH RESERVES —**
**MORRIS RESERVE ACCEPTANCE REQUIRED BEFORE PUBLICATION —**
**NO COMMIT OR PUSH — NO PR CREATED —**
**T1 TO T7 NOT AUTHORIZED —**
**DOCUMENT 103 UPDATED — DOCUMENT 128 CREATED —**
**DOCUMENTS 104 TO 127 BYTE-IDENTICAL — DOCUMENT 129 ABSENT —**
**GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED — NO ITEM DONE —**
**TB-04-04 NOT DONE — TB-02-05 PRESERVED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**BOUNDED DELIVERY T0 CONSUMED — LOT-D1 DELIVERY NOT-CONSUMED —**
**NO PROJECT COMMIT OR PUSH —**
**READY FOR MORRIS RESERVE ARBITRATION BEFORE PUBLICATION**


---


```

### §33 Prochaine gate
```markdown
## 33. Prochaine gate candidate

```text
GO DECISIONS PR READINESS SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
ARBITRATE FINOPS TECHNICAL LOT T0 RESERVES
```

Statut : **candidate uniquement — non consommée**.

Cette gate future :
- arbitrera les réserves PR readiness T0 (packaging · UTC calendar · période shape · API support · unknown textuel · importBoundaries) ;
- pourra autoriser ensuite une publication sous gate distincte ;
- n’autorisera pas T1 à T7 ;
- n’autorisera pas LOT-D1 ;
- ne marquera pas TB-04-04 DONE ;
- n’autorise pas commit/push/PR tant que non consommée et sans gate publication distincte.

**FINOPS TECHNICAL LOT T0 PR READINESS REVIEWED — READY WITH RESERVES — RESERVE ARBITRATION CANDIDATE — NO COMMIT OR PUSH — LOT-D1 DELIVERY NOT CONSUMED**

```

103 final: `7615939cb5ec620cf94a9b5b74a4b680069757e8595f756f63c154a1810a9f8d` · 2480 lignes

## Diff utile 103
```diff
--- /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1/.tmp-sfia-review/lot-t0-pr/103-before.md	2026-08-06 06:36:10
+++ /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1/.tmp-sfia-review/lot-t0-pr/103-after.md	2026-08-06 06:38:04
@@ -43,6 +43,14 @@
 **T0 FULL REGRESSION PASSED —**
 **T0 LOCAL DELIVERY COMPLETE —**
 **T0 READY FOR CHATGPT VALIDATION —**
+**FINOPS TECHNICAL LOT T0 PR READINESS REVIEWED —**
+**T0 EXECUTED LOCALLY —**
+**CHATGPT VALIDATED —**
+**PR READINESS REVIEWED —**
+**READY WITH RESERVES —**
+**MORRIS RESERVE ACCEPTANCE REQUIRED BEFORE PUBLICATION —**
+**NO COMMIT OR PUSH —**
+**NO PR CREATED —**
 **T1 TO T7 NOT AUTHORIZED —**
 **TB-04-04 NOT DONE —**
 **LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
@@ -70,8 +78,9 @@
 | **Épics** | 7 (EPIC-TB-00 … EPIC-TB-06) |
 | **Documents 90–102** | Inchangés |
 | **Bounded Delivery T0** | CONSUMED |
+| **PR readiness T0** | REVIEWED — READY WITH RESERVES |
 | **LOT-D1 Delivery** | NOT AUTHORIZED — NOT-CONSUMED |
-| **Project publication / PR** | not started |
+| **Project publication / PR** | not started — blocked pending reserve arbitration |


 ## 1bis. GO Morris — validation priorités et premier lot
@@ -862,7 +871,8 @@
 | **Exécution** | **EXECUTED LOCALLY** |
 | **Implementation** | **IMPLEMENTED** |
 | **Tests** | **TESTED** |
-| **Validation ChatGPT** | **AWAITING CHATGPT VALIDATION** |
+| **Validation ChatGPT** | **VALIDATED (via PR readiness Critical review)** |
+| **PR readiness** | **REVIEWED — READY WITH RESERVES** |
 | **Commit / push projet** | **NO PROJECT COMMIT OR PUSH** |
 | **DONE backlog** | **no** |

@@ -875,12 +885,52 @@
 | Gate | Statut |
 |---|---|
 | Bounded Delivery cycle T0 | **consumed** |
+| PR readiness T0 | **reviewed — READY WITH RESERVES** |
 | LOT-D1 Delivery | **NOT AUTHORIZED — NOT-CONSUMED** |
 | Project publication | not started |
 | PR | not created |

 ---
+
+## 1vigedecies. GO Morris — Review FinOps Technical Lot T0 PR Readiness
+
+```text
+GO PR READINESS SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+REVIEW FINOPS TECHNICAL LOT T0
+```
+
+| Champ | Valeur |
+|---|---|
+| **Autorité** | Morris |
+| **Consommation** | 2026-08-06 00:27 CEST (+0200) / 2026-08-05 22:27 UTC |
+| **Cycle** | PR readiness — Critical PR Readiness Review — FinOps Technical Lot T0 |
+| **Profil** | **Critical** |
+| **Typologie** | EVOL / REVIEW |
+| **Verdict** | **READY WITH RESERVES** |
+| **Blockers** | **aucun** |
+| **Réserves** | packaging documentaire · dates calendaires impossibles acceptées via Date.parse · période shape non canonique · API publique support · unknown textuel partiel · limites regex importBoundaries |
+| **Publication** | **NOT AUTHORIZED** — Morris reserve acceptance required before publication |
+| **Non-effet** | aucun correctif produit · aucun commit/push/PR · T1–T7 **NOT AUTHORIZED** · TB-04-04 **NOT DONE** · LOT-D1 **NOT AUTHORIZED** |
+| **Record** | `projects/sfia-studio/128-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness.md` |

+### Chaîne documentaire LOT-IP-0C (post PR readiness)
+
+| Document | Rôle |
+|---|---|
+| **119** | préparation de sélection |
+| **120** | Selection Decision Pack |
+| **121** | sélection appliquée |
+| **122** | contrat FinOps |
+| **123** | enforcement decisions applied |
+| **124** | Technical Implementation Decision Pack |
+| **125** | Technical Implementation Decisions Applied |
+| **126** | T0 Execution Pack |
+| **127** | T0 Execution |
+| **128** | T0 PR Readiness |
+
+---
+
 ## 2. GO Morris

 ```text
@@ -2188,7 +2238,7 @@
 |---|---|
 | **Items** | TB-04-04 |
 | **Dépendance** | TB-02-05 |
-| **Statut** | **EXECUTED — IMPLEMENTATION PREPARATION COMPLETE — FINOPS ENFORCEMENT DECISIONS APPLIED — FINOPS TECHNICAL IMPLEMENTATION DECISIONS APPLIED — T0 EXECUTION PACK PREPARED — T0 EXECUTED LOCALLY — T0 READY FOR CHATGPT VALIDATION — T1 TO T7 NOT AUTHORIZED — TB-04-04 NOT DONE — FUTURE T1 PREPARATION REQUIRES MORRIS GATE** |
+| **Statut** | **EXECUTED — IMPLEMENTATION PREPARATION COMPLETE — FINOPS ENFORCEMENT DECISIONS APPLIED — FINOPS TECHNICAL IMPLEMENTATION DECISIONS APPLIED — T0 EXECUTION PACK PREPARED — T0 EXECUTED LOCALLY — T0 PR READINESS REVIEWED — READY WITH RESERVES — T1 TO T7 NOT AUTHORIZED — TB-04-04 NOT DONE — FUTURE T1 PREPARATION REQUIRES MORRIS GATE** |
 | **Décision sélection** | `D-ASST-IP0C-LOT-SELECTION-01 = OPTION A` · record **121** |
 | **Exécution** | record **122** · GO 22:05 CEST |
 | **Enforcement applied** | record **123** · `D-ASST-IP0C-ENFORCEMENT-01=E1` · A15-CAL/PROJ/ONCE · C20-WARN · S30-SOFT · DG-NEW |
@@ -2390,26 +2440,21 @@
 **NODE-PG-MIGRATE SELECTED — LD-A SELECTED —**
 **LOT-IP-0C EXECUTED — FINOPS ENFORCEMENT DECISIONS APPLIED —**
 **FINOPS TECHNICAL IMPLEMENTATION DECISIONS APPLIED —**
-**T0 EXECUTION PACK PREPARATION EXECUTED —**
-**FINOPS TECHNICAL LOT T0 DELIVERY AUTHORIZED —**
 **FINOPS TECHNICAL LOT T0 EXECUTED —**
-**T0 CONTRACTS AND PURE DOMAIN RULES IMPLEMENTED —**
-**T0 TESTS PASSED — T0 TYPECHECK PASSED — T0 LINT PASSED —**
-**T0 FULL REGRESSION PASSED — T0 LOCAL DELIVERY COMPLETE —**
-**T0 READY FOR CHATGPT VALIDATION —**
+**FINOPS TECHNICAL LOT T0 PR READINESS REVIEWED —**
+**T0 EXECUTED LOCALLY — CHATGPT VALIDATED — PR READINESS REVIEWED —**
+**READY WITH RESERVES —**
+**MORRIS RESERVE ACCEPTANCE REQUIRED BEFORE PUBLICATION —**
+**NO COMMIT OR PUSH — NO PR CREATED —**
 **T1 TO T7 NOT AUTHORIZED —**
-**E1 SOFT CONTROL WITH HUMAN GATE SELECTED —**
-**USD 15 INFORMATIONAL ALERT SELECTED — USD 20 C20-WARN SELECTED —**
-**USD 25 TARGET PRESERVED — USD 30 S30-SOFT SELECTED — DG-NEW SELECTED —**
-**TECHNICAL ENFORCEMENT NOT IMPLEMENTED — PROVIDER CONFIGURATION NOT PERFORMED —**
-**DOCUMENT 103 UPDATED — DOCUMENT 127 CREATED —**
-**DOCUMENTS 104 TO 126 BYTE-IDENTICAL — DOCUMENT 128 ABSENT —**
+**DOCUMENT 103 UPDATED — DOCUMENT 128 CREATED —**
+**DOCUMENTS 104 TO 127 BYTE-IDENTICAL — DOCUMENT 129 ABSENT —**
 **GRAPH 33/56 PRESERVED — PRIORITIES PRESERVED — NO ITEM DONE —**
 **TB-04-04 NOT DONE — TB-02-05 PRESERVED —**
 **LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
 **BOUNDED DELIVERY T0 CONSUMED — LOT-D1 DELIVERY NOT-CONSUMED —**
 **NO PROJECT COMMIT OR PUSH —**
-**READY FOR CHATGPT VALIDATION AND MORRIS FINOPS TECHNICAL LOT T0 PR READINESS DECISION**
+**READY FOR MORRIS RESERVE ARBITRATION BEFORE PUBLICATION**


 ---
@@ -2417,19 +2462,19 @@
 ## 33. Prochaine gate candidate

 ```text
-GO PR READINESS SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — REVIEW FINOPS TECHNICAL LOT T0
+GO DECISIONS PR READINESS SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+ARBITRATE FINOPS TECHNICAL LOT T0 RESERVES
 ```

 Statut : **candidate uniquement — non consommée**.

 Cette gate future :
-- vérifiera le diff T0 ;
-- vérifiera les preuves Critical ;
-- vérifiera l’absence de scope creep ;
-- préparera éventuellement commit/push/PR sous gates distinctes ;
+- arbitrera les réserves PR readiness T0 (packaging · UTC calendar · période shape · API support · unknown textuel · importBoundaries) ;
+- pourra autoriser ensuite une publication sous gate distincte ;
 - n’autorisera pas T1 à T7 ;
 - n’autorisera pas LOT-D1 ;
 - ne marquera pas TB-04-04 DONE ;
-- n’autorisera pas PostgreSQL/Neon runtime, provider wiring, enforcement actif, push, PR ou merge sans gates Morris distinctes.
+- n’autorise pas commit/push/PR tant que non consommée et sans gate publication distincte.

-**FINOPS TECHNICAL LOT T0 EXECUTED — T0 READY FOR CHATGPT VALIDATION — PR READINESS CANDIDATE — LOT-D1 DELIVERY NOT CONSUMED**
+**FINOPS TECHNICAL LOT T0 PR READINESS REVIEWED — READY WITH RESERVES — RESERVE ARBITRATION CANDIDATE — NO COMMIT OR PUSH — LOT-D1 DELIVERY NOT CONSUMED**

```

## Diff 128
```diff
diff --git a/projects/sfia-studio/128-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness.md b/projects/sfia-studio/128-assistant-sfia-native-openai-finops-technical-lot-t0-pr-readiness.md
new file
+# SFIA Studio — Assistant SFIA natif OpenAI —
+FinOps Technical Lot T0 —
+PR Readiness
+
+## 1. Statut et verdict
+
+**FINOPS TECHNICAL LOT T0 PR READINESS REVIEWED —**
+**CRITICAL REVIEW COMPLETED —**
+**T0 INCREMENTAL DELTA VERIFIED —**
+**DOCUMENT 126 COMPLIANCE VERIFIED WITH RESERVES —**
+**FINOPS DECISIONS COMPLIANCE VERIFIED —**
+**PUBLIC API REVIEWED —**
+**UTC PERIOD RULES REVIEWED —**
+**SOURCE-OF-TRUTH AND EVIDENCE RULES REVIEWED —**
+**BLOCKING ELIGIBILITY REVIEWED —**
+**UNKNOWN HANDLING REVIEWED —**
+**IMPORT BOUNDARIES REVIEWED —**
+**TARGETED TESTS PASSED —**
+**TYPECHECK PASSED —**
+**LINT PASSED —**
+**FULL TEST SUITE PASSED —**
+**NO BLOCKER —**
+**READY WITH RESERVES —**
+**MORRIS RESERVE ACCEPTANCE / PACKAGING DECISION REQUIRED BEFORE PUBLICATION —**
+**NO COMMIT, PUSH, PR OR MERGE PERFORMED —**
+**T1 TO T7 NOT AUTHORIZED —**
+**TB-04-04 NOT DONE —**
+**LOT-D1 NOT AUTHORIZED**
+
+**Verdict unique :** `READY WITH RESERVES`
+
+---
+
+## 2. Anti-claims
+
+| Anti-claim | Statut |
+|---|---|
+| PR readiness revue ≠ commit autorisé | vrai |
+| READY WITH RESERVES ≠ push autorisé | vrai |
+| READY WITH RESERVES ≠ PR créée | vrai |
+| Finding identifié ≠ correction autorisée | vrai |
+| Gate publication candidate ≠ gate consommée | vrai |
+| Tests verts ≠ absence de réserve | vrai |
+| T0 local ≠ contrôle FinOps actif | vrai |
+
+---
+
+## 3. Autorité Morris
+
+Morris est l’unique autorité. Cursor a produit une revue read-only. Aucune mutation produit. Aucune publication projet.
+
+---
+
+## 4. GO exact
+
+```text
+GO PR READINESS SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+REVIEW FINOPS TECHNICAL LOT T0
+```
+
+---
+
+## 5. Horodatage CEST et UTC
+
+| Instant | Valeur |
+|---|---|
+| **GO Morris** | 2026-08-06 00:27 CEST (+0200) / 2026-08-05 22:27 UTC (secondes non inventées) |
+| **Revue Cursor** | 2026-08-06 06:38:04 CEST (+0200) / 2026-08-06 04:38:04 UTC |
+
+---
+
+## 6. Cycle / profil / typologie
+
+| Champ | Valeur |
+|---|---|
+| **Type** | 13 — PR readiness |
+| **Mode** | Critical PR Readiness Review — FinOps Technical Lot T0 |
+| **Profil** | Critical |
+| **Typologie** | EVOL / REVIEW |
+| **CKC** | candidate/experimental · aucune autorité publication |
+
+---
+
+## 7. Sources
+
+Documents 103, 123, 125, 126, 127 · quatorze fichiers T0 · package/lock · handoff tip `0a48727e…` · méthodes PR readiness / QA / Review Pack depuis Git. Aucune recherche externe.
+
+---
+
+## 8. Local Git Truth initiale
+
+| Champ | Valeur |
+|---|---|
+| Branche initiale | `delivery/…-finops-technical-lot-t0` |
+| Branche revue | `pr-readiness/…-finops-technical-lot-t0` |
+| HEAD / main / merge-base | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
+| Ahead / behind | 0 / 0 |
+| Upstream projet | aucun |
+| Handoff tip / blob | `0a48727e…` / `d96fd0ef…` |
+
+---
+
+## 9. Handoff entrant
+
+Message : `docs(review-handoff): publish Assistant SFIA FinOps technical lot T0 execution`
+Contenu : quatorze fichiers complets · 127 · sections 103 · validations · diff utile · hashes.
+
+---
+
+## 10. Hashes entrants
+
+Documents 103–127 vérifiés byte-identical aux hashes GO (103 modifié ensuite dans ce cycle). Package/lock inchangés. Quatorze fichiers = hashes handoff.
+
+---
+
+## 11. État tracked / untracked
+
+Tous les fichiers T0 et docs 90–127 sont **untracked** vs `origin/main` (`git ls-files` vide pour finops). Aucun fichier staged. Aucun tracked modified produit.
+
+---
+
+## 12. T0 incremental delta
+
+- 14 fichiers produit/tests T0 (CREATE untracked)
+- document 103 (MODIFY untracked backlog)
+- document 127 (CREATE — byte-identical pendant revue)
+- document 128 (CREATE — ce record)
+
+---
+
+## 13. Local Project State
+
+Outre le delta T0 : documents `90`–`126` non trackés (chaîne Assistant OpenAI historique), artefacts `.tmp-sfia-review/**`. Ne pas confondre avec le delta T0.
+
+Nombre docs untracked sous `projects/sfia-studio/*.md` : **38** (avant création 128).
+
+---
+
+## 14. Future Commit Candidate
+
+**Option A — incrémental T0 (candidate technique) :**
+14 fichiers finops + 103 + 126 (si pas encore publié) + 127 + 128.
+
+**Option B — package documentaire complet :**
+docs `90`–`128` + 14 fichiers T0 (~49k lignes docs) — reviewability difficile.
+
+**Décision :** `MORRIS PACKAGING DECISION REQUIRED` avant tout `git add` / commit / push.
+
+---
+
+## 15. Décision de packaging requise
+
+**Oui.** Bloquante pour commit/push. Non bloquante pour la conformité domaine T0 au pack 126 (avec réserves listées).
+
+---
+
+## 16. Matrice 126 → implémentation
+
+| Exigence 126 | Statut | Note |
+|---|---|---|
+| 14 fichiers exacts | PASS | |
+| 0 produit existant modifié | PASS | |
+| provider/persistence independent | PASS | |
+| no side effects / env / Date.now | PASS | |
+| période UTC month | PASS | |
+| start inclusif / end exclusif | PASS | |
+| late event occurredAt | PASS | |
+| SoT 1–6 | PASS | |
+| evidence distinct | PASS | |
+| unknown ≠ zero (minimal) | PASS | réserve FIND-03 |
+| blocking matrix | PASS | |
+| ESTIMATION NEVER BLOCKS | PASS | |
+| Money deferred | PASS | |
+| tests/typecheck/lint/full | PASS | 6/39 · 0 · 0 · 136/1355 |
+| package/lock unchanged | PASS | |
+| T1–T7 untouched | PASS | |
+| calendar-impossible rejection | RESERVE | FIND-01 |
+| canonical month in shape | RESERVE | FIND-02 |
+
+---
+
+## 17. Matrice décisions 123/125 → implémentation
+
+| Décision | Statut T0 |
+|---|---|
+| SoT hierarchy / ESTIMATION NEVER BLOCKS / unknown≠0 | IMPLEMENTED (domain) |
+| E1 / caps / alerts / override | NOT IMPLEMENTED (hors T0) |
+| CAP-C / BND-A / ENF-B / ledger / PG | SELECTED doc — NOT IMPLEMENTED |
+| PERIOD UTC | IMPLEMENTED domain |
+| Feature flag / rollout | NOT IMPLEMENTED |
+
+---
+
+## 18. Inventaire des quatorze fichiers
+
+| Fichier | SHA-256 | Lignes | State |
+|---|---|---|---|
+| `projects/sfia-studio/app/lib/oa/finops/domain/types.ts` | `1f27721ddb930257e0491bc901f0de1a230fcaa5fd9b706e42cd40e53b026b09` | 64 | untracked |
+| `projects/sfia-studio/app/lib/oa/finops/domain/errors.ts` | `9fcbcc89dad3d1856cbb3ae5245d90d1f09ed71991e760303693c9687dcac498` | 35 | untracked |
+| `projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts` | `e27a5b9dce23ae1d2427e1684a17ee8a82ac81db1a3a8064d471200d7ff35b7b` | 130 | untracked |
+| `projects/sfia-studio/app/lib/oa/finops/domain/period.ts` | `83bcad8da568c411c49f25ff3e2c6c9c0f17bee4d992dfbc5873beceafae0689` | 67 | untracked |
+| `projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts` | `33a288ba238a51f9ec4dc649d7b6d80277d39b541fb76d4c94b9eb79993e4c8e` | 73 | untracked |
+| `projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts` | `eb021400549674d86fbdb022e5d7f7e85ca2f69ecb3a60455563d91d6527021c` | 47 | untracked |
+| `projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts` | `664b32863e2606a3488b6d5b349e03547736fc3f631b47431bc3148764ec1898` | 69 | untracked |
+| `projects/sfia-studio/app/lib/oa/finops/index.ts` | `44008d949a8342b558a37bed755fcda6953a406b906f7a84ecec385ed8c7ccec` | 52 | untracked |
+| `projects/sfia-studio/app/__tests__/oa/finops/period.test.ts` | `9d275dfdf8dcb8b5c120670ab1db6ebb9cfd7a49e3fbbedc4cce79d8659de552` | 99 | untracked |
+| `projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts` | `8d3bf36c6055792cb8eea53bfe7d7468ff46de739a1d516fd1c48526a3e26be0` | 70 | untracked |
+| `projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts` | `8961e132d7d6804074158fa2ce9efbe715e82b6dbbb2e18b37dba76d27b844a2` | 74 | untracked |
+| `projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts` | `d19baba0fbaa5ecd06766993c1a7acf4581eef0166f1b2d27e92e826340d9ae4` | 93 | untracked |
+| `projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts` | `98a885ca11d6a4de5427abfbcd989161d833ac23dcab1b4933281e1a3f7e3b74` | 76 | untracked |
+| `projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts` | `49068a52271e98fbf1de55f17e191182f141a8215b8e1bcdc32102cbaa8ccc8d` | 87 | untracked |
+
+---
+
+## 19. Inventaire des symboles
+
+Types · FINOPS_SOT_RANK · FINOPS_SOURCES · errors · invariants (validate*/assert*/require*) · period helpers · SoT helpers · evidence helpers · evaluateBlockingEligibility · ESTIMATION_NEVER_BLOCKS.
+
+---
+
+## 20. API publique prévue (126 §26)
+
+Voir tables types/errors/invariants/period/sourceOfTruth/costEvidence/blockingEligibility du pack 126.
+
+---
+
+## 21. API publique réelle (`index.ts`)
+
+Réexporte tous les symboles §26 listés + support : `FINOPS_SOURCES`, `requireValidIsoTimestamp`, `requireValidFinOpsPeriod`, `createFinOpsError`, `FinOpsDomainError`, types d’erreur/invariant.
+
+---
+
+## 22. Symboles supplémentaires
+
+| Symbole | Classe |
+|---|---|
+| `FINOPS_SOURCES` | JUSTIFIED SUPPORT SYMBOL |
+| `requireValidIsoTimestamp` | JUSTIFIED SUPPORT SYMBOL (public) |
+| `requireValidFinOpsPeriod` | JUSTIFIED SUPPORT SYMBOL (public) |
+| `createFinOpsError` | REQUIRED (errors.ts) AND EXPORTED |
+| Aucun UNPLANNED architectural | — |
+| Aucun MISSING §26 core | — |
+
+---
+
+## 23. Revue types
+
+Union fermée SoT/evidence/reasons · readonly · FINOPS_SOT_RANK satisfies Record — PASS.
+
+---
+
+## 24. Revue erreurs
+
+Structured + DomainError · pas de Result générique · pas de secret — PASS.
+
+---
+
+## 25. Revue invariants
+
+Shape + unknown guard + ISO regex Z/offset — PASS avec FIND-01/02/03.
+
+---
+
+## 26. Revue période UTC
+
+computeUtcMonthPeriod déterministe · offset OK · leap 2024 OK · Dec→Jan OK · late event OK — PASS. Overflow calendar — RESERVE FIND-01.
+
+---
+
+## 27. Probes calendaires
+
+```text
+PROBE_ROWS
+[
+  {
+    "iso": "2023-02-29T00:00:00.000Z",
+    "validate": null,
+    "period": {
+      "periodStart": "2023-03-01T00:00:00.000Z",
+      "periodEnd": "2023-04-01T00:00:00.000Z",
+      "timezone": "UTC"
+    },
+    "err": null,
+    "Date_parse": 1677628800000
+  },
+  {
+    "iso": "2024-02-29T00:00:00.000Z",
+    "validate": null,
+    "period": {
+      "periodStart": "2024-02-01T00:00:00.000Z",
+      "periodEnd": "2024-03-01T00:00:00.000Z",
+      "timezone": "UTC"
+    },
+    "err": null,
+    "Date_parse": 1709164800000
+  },
+  {
+    "iso": "2026-02-30T00:00:00.000Z",
+    "validate": null,
+    "period": {
+      "periodStart": "2026-03-01T00:00:00.000Z",
+      "periodEnd": "2026-04-01T00:00:00.000Z",
+      "timezone": "UTC"
+    },
+    "err": null,
+    "Date_parse": 1772409600000
+  },
+  {
+    "iso": "2026-04-31T00:00:00.000Z",
+    "validate": null,
+    "period": {
+      "periodStart": "2026-05-01T00:00:00.000Z",
+      "periodEnd": "2026-06-01T00:00:00.000Z",
+      "timezone": "UTC"
+    },
+    "err": null,
+    "Date_parse": 1777593600000
+  },
+  {
+    "iso": "2026-12-31T23:00:00.000-01:00",
+    "validate": null,
+    "period": {
+      "periodStart": "2027-01-01T00:00:00.000Z",
+      "periodEnd": "2027-02-01T00:00:00.000Z",
+      "timezone": "UTC"
+    },
+    "err": null,
+    "Date_parse": 1798761600000
+  },
+  {
+    "iso": "2026-01-01T00:00:00.000+14:00",
+    "validate": null,
+    "period": {
+      "periodStart": "2025-12-01T00:00:00.000Z",
+      "periodEnd": "2026-01-01T00:00:00.000Z",
+      "timezone": "UTC"
+    },
+    "err": null,
+    "Date_parse": 1767175200000
+  },
+  {
+    "iso": "2026-01-01T00:00:00.000",
+    "validate": {
+      "detailCode": "FINOPS_INVALID_TIMESTAMP",
+      "reason": "timestamp_not_iso_instant"
+    },
+    "period": null,
+    "err": "FinOpsDomainError:timestamp_not_iso_instant",
+    "Date_parse": 1767222000000
+  },
+  {
+    "iso": "2026-01-01",
+    "validate": {
+      "detailCode": "FINOPS_INVALID_TIMESTAMP",
+      "reason": "timestamp_not_iso_instant"
+    },
+    "period": null,
+    "err": "FinOpsDomainError:timestamp_not_iso_instant",
+    "Date_parse": 1767225600000
+  }
+]
+PROBE_PERIODS
+[
+  {
+    "p": {
+      "periodStart": "2026-01-01T00:00:00.000Z",
+      "periodEnd": "2026-01-15T00:00:00.000Z",
+      "timezone": "UTC"
+    },
+    "shape": null,
+    "key": "2026-01",
+    "containsStart": true
+  },
+  {
+    "p": {
+      "periodStart": "2026-01-01T00:00:00.000Z",
+      "periodEnd": "2026-03-01T00:00:00.000Z",
+      "timezone": "UTC"
+    },
+    "shape": null,
+    "key": "2026-01",
+    "containsStart": true
+  },
+  {
+    "p": {
+      "periodStart": "2026-01-15T00:00:00.000Z",
+      "periodEnd": "2026-02-15T00:00:00.000Z",
+      "timezone": "UTC"
+    },
+    "shape": null,
+    "key": "2026-01",
+    "containsStart": true
+  }
+]
+PROBE_UNKNOWN
+[
+  {
+    "label": "0",
+    "typeof": "number",
+    "result": {
+      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
+      "reason": "unknown_must_not_equal_numeric_zero"
+    }
+  },
+  {
+    "label": "-0",
+    "typeof": "number",
+    "result": {
+      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
+      "reason": "unknown_must_not_equal_numeric_zero"
+    }
+  },
+  {
+    "label": "0",
+    "typeof": "bigint",
+    "result": {
+      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
+      "reason": "unknown_must_not_equal_numeric_zero"
+    }
+  },
+  {
+    "label": "0",
+    "typeof": "string",
+    "result": {
+      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
+      "reason": "unknown_must_not_equal_numeric_zero"
+    }
+  },
+  {
+    "label": "0.0",
+    "typeof": "string",
+    "result": {
+      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
+      "reason": "unknown_must_not_equal_numeric_zero"
+    }
+  },
+  {
+    "label": "0.00",
+    "typeof": "string",
+    "result": {
+      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
+      "reason": "unknown_must_not_equal_numeric_zero"
+    }
+  },
+  {
+    "label": "00",
+    "typeof": "string",
+    "result": null
+  },
+  {
+    "label": "0.000",
+    "typeof": "string",
+    "result": null
+  },
+  {
+    "label": "-0",
+    "typeof": "string",
+    "result": null
+  },
+  {
+    "label": "null",
+    "typeof": "object",
+    "result": null
+  },
+  {
+    "label": "undefined",
+    "typeof": "undefined",
+    "result": null
+  },
+  {
+    "label": "",
+    "typeof": "string",
+    "result": null
+  },
+  {
+    "label": "unknown",
+    "typeof": "string",
+    "result": null
+  },
+  {
+    "label": "1",
+    "typeof": "number",
+    "result": null
+  }
+]
+PROBE_BLOCKING
+[
+  {
+    "s": "BILLED",
+    "decision": {
+      "eligible": true,
+      "reason": "SOURCE_MAY_BLOCK",
+      "source": "BILLED",
+      "confidenceClass": "billed"
+    },
+    "class": "billed"
+  },
+  {
+    "s": "PROVIDER_OBSERVED",
+    "decision": {
+      "eligible": true,
+      "reason": "SOURCE_MAY_BLOCK",
+      "source": "PROVIDER_OBSERVED",
+      "confidenceClass": "observed"
+    },
+    "class": "observed"
+  },
+  {
+    "s": "API_USAGE",
+    "decision": {
+      "eligible": false,
+      "reason": "API_USAGE_NEVER_BLOCKS",
+      "source": "API_USAGE",
+      "confidenceClass": "observed"
+    },
+    "class": "observed"
+  },
+  {
+    "s": "LOCAL_COUNT",
+    "decision": {
+      "eligible": false,
+      "reason": "LOCAL_COUNT_NEVER_BLOCKS",
+      "source": "LOCAL_COUNT",
+      "confidenceClass": "estimated"
+    },
+    "class": "estimated"
+  },
+  {
+    "s": "PARAMETRIC_ESTIMATE",
+    "decision": {
+      "eligible": false,
+      "reason": "ESTIMATE_NEVER_BLOCKS",
+      "source": "PARAMETRIC_ESTIMATE",
+      "confidenceClass": "estimated"
+    },
+    "class": "estimated"
+  },
+  {
+    "s": "UNKNOWN",
+    "decision": {
+      "eligible": false,
+      "reason": "UNKNOWN_NEVER_BLOCKS",
+      "source": "UNKNOWN",
+      "confidenceClass": "unknown"
+    },
+    "class": "unknown"
+  }
+]
+
+```
+
+Synthèse : dates impossibles acceptées et rolled ; offset/leap/date-only/no-tz conformes aux attentes ; périodes non canoniques acceptées par shape.
+
+---
+
+## 28. Période canonique
+
+Produite uniquement par `computeUtcMonthPeriod` / `assignInstantToPeriod`. Shape validator ≠ garant canonique — FIND-02.
+
+---
+
+## 29. Revue SoT
+
+Six valeurs · rangs 1–6 · switch exhaustifs · mayBlock uniquement BILLED/PROVIDER_OBSERVED — PASS.
+
+---
+
+## 30. Revue evidence
+
+Mapping exact · observed≠blocking auto · tests T-TECH-05/06 — PASS.
+
+---
+
+## 31. Revue blocking eligibility
+
+Matrice 6/6 exacte · ESTIMATION_NEVER_BLOCKS · pas de montant · may≠must — PASS.
+
+---
+
+## 32. Revue unknown
+
+Guard minimal PASS · variantes textuelles FIND-03 · Money deferred.
+
+---
+
+## 33. Revue import boundaries
+
+Code domaine pur (manuel) — PASS. Test limits FIND-05.
+
+---
+
+## 34. Limites du test import boundaries
+
+Static `from` only · pas dynamic/require — documenté.
+
+---
+
+## 35. Revue des tests
+
+Six fichiers · comportement métier · matrice · boundaries · pas de réseau — PASS. Gaps adversariaux : calendar-impossible, non-canonical period, dynamic import — documentés comme manquants (pas corrigés).
+
+---
+
+## 36. Tests adversariaux manquants
+
+Calendar overflow · shape non canonique · import dynamique · unknown "00"/"0.000" — non bloquants vs 126 minimal.
+
+---
+
+## 37. Résultat tests ciblés
+
+`npm run test -- __tests__/oa/finops` · exit 0 · **6 files / 39 tests** · ~0.3s.
+
+---
+
+## 38. Résultat typecheck
+
+`npm run typecheck` · exit 0.
+
+---
+
+## 39. Résultat lint
+
+`npm run lint` · exit 0 · No ESLint warnings or errors.
+
+---
+
+## 40. Résultat suite complète
+
+`npm run test` · exit 0 · **136 files / 1355 tests** · ~8s.
+
+---
+
+## 41. Scope produit
+
+14 CREATE · 0 MODIFY · 0 DELETE · inchangé pendant revue.
+
+---
+
+## 42. Scope documentaire
+
+103 MODIFY (ce cycle) · 128 CREATE · 104–127 byte-identical · 129 ABSENT.
+
+---
+
+## 43. Package / lockfile
+
+`fcb004b52d4547bffd171dd0411d08f41f87b21a5e5fa5cdf1193e23342175cf` / `042fc4467b24d5c8dea1c768fa97d01861f2c0b76667ce6bd20cde6b0e0a18ea` — inchangés.
+
+---
+
+## 44. Sécurité / RSSI
+
+PASS — pas de secret/PII/réseau/disque/domaine provider.
+
+---
+
+## 45. RGPD
+
+PASS — minimisation · pas de capture.
+
+---
+
+## 46. Performance
+
+PASS — O(1) · pas d’I/O.
+
+---
+
+## 47. GreenOps
+
+PASS — pas de dépendance ajoutée.
+
+---
+
+## 48. Résilience
+
+PASS — erreurs structurées · déterminisme.
+
+---
+
+## 49. Réversibilité
+
+PASS — suppression 14 fichiers + docs 127/128 restaure pré-T0 code.
+
+---
+
+## 50. Risques
+
+Packaging · overflow calendar · période non canonique · API support · unknown textuel · confusion may-block vs must-block (documentée).
+
+---
+
+## 51. Dette
+
+Money deferred · ClockPort app · T1–T7 · ledger · enforcement · durcissement calendar/shape/tests.
+
+---
+
+## 52. Findings
+
+
+### PR-T0-FIND-01 — Impossible calendar dates accepted via Date.parse overflow
+- **Sévérité :** MEDIUM
+- **Fichier :** `app/lib/oa/finops/domain/invariants.ts` · `validateIsoTimestamp` / `period.ts` · `computeUtcMonthPeriod`
+- **Observation :** `2023-02-29`, `2026-02-30`, `2026-04-31` passent `validateIsoTimestamp` (null) et sont convertis en mois adjacents (mars/mai) via `Date.parse` overflow.
+- **Exigence :** 126 — timestamp parseable / instant déterministe (pas d’exigence explicite de validité calendaire stricte).
+- **Risque :** un `occurredAt` mal formé calendairement pourrait être rattaché au mauvais mois UTC sans erreur.
+- **Preuve :** probes temporelles (voir §27).
+- **Recommandation :** en lot futur borné, rejeter les dates dont les composants UTC ne round-tripent pas ; ou documenter explicitement l’acceptation overflow.
+- **Gate :** réserve arbitration / éventuel fix cycle.
+- **Bloquant publication ?** Non pour qualité T0 vs contrat 126 minimal — **oui pour assurance calendaire renforcée**.
+
+### PR-T0-FIND-02 — validateFinOpsPeriodShape n’impose pas une période mensuelle canonique
+- **Sévérité :** MEDIUM
+- **Fichier :** `invariants.ts` · `validateFinOpsPeriodShape` ; consommateurs `periodContainsInstant` / `finOpsPeriodKey`
+- **Observation :** périodes demi-mois, multi-mois ou start mid-month passent la shape ; `finOpsPeriodKey` dérive YYYY-MM depuis periodStart même si end n’est pas le mois suivant.
+- **Exigence :** 126 — shape = start < end · timezone UTC ; canonique produite par `computeUtcMonthPeriod`.
+- **Risque :** appelant futur passant une période construite manuellement obtient un comportement non mensuel.
+- **Preuve :** probes PROBE_PERIODS.
+- **Recommandation :** documenter « shape ≠ canonical month » ; éventuellement assert canonique dans T1+ ou helper séparé.
+- **Gate :** réserve.
+- **Bloquant ?** Non vs contrat 126 (shape only).
+
+### PR-T0-FIND-03 — assertUnknownNotNumericZero couverture textuelle partielle
+- **Sévérité :** LOW
+- **Fichier :** `invariants.ts` · `assertUnknownNotNumericZero`
+- **Observation :** refuse 0 / BigInt(0) / "0" / "0.0" / "0.00" ; n’attrape pas "00", "0.000", "-0" string.
+- **Exigence :** 126 / T-TECH-06 minimal (0 / 0n / "0").
+- **Risque :** fausse assurance si Money textuel introduit plus tard sans élargir le garde-fou.
+- **Preuve :** PROBE_UNKNOWN.
+- **Recommandation :** élargir quand Money arrive ; ne pas implémenter Money maintenant.
+- **Gate :** réserve.
+- **Bloquant ?** Non.
+
+### PR-T0-FIND-04 — Symboles publics support au-delà de la liste §26 stricte
+- **Sévérité :** MEDIUM
+- **Fichier :** `index.ts` · `types.ts` · `invariants.ts`
+- **Observation :** exports publics non listés comme API publique fermée dans §26 : `FINOPS_SOURCES`, `requireValidIsoTimestamp`, `requireValidFinOpsPeriod` (et `createFinOpsError` est listé dans errors.ts). Helpers require* exposent une surface throw.
+- **Classification :** JUSTIFIED SUPPORT SYMBOL (tests + conventions repo) — pas d’autorité runtime nouvelle.
+- **Risque :** engagement public prématuré ; surface d’erreur élargie.
+- **Preuve :** comparaison barrel vs 126 §26.
+- **Recommandation :** accepter comme support T0 ou réduire barrel en fix cycle si Morris exige API minimale stricte.
+- **Gate :** réserve arbitration.
+- **Bloquant ?** Non (pas de nouvelle autorité FinOps).
+
+### PR-T0-FIND-05 — Limites du test importBoundaries
+- **Sévérité :** LOW
+- **Fichier :** `importBoundaries.test.ts`
+- **Observation :** regex sur lignes `import`/`export` ; ne couvre pas `import()`, `require()`, side-effect imports, `node:fs/promises`.
+- **Exigence :** frontières domaine.
+- **Risque :** faux sentiment de garantie automated.
+- **Compensation :** inspection manuelle des 8 fichiers domaine — aucun import interdit ; pas de Date.now ; pas de process.env.
+- **Recommandation :** durcir le test dans un futur lot tests ; pas de correctif silencieux maintenant.
+- **Gate :** réserve.
+- **Bloquant ?** Non.
+
+### PR-T0-FIND-06 — MORRIS PACKAGING DECISION REQUIRED
+- **Sévérité :** HIGH (pour publication Git) / non-blocker technique T0
+- **Fichier :** packaging Git
+- **Observation :** 14 fichiers T0 + 103/127/128 = delta incrémental ; Local Project State contient ~38 documents `projects/sfia-studio/9*.md`–`127` non trackés vs `origin/main`. Aucune convention Git claire n’impose le package 90–128 vs commit incrémental T0.
+- **Risque :** PR monstrueuse (~49k lignes docs) ou chaîne documentaire incomplète si commit incrémental seul.
+- **Preuve :** `git ls-files --others` inventaire.
+- **Recommandation :** arbitrage Morris explicite avant commit/push.
+- **Gate :** **obligatoire avant publication**.
+- **Bloquant publication ?** **Oui** jusqu’à décision. **Non** pour qualité domaine T0.
+
+### PR-T0-FIND-07 — assertDistinctEvidenceClasses tautologique
+- **Sévérité :** NOTE
+- **Fichier :** `costEvidence.ts`
+- **Observation :** Set de littéraux const toujours size 4 ; ne détecte pas un mapping SoT→class incorrect.
+- **Risque :** faible — mapping couvert par tests de classification.
+- **Recommandation :** conserver tests de mapping ; helper optionnel.
+- **Bloquant ?** Non.
+
+### PR-T0-FIND-08 — DetailCode FINOPS_INVALID_SOURCE non exercé
+- **Sévérité :** NOTE
+- **Fichier :** `types.ts` · `FinOpsDetailCode`
+- **Observation :** code présent ; aucun chemin T0 ne le produit (union fermée + exhaustivité).
+- **Risque :** bruit API.
+- **Recommandation :** conserver pour T1+ ou retirer en fix cosmétique futur.
+- **Bloquant ?** Non.
+
+
+---
+
+## 53. Blockers
+
+**Aucun BLOCKER technique** au sens défaut domaine vs contrat 126.
+
+**Publication Git bloquée** jusqu’à arbitrage réserves / packaging (FIND-06 + verdict READY WITH RESERVES).
+
+---
+
+## 54. Réserves
+
+FIND-01 · FIND-02 · FIND-03 · FIND-04 · FIND-05 · FIND-06 · FIND-07 · FIND-08.
+
+---
+
+## 55. Manifest de commit candidat
+
+**Non exécuté.** Candidate A (incrémental) :
+
+1. 14 fichiers `app/lib/oa/finops/**` + `__tests__/oa/finops/**`
+2. `103-…-backlog.md`
+3. `126-…-t0-execution-pack.md` (si publication pack non faite)
+4. `127-…-t0-execution.md`
+5. `128-…-t0-pr-readiness.md`
+
+**Candidate B :** package `90`–`128` + 14 fichiers — nécessite décision Morris.
+
+Additions estimées Candidate A code/tests : ~1036 lignes + docs 103/127/128.
+
+---
+
+## 56. Fichiers à exclure
+
+`.tmp-sfia-review/**` · artefacts locaux · package.json/lock · tout hors liste Morris.
+
+---
+
+## 57. Commit message candidat
+
+```text
+feat(oa-finops): add T0 pure domain contracts and unit tests
+
+Introduce provider-independent FinOps period, SoT, evidence, and
+blocking-eligibility rules with targeted tests. Documentation records
+127/128 remain local until Morris packaging/reserve arbitration.
+```
+
+---
+
+## 58. Stratégie de commit
+
+Prefer **1 commit produit+tests** + **1 commit docs** si packaging incrémental ; sinon mono-commit package documentaire si Morris l’exige. **Non exécuté.**
+
+---
+
+## 59. PR title candidat
+
+`feat(oa-finops): FinOps technical lot T0 — pure domain contracts`
+
+---
+
+## 60. PR body candidat
+
+```markdown
+## Summary
+- Implements FinOps T0 pure domain contracts (period UTC, SoT 1–6, evidence, blocking eligibility).
+- Adds six unit test files; no provider/persistence/runtime wiring.
+- Documents execution (127) and PR readiness (128). TB-04-04 remains NOT DONE.
+
+## Scope
+- 14 authorized files under `app/lib/oa/finops` and `__tests__/oa/finops`
+- Docs 103/127/128 (and packaging set per Morris decision)
+
+## Out of scope
+- T1–T7, LOT-D1, Money, SQL/migrations, OpenAI/Neon wiring, active enforcement
+
+## Validations
+- targeted finops tests 39/39
+- typecheck/lint/full suite 1355/1355
+
+## Reserves
+See document 128 findings (calendar overflow, period shape, packaging, API support).
+
+## Checklist
+- [ ] Morris packaging decision applied
+- [ ] Reserves accepted or fixed under dedicated gate
+- [ ] No TB-04-04 DONE claim
+- [ ] No LOT-D1 authorization
+```
+
+---
+
+## 61. Base / head candidates
+
+| Champ | Valeur |
+|---|---|
+| Base | `main` @ `8dc54db…` |
+| Head locale | `pr-readiness/…-t0` ou future `delivery/…-t0` publiée |
+| Remote head | **non créée** |
+
+Aucune URL PR.
+
+---
+
+## 62. Checklist future
+
+- arbitrer réserves
+- choisir packaging
+- commit/push sous GO publication
+- créer PR sous GO distinct
+- CI verte
+- review humaine
+- merge sous GO distinct
+
+---
+
+## 63. Conditions avant commit
+
+- réserves arbitrées ou acceptées explicitement
+- packaging décidé
+- manifest exact
+- aucun fichier hors liste
+- validations toujours vertes
+- GO publication consommé
+
+---
+
+## 64. Conditions avant push
+
+- commit local conforme
+- branche remote absente ou FF-only
+- aucun secret
+- GO push consommé
+
+---
+
+## 65. Conditions avant création PR
+
+- branche poussée
+- title/body conformes
+- GO PR create consommé
+- réserves visibles dans la PR
+
+---
+
+## 66. Conditions avant merge
+
+- CI + review
+- GO merge consommé
+- TB-04-04 toujours NOT DONE
+- T1–T7 non autorisés
+
+---
+
+## 67. Impacts TB-04-04
+
+T0 executed + PR readiness reviewed · ChatGPT validation via Critical review · **DONE = no**.
+
+---
+
+## 68. Impacts TB-02-05
+
+Préservé · aucun metering runtime.
+
+---
+
+## 69. T1 à T7
+
+**NOT AUTHORIZED — NOT STARTED**.
+
+---
+
+## 70. LOT-D1
+
+**NOT AUTHORIZED — Delivery NOT-CONSUMED**.
+
+---
+
+## 71. Graphe 33/56
+
+Préservé · priorités P0=6 P1=13 P2=13 P3=1.
+
+---
+
+## 72. Aucun backlog item DONE
+
+Confirmé.
+
+---
+
+## 73. Local Git Truth finale
+
+| Champ | Valeur |
+|---|---|
+| Branche | `pr-readiness/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0` |
+| HEAD | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
+| origin/main | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
+| merge-base | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
+| ahead/behind | `0	0` |
+| Status T0 scoped | |
+
+```text
+?? projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
+?? projects/sfia-studio/app/__tests__/oa/finops/
+?? projects/sfia-studio/app/lib/oa/finops/
+```
+
+---
+
+## 74. Review Pack
+
+Full — `.tmp-sfia-review/chatgpt-review.md` (ce cycle).
+
+---
+
+## 75. Handoff
+
+Publication L3 attendue : `docs(review-handoff): publish Assistant SFIA FinOps technical lot T0 PR readiness`.
+
+---
+
+## 76. Prochaine gate candidate
+
+```text
+GO DECISIONS PR READINESS SFIA STUDIO —
+ASSISTANT SFIA NATIF OPENAI —
+ARBITRATE FINOPS TECHNICAL LOT T0 RESERVES
+```
+
+Candidate uniquement — non consommée.
+
+---
+
+## 77. Verdict unique
+
+**READY WITH RESERVES —**
+**NO BLOCKER —**
+**MORRIS RESERVE ACCEPTANCE AND PACKAGING DECISION REQUIRED BEFORE PUBLICATION —**
+**NO COMMIT, PUSH OR PR AUTHORIZED —**
+**T1 TO T7 NOT AUTHORIZED —**
+**TB-04-04 NOT DONE —**
+**LOT-D1 NOT AUTHORIZED**

```

## Diff complet des quatorze fichiers
```diff
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/types.ts b/projects/sfia-studio/app/lib/oa/finops/domain/types.ts
new file
+/**
+ * FinOps T0 — pure domain contracts (provider- and persistence-independent).
+ */
+
+export type FinOpsPeriod = {
+  readonly periodStart: string;
+  readonly periodEnd: string;
+  readonly timezone: "UTC";
+};
+
+export type FinOpsSourceOfTruth =
+  | "BILLED"
+  | "PROVIDER_OBSERVED"
+  | "API_USAGE"
+  | "LOCAL_COUNT"
+  | "PARAMETRIC_ESTIMATE"
+  | "UNKNOWN";
+
+export type FinOpsCostEvidenceClass =
+  | "estimated"
+  | "observed"
+  | "billed"
+  | "unknown";
+
+export type FinOpsBlockingReason =
+  | "SOURCE_MAY_BLOCK"
+  | "API_USAGE_NEVER_BLOCKS"
+  | "LOCAL_COUNT_NEVER_BLOCKS"
+  | "ESTIMATE_NEVER_BLOCKS"
+  | "UNKNOWN_NEVER_BLOCKS";
+
+export type FinOpsBlockingDecision = {
+  readonly eligible: boolean;
+  readonly reason: FinOpsBlockingReason;
+  readonly source: FinOpsSourceOfTruth;
+  readonly confidenceClass: FinOpsCostEvidenceClass;
+};
+
+export type FinOpsDetailCode =
+  | "FINOPS_INVALID_TIMESTAMP"
+  | "FINOPS_INVALID_PERIOD"
+  | "FINOPS_INVALID_TIMEZONE"
+  | "FINOPS_UNKNOWN_AS_ZERO"
+  | "FINOPS_INVALID_SOURCE"
+  | "FINOPS_EVIDENCE_COLLAPSE";
+
+/** Lower rank = more authoritative (SoT hierarchy 1–6). */
+export const FINOPS_SOT_RANK = {
+  BILLED: 1,
+  PROVIDER_OBSERVED: 2,
+  API_USAGE: 3,
+  LOCAL_COUNT: 4,
+  PARAMETRIC_ESTIMATE: 5,
+  UNKNOWN: 6,
+} as const satisfies Record<FinOpsSourceOfTruth, 1 | 2 | 3 | 4 | 5 | 6>;
+
+export const FINOPS_SOURCES = [
+  "BILLED",
+  "PROVIDER_OBSERVED",
+  "API_USAGE",
+  "LOCAL_COUNT",
+  "PARAMETRIC_ESTIMATE",
+  "UNKNOWN",
+] as const satisfies ReadonlyArray<FinOpsSourceOfTruth>;
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/errors.ts b/projects/sfia-studio/app/lib/oa/finops/domain/errors.ts
new file
+/**
+ * FinOps T0 — structured domain errors (no infrastructure dependency).
+ */
+
+import type { FinOpsDetailCode } from "./types";
+
+export type FinOpsStructuredError = {
+  readonly detailCode: FinOpsDetailCode;
+  readonly message: string;
+  readonly reason: string;
+  readonly timestamp?: string;
+};
+
+export function createFinOpsError(input: {
+  detailCode: FinOpsDetailCode;
+  reason: string;
+  timestamp?: string;
+}): FinOpsStructuredError {
+  return {
+    detailCode: input.detailCode,
+    message: `FinOps domain error: ${input.detailCode}`,
+    reason: input.reason,
+    ...(input.timestamp !== undefined ? { timestamp: input.timestamp } : {}),
+  };
+}
+
+export class FinOpsDomainError extends Error {
+  readonly structured: FinOpsStructuredError;
+
+  constructor(structured: FinOpsStructuredError) {
+    super(structured.message);
+    this.name = "FinOpsDomainError";
+    this.structured = structured;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts
new file
+/**
+ * FinOps T0 — pure domain invariants (no hidden wall-clock, no Money arithmetic).
+ */
+
+import { createFinOpsError, FinOpsDomainError } from "./errors";
+import type { FinOpsCostEvidenceClass, FinOpsPeriod } from "./types";
+
+export type InvariantViolation = {
+  readonly detailCode:
+    | "FINOPS_INVALID_TIMESTAMP"
+    | "FINOPS_INVALID_PERIOD"
+    | "FINOPS_INVALID_TIMEZONE"
+    | "FINOPS_UNKNOWN_AS_ZERO";
+  readonly reason: string;
+};
+
+/** ISO-8601 instant with Z or numeric offset (converted later via UTC ms). */
+const ISO_INSTANT_RE =
+  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/;
+
+export function validateIsoTimestamp(
+  instantIso: string,
+): InvariantViolation | null {
+  if (typeof instantIso !== "string" || instantIso.length === 0) {
+    return {
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "timestamp_empty_or_not_string",
+    };
+  }
+  if (!ISO_INSTANT_RE.test(instantIso)) {
+    return {
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "timestamp_not_iso_instant",
+    };
+  }
+  const ms = Date.parse(instantIso);
+  if (!Number.isFinite(ms)) {
+    return {
+      detailCode: "FINOPS_INVALID_TIMESTAMP",
+      reason: "timestamp_not_parseable",
+    };
+  }
+  return null;
+}
+
+export function validateFinOpsPeriodShape(
+  period: FinOpsPeriod,
+): InvariantViolation | null {
+  if (period.timezone !== "UTC") {
+    return {
+      detailCode: "FINOPS_INVALID_TIMEZONE",
+      reason: "timezone_must_be_utc",
+    };
+  }
+  const startViolation = validateIsoTimestamp(period.periodStart);
+  if (startViolation) {
+    return {
+      detailCode: "FINOPS_INVALID_PERIOD",
+      reason: "period_start_invalid",
+    };
+  }
+  const endViolation = validateIsoTimestamp(period.periodEnd);
+  if (endViolation) {
+    return {
+      detailCode: "FINOPS_INVALID_PERIOD",
+      reason: "period_end_invalid",
+    };
+  }
+  const startMs = Date.parse(period.periodStart);
+  const endMs = Date.parse(period.periodEnd);
+  if (!(startMs < endMs)) {
+    return {
+      detailCode: "FINOPS_INVALID_PERIOD",
+      reason: "period_start_not_strictly_before_end",
+    };
+  }
+  return null;
+}
+
+/**
+ * Unknown evidence must never be silently treated as numeric zero.
+ * Money representation remains deferred — this only guards assimilation.
+ */
+export function assertUnknownNotNumericZero(
+  evidenceClass: FinOpsCostEvidenceClass,
+  representedAs: unknown,
+): InvariantViolation | null {
+  if (evidenceClass !== "unknown") {
+    return null;
+  }
+  if (
+    representedAs === 0 ||
+    representedAs === BigInt(0) ||
+    representedAs === "0" ||
+    representedAs === "0.0" ||
+    representedAs === "0.00"
+  ) {
+    return {
+      detailCode: "FINOPS_UNKNOWN_AS_ZERO",
+      reason: "unknown_must_not_equal_numeric_zero",
+    };
+  }
+  return null;
+}
+
+export function requireValidIsoTimestamp(instantIso: string): number {
+  const violation = validateIsoTimestamp(instantIso);
+  if (violation) {
+    throw new FinOpsDomainError(
+      createFinOpsError({
+        detailCode: violation.detailCode,
+        reason: violation.reason,
+        timestamp: instantIso,
+      }),
+    );
+  }
+  return Date.parse(instantIso);
+}
+
+export function requireValidFinOpsPeriod(period: FinOpsPeriod): void {
+  const violation = validateFinOpsPeriodShape(period);
+  if (violation) {
+    throw new FinOpsDomainError(
+      createFinOpsError({
+        detailCode: violation.detailCode,
+        reason: violation.reason,
+      }),
+    );
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/period.ts b/projects/sfia-studio/app/lib/oa/finops/domain/period.ts
new file
+/**
+ * FinOps T0 — UTC calendar-month period helpers (injected instant; no hidden wall-clock).
+ */
+
+import { requireValidFinOpsPeriod, requireValidIsoTimestamp } from "./invariants";
+import type { FinOpsPeriod } from "./types";
+
+/**
+ * Calendar month in UTC for the given instant.
+ * periodStart inclusive; periodEnd exclusive (= first instant of next UTC month).
+ */
+export function computeUtcMonthPeriod(instantIso: string): FinOpsPeriod {
+  const ms = requireValidIsoTimestamp(instantIso);
+  const d = new Date(ms);
+  const year = d.getUTCFullYear();
+  const month = d.getUTCMonth();
+  const periodStart = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0)).toISOString();
+  const periodEnd = new Date(
+    Date.UTC(year, month + 1, 1, 0, 0, 0, 0),
+  ).toISOString();
+  return {
+    periodStart,
+    periodEnd,
+    timezone: "UTC",
+  };
+}
+
+export function periodContainsInstant(
+  period: FinOpsPeriod,
+  instantIso: string,
+): boolean {
+  requireValidFinOpsPeriod(period);
+  const t = requireValidIsoTimestamp(instantIso);
+  const start = Date.parse(period.periodStart);
+  const end = Date.parse(period.periodEnd);
+  return start <= t && t < end;
+}
+
+/** Deterministic ordering by periodStart (UTC instant). */
+export function compareFinOpsPeriods(
+  a: FinOpsPeriod,
+  b: FinOpsPeriod,
+): -1 | 0 | 1 {
+  requireValidFinOpsPeriod(a);
+  requireValidFinOpsPeriod(b);
+  const aMs = Date.parse(a.periodStart);
+  const bMs = Date.parse(b.periodStart);
+  if (aMs < bMs) return -1;
+  if (aMs > bMs) return 1;
+  return 0;
+}
+
+/** Stable key YYYY-MM from UTC periodStart. */
+export function finOpsPeriodKey(period: FinOpsPeriod): string {
+  requireValidFinOpsPeriod(period);
+  const d = new Date(Date.parse(period.periodStart));
+  const y = d.getUTCFullYear();
+  const m = d.getUTCMonth() + 1;
+  return `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}`;
+}
+
+/**
+ * Late events attach to the UTC month of occurredAt (injected instant).
+ */
+export function assignInstantToPeriod(instantIso: string): FinOpsPeriod {
+  return computeUtcMonthPeriod(instantIso);
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts b/projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts
new file
+/**
+ * FinOps T0 — Source of Truth ranking and eligibility helpers.
+ */
+
+import { FINOPS_SOT_RANK, type FinOpsSourceOfTruth } from "./types";
+
+export function sourceOfTruthRank(source: FinOpsSourceOfTruth): number {
+  return FINOPS_SOT_RANK[source];
+}
+
+/** Negative if a is more authoritative than b (lower rank). */
+export function compareSourceOfTruth(
+  a: FinOpsSourceOfTruth,
+  b: FinOpsSourceOfTruth,
+): number {
+  return sourceOfTruthRank(a) - sourceOfTruthRank(b);
+}
+
+export function sourceMayBlock(source: FinOpsSourceOfTruth): boolean {
+  switch (source) {
+    case "BILLED":
+    case "PROVIDER_OBSERVED":
+      return true;
+    case "API_USAGE":
+    case "LOCAL_COUNT":
+    case "PARAMETRIC_ESTIMATE":
+    case "UNKNOWN":
+      return false;
+    default: {
+      const _exhaustive: never = source;
+      return _exhaustive;
+    }
+  }
+}
+
+/** All SoT levels remain observable / informational. */
+export function sourceMayInform(source: FinOpsSourceOfTruth): boolean {
+  switch (source) {
+    case "BILLED":
+    case "PROVIDER_OBSERVED":
+    case "API_USAGE":
+    case "LOCAL_COUNT":
+    case "PARAMETRIC_ESTIMATE":
+    case "UNKNOWN":
+      return true;
+    default: {
+      const _exhaustive: never = source;
+      return _exhaustive;
+    }
+  }
+}
+
+/**
+ * All sources may feed a future human-review path.
+ * T0 never triggers review.
+ */
+export function sourceMayRequestHumanReview(
+  source: FinOpsSourceOfTruth,
+): boolean {
+  switch (source) {
+    case "BILLED":
+    case "PROVIDER_OBSERVED":
+    case "API_USAGE":
+    case "LOCAL_COUNT":
+    case "PARAMETRIC_ESTIMATE":
+    case "UNKNOWN":
+      return true;
+    default: {
+      const _exhaustive: never = source;
+      return _exhaustive;
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts b/projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts
new file
+/**
+ * FinOps T0 — cost evidence classification (no monetary values).
+ */
+
+import { createFinOpsError, FinOpsDomainError } from "./errors";
+import type { FinOpsCostEvidenceClass, FinOpsSourceOfTruth } from "./types";
+
+export function classifyCostEvidenceFromSource(
+  source: FinOpsSourceOfTruth,
+): FinOpsCostEvidenceClass {
+  switch (source) {
+    case "BILLED":
+      return "billed";
+    case "PROVIDER_OBSERVED":
+    case "API_USAGE":
+      return "observed";
+    case "LOCAL_COUNT":
+    case "PARAMETRIC_ESTIMATE":
+      return "estimated";
+    case "UNKNOWN":
+      return "unknown";
+    default: {
+      const _exhaustive: never = source;
+      return _exhaustive;
+    }
+  }
+}
+
+/** Runtime guard that evidence class literals remain distinct. */
+export function assertDistinctEvidenceClasses(): true {
+  const classes = ["estimated", "observed", "billed", "unknown"] as const;
+  if (new Set<string>(classes).size !== classes.length) {
+    throw new FinOpsDomainError(
+      createFinOpsError({
+        detailCode: "FINOPS_EVIDENCE_COLLAPSE",
+        reason: "evidence_classes_must_remain_distinct",
+      }),
+    );
+  }
+  return true;
+}
+
+export function isUnknownEvidence(
+  evidenceClass: FinOpsCostEvidenceClass,
+): boolean {
+  return evidenceClass === "unknown";
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts b/projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts
new file
+/**
+ * FinOps T0 — blocking eligibility from Source of Truth (never from amount).
+ */
+
+import { classifyCostEvidenceFromSource } from "./costEvidence";
+import type {
+  FinOpsBlockingDecision,
+  FinOpsSourceOfTruth,
+} from "./types";
+
+/**
+ * Estimation never blocks — invariant exported for explicit assertion.
+ * Blocking eligibility is decided by SoT, not by evidence class alone.
+ */
+export const ESTIMATION_NEVER_BLOCKS = true as const;
+
+export function evaluateBlockingEligibility(
+  source: FinOpsSourceOfTruth,
+): FinOpsBlockingDecision {
+  const confidenceClass = classifyCostEvidenceFromSource(source);
+  switch (source) {
+    case "BILLED":
+      return {
+        eligible: true,
+        reason: "SOURCE_MAY_BLOCK",
+        source,
+        confidenceClass,
+      };
+    case "PROVIDER_OBSERVED":
+      return {
+        eligible: true,
+        reason: "SOURCE_MAY_BLOCK",
+        source,
+        confidenceClass,
+      };
+    case "API_USAGE":
+      return {
+        eligible: false,
+        reason: "API_USAGE_NEVER_BLOCKS",
+        source,
+        confidenceClass,
+      };
+    case "LOCAL_COUNT":
+      return {
+        eligible: false,
+        reason: "LOCAL_COUNT_NEVER_BLOCKS",
+        source,
+        confidenceClass,
+      };
+    case "PARAMETRIC_ESTIMATE":
+      return {
+        eligible: false,
+        reason: "ESTIMATE_NEVER_BLOCKS",
+        source,
+        confidenceClass,
+      };
+    case "UNKNOWN":
+      return {
+        eligible: false,
+        reason: "UNKNOWN_NEVER_BLOCKS",
+        source,
+        confidenceClass,
+      };
+    default: {
+      const _exhaustive: never = source;
+      return _exhaustive;
+    }
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/finops/index.ts b/projects/sfia-studio/app/lib/oa/finops/index.ts
new file
+/**
+ * Public FinOps T0 API — pure domain contracts only.
+ */
+
+export type {
+  FinOpsBlockingDecision,
+  FinOpsBlockingReason,
+  FinOpsCostEvidenceClass,
+  FinOpsDetailCode,
+  FinOpsPeriod,
+  FinOpsSourceOfTruth,
+} from "./domain/types";
+export { FINOPS_SOT_RANK, FINOPS_SOURCES } from "./domain/types";
+
+export type { FinOpsStructuredError } from "./domain/errors";
+export { createFinOpsError, FinOpsDomainError } from "./domain/errors";
+
+export type { InvariantViolation } from "./domain/invariants";
+export {
+  assertUnknownNotNumericZero,
+  requireValidFinOpsPeriod,
+  requireValidIsoTimestamp,
+  validateFinOpsPeriodShape,
+  validateIsoTimestamp,
+} from "./domain/invariants";
+
+export {
+  assignInstantToPeriod,
+  compareFinOpsPeriods,
+  computeUtcMonthPeriod,
+  finOpsPeriodKey,
+  periodContainsInstant,
+} from "./domain/period";
+
+export {
+  compareSourceOfTruth,
+  sourceMayBlock,
+  sourceMayInform,
+  sourceMayRequestHumanReview,
+  sourceOfTruthRank,
+} from "./domain/sourceOfTruth";
+
+export {
+  assertDistinctEvidenceClasses,
+  classifyCostEvidenceFromSource,
+  isUnknownEvidence,
+} from "./domain/costEvidence";
+
+export {
+  ESTIMATION_NEVER_BLOCKS,
+  evaluateBlockingEligibility,
+} from "./domain/blockingEligibility";
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/period.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/period.test.ts
new file
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  FinOpsDomainError,
+  assignInstantToPeriod,
+  compareFinOpsPeriods,
+  computeUtcMonthPeriod,
+  finOpsPeriodKey,
+  periodContainsInstant,
+} from "@/lib/oa/finops";
+
+describe("FinOps T0 period (T-TECH-07)", () => {
+  it("maps January instant to February-bounded UTC month", () => {
+    const period = computeUtcMonthPeriod("2026-01-15T12:00:00.000Z");
+    expect(period).toEqual({
+      periodStart: "2026-01-01T00:00:00.000Z",
+      periodEnd: "2026-02-01T00:00:00.000Z",
+      timezone: "UTC",
+    });
+    expect(finOpsPeriodKey(period)).toBe("2026-01");
+  });
+
+  it("maps December to January of the next year", () => {
+    const period = computeUtcMonthPeriod("2026-12-31T23:59:59.999Z");
+    expect(period.periodStart).toBe("2026-12-01T00:00:00.000Z");
+    expect(period.periodEnd).toBe("2027-01-01T00:00:00.000Z");
+    expect(finOpsPeriodKey(period)).toBe("2026-12");
+  });
+
+  it("places leap-day in February of a leap year", () => {
+    const period = computeUtcMonthPeriod("2024-02-29T10:00:00.000Z");
+    expect(period.periodStart).toBe("2024-02-01T00:00:00.000Z");
+    expect(period.periodEnd).toBe("2024-03-01T00:00:00.000Z");
+    expect(periodContainsInstant(period, "2024-02-29T23:59:59.999Z")).toBe(
+      true,
+    );
+  });
+
+  it("treats periodStart as inclusive and periodEnd as exclusive", () => {
+    const period = computeUtcMonthPeriod("2026-03-10T00:00:00.000Z");
+    expect(periodContainsInstant(period, period.periodStart)).toBe(true);
+    expect(periodContainsInstant(period, period.periodEnd)).toBe(false);
+    expect(
+      periodContainsInstant(period, "2026-03-31T23:59:59.999Z"),
+    ).toBe(true);
+  });
+
+  it("converts offset timestamps to the UTC month of the instant", () => {
+    // 2026-12-31T23:00:00-01:00 === 2027-01-01T00:00:00.000Z → January 2027
+    const period = computeUtcMonthPeriod("2026-12-31T23:00:00.000-01:00");
+    expect(period.periodStart).toBe("2027-01-01T00:00:00.000Z");
+    expect(period.periodEnd).toBe("2027-02-01T00:00:00.000Z");
+    expect(finOpsPeriodKey(period)).toBe("2027-01");
+  });
+
+  it("is unaffected by DST because boundaries are UTC", () => {
+    // US spring-forward window does not change UTC month math.
+    const before = computeUtcMonthPeriod("2026-03-08T06:59:59.000Z");
+    const after = computeUtcMonthPeriod("2026-03-08T07:00:01.000Z");
+    expect(before).toEqual(after);
+    expect(finOpsPeriodKey(before)).toBe("2026-03");
+  });
+
+  it("assigns late events by occurredAt, not reception time (T-TECH-07)", () => {
+    const occurredAt = "2026-01-31T23:30:00.000Z";
+    const receptionAt = "2026-02-02T09:00:00.000Z";
+    const assigned = assignInstantToPeriod(occurredAt);
+    const receptionPeriod = computeUtcMonthPeriod(receptionAt);
+    expect(assigned).toEqual(computeUtcMonthPeriod(occurredAt));
+    expect(finOpsPeriodKey(assigned)).toBe("2026-01");
+    expect(finOpsPeriodKey(receptionPeriod)).toBe("2026-02");
+    expect(compareFinOpsPeriods(assigned, receptionPeriod)).toBe(-1);
+  });
+
+  it("compares periods deterministically", () => {
+    const a = computeUtcMonthPeriod("2026-01-01T00:00:00.000Z");
+    const b = computeUtcMonthPeriod("2026-02-01T00:00:00.000Z");
+    const a2 = computeUtcMonthPeriod("2026-01-20T00:00:00.000Z");
+    expect(compareFinOpsPeriods(a, b)).toBe(-1);
+    expect(compareFinOpsPeriods(b, a)).toBe(1);
+    expect(compareFinOpsPeriods(a, a2)).toBe(0);
+  });
+
+  it("is deterministic for the same injected instant", () => {
+    const iso = "2026-06-15T12:34:56.789Z";
+    expect(computeUtcMonthPeriod(iso)).toEqual(computeUtcMonthPeriod(iso));
+  });
+
+  it("rejects invalid timestamps", () => {
+    expect(() => computeUtcMonthPeriod("not-a-timestamp")).toThrow(
+      FinOpsDomainError,
+    );
+    expect(() => computeUtcMonthPeriod("2026-01-01")).toThrow(
+      FinOpsDomainError,
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts
new file
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  FINOPS_SOT_RANK,
+  FINOPS_SOURCES,
+  compareSourceOfTruth,
+  sourceMayBlock,
+  sourceMayInform,
+  sourceMayRequestHumanReview,
+  sourceOfTruthRank,
+  type FinOpsSourceOfTruth,
+} from "@/lib/oa/finops";
+
+describe("FinOps T0 source of truth", () => {
+  it("exposes exactly six closed SoT values", () => {
+    expect([...FINOPS_SOURCES]).toEqual([
+      "BILLED",
+      "PROVIDER_OBSERVED",
+      "API_USAGE",
+      "LOCAL_COUNT",
+      "PARAMETRIC_ESTIMATE",
+      "UNKNOWN",
+    ]);
+  });
+
+  it("ranks SoT from 1 (most authoritative) to 6", () => {
+    expect(FINOPS_SOT_RANK.BILLED).toBe(1);
+    expect(FINOPS_SOT_RANK.PROVIDER_OBSERVED).toBe(2);
+    expect(FINOPS_SOT_RANK.API_USAGE).toBe(3);
+    expect(FINOPS_SOT_RANK.LOCAL_COUNT).toBe(4);
+    expect(FINOPS_SOT_RANK.PARAMETRIC_ESTIMATE).toBe(5);
+    expect(FINOPS_SOT_RANK.UNKNOWN).toBe(6);
+    for (const source of FINOPS_SOURCES) {
+      expect(sourceOfTruthRank(source)).toBe(FINOPS_SOT_RANK[source]);
+    }
+  });
+
+  it("orders the full hierarchy by rank", () => {
+    const ordered = [...FINOPS_SOURCES].sort(compareSourceOfTruth);
+    expect(ordered).toEqual([...FINOPS_SOURCES]);
+    expect(compareSourceOfTruth("BILLED", "UNKNOWN")).toBeLessThan(0);
+    expect(compareSourceOfTruth("UNKNOWN", "BILLED")).toBeGreaterThan(0);
+    expect(compareSourceOfTruth("API_USAGE", "API_USAGE")).toBe(0);
+  });
+
+  it("marks only BILLED and PROVIDER_OBSERVED as blocking-eligible", () => {
+    const blocking: FinOpsSourceOfTruth[] = [];
+    const nonBlocking: FinOpsSourceOfTruth[] = [];
+    for (const source of FINOPS_SOURCES) {
+      if (sourceMayBlock(source)) blocking.push(source);
+      else nonBlocking.push(source);
+    }
+    expect(blocking).toEqual(["BILLED", "PROVIDER_OBSERVED"]);
+    expect(nonBlocking).toEqual([
+      "API_USAGE",
+      "LOCAL_COUNT",
+      "PARAMETRIC_ESTIMATE",
+      "UNKNOWN",
+    ]);
+  });
+
+  it("keeps all sources informational and review-capable without triggering review", () => {
+    for (const source of FINOPS_SOURCES) {
+      expect(sourceMayInform(source)).toBe(true);
+      expect(sourceMayRequestHumanReview(source)).toBe(true);
+    }
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts
new file
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  FINOPS_SOURCES,
+  assertDistinctEvidenceClasses,
+  assertUnknownNotNumericZero,
+  classifyCostEvidenceFromSource,
+  evaluateBlockingEligibility,
+  isUnknownEvidence,
+  type FinOpsSourceOfTruth,
+} from "@/lib/oa/finops";
+
+describe("FinOps T0 cost evidence (T-TECH-05 / T-TECH-06)", () => {
+  it("maps every SoT to the closed evidence class", () => {
+    const expected: Record<FinOpsSourceOfTruth, string> = {
+      BILLED: "billed",
+      PROVIDER_OBSERVED: "observed",
+      API_USAGE: "observed",
+      LOCAL_COUNT: "estimated",
+      PARAMETRIC_ESTIMATE: "estimated",
+      UNKNOWN: "unknown",
+    };
+    for (const source of FINOPS_SOURCES) {
+      expect(classifyCostEvidenceFromSource(source)).toBe(expected[source]);
+    }
+  });
+
+  it("keeps estimated, observed, billed, and unknown distinct", () => {
+    expect(assertDistinctEvidenceClasses()).toBe(true);
+    const classes = new Set(
+      FINOPS_SOURCES.map((s) => classifyCostEvidenceFromSource(s)),
+    );
+    expect(classes.has("estimated")).toBe(true);
+    expect(classes.has("observed")).toBe(true);
+    expect(classes.has("billed")).toBe(true);
+    expect(classes.has("unknown")).toBe(true);
+    expect(
+      classifyCostEvidenceFromSource("LOCAL_COUNT"),
+    ).not.toBe(classifyCostEvidenceFromSource("PROVIDER_OBSERVED"));
+    expect(
+      classifyCostEvidenceFromSource("PROVIDER_OBSERVED"),
+    ).not.toBe(classifyCostEvidenceFromSource("BILLED"));
+  });
+
+  it("classifies API_USAGE as observed without making it blocking (T-TECH-05)", () => {
+    expect(classifyCostEvidenceFromSource("API_USAGE")).toBe("observed");
+    expect(evaluateBlockingEligibility("API_USAGE").eligible).toBe(false);
+    // Model/tarif unknown stays unknown — not silently priced.
+    expect(classifyCostEvidenceFromSource("UNKNOWN")).toBe("unknown");
+    expect(isUnknownEvidence("unknown")).toBe(true);
+  });
+
+  it("maps LOCAL_COUNT and PARAMETRIC_ESTIMATE to estimated", () => {
+    expect(classifyCostEvidenceFromSource("LOCAL_COUNT")).toBe("estimated");
+    expect(classifyCostEvidenceFromSource("PARAMETRIC_ESTIMATE")).toBe(
+      "estimated",
+    );
+  });
+
+  it("keeps unknown distinct from zero with no zero fallback (T-TECH-06)", () => {
+    expect(assertUnknownNotNumericZero("unknown", 0)).toEqual({
+      detailCode: "FINOPS_UNKNOWN_AS_ZERO",
+      reason: "unknown_must_not_equal_numeric_zero",
+    });
+    expect(assertUnknownNotNumericZero("unknown", BigInt(0))).not.toBeNull();
+    expect(assertUnknownNotNumericZero("unknown", "0")).not.toBeNull();
+    expect(assertUnknownNotNumericZero("unknown", null)).toBeNull();
+    expect(assertUnknownNotNumericZero("billed", 0)).toBeNull();
+    expect(isUnknownEvidence("unknown")).toBe(true);
+    expect(isUnknownEvidence("estimated")).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts
new file
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  ESTIMATION_NEVER_BLOCKS,
+  evaluateBlockingEligibility,
+  type FinOpsSourceOfTruth,
+} from "@/lib/oa/finops";
+
+describe("FinOps T0 blocking eligibility (T-TECH-12)", () => {
+  const matrix: Array<{
+    source: FinOpsSourceOfTruth;
+    eligible: boolean;
+    reason: string;
+    confidenceClass: string;
+  }> = [
+    {
+      source: "BILLED",
+      eligible: true,
+      reason: "SOURCE_MAY_BLOCK",
+      confidenceClass: "billed",
+    },
+    {
+      source: "PROVIDER_OBSERVED",
+      eligible: true,
+      reason: "SOURCE_MAY_BLOCK",
+      confidenceClass: "observed",
+    },
+    {
+      source: "API_USAGE",
+      eligible: false,
+      reason: "API_USAGE_NEVER_BLOCKS",
+      confidenceClass: "observed",
+    },
+    {
+      source: "LOCAL_COUNT",
+      eligible: false,
+      reason: "LOCAL_COUNT_NEVER_BLOCKS",
+      confidenceClass: "estimated",
+    },
+    {
+      source: "PARAMETRIC_ESTIMATE",
+      eligible: false,
+      reason: "ESTIMATE_NEVER_BLOCKS",
+      confidenceClass: "estimated",
+    },
+    {
+      source: "UNKNOWN",
+      eligible: false,
+      reason: "UNKNOWN_NEVER_BLOCKS",
+      confidenceClass: "unknown",
+    },
+  ];
+
+  it.each(matrix)(
+    "applies matrix row for $source",
+    ({ source, eligible, reason, confidenceClass }) => {
+      const decision = evaluateBlockingEligibility(source);
+      expect(decision).toEqual({
+        eligible,
+        reason,
+        source,
+        confidenceClass,
+      });
+    },
+  );
+
+  it("exports ESTIMATION_NEVER_BLOCKS and never blocks estimates", () => {
+    expect(ESTIMATION_NEVER_BLOCKS).toBe(true);
+    expect(evaluateBlockingEligibility("PARAMETRIC_ESTIMATE").eligible).toBe(
+      false,
+    );
+    expect(evaluateBlockingEligibility("LOCAL_COUNT").eligible).toBe(false);
+  });
+
+  it("allows official observed / billed eligibility without reading an amount", () => {
+    expect(evaluateBlockingEligibility("BILLED").eligible).toBe(true);
+    expect(evaluateBlockingEligibility("PROVIDER_OBSERVED").eligible).toBe(
+      true,
+    );
+    // Decision shape has no monetary field.
+    expect(
+      Object.keys(evaluateBlockingEligibility("BILLED")).sort(),
+    ).toEqual(["confidenceClass", "eligible", "reason", "source"]);
+  });
+
+  it("is deterministic", () => {
+    expect(evaluateBlockingEligibility("API_USAGE")).toEqual(
+      evaluateBlockingEligibility("API_USAGE"),
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts
new file
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  assertUnknownNotNumericZero,
+  computeUtcMonthPeriod,
+  validateFinOpsPeriodShape,
+  validateIsoTimestamp,
+  type FinOpsPeriod,
+} from "@/lib/oa/finops";
+
+describe("FinOps T0 domain invariants", () => {
+  it("accepts valid ISO instants with Z or offset", () => {
+    expect(validateIsoTimestamp("2026-01-01T00:00:00.000Z")).toBeNull();
+    expect(validateIsoTimestamp("2026-06-15T12:00:00.000+02:00")).toBeNull();
+  });
+
+  it("rejects invalid timestamps", () => {
+    expect(validateIsoTimestamp("")).not.toBeNull();
+    expect(validateIsoTimestamp("2026-01-01")).not.toBeNull();
+    expect(validateIsoTimestamp("not-iso")).not.toBeNull();
+    expect(validateIsoTimestamp("2026-13-40T99:99:99.000Z")).not.toBeNull();
+  });
+
+  it("accepts a valid UTC period shape", () => {
+    const period = computeUtcMonthPeriod("2026-04-01T00:00:00.000Z");
+    expect(validateFinOpsPeriodShape(period)).toBeNull();
+  });
+
+  it("rejects non-UTC timezone", () => {
+    const bad = {
+      periodStart: "2026-01-01T00:00:00.000Z",
+      periodEnd: "2026-02-01T00:00:00.000Z",
+      timezone: "Europe/Paris",
+    } as unknown as FinOpsPeriod;
+    expect(validateFinOpsPeriodShape(bad)).toEqual({
+      detailCode: "FINOPS_INVALID_TIMEZONE",
+      reason: "timezone_must_be_utc",
+    });
+  });
+
+  it("rejects start >= end", () => {
+    expect(
+      validateFinOpsPeriodShape({
+        periodStart: "2026-02-01T00:00:00.000Z",
+        periodEnd: "2026-02-01T00:00:00.000Z",
+        timezone: "UTC",
+      }),
+    ).toEqual({
+      detailCode: "FINOPS_INVALID_PERIOD",
+      reason: "period_start_not_strictly_before_end",
+    });
+    expect(
+      validateFinOpsPeriodShape({
+        periodStart: "2026-03-01T00:00:00.000Z",
+        periodEnd: "2026-02-01T00:00:00.000Z",
+        timezone: "UTC",
+      })?.detailCode,
+    ).toBe("FINOPS_INVALID_PERIOD");
+  });
+
+  it("never lets unknown become numeric zero", () => {
+    expect(assertUnknownNotNumericZero("unknown", 0)?.detailCode).toBe(
+      "FINOPS_UNKNOWN_AS_ZERO",
+    );
+    expect(assertUnknownNotNumericZero("unknown", undefined)).toBeNull();
+  });
+
+  it("has no side effects and does not mutate period objects", () => {
+    const period = computeUtcMonthPeriod("2026-05-01T00:00:00.000Z");
+    const frozen = Object.freeze({ ...period });
+    expect(validateFinOpsPeriodShape(frozen)).toBeNull();
+    expect(frozen).toEqual(period);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts
new file
+/**
+ * @vitest-environment node
+ */
+import fs from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+
+const APP_ROOT = path.resolve(__dirname, "../../..");
+const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/finops");
+
+function listTsFiles(dir: string): string[] {
+  if (!fs.existsSync(dir)) return [];
+  const out: string[] = [];
+  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
+    const full = path.join(dir, entry.name);
+    if (entry.isDirectory()) {
+      if (entry.name === "node_modules") continue;
+      out.push(...listTsFiles(full));
+    } else if (/\.tsx?$/.test(entry.name)) {
+      out.push(full);
+    }
+  }
+  return out;
+}
+
+function importsOf(file: string): string[] {
+  return fs
+    .readFileSync(file, "utf8")
+    .split("\n")
+    .map((l) => l.trim())
+    .filter((l) => l.startsWith("import ") || l.startsWith("export "));
+}
+
+describe("FinOps T0 import boundaries", () => {
+  it("domain stays pure — no openai/platform/ops1/pg/next/react/fs/net/env", () => {
+    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
+    expect(files.length).toBeGreaterThan(0);
+    const hits: string[] = [];
+    const forbidden =
+      /from\s+["'](?:openai|pg|sqlite|node:fs|node:net|node:crypto|next|react|@\/lib\/(?:ops1|platform|d1|execution-run|oa\/execution-run)|fs|path|child_process)|process\.env/;
+    for (const file of files) {
+      const src = fs.readFileSync(file, "utf8");
+      if (/\bDate\.now\b/.test(src)) {
+        hits.push(`${file}: Date.now`);
+      }
+      if (/\bprocess\.env\b/.test(src)) {
+        hits.push(`${file}: process.env`);
+      }
+      for (const line of importsOf(file)) {
+        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
+        if (
+          /execution-run|platform\/ai|ops1|openai|ProviderUsage/.test(line)
+        ) {
+          hits.push(`${file}: ${line}`);
+        }
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("module root only uses relative domain imports", () => {
+    const files = listTsFiles(MODULE_ROOT);
+    expect(files.length).toBeGreaterThan(0);
+    const hits: string[] = [];
+    for (const file of files) {
+      for (const line of importsOf(file)) {
+        if (
+          /from\s+["'](?!\.)/.test(line) &&
+          !/from\s+["'](?:vitest)/.test(line)
+        ) {
+          // Absolute / package imports are forbidden in FinOps T0 domain tree.
+          hits.push(`${path.relative(APP_ROOT, file)}: ${line}`);
+        }
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("public barrel does not export infrastructure or application surfaces", () => {
+    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
+    expect(barrel).not.toMatch(/repository|adapter|ledger|migration|openai|pg/i);
+    expect(barrel).not.toMatch(/Money|currency|price/i);
+    expect(fs.existsSync(path.join(MODULE_ROOT, "domain/index.ts"))).toBe(
+      false,
+    );
+  });
+});

```

## Contenu complet des quatorze fichiers (preuve byte-identical handoff)
### `projects/sfia-studio/app/lib/oa/finops/domain/types.ts`

- SHA-256: `1f27721ddb930257e0491bc901f0de1a230fcaa5fd9b706e42cd40e53b026b09`
- Lines: 64

```typescript
/**
 * FinOps T0 — pure domain contracts (provider- and persistence-independent).
 */

export type FinOpsPeriod = {
  readonly periodStart: string;
  readonly periodEnd: string;
  readonly timezone: "UTC";
};

export type FinOpsSourceOfTruth =
  | "BILLED"
  | "PROVIDER_OBSERVED"
  | "API_USAGE"
  | "LOCAL_COUNT"
  | "PARAMETRIC_ESTIMATE"
  | "UNKNOWN";

export type FinOpsCostEvidenceClass =
  | "estimated"
  | "observed"
  | "billed"
  | "unknown";

export type FinOpsBlockingReason =
  | "SOURCE_MAY_BLOCK"
  | "API_USAGE_NEVER_BLOCKS"
  | "LOCAL_COUNT_NEVER_BLOCKS"
  | "ESTIMATE_NEVER_BLOCKS"
  | "UNKNOWN_NEVER_BLOCKS";

export type FinOpsBlockingDecision = {
  readonly eligible: boolean;
  readonly reason: FinOpsBlockingReason;
  readonly source: FinOpsSourceOfTruth;
  readonly confidenceClass: FinOpsCostEvidenceClass;
};

export type FinOpsDetailCode =
  | "FINOPS_INVALID_TIMESTAMP"
  | "FINOPS_INVALID_PERIOD"
  | "FINOPS_INVALID_TIMEZONE"
  | "FINOPS_UNKNOWN_AS_ZERO"
  | "FINOPS_INVALID_SOURCE"
  | "FINOPS_EVIDENCE_COLLAPSE";

/** Lower rank = more authoritative (SoT hierarchy 1–6). */
export const FINOPS_SOT_RANK = {
  BILLED: 1,
  PROVIDER_OBSERVED: 2,
  API_USAGE: 3,
  LOCAL_COUNT: 4,
  PARAMETRIC_ESTIMATE: 5,
  UNKNOWN: 6,
} as const satisfies Record<FinOpsSourceOfTruth, 1 | 2 | 3 | 4 | 5 | 6>;

export const FINOPS_SOURCES = [
  "BILLED",
  "PROVIDER_OBSERVED",
  "API_USAGE",
  "LOCAL_COUNT",
  "PARAMETRIC_ESTIMATE",
  "UNKNOWN",
] as const satisfies ReadonlyArray<FinOpsSourceOfTruth>;
```

### `projects/sfia-studio/app/lib/oa/finops/domain/errors.ts`

- SHA-256: `9fcbcc89dad3d1856cbb3ae5245d90d1f09ed71991e760303693c9687dcac498`
- Lines: 35

```typescript
/**
 * FinOps T0 — structured domain errors (no infrastructure dependency).
 */

import type { FinOpsDetailCode } from "./types";

export type FinOpsStructuredError = {
  readonly detailCode: FinOpsDetailCode;
  readonly message: string;
  readonly reason: string;
  readonly timestamp?: string;
};

export function createFinOpsError(input: {
  detailCode: FinOpsDetailCode;
  reason: string;
  timestamp?: string;
}): FinOpsStructuredError {
  return {
    detailCode: input.detailCode,
    message: `FinOps domain error: ${input.detailCode}`,
    reason: input.reason,
    ...(input.timestamp !== undefined ? { timestamp: input.timestamp } : {}),
  };
}

export class FinOpsDomainError extends Error {
  readonly structured: FinOpsStructuredError;

  constructor(structured: FinOpsStructuredError) {
    super(structured.message);
    this.name = "FinOpsDomainError";
    this.structured = structured;
  }
}
```

### `projects/sfia-studio/app/lib/oa/finops/domain/invariants.ts`

- SHA-256: `e27a5b9dce23ae1d2427e1684a17ee8a82ac81db1a3a8064d471200d7ff35b7b`
- Lines: 130

```typescript
/**
 * FinOps T0 — pure domain invariants (no hidden wall-clock, no Money arithmetic).
 */

import { createFinOpsError, FinOpsDomainError } from "./errors";
import type { FinOpsCostEvidenceClass, FinOpsPeriod } from "./types";

export type InvariantViolation = {
  readonly detailCode:
    | "FINOPS_INVALID_TIMESTAMP"
    | "FINOPS_INVALID_PERIOD"
    | "FINOPS_INVALID_TIMEZONE"
    | "FINOPS_UNKNOWN_AS_ZERO";
  readonly reason: string;
};

/** ISO-8601 instant with Z or numeric offset (converted later via UTC ms). */
const ISO_INSTANT_RE =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/;

export function validateIsoTimestamp(
  instantIso: string,
): InvariantViolation | null {
  if (typeof instantIso !== "string" || instantIso.length === 0) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_empty_or_not_string",
    };
  }
  if (!ISO_INSTANT_RE.test(instantIso)) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_not_iso_instant",
    };
  }
  const ms = Date.parse(instantIso);
  if (!Number.isFinite(ms)) {
    return {
      detailCode: "FINOPS_INVALID_TIMESTAMP",
      reason: "timestamp_not_parseable",
    };
  }
  return null;
}

export function validateFinOpsPeriodShape(
  period: FinOpsPeriod,
): InvariantViolation | null {
  if (period.timezone !== "UTC") {
    return {
      detailCode: "FINOPS_INVALID_TIMEZONE",
      reason: "timezone_must_be_utc",
    };
  }
  const startViolation = validateIsoTimestamp(period.periodStart);
  if (startViolation) {
    return {
      detailCode: "FINOPS_INVALID_PERIOD",
      reason: "period_start_invalid",
    };
  }
  const endViolation = validateIsoTimestamp(period.periodEnd);
  if (endViolation) {
    return {
      detailCode: "FINOPS_INVALID_PERIOD",
      reason: "period_end_invalid",
    };
  }
  const startMs = Date.parse(period.periodStart);
  const endMs = Date.parse(period.periodEnd);
  if (!(startMs < endMs)) {
    return {
      detailCode: "FINOPS_INVALID_PERIOD",
      reason: "period_start_not_strictly_before_end",
    };
  }
  return null;
}

/**
 * Unknown evidence must never be silently treated as numeric zero.
 * Money representation remains deferred — this only guards assimilation.
 */
export function assertUnknownNotNumericZero(
  evidenceClass: FinOpsCostEvidenceClass,
  representedAs: unknown,
): InvariantViolation | null {
  if (evidenceClass !== "unknown") {
    return null;
  }
  if (
    representedAs === 0 ||
    representedAs === BigInt(0) ||
    representedAs === "0" ||
    representedAs === "0.0" ||
    representedAs === "0.00"
  ) {
    return {
      detailCode: "FINOPS_UNKNOWN_AS_ZERO",
      reason: "unknown_must_not_equal_numeric_zero",
    };
  }
  return null;
}

export function requireValidIsoTimestamp(instantIso: string): number {
  const violation = validateIsoTimestamp(instantIso);
  if (violation) {
    throw new FinOpsDomainError(
      createFinOpsError({
        detailCode: violation.detailCode,
        reason: violation.reason,
        timestamp: instantIso,
      }),
    );
  }
  return Date.parse(instantIso);
}

export function requireValidFinOpsPeriod(period: FinOpsPeriod): void {
  const violation = validateFinOpsPeriodShape(period);
  if (violation) {
    throw new FinOpsDomainError(
      createFinOpsError({
        detailCode: violation.detailCode,
        reason: violation.reason,
      }),
    );
  }
}
```

### `projects/sfia-studio/app/lib/oa/finops/domain/period.ts`

- SHA-256: `83bcad8da568c411c49f25ff3e2c6c9c0f17bee4d992dfbc5873beceafae0689`
- Lines: 67

```typescript
/**
 * FinOps T0 — UTC calendar-month period helpers (injected instant; no hidden wall-clock).
 */

import { requireValidFinOpsPeriod, requireValidIsoTimestamp } from "./invariants";
import type { FinOpsPeriod } from "./types";

/**
 * Calendar month in UTC for the given instant.
 * periodStart inclusive; periodEnd exclusive (= first instant of next UTC month).
 */
export function computeUtcMonthPeriod(instantIso: string): FinOpsPeriod {
  const ms = requireValidIsoTimestamp(instantIso);
  const d = new Date(ms);
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth();
  const periodStart = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0)).toISOString();
  const periodEnd = new Date(
    Date.UTC(year, month + 1, 1, 0, 0, 0, 0),
  ).toISOString();
  return {
    periodStart,
    periodEnd,
    timezone: "UTC",
  };
}

export function periodContainsInstant(
  period: FinOpsPeriod,
  instantIso: string,
): boolean {
  requireValidFinOpsPeriod(period);
  const t = requireValidIsoTimestamp(instantIso);
  const start = Date.parse(period.periodStart);
  const end = Date.parse(period.periodEnd);
  return start <= t && t < end;
}

/** Deterministic ordering by periodStart (UTC instant). */
export function compareFinOpsPeriods(
  a: FinOpsPeriod,
  b: FinOpsPeriod,
): -1 | 0 | 1 {
  requireValidFinOpsPeriod(a);
  requireValidFinOpsPeriod(b);
  const aMs = Date.parse(a.periodStart);
  const bMs = Date.parse(b.periodStart);
  if (aMs < bMs) return -1;
  if (aMs > bMs) return 1;
  return 0;
}

/** Stable key YYYY-MM from UTC periodStart. */
export function finOpsPeriodKey(period: FinOpsPeriod): string {
  requireValidFinOpsPeriod(period);
  const d = new Date(Date.parse(period.periodStart));
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth() + 1;
  return `${String(y).padStart(4, "0")}-${String(m).padStart(2, "0")}`;
}

/**
 * Late events attach to the UTC month of occurredAt (injected instant).
 */
export function assignInstantToPeriod(instantIso: string): FinOpsPeriod {
  return computeUtcMonthPeriod(instantIso);
}
```

### `projects/sfia-studio/app/lib/oa/finops/domain/sourceOfTruth.ts`

- SHA-256: `33a288ba238a51f9ec4dc649d7b6d80277d39b541fb76d4c94b9eb79993e4c8e`
- Lines: 73

```typescript
/**
 * FinOps T0 — Source of Truth ranking and eligibility helpers.
 */

import { FINOPS_SOT_RANK, type FinOpsSourceOfTruth } from "./types";

export function sourceOfTruthRank(source: FinOpsSourceOfTruth): number {
  return FINOPS_SOT_RANK[source];
}

/** Negative if a is more authoritative than b (lower rank). */
export function compareSourceOfTruth(
  a: FinOpsSourceOfTruth,
  b: FinOpsSourceOfTruth,
): number {
  return sourceOfTruthRank(a) - sourceOfTruthRank(b);
}

export function sourceMayBlock(source: FinOpsSourceOfTruth): boolean {
  switch (source) {
    case "BILLED":
    case "PROVIDER_OBSERVED":
      return true;
    case "API_USAGE":
    case "LOCAL_COUNT":
    case "PARAMETRIC_ESTIMATE":
    case "UNKNOWN":
      return false;
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}

/** All SoT levels remain observable / informational. */
export function sourceMayInform(source: FinOpsSourceOfTruth): boolean {
  switch (source) {
    case "BILLED":
    case "PROVIDER_OBSERVED":
    case "API_USAGE":
    case "LOCAL_COUNT":
    case "PARAMETRIC_ESTIMATE":
    case "UNKNOWN":
      return true;
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}

/**
 * All sources may feed a future human-review path.
 * T0 never triggers review.
 */
export function sourceMayRequestHumanReview(
  source: FinOpsSourceOfTruth,
): boolean {
  switch (source) {
    case "BILLED":
    case "PROVIDER_OBSERVED":
    case "API_USAGE":
    case "LOCAL_COUNT":
    case "PARAMETRIC_ESTIMATE":
    case "UNKNOWN":
      return true;
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/finops/domain/costEvidence.ts`

- SHA-256: `eb021400549674d86fbdb022e5d7f7e85ca2f69ecb3a60455563d91d6527021c`
- Lines: 47

```typescript
/**
 * FinOps T0 — cost evidence classification (no monetary values).
 */

import { createFinOpsError, FinOpsDomainError } from "./errors";
import type { FinOpsCostEvidenceClass, FinOpsSourceOfTruth } from "./types";

export function classifyCostEvidenceFromSource(
  source: FinOpsSourceOfTruth,
): FinOpsCostEvidenceClass {
  switch (source) {
    case "BILLED":
      return "billed";
    case "PROVIDER_OBSERVED":
    case "API_USAGE":
      return "observed";
    case "LOCAL_COUNT":
    case "PARAMETRIC_ESTIMATE":
      return "estimated";
    case "UNKNOWN":
      return "unknown";
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}

/** Runtime guard that evidence class literals remain distinct. */
export function assertDistinctEvidenceClasses(): true {
  const classes = ["estimated", "observed", "billed", "unknown"] as const;
  if (new Set<string>(classes).size !== classes.length) {
    throw new FinOpsDomainError(
      createFinOpsError({
        detailCode: "FINOPS_EVIDENCE_COLLAPSE",
        reason: "evidence_classes_must_remain_distinct",
      }),
    );
  }
  return true;
}

export function isUnknownEvidence(
  evidenceClass: FinOpsCostEvidenceClass,
): boolean {
  return evidenceClass === "unknown";
}
```

### `projects/sfia-studio/app/lib/oa/finops/domain/blockingEligibility.ts`

- SHA-256: `664b32863e2606a3488b6d5b349e03547736fc3f631b47431bc3148764ec1898`
- Lines: 69

```typescript
/**
 * FinOps T0 — blocking eligibility from Source of Truth (never from amount).
 */

import { classifyCostEvidenceFromSource } from "./costEvidence";
import type {
  FinOpsBlockingDecision,
  FinOpsSourceOfTruth,
} from "./types";

/**
 * Estimation never blocks — invariant exported for explicit assertion.
 * Blocking eligibility is decided by SoT, not by evidence class alone.
 */
export const ESTIMATION_NEVER_BLOCKS = true as const;

export function evaluateBlockingEligibility(
  source: FinOpsSourceOfTruth,
): FinOpsBlockingDecision {
  const confidenceClass = classifyCostEvidenceFromSource(source);
  switch (source) {
    case "BILLED":
      return {
        eligible: true,
        reason: "SOURCE_MAY_BLOCK",
        source,
        confidenceClass,
      };
    case "PROVIDER_OBSERVED":
      return {
        eligible: true,
        reason: "SOURCE_MAY_BLOCK",
        source,
        confidenceClass,
      };
    case "API_USAGE":
      return {
        eligible: false,
        reason: "API_USAGE_NEVER_BLOCKS",
        source,
        confidenceClass,
      };
    case "LOCAL_COUNT":
      return {
        eligible: false,
        reason: "LOCAL_COUNT_NEVER_BLOCKS",
        source,
        confidenceClass,
      };
    case "PARAMETRIC_ESTIMATE":
      return {
        eligible: false,
        reason: "ESTIMATE_NEVER_BLOCKS",
        source,
        confidenceClass,
      };
    case "UNKNOWN":
      return {
        eligible: false,
        reason: "UNKNOWN_NEVER_BLOCKS",
        source,
        confidenceClass,
      };
    default: {
      const _exhaustive: never = source;
      return _exhaustive;
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/finops/index.ts`

- SHA-256: `44008d949a8342b558a37bed755fcda6953a406b906f7a84ecec385ed8c7ccec`
- Lines: 52

```typescript
/**
 * Public FinOps T0 API — pure domain contracts only.
 */

export type {
  FinOpsBlockingDecision,
  FinOpsBlockingReason,
  FinOpsCostEvidenceClass,
  FinOpsDetailCode,
  FinOpsPeriod,
  FinOpsSourceOfTruth,
} from "./domain/types";
export { FINOPS_SOT_RANK, FINOPS_SOURCES } from "./domain/types";

export type { FinOpsStructuredError } from "./domain/errors";
export { createFinOpsError, FinOpsDomainError } from "./domain/errors";

export type { InvariantViolation } from "./domain/invariants";
export {
  assertUnknownNotNumericZero,
  requireValidFinOpsPeriod,
  requireValidIsoTimestamp,
  validateFinOpsPeriodShape,
  validateIsoTimestamp,
} from "./domain/invariants";

export {
  assignInstantToPeriod,
  compareFinOpsPeriods,
  computeUtcMonthPeriod,
  finOpsPeriodKey,
  periodContainsInstant,
} from "./domain/period";

export {
  compareSourceOfTruth,
  sourceMayBlock,
  sourceMayInform,
  sourceMayRequestHumanReview,
  sourceOfTruthRank,
} from "./domain/sourceOfTruth";

export {
  assertDistinctEvidenceClasses,
  classifyCostEvidenceFromSource,
  isUnknownEvidence,
} from "./domain/costEvidence";

export {
  ESTIMATION_NEVER_BLOCKS,
  evaluateBlockingEligibility,
} from "./domain/blockingEligibility";
```

### `projects/sfia-studio/app/__tests__/oa/finops/period.test.ts`

- SHA-256: `9d275dfdf8dcb8b5c120670ab1db6ebb9cfd7a49e3fbbedc4cce79d8659de552`
- Lines: 99

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  FinOpsDomainError,
  assignInstantToPeriod,
  compareFinOpsPeriods,
  computeUtcMonthPeriod,
  finOpsPeriodKey,
  periodContainsInstant,
} from "@/lib/oa/finops";

describe("FinOps T0 period (T-TECH-07)", () => {
  it("maps January instant to February-bounded UTC month", () => {
    const period = computeUtcMonthPeriod("2026-01-15T12:00:00.000Z");
    expect(period).toEqual({
      periodStart: "2026-01-01T00:00:00.000Z",
      periodEnd: "2026-02-01T00:00:00.000Z",
      timezone: "UTC",
    });
    expect(finOpsPeriodKey(period)).toBe("2026-01");
  });

  it("maps December to January of the next year", () => {
    const period = computeUtcMonthPeriod("2026-12-31T23:59:59.999Z");
    expect(period.periodStart).toBe("2026-12-01T00:00:00.000Z");
    expect(period.periodEnd).toBe("2027-01-01T00:00:00.000Z");
    expect(finOpsPeriodKey(period)).toBe("2026-12");
  });

  it("places leap-day in February of a leap year", () => {
    const period = computeUtcMonthPeriod("2024-02-29T10:00:00.000Z");
    expect(period.periodStart).toBe("2024-02-01T00:00:00.000Z");
    expect(period.periodEnd).toBe("2024-03-01T00:00:00.000Z");
    expect(periodContainsInstant(period, "2024-02-29T23:59:59.999Z")).toBe(
      true,
    );
  });

  it("treats periodStart as inclusive and periodEnd as exclusive", () => {
    const period = computeUtcMonthPeriod("2026-03-10T00:00:00.000Z");
    expect(periodContainsInstant(period, period.periodStart)).toBe(true);
    expect(periodContainsInstant(period, period.periodEnd)).toBe(false);
    expect(
      periodContainsInstant(period, "2026-03-31T23:59:59.999Z"),
    ).toBe(true);
  });

  it("converts offset timestamps to the UTC month of the instant", () => {
    // 2026-12-31T23:00:00-01:00 === 2027-01-01T00:00:00.000Z → January 2027
    const period = computeUtcMonthPeriod("2026-12-31T23:00:00.000-01:00");
    expect(period.periodStart).toBe("2027-01-01T00:00:00.000Z");
    expect(period.periodEnd).toBe("2027-02-01T00:00:00.000Z");
    expect(finOpsPeriodKey(period)).toBe("2027-01");
  });

  it("is unaffected by DST because boundaries are UTC", () => {
    // US spring-forward window does not change UTC month math.
    const before = computeUtcMonthPeriod("2026-03-08T06:59:59.000Z");
    const after = computeUtcMonthPeriod("2026-03-08T07:00:01.000Z");
    expect(before).toEqual(after);
    expect(finOpsPeriodKey(before)).toBe("2026-03");
  });

  it("assigns late events by occurredAt, not reception time (T-TECH-07)", () => {
    const occurredAt = "2026-01-31T23:30:00.000Z";
    const receptionAt = "2026-02-02T09:00:00.000Z";
    const assigned = assignInstantToPeriod(occurredAt);
    const receptionPeriod = computeUtcMonthPeriod(receptionAt);
    expect(assigned).toEqual(computeUtcMonthPeriod(occurredAt));
    expect(finOpsPeriodKey(assigned)).toBe("2026-01");
    expect(finOpsPeriodKey(receptionPeriod)).toBe("2026-02");
    expect(compareFinOpsPeriods(assigned, receptionPeriod)).toBe(-1);
  });

  it("compares periods deterministically", () => {
    const a = computeUtcMonthPeriod("2026-01-01T00:00:00.000Z");
    const b = computeUtcMonthPeriod("2026-02-01T00:00:00.000Z");
    const a2 = computeUtcMonthPeriod("2026-01-20T00:00:00.000Z");
    expect(compareFinOpsPeriods(a, b)).toBe(-1);
    expect(compareFinOpsPeriods(b, a)).toBe(1);
    expect(compareFinOpsPeriods(a, a2)).toBe(0);
  });

  it("is deterministic for the same injected instant", () => {
    const iso = "2026-06-15T12:34:56.789Z";
    expect(computeUtcMonthPeriod(iso)).toEqual(computeUtcMonthPeriod(iso));
  });

  it("rejects invalid timestamps", () => {
    expect(() => computeUtcMonthPeriod("not-a-timestamp")).toThrow(
      FinOpsDomainError,
    );
    expect(() => computeUtcMonthPeriod("2026-01-01")).toThrow(
      FinOpsDomainError,
    );
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/sourceOfTruth.test.ts`

- SHA-256: `8d3bf36c6055792cb8eea53bfe7d7468ff46de739a1d516fd1c48526a3e26be0`
- Lines: 70

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  FINOPS_SOT_RANK,
  FINOPS_SOURCES,
  compareSourceOfTruth,
  sourceMayBlock,
  sourceMayInform,
  sourceMayRequestHumanReview,
  sourceOfTruthRank,
  type FinOpsSourceOfTruth,
} from "@/lib/oa/finops";

describe("FinOps T0 source of truth", () => {
  it("exposes exactly six closed SoT values", () => {
    expect([...FINOPS_SOURCES]).toEqual([
      "BILLED",
      "PROVIDER_OBSERVED",
      "API_USAGE",
      "LOCAL_COUNT",
      "PARAMETRIC_ESTIMATE",
      "UNKNOWN",
    ]);
  });

  it("ranks SoT from 1 (most authoritative) to 6", () => {
    expect(FINOPS_SOT_RANK.BILLED).toBe(1);
    expect(FINOPS_SOT_RANK.PROVIDER_OBSERVED).toBe(2);
    expect(FINOPS_SOT_RANK.API_USAGE).toBe(3);
    expect(FINOPS_SOT_RANK.LOCAL_COUNT).toBe(4);
    expect(FINOPS_SOT_RANK.PARAMETRIC_ESTIMATE).toBe(5);
    expect(FINOPS_SOT_RANK.UNKNOWN).toBe(6);
    for (const source of FINOPS_SOURCES) {
      expect(sourceOfTruthRank(source)).toBe(FINOPS_SOT_RANK[source]);
    }
  });

  it("orders the full hierarchy by rank", () => {
    const ordered = [...FINOPS_SOURCES].sort(compareSourceOfTruth);
    expect(ordered).toEqual([...FINOPS_SOURCES]);
    expect(compareSourceOfTruth("BILLED", "UNKNOWN")).toBeLessThan(0);
    expect(compareSourceOfTruth("UNKNOWN", "BILLED")).toBeGreaterThan(0);
    expect(compareSourceOfTruth("API_USAGE", "API_USAGE")).toBe(0);
  });

  it("marks only BILLED and PROVIDER_OBSERVED as blocking-eligible", () => {
    const blocking: FinOpsSourceOfTruth[] = [];
    const nonBlocking: FinOpsSourceOfTruth[] = [];
    for (const source of FINOPS_SOURCES) {
      if (sourceMayBlock(source)) blocking.push(source);
      else nonBlocking.push(source);
    }
    expect(blocking).toEqual(["BILLED", "PROVIDER_OBSERVED"]);
    expect(nonBlocking).toEqual([
      "API_USAGE",
      "LOCAL_COUNT",
      "PARAMETRIC_ESTIMATE",
      "UNKNOWN",
    ]);
  });

  it("keeps all sources informational and review-capable without triggering review", () => {
    for (const source of FINOPS_SOURCES) {
      expect(sourceMayInform(source)).toBe(true);
      expect(sourceMayRequestHumanReview(source)).toBe(true);
    }
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/costEvidence.test.ts`

- SHA-256: `8961e132d7d6804074158fa2ce9efbe715e82b6dbbb2e18b37dba76d27b844a2`
- Lines: 74

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  FINOPS_SOURCES,
  assertDistinctEvidenceClasses,
  assertUnknownNotNumericZero,
  classifyCostEvidenceFromSource,
  evaluateBlockingEligibility,
  isUnknownEvidence,
  type FinOpsSourceOfTruth,
} from "@/lib/oa/finops";

describe("FinOps T0 cost evidence (T-TECH-05 / T-TECH-06)", () => {
  it("maps every SoT to the closed evidence class", () => {
    const expected: Record<FinOpsSourceOfTruth, string> = {
      BILLED: "billed",
      PROVIDER_OBSERVED: "observed",
      API_USAGE: "observed",
      LOCAL_COUNT: "estimated",
      PARAMETRIC_ESTIMATE: "estimated",
      UNKNOWN: "unknown",
    };
    for (const source of FINOPS_SOURCES) {
      expect(classifyCostEvidenceFromSource(source)).toBe(expected[source]);
    }
  });

  it("keeps estimated, observed, billed, and unknown distinct", () => {
    expect(assertDistinctEvidenceClasses()).toBe(true);
    const classes = new Set(
      FINOPS_SOURCES.map((s) => classifyCostEvidenceFromSource(s)),
    );
    expect(classes.has("estimated")).toBe(true);
    expect(classes.has("observed")).toBe(true);
    expect(classes.has("billed")).toBe(true);
    expect(classes.has("unknown")).toBe(true);
    expect(
      classifyCostEvidenceFromSource("LOCAL_COUNT"),
    ).not.toBe(classifyCostEvidenceFromSource("PROVIDER_OBSERVED"));
    expect(
      classifyCostEvidenceFromSource("PROVIDER_OBSERVED"),
    ).not.toBe(classifyCostEvidenceFromSource("BILLED"));
  });

  it("classifies API_USAGE as observed without making it blocking (T-TECH-05)", () => {
    expect(classifyCostEvidenceFromSource("API_USAGE")).toBe("observed");
    expect(evaluateBlockingEligibility("API_USAGE").eligible).toBe(false);
    // Model/tarif unknown stays unknown — not silently priced.
    expect(classifyCostEvidenceFromSource("UNKNOWN")).toBe("unknown");
    expect(isUnknownEvidence("unknown")).toBe(true);
  });

  it("maps LOCAL_COUNT and PARAMETRIC_ESTIMATE to estimated", () => {
    expect(classifyCostEvidenceFromSource("LOCAL_COUNT")).toBe("estimated");
    expect(classifyCostEvidenceFromSource("PARAMETRIC_ESTIMATE")).toBe(
      "estimated",
    );
  });

  it("keeps unknown distinct from zero with no zero fallback (T-TECH-06)", () => {
    expect(assertUnknownNotNumericZero("unknown", 0)).toEqual({
      detailCode: "FINOPS_UNKNOWN_AS_ZERO",
      reason: "unknown_must_not_equal_numeric_zero",
    });
    expect(assertUnknownNotNumericZero("unknown", BigInt(0))).not.toBeNull();
    expect(assertUnknownNotNumericZero("unknown", "0")).not.toBeNull();
    expect(assertUnknownNotNumericZero("unknown", null)).toBeNull();
    expect(assertUnknownNotNumericZero("billed", 0)).toBeNull();
    expect(isUnknownEvidence("unknown")).toBe(true);
    expect(isUnknownEvidence("estimated")).toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/blockingEligibility.test.ts`

- SHA-256: `d19baba0fbaa5ecd06766993c1a7acf4581eef0166f1b2d27e92e826340d9ae4`
- Lines: 93

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  ESTIMATION_NEVER_BLOCKS,
  evaluateBlockingEligibility,
  type FinOpsSourceOfTruth,
} from "@/lib/oa/finops";

describe("FinOps T0 blocking eligibility (T-TECH-12)", () => {
  const matrix: Array<{
    source: FinOpsSourceOfTruth;
    eligible: boolean;
    reason: string;
    confidenceClass: string;
  }> = [
    {
      source: "BILLED",
      eligible: true,
      reason: "SOURCE_MAY_BLOCK",
      confidenceClass: "billed",
    },
    {
      source: "PROVIDER_OBSERVED",
      eligible: true,
      reason: "SOURCE_MAY_BLOCK",
      confidenceClass: "observed",
    },
    {
      source: "API_USAGE",
      eligible: false,
      reason: "API_USAGE_NEVER_BLOCKS",
      confidenceClass: "observed",
    },
    {
      source: "LOCAL_COUNT",
      eligible: false,
      reason: "LOCAL_COUNT_NEVER_BLOCKS",
      confidenceClass: "estimated",
    },
    {
      source: "PARAMETRIC_ESTIMATE",
      eligible: false,
      reason: "ESTIMATE_NEVER_BLOCKS",
      confidenceClass: "estimated",
    },
    {
      source: "UNKNOWN",
      eligible: false,
      reason: "UNKNOWN_NEVER_BLOCKS",
      confidenceClass: "unknown",
    },
  ];

  it.each(matrix)(
    "applies matrix row for $source",
    ({ source, eligible, reason, confidenceClass }) => {
      const decision = evaluateBlockingEligibility(source);
      expect(decision).toEqual({
        eligible,
        reason,
        source,
        confidenceClass,
      });
    },
  );

  it("exports ESTIMATION_NEVER_BLOCKS and never blocks estimates", () => {
    expect(ESTIMATION_NEVER_BLOCKS).toBe(true);
    expect(evaluateBlockingEligibility("PARAMETRIC_ESTIMATE").eligible).toBe(
      false,
    );
    expect(evaluateBlockingEligibility("LOCAL_COUNT").eligible).toBe(false);
  });

  it("allows official observed / billed eligibility without reading an amount", () => {
    expect(evaluateBlockingEligibility("BILLED").eligible).toBe(true);
    expect(evaluateBlockingEligibility("PROVIDER_OBSERVED").eligible).toBe(
      true,
    );
    // Decision shape has no monetary field.
    expect(
      Object.keys(evaluateBlockingEligibility("BILLED")).sort(),
    ).toEqual(["confidenceClass", "eligible", "reason", "source"]);
  });

  it("is deterministic", () => {
    expect(evaluateBlockingEligibility("API_USAGE")).toEqual(
      evaluateBlockingEligibility("API_USAGE"),
    );
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/domainInvariants.test.ts`

- SHA-256: `98a885ca11d6a4de5427abfbcd989161d833ac23dcab1b4933281e1a3f7e3b74`
- Lines: 76

```typescript
/**
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assertUnknownNotNumericZero,
  computeUtcMonthPeriod,
  validateFinOpsPeriodShape,
  validateIsoTimestamp,
  type FinOpsPeriod,
} from "@/lib/oa/finops";

describe("FinOps T0 domain invariants", () => {
  it("accepts valid ISO instants with Z or offset", () => {
    expect(validateIsoTimestamp("2026-01-01T00:00:00.000Z")).toBeNull();
    expect(validateIsoTimestamp("2026-06-15T12:00:00.000+02:00")).toBeNull();
  });

  it("rejects invalid timestamps", () => {
    expect(validateIsoTimestamp("")).not.toBeNull();
    expect(validateIsoTimestamp("2026-01-01")).not.toBeNull();
    expect(validateIsoTimestamp("not-iso")).not.toBeNull();
    expect(validateIsoTimestamp("2026-13-40T99:99:99.000Z")).not.toBeNull();
  });

  it("accepts a valid UTC period shape", () => {
    const period = computeUtcMonthPeriod("2026-04-01T00:00:00.000Z");
    expect(validateFinOpsPeriodShape(period)).toBeNull();
  });

  it("rejects non-UTC timezone", () => {
    const bad = {
      periodStart: "2026-01-01T00:00:00.000Z",
      periodEnd: "2026-02-01T00:00:00.000Z",
      timezone: "Europe/Paris",
    } as unknown as FinOpsPeriod;
    expect(validateFinOpsPeriodShape(bad)).toEqual({
      detailCode: "FINOPS_INVALID_TIMEZONE",
      reason: "timezone_must_be_utc",
    });
  });

  it("rejects start >= end", () => {
    expect(
      validateFinOpsPeriodShape({
        periodStart: "2026-02-01T00:00:00.000Z",
        periodEnd: "2026-02-01T00:00:00.000Z",
        timezone: "UTC",
      }),
    ).toEqual({
      detailCode: "FINOPS_INVALID_PERIOD",
      reason: "period_start_not_strictly_before_end",
    });
    expect(
      validateFinOpsPeriodShape({
        periodStart: "2026-03-01T00:00:00.000Z",
        periodEnd: "2026-02-01T00:00:00.000Z",
        timezone: "UTC",
      })?.detailCode,
    ).toBe("FINOPS_INVALID_PERIOD");
  });

  it("never lets unknown become numeric zero", () => {
    expect(assertUnknownNotNumericZero("unknown", 0)?.detailCode).toBe(
      "FINOPS_UNKNOWN_AS_ZERO",
    );
    expect(assertUnknownNotNumericZero("unknown", undefined)).toBeNull();
  });

  it("has no side effects and does not mutate period objects", () => {
    const period = computeUtcMonthPeriod("2026-05-01T00:00:00.000Z");
    const frozen = Object.freeze({ ...period });
    expect(validateFinOpsPeriodShape(frozen)).toBeNull();
    expect(frozen).toEqual(period);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/finops/importBoundaries.test.ts`

- SHA-256: `49068a52271e98fbf1de55f17e191182f141a8215b8e1bcdc32102cbaa8ccc8d`
- Lines: 87

```typescript
/**
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const APP_ROOT = path.resolve(__dirname, "../../..");
const MODULE_ROOT = path.join(APP_ROOT, "lib/oa/finops");

function listTsFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      out.push(...listTsFiles(full));
    } else if (/\.tsx?$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function importsOf(file: string): string[] {
  return fs
    .readFileSync(file, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("import ") || l.startsWith("export "));
}

describe("FinOps T0 import boundaries", () => {
  it("domain stays pure — no openai/platform/ops1/pg/next/react/fs/net/env", () => {
    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
    expect(files.length).toBeGreaterThan(0);
    const hits: string[] = [];
    const forbidden =
      /from\s+["'](?:openai|pg|sqlite|node:fs|node:net|node:crypto|next|react|@\/lib\/(?:ops1|platform|d1|execution-run|oa\/execution-run)|fs|path|child_process)|process\.env/;
    for (const file of files) {
      const src = fs.readFileSync(file, "utf8");
      if (/\bDate\.now\b/.test(src)) {
        hits.push(`${file}: Date.now`);
      }
      if (/\bprocess\.env\b/.test(src)) {
        hits.push(`${file}: process.env`);
      }
      for (const line of importsOf(file)) {
        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
        if (
          /execution-run|platform\/ai|ops1|openai|ProviderUsage/.test(line)
        ) {
          hits.push(`${file}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("module root only uses relative domain imports", () => {
    const files = listTsFiles(MODULE_ROOT);
    expect(files.length).toBeGreaterThan(0);
    const hits: string[] = [];
    for (const file of files) {
      for (const line of importsOf(file)) {
        if (
          /from\s+["'](?!\.)/.test(line) &&
          !/from\s+["'](?:vitest)/.test(line)
        ) {
          // Absolute / package imports are forbidden in FinOps T0 domain tree.
          hits.push(`${path.relative(APP_ROOT, file)}: ${line}`);
        }
      }
    }
    expect(hits).toEqual([]);
  });

  it("public barrel does not export infrastructure or application surfaces", () => {
    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
    expect(barrel).not.toMatch(/repository|adapter|ledger|migration|openai|pg/i);
    expect(barrel).not.toMatch(/Money|currency|price/i);
    expect(fs.existsSync(path.join(MODULE_ROOT, "domain/index.ts"))).toBe(
      false,
    );
  });
});
```


## Matrices / API / UTC / SoT / blocking / unknown / imports / tests

Voir document 128 §§16–36 et findings §§52–54.

## Probes
```text
PROBE_ROWS
[
  {
    "iso": "2023-02-29T00:00:00.000Z",
    "validate": null,
    "period": {
      "periodStart": "2023-03-01T00:00:00.000Z",
      "periodEnd": "2023-04-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "err": null,
    "Date_parse": 1677628800000
  },
  {
    "iso": "2024-02-29T00:00:00.000Z",
    "validate": null,
    "period": {
      "periodStart": "2024-02-01T00:00:00.000Z",
      "periodEnd": "2024-03-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "err": null,
    "Date_parse": 1709164800000
  },
  {
    "iso": "2026-02-30T00:00:00.000Z",
    "validate": null,
    "period": {
      "periodStart": "2026-03-01T00:00:00.000Z",
      "periodEnd": "2026-04-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "err": null,
    "Date_parse": 1772409600000
  },
  {
    "iso": "2026-04-31T00:00:00.000Z",
    "validate": null,
    "period": {
      "periodStart": "2026-05-01T00:00:00.000Z",
      "periodEnd": "2026-06-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "err": null,
    "Date_parse": 1777593600000
  },
  {
    "iso": "2026-12-31T23:00:00.000-01:00",
    "validate": null,
    "period": {
      "periodStart": "2027-01-01T00:00:00.000Z",
      "periodEnd": "2027-02-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "err": null,
    "Date_parse": 1798761600000
  },
  {
    "iso": "2026-01-01T00:00:00.000+14:00",
    "validate": null,
    "period": {
      "periodStart": "2025-12-01T00:00:00.000Z",
      "periodEnd": "2026-01-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "err": null,
    "Date_parse": 1767175200000
  },
  {
    "iso": "2026-01-01T00:00:00.000",
    "validate": {
      "detailCode": "FINOPS_INVALID_TIMESTAMP",
      "reason": "timestamp_not_iso_instant"
    },
    "period": null,
    "err": "FinOpsDomainError:timestamp_not_iso_instant",
    "Date_parse": 1767222000000
  },
  {
    "iso": "2026-01-01",
    "validate": {
      "detailCode": "FINOPS_INVALID_TIMESTAMP",
      "reason": "timestamp_not_iso_instant"
    },
    "period": null,
    "err": "FinOpsDomainError:timestamp_not_iso_instant",
    "Date_parse": 1767225600000
  }
]
PROBE_PERIODS
[
  {
    "p": {
      "periodStart": "2026-01-01T00:00:00.000Z",
      "periodEnd": "2026-01-15T00:00:00.000Z",
      "timezone": "UTC"
    },
    "shape": null,
    "key": "2026-01",
    "containsStart": true
  },
  {
    "p": {
      "periodStart": "2026-01-01T00:00:00.000Z",
      "periodEnd": "2026-03-01T00:00:00.000Z",
      "timezone": "UTC"
    },
    "shape": null,
    "key": "2026-01",
    "containsStart": true
  },
  {
    "p": {
      "periodStart": "2026-01-15T00:00:00.000Z",
      "periodEnd": "2026-02-15T00:00:00.000Z",
      "timezone": "UTC"
    },
    "shape": null,
    "key": "2026-01",
    "containsStart": true
  }
]
PROBE_UNKNOWN
[
  {
    "label": "0",
    "typeof": "number",
    "result": {
      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
      "reason": "unknown_must_not_equal_numeric_zero"
    }
  },
  {
    "label": "-0",
    "typeof": "number",
    "result": {
      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
      "reason": "unknown_must_not_equal_numeric_zero"
    }
  },
  {
    "label": "0",
    "typeof": "bigint",
    "result": {
      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
      "reason": "unknown_must_not_equal_numeric_zero"
    }
  },
  {
    "label": "0",
    "typeof": "string",
    "result": {
      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
      "reason": "unknown_must_not_equal_numeric_zero"
    }
  },
  {
    "label": "0.0",
    "typeof": "string",
    "result": {
      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
      "reason": "unknown_must_not_equal_numeric_zero"
    }
  },
  {
    "label": "0.00",
    "typeof": "string",
    "result": {
      "detailCode": "FINOPS_UNKNOWN_AS_ZERO",
      "reason": "unknown_must_not_equal_numeric_zero"
    }
  },
  {
    "label": "00",
    "typeof": "string",
    "result": null
  },
  {
    "label": "0.000",
    "typeof": "string",
    "result": null
  },
  {
    "label": "-0",
    "typeof": "string",
    "result": null
  },
  {
    "label": "null",
    "typeof": "object",
    "result": null
  },
  {
    "label": "undefined",
    "typeof": "undefined",
    "result": null
  },
  {
    "label": "",
    "typeof": "string",
    "result": null
  },
  {
    "label": "unknown",
    "typeof": "string",
    "result": null
  },
  {
    "label": "1",
    "typeof": "number",
    "result": null
  }
]
PROBE_BLOCKING
[
  {
    "s": "BILLED",
    "decision": {
      "eligible": true,
      "reason": "SOURCE_MAY_BLOCK",
      "source": "BILLED",
      "confidenceClass": "billed"
    },
    "class": "billed"
  },
  {
    "s": "PROVIDER_OBSERVED",
    "decision": {
      "eligible": true,
      "reason": "SOURCE_MAY_BLOCK",
      "source": "PROVIDER_OBSERVED",
      "confidenceClass": "observed"
    },
    "class": "observed"
  },
  {
    "s": "API_USAGE",
    "decision": {
      "eligible": false,
      "reason": "API_USAGE_NEVER_BLOCKS",
      "source": "API_USAGE",
      "confidenceClass": "observed"
    },
    "class": "observed"
  },
  {
    "s": "LOCAL_COUNT",
    "decision": {
      "eligible": false,
      "reason": "LOCAL_COUNT_NEVER_BLOCKS",
      "source": "LOCAL_COUNT",
      "confidenceClass": "estimated"
    },
    "class": "estimated"
  },
  {
    "s": "PARAMETRIC_ESTIMATE",
    "decision": {
      "eligible": false,
      "reason": "ESTIMATE_NEVER_BLOCKS",
      "source": "PARAMETRIC_ESTIMATE",
      "confidenceClass": "estimated"
    },
    "class": "estimated"
  },
  {
    "s": "UNKNOWN",
    "decision": {
      "eligible": false,
      "reason": "UNKNOWN_NEVER_BLOCKS",
      "source": "UNKNOWN",
      "confidenceClass": "unknown"
    },
    "class": "unknown"
  }
]

```

## Quatre validations
### Targeted
```text

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/finops


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1/projects/sfia-studio/app

 ✓ __tests__/oa/finops/importBoundaries.test.ts (3 tests) 3ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 1ms
 ✓ __tests__/oa/finops/period.test.ts (10 tests) 3ms
 ✓ __tests__/oa/finops/domainInvariants.test.ts (7 tests) 2ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 3ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 3ms

 Test Files  6 passed (6)
      Tests  39 passed (39)
   Start at  06:34:57
   Duration  281ms (transform 121ms, setup 416ms, collect 237ms, tests 15ms, environment 0ms, prepare 218ms)


```
### Typecheck
```text

> sfia-studio@0.1.0 typecheck
> tsc --noEmit


```
### Lint
```text

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors

```
### Full
```text
aries.test.ts (3 tests) 11ms
 ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 8ms
 ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 5ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 8ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (14 tests) 6ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 5ms
 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (8 tests) 6ms
 ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 7ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 10ms
 ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 8ms
 ✓ __tests__/oa/execution-run/ports.conformance.test.ts (5 tests) 7ms
 ✓ __tests__/oa/execution-run/adapter.ai.fake.test.ts (2 tests) 8ms
 ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 4ms
 ✓ __tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts (6 tests) 11ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (9 tests) 10ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 3ms
 ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 4ms
 ✓ __tests__/oa/execution-run/transitions.test.ts (8 tests) 3ms
 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 25ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 3ms
 ✓ __tests__/oa/execution-run/adapter.secrets.opaque.test.ts (2 tests) 8ms
 ✓ __tests__/oa/execution-run/adapter.events.redaction.test.ts (3 tests) 12ms
 ✓ __tests__/oa/finops/sourceOfTruth.test.ts (5 tests) 2ms
 ✓ __tests__/oa/finops/costEvidence.test.ts (5 tests) 7ms
 ✓ __tests__/oa/execution-run/adapter.git.readonly.test.ts (4 tests) 5ms
 ✓ __tests__/oa/finops/importBoundaries.test.ts (3 tests) 14ms
 ✓ __tests__/oa/finops/period.test.ts (10 tests) 4ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 12ms
 ✓ __tests__/oa/execution-run/adversarial.providerBoundary.test.ts (17 tests) 3ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 3ms
 ✓ __tests__/oa/finops/domainInvariants.test.ts (7 tests) 4ms
 ✓ __tests__/oa/execution-run/evidence.test.ts (6 tests) 1ms
 ✓ __tests__/oa/finops/blockingEligibility.test.ts (9 tests) 3ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 1ms

 Test Files  136 passed (136)
      Tests  1355 passed (1355)
   Start at  06:35:00
   Duration  7.85s (transform 3.51s, setup 4.89s, collect 14.30s, tests 23.04s, environment 7.51s, prepare 5.10s)


```

## Findings / blockers / réserves


### PR-T0-FIND-01 — Impossible calendar dates accepted via Date.parse overflow
- **Sévérité :** MEDIUM
- **Fichier :** `app/lib/oa/finops/domain/invariants.ts` · `validateIsoTimestamp` / `period.ts` · `computeUtcMonthPeriod`
- **Observation :** `2023-02-29`, `2026-02-30`, `2026-04-31` passent `validateIsoTimestamp` (null) et sont convertis en mois adjacents (mars/mai) via `Date.parse` overflow.
- **Exigence :** 126 — timestamp parseable / instant déterministe (pas d’exigence explicite de validité calendaire stricte).
- **Risque :** un `occurredAt` mal formé calendairement pourrait être rattaché au mauvais mois UTC sans erreur.
- **Preuve :** probes temporelles (voir §27).
- **Recommandation :** en lot futur borné, rejeter les dates dont les composants UTC ne round-tripent pas ; ou documenter explicitement l’acceptation overflow.
- **Gate :** réserve arbitration / éventuel fix cycle.
- **Bloquant publication ?** Non pour qualité T0 vs contrat 126 minimal — **oui pour assurance calendaire renforcée**.

### PR-T0-FIND-02 — validateFinOpsPeriodShape n’impose pas une période mensuelle canonique
- **Sévérité :** MEDIUM
- **Fichier :** `invariants.ts` · `validateFinOpsPeriodShape` ; consommateurs `periodContainsInstant` / `finOpsPeriodKey`
- **Observation :** périodes demi-mois, multi-mois ou start mid-month passent la shape ; `finOpsPeriodKey` dérive YYYY-MM depuis periodStart même si end n’est pas le mois suivant.
- **Exigence :** 126 — shape = start < end · timezone UTC ; canonique produite par `computeUtcMonthPeriod`.
- **Risque :** appelant futur passant une période construite manuellement obtient un comportement non mensuel.
- **Preuve :** probes PROBE_PERIODS.
- **Recommandation :** documenter « shape ≠ canonical month » ; éventuellement assert canonique dans T1+ ou helper séparé.
- **Gate :** réserve.
- **Bloquant ?** Non vs contrat 126 (shape only).

### PR-T0-FIND-03 — assertUnknownNotNumericZero couverture textuelle partielle
- **Sévérité :** LOW
- **Fichier :** `invariants.ts` · `assertUnknownNotNumericZero`
- **Observation :** refuse 0 / BigInt(0) / "0" / "0.0" / "0.00" ; n’attrape pas "00", "0.000", "-0" string.
- **Exigence :** 126 / T-TECH-06 minimal (0 / 0n / "0").
- **Risque :** fausse assurance si Money textuel introduit plus tard sans élargir le garde-fou.
- **Preuve :** PROBE_UNKNOWN.
- **Recommandation :** élargir quand Money arrive ; ne pas implémenter Money maintenant.
- **Gate :** réserve.
- **Bloquant ?** Non.

### PR-T0-FIND-04 — Symboles publics support au-delà de la liste §26 stricte
- **Sévérité :** MEDIUM
- **Fichier :** `index.ts` · `types.ts` · `invariants.ts`
- **Observation :** exports publics non listés comme API publique fermée dans §26 : `FINOPS_SOURCES`, `requireValidIsoTimestamp`, `requireValidFinOpsPeriod` (et `createFinOpsError` est listé dans errors.ts). Helpers require* exposent une surface throw.
- **Classification :** JUSTIFIED SUPPORT SYMBOL (tests + conventions repo) — pas d’autorité runtime nouvelle.
- **Risque :** engagement public prématuré ; surface d’erreur élargie.
- **Preuve :** comparaison barrel vs 126 §26.
- **Recommandation :** accepter comme support T0 ou réduire barrel en fix cycle si Morris exige API minimale stricte.
- **Gate :** réserve arbitration.
- **Bloquant ?** Non (pas de nouvelle autorité FinOps).

### PR-T0-FIND-05 — Limites du test importBoundaries
- **Sévérité :** LOW
- **Fichier :** `importBoundaries.test.ts`
- **Observation :** regex sur lignes `import`/`export` ; ne couvre pas `import()`, `require()`, side-effect imports, `node:fs/promises`.
- **Exigence :** frontières domaine.
- **Risque :** faux sentiment de garantie automated.
- **Compensation :** inspection manuelle des 8 fichiers domaine — aucun import interdit ; pas de Date.now ; pas de process.env.
- **Recommandation :** durcir le test dans un futur lot tests ; pas de correctif silencieux maintenant.
- **Gate :** réserve.
- **Bloquant ?** Non.

### PR-T0-FIND-06 — MORRIS PACKAGING DECISION REQUIRED
- **Sévérité :** HIGH (pour publication Git) / non-blocker technique T0
- **Fichier :** packaging Git
- **Observation :** 14 fichiers T0 + 103/127/128 = delta incrémental ; Local Project State contient ~38 documents `projects/sfia-studio/9*.md`–`127` non trackés vs `origin/main`. Aucune convention Git claire n’impose le package 90–128 vs commit incrémental T0.
- **Risque :** PR monstrueuse (~49k lignes docs) ou chaîne documentaire incomplète si commit incrémental seul.
- **Preuve :** `git ls-files --others` inventaire.
- **Recommandation :** arbitrage Morris explicite avant commit/push.
- **Gate :** **obligatoire avant publication**.
- **Bloquant publication ?** **Oui** jusqu’à décision. **Non** pour qualité domaine T0.

### PR-T0-FIND-07 — assertDistinctEvidenceClasses tautologique
- **Sévérité :** NOTE
- **Fichier :** `costEvidence.ts`
- **Observation :** Set de littéraux const toujours size 4 ; ne détecte pas un mapping SoT→class incorrect.
- **Risque :** faible — mapping couvert par tests de classification.
- **Recommandation :** conserver tests de mapping ; helper optionnel.
- **Bloquant ?** Non.

### PR-T0-FIND-08 — DetailCode FINOPS_INVALID_SOURCE non exercé
- **Sévérité :** NOTE
- **Fichier :** `types.ts` · `FinOpsDetailCode`
- **Observation :** code présent ; aucun chemin T0 ne le produit (union fermée + exhaustivité).
- **Risque :** bruit API.
- **Recommandation :** conserver pour T1+ ou retirer en fix cosmétique futur.
- **Bloquant ?** Non.


Blockers: none (technical). Publication blocked pending reserve/packaging arbitration.

## Manifest commit / PR title-body

Voir 128 §§55–61.

## Préservations

104–127 byte-identical (127) · fourteen unchanged during review · package/lock unchanged · T1–T7 NOT AUTHORIZED · TB-04-04 NOT DONE · TB-02-05 preserved · graph 33/56 · no item DONE · LOT-D1 NOT AUTHORIZED · no project commit/push/PR.

## Local Git Truth finale

Branche `pr-readiness/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0` · HEAD `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · main `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · mb `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · lr `0	0`

```text
?? projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
?? projects/sfia-studio/app/__tests__/oa/finops/
?? projects/sfia-studio/app/lib/oa/finops/
```

## Prochaine gate candidate

```text
GO DECISIONS PR READINESS SFIA STUDIO —
ASSISTANT SFIA NATIF OPENAI —
ARBITRATE FINOPS TECHNICAL LOT T0 RESERVES
```

## Verdict

**FINOPS TECHNICAL LOT T0 PR READINESS REVIEWED —**
**CRITICAL REVIEW COMPLETED —**
**T0 INCREMENTAL DELTA VERIFIED —**
**FUTURE COMMIT MANIFEST REQUIRES PACKAGING DECISION —**
**DOCUMENT 126 COMPLIANCE VERIFIED WITH RESERVES —**
**FINOPS DECISIONS COMPLIANCE VERIFIED —**
**PUBLIC API REVIEWED —**
**UTC PERIOD RULES REVIEWED —**
**SOURCE-OF-TRUTH AND EVIDENCE RULES REVIEWED —**
**BLOCKING ELIGIBILITY REVIEWED —**
**UNKNOWN HANDLING REVIEWED —**
**IMPORT BOUNDARIES REVIEWED —**
**TARGETED TESTS PASSED —**
**TYPECHECK PASSED —**
**LINT PASSED —**
**FULL TEST SUITE PASSED —**
**NO BLOCKER —**
**T0 READY WITH RESERVES —**
**MORRIS RESERVE ACCEPTANCE REQUIRED BEFORE PUBLICATION —**
**NO COMMIT, PUSH OR PR AUTHORIZED —**
**T1 TO T7 NOT AUTHORIZED —**
**TB-04-04 NOT DONE —**
**LOT-D1 NOT AUTHORIZED —**
**HANDOFF UPDATED AND REMOTE VERIFIED** *(après publication)*

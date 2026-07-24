# 06 — Morris validation and PR readiness

## Statut

| Champ | Valeur |
|-------|--------|
| **Implémentation** | COMPLETE (local commits) |
| **Validation adversarial** | COMPLETE — findings in `07-…` |
| **Morris validation** | **REQUIRED** — non consommée |
| **PR readiness** | **NOT AUTHORIZED** sans GO Morris |
| **Push / PR / merge** | **INTERDITS** ce cycle |

## Checklist Morris

- [ ] Confirmer MATCH T-A2 Cycle/Trajectory/Epistemic/CKC
- [ ] Valider règles qualification (Critical justification, Light/Standard)
- [ ] Valider Capitalization = cycleTypeId (schema gap T-A2-D02)
- [ ] Valider Critical reste `proposed` (pas d’ack inventé)
- [ ] Valider trajectoire versionnée + LPS expectedVersion + mutex
- [ ] Valider refus promotion Hypothesis→DecisionRef
- [ ] Valider CKC absent = unavailable, pas d’invention, pas de blocage Create
- [ ] Valider anti-legacy / pas SQL / pas method / pas T-A3
- [ ] Décider T-A2-D01…D10 (candidates)
- [ ] Autoriser (ou non) PR readiness

## Verdict attendu post-implémentation

**SFIA STUDIO V3-NATIVE OPTION A T-A2 CYCLE/TRAJECTORY/EPISTEMIC/CKC VALIDATED WITH RESERVES — MORRIS DECISION REQUIRED**

# 10 — Validation, versioning, provenance, sécurité

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion** | `0.1.0-oa` |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR AT/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `10-validation-versioning-provenance-and-security-rules.md` |

## Versioning

- schemaVersion objets (baseline pack) : `0.1.0-oa`
- **Exception T-A4 rework** : `ExecutionContract.schemaVersion` = `0.2.0-oa` (breaking : enum `requiredAuthority` + champs supersession). Avant = `0.1.0-oa` free-string authority / pas de `supersedes*`.
- **Exception T-A5 materialization** : `ExecutionAttempt.schemaVersion` = `0.2.0-oa` (breaking vs `0.1.0-oa` : renames `contractId`/`agentRef`, status enum `accepted`+`result_pending`, retrait `partial`, required provenance/idempotency/correlation/version/createdAt, champs sélection/retry/timestamps). `AgentDescriptor` = `0.1.0-oa` (nouveau, docs-first).
- **Exception T-A6 materialization** :
  - `Evidence` = `0.2.0-oa` (breaking : bindings, classification, storageMode, availability, sourceKind, provenance required, unavailable, digest conditionals)
  - `ReviewBundle` = `0.2.0-oa` (breaking : version OCC, under_review/incomplete, frozenAt, claimEvaluationRefs, provenance required)
  - `ClaimEvaluation` = `0.1.0-oa` (**nouveau** ; R-M01 OPEN jusqu’à validation)
  - `MaturityAssessment` = `0.2.0-oa` (breaking : propose→confirm, claimEvaluationRefs, blockingReservationRefs, autoPromoted=false, provenance)
- Convention repo : bump in-place (pas de dossier historique parallèle) ; exemples/tests alignés sur la nouvelle version
- versions LPS / trajectory / contract / attempt / review-bundle entières monotones
- DoctrinePackage version + digest
- breaking change ⇒ nouvelle version schema
- pas de mutation silencieuse contrat confirmé / bundle gelé
- schemas historiques D1 conservés (HISTORICAL-ONLY / ADAPT)
- Exemples / validateurs : Contract+Attempt+Evidence+ReviewBundle+Maturity `0.2.0-oa` ; ClaimEvaluation + AgentDescriptor `0.1.0-oa`

## Provenance / audit

Objets structurants portent provenance ou refs. AuditEvent append-only conceptuel couvre décision, confirmation, LPS, contrat, exécution, erreur, preuve, claim, maturité, replan.

## Sécurité conceptuelle / RGPD (T-A6)

PII · secrets · chemins protégés · PJ · décisions · preuves · journaux · rétention · redaction · minimisation.
Secrets interdits Evidence claire · aucun token dans location/provenance · aucune Evidence brute dans logs · contenu Evidence non exécuté · pas de confiance auto métadonnées agent · classification PII · effacement ≠ legal hold · U-M02 OPEN (pas de vendor) · séparation lecture/écriture · pas de choix IAM technique ici.

## Validation locale

ajv@6 Draft-07 depuis `projects/sfia-studio/app/node_modules` existant (autre worktree si besoin) — aucune install.

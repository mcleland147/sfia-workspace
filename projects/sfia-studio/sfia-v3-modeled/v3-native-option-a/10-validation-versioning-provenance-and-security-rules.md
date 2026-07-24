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

- schemaVersion objets : `0.1.0-oa`
- versions LPS / trajectory / contract entières monotones
- DoctrinePackage version + digest
- breaking change ⇒ nouvelle version schema
- pas de mutation silencieuse contrat confirmé
- schemas historiques D1 conservés (HISTORICAL-ONLY / ADAPT)

## Provenance / audit

Objets structurants portent provenance ou refs. AuditEvent append-only conceptuel couvre décision, confirmation, LPS, contrat, exécution, erreur, preuve, claim, maturité, replan.

## Sécurité conceptuelle

PII · secrets · chemins protégés · PJ · décisions · preuves · journaux · rétention · redaction · minimisation.
Secrets interdits Evidence claire · séparation lecture/écriture · pas de choix IAM technique ici.

## Validation locale

ajv@6 Draft-07 depuis `projects/sfia-studio/app/node_modules` existant (autre worktree si besoin) — aucune install.

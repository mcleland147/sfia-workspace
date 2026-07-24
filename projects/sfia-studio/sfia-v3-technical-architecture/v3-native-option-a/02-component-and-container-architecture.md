# 02 — Composants et containers

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `02-component-and-container-architecture.md` |

## Containers candidats (P0)

1. **Studio Web App** (UI + BFF/application boundary)
2. **Option A Core** (modules domaine A–H in-process)
3. **Local/relational store** (metadata Project/LPS/Decision/Contract/Audit)
4. **Evidence blob store** (objet/fichier — séparé si volumineux)
5. **Agent adapter process** (Cursor/provider — même process P0, extractible)

## Composants application

Conversation · Project · Doctrine Resolution · CKC Resolution · Cycle Qualification · Trajectory · Decision · Confirmation · Execution Governance · Agent Selection · Evidence · Review · Maturity · ClaimEvaluator.

## Domain aggregates

Project · LivingProjectState · HumanDecision · Confirmation · ExecutionContract · ReviewBundle (+ policies/validators).

## Infrastructure

Repositories · Event journal · Audit journal · SchemaValidationPort (ajv) · SemanticValidationPort · Agent adapters · Cursor Markdown adapter · Clock · IdGenerator · AuthorityResolver.

## Qualification runtime existant

| Actif | Qualif | Note |
|-------|--------|------|
| `platform/sfia-context/*` | REMOVE-FROM-TARGET / REPLACE | lectures method/v2.6 |
| `canonicalPaths` / `sourceLoader` / `contextResolver` | REPLACE | DoctrinePackage resolver v3 |
| `sessionContext` OPS1/D1 | ADAPT→REPLACE | corrélation sans MethodMode |
| D1 intake/repositories SQLite | ADAPT | patterns repo ; modèles OA |
| OPS1 ExecutionContract/orchestrator | HISTORICAL-ONLY | ACL read-only futur |
| OPS1 gates/allowlists/journal | HISTORICAL-ONLY / ADAPT patterns | isolation |
| MethodMode badges/tests | REMOVE-FROM-TARGET | interdit cible |
| ajv Draft-07 | KEEP | validation structurelle |
| cursorExecutionAdapter | REWORK | adaptateur G seulement |

# Modeled — Option A v3-native

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **VALIDATED BY MORRIS** (pack historique) ; T-A6 **matérialisé — validation Morris requise** |
| **Gate AT (consommé)** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Gate T-A6 materialize** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate T-A6 validate** | `GO VALIDATE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED** — VALIDATED AFTER CORRECTION) |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion (baseline)** | `0.1.0-oa` |
| **ExecutionContract** | `0.2.0-oa` (T-A4 modeled rework — breaking) |
| **ExecutionAttempt** | `0.2.0-oa` (T-A5 materialization — breaking vs `0.1.0-oa`) |
| **AgentDescriptor** | `0.1.0-oa` (docs-first ; not a live registry) |
| **Evidence** | `0.2.0-oa` (T-A6 — breaking vs `0.1.0-oa`) |
| **ReviewBundle** | `0.2.0-oa` (T-A6 — breaking vs `0.1.0-oa`) |
| **ClaimEvaluation** | `0.1.0-oa` (T-A6 — **nouveau** ; R-M01 OPEN jusqu’à validation) |
| **MaturityAssessment** | `0.2.0-oa` (T-A6 — breaking vs `0.1.0-oa`) |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | T-A6 modeled VALIDATED AFTER CORRECTION ≠ READY FOR DELIVERY · Pas SCHEMAS ADOPTED runtime · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas T-A4/T-A5/T-A6 RUNTIME · Pas T-A7 · Pas vendor stockage · Pas réserves fermées · R-M01 closure requires Morris |
| **Code / SQL / Figma** | **Interdits** |

## Objectif

Contrats modeled versionnables pour la chaîne Option A (intention → LPS → décision → N1–N3 → ExecutionContract → Evidence / ReviewBundle / ClaimEvaluation → maturité).

## Index

| # | Fichier |
|---|---------|
| 01 | Principes & frontières d’agrégats |
| 02 | Entités, VOs, identifiants |
| 03 | Living Project State |
| 04 | DoctrinePackage & CKC |
| 05 | Cycle, trajectoire, épistémologie |
| 06 | Décision, confirmation, autorité |
| 07 | ExecutionContract, Attempt, agents |
| 08 | Evidence, ReviewBundle, ClaimEvaluation, maturité, dette (**T-A6**) |
| 09 | Commandes, événements, erreurs, transitions (**+ T-A6**) |
| 10 | Validation, versioning, provenance, sécurité (**+ T-A6**) |
| 11 | Réemploi / migration actifs existants |
| 12 | Decision pack M-OA |
| schemas/ | JSON Schema Draft-07 (`0.1.0-oa` baseline ; Contract+Attempt+Evidence+ReviewBundle+Maturity `0.2.0-oa` ; ClaimEvaluation+AgentDescriptor `0.1.0-oa`) |
| examples/ | Exemples valides / invalid/ / narratives (T-A4…T-A6) |
| tests/ | Validation ajv governance modeled-only (Contract · Attempt · Evidence/Review/Claim/Maturity) |

## Verdict pack

**SFIA STUDIO V3-NATIVE OPTION A MODELED CONTRACTS VALIDATED BY MORRIS — TECHNICAL ARCHITECTURE IN PROGRESS**

T-A6 modeled : **VALIDATED AFTER CORRECTION** — gate suivant `GO FRAME T-A6 DELIVERY` (**NOT consumed**).

Réserves maintenues : B5 · R1 · R-T-A3-1…4 · **R-M01** (`VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION`) · **U-M02** · pas READY FOR DELIVERY · schemas non adoptés runtime · aucune implémentation · T-A7 non ouvert.

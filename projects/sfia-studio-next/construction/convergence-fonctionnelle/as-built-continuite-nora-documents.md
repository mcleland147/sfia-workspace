# As-built — Continuité cognitive Nora, historique long et D4 (ML4C)

**Date :** 14 novembre 2026 (fermeture parse provenance stockée + preuve 100 paires)
**Candidat base :** `67bf6b0b` — worktree `fix/next-semantic-intent-convergence-20261112`
**Conception :** V0.7 @ `86377fde`
**Handoff précédent :** `sfia/review-handoff@357008ea` blob `b111a972`
**Statut :** IMPLEMENTED CANDIDATE — stored JSON illisible ≠ HISTORICAL ; 100 paires E2E ; LIVE NOT PROVEN
**STABLE / release :** NOT AVAILABLE — NO RELEASE

## 1. Objet

Fermeture des deux réserves Critical Review (parse provenance + preuve N+100 paires).

| Correctif | Mécanisme |
| --- | --- |
| P0 | Provenance PostgreSQL illisible / non-objet → `UNKNOWN` / `COMMAND_PROVENANCE_UNVERIFIABLE` ; jamais fallback historique |
| P1 | E2E PREPARE → **100 paires** (200 messages) → accord → replay → 10× GET same command |
| Acquis | no-downgrade ; champs `hasOwn` ; identité scellée ; HTTP RO |

## 2. Classification de provenance

```text
HISTORICAL          — objet JSON valide, aucun marqueur distinctif de scellement
SEALED_VALID        — documentCommandBinding===true + tous champs présents + invariants
SEALED_INVALID      — marqueur/restes scellés incomplets ou invalides
STORED_INVALID      — JSON illisible / null / tableau / primitive / vide → refuse avant classification
```

**Frontière :** absence de provenance **entrante** (demande historique) ≠ provenance **stockée** illisible.

Réconciliation : `parseProvenanceJson` doit produire un objet avant tout chemin HISTORICAL ou scellé.

## 3. Champs obligatoires scellés

Présents explicitement (hasOwn) : binding, commandId, operationId, userMessageId, qualifiedIntentId, action, source, preparationId, documentId, baseRevisionId, sectionHint, correlationKey, title, contentSha256, payloadSha256.

CREATE : `documentId`/`baseRevisionId` présents avec `null`.
REVISE : IDs non vides.
Contrôle entrée **et** provenance PostgreSQL objet valide.

## 4. Preuve E2E (100 paires)

PREPARE → 100 USER + 100 ASSISTANT (ordinals uniques) → accord `PRIOR_ASSISTANT_MESSAGE` → D4 CREATE → replay `clientTurnKey` → 10× GET HTTP sur C/K → AVAILABLE inchangé ; altération provenance → refus AVAILABLE ; zéro écriture GET.

## 5. Tests réellement exécutés (ce cycle)

PARSE-01…12 ; FLOW-100 E2E ; suites ML4C PG ; unit/integration ; tsc ; eslint `document/service.ts` ; build ; Playwright ML4C ×2.

## 6. Réserves

LIVE NOT PROVEN ; RECETTE NOT EXECUTED ; push produit / PR #676 / Gate C hors mandat ; NO RELEASE.

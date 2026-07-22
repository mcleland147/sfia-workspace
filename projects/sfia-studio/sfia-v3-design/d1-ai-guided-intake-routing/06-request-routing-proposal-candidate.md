# 06 — RequestRoutingProposal (candidat)

> Schéma **non validé définitivement**. Options + recommandation.

## Recommandation

Adopter un objet **candidat** `RequestRoutingProposal` comme sortie structurée du canal de contrôle intake (avant GuidedSession post-mutation).

## Champs candidats

| Champ | Type | Oblig. | Notes |
|-------|------|--------|-------|
| requestId | string | oui | corrélation intake |
| rawIntent | string | oui | texte utilisateur |
| normalizedIntent | string | non | reformulation |
| proposedOutcomeType | enum | oui | voir ci-dessous |
| candidateProjectId | string? | | |
| candidateProjectName | string? | | affichage |
| candidateCycleId | string? | | |
| proposedCycleType | string? | | ex. FRAMING |
| proposedObjective | string? | | synthèse |
| proposedProfile | string? | | Fast/Standard/… |
| proposedBlocks | string[]? | | UX, RGPD… |
| detectedOpenWork | object? | | actions/gates |
| missingInformation | string[] | | |
| alternatives | Alternative[] | | |
| confidence | number 0–1 | oui | |
| rationale | string | oui | humain-lisible |
| requiresHumanConfirmation | boolean | oui | toujours true pour mutation |
| createdAt | datetime | oui | |

### Outcome types

`CREATE_PROJECT` · `OPEN_CYCLE` · `RESUME_CYCLE` · `RESUME_ACTION` · `OPEN_DECISION` · `ANALYZE_ONLY` · `NEED_CLARIFICATION`

### Alternative

`{ outcomeType, label, rationale, candidateProjectId?, candidateCycleId? }`

## Options écartées (pour l’instant)

- A : réutiliser directement `GuidedProposal` sans objet intake — trop tôt (GuidedSession post-mutation).
- B : muter Project sans proposal — interdit.
- C : schema Draft-07 figé maintenant — hors scope ; modeled ultérieur.

## Lien dual-channel (framing 05)

Prose = explication · Proposal = contrôle machine · mutation = commande humaine.

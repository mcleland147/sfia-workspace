# 05 — Modèle de décision de routage

## Entrées

- rawIntent
- context matches (projects, cycles, actions, decisions)
- signaux utilisateur (analyze-only, manuel)
- confiance scoring
- politiques (anti-claims, mono-op I1, gates fermés)

## Sortie

`RequestRoutingProposal` (doc 06) avec `proposedOutcomeType` et `alternatives[]`.

## Règles de priorité (recommandation)

1. Analyze-only explicite → ANALYZE_ONLY.
2. Décision ouverte clairement demandée → OPEN_DECISION.
3. Action ouverte match forte → RESUME_ACTION.
4. Cycle ouvert match forte → RESUME_CYCLE.
5. Projet match + nouveau sujet → OPEN_CYCLE.
6. Aucun match + besoin créé → CREATE_PROJECT.
7. Ambigu / confiance basse → NEED_CLARIFICATION.
8. Expert manuel → bypass conversation (confirmation toujours requise).

## Seuils candidats (non figés)

| Confiance | Comportement |
|-----------|--------------|
| ≥ 0.8 | 1 proposition primaire + 1–2 alternatives |
| 0.5–0.8 | clarification ciblée puis proposition |
| < 0.5 | NEED_CLARIFICATION · pas de mutation |

## Arbres

Voir `diagrams/d1-routing-decision-tree.mmd`.

# Dossier d’arbitrage — G-WEB-PUBLIC / Option A3

| Champ | Valeur |
|---|---|
| Gate | **G-WEB-PUBLIC / A3 — MORRIS DECISION REQUIRED** |
| Statut | WEB OFF · MIXED CLOSED · aucune campagne LIVE |
| Date | 2026-11-26 |

## Distinctions démontrées (déterministe)

| Dimension | Sémantique | Preuve locale |
|---|---|---|
| `max_tool_calls` | Borne a priori des appels built-in | Injection frontier + tests |
| `tool_usage.web_search.num_requests` | Mesure a posteriori facturable si présente | Parse + reconcile |
| Absent `tool_usage` | **UNKNOWN** (jamais ASSUMED_1) | Tests |
| Pression d’enveloppe | Consomme `max_tool_calls` même si billable UNKNOWN | Tests envelope |

## Option A3 (candidate)

1. Pré-réserver les dimensions contrôlables (`max_tool_calls`, tokens).
2. Mesurer `num_requests` a posteriori lorsque fourni.
3. Réconcilier ; suspendre si mesure > enveloppe.
4. Expliciter le risque résiduel : sans `num_requests`, la borne facturable n’est pas stricte.

## Alternatives

| Id | Description |
|---|---|
| A1 | Gate fermé (état actuel) |
| A2 | Enveloppe = N × max_tool_calls (conservative) |
| A3 | Pré-réserve + mesure + suspend |
| A4 | Direct B1 only (pas hosted) |

## Risque résiduel

OpenAI hosted web_search destinations ne passent pas par le transport B1 Studio. Les garanties fournisseur ≠ garanties egress Studio.

## Rollback

WEB OFF. Jamais ASSUMED_1 comme garantie billable.

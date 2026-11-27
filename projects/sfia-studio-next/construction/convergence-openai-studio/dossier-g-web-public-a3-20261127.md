# Dossier d’arbitrage — G-WEB-PUBLIC / A3 (Intervention 1)

| Champ | Valeur |
|---|---|
| Gate | **G-WEB-PUBLIC / A3 — MORRIS DECISION REQUIRED** |
| Statut | WEB OFF · MIXED CLOSED · aucune campagne LIVE |
| Date | 2026-11-27 |
| Remplace | synthèse 2026-11-26 (conservée historiquement) |

## Distinctions démontrées (déterministe + campagne substituée)

| Dimension | Sémantique | Preuve |
|---|---|---|
| `max_tool_calls` | Borne a priori des appels built-in | Injection frontier + tests |
| `tool_usage.web_search.num_requests` | Mesure a posteriori facturable si présente | Parse + reconcile |
| Absent `tool_usage` | **UNKNOWN** (jamais ASSUMED_1) | Tests |
| UNKNOWN puis MEASURED | Agrégat campagne **PARTIAL** | Tests + campagne ML1 intégrée |
| Stream SSE | UNKNOWN borné — pas de buffer illimité | Code frontier |
| Pression d’enveloppe | Consomme `max_tool_calls` même si billable UNKNOWN | Tests envelope |

**`max_tool_calls` n’est pas une garantie du nombre maximal de recherches facturables** sans preuve `num_requests`.

---

## Option 1 — Enveloppe stricte démontrable avant émission

| | |
|---|---|
| Contrôlé | Admission D6/B1 ; MIXED CLOSED ; max_tool_calls sur le wire ; slots HTTP ; tokens réservés |
| Mesuré | Uniquement si le fournisseur expose `num_requests` **avant** ou **au** point d’émission (non démontré aujourd’hui pour hosted) |
| Risque restant | Hosted web_search destinations hors egress B1 ; facturation peut diverger de max_tool_calls |
| Dépassement | Refus d’émission si enveloppe locale saturée ; suspension campagne |
| Rollback | WEB OFF |
| Faisabilité | **Partielle** — borne stricte facturable **non** démontrable a priori sur hosted |
| Recommandation | Ne pas présenter comme garantie facturable |

## Option 2 — Enveloppe sur dimensions contrôlables + mesure a posteriori (recommandée)

| | |
|---|---|
| Contrôlé | `max_tool_calls`, tokens, slots HTTP, admission, corpus public non sensible |
| Mesuré | `num_requests` a posteriori lorsque fourni ; sinon UNKNOWN/PARTIAL |
| Risque restant | Écart possible borne vs facturable ; destinations hosted ≠ B1 |
| Dépassement | Suspendre si mesure > enveloppe ; jamais ASSUMED_1 |
| Rollback | WEB OFF |
| Recommandation | **Retenir Option 2** avec acceptation explicite du risque résiduel |

---

## Scénario LIVE public borné (préparé, NOT RUN)

1. Corpus : pages de référence publiques (ex. MDN / docs OpenAI publiques).
2. Limites : max_tool_calls=1 ; maxHttpAttempts≤3 ; tokens bornés.
3. Oracle restitution : citations attendues / absence de contenu privé.
4. STOP : ERROR, dépassement mesure, MIXED, fuite hors allowlist.
5. Preuve : frontier PARTIAL/MEASURED + ledger usage ; pas de second ledger.

## Rollback

WEB OFF. Jamais ASSUMED_1 comme garantie billable.

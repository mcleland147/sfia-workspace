# As-built — Comptage natif fournisseur, max_tool_calls, FinOps même périmètre (2026-11-26)

## Causes racines traitées

1. **Estimation `len/3` présentée comme borne** → remplacée, pour enveloppes strictes, par `client.responses.inputTokens.count` (`openai@7.50`) avant émission Responses.
2. **`HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1`** → refus ; injection / exigence de `max_tool_calls` ; arbitrage : borne = appels built-in, **pas** recherches facturées.
3. **FinOps comparaison campagne vs period=7 pilot** → réconciliation work-scope `cgw_b20fcbe3…` ; script verdict refuse ALL PASS si PARTIAL/BLOCKED/NOT RUN.

## Contrat de comptage

- Payload count = sous-ensemble `InputTokenCountParams` (model, input, instructions, tools, reasoning, …).
- `max_output_tokens` / `max_tool_calls` exclus du count (injectés après).
- Fingerprint SHA-256 des champs count ; ALS `nativeInputCount` ; récursion fetch évitée via URL `/responses/input_tokens`.
- Compteurs campagne distincts `inputTokenCountAttempts*` ; pas d’attribution de coût de génération au comptage.
- LIVE : count=28 ≡ usage.input_tokens=28 ; modelApplied observé `gpt-6.1-terra`.

## FinOps

- PG : 16 rows (8 usage + 8 correlation) ; billable requests 8.
- API/UI work detail : 8 requêtes, 123 377 tokens, coût PARTIAL ~0,05 $.
- Timeline conserve les lignes de corrélation ; agrégats les excluent.

## D6 / PDF

- Authority WEB : contrôles purpose/destination/scope/policyVersion/révocation/expiration étendus (tests unit).
- PDF endpoint PG : 8 scénarios PASS (owner/other/lane/expiry/version/work).
- Robustesse extract : limites documentées/étendues dans `pdf-extract-server` / contract.

## Gates

| Gate | Statut |
|---|---|
| G-LIVE-API (count ciblé) | CONSUMED — PASS |
| G-WEB-PUBLIC | NOT CONSUMED — BLOCKED |
| G-WEB-MIXED | CLOSED |
| G-RECETTE | NOT CONSUMED |

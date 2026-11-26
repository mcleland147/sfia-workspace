# G-WEB-PUBLIC — Dossier d'arbitrage borne hosted (2026-11-26)

Classe : **réserve B** · Gate : **FERMÉ** · Aucune acceptation implicite de `ASSUMED_1`.

## Limite réellement disponible aujourd'hui

- Studio compte **1 recherche hosted assumée par requête Responses** lorsque le body contient un outil `web_search` / `web_search_preview` (`HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1`).
- Le moteur hosted OpenAI peut exécuter **plusieurs** recherches internes dans une même requête Responses.
- Les ouvertures directes B1 sont bornées séparément (`maxDirectOpens`) et consommées **avant** l'effet réseau (succès ou échec).

## Garantie fournisseur

Aucune API verrouillée (`openai@7.50` / `@openai/agents@0.21`) n'expose dans ce candidat un compteur hosted opposable « N recherches = N » distinct du nombre de Responses.

## Risque résiduel

Sous-comptage hosted → dépassement silencieux de l'enveloppe « 5 recherches hosted » si on levait le gate avec `ASSUMED_1`.

## Alternative d'enveloppe proposée à Morris

1. **Maintenir G-WEB-PUBLIC fermé** jusqu'à une borne démontrable (instrumentation fournisseur ou plafond Responses=hosted strict documenté).
2. Ou : enveloppe **Responses-capped** explicite (ex. max 5 Responses avec outil web_search, en acceptant que chaque Response ≤ 1 recherche *assumée* n'est **pas** une garantie) — décision Morris écrite requise.
3. Ou : désactiver hosted tool et n'autoriser que les ouvertures directes B1 sous `maxDirectOpens` (périmètre réduit).

## Conséquences

- Financière : frais hosted non bornés strictement si gate ouvert sous ASSUMED_1.
- Sécurité : périmètre WEB LIVE inchangé (DEV, projet public only) ; G-WEB-MIXED reste fermé.
- Proposition : **ne pas consommer G-WEB-PUBLIC** dans ce cycle ; conserver WEB OFF sur le candidat RECETTE.

## Exit

GO Morris sur l'une des alternatives 1–3, ou fourniture d'une métrique hosted opposable.

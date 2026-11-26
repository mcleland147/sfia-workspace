# G-WEB-PUBLIC — Dossier d'arbitrage borne hosted (2026-11-26, màj régularisation)

Classe : **réserve B** · Gate : **FERMÉ** · Aucune acceptation implicite de `ASSUMED_1`.

## Qualification `max_tool_calls` (openai@7.50 / Responses)

| Question | Résultat |
|---|---|
| Support SDK verrouillé | **Oui** — champ `max_tool_calls` sur Responses create (`responses.d.ts`). |
| Passage payload final | **Oui** — `injectMaxToolCallsForHostedCampaign` injecte `max_tool_calls: 1` (ou budget restant) lorsque `web_search` / `web_search_preview` est présent et `maxHostedSearches` est défini. |
| Override silencieux | **Non** — si déjà présent, conservé. |
| Portée | **Par Response** — plafond du nombre total d'appels aux **outils intégrés** (built-in), tous outils confondus, pas par outil. |
| Retries | Chaque nouvelle tentative HTTP Responses ré-applique le contrôle / réservation. |
| Unité facturée | **Non établie** — OpenAI documente des `web_search_call` avec actions `search` / `open_page` / `find_in_page` ; une action peut contenir plusieurs queries. `max_tool_calls: 1` ≠ 1 recherche facturée. |
| `return_token_budget` | Qualifié doc : valeurs `default` \| `unlimited` sur outil `web_search` (GPT-5+ reasoning). **Ne borne pas** la consommation tokens fournisseur globale ; ne remplace pas l'enveloppe cumulée. |

## Limite réellement disponible aujourd'hui

- Studio **refuse** désormais `HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1` comme réservation (`HOSTED_BOUND_REQUIRES_MAX_TOOL_CALLS` si outil hosted sans `max_tool_calls`).
- Avec injection : réservation campagne = valeur `max_tool_calls` (budget d'appels built-in), **pas** une garantie d'unités de recherche facturées.
- Ouvertures directes B1 : bornées séparément (`maxDirectOpens`), consommées **avant** egress (succès ou échec).

## Garantie fournisseur

`max_tool_calls` borne les appels d'outils intégrés par Response. Il **n'établit pas** :

1 Response = 1 recherche = 1 unité facturée.

Aucune métrique hosted « N recherches facturées » distincte n'est exposée de façon opposable dans ce candidat.

## Risque résiduel

Sous-comptage des unités facturées / queries internes si G-WEB-PUBLIC était ouvert en assimilant `max_tool_calls` à des recherches hosted facturables.

## Alternative d'enveloppe proposée à Morris

1. **Maintenir G-WEB-PUBLIC fermé** jusqu'à une borne démontrable sur l'unité réellement recherchée (recherches / frais outil).
2. Ou : enveloppe **built-in tool-calls** explicite (ex. max 5 × `max_tool_calls: 1` Responses) — accepter par écrit que l'unité contrôlée est l'appel built-in, **pas** la facturation hosted fine.
3. Ou : désactiver hosted tool et n'autoriser que les ouvertures directes B1 sous `maxDirectOpens`.

## Conséquences

- Financière : frais hosted non bornés strictement au niveau « recherche facturée » si gate ouvert sous seule `max_tool_calls`.
- Sécurité : périmètre WEB LIVE inchangé (DEV, projet public only) ; G-WEB-MIXED reste fermé.
- Proposition cycle : **ne pas consommer G-WEB-PUBLIC** ; conserver WEB OFF sur le candidat RECETTE.

## Exit

GO Morris sur l'une des alternatives 1–3, ou preuve LIVE que l'unité facturée est effectivement bornée par le mécanisme retenu.

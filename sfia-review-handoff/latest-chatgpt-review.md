# SFIA Review Pack FULL — ML5 Architecture Study: OpenAI Native Capability Convergence

- **Generated_utc**: 2026-11-26T18:04:12.997756+00:00
- **Cycle**: R5 · ML5 · Type **6 Architecture technique** · CRITICAL · DOC / Architecture Study
- **Mode**: READ-ONLY PRODUCT · **NO IMPLEMENTATION**
- **Branch**: `sfia/next-ml5-integrated-delivery-20261123`
- **HEAD_initial_candidate**: `c574d2621a6ce7b5fec3727853185982b23ca3bf` (code tip preserved)
- **HEAD_final**: `d39df2861eae800797e3047b017cb422bd461dfe` (docs-only study commit)
- **Tree**: `a46b835f12316034385df65e5e4566dcf406beb5`
- **Web tree**: `5a1289fcfa26b1963f53ed1364dbd842e771e46c` — **UNCHANGED vs code tip** (`5a1289fc…`)
- **BUILD_ID candidat préservé**: `Le9pyy4fbPKT_m0YlplAr`
- **Merge-base main**: `997897fd7cf914771e7d08e8030dc7123fab7d25`
- **ENV-01**: observed DEV/RECETTE isolation; WEB OFF; no RECETTE mutation
- **Mandate note**: user message truncated after « Review » — proceeded with CKC cycle-6 architecture-study defaults (FULL pack, Critical handoff)
- **Verdict**: **ML5 NATIVE CAPABILITY CONVERGENCE STUDY — READY FOR CHATGPT/MORRIS ARCHITECTURE DECISION**
- **Handoff**: REQUIRED / PUBLISH-IN-CYCLE (Critical)

## 1. Git Truth
```
d39df286 docs(next): ML5 architecture study on OpenAI native capability convergence
c574d262 fix(next): ML5 native input_tokens bounds, max_tool_calls, FinOps/D6/PDF residuals

 ...as-built-ml5-provider-native-bounds-20261126.md |  36 +++
 .../construction/delivery-history.md               |  13 +
 ...onvergence-capacites-natives-openai-20261126.md | 356 +++++++++++++++++++++
 ...web-public-hosted-bound-arbitration-20261126.md |  40 ++-
 .../ml5-recette-manifest-candidate-20261126.md     |  54 ++--
 .../ml5-sequence-d-web-pdf-residual-20261126.md    |  38 +++
 6 files changed, 501 insertions(+), 36 deletions(-)

```
Web tree preserved: `5a1289fcfa26b1963f53ed1364dbd842e771e46c`.

## 2. Scope and non-goals
- Study only: keep / simplify / delegate / replace / retire / build / pilot value / ML5 L2 impact.
- No product src changes. No LIVE. No G-WEB-PUBLIC. No RECETTE cutover. No L2 engagement.
- Candidate fully preserved.

## 3. Key finding (locked openai@7.50)
`Response.tool_usage.web_search.num_requests` — billable hosted search count already typed in SDK; **not yet consumed** by Studio FinOps. Changes G-WEB-PUBLIC arbitration options (recommend hybrid A3 post-GO).

## 4. Full study dossier (created)
### `projects/sfia-studio-next/construction/ml5-etude-convergence-capacites-natives-openai-20261126.md`
```markdown
# ML5 — Étude architecturale : convergence des capacités natives OpenAI et rationalisation du socle Studio Next

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 |
| Cycle | **6 — Architecture technique** · CRITICAL · DOC / Architecture Study |
| Mode | **READ-ONLY PRODUCT** — **AUCUNE IMPLÉMENTATION** |
| Branche produit préservée | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD candidat figé | `c574d2621a6ce7b5fec3727853185982b23ca3bf` |
| Tree / Web tree | `85e99535…` / `5a1289fc…` |
| BUILD_ID candidat | `Le9pyy4fbPKT_m0YlplAr` |
| SDK verrouillés | `openai@7.50.0` · `@openai/agents@0.21.0` · `pdfjs-dist@4.10.38` |
| Trajectoire RECETTE | **Suspendue** (préservation intégrale du candidat) |
| Statut | **DRAFT STUDY — prêt pour revue ChatGPT/Morris** · maturité cible `suffisante_pour_decider` |

---

## 0. Objet et anti-confusions

Cette étude ne vise **pas** à brancher toutes les API OpenAI disponibles.

Elle vise à décider, pour Studio Next :

| Question | Sens |
|---|---|
| Conserver | Responsabilité Studio indispensable (autorité, invariants, SoT) |
| Simplifier | Réduire un mécanisme Studio redondant sans perdre le contrat |
| Déléguer | Paramètre / moteur fournisseur opposable, sous contrôle Studio |
| Adapter / remplacer | Changer l'implémentation Studio en s'appuyant sur le natif |
| Retirer | Abandonner un chemin custom si le natif couvre vraiment le besoin |
| Construire | Lacune réelle (produit ou preuve) encore absente |
| Utile au Pilote | Valeur d'usage, pas disponibilité technique |
| Impact ML5 L2 | Ce que la livraison 2 (Cursor / réalisation) doit assumer ou non |

**Règle de lecture obligatoire :**

Disponibilité API ≠ compatibilité SDK ≠ permission effective ≠ pertinence produit ≠ conformité architecturale ≠ comportement prouvé.

Le candidat `c574d262` / `Le9pyy4fbPKT_m0YlplAr` reste l'artefact de référence ; cette étude **ne le mute pas**.

---

## 1. État d'entrée (faits opposables)

### 1.1 Socle déjà qualifié (ne pas reconstruire)

- Frontière commune `provider-emission-frontier.ts` (ALS, campagnes, lane, admission modèle/effort).
- Comptage natif `POST /v1/responses/input_tokens` pour enveloppes strictes (LIVE : count ≡ usage).
- Injection `max_output_tokens` et `max_tool_calls` (hosted) sur le payload final.
- Agents SDK tool-loop multi-Responses sous transport substitué.
- FinOps PG ↔ API ↔ UI sur work scope (ex. `cgw_b20fcbe3…` : 8 req / 123377 tok).
- D6 WEB authority + PDF viewer auth PG (déterministe).
- Investigation Chantiers360 LIVE capitalisée (non à rejouer pour cette étude).

### 1.2 Réserves B explicitement isolées

| Id | Capacité | Isolation |
|---|---|---|
| R-G-WEB-PUBLIC-HOSTED | WEB LIVE public | WEB OFF ; gate fermé |
| R-GIT-PDF-TEXT | PDF textuel Git | Corpus manquant |
| R-PDF-RSS / browser E2E | Preuves limites / UX | Capacité isolée |

### 1.3 Découverte structurante de cette étude (SDK 7.50)

Dans `openai/resources/responses/responses.d.ts` (verrouillé) :

```text
Response.tool_usage?.web_search.num_requests
```

Documentation SDK associée : **compte les recherches WEB facturables** ; les actions `open_page` / recherches discountées sont exclues ; réconciliation finale via facturation fournisseur.

**Implication :** le blocage G-WEB-PUBLIC reposait sur l'absence d'unité facturable opposable *a priori*. Une unité **a posteriori** native existe déjà dans le SDK verrouillé et n'est **pas encore consommée** par Studio FinOps. Elle ne remplace pas une borne pré-émission, mais change le dossier d'arbitrage.

---

## 2. Inventaire croisé — capacités natives vs responsabilités Studio

Légende recommandations : **KEEP** · **DELEGATE** · **HYBRID** · **ADOPT** · **IGNORE** · **BUILD**.

### 2.1 Bornes et comptage fournisseur

| Capacité | Natif (7.50 / 0.21) | Studio aujourd'hui | Recommandation | Motif |
|---|---|---|---|---|
| Comptage entrée | `responses.inputTokens.count` | Intégré frontière (strict) | **KEEP HYBRID** | Natif = mesure ; Studio = réservation campagne / fail-closed |
| Borne sortie | `max_output_tokens` | Injection + campagne | **DELEGATE param / KEEP ledger** | Paramètre fournisseur ; enveloppe cumulée Studio |
| Borne appels built-in | `max_tool_calls` | Injection hosted | **HYBRID** | Borne Response réelle ; ≠ recherches facturées |
| Recherches facturables | `tool_usage.web_search.num_requests` | **Non consommé** | **ADOPT** (FinOps / réconciliation) | Unité native a posteriori ; ouvre sortie à R-G-WEB-PUBLIC |
| Estimation `len/3` | — | Indication seulement | **KEEP as hint / never guarantee** | Déjà corrigé pour enveloppes strictes |
| Retry HTTP | Client OpenAI `maxRetries` | Exercé + frontière | **KEEP** | Retry = tentative facturable potentielle |

### 2.2 Boucle cognitive et outils

| Capacité | Natif | Studio | Reco | Motif |
|---|---|---|---|---|
| Agents `run()` multi-tours | `@openai/agents` | `nora-adapter` | **KEEP** | Produit = outils Studio + politique |
| Function tools produit | SDK tools | Outils D4/Git/WEB/D6 | **KEEP** | Contrats métier / droits |
| Hosted `web_search` | Responses tool | `public-web-search-frontier` | **HYBRID** | Moteur chez fournisseur ; D6/B1/lane Studio |
| Ouvertures directes B1 | — | egress guard + sessions | **KEEP** | Hors hosted ; sécurité Studio |
| `return_token_budget` | `default`/`unlimited` (web_search) | Non qualifié opérationnel | **EVALUATE → optional DELEGATE** | Budget contenu retourné ≠ enveloppe tokens globale |
| `filters` / `external_web_access` | Sur `web_search` | Partiel / politique Studio | **HYBRID** | Utile ; ne remplace pas D6 |
| `file_search` / vector stores | Présents SDK | Non utilisés | **IGNORE (court terme)** | Concurrence D4/Git ; risque double SoT |
| `code_interpreter` / computer | Présents SDK | Non utilisés | **IGNORE pour ML5 L1** | Hors invariants ; L2 ≠ computer-use OpenAI |
| `background: true` | Responses | Non utilisé | **CANDIDATE STUDY** | Long research ; complexifie reprise D3 |
| Structured outputs | `text.format` | Partiel | **HYBRID** | Renforcer contrats outils, pas remplacer sémantique SEM |

### 2.3 Continuité, mémoire, allocation

| Capacité | Natif | Studio | Reco | Motif |
|---|---|---|---|---|
| `previous_response_id` / `conversation` | Responses | Continuity via `cognitive_works` / acquis | **KEEP Studio SoT** ; **optional HYBRID** | SoT métier = D3/D4 ; natif = optimisation contexte fournisseur seulement |
| Conducteur / soft-stop / restitution | — | `cognitive-conductor` | **KEEP** | Invariant produit |
| Allocation Terra/Luna/Sol + admission | — | `cognitive-policy` / resources | **KEEP** | Politique produit ; OpenAI ne connaît pas le catalogue Studio |
| Checkpoints / CAS / lease | — | D3 | **KEEP** | Intégrité reprise |
| Sessions Agents SDK | Agents core | Peu / pas SoT | **IGNORE as SoT** | Ne pas déplacer l'état métier chez le fournisseur |

### 2.4 FinOps, OBS, autorité, documents

| Capacité | Natif | Studio | Reco | Motif |
|---|---|---|---|---|
| `usage` tokens | Response.usage | `provider_usage_observations` | **KEEP ledger Studio** | Attribution work/projet/lane |
| `tool_usage` | Response.tool_usage | Absent | **ADOPT into ledger** | Corrélation hosted facturable |
| Admin usage/costs API | Admin scopes | OUT contrat | **IGNORE** | Hors permissions ; pas de clé admin |
| Tarifs locaux versionnés | — | Catalogue Studio | **KEEP** | Estimation ≠ facture |
| D6 HumanDecision | — | Domaine D6 | **KEEP** | Autorité humaine non déléguable |
| PDF extract/viewer | — | pdfjs + auth | **KEEP** | Hors OpenAI |
| OBS IDs causals | — | Contrat OBS | **KEEP** | Corrélation multi-couches |

---

## 3. Matrice de rationalisation (décisions proposées)

### 3.1 Conserver absolument (non négociable sans ADR)

1. **Propriétaires D3–D9** et SoT PostgreSQL (`cognitive_works`, documents, décisions).
2. **Frontière d'émission commune** (lane, fingerprint, campagne, ALS fail-closed).
3. **Admission modèle/effort Studio** (catalogue Terra/Luna/Sol).
4. **D6 + EffectConditions + reverify egress** pour WEB exceptionnel.
5. **Ledger FinOps Studio** (observations durables, PARTIAL/UNKNOWN honnêtes).
6. **B1 direct opens** contrôlés avant effet réseau.
7. **Isolation ENV-01** (DEV/RECETTE/STABLE).

### 3.2 Simplifier (réduire complexité Studio sans perdre le contrat)

| Zone | Simplification candidate | Précondition |
|---|---|---|
| Bornes entrée campagne | Une seule voie « native count obligatoire si limite » ; retirer chemins estimate-as-reserve résiduels | Déjà largement fait ; audit exhaustif |
| Hosted accounting | Remplacer toute logique ASSUMED_1 restante par : pré-réserve `max_tool_calls` + post-commit `tool_usage.web_search.num_requests` | Qualification LIVE de `tool_usage` |
| Doubles wrappers fetch | Clarifier un seul install client frontier-aware | Revue non-régression Agents |
| Scripts LIVE | Factoriser oracles PG/API/UI same-scope | Pure QA |

### 3.3 Déléguer au fournisseur (sous garde Studio)

| Délégation | Garde Studio |
|---|---|
| Tokenisation / count exact | Campagne + fingerprint + non-récursion |
| Truncation / max_output_tokens | Enveloppes cumulées + fail-closed |
| Exécution hosted web_search | D6/B1/lane + FinOps `num_requests` + WEB OFF défaut |
| Retry transport | Comptage tentatives HTTP Studio |

### 3.4 Adapter / remplacer (construction future — pas ce cycle)

| Remplacement | De | Vers | Risque |
|---|---|---|---|
| Unité hosted FinOps | Compteurs assumés | `tool_usage.web_search.num_requests` | Omission du champ → UNKNOWN |
| Pré-borne hosted | ASSUMED_1 | `max_tool_calls` + politique Morris sur unité | Sur/sous-réservation |
| Contexte long | Reconstruction manuelle lourde | Évaluation contrôlée `previous_response_id` | Fuite / mutabilité contexte distant |

### 3.5 Retirer (seulement après preuve)

| Candidat au retrait | Condition de retrait |
|---|---|
| Toute estimation présentée comme borne stricte | Déjà interdit ; purger tests/docs obsolètes |
| Chemins `web_search_preview` legacy | Migration explicite vers `web_search` + contrôles nouveaux |
| Ledger mémoire « de secours » | Jamais SoT ; supprimer s'il réapparaît |

### 3.6 Construire encore (lacunes réelles)

| Lacune | Pourquoi | Priorité |
|---|---|---|
| Consommation FinOps de `tool_usage.web_search.num_requests` | Unité facturable native absente du ledger | P0 étude → P0 construction |
| Politique d'enveloppe hosted post-`num_requests` | Décider si G-WEB-PUBLIC peut rouvrir | P0 décision Morris |
| Preuve LIVE `tool_usage` sous WEB OFF→PUBLIC | Comportement prouvé | P0 gate |
| Corpus Git PDF textuel | Réserve B | P1 isolable |
| Stratégie `previous_response_id` vs acquis D3 | Continuité / coût tokens | P1 architecture |
| Position sur `background` / Astra long research | Perf / reprise | P2 |
| Position sur file_search vs D4 | Double SoT | P2 (défaut IGNORE) |

### 3.7 Nouvelles capacités utiles au Pilote (filtre valeur)

| Idée | Utile Pilote ? | Verdict étude |
|---|---|---|
| FinOps affichant recherches hosted facturables | Oui (transparence coûts WEB) | **Oui — via tool_usage** |
| WEB public gouverné réouvert | Oui si safe | **Conditionnel** à politique d'enveloppe |
| Recherche longue background | Possible | **Non prioritaire** avant L2/cognition stable |
| Computer-use / code_interpreter OpenAI | Faible pour Studio gouverné | **Non** (conflit L2 Cursor) |
| Vector store OpenAI comme mémoire projet | Douteux | **Non** (D4/Git restent SoT) |
| Moderation API systématique | RSSI | **Évaluer** hors ML5 L1 |

---

## 4. Options structurantes (au moins deux par décision)

### Décision D-A — Unité de contrôle WEB hosted

| Option | Description | Pour | Contre | Réversibilité |
|---|---|---|---|---|
| **A1 — Fermé** | Maintenir G-WEB-PUBLIC fermé | Risque financier/sécurité contenu | Capacité Pilote absente | Haute |
| **A2 — Built-in only** | Enveloppe = N × `max_tool_calls` | Borne pré-émission native | ≠ facturation fine | Haute |
| **A3 — Hybrid reconcile** | Pré-réserve `max_tool_calls` + post-commit `num_requests` + suspend si dépassement constaté | Unité facturable a posteriori + borne a priori | Fenêtre d'incertitude pendant la Response | Moyenne |
| **A4 — Direct-only** | Pas de hosted ; B1 only | Contrôle egress maximal | Moins de capacité recherche | Haute |

**Recommandation d'étude :** **A3** comme cible de construction, **A1** maintenu jusqu'au GO ; ne pas choisir A2 comme « facturable ».

### Décision D-B — SoT de continuité conversationnelle

| Option | Description | Pour | Contre |
|---|---|---|---|
| **B1 — Studio only** | `cognitive_works` + acquis | Contrôle, audit, reprise | Coût tokens possible |
| **B2 — Provider conversation** | `conversation` / `previous_response_id` SoT | Moins de payload | Perte gouvernance / mutabilité |
| **B3 — Hybrid** | SoT Studio ; natif optionnel pour cache contexte | Optimisation sans abdiquer | Complexité double chemin |

**Recommandation :** **B1** court terme ; **B3** expérimental DEV uniquement après ADR.

### Décision D-C — Périmètre SDK pour ML5 L2

| Option | Description | Pour | Contre |
|---|---|---|---|
| **C1 — Cursor reste le bras D7** | OpenAI = cognition ; Cursor = réalisation | Aligné contrats L2 | Deux fournisseurs |
| **C2 — Computer-use OpenAI** | Remplacer partie Cursor | Un seul vendor | Rupture gouvernance L2 / preuves Cursor |
| **C3 — Mix opportuniste** | Computer-use pour micro-tâches | Flexibilité | Dilution responsabilités |

**Recommandation :** **C1** — L2 non engagée ; computer-use **IGNORE** dans la rationalisation L1.

---

## 5. Impacts domaines (D3–D9) et NFR

| Domaine | Impact si ADOPT tool_usage / A3 | Impact si conversation native SoT |
|---|---|---|
| D3 | Enrichir observations ; campagnes hosted | Risque dilution SoT |
| D4 | Faible | Faible |
| D6 | Inchangé (autorité) | Inchangé |
| D7/D8 (L2) | Indépendant si C1 | Indépendant |
| D9 Git | PDF text toujours B | — |
| FinOps | Corrélation `num_requests` | — |
| Sécu | WEB OFF défaut ; pas G-WEB-MIXED | Fuite si contexte distant |
| Perf | Count = RTT supplémentaire déjà accepté | Background = latence async |
| Obs | Nouveaux champs usage tool | Corrélation response_id |

---

## 6. Conséquences sur ML5 livraison 2

1. **Ne pas bloquer L2** sur l'ouverture WEB : L2 = réalisation Cursor / preuves / restitution.
2. **Ne pas substituer** Cursor par computer-use OpenAI dans cette rationalisation.
3. Toute simplification frontière/FinOps **avant L2** réduit le bruit de qualification L2.
4. Si A3 est retenu, L2 hérite d'un FinOps hosted honnête — utile aux bilans de mission, pas au dispatch Cursor.
5. La suspension RECETTE actuelle **protège** le candidat ; L2 reste « non engagée » jusqu'à GO Morris post-étude.

---

## 7. Proposition de deux ou trois macro-lots de construction

> Hors scope de **cette** étude (pas d'implémentation ici). Ordre recommandé après GO Morris.

### Macro-lot R1 — « Provider native honesty » (CRITICAL / Delivery)

**But :** consommer les capacités natives déjà verrouillées pour rendre bornes et FinOps opposables.

- Persister / projeter `tool_usage.web_search.num_requests`.
- Réconciliation campagne hosted (pré `max_tool_calls` / post `num_requests`).
- Qualifier LIVE `tool_usage` (DEV, projet public).
- Arbitrage Morris A1 vs A3 ; éventuellement rouvrir G-WEB-PUBLIC sous A3.
- Non-régression FinOps PG/API/UI.

**Exit :** unité hosted facturable observée ou réserve B maintenue avec preuve.

### Macro-lot R2 — « Frontier & continuity rationalization » (CRITICAL / Architecture→Delivery)

**But :** simplifier la frontière et clarifier continuité.

- Audit unique client OpenAI frontier-aware.
- Politique explicite `previous_response_id` (B1 vs B3).
- Purge chemins estimate/ASSUMED/preview obsolètes.
- Documentation as-built + matrice E/OBS.

**Exit :** frontière plus petite, invariants inchangés, ADR continuité.

### Macro-lot R3 — « RECETTE candidate + L2 ready gate » (Delivery / QA)

**But :** reprendre la trajectoire suspendue sans mélanger rationalisation et cutover.

- Build/smoke candidat post-R1/R2.
- Manifeste RECETTE ; WEB OFF défaut.
- Décision scope réserves B restantes.
- Préparer engagement L2 (Cursor) sans l'exécuter.

**Exit :** GO/NOGO mise à disposition RECETTE distinct de L2.

---

## 8. Ce que Studio ne doit pas faire

- Élargir les scopes clé OpenAI « par précaution » (Files/Admin/fine-tuning).
- Faire d'un vector store OpenAI la mémoire projet.
- Présenter `max_tool_calls` comme garantie de frais hosted.
- Présenter une estimation locale comme borne stricte.
- Déplacer D6/D3/D4 chez le fournisseur.
- Engager L2 ou cutover RECETTE sous couvert de cette étude.
- Upgrader majeures SDK « pour suivre le blog » sans besoin démontré.

---

## 9. Maturité et fiabilité de l'étude

| Dimension | Niveau | Commentaire |
|---|---|---|
| Inventaire SDK verrouillé | **Suffisant** | Types 7.50 lus ; `tool_usage` confirmé |
| Permissions projet OpenAI | **Partiel** | Scopes historiques documentés ; non re-observés ce cycle |
| Preuve LIVE `tool_usage` | **Absente** | Capacité typée, non exercée sous WEB |
| Alternatives | **Suffisant** | D-A/D-B/D-C avec trade-offs |
| Prêt à borner construction | **Partiel → suffisant après GO D-A** | R1 peut être cadré dès choix A1/A3 |

**Anti-claims refusés :** « architecture validée », « WEB safe », « zéro dette », « prêt prod », « L2 couverte ».

---

## 10. Décisions Morris requises

1. **D-A** : A1 / A2 / A3 / A4 pour WEB hosted.
2. Autoriser ou non un **macro-lot R1** (construction) après cette étude.
3. **D-B** : confirmer B1 (Studio SoT) vs expérimentation B3.
4. Confirmer **C1** (Cursor reste L2) — refus computer-use comme substitut.
5. Reprendre ou non la trajectoire RECETTE après R1/R2 (macro-lot R3).
6. Compléter le mandat d'étude si des sections tronquées (Review Handoff, sources, STOP) diffèrent de ce dossier.

---

## 11. Annexes — références

- Candidat : `c574d262` · handoff régularisation `29b0ae4c`.
- As-built native bounds : `construction/as-built-ml5-provider-native-bounds-20261126.md`.
- Arbitrage hosted : `construction/ml5-g-web-public-hosted-bound-arbitration-20261126.md`.
- SDK : `node_modules/openai/resources/responses/responses.d.ts` (`tool_usage`, `max_tool_calls`, `inputTokens`).
- Docs OpenAI : token counting, web search, Responses create.
- Contrats (ref `8b334487`) : allocation cognitive / conducteur / OBS.
- CKC cycle 6 : `pilots/03-architecture-technique.md` (candidate).

---

## 12. Verdict d'étude

**ML5 NATIVE CAPABILITY CONVERGENCE STUDY — READY FOR CHATGPT/MORRIS ARCHITECTURE DECISION.**

Pas de mutation produit. Candidat préservé. Trajectoire RECETTE suspendue. Construction non engagée.

```

## 5. Diff of study commit
```diff
commit d39df2861eae800797e3047b017cb422bd461dfe
Author: Morris Cleland <morris@macbook-air.home>
Date:   Thu Nov 26 19:03:56 2026 +0100

    docs(next): ML5 architecture study on OpenAI native capability convergence

    Capture a read-only rationalization dossier (keep/delegate/adopt/retire/build) against the preserved c574d262 candidate; no product implementation.

    Co-authored-by: Cursor <cursoragent@cursor.com>
---
 ...onvergence-capacites-natives-openai-20261126.md | 356 +++++++++++++++++++++
 1 file changed, 356 insertions(+)

diff --git a/projects/sfia-studio-next/construction/ml5-etude-convergence-capacites-natives-openai-20261126.md b/projects/sfia-studio-next/construction/ml5-etude-convergence-capacites-natives-openai-20261126.md
new file mode 100644
index 00000000..6c41e98b
--- /dev/null
+++ b/projects/sfia-studio-next/construction/ml5-etude-convergence-capacites-natives-openai-20261126.md
@@ -0,0 +1,356 @@
+# ML5 — Étude architecturale : convergence des capacités natives OpenAI et rationalisation du socle Studio Next
+
+| Champ | Valeur |
+|---|---|
+| Date | 2026-11-26 |
+| Cycle | **6 — Architecture technique** · CRITICAL · DOC / Architecture Study |
+| Mode | **READ-ONLY PRODUCT** — **AUCUNE IMPLÉMENTATION** |
+| Branche produit préservée | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD candidat figé | `c574d2621a6ce7b5fec3727853185982b23ca3bf` |
+| Tree / Web tree | `85e99535…` / `5a1289fc…` |
+| BUILD_ID candidat | `Le9pyy4fbPKT_m0YlplAr` |
+| SDK verrouillés | `openai@7.50.0` · `@openai/agents@0.21.0` · `pdfjs-dist@4.10.38` |
+| Trajectoire RECETTE | **Suspendue** (préservation intégrale du candidat) |
+| Statut | **DRAFT STUDY — prêt pour revue ChatGPT/Morris** · maturité cible `suffisante_pour_decider` |
+
+---
+
+## 0. Objet et anti-confusions
+
+Cette étude ne vise **pas** à brancher toutes les API OpenAI disponibles.
+
+Elle vise à décider, pour Studio Next :
+
+| Question | Sens |
+|---|---|
+| Conserver | Responsabilité Studio indispensable (autorité, invariants, SoT) |
+| Simplifier | Réduire un mécanisme Studio redondant sans perdre le contrat |
+| Déléguer | Paramètre / moteur fournisseur opposable, sous contrôle Studio |
+| Adapter / remplacer | Changer l'implémentation Studio en s'appuyant sur le natif |
+| Retirer | Abandonner un chemin custom si le natif couvre vraiment le besoin |
+| Construire | Lacune réelle (produit ou preuve) encore absente |
+| Utile au Pilote | Valeur d'usage, pas disponibilité technique |
+| Impact ML5 L2 | Ce que la livraison 2 (Cursor / réalisation) doit assumer ou non |
+
+**Règle de lecture obligatoire :**
+
+Disponibilité API ≠ compatibilité SDK ≠ permission effective ≠ pertinence produit ≠ conformité architecturale ≠ comportement prouvé.
+
+Le candidat `c574d262` / `Le9pyy4fbPKT_m0YlplAr` reste l'artefact de référence ; cette étude **ne le mute pas**.
+
+---
+
+## 1. État d'entrée (faits opposables)
+
+### 1.1 Socle déjà qualifié (ne pas reconstruire)
+
+- Frontière commune `provider-emission-frontier.ts` (ALS, campagnes, lane, admission modèle/effort).
+- Comptage natif `POST /v1/responses/input_tokens` pour enveloppes strictes (LIVE : count ≡ usage).
+- Injection `max_output_tokens` et `max_tool_calls` (hosted) sur le payload final.
+- Agents SDK tool-loop multi-Responses sous transport substitué.
+- FinOps PG ↔ API ↔ UI sur work scope (ex. `cgw_b20fcbe3…` : 8 req / 123377 tok).
+- D6 WEB authority + PDF viewer auth PG (déterministe).
+- Investigation Chantiers360 LIVE capitalisée (non à rejouer pour cette étude).
+
+### 1.2 Réserves B explicitement isolées
+
+| Id | Capacité | Isolation |
+|---|---|---|
+| R-G-WEB-PUBLIC-HOSTED | WEB LIVE public | WEB OFF ; gate fermé |
+| R-GIT-PDF-TEXT | PDF textuel Git | Corpus manquant |
+| R-PDF-RSS / browser E2E | Preuves limites / UX | Capacité isolée |
+
+### 1.3 Découverte structurante de cette étude (SDK 7.50)
+
+Dans `openai/resources/responses/responses.d.ts` (verrouillé) :
+
+```text
+Response.tool_usage?.web_search.num_requests
+```
+
+Documentation SDK associée : **compte les recherches WEB facturables** ; les actions `open_page` / recherches discountées sont exclues ; réconciliation finale via facturation fournisseur.
+
+**Implication :** le blocage G-WEB-PUBLIC reposait sur l'absence d'unité facturable opposable *a priori*. Une unité **a posteriori** native existe déjà dans le SDK verrouillé et n'est **pas encore consommée** par Studio FinOps. Elle ne remplace pas une borne pré-émission, mais change le dossier d'arbitrage.
+
+---
+
+## 2. Inventaire croisé — capacités natives vs responsabilités Studio
+
+Légende recommandations : **KEEP** · **DELEGATE** · **HYBRID** · **ADOPT** · **IGNORE** · **BUILD**.
+
+### 2.1 Bornes et comptage fournisseur
+
+| Capacité | Natif (7.50 / 0.21) | Studio aujourd'hui | Recommandation | Motif |
+|---|---|---|---|---|
+| Comptage entrée | `responses.inputTokens.count` | Intégré frontière (strict) | **KEEP HYBRID** | Natif = mesure ; Studio = réservation campagne / fail-closed |
+| Borne sortie | `max_output_tokens` | Injection + campagne | **DELEGATE param / KEEP ledger** | Paramètre fournisseur ; enveloppe cumulée Studio |
+| Borne appels built-in | `max_tool_calls` | Injection hosted | **HYBRID** | Borne Response réelle ; ≠ recherches facturées |
+| Recherches facturables | `tool_usage.web_search.num_requests` | **Non consommé** | **ADOPT** (FinOps / réconciliation) | Unité native a posteriori ; ouvre sortie à R-G-WEB-PUBLIC |
+| Estimation `len/3` | — | Indication seulement | **KEEP as hint / never guarantee** | Déjà corrigé pour enveloppes strictes |
+| Retry HTTP | Client OpenAI `maxRetries` | Exercé + frontière | **KEEP** | Retry = tentative facturable potentielle |
+
+### 2.2 Boucle cognitive et outils
+
+| Capacité | Natif | Studio | Reco | Motif |
+|---|---|---|---|---|
+| Agents `run()` multi-tours | `@openai/agents` | `nora-adapter` | **KEEP** | Produit = outils Studio + politique |
+| Function tools produit | SDK tools | Outils D4/Git/WEB/D6 | **KEEP** | Contrats métier / droits |
+| Hosted `web_search` | Responses tool | `public-web-search-frontier` | **HYBRID** | Moteur chez fournisseur ; D6/B1/lane Studio |
+| Ouvertures directes B1 | — | egress guard + sessions | **KEEP** | Hors hosted ; sécurité Studio |
+| `return_token_budget` | `default`/`unlimited` (web_search) | Non qualifié opérationnel | **EVALUATE → optional DELEGATE** | Budget contenu retourné ≠ enveloppe tokens globale |
+| `filters` / `external_web_access` | Sur `web_search` | Partiel / politique Studio | **HYBRID** | Utile ; ne remplace pas D6 |
+| `file_search` / vector stores | Présents SDK | Non utilisés | **IGNORE (court terme)** | Concurrence D4/Git ; risque double SoT |
+| `code_interpreter` / computer | Présents SDK | Non utilisés | **IGNORE pour ML5 L1** | Hors invariants ; L2 ≠ computer-use OpenAI |
+| `background: true` | Responses | Non utilisé | **CANDIDATE STUDY** | Long research ; complexifie reprise D3 |
+| Structured outputs | `text.format` | Partiel | **HYBRID** | Renforcer contrats outils, pas remplacer sémantique SEM |
+
+### 2.3 Continuité, mémoire, allocation
+
+| Capacité | Natif | Studio | Reco | Motif |
+|---|---|---|---|---|
+| `previous_response_id` / `conversation` | Responses | Continuity via `cognitive_works` / acquis | **KEEP Studio SoT** ; **optional HYBRID** | SoT métier = D3/D4 ; natif = optimisation contexte fournisseur seulement |
+| Conducteur / soft-stop / restitution | — | `cognitive-conductor` | **KEEP** | Invariant produit |
+| Allocation Terra/Luna/Sol + admission | — | `cognitive-policy` / resources | **KEEP** | Politique produit ; OpenAI ne connaît pas le catalogue Studio |
+| Checkpoints / CAS / lease | — | D3 | **KEEP** | Intégrité reprise |
+| Sessions Agents SDK | Agents core | Peu / pas SoT | **IGNORE as SoT** | Ne pas déplacer l'état métier chez le fournisseur |
+
+### 2.4 FinOps, OBS, autorité, documents
+
+| Capacité | Natif | Studio | Reco | Motif |
+|---|---|---|---|---|
+| `usage` tokens | Response.usage | `provider_usage_observations` | **KEEP ledger Studio** | Attribution work/projet/lane |
+| `tool_usage` | Response.tool_usage | Absent | **ADOPT into ledger** | Corrélation hosted facturable |
+| Admin usage/costs API | Admin scopes | OUT contrat | **IGNORE** | Hors permissions ; pas de clé admin |
+| Tarifs locaux versionnés | — | Catalogue Studio | **KEEP** | Estimation ≠ facture |
+| D6 HumanDecision | — | Domaine D6 | **KEEP** | Autorité humaine non déléguable |
+| PDF extract/viewer | — | pdfjs + auth | **KEEP** | Hors OpenAI |
+| OBS IDs causals | — | Contrat OBS | **KEEP** | Corrélation multi-couches |
+
+---
+
+## 3. Matrice de rationalisation (décisions proposées)
+
+### 3.1 Conserver absolument (non négociable sans ADR)
+
+1. **Propriétaires D3–D9** et SoT PostgreSQL (`cognitive_works`, documents, décisions).
+2. **Frontière d'émission commune** (lane, fingerprint, campagne, ALS fail-closed).
+3. **Admission modèle/effort Studio** (catalogue Terra/Luna/Sol).
+4. **D6 + EffectConditions + reverify egress** pour WEB exceptionnel.
+5. **Ledger FinOps Studio** (observations durables, PARTIAL/UNKNOWN honnêtes).
+6. **B1 direct opens** contrôlés avant effet réseau.
+7. **Isolation ENV-01** (DEV/RECETTE/STABLE).
+
+### 3.2 Simplifier (réduire complexité Studio sans perdre le contrat)
+
+| Zone | Simplification candidate | Précondition |
+|---|---|---|
+| Bornes entrée campagne | Une seule voie « native count obligatoire si limite » ; retirer chemins estimate-as-reserve résiduels | Déjà largement fait ; audit exhaustif |
+| Hosted accounting | Remplacer toute logique ASSUMED_1 restante par : pré-réserve `max_tool_calls` + post-commit `tool_usage.web_search.num_requests` | Qualification LIVE de `tool_usage` |
+| Doubles wrappers fetch | Clarifier un seul install client frontier-aware | Revue non-régression Agents |
+| Scripts LIVE | Factoriser oracles PG/API/UI same-scope | Pure QA |
+
+### 3.3 Déléguer au fournisseur (sous garde Studio)
+
+| Délégation | Garde Studio |
+|---|---|
+| Tokenisation / count exact | Campagne + fingerprint + non-récursion |
+| Truncation / max_output_tokens | Enveloppes cumulées + fail-closed |
+| Exécution hosted web_search | D6/B1/lane + FinOps `num_requests` + WEB OFF défaut |
+| Retry transport | Comptage tentatives HTTP Studio |
+
+### 3.4 Adapter / remplacer (construction future — pas ce cycle)
+
+| Remplacement | De | Vers | Risque |
+|---|---|---|---|
+| Unité hosted FinOps | Compteurs assumés | `tool_usage.web_search.num_requests` | Omission du champ → UNKNOWN |
+| Pré-borne hosted | ASSUMED_1 | `max_tool_calls` + politique Morris sur unité | Sur/sous-réservation |
+| Contexte long | Reconstruction manuelle lourde | Évaluation contrôlée `previous_response_id` | Fuite / mutabilité contexte distant |
+
+### 3.5 Retirer (seulement après preuve)
+
+| Candidat au retrait | Condition de retrait |
+|---|---|
+| Toute estimation présentée comme borne stricte | Déjà interdit ; purger tests/docs obsolètes |
+| Chemins `web_search_preview` legacy | Migration explicite vers `web_search` + contrôles nouveaux |
+| Ledger mémoire « de secours » | Jamais SoT ; supprimer s'il réapparaît |
+
+### 3.6 Construire encore (lacunes réelles)
+
+| Lacune | Pourquoi | Priorité |
+|---|---|---|
+| Consommation FinOps de `tool_usage.web_search.num_requests` | Unité facturable native absente du ledger | P0 étude → P0 construction |
+| Politique d'enveloppe hosted post-`num_requests` | Décider si G-WEB-PUBLIC peut rouvrir | P0 décision Morris |
+| Preuve LIVE `tool_usage` sous WEB OFF→PUBLIC | Comportement prouvé | P0 gate |
+| Corpus Git PDF textuel | Réserve B | P1 isolable |
+| Stratégie `previous_response_id` vs acquis D3 | Continuité / coût tokens | P1 architecture |
+| Position sur `background` / Astra long research | Perf / reprise | P2 |
+| Position sur file_search vs D4 | Double SoT | P2 (défaut IGNORE) |
+
+### 3.7 Nouvelles capacités utiles au Pilote (filtre valeur)
+
+| Idée | Utile Pilote ? | Verdict étude |
+|---|---|---|
+| FinOps affichant recherches hosted facturables | Oui (transparence coûts WEB) | **Oui — via tool_usage** |
+| WEB public gouverné réouvert | Oui si safe | **Conditionnel** à politique d'enveloppe |
+| Recherche longue background | Possible | **Non prioritaire** avant L2/cognition stable |
+| Computer-use / code_interpreter OpenAI | Faible pour Studio gouverné | **Non** (conflit L2 Cursor) |
+| Vector store OpenAI comme mémoire projet | Douteux | **Non** (D4/Git restent SoT) |
+| Moderation API systématique | RSSI | **Évaluer** hors ML5 L1 |
+
+---
+
+## 4. Options structurantes (au moins deux par décision)
+
+### Décision D-A — Unité de contrôle WEB hosted
+
+| Option | Description | Pour | Contre | Réversibilité |
+|---|---|---|---|---|
+| **A1 — Fermé** | Maintenir G-WEB-PUBLIC fermé | Risque financier/sécurité contenu | Capacité Pilote absente | Haute |
+| **A2 — Built-in only** | Enveloppe = N × `max_tool_calls` | Borne pré-émission native | ≠ facturation fine | Haute |
+| **A3 — Hybrid reconcile** | Pré-réserve `max_tool_calls` + post-commit `num_requests` + suspend si dépassement constaté | Unité facturable a posteriori + borne a priori | Fenêtre d'incertitude pendant la Response | Moyenne |
+| **A4 — Direct-only** | Pas de hosted ; B1 only | Contrôle egress maximal | Moins de capacité recherche | Haute |
+
+**Recommandation d'étude :** **A3** comme cible de construction, **A1** maintenu jusqu'au GO ; ne pas choisir A2 comme « facturable ».
+
+### Décision D-B — SoT de continuité conversationnelle
+
+| Option | Description | Pour | Contre |
+|---|---|---|---|
+| **B1 — Studio only** | `cognitive_works` + acquis | Contrôle, audit, reprise | Coût tokens possible |
+| **B2 — Provider conversation** | `conversation` / `previous_response_id` SoT | Moins de payload | Perte gouvernance / mutabilité |
+| **B3 — Hybrid** | SoT Studio ; natif optionnel pour cache contexte | Optimisation sans abdiquer | Complexité double chemin |
+
+**Recommandation :** **B1** court terme ; **B3** expérimental DEV uniquement après ADR.
+
+### Décision D-C — Périmètre SDK pour ML5 L2
+
+| Option | Description | Pour | Contre |
+|---|---|---|---|
+| **C1 — Cursor reste le bras D7** | OpenAI = cognition ; Cursor = réalisation | Aligné contrats L2 | Deux fournisseurs |
+| **C2 — Computer-use OpenAI** | Remplacer partie Cursor | Un seul vendor | Rupture gouvernance L2 / preuves Cursor |
+| **C3 — Mix opportuniste** | Computer-use pour micro-tâches | Flexibilité | Dilution responsabilités |
+
+**Recommandation :** **C1** — L2 non engagée ; computer-use **IGNORE** dans la rationalisation L1.
+
+---
+
+## 5. Impacts domaines (D3–D9) et NFR
+
+| Domaine | Impact si ADOPT tool_usage / A3 | Impact si conversation native SoT |
+|---|---|---|
+| D3 | Enrichir observations ; campagnes hosted | Risque dilution SoT |
+| D4 | Faible | Faible |
+| D6 | Inchangé (autorité) | Inchangé |
+| D7/D8 (L2) | Indépendant si C1 | Indépendant |
+| D9 Git | PDF text toujours B | — |
+| FinOps | Corrélation `num_requests` | — |
+| Sécu | WEB OFF défaut ; pas G-WEB-MIXED | Fuite si contexte distant |
+| Perf | Count = RTT supplémentaire déjà accepté | Background = latence async |
+| Obs | Nouveaux champs usage tool | Corrélation response_id |
+
+---
+
+## 6. Conséquences sur ML5 livraison 2
+
+1. **Ne pas bloquer L2** sur l'ouverture WEB : L2 = réalisation Cursor / preuves / restitution.
+2. **Ne pas substituer** Cursor par computer-use OpenAI dans cette rationalisation.
+3. Toute simplification frontière/FinOps **avant L2** réduit le bruit de qualification L2.
+4. Si A3 est retenu, L2 hérite d'un FinOps hosted honnête — utile aux bilans de mission, pas au dispatch Cursor.
+5. La suspension RECETTE actuelle **protège** le candidat ; L2 reste « non engagée » jusqu'à GO Morris post-étude.
+
+---
+
+## 7. Proposition de deux ou trois macro-lots de construction
+
+> Hors scope de **cette** étude (pas d'implémentation ici). Ordre recommandé après GO Morris.
+
+### Macro-lot R1 — « Provider native honesty » (CRITICAL / Delivery)
+
+**But :** consommer les capacités natives déjà verrouillées pour rendre bornes et FinOps opposables.
+
+- Persister / projeter `tool_usage.web_search.num_requests`.
+- Réconciliation campagne hosted (pré `max_tool_calls` / post `num_requests`).
+- Qualifier LIVE `tool_usage` (DEV, projet public).
+- Arbitrage Morris A1 vs A3 ; éventuellement rouvrir G-WEB-PUBLIC sous A3.
+- Non-régression FinOps PG/API/UI.
+
+**Exit :** unité hosted facturable observée ou réserve B maintenue avec preuve.
+
+### Macro-lot R2 — « Frontier & continuity rationalization » (CRITICAL / Architecture→Delivery)
+
+**But :** simplifier la frontière et clarifier continuité.
+
+- Audit unique client OpenAI frontier-aware.
+- Politique explicite `previous_response_id` (B1 vs B3).
+- Purge chemins estimate/ASSUMED/preview obsolètes.
+- Documentation as-built + matrice E/OBS.
+
+**Exit :** frontière plus petite, invariants inchangés, ADR continuité.
+
+### Macro-lot R3 — « RECETTE candidate + L2 ready gate » (Delivery / QA)
+
+**But :** reprendre la trajectoire suspendue sans mélanger rationalisation et cutover.
+
+- Build/smoke candidat post-R1/R2.
+- Manifeste RECETTE ; WEB OFF défaut.
+- Décision scope réserves B restantes.
+- Préparer engagement L2 (Cursor) sans l'exécuter.
+
+**Exit :** GO/NOGO mise à disposition RECETTE distinct de L2.
+
+---
+
+## 8. Ce que Studio ne doit pas faire
+
+- Élargir les scopes clé OpenAI « par précaution » (Files/Admin/fine-tuning).
+- Faire d'un vector store OpenAI la mémoire projet.
+- Présenter `max_tool_calls` comme garantie de frais hosted.
+- Présenter une estimation locale comme borne stricte.
+- Déplacer D6/D3/D4 chez le fournisseur.
+- Engager L2 ou cutover RECETTE sous couvert de cette étude.
+- Upgrader majeures SDK « pour suivre le blog » sans besoin démontré.
+
+---
+
+## 9. Maturité et fiabilité de l'étude
+
+| Dimension | Niveau | Commentaire |
+|---|---|---|
+| Inventaire SDK verrouillé | **Suffisant** | Types 7.50 lus ; `tool_usage` confirmé |
+| Permissions projet OpenAI | **Partiel** | Scopes historiques documentés ; non re-observés ce cycle |
+| Preuve LIVE `tool_usage` | **Absente** | Capacité typée, non exercée sous WEB |
+| Alternatives | **Suffisant** | D-A/D-B/D-C avec trade-offs |
+| Prêt à borner construction | **Partiel → suffisant après GO D-A** | R1 peut être cadré dès choix A1/A3 |
+
+**Anti-claims refusés :** « architecture validée », « WEB safe », « zéro dette », « prêt prod », « L2 couverte ».
+
+---
+
+## 10. Décisions Morris requises
+
+1. **D-A** : A1 / A2 / A3 / A4 pour WEB hosted.
+2. Autoriser ou non un **macro-lot R1** (construction) après cette étude.
+3. **D-B** : confirmer B1 (Studio SoT) vs expérimentation B3.
+4. Confirmer **C1** (Cursor reste L2) — refus computer-use comme substitut.
+5. Reprendre ou non la trajectoire RECETTE après R1/R2 (macro-lot R3).
+6. Compléter le mandat d'étude si des sections tronquées (Review Handoff, sources, STOP) diffèrent de ce dossier.
+
+---
+
+## 11. Annexes — références
+
+- Candidat : `c574d262` · handoff régularisation `29b0ae4c`.
+- As-built native bounds : `construction/as-built-ml5-provider-native-bounds-20261126.md`.
+- Arbitrage hosted : `construction/ml5-g-web-public-hosted-bound-arbitration-20261126.md`.
+- SDK : `node_modules/openai/resources/responses/responses.d.ts` (`tool_usage`, `max_tool_calls`, `inputTokens`).
+- Docs OpenAI : token counting, web search, Responses create.
+- Contrats (ref `8b334487`) : allocation cognitive / conducteur / OBS.
+- CKC cycle 6 : `pilots/03-architecture-technique.md` (candidate).
+
+---
+
+## 12. Verdict d'étude
+
+**ML5 NATIVE CAPABILITY CONVERGENCE STUDY — READY FOR CHATGPT/MORRIS ARCHITECTURE DECISION.**
+
+Pas de mutation produit. Candidat préservé. Trajectoire RECETTE suspendue. Construction non engagée.

```

## 6. Proposed construction macro-lots (NOT started)
1. R1 Provider native honesty (`tool_usage`, hosted reconcile, optional G-WEB-PUBLIC)
2. R2 Frontier & continuity rationalization
3. R3 RECETTE candidate + L2 ready gate

## 7. Morris decisions
1. D-A hosted unit (A1/A2/A3/A4)
2. Authorize R1 construction or not
3. D-B continuity SoT
4. Confirm C1 Cursor remains L2
5. RECETTE resume timing
6. Resend truncated mandate sections if handoff/STOP/sources differ

## 8. Completeness
FULL mono-cycle pack for architecture study. Secrets scrubbed. No product implementation diffs.

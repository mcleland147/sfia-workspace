# G-WEB-PUBLIC decision dossier for Morris

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Gate | **G-WEB-PUBLIC** (public-only ; distinct de G-WEB-MIXED) |
| État lane | **WEB LIVE = 0 / disabled** (`SFIA_WEB_SEARCH_*` et flags associés **non consommés** par Morris) |
| Release | **NO RELEASE** · **NOT ADOPTED** · STABLE NOT AVAILABLE |
| Push produit | **INTERDIT** dans ce cycle documentaire |

## Objet

Dossier de décision Morris pour l’admission **publique** de la frontière B1 (recherche + ouverture + lecture progressive), sans contexte privé mélangé. Ce document **ne constitue pas** une preuve LIVE obtenue ni l’activation de WEB LIVE.

## État opérationnel

| Indicateur | Valeur |
|---|---|
| WEB LIVE search | **0** — gated |
| WEB LIVE open | **0** — gated |
| Hosted `webSearchTool` Nora privée | **détaché** |
| Worker recherche | **query-only** (agent jetable isolé) |
| Campagne LIVE bornée documentée ci-dessous | **NON EXÉCUTÉE** dans ce lot (scénarios proposés uniquement) |

## Readiness checklist (déterministe / documentation)

Lecture pour décision ; les cases reflètent l’état **DEV qualifié par tests unitaires déterministes** et revues construction, **pas** une campagne Morris LIVE.

| # | Critère | État | Note |
|---|---|---|---|
| R1 | Admission **Option B** (Nora propose ; Pilote admet ; pas d’auto-autorisation URL/sujet libre) | ☑ | Aligné `admitNoraProposedPublicQuery` / registre vide = deny |
| R2 | Worker recherche **query-only** (pas de contexte conversationnel / privé dans l’agent isolé) | ☑ | `executeIsolatedLiveWebSearch` |
| R3 | Modèle catalogue défaut **`gpt-6.1-terra`** — **pas** `gpt-4.1-mini` sur le chemin catalogue/admission WEB | ☑ | Politique cognitive provisoire + admission serveur |
| R4 | **DNS + pin** pour **ouverture** Studio (`executePublicWebOpenPage`) | ☑ | Preuve SCRIPTED MDN ; pin opposable côté open |
| R5 | Recherche : **DNS hébergé fournisseur**, **non** pin Studio | ☑ | Hosted search détaché ; **gap** = preuve LIVE fournisseur non rejouée Morris (pas inversion d’architecture) |
| R6 | Lecture **HTML progressive** (session outil, pages/chunks bornés) | ☑ | Outils WEB progressifs ML5 finalisation |
| R7 | **PDF** traité via **B1** (bytes déjà autorisés — pas de fetch réseau parser) | ☑ | Voir `ml5-pdf-capability-choice-20261126.md` |
| R8 | **FinOps** : attribution par requête ; marqueur **`UNCERTAIN`** si persistance observation échoue | ☑ | Fail-closed comptable sans faux précis |
| R9 | **`confrontWebSources`** : **identité / diagnostic uniquement** — le jugement d’adéquation reste **Nora**, pas l’outil | ☑ | Pas de substitution décisionnelle |
| R10 | Sanitize / outbound log / non-exfil (B07) | ◐ | Unit + SCRIPTED ; **WEB LIVE complet** non consommé |
| R11 | Suite vitest WEB/E02–E06 (déterministe) | ☑ | Voir entrée delivery `ML5-INTEGRATED-COGNITIVE-WEB-FINOPS-DEV` |
| R12 | **Preuve LIVE bout-en-bout** campagne bornée Morris | ☐ | **Gap explicite** — décision possible sans preuve déjà obtenue |

## Scénarios de campagne LIVE proposés (bornés, **non exécutés**)

Placeholders de limites à figer avant GO Morris (exemples : `SFIA_WEB_*`, budgets tokens, nb requêtes, timeout). **Aucun** de ces scénarios n’est revendiqué comme **PASS** dans ce dossier.

| ID | Scénario | But | Limites (placeholder) |
|---|---|---|---|
| S1 | Requête publique **catalogue** (match strict registre) | Admission Option B nominale | `max_queries=___` · `max_search_results=___` |
| S2 | Nora **`proposedPublicQuery`** → admission Pilote | Refus free-form vs admission explicite | idem |
| S3 | **Ouverture** URL HTTPS publique (pin DNS Studio) | B1 open path | `max_bytes=___` · `timeout_ms=___` |
| S4 | **Lecture HTML progressive** multi-pages | Session outil + citations page | `max_pages=___` · `max_chars=___` |
| S5 | **`confrontWebSources`** sur sources déjà consultées | Diagnostic identité uniquement | `max_confrontations=___` |
| S6 | Tentative **négative** (sujet/URL non enregistrés) | Fail-closed deny | attendu refus sans effet |
| S7 | Recherche + lecture avec **échec persistance FinOps** | Vérifier attribution **`UNCERTAIN`** | ledger + UI cohérents |

## G-WEB-MIXED — préconditions (hors périmètre PUBLIC)

- **Ne pas** utiliser de contexte privé (D4, mandat, investigation, secrets, tokens) dans une campagne **G-WEB-PUBLIC**.
- Le test de fuite (leak) sur chemin **public** est un **prérequis** documentaire pour envisager **G-WEB-MIXED** plus tard ; **public ≠ mixed**.
- G-WEB-MIXED reste **non consommé** ; dossier distinct requis avant tout mélange contexte privé + web.

## Réserves connues (entrée décision)

- F2 visuelle browser **non mesurée** intégralement dans ce cycle.
- DNS/rendu **recherche fournisseur** : architecture conforme R5 ; **rejeu LIVE Morris** ouvert.
- RECETTE : **pas de cutover** WEB dans ce lot documentaire.
- Calibration cognitive (Terra Medium) **≠** adoption définitive.

## Verdict proposé pour Morris

**G-WEB-PUBLIC READY FOR MORRIS DECISION**

Les items déterministes R1–R9 et R11 sont documentés comme satisfaits en DEV ; **WEB LIVE reste à 0** jusqu’à décision explicite et, si souhaité, exécution d’une campagne S1–S7. La **preuve LIVE S12** n’a **pas** été obtenue dans cette finalisation — à traiter comme **entrée de décision**, non comme preuve déjà acquise.

**Ne pas interpréter** ce verdict comme consommation du gate, activation RECETTE, ni **NO RELEASE** contourné.
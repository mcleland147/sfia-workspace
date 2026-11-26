# G-WEB-PUBLIC decision dossier for Morris

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Gate | **G-WEB-PUBLIC** (public-only ; distinct de G-WEB-MIXED) |
| État lane | **WEB LIVE = 0 / disabled** en fin de cycle (campagne G-WEB-PUBLIC consommée puis OFF) |
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
| Campagne LIVE bornée documentée ci-dessous | **EXÉCUTÉE** 2026-11-26 — search+admission+open HTML/PDF ; LIVE forcé 0 |

## Readiness checklist (déterministe / documentation)

Lecture pour décision ; les cases reflètent l’état **DEV qualifié par tests unitaires déterministes** et revues construction, **pas** une campagne Morris LIVE.

| # | Critère | État | Note |
|---|---|---|---|
| R1 | Admission **Option B** (Nora propose ; Pilote admet ; pas d’auto-autorisation URL/sujet libre) | ☑ | Aligné `admitNoraProposedPublicQuery` / registre vide = deny |
| R2 | Worker recherche **query-only** (pas de contexte conversationnel / privé dans l’agent isolé) | ☑ | `executeIsolatedLiveWebSearch` |
| R3 | Modèle catalogue défaut **`gpt-6.1-terra`** — **pas** `gpt-4.1-mini` sur le chemin catalogue/admission WEB | ☑ | Politique cognitive provisoire + admission serveur |
| R4 | **DNS + pin** pour **ouverture** Studio (`executePublicWebOpenPage`) | ☑ | LIVE pin après fix lookup `options.all` ; unit `ml5-web-egress-lookup` |
| R5 | Recherche : **DNS hébergé fournisseur**, **non** pin Studio | ☑ | Hosted search détaché ; **gap** = preuve LIVE fournisseur non rejouée Morris (pas inversion d’architecture) |
| R6 | Lecture **HTML progressive** (session outil, pages/chunks bornés) | ☑ | Sessions scopées lane/project/work ; TTL/éviction ; couverture union |
| R7 | **PDF** traité via **B1** (bytes déjà autorisés — pas de fetch réseau parser) | ☑ | `public_web_read_pdf_pages` ; pas de `pdfBase64` cognitif ; `viewerToken` |
| R8 | **FinOps** : attribution par requête ; marqueur **`UNCERTAIN`** si persistance observation échoue | ☑ | Réserve pré-émission campagne ; PARTIAL si UNVERIFIED |
| R9 | **`confrontWebSources`** : **identité / diagnostic uniquement** — le jugement d’adéquation reste **Nora**, pas l’outil | ☑ | Pas de substitution décisionnelle |
| R10 | Sanitize / outbound log / non-exfil (B07) | ◐ | Unit + SCRIPTED ; **WEB LIVE complet** non consommé |
| R11 | Suite vitest WEB/E02–E06 (déterministe) | ☑ | + `ml5-web-pdf-progressive` ; Option B `AUTHORIZE_PUBLIC_QUERY` |
| R12 | **Preuve LIVE bout-en-bout** campagne bornée Morris | ☑ | Search+Option B+open HTML/PDF progressive ; fix egress `options.all` ; ledger `.tmp-sfia-review/web-public-qual-live-20261126/` |
| R13 | Visionneuse navigateur PdfViewer | ☑ | `/dev/pdf-viewer-harness` ; worker local `/pdf.worker.min.mjs` ; cite p.6 |
| R14 | Worker WEB : modèle/effort admis + Terra défaut | ☑ | `admitModelEffort` ; refus Luna hosted ; pas `gpt-4.1-mini` |

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

## Campagne LIVE 2026-11-26 (G-WEB-PUBLIC consommé)

| ID | Résultat |
|---|---|
| WEB-01 | LIVE OBSERVED — `public_web.isolated_search` DISCOVERED postgresql.org |
| WEB-02 / 02b | BEHAVIOR/LIVE — Option B `AUTHORIZE_PUBLIC_QUERY` puis recherche exacte |
| WEB-03/04/05 (1er passage) | PARTIAL — open `Invalid IP address: undefined` (Node lookup `all=true`) |
| FIX egress | IMPLEMENTED — `web-egress-guard` callback array form |
| WEB-03b | LIVE OBSERVED — Nora open HTML + read_more + search_in_page |
| WEB-04b | LIVE OBSERVED — Nora PDF pages 1–8, HTTP/3 cité p.6 (doc 57 p.) |
| WEB-06 | DETERMINISTIC PROVEN — localhost/credentials/http refusés |
| WEB-07 | FinOps PARTIAL coverage rows persisted |
| Fin campagne | **WEB LIVE=0** vérifié (`dev-live-off-final.env.txt`) |

Preuves : `.tmp-sfia-review/web-public-qual-live-20261126/`.

## Verdict

**G-WEB-PUBLIC CONSUMED — PUBLIC LIVE PARTIAL WITH OPEN FIX — WEB LIVE OFF**

G-WEB-MIXED reste **fermé**. Pas de cutover RECETTE. NO RELEASE · NOT ADOPTED · ML5 OPEN.

## Addendum 2026-11-26 — Autorité D6

`AUTHORIZE_PUBLIC_QUERY` reste un extracteur technique. La promotion en `exactQueries`
exige une HumanDecision `RECORD_DECISION` liée au fingerprint payload (`web-public-query-authority`)
ou une provenance déjà admise (catalogue / prior exact). Parse seul ≠ egress.
WEB LIVE rétabli OFF après consolidation.


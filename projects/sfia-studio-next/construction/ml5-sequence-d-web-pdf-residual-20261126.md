# Sequence D — residual D6 WEB authority + PDF rights/robustness (2026-11-26)

Classe : **NO RELEASE** · Lane : **DEV** · G-WEB-PUBLIC LIVE : **NON CONSOMMÉ** · RECETTE : **NON MUTÉE**

## Gaps closed (this sequence)

| Contrôle | Statut |
|---|---|
| Finalité (`purpose`) | Fail-closed dans effectConditions + match optionnel à l'egress |
| Destination (`public_web_search`) | Fail-closed |
| Scope projet / pilot | Fail-closed |
| Droits courants (ownership projet) | Re-proof à apply + egress (`CURRENT_RIGHTS_DENIED`) |
| Version de politique | **Requise** à validate / reverify / frontier |
| Révocation | `REVOKE_DECISION` APPLICABLE au dernier mile |
| Expiration | `expiresAt` obligatoire dans effectConditions |
| Réutilisation checkpoint | `decisionId` + reverify (expiry/révocation/droits) |
| Parcours inspect → apply | `inspectWebPublicQueryAuthorityCandidate` → `applyWebPublicQueryAuthorityDecision` (RECORD_DECISION + effectConditions) |
| PDF endpoint PG | Tests nominal / autre pilot / projet / révoqué / lane / expiré / work / version |
| PDF limites size/pages/chars/time/concurrency/cancel/active-content/render-dims | Qualifiées ou bloquées explicitement |

## GIT PDF LIVE — BLOCKED CORPUS MISSING

Recherche sur le dépôt autorisé DEV `mcleland147/chantiers360` (commit/HEAD) : **un seul PDF** — `Diagramme BPMN_BatiNova.pdf` (déjà qualifié `SCANNED_NO_TEXT`). Aucun corpus textuel approprié. **Ne pas rejouer le BPMN scanné.** Aucun dépôt distant créé.

## Réserves B isolées (non contamination du socle)

| Id | Isolation |
|---|---|
| **R-GIT-PDF-TEXT** | Git PDF LIVE textuel — corpus manquant ; lecture/extract/viewer Git REAL non rejoués. Socle PDF WEB + fixture inchangé. |
| **R-PDF-RSS-ORACLE** | Mémoire RSS réelle non oraclée par pdfjs sous mandat ; budget decompress heuristique + timeout distincts. Exit : borne `DECOMPRESS_BUDGET_EXCEEDED` / `TIMEOUT`. |
| **R-D6-KIND** | Kind D6 dédié WEB — hors scope (RECORD_DECISION conservé ; GO Morris requis). |
| **R-WEB05 / G-WEB-PUBLIC** | Qualification confrontation multi-sources LIVE — **non consommée** ; WEB LIVE OFF. |
| **R-PDF-BROWSER-E2E** | Parcours navigateur complet (zoom/citation/nav) — harness unitaire ≠ preuve UX ; isolable pour F2/browser. |
| **R-LIVE-REENVELOPPE** | Retests LIVE 12.1/12.2 uniquement si comportement réellement modifié. |

## Non-objectifs respectés

- Pas de nouveau kind D6 · Pas d'OCR · Pas de GED · Pas de nouveau parser · Pas de service documentaire externe · Pas de push / remote repo · Pas de cutover RECETTE.

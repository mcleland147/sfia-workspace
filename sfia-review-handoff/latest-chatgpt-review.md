# SFIA Review Pack — Full — Cycle 09 Critical — Diagnostic causal Equipéo

## 0. Identity

- **Date/heure**: 2026-11-28T08:36:21+01:00
- **Projet**: SFIA Studio Next · `projects/sfia-studio-next/`
- **Cycle**: 09 — QA / validation · **Profil**: Critical · **Typologie**: EVOL
- **Nature**: Diagnostic causal post-recette Equipéo — **aucun correctif**
- **GO Morris**: diagnostic uniquement après PV Equipéo v0.2
- **Branche produit**: `sfia/next-ml5-integrated-delivery-20261123`
- **HEAD produit**: `0ae9e1f7aaee3658eb3e9a135523e83a72631b31`
- **Tree**: `842537274c3ad0b2f672c9ebe2e9e0f54c55d968`
- **BUILD RECETTE servi**: `p0S18hfVdGrMjGeNMGlbV` (HTML `<!--p0S18hfVdGrMjGeNMGlbV-->`)
- **main**: `997897fd7cf914771e7d08e8030dc7123fab7d25`
- **docs**: `ed38685aa6ee3dd46961a88698d833a88f7a50a0`
- **PV Equipéo blob**: `88474002768d1705258e5db3ad0510c21deb6fe4` (v0.2)
- **Handoff précédent**: `c74f99bb382939e12e79fb429cf1a6407bbc37f1`
- **CKC QA**: experimental guidance only (`9d9970d6…`)
- **Programme**: R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED / NO RELEASE / NOT ADOPTED

## 1. Mandat

Diagnostic technique approfondi des anomalies Equipéo (28/11/2026). Comprendre causes, divergences DEV/RECETTE, angles morts des qualifications E1–E5, et proposer lots correctifs bornés.

**Interdit**: correction code/config, LIVE, migration, cutover, push produit, PR, merge, T09 MaintiPlan, rejeu T09 bis.

## 2. Git Truth Check

| Check | Résultat |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Worktree actif | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD local = remote | `0ae9e1f7…` |
| Tree | `84253727…` |
| merge-base main | `997897fd…` |
| status | `?? .tmp-sfia-review/` · `?? web/.tmp-sfia-review/` — aucun staged, aucun diff produit |
| RECETTE WT | `…/sfia-workspace-next-ml5-recette-build-0ae9e1f7aaee` @ `0ae9e1f7` |
| Handoff WT | `…/sfia-review-handoff-m5a-gi-20261023` |
| DEV :3100 / RECETTE :3200 | listen ; BUILD servi `p0S18hf…` |
| Verdict | **ENV ROUTING COMPLETE** · candidat cohérent · lecture seule |

## 3. Sources (refs immuables)

- PV §9 prioritaire : `ed38685a:…/recette-metier-ml5-e2e-post-correctif-20261127.md`
- Suivi ML5 v0.19, contrats continuité/CA/CT, conducteur D3, allocation/FinOps (branche docs)
- ENV-01 / product-versioning @ main `997897fd`
- Code/tests @ produit `0ae9e1f7`
- Handoff cutover `c74f99bb`
- Preuves RO Equipéo PG : `proj_ab38aa32…` · doc `doc_449d0a30…` · rev1 `drev_27d32806…` · rev2 `drev_d03e3e2b…` · 2 OP OPEN · 2 HumanDecisions · 5 works COMPLETE + 1 OPEN

## 4. Constats DEV/RECETTE (non secrets)

| Paramètre | DEV (`web/.env.local`) | RECETTE (config + start script) |
|---|---|---|
| STUDIO_LANE | DEV | RECETTE |
| SFIA_COG_PROFILE_TYPE | OPERATIONAL_PROVISIONAL | OPERATIONAL_PROVISIONAL |
| SFIA_COG_PROVISIONAL_POLICY | **v0.2** | **ABSENT** |
| SFIA_COG_PROVISIONAL_RECETTE_ADMIT | ABSENT (N/A) | **ABSENT** |
| SFIA_COGNITIVE_ADMISSION_MODE | operational | ABSENT |
| Dictation | local | live (start script) |
| WEB LIVE / Admin | — | OFF / OFF |
| SHA script | — | `0ae9e1f7…` ; clé `.env` SFIA_SOURCE_SHA encore `e8e6e069…` **stale** |

**Conséquence démontrée** : `resolveProvisionalPolicy` → absente = `legacy_sol` (`provisional-cognitive-policy.ts` L159–167). RECETTE n'admet que Sol L/M/H ; DEV `v0.2` admet Terra/Luna/Sol. Aligné aux captures OpenAI.

## 5. Famille A — Intégrité cycle documentaire

### 5.1 Chaîne réelle

Intention → qualification D3 → `resolveReviseTarget` (`document-act.ts` L432+) → stash pending candidate → UI `pendingProposal` + viewer → conserve explicite → D4 REVISE → révision AVAILABLE → projections.

### 5.2 DOC-A (T09 prévisualisation) — PROBABLE / partiellement CONFIRMED

- **Attendu**: brouillon V2 inspectable avant conservation.
- **Observé**: bouton conservation ; visionneuse V1 ; V2 réelle après conserve.
- **Code**: sur `PROPOSAL_PENDING_CONSERVATION`, `page.tsx` L2967–3027 pose `pendingProposal` et injecte `pendingCand.contentMarkdown` dans le viewer.
- **Divergence**: viewer force `versionSource: "exact"` et `revisionId = sourceRevisionId` (**base V1**, L3022–3024). Un clic/lien chargeant la révision source peut écraser le markdown candidat tout en laissant l'action de conservation.
- **Confiance**: PROBABLE (overwrite UI) ; CONFIRMED que l'identité viewer reste ancrée sur la base même quand le markdown candidat est injecté.
- **Angle mort tests**: helpers conserve vérifient le serveur, pas l'égalité markdown viewer après consultation.

### 5.3 DOC-B (Courante/Historique) — CONFIRMED

1. `revisionCurrencyLabel` (`DocumentSurfaces.tsx` L45–50) : si `headRevisionNumber` null → **toujours Historique**.
2. Banner Travail (`page.tsx` L3255–3262 + `TravailViewer.tsx` L201–204) : `versionSource === "exact"` ⇒ « VERSION PLUS RÉCENTE DISPONIBLE · Aucun changement enregistré », même si la révision est la head (hors mode proposal exact).

Après conserve, `fetchDocumentViewerViaD4` rappelé avec `versionSource: "exact"` (L3071) pour la **nouvelle** head → banner historique.

### 5.4 DOC-C (T09 bis V2→V3) — CONFIRMED (cause commune focus)

Après conserve AVAILABLE (`page.tsx` L3029–3040) : `applyDocumentFocus({...documentFocusRef.current})` **ne rebase pas** `sourceRevisionId` / `observedHeadRevisionId` sur la nouvelle head V2.

`resolveReviseTarget` (`document-act.ts` L442–471) : focus.sourceRevisionId ≠ latest → `baseRevisionId = focus.sourceRevisionId` (V1).

`service.ts` L3819 : `sourceIsHistorical = target.baseRevisionId !== actualHeadId` → true → `HISTORICAL_CONFIRMATION_REQUIRED` / `…_SERVER_REQUIRED` (L3841–3915) → aucun enregistrement, pas de conservation.

PG Equipéo : rev1+rev2 AVAILABLE ; head=rev2 — cohérent avec focus client resté sur rev1.

**Préserver** la barrière sur vraie base historique/concurrente. Le défaut est le **focus client non rebasé après conserve réussie**.

### 5.5 DOC-D — CONFIRMED données

`documents.title` = `Equipéo — Cadrage fonctionnel V1` ; H1 rev2 = `… V2`. Compteur identité = 1 (correct).

### 5.6 DOC-E — PROBABLE

`NoraConversation.tsx` L305 : « Propositions expirées » après consommation = non-rejouable (OK) mais libellé ≠ « conservée ».

### 5.7 DOC-F — PROBABLE

Markdown brut historiques ; comparaison LIVE sans paire exposée ; historique terminal générique (Famille E).

## 6. Famille B — Allocation DEV/RECETTE — CONFIRMED

| Élément | Preuve |
|---|---|
| Code | policy absente → `legacy_sol` |
| RECETTE env | POLICY et RECETTE_ADMIT **ABSENT** |
| DEV env | POLICY=`v0.2` |
| Admission | Sol L/M/H toujours admis operational (`resource-admission.ts` L109–111) |
| Start script | pas d'override provisional |
| Fournisseur | Sol-only RECETTE vs Terra+Luna DEV |

Pas un écart de build/SHA. Écart de **configuration d'admission Option C**. Tests unitaires couvrent le fail-closed ; le cutover n'a pas posé `qualified-v0.2`.

**Décision Morris** requise avant activation config RECETTE.

## 7. Famille C — Dictée PROVIDER_ERROR

- Observé : premier essai sas → PROVIDER_ERROR ; clavier.
- Code : `composer-dictation-session.ts` L409–438 / L543–570.
- Config : dictation live admise — pas preuve handshake.
- Cause LIVE exacte : **NOT OBSERVED** (pas de nouvel essai).
- Lien allocation : HYPOTHESIS faible (Realtime ≠ Responses catalog).
- Angle mort E4/E5 : fixtures/substitué ≠ auth Realtime RECETTE.
- Futur LIVE borné (ne pas exécuter) : 1 session, plafonds, traces error/session.updated, cleanup, draft.

## 8. Famille D — Continuité

**Préserver** : fil sas→projet, multi-intentions T05, parent/enfant T06, acquis, 2 OP, V1/V2 sous 1 identité, 2 HumanDecisions trajectoire/ouverture.

| Sous-point | Class | Note |
|---|---|---|
| Init Journal pauvre | PROBABLE Capa2 | Capitalisation sélective à la création depuis l'ensemble du sas |
| OP insuffisants | CONFIRMED partiel | 2 OP PG ; questions docs non matérialisées ; gap qualification→intent D4 |
| Gouvernance T07 | NO DEFECT | Arbitrage Morris acquis≠HumanDecision ; réconciliation D2 §7 ultérieure |
| Provenance/badge/finalité | PROBABLE | Projection/restitution MP-11/12 |

## 9. Famille E — Activité / FinOps

- Labels : `nora.objective` → « Orientation du travail » ; LIVE enrichi puis hist générique.
- `composeKnowledgeEffectRestitution` / pilotage / publication (`service.ts` L5009–5031) concatènent acks dans `assistantBody` → répétitions métier.
- PG : **5 COMPLETE + 1 OPEN** (`cgw_0cbf64ee…`). UI « 0 abouti » = écart filtre/libellé vs statut ; un work réellement non terminalisé. Couverture 100 % ≠ coûts complets (Admin OFF).

## 10. Famille F — Cohérence UX

### MP-13 — CONFIRMED

`setProjectActivity` **uniquement** au load (`page.tsx` L2169). Après tour : refresh docs/knowledge sans activité. Reload ⇒ compteurs OK (T07 2/2/0→3/2/1). Agrégat serveur non démontré faux ; **fraîcheur client** défaillante.

Autres UX (animation, Markdown, icônes) : PROBABLE / NOT OBSERVED ; pas de F2 fort.

## 11. Angles morts E1–E5

| Zone | Tests prouvent | Angle mort Equipéo |
|---|---|---|
| Docs revise | Conserve serveur / hauth vrai historique | Focus non rebasé post-conserve ; V2→V3 UI nominal |
| Option C | Fail-closed RECETTE sans admit | Cutover sans admit ; smoke ≠ usage Sol-only |
| Dictée | DET/PG/BROWSER substitués | Premier LIVE Realtime |
| Continuité | Chemins sélectifs | Init sas→projet ; volume OP naturel |
| Compteurs | Helpers purs B.8 | Client activity non invalidé |
| Activité | Labels partiels | Persist hist + séparation conversation/acks |

**DETERMINISTIC PROVEN ≠ READY FOR REAL** ; smoke ≠ UAT métier.

## 12. Matrice 17 MP + DOC-A…F

| ID | Cause class | Cause racine (résumé) | Correctif minimal proposé |
|---|---|---|---|
| MP-01 | NO DEFECT accès | Micro visible | Coupler LIVE à MP-06 |
| MP-02 | NOT RUN partiel | Croissance non exhaustive | BROWSER ciblé |
| MP-03 | PROBABLE+Capa2 | Capitalisation OP insuffisante | Lot continuité |
| MP-04 | HYPOTHESIS | Animation statique rapportée | Preuve dynamique |
| MP-05 | PROBABLE | Markdown brut / listes | SafeMarkdown + Figma |
| MP-06 | NOT OBSERVED | PROVIDER_ERROR open/event | LIVE borné sous GO |
| MP-07 | NOT RUN | Dépend MP-06 | Idem |
| MP-08 | CONFIRMED sous-parcours | Focus/versionSource/labels | Lot documentaire |
| MP-09 | NO DEFECT nominal | Multi-intentions OK | Négatifs ultérieurs |
| MP-10 | PARTIAL | Continuité + DOC-C | Lots A + Capa2 |
| MP-11 | CONFIRMED partiel | Acks dans assistantBody | Lot activité |
| MP-12 | PROBABLE | Finalité/libellés | Projection finalité |
| MP-13 | CONFIRMED | projectActivity non refresh | Refresh après effets |
| MP-14 | NOT RUN | T08 DEFERRED | Après MP-15/16 |
| MP-15 | CONFIRMED | RECETTE legacy_sol | Config admit + preuve |
| MP-16 | PROBABLE | Work OPEN + libellés abouti | Finalisation + UI FinOps |
| MP-17 | PARTIAL | Accès OK | Nav/viewport |
| DOC-A | PROBABLE | Viewer ancré base / overwrite | Inspecter candidat |
| DOC-B | CONFIRMED | exact⇒historique ; head null | Currency vs head |
| DOC-C | CONFIRMED | Focus non rebasé post-conserve | Rebase focus→head |
| DOC-D | CONFIRMED | title contient V1 | Titre métier stable |
| DOC-E | PROBABLE | Libellé expirées | Conservée/non rejouable |
| DOC-F | PROBABLE | Markdown + paire | Rendu + corrélation |

## 13. Lots correctifs proposés

### Lot 1 — Intégrité cycle documentaire (PRIORITÉ 1)

Résultat: inspecter Vn+1 avant conserve ; étiquettes courantes justes ; V2→V3 sans confirmation rituelle si head identifiable.
IN: DOC-A/B/C/E (+D si touché) ; focus/viewer `page.tsx` ; BROWSER V1→V2→V3.
OUT: Capa2 ; allocation ; dictée ; Figma refonte.
Cause commune: focus/`versionSource` post-conserve.
Risque: ne pas affaiblir BASE_STALE/hauth réel.

### Lot 2 — Fraîcheur projections (PRIORITÉ 1, petit)

MP-13 : `setProjectActivity` après effets. Fusionnable avec Lot 1 si même revue `page.tsx`.

### Lot 3 — Admission cognitive RECETTE (PRIORITÉ 1 config)

`SFIA_COG_PROVISIONAL_POLICY=v0.2` + `SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified-v0.2` sous GO Morris ; corriger SHA stale ; smoke modèle demandé/appliqué.
Peut être **config-only** (code prêt). Pas d'alternance artificielle.

### Lot 4 — Activité / restitution / FinOps (PRIORITÉ 2)

MP-11/16 : sortir acks de `assistantBody` ; persister détails ; finaliser works ; libellés abouti. Pas d'Admin sans GO.

### Lot 5 — Capacité 2 continuité

MP-03/10/12 ; init sas→projet ; OP ; provenance/finalité. Prérequis: réconciliation D2 §7 sous GO séparé. Pas de second moteur.

### Lot 6 — Dictée LIVE bornée

MP-06/07 après diag traces. 1–2 sessions GO.

### Lot 7 — UX ciblée + qualification différée

MP-04/05/17 ; T08/T10–T13 selon GO après Lots 1–3.

**Premier lot recommandé: Lot 1 (documentaire)** — bloque révision reproductible ; cause CONFIRMED ; blast radius borné.

## 14. Fake/Real Qualification

| Preuve | Niveau |
|---|---|
| Code + env | REAL config/code |
| PG Equipéo RO | REAL données |
| Captures OpenAI PV | REAL fournisseur historique |
| Observations Pilote | REAL UAT |
| Tests dictée E4/E5 | DETERMINISTIC / substitué |
| Cause PROVIDER_ERROR | NOT OBSERVED |
| Bounded LIVE futur | Gate Morris requis |

## 15. Contrôles finaux

- Aucune modification produit
- Aucune mutation Equipéo/MaintiPlan (SELECT + `default_transaction_read_only`)
- Aucune émission fournisseur / config / migration
- Pack Full mono-cycle diagnostic
- Content coverage created/modified **produit**: **N/A** (confirmé)

## 16. Décisions Morris

1. Activer ou non Option C provisional RECETTE (`qualified-v0.2`).
2. Ordre Lots 1→2→3 (ou 1+2 fusionnés).
3. Périmètre Capacité 2 vs bugs runtime.
4. Réconciliation D2 continuité §7.
5. GO LIVE dictée / T08.
6. Acceptation/refus réserves MP — **non** par ce diagnostic.

## 17. Verdict

**READY WITH RESERVES**

Diagnostic exploitable pour arbitrer les lots. Causes CONFIRMED : DOC-B/C, MP-13, MP-15. Dictée LIVE et certains UX restent bornés.

Ce verdict = dossier de diagnostic prêt pour revue — **pas** READY FOR IMPLEMENTATION, pas acceptation recette, pas clôture MP.

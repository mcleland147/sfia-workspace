# ML5 as-built — Cursor realization (2026-11-23)

| Champ | Valeur |
|---|---|
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| HEAD entrée cycles 3–4 | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| État | **DIRTY** — modifications cycles 3+4 non commités / non poussés |
| Lane | DEV only (`sfia_next_dev` :5433) — migrations 017+018 ; RECETTE non touchée |
| Versioning | **NO RELEASE** / STABLE NOT AVAILABLE |

## Cycle 4 — complétude fonctionnelle

### Implémentation vs conformité

Voir registre §3 ter : **1 IMPLEMENTED / 74 PARTIAL / 24 NOT_IMPL** (axe code, réconcilié explore + cycle 4).
Conformité globale : **0 VÉRIFIÉ** — preuves BROWSER/F2/LIVE/REAL absentes.

### P0 / sûreté

| ID | Correctif | Preuve |
|---|---|---|
| CF-03+ | `sendRequestedAt` stampé atomiquement au claim **avant** SDK | PG sendIntent + T-04 PASS |
| Provenance | `tool-source-journal` — CONSULTED seulement si lecture réelle ; plus de fake depuis `toolCallsObserved` | unit + bridge |
| CF-02 | READY ignore `preparationId` client — lien persisté contrat | route `/ready` |
| CF-04 | Frontier B1 query-only SCRIPTED ; hosted `webSearchTool` détaché | unit frontier 6 PASS |
| CA-08 | `DETERMINISTIC_SYNTHESIS` ≠ `NORA_COGNITIVE` | classify unit |

### Surfaces

| Surface | URL | Rôle |
|---|---|---|
| Exécution | `?surface=execution` | Contrats, interventions, D6, STOP |
| Résultats | `?surface=publication` | D8 4 onglets Figma + Git ML4 |

### Tests cycle 4

- Vitest unit ML5 : **53 PASS**
- PG `ml5-cursor-dispatch.pg.test.ts` : **9 PASS**
- `tsc --noEmit` : PASS
- BROWSER / F2 / LIVE Nora / LIVE SDK / WEB LIVE / REAL : **NOT PROVEN**

### Git Cursor A/B

**B recommandée, non ADOPTED.** F01–F09 majoritairement NOT_IMPL. Aucune publication mutative.

### Gates Morris

1. Git A/B adoption
2. WEB LIVE avec contexte privé
3. LIVE SDK confiné
4. Run Nora cognitif LIVE post-tentative
5. Synchronisation Roadmap `main` Gate C (D2)

## Cycle 5 — raccordements intégrés (2026-11-23)

- **Travail 50/50 :** `ContractViewer` monté dans l'aside Nora (D09/H02) ; D6 reste sur Exécution.
- **Activité RUNNING :** `turnCommandId` exposé via by-key ; poll activity client ; `onRecord` journal → OBSERVED mid-turn.
- **B1 :** `assertPublicHttpsUrl` + `confrontWebSources` ; WEB LIVE toujours gated Morris.
- **G15 :** `history_json` + POST `requalify` (mig 019) — pas de redispatch Cursor.
- **Supervision :** poll DISPATCHED + bouton Réconcilier.
- **Git Cursor F01–F09 :** toujours NOT_IMPL ; option **B** recommandée, non ADOPTED.
- **Preuves :** DETERMINISTIC/PG OK ; BROWSER/F2/LIVE NOT PROVEN.

## Cycle 23 — lot 3 convergence intégrée (2026-11-24)

- **Modèle :** `NORA_STUDY_MODEL = gpt-6.2-sol` (refs actives migrées).
- **Policy :** effort défaut proportionnel au profil (`investigation`→high) sans routing longueur.
- **D8 P0 :** agent `.exit` = OBSERVED_ONLY ; `verified` via Studio bounded eval + content evaluation.
- **Binding :** `attemptId:` / `contractFingerprint:` field-exact.
- **Fencing :** CAS ownership avant/après Nora ; avis write CAS `noraAnalysisMarkdown IS NULL`.
- **WEB :** `publicWebRegistry` / `turnPublicTopics` branchés depuis Nora adapter + investigation state.
- **UX :** dossier structuré GET qualification → bilan 4 onglets ; brouillon Nora retirable enrichi.
- **D9 :** observation locale tip SHA lorsque `gitScope.required` (remote distinct / non mutatif).
- **LIVE :** attempt `efx_7118c5f9…` RECEIVED+CONFORMING+`STUDIO_VERIFY_ADD_PASS`+Nora `gpt-6.2-sol`.
- **Build :** `0IfMNnVNQMjcrQ0Z7wppl` · HEAD DIRTY `6cf33e99` · NO RELEASE · push projet NONE.
- **Réserves :** BROWSER F2 non rejoué ; WEB LIVE positif non démontré (fail-closed registry) ; T-05 restart serveur non rejoué ; parcours naturel Nora→contrat non seedé PARTIAL (director contractuel encore seedé pour SDK).

## Cycle 22 — restitution probante + LIVE intégré (2026-11-24)

- **WEB B07/CA-02 :** `web-search-authorize` — EXPLICIT_AUTHORIZED_EXACT | REGISTERED_PUBLIC_COMPOSITION uniquement ; registre vide = deny ; free-form `publicTopic`/`rawQuery` refusés.
- **Collecte CA-07 :** rapport attempt-bound sous `.sfia/attempts/<id>/` via `readConfinedWorkspaceFile` ; préférence workspace confiné sur prose SDK.
- **Ownership :** claim CAS `restitutionOwnerToken` + `restitutionVersion` + lease ; `persistPipelineOwned` fenced.
- **D8 :** `buildVerifiedEvidenceFromWorkspace` — CONFORMING sans injection `verified=true` ; contradiction refuse CONFORMING ; LIVE `efx_5184aab4…` RECEIVED + CONFORMING.
- **Consolidation :** `mergeMode` structuré (APPEND|CORRECT|SUPERSEDE) ; test propriétaire `mergeDocumentProductionBody`.
- **Avis Nora :** `runNoraCognitiveTurn` post-D8 ; LIVE `NORA_COGNITIVE_AUTONOMOUS_CONDUCTOR` tools=4 work `cgw_ad0f188f…`.
- **Boot :** `instrumentation.ts` → supervisors + `resumeIncompleteRestitutions`.
- **Build :** `xDm9gI5jk9N2qEGkFUqN_` · HEAD DIRTY `6cf33e99` · NO RELEASE · push projet NONE.
- **Réserves :** BROWSER activité long-run PARTIAL ; WEB LIVE fournisseur non rejoué ; D9/Git REAL non exercés.

## Cycle 20 — qualification sortie lot 1 (2026-11-24)

- **I1 :** reconcile/heartbeat/checkpoint — predicate lease opposable en transaction ; scope projet/conversation ; CAS lecture obsolète.
- **I2 :** dépendances D4 revalidées sans bump cognitif ; re-assert mandate après claim avant fournisseur.
- **I3 :** open_page limité aux URL découvertes ; sanitize confidentiel métier ; diagnostics sans marqueurs bruts.
- **I5 :** ambiguïté → `needsClarify` / AWAIT_PILOT, pas de nouveau work automatique.
- **I6 :** `productionJson` DOCUMENT consolidé injecté comme `documentProposal` canonique pour D4.
- **Build :** contenu DIRTY `6cf33e99` · NO RELEASE · push projet NONE.

## Cycle 19 — invariants résiduels lot 1 (2026-11-24)

- **I1 :** `investigation-persistence` — toute modification matérielle → nouvelle révision + checkpoint ; pas de mutate-in-place ; idempotence sans bump.
- **I2 :** `mandate-applicability.ts` branché prepare/authorize/dispatch — filiation exacte ; READY historique ≠ applicabilité actuelle.
- **I3 :** `web-search-sanitize` + private markers + outbound log ; frontier refuse fuites.
- **I4 :** `reconcileStaleRunningCognitiveWorks` ; reprise mid-RUNNING après fence/lease/kill.
- **I5 :** probe qualification `cognitiveWorkRelation`/`proposedCognitiveWorkId` avant attach ; pas d'auto-continue sur seul OPEN.
- **I6 :** `documentProductionFromReply` merge conservateur ; part ids stables `gen-{generationId}` ; production DOCUMENT multi-tours.
- **Build qualifié :** `1pvGV0NLFRLhOqgw3Mxn_` · HEAD DIRTY `6cf33e99` · NO RELEASE · push projet NONE.

## Cycle 14 — conduite cognitive + WEB LIVE (2026-11-24)

- **Anti-lexical :** `detectsTechnicalContractIntent` / `CORRECTIVE_INTENT` inertés ; bridge piloté par `semanticWantsCursorContractPrepare` + capability `d7.prepare_cursor_contract`.
- **Budgets :** `qualifyCognitiveProfile` ne lit plus la longueur ; défaut `analyse`.
- **WEB B1 LIVE :** `executeIsolatedLiveWebSearch` (agent jetable, query seule) + `fetch` borné `executePublicWebOpenPage` ; hosted `webSearchTool` reste détaché de Nora privée.
- **Contrats :** `draftBodyFromInvestigation` instruction intégrale + critères métier (`remainingWork`) ; génériques handoff en complément seulement.
- **B09 :** **IMPLEMENTED** — agent isolé `@openai/agents` + `webSearchTool` ; parse navigation/objet/array ; open `PAGE_OPENED` MDN ; isolation outbound query-only prouvée ; preuve LIVE 2026-11-24.

## Cycle 13 — résilience D8/D7 + candidat (2026-11-23)

- **D8 confinement :** `d8-path-confine.ts` — realpath root, lstat composants, refus symlinks, `O_NOFOLLOW`, borne taille avant lecture ; branché dans `readAttemptWorkspaceFile`.
- **Provenance :** `sourceJournal` partagé Nora → outils D8 ; `FOUND/DISCOVERED` ≠ `CONSULTED`.
- **Supervision :** `cursor-live-supervisor.ts` — observateur in-process (reconcile only), ensure after LIVE ACK, resume-once au redémarrage processus.
- **STOP LIVE :** `LIVE_CANCEL_OBSERVED` + terminal `cancelled` ; effets antérieurs conservés ; CANCEL ≠ ROLLBACK.
- **Handoff honesty :** `EARLY_HANDOFF_BEFORE_TERMINAL` ; tests déclarés sans capture → INCOMPLETE ; `classifyManifestHonesty`.
- **Candidat Git :** inventaire C3–C13 préparé — **aucun commit/push projet**.

## Livraison 1 — Nora cognitive experience (2026-11-25)

| Champ | Valeur |
|---|---|
| Build candidat | `zXUhtTemfQ4rO8vXc_3Nz` |
| RECETTE | inchangée (`7f48daa2`) |
| Migrations | aucune |
| Activité | API sas + labels + carte Figma 12.01/12.10 (sas + Travail) |
| Composeur | message Pilote immédiat (`PENDING_LOCAL`) |
| WEB | viewer `kind:web` ; labels découverte≠consultation |
| Docs fil | fence `sfia-document` masquée à l’affichage |
| Cognition | cacheTokens exclus du billable envelope ; restitution partielle post-échec structuré |
| Preuves | vitest activity-labels + conductor PASS ; build OK ; F2/LIVE UAT = Morris |


## Functional completion — Nora cognitive experience (2026-11-25)

| Champ | Valeur |
|---|---|
| Build | `oLyRjFCDc4Y7JSvbzZkFo` |
| Lots | L1–L6 intégrés |
| Activité | états autoritatifs; identité source; objective; NoraLiveActivity partagé |
| Tokens | envelope input+output sans soustraction cache |
| WEB B1 | catalog Power Query; pilot-provided public URLs seed open |
| Docs | viewer candidate forcé; prepare this-turn only (UAT-30) |
| Preuves | vitest 21 PASS; build OK; F2 NOT PROVEN; LIVE UAT Morris |


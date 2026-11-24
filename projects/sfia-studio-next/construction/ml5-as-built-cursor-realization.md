# ML5 as-built — Cursor realization (2026-11-23)

> **Lecture courante — post-C22 :** **Source :** [snapshot C22](https://github.com/mcleland147/sfia-workspace/blob/075d085628e5062b2fd17301f6347195fd25c53a/sfia-review-handoff/latest-chatgpt-review.md), code et documentation locale reproduits par Cursor, branche produit DIRTY/non publiée. [Revue indépendante post-C22](https://github.com/mcleland147/sfia-workspace/blob/ea74688a2ac2643a157dc680d4b2f5fa1fa0b517/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md). Les verdicts historiques ci-dessous sont ceux rapportés par Cursor, pas des réceptions ChatGPT/Morris. GO documentaire du 24/11 : synchronisation factuelle, pas de mutation code/critères, pas de lot 3 ni publication projet. Les mentions B recommandée des cycles anciens sont historiques : Git A a été validée en contenu le 23/11.

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

## Revue indépendante C22 — état courant

- WEB : fonction d'autorisation restrictive présente, deny sans registre ; remplissage fiable du registre depuis le produit et usage positif LIVE restant. Ne pas rouvrir la frontière sans preuve.
- D7 : rapport lié à tentative et FS confiné ; accepter le fallback non lié comme simple observation, pas preuve certifiante. CAS claim présent, fence expiration et écritures D8/avis incomplets.
- D8 : pièces réellement lues et hashées ; l'évaluation du contenu n'est pas établie. L748–781 utilise nom fichier/exit=0 ; L3587–3597 demande la création du fichier add.exit=0 sans exécution réelle de test. CONFORMING est observé, pas validé indépendamment.
- D3 : mergeMode structuré et conducteur post-D8 raccordés ; avis LIVE après reprise (2866 caractères, 4 appels rapportés) ; complétude, unicité/version et journal de lectures à qualifier. Pas de nouveau moteur.
- Boot : instrumentation présente ; campagne LIVE appelle reconcile, pas preuve autonomie boot/restart.
- LIVE aval : attempt efx_5184aab4-4c0e-47cc-919c-1637b1d8422b, handoff rhf_b555c06b-9713-4940-af32-c6a65279ad21, work cgw_ad0f188f-839f-435f-b0ba-f2a0c565960d. Contrat seedé, pas E2E naturel.
- Candidat rapporté HEAD 6cf33e99 DIRTY C1–C22, merge-base 997897fd, DEV PG migrations 020/021, build xDm9gI5jk9N2qEGkFUqN_. NON OBSERVÉ localement. Aucun commit code rapporté, NO RELEASE.
- Verdict ChatGPT : NOT READY FOR LOT 2 EXIT — LIVE DOWNSTREAM OBSERVED / D8 EVIDENCE INTEGRITY AND RESTITUTION FENCING OPEN. Pas de GO lot 3. Voir revue globale pour exacts écarts et trajectoire.

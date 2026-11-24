# SFIA Studio Next — ML5 C19 Review Pack FULL

Date/heure : 2026-11-24T10:45:12+01:00
Cycle : ML5 C19 — Fermeture invariants résiduels et qualification finale lot convergence 1
Profil : Critical (validé Morris)
Classe : NO RELEASE / Gate C OPEN (Roadmap main) / GO ML5 23/11 applicable
Verdict Cursor : **READY WITH RESERVES**

## 0. Instruction ChatGPT (obligatoire)

ChatGPT doit relire **depuis Git** le fichier canonique distant
`sfia-review-handoff/latest-chatgpt-review.md` sur la branche `sfia/review-handoff`
**après** publication C19, avant de statuer.

Si contenu manquant : `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
Si distant non actualisé : `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`.

## 1. Qualification

| Champ | Valeur |
|---|---|
| Produit | SFIA Studio Next |
| Jalon | R5 |
| Macro-lot | ML5 |
| Capacité | Lot de convergence 1 |
| Cycle | C19 |
| Type | 8 — Delivery / INC |
| Autonomie | L3 bornée (handoff mono-fichier uniquement) |
| Review Pack | FULL |
| Review Handoff | required / publish-in-cycle |

## 2. Git Truth

| Champ | Valeur |
|---|---|
| Dépôt | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| merge-base | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| État | **DIRTY** — candidat C1–C19 préservé ; **aucun commit projet** |
| Handoff remote tip entrée | `ead52de9c6c4f6aaae712186c16bd94d51f3b79a` |

### git status --short (extrait)

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/next.config.ts
 M projects/sfia-studio-next/web/scripts/db-migrate.sh
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/turns/by-key/[clientTurnKey]/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
 M projects/sfia-studio-next/web/src/app/login/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/ContractViewer.tsx
 M projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
 M projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
 M projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
 M projects/sfia-studio-next/web/src/domains/conversation/investigation-persistence.ts
 M projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
 M projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
 M projects/sfia-studio-next/web/src/domains/conversation/web-search-sanitize.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-handoff.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
 M projects/sfia-studio-next/web/src/domains/execution/handoff-integrity.ts
 M projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
 M projects/sfia-studio-next/web/src/domains/execution/types.ts
 M projects/sfia-studio-next/web/src/domains/identity/session.ts
 M projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
 M projects/sfia-studio-next/web/src/lib/auth.ts
 M projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-investigation-state.test.ts
?? projects/sfia-studio-next/architecture-technique/conducteur-cognitif-et-production-nora.md
?? projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md
?? projects/sfia-studio-next/construction/ml5-candidat-git-inventaire-c13.md
?? projects/sfia-studio-next/web/.sfia-evidence/
?? projects/sfia-studio-next/web/scripts/c17-functional-campaign.mjs
?? projects/sfia-studio-next/web/scripts/c18-functional-campaign.mjs
?? projects/sfia-studio-next/web/scripts/ml5-c10-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c10-seed-scenario.mts
?? projects/sfia-studio-next/web/scripts/ml5-c11-live-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c11-seed-project.mts
?? projects/sfia-studio-next/web/scripts/ml5-c12-ack-drop-incident.mts
?? projects/sfia-studio-next/web/scripts/ml5-c12-seed-and-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c13-long-run-supervisor.mts
?? projects/sfia-studio-next/web/scripts/ml5-c13-probe-mode.mts
?? projects/sfia-studio-next/web/scripts/ml5-c13-stop-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-cognitive-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-s2-s5-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-web-frontier-debug.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-web-live-probe.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-web-raw-debug.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-seed-scenario.mts
?? projects/sfia-studio-next/web/src/app/api/dev/auto-session/
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/captures/
?? projects/sfia-studio-next/web/src/components/figma/D6ConfirmLaunch.tsx
?? projects/sfia-studio-next/web/src/db/migrations/019_ml5_qualification_history.sql
?? projects/sfia-studio-next/web/src/db/migrations/020_cognitive_work.sql
?? projects/sfia-studio-next/web/src/db/migrations/021_cognitive_contract_filiation.sql
?? projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
?? projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts
?? projects/sfia-studio-next/web/src/domains/conversation/cursor-contract-production-tool.ts
?? projects/sfia-studio-next/web/src/domains/conversation/nora-contract-bridge.ts
?? projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
?? projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
?? projects/sfia-studio-next/web/src/domains/conversation/tool-source-journal.ts
?? projects/sfia-studio-next/web/src/domains/conversation/web-egress-guard.ts
?? projects/sfia-studio-next/web/src/domains/conversation/web-source-citation.ts
?? projects/sfia-studio-next/web/src/domains/execution/cursor-git-option-a.ts
?? projects/sfia-studio-next/web/src/domains/execution/cursor-live-supervisor.ts
?? projects/sfia-studio-next/web/src/domains/execution/mandate-applicability.ts
?? projects/sfia-studio-next/web/src/domains/execution/mcp-capability-check.ts
?? projects/sfia-studio-next/web/src/domains/execution/nora-contract-prepare.ts
?? projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts
?? projects/sfia-studio-next/web/src/domains/identity/dev-listen-probe.ts
?? projects/sfia-studio-next/web/src/domains/proofs/d8-evidence-read.ts
?? projects/sfia-studio-next/web/src/domains/proofs/d8-evidence-tools-sdk.ts
?? projects/sfia-studio-next/web/src/domains/proofs/d8-path-confine.ts
?? projects/sfia-studio-next/web/src/domains/proofs/evidence-captures.ts
?? projects/sfia-studio-next/web/src/domains/proofs/proof-ref-verify.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c13-d8-evidence-confine.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c15-cognitive-work.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c16-cognitive-ownership.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-qualification-requalify.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c10-d6-confirmed-required.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c12-ack-drop-fault.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c12-d8-evidence-read.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c13-d8-path-confine.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c13-d8-tool-journal.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c13-live-supervisor.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c14-semantic-routing.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c15-cognitive-conductor.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c16-cognitive-integration.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c18-cognitive-output.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c19-invariants.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c9-d6-refuse-phased.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-claim-anti-duplicat.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-git-option-a.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-dev-auto-session.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-nora-contract-bridge.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-proof-ref-verify.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-public-web-frontier.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-qualification-requalify.test.ts
```

## 3. Sources opposables

- MAIN `997897fd7cf914771e7d08e8030dc7123fab7d25`
- CONCEPTION `017a77e9b4cba12ff3cacb41873bbbdf64822d64`
- CONFORMITÉ `975a8d5fb491c3620c6737b133a0b39aab3dd60a`
- HANDOFF C18 `ead52de9` / blob `158a4acf`
- ENV-01 blob `14b61f0d` ; Product versioning blob `8bc93e0f`
- Lane DEV : Next `127.0.0.1:3100` · PG `:5433` · `sfia_next_dev` / `sfia_next_e2e` · migrations 020/021

## 4. Inventaire changements propres C19

Fichiers créés/modifiés pour les invariants C19 (empreintes du contenu DIRTY testé) :

| Fichier | sha256 |
|---|---|
| `projects/sfia-studio-next/web/src/domains/execution/mandate-applicability.ts` | `576e5dad0b12e3742c411627c21e8c8b9ac6e21d830ddb112c3e14c744d9c0d6` |
| `projects/sfia-studio-next/web/src/domains/conversation/investigation-persistence.ts` | `a9ff8e91e593a3bca34d43d65231bfe2e4a27381d4f23c4d1215b04add54ca6d` |
| `projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts` | `1626adeffbd0ad6dbe070f9f1dc38146c3ec4402d721b5fe8892562641d66cd1` |
| `projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts` | `31b604541c106a35733830f4967394c1b863849ffe7884d5a470c5c72fe46e94` |
| `projects/sfia-studio-next/web/src/domains/conversation/nora-contract-bridge.ts` | `b81bdaa9ba8ceb0e48bf5133f99384b26458ed504a1c099aca52716b9aaf2e2f` |
| `projects/sfia-studio-next/web/src/domains/execution/nora-contract-prepare.ts` | `b307cf2031b86e4605e5b352753f298e4b162ec8226c548eee0f0e656ace81ed` |
| `projects/sfia-studio-next/web/src/domains/conversation/web-search-sanitize.ts` | `3bdf7362ead3d21620e8b250fe0945b68ca5c32088049914ff714ebcf1c01c08` |
| `projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts` | `8f8d21d12577bd984354e0d8a6e58414003fe03cde547795714d194fdc8fcdbf` |
| `projects/sfia-studio-next/web/src/domains/conversation/service.ts` | `3f4b64ad2c8d9e9809a4a8dd5982cac2bb57051c87e61f7c3a1fb47fac4813b3` |
| `projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts` | `1e81d3ce154b0d04e379a573b0a7b7cbb6822c24dabace61ffa4978e8f83b26a` |
| `projects/sfia-studio-next/web/tests/unit/ml5-c19-invariants.test.ts` | `d9bb1237597a863a1b36011c001b994fda1b0bb434a29add85e90be4f85a09a3` |
| `projects/sfia-studio-next/construction/delivery-history.md` | `92b10c29209dc4c3dc1ac32506a62b360a0de3f69fe3d992e2dfba681d998ef4` |
| `projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md` | `a87f4f33ebf13dd95f21d4f47625b5a0541a445e5b0592c57e2eb6e1dfbf18b7` |
| `projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md` | `6d7c22f76b7c6ca5139c30b0f7a5545190d738685b8ecb836a34dbe55c0af724` |

### Corrections

1. **I1** — `investigation-persistence.ts` : plus de mutation in-place du checkpoint ; bump révision + nouveau checkpoint ; restore statut durable après claim.
2. **I2** — `mandate-applicability.ts` + wiring `cursor-attempt-service` / prepare : applicabilité au point d'effet (filiation révision exacte, fingerprint, investigation courante).
3. **I3** — `web-search-sanitize.ts` + contrôles frontier/outbound private markers.
4. **I4** — `reconcileStaleRunningCognitiveWorks` dans `cognitive-work.ts` ; appel avant tour dans `service.ts`.
5. **I5** — `run-nora-cognitive-turn.ts` : candidates + probe qualification puis `resolveCognitiveWorkAttachment` avec relation structurée.
6. **I6** — `documentProductionFromReply` : merge conservateur, part ids `gen-{generationId}`, fence Markdown non autoritaire.

## 5. Matrice I1–I6

| Invariant | Résultat attendu | Résultat observé | Niveau de preuve | Verdict |
|---|---|---|---|---|
| I1 — intégrité cognitive | Révision immuable ; nouveau checkpoint ; pas de mutate-in-place | Checkpoints distincts SEGMENT_COMPLETE/CLAIM/INVESTIGATION_SAVE avec payloads distincts ; CAS owner | INTEGRATION + DEV LIVE | **PASS** |
| I2 — invalidation READY | Ancien mandat non applicable aux effets après changement matériel | READY r5 OK ; après bump cognitif prepare+authorize **409** « mandat non applicable » | DEV LIVE | **PASS** |
| I3 — WEB | Séparation privé/public à l'egress | sanitize + private markers + outbound log ; frontier 10 PASS ; secrets bloqués | DETERMINISTIC / SCRIPTED | **PASS** (réserve LIVE fournisseur+contexte privé non rejoué) |
| I4 — reprise mid-work | RUNNING interrompu → reconcile → même workId | Fence owner mid-RUNNING + kill LISTEN ; `PROCESS_OR_LEASE_INTERRUPT` r11 ; resume same workId COMPLETE r14 | DEV LIVE | **PASS** |
| I5 — rattachement sémantique | CONTINUE / INDEPENDENT sans inject workId/forceNew | t2 sameWork+resumed ; t3 independent new workId | DEV LIVE | **PASS** |
| I6 — investigation/production | Multi-sources + conservation multi-segments | DOCUMENT 4762→12241→34553 ; 3 part ids stables ; snippets T1/T2 préservés | DEV LIVE | **PASS** (interrupt mid-prod I6 non capturé ; couvert I4) |


## 6. Non-régressions P1–P4

| Oracle | Statut C19 |
|---|---|
| P1 compréhension/production LIVE | Capitalisé C18 + exercé I5/I6 |
| P2 continuité même workId / indep / reprise | Exercé I4/I5/I6 |
| P3 contrat long / critères | Capitalisé C18 (40994 chars / 15 critères) ; non rejoué inutilement |
| P4 READY + refus D6 | Capitalisé C18 ; I2 prouve invalidation post-READY aux effets |

## 7. Build / runtime / tests

| Check | Résultat |
|---|---|
| `tsc --noEmit` | PASS |
| ESLint fichiers C19 critiques | 0 error (warnings préexistants hors scope) |
| `next build` | PASS · BUILD_ID `1pvGV0NLFRLhOqgw3Mxn_` |
| Smoke DEV auto-session + /portfolio | PASS 200 |
| vitest `ml5-c19-invariants` | 3 PASS |
| vitest C18 + WEB frontier/sanitize/boundary | 24 PASS |
| Campagne LIVE I1–I6 | `/tmp/sfia-c19-campaign/` (51 JSON) |

Product versioning : `NO RELEASE` / STABLE NOT AVAILABLE / `0.0.0-dev`.

## 8. Preuves brutes I1–I6

### Evidence `i1-checkpoints.json`

```json
{
  "rows": [
    "2:SEGMENT_COMPLETE:4305",
    "3:SEGMENT_COMPLETE:4305",
    "4:CLAIM:4305",
    "5:INVESTIGATION_SAVE:4337",
    "6:CLAIM:4337",
    "7:INVESTIGATION_SAVE:4337"
  ],
  "workRev": 3
}
```

### Evidence `i1-ctr.json`

```json
{
  "prepared": {
    "contractId": "tctr_20998f85-e4c9-438e-ac27-3713a290ab5c",
    "contractKey": "nora-a8581e90-mwugcmeq",
    "version": 1,
    "fingerprint": "64ffb8dd499a1779ac2863a054719a639df9e971e70002cee22e18c3cd6ee3e1",
    "status": "DRAFT"
  },
  "cw": {
    "workId": "cgw_6eb0a7d7-c808-45a3-88da-22edeb2316f7",
    "revision": 3,
    "segmentsRun": 1,
    "resumed": false,
    "suspended": false,
    "suspendReason": null
  }
}
```

### Evidence `i2-att-old.json`

```json
{
  "http": 400,
  "message": "Contrat non prêt pour tentative: DRAFT"
}
```

### Evidence `i2-material.json`

```json
{
  "status": "COMPLETE",
  "cw": {
    "workId": "cgw_6eb0a7d7-c808-45a3-88da-22edeb2316f7",
    "revision": 10,
    "segmentsRun": 1,
    "resumed": true,
    "suspended": false,
    "suspendReason": null
  },
  "prepared": {
    "contractId": "tctr_9b9ff7b2-54ba-49dd-99a4-00238bcdab18",
    "contractKey": "nora-a8581e90-mwugdsc1",
    "version": 1,
    "fingerprint": "984ecbfdd18b60d8d646e383e660dbed8b4253845ea0141362e0f0419451a24d",
    "status": "DRAFT"
  }
}
```

### Evidence `i2-ready.json`

```json
{
  "http": 409,
  "boundRev": 5,
  "msg": "Travail cognitif non COMPLETE (OPEN) — READY refusé"
}
```

### Evidence `i2b-ctr.json`

```json
{
  "prepared": {
    "contractId": "tctr_3eec2230-e388-445f-88b4-ba52e1a30e77",
    "contractKey": "nora-12a5114e-mwugg7ku",
    "version": 1,
    "fingerprint": "6d86828ac1cbded73f59a4cf3c5832fe2f0843bcb0d86d03ce4cf9e50efec7ed",
    "status": "DRAFT"
  },
  "cw": {
    "workId": "cgw_07f4ae92-c915-420a-a2e8-c10f5c49e644",
    "revision": 3,
    "segmentsRun": 1,
    "resumed": false,
    "suspended": false,
    "suspendReason": null
  },
  "workStatus": "COMPLETE:7"
}
```

### Evidence `i2b-get.json`

```json
{
  "status": "DRAFT",
  "cw": "cgw_07f4ae92-c915-420a-a2e8-c10f5c49e644",
  "rev": 5,
  "fp": "6d86828ac1cbded73f59a4cf3c5832fe2f0843bcb0d86d03ce4cf9e50efec7ed",
  "instrLen": 2108,
  "crit": 12
}
```

### Evidence `i2b-ready.json`

```json
{
  "http": 409,
  "msg": "Révision cognitive 7 ≠ filiation contrat r5 — READY refusé"
}
```

### Evidence `i2c-att-obsolete.json`

```json
{
  "http": 409,
  "message": "Révision cognitive 10 ≠ filiation mandat r5 — mandat non applicable"
}
```

### Evidence `i2c-att.json`

```json
{
  "http": 200,
  "status": "PREPARED",
  "attemptId": "efx_3bc58c8d-97a3-4cbe-9e4d-f31b7c9854e2"
}
```

### Evidence `i2c-auth-obsolete.json`

```json
{
  "http": 409,
  "message": "Révision cognitive 10 ≠ filiation mandat r5 — mandat non applicable"
}
```

### Evidence `i2c-bump.json`

```json
{
  "cw": {
    "workId": "cgw_b3f8508f-a80d-4e77-bd90-834d73244751",
    "revision": 8,
    "segmentsRun": 1,
    "resumed": true,
    "suspended": false,
    "suspendReason": null
  },
  "db": "COMPLETE:10",
  "contractRev": 5
}
```

### Evidence `i2c-pre.json`

```json
{
  "db": "COMPLETE:5",
  "contractRev": 5,
  "cw": "cgw_b3f8508f-a80d-4e77-bd90-834d73244751",
  "status": "DRAFT"
}
```

### Evidence `i2c-ready.json`

```json
{
  "http": 200,
  "status": "READY",
  "fp": "bd8cb6fa87de78fcaa62a0cd9729b50e16948da712e89c7fb32fc69cb7192cbf",
  "filiation": {
    "preparationId": "prep_a0fa2192-24fb-4a4b-8017-4ece4e6f36cf",
    "workId": "cgw_b3f8508f-a80d-4e77-bd90-834d73244751",
    "revision": 5,
    "contractId": "tctr_6be7f0af-3e2c-4adc-811a-97e087a65a98",
    "fingerprint": "bd8cb6fa87de78fcaa62a0cd9729b50e16948da712e89c7fb32fc69cb7192cbf",
    "requalifiedAt": "2026-11-24T08:53:04.269Z"
  }
}
```

### Evidence `i4-after-kill-db.json`

```json
{
  "afterKill": null
}
```

### Evidence `i4-mid-result.json`

```json
{
  "mid": {
    "error": "Error: socket hang up"
  }
}
```

### Evidence `i4-no-running.json`

```json
{
  "note": "no RUNNING observed quickly — inject expired RUNNING via SQL after awaiting partial"
}
```

### Evidence `i4-resume.json`

```json
{
  "same": null,
  "db": null
}
```

### Evidence `i4c-forced-running.json`

```json
{
  "db": "RUNNING|3|c19-i4-orphaned-owner|2026-11-24 08:53:59.441498+00|"
}
```

### Evidence `i4c-live-no-running.json`

```json
{
  "final": "COMPLETE|7",
  "hung": {
    "status": 200,
    "json": {
      "userMessageId": "msg_808adeb1-0310-4bff-afe4-d8c3bf0e8279",
      "assistantMessageId": "msg_405a48b5-55fd-40be-a6bb-6800d94d807c",
      "operationId": "op_8b927c1f-6d72-4ca9-96c3-5939f8da711a",
      "requestId": "req_cddcf765-c2a1-4b34-8c0b-9d0a9e6ff3d5",
      "turnCommandId": "tcmd_2ca7ec0a-2dbf-4d93-95e5-00399e5c3eca",
      "preparedContract": null,
      "cognitiveWork": {
        "workId": "cgw_65be7374-b663-4550-9390-a6411761decd",
        "revision": 10,
        "segmentsRun": 1,
        "resumed": true,
        "suspended": false,
        "suspendReason": null
      },
      "noraMode": "openai-agents-sdk-live",
      "status": "COMPLETE",
      "generationId": "gen_2511b288-f86f-46c7-96ab-0af3e7e52c83",
      "policy": {
        "version": "ml2-cog-policy-v2-corrective",
        "profileType": "OPERATIONAL_PROVISIONAL",
        "profile": "analyse",
        "modelRequested": "gpt-6.1-sol",
        "modelApplied": "UNVERIFIED",
        "effortRequested": "medium",
        "effortApplied": "UNVERIFIED",
        "reasonCodes": [
          "BUDGET_DEFAULT_ANALYSE_NO_LENGTH_ROUTING",
          "PROFILE_TYPE_OPERATIONAL_PROVISIONAL",
          "LANE_DEV",
          "PROFILE_HINT_analyse"
        ]
      },
      "attempts": [
        {
          "attemptId": "att_e85ed856-31ca-4eb2-8fce-fc0d7431813b",
          "kind": "non_stream",
          "outcome": "SUCCESS",
          "notes": "structured_non_stream_finalOutput",
          "providerContacted": "YES"
        }
      ],
      "toolCallsObserved": 3,
      "d4CharsReturned": 5653,
      "streaming": {
        "attempted": true,
        "delivered": true,
        "notes": "structured_non_stream_finalOutput"
      },
      "knowledgeSelection": {
        "subjects": 0,
        "acquisCurrent": 0,
        "openPoints": 0,
        "reactivatedOpenPoints": 0,
        "selectionMethod": "bounded-resource-listing",
        "selectionLimit": "RG-KNOW-011 + J-C04: réactivation contextuelle des points ouverts projet, puis ids préférés / listing borné — pas de clôture par silence.",
        "role": "pre_generation_context",
        "selectedAcquisIds": [],
        "selectedOpenPointIds": []
      },
      "knowledgeResumeHints": null,
      "capitalisation": [],
      "capitalisationAttempted": [],
      "capitalisationLimit": "Aucune proposition d4.record_knowledge — zéro écriture D4",
      "documentSave": {
        "status": "NOT_EXECUTED",
        "reason": "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE",
        "documentId": "doc_129ad6db-f438-4f7a-b926-c40d159d5b96",
        "baseRevisionId": "drev_2418d839-54f2-42da-85bc-6fab7b139d0e",
        "act": "REVISE"
      },
      "pendingDocumentCandidate": null,
      "historicalAuthorization": null,
      "idempotentReplay": false,
      "humanDecisionCreated": false,
      "pilotageEffect": null,
      "missionProjection": null,
      "nextTurnKind": "INTENTION_EFFET",
      "pendingEffectBlocked": false,
      "unresolvedPendingClientTurnKey": null,
      "semanticQualificationStatus": "QUALIFIED",
      "preparationProjection": null,
      "turnProjection": {
        "schemaVersion": "e05-turn-projection-v1",
        "messageId": "msg_405a48b5-55fd-40be-a6bb-6800d94d807c",
        "turnCommandId": "tcmd_2ca7ec0a-2dbf-4d93-95e5-00399e5c3eca",
        "finalized": true,
        "status": "COMPLETE",
        "choices": [],
        "references": [
          {
            "kind": "document",
            "label": "SpecI4c — révision 1 consultée",
            "resourceId": "doc_129ad6db-f438-4f7a-b926-c40d159d5b96",
            "revisionId": "drev_2418d839-54f2-42da-85bc-6fab7b139d0e",
            "available": true
          }
        ],
        "activity": {
          "kind": "sources_consulted",
          "label": "Sources consultées pour cette réponse",
          "detail": "3 consultation(s) observée(s)"
        }
      },
      "messages": [
        {
          "id": "msg_iq_iqop_d930b86b-ef25-47e6-bf41-aa58f13e5fae_v1",
          "conversationId": "conv_cd11fa63-9067-43a2-8da7-558be1226196",
          "role": "assistant",
          "content": "Pour proposer une première progression de cycles, précisez le premier résultat utile attendu et le type de cycle qui vous semble le plus pertinent (cadrage, conception fonctionnelle, UX, etc.).",
          "status": "COMPLETE",
          "generationId": "sfia:iq:iqop_d930b86b-ef25-47e6-bf41-aa58f13e5fae:v1",
          "ordinal": 1,
          "createdAt": "2026-11-24T08:55:36.100Z"
        },
        {
          "id": "msg_0d68db53-987a-443b-aa96-e92fb329ce04",
          "conversationId": "conv_cd11fa63-9067-43a2-8da7-558be1226196",
          "role": "user",
          "content": "Create SpecI4c briefly: Context only. workDisposition COMPLETE. cognitiveProfileHint=investigation. No contract.",
          "status": "COMPLETE",
          "generationId": null,
          "ordinal": 2,
          "createdAt": "2026-11-24T08:55:36.332Z"
        },
        {
          "id": "msg_d9504c32-e830-41fb-9d87-87849f5ee4e3",
          "conversationId": "conv_cd11fa63-9067-43a2-8da7-558be1226196",
          "role": "assistant",
          "content": "**Création D4 confirmée — révision 1.**\n\nPérimètre demandé pour **SpecI4c** : **Contexte uniquement**. Le contenu de la révision n’a pas été relu ici.\n\nAucune création réexécutée, aucun contrat préparé.\n\n```sfia-document title-b64=U3BlY0k0Yw chars=265 pair-sha256=584c01d3adb5bd50ad54013c1381bb17fbcd410cbd6eaa35bab1fc8a45eae50f\n# SpecI4c\n\n## Contexte\n\nLe projet est en phase de clarification. L’objectif métier et le premier résultat utile attendu ne sont pas précisés dans les éléments disponibles. Aucun cycle ni aucune méthode ne sont actuellement définis ; aucune restriction n’est active.\n```\n\n---\n### Résultat d'enregistrement\n\nNouvelle version disponible : v1.\n\nL'enregistrement est confirmé. Les versions antérieures restent inchangées.\n",
          "status": "COMPLETE",
          "generationId": "gen_c49be049-7ef2-4d13-bfff-32a7bf8fa68c",
          "ordinal": 3,
          "createdAt": "2026-11-24T08:55:59.286Z"
        },
        {
          "id": "msg_98bd4309-524d-44f3-831e-6558fb8094ae",
          "conversationId": "conv_cd11fa63-9067-43a2-8da7-558be1226196",
          "role": "user",
          "content": "Continue SpecI4c after mid-work interrupt. Add Architecture and Rules. cognitiveWorkRelation=CONTINUE. proposedCognitiveWorkId=cgw_65be7374-b663-4550-9390-a6411761decd. workDisposition COMPLETE. No contract.",
          "status": "COMPLETE",
          "generationId": null,
          "ordinal": 4,
          "createdAt": "2026-11-24T08:55:59.725Z"
        },
        {
          "id": "msg_aa6a9685-97ea-4c05-9130-9fe8d4ea9dcb",
          "conversationId": "conv_cd11fa63-9067-43a2-8da7-558be1226196",
          "role": "assistant",
          "content": "Reprise de **SpecI4c** à partir de la révision 1 consultée. Voici l’ajout proposé, sans modifier le Contexte. Celui-ci ne précisant pas encore l’objectif métier, les choix restent ouverts. Aucun contrat préparé.\n\n```sfia-document title-b64=U3BlY0k0Yw chars=600 pair-sha256=40e5cb8e5fe2c4aad2e6759221a7596c0e8db627d77070da38d18ec89672380c\n## Architecture\n\nL’architecture reste à définir à partir de l’objectif métier et du premier résultat utile attendu.\n\n- Composants et responsabilités : à préciser.\n- Interfaces, flux et données : à identifier.\n- Contraintes techniques et dépendances : à expliciter.\n\nAucun choix d’architecture n’est établi dans le contexte disponible.\n\n## Règles\n\n- Règles métier, conditions d’application et exceptions : à définir.\n- Droits d’accès et exigences de sécurité : à préciser.\n- Critères de validation du résultat attendu : à établir.\n\nCes points sont ouverts ; ils ne constituent pas des règles validées.\n```\n\n---\n### Résultat applicatif\n\nAucun enregistrement documentaire n'a été effectué sur ce tour.\n\nLa demande n'a pas été qualifiée pour une écriture. La réponse Nora ci-dessus n'est pas un verdict d'enregistrement.\n",
          "status": "COMPLETE",
          "generationId": "gen_176caf6b-a2c2-4d00-be0e-048c354c5865",
          "ordinal": 5,
          "createdAt": "2026-11-24T08:56:18.374Z"
        },
        {
          "id": "msg_808adeb1-0310-4bff-afe4-d8c3bf0e8279",
          "conversationId": "conv_cd11fa63-9067-43a2-8da7-558be1226196",
          "role": "user",
          "content": "Expand SpecI4c with Risks OpenQuestions Alternatives Implementation Validation. Thorough multi-paragraph. workDisposition COMPLETE. cognitiveWorkRelation=CONTINUE. proposedCognitiveWorkId=cgw_65be7374-b663-4550-9390-a6411761decd. No contract.",
          "status": "COMPLETE",
          "generationId": null,
          "ordinal": 6,
          "createdAt": "2026-11-24T08:56:42.432Z"
        },
        {
          "id": "msg_405a48b5-55fd-40be-a6bb-6800d94d807c",
          "conversationId": "conv_cd11fa63-9067-43a2-8da7-558be1226196",
          "role": "assistant",
          "content": "Voici l’extension détaillée proposée pour **SpecI4c**, limitée aux cinq sections demandées. Le Contexte de la révision 1 consultée ne précise pas encore l’objectif métier ; les éléments ci-dessous distinguent donc risques, questions ouvertes et recommandations conditionnelles, sans inventer de choix validés. Les sections existantes sont à préserver. **Aucun contrat préparé.**\n\n```sfia-document title-b64=U3BlY0k0Yw chars=6916 pair-sha256=ef2711258c6a9dda78ff7ae7c16743a7cae0e4e336af35e7e295d91de3e28f36\n## Risks\n\nLe principal risque de cadrage est de spécifier une solution avant d’avoir défini le problème métier, ses utilisateurs et le premier résultat utile attendu. Cela pourrait conduire à une architecture cohérente sur le plan technique mais inadaptée au besoin réel. L’absence d’objectif explicite rend également difficile la priorisation : une fonctionnalité ne peut pas encore être justifiée par une contribution mesurable au résultat recherché.\n\nUn second risque concerne la transformation progressive d’hypothèses en exigences implicites. Les composants, interfaces, règles métier et droits d’accès restent à préciser ; leur simple mention dans une spécification ne vaut pas validation. Pour limiter ce risque, il est recommandé, si le document sert de base à la conception, d’indiquer pour chaque élément structurant son statut, sa justification et les questions dont il dépend.\n\nLes risques de sécurité, de confidentialité, d’intégration et d’exploitation ne sont pas encore évaluables faute d’informations sur les données, les systèmes concernés et les conditions d’utilisation. Cette absence d’évaluation ne signifie ni absence de risque ni criticité démontrée. Toute mise en œuvre devrait être précédée d’une analyse proportionnée au périmètre réel, notamment sur les accès, les erreurs, la conservation des données et les dépendances externes.\n\n## OpenQuestions\n\nQuel problème concret SpecI4c doit-il contribuer à résoudre, pour quels utilisateurs et dans quelle situation ? Le premier résultat utile doit être exprimé sous une forme observable : une action rendue possible, une difficulté réduite ou un livrable exploitable. Il reste aussi à préciser ce qui serait considéré comme un échec, afin d’éviter une définition du succès limitée à la seule livraison d’une solution.\n\nQuel est le périmètre initial, et quelles capacités sont explicitement exclues ? Les parcours prioritaires, les règles métier, les exceptions et les responsabilités des acteurs sont à identifier. Les besoins de compatibilité, d’accessibilité, de performance ou de disponibilité devront être précisés lorsqu’ils modifient effectivement la conception ; aucun seuil chiffré n’est établi à ce stade.\n\nQuelles données seront utilisées, d’où proviendront-elles et qui pourra les consulter ou les modifier ? Les systèmes à intégrer, les contraintes techniques imposées, les dépendances organisationnelles et les modalités d’exploitation restent ouverts. Enfin, les personnes habilitées à accepter le résultat et les preuves nécessaires à cette acceptation doivent être identifiées. Ces questions structurent la suite de la spécification sans empêcher la rédaction du présent complément.\n\n## Alternatives\n\nUne première option serait de poursuivre par une clarification documentaire courte, centrée sur le besoin et un scénario représentatif, sans réalisation technique. Cette approche limiterait les engagements prématurés et faciliterait la comparaison des périmètres possibles. Sa limite serait de ne pas lever, à elle seule, une incertitude portant sur la faisabilité d’une intégration, une contrainte de performance ou l’usage réel d’une interface.\n\nUne deuxième option serait de préparer un prototype exploratoire une fois l’incertitude à tester explicitée. Un prototype pourrait aider à observer un parcours ou à vérifier un échange de données, mais ses résultats resteraient bornés aux conditions de l’essai. Il ne constituerait ni une architecture de production validée ni une preuve de sécurité ou de robustesse générale. Son coût ne serait justifié que si l’expérience permet de répondre à une question déterminante.\n\nUne troisième option serait d’envisager une première réalisation limitée à un parcours de bout en bout, après clarification du besoin et des critères d’acceptation. La réutilisation d’un outil existant, une adaptation légère ou une procédure manuelle devraient alors être comparées à un développement spécifique. À ce stade, la recommandation conditionnelle est de privilégier l’option qui réduit l’incertitude principale avec le moins d’engagement difficilement réversible ; aucune alternative n’est retenue par ce document.\n\n## Implementation\n\nLa démarche proposée commence par la définition d’un scénario de référence : acteur, situation initiale, déclencheur, informations nécessaires et résultat observable. Ce scénario permettrait de délimiter un premier périmètre et de relier les exigences aux besoins qu’elles servent. Les hypothèses encore nécessaires seraient consignées séparément, avec les conséquences possibles de leur invalidation.\n\nUne fois ce socle suffisamment précisé, la conception pourrait décrire les responsabilités des composants, les interfaces, les flux de données et les règles applicables. Le choix d’une technologie, d’un stockage ou d’un mode de déploiement devrait être justifié par des contraintes identifiées plutôt que présumé. Une investigation technique ciblée serait pertinente si une dépendance ou une limite de faisabilité conditionne réellement la solution.\n\nSi une réalisation est ensuite autorisée, une progression par incréments vérifiables est recommandée : couvrir d’abord le parcours nominal retenu, puis les erreurs et exceptions prioritaires, avant d’élargir le périmètre. Chaque incrément devrait disposer de preuves de fonctionnement et, selon son exposition, de moyens adaptés de diagnostic et de retour arrière. Cette section décrit une démarche possible ; elle ne constitue ni un mandat d’exécution, ni un calendrier engagé, ni une autorisation de développement.\n\n## Validation\n\nLa première validation porte sur la cohérence de la spécification : le problème, les utilisateurs, le périmètre et le résultat attendu doivent pouvoir être compris sans hypothèses cachées. Chaque exigence importante devrait être reliée à un besoin ou à une contrainte explicite. Les formulations ambiguës et les affirmations non étayées seraient signalées comme points ouverts plutôt que considérées comme acquises.\n\nLa validation fonctionnelle reposerait ensuite sur des scénarios d’acceptation décrivant une situation initiale, une action et un résultat attendu observable. Elle devrait couvrir le parcours nominal ainsi que les erreurs, exceptions et cas limites pertinents. Les exigences non fonctionnelles feraient l’objet de vérifications adaptées lorsque leurs seuils et leurs conditions de mesure auront été définis ; aucun résultat de test ni niveau de conformité n’est affirmé ici.\n\nEnfin, les preuves produites devraient permettre de distinguer ce qui a été vérifié, ce qui reste inconnu et ce qui n’entre pas dans le périmètre. Un compte rendu de validation préciserait la version examinée, les conditions d’essai, les résultats et les écarts résiduels. L’acceptation finale resterait du ressort des personnes habilitées, sur la base de critères convenus ; la complétude rédactionnelle de SpecI4c ne suffirait pas à démontrer que la solution répond au besoin.\n```\n\n---\n### Résultat applicatif\n\nAucun enregistrement documentaire n'a été effectué sur ce tour.\n\nLa demande n'a pas été qualifiée pour une écriture. La réponse Nora ci-dessus n'est pas un verdict d'enregistrement.\n",
          "status": "COMPLETE",
          "generationId": "gen_2511b288-f86f-46c7-96ab-0af3e7e52c83",
          "ordinal": 7,
          "createdAt": "2026-11-24T08:57:47.704Z"
        }
      ]
    }
  }
}
```

### Evidence `i4c-reconcile-evidence.json`

```json
{
  "checkpoints": [
    "2|SEGMENT_COMPLETE|1",
    "3|SEGMENT_COMPLETE|2",
    "4|PROCESS_OR_LEASE_INTERRUPT|3",
    "5|CLAIM|4",
    "6|SEGMENT_COMPLETE|5",
    "7|SEGMENT_COMPLETE|6"
  ],
  "finalBeforeLive": "COMPLETE|7|",
  "hasProcessInterrupt": true
}
```

### Evidence `i4c-seed.json`

```json
{
  "status": "COMPLETE",
  "workId": "cgw_65be7374-b663-4550-9390-a6411761decd",
  "cw": {
    "workId": "cgw_65be7374-b663-4550-9390-a6411761decd",
    "revision": 3,
    "segmentsRun": 1,
    "resumed": false,
    "suspended": false,
    "suspendReason": null
  },
  "db": "COMPLETE|3||"
}
```

### Evidence `i4f-before-resume.json`

```json
{
  "prep": "prep_7ef45dfd-9b27-4ed3-a87c-4158753ef8c0",
  "before": "COMPLETE|7|||",
  "killAt": {
    "ms": 87468,
    "workId": "cgw_40a4977c-f1f5-4b84-9fd0-3372db61c365",
    "revision": 6,
    "owner": "4a80bc55-1a90-4dff-b508-d70f99e591a1"
  }
}
```

### Evidence `i4f-kill-at.json`

```json
{
  "ms": 87468,
  "workId": "cgw_40a4977c-f1f5-4b84-9fd0-3372db61c365",
  "revision": 6,
  "owner": "4a80bc55-1a90-4dff-b508-d70f99e591a1"
}
```

### Evidence `i4f-resume.json`

```json
{
  "before": "COMPLETE|7|||",
  "same": false,
  "final": "COMPLETE|7|",
  "cks": "2|SEGMENT_CONTINUE|1\n3|SEGMENT_COMPLETE|2\n4|AWAIT_PILOT|3\n5|CLAIM|4\n6|SEGMENT_COMPLETE|5\n7|SEGMENT_COMPLETE|6",
  "processInterruptCount": "0"
}
```

### Evidence `i4f-seed.json`

```json
{
  "status": "COMPLETE",
  "workId": "cgw_40a4977c-f1f5-4b84-9fd0-3372db61c365",
  "cw": {
    "workId": "cgw_40a4977c-f1f5-4b84-9fd0-3372db61c365",
    "revision": 4,
    "segmentsRun": 2,
    "resumed": false,
    "suspended": false,
    "suspendReason": null
  },
  "db": "OPEN|4|AWAIT_OR_SUSPEND"
}
```

### Evidence `i4fe-after-fence.json`

```json
{
  "fenced": true,
  "fenceMeta": {
    "ms": 51921,
    "before": {
      "id": "cgw_72339a55-01ac-4ef7-9069-38b63dacb0f0",
      "status": "RUNNING",
      "revision": 9,
      "owner_token": "4c3177df-e49b-4959-9d9f-ede41c68c4fb"
    },
    "after": {
      "id": "cgw_72339a55-01ac-4ef7-9069-38b63dacb0f0",
      "status": "RUNNING",
      "revision": 10,
      "owner_token": "fenced-obsolete-owner",
      "lease_until": "2026-11-24T09:25:32.324Z"
    }
  },
  "db": "RUNNING|10|2026-11-24 09:25:32.324423+00||fenced-obsolete-owner"
}
```

### Evidence `i4fe-fence-at.json`

```json
{
  "ms": 51921,
  "before": {
    "id": "cgw_72339a55-01ac-4ef7-9069-38b63dacb0f0",
    "status": "RUNNING",
    "revision": 9,
    "owner_token": "4c3177df-e49b-4959-9d9f-ede41c68c4fb"
  },
  "after": {
    "id": "cgw_72339a55-01ac-4ef7-9069-38b63dacb0f0",
    "status": "RUNNING",
    "revision": 10,
    "owner_token": "fenced-obsolete-owner",
    "lease_until": "2026-11-24T09:25:32.324Z"
  }
}
```

### Evidence `i4fe-hung.json`

```json
{
  "hung": {
    "status": 200,
    "json": {
      "userMessageId": "msg_9a028c1b-7d89-486a-a94a-e0eefa63a4f0",
      "assistantMessageId": null,
      "operationId": "op_9de24dc2-8c46-4eab-b0d8-86548462b9c0",
      "requestId": "req_b1acf4dd-b3a8-4f17-b612-5b3a859ba6fc",
      "status": "UNKNOWN",
      "idempotentReplay": false,
      "humanDecisionCreated": false,
      "pilotageEffect": null,
      "noraMode": "provider-exception",
      "messages": [
        {
          "id": "msg_iq_iqop_001f0a7d-b762-40f3-b44f-d81da51013ef_v1",
          "conversationId": "conv_464ab8e0-cbcf-4882-b5ed-3e02d8a38609",
          "role": "assistant",
          "content": "Pour proposer une première progression de cycles, précisez le premier résultat utile attendu et le type de cycle qui vous semble le plus pertinent (cadrage, conception fonctionnelle, UX, etc.).",
          "status": "COMPLETE",
          "generationId": "sfia:iq:iqop_001f0a7d-b762-40f3-b44f-d81da51013ef:v1",
          "ordinal": 1,
          "createdAt": "2026-11-24T09:27:18.184Z"
        },
        {
          "id": "msg_c0126999-ac93-495b-b1a9-7cad7c2f365a",
          "conversationId": "conv_464ab8e0-cbcf-4882-b5ed-3e02d8a38609",
          "role": "user",
          "content": "Begin SpecI4fence. Context section only. Then leave work OPEN for continuation (workDisposition OPEN). cognitiveProfileHint=investigation. No contract.",
          "status": "COMPLETE",
          "generationId": null,
          "ordinal": 2,
          "createdAt": "2026-11-24T09:27:19.103Z"
        },
        {
          "id": "msg_726090ae-f973-42b5-98c6-07bc530b35dc",
          "conversationId": "conv_464ab8e0-cbcf-4882-b5ed-3e02d8a38609",
          "role": "assistant",
          "content": "Première ébauche limitée au contexte, sans inventer les éléments métier encore manquants.\n\nLe travail reste ouvert pour continuation. Aucun contrat n’est préparé.\n\n```sfia-document\n## Contexte\n\nLe contexte métier de SpecI4fence reste à préciser. Les éléments disponibles ne décrivent pas encore la situation de départ, le besoin à traiter ni les acteurs concernés.\n\nCette section sera enrichie à partir des prochains éléments du Pilote.\n```\n\n---\n### Résultat applicatif\n\nAucun enregistrement documentaire n'a été effectué sur ce tour.\n\nLa demande n'a pas été qualifiée pour une écriture. La réponse Nora ci-dessus n'est pas un verdict d'enregistrement.\n",
          "status": "INTERRUPTED",
          "generationId": "gen_15eaeb19-bace-4b24-8964-1c0cc0650377",
          "ordinal": 3,
          "createdAt": "2026-11-24T09:29:40.248Z"
        },
        {
          "id": "msg_9a028c1b-7d89-486a-a94a-e0eefa63a4f0",
          "conversationId": "conv_464ab8e0-cbcf-4882-b5ed-3e02d8a38609",
          "role": "user",
          "content": "Continue SpecI4fence. Add Architecture Rules Risks Implementation Validation with detailed paragraphs. cognitiveWorkRelation=CONTINUE. proposedCognitiveWorkId=cgw_72339a55-01ac-4ef7-9069-38b63dacb0f0. workDisposition COMPLETE. No contract.",
          "status": "COMPLETE",
          "generationId": null,
          "ordinal": 4,
          "createdAt": "2026-11-24T09:29:40.679Z"
        }
      ]
    }
  }
}
```

### Evidence `i4fe-resume.json`

```json
{
  "beforeResume": "RUNNING|10||fenced-obsolete-owner",
  "http": 200,
  "status": "COMPLETE",
  "cw": {
    "workId": "cgw_72339a55-01ac-4ef7-9069-38b63dacb0f0",
    "revision": 14,
    "segmentsRun": 1,
    "resumed": true,
    "suspended": false,
    "suspendReason": null
  },
  "same": true,
  "resumed": true,
  "final": "COMPLETE|14|",
  "cks": "2|SEGMENT_CONTINUE|1\n3|SEGMENT_CONTINUE|2\n4|SEGMENT_CONTINUE|3\n5|SEGMENT_CONTINUE|4\n6|SEGMENT_CONTINUE|5\n7|BUDGET|6\n8|BUDGET|7\n9|CLAIM|8\n10|SEGMENT_COMPLETE|9\n11|PROCESS_OR_LEASE_INTERRUPT|10\n12|CLAIM|11\n13|SEGMENT_COMPLETE|12\n14|SEGMENT_COMPLETE|13",
  "processInterruptCount": "1"
}
```

### Evidence `i4fe-seed.json`

```json
{
  "status": "UNKNOWN",
  "workId": "cgw_72339a55-01ac-4ef7-9069-38b63dacb0f0",
  "db": "SUSPENDED|8|SEGMENT_INVOCATION_LIMIT"
}
```

### Evidence `i4h-after-kill-db.json`

```json
{
  "killed": false,
  "killMeta": null,
  "dbRightAfter": "COMPLETE|3|||"
}
```

### Evidence `i4h-hung.json`

```json
{
  "hung": {
    "status": 200,
    "json": {
      "userMessageId": "msg_1fccc597-38e4-42d6-971c-c098474aa170",
      "assistantMessageId": "msg_1f8697ac-0245-49cb-970e-19207a44ea13",
      "operationId": "op_77e988d8-b959-4887-b859-ef9b3beb4909",
      "requestId": "req_48f21176-9884-4051-bd71-1dcbe29f306e",
      "turnCommandId": "tcmd_6af8849b-9d33-41bc-a3c6-0f98367d36b7",
      "preparedContract": null,
      "cognitiveWork": {
        "workId": "cgw_0147ae35-7571-4cb1-892b-5a36eedeb370",
        "revision": 3,
        "segmentsRun": 1,
        "resumed": false,
        "suspended": false,
        "suspendReason": null
      },
      "noraMode": "openai-agents-sdk-live",
      "status": "UNKNOWN",
      "generationId": "gen_017b42be-b76a-40a7-a791-d84eeec7cc51",
      "policy": {
        "version": "ml2-cog-policy-v2-corrective",
        "profileType": "OPERATIONAL_PROVISIONAL",
        "profile": "analyse",
        "modelRequested": "gpt-6.1-sol",
        "modelApplied": null,
        "effortRequested": "medium",
        "effortApplied": null,
        "reasonCodes": [
          "BUDGET_DEFAULT_ANALYSE_NO_LENGTH_ROUTING",
          "PROFILE_TYPE_OPERATIONAL_PROVISIONAL",
          "LANE_DEV",
          "PROFILE_HINT_analyse"
        ]
      },
      "attempts": [
        {
          "attemptId": "att_227c6e8f-c8f4-42e9-8a4a-516718c44ba7",
          "kind": "non_stream",
          "outcome": "UNKNOWN",
          "notes": "PROVIDER_SCHEMA_OR_OUTPUT",
          "providerContacted": "UNCERTAIN"
        }
      ],
      "toolCallsObserved": 1,
      "d4CharsReturned": 1074,
      "streaming": {
        "attempted": true,
        "delivered": false,
        "notes": "PROVIDER_SCHEMA_OR_OUTPUT"
      },
      "knowledgeSelection": {
        "subjects": 0,
        "acquisCurrent": 0,
        "openPoints": 0,
        "reactivatedOpenPoints": 0,
        "selectionMethod": "bounded-resource-listing",
        "selectionLimit": "RG-KNOW-011 + J-C04: réactivation contextuelle des points ouverts projet, puis ids préférés / listing borné — pas de clôture par silence.",
        "role": "pre_generation_context",
        "selectedAcquisIds": [],
        "selectedOpenPointIds": []
      },
      "knowledgeResumeHints": null,
      "capitalisation": [],
      "capitalisationAttempted": [],
      "capitalisationLimit": "SEM-02: capitalisation depuis propositions Nora typées (d4.record_knowledge).",
      "documentSave": null,
      "pendingDocumentCandidate": null,
      "historicalAuthorization": null,
      "idempotentReplay": false,
      "humanDecisionCreated": false,
      "pilotageEffect": null,
      "missionProjection": null,
      "nextTurnKind": "INCERTAIN",
      "pendingEffectBlocked": false,
      "unresolvedPendingClientTurnKey": null,
      "semanticQualificationStatus": "UNAVAILABLE",
      "preparationProjection": null,
      "turnProjection": {
        "schemaVersion": "e05-turn-projection-v1",
        "messageId": "msg_1f8697ac-0245-49cb-970e-19207a44ea13",
        "turnCommandId": "tcmd_6af8849b-9d33-41bc-a3c6-0f98367d36b7",
        "finalized": false,
        "status": "UNKNOWN",
        "choices": [],
        "references": [],
        "activity": {
          "kind": "uncertain",
          "label": "État de la réponse encore incertain"
        }
      },
      "messages": [
        {
          "id": "msg_iq_iqop_8583a4c5-a038-411d-ba9d-3e9836f3557e_v1",
          "conversationId": "conv_b5f278ba-1378-4e9f-a079-dde6f7ffdcf1",
          "role": "assistant",
          "content": "Pour proposer une première progression de cycles, précisez le premier résultat utile attendu et le type de cycle qui vous semble le plus pertinent (cadrage, conception fonctionnelle, UX, etc.).",
          "status": "COMPLETE",
          "generationId": "sfia:iq:iqop_8583a4c5-a038-411d-ba9d-3e9836f3557e:v1",
          "ordinal": 1,
          "createdAt": "2026-11-24T09:10:47.513Z"
        },
        {
          "id": "msg_3fed97ab-1b3c-420e-b568-62c4a4144a37",
          "conversationId": "conv_b5f278ba-1378-4e9f-a079-dde6f7ffdcf1",
          "role": "user",
          "content": "Create SpecI4hard Context only. workDisposition COMPLETE. cognitiveProfileHint=investigation. No contract.",
          "status": "COMPLETE",
          "generationId": null,
          "ordinal": 2,
          "createdAt": "2026-11-24T09:10:47.752Z"
        },
        {
          "id": "msg_7edf81d8-622a-4176-a2db-89d602ef1479",
          "conversationId": "conv_b5f278ba-1378-4e9f-a079-dde6f7ffdcf1",
          "role": "assistant",
          "content": "### SpecI4hard — Context only\n\nLe résultat applicatif fourni indique :\n- **D4 CREATE : AVAILABLE**\n- **Document :** `doc_afaac5a6-df0d-4bc9-9856-957ef6a92aef`\n- **Révision :** `drev_f0881eae-16df-4100-86f2-1e5c4ec13e1b`\n- **Numéro de révision :** 1\n\nJe ne relance pas la création et ne prépare aucun contrat. Aucun effet supplémentaire n’est demandé.\n\n```sfia-document title-b64=U3BlY0k0aGFyZA chars=506 pair-sha256=2daa56d36223f198bcbb7b97708587e4186e489ed6ae0b0041f7a8ac595ad203\n# SpecI4hard\n\n## Context\n\nLe projet est à un stade initial : aucun cycle ni aucune méthode ne sont actuellement définis. La projection courante ne signale aucune restriction active ni décision applicable.\n\nLe besoin métier, les utilisateurs concernés, le premier résultat utile attendu et le périmètre fonctionnel ne sont pas précisés dans les éléments disponibles.\n\nLe présent document se limite à ce contexte ; il ne définit ni exigences fonctionnelles, ni architecture, ni contrat d’exécution technique.\n```\n\n---\n### Résultat d'enregistrement\n\nNouvelle version disponible : v1.\n\nL'enregistrement est confirmé. Les versions antérieures restent inchangées.\n",
          "status": "COMPLETE",
          "generationId": "gen_cbab79cc-14bc-4367-a38c-1b04a3ca0614",
          "ordinal": 3,
          "createdAt": "2026-11-24T09:11:16.755Z"
        },
        {
          "id": "msg_1fccc597-38e4-42d6-971c-c098474aa170",
          "conversationId": "conv_b5f278ba-1378-4e9f-a079-dde6f7ffdcf1",
          "role": "user",
          "content": "CONTINUE SpecI4hard. Write a long thorough multi-section specification covering Architecture Rules Risks OpenQuestions Alternatives Implementation Validation Operations. Many detailed paragraphs. cognitiveWorkRelation=CONTINUE. proposedCognitiveWorkId=cgw_50f9d6dc-fa02-4b20-bb21-f4792a2e1b73. workDisposition COMPLETE. No contract.",
          "status": "COMPLETE",
          "generationId": null,
          "ordinal": 4,
          "createdAt": "2026-11-24T09:11:17.139Z"
        },
        {
          "id": "msg_1f8697ac-0245-49cb-970e-19207a44ea13",
          "conversationId": "conv_b5f278ba-1378-4e9f-a079-dde6f7ffdcf1",
          "role": "assistant",
          "content": "Nora LIVE UNKNOWN: une seule tentative fournisseur — aucune relance automatique après exception. Message utilisateur déjà persisté. Détail technique non exposé.",
          "status": "UNKNOWN",
          "generationId": "gen_017b42be-b76a-40a7-a791-d84eeec7cc51",
          "ordinal": 5,
          "createdAt": "2026-11-24T09:13:57.509Z"
        }
      ]
    }
  }
}
```

### Evidence `i4h-resume.json`

```json
{
  "beforeResume": "COMPLETE|3|",
  "status": "COMPLETE",
  "cw": {
    "workId": "cgw_50f9d6dc-fa02-4b20-bb21-f4792a2e1b73",
    "revision": 6,
    "segmentsRun": 1,
    "resumed": true,
    "suspended": false,
    "suspendReason": null
  },
  "same": true,
  "resumed": true,
  "final": "COMPLETE|6|",
  "cks": "2|SEGMENT_COMPLETE|1\n3|SEGMENT_COMPLETE|2\n4|CLAIM|3\n5|SEGMENT_COMPLETE|4\n6|SEGMENT_COMPLETE|5",
  "processInterruptCount": "0"
}
```

### Evidence `i4h-seed.json`

```json
{
  "status": "COMPLETE",
  "workId": "cgw_50f9d6dc-fa02-4b20-bb21-f4792a2e1b73",
  "db": "COMPLETE|3"
}
```

### Evidence `i4k-after-kill.json`

```json
{
  "killAt": null,
  "db": "SUSPENDED|8||SEGMENT_INVOCATION_LIMIT|"
}
```

### Evidence `i4k-hung.json`

```json
{
  "hung": {
    "status": 200,
    "json": {
      "userMessageId": "msg_3905db1c-67c9-4baa-a152-c48aa8766bb2",
      "assistantMessageId": "msg_503305ab-9be2-4a36-88ab-1dea2ecfff78",
      "operationId": "op_ba16647b-905b-4a77-b0d5-b888ab67610b",
      "requestId": "req_a3227457-8b02-4989-8f96-ed75d9fd16e8",
      "turnCommandId": "tcmd_174d6b2f-44f3-4e91-b260-f15ebf029ff0",
      "preparedContract": null,
      "cognitiveWork": {
        "workId": "cgw_9c5ce88b-811f-4e18-814a-f3cbcac7d7ba",
        "revision": 11,
        "segmentsRun": 1,
        "resumed": true,
        "suspended": false,
        "suspendReason": null
      },
      "noraMode": "openai-agents-sdk-live",
      "status": "UNKNOWN",
      "generationId": "gen_91374a35-e001-4d62-bdb6-60909cd09a03",
      "policy": {
        "version": "ml2-cog-policy-v2-corrective",
        "profileType": "OPERATIONAL_PROVISIONAL",
        "profile": "analyse",
        "modelRequested": "gpt-6.1-sol",
        "modelApplied": null,
        "effortRequested": "medium",
        "effortApplied": null,
        "reasonCodes": [
          "BUDGET_DEFAULT_ANALYSE_NO_LENGTH_ROUTING",
          "PROFILE_TYPE_OPERATIONAL_PROVISIONAL",
          "LANE_DEV",
          "PROFILE_HINT_analyse"
        ]
      },
      "attempts": [
        {
          "attemptId": "att_2a766120-eb38-4521-aa67-1406ac4a10b2",
          "kind": "non_stream",
          "outcome": "UNKNOWN",
          "notes": "PROVIDER_SCHEMA_OR_OUTPUT",
          "providerContacted": "UNCERTAIN"
        }
      ],
      "toolCallsObserved": 2,
      "d4CharsReturned": 3008,
      "streaming": {
        "attempted": true,
        "delivered": false,
        "notes": "PROVIDER_SCHEMA_OR_OUTPUT"
      },
      "knowledgeSelection": {
        "subjects": 0,
        "acquisCurrent": 0,
        "openPoints": 0,
        "reactivatedOpenPoints": 0,
        "selectionMethod": "bounded-resource-listing",
        "selectionLimit": "RG-KNOW-011 + J-C04: réactivation contextuelle des points ouverts projet, puis ids préférés / listing borné — pas de clôture par silence.",
        "role": "pre_generation_context",
        "selectedAcquisIds": [],
        "selectedOpenPointIds": []
      },
      "knowledgeResumeHints": null,
      "capitalisation": [],
      "capitalisationAttempted": [],
      "capitalisationLimit": "SEM-02: capitalisation depuis propositions Nora typées (d4.record_knowledge).",
      "documentSave": null,
      "pendingDocumentCandidate": null,
      "historicalAuthorization": null,
      "idempotentReplay": false,
      "humanDecisionCreated": false,
      "pilotageEffect": null,
      "missionProjection": null,
      "nextTurnKind": "INCERTAIN",
      "pendingEffectBlocked": false,
      "unresolvedPendingClientTurnKey": null,
      "semanticQualificationStatus": "UNAVAILABLE",
      "preparationProjection": null,
      "turnProjection": {
        "schemaVersion": "e05-turn-projection-v1",
        "messageId": "msg_503305ab-9be2-4a36-88ab-1dea2ecfff78",
        "turnCommandId": "tcmd_174d6b2f-44f3-4e91-b260-f15ebf029ff0",
        "finalized": false,
        "status": "UNKNOWN",
        "choices": [],
        "references": [],
        "activity": {
          "kind": "uncertain",
          "label": "État de la réponse encore incertain"
        }
      },
      "messages": [
        {
          "id": "msg_iq_iqop_6df6f660-1a1c-47fc-8f3f-d21fd0bcc40b_v1",
          "conversationId": "conv_f239fbb7-141f-4468-a84a-a08fc0f82477",
          "role": "assistant",
          "content": "Pour proposer une première progression de cycles, précisez le premier résultat utile attendu et le type de cycle qui vous semble le plus pertinent (cadrage, conception fonctionnelle, UX, etc.).",
          "status": "COMPLETE",
          "generationId": "sfia:iq:iqop_6df6f660-1a1c-47fc-8f3f-d21fd0bcc40b:v1",
          "ordinal": 1,
          "createdAt": "2026-11-24T08:58:20.629Z"
        },
        {
          "id": "msg_f9e9192d-cbf7-4a36-a98a-782e39f0d5ef",
          "conversationId": "conv_f239fbb7-141f-4468-a84a-a08fc0f82477",
          "role": "user",
          "content": "Start SpecKill with Context paragraph only. workDisposition OPEN. cognitiveProfileHint=investigation. Leave work open for continuation. No contract.",
          "status": "COMPLETE",
          "generationId": null,
          "ordinal": 2,
          "createdAt": "2026-11-24T08:58:20.867Z"
        },
        {
          "id": "msg_d48212b5-f7b4-42bb-81e8-e2c120489cd9",
          "conversationId": "conv_f239fbb7-141f-4468-a84a-a08fc0f82477",
          "role": "assistant",
          "content": "**Contexte —** SpecKill s’amorce par une exploration de son contexte métier, qui reste à préciser : la situation de départ, le problème à traiter et les personnes concernées ne sont pas encore décrits dans les éléments disponibles. Ce premier cadrage reste donc provisoire, sans présumer de solution ni engager d’exécution ; il sera enrichi au fil de la continuation.",
          "status": "INTERRUPTED",
          "generationId": "gen_119edeb3-f624-4709-9887-38b1aa40b9f5",
          "ordinal": 3,
          "createdAt": "2026-11-24T09:00:12.507Z"
        },
        {
          "id": "msg_3905db1c-67c9-4baa-a152-c48aa8766bb2",
          "conversationId": "conv_f239fbb7-141f-4468-a84a-a08fc0f82477",
          "role": "user",
          "content": "CONTINUE SpecKill. Write a very long thorough multi-section specification: Context Architecture Rules Risks OpenQuestions Alternatives Implementation Validation Operations Security Compliance Testing Rollout. Many detailed paragraphs per section. Take as long as needed. cognitiveWorkRelation=CONTINUE. proposedCognitiveWorkId=cgw_9c5ce88b-811f-4e18-814a-f3cbcac7d7ba. workDisposition COMPLETE. No contract.",
          "status": "COMPLETE",
          "generationId": null,
          "ordinal": 4,
          "createdAt": "2026-11-24T09:00:13.007Z"
        },
        {
          "id": "msg_503305ab-9be2-4a36-88ab-1dea2ecfff78",
          "conversationId": "conv_f239fbb7-141f-4468-a84a-a08fc0f82477",
          "role": "assistant",
          "content": "Nora LIVE UNKNOWN: une seule tentative fournisseur — aucune relance automatique après exception. Message utilisateur déjà persisté. Détail technique non exposé.",
          "status": "UNKNOWN",
          "generationId": "gen_91374a35-e001-4d62-bdb6-60909cd09a03",
          "ordinal": 5,
          "createdAt": "2026-11-24T09:03:45.462Z"
        }
      ]
    }
  }
}
```

### Evidence `i4k-resume.json`

```json
{
  "status": "COMPLETE",
  "cw": {
    "workId": "cgw_9c5ce88b-811f-4e18-814a-f3cbcac7d7ba",
    "revision": 14,
    "segmentsRun": 1,
    "resumed": true,
    "suspended": false,
    "suspendReason": null
  },
  "same": true,
  "resumed": true,
  "final": "OPEN|14|AWAIT_PILOT",
  "cks": "2|SEGMENT_CONTINUE|1\n3|SEGMENT_CONTINUE|2\n4|SEGMENT_CONTINUE|3\n5|SEGMENT_CONTINUE|4\n6|SEGMENT_CONTINUE|5\n7|BUDGET|6\n8|BUDGET|7\n9|CLAIM|8\n10|SEGMENT_COMPLETE|9\n11|AWAIT_PILOT|10\n12|CLAIM|11\n13|SEGMENT_COMPLETE|12\n14|AWAIT_PILOT|13"
}
```

### Evidence `i4k-seed.json`

```json
{
  "status": "UNKNOWN",
  "workId": "cgw_9c5ce88b-811f-4e18-814a-f3cbcac7d7ba",
  "cw": {
    "workId": "cgw_9c5ce88b-811f-4e18-814a-f3cbcac7d7ba",
    "revision": 8,
    "segmentsRun": 5,
    "resumed": false,
    "suspended": true,
    "suspendReason": "SEGMENT_INVOCATION_LIMIT"
  },
  "db": "SUSPENDED|8"
}
```

### Evidence `i4pg-after-kill-db.json`

```json
{
  "killed": true,
  "killMeta": {
    "ms": 116152,
    "revision": 5,
    "owner": "aba05f0f-08b0-49fc-be5e-2fa2e0096eb1",
    "lease": "2026-11-24T09:29:25.820Z"
  },
  "db": "COMPLETE|6|||"
}
```

### Evidence `i4pg-hung.json`

```json
{
  "hung": {
    "status": 200,
    "json": {
      "userMessageId": "msg_3ca6c7f6-0fd6-465f-b507-169ec092493a",
      "assistantMessageId": "msg_e46969f8-5de1-4651-9a68-acdd42dce5db",
      "operationId": "op_9d7f1e96-75be-42e1-b366-791c3d5b5c15",
      "requestId": "req_33e6c018-4048-4979-92f7-99802b7c7b76",
      "turnCommandId": "tcmd_197215f2-c084-4930-9341-4ce00922f8ed",
      "preparedContract": null,
      "cognitiveWork": {
        "workId": "cgw_71395587-8a84-4a3b-a482-6c489283034e",
        "revision": 6,
        "segmentsRun": 1,
        "resumed": true,
        "suspended": false,
        "suspendReason": null
      },
      "noraMode": "openai-agents-sdk-live",
      "status": "COMPLETE",
      "generationId": "gen_985dae51-d922-4f49-9c35-6c33c87ab8a6",
      "policy": {
        "version": "ml2-cog-policy-v2-corrective",
        "profileType": "OPERATIONAL_PROVISIONAL",
        "profile": "analyse",
        "modelRequested": "gpt-6.1-sol",
        "modelApplied": "UNVERIFIED",
        "effortRequested": "medium",
        "effortApplied": "UNVERIFIED",
        "reasonCodes": [
          "BUDGET_DEFAULT_ANALYSE_NO_LENGTH_ROUTING",
          "PROFILE_TYPE_OPERATIONAL_PROVISIONAL",
          "LANE_DEV",
          "PROFILE_HINT_analyse"
        ]
      },
      "attempts": [
        {
          "attemptId": "att_36d7541d-31d4-4a99-82da-31aaf3e33819",
          "kind": "non_stream",
          "outcome": "SUCCESS",
          "notes": "structured_non_stream_finalOutput",
          "providerContacted": "YES"
        }
      ],
      "toolCallsObserved": 3,
      "d4CharsReturned": 3740,
      "streaming": {
        "attempted": true,
        "delivered": true,
        "notes": "structured_non_stream_finalOutput"
      },
      "knowledgeSelection": {
        "subjects": 0,
        "acquisCurrent": 0,
        "openPoints": 0,
        "reactivatedOpenPoints": 0,
        "selectionMethod": "bounded-resource-listing",
        "selectionLimit": "RG-KNOW-011 + J-C04: réactivation contextuelle des points ouverts projet, puis ids préférés / listing borné — pas de clôture par silence.",
        "role": "pre_generation_context",
        "selectedAcquisIds": [],
        "selectedOpenPointIds": []
      },
      "knowledgeResumeHints": null,
      "capitalisation": [],
      "capitalisationAttempted": [],
      "capitalisationLimit": "Aucune proposition d4.record_knowledge — zéro écriture D4",
      "documentSave": {
        "status": "NOT_EXECUTED",
        "reason": "TITLE_H1_MISMATCH",
        "act": "CREATE"
      },
      "pendingDocumentCandidate": null,
      "historicalAuthorization": null,
      "idempotentReplay": false,
      "humanDecisionCreated": false,
      "pilotageEffect": null,
      "missionProjection": null,
      "nextTurnKind": "INTENTION_EFFET",
      "pendingEffectBlocked": false,
      "unresolvedPendingClientTurnKey": null,
      "semanticQualificationStatus": "QUALIFIED",
      "preparationProjection": null,
      "turnProjection": {
        "schemaVersion": "e05-turn-projection-v1",
        "messageId": "msg_e46969f8-5de1-4651-9a68-acdd42dce5db",
        "turnCommandId": "tcmd_197215f2-c084-4930-9341-4ce00922f8ed",
        "finalized": true,
        "status": "COMPLETE",
        "choices": [],
        "references": [],
        "activity": {
          "kind": "sources_consulted",
          "label": "Sources consultées pour cette réponse",
          "detail": "3 consultation(s) observée(s)"
        }
      },
      "messages": [
        {
          "id": "msg_iq_iqop_e16b2423-85ea-400a-bd75-b177525e985d_v1",
          "conversationId": "conv_77acfb87-b025-4add-929f-7c9ea5dcfdd9",
          "role": "assistant",
          "content": "Pour proposer une première progression de cycles, précisez le premier résultat utile attendu et le type de cycle qui vous semble le plus pertinent (cadrage, conception fonctionnelle, UX, etc.).",
          "status": "COMPLETE",
          "generationId": "sfia:iq:iqop_e16b2423-85ea-400a-bd75-b177525e985d:v1",
          "ordinal": 1,
          "createdAt": "2026-11-24T09:07:08.972Z"
        },
        {
          "id": "msg_9c26de38-2838-4cf4-a2fe-503bc9b513e4",
          "conversationId": "conv_77acfb87-b025-4add-929f-7c9ea5dcfdd9",
          "role": "user",
          "content": "Create SpecI4pg Context section only. workDisposition COMPLETE. cognitiveProfileHint=investigation. No contract.",
          "status": "COMPLETE",
          "generationId": null,
          "ordinal": 2,
          "createdAt": "2026-11-24T09:07:09.206Z"
        },
        {
          "id": "msg_56cf3c90-6238-45e9-8b71-1dcdd9b8b512",
          "conversationId": "conv_77acfb87-b025-4add-929f-7c9ea5dcfdd9",
          "role": "assistant",
          "content": "Voici la section demandée. Aucun contexte métier supplémentaire n’a été retrouvé dans les ressources D4 ni dans l’historique disponible ; les informations manquantes sont donc signalées explicitement.\n\n```sfia-document\n## Context\n\nLe contexte métier de SpecI4pg reste à documenter. Les informations disponibles ne permettent pas encore d’établir :\n\n- le problème ou le besoin à l’origine de l’initiative ;\n- les utilisateurs et parties prenantes concernés ;\n- la situation existante et ses limites ;\n- les enjeux, contraintes et dépendances structurants.\n\nAucune hypothèse sur ces éléments n’est retenue comme un fait dans cette section.\n```\n\n---\n### Résultat applicatif\n\nAucun enregistrement documentaire n'a été effectué sur ce tour.\n\nLa demande n'a pas été qualifiée pour une écriture. La réponse Nora ci-dessus n'est pas un verdict d'enregistrement.\n",
          "status": "COMPLETE",
          "generationId": "gen_55d21861-48fc-4846-9e2e-9a01ffedc20b",
          "ordinal": 3,
          "createdAt": "2026-11-24T09:07:29.549Z"
        },
        {
          "id": "msg_3ca6c7f6-0fd6-465f-b507-169ec092493a",
          "conversationId": "conv_77acfb87-b025-4add-929f-7c9ea5dcfdd9",
          "role": "user",
          "content": "CONTINUE SpecI4pg. Produce a long multi-section document: Architecture Rules Risks OpenQuestions Alternatives Implementation Validation. Detailed paragraphs. cognitiveWorkRelation=CONTINUE. proposedCognitiveWorkId=cgw_71395587-8a84-4a3b-a482-6c489283034e. workDisposition COMPLETE. No contract.",
          "status": "COMPLETE",
          "generationId": null,
          "ordinal": 4,
          "createdAt": "2026-11-24T09:07:29.932Z"
        },
        {
          "id": "msg_e46969f8-5de1-4651-9a68-acdd42dce5db",
          "conversationId": "conv_77acfb87-b025-4add-929f-7c9ea5dcfdd9",
          "role": "assistant",
          "content": "Voici la suite détaillée de **SpecI4pg**, limitée aux sept sections demandées. La section **Context** antérieure a été relue dans l’historique : elle ne définit pas encore le besoin métier. Les choix ci-dessous sont donc présentés comme des **propositions conditionnelles**, et non comme une architecture validée. Aucun contrat n’est préparé.\n\n```sfia-document\n# SpecI4pg — Spécification complémentaire\n\n## Architecture\n\n### État de définition et portée\n\nL’architecture de SpecI4pg ne peut pas encore être décrite comme celle d’un système identifié. Le problème métier, les utilisateurs, les interactions attendues et l’environnement existant restent à préciser. Cette section propose une structure de raisonnement pour préparer les choix futurs ; elle ne constitue ni une description de l’existant ni une décision de conception. Aucun langage, fournisseur, composant déployé ou mode d’hébergement n’est présumé.\n\n### Décomposition logique proposée\n\nSi SpecI4pg conduit à réaliser une application, une première décomposition pourrait distinguer les interfaces d’interaction, l’orchestration des cas d’usage, les règles métier et les adaptateurs vers les systèmes externes. Cette séparation est recommandée conditionnellement : elle devient utile si elle rend les responsabilités plus lisibles et facilite les tests. Elle n’impose pas quatre services, quatre dépôts ou quatre unités de déploiement ; un même programme peut porter plusieurs responsabilités logiques clairement séparées.\n\nLes interfaces devraient exprimer les intentions des utilisateurs sans devenir le lieu unique des règles déterminantes. L’orchestration coordonnerait les opérations, tandis que les règles métier décriraient les conditions de validité indépendamment d’un écran ou d’un protocole. Les accès au stockage et aux services tiers seraient isolés lorsque leur variabilité ou leur criticité le justifie. La pertinence de ces frontières devra être vérifiée sur des scénarios réels avant toute généralisation.\n\n### Données, échanges et frontières de confiance\n\nAucun modèle de données ne peut être fixé sans connaître les objets métier et leur cycle de vie. Pour chaque objet identifié ultérieurement, la conception devra préciser sa source de référence, son propriétaire, ses états autorisés et ses modalités de modification. Pour chaque échange, elle devra distinguer l’acceptation d’une demande, son traitement et la confirmation de son résultat. Les frontières de confiance, les garanties de cohérence et les besoins de synchronisation devront être explicités avant de retenir un protocole ou un mécanisme de messagerie.\n\n## Rules\n\n### Règles métier à établir\n\nAucune règle métier propre à SpecI4pg n’est établie par les éléments consultés. Les recommandations de cette section concernent donc la manière de définir et de vérifier les règles futures. Chaque règle devrait décrire son champ d’application, les données nécessaires, la condition évaluée et la conséquence observable. Une règle insuffisamment définie doit rester une question ouverte plutôt qu’être complétée par une hypothèse implicite dans le code.\n\nLes formulations devront permettre de distinguer une obligation métier, une contrainte réglementaire attestée, une préférence d’interface et une limitation technique. Ces catégories n’ont ni la même autorité ni les mêmes conditions de modification. Une exception devra préciser les circonstances qui la rendent applicable et, lorsque cela est pertinent, le rôle habilité à l’utiliser. Les conflits entre règles devront être exposés avec leurs conséquences ; aucun ordre de priorité ne doit être inventé pour les masquer.\n\n### Cohérence des opérations et droits\n\nSi le système modifie des données, les transitions autorisées devront être définies à partir de leurs états et préconditions. La conception devra traiter les demandes répétées, les modifications concurrentes et les échecs survenant après un début de traitement. Selon les scénarios, une opération pourra devoir être atomique, rejouable sans effet supplémentaire, compensable ou explicitement irréversible. Le choix devra découler du besoin plutôt que d’une règle technique uniforme.\n\nSi plusieurs catégories d’acteurs existent, leurs droits devront être décrits par action et par objet, en distinguant consultation, modification, validation et administration. Un contrôle d’interface seul ne constitue pas une protection suffisante des opérations sensibles. Les contrôles devront être appliqués au point d’exécution approprié et accompagnés de messages permettant de comprendre un refus sans exposer d’informations confidentielles.\n\n## Risks\n\n### Risque de construire sur un besoin indéterminé\n\nLe principal risque actuellement identifiable est documentaire : produire une spécification détaillée peut donner une impression de maturité supérieure aux informations disponibles. Il pourrait en résulter une architecture cohérente sur le papier mais inadéquate au problème réel. La réduction de ce risque passe par un premier scénario métier concret, un résultat attendu observable et une distinction maintenue entre faits, hypothèses et recommandations. Le présent document ne suffit donc pas à conclure que la réalisation peut commencer sans cadrage complémentaire.\n\n### Risques techniques et opérationnels à examiner\n\nLa surarchitecture constitue un risque possible si des services distribués, des mécanismes asynchrones ou des abstractions nombreuses sont retenus sans besoin démontré. À l’inverse, une solution trop concentrée peut devenir difficile à faire évoluer si des responsabilités réellement indépendantes apparaissent. Ces deux risques ne se résolvent pas par une préférence générale : leur appréciation dépendra de la charge, des exigences de disponibilité, des intégrations et des capacités de maintenance.\n\nLes pertes de données, les doublons, les incohérences et les erreurs de reprise devront être examinés dès que les opérations critiques seront connues. Les dépendances externes peuvent introduire des indisponibilités, des changements de contrat ou des coûts variables. Leur criticité reste inconnue à ce stade ; elle devra être évaluée par scénario, avec une stratégie adaptée de détection, de limitation d’impact et de récupération.\n\n### Sécurité, confidentialité et suivi des risques\n\nLa présence de données personnelles, confidentielles ou réglementées n’est pas établie. Elle doit être vérifiée avant de fixer les mécanismes d’accès, les journaux, les durées de conservation et les transferts éventuels. Un risque identifié devrait être accompagné de sa cause, de son impact, des éléments qui étayent son appréciation et d’une mesure de traitement. Aucune probabilité chiffrée ni aucun niveau résiduel n’est attribué ici faute de preuves suffisantes.\n\n## OpenQuestions\n\n### Finalité, utilisateurs et périmètre\n\nQuel problème SpecI4pg doit-il résoudre, pour quels utilisateurs et avec quel premier résultat utile ? Cette question conditionne la sélection des fonctionnalités, les limites du système et les critères d’acceptation. Il reste également à identifier la situation actuelle : processus manuel, outil existant, intégration entre systèmes ou création d’un service nouveau. Sans cette information, la notion même d’amélioration ne dispose pas encore de référence observable.\n\nQuels scénarios appartiennent à la première livraison, lesquels sont différés et lesquels sont explicitement exclus ? Il faudra distinguer les actions usuelles des exceptions, identifier les rôles concernés et préciser les conséquences d’une erreur. Un scénario représentatif devrait décrire son déclencheur, ses préconditions, ses données d’entrée et son résultat attendu, y compris lorsque l’opération ne peut pas aboutir.\n\n### Données et contraintes structurantes\n\nQuelles informations seront manipulées, d’où proviendront-elles et quelle source fera référence en cas de divergence ? Les volumes, la fréquence des mises à jour, les exigences de conservation et les éventuelles obligations de suppression restent inconnus. Il faudra aussi préciser si le fonctionnement doit être possible hors connexion, si plusieurs utilisateurs peuvent modifier les mêmes objets et si des échanges avec des tiers sont nécessaires.\n\nQuelles contraintes de délai, de budget, d’exploitation, de sécurité et de performance sont réellement applicables ? Les réponses devront distinguer les impératifs attestés des préférences négociables. Aucun objectif de temps de réponse, de disponibilité ou de capacité ne doit être traité comme acquis avant d’être relié à un usage et à une méthode de mesure.\n\n### Arbitrage et responsabilité\n\nQui pourra confirmer les besoins, arbitrer les alternatives et accepter le résultat ? La réponse doit identifier des responsabilités concrètes sans supposer une organisation particulière. Ces questions restent ouvertes pour la conception future, mais elles n’empêchent pas de terminer la présente rédaction exploratoire. Elles devront être réévaluées lorsque des éléments métier seront disponibles.\n\n## Alternatives\n\n### Adapter l’existant ou développer une solution\n\nSi un outil ou un processus existant couvre une part significative du besoin, son adaptation devra être comparée à un développement spécifique. L’adaptation peut réduire le délai initial et la charge d’exploitation, mais elle peut limiter la maîtrise des données, des intégrations ou des évolutions. Une réalisation spécifique offre davantage de contrôle au prix d’un investissement durable de maintenance. Aucun des deux chemins ne peut être recommandé définitivement sans inventaire de l’existant et analyse des écarts fonctionnels.\n\n### Architecture concentrée ou distribuée\n\nSi une application sur mesure est nécessaire, une application unique structurée en modules constitue une option à évaluer, non un choix retenu. Elle peut simplifier les transactions, les tests intégrés et l’exploitation initiale. Une architecture distribuée peut devenir pertinente lorsque des besoins démontrés d’autonomie, d’isolation ou de dimensionnement indépendant le justifient. Elle introduit toutefois des coûts de communication, de cohérence, d’observabilité et de reprise qu’une simple séparation fonctionnelle ne suffit pas à légitimer.\n\n### Traitement synchrone ou asynchrone\n\nUn traitement synchrone peut convenir lorsque l’utilisateur a besoin d’un résultat immédiat et que l’exécution reste compatible avec une attente maîtrisée. Un traitement asynchrone peut mieux convenir aux opérations longues ou dépendantes de services variables, mais il impose de représenter l’avancement, l’échec et les tentatives de reprise. Le choix doit être effectué par scénario ; une combinaison des deux approches reste possible si elle conserve une compréhension claire du résultat.\n\nLa comparaison finale devrait examiner l’adéquation métier, le coût total, les compétences nécessaires, les risques, la réversibilité et les preuves disponibles. Une expérimentation ciblée est recommandée conditionnellement lorsqu’une incertitude importante ne peut pas être levée par l’analyse seule. Elle devra tester une hypothèse précise plutôt que reproduire prématurément toute la solution.\n\n## Implementation\n\n### Préparation et première tranche fonctionnelle\n\nCette section décrit une démarche de mise en œuvre proposée ; elle ne constitue pas un contrat d’exécution. La première étape serait de transformer les réponses de cadrage en scénarios vérifiables, puis d’identifier les règles et données nécessaires à un parcours prioritaire. Les éléments non indispensables à ce parcours devraient être différés explicitement plutôt qu’introduits pour anticiper tous les besoins possibles.\n\nUne première tranche verticale pourrait ensuite couvrir le parcours retenu de bout en bout : entrée de la demande, contrôles, traitement, éventuelle persistance et restitution du résultat. Son intérêt serait de vérifier les frontières architecturales avec un cas concret. Si un prototype est utilisé pour lever une incertitude, son objectif et ses limites devront être explicités ; sa réussite ne démontrera pas automatiquement l’aptitude du produit à être exploité.\n\n### Gestion des erreurs et intégration\n\nLes comportements d’échec devraient être conçus avec le parcours nominal. La mise en œuvre devra préciser comment signaler une entrée invalide, une absence de droit, une dépendance indisponible ou un état devenu incompatible. Les nouvelles tentatives ne devront pas produire silencieusement des effets multiples. Les mécanismes de reprise et les informations de diagnostic devront être adaptés à la sensibilité des données et au rôle de leurs destinataires.\n\nLes dépendances externes devraient être introduites à partir de contrats vérifiables et d’environnements de test adaptés lorsqu’ils existent. Si des données doivent être migrées, la démarche devra prévoir les contrôles avant et après transfert, les incompatibilités possibles et les conditions de retour à une situation maîtrisée. Aucune migration n’est présumée nécessaire dans l’état actuel des informations.\n\n### Progression et préparation opérationnelle\n\nLes étapes suivantes devraient être ordonnées selon la valeur attendue et les risques à réduire, sans calendrier artificiel ni estimation non étayée. Avant une utilisation réelle, il faudra adapter les modalités de configuration, de gestion des secrets, de supervision et de récupération au contexte confirmé. Chaque incrément devrait préciser ce qu’il permet effectivement, ses limites connues et les preuves de validation disponibles.\n\n## Validation\n\n### Traçabilité et critères observables\n\nLa validation devra relier chaque scénario prioritaire aux règles concernées, aux critères d’acceptation et aux preuves obtenues. Un critère utile décrit des conditions initiales, une action et un résultat observable. Les expressions générales comme « rapide », « fiable » ou « intuitif » devront être remplacées par des attentes vérifiables dès que leur contexte sera connu. Aucun seuil numérique n’est fixé dans cette version.\n\n### Couverture fonctionnelle et technique\n\nLa stratégie de test devrait combiner la vérification des règles isolées, les interactions entre composants et les parcours représentatifs de bout en bout. La répartition exacte dépendra de l’architecture retenue. Les cas de test devront inclure les refus attendus, les entrées invalides et les limites pertinentes, sans se limiter aux parcours réussis. Si la concurrence, les reprises ou les échanges asynchrones existent, leurs comportements devront faire l’objet de scénarios dédiés.\n\nLes essais de sécurité, de performance, d’accessibilité et de récupération devront être dimensionnés à partir des risques et usages confirmés. Un essai de charge sans modèle d’usage ne démontre pas une capacité métier ; une sauvegarde déclarée sans restauration vérifiée ne démontre pas la récupération. Les environnements, les jeux de données et les limites de représentativité devront accompagner les résultats afin d’éviter les extrapolations injustifiées.\n\n### Preuves et état de validation\n\nChaque résultat de validation devrait identifier la version examinée, les conditions d’exécution, le résultat attendu, le résultat observé et les écarts. Les anomalies devront être appréciées selon leur impact sur les scénarios et les données, et non uniquement selon leur nombre. L’acceptation finale dépendra de critères et de responsabilités encore à préciser ; elle ne peut pas être déduite de cette rédaction.\n\nAucun test, prototype, audit ou exercice de restauration n’a été réalisé dans le cadre de ce document. La production des sept sections est achevée pour ce tour, tandis que la définition métier et la validation du système restent ouvertes. Cette distinction permet d’utiliser le texte comme support de travail sans lui attribuer une valeur de preuve qu’il ne possède pas.\n```\n\n---\n### Résultat applicatif\n\nAucun enregistrement documentaire n'a été effectué sur ce tour.\n\nLa demande n'a pas été qualifiée pour une écriture. La réponse Nora ci-dessus n'est pas un verdict d'enregistrement.\n",
          "status": "COMPLETE",
          "generationId": "gen_985dae51-d922-4f49-9c35-6c33c87ab8a6",
          "ordinal": 5,
          "createdAt": "2026-11-24T09:09:25.873Z"
        }
      ]
    }
  }
}
```

### Evidence `i4pg-kill-at.json`

```json
{
  "ms": 116152,
  "revision": 5,
  "owner": "aba05f0f-08b0-49fc-be5e-2fa2e0096eb1",
  "lease": "2026-11-24T09:29:25.820Z"
}
```

### Evidence `i4pg-resume.json`

```json
{
  "status": "COMPLETE",
  "cw": {
    "workId": "cgw_71395587-8a84-4a3b-a482-6c489283034e",
    "revision": 9,
    "segmentsRun": 1,
    "resumed": true,
    "suspended": false,
    "suspendReason": null
  },
  "same": true,
  "resumed": true,
  "final": "COMPLETE|9|",
  "cks": "2|SEGMENT_COMPLETE|1\n3|SEGMENT_COMPLETE|2\n4|CLAIM|3\n5|SEGMENT_COMPLETE|4\n6|SEGMENT_COMPLETE|5\n7|CLAIM|6\n8|SEGMENT_COMPLETE|7\n9|SEGMENT_COMPLETE|8",
  "processInterruptCount": "0"
}
```

### Evidence `i4pg-seed.json`

```json
{
  "status": "COMPLETE",
  "workId": "cgw_71395587-8a84-4a3b-a482-6c489283034e",
  "db": "COMPLETE|3"
}
```

### Evidence `i5-t1.json`

```json
{
  "status": "COMPLETE",
  "cw": {
    "workId": "cgw_51bb8d37-f953-4447-91fe-1fd78fb37921",
    "revision": 3,
    "segmentsRun": 1,
    "resumed": false,
    "suspended": false,
    "suspendReason": null
  }
}
```

### Evidence `i5-t2.json`

```json
{
  "status": "COMPLETE",
  "cw": {
    "workId": "cgw_51bb8d37-f953-4447-91fe-1fd78fb37921",
    "revision": 6,
    "segmentsRun": 1,
    "resumed": true,
    "suspended": false,
    "suspendReason": null
  },
  "sameWork": true,
  "resumed": true
}
```

### Evidence `i5-t3.json`

```json
{
  "status": "COMPLETE",
  "cw": {
    "workId": "cgw_1b338a12-942f-4589-950a-b8de61ad209c",
    "revision": 3,
    "segmentsRun": 1,
    "resumed": false,
    "suspended": false,
    "suspendReason": null
  },
  "independent": true
}
```

### Evidence `i6-mid.json`

```json
{
  "fenced": false,
  "state": "COMPLETE|6|",
  "mdLen": 12241,
  "preservedFromT2": true
}
```

### Evidence `i6-t1.json`

```json
{
  "status": "COMPLETE",
  "workId": "cgw_15d2ca00-0334-4261-8bb3-2138a9542ec1",
  "cw": {
    "workId": "cgw_15d2ca00-0334-4261-8bb3-2138a9542ec1",
    "revision": 3,
    "segmentsRun": 1,
    "resumed": false,
    "suspended": false,
    "suspendReason": null
  },
  "state1": "COMPLETE|3|",
  "prodKind": "DOCUMENT",
  "parts": 1,
  "mdLen": 4762,
  "mdFp": "e90d06bf12417b76",
  "mdHead": "# SpecI6\n\n## Context\n\nCette investigation compare trois sources fictives décrites par le Pilote. Elle vise à distinguer les affirmations, leurs contradictions et les informations manquantes, puis à co"
}
```

### Evidence `i6-t2.json`

```json
{
  "status": "COMPLETE",
  "cw": {
    "workId": "cgw_15d2ca00-0334-4261-8bb3-2138a9542ec1",
    "revision": 6,
    "segmentsRun": 1,
    "resumed": true,
    "suspended": false,
    "suspendReason": null
  },
  "same": true,
  "resumed": true,
  "state2": "COMPLETE|6|",
  "prodKind": "DOCUMENT",
  "parts": [
    {
      "id": "gen-gen_e9a466a3-ac48-43e1-8ca4-0ab7cc5e3230",
      "title": "SpecI6",
      "complete": true
    },
    {
      "id": "gen-gen_58b66338-fb4e-4925-992d-2d8408b42600",
      "title": "SpecI6",
      "complete": true
    }
  ],
  "mdLen": 12241,
  "mdFp": "fc1fe3aa30c4fb63",
  "preservedPriorSnippet": true,
  "grew": true,
  "cks": "2|SEGMENT_COMPLETE\n3|SEGMENT_COMPLETE\n4|CLAIM\n5|SEGMENT_COMPLETE\n6|SEGMENT_COMPLETE"
}
```

### Evidence `i6-t3.json`

```json
{
  "status": "COMPLETE",
  "cw": {
    "workId": "cgw_15d2ca00-0334-4261-8bb3-2138a9542ec1",
    "revision": 9,
    "segmentsRun": 1,
    "resumed": true,
    "suspended": false,
    "suspendReason": null
  },
  "same": true,
  "resumed": true,
  "final": "COMPLETE|9|",
  "prodKind": "DOCUMENT",
  "parts": [
    {
      "id": "gen-gen_e9a466a3-ac48-43e1-8ca4-0ab7cc5e3230",
      "title": "SpecI6",
      "complete": true
    },
    {
      "id": "gen-gen_58b66338-fb4e-4925-992d-2d8408b42600",
      "title": "SpecI6",
      "complete": true
    },
    {
      "id": "gen-gen_5b60d1a2-01ae-49d0-935c-7b7884b228e9",
      "title": "SpecI6",
      "complete": true
    }
  ],
  "mdLen": 34553,
  "mdFp": "2c652d89236b6f09",
  "preservedT1snippet": true,
  "preservedT2snippet": true,
  "processInterrupts": "0",
  "cks": "2|SEGMENT_COMPLETE\n3|SEGMENT_COMPLETE\n4|CLAIM\n5|SEGMENT_COMPLETE\n6|SEGMENT_COMPLETE\n7|CLAIM\n8|SEGMENT_COMPLETE\n9|SEGMENT_COMPLETE"
}
```


## 9. Production I6 (objet métier)

- workId `cgw_15d2ca00-0334-4261-8bb3-2138a9542ec1`
- mdLen final **34553** · sha256 `2c652d89236b6f09426a8036cded04701051b730b55e7aa4bf2df1d87c60f89f`
- parts : 3 ids stables `gen-gen_*`

### Head (800 chars)

```markdown
# SpecI6

## Context

Cette investigation compare trois sources fictives décrites par le Pilote. Elle vise à distinguer les affirmations, leurs contradictions et les informations manquantes, puis à consolider une conclusion traçable.

Les documents originaux ne sont pas fournis. L’analyse porte uniquement sur leurs résumés dans le message du Pilote. Les montants sont conservés sous la forme « 100k » et « 250k » : la devise et l’assiette budgétaire ne sont pas précisées.

## Sources

### 1. Alpha — première hypothèse de référence

**Affirmations fournies :** délai cible de 30 jours ; budget de 100k.

**Lecture à ce stade :** Alpha constitue une première proposition chiffrée, non une référence validée. Sa date, son périmètre, ses hypothèses et son niveau d’autorité ne sont pas connus.

### 2
```

### Tail (800 chars)

```markdown
nté.

**Confirmation documentaire :** l’existence d’une nouvelle révision et son statut doivent être attestés par le résultat applicatif documentaire ; le présent texte n’en tient pas lieu.

**Clôture de la validation opérationnelle :** elle reste distincte et nécessite les preuves de comparabilité, la qualification de Gamma et un arbitrage explicite par la personne habilitée. Le corpus actuel ne permet pas de la déclarer acquise.

### V7 — Conclusion de validation à ce stade

Le corpus soutient toujours deux propositions chiffrées concurrentes et une contrainte réglementaire rapportée non qualifiée. La procédure de mise en œuvre et le plan de validation sont désormais décrits. Leur rédaction ne transforme ni Alpha ni Beta en référence retenue et ne résout pas les sept questions initiales.
```

## 10. Fichiers sources C19 (complets / extraits)

### Created/core file `projects/sfia-studio-next/web/src/domains/execution/mandate-applicability.ts` (sha256 `576e5dad0b12e3742c411627c21e8c8b9ac6e21d830ddb112c3e14c744d9c0d6`)

```typescript
/**
 * C19 — current applicability of a READY technical mandate.
 * Historical READY status is preserved; effect paths must refuse when
 * cognitive filiation or investigation is no longer exact/current.
 */

import { StudioError } from "@/lib/http-errors";
import {
  evaluateGlobalResourceEnvelope,
  getCognitiveWork,
} from "@/domains/conversation/cognitive-work";
import { loadInvestigationSnapshot } from "@/domains/conversation/investigation-persistence";
import { evaluateContractReadiness as evaluateInvestigation } from "@/domains/conversation/investigation-state";
import {
  getTechnicalContract,
  technicalContractFingerprint,
} from "./technical-contract";

export type MandateApplicability = {
  ok: true;
  contractId: string;
  workId: string;
  revision: number;
  fingerprint: string;
} | {
  ok: false;
  reason: string;
};

/**
 * Positive check used at prepare / authorize / dispatch effect points.
 * Does not rewrite historical READY rows.
 */
export async function assessTechnicalContractMandateApplicability(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  preparationId?: string | null;
}): Promise<MandateApplicability> {
  const row = await getTechnicalContract({
    pilotId: input.pilotId,
    projectId: input.projectId,
    contractId: input.contractId,
  });
  if (row.status !== "READY") {
    return { ok: false, reason: `Contrat non READY (${row.status})` };
  }
  const recomputed = technicalContractFingerprint(row.body);
  if (recomputed !== row.fingerprint) {
    return { ok: false, reason: "Empreinte ≠ représentation persistée" };
  }
  const workId = row.cognitiveWorkId ?? null;
  const boundRevision = row.cognitiveRevision;
  if (!workId || boundRevision == null) {
    return { ok: false, reason: "Filiation cognitive absente — mandat non applicable" };
  }
  const work = await getCognitiveWork({
    pilotId: input.pilotId,
    workId,
  });
  if (work.projectId && work.projectId !== input.projectId) {
    return { ok: false, reason: "Travail cognitif hors projet du contrat" };
  }
  if (work.revision !== boundRevision) {
    return {
      ok: false,
      reason: `Révision cognitive ${work.revision} ≠ filiation mandat r${boundRevision} — mandat non applicable`,
    };
  }
  if (work.status !== "COMPLETE") {
    return {
      ok: false,
      reason: `Travail cognitif ${work.status} — mandat non applicable`,
    };
  }
  const envelope = evaluateGlobalResourceEnvelope(work.resources);
  if (!envelope.ok) {
    return { ok: false, reason: envelope.reason ?? "Budget cognitif global épuisé" };
  }
  const preparationId = input.preparationId ?? row.preparationId ?? null;
  if (!preparationId) {
    return { ok: false, reason: "preparationId requis pour applicabilité" };
  }
  const snap = await loadInvestigationSnapshot({
    pilotId: input.pilotId,
    preparationId,
    intentFallback: row.body.title,
    workId,
  });
  if (!snap) {
    return { ok: false, reason: "Investigation absente ou ambiguë" };
  }
  const inv = evaluateInvestigation(snap);
  if (inv.cognitiveWorkId && inv.cognitiveWorkId !== workId) {
    return { ok: false, reason: "Investigation d'un autre travail cognitif" };
  }
  if (
    inv.sufficiency === "UNKNOWN" ||
    inv.sufficiency === "BUDGET_EXHAUSTED" ||
    inv.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION" ||
    !inv.contractReady ||
    inv.sufficiency !== "SUFFICIENT"
  ) {
    return {
      ok: false,
      reason:
        inv.contractReadyBlockedReason ??
        `Investigation non applicable (${inv.sufficiency})`,
    };
  }
  const consulted = inv.sources.filter(
    (s) => s.coverage === "CONSULTED" || s.coverage === "VERIFIED",
  );
  if (consulted.length === 0) {
    return { ok: false, reason: "Aucune source CONSULTED/VERIFIED actuelle" };
  }
  const degraded = inv.sources.some(
    (s) =>
      s.coverage === "STALE" ||
      s.coverage === "DENIED" ||
      s.coverage === "CONTRADICTORY",
  );
  if (degraded) {
    return {
      ok: false,
      reason: "Source déterminante dégradée — mandat non applicable",
    };
  }
  return {
    ok: true,
    contractId: input.contractId,
    workId,
    revision: boundRevision,
    fingerprint: row.fingerprint,
  };
}

export async function assertTechnicalContractMandateApplicable(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  preparationId?: string | null;
}): Promise<Extract<MandateApplicability, { ok: true }>> {
  const assessed = await assessTechnicalContractMandateApplicability(input);
  if (!assessed.ok) {
    throw new StudioError("REQUIRES_REQUALIFICATION", assessed.reason, {
      exposeMessage: true,
    });
  }
  return assessed;
}

```

### Created/core file `projects/sfia-studio-next/web/src/domains/conversation/web-search-sanitize.ts` (sha256 `3bdf7362ead3d21620e8b250fe0945b68ca5c32088049914ff714ebcf1c01c08`)

```typescript
/**
 * B1 — sanitization of public web queries.
 * A textual prompt rule is not enough: strip private/secret-looking material
 * before any hosted web search request.
 */

const SECRETISH =
  /\b(api[_-]?key|secret|token|password|passwd|bearer|authorization|private[_-]?key|BEGIN (RSA |OPENSSH )?PRIVATE KEY)\b/i;
const PATHISH =
  /(?:\/Users\/[^\s]+|\/home\/[^\s]+|[A-Za-z]:\\[^\s]+|file:\/\/[^\s]+)/g;
const GITHUB_TOKENISH = /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/g;
const OPENAI_KEYISH = /\bsk-[A-Za-z0-9_-]{20,}\b/g;
const JWTISH = /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g;
/** Studio-private identity tokens — never egress on public web. */
const STUDIO_PRIVATE_IDISH =
  /\b(?:prep_|proj_|cgw_|doc_|drev_|tctr_|tcmd_|msg_|op_|req_|dec_|efx_|pilot_|sess_)[A-Za-z0-9_-]{8,}\b/g;
const COOKIEISH = /\b(?:session|cookie|set-cookie|owner[_-]?token)\s*[:=]\s*\S+/gi;

export type SanitizeWebQueryResult = {
  ok: boolean;
  query: string;
  redactions: string[];
  blockedReason?: string;
};

export function sanitizePublicWebQuery(raw: string): SanitizeWebQueryResult {
  const redactions: string[] = [];
  let q = (raw ?? "").trim();
  if (!q) {
    return { ok: false, query: "", redactions, blockedReason: "EMPTY_QUERY" };
  }
  if (SECRETISH.test(q)) {
    return {
      ok: false,
      query: "",
      redactions: ["SECRETISH_KEYWORD"],
      blockedReason: "SECRETISH_CONTENT",
    };
  }
  const before = q;
  q = q.replace(GITHUB_TOKENISH, "[REDACTED_GH]");
  q = q.replace(OPENAI_KEYISH, "[REDACTED_SK]");
  q = q.replace(JWTISH, "[REDACTED_JWT]");
  q = q.replace(PATHISH, "[REDACTED_PATH]");
  q = q.replace(STUDIO_PRIVATE_IDISH, "[REDACTED_STUDIO_ID]");
  q = q.replace(COOKIEISH, "[REDACTED_SESSION]");
  if (q !== before) redactions.push("TOKEN_OR_PATH_OR_PRIVATE_ID");
  // Refuse if redaction left almost nothing useful.
  const useful = q.replace(/\[REDACTED_[A-Z]+\]/g, "").replace(/\s+/g, " ").trim();
  if (useful.length < 3) {
    return {
      ok: false,
      query: "",
      redactions,
      blockedReason: "QUERY_EMPTY_AFTER_REDACTION",
    };
  }
  // Cap length — public intent only.
  if (q.length > 400) {
    q = q.slice(0, 400);
    redactions.push("TRUNCATED");
  }
  return { ok: true, query: q, redactions };
}

export type WebCoverageLevel =
  | "SEARCH_ENGAGED"
  | "URL_DISCOVERED"
  | "PAGE_OPENED"
  | "FIND_IN_PAGE"
  | "CITED"
  | "UNVERIFIABLE"
  | "ERROR";

export function classifyWebAction(action: string | null | undefined): WebCoverageLevel {
  const a = (action ?? "").toLowerCase();
  if (!a) return "UNVERIFIABLE";
  if (a === "search") return "URL_DISCOVERED";
  if (a === "open_page") return "PAGE_OPENED";
  if (a === "find_in_page") return "FIND_IN_PAGE";
  if (a === "error" || a === "timeout") return "ERROR";
  return "UNVERIFIABLE";
}

/** Citation alone does not prove open_page. */
export function coverageFromObservation(input: {
  action?: string | null;
  hasCitation?: boolean;
  searchEngaged?: boolean;
}): WebCoverageLevel {
  if (input.action) return classifyWebAction(input.action);
  if (input.hasCitation) return "CITED";
  if (input.searchEngaged) return "SEARCH_ENGAGED";
  return "UNVERIFIABLE";
}

```

### Created/core file `projects/sfia-studio-next/web/tests/unit/ml5-c19-invariants.test.ts` (sha256 `d9bb1237597a863a1b36011c001b994fda1b0bb434a29add85e90be4f85a09a3`)

```typescript
/**
 * C19 — residual invariants (deterministic).
 */
import { describe, expect, it } from "vitest";
import { sanitizePublicWebQuery } from "@/domains/conversation/web-search-sanitize";
import {
  assertOutboundHasNoPrivateLeak,
  __resetPublicWebOutboundLogForTests,
  __getPublicWebOutboundLogForTests,
  executePublicWebSearch,
} from "@/domains/conversation/public-web-search-frontier";
describe("C19 I3 WEB sanitize / egress confidentiality", () => {
  it("redacts studio-private ids and blocks secretish queries", () => {
    const a = sanitizePublicWebQuery(
      "compare prep_abc12345-aaaa-bbbb-cccc-ddddeeee0000 with public RFC",
    );
    expect(a.ok).toBe(true);
    expect(a.query).not.toMatch(/prep_/);
    expect(a.redactions.length).toBeGreaterThan(0);

    const blocked = sanitizePublicWebQuery("my api_key is sk-abcdefghijklmnopqrstuvwxyz");
    expect(blocked.ok).toBe(false);
  });

  it("blocks outbound when private markers leak into fields", () => {
    const r = assertOutboundHasNoPrivateLeak(
      { q: "public topic prep_secretid12345678" },
      ["prep_secretid12345678"],
    );
    expect(r.ok).toBe(false);
  });

  it("scripted search records only sanitized outbound query", async () => {
    __resetPublicWebOutboundLogForTests();
    const prev = process.env.SFIA_WEB_SEARCH_ENABLED;
    process.env.SFIA_WEB_SEARCH_ENABLED = "1";
    delete process.env.SFIA_WEB_SEARCH_LIVE;
    try {
      const r = await executePublicWebSearch({
        rawQuery: "public markdown specification",
        privateContextMarkers: ["proj_should_not_appear_zzzzzzzz"],
      });
      expect(r.status).toBe("AVAILABLE");
      const log = __getPublicWebOutboundLogForTests();
      expect(log.length).toBe(1);
      expect(JSON.stringify(log[0]!.outboundFields)).not.toContain("proj_should_not_appear");
    } finally {
      if (prev === undefined) delete process.env.SFIA_WEB_SEARCH_ENABLED;
      else process.env.SFIA_WEB_SEARCH_ENABLED = prev;
    }
  });
});

```


### Excerpt `projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts` L418-507

```typescript
/**
 * C19 — reconcile RUNNING works whose lease expired (process crash / mid-work kill).
 * Does not invent provider results; marks recoverable SUSPENDED with explicit cause.
 */
export async function reconcileStaleRunningCognitiveWorks(input?: {
  preparationId?: string | null;
  pilotId?: string | null;
}): Promise<{ reconciled: number; workIds: string[] }> {
  const nowIso = new Date(cognitiveClock.nowMs()).toISOString();
  const conds = [
    eq(cognitiveWorks.status, "RUNNING"),
    sql`(
      ${cognitiveWorks.leaseUntil} IS NULL
      OR ${cognitiveWorks.leaseUntil} <= ${nowIso}::timestamptz
    )`,
  ];
  if (input?.preparationId) {
    conds.push(eq(cognitiveWorks.preparationId, input.preparationId));
  }
  if (input?.pilotId) {
    conds.push(eq(cognitiveWorks.ownerPilotId, input.pilotId));
  }
  const stale = await db
    .select({
      id: cognitiveWorks.id,
      revision: cognitiveWorks.revision,
      stateJson: cognitiveWorks.stateJson,
      resourcesJson: cognitiveWorks.resourcesJson,
    })
    .from(cognitiveWorks)
    .where(and(...conds))
    .limit(50);
  const workIds: string[] = [];
  for (const row of stale) {
    const nextRevision = row.revision + 1;
    const updated = await db.transaction(async (tx) => {
      const rows = await tx
        .update(cognitiveWorks)
        .set({
          status: "SUSPENDED",
          ownerToken: null,
          leaseUntil: null,
          interruptCause: "PROCESS_OR_LEASE_INTERRUPT",
          revision: nextRevision,
          updatedAt: new Date(),
        })
        .where(
          and(
            eq(cognitiveWorks.id, row.id),
            eq(cognitiveWorks.revision, row.revision),
            eq(cognitiveWorks.status, "RUNNING"),
          ),
        )
        .returning({ id: cognitiveWorks.id });
      if (!rows[0]) return null;
      await tx.insert(cognitiveWorkCheckpoints).values({
        id: newId("cgcp"),
        workId: row.id,
        revision: nextRevision,
        parentRevision: row.revision,
        cause: "PROCESS_OR_LEASE_INTERRUPT",
        payloadJson: row.stateJson,
        resourcesJson: row.resourcesJson,
      });
      return rows[0];
    });
    if (updated) workIds.push(row.id);
  }
  return { reconciled: workIds.length, workIds };
}

/** Release ownership after segment; keep state durable. */
export async function releaseCognitiveWorkLease(input: {
  workId: string;
  ownerToken: string;
  status: CognitiveWorkStatus;
  interruptCause?: string | null;
}): Promise<void> {
  await db
    .update(cognitiveWorks)
    .set({
      status: input.status,
      ownerToken: null,
      leaseUntil: null,
      interruptCause: input.interruptCause ?? null,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(cognitiveWorks.id, input.workId),
```

### Excerpt `projects/sfia-studio-next/web/src/domains/conversation/investigation-persistence.ts` L1-215

```typescript
/**
 * Investigation persistence facade.
 * C15: cognitive_works is the active D3 truth.
 * Legacy preparations.projection_json.ml5InvestigationSnapshot is read-compat only
 * (ambiguous bindings never feed READY). Exit: stop writing the legacy snapshot.
 *
 * C19: material investigation writes bump revision + new immutable checkpoint.
 * Never mutate an existing checkpoint payload in place.
 */

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { preparations } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  getCognitiveWork,
  listCognitiveWorksForPreparation,
  openOrResumeCognitiveWork,
  checkpointCognitiveWork,
  releaseCognitiveWorkLease,
} from "./cognitive-work";
import {
  evaluateContractReadiness,
  resumeInvestigation,
  type InvestigationState,
} from "./investigation-state";

const SNAPSHOT_KEY = "ml5InvestigationSnapshot";

/** @deprecated C15 — legacy key retained for read-compat / migration diagnostics only. */
export const LEGACY_INVESTIGATION_SNAPSHOT_KEY = SNAPSHOT_KEY;

function stableStateJson(state: InvestigationState): string {
  return JSON.stringify(evaluateContractReadiness(state));
}

/**
 * Persist investigation into dedicated cognitive work (active truth).
 * Optionally keep a non-authoritative legacy mirror for transition diagnostics.
 */
export async function saveInvestigationSnapshot(input: {
  pilotId: string;
  preparationId: string;
  state: InvestigationState;
  workId?: string | null;
  projectId?: string | null;
  conversationId?: string | null;
}): Promise<{ savedAt: string; workId: string; revision: number; bumped: boolean }> {
  // C17: never re-evaluate with a sticky BUDGET_EXHAUSTED left by SEGMENT_INVOCATION_LIMIT.
  let incoming = input.state;
  const blocked = incoming.contractReadyBlockedReason ?? "";
  if (
    incoming.sufficiency === "BUDGET_EXHAUSTED" &&
    (blocked === "SEGMENT_INVOCATION_LIMIT" || blocked.includes("SEGMENT_INVOCATION"))
  ) {
    incoming = {
      ...incoming,
      sufficiency: "UNKNOWN",
      contractReady: false,
      contractReadyBlockedReason: "SEGMENT_INVOCATION_LIMIT",
    };
  }
  const evaluated = evaluateContractReadiness(incoming);
  const nextJson = stableStateJson(evaluated);

  // Capture durable status BEFORE claim (claim temporarily sets RUNNING).
  let durableStatus: "OPEN" | "SUSPENDED" | "COMPLETE" | "FAILED" | "RUNNING" | "ABANDONED" =
    "OPEN";
  if (input.workId) {
    const current = await getCognitiveWork({
      pilotId: input.pilotId,
      workId: input.workId,
    });
    if (current.preparationId !== input.preparationId) {
      throw new StudioError("ACCESS_DENIED", "Travail hors préparation");
    }
    durableStatus = current.status;
    // Idempotent: identical material state → keep revision, no checkpoint rewrite.
    if (stableStateJson(current.state) === nextJson) {
      return {
        savedAt: new Date().toISOString(),
        workId: current.id,
        revision: current.revision,
        bumped: false,
      };
    }
  }

  const opened = await openOrResumeCognitiveWork({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    projectId: input.projectId,
    conversationId: input.conversationId,
    objective: evaluated.intentSummary || "investigation",
    expectedOutcome: evaluated.desiredOutcome,
    workId: input.workId,
  });
  // C19: restore pre-claim terminal status — claim must not demote COMPLETE→OPEN.
  const persistStatus =
    durableStatus === "COMPLETE"
      ? "COMPLETE"
      : durableStatus === "FAILED"
        ? "FAILED"
        : "OPEN";

  // C19: material change → new revision + new immutable checkpoint (CAS).
  const saved = await checkpointCognitiveWork({
    pilotId: input.pilotId,
    workId: opened.work.id,
    ownerToken: opened.ownerToken,
    expectedRevision: opened.work.revision,
    cause: "INVESTIGATION_SAVE",
    state: evaluated,
    status: persistStatus,
    interruptCause: persistStatus === "COMPLETE" ? null : opened.work.interruptCause,
  });
  await releaseCognitiveWorkLease({
    workId: opened.work.id,
    ownerToken: opened.ownerToken,
    status: persistStatus,
    interruptCause: persistStatus === "COMPLETE" ? null : opened.work.interruptCause,
  });

  // Transitional diagnostic mirror — NOT authoritative for READY (C15 exit path).
  if ((process.env.SFIA_COGNITIVE_LEGACY_MIRROR || "").trim() === "1") {
    const prep = (
      await db.select().from(preparations).where(eq(preparations.id, input.preparationId)).limit(1)
    )[0];
    if (prep && prep.ownerPilotId === input.pilotId) {
      const savedAt = new Date().toISOString();
      const base =
        prep.projectionJson && typeof prep.projectionJson === "object"
          ? { ...(prep.projectionJson as Record<string, unknown>) }
          : {};
      await db
        .update(preparations)
        .set({
          projectionJson: {
            ...base,
            [SNAPSHOT_KEY]: {
              state: evaluated,
              savedAt,
              cognitiveWorkId: saved.id,
              authority: "LEGACY_MIRROR_NON_AUTHORITATIVE",
            },
          },
          updatedAt: new Date(),
        })
        .where(eq(preparations.id, input.preparationId));
    }
  }

  return {
    savedAt: new Date().toISOString(),
    workId: saved.id,
    revision: saved.revision,
    bumped: true,
  };
}

export async function loadInvestigationSnapshot(input: {
  pilotId: string;
  preparationId: string;
  intentFallback?: string;
  workId?: string | null;
}): Promise<InvestigationState | null> {
  // Prefer dedicated cognitive work.
  if (input.workId) {
    const work = await getCognitiveWork({
      pilotId: input.pilotId,
      workId: input.workId,
    });
    return resumeInvestigation(
      work.state,
      input.intentFallback ?? work.state.intentSummary ?? "",
    );
  }
  const works = await listCognitiveWorksForPreparation({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
  });
  if (works.length === 1) {
    return resumeInvestigation(
      works[0]!.state,
      input.intentFallback ?? works[0]!.state.intentSummary ?? "",
    );
  }
  if (works.length > 1) {
    // Ambiguous multi-work — do not guess for READY.
    return null;
  }

  // C16: legacy snapshot is never READY authority and is not returned on the
  // authoritative load path. Compatibility diagnostics remain opt-in via env.
  if ((process.env.SFIA_COGNITIVE_LEGACY_READ || "").trim() !== "1") {
    return null;
  }
  const prep = (
    await db.select().from(preparations).where(eq(preparations.id, input.preparationId)).limit(1)
  )[0];
  if (!prep) throw new StudioError("NOT_FOUND", "Préparation introuvable");
  if (prep.ownerPilotId !== input.pilotId) {
    throw new StudioError("ACCESS_DENIED", "Préparation d'un autre Pilote");
  }
  const base =
    prep.projectionJson && typeof prep.projectionJson === "object"
      ? (prep.projectionJson as Record<string, unknown>)
      : {};
  const snap = base[SNAPSHOT_KEY] as
    | { state?: InvestigationState; cognitiveWorkId?: string; authority?: string }
    | undefined;
  if (!snap?.state) return null;
  // Explicit non-authoritative — callers must not promote READY from this alone.
  return resumeInvestigation(snap.state, input.intentFallback ?? snap.state.intentSummary ?? "");
}
```

### Excerpt `projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts` L373-452

```typescript
function documentProductionFromReply(
  work: CognitiveWorkRow,
  reply: NoraGenerateResult,
  segmentIndex: number,
  continueWork: boolean,
): CognitiveProductionState | undefined {
  const prevDoc =
    (work.production as CognitiveProductionState & { contentMarkdown?: string })
      .contentMarkdown ?? "";
  // C19: part ids are stable across invocations — never collide on local segmentIndex 0.
  const partId = `gen-${reply.generationId || `seg-${work.revision}-${segmentIndex}`}`;
  const appendPart = (
    parts: CognitiveProductionState["parts"],
    title: string,
    complete: boolean,
  ) => [...parts.filter((p) => p.id !== partId), { id: partId, title, complete }];

  const mergeBody = (incoming: string): string => {
    const body = incoming.trim();
    if (!prevDoc) return body;
    if (prevDoc.includes(body)) return prevDoc;
    return `${prevDoc}\n\n${body}`.trim();
  };

  const proposal = reply.qualification?.documentProposal;
  if (proposal?.contentMarkdown?.trim()) {
    return {
      kind: "DOCUMENT",
      status: continueWork ? "IN_PROGRESS" : "COMPLETE",
      objectRef: work.production.objectRef || reply.generationId,
      parts: appendPart(
        work.production.parts,
        proposal.title || `document-part-${work.production.parts.length + 1}`,
        !continueWork,
      ),
      contentMarkdown: mergeBody(proposal.contentMarkdown),
    } as CognitiveProductionState;
  }
  // C19: Markdown fence is transport/legacy only — never authority that replaces
  // structured production. Preserve prior DOCUMENT on resume.
  const extracted = reply.content.match(/```sfia-document\b([\s\S]*?)```/i);
  if (extracted && !prevDoc) {
    return {
      kind: "DOCUMENT",
      status: continueWork ? "IN_PROGRESS" : "COMPLETE",
      objectRef: reply.generationId,
      parts: appendPart(
        work.production.parts,
        `document-part-${work.production.parts.length + 1}`,
        !continueWork,
      ),
      contentMarkdown: extracted[1]!.trim(),
      limits: ["MARKDOWN_FENCE_TRANSPORT_ONLY"],
    } as CognitiveProductionState;
  }
  if (work.production.kind === "DOCUMENT" && prevDoc) {
    return {
      ...work.production,
      status: continueWork ? "IN_PROGRESS" : work.production.status,
      parts: appendPart(
        work.production.parts,
        reply.generationId,
        !continueWork,
      ),
    };
  }
  return {
    kind: "REPLY",
    status: continueWork ? "IN_PROGRESS" : "COMPLETE",
    objectRef: reply.generationId,
    parts: appendPart(work.production.parts, reply.generationId, !continueWork),
    limits: continueWork ? ["PRODUCTION_IN_PROGRESS"] : undefined,
  };
}

/**
 * Run Nora through the cognitive conductor for a product turn.
 */
export async function runNoraCognitiveTurn(
  input: NoraCognitiveTurnInput,
```


## 11. Fake / Real

| Frontière | Niveau |
|---|---|
| I1 persistence/CAS | INTEGRATION PG |
| I2 mandate effect paths | DEV LIVE API |
| I3 WEB sanitize/outbound | DETERMINISTIC / SCRIPTED |
| I4 mid-work reconcile | DEV LIVE (fence+kill processus) |
| I5 semantic attach | DEV LIVE Agents SDK |
| I6 production multi-tours | DEV LIVE Agents SDK |
| Mutation GitHub REAL | NON |
| Lot 2 | NON engagé |

Claims interdits évités : DETERMINISTIC non présenté comme END-TO-END REAL.

## 12. Dette / exit / réserves

| Réserve | Portée | Propriétaire | Exit |
|---|---|---|---|
| WEB LIVE fournisseur+contexte privé non rejoué C19 | Non bloquant si isolation C14 + sanitize C19 capitalisés | Morris / lot suivant si exigé | Campagne LIVE privée contrôlée |
| Interrupt mid-production pure I6 non capturé | Non bloquant — I4 prouve mid-RUNNING ; I6 prouve conservation multi-tours | Cursor | Optionnel rejeu fence pendant génération longue doc |
| P1–P4 non rejoués en totalité | Non bloquant — capital C18 + chemins I2/I5/I6 | ChatGPT revue | Rejeu ciblé si modification matérielle future |

**P0 ouverts bloquants :** aucun déclaré après I1–I4.

## 13. Décisions Morris / prochaine capacité

- Morris décide après revue indépendante ChatGPT (handoff distant).
- Prochaine capacité **non engagée** : Lot de convergence 2 — Réalisation et restitution autonomes.
- Aucune PR / merge / RECETTE / RELEASE / ADOPTED.

## 14. Verdict

**READY WITH RESERVES**

Lot de convergence 1 : invariants résiduels I1–I6 démontrés sur le candidat DIRTY `6cf33e99` + BUILD `1pvGV0NLFRLhOqgw3Mxn_`.

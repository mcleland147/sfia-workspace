# SFIA STUDIO — P6-HQA-FRESH-01
## FRESH START HUMAN QA — CAMPAIGN INITIALIZATION

**Horodatage:** 2026-10-17 07:11:01 CEST (Europe/Paris)
**GO Morris consommé:** NEW FRESH HUMAN QA CAMPAIGN — P6-HQA-FRESH-01 initialization (2026-10-17)
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Milestone:** P6 — GLOBAL INTEGRATED PRODUCT QA
**Parent campaign:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Fresh campaign:** P6-HQA-FRESH-01
**Cycle:** 9 — QA / validation
**Profil:** CRITICAL
**Capacités:** V3-F01 / V3-F02 / V3-F05 / V3-F11-F12 (si rencontrées) / V3-F14
**CKC:** ckc:studio:qa-validation

---

## 1. Verdict

**P6-HQA-FRESH-01 — WAITING MORRIS AUTH BOOTSTRAP**

Environnement QA métier **vierge QUALIFIED** ; runtime candidat up sur virgin DB ; campagne initialisée ; scénario HQA-FRESH-01 prêt.

**Réserve structurante:** OpenAI LIVE pour Nora sur candidat dirty → **REAL GATE REQUIRED** (ne pas élargir GO P6 REAL historique par analogie).

Ce cycle ≠ HUMAN QA PASS · ≠ P6 GLOBAL PASS · ≠ END-TO-END REAL PASS · ≠ PRODUCT GIT INTEGRATED · ≠ RUNTIME V3 ADOPTED.

**Statut revue:** READY WITH RESERVES (auth + REAL gate).

---

## 2. Git Truth initial / final

| Champ | Valeur |
|-------|--------|
| Remote | mcleland147/sfia-workspace |
| Branche Product | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| P6 campaign WT | qa/sfia-studio-p6-global-integrated-product-qa @ 980064c0 (non modifié) |
| Dirty | EXPECTED — préservé |
| Dirty fingerprint | `1c8005bf124b365a64b25a7260cc088007207dcea3b71c2b5b1987611ba74ff1` |
| Staged | vide |
| Product mutate ce cycle | **AUCUNE** |
| Handoff précédent | d4304659 / eb0f3893 |

### git status --short

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedConfirmationCard.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/types.ts
 M projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts
 M projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
?? projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedGenericMissionDecisionCard.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/genericMissionPresentation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionApplicability.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionContinuity.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
?? projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
?? projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
```

---

## 3. Sources consultées

PROCESSUS: template · routing · guardrails · operating model

Convergence: Build Doctrine · Roadmap

Product: C1 · P1/P2/P3 FOM · P6 contract 07 · p6-qa-integration-state-and-reserves (candidature, non-autorité)

Doctrine/CKC: 30/32/34/35/37 · 09-qa-validation

Handoff P6-MIN-07: sfia/review-handoff @ d4304659 / eb0f3893

Campaign evidence historique (READ): /Users/morris/Projects/sfia-workspace/.tmp-sfia-review/p6-global-integrated-qa/

---

## 4. Convergence Pre-check

| | |
|--|--|
| TARGET | Pilote nouveau Project → Nora → LPS → décisions → PREPARE gouverné |
| CURRENT | DET ciblées CLOSED ; HQA intégré NOT PROVEN ; MIN-07 bloqué session |
| KEEP | Product · Nora · Project create · LPS · HD · OA · PREPARE · Evidence P6 · campagne globale |
| ADAPT/REPLACE | Aucun Product |
| GAPS | session valide · virgin env (clos ce cycle) · HQA naturelle |
| EXIT ce cycle | Campagne init · env qualifié · Project non précréé · scenario Morris |

Roadmap: Phase 5 Human QA track — sous-campagne fraîche, **pas** nouvelle Phase 0.

---

## 5. Campagne P6 de rattachement

- Parent: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Contract: product-simplification/07-…-p6-global-integrated-product-qa.md
- GO P6 EXECUTION / REAL: AUTHORIZED/CONSUMED historiques — **non étendus**
- Evidence seam: lib/p6-campaign-evidence + ledger JSONL
- Aucune reconstruction Phase 0 · aucune nouvelle architecture QA

---

## 6. Identité P6-HQA-FRESH-01

```json
{
  "campaignId": "P6-HQA-FRESH-01",
  "parentCampaignId": "P6-GLOBAL-INTEGRATED-PRODUCT-QA-01",
  "milestone": "P6 \u2014 GLOBAL INTEGRATED PRODUCT QA",
  "macro": "STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01",
  "phaseTrack": "P6 Phase 5 Human QA (fresh sub-campaign)",
  "createdAt": "2026-10-17T07:10:34",
  "candidateBranch": "fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare",
  "candidateHead": "b4c1d86211d372f7b0685be7ce8a5ba7de598e37",
  "originMain": "896ff59c704bfa76df1da1a51705aaf948c1cf0c",
  "p6CampaignBranch": "qa/sfia-studio-p6-global-integrated-product-qa",
  "p6CampaignHead": "980064c05f1769f00d0ef85ef5284a899c6a0d73",
  "evidenceRoot": "/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01",
  "parentEvidenceRoot": "/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/.tmp-sfia-review/p6-global-integrated-qa",
  "historicalCampaignEvidence": "/Users/morris/Projects/sfia-workspace/.tmp-sfia-review/p6-global-integrated-qa/",
  "productDbPath": "/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/qa-dbs/product/oa-product.sqlite",
  "noraSessionDbPath": "/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/qa-dbs/product/nora-session.sqlite",
  "dirtyFingerprintSha256": "1c8005bf124b365a64b25a7260cc088007207dcea3b71c2b5b1987611ba74ff1",
  "rules": [
    "Distinct runIds/projects/verdicts from historical P6 runs",
    "Do not overwrite historical ledger rows",
    "No automatic inheritance of prior PASS",
    "Morris creates Project via Studio UI \u2014 no SQL insert",
    "No Cursor REAL / Execute in this preparation cycle"
  ]
}
```

---

## 7. Derniers deliveries concernés (inventaire validation)

| ID | État constaté | DET existante | Gap HQA | Prio |
|----|---------------|---------------|---------|------|
| NEW_PROJECT_ONBOARDING | PRESENT dirty candidate | historical P6 smokes / readiness tests | natural create by Morris on virgin DB | P0 |
| NORA_QUALIFICATION | PRESENT dirty | Fake-provider DET suites | LIVE spontaneous qualification under REAL gate | P0 |
| COG01_NARRATIVE | PRESENT | partial | Pilot-facing narrative quality | P1 |
| F01_CHAT_FIRST_START | PRESENT dirty | UI tests historical | fresh start UX | P0 |
| CONVERSATION_UI | PRESENT — exact UI01-05 mapping NOT re-audited this cycle | n/a this cycle | observe during HQA | P1 |
| GENERIC_MISSION_PRESENTATION | PRESENT untracked/dirty | M-HD-02 DET PASS | integrated UI with real Pilote | P0 |
| M_HD_01_02 | PRESENT | DETERMINISTIC PASS closed by Morris | integrated Human QA | P0 |
| HUMAN_DECISION | PRESENT | PASS Fake | Morris explicit Accept/Refuse | P0 |
| OA_LPS_CONTINUITY | PRESENT | PASS Fake | re-read after refresh in Product | P0 |
| PREPARE_GENERIC | PRESENT | PASS Fake targeted | PREPARE without Execute in HQA-FRESH-07 | P1 |

Inventaire ≠ chantier hardening. Suites DET non relancées en masse.

---

## 8. Environnement runtime

```json
{
  "timestamp": "2026-10-17T07:10:27",
  "campaignId": "P6-HQA-FRESH-01",
  "runtimeUrl": "http://localhost:3020",
  "betterAuthUrl": "http://localhost:3020",
  "node": "v24.16.0",
  "productDb": "/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/qa-dbs/product/oa-product.sqlite",
  "cursorReal": "0",
  "openaiLivePlanned": "NOT_STARTED \u2014 REAL GATE REQUIRED for dirty candidate Nora LIVE",
  "authStorageState": "EXPIRED as of last probe (2026-10-14 cookies) \u2014 bootstrap required",
  "priorRuntimeStopped": {
    "pid": 69865,
    "reason": "non-virgin MIN-07 DB; replaced for fresh isolation"
  },
  "secretsInEvidence": false
}
```

| Field | Value |
|-------|-------|
| URL | http://localhost:3020 |
| Process | next-server 15.5.20 PID **41566** |
| cwd | candidate projects/sfia-studio/app |
| Prior PID 69865 | STOPPED (DB MIN-07 non-vierge) — identité cwd candidat prouvée |
| CURSOR_REAL | 0 |
| OpenAI LIVE ce cycle | NOT INVOKED |

---

## 9. DB QA et preuve d'isolation

**Méthode:** nouveau fichier SQLite sous hqa-fresh-01 ; schema via Product openProductSqlite ; **aucune** insertion Project SQL ; **aucune** copie d'état métier.

```json
{
  "path": "/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/qa-dbs/product/oa-product.sqlite",
  "exists": true,
  "size": 339968,
  "counts": {
    "oa_projects": 0,
    "oa_human_decisions": 0,
    "oa_execution_contracts": 0,
    "oa_execution_attempts": 0,
    "oa_lps": 0,
    "oa_lps_current": 0,
    "oa_cycle_instances": 0,
    "oa_confirmations": 0
  },
  "proof": "schema-initialized-empty-no-project-insert",
  "timestamp": "2026-10-17T07:10:34",
  "method": "Product openProductSqlite on new path; zero business rows; no SQL Project create"
}
```

Post-boot recount: tous compteurs métier **0**.

Anciennes DB (campagne / MIN-07 copies) **préservées**, non utilisées.

Auth Better Auth = cookie/stateless — identité auth ≠ historique Project.

---

## 10. Better Auth

| Check | Result |
|-------|--------|
| BETTER_AUTH_URL | http://localhost:3020 |
| GET /login | 200 |
| GET /api/auth/get-session (sans bootstrap frais) | 200 body null |
| storageState cookies | EXPIRED 2026-10-14 |
| forceLocalAuthority | NOT USED |

**WAITING MORRIS — AUTH BOOTSTRAP**

Commande: `cd projects/sfia-studio/app && npm run e2e:auth:bootstrap`

Morris effectue OAuth GitHub. Aucun cookie/token dans ce pack.

---

## 11. Provider et REAL gates

```json
{
  "GO_P6_HQA_FRESH_01_PREP": "AUTHORIZED / CONSUMING",
  "GO_P6_EXECUTION_HISTORICAL": "AUTHORIZED / CONSUMED \u2014 do not extend by analogy",
  "GO_P6_REAL_BOUNDED_HISTORICAL": "AUTHORIZED / CONSUMED \u2014 do not extend by analogy to this fresh dirty-candidate HQA Nora LIVE",
  "OPENAI_LIVE_FOR_HQA_FRESH_01": "NOT AUTHORIZED without distinct Morris REAL gate for dirty candidate",
  "CURSOR_REAL": "FORBIDDEN this cycle",
  "EXECUTE": "FORBIDDEN this cycle",
  "AUTH_BOOTSTRAP": "WAITING MORRIS"
}
```

Avant Nora LIVE sur ce scénario fresh dirty: **STOP — MORRIS REAL GATE REQUIRED** (décision distincte).

Fake Nora silencieux pour PASS réel: **interdit**.

---

## 12. Evidence Ledger

- Parent candidate ledger append: `.tmp-sfia-review/p6-global-integrated-qa/evidence-ledger.jsonl` (row INIT)
- Local campaign ledger: `hqa-fresh-01/evidence-ledger.jsonl`
- Historical campaign WT ledger: **non modifié**
- runId: `P6-HQA-FRESH-01-INIT-20261017T0500Z`
- Anciens PASS: **non attribués** à P6-HQA-FRESH-01

---

## 13. Premier scénario Human QA (complet)

# HQA-FRESH-01 — NEW PROJECT → NORA QUALIFICATION

**campaignId:** P6-HQA-FRESH-01
**parentCampaign:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**scenarioId:** HQA-FRESH-01
**preparedAt:** 2026-10-17 07:10:26
**actor:** Morris (Pilote)
**executionMode:** HUMAN
**proofTarget:** REAL-BOUNDARY (browser + auth + Product); Nora LIVE only if REAL gate confirmed

## Point de départ

1. Runtime: http://localhost:3020
2. Authentification Better Auth valide (après bootstrap).
3. DB métier QA vierge (0 Project / 0 HD / 0 EC / 0 Attempt / 0 LPS métier).
4. **Aucun Project précréé** — Morris crée dans Studio.

## Première action

Ouvrir Studio → créer un **nouveau Project** via l'UI normale → formuler librement une intention réelle.

## Parcours attendu

1. Accès Studio authentifié
2. Création nouveau Project (UI)
3. Intention naturelle du Pilote
4. Nora prend la conversation
5. Contexte pertinent mobilisé
6. Clarifications seulement si nécessaire
7. Qualification de la demande
8. Trajectoire cohérente présentée
9. État Project/LPS évolue selon contrat Product
10. Inspection Pilote
11. Appréciation Pilote (notes)

## Oracles (observation Morris)

- Pas de contexte Project ancien
- Pas de décision héritée
- Compréhension utile de l'intention
- Pas de qualification artificielle / Cycle injustifié
- Pas de HumanDecision inventée
- Continuité conversationnelle
- LPS conforme aux actions réelles
- Distinction recommandation / décision
- UI utilisable
- **Aucune exécution implicite** (0 Attempt / 0 Execute / 0 Cursor REAL)

## Conditions d'arrêt

- STOP si Execute / Cursor REAL déclenché
- STOP si contexte ancien réapparaît
- WAITING si HumanDecision structurante requise (Morris décide)
- Si Nora LIVE refusée par gate → noter REAL GATE ; ne pas Fake-passer

## Preuves à capturer (Morris / agent support)

- Screenshots étapes clés
- Project ID créé
- Notes d'appréciation
- runId unique append au ledger candidat


---

## 14. Plan indicatif parcours suivants

# P6-HQA-FRESH-01 — Human QA Plan (indicatif)

preparedAt: 2026-10-17 07:10:26

## Ordre (un sujet à la fois — ne pas ouvrir simultanément)

| ID | Titre | Statut |
|----|-------|--------|
| HQA-FRESH-01 | New Project → Nora qualification | **READY FOR MORRIS** (après auth + REAL si Nora LIVE) |
| HQA-FRESH-02 | Conversation → Project/LPS continuity | PLANNED |
| HQA-FRESH-03 | Qualification → Recommendation | PLANNED |
| HQA-FRESH-04 | Generic Mission Presentation | PLANNED |
| HQA-FRESH-05 | HumanDecision Accept/Refuse | PLANNED |
| HQA-FRESH-06 | OA/LPS currentness et relecture | PLANNED |
| HQA-FRESH-07 | PREPARE générique sans Execute | PLANNED |

IDs non conflictuels avec manifest P6-SC-* (préfixe HQA-FRESH-).

## Non-objectifs

- Pas de P6 GLOBAL PASS ce cycle
- Pas de Human QA PASS sans Morris
- Pas d'Execute / Cursor REAL
- Pas de reconstruction campagne P6 Phase 0


---

## 15. Actions exactes pour Morris

# P6-HQA-FRESH-01 — Fiche Morris (opérateur)

**Date préparation:** 2026-10-17 07:10:26
**Verdict préparation:** WAITING MORRIS AUTH BOOTSTRAP (+ réserve REAL GATE pour Nora LIVE)

## Avant de commencer

### 1) Auth (obligatoire)

Depuis `projects/sfia-studio/app` sur le worktree candidat dirty :

```bash
npm run e2e:auth:bootstrap
```

- Navigateur système (Brave/Chrome) — OAuth GitHub par Morris
- Ne pas partager cookies/tokens
- Vérifier ensuite accès http://localhost:3020/studio **sans** redirect login

### 2) Runtime

- URL: http://localhost:3020
- DB: virgin sous `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/qa-dbs/product/`
- `SFIA_STUDIO_CURSOR_REAL=0`
- OpenAI LIVE: **ne pas démarrer** tant que GO REAL candidat dirty non confirmé

### 3) Premier scénario

Voir `scenarios/HQA-FRESH-01.md`

**Action immédiate après auth :**
Créer un **nouveau Project** dans Studio (UI). Formuler une intention réelle. Observer Nora.

## Ne pas faire

- Importer anciens Projects
- Demander à Cursor d'Accept/Refuse à votre place
- Lancer Execute / Cursor REAL
- Déclarer HUMAN QA PASS sans vos observations

## Après le run

Noter: Project ID, impressions, écarts, captures → espace `hqa-fresh-01/raw-evidence/` + ledger append (nouveau runId).


---

## 16. Fake / Real Qualification

| Axe | Valeur |
|-----|--------|
| Applicable | OUI |
| Entrée | DETERMINISTIC PROVEN ciblé (M-HD etc.) ; HQA intégrée NOT PROVEN |
| Ce cycle | Env virgin + runtime REAL-BOUNDARY prep ; auth NOT PROVEN ; Nora LIVE NOT INVOKED |
| Fake | contexte historique DET uniquement |
| REAL correspondant | browser+auth+Product+provider si gate |
| Claims | PREPARED / WAITING PILOT auth — pas HUMAN QA PASS |

---

## 17. Réserves et dette

| Item | Owner | Exit |
|------|-------|------|
| AUTH-SESSION-EXPIRED | Morris | e2e:auth:bootstrap + get-session non-null |
| OPENAI LIVE dirty candidate | Morris | GO REAL distinct borné |
| Pending offer process-local | Product debt | documenter si restart mid-HQA |
| UI08 visual | optional later | frames+capture |
| Multi-conversation N/I | Product | hors scope |

---

## 18. Fichiers locaux créés (gitignored)

Racine: `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/`

- `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/campaign-identity.json` (1891 bytes)
- `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/deliveries-inventory.json` (3425 bytes)
- `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/environment-snapshot.json` (738 bytes)
- `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/evidence-ledger.jsonl` (1085 bytes)
- `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/gates.json` (505 bytes)
- `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/human-qa-plan.md` (912 bytes)
- `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/logs/studio-dev-hqa-fresh-01.log` (412 bytes)
- `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/logs/studio-dev.pid` (6 bytes)
- `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/morris-operator-brief.md` (1309 bytes)
- `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/qa-dbs/virgin-isolation-proof.json` (653 bytes)
- `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/runs/current.env` (548 bytes)
- `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/scenarios/HQA-FRESH-01.md` (2051 bytes)

Également: `oa-product.sqlite` virgin schema (binaire, non listé en détail).

`.tmp-sfia-review/chatgpt-review.md` — ce Review Pack (réinitialisé mono-cycle).

**Product source / tests / docs versionnés: AUCUNE modification.**

---

## 19. Contrôles

- Runtime cwd candidat + virgin DB path
- Compteurs métier 0 post-boot
- Campaign WT non touché
- Staged Product vide
- 0 Execute / 0 Cursor REAL / 0 OpenAI LIVE call
- Project non précréé (Morris UI)

---

## 20. Verdict final préparation

**P6-HQA-FRESH-01 — WAITING MORRIS AUTH BOOTSTRAP**

Après auth valide (+ GO REAL si Nora LIVE): démarrer HQA-FRESH-01 — Morris crée le Project.

---

## 21. Instruction ChatGPT

Lire Git sfia/review-handoff → sfia-review-handoff/latest-chatgpt-review.md

SFIA STUDIO — P6-HQA-FRESH-01 FRESH START HUMAN QA INITIALIZATION CRITICAL REVIEW.

Vérifier GO · v3/P6 · pas de campagne globale parallèle · isolation · dette · session · REAL · plan HQA · pas de simulation HD · pas de modif Product · preuves · Pack · handoff distant.

---

## 22. Fin de pack

Aucune modification Product.
Review Pack FULL CRITICAL mono-cycle.
Handoff message: docs(review-handoff): prepare P6 HQA fresh start

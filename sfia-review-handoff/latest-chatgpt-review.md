# ChatGPT Review Pack — P6 HUMAN QA ENVIRONMENT BRING-UP & MORRIS OPERATOR HANDOFF

- timestamp: 2026-10-08T15:07:23Z
- cycle: 9 — QA / validation
- profile: CRITICAL
- typology: QA / HUMAN PRODUCT VALIDATION / ENVIRONMENT BRING-UP
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Morris GO P6 EXECUTION: AUTHORIZED / CONSUMED
- Morris GO P6 REAL — BOUNDED CAMPAIGN: AUTHORIZED / CONSUMED
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD (FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- previous handoff tip: a2be2bd5f5ced295876aff662fbd95b22d13dbbb
- project push: NONE
- PR: NONE
- merge: NONE
- P6 PASS: NOT CLAIMED
- runtime v3: NON ADOPTED
- Human QA executed by Cursor: NONE
- Product/runtime code modified: NONE

## Local Git Truth

```
qa/sfia-studio-p6-global-integrated-product-qa
8a196be1a35ffa2d43e52beddc66b51eab56c99c
aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
 M .tmp-sfia-review/chatgpt-review.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/p6-campaign/
```

## Current P6 status (preserved)

- Phase 0 = COMPLETE / INTEGRATED / POST-MERGE VERIFIED
- Phase 1 = PASS / REQUALIFIED WITH CURRENT P6 REAL SMOKES
- Phase 2–4 AUTO evidence = PRESERVED
- Phase 5 = HUMAN QA BATCH READY (19)
- Phase 6 = NOT STARTED / INTERIM ONLY
- Existing smokes / Mode-B / Router-in-situ / DET evidence = NOT regenerated

## Runtime start proof

```json
{
  "command": "cd projects/sfia-studio/app && npm run dev",
  "pid": "11382",
  "port": 3020,
  "url": "http://localhost:3020",
  "health": {
    "login": 200,
    "studioRedirectsToLoginWithoutSession": true,
    "apiAuthGetSession": 200
  },
  "logs": ".tmp-sfia-review/p6-global-integrated-qa/logs/studio-dev-human-qa.log",
  "leftRunning": true
}
```

- Verified HTTP: login=200 · studio without session → /login · project workspace reachable with valid session
- Runtime left running: YES
- Restore command if needed: `cd projects/sfia-studio/app && npm run dev`

## Auth state

```json
{
  "status": "MORRIS_LOGIN_REQUIRED_IN_BROWSER",
  "playwrightSessionValidated": true,
  "loginUrl": "http://localhost:3020/login",
  "cta": "Continuer avec GitHub"
}
```

## Provider / authority

```json
{
  "openaiKeyPresent": true,
  "cursorRealFlag": "1",
  "luna": "ACCESSIBLE (prior P6 snapshot)",
  "sol": "ACCESSIBLE (prior P6 snapshot)",
  "astra": "ACCESSIBLE (prior P6 snapshot)",
  "authorityProfile": "QA_NOMINAL_AUTHORIZED"
}
```

- Profile for Morris Human QA: QA_NOMINAL_AUTHORIZED
- FAIL_CLOSED_NEGATIVE_AUTHORITY: preserved for negative tests only (not used for Morris nominal path)

## Browser readiness

- Phase-1 Chromium/Playwright bands remain QUALIFIED (Large 1440×900 · Compact 1024×768 · Mobile 390×844)
- Human QA itself: Morris uses normal local browser (not Playwright judgment)
- Playwright used only for readiness/screenshots/setup verification

## Human QA batch

- count: 19
- executed: 0
- all status: WAITING HUMAN QA
- operator pack: `.tmp-sfia-review/p6-global-integrated-qa/morris-operator-session.md`
- French HQ-01 brief: `.tmp-sfia-review/p6-global-integrated-qa/morris-hq01-brief-fr.md`
- scenario IDs:
- P6-HQ-01 / P6-SC-MIN-03
- P6-HQ-02 / P6-SC-MIN-04
- P6-HQ-03 / P6-SC-MIN-05
- P6-HQ-04 / P6-SC-SM-01
- P6-HQ-05 / P6-SC-MIN-09
- P6-HQ-06 / P6-SC-PE-01
- P6-HQ-07 / P6-SC-PE-02
- P6-HQ-08 / P6-SC-PE-03
- P6-HQ-09 / P6-SC-PE-05
- P6-HQ-10 / P6-SC-AD-02
- P6-HQ-11 / P6-SC-CM-03
- P6-HQ-12 / P6-SC-DA-02
- P6-HQ-13 / P6-SC-ER-03
- P6-HQ-14 / P6-SC-CO-02
- P6-HQ-15 / P6-SC-JH-02
- P6-HQ-16 / P6-SC-JH-04
- P6-HQ-17 / P6-SC-CK-01
- P6-HQ-18 / P6-SC-SM-02
- P6-HQ-19 / P6-SC-SM-03

## HQ-01 starting state

```json
{
  "scenario": "P6-HQ-01 / P6-SC-MIN-03",
  "projectName": "P6-HQ-01 Deliverable Exit Proof 2026-10-08 15:05",
  "projectId": "prj:6b1151f7-7369-434a-a967-bbfe88c76f53",
  "cycleId": "cyc:p6-hq01-88c76f53",
  "workspaceUrl": "http://localhost:3020/studio/projects/prj%3A6b1151f7-7369-434a-a967-bbfe88c76f53",
  "startingState": "Project created + Cycle instance acknowledged (not started); required Deliverable NOT declared (Pilote HD deferred to Morris)",
  "screen": "Project workspace / Conversation (after login)",
  "ready": true,
  "humanDecisionTaken": false
}
```

Prep result (no HumanDecision):

```json
{
  "projectId": "prj:6b1151f7-7369-434a-a967-bbfe88c76f53",
  "projectName": "P6-HQ-01 Deliverable Exit Proof 2026-10-08 15:05",
  "cycleInstanceId": "cyc:p6-hq01-88c76f53",
  "workspaceUrl": "http://localhost:3020/studio/projects/prj%3A6b1151f7-7369-434a-a967-bbfe88c76f53",
  "prepBoundary": "PROJECT + CYCLE INSTANCE CREATED (not started) — STOP before pilotLifecycle.start / require-artifact HD / validation / close",
  "humanDecisionTaken": false,
  "requireArtifactTaken": false,
  "validationTaken": false,
  "cycleClosed": false,
  "cycleStartDeferredToMorris": true,
  "readyForMorris": true
}
```

## Two NOT-PROVEN scenarios (not forced into the 19)

```json
[
  {
    "scenarioId": "P6-SC-CM-01",
    "title": "Conversational Recommendation materializes without premature HD",
    "reason": "REAL-boundary scenario not yet individually exercised beyond Phase1/3"
  },
  {
    "scenarioId": "P6-SC-CK-02",
    "title": "Insufficient method context handled honestly",
    "reason": "No direct AUTO mapping this continuation"
  }
]
```

- Human resolvable later: POSSIBLE
- Current disposition: ACCEPTABLE NOT-PROVEN for Phase-6 consolidation

## Cognitive human adjudication pack

- status: PENDING PHASE-6 PREPARATION
- no new provider calls this bring-up

## Operator pack excerpt

# P6 HUMAN QA — MORRIS OPERATOR SESSION

- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- timestamp: 2026-10-08T15:06:52Z
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- local HEAD: 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- authorityProfile: QA_NOMINAL_AUTHORIZED
- Studio URL: http://localhost:3020
- Human QA executed: 0 / 19
- default status: WAITING HUMAN QA

## Runtime

- command: `cd projects/sfia-studio/app && npm run dev`
- PID: 11382
- port: 3020
- URL: http://localhost:3020
- logs: `.tmp-sfia-review/p6-global-integrated-qa/logs/studio-dev-human-qa.log`
- left running: YES

## Auth

- Playwright/local cookie path: VALIDATED (session accepted on /studio)
- Morris browser: LOGIN LIKELY REQUIRED (GitHub) — cookies are not shared with Cursor Playwright
- Login URL: http://localhost:3020/login
- CTA: « Continuer avec GitHub »

## HQ-01 prepared state

- Project: P6-HQ-01 Deliverable Exit Proof 2026-10-08 15:05
- Project ID: `prj:6b1151f7-7369-434a-a967-bbfe88c76f53`
- Cycle ID: `cyc:p6-hq01-88c76f53` (created, not started)
- Workspace URL: http://localhost:3020/studio/projects/prj%3A6b1151f7-7369-434a-a967-bbfe88c76f53
- Listed on /studio: True
- Principal visible: True
- HumanDecision invented: NO
- require-artifact taken: NO
- validation taken: NO
- Cycle closed: NO
- prepBoundary: PROJECT + CYCLE INSTANCE CREATED (not started) — STOP before pilotLifecycle.start / require-artifact HD / validation / close

## Scenarios (19)

### P6-HQ-01 — P6-SC-MIN-03
- title: Required Deliverable produced → reviewed → validated → Exit Proof
- family: A-blocking
- starting state: Cycle with required Deliverable acceptance criteria
- setup: CANONICAL PRODUCT PATH
- Morris actions: Required Deliverable produced, reviewed, validated; Exit Proof satisfied only after validation; Cycle can close
- expected observation: Deliverable VALIDATED; ReviewBundle complete; Exit Proof PASS; Cycle CLOSED or exit-eligible
- blocking potential: PRODUCT-BLOCKER
- evidence expected: screenshots + Product state notes under `.tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-SC-MIN-03/`
- status: WAITING HUMAN QA
- verdict: _pending_

### P6-HQ-02 — P6-SC-MIN-04
- title: SUCCESS + Artifact + blocking review → Exit NOT satisfied · Cycle OPEN
- family: A-blocking
- starting state: Cycle with required Deliverable; EC executed to SUCCESS with artifact present; review has blocking findings
- setup: CANONICAL PRODUCT PATH
- Morris actions: Execution SUCCESS and artifact existence do NOT close Cycle; blocking review keeps Exit Proof unsatisfied; Cycle remains OPEN
- expected observation: Attempt SUCCESS; artifact present; Exit Proof FAIL/unsatisfied; Cycle OPEN; blockers visible
- blocking potential: PRODUCT-BLOCKER
- evidence expected: screenshots + Product state notes under `.tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-SC-MIN-04/`
- status: WAITING HUMAN QA
- verdict: _pending_

### P6-HQ-03 — P6-SC-MIN-05
- title: Correction → subsequent EC → re-review → validation → exit
- family: A-blocking
- starting state: Post MIN-04 state: blocking review, Cycle OPEN, prior Attempt SUCCESS with blockers
- setup: CANONICAL PRODUCT PATH
- Morris actions: Correction path produces new EC/Attempt as needed; re-review clears blockers; validation then Exit Proof; no silent reuse of stale Confirmation
- expected observation: New Attempt or corrected artifact; re-review PASS; validation; Exit Proof PASS; provenance chain intact
- blocking potential: PRODUCT-BLOCKER
- evidence expected: screenshots + Product state notes under `.tmp-sfia-review/p6-global-integrated-qa/human-qa/P6-SC-MIN-05/`
- status: WAITING HUMAN QA
- verdict: _pending_

### P6-HQ-04 — P6-SC-SM-01

## Morris HQ-01 brief (FR)

# P6-HQ-01 — Brief Morris (Pilote)

## 1. URL à ouvrir
http://localhost:3020/login

Puis, après connexion :
http://localhost:3020/studio/projects/prj%3A6b1151f7-7369-434a-a967-bbfe88c76f53

(Alternative : http://localhost:3020/studio → ouvrir **P6-HQ-01 Deliverable Exit Proof 2026-10-08 15:05**)

## 2. Connexion
Oui — connexion GitHub requise dans **ton** navigateur (« Continuer avec GitHub »).

## 3. Projet
- Nom : **P6-HQ-01 Deliverable Exit Proof 2026-10-08 15:05**
- ID : `prj:6b1151f7-7369-434a-a967-bbfe88c76f53`

## 4. Cycle
- ID préparé : `cyc:p6-hq01-88c76f53`
- État : créé / acknowledged, **pas démarré** par Cursor
- Type : Delivery (`cyc:delivery`)

## 5. Écran de départ
Espace projet → onglet **Conversation** (workspace principal).

## 6. Première action
En tant que Pilote, avec Nora si besoin :
1. Démarrer / activer le Cycle Delivery.
2. Déclarer qu’un **Deliverable / Artifact est requis** (action Pilote — ne laisse pas Cursor le faire).
3. Faire produire le livrable.
4. Le faire **revue** puis **valider**.
5. Vérifier Exit Proof / éligibilité de sortie **seulement après validation**.

## 7. Ne pas faire encore
- Ne pas marquer le scénario PASS pour toute la campagne.
- Ne pas fermer le Cycle uniquement parce qu’un fichier/artifact existe.
- Ne pas inventer une HumanDecision « pour aller plus vite ».
- Ne pas changer le code Product.

## 8. Observer
- Un artifact présent **sans** validation ne doit **pas** satisfaire Exit Proof.
- Après revue + validation du Deliverable requis → Exit Proof satisfait / Cycle exit-eligible ou fermable selon le Product.
- Aucune invention de décision humaine par Nora.

## 9. Quand s’arrêter et revenir à ChatGPT
Dès que tu as un verdict clair pour **P6-HQ-01** : PASS / FAIL / PASS-WITH-RESERVE, avec ce que tu as vu (et captures si utile). Puis enchaîne HQ-02… selon le batch.


## Reservations

- Morris must login in his own browser (Playwright storage-state ≠ Chrome session)
- Cycle instance prepared but not started; required Deliverable declaration is Pilote HD (CORR-PROOF-06) — deferred to Morris
- srOnly a11y labels « FIXTURE / CURSOR REAL BLOQUÉ » remain in panel markup; they are not a bring-up failure by themselves
- Temporary untracked harness `__tests__/p6-campaign/` remains DO_NOT_COMMIT / THIN ORCHESTRATION

## Anti-claims

- Environment READY ≠ Human QA PASS
- Project prepared ≠ Deliverable validated
- GO REAL consumed ≠ Cursor CLI real executor globally enabled for every path
- No P6 PASS claimed

## Final verdict

**READY FOR MORRIS HUMAN QA**

NEXT MORRIS ACTION = OPEN http://localhost:3020/login THEN EXECUTE P6-HQ-01

REMOTE_MATCHES_LOCAL: YES (verified after publish against actual final local HEAD `8a196be1a35ffa2d43e52beddc66b51eab56c99c`)

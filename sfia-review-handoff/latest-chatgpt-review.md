# SFIA STUDIO NEXT — ML4C Q2 EVIDENCE CLOSURE — REVIEW PACK FULL

**Date :** 2026-11-14 — Europe/Paris
**GO :** MORRIS — Q2 EVIDENCE CLOSURE, READ-ONLY
**Macro-lot :** R5 / ML4C
**Cycle :** 9 — QA / validation (evidence closure)
**Profil :** CRITICAL
**Review Pack :** FULL, mono-cycle
**Review Handoff :** REQUIRED / PUBLISH-IN-CYCLE
**Push produit :** INTERDIT
**Q3 / Q4 / merge / release :** NON AUTORISÉS

**Verdict Cursor (pré-handoff ; SHA/blob définitifs en rapport final post-publish) :**
**ML4C Q2 EVIDENCE CLOSURE ACCEPTABLE FOR CHATGPT REVIEW — NORA LIVE VERIFIED**

GitHub Studio user-OAuth / Studio-mediated REAL READ remains **explicitly PENDING** (authorization CONNECTED pre-Q2; no post-cutover revalidation; installation-token READ already proven in prior Q2 handoff).

---

## 1. Git Truth et sources

### Git Truth (vérifié localement)

```text
Worktree produit: /Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112
Branch: fix/next-semantic-intent-convergence-20261112
HEAD: d936da81ebf7d17eb78cc11da0538df000281a4a
TREE: 276679be1ea139525b2267cde9245b8fb88e9a76
origin/main: 6cda86bde4aa450abb1d23eedd370a9004ddcbc1
origin/build/next-ml4c-functional-convergence: 67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0
PR #676: OPEN / NOT MERGED
Dirty: M .tmp-sfia-review/chatgpt-review.md only
```

### Runtime RECETTE (inchangé pendant ce cycle)

```text
URL: http://127.0.0.1:3200
PID: 41282 next-server (v15.5.29)
CWD: …/sfia-workspace-next-ml4c-recette-build-d936da81/projects/sfia-studio-next/web
Deploy WT HEAD/TREE: d936da81 / 276679be
BUILD_ID file + HTML: n-7E8DgbcVu4g_RJWZoiK
Prior handoff Q2: 9344a79994e296bddff44f05380231f6ee0db681
Prior blob: 6832e94337fc9ded25bfcb432bf0c13d11826d3f
```

**STOP runtime mismatch :** non déclenché.

### Sources

SFIA v2.6 routing + cycle template; SEF/roadmap/ENV/product-versioning; décisions 2026-11-11 / 2026-11-12; code `d936da81` (service, nora-adapter, cognitive-policy, observability, schema, obs-query.ts); handoff Q2 `9344a799`.

---

## 2. Identité du tour (unique)

Recherche PostgreSQL READ ONLY, post-bascule Q2 (`created_at >= 2026-11-14 16:00:00+00`), marqueurs distinctifs copilote / proposition.

**Correspondances assistant « copilote cognitif » post-cutover : 1**
→ pas d'`AMBIGUOUS TURN MATCH`.

| Champ | Valeur |
|---|---|
| conversation_id | `conv_d7b4495b-0e67-453f-ba09-d9cf15127101` |
| preparation_id | `prep_51effa9f-edc5-47fa-81c1-c18838de362a` |
| project_id | `proj_683bcd2e-986a-4015-a58e-060909a75ec0` |
| owner_pilot_id | `pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c` |
| user_message_id | `msg_9672079c-e7df-48cb-ad3d-b03a9d1b180f` |
| assistant_message_id | `msg_9949a7c5-ea7f-4ebc-9ac8-9372c8fe9589` |
| ordinal_user | 57 |
| ordinal_assistant | 58 |
| generation_id | `gen_62bde697-5271-4a4a-a1f1-2c3383cff847` |
| turn_command_id | `tcmd_dafb35ef-186b-4853-9d1b-7e22b46a22c3` |
| operation_id | `op_0abaafba-d153-4a90-b243-b5e082b7ec22` |
| request_id | `req_4c69e31d-ec03-49b5-aa55-0f5e77fabc47` |
| user created_at | 2026-11-14 16:27:38.853966+00 |
| assistant created_at | 2026-11-14 16:27:48.194677+00 |
| status (messages + turn) | COMPLETE |

Extrait minimal USER (préfixe) : demande de confirmation du rôle Nora + différence proposition / action exécutée + interdiction de créer projet/document/décision/Git.

Extrait minimal ASSISTANT (préfixe) : « Bonjour ! Je suis **Nora, copilote cognitif de SFIA Studio**… » — aligné avec l'observation Morris (non utilisée comme preuve fournisseur).

---

## 3. Corrélation D3

`conversation_turn_commands` lie sans ambiguïté :

```text
user_message_id ↔ assistant_message_id ↔ generation_id ↔ operation_id
ordinal_user=57 ↔ ordinal_assistant=58
status=COMPLETE
updated_at=2026-11-14 16:27:48.201+00
```

`result_json` durable contient `noraMode`, `policy`, `attempts[]`, `toolCallsObserved`, `semanticQualification`, flags d'effet.

---

## 4. Preuve fournisseur OpenAI LIVE

### Sink d'observabilité (lecture seule)

```text
Tool: web/scripts/obs-query.ts (npx tsx) — openObsSinkReadOnly + queryObsByOperationId
status: AVAILABLE
sinkDir: …/web/.obs/recette
eventCount: 5
readOnly: true
```

Événements pour `op_0abaafba-…` (tous `lane=RECETTE`, `source_sha=d936da81…`) :

| ts_utc | event_name | Notes |
|---|---|---|
| 16:27:38.872Z | d3.turn.accepted | outcome PARTIAL |
| 16:27:38.899Z | d3.nora.policy_selected | profile_type TEST_BOUNDARY; model gpt-6.1-sol; effort medium |
| 16:27:39.015Z | d3.nora.provider_attempt | attempt_id att_836f1fdc-…; kind stream; model_requested gpt-6.1-sol; outcome PARTIAL (émission pré-drain) |
| 16:27:48.192Z | d3.turn.document_act_qualification | qualification_kind NONE; d4_attempted false; documentary_intent_signal false |
| 16:27:48.204Z | d3.turn.completed | outcome SUCCESS; turn_status COMPLETE; tool_calls 0; attempts 1 |

`build_id` dans le sink : null (non peuplé) — identité build runtime confirmée hors sink (fichier `.next/BUILD_ID` + HTML).

### Matrice de preuve

| Preuve | Valeur |
|---|---|
| Lane | RECETTE |
| Source SHA | d936da81ebf7d17eb78cc11da0538df000281a4a |
| BUILD_ID | n-7E8DgbcVu4g_RJWZoiK (runtime) |
| Nora mode | LIVE (`openai-agents-sdk-live` in result_json) — not fixture |
| Provider contacted | **YES** (attempt record; stream chunks drained after `run()`) |
| Attempt outcome | **SUCCESS** (`structured_stream_drained_no_provisional_json`) |
| Generation status | COMPLETE |
| Model requested | gpt-6.1-sol (`NORA_STUDY_MODEL` / policy / obs meta) |
| Model applied | **UNVERIFIED** (explicit; content ≠ provider model id) |
| Effective cognitive profile | TEST_BOUNDARY / profile analyse |
| Tool calls | 0 |
| Provider request ID | indisponible (non émis dans sink/result) |
| Errors | none on successful attempt |

### Règles de preuve appliquées

- COMPLETE seul ≠ LIVE — ici corrélé à mode LIVE + providerContacted YES + stream SUCCESS.
- `mode=openai-agents-sdk-live` = indice applicatif; contact YES vient du drain SDK post-`run()` (code nora-adapter : chunks → YES).
- Pas de `provider_request_id` inventé.
- Traces SDK non réactivées; **aucun nouvel appel OpenAI** dans ce cycle.
- Fixture path non pris : pas d'événement `d3.nora.fixture_complete`; mode ≠ deterministic-fixture.

---

## 5. Modèle / politique / tentatives

```text
policy.version: ml2-cog-policy-v2-corrective
profileType: TEST_BOUNDARY
profile: analyse
modelRequested: gpt-6.1-sol
modelApplied: UNVERIFIED
effortRequested: medium
effortApplied: UNVERIFIED
reasonCodes: BUDGET_LEN_DEFAULT, PROFILE_TYPE_TEST_BOUNDARY, LANE_RECETTE
attemptId: att_836f1fdc-2f34-4767-a195-1984d7f15557
kind: stream
streaming.attempted: true
streaming.delivered: true
```

---

## 6. Outils réellement observés

```text
toolCallsObserved (result_json): 0
tool_calls (d3.turn.completed meta): 0
d4CharsReturned: 0
Tools authorized in policy_selected meta (available, not called):
  search_project_resources, read_project_document_revision,
  search_conversation_history, read_conversation_messages,
  list_project_git_sources, read_git_file, list_git_refs
```

---

## 7. D2 / D4 / D5 / D6 / Git — preuve négative d'effets

Fenêtre bornée `2026-11-14 16:27:38+00` → `16:27:49+00` + corrélation `operation_id` / `generation_id` (SELECT READ ONLY).

| Domaine | Observation | Classification |
|---|---|---|
| D2 create_project_commands | 0 rows | NO PERSISTED EFFECT |
| D4 documents created | 0 rows | NO PERSISTED EFFECT |
| D4 document_revisions | 0 rows | NO PERSISTED EFFECT |
| D5/D6 business_commands | 0 rows | NO PERSISTED EFFECT |
| D5/D6 human_decisions | 0 rows | NO PERSISTED EFFECT |
| effect_attempts (window / op text) | 0 rows | NO AUTHORIZED/PERSISTED EFFECT |
| observed_git_facts | 0 rows | NO Git WRITE attempt persisted |
| document_publication_refs | 0 rows | NO publication |
| project_cycles open/close | 0 rows | NO cycle effect |

Depuis `result_json` du même tour :

```text
documentSave: null
humanDecisionCreated: false
pilotageEffect: null
pendingEffectBlocked: false
capitalisationAttempted: []
semanticQualificationStatus: QUALIFIED
semantic mode: EXPLAIN (capability d3.converse)
constraints recorded: no project/document/decision/Git
obs d4 qualification: NONE / SEMANTIC_NONE / d4_attempted=false
nextTurnKind: DIALOGUE_INDEPENDANT
```

```text
D2 effects: 0
D4 effects: 0
D5/D6 effects: 0
Git WRITE attempts: 0
Unauthorized effects detected: NO
Scope of proof: turn-scoped DB window + operation_id/generation_id correlation + result_json + obs qualification event
INTENT/QUALIFICATION: EXPLAIN QUALIFIED (not REQUEST_EFFECT)
COMMAND ATTEMPT (mutative): none observed
AUTHORIZED EFFECT: none
PERSISTED EFFECT: none
```

---

## 8. GitHub OAuth et REAL READ

### Distinctions

| Couche | État |
|---|---|
| Studio identity OAuth (Better Auth) | Hors scope preuve tour; Pilote a pu dialoguer (session valide) |
| GitHub App user OAuth (integration_authorizations) | `CONNECTED` for pilot; installation_id `180092114`; has_token=true; connected_at / last_validated_at **2026-11-09** (pre-Q2 cutover) |
| Installation token READ | Déjà VERIFIED dans handoff Q2 `9344a799` (GET repo metadata) — **non rejoué** ici |
| Studio-mediated user REAL READ post-Q2 | **PENDING** — aucune autorisation revalidée depuis cutover; pas de smoke Studio user path dans ce cycle |

```text
Post-Q2 auth updates for pilot: 0 rows
Studio Git REAL READ PROVEN (user path): NO
Installation REAL READ (prior Q2): YES (reference only)
Git WRITE this cycle: 0 / NOT AUTHORIZED
```

Pas de fabrication de session; pas de consentement déclenché.

---

## 9. Audit runtime RECETTE inchangé

```text
PID before/during/after analysis: 41282 (same)
BUILD_ID: n-7E8DgbcVu4g_RJWZoiK
No restart, no .env edit, no script rewrite, no OpenAI call, no PG mutation
```

---

## 10. Artefacts opératoires Q2 — contenu exploitable (§7.2.1)

Fichiers dans `…/sfia-workspace-next-ml4c-recette-build-d936da81/` — **non modifiés** pendant ce contrôle (lecture seule; SHA-256 ci-dessous).

### 10.1 `start-recette.sh`

**SHA-256:** `6475358c4d9e10b3fd9bde0a1d393c2a535fd756793e67035d4a286e4343f666`

**Rôle :** point d'entrée launchd; charge env RECETTE hors Git; force `SFIA_SOURCE_SHA`; force barrière mutations; `next start` loopback 3200.

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=d936da81ebf7d17eb78cc11da0538df000281a4a
# Q2 hard barrier: never open documentary mutations via start script
unset STUDIO_GITHUB_ALLOW_MUTATIONS || true
export STUDIO_GITHUB_ALLOW_MUTATIONS=
export NODE_ENV=production
exec npx next start -H 127.0.0.1 -p 3200
```

**Secrets :** aucun inline; source fichier local mode 600 (non publié).

### 10.2 `rollback-to-67bf6b0b.sh`

**SHA-256:** `fb2c7839db2a87eb5423cb87f697345fc2a8bca5c3d3a1e51979d96346e54fc5`

**Rôle :** rollback **application-only** vers build `67bf6b0b` / `wYKCZCblBxWLiVsNjIr3e` via restauration plist backup + kickstart. **Ne touche pas à la DB.**

```bash
#!/bin/bash
set -euo pipefail
# Application-only rollback to previous RECETTE build. Does NOT restore/alter DB data.
launchctl bootout "gui/$(id -u)/com.sfia.studio.next.recette.ml4" 2>/dev/null || true
cp /Users/morris/Projects/sfia-recette-backups/ml4c-q2-20261114/com.sfia.studio.next.recette.ml4.plist.bak \
  /Users/morris/Library/LaunchAgents/com.sfia.studio.next.recette.ml4.plist
launchctl bootstrap "gui/$(id -u)" /Users/morris/Library/LaunchAgents/com.sfia.studio.next.recette.ml4.plist
launchctl kickstart -k "gui/$(id -u)/com.sfia.studio.next.recette.ml4"
echo "rollback_attempted=YES previous_build=67bf6b0b/wYKCZCblBxWLiVsNjIr3e"
```

**Risques :** `bootout` + `kickstart -k` tuent/relancent le job KeepAlive (interruption courte du service). Dépend de l'existence du plist.bak. **Non exécuté** dans ce cycle.

### 10.3 `com.sfia.studio.next.recette.ml4.plist`

**SHA-256:** `c95bf894e9a4e748dc28f7e44fb4049c8e97b21c3e9c406d199b8c0cf2ef2c4f`

**Rôle :** LaunchAgent KeepAlive/RunAtLoad pointant vers `start-recette.sh` et logs du WT d936da81.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.sfia.studio.next.recette.ml4</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/start-recette.sh</string>
    </array>
    <key>WorkingDirectory</key>
    <string>/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/projects/sfia-studio-next/web</string>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>StandardOutPath</key>
    <string>/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/launchd.out.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/launchd.err.log</string>
    <key>EnvironmentVariables</key>
    <dict>
        <key>PATH</key>
        <string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string>
    </dict>
</dict>
</plist>
```

### 10.4 `switch-plan.md`

**SHA-256:** `f0c9d761e8745ec641e833531635189e5edadd4bd9f200dc0a787a9b1f861711`

```markdown
# Q2 cutover plan — 2026-11-14
1. Preserve old WT: /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-67bf6b0b
2. Build new WT at d936da81
3. bootout launchd, install new plist, bootstrap
4. Verify BUILD_ID / SFIA_SOURCE_SHA / HTTP
5. Rollback script: /Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81/rollback-to-67bf6b0b.sh
```

### 10.5 Cohérence manifeste Q2 (`ops/recette-manifest-q2.yaml`)

**SHA-256:** `e0db08ee38ffa6f88e655dd3df470542980b2648e0252c45a82327935f94ea45`

Cohérent avec runtime actuel (SHA/tree/BUILD_ID/port). Champs `capabilities.openai` / known_gaps du manifeste **pré-évidence** indiquaient encore Nora PENDING — **supersédés** par ce cycle d'évidence (conversation LIVE désormais vérifiée). Manifeste fichier non réécrit (interdit); la vérité à jour est ce Review Pack.

---

## 11. Analyse rollback (sans exécution)

- Restaure uniquement le LaunchAgent vers l'ancien plist (build 67bf / wYKCZ…).
- Pas de rollback de données.
- Risque opérationnel : redémarrage service; KeepAlive peut relancer immédiatement.
- Prérequis : backup plist présent sous `…/ml4c-q2-20261114/`.
- Ancien worktree toujours présent.

---

## 12. Écarts Q2 clôturés vs ouverts

### Clôturés par ce cycle

- Nora LIVE conversation smoke (était PENDING USER INTERACTION) → **VERIFIED** pour le tour `op_0abaafba-…`
- Contenu exploitable des 4 artefacts opératoires manquants dans le handoff précédent → **FOURNI**
- Preuve négative d'effets métier sur le tour explicatif → **ÉTABLIE**

### Encore ouverts

- Studio user-OAuth Git REAL READ E2E post-Q2 → PENDING
- `modelApplied` reste UNVERIFIED (by design)
- `provider_request_id` indisponible
- `build_id` absent du sink obs (runtime BUILD_ID OK par ailleurs)
- UI login DEV chrome (API refuse) — dette UX non traitée
- TEST_BOUNDARY ceilings — inchangés
- Campagne UAT 53 cas — non commencée

---

## 13. Gates Morris non consommés

- Q3 UAT campagne
- Q4 Git REAL WRITE / HumanDecision publication
- OPERATIONAL_VALIDATED
- STABLE / merge / release / ADOPTED
- Push produit / merge PR #676

---

## 14. Verdict

**ML4C Q2 EVIDENCE CLOSURE ACCEPTABLE FOR CHATGPT REVIEW — NORA LIVE VERIFIED**

Conditions remplies :

1. Tour unique identifié
2. Contact OpenAI LIVE confirmé (YES + stream SUCCESS + mode LIVE) sur RECETTE d936da81
3. État métier sans effet non autorisé démontré (scope tour)
4. Contenu opératoire Q2 rendu exploitable
5. RECETTE préservée / runtime inchangé
6. Handoff L3 à publier (identifiants définitifs post-publish dans rapport Cursor)

GitHub user path : **PENDING** — explicite, non dissimulé. N'empêche pas la clôture d'évidence Nora LIVE; peut conditionner certains scénarios Q3 Git-dépendants.

---

## 15. Handoff distant (pré-publication dans ce pack)

```text
Publication: EN ATTENTE — publish-review-handoff.sh
Branch: sfia/review-handoff
File: sfia-review-handoff/latest-chatgpt-review.md
Parent tip at start: 9344a79994e296bddff44f05380231f6ee0db681
```

Le rapport final Cursor post-publish doit porter commit/parent/blob définitifs et la relecture distante. Ne pas traiter cet instantané « EN ATTENTE » comme preuve remote.

### Instruction §9.1 ChatGPT

Relire uniquement le blob distant `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` aux SHA définitifs du rapport final Cursor.

---

*Fin Review Pack FULL — ML4C Q2 EVIDENCE CLOSURE — instantané pré-publication L3*

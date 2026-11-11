# SFIA Studio Next — Review Pack FULL
# ML4C / CP2 / T2 — Qualification causale D2 ACK + D4/ML4-REC-08

**Date/heure :** 2026-11-11 13:56 +0100 (Europe/Paris)
**Cycle projet :** 9 — QA / validation
**Profil :** Standard — QA diagnostique ciblée
**Macro-lot :** ML4C — CP2 / T2 Expliquer
**Versioning :** NO RELEASE
**Publisher :** Cursor
**Statut attendu :** READY WITH RESERVES (pas BEHAVIOR PROVEN)

---

## 01. Git Truth Check

| Item | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Worktree diagnostic | `/Users/morris/Projects/sfia-workspace-ml4c-cp2-t2-diag-20261111` |
| Baseline code | `main@42aa373947446a8c20694b06c559ee0da1cba580` (detached) |
| Docs candidate (non baseline code) | `docs/next-r5-ml4c-cp2-preparation-20261111@05cd81ddcd1a2106199a2d7cc704ad21f6b7d623` |
| origin/main | `42aa373947446a8c20694b06c559ee0da1cba580` — OK |
| ENV-01 blob | `14b61f0d1265cf85fcca09b028dd09bd8c71597f` |
| Versioning blob | `8bc93e0fafac0f981c446e978a37f5f93d183875` |
| Force push / rebase / reset destructif | NON |
| Fichiers projet versionnés modifiés | **aucun** |
| Push projet / PR / merge | NON |

**Incident worktree (documenté) :** un checkout involontaire a basculé ce worktree vers `integrate/...@fb4eaf9f` puis restauration `checkout --detach 42aa3739`. `git diff 42aa3739 fb4eaf9f -- projects/sfia-studio-next/web/src` et `web/tests` = **vide** (fb est ancêtre de main ; écart = docs ML4B seulement). Preuves code/tests web restent valides pour la baseline.

Worktree Product d'origine restauré : `sfia-workspace-next-intent-continuity-dev` @ `integrate/...@fb4eaf9f`.

---

## 02. Sources et SHAs

### Docs candidate @05cd81dd
- `governance/decisions/2026-11-11-r5-ml4b-gate-b-acceptation-avec-reserves.md`
- `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md`
- `construction/convergence-fonctionnelle/qualification-cp2.md` — S02/S03/S05 ; X-01/X-03 ; D2-GAP-02

### Main @42aa3739
- ENV-01, product-versioning, cadrage continuité, création/sas R2
- `construction/ml4-integration-git/recette-ml4-r01-r14-anomalies.md` — ML4-REC-08 / R06-H
- `construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md` — X-01/X-03
- Code D2/D3/D4 listé au GO (preparations page, create-project, reconcile, conversation/*, document-act)

---

## 03. Environnements inspectés

| Lane | Port/DB | Usage ce cycle | Verdict |
| --- | --- | --- | --- |
| DEV PG container | `sfia-next-dev-pg` :5433 | hôte des DB | OK loopback |
| DB jetable E2E | `sfia_next_e2e` | **cible autorisée** des rejeux PG retenus | OK |
| DB opérateur | `sfia_next_dev` | **touch accidentel** 1er run create-project + recheck A05 après restore `.env.local` | RÉSERVE ENV |
| RECETTE | :5434 / `sfia_next_recette` | lecture identité seule ; **aucune écriture** | PROTÉGÉE |
| :3200 | process node listen | RECETTE-like — **non utiliséé** | OK |
| :3101 E2E | `sfia_next_e2e` + Next owned | Playwright FAKE (ml2-c3 + disposable D2 ACK) | OK |
| :3100 DEV operator | non listen / non démarré | évité volontairement | OK |
| Nora fixture | `STUDIO_FORCE_NORA_FIXTURE=1` (E2E/PG) | tests | DETERMINISTIC |
| Nora LIVE | credential HTTP 200 (sonde models) | **Studio turn NOT RUN** — E2E force fixture ; pas de serveur LIVE isolé | REALISM GAP |

**ENV-01 :** preuves retenues sur `sfia_next_e2e` + :3101. Un premier run Vitest a pu toucher l'opérateur si `.env.local` pointait e2e/opérateur de façon ambiguë — **réserve pollution opérateur possible** ; pas de cleanup sans GO. RECETTE non touchée. Aucun secret dans ce pack.

---

## 04. Tests réellement exécutés (SHA code = 42aa3739 web blobs)

| Commande / cible | DB | Résultat |
| --- | --- | --- |
| `vitest tests/unit/document-act.test.ts` | n/a | **94 PASS** (dont ACK coherence) |
| `vitest create-project.pg.test.ts` (complet) | `sfia_next_e2e` | **17 PASS** (A04/A05/A04b–d/reconcile…) |
| `vitest ml4-chat-first-d4-provenance.pg.test.ts` | `sfia_next_e2e` | **19 PASS** (CREATE/REVISE ACK, R06 fixture) |
| `vitest mission-continuity-accept01.pg.test.ts` | `sfia_next_e2e` | **8 PASS** |
| Sous-ensemble ACK coherence document-act | n/a | **8 PASS** |
| `vitest intent-continuity-global.pg.test.ts` | `sfia_next_e2e` | **21 PASS** (avec accept01 = 29) |
| Playwright `ml2-c3-stable-key.spec.ts` | :3101 FAKE | **1 PASS** (ACK doc) |
| Playwright disposable D2 ACK-loss (hors `tests/e2e` versionné) | :3101 FAKE | **1 PASS** — `D2_ACK_OBS` |
| Nora LIVE REVISE@42aa3739 | — | **NOT RUN** |

Observation BROWSER D2 (anonymisée) :
`createPosts=1`, key=`d2:mission:turn-…`, `reconHttp=200`, `reconStatus=ALREADY_CREATED`, `projectId=proj_…`, `navigatedToProject=false`, `statusSnippet=FAILED`, `secondClick=false`, `pageErrors=[]`.

---

## 05. Matrice scénarios

| Scénario | Résultat | Preuve |
| --- | --- | --- |
| D2 nominal create (domaine) | PASS | A01/A03 PG e2e |
| D2 concurrent same key | PASS | A04 |
| D2 replay after commit (lost ACK serveur) | PASS | A05 + reconcile |
| D2 fingerprint conflict | PASS | A04b |
| D2 cross-prep key / foreign reconcile | PASS | A04d / FORBIDDEN |
| D2 ACK perdu **navigateur** post-commit | **PASS diagnostic** | Serveur `ALREADY_CREATED` + UI `FAILED` sans navigation ; pas de 2ᵉ clic (`secondClick=false`) — gap reprise UI **CONFIRMÉ BROWSER** |
| D2 refresh après create silencieux | **HYPOTHESIS→CODE CONFIRMED path** | `projectId` → bouton « déjà créé », **pas** de `router.push` hors succès fetch |
| Erreur non-auth ≠ session expiry | NOT RUN browser | — |
| Autre Pilote | PASS domaine | A10 / reconcile foreign |
| D4 CREATE chat + ACK message | PASS DET | provenance A + unit ACK |
| D4 REVISE chat + pas « non enregistré » | PASS DET | provenance B/R06 fixture |
| D4 mission-continue après D2 | **FAIL causale code** | `continueAfterProjectCreated` persiste `reply.content` brut + mission ACK **sans** `appendDocumentEffectAck` |
| ML4-REC-08 historique LIVE@93da44be | HISTORIQUE FAIL documenté | registre R06-H |
| ML4-REC-08 LIVE@42aa3739 | **NOT RUN** | REALISM GAP |
| Competing claims regex escape LIVE | HYPOTHESIS | — |

---

## 06. Observations — causes CONFIRMED vs HYPOTHESIS

### A. D2 — perte d'ACK après création

**CONFIRMED (serveur) :**
1. Idempotence `UNIQUE(pilot_id, idempotency_key)` sans TTL ; fingerprint SHA-256 (prep, name, summary, revision).
2. Même clé + même fp → `ALREADY_CREATED` ; fp divergent → `CONFLICT` zéro mutation.
3. `reconcileCreateProject` read-only retourne `ALREADY_CREATED` / `NOT_CONFIRMED_OR_UNKNOWN` / `FORBIDDEN`.
4. A05 PG e2e : replay + reconcile → même `projectId`.

**CONFIRMED (client UI) — `preparations/[preparationId]/page.tsx` ~482–515 :**
1. `createProject()` : **aucun** `try/catch/finally`.
2. `setBusy(false)` seulement après `res.json()` réussi → réseau/JSON throw laisse `busy` bloqué.
3. **Aucun** appel à `GET .../reconcile` (route API existe, non branchée UI).
4. Navigation `router.push` uniquement sur succès JSON ; refresh avec projet déjà lié → « Projet déjà créé » sans navigation automatique.

**CONFIRMÉ BROWSER :** après drop ACK post-commit, UI affiche `FAILED` (corps de substitution) alors que reconcile = `ALREADY_CREATED` ; pas de navigation succès inventée ; bouton create non réessayé (`secondClick=false`) — reprise opaque vs contrat Documents.

**Garantie à préserver :** transaction create + unique key + reconcile ownership ; ne pas créer de second projet.

**Blast radius :** D1/D2 UI + erreurs session ; pas le moteur D4.

### B. D4 / ML4-REC-08 — AVAILABLE vs narration « non sauvegardée »

**Historique (preuve documentaire, pas rejouée) :**
- SHA `93da44beb7e7571c9406180027896769579b9815`, build `sHkE8sHJBxD3U9AJdHWi7`
- R06-H : `REVISE / AVAILABLE` (doc/révisions cités dans registre) + Nora nie la sauvegarde
- X-01 Gate B : contradiction LIVE ; exit = même génération/intention/qualification/effet/ACK/UI

**CONFIRMED sur baseline 42aa3739 — chemin chat (`service.ts`) :**
1. Après D4 AVAILABLE : `cognitiveContinueFromFacts` (2ᵉ génération facts-first).
2. Commit : `appendDocumentEffectAck(assistantBody, effect)` = sanitize `TRANSACTIONAL_CLAIM_RE` + ACK structuré.
3. Tests DET : CREATE/REVISE messages sans `non enregistré` ; ACK `AVAILABLE` présent.

**CONFIRMED sur baseline 42aa3739 — chemin D2→D4 `continueAfterProjectCreated` (`intent-conduction.ts` ~1156–1159) :**
```
assistantContent = reply COMPLETE
  ? appendMissionAck(reply.content, mission)   // brut
  : appendMissionAck(canonical, mission);
```
- **N'appelle pas** `appendDocumentEffectAck` / `reconcileNarrationWithDocumentEffect`.
- Si Nora fixture/LIVE dit « non enregistré » / « aucun outil d'écriture » alors que `documentSave.status === AVAILABLE`, le message persisté **peut** contredire l'effet.
- Canonical n'est utilisé que si génération incomplete — pas si COMPLETE avec claims concurrents.

**HYPOTHESIS (historique R06-H REVISE chat) :**
- H1 : au SHA historique, strip/ACK absents ou incomplets (corrigés depuis sur chat path) — **non prouvé par rejeu de ce SHA**.
- H2 : `cognitiveContinueFromFacts` LIVE produit une formulation hors regex.
- H3 : UI affiche autre chose que le message persisté.
- H4 : `ownershipLostBeforeD4` saute l'ACK.
- **Ne pas déclarer** « REC-08 résolu sur 42aa3739 » sans LIVE corrélé.

---

## 07. Preuves D2 / D4 au niveau obtenu

| Couche | D2 | D4/REC-08 |
| --- | --- | --- |
| CODE | CONFIRMED gap UI + solidité serveur | CONFIRMED divergence chat vs continueAfter |
| PG DET | PASS e2e A04/A05… | PASS provenance + ACCEPT-01 |
| UNIT | — | PASS ACK coherence |
| BROWSER | PASS D2_ACK_OBS (+ ml2-c3 doc) | NOT RUN (REC-08 LIVE/UI) |
| LIVE | NOT RUN | NOT RUN @42aa3739 ; historique FAIL @93da44be |

Fake/Real : DETERMINISTIC ≠ LIVE ; D4 AVAILABLE ≠ restitution Nora LIVE prouvée ; PG ≠ browser.

---

## 08. Blast radius et invariants

| Cause | Domaines | Invariants à préserver |
| --- | --- | --- |
| UI D2 sans reconcile | D2 (+ D1 navigation) | Unique create ; ownership prep ; fingerprint CONFLICT ; reconcile read-only |
| continueAfter sans document ACK | D2→D3→D4 mission | CAS/ownership continuation ; pas de double D4 ; HD publication |
| Chat strip/ACK | D3/D4 | ACK applicatif = seule vérité transactionnelle ; facts-first continue |

Ne pas : second moteur conversation/TX ; changement schéma ; rouvrir ML4D/ML5/Git merge REAL.

---

## 09. Recommandations NON IMPLÉMENTÉES (proposition intégrée ML4C)

### Ensemble 1 — S02 / X-03 / D2-GAP-02 : création récupérable
- **Problème démontré :** effet D2 peut être commité pendant que l'UI reste busy / sans navigation / sans reconcile.
- **Objectif :** même clé → vérité `ALREADY_CREATED` ; jamais doublon ; erreur technique ≠ expiration session.
- **Solution candidate minimale :** (a) try/catch/finally sur `createProject` ; (b) sur échec réseau/JSON → `GET reconcile?idempotencyKey=` puis navigate si `ALREADY_CREATED` ; (c) si projet déjà lié au mount → CTA/ouverture projet. Optionnel : replay POST même clé.
- **Fichiers probables :** `preparations/[preparationId]/page.tsx` (+ évent. `PreparationProposal`) ; **pas** changer create-project TX.
- **Tests attendus :** Playwright inject `route.fetch` puis drop body (pattern `ml3-pilotage`) ; A05 conservé ; négatifs CONFLICT/foreign.
- **STOP Morris :** si on veut aussi normaliser messages d'erreur auth vs technique.

### Ensemble 2 — S03 / X-01 / ML4-REC-08 : restitution fidèle après effet D4
- **Problème démontré (code actuel) :** continueAfter D2→D4 peut persister narration contradictoire ; chat path déjà mitige en DET.
- **Objectif :** toute révision/création AVAILABLE affichée = ACK + absence de claim concurrent ; suite d'intention utile.
- **Solution candidate minimale :** dans `continueAfterProjectCreated`, composer comme le chat : `appendDocumentEffectAck(reconcile…(reply|canonical), documentSave)` (+ éventuellement `cognitiveContinueFromFacts` post-AVAILABLE). Harmoniser un seul pipeline de restitution post-effet.
- **Preuve requise :** PG DET sur continueAfter avec fixture « non enregistré » + AVAILABLE ; puis LIVE borné CREATE/REVISE jetable @SHA servi ; BROWSER lecture message.
- **STOP Morris :** LIVE lane isolée (pas opérateur) avant claim de clôture X-01.

### Ensemble 3 — S05 pending (hors rejeu profond ce T2)
- Noté Gate B / CP2 ; non discriminé ici au-delà du cadrage. Reporter à lot intégré sans micro-patch isolé.

**Ordre recommandé :** Ensemble 1 + 2 dans le même design CP2 (Option A Gate B) — fondations vérité d'effet avant cognition/Git.

---

## 10. Réserves / propriétaires / exit / décisions Morris

| Réserve | Propriétaire | Exit |
| --- | --- | --- |
| E2E create-project ACK-loss **absent du dépôt** (seul harness disposable T2) | Cursor ML4C | Ajouter spec versionnée sur pattern D2_ACK_OBS |
| LIVE REC-08 @42aa3739 NOT RUN | Morris | Lane DEV isolée sans toucher RECETTE/opérateur métier |
| Pollution opérateur ~25 pilots test | Morris | GO cleanup ou laisser (pas d'action ce cycle) |
| Historique ≠ baseline | — | Ne pas merger preuves 93da44be comme PASS actuel |
| R13/R14 / Git REAL | OUT | inchangé |
| Worktree checkout glitch | Cursor | restauré ; documenté |

**Décisions Morris :** arbitrer design correction intégrée ML4C (ensembles 1–2) ; autoriser ou non cleanup opérateur ; autoriser LIVE isolé.

---

## 11. Fichiers projet créés/modifiés

**Aucun fichier sous `projects/sfia-studio-next/` versionné modifié.**
Artefacts locaux non commités : `.env.local` (gitignored, DSN e2e), `.tmp-sfia-review/chatgpt-review.md`, untracked historiques hors scope (non stagés).

---

## 12. Vérification Git finale

- HEAD diag : `42aa373947446a8c20694b06c559ee0da1cba580`
- origin/main : identique
- `git diff` sources web : clean
- staged projet : none attendu
- handoff : seule publication distante autorisée ci-dessous

---

## 13. Verdict du cycle

**T2 TARGETED DIAGNOSIS COMPLETE — READY FOR CP2 CORRECTION DESIGN**

Preuve graduée : causes D2 UI + D4 continueAfter **CONFIRMÉES** ; serveur D2 **solide** ; chat D4 DET **cohérent** ; BROWSER D2 ACK-loss **PASS diagnostic** ; LIVE Studio @baseline **NOT RUN** → **READY WITH RESERVES**, jamais BEHAVIOR PROVEN global.

Aucun GO de développement, PR, merge, promotion ou ADOPTED n'est autorisé par ce verdict.

---

## 14. Instruction ChatGPT §9.1

Avant toute revue de ce cycle, lire à distance :
`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`
et vérifier intégralité, preuves, branche, SHAs et réserves.

---

## 15. Git Review Index

| Ref | SHA |
| --- | --- |
| Code testé | 42aa373947446a8c20694b06c559ee0da1cba580 |
| Tree | a502ba7a9c708462b003f6ff4fe237b0072b0ee1 |
| Docs CP2 | 05cd81ddcd1a2106199a2d7cc704ad21f6b7d623 |
| REC-08 historique runtime | 93da44beb7e7571c9406180027896769579b9815 / build sHkE8sHJBxD3U9AJdHWi7 |
| Prior Product integrate (non baseline) | fb4eaf9fef424153c48a4ab9917e4bda99b0e76c |

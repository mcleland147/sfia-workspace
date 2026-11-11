# SFIA Studio Next — Review Pack FULL
# ML4C — Cycle 13 PR readiness (publication branche + ouverture PR)

**Date/heure :** 2026-11-11 19:59 CET (2026-11-11 18:59 UTC)
**Cycle :** 13 — PR readiness
**Profil :** Critical
**Typologie :** EVOL / PR readiness du candidat existant (pas de nouveau cycle de construction)
**Niveau pack :** FULL
**Review Handoff :** required / publish-in-cycle
**Version produit :** NO RELEASE — `0.0.0-dev`
**Merge :** NON AUTORISÉ (GO PR readiness seulement)

---

## 0. Nature de ce cycle

Ce pack décrit **PR readiness** : Git Truth, push de `build/next-ml4c-functional-convergence`, ouverture PR #676, lecture CI.

**Aucun nouveau diff produit** n'a été créé dans ce cycle. HEAD candidat inchangé : `ba91cf71`.

Le pack précédent (`c0afc836` / blob `673d37d7`) portait sur le correctif S03/S05.  
**Clarification métadonnée :** l'index interne de ce handoff antérieur citait une tip/blob parent (`817a7434` / `2a6c184e`) distincte du tip distant réel `c0afc836` / blob `673d37d7` — artefact d'index non autoréférentiel ; les valeurs `git rev-parse` distantes font foi.

Verdict ChatGPT (mandat Morris, section 5) sur le correctif :
**ML4C S03/S05 CORRECTIVE — ACCEPTED WITH CARRIED RESERVES**  
**READY FOR BOUNDED PR READINESS**  
**NOT GLOBAL ML4C BEHAVIOR PROVEN**

---

## 1. Git Truth Check (avant push)

| Contrôle | Résultat |
| --- | --- |
| Remote | `https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `build/next-ml4c-functional-convergence` |
| HEAD local | `ba91cf71e8b1ee00e937fba350d8c1aa6c0a2112` — **MATCH** |
| Tree | `9d2770066454289d7797c6e28c24d244d40c396b` — **MATCH** |
| origin/main (après fetch) | `6d237452680640324eeadbb18f4601fd7de99850` — **inchangé** |
| Merge-base | `6d237452…` — **MATCH** |
| Commits (3) | `cbfadadc`, `cb0738b5`, `ba91cf71` — **MATCH** |
| Branche distante avant push | **absente** |
| Dirty produit | aucun (seul `.tmp-sfia-review` local) |
| `git diff --check` | PASS |
| Reset / force push | AUCUN |

**Verdict Git Truth :** PASS. Main n'a pas évolué. Push autorisé.

---

## 2. Sources consultées

- Processus SFIA v2.6 : routing guide, operating model, rules, execution template (§4.3.0b, §2.0.H, §3, §5, §7, §7.10, §9.1)
- CKI Next `13-pr-readiness.md`
- Gouvernance main : SEF, roadmap, ENV-01, product-versioning, naming
- Architecture / vision / conduite intentions (cadrage)
- Branche CP2 `docs/next-r5-ml4c-cp2-preparation-20261111@ab0c2ba3` (qualification, design, contrat, décisions) — **non mergée dans cette PR**
- delivery-history + handoff distant `c0afc836` / blob `673d37d7`

---

## 3. Périmètre `main..ba91cf71` (15 fichiers)

```
A	projects/sfia-studio-next/construction/convergence-fonctionnelle/s04-cognitive-evaluation-baseline.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/reconcile/route.ts
M	projects/sfia-studio-next/web/src/app/portfolio/page.tsx
M	projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
M	projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
M	projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
A	projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts
M	projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
```

Stat : +834 / −69.

Contrôles :
- Secrets : aucun pattern dans le diff
- Migrations / workflows CI / SEF / roadmap / `.env` : **aucun**
- Package : `0.0.0-dev` inchangé
- Doctrine / RECETTE / STABLE config : **non touchés**

### Contributions S01–S07 (rappel candidat)

| # | Contenu | Statut preuve antérieure | Réserve |
| --- | --- | --- | --- |
| S01 | Portefeuille sans index fictif | PASS (unit) | — |
| S02 | D2 ACK reconcile + taxonomie | PASS (e2e D2_ACK_OBS) | LIVE N/A |
| S03 | D4 statuses fidèles (UNKNOWN≠FAILED) | PASS (unit+PG+Atlas) | LIVE N/A |
| S04 | Baseline cognitive doc | **DOCUMENTED / INCOMPLETE** | qualité Nora |
| S05 | Independent Q + pending preserve | PASS local ; **régression CI ouverte** (ci-dessous) | LIVE N/A |
| S06 | SCRIPTED Git | PASS SCRIPTED | **REAL NOT RUN** |
| S07 | Non-régression | **PARTIAL** | LIVE/REAL/S04 + CI e2e |

**Pas de BEHAVIOR PROVEN global.**

---

## 4. Preuves : déjà établies vs ce cycle

### Déjà établies sur `ba91cf71` (cycle correctif — **non réexécutées** ici)
TypeScript, lint, build, 342 unit, PG continuité/pilotage/create, Playwright D2_ACK/Atlas/S05 — PASS locaux.

### Nouvelles preuves de ce cycle
1. Push distant SHA/tree exacts confirmés.
2. PR #676 ouverte.
3. **CI GitHub exécutée** sur le même HEAD.

### CI GitHub — résultats réels

| Check | Résultat |
| --- | --- |
| Detect SFIA Studio changes | PASS |
| Detect SFIA Studio Next changes | PASS |
| Build and validate SFIA Studio | SKIPPED (hors scope) |
| SFIA Studio Required Gate | PASS |
| Build and validate SFIA Studio Next | **FAIL** |
| SFIA Studio Next Required Gate | **FAIL** |

Run Next CI : `43081606792` — https://github.com/mcleland147/sfia-workspace/actions/runs/43081606792  
Job validate : `130735397123`

Étapes validate réussies avant échec : TypeScript, ESLint, Build, Vitest unit, migrations, Vitest PG, Install Playwright.  
Échec : **Playwright BROWSER FAKE** (16 passed / 1 failed). Secrets scan / whitespace skipped après fail.

#### Échec Playwright — qualification

- Test : `tests/e2e/ml3-pilotage.spec.ts:306` — `ML3 CR-02: ACK perdu puis reload sans double OPEN_CYCLE`
- Assertion : `thread-pending-banner` non visible après ACK 502 sur « Ouvre le cycle cadrage. »
- Reproduction locale du classificateur S05 :
  - `looksLikeIndependentDialogue("Ouvre le cycle cadrage.")` → **`true`** (bug)
  - `looksLikeIndependentDialogue("Ouvre un cycle cadrage.")` → `false`
- Cause : `PILOTAGE_SIGNAL_RE` n'accepte que `ouvre (un )?cycle`, pas `ouvre le cycle`. Le tour métier est traité comme dialogue indépendant → **`rememberPending` non appelé** → pending banner absent après ACK perdu.
- Impact : régression CR-02 / S05 Decision 1 trop permissive sur OPEN_CYCLE ; required gate Next FAIL ; **PR non merge-ready**.
- Réparation proposée (hors GO actuel — nécessite GO correctif / autorisation Morris) :
  1. Étendre `PILOTAGE_SIGNAL_RE` : `ouvre\s+(?:(?:un|une|le|la|ce|cet)\s+)?cycle`
  2. Unit : « Ouvre le cycle… » non-indépendant
  3. Rejouer `ml3-pilotage` CR-02 + suite Playwright
  4. Nouveau commit sur la même branche + CI verte avant tout merge GO

**Aucun contournement de check. Aucune modification structurante appliquée dans ce cycle.**

---

## 5. Publication branche

| Item | Valeur |
| --- | --- |
| Push | normal `-u`, **sans --force** |
| Remote HEAD | `ba91cf71e8b1ee00e937fba350d8c1aa6c0a2112` |
| Remote tree | `9d2770066454289d7797c6e28c24d244d40c396b` |
| Commits distants | 3 attendus |
| Fichiers | 15 |

---

## 6. Pull Request

| Item | Valeur |
| --- | --- |
| Numéro | **#676** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/676 |
| Base | `main` @ `6d237452…` |
| Head | `build/next-ml4c-functional-convergence` @ `ba91cf71…` |
| Titre | feat(next): ML4C integrated functional convergence |
| Auto-merge | **null / non activé** |
| mergeStateStatus | UNSTABLE (CI fail) |
| Merge | **NON AUTORISÉ** |

CP2 documentaire : dépendance de contenu signalée ; branche CP2 **non incluse**.

---

## 7. ENV-01

- Ce cycle : **pas de nouveaux tests mutatifs locaux** (ENV-01 N/A pour mutations de ce cycle ; CI a utilisé lane éphémère + `sfia_next_e2e`).
- Chiffre 8850 : **historique**, non préflight de ce cycle.
- RECETTE/STABLE : non mutés.
- Nora LIVE / Git REAL : NOT RUN.

---

## 8. Fake / Real

| Couche | Statut |
| --- | --- |
| Nora FAKE (CI + local antérieur) | USED |
| Nora LIVE | NOT RUN |
| Git SCRIPTED | USED (CI Vitest PG) |
| Git REAL | NOT RUN |
| Browser FAKE CI | **FAIL** (1 test CR-02) |

---

## 9. Versioning / risques

- NO RELEASE / `0.0.0-dev`
- Risque d'intégration : classifier S05 laisse passer un OPEN_CYCLE formulé avec « le » comme dialogue indépendant → perte de pending client après ACK perdu (CR-02).
- ML4D / Gate C / réception ML4C / RECETTE : **hors scope**

---

## 10. Git Review Index

| Ref | SHA |
| --- | --- |
| main base | `6d237452680640324eeadbb18f4601fd7de99850` |
| candidat / PR head | `ba91cf71e8b1ee00e937fba350d8c1aa6c0a2112` |
| tree | `9d2770066454289d7797c6e28c24d244d40c396b` |
| PR | #676 |
| CI Next run | `43081606792` |
| handoff précédent | tip `c0afc836` / blob `673d37d7` (valeurs `git rev-parse` ; index interne antérieur non autoréférentiel) |
| ce handoff | *(tip/blob après publish — utiliser `git rev-parse origin/sfia/review-handoff`)* |

---

## 11. Verdict Cursor

**ML4C PR OPEN — CI FAILED**  
**NOT MERGE READY**

WITH LIVE/REAL AND S07 RESERVES CARRIED  
PLUS régression Playwright CR-02 liée au classificateur S05 (`Ouvre le cycle`).

Gate Morris merge : **bloqué** jusqu'à correctif + CI verte + verdict ChatGPT + GO merge explicite.

---

## 12. Instruction à ChatGPT

Relire la PR #676 à distance et les checks (run `43081606792`).
Comparer les fichiers au contrat ML4C.
Vérifier les réserves S04/S06/S07.
Qualifier la régression CR-02 / classifier S05.
**Ne pas proposer de merge** sans verdict indépendant et autorisation explicite de Morris.

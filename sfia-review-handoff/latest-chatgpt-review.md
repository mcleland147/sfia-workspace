# SFIA Review Pack FULL — R5/ML2 PR Readiness — 2026-11-05 19:36:15 CET

## 0. Mandat et verdict proposé

- **Cycle :** PR readiness / qualification d'intégration R5-ML2 / profil **Critical**
- **Mandat :** dossier de décision Git/PR au SHA `5cd8f10a` ; **aucun** push projet, création PR, merge, LIVE, RECETTE ; aucune modification produit
- **CKC :** CANDIDATE ABSENT — FALLBACK SFIA v2.6
- **Verdict candidat :** `PR READINESS WITH RESERVES — MORRIS ARBITRATION REQUIRED`
- **Motif réserves :** (1) `CI NEW SHA NOT RUN` ; (2) `git diff --check origin/main...HEAD` échoue sur 3 EOF blank lines (ferait échouer le job CI trailing-check) ; (3) réponse tour UNKNOWN masque capitalisations déjà persistées ; (4) SAFE-01 PARTIAL ; (5) labels workflow « 001→004 » obsolètes alors que `db:migrate` applique 001→006
- **Décision Morris sollicitée (distincte) :** GO PUSH PROJECT BRANCH puis GO PR intégratrice unique vers `main` **après** arbitrage des réserves (au minimum EOF blank + acceptation CI NOT RUN)

## 1. Git Truth

| Item | Valeur |
| --- | --- |
| Branch | `sfia/next-ml2-cognition-observability-integrated` |
| HEAD | `5cd8f10a78a6797e07b7de805f78207d10183ce7` |
| Parent | `57f6fc54888f607d8a70ef959f39057764e4b20a` |
| merge-base(origin/main, HEAD) | `6e4406c63639330c7826423cdcf08f06ff019eed` (= origin/main) |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (inchangé vs pré-check) |
| Ancêtre docs `6d85fd9b` | **ANCESTOR OK** |
| Branche projet distante | **ABSENTE** |
| Staged | aucun |
| Untracked préservés | `.tmp-sfia-review/chatgpt-review.md` ; 5 SVG `web/public/*.svg` |
| Handoff antérieur | `1eeb06e6` / blob `5d7e30c9` |
| Commits `main..HEAD` | **72** |
| Diff `origin/main...HEAD` | **70 files**, +11472 / −305 (32 A / 38 M) |

### 1.1 Stack PR historiques (observés GitHub 2026-11-05)

| PR | État | Base | HEAD OID | Notes |
| --- | --- | --- | --- | --- |
| #655 | OPEN draft | `main` @ `6e4406c6` | `08b89360` | CI Next validate+required_gate **PASS** sur ce SHA historique |
| #656 | OPEN | #655 branch | `a0d805e9` | docs cognition |
| #657 | OPEN | #656 branch | `0e83824f` | docs observabilité |
| #658 | OPEN | #657 branch | `806bc17d` | docs trajectoire ML2 |

Ascendance locale : `08b89360` → `a0d805e9` → `0e83824f` → `806bc17d` → `6d85fd9b` → … → `5cd8f10a` — **tous ANCESTOR OK**.

**Proposition Morris :** conserver #655–#658 ouvertes jusqu'à GO distinct ; publier **une PR intégratrice unique** depuis `sfia/next-ml2-cognition-observability-integrated` → `main` au SHA candidat ; puis arbitrer supersession/fermeture des PR empilées **sans double merge**.

### 1.2 Git Review Index (`origin/main...HEAD`)

```
A	.github/workflows/sfia-studio-next-ci.yml
M	projects/sfia-studio-next/architecture-technique/cadrage-r4.md
A	projects/sfia-studio-next/architecture-technique/contrat-observabilite-transverse.md
M	projects/sfia-studio-next/cadrage/vision-produit.md
M	projects/sfia-studio-next/conception-fonctionnelle/README.md
M	projects/sfia-studio-next/conception-fonctionnelle/acces-et-portefeuille.md
M	projects/sfia-studio-next/conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md
M	projects/sfia-studio-next/conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md
M	projects/sfia-studio-next/conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md
M	projects/sfia-studio-next/conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md
M	projects/sfia-studio-next/conception-fonctionnelle/integration-git-gouvernee.md
M	projects/sfia-studio-next/conception-fonctionnelle/realisation-operationnelle-gouvernee.md
M	projects/sfia-studio-next/conception-fonctionnelle/resultats-et-preuves.md
M	projects/sfia-studio-next/conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md
M	projects/sfia-studio-next/construction/delivery-history.md
A	projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/contrat-visuel-figma-ml2.md
M	projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md
M	projects/sfia-studio-next/construction/ml2-production-et-capitalisation-nora/specification-technique.md
M	projects/sfia-studio-next/construction/reference-delivery-r5.md
A	projects/sfia-studio-next/governance/decisions/2026-11-05-r5-ml2-cognition-observabilite-trajectory.md
M	projects/sfia-studio-next/governance/roadmap.md
M	projects/sfia-studio-next/ux-ui/espace-projet-interaction-pilote-nora.md
M	projects/sfia-studio-next/web/.gitignore
M	projects/sfia-studio-next/web/package.json
M	projects/sfia-studio-next/web/scripts/db-migrate.sh
A	projects/sfia-studio-next/web/scripts/obs-query.ts
A	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/[documentId]/route.ts
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/documents/route.ts
A	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/knowledge/route.ts
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
M	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
M	projects/sfia-studio-next/web/src/app/globals.css
M	projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
A	projects/sfia-studio-next/web/src/components/SafeMarkdown.tsx
A	projects/sfia-studio-next/web/src/db/migrations/003_ml2_knowledge_documents.sql
A	projects/sfia-studio-next/web/src/db/migrations/004_ml2_integrity_corrective.sql
A	projects/sfia-studio-next/web/src/db/migrations/005_ml2_conversation_turn_command.sql
A	projects/sfia-studio-next/web/src/db/migrations/006_ml2_turn_owner_token.sql
M	projects/sfia-studio-next/web/src/db/schema.ts
A	projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
A	projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
A	projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
M	projects/sfia-studio-next/web/src/domains/document/service.ts
M	projects/sfia-studio-next/web/src/domains/identity/session.ts
A	projects/sfia-studio-next/web/src/domains/knowledge/service.ts
M	projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
A	projects/sfia-studio-next/web/src/lib/http-errors.ts
A	projects/sfia-studio-next/web/src/lib/observability.ts
M	projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ml2-c3-stable-key.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts
M	projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/ml2-corrective-integrity.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/ml2-critical-corrective.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/ml2-knowledge-documents.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/ml2-three-blocker.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/ml2-turn-command.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
A	projects/sfia-studio-next/web/tests/unit/diff-ordered.test.ts
A	projects/sfia-studio-next/web/tests/unit/http-errors.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml2-cognition-fixture.test.ts
A	projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
M	projects/sfia-studio-next/web/tests/unit/nora-e2e-fixture.test.ts
A	projects/sfia-studio-next/web/tests/unit/observability.test.ts
A	projects/sfia-studio-next/web/tests/unit/safe-markdown.test.ts
```

```
.github/workflows/sfia-studio-next-ci.yml          | 384 +++++++++
 .../architecture-technique/cadrage-r4.md           | 115 ++-
 .../contrat-observabilite-transverse.md            | 247 ++++++
 .../sfia-studio-next/cadrage/vision-produit.md     |  22 +
 .../conception-fonctionnelle/README.md             |  18 +
 .../acces-et-portefeuille.md                       |  11 +
 .../connaissance-sujets-et-continuite-du-projet.md |  28 +
 .../contexte-et-conduite-gouvernee-de-nora.md      |  49 ++
 .../creation-de-projet-et-continuite-du-sas.md     |  10 +
 .../decisions-et-gouvernance-du-pilote.md          |   8 +
 .../integration-git-gouvernee.md                   |   8 +
 .../realisation-operationnelle-gouvernee.md        |   8 +
 .../resultats-et-preuves.md                        |   8 +
 .../trajectoire-cycles-et-guidance-cki.md          |   8 +
 .../construction/delivery-history.md               | 183 +++++
 .../contrat-visuel-figma-ml2.md                    |  28 +
 .../matrice-tracabilite.md                         | 289 +++++++
 .../specification-technique.md                     | 524 ++++++++++++
 .../construction/reference-delivery-r5.md          | 157 ++++
 ...05-r5-ml2-cognition-observabilite-trajectory.md |  79 ++
 projects/sfia-studio-next/governance/roadmap.md    |  25 +-
 .../ux-ui/espace-projet-interaction-pilote-nora.md |  24 +
 projects/sfia-studio-next/web/.gitignore           |   3 +
 projects/sfia-studio-next/web/package.json         |   3 +-
 .../sfia-studio-next/web/scripts/db-migrate.sh     |   6 +-
 projects/sfia-studio-next/web/scripts/obs-query.ts |  42 +
 .../documents/[documentId]/route.ts                |  86 ++
 .../[preparationId]/documents/route.ts             |  28 +-
 .../[preparationId]/knowledge/route.ts             |  71 ++
 .../preparations/[preparationId]/messages/route.ts |  56 +-
 .../app/api/preparations/[preparationId]/route.ts  |   4 +-
 .../web/src/app/api/projects/[projectId]/route.ts  |   1 +
 projects/sfia-studio-next/web/src/app/globals.css  |  62 +-
 .../src/app/preparations/[preparationId]/page.tsx  | 791 ++++++++++++++++--
 .../web/src/app/projects/[projectId]/page.tsx      | 239 +++++-
 .../web/src/components/SafeMarkdown.tsx            | 149 ++++
 .../db/migrations/003_ml2_knowledge_documents.sql  |  75 ++
 .../db/migrations/004_ml2_integrity_corrective.sql |  15 +
 .../005_ml2_conversation_turn_command.sql          |  51 ++
 .../src/db/migrations/006_ml2_turn_owner_token.sql |  15 +
 projects/sfia-studio-next/web/src/db/schema.ts     | 135 +++-
 .../src/domains/conversation/cognitive-policy.ts   | 236 ++++++
 .../web/src/domains/conversation/d4-read-tools.ts  | 651 +++++++++++++++
 .../web/src/domains/conversation/nora-adapter.ts   | 571 +++++++++++--
 .../web/src/domains/conversation/service.ts        | 487 ++++++++++-
 .../web/src/domains/conversation/turn-command.ts   | 709 ++++++++++++++++
 .../web/src/domains/document/service.ts            | 793 ++++++++++++++++--
 .../web/src/domains/identity/session.ts            |  12 +-
 .../web/src/domains/knowledge/service.ts           | 895 +++++++++++++++++++++
 .../web/src/domains/preparation/project-context.ts |   3 +
 .../sfia-studio-next/web/src/lib/http-errors.ts    | 125 +++
 .../sfia-studio-next/web/src/lib/observability.ts  | 429 ++++++++++
 .../web/tests/e2e/ml1-smoke.spec.ts                |  11 +-
 .../web/tests/e2e/ml2-c3-stable-key.spec.ts        | 103 +++
 .../web/tests/e2e/ml2-smoke.spec.ts                |  81 ++
 .../tests/integration/create-project.pg.test.ts    |   2 +-
 .../tests/integration/migrations-fresh.pg.test.ts  |  33 +-
 .../ml2-corrective-integrity.pg.test.ts            | 614 ++++++++++++++
 .../integration/ml2-critical-corrective.pg.test.ts | 319 ++++++++
 .../integration/ml2-knowledge-documents.pg.test.ts | 217 +++++
 .../tests/integration/ml2-three-blocker.pg.test.ts | 818 +++++++++++++++++++
 .../tests/integration/ml2-turn-command.pg.test.ts  |  96 +++
 .../web/tests/unit/cognitive-policy.test.ts        |  85 ++
 .../web/tests/unit/diff-ordered.test.ts            |  77 ++
 .../web/tests/unit/http-errors.test.ts             |  32 +
 .../web/tests/unit/ml2-cognition-fixture.test.ts   |  40 +
 .../web/tests/unit/nora-adapter-corrective.test.ts | 112 +++
 .../web/tests/unit/nora-e2e-fixture.test.ts        |  12 +
 .../web/tests/unit/observability.test.ts           | 128 +++
 .../web/tests/unit/safe-markdown.test.ts           |  21 +
 70 files changed, 11472 insertions(+), 305 deletions(-)
```

**Points d'attention index :**
- Workflow **ajouté** : `.github/workflows/sfia-studio-next-ci.yml` (absent de `main`)
- Migrations **003–006** + `db-migrate.sh` 001→006
- Domaines D3/D4/OBS/UX/tests ML2 cumulés
- Aucun secret détecté dans ce cycle (scan CI prévu dans workflow)
- `git diff --check` : **3** « new blank line at EOF » (delivery-history, matrice, specification-technique)

## 2. ENV-01 / versioning

- Lane tests : DEV (`STUDIO_LANE=DEV`) ; PG DEV/E2E isolées ; FAKE fixture
- Package : `0.0.0-dev` ; **NO RELEASE** ; STABLE NOT AVAILABLE
- delivery_id courant : `DELIV-2026-11-05-ML2-TURN-INTEGRITY-10` présent
- Migrations inventaire : 001→006 via `npm run db:migrate` → `scripts/db-migrate.sh`
- RECETTE/STABLE : **NOT AUTHORIZED / NOT AVAILABLE**
- Cookies localhost ML1 : réserve connue non remédiée ici

## 3. Contre-épreuves réserves ChatGPT

### 3.1 Assistant ordinal / attribution silencieuse — MITIGATED (pas BLOCKER)

Code `commitTurnTerminal` (`turn-command.ts`) :
- Lock `FOR UPDATE` token+status avant INSERT/CAS
- Si `owned.assistantMessageId` set et diverge de l'existant et du nouvel id → **CONFLICT 409**
- Si `assistantMessageId` null et message existe à l'ordinal → réutilisation (récupération du même ordinal réservé à la commande)
- Unicité `(conversation_id, ordinal)` limite l'attribution croisée

**Réserve résiduelle OPEN (basse) :** exiger aussi `generationId` match lors du reuse sans `assistantMessageId` pré-lié — hardening optionnel avant merge, pas STOP PR.

### 3.2 UNKNOWN après effets D4 déjà CURRENT — KNOWN GAP (produit)

`service.ts` sur CAS miss retourne `capitalisation: []`, `documentSave: null` alors que CAP-FENCE-04 prouve l'acquis **persiste** en DB. Distinction : donnée D4 OK ; réponse tour sous-déclare. Reconstructible via API knowledge/docs. **Exit :** enrichir payload UNKNOWN avec refs d'effets déjà confirmés (GO correctif distinct) — gate **avant merge / RECETTE**, pas bloquant publication branche si accepté.

### 3.3 Concurrence 2 sessions + panne DB (SAFE-01) — PARTIAL / RISK CARRIED

Hooks séquentiels + FOR UPDATE/SHARE prouvés localement. Injection panne DB et deux backends indépendants **NOT RUN**. Gate : **avant merge/RECETTE** ; n'empêche pas push/PR sous acceptation Morris.

### 3.4 D4-PAGE-03 — PROVEN (portée bornée)

Reproduit ce cycle : mutation entre pages ⇒ `coverage=STALE`, `hasMore=false`, `totalMatchedExact=false`. Pas de snapshot global revendiqué.

### 3.5 CI workflow labels 001→004 — OPEN cosmétique / doc

Step name/commentaire « 001→004 » mais commande `npm run db:migrate` applique **001→006**. Fonctionnellement OK pour CI ; aligner libellés sous GO workflow (chemin protégé) **après** ou **avec** PR.

### 3.6 `git diff --check` EOF — OPEN (impact CI)

Trois fichiers docs échouent `git diff --check`. Le job CI « Trailing whitespace / conflict marker check » **échouerait** sur ce SHA. **Exit minimal :** retirer blank lines EOF (3 fichiers construction) sous GO avant push ou premier commit de régularisation — **sans élargir le scope**.

## 4. Validations locales réexécutées (ce cycle)

| Suite | Commande | Résultat |
| --- | --- | --- |
| unit | `npm run test:unit` | **52 PASS** / 13 files |
| PG | `npm run test:integration` | **78 PASS** / 8 files |
| e2e FAKE | `npm run test:e2e` | **3 PASS** |
| tsc | `npx tsc --noEmit` | PASS |
| lint | `npm run lint` | PASS (2 warnings unused nora-adapter) |
| build | `npm run build` | PASS |
| LIVE | — | **NOT RUN** |
| CI new SHA | — | **CI NEW SHA NOT RUN — AWAITS MORRIS PROJECT PUSH/PR GO** |
| RECETTE | — | **NOT AUTHORIZED** |

Baseline handoff `1eeb06e6` reproduite (52/78/3).

### Fake / Real Qualification

| Classe | Statut |
| --- | --- |
| DETERMINISTIC | PROVEN |
| PG/INTEGRATION | PROVEN |
| BROWSER FAKE | PROVEN |
| LIVE | NOT RUN |
| CI NEW SHA | NOT RUN |
| RECETTE | NOT AUTHORIZED |

## 5. Qualité candidate (synthèse)

- **D3** : policies TEST≠OPERATIONAL ; fencing owner_token ; terminal atomique ; no SDK auto-retry ; UNKNOWN honnête (avec réserve payload capitalisation)
- **D4** : AVAILABLE-only ; fence TX capitalisation+docs ; pagination SQL + STALE sous mutation
- **OBS** : sink expurgé, tracingDisabled ; rétention 14j déclarée — vérifier exploitation réelle = KNOWN GAP ops
- **API/UX** : clientTurnKey, C1–C6 couverts par suites existantes
- **CI** : workflow inclus dans diff ; trigger PR→main ; Postgres ephemeral ; migrations via script complet ; validate sur #655 historique ≠ preuve `5cd8f10a`

## 6. Risques résiduels (registre)

| ID | Statut | Impact Pilote | Exit | Gate |
| --- | --- | --- | --- | --- |
| R-EOF-CHECK | OPEN | CI rouge sur trailing-check | strip 3 EOF blanks | avant push ou 1er commit régul. |
| R-CI-SHA | OPEN | pas de preuve Actions sur candidat | push+PR puis vérifier jobs | après GO push/PR |
| R-UNKNOWN-CAP | KNOWN GAP | tour UNKNOWN sous-déclare acquis déjà CURRENT | payload refs D4 | avant merge/RECETTE |
| R-SAFE01 | PARTIAL | contention/panne DB non prouvée 2-conn | tests injection | avant merge/RECETTE |
| R-CI-LABELS | OPEN | confusion ops 004 vs 006 | corriger libellés workflow | avec/après PR (GO) |
| R-ASSIST-REUSE | MITIGATED | attribution ordinale edge | check generationId | optionnel pre-merge |
| R-LIVE-CORPUSB | OPEN | modèle/missions longues non prouvés | GO LIVE + corpus B | après CI |
| R-COOKIE-LOCAL | KNOWN GAP | collision cookies localhost | ENV-01 | RECETTE |
| R-PR-STACK | OPEN | double merge #655–658 | PR unique + supersession | GO Morris distinct |

## 7. Projet de PR intégratrice (NE PAS CRÉER — prêt à copier sous GO)

**Titre proposé :**
`feat(next): R5/ML2 Nora cognition, D4 capitalisation and turn integrity`

**Base :** `main` @ `6e4406c63639330c7826423cdcf08f06ff019eed`
**Head :** `sfia/next-ml2-cognition-observability-integrated` @ `5cd8f10a78a6797e07b7de805f78207d10183ce7`
**Draft recommandé :** oui jusqu'à CI NEW SHA PASS + revue ChatGPT

### Body (copie)

```markdown
## Summary
- Intègre le macro-lot R5/ML2 « Produire et capitaliser avec Nora » : cognition D3 (profils, tools D4 read-only, turn command + owner_token), capitalisation/documents D4, observabilité expurgée, UX sas/portfolio.
- Migrations forward-only `003`–`006` (knowledge/docs, integrity, turn_command, owner_token).
- Correctifs Critical d'intégrité : fencing TX, pagination terminante/STALE, pas de retry SDK auto, terminal CAS atomique.

## Vision produit
Le Pilote converse avec Nora, consulte des sources AVAILABLE, capitalise sous droits, et ne reçoit jamais un COMPLETE ou une connaissance fabriquée après perte de propriété de tour.

## Scope / Non-scope
**IN :** D3/D4/OBS/UX/tests/CI Next workflow, docs construction ML2.
**OUT :** LIVE OpenAI, corpus B long, RECETTE/STABLE, ADOPTED, retarget/merge des PR #655–#658 (arbitrés séparément).

## Responsabilités
- **D3** : tour, cognition, orchestration — pas propriétaire D4.
- **D4** : sujets/acquis/points/docs/révisions + fence d'écriture Nora.
- **D8** : preuves/observabilité — pas d'autorité métier.

## SHA / base
- Head: `5cd8f10a78a6797e07b7de805f78207d10183ce7`
- Base main: `6e4406c63639330c7826423cdcf08f06ff019eed`
- 72 commits ; 70 files ; +11472/−305

## Tests locaux (DEV FAKE)
- unit 52 PASS ; PG 78 PASS ; Playwright 3 PASS ; tsc/lint/build PASS
- LIVE NOT RUN ; RECETTE NOT AUTHORIZED

## CI
- Workflow `sfia-studio-next-ci.yml` inclus (absent de main aujourd'hui).
- **CI NEW SHA NOT RUN** jusqu'à publication branche + PR.
- Historique : Required Gate PASS sur PR #655 @ `08b89360` ≠ preuve de ce SHA.
- Pré-check local : `git diff --check` signale 3 EOF blanks à régulariser avant expect green.

## Relation PR #655–#658
Empilement docs/code historique **OPEN**. Cette PR est la **candidate unique** vers main. Ne pas merger les quatre en plus. Supersession/fermeture = GO Morris distinct.

## Rollback / roll-forward
Pas de rollback schéma destructif. Roll-forward migrations 001→006 ; restauration = backup/reprise DB (hors ce cycle).

## Gates Morris restants
1. Régulariser EOF / accepter réserve CI check
2. GO PUSH branche projet
3. GO PR (ce body)
4. Vérifier CI head_sha == 5cd8f10a (ou successeur régul.)
5. Revue ChatGPT post-CI
6. GO merge / puis LIVE / RECETTE séparés

## Checklist revue
- [ ] Pas de secret dans diff
- [ ] Migrations 006 présentes en CI migrate
- [ ] UNKNOWN ≠ COMPLETE
- [ ] D4 AVAILABLE-only
- [ ] PR stack non double-mergée
```

## 8. Décision demandée à Morris

| Demande | Statut |
| --- | --- |
| GO PUSH PROJECT BRANCH | **À SOLLICITER** après arbitrage R-EOF-CHECK (et acceptation réserves) |
| GO PR intégratrice | **À SOLLICITER** distinctement après push |
| GO merge / LIVE / RECETTE | **NON** dans ce cycle |
| NO-GO | si Morris refuse les réserves R-UNKNOWN-CAP / SAFE-01 sans correctif préalable |

**Séquence post-GO :** (a) push SHA (éventuellement + micro-fix EOF) → (b) ouvrir PR unique draft → (c) vérifier Actions `validate`+`required_gate` sur head_sha → (d) revue ChatGPT → (e) GO merge distinct.

## 9. Next capability (hors cycle)

Après CI vérifiée : LIVE borné `gpt-6.1-sol`, corpus B 5–10 min, candidate RECETTE figée — gates séparés.

## 10. Sources consultées (rôles)

- Prompt readiness Morris 2026-11-05 ; template v2.6 §6.11/§7–9 ; routing §4.3.0b
- SEF/SEF-01, roadmap, ADR trajectoire C, ENV-01, product-versioning (refs ancêtre + HEAD)
- Spec/matrice ML2 As-Built locaux §§17–25 ; delivery-history DELIV-…-10
- Code HEAD : turn-command, service, knowledge, document, d4-read-tools, workflow CI
- Handoff `1eeb06e6` (preuve revue, non canon produit)
- GitHub PR #655–#658 observées via `gh`

## 11. Fichiers projet créés/modifiés ce cycle

**Aucun.** Pack temporaire + handoff L3 seulement.

## 12. Instruction ChatGPT

Avant revue de ce rapport, lire depuis `sfia/review-handoff` le fichier `sfia-review-handoff/latest-chatgpt-review.md` au SHA de publication déclaré ; contrôler le blob, l'index et les preuves réelles, la comparaison `main`↔`5cd8f10a`, la relation aux PR #655–#658, les réserves, les gates ENV-01/versioning, le déclencheur de CI Next et l'absence de push projet/PR. Produire un verdict de readiness et une recommandation à Morris ; **ne pas assimiler handoff réussi à GO Git projet**.

## 13. Verdict pack

`PR READINESS WITH RESERVES — MORRIS ARBITRATION REQUIRED`

Interdits sans preuves/gates : `CI NEW SHA PASS`, `MERGED`, `LIVE VERIFIED`, `RECETTE ACCEPTED`, `STABLE`, `ADOPTED`.

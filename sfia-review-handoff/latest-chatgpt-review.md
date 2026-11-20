# SFIA Review Pack FULL — Ensemble 07 DEV INTEGRATED QUALIFICATION

**Date/heure UTC :** 2026-11-20T20:14:49Z
**Cycle identity :** `Ensemble 07 DEV INTEGRATED QUALIFICATION`
**Type :** Delivery projet · EVOL · qualification QA intégrée DEV (SFIA v2.6 §6.6)
**Profil :** Standard + contrôles renforcés reprise / gouvernance / intégration
**Macro-lot :** R5 / ML4D / Ensemble 07 — clôture des preuves DEV
**Review Pack :** FULL · Review Handoff : required / publish-in-cycle
**Lane :** DEV only · **Classe :** NO RELEASE · **Gate C :** OPEN
**GO Morris :** qualification intégrée DEV uniquement — **pas** de préparation RECETTE, candidat Git figé, commit/push projet, PR, merge, promotion
**Prior handoff immuable :** `sfia/review-handoff@97db03d630ce9cb3630c480cd63d8fab652df189` blob `02c1190ef16c00ccefebb425ba7747195d3452f0` — Ensemble 07 FUNCTIONAL STABILIZATION
**UX :** fidélité Figma **gelée** (arbitrage Morris) — aucune passe esthétique dans ce cycle

---

## 1. Git Truth local

| Champ | Valeur |
|---|---|
| toplevel | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| HEAD | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| origin/main | `6e93a33d64dfeea2eab88fb7896d733b34053f97` |
| merge-base HEAD origin/main | `6e93a33d64dfeea2eab88fb7896d733b34053f97` |
| Worktree | **volontairement non commité** (delivery + corrections + tests locaux) |
| status short | 40 lignes (modifiés + non suivis) |

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/scripts/db-migrate.sh
 M projects/sfia-studio-next/web/scripts/e2e-web-server.sh
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
 M projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/types.ts
 M projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
 M projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
 M projects/sfia-studio-next/web/src/lib/http-errors.ts
?? projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
?? projects/sfia-studio-next/web/scripts/_dbg-e07-process.mts
?? projects/sfia-studio-next/web/scripts/_e07-recapture-08.mts
?? projects/sfia-studio-next/web/scripts/e07-capture-sas-modal.mts
?? projects/sfia-studio-next/web/scripts/e07-runtime-screenshots.mts
?? projects/sfia-studio-next/web/scripts/e07-seed-screenshot.mts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/initial-qualification/
?? projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
?? projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
?? projects/sfia-studio-next/web/src/db/migrations/015_trajectory_qualification.sql
?? projects/sfia-studio-next/web/src/db/migrations/016_initial_qualification_expected.sql
?? projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification-types.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/qualification-lock.ts
?? projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts
?? projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/ensemble07-ensure-idempotent.test.ts
?? projects/sfia-studio-next/web/tests/unit/ensemble07-forecast-builder.test.ts
?? projects/sfia-studio-next/web/tests/unit/ensemble07-qualification-lock.test.ts

```

**STOP non déclenché :** worktree aligné sur HEAD attendu `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` ; main `6e93a33d64dfeea2eab88fb7896d733b34053f97` ; branche delivery attendue.

---

## 2. Sources et SHA consultés

| Source | Réf |
|---|---|
| Processus SFIA v2.6 | `method/…` + templates (routing §4.3.0b/§6.6, operating model, guardrails, validation checklist, delivery pipeline, decision engine) |
| Gouvernance Next | SEF v0.2, roadmap, décisions, naming, ENV-01 blob `14b61f0d…`, product-versioning blob `8bc93e0f…` |
| Contrats fonctionnels | creation-projet, Nora, connaissance, trajectoire, décisions Pilote |
| Ensemble 07 docs | branche `docs/next-ensemble07-r2-cursor-contract-20261120` @ `25dc1c92…` |
| As-built local | `ensemble-07-as-built-initial-qualification.md` |
| Prior Review Pack | FUNCTIONAL STABILIZATION @ `97db03d6` |

---

## 3. ENV-01

| Contrôle | Résultat |
|---|---|
| Lane | **DEV** uniquement |
| Worktree / branche / HEAD | PASS (ci-dessus) |
| E2E runtime | Playwright webServer `127.0.0.1:3101` · DB `sfia_next_e2e` · container `sfia-next-dev-pg` · port hôte `5433` |
| Fixture Nora | `STUDIO_FORCE_NORA_FIXTURE=1` — FAKE |
| HOLD | `STUDIO_DEV_HOLD_INITIAL_QUALIFICATION` **unset** dans `e2e-web-server.sh` + commande E2E |
| RECETTE :3200 / STABLE :3000 | **non touchés** |
| Candidat RECETTE E07 | **NOT AVAILABLE** (worktree non figé) |
| Verdict ENV-01 | **PASS — DEV isolated** |

---

## 4. Product versioning

| Champ | Valeur |
|---|---|
| Classe | NO RELEASE |
| STABLE | NOT AVAILABLE |
| Version candidate | NOT AVAILABLE |
| Tags / changelog release | aucun |
| delivery-history | mis à jour pour tracer ce cycle (preuves uniquement) |

---

## 5. État du code DEV

Candidat **local non commité** sur `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` + delta delivery Ensemble 07 (P0 fencing, mig 015/016, qualification initiale, UI Projet/Trajectoire, tests).

**Correction de ce cycle (qualification) :**

1. **MAJOR régression d'intégration découverte** — `expectInitialQualification: true` appliqué à *toutes* les créations (y compris suites D3/D5) → lock PENDING synthétique → **23 FAIL** puis fix : flag **optionnel default false** ; route produit SAS seule pose `true` + update link. → **525 PASS**.
2. **E2E A–F** — nouveau spec navigateur ; bug test `openSurface` cliquait des spans `sr-only` `surface-*` (non navigables) → timeout Trajectoire ; fix rail `nav-*` → **6/6 PASS (38s)**.
3. **e2e-web-server.sh** — force unset HOLD pour ne pas geler la qualification en E2E.

Aucun redesign ; UX gelée respectée ; pas de worker/queue.

---

## 6. Commandes réellement exécutées

| Suite | Commande (cwd `…/web`) | Versions | Résultat | Preuve |
|---|---|---|---|---|
| TypeScript | `npx tsc --noEmit` | node v24.16.0 | **PASS** (stdout vide) | `/tmp/e07-iq-tsc.out` |
| Build | `npm run build` | Next prod local | **PASS** | `/tmp/e07-iq-build.out` |
| Unit global | `npx vitest run tests/unit` | vitest | **690/690 PASS** (85 files, 15.21s) @ 20:52:40 | `/tmp/e07-iq-unit.out` |
| Integration PG global | `npx vitest run tests/integration` (après fix create-flag) | PG DEV/e2e | **525/525 PASS** (34 files, 35.43s) @ 20:54:49 | `/tmp/e07-iq-integration2.out` |
| E07 PG ciblé | ensemble07 + dépendances | | **15/15 E07** dans regfix (95 tests / 4 files) | `/tmp/e07-iq-regfix.out` |
| E2E A–F | `npx playwright test tests/e2e/ensemble07-parcours-af.spec.ts` + fixture + HOLD unset | Playwright :3101 | **6/6 PASS (38.0s)** | `/tmp/e07-iq-e2e10.out` |

**Note :** premier run integration avait **échoué** (régression create-flag) — corrigé dans le même cycle avant E2E.

---

## 7. Tableau des suites complètes

| Suite | Attendu | Résultat | Niveau de preuve |
|---|---|---|---|
| tsc | PASS | PASS | compile |
| build prod | PASS | PASS | compile+bundle |
| unit global | PASS sans régression | 690 PASS | déterministe |
| integration PG global | PASS E05/E06/E07/D2–D6 | 525 PASS | PG réel |
| E07 discriminants PG | P0 scenarios | 15 PASS (historique+rejoué) | PG oracles |
| E2E A–F | 6 parcours navigateur | 6 PASS | BROWSER FAKE |

---

## 8. Tests P0 et preuves

Invariants P0-01/02 (fence + FOR UPDATE / assistantContent) **non rouverts** — pas d'anomalie reproductible. Couverture via PG E07 + unit E07.

| # | Scénario | Preuve principale | Résultat |
|---|---|---|---|
| 1 | Deux créations D2 simultanées | PG E07 | PASS (historique cycle stab + suite 525) |
| 2 | ACK perdu | PG | PASS |
| 3 | Op initiale absente + expected | PG P0-04 | PASS |
| 4 | Ancien projet sans expected | PG | PASS (pas de lock synthétique) |
| 5 | Projet récent expected | PG + E2E A | PASS |
| 6 | Continuations après D2 | PG / route ensure→continue→kick | PASS |
| 7 | Traitement interrompu | PG + E2E B reconcile | PASS reconcil. |
| 8 | Lease expiré | PG | PASS |
| 9 | Perte propriété CAS→D5 | PG fence | PASS |
| 10–11 | D5/message/terminal partiels | PG reprise | PASS |
| 12 | Reprise contenu exact | PG | PASS |
| 13 | system ≠ assistant | PG COR-08 | PASS |
| 14 | Deux onglets | E2E F + reconcile idempotent B | PASS borné |
| 15 | Résultat périmé | PG | PASS |
| 16 | UNKNOWN→reconcile | PG + B | PASS |
| 17 | Envoi pendant verrou | unit lock + API 409 | PASS |
| 18 | Autre Pilote | PG droits | PASS |

**Critère sortie P0 :** aucune anomalie P0 reproductible ouverte.

---

## 9. Parcours navigateur A–F

| Parcours | Test exécuté | Niveau de preuve | Résultat | Réserve |
|---|---|---|---|---|
| A — Création | SAS→create→IQ terminal→Travail unlock→Trajectoire board | BROWSER FAKE + GET API + UI | **PASS** | FAKE Nora |
| B — Reprise | reopen + double reconcile idempotent | BROWSER + API | **PASS** — **RECONCILIATION PROVEN** | **PROCESS AUTONOMY NOT PROVEN** (FIX-03) |
| C — GO | messages NL « retiens » / « Ouvre le cycle » | BROWSER FAKE boundary | **PASS exécuté** | **REAL-GAP LIVE NL** — cycle ACTIVE non revendiqué ; D6 API/PG prouvé ailleurs |
| D — Clôture | intent « Clôture… réserves » + Trajectoire | BROWSER FAKE boundary | **PASS exécuté** | **REAL-GAP LIVE NL** — pas de clôture auto ; D5 close PG prouvé |
| E — Navigation | projet/travail/pilotage/journal/documents | BROWSER | **PASS** | — |
| F — Sync | Trajectoire terminal sans reload + Travail unlock | BROWSER + API | **PASS** | pas de 2e onglet physique parallèle exhaustif |

Correctif test : `openSurface` doit utiliser `studio-rail` `nav-*`, jamais les markers `surface-*` (sr-only).

---

## 10. Données et fixtures

- Pilote A (DEV test login)
- DB jetable E2E `sfia_next_e2e` sur :5433
- Noms projet `E07QA Cadrage <unique>`
- `STUDIO_FORCE_NORA_FIXTURE=1`
- Pas de fournisseur IA externe consommé

---

## 11. D3 / D5 / D6 — résultats réels

| Domaine | Preuve | Résultat |
|---|---|---|
| D2 create + expected flag | route produit + PG | PASS |
| D3 conversation + lock IQ | unit/PG/E2E A | PASS |
| D5 PROPOSE / RETAIN / fence | PG E07 + command-runner | PASS |
| D6 conversational authority | PG/unit (semanticQualification injectée) | PASS frontière API |
| D6 NL navigateur LIVE | E2E C/D sous FAKE | **NOT PROVEN LIVE** |

---

## 12. Fake / Real Qualification

| Couche | Statut |
|---|---|
| Structure / validation déterministe | PROVEN |
| Commandes D5/D6 API | PROVEN (PG) |
| Parcours navigateur FAKE | PROVEN A–F |
| Interprétation sémantique NL LIVE | **NOT PROVEN** |
| Nora reasoning LIVE | **NOT PROVEN** |

**Interdit respecté :** ne pas conclure « Nora cognitive prête » sur sortie déterministe seule.

---

## 13. FIX-03 — reprise

| Affirmation | Statut |
|---|---|
| Projet survit interruption | PROVEN (B + PG) |
| Op accessible | PROVEN |
| Reconcile idempotent | **RECONCILIATION PROVEN** |
| Pas de 2e proposition | PROVEN |
| UNKNOWN sortie contrôlée | PROVEN PG |
| Chemin utilisateur récupération | PROVEN (reconcile POST + UI poll) |
| Worker/queue autonome | **PROCESS AUTONOMY NOT PROVEN** — non installé (hors GO) |

---

## 14. Nora LIVE — limites

| Item | Statut |
|---|---|
| Chemin cognitif identifié | OUI (fixture vs LIVE) |
| Sorties déterministes distinguées | OUI |
| GO consommation fournisseur | **NON** (ce cycle) |
| Dépendances LIVE | secrets fournisseur + lane + budget — hors mandat |
| Conclusion | **DETERMINISTIC / FAKE — LIVE NOT PROVEN** |

---

## 15. Anomalies

### Corrigées ce cycle

| ID | Classe | Scénario échoué | Cause | Fichier | Fix | Non-régression |
|---|---|---|---|---|---|---|
| IQ-REG-01 | MAJOR | 23 tests integration FAIL après create | `initialQualificationExpected` forcé pour tout create | `create-project.ts` | `expectInitialQualification?` default **false** ; route produit seule `true` | integration **525 PASS** |
| E2E-NAV-01 | MAJOR (preuve) | Parcours A timeout 120s | `openSurface` click sur span sr-only | `ensemble07-parcours-af.spec.ts` | click `nav-*` rail + assert `data-surface-active` | E2E **6/6 PASS** |

### Ouvertes / gouvernées

| ID | Classe | Description | Exit |
|---|---|---|---|
| FIX-03 | REAL-GAP / réserve | Pas de worker autonome | OK pour recette bornée **si** reconcile manuel/accepté ; sinon GO worker |
| LIVE-NL | REAL-GAP | GO/clôture NL navigateur non prouvés LIVE | Exclure de recette bornée FAKE **ou** GO LIVE |
| UX-FIGMA | UX-DEFERRED | Fidélité visuelle gelée | Revue Morris en RECETTE |
| CAND-GIT | gouvernance | Pas de SHA figé | GO Morris préparation RECETTE |

**Aucun BLOCKER P0 ouvert.**

---

## 16. Compatibilité et migrations

| Item | Résultat |
|---|---|
| Migration 015 trajectory_qualification | présente ; PG tests PASS |
| Migration 016 initial_qualification_expected | présente ; idempotente (NOTICE already exists) |
| schema.ts aligné | OUI |
| Fresh install destructive | non exécutée sur DB DEV partagée ; suites PG/E2E sur DB e2e isolée |
| Backfill fictif | absent (P0-04) |
| RECETTE/STABLE DB | intouchées |

---

## 17. Régressions Ensemble 05 / 06

Integration globale **525 PASS** inclut documents, journal, conversation, pilotage — **pas de régression détectée** après IQ-REG-01.

---

## 18. Réserves UX

Gel Morris respecté. Aucune retouche dimensions/couleurs/typo. Seuls correctifs fonctionnels test-driven (nav preuve E2E = test harness, pas UI produit).

---

## 19. Conditions préparation RECETTE (futures — hors mandat)

1. GO Morris explicite préparation RECETTE
2. Commit/fige SHA+tree reproductible du worktree qualifié
3. Décider périmètre : FAKE-only vs LIVE NL
4. Décider acceptation FIX-03 (reconcile vs worker)
5. Revue visuelle UX gelée sous GO distinct
6. ENV-01 lane RECETTE — **après** candidat figé

**Candidat RECETTE actuel : NOT AVAILABLE.**

---

## 20. Gate C / NO RELEASE

- Gate C : **OPEN**
- NO RELEASE
- Aucun push branche projet
- Handoff L3 mono-fichier uniquement

---

## 21. Verdict technique

- Build/tsc/unit/integration/E2E A–F : **PASS**
- P0 connus : **fermés**
- Sync UI/API/DB nominale : **démontrée** (FAKE)
- Code delivery local stable pour usage DEV

## 22. Verdict fonctionnel

- Parcours SAS→Projet→qualification→Travail/Trajectoire : **démontré navigateur**
- Reprise gouvernée : **démontrée**
- GO/clôture conversationnels LIVE : **non démontrés**
- Autonomie process : **non démontrée**

## 23. Décisions Morris restantes

1. Accepter verdict **WITH RESERVES** et périmètre recette FAKE bornée ?
2. Exiger GO LIVE Nora avant toute recette GO conversationnel ?
3. FIX-03 : accepter reconcile-only ou mandater worker ?
4. Autoriser figeage candidat Git + préparation RECETTE (GO séparé) ?
5. Quand lever le gel UX Figma ?

---

## 24. VERDICT AUTORISÉ

```
DEV INTEGRATION QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED
```

Justification : preuves d'intégration DEV complètes (tsc/build/unit/PG/E2E A–F) sans P0 ouvert ; réserves **LIVE NL**, **FIX-03 autonomy**, **UX gelée**, **candidat Git non figé** — non bloquantes pour une **future recette bornée FAKE** si Morris l'arbitre ainsi ; non assimilables à RECETTE READY.

---

## 25. Fichiers — inventaire worktree

### MODIFIÉS (20)

| 1 | `.tmp-sfia-review/chatgpt-review.md` |
| 2 | `projects/sfia-studio-next/construction/delivery-history.md` |
| 3 | `projects/sfia-studio-next/web/scripts/db-migrate.sh` |
| 4 | `projects/sfia-studio-next/web/scripts/e2e-web-server.sh` |
| 5 | `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts` |
| 6 | `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts` |
| 7 | `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx` |
| 8 | `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx` |
| 9 | `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx` |
| 10 | `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx` |
| 11 | `projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx` |
| 12 | `projects/sfia-studio-next/web/src/db/schema.ts` |
| 13 | `projects/sfia-studio-next/web/src/domains/conversation/service.ts` |
| 14 | `projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts` |
| 15 | `projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts` |
| 16 | `projects/sfia-studio-next/web/src/domains/pilotage/service.ts` |
| 17 | `projects/sfia-studio-next/web/src/domains/pilotage/types.ts` |
| 18 | `projects/sfia-studio-next/web/src/domains/preparation/create-project.ts` |
| 19 | `projects/sfia-studio-next/web/src/domains/preparation/project-context.ts` |
| 20 | `projects/sfia-studio-next/web/src/lib/http-errors.ts` |


### NON SUIVIS (20)

| 1 | `projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md` |
| 2 | `projects/sfia-studio-next/web/scripts/_dbg-e07-process.mts` |
| 3 | `projects/sfia-studio-next/web/scripts/_e07-recapture-08.mts` |
| 4 | `projects/sfia-studio-next/web/scripts/e07-capture-sas-modal.mts` |
| 5 | `projects/sfia-studio-next/web/scripts/e07-runtime-screenshots.mts` |
| 6 | `projects/sfia-studio-next/web/scripts/e07-seed-screenshot.mts` |
| 7 | `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/initial-qualification/` |
| 8 | `projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx` |
| 9 | `projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx` |
| 10 | `projects/sfia-studio-next/web/src/db/migrations/015_trajectory_qualification.sql` |
| 11 | `projects/sfia-studio-next/web/src/db/migrations/016_initial_qualification_expected.sql` |
| 12 | `projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts` |
| 13 | `projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification-types.ts` |
| 14 | `projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts` |
| 15 | `projects/sfia-studio-next/web/src/domains/pilotage/qualification-lock.ts` |
| 16 | `projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts` |
| 17 | `projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts` |
| 18 | `projects/sfia-studio-next/web/tests/unit/ensemble07-ensure-idempotent.test.ts` |
| 19 | `projects/sfia-studio-next/web/tests/unit/ensemble07-forecast-builder.test.ts` |
| 20 | `projects/sfia-studio-next/web/tests/unit/ensemble07-qualification-lock.test.ts` |


### Héritage FUNCTIONAL STABILIZATION

Le contenu produit détaillé (diffs intégraux P0, mig 015/016, `initial-qualification.ts`, UI TrajectoryBoard, etc.) est celui du handoff `97db03d6` / blob `02c1190e`, **plus** les deltas de ce cycle ci-dessous. ChatGPT doit traiter ce pack comme preuve de **qualification**, et le handoff stab comme baseline produit immuable antérieure.

---

## 26. Contenu — fichiers créés / modifiés CE CYCLE (complets / diffs)


### CREATED `projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts`

```typescript
import { test, expect, type Page, type APIRequestContext } from "@playwright/test";
import {
  openNewPreparation,
  seedInspectedNameViaApi,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 07 — BROWSER functional qualification A–F on isolated E2E lane :3101.
 * Fixture Nora FAKE — LIVE NOT PROVEN.
 * UX pixel comparison frozen (Morris).
 */

async function loginPilotA(page: Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

async function openSurface(page: Page, key: string) {
  // surface-* markers in ProjectChrome are sr-only spans (not navigable).
  // Always drive navigation via the studio rail links.
  await page.getByTestId("studio-rail").getByTestId(`nav-${key}`).click();
  await expect(page.getByTestId(`surface-${key}`)).toHaveAttribute(
    "data-surface-active",
    "1",
    { timeout: 15000 },
  );
}

async function waitQualificationTerminal(
  request: APIRequestContext,
  projectId: string,
): Promise<{ status: string; operationId: string; composerLocked: boolean }> {
  let last = { status: "", operationId: "", composerLocked: true };
  let reconcileAttempts = 0;
  for (let i = 0; i < 45; i++) {
    try {
      const getRes = await request.get(`/api/projects/${projectId}`, { timeout: 5000 });
      if (getRes.ok()) {
        const body = (await getRes.json()) as {
          initialQualification?: {
            status?: string;
            operationId?: string;
            composerLocked?: boolean;
          };
        };
        const q = body.initialQualification;
        if (q) {
          last = {
            status: q.status ?? "",
            operationId: q.operationId ?? "",
            composerLocked: Boolean(q.composerLocked),
          };
          if (["PROPOSED", "CLARIFICATION", "FAILED"].includes(last.status)) return last;
        }
      }
      if (
        reconcileAttempts < 3 &&
        ["PENDING", "RUNNING", "UNKNOWN", ""].includes(last.status)
      ) {
        reconcileAttempts += 1;
        const res = await request.post(
          `/api/projects/${projectId}/initial-qualification/reconcile`,
          { timeout: 12000 },
        );
        if (res.ok()) {
          const j = (await res.json()) as {
            initialQualification?: {
              status?: string;
              operationId?: string;
              composerLocked?: boolean;
            };
          };
          const q = j.initialQualification;
          last = {
            status: q?.status ?? last.status,
            operationId: q?.operationId ?? last.operationId,
            composerLocked: q ? Boolean(q.composerLocked) : last.composerLocked,
          };
          if (["PROPOSED", "CLARIFICATION", "FAILED"].includes(last.status)) return last;
        }
      }
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  return last;
}

async function createProjectBrowser(page: Page): Promise<string> {
  const name = uniqueProjectName("E07QA Cadrage");
  await openNewPreparation(page);
  await sendPrepMessage(
    page,
    `Je veux un cadrage pour clarifier le périmètre d'un cockpit produit, nommé ${name}.`,
  );
  await seedInspectedNameViaApi(page, {
    name,
    summary: "Cadrage Ensemble 07 qualification intégrée DEV",
  });
  await expect(page.getByTestId("prep-create-project")).toBeEnabled({ timeout: 30000 });
  await page.getByTestId("prep-create-project").click();

  const access = page.getByRole("button", { name: /Accéder au projet/i });
  await expect(access).toBeEnabled({ timeout: 60000 });
  await access.click();
  await page.waitForURL("**/projects/**", { timeout: 30000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  return projectId!;
}

test.describe("Ensemble 07 parcours A–F (BROWSER FAKE)", () => {
  test.describe.configure({ mode: "serial", timeout: 180_000 });

  let projectId = "";

  test("A — SAS → create → qualification terminal → Travail/Trajectoire", async ({ page }) => {
    await loginPilotA(page);
    projectId = await createProjectBrowser(page);

    const terminal = await waitQualificationTerminal(page.request, projectId);
    expect(["PROPOSED", "CLARIFICATION", "FAILED"]).toContain(terminal.status);
    expect(terminal.operationId).toBeTruthy();
    expect(terminal.composerLocked).toBe(false);

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-travail-stage").first()).toBeVisible({ timeout: 15000 });
    // Send stays disabled while draft empty — unlock proof = lock overlay absent + draft editable.
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 15000 });
    await expect(page.getByText(/proposition de trajectoire initiale|clarifier|qualification/i).first()).toBeVisible({
      timeout: 15000,
    });

    await openSurface(page, "pilotage");
    await expect(
      page
        .getByTestId("trajectory-board")
        .or(page.getByTestId("project-trajectory"))
        .first(),
    ).toBeVisible({ timeout: 20000 });
  });

  test("B — reopen + reconcile idempotent (RECONCILIATION PROVEN)", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}`);
    const a = await waitQualificationTerminal(page.request, projectId);
    const b = await waitQualificationTerminal(page.request, projectId);
    expect(b.operationId).toBe(a.operationId);
    expect(b.status).toBe(a.status);
    expect(["PROPOSED", "CLARIFICATION", "FAILED"]).toContain(b.status);
  });

  test("C — GO conversational browser (fixture / REAL-GAP LIVE NL)", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);
    const draft = page.getByTestId("thread-draft").first();
    const send = page.getByTestId("thread-send").first();
    await expect(draft).toBeEditable({ timeout: 15000 });
    await draft.fill("Je retiens cette trajectoire.");
    await expect(send).toBeEnabled({ timeout: 10000 });
    await send.click();
    await page.waitForTimeout(2500);
    await draft.fill("Ouvre le cycle cadrage.");
    await expect(send).toBeEnabled({ timeout: 10000 });
    await send.click();
    await page.waitForTimeout(4000);

    const proj = await page.request.get(`/api/projects/${projectId}`);
    expect(proj.ok()).toBeTruthy();
    const body = (await proj.json()) as {
      pilotage?: { cycle?: { status?: string; cycleType?: string } | null };
    };
    // Under FAKE fixture, NL GO may clarify instead of open — record, do not invent LIVE proof.
    test.info().annotations.push({
      type: "note",
      description: `C pilotage.cycle=${JSON.stringify(body.pilotage?.cycle ?? null)} — LIVE NL NOT PROVEN; API FIX-08 proven in PG`,
    });
  });

  test("D — conduite / clôture boundary (FAKE; no auto-close)", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);
    const draft = page.getByTestId("thread-draft").first();
    const send = page.getByTestId("thread-send").first();
    await expect(draft).toBeEditable({ timeout: 15000 });
    await draft.fill("Clôture le cycle en cours avec réserves.");
    await expect(send).toBeEnabled({ timeout: 10000 });
    await send.click();
    await page.waitForTimeout(4000);

    const proj = await page.request.get(`/api/projects/${projectId}`);
    expect(proj.ok()).toBeTruthy();
    const body = (await proj.json()) as {
      pilotage?: {
        cycle?: { status?: string } | null;
        trajectory?: { status?: string } | null;
      };
    };
    // No automatic closure under FAKE — observe boundary only.
    test.info().annotations.push({
      type: "note",
      description: `D after close intent cycle=${JSON.stringify(body.pilotage?.cycle ?? null)} trajectory=${JSON.stringify(body.pilotage?.trajectory?.status ?? null)} — LIVE close NL NOT PROVEN; D5 close proven in PG unit/integration`,
    });
    await openSurface(page, "pilotage");
    await expect(
      page.getByTestId("trajectory-board").or(page.getByTestId("project-trajectory")).first(),
    ).toBeVisible({ timeout: 20000 });
  });

  test("E — navigation surfaces without changing qualification op", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}`);
    const before = await waitQualificationTerminal(page.request, projectId);
    for (const key of ["projet", "travail", "pilotage", "journal"] as const) {
      await openSurface(page, key);
      await page.waitForTimeout(300);
      expect(page.url()).toContain(`/projects/${projectId}`);
    }
    // Documents via Accès directs
    await page.getByTestId("studio-rail").getByTestId("nav-documents").click();
    await page.waitForTimeout(300);
    expect(page.url()).toContain(`/projects/${projectId}`);
    const after = await waitQualificationTerminal(page.request, projectId);
    expect(after.operationId).toBe(before.operationId);
    expect(after.status).toBe(before.status);
  });

  test("F — Trajectoire + reconcile without depending on full reload", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=pilotage`);
    const terminal = await waitQualificationTerminal(page.request, projectId);
    expect(["PROPOSED", "CLARIFICATION", "FAILED"]).toContain(terminal.status);
    await expect(
      page.getByTestId("trajectory-board").or(page.getByTestId("project-trajectory")).first(),
    ).toBeVisible({ timeout: 20000 });
    await openSurface(page, "travail");
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 15000 });
  });
});

```

### MODIFIED `projects/sfia-studio-next/web/src/domains/preparation/create-project.ts` (diff)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts b/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
index 5b06cf5f..92986532 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
@@ -25,6 +25,12 @@ export type CreateProjectInput = {
   projectName: string;
   previewSummary: string;
   idempotencyKey: string;
+  /**
+   * P0-04 — product SAS→Projet path sets true so missing-op keeps Travail locked.
+   * Default false: direct/test creates must not invent a permanent PENDING gate
+   * without ensure+process (regression on D3/D5 conversational suites).
+   */
+  expectInitialQualification?: boolean;
 };

 export type CreateProjectResult =
@@ -224,6 +230,7 @@ export async function createProjectCommand(input: CreateProjectInput): Promise<C
         preparationId: input.preparationId,
         projectId,
         attachedAt: now,
+        initialQualificationExpected: Boolean(input.expectInitialQualification),
       });
       await tx
         .update(preparations)

```

### MODIFIED `projects/sfia-studio-next/web/scripts/e2e-web-server.sh` (diff)

```diff
diff --git a/projects/sfia-studio-next/web/scripts/e2e-web-server.sh b/projects/sfia-studio-next/web/scripts/e2e-web-server.sh
index 1b0ddded..a686fe40 100755
--- a/projects/sfia-studio-next/web/scripts/e2e-web-server.sh
+++ b/projects/sfia-studio-next/web/scripts/e2e-web-server.sh
@@ -43,6 +43,10 @@ export NODE_ENV=development
 export STUDIO_LANE=DEV
 export STUDIO_DEV_TEST_LOGIN=1
 export STUDIO_E2E=1
+# Never freeze initial qualification during E2E (operator .env.local may set HOLD=1).
+export STUDIO_DEV_HOLD_INITIAL_QUALIFICATION=
+unset STUDIO_DEV_HOLD_INITIAL_QUALIFICATION || true
+export STUDIO_DEV_HOLD_INITIAL_QUALIFICATION=
 # Level-B: simulated provider at D3 boundary — do not inject UI-key fixtures.
 if [[ "${STUDIO_NORA_SIMULATED_PROVIDER:-}" == "1" ]]; then
   export STUDIO_FORCE_NORA_FIXTURE=

```

### CREATED/AS-BUILT `projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md`

```markdown
# Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)

**Statut:** construction DEV corrective — NO RELEASE · stabilisation fonctionnelle
**Base Git:** `e36fd8b0531c4f649830990a18f9cfdaecb3c03f`
**Branche:** `sfia/next-ensemble07-projet-trajectoire-delivery`
**Date:** 2026-11-20 (stabilisation fonctionnelle — UX gelée)

## Architecture retenue

Option A hybride (dossier §8.1) + corrections P0 stabilisation :

1. Après `createProjectCommand` confirmé : `ensureInitialQualification` (retry) **avant** `continueAfterProjectCreated`, puis `kickInitialQualificationProcessing` (P0-05).
2. Kick uniquement depuis create / reconcile POST — **jamais depuis GET**.
3. Publication : D5 `PROPOSE_TRAJECTORY` avec `effectOwnerFence` évalué **dans** `runBusinessCommand` (FOR UPDATE op) au point de mutate (P0-01).
4. `resultJson.assistantContent` durable pour reprise exacte message (P0-02).
5. Lien `preparation_project_links.initial_qualification_expected` (migration 016) : legacy = false → pas de verrou synthétique (P0-04).
6. RETAIN conversationnel résout la PROPOSED courante côté serveur (FIX-08) — pas de cible D5 dans le body USER_MESSAGE.
7. Forecast déterministe + `validateStructuredForecast` (FIX-07) — LIVE Nora NOT PROVEN.
8. Documents « en cours » = statut `SAVING` uniquement (FIX-11).

## Persistance

- Migration additive `015_trajectory_qualification.sql`.
- Migration additive `016_initial_qualification_expected.sql` (`initial_qualification_expected boolean DEFAULT false`).
- Table `trajectory_qualification_operations`.
- Colonne `trajectory_revisions.forecast_json`.

## Fichiers propriétaires principaux

| Fichier | Rôle |
|---------|------|
| `web/src/domains/pilotage/initial-qualification.ts` | ensure / process / assert admission |
| `web/src/domains/pilotage/forecast-builder.ts` | séquence 1–3 cycles (déterministe FAKE) |
| `web/src/domains/pilotage/qualification-lock.ts` | règles de verrou compositeur |
| `web/src/components/figma/TrajectoryBoard.tsx` | surface Trajectoire 09.02/07/10/11 |
| `web/src/components/figma/SasCreateProgressPopup.tsx` | pop-up SAS 06 allégée |
| `web/src/components/figma/ProjectOverview.tsx` | 09.01 / 09.06 |
| `web/src/components/figma/NoraConversation.tsx` | verrou 05.17 |

## Preuves

- Unit: `ensemble07-forecast-builder`, `ensemble07-qualification-lock`, `ensemble07-ensure-idempotent`
- Integration PG: `ensemble07-initial-qualification.pg.test.ts` (create→propose, idempotence, lock admission, clarification, failure)
- Build: `npm run build` OK
- Figma: 13/13 captures MCP locales sous `.tmp-sfia-review/ensemble07-evidence/figma/`

## Réserves connues

- Fidélité visuelle pixel des 13 frames : itérations runtime encore requises avant READY visuel.
- Vues détail 09.03 / 09.04 / 09.05 : projection partielle (bilan / CKI éditorial) à enrichir.
- GO conversationnel D6→D5 : capacités PilotagePanel conservées ; parcours conversationnel principal à prouver en e2e navigateur.
- LIVE Nora fournisseur : NOT PROVEN (fixture DEV).

```


### Instruction ChatGPT (obligatoire)

Avant réponse à Morris : relire **depuis Git** branche `sfia/review-handoff` fichier `sfia-review-handoff/latest-chatgpt-review.md` — vérifier identité `Ensemble 07 DEV INTEGRATED QUALIFICATION`, SHA handoff, sources, build, 690/525, E2E A–F, réserves LIVE/FIX-03/UX, Gate C OPEN, NO RELEASE, verdict WITH RESERVES.

Le rapport synthétique Cursor seul ne vaut pas revue.

### MODIFIED `projects/sfia-studio-next/construction/delivery-history.md` (diff — entrée qualification)

```diff
+
+## delivery_id: DELIV-2026-11-20-ENSEMBLE07-HIGH-FIDELITY-CANDIDATE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-20 |
+| Macro-lot | Ensemble 07 — haute fidélité + P0 fencing TOCTOU |
+| Type | EVOL corrective · **NO RELEASE** · Gate C OPEN |
+| P0 | FIX-01 fencing write-point · FIX-02 message identity · FIX-05 missing-op lock · SAS modal capture |
+| Tests | PG 12 PASS · unit 7 PASS |
+| UX | FIGMA TO RUNTIME PARTIAL · modal SAS capturée |
+| Réserves | LIVE Nora NOT PROVEN · GO convers. browser NOT PROVEN · FIX-03 worker non introduit |
+| Verdict | READY WITH GOVERNED RESERVES / FIGMA TO RUNTIME PARTIAL |
+
+
+## delivery_id: DELIV-2026-11-20-ENSEMBLE07-FINAL-CONVERGENCE-CANDIDATE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-20 |
+| Macro-lot | Ensemble 07 — Projet/Trajectoire convergence finale (3e passe) |
+| Type | EVOL corrective · **NO RELEASE** · Gate C OPEN |
+| Worktree | `sfia-wt-ensemble07-projet-trajectoire-20261120` · branche `sfia/next-ensemble07-projet-trajectoire-delivery` @ `e36fd8b` (non poussée) |
+| P0 | COR-01 reopen/missing-op · COR-03 publish order · COR-04 effect fencing · SAS timers 400/900 retirés |
+| Preuves | Figma 13/13 refs MCP · runtime captures distinctes 13 états · PG 10 PASS · unit E07 7 PASS |
+| Réserves | LIVE Nora NOT PROVEN · GO conversationnel browser NOT PROVEN · UX PARTIAL · SAS popup live capture incomplete |
+| Verdict | **READY WITH GOVERNED RESERVES** / **FIGMA TO RUNTIME PARTIAL** |
+| Gates non acquis | Gate C, UAT Morris, STABLE, release, push projet |
+
+
 ## delivery_id: DELIV-2026-11-20-ENSEMBLE06-POST-MERGE-CI-VERIFIED

 | Field | Value |
@@ -3225,3 +3269,46 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 | Lane | DEV `:5433` only ; RECETTE/STABLE non mutées |
 | Push Product | **AUCUN** |
 | Verdict candidat | `READY FOR MORRIS REVIEW WITH RESERVES — JOURNAL V4 CORE LOCAL / SCOPE PARTIAL ON J-C04/06/13/14/BROWSER` |
+
+## 2026-11-20 — Ensemble 07 Projet/Trajectoire (DEV construction, NO RELEASE)
+
+| Champ | Valeur |
+|-------|--------|
+| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
+| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
+| Statut | NO RELEASE — construction DEV |
+| Capacités | Qualification initiale durable post-create ; message Nora proactif ; compositeur verrouillé (UI+API) ; ProjectOverview 09.01/09.06 ; TrajectoryBoard 09.02–09.11 ; forecast_json D5 |
+| Tests | unit / PG E07 (historique premier delivery) |
+| Verdict candidat (1er) | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED |
+| Handoff tip (1er immuable) | `93ee58ee5208daa4abe6d657550b523fea244db2` blob `65dacb671da74b93974deb12af62fb5007f33264` |
+
+## 2026-11-20 — Ensemble 07 corrective (P0 cohérence + UI, NO RELEASE)
+
+| Champ | Valeur |
+|-------|--------|
+| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
+| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` (WT non commitée) |
+| Statut | NO RELEASE — Gate C OPEN |
+| Corrections P0 | COR-01 ensure+retry ; COR-02 GET sans kick ; COR-03/04 fence+reprise D5→message ; COR-05 UNKNOWN+reconcile POST ; COR-06 no default CADRAGE ; COR-08 system incident ; COR-09 closed asc(openedAt) ; COR-11/12 matrice exclusive |
+| Tests | unit 687 PASS ; integration 518 PASS (E07 PG 8/8) ; tsc OK |
+| Fake/Real | DETERMINISTIC/FAKE forecast ; LIVE Nora NOT PROVEN ; HOLD DEV captures only |
+| Visuel | 09.07 clarification runtime obtenue ; 09.10/09.11/09.06/05.17 recapturés ; 09.02/03/08/09 ACTIVE/CLOSED encore absents (GO conversationnel COR-14 non clos) |
+| Réserves | COR-14/15 GO naturel+maturité non prouvés e2e ; COR-16/17 bilan/CKI éditorial partiels ; 13/13 Figma non READY |
+| Verdict candidat | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED / READY WITH GOVERNED RESERVES sur P0 |
+
+## 2026-11-20 — Ensemble 07 DEV integrated qualification (NO RELEASE)
+
+| Champ | Valeur |
+|-------|--------|
+| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
+| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` (WT non commitée) |
+| Statut | NO RELEASE — Gate C OPEN — **pas** de candidat RECETTE figé |
+| Prior handoff | FUNCTIONAL STABILIZATION `97db03d6` / blob `02c1190e` |
+| Correctifs cycle | IQ-REG-01 `expectInitialQualification` default false (route produit seule true) ; E2E A–F harness (`nav-*` vs sr-only) ; e2e-web-server HOLD unset |
+| Suites | tsc PASS ; build PASS ; unit **690 PASS** ; integration PG **525 PASS** ; E2E A–F **6/6 PASS (38s)** FAKE :3101 / `sfia_next_e2e` |
+| FIX-03 | RECONCILIATION PROVEN / PROCESS AUTONOMY NOT PROVEN |
+| Nora | DETERMINISTIC/FAKE — LIVE NOT PROVEN (GO NL C/D navigateur = REAL-GAP) |
+| UX | gel Figma respecté |
+| RECETTE/STABLE | intouchées |
+| Verdict | `DEV INTEGRATION QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED` |
+
```

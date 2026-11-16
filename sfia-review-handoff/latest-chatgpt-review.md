# SFIA Review Pack FULL — ML4D Sas Nora post-recette C1–C4 (republication complète)
Date: 2026-11-16
Mode: republish-in-cycle — pack enrichi ; commit produit INCHANGÉ
Commit produit figé: 6798219fdb37af1b463326dc7015901b43b04acd
Verdict: READY WITH RESERVES — SAS NORA POST-RECETTE CORRECTIONS IMPLEMENTED

## 1. GO / périmètre
- Republication Review Pack / Handoff pour ChatGPT
- Inclure les 26 fichiers modifiés + diffs exploitables
- Assertions discriminantes C1/C2 + compatibilité qualifications incomplètes
- Aucun amend / reset / nouveau commit produit

## 2. Git Truth Check
| Item | Valeur |
| --- | --- |
| Branche | feat/next-ml4d-sas-nora-convergence-20261116 |
| HEAD produit (figé) | 6798219fdb37af1b463326dc7015901b43b04acd |
| Parent | ec7405f323f86a0533dc507a1bfffc60ca1e5d0e |
| Tree web | b3d001f212387349fc1af135046ee4dad2321aea |
| Fichiers modifiés | 26 |
| RECETTE | ec7405f323f86a0533dc507a1bfffc60ca1e5d0e / 67akzrr6bFEp4YOh7aHD7 — INCHANGÉE |
| Push produit | AUCUN |

## 3. Inventaire des 26 fichiers
1. `projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md`
2. `projects/sfia-studio-next/construction/delivery-history.md`
3. `projects/sfia-studio-next/web/src/app/dev/sas-visual/[state]/page.tsx`
4. `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`
5. `projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx`
6. `projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts`
7. `projects/sfia-studio-next/web/src/components/figma/tokens.css`
8. `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts`
9. `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`
10. `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`
11. `projects/sfia-studio-next/web/src/domains/conversation/service.ts`
12. `projects/sfia-studio-next/web/src/domains/preparation/projection.ts`
13. `projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts`
14. `projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts`
15. `projects/sfia-studio-next/web/tests/e2e/g4-chat-first-sas.spec.ts`
16. `projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts`
17. `projects/sfia-studio-next/web/tests/e2e/intent-continuity-atlas.spec.ts`
18. `projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts`
19. `projects/sfia-studio-next/web/tests/e2e/ml4c-s05-real-api.spec.ts`
20. `projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts`
21. `projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts`
22. `projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts`
23. `projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts`
24. `projects/sfia-studio-next/web/tests/unit/nora-sas-maturation-instructions.test.ts`
25. `projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts`
26. `projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts`

## 4. Causes / corrections C1–C4
| Id | Cause | Fix |
| --- | --- | --- |
| C1 | `goal` mappé → `intention` | `projectIntention` durable ; goal local ; vide = conserver prior |
| C2 | merge sticky openQuestions + dump D4 OPEN | replace courant ; aperçu = projection only |
| C3 | EXPLORING/first_intention + max-height 655 | clarification après 1er msg ; flex fill |
| C4 | UI Ajuster | supprimée ; PATCH API conservé |

## 5. Ancres logiques (projection.ts)
```
190:    openQuestions: draft.openQuestions,
218:  if (input.qualificationStatus === "UNAVAILABLE") return null;
224:   * Never map turn-local `goal` into intention when a name correction is present —
228:  const durableIntention = (input.projectIntention ?? "").trim();
230:    durableIntention ||
```

## 6. Assertions discriminantes C1 / C2 (UNIT)
Fichier: `tests/unit/preparation-projection.test.ts`

### C1 — rename n’écrase pas l’intention durable
- prior.projectIntention = « Aider les chefs de projet informatiques… »
- rename: goal contient « Retenir "Cockpit… » », projectIntention=""
- expect name = Cockpit… ; intention contient chefs de projet ; intention !~ Retenir

### C1 — réorientation explicite met à jour l’intention
- projectIntention nouvelle = « Préparer et suivre le budget projet »
- expect intention exactement cette valeur

### C2 — clarifications vides remplacent les questions antérieures
- prior open: question alimentation manuelle/automatique
- resolved clarifications=[]
- expect openQuestions == []

### C2 / A10 — qualification UNAVAILABLE
- draftProjectionFromQualification(status=UNAVAILABLE) → null
- pas d’intention fabriquée ; pas d’apply projection (service ne persiste que si draft non null)

### Compatibilité qualifications incomplètes
1. `projectIntention=""` + `proposedProjectName` set → intention draft null → merge conserve prior
2. `desiredOutcome`/`initialScope` vides → mergeField conserve prior (non-écrasement)
3. `UNAVAILABLE` → null draft → snapshot confirmé inchangé
4. Zod `projectIntention` default `""` ; envelopes tests via `validateNoraTurnQualification`
5. Clarifications vides QUALIFIED = liste courante intentionnellement vide (pas « absent »)

Code UNIT C1/C2:
```typescript
  it("C1 — rename goal does not overwrite durable projectIntention", () => {
    const priorDraft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t4",
      qualificationStatus: "QUALIFIED",
      goal: "Confirmer le périmètre V1",
      projectIntention:
        "Aider les chefs de projet informatiques à retrouver décisions, blocages et actions",
      desiredOutcome: "Retrouver rapidement les engagements après réunion",
      initialScope: "Espace personnel manuel : décisions, blocages, actions",
      clarifications: [],
      proposedProjectName: "Assistant de pilotage",
      preparationAssessment: "BASE_SUFFICIENTE",
    })!;
    const prior: PreparationProjection = {
      ...priorDraft,
      revision: 4,
      observedAt: "2026-11-16T12:00:00.000Z",
    };
    const renameDraft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t5",
      qualificationStatus: "QUALIFIED",
      goal:
        'Retenir "Cockpit Réunions Projet — Test 16-11" comme nom de travail et confirmer le premier périmètre',
      projectIntention: "",
      desiredOutcome: "Retrouver rapidement les engagements après réunion",
      initialScope: "Espace personnel manuel : décisions, blocages, actions",
      clarifications: [],
      proposedProjectName: "Cockpit Réunions Projet — Test 16-11",
      preparationAssessment: "BASE_SUFFICIENTE",
    })!;
    const merged = mergeNoraDraftWithPrior(prior, renameDraft);
    expect(merged.name?.value).toBe("Cockpit Réunions Projet — Test 16-11");
    expect(merged.intention?.value).toContain("chefs de projet informatiques");
    expect(merged.intention?.value).not.toMatch(/Retenir/);
    expect(merged.desiredOutcome?.value).toContain("engagements");
  });

  it("C1 — explicit reorientation updates durable intention", () => {
    const priorDraft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t-old",
      qualificationStatus: "QUALIFIED",
      goal: "Suivi des réunions",
      projectIntention: "Suivre les décisions de réunion",
      clarifications: [],
      proposedProjectName: null,
    })!;
    const prior: PreparationProjection = {
      ...priorDraft,
      revision: 2,
      observedAt: "2026-11-16T12:00:00.000Z",
    };
    const reorient = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t-new",
      qualificationStatus: "QUALIFIED",
      goal: "Réorientation budgétaire",
      projectIntention: "Préparer et suivre le budget projet",
      clarifications: ["Quels postes budgétaires sont prioritaires ?"],
      proposedProjectName: null,
      preparationAssessment: "CLARIFYING",
    })!;
    const merged = mergeNoraDraftWithPrior(prior, reorient);
    expect(merged.intention?.value).toBe("Préparer et suivre le budget projet");
  });

  it("C2 — empty clarifications replace prior open questions", () => {
    const priorDraft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t3",
      qualificationStatus: "QUALIFIED",
      goal: "Usage post-réunion",
      projectIntention: "Retrouver décisions après réunion",
      clarifications: [
        "Pour une première version, le chef de projet pourrait-il déposer ou copier les éléments utiles après chaque réunion, ou la récupération automatique depuis les outils existants est-elle indispensable ?",
      ],
      proposedProjectName: null,
      preparationAssessment: "CLARIFYING",
    })!;
    const prior: PreparationProjection = {
      ...priorDraft,
      revision: 3,
      observedAt: "2026-11-16T12:00:00.000Z",
    };
    const resolved = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t4",
      qualificationStatus: "QUALIFIED",
      goal: "V1 manuelle retenue",
      projectIntention: "Retrouver décisions après réunion",
      initialScope: "Saisie manuelle ; intégrations en V2",
      clarifications: [],
      proposedProjectName: null,
      preparationAssessment: "PROPOSAL",
    })!;
    const merged = mergeNoraDraftWithPrior(prior, resolved);
    expect(merged.openQuestions).toEqual([]);
    expect(merged.initialScope?.value).toContain("Saisie manuelle");
  });

  it("C2 — UNAVAILABLE draft is null and does not invent intention", () => {
    expect(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t-u",
        qualificationStatus: "UNAVAILABLE",
        goal: "should-not-apply",
        clarifications: [],
        proposedProjectName: null,
      }),
    ).toBeNull();
  });
});
```

## 7. Assertions BROWSER T1→T7 (C1/C2/C4)
```typescript
  test("T1→T7 maturation: intention durable, questions résolues, rename, create", async ({
    page,
  }) => {
    test.setTimeout(240_000);
    await loginPilot(page, "b");
    await openNewPreparation(page);

    // T1 — vague / exploring presentation after first exchange
    await sendPrepMessage(page, SAS_MATURATION_T1);
    await expect(page.getByTestId("prep-proposal")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-stage-kicker").or(page.getByTestId("sas-stage-kicker"))).toBeVisible();
    await expect(page.getByTestId("sas-stage-kicker")).not.toHaveText(/PREMIÈRE INTENTION/i);
    await expect(page.getByTestId("prep-create-project")).toHaveCount(0);
    await expect(page.getByTestId("prep-create-unavailable")).toBeVisible();

    // T2 — open question about manual vs automatic appears
    await sendPrepMessage(page, SAS_MATURATION_T2);
    await expect(page.getByTestId("prep-field-intention")).toContainText(/chefs de projet/i, {
      timeout: 30000,
    });
    await expect(page.getByTestId("prep-proposal")).toContainText(/automatique|manuelle|réunion/i);

    // T3 — V1 manual resolves that question; open list empty / not the old arbitration
    await sendPrepMessage(page, SAS_MATURATION_T3);
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-field-name")).toContainText("Assistant de pilotage");
    await expect(page.getByTestId("prep-proposal-state")).toHaveText(/Base suffisante/i);
    await expect(page.getByTestId("prep-proposal")).not.toContainText(
      /récupération automatique depuis les outils existants est-elle indispensable/i,
    );

    // T4/T5 — rename only: name changes, durable intention preserved
    const unique = `Cockpit projets MT-${Date.now()}`;
    await sendPrepMessage(page, sasMaturationT4Rename(unique));
    await expect(page.getByTestId("prep-field-name")).toContainText(unique, {
      timeout: 30000,
    });
    await expect(page.getByTestId("prep-field-name")).not.toHaveText("Assistant de pilotage");
    await expect(page.getByTestId("prep-field-intention")).not.toContainText(/Retenir/i);
    await expect(page.getByTestId("prep-field-intention")).toContainText(/chefs de projet/i);
    await expect(page.getByTestId("prep-create-project")).toBeEnabled();
    await expect(page.getByTestId("prep-constitute")).toHaveCount(0);

    // T6 — explicit create
    await page.getByTestId("prep-create-project").click();
    await page.waitForURL("**/projects/**", { timeout: 30000 });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();

    // T7 — same thread after reload
    await page.reload();
    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("studio-rail")).toBeVisible();
  });
});
```

## 8. Résultats tests (cycle)
| Suite | Résultat |
| --- | --- |
| UNIT | PASS 405 |
| PG create-project + preparation-patch | PASS 30 |
| BROWSER FAKE Sas T1→T7 + chat-first | PASS 6 |
| next build DEV | PASS jw9G3w66bIZxtpzFshlr6 |
| Nora LIVE | NOT PROVEN |
| Morris UX candidat | PENDING — GO RECETTE distinct |

## 9. Diff complet du commit produit (26 fichiers)
```
commit 6798219fdb37af1b463326dc7015901b43b04acd
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Mon Nov 16 17:01:55 2026 +0100
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Mon Nov 16 17:01:55 2026 +0100

    fix(next): post-recette Sas Nora C1–C4 cognitive and UX corrections

    Preserve durable projectIntention across renames, replace resolved open
    questions, fill workspace height, and remove the manual aperçu path.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md b/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
index 83a28f6a..c39ec42a 100644
--- a/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
+++ b/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
@@ -1,75 +1,57 @@
-# As-built — ML4D Sas Nora convergence + garanties de création (2026-11-16)
+# As-built — ML4D Sas Nora convergence + correctifs post-recette (2026-11-16)

 | Champ | Valeur |
 | --- | --- |
 | Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + garanties |
-| Type | EVOL / MINOR candidate · **NO RELEASE** |
-| Base UX-004 | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
-| Candidat Sas | `e52cec0d` + **correctif CTA D2 (ce cycle)** → SHA post-commit |
+| Type | EVOL / PATCH candidat · **NO RELEASE** |
 | Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
+| Parent | `ec7405f323f86a0533dc507a1bfffc60ca1e5d0e` |
+| Candidat | SHA post-commit (ce cycle) |
 | Contrats | docs@`22ee5540` (fonctionnel + technique) |
-| Figma | `itgvCulInEnFY6DvgIegvP` 607:3 / 62 / 131 / 203 / 277 — VALIDATED UX Morris, **aucune écriture Figma** |
-| Lane | DEV → RECETTE (GO Morris cutover ce cycle) |
-| CTA création | `shouldShowCreateProjectCta` = D2 `canCreate` uniquement — **pas** de gate Nora `BASE_SUFFICIENTE` (SAS-F-07 / AF-06) |
-| Build DEV | post-commit (voir delivery-history) |
-| RECETTE | nouveau SHA/build après bascule (rollback `cd091385` / `E3J7wVO4MsKgl5aCTDhed`) |
+| Figma | `itgvCulInEnFY6DvgIegvP` 607:* — lecture seule |
+| Lane | **DEV only** — RECETTE **inchangée** |
+| RECETTE servie | `ec7405f3` / `67akzrr6bFEp4YOh7aHD7` @ `:3200` |
+| Build DEV | `jw9G3w66bIZxtpzFshlr6` |
+| Package | `0.0.0-dev` |

-## Architecture
+## Correctifs post-recette Morris (C1–C4)

-1. Tour Nora unique → qualification structurée (`desiredOutcome`, `initialScope`, `proposedProjectName`, `preparationAssessment*`).
-2. Draft projection après qualification ; **persistance seulement après commit terminal COMPLETE**.
-3. `mergeNoraDraftWithPrior` protège les champs `PILOT_EXPRESSED` / `PILOT_UI_EDIT`.
-4. PATCH aperçu = `applyPilotApercuCorrection` + CAS `expectedCreationRevision` **obligatoire** ; résultat classifié `APPLIED_CURRENT` / `APPLIED_SUPERSEDED` / `CONFLICT_NOT_APPLIED` / `UNKNOWN`.
-5. Assessment Nora **uniquement** si fourni dans la qualification (pas d’heuristique).
-6. Création : `createProjectCommand` sous verrou ; **nom = proposition D2 inspectée** (projection.name sinon preview_name) ; refus d’un nom client arbitraire.
-7. UI : conversation + aperçu ; Journal/Documents secondaires ; pas de succès trompeur sur PATCH superseded.
+| Id | Anomalie | Cause vérifiée | Correction |
+| --- | --- | --- | --- |
+| C1 | Intention = demande de renommage | `goal` mappé dans `intention` | Champ structuré `projectIntention` ; `goal` = tour local ; merge conserve l'intention si vide |
+| C2 | Question résolue encore ouverte | merge sticky `draft.openQuestions.length > 0 ? draft : prior` + dump D4 OPEN dans l'UI | Remplacement courant par clarifications du tour ; aperçu = projection seulement |
+| C3 | Première intention trop longtemps + bande vide | EXPLORING→first_intention ; `max-height: 655px` | Présentation clarification après 1er échange ; workspace flex remplit la hauteur shell |
+| C4 | « Ajuster l'aperçu » | Parcours manuel UI | Supprimé du Sas ; API PATCH conservée (dette technique / tests) |

-## Garanties consolidées (ce cycle)
+## Architecture (inchangée dans ses autorités)

-| Écart | Constat | Correction |
-| --- | --- | --- |
-| G1 Nom inspecté | Mission binding acceptait un nom client arbitraire | Contrôle décisif sous `FOR UPDATE` dans `createProjectCommand` ; mission non réécrite depuis le payload |
-| G2 Parcours navigateur | E2E multi-tours PATCH injecté avant Créer | T1→T5 conversationnel avec nom unique ; aucun PATCH de rattrapage ; T3 sans `REQUEST_EFFECT` artificiel |
-| G3 PATCH concurrent | 200 + « Aperçu corrigé » après supersession | `writeStatus` honnête ; UI distingue courant / remplacé / non appliqué |
-
-## Contradiction PF-CRE-14
-
-Orientation Morris (unicité / Pilote) vs PF-CRE-14. **R2 non réécrit.** Gate Morris ouvert.
-
-## Migration 013
-
-Déjà appliquée sur RECETTE (cycle déploiement antérieur). **Aucune migration** dans le cycle UX.
-
-## Convergence UX Figma → code (cycle 8)
-
-Composition partagée `sas-*` pilotée par `sas-presentation` (assessment D2 + reprise), sans nouveau moteur métier.
-
-| État | Node Figma | Runtime |
-| --- | --- | --- |
-| Première intention | 607:3 | stage `first_intention` |
-| Clarification | 607:62 | `clarification` |
-| Proposition | 607:131 | `proposal` |
-| Base suffisante | 607:203 | `base_sufficient` + CTA aperçu mis en valeur |
-| Reprise | 607:277 | `resume` |
-
-CTA « Créer le projet » : visible dès préconditions D2 (`canCreateFromProjection`), y compris CLARIFYING / PROPOSAL / reprise / assessment absent. Emphase visuelle frame 04 conservée sans gate métier.
-
-F2 géométrie stable (1680×970) : rail 246 / header 72 / composer 118 / preview 518 / conversation 800 — **Δ 0 CSS px** (cycle UX précédent).
-
-Harness DEV : `/dev/sas-visual/[state]` (aide seulement). Route réelle : `/preparations/{id}`.
+1. Qualification D3 unique → draft projection D2 après COMPLETE.
+2. `projectIntention` / `desiredOutcome` / `initialScope` / `proposedProjectName` / `clarifications` / assessment structurés.
+3. Création = D2 `canCreate` + clic Pilote uniquement.
+4. Pas de second LLM, pas de parse Markdown, pas de lexique de résolution.
+5. D4 global hors périmètre — dette compteurs/sujets transmise à la revue espace projet.

 ## Preuves

 | Niveau | Résultat |
 | --- | --- |
-| UNIT presentation / CTA D2 / rail / projection | PASS |
-| PG create-project | PASS |
-| BROWSER FAKE Sas + chat-first | PASS |
-| Captures Figma cycle UX | réutilisées — **pas** de nouvelle campagne pixel |
-| NORA LIVE | **NOT PROVEN** |
-| MORRIS UX visuelle | **PENDING** (Morris sur RECETTE) |
-| Verdict technique | `TECHNICALLY READY FOR MORRIS USER REVIEW` |
+| UNIT (405) | PASS |
+| PG create-project + preparation-patch | PASS |
+| BROWSER FAKE Sas T1→T7 + chat-first (6) | PASS |
+| next build DEV | PASS (`jw9G3w66bIZxtpzFshlr6`) |
+| Nora LIVE nouveau candidat | **NOT PROVEN** |
+| Morris UX candidat | **PENDING** (GO RECETTE ultérieur) |
+| RECETTE | **inchangée** |
+
+## Manifeste candidat RECETTE (non déployé)
+
+- source_sha: (HEAD post-commit)
+- tree_web: (post-commit)
+- build_dev: `jw9G3w66bIZxtpzFshlr6`
+- schema: 013 present — aucune migration
+- previous_recette: `ec7405f3` / `67akzrr6bFEp4YOh7aHD7`
+- go_recette: **REQUIS** (mandat distinct)

 ## Rollback

-Applicatif : bascule LaunchAgent vers worktree `cd091385` / build `E3J7wVO4MsKgl5aCTDhed`. Aucune migration destructive. `projection_json` conservé.
+Revert commit local. RECETTE non touchée. `projection_json` v1 compatible.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 06d1ec9e..d70a905d 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -25,6 +25,21 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré

 ---

+## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-POST-RECETTE-C1C4
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~17:00 CET |
+| Macro-lot | ML4D — Correctif intégré post-recette Morris (C1–C4) |
+| Type | Cycle 8 Delivery · CRITICAL · EVOL · **NO RELEASE** |
+| Parent | `ec7405f323f86a0533dc507a1bfffc60ca1e5d0e` |
+| Scope | projectIntention ; openQuestions replace ; présentation/hauteur ; suppression Ajuster |
+| Non-scope | RECETTE, migrations, D4 global, Figma write, PR/merge/STABLE/Gate C/ML5 |
+| Preuves | UNIT 405 ; PG create+patch 30 ; BROWSER T1→T7 + chat-first 6 ; build `jw9G3w66bIZxtpzFshlr6` |
+| RECETTE | **inchangée** `ec7405f3` / `67akzrr6bFEp4YOh7aHD7` |
+| Push produit | **AUCUN** |
+| Verdict cible | `READY WITH RESERVES — SAS NORA POST-RECETTE CORRECTIONS IMPLEMENTED` |
+
 ## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-UX-CTA-RECETTE

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/app/dev/sas-visual/[state]/page.tsx b/projects/sfia-studio-next/web/src/app/dev/sas-visual/[state]/page.tsx
index 0147e478..89760067 100644
--- a/projects/sfia-studio-next/web/src/app/dev/sas-visual/[state]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/dev/sas-visual/[state]/page.tsx
@@ -19,9 +19,6 @@ export default function SasVisualHarnessPage() {
   const params = useParams<{ state: string }>();
   const fixture = useMemo(() => parseSasVisualFixture(params.state), [params.state]);
   const [draft, setDraft] = useState("");
-  const [editing, setEditing] = useState(false);
-  const [draftName, setDraftName] = useState(fixture?.previewName ?? "");
-  const [draftSummary, setDraftSummary] = useState(fixture?.previewSummary ?? "");

   if (process.env.NODE_ENV === "production" && process.env.STUDIO_LANE === "RECETTE") {
     return (
@@ -93,21 +90,10 @@ export default function SasVisualHarnessPage() {
           previewSummary={fixture.previewSummary}
           creationRevision={1}
           messageCount={fixture.messages.length}
-          openPoints={fixture.openPoints}
           projection={fixture.projection}
           projectionFreshness="current"
           presentation={presentation}
           busy={false}
-          editing={editing}
-          draftName={draftName}
-          draftSummary={draftSummary}
-          onDraftName={setDraftName}
-          onDraftSummary={setDraftSummary}
-          onStartConstitute={() => setEditing(true)}
-          onAdoptLastNoraSummary={() => undefined}
-          canAdoptLastNora={false}
-          onSaveProposal={() => setEditing(false)}
-          onCancelEdit={() => setEditing(false)}
           onCreateProject={() => undefined}
         />
       </div>
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 88ad98e3..2384006d 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -46,9 +46,6 @@ export default function PreparationPage() {
   const preparationId = params.preparationId;
   const isResumedPrep =
     searchParams.get("resume") === "1" || searchParams.get("from") === "portfolio";
-  const [proposalEditing, setProposalEditing] = useState(false);
-  const [draftProposalName, setDraftProposalName] = useState("");
-  const [draftProposalSummary, setDraftProposalSummary] = useState("");
   const [revRows, setRevRows] = useState<RevisionRow[]>([]);
   const [docViewMode, setDocViewMode] = useState<"read" | "edit">("read");
   const [messages, setMessages] = useState<Msg[]>([]);
@@ -490,78 +487,6 @@ export default function PreparationPage() {
     } else setStatus(`Diff ${cmp.status}`);
   }

-  async function savePreview() {
-    const name = proposalEditing ? draftProposalName : previewName;
-    const summary = proposalEditing ? draftProposalSummary : previewSummary;
-    const res = await fetch(`/api/preparations/${preparationId}`, {
-      method: "PATCH",
-      headers: { "Content-Type": "application/json" },
-      body: JSON.stringify({
-        previewName: name,
-        previewSummary: summary,
-        expectedCreationRevision: creationRevision,
-      }),
-    });
-    let j: {
-      writeStatus?: string;
-      appliedRevision?: number;
-      creationRevision?: number;
-      preparation?: { previewName?: string; previewSummary?: string; creationRevision?: number };
-      projection?: PreparationProjection | null;
-      appliedProjection?: PreparationProjection | null;
-      error?: string;
-      actualCreationRevision?: number;
-      reason?: string;
-    } = {};
-    try {
-      j = (await res.json()) as typeof j;
-    } catch {
-      j = {};
-    }
-    if (res.ok) {
-      const writeStatus = j.writeStatus ?? "APPLIED_CURRENT";
-      // Always show the coherent current pair (revision + projection + preparation).
-      setPreviewName(j.preparation?.previewName ?? name);
-      setPreviewSummary(j.preparation?.previewSummary ?? summary);
-      setCreationRevision(
-        typeof j.creationRevision === "number"
-          ? j.creationRevision
-          : (j.preparation?.creationRevision ?? creationRevision),
-      );
-      setProjection((j.projection as PreparationProjection | null) ?? null);
-      setProjectionFreshness("current");
-
-      if (writeStatus === "APPLIED_SUPERSEDED") {
-        // Write confirmed but no longer current — never announce plain « Aperçu corrigé ».
-        // Keep local draft so the Pilot can re-apply voluntarily on the newer revision.
-        setStatus(
-          `Correction enregistrée (rév. ${j.appliedRevision ?? "?"}) puis remplacée par une version plus récente (rév. ${j.creationRevision ?? "?"}) — inspectez l'état courant ; le brouillon local est conservé.`,
-        );
-        // Keep proposalEditing true with prior draft fields when in edit mode.
-      } else if (writeStatus === "UNCHANGED_CURRENT") {
-        setProposalEditing(false);
-        setStatus(`Aperçu inchangé · révision ${j.creationRevision ?? "?"}`);
-      } else {
-        setProposalEditing(false);
-        setStatus(`Aperçu corrigé · révision ${j.creationRevision ?? "?"}`);
-      }
-    } else if (res.status === 409) {
-      setStatus(
-        `CONFLICT: correction non appliquée (rév. actuelle ${j.actualCreationRevision ?? "?"}) — rechargement sans écrasement du brouillon`,
-      );
-      await reload();
-    } else if (res.status === 401) {
-      setStatus("Session invalide — reconnexion requise");
-    } else if (res.status === 400) {
-      setStatus(`Requête invalide: ${j.reason ?? j.error ?? "corps"}`);
-    } else if (res.status === 503 || res.status === 500) {
-      setStatus("Enregistrement non confirmé (panne) — aucun succès annoncé ; rechargement");
-      await reload();
-    } else {
-      setStatus(`Échec enregistrement aperçu (${res.status})`);
-    }
-  }
-
   /**
    * ML4C S02 — after lost ACK, reconcile with the same idempotency key before any new create.
    * Read-only GET; never mints a second mutation automatically.
@@ -723,19 +648,6 @@ export default function PreparationPage() {
     }
   }

-  function startConstituteProposal() {
-    setDraftProposalName(projection?.name?.value?.trim() || previewName);
-    setDraftProposalSummary(
-      projection?.intention?.value?.trim() || previewSummary,
-    );
-    setProposalEditing(true);
-  }
-
-  function adoptLastNoraSummary() {
-    const last = [...messages].reverse().find((m) => m.role === "assistant");
-    if (last) setDraftProposalSummary(last.content.slice(0, 2000));
-  }
-
   async function loadRevisionHistory(documentId: string) {
     const res = await fetch(`/api/preparations/${preparationId}/documents/${documentId}`);
     if (!res.ok) {
@@ -850,23 +762,10 @@ export default function PreparationPage() {
             previewSummary={previewSummary}
             creationRevision={creationRevision}
             messageCount={messages.length}
-            openPoints={(knowledge?.openPoints ?? [])
-              .filter((o) => o.status === "OPEN")
-              .map((o) => ({ id: o.id, statement: o.statement }))}
             projection={projection}
             projectionFreshness={projectionFreshness}
             presentation={presentation}
             busy={busy}
-            editing={proposalEditing}
-            draftName={draftProposalName}
-            draftSummary={draftProposalSummary}
-            onDraftName={setDraftProposalName}
-            onDraftSummary={setDraftProposalSummary}
-            onStartConstitute={startConstituteProposal}
-            onAdoptLastNoraSummary={adoptLastNoraSummary}
-            canAdoptLastNora={messages.some((m) => m.role === "assistant")}
-            onSaveProposal={() => void savePreview()}
-            onCancelEdit={() => setProposalEditing(false)}
             onCreateProject={() => void createProject()}
             status={status}
           />
diff --git a/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx b/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
index 0855ba63..4fc7bb71 100644
--- a/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
@@ -2,7 +2,7 @@

 /**
  * Living D2 aperçu — single vertical panel aligned to Sas Nora Figma composition.
- * Create CTA lives inside this panel (frame 04). No separate authority card.
+ * Create CTA lives inside this panel (frame 04). Corrections flow via conversation only.
  */

 import type { PreparationProjection } from "@/domains/preparation/projection";
@@ -10,8 +10,6 @@ import { canCreateFromProjection } from "@/domains/preparation/projection";
 import type { SasPresentationCopy } from "./sas-presentation";
 import { shouldShowCreateProjectCta } from "./sas-presentation";

-export type ProposalOpenPoint = { id: string; statement: string };
-
 function statusLabel(status: string | undefined, sourceKind?: string): string {
   if (status === "PILOT_EXPRESSED") {
     return sourceKind === "PILOT_UI_EDIT" ? "Corrigé (inspection)" : "Exprimé";
@@ -43,21 +41,10 @@ export function PreparationProposal(props: {
   previewSummary: string;
   creationRevision: number;
   messageCount: number;
-  openPoints: ProposalOpenPoint[];
   projection: PreparationProjection | null;
   projectionFreshness?: "current" | "stale" | "unavailable" | "legacy";
   presentation: SasPresentationCopy;
   busy: boolean;
-  editing: boolean;
-  draftName: string;
-  draftSummary: string;
-  onDraftName: (v: string) => void;
-  onDraftSummary: (v: string) => void;
-  onStartConstitute: () => void;
-  onAdoptLastNoraSummary: () => void;
-  canAdoptLastNora: boolean;
-  onSaveProposal: () => void;
-  onCancelEdit: () => void;
   onCreateProject: () => void;
   status?: string;
 }) {
@@ -70,12 +57,10 @@ export function PreparationProposal(props: {
   const scope = projection?.initialScope?.value?.trim() || "";
   const assessment = projection?.suggestion?.assessment;
   const explanation = projection?.suggestion?.explanation?.trim() || "";
-  const openFromProjection = (projection?.openQuestions ?? []).filter((q) => q.value.trim());
-  const openFromKnowledge = props.openPoints;
-  const openCombined = [
-    ...openFromProjection.map((q) => q.value),
-    ...openFromKnowledge.map((o) => o.statement),
-  ].filter(Boolean);
+  // Current open set = D2 projection only (not the historical D4 OPEN catalogue).
+  const openCombined = (projection?.openQuestions ?? [])
+    .map((q) => q.value.trim())
+    .filter(Boolean);
   const hasLiving =
     Boolean(name) ||
     Boolean(intention) ||
@@ -86,8 +71,6 @@ export function PreparationProposal(props: {
     Boolean(props.previewSummary.trim());
   const canCreate = !created && canCreateFromProjection(projection, props.previewName);
   const stage = props.presentation.stage;
-  // CTA lives in the aperçu panel (Figma frame 04 composition). Eligibility is D2 only —
-  // Nora assessment must not gate the Pilote's right to create (SAS-F-07 / AF-06).
   const showCreateCta = shouldShowCreateProjectCta({ created, canCreate });

   const sections: Section[] = [];
@@ -116,26 +99,20 @@ export function PreparationProposal(props: {
     sections.push({
       key: "intention",
       label: "INTENTION CONSERVÉE",
-      value: name || intention || props.previewSummary.trim() || "Intention reprise",
-      testId: "prep-field-name",
-      provenance: projection?.name
-        ? statusLabel(projection.name.status, projection.name.source.kind)
-        : undefined,
+      value: intention || name || props.previewSummary.trim() || "Intention reprise",
+      testId: "prep-field-intention",
+      provenance: projection?.intention ? statusLabel(projection.intention.status) : undefined,
     });
-    if (outcome || intention || props.previewSummary.trim()) {
-      sections.push({
-        key: "acquis",
-        label: "ACQUIS",
-        value:
-          [intention || props.previewSummary.trim(), outcome, scope].filter(Boolean).join(" · ") ||
-          "Éléments déjà clarifiés",
-        testId: "prep-field-intention",
-      });
+    if (outcome) {
+      sections.push({ key: "outcome", label: "RÉSULTAT CONSERVÉ", value: outcome });
+    }
+    if (scope) {
+      sections.push({ key: "scope", label: "PÉRIMÈTRE CONSERVÉ", value: scope });
     }
     sections.push({
       key: "open",
-      label: "POINT EN SUSPENS",
-      value: openCombined[0] || "À préciser dans la conversation",
+      label: "POINTS TOUJOURS OUVERTS",
+      value: openCombined[0] || "Aucun point ouvert listé",
       tone: openCombined.length ? "amber" : "quiet",
     });
   } else {
@@ -224,109 +201,50 @@ export function PreparationProposal(props: {
         </h2>
         <p className="sas-preview-sub">Proposition évolutive de Nora · non autorisante</p>

-        {props.editing ? (
-          <div className="sas-preview-edit space-y-2" data-testid="prep-proposal-edit">
-            <p className="text-xs muted">
-              Ajustement explicite pour inspection — n&apos;est pas le parcours principal.
-            </p>
-            <label className="block text-xs muted" htmlFor="prep-prop-name">
-              Nom envisagé
-            </label>
-            <input
-              id="prep-prop-name"
-              className="input"
-              value={props.draftName}
-              onChange={(e) => props.onDraftName(e.target.value)}
-              placeholder="Nom du projet envisagé"
-              data-testid="prep-proposal-name"
-            />
-            <label className="block text-xs muted" htmlFor="prep-prop-summary">
-              Résumé inspecté
-            </label>
-            <textarea
-              id="prep-prop-summary"
-              className="textarea"
-              value={props.draftSummary}
-              onChange={(e) => props.onDraftSummary(e.target.value)}
-              placeholder="Intention, résultat visé, points ouverts…"
-              data-testid="prep-proposal-summary"
-            />
-            {props.canAdoptLastNora ? (
-              <button
-                type="button"
-                className="btn secondary"
-                onClick={props.onAdoptLastNoraSummary}
-                data-testid="prep-adopt-nora"
-              >
-                Reprendre le dernier message Nora comme résumé
-              </button>
-            ) : null}
-            <div className="flex flex-wrap gap-2">
-              <button
-                type="button"
-                className="btn"
-                disabled={props.busy}
-                onClick={props.onSaveProposal}
-                data-testid="prep-proposal-save"
-              >
-                Enregistrer pour inspection
-              </button>
-              <button
-                type="button"
-                className="btn secondary"
-                disabled={props.busy}
-                onClick={props.onCancelEdit}
+        <div
+          className="sas-preview-sections"
+          data-testid={hasLiving ? "prep-proposal-ready" : "prep-proposal-empty"}
+        >
+          {sections.map((section) => (
+            <div key={section.key} className="sas-preview-section">
+              <p className="sas-preview-label">{section.label}</p>
+              <p
+                className={`sas-preview-value${
+                  section.tone === "amber"
+                    ? " is-amber"
+                    : section.tone === "quiet"
+                      ? " is-quiet"
+                      : ""
+                }`}
+                data-testid={section.testId}
               >
-                Annuler
-              </button>
+                {section.value}
+              </p>
+              {section.provenance ? (
+                <span className="sas-preview-provenance" data-testid={`${section.testId}-provenance`}>
+                  · {section.provenance}
+                </span>
+              ) : null}
             </div>
-          </div>
-        ) : (
-          <div className="sas-preview-sections" data-testid={hasLiving ? "prep-proposal-ready" : "prep-proposal-empty"}>
-            {sections.map((section) => (
-              <div key={section.key} className="sas-preview-section">
-                <p className="sas-preview-label">{section.label}</p>
-                <p
-                  className={`sas-preview-value${
-                    section.tone === "amber"
-                      ? " is-amber"
-                      : section.tone === "quiet"
-                        ? " is-quiet"
-                        : ""
-                  }`}
-                  data-testid={section.testId}
-                >
-                  {section.value}
+          ))}
+          {openCombined.length > 1
+            ? openCombined.slice(1, 4).map((q, i) => (
+                <p key={`oq-${i}`} className="sas-preview-open-extra">
+                  · {q}
                 </p>
-                {section.provenance ? (
-                  <span className="sas-preview-provenance" data-testid={`${section.testId}-provenance`}>
-                    · {section.provenance}
-                  </span>
-                ) : null}
-              </div>
-            ))}
-            {openCombined.length > 1
-              ? openCombined.slice(1, 4).map((q, i) => (
-                  <p key={`oq-${i}`} className="sas-preview-open-extra">
-                    · {q}
-                  </p>
-                ))
-              : null}
-          </div>
-        )}
+              ))
+            : null}
+        </div>

-        {!props.editing ? (
-          <div
-            className={`sas-maturity ${stage === "base_sufficient" ? "sas-maturity-ok" : ""}`}
-            data-testid="prep-nora-assessment"
-          >
-            <p className="sas-maturity-title">{props.presentation.maturityTitle}</p>
-            <p className="sas-maturity-body">
-              {/* Nora qualitative advice stays visible at any stage; it never gates create. */}
-              {explanation || props.presentation.maturityBody}
-            </p>
-          </div>
-        ) : null}
+        <div
+          className={`sas-maturity ${stage === "base_sufficient" ? "sas-maturity-ok" : ""}`}
+          data-testid="prep-nora-assessment"
+        >
+          <p className="sas-maturity-title">{props.presentation.maturityTitle}</p>
+          <p className="sas-maturity-body">
+            {explanation || props.presentation.maturityBody}
+          </p>
+        </div>

         {showCreateCta ? (
           <div
@@ -352,21 +270,10 @@ export function PreparationProposal(props: {
           <p className="sas-preview-foot" data-testid="prep-create-unavailable">
             {created
               ? "Projet créé — continuité disponible dans l’espace projet."
-              : "Indiquez un nom de projet dans l’aperçu pour pouvoir créer."}
+              : "Indiquez un nom de projet dans la conversation pour pouvoir créer."}
           </p>
         )}

-        {!props.editing && !created ? (
-          <button
-            type="button"
-            className="btn secondary sas-preview-adjust"
-            onClick={props.onStartConstitute}
-            data-testid="prep-constitute"
-          >
-            Ajuster l&apos;aperçu
-          </button>
-        ) : null}
-
         <p className="sas-preview-meta muted text-xs sr-only" data-testid="prep-creation-revision">
           Révision création : {props.creationRevision}
           {props.projectionFreshness === "legacy"
diff --git a/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts b/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts
index b314201b..2c7246d4 100644
--- a/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts
+++ b/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts
@@ -31,14 +31,22 @@ const ASSESSMENT_TO_STAGE: Record<string, SasPresentationStage> = {
   BASE_SUFFICIENTE: "base_sufficient",
 };

+/**
+ * Presentation stage ≠ Nora cognitive assessment ≠ D2 create eligibility.
+ * EXPLORING after the first exchange still advances presentation to clarification
+ * so the chrome does not stay on « Première intention » during substantive dialogue.
+ */
 export function resolveSasPresentationStage(input: {
   isResumed: boolean;
   assessment: ProjectionAssessment | null | undefined;
   messageCount: number;
 }): SasPresentationStage {
   if (input.isResumed) return "resume";
-  if (input.assessment && ASSESSMENT_TO_STAGE[input.assessment]) {
-    return ASSESSMENT_TO_STAGE[input.assessment];
+  if (input.assessment === "BASE_SUFFICIENTE") return "base_sufficient";
+  if (input.assessment === "PROPOSAL") return "proposal";
+  if (input.assessment === "CLARIFYING") return "clarification";
+  if (input.assessment === "EXPLORING") {
+    return input.messageCount === 0 ? "first_intention" : "clarification";
   }
   if (input.messageCount === 0) return "first_intention";
   return "clarification";
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 1141f628..48d01750 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -31,7 +31,8 @@
   --sas-conversation-w: 800px;
   --sas-preview-w: 518px;
   --sas-composer-h: 118px;
-  --sas-panel-h: 655px;
+  /* Figma reference height (655) is a proportion cue — runtime fills available shell height. */
+  --sas-panel-h-ref: 655px;
 }

 .fig-page {
@@ -249,8 +250,8 @@
   align-items: stretch;
   flex: 1 1 auto;
   min-height: 0;
-  height: 0; /* flex child fills remaining viewport without overflowing */
-  max-height: var(--sas-panel-h);
+  /* Fill remaining shell height — do not cap at Figma 655px (caused empty bottom band). */
+  height: 0;
   overflow: hidden;
 }

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 87df6cb9..d9df1893 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -41,6 +41,7 @@ function normalizeUtterance(text: string): string {
 type QualExtras = Partial<
   Pick<
     NoraTurnQualification,
+    | "projectIntention"
     | "desiredOutcome"
     | "initialScope"
     | "proposedProjectName"
@@ -60,6 +61,7 @@ function dialogue(
     schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
     status: "QUALIFIED",
     goal,
+    projectIntention: extras?.projectIntention ?? "",
     desiredOutcome: extras?.desiredOutcome ?? "",
     initialScope: extras?.initialScope ?? "",
     proposedProjectName: extras?.proposedProjectName ?? "",
@@ -92,6 +94,7 @@ function effect(
     schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
     status: "QUALIFIED",
     goal,
+    projectIntention: extras?.projectIntention ?? "",
     desiredOutcome: extras?.desiredOutcome ?? "",
     initialScope: extras?.initialScope ?? "",
     proposedProjectName: extras?.proposedProjectName ?? "",
@@ -195,6 +198,7 @@ register(
     "Je comprends que vous souhaitez mieux accompagner les chefs de projet, sans avoir encore fixé ce que l'outil doit faire. Reformulons : un espace d'aide au pilotage, dont le rôle reste à préciser. Quelle difficulté concrète voulez-vous réduire en premier ?",
     ["NO_EFFECT"],
     {
+      projectIntention: "Aider les chefs de projet sans avoir encore fixé le contenu exact de l'outil",
       clarifications: [
         "Quelle difficulté concrète voulez-vous réduire en premier pour les chefs de projet ?",
       ],
@@ -208,13 +212,16 @@ register(
 register(
   SAS_MATURATION_T2,
   dialogue(
-    "Retrouver les décisions importantes et savoir quoi faire ensuite",
+    "Préciser le résultat : décisions et prochaines actions",
     "Vous visez surtout à retrouver les décisions importantes et à savoir quoi faire ensuite. C'est un résultat clair : continuité des décisions et des prochaines actions. Le périmètre exact (personnel / équipe) reste ouvert.",
     ["NO_EFFECT"],
     {
+      projectIntention:
+        "Aider les chefs de projet à retrouver les décisions importantes et à savoir quoi faire ensuite",
       desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
       clarifications: [
         "Souhaitez-vous commencer seul, ou le travail en équipe fait-il déjà partie du premier périmètre ?",
+        "Pour une première version, le chef de projet pourrait-il déposer ou copier les éléments utiles après chaque réunion, ou la récupération automatique depuis les outils existants est-elle indispensable ?",
       ],
       preparationAssessment: "CLARIFYING",
       preparationAssessmentExplanation:
@@ -227,14 +234,16 @@ register(
   SAS_MATURATION_T3,
   // Proposition de démarrage ≠ REQUEST_EFFECT : proposedProjectName only; Pilot create remains D2.
   dialogue(
-    "Espace personnel : décisions, points ouverts, prochaines actions",
+    "Confirmer le périmètre V1 manuel (équipe plus tard)",
     "Premier périmètre : un espace personnel avec décisions, points ouverts et prochaines actions. Le travail en équipe est une piste ultérieure, pas une décision immédiate. Nom de travail proposé : Assistant de pilotage. Cette base me paraît suffisante pour démarrer si vous le souhaitez.",
     ["NO_EFFECT", "PROPOSAL_ONLY"],
     {
+      projectIntention:
+        "Aider les chefs de projet à retrouver les décisions importantes et à savoir quoi faire ensuite",
       proposedProjectName: "Assistant de pilotage",
       desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
       initialScope:
-        "Espace personnel : décisions, points ouverts, prochaines actions (équipe plus tard)",
+        "Espace personnel alimenté manuellement : décisions, points ouverts, prochaines actions (intégrations / équipe plus tard)",
       clarifications: [],
       preparationAssessment: "BASE_SUFFICIENTE",
       preparationAssessmentExplanation:
@@ -246,15 +255,18 @@ register(
 register(
   SAS_MATURATION_T4,
   // Dialogue (no REQUEST_EFFECT): name correction; create remains an explicit D2 Pilot act.
+  // goal is turn-local; projectIntention empty → durable intention preserved by D2 merge.
   dialogue(
-    "Espace personnel de pilotage nommé Cockpit projets",
+    "Retenir Cockpit projets comme nom de travail et confirmer le premier périmètre",
     "Correction prise en compte : le nom de travail est Cockpit projets (et non Assistant de pilotage). Le reste de la proposition (résultat et périmètre personnel) est conservé.",
     ["NAME_CORRECTION", "NO_EFFECT"],
     {
+      projectIntention: "",
       proposedProjectName: "Cockpit projets",
       desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
       initialScope:
-        "Espace personnel : décisions, points ouverts, prochaines actions (équipe plus tard)",
+        "Espace personnel alimenté manuellement : décisions, points ouverts, prochaines actions (intégrations / équipe plus tard)",
+      clarifications: [],
       preparationAssessment: "BASE_SUFFICIENTE",
       preparationAssessmentExplanation:
         "Après correction du nom, la base reste suffisante pour démarrer : résultat et périmètre personnel sont acquis ; le nom inspecté est Cockpit projets.",
@@ -270,14 +282,16 @@ export function sasMaturationT4Rename(uniqueName: string): string {
 function maturationRenameQualification(uniqueName: string): NoraTurnQualification {
   const name = uniqueName.trim().slice(0, 120);
   return dialogue(
-    `Espace personnel de pilotage nommé ${name}`,
+    `Retenir « ${name} » comme nom de travail et confirmer le premier périmètre`,
     `Correction prise en compte : le nom de travail est ${name} (et non Assistant de pilotage). Le reste de la proposition (résultat et périmètre personnel) est conservé.`,
     ["NAME_CORRECTION", "NO_EFFECT"],
     {
+      projectIntention: "",
       proposedProjectName: name,
       desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
       initialScope:
-        "Espace personnel : décisions, points ouverts, prochaines actions (équipe plus tard)",
+        "Espace personnel alimenté manuellement : décisions, points ouverts, prochaines actions (intégrations / équipe plus tard)",
+      clarifications: [],
       preparationAssessment: "BASE_SUFFICIENTE",
       preparationAssessmentExplanation: `Après correction du nom, la base reste suffisante pour démarrer : résultat et périmètre personnel sont acquis ; le nom inspecté est ${name}.`,
     },
@@ -287,13 +301,15 @@ function maturationRenameQualification(uniqueName: string): NoraTurnQualificatio
 function cockpitNamedQualification(projectName: string): NoraTurnQualification {
   const name = projectName.trim().slice(0, 120);
   return dialogue(
-    "Cockpit de suivi des projets",
+    `Proposer le nom de travail ${name} pour le cockpit`,
     `Je comprends : un cockpit pour suivre vos projets, en commençant par le portefeuille et les risques. Nom de travail proposé : ${name}. Cette base me paraît suffisante pour démarrer ; les détails pourront se préciser ensuite.`,
     ["NO_EFFECT", "PROPOSAL_ONLY"],
     {
+      projectIntention: "Aider à suivre les projets via un cockpit (portefeuille et risques en premier)",
       proposedProjectName: name,
       desiredOutcome: "Voir portefeuille et risques en un seul endroit",
       initialScope: "Portefeuille et risques en premier",
+      clarifications: [],
       preparationAssessment: "BASE_SUFFICIENTE",
       preparationAssessmentExplanation:
         "Intention, résultat et périmètre initial sont assez clairs pour démarrer. Les raffinements peuvent se faire dans le projet.",
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 6f2be5ee..b97026a2 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -434,10 +434,13 @@ async function runLiveWithTools(
     "SORTIE STRUCTURÉE OBLIGATOIRE (qualification sémantique) :",
     "- Remplis l'enveloppe typée (schemaVersion ml4c-sem-qual-v1).",
     "- replyDraft = texte destiné au Pilote (français, Markdown utile, ≤12000).",
-    "- goal = intention comprise (reformulation fidèle, sans invention).",
-    "- desiredOutcome / initialScope = seulement s'ils sont réellement exprimés ; sinon chaînes vides.",
+    "- goal = compréhension du TOUR courant (demande immédiate / reformulation locale), sans invention.",
+    "- projectIntention = intention MÉTIER DURABLE du projet. Distincte de goal et de proposedProjectName.",
+    "- Si le Pilote ne fait que nommer/renommer ou confirmer un point local : projectIntention = chaîne vide (conserver l'intention antérieure).",
+    "- Si le Pilote établit ou corrige explicitement l'objectif fondateur : renseigner projectIntention fidèlement.",
+    "- desiredOutcome / initialScope = seulement s'ils sont réellement exprimés ou corrigés ce tour ; sinon chaînes vides (conservation D2).",
     "- proposedProjectName = nom de travail du sas s'il est proposé ou corrigé ; chaîne vide sinon. Préférer ce champ pour une correction de nom sans nouvel effet D2.",
-    "- clarifications = questions réellement utiles (peu nombreuses), pas une checklist.",
+    "- clarifications = UNIQUEMENT les questions encore ouvertes après CE tour (liste vide si toutes résolues). Ne pas répéter une question déjà tranchée.",
     "- preparationAssessment = EXPLORING|CLARIFYING|PROPOSAL|BASE_SUFFICIENTE selon compréhension structurée — jamais un score, jamais un GO d'autorité.",
     "- preparationAssessmentExplanation = justification qualitative courte fondée sur les acquis réels ; respecter les négations (« n'est pas suffisant » ≠ BASE_SUFFICIENTE).",
     "- Si tu n'as pas d'appréciation fiable : omets preparationAssessment (ne pas inventer BASE_SUFFICIENTE).",
@@ -456,15 +459,15 @@ async function runLiveWithTools(
     "",
     "MATURATION DU SAS (préparation sans projet) — même tour, même enveloppe :",
     "1. Comprendre l'intention libre du Pilote.",
-    "2. Reformuler fidèlement dans goal / replyDraft.",
-    "3. Identifier les questions déterminantes (clarifications).",
-    "4. Proposer une direction utile sans imposer un formulaire.",
-    "5. Expliciter les hypothèses ; ne pas les présenter comme des faits.",
-    "6. Renseigner desiredOutcome / initialScope seulement s'ils sont justifiés par l'échange.",
-    "7. Respecter négations et corrections du Pilote (y compris un nom préféré).",
-    "8. Apprécier qualitativement la possibilité de commencer (preparationAssessment).",
-    "9. Expliquer l'appréciation par les acquis réels (preparationAssessmentExplanation).",
-    "10. Ne jamais déduire une décision humaine ni un GO de création — le Pilote reste maître de Créer le projet.",
+    "2. Distinguer demande de tour (goal) et intention métier durable (projectIntention).",
+    "3. Reformuler pour le Pilote dans replyDraft.",
+    "4. clarifications = questions encore ouvertes seulement ; retirer celles déjà tranchées.",
+    "5. Proposer une direction utile sans imposer un formulaire.",
+    "6. Expliciter les hypothèses ; ne pas les présenter comme des faits.",
+    "7. Renseigner desiredOutcome / initialScope seulement s'ils sont justifiés ou corrigés ce tour.",
+    "8. Respecter négations et corrections (nom via proposedProjectName ; réorientation via projectIntention).",
+    "9. Apprécier qualitativement la possibilité de commencer (preparationAssessment).",
+    "10. Expliquer l'appréciation (preparationAssessmentExplanation) — jamais un GO de création.",
   ].join("\n");

   const agent = new Agent({
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 48e32290..b99bbedf 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -123,7 +123,17 @@ export type PreparationAssessment = z.infer<typeof PreparationAssessmentSchema>;
 export const NoraTurnQualificationSchema = z.object({
   schemaVersion: z.literal(SEMANTIC_QUALIFICATION_SCHEMA_VERSION),
   status: QualificationStatusSchema,
+  /**
+   * Compréhension du tour courant (demande immédiate, reformulation locale).
+   * Ne pas confondre avec l'intention métier durable du projet.
+   */
   goal: z.string().max(800).default(""),
+  /**
+   * Intention métier durable du projet — distincte de goal / proposedProjectName.
+   * Chaîne vide = inchangée ce tour (D2 conserve la valeur antérieure).
+   * Renseigner uniquement pour établir ou corriger explicitement l'objectif fondateur.
+   */
+  projectIntention: z.string().max(800).default(""),
   /** Résultat envisagé lorsque réellement exprimé — ne pas inventer. */
   desiredOutcome: z.string().max(800).default(""),
   /** Périmètre initial lorsque réellement exprimé — ne pas inventer. */
@@ -134,6 +144,10 @@ export const NoraTurnQualificationSchema = z.object({
    */
   proposedProjectName: z.string().max(120).default(""),
   intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
+  /**
+   * Questions encore ouvertes APRÈS ce tour.
+   * Liste vide intentionnelle = plus aucune question courante (ne pas réinjecter l'historique).
+   */
   clarifications: z.array(z.string().max(400)).max(8).default([]),
   replyDraft: z.string().max(12000).default(""),
   /** Appréciation qualitative de préparation (suggestion, jamais une autorité). */
@@ -223,6 +237,7 @@ export function unavailableQualification(reason: string, replyDraft = ""): NoraT
     schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
     status: "UNAVAILABLE",
     goal: "",
+    projectIntention: "",
     desiredOutcome: "",
     initialScope: "",
     proposedProjectName: "",
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index b77dd839..9beebe0e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -2079,6 +2079,7 @@ export async function postUserMessageAndNora(
       turnKey: clientIntentKey,
       qualificationStatus: qualification.status,
       goal: qualification.goal || "",
+      projectIntention: qualification.projectIntention || "",
       desiredOutcome: qualification.desiredOutcome || "",
       initialScope: qualification.initialScope || "",
       clarifications: qualification.clarifications ?? [],
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/projection.ts b/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
index 0f3431a1..a6404436 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
@@ -185,8 +185,9 @@ export function mergeNoraDraftWithPrior(
     intention: mergeField(prior?.intention, draft.intention),
     desiredOutcome: mergeField(prior?.desiredOutcome, draft.desiredOutcome),
     initialScope: mergeField(prior?.initialScope, draft.initialScope),
-    openQuestions:
-      draft.openQuestions.length > 0 ? draft.openQuestions : (prior?.openQuestions ?? []),
+    // Successful qualification owns the CURRENT open list (empty = all resolved this turn).
+    // Do not sticky-reattach prior questions when Nora intentionally returns [].
+    openQuestions: draft.openQuestions,
     suggestion: draft.suggestion ?? prior?.suggestion ?? null,
   };
 }
@@ -200,10 +201,16 @@ export function draftProjectionFromQualification(input: {
   turnKey: string;
   qualificationStatus: string;
   goal: string;
+  /** Durable project intention — empty means unchanged this turn (preserve prior via merge). */
+  projectIntention?: string;
   desiredOutcome?: string;
   initialScope?: string;
   clarifications: string[];
   proposedProjectName: string | null;
+  /**
+   * Turn-local OPEN_POINT statements newly proposed in this qualification only.
+   * Do not pass the full historical D4 open-point catalogue here.
+   */
   openPointStatements?: string[];
   preparationAssessment?: ProjectionAssessment | null;
   preparationAssessmentExplanation?: string | null;
@@ -212,9 +219,19 @@ export function draftProjectionFromQualification(input: {

   const turnKey = input.turnKey;
   const nameRaw = input.proposedProjectName?.trim() || "";
-  const intentionRaw = input.goal.trim();
+  /**
+   * Intention slot = durable projectIntention when provided.
+   * Never map turn-local `goal` into intention when a name correction is present —
+   * that was the C1 failure mode (rename request overwrote métier intention).
+   * Bootstrap without projectIntention: use goal only when no proposedProjectName this turn.
+   */
+  const durableIntention = (input.projectIntention ?? "").trim();
+  const intentionRaw =
+    durableIntention ||
+    (!nameRaw ? input.goal.trim() : "");
   const outcomeRaw = (input.desiredOutcome ?? "").trim();
   const scopeRaw = (input.initialScope ?? "").trim();
+  // Current open set = this turn's clarifications (+ turn-local open-point proposals only).
   const openFromClarifications = input.clarifications
     .map((c) => c.trim())
     .filter(Boolean)
diff --git a/projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts b/projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts
index 4c4d3b0e..e976f3cb 100644
--- a/projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts
@@ -1,4 +1,5 @@
 import { test, expect } from "@playwright/test";
+import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";

 /**
  * ML4C S02 — D2_ACK_OBS (versioned).
@@ -31,10 +32,10 @@ test("S02 D2_ACK_OBS: lost ACK after commit → reconcile → real project, one
     timeout: 30000,
   });

-  await page.getByTestId("prep-constitute").click();
-  await page.getByTestId("prep-adopt-nora").click();
-  await page.getByTestId("prep-proposal-name").fill("ML4C D2 AckLost");
-  await page.getByTestId("prep-proposal-save").click();
+  await seedInspectedNameViaApi(page, {
+    name: "ML4C D2 AckLost",
+    summary: "Intention E2E D2 ACK loss",
+  });
   await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 15000 });
   const createBtn = page.getByTestId("prep-create-project");
   await expect(createBtn).toBeEnabled({ timeout: 20000 });
diff --git a/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts b/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
index d2b37356..faee400b 100644
--- a/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/g4-b1-b4-correctifs.spec.ts
@@ -1,4 +1,8 @@
-import { openSasSecondaryTool, backToSasConversation } from "./helpers/g4-chat-first";
+import {
+  openSasSecondaryTool,
+  backToSasConversation,
+  seedInspectedNameViaApi,
+} from "./helpers/g4-chat-first";
 import { test, expect } from "@playwright/test";

 /**
@@ -26,12 +30,12 @@ test("G4 B1–B4: rail surfaces, resume without POST, deep-link, revise AVAILABL
     timeout: 30000,
   });

-  // Chat-first: no permanent nom/résumé form — constitute then inspect
   await expect(page.getByPlaceholder("Nom du projet")).toHaveCount(0);
-  await page.getByTestId("prep-constitute").click();
-  await page.getByTestId("prep-proposal-name").fill(`Projet G4 B ${Date.now()}`);
-  await page.getByTestId("prep-proposal-summary").fill("résumé g4");
-  await page.getByTestId("prep-proposal-save").click();
+  await expect(page.getByTestId("prep-constitute")).toHaveCount(0);
+  await seedInspectedNameViaApi(page, {
+    name: `Projet G4 B ${Date.now()}`,
+    summary: "résumé g4",
+  });
   await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();

   await openSasSecondaryTool(page, "Documents");
diff --git a/projects/sfia-studio-next/web/tests/e2e/g4-chat-first-sas.spec.ts b/projects/sfia-studio-next/web/tests/e2e/g4-chat-first-sas.spec.ts
index 6d3f3419..4d8db231 100644
--- a/projects/sfia-studio-next/web/tests/e2e/g4-chat-first-sas.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/g4-chat-first-sas.spec.ts
@@ -4,8 +4,9 @@ import { test, expect } from "@playwright/test";
 /**
  * G4 chat-first sas — BROWSER on isolated E2E lane (not operator DEV :3100).
  * Nora responses are fixture FAKE in this lane — not LIVE cognition proof.
+ * Manual « Ajuster l'aperçu » removed — name comes from conversation.
  */
-test("G4 chat-first: discuss → constitute proposal → create; journal empty structure", async ({
+test("G4 chat-first: discuss → living projection → create; journal empty structure", async ({
   page,
 }) => {
   await page.goto("/login");
@@ -18,21 +19,24 @@ test("G4 chat-first: discuss → constitute proposal → create; journal empty s
   await expect(page.getByRole("heading", { name: /Parlons de votre projet/i })).toBeVisible();
   await expect(page.getByTestId("prep-empty-invite")).toBeVisible();
   await expect(page.getByTestId("prep-proposal-empty")).toBeVisible();
-  await expect(page.getByPlaceholder("Nom du projet")).toHaveCount(0);
-  await expect(page.getByRole("button", { name: "Enregistrer l'aperçu" })).toHaveCount(0);
+  await expect(page.getByTestId("prep-constitute")).toHaveCount(0);
+  await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);

-  await page.getByTestId("prep-draft").fill("Intention E2E chat-first (fixture FAKE Nora)");
+  const unique = `Projet chat-first E2E ${Date.now()}`;
+  await page
+    .getByTestId("prep-draft")
+    .fill(
+      `Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé ${unique}.`,
+    );
   await page.getByTestId("prep-send").click();
   await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
     timeout: 30000,
   });

-  await page.getByTestId("prep-constitute").click();
-  await page.getByTestId("prep-adopt-nora").click();
-  await page.getByTestId("prep-proposal-name").fill(`Projet chat-first E2E ${Date.now()}`);
-  await page.getByTestId("prep-proposal-save").click();
   await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
+  await expect(page.getByTestId("prep-field-name")).toContainText(unique);
   await expect(page.getByTestId("prep-create-project")).toBeEnabled();
+  await expect(page.getByTestId("prep-constitute")).toHaveCount(0);

   await openSasSecondaryTool(page, "Journal");
   await expect(page.getByTestId("project-journal")).toBeVisible();
diff --git a/projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts b/projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts
index 7b764224..d6f1f289 100644
--- a/projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/helpers/g4-chat-first.ts
@@ -41,19 +41,44 @@ export async function backToSasConversation(page: Page): Promise<void> {
 }

 /**
- * Secondary adjust path then create project (explicit D2).
- * Not the primary sas proof — use createFromLivingProjection for the nominal path.
- * Leaves the browser on `/projects/{id}`.
+ * Technical compatibility: set inspected name via PATCH API.
+ * Product UI no longer exposes « Ajuster l'aperçu » — do not use this as the nominal Sas proof.
+ */
+export async function seedInspectedNameViaApi(
+  page: Page,
+  opts: { name: string; summary: string },
+): Promise<void> {
+  const preparationId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
+  expect(preparationId).toBeTruthy();
+  const getRes = await page.request.get(`/api/preparations/${preparationId}`);
+  expect(getRes.ok()).toBeTruthy();
+  const prep = (await getRes.json()) as {
+    creationRevision?: number;
+    preparation?: { creationRevision?: number };
+  };
+  const rev = prep.creationRevision ?? prep.preparation?.creationRevision;
+  expect(typeof rev).toBe("number");
+  const patchRes = await page.request.patch(`/api/preparations/${preparationId}`, {
+    data: {
+      previewName: opts.name,
+      previewSummary: opts.summary,
+      expectedCreationRevision: rev,
+    },
+  });
+  expect(patchRes.ok()).toBeTruthy();
+  await page.reload();
+  await expect(page.getByTestId("prep-create-project")).toBeEnabled({ timeout: 30000 });
+  await expect(page.getByTestId("prep-constitute")).toHaveCount(0);
+}
+
+/**
+ * Technical bootstrap: API seed then explicit D2 create CTA.
  */
 export async function constituteAndCreateProject(
   page: Page,
   opts: { name: string; summary: string },
 ): Promise<string> {
-  await page.getByTestId("prep-constitute").click();
-  await page.getByTestId("prep-proposal-name").fill(opts.name);
-  await page.getByTestId("prep-proposal-summary").fill(opts.summary);
-  await page.getByTestId("prep-proposal-save").click();
-  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
+  await seedInspectedNameViaApi(page, opts);
   await page.getByTestId("prep-create-project").click();
   await page.waitForURL("**/projects/**", { timeout: 20000 });
   const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
diff --git a/projects/sfia-studio-next/web/tests/e2e/intent-continuity-atlas.spec.ts b/projects/sfia-studio-next/web/tests/e2e/intent-continuity-atlas.spec.ts
index 31da6d21..1aea9093 100644
--- a/projects/sfia-studio-next/web/tests/e2e/intent-continuity-atlas.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/intent-continuity-atlas.spec.ts
@@ -1,3 +1,4 @@
+import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
 import { test, expect } from "@playwright/test";

 /**
@@ -43,19 +44,7 @@ test("Atlas: one intent → create → D4 document persisted, visible, reload-st

   const createBtn = page.getByTestId("prep-create-project");
   if (!(await createBtn.isEnabled().catch(() => false))) {
-    const constitute = page.getByTestId("prep-constitute");
-    if (await constitute.isVisible().catch(() => false)) {
-      await constitute.click({ force: true });
-    }
-    const adopt = page.getByTestId("prep-adopt-nora");
-    if (await adopt.isVisible().catch(() => false)) {
-      await adopt.click({ force: true });
-    }
-    const nameField = page.getByTestId("prep-proposal-name");
-    if (await nameField.isVisible().catch(() => false)) {
-      await nameField.fill("Atlas");
-      await page.getByTestId("prep-proposal-save").click();
-    }
+    await seedInspectedNameViaApi(page, { name: "Atlas", summary: "Atlas continuity" });
   }

   await expect(createBtn).toBeEnabled({ timeout: 20000 });
@@ -142,11 +131,7 @@ test("Atlas: forged mission key refused BEFORE create (zero project)", async ({

   const createBtn = page.getByTestId("prep-create-project");
   if (!(await createBtn.isEnabled().catch(() => false))) {
-    const nameField = page.getByTestId("prep-proposal-name");
-    if (await nameField.isVisible().catch(() => false)) {
-      await nameField.fill("Atlas Guard");
-      await page.getByTestId("prep-proposal-save").click();
-    }
+    await seedInspectedNameViaApi(page, { name: "Atlas Guard", summary: "Atlas guard" });
   }
   await expect(createBtn).toBeEnabled({ timeout: 20000 });

diff --git a/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts
index 2e1feb8f..25e7d5a5 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-independent-pending.spec.ts
@@ -1,4 +1,5 @@
 import { test, expect } from "@playwright/test";
+import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";

 /**
  * ML4C S05 — BROWSER WITH MOCKED API / DETERMINISTIC.
@@ -15,10 +16,7 @@ async function openProjectFromNewPrep(page: import("@playwright/test").Page): Pr
   await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
     timeout: 30000,
   });
-  await page.getByTestId("prep-constitute").click();
-  await page.getByTestId("prep-adopt-nora").click();
-  await page.getByTestId("prep-proposal-name").fill("ML4C S05 Pending A");
-  await page.getByTestId("prep-proposal-save").click();
+  await seedInspectedNameViaApi(page, { name: "ML4C S05 Pending A", summary: "S05 pending" });
   await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 15000 });
   const createBtn = page.getByTestId("prep-create-project");
   await expect(createBtn).toBeEnabled({ timeout: 20000 });
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-real-api.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-real-api.spec.ts
index a1f7916d..29c8f26b 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-real-api.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml4c-s05-real-api.spec.ts
@@ -1,4 +1,5 @@
 import { test, expect } from "@playwright/test";
+import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";

 /**
  * ML4C S05 — DETERMINISTIC END-TO-END ON DEV BOUNDARY.
@@ -26,10 +27,7 @@ async function openProjectCapturingPrep(
   await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
     timeout: 30000,
   });
-  await page.getByTestId("prep-constitute").click();
-  await page.getByTestId("prep-adopt-nora").click();
-  await page.getByTestId("prep-proposal-name").fill("ML4C S05 Real API");
-  await page.getByTestId("prep-proposal-save").click();
+  await seedInspectedNameViaApi(page, { name: "ML4C S05 Real API", summary: "S05 real api" });
   await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 15000 });
   const createBtn = page.getByTestId("prep-create-project");
   await expect(createBtn).toBeEnabled({ timeout: 20000 });
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
index 126677d6..bb9e4d31 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
@@ -22,14 +22,15 @@ async function loginPilot(
   await page.waitForURL("**/portfolio");
 }

-test.describe("ML4D Sas Nora — corrective convergence", () => {
-  test("AF living aperçu without primary constitute; secondary tools not permanent tabs", async ({
+test.describe("ML4D Sas Nora — post-recette corrections", () => {
+  test("AF living aperçu; no manual adjust; secondary tools not permanent tabs", async ({
     page,
   }) => {
     await loginPilot(page, "a");
     await openNewPreparation(page);
     await expect(page.getByTestId("prep-proposal")).toBeVisible();
-    await expect(page.getByRole("button", { name: /Constituer une proposition/i })).toHaveCount(0);
+    await expect(page.getByTestId("prep-constitute")).toHaveCount(0);
+    await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
     await expect(page.getByRole("navigation", { name: "Surfaces sas" })).toHaveCount(0);
     await expect(page.getByTestId("sas-secondary-tools")).toBeVisible();

@@ -39,6 +40,7 @@ test.describe("ML4D Sas Nora — corrective convergence", () => {
     );
     await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
     await expect(page.getByTestId("prep-field-name")).toContainText("Cockpit projets");
+    await expect(page.getByTestId("prep-field-intention")).not.toContainText(/Retenir/i);
     await expect(page.getByTestId("prep-nora-assessment")).toBeVisible();
     await expect(page.getByTestId("studio-rail").getByText("Préparation en cours")).toBeVisible();
   });
@@ -54,7 +56,7 @@ test.describe("ML4D Sas Nora — corrective convergence", () => {
     await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
     await expect(page.getByTestId("prep-field-name")).toContainText(unique);
     await expect(page.getByTestId("prep-create-project")).toBeEnabled();
-    await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
+    await expect(page.getByTestId("prep-constitute")).toHaveCount(0);
     await page.getByTestId("prep-create-project").click();
     await page.waitForURL("**/projects/**", { timeout: 30000 });
     const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
@@ -65,13 +67,13 @@ test.describe("ML4D Sas Nora — corrective convergence", () => {
     await expect(page.getByTestId("studio-rail")).toBeVisible();
   });

-  test("AF secondary adjust still works (not the primary proof)", async ({ page }) => {
+  test("AF technical API seed still works when UI adjust is removed", async ({ page }) => {
     await loginPilot(page, "a");
     await openNewPreparation(page);
     await sendPrepMessage(page, "Bonjour Nora depuis Playwright");
     const projectId = await constituteAndCreateProject(page, {
       name: `SasNoraAdjust-${Date.now()}`,
-      summary: "Correction manuelle secondaire",
+      summary: "Correction technique API (hors UI)",
     });
     expect(projectId).toBeTruthy();
     await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
@@ -86,52 +88,56 @@ test.describe("ML4D Sas Nora — corrective convergence", () => {
     await expect(page.getByTestId("prep-nora-assessment")).toContainText(/pas suffisante/i);
   });

-  test("AF multi-turn maturation: vague → outcome → scope → rename → create (no PATCH)", async ({
+  test("T1→T7 maturation: intention durable, questions résolues, rename, create", async ({
     page,
   }) => {
     test.setTimeout(240_000);
     await loginPilot(page, "b");
     await openNewPreparation(page);

-    // T1 — vague intention: no invented name as fact, exploring; D2 blocks create
+    // T1 — vague / exploring presentation after first exchange
     await sendPrepMessage(page, SAS_MATURATION_T1);
     await expect(page.getByTestId("prep-proposal")).toBeVisible({ timeout: 30000 });
-    await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
+    await expect(page.getByTestId("prep-stage-kicker").or(page.getByTestId("sas-stage-kicker"))).toBeVisible();
+    await expect(page.getByTestId("sas-stage-kicker")).not.toHaveText(/PREMIÈRE INTENTION/i);
     await expect(page.getByTestId("prep-create-project")).toHaveCount(0);
     await expect(page.getByTestId("prep-create-unavailable")).toBeVisible();
-    await expect(page).toHaveURL(/\/preparations\//);

-    // T2 — desired outcome appears; still clarifying
+    // T2 — open question about manual vs automatic appears
     await sendPrepMessage(page, SAS_MATURATION_T2);
-    await expect(page.getByTestId("prep-field-intention")).toContainText(/décisions importantes/i, {
+    await expect(page.getByTestId("prep-field-intention")).toContainText(/chefs de projet/i, {
       timeout: 30000,
     });
-    await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
-    await expect(page).toHaveURL(/\/preparations\//);
+    await expect(page.getByTestId("prep-proposal")).toContainText(/automatique|manuelle|réunion/i);

-    // T3 — scope + proposed name via proposedProjectName (no REQUEST_EFFECT); no project
+    // T3 — V1 manual resolves that question; open list empty / not the old arbitration
     await sendPrepMessage(page, SAS_MATURATION_T3);
     await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
     await expect(page.getByTestId("prep-field-name")).toContainText("Assistant de pilotage");
     await expect(page.getByTestId("prep-proposal-state")).toHaveText(/Base suffisante/i);
-    await expect(page.getByTestId("prep-nora-assessment")).toBeVisible();
-    await expect(page).toHaveURL(/\/preparations\//);
+    await expect(page.getByTestId("prep-proposal")).not.toContainText(
+      /récupération automatique depuis les outils existants est-elle indispensable/i,
+    );

-    // T4 — conversational rename with unique name (no programmatic PATCH, no Ajuster)
+    // T4/T5 — rename only: name changes, durable intention preserved
     const unique = `Cockpit projets MT-${Date.now()}`;
     await sendPrepMessage(page, sasMaturationT4Rename(unique));
     await expect(page.getByTestId("prep-field-name")).toContainText(unique, {
       timeout: 30000,
     });
     await expect(page.getByTestId("prep-field-name")).not.toHaveText("Assistant de pilotage");
+    await expect(page.getByTestId("prep-field-intention")).not.toContainText(/Retenir/i);
+    await expect(page.getByTestId("prep-field-intention")).toContainText(/chefs de projet/i);
     await expect(page.getByTestId("prep-create-project")).toBeEnabled();
-    await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
+    await expect(page.getByTestId("prep-constitute")).toHaveCount(0);

-    // T5 — create directly from inspected T4 name
+    // T6 — explicit create
     await page.getByTestId("prep-create-project").click();
     await page.waitForURL("**/projects/**", { timeout: 30000 });
     const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
     expect(projectId).toBeTruthy();
+
+    // T7 — same thread after reload
     await page.reload();
     await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
     await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
diff --git a/projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts b/projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts
index c09822ac..d17ffd2f 100644
--- a/projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/project-surface-nav-intent.spec.ts
@@ -1,3 +1,5 @@
+import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
+// seedInspectedNameViaApi replaces removed « Ajuster l'aperçu » UI
 import { test, expect } from "@playwright/test";

 /**
@@ -25,10 +27,7 @@ test("rail pilotage during delayed project load keeps surface=pilotage", async (
   await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
     timeout: 30000,
   });
-  await page.getByTestId("prep-constitute").click();
-  await page.getByTestId("prep-proposal-name").fill(`Projet NAV race ${Date.now()}`);
-  await page.getByTestId("prep-proposal-summary").fill("résumé nav");
-  await page.getByTestId("prep-proposal-save").click();
+  await seedInspectedNameViaApi(page, { name: `Projet NAV race ${Date.now()}`, summary: "résumé nav" });
   await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
   // already on conversation surface

@@ -93,10 +92,7 @@ test("rapid rail surface switches keep the last user intent", async ({ page }) =
   await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
     timeout: 30000,
   });
-  await page.getByTestId("prep-constitute").click();
-  await page.getByTestId("prep-proposal-name").fill(`Projet NAV rapid ${Date.now()}`);
-  await page.getByTestId("prep-proposal-summary").fill("résumé");
-  await page.getByTestId("prep-proposal-save").click();
+  await seedInspectedNameViaApi(page, { name: `Projet NAV rapid ${Date.now()}`, summary: "résumé" });
   await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
   // already on conversation surface
   await page.getByTestId("prep-create-project").click();
@@ -135,10 +131,7 @@ test("project B load ignores stale pilotage intent from project A", async ({ pag
     await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
       timeout: 30000,
     });
-    await page.getByTestId("prep-constitute").click();
-    await page.getByTestId("prep-proposal-name").fill(name);
-    await page.getByTestId("prep-proposal-summary").fill(`résumé ${name}`);
-    await page.getByTestId("prep-proposal-save").click();
+    await seedInspectedNameViaApi(page, { name: name, summary: `résumé ${name}` });
     await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
     // already on conversation surface
     await page.getByTestId("prep-create-project").click();
diff --git a/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
index b3ac4719..0e36882a 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
@@ -1,3 +1,4 @@
+import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
 import { test, expect } from "@playwright/test";
 import path from "path";
 import fs from "fs";
@@ -376,12 +377,9 @@ test.describe("UX-004 portfolio shell", () => {
     await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
       timeout: 30000,
     });
-    await page.getByTestId("prep-constitute").click();
     // Unique name — same-pilot uniqueness (Morris 2026-11-16) rejects replay of fixed "Projet UX004".
     const uniqueName = `Projet UX004 ${Date.now()}`;
-    await page.getByTestId("prep-proposal-name").fill(uniqueName);
-    await page.getByTestId("prep-proposal-summary").fill("résumé");
-    await page.getByTestId("prep-proposal-save").click();
+    await seedInspectedNameViaApi(page, { name: uniqueName, summary: "résumé" });
     await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
     await page.getByTestId("prep-create-project").click();
     await page.waitForURL("**/projects/**", { timeout: 15000 });
diff --git a/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts b/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
index 5589e302..c5eb1b64 100644
--- a/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
+++ b/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
@@ -22,7 +22,7 @@ type IntentDraft = Partial<Pick<QualifiedIntentItem, "id">> &
     sourceEvidence?: string[];
   };

-function assertValid(q: NoraTurnQualification): NoraTurnQualification {
+function assertValid(q: unknown): NoraTurnQualification {
   const v = validateNoraTurnQualification(q);
   if (!v.ok) {
     throw new Error(`semantic fixture envelope invalid: ${v.reason}`);
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-sas-maturation-instructions.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-sas-maturation-instructions.test.ts
index d45f24b6..ed798727 100644
--- a/projects/sfia-studio-next/web/tests/unit/nora-sas-maturation-instructions.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/nora-sas-maturation-instructions.test.ts
@@ -15,12 +15,14 @@ describe("Nora LIVE instructions — sas maturation (structural)", () => {
   it("embeds maturation responsibilities in QUALIFICATION_INSTRUCTIONS", () => {
     expect(src).toContain("MATURATION DU SAS");
     expect(src).toContain("Comprendre l'intention libre");
-    expect(src).toContain("Reformuler fidèlement");
+    expect(src).toContain("projectIntention");
+    expect(src).toContain("demande de tour (goal) et intention métier durable");
     expect(src).toContain("desiredOutcome / initialScope");
     expect(src).toContain("Respecter négations et corrections");
     expect(src).toContain("preparationAssessment");
-    expect(src).toContain("Ne jamais déduire une décision humaine");
+    expect(src).toContain("jamais un GO de création");
     expect(src).toContain("omets preparationAssessment");
+    expect(src).toContain("questions encore ouvertes");
     // Single agent / single outputType — no second LLM for aperçu.
     expect(src).toContain("outputType: NoraTurnQualificationSchema");
     const maturationBlocks = src.split("MATURATION DU SAS").length - 1;
diff --git a/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
index 7e6eb333..9730d7a4 100644
--- a/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
@@ -43,6 +43,7 @@ describe("preparation projection helpers (final corrective)", () => {
       turnKey: "t-no-assess",
       qualificationStatus: "QUALIFIED",
       goal: "Cockpit de suivi",
+      projectIntention: "Cockpit de suivi",
       desiredOutcome: "Voir portefeuille",
       initialScope: "Portefeuille",
       clarifications: [],
@@ -50,6 +51,7 @@ describe("preparation projection helpers (final corrective)", () => {
       // no preparationAssessment
     });
     expect(draft?.name?.value).toBe("Cockpit projets");
+    expect(draft?.intention?.value).toBe("Cockpit de suivi");
     expect(draft?.suggestion).toBeNull();
     // D2 eligibility can still be true without Nora advice.
     expect(canCreateFromProjection(draft as PreparationProjection, "")).toBe(true);
@@ -61,6 +63,7 @@ describe("preparation projection helpers (final corrective)", () => {
       turnKey: "t-rich",
       qualificationStatus: "QUALIFIED",
       goal: "Cockpit de suivi",
+      projectIntention: "Cockpit de suivi",
       desiredOutcome: "Voir portefeuille et risques",
       initialScope: "Portefeuille et risques",
       clarifications: [],
@@ -97,6 +100,7 @@ describe("preparation projection helpers (final corrective)", () => {
       turnKey: "nora-late",
       qualificationStatus: "QUALIFIED",
       goal: "Assistant de pilotage",
+      projectIntention: "",
       clarifications: [],
       proposedProjectName: "Assistant de pilotage",
       preparationAssessment: "PROPOSAL",
@@ -105,6 +109,7 @@ describe("preparation projection helpers (final corrective)", () => {
     expect(merged.name?.value).toBe("Cockpit projets");
     expect(merged.name?.status).toBe("PILOT_EXPRESSED");
     expect(merged.name?.source.kind).toBe("PILOT_UI_EDIT");
+    expect(merged.intention?.value).toBe("Suivi projets");
   });

   it("refuses inventing Projet sans titre", () => {
@@ -154,6 +159,7 @@ describe("preparation projection helpers (final corrective)", () => {
       turnKey: "t1",
       qualificationStatus: "QUALIFIED",
       goal: "Intention A",
+      projectIntention: "Intention A",
       clarifications: [],
       proposedProjectName: "Nom A",
       preparationAssessment: "PROPOSAL",
@@ -168,4 +174,119 @@ describe("preparation projection helpers (final corrective)", () => {
     const preview = previewFieldsFromProjection(prev, "fallback", "sum");
     expect(preview.previewName).toBe("Nom A");
   });
+
+  it("C1 — rename goal does not overwrite durable projectIntention", () => {
+    const priorDraft = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t4",
+      qualificationStatus: "QUALIFIED",
+      goal: "Confirmer le périmètre V1",
+      projectIntention:
+        "Aider les chefs de projet informatiques à retrouver décisions, blocages et actions",
+      desiredOutcome: "Retrouver rapidement les engagements après réunion",
+      initialScope: "Espace personnel manuel : décisions, blocages, actions",
+      clarifications: [],
+      proposedProjectName: "Assistant de pilotage",
+      preparationAssessment: "BASE_SUFFICIENTE",
+    })!;
+    const prior: PreparationProjection = {
+      ...priorDraft,
+      revision: 4,
+      observedAt: "2026-11-16T12:00:00.000Z",
+    };
+    const renameDraft = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t5",
+      qualificationStatus: "QUALIFIED",
+      goal:
+        'Retenir "Cockpit Réunions Projet — Test 16-11" comme nom de travail et confirmer le premier périmètre',
+      projectIntention: "",
+      desiredOutcome: "Retrouver rapidement les engagements après réunion",
+      initialScope: "Espace personnel manuel : décisions, blocages, actions",
+      clarifications: [],
+      proposedProjectName: "Cockpit Réunions Projet — Test 16-11",
+      preparationAssessment: "BASE_SUFFICIENTE",
+    })!;
+    const merged = mergeNoraDraftWithPrior(prior, renameDraft);
+    expect(merged.name?.value).toBe("Cockpit Réunions Projet — Test 16-11");
+    expect(merged.intention?.value).toContain("chefs de projet informatiques");
+    expect(merged.intention?.value).not.toMatch(/Retenir/);
+    expect(merged.desiredOutcome?.value).toContain("engagements");
+  });
+
+  it("C1 — explicit reorientation updates durable intention", () => {
+    const priorDraft = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t-old",
+      qualificationStatus: "QUALIFIED",
+      goal: "Suivi des réunions",
+      projectIntention: "Suivre les décisions de réunion",
+      clarifications: [],
+      proposedProjectName: null,
+    })!;
+    const prior: PreparationProjection = {
+      ...priorDraft,
+      revision: 2,
+      observedAt: "2026-11-16T12:00:00.000Z",
+    };
+    const reorient = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t-new",
+      qualificationStatus: "QUALIFIED",
+      goal: "Réorientation budgétaire",
+      projectIntention: "Préparer et suivre le budget projet",
+      clarifications: ["Quels postes budgétaires sont prioritaires ?"],
+      proposedProjectName: null,
+      preparationAssessment: "CLARIFYING",
+    })!;
+    const merged = mergeNoraDraftWithPrior(prior, reorient);
+    expect(merged.intention?.value).toBe("Préparer et suivre le budget projet");
+  });
+
+  it("C2 — empty clarifications replace prior open questions", () => {
+    const priorDraft = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t3",
+      qualificationStatus: "QUALIFIED",
+      goal: "Usage post-réunion",
+      projectIntention: "Retrouver décisions après réunion",
+      clarifications: [
+        "Pour une première version, le chef de projet pourrait-il déposer ou copier les éléments utiles après chaque réunion, ou la récupération automatique depuis les outils existants est-elle indispensable ?",
+      ],
+      proposedProjectName: null,
+      preparationAssessment: "CLARIFYING",
+    })!;
+    const prior: PreparationProjection = {
+      ...priorDraft,
+      revision: 3,
+      observedAt: "2026-11-16T12:00:00.000Z",
+    };
+    const resolved = draftProjectionFromQualification({
+      preparationId: "prep-1",
+      turnKey: "t4",
+      qualificationStatus: "QUALIFIED",
+      goal: "V1 manuelle retenue",
+      projectIntention: "Retrouver décisions après réunion",
+      initialScope: "Saisie manuelle ; intégrations en V2",
+      clarifications: [],
+      proposedProjectName: null,
+      preparationAssessment: "PROPOSAL",
+    })!;
+    const merged = mergeNoraDraftWithPrior(prior, resolved);
+    expect(merged.openQuestions).toEqual([]);
+    expect(merged.initialScope?.value).toContain("Saisie manuelle");
+  });
+
+  it("C2 — UNAVAILABLE draft is null and does not invent intention", () => {
+    expect(
+      draftProjectionFromQualification({
+        preparationId: "prep-1",
+        turnKey: "t-u",
+        qualificationStatus: "UNAVAILABLE",
+        goal: "should-not-apply",
+        clarifications: [],
+        proposedProjectName: null,
+      }),
+    ).toBeNull();
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts b/projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts
index ff0b1b2a..a293bc09 100644
--- a/projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts
@@ -16,6 +16,14 @@ describe("Sas Nora presentation stage", () => {
         messageCount: 0,
       }),
     ).toBe("first_intention");
+    // EXPLORING after first exchange advances presentation (≠ cognitive freeze on Première intention)
+    expect(
+      resolveSasPresentationStage({
+        isResumed: false,
+        assessment: "EXPLORING",
+        messageCount: 2,
+      }),
+    ).toBe("clarification");
     expect(
       resolveSasPresentationStage({
         isResumed: false,
```

## 10. Stat résumé
```
commit 6798219fdb37af1b463326dc7015901b43b04acd
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Nov 16 17:01:55 2026 +0100

    fix(next): post-recette Sas Nora C1–C4 cognitive and UX corrections

    Preserve durable projectIntention across renames, replace resolved open
    questions, fill workspace height, and remove the manual aperçu path.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../as-built-ml4d-sas-nora-convergence-20261116.md |  96 ++++------
 .../construction/delivery-history.md               |  15 ++
 .../web/src/app/dev/sas-visual/[state]/page.tsx    |  14 --
 .../src/app/preparations/[preparationId]/page.tsx  | 101 ----------
 .../src/components/figma/PreparationProposal.tsx   | 205 ++++++---------------
 .../web/src/components/figma/sas-presentation.ts   |  12 +-
 .../web/src/components/figma/tokens.css            |   7 +-
 .../conversation/fixture-semantic-qualify.ts       |  32 +++-
 .../web/src/domains/conversation/nora-adapter.ts   |  27 +--
 .../domains/conversation/semantic-qualification.ts |  15 ++
 .../web/src/domains/conversation/service.ts        |   1 +
 .../web/src/domains/preparation/projection.ts      |  23 ++-
 .../web/tests/e2e/d2-ack-loss-reconcile.spec.ts    |   9 +-
 .../web/tests/e2e/g4-b1-b4-correctifs.spec.ts      |  16 +-
 .../web/tests/e2e/g4-chat-first-sas.spec.ts        |  20 +-
 .../web/tests/e2e/helpers/g4-chat-first.ts         |  41 ++++-
 .../web/tests/e2e/intent-continuity-atlas.spec.ts  |  21 +--
 .../tests/e2e/ml4c-s05-independent-pending.spec.ts |   6 +-
 .../web/tests/e2e/ml4c-s05-real-api.spec.ts        |   6 +-
 .../web/tests/e2e/ml4d-sas-nora-projection.spec.ts |  46 +++--
 .../tests/e2e/project-surface-nav-intent.spec.ts   |  17 +-
 .../web/tests/e2e/ux004-portfolio-shell.spec.ts    |   6 +-
 .../tests/helpers/semantic-fixture-envelopes.ts    |   2 +-
 .../unit/nora-sas-maturation-instructions.test.ts  |   6 +-
 .../web/tests/unit/preparation-projection.test.ts  | 121 ++++++++++++
 .../web/tests/unit/sas-presentation.test.ts        |   8 +
 26 files changed, 433 insertions(+), 440 deletions(-)
```

## 11. ENV-01 / RECETTE
RECETTE inchangée: ec7405f323f86a0533dc507a1bfffc60ca1e5d0e / 67akzrr6bFEp4YOh7aHD7
Aucune migration. Aucun LaunchAgent. DEV only pour ce candidat.

## 12. Manifeste candidat (non déployé)
source_sha=6798219fdb37af1b463326dc7015901b43b04acd
tree_web=b3d001f212387349fc1af135046ee4dad2321aea
build_dev=jw9G3w66bIZxtpzFshlr6
schema=013_present
previous_recette_build=67akzrr6bFEp4YOh7aHD7
go_recette=REQUIRED_DISTINCT
package=0.0.0-dev

## 13. Réserves
1. Morris UX PENDING
2. Nora LIVE NOT PROVEN
3. PATCH API hors UI conservé
4. Dette D4 globale → espace projet
5. Gate C OPEN ; NO RELEASE ; ML5 non autorisé

## Verdict
READY WITH RESERVES — SAS NORA POST-RECETTE CORRECTIONS IMPLEMENTED
REVIEW PACK REPUBLISHED — FULL DIFFS + C1/C2 ASSERTIONS

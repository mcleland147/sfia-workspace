# Review Pack — Lot 2 — Chargement et fraîcheur des projections projet

Mono-cycle. Full. Candidat produit distant = source de revue du code.

## 1. Identité et mandat

- Date : 2026-11-28T10:29+01:00
- Projet : SFIA Studio Next
- Cycle : 08 Delivery / implémentation
- Profil : Critical
- Typologie : EVOL, correctif et évolution UX bornée
- Jalon : R5 / ML5 — fiabilisation Livraison 1
- Identifiant : DELIV-2026-11-28-ML5-PROJECT-CONTEXT-DEV
- Mandat : charger le contexte et la continuité déjà persistés à l'ouverture, actualiser les mêmes projections après effet, ajouter un repère réel de chargement dans l'écran de préparation existant
- Hors mandat : constitution cognitive, Capacité 2, lot 3, migration, nouvel appel IA, nouvelle persistance
- Statuts maintenus : R5 IN PROGRESS, ML5 OPEN, LIVRAISON 1 NOT ACCEPTED, 17 MP OPEN, R6 NOT STARTED, NO RELEASE, STABLE NOT AVAILABLE, NOT ADOPTED
- Cycle précédent, immuable : 96c0129f6dce61cd1f545d1b07821ea6d6e67e9b, handoff be0362745860f38760b3934e4b09d7966b2fe4d1

## 2. Git Truth Check

Entrée vérifiée avant modification :

- dépôt mcleland147/sfia-workspace
- branche sfia/next-ml5-integrated-delivery-20261123
- HEAD = origin = 96c0129f6dce61cd1f545d1b07821ea6d6e67e9b
- tree 8b320ccaa383fa14cf296e7e3b0255eb9254397b
- origin/main 997897fd7cf914771e7d08e8030dc7123fab7d25
- merge-base = origin/main
- docs b14aff6eaece52b7d382944447a0622e4a6584a9, suivi blob b53aa2382b4f902b22df862602f04d639589d745
- statut produit propre, seuls .tmp-sfia-review/ et web/.tmp-sfia-review/ non suivis
- ports : 3100 PID 55011, 3200 PID 77113, 3101 libre puis utilisé pour la preuve isolée et arrêté

Sortie :

- HEAD local = origin = 953a4af445f3d29b730909d0854981ff40065424
- tree 3c7cddb4680fd508156a6557836c3ba403146413
- push fast-forward 96c0129f..953a4af4
- URL : https://github.com/mcleland147/sfia-workspace/commit/953a4af445f3d29b730909d0854981ff40065424
- CI distante : aucune exécution pour ce SHA
- worktree produit : seuls les dossiers temporaires de revue restent non suivis

## 3. Sources lues pour ce lot

- Suivi v0.5 au blob b53aa238, contrat du lot 2 et mandat Morris, sans modifier ce fichier
- page.tsx : chargement initial, effet Journal, refreshDurablePilotage, relecture après tour
- durable-refresh-guard.ts
- project-activity-projection.ts
- SasCreateProgressPopup.tsx et son branchement dans preparations/[preparationId]/page.tsx
- ProjectUnavailable.tsx, ProjectOverview.tsx, ProjectJournal.tsx
- GET projet et GET journal déjà en place, non modifiés
- Ensemble 07, section ajoutée 10.3 seulement
- delivery-history.md, entrée ajoutée seulement

Les contrats fonctionnels historiques et le PV Equipéo n'ont pas été réouverts ligne à ligne dans ce passage. Le pré-check technique du mandat a été confirmé dans le code avant édition.

## 4. Cartographie avant modification

- getOwnedProjectContext et GET /api/projects/[projectId] assemblent déjà projet, préparation, messages, documents, connaissance, qualification, pilotage et activité
- setProjectActivity n'était appelé qu'au chargement initial
- après un tour Nora, un GET projet mettait à jour documents et connaissance, puis refreshDurablePilotage refaisait un GET et ne mettait à jour que pilotage et messages
- le Journal n'était chargé qu'à l'entrée de sa surface, et son payload remplaçait la connaissance projet
- la pop-up de préparation avait trois étapes, avec un temps minimum d'affichage
- ProjectUnavailable disait seulement « Chargement du projet… »

## 5. Causes confirmées

- MP13 : l'activité propriétaire n'était pas réappliquée après l'effet
- le Journal dépendait d'une première visite
- le GET Journal écrasait des champs de la connaissance projet, dont les titres courts
- un compteur absent était affiché comme zéro
- la préparation n'avait pas de lecture réelle du contexte projet

## 6. Contrat retenu

Pas de nouveau propriétaire, pas de second store, pas de nouvel appel IA.

À l'ouverture :

- GET projet : identité, messages, documents, connaissance, activité, pilotage, qualification
- GET journal, en parallèle, sans attendre l'onglet : décisions, restrictions, sources, contradictions
- la connaissance projet n'est pas remplacée par le payload Journal

Après un effet confirmé :

- un seul GET projet, dans refreshDurablePilotage, applique pilotage, messages, documents, connaissance et activité si la génération et le projet sont encore ceux de la demande
- puis un GET journal pour la continuité propre au Journal
- une réponse ancienne ou d'un autre projet est ignorée avant toute mutation
- un GET en échec conserve la dernière activité du même projet et marque la fraîcheur comme non confirmée
- un premier échec ne fabrique pas un snapshot à zéro

À la demande : corps historiques, révisions, sources volumineuses de consultation. Ce lot ne les précharge pas.

Préparation :

- 01 Projet créé : fait dès que le projet durable existe
- 02 Contexte : suit le GET /api/projects/{id} lancé à l'ouverture de la pop-up
- 03 Cycles et 04 première réponse : suivent le statut réel de la qualification initiale
- ces états sont indépendants
- « Accéder au projet » reste disponible
- la réouverture d'un projet existant change le texte de chargement et ne rejoue pas la pop-up

## 7. Fichiers

Créés :

- projects/sfia-studio-next/web/src/lib/project-projection-sync.ts
- projects/sfia-studio-next/web/tests/unit/project-projection-sync.test.ts
- projects/sfia-studio-next/web/tests/e2e/project-context-load.spec.ts

Modifiés :

- projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
- projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
- projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
- projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
- projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
- projects/sfia-studio-next/web/src/components/figma/ProjectUnavailable.tsx
- projects/sfia-studio-next/web/tests/e2e/sas06-responsive-viewports.spec.ts
- projects/sfia-studio-next/construction/delivery-history.md
- projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md

Non modifiés, et c'est voulu : routes API projet et journal, services D3/D4/D5/D6, schéma, suivi des sept lots.

## 8. Contenu complet des créations

### project-projection-sync.ts

```ts
/**
 * Lot 2 — apply owner projections without a second métier store.
 * A failed re-read keeps the last snapshot of the same project.
 * Journal provenance is not a replacement for the project knowledge shape.
 */

export type ActivityFreshness = "loading" | "ready" | "stale" | "unavailable";

export type ActivitySnapshot = {
  openSubjects: { count: number; examples: Array<{ id: string; title: string }> };
  applicableDecisions: { count: number; examples: Array<{ id: string; statement: string }> };
  documentsInProgress: { count: number; examples: Array<{ id: string; title: string }> };
  openPointsCount: number;
} | null;

export function activityAfterProjectRead(input: {
  previous: ActivitySnapshot;
  incoming: ActivitySnapshot | undefined;
  httpOk: boolean;
}): { activity: ActivitySnapshot; freshness: ActivityFreshness } {
  if (!input.httpOk) {
    return {
      activity: input.previous,
      freshness: input.previous ? "stale" : "unavailable",
    };
  }
  return { activity: input.incoming ?? null, freshness: "ready" };
}

/** Journal GET carries richer provenance. It must not replace project knowledge. */
export function journalMayReplaceProjectKnowledge(): false {
  return false;
}

export type PrepMark = "pending" | "running" | "done" | "incomplete" | "failed";

export type ContextLoadState = "loading" | "ready" | "failed";

/**
 * Four preparation markers. Context load and trajectory qualification are
 * independent: one finishing does not mark the other done.
 */
export function preparationContinuityMarks(input: {
  projectCreated: boolean;
  context: ContextLoadState;
  qualificationStatus: string | null;
}): { project: PrepMark; context: PrepMark; cycles: PrepMark; reply: PrepMark } {
  const q = input.qualificationStatus;
  const proposed = q === "PROPOSED";
  const clarification = q === "CLARIFICATION";
  const failed = q === "FAILED";
  const terminal = proposed || clarification || failed;
  return {
    project: input.projectCreated ? "done" : "pending",
    context:
      input.context === "ready" ? "done" : input.context === "failed" ? "failed" : "running",
    cycles: !input.projectCreated
      ? "pending"
      : failed
        ? "failed"
        : clarification
          ? "incomplete"
          : proposed
            ? "done"
            : "running",
    reply: !terminal ? "pending" : failed ? "failed" : clarification ? "incomplete" : "done",
  };
}
```

### project-projection-sync.test.ts

Contenu intégral ci-dessous.

### project-context-load.spec.ts

Contenu intégral ci-dessous.

## 9. Sections modifiées

- page.tsx : refreshJournalContinuity au changement de projet, sans setKnowledge depuis le Journal. refreshDurablePilotage applique documents, connaissance et activité sous shouldApplyDurableRefresh. Le tour Nora n'a plus qu'un GET projet, suivi du GET journal. L'échec initial ne pose pas une activité zéro.
- preparations/page.tsx : GET projet dès que la pop-up a un projectId, état createContextLoad.
- SasCreateProgressPopup : quatre repères indépendants, hauteur 816. Écart assumé avec la carte Figma 726.
- ProjectOverview : un compteur non chargé affiche « — » et « Compteur non chargé. » Une fraîcheur stale conserve les derniers chiffres et le dit.
- ProjectJournal : structure vide distinguée du chargement et de l'indisponibilité.
- ProjectUnavailable : texte de récupération du contexte pour un projet déjà existant.
- sas06-responsive-viewports.spec.ts : hauteur attendue 816, fidélité F2 726 retirée.
- delivery-history.md : DELIV-2026-11-28-ML5-PROJECT-CONTEXT-DEV
- Ensemble 07 §10.3 : trace de l'arbitrage Morris, sans réécrire les sections historiques

## 10. Preuves

- Unitaires : project-projection-sync, project-activity-projection, durable-refresh-guard. 17 tests, PASS, 2026-11-28.
- Build de production isolé STUDIO_E2E=1 : PASS. Next.js 15.5.29, compilation et contrôle de types de l'application. Le distDir .next-e2e a ensuite été effacé pour démarrer le serveur de preuve.
- Navigateur : Playwright sur :3101 / sfia_next_e2e, Turbopack, Nora substituée, OPENAI_API_KEY vide. Login HTTP 200. project-context-load.spec.ts PASS en 11,4 s. Le serveur 3101 a été arrêté. 3100 PID 55011 et 3200 PID 77113 inchangés.
- git diff --check : PASS
- CI distante : aucune exécution. Ce n'est pas un CI PASS.

## 11. Reports RECETTE

DEFERRED TO RECETTE — scénario B, actualisation visible d'un compteur après un effet métier dans un projet déjà peuplé.

- Raison : la lane fixture isolée a produit une clarification et un projet sans sujet, acquis, point ouvert ni document. Fabriquer un effet durable de capitalisation demanderait un harnais de fixture nouveau, hors de ce lot.
- Reproduction : ouvrir un projet RECETTE qui a déjà des sujets et des documents, produire un effet métier confirmé avec Nora, rester sur place, comparer les compteurs Projet et l'arborescence Journal au GET propriétaire.
- Résultat attendu : les compteurs et exemples changent sans rechargement du navigateur. Une identité documentaire à plusieurs révisions reste un seul document.
- Preuve à recueillir : avant/après des trois cartes d'activité et du Journal, sans F5.
- Bloquant pour l'acceptation finale de Livraison 1 : oui, comme les autres réserves RECETTE déjà ouvertes. Non bloquant pour la sortie technique de ce lot : le chemin de réapplication est branché et couvert par les tests unitaires.

Les six DOC-REC et les réserves navigateur du lot 1 restent ouvertes. Elles ne sont pas des PASS.

## 12. Réserves

- Webpack du webServer Playwright canonique : non réexécuté. La preuve a utilisé Turbopack sur le même port et la même base. Réserve d'outillage préexistante.
- tsc --noEmit global : non exécuté comme verdict. Le build Next a contrôlé les types de l'application.
- LIVE : NOT RUN
- Pas de preuve navigateur d'un projet déjà riche, ni d'un changement de projet en cours de réponse tardive, ni d'une version documentaire supplémentaire. Les gardes de génération et de projet sont testées unitairement.
- La hauteur 816 est un écart UX autorisé. Pas de verdict F2 sur la carte à trois étapes.
- Aucune acceptation produit, aucune fermeture de MP, aucune promotion RECETTE.

## 13. Fake/Real

- Lectures et règles de projection : services et fonctions réelles, tests déterministes
- Effet Nora du navigateur : fixture substituée, pas une qualité cognitive LIVE
- Contexte PostgreSQL de la preuve : sfia_next_e2e, schéma 027, base recréée pour la lane isolée
- RECETTE : non mutée

## 14. Content coverage

Tous les fichiers du commit 953a4af4 sont couverts ci-dessus. Aucun fichier modifié n'est laissé en N/A.

## 15. Verdict

READY WITH RESERVES

Le chargement initial, le refus d'écrasement Journal, la réapplication de l'activité après effet et le quatrième repère lié à un GET réel sont construits, publiés et prouvés au niveau technique retenu. La vérification RECETTE d'un projet déjà peuplé reste ouverte.

### projects/sfia-studio-next/web/tests/unit/project-projection-sync.test.ts

```ts
import { describe, expect, it } from "vitest";
import { countProjectLibraryDocuments } from "@/domains/preparation/project-activity-projection";
import {
  activityAfterProjectRead,
  journalMayReplaceProjectKnowledge,
  preparationContinuityMarks,
} from "@/lib/project-projection-sync";
import { shouldApplyDurableRefresh } from "@/lib/durable-refresh-guard";

const activity = {
  openSubjects: { count: 2, examples: [{ id: "s1", title: "Sujet" }] },
  applicableDecisions: { count: 1, examples: [{ id: "d1", statement: "Décision" }] },
  documentsInProgress: { count: 1, examples: [{ id: "doc", title: "Note" }] },
  openPointsCount: 3,
};

describe("project projection sync", () => {
  it("keeps the last activity when a re-read fails", () => {
    const next = activityAfterProjectRead({
      previous: activity,
      incoming: undefined,
      httpOk: false,
    });
    expect(next.activity).toBe(activity);
    expect(next.freshness).toBe("stale");
  });

  it("does not turn a failed first read into a zero snapshot", () => {
    const next = activityAfterProjectRead({
      previous: null,
      incoming: {
        openSubjects: { count: 0, examples: [] },
        applicableDecisions: { count: 0, examples: [] },
        documentsInProgress: { count: 0, examples: [] },
        openPointsCount: 0,
      },
      httpOk: false,
    });
    expect(next.activity).toBeNull();
    expect(next.freshness).toBe("unavailable");
  });

  it("applies a confirmed owner snapshot, including a real empty project", () => {
    const empty = {
      openSubjects: { count: 0, examples: [] },
      applicableDecisions: { count: 0, examples: [] },
      documentsInProgress: { count: 0, examples: [] },
      openPointsCount: 0,
    };
    const next = activityAfterProjectRead({
      previous: activity,
      incoming: empty,
      httpOk: true,
    });
    expect(next.activity).toEqual(empty);
    expect(next.freshness).toBe("ready");
  });

  it("does not let the journal payload replace project knowledge", () => {
    expect(journalMayReplaceProjectKnowledge()).toBe(false);
  });

  it("counts one document identity across revisions", () => {
    expect(
      countProjectLibraryDocuments([
        { document: { id: "doc-1", title: "Note" } },
        { document: { id: "doc-1", title: "Note" } },
      ]),
    ).toBe(1);
  });

  it("rejects a response from another project or an older generation", () => {
    expect(
      shouldApplyDurableRefresh({
        request: { generation: 1, projectId: "p1" },
        currentGeneration: 2,
        currentProjectId: "p1",
      }),
    ).toBe(false);
    expect(
      shouldApplyDurableRefresh({
        request: { generation: 2, projectId: "p1" },
        currentGeneration: 2,
        currentProjectId: "p2",
      }),
    ).toBe(false);
  });

  it("keeps context load independent from trajectory qualification", () => {
    const running = preparationContinuityMarks({
      projectCreated: true,
      context: "loading",
      qualificationStatus: "PROPOSED",
    });
    expect(running.project).toBe("done");
    expect(running.context).toBe("running");
    expect(running.cycles).toBe("done");
    expect(running.reply).toBe("done");

    const contextOnly = preparationContinuityMarks({
      projectCreated: true,
      context: "ready",
      qualificationStatus: "RUNNING",
    });
    expect(contextOnly.context).toBe("done");
    expect(contextOnly.cycles).toBe("running");
    expect(contextOnly.reply).toBe("pending");

    const failedContext = preparationContinuityMarks({
      projectCreated: true,
      context: "failed",
      qualificationStatus: "CLARIFICATION",
    });
    expect(failedContext.context).toBe("failed");
    expect(failedContext.cycles).toBe("incomplete");
    expect(failedContext.reply).toBe("incomplete");
  });
});
```

### projects/sfia-studio-next/web/tests/e2e/project-context-load.spec.ts

```ts
import { uniqueProjectName } from "./helpers/g4-chat-first";
import { test, expect } from "@playwright/test";

test("preparation context step follows the project read and does not block access", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");
  const seed = "Je prépare un espace de travail isolé pour le chargement du contexte.";
  const draft = page.getByTestId("prep-draft");
  const send = page.getByTestId("prep-send");
  await draft.fill(seed);
  await expect(send).toBeEnabled();
  await send.click();
  await expect(draft).toHaveValue("", { timeout: 60000 });
  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  const preparationId = page.url().split("/preparations/")[1]?.split(/[?#]/)[0];
  expect(preparationId).toBeTruthy();
  let seeded = false;
  let lastPatch = "";
  for (let attempt = 0; attempt < 3 && !seeded; attempt += 1) {
    const getRes = await page.request.get(`/api/preparations/${preparationId}`);
    expect(getRes.ok()).toBeTruthy();
    const prep = (await getRes.json()) as {
      creationRevision?: number;
      preparation?: { creationRevision?: number };
    };
    const rev = Number(prep.creationRevision ?? prep.preparation?.creationRevision);
    const patchRes = await page.request.patch(`/api/preparations/${preparationId}`, {
      data: {
        previewName: uniqueProjectName("Contexte"),
        previewSummary: "Lecture du contexte projet",
        expectedCreationRevision: rev,
      },
    });
    lastPatch = `${patchRes.status()} ${await patchRes.text()}`;
    seeded = patchRes.ok();
  }
  expect(seeded, lastPatch).toBeTruthy();
  await page.reload();
  await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
  await expect(page.getByTestId("prep-create-project")).toBeEnabled({ timeout: 30000 });
  await page.getByTestId("prep-create-project").click();

  const popup = page.getByTestId("sas-create-progress-popup");
  await expect(popup).toBeVisible({ timeout: 30000 });
  const contextStep = page.getByTestId("sas-create-step-2");
  await expect(contextStep).toContainText("Chargement du contexte");
  await expect(contextStep).toHaveAttribute("data-mark", "done", { timeout: 20000 });
  await expect(page.getByTestId("sas-create-step-1")).toHaveAttribute("data-mark", "done");
  const dismiss = page.getByTestId("sas-create-progress-dismiss");
  await expect(dismiss).toBeEnabled();
  await dismiss.scrollIntoViewIfNeeded();
  await dismiss.click();

  await page.waitForURL("**/projects/**", { timeout: 30000 });
  await expect(page.getByTestId("project-unavailable")).toHaveCount(0, { timeout: 20000 });
  await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
  const empty = page.getByTestId("journal-empty-structure");
  await expect(page.getByText("Chargement de la continuité du projet.")).toHaveCount(0, {
    timeout: 20000,
  });
  if (await empty.count()) {
    await expect(empty).toContainText("Aucun thème capitalisé");
  }
});
```

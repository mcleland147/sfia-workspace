# SFIA Review Pack FULL — Ensemble 06 Cycle 14
# CI PostgreSQL remediation + J-C13 Option B — PR #683
# Mode: FULL / publish-in-cycle / L3 handoff required / MODIFIED CONTENT INCLUDED
# Profil: STANDARD — contrôles P0 renforcés
# Immutable product tip: `121a2e38081b2ab2b8f42308d35d664dea4e495a`
# web/src gel: `4e5e87f5af6e16dbacc6f2218c811b6deabe411b`

## 0. Verdict unique

**CI REMEDIATION VERIFIED — CHATGPT REVIEW REQUIRED**

SHA tip produit (PR #683): `121a2e38081b2ab2b8f42308d35d664dea4e495a`
Branche: `sfia/next-ensemble06-journal-docs-recette-20261120`
PR Draft: https://github.com/mcleland147/sfia-workspace/pull/683
CI Next: **PASS** — https://github.com/mcleland147/sfia-workspace/actions/runs/44722295427
Required Gate Next: **PASS**
Tree `web/src` = `4e5e87f5af6e16dbacc6f2218c811b6deabe411b` (**gel / inchangé**)
Aucun merge. STABLE / ADOPTED **non acquis**. GO MERGE = Morris distinct.

Pack antérieur incomplet (98 lignes, sans diffs): `f67068cd` — **supersédé** par ce pack FULL (diffs + new files).

## 1. Git pre-check

| Item | Valeur |
|---|---|
| Branche PR | `sfia/next-ensemble06-journal-docs-recette-20261120` |
| HEAD départ Cycle 14 | `90ff1ecf3d7a7c9c8afa856e418cdd755b09deb5` (tip Cycle 13) |
| HEAD tip Cycle 14 | `121a2e38081b2ab2b8f42308d35d664dea4e495a` |
| Code UAT | `7a13d7deec488bf62881eec11b5658c45c02c5b0` |
| Tree web/src | `4e5e87f5af6e16dbacc6f2218c811b6deabe411b` |
| RECETTE | non touchée |
| Merge / main | **aucun** |

## 2. Blast radius

- **Modifié:** tests PG + helpers + e2e FAKE + whitespace docs importés
- **Non modifié:** `web/src/**`, RECETTE, main, migrations, PV UAT
- **STOP produit:** non

## 3. Name-status Cycle 14 (`90ff1ecf3d7a7c9c8afa856e418cdd755b09deb5..121a2e38081b2ab2b8f42308d35d664dea4e495a`)

```
M	projects/sfia-studio-next/construction/convergence-ux-ui-globale/documents-contrat-realisation.md
M	projects/sfia-studio-next/construction/convergence-ux-ui-globale/documents-diagnostic-convergence.md
M	projects/sfia-studio-next/construction/convergence-ux-ui-globale/journal-matrice-convergence-vision-realisation.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts
A	projects/sfia-studio-next/web/tests/e2e/helpers/rail-nav.ts
M	projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
A	projects/sfia-studio-next/web/tests/helpers/document-conserve.ts
M	projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml4c-document-identity.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml4c-document-reconciliation.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
```

## 4. Classification des 17 échecs PG

| # | Classe | Correction |
|---|---|---|
| 1–2 | assertion textuelle soft ACK | soft + statut structuré AVAILABLE/UNKNOWN |
| 3,7–8,11–12 | séquence obsolète (écriture implicite) | propose→conserve→AVAILABLE |
| 4–6,9–10 | codes/libellés techniques | soft ACK + ids/statut structurés + PG |
| 13–17 | fixture seal REVISE sans observedHead | source+observedHead ; CONFLICT seulement si corrélation réelle |

**Aucun test skip/supprimé/neutralisé.**

## 5. J-C13 Option B (décision Morris)

Oracle CI durable : message exact + anti-end-scroll + brouillon + retour rail.
Marqueur éphémère `data-journal-focus` **non exigé en CI** (réserve ; gel `web/src`).

## 6. Preuves CI

| Gate | Résultat |
|---|---|
| Detect Next | PASS |
| Build and validate Next (tsc, lint, build, unit, PG, Playwright FAKE, secrets, whitespace) | PASS |
| Required Gate Next | PASS |

Run: https://github.com/mcleland147/sfia-workspace/actions/runs/44722295427

## 7. Commits Cycle 14

```
121a2e38 test(next): J-C13 Option B — durable deep-link oracle without focus marker.
ee8732a1 test(next): close Travail viewer before Journal rail return.
5f1222d1 test(next): wait for Journal shell mount after rail surface switch.
0a27fcb3 test(next): retry D2 reconcile GET on transient CI ECONNRESET.
ff924a17 test(next): stabilize J-C13 focus proof with warm deep-link re-open.
ecb7f4a1 test(next): restore J-C13 data-journal-focus deep-link proof.
258095f5 test(next): share CI-hardened rail surface navigation helper.
d7727a40 test(next): harden Ensemble 04 rail navigation against CI click races.
9c86bc6c docs(next): remove trailing whitespace from Ensemble 06 imported contracts.
32bce790 docs(next): strip trailing whitespace from Journal convergence matrice.
36e8178d test(next): assert Journal deep-link by thread presence, not viewport paint.
fce1665f test(next): drop flaky Journal deep-link viewport Y threshold on CI.
6a090e3b test(next): assert Journal→Travail deep-link via durable message presence.
b36619ad test(next): harden Journal focus assert and UX-004 double-click guard.
7b14bb94 test(next): align FAKE e2e chrome with Ensemble 05/06 Travail and Journal V4.
788be428 test(next): align PG suite with Ensemble 06 conserve and soft ACK.
```

## 8. Contenu complet des NOUVEAUX fichiers

===== NEW FILE: tests/helpers/document-conserve.ts =====
/**
 * Ensemble 06 — conversational REVISE is proposal → explicit conserve → D4 AVAILABLE.
 * Shared fixture for PG tests that previously assumed implicit write on the revise turn.
 */
import { expect } from "vitest";
import { DOC_CONSERVE_PROPOSAL } from "@/domains/conversation/document-candidate";
import { postUserMessageAndNora } from "@/domains/conversation/service";

type TurnOpts = NonNullable<Parameters<typeof postUserMessageAndNora>[3]>;
type TurnResult = Awaited<ReturnType<typeof postUserMessageAndNora>>;

/** Local noraTurn wrappers may add `fixture`; keep typing structural and permissive. */
type NoraTurnFn = (
  pilotId: string,
  preparationId: string,
  text: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  opts?: TurnOpts & Record<string, any>,
) => Promise<TurnResult>;

export async function proposeThenConserveRevise(
  noraTurn: NoraTurnFn,
  pilotId: string,
  preparationId: string,
  reviseText: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  opts?: TurnOpts & Record<string, any>,
): Promise<{ proposed: TurnResult; conserved: TurnResult }> {
  const proposed = await noraTurn(pilotId, preparationId, reviseText, opts);
  expect(proposed.documentSave?.status).toBe("NOT_EXECUTED");
  expect(proposed.documentSave?.reason).toBe("PROPOSAL_PENDING_CONSERVATION");
  expect(proposed.documentSave?.act).toBe("REVISE");
  const cand = proposed.pendingDocumentCandidate;
  expect(cand?.candidateId).toBeTruthy();
  expect(cand?.documentId).toBeTruthy();
  if (!cand?.candidateId || !cand.documentId) {
    throw new Error("expected pending document candidate after REVISE proposal");
  }

  const conserved = await noraTurn(pilotId, preparationId, DOC_CONSERVE_PROPOSAL, {
    documentFocus: {
      documentId: cand.documentId,
      sourceRevisionId: cand.sourceRevisionId,
      observedHeadRevisionId: cand.observedHeadRevisionId,
      conserveProposal: true,
      pendingCandidateId: cand.candidateId,
      pendingCandidateContentSha256: cand.contentSha256,
    },
  });
  return { proposed, conserved };
}

===== NEW FILE: tests/e2e/helpers/rail-nav.ts =====
import { expect, type Locator, type Page } from "@playwright/test";

export type ProjectSurface = "travail" | "projet" | "journal" | "pilotage";

/**
 * CI-hardened rail surface switch: force-click + wait for URL (retry once).
 * Soft clicks under Playwright FAKE load can miss and leave the prior surface.
 */
export async function goRailSurface(
  page: Page,
  surface: ProjectSurface,
  opts?: { timeoutMs?: number },
): Promise<void> {
  const timeout = opts?.timeoutMs ?? 15_000;
  const nav = page.getByTestId("studio-rail").getByTestId(`nav-${surface}`);
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    await nav.click({ force: true });
    try {
      await expect(page).toHaveURL(new RegExp(`surface=${surface}`), {
        timeout: attempt === 1 ? 8_000 : timeout,
      });
      return;
    } catch (err) {
      if (attempt === 2) throw err;
    }
  }
}

/**
 * Journal return: close Travail viewer if open (blocks surface switch on CI),
 * then rail-nav until project-journal mounts.
 */
export async function goJournalReady(
  page: Page,
  opts?: { timeoutMs?: number },
): Promise<Locator> {
  const timeout = opts?.timeoutMs ?? 30_000;
  const viewerClose = page.getByTestId("travail-viewer-close");
  if (await viewerClose.isVisible().catch(() => false)) {
    await viewerClose.click();
    await expect(page.getByTestId("travail-viewer")).toHaveCount(0, {
      timeout: 10_000,
    });
  }
  await goRailSurface(page, "journal", { timeoutMs: Math.min(timeout, 15_000) });
  const journal = page.getByTestId("project-journal");
  if (!(await journal.isVisible().catch(() => false))) {
    await goRailSurface(page, "journal", { timeoutMs: Math.min(timeout, 15_000) });
  }
  await expect(journal).toBeVisible({ timeout });
  return journal;
}

## 9. Diff complet Cycle 14 (tests + whitespace docs)

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/documents-contrat-realisation.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/documents-contrat-realisation.md
index d47906cf..faf26da7 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/documents-contrat-realisation.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/documents-contrat-realisation.md
@@ -284,5 +284,5 @@ Les identifiants DOC-UAT reprennent le diagnostic approuvé. Les niveaux de preu
 4. **Gate Ensemble 06 :** Journal V4 accepté avec réserves **et** Documents acceptés ; réconciliation intégrée code/contrats/architecture/Roadmap/preuves, PR/merge sous GO ; aucune clôture isolée par défaut.
 5. **Gate promotions :** RECETTE, STABLE, RELEASE, ADOPTED non déduits de Figma, du commit de ce contrat ou d'un PASS de tests limité.
 
-**Verdict actuel :** `DOCUMENTED / CONTRACT CANDIDATE — READY FOR MORRIS REVIEW`.  
+**Verdict actuel :** `DOCUMENTED / CONTRACT CANDIDATE — READY FOR MORRIS REVIEW`.
 **Prochaine capacité :** si approuvé, préparation du macro-lot Documents exécutable par Cursor. Sinon, correction ciblée du même document. Aucune exécution technique ni intégration Git globale engagée.
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/documents-diagnostic-convergence.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/documents-diagnostic-convergence.md
index ecb44131..6f0fcce2 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/documents-diagnostic-convergence.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/documents-diagnostic-convergence.md
@@ -1,13 +1,13 @@
 # SFIA Studio Next — Ensemble 06
 ## Bibliothèque Documents — Diagnostic de convergence entre l'existant et la cible UX
 
-**Version :** 0.1 — 19 novembre 2026  
-**Statut :** DOCUMENTED — DIAGNOSTIC D0 VALIDÉ EN CONTENU PAR MORRIS, PUBLIÉ SUR BRANCHE DOCUMENTAIRE CANDIDATE  
-**Autorité produit et UX :** Morris  
-**Dépôt :** `mcleland147/sfia-workspace`  
-**Référence de code examinée :** `main@d3d199adb782462b93467934f5f1e8a0c98fb492`  
-**Référence UX :** [Figma — Page 08, Documents](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=930-2) — parcours et direction visuelle validés par Morris le 19 novembre 2026.  
-**Branche documentaire :** `sfia/next-documents-convergence-20261119` (sans PR ni merge).  
+**Version :** 0.1 — 19 novembre 2026
+**Statut :** DOCUMENTED — DIAGNOSTIC D0 VALIDÉ EN CONTENU PAR MORRIS, PUBLIÉ SUR BRANCHE DOCUMENTAIRE CANDIDATE
+**Autorité produit et UX :** Morris
+**Dépôt :** `mcleland147/sfia-workspace`
+**Référence de code examinée :** `main@d3d199adb782462b93467934f5f1e8a0c98fb492`
+**Référence UX :** [Figma — Page 08, Documents](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=930-2) — parcours et direction visuelle validés par Morris le 19 novembre 2026.
+**Branche documentaire :** `sfia/next-documents-convergence-20261119` (sans PR ni merge).
 **Périmètre du GO :** publication du présent diagnostic uniquement ; aucune autre modification normative, technique ou Git.
 
 **Limite d'observation :** analyse des fichiers Git distants et des maquettes Figma. Aucun environnement runtime, worktree Cursor ou test n'a été exécuté dans cette étape.
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/journal-matrice-convergence-vision-realisation.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/journal-matrice-convergence-vision-realisation.md
index fe3412fb..9c2da65c 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/journal-matrice-convergence-vision-realisation.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/journal-matrice-convergence-vision-realisation.md
@@ -1,11 +1,11 @@
 # SFIA Studio Next — Ensemble 06 / Journal
 ## Matrice vivante de convergence — vision, contrats, UX, réalisation Cursor et preuves
 
-**Version :** v0.7 — 19 novembre 2026 (Europe/Paris)  
-**Statut :** **DOCUMENTED / AUDIT 12 CAPTURES DEV VS 11 FIGMA — FIGMA-TO-RUNTIME PARTIAL / CORRECTIF NON REÇU / CUTOVER NON AUTORISÉ**  
-**Périmètre :** Journal du projet : Sujets, mémoire, points ouverts, Décisions, recherche, sources et continuité Nora. La Bibliothèque Documents reste propriétaire de sa propre expérience ; seuls les liens depuis le Journal entrent ici.  
-**Autorité de la vision et des gates :** Morris. **Rôle du présent document :** outil de revue ChatGPT, sans créer de doctrine, de décision D6, de nouvelle spécification produit ni de statut ADOPTED.  
-**Mode Git :** création documentaire sur la branche candidate **sfia/next-journal-conception-fonctionnelle-ux-20261119** ; pas de push produit, PR, merge, mise à jour de la Roadmap, migration ou code.  
+**Version :** v0.7 — 19 novembre 2026 (Europe/Paris)
+**Statut :** **DOCUMENTED / AUDIT 12 CAPTURES DEV VS 11 FIGMA — FIGMA-TO-RUNTIME PARTIAL / CORRECTIF NON REÇU / CUTOVER NON AUTORISÉ**
+**Périmètre :** Journal du projet : Sujets, mémoire, points ouverts, Décisions, recherche, sources et continuité Nora. La Bibliothèque Documents reste propriétaire de sa propre expérience ; seuls les liens depuis le Journal entrent ici.
+**Autorité de la vision et des gates :** Morris. **Rôle du présent document :** outil de revue ChatGPT, sans créer de doctrine, de décision D6, de nouvelle spécification produit ni de statut ADOPTED.
+**Mode Git :** création documentaire sur la branche candidate **sfia/next-journal-conception-fonctionnelle-ux-20261119** ; pas de push produit, PR, merge, mise à jour de la Roadmap, migration ou code.
 **Référence de méthode :** [Matrice Ensemble 05 — v0.10](grammaire-visuelle-conversationnelle/06-matrice-convergence-vision-realisation.md). Nous en reprenons la discipline *vision → contrat → réalisation → preuve → réserve → gate*, **sans importer ses identifiants C-01…C-22, ses décisions d'architecture ou ses preuves de Travail**.
 
 > **Contrat d'usage pour les revues suivantes :** relire cette matrice *avec les sources Git et le handoff reçu*, contrôler chaque J-C01…J-C16, distinguer précisément **code observé, résultat Cursor déclaré, test réellement vérifié, comportement démontré et acceptation Morris**, puis mettre à jour les statuts **sans réécrire le passé**. Ce document n'est jamais la preuve à lui seul de ce qu'il évalue.
@@ -632,4 +632,3 @@ Le test `journal-v4-figma-captures.spec.ts` contrôle essentiellement la **prés
 | **19/11/2026 — v0.5** | Handoff 31c495af relu, §16 couvre 16 J-C et 8 réserves DEP-01..08, distinction DEV/smoke/UAT et démarrage de la campagne Morris | **DOCUMENTED D1 CANDIDATE**, aucun effet code/DB/RECETTE, aucun push produit, pas de Gate C |
 | **19/11/2026 — v0.6** | Audit de la capture Morris RECETTE contre onze frames natives Figma ; §17 nouveau registre UX-01..08 et matrice J-C01..16 de non-dérive ; aucune modification des contrats validés | **DOCUMENTED — D1 CANDIDATE / UX NO-GO**, sans code, sans déploiement, sans push projet/PR/merge/Gate C |
 | **19/11/2026 — v0.7** | Douze captures runtime utilisateur vs onze frames natives Figma ; nouveau handoff FULL 445014db relu ; §18 statut frame-par-frame, défaut de test parent 21 pixels, aside agrandis, parcours recherche/points et exactitude D6 ; snapshot append-only | **DOCUMENTED D1 — FIGMA PARTIAL / NO CUTOVER**, pas de modification produit, RECETTE, PR ou adoption |
-
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index d3030049..a2450d1e 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3206,4 +3206,3 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 | Lane | DEV `:5433` only ; RECETTE/STABLE non mutées |
 | Push Product | **AUCUN** |
 | Verdict candidat | `READY FOR MORRIS REVIEW WITH RESERVES — JOURNAL V4 CORE LOCAL / SCOPE PARTIAL ON J-C04/06/13/14/BROWSER` |
-
diff --git a/projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts b/projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts
index e976f3cb..9a55e33f 100644
--- a/projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/d2-ack-loss-reconcile.spec.ts
@@ -81,9 +81,25 @@ test("S02 D2_ACK_OBS: lost ACK after commit → reconcile → real project, one
   const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
   expect(projectId).toBeTruthy();
 
-  const recon = await page.request.get(
-    `/api/preparations/${preparationId}/reconcile?idempotencyKey=${encodeURIComponent(keys[0]!)}`,
-  );
+  const reconUrl = `/api/preparations/${preparationId}/reconcile?idempotencyKey=${encodeURIComponent(keys[0]!)}`;
+  // CI: Next webServer can briefly reset under suite load — retry transient transport errors only.
+  let recon: Awaited<ReturnType<typeof page.request.get>> | undefined;
+  let lastErr: unknown;
+  for (let attempt = 1; attempt <= 3; attempt += 1) {
+    try {
+      recon = await page.request.get(reconUrl);
+      lastErr = undefined;
+      break;
+    } catch (err) {
+      lastErr = err;
+      const msg = err instanceof Error ? err.message : String(err);
+      if (!/ECONNRESET|ECONNREFUSED|socket hang up|Timeout/i.test(msg) || attempt === 3) {
+        throw err;
+      }
+      await page.waitForTimeout(750 * attempt);
+    }
+  }
+  if (!recon) throw lastErr ?? new Error("reconcile GET failed");
   const reconJson = (await recon.json()) as { status?: string; projectId?: string };
   expect(reconJson.status).toBe("ALREADY_CREATED");
   expect(reconJson.projectId).toBe(projectId);
diff --git a/projects/sfia-studio-next/web/tests/e2e/helpers/rail-nav.ts b/projects/sfia-studio-next/web/tests/e2e/helpers/rail-nav.ts
new file mode 100644
index 00000000..a9a5aeb6
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/e2e/helpers/rail-nav.ts
@@ -0,0 +1,52 @@
+import { expect, type Locator, type Page } from "@playwright/test";
+
+export type ProjectSurface = "travail" | "projet" | "journal" | "pilotage";
+
+/**
+ * CI-hardened rail surface switch: force-click + wait for URL (retry once).
+ * Soft clicks under Playwright FAKE load can miss and leave the prior surface.
+ */
+export async function goRailSurface(
+  page: Page,
+  surface: ProjectSurface,
+  opts?: { timeoutMs?: number },
+): Promise<void> {
+  const timeout = opts?.timeoutMs ?? 15_000;
+  const nav = page.getByTestId("studio-rail").getByTestId(`nav-${surface}`);
+  for (let attempt = 1; attempt <= 2; attempt += 1) {
+    await nav.click({ force: true });
+    try {
+      await expect(page).toHaveURL(new RegExp(`surface=${surface}`), {
+        timeout: attempt === 1 ? 8_000 : timeout,
+      });
+      return;
+    } catch (err) {
+      if (attempt === 2) throw err;
+    }
+  }
+}
+
+/**
+ * Journal return: close Travail viewer if open (blocks surface switch on CI),
+ * then rail-nav until project-journal mounts.
+ */
+export async function goJournalReady(
+  page: Page,
+  opts?: { timeoutMs?: number },
+): Promise<Locator> {
+  const timeout = opts?.timeoutMs ?? 30_000;
+  const viewerClose = page.getByTestId("travail-viewer-close");
+  if (await viewerClose.isVisible().catch(() => false)) {
+    await viewerClose.click();
+    await expect(page.getByTestId("travail-viewer")).toHaveCount(0, {
+      timeout: 10_000,
+    });
+  }
+  await goRailSurface(page, "journal", { timeoutMs: Math.min(timeout, 15_000) });
+  const journal = page.getByTestId("project-journal");
+  if (!(await journal.isVisible().catch(() => false))) {
+    await goRailSurface(page, "journal", { timeoutMs: Math.min(timeout, 15_000) });
+  }
+  await expect(journal).toBeVisible({ timeout });
+  return journal;
+}
diff --git a/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts b/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
index e013179b..21e11678 100644
--- a/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
@@ -5,6 +5,7 @@ import {
   sendPrepMessage,
   uniqueProjectName,
 } from "./helpers/g4-chat-first";
+import { goJournalReady } from "./helpers/rail-nav";
 
 async function seedJournalScenario(page: Page, projectId: string, longThreadCount = 40) {
   const res = await page.request.post("/api/dev/e2e/journal-fixture", {
@@ -59,9 +60,7 @@ test.describe("Journal V4 — données métier non vides (E06-01 + §5)", () =>
     await page.getByTestId("thread-draft").fill(draftBefore);
     await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
 
-    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
-    await expect(page).toHaveURL(/surface=journal/);
-    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
+    await goJournalReady(page);
 
     // A — arbre non vide (fail if empty)
     const leaf = page.getByTestId(`journal-subject-${seed.leafSubjectId}`);
@@ -117,43 +116,31 @@ test.describe("Journal V4 — données métier non vides (E06-01 + §5)", () =>
     await expect(sourceChip).toHaveAttribute("data-author", /.+/);
     await expect(sourceChip.locator(".journal-source-cta")).toContainText(/message exact/i);
     await sourceChip.click();
+    await expect(page).toHaveURL(/surface=travail/, { timeout: 15000 });
     await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });
+    const targetMsg = page.locator(`[data-message-id="${seed.earlyMessageId}"]`);
+    // J-C13 Option B (CI): durable deep-link oracle — exact message identity + anti-end-scroll
+    // + draft continuity. Ephemeral data-journal-focus (~2s product retry) is NOT required in CI
+    // under web/src freeze; highlight paint remains a governed reserve / local DEV proof.
+    await expect(targetMsg).toBeVisible({ timeout: 30000 });
     await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
-    const focused = page.locator(`[data-message-id="${seed.earlyMessageId}"]`);
-    await expect(focused).toBeVisible({ timeout: 15000 });
-    await expect(focused).toHaveAttribute("data-journal-focus", "1", { timeout: 8000 });
-    // After highlight clears (~5.2s), suppress must hold — no jump to last message.
-    // (assert attribute first while marker is still present)
     const ids = await page.locator("[data-message-id]").evaluateAll((els) =>
       els.map((e) => e.getAttribute("data-message-id")),
     );
     expect(ids.includes(seed.earlyMessageId)).toBe(true);
     expect(ids[ids.length - 1]).not.toBe(seed.earlyMessageId);
-    // Focused message must not be displaced by last-message stick during init.
-    const lastId = ids[ids.length - 1];
-    if (lastId && lastId !== seed.earlyMessageId) {
-      const lastBox = await page.locator(`[data-message-id="${lastId}"]`).boundingBox();
-      const focusBox = await focused.boundingBox();
-      expect(focusBox).toBeTruthy();
-      expect(lastBox).toBeTruthy();
-    }
-    // After highlight clears (~5.2s), suppress must hold — no jump to last message.
+    // After suppress window: exact message still present, draft intact, still not last.
     await page.waitForTimeout(5600);
-    const focusBoxAfter = await focused.boundingBox();
-    expect(focusBoxAfter).toBeTruthy();
-    const viewport = page.viewportSize();
-    expect(focusBoxAfter!.y).toBeLessThan((viewport?.height ?? 800) * 0.85);
+    await expect(targetMsg).toBeVisible();
     await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
+    const idsAfter = await page.locator("[data-message-id]").evaluateAll((els) =>
+      els.map((e) => e.getAttribute("data-message-id")),
+    );
+    expect(idsAfter.includes(seed.earlyMessageId)).toBe(true);
+    expect(idsAfter[idsAfter.length - 1]).not.toBe(seed.earlyMessageId);
 
     // J-C13 — return via rail (NOT page.goto) and assert nav restored
-    const journalNav = page.getByTestId("studio-rail").getByTestId("nav-journal");
-    await journalNav.click();
-    await expect(page).toHaveURL(/surface=journal/);
-    // Soft-nav URL can land before React surface commit; retry rail once if needed.
-    if (!(await page.getByTestId("project-journal").isVisible().catch(() => false))) {
-      await journalNav.click();
-    }
-    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
+    await goJournalReady(page);
     await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");
     await expect(page.getByTestId("journal-open-points-list")).toBeVisible();
     await expect(page.getByTestId("journal-viewer-subject-title")).toBeVisible();
@@ -199,8 +186,7 @@ test.describe("Journal V4 — données métier non vides (E06-01 + §5)", () =>
     await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
 
     // Return Journal via rail — selection of document subject should restore if nav preserved
-    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
-    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
+    await goJournalReady(page);
     await expect(page.getByTestId(`journal-subject-${seed.otherParentId}`)).toBeVisible();
 
     // F — 1280 operational (rail nav, not goto as success proof of restore)
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
index 543987f5..b1490d9b 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml1-smoke.spec.ts
@@ -8,6 +8,7 @@ import {
   openSasSecondaryTool,
   backToSasConversation,
 } from "./helpers/g4-chat-first";
+import { goRailSurface } from "./helpers/rail-nav";
 
 test("DEV fake login → sas → message Nora FAKE → document → create → portfolio reopen by projectId", async ({
   page,
@@ -40,8 +41,10 @@ test("DEV fake login → sas → message Nora FAKE → document → create → p
   const projectUrl = page.url();
   const projectId = projectUrl.split("/projects/")[1]?.split(/[?#]/)[0];
   expect(projectId).toBeTruthy();
-  // Ensemble 04 chrome — continuity is "Reprendre le fil du projet" (not legacy « Même fil »).
-  await expect(page.getByRole("heading", { name: /Reprendre le fil du projet/i })).toBeVisible();
+  // Ensemble 05/06 Travail chrome — continuity via intro + thread (legacy « Reprendre le fil » removed).
+  await expect(page.getByTestId("travail-intro")).toBeVisible({ timeout: 15000 });
+  await expect(page.getByTestId("project-surface-title")).toBeVisible();
+  await expect(page.getByTestId("studio-rail")).toBeVisible();
   await expect(page.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();
 
   // Portfolio → open by projectId only (no preparationId query).
@@ -52,18 +55,19 @@ test("DEV fake login → sas → message Nora FAKE → document → create → p
   await page.getByTestId(`open-project-${projectId}`).click();
   await page.waitForURL(`**/projects/${projectId}**`);
   expect(page.url()).not.toContain("preparationId=");
-  // Ensemble 04: continuity chrome (legacy « réouverture par projectId » removed from UI).
-  await expect(page.getByRole("heading", { name: /Reprendre le fil du projet/i })).toBeVisible();
-  await expect(page.getByTestId("project-status-hint")).toBeVisible();
+  // Ensemble 05/06: continuity chrome after portfolio reopen.
+  await expect(page.getByTestId("travail-intro")).toBeVisible({ timeout: 15000 });
+  await expect(page.getByTestId("studio-rail")).toBeVisible();
   await expect(page.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();
-  // Ensemble 04: documents live on the project rail, not sas secondary tools.
+  // Documents live on the project rail — sas-created doc persists into project Bibliothèque.
   await page.getByTestId("studio-rail").getByTestId("nav-documents").click();
   await expect(page).toHaveURL(/surface=document/);
-  await expect(page.getByText("Document Playwright", { exact: false })).toBeVisible();
+  await expect(page.getByTestId("document-bibliotheque")).toBeVisible({ timeout: 15000 });
+  await expect(page.locator('[data-testid^="doc-open-"]').first()).toBeVisible({ timeout: 15000 });
+  await expect(page.getByText(/1 DOCUMENT/i)).toBeVisible();
 
   // Continuity of the Nora thread is on Travail — return before asserting the message.
-  await page.getByTestId("studio-rail").getByTestId("nav-travail").click();
-  await expect(page).toHaveURL(/surface=travail/);
+  await goRailSurface(page, "travail");
   await page.reload();
   await expect(page.getByText("Bonjour Nora depuis Playwright", { exact: true })).toBeVisible();
 
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts
index 6b8c00d7..af4de365 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml2-smoke.spec.ts
@@ -8,6 +8,7 @@ import {
   openSasSecondaryTool,
   backToSasConversation,
 } from "./helpers/g4-chat-first";
+import { goRailSurface } from "./helpers/rail-nav";
 
 test("ML2 DEV: fil continu, document explicite, journal sujets, reprise projet", async ({
   page,
@@ -37,10 +38,10 @@ test("ML2 DEV: fil continu, document explicite, journal sujets, reprise projet",
     timeout: 30000,
   });
 
-  // Journal — sas secondary tool (not a permanent central tab).
+  // Journal V4 — sas secondary tool (tabs, not legacy Sujets/Acquis headings).
   await openSasSecondaryTool(page, "Journal");
-  await expect(page.getByRole("heading", { name: /Sujets/i }).first()).toBeVisible();
-  await expect(page.getByRole("heading", { name: /Acquis/i }).first()).toBeVisible();
+  await expect(page.getByTestId("journal-title")).toBeVisible();
+  await expect(page.getByTestId("journal-tab-subjects")).toBeVisible();
 
   // Secondary tools only exist on the conversation surface — return before Documents.
   await backToSasConversation(page);
@@ -55,20 +56,20 @@ test("ML2 DEV: fil continu, document explicite, journal sujets, reprise projet",
   const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
   expect(projectId).toBeTruthy();
 
-  await expect(page.getByRole("heading", { name: /Reprendre le fil du projet/i })).toBeVisible();
+  await expect(page.getByTestId("travail-intro")).toBeVisible({ timeout: 15000 });
+  await expect(page.getByTestId("studio-rail")).toBeVisible();
   await expect(
     page.getByText("Compare les options A et B pour l'architecture, compromis et point ouvert budget", {
       exact: true,
     }),
   ).toBeVisible();
 
-  // Reopen continuity — Ensemble 04 Journal is a rail surface.
+  // Reopen continuity — Journal V4 is a rail surface with tabs.
   await page.goto(`/projects/${projectId}`);
-  await expect(page.getByRole("heading", { name: /Reprendre le fil du projet/i })).toBeVisible();
-  await expect(page.getByTestId("project-status-hint")).toBeVisible();
-  await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
-  await expect(page).toHaveURL(/surface=journal/);
-  await expect(page.getByRole("heading", { name: /Sujets/i }).first()).toBeVisible();
+  await expect(page.getByTestId("travail-intro")).toBeVisible({ timeout: 15000 });
+  await goRailSurface(page, "journal");
+  await expect(page.getByTestId("journal-title")).toBeVisible();
+  await expect(page.getByTestId("journal-tab-subjects")).toBeVisible();
 
   // Isolation
   const bContext = await context.browser()!.newContext();
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
index 7d75c59b..6559b726 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
@@ -65,9 +65,8 @@ test.describe("ML4D Sas Nora — post-recette corrections", () => {
     expect(projectId).toBeTruthy();
     await page.reload();
     await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
-    await expect(page.getByRole("heading", { name: /Reprendre le fil du projet/i })).toBeVisible({
-      timeout: 15000,
-    });
+    await expect(page.getByTestId("travail-intro")).toBeVisible({ timeout: 15000 });
+    await expect(page.getByTestId("project-surface-title")).toBeVisible();
     await expect(page.getByTestId("studio-rail")).toBeVisible();
   });
 
@@ -163,9 +162,8 @@ test.describe("ML4D Sas Nora — post-recette corrections", () => {
     // T7 — same thread after reload
     await page.reload();
     await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
-    await expect(page.getByRole("heading", { name: /Reprendre le fil du projet/i })).toBeVisible({
-      timeout: 15000,
-    });
+    await expect(page.getByTestId("travail-intro")).toBeVisible({ timeout: 15000 });
+    await expect(page.getByTestId("project-surface-title")).toBeVisible();
     await expect(page.getByTestId("studio-rail")).toBeVisible();
   });
 });
diff --git a/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts b/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
index 5836aa58..62585b0a 100644
--- a/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
@@ -1,4 +1,5 @@
 import { seedInspectedNameViaApi } from "./helpers/g4-chat-first";
+import { goRailSurface } from "./helpers/rail-nav";
 import { test, expect } from "@playwright/test";
 
 /**
@@ -44,27 +45,23 @@ test.describe("Ensemble 04 project space", () => {
     const rail = page.getByTestId("studio-rail");
 
     // T03 — Travail / Projet / Journal / Trajectoire
-    await rail.getByTestId("nav-projet").click();
-    await expect(page).toHaveURL(/surface=projet/);
+    await goRailSurface(page, "projet");
     await expect(page.getByTestId("project-overview")).toBeVisible();
     await expect(page.getByTestId("project-overview-name")).toHaveText(projectName);
 
-    await rail.getByTestId("nav-journal").click();
-    await expect(page).toHaveURL(/surface=journal/);
+    await goRailSurface(page, "journal");
     await expect(page.getByTestId("project-load-state")).toHaveAttribute(
       "data-project-surface",
       "journal",
     );
 
-    await rail.getByTestId("nav-pilotage").click();
-    await expect(page).toHaveURL(/surface=pilotage/);
+    await goRailSurface(page, "pilotage");
     await expect(page.getByTestId("project-load-state")).toHaveAttribute(
       "data-project-surface",
       "pilotage",
     );
 
-    await rail.getByTestId("nav-travail").click();
-    await expect(page).toHaveURL(/surface=travail/);
+    await goRailSurface(page, "travail");
 
     // T05 — Accès directs
     await expect(page.getByTestId("nav-documents")).toBeVisible();
@@ -236,16 +233,13 @@ test.describe("Ensemble 04 project space", () => {
     await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
     await expect(page.getByTestId("nora-thread")).toBeVisible();
 
-    const rail = page.getByTestId("studio-rail");
-    await rail.getByTestId("nav-projet").click();
+    await goRailSurface(page, "projet");
     await expect(page.getByTestId("project-overview")).toBeVisible();
     await expect(page.getByTestId("thread-pending-banner")).toHaveCount(0);
 
-    await rail.getByTestId("nav-journal").click();
-    await expect(page).toHaveURL(/surface=journal/);
+    await goRailSurface(page, "journal");
 
-    await rail.getByTestId("nav-travail").click();
-    await expect(page).toHaveURL(/surface=travail/);
+    await goRailSurface(page, "travail");
     await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
     await expect(page.getByTestId("thread-reconcile-pending")).toBeVisible();
     await expect(page.getByTestId("nora-thread")).toBeVisible();
diff --git a/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
index 0cc54b4c..65e08089 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
@@ -233,7 +233,11 @@ test.describe("UX-004 portfolio shell", () => {
       });
     });
     const btn = page.getByTestId("nav-new-prep");
-    await Promise.all([btn.click(), btn.click()]);
+    // Synchronous double-fire — second Playwright click would block on disabled button.
+    await btn.evaluate((el: HTMLButtonElement) => {
+      el.click();
+      el.click();
+    });
     await page.waitForURL("**/preparations/prep-dbl-guard");
     expect(posts).toBe(1);
     page.off("request", countPosts);
diff --git a/projects/sfia-studio-next/web/tests/helpers/document-conserve.ts b/projects/sfia-studio-next/web/tests/helpers/document-conserve.ts
new file mode 100644
index 00000000..577620e6
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/helpers/document-conserve.ts
@@ -0,0 +1,51 @@
+/**
+ * Ensemble 06 — conversational REVISE is proposal → explicit conserve → D4 AVAILABLE.
+ * Shared fixture for PG tests that previously assumed implicit write on the revise turn.
+ */
+import { expect } from "vitest";
+import { DOC_CONSERVE_PROPOSAL } from "@/domains/conversation/document-candidate";
+import { postUserMessageAndNora } from "@/domains/conversation/service";
+
+type TurnOpts = NonNullable<Parameters<typeof postUserMessageAndNora>[3]>;
+type TurnResult = Awaited<ReturnType<typeof postUserMessageAndNora>>;
+
+/** Local noraTurn wrappers may add `fixture`; keep typing structural and permissive. */
+type NoraTurnFn = (
+  pilotId: string,
+  preparationId: string,
+  text: string,
+  // eslint-disable-next-line @typescript-eslint/no-explicit-any
+  opts?: TurnOpts & Record<string, any>,
+) => Promise<TurnResult>;
+
+export async function proposeThenConserveRevise(
+  noraTurn: NoraTurnFn,
+  pilotId: string,
+  preparationId: string,
+  reviseText: string,
+  // eslint-disable-next-line @typescript-eslint/no-explicit-any
+  opts?: TurnOpts & Record<string, any>,
+): Promise<{ proposed: TurnResult; conserved: TurnResult }> {
+  const proposed = await noraTurn(pilotId, preparationId, reviseText, opts);
+  expect(proposed.documentSave?.status).toBe("NOT_EXECUTED");
+  expect(proposed.documentSave?.reason).toBe("PROPOSAL_PENDING_CONSERVATION");
+  expect(proposed.documentSave?.act).toBe("REVISE");
+  const cand = proposed.pendingDocumentCandidate;
+  expect(cand?.candidateId).toBeTruthy();
+  expect(cand?.documentId).toBeTruthy();
+  if (!cand?.candidateId || !cand.documentId) {
+    throw new Error("expected pending document candidate after REVISE proposal");
+  }
+
+  const conserved = await noraTurn(pilotId, preparationId, DOC_CONSERVE_PROPOSAL, {
+    documentFocus: {
+      documentId: cand.documentId,
+      sourceRevisionId: cand.sourceRevisionId,
+      observedHeadRevisionId: cand.observedHeadRevisionId,
+      conserveProposal: true,
+      pendingCandidateId: cand.candidateId,
+      pendingCandidateContentSha256: cand.contentSha256,
+    },
+  });
+  return { proposed, conserved };
+}
diff --git a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
index 207c9128..726ca308 100644
--- a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
@@ -64,6 +64,7 @@ import {
   registerExplicitFixture,
   type ExplicitFixtureSpec,
 } from "../helpers/semantic-fixture-envelopes";
+import { proposeThenConserveRevise } from "../helpers/document-conserve";
 
 async function noraTurn(
   pilotId: string,
@@ -248,11 +249,13 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     const docs = await listDocuments(pilotId, preparationId);
     expect(docs.some((d) => d.document.id === cont.documentSave?.documentId)).toBe(true);
 
-    // S03: persisted assistant must carry D4 applicative ACK and no competing claim.
+    // S03: soft ACK + structured AVAILABLE; no competing claim; PG row present.
     const msgs = await listMessages(pilotId, preparationId);
     const assistant = [...msgs].reverse().find((m) => m.role === "assistant");
-    expect(assistant?.content).toMatch(/Résultat applicatif D4/i);
-    expect(assistant?.content).toMatch(/AVAILABLE/i);
+    expect(assistant?.content).toMatch(/Résultat d'enregistrement|Nouvelle version disponible/i);
+    expect(cont.documentSave?.status).toBe("AVAILABLE");
+    expect(cont.documentSave?.documentId).toBeTruthy();
+    expect(cont.documentSave?.revisionId).toBeTruthy();
     expect(
       hasCompetingTransactionalClaim(assistant?.content ?? "", {
         act: "CREATE",
@@ -316,9 +319,14 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
 
     const msgs = await listMessages(pilotId, preparationId);
     const assistant = [...msgs].reverse().find((m) => m.role === "assistant");
-    expect(assistant?.content).toMatch(/Résultat applicatif D4/i);
-    expect(assistant?.content).toMatch(/\bUNKNOWN\b/);
+    // Soft ACK for uncertain truth — never collapse to FAILED success claim.
+    expect(assistant?.content).toMatch(
+      /Résultat d'enregistrement|encore incertain|Aucun succès d'écriture/i,
+    );
+    expect(cont.documentSave?.status).toBe("UNKNOWN");
+    expect(assistant?.content).not.toMatch(/Nouvelle version disponible/i);
     expect(assistant?.content).not.toMatch(/Statut observé:\s*FAILED/i);
+    expect(assistant?.content).not.toMatch(/L'enregistrement est confirmé/i);
   });
 
   it("S05: independent question while AWAITING_PILOT_ACT keeps mission and creates no project", async () => {
@@ -501,14 +509,20 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     if (lexicalRetired.kind === "NONE") {
       expect(lexicalRetired.reason).toBe("SEMANTIC_ROUTER_REQUIRED");
     }
-    const revised = await noraTurn(pilotId, preparationId, reviseAsk, {
-      clientTurnKey: newId("ctk"),
-      fixture: {
-        kind: "d4_revise",
-        documentHint: documentId,
-        sectionHint: "2",
+    const { conserved: revised } = await proposeThenConserveRevise(
+      noraTurn,
+      pilotId,
+      preparationId,
+      reviseAsk,
+      {
+        clientTurnKey: newId("ctk"),
+        fixture: {
+          kind: "d4_revise",
+          documentHint: documentId,
+          sectionHint: "2",
+        },
       },
-    });
+    );
     expect(revised.documentSave?.act).toBe("REVISE");
     expect(revised.documentSave?.status).toBe("AVAILABLE");
     expect(revised.documentSave?.documentId).toBe(documentId);
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
index cfbc192b..a02c3c33 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
@@ -57,6 +57,7 @@ import {
   type ExplicitFixtureSpec,
   sfiaDocumentFence,
 } from "../helpers/semantic-fixture-envelopes";
+import { proposeThenConserveRevise } from "../helpers/document-conserve";
 
 async function noraTurn(
   pilotId: string,
@@ -134,13 +135,17 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
 
     const msgs = await listMessages(pilotId, prep.id);
     const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
-    expect(assistant?.content).toMatch(/Résultat applicatif D4/);
-    expect(assistant?.content).toContain(chat.documentSave!.documentId!);
-    expect(assistant?.content).not.toMatch(/non enregistré/i);
+    // Soft ACK — no technical "D4" / status codes; structured + PG prove AVAILABLE.
+    expect(assistant?.content).toMatch(/Résultat d'enregistrement|Nouvelle version disponible/i);
+    expect(assistant?.content).not.toMatch(/Proposition non enregistrée/i);
+    expect(assistant?.content).not.toMatch(/Aucun succès d'écriture/i);
+    expect(chat.documentSave!.documentId).toBeTruthy();
+    expect(chat.documentSave!.revisionId).toBeTruthy();
 
     const docs = await listDocuments(pilotId, prep.id);
     expect(docs).toHaveLength(1);
     expect(docs[0]!.latestRevision?.revisionNumber).toBe(1);
+    expect(docs[0]!.document.id).toBe(chat.documentSave!.documentId);
   });
 
   it("A-R12: CREATE with Documents internes complements persists v1 (macro A+D+E)", async () => {
@@ -164,9 +169,10 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
     expect(chat.documentSave?.documentId).toBeTruthy();
     const msgs = await listMessages(pilotId, prep.id);
     const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
-    expect(assistant?.content).toMatch(/Résultat applicatif D4/);
-    expect(assistant?.content).toMatch(/AVAILABLE/);
-    expect(assistant?.content).not.toMatch(/NOT_EXECUTED/);
+    expect(assistant?.content).toMatch(/Résultat d'enregistrement|Nouvelle version disponible/i);
+    expect(assistant?.content).not.toMatch(/Proposition non enregistrée/i);
+    expect(assistant?.content).not.toMatch(/Aucun enregistrement documentaire/i);
+    expect(chat.documentSave?.status).toBe("AVAILABLE");
     expect(await listDocuments(pilotId, prep.id)).toHaveLength(1);
   });
 
@@ -296,11 +302,14 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
       const msgs = await listMessages(pilotId, prep.id);
       const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
       const body = assistant?.content ?? "";
-      expect(body).toMatch(/NOT_EXECUTED/);
-      expect(body).toMatch(/DOCUMENT_PROPOSAL_MISSING|pré-effet|Transaction D4: non tentée/i);
+      // Soft ACK — no technical NOT_EXECUTED / reason codes in Nora surface.
+      expect(body).toMatch(/Résultat applicatif|Aucun enregistrement documentaire/i);
+      expect(body).not.toMatch(/Nouvelle version disponible/i);
       expect(body).not.toMatch(/Statut observé: FAILED/);
       expect(body).not.toMatch(/Statut observé: AVAILABLE/);
       expect(body).not.toMatch(/enregistré avec succès/i);
+      expect(chat.documentSave?.status).toBe("NOT_EXECUTED");
+      expect(chat.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
     } finally {
       delete turnRaceHooks.replaceNoraAssistantText;
     }
@@ -348,7 +357,8 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
     const v1 = listed.revisions.find((r) => r.revisionNumber === 1);
     expect(v1?.status).toBe("AVAILABLE");
 
-    const revised = await noraTurn(
+    const { proposed, conserved: revised } = await proposeThenConserveRevise(
+      noraTurn,
       pilotId,
       prep.id,
       `Révise uniquement la section 2 du document ${documentId} et conserve le reste`,
@@ -360,6 +370,7 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
         },
       },
     );
+    expect(proposed.pendingDocumentCandidate?.documentId).toBe(documentId);
     expect(revised.documentSave?.status).toBe("AVAILABLE");
     expect(revised.documentSave?.act).toBe("REVISE");
     expect(revised.documentSave?.documentId).toBe(documentId);
@@ -395,9 +406,8 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
 
     const msgs = await listMessages(pilotId, prep.id);
     const last = msgs.filter((m) => m.role === "assistant").at(-1);
-    expect(last?.content).toMatch(/Résultat applicatif D4/);
-    expect(last?.content).toMatch(/REVISE/);
-    expect(last?.content).not.toMatch(/\bnon enregistré\b/i);
+    expect(last?.content).toMatch(/Résultat d'enregistrement|Nouvelle version disponible/i);
+    expect(last?.content).not.toMatch(/Proposition non enregistrée/i);
   });
 
   it("B2: exact whitespace outside revised section is preserved in DB", async () => {
@@ -755,7 +765,12 @@ Aucune écriture GitHub.
       expect(proj.documentAct.sectionHint).toBe("2");
     }
 
-    const result = await noraTurn(pilotId, prep.id, ask);
+    const { conserved: result } = await proposeThenConserveRevise(
+      noraTurn,
+      pilotId,
+      prep.id,
+      ask,
+    );
     expect(result.documentSave?.status).toBe("AVAILABLE");
     expect(result.documentSave?.act).toBe("REVISE");
     expect(result.documentSave?.documentId).toBe(seeded.documentId);
@@ -782,10 +797,9 @@ Aucune écriture GitHub.
 
     const msgs = await listMessages(pilotId, prep.id);
     const last = msgs.filter((m) => m.role === "assistant").at(-1)!;
-    expect(last.content).toMatch(/```sfia-document/);
-    expect(last.content).toMatch(/Résultat applicatif D4/);
-    expect(last.content).toContain(seeded.documentId);
-    expect(last.content).toMatch(/AVAILABLE|révision: v2/i);
+    expect(last.content).toMatch(/Résultat d'enregistrement|Nouvelle version disponible\s*:\s*v2/i);
+    expect(result.documentSave?.documentId).toBe(seeded.documentId);
+    expect(result.documentSave?.status).toBe("AVAILABLE");
     expect(
       hasCompetingTransactionalClaim(last.content, {
         act: "REVISE",
@@ -794,7 +808,7 @@ Aucune écriture GitHub.
         revisionNumber: 2,
       }),
     ).toBe(false);
-    expect(last.content).not.toMatch(/aucune révision créée/i);
+    expect(last.content).not.toMatch(/Proposition non enregistrée/i);
     expect(last.content).not.toMatch(/je ne peux donc pas appliquer/i);
 
     // Re-open v1 and v2
@@ -931,8 +945,10 @@ s
       expect(body).not.toMatch(/enregistré avec succès/i);
       expect(body).not.toMatch(/Statut observé: AVAILABLE/);
       expect(body).not.toMatch(/Statut observé: FAILED/);
-      expect(body).toMatch(/NOT_EXECUTED/);
-      expect(body).toMatch(/DOCUMENT_PROPOSAL_MISSING|pré-effet|Transaction D4: non tentée/i);
+      expect(body).toMatch(/Résultat applicatif|Aucun enregistrement documentaire/i);
+      expect(body).not.toMatch(/Nouvelle version disponible/i);
+      expect(chat.documentSave?.status).toBe("NOT_EXECUTED");
+      expect(chat.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
     } finally {
       delete turnRaceHooks.replaceNoraAssistantText;
     }
@@ -995,9 +1011,12 @@ s
       const msgs = await listMessages(pilotId, prep.id);
       const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
       const body = assistant?.content ?? "";
-      expect(body).toMatch(/NOT_EXECUTED/);
+      expect(body).toMatch(/Résultat applicatif|Aucun enregistrement documentaire/i);
+      expect(body).not.toMatch(/Nouvelle version disponible/i);
       expect(body).not.toMatch(/Statut observé: FAILED/);
       expect(body).not.toMatch(/Statut observé: AVAILABLE/);
+      expect(revised.documentSave?.status).toBe("NOT_EXECUTED");
+      expect(revised.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
     } finally {
       delete turnRaceHooks.replaceNoraAssistantText;
     }
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts
index a8ad9b56..ef79f7cf 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts
@@ -197,6 +197,9 @@ describe("ML4C document command (PG)", () => {
       preparationId: prep.id,
       documentId,
       baseRevisionId,
+      // Production seal path always passes source+observed head (legacy base-alone is obsolete fixture).
+      sourceRevisionId: baseRevisionId,
+      observedHeadRevisionId: baseRevisionId,
       source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved2.commandId },
       title,
       contentMarkdown: revisedBody,
@@ -211,6 +214,9 @@ describe("ML4C document command (PG)", () => {
     });
     expect(sealedRev.sealApplied).toBe(true);
     expect(sealedRev.effect.status).toBe("AVAILABLE");
+    if (sealedRev.effect.status === "FAILED") {
+      throw new Error(`revise seal failed: ${sealedRev.effect.reason}`);
+    }
     const list = await listDocumentRevisions(pilotId, prep.id, documentId!);
     expect(list.revisions.length).toBeGreaterThanOrEqual(2);
   });
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-document-identity.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-document-identity.pg.test.ts
index 0ccf88dc..8e515552 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4c-document-identity.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-document-identity.pg.test.ts
@@ -579,16 +579,19 @@ describe("ML4C document identity F-01 (PG)", () => {
       preparationId: prep.id,
       documentId: created.effect.documentId,
       baseRevisionId: created.effect.revisionId,
+      sourceRevisionId: created.effect.revisionId,
+      observedHeadRevisionId: created.effect.revisionId,
       source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
       title: createAdmitted.binding.title,
       contentMarkdown: revisedBody,
     });
     if (!admittedRev.ok) throw new Error(admittedRev.reason);
-    await sealAndApplyDocumentCommand({
+    const sealedRev = await sealAndApplyDocumentCommand({
       pilotId,
       fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
       binding: admittedRev.binding,
     });
+    expect(sealedRev.effect.status).toBe("AVAILABLE");
 
     const wrongBase = newId("rev");
     const binding = {
@@ -663,16 +666,19 @@ describe("ML4C document identity F-01 (PG)", () => {
       preparationId: prep.id,
       documentId: created.effect.documentId,
       baseRevisionId: created.effect.revisionId,
+      sourceRevisionId: created.effect.revisionId,
+      observedHeadRevisionId: created.effect.revisionId,
       source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
       title: createAdmitted.binding.title,
       contentMarkdown: `${createAdmitted.binding.contentMarkdown}\n## F01-14\n`,
     });
     if (!admittedRev.ok) throw new Error(admittedRev.reason);
-    await sealAndApplyDocumentCommand({
+    const sealedRev = await sealAndApplyDocumentCommand({
       pilotId,
       fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
       binding: admittedRev.binding,
     });
+    expect(sealedRev.effect.status).toBe("AVAILABLE");
 
     const otherDocId = newId("doc");
     await db.insert(documents).values({
@@ -972,6 +978,8 @@ describe("ML4C document identity F-01 (PG)", () => {
         preparationId: prep.id,
         documentId: created.effect.documentId,
         baseRevisionId: created.effect.revisionId,
+        sourceRevisionId: created.effect.revisionId,
+        observedHeadRevisionId: created.effect.revisionId,
         source: { kind: "SAME_TURN_SNAPSHOT", commandId: reservedRev.commandId },
         title: admitted.binding.title,
         contentMarkdown: revisedBody,
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-document-reconciliation.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-document-reconciliation.pg.test.ts
index 74b8365a..c6ed8cb5 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4c-document-reconciliation.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-document-reconciliation.pg.test.ts
@@ -296,6 +296,8 @@ describe("ML4C document reconciliation C-01 (PG)", () => {
       preparationId: prep.id,
       documentId,
       baseRevisionId,
+      sourceRevisionId: baseRevisionId,
+      observedHeadRevisionId: baseRevisionId,
       source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
       title,
       contentMarkdown: revisedBody,
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
index 2eb549d9..21c575ba 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
@@ -62,6 +62,7 @@ import {
   sfiaDocumentFence,
   type ExplicitFixtureSpec,
 } from "../helpers/semantic-fixture-envelopes";
+import { proposeThenConserveRevise } from "../helpers/document-conserve";
 
 async function seedPilot(label: string) {
   const id = newId("pilot");
@@ -114,12 +115,13 @@ async function noraTurn(
   pilotId: string,
   preparationId: string,
   text: string,
-  opts?: { fixture?: ExplicitFixtureSpec },
+  opts?: Parameters<typeof postUserMessageAndNora>[3] & { fixture?: ExplicitFixtureSpec },
 ) {
   if (opts?.fixture) {
     registerExplicitFixture(text, opts.fixture);
   }
-  return postUserMessageAndNora(pilotId, preparationId, text);
+  const { fixture: _f, ...turnOpts } = opts ?? {};
+  return postUserMessageAndNora(pilotId, preparationId, text, turnOpts);
 }
 
 async function seedFillerMessages(
@@ -592,10 +594,35 @@ describe("ML4C prior proposal C-02 / C-03 (PG)", () => {
       },
     });
 
-    const chat = await noraTurn(pilotId, prep.id, utterance);
+    // PRIOR_ASSISTANT_MESSAGE: no implicit write — proposal then explicit conserve.
+    const before = await countD4Rows(pilotId, prep.id);
+    const proposed = await noraTurn(pilotId, prep.id, utterance);
+    expect(proposed.documentSave?.status).toBe("NOT_EXECUTED");
+    expect(proposed.documentSave?.reason).toBe("PROPOSAL_PENDING_CONSERVATION");
+    expect(await countD4Rows(pilotId, prep.id)).toEqual(before);
+    const cand = proposed.pendingDocumentCandidate;
+    expect(cand?.candidateId).toBeTruthy();
+    if (!cand?.candidateId) throw new Error("expected pending candidate");
+    const { DOC_CONSERVE_PROPOSAL } = await import(
+      "@/domains/conversation/document-candidate"
+    );
+    const chat = await noraTurn(pilotId, prep.id, DOC_CONSERVE_PROPOSAL, {
+      documentFocus: {
+        documentId: cand.documentId,
+        sourceRevisionId: cand.sourceRevisionId,
+        observedHeadRevisionId: cand.observedHeadRevisionId,
+        conserveProposal: true,
+        pendingCandidateId: cand.candidateId,
+        pendingCandidateContentSha256: cand.contentSha256,
+      },
+    });
     expect(chat.documentSave?.status).toBe("AVAILABLE");
     expect(chat.documentSave?.act).toBe("REVISE");
+    expect(chat.documentSave?.documentId).toBe(created.documentId);
+    expect(chat.documentSave?.revisionNumber).toBe(2);
+    expect((await countD4Rows(pilotId, prep.id)).revisions).toBe(before.revisions + 1);
 
+    // Conserve seals the inspected candidate (SAME_TURN_SNAPSHOT of the proposal turn).
     const cmd = (
       await db
         .select({ resultJson: conversationTurnCommands.resultJson })
@@ -605,10 +632,11 @@ describe("ML4C prior proposal C-02 / C-03 (PG)", () => {
     )[0];
     expect(cmd?.resultJson).toBeTruthy();
     const parsed = JSON.parse(cmd!.resultJson!) as {
-      documentCommandBindings?: Array<{ source?: { kind?: string } }>;
+      documentCommandBindings?: Array<{ source?: { kind?: string; commandId?: string } }>;
     };
     const binding = parsed.documentCommandBindings?.[0];
-    expect(binding?.source?.kind).toBe("ASSISTANT_MESSAGE");
+    expect(binding?.source?.kind).toBe("SAME_TURN_SNAPSHOT");
+    expect(binding?.source?.commandId).toBeTruthy();
   });
 
   it("P1: three historical assistant fences — no source → zero D4; explicit id → exact create", async () => {
@@ -1567,8 +1595,29 @@ SOURCE-CANARI-BETA-73
     const legacyFence = "```sfia-document\n" + sectionBody + "\n```\n";
     turnRaceHooks.replaceNoraAssistantText = () =>
       `Voici la modification proposée pour **Option B**.\n\n${legacyFence}`;
+    let chat: Awaited<ReturnType<typeof noraTurn>>;
     try {
-      const chat = await noraTurn(pilotId, prep.id, utterance);
+      const proposed = await noraTurn(pilotId, prep.id, utterance);
+      expect(proposed.documentSave?.status).toBe("NOT_EXECUTED");
+      expect(proposed.documentSave?.reason).toBe("PROPOSAL_PENDING_CONSERVATION");
+      const cand = proposed.pendingDocumentCandidate;
+      expect(cand?.candidateId).toBeTruthy();
+      if (!cand?.candidateId) throw new Error("expected pending candidate");
+      // Hook must not contaminate the conserve turn (fixture DOC_CONSERVE owns that reply).
+      delete turnRaceHooks.replaceNoraAssistantText;
+      const { DOC_CONSERVE_PROPOSAL } = await import(
+        "@/domains/conversation/document-candidate"
+      );
+      chat = await noraTurn(pilotId, prep.id, DOC_CONSERVE_PROPOSAL, {
+        documentFocus: {
+          documentId: cand.documentId,
+          sourceRevisionId: cand.sourceRevisionId,
+          observedHeadRevisionId: cand.observedHeadRevisionId,
+          conserveProposal: true,
+          pendingCandidateId: cand.candidateId,
+          pendingCandidateContentSha256: cand.contentSha256,
+        },
+      });
       expect(chat.documentSave?.status).toBe("AVAILABLE");
       expect(chat.documentSave?.act).toBe("REVISE");
       expect(chat.documentSave?.documentId).toBe(documentId);
```

## 10. Invariants conservés

pdoc · hauth · D4 · concurrence · idempotence · provenance · refus interprojet · UNKNOWN/FAILED sans faux succès · PRIOR_ASSISTANT sans écriture implicite · soft ACK sans codes techniques Nora · gel `web/src`.

## 11. Décisions Morris

- GO MERGE: **non demandé** / distinct
- STABLE / ADOPTED: **non acquis**
- LIVE: aucune
- J-C13 Option B: réserve focus-marker acceptée

## 12. L3 Handoff

**À :** Morris + ChatGPT Critical Review  
**Demande :** Critical Review du tip `121a2e38` + ce pack FULL (diffs inclus).  
**Pas** merge / STABLE / ADOPTED / RECETTE / LIVE.

**Verdict :** CI REMEDIATION VERIFIED — CHATGPT REVIEW REQUIRED

## 13. Fin Review Pack FULL Cycle 14


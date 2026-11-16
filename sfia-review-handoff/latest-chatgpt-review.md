# SFIA Review Pack FULL — R5 / ML4D — Cycle 8 Sas Nora UX Figma → code

**Date:** 2026-11-16
**Intégrateur:** Cursor
**Décideur:** Morris
**Profil:** STANDARD
**Typologie:** EVOL — convergence visuelle
**Cycle:** 8 — Delivery / implémentation
**§6.6:** UX/UI + Figma visual contract — ACTIVÉ
**Review Handoff:** required / publish-in-cycle / L3
**Verdict:** `FIGMA TO RUNTIME ALIGNED — READY FOR CHATGPT VISUAL REVIEW`

---

## 0. GO Morris — portée

GO 16 novembre 2026 — correction de transposition UX du Sas Nora vers les cinq frames Figma validées.

**Autorisé:** code local DEV, tests, captures, as-built/delivery-history, commit local, handoff L3.

**Hors GO:** RECETTE, push produit, PR, merge, STABLE, Gate C, ML5, ADOPTED, écriture Figma, docs normatifs, services D2/D3/D4, migrations.

---

## 1. Git Truth Check

| Champ | Valeur |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| HEAD avant | `16f45a917ca10f150d42ff4f23965d1927259e8e` |
| Commit fonctionnel antérieur | `cd091385de10262918cf79bf8c86ad1d725cb9d1` |
| Tree web fonctionnel | `6f089bda818fa60e061f458fad928f3478e648b4` |
| Main distante | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| HEAD après commit UX | `e52cec0d0bd72b1731f61f60f3db54e0e9a70d1c` |
| Tree web après | `1f40b42cfc86b89b16f27fff7f08960588daeb0a` |
| Push produit | **AUCUN** |
| Handoff précédent | `38230d80` / blob `671415ed` |

### RECETTE préservée (vérifiée)

| Champ | Valeur |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| SHA servi | `cd091385…` |
| Build | `E3J7wVO4MsKgl5aCTDhed` |
| Migration 013 | déjà appliquée — **non retouchée** |
| LaunchAgent | inchangé |

### DEV

| Champ | Valeur |
| --- | --- |
| URL | http://127.0.0.1:3102 |
| Lane | DEV / PG 5433 |
| Harness | `/dev/sas-visual/{first_intention,clarification,proposal,base_sufficient,resume}` |
| BUILD_ID fichier | `T03qorYZpGs0odz56Nb9f` (turbopack DEV) |

---

## 2. Sources Figma natives lues

| Frame | Node | Nom |
| --- | --- | --- |
| Page | 606:2 | 03 · ML4D — Sas Nora · Propositions UX |
| 01 | 607:3 | Accueil / Première intention |
| 02 | 607:62 | Clarification |
| 03 | 607:131 | Proposition évolutive |
| 04 | 607:203 | Base suffisante |
| 05 | 607:277 | Préparation reprise |
| Shared | 606:20 | Rail personnel 246×970 |
| Shared | 606:37 | Composer 780×118 |

Fichier: `itgvCulInEnFY6DvgIegvP` — **AUCUNE ÉCRITURE**.

Captures Figma figées: `.tmp-sfia-review/figma-refs/01..05-*.png`

---

## 3. Contrat visuel extrait

Viewport référence: **1680×970**.

| Élément | Figma |
| --- | --- |
| Rail | 246 px · `#0D1220` |
| Header | 72 px · `#0B1019` |
| Conversation | 800 px |
| Aperçu | 518×655 |
| Composer | 780×118 (indépendant) |
| Fond | `#0B101B` |
| Accent | `#7477ED` / deep `#343E8B` |
| Texte | `#F3F5FF` / muted `#A3B0C7` / quiet `#7787A4` |
| Ambre / vert | `#E6BA76` / `#6CDBBA` |
| Typo | Inter |

États pilotés par `projection.suggestion.assessment` + flag reprise — **pas d'heuristique textuelle**.

---

## 4. Matrice initiale FIGMA / RUNTIME / ÉCART / ACTION

| Zone | Écart initial (RECETTE cd091385) | Action |
| --- | --- | --- |
| Composition | Carte conversation englobante + create card séparée | Grille `sas-workspace` conversation+aperçu |
| Composer | Intégré carte, placeholder générique | Composer indépendant Figma |
| Aperçu | Compact, sections faibles | Panneau unique sections + séparateurs |
| Header | UUID visible, titre générique | Breadcrumb shell + stages Figma |
| Rail | OK largeur 246 ; fill à aligner | Fill `#0D1220` ; prep toujours personnel |
| Création | Carte « maître de la création » | CTA dans aperçu (état 04) |

---

## 5. Implémentation

Fichiers principaux:

- `sas-presentation.ts` — stages
- `PreparationConversation.tsx` / `PreparationProposal.tsx`
- `tokens.css` / `globals.css` / `studio-shell.css`
- `page.tsx` préparations
- `StudioShell.tsx` / `studio-rail.ts`
- harness `app/dev/sas-visual/[state]/page.tsx`
- tests unit presentation + rail

**Aucun** changement service D2/D3/D4, migration, droits, modèle.

---

## 6. Preuve visuelle F2 (1680×970)

Captures runtime: `.tmp-sfia-review/runtime-captures/01..05-*.png`

### Tableau Figma / runtime (géométrie stable)


| État | Node | Δ CSS px (rail/header/composer/preview/conv) | Notes |
| --- | --- | --- | --- |
| first_intention | 607:3 | rail 0 · header 0 · composerH 0 · preview 0 · conv 0 | create=False · Exploration |
| clarification | 607:62 | rail 0 · header 0 · composerH 0 · preview 0 · conv 0 | create=False · Clarification |
| proposal | 607:131 | rail 0 · header 0 · composerH 0 · preview 0 · conv 0 | create=False · En construction |
| base_sufficient | 607:203 | rail 0 · header 0 · composerH 0 · preview 0 · conv 0 | create=True · Base suffisante |
| resume | 607:277 | rail 0 · header 0 · composerH 0 · preview 0 · conv 0 | create=False · Reprise |

**Objectif F2:** 0 CSS px sur géométrie stable — **ATTEINT** pour les cinq états.

Responsive capturé: 1280 / 1440 / 390 / 320 (`01-responsive-*.png`).

### Écarts résiduels (non bloquants)

1. Harness `/dev/sas-visual` affiche le rail portefeuille (Pas « Préparation en cours ») — artefact harness ; route réelle `/preparations/:id` conserve le rail sas minimal.
2. Bouton secondaire « Ajuster l'aperçu » demeure pour inspection D2 (hors maquette stricte).
3. Position Y absolue du composer (~731 vs Figma 791) : décalage shell padding vs artboard absolu — hauteurs/largeurs stables à Δ0.
4. Acceptation visuelle Morris finale **PENDING**.

---

## 7. Tests

| Suite | Résultat |
| --- | --- |
| `vitest` studio-rail + sas-presentation | **17 PASS** |
| eslint fichiers touchés | 0 error (2 warnings préexistants unused imports page) |
| Typecheck fichiers nouveaux | clean (erreurs tsc préexistantes hors scope) |
| Smoke harness 5 états | HTTP 200 |
| RECETTE identity post-cycle | `E3J7wVO4MsKgl5aCTDhed` |

Fake/Real: UI déterministe (fixtures) ≠ Nora LIVE. LIVE **NOT PROVEN**.

---

## 8. Fake / Real / LIVE

| Frontière | Statut |
| --- | --- |
| UI / BROWSER fixtures | PASS déterministe |
| PostgreSQL | non muté ce cycle |
| Nora LIVE | PENDING USER |
| Morris visuelle | PENDING |

---

## 9. Diffs commit `e52cec0d`


```diff
commit e52cec0d0bd72b1731f61f60f3db54e0e9a70d1c
Author: Morris Cleland <morris@macbook-air.home>
Date:   Mon Nov 16 14:38:39 2026 +0100

    fix(next): align Sas Nora UX composition to Figma 607 frames

    Restore conversation + living preview + independent composer geometry
    and presentation stages from D2 assessment/resume without changing
    services, migrations, or the frozen RECETTE build.

    Co-authored-by: Cursor <cursoragent@cursor.com>
---
 .../as-built-ml4d-sas-nora-convergence-20261116.md |  39 +-
 .../construction/delivery-history.md               |  15 +
 .../web/src/app/dev/sas-visual/[state]/page.tsx    | 116 +++++
 projects/sfia-studio-next/web/src/app/globals.css  |  40 +-
 .../src/app/preparations/[preparationId]/page.tsx  |  66 ++-
 .../components/figma/PreparationConversation.tsx   | 115 +++--
 .../src/components/figma/PreparationProposal.tsx   | 396 ++++++++------
 .../web/src/components/figma/sas-presentation.ts   | 120 +++++
 .../src/components/figma/sas-visual-fixtures.ts    | 228 ++++++++
 .../web/src/components/figma/tokens.css            | 572 ++++++++++++++++++++-
 .../web/src/components/shell/StudioShell.tsx       |  39 +-
 .../web/src/components/shell/studio-rail.ts        |  20 +-
 .../web/src/components/shell/studio-shell.css      |  35 +-
 .../web/tests/unit/sas-presentation.test.ts        |  73 +++
 .../web/tests/unit/studio-rail.test.ts             |  12 +-
 15 files changed, 1601 insertions(+), 285 deletions(-)

diff --git a/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md b/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
index 5a12dba8..b0797838 100644
--- a/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
+++ b/projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md
@@ -5,13 +5,13 @@
 | Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + garanties |
 | Type | EVOL / MINOR candidate · **NO RELEASE** |
 | Base UX-004 | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
-| Candidat Sas | `596718b1` → `1dfc79ff` → `acb5ce65` → **garanties G1/G2/G3 (ce cycle)** |
+| Candidat Sas | `cd091385` + **convergence UX Figma→code (ce cycle)** |
 | Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
 | Contrats | docs@`22ee5540` (fonctionnel + technique) |
-| Figma | `itgvCulInEnFY6DvgIegvP` 607:3…277 — VALIDATED UX Morris, non modifié |
-| Lane | DEV only — RECETTE inchangée |
-| Build DEV | `T03qorYZpGs0odz56Nb9f` @ `127.0.0.1:3102` (attendu) |
-| RECETTE | `b05dacf4` / BUILD `20blGylSEta7201PgVvlw` @ `:3200` — **non modifiée** |
+| Figma | `itgvCulInEnFY6DvgIegvP` 607:3 / 62 / 131 / 203 / 277 — VALIDATED UX Morris, **aucune écriture Figma** |
+| Lane | DEV only — RECETTE figée |
+| Build DEV | turbopack @ `127.0.0.1:3102` (BUILD_ID fichier `T03qorYZpGs0odz56Nb9f` / source post-commit) |
+| RECETTE | `cd091385` / BUILD `E3J7wVO4MsKgl5aCTDhed` @ `:3200` — **inchangée** |

 ## Architecture

@@ -37,18 +37,35 @@ Orientation Morris (unicité / Pilote) vs PF-CRE-14. **R2 non réécrit.** Gate

 ## Migration 013

-Additive `projection_json` — **non promue RECETTE** par ce GO. Aucune migration 014.
+Déjà appliquée sur RECETTE (cycle déploiement antérieur). **Aucune migration** dans le cycle UX.
+
+## Convergence UX Figma → code (cycle 8)
+
+Composition partagée `sas-*` pilotée par `sas-presentation` (assessment D2 + reprise), sans nouveau moteur métier.
+
+| État | Node Figma | Runtime |
+| --- | --- | --- |
+| Première intention | 607:3 | stage `first_intention` |
+| Clarification | 607:62 | `clarification` |
+| Proposition | 607:131 | `proposal` |
+| Base suffisante | 607:203 | `base_sufficient` + CTA aperçu |
+| Reprise | 607:277 | `resume` |
+
+F2 géométrie stable (1680×970) : rail 246 / header 72 / composer 118 / preview 518 / conversation 800 — **Δ 0 CSS px**.
+
+Harness DEV : `/dev/sas-visual/[state]` (fixtures déterministes, hors RECETTE).

 ## Preuves

 | Niveau | Résultat |
 | --- | --- |
-| UNIT projection / writeStatus / instructions LIVE structurelles | PASS |
-| PG REAL create-project + PATCH + intent-continuity | PASS |
-| BROWSER FAKE sas (multi-tours sans PATCH) | PASS |
+| UNIT presentation / rail | PASS |
+| Captures Figma + runtime 5 états | PASS (voir `.tmp-sfia-review/`) |
+| F2 géométrie | PASS (Δ0) |
 | NORA LIVE | **NOT PROVEN** |
-| MORRIS UI | **PENDING** |
+| MORRIS UI visuelle | **PENDING** |
+| RECETTE | **inchangée** `E3J7wVO4MsKgl5aCTDhed` |

 ## Rollback

-Revert commit(s) correctifs. Aucune migration destructive.
+Revert commit(s) UX. Aucune migration destructive. RECETTE non touchée.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 5cdada52..fdb4c649 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -25,6 +25,21 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré

 ---

+## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-UX-FIGMA
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~14:40 CET |
+| Macro-lot | ML4D — Convergence UX Figma → code Sas Nora |
+| Type | Cycle 8 Delivery · EVOL visuelle · **NO RELEASE** |
+| Figma | `itgvCulInEnFY6DvgIegvP` nodes 607:3/62/131/203/277 — lecture seule |
+| Scope | Composition sas conversation+aperçu+composer ; tokens ; shell header/rail personnel |
+| Non-scope | D2/D3/D4 services, migrations, RECETTE, Figma write, PR/merge |
+| Preuves | F2 Δ0 (rail/header/composer/preview/conv) ; 5 captures runtime ; harness `/dev/sas-visual/*` |
+| RECETTE | **inchangée** `cd091385` / `E3J7wVO4MsKgl5aCTDhed` |
+| Push produit | **AUCUN** |
+| Verdict | `FIGMA TO RUNTIME ALIGNED — READY FOR CHATGPT VISUAL REVIEW` (Morris final) |
+
 ## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-RECETTE-CUTOVER

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/app/dev/sas-visual/[state]/page.tsx b/projects/sfia-studio-next/web/src/app/dev/sas-visual/[state]/page.tsx
new file mode 100644
index 00000000..0147e478
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/app/dev/sas-visual/[state]/page.tsx
@@ -0,0 +1,116 @@
+"use client";
+
+/**
+ * DEV-only Sas Nora visual harness — deterministic fixtures for Figma comparison.
+ * Does not touch persistence, D2 services, or RECETTE.
+ */
+
+import { useParams } from "next/navigation";
+import { useMemo, useState } from "react";
+import { PreparationConversation } from "@/components/figma/PreparationConversation";
+import { PreparationProposal } from "@/components/figma/PreparationProposal";
+import {
+  resolveSasPresentationStage,
+  sasPresentationCopy,
+} from "@/components/figma/sas-presentation";
+import { parseSasVisualFixture } from "@/components/figma/sas-visual-fixtures";
+
+export default function SasVisualHarnessPage() {
+  const params = useParams<{ state: string }>();
+  const fixture = useMemo(() => parseSasVisualFixture(params.state), [params.state]);
+  const [draft, setDraft] = useState("");
+  const [editing, setEditing] = useState(false);
+  const [draftName, setDraftName] = useState(fixture?.previewName ?? "");
+  const [draftSummary, setDraftSummary] = useState(fixture?.previewSummary ?? "");
+
+  if (process.env.NODE_ENV === "production" && process.env.STUDIO_LANE === "RECETTE") {
+    return (
+      <p className="muted" data-testid="sas-visual-forbidden">
+        Harness visuel indisponible hors DEV.
+      </p>
+    );
+  }
+
+  if (!fixture) {
+    return (
+      <p className="muted" data-testid="sas-visual-unknown">
+        État inconnu. Utilisez first_intention, clarification, proposal, base_sufficient ou resume.
+      </p>
+    );
+  }
+
+  const isResumed = fixture.stage === "resume";
+  const presentation = sasPresentationCopy(
+    resolveSasPresentationStage({
+      isResumed,
+      assessment: fixture.projection.suggestion?.assessment,
+      messageCount: fixture.messages.length,
+    }),
+  );
+
+  return (
+    <div
+      className="sas-page"
+      data-testid="sas-page"
+      data-sas-stage={presentation.stage}
+      data-figma-frame={
+        presentation.stage === "resume"
+          ? "607:277"
+          : presentation.stage === "base_sufficient"
+            ? "607:203"
+            : presentation.stage === "proposal"
+              ? "607:131"
+              : presentation.stage === "clarification"
+                ? "607:62"
+                : "607:3"
+      }
+      data-sas-visual-fixture={params.state}
+    >
+      <header className="sas-stage">
+        <p className="sas-stage-kicker" data-testid="sas-stage-kicker">
+          {presentation.kicker}
+        </p>
+        <h1 className="sas-stage-title" data-testid="sas-stage-title">
+          {presentation.title}
+        </h1>
+        <p className="sas-stage-sub" data-testid="sas-stage-sub">
+          {presentation.subtitle}
+        </p>
+      </header>
+      <div className="sas-workspace" data-testid="sas-workspace">
+        <PreparationConversation
+          messages={fixture.messages}
+          draft={draft}
+          busy={false}
+          noraActivity="idle"
+          onDraftChange={setDraft}
+          onSend={() => setDraft("")}
+          showResumeBanner={isResumed}
+        />
+        <PreparationProposal
+          projectId={null}
+          previewName={fixture.previewName}
+          previewSummary={fixture.previewSummary}
+          creationRevision={1}
+          messageCount={fixture.messages.length}
+          openPoints={fixture.openPoints}
+          projection={fixture.projection}
+          projectionFreshness="current"
+          presentation={presentation}
+          busy={false}
+          editing={editing}
+          draftName={draftName}
+          draftSummary={draftSummary}
+          onDraftName={setDraftName}
+          onDraftSummary={setDraftSummary}
+          onStartConstitute={() => setEditing(true)}
+          onAdoptLastNoraSummary={() => undefined}
+          canAdoptLastNora={false}
+          onSaveProposal={() => setEditing(false)}
+          onCancelEdit={() => setEditing(false)}
+          onCreateProject={() => undefined}
+        />
+      </div>
+    </div>
+  );
+}
diff --git a/projects/sfia-studio-next/web/src/app/globals.css b/projects/sfia-studio-next/web/src/app/globals.css
index 7e1a5b58..9c456cca 100644
--- a/projects/sfia-studio-next/web/src/app/globals.css
+++ b/projects/sfia-studio-next/web/src/app/globals.css
@@ -3,31 +3,31 @@
 @tailwind utilities;

 :root {
-  /* ML2 visual tokens + F1 rail fills from G2 railEvidence (VERIFY PASS) */
-  --bg: #0a0e17;
-  --panel: #151c29;
-  --rail: #0d111b;
-  --rail-personnel: #0c101a;
+  /* Sas Nora Figma 607:* + prior rail fills */
+  --bg: #0b101b;
+  --panel: #151d2c;
+  --rail: #0d1220;
+  --rail-personnel: #0d1220;
   --rail-projet: #0c1020;
   --rail-conversation: #0d111b;
   --rail-inspection: #0c101a;
-  --ink: #f4f6fc;
-  --muted: #94a2bb;
-  --accent: #656fe1;
+  --ink: #f3f5ff;
+  --muted: #a3b0c7;
+  --accent: #7477ed;
   --accent-soft: #afa5ff;
-  --line: #313c51;
-  --ok: #a6dfbc;
-  --warn: #ebc789;
+  --line: #2b3850;
+  --ok: #6cdbba;
+  --warn: #e6ba76;
   --bad: #e35d6a;
-  --msg-nora: #1a2130;
-  --msg-pilot: #252d40;
+  --msg-nora: #151d2c;
+  --msg-pilot: #1b2639;
   /* Prefer Inter if installed; never fetch Google fonts at build time (CI-stable). */
   --font-inter: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
   --font-sans: var(--font-inter);
 }

 html, body {
-  background: radial-gradient(1200px 600px at 10% -10%, #1a2433 0%, var(--bg) 55%);
+  background: var(--bg);
   color: var(--ink);
   min-height: 100%;
   font-family: var(--font-sans);
@@ -73,6 +73,18 @@ a:hover { text-decoration: underline; }

 .muted { color: var(--muted); }

+.sr-only {
+  position: absolute;
+  width: 1px;
+  height: 1px;
+  padding: 0;
+  margin: -1px;
+  overflow: hidden;
+  clip: rect(0, 0, 0, 0);
+  white-space: nowrap;
+  border: 0;
+}
+
 .safe-md h1 { font-size: 1.25rem; font-weight: 700; margin: 0.6rem 0 0.35rem; }
 .safe-md h2 { font-size: 1.1rem; font-weight: 700; margin: 0.55rem 0 0.3rem; }
 .safe-md h3 { font-size: 1rem; font-weight: 600; margin: 0.45rem 0 0.25rem; }
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index c124823f..88ad98e3 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -16,6 +16,10 @@ import {
   inspectedCreatePayload,
   type PreparationProjection,
 } from "@/domains/preparation/projection";
+import {
+  resolveSasPresentationStage,
+  sasPresentationCopy,
+} from "@/components/figma/sas-presentation";

 type Msg = { id: string; role: string; content: string; status: string };
 type Doc = {
@@ -756,31 +760,44 @@ export default function PreparationPage() {
   }

   const inspected = docs.find((d) => d.document.id === inspectDocId) ?? docs[0];
-  const sasFrame = isResumedPrep ? "159:145" : "94:135";
+  const presentationStage = resolveSasPresentationStage({
+    isResumed: isResumedPrep,
+    assessment: projection?.suggestion?.assessment,
+    messageCount: messages.length,
+  });
+  const presentation = sasPresentationCopy(presentationStage);
+  const sasFrame =
+    presentationStage === "resume"
+      ? "607:277"
+      : presentationStage === "base_sufficient"
+        ? "607:203"
+        : presentationStage === "proposal"
+          ? "607:131"
+          : presentationStage === "clarification"
+            ? "607:62"
+            : "607:3";

   return (
-    <div className="fig-page" data-figma-frame={sasFrame} data-sas-resume={isResumedPrep ? "1" : "0"}>
-      <div className="fig-breadcrumb">
-        <span>
-          SFIA Studio / Nouveau projet / préparation{isResumedPrep ? " · reprise" : ""}
-        </span>
-        <span className="text-xs muted truncate max-w-[40%]">{preparationId}</span>
-      </div>
-      <header className="space-y-2">
-        <p className="fig-kicker">Espace de préparation — projet non créé</p>
-        <h1 className="fig-hero-title">
-          {isResumedPrep ? "Préparation retrouvée" : "Clarifions votre intention"}
+    <div
+      className="sas-page"
+      data-figma-frame={sasFrame}
+      data-sas-stage={presentationStage}
+      data-sas-resume={isResumedPrep ? "1" : "0"}
+      data-testid="sas-page"
+    >
+      <header className="sas-stage">
+        <p className="sas-stage-kicker" data-testid="sas-stage-kicker">
+          {presentation.kicker}
+        </p>
+        <h1 className="sas-stage-title" data-testid="sas-stage-title">
+          {presentation.title}
         </h1>
-        <p className="fig-hero-sub">
-          {isResumedPrep
-            ? "Continuité du même fil. L’aperçu reflète ce qui est déjà acquis ; créez explicitement si prêt."
-            : "Discutez librement avec Nora. L’aperçu du projet évolue pendant la conversation."}
-          {projectId ? ` Projet lié : ${projectId}.` : ""}
+        <p className="sas-stage-sub" data-testid="sas-stage-sub">
+          {presentation.subtitle}
         </p>
-        {/* Gap D — no permanent Discussion/Journal/Documents tabs as primary sas chrome.
-            Contextual tools remain reachable without competing with conversation + aperçu. */}
+        {/* Secondary tools stay contextual — never permanent Travail/Pilotage/Journal tabs. */}
         {surface !== "travail" ? (
-          <nav className="flex flex-wrap gap-2 pt-1" aria-label="Retour conversation sas">
+          <nav className="flex flex-wrap gap-2 pt-2" aria-label="Retour conversation sas">
             <button
               type="button"
               className="btn secondary"
@@ -791,7 +808,7 @@ export default function PreparationPage() {
             </button>
           </nav>
         ) : (
-          <details className="pt-1 text-xs muted" data-testid="sas-secondary-tools">
+          <details className="sas-secondary-tools text-xs muted" data-testid="sas-secondary-tools">
             <summary className="cursor-pointer">Outils secondaires du sas</summary>
             <div className="flex flex-wrap gap-2 pt-2">
               <button
@@ -811,10 +828,13 @@ export default function PreparationPage() {
             </div>
           </details>
         )}
+        <span className="sr-only" data-testid="sas-preparation-id">
+          {preparationId}
+        </span>
       </header>

       {surface === "travail" ? (
-        <div className="fig-workspace">
+        <div className="sas-workspace" data-testid="sas-workspace">
           <PreparationConversation
             messages={messages}
             draft={draft}
@@ -822,6 +842,7 @@ export default function PreparationPage() {
             noraActivity={noraActivity}
             onDraftChange={setDraft}
             onSend={() => void sendMessage()}
+            showResumeBanner={isResumedPrep}
           />
           <PreparationProposal
             projectId={projectId}
@@ -834,6 +855,7 @@ export default function PreparationPage() {
               .map((o) => ({ id: o.id, statement: o.statement }))}
             projection={projection}
             projectionFreshness={projectionFreshness}
+            presentation={presentation}
             busy={busy}
             editing={proposalEditing}
             draftName={draftProposalName}
diff --git a/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
index ac059af1..ca7b0a5f 100644
--- a/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
@@ -16,61 +16,100 @@ export function PreparationConversation(props: {
   noraActivity: "idle" | "preparing" | "error";
   onDraftChange: (v: string) => void;
   onSend: () => void;
+  /** Resume banner when preparation is reopened (state 05). */
+  showResumeBanner?: boolean;
   footer?: React.ReactNode;
 }) {
   const empty = props.messages.length === 0;

   return (
-    <section className="fig-panel fig-sas-thread space-y-3" data-testid="prep-conversation">
-      <p className="fig-kicker">Discussion</p>
-      <div className="space-y-3 max-h-[58vh] overflow-auto pr-1" data-testid="prep-message-list">
-        {empty ? (
-          <div className="fig-msg fig-msg-nora" data-testid="prep-empty-invite">
-            <div className="text-xs muted mb-2 uppercase tracking-wide">Nora</div>
-            <p className="text-sm">
-              Exposez votre intention librement. Je clarifie avec vous — aucun projet n&apos;est créé
-              tant que vous ne le décidez pas explicitement.
-            </p>
+    <section className="sas-thread" data-testid="prep-conversation">
+      <div className="sas-thread-scroll" data-testid="prep-message-list">
+        {props.showResumeBanner ? (
+          <div className="sas-resume-banner" role="status" data-testid="prep-resume-banner">
+            <span aria-hidden>●</span>
+            <span>Conversation et contexte retrouvés · vous pouvez continuer</span>
           </div>
         ) : null}
-        {props.messages.map((m) => (
-          <article
-            key={m.id}
-            className={`fig-msg ${m.role === "assistant" ? "fig-msg-nora" : "fig-msg-pilot"}`}
-            data-testid={`prep-msg-${m.role}`}
-          >
-            <div className="text-xs muted mb-2 flex gap-2 items-center">
-              <span className="uppercase tracking-wide">
-                {m.role === "assistant" ? "Nora" : "Pilote"}
+
+        {empty ? (
+          <article className="sas-msg sas-msg-nora" data-testid="prep-empty-invite">
+            <header className="sas-msg-head">
+              <span className="sas-msg-avatar sas-msg-avatar-nora" aria-hidden>
+                ✦
               </span>
-              <span>· {m.status}</span>
+              <span className="sas-msg-role sas-msg-role-nora">NORA</span>
+            </header>
+            <div className="sas-msg-body">
+              <p>
+                Bonjour. Racontez-moi ce que vous aimeriez accomplir, même si l&apos;idée est encore
+                vague.
+              </p>
+              <p>
+                Je vous aiderai à en dégager une première direction, sans vous demander un cadrage
+                complet.
+              </p>
             </div>
-            {m.role === "assistant" ? (
-              <SafeMarkdown content={m.content} />
-            ) : (
-              <div className="whitespace-pre-wrap text-sm">{m.content}</div>
-            )}
           </article>
-        ))}
+        ) : null}
+
+        {props.messages.map((m, index) => {
+          const isNora = m.role === "assistant";
+          const highlight =
+            isNora &&
+            index === props.messages.length - 1 &&
+            props.messages.filter((x) => x.role === "assistant").length > 1;
+          return (
+            <article
+              key={m.id}
+              className={`sas-msg ${isNora ? "sas-msg-nora" : "sas-msg-pilot"}${
+                highlight ? " sas-msg-nora-emphasis" : ""
+              }`}
+              data-testid={`prep-msg-${m.role}`}
+            >
+              <header className="sas-msg-head">
+                <span
+                  className={`sas-msg-avatar ${isNora ? "sas-msg-avatar-nora" : "sas-msg-avatar-pilot"}`}
+                  aria-hidden
+                >
+                  {isNora ? "✦" : "P"}
+                </span>
+                <span className={`sas-msg-role ${isNora ? "sas-msg-role-nora" : "sas-msg-role-pilot"}`}>
+                  {isNora ? "NORA" : "PILOTE"}
+                </span>
+              </header>
+              <div className="sas-msg-body">
+                {isNora ? (
+                  <SafeMarkdown content={m.content} />
+                ) : (
+                  <div className="whitespace-pre-wrap">{m.content}</div>
+                )}
+              </div>
+            </article>
+          );
+        })}
+
         {props.noraActivity === "preparing" ? (
-          <div className="fig-alert" role="status" aria-live="polite">
+          <div className="sas-thread-status" role="status" aria-live="polite">
             Nora prépare une réponse…
           </div>
         ) : null}
         {props.noraActivity === "error" ? (
-          <div className="fig-alert" style={{ borderColor: "var(--bad)" }} role="alert">
+          <div className="sas-thread-status sas-thread-status-error" role="alert">
             Échec de génération — votre message Pilote est conservé. Vous pouvez renvoyer.
           </div>
         ) : null}
       </div>
-      <div className="fig-composer">
+
+      <div className="sas-composer" data-testid="prep-composer">
         <textarea
-          className="textarea"
+          className="sas-composer-input"
           value={props.draft}
           onChange={(e) => props.onDraftChange(e.target.value)}
-          placeholder="Écrire à Nora…"
+          placeholder="Décrivez votre idée, une question ou une hésitation…"
           aria-label="Message à Nora"
           data-testid="prep-draft"
+          rows={2}
           onKeyDown={(e) => {
             if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
               e.preventDefault();
@@ -78,17 +117,23 @@ export function PreparationConversation(props: {
             }
           }}
         />
-        <div className="flex flex-wrap gap-2 items-center">
+        <div className="sas-composer-bar" aria-hidden={!props.draft.trim()}>
+          <span className="sas-composer-hint">
+            <span className="sas-composer-plus" aria-hidden>
+              ＋
+            </span>
+            Échanger librement avec Nora
+          </span>
           <button
             type="button"
-            className="btn"
+            className="sas-composer-send"
             disabled={props.busy || !props.draft.trim()}
             onClick={props.onSend}
             data-testid="prep-send"
+            aria-label="Envoyer le message"
           >
-            Envoyer
+            <span aria-hidden>↑</span>
           </button>
-          <span className="text-xs muted">⌘/Ctrl+Entrée</span>
         </div>
       </div>
       {props.footer}
diff --git a/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx b/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
index b2cf861f..285eaeb6 100644
--- a/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
@@ -1,23 +1,16 @@
 "use client";

 /**
- * Living D2 aperçu — driven by PreparationProjection (and compatible preview fields).
- * « Constituer une proposition » is no longer the primary path; secondary adjust remains
- * for explicit Pilot inspection edits without becoming a second authority.
+ * Living D2 aperçu — single vertical panel aligned to Sas Nora Figma composition.
+ * Create CTA lives inside this panel (frame 04). No separate authority card.
  */

 import type { PreparationProjection } from "@/domains/preparation/projection";
 import { canCreateFromProjection } from "@/domains/preparation/projection";
+import type { SasPresentationCopy } from "./sas-presentation";

 export type ProposalOpenPoint = { id: string; statement: string };

-const ASSESSMENT_LABEL: Record<string, string> = {
-  EXPLORING: "Exploration",
-  CLARIFYING: "Clarification",
-  PROPOSAL: "Proposition",
-  BASE_SUFFICIENTE: "Base suffisante",
-};
-
 function statusLabel(status: string | undefined, sourceKind?: string): string {
   if (status === "PILOT_EXPRESSED") {
     return sourceKind === "PILOT_UI_EDIT" ? "Corrigé (inspection)" : "Exprimé";
@@ -27,6 +20,22 @@ function statusLabel(status: string | undefined, sourceKind?: string): string {
   return "—";
 }

+function badgeClass(tone: SasPresentationCopy["panelBadgeTone"]): string {
+  if (tone === "amber") return "sas-badge sas-badge-amber";
+  if (tone === "green") return "sas-badge sas-badge-green";
+  if (tone === "accent") return "sas-badge sas-badge-accent";
+  return "sas-badge sas-badge-muted";
+}
+
+type Section = {
+  key: string;
+  label: string;
+  value: string;
+  tone?: "default" | "amber" | "quiet";
+  provenance?: string;
+  testId?: string;
+};
+
 export function PreparationProposal(props: {
   projectId: string | null;
   previewName: string;
@@ -36,6 +45,7 @@ export function PreparationProposal(props: {
   openPoints: ProposalOpenPoint[];
   projection: PreparationProjection | null;
   projectionFreshness?: "current" | "stale" | "unavailable" | "legacy";
+  presentation: SasPresentationCopy;
   busy: boolean;
   editing: boolean;
   draftName: string;
@@ -53,9 +63,7 @@ export function PreparationProposal(props: {
   const created = Boolean(props.projectId);
   const projection = props.projection;
   const name =
-    projection?.name?.value?.trim() ||
-    props.previewName.trim() ||
-    "";
+    projection?.name?.value?.trim() || props.previewName.trim() || "";
   const intention = projection?.intention?.value?.trim() || "";
   const outcome = projection?.desiredOutcome?.value?.trim() || "";
   const scope = projection?.initialScope?.value?.trim() || "";
@@ -63,60 +71,162 @@ export function PreparationProposal(props: {
   const explanation = projection?.suggestion?.explanation?.trim() || "";
   const openFromProjection = (projection?.openQuestions ?? []).filter((q) => q.value.trim());
   const openFromKnowledge = props.openPoints;
+  const openCombined = [
+    ...openFromProjection.map((q) => q.value),
+    ...openFromKnowledge.map((o) => o.statement),
+  ].filter(Boolean);
   const hasLiving =
     Boolean(name) ||
     Boolean(intention) ||
     Boolean(outcome) ||
     Boolean(scope) ||
-    openFromProjection.length > 0 ||
+    openCombined.length > 0 ||
     Boolean(explanation) ||
     Boolean(props.previewSummary.trim());
   const canCreate = !created && canCreateFromProjection(projection, props.previewName);
+  const stage = props.presentation.stage;
+  // CTA composition belongs to frame 04; still honors D2 canCreate (no extra Nora gate).
+  const showCreateCta =
+    !created &&
+    canCreate &&
+    (stage === "base_sufficient" || assessment === "BASE_SUFFICIENTE");
+
+  const sections: Section[] = [];
+  if (stage === "first_intention" && !hasLiving) {
+    sections.push(
+      {
+        key: "intention",
+        label: "INTENTION",
+        value: "À découvrir ensemble",
+        tone: "quiet",
+      },
+      {
+        key: "outcome",
+        label: "RÉSULTAT ENVISAGÉ",
+        value: "Pas encore défini",
+        tone: "quiet",
+      },
+      {
+        key: "open",
+        label: "À CLARIFIER",
+        value: "Nous partirons de votre première idée.",
+        tone: "quiet",
+      },
+    );
+  } else if (stage === "resume") {
+    sections.push({
+      key: "intention",
+      label: "INTENTION CONSERVÉE",
+      value: name || intention || props.previewSummary.trim() || "Intention reprise",
+      testId: "prep-field-name",
+      provenance: projection?.name
+        ? statusLabel(projection.name.status, projection.name.source.kind)
+        : undefined,
+    });
+    if (outcome || intention || props.previewSummary.trim()) {
+      sections.push({
+        key: "acquis",
+        label: "ACQUIS",
+        value:
+          [intention || props.previewSummary.trim(), outcome, scope].filter(Boolean).join(" · ") ||
+          "Éléments déjà clarifiés",
+        testId: "prep-field-intention",
+      });
+    }
+    sections.push({
+      key: "open",
+      label: "POINT EN SUSPENS",
+      value: openCombined[0] || "À préciser dans la conversation",
+      tone: openCombined.length ? "amber" : "quiet",
+    });
+  } else {
+    if (name || stage === "proposal" || stage === "base_sufficient") {
+      sections.push({
+        key: "name",
+        label:
+          stage === "base_sufficient"
+            ? "NOM PROPOSÉ"
+            : stage === "proposal"
+              ? "NOM DE TRAVAIL"
+              : "NOM",
+        value: name || "Projet envisagé",
+        testId: "prep-field-name",
+        provenance: projection?.name
+          ? statusLabel(projection.name.status, projection.name.source.kind)
+          : undefined,
+      });
+    }
+    sections.push({
+      key: "intention",
+      label: stage === "proposal" ? "INTENTION COMPRISE" : "INTENTION",
+      value: intention || props.previewSummary.trim() || "À découvrir ensemble",
+      tone: intention || props.previewSummary.trim() ? "default" : "quiet",
+      testId: "prep-field-intention",
+      provenance: projection?.intention ? statusLabel(projection.intention.status) : undefined,
+    });
+    if (outcome || stage === "clarification" || stage === "proposal" || stage === "base_sufficient") {
+      sections.push({
+        key: "outcome",
+        label:
+          stage === "proposal"
+            ? "PREMIER RÉSULTAT"
+            : stage === "clarification"
+              ? "RÉSULTAT VISÉ"
+              : "RÉSULTAT ENVISAGÉ",
+        value: outcome || (stage === "first_intention" ? "Pas encore défini" : "À préciser"),
+        tone: outcome ? "default" : "quiet",
+      });
+    }
+    if (scope) {
+      sections.push({
+        key: "scope",
+        label: stage === "base_sufficient" ? "PREMIER PÉRIMÈTRE" : "PÉRIMÈTRE",
+        value: scope,
+      });
+    }
+    sections.push({
+      key: "open",
+      label:
+        stage === "base_sufficient"
+          ? "OUVERT POUR LA SUITE"
+          : stage === "proposal"
+            ? "À CONFIRMER"
+            : stage === "clarification"
+              ? "À PRÉCISER"
+              : "À CLARIFIER",
+      value:
+        openCombined[0] ||
+        (stage === "first_intention"
+          ? "Nous partirons de votre première idée."
+          : "Aucun point ouvert listé"),
+      tone: openCombined.length
+        ? stage === "base_sufficient"
+          ? "default"
+          : "amber"
+        : "quiet",
+    });
+  }

   return (
-    <aside className="space-y-3" data-testid="prep-proposal">
-      <div className="fig-panel space-y-3">
-        <div className="flex items-start justify-between gap-2">
-          <div>
-            <p className="fig-kicker">Aperçu du projet</p>
-            <h2 className="fig-panel-title !mb-0" data-testid="prep-proposal-title">
-              {name || "En cours de clarification"}
-            </h2>
-          </div>
+    <aside className="sas-preview" data-testid="prep-proposal">
+      <div className="sas-preview-inner">
+        <div className="sas-preview-head">
+          <p className="sas-preview-kicker">APERÇU DU PROJET</p>
           <span
-            className={`fig-tag ${created ? "fig-tag-ok" : assessment === "BASE_SUFFICIENTE" ? "fig-tag-ok" : "fig-tag-warn"}`}
+            className={badgeClass(props.presentation.panelBadgeTone)}
             data-testid="prep-proposal-state"
           >
-            {created
-              ? "Créé"
-              : assessment
-                ? ASSESSMENT_LABEL[assessment] ?? assessment
-                : hasLiving
-                  ? "En construction"
-                  : "À clarifier"}
+            {created ? "Créé" : props.presentation.panelBadge}
           </span>
         </div>

-        {!hasLiving && !props.editing ? (
-          <div className="fig-empty-list" data-testid="prep-proposal-empty">
-            <div className="fig-empty-row">
-              <div>
-                <div className="font-medium">
-                  {props.messageCount === 0
-                    ? "Commencez la conversation"
-                    : "Nora affine encore l’intention"}
-                </div>
-                <div className="muted text-xs">
-                  L’aperçu évolue avec les échanges. Aucun formulaire préalable n’est requis pour
-                  avancer.
-                </div>
-              </div>
-            </div>
-          </div>
-        ) : null}
+        <h2 className="sas-preview-title" data-testid="prep-proposal-title">
+          {name || "Projet envisagé"}
+        </h2>
+        <p className="sas-preview-sub">Proposition évolutive de Nora · non autorisante</p>

         {props.editing ? (
-          <div className="space-y-2" data-testid="prep-proposal-edit">
+          <div className="sas-preview-edit space-y-2" data-testid="prep-proposal-edit">
             <p className="text-xs muted">
               Ajustement explicite pour inspection — n&apos;est pas le parcours principal.
             </p>
@@ -171,137 +281,103 @@ export function PreparationProposal(props: {
                 Annuler
               </button>
             </div>
-            <p className="text-xs muted">Révision création courante : {props.creationRevision}</p>
           </div>
-        ) : null}
-
-        {hasLiving && !props.editing ? (
-          <div className="space-y-2" data-testid="prep-proposal-ready">
-            <div className="fig-msg text-sm space-y-2">
-              {name ? (
-                <div>
-                  <span className="fig-tag fig-tag-muted mr-2">Nom</span>
-                  <span className="text-xs" data-testid="prep-field-name">
-                    {name}
+        ) : (
+          <div className="sas-preview-sections" data-testid={hasLiving ? "prep-proposal-ready" : "prep-proposal-empty"}>
+            {sections.map((section) => (
+              <div key={section.key} className="sas-preview-section">
+                <p className="sas-preview-label">{section.label}</p>
+                <p
+                  className={`sas-preview-value${
+                    section.tone === "amber"
+                      ? " is-amber"
+                      : section.tone === "quiet"
+                        ? " is-quiet"
+                        : ""
+                  }`}
+                  data-testid={section.testId}
+                >
+                  {section.value}
+                </p>
+                {section.provenance ? (
+                  <span className="sas-preview-provenance" data-testid={`${section.testId}-provenance`}>
+                    · {section.provenance}
                   </span>
-                  {projection?.name ? (
-                    <span className="muted text-xs ml-2" data-testid="prep-field-name-provenance">
-                      · {statusLabel(projection.name.status, projection.name.source.kind)}
-                    </span>
-                  ) : null}
-                </div>
-              ) : null}
-              {intention || props.previewSummary.trim() ? (
-                <div>
-                  <span className="fig-tag fig-tag-muted mr-2">Intention</span>
-                  <p className="mt-1 whitespace-pre-wrap text-sm" data-testid="prep-field-intention">
-                    {intention || props.previewSummary.trim()}
-                  </p>
-                  {projection?.intention ? (
-                    <span className="muted text-xs">
-                      {statusLabel(projection.intention.status)}
-                    </span>
-                  ) : null}
-                </div>
-              ) : null}
-              {outcome ? (
-                <div>
-                  <span className="fig-tag fig-tag-muted mr-2">Résultat</span>
-                  <p className="mt-1 whitespace-pre-wrap text-sm">{outcome}</p>
-                </div>
-              ) : null}
-              {scope ? (
-                <div>
-                  <span className="fig-tag fig-tag-muted mr-2">Périmètre</span>
-                  <p className="mt-1 whitespace-pre-wrap text-sm">{scope}</p>
-                </div>
-              ) : null}
-              <div>
-                <span className="fig-tag fig-tag-muted mr-2">Ouvert</span>
-                <span className="muted text-xs">
-                  {openFromProjection.length + openFromKnowledge.length > 0
-                    ? `${openFromProjection.length + openFromKnowledge.length} point(s)`
-                    : "Aucun point ouvert listé"}
-                </span>
+                ) : null}
               </div>
-            </div>
-            {openFromProjection.slice(0, 4).map((q, i) => (
-              <p key={`pq-${i}`} className="text-xs muted pl-1">
-                · {q.value}
-              </p>
             ))}
-            {openFromKnowledge.slice(0, 4).map((o) => (
-              <p key={o.id} className="text-xs muted pl-1">
-                · {o.statement}
-              </p>
-            ))}
-            {explanation ? (
-              <div className="fig-msg text-sm" data-testid="prep-nora-assessment">
-                <span className="fig-tag fig-tag-muted mr-2">Appréciation Nora</span>
-                <p className="mt-1 whitespace-pre-wrap text-sm">{explanation}</p>
-                <p className="text-xs muted mt-1">
-                  Suggestion qualitative — jamais une autorisation de créer.
-                </p>
-              </div>
-            ) : null}
+            {openCombined.length > 1
+              ? openCombined.slice(1, 4).map((q, i) => (
+                  <p key={`oq-${i}`} className="sas-preview-open-extra">
+                    · {q}
+                  </p>
+                ))
+              : null}
+          </div>
+        )}
+
+        {!props.editing ? (
+          <div
+            className={`sas-maturity ${stage === "base_sufficient" ? "sas-maturity-ok" : ""}`}
+            data-testid="prep-nora-assessment"
+          >
+            <p className="sas-maturity-title">{props.presentation.maturityTitle}</p>
+            <p className="sas-maturity-body">
+              {explanation && stage === "base_sufficient"
+                ? explanation
+                : props.presentation.maturityBody}
+            </p>
+          </div>
+        ) : null}
+
+        {showCreateCta ? (
+          <div className="sas-create-block">
             <button
               type="button"
-              className="btn secondary"
-              disabled={created}
-              onClick={props.onStartConstitute}
-              data-testid="prep-constitute"
+              className="sas-create-btn"
+              disabled={props.busy || created || !canCreate}
+              onClick={props.onCreateProject}
+              data-testid="prep-create-project"
             >
-              Ajuster l&apos;aperçu
+              {created ? "Projet déjà créé" : "Créer le projet"}
             </button>
-            <p className="text-xs muted">
-              Révision création : {props.creationRevision}
-              {props.projectionFreshness === "legacy"
-                ? " · aperçu partiel (préparation ancienne)"
-                : props.projectionFreshness === "unavailable"
-                  ? " · projection indisponible — dernière vérité conservée"
-                  : ""}
-            </p>
+            <p className="sas-create-hint">Ou continuer à préciser avec Nora</p>
           </div>
-        ) : null}
+        ) : (
+          <p className="sas-preview-foot">
+            {created
+              ? "Projet créé — continuité disponible dans l’espace projet."
+              : "Aucun projet durable créé à ce stade"}
+          </p>
+        )}

-        {!hasLiving && !props.editing ? (
+        {!props.editing && !created ? (
           <button
             type="button"
-            className="btn secondary w-full"
-            disabled={created}
+            className="btn secondary sas-preview-adjust"
             onClick={props.onStartConstitute}
             data-testid="prep-constitute"
           >
-            Ajuster l&apos;aperçu manuellement
+            Ajuster l&apos;aperçu
           </button>
         ) : null}
-      </div>

-      <div className="fig-panel space-y-3" style={{ background: "rgba(101,111,225,0.08)" }}>
-        <h3 className="fig-panel-title">Vous restez maître de la création</h3>
-        <p className="text-sm muted">
-          Une réponse Nora n&apos;est jamais une création. Le projet n&apos;existe qu&apos;après votre
-          confirmation explicite sur l&apos;aperçu inspecté.
+        <p className="sas-preview-meta muted text-xs sr-only" data-testid="prep-creation-revision">
+          Révision création : {props.creationRevision}
+          {props.projectionFreshness === "legacy"
+            ? " · aperçu partiel (préparation ancienne)"
+            : props.projectionFreshness === "unavailable"
+              ? " · projection indisponible — dernière vérité conservée"
+              : ""}
+          {assessment ? ` · ${assessment}` : ""}
         </p>
-        <button
-          type="button"
-          className="btn w-full"
-          disabled={props.busy || created || !canCreate}
-          onClick={props.onCreateProject}
-          data-testid="prep-create-project"
-        >
-          {created ? "Projet déjà créé" : "Créer le projet"}
-        </button>
-        <p className="text-xs muted">
-          Tu peux reprendre cette préparation quand tu le souhaites.
-        </p>
-      </div>

-      {props.status ? (
-        <p className="text-sm muted" data-testid="surface-status">
-          {props.status}
-        </p>
-      ) : null}
+        {props.status ? (
+          <p className="text-sm muted" data-testid="surface-status">
+            {props.status}
+          </p>
+        ) : null}
+      </div>
     </aside>
   );
 }
diff --git a/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts b/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts
new file mode 100644
index 00000000..f7e19c6e
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/components/figma/sas-presentation.ts
@@ -0,0 +1,120 @@
+/**
+ * Sas Nora presentation stage — derived from preparation data (assessment / resume),
+ * not from free-text heuristics. Shared by page chrome and living preview.
+ */
+
+import type { ProjectionAssessment } from "@/domains/preparation/projection";
+
+export type SasPresentationStage =
+  | "first_intention"
+  | "clarification"
+  | "proposal"
+  | "base_sufficient"
+  | "resume";
+
+export type SasPresentationCopy = {
+  stage: SasPresentationStage;
+  kicker: string;
+  title: string;
+  subtitle: string;
+  panelBadge: string;
+  panelBadgeTone: "muted" | "amber" | "green" | "accent";
+  maturityTitle: string;
+  maturityBody: string;
+  headerBreadcrumb: string;
+};
+
+const ASSESSMENT_TO_STAGE: Record<string, SasPresentationStage> = {
+  EXPLORING: "first_intention",
+  CLARIFYING: "clarification",
+  PROPOSAL: "proposal",
+  BASE_SUFFICIENTE: "base_sufficient",
+};
+
+export function resolveSasPresentationStage(input: {
+  isResumed: boolean;
+  assessment: ProjectionAssessment | null | undefined;
+  messageCount: number;
+}): SasPresentationStage {
+  if (input.isResumed) return "resume";
+  if (input.assessment && ASSESSMENT_TO_STAGE[input.assessment]) {
+    return ASSESSMENT_TO_STAGE[input.assessment];
+  }
+  if (input.messageCount === 0) return "first_intention";
+  return "clarification";
+}
+
+export function sasPresentationCopy(stage: SasPresentationStage): SasPresentationCopy {
+  switch (stage) {
+    case "clarification":
+      return {
+        stage,
+        kicker: "CLARIFICATION EN COURS",
+        title: "Donnons une forme à votre idée",
+        subtitle: "Nora reformule ce qu'elle comprend et vous pose une question utile à la fois.",
+        panelBadge: "Clarification",
+        panelBadgeTone: "amber",
+        maturityTitle: "●  Clarification",
+        maturityBody:
+          "Compris à ce stade. Nora continue à explorer les points réellement utiles, sans imposer de questionnaire.",
+        headerBreadcrumb: "Nouvelle préparation",
+      };
+    case "proposal":
+      return {
+        stage,
+        kicker: "PROPOSITION ÉVOLUTIVE",
+        title: "Une proposition prend forme",
+        subtitle:
+          "Ce que Nora propose apparaît ici, avec ce qui est compris et ce qui reste ouvert.",
+        panelBadge: "En construction",
+        panelBadgeTone: "amber",
+        maturityTitle: "●  En construction",
+        maturityBody:
+          "Proposition de Nora, non décision du Pilote. Corrigez-la simplement dans la conversation.",
+        headerBreadcrumb: "Nouvelle préparation",
+      };
+    case "base_sufficient":
+      return {
+        stage,
+        kicker: "CRÉATION ENVISAGEABLE",
+        title: "Vous avez une base pour démarrer",
+        subtitle:
+          "Nora explique pourquoi le projet peut commencer, sans vous imposer un cadrage exhaustif.",
+        panelBadge: "Base suffisante",
+        panelBadgeTone: "green",
+        maturityTitle: "✓  Vous pouvez démarrer",
+        maturityBody:
+          "Nora estime la base suffisante, sans créer le projet. La décision finale vous appartient.",
+        headerBreadcrumb: "Nouvelle préparation",
+      };
+    case "resume":
+      return {
+        stage,
+        kicker: "PRÉPARATION RETROUVÉE",
+        title: "Reprenons là où vous en étiez",
+        subtitle:
+          "Votre intention et les échanges précédents restent disponibles, sans repartir de zéro.",
+        panelBadge: "Reprise",
+        panelBadgeTone: "accent",
+        maturityTitle: "●  Continuité conservée",
+        maturityBody:
+          "Le même fil est repris. Aucune préparation parallèle ni projet définitif créé.",
+        headerBreadcrumb: "Préparation reprise",
+      };
+    case "first_intention":
+    default:
+      return {
+        stage: "first_intention",
+        kicker: "PREMIÈRE INTENTION",
+        title: "Parlons de votre projet",
+        subtitle:
+          "Vous n'avez pas besoin d'avoir tout prévu. Commencez par ce qui vous motive.",
+        panelBadge: "Exploration",
+        panelBadgeTone: "muted",
+        maturityTitle: "●  Exploration",
+        maturityBody:
+          "L'aperçu se construit à mesure que Nora comprend votre intention. Aucun formulaire préalable.",
+        headerBreadcrumb: "Nouvelle préparation",
+      };
+  }
+}
diff --git a/projects/sfia-studio-next/web/src/components/figma/sas-visual-fixtures.ts b/projects/sfia-studio-next/web/src/components/figma/sas-visual-fixtures.ts
new file mode 100644
index 00000000..54f0326c
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/components/figma/sas-visual-fixtures.ts
@@ -0,0 +1,228 @@
+/**
+ * Deterministic Sas Nora visual fixtures for DEV screenshots / Playwright.
+ * Presentation-only — does not mutate persistence or D2 services.
+ */
+
+import type {
+  PreparationProjection,
+  ProjectionAssessment,
+  ProposedField,
+} from "@/domains/preparation/projection";
+import type { SasPresentationStage } from "./sas-presentation";
+
+export type SasVisualFixture = {
+  stage: SasPresentationStage;
+  messages: Array<{ id: string; role: string; content: string; status: string }>;
+  projection: PreparationProjection;
+  previewName: string;
+  previewSummary: string;
+  openPoints: Array<{ id: string; statement: string }>;
+};
+
+function field(
+  value: string,
+  status: ProposedField<string>["status"] = "NORA_PROPOSED",
+): ProposedField<string> {
+  return {
+    value,
+    status,
+    source: { kind: "NORA_TURN", ref: "visual-fixture" },
+    isCurrent: true,
+  };
+}
+
+function projection(input: {
+  assessment: ProjectionAssessment;
+  explanation: string;
+  name?: ProposedField<string> | null;
+  intention?: ProposedField<string> | null;
+  desiredOutcome?: ProposedField<string> | null;
+  initialScope?: ProposedField<string> | null;
+  openQuestions?: ProposedField<string>[];
+}): PreparationProjection {
+  return {
+    schemaVersion: 1,
+    preparationId: "visual-fixture",
+    revision: 1,
+    updatedFromTurnKey: "visual-fixture-turn",
+    observedAt: "2026-11-16T12:00:00.000Z",
+    name: input.name ?? null,
+    intention: input.intention ?? null,
+    desiredOutcome: input.desiredOutcome ?? null,
+    initialScope: input.initialScope ?? null,
+    openQuestions: input.openQuestions ?? [],
+    suggestion: {
+      assessment: input.assessment,
+      explanation: input.explanation,
+      sourceTurnKey: "visual-fixture-turn",
+    },
+  };
+}
+
+export const SAS_VISUAL_FIXTURES: Record<string, SasVisualFixture> = {
+  first_intention: {
+    stage: "first_intention",
+    messages: [],
+    projection: projection({
+      assessment: "EXPLORING",
+      explanation: "Exploration.",
+    }),
+    previewName: "",
+    previewSummary: "",
+    openPoints: [],
+  },
+  clarification: {
+    stage: "clarification",
+    messages: [
+      {
+        id: "m1",
+        role: "user",
+        content:
+          "J'aimerais créer un outil qui aide les chefs de projet à garder le cap sans multiplier les tableaux et les applications.",
+        status: "committed",
+      },
+      {
+        id: "m2",
+        role: "assistant",
+        content:
+          "Si je comprends bien, votre besoin principal est de rendre les priorités, les décisions et les prochaines actions plus faciles à suivre.

Quel est aujourd'hui le point qui vous fait perdre le plus de temps : retrouver l'information, décider, ou suivre les actions ?",
+        status: "committed",
+      },
+      {
+        id: "m3",
+        role: "user",
+        content: "Surtout retrouver les décisions et savoir ce qu'on doit faire ensuite.",
+        status: "committed",
+      },
+    ],
+    projection: projection({
+      assessment: "CLARIFYING",
+      explanation: "Clarification en cours.",
+      intention: field("Simplifier le pilotage des projets"),
+      desiredOutcome: field("Retrouver les décisions et la suite"),
+      openQuestions: [field("Premier public et contexte d'usage", "NEEDS_CONFIRMATION")],
+    }),
+    previewName: "",
+    previewSummary: "Simplifier le pilotage des projets",
+    openPoints: [{ id: "o1", statement: "Premier public et contexte d'usage" }],
+  },
+  proposal: {
+    stage: "proposal",
+    messages: [
+      {
+        id: "m1",
+        role: "user",
+        content:
+          "Je veux un outil qui centralise le contexte d'un projet et m'accompagne dans les décisions. Un espace simple, plutôt qu'un outil de plus.",
+        status: "committed",
+      },
+      {
+        id: "m2",
+        role: "assistant",
+        content:
+          "Je vous propose une première base : un espace de travail continu pour piloter un projet avec un copilote IA.

Le premier résultat pourrait être de retrouver les décisions, les prochaines actions et leur contexte au même endroit.",
+        status: "committed",
+      },
+      {
+        id: "m3",
+        role: "assistant",
+        content:
+          "Je garderais la collaboration multi-équipe comme question ouverte pour plus tard. Nous pouvons encore affiner ce premier périmètre.",
+        status: "committed",
+      },
+    ],
+    projection: projection({
+      assessment: "PROPOSAL",
+      explanation: "Proposition évolutive.",
+      name: field("Assistant de conduite de projets"),
+      intention: field("Un espace de projet sans dispersion"),
+      desiredOutcome: field("Décisions et prochaines actions lisibles"),
+      openQuestions: [field("Usage individuel ou en équipe", "NEEDS_CONFIRMATION")],
+    }),
+    previewName: "Assistant de conduite de projets",
+    previewSummary: "Un espace de projet sans dispersion",
+    openPoints: [{ id: "o1", statement: "Usage individuel ou en équipe" }],
+  },
+  base_sufficient: {
+    stage: "base_sufficient",
+    messages: [
+      {
+        id: "m1",
+        role: "user",
+        content:
+          "On va commencer pour moi seul, avec le suivi des décisions, des points ouverts et des prochaines actions. On élargira plus tard.",
+        status: "committed",
+      },
+      {
+        id: "m2",
+        role: "assistant",
+        content:
+          "Nous avons une première intention claire, un utilisateur identifié et un résultat utile pour commencer.

Je vous recommande de créer le projet sur cette base. Le périmètre pourra évoluer, et nous préciserons ensemble les autres fonctionnalités après sa création.",
+        status: "committed",
+      },
+      {
+        id: "m3",
+        role: "assistant",
+        content:
+          "Je reste à vos côtés : le fil et les éléments déjà clarifiés vous suivront dans votre espace projet.",
+        status: "committed",
+      },
+    ],
+    projection: projection({
+      assessment: "BASE_SUFFICIENTE",
+      explanation:
+        "Nora estime la base suffisante, sans créer le projet. La décision finale vous appartient.",
+      name: field("Assistant de conduite de projets"),
+      intention: field("Rendre les décisions actionnables"),
+      desiredOutcome: field("Décisions et prochaines actions lisibles"),
+      initialScope: field("Projet personnel · suivi des décisions"),
+      openQuestions: [field("Collaboration multi-équipe", "NEEDS_CONFIRMATION")],
+    }),
+    previewName: "Assistant de conduite de projets",
+    previewSummary: "Rendre les décisions actionnables",
+    openPoints: [{ id: "o1", statement: "Collaboration multi-équipe" }],
+  },
+  resume: {
+    stage: "resume",
+    messages: [
+      {
+        id: "m1",
+        role: "assistant",
+        content:
+          "Bon retour. Nous avions clarifié l'objectif : faciliter le suivi des décisions et des prochaines actions dans un espace de projet personnel.",
+        status: "committed",
+      },
+      {
+        id: "m2",
+        role: "user",
+        content: "Oui, je voudrais continuer à préciser la première version avant de lancer le projet.",
+        status: "committed",
+      },
+      {
+        id: "m3",
+        role: "assistant",
+        content:
+          "Très bien. Nous avions laissé la collaboration en équipe pour plus tard.

Voulez-vous commencer par le parcours quotidien d'un chef de projet, ou approfondir les informations à retrouver dans le cockpit ?",
+        status: "committed",
+      },
+    ],
+    projection: projection({
+      assessment: "PROPOSAL",
+      explanation: "Continuité conservée.",
+      name: field("Assistant de conduite de projets"),
+      intention: field("Assistant de conduite de projets"),
+      desiredOutcome: field("Vision personnelle et premier résultat"),
+      openQuestions: [field("Prioriser le premier parcours", "NEEDS_CONFIRMATION")],
+    }),
+    previewName: "Assistant de conduite de projets",
+    previewSummary: "Vision personnelle et premier résultat",
+    openPoints: [{ id: "o1", statement: "Prioriser le premier parcours" }],
+  },
+};
+
+export function parseSasVisualFixture(
+  raw: string | null | undefined,
+): SasVisualFixture | null {
+  if (!raw) return null;
+  return SAS_VISUAL_FIXTURES[raw] ?? null;
+}
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 92cf94e9..71013b73 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -1,25 +1,37 @@
-/* Figma G2 visual tokens — frames 94:50 / 94:214 / 94:370 (VERIFY PASS pack) */
+/* Figma tokens — Sas Nora 607:* (1680×970) + prior G2 frames */
 :root {
-  --fig-bg: #0a0e17;
+  --fig-bg: #0b101b;
   --fig-bg-elev: #0f1520;
-  --fig-panel: #151c29;
-  --fig-panel-2: #1a2233;
-  --fig-ink: #f4f6fc;
-  --fig-muted: #94a2bb;
-  --fig-line: #313c51;
-  --fig-accent: #656fe1;
+  --fig-panel: #151d2c;
+  --fig-panel-2: #1b2639;
+  --fig-panel-hi: #1b2639;
+  --fig-rail: #0d1220;
+  --fig-header: #0b1019;
+  --fig-ink: #f3f5ff;
+  --fig-muted: #a3b0c7;
+  --fig-quiet: #7787a4;
+  --fig-line: #2b3850;
+  --fig-accent: #7477ed;
   --fig-accent-soft: #afa5ff;
-  --fig-ok: #3ecf8e;
-  --fig-ok-bg: rgba(62, 207, 142, 0.12);
-  --fig-warn: #ebc789;
-  --fig-warn-bg: rgba(235, 199, 137, 0.12);
+  --fig-accent-deep: #343e8b;
+  --fig-accent-bg: #242c4b;
+  --fig-ok: #6cdbba;
+  --fig-ok-bg: #17382f;
+  --fig-warn: #e6ba76;
+  --fig-warn-bg: #3d3021;
   --fig-info: #5b8def;
   --fig-info-bg: rgba(91, 141, 239, 0.12);
   --fig-tag: #2a3347;
-  --fig-radius: 10px;
-  --fig-radius-sm: 8px;
+  --fig-radius: 13px;
+  --fig-radius-sm: 12px;
   --fig-gap: 18px;
-  --fig-content-max: 1330px;
+  --fig-content-max: 1434px;
+  --sas-rail: 246px;
+  --sas-header: 72px;
+  --sas-conversation-w: 800px;
+  --sas-preview-w: 518px;
+  --sas-composer-h: 118px;
+  --sas-panel-h: 655px;
 }

 .fig-page {
@@ -185,6 +197,536 @@
   align-items: start;
 }

+/* —— Sas Nora composition (Figma 607:3…607:277) —— */
+.sas-page {
+  display: flex;
+  flex-direction: column;
+  gap: 0;
+  width: 100%;
+  max-width: none;
+  min-height: 0;
+  height: 100%;
+  max-height: 100%;
+  overflow: hidden;
+}
+
+.sas-stage {
+  margin: 0 0 0.85rem;
+  flex-shrink: 0;
+}
+
+.sas-stage-kicker {
+  margin: 0;
+  font-size: 11px;
+  font-weight: 600;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--fig-accent);
+  line-height: 16px;
+}
+
+.sas-stage-title {
+  margin: 0.55rem 0 0;
+  font-size: clamp(1.55rem, 2.1vw, 1.94rem);
+  font-weight: 700;
+  letter-spacing: -0.02em;
+  color: var(--fig-ink);
+  line-height: 1.2;
+}
+
+.sas-stage-sub {
+  margin: 0.65rem 0 0;
+  font-size: 15px;
+  line-height: 22px;
+  color: var(--fig-muted);
+  max-width: 51rem;
+}
+
+.sas-workspace {
+  display: grid;
+  grid-template-columns: minmax(0, var(--sas-conversation-w)) minmax(280px, var(--sas-preview-w));
+  gap: 28px;
+  align-items: stretch;
+  flex: 1 1 auto;
+  min-height: 0;
+  height: 0; /* flex child fills remaining viewport without overflowing */
+  max-height: var(--sas-panel-h);
+  overflow: hidden;
+}
+
+.sas-workspace > * {
+  min-height: 0;
+  max-height: 100%;
+}
+
+.sas-thread {
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+  min-width: 0;
+  min-height: 0;
+  height: 100%;
+  max-height: 100%;
+  overflow: hidden;
+}
+
+.sas-thread-scroll {
+  flex: 1 1 auto;
+  min-height: 0;
+  overflow: auto;
+  display: flex;
+  flex-direction: column;
+  gap: 14px;
+  padding-right: 4px;
+  overscroll-behavior: contain;
+}
+
+.sas-resume-banner {
+  display: flex;
+  align-items: center;
+  gap: 0.55rem;
+  min-height: 51px;
+  padding: 0.75rem 1rem;
+  border-radius: 10px;
+  border: 1px solid var(--fig-accent-deep);
+  background: var(--fig-accent-bg);
+  color: var(--fig-muted);
+  font-size: 13px;
+  font-weight: 500;
+}
+
+.sas-msg {
+  border: 1px solid var(--fig-line);
+  border-radius: var(--fig-radius-sm);
+  padding: 16px 18px 18px;
+  background: var(--fig-panel);
+}
+
+.sas-msg-pilot {
+  background: var(--fig-panel-hi);
+}
+
+.sas-msg-nora-emphasis {
+  background: var(--fig-accent-bg);
+  border-color: var(--fig-accent-deep);
+}
+
+.sas-msg-head {
+  display: flex;
+  align-items: center;
+  gap: 0.65rem;
+  margin-bottom: 0.7rem;
+}
+
+.sas-msg-avatar {
+  width: 24px;
+  height: 24px;
+  border-radius: 7px;
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  font-size: 12px;
+  font-weight: 600;
+  flex-shrink: 0;
+}
+
+.sas-msg-avatar-nora {
+  background: var(--fig-accent-bg);
+  color: var(--fig-accent);
+  border-radius: 7px;
+}
+
+.sas-msg-avatar-pilot {
+  background: var(--fig-panel);
+  color: var(--fig-muted);
+  border-radius: 12px;
+}
+
+.sas-msg-role {
+  font-size: 11px;
+  font-weight: 600;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+}
+
+.sas-msg-role-nora { color: var(--fig-accent); }
+.sas-msg-role-pilot { color: var(--fig-muted); }
+
+.sas-msg-body {
+  font-size: 14px;
+  line-height: 20px;
+  color: var(--fig-ink);
+}
+
+.sas-msg-body p { margin: 0 0 0.55rem; }
+.sas-msg-body p:last-child { margin-bottom: 0; }
+
+.sas-thread-status {
+  border: 1px solid color-mix(in srgb, var(--fig-info) 55%, var(--fig-line));
+  background: var(--fig-info-bg);
+  border-radius: 8px;
+  padding: 10px 12px;
+  font-size: 0.82rem;
+  color: #c9d7ff;
+}
+
+.sas-thread-status-error {
+  border-color: color-mix(in srgb, var(--bad) 55%, var(--fig-line));
+}
+
+.sas-composer {
+  flex-shrink: 0;
+  display: flex;
+  flex-direction: column;
+  height: var(--sas-composer-h);
+  min-height: var(--sas-composer-h);
+  max-height: var(--sas-composer-h);
+  border: 1px solid var(--fig-line);
+  border-radius: var(--fig-radius);
+  background: var(--fig-panel);
+  padding: 14px 16px 10px;
+  box-sizing: border-box;
+}
+
+.sas-composer-input {
+  width: 100%;
+  flex: 1 1 auto;
+  min-height: 0;
+  height: 42px;
+  resize: none;
+  border: 0;
+  background: transparent;
+  color: var(--fig-ink);
+  font-family: inherit;
+  font-size: 14px;
+  line-height: 1.35;
+  padding: 0;
+  outline: none;
+}
+
+.sas-composer-input::placeholder {
+  color: var(--fig-quiet);
+}
+
+.sas-composer-bar {
+  display: flex;
+  align-items: center;
+  justify-content: space-between;
+  gap: 12px;
+  margin-top: 8px;
+  padding-top: 10px;
+  border-top: 1px solid var(--fig-line);
+  flex-shrink: 0;
+}
+
+.sas-composer-hint {
+  display: inline-flex;
+  align-items: center;
+  gap: 0.55rem;
+  color: var(--fig-quiet);
+  font-size: 11px;
+  font-weight: 500;
+}
+
+.sas-composer-plus {
+  color: var(--fig-muted);
+  font-size: 18px;
+  line-height: 1;
+}
+
+.sas-composer-send {
+  width: 48px;
+  height: 30px;
+  border: 0;
+  border-radius: 8px;
+  background: var(--fig-accent);
+  color: var(--fig-ink);
+  font-size: 19px;
+  font-weight: 600;
+  cursor: pointer;
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  flex-shrink: 0;
+}
+
+.sas-composer-send:disabled {
+  opacity: 0.45;
+  cursor: not-allowed;
+}
+
+.sas-composer-send:focus-visible,
+.sas-composer-input:focus-visible {
+  outline: 2px solid var(--fig-accent);
+  outline-offset: 2px;
+}
+
+.sas-preview {
+  min-width: 0;
+  height: 100%;
+  max-height: 100%;
+  overflow: hidden;
+}
+
+.sas-preview-inner {
+  height: 100%;
+  max-height: 100%;
+  display: flex;
+  flex-direction: column;
+  gap: 0;
+  padding: 18px 20px 16px;
+  border: 1px solid var(--fig-line);
+  border-radius: var(--fig-radius);
+  background: var(--fig-panel);
+  overflow: auto;
+  box-sizing: border-box;
+}
+
+.sas-preview-head {
+  display: flex;
+  align-items: center;
+  justify-content: space-between;
+  gap: 12px;
+}
+
+.sas-preview-kicker {
+  margin: 0;
+  font-size: 11px;
+  font-weight: 600;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
+  color: var(--fig-muted);
+}
+
+.sas-badge {
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  min-height: 29px;
+  padding: 0 13px;
+  border-radius: 14px;
+  font-size: 11px;
+  font-weight: 600;
+  white-space: nowrap;
+}
+
+.sas-badge-muted {
+  background: var(--fig-panel-hi);
+  color: var(--fig-muted);
+}
+.sas-badge-amber {
+  background: var(--fig-warn-bg);
+  color: var(--fig-warn);
+}
+.sas-badge-green {
+  background: var(--fig-ok-bg);
+  color: var(--fig-ok);
+}
+.sas-badge-accent {
+  background: var(--fig-accent-bg);
+  color: var(--fig-accent);
+}
+
+.sas-preview-title {
+  margin: 1rem 0 0;
+  font-size: 23px;
+  font-weight: 600;
+  line-height: 33px;
+  color: var(--fig-ink);
+}
+
+.sas-preview-sub {
+  margin: 0.15rem 0 0;
+  font-size: 12px;
+  line-height: 17px;
+  color: var(--fig-quiet);
+}
+
+.sas-preview-sections {
+  display: flex;
+  flex-direction: column;
+  margin-top: 0.85rem;
+}
+
+.sas-preview-section {
+  padding: 0.85rem 0;
+  border-top: 1px solid var(--fig-line);
+}
+
+.sas-preview-label {
+  margin: 0;
+  font-size: 10px;
+  font-weight: 600;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--fig-quiet);
+  line-height: 15px;
+}
+
+.sas-preview-value {
+  margin: 0.35rem 0 0;
+  font-size: 14px;
+  font-weight: 500;
+  line-height: 20px;
+  color: var(--fig-ink);
+  white-space: pre-wrap;
+}
+
+.sas-preview-value.is-quiet { color: var(--fig-quiet); }
+.sas-preview-value.is-amber { color: var(--fig-warn); }
+
+.sas-preview-provenance {
+  display: inline-block;
+  margin-top: 0.2rem;
+  font-size: 11px;
+  color: var(--fig-quiet);
+}
+
+.sas-preview-open-extra {
+  margin: 0;
+  padding: 0 0 0.35rem;
+  font-size: 12px;
+  color: var(--fig-quiet);
+}
+
+.sas-maturity {
+  margin-top: auto;
+  padding: 12px 14px;
+  border: 1px solid var(--fig-line);
+  border-radius: 10px;
+  background: var(--fig-panel-hi);
+  color: var(--fig-muted);
+}
+
+.sas-maturity-ok {
+  background: var(--fig-ok-bg);
+  border-color: var(--fig-ok);
+}
+
+.sas-maturity-title {
+  margin: 0;
+  font-size: 13px;
+  font-weight: 600;
+  line-height: 19px;
+  color: var(--fig-muted);
+}
+
+.sas-maturity-ok .sas-maturity-title {
+  color: var(--fig-ok);
+}
+
+.sas-maturity-body {
+  margin: 0.35rem 0 0;
+  font-size: 12px;
+  line-height: 17px;
+  color: var(--fig-muted);
+}
+
+.sas-preview-adjust {
+  margin-top: 0.75rem;
+  align-self: flex-start;
+}
+
+.sas-create-block {
+  margin-top: 0.85rem;
+  display: flex;
+  flex-direction: column;
+  align-items: center;
+  gap: 0.45rem;
+}
+
+.sas-create-btn {
+  width: 100%;
+  min-height: 49px;
+  border: 1px solid var(--fig-accent);
+  border-radius: 9px;
+  background: var(--fig-accent-deep);
+  color: var(--fig-ink);
+  font-size: 15px;
+  font-weight: 600;
+  cursor: pointer;
+}
+
+.sas-create-btn:disabled {
+  opacity: 0.5;
+  cursor: not-allowed;
+}
+
+.sas-create-btn:focus-visible {
+  outline: 2px solid var(--fig-accent);
+  outline-offset: 2px;
+}
+
+.sas-create-hint {
+  margin: 0;
+  font-size: 12px;
+  font-weight: 500;
+  color: var(--fig-muted);
+  text-align: center;
+}
+
+.sas-preview-foot {
+  margin-top: auto;
+  padding-top: 1rem;
+  font-size: 12px;
+  line-height: 17px;
+  color: var(--fig-quiet);
+}
+
+.sas-preview-meta {
+  margin-top: 0.65rem;
+}
+
+.sas-secondary-tools {
+  margin-top: 0.35rem;
+}
+
+.sas-project-badge {
+  display: inline-flex;
+  align-items: center;
+  min-height: 29px;
+  padding: 0 13px;
+  border-radius: 14px;
+  background: var(--fig-panel-hi);
+  color: var(--fig-muted);
+  font-size: 11px;
+  font-weight: 600;
+  letter-spacing: 0.02em;
+  white-space: nowrap;
+}
+
+@media (max-width: 1280px) {
+  .sas-workspace {
+    grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.85fr);
+    gap: 20px;
+  }
+}
+
+@media (max-width: 1100px) {
+  .sas-workspace {
+    grid-template-columns: 1fr;
+    min-height: 0;
+  }
+  .sas-preview-inner {
+    min-height: 0;
+  }
+  .sas-composer {
+    position: sticky;
+    bottom: 0;
+    z-index: 2;
+  }
+}
+
+@media (max-width: 640px) {
+  .sas-stage-title {
+    font-size: 1.35rem;
+  }
+  .sas-preview-title {
+    font-size: 1.25rem;
+    line-height: 1.3;
+  }
+}
+
 .fig-workspace-3 {
   display: grid;
   grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.85fr);
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index f86cc0b4..45d317df 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -38,7 +38,9 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
   const personalSpace = !inProductSpace;
   const portfolioActive = pathname.startsWith("/portfolio") || pathname === "/";
   const accountActive = pathname.startsWith("/settings");
-  const breadcrumb = resolvePersonalBreadcrumb(pathname);
+  const breadcrumb = resolvePersonalBreadcrumb(pathname, searchParams);
+  const onSasVisual = pathname.startsWith("/dev/sas-visual/");
+  const onSasPreparation = Boolean(preparationId) || onSasVisual;
   const [openingPrep, setOpeningPrep] = useState(false);
   const [prepNotice, setPrepNotice] = useState("");

@@ -285,21 +287,27 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
                 ? <>SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;{breadcrumb}</>
                 : <>SFIA Studio</>}
             </p>
-            <Link
-              href={ACCOUNT_HREF}
-              className="studio-account-link shrink-0"
-              data-testid="nav-account-top"
-              aria-label="Compte — Intégrations"
-            >
-              <span
-                aria-hidden
-                className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full text-[12px] font-bold"
-                style={{ background: "rgba(101,111,225,0.25)", color: "var(--fig-accent-soft)" }}
-              >
-                P
+            {onSasPreparation ? (
+              <span className="sas-project-badge" data-testid="sas-header-project-status">
+                PROJET NON CRÉÉ
               </span>
-              <span className="hidden sm:inline text-[13px] text-[var(--muted)]">Pilote</span>
-            </Link>
+            ) : (
+              <Link
+                href={ACCOUNT_HREF}
+                className="studio-account-link shrink-0"
+                data-testid="nav-account-top"
+                aria-label="Compte — Intégrations"
+              >
+                <span
+                  aria-hidden
+                  className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full text-[12px] font-bold"
+                  style={{ background: "rgba(101,111,225,0.25)", color: "var(--fig-accent-soft)" }}
+                >
+                  P
+                </span>
+                <span className="hidden sm:inline text-[13px] text-[var(--muted)]">Pilote</span>
+              </Link>
+            )}
           </header>
         ) : (
           <nav
@@ -338,6 +346,7 @@ export function StudioShell({ children }: { children: React.ReactNode }) {
         <main
           className={`studio-shell-main ${personalSpace ? "studio-shell-main-mobile-pad" : ""}`}
           data-testid="studio-shell-main"
+          data-sas-layout={onSasPreparation ? "1" : undefined}
         >
           {children}
         </main>
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
index a30c4eb5..acfeff78 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
@@ -30,14 +30,14 @@ export const STUDIO_RAIL_VARIANTS: Record<StudioRailVariant, StudioRailTokens> =
   personnel: {
     variant: "personnel",
     widthPx: 246,
-    fill: "#0C101A",
+    fill: "#0D1220",
     paddingTop: 20,
     paddingRight: 19,
     paddingBottom: 0,
     paddingLeft: 19,
     gap: 10,
     railComponentId: "shell.rail.personnel",
-    sourceNodeId: "94:51",
+    sourceNodeId: "606:20",
   },
   projet: {
     variant: "projet",
@@ -199,8 +199,8 @@ export function resolveRailVariant(input: {
     return "personnel";
   }
   if (path.startsWith("/preparations/")) {
-    // 159:145 « préparation retrouvée » uses projet rail when resume context is explicit.
-    if (sp?.get("resume") === "1" || sp?.get("from") === "portfolio") return "projet";
+    // Sas Nora Figma 607:* — all five states use the personal minimal rail (606:20).
+    void sp;
     return "personnel";
   }
   if (path.startsWith("/settings")) {
@@ -233,9 +233,19 @@ export type ShellNavItem = {
  * Personal-space breadcrumb second segment — known routes only.
  * Never invent a label; never keep « Portefeuille » on another route.
  */
-export function resolvePersonalBreadcrumb(pathname: string): string | null {
+export function resolvePersonalBreadcrumb(
+  pathname: string,
+  searchParams?: URLSearchParams | { get(name: string): string | null } | null,
+): string | null {
   const path = pathname || "/";
   if (path.startsWith("/portfolio") || path === "/") return "Portefeuille";
+  if (path.startsWith("/preparations/")) {
+    const resumed =
+      searchParams?.get("resume") === "1" || searchParams?.get("from") === "portfolio";
+    return resumed ? "Préparation reprise" : "Nouvelle préparation";
+  }
+  if (path.startsWith("/dev/sas-visual/resume")) return "Préparation reprise";
+  if (path.startsWith("/dev/sas-visual/")) return "Nouvelle préparation";
   if (path.startsWith("/settings/integrations")) return "Intégrations";
   if (path.startsWith("/settings")) return "Paramètres";
   return null;
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index 11e86ba5..4d28b62d 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -59,10 +59,10 @@ html.studio-shell-lock body {
   align-items: center;
   justify-content: space-between;
   gap: 12px;
-  height: 66px;
-  padding: 0 1.35rem;
+  height: 72px;
+  padding: 0 1.6rem 0 2.4rem;
   border-bottom: 1px solid var(--line);
-  background: #0f1420;
+  background: #0b1019;
 }

 .studio-shell-topbar-mobile {
@@ -76,8 +76,21 @@ html.studio-shell-lock body {
   overflow-x: hidden;
   overflow-y: auto;
   overscroll-behavior: contain;
-  padding: 1.75rem 1.75rem 2rem;
-  background: radial-gradient(900px 420px at 12% -8%, #1a2433 0%, transparent 55%);
+  padding: 1.35rem 2.4rem 1.75rem;
+  background: #0b101b;
+}
+
+.studio-shell-main[data-sas-layout="1"] {
+  padding-top: 0.85rem;
+  padding-bottom: 0.85rem;
+  display: flex;
+  flex-direction: column;
+  overflow: hidden;
+}
+
+.studio-shell-main[data-sas-layout="1"] > .sas-page {
+  flex: 1 1 auto;
+  min-height: 0;
 }

 .studio-shell-main-mobile-pad {
@@ -179,10 +192,20 @@ html.studio-shell-lock body {
 }

 .studio-rail-nav-item.is-active {
-  background: #272e49;
+  background: #242c4b;
   border: 1px solid var(--line);
   color: var(--ink);
   font-weight: 600;
+  position: relative;
+}
+
+.studio-rail-nav-item.is-active::before {
+  content: "";
+  width: 8px;
+  height: 8px;
+  border-radius: 4px;
+  background: var(--accent);
+  flex-shrink: 0;
 }

 .studio-rail-section {
diff --git a/projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts b/projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts
new file mode 100644
index 00000000..03caa3c3
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/sas-presentation.test.ts
@@ -0,0 +1,73 @@
+import { describe, expect, it } from "vitest";
+import {
+  resolveSasPresentationStage,
+  sasPresentationCopy,
+} from "@/components/figma/sas-presentation";
+
+describe("Sas Nora presentation stage", () => {
+  it("maps assessment to Figma stages without text heuristics", () => {
+    expect(
+      resolveSasPresentationStage({
+        isResumed: false,
+        assessment: "EXPLORING",
+        messageCount: 0,
+      }),
+    ).toBe("first_intention");
+    expect(
+      resolveSasPresentationStage({
+        isResumed: false,
+        assessment: "CLARIFYING",
+        messageCount: 2,
+      }),
+    ).toBe("clarification");
+    expect(
+      resolveSasPresentationStage({
+        isResumed: false,
+        assessment: "PROPOSAL",
+        messageCount: 3,
+      }),
+    ).toBe("proposal");
+    expect(
+      resolveSasPresentationStage({
+        isResumed: false,
+        assessment: "BASE_SUFFICIENTE",
+        messageCount: 4,
+      }),
+    ).toBe("base_sufficient");
+  });
+
+  it("prefers resume stage when preparation is reopened", () => {
+    expect(
+      resolveSasPresentationStage({
+        isResumed: true,
+        assessment: "BASE_SUFFICIENTE",
+        messageCount: 5,
+      }),
+    ).toBe("resume");
+  });
+
+  it("falls back from empty vs non-empty thread when assessment absent", () => {
+    expect(
+      resolveSasPresentationStage({
+        isResumed: false,
+        assessment: null,
+        messageCount: 0,
+      }),
+    ).toBe("first_intention");
+    expect(
+      resolveSasPresentationStage({
+        isResumed: false,
+        assessment: undefined,
+        messageCount: 2,
+      }),
+    ).toBe("clarification");
+  });
+
+  it("exposes Figma copy for each stage", () => {
+    expect(sasPresentationCopy("first_intention").title).toBe("Parlons de votre projet");
+    expect(sasPresentationCopy("clarification").panelBadge).toBe("Clarification");
+    expect(sasPresentationCopy("proposal").kicker).toBe("PROPOSITION ÉVOLUTIVE");
+    expect(sasPresentationCopy("base_sufficient").panelBadgeTone).toBe("green");
+    expect(sasPresentationCopy("resume").headerBreadcrumb).toBe("Préparation reprise");
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
index 8efb0b8d..0ec4f828 100644
--- a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
@@ -12,7 +12,8 @@ import {

 describe("F1 studio rail variants (G2 railEvidence)", () => {
   it("keeps personnel vs projet fill discriminant", () => {
-    expect(STUDIO_RAIL_VARIANTS.personnel.fill.toLowerCase()).toBe("#0c101a");
+    // Sas Nora 606:20 personal rail fill; projet remains distinct for project space.
+    expect(STUDIO_RAIL_VARIANTS.personnel.fill.toLowerCase()).toBe("#0d1220");
     expect(STUDIO_RAIL_VARIANTS.projet.fill.toLowerCase()).toBe("#0c1020");
     expect(STUDIO_RAIL_VARIANTS.personnel.fill).not.toBe(STUDIO_RAIL_VARIANTS.projet.fill);
   });
@@ -33,7 +34,7 @@ describe("F1 studio rail variants (G2 railEvidence)", () => {
         pathname: "/preparations/abc",
         searchParams: new URLSearchParams("resume=1"),
       }),
-    ).toBe("projet");
+    ).toBe("personnel");
     expect(
       resolveRailVariant({ pathname: "/projects/p1", surface: "document" }),
     ).toBe("inspection");
@@ -76,6 +77,13 @@ describe("B1 shell navigation", () => {
     expect(resolvePersonalBreadcrumb("/portfolio")).toBe("Portefeuille");
     expect(resolvePersonalBreadcrumb("/settings/integrations")).toBe("Intégrations");
     expect(resolvePersonalBreadcrumb("/settings")).toBe("Paramètres");
+    expect(resolvePersonalBreadcrumb("/preparations/prep-1")).toBe("Nouvelle préparation");
+    expect(
+      resolvePersonalBreadcrumb(
+        "/preparations/prep-1",
+        new URLSearchParams("resume=1"),
+      ),
+    ).toBe("Préparation reprise");
     expect(resolvePersonalBreadcrumb("/unknown-personal")).toBeNull();
   });

```


---

## 10. Gates restants

- Morris validation visuelle finale
- Nouveau GO pour redeploy RECETTE (SHA/build distinct)
- Gate C OPEN · ML5 non autorisé · NO RELEASE / STABLE N/A
- Aucun push produit / PR / merge

---

## 11. Restitution

1. **Nouveau SHA:** `e52cec0d0bd72b1731f61f60f3db54e0e9a70d1c`
2. **Tree web:** `1f40b42cfc86b89b16f27fff7f08960588daeb0a`
3. **Build DEV:** turbopack `:3102` / BUILD_ID fichier `T03qorYZpGs0odz56Nb9f`
4. **Captures:** 5 états + responsive dans `.tmp-sfia-review/runtime-captures/`
5. **Tableau Figma/runtime:** Δ0 géométrie stable
6. **RECETTE:** inchangée `cd091385` / `E3J7wVO4MsKgl5aCTDhed`
7. **Handoff tip/blob:** *après publish*
8. **Recommandation:** revue visuelle ChatGPT/Morris sur captures + harness DEV ; GO RECETTE séparé si accepté

**Verdict:** `FIGMA TO RUNTIME ALIGNED — READY FOR CHATGPT VISUAL REVIEW`

# SFIA STUDIO — P6 NORA LIVE ACTIVITY UX CLOSURE
## Targeted Findings R-UX-01 / R-UX-02 / R-UX-03 — Review Pack FULL CUMULATIF

**A. Horodatage (Europe/Paris):** 2026-10-14 21:29:37 CEST
**B. GO Morris:** CUMULATIVE LOCAL CORRECTION AUTHORIZED — 2026-10-14 — CONSUMED
**C. Cycle / profil:** Cycle 8 Delivery (+4 UX/UI +9 QA) — CRITICAL — EVOL / TARGETED CORRECTION
**D. Repository:** mcleland147/sfia-workspace

---

## D. Git Truth initial (VERIFIE)

| Check | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-nora-ux-cumulative-closure` |
| Branch | `delivery/sfia-studio-p6-nora-ux-cumulative-closure` |
| HEAD | `eec68a418ae271452edc2188c9cf1ae06faa8232` (= origin/main / eec68a41) |
| Handoff entree | `36d234af` / blob `4a2b0772` |
| Dirty | candidat UX cumulatif local (helpers + surface + tests) |
| Preview page | PRESENTE a l'entree — RETIREE ce cycle |
| Middleware preview delta | PRESENT a l'entree — RETIRE ce cycle |

Status court a l'entree (rapporte puis corrige) : helpers untracked, ConversationSurface dirty, middleware dirty, app/dev present.

## E. Sources canoniques

Doctrine/roadmap/C1/product-simplification 03/04/07; handoff 36d234af; ConversationSurface; present*; readCoverage (parseGitLocalReadCoverageSignals / deriveReadCoverageFromToolEvent); liveActivityEvents; middleware baseline; tests UX.

## F. Convergence

Build Doctrine / Roadmap / C1 VALIDATED. PR #582 INTEGRATED. UX candidate LOCAL. Critical Review → TARGETED CORRECTIONS. P6 GLOBAL NOT PASSED. Runtime v3 NON ADOPTED.

## G. Contrat capacite P6

Pilote comprend le travail documentaire reel sans traces techniques trompeuses; Stop/activite/contraste conserves; provenance honnete; preview temporaire hors candidat.

## H. Findings d'entree

- R-UX-01: pathOrRef exact → groupes multiples pour #Lx-y
- R-UX-02: preview /dev + exception middleware
- R-UX-03: tool_completed → fausse lecture complete; « lecture seule confirmee » ambigu

## I. Manifest cumulatif final

| Path | Action finale |
|---|---|
| ConversationSurface.tsx | MODIFY (KEEP UX + R-UX-03 tech labels) |
| ConversationSurface.module.css | MODIFY (KEEP — cycle UX anterieur) |
| presentLiveActivityTimeline.ts | ADD/ADAPT (R-UX-03) |
| presentConversationSources.ts | ADD/ADAPT (R-UX-01) |
| conversationSurface.liveActivityStop.d0.test.tsx | MODIFY |
| p6.nora.uxClosure.presentation.d0.test.ts | ADD |
| p6.nora.uxClosure.sourcesSurface.d0.test.tsx | ADD |
| middleware.ts | **REVERT TO BASELINE** (aucun delta preview) |
| app/dev/nora-ux-closure/page.tsx | **REMOVED FROM CANDIDATE** |
| Runner / NDJSON / DBs / budgets | NONE |

## J–K. R-UX-01 — Identite documentaire

`documentaryGroupKey` reutilise `parseGitLocalReadCoverageSignals` → `documentPath`.
Cle `doc:<path>` sans fragment `#Lx-y`. Search → `search:…` (jamais merge avec lecture).
Versions distinctes (`@rev`) non fusionnees. detailEvents conserve pathOrRef original.

## L–M. R-UX-03 — Honnetete libelles

tool_completed documentaire → « Nora a consulte un passage de … » (jamais « termine la lecture » / FULL).
tool_failed → « Impossible de consulter … ».
Non-documentaire → pas de lecture documentaire.
Detail technique: Consultation reussie/refusee/echouee/en cours + « Operation en lecture seule » (pas preuve de succes).

## N–O. FULL/PARTIAL + FAILED/DENIED

FULL seulement si deriveReadCoverage coverage===full unique sans incident.
documentHasMore / multi-span → Plusieurs passages / Extraits.
Succes + deny/fail → qualification partielle « avec incident(s) »; incidents dans detail.

## P–R. R-UX-02 — Preview exit

Page preview supprimee. middleware.ts **identique** a eec68a41 (diff vide: 0 chars).
Captures historiques conservees sous `.tmp-sfia-review/p6-nora-ux-closure/captures/` (produites AVANT retrait).
Preview non revendique executable apres retrait. Build sans route /dev/nora-ux-closure (VERIFIE).

## S. UX conservee (KEEP)

Pas de event.kind / numerotation; gris --pm6-muted-strong; pulse + reduced-motion; StopGlyph 30x30 hover clair; groupement visuel sources + detail technique.

## T. Contrat Figma

# Contrat Figma extrait — Nora UX closure (2026-10-14)

FileKey: m4g8j0gNbEzfIuH6S9AZJF · session MCP 5f3b6f2e-62b1-40e2-9150-492acfa4e4d3

## Frames / statut

| Node | Nom | Statut |
|---|---|---|
| 46:2 | Workspace desktop 1440×1024 | REFERENCE |
| 46:126 | Composer | REFERENCE |
| 46:134 | Send 30×30 | REFERENCE (↑ blanc sur #1f1a16) — **pas une variante Stop** |
| 119:4 | Nora Motion ACTIVITY | EXPLORATORY / HARVEST |
| 125:2 | START | EXPLORATORY |
| 125:183 | STREAMING | EXPLORATORY |
| 125:365 | COMPLETE | EXPLORATORY |
| 125:535 | STOPPED | **EXISTE** — EXPLORATORY (metadata confirmée) |
| 125:712 | Motion Contract DP06 v1 1440×470 | CONTRACT REFERENCE |

## Tokens / dimensions (harvest)

- Canvas / surfaces: #fffdf9, #fcf8f3, borders #e2d8ce / #eae2d9
- Ink: #1f1a16 · muted labels: #6d645c / #978c81 / #5f564e
- Accent activité (Figma ACTIVITY): orange/rouge point ● → ✓
- Composer input h≈96 · Send 30×30 radius 7
- Timing DP06: entrée bloc 160–200ms ease-out; reduced-motion opacity ~120ms; no fake progress
- Reduced motion: no pulse/translate; keep status text

## Décisions Morris appliquées (ambiguïté Stop)

- Figma 46:134 = Send seulement → **pas de taille Stop adoptée comme pixel-perfect Figma**
- Intention: bouton clair, glyphe sombre SVG 12×12 dans contrôle 30×30, hover gris chaud (#f3ede5 / forest-tint), jamais noir-sur-noir
- Alignement compositeur conservé

## Écarts runtime pré-correction (observés Human QA)

- Codes kind + numérotation dans détail
- Animation one-shot seulement
- ■ unicode + hover sombre
- Sources = logs bruts toolEvents


Elements visuels inchanges: captures historiques 01-11.
SOURCE PRESENTATION — REACT DET VERIFIED / UPDATED BROWSER SCREENSHOT NOT AVAILABLE.

## U. Tests (VERIFIE ce run)

```
vitest run presentation + sourcesSurface + liveActivityStop
Test Files  3 passed
Tests      16 passed
```

## V. Typecheck / lint / build (VERIFIE)

- tsc --noEmit: EXIT 0 (apres purge .next stale preview types)
- next lint: clean
- next build: SUCCESS — 13 routes, **aucune** /dev/nora-ux-closure

## W. PRR

Non requis au-dela des scripts package (pas de chemins PRR additionnels declenches). NON EXECUTE script PRR dedie.

## X. Fake / Real

Fake: fixtures toolEvents / live activity. Parite formats Product.
REAL: NON AUTORISE / NON EXECUTE.

## Y. Securite

Exception middleware retiree. Route QA absente. :3020 non mute. Pas de secrets dans pack.

## Z–AA. Captures et limites

Historiques: contraste `{
  "color": "rgb(111, 102, 94)",
  "canvas": "#fffdf9",
  "ratio": 5.53
}`; hover `{
  "bg": "rgb(243, 237, 229)",
  "color": "rgb(31, 26, 22)",
  "border": "rgb(111, 102, 94)"
}`; motion `{
  "samples": [
    "0.963393",
    "0.766485",
    "0.499161",
    "0.353746",
    "0.400615",
    "0.644357",
    "0.896135",
    "0.999997"
  ]
}`; reduced `none`.
Nouveaux textes/groupements: React DET only — pas de nouveau screenshot source.

## AB. Reserves

1. UPDATED SOURCE BROWSER RENDER NOT INDEPENDENTLY VERIFIED.
2. Panel legacy ProjectAssistantPanel hors candidat Product workspace.
3. Captures preview historiques seulement pour elements UX inchanges.

## AC. Dette / exit

Preview dette = 0. Prochaine: ChatGPT Critical Re-Review → Morris Git Integration GO.

## AD. Trajectoire P6

Findings closed → Critical Re-Review → (GO) Git Integration → P6 consolidation.

## AE. Git Truth final

HEAD `eec68a418ae271452edc2188c9cf1ae06faa8232` · branch `delivery/sfia-studio-p6-nora-ux-cumulative-closure` · middleware baseline · preview absent · dirty local UX remaining:

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/conversationSurface.liveActivityStop.d0.test.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.nora.uxClosure.presentation.d0.test.ts
?? projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.nora.uxClosure.sourcesSurface.d0.test.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/presentConversationSources.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/presentLiveActivityTimeline.ts

```

Commit/push projet: NON EXECUTE.

## AF. Verdict

P6 NORA LIVE ACTIVITY UX CLOSURE — TARGETED FINDINGS CLOSED / CUMULATIVE LOCAL DELIVERY PASS / DETERMINISTIC QA PASS / READY FOR CHATGPT CRITICAL RE-REVIEW.

BROWSER VISUAL PROOF HISTORICALLY QUALIFIED FOR UNCHANGED ELEMENTS.
UPDATED SOURCE BROWSER RENDER NOT INDEPENDENTLY VERIFIED.

## AG. Instruction ChatGPT

Lire handoff distant. Verifier R-UX-01/02/03, #Lx-y, FULL/PARTIAL, tool_completed, middleware baseline, absence preview, UX KEEP, 16 tests, pack FULL. Rendre CHATGPT P6 NORA UX CUMULATIVE CRITICAL RE-REVIEW. Si PASS: recommander un unique MORRIS GIT INTEGRATION GO. Pas d'integration auto.

---

## Git Review Index

1. MODIFIED — ConversationSurface.tsx / .module.css / liveActivityStop test
2. ADDED — presentLiveActivityTimeline.ts / presentConversationSources.ts / uxClosure tests
3. REVERTED — middleware.ts → baseline eec68a41
4. REMOVED — app/dev/nora-ux-closure/page.tsx
5. EVIDENCE — `.tmp-sfia-review/p6-nora-ux-closure/` (captures historiques)

---

## MODIFIED DIFFS (complet)

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/conversationSurface.liveActivityStop.d0.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/conversationSurface.liveActivityStop.d0.test.tsx
index cfd15ca4..0b522de9 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/conversationSurface.liveActivityStop.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/conversationSurface.liveActivityStop.d0.test.tsx
@@ -190,13 +190,21 @@ describe("ConversationSurface live activity + Stop (REAL React DET)", () => {

     fireEvent.click(within(details).getByText("Détail de l’activité"));

-    const timeline = details.querySelector("ol");
+    const timeline = details.querySelector("ul");
     expect(timeline).toBeTruthy();
-    expect(timeline!.textContent).toMatch(/mission_started/);
+    // UX-01 / UX-02 — no technical kind codes, no numbering column
+    expect(timeline!.textContent).not.toMatch(/mission_started/);
+    expect(timeline!.textContent).not.toMatch(/tool_started/);
+    expect(timeline!.textContent).not.toMatch(/activity_update/);
     expect(timeline!.textContent).toMatch(/Mission démarrée/);
-    expect(timeline!.textContent).toMatch(/tool_started/);
-    expect(timeline!.textContent).toMatch(/Lecture du dépôt/);
-    expect(timeline!.textContent).toMatch(/activity_update/);
+    // SAMPLE_EVENTS tool_started has toolName read_file (non git_local) + sourcePath
+    expect(timeline!.textContent).toMatch(/Nora consulte « plan\.md »|Lecture du dépôt/);
+    expect(timeline!.textContent).toMatch(/Analyse en cours/);
+    expect(timeline!.textContent).not.toMatch(/terminé la lecture|intégralement/i);
+    expect(
+      screen.getByTestId("project-assistant-nora-activity-pulse"),
+    ).toBeInTheDocument();
+    expect(screen.getByTestId("project-assistant-stop").querySelector("svg")).toBeTruthy();
   });

   it("STOPPED banner — Réponse interrompue + retry; Send returns when idle", () => {
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
index 60c9b9b9..44f0273d 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.module.css
@@ -183,6 +183,9 @@
 }

 .noraActivityBadge {
+  display: inline-flex;
+  align-items: center;
+  gap: 6px;
   font-size: var(--pm6-text-caption);
   font-weight: 500;
   letter-spacing: 0.4px;
@@ -190,41 +193,65 @@
   color: var(--pm6-accent);
 }

+/* Continuous activity cue while mission is live (DP06 ACTIVITY). */
+.noraActivityPulse {
+  display: inline-block;
+  width: 6px;
+  height: 6px;
+  border-radius: 50%;
+  background: var(--pm6-accent);
+  flex-shrink: 0;
+  animation: noraActivityPulse 1.2s ease-in-out infinite;
+}
+
+@keyframes noraActivityPulse {
+  0%,
+  100% {
+    opacity: 0.35;
+    transform: scale(0.92);
+  }
+  50% {
+    opacity: 1;
+    transform: scale(1);
+  }
+}
+
 .noraActivityDetails {
   margin-top: 0.5rem;
   font-size: 0.8125rem;
-  color: var(--sfia-text-muted, #5c6570);
+  color: var(--pm6-muted-strong);
 }

 .noraActivityDetails summary {
   cursor: pointer;
   list-style: disclosure-closed;
+  color: var(--pm6-muted-strong);
 }

 .noraActivityTimeline {
+  list-style: none;
   margin: 0.4rem 0 0;
-  padding-left: 1.1rem;
+  padding: 0;
   max-height: 10rem;
   overflow-y: auto;
 }

 .noraActivityTimeline li {
-  margin: 0.2rem 0;
+  margin: 0.28rem 0;
+  padding-left: 0;
 }

-.noraActivityTimelineKind {
-  display: inline-block;
-  min-width: 7.5rem;
-  margin-right: 0.4rem;
-  opacity: 0.7;
-  font-variant: small-caps;
+.noraActivityTimelineLabel {
+  display: block;
+  color: var(--pm6-muted-strong);
+  line-height: 1.45;
 }

 .noraActivityText {
   margin: 0;
   font-size: var(--pm6-text-subtitle);
   line-height: 1.6;
-  color: var(--pm6-ink-soft);
+  color: var(--pm6-muted-strong);
 }

 @keyframes noraActivityIn {
@@ -243,6 +270,12 @@
     animation: noraActivityInReduced 120ms ease-out;
   }

+  .noraActivityPulse {
+    animation: none;
+    opacity: 1;
+    transform: none;
+  }
+
   @keyframes noraActivityInReduced {
     from {
       opacity: 0;
@@ -949,6 +982,13 @@
   display: block;
 }

+.sourcesScope {
+  margin: 0 0 var(--pm6-space-2);
+  font-size: 0.78rem;
+  line-height: 1.45;
+  color: var(--pm6-muted-strong);
+}
+
 .sourceList {
   list-style: none;
   margin: 0;
@@ -979,7 +1019,7 @@
   font-size: 0.72rem;
   font-weight: 600;
   letter-spacing: 0.04em;
-  color: var(--pm6-muted);
+  color: var(--pm6-muted-strong);
 }

 .sourceDetail {
@@ -988,6 +1028,36 @@
   color: var(--pm6-muted-strong);
 }

+.sourceTechDetails {
+  flex: 1 1 100%;
+  margin-top: 0.15rem;
+  font-size: 0.78rem;
+  color: var(--pm6-muted);
+}
+
+.sourceTechDetails summary {
+  cursor: pointer;
+  color: var(--pm6-muted-strong);
+}
+
+.sourceTechList {
+  list-style: none;
+  margin: 0.35rem 0 0;
+  padding: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 0.35rem;
+}
+
+.sourceTechList li {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 0.35rem 0.5rem;
+  align-items: baseline;
+  border-top: 1px dashed var(--pm6-border-soft);
+  padding-top: 0.35rem;
+}
+
 /* ---------- error ---------- */

 .errorBox {
@@ -1148,22 +1218,32 @@
 .stopButton {
   display: inline-grid;
   place-items: center;
-  width: auto;
+  width: 30px;
   min-width: 30px;
   height: 30px;
   border-radius: 7px;
-  border: 1px solid var(--pm6-ink);
+  border: 1px solid var(--pm6-border);
   background: var(--pm6-canvas);
   color: var(--pm6-ink);
-  padding: 0 10px;
+  padding: 0;
   font-size: var(--pm6-text-caption);
   font-weight: 600;
   cursor: pointer;
   min-height: 30px;
+  transition: background 120ms ease, border-color 120ms ease, color 120ms ease;
+}
+
+.stopGlyph {
+  display: block;
+  width: 12px;
+  height: 12px;
 }

+/* Morris: light button, dark glyph; warmer gray hover — never dark-on-dark. */
 .stopButton:hover {
-  background: var(--pm6-forest-hover);
+  background: var(--pm6-forest-tint);
+  border-color: var(--pm6-muted-strong);
+  color: var(--pm6-ink);
 }

 .stopButton:focus-visible,
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 2da31f3a..de40cb67 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -22,7 +22,14 @@ import {
 } from "@/features/project-assistant/presentationLabels";
 import type { AssistantToolEventDto } from "@/features/project-assistant/types";
 import type { F2DecisionKind } from "@/features/project-assistant/f2/types";
-import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
+import {
+  useEffect,
+  useId,
+  useLayoutEffect,
+  useRef,
+  useState,
+  type ReactElement,
+} from "react";
 import type { ProductConversationController } from "../hooks/useProductConversation";
 import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
 import type { WorkRecommendationProjectionCard } from "@/lib/oa/cycle/application/deriveWorkRecommendations";
@@ -37,6 +44,14 @@ import {
 } from "./GovernedDecisionCard";
 import { FramingContinuityCard } from "./FramingContinuityCard";
 import { GovernedConfirmationCard } from "./GovernedConfirmationCard";
+import {
+  CONVERSATION_SOURCES_SCOPE_DISCLAIMER,
+  presentConversationSources,
+} from "./presentConversationSources";
+import {
+  presentActivityEventLabel,
+  presentLiveActivityTimeline,
+} from "./presentLiveActivityTimeline";
 import styles from "./ConversationSurface.module.css";

 /**
@@ -66,18 +81,33 @@ const DECISION_ACTIONS: readonly {
 function sourceStatusLabel(status: AssistantToolEventDto["status"]): string {
   switch (status) {
     case "succeeded":
-      return "Consulté";
+      return "Consultation réussie";
     case "denied":
-      return "Refusé";
+      return "Consultation refusée";
     case "failed":
-      return "Échec";
+      return "Consultation échouée";
     case "started":
-      return "En cours";
+      return "Demande en cours";
     default:
-      return "Demandé";
+      return "Demande en cours";
   }
 }

+function StopGlyph(): ReactElement {
+  return (
+    <svg
+      className={styles.stopGlyph}
+      width="12"
+      height="12"
+      viewBox="0 0 12 12"
+      aria-hidden="true"
+      focusable="false"
+    >
+      <rect x="2" y="2" width="8" height="8" rx="1" fill="currentColor" />
+    </svg>
+  );
+}
+
 /** P6-HQA-UI05 — honest compact status (Figma 46:98 / 46:107). */
 function f2RecommendationStatusLabel(input: {
   readonly proposalStatus?: string | null;
@@ -558,14 +588,23 @@ export function ConversationSurface({
                 data-testid="project-assistant-nora-activity-heading"
               >
                 Nora
-                <span className={styles.noraActivityBadge}>En cours</span>
+                <span className={styles.noraActivityBadge}>
+                  <span
+                    className={styles.noraActivityPulse}
+                    data-testid="project-assistant-nora-activity-pulse"
+                    aria-hidden="true"
+                  />
+                  En cours
+                </span>
               </p>
               <p
                 className={styles.noraActivityText}
                 data-testid="project-assistant-nora-activity-label"
               >
                 {liveActivityEvents.length > 0
-                  ? liveActivityEvents[liveActivityEvents.length - 1]!.label
+                  ? presentActivityEventLabel(
+                      liveActivityEvents[liveActivityEvents.length - 1]!,
+                    )
                   : noraActivity.label}
               </p>
               {liveActivityEvents.length > 0 ? (
@@ -574,16 +613,17 @@ export function ConversationSurface({
                   data-testid="project-assistant-nora-activity-details"
                 >
                   <summary>Détail de l’activité</summary>
-                  <ol className={styles.noraActivityTimeline}>
-                    {liveActivityEvents.map((event) => (
-                      <li key={`${event.seq}-${event.kind}-${event.at}`}>
-                        <span className={styles.noraActivityTimelineKind}>
-                          {event.kind}
-                        </span>
-                        <span>{event.label}</span>
-                      </li>
-                    ))}
-                  </ol>
+                  <ul className={styles.noraActivityTimeline}>
+                    {presentLiveActivityTimeline(liveActivityEvents).map(
+                      (line) => (
+                        <li key={line.key}>
+                          <span className={styles.noraActivityTimelineLabel}>
+                            {line.label}
+                          </span>
+                        </li>
+                      ),
+                    )}
+                  </ul>
                 </details>
               ) : null}
             </div>
@@ -2303,26 +2343,70 @@ export function ConversationSurface({
             aria-label="Sources consultées"
             data-testid="project-assistant-sources"
           >
+            {toolEvents.length > 0 ? (
+              <p
+                className={styles.sourcesScope}
+                data-testid="project-assistant-sources-scope"
+              >
+                {CONVERSATION_SOURCES_SCOPE_DISCLAIMER}
+              </p>
+            ) : null}
             <ul className={styles.sourceList}>
-              {toolEvents.map((event, index) => (
+              {presentConversationSources(toolEvents).map((group) => (
                 <li
-                  key={`${event.toolName}-${index}-${event.pathOrRef ?? "na"}`}
+                  key={group.key}
                   className={styles.sourceItem}
                   data-testid="project-assistant-source-item"
-                  data-status={event.status}
+                  data-status={
+                    group.detailEvents.some((e) => e.status === "denied")
+                      ? "denied"
+                      : group.detailEvents.some((e) => e.status === "failed")
+                        ? "failed"
+                        : group.detailEvents.some((e) => e.status === "succeeded")
+                          ? "succeeded"
+                          : group.detailEvents[0]?.status
+                  }
+                  data-status-tone={group.statusTone}
                 >
-                  <span className={styles.sourceName}>{event.toolName}</span>
+                  <span className={styles.sourceName}>{group.title}</span>
                   <span className={styles.sourceStatus}>
-                    {sourceStatusLabel(event.status)}
+                    {group.qualification}
                   </span>
-                  {event.pathOrRef ? (
-                    <span className={styles.code}>{event.pathOrRef}</span>
-                  ) : null}
                   <span className={styles.sourceDetail}>
-                    {event.summary ?? "Aucun résumé supplémentaire."}
-                    {event.errorCode ? ` (${event.errorCode})` : ""} · lecture
-                    seule confirmée
+                    {group.eventCount > 1
+                      ? `${group.eventCount} consultations regroupées.`
+                      : group.qualification}
                   </span>
+                  <details className={styles.sourceTechDetails}>
+                    <summary>Détail technique</summary>
+                    <ul className={styles.sourceTechList}>
+                      {group.detailEvents.map((event, index) => (
+                        <li
+                          key={`${event.toolName}-${index}-${event.pathOrRef ?? "na"}`}
+                          data-testid="project-assistant-source-tech-item"
+                          data-status={event.status}
+                        >
+                          <span className={styles.sourceName}>
+                            {event.toolName}
+                          </span>
+                          <span className={styles.sourceStatus}>
+                            {sourceStatusLabel(event.status)}
+                          </span>
+                          {event.pathOrRef ? (
+                            <span className={styles.code}>{event.pathOrRef}</span>
+                          ) : null}
+                          <span className={styles.sourceDetail}>
+                            {event.summary ?? "Aucun résumé supplémentaire."}
+                            {event.errorCode ? ` (${event.errorCode})` : ""} ·{" "}
+                            {sourceStatusLabel(event.status)}
+                            {event.readOnly
+                              ? " · Opération en lecture seule"
+                              : ""}
+                          </span>
+                        </li>
+                      ))}
+                    </ul>
+                  </details>
                 </li>
               ))}
             </ul>
@@ -2392,7 +2476,7 @@ export function ConversationSurface({
               >
                 <span className={styles.sendLabelFull}>Arrêter</span>
                 <span className={styles.sendLabelCompact} aria-hidden="true">
-                  ■
+                  <StopGlyph />
                 </span>
               </button>
             ) : (

```

---

## NEW FILES (contenu integral)

```text
===== BEGIN FILE projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/presentLiveActivityTimeline.ts =====
/**
 * Presentation-only live activity timeline for Pilote.
 * Does not alter NDJSON / NoraLiveActivityEvent protocol.
 */

import type { NoraLiveActivityEvent } from "@/features/project-assistant/liveActivityEvents";

export type PresentedActivityLine = {
  readonly key: string;
  readonly label: string;
};

/** Known product-simplification document short names (display only). */
const DOC_SHORT: ReadonlyArray<{ readonly re: RegExp; readonly short: string }> =
  [
    {
      re: /01-chat-first-product-simplification-cadrage/i,
      short: "P1",
    },
    {
      re: /02-chat-first-product-simplification-functional-operating-model/i,
      short: "P2",
    },
    {
      re: /03-chat-first-product-simplification-workspace-interaction-architecture/i,
      short: "P3",
    },
    {
      re: /04-chat-first-product-simplification-semantic-projection-cognitive-architecture/i,
      short: "P4",
    },
  ];

function documentShortName(path: string | undefined): string | undefined {
  if (!path) return undefined;
  for (const row of DOC_SHORT) {
    if (row.re.test(path)) return row.short;
  }
  return undefined;
}

function basename(path: string | undefined): string | undefined {
  if (!path) return undefined;
  const stripped = path.replace(/#L\d+-\d+$/i, "");
  const parts = stripped.split("/").filter(Boolean);
  return parts.length > 0 ? parts[parts.length - 1] : stripped;
}

function isDocumentaryReadTool(toolName: string | undefined): boolean {
  if (!toolName) return false;
  return (
    toolName === "git_local_read_file" || /read_file_at_ref/i.test(toolName)
  );
}

/**
 * Prefer a precise Pilote label when source is identifiable; never invent paths.
 * tool_completed ≠ full-document read.
 */
export function presentActivityEventLabel(event: NoraLiveActivityEvent): string {
  const short = documentShortName(event.sourcePath);
  const file = basename(event.sourcePath);
  const docRead = isDocumentaryReadTool(event.toolName);

  if (event.kind === "tool_started") {
    if (docRead || short || file) {
      if (short) return `Nora consulte ${short}.`;
      if (file) return `Nora consulte « ${file} ».`;
    }
  }
  if (event.kind === "tool_completed") {
    if (docRead) {
      if (short) return `Nora a consulté un passage de ${short}.`;
      if (file) return `Nora a consulté un passage de « ${file} ».`;
      return "Nora a terminé une consultation documentaire.";
    }
    // Non-documentary tool completion must not claim a document read.
    const fallback = event.label.trim();
    if (fallback.length > 0 && !/lecture|lu intégralement|document lu/i.test(fallback)) {
      return fallback;
    }
    return "Nora a terminé une consultation.";
  }
  if (event.kind === "tool_failed") {
    if (short) return `Impossible de consulter ${short}.`;
    if (file) return `Impossible de consulter « ${file} ».`;
    return "Impossible de consulter une source.";
  }

  const label = event.label.trim();
  return label.length > 0 ? label : "Nora travaille…";
}

/**
 * Chronological Pilote lines: labels only, no kind / numbering noise.
 * Collapses consecutive identical visible messages.
 */
export function presentLiveActivityTimeline(
  events: readonly NoraLiveActivityEvent[],
): PresentedActivityLine[] {
  const out: PresentedActivityLine[] = [];
  for (const event of events) {
    const label = presentActivityEventLabel(event);
    const prev = out[out.length - 1];
    if (prev && prev.label === label) continue;
    out.push({
      key: `${event.seq}-${event.kind}-${event.at}`,
      label,
    });
  }
  return out;
}

===== END FILE projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/presentLiveActivityTimeline.ts =====

===== BEGIN FILE projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/presentConversationSources.ts =====
/**
 * Presentation-only grouping of cumulative toolEvents for Pilote.
 * Never invents FULL coverage; never mutates Product telemetry.
 * Document identity reuses parseGitLocalReadCoverageSignals (no parallel parser).
 */

import type { AssistantToolEventDto } from "@/features/project-assistant/types";
import {
  deriveReadCoverageFromToolEvent,
  parseGitLocalReadCoverageSignals,
} from "@/lib/nora-cognitive-runtime/readCoverage";

export type PresentedSourceGroup = {
  readonly key: string;
  /** Human-readable source title. */
  readonly title: string;
  /** Honest qualification — never "FULL" without proven full read. */
  readonly qualification: string;
  readonly statusTone:
    | "ok"
    | "partial"
    | "denied"
    | "failed"
    | "pending"
    | "other";
  readonly eventCount: number;
  readonly detailEvents: readonly AssistantToolEventDto[];
};

const DOC_TITLES: ReadonlyArray<{
  readonly re: RegExp;
  readonly title: string;
}> = [
  {
    re: /01-chat-first-product-simplification-cadrage/i,
    title: "P1 — Cadrage",
  },
  {
    re: /02-chat-first-product-simplification-functional-operating-model/i,
    title: "P2 — Fonctionnement",
  },
  {
    re: /03-chat-first-product-simplification-workspace-interaction-architecture/i,
    title: "P3 — Workspace Interaction Architecture",
  },
  {
    re: /04-chat-first-product-simplification-semantic-projection-cognitive-architecture/i,
    title: "P4 — Semantic & Cognitive Architecture",
  },
];

function basename(path: string): string {
  const parts = path.split("/").filter(Boolean);
  const last = parts.length > 0 ? parts[parts.length - 1]! : path;
  return last.replace(/#L\d+-\d+$/i, "");
}

function isDocumentReadTool(toolName: string): boolean {
  return (
    toolName === "git_local_read_file" || /read_file_at_ref/i.test(toolName)
  );
}

function isSearchTool(toolName: string): boolean {
  return /search_content|search_files/i.test(toolName);
}

/**
 * Stable documentary identity for grouping.
 * Prefer readCoverage parser documentPath; strip #Lx-y fragments.
 * Do not merge search with documentary reads. Do not invent versions.
 */
export function documentaryGroupKey(event: AssistantToolEventDto): string {
  const tool = event.toolName.trim();

  if (isSearchTool(tool)) {
    const path = (event.pathOrRef ?? "").trim();
    return path.length > 0 ? `search:${path}` : `search:${tool}`;
  }

  if (isDocumentReadTool(tool)) {
    const parsed = parseGitLocalReadCoverageSignals({
      summary: event.summary,
      pathOrRef: event.pathOrRef,
    });
    const doc =
      (parsed?.documentPath ?? "").trim() ||
      (event.pathOrRef ?? "").trim().replace(/#L\d+-\d+$/i, "");
    if (doc.length > 0) {
      return `doc:${doc}`;
    }
    return `doc-tool:${tool}`;
  }

  const path = (event.pathOrRef ?? "").trim();
  if (path.length > 0) {
    // Non-read tools with a path: keep exact path (no silent documentary merge).
    return `tool-path:${tool}:${path}`;
  }
  return `tool:${tool}`;
}

function presentTitle(event: AssistantToolEventDto, groupKey: string): string {
  if (groupKey.startsWith("doc:")) {
    const docPath = groupKey.slice("doc:".length);
    for (const row of DOC_TITLES) {
      if (row.re.test(docPath)) return row.title;
    }
    return basename(docPath);
  }
  const path = (event.pathOrRef ?? "").trim();
  if (path.length > 0) {
    for (const row of DOC_TITLES) {
      if (row.re.test(path)) return row.title;
    }
    return basename(path);
  }
  return event.toolName;
}

function qualifyGroup(events: readonly AssistantToolEventDto[]): {
  qualification: string;
  statusTone: PresentedSourceGroup["statusTone"];
} {
  const denied = events.filter((e) => e.status === "denied");
  const failed = events.filter((e) => e.status === "failed");
  const pending = events.filter(
    (e) => e.status === "started" || e.status === "requested",
  );
  const succeeded = events.filter((e) => e.status === "succeeded");

  if (succeeded.length === 0) {
    if (denied.length > 0 && failed.length === 0 && pending.length === 0) {
      return { qualification: "Lecture refusée", statusTone: "denied" };
    }
    if (failed.length > 0 && denied.length === 0 && pending.length === 0) {
      return { qualification: "Échec de consultation", statusTone: "failed" };
    }
    if (pending.length === events.length) {
      return { qualification: "Consultation en cours", statusTone: "pending" };
    }
    if (denied.length > 0 || failed.length > 0) {
      return {
        qualification: "Consultation non aboutie — incident(s)",
        statusTone: denied.length > 0 ? "denied" : "failed",
      };
    }
    return { qualification: "Consultation demandée", statusTone: "pending" };
  }

  // Succeeded present — never let deny/fail alone dominate the summary.
  const incidentSuffix =
    denied.length > 0 || failed.length > 0
      ? " — avec incident(s)"
      : "";

  const readEvents = events.filter((e) => isDocumentReadTool(e.toolName));
  if (readEvents.length === 0) {
    if (events.every((e) => isSearchTool(e.toolName))) {
      return {
        qualification: `Recherche de fichiers (pas une lecture documentaire)${incidentSuffix}`,
        statusTone: incidentSuffix ? "partial" : "other",
      };
    }
    return {
      qualification: `Consultation technique${incidentSuffix}`,
      statusTone: incidentSuffix ? "partial" : "other",
    };
  }

  let anyFull = false;
  let anyPartialSignal = false;
  let anySucceededRead = false;

  for (const event of readEvents) {
    if (event.status !== "succeeded") continue;
    anySucceededRead = true;
    const fact = deriveReadCoverageFromToolEvent({
      toolName: event.toolName,
      status: event.status,
      pathOrRef: event.pathOrRef,
      summary: event.summary,
    });
    if (fact?.coverage === "full") {
      anyFull = true;
    } else {
      anyPartialSignal = true;
    }
  }

  if (!anySucceededRead) {
    return {
      qualification: `Consultation demandée${incidentSuffix}`,
      statusTone: "pending",
    };
  }

  // documentHasMore / partial / unparseable / multi-span → never bare FULL.
  if (
    anyFull &&
    !anyPartialSignal &&
    readEvents.filter((e) => e.status === "succeeded").length === 1 &&
    !incidentSuffix
  ) {
    return {
      qualification: "Document lu en entier (preuve de couverture)",
      statusTone: "ok",
    };
  }
  if (
    readEvents.filter((e) => e.status === "succeeded").length > 1 ||
    anyPartialSignal
  ) {
    return {
      qualification: `Plusieurs passages consultés${incidentSuffix}`,
      statusTone: "partial",
    };
  }
  return {
    qualification: `Extraits consultés${incidentSuffix}`,
    statusTone: "partial",
  };
}

/**
 * Group cumulative conversation toolEvents for Pilote synthesis.
 * Detail rows preserve raw telemetry order (including original #Lx-y paths).
 */
export function presentConversationSources(
  events: readonly AssistantToolEventDto[],
): PresentedSourceGroup[] {
  const order: string[] = [];
  const buckets = new Map<string, AssistantToolEventDto[]>();

  for (const event of events) {
    const key = documentaryGroupKey(event);
    if (!buckets.has(key)) {
      order.push(key);
      buckets.set(key, []);
    }
    buckets.get(key)!.push(event);
  }

  return order.map((key) => {
    const detailEvents = buckets.get(key)!;
    const title = presentTitle(detailEvents[0]!, key);
    const { qualification, statusTone } = qualifyGroup(detailEvents);
    return {
      key,
      title,
      qualification,
      statusTone,
      eventCount: detailEvents.length,
      detailEvents,
    };
  });
}

export const CONVERSATION_SOURCES_SCOPE_DISCLAIMER =
  "Sources consultées dans cette conversation (cumul des tours) — pas uniquement le dernier message.";

===== END FILE projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/presentConversationSources.ts =====

===== BEGIN FILE projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.nora.uxClosure.presentation.d0.test.ts =====
/** @vitest-environment node */
/**
 * P6 Nora UX cumulative closure — presentation helpers (DET, ZERO OpenAI).
 * Includes R-UX-01 / R-UX-03 targeted findings.
 */
import { describe, expect, it } from "vitest";
import type { AssistantToolEventDto } from "@/features/project-assistant/types";
import type { NoraLiveActivityEvent } from "@/features/project-assistant/liveActivityEvents";
import {
  presentActivityEventLabel,
  presentLiveActivityTimeline,
} from "@/features/pre-m6-product-ui/surfaces/presentLiveActivityTimeline";
import {
  CONVERSATION_SOURCES_SCOPE_DISCLAIMER,
  documentaryGroupKey,
  presentConversationSources,
} from "@/features/pre-m6-product-ui/surfaces/presentConversationSources";

const P3 =
  "projects/sfia-studio/product-simplification/03-chat-first-product-simplification-workspace-interaction-architecture.md";
const P4 =
  "projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md";

describe("presentLiveActivityTimeline (R-UX-03)", () => {
  it("UX-01/02/03/04 — labels only, chrono order, collapse duplicates", () => {
    const events: NoraLiveActivityEvent[] = [
      {
        kind: "mission_started",
        seq: 1,
        at: "t1",
        label: "Mission démarrée",
      },
      {
        kind: "tool_started",
        seq: 2,
        at: "t2",
        label: "Consultation…",
        toolName: "git_local_read_file",
        sourcePath: P3,
      },
      {
        kind: "tool_started",
        seq: 3,
        at: "t3",
        label: "Consultation…",
        toolName: "git_local_read_file",
        sourcePath: P3,
      },
      {
        kind: "activity_update",
        seq: 4,
        at: "t4",
        label: "Nora poursuit la comparaison.",
      },
    ];
    const lines = presentLiveActivityTimeline(events);
    expect(lines.map((l) => l.label)).toEqual([
      "Mission démarrée",
      "Nora consulte P3.",
      "Nora poursuit la comparaison.",
    ]);
    expect(lines.every((l) => !/mission_started|tool_started/.test(l.label))).toBe(
      true,
    );
  });

  it("SRC-12 — tool_completed is passage consult, never full-document claim", () => {
    expect(
      presentActivityEventLabel({
        kind: "tool_completed",
        seq: 1,
        at: "t",
        label: "Document consulté",
        toolName: "git_local_read_file",
        sourcePath: P4,
      }),
    ).toBe("Nora a consulté un passage de P4.");
    expect(
      presentActivityEventLabel({
        kind: "tool_completed",
        seq: 1,
        at: "t",
        label: "Document consulté",
        toolName: "git_local_read_file",
        sourcePath: P4,
      }),
    ).not.toMatch(/terminé la lecture|intégralement|entier/i);
  });

  it("SRC-13 — non-documentary tool_completed is not a document read", () => {
    const label = presentActivityEventLabel({
      kind: "tool_completed",
      seq: 1,
      at: "t",
      label: "status ok",
      toolName: "git_local_get_status",
    });
    expect(label).not.toMatch(/passage|lecture de|document/i);
    expect(label).toMatch(/consultation|status ok/i);
  });

  it("tool_failed uses honest impossibility wording", () => {
    expect(
      presentActivityEventLabel({
        kind: "tool_failed",
        seq: 1,
        at: "t",
        label: "fail",
        toolName: "git_local_read_file",
        sourcePath: P3,
      }),
    ).toBe("Impossible de consulter P3.");
  });
});

describe("presentConversationSources (R-UX-01)", () => {
  it("SRC-01/02/03 — #Lx-y ranges collapse to one P3 group; P4 distinct; ranges kept", () => {
    const events: AssistantToolEventDto[] = [
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P3}#L1-240`,
        summary: `read ${P3} L1-240/780 returned L1-240 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P3}#L241-500`,
        summary: `read ${P3} L241-500/780 returned L241-500 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P3}#L501-780`,
        summary: `read ${P3} L501-780/780 returned L501-780 (ok) documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P4}#L1-100`,
        summary: `read ${P4} L1-100/400 returned L1-100 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
    ];

    expect(documentaryGroupKey(events[0]!)).toBe(`doc:${P3}`);
    expect(documentaryGroupKey(events[1]!)).toBe(`doc:${P3}`);
    expect(documentaryGroupKey(events[2]!)).toBe(`doc:${P3}`);

    const groups = presentConversationSources(events);
    expect(groups).toHaveLength(2);
    const p3 = groups.find((g) => g.title.includes("P3"));
    const p4 = groups.find((g) => g.title.includes("P4"));
    expect(p3?.eventCount).toBe(3);
    expect(p3?.detailEvents.map((e) => e.pathOrRef)).toEqual([
      `${P3}#L1-240`,
      `${P3}#L241-500`,
      `${P3}#L501-780`,
    ]);
    expect(p3?.qualification).toMatch(/passages|Extraits/i);
    expect(p3?.qualification).not.toMatch(/\bFULL\b|^Document lu en entier/i);
    expect(p4?.eventCount).toBe(1);
  });

  it("SRC-04/05 — REAL summary path groups with bare path", () => {
    const bare: AssistantToolEventDto = {
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: P3,
      summary: `read ${P3} L1-40/200 returned L1-40 (ok) hasMore documentHasMore`,
      errorCode: null,
      readOnly: true,
    };
    const ranged: AssistantToolEventDto = {
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: `${P3}#L41-80`,
      summary: `read ${P3} L41-80/200 returned L41-80 (ok) hasMore documentHasMore`,
      errorCode: null,
      readOnly: true,
    };
    expect(documentaryGroupKey(bare)).toBe(documentaryGroupKey(ranged));
    const groups = presentConversationSources([bare, ranged]);
    expect(groups).toHaveLength(1);
    expect(groups[0]!.eventCount).toBe(2);
  });

  it("SRC-06 — distinct versioned identities are not merged", () => {
    const a: AssistantToolEventDto = {
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/P3.md@abc123",
      summary: "read docs/P3.md@abc123 L1-10/10 returned L1-10 (ok)",
      errorCode: null,
      readOnly: true,
    };
    const b: AssistantToolEventDto = {
      toolName: "git_local_read_file",
      status: "succeeded",
      pathOrRef: "docs/P3.md@def456",
      summary: "read docs/P3.md@def456 L1-10/10 returned L1-10 (ok)",
      errorCode: null,
      readOnly: true,
    };
    expect(documentaryGroupKey(a)).not.toBe(documentaryGroupKey(b));
    expect(presentConversationSources([a, b])).toHaveLength(2);
  });

  it("SRC-07/08/09/11 — search ≠ read; deny≠success; mixed incidents; documentHasMore≠FULL", () => {
    expect(CONVERSATION_SOURCES_SCOPE_DISCLAIMER).toMatch(/cette conversation/i);

    const events: AssistantToolEventDto[] = [
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P3}#L1-40`,
        summary: `read ${P3} L1-40/200 returned L1-40 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "denied",
        pathOrRef: `${P3}#L180-200`,
        summary: "PATH_NOT_ALLOWED",
        errorCode: "PATH_NOT_ALLOWED",
        readOnly: true,
      },
      {
        toolName: "search_files",
        status: "succeeded",
        pathOrRef: null,
        summary: "3 matches",
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "denied",
        pathOrRef: ".env",
        summary: "PATH_NOT_ALLOWED",
        errorCode: "PATH_NOT_ALLOWED",
        readOnly: true,
      },
    ];

    const groups = presentConversationSources(events);
    const p3 = groups.find((g) => g.title.includes("P3"));
    expect(p3?.qualification).toMatch(/passages|Extraits/i);
    expect(p3?.qualification).toMatch(/incident/i);
    expect(p3?.qualification).not.toMatch(/^Lecture refusée$/);
    expect(p3?.detailEvents.some((e) => e.status === "denied")).toBe(true);
    expect(p3?.qualification).not.toMatch(/\bFULL\b/i);

    const search = groups.find((g) => g.title === "search_files");
    expect(search?.qualification).toMatch(/Recherche/i);

    const denied = groups.find((g) => g.title === ".env");
    expect(denied?.qualification).toMatch(/refus/i);
    expect(denied?.detailEvents[0]?.errorCode).toBe("PATH_NOT_ALLOWED");
  });

  it("SRC-10 — FULL only with proven full coverage fact", () => {
    const events: AssistantToolEventDto[] = [
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: "docs/short.md",
        summary:
          "read docs/short.md L1-3/3 returned L1-3 (ok)",
        errorCode: null,
        readOnly: true,
      },
    ];
    const [group] = presentConversationSources(events);
    expect(group!.qualification).not.toBe("FULL");
    expect(group!.qualification).not.toMatch(/^FULL$/);
    if (/entier/i.test(group!.qualification)) {
      expect(group!.qualification).toMatch(/preuve/i);
    }
  });
});

===== END FILE projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.nora.uxClosure.presentation.d0.test.ts =====

===== BEGIN FILE projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.nora.uxClosure.sourcesSurface.d0.test.tsx =====
/** @vitest-environment jsdom */
/**
 * P6 UX closure — Sources regroupées on REAL ConversationSurface (DET).
 */
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ConversationSurface } from "@/features/pre-m6-product-ui/surfaces/ConversationSurface";
import type { ProductConversationController } from "@/features/pre-m6-product-ui/hooks/useProductConversation";
import type { AssistantToolEventDto } from "@/features/project-assistant/types";

afterEach(() => {
  cleanup();
});

function stubController(
  overrides: Partial<ProductConversationController>,
): ProductConversationController {
  return {
    listRef: { current: null },
    messages: [],
    draft: "",
    setDraft: vi.fn(),
    toolEvents: [],
    liveActivityEvents: [],
    uiState: "READY",
    error: null,
    executionIncomplete: false,
    modeLabel: "fixture",
    ephemeralNotice: "notice",
    lrMaterializeNotice: null,
    lrMaterializeCode: null,
    f2: null,
    activeProposal: null,
    reservesText: "",
    setReservesText: vi.fn(),
    f3Prepare: null,
    f3M3Resolved: null,
    f3Execute: null,
    durableEvidenceOutcome: null,
    durableRehydrateError: null,
    focusTurnId: null,
    clearFocusTurn: vi.fn(),
    busy: false,
    blocked: false,
    canSend: true,
    stopAvailable: false,
    stopCurrentResponse: vi.fn(),
    gateOpen: false,
    recommendationFreshness: "none",
    qualificationFreshness: "none",
    durableOutcomeFreshness: "none",
    canPrepareResolvedM3: false,
    canPrepareLegacyFixture: false,
    canConfirmResolvedM3: false,
    canConfirmLegacyFixture: false,
    canRefreshResolvedM3Running: false,
    sendMessage: vi.fn(),
    decide: vi.fn(),
    prepareResolvedM3: vi.fn(),
    prepareLegacyFixture: vi.fn(),
    confirmAndExecuteResolvedM3: vi.fn(),
    confirmAndExecuteLegacyFixture: vi.fn(),
    refreshResolvedM3RunningAttempt: vi.fn(),
    retryLastUserMessage: vi.fn(),
    reservationResolutionProposal: null,
    transcriptAvailability: "available",
    openContinuityPresentation: null,
    journalEntries: [],
    journalCycleInstanceId: null,
    selectedJournalEntryId: null,
    setSelectedJournalEntryId: vi.fn(),
    focusJournalExchanges: vi.fn(),
    focusTranscriptTurn: vi.fn(),
    refreshConversationContinuity: vi.fn(),
    armReinstructionOfProposalId: vi.fn(),
    armedReinstructionOfProposalId: null,
    armReservationInteractionContext: vi.fn(),
    armedReservationInteractionContext: null,
    clearReservationResolutionProposal: vi.fn(),
    ...overrides,
  } as ProductConversationController;
}

const P3 =
  "projects/sfia-studio/product-simplification/03-chat-first-product-simplification-workspace-interaction-architecture.md";
const P4 =
  "projects/sfia-studio/product-simplification/04-chat-first-product-simplification-semantic-projection-cognitive-architecture.md";

describe("ConversationSurface sources UX closure", () => {
  it("UX-14/15/18/19 + SRC ranges — grouped sources + honest tech detail", () => {
    const toolEvents: AssistantToolEventDto[] = [
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P3}#L1-240`,
        summary: `read ${P3} L1-240/780 returned L1-240 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P3}#L241-500`,
        summary: `read ${P3} L241-500/780 returned L241-500 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
      {
        toolName: "git_local_read_file",
        status: "succeeded",
        pathOrRef: `${P4}#L1-100`,
        summary: `read ${P4} L1-100/400 returned L1-100 (ok) hasMore documentHasMore`,
        errorCode: null,
        readOnly: true,
      },
    ];

    render(
      <ConversationSurface
        controller={stubController({
          toolEvents,
          messages: [
            { id: "u1", role: "user", content: "Comparer P3 et P4." },
            { id: "a1", role: "assistant", content: "Voici la synthèse." },
          ],
        })}
      />,
    );

    const sources = screen.getByTestId("project-assistant-sources");
    expect(
      screen.getByTestId("project-assistant-sources-scope"),
    ).toHaveTextContent(/cette conversation/i);

    const items = within(sources).getAllByTestId("project-assistant-source-item");
    expect(items).toHaveLength(2);
    expect(items[0]!.textContent).toMatch(/P3/);
    expect(items[0]!.textContent).toMatch(/2 consultations regroupées/);
    expect(items[0]!.textContent).not.toMatch(/\bFULL\b/);
    expect(items[1]!.textContent).toMatch(/P4/);

    const techSummary = within(items[0]!).getByText("Détail technique");
    fireEvent.click(techSummary);
    const tech = within(items[0]!).getAllByTestId(
      "project-assistant-source-tech-item",
    );
    expect(tech).toHaveLength(2);
    expect(tech[0]!.textContent).toMatch(/git_local_read_file/);
    expect(tech[0]!.textContent).toMatch(`${P3}#L1-240`);
    expect(tech[0]!.textContent).toMatch(/Consultation réussie/);
    expect(tech[0]!.textContent).toMatch(/Opération en lecture seule/);
    expect(tech[0]!.textContent).not.toMatch(/lecture seule confirmée/i);
  });
});

===== END FILE projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.nora.uxClosure.sourcesSurface.d0.test.tsx =====

```

---

## Middleware final

Diff vs HEAD/baseline: empty (0 bytes). Identique a eec68a41.

# SFIA Review Pack Full — Ensemble 05 UX-01…07 RECETTE

**Date:** 2026-11-18 ~18:30 CET
**Cycle:** 8 Delivery + 9 QA
**Profil:** Critical
**GO Morris:** EXPLICITE — UX-01…07 + build + cutover RECETTE même cycle
**Git produit:** aucun push/PR/merge
**STABLE / Gate C / ADOPTED:** interdits

## Verdict final unique

`ENSEMBLE 05 UX CORRECTIVES DEPLOYED — RECETTE READY FOR MORRIS RETEST`

---

## 1. Git Truth Check

```
TOP=/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116
BRANCH=sfia/next-ml4d-ensemble05-composition-recette-candidate
HEAD=bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b
TREE=c39e45e6fe1eca45c5dbc3dbcb96aa8ca9818b2a
ORIGIN_MAIN=997d4c4e8204993de7107552898c8cc08cd3b0ed
PARENT90=90c3e59f4a355b463ea047cc45486906bde15680
SERVED_SHA=bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b
SERVED_BUILD=qw3FaPD1B4KBrRab3LyKL
ENV01_BLOB=14b61f0d1265cf85fcca09b028dd09bd8c71597f present
VERSIONING_BLOB=8bc93e0fafac0f981c446e978a37f5f93d183875 present
```

Note: `origin/main` confirmé `997d4c4e…`. Candidat servi = `bd3854ac` (90c3e59f + UX). Docs tip may advance after cutover evidence commit.

---

## 2. Analyse UX-01…07

Voir ledger. Responsabilités React/CSS/ELK Studio — pas de nouveau moteur ; schéma `detail.max(5000)` conservé.

---

## 3. Diffs utiles

### GraphNodeCard + editorial-title

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/nora-composition/GraphNodeCard.tsx b/projects/sfia-studio-next/web/src/components/figma/nora-composition/GraphNodeCard.tsx
index 5be2935f..de418555 100644
--- a/projects/sfia-studio-next/web/src/components/figma/nora-composition/GraphNodeCard.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/nora-composition/GraphNodeCard.tsx
@@ -2,27 +2,30 @@

 import React from "react";
 import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
-import type { RelationsBlock } from "@/domains/conversation/visual-composition";
+import type { RelationsBlock, VisualSemanticRole } from "@/domains/conversation/visual-composition";

 void React;

 type Node = RelationsBlock["nodes"][number];

-function roleFor(
+/**
+ * UX-04 — graph icons only when they carry a verifiable epistemic/risk signal.
+ * Neutral activity / observation nodes stay label-only (no decorative eye).
+ */
+function semanticIconRole(
   kind: string | undefined,
-): "information" | "observation" | "hypothesis" | "risk" | "recommendation" | "dependency" {
+): VisualSemanticRole | null {
   switch (kind) {
     case "hypothesis":
       return "hypothesis";
-    case "finding":
-    case "fact":
-      return "observation";
-    case "cause":
-      return "dependency";
     case "unknown":
       return "information";
+    case "cause":
+      return "dependency";
+    case "risk":
+      return "risk";
     default:
-      return "information";
+      return null;
   }
 }

@@ -36,18 +39,20 @@ export function GraphNodeCard({
   branch?: "root" | "yes" | "no" | "then" | "gate";
   emphasize?: boolean;
 }) {
+  const iconRole = semanticIconRole(node.kind);
   return (
     <article
       className={`fig-nc-graph-node${emphasize ? " fig-nc-graph-node-emphasis" : ""}${
         branch ? ` fig-nc-graph-node-${branch}` : ""
-      }`}
+      }${!iconRole ? " fig-nc-graph-node-plain" : ""}`}
       data-testid="nora-graph-node"
       data-node-id={node.id}
       data-node-kind={node.kind ?? ""}
       data-branch={branch ?? ""}
       data-lane={node.laneId ?? ""}
+      data-icon={iconRole ? "1" : "0"}
     >
-      <NoraSemanticIcon role={roleFor(node.kind)} />
+      {iconRole ? <NoraSemanticIcon role={iconRole} /> : null}
       <div className="fig-nc-graph-node-copy">
         <div className="fig-nc-graph-node-label">{node.label}</div>
         {node.detail ? (
diff --git a/projects/sfia-studio-next/web/src/components/figma/nora-composition/editorial-title.ts b/projects/sfia-studio-next/web/src/components/figma/nora-composition/editorial-title.ts
new file mode 100644
index 00000000..f195f347
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/components/figma/nora-composition/editorial-title.ts
@@ -0,0 +1,14 @@
+/**
+ * UX-03 — strip decorative leading ordinals duplicated by margin numbers.
+ * Preserves titles whose digits are métier content (e.g. mid-string "8 semaines").
+ */
+export function stripLeadingOrdinal(title: string): string {
+  let t = title.trim();
+  if (!t) return title;
+  for (let i = 0; i < 2; i += 1) {
+    const next = t.replace(/^\d{1,2}\s*[.)—–\-:/]\s*/, "").trim();
+    if (next === t || !next) break;
+    t = next;
+  }
+  return t || title.trim();
+}

```

### EditorialSequence / EditorialSynthesis

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/nora-composition/EditorialSequence.tsx b/projects/sfia-studio-next/web/src/components/figma/nora-composition/EditorialSequence.tsx
index 5b0915f9..3740d78f 100644
--- a/projects/sfia-studio-next/web/src/components/figma/nora-composition/EditorialSequence.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/nora-composition/EditorialSequence.tsx
@@ -7,6 +7,7 @@

 import React from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
+import { stripLeadingOrdinal } from "@/components/figma/nora-composition/editorial-title";
 import type { SequenceBlock } from "@/domains/conversation/visual-composition";
 import type { SequenceVariant } from "@/domains/conversation/conversational-composition";

@@ -49,10 +50,8 @@ export function EditorialSequence({

       {horizontal ? (
         <section className="fig-nc-editorial-section" data-testid="nora-composition-steps-horizontal">
-          <div className="fig-nc-section-head">
-            <span className="fig-nc-section-num" aria-hidden>
-              01
-            </span>
+          {/* UX-03 — section title only; step medallion is the sole ordinal. */}
+          <div className="fig-nc-section-head fig-nc-section-head-plain">
             <h4 className="fig-nc-section-title">
               {block.steps.length === 4
                 ? "Quatre étapes à maîtriser"
@@ -67,7 +66,7 @@ export function EditorialSequence({
                   <div className="fig-nc-h-step-medallion" aria-hidden>
                     {idx + 1}
                   </div>
-                  <h5>{step.title}</h5>
+                  <h5>{stripLeadingOrdinal(step.title)}</h5>
                   {step.detail ? (
                     <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
                   ) : null}
@@ -81,10 +80,7 @@ export function EditorialSequence({
           className="fig-nc-editorial-section fig-nc-v-steps-section"
           data-testid="nora-composition-steps-vertical"
         >
-          <div className="fig-nc-section-head">
-            <span className="fig-nc-section-num" aria-hidden>
-              01
-            </span>
+          <div className="fig-nc-section-head fig-nc-section-head-plain">
             <h4 className="fig-nc-section-title">
               {block.steps.length === 6
                 ? "Parcours en six temps"
@@ -98,7 +94,7 @@ export function EditorialSequence({
                   {String(idx + 1).padStart(2, "0")}
                 </span>
                 <div className="fig-nc-v-step-body">
-                  <h5>{step.title}</h5>
+                  <h5>{stripLeadingOrdinal(step.title)}</h5>
                   {step.detail ? (
                     <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
                   ) : null}
@@ -117,10 +113,7 @@ export function EditorialSequence({
             block.fixtureDemo ? "Chronologie de démonstration" : "Chronologie"
           }
         >
-          <div className="fig-nc-section-head">
-            <span className="fig-nc-section-num" aria-hidden>
-              02
-            </span>
+          <div className="fig-nc-section-head fig-nc-section-head-plain">
             <h4 className="fig-nc-section-title">
               Une lecture possible des {block.timeline.weeks} semaines
             </h4>
diff --git a/projects/sfia-studio-next/web/src/components/figma/nora-composition/EditorialSynthesis.tsx b/projects/sfia-studio-next/web/src/components/figma/nora-composition/EditorialSynthesis.tsx
index 9640b21e..68e51f8e 100644
--- a/projects/sfia-studio-next/web/src/components/figma/nora-composition/EditorialSynthesis.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/nora-composition/EditorialSynthesis.tsx
@@ -9,10 +9,39 @@
 import React from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
 import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
-import type { SynthesisBlock } from "@/domains/conversation/visual-composition";
+import type {
+  SynthesisBlock,
+  VisualSemanticRole,
+} from "@/domains/conversation/visual-composition";

 void React;

+/** UX-06 — map residual labels to distinct semantic roles; avoid all-observation eyes. */
+function residualRole(it: SynthesisBlock["items"][number]): VisualSemanticRole {
+  if (it.role) return it.role;
+  const blob = `${it.label ?? ""} ${it.detail ?? ""}`.toLowerCase();
+  if (it.tone === "risk" || /anomal|incident|vigilance|risque|alerte/.test(blob)) {
+    return "risk";
+  }
+  if (/acquis|confirm[ée]|confirmé|confirmée/.test(blob)) return "fact";
+  if (/validat|contr[oô]le/.test(blob)) return "fact";
+  if (/d[ée]cision|arbitrage/.test(blob)) {
+    // Pending arbitration must not look approved (decision glyph = checkbox).
+    if (/approuv|valid[ée]|retenu|act[ée]e?/.test(blob)) return "decision";
+    return "recommendation";
+  }
+  if (it.tone === "hypothesis" || /hypoth/.test(blob)) return "hypothesis";
+  if (it.tone === "priority" || /priorit|recommand/.test(blob)) return "recommendation";
+  if (it.tone === "observation") return "observation";
+  return "information";
+}
+
+function residualShowIcon(role: VisualSemanticRole, it: SynthesisBlock["items"][number]): boolean {
+  if (it.icon) return true;
+  // Skip decorative default eye/info when no useful signal.
+  return role !== "information" && role !== "observation";
+}
+
 /**
  * C2 exact-identity only — never substring / includes.
  * A residual item is suppressed only when the same label+detail pair (or the same
@@ -115,15 +144,10 @@ export function EditorialSynthesis({ block }: { block: SynthesisBlock }) {
           data-testid="nora-composition-strategies"
           aria-label={block.strategiesSectionTitle ?? "Stratégies"}
         >
-          <div className="fig-nc-section-head">
-            <span className="fig-nc-section-num" aria-hidden>
-              01
-            </span>
-            <div>
-              <h4 className="fig-nc-section-title">
-                {block.strategiesSectionTitle ?? "Deux stratégies, deux répartitions du risque"}
-              </h4>
-            </div>
+          <div className="fig-nc-section-head fig-nc-section-head-plain">
+            <h4 className="fig-nc-section-title">
+              {block.strategiesSectionTitle ?? "Deux stratégies, deux répartitions du risque"}
+            </h4>
           </div>
           <div
             className="fig-nc-strategy-grid"
@@ -167,10 +191,7 @@ export function EditorialSynthesis({ block }: { block: SynthesisBlock }) {
           data-testid="nora-composition-checklist"
           aria-label={block.checklistSectionTitle ?? "Points à vérifier"}
         >
-          <div className="fig-nc-section-head">
-            <span className="fig-nc-section-num" aria-hidden>
-              02
-            </span>
+          <div className="fig-nc-section-head fig-nc-section-head-plain">
             <h4 className="fig-nc-section-title">
               {block.checklistSectionTitle ?? "Ce qui doit être vérifié avant tout choix"}
             </h4>
@@ -190,24 +211,17 @@ export function EditorialSynthesis({ block }: { block: SynthesisBlock }) {
       {residual.length ? (
         <ul className="fig-visual-synthesis-list fig-nc-residual-items">
           {residual.map((it) => {
-            const role =
-              it.role ??
-              (it.tone === "risk"
-                ? "risk"
-                : it.tone === "hypothesis"
-                  ? "hypothesis"
-                  : it.tone === "observation"
-                    ? "observation"
-                    : it.tone === "priority"
-                      ? "recommendation"
-                      : "information");
+            const role = residualRole(it);
+            const showIcon = residualShowIcon(role, it);
             return (
               <li
                 key={it.id}
                 data-tone={it.tone}
+                data-role={role}
+                data-icon={showIcon ? "1" : "0"}
                 className={`fig-visual-synth-item fig-visual-tone-${it.tone ?? "information"} fig-comp-synth-row`}
               >
-                <NoraSemanticIcon role={role} icon={it.icon} />
+                {showIcon ? <NoraSemanticIcon role={role} icon={it.icon} /> : null}
                 <div className="fig-comp-synth-copy">
                   <strong className="fig-comp-synth-label">{it.label}</strong>
                   {it.detail ? (

```

### NoraComposition

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx
index a891339a..6db44460 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx
@@ -102,9 +102,10 @@ function Heading(props: {
   role?: TextBlock["role"];
   icon?: TextBlock["icon"];
 }) {
+  const showIcon = Boolean(props.role || props.icon);
   return (
     <h3 className="fig-visual-title fig-comp-title">
-      <NoraSemanticIcon role={props.role} icon={props.icon} />
+      {showIcon ? <NoraSemanticIcon role={props.role} icon={props.icon} /> : null}
       <span>{props.title}</span>
     </h3>
   );
@@ -298,8 +299,9 @@ function ComparisonView({
               className="fig-visual-matrix fig-comp-matrix fig-nc-matrix-rows"
               data-testid="nora-composition-matrix-five"
               data-option-count={block.alternatives.length}
+              aria-label={block.title || "Comparaison"}
             >
-              <caption>Matrice de comparaison</caption>
+              {/* UX-02 — no visible redundant caption; block title + column headers suffice. */}
               <thead>
                 <tr>
                   <th scope="col">Option</th>
@@ -562,22 +564,26 @@ function SynthesisView({
 }

 function TextView({ block }: { block: TextBlock }) {
+  const showIcon = Boolean(block.role || block.icon);
   return (
     <div
       className={`fig-visual-block fig-visual-text fig-comp-block fig-comp-text${
         block.role ? ` fig-visual-text-${block.role}` : ""
-      }`}
+      }${showIcon ? " fig-visual-text-with-icon" : ""}`}
       data-testid="nora-visual-text"
       data-comp-testid="nora-composition-text"
       data-block-kind="text"
       data-role={block.role ?? ""}
     >
-      {block.role || block.icon ? (
-        <div className="fig-visual-text-head">
+      {/* UX-01 — icon and body share one row; never stack the glyph alone above the title. */}
+      {showIcon ? (
+        <span className="fig-visual-text-icon" aria-hidden={false}>
           <NoraSemanticIcon role={block.role} icon={block.icon} />
-        </div>
+        </span>
       ) : null}
-      <SafeMarkdown content={block.markdown} />
+      <div className="fig-visual-text-body">
+        <SafeMarkdown content={block.markdown} />
+      </div>
     </div>
   );
 }

```

### elk-layout + DirectedRelationBoard

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/nora-composition/DirectedRelationBoard.tsx b/projects/sfia-studio-next/web/src/components/figma/nora-composition/DirectedRelationBoard.tsx
index f2189d8c..031a2656 100644
--- a/projects/sfia-studio-next/web/src/components/figma/nora-composition/DirectedRelationBoard.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/nora-composition/DirectedRelationBoard.tsx
@@ -61,14 +61,40 @@ export function DirectedRelationBoard({
   const syncTargets = new Set(
     block.edges.filter((e) => e.relation === "sync").map((e) => e.to),
   );
-  const gateId = [...syncTargets][0];
+  // Prefer explicit sync gate; else highest multi-lane fan-in (UX-05 flow-only convergence).
+  const gateId =
+    [...syncTargets][0] ??
+    (() => {
+      if (hint !== "parallelProcess") return undefined;
+      const laneOf = new Map<string, string>();
+      for (const n of block.nodes) {
+        const lane = n.laneId?.trim();
+        if (lane) laneOf.set(n.id, lane);
+      }
+      let best: string | undefined;
+      let bestCount = 1;
+      for (const n of block.nodes) {
+        const lanesHit = new Set<string>();
+        for (const e of block.edges) {
+          if (e.to !== n.id) continue;
+          const lane = laneOf.get(e.from);
+          if (lane) lanesHit.add(lane);
+        }
+        if (lanesHit.size > bestCount) {
+          bestCount = lanesHit.size;
+          best = n.id;
+        }
+      }
+      return best;
+    })();

   const lanes =
     hint === "parallelProcess"
       ? (() => {
           const m = new Map<string, typeof block.nodes>();
           for (const n of block.nodes) {
-            const lane = n.laneId?.trim() || "voie";
+            const lane = n.laneId?.trim();
+            if (!lane) continue;
             const list = m.get(lane) ?? [];
             list.push(n);
             m.set(lane, list);
@@ -153,8 +179,8 @@ export function DirectedRelationBoard({
         className="fig-nc-measure-layer"
         aria-hidden
         data-testid="nora-composition-measure-layer"
-        data-measure-width={hint === "parallelProcess" ? "168" : "280"}
-        style={{ width: hint === "parallelProcess" ? 168 : 280 }}
+        data-measure-width={hint === "parallelProcess" ? "190" : "280"}
+        style={{ width: hint === "parallelProcess" ? 190 : 280 }}
       >
         {block.nodes.map((n) => (
           <div key={n.id} data-measure-id={n.id} className="fig-nc-measure-node">
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/directed-layout/elk-layout.ts b/projects/sfia-studio-next/web/src/domains/conversation/directed-layout/elk-layout.ts
index 1f0a2d2c..f2d5395f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/directed-layout/elk-layout.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/directed-layout/elk-layout.ts
@@ -62,8 +62,15 @@ function classifyLanes(block: RelationsBlock): {
   );
   const order: string[] = [];
   const map = new Map<string, RelationsBlock["nodes"]>();
+  /** UX-05 — unlaned nodes are classified after flow lanes (convergence / suite). */
+  const unassigned: RelationsBlock["nodes"] = [];
+
   for (const n of block.nodes) {
-    const lane = n.laneId?.trim() || "voie";
+    const lane = n.laneId?.trim();
+    if (!lane) {
+      unassigned.push(n);
+      continue;
+    }
     if (!map.has(lane)) {
       order.push(lane);
       map.set(lane, []);
@@ -91,27 +98,63 @@ function classifyLanes(block: RelationsBlock): {
       suiteNodes.push(...nodes);
       continue;
     }
-    if (/^converg/i.test(label) && nodes.some((n) => syncTargets.has(n.id))) {
+    if (/^converg/i.test(label)) {
       gateNodes.push(...nodes);
       continue;
     }
     flow.push({ id: `lane-${label}`, label, nodes, kind: "flow" });
   }

-  // Fallback: any sync target not already classified.
+  const laneOf = new Map<string, string>();
+  for (const lane of flow) {
+    for (const n of lane.nodes) laneOf.set(n.id, lane.label);
+  }
+  const flowIds = new Set(laneOf.keys());
+
+  const inboundFlowLaneCount = (nodeId: string): number => {
+    const lanes = new Set<string>();
+    for (const e of block.edges) {
+      if (e.to !== nodeId) continue;
+      const lane = laneOf.get(e.from);
+      if (lane) lanes.add(lane);
+    }
+    return lanes.size;
+  };
+
+  const isOnlyFromGate = (nodeId: string): boolean => {
+    const inbound = block.edges.filter((e) => e.to === nodeId);
+    if (!inbound.length) return false;
+    return inbound.every(
+      (e) =>
+        gateNodes.some((g) => g.id === e.from) || syncTargets.has(e.from),
+    );
+  };
+
+  // Sync targets always gate.
   for (const n of block.nodes) {
     if (syncTargets.has(n.id) && !gateNodes.some((g) => g.id === n.id)) {
       gateNodes.push(n);
     }
   }
-  for (const n of block.nodes) {
-    const inFlow = flow.some((l) => l.nodes.some((x) => x.id === n.id));
-    const inGate = gateNodes.some((g) => g.id === n.id);
-    const inSuite = suiteNodes.some((s) => s.id === n.id);
-    if (!inFlow && !inGate && !inSuite) {
+
+  // Unlaned / leftover: fan-in from ≥2 flow lanes ⇒ single convergence gate.
+  const classifyOne = (n: RelationsBlock["nodes"][number]) => {
+    if (gateNodes.some((g) => g.id === n.id)) return;
+    if (flowIds.has(n.id)) return;
+    if (suiteNodes.some((s) => s.id === n.id)) return;
+    if (syncTargets.has(n.id) || inboundFlowLaneCount(n.id) >= 2) {
+      gateNodes.push(n);
+      return;
+    }
+    if (isOnlyFromGate(n.id) || /^suite|lancement|mise en service/i.test(n.label)) {
       suiteNodes.push(n);
+      return;
     }
-  }
+    suiteNodes.push(n);
+  };
+
+  for (const n of unassigned) classifyOne(n);
+  for (const n of block.nodes) classifyOne(n);

   return { flow, gateNodes, suiteNodes };
 }
@@ -141,9 +184,11 @@ async function computeParallelSwimlaneLayout(
   let lanesBottom = 0;
   const laneBounds: Array<{ label: string; x: number; y: number; w: number; h: number }> = [];

-  // Fit three swimlanes in a typical Travail column (~600–720px) without
-  // forcing the Pilote to scroll horizontally to discover a lane.
-  const maxLaneNodeW = flow.length >= 3 ? 168 : 220;
+  // Fit three swimlanes in a typical Travail column (~600–720px).
+  // Sparse lanes (≤2 nodes) keep a wider card so labels do not wrap excessively (UX-05).
+  const maxNodesInLane = Math.max(...flow.map((l) => l.nodes.length), 1);
+  const maxLaneNodeW =
+    flow.length >= 3 ? (maxNodesInLane <= 2 ? 190 : 168) : 220;

   for (const lane of flow) {
     const intra = block.edges.filter(

```

### tokens.css

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 4b134cf4..ab83d881 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -1804,6 +1804,25 @@
   margin-bottom: 6px;
 }

+/* UX-01 — icon + markdown body on one horizontal row */
+.fig-visual-text-with-icon {
+  display: flex;
+  align-items: flex-start;
+  gap: 8px;
+}
+.fig-visual-text-icon {
+  flex: 0 0 auto;
+  display: inline-flex;
+  align-items: center;
+  margin-top: 0.2em;
+}
+.fig-visual-text-icon .fig-visual-icon {
+  margin-right: 0;
+}
+.fig-visual-text-body {
+  min-width: 0;
+  flex: 1 1 auto;
+}
 .fig-visual-text-observation,
 .fig-visual-text-hypothesis,
 .fig-visual-text-risk,
@@ -1861,7 +1880,11 @@
   color: #f4f6fc;
   display: flex;
   align-items: center;
-  gap: 4px;
+  gap: 8px;
+  flex-wrap: nowrap;
+}
+.fig-visual-title > span {
+  min-width: 0;
 }

 .fig-visual-recommendation {
@@ -2692,9 +2715,19 @@
   display: flex;
   align-items: flex-start;
   gap: 12px;
-  padding: 10px 0;
+  /* UX-06 — internal left padding so icons never kiss the frame edge */
+  padding: 12px 14px 12px 16px;
   border-bottom: 1px solid color-mix(in srgb, var(--fig-line) 55%, transparent);
 }
+.fig-nc-residual-items {
+  margin: 12px 0 0;
+  padding: 0;
+  list-style: none;
+  border: 1px solid color-mix(in srgb, var(--fig-line) 70%, transparent);
+  border-radius: 12px;
+  overflow: hidden;
+  background: color-mix(in srgb, var(--fig-panel, #121826) 88%, transparent);
+}

 .fig-comp-synth-row:last-child {
   border-bottom: none;
@@ -2795,6 +2828,9 @@
   border: 1px solid color-mix(in srgb, var(--fig-line) 80%, transparent);
   background: color-mix(in srgb, var(--fig-panel) 92%, #0a121c);
 }
+.fig-nc-graph-node-plain {
+  gap: 0;
+}

 .fig-nc-graph-node-label {
   font-size: 14px;
@@ -3036,7 +3072,11 @@
   align-items: baseline;
   margin-bottom: 14px;
 }
+.fig-nc-section-head-plain {
+  gap: 0;
+}
 .fig-nc-section-num {
+  /* retained for legacy markup; UX-03 no longer emits decorative section ordinals */
   font-size: 14px;
   font-weight: 600;
   color: #e8bc86;
@@ -3067,7 +3107,11 @@
   background: #172237;
   padding: 20px 22px 18px;
   overflow: hidden;
-  min-height: 200px;
+  /* Natural content height — no artificial vertical stretch (UX-07 sibling). */
+  min-height: 0;
+  display: flex;
+  flex-direction: column;
+  gap: 0;
 }
 .fig-nc-strategy-gold { border-color: #4b456b; background: #201e32; }
 .fig-nc-strategy-accent {
@@ -3181,12 +3225,15 @@
   line-height: 1.4;
 }

-/* Comparison option cards (Figma 03/05) */
+/* Comparison option cards (Figma 03/05) — UX-07 natural flow, top-aligned */
 .fig-nc-option-card {
   display: flex;
   flex-direction: column;
   gap: 12px;
-  min-height: 220px;
+  min-height: 0;
+  height: auto;
+  justify-content: flex-start;
+  align-items: stretch;
   padding: 22px 20px !important;
   border-radius: 14px !important;
   border: 1px solid #2a3650 !important;
@@ -3210,7 +3257,8 @@
   font-size: 13px;
   line-height: 1.35;
   color: #adb9cf;
-  flex: 1;
+  /* Do not flex-grow — avoids artificial mid-card gaps (UX-07). */
+  flex: 0 0 auto;
 }
 .fig-nc-option-vigilance {
   margin: 0;
@@ -3221,6 +3269,7 @@
 .fig-comp-comparison-cards {
   grid-template-columns: repeat(3, minmax(0, 1fr));
   gap: 18px;
+  align-items: start;
 }
 .fig-comp-comparison-stack {
   display: flex;

```

---

## 4. Fichiers créés (contenu complet)

### projects/sfia-studio-next/web/src/components/figma/nora-composition/editorial-title.ts

```text
/**
 * UX-03 — strip decorative leading ordinals duplicated by margin numbers.
 * Preserves titles whose digits are métier content (e.g. mid-string "8 semaines").
 */
export function stripLeadingOrdinal(title: string): string {
  let t = title.trim();
  if (!t) return title;
  for (let i = 0; i < 2; i += 1) {
    const next = t.replace(/^\d{1,2}\s*[.)—–\-:/]\s*/, "").trim();
    if (next === t || !next) break;
    t = next;
  }
  return t || title.trim();
}

```
### projects/sfia-studio-next/web/tests/unit/ux-correctives-ensemble05.test.ts

```text
import React, { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { GraphNodeCard } from "@/components/figma/nora-composition/GraphNodeCard";
import { EditorialSequence } from "@/components/figma/nora-composition/EditorialSequence";
import { EditorialSynthesis } from "@/components/figma/nora-composition/EditorialSynthesis";
import { stripLeadingOrdinal } from "@/components/figma/nora-composition/editorial-title";
import { computeElkDirectedLayout } from "@/domains/conversation/directed-layout";
import type {
  ComparisonBlock,
  RelationsBlock,
  SequenceBlock,
  SynthesisBlock,
  VisualComposition,
} from "@/domains/conversation/visual-composition";

(globalThis as typeof globalThis & { React: typeof React }).React = React;

function composition(blocks: VisualComposition["blocks"]): VisualComposition {
  return {
    schemaVersion: "conversational-composition-canonical-v1",
    blocks,
    contentAuthority: "canonical_sections",
  };
}

describe("UX-03 stripLeadingOrdinal", () => {
  it("strips duplicated step prefixes", () => {
    expect(stripLeadingOrdinal("1. Cadrer les besoins")).toBe("Cadrer les besoins");
    expect(stripLeadingOrdinal("01 — 1. Cadrer les besoins")).toBe("Cadrer les besoins");
    expect(stripLeadingOrdinal("02. Préparer")).toBe("Préparer");
  });
  it("preserves métier digits mid-title", () => {
    expect(stripLeadingOrdinal("Fenêtre de 8 semaines")).toBe("Fenêtre de 8 semaines");
  });
});

describe("UX-01/02/03/07 renderer", () => {
  it("keeps text icon inline (no lone head stack)", async () => {
    const { NoraComposition } = await import("@/components/figma/NoraComposition");
    const html = renderToStaticMarkup(
      createElement(NoraComposition, {
        composition: composition([
          {
            kind: "text",
            id: "t1",
            markdown: "## Introduction\n\nCorps.",
            role: "hypothesis",
            icon: "hypothesis",
          },
        ]),
      }),
    );
    expect(html).toContain("fig-visual-text-with-icon");
    expect(html).not.toContain("fig-visual-text-head");
  });

  it("omits visible matrix caption (UX-02)", async () => {
    const { NoraComposition } = await import("@/components/figma/NoraComposition");
    const block: ComparisonBlock = {
      kind: "comparison",
      id: "c1",
      title: "Effort, délai et risque",
      alternatives: [
        { id: "a", title: "A", summary: "nature A" },
        { id: "b", title: "B", summary: "nature B" },
      ],
      criteria: [
        { id: "effort", label: "Effort", values: { a: "faible", b: "fort" } },
        { id: "delai", label: "Délai", values: { a: "court", b: "long" } },
        { id: "risque", label: "Risque", values: { a: "bas", b: "haut" } },
      ],
      textAlternative: "matrice",
    };
    const html = renderToStaticMarkup(
      createElement(NoraComposition, {
        composition: composition([block]),
        canonicalText: "Effort, délai et risque",
      }),
    );
    expect(html).toContain("nora-composition-matrix-five");
    expect(html).not.toMatch(/<caption[^>]*>\s*Matrice de comparaison/i);
  });

  it("uses a single step ordinal without section 01 (UX-03)", () => {
    const block: SequenceBlock = {
      kind: "sequence",
      id: "s1",
      title: "Parcours",
      steps: [
        { id: "st1", title: "1. Cadrer les besoins", detail: "ok" },
        { id: "st2", title: "Préparer", detail: "ok" },
      ],
      textAlternative: "seq",
    };
    const html = renderToStaticMarkup(
      createElement(EditorialSequence, { block, variant: "vertical" }),
    );
    expect(html).toContain("Cadrer les besoins");
    expect(html).not.toContain(">1. Cadrer");
    expect(html).not.toMatch(/fig-nc-section-num[^>]*>\s*01/);
  });
});

describe("UX-04 graph icons", () => {
  it("hides decorative observation icons on activity nodes", () => {
    const plain = renderToStaticMarkup(
      createElement(GraphNodeCard, {
        node: { id: "n1", label: "Infrastructure", kind: "observation" },
      }),
    );
    expect(plain).toContain('data-icon="0"');
    expect(plain).not.toContain("nora-visual-icon");

    const hypo = renderToStaticMarkup(
      createElement(GraphNodeCard, {
        node: { id: "n2", label: "Hypothèse", kind: "hypothesis" },
      }),
    );
    expect(hypo).toContain('data-icon="1"');
    expect(hypo).toContain("nora-visual-icon");
  });
});

describe("UX-05 parallel flow-only convergence", () => {
  it("places unlaned revue + lancement below three lanes without a fourth voie", async () => {
    const block: RelationsBlock = {
      kind: "relations",
      id: "uat07",
      title: "Processus parallèle",
      layoutHint: "parallelProcess",
      nodes: [
        { id: "infra", label: "Infrastructure", kind: "observation", laneId: "Infrastructure" },
        { id: "metier", label: "Métier", kind: "observation", laneId: "Métier" },
        {
          id: "accomp",
          label: "Accompagnement",
          kind: "observation",
          laneId: "Accompagnement",
        },
        { id: "revue", label: "Revue commune", kind: "finding" },
        { id: "lanc", label: "Lancement envisagé", kind: "hypothesis" },
      ],
      edges: [
        { from: "infra", to: "revue", relation: "flow" },
        { from: "metier", to: "revue", relation: "flow" },
        { from: "accomp", to: "revue", relation: "flow" },
        { from: "revue", to: "lanc", relation: "flow" },
      ],
      textAlternative: "trois équipes puis revue puis lancement",
    };
    const result = await computeElkDirectedLayout(block);
    expect(result.status).toBe("ready");
    if (result.status !== "ready") return;
    const infra = result.nodes.find((n) => n.id === "infra")!;
    const metier = result.nodes.find((n) => n.id === "metier")!;
    const accomp = result.nodes.find((n) => n.id === "accomp")!;
    const revue = result.nodes.find((n) => n.id === "revue")!;
    const lanc = result.nodes.find((n) => n.id === "lanc")!;
    expect(Math.abs(infra.x - metier.x)).toBeGreaterThan(80);
    expect(Math.abs(metier.x - accomp.x)).toBeGreaterThan(80);
    expect(revue.y).toBeGreaterThan(infra.y + 20);
    expect(lanc.y).toBeGreaterThan(revue.y);
    const width = Math.max(...result.nodes.map((n) => n.x + n.width));
    // Three readable swimlanes must fit the Travail column without a fourth voie strip.
    expect(width).toBeLessThan(780);
  });
});

describe("UX-06 residual icon semantics", () => {
  it("maps acquis/anomalie/decision pending distinctly", () => {
    const block: SynthesisBlock = {
      kind: "synthesis",
      id: "syn",
      title: "Synthèse",
      items: [
        { id: "i1", label: "Acquis", detail: "Confirmé", tone: "observation" },
        { id: "i2", label: "Anomalies", detail: "Écarts", tone: "observation" },
        { id: "i3", label: "Décision", detail: "Arbitrage attendu", tone: "observation" },
      ],
      textAlternative: "synth",
    };
    const html = renderToStaticMarkup(createElement(EditorialSynthesis, { block }));
    expect(html).toMatch(/data-role="fact"/);
    expect(html).toMatch(/data-role="risk"/);
    expect(html).toMatch(/data-role="recommendation"/);
  });
});

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-ux01-07-recette-20261118/00-ledger.md

```text
# Ensemble 05 — UX-01 à UX-07 + relivraison RECETTE

**Date :** 2026-11-18
**GO Morris :** développement + QA + build + cutover RECETTE, même cycle
**Profil :** Critical · NO RELEASE · NO PRODUCT PUSH

## Identités

| | |
| --- | --- |
| Parent RECETTE | `90c3e59f` / `5C3be3-ils1iOmH3qXo4d` |
| Nouveau candidat | `bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b` · tree `c39e45e6fe1eca45c5dbc3dbcb96aa8ca9818b2a` |
| Build | `qw3FaPD1B4KBrRab3LyKL` |
| Worktree | `…-ensemble05-recette-build-bd3854ac` |
| URL | http://127.0.0.1:3200 |
| DB | `:5434` / `sfia_next_recette_ml4` — counts `23\|117\|556\|4` avant=après |

## Registre des corrections

| ID | Cause | Correctif |
| --- | --- | --- |
| UX-01 | `TextView` empilait l’icône seule ; `Heading` forçait une icône même sans rôle | Flex row icon+body ; icône Heading seulement si role/icon |
| UX-02 | `<caption>Matrice de comparaison</caption>` redondante | Caption retirée ; `aria-label` sur table |
| UX-03 | `fig-nc-section-num` 01/02 + titres d’étape préfixés | Sections plain ; `stripLeadingOrdinal` sur titres d’étape |
| UX-04 | `GraphNodeCard` affichait toujours l’œil | Icône seulement pour hypothesis/unknown/cause/risk |
| UX-05 | Nœuds sans `laneId` tombaient dans une 4ᵉ voie | Classification fan-in ≥2 → gate ; suite après gate ; largeur swimlane adaptée |
| UX-06 | Résidus tous en observation + padding faible | Mapping sémantique label→rôle ; padding gauche ; omettre icône neutre |
| UX-07 | `min-height` + `flex:1` sur summary | Flux naturel, `align-items:start`, plus de stretch artificiel |

## Qualification

- Vitest UX + ELK + UAT-03 detail + C2 editorial : **PASS**
- Smoke RECETTE login/portfolio/projet/fil : **PASS**
- Isolation Pilot B→A : **404**
- UNKNOWN historiques : **conservés** (2)
- FORCE/SIM/DIAG : **vides**

## Réserves restantes

Aucune réserve UX-01…07 ouverte. Recette utilisateur Morris **pending**.

## Verdict

`ENSEMBLE 05 UX CORRECTIVES DEPLOYED — RECETTE READY FOR MORRIS RETEST`

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-ux01-07-recette-20261118/01-recette-manifest.md

```text
# Manifeste ENV-01 — RECETTE UX-01…07

**Non sensible.**

| Champ | Contenu |
| --- | --- |
| `lane` | `RECETTE` |
| `candidate_sha` | `bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b` |
| `candidate_tree` | `c39e45e6fe1eca45c5dbc3dbcb96aa8ca9818b2a` |
| `previous_recette_sha` | `90c3e59f4a355b463ea047cc45486906bde15680` |
| `previous_recette_build` | `5C3be3-ils1iOmH3qXo4d` |
| `build_identifier` | `qw3FaPD1B4KBrRab3LyKL` |
| `served_address` | `http://127.0.0.1:3200` |
| `runtime_worktree` | `…/sfia-workspace-next-ml4d-ensemble05-recette-build-bd3854ac` |
| `launch_agent` | `com.sfia.studio.next.recette.ml4d-ux004` |
| `start_script` | `start-recette-ensemble05-bd3854ac.sh` |
| `schema_revision` | inchangé — aucune migration |
| `test_data_revision` | `23\|117\|556\|4` préservé |
| `FORCE_FIXTURE` / `SIM` / `DIAG` | vides |
| `rollback_reference` | `ROLLBACK-TO-90c3e59f.sh` + backup `ml4d-e05-ux0107-*` |
| `product_version` | NOT AVAILABLE |

## Verdict

`ENSEMBLE 05 UX CORRECTIVES DEPLOYED — RECETTE READY FOR MORRIS RETEST`

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-ux01-07-recette-20261118/02-morris-reprise.md

```text
# Fiche de reprise Morris — UX-01…07

| | |
| --- | --- |
| URL | **http://127.0.0.1:3200** |
| SHA | `bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b` |
| Build | `qw3FaPD1B4KBrRab3LyKL` |
| Données | Conservées (conversations / documents / UNKNOWN historiques) |

## À revoir

Rejouer les huit scénarios UAT en vérifiant notamment :

1. Icône + titre sur la même ligne
2. Matrice sans ligne « Matrice de comparaison »
3. Un seul numéro d’étape
4. Graphes sans œil décoratif
5. Processus parallèle : 3 branches → une revue → lancement, lisible
6. Synthèse : icônes pertinentes + marges
7. Cartes : début aligné, textes en flux naturel

## Rollback

```bash
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-bd3854ac/ROLLBACK-TO-90c3e59f.sh
```

## Statut

Recette technique Cursor **PASS** — validation utilisateur Morris **PENDING**.

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-ux01-07-recette-20261118/00-vitest-summary.txt

```text
◇ injected env (0) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116/projects/sfia-studio-next/web

stderr | tests/unit/ux-correctives-ensemble05.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ux-correctives-ensemble05.test.ts (8 tests) 85ms
stderr | tests/unit/directed-layout-candidate.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/directed-layout-candidate.test.ts (4 tests) 76ms
stderr | tests/unit/c2-editorial-integrity-corrective.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/c2-editorial-integrity-corrective.test.ts (4 tests) 35ms
stderr | tests/unit/uat03-sequence-detail-limit.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/uat03-sequence-detail-limit.test.ts (10 tests) 5ms

 Test Files  4 passed (4)
      Tests  26 passed (26)
   Start at  18:25:15
   Duration  1.11s (transform 167ms, setup 26ms, collect 515ms, tests 201ms, environment 0ms, prepare 78ms)


```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-ux01-07-recette-20261118/02-db-before.json

```text
{"projects":23,"documents":117,"messages":556,"users":4}

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-ux01-07-recette-20261118/03-db-after.json

```text
{"projects":23,"documents":117,"messages":556,"users":4}

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-ux01-07-recette-20261118/04-sha-build-identity.txt

```text
prev_sha=90c3e59f4a355b463ea047cc45486906bde15680
prev_tree=1c7fa402d6029ee6c0b5582ba8d0a2b94f5bcceb
prev_build=5C3be3-ils1iOmH3qXo4d
new_sha=bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b
new_tree=c39e45e6fe1eca45c5dbc3dbcb96aa8ca9818b2a
new_build=qw3FaPD1B4KBrRab3LyKL
branch=sfia/next-ml4d-ensemble05-composition-recette-candidate
worktree=/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-bd3854ac
backup=/Users/morris/.config/sfia-studio-next/sfia-recette-backups/ml4d-e05-ux0107-182631
rollback=/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-bd3854ac/ROLLBACK-TO-90c3e59f.sh

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-ux01-07-recette-20261118/06-served-build-comment.txt

```text
qw3FaPD1B4KBrRab3LyKL

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-ux01-07-recette-20261118/07-runtime-env-redacted.txt

```text
SFIA_SOURCE_SHA='bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b'
SFIA_BUILD_ID='qw3FaPD1B4KBrRab3LyKL'
STUDIO_LANE='RECETTE'
STUDIO_FORCE_NORA_FIXTURE=''
STUDIO_NORA_SIMULATED_PROVIDER=''
STUDIO_NORA_DIAG_EPHEMERAL=''

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-ux01-07-recette-20261118/08-diffstat-vs-90c3e59f.txt

```text
 .../web/src/components/figma/NoraComposition.tsx   |  20 ++-
 .../nora-composition/DirectedRelationBoard.tsx     |  34 +++-
 .../figma/nora-composition/EditorialSequence.tsx   |  21 +--
 .../figma/nora-composition/EditorialSynthesis.tsx  |  66 +++++---
 .../figma/nora-composition/GraphNodeCard.tsx       |  27 +--
 .../figma/nora-composition/editorial-title.ts      |  14 ++
 .../web/src/components/figma/tokens.css            |  61 ++++++-
 .../conversation/directed-layout/elk-layout.ts     |  69 ++++++--
 .../tests/unit/ux-correctives-ensemble05.test.ts   | 188 +++++++++++++++++++++
 9 files changed, 420 insertions(+), 80 deletions(-)

```


---

## 5. Tests / déploiement

- Vitest UX+ELK+UAT03+C2 PASS
- next build isolé PASS → `qw3FaPD1B4KBrRab3LyKL`
- LaunchAgent basculé ; process env vérifié
- DB avant=après ; rollback 90c3e59f prêt
- Smoke browser Travail : contexte conservé

## 6. Architecture

Pas de nouveau moteur. Classification parallelProcess unlaned documentée dans le ledger.

## 7. Anti-stub / secrets

Contenus et diffs exploitables. Aucun secret.

## VERDICT

`ENSEMBLE 05 UX CORRECTIVES DEPLOYED — RECETTE READY FOR MORRIS RETEST`

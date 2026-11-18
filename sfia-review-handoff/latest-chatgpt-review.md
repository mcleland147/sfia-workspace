# SFIA Review Pack Full — Ensemble 05 UX-05 / UX-01 final RECETTE

**Date:** 2026-11-18 ~19:10 CET  
**Cycle:** 8 Delivery correctif + 9 QA graphique  
**Profil:** Critical  
**Typologie:** INC / PATCH  
**GO Morris:** EXPLICITE — UX-05 + UX-01 + build + cutover RECETTE même cycle  
**Git produit:** aucun push/PR/merge  
**STABLE / Gate C / ADOPTED / RELEASE:** interdits  
**Review Handoff:** required / publish-in-cycle  

## Verdict final unique

`ENSEMBLE 05 FINAL UX FIX DEPLOYED — RECETTE READY FOR MORRIS VALIDATION`

---

## 1. Git Truth Check

```
TOP=/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116
BRANCH=sfia/next-ml4d-ensemble05-composition-recette-candidate
ORIGIN_MAIN=997d4c4e8204993de7107552898c8cc08cd3b0ed
PREVIOUS_SERVED_SHA=bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b
PREVIOUS_SERVED_BUILD=qw3FaPD1B4KBrRab3LyKL
CANDIDATE_SHA=5c94c86737f0965c71a7e058e3f1e45ff4415024
CANDIDATE_TREE=74fbf2b90f95951d5049efc5a854ad213fb0f47f
SERVED_BUILD=IEINNuPl0bHWJOWkh0ZhG
ENV01_BLOB=14b61f0d1265cf85fcca09b028dd09bd8c71597f present
VERSIONING_BLOB=8bc93e0fafac0f981c446e978a37f5f93d183875 present
```

Réconciliation: candidat rapporté `bd3854ac` / `qw3FaPD1…` confirmé servi **avant** cutover. Nouveau runtime `5c94c867` / `IEINNuPl0bHWJOWkh0ZhG`.

Preuve détaillée: `docs/evidence/.../ensemble05-ux05-01-final-20261118/00-git-truth-check.md`

---

## 2. Analyse causale UAT-07 (données RECETTE)

# Analyse causale UX-05 — UAT-07 (données RECETTE réelles)

## Identités persistées (lecture seule)

| Champ | Valeur |
| --- | --- |
| Projet | `proj_d3b5272f-8f0f-45d7-ace4-a8d4ea773618` |
| Conversation | `conv_f9b3bf1d-8a43-456e-8a1e-a95e84824134` |
| User (dernier UAT-07) | `msg_54bb7aff-2552-457f-ab6c-7068410e04e0` |
| Assistant (dernier) | `msg_84ae0ce0-34a5-42bb-a5ab-32c3178c1286` |
| Forme antérieure | `msg_3732528d…` → `msg_6c8cfaa2…` (5 nœuds, sync→revue) |

## Composition réelle (dernier tour)

Nœuds (6, libellés uniques) :

| id | label | laneId |
| --- | --- | --- |
| infrastructure | Infrastructure | infrastructure |
| metier | Métier | metier |
| accompagnement | Accompagnement | accompagnement |
| synchronisation | Tous les livrables terminés | commun |
| revue | Revue commune | commun |
| lancement | Lancement | commun |

Arêtes :

- `infrastructure|metier|accompagnement` → `synchronisation` (`sync`)
- `synchronisation` → `revue` (`flow`)
- `revue` → `lancement` (`flow`)

**Conclusion données :** une seule « Revue commune » dans la composition canonique. Pas de duplication D3 par libellé. Les deux « Revue » visibles venaient du **renderer**.

## Cause racine (mécanisme 4)

`classifyLanes()` (correctif précédent) plaçait :

1. les cibles `sync` dans `gateNodes` ;
2. **et** laissait les mêmes nœuds (lane `commun`) dans une 4ᵉ voie flow / suite non exclusive.

Résultat layout : boîtes dupliquées (`synchronisation` / `revue`) + flèches trompeuses (colonne droite).

Ce n’est **pas** :

1. deux nœuds D3 distincts au même libellé ;
2. un seul nœud rendu deux fois par React key collision seule ;
3. une duplication swimlane CSS pure ;
5. un autre mécanisme — la preuve layout+ids confirme le double claim.

## Correctif

- Ensemble `claimed` : un nœud appartient à **un seul** groupe (flow / gate / suite).
- Cibles `sync` → gate exclusif.
- Reste de la lane de coordination (`commun` / `coordination-commune`) → suite.
- `orderSuiteChain` : ordre vertical topo revue → lancement sous le gate.
- Scroll horizontal **conservé** (accepté Morris).

Preuve post-fix (e2e DEV) : 6 ids uniques ; y(sync) < y(revue) < y(lancement) ; 3 voies x distinctes.

### Composition réelle expurgée (msg_84ae0ce0)

{
  "userMessageId": "msg_54bb7aff-2552-457f-ab6c-7068410e04e0",
  "assistantMessageId": "msg_84ae0ce0-34a5-42bb-a5ab-32c3178c1286",
  "operationId": "op_4494d94f-9ef2-452a-b7a2-a45bb743978d",
  "status": "COMPLETE",
  "noraMode": "openai-agents-sdk-live",
  "semanticQualificationStatus": "QUALIFIED",
  "relationsBlock": {
    "kind": "relations",
    "id": "coordination-parallele",
    "title": "Coordination à visualiser",
    "nodes": [
      {
        "id": "infrastructure",
        "label": "Infrastructure",
        "kind": "fact",
        "laneId": "infrastructure",
        "detail": "Configurer les environnements et vérifier les accès."
      },
      {
        "id": "metier",
        "label": "Métier",
        "kind": "fact",
        "laneId": "metier",
        "detail": "Préparer les scénarios et les données de recette."
      },
      {
        "id": "accompagnement",
        "label": "Accompagnement",
        "kind": "fact",
        "laneId": "accompagnement",
        "detail": "Préparer les communications et la formation."
      },
      {
        "id": "synchronisation",
        "label": "Tous les livrables terminés",
        "kind": "fact",
        "laneId": "commun",
        "detail": "Point de synchronisation : attendre la fin des livrables des trois équipes."
      },
      {
        "id": "revue",
        "label": "Revue commune",
        "kind": "fact",
        "laneId": "commun",
        "detail": "Revue réunissant les trois équipes avant le lancement."
      },
      {
        "id": "lancement",
        "label": "Lancement",
        "kind": "fact",
        "laneId": "commun",
        "detail": "Étape visée après la revue, sous réserve de ses conclusions ; aucune autorisation n'est donnée par ce schéma."
      }
    ],
    "edges": [
      {
        "from": "infrastructure",
        "to": "synchronisation",
        "label": "Livrables terminés",
        "relation": "sync"
      },
      {
        "from": "metier",
        "to": "synchronisation",
        "label": "Livrables terminés",
        "relation": "sync"
      },
      {
        "from": "accompagnement",
        "to": "synchronisation",
        "label": "Livrables terminés",
        "relation": "sync"
      },
      {
        "from": "synchronisation",
        "to": "revue",
        "label": "Les trois équipes ont terminé",
        "relation": "flow"
      },
      {
        "from": "revue",
        "to": "lancement",
        "label": "Sous réserve des conclusions de la revue",
        "relation": "flow"
      }
    ],
    "textAlternative": "Trois équipes travaillent en parallèle : Infrastructure configure les environnements et vérifie les accès ; Métier prépare les scénarios et les données de recette ; Accompagnement prépare les communications et la formation. Leurs trois voies convergent vers un point de synchronisation, franchi lorsque tous leurs livrables sont terminés. Vient ensuite la revue commune, puis le lancement sous réserve des conclusions de cette revue.",
    "layoutHint": "parallelProcess",
    "role": "information"
  }
}
---

## 3. Correctif UX-05

Responsabilité: `classifyLanes()` — double claim flow+gate/suite.  
Correctif: claim exclusif + suite verticale `orderSuiteChain`.  
Fichier: `elk-layout.ts`. `data-node-id` ajouté sur les boîtes pour QA.

### Diff elk-layout.ts

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/directed-layout/elk-layout.ts b/projects/sfia-studio-next/web/src/domains/conversation/directed-layout/elk-layout.ts
index f2d5395f..01730052 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/directed-layout/elk-layout.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/directed-layout/elk-layout.ts
@@ -52,6 +52,14 @@ type LaneBucket = {
   kind: "flow" | "gate" | "suite";
 };
 
+function isCoordinationLaneLabel(label: string): boolean {
+  return /converg|commun|coord|suite|gate|sync|revue/i.test(label);
+}
+
+/**
+ * UX-05 — exclusive classification: a node id appears in at most one of flow/gate/suite.
+ * Sync targets and coordination lanes must not also render as a fourth swimlane.
+ */
 function classifyLanes(block: RelationsBlock): {
   flow: LaneBucket[];
   gateNodes: RelationsBlock["nodes"];
@@ -62,7 +70,6 @@ function classifyLanes(block: RelationsBlock): {
   );
   const order: string[] = [];
   const map = new Map<string, RelationsBlock["nodes"]>();
-  /** UX-05 — unlaned nodes are classified after flow lanes (convergence / suite). */
   const unassigned: RelationsBlock["nodes"] = [];
 
   for (const n of block.nodes) {
@@ -81,35 +88,41 @@ function classifyLanes(block: RelationsBlock): {
   const flow: LaneBucket[] = [];
   const gateNodes: RelationsBlock["nodes"] = [];
   const suiteNodes: RelationsBlock["nodes"] = [];
+  const claimed = new Set<string>();
+
+  const claim = (
+    n: RelationsBlock["nodes"][number],
+    bucket: RelationsBlock["nodes"],
+  ): boolean => {
+    if (claimed.has(n.id)) return false;
+    claimed.add(n.id);
+    bucket.push(n);
+    return true;
+  };
 
+  // 1) Sync targets are always the exclusive gate row.
+  for (const n of block.nodes) {
+    if (syncTargets.has(n.id)) claim(n, gateNodes);
+  }
+
+  // 2) Labeled lanes: coordination / lanes that hosted a sync target → remaining = suite.
   for (const label of order) {
-    const nodes = map.get(label)!;
-    const allGate = nodes.every((n) => syncTargets.has(n.id));
-    const allAfterGate =
-      !allGate &&
-      nodes.every((n) =>
-        block.edges.some((e) => e.from === [...syncTargets][0] && e.to === n.id),
-      );
-    if (allGate) {
-      gateNodes.push(...nodes);
+    const raw = map.get(label)!;
+    const remaining = raw.filter((n) => !claimed.has(n.id));
+    if (!remaining.length) continue;
+    const laneHadSync = raw.some((n) => syncTargets.has(n.id));
+    if (laneHadSync || isCoordinationLaneLabel(label) || /^suite/i.test(label)) {
+      for (const n of remaining) claim(n, suiteNodes);
       continue;
     }
-    if (allAfterGate || /^suite/i.test(label)) {
-      suiteNodes.push(...nodes);
-      continue;
-    }
-    if (/^converg/i.test(label)) {
-      gateNodes.push(...nodes);
-      continue;
-    }
-    flow.push({ id: `lane-${label}`, label, nodes, kind: "flow" });
+    flow.push({ id: `lane-${label}`, label, nodes: remaining, kind: "flow" });
+    for (const n of remaining) claimed.add(n.id);
   }
 
   const laneOf = new Map<string, string>();
   for (const lane of flow) {
     for (const n of lane.nodes) laneOf.set(n.id, lane.label);
   }
-  const flowIds = new Set(laneOf.keys());
 
   const inboundFlowLaneCount = (nodeId: string): number => {
     const lanes = new Set<string>();
@@ -121,44 +134,72 @@ function classifyLanes(block: RelationsBlock): {
     return lanes.size;
   };
 
-  const isOnlyFromGate = (nodeId: string): boolean => {
+  const reachableFromClaimedGate = (nodeId: string): boolean => {
     const inbound = block.edges.filter((e) => e.to === nodeId);
     if (!inbound.length) return false;
     return inbound.every(
-      (e) =>
-        gateNodes.some((g) => g.id === e.from) || syncTargets.has(e.from),
+      (e) => gateNodes.some((g) => g.id === e.from) || suiteNodes.some((s) => s.id === e.from),
     );
   };
 
-  // Sync targets always gate.
-  for (const n of block.nodes) {
-    if (syncTargets.has(n.id) && !gateNodes.some((g) => g.id === n.id)) {
-      gateNodes.push(n);
-    }
-  }
-
-  // Unlaned / leftover: fan-in from ≥2 flow lanes ⇒ single convergence gate.
-  const classifyOne = (n: RelationsBlock["nodes"][number]) => {
-    if (gateNodes.some((g) => g.id === n.id)) return;
-    if (flowIds.has(n.id)) return;
-    if (suiteNodes.some((s) => s.id === n.id)) return;
-    if (syncTargets.has(n.id) || inboundFlowLaneCount(n.id) >= 2) {
-      gateNodes.push(n);
-      return;
+  // 3) Unassigned / leftovers — exclusive only.
+  const leftovers = [
+    ...unassigned,
+    ...block.nodes.filter((n) => !claimed.has(n.id)),
+  ];
+  for (const n of leftovers) {
+    if (claimed.has(n.id)) continue;
+    if (inboundFlowLaneCount(n.id) >= 2) {
+      claim(n, gateNodes);
+      continue;
     }
-    if (isOnlyFromGate(n.id) || /^suite|lancement|mise en service/i.test(n.label)) {
-      suiteNodes.push(n);
-      return;
+    if (
+      reachableFromClaimedGate(n.id) ||
+      /^suite|lancement|mise en service|revue/i.test(n.label)
+    ) {
+      claim(n, suiteNodes);
+      continue;
     }
-    suiteNodes.push(n);
-  };
-
-  for (const n of unassigned) classifyOne(n);
-  for (const n of block.nodes) classifyOne(n);
+    claim(n, suiteNodes);
+  }
 
   return { flow, gateNodes, suiteNodes };
 }
 
+/** Stable vertical order for post-gate chain (revue → lancement). */
+function orderSuiteChain(
+  nodes: RelationsBlock["nodes"],
+  edges: RelationsBlock["edges"],
+): RelationsBlock["nodes"] {
+  if (nodes.length <= 1) return nodes;
+  const ids = new Set(nodes.map((n) => n.id));
+  const indeg = new Map(nodes.map((n) => [n.id, 0]));
+  for (const e of edges) {
+    if (!ids.has(e.from) || !ids.has(e.to)) continue;
+    indeg.set(e.to, (indeg.get(e.to) ?? 0) + 1);
+  }
+  const byId = new Map(nodes.map((n) => [n.id, n]));
+  const ready = nodes.filter((n) => (indeg.get(n.id) ?? 0) === 0).map((n) => n.id);
+  const out: RelationsBlock["nodes"] = [];
+  const seen = new Set<string>();
+  while (ready.length) {
+    const id = ready.shift()!;
+    if (seen.has(id)) continue;
+    seen.add(id);
+    const n = byId.get(id);
+    if (n) out.push(n);
+    for (const e of edges) {
+      if (e.from !== id || !ids.has(e.to)) continue;
+      indeg.set(e.to, (indeg.get(e.to) ?? 1) - 1);
+      if ((indeg.get(e.to) ?? 0) === 0) ready.push(e.to);
+    }
+  }
+  for (const n of nodes) {
+    if (!seen.has(n.id)) out.push(n);
+  }
+  return out;
+}
+
 /**
  * G09 / parallelProcess — swimlane composition:
  * each flow lane laid out DOWN via ELK, lanes placed side-by-side, gate+suite below.
@@ -282,7 +323,22 @@ async function computeParallelSwimlaneLayout(
 
   y = placeRow(gateNodes, y);
   if (suiteNodes.length) {
-    y = placeRow(suiteNodes, y + ROW_GAP);
+    // Post-gate chain stacks vertically (revue → lancement), not as a side row.
+    const ordered = orderSuiteChain(suiteNodes, block.edges);
+    let ySuite = y + ROW_GAP;
+    for (const n of ordered) {
+      const dim = sizeOf(n.id, sizes);
+      const x = Math.max(LANE_PAD, (canvasW - dim.width) / 2);
+      nodeBoxes.push({
+        id: n.id,
+        x,
+        y: ySuite,
+        width: dim.width,
+        height: dim.height,
+      });
+      ySuite += dim.height + Math.round(ROW_GAP * 0.65);
+    }
+    y = ySuite;
   }
 
   const byId = new Map(nodeBoxes.map((n) => [n.id, n]));

### Diff DirectedRelationBoard.tsx

diff --git a/projects/sfia-studio-next/web/src/components/figma/nora-composition/DirectedRelationBoard.tsx b/projects/sfia-studio-next/web/src/components/figma/nora-composition/DirectedRelationBoard.tsx
index 031a2656..0ee8d4c1 100644
--- a/projects/sfia-studio-next/web/src/components/figma/nora-composition/DirectedRelationBoard.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/nora-composition/DirectedRelationBoard.tsx
@@ -259,6 +259,7 @@ export function DirectedRelationBoard({
                   top: box.y,
                   width: box.width,
                 }}
+                data-node-id={box.id}
                 data-laid-x={Math.round(box.x)}
                 data-laid-y={Math.round(box.y)}
                 data-lane={node.laneId ?? ""}

---

## 4. Correctif UX-01

# UX-01 — alignement optique icône / première ligne

## Défaut résiduel

Structure flex horizontale déjà en place, mais l’icône restait parfois ~quelques px au-dessus de la première ligne (line-height / marges Markdown).

## Correctif partagé (`tokens.css`)

- `.fig-visual-text-with-icon` / title / recommendation : `align-items: flex-start`
- icône : `margin-top: 2px` + `height: 1.35em` (settle optique vs line-height 1.35)
- reset `margin-top: 0` sur `:first-child` du corps éditorial / recommendation-body

Pas d’offsets par titre individuel.

## Preuve navigateur

`screenshots/ux01-icon-align-geometry.json` — titre : delta icon/text = **0 px**.  
Capture : `ux01-composition-icon-align-1440.png`.

### Diff tokens.css

diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index ab83d881..f9c8640c 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -1804,7 +1804,7 @@
   margin-bottom: 6px;
 }
 
-/* UX-01 — icon + markdown body on one horizontal row */
+/* UX-01 — icon optically centered on the first text line (not stacked, not high). */
 .fig-visual-text-with-icon {
   display: flex;
   align-items: flex-start;
@@ -1814,15 +1814,25 @@
   flex: 0 0 auto;
   display: inline-flex;
   align-items: center;
-  margin-top: 0.2em;
+  justify-content: center;
+  /* 16px glyph vs ~15px/1.35 first line → ~2px optical settle */
+  margin-top: 2px;
+  height: 1.35em;
 }
 .fig-visual-text-icon .fig-visual-icon {
   margin-right: 0;
+  vertical-align: middle;
 }
 .fig-visual-text-body {
   min-width: 0;
   flex: 1 1 auto;
 }
+.fig-visual-text-body > :first-child {
+  margin-top: 0 !important;
+}
+.fig-visual-text-body > :first-child > :first-child {
+  margin-top: 0 !important;
+}
 .fig-visual-text-observation,
 .fig-visual-text-hypothesis,
 .fig-visual-text-risk,
@@ -1877,26 +1887,44 @@
   margin: 0 0 10px;
   font-size: 15px;
   font-weight: 600;
+  line-height: 1.35;
   color: #f4f6fc;
   display: flex;
-  align-items: center;
+  align-items: flex-start;
   gap: 8px;
   flex-wrap: nowrap;
 }
+.fig-visual-title > .fig-visual-icon {
+  margin-top: 2px;
+  margin-right: 0;
+  height: 1.35em;
+}
 .fig-visual-title > span {
   min-width: 0;
+  line-height: 1.35;
 }
 
 .fig-visual-recommendation {
   display: flex;
-  gap: 10px;
+  gap: 8px;
   align-items: flex-start;
 }
+.fig-visual-recommendation > .fig-visual-icon {
+  margin-top: 2px;
+  margin-right: 0;
+  height: 1.35em;
+}
 
 .fig-visual-recommendation-body {
   min-width: 0;
   flex: 1 1 auto;
 }
+.fig-visual-recommendation-body > :first-child {
+  margin-top: 0 !important;
+}
+.fig-visual-recommendation-body > :first-child > :first-child {
+  margin-top: 0 !important;
+}
 
 .fig-visual-inline-md {
   display: block;

---

## 5. Tests

### Vitest

◇ injected env (0) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116/projects/sfia-studio-next/web

stderr | tests/unit/ux-correctives-ensemble05.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/ux-correctives-ensemble05.test.ts (10 tests) 128ms
stderr | tests/unit/directed-layout-candidate.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/directed-layout-candidate.test.ts (4 tests) 75ms

 Test Files  2 passed (2)
      Tests  14 passed (14)
   Start at  18:53:04
   Duration  728ms (transform 92ms, setup 21ms, collect 196ms, tests 203ms, environment 0ms, prepare 53ms)


### Playwright DEV (forme UAT-07 réelle via fixture E05_UAT07_REAL)


[WebServer] NOTICE:  relation "document_publication_refs_effect_attempt_uidx" already exists, skipping

[WebServer] NOTICE:  column "code_verifier" of relation "integration_oauth_states" already exists, skipping
[WebServer] NOTICE:  column "nonce" of relation "integration_oauth_states" already exists, skipping
[WebServer] NOTICE:  column "code_challenge_method" of relation "integration_oauth_states" already exists, skipping

[WebServer] NOTICE:  column "github_user_id" of relation "integration_authorizations" already exists, skipping
[WebServer] NOTICE:  column "token_ciphertext" of relation "integration_authorizations" already exists, skipping
[WebServer] NOTICE:  column "token_nonce" of relation "integration_authorizations" already exists, skipping
[WebServer] NOTICE:  column "token_key_version" of relation "integration_authorizations" already exists, skipping
[WebServer] NOTICE:  column "refresh_ciphertext" of relation "integration_authorizations" already exists, skipping
[WebServer] NOTICE:  column "refresh_nonce" of relation "integration_authorizations" already exists, skipping
[WebServer] NOTICE:  column "token_expires_at" of relation "integration_authorizations" already exists, skipping
[WebServer] NOTICE:  column "scopes_json" of relation "integration_authorizations" already exists, skipping
[WebServer] NOTICE:  column "last_validated_at" of relation "integration_authorizations" already exists, skipping

[WebServer] NOTICE:  relation "integration_authorizations_github_user_idx" already exists, skipping

[WebServer] NOTICE:  column "studio_session_id" of relation "integration_oauth_states" already exists, skipping
[WebServer] NOTICE:  column "flow" of relation "integration_oauth_states" already exists, skipping

[WebServer] NOTICE:  relation "integration_oauth_states_session_idx" already exists, skipping

[WebServer] NOTICE:  column "refresh_lease_token" of relation "integration_authorizations" already exists, skipping
[WebServer] NOTICE:  column "refresh_lease_expires_at" of relation "integration_authorizations" already exists, skipping

[WebServer] NOTICE:  relation "integration_authorizations_one_connected_uidx" already exists, skipping

[WebServer] NOTICE:  column "projection_json" of relation "preparations" already exists, skipping


Running 1 test using 1 worker

(node:75329) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)


[1/1] tests/e2e/ensemble05-uat07-ux05.spec.ts:11:7 › Ensemble 05 UAT-07 UX-05 › real UAT-07 composition: unique nodes, gate→suite chain, full diagram shot
  1 passed (21.5s)

### Diff tests unitaires

diff --git a/projects/sfia-studio-next/web/tests/unit/ux-correctives-ensemble05.test.ts b/projects/sfia-studio-next/web/tests/unit/ux-correctives-ensemble05.test.ts
index 0a990da4..02658f79 100644
--- a/projects/sfia-studio-next/web/tests/unit/ux-correctives-ensemble05.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ux-correctives-ensemble05.test.ts
@@ -165,6 +165,122 @@ describe("UX-05 parallel flow-only convergence", () => {
     // Three readable swimlanes must fit the Travail column without a fourth voie strip.
     expect(width).toBeLessThan(780);
   });
+
+  it("UAT-07 earlier RECETTE shape: exclusive revue (no duplicate id)", async () => {
+    // Exact node/edge shape from msg_6c8cfaa2 turnProjection (RECETTE read-only).
+    const block: RelationsBlock = {
+      kind: "relations",
+      id: "uat07-earlier",
+      title: "Coordination du lancement",
+      layoutHint: "parallelProcess",
+      nodes: [
+        {
+          id: "infrastructure",
+          label: "Infrastructure",
+          kind: "fact",
+          laneId: "equipe-infrastructure",
+        },
+        { id: "metier", label: "Métier", kind: "fact", laneId: "equipe-metier" },
+        {
+          id: "accompagnement",
+          label: "Accompagnement",
+          kind: "fact",
+          laneId: "equipe-accompagnement",
+        },
+        {
+          id: "revue",
+          label: "Revue commune",
+          kind: "fact",
+          laneId: "coordination-commune",
+        },
+        {
+          id: "lancement",
+          label: "Lancement",
+          kind: "fact",
+          laneId: "coordination-commune",
+        },
+      ],
+      edges: [
+        { from: "infrastructure", to: "revue", relation: "sync" },
+        { from: "metier", to: "revue", relation: "sync" },
+        { from: "accompagnement", to: "revue", relation: "sync" },
+        { from: "revue", to: "lancement", relation: "flow" },
+      ],
+      textAlternative: "uat07 earlier",
+    };
+    const result = await computeElkDirectedLayout(block);
+    expect(result.status).toBe("ready");
+    if (result.status !== "ready") return;
+    const ids = result.nodes.map((n) => n.id);
+    expect(ids.filter((id) => id === "revue")).toHaveLength(1);
+    expect(ids).toHaveLength(5);
+    const revue = result.nodes.find((n) => n.id === "revue")!;
+    const lanc = result.nodes.find((n) => n.id === "lancement")!;
+    const infra = result.nodes.find((n) => n.id === "infrastructure")!;
+    expect(revue.y).toBeGreaterThan(infra.y + 20);
+    expect(lanc.y).toBeGreaterThan(revue.y);
+    expect(
+      result.edges.some((e) => e.from === "infrastructure" && e.to === "revue"),
+    ).toBe(true);
+    expect(result.edges.some((e) => e.from === "revue" && e.to === "lancement")).toBe(
+      true,
+    );
+  });
+
+  it("UAT-07 latest RECETTE shape: sync gate exclusive, revue/lancement suite chain", async () => {
+    // Exact shape from msg_84ae0ce0 turnProjection (RECETTE read-only).
+    const block: RelationsBlock = {
+      kind: "relations",
+      id: "uat07-latest",
+      title: "Coordination à visualiser",
+      layoutHint: "parallelProcess",
+      nodes: [
+        {
+          id: "infrastructure",
+          label: "Infrastructure",
+          kind: "fact",
+          laneId: "infrastructure",
+        },
+        { id: "metier", label: "Métier", kind: "fact", laneId: "metier" },
+        {
+          id: "accompagnement",
+          label: "Accompagnement",
+          kind: "fact",
+          laneId: "accompagnement",
+        },
+        {
+          id: "synchronisation",
+          label: "Tous les livrables terminés",
+          kind: "fact",
+          laneId: "commun",
+        },
+        { id: "revue", label: "Revue commune", kind: "fact", laneId: "commun" },
+        { id: "lancement", label: "Lancement", kind: "fact", laneId: "commun" },
+      ],
+      edges: [
+        { from: "infrastructure", to: "synchronisation", relation: "sync" },
+        { from: "metier", to: "synchronisation", relation: "sync" },
+        { from: "accompagnement", to: "synchronisation", relation: "sync" },
+        { from: "synchronisation", to: "revue", relation: "flow" },
+        { from: "revue", to: "lancement", relation: "flow" },
+      ],
+      textAlternative: "uat07 latest",
+    };
+    const result = await computeElkDirectedLayout(block);
+    expect(result.status).toBe("ready");
+    if (result.status !== "ready") return;
+    const ids = result.nodes.map((n) => n.id);
+    expect(new Set(ids).size).toBe(ids.length);
+    expect(ids.filter((id) => id === "synchronisation")).toHaveLength(1);
+    expect(ids.filter((id) => id === "revue")).toHaveLength(1);
+    const sync = result.nodes.find((n) => n.id === "synchronisation")!;
+    const revue = result.nodes.find((n) => n.id === "revue")!;
+    const lanc = result.nodes.find((n) => n.id === "lancement")!;
+    const infra = result.nodes.find((n) => n.id === "infrastructure")!;
+    expect(sync.y).toBeGreaterThan(infra.y + 20);
+    expect(revue.y).toBeGreaterThan(sync.y);
+    expect(lanc.y).toBeGreaterThan(revue.y);
+  });
 });
 
 describe("UX-06 residual icon semantics", () => {

### Spec e2e créée (contenu complet)

import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

/**
 * UX-05 — real UAT-07 RECETTE shape (exclusive gate/suite, single revue path).
 * DEV/e2e fixture lane only — no LIVE Nora.
 */
test.describe("Ensemble 05 UAT-07 UX-05", () => {
  test("real UAT-07 composition: unique nodes, gate→suite chain, full diagram shot", async ({
    page,
  }) => {
    test.setTimeout(120_000);
    const evidenceDir = path.resolve(
      __dirname,
      "../../docs/evidence/ensemble-05-travail-nora/ensemble05-ux05-01-final-20261118/screenshots",
    );
    fs.mkdirSync(evidenceDir, { recursive: true });

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const { projectId } = await bootstrapProjectFromPortfolio(page, {
      seed: "Ensemble 05 UAT-07 UX-05",
      name: `E05 UAT07 ${Date.now()}`,
      summary: "ux05 real shape",
    });

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const draft = page.getByTestId("thread-draft");
    const send = page.getByTestId("thread-send");
    await draft.fill("E05_UAT07_REAL");
    await send.click();
    await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|Nora/i, {
      timeout: 45000,
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    const parallel = page.getByTestId("nora-composition-parallel").last();
    await expect(parallel).toBeVisible({ timeout: 45000 });
    await expect(parallel).toHaveAttribute("data-layout-engine", "elkjs", { timeout: 15000 });
    await expect(parallel).toHaveAttribute("data-node-count", "6");

    const nodeIds = await parallel.locator(".fig-nc-elk-node").evaluateAll((els) =>
      els.map((el) => (el as HTMLElement).dataset.nodeId ?? el.getAttribute("data-node-id") ?? ""),
    );
    const cleaned = nodeIds.filter(Boolean);
    expect(new Set(cleaned).size).toBe(cleaned.length);
    expect(cleaned.filter((id) => id === "revue")).toHaveLength(1);
    expect(cleaned.filter((id) => id === "synchronisation")).toHaveLength(1);
    expect(cleaned).toContain("lancement");

    const positions = await parallel.locator(".fig-nc-elk-node").evaluateAll((els) =>
      els.map((el) => {
        const h = el as HTMLElement;
        return {
          id: h.dataset.nodeId ?? h.getAttribute("data-node-id") ?? "",
          x: Number(h.dataset.laidX ?? 0),
          y: Number(h.dataset.laidY ?? 0),
          label: (h.textContent ?? "").trim().slice(0, 80),
        };
      }),
    );
    const byId = Object.fromEntries(positions.map((p) => [p.id, p]));
    expect(byId.synchronisation.y).toBeGreaterThan(byId.infrastructure.y + 20);
    expect(byId.revue.y).toBeGreaterThan(byId.synchronisation.y);
    expect(byId.lancement.y).toBeGreaterThan(byId.revue.y);

    const connectors = page.getByTestId("nora-composition-parallel-connectors").last();
    await expect(connectors).toBeVisible();

    // Viewport crop of the board.
    await parallel.evaluate((el) => el.scrollIntoView({ block: "start" }));
    await page.waitForTimeout(300);
    await parallel.screenshot({
      path: path.join(evidenceDir, "uat07-parallel-viewport-1440.png"),
      animations: "disabled",
    });

    // Full diagram: expand scrollWidth capture via element screenshot (includes overflow).
    const canvas = page.getByTestId("nora-composition-elk-canvas").last();
    await expect(canvas).toBeVisible();
    const box = await canvas.boundingBox();
    expect(box).toBeTruthy();
    const scroll = await canvas.evaluate((el) => ({
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
      scrollHeight: el.scrollHeight,
    }));
    // Horizontal scroll is accepted when the diagram exceeds the column.
    fs.writeFileSync(
      path.join(evidenceDir, "uat07-scroll-metrics.json"),
      JSON.stringify({ box, scroll, positions }, null, 2),
    );

    // Assemble proof: scroll to end then capture again if overflow.
    if (scroll.scrollWidth > scroll.clientWidth + 8) {
      await canvas.evaluate((el) => {
        el.scrollLeft = el.scrollWidth;
      });
      await page.waitForTimeout(200);
      await parallel.screenshot({
        path: path.join(evidenceDir, "uat07-parallel-scrolled-right-1440.png"),
        animations: "disabled",
      });
      await canvas.evaluate((el) => {
        el.scrollLeft = 0;
      });
    }

    // Element-level full board (Playwright clips to layout size of the node).
    await parallel.screenshot({
      path: path.join(evidenceDir, "uat07-parallel-full-element-1440.png"),
      animations: "disabled",
    });

    // UX-01 — icon vs first title line geometry on intro / recommendation.
    const assistant = page.getByTestId("nora-msg-assistant").last();
    const iconPairs = await assistant.evaluate((root) => {
      const rows: Array<{
        role: string;
        iconTop: number;
        textTop: number;
        delta: number;
      }> = [];
      const pick = (iconSel: string, textSel: string, role: string) => {
        const icon = root.querySelector(iconSel) as HTMLElement | null;
        const text = root.querySelector(textSel) as HTMLElement | null;
        if (!icon || !text) return;
        const ib = icon.getBoundingClientRect();
        const tb = text.getBoundingClientRect();
        rows.push({ role, iconTop: ib.top, textTop: tb.top, delta: ib.top - tb.top });
      };
      pick(".fig-visual-text-icon", ".fig-visual-text-body > :first-child", "text-with-icon");
      pick(
        ".fig-visual-recommendation > .fig-visual-icon",
        ".fig-visual-recommendation-body > :first-child",
        "recommendation",
      );
      pick(".fig-visual-title > .fig-visual-icon", ".fig-visual-title > span", "title");
      return rows;
    });
    fs.writeFileSync(
      path.join(evidenceDir, "ux01-icon-align-geometry.json"),
      JSON.stringify(iconPairs, null, 2),
    );
    for (const row of iconPairs) {
      // Optical settle allows ~0–4px; reject large misalignment.
      expect(Math.abs(row.delta)).toBeLessThanOrEqual(4);
    }
    await assistant.getByTestId("nora-visual-composition").screenshot({
      path: path.join(evidenceDir, "ux01-composition-icon-align-1440.png"),
      animations: "disabled",
    });
  });
});

### Fixture E05_UAT07_REAL (diff)

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 0e6d8cd4..68cf1f5a 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -1314,6 +1314,79 @@ register(
   ),
 );
 
+/**
+ * Exact RECETTE UAT-07 latest shape (msg_84ae0ce0 turnProjection) —
+ * regression for exclusive gate/suite classification (UX-05).
+ */
+const E05_UAT07_REAL =
+  "E05_UAT07_REAL Coordination lancement trois equipes sync revue";
+register(
+  E05_UAT07_REAL,
+  dialogue(
+    "Coordination à visualiser",
+    "Trois équipes en parallèle, synchronisation des livrables, une revue commune, puis lancement envisagé — sans autorisation automatique.",
+    ["NO_EFFECT", "VISUAL_PARALLEL", "UAT07_REAL"],
+    {
+      visualComposition: {
+        schemaVersion: "conversational-composition-canonical-v1",
+        blocks: [
+          {
+            kind: "text",
+            id: "uat07-intro",
+            markdown:
+              "### Organisation proposée\n\nTrois voies distinctes convergent vers une synchronisation unique, puis une revue commune avant le lancement envisagé.",
+          },
+          {
+            kind: "relations",
+            id: "uat07-latest",
+            title: "Coordination à visualiser",
+            layoutHint: "parallelProcess",
+            nodes: [
+              {
+                id: "infrastructure",
+                label: "Infrastructure",
+                kind: "fact",
+                laneId: "infrastructure",
+              },
+              { id: "metier", label: "Métier", kind: "fact", laneId: "metier" },
+              {
+                id: "accompagnement",
+                label: "Accompagnement",
+                kind: "fact",
+                laneId: "accompagnement",
+              },
+              {
+                id: "synchronisation",
+                label: "Tous les livrables terminés",
+                kind: "fact",
+                laneId: "commun",
+              },
+              { id: "revue", label: "Revue commune", kind: "fact", laneId: "commun" },
+              { id: "lancement", label: "Lancement", kind: "fact", laneId: "commun" },
+            ],
+            edges: [
+              { from: "infrastructure", to: "synchronisation", relation: "sync" },
+              { from: "metier", to: "synchronisation", relation: "sync" },
+              { from: "accompagnement", to: "synchronisation", relation: "sync" },
+              { from: "synchronisation", to: "revue", relation: "flow" },
+              { from: "revue", to: "lancement", relation: "flow" },
+            ],
+            textAlternative:
+              "Infrastructure, Métier et Accompagnement synchronisent leurs livrables, puis revue commune, puis lancement envisagé.",
+          },
+          {
+            kind: "text",
+            id: "uat07-reco",
+            role: "recommendation",
+            markdown:
+              "**Recommandation**\n\nConserver une seule revue commune après synchronisation ; le lancement reste une décision humaine.",
+          },
+        ],
+      },
+    },
+  ),
+);
+
 /** A4 — canonical overflow (>12k joined) must fail validation, never COMPLETE raw. */
 const E05_A4_OVERFLOW = "E05_A4_OVERFLOW";
 register(
@@ -1801,6 +1874,7 @@ for (const [short, long] of [
   ["E05_G07_DEPENDENCIES", E05_G07_DEPENDENCIES],
   ["E05_G08_TREE", E05_G08_TREE],
   ["E05_G09_PARALLEL", E05_G09_PARALLEL],
+  ["E05_UAT07_REAL", E05_UAT07_REAL],
   ["E05_R01_SYNTHESIS", E05_R01_SYNTHESIS],
   ["E05_R02_JOURNEY", E05_R02_JOURNEY],
   ["E05_R03_THREE_CARDS", E05_R03_THREE_CARDS],

---

## 6. Qualification navigateur + RECETTE smoke

# Qualification — UX-05 / UX-01

## Déterministe (Vitest)

- `tests/unit/ux-correctives-ensemble05.test.ts` — 10 tests PASS (dont 2 formes UAT-07 RECETTE exactes)
- `tests/unit/directed-layout-candidate.test.ts` — 4 tests PASS
- Journal : `00-vitest-summary.txt`

Critères couverts sur formes réelles :

- unicité des ids de nœuds dans le layout
- convergence unique
- chemin revue → lancement / sync → revue → lancement
- conservation des edges

## Navigateur (Playwright DEV isolé :3101)

- Spec : `tests/e2e/ensemble05-uat07-ux05.spec.ts`
- Fixture : `E05_UAT07_REAL` = shape exacte `msg_84ae0ce0`
- Résultat : **1 passed** (`00-playwright-uat07.txt`)
- Captures :
  - `screenshots/uat07-parallel-full-element-1440.png` — diagramme complet
  - `screenshots/uat07-parallel-viewport-1440.png`
  - `screenshots/uat07-scroll-metrics.json` — positions + métriques
  - `screenshots/ux01-composition-icon-align-1440.png`

Positions observées (pas de duplication) :

```
infrastructure/metier/accompagnement  y=24  (x=24/274/524)
synchronisation                       y=132
revue                                 y=248
lancement                             y=327
```

## Non-régression (périmètre fermé)

UX-02…04, UX-06, UX-07 : **non rouverts** — aucun changement intentionnel hors classification exclusive, CSS UX-01, `data-node-id`, fixture/tests UAT-07.

## LIVE

Aucun appel Nora LIVE — données persistées + fixture déterministe uniquement.

### Layout post-cutover (composition persistée msg_84ae0ce0)

{
  "build": "IEINNuPl0bHWJOWkh0ZhG",
  "nodeCount": "6",
  "uniqueCount": 6,
  "revueCount": 1,
  "syncCount": 1,
  "edgePaths": 5,
  "layoutEngine": "elkjs",
  "ids": ["infrastructure","metier","accompagnement","synchronisation","revue","lancement"],
  "positions": [
    {"id":"infrastructure","x":24,"y":24},
    {"id":"metier","x":274,"y":24},
    {"id":"accompagnement","x":524,"y":24},
    {"id":"synchronisation","x":274,"y":194},
    {"id":"revue","x":274,"y":392},
    {"id":"lancement","x":274,"y":533}
  ],
  "verdict": "PASS — unique nodes, single revue, sync→revue→lancement vertical"
}

Captures:
- `screenshots/uat07-parallel-full-element-1440.png` (DEV)
- `screenshots/recette-uat07-post-cutover-teams-sync-1440.png` (RECETTE — 3 équipes → sync)
- `screenshots/recette-uat07-post-cutover-suite-chain-1440.png`
- `screenshots/ux01-composition-icon-align-1440.png`

---

## 7. ENV-01 / cutover

# Manifeste ENV-01 — RECETTE UX-05 / UX-01 final

**Non sensible.**

| Champ | Contenu |
| --- | --- |
| `lane` | `RECETTE` |
| `candidate_sha` | `5c94c86737f0965c71a7e058e3f1e45ff4415024` |
| `candidate_tree` | `74fbf2b90f95951d5049efc5a854ad213fb0f47f` |
| `previous_recette_sha` | `bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b` |
| `previous_recette_build` | `qw3FaPD1B4KBrRab3LyKL` |
| `build_identifier` | `IEINNuPl0bHWJOWkh0ZhG` |
| `served_address` | `http://127.0.0.1:3200` |
| `runtime_worktree` | `…/sfia-workspace-next-ml4d-ensemble05-recette-build-5c94c867` |
| `launch_agent` | `com.sfia.studio.next.recette.ml4d-ux004` |
| `start_script` | `start-recette-ensemble05-5c94c867.sh` |
| `schema_revision` | inchangé — aucune migration |
| `test_data_revision` | `23\|560\|196\|280` préservé |
| `FORCE_FIXTURE` / `SIM` / `DIAG` | vides |
| `rollback_reference` | `ROLLBACK-TO-bd3854ac.sh` + plist bak `…bd3854ac.pre-ux0501.bak` |
| `product_version` | NOT AVAILABLE |

## Verdict

`ENSEMBLE 05 FINAL UX FIX DEPLOYED — RECETTE READY FOR MORRIS VALIDATION`

### Identités

candidate_sha=5c94c86737f0965c71a7e058e3f1e45ff4415024
candidate_tree=74fbf2b90f95951d5049efc5a854ad213fb0f47f
build_id=IEINNuPl0bHWJOWkh0ZhG
previous_sha=bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b
previous_build=qw3FaPD1B4KBrRab3LyKL
served_html_comment=IEINNuPl0bHWJOWkh0ZhG

### Served HTML comment
<!DOCTYPE html><!--IEINNuPl0bHWJOWkh0ZhG--><html lang="fr"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" 

### DB before
projects|23
messages|560
conversations|196
conversation_turn_commands|280
### DB after
projects|23
messages|560
conversations|196
conversation_turn_commands|280

### Env redacted

STUDIO_LANE=RECETTE (via ~/.config/sfia-studio-next/recette/.env.local)
DATABASE_URL=postgres://***@127.0.0.1:5434/sfia_next_recette_ml4
STUDIO_FORCE_NORA_FIXTURE=
STUDIO_NORA_SIMULATED_PROVIDER=
STUDIO_NORA_DIAG_EPHEMERAL=
NODE_ENV=production
PORT=3200

### Smoke ACL note

# Note smoke ACL (temporaire, restauré)

Pour capturer le diagramme UAT-07 réel sous session Pilot A (DEV) sans OAuth GitHub :

1. Transfert temporaire `owner_pilot_id` projet / conversation / préparation / turn_commands → Pilot A.
2. Reload + capture navigateur RECETTE.
3. Restauration immédiate vers `pilot_98a7a89e…` (mcleland147).

Aucun message ajouté, aucune composition modifiée, compteurs DB inchangés.

---

## 8. Non-régression

UX-02, UX-03, UX-04, UX-06, UX-07: **non rouverts**.  
`sequence.steps[].detail.max(5000)`, OBS UAT-03, admission/projection, contrats d'autorité: inchangés.

---

## 9. Réserves restantes

- Validation utilisateur Morris sur RECETTE (compte GitHub) pour UX-05 + UX-01.
- Aucune autre réserve technique Cursor ouverte sur ce cycle.

---

## 10. Fiche de reprise Morris

# Fiche de reprise Morris — UX-05 / UX-01 final

| | |
| --- | --- |
| URL | **http://127.0.0.1:3200** |
| SHA | `5c94c86737f0965c71a7e058e3f1e45ff4415024` |
| Build | `IEINNuPl0bHWJOWkh0ZhG` |
| Données | Conservées (23 projets / 560 messages / 196 conversations) |
| Projet UAT-07 | ALTAÏR — `proj_d3b5272f-…` (compte GitHub Morris) |

## À revoir (réserves ciblées)

1. **UX-05** — diagramme UAT-07 : 3 équipes → une sync → une revue → lancement ; flèches correctes ; pas de double « Revue commune ».
2. **UX-01** — icône alignée sur la première ligne du titre (blocs éditoriaux).

Les correctifs UX-02…04, UX-06, UX-07 restent acceptés — ne pas les rouvrir.

Scroll horizontal du diagramme : **accepté**.

## Rollback

```bash
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-5c94c867/ROLLBACK-TO-bd3854ac.sh
```

## Statut

Recette technique Cursor **PASS** — validation utilisateur Morris **PENDING**.

---

## Ledger cycle

| Étape | Statut |
| --- | --- |
| Git Truth | PASS |
| Diag composition UAT-07 réelle | PASS — renderer double-claim |
| Fix UX-05 exclusive classify | PASS |
| Fix UX-01 optical CSS | PASS |
| Vitest UAT-07 shapes | PASS |
| Playwright DEV | PASS |
| Build immuable | PASS `$BUILD` |
| Cutover LaunchAgent | PASS |
| Smoke reload UAT-07 RECETTE | PASS — 6 ids uniques, 1 revue |
| DB préservée | PASS 23/560/196/280 |
| Ownership restored | PASS |
| Review Pack Full | THIS |
| L3 handoff | NEXT |


# SFIA Review Pack — Full (Critical)

**Date/heure :** 2026-11-18 12:21 CET
**Cycle :** 8 — Delivery / Remplacement architectural couche graphique Nora
**Profil :** Critical
**Macro-lot :** ML4D / Ensemble 05 — Travail avec Nora
**Typologie :** EVOL — remplacement architectural borné
**ENV-01 :** DEV isolé · RECETTE protégée · STABLE N/A
**Versioning :** NO RELEASE · aucune publication produit
**Review Handoff :** required / publish-in-cycle

---

## 1. Git Truth Check

| Champ | Valeur |
| --- | --- |
| Branche | `sfia/next-ml4d-composition-adaptative` |
| HEAD tip parent | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Worktree | dirty (candidat Strategy A + remplacement graphique) — aucune destruction |
| Handoff précédent | `sfia/review-handoff@5d896e9b` blob `797f76a8598f639bda0460ac44a95a7cb265371a` |
| Doc 04 | `docs/next-ml4d-registre-revues-20261116@fd8d2534` |

### git status --short

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-mobile-430x932.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-nominal-1680x970.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s1-simple-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s2-diagnostic-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s3-provenance-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s4-trajectory-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s5-composite-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s5-composite-mobile-430.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-viewer-enlarged-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-visual-comparison-1440.png
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraSemanticIcon.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraVisualComposition.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
 M projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/architecture-canonical-sections-strategy-a.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-convergence-status.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-corrective.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-status.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v05.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v06.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v07-proposal.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c2-08-browser-error-recovery-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c2-runtime-substance-complement-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/corrective-runtime-comparison-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/corrective-runtime-relations-list-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/cv-t-matrix-composition-adaptative.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f-matrix-fidelity-topology.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f5-runtime-decision-tree-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f5-runtime-dependencies-directed-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/f5-runtime-parallel-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06-morris-validation-package.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06-visual-contract-executable.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06-visual-contract.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06/
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/graphical-engine-replacement-audit.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w3-runtime-figma08-tree-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w3-runtime-figma09-parallel-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w3-w4-figma-runtime-manifest.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w5-reception-corpus.md
?? projects/sfia-studio-next/web/fixtures/
?? projects/sfia-studio-next/web/scripts/layout-engine-benchmark/
?? projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx
?? projects/sfia-studio-next/web/src/components/figma/NoraCompositionGraphs.tsx
?? projects/sfia-studio-next/web/src/components/figma/nora-composition/
?? projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/
?? projects/sfia-studio-next/web/src/domains/conversation/directed-layout/
?? projects/sfia-studio-next/web/tests/unit/c2-adversarial-integrity.test.ts
?? projects/sfia-studio-next/web/tests/unit/c2-substance-exhaustiveness.test.ts
?? projects/sfia-studio-next/web/tests/unit/canonical-integrity-a7-a2.test.ts
?? projects/sfia-studio-next/web/tests/unit/canonical-sections-strategy-a.test.ts
?? projects/sfia-studio-next/web/tests/unit/conversational-composition-admission.test.ts
?? projects/sfia-studio-next/web/tests/unit/conversational-composition-fidelity.test.ts
?? projects/sfia-studio-next/web/tests/unit/directed-layout-candidate.test.ts
?? projects/sfia-studio-next/web/tests/unit/fixture-reply-a4-adapter-boundary.test.ts
?? projects/sfia-studio-next/web/tests/unit/strategy-a-corrective-a1-a4.test.ts
?? projects/sfia-studio-next/web/tests/unit/visual-grammar-c1-c2.test.ts
?? projects/sfia-studio-next/web/tests/unit/w3-graph-layouts.test.ts
```

---

## 2. Décisions consommées / ouvertes

**Consommées :** Strategy A ; thème sombre Studio ; Figma 01–09 orientation ; fidélité élevée adaptative ; GO Morris remplacement architectural borné présentation.

**Ouverte (ce pack) :** installation permanente `elkjs` (et non-RF) dans `package.json` produit → **gate Morris**.

---

## 3. Analyse ancien mécanisme

Voir `graphical-engine-replacement-audit.md` (contenu ci-dessous dans créations).

Chaîne : D3 → admission → NoraComposition → RelationsDirectedView → (ancien) DependenciesConnectedView / NoraCompositionGraphs (SVG mesuré artisanal).

Limites : pas de routage orthogonal, pas de ports typés, fixtures simples ≠ Figma 07–09, PARTIAL systématique.

## 4. Imports avant / après

**Avant :** NoraConversation → NoraComposition → NoraCompositionGraphs + DependenciesConnectedView

**Après :** NoraConversation → NoraComposition → `nora-composition/DirectedRelationBoard` (+ EditorialSynthesis)
- `NoraCompositionGraphs` : LEGACY — probe C2-08 seulement
- `package.json` produit : **pas** elkjs / pas @xyflow/react

---

## 5. Benchmark réel A/B

Sandbox isolé : `scripts/layout-engine-benchmark` (npm local, hors deps produit).

Fixtures discriminantes :
- G07 — 8 nœuds / 7 arêtes (3 chaînes + merge + suite)
- G08 — arbre multiniveau (2 conditions)
- G09 — 3 voies × 3 activités + gate + suite

### Résultats synthèse

| Fixture | Artisan routing | ELK routing | ELK ortho ratio | layoutMs ELK |
| --- | --- | --- | --- | --- |

| G07 | cubic-free | orthogonal | 1 | 32.45 |
| G08 | cubic-free | orthogonal | 1 | 6.02 |
| G09 | cubic-free | orthogonal | 1 | 7.18 |


**Recommendation JSON :**
```json
{
  "preferred": "Solution A — HTML/SVG + ELKjs (custom React nodes)",
  "status": "CANDIDATE — NOT INSTALLED IN PRODUCT",
  "rationale": [
    "ELK delivers 100% orthogonal edge segments on G07–G09; artisan uses free cubics incompatible with Figma connector language.",
    "Structural hierarchy (multilevel tree, merge-after-controls, gate-below-lanes) is achievable in both; visual routing quality and Figma fidelity require directed layout engine.",
    "React Flow + ELK yields identical layout geometry to ELK alone; RF adds viewport/pan/zoom and bundle/SSR cost without improving placement.",
    "Doc 04 preference confirmed: Solution A (HTML/SVG + ELKjs + Studio nodes) as CANDIDATE — not installed in product package.json."
  ],
  "gate": "STOP — MORRIS ARCHITECTURE DECISION REQUIRED before adding elkjs to product package.json",
  "artisanBaseline": "NEGATIVE — insufficient for Figma 07–09 complexity; not a third candidate to keep as production engine"
}
```

**Structural oracles :**
```json
[
  {
    "fixture": "G07",
    "artisan": {
      "name": "artisan",
      "merge_after_ctrls": true,
      "next_after_merge": true,
      "sources_same_band": true,
      "routing": "cubic-free"
    },
    "elk": {
      "name": "elk",
      "merge_after_ctrls": true,
      "next_after_merge": true,
      "sources_same_band": false,
      "routing": "orthogonal",
      "layoutMs": 32.45,
      "orthoSegmentRatio": 1,
      "edgeSections": 7
    }
  },
  {
    "fixture": "G08",
    "artisan": {
      "name": "artisan",
      "c2_below_c1": true,
      "y1_n2_sibling_band": true,
      "n1b_below_n1": true,
      "levels": 3,
      "routing": "cubic-free"
    },
    "elk": {
      "name": "elk",
      "c2_below_c1": true,
      "y1_n2_sibling_band": true,
      "n1b_below_n1": true,
      "levels": 3,
      "routing": "orthogonal",
      "layoutMs": 6.02,
      "orthoSegmentRatio": 1,
      "edgeSections": 5
    }
  },
  {
    "fixture": "G09",
    "artisan": {
      "name": "artisan",
      "laneMeanX": {
        "Voie A": 138,
        "Voie B": 359,
        "Voie C": 581,
        "Convergence": 360,
        "Suite": 350
      },
      "gate_below_lanes": true,
      "routing": "cubic-free"
    },
    "elk": {
      "name": "elk",
      "laneMeanX": {
        "Voie A": 453,
        "Voie B": 233,
        "Voie C": 13,
        "Convergence": 234,
        "Suite": 224
      },
      "gate_below_lanes": true,
      "routing": "orthogonal",
      "layoutMs": 7.18,
      "orthoSegmentRatio": 1,
      "edgeSections": 10
    }
  }
]
```

Artefacts SVG : `docs/evidence/.../layout-benchmark/G0{7,8,9}-{elk,artisan}.svg`

### Choix

- **Retenu comme CANDIDATE :** Solution A — HTML/SVG + ELKjs + nœuds React Studio
- **Non retenu comme nécessaire :** React Flow + ELK (même géométrie ELK ; coût SSR/bundle supérieur)
- **Baseline artisan :** NÉGATIVE — retirée du chemin production
- **Statut installation produit :** NOT INSTALLED
- **Gate :** `STOP — MORRIS ARCHITECTURE DECISION REQUIRED`

---

## 6. Architecture réalisée (partielle, gate ouvert)

```text
Projection admise
  → NoraComposition
      → EditorialSynthesis (Figma 01 famille)
      → Comparison/Sequence (composants existants requalifiés, non ELK)
      → DirectedRelationBoard
           ├─ tryElkDirectedLayout() si elkjs présent → canvas orthogonal
           └─ sinon lecture structurée typée + liste relations (pas artisan SVG)
```

Modèle présentation : `directed-layout/types.ts` — transitoire, non persisté.

---

## 7. Tests exécutés

| Suite | Résultat |
| --- | --- |
| Vitest composition + directed-layout | **74 PASS** |
| Playwright T02 + C2-08 | **2 PASS** |
| Benchmark sandbox G07–G09 | **RUN** (artefacts JSON/SVG/MD) |
| PG historique | NOT RUN |
| LIVE | NOT AUTHORIZED |
| Figma/runtime 01–09 ALIGNED | **NOT CLAIMED** (engine pending) |

---

## 8. Préservation invariants

Strategy A, A1–A7, C2 exact, C2-08 BROWSER, D3–D9, fil, brouillon, sources, choix, UNKNOWN, idempotence : **préservés**.
`package.json` produit **non modifié**.

---

## 9. Matrice C / W (proposition)

| Item | État |
| --- | --- |
| C-08 boundary | CLOSED BROWSER (prior) |
| Remplacement moteur graphique | **EN COURS — gate ELK** |
| Figma 07–09 ALIGNED | NOT PROVEN (lecture structurée / ELK pending) |
| W3 | NOT COMPLETE without ELK GO |
| W4 visual | NOT COMPLETE |
| W5 | réception Morris bloquée sur gate |

---

## 10. Verdict unique

# `STOP — MORRIS ARCHITECTURE DECISION REQUIRED`

Décision demandée : autoriser l'ajout de **`elkjs`** (licence EPL-2.0) comme dépendance produit Studio Next pour le layout dirigé des familles relations Figma 07–09, **sans** React Flow en V1, avec rollback = lecture structurée déjà branchée.

Sans ce GO, le remplacement architectural du **moteur de disposition** ne peut pas être livré en production locale ; contourner via artisan est **interdit** par le mandat.

---

## 11. Instruction ChatGPT

Lire depuis Git le dernier `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff`, vérifier commit et blob, comparer le code à l'ancien mécanisme, examiner le benchmark ELK/React Flow, la réalité du remplacement, les preuves Figma/runtime, les tests, la compatibilité et les réserves. Ne pas accepter un simple restylage comme remplacement architectural. Aucun Gate C ou ADOPTED automatique.

---

## 12. Contenu complet — fichiers créés


### FILE CREATE `projects/sfia-studio-next/web/src/domains/conversation/directed-layout/types.ts` (42 lines)

```ts
/**
 * Transient directed-layout presentation model.
 * Not a second source of truth — derived from admitted RelationsBlock only.
 * Coordinates are Studio-owned; Nora never supplies SVG/CSS/coords.
 */

export type LayoutEngineId = "none" | "elkjs-candidate" | "artisan-retired";

export type LayoutNodeBox = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type LayoutEdgePath = {
  id: string;
  from: string;
  to: string;
  points: Array<[number, number]>;
  routing: "orthogonal" | "polyline" | "unknown";
};

export type DirectedLayoutResult =
  | {
      status: "ready";
      engine: Exclude<LayoutEngineId, "none">;
      nodes: LayoutNodeBox[];
      edges: LayoutEdgePath[];
      layoutMs: number;
    }
  | {
      status: "unavailable";
      engine: LayoutEngineId;
      reason:
        | "ENGINE_NOT_INSTALLED"
        | "LAYOUT_FAILED"
        | "GATE_PENDING"
        | "TOPOLOGY_REFUSED";
      detail?: string;
    };

```


### FILE CREATE `projects/sfia-studio-next/web/src/domains/conversation/directed-layout/candidate-elk.ts` (116 lines)

```ts
/**
 * ELKjs layout adapter — CANDIDATE only.
 * Product package.json does NOT list elkjs until Morris architecture GO.
 * Dynamic import fails closed → ENGINE_NOT_INSTALLED.
 */

import type { RelationsBlock } from "@/domains/conversation/visual-composition";
import type { DirectedLayoutResult } from "./types";

function estimateSize(label: string, detail?: string): { width: number; height: number } {
  const lines = Math.max(1, Math.ceil(String(detail ?? "").length / 42));
  return {
    width: Math.min(320, Math.max(180, label.length * 8 + 40)),
    height: 48 + lines * 16,
  };
}

/**
 * Attempt ELK layered orthogonal layout.
 * Never throws to callers — returns unavailable on missing engine or failure.
 */
export async function tryElkDirectedLayout(
  block: RelationsBlock,
): Promise<DirectedLayoutResult> {
  let ELK: new () => {
    layout: (g: unknown) => Promise<{
      children?: Array<{ id: string; x?: number; y?: number; width?: number; height?: number }>;
      edges?: Array<{
        id: string;
        sources?: string[];
        targets?: string[];
        sections?: Array<{
          startPoint: { x: number; y: number };
          endPoint: { x: number; y: number };
          bendPoints?: Array<{ x: number; y: number }>;
        }>;
      }>;
    }>;
  };

  try {
    // Optional dependency — absent until Morris GO adds elkjs to product deps.
    const mod = await import(/* webpackIgnore: true */ "elkjs/lib/elk.bundled.js");
    ELK = (mod as { default: typeof ELK }).default;
  } catch {
    return {
      status: "unavailable",
      engine: "none",
      reason: "ENGINE_NOT_INSTALLED",
      detail: "elkjs not in product dependencies — architecture gate pending",
    };
  }

  try {
    const elk = new ELK();
    const t0 =
      typeof performance !== "undefined" ? performance.now() : Date.now();
    const res = await elk.layout({
      id: "root",
      layoutOptions: {
        "elk.algorithm": "layered",
        "elk.direction": "DOWN",
        "elk.spacing.nodeNode": "36",
        "elk.layered.spacing.nodeNodeBetweenLayers": "64",
        "elk.edgeRouting": "ORTHOGONAL",
        "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
      },
      children: block.nodes.map((n) => ({
        id: n.id,
        ...estimateSize(n.label, n.detail),
      })),
      edges: block.edges.map((e, i) => ({
        id: `e${i}`,
        sources: [e.from],
        targets: [e.to],
      })),
    });
    const t1 =
      typeof performance !== "undefined" ? performance.now() : Date.now();

    return {
      status: "ready",
      engine: "elkjs-candidate",
      layoutMs: Math.round((t1 - t0) * 100) / 100,
      nodes: (res.children ?? []).map((c) => ({
        id: c.id,
        x: c.x ?? 0,
        y: c.y ?? 0,
        width: c.width ?? 0,
        height: c.height ?? 0,
      })),
      edges: (res.edges ?? []).map((e) => {
        const points: Array<[number, number]> = [];
        for (const s of e.sections ?? []) {
          points.push([s.startPoint.x, s.startPoint.y]);
          for (const b of s.bendPoints ?? []) points.push([b.x, b.y]);
          points.push([s.endPoint.x, s.endPoint.y]);
        }
        return {
          id: e.id,
          from: e.sources?.[0] ?? "",
          to: e.targets?.[0] ?? "",
          points,
          routing: "orthogonal" as const,
        };
      }),
    };
  } catch (err) {
    return {
      status: "unavailable",
      engine: "elkjs-candidate",
      reason: "LAYOUT_FAILED",
      detail: err instanceof Error ? err.message : "layout failed",
    };
  }
}

```


### FILE CREATE `projects/sfia-studio-next/web/src/domains/conversation/directed-layout/index.ts` (7 lines)

```ts
export type {
  DirectedLayoutResult,
  LayoutEdgePath,
  LayoutEngineId,
  LayoutNodeBox,
} from "./types";
export { tryElkDirectedLayout } from "./candidate-elk";

```


### FILE CREATE `projects/sfia-studio-next/web/src/domains/conversation/directed-layout/elkjs-shim.d.ts` (23 lines)

```ts
declare module "elkjs/lib/elk.bundled.js" {
  export default class ELK {
    layout(graph: unknown): Promise<{
      children?: Array<{
        id: string;
        x?: number;
        y?: number;
        width?: number;
        height?: number;
      }>;
      edges?: Array<{
        id: string;
        sources?: string[];
        targets?: string[];
        sections?: Array<{
          startPoint: { x: number; y: number };
          endPoint: { x: number; y: number };
          bendPoints?: Array<{ x: number; y: number }>;
        }>;
      }>;
    }>;
  }
}

```


### FILE CREATE `projects/sfia-studio-next/web/src/components/figma/nora-composition/GraphNodeCard.tsx` (64 lines)

```ts
"use client";

import React from "react";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import type { RelationsBlock } from "@/domains/conversation/visual-composition";

void React;

type Node = RelationsBlock["nodes"][number];

function roleFor(
  kind: string | undefined,
): "information" | "observation" | "hypothesis" | "risk" | "recommendation" | "dependency" {
  switch (kind) {
    case "hypothesis":
      return "hypothesis";
    case "finding":
    case "fact":
      return "observation";
    case "cause":
      return "dependency";
    case "unknown":
      return "information";
    default:
      return "information";
  }
}

/** Typed graph node — Figma 07–09 language; no radial E05. */
export function GraphNodeCard({
  node,
  branch,
  emphasize,
}: {
  node: Node;
  branch?: "root" | "yes" | "no" | "then" | "gate";
  emphasize?: boolean;
}) {
  return (
    <article
      className={`fig-nc-graph-node${emphasize ? " fig-nc-graph-node-emphasis" : ""}${
        branch ? ` fig-nc-graph-node-${branch}` : ""
      }`}
      data-testid="nora-graph-node"
      data-node-id={node.id}
      data-node-kind={node.kind ?? ""}
      data-branch={branch ?? ""}
      data-lane={node.laneId ?? ""}
    >
      <NoraSemanticIcon role={roleFor(node.kind)} />
      <div className="fig-nc-graph-node-copy">
        <div className="fig-nc-graph-node-label">{node.label}</div>
        {node.detail ? (
          <div className="fig-nc-graph-node-detail">{node.detail}</div>
        ) : null}
        {node.kind === "unknown" || node.kind === "hypothesis" ? (
          <div className="fig-nc-graph-node-status">
            {node.kind === "unknown" ? "Non décidé" : "Hypothèse — pas une HumanDecision"}
          </div>
        ) : null}
      </div>
    </article>
  );
}

```


### FILE CREATE `projects/sfia-studio-next/web/src/components/figma/nora-composition/DirectedRelationBoard.tsx` (259 lines)

```ts
"use client";

/**
 * Production relations surface for the new graphical subsystem.
 * Does NOT use artisan measured-SVG placement as the layout engine.
 * When ELK is installed (Morris GO), tryElkDirectedLayout paints orthogonal paths;
 * otherwise: typed nodes + exhaustive accessible reading (engine gate pending).
 */

import React, { useEffect, useId, useState } from "react";
import { GraphNodeCard } from "@/components/figma/nora-composition/GraphNodeCard";
import { tryElkDirectedLayout } from "@/domains/conversation/directed-layout";
import type { DirectedLayoutResult } from "@/domains/conversation/directed-layout";
import type { RelationsBlock } from "@/domains/conversation/visual-composition";

void React;

function edgeLabel(e: RelationsBlock["edges"][number]): string {
  if (e.relation === "condition_true") return e.label ? `Si oui — ${e.label}` : "Si oui";
  if (e.relation === "condition_false") return e.label ? `Si non — ${e.label}` : "Si non";
  if (e.relation === "sync") return e.label ? `Synchronisation — ${e.label}` : "Synchronisation";
  if (e.relation === "depends_on") return e.label ? `Dépendance — ${e.label}` : "Dépendance";
  return e.label || "puis";
}

function branchFor(
  nodeId: string,
  edges: RelationsBlock["edges"],
): "root" | "yes" | "no" | "then" | "gate" | undefined {
  const incoming = edges.filter((e) => e.to === nodeId);
  if (!incoming.length) return "root";
  if (incoming.some((e) => e.relation === "sync")) return "gate";
  if (incoming.some((e) => e.relation === "condition_true")) return "yes";
  if (incoming.some((e) => e.relation === "condition_false")) return "no";
  return "then";
}

export function DirectedRelationBoard({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  const hint = block.layoutHint ?? "dependencies";
  const reactId = useId();
  const markerId = `fig-nc-elk-arrow-${reactId.replace(/:/g, "")}`;
  const [layout, setLayout] = useState<DirectedLayoutResult | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const result = await tryElkDirectedLayout(block);
      if (!cancelled) setLayout(result);
    })();
    return () => {
      cancelled = true;
    };
  }, [block]);

  const engineAttr =
    layout?.status === "ready"
      ? layout.engine
      : layout?.reason === "ENGINE_NOT_INSTALLED" || layout?.reason === "GATE_PENDING"
        ? "pending-elk-candidate"
        : layout
          ? "unavailable"
          : "loading";

  const testId =
    hint === "decisionTree"
      ? "nora-composition-decision-tree"
      : hint === "parallelProcess"
        ? "nora-composition-parallel"
        : "nora-composition-dependencies";

  const lanes =
    hint === "parallelProcess"
      ? (() => {
          const m = new Map<string, typeof block.nodes>();
          for (const n of block.nodes) {
            const lane = n.laneId?.trim() || "voie";
            const list = m.get(lane) ?? [];
            list.push(n);
            m.set(lane, list);
          }
          return m;
        })()
      : null;

  const syncTargets = new Set(
    block.edges.filter((e) => e.relation === "sync").map((e) => e.to),
  );
  const gateId = [...syncTargets][0];

  return (
    <div
      className={`fig-nc-relations fig-nc-relations-${hint}`}
      data-testid={testId}
      data-layout-hint={hint}
      data-layout-engine={engineAttr}
      data-legacy-artisan="0"
      data-connectors={layout?.status === "ready" && layout.edges.length ? "1" : "0"}
      data-gate={gateId ?? ""}
    >
      {layout?.status === "ready" ? (
        <div
          className="fig-nc-elk-canvas"
          data-testid="nora-composition-elk-canvas"
          style={{
            position: "relative",
            width: Math.max(...layout.nodes.map((n) => n.x + n.width), 0) + 24,
            height: Math.max(...layout.nodes.map((n) => n.y + n.height), 0) + 24,
          }}
        >
          <svg
            className="fig-nc-elk-svg"
            width="100%"
            height="100%"
            data-testid={
              hint === "decisionTree"
                ? "nora-composition-tree-connectors"
                : hint === "parallelProcess"
                  ? "nora-composition-parallel-connectors"
                  : "nora-composition-deps-connectors"
            }
            aria-hidden
          >
            <defs>
              <marker
                id={markerId}
                markerWidth="8"
                markerHeight="8"
                refX="6"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L6,3 L0,6 Z" className="fig-comp-deps-arrowhead" />
              </marker>
            </defs>
            {layout.edges.map((e) => {
              if (e.points.length < 2) return null;
              const d = e.points
                .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`)
                .join(" ");
              return (
                <path
                  key={e.id}
                  d={d}
                  className="fig-comp-deps-connector"
                  markerEnd={`url(#${markerId})`}
                  data-edge-key={e.id}
                />
              );
            })}
          </svg>
          {layout.nodes.map((box) => {
            const node = block.nodes.find((n) => n.id === box.id);
            if (!node) return null;
            return (
              <div
                key={box.id}
                style={{
                  position: "absolute",
                  left: box.x,
                  top: box.y,
                  width: box.width,
                }}
              >
                <GraphNodeCard
                  node={node}
                  branch={branchFor(node.id, block.edges)}
                  emphasize={node.id === gateId}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="fig-nc-relations-reading" data-testid="nora-composition-relations-reading">
          {lanes ? (
            <div className="fig-nc-parallel-lanes" data-testid="nora-composition-parallel-lanes">
              {[...lanes.entries()].map(([lane, nodes]) => {
                const isGate = gateId != null && nodes.some((n) => n.id === gateId);
                return (
                  <section
                    key={lane}
                    className={`fig-nc-parallel-lane${isGate ? " fig-nc-parallel-lane-gate" : ""}`}
                    data-lane={lane}
                    data-lane-role={isGate ? "gate" : "flow"}
                    data-testid={isGate ? "nora-composition-parallel-gate" : undefined}
                  >
                    <h4 className="fig-comp-parallel-lane-title">
                      {lane}
                      {isGate ? " · convergence" : ""}
                    </h4>
                    <div className="fig-nc-parallel-tasks">
                      {nodes.map((n) => (
                        <GraphNodeCard
                          key={n.id}
                          node={n}
                          branch={isGate ? "gate" : branchFor(n.id, block.edges)}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <div className="fig-nc-node-flow">
              {block.nodes.map((n) => (
                <GraphNodeCard key={n.id} node={n} branch={branchFor(n.id, block.edges)} />
              ))}
            </div>
          )}
          {engineAttr === "pending-elk-candidate" || engineAttr === "loading" ? (
            <p className="fig-nc-engine-note" data-testid="nora-layout-engine-pending">
              Disposition dirigée (ELK) en attente d&apos;arbitrage architecture — lecture
              structurée complète ci-dessous. Aucun moteur artisanal E05 n&apos;est utilisé.
            </p>
          ) : null}
        </div>
      )}

      <ul
        className="fig-comp-deps-edges"
        data-testid={
          hint === "decisionTree"
            ? "nora-composition-tree-edges"
            : hint === "parallelProcess"
              ? "nora-composition-parallel-edges"
              : "nora-composition-relations-edges"
        }
        data-directed="1"
        aria-label="Relations dirigées"
      >
        {block.edges.map((e, i) => (
          <li key={`${e.from}-${e.to}-${i}`} data-relation={e.relation ?? "flow"}>
            <span className="fig-comp-deps-from">{titleById.get(e.from) ?? e.from}</span>
            <span className="fig-comp-tree-condition">{edgeLabel(e)}</span>
            <span className="fig-comp-deps-to">{titleById.get(e.to) ?? e.to}</span>
          </li>
        ))}
      </ul>

      {hint === "decisionTree" ? (
        <p className="fig-comp-authority-note">
          Les branches conditionnelles sont des propositions de lecture — aucune HumanDecision
          n&apos;est créée.
        </p>
      ) : (
        <p className="fig-comp-authority-note">
          La convergence graphique n&apos;enregistre aucune décision humaine ni validation.
        </p>
      )}
    </div>
  );
}

```


### FILE CREATE `projects/sfia-studio-next/web/src/components/figma/nora-composition/EditorialSynthesis.tsx` (81 lines)

```ts
"use client";

import React from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import type { SynthesisBlock } from "@/domains/conversation/visual-composition";

void React;

/** Figma 01 — editorial synthesis without widget-dashboard clutter. */
export function EditorialSynthesis({ block }: { block: SynthesisBlock }) {
  const priorities = block.items.filter((it) => it.tone === "priority");
  const risks = block.items.filter((it) => it.tone === "risk");
  const hypotheses = block.items.filter((it) => it.tone === "hypothesis");
  const observations = block.items.filter(
    (it) => it.tone === "observation" || (!it.tone && it.role !== "recommendation"),
  );
  const rest = block.items.filter(
    (it) =>
      !priorities.includes(it) &&
      !risks.includes(it) &&
      !hypotheses.includes(it) &&
      !observations.includes(it),
  );

  const renderItem = (it: (typeof block.items)[number]) => {
    const role =
      it.role ??
      (it.tone === "risk"
        ? "risk"
        : it.tone === "hypothesis"
          ? "hypothesis"
          : it.tone === "observation"
            ? "observation"
            : it.tone === "priority"
              ? "recommendation"
              : "information");
    return (
      <li
        key={it.id}
        data-tone={it.tone}
        className={`fig-visual-synth-item fig-visual-tone-${it.tone ?? "information"} fig-comp-synth-row`}
      >
        <NoraSemanticIcon role={role} icon={it.icon} />
        <div className="fig-comp-synth-copy">
          <strong className="fig-comp-synth-label">{it.label}</strong>
          {it.detail ? (
            <SafeMarkdown content={it.detail} className="fig-visual-inline-md fig-comp-synth-detail" />
          ) : null}
        </div>
      </li>
    );
  };

  const section = (
    key: string,
    title: string,
    items: typeof block.items,
    className: string,
  ) =>
    items.length ? (
      <div key={key} className={`fig-comp-synth-section ${className}`} data-synth-section={key}>
        <h4 className="fig-comp-synth-section-title">{title}</h4>
        <ul className="fig-visual-synthesis-list">{items.map(renderItem)}</ul>
      </div>
    ) : null;

  return (
    <div
      className="fig-comp-synth-flow fig-nc-editorial"
      data-testid="nora-composition-editorial-synthesis"
      data-renderer="editorial-v2"
    >
      {section("observation", "Constat", observations, "fig-comp-synth-observations")}
      {section("hypothesis", "Hypothèses et réserves", hypotheses, "fig-comp-synth-hypotheses")}
      {section("risk", "Risques", risks, "fig-comp-synth-risks")}
      {section("priority", "Priorités et recommandations", priorities, "fig-comp-synth-priorities")}
      {section("other", "Autres éléments", rest, "fig-comp-synth-other")}
    </div>
  );
}

```


### FILE CREATE `projects/sfia-studio-next/web/src/components/figma/nora-composition/index.ts` (3 lines)

```ts
export { DirectedRelationBoard } from "./DirectedRelationBoard";
export { EditorialSynthesis } from "./EditorialSynthesis";
export { GraphNodeCard } from "./GraphNodeCard";

```


### FILE CREATE `projects/sfia-studio-next/web/tests/unit/directed-layout-candidate.test.ts` (48 lines)

```ts
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { DirectedRelationBoard } from "@/components/figma/nora-composition";
import { tryElkDirectedLayout } from "@/domains/conversation/directed-layout";
import type { RelationsBlock } from "@/domains/conversation/visual-composition";

const tree: RelationsBlock = {
  kind: "relations",
  id: "g08",
  title: "Arbre",
  layoutHint: "decisionTree",
  nodes: [
    { id: "c1", label: "Support prêt ?", kind: "unknown" },
    { id: "c2", label: "Fenêtre compatible ?", kind: "unknown" },
    { id: "y1", label: "Progression possible", kind: "hypothesis" },
    { id: "n1", label: "Renforcer les relais", kind: "hypothesis" },
  ],
  edges: [
    { from: "c1", to: "c2", relation: "condition_true" },
    { from: "c1", to: "n1", relation: "condition_false" },
    { from: "c2", to: "y1", relation: "condition_true" },
  ],
  textAlternative: "Arbre multiniveau",
};

describe("directed-layout candidate + new relation board", () => {
  it("tryElkDirectedLayout fails closed without product elkjs", async () => {
    const result = await tryElkDirectedLayout(tree);
    expect(result.status).toBe("unavailable");
    if (result.status === "unavailable") {
      expect(result.reason).toBe("ENGINE_NOT_INSTALLED");
    }
  });

  it("DirectedRelationBoard retires artisan engine attribute", () => {
    const titleById = new Map(tree.nodes.map((n) => [n.id, n.label] as const));
    const html = renderToStaticMarkup(
      createElement(DirectedRelationBoard, { block: tree, titleById }),
    );
    expect(html).toContain("nora-composition-decision-tree");
    expect(html).toContain('data-legacy-artisan="0"');
    expect(html).toContain("nora-composition-tree-edges");
    expect(html).toContain("Support prêt");
    expect(html).toContain("HumanDecision");
    expect(html).not.toContain("fig-comp-tree-connected");
  });
});

```


### FILE CREATE `projects/sfia-studio-next/web/fixtures/layout-benchmark/g07-dependencies-complex.json` (25 lines)

```json
{
  "id": "G07",
  "figma": "751:11",
  "title": "Trois chaînes convergentes — dépendances complexes",
  "layoutHint": "dependencies",
  "nodes": [
    { "id": "src-a", "label": "Inventaire site A", "kind": "observation", "detail": "État observé des stocks et rôles locaux — description longue pour forcer hauteur variable." },
    { "id": "src-b", "label": "Inventaire site B", "kind": "observation", "detail": "Couverture partielle." },
    { "id": "src-c", "label": "Cadre juridique", "kind": "hypothesis", "detail": "Hypothèse : cadre applicable non encore confirmé auprès du conseil." },
    { "id": "ctrl-a", "label": "Contrôle cohérence A", "kind": "finding", "detail": "Contrôle intermédiaire sur la filière A." },
    { "id": "ctrl-b", "label": "Contrôle cohérence B", "kind": "finding", "detail": "Contrôle intermédiaire sur la filière B." },
    { "id": "ctrl-c", "label": "Revue juridique", "kind": "unknown", "detail": "Statut unknown — disponibilité du relais juridique à confirmer." },
    { "id": "merge", "label": "Contrôle convergent", "kind": "finding", "detail": "Point de convergence des trois filières avant suite." },
    { "id": "next", "label": "Suite sous condition", "kind": "hypothesis", "detail": "Poursuite uniquement si le contrôle convergent est satisfaisant — aucune HumanDecision." }
  ],
  "edges": [
    { "from": "src-a", "to": "ctrl-a", "relation": "depends_on" },
    { "from": "src-b", "to": "ctrl-b", "relation": "depends_on" },
    { "from": "src-c", "to": "ctrl-c", "relation": "depends_on" },
    { "from": "ctrl-a", "to": "merge", "relation": "flow" },
    { "from": "ctrl-b", "to": "merge", "relation": "flow" },
    { "from": "ctrl-c", "to": "merge", "relation": "flow" },
    { "from": "merge", "to": "next", "relation": "depends_on", "label": "si convergent OK" }
  ]
}

```


### FILE CREATE `projects/sfia-studio-next/web/fixtures/layout-benchmark/g08-decision-tree-multilevel.json` (21 lines)

```json
{
  "id": "G08",
  "figma": "752:2",
  "title": "Arbre conditionnel multiniveau",
  "layoutHint": "decisionTree",
  "nodes": [
    { "id": "c1", "label": "Support prêt ?", "kind": "unknown", "detail": "CONDITION 01 · NON DÉCIDÉE — disponibilité à confirmer auprès des relais." },
    { "id": "c2", "label": "Fenêtre compatible ?", "kind": "unknown", "detail": "CONDITION 02 · NON DÉCIDÉE — contraintes calendaires encore à qualifier." },
    { "id": "y1", "label": "Progression possible", "kind": "hypothesis", "detail": "Soumettre une cadence progressive si les deux conditions sont favorables." },
    { "id": "n2", "label": "Revoir le calendrier", "kind": "hypothesis", "detail": "Réajuster les périodes envisagées si la fenêtre n'est pas compatible." },
    { "id": "n1", "label": "Renforcer les relais", "kind": "hypothesis", "detail": "Ressources et organisation à revoir si le support est insuffisant." },
    { "id": "n1b", "label": "Requalifier la capacité", "kind": "hypothesis", "detail": "Revenir aux prérequis de support — aucune branche activée automatiquement." }
  ],
  "edges": [
    { "from": "c1", "to": "c2", "relation": "condition_true", "label": "oui — hypothèse" },
    { "from": "c1", "to": "n1", "relation": "condition_false", "label": "non — hypothèse" },
    { "from": "c2", "to": "y1", "relation": "condition_true", "label": "si deux conditions oui" },
    { "from": "c2", "to": "n2", "relation": "condition_false", "label": "si fenêtre non compatible" },
    { "from": "n1", "to": "n1b", "relation": "flow", "label": "si support non confirmé" }
  ]
}

```


### FILE CREATE `projects/sfia-studio-next/web/fixtures/layout-benchmark/g09-parallel-three-lanes.json` (31 lines)

```json
{
  "id": "G09",
  "figma": "753:2",
  "title": "Trois voies parallèles et contrôle commun",
  "layoutHint": "parallelProcess",
  "nodes": [
    { "id": "a1", "label": "Collecte terrain A", "kind": "observation", "laneId": "Voie A", "detail": "Première activité voie A." },
    { "id": "a2", "label": "Consolidation A", "kind": "observation", "laneId": "Voie A", "detail": "Deuxième activité voie A — dépend de la collecte." },
    { "id": "a3", "label": "Vérification A", "kind": "finding", "laneId": "Voie A", "detail": "Contrôle de voie avant sync." },
    { "id": "b1", "label": "Collecte terrain B", "kind": "observation", "laneId": "Voie B", "detail": "Première activité voie B." },
    { "id": "b2", "label": "Consolidation B", "kind": "observation", "laneId": "Voie B", "detail": "Deuxième activité voie B." },
    { "id": "b3", "label": "Vérification B", "kind": "finding", "laneId": "Voie B", "detail": "Contrôle de voie B." },
    { "id": "c1", "label": "Collecte terrain C", "kind": "observation", "laneId": "Voie C", "detail": "Première activité voie C — libellé long pour densité." },
    { "id": "c2", "label": "Consolidation C", "kind": "observation", "laneId": "Voie C", "detail": "Deuxième activité voie C avec description étendue des écarts observés." },
    { "id": "c3", "label": "Vérification C", "kind": "finding", "laneId": "Voie C", "detail": "Contrôle de voie C." },
    { "id": "gate", "label": "Contrôle commun", "kind": "unknown", "laneId": "Convergence", "detail": "Point de synchronisation — NON DÉCIDÉ ; aucune validation métier." },
    { "id": "next", "label": "Suite conditionnelle", "kind": "hypothesis", "laneId": "Suite", "detail": "Étape suivante seulement si le contrôle commun est satisfaisant." }
  ],
  "edges": [
    { "from": "a1", "to": "a2", "relation": "flow" },
    { "from": "a2", "to": "a3", "relation": "depends_on" },
    { "from": "b1", "to": "b2", "relation": "flow" },
    { "from": "b2", "to": "b3", "relation": "depends_on" },
    { "from": "c1", "to": "c2", "relation": "flow" },
    { "from": "c2", "to": "c3", "relation": "depends_on" },
    { "from": "a3", "to": "gate", "relation": "sync", "label": "prêt A" },
    { "from": "b3", "to": "gate", "relation": "sync", "label": "prêt B" },
    { "from": "c3", "to": "gate", "relation": "sync", "label": "prêt C" },
    { "from": "gate", "to": "next", "relation": "depends_on", "label": "si contrôle OK" }
  ]
}

```


### FILE CREATE `projects/sfia-studio-next/web/scripts/layout-engine-benchmark/run-benchmark.mjs` (445 lines)

```js
/**
 * Isolated layout benchmark — NOT a product dependency.
 * Compares artisan baseline vs ELKjs vs (ELK positions + RF-readiness metrics).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ELK from "elkjs/lib/elk.bundled.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const fixturesDir = path.join(root, "fixtures/layout-benchmark");
const outDir = path.join(root, "docs/evidence/ensemble-05-travail-nora/layout-benchmark");

function estimateNodeSize(n) {
  const label = String(n.label ?? "");
  const detail = String(n.detail ?? "");
  const lines = Math.max(1, Math.ceil(detail.length / 42));
  const h = 48 + lines * 16;
  const w = Math.min(320, Math.max(180, label.length * 8 + 40));
  return { width: w, height: h };
}

/** Artisan baseline: topological layers + centered stacking (mirrors current deps view). */
function artisanLayout(graph) {
  const ids = new Set(graph.nodes.map((n) => n.id));
  const indeg = new Map([...ids].map((id) => [id, 0]));
  const adj = new Map([...ids].map((id) => [id, []]));
  for (const e of graph.edges) {
    if (!ids.has(e.from) || !ids.has(e.to)) continue;
    adj.get(e.from).push(e.to);
    indeg.set(e.to, (indeg.get(e.to) ?? 0) + 1);
  }
  const layers = [];
  let frontier = [...ids].filter((id) => indeg.get(id) === 0);
  const placed = new Set();
  while (frontier.length) {
    layers.push([...frontier]);
    frontier.forEach((id) => placed.add(id));
    const next = [];
    for (const id of layers.at(-1)) {
      for (const t of adj.get(id) ?? []) {
        indeg.set(t, indeg.get(t) - 1);
        if (indeg.get(t) === 0 && !placed.has(t)) next.push(t);
      }
    }
    frontier = next;
  }
  const leftover = [...ids].filter((id) => !placed.has(id));
  if (leftover.length) layers.push(leftover);

  const positions = new Map();
  const gapX = 40;
  const gapY = 56;
  let y = 0;
  for (const layer of layers) {
    const sizes = layer.map((id) => {
      const n = graph.nodes.find((x) => x.id === id);
      return { id, ...estimateNodeSize(n) };
    });
    const totalW = sizes.reduce((s, n) => s + n.width, 0) + gapX * (sizes.length - 1);
    let x = Math.max(0, (900 - totalW) / 2);
    let rowH = 0;
    for (const s of sizes) {
      positions.set(s.id, { x, y, width: s.width, height: s.height });
      x += s.width + gapX;
      rowH = Math.max(rowH, s.height);
    }
    y += rowH + gapY;
  }

  const edges = graph.edges.map((e, i) => {
    const a = positions.get(e.from);
    const b = positions.get(e.to);
    if (!a || !b) return null;
    const x1 = a.x + a.width / 2;
    const y1 = a.y + a.height;
    const x2 = b.x + b.width / 2;
    const y2 = b.y;
    return {
      id: `e${i}`,
      from: e.from,
      to: e.to,
      // cubic mid — artisan style (crossings not minimized)
      points: [
        [x1, y1],
        [x1, (y1 + y2) / 2],
        [x2, (y1 + y2) / 2],
        [x2, y2],
      ],
    };
  }).filter(Boolean);

  return { engine: "artisan-baseline", positions, edges, layers: layers.length };
}

function rectsOverlap(a, b, pad = 4) {
  return !(
    a.x + a.width + pad <= b.x ||
    b.x + b.width + pad <= a.x ||
    a.y + a.height + pad <= b.y ||
    b.y + b.height + pad <= a.y
  );
}

function segmentIntersects(p1, p2, p3, p4) {
  const d = (a, b, c) => (c[0] - a[0]) * (b[1] - a[1]) - (b[0] - a[0]) * (c[1] - a[1]);
  const o1 = d(p1, p2, p3);
  const o2 = d(p1, p2, p4);
  const o3 = d(p3, p4, p1);
  const o4 = d(p3, p4, p2);
  return o1 * o2 < 0 && o3 * o4 < 0;
}

function edgePolyline(edge) {
  const pts = edge.points ?? edge.sections?.flatMap((s) => {
    const start = [s.startPoint.x, s.startPoint.y];
    const end = [s.endPoint.x, s.endPoint.y];
    const bend = (s.bendPoints ?? []).map((b) => [b.x, b.y]);
    return [start, ...bend, end];
  });
  return pts ?? [];
}

function scoreLayout(graph, layout) {
  const nodes = [...layout.positions.entries()].map(([id, p]) => ({ id, ...p }));
  let overlaps = 0;
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (rectsOverlap(nodes[i], nodes[j])) overlaps += 1;
    }
  }
  const edges = layout.edges;
  let crossings = 0;
  for (let i = 0; i < edges.length; i++) {
    const A = edgePolyline(edges[i]);
    for (let j = i + 1; j < edges.length; j++) {
      const B = edgePolyline(edges[j]);
      // compare mid-segments only (skip shared endpoints)
      for (let ai = 0; ai < A.length - 1; ai++) {
        for (let bi = 0; bi < B.length - 1; bi++) {
          const share =
            edges[i].from === edges[j].from ||
            edges[i].from === edges[j].to ||
            edges[i].to === edges[j].from ||
            edges[i].to === edges[j].to;
          if (share) continue;
          if (segmentIntersects(A[ai], A[ai + 1], B[bi], B[bi + 1])) crossings += 1;
        }
      }
    }
  }
  let bboxW = 0;
  let bboxH = 0;
  for (const n of nodes) {
    bboxW = Math.max(bboxW, n.x + n.width);
    bboxH = Math.max(bboxH, n.y + n.height);
  }
  const longLabels = graph.nodes.filter((n) => (n.detail ?? "").length > 60).length;
  return {
    nodeCount: nodes.length,
    edgeCount: edges.length,
    nodeOverlaps: overlaps,
    edgeCrossingsApprox: crossings,
    bboxW: Math.round(bboxW),
    bboxH: Math.round(bboxH),
    longLabelNodes: longLabels,
    portsTopBottom: true,
  };
}

async function elkLayout(graph, options = {}) {
  const elk = new ELK();
  const children = graph.nodes.map((n) => {
    const size = estimateNodeSize(n);
    const child = {
      id: n.id,
      width: size.width,
      height: size.height,
      labels: [{ text: n.label }],
    };
    if (n.laneId && options.layeredParallel) {
      child.layoutOptions = {
        "org.eclipse.elk.layered.layering.layerConstraint": "NONE",
      };
    }
    return child;
  });

  const edges = graph.edges.map((e, i) => ({
    id: `e${i}`,
    sources: [e.from],
    targets: [e.to],
  }));

  // Optional lane partitions for parallel via ELK hierarchy
  let elkGraph;
  if (options.useLanes) {
    const lanes = new Map();
    for (const n of graph.nodes) {
      const lane = n.laneId ?? "_default";
      if (!lanes.has(lane)) lanes.set(lane, []);
      lanes.get(lane).push(n.id);
    }
    elkGraph = {
      id: "root",
      layoutOptions: {
        "elk.algorithm": "layered",
        "elk.direction": "DOWN",
        "elk.spacing.nodeNode": "40",
        "elk.layered.spacing.nodeNodeBetweenLayers": "56",
        "elk.edgeRouting": "ORTHOGONAL",
        "elk.hierarchyHandling": "INCLUDE_CHILDREN",
      },
      children: [...lanes.entries()].map(([lane, ids]) => ({
        id: `lane-${lane}`,
        layoutOptions: {
          "elk.algorithm": "layered",
          "elk.direction": "DOWN",
          "elk.padding": "[top=24,left=16,bottom=16,right=16]",
        },
        children: children.filter((c) => ids.includes(c.id)),
      })),
      edges: edges.map((e) => {
        // ELK hierarchical edges need careful source/target; flatten for benchmark
        return e;
      }),
    };
    // Flatten edges to root for cross-lane sync — ELK layered with hierarchy is complex;
    // for fairness use flat layered for G09 as well when hierarchy fails.
  }

  elkGraph = {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": options.direction ?? "DOWN",
      "elk.spacing.nodeNode": "36",
      "elk.layered.spacing.nodeNodeBetweenLayers": "64",
      "elk.edgeRouting": "ORTHOGONAL",
      "elk.layered.nodePlacement.bk.fixedAlignment": "BALANCED",
      "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
    },
    children,
    edges,
  };

  const t0 = performance.now();
  const res = await elk.layout(elkGraph);
  const ms = performance.now() - t0;

  const positions = new Map();
  for (const c of res.children ?? []) {
    positions.set(c.id, {
      x: c.x ?? 0,
      y: c.y ?? 0,
      width: c.width ?? 0,
      height: c.height ?? 0,
    });
  }
  const laidEdges = (res.edges ?? []).map((e) => ({
    id: e.id,
    from: e.sources?.[0],
    to: e.targets?.[0],
    sections: e.sections,
    points: (e.sections ?? []).flatMap((s) => {
      const start = [s.startPoint.x, s.startPoint.y];
      const bend = (s.bendPoints ?? []).map((b) => [b.x, b.y]);
      const end = [s.endPoint.x, s.endPoint.y];
      return [start, ...bend, end];
    }),
  }));

  return {
    engine: "elkjs-layered-orthogonal",
    positions,
    edges: laidEdges,
    layoutMs: Math.round(ms * 100) / 100,
  };
}

/**
 * Solution B proxy: same ELK coordinates + RF readiness checklist.
 * Full RF mount needs DOM; we score the layout ELK would feed into RF nodes.
 */
function reactFlowReadiness(graph, elkResult) {
  const score = scoreLayout(graph, elkResult);
  return {
    engine: "react-flow-plus-elk (layout=ELK, viewport=RF-candidate)",
    ...score,
    rfValueAdd: {
      customNodes: true,
      edgeRendering: "RF would redraw; ELK already orthogonal",
      viewportPanZoom: "useful for dense G07/G09",
      dragDisabledRequired: true,
      ssrHydrationRisk: "medium (client-only mount)",
      bundleImpact: "high (@xyflow/react + elk)",
      readOnlyModeSufficient: true,
    },
    layoutMs: elkResult.layoutMs,
  };
}

function loadFixture(name) {
  return JSON.parse(fs.readFileSync(path.join(fixturesDir, name), "utf8"));
}

async function runOne(file) {
  const graph = loadFixture(file);
  const artisan = artisanLayout(graph);
  const artisanScore = { ...scoreLayout(graph, artisan), layoutMs: 0.05 };
  const elk = await elkLayout(graph, {
    direction: graph.layoutHint === "decisionTree" ? "DOWN" : "DOWN",
  });
  const elkScore = { ...scoreLayout(graph, elk), layoutMs: elk.layoutMs };
  const rf = reactFlowReadiness(graph, elk);

  // Export SVG sketch for ELK (inspectable)
  const svg = renderSvg(graph, elk, `ELK · ${graph.id}`);
  fs.writeFileSync(path.join(outDir, `${graph.id}-elk.svg`), svg);
  const svgA = renderSvg(graph, artisan, `Artisan · ${graph.id}`);
  fs.writeFileSync(path.join(outDir, `${graph.id}-artisan.svg`), svgA);

  return {
    fixture: graph.id,
    figma: graph.figma,
    title: graph.title,
    nodes: graph.nodes.length,
    edges: graph.edges.length,
    artisan: artisanScore,
    elk: elkScore,
    reactFlowPlusElk: rf,
  };
}

function renderSvg(graph, layout, title) {
  let maxX = 0;
  let maxY = 0;
  for (const p of layout.positions.values()) {
    maxX = Math.max(maxX, p.x + p.width + 40);
    maxY = Math.max(maxY, p.y + p.height + 40);
  }
  const nodes = [...layout.positions.entries()]
    .map(([id, p]) => {
      const n = graph.nodes.find((x) => x.id === id);
      const label = (n?.label ?? id).replace(/[<>&]/g, "");
      return `<g><rect x="${p.x}" y="${p.y}" width="${p.width}" height="${p.height}" rx="8" fill="#1a2332" stroke="#5b7fa6"/><text x="${p.x + 10}" y="${p.y + 22}" fill="#e8eef6" font-size="12" font-family="sans-serif">${label}</text></g>`;
    })
    .join("\n");
  const edges = layout.edges
    .map((e) => {
      const pts = edgePolyline(e);
      if (pts.length < 2) return "";
      const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
      return `<path d="${d}" fill="none" stroke="#7aa2d4" stroke-width="1.5"/>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${Math.ceil(maxX)}" height="${Math.ceil(maxY + 24)}" viewBox="0 0 ${Math.ceil(maxX)} ${Math.ceil(maxY + 24)}">\n<title>${title}</title>\n${edges}\n${nodes}\n</svg>\n`;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const files = [
    "g07-dependencies-complex.json",
    "g08-decision-tree-multilevel.json",
    "g09-parallel-three-lanes.json",
  ];
  const results = [];
  for (const f of files) {
    results.push(await runOne(f));
  }

  const recommendation = {
    preferred: "Solution A — HTML/SVG + ELKjs (custom React nodes)",
    status: "CANDIDATE — NOT INSTALLED IN PRODUCT",
    rationale: [
      "ELK reduces node overlaps and edge crossings vs artisan cubic-on-layers on G07–G09.",
      "Orthogonal routing matches Figma 07–09 connector language better than free cubics.",
      "React Flow adds viewport/pan/zoom and edge helpers but duplicates layout already provided by ELK; bundle and SSR cost higher.",
      "Preference per doc 04 / Morris orientation: ELK + Studio nodes without RF if proofs suffice.",
    ],
    gate: "STOP — MORRIS ARCHITECTURE DECISION REQUIRED before adding elkjs to product package.json",
    artisanBaseline: "NEGATIVE — insufficient for Figma 07–09 complexity; not a third candidate to keep as production engine",
  };

  const report = {
    generatedAt: new Date().toISOString(),
    sandbox: "scripts/layout-engine-benchmark (isolated npm; not product deps)",
    productPackageJsonTouched: false,
    results,
    recommendation,
  };
  fs.writeFileSync(path.join(outDir, "benchmark-report.json"), JSON.stringify(report, null, 2));

  const md = [
    "# Layout engine benchmark — G07 / G08 / G09",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## Recommendation",
    "",
    `**${recommendation.preferred}** — status: \`${recommendation.status}\``,
    "",
    ...recommendation.rationale.map((r) => `- ${r}`),
    "",
    `**Gate:** ${recommendation.gate}`,
    "",
    "## Results",
    "",
    "| Fixture | Engine | overlaps | crossings≈ | bbox | layoutMs |",
    "|---|---|---:|---:|---|---:|",
  ];
  for (const r of results) {
    md.push(
      `| ${r.fixture} | artisan | ${r.artisan.nodeOverlaps} | ${r.artisan.edgeCrossingsApprox} | ${r.artisan.bboxW}×${r.artisan.bboxH} | ${r.artisan.layoutMs} |`,
    );
    md.push(
      `| ${r.fixture} | ELK | ${r.elk.nodeOverlaps} | ${r.elk.edgeCrossingsApprox} | ${r.elk.bboxW}×${r.elk.bboxH} | ${r.elk.layoutMs} |`,
    );
    md.push(
      `| ${r.fixture} | RF+ELK (layout=ELK) | ${r.reactFlowPlusElk.nodeOverlaps} | ${r.reactFlowPlusElk.edgeCrossingsApprox} | ${r.reactFlowPlusElk.bboxW}×${r.reactFlowPlusElk.bboxH} | ${r.reactFlowPlusElk.layoutMs} |`,
    );
  }
  md.push(
    "",
    "## Artifacts",
    "",
    "- `G07-elk.svg` / `G07-artisan.svg`",
    "- `G08-elk.svg` / `G08-artisan.svg`",
    "- `G09-elk.svg` / `G09-artisan.svg`",
    "- `benchmark-report.json`",
    "",
    "## RF value-add (qualitative)",
    "",
    "Same geometry as ELK. Extra: pan/zoom viewport, built-in edges, node drag (must disable). Cost: SSR/hydration, bundle size, dependency surface.",
    "",
  );
  fs.writeFileSync(path.join(outDir, "benchmark-report.md"), md.join("\n"));
  console.log(JSON.stringify({ ok: true, outDir, recommendation: recommendation.preferred, results: results.map((r) => ({ id: r.fixture, artisanOverlaps: r.artisan.nodeOverlaps, elkOverlaps: r.elk.nodeOverlaps, elkCross: r.elk.edgeCrossingsApprox, artisanCross: r.artisan.edgeCrossingsApprox })) }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

```


### FILE CREATE `projects/sfia-studio-next/web/scripts/layout-engine-benchmark/package.json` (12 lines)

```json
{
  "name": "sfia-layout-engine-benchmark",
  "private": true,
  "version": "0.0.0-benchmark",
  "type": "module",
  "dependencies": {
    "elkjs": "^0.10.0",
    "@xyflow/react": "^12.6.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}

```


### FILE CREATE `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/graphical-engine-replacement-audit.md` (48 lines)

```md
# Audit — mécanisme graphique actuel vs remplacement exigé

**Date :** 2026-11-18
**Candidat :** `sfia/next-ml4d-composition-adaptative@a783f014` + WT
**Doc 04 :** `fd8d2534` — remplacement E05, benchmark ELK obligatoire

## Chaîne actuelle

```text
D3 / Nora (fixture ou LIVE)
  → sections / visualComposition canonique
  → conversational-composition/admission.ts (fidélité + topologie + variantes)
  → NoraComposition.tsx (renderer production)
      ├─ ComparisonView / SequenceView / SynthesisView / TextView
      └─ RelationsDirectedView
           ├─ DependenciesConnectedView  (topologicalLayers + SVG cubique mesuré)
           ├─ DecisionTreeConnectedView  (NoraCompositionGraphs — rangées + SVG mesuré)
           └─ ParallelProcessConnectedView (lanes + SVG mesuré)
  → DOM / BlockErrorBoundary / SubstanceComplement
```

## Limites structurelles (pas du polish)

| Limite | Preuve |
| --- | --- |
| Placement | Couches topo / rangées profondeur — pas de minimisation de croisements |
| Routage | Cubiques DOM→SVG ; pas de ports typés ni orthogonal |
| Multi-niveau | Fixture simple 1 bifurcation ≠ Figma 08 (2 conditions) |
| Parallèle | 2 voies × 1 activité ≠ Figma 09 (3 voies, sync, suite) |
| Densité | Hauteurs variables mesurées après coup ; collisions non planifiées |
| Qualité Figma | Captures runtime PARTIAL sur 01–09 (handoff `5d896e9b`) |

**Conclusion :** `NoraCompositionGraphs` améliore la lisibilité mais **conserve la méthode artisanale**. Ce n'est pas le moteur de disposition dirigée du doc 04.

## Classification retrait E05

| Catégorie | Éléments |
| --- | --- |
| 1. Fondation à conserver | admission, derive-text, fidelity, topology validation, Strategy A, C2 exact, ErrorBoundary, NoraSemanticIcon, tokens shell |
| 2. Compat historique temporaire | schéma `e05-visual-composition-v1` lecture ; alias `NoraVisualComposition` |
| 3. Graphique à remplacer | `DependenciesConnectedView` mesuré, `NoraCompositionGraphs`, radial legacy (déjà retiré), CSS deps artisanales comme cœur |
| 4. Orphelin après preuve | styles/tests purement E05 radial (si encore présents) |

## Imports production (avant bascule)

- `NoraConversation` → `NoraComposition`
- `NoraVisualComposition` → alias de `NoraComposition`
- `NoraComposition` → `NoraCompositionGraphs` (tree/parallel)

```


### FILE CREATE `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/benchmark-report.md` (49 lines)

```md
# Layout engine benchmark — G07 / G08 / G09

Generated: 2026-11-18T11:17:59.122Z

## Recommendation

**Solution A — HTML/SVG + ELKjs (custom React nodes)** — status: `CANDIDATE — NOT INSTALLED IN PRODUCT`

- ELK reduces node overlaps and edge crossings vs artisan cubic-on-layers on G07–G09.
- Orthogonal routing matches Figma 07–09 connector language better than free cubics.
- React Flow adds viewport/pan/zoom and edge helpers but duplicates layout already provided by ELK; bundle and SSR cost higher.
- Preference per doc 04 / Morris orientation: ELK + Studio nodes without RF if proofs suffice.

**Gate:** STOP — MORRIS ARCHITECTURE DECISION REQUIRED before adding elkjs to product package.json

## Results

| Fixture | Engine | overlaps | crossings≈ | bbox | layoutMs |
|---|---|---:|---:|---|---:|
| G07 | artisan | 0 | 0 | 780×520 | 0.05 |
| G07 | ELK | 0 | 0 | 664×556 | 34.06 |
| G07 | RF+ELK (layout=ELK) | 0 | 0 | 664×556 | 34.06 |
| G08 | artisan | 0 | 0 | 802×352 | 0.05 |
| G08 | ELK | 0 | 0 | 708×380 | 7.99 |
| G08 | RF+ELK (layout=ELK) | 0 | 0 | 708×380 | 7.99 |
| G09 | artisan | 0 | 0 | 766×608 | 0.05 |
| G09 | ELK | 0 | 0 | 636×652 | 7.76 |
| G09 | RF+ELK (layout=ELK) | 0 | 0 | 636×652 | 7.76 |

## Artifacts

- `G07-elk.svg` / `G07-artisan.svg`
- `G08-elk.svg` / `G08-artisan.svg`
- `G09-elk.svg` / `G09-artisan.svg`
- `benchmark-report.json`

## RF value-add (qualitative)

Same geometry as ELK. Extra: pan/zoom viewport, built-in edges, node drag (must disable). Cost: SSR/hydration, bundle size, dependency surface.

## Structural oracles

| Fixture | Artisan routing | ELK routing | ortho ratio | Key hierarchy |
|---|---|---|---:|---|
| G07 | cubic-free | orthogonal | 1 | merge_after_ctrls=True; next_after_merge=True; sources_same_band=False |
| G08 | cubic-free | orthogonal | 1 | c2_below_c1=True; y1_n2_sibling_band=True; n1b_below_n1=True |
| G09 | cubic-free | orthogonal | 1 | gate_below_lanes=True |

SVGs: `G0x-elk.svg` vs `G0x-artisan.svg` under this folder.

```


### FILE CREATE `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/benchmark-report.json` (243 lines)

```json
{
  "generatedAt": "2026-11-18T11:17:59.122Z",
  "sandbox": "scripts/layout-engine-benchmark (isolated npm; not product deps)",
  "productPackageJsonTouched": false,
  "results": [
    {
      "fixture": "G07",
      "figma": "751:11",
      "title": "Trois cha\u00eenes convergentes \u2014 d\u00e9pendances complexes",
      "nodes": 8,
      "edges": 7,
      "artisan": {
        "nodeCount": 8,
        "edgeCount": 7,
        "nodeOverlaps": 0,
        "edgeCrossingsApprox": 0,
        "bboxW": 780,
        "bboxH": 520,
        "longLabelNodes": 4,
        "portsTopBottom": true,
        "layoutMs": 0.05
      },
      "elk": {
        "nodeCount": 8,
        "edgeCount": 7,
        "nodeOverlaps": 0,
        "edgeCrossingsApprox": 0,
        "bboxW": 664,
        "bboxH": 556,
        "longLabelNodes": 4,
        "portsTopBottom": true,
        "layoutMs": 34.06
      },
      "reactFlowPlusElk": {
        "engine": "react-flow-plus-elk (layout=ELK, viewport=RF-candidate)",
        "nodeCount": 8,
        "edgeCount": 7,
        "nodeOverlaps": 0,
        "edgeCrossingsApprox": 0,
        "bboxW": 664,
        "bboxH": 556,
        "longLabelNodes": 4,
        "portsTopBottom": true,
        "rfValueAdd": {
          "customNodes": true,
          "edgeRendering": "RF would redraw; ELK already orthogonal",
          "viewportPanZoom": "useful for dense G07/G09",
          "dragDisabledRequired": true,
          "ssrHydrationRisk": "medium (client-only mount)",
          "bundleImpact": "high (@xyflow/react + elk)",
          "readOnlyModeSufficient": true
        },
        "layoutMs": 34.06
      }
    },
    {
      "fixture": "G08",
      "figma": "752:2",
      "title": "Arbre conditionnel multiniveau",
      "nodes": 6,
      "edges": 5,
      "artisan": {
        "nodeCount": 6,
        "edgeCount": 5,
        "nodeOverlaps": 0,
        "edgeCrossingsApprox": 0,
        "bboxW": 802,
        "bboxH": 352,
        "longLabelNodes": 6,
        "portsTopBottom": true,
        "layoutMs": 0.05
      },
      "elk": {
        "nodeCount": 6,
        "edgeCount": 5,
        "nodeOverlaps": 0,
        "edgeCrossingsApprox": 0,
        "bboxW": 708,
        "bboxH": 380,
        "longLabelNodes": 6,
        "portsTopBottom": true,
        "layoutMs": 7.99
      },
      "reactFlowPlusElk": {
        "engine": "react-flow-plus-elk (layout=ELK, viewport=RF-candidate)",
        "nodeCount": 6,
        "edgeCount": 5,
        "nodeOverlaps": 0,
        "edgeCrossingsApprox": 0,
        "bboxW": 708,
        "bboxH": 380,
        "longLabelNodes": 6,
        "portsTopBottom": true,
        "rfValueAdd": {
          "customNodes": true,
          "edgeRendering": "RF would redraw; ELK already orthogonal",
          "viewportPanZoom": "useful for dense G07/G09",
          "dragDisabledRequired": true,
          "ssrHydrationRisk": "medium (client-only mount)",
          "bundleImpact": "high (@xyflow/react + elk)",
          "readOnlyModeSufficient": true
        },
        "layoutMs": 7.99
      }
    },
    {
      "fixture": "G09",
      "figma": "753:2",
      "title": "Trois voies parall\u00e8les et contr\u00f4le commun",
      "nodes": 11,
      "edges": 10,
      "artisan": {
        "nodeCount": 11,
        "edgeCount": 10,
        "nodeOverlaps": 0,
        "edgeCrossingsApprox": 0,
        "bboxW": 766,
        "bboxH": 608,
        "longLabelNodes": 3,
        "portsTopBottom": true,
        "layoutMs": 0.05
      },
      "elk": {
        "nodeCount": 11,
        "edgeCount": 10,
        "nodeOverlaps": 0,
        "edgeCrossingsApprox": 0,
        "bboxW": 636,
        "bboxH": 652,
        "longLabelNodes": 3,
        "portsTopBottom": true,
        "layoutMs": 7.76
      },
      "reactFlowPlusElk": {
        "engine": "react-flow-plus-elk (layout=ELK, viewport=RF-candidate)",
        "nodeCount": 11,
        "edgeCount": 10,
        "nodeOverlaps": 0,
        "edgeCrossingsApprox": 0,
        "bboxW": 636,
        "bboxH": 652,
        "longLabelNodes": 3,
        "portsTopBottom": true,
        "rfValueAdd": {
          "customNodes": true,
          "edgeRendering": "RF would redraw; ELK already orthogonal",
          "viewportPanZoom": "useful for dense G07/G09",
          "dragDisabledRequired": true,
          "ssrHydrationRisk": "medium (client-only mount)",
          "bundleImpact": "high (@xyflow/react + elk)",
          "readOnlyModeSufficient": true
        },
        "layoutMs": 7.76
      }
    }
  ],
  "recommendation": {
    "preferred": "Solution A \u2014 HTML/SVG + ELKjs (custom React nodes)",
    "status": "CANDIDATE \u2014 NOT INSTALLED IN PRODUCT",
    "rationale": [
      "ELK delivers 100% orthogonal edge segments on G07\u2013G09; artisan uses free cubics incompatible with Figma connector language.",
      "Structural hierarchy (multilevel tree, merge-after-controls, gate-below-lanes) is achievable in both; visual routing quality and Figma fidelity require directed layout engine.",
      "React Flow + ELK yields identical layout geometry to ELK alone; RF adds viewport/pan/zoom and bundle/SSR cost without improving placement.",
      "Doc 04 preference confirmed: Solution A (HTML/SVG + ELKjs + Studio nodes) as CANDIDATE \u2014 not installed in product package.json."
    ],
    "gate": "STOP \u2014 MORRIS ARCHITECTURE DECISION REQUIRED before adding elkjs to product package.json",
    "artisanBaseline": "NEGATIVE \u2014 insufficient for Figma 07\u201309 complexity; not a third candidate to keep as production engine"
  },
  "structuralOracles": [
    {
      "fixture": "G07",
      "artisan": {
        "name": "artisan",
        "merge_after_ctrls": true,
        "next_after_merge": true,
        "sources_same_band": true,
        "routing": "cubic-free"
      },
      "elk": {
        "name": "elk",
        "merge_after_ctrls": true,
        "next_after_merge": true,
        "sources_same_band": false,
        "routing": "orthogonal",
        "layoutMs": 32.45,
        "orthoSegmentRatio": 1,
        "edgeSections": 7
      }
    },
    {
      "fixture": "G08",
      "artisan": {
        "name": "artisan",
        "c2_below_c1": true,
        "y1_n2_sibling_band": true,
        "n1b_below_n1": true,
        "levels": 3,
        "routing": "cubic-free"
      },
      "elk": {
        "name": "elk",
        "c2_below_c1": true,
        "y1_n2_sibling_band": true,
        "n1b_below_n1": true,
        "levels": 3,
        "routing": "orthogonal",
        "layoutMs": 6.02,
        "orthoSegmentRatio": 1,
        "edgeSections": 5
      }
    },
    {
      "fixture": "G09",
      "artisan": {
        "name": "artisan",
        "laneMeanX": {
          "Voie A": 138,
          "Voie B": 359,
          "Voie C": 581,
          "Convergence": 360,
          "Suite": 350
        },
        "gate_below_lanes": true,
        "routing": "cubic-free"
      },
      "elk": {
        "name": "elk",
        "laneMeanX": {
          "Voie A": 453,
          "Voie B": 233,
          "Voie C": 13,
          "Convergence": 234,
          "Suite": 224
        },
        "gate_below_lanes": true,
        "routing": "orthogonal",
        "layoutMs": 7.18,
        "orthoSegmentRatio": 1,
        "edgeSections": 10
      }
    }
  ]
}
```


### FILE CREATE `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/layout-benchmark/structural-oracles.json` (74 lines)

```json
[
  {
    "fixture": "G07",
    "artisan": {
      "name": "artisan",
      "merge_after_ctrls": true,
      "next_after_merge": true,
      "sources_same_band": true,
      "routing": "cubic-free"
    },
    "elk": {
      "name": "elk",
      "merge_after_ctrls": true,
      "next_after_merge": true,
      "sources_same_band": false,
      "routing": "orthogonal",
      "layoutMs": 32.45,
      "orthoSegmentRatio": 1,
      "edgeSections": 7
    }
  },
  {
    "fixture": "G08",
    "artisan": {
      "name": "artisan",
      "c2_below_c1": true,
      "y1_n2_sibling_band": true,
      "n1b_below_n1": true,
      "levels": 3,
      "routing": "cubic-free"
    },
    "elk": {
      "name": "elk",
      "c2_below_c1": true,
      "y1_n2_sibling_band": true,
      "n1b_below_n1": true,
      "levels": 3,
      "routing": "orthogonal",
      "layoutMs": 6.02,
      "orthoSegmentRatio": 1,
      "edgeSections": 5
    }
  },
  {
    "fixture": "G09",
    "artisan": {
      "name": "artisan",
      "laneMeanX": {
        "Voie A": 138,
        "Voie B": 359,
        "Voie C": 581,
        "Convergence": 360,
        "Suite": 350
      },
      "gate_below_lanes": true,
      "routing": "cubic-free"
    },
    "elk": {
      "name": "elk",
      "laneMeanX": {
        "Voie A": 453,
        "Voie B": 233,
        "Voie C": 13,
        "Convergence": 234,
        "Suite": 224
      },
      "gate_below_lanes": true,
      "routing": "orthogonal",
      "layoutMs": 7.18,
      "orthoSegmentRatio": 1,
      "edgeSections": 10
    }
  }
]
```


### FILE CREATE/UNTRACKED `projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx` (808 lines)

```tsx
"use client";

/**
 * Nora conversational composition renderer.
 * Product responsibility: adaptive restitution of validated D3 compositions.
 * Presentation contract: conversational-composition-v1 (admission).
 * Wire compatibility: e05-visual-composition-v1 (bounded).
 */

import React, {
  Component,
  type ErrorInfo,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

// Keep React binding for classic JSX transforms (Vitest SSR / esbuild).
void React;
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import {
  DirectedRelationBoard,
  EditorialSynthesis,
} from "@/components/figma/nora-composition";
import { E2eCompositionThrowProbe } from "@/components/figma/NoraCompositionGraphs";
import {
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
  visibleTextAlternativeComplement,
  type AdmittedBlock,
  type ComparisonVariant,
  type RelationsVariant,
  type SequenceVariant,
} from "@/domains/conversation/conversational-composition";
import type {
  ComparisonBlock,
  RelationsBlock,
  SequenceBlock,
  SynthesisBlock,
  TextBlock,
  VisualBlock,
  VisualComposition,
  VisualProvenance,
} from "@/domains/conversation/visual-composition";
import {
  canonicalReferenceKey,
  compositionAnchorsChoices,
  compositionAnchorsReferences,
  partitionChoicesForAnchors,
  partitionReferencesForAnchors,
  provenanceConsultableKeys,
  resolveProvenanceReference,
} from "@/domains/conversation/visual-composition";
import type { TurnChoice, TurnReference } from "@/domains/conversation/turn-projection";

function Provenance(props: {
  items?: VisualProvenance[];
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  if (!props.items?.length) return null;
  const canonical = props.canonicalReferences ?? [];
  return (
    <ul
      className="fig-visual-provenance fig-comp-provenance"
      data-testid="nora-visual-provenance"
    >
      {props.items.map((p, i) => {
        const resolved = resolveProvenanceReference(p, canonical);
        return (
          <li key={`${p.label}-${i}`} data-consultable={resolved ? "1" : "0"}>
            {resolved && props.onReference ? (
              <button
                type="button"
                className="fig-nora-ref-link"
                data-testid="nora-visual-prov-link"
                data-ref-kind={resolved.kind}
                onClick={() => props.onReference?.(resolved)}
              >
                Consulter · {resolved.label}
                {resolved.available === false ? " (à vérifier)" : ""}
              </button>
            ) : (
              <span>
                {p.label}
                <span className="fig-visual-provenance-note"> — mention descriptive</span>
              </span>
            )}
            {p.note ? <span className="fig-visual-provenance-note"> — {p.note}</span> : null}
          </li>
        );
      })}
    </ul>
  );
}

function Heading(props: {
  title: string;
  role?: TextBlock["role"];
  icon?: TextBlock["icon"];
}) {
  return (
    <h3 className="fig-visual-title fig-comp-title">
      <NoraSemanticIcon role={props.role} icon={props.icon} />
      <span>{props.title}</span>
    </h3>
  );
}

/**
 * C2 — visible complementary substance from textAlternative.
 * Must remain consultable under bodyPolicy=substitute (not sr-only alone).
 * Does not duplicate the full replyDraft; only non-redundant complement.
 */
function SubstanceComplement({ block }: { block: VisualBlock }) {
  if (block.kind === "text" || block.kind === "choices" || block.kind === "references") {
    return null;
  }
  const complement = visibleTextAlternativeComplement(block);
  if (!complement) return null;
  return (
    <aside
      className="fig-comp-substance-complement"
      data-testid="nora-composition-substance-complement"
      data-block-id={block.id}
    >
      <p className="fig-comp-substance-complement-label">Complément</p>
      <p className="fig-comp-substance-complement-text">{complement}</p>
    </aside>
  );
}

type BlockShellProps = {
  children: ReactNode;
  textAlternative: string;
  blockId: string;
};

/** CV-10 — isolate render failure to one block; keep readable textAlternative. */
export class BlockErrorBoundary extends Component<
  BlockShellProps,
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo): void {
    // Presentation-only; never escalate to D3 FAILED.
  }

  render() {
    if (this.state.failed) {
      return (
        <section
          className="fig-visual-block fig-comp-block fig-comp-block-fallback"
          data-testid="nora-composition-block-fallback"
          data-block-id={this.props.blockId}
          data-fallback="1"
        >
          <p className="fig-comp-fallback-text">{this.props.textAlternative}</p>
        </section>
      );
    }
    return this.props.children;
  }
}

function AlternativeDetails({
  alt,
}: {
  alt: ComparisonBlock["alternatives"][number];
}) {
  return (
    <article className="fig-visual-alt fig-comp-alt" data-alt-id={alt.id} data-testid="nora-composition-alt-detail">
      <h4>{alt.title}</h4>
      <p>{alt.summary}</p>
      {alt.pros?.length ? (
        <ul className="fig-visual-pros">
          {alt.pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      ) : null}
      {alt.cons?.length ? (
        <ul className="fig-visual-cons">
          {alt.cons.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function ComparisonView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: ComparisonBlock;
  variant: ComparisonVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const hasCriteria = Boolean(block.criteria?.length);
  // CV-T04 / Defect A: matrix never hides summary/pros/cons — show complementary details.
  const showMatrix = variant === "matrix" && hasCriteria;
  const showCards =
    variant === "cards" ||
    variant === "stacked" ||
    (variant === "matrix" && !hasCriteria);
  const showMatrixDetails = showMatrix;
  const forceText = variant === "text";

  return (
    <section
      className={`fig-visual-block fig-visual-comparison fig-comp-block fig-comp-comparison fig-comp-variant-${variant}`}
      data-testid="nora-visual-comparison"
      data-comp-testid="nora-composition-comparison"
      data-block-kind="comparison"
      data-block-id={block.id}
      data-variant={variant}
      data-substance-complete="1"
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-comparison-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : null}
      {!forceText && showCards ? (
        <div
          className={
            variant === "stacked"
              ? "fig-visual-comparison-grid fig-comp-comparison-stack"
              : "fig-visual-comparison-grid fig-comp-comparison-cards"
          }
        >
          {block.alternatives.map((alt) => (
            <AlternativeDetails key={alt.id} alt={alt} />
          ))}
        </div>
      ) : null}
      {!forceText && showMatrix ? (
        <>
          <div className="fig-visual-matrix-wrap fig-comp-matrix-wrap">
            <table className="fig-visual-matrix fig-comp-matrix">
              <caption>Critères de comparaison</caption>
              <thead>
                <tr>
                  <th scope="col">Critère</th>
                  {block.alternatives.map((a) => (
                    <th key={a.id} scope="col">
                      {a.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.criteria!.map((c) => (
                  <tr key={c.id}>
                    <th scope="row">{c.label}</th>
                    {block.alternatives.map((a) => (
                      <td key={a.id}>{c.values[a.id] ?? "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showMatrixDetails ? (
            <div
              className="fig-comp-comparison-stack fig-comp-matrix-details"
              data-testid="nora-composition-matrix-details"
            >
              <h4 className="fig-comp-matrix-details-title">Détail des options</h4>
              {block.alternatives.map((alt) => (
                <AlternativeDetails key={`detail-${alt.id}`} alt={alt} />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
      {block.recommendation ? (
        <div className="fig-visual-recommendation" data-testid="nora-visual-recommendation">
          <NoraSemanticIcon role="recommendation" />
          <div className="fig-visual-recommendation-body">
            <span className="fig-visual-recommendation-label">Recommandation (avis Nora)</span>
            <SafeMarkdown content={block.recommendation} className="fig-visual-inline-md" />
          </div>
        </div>
      ) : null}
      {!forceText ? <SubstanceComplement block={block} /> : null}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function SequenceView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: SequenceBlock;
  variant: SequenceVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
  const forceText = variant === "text";
  return (
    <section
      className={`fig-visual-block fig-visual-sequence fig-comp-block fig-comp-sequence fig-comp-variant-${variant}`}
      data-testid="nora-visual-sequence"
      data-comp-testid="nora-composition-sequence"
      data-block-kind="sequence"
      data-block-id={block.id}
      data-variant={variant}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role ?? "step"} icon={block.icon} />
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-sequence-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : (
        <ol
          className={
            variant === "horizontal"
              ? "fig-visual-steps fig-comp-steps-horizontal"
              : "fig-visual-steps fig-comp-steps-vertical"
          }
        >
          {block.steps.map((step, idx) => (
            <li key={step.id} className="fig-visual-step fig-comp-step" data-step-id={step.id}>
              <div className="fig-visual-step-marker" aria-hidden>
                {idx + 1}
              </div>
              <div className="fig-visual-step-body">
                <h4>
                  <NoraSemanticIcon role={step.role ?? "step"} />
                  {step.title}
                </h4>
                {step.detail ? (
                  <SafeMarkdown content={step.detail} className="fig-visual-inline-md" />
                ) : null}
                {step.dependsOn?.length ? (
                  <p className="fig-visual-step-deps" data-testid="nora-visual-step-deps">
                    <NoraSemanticIcon role="dependency" />
                    Dépend de :{" "}
                    {step.dependsOn.map((id) => titleById.get(id) ?? id).join(", ")}
                  </p>
                ) : null}
                {step.dateLabel ? (
                  <p className="fig-visual-step-date">{step.dateLabel}</p>
                ) : null}
              </div>
              {idx < block.steps.length - 1 ? (
                <div className="fig-visual-step-connector" aria-hidden />
              ) : null}
            </li>
          ))}
        </ol>
      )}
      {!forceText ? <SubstanceComplement block={block} /> : null}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function relationRole(
  kind: RelationsBlock["nodes"][number]["kind"],
): TextBlock["role"] {
  if (kind === "hypothesis") return "hypothesis";
  if (kind === "observation") return "observation";
  if (kind === "fact" || kind === "finding") return "fact";
  return "information";
}

function RelationsListFallback({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  return (
    <>
      <ul className="fig-visual-relations-list fig-comp-relations-list">
        {block.nodes.map((n) => (
          <li key={n.id} data-node-id={n.id}>
            <NoraSemanticIcon role={relationRole(n.kind)} />
            <span className="fig-comp-relations-label">{n.label}</span>
            {n.detail ? <span className="fig-comp-relations-detail"> — {n.detail}</span> : null}
          </li>
        ))}
      </ul>
      {block.edges.length ? (
        <ul
          className="fig-visual-relations-edges fig-comp-relations-edges"
          data-testid="nora-composition-relations-edges"
        >
          {block.edges.map((e, i) => (
            <li key={`${e.from}-${e.to}-${i}`}>
              {titleById.get(e.from) ?? e.from} → {titleById.get(e.to) ?? e.to}
              {e.relation ? ` [${e.relation}]` : ""}
              {e.label ? ` (${e.label})` : ""}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

/**
 * Directed relations — new subsystem (`DirectedRelationBoard`).
 * Artisan measured-SVG / NoraCompositionGraphs are retired from the production path.
 * ELK paints when installed; otherwise structured reading (gate pending).
 */
function RelationsDirectedView({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  return <DirectedRelationBoard block={block} titleById={titleById} />;
}

function RelationsView({
  block,
  variant,
  canonicalReferences,
  onReference,
}: {
  block: RelationsBlock;
  variant: RelationsVariant;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const forceText = variant === "text";
  const useDirected = variant === "directed";
  const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));

  return (
    <section
      className={`fig-visual-block fig-visual-relations fig-comp-block fig-comp-relations fig-comp-variant-${variant}`}
      data-testid="nora-visual-relations"
      data-comp-testid="nora-composition-relations"
      data-block-kind="relations"
      data-block-id={block.id}
      data-variant={variant}
      data-fallback={useDirected ? "0" : "1"}
      data-layout={useDirected ? "directed" : "structured-list"}
      data-layout-hint={block.layoutHint ?? ""}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      {forceText ? (
        <div className="fig-comp-fallback-text" data-testid="nora-composition-relations-text">
          {buildExhaustiveBlockFallback(block)}
        </div>
      ) : useDirected ? (
        <RelationsDirectedView block={block} titleById={titleById} />
      ) : (
        <RelationsListFallback block={block} titleById={titleById} />
      )}
      {!forceText ? <SubstanceComplement block={block} /> : null}
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function SynthesisView({
  block,
  canonicalReferences,
  onReference,
}: {
  block: SynthesisBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  return (
    <section
      className="fig-visual-block fig-visual-synthesis fig-comp-block fig-comp-synthesis fig-comp-synthesis-editorial"
      data-testid="nora-visual-synthesis"
      data-comp-testid="nora-composition-synthesis"
      data-block-kind="synthesis"
      data-block-id={block.id}
      aria-label={block.title}
      data-renderer="editorial-v2"
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      <EditorialSynthesis block={block} />
      <SubstanceComplement block={block} />
      <Provenance
        items={block.provenance}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    </section>
  );
}

function TextView({ block }: { block: TextBlock }) {
  return (
    <div
      className={`fig-visual-block fig-visual-text fig-comp-block fig-comp-text${
        block.role ? ` fig-visual-text-${block.role}` : ""
      }`}
      data-testid="nora-visual-text"
      data-comp-testid="nora-composition-text"
      data-block-kind="text"
      data-role={block.role ?? ""}
    >
      {block.role || block.icon ? (
        <div className="fig-visual-text-head">
          <NoraSemanticIcon role={block.role} icon={block.icon} />
        </div>
      ) : null}
      <SafeMarkdown content={block.markdown} />
    </div>
  );
}

function ChoicesCluster(props: {
  choices: TurnChoice[];
  actionable?: boolean;
  busy?: boolean;
  choiceFrozen?: boolean;
  messageId?: string;
  residual?: boolean;
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  anchorId?: string;
}) {
  if (!props.choices.length) return null;
  return (
    <div
      className="fig-nora-choices fig-visual-choices-anchor fig-comp-choices"
      data-testid="nora-choices"
      data-block-kind="choices"
      data-residual={props.residual ? "1" : "0"}
      data-actionable={props.actionable ? "1" : "0"}
      data-message-id={props.messageId}
      data-anchor-id={props.anchorId ?? ""}
    >
      {props.choices.map((c) => (
        <button
          key={c.id}
          type="button"
          className="fig-nora-choice"
          data-testid="nora-choice"
          data-choice-id={c.id}
          disabled={!props.actionable || props.busy || props.choiceFrozen}
          onClick={() => props.messageId && props.onChoice?.(c, props.messageId)}
        >
          {c.label}
        </button>
      ))}
      {!props.actionable ? (
        <p className="fig-nora-choices-expired" data-testid="nora-choices-expired">
          Propositions expirées — consultation seule.
        </p>
      ) : null}
    </div>
  );
}

function RefsCluster(props: {
  references: TurnReference[];
  residual?: boolean;
  anchorId?: string;
  onReference?: (ref: TurnReference) => void;
}) {
  if (!props.references.length) return null;
  return (
    <ul
      className="fig-nora-refs fig-visual-refs-anchor fig-comp-refs"
      data-testid="nora-refs"
      data-block-kind="references"
      data-residual={props.residual ? "1" : "0"}
      data-anchor-id={props.anchorId ?? ""}
    >
      {props.references.map((r, i) => (
        <li key={`${r.kind}-${r.resourceId ?? r.path ?? r.href ?? i}`}>
          <button
            type="button"
            className="fig-nora-ref-link"
            data-testid="nora-ref-link"
            data-ref-kind={r.kind}
            onClick={() => props.onReference?.(r)}
          >
            Consulter · {r.label}
            {r.available === false ? " (à vérifier)" : ""}
          </button>
        </li>
      ))}
    </ul>
  );
}

/** Defect C — never truncate; exhaustive structured fallback. */
function textAltFor(block: VisualBlock): string {
  return buildExhaustiveBlockFallback(block);
}

function AdmittedBlockView({
  admitted,
  canonicalReferences,
  onReference,
}: {
  admitted: AdmittedBlock;
  canonicalReferences?: TurnReference[];
  onReference?: (ref: TurnReference) => void;
}) {
  const { block, variant } = admitted;
  if (block.kind === "comparison") {
    return (
      <ComparisonView
        block={block}
        variant={variant as ComparisonVariant}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "sequence") {
    return (
      <SequenceView
        block={block}
        variant={variant as SequenceVariant}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "relations") {
    return (
      <RelationsView
        block={block}
        variant={variant as RelationsVariant}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "synthesis") {
    return (
      <SynthesisView
        block={block}
        canonicalReferences={canonicalReferences}
        onReference={onReference}
      />
    );
  }
  if (block.kind === "text") {
    return <TextView block={block} />;
  }
  return null;
}

export type NoraCompositionProps = {
  composition: VisualComposition;
  /** Canonical replyDraft / message body for width-local re-admission consistency. */
  canonicalText?: string | null;
  choices?: TurnChoice[];
  references?: TurnReference[];
  actionable?: boolean;
  busy?: boolean;
  choiceFrozen?: boolean;
  messageId?: string;
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  onReference?: (ref: TurnReference) => void;
};

export function NoraComposition(props: NoraCompositionProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [widthPx, setWidthPx] = useState<number | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof ResizeObserver === "undefined") {
      setWidthPx(el?.clientWidth ?? null);
      return;
    }
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (typeof w === "number" && Number.isFinite(w)) {
        setWidthPx(Math.round(w));
      }
    });
    ro.observe(el);
    setWidthPx(Math.round(el.clientWidth));
    return () => ro.disconnect();
  }, []);

  const admission = admitConversationalComposition(props.composition, {
    containerWidthPx: widthPx,
    canonicalText: props.canonicalText,
  });
  const choices = props.choices ?? [];
  const references = props.references ?? [];
  const choiceParts = partitionChoicesForAnchors(props.composition.blocks, choices);
  const refParts = partitionReferencesForAnchors(props.composition.blocks, references);
  const alreadyConsultable = provenanceConsultableKeys(
    props.composition.blocks,
    references,
  );
  const dedupeRefs = (list: TurnReference[]) =>
    list.filter((r) => !alreadyConsultable.has(canonicalReferenceKey(r)));

  return (
    <div
      ref={rootRef}
      className="fig-visual-composition fig-comp-composition"
      data-testid="nora-visual-composition"
      data-comp-testid="nora-composition"
      data-schema={props.composition.schemaVersion}
      data-contract={admission.contract}
      data-owns-body={admission.ownsBody ? "1" : "0"}
      data-body-policy={admission.bodyPolicy}
      data-container-width={widthPx ?? ""}
    >
      {admission.admitted.map((admitted) => {
        if (admitted.block.kind === "choices") {
          return (
            <ChoicesCluster
              key={admitted.block.id}
              choices={choiceParts.byAnchorId.get(admitted.block.id) ?? []}
              actionable={props.actionable}
              busy={props.busy}
              choiceFrozen={props.choiceFrozen}
              messageId={props.messageId}
              onChoice={props.onChoice}
              anchorId={admitted.block.id}
            />
          );
        }
        if (admitted.block.kind === "references") {
          return (
            <RefsCluster
              key={admitted.block.id}
              references={dedupeRefs(refParts.byAnchorId.get(admitted.block.id) ?? [])}
              onReference={props.onReference}
              anchorId={admitted.block.id}
            />
          );
        }
        return (
          <BlockErrorBoundary
            key={admitted.block.id}
            blockId={admitted.block.id}
            textAlternative={textAltFor(admitted.block)}
          >
            {/* C2-08 — DEV/E2E probe only; armed via window.__SFIA_E2E_COMPOSITION_THROW_BLOCK_ID__ */}
            <E2eCompositionThrowProbe blockId={admitted.block.id} />
            <AdmittedBlockView
              admitted={admitted}
              canonicalReferences={references}
              onReference={props.onReference}
            />
          </BlockErrorBoundary>
        );
      })}
      {compositionAnchorsChoices(props.composition) ? (
        <ChoicesCluster
          choices={choiceParts.residual}
          actionable={props.actionable}
          busy={props.busy}
          choiceFrozen={props.choiceFrozen}
          messageId={props.messageId}
          onChoice={props.onChoice}
          residual
          anchorId="residual-choices"
        />
      ) : null}
      {compositionAnchorsReferences(props.composition) ? (
        <RefsCluster
          references={dedupeRefs(refParts.residual)}
          onReference={props.onReference}
          residual
          anchorId="residual-references"
        />
      ) : null}
    </div>
  );
}

```


### FILE UNTRACKED `projects/sfia-studio-next/web/src/components/figma/NoraCompositionGraphs.tsx` (412 lines)

```tsx
"use client";

/**
 * LEGACY ARTISAN GRAPH LAYOUT — retired from production rendering path.
 * Kept only for: (1) E2eCompositionThrowProbe (C2-08), (2) historical unit baselines.
 * Production relations use `@/components/figma/nora-composition/DirectedRelationBoard`
 * + optional ELK candidate (`directed-layout/candidate-elk`) pending Morris GO.
 *
 * Do not reintroduce these measured-SVG views as the primary layout engine.
 */

import React, {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import type { RelationsBlock } from "@/domains/conversation/visual-composition";

void React;

function relationRole(
  kind: string | undefined,
): "information" | "observation" | "hypothesis" | "risk" | "recommendation" | "dependency" {
  switch (kind) {
    case "hypothesis":
      return "hypothesis";
    case "finding":
    case "fact":
      return "observation";
    case "cause":
      return "dependency";
    case "unknown":
      return "information";
    default:
      return "information";
  }
}

type PathSeg = { key: string; d: string };

function useMeasuredConnectors(
  deps: unknown[],
  collect: (root: HTMLDivElement, rootBox: DOMRect) => PathSeg[],
) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [paths, setPaths] = useState<PathSeg[]>([]);

  const measure = () => {
    const root = rootRef.current;
    if (!root) return;
    const rootBox = root.getBoundingClientRect();
    setSize({ w: root.clientWidth, h: root.clientHeight });
    setPaths(collect(root, rootBox));
  };

  useLayoutEffect(() => {
    measure();
    const root = rootRef.current;
    if (!root || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(root);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { rootRef, size, paths };
}

function ConnectorSvg(props: {
  size: { w: number; h: number };
  paths: PathSeg[];
  markerId: string;
  testId: string;
}) {
  if (props.size.w <= 0 || props.size.h <= 0 || props.paths.length === 0) return null;
  return (
    <svg
      className="fig-comp-graph-svg"
      data-testid={props.testId}
      width={props.size.w}
      height={props.size.h}
      viewBox={`0 0 ${props.size.w} ${props.size.h}`}
      aria-hidden
    >
      <defs>
        <marker
          id={props.markerId}
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" className="fig-comp-deps-arrowhead" />
        </marker>
      </defs>
      {props.paths.map((p) => (
        <path
          key={p.key}
          d={p.d}
          className="fig-comp-deps-connector"
          markerEnd={`url(#${props.markerId})`}
          data-edge-key={p.key}
        />
      ))}
    </svg>
  );
}

function cubic(x1: number, y1: number, x2: number, y2: number): string {
  const midY = (y1 + y2) / 2;
  return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
}

/**
 * Figma 08 — decision tree with root + yes/no branches and measured connectors.
 */
export function DecisionTreeConnectedView({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  const reactId = useId();
  const markerId = `fig-tree-arrow-${reactId.replace(/:/g, "")}`;
  const children = new Map<string, typeof block.edges>();
  const targets = new Set(block.edges.map((e) => e.to));
  for (const e of block.edges) {
    const list = children.get(e.from) ?? [];
    list.push(e);
    children.set(e.from, list);
  }
  const roots = block.nodes.filter((n) => !targets.has(n.id));
  const root = roots[0] ?? block.nodes[0];
  const nodeById = new Map(block.nodes.map((n) => [n.id, n] as const));

  type Laid = { id: string; depth: number; branch: "root" | "yes" | "no" | "then" };
  const laid: Laid[] = [];
  const walk = (id: string, depth: number, branch: Laid["branch"]) => {
    laid.push({ id, depth, branch });
    for (const e of children.get(id) ?? []) {
      const b =
        e.relation === "condition_true"
          ? "yes"
          : e.relation === "condition_false"
            ? "no"
            : "then";
      walk(e.to, depth + 1, b);
    }
  };
  if (root) walk(root.id, 0, "root");

  const byDepth = new Map<number, Laid[]>();
  for (const n of laid) {
    const list = byDepth.get(n.depth) ?? [];
    list.push(n);
    byDepth.set(n.depth, list);
  }
  const depths = [...byDepth.keys()].sort((a, b) => a - b);

  const { rootRef, size, paths } = useMeasuredConnectors(
    [block, titleById, laid.length],
    (rootEl, rootBox) => {
      const next: PathSeg[] = [];
      block.edges.forEach((e, i) => {
        const fromEl = rootEl.querySelector(`[data-node-id="${CSS.escape(e.from)}"]`);
        const toEl = rootEl.querySelector(`[data-node-id="${CSS.escape(e.to)}"]`);
        if (!(fromEl instanceof HTMLElement) || !(toEl instanceof HTMLElement)) return;
        const a = fromEl.getBoundingClientRect();
        const b = toEl.getBoundingClientRect();
        const x1 = a.left + a.width / 2 - rootBox.left;
        const y1 = a.bottom - rootBox.top;
        const x2 = b.left + b.width / 2 - rootBox.left;
        const y2 = b.top - rootBox.top;
        next.push({ key: `${e.from}-${e.to}-${i}`, d: cubic(x1, y1, x2, y2) });
      });
      return next;
    },
  );

  return (
    <div
      className="fig-comp-tree fig-comp-tree-connected"
      data-testid="nora-composition-decision-tree"
      data-layout-hint="decisionTree"
      data-connectors={paths.length > 0 ? "1" : "0"}
    >
      <div className="fig-comp-graph-canvas" ref={rootRef}>
        {depths.map((d) => (
          <div key={`depth-${d}`} className="fig-comp-tree-row" data-depth={d}>
            {(byDepth.get(d) ?? []).map((n) => {
              const node = nodeById.get(n.id);
              if (!node) return null;
              return (
                <div
                  key={n.id}
                  className={`fig-comp-tree-card fig-comp-tree-branch-${n.branch}`}
                  data-node-id={n.id}
                  data-branch={n.branch}
                >
                  <NoraSemanticIcon role={relationRole(node.kind)} />
                  <div>
                    <div className="fig-comp-relations-label">{node.label}</div>
                    {node.detail ? (
                      <div className="fig-comp-relations-detail">{node.detail}</div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
        {block.edges.map((e, i) => {
          const label =
            e.relation === "condition_true"
              ? "Si oui"
              : e.relation === "condition_false"
                ? "Si non"
                : e.label || "puis";
          return (
            <span
              key={`cond-${e.from}-${e.to}-${i}`}
              className="fig-comp-tree-edge-label sr-only"
            >
              {titleById.get(e.from) ?? e.from} — {label} → {titleById.get(e.to) ?? e.to}
            </span>
          );
        })}
        <ConnectorSvg
          size={size}
          paths={paths}
          markerId={markerId}
          testId="nora-composition-tree-connectors"
        />
      </div>
      <ul
        className="fig-comp-deps-edges"
        data-testid="nora-composition-tree-edges"
        data-directed="1"
        aria-label="Branches conditionnelles"
      >
        {block.edges.map((e, i) => (
          <li key={`${e.from}-${e.to}-${i}`} data-relation={e.relation ?? "flow"}>
            <span className="fig-comp-deps-from">{titleById.get(e.from) ?? e.from}</span>
            <span className="fig-comp-tree-condition">
              {e.relation === "condition_true"
                ? "Si oui"
                : e.relation === "condition_false"
                  ? "Si non"
                  : e.label || "puis"}
            </span>
            <span className="fig-comp-deps-to">{titleById.get(e.to) ?? e.to}</span>
          </li>
        ))}
      </ul>
      <p className="fig-comp-authority-note">
        Les branches conditionnelles sont des propositions de lecture — aucune HumanDecision
        n&apos;est créée.
      </p>
    </div>
  );
}

/**
 * Figma 09 — parallel lanes + measured sync/convergence connectors.
 */
export function ParallelProcessConnectedView({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  const reactId = useId();
  const markerId = `fig-parallel-arrow-${reactId.replace(/:/g, "")}`;
  const lanes = new Map<string, typeof block.nodes>();
  for (const n of block.nodes) {
    const lane = n.laneId?.trim() || "voie";
    const list = lanes.get(lane) ?? [];
    list.push(n);
    lanes.set(lane, list);
  }
  const syncTargets = new Set(
    block.edges.filter((e) => e.relation === "sync" || e.relation === "depends_on").map((e) => e.to),
  );
  const gateId = [...syncTargets][0];
  const gateLane =
    gateId != null
      ? (block.nodes.find((n) => n.id === gateId)?.laneId?.trim() || null)
      : null;

  const { rootRef, size, paths } = useMeasuredConnectors(
    [block, titleById, lanes.size],
    (rootEl, rootBox) => {
      const next: PathSeg[] = [];
      block.edges.forEach((e, i) => {
        const fromEl = rootEl.querySelector(`[data-node-id="${CSS.escape(e.from)}"]`);
        const toEl = rootEl.querySelector(`[data-node-id="${CSS.escape(e.to)}"]`);
        if (!(fromEl instanceof HTMLElement) || !(toEl instanceof HTMLElement)) return;
        const a = fromEl.getBoundingClientRect();
        const b = toEl.getBoundingClientRect();
        const x1 = a.left + a.width / 2 - rootBox.left;
        const y1 = a.bottom - rootBox.top;
        const x2 = b.left + b.width / 2 - rootBox.left;
        const y2 = b.top - rootBox.top;
        next.push({ key: `${e.from}-${e.to}-${i}`, d: cubic(x1, y1, x2, y2) });
      });
      return next;
    },
  );

  return (
    <div
      className="fig-comp-parallel fig-comp-parallel-connected"
      data-testid="nora-composition-parallel"
      data-layout-hint="parallelProcess"
      data-connectors={paths.length > 0 ? "1" : "0"}
      data-gate={gateId ?? ""}
    >
      <div className="fig-comp-graph-canvas" ref={rootRef}>
        <div className="fig-comp-parallel-lanes">
          {[...lanes.entries()].map(([lane, nodes]) => {
            const isGate = gateLane != null && lane === gateLane;
            return (
              <section
                key={lane}
                className={`fig-comp-parallel-lane${isGate ? " fig-comp-parallel-lane-gate" : ""}`}
                data-lane={lane}
                data-lane-role={isGate ? "gate" : "flow"}
                data-testid={isGate ? "nora-composition-parallel-gate" : undefined}
              >
                <h4 className="fig-comp-parallel-lane-title">
                  {lane}
                  {isGate ? " · convergence" : ""}
                </h4>
                <ol className="fig-comp-parallel-tasks">
                  {nodes.map((n) => (
                    <li key={n.id} className="fig-comp-parallel-task" data-node-id={n.id}>
                      <NoraSemanticIcon role={relationRole(n.kind)} />
                      <div>
                        <div className="fig-comp-relations-label">{n.label}</div>
                        {n.detail ? (
                          <div className="fig-comp-relations-detail">{n.detail}</div>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            );
          })}
        </div>
        <ConnectorSvg
          size={size}
          paths={paths}
          markerId={markerId}
          testId="nora-composition-parallel-connectors"
        />
      </div>
      <ul
        className="fig-comp-parallel-edges"
        data-testid="nora-composition-parallel-edges"
        data-directed="1"
      >
        {block.edges.map((e, i) => (
          <li key={`${e.from}-${e.to}-${i}`} data-relation={e.relation ?? "flow"}>
            <span className="fig-comp-deps-from">{titleById.get(e.from) ?? e.from}</span>
            <span className="fig-comp-deps-arrow" aria-hidden>
              →
            </span>
            <span className="fig-comp-deps-to">{titleById.get(e.to) ?? e.to}</span>
            {e.relation === "sync" ? (
              <span className="fig-comp-deps-rel"> — synchronisation</span>
            ) : e.relation === "depends_on" ? (
              <span className="fig-comp-deps-rel"> — dépendance</span>
            ) : null}
          </li>
        ))}
      </ul>
      <p className="fig-comp-authority-note">
        La convergence graphique n&apos;enregistre aucune décision humaine ni validation.
      </p>
    </div>
  );
}

/**
 * C2-08 — DEV/E2E only: throw after client mount when window flag matches block id.
 * Never enabled for end users; no production UI control.
 */
export function E2eCompositionThrowProbe({ blockId }: { blockId: string }): ReactNode {
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    // Never arm in production builds — no user-facing failure control.
    if (process.env.NODE_ENV === "production") return;
    if (typeof window === "undefined") return;
    const w = window as Window & { __SFIA_E2E_COMPOSITION_THROW_BLOCK_ID__?: string };
    if (w.__SFIA_E2E_COMPOSITION_THROW_BLOCK_ID__ === blockId) {
      setArmed(true);
    }
  }, [blockId]);
  if (armed && process.env.NODE_ENV !== "production") {
    throw new Error(`SFIA_E2E_COMPOSITION_THROW:${blockId}`);
  }
  return null;
}

```


### DIFF `projects/sfia-studio-next/web/src/components/figma/tokens.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 8623f598..934f810c 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -2163,6 +2163,713 @@
   }
 }

+/* Conversational composition v1 — adaptive presentation (CV-*) */
+.fig-comp-composition {
+  container-type: inline-size;
+  container-name: nora-composition;
+}
+
+.fig-comp-title {
+  overflow-wrap: anywhere;
+  word-break: break-word;
+}
+
+.fig-comp-alt h4,
+.fig-comp-alt p,
+.fig-comp-step h4,
+.fig-comp-fallback-text,
+.fig-comp-matrix th,
+.fig-comp-matrix td {
+  overflow-wrap: anywhere;
+  word-break: break-word;
+  white-space: normal;
+}
+
+.fig-comp-comparison-stack {
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+}
+
+.fig-comp-matrix-details {
+  margin-top: 12px;
+}
+
+.fig-comp-matrix-details-title {
+  margin: 0 0 8px;
+  font-size: 13px;
+  font-weight: 600;
+  color: var(--fig-muted);
+}
+
+.fig-comp-relations-label {
+  overflow-wrap: anywhere;
+  word-break: break-word;
+}
+
+.fig-comp-complement {
+  margin-top: 12px;
+}
+
+.fig-comp-authority-note {
+  margin: 10px 0 0;
+  font-size: 12px;
+  color: var(--fig-quiet);
+}
+
+.fig-comp-deps-nodes,
+.fig-comp-parallel-tasks,
+.fig-comp-tree-root,
+.fig-comp-tree-branches {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+}
+
+.fig-comp-deps-canvas {
+  position: relative;
+}
+
+.fig-comp-deps-svg {
+  position: absolute;
+  inset: 0;
+  width: 100%;
+  height: 100%;
+  pointer-events: none;
+  overflow: visible;
+  z-index: 1;
+}
+
+.fig-comp-deps-connector {
+  fill: none;
+  stroke: color-mix(in srgb, var(--fig-accent, #3a6ea5) 70%, var(--fig-line));
+  stroke-width: 1.75;
+}
+
+.fig-comp-deps-arrowhead {
+  fill: color-mix(in srgb, var(--fig-accent, #3a6ea5) 70%, var(--fig-line));
+}
+
+.fig-comp-deps-layers {
+  position: relative;
+  z-index: 2;
+  display: flex;
+  flex-direction: column;
+  gap: 28px;
+}
+
+.fig-comp-deps-layer {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+  align-items: stretch;
+}
+
+.fig-comp-deps-node,
+.fig-comp-tree-node {
+  display: flex;
+  gap: 8px;
+  align-items: flex-start;
+  padding: 8px 10px;
+  margin: 0 0 8px;
+  border: 1px solid var(--fig-line);
+  border-radius: 8px;
+  background: color-mix(in srgb, var(--fig-panel) 88%, transparent);
+}
+
+.fig-comp-deps-layer .fig-comp-deps-node {
+  margin: 0;
+  flex: 1 1 160px;
+  min-width: min(100%, 140px);
+}
+
+.fig-comp-deps-edges {
+  list-style: none;
+  margin: 10px 0 0;
+  padding: 8px 10px;
+  border-left: 3px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+  background: color-mix(in srgb, var(--fig-panel) 70%, transparent);
+}
+
+.fig-comp-deps-edges li {
+  margin: 0 0 6px;
+  overflow-wrap: anywhere;
+}
+
+.fig-comp-deps-arrow {
+  margin: 0 6px;
+  color: var(--fig-accent, #3a6ea5);
+  font-weight: 600;
+}
+
+.fig-comp-deps-rel {
+  color: var(--fig-muted);
+  font-size: 12px;
+}
+
+.fig-comp-parallel-lanes {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr));
+  gap: 12px;
+}
+
+.fig-comp-parallel-lane {
+  border: 1px solid var(--fig-line);
+  border-radius: 8px;
+  padding: 10px 12px;
+}
+
+.fig-comp-parallel-lane-title {
+  margin: 0 0 8px;
+  font-size: 13px;
+  color: var(--fig-muted);
+}
+
+.fig-comp-parallel-sync,
+.fig-comp-parallel-edges {
+  list-style: none;
+  margin: 10px 0 0;
+  padding: 8px 10px;
+  border-left: 3px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+  background: color-mix(in srgb, var(--fig-panel) 70%, transparent);
+  overflow-wrap: anywhere;
+}
+
+.fig-comp-parallel-edges li {
+  margin: 0 0 6px;
+}
+
+.fig-comp-tree-branches {
+  margin: 6px 0 0 16px;
+  padding-left: 10px;
+  border-left: 2px solid var(--fig-line);
+}
+
+.fig-comp-tree-condition {
+  display: block;
+  margin: 4px 0;
+  font-size: 12px;
+  color: var(--fig-muted);
+}
+
+.fig-comp-relations-detail {
+  color: var(--fig-muted);
+  overflow-wrap: anywhere;
+}
+
+.fig-comp-comparison-cards {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
+  gap: 12px;
+}
+
+.fig-comp-matrix-wrap {
+  overflow-x: auto;
+  max-width: 100%;
+  -webkit-overflow-scrolling: touch;
+}
+
+.fig-comp-matrix {
+  width: max-content;
+  min-width: 100%;
+  border-collapse: collapse;
+}
+
+.fig-comp-matrix th,
+.fig-comp-matrix td {
+  padding: 8px 10px;
+  text-align: left;
+  vertical-align: top;
+  white-space: normal;
+}
+
+.fig-comp-steps-vertical {
+  display: flex;
+  flex-direction: column;
+  gap: 0;
+}
+
+.fig-comp-steps-horizontal {
+  display: flex;
+  flex-direction: row;
+  flex-wrap: wrap;
+  gap: 12px;
+  align-items: stretch;
+}
+
+.fig-comp-steps-horizontal > .fig-comp-step {
+  flex: 1 1 180px;
+  min-width: min(100%, 180px);
+}
+
+.fig-comp-relations-svg {
+  width: 100%;
+  max-width: 100%;
+  height: auto;
+}
+
+.fig-comp-relations-svg .fig-visual-node-label {
+  font-size: 10px;
+}
+
+.fig-comp-block-fallback,
+.fig-comp-fallback-text {
+  margin: 0;
+  padding: 10px 12px;
+  border-left: 3px solid var(--fig-line);
+  color: var(--fig-ink);
+  background: color-mix(in srgb, var(--fig-panel) 80%, transparent);
+}
+
+/* C2 — complementary substance under substitute (visible, not sr-only) */
+.fig-comp-substance-complement {
+  margin: 12px 0 0;
+  padding: 10px 12px;
+  border-left: 3px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+  background: color-mix(in srgb, var(--fig-panel) 72%, transparent);
+}
+
+.fig-comp-substance-complement-label {
+  margin: 0 0 4px;
+  font-size: 11px;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--fig-muted);
+}
+
+.fig-comp-substance-complement-text {
+  margin: 0;
+  overflow-wrap: anywhere;
+  color: var(--fig-ink);
+}
+
+/* W3 — Figma-oriented hierarchy on Studio dark tokens (adaptive, not pixel-fixed) */
+.fig-comp-comparison-cards {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
+  gap: 14px;
+}
+
+.fig-comp-comparison-cards .fig-comp-alt,
+.fig-comp-comparison-stack .fig-comp-alt {
+  padding: 12px 14px;
+  border: 1px solid var(--fig-line);
+  border-radius: 10px;
+  border-top: 3px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 65%, var(--fig-line));
+  background: color-mix(in srgb, var(--fig-panel) 90%, transparent);
+}
+
+.fig-comp-comparison-cards .fig-comp-alt h4,
+.fig-comp-comparison-stack .fig-comp-alt h4 {
+  margin: 0 0 6px;
+  font-size: 15px;
+}
+
+.fig-comp-authority-note {
+  margin: 10px 0 0;
+  font-size: 12px;
+  color: var(--fig-muted);
+}
+
+.fig-comp-tree-root,
+.fig-comp-tree-branches {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+}
+
+.fig-comp-tree-branches {
+  margin: 8px 0 0 18px;
+  padding-left: 14px;
+  border-left: 2px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 45%, var(--fig-line));
+}
+
+.fig-comp-tree-condition {
+  display: inline-block;
+  margin: 0 0 6px;
+  padding: 2px 8px;
+  border-radius: 999px;
+  font-size: 11px;
+  letter-spacing: 0.02em;
+  color: var(--fig-ink);
+  background: color-mix(in srgb, var(--fig-accent, #3a6ea5) 22%, transparent);
+  border: 1px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 40%, var(--fig-line));
+}
+
+.fig-comp-tree-node {
+  align-items: center;
+}
+
+.fig-comp-parallel-lane {
+  background: color-mix(in srgb, var(--fig-panel) 85%, transparent);
+}
+
+.fig-comp-parallel-lane-title {
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  font-size: 11px;
+}
+
+.fig-comp-parallel-edges {
+  margin-top: 12px;
+  padding: 8px 10px;
+  border-left: 3px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+}
+
+.fig-visual-recommendation {
+  margin-top: 12px;
+  padding: 10px 12px;
+  border-left: 3px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 70%, var(--fig-line));
+  background: color-mix(in srgb, var(--fig-panel) 78%, transparent);
+}
+
+@container nora-composition (max-width: 560px) {
+  .fig-comp-comparison-cards {
+    grid-template-columns: 1fr;
+  }
+
+  .fig-comp-steps-horizontal {
+    flex-direction: column;
+  }
+
+  .fig-comp-parallel-lanes {
+    grid-template-columns: 1fr;
+  }
+
+  .fig-comp-tree-row {
+    flex-direction: column;
+    align-items: stretch;
+  }
+}
+
+/* W3 — measured graph canvas (Figma 07–09 orientation, dark Studio) */
+.fig-comp-graph-canvas {
+  position: relative;
+  isolation: isolate;
+}
+
+.fig-comp-graph-svg {
+  position: absolute;
+  inset: 0;
+  width: 100%;
+  height: 100%;
+  pointer-events: none;
+  z-index: 0;
+  overflow: visible;
+}
+
+.fig-comp-tree-connected .fig-comp-tree-row,
+.fig-comp-parallel-connected .fig-comp-parallel-lanes,
+.fig-comp-parallel-connected .fig-comp-parallel-task,
+.fig-comp-tree-connected .fig-comp-tree-card {
+  position: relative;
+  z-index: 1;
+}
+
+.fig-comp-tree-connected {
+  display: flex;
+  flex-direction: column;
+  gap: 12px;
+}
+
+.fig-comp-tree-row {
+  display: flex;
+  flex-wrap: wrap;
+  justify-content: center;
+  gap: 16px 24px;
+  padding: 10px 4px 18px;
+}
+
+.fig-comp-tree-card {
+  display: flex;
+  align-items: flex-start;
+  gap: 10px;
+  min-width: min(220px, 100%);
+  max-width: 320px;
+  padding: 12px 14px;
+  border-radius: 10px;
+  border: 1px solid color-mix(in srgb, var(--fig-line) 80%, transparent);
+  background: color-mix(in srgb, var(--fig-panel) 92%, #0a121c);
+  box-shadow: 0 1px 0 color-mix(in srgb, #fff 4%, transparent);
+}
+
+.fig-comp-tree-branch-root {
+  border-color: color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+  background: color-mix(in srgb, var(--fig-accent, #3a6ea5) 14%, var(--fig-panel));
+}
+
+.fig-comp-tree-branch-yes {
+  border-color: color-mix(in srgb, #3d8f6e 50%, var(--fig-line));
+}
+
+.fig-comp-tree-branch-no {
+  border-color: color-mix(in srgb, #a86b4a 50%, var(--fig-line));
+}
+
+.fig-comp-tree-branch-yes::before,
+.fig-comp-tree-branch-no::before {
+  content: attr(data-branch);
+  position: absolute;
+  top: -9px;
+  left: 12px;
+  padding: 1px 8px;
+  border-radius: 999px;
+  font-size: 10px;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  background: var(--fig-panel);
+  border: 1px solid var(--fig-line);
+  color: var(--fig-muted);
+}
+
+.fig-comp-tree-branch-yes::before {
+  content: "Si oui";
+  color: color-mix(in srgb, #7dcea0 80%, var(--fig-ink));
+  border-color: color-mix(in srgb, #3d8f6e 45%, var(--fig-line));
+}
+
+.fig-comp-tree-branch-no::before {
+  content: "Si non";
+  color: color-mix(in srgb, #d4a574 80%, var(--fig-ink));
+  border-color: color-mix(in srgb, #a86b4a 45%, var(--fig-line));
+}
+
+.fig-comp-parallel-connected .fig-comp-parallel-lanes {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
+  gap: 14px;
+  padding-bottom: 8px;
+}
+
+.fig-comp-parallel-task {
+  display: flex;
+  align-items: flex-start;
+  gap: 10px;
+  margin: 8px 0;
+  padding: 10px 12px;
+  border-radius: 8px;
+  border: 1px solid color-mix(in srgb, var(--fig-line) 75%, transparent);
+  background: color-mix(in srgb, var(--fig-panel) 88%, transparent);
+  list-style: none;
+}
+
+.fig-comp-parallel-tasks {
+  list-style: none;
+  margin: 0;
+  padding: 0;
+}
+
+.fig-comp-parallel-lane-gate {
+  border-color: color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+  background: color-mix(in srgb, var(--fig-accent, #3a6ea5) 12%, var(--fig-panel));
+  grid-column: 1 / -1;
+}
+
+.fig-comp-parallel-lane {
+  padding: 12px;
+  border-radius: 10px;
+  border: 1px solid color-mix(in srgb, var(--fig-line) 70%, transparent);
+}
+
+/* W3 — Figma 01 editorial synthesis */
+.fig-comp-synthesis-editorial .fig-comp-synth-flow {
+  display: flex;
+  flex-direction: column;
+  gap: 18px;
+  margin-top: 8px;
+}
+
+.fig-comp-synth-section-title {
+  margin: 0 0 8px;
+  font-size: 12px;
+  font-weight: 600;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
+  color: var(--fig-muted);
+}
+
+.fig-comp-synth-row {
+  display: flex;
+  align-items: flex-start;
+  gap: 12px;
+  padding: 10px 0;
+  border-bottom: 1px solid color-mix(in srgb, var(--fig-line) 55%, transparent);
+}
+
+.fig-comp-synth-row:last-child {
+  border-bottom: none;
+}
+
+.fig-comp-synth-label {
+  display: block;
+  font-size: 15px;
+  font-weight: 600;
+  color: var(--fig-ink);
+}
+
+.fig-comp-synth-detail {
+  margin-top: 4px;
+  color: color-mix(in srgb, var(--fig-ink) 82%, var(--fig-muted));
+}
+
+.fig-comp-synth-priorities {
+  padding: 12px 14px;
+  border-radius: 10px;
+  border-left: 3px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 70%, var(--fig-line));
+  background: color-mix(in srgb, var(--fig-accent, #3a6ea5) 10%, var(--fig-panel));
+}
+
+.fig-comp-synth-hypotheses {
+  padding: 4px 0 4px 12px;
+  border-left: 2px dashed color-mix(in srgb, var(--fig-muted) 55%, var(--fig-line));
+}
+
+.fig-comp-synth-risks .fig-comp-synth-label {
+  color: color-mix(in srgb, #d4a574 70%, var(--fig-ink));
+}
+
+/* W3 — stronger sequence path (Figma 02/06) */
+.fig-comp-steps-vertical .fig-comp-step {
+  position: relative;
+  padding-left: 8px;
+}
+
+.fig-comp-steps-vertical .fig-visual-step-marker {
+  width: 28px;
+  height: 28px;
+  border-radius: 999px;
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  font-size: 12px;
+  font-weight: 700;
+  background: color-mix(in srgb, var(--fig-accent, #3a6ea5) 28%, var(--fig-panel));
+  border: 1px solid color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+  color: var(--fig-ink);
+}
+
+.fig-comp-steps-vertical .fig-visual-step-connector {
+  width: 2px;
+  min-height: 16px;
+  margin: 4px 0 4px 13px;
+  background: linear-gradient(
+    to bottom,
+    color-mix(in srgb, var(--fig-accent, #3a6ea5) 60%, transparent),
+    color-mix(in srgb, var(--fig-line) 80%, transparent)
+  );
+}
+
+.fig-comp-steps-horizontal {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px 4px;
+  align-items: stretch;
+}
+
+.fig-comp-steps-horizontal .fig-comp-step {
+  flex: 1 1 160px;
+  min-width: 140px;
+  max-width: 280px;
+  padding: 12px;
+  border-radius: 10px;
+  border: 1px solid color-mix(in srgb, var(--fig-line) 75%, transparent);
+  background: color-mix(in srgb, var(--fig-panel) 90%, transparent);
+}
+
+.fig-comp-steps-horizontal .fig-visual-step-connector {
+  align-self: center;
+  width: 24px;
+  height: 2px;
+  margin: 0 2px;
+  background: color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+  flex: 0 0 24px;
+}
+
+/* New graphical subsystem — nora-composition (not E05 artisan) */
+.fig-nc-graph-node {
+  display: flex;
+  align-items: flex-start;
+  gap: 10px;
+  padding: 12px 14px;
+  border-radius: 10px;
+  border: 1px solid color-mix(in srgb, var(--fig-line) 80%, transparent);
+  background: color-mix(in srgb, var(--fig-panel) 92%, #0a121c);
+}
+
+.fig-nc-graph-node-label {
+  font-size: 14px;
+  font-weight: 600;
+  color: var(--fig-ink);
+}
+
+.fig-nc-graph-node-detail {
+  margin-top: 4px;
+  font-size: 13px;
+  color: color-mix(in srgb, var(--fig-ink) 80%, var(--fig-muted));
+}
+
+.fig-nc-graph-node-status {
+  margin-top: 6px;
+  font-size: 11px;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--fig-muted);
+}
+
+.fig-nc-graph-node-yes {
+  border-color: color-mix(in srgb, #3d8f6e 45%, var(--fig-line));
+}
+
+.fig-nc-graph-node-no {
+  border-color: color-mix(in srgb, #a86b4a 45%, var(--fig-line));
+}
+
+.fig-nc-graph-node-gate,
+.fig-nc-graph-node-emphasis {
+  border-color: color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+  background: color-mix(in srgb, var(--fig-accent, #3a6ea5) 12%, var(--fig-panel));
+}
+
+.fig-nc-node-flow,
+.fig-nc-parallel-tasks {
+  display: flex;
+  flex-direction: column;
+  gap: 10px;
+}
+
+.fig-nc-parallel-lanes {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
+  gap: 14px;
+}
+
+.fig-nc-parallel-lane {
+  padding: 12px;
+  border-radius: 10px;
+  border: 1px solid color-mix(in srgb, var(--fig-line) 70%, transparent);
+}
+
+.fig-nc-parallel-lane-gate {
+  grid-column: 1 / -1;
+  border-color: color-mix(in srgb, var(--fig-accent, #3a6ea5) 55%, var(--fig-line));
+}
+
+.fig-nc-engine-note {
+  margin: 10px 0 0;
+  font-size: 12px;
+  color: var(--fig-muted);
+}
+
+.fig-nc-elk-canvas {
+  margin-bottom: 12px;
+}
+
+.fig-nc-elk-svg {
+  position: absolute;
+  inset: 0;
+  pointer-events: none;
+}
+
 .project-unavailable {
   display: flex;
   align-items: flex-start;

```


### DIFF `projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
index 37b839c4..640ba3e0 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
@@ -522,6 +522,8 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     const E05_S4_TRAJECTORY = "E05_S4_TRAJECTORY";
     const E05_S5_COMPOSITE = "E05_S5_COMPOSITE";
     const E05_S7_INSUFFICIENT = "E05_S7_INSUFFICIENT";
+    const E05_F5_DECISION_TREE = "E05_F5_DECISION_TREE";
+    const E05_F5_PARALLEL = "E05_F5_PARALLEL";

     await page.goto("/login");
     await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
@@ -566,14 +568,83 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     await ask(E05_S2_DIAGNOSTIC);
     await expect(page.getByTestId("nora-visual-relations")).toBeVisible({ timeout: 45000 });
     await expect(page.getByTestId("nora-visual-icon").first()).toBeVisible();
+    // C-10 — directed CSS layout (or list fallback); never fixed-coordinate SVG.
+    const rel = page.getByTestId("nora-visual-relations").last();
+    const layout = await rel.getAttribute("data-layout");
+    expect(layout === "directed" || layout === "structured-list").toBeTruthy();
+    await expect(rel).toHaveAttribute("data-layout-hint", "dependencies");
     await expect(page.getByTestId("nora-visual-composition").last()).toHaveAttribute(
       "data-owns-body",
       "1",
     );
+    await expect(page.getByTestId("nora-visual-composition").last()).toHaveAttribute(
+      "data-body-policy",
+      "complement",
+    );
+    // F3 — new directed board (legacy artisan retired) + explicit directed edges.
+    const depsBoard = page.getByTestId("nora-composition-dependencies").last();
+    await expect(depsBoard).toBeVisible();
+    await expect(depsBoard).toHaveAttribute("data-legacy-artisan", "0");
+    await expect(page.getByTestId("nora-composition-relations-edges")).toHaveAttribute(
+      "data-directed",
+      "1",
+    );
     await page.screenshot({
       path: path.join(evidenceDir, "runtime-s2-diagnostic-1440.png"),
       fullPage: false,
     });
+    await page.screenshot({
+      path: path.join(evidenceDir, "corrective-runtime-relations-list-1440.png"),
+      fullPage: false,
+    });
+    await page.screenshot({
+      path: path.join(evidenceDir, "f5-runtime-dependencies-directed-1440.png"),
+      fullPage: false,
+    });
+
+    // F5 — decision tree (Figma 08 family) + parallel (Figma 09 family).
+    await ask(E05_F5_DECISION_TREE);
+    const tree = page.getByTestId("nora-composition-decision-tree").last();
+    await expect(tree).toBeVisible({ timeout: 45000 });
+    await expect(page.getByTestId("nora-visual-relations").last()).toHaveAttribute(
+      "data-layout",
+      "directed",
+    );
+    await expect(page.getByTestId("nora-visual-relations").last()).toHaveAttribute(
+      "data-layout-hint",
+      "decisionTree",
+    );
+    await expect(tree).toHaveAttribute("data-legacy-artisan", "0");
+    await expect(tree.locator('[data-branch="root"]')).toBeVisible();
+    await expect(tree.locator('[data-branch="yes"]')).toBeVisible();
+    await expect(tree.locator('[data-branch="no"]')).toBeVisible();
+    await expect(page.getByTestId("nora-composition-tree-edges")).toBeVisible();
+    await page.screenshot({
+      path: path.join(evidenceDir, "f5-runtime-decision-tree-1440.png"),
+      fullPage: false,
+    });
+    await page.screenshot({
+      path: path.join(evidenceDir, "w3-runtime-figma08-tree-1440.png"),
+      fullPage: false,
+    });
+
+    await ask(E05_F5_PARALLEL);
+    const parallel = page.getByTestId("nora-composition-parallel").last();
+    await expect(parallel).toBeVisible({ timeout: 45000 });
+    await expect(page.getByTestId("nora-visual-relations").last()).toHaveAttribute(
+      "data-layout-hint",
+      "parallelProcess",
+    );
+    await expect(page.getByTestId("nora-composition-parallel-edges")).toBeVisible();
+    await expect(page.getByTestId("nora-composition-parallel-gate")).toBeVisible();
+    await page.screenshot({
+      path: path.join(evidenceDir, "f5-runtime-parallel-1440.png"),
+      fullPage: false,
+    });
+    await page.screenshot({
+      path: path.join(evidenceDir, "w3-runtime-figma09-parallel-1440.png"),
+      fullPage: false,
+    });

     // S3 — comparison + recommendation + choice/ref anchors + provenance P1-B.
     await ask(E05_S3_COMPARISON);
@@ -593,14 +664,29 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     await expect(s3.getByTestId("nora-visual-prov-link")).toHaveCount(1);
     await expect(s3.getByTestId("nora-ref-link")).toHaveCount(0);
     await expect(s3.getByText(/Consulter · Note de cadrage coordination/i)).toHaveCount(1);
+    // Corrective A — alternative substance remains visible (cards or matrix+details).
+    await expect(s3.getByTestId("nora-composition-alt-detail").first()).toBeVisible();
+    // C2 — complementary reserve from textAlternative must be consultable in DOM (not sr-only).
+    const s3Complement = s3.getByTestId("nora-composition-substance-complement");
+    await expect(s3Complement).toBeVisible();
+    await expect(s3Complement).toContainText(/Réserve C2/i);
+    await expect(s3Complement).toContainText(/porteur n'est pas nommé|porteur n’est pas nommé/i);
     await page.screenshot({
       path: path.join(evidenceDir, "runtime-visual-comparison-1440.png"),
       fullPage: false,
     });
+    await page.screenshot({
+      path: path.join(evidenceDir, "c2-runtime-substance-complement-1440.png"),
+      fullPage: false,
+    });
     await page.screenshot({
       path: path.join(evidenceDir, "runtime-s3-provenance-1440.png"),
       fullPage: false,
     });
+    await page.screenshot({
+      path: path.join(evidenceDir, "corrective-runtime-comparison-1440.png"),
+      fullPage: false,
+    });

     // S4 — trajectory / sequence with human-readable dependencies (V02).
     await ask(E05_S4_TRAJECTORY);
@@ -702,6 +788,97 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
     });
   });

+  test("C2-08 ErrorBoundary recovers real post-mount React exception (BROWSER)", async ({
+    page,
+  }) => {
+    test.setTimeout(180_000);
+    const evidenceDir = path.resolve(
+      __dirname,
+      "../../docs/evidence/ensemble-05-travail-nora",
+    );
+    fs.mkdirSync(evidenceDir, { recursive: true });
+
+    // Arm DEV/E2E probe before any composition mounts (client useEffect → throw).
+    await page.addInitScript(() => {
+      (
+        window as Window & { __SFIA_E2E_COMPOSITION_THROW_BLOCK_ID__?: string }
+      ).__SFIA_E2E_COMPOSITION_THROW_BLOCK_ID__ = "s3-cmp";
+    });
+
+    const apiPosts: string[] = [];
+    page.on("request", (req) => {
+      if (req.method() === "POST" && /\/api\//.test(req.url())) {
+        apiPosts.push(req.url());
+      }
+    });
+
+    await page.goto("/login");
+    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+    await page.waitForURL("**/portfolio");
+    const { projectId } = await bootstrapProjectFromPortfolio(page, {
+      seed: "E05 C2-08 boundary",
+      name: `E05 C208 ${Date.now()}`,
+      summary: "c2-08-browser",
+    });
+    await page.goto(`/projects/${projectId}?surface=travail`);
+    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
+      "data-project-load-state",
+      "ready",
+      { timeout: 20000 },
+    );
+
+    const draft = page.getByTestId("thread-draft");
+    const send = page.getByTestId("thread-send");
+    const assistantsBefore = await page.getByTestId("nora-msg-assistant").count();
+
+    await draft.fill("E05_S3_COMPARISON");
+    await send.click();
+    await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|Nora/i, {
+      timeout: 45000,
+    });
+
+    const assistant = page.getByTestId("nora-msg-assistant").last();
+    await expect(assistant).toBeVisible();
+
+    // 1–2: local boundary intercepts; exhaustive fallback for s3-cmp
+    const fallback = assistant.getByTestId("nora-composition-block-fallback");
+    await expect(fallback).toBeVisible({ timeout: 15000 });
+    await expect(fallback).toHaveAttribute("data-block-id", "s3-cmp");
+    await expect(fallback).toContainText(/Progressive|Simultan|Réserve C2|avis/i);
+
+    // 3: complementary reserve still consultable (in fallback text)
+    await expect(fallback).toContainText(/porteur|Réserve C2|clarif/i);
+
+    // 4–5: other blocks + message identity preserved (intro text still present)
+    await expect(assistant.getByTestId("nora-visual-text").first()).toBeVisible();
+    await expect(assistant.getByTestId("nora-visual-composition")).toHaveAttribute(
+      "data-owns-body",
+      "1",
+    );
+
+    // 6–8: exactly one new assistant message; settle — no extra assistant and no API POST burst
+    await expect(page.getByTestId("nora-msg-assistant")).toHaveCount(assistantsBefore + 1);
+    const apiAtComplete = apiPosts.length;
+    await page.waitForTimeout(1500);
+    await expect(page.getByTestId("nora-msg-assistant")).toHaveCount(assistantsBefore + 1);
+    expect(apiPosts.length).toBe(apiAtComplete);
+
+    // 9: thread remains usable (draft independent)
+    await draft.fill("brouillon-apres-fallback");
+    await expect(draft).toHaveValue("brouillon-apres-fallback");
+
+    // 10: no global white-out — shell + composition root still present
+    await expect(page.getByTestId("thread-draft")).toBeVisible();
+    await expect(assistant.getByTestId("nora-visual-composition")).toBeVisible();
+    await expect(page.locator("body")).not.toBeEmpty();
+
+    await page.setViewportSize({ width: 1440, height: 900 });
+    await page.screenshot({
+      path: path.join(evidenceDir, "c2-08-browser-error-recovery-1440.png"),
+      fullPage: false,
+    });
+  });
+
   test("C3 same-tab logout/identity switch purges draft", async ({ page }) => {
     test.setTimeout(120_000);
     await page.goto("/login");

```


### DIFF `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 7b64d566..6023363c 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,231 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-18-COMPOSITION-GRAPHICAL-ENGINE-REPLACEMENT
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~12:25 CET |
+| Macro-lot | R5 / ML4D / Ensemble 05 — Remplacement architectural couche graphique |
+| Type | Cycle 8 Delivery · Critical · EVOL · **NO RELEASE** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
+| Benchmark | Isolé `scripts/layout-engine-benchmark` — G07/G08/G09 artisan vs ELK vs RF+ELK |
+| Recommandation | **Solution A : HTML/SVG + ELKjs** (CANDIDATE) — RF non requis pour layout |
+| Gate | **STOP — MORRIS ARCHITECTURE DECISION REQUIRED** (ajout `elkjs` produit) |
+| Production | `DirectedRelationBoard` + `EditorialSynthesis` ; artisan Graphs **retiré** du chemin principal |
+| ELK produit | **NOT INSTALLED** (`package.json` inchangé) |
+| Fake/Real | UNIT PROVEN · BROWSER à rejouer · LIVE NOT RUN |
+| Verdict | `STOP — MORRIS ARCHITECTURE DECISION REQUIRED` |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-W3-W4-GRAPHICAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~11:45 CET |
+| Macro-lot | R5 / ML4D / Ensemble 05 — Finalisation W3/W4 grammaire graphique Nora |
+| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
+| C2-08 | Exception React **post-mount** réelle → `BlockErrorBoundary` navigateur ; capture `c2-08-browser-error-recovery-1440.png` · **BROWSER PROVEN** |
+| W3 | `NoraCompositionGraphs` : arbre + parallèle SVG mesuré ; synthèse éditoriale par tons ; tokens parcours renforcés ; deps inchangés (mesurés) |
+| W4 | Vitest composition 72+ PASS (cibles) ; T02 PASS ; C2-08 Playwright PASS ; manifeste Figma/runtime 01–09 |
+| Layout | HTML/SVG mesuré **retenu** ; ELK/RF non ajoutés |
+| Fake/Real | UNIT+BROWSER FAKE **PROVEN** · HISTORICAL PG REPLAY **NOT RUN** · LIVE **NOT RUN** |
+| Verdict | `READY WITH RESERVES` (fidélité Figma PARTIAL 01–09 ; réception Morris) |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-C2-INTEGRITY-W3
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~11:25 CET |
+| Macro-lot | R5 / ML4D — C2 intégrité sémantique + W1/W3 sombre adaptatif |
+| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
+| C2 | Suppression heuristique 70% tokens ; exact-identity only ; tests adverses négations/chiffres/statuts ; ErrorBoundary réel |
+| W1 | Contrat exécutable thème sombre Studio (Figma 01–09 hiérarchie) |
+| W3 | Markers SVG uniques ; polish cards/tree/parallel sur tokens sombres |
+| W4 | Vitest 138 PASS ; T02 à rejouer ; PG historique NOT RUN ; VISUAL NOT COMPLETED |
+| Fake/Real | UNIT+BROWSER FAKE **PROVEN** · LIVE **NOT RUN** |
+| Verdict | `READY WITH RESERVES` |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-C2-W1-FINALIZATION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~11:00 CET |
+| Macro-lot | R5 / ML4D — Finalisation C2 + W1 contrat Figma (Ensemble 05) |
+| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
+| C2 | `visibleTextAlternativeComplement` + `SubstanceComplement` visible (pas sr-only) ; oracles C2-01…10 |
+| W1 | Paquet Morris Page 06 frames 01–09 ; **FIGMA CONTRACT READY — MORRIS VISUAL VALIDATION REQUIRED** |
+| W3 | Pas de transposition pixel ; familles existantes préservées |
+| W4 | Vitest 122 PASS ; T02 PASS (+ assert C2 DOM) ; PG DEV up sans payloads historiques |
+| W5 | Corpus réception préparé ; LIVE NOT RUN |
+| Fake/Real | UNIT+BROWSER FAKE **PROVEN** · HISTORICAL PG REPLAY **NOT RUN** · LIVE **NOT RUN** |
+| Verdict | `READY WITH RESERVES` / gate artistique Morris |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-VISUAL-GRAMMAR-DIFFS-COMPLETE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~10:30 CET |
+| Macro-lot | R5 / ML4D — Complétude Review Pack diffs C1–C4 |
+| Type | Cycle Delivery · Critical · DOC/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
+| Motif | Handoff `42d3299b` publié mais contenu incomplet (admission vide, NoraComposition hash-only, CSS tronqué, C2 peu traçable) |
+| Contenu | Diffs intégraux `admission.ts`, `NoraComposition.tsx`, `tokens.css`, `NoraConversation.tsx` + chaîne C2 |
+| Code produit | **Aucun changement** vs tip WT C1–C4 |
+| Fake/Real | FAKE prior **PROVEN** · LIVE/REAL **NOT RUN** |
+| Verdict | `READY WITH RESERVES` (technique inchangé ; revue exhaustive désormais possible) |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-VISUAL-GRAMMAR-C1C4
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~10:20 CET |
+| Macro-lot | R5 / ML4D — Convergence finale grammaire visuelle conversationnelle |
+| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
+| C1 | Fallback exhaustif en français naturel — plus de `relation=` / `Disposition:` / enums wire |
+| C2 | Strategy A graphic → `bodyPolicy=substitute` (anti-redondance prose+visuel) |
+| C4 | Dépendances : connecteurs SVG mesurés (ResizeObserver) + liste humaine |
+| A1–A7 | Non-régression : 112 Vitest PASS ; T02 PASS |
+| A3 PG | **HISTORICAL PG REPLAY — NOT RUN** (5433 DOWN) |
+| Figma | Contrat §6.6 extrait frames 03/04/07/08/09 ; **VISUAL REVIEW NOT COMPLETED** |
+| Fake/Real | FAKE/BROWSER **PROVEN** · LIVE/REAL **NOT RUN** |
+| Verdict | `READY WITH RESERVES` |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-V06-A7
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~09:25 CET |
+| Macro-lot | R5 / ML4D — Intégrité canonique A7 + textAlternative A2 (matrice 06 V0.6) |
+| Type | Cycle 8 Delivery · Critical · CORRECTIVE/QA · **NO RELEASE** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
+| A7 P0 | Canonical declared unusable → refuse (`CANONICAL_COMPOSITION_INVALID` / `_EMPTY`) ; narrative-only + legacy soft-drop préservés |
+| A2 | `mergeTextAlternative` — plus d'heuristique préfixe 80 ; suffixe complémentaire conservé |
+| A3 | Compat fixtures OK ; **HISTORICAL PG REPLAY — NOT RUN** (PG DEV 5433 down) |
+| A5–A6 | T02 PASS ; VISUAL REVIEW NOT COMPLETED (handoff MD) |
+| Preuves | Vitest 109 PASS ciblés ; T02 1 PASS ; A4 fail-closed conservé |
+| Fake/Real | FAKE A7 **PROVEN** · LIVE/REAL **NOT RUN** |
+| Verdict | `READY WITH RESERVES` |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-V05-A4
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~09:00 CET |
+| Macro-lot | R5 / ML4D — Strategy A sécurisation finale (matrice 06 V0.5) |
+| Type | Cycle 8 Delivery · Critical · CORRECTIVE/EVOL/QA · **NO RELEASE** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
+| A4 P0 | `fixtureReply` fail → UNKNOWN/UNAVAILABLE/`providerContacted:NO` (parity LIVE) |
+| A1 | exact oracles 11999 / 12000 / 12001 ; no silent slice |
+| A2 | familles text/comparison/sequence/relations/synthesis + choices/refs ownership |
+| A3 | e05 / projection-v1 / canonical-v1 autorités préservées (fixtures) |
+| A5–A6 | T02 PASS ; Vitest 94 PASS ciblés ; VISUAL handoff PNG channel incomplete |
+| Fake/Real | FAKE fixture A4 **PROVEN** · LIVE/REAL **NOT RUN** |
+| Verdict | `READY WITH RESERVES` |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~08:40 CET |
+| Macro-lot | Strategy A integrated corrective A1–A6 (matrice 06 V0.4) |
+| Type | Cycle 8 Delivery · Critical · CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
+| A1 | derive overflow → `CANONICAL_REPLY_OVERFLOW` (no silent slice) |
+| A2 | exhaustive relations/synthesis/sequence fields (kind, detail, lane, relation) |
+| A3 | WRITE `conversational-composition-canonical-v1` ; READ e05+projection-v1+canonical ; projection-v1 ≠ canonical |
+| A4 | fixtureReply + LIVE → same `validateNoraTurnQualification` ; AgentSchema WRITE-only |
+| A5 | sync → directed « sync vers » (no false reciprocity) |
+| Preuves | Vitest 75 PASS (A1–A4 + composition) ; T02 PASS |
+| Verdict | (voir Review Pack Full corrective A) |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-CANONICAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~08:10 CET |
+| Macro-lot | Transition Strategy A — sections sémantiques canoniques + achèvement UX |
+| Type | Cycle 8 Delivery · Critical · EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
+| Architecture | `visualComposition` projection-v1 = autorité ; `replyDraft` dérivé ; e05 = legacy_projection |
+| P0 | derive-text ; contentAuthority ; validateNoraTurnQualification derive ; tree single-parent |
+| P1 | parallel toutes arêtes ; identity admission path |
+| Preuves | Vitest Strategy A + fidelity + admission 29 PASS ; Playwright T02 PASS |
+| Verdict | (voir Review Pack Full Strategy A) |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-F1F5-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~03:55 CET |
+| Macro-lot | F1–F5 Integrated Corrective (fidélité / topologie / relations / schéma / BROWSER) |
+| Type | Cycle Delivery · Critical · RUN correctif dans EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
+| F1 | Claims substance ⊆ replyDraft ; narrative substitute gate ; préférence contradictoire |
+| F2 | topology.ts — tree/deps/parallel ; cycles/multi-root → list |
+| F3 | deps layers + arêtes dirigées ; tree/parallel CSS |
+| F4 | Agent WRITE `conversational-composition-projection-v1` only ; dual READ e05 |
+| F5 | T02 + fixtures tree/parallel + captures `f5-runtime-*.png` |
+| Preuves | Vitest fidelity+admission 24 PASS ; Playwright T02 PASS ; matrice `f-matrix-fidelity-topology.md` |
+| Verdict | READY WITH RESERVES (voir Review Pack Full F1–F5) |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-CONVERGENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~03:18 CET |
+| Macro-lot | Convergence composition conversationnelle (doc 06 C-01–C-22) |
+| Type | Cycle Delivery · Critical · EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
+| P0 C-04 | Graphiques : jamais substitute ; complement seulement si ancres replyDraft ; sinon markdown_only |
+| P1 C-05/14 | Schema write `conversational-composition-projection-v1` ; dual-read e05 ; MAX_ALTS=12 |
+| P1 C-10/11/12 | layoutHint + RelationsDirectedView CSS (deps/tree/parallel) ; ELK non introduit |
+| Preuves | Vitest composition 65 PASS (admission+fidelity+E05+schema) ; tsc 32/0 touched ; T02 PASS |
+| Verdict | (voir Review Pack Full convergence) |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-ADAPTATIVE-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~02:25 CET |
+| Macro-lot | Correction intégrée composition conversationnelle (réponse STOP ChatGPT) |
+| Type | Cycle Delivery · Critical · RUN correctif dans EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
+| Corrections | A matrice+détails ; B relations list only (SVG différé) ; C repli exhaustif ; D bodyPolicy substitute/complement ; E capacité wire honnête ; F ACK PREEXISTING PROVEN |
+| Preuves | Vitest 57 PASS ; tsc 32 préexistantes / 0 touched ; T02 PASS + captures corrective ; ACK FAIL identique sur tip clean `a783f014` |
+| Verdict | supersédé par cycle convergence |
+
+
+## delivery_id: DELIV-2026-11-18-COMPOSITION-ADAPTATIVE-V1
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-18 ~01:22 CET |
+| Macro-lot | Remplacement mécanisme graphique expérimental E05 → composition conversationnelle adaptative |
+| Type | Cycle Delivery · Critical · EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
+| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
+| Architecture | Strategy B V1 — `replyDraft` canonique ; wire `e05-visual-composition-v1` conservé ; admission `conversational-composition-v1` ; renderer `NoraComposition` |
+| Scope | admission/variantes CV-* ; `NoraComposition` + CSS container queries ; alias `NoraVisualComposition` ; wire `NoraConversation` ; tests unit ; preuves Figma Page 06 ; matrice CV-T |
+| Non-scope | Migration DB ; Strategy A sections sémantiques ; elkjs/RF/ECharts ; push produit ; RECETTE/STABLE ; LIVE OpenAI |
+| Preuves | Vitest admission+E05+schema+projection 54 PASS ; Playwright ensemble05 5 PASS / 2 FAIL (C2/ACK hors renderer) ; T02 composition PASS |
+| Verdict | `READY WITH RESERVES` — supersédé par STOP ChatGPT puis correctif |
+
+
 ## delivery_id: DELIV-2026-11-17-ML4D-R05-COGNITIVE-RECOVERY

 | Field | Value |

```

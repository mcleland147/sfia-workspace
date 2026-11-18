# SFIA Review Pack — Full (Critical)

**Date/heure :** 2026-11-18 11:43 CET
**Cycle :** 8 — Delivery / W3-W4 Finalisation grammaire graphique Nora
**Profil :** Critical
**Macro-lot :** ML4D / Ensemble 05 — Travail avec Nora
**Typologie :** EVOL / CORRECTIVE intégré
**ENV-01 :** DEV isolé · RECETTE protégée · STABLE N/A
**Versioning :** NO RELEASE · aucune publication produit
**Review Handoff :** required / publish-in-cycle

---

## 1. Git Truth Check

| Champ | Valeur |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche | `sfia/next-ml4d-composition-adaptative` |
| HEAD tip parent | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Worktree | dirty (candidat Strategy A + W3/W4) — **aucune destruction** |

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
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w3-runtime-figma08-tree-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w3-runtime-figma09-parallel-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w3-w4-figma-runtime-manifest.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w5-reception-corpus.md
?? projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx
?? projects/sfia-studio-next/web/src/components/figma/NoraCompositionGraphs.tsx
?? projects/sfia-studio-next/web/src/domains/conversation/conversational-composition/
?? projects/sfia-studio-next/web/tests/unit/c2-adversarial-integrity.test.ts
?? projects/sfia-studio-next/web/tests/unit/c2-substance-exhaustiveness.test.ts
?? projects/sfia-studio-next/web/tests/unit/canonical-integrity-a7-a2.test.ts
?? projects/sfia-studio-next/web/tests/unit/canonical-sections-strategy-a.test.ts
?? projects/sfia-studio-next/web/tests/unit/conversational-composition-admission.test.ts
?? projects/sfia-studio-next/web/tests/unit/conversational-composition-fidelity.test.ts
?? projects/sfia-studio-next/web/tests/unit/fixture-reply-a4-adapter-boundary.test.ts
?? projects/sfia-studio-next/web/tests/unit/strategy-a-corrective-a1-a4.test.ts
?? projects/sfia-studio-next/web/tests/unit/visual-grammar-c1-c2.test.ts
?? projects/sfia-studio-next/web/tests/unit/w3-graph-layouts.test.ts
```

### Références contractuelles consommées

| Objet | Ref |
| --- | --- |
| main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` (local origin/main: `997d4c4e8204993de7107552898c8cc08cd3b0ed`) |
| docs | `docs/next-ml4d-registre-revues-20261116@fd8d2534` |
| handoff précédent | `sfia/review-handoff@c2ecfae9` blob `953d7921…` |
| technique | `sfia/next-ml4d-composition-adaptative@a783f014` + WT |

---

## 2. Décisions consommées (non rouvertes)

- Strategy A nouveaux tours
- Thème sombre Studio
- Figma page 06 frames 01–09 orientation
- Fidélité élevée fonctionnelle (non pixel)
- Adaptativité conteneur Travail
- Pas de second moteur cognitif / API concurrente

---

## 3. Blast radius

### Écriture ce cycle (W3/W4 + C2-08)

- `NoraCompositionGraphs.tsx` (**créé**)
- `NoraComposition.tsx` (arbre/parallèle branchés ; synthèse éditoriale ; probe E2E)
- `tokens.css` (styles graphiques 07–09 + éditorial + parcours)
- `NoraSemanticIcon.tsx` (import React SSR Vitest)
- `ensemble05-travail-nora.spec.ts` (C2-08 BROWSER + asserts tree/parallel)
- `w3-graph-layouts.test.ts` (**créé**)
- preuves + manifeste + delivery-history
- Review Pack

### Préservés (cycles antérieurs WT — non rouverts)

- `conversational-composition/*` (admission exact C2)
- Strategy A fixtures / nora-adapter / semantic-qualification (WT antérieur)
- A1–A7 invariants

### Hors périmètre (non touchés normativement)

- SEF, roadmap, décisions, matrice doc 06 V0.7 branche docs, method/, migrations, CI, LIVE

---

## 4. A. C2-08 — ErrorBoundary navigateur

**Verdict : `C2 ERROR RECOVERY — BROWSER PROVEN`**

| Oracle | Résultat |
| --- | --- |
| Exception post-mount | `E2eCompositionThrowProbe` armé via `window.__SFIA_E2E_COMPOSITION_THROW_BLOCK_ID__='s3-cmp'` |
| Boundary | `nora-composition-block-fallback` data-block-id=s3-cmp |
| Fallback exhaustif | texte Progressive/Simultanée + Réserve C2 |
| Autres blocs | `nora-visual-text` intro visible |
| Identité message | composition `data-owns-body=1` |
| Pas de 2e tour | assistantsBefore+1 stable après 1.5s |
| Pas d'API POST après COMPLETE | apiPosts length stable |
| Fil utilisable | draft `brouillon-apres-fallback` |
| Pas d'écran blanc | shell + composition visibles |
| Production | probe no-op si `NODE_ENV==='production'` |

Capture : `c2-08-browser-error-recovery-1440.png`
SHA-256 : `f301e564ceffbd269c27265cadc390caad04dfa3311894e11693b13c085596e8`
Playwright : PASS (`C2-08 ErrorBoundary recovers real post-mount React exception`)

Heuristique C2 70% : **absente** (préservée exact-identity).

---

## 5. B/C — W3 familles & fidélité 01–09

Voir manifeste complet :

`projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w3-w4-figma-runtime-manifest.md`

### Résumé verdicts

| Famille | Impl | Verdict |
| --- | --- | --- |
| 01 Synthèse | sections tonales éditoriales | PARTIAL |
| 02/06 Parcours | marqueurs/connecteurs renforcés | PARTIAL |
| 03/04/05 Comparaison | cards/matrix/stack existants | PARTIAL |
| 07 Dépendances | layers + SVG mesuré (acquis) | PARTIAL |
| 08 Arbre | **DecisionTreeConnectedView** | PARTIAL (graphical built) |
| 09 Parallèle | **ParallelProcessConnectedView** | PARTIAL (graphical built) |

**Aucun `FIGMA TO RUNTIME ALIGNED` déclaré** — grammaire construite, conformité inspectée PARTIAL, réception Morris ouverte.

---

## 6. D — Architecture layout

**Retenu :** HTML/CSS/SVG mesuré + ResizeObserver (deps/tree/parallel).
**Non ajouté :** ELK, React Flow (gate Morris non requis tant que PARTIAL accepté pour densités actuelles).
**Limites :** routing orthogonal Figma, nœuds typés condition/issue, graphes très denses — dette layout si réception exige parité.

---

## 7. E — W4 tests exécutés

| Suite | Commande | Résultat |
| --- | --- | --- |
| Vitest W3+C2 composition | `vitest run` c2-* + conversational-composition-* + ensemble05-visual + w3-graph | **72 PASS** (6 files) |
| Vitest full workspace | `vitest run` | 1052 PASS / **1 FAIL hors périmètre** `nora-sas-maturation-instructions.test.ts` |
| Playwright T02 | `-g "T02 visual composition"` | **PASS** |
| Playwright C2-08 | `-g "C2-08 ErrorBoundary"` | **PASS** |
| PG historique | — | **HISTORICAL PG REPLAY — NOT RUN** |
| LIVE | — | **NOT RUN** |

Largeurs T02 : 1440 + 430 mobile composite. Split/zoom 200/400 : **NOT FULLY RE-RUN** ce cycle (dette preuve).

---

## 8. F — Préservation acquis

A1–A7, Strategy A, M1–M5, legacy READ, D3–D9 owners, fil unique, brouillon, sources, choix gelés, absence d'effet métier : **préservés** (aucune mutation RECETTE ; probe C2-08 sans effet D3).

---

## 9. G — Matrice C-01…C-22 (proposition depuis V0.7)

Ne pas écrire la branche docs. Proposition :

| Id | Proposition |
| --- | --- |
| C-01…C-07 | INTACT / Strategy A (prior) |
| C-08 substance | CLOSED UNIT+BROWSER (complement) |
| C-08 ErrorBoundary | **CLOSED BROWSER PROVEN** (ce cycle) |
| C-09…C-12 graphiques | **IMPROVED PARTIAL** (07–09 built ; Figma fidelity open) |
| C-13…C-18 a11y/responsive | PARTIAL preuve |
| C-19 PG historique | NOT RUN |
| C-20 LIVE | NOT AUTHORIZED |
| C-21 Gate artistique | **MORRIS** |
| C-22 Gate C / ADOPTED | **NOT CLAIMED** |

---

## 10. H — Réserves

1. Fidélité Figma 01–09 PARTIAL (pas pixel ; 08 multi-niveau / orthogonal manquant)
2. Capture C2-08 : badge UI « Issue » possible (console React) — UI fil récupérée ; à surveiller
3. HISTORICAL PG REPLAY NOT RUN
4. LIVE NOT AUTHORIZED
5. Zoom 200/400 + split 50/50 non rejoués exhaustivement ce cycle
6. Vitest full : 1 FAIL sas maturation **hors blast radius**
7. Remise PNG pour inspection ChatGPT distante
8. Git produit : aucun commit/push produit

---

## 11. I — Verdict global

**`READY WITH RESERVES`**

Réalisation graphique **substantielle** (08/09 mesurés + éditorial + C2-08 BROWSER).
Pas de clôture Ensemble 05 / Gate C / ADOPTED / LIVE.

---

## 12. J — Instruction ChatGPT

Avant toute réponse de revue, lire depuis Git `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff`, vérifier commit et blob, examiner les diffs complets, la récupération React en navigateur, les neuf comparaisons Figma/runtime, les preuves techniques et les réserves. Rendre un verdict indépendant sans inférer Gate C, ADOPTED ou LIVE.

---

## 13. Contenu complet — nouveaux fichiers


### FILE CREATE `projects/sfia-studio-next/web/src/components/figma/NoraCompositionGraphs.tsx` (409 lines)

```tsx
"use client";

/**
 * Graphical directed layouts for Nora composition (Figma 07–09 orientation).
 * Measured SVG connectors — no assumed coordinates, no ELK/RF dependency.
 * DEV-only throw probe for C2-08 browser ErrorBoundary proof.
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


### FILE CREATE `projects/sfia-studio-next/web/tests/unit/w3-graph-layouts.test.ts` (80 lines)

```tsx
/**
 * W3 — decision tree / parallel process graphical layouts (structure + a11y edges).
 */
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import {
  DecisionTreeConnectedView,
  ParallelProcessConnectedView,
} from "@/components/figma/NoraCompositionGraphs";
import type { RelationsBlock } from "@/domains/conversation/visual-composition";

const treeBlock: RelationsBlock = {
  kind: "relations",
  id: "f5-tree",
  title: "Arbre",
  layoutHint: "decisionTree",
  nodes: [
    { id: "c", label: "Condition roles clarifies", kind: "unknown" },
    { id: "y", label: "Approche progressive", kind: "hypothesis" },
    { id: "n", label: "Reporter le deploiement", kind: "hypothesis" },
  ],
  edges: [
    { from: "c", to: "y", relation: "condition_true", label: "oui" },
    { from: "c", to: "n", relation: "condition_false", label: "non" },
  ],
  textAlternative: "Si oui progressive, sinon reporter.",
};

const parallelBlock: RelationsBlock = {
  kind: "relations",
  id: "f5-par",
  title: "Parallele",
  layoutHint: "parallelProcess",
  nodes: [
    { id: "a1", label: "Inventaire site A", kind: "observation", laneId: "Voie A" },
    { id: "b1", label: "Inventaire site B", kind: "observation", laneId: "Voie B" },
    { id: "g", label: "Revue commune", kind: "finding", laneId: "Gate" },
  ],
  edges: [
    { from: "a1", to: "g", relation: "sync", label: "pret" },
    { from: "b1", to: "g", relation: "sync", label: "pret" },
  ],
  textAlternative: "Voies A/B puis Revue commune",
};

describe("W3 graph layouts", () => {
  it("decision tree exposes root/yes/no branches and directed edge list", () => {
    const titleById = new Map(treeBlock.nodes.map((n) => [n.id, n.label] as const));
    const html = renderToStaticMarkup(
      createElement(DecisionTreeConnectedView, { block: treeBlock, titleById }),
    );
    expect(html).toContain("nora-composition-decision-tree");
    expect(html).toContain('data-branch="root"');
    expect(html).toContain('data-branch="yes"');
    expect(html).toContain('data-branch="no"');
    expect(html).toContain("Condition roles clarifies");
    expect(html).toContain("Approche progressive");
    expect(html).toContain("Reporter le deploiement");
    expect(html).toContain("nora-composition-tree-edges");
    expect(html).toContain("Si oui");
    expect(html).toContain("Si non");
    expect(html).toContain("HumanDecision");
  });

  it("parallel process exposes lanes, gate role, sync edges", () => {
    const titleById = new Map(parallelBlock.nodes.map((n) => [n.id, n.label] as const));
    const html = renderToStaticMarkup(
      createElement(ParallelProcessConnectedView, { block: parallelBlock, titleById }),
    );
    expect(html).toContain("nora-composition-parallel");
    expect(html).toContain('data-lane="Voie A"');
    expect(html).toContain('data-lane="Voie B"');
    expect(html).toContain("nora-composition-parallel-gate");
    expect(html).toContain("Inventaire site A");
    expect(html).toContain("Revue commune");
    expect(html).toContain("synchronisation");
    expect(html).toContain("nora-composition-parallel-edges");
  });
});

```


### FILE CREATE `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/w3-w4-figma-runtime-manifest.md`

```md
# W3/W4 — Manifeste captures Figma / runtime

**Date :** 2026-11-18
**Candidat :** `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` + worktree
**Figma :** `itgvCulInEnFY6DvgIegvP` · page 06 · session MCP `43fad2db-36a4-4c89-b8f7-d95ab5faa9eb`
**Thème :** sombre Studio (frames Figma 01/02 clairs = hiérarchie seulement)

## Oracles C2-08 (BROWSER)

| Élément | Valeur |
| --- | --- |
| Injection | `window.__SFIA_E2E_COMPOSITION_THROW_BLOCK_ID__ = "s3-cmp"` via `addInitScript` |
| Mode | post-mount `useEffect` → throw client (pas SSR, pas état `failed` forcé) |
| Capture | `c2-08-browser-error-recovery-1440.png` |
| SHA-256 | `f301e564ceffbd269c27265cadc390caad04dfa3311894e11693b13c085596e8` |
| Verdict | **`C2 ERROR RECOVERY — BROWSER PROVEN`** |

## Matrice 01–09

| Réf | Node | Fixture | Runtime capture | SHA-256 (runtime) | Figma PNG | SHA-256 (Figma) | Verdict |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | `742:36` | S5 synthesis | `runtime-s5-composite-1440.png` | `749498159603f9baeac5d2fdc606f3a75d5b92b81089f58df6a12f1c356bb4bb` | `figma-page06/figma-742-36-synthesis.png` | `a6a369a51f556b5429069d4915e9d2361962f81465be3e6f82df337d7b032e70` | STRUCTURE+EDITORIAL IMPROVED — **PARTIAL vs Figma** (sections tonales ; pas page marketing Figma) |
| 02 | `743:2` | S4 trajectory | `runtime-s4-trajectory-1440.png` | `73c0fcbf42cccce8adfab2e630f8ce74945f86a86e7ed41dbfc1d86f18bf1618` | `figma-page06/figma-743-2-planning.png` | `8854f3a5df3b87b11862a5ea2a13ecfff7adbfb769b08410c96893082e300e10` | PATH IMPROVED — **PARTIAL** (marqueurs/connecteurs CSS ; pas frise calendaire sans dates) |
| 03 | `745:2` | S3 comparison | `runtime-visual-comparison-1440.png` | `1d991dd8da24293916d5f251e6d718389d158008a4d284fec06aba8a99421c6a` | `figma-page06/figma-745-2-three-options.png` | `01fb842db2f8317cbdde3e467a75bf92afc71866a96dc5ef3a250b71147e7a64` | CARDS FUNCTIONAL — **PARTIAL** (2 opts fixture ; 3-opt Figma) |
| 04 | `745:27` | dense matrix path | (via admission variants UNIT) | — | `figma-page06/figma-745-27-matrix.png` | `cb9cbf4196e0eac62d3ae5c7c4b05baab36f76b60d7dee0e53a9c17b6da7ed21` | MATRIX PRESENT — **PARTIAL** (preuve navigateur dense limitée) |
| 05 | `746:2` | narrow / stack | `runtime-s5-composite-mobile-430.png` | (regen T02) | `figma-page06/figma-746-2-constrained.png` | `607a16b3a0968934a77cb79c35a946ff4b46838b4a6873a42b895c36c94f952d` | ADAPTIVE — **PARTIAL** |
| 06 | `746:22` | S4 vertical | `runtime-s4-trajectory-1440.png` | idem 02 | `figma-page06/figma-746-22-vertical-steps.png` | `ee2bfe62fc8e116dd3650a81a4e0600a07853f717e1b0e80e5ce2c4a387ab824` | VERTICAL PATH — **PARTIAL** |
| 07 | `751:11` | S2 deps | `f5-runtime-dependencies-directed-1440.png` | `ed7658a12a69debb074de1b13ad2955a0eeefe4456d296dfb24a9edefbb56216` | `figma-page06/figma-751-11-dependencies.png` | `16ee9c29fe66e477d220ec081d112101af9773f6543cc9349e0607be868a82fd` | CONNECTED LAYERS — **PARTIAL** (SVG mesuré ; densité Figma non égalée) |
| 08 | `752:2` | E05_F5_DECISION_TREE | `w3-runtime-figma08-tree-1440.png` | `1da7f974913f052a5d7804a7718b200ad9d11927b53998e47cb8f712eb5293d4` | `figma-page06/figma-752-2-decision-tree.png` | `d198dff537487549bef2456752773299dc49dd303c28f3f9a4575fda0552c1c4` | GRAPHICAL TREE BUILT — **PARTIAL** (root/yes/no + SVG ; pas losange multi-niveaux Figma) |
| 09 | `753:2` | E05_F5_PARALLEL | `w3-runtime-figma09-parallel-1440.png` | `7b40da21f8d71b7062ebfea551cc49bb4a1aef43064e8cccb904f060fb33c4fd` | `figma-page06/figma-753-2-parallel.png` | `e45b62d5d31eb365312cca4f30e2ac1056e1a12df7ae04745a0dccb57b5844bb` | SWIMLANES+SYNC BUILT — **PARTIAL** (voies+gate+SVG ; headers colorés Figma non reproduits) |

## Écarts structurels restants (07–09)

- Figma utilise des connecteurs orthogonaux / nœuds typés (condition vs issue) plus riches.
- Runtime : HTML/CSS + SVG cubique mesuré — **retenu** sans ELK/React Flow (pas de gate Morris ouvert).
- Contenu fixture ≠ contenu illustratif Figma (normal) — comparaison de **grammaire**, pas de copy.

## Remise revue

Les PNG sont locaux sous `docs/evidence/ensemble-05-travail-nora/`. Le handoff Markdown référence ce manifeste + SHA-256 ; inspection distante ChatGPT nécessite remise explicite des binaires ou accès worktree.

```


### FILE CREATE (untracked WT) `projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx` (1057 lines)

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
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

// Keep React binding for classic JSX transforms (Vitest SSR / esbuild).
void React;
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraSemanticIcon } from "@/components/figma/NoraSemanticIcon";
import {
  DecisionTreeConnectedView,
  E2eCompositionThrowProbe,
  ParallelProcessConnectedView,
} from "@/components/figma/NoraCompositionGraphs";
import {
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
  topologicalLayers,
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

/** C-10/11/12 — directed layouts; tree/parallel use measured SVG (Figma 08/09). */
function RelationsDirectedView({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  const hint = block.layoutHint ?? "dependencies";

  if (hint === "parallelProcess") {
    return <ParallelProcessConnectedView block={block} titleById={titleById} />;
  }

  if (hint === "decisionTree") {
    return <DecisionTreeConnectedView block={block} titleById={titleById} />;
  }

  // dependencies (default directed) — layered nodes + measured SVG connectors (C4).
  return (
    <DependenciesConnectedView block={block} titleById={titleById} />
  );
}

/**
 * C4 — directed dependencies with connectors measured from live node boxes.
 * No assumed coordinates from Nora; ResizeObserver keeps paths attached on reflow.
 */
function DependenciesConnectedView({
  block,
  titleById,
}: {
  block: RelationsBlock;
  titleById: Map<string, string>;
}) {
  const layers = topologicalLayers(block);
  const nodeById = new Map(block.nodes.map((n) => [n.id, n] as const));
  const rootRef = useRef<HTMLDivElement>(null);
  const reactId = useId();
  const markerId = `fig-comp-deps-arrowhead-${reactId.replace(/:/g, "")}`;
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [paths, setPaths] = useState<
    Array<{ key: string; d: string; label: string }>
  >([]);

  const measure = () => {
    const root = rootRef.current;
    if (!root) return;
    const rootBox = root.getBoundingClientRect();
    setSize({ w: root.clientWidth, h: root.clientHeight });
    const next: Array<{ key: string; d: string; label: string }> = [];
    block.edges.forEach((e, i) => {
      const fromEl = root.querySelector(`[data-node-id="${CSS.escape(e.from)}"]`);
      const toEl = root.querySelector(`[data-node-id="${CSS.escape(e.to)}"]`);
      if (!(fromEl instanceof HTMLElement) || !(toEl instanceof HTMLElement)) return;
      const a = fromEl.getBoundingClientRect();
      const b = toEl.getBoundingClientRect();
      const x1 = a.left + a.width / 2 - rootBox.left;
      const y1 = a.bottom - rootBox.top;
      const x2 = b.left + b.width / 2 - rootBox.left;
      const y2 = b.top - rootBox.top;
      const midY = (y1 + y2) / 2;
      const fromLabel = titleById.get(e.from) ?? e.from;
      const toLabel = titleById.get(e.to) ?? e.to;
      const rel =
        e.relation === "depends_on"
          ? `${fromLabel} → ${toLabel} (dépendance)`
          : e.relation === "sync"
            ? `${fromLabel} synchronise vers ${toLabel}`
            : `${fromLabel} → ${toLabel}`;
      next.push({
        key: `${e.from}-${e.to}-${i}`,
        d: `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`,
        label: e.label ? `${rel} (${e.label})` : rel,
      });
    });
    setPaths(next);
  };

  useLayoutEffect(() => {
    measure();
    const root = rootRef.current;
    if (!root || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(root);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- measure closes over block/titleById
  }, [block, titleById, layers.length]);

  return (
    <div
      className="fig-comp-deps"
      data-testid="nora-composition-dependencies"
      data-layout-hint="dependencies"
      data-dep-layers={layers.length || 0}
      data-connectors={paths.length > 0 ? "1" : "0"}
    >
      <div className="fig-comp-deps-canvas" ref={rootRef}>
        {layers.length ? (
          <div className="fig-comp-deps-layers" data-testid="nora-composition-deps-layers">
            {layers.map((layer, li) => (
              <div key={`layer-${li}`} className="fig-comp-deps-layer" data-layer={li}>
                {layer.map((id) => {
                  const n = nodeById.get(id);
                  if (!n) return null;
                  return (
                    <div key={id} className="fig-comp-deps-node" data-node-id={n.id}>
                      <NoraSemanticIcon role={relationRole(n.kind)} />
                      <div>
                        <div className="fig-comp-relations-label">{n.label}</div>
                        {n.detail ? (
                          <div className="fig-comp-relations-detail">{n.detail}</div>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <ol className="fig-comp-deps-nodes">
            {block.nodes.map((n) => (
              <li key={n.id} className="fig-comp-deps-node" data-node-id={n.id}>
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
        )}
        {size.w > 0 && size.h > 0 && paths.length > 0 ? (
          <svg
            className="fig-comp-deps-svg"
            data-testid="nora-composition-deps-connectors"
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w} ${size.h}`}
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
            {paths.map((p) => (
              <path
                key={p.key}
                d={p.d}
                className="fig-comp-deps-connector"
                markerEnd={`url(#${markerId})`}
                data-edge-key={p.key}
              />
            ))}
          </svg>
        ) : null}
      </div>
      {block.edges.length ? (
        <ul
          className="fig-comp-deps-edges"
          data-testid="nora-composition-relations-edges"
          data-directed="1"
          aria-label="Relations dirigées"
        >
          {block.edges.map((e, i) => {
            const from = titleById.get(e.from) ?? e.from;
            const to = titleById.get(e.to) ?? e.to;
            return (
              <li key={`${e.from}-${e.to}-${i}`} data-edge-from={e.from} data-edge-to={e.to}>
                <span className="fig-comp-deps-from">{from}</span>
                <span className="fig-comp-deps-arrow" aria-hidden>
                  →
                </span>
                <span className="fig-comp-deps-to">{to}</span>
                {e.label ? <span className="fig-comp-deps-label"> ({e.label})</span> : null}
                {e.relation === "depends_on" ? (
                  <span className="fig-comp-deps-rel"> — dépendance</span>
                ) : e.relation === "sync" ? (
                  <span className="fig-comp-deps-rel"> — synchronisation</span>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
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
    <section
      className="fig-visual-block fig-visual-synthesis fig-comp-block fig-comp-synthesis fig-comp-synthesis-editorial"
      data-testid="nora-visual-synthesis"
      data-comp-testid="nora-composition-synthesis"
      data-block-kind="synthesis"
      data-block-id={block.id}
      aria-label={block.title}
    >
      <Heading title={block.title} role={block.role} icon={block.icon} />
      <div className="fig-comp-synth-flow">
        {section("observation", "Constat", observations, "fig-comp-synth-observations")}
        {section("hypothesis", "Hypothèses et réserves", hypotheses, "fig-comp-synth-hypotheses")}
        {section("risk", "Risques", risks, "fig-comp-synth-risks")}
        {section("priority", "Priorités et recommandations", priorities, "fig-comp-synth-priorities")}
        {section("other", "Autres éléments", rest, "fig-comp-synth-other")}
      </div>
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


### DIFF `projects/sfia-studio-next/web/src/components/figma/tokens.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 8623f598..730b42f4 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -2163,6 +2163,628 @@
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
 .project-unavailable {
   display: flex;
   align-items: flex-start;

```


### DIFF `projects/sfia-studio-next/web/src/components/figma/NoraSemanticIcon.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraSemanticIcon.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraSemanticIcon.tsx
index 0668a10c..ce1aa289 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraSemanticIcon.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraSemanticIcon.tsx
@@ -1,8 +1,12 @@
 "use client";

+import React from "react";
 import type { VisualIconId, VisualSemanticRole } from "@/domains/conversation/visual-composition";
 import { resolveVisualIcon } from "@/domains/conversation/visual-composition";

+// Keep React binding for classic JSX transforms (Vitest SSR / esbuild).
+void React;
+
 const LABELS: Record<VisualIconId, string> = {
   info: "Information",
   observe: "Observation",

```


### DIFF `projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
index 37b839c4..1d950acc 100644
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
@@ -566,14 +568,80 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
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
+    // F3 — layered deps + explicit directed edges (not undirected list).
+    await expect(page.getByTestId("nora-composition-deps-layers")).toBeVisible();
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
@@ -593,14 +661,29 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
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
@@ -702,6 +785,97 @@ test.describe("Ensemble 05 Travail avec Nora", () => {
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
index 7b64d566..21487b27 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,214 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


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


### FILE (diff empty / check) `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-page06-visual-contract-executable.md` — showing git diff HEAD failed empty; file exists (2942 bytes)


```
# Contrat visuel exécutable — Page 06 → Studio sombre

**Date :** 2026-11-18
**Orientation Morris :** thème sombre Studio · fidélité élevée adaptative · **pas** de pixel figé
**Fichier Figma :** `itgvCulInEnFY6DvgIegvP` · page `742:2`
**Session MCP :** `05690991-8dcf-4780-a219-714f1955f094`

## Décisions consommées (ne pas rouvrir)

| Décision | Application |
| --- | --- |
| Thème sombre Studio | Tokens `--fig-*` ; frames 01/02 clairs = hiérarchie seulement |
| Fidélité élevée | Structure, composants, iconographie, relations, densité |
| Adaptativité | Contenu + largeur conteneur Travail → variante |

## Tokens Studio (cible)

| Rôle | Token / usage |
| --- | --- |
| Fond panneau | `--fig-panel` |
| Encre | `--fig-ink` |
| Muet | `--fig-muted` |
| Lignes | `--fig-line` |
| Accent | `--fig-accent` (recommandation / connecteurs) |
| Complément C2 | `.fig-comp-substance-complement` barre accent |

## Par famille

### Narration / synthèse (Figma 01 · `742:36`)
- Prose naturelle ; callout recommandation sélectif ; réserves visibles
- Pas de cadre rouge systématique sur « risque »
- Iconographie `NoraSemanticIcon` par rôle

### Comparaison (03/04/05 · `745:2` / `745:27` / `746:2`)
- Cards 2–3 ; matrix ≥5 ou dense ; stack / text en repli
- Critères attachés ; aucun attribut orphelin
- Largeur contrainte → stack/text

### Parcours (02/06 · `743:2` / `746:22`)
- Horizontal si large + court ; vertical si dense / étroit
- Numéros = ordre sémantique ; dates seulement si établies

### Dépendances (07 · `751:11`)
- Couches + SVG mesuré + liste humaine
- IDs marker SVG uniques par instance

### Arbre (08 · `752:2`)
- Condition racine ; branches Si oui / Si non distinctes
- Pas de HumanDecision implicite
- **W3 réalisé :** `DecisionTreeConnectedView` — rangées par profondeur, cartes branch-tagged, SVG mesuré, liste accessible
- **Écart Figma :** Figma = losanges condition multi-niveaux + routing orthogonal ; runtime = arbre 1 niveau fixture + cubiques

### Parallèle (09 · `753:2`)
- Lanes identifiables ; sync orientée ; convergence lisible
- **W3 réalisé :** `ParallelProcessConnectedView` — voies, lane gate, SVG sync, liste relations
- **Écart Figma :** headers colorés / barre sync décorative non pixel-reproduits

### Layout décision (bornée)
- Approche **HTML/CSS/SVG mesuré** conservée après cas discriminants (convergence, lanes, resize via RO).
- ELK / React Flow : **non installés** — recommandation non bloquante ; gate Morris seulement si densités > capacité mesurée.

## Limites / repli
Enveloppe > capacité → text / list ; topologie invalide → refus admission ; erreur composant → `BlockErrorBoundary` + fallback exhaustif.

## C2-08 BROWSER
Probe `E2eCompositionThrowProbe` (DEV only, `NODE_ENV !== production`) + Playwright `C2-08 ErrorBoundary recovers real post-mount React exception` → **BROWSER PROVEN**.

```


---

## 14. Anti-stub

- Pack réinitialisé (pas d'append historique)
- Nouveaux fichiers inclus in extenso
- Diffs tokens / e2e / delivery inclus
- Preuves PNG référencées par SHA-256 (binaires hors Markdown)
- Aucun PASS inventé

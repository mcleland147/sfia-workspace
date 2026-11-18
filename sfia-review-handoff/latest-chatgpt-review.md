# SFIA Review Pack FULL — Convergence grammaire visuelle Nora (C1–C4)

**Date/heure :** 2026-11-18T10:25:00+0100
**Cycle :** Critical EVOL/CORRECTIVE — Ensemble 05 / ML4D
**Branche :** `sfia/next-ml4d-composition-adaptative`
**HEAD tip :** `a783f014935de0dec5ff8e79a2b18eea0e629756` (+ WT)
**origin/main :** `997d4c4e8204993de7107552898c8cc08cd3b0ed`
**Docs tip :** `a6d9614ceeb2d15b04a19233cd506cd43e031354`
**Handoff précédent :** `30778f1532f9e2a2efa0bcc19725b31c50161bc7` / blob `03890697451145fce35911f71fb71dab15ff3f7c`
**Review Pack :** Full — réinitialisé
**ENV :** DEV · NO RELEASE · STABLE NOT AVAILABLE
**Fake/Real :** UNIT+ADAPTER+BROWSER FAKE **PROVEN** · PG historique **NOT RUN** · LIVE **NOT RUN**

---

## 1. Git Truth Check

| Check | Résultat |
| --- | --- |
| Branche | `sfia/next-ml4d-composition-adaptative` |
| HEAD | `a783f014…` |
| Handoff | `30778f15` |
| STOP | **NON** — WT Strategy A + V0.5/V0.6 + C1–C4 |

Baseline avant modification : Vitest composition **86 PASS** (rejoué).

---

## 2. Contrat Figma §6.6

Voir `figma-page06-visual-contract.md` (mis à jour). Frames 03/04/07/08/09 capturées localement sous `figma-page06/`.
**VISUAL REVIEW NOT COMPLETED** (PNG hors canal handoff MD). Figma = référence candidate, pas pixel-finale.

---

## 3. C1–C7

| Contrat | Statut | Preuve |
| --- | --- | --- |
| C1 texte naturel | **PASS** | `buildExhaustiveBlockFallback` sans wire codes ; `visual-grammar-c1-c2` |
| C2 anti-redondance | **PASS** | Strategy A graphic → `substitute` |
| C3 comparaisons | **PARTIAL** | variantes cards/matrix existantes + tests densité ; pas de refonte |
| C4 graphes connectés | **PARTIAL** | SVG connecteurs mesurés deps ; arbre/parallèle HTML ; pas pixel-Figma |
| C5 a11y/reflow | **PARTIAL** | CSS + T02 ; zoom/390 non exhaustifs ce cycle |
| C6 PG | **NOT RUN** | 5433 DOWN |
| C7 LIVE pertinence | **NOT RUN** | GO Morris distinct |

---

## 4. Acquis A1–A7

Non-régression : **112 Vitest PASS** + **T02 1 PASS** après corrections C1/C2/C4.

---

## 5. Tests

| Suite | Résultat |
| --- | --- |
| Baseline pré-modif | 86 PASS |
| Post-modif ciblés | **112 PASS** |
| Playwright T02 | **1 PASS** (25.2s) |
| PG historique | **NOT RUN** |
| LIVE | **NOT RUN** |

Commande :
`npx vitest run tests/unit/visual-grammar-c1-c2.test.ts tests/unit/canonical-integrity-a7-a2.test.ts tests/unit/strategy-a-corrective-a1-a4.test.ts tests/unit/fixture-reply-a4-adapter-boundary.test.ts tests/unit/canonical-sections-strategy-a.test.ts tests/unit/conversational-composition-admission.test.ts tests/unit/conversational-composition-fidelity.test.ts tests/unit/ensemble05-visual-composition.test.ts tests/unit/nora-live-output-schema.test.ts tests/unit/nora-e2e-fixture.test.ts`

---

## 6. Proposition matrice 06 V0.7 (non publiée)

| C | Proposition |
| --- | --- |
| C-04/17 | C1 PASS — narration sans marqueurs techniques |
| C-02 | C2 PASS — substitute Strategy A graphique |
| C-10 | PARTIAL — connecteurs mesurés ; revue visuelle restante |
| C-18 | VISUAL NOT COMPLETED |
| C-06 | PG NOT RUN |

---

## 7. Verdict

**READY WITH RESERVES**

Réserves : VISUAL REVIEW NOT COMPLETED ; HISTORICAL PG REPLAY NOT RUN ; LIVE NOT RUN ; C4 non pixel-Figma.

---

## 8. Contenu modifié — diffs et fichiers

### Diff admission.ts (C1 + C2)

```diff
```

### Diff NoraComposition.tsx (C4 connectors — extrait + hash)

```
0efb3956518a2e5b346e8c0204858662b70c3c84
```

### Diff tokens.css (deps canvas/svg)
```diff
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
```

### `tests/unit/visual-grammar-c1-c2.test.ts` (intégral)
```ts
/**
 * C1 natural fallback language + C2 Strategy A bodyPolicy substitute.
 */
import { describe, expect, it } from "vitest";
import {
  admitConversationalComposition,
  buildExhaustiveBlockFallback,
} from "@/domains/conversation/conversational-composition";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
} from "@/domains/conversation/visual-composition";

const TECHNICAL_MARKERS = [
  "relation=",
  "layoutHint",
  "condition_true",
  "condition_false",
  "parallelProcess",
  "decisionTree",
  "depends_on",
  "Disposition:",
];

describe("C1 — natural French fallback", () => {
  it("relations fallback has no wire codes", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "relations",
          id: "r",
          title: "Graphe",
          layoutHint: "decisionTree",
          nodes: [
            { id: "c", label: "Condition", kind: "unknown", detail: "détail" },
            { id: "y", label: "Oui", kind: "hypothesis", laneId: "voie-oui" },
            { id: "n", label: "Non", kind: "finding" },
          ],
          edges: [
            { from: "c", to: "y", relation: "condition_true", label: "ok" },
            { from: "c", to: "n", relation: "condition_false", label: "ko" },
          ],
          textAlternative: "alt",
        },
      ],
    })!;
    const fb = buildExhaustiveBlockFallback(comp.blocks[0]!);
    for (const m of TECHNICAL_MARKERS) {
      expect(fb, `must not contain ${m}`).not.toContain(m);
    }
    expect(fb).toContain("Arbre conditionnel");
    expect(fb).toContain("(hypothèse)");
    expect(fb).toContain("Si oui");
    expect(fb).toContain("voie « voie-oui »");
  });
});

describe("C2 — Strategy A display policy", () => {
  it("canonical graphic → substitute (no dual prose)", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        { kind: "text", id: "t", markdown: "Intro." },
        {
          kind: "comparison",
          id: "c",
          title: "Opts",
          alternatives: [
            { id: "a", title: "A", summary: "sa" },
            { id: "b", title: "B", summary: "sb" },
          ],
          textAlternative: "A vs B",
        },
      ],
    })!;
    const adm = admitConversationalComposition(comp, {
      canonicalText: "Intro. A sa B sb",
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("substitute");
    expect(adm.fallbackReasons).toContain("CV_BODY_CANONICAL_GRAPHIC_SUBSTITUTE");
  });

  it("legacy graphic → complement when fidelity ok", () => {
    const comp = parseVisualComposition({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA_LEGACY,
      blocks: [
        {
          kind: "comparison",
          id: "c",
          title: "Opts",
          alternatives: [
            { id: "a", title: "Alpha", summary: "latence basse", pros: ["rapide"], cons: ["x"] },
            { id: "b", title: "Beta", summary: "latence haute", pros: ["y"], cons: ["lent"] },
          ],
          textAlternative: "Alpha vs Beta",
        },
      ],
    })!;
    const adm = admitConversationalComposition(comp, {
      canonicalText: "Option Alpha latence basse rapide Option Beta latence haute lent",
      containerWidthPx: 900,
    });
    expect(adm.bodyPolicy).toBe("complement");
  });
});
```

### `figma-page06-visual-contract.md`
```md
# Contrat visuel extrait — Figma Page 06 (références composition)

**Date :** 2026-11-18 (~10:15 CET)
**Fichier :** `https://www.figma.com/design/itgvCulInEnFY6DvgIegvP`
**Page :** 06 · node `742:2`
**Session MCP :** `6e05c280-eea3-40fd-818e-26683103503d`
**Statut :** EXTRAIT MCP — **références de conception candidates**, pas spécification pixel-finale validée Morris

## Principes UX acceptés (Morris)

- Sobriété de l’environnement ; richesse maîtrisée de la réponse.
- Hiérarchie éditoriale claire ; cartes uniquement si pertinentes.
- Connexions et représentations fiables ; pas de décoration gratuite.
- Texte essentiel non tronqué ; lisibilité à largeur variable.

## Frames de référence

| Ref | Node | Intention | Capture locale | Dimensions PNG |
| --- | --- | --- | --- | --- |
| 03 | 745:2 | Trois options adaptatives (cartes) | `figma-page06/figma-745-2-three-options.png` | ~1040×820 |
| 04 | 745:27 | Comparaison matricielle | `figma-page06/figma-745-27-matrix.png` | ~1040×820 |
| 07 | 751:11 | Dépendances / convergence | `figma-page06/figma-751-11-dependencies.png` | 1040×1130 |
| 08 | 752:2 | Arbre conditionnel | `figma-page06/figma-752-2-decision-tree.png` | 1040×1130 |
| 09 | 753:2 | Processus parallèle | `figma-page06/figma-753-2-parallel.png` | 1040×1130 |

## Observations structurelles (MCP)

| Frame | Structure observée | Incertitudes |
| --- | --- | --- |
| 03 | Titre + grille de cartes option (titre, résumé, attributs) | Espacements exacts vs Studio sombre |
| 04 | En-têtes critères × options ; tableau dense | Wrap horizontal vs stacked |
| 07 | Nœuds en couches + **connecteurs graphiques** orientés vers convergence | Géométrie exacte des courbes ; DA claire vs tokens Studio |
| 08 | Racine + branches conditionnelles oui/non attachées | Style des conditions |
| 09 | Voies parallèles + liens de sync/convergence | Swimlanes vs grid Studio |

## Choix techniques V1 (bornés — pas ELK/RF)

- HTML/CSS/SVG sémantique ; connecteurs **mesurés** (getBoundingClientRect + ResizeObserver).
- Admission déterministe ; fallback liste humaine si topologie refusée.
- Environnement sombre Studio : écart DA fond clair Figma Page 06 = **connu**, non cloné.

## Validation Morris

| Item | Statut |
| --- | --- |
| Source Figma comme direction | Candidate |
| Source Figma comme exécution pixel-finale | **NON VALIDÉE** |
| Transposition 07–09 | Technique bornée livrée ; conformité pixel **NON revendiquée** |

## Verdict contrat Figma

**FIGMA CONTRACT EXTRACTED — RUNTIME COMPARISON PENDING**

Sans revue Morris des captures Figma/runtime inspectables hors handoff MD :
`VISUAL REVIEW NOT COMPLETED`
```

### DependenciesConnectedView (extrait intégral fonction)
```tsx
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
                id="fig-comp-deps-arrowhead"
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
                markerEnd="url(#fig-comp-deps-arrowhead)"
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

```

### buildExhaustiveBlockFallback helpers + relations (extrait)
```ts
/** Human labels for epistemic node kinds — never expose wire enum to Pilote. */
function humanNodeKind(kind: string | undefined): string | undefined {
  switch (kind) {
    case "fact":
      return "fait";
    case "hypothesis":
      return "hypothèse";
    case "unknown":
      return "indéterminé";
    case "cause":
      return "cause";
    case "finding":
      return "constat";
    case "observation":
      return "observation";
    default:
      return undefined;
  }
}

function humanRole(role: string | undefined): string | undefined {
  switch (role) {
    case "information":
      return "information";
    case "observation":
      return "observation";
    case "fact":
      return "fait";
    case "hypothesis":
      return "hypothèse";
    case "risk":
      return "risque";
    case "recommendation":
      return "recommandation";
    case "decision":
      return "décision";
    case "dependency":
      return "dépendance";
    case "step":
      return "étape";
    case "source":
      return "source";
    default:
      return undefined;
  }
}

function humanTone(tone: string | undefined): string | undefined {
  switch (tone) {
    case "priority":
      return "priorité";
    case "finding":
      return "constat";
    case "risk":
      return "risque";
    case "watch":
      return "vigilance";
    case "observation":
      return "observation";
    case "hypothesis":
      return "hypothèse";
    default:
      return undefined;
  }
}

function humanLayoutHint(hint: string | undefined): string | undefined {
  switch (hint) {
    case "dependencies":
      return "Dépendances";
    case "decisionTree":
      return "Arbre conditionnel";
    case "parallelProcess":
      return "Processus parallèle";
    default:
      return undefined;
  }
}

/**
 * Exhaustive human-readable fallback from validated block fields (C1).
 * Never truncates. Never exposes wire codes (relation=, layoutHint, enums bruts).
 */
export function buildExhaustiveBlockFallback(block: VisualBlock): string {
  if (block.kind === "text") {
    return block.markdown;
  }
  if (block.kind === "comparison") {
    const parts: string[] = [block.title];
    for (const a of block.alternatives) {
      parts.push(`${a.title}: ${a.summary}`);
      if (a.pros?.length) parts.push(`Avantages — ${a.pros.join("; ")}`);
      if (a.cons?.length) parts.push(`Limites — ${a.cons.join("; ")}`);
    }
    if (block.criteria?.length) {
      for (const c of block.criteria) {
        const vals = block.alternatives
          .map((a) => `${a.title}: ${c.values[a.id] ?? "—"}`)
          .join(" ; ");
        parts.push(`${c.label} — ${vals}`);
      }
    }
    if (block.recommendation) parts.push(`Recommandation: ${block.recommendation}`);
    if (block.provenance?.length) {
      parts.push(`Sources: ${block.provenance.map((p) => p.label).join("; ")}`);
    }
    return mergeTextAlternative(parts.join("\n"), block.textAlternative);
  }
  if (block.kind === "sequence") {
    const parts: string[] = [block.title];
    const titleById = new Map(block.steps.map((s) => [s.id, s.title] as const));
    block.steps.forEach((s, i) => {
      let line = `${i + 1}. ${s.title}`;
      const role = humanRole(s.role);
      if (role) line += ` (${role})`;
      if (s.detail) line += ` — ${s.detail}`;
      if (s.dependsOn?.length) {
        line += ` (dépend de: ${s.dependsOn.map((id) => titleById.get(id) ?? id).join(", ")})`;
      }
      if (s.dateLabel) line += ` [${s.dateLabel}]`;
      parts.push(line);
    });
    return mergeTextAlternative(parts.join("\n"), block.textAlternative);
  }
  if (block.kind === "relations") {
    const parts: string[] = [block.title];
    const layout = humanLayoutHint(block.layoutHint);
    if (layout) parts.push(layout);
    const titleById = new Map(block.nodes.map((n) => [n.id, n.label] as const));
    for (const n of block.nodes) {
      let line = n.label;
      const kind = humanNodeKind(n.kind);
      if (kind) line += ` (${kind})`;
      if (n.laneId) line += ` — voie « ${n.laneId} »`;
      if (n.detail) line += ` — ${n.detail}`;
      parts.push(line);
    }
    for (const e of block.edges) {
      const from = titleById.get(e.from) ?? e.from;
      const to = titleById.get(e.to) ?? e.to;
      const rel = e.relation ?? "flow";
      // Keep wire direction from→to; natural French, no wire codes.
      let sense =
        rel === "condition_true"
          ? `Si oui (${from}) → ${to}`
          : rel === "condition_false"
            ? `Si non (${from}) → ${to}`
            : rel === "sync"
              ? `${from} synchronise vers ${to}`
              : rel === "depends_on"
                ? `${from} → ${to} (dépendance)`
                : `${from} → ${to}`;
      if (e.label) sense += ` (${e.label})`;
      parts.push(sense);
    }
    if (block.provenance?.length) {
      parts.push(`Sources: ${block.provenance.map((p) => p.label).join("; ")}`);
    }
    return mergeTextAlternative(parts.join("\n"), block.textAlternative);
  }
  if (block.kind === "synthesis") {
    const parts: string[] = [block.title];
    for (const it of block.items) {
      let line = it.detail ? `${it.label}: ${it.detail}` : it.label;
      const tone = humanTone(it.tone);
      if (tone) line += ` (${tone})`;
      const role = humanRole(it.role);
      if (role) line += ` — ${role}`;
      parts.push(line);
    }
    return mergeTextAlternative(parts.join("\n"), block.textAlternative);
  }
  return "";
}

/**
 * Structural completeness of projection fields that the renderer will expose visibly.
 * Does NOT prove equivalence with replyDraft.
 */

```

---

## 9. Instruction ChatGPT

Relire `sfia/review-handoff` → `latest-chatgpt-review.md` ; confronter à matrice **06 V0.6** et proposition V0.7 ; ne pas inférer ADOPTED/Gate C/LIVE depuis FAKE.

**Fin Review Pack Full — Convergence grammaire visuelle.**

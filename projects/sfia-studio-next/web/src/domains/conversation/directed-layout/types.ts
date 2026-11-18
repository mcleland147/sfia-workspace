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

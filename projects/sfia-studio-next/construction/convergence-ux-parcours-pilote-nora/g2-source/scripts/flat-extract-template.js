// placeholders: __FAMILY__ __ROOT_ID__
const FAMILY = "__FAMILY__";
const ROOT_ID = "__ROOT_ID__";
const CHUNK = 18000;
const page = figma.root.children.find((p) => p.id === "94:49") || figma.currentPage;
await figma.setCurrentPageAsync(page);

function hex(c) {
  if (!c || c.a === 0) return null;
  const r = Math.round(c.r * 255);
  const g = Math.round(c.g * 255);
  const b = Math.round(c.b * 255);
  return (
    "#" +
    [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
  );
}

function paintHex(paints) {
  if (!paints || paints.length === 0) return undefined;
  const p = paints[0];
  if (p.type === "SOLID") return hex(p.color);
  return undefined;
}

async function flatWalk(id) {
  const root = await figma.getNodeByIdAsync(id);
  if (!root) throw new Error("missing root " + id);
  const nodes = [];
  const stack = ["children" in root ? root : null].filter(Boolean);
  if (stack.length === 0) return { root, nodes: [] };
  const walkStack = [root];
  while (walkStack.length) {
    const n = walkStack.pop();
    const rec = { id: n.id, n: n.name, t: n.type };
    if (n.parent && "id" in n.parent) rec.p = n.parent.id;
    if ("children" in n) {
      rec.pc = n.children.length;
      for (let i = n.children.length - 1; i >= 0; i--) walkStack.push(n.children[i]);
    } else rec.pc = 0;
    if ("x" in n) {
      rec.x = Math.round(n.x);
      rec.y = Math.round(n.y);
    }
    if ("width" in n) {
      rec.w = Math.round(n.width);
      rec.h = Math.round(n.height);
    }
    if (n.type === "FRAME" || n.type === "COMPONENT" || n.type === "INSTANCE") {
      if (n.layoutMode) rec.lm = n.layoutMode;
      if (n.layoutSizingHorizontal) rec.sh = n.layoutSizingHorizontal;
      if (n.layoutSizingVertical) rec.sv = n.layoutSizingVertical;
      if (typeof n.itemSpacing === "number") rec.g = n.itemSpacing;
      if (typeof n.paddingTop === "number")
        rec.pad = [n.paddingTop, n.paddingRight, n.paddingBottom, n.paddingLeft];
      if (n.clipsContent) rec.clips = 1;
      if (n.cornerRadius) rec.r = n.cornerRadius;
      const f = paintHex(n.fills);
      if (f) rec.f = f;
    }
    if (n.type === "TEXT") {
      const f = paintHex(n.fills);
      if (f) rec.f = f;
      if (n.fontName && typeof n.fontName !== "symbol") {
        rec.ff = n.fontName.family;
        rec.fst = n.fontName.style;
      }
      if (n.fontWeight !== undefined) rec.fw = n.fontWeight;
      if (n.fontSize !== undefined) rec.fs = n.fontSize;
      if (n.lineHeight && typeof n.lineHeight === "object" && "value" in n.lineHeight)
        rec.lh = Math.round(n.lineHeight.value);
      else if (typeof n.lineHeight === "number") rec.lh = Math.round(n.lineHeight);
      rec.ch = n.characters;
    }
    nodes.push(rec);
  }
  return { root, nodes };
}

const { root, nodes } = await flatWalk(ROOT_ID);
const payload = {
  extractedAtUtc: new Date().toISOString(),
  rootId: root.id,
  rootName: root.name,
  w: Math.round(root.width),
  h: Math.round(root.height),
  nodeCount: nodes.length,
  nodes,
};
const s = JSON.stringify(payload);
if (s.length <= 42000) return payload;
const chunks = [];
for (let i = 0; i < s.length; i += CHUNK) chunks.push(s.slice(i, i + CHUNK));
return { family: FAMILY, len: s.length, chunks };

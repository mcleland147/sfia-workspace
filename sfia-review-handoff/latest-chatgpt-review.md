# SFIA Review Pack FULL — Studio Next ML4 macro-correctif Chat-first D4 + provenance Git

- **Date/heure :** 2026-11-09 16:52:19 CET (2026-11-09T15:52:19Z)
- **Cycle :** R5 / ML4 — MACRO-CORRECTIF INTÉGRÉ — Chat First D4 et provenance Git
- **Profil SFIA :** Standard
- **Type :** Delivery projet — RUN / correctif
- **GO Morris :** acquis pour construction locale DEV + tests + docs techniques + Review Handoff L3
- **Publisher attendu :** `scripts/sfia/publish-review-handoff.sh` → `sfia/review-handoff`

## 1. Git Truth Check (observé Cursor)

| Item | Valeur |
|---|---|
| remote origin | `https://github.com/mcleland147/sfia-workspace.git` (fetch+push) |
| Branche active | `fix/next-ml4-chat-first-d4-provenance-20261109` |
| HEAD initial (base construction) | `974b0030a94469bef05496151792e8c35a9a83e9` (= source RECETTE servie précédemment BUILD `RzpCuGMK6SnwfucphK7Qa`) |
| HEAD final | `f1b49e20a18e824cc636cc3a1e57bb0ec416e4de` |
| `origin/main` | `6667a43858a5421e391b7441246536daad148bd6` |
| `origin/feat/next-git-collaboration-20261108` | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` |
| merge-base → main | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| merge-base → feat ML4 | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` |
| Branche docs RECETTE (lecture seule) | `docs/next-ml4-recette-utilisateur-20261109` @ `8b3e24de70eb7e24827dd8bb9c95fcc3b667f9f0` |
| Push projet | **NON** (aucun push Product) |
| Lane tests | DEV — `sfia_next_dev` @ `127.0.0.1:5433` |
| RECETTE | **non touchée** (pas de redémarrage / migration / redeploy) |

**Réconciliation base :** le candidat ML4 réellement recetté (`974b0030`) est l'ancêtre direct de la branche de correctif ; remote feat tip `51b0c3b6` est parent de `974b0030` (lane App binding). Aucun STOP divergence.

## 2. Sources Git relues (périmètre)

Processus / gouvernance / ML4 (baseline remote + docs anomalies lecture seule) + code effectif sur `974b0030a94469bef05496151792e8c35a9a83e9` puis correctif. Contradiction notée : registre RECETTE documentaire `8b3e24de` ≠ code candidat `974b0030` (attendu — docs hors Product).

## 3. Diagnostic confirmé

### ML4-REC-08 (cause confirmée)
1. `postUserMessageAndNora` appelait `savePreparationDocument` uniquement si `explicitDocumentIntent` (verbes de **création**), **après** génération Nora COMPLETE.
2. Le message assistant persisté était `reply.content` **sans** restitution de `documentSave` → Nora pouvait affirmer « non enregistré » alors qu'une v1 AVAILABLE existait (observation R06).
3. Aucun routage conversationnel vers `reviseDocument` → révision chat impossible / risquait une nouvelle création.

### ML4-REC-07 (cause confirmée)
1. `GitFileProvenance.resolvedSha = file.sha` où REAL Contents API = **blob SHA**.
2. SCRIPTED renvoyait historiquement le **commit** dans `sha` → confusion bilatérale.
3. `listGitRefs` borné artificiellement à `main` uniquement.
4. Permalien `/blob/{blobSha}/path` invalide si blob présenté comme commit.

### Hypothèses écartées / bornées
- **REC-03** : capitalisation points ouverts = chemin `maybeCapitalizeFromExchange` distinct ; **pas** de cause commune démontrée avec ACK D4 → **OPEN / hors cycle**.
- Pas de second moteur d'actions Nora, pas de nouvelle autorité D4.

### Responsabilités avant → après
| Couche | Avant | Après |
|---|---|---|
| Qualification intention D4 | regex create only | `qualifyDocumentAct` CREATE/REVISE/NONE |
| Écriture D4 | create silencieuse post-gén | create **ou** `reviseDocument` propriétaire |
| Restitution | metadata `documentSave` seule | + bloc **Résultat applicatif D4** dans message |
| Provenance Git | `resolvedSha` ambigu | `blobSha` + `commitSha` + `commitShaVerified` + `permalink` |
| Refs | main only | `provider.listRefs` borné |

## 4. Implémentation

Classification versioning : **PATCH candidate** — NO RELEASE / NO STABLE.

Fichiers : 4 créés + 11 modifiés (voir sections 5–6). Aucune migration DB. Aucune écriture Git REAL.

## 5. Fichiers créés (contenu intégral)

### `projects/sfia-studio-next/web/src/domains/conversation/document-act.ts`

```typescript
/**
 * Chat-first D4 act qualification — create vs revise vs none.
 * Server authority only; Nora text never creates or revises alone.
 */

export type DocumentActKind = "CREATE" | "REVISE" | "NONE";

export type QualifiedDocumentAct =
  | { kind: "NONE" }
  | { kind: "CREATE" }
  | {
      kind: "REVISE";
      documentHint: string | null;
      sectionHint: string | null;
    };

const CREATE_RE =
  /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b[\s\S]{0,40}\b(document|note|synthèse|rapport|spécification)\b/i;
const CREATE_PLEASE_RE =
  /\b(document|note de synthèse|rapport)\b[\s\S]{0,20}\b(s'il te plaît|stp|please)\b/i;
const REVISE_RE =
  /\b(révise|reviser|réviser|revise|modifie|modifier|mets?\s+à\s+jour|corrige|corriger)\b/i;
const DOC_OBJECT_RE = /\b(document|note|synthèse|rapport|spécification)\b/i;
const SECTION_RE =
  /\b(?:section|partie|chapitre)\s+(\d+|[A-Za-zÀ-ÿ][\wÀ-ÿ-]*)\b/i;
const DOC_ID_RE = /\b(doc_[a-z0-9-]+)\b/i;

/**
 * Qualify explicit documentary intent. Analytical chatter → NONE.
 * Revise wins when revise verb + document object (or doc id / « le document »).
 */
export function qualifyDocumentAct(text: string): QualifiedDocumentAct {
  const trimmed = text.trim();
  if (!trimmed) return { kind: "NONE" };

  const hasRevise = REVISE_RE.test(trimmed);
  const hasDocObject = DOC_OBJECT_RE.test(trimmed) || DOC_ID_RE.test(trimmed);
  if (hasRevise && hasDocObject) {
    const idMatch = trimmed.match(DOC_ID_RE);
    const titleMatch = trimmed.match(
      /\b(?:document|note|synthèse|rapport)\s+[«"]?([^»"\n,]{2,80})/i,
    );
    const sectionMatch = trimmed.match(SECTION_RE);
    return {
      kind: "REVISE",
      documentHint: idMatch?.[1] ?? titleMatch?.[1]?.trim() ?? null,
      sectionHint: sectionMatch?.[1] ?? null,
    };
  }

  if (CREATE_RE.test(trimmed) || CREATE_PLEASE_RE.test(trimmed)) {
    return { kind: "CREATE" };
  }

  return { kind: "NONE" };
}

/** Backward-compatible predicate used by older call sites / tests. */
export function explicitDocumentIntent(text: string): boolean {
  const q = qualifyDocumentAct(text);
  return q.kind === "CREATE" || q.kind === "REVISE";
}

export type DocumentListItem = {
  document: { id: string; title: string };
  latestRevision: { id: string; revisionNumber: number; status: string; contentMarkdown: string } | null;
};

export type ResolvedReviseTarget =
  | {
      ok: true;
      documentId: string;
      title: string;
      baseRevisionId: string;
      baseRevisionNumber: number;
      baseContent: string;
    }
  | { ok: false; reason: "NOT_FOUND" | "AMBIGUOUS" | "NO_AVAILABLE_REVISION"; candidates?: string[] };

export function resolveReviseTarget(
  docs: DocumentListItem[],
  hint: string | null,
): ResolvedReviseTarget {
  const available = docs.filter((d) => d.latestRevision?.status === "AVAILABLE");
  if (available.length === 0) {
    return { ok: false, reason: "NO_AVAILABLE_REVISION" };
  }

  if (hint) {
    const byId = available.filter((d) => d.document.id === hint);
    if (byId.length === 1) {
      const d = byId[0]!;
      return {
        ok: true,
        documentId: d.document.id,
        title: d.document.title,
        baseRevisionId: d.latestRevision!.id,
        baseRevisionNumber: d.latestRevision!.revisionNumber,
        baseContent: d.latestRevision!.contentMarkdown,
      };
    }
    const needle = hint.toLowerCase().replace(/[«»"']/g, "").trim();
    const byTitle = available.filter((d) => {
      const t = d.document.title.toLowerCase();
      return t === needle || t.includes(needle) || needle.includes(t);
    });
    if (byTitle.length === 1) {
      const d = byTitle[0]!;
      return {
        ok: true,
        documentId: d.document.id,
        title: d.document.title,
        baseRevisionId: d.latestRevision!.id,
        baseRevisionNumber: d.latestRevision!.revisionNumber,
        baseContent: d.latestRevision!.contentMarkdown,
      };
    }
    if (byTitle.length > 1) {
      return {
        ok: false,
        reason: "AMBIGUOUS",
        candidates: byTitle.map((d) => d.document.id),
      };
    }
    return { ok: false, reason: "NOT_FOUND" };
  }

  if (available.length === 1) {
    const d = available[0]!;
    return {
      ok: true,
      documentId: d.document.id,
      title: d.document.title,
      baseRevisionId: d.latestRevision!.id,
      baseRevisionNumber: d.latestRevision!.revisionNumber,
      baseContent: d.latestRevision!.contentMarkdown,
    };
  }

  return {
    ok: false,
    reason: "AMBIGUOUS",
    candidates: available.map((d) => d.document.id),
  };
}

type SectionBlock = { heading: string; level: number; body: string };

/** Split markdown into heading-led sections (ATX). Leading preamble kept as level 0. */
export function splitMarkdownSections(md: string): SectionBlock[] {
  const lines = md.split(/\r?\n/);
  const blocks: SectionBlock[] = [];
  let current: SectionBlock = { heading: "", level: 0, body: "" };
  for (const line of lines) {
    const m = /^(#{1,6})\s+(.+)$/.exec(line);
    if (m) {
      if (current.heading || current.body.trim()) blocks.push(current);
      current = { heading: m[2]!.trim(), level: m[1]!.length, body: "" };
    } else {
      current.body += (current.body ? "\n" : "") + line;
    }
  }
  if (current.heading || current.body.trim()) blocks.push(current);
  return blocks;
}

function matchSectionIndexes(blocks: SectionBlock[], hint: string): number[] {
  const h = hint.toLowerCase().trim();
  return blocks
    .map((b, i) => ({ b, i }))
    .filter(
      ({ b }) =>
        b.heading.toLowerCase() === h ||
        b.heading.toLowerCase().includes(h) ||
        new RegExp(`\\bsection\\s+${escapeRegExp(h)}\\b`, "i").test(b.heading) ||
        new RegExp(`\\b${escapeRegExp(h)}\\b`, "i").test(b.heading),
    )
    .map(({ i }) => i);
}

function renderSections(blocks: SectionBlock[]): string {
  return blocks
    .map((b) => {
      if (b.level <= 0) return b.body;
      const head = `${"#".repeat(b.level)} ${b.heading}`;
      return b.body ? `${head}\n${b.body}` : head;
    })
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trimEnd() + "\n";
}

/**
 * Merge Nora's proposed target section into the base document.
 * Non-target sections are taken exclusively from base (scope control).
 */
export function applyTargetedSectionRevision(
  baseMarkdown: string,
  proposedMarkdown: string,
  sectionHint: string | null,
): { ok: true; content: string } | { ok: false; reason: string } {
  if (!sectionHint) {
    return { ok: true, content: proposedMarkdown };
  }
  const base = splitMarkdownSections(baseMarkdown);
  const proposed = splitMarkdownSections(proposedMarkdown);
  const baseHits = matchSectionIndexes(base, sectionHint);
  if (baseHits.length !== 1) {
    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
  }
  const proposedHits = matchSectionIndexes(proposed, sectionHint);
  const replacement: SectionBlock =
    proposedHits.length === 1
      ? proposed[proposedHits[0]!]!
      : {
          heading: base[baseHits[0]!]!.heading,
          level: base[baseHits[0]!]!.level,
          body: proposedMarkdown.trim(),
        };
  const merged = base.map((b, i) =>
    i === baseHits[0]
      ? { heading: b.heading, level: b.level, body: replacement.body }
      : b,
  );
  return { ok: true, content: renderSections(merged) };
}

/**
 * When sectionHint is set, require non-target sections to remain identical to base.
 * Fail closed on ambiguous section match.
 */
export function assertSectionScope(
  baseMarkdown: string,
  nextMarkdown: string,
  sectionHint: string | null,
): { ok: true } | { ok: false; reason: string } {
  if (!sectionHint) return { ok: true };
  const base = splitMarkdownSections(baseMarkdown);
  const next = splitMarkdownSections(nextMarkdown);
  const baseHits = matchSectionIndexes(base, sectionHint);
  const nextHits = matchSectionIndexes(next, sectionHint);
  if (baseHits.length !== 1) {
    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE" };
  }
  if (nextHits.length !== 1) {
    return { ok: false, reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_NEXT" };
  }

  const baseTarget = baseHits[0]!;
  const nextTarget = nextHits[0]!;
  const normalize = (s: string) => s.replace(/\s+/g, " ").trim();
  const baseOthers = base
    .filter((_, i) => i !== baseTarget)
    .map((b) => `${b.level}:${normalize(b.heading)}:${normalize(b.body)}`);
  const nextOthers = next
    .filter((_, i) => i !== nextTarget)
    .map((b) => `${b.level}:${normalize(b.heading)}:${normalize(b.body)}`);

  if (baseOthers.length !== nextOthers.length) {
    return { ok: false, reason: "SECTION_SCOPE_STRUCTURE_CHANGED" };
  }
  for (let i = 0; i < baseOthers.length; i++) {
    if (baseOthers[i] !== nextOthers[i]) {
      return { ok: false, reason: "SECTION_SCOPE_EXCEEDED" };
    }
  }
  return { ok: true };
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export type DocumentEffectSummary = {
  act: "CREATE" | "REVISE";
  status?: string;
  documentId?: string;
  revisionId?: string;
  revisionNumber?: number;
  baseRevisionId?: string;
  reason?: string;
  idempotentReplay?: boolean;
};

/**
 * Application ACK appended after confirmed effect — distinct from Nora narration.
 */
export function formatDocumentEffectAck(effect: DocumentEffectSummary | null): string {
  if (!effect) return "";
  const lines = [
    "### Résultat applicatif D4 (source de vérité)",
    "",
    `- Acte demandé: ${effect.act}`,
    `- Statut observé: ${effect.status ?? "UNKNOWN"}`,
  ];
  if (effect.documentId) lines.push(`- documentId: \`${effect.documentId}\``);
  if (effect.revisionNumber != null) lines.push(`- révision: v${effect.revisionNumber}`);
  if (effect.revisionId) lines.push(`- revisionId: \`${effect.revisionId}\``);
  if (effect.baseRevisionId) lines.push(`- baseRevisionId: \`${effect.baseRevisionId}\``);
  if (effect.idempotentReplay) lines.push("- rejeu idempotent: oui");
  if (effect.reason) lines.push(`- raison: ${effect.reason}`);
  if (effect.status === "AVAILABLE") {
    lines.push(
      "",
      "Ce statut est confirmé par la persistance Studio. Ne pas le contredire.",
    );
  } else if (effect.status === "CONFLICT") {
    lines.push("", "Conflit de base — aucune nouvelle révision écrite. Requalification requise.");
  } else if (effect.status && effect.status !== "AVAILABLE") {
    lines.push("", "Aucun succès d'écriture D4 ne doit être affirmé pour ce tour.");
  }
  return lines.join("\n");
}

export function appendDocumentEffectAck(
  assistantContent: string,
  effect: DocumentEffectSummary | null,
): string {
  const ack = formatDocumentEffectAck(effect);
  if (!ack) return assistantContent;
  return `${assistantContent.trimEnd()}\n\n---\n${ack}\n`;
}
```

### `projects/sfia-studio-next/web/tests/unit/document-act.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import {
  appendDocumentEffectAck,
  applyTargetedSectionRevision,
  assertSectionScope,
  explicitDocumentIntent,
  formatDocumentEffectAck,
  qualifyDocumentAct,
  resolveReviseTarget,
  splitMarkdownSections,
} from "@/domains/conversation/document-act";

describe("document-act qualification (ML4-REC-08)", () => {
  it("CREATE on explicit rédaction request", () => {
    expect(qualifyDocumentAct("Rédige un document de synthèse sur A et B").kind).toBe("CREATE");
    expect(explicitDocumentIntent("Rédige un document de synthèse")).toBe(true);
  });

  it("NONE on analytical chatter", () => {
    expect(qualifyDocumentAct("Bonjour Nora, compare les options").kind).toBe("NONE");
    expect(explicitDocumentIntent("Bonjour Nora")).toBe(false);
  });

  it("REVISE with section and document hints", () => {
    const q = qualifyDocumentAct(
      "Révise uniquement la section 2 du document Synthèse demandée et conserve le reste",
    );
    expect(q.kind).toBe("REVISE");
    if (q.kind === "REVISE") {
      expect(q.sectionHint).toBe("2");
      expect(q.documentHint).toMatch(/Synthèse/i);
    }
  });

  it("REVISE by document id (UUID with hyphens)", () => {
    const q = qualifyDocumentAct(
      "Révise le document doc_7110edbd-ae27-4d85-80a3-84d9c048074a section Analyse",
    );
    expect(q.kind).toBe("REVISE");
    if (q.kind === "REVISE") {
      expect(q.documentHint).toBe("doc_7110edbd-ae27-4d85-80a3-84d9c048074a");
    }
  });
});

describe("document-act revise target resolution", () => {
  const docs = [
    {
      document: { id: "doc_a", title: "Alpha" },
      latestRevision: {
        id: "drev_a1",
        revisionNumber: 1,
        status: "AVAILABLE",
        contentMarkdown: "# Alpha\n",
      },
    },
    {
      document: { id: "doc_b", title: "Beta Spec" },
      latestRevision: {
        id: "drev_b1",
        revisionNumber: 2,
        status: "AVAILABLE",
        contentMarkdown: "# Beta\n",
      },
    },
  ];

  it("resolves unique title / id", () => {
    expect(resolveReviseTarget(docs, "doc_a")).toMatchObject({ ok: true, documentId: "doc_a" });
    expect(resolveReviseTarget(docs, "Beta")).toMatchObject({ ok: true, documentId: "doc_b" });
  });

  it("AMBIGUOUS without hint when several AVAILABLE", () => {
    expect(resolveReviseTarget(docs, null)).toMatchObject({ ok: false, reason: "AMBIGUOUS" });
  });
});

describe("document-act section merge + scope", () => {
  const base = `# Doc

## Section 1 — Contexte

Contexte A.

## Section 2 — Analyse

Ancien texte.

## Section 3 — Suite

Suite A.
`;

  it("merges only the targeted section", () => {
    const proposed = `# Doc

## Section 2 — Analyse

Nouveau texte ciblé.
`;
    const merged = applyTargetedSectionRevision(base, proposed, "2");
    expect(merged.ok).toBe(true);
    if (!merged.ok) return;
    expect(merged.content).toContain("Nouveau texte ciblé");
    expect(merged.content).toContain("Contexte A.");
    expect(merged.content).toContain("Suite A.");
    expect(assertSectionScope(base, merged.content, "2")).toEqual({ ok: true });
  });

  it("detects scope exceeded when other sections change", () => {
    const bad = base.replace("Contexte A.", "Contexte B.");
    expect(assertSectionScope(base, bad, "2").ok).toBe(false);
  });

  it("splits ATX sections", () => {
    expect(splitMarkdownSections(base).map((s) => s.heading)).toEqual([
      "Doc",
      "Section 1 — Contexte",
      "Section 2 — Analyse",
      "Section 3 — Suite",
    ]);
  });
});

describe("document-act ACK", () => {
  it("formats AVAILABLE create ACK", () => {
    const ack = formatDocumentEffectAck({
      act: "CREATE",
      status: "AVAILABLE",
      documentId: "doc_x",
      revisionNumber: 1,
    });
    expect(ack).toMatch(/Résultat applicatif D4/);
    expect(ack).toMatch(/doc_x/);
    expect(ack).toMatch(/v1/);
  });

  it("appends ACK after Nora narration", () => {
    const out = appendDocumentEffectAck("Je propose un texte.", {
      act: "CREATE",
      status: "AVAILABLE",
      documentId: "doc_y",
      revisionNumber: 1,
    });
    expect(out).toContain("Je propose un texte.");
    expect(out).toContain("Résultat applicatif D4");
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/git-file-provenance.test.ts`

```typescript
import { beforeEach, describe, expect, it } from "vitest";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";

describe("SCRIPTED Git provenance blob vs commit (ML4-REC-07)", () => {
  beforeEach(() => {
    resetScriptedStore();
  });

  it("getFileContent returns blob sha distinct from commit/ref sha", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-prov";
    const fullName = "acme/docs-projet";
    const commitSha = await provider.getRefSha(pilotId, fullName, "main");
    const file = await provider.getFileContent(pilotId, fullName, "README.md", commitSha);
    expect(file.sha).toMatch(/^[0-9a-f]{40}$/i);
    expect(file.sha.toLowerCase()).not.toBe(commitSha.toLowerCase());
  });

  it("listRefs includes main and candidate branches", async () => {
    const provider = getScriptedGitHubProvider();
    const pilotId = "pilot-refs";
    const fullName = "acme/docs-projet";
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    await provider.createBranch(pilotId, fullName, "feat/candidate-ml4", mainSha);
    const refs = await provider.listRefs(pilotId, fullName);
    const names = refs.map((r) => r.name);
    expect(names).toContain("main");
    expect(names).toContain("feat/candidate-ml4");
    const filtered = await provider.listRefs(pilotId, fullName, "feat/");
    expect(filtered.every((r) => r.name.includes("feat"))).toBe(true);
  });
});
```

### `projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts`

```typescript
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, pilots, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  completeGitHubAuthorization,
  startGitHubAuthorization,
} from "@/domains/integrations/authorization-service";
import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
import {
  listGitRefs,
  readGitFile,
} from "@/domains/integrations/resource-service";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";
import {
  getDocumentRevision,
  listDocumentRevisions,
  listDocuments,
  reviseDocument,
  savePreparationDocument,
} from "@/domains/document/service";
import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedProject(label: string) {
  resetScriptedStore();
  const pilotId = await seedPilot(label);
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed!.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`seed failed: ${created.status}`);
  }
  return { pilotId, projectId: created.projectId, preparationId: prep.id };
}

describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
  });

  it("A: conversational CREATE persists v1 and ACK appears in assistant message", async () => {
    const pilotId = await seedPilot("ml4-create");
    const prep = await openOrCreatePreparation(pilotId);
    const chat = await postUserMessageAndNora(
      pilotId,
      prep.id,
      "Rédige un document de synthèse sur les options A et B",
    );
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    expect(chat.documentSave?.act).toBe("CREATE");
    expect(chat.documentSave?.revisionNumber).toBe(1);
    expect(chat.documentSave?.documentId).toBeTruthy();

    const msgs = await listMessages(pilotId, prep.id);
    const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
    expect(assistant?.content).toMatch(/Résultat applicatif D4/);
    expect(assistant?.content).toContain(chat.documentSave!.documentId!);
    expect(assistant?.content).not.toMatch(/non enregistré/i);

    const docs = await listDocuments(pilotId, prep.id);
    expect(docs).toHaveLength(1);
    expect(docs[0]!.latestRevision?.revisionNumber).toBe(1);
  });

  it("A-neg: analytical chatter does not create a document", async () => {
    const pilotId = await seedPilot("ml4-nochatter");
    const prep = await openOrCreatePreparation(pilotId);
    const chat = await postUserMessageAndNora(
      pilotId,
      prep.id,
      "Compare les options sans produire de livrable",
    );
    expect(chat.documentSave == null || chat.documentSave.status !== "AVAILABLE").toBe(true);
    expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
  });

  it("B: conversational REVISE keeps same documentId, produces v2, scopes section 2", async () => {
    const pilotId = await seedPilot("ml4-revise");
    const prep = await openOrCreatePreparation(pilotId);
    const created = await postUserMessageAndNora(
      pilotId,
      prep.id,
      "Rédige un document de synthèse sur Atlas",
    );
    expect(created.documentSave?.status).toBe("AVAILABLE");
    const documentId = created.documentSave!.documentId!;
    const listed = await listDocumentRevisions(pilotId, prep.id, documentId);
    expect(listed.status).toBe("AVAILABLE");
    const v1 = listed.revisions.find((r) => r.revisionNumber === 1);
    expect(v1?.status).toBe("AVAILABLE");

    const revised = await postUserMessageAndNora(
      pilotId,
      prep.id,
      `Révise uniquement la section 2 du document ${documentId} et conserve le reste`,
    );
    expect(revised.documentSave?.status).toBe("AVAILABLE");
    expect(revised.documentSave?.act).toBe("REVISE");
    expect(revised.documentSave?.documentId).toBe(documentId);
    expect(revised.documentSave?.revisionNumber).toBe(2);
    expect(revised.documentSave?.baseRevisionId).toBe(v1!.id);

    const v2 = await getDocumentRevision(
      pilotId,
      prep.id,
      documentId,
      revised.documentSave!.revisionId!,
    );
    expect(v2.status).toBe("AVAILABLE");
    if (v2.status !== "AVAILABLE") throw new Error("expected AVAILABLE revision");
    expect(v2.revision.revisionNumber).toBe(2);
    expect(v2.revision.contentMarkdown).toMatch(/Section 1/i);
    expect(v2.revision.contentMarkdown).toMatch(/Section 3/i);

    const msgs = await listMessages(pilotId, prep.id);
    const last = msgs.filter((m) => m.role === "assistant").at(-1);
    expect(last?.content).toMatch(/Résultat applicatif D4/);
    expect(last?.content).toMatch(/REVISE/);
  });

  it("C: stale baseRevisionId → CONFLICT without phantom v2; retry idempotent", async () => {
    const pilotId = await seedPilot("ml4-stale");
    const prep = await openOrCreatePreparation(pilotId);
    const v1 = await savePreparationDocument(pilotId, prep.id, "Spec", "# S\n\n## Section 1\n\na\n\n## Section 2\n\nb\n", undefined, {
      correlationKey: newId("ck"),
    });
    expect(v1.status).toBe("AVAILABLE");
    if (v1.status !== "AVAILABLE" || !v1.documentId || !v1.revisionId) {
      throw new Error("v1 unavailable");
    }
    const documentId = v1.documentId;
    const baseId = v1.revisionId;

    const v2 = await reviseDocument(pilotId, prep.id, {
      documentId,
      baseRevisionId: baseId,
      contentMarkdown: "# S\n\n## Section 1\n\na\n\n## Section 2\n\nb2\n",
      correlationKey: newId("ck"),
    });
    expect(v2.status).toBe("AVAILABLE");
    if (v2.status !== "AVAILABLE" || !v2.revisionId) throw new Error("v2 unavailable");

    const stale = await reviseDocument(pilotId, prep.id, {
      documentId,
      baseRevisionId: baseId,
      contentMarkdown: "# S\n\n## Section 1\n\na\n\n## Section 2\n\bstale\n",
      correlationKey: newId("ck"),
    });
    expect(stale.status).toBe("CONFLICT");
    expect("reason" in stale && stale.reason).toBe("BASE_STALE");

    const revs = await db
      .select()
      .from(documentRevisions)
      .where(eq(documentRevisions.documentId, documentId));
    expect(revs.filter((r) => r.status === "AVAILABLE").map((r) => r.revisionNumber).sort()).toEqual([
      1, 2,
    ]);

    const key = `docrev:idem:${documentId}:${v2.revisionId}`;
    const first = await reviseDocument(pilotId, prep.id, {
      documentId,
      baseRevisionId: v2.revisionId,
      contentMarkdown: "# S\n\n## Section 1\n\na\n\n## Section 2\n\bv3\n",
      correlationKey: key,
    });
    const again = await reviseDocument(pilotId, prep.id, {
      documentId,
      baseRevisionId: v2.revisionId,
      contentMarkdown: "# S\n\n## Section 1\n\na\n\n## Section 2\n\bv3\n",
      correlationKey: key,
    });
    expect(first.status).toBe("AVAILABLE");
    expect(again.status).toBe("AVAILABLE");
    if (first.status !== "AVAILABLE" || again.status !== "AVAILABLE") {
      throw new Error("idempotent revise unavailable");
    }
    expect(again.idempotentReplay).toBe(true);
    expect(again.revisionId).toBe(first.revisionId);
  });

  it("D: readGitFile distinguishes blobSha vs commitSha; candidate ref + permalink", async () => {
    const { pilotId, projectId } = await seedProject("ml4-prov");
    const sessionId = newId("sid");
    const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
    const status = await completeGitHubAuthorization({
      pilotId,
      state,
      studioSessionId: sessionId,
    });
    const repoId = status.repositories[0]!.id;
    await attachRepositoryToProject(pilotId, projectId, repoId);

    const provider = getScriptedGitHubProvider();
    const fullName = status.repositories[0]!.fullName;
    const mainSha = await provider.getRefSha(pilotId, fullName, "main");
    await provider.createBranch(pilotId, fullName, "feat/candidate-ml4", mainSha);
    // Copy README onto candidate head so read succeeds at branch tip.
    const mainFile = await provider.getFileContent(pilotId, fullName, "README.md", mainSha);
    await provider.putFileContents({
      pilotId,
      fullName,
      path: "README.md",
      branch: "feat/candidate-ml4",
      message: "seed candidate",
      content: mainFile.content + "\n# candidate mark\n",
    });

    const mainRead = await readGitFile({
      pilotId,
      projectId,
      repositoryId: repoId,
      path: "README.md",
      ref: "main",
    });
    expect(mainRead.provenance.blobSha).toMatch(/^[0-9a-f]{40}$/i);
    expect(mainRead.provenance.commitSha).toMatch(/^[0-9a-f]{40}$/i);
    expect(mainRead.provenance.blobSha).not.toBe(mainRead.provenance.commitSha);
    expect(mainRead.provenance.commitShaVerified).toBe(true);
    expect(mainRead.provenance.permalink).toBe(
      `https://github.com/${fullName}/blob/${mainRead.provenance.commitSha}/README.md`,
    );
    expect(mainRead.provenance.permalink).not.toContain(mainRead.provenance.blobSha);

    const cand = await readGitFile({
      pilotId,
      projectId,
      repositoryId: repoId,
      path: "README.md",
      ref: "feat/candidate-ml4",
    });
    expect(cand.provenance.commitShaVerified).toBe(true);
    expect(cand.provenance.commitSha).not.toBe(mainRead.provenance.commitSha);
    expect(cand.content).toMatch(/candidate mark/);

    const refs = await listGitRefs({
      pilotId,
      projectId,
      repositoryId: repoId,
      refPrefix: "feat/",
    });
    expect(refs.refs.some((r) => r.name === "feat/candidate-ml4")).toBe(true);
    expect(refs.refs.every((r) => r.sha.length === 40)).toBe(true);
  });
});
```

## 6. Fichiers modifiés (diffs complets vs base `974b0030a94469bef05496151792e8c35a9a83e9`)


### `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index ddf6028f..252cb734 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -10,7 +10,11 @@ import {
   reconstituteConfirmedD4Effects,
   selectRelevantKnowledgeContext,
 } from "@/domains/knowledge/service";
-import { listDocuments, savePreparationDocument } from "@/domains/document/service";
+import {
+  listDocuments,
+  reviseDocument,
+  savePreparationDocument,
+} from "@/domains/document/service";
 import {
   bindTurnGenerationId,
   commitTurnTerminal,
@@ -28,6 +32,14 @@ import {
   type ConversationalAuthorityOutcome,
 } from "@/domains/pilotage/conversation-authority";
 import { buildNoraPilotageContext } from "@/domains/pilotage/nora-context";
+import {
+  appendDocumentEffectAck,
+  applyTargetedSectionRevision,
+  assertSectionScope,
+  qualifyDocumentAct,
+  resolveReviseTarget,
+  type DocumentEffectSummary,
+} from "./document-act";

 export async function listMessages(pilotId: string, preparationId: string) {
   const ctx = await getPreparationContext(pilotId, preparationId);
@@ -39,15 +51,6 @@ export async function listMessages(pilotId: string, preparationId: string) {
     .orderBy(asc(messages.ordinal));
 }

-function explicitDocumentIntent(text: string): boolean {
-  return (
-    /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b[\s\S]{0,40}\b(document|note|synthèse|rapport|spécification)\b/i.test(
-      text,
-    ) ||
-    /\b(document|note de synthèse|rapport)\b[\s\S]{0,20}\b(s'il te plaît|stp|please)\b/i.test(text)
-  );
-}
-
 function extractDocumentMarkdown(
   assistantText: string,
   userText: string,
@@ -99,7 +102,16 @@ export type TurnResult = {
   capitalisation?: unknown;
   capitalisationAttempted?: unknown;
   capitalisationLimit?: string;
-  documentSave?: { status?: string; documentId?: string; revisionNumber?: number; reason?: string } | null;
+  documentSave?: {
+    status?: string;
+    documentId?: string;
+    revisionId?: string;
+    revisionNumber?: number;
+    baseRevisionId?: string;
+    reason?: string;
+    act?: "CREATE" | "REVISE";
+    idempotentReplay?: boolean;
+  } | null;
   idempotentReplay: boolean;
   /**
    * True only when a HumanDecision id was actually produced (APPLIED/ALREADY_APPLIED).
@@ -494,9 +506,20 @@ export async function postUserMessageAndNora(
     ownershipLost: false,
   };
   let capitalisationError: string | undefined;
-  let documentSave: Awaited<ReturnType<typeof savePreparationDocument>> | null = null;
+  type DocumentSaveResult = {
+    status: string;
+    documentId?: string;
+    revisionId?: string;
+    revisionNumber?: number;
+    baseRevisionId?: string;
+    reason?: string;
+    act?: "CREATE" | "REVISE";
+    idempotentReplay?: boolean;
+  };
+  let documentSave: DocumentSaveResult | null = null;
   let documentSaveUnknown = false;
   let ownershipLostBeforeD4 = false;
+  const documentAct = qualifyDocumentAct(content);

   if (reply.status === "COMPLETE") {
     if (turnRaceHooks.beforeD4Effect) {
@@ -533,11 +556,11 @@ export async function postUserMessageAndNora(
         });
       }

-      if (explicitDocumentIntent(content) && !ownershipLostBeforeD4) {
+      if (documentAct.kind === "CREATE" && !ownershipLostBeforeD4) {
         const extracted = extractDocumentMarkdown(reply.content, content);
         if (extracted) {
           try {
-            documentSave = await savePreparationDocument(
+            const saved = await savePreparationDocument(
               pilotId,
               preparationId,
               extracted.title,
@@ -552,6 +575,7 @@ export async function postUserMessageAndNora(
                   generationId: reply.generationId,
                   userMessageId: reserved.userMessageId,
                   explicitRequest: true,
+                  act: "CREATE",
                 },
                 scope: "document",
                 turnFence: {
@@ -561,17 +585,19 @@ export async function postUserMessageAndNora(
                 },
               },
             );
+            documentSave = { ...saved, act: "CREATE" };
             if (documentSave.status === "FAILED" && documentSave.reason === "TURN_OWNERSHIP_LOST") {
               ownershipLostBeforeD4 = true;
               documentSave = null;
-            } else if (documentSave.status !== "AVAILABLE") {
+            } else if (
+              documentSave.status !== "AVAILABLE" &&
+              documentSave.status !== "CONFLICT"
+            ) {
               documentSaveUnknown =
                 documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
             }
           } catch {
-            documentSave = { status: "UNKNOWN", reason: "DOCUMENT_SAVE_EXCEPTION" } as Awaited<
-              ReturnType<typeof savePreparationDocument>
-            >;
+            documentSave = { status: "UNKNOWN", reason: "DOCUMENT_SAVE_EXCEPTION", act: "CREATE" };
             documentSaveUnknown = true;
             emitObs({
               event_name: "d3.turn.document_save_failed",
@@ -584,10 +610,147 @@ export async function postUserMessageAndNora(
             });
           }
         }
+      } else if (documentAct.kind === "REVISE" && !ownershipLostBeforeD4) {
+        try {
+          const docs = await listDocuments(pilotId, preparationId);
+          const target = resolveReviseTarget(docs, documentAct.documentHint);
+          if (!target.ok) {
+            documentSave = {
+              status: "FAILED",
+              reason: `REVISE_${target.reason}`,
+              act: "REVISE",
+            };
+          } else {
+            const extracted = extractDocumentMarkdown(reply.content, content);
+            const proposed = extracted?.content ?? reply.content;
+            const merged = applyTargetedSectionRevision(
+              target.baseContent,
+              proposed,
+              documentAct.sectionHint,
+            );
+            if (!merged.ok) {
+              documentSave = {
+                status: "FAILED",
+                reason: merged.reason,
+                documentId: target.documentId,
+                baseRevisionId: target.baseRevisionId,
+                act: "REVISE",
+              };
+            } else {
+              const scopeCheck = assertSectionScope(
+                target.baseContent,
+                merged.content,
+                documentAct.sectionHint,
+              );
+              if (!scopeCheck.ok) {
+                documentSave = {
+                  status: "FAILED",
+                  reason: scopeCheck.reason,
+                  documentId: target.documentId,
+                  baseRevisionId: target.baseRevisionId,
+                  act: "REVISE",
+                };
+              } else {
+                const correlationKey = opts?.correlationKey
+                  ? `docrev:${opts.correlationKey}:${target.documentId}:${target.baseRevisionId}`
+                  : `docrev:${reply.generationId}:${target.documentId}:${target.baseRevisionId}`;
+                const revised = await reviseDocument(pilotId, preparationId, {
+                  documentId: target.documentId,
+                  baseRevisionId: target.baseRevisionId,
+                  contentMarkdown: merged.content,
+                  correlationKey,
+                  scope: documentAct.sectionHint ? "section" : "document",
+                  sectionHint: documentAct.sectionHint ?? undefined,
+                  provenance: {
+                    sourceKind: "nora",
+                    generationId: reply.generationId,
+                    userMessageId: reserved.userMessageId,
+                    explicitRequest: true,
+                    act: "REVISE",
+                    sectionHint: documentAct.sectionHint,
+                  },
+                });
+                documentSave = {
+                  ...revised,
+                  act: "REVISE",
+                  baseRevisionId:
+                    "baseRevisionId" in revised && typeof revised.baseRevisionId === "string"
+                      ? revised.baseRevisionId
+                      : target.baseRevisionId,
+                };
+                if (
+                  documentSave.status !== "AVAILABLE" &&
+                  documentSave.status !== "CONFLICT" &&
+                  !(documentSave.status === "FAILED" && documentSave.idempotentReplay)
+                ) {
+                  documentSaveUnknown =
+                    documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
+                }
+              }
+            }
+          }
+          emitObs({
+            event_name: "d3.turn.document_revise",
+            component: "d3.conversation",
+            request_id: requestId,
+            operation_id: reserved.operationId,
+            generation_id: reply.generationId,
+            outcome:
+              documentSave?.status === "AVAILABLE"
+                ? "SUCCESS"
+                : documentSave?.status === "CONFLICT"
+                  ? "FAILED"
+                  : documentSave?.status === "FAILED"
+                    ? "FAILED"
+                    : "UNKNOWN",
+            meta: {
+              act: "REVISE",
+              status: documentSave?.status ?? null,
+              reason: documentSave?.reason ?? null,
+              document_id: documentSave?.documentId ?? null,
+            },
+          });
+        } catch {
+          documentSave = { status: "UNKNOWN", reason: "DOCUMENT_REVISE_EXCEPTION", act: "REVISE" };
+          documentSaveUnknown = true;
+          emitObs({
+            event_name: "d3.turn.document_revise_failed",
+            component: "d3.conversation",
+            request_id: requestId,
+            operation_id: reserved.operationId,
+            generation_id: reply.generationId,
+            outcome: "UNKNOWN",
+            error_category: "DOCUMENT_REVISE_EXCEPTION",
+          });
+        }
       }
     }
   }

+  const documentEffectForAck: DocumentEffectSummary | null =
+    documentSave && !ownershipLostBeforeD4
+      ? {
+          act: documentSave.act ?? (documentAct.kind === "REVISE" ? "REVISE" : "CREATE"),
+          status: documentSave.status,
+          documentId: documentSave.documentId,
+          revisionId: documentSave.revisionId,
+          revisionNumber: documentSave.revisionNumber,
+          baseRevisionId: documentSave.baseRevisionId,
+          reason: documentSave.reason,
+          idempotentReplay: documentSave.idempotentReplay,
+        }
+      : documentAct.kind !== "NONE" && !ownershipLostBeforeD4
+        ? {
+            act: documentAct.kind === "REVISE" ? "REVISE" : "CREATE",
+            status: "UNKNOWN",
+            reason: "NO_EFFECT_OBSERVED",
+          }
+        : null;
+
+  const assistantContentForCommit = ownershipLostBeforeD4
+    ? reply.content
+    : appendDocumentEffectAck(reply.content, documentEffectForAck);
+
   const confirmedCapitalisations = capitalisation.capitalisations.filter(
     (c) => c.status === "AVAILABLE",
   );
@@ -605,14 +768,14 @@ export async function postUserMessageAndNora(
     !ownershipLostBeforeD4 &&
     reply.status === "COMPLETE" &&
     (documentSaveUnknown || capitalisationError) &&
-    explicitDocumentIntent(content)
+    documentAct.kind !== "NONE"
   ) {
     turnStatus = "UNKNOWN";
   } else if (
     !ownershipLostBeforeD4 &&
     reply.status === "COMPLETE" &&
     capitalisationError &&
-    !explicitDocumentIntent(content)
+    documentAct.kind === "NONE"
   ) {
     turnStatus = "UNKNOWN";
   }
@@ -694,7 +857,7 @@ export async function postUserMessageAndNora(
         ? undefined
         : {
             id: assistantId,
-            content: reply.content,
+            content: assistantContentForCommit,
             messageStatus: reply.status,
             generationId: reply.generationId,
             ordinal: reserved.ordinalAssistant,

```

### `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index fccfd9c9..d8a5f25e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -99,7 +99,10 @@ const SYSTEM_INSTRUCTIONS = [
   "- Pour une question simple: réponse courte, sans surinvestigation.",
   "- Pour une comparaison: structure critique (faits / hypothèses / options / limites).",
   "- Cite la provenance quand un point déterminant s'appuie sur un acquis ou document D4 réellement lu (pas la guidance spécialisée interne).",
-  "- Production documentaire: seulement si le Pilote le demande explicitement; distingue rédaction et sauvegarde confirmée.",
+  "- Production documentaire: seulement si le Pilote le demande explicitement.",
+  "- Distingue toujours rédaction proposée et sauvegarde confirmée. Tu n'affirmes jamais qu'un document est « enregistré », « non enregistré », créé ou révisé : seul le bloc applicatif D4 post-effet (Résultat applicatif D4) porte cette vérité.",
+  "- Révision ciblée: si le Pilote demande de réviser une section d'un document existant, produis le document Markdown complet révisé en ne modifiant que la section demandée; conserve le reste à l'identique.",
+  "- Provenance Git: un SHA de contenu (blob) n'est jamais un SHA de commit; cite blobSha et commitSha séparément lorsqu'ils sont fournis par les outils.",
   "Réponds en français. Markdown utile autorisé (titres, listes, tableaux).",
 ].join("\n");

@@ -200,6 +203,9 @@ async function fixtureReply(
   const know = (input.knowledgeSnippets ?? []).slice(0, 3).join(" | ");
   const ctx = input.contextSnippets.slice(0, 3).join(" | ");
   const wantsDoc = /document|rédige|rédiger|synthèse écrite|note de/i.test(input.userText);
+  const wantsRevise =
+    /\b(révise|reviser|réviser|revise|modifie|modifier|mets?\s+à\s+jour)\b/i.test(input.userText) &&
+    /\b(document|note|synthèse|rapport|doc_)/i.test(input.userText);
   const wantsCompare = /compar(e|er|aison)|option/i.test(input.userText);
   const pilotageJoined = (input.pilotageSnippets ?? []).join("\n");
   // C01: structured signals preferred (same entry contract as conversation path).
@@ -235,10 +241,14 @@ async function fixtureReply(
       "Réponse courte (profil simple): je peux clarifier sans surinvestigation, " +
       "sans créer de projet, cycle ni décision.\n";
   }
-  if (wantsDoc) {
+  if (wantsRevise) {
+    body +=
+      "\n---\nDocument révisé proposé (rédaction seule — effet D4 uniquement après confirmation applicative):\n\n" +
+      `# Document révisé\n\n## Section 1 — Contexte\n\nContexte inchangé (fixture).\n\n## Section 2 — Contenu révisé\n\n${input.userText.slice(0, 400)}\n\n## Section 3 — Suite\n\nSuite inchangée (fixture).\n`;
+  } else if (wantsDoc) {
     body +=
       "\n---\nDocument proposé (rédaction seule — sauvegarde D4 uniquement après confirmation applicative):\n\n" +
-      `# Synthèse demandée\n\n${input.userText.slice(0, 400)}\n`;
+      `# Synthèse demandée\n\n## Section 1 — Contexte\n\nContexte initial.\n\n## Section 2 — Analyse\n\n${input.userText.slice(0, 400)}\n\n## Section 3 — Suite\n\nPoints ouverts à qualifier.\n`;
   }
   if (toolNotes) body += `\n### Outil D4 (fixture)\n${toolNotes}\n`;
   if (know) body += `\n### Contexte D4 pré-sélectionné\n${know.slice(0, 400)}\n`;

```

### `projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts b/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
index e69efe61..a67ba830 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/git-read-tools.ts
@@ -52,7 +52,7 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
     tool({
       name: "read_git_file",
       description:
-        "Read a bounded file from an attached Git repo. ref is mandatory — never assume main.",
+        "Read a bounded file from an attached Git repo. ref is mandatory — never assume main. Provenance distinguishes blobSha (content) from commitSha (revision); never treat blobSha as a commit.",
       parameters: z.object({
         repositoryId: z.string(),
         path: z.string(),
@@ -76,7 +76,16 @@ export async function buildNoraGitReadTools(scope: GitToolScope) {
           const payload = {
             status: "AVAILABLE",
             excerpt,
-            provenance: result.provenance,
+            provenance: {
+              ...result.provenance,
+              // Explicit aliases for model clarity (same values as typed provenance).
+              blobSha: result.provenance.blobSha,
+              commitSha: result.provenance.commitSha,
+              commitShaVerified: result.provenance.commitShaVerified,
+              permalink: result.provenance.permalink,
+              warning:
+                "blobSha is a content object id — never use it in /blob/{sha}/path as if it were a commit",
+            },
             authorityReminder: result.authorityReminder,
             coverage: (excerpt.length < result.content.length ? "PARTIAL" : "COMPLETE") as ToolCoverage,
           };

```

### `projects/sfia-studio-next/web/src/domains/integrations/types.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/types.ts b/projects/sfia-studio-next/web/src/domains/integrations/types.ts
index 35128cbc..ebc1bd2a 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/types.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/types.ts
@@ -20,9 +20,28 @@ export type RepoRef = {

 export type GitFileProvenance = {
   owner: string;
+  /** Repository fullName when known (owner/name). */
+  fullName?: string;
   path: string;
   requestedRef: string;
+  /**
+   * @deprecated Prefer blobSha. Historically often held Contents API blob sha
+   * (REAL) or a commit-like value (SCRIPTED legacy). Kept additive for callers.
+   */
   resolvedSha: string;
+  /** Git blob object SHA for the file content (Contents API `sha`). */
+  blobSha: string;
+  /**
+   * Commit SHA actually used for the read when verified.
+   * Null when the commit could not be established honestly.
+   */
+  commitSha: string | null;
+  /** True only when commitSha was resolved via ref→commit (or verified pin). */
+  commitShaVerified: boolean;
+  /**
+   * Permalink to path at commitSha when verified; never built from blobSha alone.
+   */
+  permalink: string | null;
   readAt: string;
   permissions: string[];
   freshnessLimitAt: string;

```

### `projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts b/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
index 8ef35a9a..c901d635 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/resource-service.ts
@@ -10,6 +10,9 @@ import { StudioError } from "@/lib/http-errors";
 import { resolveGitHubProvider } from "./github-provider";
 import type { GitFileProvenance, GitSourceSummary } from "./types";

+const SHA_RE = /^[0-9a-f]{40}$/i;
+const MAX_REFS = 40;
+
 async function gateRead(pilotId: string, projectId: string, repositoryId: string) {
   const project = (
     await db
@@ -108,6 +111,15 @@ export async function listProjectGitSources(
     }));
 }

+function buildPermalink(fullName: string, commitSha: string, path: string): string {
+  const cleanPath = path.replace(/^\/+/, "");
+  return `https://github.com/${fullName}/blob/${commitSha}/${cleanPath}`;
+}
+
+/**
+ * Read a file with honest blob/commit provenance.
+ * Resolves commit first, then reads at that commit pin to avoid head drift.
+ */
 export async function readGitFile(input: {
   pilotId: string;
   projectId: string;
@@ -119,20 +131,53 @@ export async function readGitFile(input: {
   if (!input.ref?.trim()) {
     throw new StudioError("INVALID_REQUEST", "Ref Git explicite requise — main non inventé");
   }
+  const requestedRef = input.ref.trim();
   const provider = resolveGitHubProvider();
+
+  let commitSha: string | null = null;
+  let commitShaVerified = false;
+  if (SHA_RE.test(requestedRef)) {
+    // Caller pinned a SHA — treat as commit pin only after a successful read at that ref.
+    commitSha = requestedRef.toLowerCase();
+    commitShaVerified = false;
+  } else {
+    commitSha = (await provider.getRefSha(input.pilotId, repo.fullName, requestedRef)).toLowerCase();
+    commitShaVerified = true;
+  }
+
+  const readRef = commitSha ?? requestedRef;
   const file = await provider.getFileContent(
     input.pilotId,
     repo.fullName,
     input.path,
-    input.ref,
+    readRef,
   );
+  const blobSha = file.sha.toLowerCase();
+  // Defensive: Contents `sha` is a blob. If a provider still returns the commit
+  // as `sha`, refuse to treat that value as both blob and commit.
+  if (commitSha && blobSha === commitSha) {
+    commitShaVerified = false;
+    commitSha = null;
+  } else if (SHA_RE.test(requestedRef) && commitSha && blobSha !== commitSha) {
+    // Successful content read at a SHA distinct from the blob ⇒ commit pin verified.
+    commitShaVerified = true;
+  }
+
   const readAt = new Date();
   const freshness = new Date(readAt.getTime() + 5 * 60 * 1000);
   const provenance: GitFileProvenance = {
     owner: repo.owner,
+    fullName: repo.fullName,
     path: input.path,
-    requestedRef: input.ref,
-    resolvedSha: file.sha,
+    requestedRef,
+    resolvedSha: blobSha,
+    blobSha,
+    commitSha,
+    commitShaVerified,
+    permalink:
+      commitShaVerified && commitSha
+        ? buildPermalink(repo.fullName, commitSha, input.path)
+        : null,
     readAt: readAt.toISOString(),
     permissions: ["read"],
     freshnessLimitAt: freshness.toISOString(),
@@ -152,12 +197,25 @@ export async function listGitRefs(input: {
   refPrefix?: string;
 }) {
   const repo = await gateRead(input.pilotId, input.projectId, input.repositoryId);
-  void input.refPrefix;
   const provider = resolveGitHubProvider();
-  const mainSha = await provider.getRefSha(input.pilotId, repo.fullName, "main");
+  const prefix = input.refPrefix?.trim() || undefined;
+  let refs = await provider.listRefs(input.pilotId, repo.fullName, prefix);
+  if (prefix) {
+    const p = prefix.replace(/^refs\/heads\//, "").toLowerCase();
+    refs = refs.filter(
+      (r) =>
+        r.name.toLowerCase().includes(p) ||
+        r.name.toLowerCase().replace(/^refs\/heads\//, "").includes(p),
+    );
+  }
+  refs = refs.slice(0, MAX_REFS);
   return {
     repositoryFullName: repo.fullName,
-    refs: [{ name: "main", sha: mainSha, kind: "branch" as const }],
-    note: "Liste bornée SCRIPTED — refs explicites requises pour lecture",
+    refs: refs.map((r) => ({
+      name: r.name.replace(/^refs\/heads\//, ""),
+      sha: r.sha,
+      kind: "branch" as const,
+    })),
+    note: "Liste bornée aux refs réellement retournées par le fournisseur — aucune ref inventée",
   };
 }

```

### `projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
index 0eae794e..0c686422 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
@@ -18,6 +18,9 @@ export type RefInfo = { name: string; sha: string };
 export type FileContentResult = {
   path: string;
   ref: string;
+  /**
+   * Blob object SHA (GitHub Contents API). Must not be treated as a commit SHA.
+   */
   sha: string;
   content: string;
   encoding: "utf-8";
@@ -44,6 +47,12 @@ export interface GitHubProvider {
     path: string,
     ref: string,
   ): Promise<FileContentResult>;
+  /** Bounded list of refs (branches/tags) for an authorized repository. */
+  listRefs(
+    pilotId: string,
+    fullName: string,
+    refPrefix?: string,
+  ): Promise<RefInfo[]>;
   createBranch(
     pilotId: string,
     fullName: string,

```

### `projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
index 4d33e4a3..e97f3a92 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-app-auth.ts
@@ -315,6 +315,42 @@ export async function fetchRefSha(
   return sha;
 }

+/**
+ * List matching git refs (branches by default). Bounded; never invents refs.
+ * @see GET /repos/{owner}/{repo}/git/matching-refs/{ref}
+ */
+export async function fetchMatchingRefs(
+  installationToken: string,
+  fullName: string,
+  refPrefix: string | undefined,
+  fetchImpl: GitHubFetch = fetch,
+): Promise<Array<{ name: string; sha: string }>> {
+  const { owner, name } = parseFullName(fullName);
+  const rawPrefix = (refPrefix ?? "heads/").replace(/^refs\//, "");
+  const prefix = rawPrefix.startsWith("heads/") || rawPrefix.startsWith("tags/")
+    ? rawPrefix
+    : `heads/${rawPrefix}`;
+  const raw = await ghJson<Array<{ ref?: string; object?: { sha?: string } }>>(
+    fetchImpl,
+    `/repos/${owner}/${name}/git/matching-refs/${prefix}`,
+    {
+      method: "GET",
+      headers: { Authorization: `Bearer ${installationToken}` },
+    },
+  );
+  if (!Array.isArray(raw)) {
+    throw new StudioError("AMBIGUOUS", "Liste de refs GitHub illisible", { httpStatus: 409 });
+  }
+  return raw
+    .map((r) => {
+      const refName = (r.ref ?? "").replace(/^refs\/heads\//, "").replace(/^refs\//, "");
+      const sha = r.object?.sha ?? "";
+      return { name: refName, sha };
+    })
+    .filter((r) => r.name && /^[0-9a-f]{40}$/i.test(r.sha))
+    .slice(0, 40);
+}
+
 export async function fetchFileContentUtf8(
   installationToken: string,
   fullName: string,

```

### `projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
index 2511fa12..95274b6a 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
@@ -8,6 +8,7 @@ import {
   createGitRef,
   createPullRequestRemote,
   fetchFileContentUtf8,
+  fetchMatchingRefs,
   fetchPullRequestRemote,
   fetchRefSha,
   fetchRepositoryMetadata,
@@ -27,6 +28,7 @@ import type {
   GitHubProvider,
   InstallationRepo,
   PullRequestInfo,
+  RefInfo,
 } from "./github-provider";

 /**
@@ -215,6 +217,13 @@ export class RealGitHubReadProvider implements GitHubProvider {
     };
   }

+  async listRefs(pilotId: string, fullName: string, refPrefix?: string): Promise<RefInfo[]> {
+    void pilotId;
+    assertAllowedRepo(this.creds, fullName);
+    const token = await this.installationToken();
+    return fetchMatchingRefs(token, fullName, refPrefix, this.fetchImpl);
+  }
+
   async createBranch(
     pilotId: string,
     fullName: string,

```

### `projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
index 4b63e757..4434b065 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/scripted-github-provider.ts
@@ -4,6 +4,7 @@ import type {
   GitHubProvider,
   InstallationRepo,
   PullRequestInfo,
+  RefInfo,
 } from "./github-provider";

 export type ScriptedFaultKind =
@@ -273,7 +274,21 @@ class ScriptedGitHubProvider implements GitHubProvider {
       s.files[`${path}@${head}`] ??
       (!isShaLike(ref) ? s.files[`${path}@${s.branches.main}`] : undefined);
     if (!content) throw Object.assign(new Error("FILE_NOT_FOUND"), { code: "NOT_FOUND" });
-    return { path, ref, sha: head, content, encoding: "utf-8" };
+    // Mimic GitHub Contents API: `sha` is the blob object id, never the commit.
+    const blobSha = sha(`blob ${Buffer.byteLength(content, "utf8")}\0${content}`);
+    return { path, ref, sha: blobSha, content, encoding: "utf-8" };
+  }
+
+  async listRefs(pilotId: string, fullName: string, refPrefix?: string): Promise<RefInfo[]> {
+    ScriptedFaultRegistry.assertOk(pilotId, fullName);
+    const s = repoStore(pilotId, fullName);
+    const prefix = (refPrefix ?? "").replace(/^refs\/heads\//, "").toLowerCase();
+    const out: RefInfo[] = Object.entries(s.branches).map(([name, branchSha]) => ({
+      name,
+      sha: branchSha,
+    }));
+    if (!prefix) return out;
+    return out.filter((r) => r.name.toLowerCase().includes(prefix));
   }

   async createBranch(

```

### `projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md`

```diff
diff --git a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
index 3ce3d1b9..276b67fc 100644
--- a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
+++ b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
@@ -515,3 +515,21 @@ GO Morris CRITICAL ENVIRONMENT DELIVERY — adaptation App DEV/RECETTE ; **aucun
 | USER E2E / RECETTE navigateur | NOT RUN | Morris après bascule 3200 |

 Verdict cycle : **ML4 RECETTE ENVIRONMENT — LANE-SCOPED GITHUB APP IDENTITY — LOCALLY COMMITTED CANDIDATE (voir delivery-history)**.
+
+## 25. ML4-REC-08 / REC-07 — Chat-first D4 + provenance Git (2026-11-09)
+
+Macro-correctif local sur candidat `974b0030` → branche `fix/next-ml4-chat-first-d4-provenance-20261109`. **Aucun** push Product / PR / redeploy RECETTE dans ce cycle.
+
+| Item | Statut | Note |
+|---|---|---|
+| ML4-REC-08 CREATE | CORRIGÉ (DET) | Intention explicite → `savePreparationDocument` ; ACK applicatif appendé au message assistant (source de vérité ≠ narration Nora) |
+| ML4-REC-08 REVISE | CORRIGÉ (DET) | Intention révision → `reviseDocument` existant ; même `documentId` ; merge sectionnel borné ; corrélation `docrev:…` |
+| Restitution | CORRIGÉ (DET) | Bloc « Résultat applicatif D4 » après effet confirmé ; pas d'affirmation d'ID/version non observés |
+| ML4-REC-07 provenance | CORRIGÉ (DET) | `blobSha` ≠ `commitSha` ; `permalink` uniquement si `commitShaVerified` ; lecture pinnée au commit résolu |
+| `listGitRefs` | CORRIGÉ (DET) | Refs fournisseur bornées (pas seulement `main`) ; aucune ref inventée |
+| ML4-REC-03 | OPEN / HORS | Pas de cause commune démontrée avec capitalisation points ouverts — non modifié |
+| REC-04/05/06 | NON-RÉGRESSION | Aucune réécriture OAuth / politique cognitive / preuve LIVE inventée |
+| Tests | DET unit + PG | `document-act`, `git-file-provenance`, `ml4-chat-first-d4-provenance.pg` |
+| USER / RECETTE | NOT RUN | Nouveau build + GO Morris requis |
+
+Verdict cycle : **ML4 CHAT-FIRST D4 + GIT PROVENANCE — LOCALLY IMPLEMENTED WITH VERIFIED DEV COVERAGE — READY FOR REVIEW — PRODUCT PUSH / RECETTE REDEPLOY NOT AUTHORIZED**.

```

### `projects/sfia-studio-next/construction/integration-git/specification-technique.md`

```diff
diff --git a/projects/sfia-studio-next/construction/integration-git/specification-technique.md b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
index 37f72bf4..a87a81de 100644
--- a/projects/sfia-studio-next/construction/integration-git/specification-technique.md
+++ b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
@@ -1,9 +1,11 @@
 # R5 — Spécification technique candidate : collaboration Git et intégrations

-> **AS-IMPLEMENTED LOCAL CANDIDATE (2026-11-09)** — `feat/next-git-collaboration-20261108` parent `79b10052…` + correctif intégrité local (push Product NON AUTORISÉ).
-> Domaines : D9/D7/D8 ; migrations `008`–`012` (aucune migration structurante ce cycle).
+> **AS-IMPLEMENTED LOCAL CANDIDATE (2026-11-09)** — base `974b0030…` + macro-correctif chat-first D4 / provenance Git sur `fix/next-ml4-chat-first-d4-provenance-20261109` (push Product NON AUTORISÉ).
+> Domaines : D3/D4/D9 ; migrations `008`–`012` (aucune migration structurante ce cycle).
+> **ML4-REC-08** : création/révision D4 conversationnelle via `savePreparationDocument` / `reviseDocument` + ACK applicatif corrélé (pas de second moteur Nora).
+> **ML4-REC-07** : provenance lecture Git distingue `blobSha` / `commitSha` (+ `permalink` seulement si commit vérifié) ; `listGitRefs` au-delà de `main`.
 > **R1-A / R1-B** refresh lifecycle clos ; **R2** CONFLICT callback accepté.
-> **Niveaux de preuve courants :** OAuth READ REAL PROVEN · Git documentary REAL bounded PROVEN (commit+PR #18 OPEN, mono-repo sandbox) · Intégrité D7/D8 DETERMINISTIC CORRECTIVE · MULTI-REPO REAL NOT PROVEN · USER E2E RECETTE NOT RUN · Merge REAL NOT PROVEN · Product NOT INTEGRATED.
+> **Niveaux de preuve courants :** OAuth READ REAL PROVEN · Git documentary REAL bounded PROVEN (commit+PR #18 OPEN, mono-repo sandbox) · Intégrité D7/D8 DETERMINISTIC CORRECTIVE · Chat-first D4 / provenance DET DEV PROVEN · MULTI-REPO REAL NOT PROVEN · USER E2E RECETTE NOT RUN · Merge REAL NOT PROVEN · Product NOT INTEGRATED.
 > Mutations REAL **bornées documentary** si et seulement si `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` (aliases refusés ; merge HARD-BLOCKED). Flag ≠ autorité D6.
 > Séquence publication nominale **seule** autorisée : `CREATE_BRANCH → PUBLISH_FILE → OPEN_PR` (`publication-steps.ts`). Aucun COMPLETED / D8 sans preuve fichier + commitSha ≠ baseSha + PR distante.
 > Provenance d'effet : `plan.effectProviderMode` figé à prepare ; historique sans champ → UNKNOWN ; divergence live → REQUIRES_REQUALIFICATION.

```

## 7. Tests et preuves

### Exécutés (DEV)

| Suite | Résultat |
|---|---|
| `npx tsc --noEmit` | PASS |
| `npm run lint` | PASS (warnings préexistants hors scope) |
| `npm run build` | PASS |
| `vitest run tests/unit` | **220/220 PASS** |
| `vitest` `document-act` + `git-file-provenance` | 13 PASS |
| `vitest` `ml4-chat-first-d4-provenance.pg` | **5/5 PASS** |
| `vitest` `ml2-knowledge-documents.pg` | **6/6 PASS** (non-régression create intent) |
| `git diff --check` (commit) | PASS |

### Couverture scénarios contrat

| Scénario | Preuve |
|---|---|
| A CREATE conversationnelle + ACK | DET PG |
| A-neg chatter sans doc | DET PG |
| B REVISE même documentId v2 + scope section | DET PG |
| C BASE_STALE + idempotence | DET PG |
| D blob≠commit, candidate ref, permalink | DET SCRIPTED PG |
| LIVE Nora / REAL GitHub read | **NOT RUN** ce cycle |
| Browser E2E / USER RECETTE | **NOT RUN** |
| REC-04 OAuth | non réécrit ; NOT RE-PROVEN |
| REC-05 TEST_BOUNDARY | inchangé ; fixture tests DEV |
| REC-06 obs attempts | inchangé ; NOT RE-PROVEN LIVE |

**DETERMINISTIC PROVEN ≠ READY FOR REAL / ≠ RECETTE PASS.**

## 8. Anomalies

| ID | Statut |
|---|---|
| ML4-REC-08 | **CORRIGÉ localement** (DET) — USER RECETTE requise sur nouveau build |
| ML4-REC-07 | **CORRIGÉ localement** (DET) |
| ML4-REC-03 | **OPEN** — hors cycle |
| ML4-REC-04/05/06 | OPEN / non-régression ciblée ; pas de claim PASS |
| ML4-REC-01/02 | hors construction (mandat) |

## 9. ENV-01 / versioning / Fake-Real

- ENV-01 : respecté — DEV only ; RECETTE non mutée.
- Versioning : PATCH candidate ; **NO RELEASE**.
- Fake/Real : SCRIPTED + PG DEV pour D3/D4/D9 lecture ; aucune mutation GitHub REAL ; LIVE Nora non revendiqué.

## 10. Risques / dettes / exit

1. ACK appendé post-effet — si ownership lost avant commit message, reconstitution DB reste la voie (comportement existant).
2. Qualification intention = heuristique lexicale bornée (pas NLP) — faux négatifs possibles sur formulations rares → exit : enrichir patterns sous tests.
3. Merge sectionnel dépend de titres ATX — documents sans `##` : revise plein document si pas de sectionHint.
4. Permalien REAL non rejoué ce cycle (SCRIPTED only) → exit : smoke REAL read en DEV contrôlé sous GO.
5. Nouveau candidat non déployé RECETTE → exit : gate Morris build+ENV.

## 11. STOP / décisions Morris encore requises

- Push branche projet / PR / merge : **GO NON ACQUIS**
- Redeploy RECETTE nouveau build : **GO NON ACQUIS**
- USER RECETTE R06/R04 re-run : **attendu Morris**
- Aucun STOP technique bloquant rencontré pendant la construction.

## 12. Verdict

**READY FOR REVIEW — MACRO-CORRECTIF IMPLEMENTED WITH VERIFIED LOCAL COVERAGE.**

Réserves explicites : USER/RECETTE NOT RUN ; LIVE/REAL read NOT RE-PROVEN ce cycle ; REC-03 OPEN.

## 13. Instruction ChatGPT (obligatoire)

Avant revue Morris, lire sur Git :
- branche `sfia/review-handoff`
- fichier `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier cycle, profil, branche, HEAD/base `f1b49e20a18e824cc636cc3a1e57bb0ec416e4de` / `974b0030a94469bef05496151792e8c35a9a83e9`, contenus/diffs, tests, risques, SHA handoff distant. Produire synthèse critique globale. Aucun résultat technique ≠ décision Morris.

---
*Fin Review Pack FULL — cycle macro-correctif 2026-11-09 — HEAD `f1b49e20a18e824cc636cc3a1e57bb0ec416e4de`*

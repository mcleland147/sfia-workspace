/**
 * ML2 C1–C5 behavioral guarantees — exercises services, not source greps.
 */
import { rmSync } from "node:fs";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import {
  contentFingerprint,
  derivedIndexRoot,
  makeIndexRef,
  markSourceLifecycle,
  writeDerivedIndex,
  type DerivedIndexEntry,
} from "@/domains/knowledge/derived-embedding-index";
import {
  embedQueryText,
  hybridSearchProjectKnowledge,
} from "@/domains/knowledge/derived-embedding-service";
import { listProjectKnowledge } from "@/domains/knowledge/journal";
import * as usageAccounting from "@/domains/conversation/usage-accounting";

vi.mock("@/domains/knowledge/journal", async (importOriginal) => {
  const actual =
    await importOriginal<typeof import("@/domains/knowledge/journal")>();
  return {
    ...actual,
    listProjectKnowledge: vi.fn(),
  };
});

const PROJECT = "proj_ml2_behavioral";
const PILOT = "pilot_ml2";
const PREP = "prep_ml2";
const SUBJ = "subj-owner";
const ACQ = "acq-fact-1";
const OP = "op-open-1";
const REVOKED = "acq-revoked";
const STALE = "acq-stale-fp";
const BAD_REF = "acq-bad-ref";

const mockList = vi.mocked(listProjectKnowledge);

function acquisText(statement: string, kind = "FACT") {
  return `${kind}: ${statement}`;
}

function bundleFrom(overrides?: {
  acquisText?: Record<string, string>;
  dropAcquis?: string[];
}) {
  const acquisText = overrides?.acquisText ?? {};
  const drop = new Set(overrides?.dropAcquis ?? []);
  const acquis = [
    {
      id: ACQ,
      subjectId: SUBJ,
      kind: "FACT",
      statement: acquisText[ACQ] ?? "capacity twelve units",
      status: "CURRENT",
    },
    {
      id: REVOKED,
      subjectId: SUBJ,
      kind: "FACT",
      statement: "revoked fact",
      status: "SUPERSEDED",
    },
    {
      id: STALE,
      subjectId: SUBJ,
      kind: "FACT",
      statement: acquisText[STALE] ?? "stale before edit",
      status: "CURRENT",
    },
  ].filter((a) => !drop.has(a.id));

  return {
    preparationIds: [PREP],
    subjects: [
      {
        id: SUBJ,
        title: "Capacity planning",
        status: "ACTIVE",
        parentSubjectId: null,
      },
    ],
    acquis,
    openPoints: [
      {
        id: OP,
        subjectId: SUBJ,
        statement: "open question on capacity",
        status: "OPEN",
      },
    ],
    summariesBySubjectId: {},
  };
}

function indexEntry(
  sourceId: string,
  text: string,
  patch?: Partial<DerivedIndexEntry>,
): DerivedIndexEntry {
  const fp = contentFingerprint(text);
  return {
    sourceId,
    sourceKind: patch?.sourceKind ?? "acquis",
    projectId: PROJECT,
    preparationId: PREP,
    contentFingerprint: fp,
    model: "text-embedding-3-small",
    dims: 3,
    revoked: patch?.revoked ?? false,
    deleted: patch?.deleted ?? false,
    versionLabel: patch?.versionLabel ?? "CURRENT",
    indexRef:
      patch?.indexRef ??
      makeIndexRef({ projectId: PROJECT, sourceId, contentFingerprint: fp }),
    updatedAt: new Date().toISOString(),
    text,
  };
}

beforeEach(() => {
  process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";
  process.env.SFIA_DERIVED_EMBEDDING_BACKEND = "file";
  mockList.mockReset();
});

afterEach(() => {
  try {
    rmSync(derivedIndexRoot(PROJECT), { recursive: true, force: true });
  } catch {
    /* ignore */
  }
  delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
  delete process.env.SFIA_DERIVED_EMBEDDING_BACKEND;
  vi.restoreAllMocks();
});

describe("ml2 hybrid behavioral guarantees (C1–C5)", () => {
  it("C1: non-admissible, revoked, bad indexRef, and stale fingerprint never mobilize", async () => {
    const liveStatement = "capacity twelve units";
    const liveAcqText = acquisText(liveStatement);
    const staleStatement = "stale before edit";
    const staleText = acquisText(staleStatement);
    const staleEntry = indexEntry(STALE, staleText, {
      indexRef: makeIndexRef({
        projectId: PROJECT,
        sourceId: STALE,
        contentFingerprint: contentFingerprint("orphan fingerprint"),
      }),
    });
    const revokedEntry = indexEntry(REVOKED, acquisText("revoked fact"), {
      revoked: true,
    });
    const noRefEntry = indexEntry(BAD_REF, acquisText("bad ref row"), {
      indexRef: "",
    });
    const foreignEntry = {
      ...indexEntry("foreign-proj-src", "foreign"),
      projectId: "other_project",
    };

    writeDerivedIndex({
      projectId: PROJECT,
      entries: [
        indexEntry(ACQ, liveAcqText),
        staleEntry,
        revokedEntry,
        noRefEntry,
        foreignEntry,
      ],
      vectors: new Map([
        [ACQ, [1, 0, 0]],
        [STALE, [0.9, 0.1, 0]],
        [REVOKED, [0.8, 0.2, 0]],
        [BAD_REF, [0.85, 0.15, 0]],
        ["foreign-proj-src", [0.7, 0.3, 0]],
      ]),
    });

    const b = bundleFrom() as ReturnType<typeof bundleFrom>;
    b.acquis.push({
      id: BAD_REF,
      subjectId: SUBJ,
      kind: "FACT",
      statement: "bad ref row",
      status: "CURRENT",
    });
    mockList.mockResolvedValue(b as never);

    const { hits, rightsRevalidated } = await hybridSearchProjectKnowledge({
      pilotId: PILOT,
      projectId: PROJECT,
      query: "capacity",
      lexical: [],
      queryVector: [1, 0, 0],
      limit: 12,
    });

    expect(rightsRevalidated).toBe(true);
    const ids = hits.map((h) => h.sourceId);
    expect(ids).toContain(ACQ);
    expect(ids).not.toContain(REVOKED);
    expect(ids).not.toContain(STALE);
    expect(ids).not.toContain("foreign-proj-src");
    expect(hits.find((h) => h.sourceId === ACQ)?.indexRef).toMatch(
      /@[a-f0-9]+$/i,
    );
  });

  it("C2: journal-style hybrid preserves subjectId ≠ sourceId for acquis and open points", async () => {
    const acqText = acquisText("capacity twelve units");
    const opText = "open question on capacity";
    writeDerivedIndex({
      projectId: PROJECT,
      entries: [
        indexEntry(ACQ, acqText, { sourceKind: "acquis" }),
        indexEntry(OP, opText, { sourceKind: "open_point", versionLabel: "OPEN" }),
      ],
      vectors: new Map([
        [ACQ, [1, 0, 0]],
        [OP, [0.95, 0.05, 0]],
      ]),
    });
    mockList.mockResolvedValue(bundleFrom() as never);

    const merged = await hybridSearchProjectKnowledge({
      pilotId: PILOT,
      projectId: PROJECT,
      query: "capacity",
      lexical: [],
      queryVector: [1, 0, 0],
      limit: 12,
    });

    const acqHit = merged.hits.find((h) => h.sourceId === ACQ);
    const opHit = merged.hits.find((h) => h.sourceId === OP);
    expect(acqHit?.subjectId).toBe(SUBJ);
    expect(acqHit?.sourceId).toBe(ACQ);
    expect(acqHit?.subjectId).not.toBe(acqHit?.sourceId);
    expect(acqHit?.sourceKind).toBe("acquis");
    expect(opHit?.subjectId).toBe(SUBJ);
    expect(opHit?.openPointId).toBe(OP);
    expect(opHit?.sourceId).toBe(OP);
    expect(opHit?.sourceKind).toBe("open_point");
  });

  it("C3: provided queryVector skips embed client and FinOps observation", async () => {
    writeDerivedIndex({
      projectId: PROJECT,
      entries: [indexEntry(ACQ, acquisText("capacity twelve units"))],
      vectors: new Map([[ACQ, [1, 0, 0]]]),
    });
    mockList.mockResolvedValue(bundleFrom() as never);

    const recordSpy = vi
      .spyOn(usageAccounting, "recordProviderUsageObservation")
      .mockResolvedValue(undefined as never);

    const badClient = {
      embeddings: {
        create: () => Promise.reject(new Error("must not embed")),
      },
    };

    const out = await hybridSearchProjectKnowledge({
      pilotId: PILOT,
      projectId: PROJECT,
      query: "capacity",
      lexical: [],
      queryVector: [1, 0, 0],
      client: badClient,
    });

    expect(out.derivedUsed).toBe(true);
    expect(recordSpy).not.toHaveBeenCalled();
    expect(out.hits.some((h) => h.sourceId === ACQ)).toBe(true);
  });

  it("C3b: identical content two emissions record two distinct attempts when recorded", async () => {
    const recordSpy = vi
      .spyOn(usageAccounting, "recordProviderUsageObservation")
      .mockResolvedValue(undefined as never);
    const client = {
      embeddings: {
        create: async () => ({
          data: [{ embedding: [0.1, 0.2, 0.3] }],
          usage: { total_tokens: 4 },
        }),
      },
    };
    const text = "same query text";

    await embedQueryText(text, client, {
      attemptId: "attempt-a",
      projectId: PROJECT,
      ownerPilotId: PILOT,
    });
    await embedQueryText(text, client, {
      attemptId: "attempt-b",
      projectId: PROJECT,
      ownerPilotId: PILOT,
    });

    expect(recordSpy).toHaveBeenCalledTimes(2);
    const keys = recordSpy.mock.calls.map(
      (c) => (c[0] as { idempotencyKey?: string }).idempotencyKey,
    );
    expect(new Set(keys).size).toBe(2);

    await embedQueryText(text, client, {
      recordUsage: false,
      attemptId: "attempt-a",
    });
    expect(recordSpy).toHaveBeenCalledTimes(2);
  });

  it("C4: post-search restitution drops index hit when D4 content changes concurrently", async () => {
    const beforeStatement = "capacity twelve units";
    const beforeText = acquisText(beforeStatement);
    writeDerivedIndex({
      projectId: PROJECT,
      entries: [indexEntry(STALE, beforeText)],
      vectors: new Map([[STALE, [1, 0, 0]]]),
    });

    const afterStatement = "capacity fifteen units";
    mockList
      .mockResolvedValueOnce(
        bundleFrom({ acquisText: { [STALE]: beforeStatement } }) as never,
      )
      .mockResolvedValueOnce(
        bundleFrom({ acquisText: { [STALE]: afterStatement } }) as never,
      );

    const { hits } = await hybridSearchProjectKnowledge({
      pilotId: PILOT,
      projectId: PROJECT,
      query: "capacity",
      lexical: [],
      queryVector: [1, 0, 0],
    });

    expect(hits.map((h) => h.sourceId)).not.toContain(STALE);
  });

  it("C4b: revoke lifecycle removes hit from hybrid restitution", async () => {
    writeDerivedIndex({
      projectId: PROJECT,
      entries: [indexEntry(ACQ, acquisText("capacity twelve units"))],
      vectors: new Map([[ACQ, [1, 0, 0]]]),
    });
    mockList.mockResolvedValue(bundleFrom() as never);

    const before = await hybridSearchProjectKnowledge({
      pilotId: PILOT,
      projectId: PROJECT,
      query: "capacity",
      lexical: [],
      queryVector: [1, 0, 0],
    });
    expect(before.hits.map((h) => h.sourceId)).toContain(ACQ);

    markSourceLifecycle(PROJECT, ACQ, { revoked: true });
    mockList.mockResolvedValue(
      bundleFrom({ dropAcquis: [ACQ] }) as never,
    );

    const after = await hybridSearchProjectKnowledge({
      pilotId: PILOT,
      projectId: PROJECT,
      query: "capacity",
      lexical: [],
      queryVector: [1, 0, 0],
    });
    expect(after.hits.map((h) => h.sourceId)).not.toContain(ACQ);
  });
});
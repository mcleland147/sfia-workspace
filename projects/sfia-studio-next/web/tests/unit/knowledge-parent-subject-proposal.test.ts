import { describe, expect, it } from "vitest";
import { extractKnowledgeProposals } from "@/domains/conversation/semantic-qualification";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";
import {
  orderSubjectCreatesByDependency,
  resolveBatchParentRef,
  type SubjectCreateProposal,
} from "@/domains/knowledge/subject-proposal-batch";

describe("B.2 — parentSubjectId on knowledge proposals", () => {
  it("extracts parentSubjectId from d4.record_knowledge SUBJECT intents", () => {
    const q = {
      status: "QUALIFIED",
      intents: [
        {
          id: "i1",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Sous-sujet planning",
          parameters: {
            knowledgeKind: "SUBJECT",
            knowledgeStatement:
              "Organisation du planning d'intervention et des contraintes horaires.",
            epistemic: "established",
            subjectTitle: "Planning d'intervention",
            parentSubjectId: "subj_parent_abc",
            continuityReason: "approfondissement naturel",
          },
        },
      ],
    } as unknown as NoraTurnQualification;

    const proposals = extractKnowledgeProposals(q);
    expect(proposals).toHaveLength(1);
    expect(proposals[0]?.kind).toBe("SUBJECT");
    expect(proposals[0]?.parentSubjectId).toBe("subj_parent_abc");
    expect(proposals[0]?.subjectTitle).toBe("Planning d'intervention");
  });

  it("orders parent before child when child references parent title", () => {
    const batch: SubjectCreateProposal[] = [
      { intentId: "child", title: "Créneaux terrain", parentRef: "Planning intervention" },
      { intentId: "parent", title: "Planning intervention" },
    ];
    const ordered = orderSubjectCreatesByDependency(batch);
    expect("ordered" in ordered).toBe(true);
    if (!("ordered" in ordered)) return;
    expect(ordered.ordered.map((s) => s.intentId)).toEqual(["parent", "child"]);
  });

  it("orders parent before child when child references parent intent id", () => {
    const batch: SubjectCreateProposal[] = [
      { intentId: "child", title: "Sous-thème", parentRef: "intent-parent" },
      { intentId: "intent-parent", title: "Thème" },
    ];
    const ordered = orderSubjectCreatesByDependency(batch);
    expect("ordered" in ordered).toBe(true);
    if (!("ordered" in ordered)) return;
    expect(ordered.ordered[0]?.intentId).toBe("intent-parent");
  });

  it("rejects self-parent by intent id", () => {
    const batch: SubjectCreateProposal[] = [
      { intentId: "loop", title: "Sujet", parentRef: "loop" },
    ];
    const ordered = orderSubjectCreatesByDependency(batch);
    expect("ordered" in ordered).toBe(false);
    if ("ordered" in ordered) return;
    expect(ordered.reason).toBe("SUBJECT_SELF_PARENT");
  });

  it("rejects batch cycle", () => {
    const batch: SubjectCreateProposal[] = [
      { intentId: "a", title: "A", parentRef: "b" },
      { intentId: "b", title: "B", parentRef: "a" },
    ];
    const ordered = orderSubjectCreatesByDependency(batch);
    expect("ordered" in ordered).toBe(false);
    if ("ordered" in ordered) return;
    expect(ordered.reason).toBe("SUBJECT_BATCH_CYCLE");
  });

  it("resolveBatchParentRef maps intent id to created id", () => {
    const batch: SubjectCreateProposal[] = [
      { intentId: "parent", title: "Parent" },
      { intentId: "child", title: "Child", parentRef: "parent" },
    ];
    const created = new Map([["parent", "subj_parent_1"]]);
    const r = resolveBatchParentRef("parent", {
      self: batch[1]!,
      batch,
      createdByIntentId: created,
    });
    expect(r).toEqual({ kind: "resolved", parentSubjectId: "subj_parent_1" });
  });

  it("resolveBatchParentRef yields lookup_title for unknown title outside batch", () => {
    const batch: SubjectCreateProposal[] = [
      { intentId: "child", title: "Child", parentRef: "Parent existant" },
    ];
    const r = resolveBatchParentRef("Parent existant", {
      self: batch[0]!,
      batch,
      createdByIntentId: new Map(),
    });
    expect(r).toEqual({ kind: "lookup_title", title: "Parent existant" });
  });
});

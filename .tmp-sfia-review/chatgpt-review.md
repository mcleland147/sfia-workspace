# Review Pack FULL — Next ML5 Nora Residual Functional Corrections (A/B/C/D)

**Generated (UTC):** 2026-11-25T00:11:07Z
**Mode:** publish-in-cycle · Review Pack FULL · Critical INC · Cycle 8 / ML5
**Product branch:** `sfia/next-ml5-integrated-delivery-20261123`
**DEV worktree:** `/Users/morris/Projects/sfia-wt-next-ml5-20261123`
**Handoff commit message:** `docs(review-handoff): qualify Next ML5 Nora residual functional corrections`
**Prior handoff:** `3e873596` / blob `8444b10c`
**Product versioning:** NO RELEASE · STABLE NOT AVAILABLE

## 0. Verdict

**NORA COGNITIVE EXPERIENCE — RESIDUAL FUNCTIONAL CORRECTIONS COMPLETE — READY FOR REVIEW**

Statut SFIA: **READY FOR REVIEW** · READY WITH RESERVES.
Réserves: WEB LIVE profondeur = flags + UAT Morris; F2 NOT PROVEN (hors mandat); qualité cognitive LIVE = UAT.
ML5 OPEN. Pas de USER ACCEPTED / OPERATIONAL_VALIDATED / STABLE / RELEASE / ADOPTED.

## 1. Qualification SFIA

| Champ | Valeur |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Scope | projects/sfia-studio-next/ |
| SEF / SFIA | v0.2 / v2.6 |
| Jalon / ML | R5 IN PROGRESS / ML5 OPEN |
| Cycle | 8 Delivery · INC Critical · residual A/B/C/D |

## 2. Git Truth Check (début de cycle)

| Check | Résultat |
|---|---|
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD début | `961ebdbd9361c746a43fa36ea0ee224acb720fc2` |
| Delivery précédent | `d0372b856af17793820817a78aa21739cddbdfd8` |
| Web tree début | `b5b8dc474c3d70f708039ad56798b253a5c1bed0` |
| Tip docs-only vs delivery web | **égal** |
| origin/main | `997897fd…` |
| Staged début | aucun |
| Build DEV | `oLyRjFCDc4Y7JSvbzZkFo` |
| RECETTE | `7f48daa2` / `_ZDI1cWa1hscluvBhaiA4` |

## 3. Sources consultées

Handoff `3e873596` L3–L5; cognitive-conductor/work/adapter; public-web-registry/frontier/authorize/sanitize; document-candidate/service/page; PG proposal-candidate.

## 4. Matrice A/B/C/D

| Tâche | Attendu | Effectif | Chemin | Contrôle | Statut | Preuve | Écart | Blocage |
|---|---|---|---|---|---|---|---|---|
| A1 | Chemin cartographié | OK | run-nora/conductor | review | VERIFIED_TECHNICALLY | code | — | — |
| A2 | Réallocation | scaleSegmentCharBudget | resolvePolicy | vitest | IMPLEMENTED | unit | LIVE UAT | — |
| A3 | Continuation acquis | formatInvestigationContinuationContext | runSegment | vitest | IMPLEMENTED | unit | — | — |
| A4 | Restitution partielle | compose + schema/empty | run-nora/adapter | vitest | IMPLEMENTED | unit | LIVE | — |
| A5 | Discriminants | unit suite | vitest | VERIFIED_TECHNICALLY | unit | LIVE E2E | — |
| B1 | Frontière | authorize path | authorize | VERIFIED_TECHNICALLY | code | — | — |
| B2 | WEB générique | pilot-public-query | registry | IMPLEMENTED | unit | LIVE flags | — |
| B3 | Open/consult | prior open_page + B2 | frontier | ALREADY_SATISFIED+B2 | code | LIVE | — |
| B4 | Généralité | sans hardcode sujet | residual | VERIFIED_TECHNICALLY | unit | — | — |
| C1 | Provenance URL | pilotText only | registry | IMPLEMENTED | unit | — | — |
| C2 | Egress | sanitize+isol. (prior) | sanitize | ALREADY_SATISFIED | prior | barrier doc | — |
| C3 | Destinations | assertPublicHttpsUrl+CGNAT | frontier | IMPLEMENTED+ALREADY | unit | search DNS gap | — |
| C4 | Non fiable | B1 prior | frontier | ALREADY_SATISFIED | prior | — | — |
| C5 | Négatifs | unit | residual | VERIFIED_TECHNICALLY | unit | — | — |
| D1 | Path UAT-15 | cartographié | service/page | VERIFIED_TECHNICALLY | code | — | — |
| D2 | Conserve sans regen | conserve-only | service/page | IMPLEMENTED | PG | — | — |
| D3 | Intégrité | pdoc+D4 | candidate | VERIFIED_TECHNICALLY | PG | — | — |
| D4 | Discriminant | PG test PASS | vitest PG | VERIFIED_TECHNICALLY | PG | — | — |

## 5. Diagnostics

A: acquis non réinjectés; restitution suspend faible; budget segment fixe.
B: catalogue ≠ généralité.
C: haystack URL leak; host filter incomplet.
D: conserve = full Nora inutile.

## 6. Hypothèses

WEB LIVE flags; search DNS pin KNOWN GAP; F2 hors mandat.

## 7. Git Review Index

investigation-continuation.ts (new); public-web-registry.ts; public-web-search-frontier.ts; run-nora-cognitive-turn.ts; nora-adapter.ts; document-candidate.ts; service.ts; page.tsx; ml5-residual-abcd.test.ts; delivery-history; as-built.

## 8. Fichiers créés

### investigation-continuation.ts
```ts
/**
 * Bounded continuation / partial restitution from durable investigation state.
 * Server-side only — never invents business conclusions.
 */

import type { CognitiveProductionState } from "./cognitive-work";
import type { InvestigationState, InvestigationSourceRef } from "./investigation-state";

const DEFAULT_MAX = 4500;

function formatSourceLine(s: InvestigationSourceRef): string {
  const kind =
    s.kind === "WEB"
      ? "Web"
      : s.kind === "GIT"
        ? "Git"
        : s.kind === "D4"
          ? "Document"
          : s.kind;
  const title = s.title?.trim() || s.ref || "(sans titre)";
  const note = s.notes?.trim() ? ` — ${s.notes.trim().slice(0, 220)}` : "";
  return `• ${kind} · ${s.coverage} — ${title}${note}`;
}

/**
 * Compact acquis block for the next conductor segment.
 * Prefer CONSULTED/VERIFIED/PARTIAL; include answered determinant questions.
 */
export function formatInvestigationContinuationContext(
  state: InvestigationState,
  opts?: { maxChars?: number },
): string {
  const maxChars = opts?.maxChars ?? DEFAULT_MAX;
  const lines: string[] = ["[Acquis du travail cognitif — réutiliser, ne pas tout relire]"];

  const consulted = state.sources.filter(
    (s) =>
      s.coverage === "CONSULTED" ||
      s.coverage === "VERIFIED" ||
      s.coverage === "PARTIAL",
  );
  const discovered = state.sources.filter((s) => s.coverage === "DISCOVERED");

  if (consulted.length > 0) {
    lines.push("Sources consultées:");
    for (const s of consulted.slice(-8)) lines.push(formatSourceLine(s));
  }
  if (discovered.length > 0) {
    lines.push("Sources découvertes (non ouvertes):");
    for (const s of discovered.slice(-4)) lines.push(formatSourceLine(s));
  }

  const answered = state.questions.filter(
    (q) => q.status === "ANSWERED" && (q.answerSummary?.trim() || "").length > 0,
  );
  if (answered.length > 0) {
    lines.push("Acquis établis:");
    for (const q of answered.slice(-6)) {
      lines.push(`• ${q.text.slice(0, 120)} → ${(q.answerSummary || "").slice(0, 240)}`);
    }
  }

  if (state.contradictions.length > 0) {
    lines.push("Contradictions:");
    for (const c of state.contradictions.slice(-3)) {
      lines.push(`• ${c.a} ↔ ${c.b}: ${c.detail.slice(0, 160)}`);
    }
  }

  if (state.remainingWork.length > 0) {
    lines.push(`Travail restant: ${state.remainingWork.slice(0, 6).join("; ")}`);
  }

  let out = lines.join("\n");
  if (out.length > maxChars) {
    out = `${out.slice(0, maxChars - 24)}\n…[acquis tronqués]`;
  }
  return out;
}

/**
 * Honest partial restitution when the conductor suspends or provider fails.
 * Distinguishes consulted vs discovered; never invents conclusions.
 */
export function composeInvestigationPartialRestitution(input: {
  state: InvestigationState;
  production?: CognitiveProductionState | null;
  suspendReason?: string | null;
  sourceFallback?: InvestigationSourceRef[];
}): string {
  const state = input.state;
  const sources =
    state.sources.length > 0 ? state.sources : (input.sourceFallback ?? []);
  const consulted = sources.filter(
    (s) =>
      s.coverage === "CONSULTED" ||
      s.coverage === "VERIFIED" ||
      s.coverage === "PARTIAL",
  );
  const discovered = sources.filter((s) => s.coverage === "DISCOVERED");
  const answered = state.questions.filter(
    (q) => q.status === "ANSWERED" && (q.answerSummary?.trim() || "").length > 0,
  );

  const lines: string[] = [
    "J’ai avancé sur ce travail, mais je n’ai pas pu livrer une restitution complète et fiable sur ce tour.",
  ];
  if (input.suspendReason) {
    lines.push(`Suspension: ${input.suspendReason}.`);
  }

  if (answered.length > 0) {
    lines.push("Acquis métier consolidés:");
    for (const q of answered.slice(-6)) {
      lines.push(`• ${q.text.slice(0, 140)} → ${(q.answerSummary || "").slice(0, 280)}`);
    }
  } else if (
    input.production?.kind === "DOCUMENT" &&
    input.production.contentMarkdown?.trim()
  ) {
    const excerpt = input.production.contentMarkdown.trim().slice(0, 600);
    lines.push(
      "Production documentaire amorcée (extrait non finalisé):",
      excerpt,
      input.production.contentMarkdown.trim().length > 600 ? "…" : "",
    );
  } else {
    lines.push(
      "Aucune conclusion métier fiable n’a été consolidée dans l’état d’investigation.",
    );
  }

  if (consulted.length > 0) {
    lines.push("Lectures effectuées:");
    for (const s of consulted.slice(-6)) lines.push(formatSourceLine(s));
  }
  if (discovered.length > 0) {
    lines.push("Sources découvertes non ouvertes:");
    for (const s of discovered.slice(-4)) lines.push(formatSourceLine(s));
  }
  if (state.remainingWork.length > 0) {
    lines.push(`Travail restant: ${state.remainingWork.slice(0, 5).join("; ")}`);
  }
  lines.push(
    "Votre message est conservé. Vous pouvez me demander de reprendre — aucune relance automatique.",
  );
  return lines.filter(Boolean).join("\n");
}

/**
 * Scale per-segment D4 char budget with remaining global token headroom.
 * Does not change the 200k / 24 ceilings — only local tool share.
 */
export function scaleSegmentCharBudget(input: {
  baseChars: number;
  usedTokens: number;
  maxTokens?: number;
}): { chars: number; reasonCode: string } {
  const maxTokens = input.maxTokens ?? 200_000;
  const remaining = Math.max(0, maxTokens - Math.max(0, input.usedTokens));
  const ratio = maxTokens > 0 ? remaining / maxTokens : 1;
  if (ratio >= 0.5) {
    return { chars: input.baseChars, reasonCode: "SEGMENT_BUDGET_FULL" };
  }
  if (ratio >= 0.2) {
    return {
      chars: Math.max(4_000, Math.floor(input.baseChars * 0.55)),
      reasonCode: "SEGMENT_BUDGET_REDUCED",
    };
  }
  return {
    chars: Math.max(2_000, Math.floor(input.baseChars * 0.3)),
    reasonCode: "SEGMENT_BUDGET_MINIMAL_RESTITUTION",
  };
}

```

### ml5-residual-abcd.test.ts
```ts
import { describe, expect, it } from "vitest";
import {
  composePilotPublicSearchQuery,
  extractPilotProvidedPublicUrls,
  resolvePublicWebRegistry,
} from "@/domains/conversation/public-web-registry";
import { assertPublicHttpsUrl } from "@/domains/conversation/public-web-search-frontier";
import {
  composeInvestigationPartialRestitution,
  formatInvestigationContinuationContext,
  scaleSegmentCharBudget,
} from "@/domains/conversation/investigation-continuation";
import { createEmptyInvestigation } from "@/domains/conversation/investigation-state";
import {
  buildConserveOnlyQualification,
  isConserveProposalTransmit,
  DOC_CONSERVE_PROPOSAL,
} from "@/domains/conversation/document-candidate";
import { projectStudioEffects } from "@/domains/conversation/semantic-qualification";

describe("A — investigation continuation / restitution", () => {
  it("includes consulted sources and answered questions in continuation context", () => {
    const state = createEmptyInvestigation("Analyse convergence");
    state.sources = [
      {
        kind: "D4",
        ref: "doc_1",
        title: "Cadrage Pilotage 360",
        coverage: "CONSULTED",
        notes: "Fonctionnalités prévues listées",
      },
      {
        kind: "WEB",
        ref: "https://example.com/x",
        title: "Example",
        coverage: "DISCOVERED",
      },
    ];
    state.questions = [
      {
        id: "q1",
        text: "Écarts de conception ?",
        status: "ANSWERED",
        importance: "DETERMINANT",
        answerSummary: "Trois écarts consolidés sur le parcours sas",
      },
    ];
    const block = formatInvestigationContinuationContext(state);
    expect(block).toMatch(/Cadrage Pilotage 360/);
    expect(block).toMatch(/Trois écarts/);
    expect(block).toMatch(/DISCOVERED/);
  });

  it("honest partial distinguishes no conclusions vs acquis", () => {
    const empty = createEmptyInvestigation("x");
    const t1 = composeInvestigationPartialRestitution({
      state: empty,
      suspendReason: "GLOBAL_TOKEN_BUDGET_EXHAUSTED",
    });
    expect(t1).toMatch(/Aucune conclusion métier fiable/);
    expect(t1).toMatch(/GLOBAL_TOKEN_BUDGET_EXHAUSTED/);

    const rich = createEmptyInvestigation("y");
    rich.questions = [
      {
        id: "q1",
        text: "Objectif ?",
        status: "ANSWERED",
        importance: "DETERMINANT",
        answerSummary: "Comparer cadrage et conception",
      },
    ];
    const t2 = composeInvestigationPartialRestitution({ state: rich });
    expect(t2).toMatch(/Comparer cadrage/);
  });

  it("scales segment char budget without raising global ceilings", () => {
    expect(scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 10_000 }).reasonCode).toBe(
      "SEGMENT_BUDGET_FULL",
    );
    expect(
      scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 120_000 }).chars,
    ).toBeLessThan(40_000);
    expect(
      scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 180_000 }).reasonCode,
    ).toBe("SEGMENT_BUDGET_MINIMAL_RESTITUTION");
  });
});

describe("B — generic public WEB registration", () => {
  it("registers pilot-public-query for a new public subject without catalog hardcoding", () => {
    const r = resolvePublicWebRegistry({
      pilotText:
        "Recherche la documentation officielle du protocole QUIC sur le site de l'IETF",
      haystack: "Recherche la documentation officielle du protocole QUIC sur le site de l'IETF",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.limits).toContain("PUBLIC_RESEARCH_INTENT_DETECTED");
    expect(r.topics["pilot-public-query"] || r.exactQueries.length > 0).toBeTruthy();
    expect(r.limits.some((l) => /PILOT_PUBLIC_QUERY_REGISTERED/.test(l))).toBe(true);
    // Must not require a QUIC-specific catalog entry
    expect(Object.keys(r.topics).every((k) => k !== "quic-hardcoded")).toBe(true);
  });

  it("does not register free-form internal work without research intent", () => {
    const r = resolvePublicWebRegistry({
      pilotText: "corrige le bug de validation CSV interne du sas",
      haystack: "corrige le bug de validation CSV interne du sas",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.topics["pilot-public-query"]).toBeUndefined();
    expect(r.limits).toContain("PUBLIC_WEB_REGISTRY_EMPTY");
  });

  it("composePilotPublicSearchQuery sanitizes confidential cues", () => {
    const bad = composePilotPublicSearchQuery(
      "recherche documentation confidentiel budget interne",
    );
    expect(bad.ok).toBe(false);
  });
});

describe("C — WEB P0 URL provenance", () => {
  it("extracts URLs only via assertPublicHttpsUrl (credentials / private fail)", () => {
    expect(assertPublicHttpsUrl("https://user:pass@example.com/a").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://127.0.0.1/x").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://100.64.1.1/x").ok).toBe(false);
    const urls = extractPilotProvidedPublicUrls(
      "voir https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query et https://user:secret@evil.test/x et https://192.168.1.1/y",
    );
    expect(urls).toEqual([
      "https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query",
    ]);
  });

  it("does not treat URLs from objective/checkpoint haystack as pilot-provided when pilotText is separate", () => {
    const r = resolvePublicWebRegistry({
      pilotText: "Peux-tu comparer ces approches ?",
      haystack:
        "Peux-tu comparer ces approches ?\nhttps://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query\ncheckpoint prior",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
    });
    expect(r.pilotProvidedUrls).toHaveLength(0);
  });
});

describe("D — conserve-only qualification", () => {
  it("projects REVISE documentAct without provider", () => {
    expect(isConserveProposalTransmit(DOC_CONSERVE_PROPOSAL)).toBe(true);
    const q = buildConserveOnlyQualification({ documentId: "doc_abc" });
    const proj = projectStudioEffects(q);
    expect(proj.documentAct.kind).toBe("REVISE");
  });
});

```

## 9. Diffs utiles
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 09f490f4..e753320b 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,24 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-25-ML5-NORA-RESIDUAL-ABCD
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-25 (Europe/Paris) |
+| Macro-lot | ML5 — Nora residual functional corrections (A/B/C/D) |
+| Type | INC Critical · ciblé · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| Parent HEAD | `961ebdbd9361c746a43fa36ea0ee224acb720fc2` |
+| Candidate SHA | `9672ec8723939a1d2bc5cf7c5f43696420ace6a5` |
+| Candidate tree | `98ec6199a66618fe507e41d1684e2998b0c25228` |
+| Web tree | `24d6fde7114eb0b28741c0135645917b97dc0803` |
+| Build DEV | `oLyRjFCDc4Y7JSvbzZkFo` |
+| RECETTE | **inchangé** `7f48daa2` / `_ZDI1cWa1hscluvBhaiA4` |
+| Contenu | A continuation/restitution/scale; B pilot-public-query générique; C URL pilot-only + assertPublicHttpsUrl; D conserve-only sans regen |
+| Push projet | **NONE** |
+| Verdict | **RESIDUAL FUNCTIONAL CORRECTIONS COMPLETE — READY FOR REVIEW** |
+
 ## delivery_id: DELIV-2026-11-25-ML5-NORA-FUNCTIONAL-COMPLETION

 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md b/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
index ede7f502..eb5cf156 100644
--- a/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
+++ b/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
@@ -152,3 +152,15 @@ Conformité globale : **0 VÉRIFIÉ** — preuves BROWSER/F2/LIVE/REAL absentes.
 | Docs | viewer candidate forcé; prepare this-turn only (UAT-30) |
 | Preuves | vitest 21 PASS; build OK; F2 NOT PROVEN; LIVE UAT Morris |

+## Residual A/B/C/D — Nora functional corrections (2026-11-25)
+
+| Champ | Valeur |
+|---|---|
+| Build | `oLyRjFCDc4Y7JSvbzZkFo` |
+| A | continuation acquis; scale segment chars; partial restitution suspend/schema |
+| B | `pilot-public-query` générique (sans entrée sujet); catalog match strict |
+| C | URLs depuis pilotText only; `assertPublicHttpsUrl`; CGNAT/198.18 fail-closed |
+| D | conserve-only fixture (no provider); UI `conserveProposal`; PG proposal/conserve PASS |
+| Preuves | vitest residual+c24+c15+labels; PG documents-proposal-candidate; WEB LIVE = flags/UAT |
+| RECETTE | inchangée |
+
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 46c56ebc..6ff6aab8 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -2447,6 +2447,17 @@ export default function ProjectPage() {
   }

   function sendChoice(choice: TurnChoice, _messageId: string) {
+    // D — bind conserve flag on focus so server can skip cognitive regen.
+    if (
+      choice.transmitText ===
+        "Conserver comme nouvelle version la proposition documentaire préparée." &&
+      documentFocusRef.current?.pendingCandidateId
+    ) {
+      applyDocumentFocus({
+        ...documentFocusRef.current,
+        conserveProposal: true,
+      });
+    }
     void sendMessage(choice.transmitText, { fromChoice: true });
   }

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-candidate.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-candidate.ts
index 8b0a1113..a75a2f5c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-candidate.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-candidate.ts
@@ -9,6 +9,10 @@ import { conversationTurnCommands, conversations } from "@/db/schema";
 import { newId } from "@/lib/ids";
 import { contentSha256 } from "@/domains/conversation/document-command";
 import { turnClock } from "@/domains/conversation/turn-command";
+import {
+  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+  type NoraTurnQualification,
+} from "@/domains/conversation/semantic-qualification";

 export type PendingDocumentCandidate = {
   id: string;
@@ -55,6 +59,42 @@ export function isConserveProposalTransmit(text: string): boolean {
   return text.replace(/\s+/g, " ").trim() === DOC_CONSERVE_PROPOSAL;
 }

+/**
+ * D — conserve-only qualification: REVISE intent for the focused document
+ * without a new provider investigation. Body authority remains the sealed pdoc.
+ */
+export function buildConserveOnlyQualification(input: {
+  documentId: string;
+  documentTitle?: string | null;
+}): NoraTurnQualification {
+  return {
+    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    status: "QUALIFIED",
+    goal: "Conserver la proposition documentaire déjà inspectée",
+    projectIntention: "",
+    desiredOutcome: "Nouvelle révision documentaire persistée",
+    initialScope: "",
+    proposedProjectName: "",
+    intents: [
+      {
+        id: "conserve-revise-1",
+        mode: "REQUEST_EFFECT",
+        capabilityId: "d4.revise_document",
+        summary: "Conserver la proposition documentaire préparée",
+        dependsOn: [],
+        constraints: [],
+        sourceEvidence: [],
+        parameters: {
+          documentHint: input.documentTitle?.trim() || input.documentId,
+        },
+      },
+    ],
+    clarifications: [],
+    replyDraft:
+      "Je conserve la proposition documentaire que vous avez examinée, sans la régénérer.",
+  };
+}
+
 /**
  * P0-B — bind historical authorization to the sealed candidate.
  * Source-courante proposals pass with null hauth on both sides.
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 17d496ea..16dce4e0 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1236,8 +1236,47 @@ async function runLiveWithTools(
         providerContacted = "YES";
       } else {
         // TV-05: no lexical fallback on invalid structured output.
+        // A4 — when tools already ran, still surface observed acquis (not a bare UNKNOWN).
         qualification = unavailableQualification(validated.reason);
-        content = qualification.replyDraft;
+        const sourcesOnFail = sourceJournal.entries.slice();
+        const consultedFail = sourcesOnFail.filter(
+          (s) =>
+            s.coverage === "CONSULTED" ||
+            s.coverage === "VERIFIED" ||
+            s.coverage === "PARTIAL",
+        );
+        const discoveredFail = sourcesOnFail.filter((s) => s.coverage === "DISCOVERED");
+        if (consultedFail.length > 0 || discoveredFail.length > 0) {
+          const fmt = (s: (typeof sourcesOnFail)[number]) => {
+            const kind =
+              s.kind === "WEB"
+                ? "Web"
+                : s.kind === "GIT"
+                  ? "Git"
+                  : s.kind === "D4"
+                    ? "Document"
+                    : s.kind;
+            return `• ${kind} · ${s.coverage}${s.title ? ` — ${s.title}` : s.ref ? ` — ${s.ref}` : ""}`;
+          };
+          content = [
+            "J’ai avancé sur ce travail, mais la sortie structurée n’a pas pu être validée.",
+            consultedFail.length
+              ? ["Lectures effectuées :", ...consultedFail.slice(-6).map(fmt)].join("\n")
+              : null,
+            discoveredFail.length
+              ? [
+                  "Sources découvertes non ouvertes :",
+                  ...discoveredFail.slice(-4).map(fmt),
+                ].join("\n")
+              : null,
+            "Aucune conclusion métier n’est affirmée au-delà de ces acquis observés.",
+            "Votre message est conservé. Vous pouvez me demander de reprendre — aucune relance automatique.",
+          ]
+            .filter(Boolean)
+            .join("\n");
+        } else {
+          content = qualification.replyDraft;
+        }
         streamingNotes = `${streamingNotes}|QUALIFICATION_${validated.reason}`;
       }

@@ -1390,6 +1429,46 @@ async function runLiveWithTools(
   const d4CharsReturned = policy.budgets.maxD4CharsReturned - initialBudget.remainingChars;

   if (!content || qualification.status === "UNAVAILABLE") {
+    const sourcesEmpty = sourceJournal.entries.slice();
+    const consultedEmpty = sourcesEmpty.filter(
+      (s) =>
+        s.coverage === "CONSULTED" ||
+        s.coverage === "VERIFIED" ||
+        s.coverage === "PARTIAL",
+    );
+    const discoveredEmpty = sourcesEmpty.filter((s) => s.coverage === "DISCOVERED");
+    let emptyContent = content;
+    if (
+      (!emptyContent || qualification.status === "UNAVAILABLE") &&
+      (consultedEmpty.length > 0 || discoveredEmpty.length > 0)
+    ) {
+      const fmt = (s: (typeof sourcesEmpty)[number]) => {
+        const kind =
+          s.kind === "WEB"
+            ? "Web"
+            : s.kind === "GIT"
+              ? "Git"
+              : s.kind === "D4"
+                ? "Document"
+                : s.kind;
+        return `• ${kind} · ${s.coverage}${s.title ? ` — ${s.title}` : s.ref ? ` — ${s.ref}` : ""}`;
+      };
+      emptyContent = [
+        "Réponse structurée indisponible — acquis observés uniquement.",
+        consultedEmpty.length
+          ? ["Lectures effectuées :", ...consultedEmpty.slice(-6).map(fmt)].join("\n")
+          : null,
+        discoveredEmpty.length
+          ? [
+              "Sources découvertes non ouvertes :",
+              ...discoveredEmpty.slice(-4).map(fmt),
+            ].join("\n")
+          : null,
+        "Aucun effet métier inventé. Votre message est conservé.",
+      ]
+        .filter(Boolean)
+        .join("\n");
+    }
     return {
       generationId,
       mode: "openai-agents-sdk-live",
@@ -1399,7 +1478,7 @@ async function runLiveWithTools(
       streamingDelivered,
       streamingNotes,
       content:
-        content ||
+        emptyContent ||
         "Réponse Agents SDK vide ou qualification indisponible — état UNKNOWN, aucun effet métier inventé.",
       policy,
       modelRequested: policy.modelRequested,
@@ -1409,7 +1488,7 @@ async function runLiveWithTools(
       attempts,
       toolCallsObserved,
       d4CharsReturned,
-      observedToolSources: sourceJournal.entries.slice(),
+      observedToolSources: sourcesEmpty,
       usage: providerUsage,
       qualification:
         qualification.status === "UNAVAILABLE"
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
index 315a3607..6f61f17a 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
@@ -6,18 +6,24 @@
  * 2. Preparation / project explicit exact-query authorizations (when present).
  * 3. A DEV catalog of known-public topic templates (env), matched against
  *    the Pilote message / objective — never private markers.
+ * 4. A generic pilot-public query composed from *this-turn* Pilote text when
+ *    public-research intent is detected (REGISTERED_PUBLIC_COMPOSITION /
+ *    EXPLICIT_AUTHORIZED_EXACT) — no topic-specific hardcoding required.
  *
  * Tests must not inject registry entries solely to force a PASS; they may
  * exercise the catalog/matching path with representative public topics.
  */

+import { assertPublicHttpsUrl } from "./public-web-search-frontier";
+import { sanitizePublicWebQuery } from "./web-search-sanitize";
+
 export type PublicWebRegistry = {
   topics: Record<string, string>;
   exactQueries: string[];
   facts: string[];
   limits: string[];
   /**
-   * Public https URLs literally supplied by the Pilote in this turn's haystack.
+   * Public https URLs literally supplied by the Pilote in this-turn pilot text.
    * May seed open_page discovery after URL/DNS public checks — never private hosts.
    */
   pilotProvidedUrls: string[];
@@ -95,31 +101,21 @@ const DEFAULT_DEV_CATALOG: PublicTopicCatalogEntry[] = [
   },
 ];

-/** Extract public https URLs from Pilote text — candidates only; egress still gated. */
-export function extractPilotProvidedPublicUrls(haystack: string): string[] {
+const PILOT_PUBLIC_QUERY_REF = "pilot-public-query";
+
+/**
+ * Extract public https URLs from Pilote-only text.
+ * Authority is NOT created by regex — only candidates for discovery after assertPublicHttpsUrl.
+ */
+export function extractPilotProvidedPublicUrls(pilotText: string): string[] {
   const found: string[] = [];
   const re = /https:\/\/[^\s<>"'\)\]]+/gi;
   let m: RegExpExecArray | null;
-  while ((m = re.exec(haystack)) !== null) {
+  while ((m = re.exec(pilotText)) !== null) {
     const raw = m[0]!.replace(/[.,;:!?)]+$/g, "");
-    try {
-      const u = new URL(raw);
-      if (u.protocol !== "https:") continue;
-      const host = u.hostname.toLowerCase();
-      if (
-        host === "localhost" ||
-        host.endsWith(".local") ||
-        host === "metadata.google.internal" ||
-        /^(10\.|127\.|192\.168\.|172\.(1[6-9]|2\d|3[0-1])\.)/.test(host) ||
-        host === "0.0.0.0" ||
-        host === "::1"
-      ) {
-        continue;
-      }
-      found.push(u.toString());
-    } catch {
-      /* ignore */
-    }
+    const checked = assertPublicHttpsUrl(raw);
+    if (!checked.ok) continue;
+    found.push(checked.url);
   }
   return [...new Set(found)].slice(0, 8);
 }
@@ -128,6 +124,68 @@ function normalize(s: string): string {
   return s.replace(/\s+/g, " ").trim().toLowerCase();
 }

+/**
+ * Detect public-research intent on Pilote utterance (server-side).
+ * Intent ≠ authorization — registration still requires sanitize + provenance modes.
+ */
+export function detectPublicResearchIntent(text: string): boolean {
+  return /\b(recherch|search|vérifi|verify|quelle version|current version|documentation officielle|site officiel|consulter (le |la |l')?(doc|documentation|site)|look up|official (docs?|documentation)|documentation publique|page publique)\b/i.test(
+    text,
+  );
+}
+
+/**
+ * Compose a generic public search query from this-turn Pilote text.
+ * Strips intent boilerplate; never pulls private context haystack.
+ */
+export function composePilotPublicSearchQuery(
+  pilotText: string,
+  privateMarkers: string[] = [],
+): { ok: true; query: string } | { ok: false; reason: string } {
+  let q = (pilotText || "").replace(/\s+/g, " ").trim();
+  if (!q) return { ok: false, reason: "EMPTY_PILOT_TEXT" };
+
+  // Drop literal URLs — open_page path handles them separately.
+  q = q.replace(/https:\/\/[^\s<>"'\)\]]+/gi, " ").replace(/\s+/g, " ").trim();
+
+  q = q
+    .replace(
+      /\b(peux[- ]tu|pouvez[- ]vous|please|merci de|je (te|vous) (demande|prie)|nora[,:]?)\b/gi,
+      " ",
+    )
+    .replace(
+      /\b(rechercher?|search|consulter|look up|vérifier|verify|trouver|find)\b/gi,
+      " ",
+    )
+    .replace(
+      /\b(la |le |les |du |de la |des |une? |the |a |an )?(documentation officielle|documentation publique|site officiel|official docs?|page publique)\b/gi,
+      " ",
+    )
+    .replace(/\s+/g, " ")
+    .trim();
+
+  // Prefer quoted public topic if present.
+  const quoted = /[«"]([^»"]{3,120})[»"]/.exec(pilotText);
+  if (quoted?.[1]?.trim()) {
+    q = quoted[1].trim();
+  }
+
+  if (q.length < 3) return { ok: false, reason: "QUERY_TOO_SHORT_AFTER_STRIP" };
+  if (q.length > 280) q = q.slice(0, 280);
+
+  for (const m of privateMarkers) {
+    if (m.trim().length >= 4 && q.toLowerCase().includes(m.toLowerCase())) {
+      return { ok: false, reason: "PRIVATE_MARKER_IN_PILOT_QUERY" };
+    }
+  }
+
+  const sanitized = sanitizePublicWebQuery(q);
+  if (!sanitized.ok) {
+    return { ok: false, reason: sanitized.blockedReason ?? "SANITIZE_BLOCKED" };
+  }
+  return { ok: true, query: sanitized.query };
+}
+
 /**
  * Parse SFIA_DEV_PUBLIC_WEB_TOPIC_CATALOG JSON when set; else DEFAULT catalog
  * on DEV and RECETTE (known-public templates only — never free search).
@@ -159,8 +217,13 @@ export function loadPublicTopicCatalog(
 }

 /**
- * Merge prior registry with catalog matches against haystack (user + objective).
+ * Merge prior registry with catalog matches + optional generic pilot query.
  * Does not accept free-form Nora proposals as public provenance.
+ *
+ * `pilotText` (this-turn Pilote message) is the only source for:
+ * - pilotProvidedUrls
+ * - pilot-public-query composition
+ * Haystack may include objective/intent for catalog matching only.
  */
 export function resolvePublicWebRegistry(input: {
   priorTopics?: Record<string, string> | null;
@@ -169,12 +232,18 @@ export function resolvePublicWebRegistry(input: {
   /** Explicit exact queries authorized by Pilote/server for this preparation. */
   explicitExactQueries?: string[] | null;
   haystack: string;
+  /**
+   * This-turn Pilote utterance only — never objectives, documents, tool results,
+   * or checkpoints. Defaults to haystack for backward-compatible callers.
+   */
+  pilotText?: string;
   privateMarkers?: string[];
   env?: Record<string, string | undefined>;
 }): PublicWebRegistry {
   const limits: string[] = [];
   const markers = (input.privateMarkers ?? []).filter((m) => m.trim().length >= 4);
   const hay = normalize(input.haystack);
+  const pilotText = (input.pilotText ?? input.haystack).trim();
   const topics: Record<string, string> = {
     ...(input.priorTopics ?? {}),
   };
@@ -190,26 +259,16 @@ export function resolvePublicWebRegistry(input: {
     limits.push("PUBLIC_WEB_CATALOG_EMPTY");
   }

-  // Semantic public-research intent (server-side) — still requires catalog match;
-  // never free-form Nora text as provenance. Nora may identify the need; the
-  // server maps it onto an already-public catalog query.
-  const publicResearchIntent =
-    /\b(recherch|search|vérifi|verify|quelle version|current version|documentation officielle|site officiel|consulter (le |la |l')?(doc|documentation|site)|look up|official (docs?|documentation))\b/i.test(
-      input.haystack,
-    );
+  const publicResearchIntent = detectPublicResearchIntent(pilotText);
   if (publicResearchIntent) {
     limits.push("PUBLIC_RESEARCH_INTENT_DETECTED");
   }

   for (const entry of catalog) {
-    const hit =
-      entry.matchTokens.some((t) => hay.includes(normalize(t))) ||
-      (publicResearchIntent &&
-        entry.matchTokens.some((t) => {
-          // Looser token: single distinctive word from catalog token (≥4 chars).
-          const parts = normalize(t).split(/\s+/).filter((w) => w.length >= 4);
-          return parts.some((w) => hay.includes(w));
-        }));
+    // Catalog registration requires a real topic token match — never a single
+    // generic word like "documentation" via public-research intent alone.
+    // Generic public subjects use pilot-public-query (below).
+    const hit = entry.matchTokens.some((t) => hay.includes(normalize(t)));
     if (!hit) continue;
     const q = entry.query.replace(/\s+/g, " ").trim();
     if (!q) continue;
@@ -223,7 +282,29 @@ export function resolvePublicWebRegistry(input: {
     }
   }

-  const pilotProvidedUrls = extractPilotProvidedPublicUrls(input.haystack);
+  // Generic path — no new hardcoded topic required for a new public subject.
+  // Prefer catalog when it already registered something for this turn; still
+  // allow pilot-public-query when research intent is clear and sanitize passes.
+  if (publicResearchIntent) {
+    const composed = composePilotPublicSearchQuery(pilotText, markers);
+    if (composed.ok) {
+      const alreadySame = Object.values(topics).some(
+        (t) => normalize(t) === normalize(composed.query),
+      );
+      if (!alreadySame && !topics[PILOT_PUBLIC_QUERY_REF]) {
+        topics[PILOT_PUBLIC_QUERY_REF] = composed.query;
+        exact.add(composed.query);
+        limits.push("PILOT_PUBLIC_QUERY_REGISTERED");
+      } else if (alreadySame) {
+        limits.push("PILOT_PUBLIC_QUERY_DEDUPED_CATALOG");
+      }
+    } else {
+      limits.push(`PILOT_PUBLIC_QUERY_SKIPPED:${composed.reason}`);
+    }
+  }
+
+  // C — URLs only from this-turn Pilote text (not objective / prior summaries).
+  const pilotProvidedUrls = extractPilotProvidedPublicUrls(pilotText);
   if (pilotProvidedUrls.length > 0) {
     limits.push(`PILOT_PROVIDED_PUBLIC_URLS:${pilotProvidedUrls.length}`);
   }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
index 2c51ffd3..af18833f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
@@ -127,7 +127,10 @@ export function assertPublicHttpsUrl(
       a === 0 ||
       (a === 172 && b >= 16 && b <= 31) ||
       (a === 192 && b === 168) ||
-      (a === 169 && b === 254)
+      (a === 169 && b === 254) ||
+      // CGNAT / benchmarking ranges — fail closed for egress candidates.
+      (a === 100 && b >= 64 && b <= 127) ||
+      (a === 198 && (b === 18 || b === 19))
     ) {
       return { ok: false, reason: "URL_PRIVATE_IP" };
     }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
index 79e29c5a..282f9627 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
@@ -26,6 +26,11 @@ import {
   type NoraGenerateResult,
 } from "./nora-adapter";
 import { resolvePublicWebRegistry } from "./public-web-registry";
+import {
+  composeInvestigationPartialRestitution,
+  formatInvestigationContinuationContext,
+  scaleSegmentCharBudget,
+} from "./investigation-continuation";
 import {
   SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
   unavailableQualification,
@@ -709,22 +714,40 @@ export async function runNoraCognitiveTurn(
         work.objective ||
         input.userText;
       const hint = work.state.profileHint;
-      const base = buildCognitivePolicy(seed, undefined, { profileHint: hint });
-      if (segmentIndex > 0 && hint === "investigation") {
-        return buildCognitivePolicy(seed, undefined, {
-          profileHint: "investigation",
-          effortHint: "high",
-        });
-      }
-      if (hint === "simple") {
-        return buildCognitivePolicy(seed, undefined, {
-          profileHint: "simple",
-          effortHint: "low",
-        });
+      let base =
+        segmentIndex > 0 && hint === "investigation"
+          ? buildCognitivePolicy(seed, undefined, {
+              profileHint: "investigation",
+              effortHint: "high",
+            })
+          : hint === "simple"
+            ? buildCognitivePolicy(seed, undefined, {
+                profileHint: "simple",
+                effortHint: "low",
+              })
+            : (input.policyOverride ??
+              buildCognitivePolicy(seed, undefined, { profileHint: hint }));
+      // A2 — reallocate per-segment tool chars from remaining global headroom.
+      const used =
+        (work.resources.inputTokens ?? 0) + (work.resources.outputTokens ?? 0);
+      const scaled = scaleSegmentCharBudget({
+        baseChars: base.budgets.maxD4CharsReturned,
+        usedTokens: used,
+      });
+      if (scaled.chars !== base.budgets.maxD4CharsReturned) {
+        base = {
+          ...base,
+          budgets: { ...base.budgets, maxD4CharsReturned: scaled.chars },
+          reasonCodes: [...base.reasonCodes, scaled.reasonCode],
+        };
       }
-      return input.policyOverride ?? base;
+      return base;
     },
     runSegment: async ({ work, segmentIndex, policy }) => {
+      const acquisBlock =
+        segmentIndex === 0
+          ? ""
+          : formatInvestigationContinuationContext(work.state);
       const continuationHint =
         segmentIndex === 0
           ? ""
@@ -749,16 +772,26 @@ export async function runNoraCognitiveTurn(
               work.state.constraints.length
                 ? `Contraintes: ${work.state.constraints.join("; ")}`
                 : null,
+              acquisBlock || null,
             ]
               .filter(Boolean)
               .join("\n");

-      // C24 — feed public WEB registry from prior state + DEV catalog match
-      // (server-side provenance). Nora cannot self-authorize free-form topics.
+      // C24 — feed public WEB registry from prior state + catalog / generic pilot query.
+      // pilotText = this-turn Pilote only (P0: no objective/checkpoint URL authority).
+      const privateMarkers = [
+        input.pilotId,
+        input.preparationId,
+        input.projectId ?? "",
+        input.conversationId ?? "",
+        work.id,
+      ].filter((m) => m.trim().length >= 4);
       const webRegistry = resolvePublicWebRegistry({
         priorTopics: work.state.registeredPublicTopics,
         priorExactQueries: work.state.authorizedExactWebQueries,
         priorFacts: work.state.registeredPublicFacts,
+        pilotText: input.userText,
+        privateMarkers,
         haystack: [
           input.userText,
           work.state.intentSummary ?? "",
@@ -895,9 +928,24 @@ export async function runNoraCognitiveTurn(
     ? "INTERRUPTED"
     : lastReply.status;

+  let content = conductor.replyText || lastReply.content;
+  if (conductor.suspended) {
+    // A4 — restitution from durable acquis, not last provider fragment alone.
+    content = composeInvestigationPartialRestitution({
+      state: {
+        ...conductor.investigation,
+        cognitiveWorkId: conductor.work.id,
+        cognitiveRevision: conductor.work.revision,
+      },
+      production: conductor.production,
+      suspendReason: conductor.suspendReason,
+      sourceFallback: lastReply.observedToolSources,
+    });
+  }
+
   const reply: NoraGenerateResult = {
     ...lastReply,
-    content: conductor.replyText || lastReply.content,
+    content,
     qualification: conductor.qualification ?? lastReply.qualification,
     status: alignedStatus,
   };
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index c1ce3b7c..543e86f1 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -39,6 +39,7 @@ import {
 } from "@/domains/conversation/document-command";
 import {
   DOC_CONSERVE_PROPOSAL,
+  buildConserveOnlyQualification,
   isConserveProposalTransmit,
   isHistoricalSourceChoiceTransmit,
   loadHistoricalSourceAuthorization,
@@ -51,6 +52,7 @@ import {
   type HistoricalSourceAuthorization,
   type PendingDocumentCandidate,
 } from "@/domains/conversation/document-candidate";
+import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
 import {
   bindTurnGenerationId,
   commitTurnTerminal,
@@ -1148,40 +1150,107 @@ export async function postUserMessageAndNora(
       } catch {
         /* reconciliation best-effort */
       }
-      const turn = await runNoraCognitiveTurn({
-        pilotId,
-        preparationId,
-        projectId: ctx.project?.id ?? null,
-        conversationId: reserved.conversationId,
-        turnCommandId: reserved.commandId,
-        forceNewWork: opts?.forceNewCognitiveWork === true,
-        workId: opts?.cognitiveWorkId ?? null,
-        objective: content.slice(0, 2000),
-        userText: content,
-        contextSnippets,
-        knowledgeSnippets: [
-          ...knowledgeForNora.snippets,
-          ...docSnippets,
-          ...publicationOwnerSnippets,
-        ],
-        pilotageSnippets: pilotageCtx.snippets,
-        levelASignals: pilotageCtx.levelASignals,
-        ckiDelivery: pilotageCtx.ckiDelivery,
-        toolScope: {
+      // D2 — conserve of a sealed candidate must not re-run a costly investigation.
+      // Body authority remains the pdoc; this path only supplies REVISE qualification.
+      const conserveFocus = opts?.documentFocus;
+      const conserveOnly =
+        isConserveProposalTransmit(content) &&
+        Boolean(conserveFocus?.pendingCandidateId) &&
+        Boolean(conserveFocus?.documentId);
+      let turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>;
+      if (conserveOnly && conserveFocus?.documentId) {
+        const policy = buildCognitivePolicy(content, undefined, {
+          profileHint: "simple",
+          effortHint: "low",
+        });
+        const qualification = buildConserveOnlyQualification({
+          documentId: conserveFocus.documentId,
+        });
+        turn = {
+          content: qualification.replyDraft,
+          status: "COMPLETE",
+          generationId: `conserve-${reserved.commandId}`,
+          mode: "deterministic-fixture",
+          policy,
+          modelRequested: policy.modelRequested,
+          modelApplied: null,
+          effortRequested: policy.effortRequested,
+          effortApplied: null,
+          attempts: [
+            {
+              attemptId: `conserve-${reserved.commandId}`,
+              kind: "non_stream",
+              outcome: "SUCCESS",
+              notes: "CONSERVE_ONLY_NO_PROVIDER",
+              providerContacted: "NO",
+            },
+          ],
+          toolCallsObserved: 0,
+          d4CharsReturned: 0,
+          observedToolSources: [],
+          qualification,
+          conductor: {
+            workId: "",
+            revision: 0,
+            segmentsRun: 0,
+            resumed: false,
+            suspended: false,
+            suspendReason: null,
+            investigation: {
+              intentSummary: qualification.goal,
+              desiredOutcome: qualification.desiredOutcome,
+              constraints: [],
+              risks: [],
+              profileHint: "simple",
+              questions: [],
+              sources: [],
+              contradictions: [],
+              exclusions: [],
+              remainingWork: [],
+              sufficiency: "SUFFICIENT",
+              contractReady: false,
+              contractReadyBlockedReason: "CONSERVE_ONLY",
+            },
+            production: { kind: "REPLY", status: "COMPLETE", parts: [] },
+          },
+        };
+        cognitiveWorkId = null;
+      } else {
+        turn = await runNoraCognitiveTurn({
           pilotId,
           preparationId,
-          operationId: reserved.operationId,
-          projectId: ctx.project?.id,
-          activityContext: {
-            conversationId: reserved.conversationId,
-            turnCommandId: reserved.commandId,
-            ownerPilotId: pilotId,
-            ownerToken: reserved.ownerToken,
+          projectId: ctx.project?.id ?? null,
+          conversationId: reserved.conversationId,
+          turnCommandId: reserved.commandId,
+          forceNewWork: opts?.forceNewCognitiveWork === true,
+          workId: opts?.cognitiveWorkId ?? null,
+          objective: content.slice(0, 2000),
+          userText: content,
+          contextSnippets,
+          knowledgeSnippets: [
+            ...knowledgeForNora.snippets,
+            ...docSnippets,
+            ...publicationOwnerSnippets,
+          ],
+          pilotageSnippets: pilotageCtx.snippets,
+          levelASignals: pilotageCtx.levelASignals,
+          ckiDelivery: pilotageCtx.ckiDelivery,
+          toolScope: {
+            pilotId,
+            preparationId,
+            operationId: reserved.operationId,
+            projectId: ctx.project?.id,
+            activityContext: {
+              conversationId: reserved.conversationId,
+              turnCommandId: reserved.commandId,
+              ownerPilotId: pilotId,
+              ownerToken: reserved.ownerToken,
+            },
           },
-        },
-      });
+        });
+        cognitiveWorkId = turn.conductor.workId || null;
+      }
       reply = turn;
-      cognitiveWorkId = turn.conductor.workId || null;
       // C20: consolidated cognitive DOCUMENT production is the canonical D4 body
       // when present — reply documentProposal must not compete with it.
       const consolidated = turn.conductor.production;

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/investigation-continuation.ts b/projects/sfia-studio-next/web/src/domains/conversation/investigation-continuation.ts
new file mode 100644
index 00000000..a43f4259
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/domains/conversation/investigation-continuation.ts
@@ -0,0 +1,175 @@
+/**
+ * Bounded continuation / partial restitution from durable investigation state.
+ * Server-side only — never invents business conclusions.
+ */
+
+import type { CognitiveProductionState } from "./cognitive-work";
+import type { InvestigationState, InvestigationSourceRef } from "./investigation-state";
+
+const DEFAULT_MAX = 4500;
+
+function formatSourceLine(s: InvestigationSourceRef): string {
+  const kind =
+    s.kind === "WEB"
+      ? "Web"
+      : s.kind === "GIT"
+        ? "Git"
+        : s.kind === "D4"
+          ? "Document"
+          : s.kind;
+  const title = s.title?.trim() || s.ref || "(sans titre)";
+  const note = s.notes?.trim() ? ` — ${s.notes.trim().slice(0, 220)}` : "";
+  return `• ${kind} · ${s.coverage} — ${title}${note}`;
+}
+
+/**
+ * Compact acquis block for the next conductor segment.
+ * Prefer CONSULTED/VERIFIED/PARTIAL; include answered determinant questions.
+ */
+export function formatInvestigationContinuationContext(
+  state: InvestigationState,
+  opts?: { maxChars?: number },
+): string {
+  const maxChars = opts?.maxChars ?? DEFAULT_MAX;
+  const lines: string[] = ["[Acquis du travail cognitif — réutiliser, ne pas tout relire]"];
+
+  const consulted = state.sources.filter(
+    (s) =>
+      s.coverage === "CONSULTED" ||
+      s.coverage === "VERIFIED" ||
+      s.coverage === "PARTIAL",
+  );
+  const discovered = state.sources.filter((s) => s.coverage === "DISCOVERED");
+
+  if (consulted.length > 0) {
+    lines.push("Sources consultées:");
+    for (const s of consulted.slice(-8)) lines.push(formatSourceLine(s));
+  }
+  if (discovered.length > 0) {
+    lines.push("Sources découvertes (non ouvertes):");
+    for (const s of discovered.slice(-4)) lines.push(formatSourceLine(s));
+  }
+
+  const answered = state.questions.filter(
+    (q) => q.status === "ANSWERED" && (q.answerSummary?.trim() || "").length > 0,
+  );
+  if (answered.length > 0) {
+    lines.push("Acquis établis:");
+    for (const q of answered.slice(-6)) {
+      lines.push(`• ${q.text.slice(0, 120)} → ${(q.answerSummary || "").slice(0, 240)}`);
+    }
+  }
+
+  if (state.contradictions.length > 0) {
+    lines.push("Contradictions:");
+    for (const c of state.contradictions.slice(-3)) {
+      lines.push(`• ${c.a} ↔ ${c.b}: ${c.detail.slice(0, 160)}`);
+    }
+  }
+
+  if (state.remainingWork.length > 0) {
+    lines.push(`Travail restant: ${state.remainingWork.slice(0, 6).join("; ")}`);
+  }
+
+  let out = lines.join("\n");
+  if (out.length > maxChars) {
+    out = `${out.slice(0, maxChars - 24)}\n…[acquis tronqués]`;
+  }
+  return out;
+}
+
+/**
+ * Honest partial restitution when the conductor suspends or provider fails.
+ * Distinguishes consulted vs discovered; never invents conclusions.
+ */
+export function composeInvestigationPartialRestitution(input: {
+  state: InvestigationState;
+  production?: CognitiveProductionState | null;
+  suspendReason?: string | null;
+  sourceFallback?: InvestigationSourceRef[];
+}): string {
+  const state = input.state;
+  const sources =
+    state.sources.length > 0 ? state.sources : (input.sourceFallback ?? []);
+  const consulted = sources.filter(
+    (s) =>
+      s.coverage === "CONSULTED" ||
+      s.coverage === "VERIFIED" ||
+      s.coverage === "PARTIAL",
+  );
+  const discovered = sources.filter((s) => s.coverage === "DISCOVERED");
+  const answered = state.questions.filter(
+    (q) => q.status === "ANSWERED" && (q.answerSummary?.trim() || "").length > 0,
+  );
+
+  const lines: string[] = [
+    "J’ai avancé sur ce travail, mais je n’ai pas pu livrer une restitution complète et fiable sur ce tour.",
+  ];
+  if (input.suspendReason) {
+    lines.push(`Suspension: ${input.suspendReason}.`);
+  }
+
+  if (answered.length > 0) {
+    lines.push("Acquis métier consolidés:");
+    for (const q of answered.slice(-6)) {
+      lines.push(`• ${q.text.slice(0, 140)} → ${(q.answerSummary || "").slice(0, 280)}`);
+    }
+  } else if (
+    input.production?.kind === "DOCUMENT" &&
+    input.production.contentMarkdown?.trim()
+  ) {
+    const excerpt = input.production.contentMarkdown.trim().slice(0, 600);
+    lines.push(
+      "Production documentaire amorcée (extrait non finalisé):",
+      excerpt,
+      input.production.contentMarkdown.trim().length > 600 ? "…" : "",
+    );
+  } else {
+    lines.push(
+      "Aucune conclusion métier fiable n’a été consolidée dans l’état d’investigation.",
+    );
+  }
+
+  if (consulted.length > 0) {
+    lines.push("Lectures effectuées:");
+    for (const s of consulted.slice(-6)) lines.push(formatSourceLine(s));
+  }
+  if (discovered.length > 0) {
+    lines.push("Sources découvertes non ouvertes:");
+    for (const s of discovered.slice(-4)) lines.push(formatSourceLine(s));
+  }
+  if (state.remainingWork.length > 0) {
+    lines.push(`Travail restant: ${state.remainingWork.slice(0, 5).join("; ")}`);
+  }
+  lines.push(
+    "Votre message est conservé. Vous pouvez me demander de reprendre — aucune relance automatique.",
+  );
+  return lines.filter(Boolean).join("\n");
+}
+
+/**
+ * Scale per-segment D4 char budget with remaining global token headroom.
+ * Does not change the 200k / 24 ceilings — only local tool share.
+ */
+export function scaleSegmentCharBudget(input: {
+  baseChars: number;
+  usedTokens: number;
+  maxTokens?: number;
+}): { chars: number; reasonCode: string } {
+  const maxTokens = input.maxTokens ?? 200_000;
+  const remaining = Math.max(0, maxTokens - Math.max(0, input.usedTokens));
+  const ratio = maxTokens > 0 ? remaining / maxTokens : 1;
+  if (ratio >= 0.5) {
+    return { chars: input.baseChars, reasonCode: "SEGMENT_BUDGET_FULL" };
+  }
+  if (ratio >= 0.2) {
+    return {
+      chars: Math.max(4_000, Math.floor(input.baseChars * 0.55)),
+      reasonCode: "SEGMENT_BUDGET_REDUCED",
+    };
+  }
+  return {
+    chars: Math.max(2_000, Math.floor(input.baseChars * 0.3)),
+    reasonCode: "SEGMENT_BUDGET_MINIMAL_RESTITUTION",
+  };
+}

diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-residual-abcd.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-residual-abcd.test.ts
new file mode 100644
index 00000000..3ba883a7
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-residual-abcd.test.ts
@@ -0,0 +1,154 @@
+import { describe, expect, it } from "vitest";
+import {
+  composePilotPublicSearchQuery,
+  extractPilotProvidedPublicUrls,
+  resolvePublicWebRegistry,
+} from "@/domains/conversation/public-web-registry";
+import { assertPublicHttpsUrl } from "@/domains/conversation/public-web-search-frontier";
+import {
+  composeInvestigationPartialRestitution,
+  formatInvestigationContinuationContext,
+  scaleSegmentCharBudget,
+} from "@/domains/conversation/investigation-continuation";
+import { createEmptyInvestigation } from "@/domains/conversation/investigation-state";
+import {
+  buildConserveOnlyQualification,
+  isConserveProposalTransmit,
+  DOC_CONSERVE_PROPOSAL,
+} from "@/domains/conversation/document-candidate";
+import { projectStudioEffects } from "@/domains/conversation/semantic-qualification";
+
+describe("A — investigation continuation / restitution", () => {
+  it("includes consulted sources and answered questions in continuation context", () => {
+    const state = createEmptyInvestigation("Analyse convergence");
+    state.sources = [
+      {
+        kind: "D4",
+        ref: "doc_1",
+        title: "Cadrage Pilotage 360",
+        coverage: "CONSULTED",
+        notes: "Fonctionnalités prévues listées",
+      },
+      {
+        kind: "WEB",
+        ref: "https://example.com/x",
+        title: "Example",
+        coverage: "DISCOVERED",
+      },
+    ];
+    state.questions = [
+      {
+        id: "q1",
+        text: "Écarts de conception ?",
+        status: "ANSWERED",
+        importance: "DETERMINANT",
+        answerSummary: "Trois écarts consolidés sur le parcours sas",
+      },
+    ];
+    const block = formatInvestigationContinuationContext(state);
+    expect(block).toMatch(/Cadrage Pilotage 360/);
+    expect(block).toMatch(/Trois écarts/);
+    expect(block).toMatch(/DISCOVERED/);
+  });
+
+  it("honest partial distinguishes no conclusions vs acquis", () => {
+    const empty = createEmptyInvestigation("x");
+    const t1 = composeInvestigationPartialRestitution({
+      state: empty,
+      suspendReason: "GLOBAL_TOKEN_BUDGET_EXHAUSTED",
+    });
+    expect(t1).toMatch(/Aucune conclusion métier fiable/);
+    expect(t1).toMatch(/GLOBAL_TOKEN_BUDGET_EXHAUSTED/);
+
+    const rich = createEmptyInvestigation("y");
+    rich.questions = [
+      {
+        id: "q1",
+        text: "Objectif ?",
+        status: "ANSWERED",
+        importance: "DETERMINANT",
+        answerSummary: "Comparer cadrage et conception",
+      },
+    ];
+    const t2 = composeInvestigationPartialRestitution({ state: rich });
+    expect(t2).toMatch(/Comparer cadrage/);
+  });
+
+  it("scales segment char budget without raising global ceilings", () => {
+    expect(scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 10_000 }).reasonCode).toBe(
+      "SEGMENT_BUDGET_FULL",
+    );
+    expect(
+      scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 120_000 }).chars,
+    ).toBeLessThan(40_000);
+    expect(
+      scaleSegmentCharBudget({ baseChars: 40_000, usedTokens: 180_000 }).reasonCode,
+    ).toBe("SEGMENT_BUDGET_MINIMAL_RESTITUTION");
+  });
+});
+
+describe("B — generic public WEB registration", () => {
+  it("registers pilot-public-query for a new public subject without catalog hardcoding", () => {
+    const r = resolvePublicWebRegistry({
+      pilotText:
+        "Recherche la documentation officielle du protocole QUIC sur le site de l'IETF",
+      haystack: "Recherche la documentation officielle du protocole QUIC sur le site de l'IETF",
+      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
+    });
+    expect(r.limits).toContain("PUBLIC_RESEARCH_INTENT_DETECTED");
+    expect(r.topics["pilot-public-query"] || r.exactQueries.length > 0).toBeTruthy();
+    expect(r.limits.some((l) => /PILOT_PUBLIC_QUERY_REGISTERED/.test(l))).toBe(true);
+    // Must not require a QUIC-specific catalog entry
+    expect(Object.keys(r.topics).every((k) => k !== "quic-hardcoded")).toBe(true);
+  });
+
+  it("does not register free-form internal work without research intent", () => {
+    const r = resolvePublicWebRegistry({
+      pilotText: "corrige le bug de validation CSV interne du sas",
+      haystack: "corrige le bug de validation CSV interne du sas",
+      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
+    });
+    expect(r.topics["pilot-public-query"]).toBeUndefined();
+    expect(r.limits).toContain("PUBLIC_WEB_REGISTRY_EMPTY");
+  });
+
+  it("composePilotPublicSearchQuery sanitizes confidential cues", () => {
+    const bad = composePilotPublicSearchQuery(
+      "recherche documentation confidentiel budget interne",
+    );
+    expect(bad.ok).toBe(false);
+  });
+});
+
+describe("C — WEB P0 URL provenance", () => {
+  it("extracts URLs only via assertPublicHttpsUrl (credentials / private fail)", () => {
+    expect(assertPublicHttpsUrl("https://user:pass@example.com/a").ok).toBe(false);
+    expect(assertPublicHttpsUrl("https://127.0.0.1/x").ok).toBe(false);
+    expect(assertPublicHttpsUrl("https://100.64.1.1/x").ok).toBe(false);
+    const urls = extractPilotProvidedPublicUrls(
+      "voir https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query et https://user:secret@evil.test/x et https://192.168.1.1/y",
+    );
+    expect(urls).toEqual([
+      "https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query",
+    ]);
+  });
+
+  it("does not treat URLs from objective/checkpoint haystack as pilot-provided when pilotText is separate", () => {
+    const r = resolvePublicWebRegistry({
+      pilotText: "Peux-tu comparer ces approches ?",
+      haystack:
+        "Peux-tu comparer ces approches ?\nhttps://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query\ncheckpoint prior",
+      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
+    });
+    expect(r.pilotProvidedUrls).toHaveLength(0);
+  });
+});
+
+describe("D — conserve-only qualification", () => {
+  it("projects REVISE documentAct without provider", () => {
+    expect(isConserveProposalTransmit(DOC_CONSERVE_PROPOSAL)).toBe(true);
+    const q = buildConserveOnlyQualification({ documentId: "doc_abc" });
+    const proj = projectStudioEffects(q);
+    expect(proj.documentAct.kind).toBe("REVISE");
+  });
+});

```

## 10. Contrôles

vitest residual/c24/c15/labels PASS; PG documents-proposal-candidate PASS; authorize smoke OK; ENV :3100/:5433 vs :3200/:5434.

## 11. Fake/Real

Conducteur unit VERIFIED_TECHNICALLY; WEB SCRIPTED/LIVE gated NOT READY FOR REAL; D4 PG VERIFIED_TECHNICALLY.

## 12. Manifeste candidat

| Champ | Valeur |
|---|---|
| Candidate SHA | `9672ec8723939a1d2bc5cf7c5f43696420ace6a5` |
| Candidate tree | `98ec6199a66618fe507e41d1684e2998b0c25228` |
| Web tree | `24d6fde7114eb0b28741c0135645917b97dc0803` |
| Build DEV | `oLyRjFCDc4Y7JSvbzZkFo` |
| Migrations | aucune |
| RECETTE | inchangée `7f48daa2` / `_ZDI1cWa1hscluvBhaiA4` |

## 13. Couverture

UAT-16/19 A; UAT-17/18 B+C; UAT-15 D PG.

## 14. Réserves

GO RECETTE après revue; WEB LIVE flag-gated.

## 15. Verdict

**NORA COGNITIVE EXPERIENCE — RESIDUAL FUNCTIONAL CORRECTIONS COMPLETE — READY FOR REVIEW**

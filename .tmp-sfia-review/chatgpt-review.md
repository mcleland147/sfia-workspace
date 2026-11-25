# Review Pack FULL — Next ML5 Nora Recette Readiness (T1/T2/T3)

**Generated (UTC):** 2026-11-25T06:40:22Z
**Mode:** publish-in-cycle · Review Pack FULL · Critical INC · Cycle 8 / ML5
**Product branch:** `sfia/next-ml5-integrated-delivery-20261123`
**Handoff message:** `docs(review-handoff): qualify Next ML5 Nora recette readiness`
**Prior handoff:** `42748ce1` / blob `713afa25`
**Product versioning:** NO RELEASE · STABLE NOT AVAILABLE

## 0. Verdict

**NORA COGNITIVE EXPERIENCE — READY FOR RECETTE CUTOVER REVIEW**

READY WITH RESERVES: F2 NOT PROVEN; WEB LIVE flag-gated (search DNS provider-hosted KNOWN GAP; open LIVE Studio-pinned); qualité cognitive LIVE = UAT Morris.
ML5 OPEN. Pas de USER ACCEPTED / OPERATIONAL_VALIDATED / STABLE / RELEASE / ADOPTED.

## 1. Qualification

| Champ | Valeur |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Scope | projects/sfia-studio-next/ |
| SEF/SFIA | v0.2 / v2.6 |
| R5 / ML5 | IN PROGRESS / OPEN |
| Cycle | 8 Delivery · INC Critical · T1/T2/T3 |

## 2. Git Truth Check (début)

| Check | Résultat |
|---|---|
| HEAD | `3a56eb9d38661586dab79d9c999eef078476b5ac` |
| Delivery | `9672ec8723939a1d2bc5cf7c5f43696420ace6a5` |
| Web | `24d6fde7114eb0b28741c0135645917b97dc0803` (= tip) |
| Build rapporté | `oLyRjFCDc4Y7JSvbzZkFo` — **stale vs web tree** (T3 corrected) |
| Staged | aucun |
| RECETTE | `7f48daa2` / `_ZDI1cWa1hscluvBhaiA4` |

## 3. Sources

Handoff 42748ce1 B/C/D; public-web-registry/frontier/authorize; service conserve; ENV-01.

## 4. Matrice T1/T2/T3

| Tâche | Attendu | Effectif | Chemin | Contrôle | Statut | Réserve |
|---|---|---|---|---|---|---|
| T1.1 | Admission sémantique | lexical disabled; proposedPublicQuery + admitNoraProposedPublicQuery → B1 modes | registry + frontier | vitest t1 | IMPLEMENTED | LIVE UAT |
| T1.2 | Pas de fallback haystack | pilotText required; stale pilot-public-query stripped | resolvePublicWebRegistry | vitest | IMPLEMENTED | — |
| T1.3 | Egress effectif | sanitize+markers+leak check; URL not auto-authorized; open needs discovery or pilotExplicitOpen; SEARCH_LIVE DNS gap documented | frontier/egress | vitest+code | VERIFIED_TECHNICALLY | LIVE flags |
| T1.4 | Contrôles ciblés | unit suite T1 | ml5-t1-web-admission | PASS | VERIFIED_TECHNICALLY | — |
| T2.1 | Raccordement | conserveProposal flag + early pdoc path + UI flag | service/page | code | IMPLEMENTED | — |
| T2.2 | Discriminant PG | ml5-conserve-only-nominal.pg | vitest PG | PASS | VERIFIED_TECHNICALLY | — |
| T2.3 | Corrige si besoin | early conserve; text≠authority | service | PG | IMPLEMENTED | — |
| T3.1 | Runtime | was stale oLyRj… | check | VERIFIED | — |
| T3.2 | Build | next build + next start | prUUuYxFrKalrxiMsKoc4 | smoke 307 | VERIFIED_TECHNICALLY | — |
| T3.3 | Manifeste | below | pack | — | IMPLEMENTED | GO Morris |

## 5. Diagnostics

- Lexical detectPublicResearchIntent was unauthorized egress trigger — removed.
- haystack fallback for pilot provenance — removed.
- Transmit-text alone authorized conserve — fixed to require conserveProposal + sealed candidate.
- Build ID stale vs web tree — rebuilt.

## 6. P0 WEB frontier state

| Capacité | État |
|---|---|
| Registry + SCRIPTED search/open | available (flags) |
| LIVE open | Studio DNS pin + no redirect (web-egress-guard) |
| LIVE search | provider-hosted isolated agent; **Studio does not pin provider DNS** — KNOWN GAP; still flag-gated `SFIA_WEB_SEARCH_LIVE` |
| Auto URL open from mention | **blocked** (not auto-authorized) |

Not declaring WEB READY FOR LIVE. Not WEB LIVE BLOCKED for SCRIPTED/dev path.

## 7. Git Review Index

public-web-registry.ts; public-web-search-frontier.ts; nora-adapter.ts; service.ts; page.tsx (prior); ml5-t1-web-admission.test.ts; ml5-conserve-only-nominal.pg.test.ts; residual/c24 tests; delivery-history; as-built.

## 8. Fichiers créés

### `projects/sfia-studio-next/web/tests/unit/ml5-t1-web-admission.test.ts`

```ts
import { describe, expect, it } from "vitest";
import {
  admitNoraProposedPublicQuery,
  composePilotPublicSearchQuery,
  detectPublicResearchIntent,
  extractPilotProvidedPublicUrls,
  resolvePublicWebRegistry,
  PILOT_PUBLIC_QUERY_REF,
} from "@/domains/conversation/public-web-registry";
import { authorizePublicWebQuery } from "@/domains/conversation/web-search-authorize";
import { assertPublicHttpsUrl } from "@/domains/conversation/public-web-search-frontier";

describe("T1.1 — lexical intent does not authorize", () => {
  it("detectPublicResearchIntent no longer grants true (disabled)", () => {
    expect(
      detectPublicResearchIntent(
        "Recherche la documentation officielle de PostgreSQL",
      ),
    ).toBe(false);
  });

  it("composePilotPublicSearchQuery is disabled", () => {
    const r = composePilotPublicSearchQuery(
      "Recherche la documentation officielle HTTP/3",
    );
    expect(r.ok).toBe(false);
  });

  it("registry does not auto-register pilot-public-query from research phrasing", () => {
    const r = resolvePublicWebRegistry({
      pilotText:
        "Recherche la documentation officielle du protocole QUIC sur l'IETF",
      haystack:
        "Recherche la documentation officielle du protocole QUIC sur l'IETF",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.topics[PILOT_PUBLIC_QUERY_REF]).toBeUndefined();
    expect(r.limits).toContain("LEXICAL_PILOT_QUERY_REGISTRATION_DISABLED");
  });

  it("Nora proposed public query can be admitted then authorized", () => {
    const admitted = admitNoraProposedPublicQuery({
      proposedQuery: "HTTP/3 site:datatracker.ietf.org",
    });
    expect(admitted.ok).toBe(true);
    if (!admitted.ok) throw new Error(admitted.reason);
    const auth = authorizePublicWebQuery({
      publicTopicRef: admitted.ref,
      turnPublicTopics: { [admitted.ref]: admitted.query },
      turnAuthorizedExactQueries: [admitted.query],
    });
    expect(auth.ok).toBe(true);
    expect(auth.provenance === "EXPLICIT_AUTHORIZED_EXACT" || auth.provenance === "REGISTERED_PUBLIC_COMPOSITION").toBe(
      true,
    );
  });

  it("proposed query with private marker is refused", () => {
    const admitted = admitNoraProposedPublicQuery({
      proposedQuery: "architecture prep_abc123xyz confidential",
      privateMarkers: ["prep_abc123xyz"],
    });
    expect(admitted.ok).toBe(false);
  });

  it("proposed confidential business cue is refused by sanitize", () => {
    const admitted = admitNoraProposedPublicQuery({
      proposedQuery: "notre budget interne vs postgresql docs",
    });
    expect(admitted.ok).toBe(false);
  });
});

describe("T1.2 — no haystack fallback for pilot provenance", () => {
  it("absent pilotText does not extract URLs from haystack", () => {
    const r = resolvePublicWebRegistry({
      haystack:
        "checkpoint https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
    });
    expect(r.pilotProvidedUrls).toHaveLength(0);
    expect(r.limits).toContain("PILOT_TEXT_ABSENT_URL_EXTRACTION_CLOSED");
  });

  it("pilotText extracts candidates but marks not auto-authorized", () => {
    const url =
      "https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query";
    const r = resolvePublicWebRegistry({
      pilotText: `Compare avec ${url}`,
      haystack: `Compare avec ${url}`,
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.pilotProvidedUrls).toContain(url);
    expect(r.limits).toContain("PILOT_URL_NOT_AUTO_AUTHORIZED");
  });

  it("strips stale pilot-public-query from prior topics", () => {
    const r = resolvePublicWebRegistry({
      priorTopics: {
        [PILOT_PUBLIC_QUERY_REF]: "old subject site:example.com",
        "node-lts": "Node.js current LTS version site:nodejs.org",
      },
      priorExactQueries: ["old subject site:example.com"],
      pilotText: "bonjour",
      haystack: "bonjour node.js lts",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
    });
    expect(r.topics[PILOT_PUBLIC_QUERY_REF]).toBeUndefined();
    expect(r.limits).toContain("STALE_PILOT_PUBLIC_QUERY_STRIPPED");
    expect(r.topics["node-lts"]).toBeTruthy();
  });
});

describe("T1.3 — destination / credential negatives", () => {
  it("rejects credentials, private IP, CGNAT", () => {
    expect(assertPublicHttpsUrl("https://user:pass@example.com/a").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://127.0.0.1/x").ok).toBe(false);
    expect(assertPublicHttpsUrl("https://100.64.1.1/x").ok).toBe(false);
    expect(
      extractPilotProvidedPublicUrls(
        "voir https://user:secret@evil.test/x et https://192.168.1.1/y",
      ),
    ).toEqual([]);
  });
});

```

### `projects/sfia-studio-next/web/tests/integration/ml5-conserve-only-nominal.pg.test.ts`

```ts
/**
 * T2 — conserve-only nominal path through postUserMessageAndNora
 * (no provider) → D4 v2 persisted with exact candidate bytes.
 */
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

const prevFixture = process.env.STUDIO_FORCE_NORA_FIXTURE;
const prevLane = process.env.STUDIO_LANE;
beforeAll(() => {
  process.env.STUDIO_LANE = "DEV";
  process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
});
afterAll(() => {
  if (prevFixture === undefined) delete process.env.STUDIO_FORCE_NORA_FIXTURE;
  else process.env.STUDIO_FORCE_NORA_FIXTURE = prevFixture;
  if (prevLane === undefined) delete process.env.STUDIO_LANE;
  else process.env.STUDIO_LANE = prevLane;
});

import { db } from "@/db/client";
import { pilots } from "@/db/schema";
import { newId } from "@/lib/ids";
import { contentSha256 } from "@/domains/conversation/document-command";
import {
  DOC_CONSERVE_PROPOSAL,
  stashPendingDocumentCandidate,
} from "@/domains/conversation/document-candidate";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import {
  getDocumentRevision,
  listDocumentRevisions,
  savePreparationDocument,
} from "@/domains/document/service";
import {
  getPreparationContext,
  openOrCreatePreparation,
} from "@/domains/preparation/service";
import { commitTurnTerminal, reserveTurnCommand } from "@/domains/conversation/turn-command";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

describe("T2 conserve-only nominal via postUserMessageAndNora", () => {
  it(
    "persists v2 from sealed candidate without provider; v1 retained; refuse bad identity",
    async () => {
      const pilotId = await seedPilot("CONSERVE-ONLY");
      const prep = await openOrCreatePreparation(pilotId);
      const ctx = await getPreparationContext(pilotId, prep.id);
      expect(ctx.conversation?.id).toBeTruthy();

      const v1 = await savePreparationDocument(
        pilotId,
        prep.id,
        "Conservable",
        "# Conservable\n\n## Section 1\n\nAlpha.\n\n## Section 4\n\nAncien contenu.\n",
      );
      expect(v1.status).toBe("AVAILABLE");
      if (v1.status !== "AVAILABLE") throw new Error("v1");

      const reserved = await reserveTurnCommand({
        conversationId: ctx.conversation!.id,
        ownerPilotId: pilotId,
        clientTurnKey: `co-prop-${newId("ck")}`,
        content: "propose section 4",
      });
      if (reserved.kind !== "fresh") throw new Error("expected fresh");

      const candidateBody =
        "# Conservable\n\n## Section 1\n\nAlpha.\n\n## Section 4\n\nNouveau contenu ciblé.\n";
      const title = "Conservable";
      const stashed = await stashPendingDocumentCandidate({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        preparationId: prep.id,
        pilotId,
        documentId: v1.documentId,
        sourceRevisionId: v1.revisionId,
        observedHeadRevisionId: v1.revisionId,
        title,
        contentMarkdown: candidateBody,
      });
      expect(stashed.ok).toBe(true);
      if (!stashed.ok) throw new Error(stashed.reason);
      const candidateSha = stashed.candidate.contentSha256;
      expect(candidateSha).toBe(contentSha256(title, candidateBody));

      await commitTurnTerminal({
        commandId: reserved.commandId,
        ownerToken: reserved.ownerToken,
        status: "COMPLETE",
        conversationId: ctx.conversation!.id,
        assistant: {
          id: newId("msg"),
          content: "proposition prête",
          messageStatus: "COMPLETE",
          generationId: newId("gen"),
          ordinal: reserved.ordinalAssistant,
        },
        generationId: newId("gen"),
        resultJson: JSON.stringify({ status: "COMPLETE" }),
      });

      const before = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
      const beforeCount = before.revisions?.length ?? 0;

      // Wrong content hash — refuse without mutation.
      const badHash = await postUserMessageAndNora(
        pilotId,
        prep.id,
        DOC_CONSERVE_PROPOSAL,
        {
          documentFocus: {
            documentId: v1.documentId,
            sourceRevisionId: v1.revisionId,
            observedHeadRevisionId: v1.revisionId,
            conserveProposal: true,
            pendingCandidateId: stashed.candidate.id,
            pendingCandidateContentSha256: contentSha256(title, "# forged\n"),
          },
        },
      );
      expect(badHash.noraMode).toBe("deterministic-fixture");
      expect(badHash.documentSave?.status).not.toBe("AVAILABLE");
      expect(badHash.documentSave?.reason).toMatch(/CANDIDATE|SHA|HASH|MISMATCH|NOT_FOUND|REQUIRED/i);

      const mid = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
      expect(mid.revisions?.length ?? 0).toBe(beforeCount);

      const conserved = await postUserMessageAndNora(
        pilotId,
        prep.id,
        DOC_CONSERVE_PROPOSAL,
        {
          documentFocus: {
            documentId: v1.documentId,
            sourceRevisionId: v1.revisionId,
            observedHeadRevisionId: v1.revisionId,
            conserveProposal: true,
            pendingCandidateId: stashed.candidate.id,
            pendingCandidateContentSha256: candidateSha,
          },
        },
      );

      expect(conserved.noraMode).toBe("deterministic-fixture");
      expect(conserved.documentSave?.status).toBe("AVAILABLE");
      expect(conserved.documentSave?.act).toBe("REVISE");
      const newRevId = conserved.documentSave?.revisionId;
      expect(newRevId).toBeTruthy();

      const after = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
      expect(after.revisions?.length ?? 0).toBe(beforeCount + 1);

      const v2 = await getDocumentRevision(pilotId, prep.id, v1.documentId, newRevId!);
      expect(v2.status).toBe("AVAILABLE");
      if (v2.status !== "AVAILABLE") throw new Error("v2 load");
      expect(v2.revision.contentMarkdown).toBe(candidateBody);

      const stillV1 = await getDocumentRevision(
        pilotId,
        prep.id,
        v1.documentId,
        v1.revisionId,
      );
      expect(stillV1.status).toBe("AVAILABLE");
      if (stillV1.status !== "AVAILABLE") throw new Error("v1 load");
      expect(stillV1.revision.contentMarkdown).toContain("Ancien contenu");

      // Consumed candidate — second conserve must not write again.
      const repeat = await postUserMessageAndNora(
        pilotId,
        prep.id,
        DOC_CONSERVE_PROPOSAL,
        {
          documentFocus: {
            documentId: v1.documentId,
            sourceRevisionId: v1.revisionId,
            observedHeadRevisionId: newRevId!,
            conserveProposal: true,
            pendingCandidateId: stashed.candidate.id,
            pendingCandidateContentSha256: candidateSha,
          },
        },
      );
      expect(repeat.documentSave?.status).not.toBe("AVAILABLE");
    },
    30_000,
  );
});

```

## 9. Diffs
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 4d7a7bf5..656dcce3 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,24 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-25-ML5-NORA-RECETTE-READINESS
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-25 (Europe/Paris) |
+| Macro-lot | ML5 — Nora recette readiness (T1/T2/T3) |
+| Type | INC Critical · régularisation pré-recette · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| Parent HEAD | `3a56eb9d38661586dab79d9c999eef078476b5ac` |
+| Candidate SHA | *(post-commit)* |
+| Candidate tree | *(post-commit)* |
+| Web tree | *(post-commit)* |
+| Build DEV | `prUUuYxFrKalrxiMsKoc4` · digest `44d00186941598b86c4102ab37291b1c006760a36bf194a1afa8ace2a7849d0f` |
+| RECETTE | **inchangé** `7f48daa2` / `_ZDI1cWa1hscluvBhaiA4` |
+| Contenu | T1 admission sémantique B1 (pas lexical); T2 conserve-only nominal PG; T3 rebuild identité |
+| Push projet | **NONE** |
+| Verdict | **READY FOR RECETTE CUTOVER REVIEW** |
+
 ## delivery_id: DELIV-2026-11-25-ML5-NORA-RESIDUAL-ABCD

 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md b/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
index eb5cf156..e79fd6ef 100644
--- a/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
+++ b/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
@@ -164,3 +164,14 @@ Conformité globale : **0 VÉRIFIÉ** — preuves BROWSER/F2/LIVE/REAL absentes.
 | Preuves | vitest residual+c24+c15+labels; PG documents-proposal-candidate; WEB LIVE = flags/UAT |
 | RECETTE | inchangée |

+## Recette readiness T1/T2/T3 (2026-11-25)
+
+| Champ | Valeur |
+|---|---|
+| Build | `prUUuYxFrKalrxiMsKoc4` (≠ oLyRjFCDc4Y7JSvbzZkFo) |
+| Digest | `44d00186941598b86c4102ab37291b1c006760a36bf194a1afa8ace2a7849d0f` |
+| T1 | lexical registration disabled; Nora proposedPublicQuery + admitNoraProposedPublicQuery; pilotText required; URL not auto-authorized |
+| T2 | conserve-only early path; conserveProposal flag required; PG ml5-conserve-only-nominal PASS |
+| T3 | next build + next start :3100; RECETTE inchangée |
+| WEB LIVE | flag-gated; search DNS = provider-hosted KNOWN GAP; open LIVE = Studio DNS pin |
+
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 16dce4e0..248156e3 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1007,6 +1007,8 @@ async function runLiveWithTools(
         turnPublicFacts: input.publicWebRegistry?.facts,
         turnAuthorizedExactQueries: input.publicWebRegistry?.exactQueries,
         pilotProvidedUrls: input.publicWebRegistry?.pilotProvidedUrls,
+        // T1.2 — explicit this-turn Pilote text only (never haystack/objective).
+        pilotText: input.userText,
       });
       tools = [...tools, ...webTools];
     }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
index 6f61f17a..b33986ae 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
@@ -1,17 +1,11 @@
 /**
- * C24 — product mechanism to feed the public WEB registry.
+ * C24 / T1 — public WEB registry feeding (server-owned provenance).
  *
- * Nora cannot self-authorize. The server registers public topics from:
- * 1. Existing investigation state (prior turns).
- * 2. Preparation / project explicit exact-query authorizations (when present).
- * 3. A DEV catalog of known-public topic templates (env), matched against
- *    the Pilote message / objective — never private markers.
- * 4. A generic pilot-public query composed from *this-turn* Pilote text when
- *    public-research intent is detected (REGISTERED_PUBLIC_COMPOSITION /
- *    EXPLICIT_AUTHORIZED_EXACT) — no topic-specific hardcoding required.
+ * Nora may identify a public research need and propose a public-only query.
+ * She cannot self-authorize egress. Admission remains EXPLICIT_AUTHORIZED_EXACT
+ * or REGISTERED_PUBLIC_COMPOSITION after server sanitize + private-marker checks.
  *
- * Tests must not inject registry entries solely to force a PASS; they may
- * exercise the catalog/matching path with representative public topics.
+ * Lexical helpers (catalog token match, URL parse) are not semantic authorization.
  */

 import { assertPublicHttpsUrl } from "./public-web-search-frontier";
@@ -23,8 +17,8 @@ export type PublicWebRegistry = {
   facts: string[];
   limits: string[];
   /**
-   * Public https URLs literally supplied by the Pilote in this-turn pilot text.
-   * May seed open_page discovery after URL/DNS public checks — never private hosts.
+   * Public https URLs literally present in this-turn Pilote text.
+   * Candidates only — open_page still requires admission (not auto-authorized).
    */
   pilotProvidedUrls: string[];
 };
@@ -101,11 +95,11 @@ const DEFAULT_DEV_CATALOG: PublicTopicCatalogEntry[] = [
   },
 ];

-const PILOT_PUBLIC_QUERY_REF = "pilot-public-query";
+export const PILOT_PUBLIC_QUERY_REF = "pilot-public-query";

 /**
- * Extract public https URLs from Pilote-only text.
- * Authority is NOT created by regex — only candidates for discovery after assertPublicHttpsUrl.
+ * Extract public https URL candidates from an explicit Pilote-only string.
+ * Parsing only — does not create open authorization.
  */
 export function extractPilotProvidedPublicUrls(pilotText: string): string[] {
   const found: string[] = [];
@@ -125,65 +119,55 @@ function normalize(s: string): string {
 }

 /**
- * Detect public-research intent on Pilote utterance (server-side).
- * Intent ≠ authorization — registration still requires sanitize + provenance modes.
+ * Server admission of a Nora-proposed public-only query.
+ * Semantic need is Nora's; permission is the server's after sanitize + markers.
+ * Does not invent a third provenance mode — caller registers then uses
+ * EXPLICIT_AUTHORIZED_EXACT / REGISTERED_PUBLIC_COMPOSITION via authorizePublicWebQuery.
  */
-export function detectPublicResearchIntent(text: string): boolean {
-  return /\b(recherch|search|vérifi|verify|quelle version|current version|documentation officielle|site officiel|consulter (le |la |l')?(doc|documentation|site)|look up|official (docs?|documentation)|documentation publique|page publique)\b/i.test(
-    text,
-  );
-}
-
-/**
- * Compose a generic public search query from this-turn Pilote text.
- * Strips intent boilerplate; never pulls private context haystack.
- */
-export function composePilotPublicSearchQuery(
-  pilotText: string,
-  privateMarkers: string[] = [],
-): { ok: true; query: string } | { ok: false; reason: string } {
-  let q = (pilotText || "").replace(/\s+/g, " ").trim();
-  if (!q) return { ok: false, reason: "EMPTY_PILOT_TEXT" };
-
-  // Drop literal URLs — open_page path handles them separately.
-  q = q.replace(/https:\/\/[^\s<>"'\)\]]+/gi, " ").replace(/\s+/g, " ").trim();
-
-  q = q
-    .replace(
-      /\b(peux[- ]tu|pouvez[- ]vous|please|merci de|je (te|vous) (demande|prie)|nora[,:]?)\b/gi,
-      " ",
-    )
-    .replace(
-      /\b(rechercher?|search|consulter|look up|vérifier|verify|trouver|find)\b/gi,
-      " ",
-    )
-    .replace(
-      /\b(la |le |les |du |de la |des |une? |the |a |an )?(documentation officielle|documentation publique|site officiel|official docs?|page publique)\b/gi,
-      " ",
-    )
-    .replace(/\s+/g, " ")
-    .trim();
-
-  // Prefer quoted public topic if present.
-  const quoted = /[«"]([^»"]{3,120})[»"]/.exec(pilotText);
-  if (quoted?.[1]?.trim()) {
-    q = quoted[1].trim();
+export function admitNoraProposedPublicQuery(input: {
+  proposedQuery: string;
+  privateMarkers?: string[];
+}):
+  | { ok: true; query: string; ref: typeof PILOT_PUBLIC_QUERY_REF }
+  | { ok: false; reason: string } {
+  const raw = (input.proposedQuery || "").replace(/\s+/g, " ").trim();
+  if (!raw || raw.length < 3) {
+    return { ok: false, reason: "PROPOSED_QUERY_EMPTY" };
   }
-
-  if (q.length < 3) return { ok: false, reason: "QUERY_TOO_SHORT_AFTER_STRIP" };
-  if (q.length > 280) q = q.slice(0, 280);
-
-  for (const m of privateMarkers) {
-    if (m.trim().length >= 4 && q.toLowerCase().includes(m.toLowerCase())) {
-      return { ok: false, reason: "PRIVATE_MARKER_IN_PILOT_QUERY" };
+  const markers = (input.privateMarkers ?? []).filter((m) => m.trim().length >= 4);
+  for (const m of markers) {
+    if (raw.toLowerCase().includes(m.toLowerCase())) {
+      return { ok: false, reason: "PRIVATE_MARKER_IN_PROPOSED_QUERY" };
     }
   }
-
-  const sanitized = sanitizePublicWebQuery(q);
+  const sanitized = sanitizePublicWebQuery(raw);
   if (!sanitized.ok) {
     return { ok: false, reason: sanitized.blockedReason ?? "SANITIZE_BLOCKED" };
   }
-  return { ok: true, query: sanitized.query };
+  return {
+    ok: true,
+    query: sanitized.query,
+    ref: PILOT_PUBLIC_QUERY_REF,
+  };
+}
+
+/**
+ * @deprecated Lexical intent detection must not authorize egress.
+ * Kept as a no-op diagnostic helper for tests migrating off the prior path.
+ */
+export function detectPublicResearchIntent(_text: string): boolean {
+  return false;
+}
+
+/**
+ * @deprecated Free-form pilot-text composition is not an authorization path.
+ * Use admitNoraProposedPublicQuery after Nora proposes a public-only query.
+ */
+export function composePilotPublicSearchQuery(
+  _pilotText: string,
+  _privateMarkers: string[] = [],
+): { ok: true; query: string } | { ok: false; reason: string } {
+  return { ok: false, reason: "LEXICAL_COMPOSITION_DISABLED" };
 }

 /**
@@ -217,13 +201,11 @@ export function loadPublicTopicCatalog(
 }

 /**
- * Merge prior registry with catalog matches + optional generic pilot query.
- * Does not accept free-form Nora proposals as public provenance.
+ * Merge prior registry with catalog matches.
  *
- * `pilotText` (this-turn Pilote message) is the only source for:
- * - pilotProvidedUrls
- * - pilot-public-query composition
- * Haystack may include objective/intent for catalog matching only.
+ * `pilotText` is REQUIRED for pilot-originated URL candidate extraction.
+ * Haystack is NEVER a fallback provenance for URLs or free-form queries.
+ * Stale `pilot-public-query` from prior turns is stripped (must be re-admitted).
  */
 export function resolvePublicWebRegistry(input: {
   priorTopics?: Record<string, string> | null;
@@ -231,26 +213,40 @@ export function resolvePublicWebRegistry(input: {
   priorFacts?: string[] | null;
   /** Explicit exact queries authorized by Pilote/server for this preparation. */
   explicitExactQueries?: string[] | null;
+  /**
+   * Aggregated context for catalog token matching only (objective / intent).
+   * Never used as URL or free-form query provenance.
+   */
   haystack: string;
   /**
-   * This-turn Pilote utterance only — never objectives, documents, tool results,
-   * or checkpoints. Defaults to haystack for backward-compatible callers.
+   * This-turn Pilote utterance — required for pilot URL candidates.
+   * Absence ⇒ fail closed for pilot-originated URL extraction.
    */
-  pilotText?: string;
+  pilotText?: string | null;
   privateMarkers?: string[];
   env?: Record<string, string | undefined>;
 }): PublicWebRegistry {
   const limits: string[] = [];
   const markers = (input.privateMarkers ?? []).filter((m) => m.trim().length >= 4);
   const hay = normalize(input.haystack);
-  const pilotText = (input.pilotText ?? input.haystack).trim();
-  const topics: Record<string, string> = {
-    ...(input.priorTopics ?? {}),
-  };
+
+  // Strip stale ephemeral generic registration — must be re-admitted this turn.
+  const priorTopicsRaw = { ...(input.priorTopics ?? {}) };
+  if (priorTopicsRaw[PILOT_PUBLIC_QUERY_REF]) {
+    delete priorTopicsRaw[PILOT_PUBLIC_QUERY_REF];
+    limits.push("STALE_PILOT_PUBLIC_QUERY_STRIPPED");
+  }
+
+  const topics: Record<string, string> = { ...priorTopicsRaw };
   const exact = new Set(
     [...(input.priorExactQueries ?? []), ...(input.explicitExactQueries ?? [])]
       .map((q) => q.replace(/\s+/g, " ").trim())
-      .filter(Boolean),
+      .filter(Boolean)
+      // Drop exacts that only existed for a prior pilot-public-query value.
+      .filter((q) => {
+        const priorPilot = (input.priorTopics ?? {})[PILOT_PUBLIC_QUERY_REF];
+        return !priorPilot || normalize(q) !== normalize(priorPilot);
+      }),
   );
   const facts = [...new Set((input.priorFacts ?? []).map((f) => f.trim()).filter(Boolean))];

@@ -259,15 +255,9 @@ export function resolvePublicWebRegistry(input: {
     limits.push("PUBLIC_WEB_CATALOG_EMPTY");
   }

-  const publicResearchIntent = detectPublicResearchIntent(pilotText);
-  if (publicResearchIntent) {
-    limits.push("PUBLIC_RESEARCH_INTENT_DETECTED");
-  }
-
+  // Catalog = server-owned known-public templates (REGISTERED_PUBLIC_COMPOSITION).
+  // Token match is navigation onto a pre-approved public query — not free-form auth.
   for (const entry of catalog) {
-    // Catalog registration requires a real topic token match — never a single
-    // generic word like "documentation" via public-research intent alone.
-    // Generic public subjects use pilot-public-query (below).
     const hit = entry.matchTokens.some((t) => hay.includes(normalize(t)));
     if (!hit) continue;
     const q = entry.query.replace(/\s+/g, " ").trim();
@@ -282,32 +272,21 @@ export function resolvePublicWebRegistry(input: {
     }
   }

-  // Generic path — no new hardcoded topic required for a new public subject.
-  // Prefer catalog when it already registered something for this turn; still
-  // allow pilot-public-query when research intent is clear and sanitize passes.
-  if (publicResearchIntent) {
-    const composed = composePilotPublicSearchQuery(pilotText, markers);
-    if (composed.ok) {
-      const alreadySame = Object.values(topics).some(
-        (t) => normalize(t) === normalize(composed.query),
-      );
-      if (!alreadySame && !topics[PILOT_PUBLIC_QUERY_REF]) {
-        topics[PILOT_PUBLIC_QUERY_REF] = composed.query;
-        exact.add(composed.query);
-        limits.push("PILOT_PUBLIC_QUERY_REGISTERED");
-      } else if (alreadySame) {
-        limits.push("PILOT_PUBLIC_QUERY_DEDUPED_CATALOG");
-      }
-    } else {
-      limits.push(`PILOT_PUBLIC_QUERY_SKIPPED:${composed.reason}`);
+  // T1.2 — no haystack fallback for pilot provenance.
+  let pilotProvidedUrls: string[] = [];
+  if (typeof input.pilotText === "string" && input.pilotText.trim()) {
+    pilotProvidedUrls = extractPilotProvidedPublicUrls(input.pilotText);
+    if (pilotProvidedUrls.length > 0) {
+      limits.push(`PILOT_URL_CANDIDATES:${pilotProvidedUrls.length}`);
+      limits.push("PILOT_URL_NOT_AUTO_AUTHORIZED");
     }
+  } else {
+    limits.push("PILOT_TEXT_ABSENT_URL_EXTRACTION_CLOSED");
   }

-  // C — URLs only from this-turn Pilote text (not objective / prior summaries).
-  const pilotProvidedUrls = extractPilotProvidedPublicUrls(pilotText);
-  if (pilotProvidedUrls.length > 0) {
-    limits.push(`PILOT_PROVIDED_PUBLIC_URLS:${pilotProvidedUrls.length}`);
-  }
+  // Lexical free-form registration removed (T1.1). Nora must propose via tool;
+  // server admits with admitNoraProposedPublicQuery.
+  limits.push("LEXICAL_PILOT_QUERY_REGISTRATION_DISABLED");

   if (
     Object.keys(topics).length === 0 &&
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
index af18833f..9992df52 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
@@ -23,6 +23,8 @@ export type OutboundWebRequest = {
   queryOrUrl: string;
   /** Payload actually sent — must contain no private keys. */
   outboundFields: Record<string, string>;
+  /** Provenance label for tests — never private markers. */
+  provenance?: string;
 };

 const outboundLog: OutboundWebRequest[] = [];
@@ -144,10 +146,17 @@ export function assertPublicHttpsUrl(
 }

 /** Documented barrier gaps until WEB LIVE Morris gate + network egress control. */
+/**
+ * Honest barrier qualification (T1.3):
+ * - Studio OPEN LIVE: DNS resolve + pinned connect + no redirect follow (web-egress-guard).
+ * - Studio SEARCH LIVE: query-only outbound to isolated hosted agent — Studio does NOT
+ *   pin DNS of the provider's own search fetch; do not claim Studio DNS control there.
+ */
 export const WEB_FRONTIER_NETWORK_BARRIER_LIMITS = [
   "NO_DNS_REBINDING_PROTECTION_WITHOUT_LIVE_RESOLVER",
   "NO_REDIRECT_HOP_REVALIDATION_WITHOUT_LIVE_FETCH",
   "LITERAL_URL_CHECK_ONLY_UNTIL_WEB_LIVE_GATE",
+  "SEARCH_LIVE_PROVIDER_HOSTED_DNS_NOT_STUDIO_PINNED",
 ] as const;

 /**
@@ -736,47 +745,59 @@ export async function buildPublicWebFrontierTools(input: {
   privateContextMarkers?: string[];
   /** C22 — facts already registered PUBLIC for this turn (required for fact path). */
   turnPublicFacts?: string[];
-  /** C22 — topicRef → registered public query. */
+  /** C22 — topicRef → registered public query. Mutable for this-turn admissions. */
   turnPublicTopics?: Record<string, string>;
   /** C22 — exact queries explicitly authorized for this turn. */
   turnAuthorizedExactQueries?: string[];
   /**
-   * Public https URLs literally provided by the Pilote in this turn.
-   * Seed open_page discovery after normalize — DNS/egress still enforced on open.
+   * URL candidates parsed from this-turn Pilote text (not auto-authorized).
+   * Nora must still propose open; mention alone never grants discovery.
    */
   pilotProvidedUrls?: string[];
+  /** Explicit this-turn Pilote text for provenance checks (never haystack). */
+  pilotText?: string | null;
 }) {
   const { tool } = await import("@openai/agents");
   const { z } = await import("zod");
+  const { admitNoraProposedPublicQuery, PILOT_PUBLIC_QUERY_REF } = await import(
+    "./public-web-registry"
+  );
   const markers = (input.privateContextMarkers ?? []).filter(Boolean);
-  /** C20 — URLs discovered this turn (and prior journal DISCOVERED/CONSULTED WEB refs). */
+  /** Mutable registries for this tool session (Nora proposals admitted by server). */
+  const turnTopics: Record<string, string> = { ...(input.turnPublicTopics ?? {}) };
+  const turnExact = new Set(
+    (input.turnAuthorizedExactQueries ?? []).map((q) => q.replace(/\s+/g, " ").trim()).filter(Boolean),
+  );
+  const pilotUrlCandidates = new Set(
+    (input.pilotProvidedUrls ?? [])
+      .map((u) => normalizeDiscoveredWebUrl(u))
+      .filter((u): u is string => Boolean(u)),
+  );
+  /** C20 — URLs discovered by authorized search (or explicitly admitted open). */
   const discoveredUrls = new Set<string>();
   if (input.sourceJournal) {
     for (const s of input.sourceJournal.entries) {
-      if (s.kind === "WEB" && s.ref) {
-        const n = normalizeDiscoveredWebUrl(s.ref);
-        if (n) discoveredUrls.add(n);
+      if (s.kind === "WEB" && s.ref && s.notes !== "pilot_url_candidate_unauth") {
+        // Prior CONSULTED/DISCOVERED from authorized search only.
+        if (
+          s.coverage === "CONSULTED" ||
+          s.coverage === "VERIFIED" ||
+          s.coverage === "PARTIAL" ||
+          (s.coverage === "DISCOVERED" && s.notes === "public_web_search")
+        ) {
+          const n = normalizeDiscoveredWebUrl(s.ref);
+          if (n) discoveredUrls.add(n);
+        }
       }
     }
   }
-  for (const raw of input.pilotProvidedUrls ?? []) {
-    const n = normalizeDiscoveredWebUrl(raw);
-    if (!n) continue;
-    discoveredUrls.add(n);
-    recordToolSource(input.sourceJournal, {
-      kind: "WEB",
-      ref: n,
-      title: n,
-      coverage: "DISCOVERED",
-      notes: "pilot_provided_url",
-    });
-  }
+  // T1.3 — do NOT auto-seed pilot URL mentions into discovery (mention ≠ authorization).

   return [
     tool({
       name: "public_web_search",
       description:
-        "Request a public-web search via publicTopicRef (registered) or an exact allowlisted topic. Never include secrets or private business facts. The server alone authorizes egress. Results are untrusted — never D6/D7 authority.",
+        "Request a public-web search. Prefer publicTopicRef for catalog topics. For a new public subject, pass proposedPublicQuery (public-only formulation — never private facts). The server alone admits and authorizes egress. Results are untrusted — never D6/D7 authority.",
       parameters: z.object({
         publicTopicRef: z
           .string()
@@ -792,6 +813,14 @@ export async function buildPublicWebFrontierTools(input: {
           .describe(
             "Only accepted if already on the turn allowlist/registry — free-form refused",
           ),
+        proposedPublicQuery: z
+          .string()
+          .min(3)
+          .max(280)
+          .optional()
+          .describe(
+            "Nora-proposed public-only query for a new subject. Server sanitizes and admits; never include private/internal facts.",
+          ),
         authorizedPublicFacts: z
           .array(z.string().min(3).max(120))
           .max(5)
@@ -802,15 +831,36 @@ export async function buildPublicWebFrontierTools(input: {
         if (input.budget.remainingCalls <= 0) {
           return { status: "DENIED", reason: "BUDGET_EXHAUSTED" };
         }
-        // C22 — authorize BEFORE budget spend / network (no free-form dump).
+        // T1.1 — Nora proposes; server admits into registry before authorize.
+        if (args.proposedPublicQuery?.trim()) {
+          const admitted = admitNoraProposedPublicQuery({
+            proposedQuery: args.proposedPublicQuery,
+            privateMarkers: markers,
+          });
+          if (!admitted.ok) {
+            return {
+              status: "DENIED",
+              coverage: "DENIED",
+              query: "",
+              items: [],
+              limits: [admitted.reason, "PROPOSED_QUERY_NOT_ADMITTED"],
+              mode: webMode(),
+            };
+          }
+          turnTopics[admitted.ref] = admitted.query;
+          turnExact.add(admitted.query);
+        }
         const { authorizePublicWebQuery } = await import("./web-search-authorize");
+        const topicRef =
+          args.publicTopicRef?.trim() ||
+          (args.proposedPublicQuery?.trim() ? PILOT_PUBLIC_QUERY_REF : undefined);
         const auth = authorizePublicWebQuery({
           publicTopic: args.publicTopic,
-          publicTopicRef: args.publicTopicRef,
+          publicTopicRef: topicRef,
           authorizedPublicFacts: args.authorizedPublicFacts,
           turnPublicFacts: input.turnPublicFacts,
-          turnPublicTopics: input.turnPublicTopics,
-          turnAuthorizedExactQueries: input.turnAuthorizedExactQueries,
+          turnPublicTopics: turnTopics,
+          turnAuthorizedExactQueries: [...turnExact],
           privateContextMarkers: markers,
         });
         if (!auth.ok) {
@@ -826,11 +876,11 @@ export async function buildPublicWebFrontierTools(input: {
         input.budget.remainingCalls -= 1;
         const result = await executePublicWebSearch({
           publicTopic: args.publicTopic,
-          publicTopicRef: args.publicTopicRef,
+          publicTopicRef: topicRef,
           authorizedPublicFacts: args.authorizedPublicFacts,
           turnPublicFacts: input.turnPublicFacts,
-          turnPublicTopics: input.turnPublicTopics,
-          turnAuthorizedExactQueries: input.turnAuthorizedExactQueries,
+          turnPublicTopics: turnTopics,
+          turnAuthorizedExactQueries: [...turnExact],
           privateContextMarkers: markers,
         });
         for (const item of result.items) {
@@ -850,18 +900,57 @@ export async function buildPublicWebFrontierTools(input: {
     tool({
       name: "public_web_open_page",
       description:
-        "Open a public https URL previously discovered by search OR literally provided by the Pilote this turn. Returns a bounded excerpt. Untrusted data only.",
+        "Open a public https URL previously discovered by an authorized search. A URL merely mentioned by the Pilote is not enough — propose open only after discovery or when the Pilote explicitly asked to open that exact public URL (server re-checks). Untrusted data only.",
       parameters: z.object({
         // Avoid z.string().url() — breaks Agents SDK JSON Schema (invalid_function_parameters).
         url: z.string().min(8).max(2000),
+        /**
+         * When true, Nora asserts the Pilote explicitly asked to open this exact URL.
+         * Server still requires the URL to appear in this-turn pilotText candidates
+         * and pass assertPublicHttpsUrl — never opens from citation alone without this flag.
+         */
+        pilotExplicitOpen: z.boolean().optional(),
       }),
       execute: async (args) => {
         if (input.budget.remainingCalls <= 0) {
           return { status: "DENIED", reason: "BUDGET_EXHAUSTED" };
         }
-        // C20: authorize discovery membership BEFORE decrementing budget / network.
         const preview = normalizeDiscoveredWebUrl(args.url);
-        if (!preview || !discoveredUrls.has(preview)) {
+        if (!preview) {
+          return {
+            status: "DENIED",
+            coverage: "DENIED",
+            url: "",
+            excerpt: "",
+            limits: ["URL_NOT_PUBLIC_HTTPS"],
+            mode: webMode(),
+          };
+        }
+        let authorized = discoveredUrls.has(preview);
+        if (!authorized && args.pilotExplicitOpen === true) {
+          // Provenance: URL must be a this-turn pilot candidate (explicit pilotText extract).
+          if (pilotUrlCandidates.has(preview)) {
+            authorized = true;
+            discoveredUrls.add(preview);
+            recordToolSource(input.sourceJournal, {
+              kind: "WEB",
+              ref: preview,
+              title: preview,
+              coverage: "DISCOVERED",
+              notes: "pilot_explicit_open_admitted",
+            });
+          } else {
+            return {
+              status: "DENIED",
+              coverage: "DENIED",
+              url: "",
+              excerpt: "",
+              limits: ["PILOT_EXPLICIT_OPEN_URL_NOT_IN_PILOT_TEXT"],
+              mode: webMode(),
+            };
+          }
+        }
+        if (!authorized) {
           return {
             status: "DENIED",
             coverage: "DENIED",
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 543e86f1..9eb0ed83 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -1153,10 +1153,13 @@ export async function postUserMessageAndNora(
       // D2 — conserve of a sealed candidate must not re-run a costly investigation.
       // Body authority remains the pdoc; this path only supplies REVISE qualification.
       const conserveFocus = opts?.documentFocus;
+      // T2 — authority is explicit conserve action + sealed candidate identity,
+      // not the sole equality of a transmit string.
       const conserveOnly =
-        isConserveProposalTransmit(content) &&
+        conserveFocus?.conserveProposal === true &&
         Boolean(conserveFocus?.pendingCandidateId) &&
-        Boolean(conserveFocus?.documentId);
+        Boolean(conserveFocus?.documentId) &&
+        isConserveProposalTransmit(content);
       let turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>;
       if (conserveOnly && conserveFocus?.documentId) {
         const policy = buildCognitivePolicy(content, undefined, {
@@ -2397,6 +2400,193 @@ export async function postUserMessageAndNora(
               d4Effect: null,
             });
           } else {
+            // T2 — explicit conserve of sealed pdoc: skip proposal extraction / merge.
+            // Body authority is the candidate; no provider regenerates content here.
+            if (
+              focus?.conserveProposal === true &&
+              focus.pendingCandidateId?.trim()
+            ) {
+              const observedHeadId =
+                focus.observedHeadRevisionId?.trim() || target.baseRevisionId;
+              const actualHeadId =
+                docs.find((d) => d.document.id === target.documentId)?.latestRevision
+                  ?.id ?? observedHeadId;
+              const sourceIsHistorical =
+                Boolean(focus.sourceRevisionId) &&
+                focus.sourceRevisionId !== actualHeadId;
+              let serverAuth: HistoricalSourceAuthorization | null = null;
+              if (sourceIsHistorical && focus.historicalAuthorizationId) {
+                const authLoad = await loadHistoricalSourceAuthorization({
+                  pilotId,
+                  preparationId,
+                  authorizationId: focus.historicalAuthorizationId,
+                });
+                serverAuth = authLoad.ok ? authLoad.authorization : null;
+              }
+              let conserveBlocked: string | null = null;
+              let conserveContent = "";
+              let conserveTitle = target.title;
+              let conserveSource: {
+                kind: "SAME_TURN_SNAPSHOT";
+                commandId: string;
+              } = { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId };
+              const loaded = await loadPendingDocumentCandidate({
+                pilotId,
+                preparationId,
+                candidateId: focus.pendingCandidateId,
+                expectedContentSha256: focus.pendingCandidateContentSha256,
+              });
+              if (!loaded.ok) {
+                conserveBlocked = loaded.reason;
+              } else {
+                const c = loaded.candidate;
+                if (
+                  c.documentId !== target.documentId ||
+                  c.sourceRevisionId !== target.baseRevisionId
+                ) {
+                  conserveBlocked = "CANDIDATE_IDENTITY_MISMATCH";
+                } else if (c.observedHeadRevisionId !== observedHeadId) {
+                  conserveBlocked = "CANDIDATE_HEAD_MOVED";
+                } else {
+                  const bound = assertHistoricalAuthBoundToCandidate({
+                    sourceIsHistorical,
+                    candidate: c,
+                    authorization: serverAuth,
+                    actualHeadRevisionId: actualHeadId,
+                  });
+                  if (!bound.ok) {
+                    conserveBlocked = bound.reason;
+                  } else {
+                    conserveContent = c.contentMarkdown;
+                    conserveTitle = c.title;
+                    conserveSource = {
+                      kind: "SAME_TURN_SNAPSHOT",
+                      commandId: c.turnCommandId,
+                    };
+                  }
+                }
+              }
+              if (conserveBlocked) {
+                documentSave = {
+                  status: "NOT_EXECUTED",
+                  reason: conserveBlocked,
+                  documentId: target.documentId,
+                  baseRevisionId: target.baseRevisionId,
+                  act: "REVISE",
+                };
+              } else {
+                const reviseIntents = effectIntents(qualification).filter(
+                  (i) => i.capabilityId === "d4.revise_document",
+                );
+                const reviseIntent = reviseIntents[0];
+                if (!reviseIntent) {
+                  documentSave = {
+                    status: "NOT_EXECUTED",
+                    reason: "MISSING_REVISE_INTENT",
+                    documentId: target.documentId,
+                    baseRevisionId: target.baseRevisionId,
+                    act: "REVISE",
+                  };
+                } else {
+                  const clientSalt =
+                    opts?.correlationKey?.trim() ||
+                    `conserve-${reserved.commandId}`;
+                  const admitted = admitDocumentCommand({
+                    commandId: reserved.commandId,
+                    operationId: reserved.operationId,
+                    userMessageId: reserved.userMessageId,
+                    qualifiedIntentId: reviseIntent.id,
+                    action: "REVISE",
+                    preparationId,
+                    documentId: target.documentId,
+                    baseRevisionId: target.baseRevisionId,
+                    ...(sourceIsHistorical
+                      ? {
+                          sourceRevisionId: target.baseRevisionId,
+                          observedHeadRevisionId: observedHeadId,
+                          confirmedHistoricalSource: true,
+                        }
+                      : focus?.sourceRevisionId
+                        ? {
+                            sourceRevisionId: target.baseRevisionId,
+                            observedHeadRevisionId: observedHeadId,
+                            confirmedHistoricalSource: false,
+                          }
+                        : {}),
+                    sectionHint: documentAct.sectionHint,
+                    source: conserveSource,
+                    title: conserveTitle,
+                    contentMarkdown: conserveContent,
+                    clientCorrelationSalt: clientSalt,
+                  });
+                  if (!admitted.ok) {
+                    documentSave = {
+                      status: "NOT_EXECUTED",
+                      reason: admitted.reason,
+                      documentId: target.documentId,
+                      baseRevisionId: target.baseRevisionId,
+                      act: "REVISE",
+                    };
+                  } else {
+                    const sealed = await sealAndApplyDocumentCommand({
+                      pilotId,
+                      fence: {
+                        commandId: reserved.commandId,
+                        ownerToken: reserved.ownerToken,
+                        beforeFenceCheck: turnRaceHooks.beforeD4Effect,
+                      },
+                      binding: admitted.binding,
+                    });
+                    if (!sealed.sealApplied) {
+                      documentSave = {
+                        status: "NOT_EXECUTED",
+                        reason: "BINDING_SEAL_FAILED",
+                        documentId: target.documentId,
+                        baseRevisionId: target.baseRevisionId,
+                        act: "REVISE",
+                      };
+                    } else {
+                      const revised = sealed.effect;
+                      documentSave = {
+                        ...revised,
+                        act: "REVISE",
+                        baseRevisionId:
+                          "baseRevisionId" in revised &&
+                          typeof (revised as { baseRevisionId?: string }).baseRevisionId ===
+                            "string"
+                            ? (revised as { baseRevisionId: string }).baseRevisionId
+                            : target.baseRevisionId,
+                      };
+                      if (
+                        documentSave.status === "AVAILABLE" &&
+                        focus.pendingCandidateId
+                      ) {
+                        await markPendingCandidateConsumed({
+                          pilotId,
+                          preparationId,
+                          candidateId: focus.pendingCandidateId,
+                        });
+                      }
+                    }
+                  }
+                }
+              }
+              emitDocumentProposalObs({
+                requestId,
+                operationId: reserved.operationId,
+                generationId: reply.generationId,
+                act: "REVISE",
+                extracted: extractContractualDocumentProposal(reply.content),
+                refuseCode:
+                  documentSave?.status === "AVAILABLE"
+                    ? null
+                    : typeof documentSave?.reason === "string"
+                      ? documentSave.reason
+                      : "CONSERVE_ONLY",
+                d4Attempted: documentSave?.status === "AVAILABLE",
+                d4Effect: documentSave?.status ?? null,
+              });
+            } else {
             let extracted = extractContractualDocumentProposal(reply.content);
             let reviseProposalContent: string | null = null;
             let reviseBlocked: string | null = null;
@@ -2616,9 +2806,9 @@ export async function postUserMessageAndNora(
                     // P0-A — REVISE via conversation never writes D4 unless explicit conserve of sealed pdoc.
                     // Absence of documentFocus must NOT fall through to admit/seal (prior gap).
                     // Sas manual editor uses documents API directly — out of this branch.
-                    const conserveRequested =
-                      isConserveProposalTransmit(content) ||
-                      focus?.conserveProposal === true;
+                    // T2 — conservation requires explicit session action flag + sealed candidate.
+                    // Transmit-text equality alone must not authorize D4 write.
+                    const conserveRequested = focus?.conserveProposal === true;
                     if (!conserveRequested) {
                       // Title must match leading H1 when present (canonicalizeDocumentProposal).
                       const proposalTitle =
@@ -2875,6 +3065,7 @@ export async function postUserMessageAndNora(
                 }
               }
             }
+            } // else: non-conserve proposal/merge path
           }
           emitObs({
             event_name: "d3.turn.document_revise",
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts
index 033d7524..0fa446be 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts
@@ -52,15 +52,18 @@ describe("C24 public WEB registry feeding", () => {
     expect(loadPublicTopicCatalog({ STUDIO_LANE: "STABLE" })).toEqual([]);
   });

-  it("registers Power Query catalog and pilot-provided Microsoft Learn URLs", () => {
+  it("registers Power Query catalog and extracts pilot URL candidates (not auto-authorized)", () => {
     const url =
       "https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query";
+    const text = `Compare avec ${url} et le connecteur SharePoint Folder`;
     const r = resolvePublicWebRegistry({
-      haystack: `Compare avec ${url} et le connecteur SharePoint Folder`,
+      pilotText: text,
+      haystack: text,
       env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
     });
     expect(r.topics["ms-power-query"] || r.topics["ms-sharepoint-folder-pq"]).toBeTruthy();
     expect(r.pilotProvidedUrls).toContain(url);
+    expect(r.limits).toContain("PILOT_URL_NOT_AUTO_AUTHORIZED");
   });
 });

diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-residual-abcd.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-residual-abcd.test.ts
index 3ba883a7..8f5a2244 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-residual-abcd.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-residual-abcd.test.ts
@@ -3,6 +3,8 @@ import {
   composePilotPublicSearchQuery,
   extractPilotProvidedPublicUrls,
   resolvePublicWebRegistry,
+  admitNoraProposedPublicQuery,
+  PILOT_PUBLIC_QUERY_REF,
 } from "@/domains/conversation/public-web-registry";
 import { assertPublicHttpsUrl } from "@/domains/conversation/public-web-search-frontier";
 import {
@@ -17,6 +19,7 @@ import {
   DOC_CONSERVE_PROPOSAL,
 } from "@/domains/conversation/document-candidate";
 import { projectStudioEffects } from "@/domains/conversation/semantic-qualification";
+import { authorizePublicWebQuery } from "@/domains/conversation/web-search-authorize";

 describe("A — investigation continuation / restitution", () => {
   it("includes consulted sources and answered questions in continuation context", () => {
@@ -87,32 +90,43 @@ describe("A — investigation continuation / restitution", () => {
   });
 });

-describe("B — generic public WEB registration", () => {
-  it("registers pilot-public-query for a new public subject without catalog hardcoding", () => {
+describe("B/C — WEB admission (post T1 regularization)", () => {
+  it("does not lexically register a generic public subject", () => {
     const r = resolvePublicWebRegistry({
       pilotText:
         "Recherche la documentation officielle du protocole QUIC sur le site de l'IETF",
-      haystack: "Recherche la documentation officielle du protocole QUIC sur le site de l'IETF",
+      haystack:
+        "Recherche la documentation officielle du protocole QUIC sur le site de l'IETF",
       env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
     });
-    expect(r.limits).toContain("PUBLIC_RESEARCH_INTENT_DETECTED");
-    expect(r.topics["pilot-public-query"] || r.exactQueries.length > 0).toBeTruthy();
-    expect(r.limits.some((l) => /PILOT_PUBLIC_QUERY_REGISTERED/.test(l))).toBe(true);
-    // Must not require a QUIC-specific catalog entry
-    expect(Object.keys(r.topics).every((k) => k !== "quic-hardcoded")).toBe(true);
+    expect(r.topics[PILOT_PUBLIC_QUERY_REF]).toBeUndefined();
+    expect(r.limits).toContain("LEXICAL_PILOT_QUERY_REGISTRATION_DISABLED");
+  });
+
+  it("Nora proposal + server admit enables authorize under B1 modes", () => {
+    const admitted = admitNoraProposedPublicQuery({
+      proposedQuery: "QUIC protocol site:datatracker.ietf.org",
+    });
+    expect(admitted.ok).toBe(true);
+    if (!admitted.ok) throw new Error(admitted.reason);
+    const auth = authorizePublicWebQuery({
+      publicTopicRef: admitted.ref,
+      turnPublicTopics: { [admitted.ref]: admitted.query },
+      turnAuthorizedExactQueries: [admitted.query],
+    });
+    expect(auth.ok).toBe(true);
   });

-  it("does not register free-form internal work without research intent", () => {
+  it("does not register free-form internal work", () => {
     const r = resolvePublicWebRegistry({
       pilotText: "corrige le bug de validation CSV interne du sas",
       haystack: "corrige le bug de validation CSV interne du sas",
       env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
     });
-    expect(r.topics["pilot-public-query"]).toBeUndefined();
-    expect(r.limits).toContain("PUBLIC_WEB_REGISTRY_EMPTY");
+    expect(r.topics[PILOT_PUBLIC_QUERY_REF]).toBeUndefined();
   });

-  it("composePilotPublicSearchQuery sanitizes confidential cues", () => {
+  it("composePilotPublicSearchQuery remains disabled", () => {
     const bad = composePilotPublicSearchQuery(
       "recherche documentation confidentiel budget interne",
     );
@@ -133,9 +147,8 @@ describe("C — WEB P0 URL provenance", () => {
     ]);
   });

-  it("does not treat URLs from objective/checkpoint haystack as pilot-provided when pilotText is separate", () => {
+  it("does not treat URLs from objective/checkpoint haystack as pilot-provided when pilotText absent", () => {
     const r = resolvePublicWebRegistry({
-      pilotText: "Peux-tu comparer ces approches ?",
       haystack:
         "Peux-tu comparer ces approches ?\nhttps://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query\ncheckpoint prior",
       env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },

diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-t1-web-admission.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-t1-web-admission.test.ts
new file mode 100644
index 00000000..331b8d4f
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-t1-web-admission.test.ts
@@ -0,0 +1,125 @@
+import { describe, expect, it } from "vitest";
+import {
+  admitNoraProposedPublicQuery,
+  composePilotPublicSearchQuery,
+  detectPublicResearchIntent,
+  extractPilotProvidedPublicUrls,
+  resolvePublicWebRegistry,
+  PILOT_PUBLIC_QUERY_REF,
+} from "@/domains/conversation/public-web-registry";
+import { authorizePublicWebQuery } from "@/domains/conversation/web-search-authorize";
+import { assertPublicHttpsUrl } from "@/domains/conversation/public-web-search-frontier";
+
+describe("T1.1 — lexical intent does not authorize", () => {
+  it("detectPublicResearchIntent no longer grants true (disabled)", () => {
+    expect(
+      detectPublicResearchIntent(
+        "Recherche la documentation officielle de PostgreSQL",
+      ),
+    ).toBe(false);
+  });
+
+  it("composePilotPublicSearchQuery is disabled", () => {
+    const r = composePilotPublicSearchQuery(
+      "Recherche la documentation officielle HTTP/3",
+    );
+    expect(r.ok).toBe(false);
+  });
+
+  it("registry does not auto-register pilot-public-query from research phrasing", () => {
+    const r = resolvePublicWebRegistry({
+      pilotText:
+        "Recherche la documentation officielle du protocole QUIC sur l'IETF",
+      haystack:
+        "Recherche la documentation officielle du protocole QUIC sur l'IETF",
+      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
+    });
+    expect(r.topics[PILOT_PUBLIC_QUERY_REF]).toBeUndefined();
+    expect(r.limits).toContain("LEXICAL_PILOT_QUERY_REGISTRATION_DISABLED");
+  });
+
+  it("Nora proposed public query can be admitted then authorized", () => {
+    const admitted = admitNoraProposedPublicQuery({
+      proposedQuery: "HTTP/3 site:datatracker.ietf.org",
+    });
+    expect(admitted.ok).toBe(true);
+    if (!admitted.ok) throw new Error(admitted.reason);
+    const auth = authorizePublicWebQuery({
+      publicTopicRef: admitted.ref,
+      turnPublicTopics: { [admitted.ref]: admitted.query },
+      turnAuthorizedExactQueries: [admitted.query],
+    });
+    expect(auth.ok).toBe(true);
+    expect(auth.provenance === "EXPLICIT_AUTHORIZED_EXACT" || auth.provenance === "REGISTERED_PUBLIC_COMPOSITION").toBe(
+      true,
+    );
+  });
+
+  it("proposed query with private marker is refused", () => {
+    const admitted = admitNoraProposedPublicQuery({
+      proposedQuery: "architecture prep_abc123xyz confidential",
+      privateMarkers: ["prep_abc123xyz"],
+    });
+    expect(admitted.ok).toBe(false);
+  });
+
+  it("proposed confidential business cue is refused by sanitize", () => {
+    const admitted = admitNoraProposedPublicQuery({
+      proposedQuery: "notre budget interne vs postgresql docs",
+    });
+    expect(admitted.ok).toBe(false);
+  });
+});
+
+describe("T1.2 — no haystack fallback for pilot provenance", () => {
+  it("absent pilotText does not extract URLs from haystack", () => {
+    const r = resolvePublicWebRegistry({
+      haystack:
+        "checkpoint https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query",
+      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
+    });
+    expect(r.pilotProvidedUrls).toHaveLength(0);
+    expect(r.limits).toContain("PILOT_TEXT_ABSENT_URL_EXTRACTION_CLOSED");
+  });
+
+  it("pilotText extracts candidates but marks not auto-authorized", () => {
+    const url =
+      "https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query";
+    const r = resolvePublicWebRegistry({
+      pilotText: `Compare avec ${url}`,
+      haystack: `Compare avec ${url}`,
+      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
+    });
+    expect(r.pilotProvidedUrls).toContain(url);
+    expect(r.limits).toContain("PILOT_URL_NOT_AUTO_AUTHORIZED");
+  });
+
+  it("strips stale pilot-public-query from prior topics", () => {
+    const r = resolvePublicWebRegistry({
+      priorTopics: {
+        [PILOT_PUBLIC_QUERY_REF]: "old subject site:example.com",
+        "node-lts": "Node.js current LTS version site:nodejs.org",
+      },
+      priorExactQueries: ["old subject site:example.com"],
+      pilotText: "bonjour",
+      haystack: "bonjour node.js lts",
+      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
+    });
+    expect(r.topics[PILOT_PUBLIC_QUERY_REF]).toBeUndefined();
+    expect(r.limits).toContain("STALE_PILOT_PUBLIC_QUERY_STRIPPED");
+    expect(r.topics["node-lts"]).toBeTruthy();
+  });
+});
+
+describe("T1.3 — destination / credential negatives", () => {
+  it("rejects credentials, private IP, CGNAT", () => {
+    expect(assertPublicHttpsUrl("https://user:pass@example.com/a").ok).toBe(false);
+    expect(assertPublicHttpsUrl("https://127.0.0.1/x").ok).toBe(false);
+    expect(assertPublicHttpsUrl("https://100.64.1.1/x").ok).toBe(false);
+    expect(
+      extractPilotProvidedPublicUrls(
+        "voir https://user:secret@evil.test/x et https://192.168.1.1/y",
+      ),
+    ).toEqual([]);
+  });
+});

diff --git a/projects/sfia-studio-next/web/tests/integration/ml5-conserve-only-nominal.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml5-conserve-only-nominal.pg.test.ts
new file mode 100644
index 00000000..c97d0278
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/ml5-conserve-only-nominal.pg.test.ts
@@ -0,0 +1,195 @@
+/**
+ * T2 — conserve-only nominal path through postUserMessageAndNora
+ * (no provider) → D4 v2 persisted with exact candidate bytes.
+ */
+import { describe, expect, it, beforeAll, afterAll } from "vitest";
+import { config } from "dotenv";
+config({ path: ".env.local" });
+
+const prevFixture = process.env.STUDIO_FORCE_NORA_FIXTURE;
+const prevLane = process.env.STUDIO_LANE;
+beforeAll(() => {
+  process.env.STUDIO_LANE = "DEV";
+  process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
+});
+afterAll(() => {
+  if (prevFixture === undefined) delete process.env.STUDIO_FORCE_NORA_FIXTURE;
+  else process.env.STUDIO_FORCE_NORA_FIXTURE = prevFixture;
+  if (prevLane === undefined) delete process.env.STUDIO_LANE;
+  else process.env.STUDIO_LANE = prevLane;
+});
+
+import { db } from "@/db/client";
+import { pilots } from "@/db/schema";
+import { newId } from "@/lib/ids";
+import { contentSha256 } from "@/domains/conversation/document-command";
+import {
+  DOC_CONSERVE_PROPOSAL,
+  stashPendingDocumentCandidate,
+} from "@/domains/conversation/document-candidate";
+import { postUserMessageAndNora } from "@/domains/conversation/service";
+import {
+  getDocumentRevision,
+  listDocumentRevisions,
+  savePreparationDocument,
+} from "@/domains/document/service";
+import {
+  getPreparationContext,
+  openOrCreatePreparation,
+} from "@/domains/preparation/service";
+import { commitTurnTerminal, reserveTurnCommand } from "@/domains/conversation/turn-command";
+
+async function seedPilot(label: string) {
+  const id = newId("pilot");
+  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
+  return id;
+}
+
+describe("T2 conserve-only nominal via postUserMessageAndNora", () => {
+  it(
+    "persists v2 from sealed candidate without provider; v1 retained; refuse bad identity",
+    async () => {
+      const pilotId = await seedPilot("CONSERVE-ONLY");
+      const prep = await openOrCreatePreparation(pilotId);
+      const ctx = await getPreparationContext(pilotId, prep.id);
+      expect(ctx.conversation?.id).toBeTruthy();
+
+      const v1 = await savePreparationDocument(
+        pilotId,
+        prep.id,
+        "Conservable",
+        "# Conservable\n\n## Section 1\n\nAlpha.\n\n## Section 4\n\nAncien contenu.\n",
+      );
+      expect(v1.status).toBe("AVAILABLE");
+      if (v1.status !== "AVAILABLE") throw new Error("v1");
+
+      const reserved = await reserveTurnCommand({
+        conversationId: ctx.conversation!.id,
+        ownerPilotId: pilotId,
+        clientTurnKey: `co-prop-${newId("ck")}`,
+        content: "propose section 4",
+      });
+      if (reserved.kind !== "fresh") throw new Error("expected fresh");
+
+      const candidateBody =
+        "# Conservable\n\n## Section 1\n\nAlpha.\n\n## Section 4\n\nNouveau contenu ciblé.\n";
+      const title = "Conservable";
+      const stashed = await stashPendingDocumentCandidate({
+        commandId: reserved.commandId,
+        ownerToken: reserved.ownerToken,
+        preparationId: prep.id,
+        pilotId,
+        documentId: v1.documentId,
+        sourceRevisionId: v1.revisionId,
+        observedHeadRevisionId: v1.revisionId,
+        title,
+        contentMarkdown: candidateBody,
+      });
+      expect(stashed.ok).toBe(true);
+      if (!stashed.ok) throw new Error(stashed.reason);
+      const candidateSha = stashed.candidate.contentSha256;
+      expect(candidateSha).toBe(contentSha256(title, candidateBody));
+
+      await commitTurnTerminal({
+        commandId: reserved.commandId,
+        ownerToken: reserved.ownerToken,
+        status: "COMPLETE",
+        conversationId: ctx.conversation!.id,
+        assistant: {
+          id: newId("msg"),
+          content: "proposition prête",
+          messageStatus: "COMPLETE",
+          generationId: newId("gen"),
+          ordinal: reserved.ordinalAssistant,
+        },
+        generationId: newId("gen"),
+        resultJson: JSON.stringify({ status: "COMPLETE" }),
+      });
+
+      const before = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
+      const beforeCount = before.revisions?.length ?? 0;
+
+      // Wrong content hash — refuse without mutation.
+      const badHash = await postUserMessageAndNora(
+        pilotId,
+        prep.id,
+        DOC_CONSERVE_PROPOSAL,
+        {
+          documentFocus: {
+            documentId: v1.documentId,
+            sourceRevisionId: v1.revisionId,
+            observedHeadRevisionId: v1.revisionId,
+            conserveProposal: true,
+            pendingCandidateId: stashed.candidate.id,
+            pendingCandidateContentSha256: contentSha256(title, "# forged\n"),
+          },
+        },
+      );
+      expect(badHash.noraMode).toBe("deterministic-fixture");
+      expect(badHash.documentSave?.status).not.toBe("AVAILABLE");
+      expect(badHash.documentSave?.reason).toMatch(/CANDIDATE|SHA|HASH|MISMATCH|NOT_FOUND|REQUIRED/i);
+
+      const mid = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
+      expect(mid.revisions?.length ?? 0).toBe(beforeCount);
+
+      const conserved = await postUserMessageAndNora(
+        pilotId,
+        prep.id,
+        DOC_CONSERVE_PROPOSAL,
+        {
+          documentFocus: {
+            documentId: v1.documentId,
+            sourceRevisionId: v1.revisionId,
+            observedHeadRevisionId: v1.revisionId,
+            conserveProposal: true,
+            pendingCandidateId: stashed.candidate.id,
+            pendingCandidateContentSha256: candidateSha,
+          },
+        },
+      );
+
+      expect(conserved.noraMode).toBe("deterministic-fixture");
+      expect(conserved.documentSave?.status).toBe("AVAILABLE");
+      expect(conserved.documentSave?.act).toBe("REVISE");
+      const newRevId = conserved.documentSave?.revisionId;
+      expect(newRevId).toBeTruthy();
+
+      const after = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
+      expect(after.revisions?.length ?? 0).toBe(beforeCount + 1);
+
+      const v2 = await getDocumentRevision(pilotId, prep.id, v1.documentId, newRevId!);
+      expect(v2.status).toBe("AVAILABLE");
+      if (v2.status !== "AVAILABLE") throw new Error("v2 load");
+      expect(v2.revision.contentMarkdown).toBe(candidateBody);
+
+      const stillV1 = await getDocumentRevision(
+        pilotId,
+        prep.id,
+        v1.documentId,
+        v1.revisionId,
+      );
+      expect(stillV1.status).toBe("AVAILABLE");
+      if (stillV1.status !== "AVAILABLE") throw new Error("v1 load");
+      expect(stillV1.revision.contentMarkdown).toContain("Ancien contenu");
+
+      // Consumed candidate — second conserve must not write again.
+      const repeat = await postUserMessageAndNora(
+        pilotId,
+        prep.id,
+        DOC_CONSERVE_PROPOSAL,
+        {
+          documentFocus: {
+            documentId: v1.documentId,
+            sourceRevisionId: v1.revisionId,
+            observedHeadRevisionId: newRevId!,
+            conserveProposal: true,
+            pendingCandidateId: stashed.candidate.id,
+            pendingCandidateContentSha256: candidateSha,
+          },
+        },
+      );
+      expect(repeat.documentSave?.status).not.toBe("AVAILABLE");
+    },
+    30_000,
+  );
+});

```

## 10. Contrôles

- vitest T1 + residual + c24 + documents-p0-auth-candidate PASS
- PG ml5-conserve-only-nominal + documents-proposal-candidate PASS
- next build OK; next start :3100 Ready
- RECETTE :3200 still `_ZDI1cWa1hscluvBhaiA4`

## 11. Fake/Real

| Frontière | Mode | Claim |
|---|---|---|
| WEB admission | unit | VERIFIED_TECHNICALLY |
| WEB LIVE | flags off here | NOT READY FOR REAL |
| Conserve D4 | PG DEV real | VERIFIED_TECHNICALLY |
| Build | next build | VERIFIED_TECHNICALLY |

## 12. Manifeste candidat

| Champ | Valeur |
|---|---|
| Candidate SHA | *(post-commit)* |
| Candidate tree | *(post-commit)* |
| Web tree | *(post-commit)* |
| Build DEV | `prUUuYxFrKalrxiMsKoc4` |
| Digest | `44d00186941598b86c4102ab37291b1c006760a36bf194a1afa8ace2a7849d0f` |
| Migrations | aucune |
| RECETTE | inchangée `7f48daa2` / `_ZDI1cWa1hscluvBhaiA4` |
| Rollback | conserver RECETTE actuel |
| Capacités | B1 semantic admit; conserve-only; activity/UX préservés |
| Bloquées | WEB LIVE sans flags; F2 |

## 13. Couverture

UAT-17/18 T1; UAT-15 T2; build identity T3.

## 14. Réserves / décisions Morris

- GO bascule RECETTE distinct
- WEB LIVE activation = décision Morris + flags
- F2 / UX qualité = recette utilisateur

## 15. Verdict

**NORA COGNITIVE EXPERIENCE — READY FOR RECETTE CUTOVER REVIEW**

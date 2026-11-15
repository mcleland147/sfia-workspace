# SFIA Review Pack FULL — ML4C REVISE fence title provenance reserves

## A. GO / cycle / profil / date
- Date : 2026-11-15 06:23:20 CET
- GO Morris : 15 novembre 2026 — clôture réserves intégrité REVISE D4
- Cycle projet 6 — Delivery / qualification corrective
- Profil CRITICAL — RUN / INC borné
- Produit : `projects/sfia-studio-next/` R5 / ML4C
- Classification : PATCH corrective candidate — 0.0.0-dev — NO RELEASE — STABLE NOT AVAILABLE
- LIVE : NOT RUN (ce cycle)
- Interdit : push produit, PR, merge, RECETTE, ML4C ACCEPTED / Gate C CLOSED

## B. Git Truth initial / final
### Initial
| Champ | Valeur |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` |
| branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD | `c777358eacefa94c33b04a4d590ce9da7a8c525c` |
| tree | `54e45e8c66e3167f051b53c102d016d5a5ffaf92` |
| parent | `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` |
| dirty | `.tmp-sfia-review/chatgpt-review.md` seul |
| main distant | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| handoff distant | `37dea98c125e68afe49224187fb277bda6448fa8` blob `b892e70d` |
| PR #676 | OPEN / NOT MERGED @ `67bf6b0b…` |

### Final
| Champ | Valeur |
| --- | --- |
| HEAD | `11f7077edd08f1a0c680b6b920f20dbaf76c7bed` |
| tree | `71e052cf53232c70153a6056d948b97fb401b175` |
| parent | `c777358eacefa94c33b04a4d590ce9da7a8c525c` |
| message | `fix(next): preserve explicit fence title in document admission` |
| push produit | NON |

## C. Sources Git / refs / blobs
- Conception corrective : `c883db07` (docs/next-ml4c-d4-continuity…)
- ENV-01 main blob `14b61f0d…` ; versioning blob `8bc93e0f…`
- Handoff précédent : `37dea98c` / `b892e70d`
- Exécutable avant cycle : `c777358e` (vérifié)

## D. ENV-01
| Lane | Port / DB | Mutation ce cycle |
| --- | --- | --- |
| DEV | `:3100` / `sfia_next_dev@:5433` | aucune (LIVE NOT RUN) |
| E2E | `:3101` / `sfia_next_e2e` | Playwright ciblé |
| RECETTE | `:3200` / `sfia_next_recette_ml4@:5434` | **aucune** |

## E. Audit du parsing
| Cas | parseFenceMeta | title extrait | titleProvenance (après fix) |
| --- | --- | --- | --- |
| A LEGACY sans tokens | LEGACY | sentinel ou H1 | LEGACY_UNTITLED / LEGACY_H1 |
| B STRUCTURED title-b64 | STRUCTURED | titre décodé | STRUCTURED |
| C triad chars/pair | STRUCTURED ou INVALID | — | — |
| D STRUCTURED titre=`Document Nora` | STRUCTURED | Document Nora | STRUCTURED |
| E STRUCTURED autre titre | STRUCTURED | autre | STRUCTURED |
| F metadata malformée | INVALID | — | extract FAIL |

Informations perdues avant fix : le kind STRUCTURED/LEGACY n’était pas porté sur `DocumentProposalExtract` ; seul le texte de titre survivait → confusion sentinel / titre déclaré.

## F. Qualification provenance titre
1. Absence de titre contractuel déclaré → LEGACY + pas de `# H1` → `LEGACY_UNTITLED`.
2. Titre synthétisé par extracteur → sentinel `Document Nora` uniquement dans ce cas.
3. Titre réellement déclaré en metadata → `STRUCTURED` (même si texte = sentinel).
4. H1 documentaire LEGACY → `LEGACY_H1`.
5. Contenu + empreinte : inchangés ; confrontation reste octet/caractère stricte hors LF structurel.

## G. Reproduction négative AVANT patch
Authority title = `Options de solution DEV LIVE` ; body sectionnel exact.
Fence STRUCTURED `title-b64=Document Nora` + même corps ; `sectionScoped=true`.

Avant correctif (@ `c777358e`) :
- `parseFenceMeta` → STRUCTURED
- extract title = `Document Nora`, pas de H1
- `isLegacyUntitledSectionFence` → **true** (texte seul)
- `confrontProposalWithFence(..., {sectionScoped:true})` → **`{ ok: true }`** — FAILLE

Après correctif (@ `11f7077e`) :
- `titleProvenance` = `STRUCTURED`
- `isLegacyUntitledSectionFence` → **false**
- confront → **`PROPOSAL_SOURCE_CONFLICT`**

LEGACY réellement sans titre : toujours ADMIT sous sectionScoped.

## H. Analyse de risque
Sévérité : CRITICAL pour intégrité source — une concurrente explicitement titrée sentinel pouvait être admise.
Portée : pré-admission confront uniquement ; pas de schéma / S05 / D4 owner.
Blast : CREATE non sectionné déjà strict ; REVISE LEGACY LIVE-03 path conservé.

## I. Correctif et justification
- Ajout interne `titleProvenance` sur extract réussi.
- Exception sectionScoped uniquement si provenance `LEGACY_UNTITLED`.
- Provenance absente → fail-closed.
- Pas de nouveau format public de fence ; réutilise parseFenceMeta existant.
- service.ts : snapshot obs CREATE sans fence porte `STRUCTURED` (titre d’autorité explicite).

## J. Diff code complet utile

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index e870a55f..3ca58197 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -537,11 +537,22 @@ function matchSectionSpans(spans: SectionSpan[], hint: string): SectionSpan[] {
  * outer contractual fence; truncated or unclosed proposals are refused.
  * No lexical scrubbing of legitimate métier wording.
  */
+/**
+ * Internal parsing provenance of the extracted title — not a durable business field.
+ * Distinguishes structured metadata titles from LEGACY H1 / untitled sentinel synthesis.
+ */
+export type DocumentProposalTitleProvenance =
+  | "STRUCTURED"
+  | "LEGACY_H1"
+  | "LEGACY_UNTITLED";
+
 export type DocumentProposalExtract =
   | {
       ok: true;
       content: string;
       title: string;
+      /** How the title was obtained from the fence source. */
+      titleProvenance: DocumentProposalTitleProvenance;
       path: "fence";
       fenceTag: string;
       fenceCount: 1;
@@ -901,6 +912,7 @@ export function extractContractualDocumentProposal(
       ok: true,
       content,
       title,
+      titleProvenance: "STRUCTURED",
       path: "fence",
       fenceTag: DOCUMENT_PROPOSAL_TAG,
       fenceCount: 1,
@@ -916,10 +928,12 @@ export function extractContractualDocumentProposal(
     return failProposal("DOCUMENT_PROPOSAL_EMPTY", "empty", 1, content);
   }
   const titleLine = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
+  const title = titleLine || LEGACY_UNTITLED_DOCUMENT_TITLE;
   return {
     ok: true,
     content,
-    title: titleLine || LEGACY_UNTITLED_DOCUMENT_TITLE,
+    title,
+    titleProvenance: titleLine ? "LEGACY_H1" : "LEGACY_UNTITLED",
     path: "fence",
     fenceTag: DOCUMENT_PROPOSAL_TAG,
     fenceCount: 1,
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
index 2c012fd0..ae7a5842 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
@@ -281,13 +281,17 @@ export function hasDocumentLevelH1(content: string): boolean {
 }

 /**
- * LEGACY fence that never claimed a document title — only the sentinel.
- * Section-scoped REVISE proposals legitimately lack a document H1.
+ * LEGACY fence that never claimed a document title — only the untitled sentinel.
+ * Requires parser provenance `LEGACY_UNTITLED`: a STRUCTURED fence whose title
+ * text equals the sentinel is an explicit title claim and must not qualify.
+ * Missing provenance fails closed (no exception).
  */
 export function isLegacyUntitledSectionFence(extracted: {
   title: string;
   content: string;
+  titleProvenance?: "STRUCTURED" | "LEGACY_H1" | "LEGACY_UNTITLED";
 }): boolean {
+  if (extracted.titleProvenance !== "LEGACY_UNTITLED") return false;
   return (
     extracted.title === LEGACY_UNTITLED_DOCUMENT_TITLE &&
     !hasDocumentLevelH1(extracted.content)
@@ -356,6 +360,8 @@ export function confrontProposalWithFence(
     ok: true;
     title: string;
     content: string;
+    /** Present when extracted via parseur ; absent → no sectionScoped untitled exception. */
+    titleProvenance?: "STRUCTURED" | "LEGACY_H1" | "LEGACY_UNTITLED";
   },
   options?: ConfrontProposalFenceOptions,
 ):
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 5328ba58..8bcc322f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -1529,6 +1529,8 @@ export async function postUserMessageAndNora(
                     ok: true,
                     content: exact.contentMarkdown,
                     title: exact.title,
+                    // Obs-only snapshot of authority proposal — explicit title, never LEGACY_UNTITLED.
+                    titleProvenance: "STRUCTURED" as const,
                     path: "fence",
                     fenceTag: "sfia-document",
                     fenceCount: 1,

```

## K. Diff tests complet utile

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
index 396d566e..2eb549d9 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
@@ -40,6 +40,7 @@ import { getConversationId, postUserMessageAndNora } from "@/domains/conversatio
 import {
   canonicalizeDocumentProposal,
   contentSha256,
+  encodeTitleB64,
   serializeProposalFence,
   admitDocumentCommand,
   resolveAssistantProposal,
@@ -48,7 +49,10 @@ import {
   loadSealedDocumentBinding,
 } from "@/domains/conversation/document-command";
 import { reserveTurnCommand, turnRaceHooks } from "@/domains/conversation/turn-command";
-import { extractContractualDocumentProposal } from "@/domains/conversation/document-act";
+import {
+  extractContractualDocumentProposal,
+  LEGACY_UNTITLED_DOCUMENT_TITLE,
+} from "@/domains/conversation/document-act";
 import { getDocumentRevision, listDocuments, savePreparationDocument } from "@/domains/document/service";
 import {
   SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
@@ -1667,4 +1671,86 @@ Old B.
       delete turnRaceHooks.replaceNoraAssistantText;
     }
   });
+
+  it("P05: STRUCTURED title-b64=Document Nora with matching body → PROPOSAL_SOURCE_CONFLICT, zero D4", async () => {
+    const pilotId = await seedPilot("ml4c-p05-struct-sentinel");
+    const prep = await openOrCreatePreparation(pilotId);
+    const title = "Options de solution DEV LIVE";
+    const v1Body = `# ${title}
+
+## Option A
+
+KEEP-A
+
+## Option B
+
+Old B.
+`;
+    const created = await savePreparationDocument(pilotId, prep.id, title, v1Body);
+    expect(created.status).toBe("AVAILABLE");
+    if (created.status !== "AVAILABLE" || !created.documentId) throw new Error("v1");
+
+    const sectionBody = "## Option B\n\nAuthority body exact.\n";
+    const utterance = `ML4C-P05-STRUCT-${Date.now()} — révise Option B du document ${created.documentId}`;
+    registerExplicitFixture(utterance, {
+      kind: "qualification",
+      q: {
+        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+        status: "QUALIFIED",
+        goal: "réviser avec fence structurée sentinel",
+        intents: [
+          {
+            id: "i-d4-revise",
+            capabilityId: "d4.revise_document",
+            mode: "REQUEST_EFFECT",
+            summary: "revise P05",
+            parameters: {
+              documentHint: created.documentId,
+              sectionHint: "Option B",
+            },
+            constraints: [],
+            dependsOn: [],
+            sourceEvidence: [],
+          },
+        ],
+        clarifications: [],
+        replyDraft: "Fence structurée contradictoire.",
+        documentProposal: { title, contentMarkdown: sectionBody },
+      },
+    });
+
+    const sentinel = LEGACY_UNTITLED_DOCUMENT_TITLE;
+    const digest = contentSha256(sentinel, sectionBody);
+    const info = `sfia-document title-b64=${encodeTitleB64(sentinel)} chars=${sectionBody.length} pair-sha256=${digest}`;
+    turnRaceHooks.replaceNoraAssistantText = () =>
+      "```" + info + "\n" + sectionBody + "\n```\n";
+    try {
+      const parsed = extractContractualDocumentProposal(
+        "```" + info + "\n" + sectionBody + "\n```\n",
+      );
+      expect(parsed.ok).toBe(true);
+      if (!parsed.ok) throw new Error(parsed.reason);
+      expect(parsed.titleProvenance).toBe("STRUCTURED");
+      expect(parsed.title).toBe(sentinel);
+
+      const before = (
+        await db
+          .select({ n: sql<number>`count(*)`.mapWith(Number) })
+          .from(documentRevisions)
+          .where(eq(documentRevisions.documentId, created.documentId!))
+      )[0]?.n;
+      const chat = await noraTurn(pilotId, prep.id, utterance);
+      expect(chat.documentSave?.status).toBe("NOT_EXECUTED");
+      expect(chat.documentSave?.reason).toBe("PROPOSAL_SOURCE_CONFLICT");
+      const after = (
+        await db
+          .select({ n: sql<number>`count(*)`.mapWith(Number) })
+          .from(documentRevisions)
+          .where(eq(documentRevisions.documentId, created.documentId!))
+      )[0]?.n;
+      expect(after).toBe(before);
+    } finally {
+      delete turnRaceHooks.replaceNoraAssistantText;
+    }
+  });
 });
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/tests/unit/confront-proposal-fence.test.ts b/projects/sfia-studio-next/web/tests/unit/confront-proposal-fence.test.ts
index aca70ce2..0fc00692 100644
--- a/projects/sfia-studio-next/web/tests/unit/confront-proposal-fence.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/confront-proposal-fence.test.ts
@@ -3,9 +3,11 @@ import {
   canonicalizeDocumentProposal,
   confrontProposalWithFence,
   contentSha256,
+  encodeTitleB64,
   hasDocumentLevelH1,
   isLegacyUntitledSectionFence,
   isStructuralFenceSeparatorOnly,
+  parseFenceMeta,
   serializeProposalFence,
 } from "@/domains/conversation/document-command";
 import {
@@ -166,13 +168,15 @@ SOURCE-CANARI-BETA-73
 À préciser.
 `;

-  it("R01/R12: LIVE-03 shapes — LEGACY untitled + structural LF → admit when sectionScoped", () => {
+  it("P01/R01/R12: LIVE-03 shapes — LEGACY untitled + structural LF → admit when sectionScoped", () => {
     const authority = authorityOf(docTitle, sectionBody);
     const assistant = `Modification Option B.\n\n\`\`\`sfia-document\n${sectionBody}\n\`\`\`\n`;
     const extracted = extractContractualDocumentProposal(assistant);
     expect(extracted.ok).toBe(true);
     if (!extracted.ok) throw new Error(extracted.reason);
     expect(extracted.title).toBe(LEGACY_UNTITLED_DOCUMENT_TITLE);
+    expect(extracted.titleProvenance).toBe("LEGACY_UNTITLED");
+    expect(parseFenceMeta("sfia-document").kind).toBe("LEGACY");
     expect(hasDocumentLevelH1(extracted.content)).toBe(false);
     expect(isLegacyUntitledSectionFence(extracted)).toBe(true);
     expect(extracted.content).toBe(`${sectionBody}\n`);
@@ -182,6 +186,74 @@ SOURCE-CANARI-BETA-73
     ).toEqual({ ok: true, materialize: false });
   });

+  it("P05: STRUCTURED title-b64=Document Nora ≠ authority → REFUS via real parser", () => {
+    const authority = authorityOf(docTitle, sectionBody);
+    const sentinel = LEGACY_UNTITLED_DOCUMENT_TITLE;
+    const digest = contentSha256(sentinel, sectionBody);
+    const info = `sfia-document title-b64=${encodeTitleB64(sentinel)} chars=${sectionBody.length} pair-sha256=${digest}`;
+    expect(parseFenceMeta(info).kind).toBe("STRUCTURED");
+    const fence = "```" + info + "\n" + sectionBody + "\n```\n";
+    const extracted = extractContractualDocumentProposal(fence);
+    expect(extracted.ok).toBe(true);
+    if (!extracted.ok) throw new Error(extracted.reason);
+    expect(extracted.title).toBe(sentinel);
+    expect(extracted.titleProvenance).toBe("STRUCTURED");
+    expect(hasDocumentLevelH1(extracted.content)).toBe(false);
+    expect(isLegacyUntitledSectionFence(extracted)).toBe(false);
+    expect(
+      confrontProposalWithFence(authority, extracted, { sectionScoped: true }),
+    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
+  });
+
+  it("P06: STRUCTURED explicit other title → REFUS", () => {
+    const authority = authorityOf(docTitle, sectionBody);
+    const other = "Titre concurrent";
+    const digest = contentSha256(other, sectionBody);
+    const info = `sfia-document title-b64=${encodeTitleB64(other)} chars=${sectionBody.length} pair-sha256=${digest}`;
+    const extracted = extractContractualDocumentProposal(
+      "```" + info + "\n" + sectionBody + "\n```\n",
+    );
+    expect(extracted.ok).toBe(true);
+    if (!extracted.ok) throw new Error(extracted.reason);
+    expect(extracted.titleProvenance).toBe("STRUCTURED");
+    expect(
+      confrontProposalWithFence(authority, extracted, { sectionScoped: true }),
+    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
+  });
+
+  it("P04: STRUCTURED title matching authority admits on exact content", () => {
+    const authority = authorityOf(docTitle, sectionBody);
+    const fence = serializeProposalFence(authority);
+    const extracted = extractContractualDocumentProposal(fence);
+    expect(extracted.ok).toBe(true);
+    if (!extracted.ok) throw new Error(extracted.reason);
+    expect(extracted.titleProvenance).toBe("STRUCTURED");
+    expect(
+      confrontProposalWithFence(authority, extracted, { sectionScoped: true }),
+    ).toEqual({ ok: true, materialize: false });
+  });
+
+  it("missing titleProvenance fails closed for sectionScoped exception", () => {
+    const authority = authorityOf(docTitle, sectionBody);
+    expect(
+      isLegacyUntitledSectionFence({
+        title: LEGACY_UNTITLED_DOCUMENT_TITLE,
+        content: sectionBody,
+      }),
+    ).toBe(false);
+    expect(
+      confrontProposalWithFence(
+        authority,
+        {
+          ok: true,
+          title: LEGACY_UNTITLED_DOCUMENT_TITLE,
+          content: sectionBody,
+        },
+        { sectionScoped: true },
+      ),
+    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
+  });
+
   it("R02–R05: section merge keeps Option A canari and emits Option B canari", () => {
     const merged = applyTargetedSectionRevision(v1, sectionBody, "Option B");
     expect(merged.ok).toBe(true);

```

## L. As-built — diff historique manquant (c777358e vs a30d47d2)

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
index 837ee641..5657fbc4 100644
--- a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
+++ b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
@@ -402,3 +402,70 @@ blocage global S05. Runtime conforme au contrat S05 actuel.

 - DETERMINISTIC E2E BEHAVIOR only — NORA LIVE NOT PROVEN.
 - USER RECETTE NOT RUN ; ML4C not ACCEPTED ; GATE C not closed.
+
+## DELIV 2026-11-15 — REVISE D4 PROPOSAL_SOURCE_CONFLICT (LIVE-03)
+
+Date: 2026-11-15 ~05:05 CET (Europe/Paris)
+Branche: `fix/next-semantic-intent-convergence-20261112`
+Parent: `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` (LOCAL ONLY)
+Profil: Critical PATCH corrective / NO RELEASE / pas de nouvelle autorité de contenu
+
+### Diagnostic LIVE-03 (lecture seule)
+
+| Champ | Valeur |
+| --- | --- |
+| turn / op / gen | `tcmd_a08cee84…` / `op_73c39114…` / `gen_32a649f2…` |
+| document / base | `doc_c78468e6…` / `drev_1e0061da…` v1 |
+| Qualification | QUALIFIED / REVISE / `sectionHint=Option B` |
+| documentProposal.title | `Options de solution DEV LIVE` |
+| documentProposal.content | `## Option B\n\nÀ préciser.\n\nREVISION-CANARI-GAMMA-91` (len JS 50, sans LF terminal) |
+| Fence | LEGACY `sfia-document` sans meta ; corps = proposition + 1 LF (len 51) |
+| Titre extrait | `Document Nora` (sentinel LEGACY, pas de `# H1`) |
+| documentSave | `NOT_EXECUTED` / `PROPOSAL_SOURCE_CONFLICT` ; zéro écriture D4 |
+| Cause | **CAUSE B** (représentations de portée titre différente) + **CAUSE A** (LF structurel seul sur le corps) |
+
+`isStructuralFenceSeparatorOnly` exigeait l’égalité des titres → le LF structurel n’était jamais admis.
+
+### Correctif minimal
+
+1. Exporter `LEGACY_UNTITLED_DOCUMENT_TITLE` depuis `document-act.ts`.
+2. `confrontProposalWithFence(authority, extracted, { sectionScoped })` :
+   si REVISE + `sectionHint` et fence LEGACY sans H1 documentaire,
+   admettre l’égalité de **contenu** (exacte ou LF structurel seul) en conservant le titre d’autorité.
+3. Câbler `sectionScoped` dans `service.ts` (early confront + chemins REVISE).
+4. Conserver le refus strict pour divergence substantielle, H1 contradictoire, CREATE non scopé, double fence, meta invalide.
+
+### Preuves déterministes
+
+| Couche | Résultat |
+| --- | --- |
+| UNIT | 359 PASS (dont LIVE-03 section-scoped confront) |
+| PG `test:integration` | 470 PASS (dont LIVE-03 R01–R07 AVAILABLE + R11 CONFLICT) |
+| BUILD | PASS |
+| Playwright ciblé | 11 PASS (`document-continuity`, `s05-real-api`, `g4-chat-first-sas`, `s05-independent-pending`) |
+| LIVE Nora | **PROVEN** — 1 soumission DEV `:3100` après restart code |
+| RECETTE | non mutée |
+
+### LIVE REVISE (après correctif)
+
+| Champ | Valeur |
+| --- | --- |
+| Préparation / Pilote | `prep_25257fcb-…` / `pilot_10ad4dd9-…` (Pilot A DEV) |
+| Document | `doc_c78468e6-…` (même id LIVE-02) |
+| Canari | `REVISION-CANARI-DELTA-15` (distinct de GAMMA-91) |
+| noraMode | `openai-agents-sdk-live` |
+| providerContacted | YES |
+| modelRequested | `gpt-6.1-sol` ; modelApplied=UNVERIFIED |
+| profileType | TEST_BOUNDARY |
+| documentSave | AVAILABLE / REVISE / revisionNumber=2 |
+| revisionId | `drev_d05ff434-…` (nouveau) |
+| baseRevisionId | `drev_1e0061da-…` (v1 inchangée) |
+| Option A | `SOURCE-CANARI-BETA-73` conservé exact |
+| Option B | contient `REVISION-CANARI-DELTA-15` |
+| LIVE-03 antérieur | reste NOT_EXECUTED / PROPOSAL_SOURCE_CONFLICT (preuve historique) |
+
+### Réserves
+
+- Pas de softener global de `PROPOSAL_SOURCE_CONFLICT`.
+- Pas de nouvelle machine d’états / schéma / politique S05.
+- ML4C not ACCEPTED ; GATE C not closed ; USER RECETTE NOT RUN.

```

## M. Delivery-history — diff historique manquant (c777358e vs a30d47d2)

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 4568fd28..8270df32 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,25 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-15-ML4C-REVISE-SOURCE-CONFLICT
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-15 ~05:05 CET (Europe/Paris) |
+| Macro-lot | ML4C — Remédiation REVISE D4 `PROPOSAL_SOURCE_CONFLICT` (LIVE-03) |
+| Type | PATCH corrective Critical (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` |
+| Parent tip | `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` (LOCAL ONLY) |
+| Design | `c883db07` conception corrective D4 continuité |
+| Prior LIVE handoff | `sfia/review-handoff@7433bdfd` blob `0b1e87c8` |
+| Lane | UNIT/PG DEV ; Playwright E2E `:3101` ; LIVE DEV `:3100` borné ; RECETTE non mutée |
+| Cause | CAUSE B (+ A) — fence LEGACY sans H1 → titre sentinel `Document Nora` ≠ titre document ; LF structurel seul sur le corps |
+| Changes | `confrontProposalWithFence(..., { sectionScoped })` ; constante `LEGACY_UNTITLED_DOCUMENT_TITLE` ; câblage REVISE `service.ts` |
+| Schema | unchanged |
+| Tests | UNIT 359 ; PG 470 ; BUILD PASS ; E2E ciblés 11 PASS ; LIVE REVISE PROVEN (DELTA-15 → v2 AVAILABLE) |
+| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |
+
+
 ## delivery_id: DELIV-2026-11-15-ML4C-S05-BROWSER-ORACLE

 | Field | Value |

```

## N. Nouveaux diffs documentaires (11f7077e vs c777358e)

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
index 5657fbc4..84957dce 100644
--- a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
+++ b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
@@ -469,3 +469,42 @@ Profil: Critical PATCH corrective / NO RELEASE / pas de nouvelle autorité de co
 - Pas de softener global de `PROPOSAL_SOURCE_CONFLICT`.
 - Pas de nouvelle machine d’états / schéma / politique S05.
 - ML4C not ACCEPTED ; GATE C not closed ; USER RECETTE NOT RUN.
+
+## DELIV 2026-11-15 — REVISE fence title provenance (réserve A)
+
+Date: 2026-11-15 ~06:25 CET (Europe/Paris)
+Branche: `fix/next-semantic-intent-convergence-20261112`
+Parent: `c777358eacefa94c33b04a4d590ce9da7a8c525c` (LOCAL ONLY)
+Profil: Critical PATCH corrective / NO RELEASE / LIVE NOT RUN
+
+### Diagnostic (avant correctif)
+
+Fence STRUCTURED avec `title-b64` décodant `Document Nora`, corps sectionnel identique à
+`documentProposal`, `sectionScoped=true` → **ADMIT** (faille).
+
+Cause : `isLegacyUntitledSectionFence` ne distinguait pas titre **déclaré** (STRUCTURED)
+du sentinel **synthétisé** (LEGACY sans H1).
+
+### Correctif
+
+1. `DocumentProposalTitleProvenance` : `STRUCTURED` | `LEGACY_H1` | `LEGACY_UNTITLED`
+   porté par `extractContractualDocumentProposal` (info de parsing interne).
+2. `isLegacyUntitledSectionFence` exige `titleProvenance === "LEGACY_UNTITLED"`
+   (fail-closed si provenance absente).
+3. Tests UNIT P05/P06/P04 + PG P05 (parseur → confront → zéro révision).
+
+### Preuves
+
+| Couche | Résultat |
+| --- | --- |
+| UNIT | 363 PASS |
+| PG | 471 PASS |
+| BUILD | PASS |
+| Playwright ciblé | voir pack |
+| LIVE Nora | NOT RUN (preuve LIVE v2 reste historique sur `c777358e`) |
+| RECETTE | non mutée |
+
+### Réserves
+
+- LIVE comportement du nouveau SHA : non requalifié dans ce cycle.
+- ML4C not ACCEPTED ; GATE C not closed ; USER RECETTE NOT RUN.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 8270df32..583470ff 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,24 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-15-ML4C-REVISE-FENCE-TITLE-PROVENANCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-15 ~06:25 CET (Europe/Paris) |
+| Macro-lot | ML4C — Clôture réserve A : provenance titre fence (STRUCTURED vs LEGACY_UNTITLED) |
+| Type | PATCH corrective Critical (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` |
+| Parent tip | `c777358eacefa94c33b04a4d590ce9da7a8c525c` (LOCAL ONLY) |
+| Prior handoff | `sfia/review-handoff@37dea98c` blob `b892e70d` |
+| Lane | UNIT/PG DEV ; Playwright E2E `:3101` ; LIVE NOT RUN ; RECETTE non mutée |
+| Cause | `isLegacyUntitledSectionFence` s’appuyait sur le texte sentinel seul — une fence STRUCTURED `title-b64=Document Nora` était admise à tort |
+| Changes | `titleProvenance` sur extract ; exception sectionScoped uniquement si `LEGACY_UNTITLED` |
+| Schema | unchanged |
+| Tests | UNIT 363 ; PG 471 ; BUILD PASS ; E2E ciblés 11 PASS ; LIVE NOT RUN |
+| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |
+
+
 ## delivery_id: DELIV-2026-11-15-ML4C-REVISE-SOURCE-CONFLICT

 | Field | Value |

```

## O. Matrice P01–P20
| ID | Attendu | Preuve |
| --- | --- | --- |
| P01 | LEGACY untitled ADMIT | UNIT + PG LIVE-03 |
| P02 | LF structurel ADMIT | UNIT |
| P03 | CREATE sans exception | UNIT |
| P04 | STRUCTURED titre = authority ADMIT | UNIT |
| P05 | STRUCTURED Document Nora REFUS | UNIT + PG orchestration zéro rev |
| P06 | STRUCTURED autre titre REFUS | UNIT |
| P07–P10 | metadata invalide/partielle REFUS | suite document-command existante |
| P11–P15 | corps/LF/H1/double fence REFUS | UNIT + suite |
| P16–P17 | REVISE identité / stale base | PG suite |
| P18 | S05 / D2… | E2E S05 ; code non touché hors allowlist |
| P19–P20 | ACK / zéro écriture sur refus | PG P05 + LIVE-03 conflict |

## P. UNIT / PG / BUILD
- UNIT : **363 PASS**
- PG : **471 PASS**
- BUILD : **PASS**

## Q. E2E ciblés
`document-continuity` + `s05-real-api` + `g4-chat-first-sas` + `s05-independent-pending` → **11 PASS** (:3101).

## R. Non-régressions
- LEGACY untitled section REVISE : ADMIT conservé
- CREATE LEGACY untitled : CONFLICT conservé
- PROPOSAL_SOURCE_CONFLICT pour divergences substantielles : conservé
- S05 E2E : PASS

## S. Fake / Real Qualification
| Couche | Qualif |
| --- | --- |
| UNIT/PG/E2E | FAKE déterministe |
| LIVE ce cycle | NOT RUN |
| LIVE historique `c777358e` | REVISE AVAILABLE v2 (DELTA-15) — **non transféré** au SHA `11f7077e` |

## T. Versioning
0.0.0-dev — NO RELEASE — STABLE NOT AVAILABLE — PATCH corrective candidate.

## U. Git Review Index
| Item | Valeur |
| --- | --- |
| Commit LOCAL | `11f7077edd08f1a0c680b6b920f20dbaf76c7bed` |
| Tree | `71e052cf53232c70153a6056d948b97fb401b175` |
| Parent | `c777358eacefa94c33b04a4d590ce9da7a8c525c` |
| Files | document-act.ts, document-command.ts, service.ts, confront-proposal-fence.test.ts, ml4c-prior-proposal.pg.test.ts, as-built, delivery-history |
| Push produit | NON |
| Handoff | (à vérifier après publish) |

## V. Réserves / dette / exit
- LIVE du nouveau SHA non requalifié (hors GO).
- ML4C ACCEPTED / Gate C : ouverts.
- USER RECETTE NOT RUN.
- Réserve B (diffs docs historiques) : régularisée dans ce pack (§L/§M).

## W. Verdict
**REVISE FENCE METADATA GUARD CORRECTED — DETERMINISTIC COVERAGE GREEN**

- Diagnostic : prouvé (P05 ADMIT avant → CONFLICT après)
- Code modifié : oui
- HEAD final local : `11f7077e`
- Tests exécutés : UNIT 363 / PG 471 / BUILD / E2E 11
- Couverture déterministe : GREEN
- LIVE ancien : historique `c777358e` ; LIVE nouveau SHA : NOT RUN
- Intégrité documentaire : diffs historiques + nouveaux inclus
- Handoff distant : voir publish
- Réserves restantes : LIVE nouveau SHA ; Gate C ; RECETTE

## X. Prochain gate Morris
Décision distincte pour consolidation readiness ML4C / candidat RECETTE — sans acceptation dans ce cycle.

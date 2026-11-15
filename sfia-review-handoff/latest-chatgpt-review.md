# SFIA Review Pack FULL — ML4C REVISE D4 PROPOSAL_SOURCE_CONFLICT remediation

## A. Date / heure
2026-11-15 05:05:05 CET

## B. GO / cycle / profil
- GO Morris : 15 novembre 2026 — remédiation ciblée REVISE D4 LIVE-03
- Cycle projet 6 — Delivery correctif intégré
- Profil CRITICAL — typologie INC / RUN
- Produit : `projects/sfia-studio-next/` — R5 / ML4C
- Classification : PATCH corrective candidate — NO RELEASE — STABLE NOT AVAILABLE
- Interdit : push produit, PR #676, merge, RECETTE, ML4C ACCEPTED / Gate C CLOSED

## C. Git initial / final
### Initial (avant édition)
| Champ | Valeur |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` |
| branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD | `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` |
| tree | `587ea8899550e8ee86376a8de4bb5176b52eaff1` |
| parent | `6c50a1446734341b43a4f110aacde21c727fb2b1` |
| status | clean produit ; `.tmp-sfia-review/chatgpt-review.md` dirty (pack) |
| main distant observé | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| PR #676 HEAD | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` OPEN / NOT MERGED |

### Final
| Champ | Valeur |
| --- | --- |
| HEAD | `c777358eacefa94c33b04a4d590ce9da7a8c525c` |
| tree | `54e45e8c66e3167f051b53c102d016d5a5ffaf92` |
| parent | `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` |
| message | `fix(next): reconcile D4 revise proposal and source contract` |
| push produit | NON |
| dirty hors pack | `.tmp-sfia-review/chatgpt-review.md` seul |

## D. Sources et refs
- Conception corrective : branche `docs/next-ml4c-d4-continuity-corrective-design-20261114` @ `c883db07`
- Handoff LIVE précédent : `sfia/review-handoff@7433bdfd` blob `0b1e87c8`
- Code local HEAD `a30d47d2` prime pour diagnostic/implémentation
- Allowlist respectée : `document-command.ts`, `document-act.ts`, `service.ts` (+ tests + as-built + delivery-history)
- `nora-adapter.ts` : **non modifié** (cause non située)

## E. ENV-01
| Lane | Port | DB | Mutation |
| --- | --- | --- | --- |
| DEV LIVE | `127.0.0.1:3100` | `sfia_next_dev` @ `:5433` | LIVE REVISE borné |
| E2E fixture | `127.0.0.1:3101` | `sfia_next_e2e` | Playwright ciblé |
| RECETTE | `127.0.0.1:3200` | `sfia_next_recette_ml4` @ `:5434` | **aucune** |
| Flags LIVE | `STUDIO_LANE=DEV`, `STUDIO_FORCE_NORA_FIXTURE=0`, `STUDIO_E2E` unset, `SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY` | | |
| Identité LIVE | Pilot A DEV / `pilot_10ad4dd9-…` / `dev-test-login` (pas OAuth proof) | | |

## F. Identités LIVE-03
| Champ | Valeur |
| --- | --- |
| USER | « Révise uniquement la section Option B du document doc_c78468e6-… … REVISION-CANARI-GAMMA-91 » |
| operationId | `op_73c39114-1971-485b-9538-8971933cb468` |
| generationId | `gen_32a649f2-da87-44a8-917b-923322fbf63e` |
| documentId | `doc_c78468e6-6da4-4d0b-a928-99568e10b7af` |
| baseRevisionId | `drev_1e0061da-00a4-41db-8fb3-f60913791e97` v1 |
| prep / pilot | `prep_25257fcb-…` / `pilot_10ad4dd9-…` |
| qualification | QUALIFIED / REVISE / sectionHint=`Option B` |
| documentSource | null (same-turn) |
| documentSave | NOT_EXECUTED / PROPOSAL_SOURCE_CONFLICT |
| effet D4 | AUCUNE écriture ; v1 seule ; canari BETA présent |

## G. Proposition canonique (LIVE-03)
- title : `Options de solution DEV LIVE`
- contentMarkdown : `## Option B\n\nÀ préciser.\n\nREVISION-CANARI-GAMMA-91`
- len JS : 50 ; endsWith LF : false
- SHA-256 contenu : `21024a8824a7092501716fe932fc3947da9a7a1512f76b1ce89361c68fe50497`
- contentSha256 (title\0content) : `862fd540ab2914551aa461c2ce7ca63974fc80fcbf2c320a3e9d8dd74ffb2239`

## H. Fence extraite (LIVE-03)
- kind : LEGACY (pas de title-b64/chars/pair-sha256)
- title extrait : `Document Nora` (sentinel)
- content : proposition + exactement 1 LF terminal
- len JS : 51
- SHA-256 contenu : `b9347e9b11cdf00d24a34b744c0ed33de47a034eb101a5812714d70fad8e798d`
- H1 documentaire (`# …`) : absent ; `## Option B` présent

## I. Matrice de comparaison
| SOURCE A | SOURCE B | IDENTITÉ | CONTENU | EMPREINTE | DIFFÉRENCE | CAUSE | FRONTIÈRE | ACTION | RISQUE RÉSIDUEL |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| documentProposal | fence LEGACY | titres ≠ (`Options…` vs `Document Nora`) | corps ≈ (+1 LF) | SHA ≠ | titre + LF | **B** (+A) | confront pré-admission | sectionScoped LEGACY untitled | CREATE non scopé reste strict |
| proposition | v1 Option B | section cible | fusion OK après admit | — | — | — | applyTargetedSectionRevision | réutiliser | hors cible inchangé |
| fence | document entier | portées ≠ | section vs full | — | — | B | ne pas égaliser aveuglément | sectionScoped only | pas d’égalité sémantique |

## J. Première différence exacte
1. Titre : index 0 — `"Options de solution DEV LIVE"` vs `"Document Nora"`.
2. Contenu : à l’offset 50 — proposition EOF vs fence `\n` (LF structurel unique).

## K. Qualification de la cause
**CAUSE B** (représentations de portée titre différente : titre documentaire d’autorité vs sentinel LEGACY sans H1)
**CAUSE A** secondaire (LF structurel seul sur le corps ; bloqué car `isStructuralFenceSeparatorOnly` exigeait l’égalité des titres).

Non retenues : C (pas de confusion H1 métier — absence de H1), D (pas de divergence substantielle du corps), E (`documentSource` null), F (pas de mutation de sérialisation hors LF fence), G (preuves suffisantes).

## L. Correction retenue
`confrontProposalWithFence(authority, extracted, { sectionScoped })` :
- si `sectionScoped` (REVISE + sectionHint) **et** fence LEGACY sans H1 documentaire (`title === LEGACY_UNTITLED_DOCUMENT_TITLE`),
- admettre égalité de **contenu** exacte ou LF structurel seul (`requireTitleMatch: false`),
- conserver le titre d’autorité ; **ne pas** supprimer `PROPOSAL_SOURCE_CONFLICT` ;
- câblage dans `service.ts` (early + chemins REVISE).

## M. Options écartées
| Option | Motif d’écart |
| --- | --- |
| Softener global / trim / CRLF | Interdit ; affaiblirait CREATE et divergences réelles |
| Changer extract LEGACY pour inventer le titre document | Seconde autorité / conjecture |
| Ignorer la fence | Contournement du garde source |
| Nouvelle meta / schéma / machine d’états | Hors mandat ; PRODUCT CONTRACT |
| Contourner via D4 owner | Contournement propriétaire interdit |

## N. Code modifié — diff complet utile

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index 33b2b447..e870a55f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -571,6 +571,13 @@ export type DocumentProposalExtract =
 /** Sole mutative proposal marker — exact first info-string token (case-insensitive). */
 export const DOCUMENT_PROPOSAL_TAG = "sfia-document";

+/**
+ * LEGACY fence sentinel when the body has no document-level `# H1`.
+ * Not a contractual document title — section-scoped REVISE may ignore it
+ * when comparing against the durable document title on the proposal.
+ */
+export const LEGACY_UNTITLED_DOCUMENT_TITLE = "Document Nora";
+
 type FenceMarker = {
   indent: number;
   char: "`" | "~";
@@ -912,7 +919,7 @@ export function extractContractualDocumentProposal(
   return {
     ok: true,
     content,
-    title: titleLine || "Document Nora",
+    title: titleLine || LEGACY_UNTITLED_DOCUMENT_TITLE,
     path: "fence",
     fenceTag: DOCUMENT_PROPOSAL_TAG,
     fenceCount: 1,
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
index 940f4c7c..2c012fd0 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
@@ -6,7 +6,10 @@ import { createHash } from "node:crypto";
 import { and, eq } from "drizzle-orm";
 import { db } from "@/db/client";
 import { conversationTurnCommands, conversations, messages } from "@/db/schema";
-import { extractContractualDocumentProposal } from "@/domains/conversation/document-act";
+import {
+  extractContractualDocumentProposal,
+  LEGACY_UNTITLED_DOCUMENT_TITLE,
+} from "@/domains/conversation/document-act";
 import {
   stashDocumentCommandBinding,
   type TurnOwnershipFence,
@@ -270,10 +273,32 @@ export function serializeProposalFence(proposal: DocumentProposalExact): string
   return `${ticks}${info}\n${body}${ticks}\n`;
 }

+/**
+ * Document-level `# H1` (single hash + space). `## Section` does not qualify.
+ */
+export function hasDocumentLevelH1(content: string): boolean {
+  return /^#\s+.+$/m.test(content);
+}
+
+/**
+ * LEGACY fence that never claimed a document title — only the sentinel.
+ * Section-scoped REVISE proposals legitimately lack a document H1.
+ */
+export function isLegacyUntitledSectionFence(extracted: {
+  title: string;
+  content: string;
+}): boolean {
+  return (
+    extracted.title === LEGACY_UNTITLED_DOCUMENT_TITLE &&
+    !hasDocumentLevelH1(extracted.content)
+  );
+}
+
 /**
  * P1 — structural fence separator only (serializer contract).
  * True iff extracted body equals canonical body + exactly one trailing LF,
- * titles match, canonical does not already end with LF, and
+ * titles match (unless requireTitleMatch=false for section-scoped LEGACY),
+ * canonical does not already end with LF, and
  * serialize→extract round-trip restores the canonical title/body/digest.
  * Never trims or rewrites content; never accepts any other difference.
  */
@@ -281,9 +306,12 @@ export function isStructuralFenceSeparatorOnly(input: {
   authority: DocumentProposalExact;
   extractedTitle: string;
   extractedContent: string;
+  /** Default true. False only for section-scoped LEGACY untitled fences. */
+  requireTitleMatch?: boolean;
 }): boolean {
   const { authority, extractedTitle, extractedContent } = input;
-  if (extractedTitle !== authority.title) return false;
+  const requireTitleMatch = input.requireTitleMatch !== false;
+  if (requireTitleMatch && extractedTitle !== authority.title) return false;
   if (authority.contentMarkdown.endsWith("\n")) return false;
   if (extractedContent !== `${authority.contentMarkdown}\n`) return false;
   if (contentSha256(extractedTitle, extractedContent) === authority.contentSha256) {
@@ -304,10 +332,20 @@ export function isStructuralFenceSeparatorOnly(input: {
   }
 }

+export type ConfrontProposalFenceOptions = {
+  /**
+   * REVISE with a sectionHint: authority title is the durable document title;
+   * LEGACY fence body may be section-scoped without a document H1, so the
+   * sentinel title is not a contractual identity claim.
+   */
+  sectionScoped?: boolean;
+};
+
 /**
  * P1 — confront authoritative proposal with a concurrent contractual fence.
  * Fence MISSING → materialize; INVALID → refuse; exact match → accept;
  * sole structural LF separator (serializer contract) → accept for canonical rewrite.
+ * Section-scoped: LEGACY untitled fence may match on content (+ structural LF) only.
  */
 export function confrontProposalWithFence(
   authority: DocumentProposalExact,
@@ -319,6 +357,7 @@ export function confrontProposalWithFence(
     title: string;
     content: string;
   },
+  options?: ConfrontProposalFenceOptions,
 ):
   | { ok: true; materialize: boolean }
   | { ok: false; reason: string } {
@@ -345,6 +384,23 @@ export function confrontProposalWithFence(
     // Accept: caller keeps canonical authority; later rewrite uses serializeProposalFence.
     return { ok: true, materialize: false };
   }
+  // LIVE-03 / section REVISE: LEGACY fence without `# H1` synthesizes the
+  // untitled sentinel. Content identity (exact or structural LF) still required.
+  if (options?.sectionScoped && isLegacyUntitledSectionFence(extracted)) {
+    if (extracted.content === authority.contentMarkdown) {
+      return { ok: true, materialize: false };
+    }
+    if (
+      isStructuralFenceSeparatorOnly({
+        authority,
+        extractedTitle: extracted.title,
+        extractedContent: extracted.content,
+        requireTitleMatch: false,
+      })
+    ) {
+      return { ok: true, materialize: false };
+    }
+  }
   return { ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" };
 }

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 234aef23..5328ba58 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -1268,6 +1268,8 @@ export async function postUserMessageAndNora(
   let durableProposal: DocumentProposalExact | null = null;
   /** P1: set when concurrent fence diverges / is invalid — block silent strip+reinject. */
   let proposalAuthorityConflict: string | null = null;
+  const sectionScopedConfront =
+    documentAct.kind === "REVISE" && Boolean(documentAct.sectionHint);
   if (
     reply.status === "COMPLETE" &&
     qualification.documentProposal &&
@@ -1276,7 +1278,9 @@ export async function postUserMessageAndNora(
     const earlyCanonical = canonicalizeDocumentProposal(qualification.documentProposal);
     if (earlyCanonical.ok) {
       const earlyExtract = extractContractualDocumentProposal(reply.content);
-      const confront = confrontProposalWithFence(earlyCanonical.proposal, earlyExtract);
+      const confront = confrontProposalWithFence(earlyCanonical.proposal, earlyExtract, {
+        sectionScoped: sectionScopedConfront,
+      });
       if (!confront.ok) {
         proposalAuthorityConflict = confront.reason;
         durableProposal = null;
@@ -1602,7 +1606,9 @@ export async function postUserMessageAndNora(
               });
               if (!resolved.ok) reviseBlocked = resolved.reason;
               else {
-                const confront = confrontProposalWithFence(resolved.proposal, extracted);
+                const confront = confrontProposalWithFence(resolved.proposal, extracted, {
+                  sectionScoped: sectionScopedConfront,
+                });
                 if (!confront.ok) {
                   reviseBlocked = confront.reason;
                   proposalAuthorityConflict = confront.reason;
@@ -1624,7 +1630,9 @@ export async function postUserMessageAndNora(
               const canonical = canonicalizeDocumentProposal(qualification.documentProposal);
               if (!canonical.ok) reviseBlocked = canonical.reason;
               else {
-                const confront = confrontProposalWithFence(canonical.proposal, extracted);
+                const confront = confrontProposalWithFence(canonical.proposal, extracted, {
+                  sectionScoped: sectionScopedConfront,
+                });
                 if (!confront.ok) {
                   reviseBlocked = confront.reason;
                   proposalAuthorityConflict = confront.reason;

```

### Source confront (extrait final)

```typescript
export function hasDocumentLevelH1(content: string): boolean {
  return /^#\s+.+$/m.test(content);
}

/**
 * LEGACY fence that never claimed a document title — only the sentinel.
 * Section-scoped REVISE proposals legitimately lack a document H1.
 */
export function isLegacyUntitledSectionFence(extracted: {
  title: string;
  content: string;
}): boolean {
  return (
    extracted.title === LEGACY_UNTITLED_DOCUMENT_TITLE &&
    !hasDocumentLevelH1(extracted.content)
  );
}

/**
 * P1 — structural fence separator only (serializer contract).
 * True iff extracted body equals canonical body + exactly one trailing LF,
 * titles match (unless requireTitleMatch=false for section-scoped LEGACY),
 * canonical does not already end with LF, and
 * serialize→extract round-trip restores the canonical title/body/digest.
 * Never trims or rewrites content; never accepts any other difference.
 */
export function isStructuralFenceSeparatorOnly(input: {
  authority: DocumentProposalExact;
  extractedTitle: string;
  extractedContent: string;
  /** Default true. False only for section-scoped LEGACY untitled fences. */
  requireTitleMatch?: boolean;
}): boolean {
  const { authority, extractedTitle, extractedContent } = input;
  const requireTitleMatch = input.requireTitleMatch !== false;
  if (requireTitleMatch && extractedTitle !== authority.title) return false;
  if (authority.contentMarkdown.endsWith("\n")) return false;
  if (extractedContent !== `${authority.contentMarkdown}\n`) return false;
  if (contentSha256(extractedTitle, extractedContent) === authority.contentSha256) {
    // Exact digest match means no separator-only case (bodies already equal).
    return false;
  }
  try {
    const fence = serializeProposalFence(authority);
    const again = extractContractualDocumentProposal(fence);
    if (!again.ok) return false;
    return (
      again.title === authority.title &&
      again.content === authority.contentMarkdown &&
      contentSha256(again.title, again.content) === authority.contentSha256
    );
  } catch {
    return false;
  }
}

export type ConfrontProposalFenceOptions = {
  /**
   * REVISE with a sectionHint: authority title is the durable document title;
   * LEGACY fence body may be section-scoped without a document H1, so the
   * sentinel title is not a contractual identity claim.
   */
  sectionScoped?: boolean;
};

/**
 * P1 — confront authoritative proposal with a concurrent contractual fence.
 * Fence MISSING → materialize; INVALID → refuse; exact match → accept;
 * sole structural LF separator (serializer contract) → accept for canonical rewrite.
 * Section-scoped: LEGACY untitled fence may match on content (+ structural LF) only.
 */
export function confrontProposalWithFence(
  authority: DocumentProposalExact,
  extracted: {
    ok: false;
    reason: string;
  } | {
    ok: true;
    title: string;
    content: string;
  },
  options?: ConfrontProposalFenceOptions,
):
  | { ok: true; materialize: boolean }
  | { ok: false; reason: string } {
  if (!extracted.ok) {
    if (extracted.reason === "DOCUMENT_PROPOSAL_MISSING") {
      return { ok: true, materialize: true };
    }
    return { ok: false, reason: extracted.reason };
  }
  if (
    extracted.title === authority.title &&
    extracted.content === authority.contentMarkdown &&
    contentSha256(extracted.title, extracted.content) === authority.contentSha256
  ) {
    return { ok: true, materialize: false };
  }
  if (
    isStructuralFenceSeparatorOnly({
      authority,
      extractedTitle: extracted.title,
      extractedContent: extracted.content,
    })
  ) {
    // Accept: caller keeps canonical authority; later rewrite uses serializeProposalFence.
    return { ok: true, materialize: false };
  }
  // LIVE-03 / section REVISE: LEGACY fence without `# H1` synthesizes the
  // untitled sentinel. Content identity (exact or structural LF) still required.
  if (options?.sectionScoped && isLegacyUntitledSectionFence(extracted)) {
    if (extracted.content === authority.contentMarkdown) {
      return { ok: true, materialize: false };
    }
    if (
      isStructuralFenceSeparatorOnly({
        authority,
        extractedTitle: extracted.title,
        extractedContent: extracted.content,
        requireTitleMatch: false,
      })
    ) {
      return { ok: true, materialize: false };
    }
  }
  return { ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" };
}

```

## O. Fichiers créés
Aucun fichier runtime créé. Tests étendus dans fichiers existants.

## P. Tests R01..R28 (couverture)
| ID | Couverture | Résultat |
| --- | --- | --- |
| R01 | UNIT LIVE-03 sectionScoped admit + PG AVAILABLE | PASS |
| R02 | UNIT merge Option B seule | PASS |
| R03 | UNIT/PG Option A BETA conservé | PASS |
| R04 | PG canari section (GAMMA fixture / DELTA LIVE) | PASS |
| R05 | PG v1 AVAILABLE intacte | PASS |
| R06 | PG documentId inchangé | PASS |
| R07 | PG revisionId nouveau après AVAILABLE | PASS |
| R08 | PG existants baseRevision stale CONFLICT | covered suite |
| R09–R11 | UNIT titres/H1/corps divergent → CONFLICT | PASS |
| R12 | UNIT LF structurel sectionScoped | PASS |
| R13–R14 | UNIT 2e LF / whitespace → CONFLICT | PASS |
| R15–R17 | suite existante fences/meta/source | non régressé |
| R18–R20 | suite identité/idempotence/négatif | non régressé |
| R21–R22 | CREATE sas/projet via suite PG/E2E | non régressé |
| R23–R24 | S05 E2E real-api | PASS |
| R25 | autorités D2/D5… inchangées (pas de patch) | PASS |
| R26–R28 | ACK AVAILABLE / NOT_EXECUTED / fence extractable | PASS (UNIT ACK + LIVE ACK) |

## Q. UNIT
`npm run test:unit` → **359 PASS** (48 files).

## R. PostgreSQL
`npm run test:integration` → **470 PASS** (28 files) dont LIVE-03 R01–R07 + R11.

## S. BUILD
`npm run build` → **PASS**.

## T. Browser E2E
Playwright ciblé `:3101` :
`ml4c-document-continuity`, `ml4c-s05-real-api`, `g4-chat-first-sas`, `ml4c-s05-independent-pending`
→ **11 PASS**.

## U. LIVE ciblé (après gates)
| Champ | Valeur |
| --- | --- |
| Soumissions Nora LIVE | **1** (après restart DEV code correctif) |
| Tentative 400 préalable | `text` vs `content` — provider **non** contacté — non comptée |
| Canari | `REVISION-CANARI-DELTA-15` |
| noraMode | `openai-agents-sdk-live` |
| providerContacted | YES |
| modelRequested | `gpt-6.1-sol` |
| modelApplied | UNVERIFIED |
| profileType | TEST_BOUNDARY |
| documentSave | AVAILABLE / REVISE / v2 |
| revisionId | `drev_d05ff434-8b6d-411a-ac06-36b3e7fd5697` |
| baseRevisionId | `drev_1e0061da-…` |
| v1 | BETA présent ; DELTA/GAMMA absents |
| v2 | BETA + DELTA présents ; Option A inchangée |
| operationId | `op_4f456da7-391f-40a1-a883-7badfd2bc28a` |
| generationId | `gen_fa72f637-4bd1-48ad-a86a-ec593c63e4df` |
| assistant sha16 | `1a2f3c3e5ea73190` len 1085 |
| Extrait assistant | La **révision 2** de **« Options de solution DEV LIVE »** est disponible. Sa lecture complète confirme :

- **Titre** : « Options de solution DEV LIVE ». - **Option A** : « SOURCE-CANARI-BETA-73 ». - **Option B** : « À préciser. », puis la phrase exacte **« REVISION-CANARI-DELTA-15 »**.

Source : document \`doc_c78468e6-6da4-4d0b-a928-99568e10b7af\`, révision \`drev_d05ff434-8b6d-411a-ac06-36b3e7fd56… |

## V. Version / fence / provenance
- Versioning produit : `0.0.0-dev` — NO RELEASE
- Fence LEGACY same-turn encore refusée hors `sectionScoped`
- Provenance : SAME_TURN_SNAPSHOT ; pas de source historique requalifiée

## W. Sécurité / autorité / idempotence
- `PROPOSAL_SOURCE_CONFLICT` conservé pour divergences substantielles
- CREATE sans sectionScoped : LEGACY untitled reste CONFLICT (test UNIT)
- D2/D5/D6/D7/D9 / S05 : non modifiés
- Ownership / CAS : non touchés
- RECETTE : non mutée ; aucun push produit

## X. Fake / Real Qualification
| Couche | Qualification |
| --- | --- |
| UNIT/PG/E2E | FAKE / déterministe (fixture Nora) |
| LIVE DEV | REAL provider contacté ; modelApplied reste UNVERIFIED |
| Login | FAKE `dev-test-login` (NOT GitHub OAuth proof) |

## Y. ENV-01 / versioning
Conformité DEV/E2E/RECETTE isolées. Version `0.0.0-dev`. STABLE NOT AVAILABLE.

## Z. Git Review Index
| Item | Valeur |
| --- | --- |
| Commit produit LOCAL | `c777358eacefa94c33b04a4d590ce9da7a8c525c` |
| Tree | `54e45e8c66e3167f051b53c102d016d5a5ffaf92` |
| Parent | `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` |
| Files | document-act.ts, document-command.ts, service.ts, confront-proposal-fence.test.ts, ml4c-prior-proposal.pg.test.ts, as-built…, delivery-history.md |
| Push produit | NON |
| Handoff | voir publication L3 ci-dessous |

### Diff tests

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
index 6bfae5ec..396d566e 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-prior-proposal.pg.test.ts
@@ -1508,4 +1508,163 @@ describe("ML4C prior proposal C-02 / C-03 (PG)", () => {

     expect(admitted.binding.correlationKey).toBe(keyBefore);
   });
+
+  it("LIVE-03/R01–R07: section REVISE with LEGACY untitled fence → AVAILABLE v2, Option A preserved", async () => {
+    const pilotId = await seedPilot("ml4c-live03-revise");
+    const prep = await openOrCreatePreparation(pilotId);
+    const title = "Options de solution DEV LIVE";
+    const v1Body = `# ${title}
+
+## Option A
+
+SOURCE-CANARI-BETA-73
+
+## Option B
+
+À préciser.
+`;
+    const created = await savePreparationDocument(pilotId, prep.id, title, v1Body);
+    expect(created.status).toBe("AVAILABLE");
+    if (created.status !== "AVAILABLE" || !created.documentId || !created.revisionId) {
+      throw new Error("v1 create");
+    }
+    const documentId = created.documentId;
+    const baseRevisionId = created.revisionId;
+
+    const sectionBody = "## Option B\n\nÀ préciser.\n\nREVISION-CANARI-GAMMA-91";
+    const utterance = `ML4C-LIVE03-REVISE-${Date.now()} — révise uniquement la section Option B du document ${documentId}`;
+    registerExplicitFixture(utterance, {
+      kind: "qualification",
+      q: {
+        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+        status: "QUALIFIED",
+        goal: "réviser Option B",
+        intents: [
+          {
+            id: "i-d4-revise",
+            capabilityId: "d4.revise_document",
+            mode: "REQUEST_EFFECT",
+            summary: "revise Option B",
+            parameters: {
+              documentHint: documentId,
+              sectionHint: "Option B",
+            },
+            constraints: [],
+            dependsOn: [],
+            sourceEvidence: [],
+          },
+        ],
+        clarifications: [],
+        replyDraft: "Modification proposée pour Option B.",
+        documentProposal: { title, contentMarkdown: sectionBody },
+      },
+    });
+
+    const legacyFence = "```sfia-document\n" + sectionBody + "\n```\n";
+    turnRaceHooks.replaceNoraAssistantText = () =>
+      `Voici la modification proposée pour **Option B**.\n\n${legacyFence}`;
+    try {
+      const chat = await noraTurn(pilotId, prep.id, utterance);
+      expect(chat.documentSave?.status).toBe("AVAILABLE");
+      expect(chat.documentSave?.act).toBe("REVISE");
+      expect(chat.documentSave?.documentId).toBe(documentId);
+      expect(chat.documentSave?.revisionNumber).toBe(2);
+      expect(chat.documentSave?.baseRevisionId).toBe(baseRevisionId);
+      expect(chat.documentSave?.revisionId).not.toBe(baseRevisionId);
+
+      const v1 = await getDocumentRevision(pilotId, prep.id, documentId, baseRevisionId);
+      expect(v1.status).toBe("AVAILABLE");
+      if (v1.status !== "AVAILABLE") throw new Error("v1");
+      expect(v1.revision.contentMarkdown).toBe(v1Body);
+      expect(v1.revision.contentMarkdown).toContain("SOURCE-CANARI-BETA-73");
+      expect(v1.revision.contentMarkdown).not.toContain("REVISION-CANARI-GAMMA-91");
+
+      const v2 = await getDocumentRevision(
+        pilotId,
+        prep.id,
+        documentId,
+        chat.documentSave!.revisionId!,
+      );
+      expect(v2.status).toBe("AVAILABLE");
+      if (v2.status !== "AVAILABLE") throw new Error("v2");
+      expect(v2.revision.contentMarkdown).toContain("SOURCE-CANARI-BETA-73");
+      expect(v2.revision.contentMarkdown).toContain("REVISION-CANARI-GAMMA-91");
+      expect(v2.revision.contentMarkdown).toMatch(
+        /## Option A\n\nSOURCE-CANARI-BETA-73/,
+      );
+    } finally {
+      delete turnRaceHooks.replaceNoraAssistantText;
+    }
+  });
+
+  it("LIVE-03/R11: section REVISE with divergent LEGACY body → PROPOSAL_SOURCE_CONFLICT, zero write", async () => {
+    const pilotId = await seedPilot("ml4c-live03-conflict");
+    const prep = await openOrCreatePreparation(pilotId);
+    const title = "Options conflit LIVE03";
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
+    const sectionBody = "## Option B\n\nAuthority body.\n";
+    const utterance = `ML4C-LIVE03-CONFLICT-${Date.now()} — révise Option B du document ${created.documentId}`;
+    registerExplicitFixture(utterance, {
+      kind: "qualification",
+      q: {
+        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+        status: "QUALIFIED",
+        goal: "réviser avec fence divergent",
+        intents: [
+          {
+            id: "i-d4-revise",
+            capabilityId: "d4.revise_document",
+            mode: "REQUEST_EFFECT",
+            summary: "revise conflict",
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
+        replyDraft: "Fence divergent.",
+        documentProposal: { title, contentMarkdown: sectionBody },
+      },
+    });
+
+    turnRaceHooks.replaceNoraAssistantText = () =>
+      "```sfia-document\n## Option B\n\nFence divergent body.\n```\n";
+    try {
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
index 7a8a2bd7..aca70ce2 100644
--- a/projects/sfia-studio-next/web/tests/unit/confront-proposal-fence.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/confront-proposal-fence.test.ts
@@ -3,12 +3,17 @@ import {
   canonicalizeDocumentProposal,
   confrontProposalWithFence,
   contentSha256,
+  hasDocumentLevelH1,
+  isLegacyUntitledSectionFence,
   isStructuralFenceSeparatorOnly,
   serializeProposalFence,
 } from "@/domains/conversation/document-command";
 import {
   appendDocumentEffectAck,
+  applyTargetedSectionRevision,
+  assertSectionScope,
   extractContractualDocumentProposal,
+  LEGACY_UNTITLED_DOCUMENT_TITLE,
 } from "@/domains/conversation/document-act";

 function authorityOf(title: string, contentMarkdown: string) {
@@ -147,6 +152,132 @@ describe("P1 confrontProposalWithFence — structural LF", () => {
   });
 });

+describe("LIVE-03 section-scoped REVISE confront", () => {
+  const docTitle = "Options de solution DEV LIVE";
+  const sectionBody = "## Option B\n\nÀ préciser.\n\nREVISION-CANARI-GAMMA-91";
+  const v1 = `# Options de solution DEV LIVE
+
+## Option A
+
+SOURCE-CANARI-BETA-73
+
+## Option B
+
+À préciser.
+`;
+
+  it("R01/R12: LIVE-03 shapes — LEGACY untitled + structural LF → admit when sectionScoped", () => {
+    const authority = authorityOf(docTitle, sectionBody);
+    const assistant = `Modification Option B.\n\n\`\`\`sfia-document\n${sectionBody}\n\`\`\`\n`;
+    const extracted = extractContractualDocumentProposal(assistant);
+    expect(extracted.ok).toBe(true);
+    if (!extracted.ok) throw new Error(extracted.reason);
+    expect(extracted.title).toBe(LEGACY_UNTITLED_DOCUMENT_TITLE);
+    expect(hasDocumentLevelH1(extracted.content)).toBe(false);
+    expect(isLegacyUntitledSectionFence(extracted)).toBe(true);
+    expect(extracted.content).toBe(`${sectionBody}\n`);
+    expect(confrontProposalWithFence(authority, extracted).ok).toBe(false);
+    expect(
+      confrontProposalWithFence(authority, extracted, { sectionScoped: true }),
+    ).toEqual({ ok: true, materialize: false });
+  });
+
+  it("R02–R05: section merge keeps Option A canari and emits Option B canari", () => {
+    const merged = applyTargetedSectionRevision(v1, sectionBody, "Option B");
+    expect(merged.ok).toBe(true);
+    if (!merged.ok) throw new Error(merged.reason);
+    expect(assertSectionScope(v1, merged.content, "Option B")).toEqual({ ok: true });
+    expect(merged.content).toContain("SOURCE-CANARI-BETA-73");
+    expect(merged.content).toContain("REVISION-CANARI-GAMMA-91");
+    expect(merged.content).toMatch(/## Option A[\s\S]*SOURCE-CANARI-BETA-73/);
+  });
+
+  it("R09: different document title with claimed H1 still conflicts under sectionScoped", () => {
+    const authority = authorityOf(docTitle, sectionBody);
+    const other = "# Autre document\n\n## Option B\n\nREVISION-CANARI-GAMMA-91\n";
+    expect(
+      confrontProposalWithFence(
+        authority,
+        { ok: true, title: "Autre document", content: other },
+        { sectionScoped: true },
+      ),
+    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
+  });
+
+  it("R10: H1 that differs from authority title refuses even if body resembles section", () => {
+    const authority = authorityOf(docTitle, `# ${docTitle}\n\n## Option B\n\nx\n`);
+    expect(
+      confrontProposalWithFence(
+        authority,
+        {
+          ok: true,
+          title: "Titre faux",
+          content: "# Titre faux\n\n## Option B\n\nx\n",
+        },
+        { sectionScoped: true },
+      ),
+    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
+  });
+
+  it("R11: substantive body divergence → PROPOSAL_SOURCE_CONFLICT", () => {
+    const authority = authorityOf(docTitle, sectionBody);
+    expect(
+      confrontProposalWithFence(
+        authority,
+        {
+          ok: true,
+          title: LEGACY_UNTITLED_DOCUMENT_TITLE,
+          content: "## Option B\n\nTexte divergent.\n",
+        },
+        { sectionScoped: true },
+      ),
+    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
+  });
+
+  it("R13: second trailing LF is not structural — refuse", () => {
+    const authority = authorityOf(docTitle, sectionBody);
+    expect(
+      confrontProposalWithFence(
+        authority,
+        {
+          ok: true,
+          title: LEGACY_UNTITLED_DOCUMENT_TITLE,
+          content: `${sectionBody}\n\n`,
+        },
+        { sectionScoped: true },
+      ),
+    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
+  });
+
+  it("R14: significant internal whitespace difference refuses", () => {
+    const authority = authorityOf(docTitle, "## Option B\n\nHello  world");
+    expect(
+      confrontProposalWithFence(
+        authority,
+        {
+          ok: true,
+          title: LEGACY_UNTITLED_DOCUMENT_TITLE,
+          content: "## Option B\n\nHello world\n",
+        },
+        { sectionScoped: true },
+      ),
+    ).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
+  });
+
+  it("CREATE path (no sectionScoped): LEGACY untitled still conflicts on title", () => {
+    const authority = authorityOf(docTitle, sectionBody);
+    const extracted = {
+      ok: true as const,
+      title: LEGACY_UNTITLED_DOCUMENT_TITLE,
+      content: `${sectionBody}\n`,
+    };
+    expect(confrontProposalWithFence(authority, extracted)).toEqual({
+      ok: false,
+      reason: "PROPOSAL_SOURCE_CONFLICT",
+    });
+  });
+});
+
 describe("P3 ACK + fence integrity", () => {
   it("QA-06: fence remains extractable after ACK", () => {
     const authority = authorityOf("AckDoc", "# AckDoc\n\nParagraphe un.\n\nParagraphe deux.\n");

```

## AA. Réserves
- ML4C ACCEPTED / Gate C CLOSED : **non déclarés**
- USER RECETTE NOT RUN
- modelApplied=UNVERIFIED
- Une seule soumission LIVE post-fix ; pas de campagne exploratoire

## AB. Verdict
**REVISE SOURCE CONTRACT CORRECTED — LIVE BEHAVIOR PROVEN**

Distinctions :
- IMPLEMENTED : oui
- COVERAGE VERIFIED : oui (UNIT/PG/BUILD/E2E)
- DETERMINISTIC BEHAVIOR PROVEN : oui
- LIVE BEHAVIOR PROVEN : oui
- USER RECETTE NOT RUN : oui

## AC. Gates Morris restants
- Consolidation preuves ML4C (décision distincte)
- Gate C global : OPEN
- Propagation PR #676 / RECETTE : hors GO

# SFIA Review Pack — FULL / Cycle 8
# MACRO-CORRECTIF INTÉGRÉ A+B+D — Parcours documentaire Chat First

**Date:** 2026-11-09 20:05 UTC+01:00
**Profil:** CRITICAL — DELIVERY / IMPLÉMENTATION LOCALE
**GO Morris:** 2026-11-09
**Verdict:** `READY FOR REVIEW — INTEGRATED A+B+D DOCUMENT CORRECTIVE DETERMINISTICALLY VERIFIED LOCALLY`

---

## 1. Git Truth Check

| Élément | Valeur |
|---|---|
| Branche | `fix/next-ml4-chat-first-d4-provenance-20261109` |
| HEAD départ | `8ba777300adebe3ba70ddbe3c386a3ad709034f6` |
| HEAD local final | `9694cc7171006b747dd7f502a1f1ba8b3a0477f3` |
| Tree final | `a683243f01da5952c9fb98c5330ca8243238a6d1` |
| Tree départ | `368159d7e8cdbc0bbb504f87d6deb12c04e6b129` |
| Base macro | `974b0030a94469bef05496151792e8c35a9a83e9` |
| origin/sfia/review-handoff (pré-publish) | `4b5eb51e…` |
| origin/main | `6667a438…` |

Fichiers locaux **exclus** du commit produit (préexistants / hors scope) :
- `projects/.../env01-recette-manifest-ml4-*.md` (untracked)
- `projects/.../web/scripts/github-app-installation-read-qualify.ts` (untracked)
- `projects/.tmp-sfia-review/` (untracked)

---

## 2. Contrat de conception A+B+D (avant code — retenu)

### Responsabilités

| Acteur | Responsabilité |
|---|---|
| Nora | Produire Markdown documentaire **et** narration ; ne jamais certifier la sauvegarde |
| D3 / Studio | Identifier **une** proposition contractuelle ; valider périmètre ; refuser ambiguïté ; composer ACK |
| D4 | Identité, versions, persistance, concurrence, idempotence |
| Restitution | Message fondé sur l'effet D4 réel uniquement |

### Forme admissible de proposition (B)

- **Exactement une** fence fenced-code dont le tag info est `sfia-document` (acceptés aussi `markdown`, `md`).
- Début = ouverture fence ; fin = fermeture fence correspondante.
- Contenu fence = seul input CREATE / REVISE.
- Hors fence = CONVERSATIONAL_EXPLANATION (compte rendu post-exécution, réserves, outils).
- APPLICATIVE_RESULT = uniquement ACK Studio post-transaction.

### Refus sans écriture

- 0 fence → `DOCUMENT_PROPOSAL_MISSING`
- >1 fence → `DOCUMENT_PROPOSAL_AMBIGUOUS`
- fence vide / trop courte → `DOCUMENT_PROPOSAL_EMPTY`
- section ambiguë / scope → raisons existantes (`SECTION_*`)
- **Pas** de fallback_wrap d'un chat arbitraire en REVISE/CREATE

### Règle critique respectée

B n'est **pas** une liste de mots à supprimer. Aucun scrub de « Compte rendu », « hors document », « statut », etc.
Un `### Compte rendu de consultation (provenance)` **dans** la fence est conservé (test dédié).

### Approches écartées

| Approche | Motif d'écart |
|---|---|
| A seule (NL) | Discriminant `4b5eb51e` : scope PASS + pollution CR |
| Regex kill « Compte rendu » | Fragile ; détruit métier légitime |
| Nouveau moteur / table / autorité | Hors mandat ; blast excessif |
| Deuxième service documents | Doublon D4 |

### Compatibilité R2/R4

Même propriétaires D3 conversation + D4 `reviseDocument`/`savePreparationDocument`. Pas de pivot d'autorité.

---

## 3. Correctif A — frontière Markdown

Dans `applyTargetedSectionRevision` : si `extracted.body` n'a pas de NL terminal, ajouter `
` **avant** concaténation du suffixe base. Le suffixe `base.slice(target.end)` reste octet-identique. `assertSectionScope` inchangé et toujours actif.

Preuve : unit — legacy glue sans A échoue ; avec A, `## 3` reste heading ; hors-cible eq.

---

## 4. Correctif B — frontière de contenu

`extractContractualDocumentProposal(assistantText)` remplace `extractDocumentMarkdown` + `fallback_wrap`.

Service CREATE/REVISE : si extract `!ok` → `documentSave FAILED` + **pas** d'appel D4.

Prompt Nora + fixture DET : fence `sfia-document` obligatoire pour production documentaire ; CR conversationnel hors fence.

---

## 5. Correctif D — diagnostic minimal

Événement `d3.turn.document_proposal` via `emitObs` existant.
Meta allowlist étendue : `act`, `extract_path`, `proposal_present`, `fence_count`, `section_count`, `proposal_chars`, `proposal_digest16`, `body_ends_with_nl`, `scope_verdict`, `refuse_code`, `d4_attempted`, `d4_effect`.

Pas de corps documentaire / prompt / secrets.
Panne obs ≠ succès métier.

Discrimination prouvée en PG logs :
- A refuse avant D4 : `refuse_code=DOCUMENT_PROPOSAL_*`, `d4_attempted=false`
- Scope refuse : `scope_verdict=SECTION_SCOPE_*`, `d4_attempted=false`
- Succès : `d4_effect=AVAILABLE`, `d4_attempted=true`
- NOT_FOUND : `refuse_code=REVISE_NOT_FOUND`, `d4_attempted=false`

---

## 6. Preuves avant / après (oracle R06-G)

Entrée structurelle RECOVERED (assainie, sans contenu privé CampusFlow) :
`## 2` + `### Source 1` + `### Source 2` + `### Compte rendu opérationnel — hors document` + corps sans NL.

| Scénario | Scope | Contenu D4 virtuel |
|---|---|---|
| Legacy splice sans NL | FAIL `SECTION_SCOPE_EXCEEDED` | — |
| A seule sur free-text | PASS | Sources **+ CR pollution** |
| Free-text sans fence (B) | — | `DOCUMENT_PROPOSAL_MISSING` (pas d'écriture) |
| A+B fence Sources only, CR hors fence | PASS | Sources 1+2 ; CR exclu ; §3–5 inchangés |

---

## 7. Tests

| Suite | Résultat |
|---|---|
| `document-act.test.ts` | 38 PASS (dont 6 A+B oracle) |
| `ml2-cognition-fixture.test.ts` | 2 PASS |
| `nora-adapter-corrective.test.ts` | 6 PASS |
| `ml4-chat-first-d4-provenance.pg.test.ts` | 9 PASS (DEV `:5433`) |
| `tsc --noEmit` | PASS |

Fake/Real :
- DETERMINISTIC PROVEN (unit + PG DEV)
- LIVE Nora / USER RECETTE / GitHub REAL write : **NOT RUN / NOT PROVEN**
- Fixture fence ≠ RAW LIVE byte-identique

---

## 8. Blast radius / non-régression

- CREATE : désormais exige fence (fixture alignée) ; chatter analytique toujours NONE
- REVISE section : fence + splice A + assertScope
- Full-doc revise path : inchangé structurellement (proposal = fence content ; ACK refuse si présent dans proposal full)
- D6/D7/D8/D9 : non modifiés
- RECETTE : runtime `8ba77730` / `ygu4moVrYUNZPkvprgvB_` ; v1 md5 `de4bd1a6…` ; 0 v2 — **préservé**

---

## 9. Dette / exit

| Dette | Exit |
|---|---|
| LIVE Nora doit respecter la fence | Qualifier en RECETTE sous GO ; obs D distingue MISSING vs SCOPE |
| Anciennes sorties free-text REVISE échoueront (volontaire) | Comportement contractuel ; pas de fallback silencieux |
| digest16 non cryptographique | Suffisant pour corrélation ; pas un secret |

---

## 10. Fichiers du commit produit

Modifiés :
- `web/src/domains/conversation/document-act.ts`
- `web/src/domains/conversation/service.ts`
- `web/src/domains/conversation/nora-adapter.ts`
- `web/src/lib/observability.ts`
- `web/tests/unit/document-act.test.ts`
- `web/tests/unit/ml2-cognition-fixture.test.ts`
- `web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts`
- `construction/integration-git/matrice-acceptation.md` (§29)
- `construction/integration-git/specification-technique.md` (§13)
- `construction/delivery-history.md` (switch 8ba + ABD)

### Diff source (A+B+D code)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index bc3e911e..0fe86da4 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -513,6 +513,111 @@ function matchSectionSpans(spans: SectionSpan[], hint: string): SectionSpan[] {
   );
 }

+/**
+ * Contractual document proposal (B).
+ * Documentary content destined for D4 must appear in exactly one fenced block
+ * tagged `sfia-document`, `markdown`, or `md`. Narration / post-exec CR / ACK
+ * stay outside the fence. No lexical scrubbing of legitimate métier wording.
+ */
+export type DocumentProposalExtract =
+  | {
+      ok: true;
+      content: string;
+      title: string;
+      path: "fence";
+      fenceTag: string;
+      fenceCount: 1;
+      proposalChars: number;
+      proposalDigest16: string;
+      bodyEndsWithNewline: boolean;
+      sectionCount: number;
+    }
+  | {
+      ok: false;
+      reason:
+        | "DOCUMENT_PROPOSAL_MISSING"
+        | "DOCUMENT_PROPOSAL_AMBIGUOUS"
+        | "DOCUMENT_PROPOSAL_EMPTY";
+      path: "none" | "ambiguous" | "empty";
+      fenceCount: number;
+      proposalChars: number;
+      proposalDigest16: string | null;
+      bodyEndsWithNewline: boolean;
+      sectionCount: number;
+    };
+
+const DOCUMENT_PROPOSAL_FENCE_RE =
+  /```(sfia-document|markdown|md)[^\n]*\n([\s\S]*?)```/gi;
+
+function digest16(text: string): string {
+  // Non-reversible short fingerprint for diagnostics — not a content log.
+  let h = 2166136261;
+  for (let i = 0; i < text.length; i++) {
+    h ^= text.charCodeAt(i);
+    h = Math.imul(h, 16777619);
+  }
+  return (h >>> 0).toString(16).padStart(8, "0") + text.length.toString(16).padStart(8, "0");
+}
+
+export function extractContractualDocumentProposal(
+  assistantText: string,
+): DocumentProposalExtract {
+  const matches = [...assistantText.matchAll(new RegExp(DOCUMENT_PROPOSAL_FENCE_RE.source, "gi"))];
+  if (matches.length === 0) {
+    return {
+      ok: false,
+      reason: "DOCUMENT_PROPOSAL_MISSING",
+      path: "none",
+      fenceCount: 0,
+      proposalChars: 0,
+      proposalDigest16: null,
+      bodyEndsWithNewline: false,
+      sectionCount: 0,
+    };
+  }
+  if (matches.length > 1) {
+    return {
+      ok: false,
+      reason: "DOCUMENT_PROPOSAL_AMBIGUOUS",
+      path: "ambiguous",
+      fenceCount: matches.length,
+      proposalChars: 0,
+      proposalDigest16: null,
+      bodyEndsWithNewline: false,
+      sectionCount: 0,
+    };
+  }
+  const fenceTag = (matches[0]![1] ?? "markdown").toLowerCase();
+  // Preserve internal bytes; strip only a single leading newline often introduced after the fence opener.
+  let content = matches[0]![2] ?? "";
+  if (content.startsWith("\n")) content = content.slice(1);
+  if (!content.trim() || content.trim().length < 8) {
+    return {
+      ok: false,
+      reason: "DOCUMENT_PROPOSAL_EMPTY",
+      path: "empty",
+      fenceCount: 1,
+      proposalChars: content.length,
+      proposalDigest16: digest16(content),
+      bodyEndsWithNewline: content.endsWith("\n"),
+      sectionCount: locateSections(content).length,
+    };
+  }
+  const titleLine = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
+  return {
+    ok: true,
+    content,
+    title: titleLine || "Document Nora",
+    path: "fence",
+    fenceTag,
+    fenceCount: 1,
+    proposalChars: content.length,
+    proposalDigest16: digest16(content),
+    bodyEndsWithNewline: content.endsWith("\n"),
+    sectionCount: locateSections(content).length,
+  };
+}
+
 /**
  * Extract replacement body for a target section from Nora's proposal.
  * Refuses conversational dumps that are not a clear section body.
@@ -546,6 +651,8 @@ export function extractProposedSectionBody(
 /**
  * Splice Nora's section body into the base document at exact offsets.
  * Non-target bytes are preserved verbatim (spaces, blank lines, fences).
+ * Corrective A: ensure a line break before the base suffix so the next ATX
+ * heading remains at column 0 — without rewriting the suffix itself.
  */
 export function applyTargetedSectionRevision(
   baseMarkdown: string,
@@ -575,9 +682,12 @@ export function applyTargetedSectionRevision(
   const extracted = extractProposedSectionBody(proposedMarkdown, sectionHint, target.heading);
   if (!extracted.ok) return extracted;

+  // A: body may omit a terminal newline; suffix must keep starting at a line boundary.
+  const body = extracted.body.endsWith("\n") ? extracted.body : `${extracted.body}\n`;
+
   // Keep heading line + everything before bodyStart and everything after end byte-identical.
   const content =
-    baseMarkdown.slice(0, target.bodyStart) + extracted.body + baseMarkdown.slice(target.end);
+    baseMarkdown.slice(0, target.bodyStart) + body + baseMarkdown.slice(target.end);
   return { ok: true, content };
 }

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index ed76e0d6..01f92064 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -102,7 +102,8 @@ const SYSTEM_INSTRUCTIONS = [
   "- Production documentaire: seulement si le Pilote le demande explicitement et positivement.",
   "- Une négation (« ne crée pas », « ne révise pas »), une question informative ou une hypothèse n'autorisent aucune écriture D4.",
   "- Distingue toujours rédaction proposée et sauvegarde confirmée. Tu n'affirmes jamais qu'un document est « enregistré », « non enregistré », créé ou révisé : seul le bloc applicatif D4 post-effet (Résultat applicatif D4) porte cette vérité.",
-  "- Révision ciblée: si le Pilote demande de réviser une section, produis le Markdown avec la section ciblée mise à jour; ne réécris pas les autres sections.",
+  "- Contrat proposition D4: place UNIQUEMENT le Markdown documentaire destiné à D4 dans UNE fence ```sfia-document … ``` (tags `markdown`/`md` acceptés). Hors fence: explications, compte rendu post-exécution, réserves. Une seule fence documentaire par réponse.",
+  "- Révision ciblée: dans la fence, fournis la section demandée mise à jour (titre ATX inclus); ne réécris pas les autres sections; ne place aucun compte rendu opérationnel ni statut transactionnel dans la fence.",
   "- Provenance Git: un SHA de contenu (blob) n'est jamais un SHA de commit; cite blobSha et commitSha séparément lorsqu'ils sont fournis par les outils.",
   "Réponds en français. Markdown utile autorisé (titres, listes, tableaux).",
 ].join("\n");
@@ -243,13 +244,21 @@ async function fixtureReply(
       "sans créer de projet, cycle ni décision.\n";
   }
   if (wantsRevise) {
+    // Contractual fence only — section body for REVISE; narration stays outside.
     body +=
-      "\n---\nDocument révisé proposé (rédaction seule — effet D4 uniquement après confirmation applicative):\n\n" +
-      `# Document révisé\n\n## Section 1 — Contexte\n\nContexte inchangé (fixture).\n\n## Section 2 — Contenu révisé\n\n${input.userText.slice(0, 400)}\n\n## Section 3 — Suite\n\nSuite inchangée (fixture).\n`;
+      "\n---\nProposition documentaire (fence contractuelle — effet D4 uniquement après confirmation applicative):\n\n" +
+      "```sfia-document\n" +
+      `## Section 2 — Contenu révisé\n\n${input.userText.slice(0, 400)}\n` +
+      "```\n\n" +
+      "Compte rendu conversationnel (hors document / hors fence): rédaction proposée ci-dessus; " +
+      "le statut applicatif D4 sera porté uniquement par le bloc Studio post-effet.\n";
   } else if (wantsDoc) {
     body +=
-      "\n---\nDocument proposé (rédaction seule — sauvegarde D4 uniquement après confirmation applicative):\n\n" +
-      `# Synthèse demandée\n\n## Section 1 — Contexte\n\nContexte initial.\n\n## Section 2 — Analyse\n\n${input.userText.slice(0, 400)}\n\n## Section 3 — Suite\n\nPoints ouverts à qualifier.\n`;
+      "\n---\nProposition documentaire (fence contractuelle — sauvegarde D4 uniquement après confirmation applicative):\n\n" +
+      "```sfia-document\n" +
+      `# Synthèse demandée\n\n## Section 1 — Contexte\n\nContexte initial.\n\n## Section 2 — Analyse\n\n${input.userText.slice(0, 400)}\n\n## Section 3 — Suite\n\nPoints ouverts à qualifier.\n` +
+      "```\n\n" +
+      "Commentaire hors fence: proposition prête pour validation applicative Studio.\n";
   }
   if (toolNotes) body += `\n### Outil D4 (fixture)\n${toolNotes}\n`;
   if (know) body += `\n### Contexte D4 pré-sélectionné\n${know.slice(0, 400)}\n`;
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 252cb734..91f93137 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -36,9 +36,11 @@ import {
   appendDocumentEffectAck,
   applyTargetedSectionRevision,
   assertSectionScope,
+  extractContractualDocumentProposal,
   qualifyDocumentAct,
   resolveReviseTarget,
   type DocumentEffectSummary,
+  type DocumentProposalExtract,
 } from "./document-act";

 export async function listMessages(pilotId: string, preparationId: string) {
@@ -51,29 +53,47 @@ export async function listMessages(pilotId: string, preparationId: string) {
     .orderBy(asc(messages.ordinal));
 }

-function extractDocumentMarkdown(
-  assistantText: string,
-  userText: string,
-): {
-  title: string;
-  content: string;
-} | null {
-  const fence = assistantText.match(/```(?:markdown|md)?\n([\s\S]+?)```/i);
-  if (fence?.[1] && fence[1].trim().length > 40) {
-    const body = fence[1].trim();
-    const titleLine = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
-    return { title: titleLine || "Document Nora", content: body };
-  }
-  const heading = assistantText.match(/(^|\n)#\s+[^\n]+[\s\S]{40,}/);
-  if (heading?.[0]) {
-    const body = heading[0].trim();
-    const titleLine = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
-    return { title: titleLine || "Document Nora", content: body };
-  }
-  return {
-    title: "Document demandé",
-    content: `# Document demandé\n\n> Demande: ${userText.slice(0, 300)}\n\n${assistantText}`,
-  };
+function emitDocumentProposalObs(args: {
+  requestId: string;
+  operationId: string;
+  generationId: string | null | undefined;
+  act: "CREATE" | "REVISE";
+  extracted: DocumentProposalExtract;
+  scopeVerdict?: string | null;
+  refuseCode?: string | null;
+  d4Attempted: boolean;
+  d4Effect?: string | null;
+}) {
+  emitObs({
+    event_name: "d3.turn.document_proposal",
+    component: "d3.conversation",
+    request_id: args.requestId,
+    operation_id: args.operationId,
+    generation_id: args.generationId ?? undefined,
+    outcome: args.extracted.ok
+      ? args.refuseCode
+        ? "FAILED"
+        : args.d4Effect === "AVAILABLE"
+          ? "SUCCESS"
+          : args.d4Attempted
+            ? "FAILED"
+            : "PARTIAL"
+      : "FAILED",
+    meta: {
+      act: args.act,
+      extract_path: args.extracted.path,
+      proposal_present: args.extracted.ok,
+      fence_count: args.extracted.fenceCount,
+      section_count: args.extracted.sectionCount,
+      proposal_chars: args.extracted.proposalChars,
+      proposal_digest16: args.extracted.proposalDigest16,
+      body_ends_with_nl: args.extracted.bodyEndsWithNewline,
+      scope_verdict: args.scopeVerdict ?? null,
+      refuse_code: args.refuseCode ?? (args.extracted.ok ? null : args.extracted.reason),
+      d4_attempted: args.d4Attempted,
+      d4_effect: args.d4Effect ?? null,
+    },
+  });
 }

 export type TurnResult = {
@@ -557,8 +577,24 @@ export async function postUserMessageAndNora(
       }

       if (documentAct.kind === "CREATE" && !ownershipLostBeforeD4) {
-        const extracted = extractDocumentMarkdown(reply.content, content);
-        if (extracted) {
+        const extracted = extractContractualDocumentProposal(reply.content);
+        if (!extracted.ok) {
+          documentSave = {
+            status: "FAILED",
+            reason: extracted.reason,
+            act: "CREATE",
+          };
+          emitDocumentProposalObs({
+            requestId,
+            operationId: reserved.operationId,
+            generationId: reply.generationId,
+            act: "CREATE",
+            extracted,
+            refuseCode: extracted.reason,
+            d4Attempted: false,
+            d4Effect: null,
+          });
+        } else {
           try {
             const saved = await savePreparationDocument(
               pilotId,
@@ -596,9 +632,32 @@ export async function postUserMessageAndNora(
               documentSaveUnknown =
                 documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
             }
+            emitDocumentProposalObs({
+              requestId,
+              operationId: reserved.operationId,
+              generationId: reply.generationId,
+              act: "CREATE",
+              extracted,
+              refuseCode:
+                documentSave?.status === "AVAILABLE" || documentSave?.status === "CONFLICT"
+                  ? null
+                  : (documentSave?.reason ?? null),
+              d4Attempted: true,
+              d4Effect: documentSave?.status ?? null,
+            });
           } catch {
             documentSave = { status: "UNKNOWN", reason: "DOCUMENT_SAVE_EXCEPTION", act: "CREATE" };
             documentSaveUnknown = true;
+            emitDocumentProposalObs({
+              requestId,
+              operationId: reserved.operationId,
+              generationId: reply.generationId,
+              act: "CREATE",
+              extracted,
+              refuseCode: "DOCUMENT_SAVE_EXCEPTION",
+              d4Attempted: true,
+              d4Effect: "UNKNOWN",
+            });
             emitObs({
               event_name: "d3.turn.document_save_failed",
               component: "d3.conversation",
@@ -620,71 +679,136 @@ export async function postUserMessageAndNora(
               reason: `REVISE_${target.reason}`,
               act: "REVISE",
             };
+            emitDocumentProposalObs({
+              requestId,
+              operationId: reserved.operationId,
+              generationId: reply.generationId,
+              act: "REVISE",
+              extracted: extractContractualDocumentProposal(reply.content),
+              refuseCode: `REVISE_${target.reason}`,
+              d4Attempted: false,
+              d4Effect: null,
+            });
           } else {
-            const extracted = extractDocumentMarkdown(reply.content, content);
-            const proposed = extracted?.content ?? reply.content;
-            const merged = applyTargetedSectionRevision(
-              target.baseContent,
-              proposed,
-              documentAct.sectionHint,
-            );
-            if (!merged.ok) {
+            const extracted = extractContractualDocumentProposal(reply.content);
+            if (!extracted.ok) {
               documentSave = {
                 status: "FAILED",
-                reason: merged.reason,
+                reason: extracted.reason,
                 documentId: target.documentId,
                 baseRevisionId: target.baseRevisionId,
                 act: "REVISE",
               };
+              emitDocumentProposalObs({
+                requestId,
+                operationId: reserved.operationId,
+                generationId: reply.generationId,
+                act: "REVISE",
+                extracted,
+                refuseCode: extracted.reason,
+                d4Attempted: false,
+                d4Effect: null,
+              });
             } else {
-              const scopeCheck = assertSectionScope(
+              const merged = applyTargetedSectionRevision(
                 target.baseContent,
-                merged.content,
+                extracted.content,
                 documentAct.sectionHint,
               );
-              if (!scopeCheck.ok) {
+              if (!merged.ok) {
                 documentSave = {
                   status: "FAILED",
-                  reason: scopeCheck.reason,
+                  reason: merged.reason,
                   documentId: target.documentId,
                   baseRevisionId: target.baseRevisionId,
                   act: "REVISE",
                 };
+                emitDocumentProposalObs({
+                  requestId,
+                  operationId: reserved.operationId,
+                  generationId: reply.generationId,
+                  act: "REVISE",
+                  extracted,
+                  scopeVerdict: merged.reason,
+                  refuseCode: merged.reason,
+                  d4Attempted: false,
+                  d4Effect: null,
+                });
               } else {
-                const correlationKey = opts?.correlationKey
-                  ? `docrev:${opts.correlationKey}:${target.documentId}:${target.baseRevisionId}`
-                  : `docrev:${reply.generationId}:${target.documentId}:${target.baseRevisionId}`;
-                const revised = await reviseDocument(pilotId, preparationId, {
-                  documentId: target.documentId,
-                  baseRevisionId: target.baseRevisionId,
-                  contentMarkdown: merged.content,
-                  correlationKey,
-                  scope: documentAct.sectionHint ? "section" : "document",
-                  sectionHint: documentAct.sectionHint ?? undefined,
-                  provenance: {
-                    sourceKind: "nora",
+                const scopeCheck = assertSectionScope(
+                  target.baseContent,
+                  merged.content,
+                  documentAct.sectionHint,
+                );
+                if (!scopeCheck.ok) {
+                  documentSave = {
+                    status: "FAILED",
+                    reason: scopeCheck.reason,
+                    documentId: target.documentId,
+                    baseRevisionId: target.baseRevisionId,
+                    act: "REVISE",
+                  };
+                  emitDocumentProposalObs({
+                    requestId,
+                    operationId: reserved.operationId,
                     generationId: reply.generationId,
-                    userMessageId: reserved.userMessageId,
-                    explicitRequest: true,
                     act: "REVISE",
-                    sectionHint: documentAct.sectionHint,
-                  },
-                });
-                documentSave = {
-                  ...revised,
-                  act: "REVISE",
-                  baseRevisionId:
-                    "baseRevisionId" in revised && typeof revised.baseRevisionId === "string"
-                      ? revised.baseRevisionId
-                      : target.baseRevisionId,
-                };
-                if (
-                  documentSave.status !== "AVAILABLE" &&
-                  documentSave.status !== "CONFLICT" &&
-                  !(documentSave.status === "FAILED" && documentSave.idempotentReplay)
-                ) {
-                  documentSaveUnknown =
-                    documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
+                    extracted,
+                    scopeVerdict: scopeCheck.reason,
+                    refuseCode: scopeCheck.reason,
+                    d4Attempted: false,
+                    d4Effect: null,
+                  });
+                } else {
+                  const correlationKey = opts?.correlationKey
+                    ? `docrev:${opts.correlationKey}:${target.documentId}:${target.baseRevisionId}`
+                    : `docrev:${reply.generationId}:${target.documentId}:${target.baseRevisionId}`;
+                  const revised = await reviseDocument(pilotId, preparationId, {
+                    documentId: target.documentId,
+                    baseRevisionId: target.baseRevisionId,
+                    contentMarkdown: merged.content,
+                    correlationKey,
+                    scope: documentAct.sectionHint ? "section" : "document",
+                    sectionHint: documentAct.sectionHint ?? undefined,
+                    provenance: {
+                      sourceKind: "nora",
+                      generationId: reply.generationId,
+                      userMessageId: reserved.userMessageId,
+                      explicitRequest: true,
+                      act: "REVISE",
+                      sectionHint: documentAct.sectionHint,
+                    },
+                  });
+                  documentSave = {
+                    ...revised,
+                    act: "REVISE",
+                    baseRevisionId:
+                      "baseRevisionId" in revised && typeof revised.baseRevisionId === "string"
+                        ? revised.baseRevisionId
+                        : target.baseRevisionId,
+                  };
+                  if (
+                    documentSave.status !== "AVAILABLE" &&
+                    documentSave.status !== "CONFLICT" &&
+                    !(documentSave.status === "FAILED" && documentSave.idempotentReplay)
+                  ) {
+                    documentSaveUnknown =
+                      documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
+                  }
+                  emitDocumentProposalObs({
+                    requestId,
+                    operationId: reserved.operationId,
+                    generationId: reply.generationId,
+                    act: "REVISE",
+                    extracted,
+                    scopeVerdict: "OK",
+                    refuseCode:
+                      documentSave.status === "AVAILABLE" || documentSave.status === "CONFLICT"
+                        ? null
+                        : (documentSave.reason ?? null),
+                    d4Attempted: true,
+                    d4Effect: documentSave.status ?? null,
+                  });
                 }
               }
             }
@@ -706,8 +830,8 @@ export async function postUserMessageAndNora(
             meta: {
               act: "REVISE",
               status: documentSave?.status ?? null,
-              reason: documentSave?.reason ?? null,
-              document_id: documentSave?.documentId ?? null,
+              refuse_code: documentSave?.reason ?? null,
+              d4_effect: documentSave?.status ?? null,
             },
           });
         } catch {
diff --git a/projects/sfia-studio-next/web/src/lib/observability.ts b/projects/sfia-studio-next/web/src/lib/observability.ts
index 805c51ad..894f7d73 100644
--- a/projects/sfia-studio-next/web/src/lib/observability.ts
+++ b/projects/sfia-studio-next/web/src/lib/observability.ts
@@ -89,6 +89,19 @@ const META_ALLOWLIST = new Set([
   "probe",
   "purged",
   "retention_days",
+  // Document proposal diagnostics (A+B+D) — codes/sizes/digests only, never bodies.
+  "act",
+  "extract_path",
+  "proposal_present",
+  "fence_count",
+  "section_count",
+  "proposal_chars",
+  "proposal_digest16",
+  "body_ends_with_nl",
+  "scope_verdict",
+  "refuse_code",
+  "d4_attempted",
+  "d4_effect",
 ]);

 const SECRET_VALUE =

```

---

## 11. Gates

| Gate | Statut |
|---|---|
| 1 Contrat B sans scrub lexical | PASS |
| 2 Reproduction défauts A et pollution | PASS |
| 3 A+B simultanés + D | PASS |
| 4 Non-régression unit/PG | PASS |
| 5 tsc / diff-check / hors-scope exclus | PASS |
| 6 Commit local | (ce cycle) |

---

## 12. Absence d'effets

- Aucun redeploy RECETTE ; aucun restart launcher
- Aucune mutation DB RECETTE ; v1 inchangée
- Aucun Nora LIVE ; aucun GitHub REAL write
- Aucun push branche produit / PR / merge
- STABLE NOT AVAILABLE ; NO RELEASE

---

## 13. Gate Morris suivant

1. Revue ChatGPT du handoff (priorité qualité contrat B)
2. Si favorable : GO Cycle 11 bascule RECETTE sur **nouveau** SHA local
3. Puis seulement : campagne USER R06 (pas dans ce cycle)
4. Interdit d'annoncer R06 PASS / ML4 ACCEPTED ici

**Réserves :** DETERMINISTIC ≠ LIVE. Fence contractuelle requiert discipline Nora en LIVE.

## 14. Commit local

- SHA: `9694cc7171006b747dd7f502a1f1ba8b3a0477f3`
- Tree: `a683243f01da5952c9fb98c5330ca8243238a6d1`
- Message: `fix(studio-next): integrate A+B+D chat-first document proposal boundary`
- Push produit: **AUCUN**

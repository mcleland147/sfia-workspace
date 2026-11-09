# SFIA Review Pack — FULL / Cycle 8
# RÉGULARISATION B — Robustesse frontière documentaire (fences)

**Date:** 2026-11-09 20:25 UTC+01:00
**Profil:** CRITICAL
**GO Morris:** 2026-11-09
**Verdict:** `READY FOR REVIEW — DOCUMENT PROPOSAL BOUNDARY ROBUSTNESS VERIFIED LOCALLY`

---

## 1. Git Truth Check

| Élément | Valeur |
|---|---|
| Branche | `fix/next-ml4-chat-first-d4-provenance-20261109` |
| HEAD départ | `9694cc7171006b747dd7f502a1f1ba8b3a0477f3` |
| HEAD final | `0b02de41cd7e3d08101419b49d6534d12edf70cf` |
| Tree final | `97f236bc3d61fdf317ac4cd3177d23fa49c04262` |
| Tree départ | `a683243f01da5952c9fb98c5330ca8243238a6d1` |
| Parent | `8ba77730…` / base macro `974b0030…` |
| origin/sfia/review-handoff (pré-publish) | `d7a63c57…` |
| origin/main | `6667a438…` |

Hors scope (non commités) : manifests env01 untracked, `github-app-installation-read-qualify.ts`, `projects/.tmp-sfia-review/`.

---

## 2. Anomalie reproduite (avant correctif)

Sur `9694cc71`, regex `/```(sfia-document|markdown|md)[^\n]*\n([\s\S]*?)```/gi` :

| Cas | Résultat OBSERVED |
|---|---|
| Inner ` ```bash ` puis contenu « Après » | Troncature : content s'arrête avant « Après » (`hasApres: false`) |
| Tag `mdx` | Accepté comme `md` |
| Tag `sfia-documentation` | Accepté comme `sfia-document` |
| Fence `markdown` illustrative | Acceptée comme proposition D4 |
| Outer ```` (4 ticks) | EMPTY / incorrect |

---

## 3. Contrat B final

- **Marqueur mutatif unique :** premier token d'info-string **exactement** `sfia-document` (case-insensitive).
- `markdown` / `md` / `mdx` / `sfia-documentation` → **non autorisants** (illustratifs).
- Scanner **ligne par ligne** (indent ≤ 3, ` ` ` ou `~`), fermeture même caractère, longueur ≥ ouverture, info vide.
- **Stack nested** : une fence intérieure (taguée ou plus courte) ne ferme pas la proposition ; refuse plutôt que tronquer silencieusement.
- Cardinalité : 0 → MISSING ; >1 `sfia-document` → AMBIGUOUS ; non fermée → UNCLOSED ; vide → EMPTY.
- Pas de fallback_wrap ; pas de scrub lexical « Compte rendu ».

Justification tags : les alias `markdown`/`md` du cycle précédent créaient des faux positifs démontrés → régularisation bornée vers le marqueur réservé (compatible fixture/prompt déjà `sfia-document`).

---

## 4. Correctif A / D

- **A** : inchangé (NL avant suffixe) — non-régression prouvée.
- **D** : inchangé dans son rôle ; `refuse_code` peut valoir `DOCUMENT_PROPOSAL_UNCLOSED`. `proposal_digest16` reste une empreinte courte de corrélation (pas un log de corps) — risque résiduel de corrélation sur textes courts documenté ; pas de corps privé journalisé.

---

## 5. Tests exécutés (commandes réelles)

```
cd projects/sfia-studio-next/web
npx vitest run tests/unit/document-act.test.ts
# → 65 PASS

npx vitest run tests/unit/ml2-cognition-fixture.test.ts tests/unit/nora-adapter-corrective.test.ts
# → 8 PASS

npx vitest run tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
# → 10 PASS (DEV :5433) dont R06 nested-code

npx vitest run tests/unit/git-file-provenance.test.ts
# → 2 PASS

npx tsc --noEmit
# → PASS

npm run lint
# → exit 0 (warnings préexistants hors périmètre)

env -u NODE_ENV npm run build
# → PASS (Next 15.5.29) — NOTE: NODE_ENV=development dans le shell casse le prerender 404 ; build propre sans NODE_ENV override.
```

---

## 6. Oracle nested-code / R06

- Unit : contenu après ` ```bash ` conservé ; CR hors fence exclu ; scope PASS.
- PG DEV : `reviseDocument` persiste « Après le bloc bash — CONSERVÉ. » ; hors-cible `## 3` intact ; pas de narration hors fence dans D4.

---

## 7. Fake / Real

| Niveau | Statut |
|---|---|
| DETERMINISTIC unit + PG DEV | PROVEN (ce cycle) |
| LIVE Nora | NOT RUN |
| USER RECETTE | NOT RUN |
| GitHub REAL write | NOT RUN |
| RECETTE runtime | INCHANGÉ `8ba77730` / `ygu4moVrYUNZPkvprgvB_` ; v1 `de4bd1a6…` |

---

## 8. Fichiers modifiés (7) — diffs complets

### Diff — `delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 8d80d0cf..cab4d79e 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1200,3 +1200,18 @@ Append-only logical journal of Cursor product deliveries.
 | RECETTE | **inchangée** — SHA `8ba77730` / BUILD `ygu4moVrYUNZPkvprgvB_` ; v1 md5 `de4bd1a6…` ; 0 v2 |
 | Push Product | **AUCUN** |
 | Verdict candidat | `READY FOR REVIEW — INTEGRATED A+B+D DOCUMENT CORRECTIVE DETERMINISTICALLY VERIFIED LOCALLY` |
+
+## delivery_id: DELIV-2026-11-09-ML4-ABD-FENCE-ROBUSTNESS
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-09 ~20:25 CET |
+| Macro-capacité | R5 / ML4 — Régularisation B scanner fences / intégrité Markdown |
+| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` |
+| Parent | `9694cc7171006b747dd7f502a1f1ba8b3a0477f3` |
+| Autorité | Morris GO 2026-11-09 CRITICAL — commit local + handoff L3 ; push Product / RECETTE NON inclus |
+| Changements | `scanContractualDocumentFences` nest-aware ; tag exact `sfia-document` ; tests P/N + oracle nested-code PG |
+| Validations | (voir Review Pack — commandes rejouées) |
+| RECETTE | **inchangée** — `8ba77730` / `ygu4moVrYUNZPkvprgvB_` ; v1 `de4bd1a6…` |
+| Push Product | **AUCUN** |
+| Verdict candidat | `READY FOR REVIEW — DOCUMENT PROPOSAL BOUNDARY ROBUSTNESS VERIFIED LOCALLY` |
```

### Diff — `document-act.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
index a7f9396b..449eccbc 100644
--- a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
@@ -591,11 +591,12 @@ Pour compléter précisément la première source sans supposition, il manque sa
   });

   it("A+B oracle: fenced documentary Sources only → scope PASS, CR excluded, métier kept", () => {
-    // Fence body deliberately omits a terminal newline before the closing fence (A must still protect).
+    // Closer on its own line (required). Body may still omit a final blank line;
+    // A is separately proven with EOF bodies that lack a terminal NL.
     const assistant =
       "Voici la proposition.\n\n```sfia-document\n" +
       documentaryOnly.trimEnd() +
-      "```\n\n" +
+      "\n```\n\n" +
       "### Compte rendu opérationnel — hors document\n\n" +
       "| Élément demandé | État vérifiable |\n|---|---|\n" +
       "| Identifiant du document | `doc_example` |\n" +
@@ -607,7 +608,14 @@ Pour compléter précisément la première source sans supposition, il manque sa
     expect(extracted.content).toContain("### Source 2");
     expect(extracted.content).not.toMatch(/Compte rendu opérationnel/);
     expect(extracted.content).not.toMatch(/doc_example/);
-    expect(extracted.bodyEndsWithNewline).toBe(false);
+
+    // Prove A still protects when proposal body has no terminal NL.
+    const bodyNoNl = extracted.content.replace(/\n+$/, "");
+    expect(bodyNoNl.endsWith("\n")).toBe(false);
+    const mergedNoNl = applyTargetedSectionRevision(campusV1, bodyNoNl, "2");
+    expect(mergedNoNl.ok).toBe(true);
+    if (!mergedNoNl.ok) return;
+    expect(assertSectionScope(campusV1, mergedNoNl.content, "2")).toEqual({ ok: true });

     const merged = applyTargetedSectionRevision(campusV1, extracted.content, "2");
     expect(merged.ok).toBe(true);
@@ -623,9 +631,19 @@ Pour compléter précisément la première source sans supposition, il manque sa
     expect(merged.content).toContain("Provenance disponible");
   });

-  it("B refuses ambiguous dual fences", () => {
+  it("B ignores illustrative markdown fence beside a single sfia-document", () => {
+    const mixed =
+      "```sfia-document\n# A\n\nbody one long enough xx\n```\n\n```markdown\n# Exemple illustratif\n\nbody two\n```";
+    const ex = extractContractualDocumentProposal(mixed);
+    expect(ex.ok).toBe(true);
+    if (!ex.ok) return;
+    expect(ex.content).toContain("body one long enough xx");
+    expect(ex.content).not.toContain("Exemple illustratif");
+  });
+
+  it("B refuses two concurrent sfia-document proposals", () => {
     const dual =
-      "```sfia-document\n# A\n\nbody one long enough xx\n```\n\n```markdown\n# B\n\nbody two long enough yy\n```";
+      "```sfia-document\n# A\n\nbody one long enough xx\n```\n\n```sfia-document\n# B\n\nbody two long enough yy\n```";
     const ex = extractContractualDocumentProposal(dual);
     expect(ex.ok).toBe(false);
     if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_AMBIGUOUS");
@@ -655,4 +673,234 @@ Pour compléter précisément la première source sans supposition, il manque sa
     const idx = merged.content.indexOf("## 3. Enseignements utiles");
     expect(merged.content.slice(idx - 1, idx)).toBe("\n");
   });
+
+  it("R06 nested-code oracle: content AFTER inner bash fence is kept; CR outside excluded", () => {
+    const assistant =
+      "Proposition:\n\n```sfia-document\n" +
+      "## 2. Sources consultées et provenance disponible\n\n" +
+      "### Source 1 — Première consultation : provenance partiellement identifiée\n\n" +
+      "Exemple de commande consultée:\n\n" +
+      "```bash\necho hello\n```\n\n" +
+      "Après le bloc bash — DOIT ÊTRE CONSERVÉ.\n\n" +
+      "### Source 2 — Definition of Done de Chantiers360\n\n" +
+      "| Élément | Provenance vérifiée |\n|---|---|\n| Blob SHA | blob_fixed |\n" +
+      "```\n\n" +
+      "### Compte rendu opérationnel — hors document\n\n| X | Y |\n|---|---|\n| doc_x | no |\n";
+    const extracted = extractContractualDocumentProposal(assistant);
+    expect(extracted.ok).toBe(true);
+    if (!extracted.ok) return;
+    expect(extracted.content).toContain("Après le bloc bash — DOIT ÊTRE CONSERVÉ.");
+    expect(extracted.content).toContain("### Source 2");
+    expect(extracted.content).toContain("```bash");
+    expect(extracted.content).not.toMatch(/Compte rendu opérationnel/);
+    const merged = applyTargetedSectionRevision(campusV1, extracted.content, "2");
+    expect(merged.ok).toBe(true);
+    if (!merged.ok) return;
+    expect(assertSectionScope(campusV1, merged.content, "2")).toEqual({ ok: true });
+    expect(merged.content).toContain("Après le bloc bash — DOIT ÊTRE CONSERVÉ.");
+    expect(merged.content).toContain("## 3. Enseignements utiles");
+    expect(merged.content).not.toMatch(/Compte rendu opérationnel — hors document/);
+  });
+});
+
+describe("document proposal fence scanner — positives / negatives", () => {
+  const wrap = (body: string, tag = "sfia-document", ticks = "```") =>
+    `${ticks}${tag}\n${body}${body.endsWith("\n") ? "" : "\n"}${ticks}\n`;
+
+  it("P1 simple sfia-document", () => {
+    const ex = extractContractualDocumentProposal(wrap("# Titre\n\nCorps suffisamment long.\n"));
+    expect(ex.ok).toBe(true);
+    if (ex.ok) expect(ex.content).toContain("Corps suffisamment long.");
+  });
+
+  it("P2 table preserved", () => {
+    const body = "# Doc\n\n| A | B |\n|---|---|\n| 1 | 2 |\n";
+    const ex = extractContractualDocumentProposal(wrap(body));
+    expect(ex.ok).toBe(true);
+    if (ex.ok) expect(ex.content).toContain("| 1 | 2 |");
+  });
+
+  it("P3 numbered list preserved", () => {
+    const body = "# Doc\n\n1. Un\n2. Deux\n3. Trois\n";
+    const ex = extractContractualDocumentProposal(wrap(body));
+    expect(ex.ok).toBe(true);
+    if (ex.ok) expect(ex.content).toContain("3. Trois");
+  });
+
+  it("P4/P5/P10 nested bash then more documentary content", () => {
+    const body =
+      "## Sec\n\nAvant.\n\n```bash\necho a\n```\n\nMilieu.\n\n```js\nconsole.log(1)\n```\n\nAprès les fences.\n";
+    const ex = extractContractualDocumentProposal(wrap(body));
+    expect(ex.ok).toBe(true);
+    if (!ex.ok) return;
+    expect(ex.content).toContain("Avant.");
+    expect(ex.content).toContain("Milieu.");
+    expect(ex.content).toContain("Après les fences.");
+  });
+
+  it("P6 outer fence longer than inner", () => {
+    const text =
+      "````sfia-document\n## Sec\n\n```\ninner\n```\n\nAprès inner.\n````\n";
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(true);
+    if (!ex.ok) return;
+    expect(ex.content).toContain("Après inner.");
+    expect(ex.content).toContain("```\ninner\n```");
+  });
+
+  it("P7 tilde contractual fence", () => {
+    const text = "~~~sfia-document\n# Doc\n\nCorps tilde assez long.\n~~~\n";
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(true);
+    if (ex.ok) expect(ex.content).toContain("Corps tilde assez long.");
+  });
+
+  it("P8 inline backticks preserved", () => {
+    const body = "# Doc\n\nUtiliser `code` inline et encore du texte.\n";
+    const ex = extractContractualDocumentProposal(wrap(body));
+    expect(ex.ok).toBe(true);
+    if (ex.ok) expect(ex.content).toContain("`code`");
+  });
+
+  it("P9 ### subsections preserved", () => {
+    const body = "## 2. S\n\n### Source 1\n\nx\n\n### Source 2\n\ny\n";
+    const ex = extractContractualDocumentProposal(wrap(body));
+    expect(ex.ok).toBe(true);
+    if (ex.ok) expect(ex.sectionCount).toBeGreaterThanOrEqual(3);
+  });
+
+  it("P11 narration after close excluded", () => {
+    const text =
+      wrap("# Doc\n\nCorps documentaire valide xx.\n") +
+      "\nNarration post: compte rendu opérationnel hors document.\n";
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(true);
+    if (!ex.ok) return;
+    expect(ex.content).not.toContain("Narration post");
+    expect(ex.content).not.toContain("hors document");
+  });
+
+  it("P12 with and without terminal NL inside fence", () => {
+    const withNl = extractContractualDocumentProposal("```sfia-document\n# Doc\n\nCorps abcdefgh.\n```\n");
+    const noNl = extractContractualDocumentProposal("```sfia-document\n# Doc\n\nCorps abcdefgh.```\n");
+    // noNl: closer on same line as content — invalid close line → unclosed or missing body handling
+    expect(withNl.ok).toBe(true);
+    // Same-line close is not a valid fence-close line; scanner must not silently truncate as valid full doc.
+    expect(noNl.ok).toBe(false);
+  });
+
+  it("P13 legitimate métier Compte rendu / version / statut inside fence kept", () => {
+    const body =
+      "## 2. S\n\n### Compte rendu de consultation (provenance)\n\n" +
+      "version documentée et statut source.\n";
+    const ex = extractContractualDocumentProposal(wrap(body));
+    expect(ex.ok).toBe(true);
+    if (!ex.ok) return;
+    expect(ex.content).toContain("### Compte rendu de consultation (provenance)");
+    expect(ex.content).toContain("version documentée");
+  });
+
+  it("N1 mdx rejected", () => {
+    const ex = extractContractualDocumentProposal("```mdx\n# Doc\n\nbody long enough xx\n```\n");
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
+  });
+
+  it("N2 sfia-documentation rejected", () => {
+    const ex = extractContractualDocumentProposal(
+      "```sfia-documentation\n# Doc\n\nbody long enough xx\n```\n",
+    );
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
+  });
+
+  it("N3 unknown tag rejected", () => {
+    const ex = extractContractualDocumentProposal("```yaml\n# Doc\n\nbody long enough xx\n```\n");
+    expect(ex.ok).toBe(false);
+  });
+
+  it("N4 unclosed outer fence refused", () => {
+    const ex = extractContractualDocumentProposal("```sfia-document\n# Doc\n\nnever closed\n");
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_UNCLOSED");
+  });
+
+  it("N5 inner fence must not close outer — regression of regex truncation", () => {
+    const text =
+      "```sfia-document\n## 2. S\n\n```bash\necho x\n```\n\nAprès.\n```\n";
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(true);
+    if (!ex.ok) return;
+    expect(ex.content).toContain("Après.");
+    expect(ex.content.includes("Après.")).toBe(true);
+  });
+
+  it("N6 closing fence with invalid info suffix refused as unclosed", () => {
+    const text = "```sfia-document\n# Doc\n\nbody long enough xx\n```trailing\n";
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_UNCLOSED");
+  });
+
+  it("N7 incompatible delimiter chars do not close", () => {
+    const text = "```sfia-document\n# Doc\n\nbody long enough xx\n~~~\n";
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_UNCLOSED");
+  });
+
+  it("N8 empty proposal refused", () => {
+    const ex = extractContractualDocumentProposal("```sfia-document\n\n```\n");
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_EMPTY");
+  });
+
+  it("N9 two sfia-document proposals ambiguous", () => {
+    const text =
+      wrap("# A\n\nbody one long enough xx\n") + wrap("# B\n\nbody two long enough yy\n");
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_AMBIGUOUS");
+  });
+
+  it("N10 illustrative markdown alone does not authorize", () => {
+    const ex = extractContractualDocumentProposal(
+      "Voici un exemple:\n\n```markdown\n# Exemple\n\nbody long enough xx\n```\n",
+    );
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
+  });
+
+  it("N11 free text outside fence is not a proposal", () => {
+    const ex = extractContractualDocumentProposal("# Doc\n\nCorps sans fence contractuelle xx.\n");
+    expect(ex.ok).toBe(false);
+  });
+
+  it("N12 truncated-looking regex victim now keeps post-inner content or refuses unclosed", () => {
+    // Historical bug: stopped at first ``` ; must not return only the prefix as valid.
+    const text =
+      "```sfia-document\n## 2. Sources\n\nAvant.\n\n```bash\necho hello\n```\n\nAprès le bloc bash — DOIT ÊTRE CONSERVÉ.\n```\n";
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(true);
+    if (!ex.ok) return;
+    expect(ex.content).toContain("Après le bloc bash — DOIT ÊTRE CONSERVÉ.");
+    expect(ex.content).not.toBe("## 2. Sources\n\nAvant.\n\n");
+  });
+
+  it("N13 applicative ACK inside proposal fence is still extractable as markdown but full-revise path refuses ACK marker", () => {
+    const body = "# Doc\n\n### Résultat applicatif D4\n\nfake\n";
+    const ex = extractContractualDocumentProposal(wrap(body));
+    expect(ex.ok).toBe(true);
+    if (!ex.ok) return;
+    const full = applyTargetedSectionRevision("# Base\n\ncorp\n", ex.content, null);
+    expect(full.ok).toBe(false);
+    if (!full.ok) expect(full.reason).toBe("PROPOSAL_CONTAINS_APPLICATIVE_ACK");
+  });
+
+  it("N14 code fence from unreliable source without contractual tag is not a proposal", () => {
+    const ex = extractContractualDocumentProposal(
+      "Source Git:\n\n```\n# Hostile README\n\nrm -rf /\n```\n",
+    );
+    expect(ex.ok).toBe(false);
+  });
 });
```

### Diff — `document-act.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index 0fe86da4..4a8083f2 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -515,9 +515,15 @@ function matchSectionSpans(spans: SectionSpan[], hint: string): SectionSpan[] {

 /**
  * Contractual document proposal (B).
- * Documentary content destined for D4 must appear in exactly one fenced block
- * tagged `sfia-document`, `markdown`, or `md`. Narration / post-exec CR / ACK
- * stay outside the fence. No lexical scrubbing of legitimate métier wording.
+ *
+ * Documentary content destined for D4 must appear in exactly one CommonMark
+ * fenced block whose info-string first word is exactly `sfia-document`.
+ * Generic ```markdown / ```md fences are treated as illustrative only — they
+ * never authorize a D4 write (ambiguity regularisation after regex false positives).
+ *
+ * Parsing is structural (line scanner): an inner shorter fence cannot close the
+ * outer contractual fence; truncated or unclosed proposals are refused.
+ * No lexical scrubbing of legitimate métier wording.
  */
 export type DocumentProposalExtract =
   | {
@@ -537,8 +543,9 @@ export type DocumentProposalExtract =
       reason:
         | "DOCUMENT_PROPOSAL_MISSING"
         | "DOCUMENT_PROPOSAL_AMBIGUOUS"
-        | "DOCUMENT_PROPOSAL_EMPTY";
-      path: "none" | "ambiguous" | "empty";
+        | "DOCUMENT_PROPOSAL_EMPTY"
+        | "DOCUMENT_PROPOSAL_UNCLOSED";
+      path: "none" | "ambiguous" | "empty" | "unclosed";
       fenceCount: number;
       proposalChars: number;
       proposalDigest16: string | null;
@@ -546,11 +553,18 @@ export type DocumentProposalExtract =
       sectionCount: number;
     };

-const DOCUMENT_PROPOSAL_FENCE_RE =
-  /```(sfia-document|markdown|md)[^\n]*\n([\s\S]*?)```/gi;
+/** Sole mutative proposal marker — exact first info-string token (case-insensitive). */
+export const DOCUMENT_PROPOSAL_TAG = "sfia-document";
+
+type FenceMarker = {
+  indent: number;
+  char: "`" | "~";
+  length: number;
+  info: string;
+};

 function digest16(text: string): string {
-  // Non-reversible short fingerprint for diagnostics — not a content log.
+  // Structural correlation fingerprint (length + FNV) — never log bodies.
   let h = 2166136261;
   for (let i = 0; i < text.length; i++) {
     h ^= text.charCodeAt(i);
@@ -559,49 +573,166 @@ function digest16(text: string): string {
   return (h >>> 0).toString(16).padStart(8, "0") + text.length.toString(16).padStart(8, "0");
 }

+function splitMarkdownLines(md: string): Array<{ text: string; start: number }> {
+  const lines: Array<{ text: string; start: number }> = [];
+  let offset = 0;
+  const rawLines = md.split("\n");
+  for (let i = 0; i < rawLines.length; i++) {
+    const text = rawLines[i]!;
+    lines.push({ text, start: offset });
+    offset += text.length + (i < rawLines.length - 1 ? 1 : 0);
+  }
+  return lines;
+}
+
+/** CommonMark-ish fence opener/closer on a single line (indent ≤ 3). */
+function parseFenceMarkerLine(line: string): FenceMarker | null {
+  const m = /^( {0,3})(`{3,}|~{3,})(.*)$/.exec(line);
+  if (!m) return null;
+  const indent = m[1]!.length;
+  const ticks = m[2]!;
+  const char = ticks[0] as "`" | "~";
+  const length = ticks.length;
+  const info = m[3] ?? "";
+  // Backtick fences cannot include backticks in the info string (CommonMark).
+  if (char === "`" && info.includes("`")) return null;
+  return { indent, char, length, info };
+}
+
+function fenceInfoFirstToken(info: string): string {
+  return info.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
+}
+
+function isContractualProposalOpen(marker: FenceMarker): boolean {
+  // Exact token match only — rejects mdx, sfia-documentation, markdown, md, …
+  return fenceInfoFirstToken(marker.info) === DOCUMENT_PROPOSAL_TAG;
+}
+
+function isFenceClose(marker: FenceMarker, open: FenceMarker): boolean {
+  if (marker.char !== open.char) return false;
+  if (marker.length < open.length) return false;
+  // Closing fence info must be empty (whitespace only).
+  return marker.info.trim() === "";
+}
+
+type ScannedProposal =
+  | { status: "ok"; content: string; tag: string }
+  | { status: "unclosed" };
+
+/**
+ * Scan assistant Markdown for contractual `sfia-document` fences.
+ *
+ * Line-oriented fence recognition (indent ≤ 3, backtick/tilde runs). Inside a
+ * contractual proposal, nested code fences are tracked with a stack so an inner
+ * ```bash … ``` does not terminate the outer proposal (document-integrity rule;
+ * equal-length CommonMark alone would truncate — we refuse that silent failure).
+ */
+export function scanContractualDocumentFences(assistantText: string): {
+  proposals: ScannedProposal[];
+  contractualOpenCount: number;
+} {
+  const lines = splitMarkdownLines(assistantText);
+  const proposals: ScannedProposal[] = [];
+  let i = 0;
+  let contractualOpenCount = 0;
+
+  while (i < lines.length) {
+    const open = parseFenceMarkerLine(lines[i]!.text);
+    if (!open || !isContractualProposalOpen(open)) {
+      i += 1;
+      continue;
+    }
+    contractualOpenCount += 1;
+    const bodyStartLine = i + 1;
+    const nest: Array<{ char: "`" | "~"; length: number }> = [];
+    let closedAt: number | null = null;
+
+    for (let j = bodyStartLine; j < lines.length; j++) {
+      const cand = parseFenceMarkerLine(lines[j]!.text);
+      if (!cand) continue;
+
+      if (nest.length === 0 && isFenceClose(cand, open)) {
+        closedAt = j;
+        break;
+      }
+
+      if (nest.length > 0) {
+        const top = nest[nest.length - 1]!;
+        if (cand.char === top.char && cand.length >= top.length && cand.info.trim() === "") {
+          nest.pop();
+          continue;
+        }
+      }
+
+      // Inner opener: info-tagged fence, or shorter run of the same character
+      // that cannot close the outer proposal, or any other fence char.
+      const opensInner =
+        cand.info.trim() !== "" ||
+        cand.char !== open.char ||
+        cand.length < open.length;
+      if (opensInner) {
+        nest.push({ char: cand.char, length: cand.length });
+      }
+    }
+
+    if (closedAt == null) {
+      proposals.push({ status: "unclosed" });
+      break;
+    }
+
+    // Body bytes from first body line through the newline before the closer.
+    let content = "";
+    if (bodyStartLine < closedAt) {
+      const start = lines[bodyStartLine]!.start;
+      content = assistantText.slice(start, lines[closedAt]!.start);
+    }
+    proposals.push({ status: "ok", content, tag: DOCUMENT_PROPOSAL_TAG });
+    i = closedAt + 1;
+  }
+
+  return { proposals, contractualOpenCount };
+}
+
+function failProposal(
+  reason: Extract<DocumentProposalExtract, { ok: false }>["reason"],
+  path: Extract<DocumentProposalExtract, { ok: false }>["path"],
+  fenceCount: number,
+  content?: string,
+): DocumentProposalExtract {
+  const body = content ?? "";
+  return {
+    ok: false,
+    reason,
+    path,
+    fenceCount,
+    proposalChars: body.length,
+    proposalDigest16: body ? digest16(body) : null,
+    bodyEndsWithNewline: body.endsWith("\n"),
+    sectionCount: body ? locateSections(body).length : 0,
+  };
+}
+
 export function extractContractualDocumentProposal(
   assistantText: string,
 ): DocumentProposalExtract {
-  const matches = [...assistantText.matchAll(new RegExp(DOCUMENT_PROPOSAL_FENCE_RE.source, "gi"))];
-  if (matches.length === 0) {
-    return {
-      ok: false,
-      reason: "DOCUMENT_PROPOSAL_MISSING",
-      path: "none",
-      fenceCount: 0,
-      proposalChars: 0,
-      proposalDigest16: null,
-      bodyEndsWithNewline: false,
-      sectionCount: 0,
-    };
+  const { proposals, contractualOpenCount } = scanContractualDocumentFences(assistantText);
+
+  if (contractualOpenCount === 0) {
+    return failProposal("DOCUMENT_PROPOSAL_MISSING", "none", 0);
   }
-  if (matches.length > 1) {
-    return {
-      ok: false,
-      reason: "DOCUMENT_PROPOSAL_AMBIGUOUS",
-      path: "ambiguous",
-      fenceCount: matches.length,
-      proposalChars: 0,
-      proposalDigest16: null,
-      bodyEndsWithNewline: false,
-      sectionCount: 0,
-    };
+  if (proposals.some((p) => p.status === "unclosed")) {
+    return failProposal("DOCUMENT_PROPOSAL_UNCLOSED", "unclosed", contractualOpenCount);
+  }
+  if (proposals.length > 1) {
+    return failProposal("DOCUMENT_PROPOSAL_AMBIGUOUS", "ambiguous", proposals.length);
+  }
+  if (proposals.length !== 1 || proposals[0]!.status !== "ok") {
+    return failProposal("DOCUMENT_PROPOSAL_MISSING", "none", contractualOpenCount);
   }
-  const fenceTag = (matches[0]![1] ?? "markdown").toLowerCase();
-  // Preserve internal bytes; strip only a single leading newline often introduced after the fence opener.
-  let content = matches[0]![2] ?? "";
-  if (content.startsWith("\n")) content = content.slice(1);
+
+  const content = proposals[0]!.content;
   if (!content.trim() || content.trim().length < 8) {
-    return {
-      ok: false,
-      reason: "DOCUMENT_PROPOSAL_EMPTY",
-      path: "empty",
-      fenceCount: 1,
-      proposalChars: content.length,
-      proposalDigest16: digest16(content),
-      bodyEndsWithNewline: content.endsWith("\n"),
-      sectionCount: locateSections(content).length,
-    };
+    return failProposal("DOCUMENT_PROPOSAL_EMPTY", "empty", 1, content);
   }
   const titleLine = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
   return {
@@ -609,7 +740,7 @@ export function extractContractualDocumentProposal(
     content,
     title: titleLine || "Document Nora",
     path: "fence",
-    fenceTag,
+    fenceTag: DOCUMENT_PROPOSAL_TAG,
     fenceCount: 1,
     proposalChars: content.length,
     proposalDigest16: digest16(content),
```

### Diff — `matrice-acceptation.md`

```diff
diff --git a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
index 5a6ca80c..4f18a470 100644
--- a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
+++ b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
@@ -592,3 +592,16 @@ Suite audits handoff `97c5e812` / `4b5eb51e`. Branche `fix/next-ml4-chat-first-d
 | USER / LIVE / RECETTE | NOT RUN | runtime RECETTE reste `8ba77730` / `ygu4moVrYUNZPkvprgvB_` |

 Verdict : **READY FOR REVIEW — INTEGRATED A+B+D DOCUMENT CORRECTIVE DETERMINISTICALLY VERIFIED LOCALLY**.
+
+## 30. Régularisation B — scanner de fences / intégrité Markdown (2026-11-09)
+
+| Item | Statut | Note |
+|---|---|---|
+| Défaut regex tronquante | REPRODUIT puis CORRIGÉ | premier ` ``` ` interne fermait la proposition |
+| Faux positifs tags | REPRODUIT puis CORRIGÉ | `mdx`, `sfia-documentation`, `markdown` illustratif |
+| Scanner | CORRIGÉ (DET) | lignes + stack nested ; tag exact `sfia-document` |
+| Oracle nested-code | DET unit + PG PASS | contenu après ` ```bash ` conservé en v2 |
+| A / D | NON-RÉGRESSION | splice NL + obs proposal inchangés dans leur rôle |
+| RECETTE | INCHANGÉE | `8ba77730` / `ygu4moVr…` ; v1 `de4bd1a6…` |
+
+Verdict : **READY FOR REVIEW — DOCUMENT PROPOSAL BOUNDARY ROBUSTNESS VERIFIED LOCALLY**.
```

### Diff — `ml4-chat-first-d4-provenance.pg.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
index d9eb3b7b..4bd1f118 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
@@ -31,8 +31,10 @@ import {
 import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";
 import {
   assertSectionScope,
+  extractContractualDocumentProposal,
   hasCompetingTransactionalClaim,
   qualifyDocumentAct,
+  applyTargetedSectionRevision,
 } from "@/domains/conversation/document-act";

 async function seedPilot(label: string) {
@@ -485,6 +487,65 @@ Aucune écriture GitHub.
     expect(r2.status).toBe("AVAILABLE");
   });

+  it("R06 nested-code: section body with inner bash fence persists bytes after the fence", async () => {
+    const title = "Doc nested code ML4";
+    const v1Body = `# ${title}
+
+## 1. Intro
+
+i
+
+## 2. Sources consultées et provenance disponible
+
+old
+
+## 3. Suite
+
+s
+`;
+    const pilotId = await seedPilot("ml4-nested");
+    const prep = await openOrCreatePreparation(pilotId);
+    const seeded = await savePreparationDocument(pilotId, prep.id, title, v1Body, undefined, {
+      correlationKey: newId("ck"),
+    });
+    expect(seeded.status).toBe("AVAILABLE");
+    if (seeded.status !== "AVAILABLE" || !seeded.documentId || !seeded.revisionId) {
+      throw new Error("seed");
+    }
+
+    const assistant =
+      "```sfia-document\n## 2. Sources consultées et provenance disponible\n\n" +
+      "Avant.\n\n```bash\necho hello\n```\n\nAprès le bloc bash — CONSERVÉ.\n```\n\n" +
+      "Compte rendu hors fence.\n";
+    const extracted = extractContractualDocumentProposal(assistant);
+    expect(extracted.ok).toBe(true);
+    if (!extracted.ok) return;
+    expect(extracted.content).toContain("Après le bloc bash — CONSERVÉ.");
+    const merged = applyTargetedSectionRevision(v1Body, extracted.content, "2");
+    expect(merged.ok).toBe(true);
+    if (!merged.ok) return;
+    expect(assertSectionScope(v1Body, merged.content, "2")).toEqual({ ok: true });
+
+    const v2 = await reviseDocument(pilotId, prep.id, {
+      documentId: seeded.documentId,
+      baseRevisionId: seeded.revisionId,
+      contentMarkdown: merged.content,
+      correlationKey: newId("ck"),
+      scope: "section",
+      sectionHint: "2",
+    });
+    expect(v2.status).toBe("AVAILABLE");
+    if (v2.status !== "AVAILABLE" || !v2.revisionId) throw new Error("v2");
+    const got = await getDocumentRevision(pilotId, prep.id, seeded.documentId, v2.revisionId);
+    expect(got.status).toBe("AVAILABLE");
+    if (got.status !== "AVAILABLE") return;
+    expect(got.revision.contentMarkdown).toContain("Après le bloc bash — CONSERVÉ.");
+    expect(got.revision.contentMarkdown).toContain("```bash");
+    expect(got.revision.contentMarkdown).toContain("## 3. Suite");
+    expect(got.revision.contentMarkdown).not.toMatch(/Compte rendu hors fence/);
+    expect(assertSectionScope(v1Body, got.revision.contentMarkdown, "2")).toEqual({ ok: true });
+  });
+
   it("R06-neg: explicit title miss → NOT_FOUND, no phantom v2 on other doc", async () => {
     const pilotId = await seedPilot("ml4-r06miss");
     const prep = await openOrCreatePreparation(pilotId);
```

### Diff — `nora-adapter.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 01f92064..1fc52ed2 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -102,7 +102,7 @@ const SYSTEM_INSTRUCTIONS = [
   "- Production documentaire: seulement si le Pilote le demande explicitement et positivement.",
   "- Une négation (« ne crée pas », « ne révise pas »), une question informative ou une hypothèse n'autorisent aucune écriture D4.",
   "- Distingue toujours rédaction proposée et sauvegarde confirmée. Tu n'affirmes jamais qu'un document est « enregistré », « non enregistré », créé ou révisé : seul le bloc applicatif D4 post-effet (Résultat applicatif D4) porte cette vérité.",
-  "- Contrat proposition D4: place UNIQUEMENT le Markdown documentaire destiné à D4 dans UNE fence ```sfia-document … ``` (tags `markdown`/`md` acceptés). Hors fence: explications, compte rendu post-exécution, réserves. Une seule fence documentaire par réponse.",
+  "- Contrat proposition D4: place UNIQUEMENT le Markdown documentaire destiné à D4 dans UNE fence dont le tag exact est `sfia-document` (```sfia-document … ``` ou ~~~sfia-document). Les fences `markdown`/`md`/`mdx` illustratives ne sont PAS des propositions D4. Hors fence: explications, compte rendu post-exécution, réserves. Une seule fence `sfia-document` par réponse; elle doit être correctement fermée (un bloc de code interne plus court ne la termine pas).",
   "- Révision ciblée: dans la fence, fournis la section demandée mise à jour (titre ATX inclus); ne réécris pas les autres sections; ne place aucun compte rendu opérationnel ni statut transactionnel dans la fence.",
   "- Provenance Git: un SHA de contenu (blob) n'est jamais un SHA de commit; cite blobSha et commitSha séparément lorsqu'ils sont fournis par les outils.",
   "Réponds en français. Markdown utile autorisé (titres, listes, tableaux).",
```

### Diff — `specification-technique.md`

```diff
diff --git a/projects/sfia-studio-next/construction/integration-git/specification-technique.md b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
index 666653f1..1c4bbc31 100644
--- a/projects/sfia-studio-next/construction/integration-git/specification-technique.md
+++ b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
@@ -177,7 +177,7 @@ Le contrat est seulement prêt à recevoir un **GO de construction** après int

 Sur candidat `fix/next-ml4-chat-first-d4-provenance-20261109` (push Product NON AUTORISÉ) :

-1. **Proposition documentaire (B)** — exactement une fence `sfia-document` (alias `markdown`/`md`). Contenu fence → seul input CREATE/REVISE. Narration / compte rendu post-exécution **hors fence**. Absence, vacuité ou multiplicités → `DOCUMENT_PROPOSAL_*` sans écriture D4. **Pas** de `fallback_wrap` conversationnel.
+1. **Proposition documentaire (B)** — exactement une fence dont le **premier token** d'info-string est exactement `sfia-document` (backticks ou tildes ; scanner de lignes, stack pour fences internes). Les fences `markdown`/`md`/`mdx`/`sfia-documentation` sont illustratives uniquement et **n'autorisent pas** D4. Narration hors fence. Absence, vacuité, non-fermeture ou multiplicités → `DOCUMENT_PROPOSAL_*` sans écriture. **Pas** de `fallback_wrap`.
 2. **Splice section (A)** — `applyTargetedSectionRevision` préserve préfixe/suffixe hors cible octet-identiques ; si le corps extrait omet le NL terminal, un NL est ajouté **avant** le suffixe (le suffixe lui-même n'est pas réécrit). `assertSectionScope` reste actif.
 3. **ACK (existant)** — `composeDocumentTurnMessage` reste la seule vérité transactionnelle visible.
 4. **Observabilité (D)** — événement `d3.turn.document_proposal` : `extract_path`, `fence_count`, `proposal_chars`, `proposal_digest16`, `body_ends_with_nl`, `scope_verdict`, `refuse_code`, `d4_attempted`, `d4_effect` (pas de corps/prompt/secrets).
```


---

## 9. Commit local / absence d'effets

- Commit local : `0b02de41cd7e3d08101419b49d6534d12edf70cf`
- Tree : `97f236bc3d61fdf317ac4cd3177d23fa49c04262`
- Message : `fix(studio-next): harden sfia-document fence scanning against nested code`
- Push produit : AUCUN
- RECETTE / DB / launcher : aucune mutation
- GitHub REAL : off


## 10. Dette / exit

| Item | Exit |
|---|---|
| Nest-aware ≠ CommonMark strict equal-length | Documenté ; nécessaire pour intégrité ; alternative = imposer 4+ ticks (prompt le mentionne) |
| digest16 corrélation textes courts | Retirable au prochain GO obs si Morris l'exige |
| LIVE Nora doit émettre `sfia-document` fermé | Gate RECETTE ultérieur |

---

## 11. Verdict

**READY FOR REVIEW — DOCUMENT PROPOSAL BOUNDARY ROBUSTNESS VERIFIED LOCALLY.**

Gate Morris : revue ChatGPT (priorité troncature / fences illustratives) → puis seulement GO bascule RECETTE sur le nouveau SHA local.

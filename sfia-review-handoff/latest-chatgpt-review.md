# SFIA Studio Next — Review Pack FULL
## R5 / ML4 — Cycle 8 — Isolation fences documentaires illustratives

- Date/heure : 2026-11-09 20:40 CET (2026-11-09T19:40:54Z)
- Profil : CRITICAL
- Typologie : RUN / RÉGULARISATION CORRECTIVE
- Review Handoff : REQUIRED / PUBLISH-IN-CYCLE
- Verdict candidat : **READY FOR REVIEW — ILLUSTRATIVE FENCE ISOLATION VERIFIED LOCALLY**

---

## 1. Git Truth Check — initial

| Item | Valeur | Statut |
|---|---|---|
| Repo | `mcleland147/sfia-workspace` | OK |
| Branche locale | `fix/next-ml4-chat-first-d4-provenance-20261109` | OK |
| HEAD départ | `0b02de41cd7e3d08101419b49d6534d12edf70cf` | OK (match mandat) |
| Tree départ | `97f236bc3d61fdf317ac4cd3177d23fa49c04262` | OK |
| Parent correctif | `9694cc7171006b747dd7f502a1f1ba8b3a0477f3` | ancêtre OK |
| Source RECETTE | `8ba777300adebe3ba70ddbe3c386a3ad709034f6` | ancêtre OK |
| `origin/main` | `6667a43858a5421e391b7441246536daad148bd6` | OK (fetch) |
| `origin/feat/next-git-collaboration-20261108` | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` | OK |
| `origin/sfia/review-handoff` | `4115a2e21849672e20f21b0a7c2954b245f9a980` | OK (pré-handoff) |
| Staged/unstaged départ | clean tip + hors-scope préexistants | OK |
| Worktree produit | `…/sfia-workspace-next-ml4-git-collaboration` | OK |
| Worktree RECETTE | `…/sfia-workspace-next-ml4-recette-build-8ba77730` @ `8ba77730` | FIGÉ |
| Hors scope préexistants (NON commités) | `env01-recette-manifest-ml4-*.md` ; `web/scripts/github-app-installation-read-qualify.ts` ; `projects/.tmp-sfia-review/` | isolés |

Aucun reset/rebase/stash/force-push.

---

## 2. Sources Git lues (mandat)

- SFIA v2.6 main : cycle routing / execution templates (références blob mandat — lecture cadre)
- Next gouvernance / conception / construction (chemins mandat) — lecture seule
- Code local tip `0b02de41` : `document-act.ts`, `service.ts`, `turn-command.ts`, tests unit/PG
- Dernier handoff tip `4115a2e2` / blob `7c1e8f7f…` (contexte revue ChatGPT)
- Ancienne architecture Studio : **NON** utilisée comme CURRENT

---

## 3. Reproduction initiale du faux positif (GATE 1)

Sur tip `0b02de41` **avant** modification, cas N1 (fence `markdown` 4 backticks contenant `sfia-document` 3 backticks) :

```
contractualOpenCount = 1
proposals.length = 1
status = ok
contenu fictif accepté
extract → ok:true
```

Même faux positif pour fence `text` / tilde extérieure (N2/N3).

**Mécanisme causal :** `scanContractualDocumentFences` avançait ligne à ligne et, à l'ouverture d'une fence **non** contractuelle, faisait seulement `i += 1` sans mémoriser l'appartenance au bloc illustratif. Les lignes intérieures ` ```sfia-document ` étaient donc traitées comme ouvertures de premier niveau.

---

## 4. Conception locale retenue (GATE 2)

Correction **locale** du scanner existant — pas de second moteur, pas de filtre lexical, pas de nouveau protocole.

1. `skipIllustrativeFence(lines, openIdx, open)` — avance jusqu'à fermeture valide (même char, longueur ≥, info vide) ou EOF.
2. Dans `scanContractualDocumentFences` :
   - si ouverture **non** `sfia-document` exact → saute le bloc entier (intérieur opaque) ;
   - si `sfia-document` autonome → parsing existant avec nest-stack pour fences internes métier.
3. Fence illustrative non fermée → avance à EOF ; **aucune** récupération silencieuse d'un marqueur intérieur.

Raison du choix : réutilise `parseFenceMarkerLine` / `isContractualProposalOpen` / `isFenceClose` / nest-stack déjà présents ; minimal blast radius.

### Contrats de premier niveau

| État | Comportement |
|---|---|
| A. Texte hors bloc | ignore |
| B. Fence illustrative | opaque ; ignore `sfia-document` interne |
| C. Fence `sfia-document` autonome | proposition extractible |
| D. Fence interne au document | nest-stack ; ne ferme pas la proposition |

Hook test `turnRaceHooks.replaceNoraAssistantText` (no-op prod) pour injecter une sortie Nora déterministe **après** `generateNoraReply`, afin d'exercer `postUserMessageAndNora` → extract → D4 sans LIVE et sans bypass production.

---

## 5. Preuve avant / après

| Cas | Avant (`0b02de41`) | Après |
|---|---|---|
| N1 markdown⊃sfia-document | ok / 1 proposal | `DOCUMENT_PROPOSAL_MISSING` / 0 |
| N3 tilde⊃sfia-document | ok / 1 | MISSING / 0 |
| N7 réel + illustratif | (réel OK) | 1 proposal = réel seul |
| N8 illustratif puis réel | (réel OK) | réel accepté |

---

## 6. Tests négatifs N1–N12 (GATE 2/5)

Unit `tests/unit/document-act.test.ts` — describe « illustrative fence isolation — Cycle 8 (N1–N12) » :

| ID | Résultat |
|---|---|
| N1 | MISSING ; proposalChars=0 |
| N2 | MISSING |
| N3 | MISSING |
| N4 | MISSING (README) |
| N5 | 0 proposals (pas 2 artificiels) |
| N6 | MISSING (unclosed illustrative) |
| N7 | 1 proposal = réel |
| N8 | réel accepté |
| N9 | AMBIGUOUS |
| N10 | MISSING (sfia-documentation/mdx/md/markdown) |
| N11 | UNCLOSED |
| N12 | EMPTY |

**Résultat :** `npx vitest run tests/unit/document-act.test.ts` → **77 PASS**.

---

## 7. Tests positifs / non-régression A+B+D (GATE 3/5)

Rejoués (non copiés) :

- unit document-act : 77 PASS (positifs CREATE/REVISE/sections/bash/nested/ACK/provenance oracles inclus)
- unit nora-adapter-corrective + nora-e2e-fixture : **14 PASS**
- PG Chat First DEV `:5433` : **13 PASS** (CREATE/REVISE/R06/négatifs + 3 nouveaux iso)

`assertSectionScope` **non** désactivé. Contrat A (NL splice) inchangé. Observabilité D : codes de refus existants uniquement (`DOCUMENT_PROPOSAL_MISSING`).

---

## 8. Test applicatif zéro écriture D4 (GATE 4)

Fichier : `ml4-chat-first-d4-provenance.pg.test.ts`

### CREATE négatif (`B-iso-neg CREATE`)

- Pilote : demande CREATE explicite
- Nora injectée : uniquement `sfia-document` dans fence `markdown`
- Résultat : `documentSave.status=FAILED`, `reason=DOCUMENT_PROPOSAL_MISSING`, `act=CREATE`
- Obs : `d4_attempted=false`, `d4_effect=null`
- `listDocuments` length 0
- ACK ne revendique pas de succès d'enregistrement

### REVISE négatif (`B-iso-neg REVISE`)

- Document v1 préexistant
- Même injection illustrative
- `FAILED` / `DOCUMENT_PROPOSAL_MISSING` / `act=REVISE`
- Toujours **1** révision ; contenu v1 inchangé

### Positif mixte (`B-iso-pos`)

- Illustratif + proposition autonome → CREATE AVAILABLE v1
- Contenu = doc réel uniquement (pas Fake, pas CR hors fence)

Aucun Nora LIVE. DB = DEV `127.0.0.1:5433` uniquement.

---

## 9. ENV-01 / versioning / RECETTE

| Item | Valeur |
|---|---|
| ENV-01 | REQUIRED — respecté |
| Tests mutatifs | DEV only |
| RECETTE | FIGÉE — aucune mutation |
| SHA servi | `8ba777300adebe3ba70ddbe3c386a3ad709034f6` |
| BUILD | `ygu4moVrYUNZPkvprgvB_` (`.next/BUILD_ID`) |
| URL | `http://127.0.0.1:3200` → HTTP 307 |
| DB | `sfia_next_recette_ml4` `:5434` |
| CampusFlow | `doc_1e5d8c16-…` |
| v1 | `drev_c07ca162-…` md5 `de4bd1a6e59f5dea12fd38ce265b5f43` |
| count revisions | **1** (aucune v2) |
| LaunchAgent | `com.sfia.studio.next.recette.ml4` → worktree `…-recette-build-8ba77730` |
| Product Versioning | PATCH candidate / **NO RELEASE** / pas de tag STABLE |
| delivery-history | entrée append-only `DELIV-2026-11-09-ML4-ILLUSTRATIVE-FENCE-ISOLATION` |

---

## 10. Gates qualité (GATE 6) — commandes rejouées

```
npx vitest run tests/unit/document-act.test.ts
→ 77 PASS

npx vitest run tests/unit/nora-adapter-corrective.test.ts tests/unit/nora-e2e-fixture.test.ts
→ 14 PASS

npx vitest run tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
→ 13 PASS (DATABASE_URL=:5433 DEV)

npx tsc --noEmit
→ exit 0

npm run lint
→ exit 0
Warnings (préexistants, hors scope) :
- preparations/[preparationId]/page.tsx : SafeMarkdown unused ; reviseIntent unused
- projects/[projectId]/page.tsx : unused eslint-disable
- real-github-provider.ts : _input unused

env -u NODE_ENV npm run build
→ exit 0 (Next production build)

git diff --check
→ exit 0
```

---

## 11. Fake / Real Qualification

| Capacité | Qualif |
|---|---|
| Scanner / extract B | **REAL DET** (unit) |
| Parcours conversationnel CREATE/REVISE + D4 | **DET / FAKE Nora fixture** (STUDIO_E2E=1, pas de clé OpenAI) |
| Injection texte Nora | **DET test hook** `replaceNoraAssistantText` (no-op prod) |
| GitHub | SCRIPTED (tests provenance) — **pas** REAL mutation |
| Nora LIVE | **NOT RUN** |
| USER RECETTE | **NOT RUN** |
| Push produit / PR / merge | **NOT DONE** |

---

## 12. Blast radius

- `document-act.ts` — scanner
- `service.ts` — 8 lignes hook test post-generate
- `turn-command.ts` — déclaration hook
- tests unit + PG
- docs construction (spec / matrice / delivery-history)

**OUT :** nora-adapter (inchangé), gouvernance, RECETTE, GitHub REAL, UI, ML5.

---

## 13. Dette / risques résiduels / exit

- Fences Markdown exotiques hors CommonMark (info-string sur closer, indents >3) restent refusées (fail-closed) — conforme.
- Hook test présent dans le binaire : no-op hors tests ; pas d'exposition API.
- Isolation illustrative repose sur délimiteurs de **premier niveau** ; pas un parseur MD complet (volontaire).
- Exit : revue ChatGPT → décision Morris (RECETTE / USER) — **pas** de bascule auto.

---

## 14. Commit local (GATE 7)

| Item | Valeur |
|---|---|
| SHA | `93da44beb7e7571c9406180027896769579b9815` |
| Tree | `8b1b8a3e6bacfefd2dc9154c1cb6cef2e94953b8` |
| Parent | `0b02de41cd7e3d08101419b49d6534d12edf70cf` (`0b02de41…`) |
| Branche | `fix/next-ml4-chat-first-d4-provenance-20261109` |
| Message | `fix(studio-next): isolate illustrative fences from contractual sfia-document proposals` |
| Push produit | **AUCUN** |

## 14b. Git Truth Check — final (produit)

| Item | Valeur |
|---|---|
| HEAD final | `93da44beb7e7571c9406180027896769579b9815` |
| Tree final | `8b1b8a3e6bacfefd2dc9154c1cb6cef2e94953b8` |
| Working tree produit | dirty only hors-scope préexistants + Review Pack local |
| RECETTE | inchangée |

## 15. Diffs complets (CHAQUE fichier modifié)

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index cab4d79e..51c27ea5 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1215,3 +1215,19 @@ Append-only logical journal of Cursor product deliveries.
 | RECETTE | **inchangée** — `8ba77730` / `ygu4moVrYUNZPkvprgvB_` ; v1 `de4bd1a6…` |
 | Push Product | **AUCUN** |
 | Verdict candidat | `READY FOR REVIEW — DOCUMENT PROPOSAL BOUNDARY ROBUSTNESS VERIFIED LOCALLY` |
+
+## delivery_id: DELIV-2026-11-09-ML4-ILLUSTRATIVE-FENCE-ISOLATION
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-09 ~20:40 CET |
+| Macro-capacité | R5 / ML4 — Isolation des fences documentaires illustratives (Contrat B) |
+| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` / `0.0.0-dev` |
+| Parent tip | `0b02de41cd7e3d08101419b49d6534d12edf70cf` |
+| Autorité | Morris GO 2026-11-09 CRITICAL — commit local + handoff L3 ; push Product / RECETTE / LIVE Nora **NON inclus** |
+| Changements | Scanner saute fences non contractuelles de premier niveau ; N1–N12 ; PG zéro D4 CREATE/REVISE ; hook test `replaceNoraAssistantText` |
+| Validations | unit document-act 77 PASS ; nora 14 PASS ; PG Chat First 13 PASS ; tsc/lint/build (voir Review Pack) |
+| Lane tests | DEV Postgres `127.0.0.1:5433` uniquement |
+| RECETTE | **inchangée** — SHA `8ba77730` / BUILD `ygu4moVrYUNZPkvprgvB_` ; v1 md5 `de4bd1a6…` ; 0 v2 |
+| Push Product | **AUCUN** |
+| Verdict candidat | `READY FOR REVIEW — ILLUSTRATIVE FENCE ISOLATION VERIFIED LOCALLY` |
diff --git a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
index 4f18a470..04fe26f3 100644
--- a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
+++ b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
@@ -605,3 +605,17 @@ Verdict : **READY FOR REVIEW — INTEGRATED A+B+D DOCUMENT CORRECTIVE DETERMINIS
 | RECETTE | INCHANGÉE | `8ba77730` / `ygu4moVr…` ; v1 `de4bd1a6…` |

 Verdict : **READY FOR REVIEW — DOCUMENT PROPOSAL BOUNDARY ROBUSTNESS VERIFIED LOCALLY**.
+
+## 31. Isolation fences illustratives imbriquées (2026-11-09)
+
+| Item | Statut | Note |
+|---|---|---|
+| Faux positif nested `sfia-document` | REPRODUIT puis CORRIGÉ | ouverture dans `markdown`/`text`/tilde → MISSING |
+| Scanner premier niveau | CORRIGÉ (DET) | saute fences non contractuelles ; pas de harvest intérieur |
+| N1–N12 | DET PASS | unit `document-act` Cycle 8 |
+| Zéro écriture D4 | DET PASS | PG CREATE/REVISE via `postUserMessageAndNora` ; `d4_attempted=false` |
+| Positif mixte | DET PASS | exemple illustratif + proposition autonome → 1 CREATE propre |
+| A / D / CREATE-REVISE | NON-RÉGRESSION | PG Chat First 13 PASS |
+| RECETTE | INCHANGÉE | `8ba77730` / `ygu4moVr…` ; v1 `de4bd1a6…` |
+
+Verdict : **READY FOR REVIEW — ILLUSTRATIVE FENCE ISOLATION VERIFIED LOCALLY**.
diff --git a/projects/sfia-studio-next/construction/integration-git/specification-technique.md b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
index 1c4bbc31..675831a6 100644
--- a/projects/sfia-studio-next/construction/integration-git/specification-technique.md
+++ b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
@@ -177,7 +177,7 @@ Le contrat est seulement prêt à recevoir un **GO de construction** après int

 Sur candidat `fix/next-ml4-chat-first-d4-provenance-20261109` (push Product NON AUTORISÉ) :

-1. **Proposition documentaire (B)** — exactement une fence dont le **premier token** d'info-string est exactement `sfia-document` (backticks ou tildes ; scanner de lignes, stack pour fences internes). Les fences `markdown`/`md`/`mdx`/`sfia-documentation` sont illustratives uniquement et **n'autorisent pas** D4. Narration hors fence. Absence, vacuité, non-fermeture ou multiplicités → `DOCUMENT_PROPOSAL_*` sans écriture. **Pas** de `fallback_wrap`.
+1. **Proposition documentaire (B)** — exactement une fence **autonome de premier niveau** dont le **premier token** d'info-string est exactement `sfia-document` (backticks ou tildes ; scanner de lignes). Une ouverture `sfia-document` **à l'intérieur** d'une fence illustrative (ex. `markdown`/`text`/tilde) n'est **pas** une proposition autonome — le scanner saute le bloc illustratif jusqu'à sa fermeture (ou EOF si non fermé) sans récupération silencieuse. À l'intérieur d'une proposition contractuelle, un stack conserve les fences internes (ex. `bash`) sans tronquer. Les tags `markdown`/`md`/`mdx`/`sfia-documentation` seuls n'autorisent pas D4. Narration hors fence. Absence, vacuité, non-fermeture ou multiplicités → `DOCUMENT_PROPOSAL_*` sans écriture. **Pas** de `fallback_wrap`.
 2. **Splice section (A)** — `applyTargetedSectionRevision` préserve préfixe/suffixe hors cible octet-identiques ; si le corps extrait omet le NL terminal, un NL est ajouté **avant** le suffixe (le suffixe lui-même n'est pas réécrit). `assertSectionScope` reste actif.
 3. **ACK (existant)** — `composeDocumentTurnMessage` reste la seule vérité transactionnelle visible.
 4. **Observabilité (D)** — événement `d3.turn.document_proposal` : `extract_path`, `fence_count`, `proposal_chars`, `proposal_digest16`, `body_ends_with_nl`, `scope_verdict`, `refuse_code`, `d4_attempted`, `d4_effect` (pas de corps/prompt/secrets).
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index 4a8083f2..32a91539 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -620,12 +620,38 @@ type ScannedProposal =
   | { status: "unclosed" };

 /**
- * Scan assistant Markdown for contractual `sfia-document` fences.
+ * Skip a non-contractual (illustrative) fence opened at `openIdx`.
+ * Content inside — including nested ```sfia-document examples — is opaque.
+ * Returns the line index after the closing fence, or `lines.length` if unclosed
+ * (caller must not harvest inner contractual markers from an unclosed illustrative).
+ */
+function skipIllustrativeFence(
+  lines: Array<{ text: string; start: number }>,
+  openIdx: number,
+  open: FenceMarker,
+): number {
+  for (let j = openIdx + 1; j < lines.length; j++) {
+    const cand = parseFenceMarkerLine(lines[j]!.text);
+    if (cand && isFenceClose(cand, open)) {
+      return j + 1;
+    }
+  }
+  return lines.length;
+}
+
+/**
+ * Scan assistant Markdown for autonomous top-level `sfia-document` fences.
  *
- * Line-oriented fence recognition (indent ≤ 3, backtick/tilde runs). Inside a
- * contractual proposal, nested code fences are tracked with a stack so an inner
- * ```bash … ``` does not terminate the outer proposal (document-integrity rule;
- * equal-length CommonMark alone would truncate — we refuse that silent failure).
+ * First-level structure:
+ * - conversational text (no fence);
+ * - illustrative fences (any non-`sfia-document` open) — opaque until closed;
+ * - autonomous contractual `sfia-document` fences — extractable proposals.
+ *
+ * Inside a contractual proposal, nested code fences are tracked with a stack so
+ * an inner ```bash … ``` does not terminate the outer proposal.
+ *
+ * A `sfia-document` marker nested inside an illustrative fence is never an
+ * autonomous proposal (isolation rule).
  */
 export function scanContractualDocumentFences(assistantText: string): {
   proposals: ScannedProposal[];
@@ -638,10 +664,19 @@ export function scanContractualDocumentFences(assistantText: string): {

   while (i < lines.length) {
     const open = parseFenceMarkerLine(lines[i]!.text);
-    if (!open || !isContractualProposalOpen(open)) {
+    if (!open) {
       i += 1;
       continue;
     }
+
+    // Illustrative / non-mutative fence: skip entirely (do not scan interior).
+    // Unclosed illustrative → advance to EOF; never promote interior markers.
+    if (!isContractualProposalOpen(open)) {
+      i = skipIllustrativeFence(lines, i, open);
+      continue;
+    }
+
+    // Autonomous contractual proposal at first level.
     contractualOpenCount += 1;
     const bodyStartLine = i + 1;
     const nest: Array<{ char: "`" | "~"; length: number }> = [];
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 91f93137..660c3eaf 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -488,6 +488,14 @@ export async function postUserMessageAndNora(
     await turnRaceHooks.afterGenerateBeforeEffects();
   }

+  // Test-only injection: swap assistant text before contractual extraction / D4.
+  if (turnRaceHooks.replaceNoraAssistantText && reply.status === "COMPLETE") {
+    reply = {
+      ...reply,
+      content: turnRaceHooks.replaceNoraAssistantText(reply.content),
+    };
+  }
+
   // Ownership may have been revoked/reconciled during generation — no COMPLETE, no D4.
   if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
     emitObs({
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
index 1bb7ba40..ad960578 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
@@ -118,6 +118,11 @@ export const turnRaceHooks: {
   afterGenerateBeforeEffects?: () => Promise<void>;
   beforeD4Effect?: () => Promise<void>;
   beforeTerminalCommit?: () => Promise<void>;
+  /**
+   * Test-only: replace Nora assistant text after generate, before D4 extraction.
+   * Used to inject nested illustrative fences without LIVE Nora or production bypass.
+   */
+  replaceNoraAssistantText?: (text: string) => string;
   /**
    * Runs inside the terminal TX after optional assistant INSERT, before CAS UPDATE.
    * May mutate the same TX (e.g. revoke token) to force CAS miss + rollback.
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
index 4bd1f118..b6252bff 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
@@ -29,6 +29,7 @@ import {
   savePreparationDocument,
 } from "@/domains/document/service";
 import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";
+import { turnRaceHooks } from "@/domains/conversation/turn-command";
 import {
   assertSectionScope,
   extractContractualDocumentProposal,
@@ -567,4 +568,125 @@ s
     expect(docs).toHaveLength(1);
     expect(docs[0]!.latestRevision?.revisionNumber).toBe(1);
   });
+
+  it("B-iso-neg CREATE: nested illustrative sfia-document → FAILED MISSING, zero D4 write", async () => {
+    const pilotId = await seedPilot("ml4-iso-create");
+    const prep = await openOrCreatePreparation(pilotId);
+    turnRaceHooks.replaceNoraAssistantText = () =>
+      "Je peux illustrer la syntaxe:\n\n" +
+      "````markdown\n" +
+      "```sfia-document\n" +
+      "# Document fictif imbriqué\n\n" +
+      "Ne doit jamais être persisté.\n" +
+      "```\n" +
+      "````\n";
+    try {
+      const chat = await postUserMessageAndNora(
+        pilotId,
+        prep.id,
+        "Rédige un document de synthèse sur Isolation Create",
+      );
+      expect(chat.documentSave?.status).toBe("FAILED");
+      expect(chat.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
+      expect(chat.documentSave?.act).toBe("CREATE");
+      expect(chat.documentSave?.documentId).toBeUndefined();
+      expect(chat.documentSave?.revisionId).toBeUndefined();
+      expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
+      const msgs = await listMessages(pilotId, prep.id);
+      const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
+      expect(assistant?.content).not.toMatch(/enregistré avec succès/i);
+      expect(assistant?.content ?? "").toMatch(/DOCUMENT_PROPOSAL_MISSING|non enregistré|FAILED|proposition/i);
+    } finally {
+      delete turnRaceHooks.replaceNoraAssistantText;
+    }
+  });
+
+  it("B-iso-neg REVISE: nested illustrative sfia-document → FAILED MISSING, doc unchanged at v1", async () => {
+    const pilotId = await seedPilot("ml4-iso-revise");
+    const prep = await openOrCreatePreparation(pilotId);
+    const seeded = await savePreparationDocument(
+      pilotId,
+      prep.id,
+      "Doc isolation revise",
+      "# Doc isolation revise\n\n## Section 1\n\na\n\n## Section 2\n\nb original\n\n## Section 3\n\nc\n",
+      undefined,
+      { correlationKey: newId("ck") },
+    );
+    expect(seeded.status).toBe("AVAILABLE");
+    if (seeded.status !== "AVAILABLE" || !seeded.documentId || !seeded.revisionId) {
+      throw new Error("seed AVAILABLE required");
+    }
+    const documentId = seeded.documentId;
+    const v1Body = await getDocumentRevision(pilotId, prep.id, documentId, seeded.revisionId);
+    expect(v1Body.status).toBe("AVAILABLE");
+    if (v1Body.status !== "AVAILABLE") return;
+
+    turnRaceHooks.replaceNoraAssistantText = () =>
+      "Exemple de révision:\n\n" +
+      "````markdown\n" +
+      "```sfia-document\n" +
+      "## Section 2 — Contenu révisé\n\n" +
+      "corps fictif imbriqué\n" +
+      "```\n" +
+      "````\n";
+    try {
+      const revised = await postUserMessageAndNora(
+        pilotId,
+        prep.id,
+        `Révise uniquement la section 2 du document ${documentId} et conserve le reste`,
+      );
+      expect(revised.documentSave?.status).toBe("FAILED");
+      expect(revised.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
+      expect(revised.documentSave?.act).toBe("REVISE");
+      const listed = await listDocumentRevisions(pilotId, prep.id, documentId);
+      expect(listed.status).toBe("AVAILABLE");
+      expect(listed.revisions).toHaveLength(1);
+      expect(listed.revisions[0]!.revisionNumber).toBe(1);
+      expect(listed.revisions[0]!.contentMarkdown).toBe(v1Body.revision.contentMarkdown);
+    } finally {
+      delete turnRaceHooks.replaceNoraAssistantText;
+    }
+  });
+
+  it("B-iso-pos: autonomous proposal beside illustrative example → single D4 CREATE", async () => {
+    const pilotId = await seedPilot("ml4-iso-pos");
+    const prep = await openOrCreatePreparation(pilotId);
+    turnRaceHooks.replaceNoraAssistantText = () =>
+      "Exemple illustratif (à ignorer):\n\n" +
+      "````markdown\n```sfia-document\n# Fake\n\nx\n```\n````\n\n" +
+      "Proposition autonome:\n\n" +
+      "```sfia-document\n" +
+      "# Synthèse isolation positive\n\n" +
+      "## Section 1 — Contexte\n\nContexte.\n\n" +
+      "## Section 2 — Analyse\n\nAnalyse réelle.\n\n" +
+      "## Section 3 — Suite\n\nSuite.\n" +
+      "```\n\n" +
+      "Compte rendu hors fence: non documentaire.\n";
+    try {
+      const chat = await postUserMessageAndNora(
+        pilotId,
+        prep.id,
+        "Rédige un document de synthèse sur Isolation Positive",
+      );
+      expect(chat.documentSave?.status).toBe("AVAILABLE");
+      expect(chat.documentSave?.act).toBe("CREATE");
+      expect(chat.documentSave?.revisionNumber).toBe(1);
+      const docs = await listDocuments(pilotId, prep.id);
+      expect(docs).toHaveLength(1);
+      const rev = await getDocumentRevision(
+        pilotId,
+        prep.id,
+        chat.documentSave!.documentId!,
+        chat.documentSave!.revisionId!,
+      );
+      expect(rev.status).toBe("AVAILABLE");
+      if (rev.status !== "AVAILABLE") return;
+      expect(rev.revision.contentMarkdown).toContain("# Synthèse isolation positive");
+      expect(rev.revision.contentMarkdown).toContain("Analyse réelle");
+      expect(rev.revision.contentMarkdown).not.toContain("# Fake");
+      expect(rev.revision.contentMarkdown).not.toContain("Compte rendu hors fence");
+    } finally {
+      delete turnRaceHooks.replaceNoraAssistantText;
+    }
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
index 449eccbc..55724d25 100644
--- a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
@@ -17,6 +17,7 @@ import {
   qualifyDocumentAct,
   reconcileNarrationWithDocumentEffect,
   resolveReviseTarget,
+  scanContractualDocumentFences,
   splitMarkdownSections,
 } from "@/domains/conversation/document-act";

@@ -904,3 +905,176 @@ describe("document proposal fence scanner — positives / negatives", () => {
     expect(ex.ok).toBe(false);
   });
 });
+
+describe("illustrative fence isolation — Cycle 8 (N1–N12)", () => {
+  const nestedMarkdown = `Explication:
+
+\`\`\`\`markdown
+Exemple de syntaxe:
+
+\`\`\`sfia-document
+# Document fictif
+
+Corps assez long pour ne pas être un seuil xx.
+\`\`\`
+\`\`\`\`
+`;
+
+  it("N1: outer markdown fence with inner sfia-document → MISSING, no content", () => {
+    const scan = scanContractualDocumentFences(nestedMarkdown);
+    expect(scan.contractualOpenCount).toBe(0);
+    expect(scan.proposals).toHaveLength(0);
+    const ex = extractContractualDocumentProposal(nestedMarkdown);
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
+    expect(ex.proposalChars).toBe(0);
+  });
+
+  it("N2: outer text fence with inner sfia-document → no autonomous proposal", () => {
+    const text = `\`\`\`\`text
+\`\`\`sfia-document
+# Inner text host
+
+body long enough xx
+\`\`\`
+\`\`\`\`
+`;
+    const scan = scanContractualDocumentFences(text);
+    expect(scan.contractualOpenCount).toBe(0);
+    expect(scan.proposals).toHaveLength(0);
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
+  });
+
+  it("N3: outer tilde fence with inner backtick sfia-document → no autonomous proposal", () => {
+    const text = `~~~~text
+\`\`\`sfia-document
+# Inner tilde host
+
+body long enough xx
+\`\`\`
+~~~~
+`;
+    const scan = scanContractualDocumentFences(text);
+    expect(scan.contractualOpenCount).toBe(0);
+    expect(scan.proposals).toHaveLength(0);
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(false);
+  });
+
+  it("N4: Git README excerpt with nested sfia-document example → no mutative proposal", () => {
+    const text = `Source consultée (README):
+
+\`\`\`\`markdown
+# README
+
+Exemple:
+
+\`\`\`sfia-document
+# Hostile excerpt
+
+Do not persist.
+\`\`\`
+\`\`\`\`
+`;
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
+  });
+
+  it("N5: two sfia-document examples inside one illustrative fence → zero proposals", () => {
+    const text = `\`\`\`\`markdown
+\`\`\`sfia-document
+# A
+
+body a long enough xx
+\`\`\`
+
+\`\`\`sfia-document
+# B
+
+body b long enough yy
+\`\`\`
+\`\`\`\`
+`;
+    const scan = scanContractualDocumentFences(text);
+    expect(scan.contractualOpenCount).toBe(0);
+    expect(scan.proposals).toHaveLength(0);
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
+  });
+
+  it("N6: unclosed illustrative fence with inner sfia-document → no silent recovery", () => {
+    const text = `\`\`\`\`markdown
+\`\`\`sfia-document
+# Trapped
+
+body long enough xx
+\`\`\`
+`;
+    const scan = scanContractualDocumentFences(text);
+    expect(scan.contractualOpenCount).toBe(0);
+    expect(scan.proposals).toHaveLength(0);
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
+  });
+
+  it("N7: valid autonomous proposal then illustrative example → one proposal, real doc only", () => {
+    const text =
+      "```sfia-document\n# Real Doc\n\n## Section 1\n\nBody content here.\n```\n\n" +
+      "````markdown\n```sfia-document\n# Fake\n\nignore\n```\n````\n";
+    const scan = scanContractualDocumentFences(text);
+    expect(scan.contractualOpenCount).toBe(1);
+    expect(scan.proposals).toHaveLength(1);
+    expect(scan.proposals[0]).toMatchObject({ status: "ok" });
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(true);
+    if (!ex.ok) return;
+    expect(ex.content).toContain("# Real Doc");
+    expect(ex.content).not.toContain("# Fake");
+    expect(ex.fenceCount).toBe(1);
+  });
+
+  it("N8: illustrative fence before valid top-level sfia-document → ignore then accept", () => {
+    const text =
+      "````markdown\n```sfia-document\n# Fake first\n\nx\n```\n````\n\n" +
+      "```sfia-document\n# Real After\n\n## Section 1\n\nBody.\n```\n";
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(true);
+    if (!ex.ok) return;
+    expect(ex.content).toContain("# Real After");
+    expect(ex.content).not.toContain("Fake first");
+  });
+
+  it("N9: two autonomous top-level sfia-document → AMBIGUOUS", () => {
+    const text =
+      "```sfia-document\n# A\n\nbody one long enough xx\n```\n\n" +
+      "```sfia-document\n# B\n\nbody two long enough yy\n```\n";
+    const ex = extractContractualDocumentProposal(text);
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_AMBIGUOUS");
+  });
+
+  it("N10: near-miss markers never authorize D4", () => {
+    for (const open of ["```sfia-documentation", "```mdx", "```md", "```markdown"]) {
+      const ex = extractContractualDocumentProposal(`${open}\n# Doc\n\nbody long enough xx\n\`\`\`\n`);
+      expect(ex.ok).toBe(false);
+      if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
+    }
+  });
+
+  it("N11: unclosed autonomous proposal → UNCLOSED", () => {
+    const ex = extractContractualDocumentProposal("```sfia-document\n# Doc\n\nnever closed\n");
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_UNCLOSED");
+  });
+
+  it("N12: closed but empty proposal → EMPTY", () => {
+    const ex = extractContractualDocumentProposal("```sfia-document\n\n```\n");
+    expect(ex.ok).toBe(false);
+    if (!ex.ok) expect(ex.reason).toBe("DOCUMENT_PROPOSAL_EMPTY");
+  });
+});

```

## 16. Réserves

- Aucune preuve LIVE Nora.
- Aucune preuve USER RECETTE / R06 utilisateur.
- Pas de READY FOR MERGE / STABLE / ADOPTED / R06 PASS / ML4-REC-08 CLOSED.
- Handoff L3 mono-fichier uniquement ; branche produit **non** poussée.

---

## 17. Verdict

**READY FOR REVIEW — ILLUSTRATIVE FENCE ISOLATION VERIFIED LOCALLY.**

### Gate Morris suivant

Revue ChatGPT du handoff L3 : vérifier isolation structurelle premier niveau, absence de capture imbriquée, intégrité propositions réelles, preuves PG service conversationnel (`d4_attempted=false`), absence de nouveau moteur, complétude diffs. Puis décision Morris (éventuelle bascule RECETTE / USER) — **aucune bascule automatique**.

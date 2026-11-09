# SFIA Review Pack FULL — Cycle 8 — R06 section D4 + Nora truth

- date_heure: 2026-11-09T18:17:36+01:00
- process: SFIA v2.6
- type: CYCLE 8 — DELIVERY / IMPLÉMENTATION
- typologie: RUN / CORRECTIF
- profil: STANDARD
- product: SFIA Studio Next — R5 / ML4
- GO Morris: 2026-11-09 — diagnostic RECETTE READ-ONLY + correction DEV + tests + docs + handoff L3
- GO NON ACQUIS: redéploiement RECETTE, push projet, PR, merge, mutation GitHub REAL, restore DB, exécution R06 utilisateur LIVE

## Verdict

**READY FOR REVIEW — R06 REAL-DOCUMENT STRUCTURE CORRECTIVE VERIFIED LOCALLY**

Non-annoncé: R06 PASS ; REC-08 CLOSED ; ML4 ACCEPTED ; RECETTE PASS ; LIVE BEHAVIOR PROVEN ; ADOPTED.

Fake/Real: DETERMINISTIC PROVEN (Nora fixture SCRIPTED) ; LIVE NOT RUN ; GitHub REAL write NONE.
DETERMINISTIC PROVEN ≠ READY FOR REAL.

## 1. Git Truth Check

| Ref | SHA |
| --- | --- |
| Branche | fix/next-ml4-chat-first-d4-provenance-20261109 |
| HEAD départ | a2c5e9f8819cbe547bf925b39f38f783fc8aa52b |
| HEAD final (commit correctif local) | 8ba777300adebe3ba70ddbe3c386a3ad709034f6 |
| tree final | 368159d7e8cdbc0bbb504f87d6deb12c04e6b129 |
| parent | a2c5e9f8819cbe547bf925b39f38f783fc8aa52b |
| Base macro | 974b0030a94469bef05496151792e8c35a9a83e9 |
| origin/main | 6667a43858a5421e391b7441246536daad148bd6 |
| origin/feat | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b |
| origin/sfia/review-handoff (pré-publish) | 9a23e0497b8ecc47bda429f168e0aad56e78e9dc |
| docs registre | 9db2ae2a52b758ab77254c0f33eacd047803c380 (lecture seule) |

Aucun push projet. Aucun rebase/reset destructif.

## 2. ENV-01

- DEV: lane autorisée mutations/tests ; PG :5433 ; STUDIO_LANE=DEV
- RECETTE: READ-ONLY diagnostic ; runtime inchangé `a2c5e9f8` / BUILD `9yCs2GbSS5lDFX3LPiQTU` @ :3200 ; DB sfia_next_recette_ml4 :5434
- STABLE: NOT AVAILABLE
- Backup présent: /Users/morris/Projects/sfia-recette-backups/ml4-20261109-173817-pre-a2c5e9f8 (non restauré)
- Mutations GitHub REAL: OFF
- Post-cycle: v1 toujours seule (drev_c07ca162… AVAILABLE md5 de4bd1a6… len chars 8586) — **0 v2 utilisateur**

## 3. Phase A — Diagnostic READ-ONLY v1

Identifiants vérifiés:
- doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2
- drev_c07ca162-faa4-48f5-b705-018e41ae88d9
- title: Références externes — Enseignements de Chantiers360
- md5: de4bd1a6e59f5dea12fd38ce265b5f43

Structure pertinente (pas de corps intégral recopié):
- ATX `#` titre document
- ATX `## 1. Contexte et objectif`
- ATX `## 2. Sources consultées et provenance disponible` (unique index 2 de tête)
- ATX `### Source 1 — …` / `### Source 2 — Definition of Done…` (Source 2 ≠ section 2)
- ATX `## 3.` + `### 3.1`…`### 3.2` (3.2 contient un «2» embarqué)
- ATX `## 4.` / `## 5.` + liste ordonnée `1.`…`7.` (hors locateSections)
- ATX `## Résultat de l'opération` + tableaux

Reproduction avant correctif (`applyTargetedSectionRevision` @ a2c5e9f8):
- hint `"2"` / `"section 2"` → **SECTION_AMBIGUOUS_OR_MISSING_IN_BASE**
- hint titre complet «Sources consultées…» → OK (preuve que la section existe)

Cause racine confirmée:
`matchSectionSpans` utilisait `\b${hint}\b`, donc `"2"` matchait aussi «Source 2» et «3.2».

Hypothèses écartées:
- absence de section 2
- format non-ATX exclusif (v1 est ATX numéroté)
- besoin d'un parseur de listes numérotées hors titres

## 4. Phase B — Correction résolution de section

Fichier: `web/src/domains/conversation/document-act.ts`
- `leadingSectionNumber` : reconnaît `2. Title` / `Section 2 —` ; ignore Source 2 / 3.2
- `matchSectionSpans` : match par index de tête (et titre optionnel), plus de `\b2\b` nu
- ATX fixtures existantes préservées

Après correctif sur v1 exacte: hint `2` / `section 2` / titre → OK ; `assertSectionScope` OK ; prefix/suffix hors cible byte-identiques.

## 5. Phase C — Vérité Nora / D4

- ACK FAILED: motif Studio + clarification que les outils Nora RO ne sont pas la cause d'un refus déjà observé
- `composeDocumentTurnMessage` retire les claims « lecture seule / je ne peux pas exécuter l'enregistrement » dès qu'un effet D4 est observé
- `hasCompetingTransactionalClaim` étendu aux FAILED/CONFLICT/UNKNOWN

## 6. Tests exécutés (ce cycle)

| Suite | Résultat |
| --- | --- |
| unit document-act | **32 PASS** |
| PG ml4-chat-first-d4-provenance | **9 PASS** (oracle R06 structure réelle inclus) |
| PG ml2-knowledge-documents | **6 PASS** |
| unit git-file-provenance | **2 PASS** |
| tsc --noEmit | PASS |
| next lint | warnings préexistants + escapeRegExp retiré |
| next build | PASS |

Oracle R06: fixture assainie twin structural CampusFlow ; `postUserMessageAndNora` DET ; v1+v2 ; hors-cible exact ; pas d'écriture GitHub.

## 7. Absence mutation RECETTE

- Aucun reviseDocument sur RECETTE
- Aucun redémarrage / changement config RECETTE
- Fingerprint v1 post-cycle: inchangé
- Runtime servi: toujours BUILD 9yCs2GbSS5lDFX3LPiQTU

## 8. Versioning

- technical 0.0.0-dev ; NO RELEASE ; PATCH candidate
- STABLE NOT AVAILABLE
- Candidat local nouveau: 8ba777300adebe3ba70ddbe3c386a3ad709034f6 (≠ a2c5e9f8 servi en RECETTE)

## 9. Commit local

```
commit 8ba777300adebe3ba70ddbe3c386a3ad709034f6
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Mon Nov 9 18:17:04 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Mon Nov 9 18:17:04 2026 +0100

    fix(studio-next): resolve numbered D4 section targeting and Nora ACK truth

    R06-F failed on RECETTE because hint "2" matched Source 2/3.2 via bare word boundaries; match leading section indexes only and keep Studio FAILED reasons as the sole transactional verdict.

    Co-authored-by: Cursor <cursoragent@cursor.com>
---
 .../construction/delivery-history.md               |  41 ++++++
 .../integration-git/matrice-acceptation.md         |  15 ++
 .../web/src/domains/conversation/document-act.ts   | 100 +++++++++++--
 .../ml4-chat-first-d4-provenance.pg.test.ts        |  42 +++++-
 .../web/tests/unit/document-act.test.ts            | 163 +++++++++++++++++++++
 5 files changed, 342 insertions(+), 19 deletions(-)

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 741d04c0..ea55774d 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1121,3 +1121,44 @@ Append-only logical journal of Cursor product deliveries.
 | Push Product distant | **AUCUN** sans GO distinct |
 | USER E2E | NOT RUN |
 | Verdict candidat | `ML4 RECETTE ENVIRONMENT — STAGED AND VERIFIED — AWAITING MORRIS G4 SWITCH GO` (si build local OK) |
+
+## delivery_id: DELIV-2026-11-09-ML4-RECETTE-SWITCH-A2C5E9F8
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-09 ~17:43 CET |
+| Macro-capacité | R5 / ML4 — Mise à disposition RECETTE macro-correctif Chat First D4 + provenance Git |
+| Type | CYCLE 11 DÉPLOIEMENT / RECETTE — `NO RELEASE` / PATCH candidate / `0.0.0-dev` |
+| Autorité / GO | Morris GO 2026-11-09 CRITICAL — bascule RECETTE conditionnelle ; push Product / PR / merge / STABLE / REAL mutation **NON inclus** |
+| Source applicative | `a2c5e9f8819cbe547bf925b39f38f783fc8aa52b` (branche `fix/next-ml4-chat-first-d4-provenance-20261109`) |
+| Tree | `5d245e8adf1d32a7ceec6b129857d94f6398a488` |
+| Build ID servi | `9yCs2GbSS5lDFX3LPiQTU` @ http://127.0.0.1:3200 |
+| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-a2c5e9f8` |
+| Remplacé | `974b0030…` / BUILD `RzpCuGMK6SnwfucphK7Qa` (artefact préservé) |
+| Migration | **aucune** — `schemaRevision=012_auth_concurrency_safety` inchangé |
+| Données | CampusFlow + D4 v1 `doc_1e5d8c16…` / `drev_c07ca162…` AVAILABLE préservés (md5 `de4bd1a6…`) |
+| Backup | `/Users/morris/Projects/sfia-recette-backups/ml4-20261109-173817-pre-a2c5e9f8` sha256 `7a9dde7b…` — restore DB sans GO Morris **interdit** |
+| Validations | unit document-act 25 PASS ; tsc PASS ; next build PASS ; HTTP smoke 200/401 |
+| Nora | OPENAI PRESENT ; LIVE behavior **NOT PROVEN** ; profil `TEST_BOUNDARY` |
+| GitHub | App RECETTE 5677465/180092114 ; mutations OFF ; REAL write **NONE** |
+| USER RECETTE | **NOT RUN** — R06 réservé Morris |
+| Push Product / PR / merge | **AUCUN** |
+| Manifeste | `construction/integration-git/env01-recette-manifest-ml4-a2c5e9f8-2026-11-09.md` |
+| Verdict candidat | `RECETTE BUILD UPDATED — SOURCE SHA VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN` |
+
+## delivery_id: DELIV-2026-11-09-ML4-R06-SECTION-NORA-CORRECTIVE
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-09 ~18:16 CET |
+| Macro-capacité | R5 / ML4 — Correctif intégré R06 section D4 + vérité Nora |
+| Type | CYCLE 8 DELIVERY / RUN CORRECTIF — `NO RELEASE` / PATCH candidate / `0.0.0-dev` |
+| Autorité / GO | Morris GO 2026-11-09 — diagnostic RECETTE RO + correction DEV + tests + handoff L3 ; **pas** de redéploiement RECETTE / push / PR / merge |
+| Parent HEAD | `a2c5e9f8819cbe547bf925b39f38f783fc8aa52b` |
+| Cause racine | `matchSectionSpans` : hint `"2"` via `\b2\b` ambigu avec `Source 2` / `3.2` sur v1 ATX numérotée |
+| Correctifs | `leadingSectionNumber` + matching structurel ; ACK FAILED distingue outils Nora RO vs refus Studio |
+| Validations | unit document-act **32 PASS** ; PG Chat First **9 PASS** ; PG knowledge **6 PASS** ; provenance **2 PASS** ; tsc PASS ; build PASS |
+| Fake/Real | DETERMINISTIC PROVEN (fixture Nora) ; LIVE NOT RUN ; GitHub REAL write NONE |
+| RECETTE | **inchangée** — SHA servi `a2c5e9f8` / BUILD `9yCs2GbSS5lDFX3LPiQTU` ; v1 md5 `de4bd1a6…` ; 0 v2 |
+| Push Product | **AUCUN** |
+| Verdict candidat | `READY FOR REVIEW — R06 REAL-DOCUMENT STRUCTURE CORRECTIVE VERIFIED LOCALLY` |
diff --git a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
index a08a05a8..593cb767 100644
--- a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
+++ b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
@@ -560,3 +560,18 @@ Verdict : **ML4 CHAT-FIRST CORRECTIVE PASS — LOCALLY VERIFIED — READY FOR RE
 | Provenance REC-07 | INCHANGÉ | non-régression |

 Verdict : **ML4 CHAT-FIRST R06 INTEGRATED CORRECTIVE — LOCALLY VERIFIED — READY FOR REVIEW**.
+
+## 28. R06-F — structure réelle v1 + vérité Nora (2026-11-09)
+
+| Item | Statut | Note |
+|---|---|---|
+| Diagnostic RECETTE READ-ONLY | FAIT | v1 `drev_c07ca162…` md5 `de4bd1a6…` ; ATX numérotés `## 2. Sources…` + `### Source 2` + `### 3.2` |
+| Cause `SECTION_AMBIGUOUS_OR_MISSING_IN_BASE` | CONFIRMÉE | hint `"2"` via `\b2\b` matchait Source 2 / 3.2 — pas absence de section |
+| Résolution de section | CORRIGÉ (DET) | `leadingSectionNumber` + match par index de tête uniquement |
+| Vérité Nora / ACK | CORRIGÉ (DET) | FAILED expose motif Studio ; claims « outils lecture seule » non présentés comme cause |
+| Oracle R06 structure réelle | DET PG PASS | fixture assainie twin structural ; `postUserMessageAndNora` → v2 ; hors-cible exact |
+| Contre-tests section | DET PASS | Source 2 / 3.2 / liste / fence / doublon / absente |
+| RECETTE runtime | INCHANGÉ | build `9yCs2GbSS5lDFX3LPiQTU` / SHA `a2c5e9f8` ; v1 seule ; aucune v2 utilisateur |
+| USER / LIVE | NOT RUN | gate Morris bascule RECETTE sur nouveau candidat |
+
+Verdict : **READY FOR REVIEW — R06 REAL-DOCUMENT STRUCTURE CORRECTIVE VERIFIED LOCALLY**.
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index 5e0e53c2..bc3e911e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -447,14 +447,69 @@ export function splitMarkdownSections(
   }));
 }

+/**
+ * Leading top-level section index from an ATX heading text (no `#`).
+ * Accepts: "2. Title", "Section 2 — Title", "2 — Title".
+ * Rejects embedded numbers: "Source 2 — …", "3.2. Sub", list-like bodies (not headings).
+ */
+export function leadingSectionNumber(heading: string): string | null {
+  const t = heading.trim();
+  const asSection = /^section\s+(\d+)\b/i.exec(t);
+  if (asSection) return asSection[1]!;
+  // "2. Title" — require whitespace after the first dotted integer (excludes "3.2. …").
+  const dotted = /^(\d+)\.\s+\S/.exec(t);
+  if (dotted) return dotted[1]!;
+  const dashed = /^(\d+)\s*[—–\-]\s+\S/.exec(t);
+  if (dashed) return dashed[1]!;
+  return null;
+}
+
+function parseSectionHint(hint: string): { number: string | null; titleTail: string | null } {
+  const h = hint.trim();
+  const withTail =
+    /^(?:section\s+)?(\d+)(?:\s*[.:—–\-]\s*|\s+)(.+)$/i.exec(h) ||
+    /^(?:section\s+)?(\d+)\s*$/i.exec(h);
+  if (withTail) {
+    return {
+      number: withTail[1]!,
+      titleTail: (withTail[2] ?? "").trim() || null,
+    };
+  }
+  return { number: null, titleTail: null };
+}
+
+/**
+ * Resolve section spans for a Pilote/Nora hint.
+ * Numeric hints ("2", "section 2") match only headings whose *leading* section
+ * number is that index — never bare `\b2\b` inside "Source 2" / "3.2".
+ */
 function matchSectionSpans(spans: SectionSpan[], hint: string): SectionSpan[] {
   const h = hint.toLowerCase().trim();
+  if (!h) return [];
+
+  const exact = spans.filter((b) => b.heading.toLowerCase() === h);
+  if (exact.length === 1) return exact;
+
+  const parsed = parseSectionHint(hint);
+  if (parsed.number) {
+    const byNum = spans.filter((b) => leadingSectionNumber(b.heading) === parsed.number);
+    if (parsed.titleTail) {
+      const title = parsed.titleTail.toLowerCase();
+      const refined = byNum.filter((b) => {
+        const heading = b.heading.toLowerCase();
+        return heading.includes(title) || title.includes(heading);
+      });
+      if (refined.length > 0) return refined;
+    }
+    return byNum;
+  }
+
+  // Title-only hint: equality / inclusion — no digit-as-word shortcut.
   return spans.filter(
     (b) =>
       b.heading.toLowerCase() === h ||
       b.heading.toLowerCase().includes(h) ||
-      new RegExp(`\\bsection\\s+${escapeRegExp(h)}\\b`, "i").test(b.heading) ||
-      new RegExp(`\\b${escapeRegExp(h)}\\b`, "i").test(b.heading),
+      h.includes(b.heading.toLowerCase()),
   );
 }

@@ -560,10 +615,6 @@ export function assertSectionScope(
   return { ok: true };
 }

-function escapeRegExp(s: string): string {
-  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
-}
-
 export type DocumentEffectSummary = {
   act: "CREATE" | "REVISE";
   status?: string;
@@ -577,7 +628,11 @@ export type DocumentEffectSummary = {

 /** Sentences/paragraphs that assert a D4 write outcome (must not compete with applicative truth). */
 const TRANSACTIONAL_CLAIM_RE =
-  /\b(?:non\s+enregistré|pas\s+enregistré|n['’]a\s+pas\s+été\s+(?:enregistré|sauvegardé)|aucun\s+outil\s+(?:d['’]écriture|disponible)|les\s+outils\s+disponibles\s+ne\s+permettent\s+pas|je\s+ne\s+peux\s+(?:donc\s+)?pas\s+(?:appliquer|enregistrer|créer|réviser)|aucune\s+révision\s+(?:créée|enregistrée)|nouvelle\s+révision\s*:\s*aucune|la\s+version\s+1\s+reste\s+inchangée|sauvegarde\s+d4\s+uniquement\s+après|rédaction\s+seule\s+[—-]\s+sauvegarde|document\s+(?:créé|enregistré|sauvegardé)\s+avec\s+succès|j['’]ai\s+(?:enregistré|sauvegardé|créé)\s+le\s+document|écriture\s+d4\s+confirmée)\b/i;
+  /\b(?:non\s+enregistré|pas\s+enregistré|n['’]a\s+pas\s+été\s+(?:enregistré|sauvegardé)|aucun\s+outil\s+(?:d['’]écriture|disponible)|les\s+outils\s+disponibles\s+(?:sont\s+en\s+lecture\s+seule|ne\s+permettent\s+pas)|outils?\s+(?:en\s+)?lecture\s+seule|je\s+ne\s+peux\s+(?:donc\s+)?pas\s+(?:exécuter\s+l['’]enregistrement|appliquer|enregistrer|créer|réviser)|aucune\s+révision\s+(?:créée|enregistrée)|nouvelle\s+révision\s*:\s*aucune|la\s+version\s+1\s+reste\s+inchangée|sauvegarde\s+d4\s+uniquement\s+après|rédaction\s+seule\s+[—-]\s+sauvegarde|document\s+(?:créé|enregistré|sauvegardé)\s+avec\s+succès|j['’]ai\s+(?:enregistré|sauvegardé|créé)\s+le\s+document|écriture\s+d4\s+confirmée)\b/i;
+
+/** Nora tool-boundary claims that must not be presented as the cause of an observed Studio D4 effect. */
+const NORA_TOOL_BOUNDARY_CLAIM_RE =
+  /\b(?:les\s+outils\s+disponibles\s+(?:sont\s+en\s+lecture\s+seule|ne\s+permettent\s+pas)|aucun\s+outil\s+(?:d['’]écriture|disponible)|outils?\s+(?:en\s+)?lecture\s+seule|je\s+ne\s+peux\s+(?:donc\s+)?pas\s+(?:exécuter\s+l['’]enregistrement|appliquer|enregistrer|créer|réviser))\b/i;

 /**
  * Extract prepared document markdown (fence or ATX body) from Nora narration.
@@ -665,6 +720,12 @@ export function formatDocumentEffectAck(effect: DocumentEffectSummary | null): s
     );
   } else if (effect.status === "CONFLICT") {
     lines.push("", "Conflit de base — aucune nouvelle révision écrite. Requalification requise.");
+  } else if (effect.status === "FAILED") {
+    lines.push(
+      "",
+      "Studio a exécuté l'acte documentaire et a refusé l'écriture. Le motif ci-dessus est le verdict transactionnel.",
+      "Les outils Nora restent en lecture seule ; cela n'explique pas un refus applicatif déjà observé.",
+    );
   } else if (effect.status && effect.status !== "AVAILABLE") {
     lines.push("", "Aucun succès d'écriture D4 ne doit être affirmé pour ce tour.");
   }
@@ -683,9 +744,16 @@ export function composeDocumentTurnMessage(
   const sanitized = reconcileNarrationWithDocumentEffect(assistantContent, effect);
   const ack = formatDocumentEffectAck(effect);
   // Final safety: drop residual contradictory fragments after sanitize.
-  let body = sanitized;
-  if (effect.status === "AVAILABLE") {
-    body = stripTransactionalClaimUnits(body);
+  // When Studio observed any D4 effect, Nora tool-boundary claims must not compete
+  // with the applicative verdict (AVAILABLE *or* FAILED/CONFLICT/UNKNOWN).
+  let body = stripTransactionalClaimUnits(sanitized);
+  if (effect.status !== "AVAILABLE") {
+    // Keep non-transactional cognitive text, but always drop tool-boundary excuses.
+    const parts = body.split(/\n{2,}/);
+    body = parts
+      .filter((p) => !NORA_TOOL_BOUNDARY_CLAIM_RE.test(p))
+      .join("\n\n")
+      .trim();
   }
   return `${body.trimEnd()}\n\n---\n${ack}\n`;
 }
@@ -705,10 +773,16 @@ export function hasCompetingTransactionalClaim(
   if (!effect) return false;
   const withoutAck = message.replace(/### Résultat applicatif D4[\s\S]*$/i, "");
   if (effect.status === "AVAILABLE") {
-    return TRANSACTIONAL_CLAIM_RE.test(withoutAck) &&
-      /\b(?:aucune\s+révision|ne\s+peux\s+(?:donc\s+)?pas\s+appliquer|non\s+enregistré|outils?\s+disponibles\s+ne\s+permettent)\b/i.test(
+    return (
+      TRANSACTIONAL_CLAIM_RE.test(withoutAck) &&
+      /\b(?:aucune\s+révision|ne\s+peux\s+(?:donc\s+)?pas\s+(?:exécuter|appliquer)|non\s+enregistré|outils?\s+disponibles|lecture\s+seule)\b/i.test(
         withoutAck,
-      );
+      )
+    );
+  }
+  // Observed FAILED/CONFLICT/UNKNOWN: Nora must not blame missing write tools for the outcome.
+  if (effect.status === "FAILED" || effect.status === "CONFLICT" || effect.status === "UNKNOWN") {
+    return NORA_TOOL_BOUNDARY_CLAIM_RE.test(withoutAck);
   }
   return false;
 }
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
index f749715d..85a076c7 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
@@ -360,19 +360,47 @@ Fin.

   it("R06 oracle: quoted title revise via postUserMessageAndNora (DET fixture)", async () => {
     const title = "Références externes — Enseignements de Chantiers360";
+    // Structural twin of RECETTE v1 (numbered ATX + Source 2 + 3.2 + ordered list) — sanitized.
     const v1Body = `# ${title}

-## Section 1 — Contexte
+## 1. Contexte et objectif

 Contexte CampusFlow.

-## Section 2 — Sources consultées et provenance disponible
+## 2. Sources consultées et provenance disponible
+
+### Source 1 — Première consultation : référence à compléter
+
+| Élément | Provenance disponible |
+| --- | --- |
+| Chemin | docs/example.md |
+| Limite | incompleteness |
+
+### Source 2 — Definition of Done de Chantiers360
+
+| Élément | Provenance vérifiée |
+| --- | --- |
+| Blob SHA | blob_example |
+| Commit SHA | commit_example |
+
+## 3. Enseignements utiles

-- Source initiale (SHA fichier confondu avec commit).
+### 3.1. Qualité

-## Section 3 — Limites
+Q.
+
+### 3.2. Traçabilité
+
+T.
+
+## 4. Limites de transposition

 Aucune écriture GitHub.
+
+## 5. Points à clarifier par le Pilote
+
+1. **Première référence :** question A ?
+2. **Réservation reconnue :** question B ?
 `;
     const pilotId = await seedPilot("ml4-r06");
     const prep = await openOrCreatePreparation(pilotId);
@@ -423,9 +451,11 @@ Aucune écriture GitHub.
     const v1 = listed.revisions.find((r) => r.revisionNumber === 1)!;
     const v2 = listed.revisions.find((r) => r.revisionNumber === 2)!;
     expect(assertSectionScope(v1.contentMarkdown, v2.contentMarkdown, "2")).toEqual({ ok: true });
-    expect(v2.contentMarkdown).toContain("## Section 1 — Contexte");
-    expect(v2.contentMarkdown).toContain("## Section 3 — Limites");
+    expect(v2.contentMarkdown).toContain("## 1. Contexte et objectif");
+    expect(v2.contentMarkdown).toContain("## 3. Enseignements utiles");
+    expect(v2.contentMarkdown).toContain("### 3.2. Traçabilité");
     expect(v2.contentMarkdown).toContain("Aucune écriture GitHub.");
+    expect(v2.contentMarkdown).toContain("2. **Réservation reconnue :** question B ?");

     const msgs = await listMessages(pilotId, prep.id);
     const last = msgs.filter((m) => m.role === "assistant").at(-1)!;
diff --git a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
index 9ccd09ca..dd01ff7c 100644
--- a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
@@ -11,6 +11,7 @@ import {
   isGlobalDocumentWriteNegation,
   isInformativeOrHypothetical,
   isPolitePositiveDocumentAction,
+  leadingSectionNumber,
   locateSections,
   qualifyDocumentAct,
   reconcileNarrationWithDocumentEffect,
@@ -239,6 +240,140 @@ Nouveau texte ciblé.
   });
 });

+describe("document-act CampusFlow-like numbered ATX (R06-F root cause)", () => {
+  /** Sanitized structural twin of RECETTE v1 — numbered ATX + Source 2 + 3.2 sub + ordered list. */
+  const campusLike = `# Références externes — Enseignements de Chantiers360
+
+## 1. Contexte et objectif
+
+Contexte A.
+
+## 2. Sources consultées et provenance disponible
+
+### Source 1 — Première consultation : référence à compléter
+
+| Élément | Provenance disponible |
+| --- | --- |
+| Chemin | a/b.md |
+| Limite | incompleteness |
+
+### Source 2 — Definition of Done de Chantiers360
+
+| Élément | Provenance vérifiée |
+| --- | --- |
+| Blob SHA | blob_aaa |
+| Commit SHA | commit_bbb |
+
+## 3. Enseignements utiles
+
+### 3.1. Qualité
+
+Q.
+
+### 3.2. Traçabilité
+
+T.
+
+## 4. Limites de transposition
+
+Limites.
+
+## 5. Points à clarifier par le Pilote
+
+1. **Première référence :** question A ?
+2. **Réservation reconnue :** question B ?
+3. **Concurrence :** question C ?
+
+## Résultat de l’opération
+
+| Élément | Résultat |
+| --- | --- |
+| X | Y |
+`;
+
+  it("leadingSectionNumber ignores Source 2 / 3.2 / list items", () => {
+    expect(leadingSectionNumber("2. Sources consultées et provenance disponible")).toBe("2");
+    expect(leadingSectionNumber("Section 2 — Analyse")).toBe("2");
+    expect(leadingSectionNumber("Source 2 — Definition of Done de Chantiers360")).toBeNull();
+    expect(leadingSectionNumber("3.2. Traçabilité")).toBeNull();
+    expect(leadingSectionNumber("Résultat de l’opération")).toBeNull();
+  });
+
+  it("resolves section 2 uniquely despite Source 2 and 3.2 (repro R06-F)", () => {
+    const proposed = `## 2. Sources consultées et provenance disponible
+
+### Source 1 — Première consultation : référence à compléter
+
+| Élément | Provenance disponible |
+| --- | --- |
+| Blob SHA | blob_fixed |
+| Commit SHA | commit_fixed |
+
+### Source 2 — Definition of Done de Chantiers360
+
+Conservé.
+`;
+    // Before corrective: hint "2" matched Source 2 / 3.2 via \\b2\\b → AMBIGUOUS.
+    const merged = applyTargetedSectionRevision(campusLike, proposed, "2");
+    expect(merged.ok).toBe(true);
+    if (!merged.ok) return;
+    expect(assertSectionScope(campusLike, merged.content, "2")).toEqual({ ok: true });
+    expect(merged.content).toContain("blob_fixed");
+    expect(merged.content).toContain("## 1. Contexte et objectif");
+    expect(merged.content).toContain("## 3. Enseignements utiles");
+    expect(merged.content).toContain("### 3.2. Traçabilité");
+    expect(merged.content).toContain("2. **Réservation reconnue :** question B ?");
+    expect(merged.content.slice(0, campusLike.indexOf("\n\n### Source 1"))).toBe(
+      campusLike.slice(0, campusLike.indexOf("\n\n### Source 1")),
+    );
+  });
+
+  it("accepts section 2 with full title hint and Section-prefixed proposal", () => {
+    const proposed = `## Section 2 — Sources consultées et provenance disponible
+
+Nouveau corps section 2.
+`;
+    expect(applyTargetedSectionRevision(campusLike, proposed, "2").ok).toBe(true);
+    expect(
+      applyTargetedSectionRevision(
+        campusLike,
+        proposed,
+        "Sources consultées et provenance disponible",
+      ).ok,
+    ).toBe(true);
+  });
+
+  it("refuses missing / duplicate leading section 2", () => {
+    const missing = campusLike.replace("## 2. Sources consultées et provenance disponible", "## 9. Autre");
+    expect(applyTargetedSectionRevision(missing, "## 2. X\n\ny\n", "2").ok).toBe(false);
+    const dup = `${campusLike}\n## 2. Doublon structurel\n\nz\n`;
+    expect(applyTargetedSectionRevision(dup, "## 2. X\n\ny\n", "2").ok).toBe(false);
+  });
+
+  it("does not treat numbered list or table cell as section heading", () => {
+    const headings = locateSections(campusLike).map((s) => s.heading);
+    expect(headings.some((h) => /^2\. \*\*Réservation/.test(h))).toBe(false);
+    expect(headings.filter((h) => leadingSectionNumber(h) === "2")).toEqual([
+      "2. Sources consultées et provenance disponible",
+    ]);
+  });
+
+  it("refuses fence-hidden fake section 2", () => {
+    const fenced = `# Doc
+
+\`\`\`
+## 2. Hidden
+body
+\`\`\`
+
+## 1. Real
+
+x
+`;
+    expect(applyTargetedSectionRevision(fenced, "## 2. X\n\ny\n", "2").ok).toBe(false);
+  });
+});
+
 describe("document-act ACK coherence (finalisation)", () => {
   it("formats AVAILABLE create ACK", () => {
     const ack = formatDocumentEffectAck({
@@ -302,6 +437,34 @@ describe("document-act ACK coherence (finalisation)", () => {
     expect(text).not.toMatch(/enregistré le document avec succès/i);
   });

+  it("FAILED ACK: tool read-only claim is not the cause when Studio refused", () => {
+    const out = composeDocumentTurnMessage(
+      "Les outils disponibles sont en lecture seule.\n\n" +
+        "Je ne peux pas exécuter l'enregistrement dans D4.\n\n" +
+        "Proposition utile pour la section 2.",
+      {
+        act: "REVISE",
+        status: "FAILED",
+        reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE",
+        documentId: "doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2",
+        baseRevisionId: "drev_c07ca162-faa4-48f5-b705-018e41ae88d9",
+      },
+    );
+    expect(out).toMatch(/Résultat applicatif D4/);
+    expect(out).toMatch(/SECTION_AMBIGUOUS_OR_MISSING_IN_BASE/);
+    expect(out).toMatch(/Studio a exécuté l'acte documentaire/);
+    expect(out).toContain("Proposition utile pour la section 2.");
+    expect(out).not.toMatch(/outils disponibles sont en lecture seule/i);
+    expect(out).not.toMatch(/je ne peux pas exécuter l'enregistrement/i);
+    expect(
+      hasCompetingTransactionalClaim(out, {
+        act: "REVISE",
+        status: "FAILED",
+        reason: "SECTION_AMBIGUOUS_OR_MISSING_IN_BASE",
+      }),
+    ).toBe(false);
+  });
+
   it("keeps useful markdown while appending CONFLICT ack", () => {
     const out = appendDocumentEffectAck("# Doc\n\nCorps utile.", {
       act: "REVISE",

```

## 10. Gates suivants

1. Critical Review ChatGPT via handoff
2. GO Morris bascule RECETTE sur candidat `8ba777300adebe3ba70ddbe3c386a3ad709034f6` (hors ce cycle)
3. Retest utilisateur R06-F LIVE
4. Pas de clôture ML4 / REC-08 CLOSED dans ce cycle

## 11. Review Handoff L3

- Mode: publish-in-cycle
- Branche: sfia/review-handoff
- Fichier: sfia-review-handoff/latest-chatgpt-review.md
- Publisher: scripts/sfia/publish-review-handoff.sh
- Verdict: HANDOFF UPDATED — REMOTE VERIFIED
- commit distant: b3c8bcc395505c5cd6a719f9506bdecee8b4ac89
- blob distant: 968635781c740f314f9c8f4333b2a7abf89424fc
- parent: 9a23e0497b8ecc47bda429f168e0aad56e78e9dc
- relecture: titre Cycle 8 + verdict READY FOR REVIEW + HEAD 8ba77730 + cause SECTION_AMBIGUOUS + RECETTE inchangée — OK
- push produit: AUCUN

FIN PACK — contenu modifié inclus.

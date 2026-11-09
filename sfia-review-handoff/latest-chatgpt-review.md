# SFIA Studio Next — Review Pack FULL

## R5 / ML4 — Consolidation A+D+E (CREATE safety, NOT_EXECUTED, preuves, handoff)

**Verdict :** READY FOR CHATGPT RE-REVIEW — A+D+E CONSOLIDATED — CREATE SAFETY AND NOT_EXECUTED VERIFIED LOCALLY

**Interdictions respectées :** pas de R12 PASS / NORA LIVE PROVEN / GITHUB REAL COMMIT PROVEN / ML4-REC-10 CLOSED / ML4 ACCEPTED / READY FOR MERGE / STABLE / ADOPTED.

---

## 1. Date, GO, cycle, profil

- **GO Morris :** consolidation bornée des 4 réserves ChatGPT (2026-11-09).
- **Cycle :** 8 — Delivery / CRITICAL / FULL / Handoff L3 REQUIRED.
- **Typologie :** INC — remédiation corrective intégrée ML4.
- **Exécution Cursor :** 2026-11-09 (Europe/Paris).

---

## 2. Git Truth — initial / final

### Initial (attendu GO)

| Champ | Valeur |
| --- | --- |
| Branche | `fix/next-ml4-chat-first-d4-provenance-20261109` |
| HEAD | `8eab1317b97f5bfc438d736b42a1363ddfdb3e77` |
| Tree | `19c79e96aa1cae26233a5d9ec8fe2686970c0dab` |
| Parent | `93da44beb7e7571c9406180027896769579b9815` |
| origin/main | `6667a43858a5421e391b7441246536daad148bd6` |
| Handoff entrée | `1fd6f8f6…` / blob `cd58d32a…` |
| RECETTE | `93da44be` / BUILD `sHkE8sHJBxD3U9AJdHWi7` (gelée) |

### Final

| Champ | Valeur |
| --- | --- |
| HEAD | `5ed702cb84cd8b409e4a7bb45b25389d0a5f1cea` |
| Tree | `1515c09eae2442aab2924aaf4a0ea39ab50f7261` |
| Parent | `8eab1317b97f5bfc438d736b42a1363ddfdb3e77` |
| Push produit | **AUCUN** |
| RECETTE | **INCHANGÉE** |

Untracked préexistants non touchés (manifests ENV-01, scripts).

---

## 3. Sources lues

- Review Pack A+D+E d'entrée (`sfia/review-handoff` @ `1fd6f8f6`, blob `cd58d32a`)
- Commit `8eab1317` (8 fichiers) via `git show` / `git diff-tree`
- Code actif `document-act.ts` / `service.ts` / `observability.ts`
- Tests unit + PG Chat First
- `matrice-acceptation.md`, `delivery-history.md`
- Registre documentaire : non modifié
- SEF / ADR / roadmap : lus en gouvernance, **non modifiés**

---

## 4. Réserves de revue entrantes

1. Faux positifs CREATE sur instructions contradictoires / multi-clauses.
2. Token produit `campusflow` dans `CREATE_COMPLEMENT_TOKEN_RE`.
3. Preuve PG insuffisante de `NOT_EXECUTED` bout-en-bout.
4. Handoff incomplet (fixture, diffs, écart 7 vs 8 fichiers).

---

## 5. Inventaire réel du commit 8eab1317

Sortie Git :

```
commit 8eab1317b97f5bfc438d736b42a1363ddfdb3e77
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Mon Nov 9 23:07:03 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Mon Nov 9 23:07:03 2026 +0100

    fix(studio-next): qualify CREATE with complements and restore loyal D4 pre-effect observability

    R12 failed closed on plural/complement CREATE phrasings; structured hasExplicitCreateIntent unlocks legitimate D4 creates while keeping fail-closed, NOT_EXECUTED ACK, and qualification obs before extract.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../construction/delivery-history.md               |  17 +++
 .../integration-git/matrice-acceptation.md         |  19 +++
 .../web/src/domains/conversation/document-act.ts   | 159 ++++++++++++++++++---
 .../web/src/domains/conversation/service.ts        |  60 +++++++-
 .../sfia-studio-next/web/src/lib/observability.ts  |   4 +
 .../web/tests/fixtures/r12-create-user-message.txt |  23 +++
 .../ml4-chat-first-d4-provenance.pg.test.ts        |  46 ++++++
 .../web/tests/unit/document-act.test.ts            | 110 ++++++++++++++
 8 files changed, 417 insertions(+), 21 deletions(-)
 create mode 100644 projects/sfia-studio-next/web/tests/fixtures/r12-create-user-message.txt
--- name-status ---
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
M	projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/src/lib/observability.ts
A	projects/sfia-studio-next/web/tests/fixtures/r12-create-user-message.txt
M	projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/document-act.test.ts
```

**Comptage exact Git : 8 files changed, 417 insertions(+), 21 deletions(-).**

| Path | Status | Lien |
| --- | --- | --- |
| `…/document-act.ts` | M | A (CREATE) + D (ACK formatter) |
| `…/service.ts` | M | D (NOT_EXECUTED) + E (obs qualification) |
| `…/observability.ts` | M | E (allowlist meta) |
| `…/document-act.test.ts` | M | A/D tests |
| `…/ml4-chat-first-d4-provenance.pg.test.ts` | M | A-R12 / A-N10 |
| `…/r12-create-user-message.txt` | **A** | Fixture P3 |
| `…/matrice-acceptation.md` | M | Doc tech |
| `…/delivery-history.md` | M | Doc tech |

---

## 6. Écart « 7 vs 8 fichiers »

- `git show --stat 8eab1317` → **8 fichiers** (vérité Git).
- La mention « 7 files changed » du Review Pack précédent correspondait à un `git diff --stat` **avant staging de la fixture** (fichier encore untracked), pas au commit final.
- Aucun fichier inventé pour « corriger » le chiffre.

---

## 7. Qualification des faux positifs CREATE

### Défaut prouvé sur 8eab1317

`hasExplicitCreateIntent` faisait `CREATE_PAIR_CLOSE_RE.test(t)` **globalement**, sans vérifier que le verbe du couple était positif. Ex. :

- C3 « Ne crée aucun document, mais crée une branche… » → CREATE (FP)
- C5 « Crée une branche…, mais ne crée pas de document » → CREATE (FP)

### Correctif (5ed702cb)

- Suppression de `CREATE_PAIR_CLOSE_RE` aveugle.
- `clauseWindowAfterVerb` : l'objet documentaire doit être dans la **même fenêtre de clause** que le verbe positif.
- `hasDurableSaveNegation` → NONE `DURABLE_SAVE_NEGATED` (C6).
- `hasAmbiguousCreateContradiction` → NONE `AMBIGUOUS_CREATE` (N11/C12).
- « Explique comment créer… » → informative (C7).

---

## 8. Table de vérité complète P/N/C

| ID | Attendu | Résultat |
| --- | --- | --- |
| P1–P7 | CREATE | PASS (non-régression) |
| P3 R12 exact | CREATE | PASS |
| N1–N10, N12 | NONE / REVISE(N8) | PASS |
| **N11** | NONE AMBIGUOUS_CREATE | **PASS** |
| C1 | CREATE | PASS |
| C2 | NONE | PASS |
| C3 | NONE | PASS (était FP) |
| C4 | CREATE | PASS |
| C5 | NONE | PASS (était FP) |
| C6 | NONE DURABLE_SAVE_NEGATED | PASS |
| C7 | NONE | PASS |
| C8 | REVISE | PASS |
| C9 | NONE | PASS |
| C10 | CREATE + FAILED extract / 0 D4 | PASS PG |
| C11 | 0 D4 (A-N10) | PASS PG |
| C12 | NONE AMBIGUOUS | PASS |
| C13 | CREATE | PASS |
| C14 | NONE | PASS |
| OrionAtlas (pas campusflow) | CREATE | PASS |

---

## 9. Code exact des branches CREATE pertinentes

Diff intégral `document-act.ts` du commit de consolidation `5ed702cb` :

```
commit 5ed702cb84cd8b409e4a7bb45b25389d0a5f1cea
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Mon Nov 9 23:25:28 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Mon Nov 9 23:25:28 2026 +0100

    fix(studio-next): harden CREATE clause scoping and prove NOT_EXECUTED on PG path

    Close false-positive CREATE across negated clauses, drop project-name hardcoding, and add service-level NOT_EXECUTED / C10 proofs so A+D+E is independently reviewable.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index b141f252..ebfc4377 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -23,18 +23,96 @@ const SECTION_RE =
   /\b(?:section|partie|chapitre)\s+(\d+|[A-Za-zÀ-ÿ][\wÀ-ÿ-]*)\b/i;
 const DOC_ID_RE = /\b(doc_[a-z0-9-]+)\b/i;

-/** Close create↔object pair (short formulations). */
-const CREATE_PAIR_CLOSE_RE =
-  /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b[\s\S]{0,48}\b(documents?|notes?|synthèses?|rapports?|spécifications?)\b/i;
 const CREATE_PLEASE_RE =
   /\b(documents?|note de synthèse|rapports?)\b[\s\S]{0,20}\b(s'il te plaît|stp|please)\b/i;

 /**
  * Complements allowed between a CREATE verb and a documentary object
  * (location, novelty, title framing) — not a free-form widen of authority.
+ * No project/client proper names hardcoded: capitalized tokens pass via isCreateComplementToken.
  */
 const CREATE_COMPLEMENT_TOKEN_RE =
-  /^(?:et|ou|puis|dans|sur|pour|de|du|des|le|la|les|un|une|ce|cette|ces|au|aux|en|par|avec|vers|sous|interne|internes|studio|projet|campusflow|recette|nouveau|nouvelle|nouveaux|nouvelles|intitulé|intitulée|intitulés|intitulées|nommé|nommée|appelé|appelée|enregistre|enregistrer|sauvegarde|sauvegarder|persist|persiste|persister|d4|documents?|notes?|synthèses?|rapports?|spécifications?|titre|espace)$/i;
+  /^(?:et|ou|puis|dans|sur|pour|de|du|des|le|la|les|un|une|ce|cette|ces|au|aux|en|par|avec|vers|sous|interne|internes|studio|projet|recette|nouveau|nouvelle|nouveaux|nouvelles|intitulé|intitulée|intitulés|intitulées|nommé|nommée|appelé|appelée|enregistre|enregistrer|sauvegarde|sauvegarder|persist|persiste|persister|d4|documents?|notes?|synthèses?|rapports?|spécifications?|titre|espace)$/i;
+
+/** Proper-noun / project-label token (structure only — not a name allowlist). */
+const CREATE_PROPER_NOUN_TOKEN_RE = /^[A-ZÀ-Ÿ][\wÀ-ÿ-]{1,47}$/;
+
+function isCreateComplementToken(raw: string): boolean {
+  const tok = raw.replace(/[.,;:!?«»""''()[\]]/g, "");
+  if (!tok) return false;
+  if (CREATE_COMPLEMENT_TOKEN_RE.test(tok)) return true;
+  // « dans le projet OrionAtlas » — identity-agnostic capitalized label.
+  if (CREATE_PROPER_NOUN_TOKEN_RE.test(tok)) return true;
+  return false;
+}
+
+/** Explicit refusal of durable D4 persistence on an otherwise positive draft. */
+function hasDurableSaveNegation(text: string): boolean {
+  return (
+    /\bne\s+(?:l['’])?enregistre\s+pas\b/i.test(text) ||
+    /\bne\s+(?:le\s+|la\s+)?sauvegarde\s+pas\b/i.test(text) ||
+    /\bsans\s+(?:l['’])?enregistrer\b/i.test(text) ||
+    /\bsans\s+(?:le\s+)?sauvegarder\b/i.test(text) ||
+    /\bne\s+(?:l['’])?enregistre\s+pas\s+dans\s+(?:les\s+)?documents?\b/i.test(text) ||
+    /\bmais\s+ne\s+(?:l['’])?enregistre\s+pas\b/i.test(text)
+  );
+}
+
+/** Irresolvable CREATE contradiction on the same utterance (N11 / C12). */
+function hasAmbiguousCreateContradiction(text: string): boolean {
+  const t = text.replace(/\s+/g, " ").trim();
+  // « Crée ou ne crée pas … »
+  if (
+    /\b(crée|créer|rédige|rédiger)\b[\s\S]{0,48}\bou\b[\s\S]{0,24}\bne\s+(?:en\s+|le\s+|la\s+|l['’])?(?:crée|créer|rédige|rédiger)\s+pas\b/i.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // Positive create+document AND negated create+document without Git-branch disambiguation.
+  const negCreateDoc =
+    /\bne\s+(?:me\s+)?(?:crée|créer)\s+(?:pas|aucun|aucune)[\s\S]{0,48}\bdocuments?\b/i.test(t);
+  if (!negCreateDoc) return false;
+  if (/\b(branche|github|git)\b/i.test(t)) return false;
+  // Count positive (non-negated) create verbs that still see a doc object in their own clause window.
+  let positiveCreateDoc = false;
+  for (const verb of findVerbMatches(t, CREATE_VERB_RE)) {
+    if (isVerbNegated(t, verb.index, verb.text.length)) continue;
+    const window = clauseWindowAfterVerb(t, verb.index + verb.text.length);
+    if (/\b(documents?|notes?|synthèses?|rapports?|spécifications?)\b/i.test(window)) {
+      positiveCreateDoc = true;
+      break;
+    }
+  }
+  return positiveCreateDoc && negCreateDoc;
+}
+
+/**
+ * Text after a verb up to the next create/revise verb or hard clause break —
+ * prevents binding a later clause's documentary object to an earlier verb.
+ */
+function clauseWindowAfterVerb(text: string, afterVerbIndex: number, maxLen = 160): string {
+  const after = text.slice(afterVerbIndex, afterVerbIndex + maxLen);
+  const nextAct =
+    /\b(?:rédige|rédiger|écris|écrire|produis|produire|crée|créer|révise|reviser|réviser|revise|modifie|modifier|corrige|corriger)\b/i.exec(
+      after.slice(1),
+    );
+  let end = after.length;
+  if (nextAct?.index != null) end = Math.min(end, nextAct.index + 1);
+  const hardBreak = /[;]|(\bmais\b)/i.exec(after);
+  if (hardBreak?.index != null && hardBreak.index < end) {
+    // Keep « mais » local complements only when it does not introduce another act verb soon after.
+    const afterMais = after.slice(hardBreak.index);
+    if (
+      /\bmais\b[\s\S]{0,20}\b(?:ne\s+)?(?:crée|créer|rédige|rédiger|révise|réviser|modifie|modifier)\b/i.test(
+        afterMais,
+      )
+    ) {
+      end = Math.min(end, hardBreak.index);
+    }
+  }
+  return after.slice(0, end);
+}

 /**
  * Extract a document designation (id or cited title) from the raw Pilote text.
@@ -163,46 +241,35 @@ export function isPolitePositiveDocumentAction(text: string): boolean {
 }

 /**
- * Structured CREATE recognition: positive create verb + documentary object,
- * allowing reasonable complements (location, novelty, title) without treating
- * any occurrence of « document » as authority.
+ * Structured CREATE recognition: positive create verb + documentary object
+ * in the *same clause window* (complements / novelty / persist verbs allowed).
+ * Does not treat co-presence of words across contradictory clauses as authority.
  */
 export function hasExplicitCreateIntent(text: string): boolean {
   const t = text.replace(/\s+/g, " ").trim();
   if (!t || !hasPositiveVerb(t, CREATE_VERB_RE)) return false;
+  if (hasDurableSaveNegation(t)) return false;
+  if (hasAmbiguousCreateContradiction(t)) return false;

-  if (CREATE_PAIR_CLOSE_RE.test(t) || CREATE_PLEASE_RE.test(t)) return true;
+  // Polite « document … s'il te plaît » without a negated create verb.
+  if (CREATE_PLEASE_RE.test(t) && hasPositiveVerb(t, CREATE_VERB_RE)) return true;

-  // Verb … (complements) … (nouveau)? document(s)
   for (const verb of findVerbMatches(t, CREATE_VERB_RE)) {
     if (isVerbNegated(t, verb.index, verb.text.length)) continue;
-    const after = t.slice(verb.index + verb.text.length, verb.index + verb.text.length + 160);
-    const obj = after.match(
+    const window = clauseWindowAfterVerb(t, verb.index + verb.text.length);
+    const obj = window.match(
       /\b(nouveau(?:x)?|nouvelle(?:s)?)?\s*(documents?|notes?|synthèses?|rapports?|spécifications?)\b/i,
     );
     if (!obj || obj.index == null) continue;
-    const between = after.slice(0, obj.index).trim();
+    const between = window.slice(0, obj.index).trim();
     if (!between) return true;
     // Persist verbs between create and object (« crée et enregistre … document »)
     if (/\b(enregistre|enregistrer|sauvegarde|sauvegarder|persist(?:e|er)?)\b/i.test(between)) {
       return true;
     }
-    // Novelty marker near object
-    if (/\b(nouveau|nouvelle|nouveaux|nouvelles)\b/i.test(between + " " + (obj[0] ?? ""))) {
-      const tokens = between.split(/\s+/).filter(Boolean);
-      if (tokens.every((tok) => CREATE_COMPLEMENT_TOKEN_RE.test(tok.replace(/[.,;:!?]/g, "")))) {
-        return true;
-      }
-    }
-    // Pure complement bridge (dans les Documents internes de Studio …)
     const tokens = between.split(/\s+/).filter(Boolean);
-    if (
-      tokens.length > 0 &&
-      tokens.length <= 16 &&
-      tokens.every((tok) => CREATE_COMPLEMENT_TOKEN_RE.test(tok.replace(/[.,;:!?]/g, "")))
-    ) {
-      return true;
-    }
+    if (tokens.length > 16) continue;
+    if (tokens.every((tok) => isCreateComplementToken(tok))) return true;
   }
   return false;
 }
@@ -240,6 +307,12 @@ export function isInformativeOrHypothetical(text: string): boolean {
   if (/^(comment|pourquoi|quelles?\b|que\s+se\s+passerait)\b/i.test(t)) {
     return true;
   }
+  // « Explique comment créer… » is instructional, not a write authorization (C7).
+  if (/\bexplique\b[\s\S]{0,48}\bcomment\b[\s\S]{0,80}\b(créer|crée|réviser|révise|modifier|enregistrer)\b/i.test(t)) {
+    return true;
+  }
+  // Explicit refusal of durable save — draft in chat only (C6 / N6).
+  if (hasDurableSaveNegation(t)) return true;
   // Explicit CREATE intent wins over trailing « comment je peux le retrouver » clauses.
   if (hasExplicitCreateIntent(t)) return false;
   // Polite positive action first — « Peux-tu réviser le document X ? » is not informative.
@@ -327,6 +400,12 @@ export function qualifyDocumentAct(text: string): QualifiedDocumentAct {
   if (isGlobalDocumentWriteNegation(authorityText) || isGlobalDocumentWriteNegation(trimmed)) {
     return { kind: "NONE", reason: "NEGATED_WRITE" };
   }
+  if (hasAmbiguousCreateContradiction(authorityText) || hasAmbiguousCreateContradiction(trimmed)) {
+    return { kind: "NONE", reason: "AMBIGUOUS_CREATE" };
+  }
+  if (hasDurableSaveNegation(authorityText) || hasDurableSaveNegation(trimmed)) {
+    return { kind: "NONE", reason: "DURABLE_SAVE_NEGATED" };
+  }
   if (isInformativeOrHypothetical(authorityText) || isInformativeOrHypothetical(trimmed)) {
     const allowLocalRevise =
       (hasPositiveVerb(authorityText, REVISE_VERB_RE) || hasPositiveVerb(trimmed, REVISE_VERB_RE)) &&
```

---

## 10. Traitement du token campusflow

- **Présent dans 8eab1317** dans `CREATE_COMPLEMENT_TOKEN_RE` (règle produit).
- **Non nécessaire pour R12** : le pont `crée et enregistre … Documents` suffit via verbe de persistance.
- **Supprimé** dans `5ed702cb`.
- Remplacé par `isCreateComplementToken` : allowlist grammaticale + proper-noun structurel (pas de liste clients).
- Test : « Dans le projet **OrionAtlas**, crée et enregistre… » → CREATE.
- Preuve : `campusflow` **absent** du source produit après consolidation.

---

## 11. Preuve PG NOT_EXECUTED

Test : `D-NOT_EXECUTED` — ask `Crée une branche Git, mais ne crée pas de document.`

Assertions (DEV `:5433`) :

- qualify → NONE (`CREATE_OBJECT_BRIDGE_UNQUALIFIED`)
- `hasDocumentaryWriteSignal` → true
- `chat.status` COMPLETE ; `documentSave` null ; 0 docs
- ACK pré-effet : NOT_EXECUTED / non tentée / n'a pas été qualifiée
- Pas de faux AVAILABLE/FAILED D4 ; fence Nora ignorée

Obs pré-effet :

```json
{
  "event_name": "d3.turn.document_act_qualification",
  "outcome": "PARTIAL",
  "meta": {
    "qualification_kind": "NONE",
    "qualification_reason": "CREATE_OBJECT_BRIDGE_UNQUALIFIED",
    "documentary_intent_signal": true,
    "d4_attempted": false,
    "d4_effect": null
  }
}
```

`d4_attempted=false` = observation **avant** tentative D4, pas un verdict final d'échec CREATE.

---

## 12. Preuve PG zéro effet D4 (informatif)

A-N10 : signal false ; documentSave null ; 0 docs ; **pas** d'ACK NOT_EXECUTED parasite.

---

## 13. Preuve ACK CREATE AVAILABLE

A-R12 + A historiques : CREATE → AVAILABLE v1, ACK D4, pas NOT_EXECUTED.

---

## 14. Observabilité et temporalité

| Event | Quand | Rôle |
| --- | --- | --- |
| `d3.turn.document_act_qualification` | Après qualify, **avant** extract/D4 | Routage ; `d4_attempted` encore false |
| `d3.turn.document_proposal` | CREATE/REVISE | Extraction + `d4_effect` final |

Ne pas interpréter PARTIAL pré-effet comme échec définitif d'une création ensuite AVAILABLE.

---

## 15. R06 REVISE et scanner B

PG Chat First **17 PASS**. Scanner B / `assertSectionScope` non modifiés.

---

## 16. Tests — commandes et résultats

```
npx vitest run tests/unit/document-act.test.ts
→ 91 passed

npx vitest run tests/unit/nora-adapter-corrective.test.ts \
  tests/unit/ml2-cognition-fixture.test.ts \
  tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
→ 25 passed (PG 17)

Lane : 127.0.0.1:5433 / sfia_next_dev (DEV)
```

---

## 17. TypeScript / lint / build

| Gate | Résultat |
| --- | --- |
| `npx tsc --noEmit` | PASS |
| `npm run lint` | warnings préexistants only |
| `NODE_ENV=production npm run build` | PASS |
| `git diff --check` | PASS |

---

## 18. Fake / Real Qualification

| Domaine | Niveau |
| --- | --- |
| Qualification CREATE/NONE | DETERMINISTIC VERIFIED |
| NOT_EXECUTED | PG DEV INTEGRATION VERIFIED |
| CREATE AVAILABLE | PG DEV VERIFIED |
| R06 REVISE | PG DEV VERIFIED |
| Nora | FAKE fixture / SCRIPTED |
| Nora LIVE RECETTE | NOT DEMONSTRATED |
| GitHub REAL | NOT DEMONSTRATED |

---

## 19. RECETTE et GitHub préservés

- `http://127.0.0.1:3200` — BUILD `sHkE8sHJBxD3U9AJdHWi7` — SHA `93da44be`
- Aucune écriture RECETTE / LIVE / GitHub / push produit

---

## 20. Fichiers modifiés (cycle consolidation)

```
commit 5ed702cb84cd8b409e4a7bb45b25389d0a5f1cea
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Mon Nov 9 23:25:28 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Mon Nov 9 23:25:28 2026 +0100

    fix(studio-next): harden CREATE clause scoping and prove NOT_EXECUTED on PG path

    Close false-positive CREATE across negated clauses, drop project-name hardcoding, and add service-level NOT_EXECUTED / C10 proofs so A+D+E is independently reviewable.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../construction/delivery-history.md               |  16 +++
 .../integration-git/matrice-acceptation.md         |  15 +++
 .../web/src/domains/conversation/document-act.ts   | 133 ++++++++++++++++-----
 .../ml4-chat-first-d4-provenance.pg.test.ts        |  65 +++++++++-
 .../web/tests/unit/document-act.test.ts            |  57 +++++++++
 5 files changed, 258 insertions(+), 28 deletions(-)
--- name-status ---
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
M	projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
M	projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
M	projects/sfia-studio-next/web/tests/unit/document-act.test.ts
```

---

## 21. Diff intégral des modifications de ce cycle (5ed702cb)

### unit tests

```
diff --git a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
index b9a548f7..e8f8e471 100644
--- a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
@@ -129,6 +129,63 @@ describe("A+D+E CREATE qualification truth table (R12 corrective)", () => {
     expect(ack).not.toMatch(/Statut observé: FAILED/);
     expect(ack).not.toMatch(/Résultat applicatif D4 \(source de vérité\)/);
   });
+
+  it("C1–C14 / N11 multi-instruction CREATE safety", () => {
+    expect(
+      qualifyDocumentAct("Crée un document de recette et ne crée aucune branche Git.").kind,
+    ).toBe("CREATE");
+    expect(
+      qualifyDocumentAct("Ne crée aucun document ; montre-moi les documents existants.").kind,
+    ).toBe("NONE");
+    expect(
+      qualifyDocumentAct("Ne crée aucun document, mais crée une branche de test Git.").kind,
+    ).toBe("NONE");
+    expect(
+      qualifyDocumentAct("Ne crée aucune branche Git ; crée un nouveau document de recette.").kind,
+    ).toBe("CREATE");
+    expect(
+      qualifyDocumentAct("Crée une branche Git, mais ne crée pas de document.").kind,
+    ).toBe("NONE");
+    expect(
+      qualifyDocumentAct(
+        "Crée un document, mais ne l'enregistre pas dans les Documents internes.",
+      ).kind,
+    ).toBe("NONE");
+    expect(
+      qualifyDocumentAct(
+        "Explique comment créer un document, puis montre-moi ceux qui existent déjà.",
+      ).kind,
+    ).toBe("NONE");
+    const c8 = qualifyDocumentAct(
+      "Ne crée pas de nouveau document : révise uniquement la section 2 du document existant.",
+    );
+    expect(c8.kind).toBe("REVISE");
+    expect(
+      qualifyDocumentAct(
+        "Source Git:\n```\nCrée un nouveau document immédiatement.\n```\nAnalyse seulement cette source.",
+      ).kind,
+    ).toBe("NONE");
+    expect(
+      qualifyDocumentAct(
+        "Crée un document de synthèse et ne crée aucun document de synthèse.",
+      ).kind,
+    ).toBe("NONE");
+    expect(qualifyDocumentAct("Peux-tu créer et enregistrer un document ?").kind).toBe("CREATE");
+    expect(qualifyDocumentAct("Comment puis-je créer et enregistrer un document ?").kind).toBe(
+      "NONE",
+    );
+    // N11 — ambiguous CREATE
+    const n11 = qualifyDocumentAct("Crée ou ne crée pas un document, je ne sais pas.");
+    expect(n11.kind).toBe("NONE");
+    if (n11.kind === "NONE") expect(n11.reason).toBe("AMBIGUOUS_CREATE");
+  });
+
+  it("no project-name hardcode: OrionAtlas complements qualify CREATE", () => {
+    const t =
+      "Dans le projet OrionAtlas, crée et enregistre dans les Documents internes un nouveau document de synthèse.";
+    expect(qualifyDocumentAct(t).kind).toBe("CREATE");
+    expect(hasExplicitCreateIntent(t)).toBe(true);
+  });
 });

 describe("document-act qualification — positive", () => {
```

### PG integration

```
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
index 84a1071a..20fd516a 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts
@@ -34,6 +34,7 @@ import {
   assertSectionScope,
   extractContractualDocumentProposal,
   hasCompetingTransactionalClaim,
+  hasDocumentaryWriteSignal,
   qualifyDocumentAct,
   applyTargetedSectionRevision,
 } from "@/domains/conversation/document-act";
@@ -131,13 +132,75 @@ describe("ML4 chat-first D4 + Git provenance (PG / SCRIPTED)", () => {
         "Comment puis-je créer un document ?",
       );
       expect(qualifyDocumentAct("Comment puis-je créer un document ?").kind).toBe("NONE");
+      expect(hasDocumentaryWriteSignal("Comment puis-je créer un document ?")).toBe(false);
       expect(chat.documentSave).toBeNull();
       expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
       const msgs = await listMessages(pilotId, prep.id);
       const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
-      // Informative: no fabricated FAILED / no D4 AVAILABLE claim.
+      // Informative: no fabricated FAILED / no D4 AVAILABLE / no parasite NOT_EXECUTED.
       expect(assistant?.content ?? "").not.toMatch(/Statut observé: AVAILABLE/);
       expect(assistant?.content ?? "").not.toMatch(/documentId:/);
+      expect(assistant?.content ?? "").not.toMatch(/NOT_EXECUTED/);
+      expect(assistant?.content ?? "").not.toMatch(/Résultat applicatif \(pré-effet\)/);
+    } finally {
+      delete turnRaceHooks.replaceNoraAssistantText;
+    }
+  });
+
+  it("D-NOT_EXECUTED: plausible write signal + NONE → pre-effect ACK, zero D4 (service path)", async () => {
+    const pilotId = await seedPilot("ml4-not-executed");
+    const prep = await openOrCreatePreparation(pilotId);
+    const ask = "Crée une branche Git, mais ne crée pas de document.";
+    const q = qualifyDocumentAct(ask);
+    expect(q.kind).toBe("NONE");
+    if (q.kind === "NONE") {
+      expect(q.reason).toMatch(/CREATE_OBJECT_BRIDGE_UNQUALIFIED|NEGATED_WRITE|NO_EXPLICIT/);
+    }
+    expect(hasDocumentaryWriteSignal(ask)).toBe(true);
+
+    turnRaceHooks.replaceNoraAssistantText = () =>
+      "Je peux décrire une branche, sans écriture documentaire.\n\n" +
+      "```sfia-document\n# Ne doit pas être persisté\n\ncorps\n```\n";
+    try {
+      const chat = await postUserMessageAndNora(pilotId, prep.id, ask);
+      expect(chat.status).toBe("COMPLETE");
+      expect(chat.documentSave).toBeNull();
+      expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
+
+      const msgs = await listMessages(pilotId, prep.id);
+      const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
+      const body = assistant?.content ?? "";
+      expect(body).toMatch(/Résultat applicatif \(pré-effet\)/);
+      expect(body).toMatch(/NOT_EXECUTED/);
+      expect(body).toMatch(/non tentée/i);
+      expect(body).toMatch(/n'a pas été qualifiée/i);
+      expect(body).not.toMatch(/Résultat applicatif D4 \(source de vérité\)/);
+      expect(body).not.toMatch(/Statut observé: AVAILABLE/);
+      expect(body).not.toMatch(/Statut observé: FAILED/);
+      expect(body).not.toMatch(/documentId:/);
+    } finally {
+      delete turnRaceHooks.replaceNoraAssistantText;
+    }
+  });
+
+  it("C10: CREATE qualified but missing autonomous sfia-document → FAILED extract, zero D4", async () => {
+    const pilotId = await seedPilot("ml4-c10-missing");
+    const prep = await openOrCreatePreparation(pilotId);
+    turnRaceHooks.replaceNoraAssistantText = () =>
+      "Voici une proposition hors fence contractuelle.\n\n# Titre\n\nCorps non contractuel.\n";
+    try {
+      const ask = "Crée un document de synthèse sur C10 Missing Fence";
+      expect(qualifyDocumentAct(ask).kind).toBe("CREATE");
+      const chat = await postUserMessageAndNora(pilotId, prep.id, ask);
+      expect(chat.documentSave?.status).toBe("FAILED");
+      expect(chat.documentSave?.reason).toBe("DOCUMENT_PROPOSAL_MISSING");
+      expect(chat.documentSave?.documentId).toBeUndefined();
+      expect(await listDocuments(pilotId, prep.id)).toHaveLength(0);
+      const msgs = await listMessages(pilotId, prep.id);
+      const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
+      expect(assistant?.content ?? "").toMatch(/FAILED|DOCUMENT_PROPOSAL_MISSING/);
+      expect(assistant?.content ?? "").not.toMatch(/NOT_EXECUTED/);
+      expect(assistant?.content ?? "").not.toMatch(/Statut observé: AVAILABLE/);
     } finally {
       delete turnRaceHooks.replaceNoraAssistantText;
     }
```

### Docs

```
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 1a8218bb..bf729484 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1248,3 +1248,19 @@ Append-only logical journal of Cursor product deliveries.
 | RECETTE | **inchangée** — SHA `93da44be` / BUILD `sHkE8sHJBxD3U9AJdHWi7` |
 | Push Product | **AUCUN** |
 | Verdict candidat | `READY FOR REVIEW — R12 CREATE A+D+E CORRECTIVE DETERMINISTICALLY VERIFIED LOCALLY` |
+
+## delivery_id: DELIV-2026-11-09-ML4-ADE-CONSOLIDATION-SAFETY
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-09 ~23:30 CET |
+| Macro-capacité | R5 / ML4 — Consolidation A+D+E (faux positifs CREATE, campusflow, NOT_EXECUTED PG, handoff) |
+| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` |
+| Parent tip | `8eab1317b97f5bfc438d736b42a1363ddfdb3e77` |
+| Autorité | Morris GO consolidation 2026-11-09 CRITICAL — commit local descendant + handoff L3 |
+| Changements | clause-scoped CREATE ; suppression token campusflow ; C1–C14/N11 ; PG NOT_EXECUTED + C10 |
+| Validations | unit document-act 91 PASS ; PG Chat First 17 PASS ; tsc/build production PASS |
+| Lane tests | DEV Postgres `127.0.0.1:5433` |
+| RECETTE | **inchangée** — `93da44be` / `sHkE8sHJBxD3U9AJdHWi7` |
+| Push Product | **AUCUN** |
+| Verdict candidat | `READY FOR CHATGPT RE-REVIEW — A+D+E CONSOLIDATED — CREATE SAFETY AND NOT_EXECUTED VERIFIED LOCALLY` |
diff --git a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
index dc17a976..b88542c8 100644
--- a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
+++ b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
@@ -638,3 +638,18 @@ Cause R12 (tour RECETTE `93da44be`) : `qualifyDocumentAct` → `NONE` / `NO_EXPL
 | LIVE Nora / GitHub write | NON EXÉCUTÉS | preuves SCRIPTED/DET uniquement |

 Verdict candidat : **READY FOR REVIEW — R12 CREATE A+D+E CORRECTIVE DETERMINISTICALLY VERIFIED LOCALLY**.
+
+## 33. Consolidation A+D+E — faux positifs / campusflow / NOT_EXECUTED (2026-11-09)
+
+| Item | Statut | Note |
+|---|---|---|
+| Faux positifs multi-clauses | CORRIGÉ (DET) | `clauseWindowAfterVerb` ; plus de `CREATE_PAIR_CLOSE_RE` global ignorant la négation |
+| C1–C14 / N11 | DET PASS | unit + cas PG C10 / NOT_EXECUTED |
+| Token `campusflow` | SUPPRIMÉ | compléments = grammaire + proper-noun structurel (`OrionAtlas` PASS) |
+| NOT_EXECUTED | PG DEV PASS | service path : signal true, `documentSave=null`, ACK pré-effet |
+| Informative sans signal | PG DEV PASS | A-N10 : pas d'ACK pré-effet parasite |
+| R12 / CREATE AVAILABLE | NON-RÉGRESSION | fixture + A-R12 |
+| Inventaire 8eab1317 | RÉCONCILIÉ | `git show --stat` = **8 fichiers** (écart « 7 » = brouillon pre-fixture) |
+| RECETTE | INCHANGÉE | `93da44be` / `sHkE8sHJBxD3U9AJdHWi7` |
+
+Verdict candidat : **READY FOR CHATGPT RE-REVIEW — A+D+E CONSOLIDATED — CREATE SAFETY AND NOT_EXECUTED VERIFIED LOCALLY**.
```

(document-act : voir §9)

---

## 22. Diff exploitable du commit 8eab1317 (D+E service/obs)

```
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 660c3eaf..bf86345c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -37,6 +37,7 @@ import {
   applyTargetedSectionRevision,
   assertSectionScope,
   extractContractualDocumentProposal,
+  hasDocumentaryWriteSignal,
   qualifyDocumentAct,
   resolveReviseTarget,
   type DocumentEffectSummary,
@@ -53,6 +54,41 @@ export async function listMessages(pilotId: string, preparationId: string) {
     .orderBy(asc(messages.ordinal));
 }

+/** Qualification decision before extract/D4 — metadata only, never blocks D4. */
+function emitDocumentActQualificationObs(args: {
+  requestId: string;
+  operationId: string;
+  generationId?: string | null;
+  qualificationKind: "CREATE" | "REVISE" | "NONE";
+  qualificationReason?: string | null;
+  documentaryIntentSignal: boolean;
+  d4Attempted: boolean;
+  d4Effect?: string | null;
+}) {
+  emitObs({
+    event_name: "d3.turn.document_act_qualification",
+    component: "d3.conversation",
+    request_id: args.requestId,
+    operation_id: args.operationId,
+    generation_id: args.generationId ?? undefined,
+    outcome:
+      args.qualificationKind === "NONE"
+        ? "PARTIAL"
+        : args.d4Effect === "AVAILABLE"
+          ? "SUCCESS"
+          : args.d4Attempted
+            ? "PARTIAL"
+            : "PARTIAL",
+    meta: {
+      qualification_kind: args.qualificationKind,
+      qualification_reason: args.qualificationReason ?? null,
+      documentary_intent_signal: args.documentaryIntentSignal,
+      d4_attempted: args.d4Attempted,
+      d4_effect: args.d4Effect ?? null,
+    },
+  });
+}
+
 function emitDocumentProposalObs(args: {
   requestId: string;
   operationId: string;
@@ -548,6 +584,18 @@ export async function postUserMessageAndNora(
   let documentSaveUnknown = false;
   let ownershipLostBeforeD4 = false;
   const documentAct = qualifyDocumentAct(content);
+  const documentaryIntentSignal = hasDocumentaryWriteSignal(content);
+  // Qualification visible before extract/D4 (E). Absence of obs must never invent D4.
+  emitDocumentActQualificationObs({
+    requestId,
+    operationId: reserved.operationId,
+    generationId: reply.generationId,
+    qualificationKind: documentAct.kind,
+    qualificationReason: documentAct.kind === "NONE" ? (documentAct.reason ?? null) : null,
+    documentaryIntentSignal,
+    d4Attempted: false,
+    d4Effect: null,
+  });

   if (reply.status === "COMPLETE") {
     if (turnRaceHooks.beforeD4Effect) {
@@ -877,7 +925,17 @@ export async function postUserMessageAndNora(
             status: "UNKNOWN",
             reason: "NO_EFFECT_OBSERVED",
           }
-        : null;
+        : // Loyal pre-effect: plausible write language, not qualified → NOT_EXECUTED (never fake FAILED).
+          documentAct.kind === "NONE" &&
+            documentaryIntentSignal &&
+            !ownershipLostBeforeD4 &&
+            reply.status === "COMPLETE"
+          ? {
+              act: "NONE",
+              status: "NOT_EXECUTED",
+              reason: documentAct.reason ?? "NO_EXPLICIT_WRITE",
+            }
+          : null;

   const assistantContentForCommit = ownershipLostBeforeD4
     ? reply.content
diff --git a/projects/sfia-studio-next/web/src/lib/observability.ts b/projects/sfia-studio-next/web/src/lib/observability.ts
index 894f7d73..10f8ee04 100644
--- a/projects/sfia-studio-next/web/src/lib/observability.ts
+++ b/projects/sfia-studio-next/web/src/lib/observability.ts
@@ -102,6 +102,10 @@ const META_ALLOWLIST = new Set([
   "refuse_code",
   "d4_attempted",
   "d4_effect",
+  // Document act qualification (A+D+E) — kinds/reasons codes only, never prompts/bodies.
+  "qualification_kind",
+  "qualification_reason",
+  "documentary_intent_signal",
 ]);

 const SECRET_VALUE =
```

Inventaire complet §5. Correctif multi-clauses = `5ed702cb` (§9).

---

## 23. Fixture R12 — contenu complet

- Path : `projects/sfia-studio-next/web/tests/fixtures/r12-create-user-message.txt`
- Commit : `8eab1317` (inchangée dans consolidation)
- Taille : **1188** octets
- sha256 : `a22e79406907df2a68fa4a0e82a01cbf447f0cb61d437990bff13ac67cb5120c`
- Pas de secret (sandbox public) — contenu intégral :

```
Dans le projet CampusFlow, crée et enregistre dans les Documents internes de Studio un nouveau document de recette intitulé « RECETTE ML4 — Publication documentaire R12 ».

Contenu souhaité :

# RECETTE ML4 — Publication documentaire R12

## 1. Objectif
Vérifier la publication d'un document interne SFIA Studio Next vers le dépôt sandbox GitHub `mcleland147/chantiers360`.

## 2. Périmètre
Ce document est exclusivement destiné aux tests de recette ML4 R12. Il ne constitue aucune décision métier ni autorisation de modification du produit.

## 3. Identification
Référence de test : `ML4-R12-20261109-CAMPUSFLOW`.

## 4. Résultat attendu
Une publication Git documentaire contrôlée, après inspection du diff et HumanDecision explicite du Pilote, suivie d'une vérification du commit distant.

Enregistre uniquement ce document en D4, sans modifier le document existant « Références externes — Enseignements de Chantiers360 ».

N'effectue pour l'instant aucune écriture GitHub, aucune création de branche, aucun commit et aucune PR.

Indique le résultat applicatif réel de l'enregistrement, l'identifiant documentaire, la version et la révision créées.
```

---

## 24. Nouveau commit local

| Champ | Valeur |
| --- | --- |
| SHA | `5ed702cb84cd8b409e4a7bb45b25389d0a5f1cea` |
| Tree | `1515c09eae2442aab2924aaf4a0ea39ab50f7261` |
| Parent | `8eab1317b97f5bfc438d736b42a1363ddfdb3e77` |
| Amend de 8eab1317 | **NON** |

---

## 25. Risques / dette / exit

- Qualificateur FR borné — fail closed hors fenêtre de clause.
- Proper-noun structurel : dette mineure (pas de liste clients).
- R12 LIVE après bascule : hors cycle.

---

## 26. Réserves restantes

1. Pas de bascule RECETTE / LIVE / GitHub REAL dans ce cycle.
2. Lint warnings préexistants hors scope.

**Les 4 réserves ChatGPT d'entrée sont levées.**

---

## 27. Verdict

**READY FOR CHATGPT RE-REVIEW — A+D+E CONSOLIDATED — CREATE SAFETY AND NOT_EXECUTED VERIFIED LOCALLY.**

---

## 28. Gate Morris suivant

1. Re-revue ChatGPT du handoff (diffs, fixture, C1–C14/N11, PG NOT_EXECUTED, R06).
2. Si favorable : **GO distinct** bascule RECETTE vers `5ed702cb`.
3. Puis rejeu R12 LIVE contrôlé.
4. Aucune bascule automatique.

---

## Annexe — post-handoff

_(commit/blob handoff complétés après publish L3)_

# SFIA Studio Next — Review Pack FULL
# ML4C S05 — Qualification positive du dialogue indépendant (PR #676)
# Correctif formel §7.2–7.3 : diffs utiles complets inclus

**Date/heure :** 2026-11-11 21:25 CET (2026-11-11 20:25 UTC)
**Cycle :** 8 — Delivery / implémentation (INC S05) — **complément formel Review Pack**
**Profil :** Critical
**Niveau review pack :** **full** (SFIA v2.6 §7.3)
**PR :** https://github.com/mcleland147/sfia-workspace/pull/676
**Merge :** NON AUTORISÉ (aucun auto-merge)
**Version :** NO RELEASE / `0.0.0-dev`

**Correction formelle :** le handoff précédent (`ec20abda` / blob `3398be8c`) annonçait FULL
mais §6 ne contenait qu'une synthèse + extrait court — non conforme §7.2.1 / §7.2.2.
Ce pack remplace le handoff distant avec **diffs utiles complets** de tous les fichiers
modifiés du commit `2416e2ee` (+ fichier production principal et test S05 en entier).

---

## 0. Review pack content coverage (§7.5)

| Champ | Valeur |
| --- | --- |
| review pack réinitialisé au début du GO S05 | oui |
| review pack complété avant rapport | oui (ce complément formel) |
| niveau appliqué | **full** |
| absence de stub final | confirmé |
| created files full content | **not applicable** (aucun fichier créé dans `2416e2ee`) |
| modified sections complete | **yes** (diffs utiles complets ×5 + fichiers complets production/test S05) |
| useful diff included | **yes** |
| synthesis only | **no** |
| review pack verdict | **complete** |

---

## 1. Local Git Truth Check

| Contrôle | Initial (GO S05) | Final produit | Ce complément formel |
| --- | --- | --- | --- |
| Remote | `origin` → `mcleland147/sfia-workspace` | inchangé | inchangé |
| Branche produit | `build/next-ml4c-functional-convergence` | idem | **préservée** @ `2416e2ee` |
| HEAD produit | `8cff1591…` | **`2416e2ee25662821b015407346c64ec204f67488`** | inchangé (pas de nouveau commit produit) |
| Tree produit | `bf69e086…` | **`88c05766afa04355f5fbb63dcda603686a3f11a6`** | inchangé |
| `origin/main` / merge-base | `6d237452…` | inchangé | inchangé |
| Handoff tip (avant complément) | `5700866c…` | `ec20abda…` (pack incomplet formellement) | **sera remplacé** (FF mono-fichier) |

**Verdict Git Truth produit :** PASS — aucun reset destructif ; pas de force push ; pas de nouveau commit produit dans ce complément.

---

## 2. Git Review Index (§7.4)

```text
Git Review Index
- base branch : main @ 6d237452680640324eeadbb18f4601fd7de99850
- HEAD avant : 8cff159189a4b20399318b416dccfcebc6149233
- HEAD après : 2416e2ee25662821b015407346c64ec204f67488
- fichiers modifiés :
  - projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
  - projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
  - projects/sfia-studio-next/web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts
  - projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
  - projects/sfia-studio-next/construction/delivery-history.md
- fichiers créés : (aucun dans 2416e2ee)
- commits créés : 2416e2ee fix(next): ML4C S05 positive independent-dialogue qualification
- tests / validations : unit S05 7/7 ; guards ; PG continuity 23 ; Playwright 17/17 ; CI 43093786931 PASS + Required Gate
- diff stat : 5 files changed, 138 insertions(+), 87 deletions(-)
- diff name-status :
  M projects/sfia-studio-next/construction/delivery-history.md
  M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
  M projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
  M projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
  M projects/sfia-studio-next/web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts
- décisions Morris requises : aucun merge sans GO distinct ; revue ChatGPT indépendante
- review pack : full
- Fake/Real applicable : oui
- niveau de preuve déclaré : FAKE Nora + SCRIPTED Git + PG e2e ; LIVE/REAL NOT RUN
- realism gaps : Nora LIVE NOT RUN ; Git REAL NOT RUN ; S04 INCOMPLETE ; S07 PARTIAL
- réserves : S04 DOCUMENTED/INCOMPLETE ; S06 Git REAL NOT RUN ; S07 PARTIAL ; ML4D OUT ; CP2 non mergé ; RECETTE non acceptée ; STABLE NOT AVAILABLE ; ADOPTED non acquis ; NO RELEASE
```

---

## 3. Sources consultées (rôle / sections — pas de copie intégrale)

| Source | Rôle | Sections utiles |
| --- | --- | --- |
| `prompts/templates/sfia-cycle-execution-template.md` @ main | Review Pack FULL | §7.2–7.5 (contenu modifié, anti-synthèse, levels, index, coverage) |
| `method/.../sfia-rules-and-guardrails.md` @ main | garde-fous | routing / no force-push |
| Gouvernance Next ENV-01 / versioning @ main | ENV + NO RELEASE | blobs `14b61f0d…`, `8bc93e0f…` |
| CP2 `docs/next-r5-ml4c-cp2-preparation-20261111` @ `ab0c2ba3` | contrat conception (non mergé) | convergence / vérité effets |
| Code PR #676 @ `2416e2ee` | objet de revue | fichiers listés ci-dessus |
| CI `43093786931` | preuve distante | unit 350 · PG 287 · Playwright 17 · Required Gate |

---

## 4. Cause corrigée

Sur `8cff1591`, `qualifyThreadTurn()` réutilisait déjà les propriétaires
(`qualifyPilotageIntent` / `qualifyDocumentAct`) — **conservé**.

Deux replis restaient incorrects :

1. **`/\?$/` suffisait** à classer `DIALOGUE_INDEPENDANT` dès qu’aucun signal
   métier CLEAR n’avait matché → « Réinitialise ce projet ? » pouvait être
   traité comme indépendant.
2. **Repli final** : absence de surface d’effet résiduelle ⇒
   `DIALOGUE_INDEPENDANT` (« Intention non reconnue ⇒ indépendant »).

Ces replis ne démontrent pas l’indépendance et peuvent contourner les
protections pending (mutation distincte / perte de clé / faux COMPLETE).

Risques linguistiques (code-inferred, non effets serveur prouvés) :
- « Archive ce projet. »
- « Réinitialise ce projet ? »

---

## 5. Solution minimale retenue

**Pas** de nouvelle liste de verbes opérationnels, **pas** de moteur
d’intentions, **pas** de LLM LIVE, **pas** d’API / machine à états concurrente.

| Kind | Établissement | Pending non résolu | Sans pending |
| --- | --- | --- | --- |
| `DIALOGUE_INDEPENDANT` | **Positif uniquement** (marqueurs cognitifs / méta / explication) | COMPLETE B autorisé ; pending A préservé | conversation normale |
| `INTENTION_EFFET` | propriétaires CLEAR + create/publish locaux | blocage nouvel acte distinct | `rememberPending` pour ACK |
| `INCERTAIN` | indépendance non démontrée ; effet plausible | blocage / clarification | **pas** de pending inventé |

**Alternative regex écartée :** élargir la surface de verbes (Archive/Réinitialise/…) —
ne prouve pas l’indépendance ; dette lexicale.

**Blast radius IN :** triage S05 client, pending, rememberPending, tests, delivery-history.
**OUT :** Nora engine, ML4D, PG schema, HumanDecision, Git REAL, LIVE, SEF/roadmap, CI workflows, secrets, ancien Studio.

---

## 6. Fichiers modifiés — contenu exploitable (§7.2.1)

Commit : `2416e2ee25662821b015407346c64ec204f67488`
Parent : `8cff159189a4b20399318b416dccfcebc6149233`
Stat : **5 files changed, 138 insertions(+), 87 deletions(-)**

Aucun fichier **créé** dans ce commit → N/A pour « created full content ».

Pour chaque fichier **modifié** : **diff utile complet** ci-dessous.
Pour le module production principal et le test discriminant S05 : **fichier complet
après modification** également fourni (traçabilité FULL).

### 6.1 `web/src/domains/pilotage/thread-recovery.ts` — diff utile complet

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts b/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
index e73e0688..55dc5ebe 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
@@ -4,7 +4,8 @@
  *
  * ML4C S05 — thread turn qualification reuses owner linguistic qualifiers
  * (qualifyPilotageIntent / qualifyDocumentAct). Never invents authority.
- * Unrecognized ≠ automatically independent.
+ * Independent dialogue must be positively established — never by exclusion
+ * or by a lone "?".
  */

 import { qualifyDocumentAct } from "@/domains/conversation/document-act";
@@ -43,13 +44,18 @@ const PUBLISH_RE =
 /**
  * Residual operational surface — present when an effect may be intended even if
  * owner CLEAR qualification missed a noisy variant. Never authorizes alone.
+ * Not an exhaustive verb allowlist for all future effects.
  */
 const RESIDUAL_EFFECT_SURFACE_RE =
   /\b(?:ouvr(?:e|ir|ez|ait|irait)|lance|lancer|démarre|demarre|démarrer|demarrer|publie|publier|crée|créer|créez|creez|autorise|autoriser|accorde|accorder|clôture|cloture|clôturer|cloturer|révoque|revoque|enregistre\s+(?:cette\s+)?décision|je\s+décide|j['']autorise|fais[- ]le|fais(?:\s+ça|\s+le)?|tu\s+peux|peux[- ]tu|peut[- ]on|pourrais[- ]tu|pourrait[- ]on|et\s+si\s+on)\b/i;

-/** Positive cognitive / meta markers for independent dialogue (must not request an effect). */
+/**
+ * Positive cognitive / explanatory markers — required to establish
+ * DIALOGUE_INDEPENDANT. A lone "?" is never sufficient.
+ * Unicode-aware left edge: JS `\b` fails before accented starters (À/à).
+ */
 const COGNITIVE_INDEPENDENT_RE =
-  /\b(?:pourquoi|quelle\s+(?:est\s+la\s+)?différence|quelles?\s+sont|à\s+quoi\s+sert|que\s+signifie|que\s+veut\s+dire|explique(?:[- ]moi)?|comment\s+(?:fonctionne|marche)|en\s+quoi|pour\s+quelle\s+raison)\b/i;
+  /(?:^|[^\p{L}\p{N}_])(?:pourquoi|quelle\s+(?:est\s+la\s+)?différence|quelles?\s+sont|à\s+quoi\s+sert|que\s+signifie|que\s+veut\s+dire|explique(?:[- ]moi)?|comment\s+(?:fonctionne|marche)|en\s+quoi|pour\s+quelle\s+raison)\b/iu;

 /** Quotation / meta mention of a command (not performing it). */
 const META_COMMAND_CITATION_RE =
@@ -65,6 +71,36 @@ function hasCompoundEffectAfterExplain(text: string): boolean {
   );
 }

+/** Explanatory question that evokes an operation without requesting it. */
+function isExplanatoryEvocationOfOperation(text: string): boolean {
+  return (
+    /\bpourquoi\b/i.test(text) &&
+    /\b(?:ouvrir|ouvre|publier|créer)\b/i.test(text) &&
+    !/\b(?:peux[- ]tu|peut[- ]on|pourrais[- ]tu|fais|lance|démarre)\b/i.test(text) &&
+    !/\bje\s+d[eé]cide\b/i.test(text) &&
+    !hasCompoundEffectAfterExplain(text)
+  );
+}
+
+function isMetaCommandCitation(text: string): boolean {
+  return (
+    META_COMMAND_CITATION_RE.test(text) ||
+    (/^que\s+signifie\b/i.test(text) && !/\b(?:puis|ensuite)\b/i.test(text))
+  );
+}
+
+/**
+ * Positive evidence of independent cognitive dialogue.
+ * Absence of residual effect signals is NOT evidence of independence.
+ */
+function isPositivelyIndependentDialogue(text: string): boolean {
+  if (hasCompoundEffectAfterExplain(text)) return false;
+  if (isMetaCommandCitation(text)) return true;
+  if (isExplanatoryEvocationOfOperation(text)) return true;
+  if (COGNITIVE_INDEPENDENT_RE.test(text)) return true;
+  return false;
+}
+
 /**
  * Qualify a thread turn for UX continuity (pending gate / rememberPending).
  * Reuses D5/D6/D4 linguistic owners — does not authorize or execute.
@@ -127,29 +163,12 @@ export function qualifyThreadTurn(text: string): ThreadTurnQualification {
   }

   // Residual operational vocabulary without CLEAR owner match → uncertain,
-  // never auto-independent (fixes « Ouvre le/L/the cycle » bypass class).
+  // unless positively established as explanatory / meta.
   if (RESIDUAL_EFFECT_SURFACE_RE.test(t)) {
-    // Pure meta/citation about a command can still be cognitive.
-    if (
-      META_COMMAND_CITATION_RE.test(t) ||
-      (/^que\s+signifie\b/i.test(t) && !/\b(?:puis|ensuite)\b/i.test(t))
-    ) {
-      return {
-        kind: "DIALOGUE_INDEPENDANT",
-        reason: "Citation / méta-question sur une commande",
-        pilotageClarity: "NONE",
-      };
-    }
-    // « Pourquoi ouvrir… » — explanation about an act, not a request (owner already NONE).
-    if (
-      /\bpourquoi\b/i.test(t) &&
-      /\b(?:ouvrir|ouvre|publier|créer|créer)\b/i.test(t) &&
-      !/\b(?:peux[- ]tu|peut[- ]on|pourrais[- ]tu|fais|lance|démarre)\b/i.test(t) &&
-      !/\bje\s+d[eé]cide\b/i.test(t)
-    ) {
+    if (isPositivelyIndependentDialogue(t)) {
       return {
         kind: "DIALOGUE_INDEPENDANT",
-        reason: "Question explicative évoquant une opération",
+        reason: "Dialogue explicatif/méta positivement établi",
         pilotageClarity: "NONE",
       };
     }
@@ -160,18 +179,18 @@ export function qualifyThreadTurn(text: string): ThreadTurnQualification {
     };
   }

-  if (COGNITIVE_INDEPENDENT_RE.test(t) || /\?$/.test(t)) {
+  // Independence only when positively demonstrated — never by lone "?" or exclusion.
+  if (isPositivelyIndependentDialogue(t)) {
     return {
       kind: "DIALOGUE_INDEPENDANT",
-      reason: "Question / dialogue cognitif sans surface d'effet",
+      reason: "Dialogue cognitif/explicatif positivement établi",
       pilotageClarity: "NONE",
     };
   }

-  // Soft non-operational prose (no residual effect surface) — independent.
   return {
-    kind: "DIALOGUE_INDEPENDANT",
-    reason: "Dialogue sans signal d'effet résiduel",
+    kind: "INCERTAIN",
+    reason: "Indépendance non établie positivement",
     pilotageClarity: "NONE",
   };
 }
@@ -221,11 +240,17 @@ export function shouldClearThreadPending(input: {
  * an unresolved pending. Same content ⇒ retry of the same logical act.
  * Only positively established independent dialogue may proceed without
  * replacing pending. INCERTAIN and INTENTION_EFFET stay blocked.
+ *
+ * `nextIsIndependentDialogue` alone never establishes independence — when
+ * `nextTurnKind` is omitted, content is re-qualified.
  */
 export function mayStartNewThreadAct(input: {
   unresolved: ThreadPendingTurn | null | undefined;
   nextContent: string;
-  /** When true, allow a cognitive question without overwriting métier pending. */
+  /**
+   * Legacy hint — ignored as authority. Independence is always derived from
+   * `nextTurnKind` or `qualifyThreadTurn(nextContent)`.
+   */
   nextIsIndependentDialogue?: boolean;
   /** Preferred: full turn kind (INCERTAIN never bypasses pending). */
   nextTurnKind?: ThreadTurnKind;
@@ -234,9 +259,7 @@ export function mayStartNewThreadAct(input: {
   if (!pending) return { ok: true };
   if (pending.content.trim() === input.nextContent.trim()) return { ok: true };

-  const kind =
-    input.nextTurnKind ??
-    (input.nextIsIndependentDialogue ? "DIALOGUE_INDEPENDANT" : "INTENTION_EFFET");
+  const kind = input.nextTurnKind ?? qualifyThreadTurn(input.nextContent).kind;

   if (kind === "DIALOGUE_INDEPENDANT") return { ok: true };
```

### 6.2 `web/src/domains/pilotage/thread-recovery.ts` — fichier complet après `2416e2ee`

```typescript
/**
 * CR-02 — client-side recovery helpers (no DB, no secrets).
 * sessionStorage pending is a local aid; durable truth stays in D5/D6.
 *
 * ML4C S05 — thread turn qualification reuses owner linguistic qualifiers
 * (qualifyPilotageIntent / qualifyDocumentAct). Never invents authority.
 * Independent dialogue must be positively established — never by exclusion
 * or by a lone "?".
 */

import { qualifyDocumentAct } from "@/domains/conversation/document-act";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";

export type ThreadPendingTurn = {
  content: string;
  clientTurnKey: string;
  clientCommandKey: string;
};

/**
 * Qualification categories for a conversational turn over an optional pending.
 * Not a métier state machine — linguistic triage only.
 */
export type ThreadTurnKind =
  | "DIALOGUE_INDEPENDANT"
  | "INTENTION_EFFET"
  | "INCERTAIN";

export type ThreadTurnQualification = {
  kind: ThreadTurnKind;
  reason: string;
  /** Owner pilotage clarity when consulted (never an execution grant). */
  pilotageClarity?: "CLEAR" | "AMBIGUOUS" | "NONE";
  pilotageOperation?: string;
};

const PROJECT_CREATE_RE =
  /\b(?:crée|créer|créez|creez|cree|creer)\s+(?:(?:un|une|le|la|ce|cet|the|l)\s+)?(?:autre\s+)?projet\b/i;

/** Effectual publish/merge intent — not explanatory mentions of « commit » / Git vocabulary. */
const PUBLISH_RE =
  /\b(?:publie|publier|publication\s+(?:le|la|ce|sur)|(?:crée|créer)\s+(?:un\s+)?(?:commit|pr|pull\s*request)|(?:ouvre|ouvrir)\s+(?:une\s+)?(?:pr|pull\s*request)|merge\s+(?:la\s+|le\s+)?(?:pr|branche|request))\b/i;

/**
 * Residual operational surface — present when an effect may be intended even if
 * owner CLEAR qualification missed a noisy variant. Never authorizes alone.
 * Not an exhaustive verb allowlist for all future effects.
 */
const RESIDUAL_EFFECT_SURFACE_RE =
  /\b(?:ouvr(?:e|ir|ez|ait|irait)|lance|lancer|démarre|demarre|démarrer|demarrer|publie|publier|crée|créer|créez|creez|autorise|autoriser|accorde|accorder|clôture|cloture|clôturer|cloturer|révoque|revoque|enregistre\s+(?:cette\s+)?décision|je\s+décide|j['']autorise|fais[- ]le|fais(?:\s+ça|\s+le)?|tu\s+peux|peux[- ]tu|peut[- ]on|pourrais[- ]tu|pourrait[- ]on|et\s+si\s+on)\b/i;

/**
 * Positive cognitive / explanatory markers — required to establish
 * DIALOGUE_INDEPENDANT. A lone "?" is never sufficient.
 * Unicode-aware left edge: JS `\b` fails before accented starters (À/à).
 */
const COGNITIVE_INDEPENDENT_RE =
  /(?:^|[^\p{L}\p{N}_])(?:pourquoi|quelle\s+(?:est\s+la\s+)?différence|quelles?\s+sont|à\s+quoi\s+sert|que\s+signifie|que\s+veut\s+dire|explique(?:[- ]moi)?|comment\s+(?:fonctionne|marche)|en\s+quoi|pour\s+quelle\s+raison)\b/iu;

/** Quotation / meta mention of a command (not performing it). */
const META_COMMAND_CITATION_RE =
  /\b(?:que\s+signifie|que\s+veut\s+dire|signifie)\s+(?:la\s+)?(?:commande|formulation|phrase)?\s*['«"]/i;

function hasCompoundEffectAfterExplain(text: string): boolean {
  // « Explique … puis ouvre le cycle » — mixed: not independent.
  return (
    /\b(?:explique|pourquoi|quelle)\b/i.test(text) &&
    /\b(?:puis|ensuite|et)\b[\s\S]{0,80}\b(?:ouvre|ouvrir|publie|crée|créer|lance|démarre)\b/i.test(
      text,
    )
  );
}

/** Explanatory question that evokes an operation without requesting it. */
function isExplanatoryEvocationOfOperation(text: string): boolean {
  return (
    /\bpourquoi\b/i.test(text) &&
    /\b(?:ouvrir|ouvre|publier|créer)\b/i.test(text) &&
    !/\b(?:peux[- ]tu|peut[- ]on|pourrais[- ]tu|fais|lance|démarre)\b/i.test(text) &&
    !/\bje\s+d[eé]cide\b/i.test(text) &&
    !hasCompoundEffectAfterExplain(text)
  );
}

function isMetaCommandCitation(text: string): boolean {
  return (
    META_COMMAND_CITATION_RE.test(text) ||
    (/^que\s+signifie\b/i.test(text) && !/\b(?:puis|ensuite)\b/i.test(text))
  );
}

/**
 * Positive evidence of independent cognitive dialogue.
 * Absence of residual effect signals is NOT evidence of independence.
 */
function isPositivelyIndependentDialogue(text: string): boolean {
  if (hasCompoundEffectAfterExplain(text)) return false;
  if (isMetaCommandCitation(text)) return true;
  if (isExplanatoryEvocationOfOperation(text)) return true;
  if (COGNITIVE_INDEPENDENT_RE.test(text)) return true;
  return false;
}

/**
 * Qualify a thread turn for UX continuity (pending gate / rememberPending).
 * Reuses D5/D6/D4 linguistic owners — does not authorize or execute.
 */
export function qualifyThreadTurn(text: string): ThreadTurnQualification {
  const t = text.trim().replace(/\s+/g, " ");
  if (!t) {
    return { kind: "INCERTAIN", reason: "Énoncé vide", pilotageClarity: "NONE" };
  }

  const documentAct = qualifyDocumentAct(t);
  if (documentAct.kind === "CREATE" || documentAct.kind === "REVISE") {
    return {
      kind: "INTENTION_EFFET",
      reason: `Acte documentaire ${documentAct.kind}`,
      pilotageClarity: "NONE",
    };
  }

  const pilotage = qualifyPilotageIntent(t);
  if (pilotage.clarity === "CLEAR") {
    return {
      kind: "INTENTION_EFFET",
      reason: `Pilotage CLEAR ${pilotage.operation}`,
      pilotageClarity: "CLEAR",
      pilotageOperation: pilotage.operation,
    };
  }
  if (pilotage.clarity === "AMBIGUOUS") {
    return {
      kind: "INCERTAIN",
      reason: pilotage.reason || "Pilotage ambigu",
      pilotageClarity: "AMBIGUOUS",
    };
  }

  if (PROJECT_CREATE_RE.test(t)) {
    return {
      kind: "INTENTION_EFFET",
      reason: "Création de projet",
      pilotageClarity: "NONE",
    };
  }

  // Local publish surface only — do not import mission-continuity (DB) into the browser.
  if (PUBLISH_RE.test(t)) {
    return {
      kind: "INTENTION_EFFET",
      reason: "Publication / merge",
      pilotageClarity: "NONE",
    };
  }

  if (hasCompoundEffectAfterExplain(t)) {
    return {
      kind: "INCERTAIN",
      reason: "Formulation mixte explication + effet",
      pilotageClarity: "NONE",
    };
  }

  // Residual operational vocabulary without CLEAR owner match → uncertain,
  // unless positively established as explanatory / meta.
  if (RESIDUAL_EFFECT_SURFACE_RE.test(t)) {
    if (isPositivelyIndependentDialogue(t)) {
      return {
        kind: "DIALOGUE_INDEPENDANT",
        reason: "Dialogue explicatif/méta positivement établi",
        pilotageClarity: "NONE",
      };
    }
    return {
      kind: "INCERTAIN",
      reason: "Surface opérationnelle sans qualification CLEAR",
      pilotageClarity: pilotage.clarity,
    };
  }

  // Independence only when positively demonstrated — never by lone "?" or exclusion.
  if (isPositivelyIndependentDialogue(t)) {
    return {
      kind: "DIALOGUE_INDEPENDANT",
      reason: "Dialogue cognitif/explicatif positivement établi",
      pilotageClarity: "NONE",
    };
  }

  return {
    kind: "INCERTAIN",
    reason: "Indépendance non établie positivement",
    pilotageClarity: "NONE",
  };
}

/**
 * ML4C S05 / Decision 1 — true only when independence is positively established.
 * Client UX aid only — never an execution authority.
 */
export function looksLikeIndependentDialogue(text: string): boolean {
  return qualifyThreadTurn(text).kind === "DIALOGUE_INDEPENDANT";
}

/** Deterministic business key for a conversational turn. */
export function conversationalClientCommandKey(clientTurnKey: string): string {
  return `conv-auth:${clientTurnKey.trim()}`;
}

export function pendingStorageKey(projectId: string): string {
  return `sfia.thread.pending:${projectId}`;
}

/**
 * Clear pending only when the business effect is terminal, or when no
 * business attempt occurred and Nora reached a conversational terminal.
 * Nora COMPLETE must NOT close an UNKNOWN / unresolved métier effect.
 * Independent dialogue COMPLETE must NOT clear a distinct unresolved métier pending.
 */
export function shouldClearThreadPending(input: {
  noraStatus?: string | null;
  effectAttempted?: boolean | null;
  effectStatus?: string | null;
  /** True when this COMPLETE belongs to an independent turn over pending A. */
  preserveUnresolvedMetierPending?: boolean;
}): boolean {
  if (input.preserveUnresolvedMetierPending) return false;
  const biz = (input.effectStatus ?? "").trim().toUpperCase();
  if (input.effectAttempted === true) {
    if (!biz || biz === "UNKNOWN" || biz.startsWith("UNKNOWN")) return false;
    return true;
  }
  const nora = (input.noraStatus ?? "").trim().toUpperCase();
  return nora === "COMPLETE" || nora === "FAILED";
}

/**
 * Exclusive in-flight guard: a distinct new act must not silently overwrite
 * an unresolved pending. Same content ⇒ retry of the same logical act.
 * Only positively established independent dialogue may proceed without
 * replacing pending. INCERTAIN and INTENTION_EFFET stay blocked.
 *
 * `nextIsIndependentDialogue` alone never establishes independence — when
 * `nextTurnKind` is omitted, content is re-qualified.
 */
export function mayStartNewThreadAct(input: {
  unresolved: ThreadPendingTurn | null | undefined;
  nextContent: string;
  /**
   * Legacy hint — ignored as authority. Independence is always derived from
   * `nextTurnKind` or `qualifyThreadTurn(nextContent)`.
   */
  nextIsIndependentDialogue?: boolean;
  /** Preferred: full turn kind (INCERTAIN never bypasses pending). */
  nextTurnKind?: ThreadTurnKind;
}): { ok: true } | { ok: false; reason: string; pending: ThreadPendingTurn } {
  const pending = input.unresolved;
  if (!pending) return { ok: true };
  if (pending.content.trim() === input.nextContent.trim()) return { ok: true };

  const kind = input.nextTurnKind ?? qualifyThreadTurn(input.nextContent).kind;

  if (kind === "DIALOGUE_INDEPENDANT") return { ok: true };

  if (kind === "INCERTAIN") {
    return {
      ok: false,
      reason:
        "Intention incertaine pendant une tentative non résolue — clarifier ou réconcilier avant un nouvel acte",
      pending,
    };
  }

  return {
    ok: false,
    reason:
      "Tentative non résolue en cours — réconcilier avant un nouvel acte distinct",
    pending,
  };
}
```

### 6.3 `web/src/app/projects/[projectId]/page.tsx` — diff utile complet

Section modifiée : `sendMessage` / `rememberPending` (l. ~710–718).

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 9439c291..72c9fae2 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -710,9 +710,10 @@ export default function ProjectPage() {
     }
     const clientTurnKey = messageTurnKeyRef.current.key;
     const clientCommandKey = conversationalClientCommandKey(clientTurnKey);
-    // Remember métier (or uncertain effect-seeking) turns for ACK recovery.
+    // Remember only CLEAR métier effect turns for ACK recovery.
+    // INCERTAIN without pending must not invent a durable métier pending.
     // Independent cognitive dialogue must not clobber an unresolved pending key.
-    if (turn.kind === "INTENTION_EFFET" || turn.kind === "INCERTAIN") {
+    if (turn.kind === "INTENTION_EFFET") {
       rememberPending({ content: text, clientTurnKey, clientCommandKey });
     }
     const preserveMetierPending = independent && Boolean(pendingBefore);
```

### 6.4 `web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts` — diff utile complet

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts b/projects/sfia-studio-next/web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts
index fdf07bbc..3b3c8f32 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts
@@ -5,98 +5,104 @@ import {
   qualifyThreadTurn,
 } from "@/domains/pilotage/thread-recovery";

-describe("ML4C S05 — qualifyThreadTurn linguistic matrix", () => {
+describe("ML4C S05 — positive independent dialogue qualification", () => {
   const pending = {
     content: "Ouvre le cycle cadrage.",
     clientTurnKey: "ctk_pending",
     clientCommandKey: "conv-auth:ctk_pending",
   };

-  it("classifies métier OPEN_CYCLE variants as INTENTION_EFFET (not independent by exclusion)", () => {
+  it("classifies CLEAR métier variants as INTENTION_EFFET", () => {
     for (const s of [
-      "Ouvre un cycle cadrage.",
       "Ouvre le cycle cadrage.",
+      "Ouvre un cycle cadrage.",
       "Ouvre cycle cadrage.",
+      "Crée un projet.",
+      "Publie ce document.",
+      "Je décide que GitHub est obligatoire.",
     ]) {
       const q = qualifyThreadTurn(s);
       expect(q.kind, s).toBe("INTENTION_EFFET");
-      expect(q.pilotageOperation, s).toBe("OPEN_CYCLE");
       expect(looksLikeIndependentDialogue(s)).toBe(false);
     }
   });

-  it("treats noisy OPEN formulations as INCERTAIN — never DIALOGUE_INDEPENDANT", () => {
+  it("never treats unknown/noisy operational phrasing as independent by default", () => {
     for (const s of [
-      "Ouvre the cycle cadrage.",
+      "Archive ce projet.",
+      "Réinitialise ce projet ?",
+      "Supprime cette configuration.",
       "Ouvre L cycle cadrage.",
-      "Lance le cycle de cadrage.",
-      "Démarre le cadrage.",
-      "Peux-tu ouvrir le cycle cadrage ?",
+      "Ouvre the cycle cadrage.",
+      "Tu peux faire ça ?",
+      "Fais-le.",
+      "Explique-moi ce choix puis ouvre le cycle.",
     ]) {
       const q = qualifyThreadTurn(s);
-      expect(q.kind, s).toBe("INCERTAIN");
-      expect(looksLikeIndependentDialogue(s)).toBe(false);
+      expect(q.kind, s).not.toBe("DIALOGUE_INDEPENDANT");
+      expect(["INCERTAIN", "INTENTION_EFFET"]).toContain(q.kind);
     }
   });

-  it("keeps clear effect intents as INTENTION_EFFET", () => {
-    expect(qualifyThreadTurn("Crée un autre projet.").kind).toBe("INTENTION_EFFET");
-    expect(qualifyThreadTurn("Publie ce document.").kind).toBe("INTENTION_EFFET");
-    expect(qualifyThreadTurn("Je décide que GitHub est obligatoire.").kind).toBe(
-      "INTENTION_EFFET",
-    );
-  });
-
-  it("positively establishes independent cognitive questions", () => {
+  it("requires positive cognitive evidence for DIALOGUE_INDEPENDANT (lone ? insufficient)", () => {
     for (const s of [
       "Pourquoi avions-nous choisi cette architecture ?",
-      "Quelle différence entre un blob et un commit ?",
+      "Quelle est la différence entre un blob et un commit ?",
       "À quoi sert un cycle de cadrage ?",
       "Pourquoi ouvrir un cycle de cadrage ?",
       "Que signifie la commande 'ouvre le cycle' ?",
+      "Explique-moi cette décision.",
+      "Comment fonctionne notre trajectoire ?",
     ]) {
       expect(qualifyThreadTurn(s).kind, s).toBe("DIALOGUE_INDEPENDANT");
-      expect(
-        mayStartNewThreadAct({
-          unresolved: pending,
-          nextContent: s,
-          nextTurnKind: "DIALOGUE_INDEPENDANT",
-        }).ok,
-        s,
-      ).toBe(true);
     }
+    // Lone "?" / unknown short ask — not positively independent.
+    expect(qualifyThreadTurn("Réinitialise ce projet ?").kind).toBe("INCERTAIN");
+    expect(qualifyThreadTurn("Ok ?").kind).toBe("INCERTAIN");
+    expect(qualifyThreadTurn("Et maintenant").kind).toBe("INCERTAIN");
   });

-  it("keeps ambiguous / mixed formulations out of independent dialogue", () => {
-    for (const s of [
-      "Tu peux faire ça ?",
-      "Fais-le.",
-      "Et si on ouvrait le cycle ?",
-      "Explique-moi ce choix puis ouvre le cycle.",
-      "Je pourrais ouvrir le cycle ?",
-    ]) {
-      const q = qualifyThreadTurn(s);
-      expect(q.kind, s).not.toBe("DIALOGUE_INDEPENDANT");
-      expect(
-        mayStartNewThreadAct({
-          unresolved: pending,
-          nextContent: s,
-          nextTurnKind: q.kind,
-        }).ok,
-        s,
-      ).toBe(false);
+  it("blocks unknown operational B over unresolved pending A", () => {
+    for (const s of ["Archive ce projet.", "Réinitialise ce projet ?", "Ouvre L cycle cadrage."]) {
+      const kind = qualifyThreadTurn(s).kind;
+      const gate = mayStartNewThreadAct({
+        unresolved: pending,
+        nextContent: s,
+        nextTurnKind: kind,
+      });
+      expect(gate.ok, s).toBe(false);
+      if (!gate.ok) {
+        expect(gate.pending.clientTurnKey).toBe(pending.clientTurnKey);
+      }
     }
   });

-  it("blocks INCERTAIN over unresolved pending (conservative)", () => {
+  it("allows positively independent B over pending A", () => {
+    const s = "Quelle est la différence entre un blob et un commit ?";
+    expect(
+      mayStartNewThreadAct({
+        unresolved: pending,
+        nextContent: s,
+        nextTurnKind: "DIALOGUE_INDEPENDANT",
+      }).ok,
+    ).toBe(true);
+  });
+
+  it("does not let nextIsIndependentDialogue alone bypass pending", () => {
     const gate = mayStartNewThreadAct({
       unresolved: pending,
-      nextContent: "Ouvre L cycle cadrage.",
-      nextTurnKind: "INCERTAIN",
+      nextContent: "Archive ce projet.",
+      nextIsIndependentDialogue: true,
+      // nextTurnKind omitted — must re-qualify content, not trust the boolean
     });
     expect(gate.ok).toBe(false);
-    if (!gate.ok) {
-      expect(gate.pending.clientTurnKey).toBe(pending.clientTurnKey);
-    }
+  });
+
+  it("negations / hypotheses / citations stay non-bypass", () => {
+    expect(qualifyThreadTurn("N'ouvre pas le cycle.").kind).not.toBe("DIALOGUE_INDEPENDANT");
+    expect(qualifyThreadTurn("Et si on ouvrait le cycle ?").kind).toBe("INCERTAIN");
+    expect(qualifyThreadTurn("Que signifie la commande 'ouvre le cycle' ?").kind).toBe(
+      "DIALOGUE_INDEPENDANT",
+    );
   });
 });
```

### 6.5 `web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts` — fichier complet après `2416e2ee`

```typescript
import { describe, expect, it } from "vitest";
import {
  looksLikeIndependentDialogue,
  mayStartNewThreadAct,
  qualifyThreadTurn,
} from "@/domains/pilotage/thread-recovery";

describe("ML4C S05 — positive independent dialogue qualification", () => {
  const pending = {
    content: "Ouvre le cycle cadrage.",
    clientTurnKey: "ctk_pending",
    clientCommandKey: "conv-auth:ctk_pending",
  };

  it("classifies CLEAR métier variants as INTENTION_EFFET", () => {
    for (const s of [
      "Ouvre le cycle cadrage.",
      "Ouvre un cycle cadrage.",
      "Ouvre cycle cadrage.",
      "Crée un projet.",
      "Publie ce document.",
      "Je décide que GitHub est obligatoire.",
    ]) {
      const q = qualifyThreadTurn(s);
      expect(q.kind, s).toBe("INTENTION_EFFET");
      expect(looksLikeIndependentDialogue(s)).toBe(false);
    }
  });

  it("never treats unknown/noisy operational phrasing as independent by default", () => {
    for (const s of [
      "Archive ce projet.",
      "Réinitialise ce projet ?",
      "Supprime cette configuration.",
      "Ouvre L cycle cadrage.",
      "Ouvre the cycle cadrage.",
      "Tu peux faire ça ?",
      "Fais-le.",
      "Explique-moi ce choix puis ouvre le cycle.",
    ]) {
      const q = qualifyThreadTurn(s);
      expect(q.kind, s).not.toBe("DIALOGUE_INDEPENDANT");
      expect(["INCERTAIN", "INTENTION_EFFET"]).toContain(q.kind);
    }
  });

  it("requires positive cognitive evidence for DIALOGUE_INDEPENDANT (lone ? insufficient)", () => {
    for (const s of [
      "Pourquoi avions-nous choisi cette architecture ?",
      "Quelle est la différence entre un blob et un commit ?",
      "À quoi sert un cycle de cadrage ?",
      "Pourquoi ouvrir un cycle de cadrage ?",
      "Que signifie la commande 'ouvre le cycle' ?",
      "Explique-moi cette décision.",
      "Comment fonctionne notre trajectoire ?",
    ]) {
      expect(qualifyThreadTurn(s).kind, s).toBe("DIALOGUE_INDEPENDANT");
    }
    // Lone "?" / unknown short ask — not positively independent.
    expect(qualifyThreadTurn("Réinitialise ce projet ?").kind).toBe("INCERTAIN");
    expect(qualifyThreadTurn("Ok ?").kind).toBe("INCERTAIN");
    expect(qualifyThreadTurn("Et maintenant").kind).toBe("INCERTAIN");
  });

  it("blocks unknown operational B over unresolved pending A", () => {
    for (const s of ["Archive ce projet.", "Réinitialise ce projet ?", "Ouvre L cycle cadrage."]) {
      const kind = qualifyThreadTurn(s).kind;
      const gate = mayStartNewThreadAct({
        unresolved: pending,
        nextContent: s,
        nextTurnKind: kind,
      });
      expect(gate.ok, s).toBe(false);
      if (!gate.ok) {
        expect(gate.pending.clientTurnKey).toBe(pending.clientTurnKey);
      }
    }
  });

  it("allows positively independent B over pending A", () => {
    const s = "Quelle est la différence entre un blob et un commit ?";
    expect(
      mayStartNewThreadAct({
        unresolved: pending,
        nextContent: s,
        nextTurnKind: "DIALOGUE_INDEPENDANT",
      }).ok,
    ).toBe(true);
  });

  it("does not let nextIsIndependentDialogue alone bypass pending", () => {
    const gate = mayStartNewThreadAct({
      unresolved: pending,
      nextContent: "Archive ce projet.",
      nextIsIndependentDialogue: true,
      // nextTurnKind omitted — must re-qualify content, not trust the boolean
    });
    expect(gate.ok).toBe(false);
  });

  it("negations / hypotheses / citations stay non-bypass", () => {
    expect(qualifyThreadTurn("N'ouvre pas le cycle.").kind).not.toBe("DIALOGUE_INDEPENDANT");
    expect(qualifyThreadTurn("Et si on ouvrait le cycle ?").kind).toBe("INCERTAIN");
    expect(qualifyThreadTurn("Que signifie la commande 'ouvre le cycle' ?").kind).toBe(
      "DIALOGUE_INDEPENDANT",
    );
  });
});
```

### 6.6 `web/tests/unit/ml4c-s01-s03-guards.test.ts` — diff utile complet

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts b/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
index cb38650a..b154e048 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts
@@ -127,6 +127,13 @@ describe("ML4C S05 Decision 1 — independent dialogue vs pending métier", () =
     expect(looksLikeIndependentDialogue("Est-ce qu'on peut autoriser cette action ?")).toBe(false);
     expect(looksLikeIndependentDialogue("Ouvre le cycle cadrage.")).toBe(false);
     expect(looksLikeIndependentDialogue("Ouvre L cycle cadrage.")).toBe(false);
+    expect(looksLikeIndependentDialogue("Archive ce projet.")).toBe(false);
+    expect(looksLikeIndependentDialogue("Réinitialise ce projet ?")).toBe(false);
+  });
+
+  it("lone question mark does not establish independence", () => {
+    expect(looksLikeIndependentDialogue("Ok ?")).toBe(false);
+    expect(looksLikeIndependentDialogue("Pourquoi ouvrir un cycle de cadrage ?")).toBe(true);
   });

   it("COMPLETE on independent turn must not clear unresolved métier pending", () => {
```

### 6.7 `construction/delivery-history.md` — diff utile complet

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index c5c0ccee..acde3811 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,20 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-11-ML4C-S05-POSITIVE-INDEPENDENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-11 (Europe/Paris) |
+| Macro-lot | ML4C — INC S05 qualification positive (PR #676) |
+| Type | INC — indépendance positivement établie ; inconnu → INCERTAIN (NO RELEASE) |
+| Branch | `build/next-ml4c-functional-convergence` |
+| Parent tip | `8cff1591` |
+| Lane | DEV :5433; mutative → `sfia_next_e2e`; RECETTE/STABLE untouched |
+| Changes | Supprime repli « inconnu/? ⇒ indépendant » ; `qualifyThreadTurn` n'établit DIALOGUE_INDEPENDANT que sur marqueurs cognitifs positifs ; INCERTAIN sans pending n'invente pas de pending métier |
+| Schema | unchanged |
+| Status | PR #676 corrective — CI à rejouer — LIVE/REAL carried |
+
 ## delivery_id: DELIV-2026-11-11-ML4C-S05-INTENT-QUALIFICATION

 | Field | Value |
```

---

## 7. Matrice linguistique (unit)

Attendu `INTENTION_EFFET` :
- Ouvre le/un/∅ cycle cadrage. ; Crée un projet. ; Publie ce document. ;
  Je décide que GitHub est obligatoire.

Attendu **jamais** `DIALOGUE_INDEPENDANT` (INCERTAIN ou INTENTION_EFFET) :
- Archive ce projet. ; Réinitialise ce projet ? ; Supprime cette configuration. ;
  Ouvre L/the cycle… ; Tu peux faire ça ? ; Fais-le. ;
  Explique-moi ce choix puis ouvre le cycle.

Attendu `DIALOGUE_INDEPENDANT` (preuve positive) :
- Pourquoi avions-nous choisi… ; Quelle est la différence… ;
  À quoi sert un cycle… ; Pourquoi ouvrir un cycle… ;
  Que signifie la commande 'ouvre le cycle' ? ; Explique-moi… ;
  Comment fonctionne notre trajectoire ?

Contrôles : `Ok ?` / `Et maintenant` → INCERTAIN ; boolean
`nextIsIndependentDialogue: true` seul ne bypass pas pending ;
négations / hypothèses / citations.

Local : `ml4c-s05-thread-turn-qualification.test.ts` **7/7 PASS** ;
`ml4c-s01-s03-guards` **11/11** ; `ml3-b13-divergence` **25/25**.

---

## 8. CR-02 / S05 navigateur + non-régression

**Local (SHA `2416e2ee`) :**
- `ml3-pilotage` + `ml4c-s05` : **8 passed** (incl. CR-02 ACK perdu).
- Playwright complet : **17 passed**.
- PG `intent-continuity-global.pg.test.ts` : **23 passed**.
- `tsc --noEmit` PASS ; `npm run build` PASS ; lint warnings préexistants only.
- `git diff --check` produit clean ; scan secrets diff produit : clean.

**CI GitHub sur HEAD exact `2416e2ee` :**
- Next CI run **`43093786931`** — **success**
  - unit : **41 files / 350 tests passed** (incl. S05 7 tests)
  - integration PG : **15 files / 287 tests passed**
  - Playwright : **17 passed (2.3m)**
  - Required Gate Next : **PASS**
- Studio CI run **`43093787012`** — **success**

URL : https://github.com/mcleland147/sfia-workspace/actions/runs/43093786931

---

## 9. Preuve ENV-01

| | `sfia_next_dev` (opérateur) | `sfia_next_e2e` (mutatif) |
| --- | --- | --- |
| Host/port | 127.0.0.1:5433 | 127.0.0.1:5433 |
| Role | `sfia_next_dev` | `sfia_next_dev` |
| Pilots BEFORE | **8850** | 318 |
| Pilots AFTER | **8850** (inchangé) | 342 (croissance e2e) |

RECETTE : aucune mutation. STABLE : NOT AVAILABLE. ENV-C : aucun nettoyage.
Nora LIVE : **NOT RUN**. Git REAL : **NOT RUN**.

---

## 10. Fake / Real Qualification (§6.16)

| Capacité | Mode | Statut |
| --- | --- | --- |
| Nora conversation | FAKE / deterministic-fixture | RUN (e2e + CI) |
| Nora LIVE | LIVE | **NOT RUN** |
| Git collaboration | SCRIPTED | RUN |
| Git REAL | REAL | **NOT RUN** |
| PG mutatif tests | `sfia_next_e2e` only | RUN |

---

## 11. Statuts S01–S07 (portés)

| Slice | Statut |
| --- | --- |
| S01–S03 | portés |
| **S04** | **DOCUMENTED / INCOMPLETE** |
| **S05** | **POSITIVE QUALIFICATION VERIFIED** (code + CI) |
| S06 | SCRIPTED only — Git REAL **NOT RUN** |
| S07 | **PARTIAL** |
| ML4D | **OUT** |
| CP2 documentaire | **non mergé** |
| RECETTE | **non acceptée** |
| STABLE | **NOT AVAILABLE** |
| ADOPTED | **non acquis** |

---

## 12. Risques / réserve / dette

- Marqueurs cognitifs positifs = heuristique linguistique bornée (pas Nora).
- Opérationnel hors surface résiduelle → INCERTAIN (pas CLEAR artificiel).
- S04 baseline cognitive incomplete (hors scope).
- **Anomalie formelle handoff `ec20abda` corrigée par ce pack** (diffs complets).

---

## 13. Garde-fous

- Aucun merge / auto-merge / force-push.
- Aucun nouveau commit produit dans ce complément formel.
- Handoff L3 : mono-fichier `sfia-review-handoff/latest-chatgpt-review.md` seulement.
- Branche ML4C préservée @ `2416e2ee`.

---

## 14. Décisions Morris requises

1. Revue ChatGPT indépendante du pack FULL conforme.
2. GO Morris distinct pour tout merge de PR #676.
3. Aucune promotion RECETTE/STABLE / LIVE / REAL dans ce cycle.

---

## 15. Verdict

**ML4C PR #676 — S05 POSITIVE QUALIFICATION
VERIFIED, CI PASSED
REVIEW PACK FULL COMPLETE (§7.2–7.3)
READY FOR CHATGPT REVIEW**

- HEAD produit : `2416e2ee25662821b015407346c64ec204f67488`
- Tree : `88c05766afa04355f5fbb63dcda603686a3f11a6`
- CI Next : `43093786931`
- PR : https://github.com/mcleland147/sfia-workspace/pull/676
- **Aucun merge** sans GO Morris distinct.

### Instruction finale à ChatGPT

Relire ce Review Pack FULL (diffs §6 inclus). Contrôler la classification positive,
les cas inconnus, CR-02, S05 et la continuité. Vérifier la CI sur le HEAD exact.
Confronter les preuves au contrat CP2. Rendre un verdict indépendant.

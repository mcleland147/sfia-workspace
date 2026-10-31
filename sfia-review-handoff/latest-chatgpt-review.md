# SFIA Review Pack FULL — AKG-M5 / L3-S2
## LUMEN — Integrated A+B + Positive Product Admission (Option B / Slice D)

**Horodatage (UTC):** 2026-10-31T22:45:24Z
**Profil:** CRITICAL
**Cycle:** 8 Delivery + 9 QA
**Capacité:** V3-F05
**Milestone:** L3-S2 OPEN
**GO Morris:** Implementation locale B/D autorisée — pas de push/PR projet — pas LIVE/REAL
**Verdict cible:** INTEGRATED A+B POSITIVE ADMISSION READY FOR MORRIS REVIEW

---

## 1. Horodatage

- Pack: `2026-10-31T22:45:24Z`
- Delivery WT: `/Users/morris/Projects/sfia-workspace-feat-akg-m5-lumen-cog-prepare-corr-01`
- Handoff WT: `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023`
- Prior Decision Pack tip/blob: `95dd25ae…` / `9d756772…`

---

## 2. Git Truth

| Item | Value |
|------|-------|
| Branch | `feat/akg-m5-lumen-cog-prepare-corr-01` |
| HEAD | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| origin/main | same |
| Prior handoff | `95dd25ae18a7cf9b276942e83cfc846b80913bd5` / blob `9d756772…` |
| Staged | empty |
| Project push | NONE |
| move_agent_to_root | NOT USED |
| Runtime :3020 | UNTOUCHED |

**Dirty A+B preserved + Slice D added (uncommitted).**

---

## 3. GO Morris B/D

Implémenter premier slice D de l'option B dans le chantier A+B existant.
F1/F2 soumis à admission positive commune avant mutation EC.
Pas de nouveau moteur/OA/store. Pas de commit projet.

---

## 4. Convergence Pre-check

Template v2.6, Build Doctrine, Roadmap (L3 OPEN), C1, M5 SHE, V3 30–35, PRR 03/06/07/08/09, Decision Pack B/D — READ.
CKC QA candidate. Git/code > PRR.

---

## 5. Capacité / trajectoire V3-F05

- Acquis A+B locaux (NAP guidance-backed + citation≠consent) conservés.
- Gap fermé: admission PREPARE non uniforme F1 vs F2.
- Exit: gate commun BEHAVIOR PROVEN au scope DET; LIVE sous GO distinct.

---

## 6. Decision Pack antérieur

Option B hybride + slice D mutualiser gate. E-OFFER-ACCEPT / E-EXPLICIT-PREPARE. S1–S20. SHE préservé.
Morris a autorisé l'implémentation locale B/D.

---

## 7. R23 — architecture CURRENT (post Slice D)

```
F2: resolveChatFirstGenericPrepareGo → mayPrepare
  → solicitGenericExecutionPrepare(pilotUtterance, requirePositive=true, expectedOfferFingerprint?)
     → resolvePositivePrepareAdmissionEvidence → E-OFFER | E-EXPLICIT | no_go
     → [E-OFFER] rebind analysisFromPendingGenericPrepareOffer
     → prepareGenericExecutionContractDraft → EC

F1: tool solicitPrepare
  → resolvePositivePrepareAdmissionEvidence (queue-time)
  → queue (no EC)
  → finalize solicitGenericExecutionPrepare(requirePositive=true, revalidate)
```

Non-F1/F2: `prepareGenericExecutionContractDraft` direct (SHE fixtures) inchangé.
Harness DET: `requirePositivePilotAdmission: false` only in unit harnesses without turn.

---

## 8. Inventaire call sites

| Caller | Gate |
|--------|------|
| `orchestrateF2` → solicit | **positive required** + utterance + optional fp |
| `orchestrateTurn` queue/finalize → solicit | **positive required** |
| `prepareGenericExecutionContractDraft` (direct) | mission/readiness only (non-conversational) |
| Tests harness solicit | flag false OR utterance |
| W2/F3 other buildExecutionContract | hors Generic chat PREPARE — non modifié |

---

## 9. Choix d'implémentation

- Helper `resolvePositivePrepareAdmissionEvidence` dans `prepareGenericExecutionContractDraft.ts` (réutilise resolveChatFirst).
- Hedge S7: `on pourrait…préparer` → no_go `ambiguous_or_hedged_prepare_intent`.
- solicit: default requirePositive=true; E-OFFER rebind offer before write; fingerprint mismatch → NO_GO.
- F1 early refuse at queue (honest tool).
- Pas de stamp durable admissionKind sur EC (évite pivot schéma) — objet interne parcours only. **R24 note.**

---

## 10. Contrat d'admission effectif

| Class | Meaning |
|-------|---------|
| E-OFFER-ACCEPT | OK/accept + CURRENT offer project/session/cycle/fp |
| E-EXPLICIT-PREPARE | Direct prepare speech-act (narrow + last-act + strip) |
| E-UI-PREPARE | FUTURE — not implemented |
| no_go | refuse / citation / hedge / no offer / mismatch / missing utterance |

Model / tool / PilotDecisionCandidate / absence of refuse ≠ evidence.

---

## 11. Preuve d'origine Pilote

Server turn `content` / `pilotUtterance` only. Revalidated at solicit write. Nora mission fields non-authoritative.

---

## 12. Garde commune avant mutation

`solicitGenericExecutionPrepare` — last common conversational point before `prepareGenericExecutionContractDraft`.

---

## 13. Changements F1

`orchestrateTurn.ts`: queue-time positive admission; capture admission class; finalize revalidate + expectedOfferFingerprint.

---

## 14. Changements F2

`orchestrateF2.ts`: pass `pilotUtterance`, `pilotDecisionCandidate`, `requirePositivePilotAdmission: true`, `expectedOfferFingerprint` when kind=prepare.

---

## 15. Binding offre CURRENT

E-OFFER: live offer re-read; fp match; cycle match; analysis rebound from offer (X2 silent swap refused).

---

## 16. Currentness et idempotence

- Offer process-local restart → NO_CURRENT / STALE (S17).
- Double create same missionKey: existing `CONTRACT_ALREADY_EXISTS` reuse path in prepareGeneric — **DOCUMENTED / COVERAGE via existing code**; X1 concurrent F1+F2 same turn primarily prevented by routing + offer clear; **not claiming EXACTLY-ONCE universal**.

---

## 17. Conservation SHE

PREPARE → INSPECT → Exécuter. No HD/Attempt/Auth at PREPARE. No HD-before-PREPARE regression.

---

## 18. Conservation axe A

corrA1b01 + NAP d0/UI + lumenCog A scenarios PASS. Guidance-backed complementary unchanged.

---

## 19. Fichiers modifiés/créés

### Product (Slice D)
- `w2/prepareGenericExecutionContractDraft.ts`
- `orchestrateTurn.ts`
- `f2/orchestrateF2.ts`

### Prior A+B (preserved)
- `noraAdaptivePresentation.ts`, `ConversationSurface.tsx`, `buildProjectSystemPrompt.ts`, `productExecutionAgentsTools.ts`, …

### Tests
- **NEW** `positivePrepareAdmission.d0.test.ts`
- Adapted: `lumenCogPrepareCorr01`, `p6.der16` (R2b explicit prepare), harnesses `requirePositivePilotAdmission: false`

---

## 20. Diffs utiles COMPLETS (Slice D Product vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 9ca5fa01..2aa545a3 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -2436,6 +2436,12 @@ export async function orchestrateAssistantSend(input: {
         projectId: project.projectId,
         cycleInstanceId: activeId,
         analysis: prepareAnalysis,
+        // Option B / Slice D — same positive admission gate as Nora finalize.
+        pilotUtterance: content,
+        pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+        requirePositivePilotAdmission: true,
+        expectedOfferFingerprint:
+          prepareGo.kind === "prepare" ? prepareGo.offerFingerprint : null,
         forceLocalAuthority:
           process.env.VITEST === "true" ||
           process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY === "1",
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 8c9f335c..028fd8de 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -486,6 +486,16 @@ export async function orchestrateProjectAssistantTurn(input: {
       readonly irreversible?: boolean;
     };
   } | null = null;
+  /**
+   * Admission class captured at tool queue — revalidated at finalize (Slice D).
+   * Box avoids TS control-flow treating callback assignments as unreachable.
+   */
+  const pendingGenericPrepareAdmission: {
+    current: {
+      readonly kind: "e_offer_accept" | "e_explicit_prepare";
+      readonly offerFingerprint: string | null;
+    } | null;
+  } = { current: null };
   let genericPrepareTurnFinalize:
     | {
         readonly ok: boolean;
@@ -569,6 +579,30 @@ export async function orchestrateProjectAssistantTurn(input: {
               import("@/lib/vertical-slice-runtime"),
               import("./w2/prepareGenericExecutionContractDraft"),
             ]);
+          // Option B / Slice D — Nora tool may solicit, never admit.
+          // Positive E-OFFER / E-EXPLICIT required before queue (honest tool result).
+          const admission =
+            prepareMod.resolvePositivePrepareAdmissionEvidence({
+              projectId: project.projectId,
+              cycleInstanceId:
+                project.activeCycleInstanceId?.trim() || null,
+              text: content,
+              sessionDbPath: input.sessionDbPath,
+            });
+          if (admission.kind === "no_go") {
+            return {
+              ok: false as const,
+              code: admission.code,
+              message:
+                admission.code === "EXPLICIT_PREPARE_REFUSAL"
+                  ? "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé."
+                  : admission.code === "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT"
+                    ? "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé."
+                    : "Sollicitation PREPARE refusée — aucune preuve positive Pilote (E-OFFER-ACCEPT / E-EXPLICIT-PREPARE). Nora ≠ consentement. Aucun EC n'a été créé.",
+              humanDecisionCreated: false as const,
+              executionAttemptCreated: false as const,
+            };
+          }
           const oa = getRuntimeApplicationService().oa;
           if (!oa) {
             return {
@@ -587,6 +621,13 @@ export async function orchestrateProjectAssistantTurn(input: {
             repositoryMutation: args.repositoryMutation,
             impactSignals: args.impactSignals,
           };
+          pendingGenericPrepareAdmission.current = {
+            kind: admission.kind,
+            offerFingerprint:
+              admission.kind === "e_offer_accept"
+                ? admission.offerFingerprint
+                : null,
+          };
           return prepareMod.queueGenericPrepareForTurnFinalization();
         },
       },
@@ -1365,11 +1406,19 @@ export async function orchestrateProjectAssistantTurn(input: {
             message: "OA runtime indisponible pour finaliser Generic PREPARE.",
           };
         } else {
+          const queuedAdmission = pendingGenericPrepareAdmission.current;
           const finalized = await prepareMod.solicitGenericExecutionPrepare({
             oa: oaPrep,
             projectId: project.projectId,
             cycleInstanceId: project.activeCycleInstanceId?.trim() || null,
             mission: pendingGenericPrepareMission,
+            // Option B / Slice D — revalidate positive Pilote admission at write.
+            pilotUtterance: content,
+            requirePositivePilotAdmission: true,
+            expectedOfferFingerprint:
+              queuedAdmission && queuedAdmission.kind === "e_offer_accept"
+                ? queuedAdmission.offerFingerprint
+                : null,
             sessionDbPath: input.sessionDbPath,
             forceLocalAuthority:
               process.env.VITEST === "true" ||
@@ -1392,6 +1441,7 @@ export async function orchestrateProjectAssistantTurn(input: {
         }
       }
       pendingGenericPrepareMission = null;
+      pendingGenericPrepareAdmission.current = null;
       // Studio prepare-fail notice is typed below (CORR-NAP-02) — not inlined here.
     }

@@ -1517,6 +1567,9 @@ export async function orchestrateProjectAssistantTurn(input: {
     const durableBuilt = buildDurableAssistantContentForTurn({
       pilotFacingCore: assistantText,
       presentation: coherentEarly?.presentation ?? null,
+      // Positive complementary provenance — never infer from narrative shape alone.
+      conversationGuidanceStatement:
+        coherentEarly?.conversationGuidance?.statement ?? null,
     });
     assistantText = durableBuilt.contentCore;

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 4b370302..f0c6b4ac 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -87,12 +87,159 @@ export type GenericMissionPrepareReadiness = {
   readonly missingFields: readonly string[];
 };

+type PrepareSpeechAct = {
+  readonly kind: "refuse" | "authorize";
+  readonly index: number;
+};
+
+const PREPARE_REFUSAL_PATTERNS: readonly RegExp[] = [
+  /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+(surtout\s+)?pas\b[\s\S]{0,80}\b(contrat|executioncontract|execution contract|mission)\b/giu,
+  /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+rien\b[\s\S]{0,60}\b(cursor|contrat|mission|exécution|execution)\b/giu,
+  /\b(refuse|refus\w*)\b[\s\S]{0,60}\b(pr[ée]par\w*|cr[ée]er?|cr[ée]e)\b[\s\S]{0,50}\b(contrat|executioncontract|execution contract|mission)\b/giu,
+  /\b(ne\s+)?(cr[ée]e|creer|créer|crée)\s+(pas|aucun|aucune)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
+  /\bsans\s+(cr[ée]er?|créer|crée)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
+  /\b(pas|sans|aucune?|aucun)\s+(de\s+|d[''])?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/giu,
+  /\bsans\s+(préparer|preparer|prepare)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
+  /\b(ne\s+)?(veux|veut|souhait\w*|lance|lancer)\s+pas\b[\s\S]{0,60}\b(contrat|mission(\s+(technique|d['']exécution|cursor))?|cursor)\b/giu,
+  /\b(analyse|cadrage|proposition)\s+seulement\b[\s\S]{0,80}\bsans\b[\s\S]{0,60}\b(contrat|mission|exécution|execution|cursor)\b/giu,
+  /\bsans\s+(lancer|préparer|preparer|prepare)\b[\s\S]{0,40}\b(mission|contrat|cursor|exécution|execution)\b/giu,
+  /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,80}\bpas\s+(de\s+|un\s+|une\s+)?(contrat|executioncontract|execution contract)\b/giu,
+  /\bmais\s+(ne\s+)?(prépare|prepare|crée|creer|créer)\b[\s\S]{0,40}\b(pas|aucun|aucune)\b[\s\S]{0,40}\b(contrat|mission)\b/giu,
+  /\b(finalement|non)\s*[,:]?\s*(ne\s+)?(le\s+)?(prépare|prepare|préparer|preparer)\s+pas\b/giu,
+];
+
+/** Positive PREPARE authorize acts (not EXECUTE). Temporal last-act wins vs refuse. */
+const PREPARE_AUTHORIZE_PATTERNS: readonly RegExp[] = [
+  /\b(maintenant|désormais|cette\s+fois|finalement|plutôt)\b[\s\S]{0,60}\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,50}\b(contrat|executioncontract|execution contract|mission)\b/giu,
+  /\b(ok|oui|vas[- ]y|go|d['']accord)\b[\s\S]{0,40}\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract|mission)\b/giu,
+  /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(le\s+|un\s+|une\s+)?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/giu,
+];
+
+/**
+ * Remove citations, code, and reported/example frames so quoted PREPARE
+ * commands are not treated as current Pilote consent.
+ * Deterministic span masking — not a general French NLP parser.
+ */
+export function stripNonAuthoritativePrepareSpans(text: string): string {
+  let t = text;
+  // Fenced / inline code
+  t = t.replace(/```[\s\S]*?```/g, " ");
+  t = t.replace(/`[^`]*`/g, " ");
+  // Explicit citation delimiters only — never ASCII/typographic apostrophes
+  // used in French (d'exécution, l'analyse), which would erase refuse/authorize acts.
+  t = t.replace(/«[^»]*»/g, " ");
+  t = t.replace(/"[^"]*"/g, " ");
+  t = t.replace(/“[^”]*”/g, " ");
+  t = t.replace(/‘[^’]*’/g, " ");
+  // Reported / documentary / pedagogical frames introducing a command.
+  t = t.replace(
+    /\b(voici une phrase à analyser|phrase à analyser|que signifie(?:t|-elle| cette)?|explique(?:r)? (?:ce qu['']elle|cette|la)|dans (?:notre |la )?documentation|on trouve\s*:|exemple\s*:|par exemple\s*:|nora m['']a proposé(?: de)?|tu (?:m['']as|as) (?:dit|proposé)(?: de)?|elle a (?:dit|proposé)(?: de)?|il a (?:dit|proposé)(?: de)?)\b[\s\S]{0,160}/giu,
+    " ",
+  );
+  return t.replace(/\s+/g, " ").trim();
+}
+
+/**
+ * True when the utterance is primarily analysis / discussion of a PREPARE
+ * phrase rather than a current instruction to prepare.
+ */
+export function isPrepareMetaAnalysisOrCitationFrame(text: string): boolean {
+  const raw = text.trim();
+  if (!raw) return false;
+  const hasMeta =
+    /\b(phrase à analyser|que signifie|explique(?:r)? (?:ce qu['']elle|cette)|dans (?:notre |la )?documentation|on trouve\s*:|exemple\s*:|comprendre pourquoi|pour l['']instant[\s\S]{0,80}(seulement|analyse)|je voudrais comprendre)\b/iu.test(
+      raw,
+    );
+  if (!hasMeta) return false;
+  // After stripping citations, no remaining direct authorize → meta-only.
+  const cleaned = stripNonAuthoritativePrepareSpans(raw).toLowerCase();
+  const acts = collectPrepareSpeechActsOn(cleaned);
+  return !acts.some((a) => a.kind === "authorize");
+}
+
+function collectPrepareSpeechActsOn(text: string): PrepareSpeechAct[] {
+  const acts: PrepareSpeechAct[] = [];
+  for (const re of PREPARE_REFUSAL_PATTERNS) {
+    re.lastIndex = 0;
+    let m: RegExpExecArray | null;
+    while ((m = re.exec(text)) !== null) {
+      acts.push({ kind: "refuse", index: m.index });
+      if (m.index === re.lastIndex) re.lastIndex += 1;
+    }
+  }
+  for (const re of PREPARE_AUTHORIZE_PATTERNS) {
+    re.lastIndex = 0;
+    let m: RegExpExecArray | null;
+    while ((m = re.exec(text)) !== null) {
+      // Skip authorize matches that are actually refusals
+      // ("prépare … pas … contrat", "surtout pas le contrat", …).
+      const slice = text.slice(m.index, m.index + Math.max(m[0].length, 80));
+      if (
+        /\b(surtout\s+)?pas\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract|mission)\b/i.test(
+          slice,
+        ) ||
+        /\brien\b[\s\S]{0,40}\b(contrat|cursor|mission)\b/i.test(slice)
+      ) {
+        continue;
+      }
+      acts.push({ kind: "authorize", index: m.index });
+      if (m.index === re.lastIndex) re.lastIndex += 1;
+    }
+  }
+  acts.sort((a, b) => a.index - b.index);
+  return acts;
+}
+
+function collectPrepareSpeechActs(text: string): PrepareSpeechAct[] {
+  // Scan authoritative spans only (citations / code / reported frames removed).
+  return collectPrepareSpeechActsOn(stripNonAuthoritativePrepareSpans(text));
+}
+
+/**
+ * Last explicit PREPARE speech-act in the utterance (refuse | authorize).
+ * Chronology: later act wins. Citations do not count. Ambiguous → null.
+ */
+export function resolveLastExplicitPrepareSpeechAct(
+  text: string,
+): PrepareSpeechAct["kind"] | null {
+  const t = text.trim().toLowerCase();
+  if (!t) return null;
+  const acts = collectPrepareSpeechActs(t);
+  if (acts.length === 0) return null;
+  return acts[acts.length - 1]!.kind;
+}
+
+/**
+ * Explicit Pilote refusal of ExecutionContract PREPARE (TEST-15 / LUMEN).
+ * Fail-closed at Product admission — cognition may solicit, but refusal
+ * is never an authorization to PREPARE.
+ *
+ * Temporal rule: the **last** explicit refuse/authorize act in the message
+ * is the current intention. Earlier "maintenant prépare" does not neutralize
+ * a later "ne prépare pas".
+ */
+export function hasExplicitPrepareContractRefusal(text: string): boolean {
+  const t = text.trim().toLowerCase();
+  if (!t) return false;
+  const last = resolveLastExplicitPrepareSpeechAct(t);
+  if (last === "authorize") return false;
+  if (last === "refuse") return true;
+  return false;
+}
+
 /**
  * Explicit Pilote prepare-contract lexical intent (FR natural language).
  * Actionable work alone MUST NOT systematically PREPARE an EC (Q16 / Q20).
+ * Explicit refusal outranks any positive substring match (TEST-15).
  */
 export function hasExplicitPrepareContractIntent(text: string): boolean {
-  const t = text.trim().toLowerCase();
+  const raw = text.trim();
+  if (!raw) return false;
+  if (hasExplicitPrepareContractRefusal(raw)) return false;
+  if (isPrepareMetaAnalysisOrCitationFrame(raw)) return false;
+  // Last authoritative act must be authorize (citations already stripped).
+  if (resolveLastExplicitPrepareSpeechAct(raw) !== "authorize") return false;
+  const t = stripNonAuthoritativePrepareSpans(raw).toLowerCase();
   if (!t) return false;
   if (
     /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
@@ -126,6 +273,7 @@ export function isChatFirstPrepareAcceptGo(input: {
   readonly text: string;
   readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
 }): boolean {
+  if (hasExplicitPrepareContractRefusal(input.text)) return false;
   const candidate = input.pilotDecisionCandidate ?? null;
   if (
     candidate?.disposition === "accept" &&
@@ -171,6 +319,21 @@ export function resolveChatFirstGenericPrepareGo(input: {
   | { readonly kind: "prepare"; readonly offerFingerprint: string }
   | { readonly kind: "explicit_lexical_prepare" }
   | { readonly kind: "no_go"; readonly reason: string } {
+  // TEST-15 / LUMEN — explicit refusal is Product-side absence of consent.
+  if (hasExplicitPrepareContractRefusal(input.text)) {
+    return { kind: "no_go", reason: "explicit_prepare_refusal" };
+  }
+  if (isPrepareMetaAnalysisOrCitationFrame(input.text)) {
+    return { kind: "no_go", reason: "prepare_citation_or_analysis_not_consent" };
+  }
+  // Slice D / S7 — suggestive hedges are not a current PREPARE instruction.
+  if (
+    /\b(on pourrait|nous pourrions|je pourrais|tu pourrais|peut[- ]être|éventuellement)\b[\s\S]{0,80}\b(prépare|prepare|préparer|preparer)\b/iu.test(
+      input.text,
+    )
+  ) {
+    return { kind: "no_go", reason: "ambiguous_or_hedged_prepare_intent" };
+  }
   if (hasExplicitPrepareContractIntent(input.text)) {
     return { kind: "explicit_lexical_prepare" };
   }
@@ -199,6 +362,112 @@ export function resolveChatFirstGenericPrepareGo(input: {
   return { kind: "prepare", offerFingerprint: offer.offerFingerprint };
 }

+/**
+ * Option B / Slice D — positive Product admission evidence for PREPARE.
+ * Nora tool / model DTO / absence of refusal are NEVER sufficient alone.
+ *
+ * E-OFFER-ACCEPT — Pilote accept bound to unique CURRENT offer.
+ * E-EXPLICIT-PREPARE — narrow direct prepare speech-act (heuristic, fail-closed).
+ * E-UI-PREPARE — FUTURE / not implemented.
+ */
+export type PositivePrepareAdmissionEvidence =
+  | {
+      readonly kind: "e_offer_accept";
+      readonly offerFingerprint: string;
+      readonly code: "E_OFFER_ACCEPT";
+    }
+  | {
+      readonly kind: "e_explicit_prepare";
+      readonly code: "E_EXPLICIT_PREPARE";
+    }
+  | {
+      readonly kind: "no_go";
+      readonly code: string;
+      readonly reason: string;
+    };
+
+export function resolvePositivePrepareAdmissionEvidence(input: {
+  readonly projectId: string;
+  readonly cycleInstanceId: string | null;
+  readonly text: string;
+  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
+  readonly sessionKey?: string | null;
+  readonly sessionDbPath?: string | null;
+  /** When set (F2 offer-accept path), must still match CURRENT offer. */
+  readonly expectedOfferFingerprint?: string | null;
+}): PositivePrepareAdmissionEvidence {
+  const text = (input.text ?? "").trim();
+  if (!text) {
+    return {
+      kind: "no_go",
+      code: "POSITIVE_PREPARE_ADMISSION_REQUIRED",
+      reason: "missing_pilot_utterance",
+    };
+  }
+  const go = resolveChatFirstGenericPrepareGo({
+    projectId: input.projectId,
+    cycleInstanceId: input.cycleInstanceId,
+    text,
+    pilotDecisionCandidate: input.pilotDecisionCandidate,
+    sessionKey: input.sessionKey,
+    sessionDbPath: input.sessionDbPath,
+  });
+  if (go.kind === "no_go") {
+    const code =
+      go.reason === "explicit_prepare_refusal"
+        ? "EXPLICIT_PREPARE_REFUSAL"
+        : go.reason === "prepare_citation_or_analysis_not_consent"
+          ? "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT"
+          : go.reason === "no_current_prepare_offer"
+            ? "NO_CURRENT_PREPARE_OFFER"
+            : go.reason === "prepare_offer_session_mismatch"
+              ? "PREPARE_OFFER_SESSION_MISMATCH"
+              : go.reason === "prepare_offer_cycle_mismatch"
+                ? "PREPARE_OFFER_CYCLE_MISMATCH"
+                : go.reason === "ambiguous_or_hedged_prepare_intent"
+                  ? "AMBIGUOUS_OR_HEDGED_PREPARE_INTENT"
+                  : go.reason === "no_prepare_accept_signal"
+                    ? "POSITIVE_PREPARE_ADMISSION_REQUIRED"
+                    : "POSITIVE_PREPARE_ADMISSION_REQUIRED";
+    return { kind: "no_go", code, reason: go.reason };
+  }
+  if (go.kind === "explicit_lexical_prepare") {
+    return { kind: "e_explicit_prepare", code: "E_EXPLICIT_PREPARE" };
+  }
+  const expected = input.expectedOfferFingerprint?.trim() || null;
+  if (expected && expected !== go.offerFingerprint) {
+    return {
+      kind: "no_go",
+      code: "PREPARE_OFFER_FINGERPRINT_MISMATCH",
+      reason: "expected_offer_fingerprint_mismatch",
+    };
+  }
+  // Re-read CURRENT offer — refuse if consumed / restarted / swapped.
+  const live = getCurrentGenericPrepareOffer(input.projectId, {
+    sessionKey: input.sessionKey,
+    sessionDbPath: input.sessionDbPath,
+  });
+  if (!live || live.offerFingerprint !== go.offerFingerprint) {
+    return {
+      kind: "no_go",
+      code: "PREPARE_OFFER_STALE_OR_MISMATCH",
+      reason: "offer_stale_or_missing_at_admission",
+    };
+  }
+  if ((live.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
+    return {
+      kind: "no_go",
+      code: "PREPARE_OFFER_CYCLE_MISMATCH",
+      reason: "prepare_offer_cycle_mismatch",
+    };
+  }
+  return {
+    kind: "e_offer_accept",
+    offerFingerprint: go.offerFingerprint,
+    code: "E_OFFER_ACCEPT",
+  };
+}
+
 export function assessGenericMissionPrepareReadiness(
   analysis: IntentAnalysisDto,
 ): GenericMissionPrepareReadiness {
@@ -1410,6 +1679,23 @@ export type SolicitGenericExecutionPrepareInput = {
   /** Full analysis (F2) OR mission fields (Nora tool) — exactly one source. */
   readonly analysis?: IntentAnalysisDto;
   readonly mission?: SolicitGenericPrepareMissionFields;
+  /**
+   * Current Pilote utterance (Option B / Slice D). Required for conversational
+   * F1/F2 admission unless M-HD-01 `decisionId` resume applies.
+   * Nora tool / model fields alone never admit PREPARE.
+   */
+  readonly pilotUtterance?: string | null;
+  /** Non-authoritative model candidate — never sufficient alone. */
+  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
+  /** F2 offer-accept: fingerprint captured at GO, revalidated before write. */
+  readonly expectedOfferFingerprint?: string | null;
+  /**
+   * When true (default), require E-OFFER-ACCEPT or E-EXPLICIT-PREPARE from the
+   * Pilote utterance (or verified decisionId resume). Set false only for
+   * non-conversational Product harnesses that call prepare via solicit without
+   * a turn — prefer prepareGenericExecutionContractDraft for those paths.
+   */
+  readonly requirePositivePilotAdmission?: boolean;
   /** M-HD-01 — verified OA HumanDecision for structural resume. */
   readonly decisionId?: string | null;
   readonly sessionKey?: string | null;
@@ -1493,9 +1779,104 @@ export async function solicitGenericExecutionPrepare(
   if (!projectId) {
     return fail("PRODUCT_PROJECT_REQUIRED", "Project requis pour préparer.");
   }
-  const analysis =
-    input.analysis ??
-    buildIntentAnalysisFromSolicitedMission(input.mission ?? {});
+
+  const cycleInstanceId = input.cycleInstanceId?.trim() || null;
+  const decisionId = input.decisionId?.trim() || null;
+  const requirePositive = input.requirePositivePilotAdmission !== false;
+  const utterance =
+    typeof input.pilotUtterance === "string" ? input.pilotUtterance.trim() : "";
+
+  let admissionKind:
+    | "e_offer_accept"
+    | "e_explicit_prepare"
+    | "e_verified_hd_resume"
+    | "harness_bypass" = "harness_bypass";
+  let boundOfferFingerprint: string | null = null;
+
+  if (requirePositive) {
+    if (decisionId) {
+      // M-HD-01 resume — still refuse if current utterance forbids PREPARE.
+      if (utterance && hasExplicitPrepareContractRefusal(utterance)) {
+        return fail(
+          "EXPLICIT_PREPARE_REFUSAL",
+          "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
+        );
+      }
+      if (utterance && isPrepareMetaAnalysisOrCitationFrame(utterance)) {
+        return fail(
+          "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT",
+          "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé.",
+        );
+      }
+      admissionKind = "e_verified_hd_resume";
+    } else {
+      const admission = resolvePositivePrepareAdmissionEvidence({
+        projectId,
+        cycleInstanceId,
+        text: utterance,
+        pilotDecisionCandidate: input.pilotDecisionCandidate,
+        sessionKey: input.sessionKey,
+        sessionDbPath: input.sessionDbPath,
+        expectedOfferFingerprint: input.expectedOfferFingerprint,
+      });
+      if (admission.kind === "no_go") {
+        return fail(
+          admission.code,
+          admission.code === "EXPLICIT_PREPARE_REFUSAL"
+            ? "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé."
+            : admission.code === "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT"
+              ? "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé."
+              : "Admission PREPARE refusée — aucune preuve positive Pilote applicable (E-OFFER-ACCEPT / E-EXPLICIT-PREPARE). Sollicitation Nora ≠ consentement. Aucun EC n'a été créé.",
+        );
+      }
+      if (admission.kind === "e_offer_accept") {
+        admissionKind = "e_offer_accept";
+        boundOfferFingerprint = admission.offerFingerprint;
+      } else {
+        admissionKind = "e_explicit_prepare";
+      }
+    }
+  } else if (utterance) {
+    // Harness bypass still honors refuse/citation when utterance is supplied.
+    if (hasExplicitPrepareContractRefusal(utterance)) {
+      return fail(
+        "EXPLICIT_PREPARE_REFUSAL",
+        "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
+      );
+    }
+    if (isPrepareMetaAnalysisOrCitationFrame(utterance)) {
+      return fail(
+        "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT",
+        "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé.",
+      );
+    }
+  }
+
+  // E-OFFER-ACCEPT — re-bind mission from CURRENT offer; refuse silent swap (X2).
+  let analysis: IntentAnalysisDto;
+  if (admissionKind === "e_offer_accept" && boundOfferFingerprint) {
+    const offer = getCurrentGenericPrepareOffer(projectId, {
+      sessionKey: input.sessionKey,
+      sessionDbPath: input.sessionDbPath,
+    });
+    if (!offer || offer.offerFingerprint !== boundOfferFingerprint) {
+      return fail(
+        "PREPARE_OFFER_STALE_OR_MISMATCH",
+        "Offre CURRENT absente ou divergente au moment de l'écriture. Aucun EC n'a été créé.",
+      );
+    }
+    if ((offer.cycleInstanceId ?? null) !== cycleInstanceId) {
+      return fail(
+        "PREPARE_OFFER_CYCLE_MISMATCH",
+        "Offre CURRENT hors cycle applicable. Aucun EC n'a été créé.",
+      );
+    }
+    analysis = analysisFromPendingGenericPrepareOffer(offer);
+  } else {
+    analysis =
+      input.analysis ??
+      buildIntentAnalysisFromSolicitedMission(input.mission ?? {});
+  }

   const readiness = assessGenericMissionPrepareReadiness(analysis);
   if (readiness.missingFields.length > 0) {
@@ -1505,9 +1886,7 @@ export async function solicitGenericExecutionPrepare(
       readiness.missingFields,
     );
   }
-  // Structural without decisionId fails inside prepareGeneric (verified HD path).

-  const cycleInstanceId = input.cycleInstanceId?.trim() || null;
   const prep = await prepareGenericExecutionContractDraft({
     oa: input.oa,
     projectId,

```

---

## 21. Contenu COMPLET — nouveau fichier test

```typescript
/**
 * Option B / Slice D — Positive Product Admission for Generic PREPARE.
 * Deterministic only — ZERO OpenAI LIVE — ZERO Cursor REAL — ZERO campaign DB.
 *
 * @vitest-environment node
 */
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  resolveChatFirstGenericPrepareGo,
  resolvePositivePrepareAdmissionEvidence,
  rememberGenericPrepareRecommendation,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  clearPendingGenericPrepareOffer,
  resolveProductPrepareOfferSessionKey,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";

const tmpDirs: string[] = [];
afterEach(() => {
  while (tmpDirs.length) {
    const d = tmpDirs.pop();
    if (d) rmSync(d, { recursive: true, force: true });
  }
});

function analysisFixture(objective = "Mission LUMEN test"): IntentAnalysisDto {
  return validateIntentAnalysisPayload({
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: null,
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective,
    scope: "atelier pédagogique",
    rephrasedRequest: objective,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: "contrat inspectable",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "read_only",
      artifactType: null,
      targetPath: null,
      artifactFileName: null,
      targetRepositoryRef: null,
      scopeIn: ["formats"],
      scopeOut: [],
      expectedOutputs: ["analyse"],
      requiredCapabilities: [],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: null,
      reversibilityExpectation: "reversible",
      artifactBrief: null,
      contentRequirements: [],
      exitRequirementKinds: [],
    },
  });
}

describe("Slice D — resolvePositivePrepareAdmissionEvidence", () => {
  it("S2 — cited PREPARE → no_go (not E-EXPLICIT)", () => {
    const text =
      "Voici une phrase à analyser : « Prépare le contrat d'exécution ». Explique.";
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: "cyc:x",
      text,
    });
    expect(a.kind).toBe("no_go");
    if (a.kind !== "no_go") throw new Error("expected no_go");
    expect(a.code).toBe("PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT");
  });

  it("S4 — explicit refuse → no_go", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: null,
      text: "Ne prépare pas de contrat d'exécution.",
    });
    expect(a).toMatchObject({
      kind: "no_go",
      code: "EXPLICIT_PREPARE_REFUSAL",
    });
  });

  it("S7 — inferred could-prepare → no_go (not consent)", () => {
    const text = "On pourrait préparer un contrat d'exécution plus tard.";
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: null,
      text,
    });
    expect(a.kind).toBe("no_go");
    if (a.kind !== "no_go") throw new Error("expected no_go");
    expect(a.code).toBe("AMBIGUOUS_OR_HEDGED_PREPARE_INTENT");
    // Lexical intent may still match substrings — admission evidence must not.
    expect(resolveChatFirstGenericPrepareGo({
      projectId: "prj:x",
      cycleInstanceId: null,
      text,
    }).kind).toBe("no_go");
  });

  it("S8 — direct explicit → E-EXPLICIT-PREPARE", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: "cyc:x",
      text: "Prépare le contrat d'exécution pour la mission LUMEN.",
    });
    expect(a).toEqual({
      kind: "e_explicit_prepare",
      code: "E_EXPLICIT_PREPARE",
    });
  });

  it("S9 — OK + unique CURRENT offer → E-OFFER-ACCEPT", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-padm-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:offer";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: "cyc:1",
      analysis: analysisFixture(),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: "cyc:1",
      text: "OK",
      sessionDbPath,
    });
    expect(a.kind).toBe("e_offer_accept");
    if (a.kind !== "e_offer_accept") throw new Error("expected offer");
    expect(a.offerFingerprint.length).toBe(24);
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("S11/S17 — OK without offer → no_go", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:none",
      cycleInstanceId: null,
      text: "OK, vas-y",
    });
    expect(a).toMatchObject({
      kind: "no_go",
      code: "NO_CURRENT_PREPARE_OFFER",
    });
  });

  it("X2 — expected fingerprint mismatch → no_go", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-padm-"));
    tmpDirs.push(dir);
    const sessionDbPath = join(dir, "session.sqlite");
    const projectId = "prj:fp";
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: analysisFixture("Mission A"),
      offeredAtIso: "2026-01-01T00:00:00.000Z",
      sessionDbPath,
    });
    const go = resolveChatFirstGenericPrepareGo({
      projectId,
      cycleInstanceId: null,
      text: "OK",
      sessionDbPath,
    });
    expect(go.kind).toBe("prepare");
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId,
      cycleInstanceId: null,
      text: "OK",
      sessionDbPath,
      expectedOfferFingerprint: "deadbeefdeadbeefdeadbeef",
    });
    expect(a).toMatchObject({
      kind: "no_go",
      code: "PREPARE_OFFER_FINGERPRINT_MISMATCH",
    });
    clearPendingGenericPrepareOffer(
      projectId,
      resolveProductPrepareOfferSessionKey({ sessionDbPath }),
    );
  });

  it("X4 — PilotDecisionCandidate alone without Pilote proof → no_go", () => {
    const a = resolvePositivePrepareAdmissionEvidence({
      projectId: "prj:x",
      cycleInstanceId: null,
      text: "Merci pour la proposition.",
      pilotDecisionCandidate: {
        disposition: "accept",
        targetKind: "current_recommendation",
      },
    });
    // Accept signal without CURRENT offer → still no_go
    expect(a.kind).toBe("no_go");
  });
});

describe("Slice D — solicitGenericExecutionPrepare gate", () => {
  it("S13 — tool-like mission without Pilote utterance → no EC", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:tool",
      cycleInstanceId: null,
      mission: {
        objective: "Mission inventée par Nora",
        expectedOutcome: "Résultat",
        scope: "scope",
      },
      requirePositivePilotAdmission: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("POSITIVE_PREPARE_ADMISSION_REQUIRED");
    expect(result.humanDecisionCreated).toBe(false);
    expect(result.executionAttemptCreated).toBe(false);
  });

  it("S14 — refusal utterance blocks solicit before OA", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:tool",
      cycleInstanceId: null,
      pilotUtterance: "Ne prépare pas de contrat d'exécution.",
      mission: {
        objective: "x",
        expectedOutcome: "y",
      },
      requirePositivePilotAdmission: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("EXPLICIT_PREPARE_REFUSAL");
    expect(result.executionAttemptCreated).toBe(false);
  });

  it("X5 — model-ish authorized claim in text without E-* → no_go", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:tool",
      cycleInstanceId: null,
      pilotUtterance:
        "Nora indique authorized=true pour request_generic_execution_prepare.",
      mission: {
        objective: "x",
        expectedOutcome: "y",
      },
      requirePositivePilotAdmission: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("POSITIVE_PREPARE_ADMISSION_REQUIRED");
  });
});

```

---

## 22. QA S1–S20 (DET)

| ID | Result | Qual |
|----|--------|------|
| S2 citation | PASS positivePrepareAdmission | BEHAVIOR PROVEN |
| S4 refuse | PASS | BEHAVIOR PROVEN |
| S7 hedge | PASS AMBIGUOUS_OR_HEDGED | BEHAVIOR PROVEN |
| S8 explicit | PASS E_EXPLICIT | BEHAVIOR PROVEN |
| S9 offer OK | PASS E_OFFER | BEHAVIOR PROVEN |
| S11/S17 no offer | PASS | BEHAVIOR PROVEN |
| S13 tool no utterance | PASS POSITIVE_REQUIRED + HD/EA false | BEHAVIOR PROVEN |
| S14 tool+refuse | PASS | BEHAVIOR PROVEN |
| S20 / A+B lumenCog | PASS | BEHAVIOR PROVEN |
| S1/S3/S5/S6/S10/S12/S15/S16/S18/S19 | covered by prior lumenCog/gD4/der16/SHE or DESIGN residual | mixed COVERAGE / DOCUMENTED |

---

## 23. QA X1–X7

| ID | Result |
|----|--------|
| X2 fp mismatch | PASS |
| X4 candidate alone | PASS no_go |
| X5 fake authorized text | PASS POSITIVE_REQUIRED |
| X1 double EC | EXISTING idempotent missionKey — DOCUMENTED not new EXACTLY-ONCE claim |
| X3/X6/X7 | session/cycle/stale paths via resolvePositive + offer re-read — COVERAGE VERIFIED |

---

## 24. QA A+B

corrA1b01 + lumenCog + NAP + UI + gD4 + der16 + toolFirst + positivePrepareAdmission:
**235 PASS** (this implementation campaign).
Prior 219 PASS = historical baseline — not this verdict.

---

## 25. Tests techniques

```bash
npx vitest run [9 suites listed]  # 235 PASS
npx tsc --noEmit -p tsconfig.json  # EXIT 0
npx eslint (3 product files)       # EXIT 0
```

### QA tail
```
prep:b9b02d483f36d037b1669ff7","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":1}

 ✓ __tests__/project-assistant/p6.toolFirst.safetyClosureR1R2.d0.test.ts (5 tests) 198ms
 ✓ __tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts (11 tests) 313ms
stdout | __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E10 — explicit NEW_CYCLE formalization WITHOUT cycle stays on the historical createCycle path (not hijacked)
{"event":"oa.ckc.resolution_started","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-232c6ee5ff417648","cycleTypeId":"cyc:delivery","result":"started"}
{"event":"oa.ckc.resolution_succeeded","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-232c6ee5ff417648","cycleTypeId":"cyc:delivery","result":"ok","detailedStatus":"resolved_detailed"}
{"event":"oa.ckc.consumption_validated","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-232c6ee5ff417648","cycleTypeId":"cyc:delivery","result":"ok","detailedStatus":"resolved_detailed"}
{"event":"oa.ckc.qualification_started","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-232c6ee5ff417648","cycleTypeId":"cyc:delivery","result":"started","detailedStatus":"resolved_detailed"}
{"event":"oa.cycle.qualified","ts":"2026-08-23T04:30:00.000Z","recommendedProfile":"Light","result":"ok","durationMs":0}

stdout | __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E10 — explicit NEW_CYCLE formalization WITHOUT cycle stays on the historical createCycle path (not hijacked)
{"event":"oa.ckc.qualification_succeeded","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-232c6ee5ff417648","cycleTypeId":"cyc:delivery","result":"ok","detailedStatus":"resolved_detailed","recommendedProfile":"Light","durationMs":1}
{"event":"oa.ckc.result_produced","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-232c6ee5ff417648","cycleTypeId":"cyc:delivery","result":"ok","detailedStatus":"resolved_detailed","recommendedProfile":"Light","durationMs":1}

stdout | __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R4 — Project-scoped Select: null-cycle AUTHORIZED PRODUCT_GOVERNED EC → Attempt accepted (no invented cycle; Cursor access not gated by methodological profile)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:452fa2ff4e0cd77e","attemptId":"xat:w3a:87b2791b12287e93","executionContractId":"xct:gen-prep:86a8f5e26f7bbae3c069a960","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":1}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:452fa2ff4e0cd77e","attemptId":"xat:w3a:87b2791b12287e93","executionContractId":"xct:gen-prep:86a8f5e26f7bbae3c069a960","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":1}

 ✓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts (28 tests) 826ms

 Test Files  9 passed (9)
      Tests  235 passed (235)
   Start at  23:44:17
   Duration  2.79s (transform 2.08s, setup 440ms, collect 8.21s, tests 1.55s, environment 449ms, prepare 728ms)


```

---

## 26. Non-mutations Product démontrées

S13/S14/B1/B13: solicit fail-closed with `humanDecisionCreated:false`, `executionAttemptCreated:false` before OA.
der16 NR: Attempt count 0 at PREPARE paths.

---

## 27. Fake/Real Qualification

DET fixtures / mocks / SQLite isolée. OpenAI LIVE NOT EXERCISED. Cursor REAL NOT EXERCISED. Campaign DB UNTOUCHED. G-REAL NOT GRANTED. DET ≠ LIVE.

---

## 28. R24 — IMPACT QUALIFIED — SYNC GATE OPEN

| Volume | Impact |
|--------|--------|
| PRR 03 | F08 dual entry + positive evidence classes; tool≠consent |
| PRR 06 | Offer process-local; S17 honesty |
| PRR 07 | E-OFFER/E-EXPLICIT; hedge; fingerprint revalidate |
| PRR 08 | Map positivePrepareAdmission + S/X matrix |
| PRR 09 | Lexical E-EXPLICIT residual; no durable admission artifact |

No protected files edited. Digests/Roadmap untouched.

---

## 29. Réserves, dette, exit

1. E-EXPLICIT lexical still incomplete FR (KNOWN GAP).
2. Offer process-local restart.
3. No durable admissionKind on EC (avoided schema pivot).
4. Harness flag `requirePositivePilotAdmission:false` for non-turn DET — must not leak to F1/F2.
5. X1 not proven as universal exactly-once under adversarial dual entry.
6. LIVE revalidation pending.

Exit futur: S13/S8/S9 LIVE; optional durable offer; optional E-UI-PREPARE.

---

## 30. Gates Morris

| Gate | Status |
|------|--------|
| Review A+B+Slice D | OPEN |
| Project commit/push/PR | NOT AUTHORIZED |
| R24 sync | OPEN |
| LIVE | NOT GRANTED |
| L3-S2 close | OPEN |
| G-REAL / v3 | NOT GRANTED / NON ADOPTED |

---

## 31. Git Review Index

| Artefact | Value |
|----------|-------|
| Pack | `.tmp-sfia-review/chatgpt-review.md` |
| Canon | `sfia-review-handoff/latest-chatgpt-review.md` |
| Prior tip/blob | `95dd25ae…` / `9d756772…` |
| New tip/blob | *post-publish* |
| Delivery | dirty A+B+D @ `7dd49ecd` |

---

## 32. Verdict

**INTEGRATED A+B POSITIVE ADMISSION — READY FOR MORRIS REVIEW**

- B/D implemented locally; F1/F2 common positive gate; tool-alone no_go;
- offer accept + direct prepare conserved; citation/refuse/hedge no_go;
- SHE + Axis A preserved; 235 PASS DET; tsc/eslint OK; R24 gate OPEN;
- Review Pack FULL; handoff verified post-publish.

Anti-claims: Local≠main · DET≠LIVE · Tool≠consent · Offer≠Authorization · PREPARE≠EXECUTE · L3-S2 OPEN · G-REAL NOT GRANTED · v3 NON ADOPTED.

STOP after handoff verification.

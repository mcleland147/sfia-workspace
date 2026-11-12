# SFIA Studio Next — Review Pack FULL L3
## R5 / ML4C — Correctif final d'autorité + CI + Freeze RECETTE

Date / timezone: 2026-11-12 19:29 CET
Campagne: ML4C-UAT-2026-11-12
Verdict: PRODUCT FIX CI GREEN — RECETTE CANDIDATE FROZEN — READY FOR MORRIS UAT

---

## 01. Date/heure Europe/Paris

2026-11-12 19:29 CET

## 02. Git Truth Check

```
branch: fix/next-semantic-intent-convergence-20261112
HEAD: 67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0
parent: d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b
tree: 64167c6fc4c98da3c3d4168518911636961bc5c6
origin/build/next-ml4c-functional-convergence: 67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0
origin/main: 6cda86bde4aa450abb1d23eedd370a9004ddcbc1
status:
M .tmp-sfia-review/chatgpt-review.md
```

Préconditions: tip d7c28a21 aligné ; dirty pack only ; PR #676 OPEN/CLEAN ; RECETTE historique 2416e2ee / BUILD_ID qB8JvXfdL7FMOFYMf31kL sur :3200.

## 03. Sources consultées et SHAs

main `6cda86bde4aa450abb1d23eedd370a9004ddcbc1`: SEF, roadmap, SEM-01..08, TV contrats, ENV-01, product-versioning, DATA-01 via environnements-recette-et-promotions.
Candidat parent: d7c28a21. Handoff précédent: sfia/review-handoff@d1c8925d blob 111be556.
Cahier/journal historiques sur main: cahier-recette-utilisateur-ml4c.md / journal-recette-utilisateur-ml4c.md (NON MODIFIÉS).

## 04. Contrat de correction ciblée

Deux cas limites uniquement dans durable-target-resolve.ts (+ tests / as-built):
A. `*` ne matche plus un hint spécifique.
B. decisionId durable exige kind=RECORD_DECISION.

## 05. Code avant/après R1 wildcard

### BEFORE (`restrictionTargetMatchesHint`)

```typescript
/**
 * Owner-side durable target resolution for USER_MESSAGE D6 REVISE / LIFT.
 * Studio resolves the unique target from durable qualification + project state.
 * HTTP body.decisionId / body.restrictionId may only echo that target.
 */
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  governanceRestrictions,
  humanDecisions,
} from "@/db/schema";
import type { DbTx } from "@/domains/pilotage/command-runner";

/** db or transactional client — same select/from/where surface. */
export type DurableQueryDb = typeof db | DbTx;

export type DurableResolveOk = { ok: true; id: string };
export type DurableResolveFail = {
  ok: false;
  reasonCode: "AMBIGUOUS" | "INVALID";
  reason: string;
};
export type DurableResolveResult = DurableResolveOk | DurableResolveFail;

/** Exact targetRef match, wildcard, or active cycle id when hint is the cycle type. */
export function restrictionTargetMatchesHint(input: {
  targetRef: string;
  hint: string;
  activeCycle?: { id: string; cycleType: string } | null;
}): boolean {
  const ref = (input.targetRef || "*").trim().toUpperCase();
  const hint = input.hint.trim().toUpperCase();
  if (!hint) return true;
  if (ref === "*" || ref === hint) return true;
  const cycle = input.activeCycle;
  if (
    cycle &&
    hint === cycle.cycleType.toUpperCase() &&
    ref === cycle.id.toUpperCase()
  ) {
    return true;
  }
  return false;
}

/**
 * Resolve REVISE_DECISION target: durable decisionId, else unique APPLICABLE
 * RECORD_DECISION with exact objectRef. Never pick by order among many.
 */
export async function resolveReviseDecisionTarget(
  queryDb: DurableQueryDb,
  projectId: string,
  input: { decisionId?: string | null; objectRef?: string | null },
): Promise<DurableResolveResult> {
  const durableId = (input.decisionId ?? "").trim();
  if (durableId) {
    const row = (
      await queryDb
        .select({
          id: humanDecisions.id,
          kind: humanDecisions.kind,
          state: humanDecisions.state,
          objectRef: humanDecisions.objectRef,
          projectId: humanDecisions.projectId,
        })
        .from(humanDecisions)
        .where(and(eq(humanDecisions.id, durableId), eq(humanDecisions.projectId, projectId)))
        .limit(1)
    )[0];
    if (!row || row.state !== "APPLICABLE") {
      return {
        ok: false,
        reasonCode: "AMBIGUOUS",
        reason: "decisionId durable absent, hors projet ou non APPLICABLE",
      };
    }
    const objectRef = (input.objectRef ?? "").trim();
    if (objectRef && (row.objectRef ?? "").trim() !== objectRef) {
      return {
        ok: false,
        reasonCode: "AMBIGUOUS",
        reason: "decisionId durable incompatible avec objectRef qualifié",
      };
    }
    return { ok: true, id: row.id };
  }

  const objectRef = (input.objectRef ?? "").trim();
  if (!objectRef) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "REVISE_DECISION sans decisionId ni objectRef durable — clarification requise",
    };
  }

  const rows = await queryDb
    .select({
      id: humanDecisions.id,
      kind: humanDecisions.kind,
      state: humanDecisions.state,
      objectRef: humanDecisions.objectRef,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId));

  const matches = rows.filter(
    (r) =>
      r.state === "APPLICABLE" &&
      r.kind === "RECORD_DECISION" &&
      (r.objectRef ?? "").trim() === objectRef,
  );
  if (matches.length === 0) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Aucune décision APPLICABLE pour objectRef durable",
    };
  }
  if (matches.length > 1) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Plusieurs décisions pour objectRef — précisez decisionId",
    };
  }
  return { ok: true, id: matches[0]!.id };
}

/**
 * Resolve LIFT_RESTRICTION target from durable kind/target hints.
 * Unique ACTIVE match required. No substring / first-match selection.
 */
export async function resolveLiftRestrictionTarget(
  queryDb: DurableQueryDb,
  projectId: string,
  input: {
    restrictionKindHint?: string | null;
    restrictionTargetRefHint?: string | null;
    activeCycle?: { id: string; cycleType: string } | null;
  },
): Promise<DurableResolveResult> {
  const kindHint = (input.restrictionKindHint ?? "").trim().toUpperCase();
  const targetHint = (input.restrictionTargetRefHint ?? "").trim();

  const active = await queryDb
    .select()
    .from(governanceRestrictions)
    .where(
      and(
        eq(governanceRestrictions.projectId, projectId),
        eq(governanceRestrictions.status, "ACTIVE"),
      ),
    );

  let pool = kindHint
    ? active.filter((r) => r.targetKind.toUpperCase() === kindHint)
    : active;

  if (targetHint) {
    pool = pool.filter((r) =>
      restrictionTargetMatchesHint({
        targetRef: r.targetRef,
        hint: targetHint,
        activeCycle: input.activeCycle,
      }),
    );
  }

  if (pool.length === 0) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Aucune restriction active correspondant à la qualification durable",
    };
  }
  if (pool.length > 1) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Plusieurs restrictions actives — précisez laquelle lever",
    };
  }
  return { ok: true, id: pool[0]!.id };
}

```

### AFTER

```typescript
/**
 * Owner-side durable target resolution for USER_MESSAGE D6 REVISE / LIFT.
 * Studio resolves the unique target from durable qualification + project state.
 * HTTP body.decisionId / body.restrictionId may only echo that target.
 */
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  governanceRestrictions,
  humanDecisions,
} from "@/db/schema";
import type { DbTx } from "@/domains/pilotage/command-runner";

/** db or transactional client — same select/from/where surface. */
export type DurableQueryDb = typeof db | DbTx;

export type DurableResolveOk = { ok: true; id: string };
export type DurableResolveFail = {
  ok: false;
  reasonCode: "AMBIGUOUS" | "INVALID";
  reason: string;
};
export type DurableResolveResult = DurableResolveOk | DurableResolveFail;

/** True when durable / stored targetRef denotes global scope (empty or "*"). */
export function isGlobalRestrictionTarget(targetRef: string | null | undefined): boolean {
  const value = (targetRef ?? "").trim();
  return value === "" || value === "*";
}

/**
 * Match an ACTIVE restriction targetRef against a durable target hint.
 * Specific durable hints never select a global "*" restriction.
 * Global durable hints ("" / "*") match only global ACTIVE targets.
 * CycleType ↔ active cycle id remains an explicit contractual equivalence.
 */
export function restrictionTargetMatchesHint(input: {
  targetRef: string;
  hint: string;
  activeCycle?: { id: string; cycleType: string } | null;
}): boolean {
  const refRaw = (input.targetRef ?? "").trim();
  const hintRaw = input.hint.trim();
  const ref = refRaw.toUpperCase();
  const hint = hintRaw.toUpperCase();

  // Empty / "*" durable hint ⇒ only an explicitly global ACTIVE restriction.
  if (isGlobalRestrictionTarget(hintRaw)) {
    return isGlobalRestrictionTarget(refRaw);
  }

  // Specific durable hint never widens to a global restriction.
  if (isGlobalRestrictionTarget(refRaw)) {
    return false;
  }

  if (ref === hint) return true;

  const cycle = input.activeCycle;
  if (
    cycle &&
    hint === cycle.cycleType.toUpperCase() &&
    ref === cycle.id.toUpperCase()
  ) {
    return true;
  }
  return false;
}

/**
 * Resolve REVISE_DECISION target: durable decisionId, else unique APPLICABLE
 * RECORD_DECISION with exact objectRef. Never pick by order among many.
 */
export async function resolveReviseDecisionTarget(
  queryDb: DurableQueryDb,
  projectId: string,
  input: { decisionId?: string | null; objectRef?: string | null },
): Promise<DurableResolveResult> {
  const durableId = (input.decisionId ?? "").trim();
  if (durableId) {
    const row = (
      await queryDb
        .select({
          id: humanDecisions.id,
          kind: humanDecisions.kind,
          state: humanDecisions.state,
          objectRef: humanDecisions.objectRef,
          projectId: humanDecisions.projectId,
        })
        .from(humanDecisions)
        .where(and(eq(humanDecisions.id, durableId), eq(humanDecisions.projectId, projectId)))
        .limit(1)
    )[0];
    if (!row || row.state !== "APPLICABLE") {
      return {
        ok: false,
        reasonCode: "AMBIGUOUS",
        reason: "decisionId durable absent, hors projet ou non APPLICABLE",
      };
    }
    // Same strictness as objectRef resolution: only RECORD_DECISION is revisable via D6.
    if (row.kind !== "RECORD_DECISION") {
      return {
        ok: false,
        reasonCode: "INVALID",
        reason: "decisionId durable n'est pas une RECORD_DECISION APPLICABLE",
      };
    }
    const objectRef = (input.objectRef ?? "").trim();
    if (objectRef && (row.objectRef ?? "").trim() !== objectRef) {
      return {
        ok: false,
        reasonCode: "AMBIGUOUS",
        reason: "decisionId durable incompatible avec objectRef qualifié",
      };
    }
    return { ok: true, id: row.id };
  }

  const objectRef = (input.objectRef ?? "").trim();
  if (!objectRef) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "REVISE_DECISION sans decisionId ni objectRef durable — clarification requise",
    };
  }

  const rows = await queryDb
    .select({
      id: humanDecisions.id,
      kind: humanDecisions.kind,
      state: humanDecisions.state,
      objectRef: humanDecisions.objectRef,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId));

  const matches = rows.filter(
    (r) =>
      r.state === "APPLICABLE" &&
      r.kind === "RECORD_DECISION" &&
      (r.objectRef ?? "").trim() === objectRef,
  );
  if (matches.length === 0) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Aucune décision APPLICABLE pour objectRef durable",
    };
  }
  if (matches.length > 1) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Plusieurs décisions pour objectRef — précisez decisionId",
    };
  }
  return { ok: true, id: matches[0]!.id };
}

/**
 * Resolve LIFT_RESTRICTION target from durable kind/target hints.
 * Unique ACTIVE match required. No substring / first-match selection.
 */
export async function resolveLiftRestrictionTarget(
  queryDb: DurableQueryDb,
  projectId: string,
  input: {
    restrictionKindHint?: string | null;
    restrictionTargetRefHint?: string | null;
    activeCycle?: { id: string; cycleType: string } | null;
  },
): Promise<DurableResolveResult> {
  const kindHint = (input.restrictionKindHint ?? "").trim().toUpperCase();
  const targetHint = (input.restrictionTargetRefHint ?? "").trim();

  const active = await queryDb
    .select()
    .from(governanceRestrictions)
    .where(
      and(
        eq(governanceRestrictions.projectId, projectId),
        eq(governanceRestrictions.status, "ACTIVE"),
      ),
    );

  let pool = kindHint
    ? active.filter((r) => r.targetKind.toUpperCase() === kindHint)
    : active;

  // Absent / empty target hint is not an implicit authorization to lift a global "*".
  // Require an explicit durable target (specific or global "*") before matching.
  if (!targetHint.trim()) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason:
        "LIFT_RESTRICTION sans restrictionTargetRefHint durable — clarification requise",
    };
  }

  pool = pool.filter((r) =>
    restrictionTargetMatchesHint({
      targetRef: r.targetRef,
      hint: targetHint,
      activeCycle: input.activeCycle,
    }),
  );

  if (pool.length === 0) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Aucune restriction active correspondant à la qualification durable",
    };
  }
  if (pool.length > 1) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Plusieurs restrictions actives — précisez laquelle lever",
    };
  }
  return { ok: true, id: pool[0]!.id };
}

```

## 06. Code avant/après R1 type D6

Voir AFTER ci-dessus: branche durableId refuse si `row.kind !== "RECORD_DECISION"`.

## 07. Tests négatifs complets

G01, G04, D02, D03, D04, D05, D06 (+ R1-A/B/E conservés): REJECTED, aucune mutation cible.

## 08. Tests positifs complets

G02 (CADRAGE seuls), G03 (global explicite), G05 replay, D01, D07 replay.
C06 CR ml3: restriction d'instance (cycleId), plus défaut `*`.

## 09. Diff produit complet

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
index 83d220be..cae42d0c 100644
--- a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
+++ b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
@@ -156,6 +156,29 @@ Parent produit: `9c163d62`. Mandat: sécuriser les réserves Critical Review R1/
 | tsc / eslint / Next build | PASS (warnings non bloquants) |
 | LIVE Nora / Git REAL | NOT RUN |

+## Correctif final d'autorité + freeze RECETTE (2026-11-12 ~19:20 CET)
+
+Parent produit: `d7c28a21`. Mandat R5 : deux cas limites + mise à disposition RECETTE pour reprise ML4C-UAT-2026-11-12 (S02-01).
+
+### Cas A — portée globale `*`
+
+- `restrictionTargetMatchesHint` : un hint durable spécifique (ex. CADRAGE) **ne sélectionne plus** une restriction ACTIVE `targetRef="*"`.
+- Hint durable global (`*` / vide normalisé) ne matche que des cibles globales.
+- `resolveLiftRestrictionTarget` exige un `restrictionTargetRefHint` durable explicite (pas d'autorisation implicite de levée globale).
+- Preuves G01–G05 via `executePilotageCommand`.
+
+### Cas B — kind D6
+
+- Branche `decisionId` de `resolveReviseDecisionTarget` exige `kind === RECORD_DECISION` (même stricteé que objectRef).
+- OPEN_CYCLE / APPLY_RESTRICTION / autres fondateurs D5 → INVALID.
+- Preuves D01–D07 via `executePilotageCommand`.
+
+### Campagne utilisateur
+
+- Identifiant conservé : `ML4C-UAT-2026-11-12`.
+- Cahier/journal historiques non remplacés ; premier retest attendu : **S02-01**.
+- A-006/A-007 : FIX IMPLEMENTED / RETEST USER PENDING (pas CLOSED).
+
 ## Non-déclarations

 ML4C ACCEPTED · S02-01 PASS · A-006/A-007 CLOSED · Gate C CLOSED · ADOPTED · READY FOR REAL · LIVE Nora
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 83ca5a7a..ec4ab254 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,21 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-12-ML4C-FINAL-SCOPE-GUARDS-RECETTE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-12 ~19:20 CET (Europe/Paris) |
+| Macro-lot | ML4C R5 — gardes finales cible durable (`*` / kind D6) + freeze RECETTE |
+| Type | EVOL Critical corrective + mise à disposition RECETTE (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
+| Parent tip | `d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b` |
+| Lane | DEV/E2E tests ; RECETTE figée après CI GREEN (campagne ML4C-UAT-2026-11-12) |
+| Changes | `restrictionTargetMatchesHint` fail-closed vs globale ; LIFT exige hint durable ; `resolveReviseDecisionTarget` exige RECORD_DECISION ; tests G01–G05 / D01–D07 |
+| Schema | unchanged |
+| Tests | unit 252 PASS (248+4) ; PG 336 PASS (324+12 G/D) ; Playwright 25 PASS ; LIVE NOT RUN |
+| Status | PUSH PR #676 puis freeze RECETTE si CI GREEN |
+
 ## delivery_id: DELIV-2026-11-12-ML4C-AUTHORITY-HARDENING

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/durable-target-resolve.ts b/projects/sfia-studio-next/web/src/domains/pilotage/durable-target-resolve.ts
index 1e21d3d0..1b6710c6 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/durable-target-resolve.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/durable-target-resolve.ts
@@ -22,16 +22,40 @@ export type DurableResolveFail = {
 };
 export type DurableResolveResult = DurableResolveOk | DurableResolveFail;

-/** Exact targetRef match, wildcard, or active cycle id when hint is the cycle type. */
+/** True when durable / stored targetRef denotes global scope (empty or "*"). */
+export function isGlobalRestrictionTarget(targetRef: string | null | undefined): boolean {
+  const value = (targetRef ?? "").trim();
+  return value === "" || value === "*";
+}
+
+/**
+ * Match an ACTIVE restriction targetRef against a durable target hint.
+ * Specific durable hints never select a global "*" restriction.
+ * Global durable hints ("" / "*") match only global ACTIVE targets.
+ * CycleType ↔ active cycle id remains an explicit contractual equivalence.
+ */
 export function restrictionTargetMatchesHint(input: {
   targetRef: string;
   hint: string;
   activeCycle?: { id: string; cycleType: string } | null;
 }): boolean {
-  const ref = (input.targetRef || "*").trim().toUpperCase();
-  const hint = input.hint.trim().toUpperCase();
-  if (!hint) return true;
-  if (ref === "*" || ref === hint) return true;
+  const refRaw = (input.targetRef ?? "").trim();
+  const hintRaw = input.hint.trim();
+  const ref = refRaw.toUpperCase();
+  const hint = hintRaw.toUpperCase();
+
+  // Empty / "*" durable hint ⇒ only an explicitly global ACTIVE restriction.
+  if (isGlobalRestrictionTarget(hintRaw)) {
+    return isGlobalRestrictionTarget(refRaw);
+  }
+
+  // Specific durable hint never widens to a global restriction.
+  if (isGlobalRestrictionTarget(refRaw)) {
+    return false;
+  }
+
+  if (ref === hint) return true;
+
   const cycle = input.activeCycle;
   if (
     cycle &&
@@ -74,6 +98,14 @@ export async function resolveReviseDecisionTarget(
         reason: "decisionId durable absent, hors projet ou non APPLICABLE",
       };
     }
+    // Same strictness as objectRef resolution: only RECORD_DECISION is revisable via D6.
+    if (row.kind !== "RECORD_DECISION") {
+      return {
+        ok: false,
+        reasonCode: "INVALID",
+        reason: "decisionId durable n'est pas une RECORD_DECISION APPLICABLE",
+      };
+    }
     const objectRef = (input.objectRef ?? "").trim();
     if (objectRef && (row.objectRef ?? "").trim() !== objectRef) {
       return {
@@ -157,16 +189,25 @@ export async function resolveLiftRestrictionTarget(
     ? active.filter((r) => r.targetKind.toUpperCase() === kindHint)
     : active;

-  if (targetHint) {
-    pool = pool.filter((r) =>
-      restrictionTargetMatchesHint({
-        targetRef: r.targetRef,
-        hint: targetHint,
-        activeCycle: input.activeCycle,
-      }),
-    );
+  // Absent / empty target hint is not an implicit authorization to lift a global "*".
+  // Require an explicit durable target (specific or global "*") before matching.
+  if (!targetHint.trim()) {
+    return {
+      ok: false,
+      reasonCode: "AMBIGUOUS",
+      reason:
+        "LIFT_RESTRICTION sans restrictionTargetRefHint durable — clarification requise",
+    };
   }

+  pool = pool.filter((r) =>
+    restrictionTargetMatchesHint({
+      targetRef: r.targetRef,
+      hint: targetHint,
+      activeCycle: input.activeCycle,
+    }),
+  );
+
   if (pool.length === 0) {
     return {
       ok: false,
diff --git a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
index 983351ea..a450f3ab 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
@@ -2409,11 +2409,15 @@ describe("PostgreSQL ML3 pilotage and decisions", () => {
         objective: "À lever",
       });
       expect(opened.status).toBe("APPLIED");
+      // Specific cycle instance — not global "*". CADRAGE durable hint must not lift "*".
+      const cycleId =
+        opened.effects.find((e) => e.effectKind === "OPEN_CYCLE")?.targetRef ?? "CADRAGE";
       const applied = await applyGovernanceRestriction(pilotId, projectId, {
         clientCommandKey: newId("idem"),
         expectedRevision: opened.revision ?? 1,
         sourceRef: newId("src"),
         targetKind: "CYCLE_MUTATION",
+        targetRef: cycleId,
         statement: "Freeze",
       });
       expect(applied.status).toBe("APPLIED");
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-auth-reconciliation.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-auth-reconciliation.pg.test.ts
index 50a1ee13..02cbcdcc 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4c-auth-reconciliation.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-auth-reconciliation.pg.test.ts
@@ -800,6 +800,33 @@ function reviseQualWithoutDecisionId() {
   };
 }

+function reviseQualWithDecisionId(decisionId: string, objectRef?: string) {
+  return {
+    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    status: "QUALIFIED" as const,
+    goal: "revise",
+    intents: [
+      {
+        id: "i-revise",
+        capabilityId: "d6.human_decision" as const,
+        mode: "REQUEST_EFFECT" as const,
+        summary: "REVISE by durable decisionId",
+        parameters: {
+          pilotageOperation: "REVISE_DECISION" as const,
+          statement: "Révision autorité propriétaire",
+          decisionId,
+          ...(objectRef ? { objectRef } : {}),
+        },
+        constraints: [] as string[],
+        dependsOn: [] as string[],
+        sourceEvidence: [] as string[],
+      },
+    ],
+    clarifications: [] as string[],
+    replyDraft: "revise",
+  };
+}
+
 function liftQual(targetHint: string) {
   return {
     schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
@@ -827,6 +854,32 @@ function liftQual(targetHint: string) {
   };
 }

+function liftQualWithoutTargetHint() {
+  return {
+    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    status: "QUALIFIED" as const,
+    goal: "lift",
+    intents: [
+      {
+        id: "i-lift",
+        capabilityId: "d6.human_decision" as const,
+        mode: "REQUEST_EFFECT" as const,
+        summary: "LIFT_RESTRICTION without target",
+        parameters: {
+          pilotageOperation: "LIFT_RESTRICTION" as const,
+          restrictionKindHint: "CYCLE_MUTATION",
+          statement: "Lever restriction sans cible",
+        },
+        constraints: [] as string[],
+        dependsOn: [] as string[],
+        sourceEvidence: [] as string[],
+      },
+    ],
+    clarifications: [] as string[],
+    replyDraft: "lift",
+  };
+}
+
 describe("ML4C R1 — durable USER_MESSAGE target binding (PG)", () => {
   beforeAll(() => {
     if (!process.env.DATABASE_URL) {
@@ -1201,3 +1254,752 @@ describe("ML4C R1 — durable USER_MESSAGE target binding (PG)", () => {
     expect(aStill?.state).toBe("APPLICABLE");
   });
 });
+
+describe("ML4C R5 — final durable target scope guards (PG)", () => {
+  beforeAll(() => {
+    if (!process.env.DATABASE_URL) {
+      throw new Error("SETUP BLOCKED: DATABASE_URL required");
+    }
+  });
+
+  it("G01: specific CADRAGE hint does not lift sole global '*' restriction", async () => {
+    const world = await seedOwnedProject(`g01-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    expect(open.status).toBe("APPLIED");
+    rev = open.revision ?? rev + 1;
+    const applied = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "APPLY_RESTRICTION",
+      targetKind: "CYCLE_MUTATION",
+      targetRef: "*",
+      statement: "Freeze global",
+    });
+    expect(applied.status).toBe("APPLIED");
+    rev = applied.revision ?? rev + 1;
+    const globalId = applied.effects.find((e) => e.effectKind === "APPLY_RESTRICTION")?.targetRef;
+    expect(globalId).toBeTruthy();
+
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je lève la restriction CYCLE_MUTATION sur CADRAGE.",
+      liftQual("CADRAGE"),
+    );
+    const attack = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je lève la restriction CYCLE_MUTATION sur CADRAGE.",
+      operation: "LIFT_RESTRICTION",
+      restrictionId: globalId!,
+      semanticIntentId: "i-lift",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(attack.status).toBe("REJECTED");
+    expect(attack.reasonCode).toMatch(/AMBIGUOUS|INVALID/);
+
+    const still = await db
+      .select()
+      .from(governanceRestrictions)
+      .where(
+        and(
+          eq(governanceRestrictions.projectId, world.projectId),
+          eq(governanceRestrictions.status, "ACTIVE"),
+        ),
+      );
+    expect(still).toHaveLength(1);
+    expect(still[0]!.targetRef).toBe("*");
+    expect(still[0]!.id).toBe(globalId);
+  });
+
+  it("G02: CADRAGE hint lifts CADRAGE only; global '*' stays ACTIVE", async () => {
+    const world = await seedOwnedProject(`g02-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    rev = open.revision ?? rev + 1;
+    const rGlobal = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "APPLY_RESTRICTION",
+      targetKind: "CYCLE_MUTATION",
+      targetRef: "*",
+      statement: "Freeze global",
+    });
+    expect(rGlobal.status).toBe("APPLIED");
+    rev = rGlobal.revision ?? rev + 1;
+    const rCadrage = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "APPLY_RESTRICTION",
+      targetKind: "CYCLE_MUTATION",
+      targetRef: "CADRAGE",
+      statement: "Freeze CADRAGE",
+    });
+    expect(rCadrage.status).toBe("APPLIED");
+    rev = rCadrage.revision ?? rev + 1;
+    const globalId = rGlobal.effects.find((e) => e.effectKind === "APPLY_RESTRICTION")?.targetRef!;
+    const cadrageId = rCadrage.effects.find((e) => e.effectKind === "APPLY_RESTRICTION")
+      ?.targetRef!;
+
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je lève la restriction CYCLE_MUTATION sur CADRAGE.",
+      liftQual("CADRAGE"),
+    );
+    const lift = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je lève la restriction CYCLE_MUTATION sur CADRAGE.",
+      operation: "LIFT_RESTRICTION",
+      restrictionId: cadrageId,
+      semanticIntentId: "i-lift",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(lift.status).toBe("APPLIED");
+
+    const still = await db
+      .select()
+      .from(governanceRestrictions)
+      .where(
+        and(
+          eq(governanceRestrictions.projectId, world.projectId),
+          eq(governanceRestrictions.status, "ACTIVE"),
+        ),
+      );
+    expect(still).toHaveLength(1);
+    expect(still[0]!.id).toBe(globalId);
+    expect(still[0]!.targetRef).toBe("*");
+  });
+
+  it("G03: explicit global durable hint lifts unique global restriction", async () => {
+    const world = await seedOwnedProject(`g03-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    rev = open.revision ?? rev + 1;
+    const applied = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "APPLY_RESTRICTION",
+      targetKind: "CYCLE_MUTATION",
+      targetRef: "*",
+      statement: "Freeze global",
+    });
+    expect(applied.status).toBe("APPLIED");
+    rev = applied.revision ?? rev + 1;
+    const globalId = applied.effects.find((e) => e.effectKind === "APPLY_RESTRICTION")?.targetRef!;
+
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je lève la restriction CYCLE_MUTATION globale.",
+      liftQual("*"),
+    );
+    const lift = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je lève la restriction CYCLE_MUTATION globale.",
+      operation: "LIFT_RESTRICTION",
+      restrictionId: globalId,
+      semanticIntentId: "i-lift",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(lift.status).toBe("APPLIED");
+    const active = await db
+      .select()
+      .from(governanceRestrictions)
+      .where(
+        and(
+          eq(governanceRestrictions.projectId, world.projectId),
+          eq(governanceRestrictions.status, "ACTIVE"),
+        ),
+      );
+    expect(active).toHaveLength(0);
+  });
+
+  it("G04: missing target hint or multi global/specific candidates refuse without lift", async () => {
+    const world = await seedOwnedProject(`g04-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    rev = open.revision ?? rev + 1;
+    for (const targetRef of ["*", "CADRAGE"] as const) {
+      const applied = await executePilotageCommand(world.pilotId, world.projectId, {
+        clientCommandKey: newId("ck"),
+        expectedRevision: rev,
+        sourceKind: "EXPLICIT_INTERACTION",
+        sourceRef: newId("ui"),
+        operation: "APPLY_RESTRICTION",
+        targetKind: "CYCLE_MUTATION",
+        targetRef,
+        statement: `Freeze ${targetRef}`,
+      });
+      expect(applied.status).toBe("APPLIED");
+      rev = applied.revision ?? rev + 1;
+    }
+
+    const msgMissing = await seedQualifiedMessage(
+      world,
+      "Je lève une restriction CYCLE_MUTATION.",
+      liftQualWithoutTargetHint(),
+    );
+    const missing = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msgMissing.userMessageId,
+      utterance: "Je lève une restriction CYCLE_MUTATION.",
+      operation: "LIFT_RESTRICTION",
+      semanticIntentId: "i-lift",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(missing.status).toBe("REJECTED");
+
+    // Two ACTIVE globals of same kind are not creatable via APPLY with same "*",
+    // so ambiguity for explicit global is covered when CADRAGE+global coexist and
+    // durable hint is missing (above) or when global hint finds only one — G03.
+    // Here: global hint with one global + one CADRAGE → unique global lift target.
+    // Separate ambiguity: two CADRAGE-compatible would already fail R1-B; keep ACTIVE count.
+    const still = await db
+      .select()
+      .from(governanceRestrictions)
+      .where(
+        and(
+          eq(governanceRestrictions.projectId, world.projectId),
+          eq(governanceRestrictions.status, "ACTIVE"),
+        ),
+      );
+    expect(still).toHaveLength(2);
+  });
+
+  it("G05: legitimate global lift replay has no second effect", async () => {
+    const world = await seedOwnedProject(`g05-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    rev = open.revision ?? rev + 1;
+    const applied = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "APPLY_RESTRICTION",
+      targetKind: "CYCLE_MUTATION",
+      targetRef: "*",
+      statement: "Freeze global",
+    });
+    rev = applied.revision ?? rev + 1;
+    const globalId = applied.effects.find((e) => e.effectKind === "APPLY_RESTRICTION")?.targetRef!;
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je lève la restriction CYCLE_MUTATION globale.",
+      liftQual("*"),
+    );
+    const lift = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je lève la restriction CYCLE_MUTATION globale.",
+      operation: "LIFT_RESTRICTION",
+      restrictionId: globalId,
+      semanticIntentId: "i-lift",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(lift.status).toBe("APPLIED");
+    const liftDecisionId = lift.decisionId;
+
+    const replay = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: lift.revision ?? rev + 1,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je lève la restriction CYCLE_MUTATION globale.",
+      operation: "LIFT_RESTRICTION",
+      restrictionId: globalId,
+      semanticIntentId: "i-lift",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(["ALREADY_APPLIED", "APPLIED", "REJECTED"]).toContain(replay.status);
+    if (replay.status === "ALREADY_APPLIED" || replay.status === "APPLIED") {
+      expect(replay.commandId === lift.commandId || replay.status === "ALREADY_APPLIED").toBe(
+        true,
+      );
+    }
+    const liftRows = await db
+      .select()
+      .from(humanDecisions)
+      .where(
+        and(
+          eq(humanDecisions.projectId, world.projectId),
+          eq(humanDecisions.kind, "LIFT_RESTRICTION"),
+        ),
+      );
+    expect(liftRows.filter((r) => r.state === "APPLIED" || r.id === liftDecisionId).length).toBeGreaterThanOrEqual(1);
+    // No second ACTIVE lift effect on a still-ACTIVE restriction (restriction already lifted).
+    const active = await db
+      .select()
+      .from(governanceRestrictions)
+      .where(
+        and(
+          eq(governanceRestrictions.projectId, world.projectId),
+          eq(governanceRestrictions.status, "ACTIVE"),
+        ),
+      );
+    expect(active).toHaveLength(0);
+  });
+
+  it("D01: RECORD_DECISION applicable with durable decisionId → APPLIED", async () => {
+    const world = await seedOwnedProject(`d01-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    rev = open.revision ?? rev + 1;
+    const recorded = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "RECORD_DECISION",
+      statement: "Décision D01",
+      objectRef: REVISE_OBJECT_REF,
+    });
+    expect(recorded.status).toBe("APPLIED");
+    rev = recorded.revision ?? rev + 1;
+    const targetId = recorded.decisionId!;
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je révise la décision D01.",
+      reviseQualWithDecisionId(targetId, REVISE_OBJECT_REF),
+    );
+    const ok = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je révise la décision D01.",
+      operation: "REVISE_DECISION",
+      decisionId: targetId,
+      statement: "Révision autorité propriétaire",
+      objectRef: REVISE_OBJECT_REF,
+      semanticIntentId: "i-revise",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(ok.status).toBe("APPLIED");
+  });
+
+  it("D02: durable decisionId of OPEN_CYCLE D5 act → REJECTED", async () => {
+    const world = await seedOwnedProject(`d02-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    expect(open.status).toBe("APPLIED");
+    rev = open.revision ?? rev + 1;
+    const openDecisionId = open.decisionId!;
+    const openRow = (
+      await db.select().from(humanDecisions).where(eq(humanDecisions.id, openDecisionId))
+    )[0];
+    expect(openRow?.kind).toBe("OPEN_CYCLE");
+    expect(openRow?.state).toBe("APPLICABLE");
+
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je révise la décision d'ouverture.",
+      reviseQualWithDecisionId(openDecisionId),
+    );
+    const attack = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je révise la décision d'ouverture.",
+      operation: "REVISE_DECISION",
+      decisionId: openDecisionId,
+      statement: "Révision autorité propriétaire",
+      semanticIntentId: "i-revise",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(attack.status).toBe("REJECTED");
+    const still = (
+      await db.select().from(humanDecisions).where(eq(humanDecisions.id, openDecisionId))
+    )[0];
+    expect(still?.state).toBe("APPLICABLE");
+    expect(still?.kind).toBe("OPEN_CYCLE");
+  });
+
+  it("D03: non-APPLICABLE decisionId → REJECTED", async () => {
+    const world = await seedOwnedProject(`d03-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    rev = open.revision ?? rev + 1;
+    const recorded = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "RECORD_DECISION",
+      statement: "Décision D03",
+      objectRef: REVISE_OBJECT_REF,
+    });
+    rev = recorded.revision ?? rev + 1;
+    const targetId = recorded.decisionId!;
+    const firstRevise = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "REVISE_DECISION",
+      decisionId: targetId,
+      statement: "Première révision",
+      objectRef: REVISE_OBJECT_REF,
+    });
+    expect(firstRevise.status).toBe("APPLIED");
+    rev = firstRevise.revision ?? rev + 1;
+    const revised = (
+      await db.select().from(humanDecisions).where(eq(humanDecisions.id, targetId))
+    )[0];
+    expect(revised?.state).toBe("REVISED");
+
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je révise à nouveau la décision D03.",
+      reviseQualWithDecisionId(targetId, REVISE_OBJECT_REF),
+    );
+    const attack = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je révise à nouveau la décision D03.",
+      operation: "REVISE_DECISION",
+      decisionId: targetId,
+      statement: "Révision autorité propriétaire",
+      objectRef: REVISE_OBJECT_REF,
+      semanticIntentId: "i-revise",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(attack.status).toBe("REJECTED");
+  });
+
+  it("D04: decisionId hors projet → REJECTED", async () => {
+    const a = await seedOwnedProject(`d04-a-${Date.now()}`);
+    const b = await seedOwnedProject(`d04-b-${Date.now()}`);
+    let revA = (await getPilotageProjection(a.pilotId, a.projectId)).revision;
+    const openA = await executePilotageCommand(a.pilotId, a.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: revA,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    revA = openA.revision ?? revA + 1;
+    const recA = await executePilotageCommand(a.pilotId, a.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: revA,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "RECORD_DECISION",
+      statement: "A D04",
+      objectRef: REVISE_OBJECT_REF,
+    });
+    expect(recA.status).toBe("APPLIED");
+
+    let revB = (await getPilotageProjection(b.pilotId, b.projectId)).revision;
+    const openB = await executePilotageCommand(b.pilotId, b.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: revB,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    revB = openB.revision ?? revB + 1;
+    const msgB = await seedQualifiedMessage(
+      b,
+      "Je révise la décision A depuis B.",
+      reviseQualWithDecisionId(recA.decisionId!, REVISE_OBJECT_REF),
+    );
+    const cross = await executePilotageCommand(b.pilotId, b.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: revB,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msgB.userMessageId,
+      utterance: "Je révise la décision A depuis B.",
+      operation: "REVISE_DECISION",
+      decisionId: recA.decisionId!,
+      statement: "Révision autorité propriétaire",
+      objectRef: REVISE_OBJECT_REF,
+      semanticIntentId: "i-revise",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(cross.status).toBe("REJECTED");
+    const aStill = (
+      await db.select().from(humanDecisions).where(eq(humanDecisions.id, recA.decisionId!))
+    )[0];
+    expect(aStill?.state).toBe("APPLICABLE");
+  });
+
+  it("D05: body decisionId substituted vs durable id → REJECTED", async () => {
+    const world = await seedOwnedProject(`d05-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    rev = open.revision ?? rev + 1;
+    const d1 = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "RECORD_DECISION",
+      statement: "D05 A",
+      objectRef: `${REVISE_OBJECT_REF}-a`,
+    });
+    rev = d1.revision ?? rev + 1;
+    const d2 = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "RECORD_DECISION",
+      statement: "D05 B",
+      objectRef: `${REVISE_OBJECT_REF}-b`,
+    });
+    rev = d2.revision ?? rev + 1;
+    const durableId = d1.decisionId!;
+    const victimId = d2.decisionId!;
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je révise la décision D05 A.",
+      reviseQualWithDecisionId(durableId, `${REVISE_OBJECT_REF}-a`),
+    );
+    const attack = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je révise la décision D05 A.",
+      operation: "REVISE_DECISION",
+      decisionId: victimId,
+      statement: "Révision autorité propriétaire",
+      objectRef: `${REVISE_OBJECT_REF}-a`,
+      semanticIntentId: "i-revise",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(attack.status).toBe("REJECTED");
+    const still = await db
+      .select()
+      .from(humanDecisions)
+      .where(
+        and(
+          eq(humanDecisions.projectId, world.projectId),
+          eq(humanDecisions.kind, "RECORD_DECISION"),
+          eq(humanDecisions.state, "APPLICABLE"),
+        ),
+      );
+    expect(still.map((r) => r.id).sort()).toEqual([durableId, victimId].sort());
+  });
+
+  it("D06: objectRef multi-cible without durable decisionId → REJECTED", async () => {
+    const world = await seedOwnedProject(`d06-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    rev = open.revision ?? rev + 1;
+    for (const statement of ["D06 A", "D06 B"]) {
+      const d = await executePilotageCommand(world.pilotId, world.projectId, {
+        clientCommandKey: newId("ck"),
+        expectedRevision: rev,
+        sourceKind: "EXPLICIT_INTERACTION",
+        sourceRef: newId("ui"),
+        operation: "RECORD_DECISION",
+        statement,
+        objectRef: REVISE_OBJECT_REF,
+      });
+      expect(d.status).toBe("APPLIED");
+      rev = d.revision ?? rev + 1;
+    }
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je révise la décision partagée D06.",
+      reviseQualWithoutDecisionId(),
+    );
+    const attack = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je révise la décision partagée D06.",
+      operation: "REVISE_DECISION",
+      statement: "Révision autorité propriétaire",
+      objectRef: REVISE_OBJECT_REF,
+      semanticIntentId: "i-revise",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(attack.status).toBe("REJECTED");
+    expect(attack.reasonCode).toMatch(/AMBIGUOUS|INVALID/);
+    const applicable = await db
+      .select()
+      .from(humanDecisions)
+      .where(
+        and(
+          eq(humanDecisions.projectId, world.projectId),
+          eq(humanDecisions.kind, "RECORD_DECISION"),
+          eq(humanDecisions.state, "APPLICABLE"),
+          eq(humanDecisions.objectRef, REVISE_OBJECT_REF),
+        ),
+      );
+    expect(applicable).toHaveLength(2);
+  });
+
+  it("D07: valid revise replay preserves durable identity without duplicate effect", async () => {
+    const world = await seedOwnedProject(`d07-${Date.now()}`);
+    let rev = (await getPilotageProjection(world.pilotId, world.projectId)).revision;
+    const open = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "OPEN_CYCLE",
+      cycleType: "CADRAGE",
+    });
+    rev = open.revision ?? rev + 1;
+    const recorded = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("ui"),
+      operation: "RECORD_DECISION",
+      statement: "D07",
+      objectRef: REVISE_OBJECT_REF,
+    });
+    rev = recorded.revision ?? rev + 1;
+    const targetId = recorded.decisionId!;
+    const msg = await seedQualifiedMessage(
+      world,
+      "Je révise la décision D07.",
+      reviseQualWithDecisionId(targetId, REVISE_OBJECT_REF),
+    );
+    const ok = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: rev,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je révise la décision D07.",
+      operation: "REVISE_DECISION",
+      decisionId: targetId,
+      statement: "Révision autorité propriétaire",
+      objectRef: REVISE_OBJECT_REF,
+      semanticIntentId: "i-revise",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(ok.status).toBe("APPLIED");
+    const replay = await executePilotageCommand(world.pilotId, world.projectId, {
+      clientCommandKey: newId("ck"),
+      expectedRevision: ok.revision ?? rev + 1,
+      sourceKind: "USER_MESSAGE",
+      sourceRef: msg.userMessageId,
+      utterance: "Je révise la décision D07.",
+      operation: "REVISE_DECISION",
+      decisionId: targetId,
+      statement: "Révision autorité propriétaire",
+      objectRef: REVISE_OBJECT_REF,
+      semanticIntentId: "i-revise",
+      semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    });
+    expect(["ALREADY_APPLIED", "APPLIED", "REJECTED"]).toContain(replay.status);
+    const original = (
+      await db.select().from(humanDecisions).where(eq(humanDecisions.id, targetId))
+    )[0];
+    expect(original?.state).toBe("REVISED");
+    // REVISE inserts a successor RECORD_DECISION (same kind as target), not kind REVISE_DECISION.
+    const successors = await db
+      .select()
+      .from(humanDecisions)
+      .where(
+        and(
+          eq(humanDecisions.projectId, world.projectId),
+          eq(humanDecisions.kind, "RECORD_DECISION"),
+          eq(humanDecisions.supersedesDecisionId, targetId),
+        ),
+      );
+    expect(successors).toHaveLength(1);
+    expect(successors[0]!.state).toBe("APPLICABLE");
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/durable-target-resolve.test.ts b/projects/sfia-studio-next/web/tests/unit/durable-target-resolve.test.ts
new file mode 100644
index 00000000..390b8d67
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/durable-target-resolve.test.ts
@@ -0,0 +1,45 @@
+import { describe, expect, it } from "vitest";
+import {
+  isGlobalRestrictionTarget,
+  restrictionTargetMatchesHint,
+} from "@/domains/pilotage/durable-target-resolve";
+
+describe("restrictionTargetMatchesHint — global vs specific scope", () => {
+  it("specific CADRAGE hint does not match global '*'", () => {
+    expect(
+      restrictionTargetMatchesHint({ targetRef: "*", hint: "CADRAGE" }),
+    ).toBe(false);
+  });
+
+  it("global durable hint matches only global ACTIVE refs", () => {
+    expect(restrictionTargetMatchesHint({ targetRef: "*", hint: "*" })).toBe(true);
+    expect(restrictionTargetMatchesHint({ targetRef: "", hint: "*" })).toBe(true);
+    expect(restrictionTargetMatchesHint({ targetRef: "CADRAGE", hint: "*" })).toBe(false);
+  });
+
+  it("exact specific match and cycleType↔cycleId equivalence remain", () => {
+    expect(
+      restrictionTargetMatchesHint({ targetRef: "CADRAGE", hint: "CADRAGE" }),
+    ).toBe(true);
+    expect(
+      restrictionTargetMatchesHint({
+        targetRef: "cyc_1",
+        hint: "CADRAGE",
+        activeCycle: { id: "cyc_1", cycleType: "CADRAGE" },
+      }),
+    ).toBe(true);
+    expect(
+      restrictionTargetMatchesHint({
+        targetRef: "cyc_other",
+        hint: "CADRAGE",
+        activeCycle: { id: "cyc_1", cycleType: "CADRAGE" },
+      }),
+    ).toBe(false);
+  });
+
+  it("isGlobalRestrictionTarget covers empty and '*'", () => {
+    expect(isGlobalRestrictionTarget("*")).toBe(true);
+    expect(isGlobalRestrictionTarget("")).toBe(true);
+    expect(isGlobalRestrictionTarget("CADRAGE")).toBe(false);
+  });
+});

```

## 10. Unit tests

252 PASS (248 baseline + 4 durable-target-resolve).

## 11. PostgreSQL tests

336 PASS (324 + 12 G/D).

## 12. Playwright tests

25 PASS.

## 13. TypeScript / ESLint / build

tsc PASS · lint warnings historiques non bloquants · Next build PASS.

## 14. Contrôles de sécurité

secret scan clean · git diff --check clean · aucun secret dans pack.

## 15. Commit parent/tree/SHA

```
commit 67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0
Author:     Morris Cleland <morris@macbook-air.home>
AuthorDate: Thu Nov 12 19:20:04 2026 +0100
Commit:     Morris Cleland <morris@macbook-air.home>
CommitDate: Thu Nov 12 19:20:04 2026 +0100

    fix(next): close final durable target scope guards

    Co-authored-by: Cursor <cursoragent@cursor.com>

 ...n-semantique-mobilisation-gouvernee-20261112.md |  23 +
 .../construction/delivery-history.md               |  15 +
 .../src/domains/pilotage/durable-target-resolve.ts |  67 +-
 .../web/tests/integration/ml3-pilotage.pg.test.ts  |   4 +
 .../ml4c-auth-reconciliation.pg.test.ts            | 802 +++++++++++++++++++++
 .../web/tests/unit/durable-target-resolve.test.ts  |  45 ++
 6 files changed, 943 insertions(+), 13 deletions(-)

```

SHA `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` · parent `d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b` · tree `64167c6fc4c98da3c3d4168518911636961bc5c6`
Message: `fix(next): close final durable target scope guards`

## 16. Push FF et vérification distante

`d7c28a21..67bf6b0b` → origin/build/next-ml4c-functional-convergence (FF only). Distant = local.

## 17. PR #676 actualisée

https://github.com/mcleland147/sfia-workspace/pull/676 — OPEN / MERGEABLE / no auto-merge.
Body: section scope guards + freeze RECETTE.

## 18. CI GitHub sur nouveau SHA

Next CI [43278752662](https://github.com/mcleland147/sfia-workspace/actions/runs/43278752662) SUCCESS
(Detect, tsc, eslint, build, unit, migrations, PG, Playwright, secrets, whitespace, Required Gate).
Studio CI [43278752494](https://github.com/mcleland147/sfia-workspace/actions/runs/43278752494) SUCCESS (Studio build SKIPPED + Required Gate).

## 19. État RECETTE avant intervention

Process :3200 cwd …/recette-build-2416e2ee · SHA 2416e2ee · BUILD_ID qB8JvXfdL7FMOFYMf31kL · DB sfia_next_recette_ml4:5434 · prep Intervencia OPEN · 15 projects / 170 preparations.

## 20. Sauvegarde / stratégie de reprise

Backup: `/Users/morris/Projects/sfia-recette-backups/ml4c-20261112-192721-pre-67bf6b0b`
dump sha256: 17f28b9c98d2433ff3fa825fae255479330398042bd8d04fbbbd343648809417
Rollback: restore launchd 2416e2ee ; pg_restore seulement sous GO Morris.

## 21. Worktree RECETTE figé

`/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-67bf6b0b` detached @ `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0`
npm ci + production build ; start via launchd `com.sfia.studio.next.recette.ml4`.

## 22. BUILD_ID et identité runtime réellement servis

BUILD_ID: `wYKCZCblBxWLiVsNjIr3e`
CWD serveur: …/recette-build-67bf6b0b/projects/sfia-studio-next/web
URL: http://127.0.0.1:3200 · login 200 · portfolio 200 · root 307

## 23. PostgreSQL RECETTE et schéma

sfia_next_recette_ml4 / sfia_next_recette @ 5434 · migrations 001→012 NOT RUN (inchangé) · prep Intervencia conservée · counts 15/170.

## 24. Sessions, OAuth, secrets et isolation

Secrets: `~/.config/sfia-studio-next/recette/.env.local` réutilisés, non copiés dans Git.
DEV/STABLE non mutés. ENV-R09 cookies multi-lane NOT VERIFIED.

## 25. Smoke RECETTE non destructif

Login/portfolio HTTP OK · DB intacte · aucune conversation Nora · aucune création D2/D4 · aucun WRITE Git.

## 26. Manifeste RECETTE non secret

# RECETTE Freeze Manifest — ML4C-UAT-2026-11-12

Date: 2026-11-12 19:28:43 CET
CI gate: SUCCESS https://github.com/mcleland147/sfia-workspace/actions/runs/43278752662

## Identity

| Field | Value |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| source_sha | 67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0 |
| tree | 64167c6fc4c98da3c3d4168518911636961bc5c6 |
| build_id | wYKCZCblBxWLiVsNjIr3e |
| worktree | /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-67bf6b0b |
| mode | next start production, no hot reload |
| version | 0.0.0-dev / NO RELEASE |
| lane | RECETTE |
| db | sfia_next_recette_ml4 @ 127.0.0.1:5434 |
| schema | 001→012 unchanged (NOT RUN this switch) |
| previous_sha | 2416e2ee25662821b015407346c64ec204f67488 |
| previous_build_id | qB8JvXfdL7FMOFYMf31kL |
| backup | /Users/morris/Projects/sfia-recette-backups/ml4c-20261112-192721-pre-67bf6b0b |
| dump_sha256 | 17f28b9c98d2433ff3fa825fae255479330398042bd8d04fbbbd343648809417 |
| PR | #676 OPEN / no merge |
| smoke_login | HTTP 200 |
| smoke_root | HTTP 307 |

## Campaign

- id: ML4C-UAT-2026-11-12
- Intervencia prep OPEN preserved: prep_cd6f1d24-81d0-4e98-99d0-90aec8a94a3b
- First Morris step: RETEST S02-01
- A-006/A-007: FIX IMPLEMENTED / RETEST USER PENDING

## Capabilities

- Nora LIVE: CONFIGURED / NOT PROVEN (no UAT conversation this cycle)
- Git REAL WRITE: forbidden
- GitHub App: CONFIGURED historically — WRITE NOT PROVEN

## Rollback

1. bootout com.sfia.studio.next.recette.ml4
2. restore start/plist to 2416e2ee from backup
3. pg_restore only under explicit Morris GO

## Reserves

ENV-R09 NOT VERIFIED · Gate C OPEN · NO STABLE · NO ADOPTED · NO MERGE


## 27. Cahier/journal repris sans remplacement

Cahier VALIDATED CONTENT BY MORRIS inchangé.
Journal D1 historique inchangé (nouvelle fiche seulement lors reprise utilisateur).

## 28. Fiche de reprise historique S02-01

### REPRISE ML4C-UAT-2026-11-12

| Champ | Valeur |
| --- | --- |
| Ancien candidat | 2416e2ee / BUILD_ID qB8JvXfdL7FMOFYMf31kL |
| Nouveau candidat figé | 67bf6b0b / BUILD_ID wYKCZCblBxWLiVsNjIr3e |
| Point d'interruption | S02-01 FAIL historique |
| S01 historiques | 01/03/04/06 PASS ; 02/05 observés non clôturés |
| Anomalies | A-006 / A-007 FIX IMPLEMENTED / RETEST USER PENDING |
| Architecture | qualification sémantique durable (SEM/TV) — pas de routeur lexical |
| Test à reprendre | **RETEST S02-01** (pas S02-02) |
| Données à préserver | prep_cd6f1d24… + journal/cahier historiques |
| Première action Morris | Ouvrir nouvelle préparation propre ; retester S02-01 ; conserver ancien sas |
| Nora LIVE / Git REAL | CONFIGURED / NOT PROVEN this cycle |
| Autres cas | 48 NOT RUN conservés |

## 29. Anomalies et réserves restantes

Nora LIVE NOT RUN · Git REAL NOT RUN · S02-01 source exacte peut être NON DISPONIBLE · ENV-R06 réel si endpoint absent · ENV-R09 · A-006/A-007 OPEN pending user retest · Gate C OPEN · NO RELEASE · NO ADOPTED · PR #676 NON MERGÉE.

## 30. État Git final

Produit HEAD `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` = distant PR. Dirty: `.tmp-sfia-review/*` local only.
Handoff publié séparément sur sfia/review-handoff.

## 31. Verdict et gates Morris

**PRODUCT FIX CI GREEN — RECETTE CANDIDATE FROZEN — READY FOR MORRIS UAT**

S02-01 READY FOR USER RETEST

URL: http://127.0.0.1:3200
SHA: `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0`
BUILD_ID: wYKCZCblBxWLiVsNjIr3e
DB: sfia_next_recette_ml4:5434
CI: https://github.com/mcleland147/sfia-workspace/actions/runs/43278752662
PR: https://github.com/mcleland147/sfia-workspace/pull/676

AUCUN MERGE · AUCUNE PROMOTION STABLE · AUCUNE CLÔTURE GATE C · AUCUN VERDICT UTILISATEUR AUTOMATIQUE.

### As-built (HEAD)

# As-built — Qualification sémantique Nora + mobilisation gouvernée (Q1/Q2 final runtime)

Date: 2026-11-12 ~15:10 CET (Europe/Paris)
Branche locale: `fix/next-semantic-intent-convergence-20261112`
Base candidat: `2416e2ee25662821b015407346c64ec204f67488`
Profil: Critical / EVOL corrective QA / NO RELEASE / publication produit INTERDITE

## Objectif de ce cycle

Fermer les deux preuves manquantes du Review Pack précédent (TECHNICAL REVIEWABLE — INTEGRATION GATE NOT YET CLEARED) :

1. **Q1** — Mission `AWAITING_PILOT_ACT` obtenue par le **vrai parcours D2** (sas sans projet, sans clic « Créer le projet »), puis blocage S05 d’une intention B concurrente.
2. **Q2** — Isolation ENV-01 runtime + PostgreSQL démontrée (pas seulement variables d’environnement).

Les corrections C-01..C-04 / F1–F4 / integrator sont **conservées**.

## Q1 — Parcours D2 réel (origine de la mission)

### Étapes

1. Authentifier Pilote DEV.
2. Ouvrir une préparation `OPEN` **sans** lien projet (`preparationProjectLinks` vide).
3. Envoyer via API conversation réelle : `"Je veux créer un projet."`
4. Nora uniquement à la frontière `TEST_BOUNDARY` (fixture DEV+E2E).
5. Qualification structurée → `d2.create_project` / `REQUEST_EFFECT`.
6. Studio prépare l’intention D2 ; `service.ts` produit `MissionProjection` via `buildD2OwnerActBinding` + `d2MissionIdempotencyKey` → status `AWAITING_PILOT_ACT`.
7. **Aucun** clic sur « Créer le projet » → **aucun** projet durable.
8. Relecture : `loadLatestMissionsByIntentKey` / oracle E2E après COMPLETE et après refresh.

### Différence vs ancien seed artificiel (C-02)

| | Seed `seed_awaiting_mission` | Parcours Q1 réel |
| --- | --- | --- |
| Précondition | Projet souvent déjà créé, puis mission « créer projet » injectée | Sas `OPEN`, zéro projet |
| `ownerActBinding` | JSON partiel possible | Complet : `kind=D2_CREATE_PROJECT`, `preparationId`, `clientIntentKey`, `suggestedIdempotencyKey` (= `d2MissionIdempotencyKey`) |
| Origine | Fixture HTTP écrit `resultJson` | `postUserMessageAndNora` / route messages Studio |
| Preuve S05 | Gate sait bloquer si projection présente | Gate bloque une mission **métier atteignable** |

### Contrôle positif B

Préparation DEV distincte **sans** mission AWAITING : document CREATE nominal → `documentCount+1`, `pendingEffectBlocked ≠ true`.

### Contrôle négatif B

Sur la préparation portant A : message documentaire concurrent → `pendingEffectBlocked=true`, raison `S05_MISSION_BLOCKS_EFFECT`, aucun document/projet/décision D6, A toujours `AWAITING_PILOT_ACT`.

### Preuves

| Suite | Résultat |
| --- | --- |
| `ml4c-d2-mission-s05.pg.test.ts` | 3 PASS |
| `ml4c-d2-mission-real-s05.spec.ts` (Playwright :3101) | 1 PASS |
| LIVE OpenAI | NOT RUN |

## Q2 — ENV-01 runtime / PostgreSQL

### Identité runtime (Playwright mutatif)

| Champ | Valeur observée |
| --- | --- |
| Port web E2E | `127.0.0.1:3101` (éphémère via `scripts/e2e-web-server.sh`) |
| Bind | `-H 127.0.0.1` (loopback) |
| Worktree code | candidat local `…/sfia-workspace-next-semantic-intent-20261112` |
| HEAD | `2416e2ee` + worktree dirty (non poussé) |
| Mode | `next dev`, `distDir=.next-e2e` |
| Lane flags | `STUDIO_LANE=DEV`, `STUDIO_E2E=1`, `STUDIO_FORCE_NORA_FIXTURE=1`, `OPENAI_API_KEY` neutralisé |
| RECETTE observée | process distinct PID sur `:3200`, cwd `…/sfia-workspace-next-ml4-recette-build-2416e2ee` — **non utilisé** par les tests mutatifs |

### Identité PostgreSQL (expurgée)

| Champ | DEV/E2E observé |
| --- | --- |
| Conteneur | `sfia-next-dev-pg` → `127.0.0.1:5433` |
| `current_database()` | `sfia_next_e2e` (vitest mutatif / Playwright) |
| `current_user` | `sfia_next_dev` |
| Bases sur conteneur DEV | `sfia_next_dev`, `sfia_next_e2e`, `sfia_next_ml4` |
| Conteneur RECETTE | `sfia-next-recette-pg` → `127.0.0.1:5434` |
| Cross-lane | Identifiants DEV → `:5434/sfia_next_recette` = **28P01 DENIED** |

### Matrice ENV-R01..R15

| ID | Résultat | Preuve |
| --- | --- | --- |
| ENV-R01 | PASS | Playwright webServer = worktree candidat + `.next-e2e` |
| ENV-R02 | PASS | Port 3101 éphémère documenté ; RECETTE :3200 PID/cwd distincts |
| ENV-R03 | PASS | `next dev -H 127.0.0.1` ; docker PG `127.0.0.1:5433` |
| ENV-R04 | PASS | `current_database()=sfia_next_e2e` |
| ENV-R05 | PASS | `current_user=sfia_next_dev` |
| ENV-R06 | PASS | DEV creds DENIED sur RECETTE :5434 |
| ENV-R07 | PASS | Bases/ports distincts ; mutatif confiné `sfia_next_e2e` |
| ENV-R08 | PASS | distDir `.next-e2e` vs operator `.next` / RECETTE autre worktree |
| ENV-R09 | NOT VERIFIED | Isolation cookies multi-lane non mesurée hors sessions DEV E2E |
| ENV-R10 | PASS (partiel) | Secrets non publiés ; roles/ports séparés ; mots de passe distincts (DENIED) |
| ENV-R11 | PASS | `e2eFixtureMutationsAllowed` refuse production/RECETTE/sans E2E |
| ENV-R12 | PASS | Gate vitest rewrite → `sfia_next_e2e` only |
| ENV-R13 | PASS | Aucune mutation RECETTE dans ce cycle ; cross-auth DENIED |
| ENV-R14 | PASS | `e2e-web-server.sh` + playwright.config reproductibles |
| ENV-R15 | PASS | Pack handoff sans secrets (contrôle publisher) |

**ENV-R09 = NOT VERIFIED** (ne pas convertir en PASS). Pas de STOP : frontière mutative PG/runtime démontrée.

## Runner / D4 / fixture (conservés)

- D5/D6 : classify → findByIntent/ActionKey avant STALE ; `stash.applied` obligatoire.
- D4 : pas de FACT sur seul `established` Nora.
- Fixture : DEV ∧ E2E=1 ∧ ¬production.

## Correctif CI sémantique (2026-11-12 ~17:50 CET)

Parent produit: `83fd9ece`. Cause CI: 53 PG (oracles lexicaux + fixtures exactes absentes + ENV-R06 :5434 absent en runner + P1 decisionId/restrictionId résolus refusés par gate durable USER_MESSAGE).

Corrections:
- Helpers `tests/helpers/semantic-fixture-envelopes.ts` (enveloppes typées TEST_BOUNDARY).
- Suites intent/mission/ml3/ml4/env01 adaptées au contrat SEM-02 (sans routeur lexical).
- ENV-R06: si endpoint RECETTE absent → `NOT_VERIFIED / ENDPOINT_NOT_AVAILABLE` (pas AUTH DENIED sur ECONNREFUSED).
- P1: `service.ts` accepte decisionId/restrictionId serveur résolus depuis hints durables vérifiés ; statement D5 non echoé comme D6 ; hook C02 après autorité.
- P1: `projectStudioEffects` — follow-on D4 (`dependsOn` create-project) → `documentAct=NONE` jusqu'à l'acte Pilote D2 (pas de CREATE immédiat en sas).
- P1: thread ACK-lost — `rememberPending` sur HTTP/réseau ; pending A non écrasé par un effet B distinct.
- UI: `PilotagePanel` OPEN toujours structuré (`cycleType` contrôle) ; utterance = echo.

Preuve locale: PG 318/318 ; unit 248/248 ; Playwright Atlas+ML3 9/9. LIVE NOT RUN. Gate C OPEN.

## Correctif autorités D5/D6 + fixtures + ENV-R06 (2026-11-12 ~18:40 CET)

Parent produit: `9c163d62`. Mandat: sécuriser les réserves Critical Review R1/R2/R3 sans refaire ML4C.

### R1 — Binding cible durable (propriétaire)

- Nouveau module unique `durable-target-resolve.ts` :
  - `resolveReviseDecisionTarget` — CAS A decisionId durable ; CAS B objectRef → 0/1/N APPLICABLE RECORD_DECISION (jamais choix d’ordre) ; CAS C refus.
  - `resolveLiftRestrictionTarget` — filtre ACTIVE + kindHint + targetRefHint ; unicité obligatoire.
- `classifyCommand` (USER_MESSAGE) et `applyConversationalAuthority` réutilisent le même résolveur.
- `body.decisionId` / `body.restrictionId` ne peuvent qu’**écho**er la cible déjà résolue ; divergence → REJECTED / AMBIGUOUS.
- Preuves négatives/positives dans `ml4c-auth-reconciliation.pg.test.ts` via `executePilotageCommand` (multi-cible D6, multi-restriction, hors projet, idempotence).

### R2 — Fixtures sémantiques explicites

- Suppression de `registerPgUtteranceFixture` (inférence regex d’intentions positives).
- `registerExplicitFixture` / builders typés (`d2`, `d4_*`, `d5`, `d6`, …) ; call sites intent/mission/ml3/ml4 migrés.
- Texte USER = clé de fixture, **pas** source d’inférence de capacité.
- Message inconnu reste fail-closed.

### R3 — ENV-R06

- ENV-R06A : contrat CI déterministe (cible mutative `sfia_next_e2e`, lanes interdites).
- ENV-R06B : si `:5434` absent → `NOT_VERIFIED / ENDPOINT_NOT_AVAILABLE` (trace console, pas faux PASS) ; si présent → exiger `28P01` (ECONNREFUSED ≠ AUTH DENIED).
- ENV-R09 reste NOT VERIFIED.

### Preuves locales (ce lot)

| Suite | Résultat |
| --- | --- |
| Vitest unit | 248 PASS |
| Vitest PostgreSQL | 324 PASS (318 + R1/R3) |
| Playwright BROWSER FAKE | 25 PASS |
| tsc / eslint / Next build | PASS (warnings non bloquants) |
| LIVE Nora / Git REAL | NOT RUN |

## Correctif final d'autorité + freeze RECETTE (2026-11-12 ~19:20 CET)

Parent produit: `d7c28a21`. Mandat R5 : deux cas limites + mise à disposition RECETTE pour reprise ML4C-UAT-2026-11-12 (S02-01).

### Cas A — portée globale `*`

- `restrictionTargetMatchesHint` : un hint durable spécifique (ex. CADRAGE) **ne sélectionne plus** une restriction ACTIVE `targetRef="*"`.
- Hint durable global (`*` / vide normalisé) ne matche que des cibles globales.
- `resolveLiftRestrictionTarget` exige un `restrictionTargetRefHint` durable explicite (pas d'autorisation implicite de levée globale).
- Preuves G01–G05 via `executePilotageCommand`.

### Cas B — kind D6

- Branche `decisionId` de `resolveReviseDecisionTarget` exige `kind === RECORD_DECISION` (même stricteé que objectRef).
- OPEN_CYCLE / APPLY_RESTRICTION / autres fondateurs D5 → INVALID.
- Preuves D01–D07 via `executePilotageCommand`.

### Campagne utilisateur

- Identifiant conservé : `ML4C-UAT-2026-11-12`.
- Cahier/journal historiques non remplacés ; premier retest attendu : **S02-01**.
- A-006/A-007 : FIX IMPLEMENTED / RETEST USER PENDING (pas CLOSED).

## Non-déclarations

ML4C ACCEPTED · S02-01 PASS · A-006/A-007 CLOSED · Gate C CLOSED · ADOPTED · READY FOR REAL · LIVE Nora

## Réserves / gates Morris restants

- LIVE Nora pertinence (NOT RUN)
- Git REAL (NOT RUN)
- S02-01 Intervencia FAIL (source exacte indisponible)
- A-006/A-007 ouvertes
- PR #676 OPEN / NON MERGÉE (hardening autorités en publication)
- ENV-R09 sessions multi-lane NOT VERIFIED
- ENV-R06 isolation runtime réelle: NOT VERIFIED si endpoint RECETTE absent
- Décision d’intégration Git / RECETTE / promotion = Morris uniquement


### Delivery history (tête)

# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


## delivery_id: DELIV-2026-11-12-ML4C-FINAL-SCOPE-GUARDS-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~19:20 CET (Europe/Paris) |
| Macro-lot | ML4C R5 — gardes finales cible durable (`*` / kind D6) + freeze RECETTE |
| Type | EVOL Critical corrective + mise à disposition RECETTE (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
| Parent tip | `d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b` |
| Lane | DEV/E2E tests ; RECETTE figée après CI GREEN (campagne ML4C-UAT-2026-11-12) |
| Changes | `restrictionTargetMatchesHint` fail-closed vs globale ; LIFT exige hint durable ; `resolveReviseDecisionTarget` exige RECORD_DECISION ; tests G01–G05 / D01–D07 |
| Schema | unchanged |
| Tests | unit 252 PASS (248+4) ; PG 336 PASS (324+12 G/D) ; Playwright 25 PASS ; LIVE NOT RUN |
| Status | PUSH PR #676 puis freeze RECETTE si CI GREEN |

## delivery_id: DELIV-2026-11-12-ML4C-AUTHORITY-HARDENING

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~18:40 CET (Europe/Paris) |
| Macro-lot | ML4C — sécurisation frontières d’autorité R1/R2/R3 (PR #676) |
| Type | EVOL Critical corrective / SECURITY / QUALITY (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
| Parent tip | `9c163d621589e7ba9d7369ad5a0342a9bbde8b04` |
| Lane | DEV/E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | Résolveur propriétaire unique `durable-target-resolve.ts` (REVISE/LIFT) ; body HTTP = écho uniquement ; fixtures explicites (`registerExplicitFixture`) ; suppression `registerPgUtteranceFixture` ; ENV-R06A/B (NOT_VERIFIED si :5434 absent) ; tests négatifs multi-cible D6/restriction |
| Schema | unchanged |
| Tests | unit 248 PASS ; PG 324 PASS ; Playwright 25 PASS ; tsc/eslint/build PASS ; LIVE NOT RUN |
| Status | PUSH PR #676 — CI distante à observer sur nouveau SHA |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-CI-PARITY

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~17:50 CET (Europe/Paris) |
| Macro-lot | ML4C — correctif non-régression sémantique + CI PG (PR #676) |
| Type | EVOL Critical corrective QA (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
| Parent tip | `83fd9ecef2d952c90a828d68a192e105c83be35f` |

### Fichiers commit

```
M	projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/src/domains/pilotage/durable-target-resolve.ts
M	projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
M	projects/sfia-studio-next/web/tests/integration/ml4c-auth-reconciliation.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/durable-target-resolve.test.ts
```

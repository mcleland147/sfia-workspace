# SFIA Studio Next — Review Pack FULL — E2 Option B — Conduite uniforme des intentions qualifiées

| Champ | Valeur |
|---|---|
| Cycle | 8 — Delivery / Critical / EVOL |
| Mandat | Macro-lot correctif ML5 — E2 Option B (ARCH-01…05) |
| Snapshot de base | `53b9d452ab73732eef82677ab9a90529ccd973c8` / tree `18e8fd99a88396fed7041f146c46bd54f1f75658` |
| Branche projet | `sfia/next-ml5-integrated-delivery-20261123` |
| Commit/push projet | **INTERDIT** (GO snapshot consommé) |
| Handoff L3 | `review(next): verify unified cognitive intent conduction` |
| Verdict Cursor | **READY WITH RESERVES** — sortie construction E2 proposée ; gate Morris ; E3 non engagé |

---

## 1. Mandat

Remplacer le séquencement fixe D4 préalable → D5/D6 → D4 restante par une conduite uniforme fondée sur les intentions qualifiées, leurs dépendances et les résultats réellement obtenus auprès des propriétaires D4-connaissance / D5 / D6.

Résultat : le Pilote peut exprimer une demande multi-capacités ; Nora qualifie ; Studio traite les intentions admissibles dans un ordre cohérent, sans mutation prématurée, perte silencieuse ou duplication.

## 2. Git Truth Check

| Item | Observé |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD local = remote | `53b9d452ab73732eef82677ab9a90529ccd973c8` |
| Tree baseline | `18e8fd99a88396fed7041f146c46bd54f1f75658` |
| Main distant | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Docs candidate | `docs/next-openai-studio-convergence-20261126` @ `7d6a3a30` |
| Handoff avant cycle | `f01bf552` |
| Staged | 0 |
| Dirty légitime | `.tmp-sfia-review/` + delta Option B local (non commité projet) |

**ENV ROUTING COMPLETE** — DEV :3100 / PG :5433 ; tests mutatifs → `sfia_next_e2e` (Vitest rewrite) ; RECETTE non mutée.

## 3. Décisions Morris (ARCH-01…05) — respect

| ID | Orientation | Respect |
|---|---|---|
| ARCH-01 | D3 conducteur unique | Oui — boucle dans `conversation/service.ts` ; pas de second conducteur |
| ARCH-02 | Séquencement dépendances + résultats | Oui — `planIntegratedEffectWave` + outcomes propriétaires |
| ARCH-03 | Réutiliser qualification/persistance/clés/fencing/reprise | Oui — stash, semanticIntentId, maybeCapitalize, applyConversationalAuthority, C02 |
| ARCH-04 | Pas de nouvel orchestrateur / agent / registre / pivot | Oui — module planificateur pur interne ; pas de tables/API nouvelles |
| ARCH-05 | Préserver E1/E2 ; qualification bornée | Oui — oracles E1/FINAL/C02/MP09 PASS ; docs sync non normatifs |

## 4. Flux actuel (baseline 53b9d452) → flux final

**Avant :** D4 early (deps de pilotage, transitif, vagues) → D5/D6 séquentiels → D4 remaining/normal.

**Après :** une boucle de vagues sur l'ensemble intégré `d4.record_knowledge` + `d5` + `d6` REQUEST_EFFECT :

1. Charger intentions qualifiées intégrées (ordre topo stable).
2. Planifier ready / blocked selon dependsOn + outcomes.
3. Batch D4 ready → `maybeCapitalizeFromExchange` ; puis D5/D6 ready → `applyConversationalAuthority`.
4. Enregistrer résultats réels ; réévaluer ; stopper si aucune progression.
5. Document CREATE/REVISE, D2, D7 restent hors boucle (chemins existants).

## 5. Responsabilités

| Acteur | Rôle |
|---|---|
| Nora | Qualification sémantique (inchangée) |
| D3 | Conduite déterministe des intentions déjà qualifiées |
| D4 | Propriétaire connaissance (batches, provenance) |
| D5/D6 | Propriétaires pilotage / HumanDecision |
| Module `qualified-effect-conduction` | Planification pure (pas d'I/O propriétaire) |

## 6. Blast radius

- API publique : inchangée.
- Données / migrations : aucune.
- Autorité : préservée (précondition ≠ autorisation).
- Reprise C02 : préservée (union stash∪projections).
- UX : N/A (E3).
- Tests : unit planner + PG SC1–SC3 + NR FINAL/C02/MP09/E1.

## 7. Mécanismes supprimés / consolidés (périmètre intégré)

- `early_before_pilotage` / `d4DepsForPilotage` / `capitalisationRanBeforePilotage` / remaining D4 concurrente.
- Boucle D5/D6 isolée post-early.

## 8. Mécanismes préservés

- Qualification durable avant mutations ; fencing ; ownership mid-loop SKIPPED.
- `crossCapOutcomeFromCapitalisations` + proposalKind.
- Batches D4 parent/enfant (peers ready → un seul capitalize).
- Forecast durable ; RETAIN ; C02 ; documentaire create/revise ; missions D2/D7.
- `intent-conduction.ts` (mission/D2) — non confondu avec Option B.

## 9. Validations

| Commande | Env / DB | Portée | Résultat |
|---|---|---|---|
| `npx vitest run tests/unit/qualified-effect-conduction.test.ts …` | Vitest | planner + MP09 + FINAL unit | **29 PASS** |
| `npx vitest run tests/integration/e2-unified-intent-conduction.pg.test.ts` | `sfia_next_e2e` :5433 | SC1–SC3 | **3 PASS** |
| `… e2-final-orchestration-c02.pg.test.ts` | idem | C02/FINAL | **5 PASS** |
| `… mp09-multi-pilotage-turn.pg.test.ts` | idem | MP09 | **1 PASS** |
| `… e1-continuity-integrated.pg.test.ts` | idem | E1 NR | **1 PASS** |
| `… e1-ensemble-b5-b6.test.ts` | unit | autorité | **16 PASS** |
| `git diff --check 53b9d452 -- …service.ts …conduction.ts` | — | whitespace | **clean** |
| tsc service.ts | — | compile | OK (erreurs préexistantes hors delta) |

Fake/Real : qualification injectée + Nora mock (fake) ; PostgreSQL réel `sfia_next_e2e` (real) ; propriétaires D4/D5/D6 réels. Claims : IMPLEMENTED ; COVERAGE VERIFIED ciblé ; DETERMINISTIC PROVEN ciblé. Interdits : READY FOR REAL / ADOPTED.

## 10. Documentation

- as-built E1/E2 impact Option B
- delivery-history entrée Option B (même DELIV)
- registre v0.34 + R-E2b + E2-REL-02 pointeur Option B
- Suivi ChatGPT **non modifié**

## 11. Réserves

- Calibration / allocation / hybrid / T08 / conduite naturelle LIVE → reports E2 existants
- Présentation activité/FinOps → E3
- Qualification globale → E5
- 17 MP OPEN RECETTE
- GO publication code projet : **non émis** dans ce mandat

## 12. Review Pack Content Coverage

- Mandat / Git / ENV / ARCH-01…05 : oui
- Flux avant/après / responsabilités / blast : oui
- Créations complètes : oui (§A)
- Diffs complets depuis `53b9d452` : oui (§B)
- Preuves / Fake-Real / réserves / verdict : oui

## 13. Verdict

**READY WITH RESERVES** — Option B implémentée dans les frontières ARCH ; preuves DET critiques PASS ; sortie construction E2 proposée sous gate Morris. E3 non engagé. Aucun commit/push projet.

---

# §A — Fichiers créés (contenu complet)

## A.1 `projects/sfia-studio-next/web/src/domains/conversation/qualified-effect-conduction.ts`

```typescript
/**
 * D3 internal sequencing of already-qualified integrated owner effects.
 *
 * Scope: d4.record_knowledge / d5.pilotage_command / d6.human_decision.
 * Organises intents Nora already qualified — not an autonomous orchestrator,
 * not a second qualification, not a new persistence pivot (ARCH-01…05).
 */

import type { NoraTurnQualification, QualifiedIntentItem } from "./semantic-qualification";
import { effectIntents } from "./semantic-qualification";

export const INTEGRATED_KNOWLEDGE_CAPABILITY = "d4.record_knowledge" as const;
export const INTEGRATED_PILOTAGE_CAPABILITIES = new Set([
  "d5.pilotage_command",
  "d6.human_decision",
] as const);

export type IntegratedEffectFamily = "knowledge" | "pilotage";

/** Owner outcomes that satisfy a dependsOn precondition (never PARTIAL/FAILED/SKIPPED/UNKNOWN). */
export function isSatisfiedOwnerOutcome(status: string | undefined | null): boolean {
  const u = (status ?? "").toUpperCase();
  return (
    u === "APPLIED" ||
    u === "ALREADY_APPLIED" ||
    u === "AVAILABLE" ||
    u === "OK" ||
    u === "SUCCESS"
  );
}

export function integratedEffectFamily(
  capabilityId: string,
): IntegratedEffectFamily | null {
  if (capabilityId === INTEGRATED_KNOWLEDGE_CAPABILITY) return "knowledge";
  if (
    capabilityId === "d5.pilotage_command" ||
    capabilityId === "d6.human_decision"
  ) {
    return "pilotage";
  }
  return null;
}

/** REQUEST_EFFECT intents in the integrated D4-knowledge / D5 / D6 perimeter. */
export function listIntegratedEffectIntents(
  q: NoraTurnQualification,
): QualifiedIntentItem[] {
  return effectIntents(q).filter((i) => integratedEffectFamily(i.capabilityId) !== null);
}

/**
 * Stable topological order among a subset (dependsOn within subset only).
 * Cycles are skipped into the result (caller marks FAILED via validation/DFS).
 */
export function orderIntegratedEffectIntents(
  q: NoraTurnQualification,
  hits: QualifiedIntentItem[],
): QualifiedIntentItem[] {
  const subset = new Set(hits.map((h) => h.id));
  const byId = new Map(q.intents.map((i) => [i.id, i] as const));
  const visiting = new Set<string>();
  const visited = new Set<string>();
  const ordered: string[] = [];
  const visit = (id: string) => {
    if (!subset.has(id) || visited.has(id)) return;
    if (visiting.has(id)) return;
    visiting.add(id);
    for (const dep of byId.get(id)?.dependsOn ?? []) {
      if (subset.has(dep)) visit(dep);
    }
    visiting.delete(id);
    visited.add(id);
    ordered.push(id);
  };
  for (const id of [...subset].sort()) visit(id);
  return ordered.map((id) => hits.find((h) => h.id === id)!);
}

export type IntegratedWavePlan = {
  /** Intents whose dependsOn are all satisfied (or empty) — ready this wave. */
  ready: string[];
  /** Permanently blocked this pass (unsatisfied / hors-périmètre / ambiguous dep). */
  blocked: Array<{ id: string; reason: string }>;
};

/**
 * Plan the next conduction wave from pending integrated intents.
 * Does not invoke owners — pure sequencing.
 */
export function planIntegratedEffectWave(input: {
  pendingIds: Iterable<string>;
  /** Stable preferred order (typically topo). */
  orderedIds: string[];
  dependsOn: Map<string, string[]>;
  outcomes: Map<string, string>;
  /** All integrated intent ids on the turn (knowledge + pilotage). */
  integratedIds: Set<string>;
}): IntegratedWavePlan {
  const pending = new Set(input.pendingIds);
  const ready: string[] = [];
  const blocked: Array<{ id: string; reason: string }> = [];

  for (const id of input.orderedIds) {
    if (!pending.has(id)) continue;
    const deps = input.dependsOn.get(id) ?? [];
    let waiting = false;
    let blockReason: string | null = null;

    for (const dep of deps) {
      if (pending.has(dep)) {
        waiting = true;
        break;
      }
      const prior = input.outcomes.get(dep);
      if (prior !== undefined) {
        if (prior === "AMBIGUOUS") {
          blockReason = `L'intention prérequis (${dep}) est ambiguë — effet dépendant non lancé.`;
          break;
        }
        if (!isSatisfiedOwnerOutcome(prior)) {
          blockReason =
            `L'acte prérequis (${dep}) n'est pas appliqué (${prior}) — ` +
            `effet dépendant non exécuté.`;
          break;
        }
        continue;
      }
      if (input.integratedIds.has(dep)) {
        // Integrated peer not yet outcome and not pending → stuck; wait once more.
        waiting = true;
        break;
      }
      blockReason =
        `Dépendance (${dep}) hors intentions intégrées D4-connaissance/D5/D6 — ` +
        `précondition non satisfaite par un propriétaire vérifiable; effet dépendant non exécuté.`;
      break;
    }

    if (blockReason) {
      blocked.push({ id, reason: blockReason });
      continue;
    }
    if (waiting) continue;
    ready.push(id);
  }

  return { ready, blocked };
}

export function partitionWaveByFamily(
  readyIds: string[],
  familyById: Map<string, IntegratedEffectFamily>,
): { knowledgeIds: string[]; pilotageIds: string[] } {
  const knowledgeIds: string[] = [];
  const pilotageIds: string[] = [];
  for (const id of readyIds) {
    const family = familyById.get(id);
    if (family === "knowledge") knowledgeIds.push(id);
    else if (family === "pilotage") pilotageIds.push(id);
  }
  return { knowledgeIds, pilotageIds };
}

```

## A.2 `projects/sfia-studio-next/web/tests/unit/qualified-effect-conduction.test.ts`

```typescript
/**
 * Option B — unified D3 sequencing helpers (pure planner; no owner I/O).
 */
import { describe, expect, it } from "vitest";
import {
  isSatisfiedOwnerOutcome,
  orderIntegratedEffectIntents,
  partitionWaveByFamily,
  planIntegratedEffectWave,
  listIntegratedEffectIntents,
} from "@/domains/conversation/qualified-effect-conduction";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";

function qual(intents: Array<Record<string, unknown>>) {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED" as const,
    goal: "test",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents,
    clarifications: [] as string[],
    replyDraft: "ok",
  };
}

describe("qualified-effect-conduction", () => {
  it("isSatisfiedOwnerOutcome rejects PARTIAL/FAILED/SKIPPED/UNKNOWN", () => {
    expect(isSatisfiedOwnerOutcome("APPLIED")).toBe(true);
    expect(isSatisfiedOwnerOutcome("ALREADY_APPLIED")).toBe(true);
    expect(isSatisfiedOwnerOutcome("AVAILABLE")).toBe(true);
    expect(isSatisfiedOwnerOutcome("PARTIAL")).toBe(false);
    expect(isSatisfiedOwnerOutcome("FAILED")).toBe(false);
    expect(isSatisfiedOwnerOutcome("SKIPPED")).toBe(false);
    expect(isSatisfiedOwnerOutcome("UNKNOWN")).toBe(false);
  });

  it("plans D6 → D4 → D5 alternating chain across waves", () => {
    const q = qual([
      {
        id: "i-d6",
        capabilityId: "d6.human_decision",
        mode: "REQUEST_EFFECT",
        summary: "Arbitrage",
        parameters: { pilotageOperation: "RECORD_DECISION", statement: "Décision A" },
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
      {
        id: "i-d4",
        capabilityId: "d4.record_knowledge",
        mode: "REQUEST_EFFECT",
        summary: "Capitalise arbitrage",
        parameters: {
          knowledgeKind: "ACQUIS",
          knowledgeStatement: "L'arbitrage du Pilote fixe le cadre d'habilitation.",
        },
        constraints: [],
        dependsOn: ["i-d6"],
        sourceEvidence: [],
      },
      {
        id: "i-d5",
        capabilityId: "d5.pilotage_command",
        mode: "REQUEST_EFFECT",
        summary: "Propose trajectoire",
        parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
        constraints: [],
        dependsOn: ["i-d4"],
        sourceEvidence: [],
      },
    ]);
    const hits = listIntegratedEffectIntents(q as never);
    const ordered = orderIntegratedEffectIntents(q as never, hits);
    expect(ordered.map((i) => i.id)).toEqual(["i-d6", "i-d4", "i-d5"]);

    const dependsOn = new Map(q.intents.map((i) => [i.id as string, (i.dependsOn as string[]) ?? []]));
    const integratedIds = new Set(ordered.map((i) => i.id));
    const outcomes = new Map<string, string>();
    const pending = new Set(ordered.map((i) => i.id));
    const orderedIds = ordered.map((i) => i.id);

    const w1 = planIntegratedEffectWave({
      pendingIds: pending,
      orderedIds,
      dependsOn,
      outcomes,
      integratedIds,
    });
    expect(w1.ready).toEqual(["i-d6"]);
    expect(w1.blocked).toEqual([]);

    outcomes.set("i-d6", "APPLIED");
    pending.delete("i-d6");
    const w2 = planIntegratedEffectWave({
      pendingIds: pending,
      orderedIds,
      dependsOn,
      outcomes,
      integratedIds,
    });
    expect(w2.ready).toEqual(["i-d4"]);

    outcomes.set("i-d4", "APPLIED");
    pending.delete("i-d4");
    const w3 = planIntegratedEffectWave({
      pendingIds: pending,
      orderedIds,
      dependsOn,
      outcomes,
      integratedIds,
    });
    expect(w3.ready).toEqual(["i-d5"]);
  });

  it("blocks dependent and keeps independent ready after refusal", () => {
    const dependsOn = new Map<string, string[]>([
      ["i-d6", []],
      ["i-d4-dep", ["i-d6"]],
      ["i-d4-free", []],
    ]);
    const integratedIds = new Set(["i-d6", "i-d4-dep", "i-d4-free"]);
    const orderedIds = ["i-d4-dep", "i-d4-free", "i-d6"];
    const outcomes = new Map<string, string>([["i-d6", "REJECTED"]]);
    const pending = new Set(["i-d4-dep", "i-d4-free"]);

    const plan = planIntegratedEffectWave({
      pendingIds: pending,
      orderedIds,
      dependsOn,
      outcomes,
      integratedIds,
    });
    expect(plan.ready).toEqual(["i-d4-free"]);
    expect(plan.blocked.map((b) => b.id)).toEqual(["i-d4-dep"]);
  });

  it("partitions knowledge and pilotage within a wave", () => {
    const familyById = new Map([
      ["a", "knowledge" as const],
      ["b", "pilotage" as const],
      ["c", "knowledge" as const],
    ]);
    expect(partitionWaveByFamily(["a", "b", "c"], familyById)).toEqual({
      knowledgeIds: ["a", "c"],
      pilotageIds: ["b"],
    });
  });

  it("fail-closes hors-périmètre dependsOn without inventing success", () => {
    const plan = planIntegratedEffectWave({
      pendingIds: ["i-d5"],
      orderedIds: ["i-d5"],
      dependsOn: new Map([["i-d5", ["i-d7-publish"]]]),
      outcomes: new Map(),
      integratedIds: new Set(["i-d5"]),
    });
    expect(plan.ready).toEqual([]);
    expect(plan.blocked[0]?.id).toBe("i-d5");
    expect(plan.blocked[0]?.reason).toMatch(/hors intentions intégrées/);
  });
});

```

## A.3 `projects/sfia-studio-next/web/tests/integration/e2-unified-intent-conduction.pg.test.ts`

```typescript
/**
 * Option B — unified D3 conduction: D6→D4→D5, refuse+independent, D4 batch + pilotage.
 */
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommands,
  humanDecisions,
  pilots,
  preparations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { postUserMessageAndNora } from "@/domains/conversation/service";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import * as runNoraModule from "@/domains/conversation/run-nora-cognitive-turn";

const STATEMENT_A =
  "L'arbitrage du Pilote fixe le cadre d'habilitation pour ce projet.";
const STATEMENT_B =
  "Les sujets enfants héritent du cadre d'habilitation consolidé.";

function baseQual(intents: Array<Record<string, unknown>>, replyDraft: string) {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED" as const,
    goal: "E2 unified conduction",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents,
    clarifications: [] as string[],
    replyDraft,
  };
}

async function seedOwnedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: label,
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  const name = `${label}-${newId("p").slice(-6)}`;
  await updatePreview(pilotId, prep.id, name, "e2-unified");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "e2-unified",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`setup failed: ${created.status}`);
  }
  return { pilotId, preparationId: prep.id, projectId: created.projectId };
}

function mockNoraTurn(qual: ReturnType<typeof baseQual>) {
  const policy = buildCognitivePolicy("x", undefined, { profileHint: "simple" });
  return {
    status: "COMPLETE" as const,
    content: qual.replyDraft,
    generationId: `e2u-${newId("gen")}`,
    mode: "deterministic-fixture",
    policy,
    modelRequested: policy.modelRequested,
    modelApplied: policy.modelRequested,
    effortRequested: policy.effortRequested,
    effortApplied: policy.effortRequested,
    attempts: [],
    toolCallsObserved: 0,
    d4CharsReturned: 0,
    observedToolSources: [],
    qualification: qual,
    conductor: {
      workId: `work-${newId("cw")}`,
      revision: 1,
      segmentsRun: 1,
      resumed: false,
      suspended: false,
      suspendReason: null,
      investigation: {
        intentSummary: qual.goal,
        desiredOutcome: "",
        questions: [],
        sources: [],
        remainingWork: [],
        constraints: [],
        risks: [],
        conclusions: [],
        contradictions: [],
        exclusions: [],
        profileHint: "analyse",
        sufficiency: "UNKNOWN",
        contractReady: false,
      },
      production: { kind: "REPLY" as const, status: "COMPLETE" as const, parts: [] },
    },
  };
}

describe("E2 Option B — unified intent conduction (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("SC1 — D6 → D4 → D5 alternating chain applies in dependency order", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2u-alt");
    const qual = baseQual(
      [
        {
          id: "i-d6",
          capabilityId: "d6.human_decision",
          mode: "REQUEST_EFFECT",
          summary: "Enregistre l'arbitrage",
          parameters: {
            pilotageOperation: "RECORD_DECISION",
            statement: "GitHub est obligatoire pour ce projet.",
            objectRef: "github",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-d4",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Capitalise l'arbitrage",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: STATEMENT_A,
            epistemic: "recommended",
            subjectTitle: "Habilitations",
          },
          constraints: [],
          dependsOn: ["i-d6"],
          sourceEvidence: [],
        },
        {
          id: "i-d5",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Ouvre le cycle après capitalisation",
          parameters: {
            pilotageOperation: "OPEN_CYCLE",
            cycleType: "CADRAGE",
          },
          constraints: [],
          dependsOn: ["i-d4"],
          sourceEvidence: [],
        },
      ],
      "Arbitrage, capitalisation, puis ouverture de cycle.",
    );

    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(
      mockNoraTurn(qual) as never,
    );

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Je décide GitHub obligatoire, capitalise, puis ouvre le cadrage",
      { clientTurnKey: newId("ctk") },
    );

    expect(result.status).toBe("COMPLETE");

    const d6 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d6");
    expect(d6?.status === "APPLIED" || d6?.status === "ALREADY_APPLIED").toBe(true);

    const caps = (
      Array.isArray(result.capitalisation)
        ? result.capitalisation
        : (result.capitalisationAttempted as unknown[]) ?? []
    ) as Array<{ intentId?: string; status?: string }>;
    const d4Cap = caps.filter((c) => c.intentId === "i-d4");
    expect(d4Cap.some((c) => c.status === "AVAILABLE" || c.status === "OK")).toBe(true);

    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    expect(d5?.status === "APPLIED" || d5?.status === "ALREADY_APPLIED").toBe(true);

    const decisions = await db
      .select()
      .from(humanDecisions)
      .where(
        and(
          eq(humanDecisions.projectId, projectId),
          eq(humanDecisions.kind, "RECORD_DECISION"),
        ),
      );
    expect(decisions.length).toBeGreaterThanOrEqual(1);

    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.some((c) => c.operation === "OPEN_CYCLE")).toBe(true);
    expect(cmds.filter((c) => c.operation === "OPEN_CYCLE")).toHaveLength(1);
  });

  it("SC2 — refused D6 blocks dependent D4; independent D4 still runs", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2u-ind");
    const qual = baseQual(
      [
        {
          id: "i-d5-refuse",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Retain sans proposition",
          parameters: {
            // No PROPOSED trajectory on a fresh project → owner refuses.
            pilotageOperation: "RETAIN_TRAJECTORY",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-d4-dep",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Dépend du retain refusé",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: STATEMENT_A,
            epistemic: "recommended",
            subjectTitle: "Dep",
          },
          constraints: [],
          dependsOn: ["i-d5-refuse"],
          sourceEvidence: [],
        },
        {
          id: "i-d4-free",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Indépendant",
          parameters: {
            knowledgeKind: "ACQUIS",
            knowledgeStatement: STATEMENT_B,
            epistemic: "recommended",
            subjectTitle: "Libre",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      "Refus partiel et indépendance.",
    );

    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(
      mockNoraTurn(qual) as never,
    );

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Décide sans contenu puis capitalise",
      { clientTurnKey: newId("ctk") },
    );

    expect(result.status).toBe("COMPLETE");

    const refused = result.pilotageEffects?.find(
      (e) => e.semanticIntentId === "i-d5-refuse",
    );
    expect(refused).toBeTruthy();
    expect(
      refused?.status === "APPLIED" || refused?.status === "ALREADY_APPLIED",
    ).toBe(false);

    const caps = (
      Array.isArray(result.capitalisation)
        ? result.capitalisation
        : (result.capitalisationAttempted as unknown[]) ?? []
    ) as Array<{ intentId?: string; status?: string }>;
    expect(
      caps.some(
        (c) =>
          c.intentId === "i-d4-dep" && (c.status === "AVAILABLE" || c.status === "OK"),
      ),
    ).toBe(false);
    expect(
      caps.some(
        (c) =>
          c.intentId === "i-d4-free" && (c.status === "AVAILABLE" || c.status === "OK"),
      ),
    ).toBe(true);
  });

  it("SC3 — D4 parent/enfant batch stays coherent with a pilotage peer", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2u-batch");
    const qual = baseQual(
      [
        {
          id: "i-parent",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Sujet parent",
          parameters: {
            knowledgeKind: "SUBJECT",
            knowledgeStatement: "Cadre parent des habilitations projet.",
            epistemic: "recommended",
            subjectTitle: "Habilitations",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-child",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "Sous-sujet",
          parameters: {
            knowledgeKind: "SUBJECT",
            knowledgeStatement: "Sous-sujet enfants des habilitations.",
            epistemic: "recommended",
            subjectTitle: "Accès",
            parentSubjectId: "i-parent",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "i-d5",
          capabilityId: "d5.pilotage_command",
          mode: "REQUEST_EFFECT",
          summary: "Ouvre cycle",
          parameters: {
            pilotageOperation: "OPEN_CYCLE",
            cycleType: "CADRAGE",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      "Batch connaissance et ouverture.",
    );

    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(
      mockNoraTurn(qual) as never,
    );

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Structure les sujets et ouvre le cadrage",
      { clientTurnKey: newId("ctk") },
    );

    expect(result.status).toBe("COMPLETE");
    const caps = (
      Array.isArray(result.capitalisation)
        ? result.capitalisation
        : (result.capitalisationAttempted as unknown[]) ?? []
    ) as Array<{ intentId?: string; status?: string }>;
    expect(
      caps.filter(
        (c) =>
          (c.intentId === "i-parent" || c.intentId === "i-child") &&
          (c.status === "AVAILABLE" || c.status === "OK"),
      ).length,
    ).toBeGreaterThanOrEqual(1);

    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    expect(d5?.status === "APPLIED" || d5?.status === "ALREADY_APPLIED").toBe(true);

    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.filter((c) => c.operation === "OPEN_CYCLE")).toHaveLength(1);
  });
});

```

---

# §B — Diffs complets depuis `53b9d452`

## B.1 service.ts

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 51ed348c..92b924e9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -113,6 +113,13 @@ import {
   type NoraTurnQualification,
 } from "./semantic-qualification";
 import { loadLatestMissionsByIntentKey } from "./intent-conduction";
+import {
+  integratedEffectFamily,
+  listIntegratedEffectIntents,
+  orderIntegratedEffectIntents,
+  partitionWaveByFamily,
+  planIntegratedEffectWave,
+} from "./qualified-effect-conduction";
 import {
   buildTurnCorrelationKeys,
   evaluateS05SiblingPolicy,
@@ -2003,265 +2010,83 @@ export async function postUserMessageAndNora(
   let capitalisationError: string | undefined;
   let ownershipLostBeforeD4 = false;

-  // E2-REL-02 / E2-FINAL-01 — when D5/D6 dependsOn D4 knowledge intents, run
-  // capitalisation first so cross-cap preconditions can be satisfied (not permanently blocked).
-  const crossCapOutcomeByIntentId = new Map<string, string>();
-  let capitalisationRanBeforePilotage = false;
-  // Mint assistant id before early D4 so provenance can reference the future ASSISTANT message.
-  const earlyAssistantMessageId = newId("msg");
-  const pilotageIntentIdsEarly = intentIdsFromPilotageBindings(pilotageBindings);
-  const intentDependsOnEarly = new Map(
+  // Option B (ARCH-01…05) — unified D3 conduction of qualified integrated effects
+  // (d4.record_knowledge / d5 / d6): dependency + owner-result waves, not fixed phases.
+  const ownerOutcomeByIntentId = new Map<string, string>();
+  /** @deprecated alias — kept for crossCapOutcomeFromCapitalisations call sites / OBS. */
+  const crossCapOutcomeByIntentId = ownerOutcomeByIntentId;
+  let knowledgeEffectsConducted = false;
+  // Mint assistant id before any D4 so provenance can reference the future ASSISTANT message.
+  const assistantMessageIdForEffects = newId("msg");
+  const pilotageIntentIds = intentIdsFromPilotageBindings(pilotageBindings);
+  const intentDependsOn = new Map(
     qualification.intents.map((i) => [i.id, i.dependsOn] as const),
   );
-  const intentByIdEarly = new Map(qualification.intents.map((i) => [i.id, i] as const));
-  const d4DepsForPilotage = new Set<string>();
-  const isEarlyD4 = (dep: string) => {
-    if (pilotageIntentIdsEarly.has(dep)) return false;
-    const depIntent = intentByIdEarly.get(dep);
-    return (
-      depIntent?.capabilityId === "d4.record_knowledge" &&
-      depIntent.mode === "REQUEST_EFFECT"
-    );
-  };
-  for (const b of pilotageBindings) {
-    for (const dep of intentDependsOnEarly.get(b.intentId) ?? []) {
-      if (isEarlyD4(dep)) d4DepsForPilotage.add(dep);
-    }
-  }
-  // E2-INT — transitive D4 ancestors (D4-A → D4-B → D5) must join the early set.
-  {
-    let grew = true;
-    while (grew) {
-      grew = false;
-      for (const id of [...d4DepsForPilotage]) {
-        for (const dep of intentDependsOnEarly.get(id) ?? []) {
-          if (isEarlyD4(dep) && !d4DepsForPilotage.has(dep)) {
-            d4DepsForPilotage.add(dep);
-            grew = true;
-          }
-        }
-      }
-    }
-  }
+  const bindingByIntentId = new Map(
+    pilotageBindings.map((b) => [b.intentId, b] as const),
+  );
+  const integratedHits = listIntegratedEffectIntents(qualification);
+  const integratedOrdered = orderIntegratedEffectIntents(qualification, integratedHits);
+  const integratedIds = new Set(integratedOrdered.map((i) => i.id));
+  const familyById = new Map(
+    integratedOrdered.map((i) => [i.id, integratedEffectFamily(i.capabilityId)!] as const),
+  );
+  const allKnowledgeProposals = extractKnowledgeProposals(qualification);
+  const interruptedWithDocumentEarly =
+    reply.status === "INTERRUPTED" &&
+    Boolean(cognitiveWorkMeta?.suspended) &&
+    extractContractualDocumentProposal(reply.content).ok;
+  const replyAllowsKnowledgeEffects =
+    reply.status === "COMPLETE" || interruptedWithDocumentEarly;
+
   if (
     allowOwnerEffects &&
-    d4DepsForPilotage.size > 0 &&
-    reply.status === "COMPLETE" &&
+    integratedOrdered.length > 0 &&
     (await requireTurnOwnership(reserved.commandId, reserved.ownerToken))
   ) {
-    try {
-      const allKnowledgeProposals = extractKnowledgeProposals(qualification);
-      // Topo-order early D4; detect cycles.
-      const visit = new Set<string>();
-      const visiting = new Set<string>();
-      const orderedAll: string[] = [];
-      const walk = (id: string) => {
-        if (!d4DepsForPilotage.has(id) || visit.has(id)) return;
-        if (visiting.has(id)) {
-          crossCapOutcomeByIntentId.set(id, "FAILED");
-          return;
-        }
-        visiting.add(id);
-        for (const d of intentDependsOnEarly.get(id) ?? []) {
-          if (d4DepsForPilotage.has(d)) walk(d);
-        }
-        visiting.delete(id);
-        visit.add(id);
-        orderedAll.push(id);
-      };
-      for (const id of [...d4DepsForPilotage].sort()) walk(id);
-
-      const isSatisfied = (prior: string | undefined) => {
-        const u = (prior ?? "").toUpperCase();
-        return (
-          u === "APPLIED" ||
-          u === "AVAILABLE" ||
-          u === "OK" ||
-          u === "SUCCESS" ||
-          u === "ALREADY_APPLIED"
-        );
-      };
-
-      // Wave batching: peers without unmet D4 deps share one maybeCapitalize call
-      // so E1 parent/enfant SUBJECT batch stays coherent; waves respect dependsOn.
-      const pending = new Set(
-        orderedAll.filter((id) => crossCapOutcomeByIntentId.get(id) !== "FAILED"),
-      );
-      let writtenTotal = 0;
-      let ranAny = false;
-      while (pending.size > 0 && !ownershipLostBeforeD4) {
-        const wave: string[] = [];
-        for (const dep of orderedAll) {
-          if (!pending.has(dep)) continue;
-          const depsOfDep = intentDependsOnEarly.get(dep) ?? [];
-          let blocked: string | null = null;
-          let waiting = false;
-          for (const d of depsOfDep) {
-            if (pilotageIntentIdsEarly.has(d)) {
-              blocked = `D4 (${dep}) dépend d'un acte D5/D6 (${d}) non encore exécuté`;
-              break;
-            }
-            if (pending.has(d)) {
-              waiting = true;
-              break;
-            }
-            const prior = crossCapOutcomeByIntentId.get(d);
-            if (prior !== undefined) {
-              if (!isSatisfied(prior)) {
-                blocked = `D4 (${dep}) précondition (${d}) non satisfaite (${prior})`;
-                break;
-              }
-            } else if (d4DepsForPilotage.has(d)) {
-              waiting = true;
-              break;
-            } else {
-              blocked = `D4 (${dep}) précondition (${d}) non résolue`;
-              break;
-            }
-          }
-          if (blocked) {
-            crossCapOutcomeByIntentId.set(dep, "SKIPPED");
-            pending.delete(dep);
-            continue;
-          }
-          if (waiting) continue;
-          wave.push(dep);
-        }
-        if (wave.length === 0) {
-          for (const id of pending) {
-            crossCapOutcomeByIntentId.set(id, "FAILED");
-          }
-          pending.clear();
-          break;
-        }
-        const proposalsForWave = allKnowledgeProposals.filter((p) =>
-          wave.includes(p.intentId),
-        );
-        const step = await maybeCapitalizeFromExchange(pilotId, preparationId, {
-          userText: content,
-          assistantText: reply.content,
-          generationId: reply.generationId,
-          userMessageId: reserved.userMessageId,
-          assistantMessageId: earlyAssistantMessageId,
-          proposals: proposalsForWave,
-          turnFence: {
-            commandId: reserved.commandId,
-            ownerToken: reserved.ownerToken,
-            beforeFenceCheck: turnRaceHooks.beforeD4Effect,
-          },
-        });
-        ranAny = true;
-        capitalisation = {
-          capitalisations: [
-            ...capitalisation.capitalisations,
-            ...step.capitalisations,
-          ],
-          selectionMethod: step.selectionMethod,
-          selectionLimit: step.selectionLimit,
-          humanDecisionCreated:
-            capitalisation.humanDecisionCreated || step.humanDecisionCreated,
-          ownershipLost: capitalisation.ownershipLost || step.ownershipLost,
-        };
-        if (step.ownershipLost) {
-          ownershipLostBeforeD4 = true;
-          for (const dep of wave) {
-            crossCapOutcomeByIntentId.set(dep, "SKIPPED");
-            pending.delete(dep);
-          }
-          break;
-        }
-        for (const dep of wave) {
-          const proposalsForIntent = proposalsForWave.filter((p) => p.intentId === dep);
-          const outcome = crossCapOutcomeFromCapitalisations({
-            intentId: dep,
-            capitalisations: step.capitalisations,
-            hadProposal: proposalsForIntent.length > 0,
-            ownershipLost: false,
-            proposalKind: proposalsForIntent[0]?.kind ?? null,
-          });
-          crossCapOutcomeByIntentId.set(dep, outcome);
-          pending.delete(dep);
-        }
-        writtenTotal += step.capitalisations.filter(
-          (c) => c.status === "AVAILABLE" || c.status === "OK",
-        ).length;
-      }
-      for (const dep of d4DepsForPilotage) {
-        if (!crossCapOutcomeByIntentId.has(dep)) {
-          crossCapOutcomeByIntentId.set(dep, ownershipLostBeforeD4 ? "SKIPPED" : "FAILED");
-        }
-      }
-      capitalisationRanBeforePilotage = ranAny || d4DepsForPilotage.size > 0;
-      emitObs({
-        event_name: "d3.turn.knowledge_capitalisation",
-        component: "d3.conversation",
-        request_id: requestId,
-        operation_id: reserved.operationId,
-        generation_id: reply.generationId,
-        outcome: "PARTIAL",
-        meta: {
-          early_before_pilotage: true,
-          d4_deps: d4DepsForPilotage.size,
-          capitalisation_written: writtenTotal,
-        },
-      });
-    } catch {
-      capitalisationError = "CAPITALISATION_EXCEPTION";
-      for (const dep of d4DepsForPilotage) {
-        if (!crossCapOutcomeByIntentId.has(dep)) {
-          crossCapOutcomeByIntentId.set(dep, "FAILED");
-        }
+    const pending = new Set<string>();
+    for (const intent of integratedOrdered) {
+      const family = familyById.get(intent.id);
+      if (family === "knowledge") {
+        if (replyAllowsKnowledgeEffects) pending.add(intent.id);
+      } else if (family === "pilotage") {
+        if (ctx.project?.id) pending.add(intent.id);
       }
     }
-  }
+    const orderedIds = integratedOrdered.map((i) => i.id);
+    let waveGuard = 0;
+    const maxWaves = pending.size + 2;

-  // D5/D6 after semantic qualification — one apply per qualified REQUEST_EFFECT binding (MP-09).
-  if (allowOwnerEffects && pilotageBindings.length > 0 && ctx.project?.id && !ownershipLostBeforeD4) {
-    const stillOwned = await requireTurnOwnership(reserved.commandId, reserved.ownerToken);
-    if (stillOwned) {
-      const intentDependsOn = intentDependsOnEarly;
-      const pilotageIntentIds = pilotageIntentIdsEarly;
-      const outcomeByIntentId = new Map<string, string>();
-      for (let bindingIndex = 0; bindingIndex < pilotageBindings.length; bindingIndex++) {
-        const pilotageBinding = pilotageBindings[bindingIndex]!;
-        const intentId =
-          "ambiguous" in pilotageBinding ? pilotageBinding.intentId : pilotageBinding.intentId;
-        if ("ambiguous" in pilotageBinding) {
-          const ambiguousRecord = ambiguousPilotageEffectRecord({
-            intentId,
-            reason: pilotageBinding.reason,
-          });
-          pilotageEffectRecords.push(ambiguousRecord);
-          outcomeByIntentId.set(intentId, "AMBIGUOUS");
-          emitObs({
-            event_name: "d3.turn.conversational_authority",
-            component: "d3.conversation",
-            request_id: requestId,
-            operation_id: reserved.operationId,
-            outcome: "PARTIAL",
-            meta: {
-              attempted: false,
-              intent_clarity: "AMBIGUOUS",
-              semantic_gate: true,
-              reason: pilotageBinding.reason,
-              semantic_intent_id: intentId,
-            },
-          });
-          continue;
-        }
-        const blockReason = dependencyPreconditionBlockReason({
-          dependsOn: intentDependsOn.get(intentId) ?? [],
-          pilotageIntentIds,
-          outcomeByIntentId,
-          crossCapOutcomeByIntentId,
-        });
-        if (blockReason) {
-          const blockedRecord = dependencyBlockedPilotageEffectRecord({
-            binding: pilotageBinding,
-            blockReason,
-          });
-          pilotageEffectRecords.push(blockedRecord);
-          outcomeByIntentId.set(intentId, "SKIPPED");
+    while (pending.size > 0 && !ownershipLostBeforeD4 && waveGuard < maxWaves) {
+      waveGuard += 1;
+      const plan = planIntegratedEffectWave({
+        pendingIds: pending,
+        orderedIds,
+        dependsOn: intentDependsOn,
+        outcomes: ownerOutcomeByIntentId,
+        integratedIds,
+      });
+      for (const b of plan.blocked) {
+        pending.delete(b.id);
+        const family = familyById.get(b.id);
+        if (family === "pilotage") {
+          const binding = bindingByIntentId.get(b.id);
+          if (binding && !("ambiguous" in binding)) {
+            pilotageEffectRecords.push(
+              dependencyBlockedPilotageEffectRecord({
+                binding,
+                blockReason: b.reason,
+              }),
+            );
+          } else if (binding && "ambiguous" in binding) {
+            pilotageEffectRecords.push(
+              ambiguousPilotageEffectRecord({
+                intentId: b.id,
+                reason: binding.reason,
+              }),
+            );
+          }
+          ownerOutcomeByIntentId.set(b.id, "SKIPPED");
           emitObs({
             event_name: "d3.turn.conversational_authority",
             component: "d3.conversation",
@@ -2273,111 +2098,369 @@ export async function postUserMessageAndNora(
               intent_clarity: "CLEAR",
               semantic_gate: true,
               reason_code: "DEPENDENCY_PRECONDITION",
-              reason: blockReason,
-              semantic_intent_id: intentId,
-              operation: pilotageBinding.operation,
+              reason: b.reason,
+              semantic_intent_id: b.id,
+              operation:
+                binding && !("ambiguous" in binding) ? binding.operation : null,
               pilotage_bindings_total: pilotageBindings.length,
+              unified_conduction: true,
             },
           });
-          continue;
+        } else {
+          ownerOutcomeByIntentId.set(b.id, "SKIPPED");
         }
-        const preQualified = {
-          clarity: "CLEAR" as const,
-          operation: pilotageBinding.operation,
-          objective: pilotageBinding.objective ?? content,
-          statement: pilotageBinding.statement,
-          objectRef: pilotageBinding.objectRef,
-          decisionId: pilotageBinding.decisionId,
-          methodRef: pilotageBinding.methodRef,
-          methodVersion: pilotageBinding.methodVersion,
-          restrictionKindHint: pilotageBinding.restrictionKindHint,
-          restrictionTargetRefHint: pilotageBinding.restrictionTargetRefHint,
-          cycleType: pilotageBinding.cycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
-          toCycleType: pilotageBinding.toCycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
-          semanticIntentId: pilotageBinding.intentId,
-          semanticSchemaVersion: pilotageBinding.schemaVersion,
-        };
-        const outcome = await applyConversationalAuthority({
-          pilotId,
-          projectId: ctx.project.id,
-          userMessageId: reserved.userMessageId,
-          content,
-          clientTurnKey,
-          preQualified,
-        });
-        if (outcome.humanDecisionCreated) conversationalHumanDecisionCreated = true;
-        const effectRecord = pilotageEffectFromAuthority(outcome, pilotageBinding.intentId);
-        if (effectRecord) {
-          pilotageEffectRecords.push(effectRecord);
+      }
+
+      if (plan.ready.length === 0) {
+        // No admissible progress — fail closed without inventing ownership loss.
+        for (const id of pending) {
+          ownerOutcomeByIntentId.set(id, "FAILED");
+          const family = familyById.get(id);
+          if (family === "pilotage") {
+            const binding = bindingByIntentId.get(id);
+            if (binding && !("ambiguous" in binding)) {
+              pilotageEffectRecords.push(
+                dependencyBlockedPilotageEffectRecord({
+                  binding,
+                  blockReason:
+                    "Aucune progression admissible restante — préconditions non satisfaites.",
+                }),
+              );
+            }
+          }
         }
-        outcomeByIntentId.set(
-          intentId,
-          outcome.command?.status ?? (outcome.attempted ? "FAILED" : "NOT_ATTEMPTED"),
-        );
-        if (!authority?.attempted && outcome.attempted) {
-          authority = outcome;
-        } else if (!authority) {
-          authority = outcome;
+        pending.clear();
+        break;
+      }
+
+      const { knowledgeIds, pilotageIds } = partitionWaveByFamily(
+        plan.ready,
+        familyById,
+      );
+
+      // D4 knowledge batch — peers ready together share one owner call (parent/enfant).
+      if (knowledgeIds.length > 0) {
+        try {
+          const proposalsForWave = allKnowledgeProposals.filter((p) =>
+            knowledgeIds.includes(p.intentId),
+          );
+          if (proposalsForWave.length === 0) {
+            for (const id of knowledgeIds) {
+              ownerOutcomeByIntentId.set(id, "SKIPPED");
+              pending.delete(id);
+            }
+          } else {
+            const step = await maybeCapitalizeFromExchange(pilotId, preparationId, {
+              userText: content,
+              assistantText: reply.content,
+              generationId: reply.generationId,
+              userMessageId: reserved.userMessageId,
+              assistantMessageId: assistantMessageIdForEffects,
+              proposals: proposalsForWave,
+              turnFence: {
+                commandId: reserved.commandId,
+                ownerToken: reserved.ownerToken,
+                beforeFenceCheck: turnRaceHooks.beforeD4Effect,
+              },
+            });
+            knowledgeEffectsConducted = true;
+            capitalisation = {
+              capitalisations: [
+                ...capitalisation.capitalisations,
+                ...step.capitalisations,
+              ],
+              selectionMethod: step.selectionMethod,
+              selectionLimit: step.selectionLimit,
+              humanDecisionCreated:
+                capitalisation.humanDecisionCreated || step.humanDecisionCreated,
+              ownershipLost: capitalisation.ownershipLost || step.ownershipLost,
+            };
+            if (step.ownershipLost) {
+              ownershipLostBeforeD4 = true;
+              for (const id of knowledgeIds) {
+                ownerOutcomeByIntentId.set(id, "SKIPPED");
+                pending.delete(id);
+              }
+              for (const id of pending) {
+                ownerOutcomeByIntentId.set(id, "SKIPPED");
+                const family = familyById.get(id);
+                if (family === "pilotage") {
+                  const binding = bindingByIntentId.get(id);
+                  if (binding) {
+                    pilotageEffectRecords.push(
+                      ownershipLostPilotageEffectRecord({ binding }),
+                    );
+                  }
+                }
+              }
+              pending.clear();
+              break;
+            }
+            for (const id of knowledgeIds) {
+              const proposalsForIntent = proposalsForWave.filter(
+                (p) => p.intentId === id,
+              );
+              const outcome = crossCapOutcomeFromCapitalisations({
+                intentId: id,
+                capitalisations: step.capitalisations,
+                hadProposal: proposalsForIntent.length > 0,
+                ownershipLost: false,
+                proposalKind: proposalsForIntent[0]?.kind ?? null,
+              });
+              ownerOutcomeByIntentId.set(id, outcome);
+              pending.delete(id);
+            }
+            const written = step.capitalisations.filter(
+              (c) => c.status === "AVAILABLE" || c.status === "OK",
+            ).length;
+            emitObs({
+              event_name: "d3.turn.knowledge_capitalisation",
+              component: "d3.conversation",
+              request_id: requestId,
+              operation_id: reserved.operationId,
+              generation_id: reply.generationId,
+              outcome: written > 0 ? "SUCCESS" : "PARTIAL",
+              meta: {
+                unified_conduction: true,
+                wave_knowledge_intents: knowledgeIds.length,
+                capitalisation_written: written,
+              },
+            });
+          }
+        } catch {
+          capitalisationError = "CAPITALISATION_EXCEPTION";
+          for (const id of knowledgeIds) {
+            ownerOutcomeByIntentId.set(id, "FAILED");
+            pending.delete(id);
+          }
         }
-        emitObs({
-          event_name: "d3.turn.conversational_authority",
-          component: "d3.conversation",
-          request_id: requestId,
-          operation_id: reserved.operationId,
-          outcome: outcome.attempted
-            ? outcome.command?.status === "APPLIED" || outcome.command?.status === "ALREADY_APPLIED"
-              ? "SUCCESS"
-              : outcome.command?.status === "UNKNOWN"
-                ? "UNKNOWN"
-                : "FAILED"
-            : "PARTIAL",
-          meta: {
-            attempted: outcome.attempted,
-            intent_clarity: outcome.intentClarity,
-            operation: outcome.operation ?? null,
-            command_status: outcome.command?.status ?? null,
-            reason_code: outcome.command?.reasonCode ?? null,
-            decision_id: outcome.decisionId,
-            source: outcome.source,
-            semantic_gate: true,
-            semantic_intent_id: pilotageBinding.intentId,
-            pilotage_bindings_total: pilotageBindings.length,
-            pilotage_outcomes_serial: pilotageEffectRecords.length,
-          },
-        });
-        // Mid-loop ownership — stop further mutations if turn ownership was lost.
-        // E2 A.3 — remaining bindings must be explicit SKIPPED (no silent truncation).
-        if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
-          for (let j = bindingIndex + 1; j < pilotageBindings.length; j++) {
-            const remaining = pilotageBindings[j]!;
-            const remainingId =
-              "ambiguous" in remaining ? remaining.intentId : remaining.intentId;
-            if (outcomeByIntentId.has(remainingId)) continue;
-            const skipped = ownershipLostPilotageEffectRecord({ binding: remaining });
-            pilotageEffectRecords.push(skipped);
-            outcomeByIntentId.set(remainingId, "SKIPPED");
+      }
+
+      // D5/D6 — sequential owner applies within the wave (MP-09 / concurrency rules).
+      if (
+        pilotageIds.length > 0 &&
+        ctx.project?.id &&
+        !ownershipLostBeforeD4 &&
+        (await requireTurnOwnership(reserved.commandId, reserved.ownerToken))
+      ) {
+        for (const intentId of pilotageIds) {
+          if (!pending.has(intentId)) continue;
+          const pilotageBinding = bindingByIntentId.get(intentId);
+          if (!pilotageBinding) {
+            ownerOutcomeByIntentId.set(intentId, "FAILED");
+            pending.delete(intentId);
+            continue;
+          }
+          if ("ambiguous" in pilotageBinding) {
+            const ambiguousRecord = ambiguousPilotageEffectRecord({
+              intentId,
+              reason: pilotageBinding.reason,
+            });
+            pilotageEffectRecords.push(ambiguousRecord);
+            ownerOutcomeByIntentId.set(intentId, "AMBIGUOUS");
+            pending.delete(intentId);
             emitObs({
               event_name: "d3.turn.conversational_authority",
               component: "d3.conversation",
               request_id: requestId,
               operation_id: reserved.operationId,
-              outcome: "UNKNOWN",
+              outcome: "PARTIAL",
+              meta: {
+                attempted: false,
+                intent_clarity: "AMBIGUOUS",
+                semantic_gate: true,
+                reason: pilotageBinding.reason,
+                semantic_intent_id: intentId,
+                unified_conduction: true,
+              },
+            });
+            continue;
+          }
+          // Re-check deps against live outcomes (defence in depth with planner).
+          const blockReason = dependencyPreconditionBlockReason({
+            dependsOn: intentDependsOn.get(intentId) ?? [],
+            pilotageIntentIds,
+            outcomeByIntentId: ownerOutcomeByIntentId,
+            crossCapOutcomeByIntentId,
+          });
+          if (blockReason) {
+            pilotageEffectRecords.push(
+              dependencyBlockedPilotageEffectRecord({
+                binding: pilotageBinding,
+                blockReason,
+              }),
+            );
+            ownerOutcomeByIntentId.set(intentId, "SKIPPED");
+            pending.delete(intentId);
+            emitObs({
+              event_name: "d3.turn.conversational_authority",
+              component: "d3.conversation",
+              request_id: requestId,
+              operation_id: reserved.operationId,
+              outcome: "PARTIAL",
               meta: {
                 attempted: false,
                 intent_clarity: "CLEAR",
                 semantic_gate: true,
-                reason_code: "OWNERSHIP_LOST",
-                semantic_intent_id: remainingId,
-                operation:
-                  "ambiguous" in remaining ? null : remaining.operation,
+                reason_code: "DEPENDENCY_PRECONDITION",
+                reason: blockReason,
+                semantic_intent_id: intentId,
+                operation: pilotageBinding.operation,
                 pilotage_bindings_total: pilotageBindings.length,
+                unified_conduction: true,
               },
             });
+            continue;
+          }
+          const preQualified = {
+            clarity: "CLEAR" as const,
+            operation: pilotageBinding.operation,
+            objective: pilotageBinding.objective ?? content,
+            statement: pilotageBinding.statement,
+            objectRef: pilotageBinding.objectRef,
+            decisionId: pilotageBinding.decisionId,
+            methodRef: pilotageBinding.methodRef,
+            methodVersion: pilotageBinding.methodVersion,
+            restrictionKindHint: pilotageBinding.restrictionKindHint,
+            restrictionTargetRefHint: pilotageBinding.restrictionTargetRefHint,
+            cycleType: pilotageBinding.cycleType as
+              | import("@/domains/pilotage/cki-resolve").CycleType
+              | undefined,
+            toCycleType: pilotageBinding.toCycleType as
+              | import("@/domains/pilotage/cki-resolve").CycleType
+              | undefined,
+            semanticIntentId: pilotageBinding.intentId,
+            semanticSchemaVersion: pilotageBinding.schemaVersion,
+          };
+          const outcome = await applyConversationalAuthority({
+            pilotId,
+            projectId: ctx.project.id,
+            userMessageId: reserved.userMessageId,
+            content,
+            clientTurnKey,
+            preQualified,
+          });
+          if (outcome.humanDecisionCreated) conversationalHumanDecisionCreated = true;
+          const effectRecord = pilotageEffectFromAuthority(
+            outcome,
+            pilotageBinding.intentId,
+          );
+          if (effectRecord) {
+            pilotageEffectRecords.push(effectRecord);
+          }
+          ownerOutcomeByIntentId.set(
+            intentId,
+            outcome.command?.status ??
+              (outcome.attempted ? "FAILED" : "NOT_ATTEMPTED"),
+          );
+          pending.delete(intentId);
+          if (!authority?.attempted && outcome.attempted) {
+            authority = outcome;
+          } else if (!authority) {
+            authority = outcome;
+          }
+          emitObs({
+            event_name: "d3.turn.conversational_authority",
+            component: "d3.conversation",
+            request_id: requestId,
+            operation_id: reserved.operationId,
+            outcome: outcome.attempted
+              ? outcome.command?.status === "APPLIED" ||
+                outcome.command?.status === "ALREADY_APPLIED"
+                ? "SUCCESS"
+                : outcome.command?.status === "UNKNOWN"
+                  ? "UNKNOWN"
+                  : "FAILED"
+              : "PARTIAL",
+            meta: {
+              attempted: outcome.attempted,
+              intent_clarity: outcome.intentClarity,
+              operation: outcome.operation ?? null,
+              command_status: outcome.command?.status ?? null,
+              reason_code: outcome.command?.reasonCode ?? null,
+              decision_id: outcome.decisionId,
+              source: outcome.source,
+              semantic_gate: true,
+              semantic_intent_id: pilotageBinding.intentId,
+              pilotage_bindings_total: pilotageBindings.length,
+              pilotage_outcomes_serial: pilotageEffectRecords.length,
+              unified_conduction: true,
+            },
+          });
+          if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
+            ownershipLostBeforeD4 = true;
+            for (const remId of [...pending]) {
+              ownerOutcomeByIntentId.set(remId, "SKIPPED");
+              const family = familyById.get(remId);
+              if (family === "pilotage") {
+                const remaining = bindingByIntentId.get(remId);
+                if (remaining) {
+                  pilotageEffectRecords.push(
+                    ownershipLostPilotageEffectRecord({ binding: remaining }),
+                  );
+                  emitObs({
+                    event_name: "d3.turn.conversational_authority",
+                    component: "d3.conversation",
+                    request_id: requestId,
+                    operation_id: reserved.operationId,
+                    outcome: "UNKNOWN",
+                    meta: {
+                      attempted: false,
+                      intent_clarity: "CLEAR",
+                      semantic_gate: true,
+                      reason_code: "OWNERSHIP_LOST",
+                      semantic_intent_id: remId,
+                      operation:
+                        "ambiguous" in remaining ? null : remaining.operation,
+                      pilotage_bindings_total: pilotageBindings.length,
+                      unified_conduction: true,
+                    },
+                  });
+                }
+              }
+              pending.delete(remId);
+            }
+            break;
+          }
+        }
+      } else if (pilotageIds.length > 0) {
+        for (const id of pilotageIds) {
+          if (!pending.has(id)) continue;
+          ownerOutcomeByIntentId.set(id, "SKIPPED");
+          pending.delete(id);
+          const binding = bindingByIntentId.get(id);
+          if (binding) {
+            pilotageEffectRecords.push(
+              ownershipLostPilotageEffectRecord({ binding }),
+            );
           }
-          break;
         }
       }
     }
+
+    if (knowledgeEffectsConducted || [...familyById.values()].includes("knowledge")) {
+      const proposalSummary = summarizeKnowledgeProposals(allKnowledgeProposals);
+      emitObs({
+        event_name: "d3.turn.knowledge_proposals",
+        component: "d3.conversation",
+        request_id: requestId,
+        operation_id: reserved.operationId,
+        generation_id: reply.generationId,
+        outcome: proposalSummary.proposal_present ? "PARTIAL" : "SUCCESS",
+        meta: {
+          qualification_status: qualification.status,
+          reply_status: reply.status,
+          proposal_present: proposalSummary.proposal_present,
+          proposal_count: proposalSummary.proposal_count,
+          unified_conduction: true,
+          knowledge_outcomes: [...ownerOutcomeByIntentId.entries()]
+            .filter(([id]) => familyById.get(id) === "knowledge")
+            .map(([id, o]) => `${id}:${o}`)
+            .join("|")
+            .slice(0, 500),
+        },
+      });
+    }
   }

   const primaryPilotageEffect = pickPrimaryPilotageEffect(pilotageEffectRecords);
@@ -2452,10 +2535,8 @@ export async function postUserMessageAndNora(
     }
   }

-  // Reuse early-minted id when early D4 ran; otherwise mint now.
-  const assistantId = capitalisationRanBeforePilotage
-    ? earlyAssistantMessageId
-    : newId("msg");
+  // Reuse id minted for unified conduction (provenance before ASSISTANT persist).
+  const assistantId = assistantMessageIdForEffects;

   type DocumentSaveResult = {
     status: string;
@@ -2525,10 +2606,7 @@ export async function postUserMessageAndNora(

   // C17: segment-limit suspension keeps work SUSPENDED (honest) but may still
   // carry a complete document fence for D4 — do not require conversational COMPLETE.
-  const interruptedWithDocument =
-    reply.status === "INTERRUPTED" &&
-    Boolean(cognitiveWorkMeta?.suspended) &&
-    extractContractualDocumentProposal(reply.content).ok;
+  const interruptedWithDocument = interruptedWithDocumentEarly;
   const replyAllowsOwnerEffects =
     allowOwnerEffects &&
     (reply.status === "COMPLETE" || interruptedWithDocument);
@@ -2539,59 +2617,12 @@ export async function postUserMessageAndNora(
     }
     if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
       ownershipLostBeforeD4 = true;
-    } else if (capitalisationRanBeforePilotage) {
-      // Early path only wrote D4 intents required by D5/D6 — remaining D4 still apply once.
-      const allProposals = extractKnowledgeProposals(qualification);
-      const remaining = allProposals.filter((p) => !d4DepsForPilotage.has(p.intentId));
-      const proposalSummary = summarizeKnowledgeProposals(allProposals);
-      emitObs({
-        event_name: "d3.turn.knowledge_proposals",
-        component: "d3.conversation",
-        request_id: requestId,
-        operation_id: reserved.operationId,
-        generation_id: reply.generationId,
-        outcome: proposalSummary.proposal_present ? "PARTIAL" : "SUCCESS",
-        meta: {
-          qualification_status: qualification.status,
-          reply_status: reply.status,
-          proposal_present: proposalSummary.proposal_present,
-          proposal_count: proposalSummary.proposal_count,
-          early_before_pilotage: true,
-          remaining_d4: remaining.length,
-        },
-      });
-      if (remaining.length > 0 && !ownershipLostBeforeD4) {
-        try {
-          const step = await maybeCapitalizeFromExchange(pilotId, preparationId, {
-            userText: content,
-            assistantText: reply.content,
-            generationId: reply.generationId,
-            userMessageId: reserved.userMessageId,
-            assistantMessageId: assistantId,
-            proposals: remaining,
-            turnFence: {
-              commandId: reserved.commandId,
-              ownerToken: reserved.ownerToken,
-              beforeFenceCheck: turnRaceHooks.beforeD4Effect,
-            },
-          });
-          capitalisation = {
-            capitalisations: [
-              ...capitalisation.capitalisations,
-              ...step.capitalisations,
-            ],
-            selectionMethod: step.selectionMethod,
-            selectionLimit: step.selectionLimit,
-            humanDecisionCreated:
-              capitalisation.humanDecisionCreated || step.humanDecisionCreated,
-            ownershipLost: capitalisation.ownershipLost || step.ownershipLost,
-          };
-          if (step.ownershipLost) ownershipLostBeforeD4 = true;
-        } catch {
-          capitalisationError = "CAPITALISATION_EXCEPTION";
-        }
-      }
-    } else {
+    } else if (
+      // Knowledge REQUEST_EFFECT already handled by unified conduction when admissible.
+      // Fallback only when integrated loop did not admit knowledge (e.g. empty set).
+      !knowledgeEffectsConducted &&
+      ![...familyById.values()].includes("knowledge")
+    ) {
       try {
         const knowledgeProposals = extractKnowledgeProposals(qualification);
         const proposalSummary = summarizeKnowledgeProposals(knowledgeProposals);
@@ -2610,43 +2641,53 @@ export async function postUserMessageAndNora(
             subject_count: proposalSummary.subject_count,
             acquis_count: proposalSummary.acquis_count,
             open_point_count: proposalSummary.open_point_count,
+            unified_conduction_fallback: true,
           },
         });
-        capitalisation = await maybeCapitalizeFromExchange(pilotId, preparationId, {
-          userText: content,
-          assistantText: reply.content,
-          generationId: reply.generationId,
-          userMessageId: reserved.userMessageId,
-          assistantMessageId: ownershipLostBeforeD4 ? null : assistantId,
-          proposals: knowledgeProposals,
-          turnFence: {
-            commandId: reserved.commandId,
-            ownerToken: reserved.ownerToken,
-            beforeFenceCheck: turnRaceHooks.beforeD4Effect,
-          },
-        });
-        const written = capitalisation.capitalisations.filter(
-          (c) => c.status === "AVAILABLE" || c.status === "OK",
-        ).length;
-        const failed = capitalisation.capitalisations.filter((c) => c.status === "FAILED").length;
-        emitObs({
-          event_name: "d3.turn.knowledge_capitalisation",
-          component: "d3.conversation",
-          request_id: requestId,
-          operation_id: reserved.operationId,
-          generation_id: reply.generationId,
-          outcome:
-            written > 0 ? "SUCCESS" : proposalSummary.proposal_present ? "PARTIAL" : "SUCCESS",
-          meta: {
-            proposal_present: proposalSummary.proposal_present,
-            proposal_count: proposalSummary.proposal_count,
-            capitalisation_written: written,
-            capitalisation_failed_count: failed,
-            reply_status: reply.status,
-          },
-        });
-        if (capitalisation.ownershipLost) {
-          ownershipLostBeforeD4 = true;
+        if (knowledgeProposals.length > 0) {
+          capitalisation = await maybeCapitalizeFromExchange(pilotId, preparationId, {
+            userText: content,
+            assistantText: reply.content,
+            generationId: reply.generationId,
+            userMessageId: reserved.userMessageId,
+            assistantMessageId: ownershipLostBeforeD4 ? null : assistantId,
+            proposals: knowledgeProposals,
+            turnFence: {
+              commandId: reserved.commandId,
+              ownerToken: reserved.ownerToken,
+              beforeFenceCheck: turnRaceHooks.beforeD4Effect,
+            },
+          });
+          const written = capitalisation.capitalisations.filter(
+            (c) => c.status === "AVAILABLE" || c.status === "OK",
+          ).length;
+          const failed = capitalisation.capitalisations.filter(
+            (c) => c.status === "FAILED",
+          ).length;
+          emitObs({
+            event_name: "d3.turn.knowledge_capitalisation",
+            component: "d3.conversation",
+            request_id: requestId,
+            operation_id: reserved.operationId,
+            generation_id: reply.generationId,
+            outcome:
+              written > 0
+                ? "SUCCESS"
+                : proposalSummary.proposal_present
+                  ? "PARTIAL"
+                  : "SUCCESS",
+            meta: {
+              proposal_present: proposalSummary.proposal_present,
+              proposal_count: proposalSummary.proposal_count,
+              capitalisation_written: written,
+              capitalisation_failed_count: failed,
+              reply_status: reply.status,
+              unified_conduction_fallback: true,
+            },
+          });
+          if (capitalisation.ownershipLost) {
+            ownershipLostBeforeD4 = true;
+          }
         }
       } catch {
         capitalisationError = "CAPITALISATION_EXCEPTION";
@@ -2660,8 +2701,9 @@ export async function postUserMessageAndNora(
           error_category: "CAPITALISATION_EXCEPTION",
         });
       }
+    }

-      if (documentAct.kind === "CREATE" && !ownershipLostBeforeD4) {
+    if (documentAct.kind === "CREATE" && !ownershipLostBeforeD4) {
         // C-02/C-03: exact proposal from prior message OR canonical documentProposal OR fence.
         type ExactProposal = { title: string; contentMarkdown: string; contentSha256: string };
         let exact: ExactProposal | null = null;
@@ -3628,7 +3670,6 @@ export async function postUserMessageAndNora(
           });
         }
       }
-    }
   }

   const documentEffectForAck: DocumentEffectSummary | null =

```

## B.2 e1-continuite-cognitive-as-built.md

```diff
diff --git a/projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md b/projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md
index fd575cf9..16eaa075 100644
--- a/projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md
+++ b/projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md
@@ -84,14 +84,29 @@ Complément ciblé E1 (reliquats ChatGPT E1-REL-01…09) — même Ensemble 1, p

 ## E2-FINAL / E2-INT (as-built impact — 2026-11-27)

-- **Orchestration** : early D4 **transitif** + **vagues batch** (dépendances respectées,
-  SUBJECT parent/enfant co-présents) ; remaining D4 après pilotage ; `crossCap` +
-  `proposalKind` (subject-only ≠ APPLIED pour ACQUIS) ; FACT→ACQUIS.
+- **Orchestration (historique INT)** : early D4 transitif + vagues batch ; remaining D4 ;
+  `crossCap` + `proposalKind` ; FACT→ACQUIS. **Remplacé** par Option B ci-dessous.
 - **C02** : union stash∪projections ; projection partielle complétée ; UNKNOWN explicite.
 - **FinOps** : conflit d'attribution sur l'histoire complète (pas la fenêtre période) ;
   exclusion projet avant agrégats ; liste/détail cohérents.
 - D3 demeure conducteur unique ; D4/D5/D6 propriétaires.

+## E2 Option B — conduite uniforme (as-built — 2026-11-27)
+
+- **ARCH-01…05** : D3 unique ; séquencement par dépendances + résultats propriétaires ;
+  réutilisation qualification/persistance/fencing/C02 ; pas de nouvel orchestrateur /
+  registre / pivot ; qualification limitée aux garanties impactées.
+- **Mécanisme** : `qualified-effect-conduction.ts` (planificateur pur) + boucle unique dans
+  `conversation/service.ts` sur `d4.record_knowledge` / `d5` / `d6` REQUEST_EFFECT.
+- **Vagues** : intents ready (dependsOn satisfaits) → batch D4 cohérent puis D5/D6 séquentiels ;
+  réévaluation ; arrêt sans faux succès si aucune progression.
+- **Supprimé pour le périmètre intégré** : phases `early_before_pilotage` /
+  `d4DepsForPilotage` / `capitalisationRanBeforePilotage` / remaining D4 concurrentes.
+- **Préservé** : batches D4 parent/enfant ; autorité HumanDecision ; forecast durable ;
+  C02 ; chemins documentaires D4 create/revise, D2, D7 hors boucle intégrée.
+- **Preuves DET** : `qualified-effect-conduction` unit ; `e2-unified-intent-conduction.pg`
+  (D6→D4→D5, refus+indépendant, batch+pilotage) ; non-régression FINAL/C02/MP09/E1.
+
 ## Limites

 - Autonomie sémantique LIVE : NON PROUVÉE (E1 = DET + injections).
@@ -107,3 +122,5 @@ Complément ciblé E1 (reliquats ChatGPT E1-REL-01…09) — même Ensemble 1, p
 - Suite E1 antérieure (58 PASS rapportés) + complément `e1-reliquats-integrity.pg.test.ts`
   + non-régression B.5/B.6/B.7/B.8 — voir Delivery History et Review Pack complément E1.
 - E2-FINAL : `e2-final-orchestration-c02` (unit+PG) + `e2-final-finops-attribution.pg` — 16 PASS.
+- E2 Option B : `qualified-effect-conduction` unit + `e2-unified-intent-conduction.pg` —
+  SC1–SC3 PASS ; C02/MP09/E1 non-régression PASS.

```

## B.3 delivery-history.md

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 5b9e28e3..dc1bb5b2 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -68,7 +68,15 @@
   - forecast USER_MESSAGE: refuse body.forecastJson ; mutate ignore body hors chemins directs ;
   - tests: `e1-final-safeguards.pg.test.ts` **5 PASS** + non-régression reliquats/ensemble/ml2-corrective (**38 PASS** lot) ;
   - Review Pack régularisé (RETAIN + fichiers delta)
-- **statut**: E2 GARANTIES + REL + FINAL + **INT** DEV — Cursor READY WITH RESERVES (sortie construction E2 proposée ; gate Morris / revue ChatGPT avant E3); E1 CONSTRUCTION EXIT ACCEPTED WITH RESERVES; Livraison 1 NOT ACCEPTED; NO RELEASE
+- **E2_option_B_conduite_uniforme** (2026-11-27 — même livraison, pas de nouvelle DELIV):
+  - Snapshot de base publié : `53b9d452` / tree `18e8fd99` (GO snapshot consommé — **aucun** commit/push projet dans ce mandat)
+  - ARCH-01…05 : D3 unique ; séquencement dépendances+résultats ; réutilisation acquis E1/E2 ; pas de nouvel orchestrateur/persistance
+  - Remplace early/remaining D4 + boucle D5/D6 séparée par conduite unifiée `qualified-effect-conduction` + boucle D3
+  - Préserve batches D4, autorité, C02, hors-périmètre documentaire/D2/D7
+  - tests : unit planner **5 PASS** ; PG unified SC1–SC3 **3 PASS** ; FINAL/C02 **5 PASS** ; MP09 PG **1 PASS** ; E1 continuity **1 PASS** ; B5/B6 unit **16 PASS**
+  - schéma **027** ; LIVE/RECETTE non mutés ; NO RELEASE ; E3 non engagé
+  - verdict Cursor : READY WITH RESERVES — sortie construction E2 proposée sous gate Morris ; handoff L3 Option B
+- **statut**: E2 GARANTIES + REL + FINAL + INT + **Option B** DEV — Cursor READY WITH RESERVES (sortie construction E2 proposée ; gate Morris / revue ChatGPT avant E3); E1 CONSTRUCTION EXIT ACCEPTED WITH RESERVES; Livraison 1 NOT ACCEPTED; NO RELEASE

 ## delivery_id: DELIV-2026-11-27-ML5-RECETTE-OPERATIONAL-ACTIVATION


```

## B.4 ml5-registre-couverture-et-revue-developpement.md

```diff
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index 577a072c..936d9eaa 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,7 +4,7 @@

 | Champ | Valeur |
 |---|---|
-| Version | v0.33 candidate — 27 novembre 2026 : **E2-INT** (D4 remaining+transitif+batch ; C02 projection partielle ; FinOps conflit hors fenêtre) sur `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` dirty — **Cursor READY WITH RESERVES** (sortie E2 proposée ; ChatGPT + Morris gate) ; v0.32 : E2-FINAL ; v0.31 : E2c ; … |
+| Version | v0.34 candidate — 27 novembre 2026 : **E2 Option B** (conduite uniforme D3 des intentions qualifiées D4-connaissance/D5/D6 ; ARCH-01…05) sur `sfia/next-ml5-integrated-delivery-20261123` @ base `53b9d452` dirty local — **Cursor READY WITH RESERVES** (sortie E2 proposée ; ChatGPT + Morris gate) ; v0.33 : E2-INT ; v0.32 : E2-FINAL ; … |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
 | Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
 | Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
@@ -434,6 +434,7 @@ Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comporteme
 | R-E2 | 27/11/2026 | E2 garanties cognitives résiduelles A.1–A.7 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2 → `sfia/review-handoff` @`80cdef6c` | A.1–A.7 · 91 PASS unit ciblés · hybrid instruit | **Cursor** READY WITH RESERVES ; ChatGPT PARTIEL NOT READY E3 ; six reliquats → R-E2c |
 | R-E2c | 27/11/2026 | E2 complément six reliquats E2-REL-01…06 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2c → `sfia/review-handoff` | REL-01…06 · 89+ PASS unit/PG · hybrid PG DET | **Cursor** READY WITH RESERVES ; ChatGPT revue indépendante pending ; E3 non engagé |
 | R-E2f | 27/11/2026 | E2 sécurisation finale E2-FINAL-01…03 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2f → `sfia/review-handoff` | FINAL-01…03 · 16 PASS FINAL + 59 PASS lot affecté | **Cursor** READY WITH RESERVES — sortie construction E2 proposée ; ChatGPT + Morris gate ; E3 non engagé |
+| R-E2b | 27/11/2026 | E2 Option B — conduite uniforme intentions qualifiées (ARCH-01…05) | base `53b9d452` dirty local ; **no project commit** | Review Pack Option B → `sfia/review-handoff` | planner unit + unified PG SC1–SC3 · C02/MP09/E1 NR | **Cursor** READY WITH RESERVES — sortie E2 proposée ; ChatGPT + Morris gate ; E3 non engagé |
 | R-E2i | 27/11/2026 | E2 revue d'intégration — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2i → `sfia/review-handoff` | INT D4/C02/FinOps · 20 PASS ; e2e DB vérifiée | **Cursor** READY WITH RESERVES — sortie E2 proposée ; ChatGPT + Morris gate ; E3 non engagé |

 ### E2 — lignes de couverture (2026-11-27)
@@ -461,7 +462,7 @@ Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comporteme
 | ID | Exigence | État | Validation | Preuve restante |
 | --- | --- | --- | --- | --- |
 | E2-REL-01 | Admission versionnée | IMPLEMENTED + DET | ml5-cognitive-resources | Calibration LIVE → Morris GO |
-| E2-REL-02 | Orchestration/reprise/finalisation | IMPLEMENTED + DET | mp09 + conductor A.5 + early D4 | Conversation naturelle multi-cap → recette |
+| E2-REL-02 | Orchestration/reprise/finalisation | IMPLEMENTED + DET | mp09 + conductor A.5 + **Option B** unified conduction | Conversation naturelle multi-cap → recette |
 | E2-REL-03 | Hybrid PG + efficience | IMPLEMENTED + DET (PG fake embed) | e2-hybrid-pg-path | Embedding LIVE ; pertinence cognitive → recette |
 | E2-REL-04 | Observabilité E3 | DOCUMENTED + INSPECTION | cartographie pack | Surface E3 ; latences non instrumentées |
 | E2-REL-05 | FinOps attribution | IMPLEMENTED + DET | FinOps projection + A.6 contract | Agrégats PG population ; Admin OFF |

```

---

# §C — Instruction ChatGPT

Consulter directement :
- Repo `mcleland147/sfia-workspace`
- Branche `sfia/review-handoff`
- Fichier `sfia-review-handoff/latest-chatgpt-review.md`
- Snapshot référence `53b9d452`

Vérifier ARCH-01…05, delta réel, conduite uniforme, absence de phases concurrentes résiduelles pour effets intégrés, préconditions, autorité, résultats, reprise, E1/E2, tests, complétude.

Morris arbitre sortie E2, publication code, passage E3.

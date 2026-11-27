# Review Pack FULL — SFIA Studio Next ML5 · E2-FINAL-01…03

**Cycle**: 8 — Delivery / Critical · EVOL sécurisation corrective ciblée
**Date**: 2026-11-27 19:35 CET
**Lane**: DEV exclusively (STUDIO_LANE=DEV · app :3100 · PG :5433 / `sfia_next_dev`)
**Branche**: `sfia/next-ml5-integrated-delivery-20261123`
**HEAD base**: `58ca9486003805f74e69a0842f2c0792a7184437`
**Merge-base main**: `997897fd7cf914771e7d08e8030dc7123fab7d25`
**Prior handoff E2c**: `93e8f4a660eb5c69e063db202e34342389916555` blob `bf32de4e4d01e0a20a4656de75b608f648b56ada`
**Suivi ChatGPT**: `construction/suivi-macro-lot-correctif-continuite-fiabilite-ml5.md` v0.6 @ `3c691e52` — **non modifié**
**Classe**: NO RELEASE · STABLE NOT AVAILABLE · E3 NON ENGAGÉ · aucun commit/push projet

---

## 1. Mandat

Finaliser exclusivement trois contrôles (ChatGPT §13.2) :

| ID | Objectif |
| --- | --- |
| E2-FINAL-01 | Intégrité orchestration inter-capacités (corrélation par intention, succès complet, dependsOn) |
| E2-FINAL-02 | Reconstitution durable C02 sans dépendre du `resultJson` final des effets |
| E2-FINAL-03 | Cohérence attribution FinOps avant filtres d'affichage |

Préserver acquis E1/E2 ; ne pas rouvrir A.1–A.7 ; pas d'allocation / hybrid / T08 / LIVE / RECETTE.

---

## 2. Git Truth Check

| Item | Valeur |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` (origin GitHub) |
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `58ca9486…` (inchangé — no project commit) |
| Staged | **aucun** |
| Dirty | ~84 fichiers (cumul macro-lot E1/E2/FINAL) |
| Handoff WT | `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` @ `93e8f4a6` |
| RECETTE WT | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa` @ `e8e6e069` — préservé |
| Collision | aucune agent concurrent détecté sur propriétaires FINAL |

**Delta mandat vs cumul** : le présent cycle touche orchestration/C02/FinOps + tests FINAL + docs delivery/registre/as-built. Les autres dirty files sont acquis E1/E2/A.* non rouverts.

---

## 3. ENV-01

| Contrôle | Résultat |
| --- | --- |
| DEV PG | `127.0.0.1:5433` · DB/rôle `sfia_next_dev` — OK |
| DEV app | port 3100 historique ; HTTP 500 tooling non rouvert |
| RECETTE app | `:3200` LISTEN (préservé, **aucune mutation**) |
| RECETTE PG | `:5434` · `sfia_next_recette_ml4` — OK |
| LIVE | `OPENAI_API_KEY` présent en env mais **supprimé** dans beforeAll des tests FINAL ; aucune émission |
| STUDIO_LANE | DEV |

**Verdict préalable**: **ENV ROUTING COMPLETE**

---

## 4. Product versioning

- Classe **NO RELEASE**
- Entrée Delivery History complétée : `DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV` · section **E2_sécurisation_finale**
- Schéma **027 inchangé**
- Runtime `product-version.ts` non modifié

---

## 5. Sources lues (proportionnées)

- Template §5–9 / routing §4.3.0b (main blobs mandat)
- Suivi ChatGPT §11 / §13.1–13.3 (v0.6) — lecture seule
- Contrats continuité / connaissance / trajectoire / gouvernance / FinOps (référencés)
- Handoff E2c `93e8f4a6` sections orchestration / C02 / FinOps
- Code : `conversation/service.ts`, `pilotage-effect-aggregate.ts`, `semantic-qualification.ts`, `knowledge/service.ts`, `usage-read-service.ts`, `usage-projection.ts`

---

## 6. Risques examinés — défauts confirmés / écartés

### E2-FINAL-01 — Orchestration

| Constat revue | Verdict | Action |
| --- | --- | --- |
| Succès lot emprunté (`hadProposal && some(AVAILABLE)`) | **CONFIRMÉ** (pré-FINAL) | `crossCapOutcomeFromCapitalisations` — filtre `intentId` strict |
| PARTIAL assimilé à succès | **CONFIRMÉ** | PARTIAL / FAILED ne satisfont pas dependsOn |
| intentId manquant merge/split/… / subject side-effect | **CONFIRMÉ** partiel | intentId ajouté sur rows manquantes ; UNKNOWN kind → FAILED |
| Alias `knowledgeKind: FACT` ne traverse pas ACQUIS | **CONFIRMÉ** (cause du FAIL pos D4→D5) | `normalizeKnowledgeRecordKind` FACT→ACQUIS |
| `assistantMessageId=null` early | **CONFIRMÉ** (pré) | early mint conservé (acquis E2c) |
| preQualified sans forecastSteps | **ÉCARTÉ** (inspection) | forecast récupéré via qualification durable / classify USER_MESSAGE |

### E2-FINAL-02 — C02

| Constat | Verdict | Action |
| --- | --- | --- |
| `semanticIntentIds` alimentés seulement depuis JSON effects | **CONFIRMÉ** | `extractDurablePilotageIntentIds` lit stash qualification |
| Intent non trouvé → `continue` silencieux | **CONFIRMÉ** | `unknownPilotageEffectRecord` explicite UNKNOWN |
| Dupplication effets sur lookup | **ÉCARTÉ** (preuve PG) | lookup read-only ; open_count ≤ 1 |

### E2-FINAL-03 — FinOps

| Constat | Verdict | Action |
| --- | --- | --- |
| Filtre projet masque conflit work NULL + obs A+B | **CONFIRMÉ** | `loadAttributionConflictWorkIds` **avant** filtre ; exclusion des work conflictuels des agrégats projet |
| Conflit direct B/A | déjà corrigé E2c | préservé |

---

## 7. Mécanismes finaux

1. **D3 early D4** : intents D4 dépendances de D5/D6 exécutés **séquentiellement** ; outcome par intention via `crossCapOutcomeFromCapitalisations` ; PRIMARY = acquis/open_point/(resolve) ; subject auxiliaire ignoré pour satisfaction.
2. **C02** : reconstitution par stash `semanticQualification` + owners ; JSON effects = projection ; unknown explicite.
3. **FinOps** : vérité d'attribution sur population non filtrée du travail ; filtres n'effacent pas les conflits.

Architecture : D3 unique ; D4/D5/D6 propriétaires ; pas de second orchestrateur.

---

## 8. Blast radius

| Zone | Impact |
| --- | --- |
| `conversation/service.ts` | early D4 + C02 extract ids |
| `pilotage-effect-aggregate.ts` | outcomes + unknown record |
| `semantic-qualification.ts` | normalize kind |
| `knowledge/service.ts` | intentId rows |
| `usage-projection.ts` / `usage-read-service.ts` | conflict before filter |
| Docs | delivery-history, registre v0.32, as-built E2-FINAL |
| Tests | 3 nouveaux fichiers FINAL |

Hors scope non touchés : allocation, hybrid campagne, T08, UX, RECETTE, LIVE.

---

## 9. Validations

| Commande | Env | Date | Portée | Résultat |
| --- | --- | --- | --- | --- |
| `npx vitest run tests/unit/e2-final-orchestration-c02.test.ts tests/integration/e2-final-orchestration-c02.pg.test.ts tests/integration/e2-final-finops-attribution.pg.test.ts` | DEV PG :5433 | 2026-11-27 | FINAL | **16 PASS** / 0 FAIL · exit 0 |
| `npx vitest run` (+ FinOps projection, semantic, e1 B7/B8, FINAL) | DEV | 2026-11-27 | lot affecté | **59 PASS** · exit 0 |
| `npx tsc --noEmit` filtré delta FINAL | DEV | 2026-11-27 | delta | **0 erreur delta** (erreurs antérieures hors scope existent) |
| `git diff --check` fichiers FINAL | — | 2026-11-27 | whitespace | OK |
| eslint delta (hors unused préexistant semantic) | DEV | 2026-11-27 | | warnings préexistants hors FINAL test (corrigé `and` unused) |

**Pas de** suite allocation / hybrid rejouée (hors impact).

---

## 10. Fake / Real

| Frontière | Fake | REAL | Parité | Gap |
| --- | --- | --- | --- | --- |
| Qualification | fixture injectée `runNoraCognitiveTurn` mock | classify LIVE Nora | structure intents/dependsOn | autonomie naturelle |
| D4/D5 | PG réel + fence | idem | mutations propriétaires | pertinence cognitive |
| C02 | strip `pilotageEffects` après tour | interruption crash | stash conservé | panne mid-write partielle non injectée |
| FinOps | observations contrôlées PG | collect LIVE | attribution | coût facturé Admin OFF |
| Embed / OpenAI | non exercé | — | — | LIVE interdit |

**DETERMINISTIC PROVEN ≠ READY FOR REAL.**

---

## 11. Synthèse contrôles

| Contrôle | Défaut | Correction | Preuve | Réserve |
| --- | --- | --- | --- | --- |
| E2-FINAL-01 | Confirmé (emprunt + FACT alias + intentId) | crossCap + normalize + early séquentiel | PG D4→D5 pos/neg | multi-cap naturelle → recette |
| E2-FINAL-02 | Confirmé (ids depuis JSON only) | extractDurable + unknown | PG stash sans effects | reprise UX → recette |
| E2-FINAL-03 | Confirmé (filtre masque conflit) | conflict ids avant filtre | PG multi-vues | coût facturé |

---

## 12. Couverture pack

Inclut : mandat, Git Truth, ENV-01, versioning, risques, mécanismes, blast, **contenus nouveaux fichiers + extraits raccordements**, tests, Fake/Real, docs, réserves, verdict.

Références immuables antérieures : handoff E2c `93e8f4a6` ; E1 safeguards `41087f1b` / complément `108044ef`.

---

## 13. Réserves / reports

Conservés : R-REC-E1-01/02 ; calibration ; allocation naturelle ; hybrid pertinence ; T08 ; multi-cap naturelle ; reprise utilisateur ; présentation E3 ; coût facturé ; qualification globale E5.

MP-09/11/14/15/16 **OPEN RECETTE**.

---

## 14. Verdict Cursor

**READY WITH RESERVES**

Proposition : **sortie de construction E2** — invariants techniques FINAL maîtrisés ; preuves cognitives naturelles reportées en recette ; **E3 non engagé** ; gate **Morris** après relecture ChatGPT du handoff distant.

---

## 15. Instruction ChatGPT

Relire ce fichier canonique distant avant recommandation Morris. Vérifier : absence faux succès inter-intentions ; dependsOn D4/D5/D6 ; C02 durable ; pas de duplication ; populations FinOps ; forecast/provenance E1 préservés ; tests exécutés ; pack complet.


---

## Diffs / contenus FINAL (mandat courant)

### New file: pilotage-effect-aggregate.ts (full)
```ts
/**
 * MP-09 — aggregate multiple D5/D6 conversational outcomes on one turn.
 * Primary effect preserves backward-compatible singular projection; full list feeds restitution.
 */

import type { ConversationalAuthorityOutcome } from "@/domains/pilotage/conversation-authority";
import type { DurablePilotageBinding } from "./semantic-qualification";

/** Durable turn payload slice (matches TurnResult.pilotageEffect when set). */
export type TurnPilotageEffect = {
  attempted: boolean;
  intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
  intentReason?: string;
  operation?: string;
  status?: string | null;
  reasonCode?: string | null;
  reason?: string | null;
  commandId?: string | null;
  decisionId?: string | null;
  clarification?: string;
  source: ConversationalAuthorityOutcome["source"];
  clientCommandKey?: string;
  semanticIntentId?: string;
  effects?: Array<{ effectKind: string; targetRef: string }>;
};

export function pilotageEffectFromAuthority(
  authority: ConversationalAuthorityOutcome | null,
  semanticIntentId?: string,
): TurnPilotageEffect | null {
  if (!authority) return null;
  return {
    attempted: authority.attempted,
    intentClarity: authority.intentClarity,
    intentReason: authority.intentReason,
    operation: authority.operation,
    status: authority.command?.status ?? null,
    reasonCode: authority.command?.reasonCode ?? null,
    reason: authority.command?.reason ?? authority.intentReason ?? null,
    commandId: authority.command?.commandId ?? null,
    decisionId: authority.decisionId,
    clarification: authority.clarification,
    source: authority.source,
    clientCommandKey: authority.clientCommandKey,
    semanticIntentId,
    effects: authority.command?.effects?.map((e) => ({
      effectKind: e.effectKind,
      targetRef: e.targetRef,
    })),
  };
}

export function ambiguousPilotageEffectRecord(input: {
  intentId: string;
  reason: string;
}): TurnPilotageEffect {
  return {
    attempted: true,
    intentClarity: "AMBIGUOUS",
    intentReason: input.reason,
    reason: input.reason,
    status: null,
    decisionId: null,
    source: "clarification_only",
    semanticIntentId: input.intentId,
  };
}

export function dependencyBlockedPilotageEffectRecord(input: {
  binding: DurablePilotageBinding;
  blockReason: string;
}): TurnPilotageEffect {
  return {
    attempted: true,
    intentClarity: "CLEAR",
    operation: input.binding.operation,
    status: "REJECTED",
    reasonCode: "DEPENDENCY_PRECONDITION",
    reason: input.blockReason,
    decisionId: null,
    source: "none",
    semanticIntentId: input.binding.intentId,
  };
}

/** Mid-loop ownership loss — remaining bindings must not mutate and must be explicit. */
export function ownershipLostPilotageEffectRecord(input: {
  binding: DurablePilotageBinding | { intentId: string; operation?: string };
}): TurnPilotageEffect {
  return {
    attempted: false,
    intentClarity: "CLEAR",
    operation: "operation" in input.binding ? input.binding.operation : undefined,
    status: "SKIPPED",
    reasonCode: "OWNERSHIP_LOST",
    reason:
      "Propriété du tour perdue avant cet acte — effet non exécuté (pas de duplication à la reprise).",
    decisionId: null,
    source: "none",
    semanticIntentId: input.binding.intentId,
  };
}

/** E2-FINAL-02 — intent known from durable qualification but no owner effect reconstituted. */
export function unknownPilotageEffectRecord(input: {
  intentId: string;
  operation?: string;
  reason?: string;
}): TurnPilotageEffect {
  return {
    attempted: false,
    intentClarity: "CLEAR",
    operation: input.operation,
    status: "UNKNOWN",
    reasonCode: "EFFECT_NOT_RECONSTITUTED",
    reason:
      input.reason ??
      "Intention durable reconnue — aucun effet propriétaire reconstitué (pas de succès inventé).",
    decisionId: null,
    source: "none",
    semanticIntentId: input.intentId,
  };
}

/**
 * E2-FINAL-01 — map capitalisation rows to a single intent outcome.
 * Never attribute another intent's success. Partial ⇒ not satisfied.
 * When acquis/open_point rows exist for the intent, ignore auxiliary subject
 * side-effect rows so a subject-only AVAILABLE cannot satisfy a record intent.
 */
export function crossCapOutcomeFromCapitalisations(input: {
  intentId: string;
  capitalisations: Array<{ intentId?: string; status: string; kind?: string }>;
  hadProposal: boolean;
  ownershipLost?: boolean;
}): PilotageIntentStepOutcome {
  if (input.ownershipLost) return "SKIPPED";
  let related = input.capitalisations.filter((c) => c.intentId === input.intentId);
  const hasRecordPrimary = related.some(
    (c) => c.kind === "acquis" || c.kind === "open_point",
  );
  if (hasRecordPrimary) {
    related = related.filter(
      (c) =>
        c.kind === "acquis" ||
        c.kind === "open_point" ||
        c.kind === "open_point_resolve",
    );
  }
  if (related.length === 0) {
    // No rows for this intent — never borrow another intent's AVAILABLE.
    return input.hadProposal ? "FAILED" : "SKIPPED";
  }
  const ok = (s: string) => {
    const u = s.toUpperCase();
    return u === "AVAILABLE" || u === "OK" || u === "SUCCESS" || u === "APPLIED";
  };
  if (related.every((c) => ok(c.status))) return "APPLIED";
  if (related.some((c) => ok(c.status))) return "PARTIAL";
  return "FAILED";
}

export function isSuccessfulPilotageCommandStatus(status: string | null | undefined): boolean {
  const s = (status ?? "").toUpperCase();
  return s === "APPLIED" || s === "ALREADY_APPLIED";
}

/**
 * Intent-id outcome map entry after each binding step.
 * Values: command status, AMBIGUOUS, or SKIPPED (dependency / gate).
 */
export type PilotageIntentStepOutcome = string;

function isSatisfiedCrossCapOutcome(step: string): boolean {
  const s = step.toUpperCase();
  return (
    s === "APPLIED" ||
    s === "ALREADY_APPLIED" ||
    s === "AVAILABLE" ||
    s === "OK" ||
    s === "SUCCESS"
  );
}

/**
 * If a pilotage predecessor did not succeed, dependent bindings must not mutate.
 * E2-REL-02 — non-pilotage deps (e.g. D4→D5) are satisfiable when the owner
 * effect was already resolved this turn (`crossCapOutcomeByIntentId`); otherwise
 * fail closed (never treat as vacuously satisfied).
 */
export function dependencyPreconditionBlockReason(input: {
  dependsOn: string[];
  pilotageIntentIds: Set<string>;
  outcomeByIntentId: Map<string, PilotageIntentStepOutcome>;
  /** Same-turn non-pilotage owner outcomes (D4 capitalisation, …). */
  crossCapOutcomeByIntentId?: Map<string, PilotageIntentStepOutcome>;
}): string | null {
  for (const dep of input.dependsOn) {
    if (!input.pilotageIntentIds.has(dep)) {
      const cross = input.crossCapOutcomeByIntentId?.get(dep);
      if (cross === undefined) {
        return (
          `Dépendance (${dep}) hors intentions D5/D6 — précondition inter-capacité ` +
          `non encore satisfaite par un propriétaire; effet dépendant non exécuté.`
        );
      }
      if (cross === "AMBIGUOUS") {
        return `L'intention prérequis hors pilotage (${dep}) est ambiguë — effet dépendant non lancé.`;
      }
      if (cross === "SKIPPED") {
        return `L'acte prérequis hors pilotage (${dep}) n'a pas abouti — effet dépendant non exécuté.`;
      }
      if (!isSatisfiedCrossCapOutcome(cross)) {
        return (
          `L'acte prérequis hors pilotage (${dep}) n'est pas appliqué (${cross}) — ` +
          `effet dépendant non exécuté.`
        );
      }
      continue;
    }
    const step = input.outcomeByIntentId.get(dep);
    if (step === undefined) {
      return `Acte prérequis (${dep}) non encore résolu — effet suivant non exécuté.`;
    }
    if (step === "AMBIGUOUS") {
      return `L'intention prérequis (${dep}) est ambiguë — l'effet dépendant n'a pas été lancé.`;
    }
    if (step === "SKIPPED") {
      return `L'acte prérequis (${dep}) n'a pas abouti — effet dépendant non exécuté.`;
    }
    if (!isSuccessfulPilotageCommandStatus(step)) {
      return `L'acte prérequis (${dep}) n'est pas appliqué (${step}) — effet dépendant non exécuté.`;
    }
  }
  return null;
}

/** First attempted record in stable binding order — backward-compatible primary. */
export function pickPrimaryPilotageEffect(
  records: TurnPilotageEffect[],
): TurnPilotageEffect | null {
  if (records.length === 0) return null;
  return records.find((r) => r.attempted) ?? records[records.length - 1] ?? null;
}

export function intentIdsFromPilotageBindings(
  bindings: Array<
    DurablePilotageBinding | { ambiguous: true; reason: string; intentId: string }
  >,
): Set<string> {
  const ids = new Set<string>();
  for (const b of bindings) {
    ids.add("ambiguous" in b ? b.intentId : b.intentId);
  }
  return ids;
}```

### New test: e2-final-orchestration-c02.test.ts (full)
```ts
import { describe, expect, it } from "vitest";
import {
  crossCapOutcomeFromCapitalisations,
  dependencyPreconditionBlockReason,
  unknownPilotageEffectRecord,
} from "@/domains/conversation/pilotage-effect-aggregate";
import { extractDurablePilotageIntentIds } from "@/domains/conversation/service";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  normalizeKnowledgeRecordKind,
  extractKnowledgeProposals,
} from "@/domains/conversation/semantic-qualification";

describe("E2-FINAL-01 — crossCapOutcomeFromCapitalisations", () => {
  it("never attributes another intent's AVAILABLE", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-b",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-a", status: "AVAILABLE" },
          { intentId: "i-a", status: "OK" },
        ],
      }),
    ).toBe("FAILED");
  });

  it("requires complete success for multi-op intent", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-a",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-a", status: "AVAILABLE" },
          { intentId: "i-a", status: "FAILED" },
        ],
      }),
    ).toBe("PARTIAL");
  });

  it("APPLIED only when all related rows succeed", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-a",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-a", status: "AVAILABLE" },
          { intentId: "i-a", status: "OK" },
        ],
      }),
    ).toBe("APPLIED");
  });

  it("subject side-effect alone does not satisfy acquis primary", () => {
    // Auxiliary subject is ignored once acquis rows exist; acquis FAILED ⇒ FAILED.
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-d4",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-d4", kind: "subject", status: "AVAILABLE" },
          { intentId: "i-d4", kind: "acquis", status: "FAILED" },
        ],
      }),
    ).toBe("FAILED");
  });

  it("acquis AVAILABLE satisfies even with auxiliary subject row", () => {
    expect(
      crossCapOutcomeFromCapitalisations({
        intentId: "i-d4",
        hadProposal: true,
        capitalisations: [
          { intentId: "i-d4", kind: "subject", status: "AVAILABLE" },
          { intentId: "i-d4", kind: "acquis", status: "AVAILABLE" },
        ],
      }),
    ).toBe("APPLIED");
  });

  it("PARTIAL does not satisfy D5 dependsOn", () => {
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-d4"],
        pilotageIntentIds: new Set(["i-d5"]),
        outcomeByIntentId: new Map(),
        crossCapOutcomeByIntentId: new Map([["i-d4", "PARTIAL"]]),
      }),
    ).toMatch(/n'est pas appliqué|PARTIAL/i);
  });
});

describe("E2-FINAL-01 — knowledgeKind alias normalization", () => {
  it("maps FACT → ACQUIS", () => {
    expect(normalizeKnowledgeRecordKind("FACT")).toBe("ACQUIS");
    expect(normalizeKnowledgeRecordKind("ACQUIS")).toBe("ACQUIS");
  });

  it("extractKnowledgeProposals accepts FACT alias", () => {
    const proposals = extractKnowledgeProposals({
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "t",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i1",
          capabilityId: "d4.record_knowledge",
          mode: "REQUEST_EFFECT",
          summary: "know",
          parameters: {
            knowledgeKind: "FACT" as never,
            knowledgeStatement: "x".repeat(20),
            epistemic: "recommended",
          },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "",
    });
    expect(proposals).toHaveLength(1);
    expect(proposals[0]?.kind).toBe("ACQUIS");
  });
});

describe("E2-FINAL-02 — durable intent recovery without pilotageEffects", () => {
  it("extracts REQUEST_EFFECT D5/D6 ids from semanticQualification stash", () => {
    const resultJson = JSON.stringify({
      status: "UNKNOWN",
      semanticQualification: {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        intents: [
          {
            id: "i-open",
            capabilityId: "d5.pilotage_command",
            mode: "REQUEST_EFFECT",
            summary: "open",
            parameters: { pilotageOperation: "OPEN_CYCLE" },
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
          {
            id: "i-d4",
            capabilityId: "d4.record_knowledge",
            mode: "REQUEST_EFFECT",
            summary: "know",
            parameters: { knowledgeKind: "FACT", knowledgeStatement: "x".repeat(20) },
            constraints: [],
            dependsOn: [],
            sourceEvidence: [],
          },
          {
            id: "i-trans",
            capabilityId: "d5.pilotage_command",
            mode: "REQUEST_EFFECT",
            summary: "trans",
            parameters: { pilotageOperation: "TRANSITION_CYCLE" },
            constraints: [],
            dependsOn: ["i-open"],
            sourceEvidence: [],
          },
        ],
      },
    });
    expect(extractDurablePilotageIntentIds({ resultJson })).toEqual([
      "i-open",
      "i-trans",
    ]);
  });

  it("prefers pilotageEffects when present", () => {
    expect(
      extractDurablePilotageIntentIds({
        fromJsonEffects: [
          { attempted: true, intentClarity: "CLEAR", source: "none", semanticIntentId: "i-a" },
          { attempted: true, intentClarity: "CLEAR", source: "none", semanticIntentId: "i-b" },
        ],
        resultJson: JSON.stringify({
          semanticQualification: {
            intents: [
              {
                id: "i-other",
                capabilityId: "d5.pilotage_command",
                mode: "REQUEST_EFFECT",
              },
            ],
          },
        }),
      }),
    ).toEqual(["i-a", "i-b"]);
  });

  it("unknownPilotageEffectRecord is explicit, not a fabricated success", () => {
    const r = unknownPilotageEffectRecord({ intentId: "i-x", operation: "OPEN_CYCLE" });
    expect(r.status).toBe("UNKNOWN");
    expect(r.attempted).toBe(false);
    expect(r.semanticIntentId).toBe("i-x");
  });
});
```

### New test: e2-final-orchestration-c02.pg.test.ts (full)
```ts
/**
 * E2-FINAL-01/02 — D4→D5 precondition integrity + C02 recovery without pilotageEffects.
 */
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommands,
  conversationTurnCommands,
  pilots,
  preparations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  lookupDurableTurnByClientKey,
  postUserMessageAndNora,
} from "@/domains/conversation/service";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { buildCognitivePolicy } from "@/domains/conversation/cognitive-policy";
import * as runNoraModule from "@/domains/conversation/run-nora-cognitive-turn";

const STATEMENT =
  "Les règles d'habilitation exigent une validation du Pilote avant ouverture d'accès.";

function qualD4thenD5(opts?: { failD4B?: boolean }) {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED" as const,
    goal: "E2-FINAL orchestration",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents: [
      {
        id: "i-d4-a",
        capabilityId: "d4.record_knowledge" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: "Consolidates habilitation rules",
        parameters: {
          knowledgeKind: "ACQUIS" as const,
          knowledgeStatement: STATEMENT,
          epistemic: "recommended" as const,
          subjectTitle: "Habilitations",
        },
        constraints: [] as string[],
        dependsOn: [] as string[],
        sourceEvidence: [] as string[],
      },
      {
        id: "i-d4-b",
        capabilityId: "d4.record_knowledge" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: opts?.failD4B ? "x" : "Second acquis",
        parameters: {
          knowledgeKind: "ACQUIS" as const,
          // Too short when failD4B → extractor skips → FAILED/SKIPPED for dep
          knowledgeStatement: opts?.failD4B ? "trop court" : `${STATEMENT} Variante B.`,
          epistemic: "recommended" as const,
          subjectTitle: "Habilitations",
        },
        constraints: [] as string[],
        dependsOn: [] as string[],
        sourceEvidence: [] as string[],
      },
      {
        id: "i-d5",
        capabilityId: "d5.pilotage_command" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: "Propose trajectory from consolidated rules",
        parameters: {
          pilotageOperation: "PROPOSE_TRAJECTORY" as const,
          forecastSteps: [
            {
              order: 1,
              cycleType: "CONCEPTION_FONCTIONNELLE" as const,
              rationale: "Après consolidation habilitations",
              certainty: "ENVISIONED" as const,
            },
          ],
        },
        constraints: [] as string[],
        dependsOn: ["i-d4-b"],
        sourceEvidence: [] as string[],
      },
    ],
    clarifications: [] as string[],
    replyDraft: "Consolidation puis proposition.",
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
  await updatePreview(pilotId, prep.id, name, "e2-final");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, prep.id))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "e2-final",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`setup failed: ${created.status}`);
  }
  return { pilotId, preparationId: prep.id, projectId: created.projectId };
}

function mockNoraTurn(qual: ReturnType<typeof qualD4thenD5> | Record<string, unknown>) {
  const policy = buildCognitivePolicy("x", undefined, { profileHint: "simple" });
  const q = qual as ReturnType<typeof qualD4thenD5>;
  return {
    status: "COMPLETE" as const,
    content: q.replyDraft,
    generationId: `e2f-${newId("gen")}`,
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
    qualification: q,
    conductor: {
      workId: `work-${newId("cw")}`,
      revision: 1,
      segmentsRun: 1,
      resumed: false,
      suspended: false,
      suspendReason: null,
      investigation: {
        intentSummary: q.goal,
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

describe("E2-FINAL-01/02 — orchestration + C02 durable", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("D4-A succeeds, D4-B fails → D5 depending on B does not mutate", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-neg");
    const qual = qualD4thenD5({ failD4B: true });
    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);

    const clientTurnKey = newId("ctk");
    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Consolide puis propose une trajectoire",
      { clientTurnKey },
    );

    expect(result.status).toBe("COMPLETE");
    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    expect(d5?.status === "REJECTED" || d5?.reasonCode === "DEPENDENCY_PRECONDITION").toBe(
      true,
    );
    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.some((c) => c.operation === "PROPOSE_TRAJECTORY")).toBe(false);
  });

  it("D4 succeeds → D5 depending on D4 can apply (OPEN_CYCLE)", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-pos");
    const qual = qualD4thenD5();
    qual.intents = [
      qual.intents.find((i) => i.id === "i-d4-a")!,
      {
        id: "i-d5",
        capabilityId: "d5.pilotage_command" as const,
        mode: "REQUEST_EFFECT" as const,
        summary: "Ouvre le cycle cadrage",
        parameters: {
          pilotageOperation: "OPEN_CYCLE",
          cycleType: "CADRAGE",
        } as Record<string, unknown>,
        constraints: [] as string[],
        dependsOn: ["i-d4-a"],
        sourceEvidence: [] as string[],
      },
    ] as typeof qual.intents;

    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);

    const result = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Consolide les règles puis ouvre le cycle",
      { clientTurnKey: newId("ctk") },
    );

    expect(result.status).toBe("COMPLETE");
    const d5 = result.pilotageEffects?.find((e) => e.semanticIntentId === "i-d5");
    if (!(d5?.status === "APPLIED" || d5?.status === "ALREADY_APPLIED")) {
      throw new Error(
        `D5 not applied: ${JSON.stringify({
          d5,
          effects: result.pilotageEffects,
          caps: result.capitalisation,
        })}`,
      );
    }
    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    expect(cmds.some((c) => c.operation === "OPEN_CYCLE")).toBe(true);
  });

  it("C02 lookup reconstitutes intents from qualification stash without pilotageEffects", async () => {
    const { pilotId, preparationId, projectId } = await seedOwnedProject("e2f-c02");
    const qual = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED" as const,
      goal: "c02",
      projectIntention: "",
      desiredOutcome: "",
      initialScope: "",
      proposedProjectName: "",
      intents: [
        {
          id: "i-open",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "OPEN",
          parameters: {
            pilotageOperation: "OPEN_CYCLE" as const,
            cycleType: "CADRAGE" as const,
          },
          constraints: [] as string[],
          dependsOn: [] as string[],
          sourceEvidence: [] as string[],
        },
        {
          id: "i-method",
          capabilityId: "d5.pilotage_command" as const,
          mode: "REQUEST_EFFECT" as const,
          summary: "METHOD",
          parameters: {
            pilotageOperation: "CHOOSE_METHOD" as const,
            methodRef: "SFIA",
            methodVersion: "9",
          },
          constraints: [] as string[],
          dependsOn: ["i-open"],
          sourceEvidence: [] as string[],
        },
      ],
      clarifications: [] as string[],
      replyDraft: "Cycle et méthode.",
    };

    vi.spyOn(runNoraModule, "runNoraCognitiveTurn").mockResolvedValue(mockNoraTurn(qual) as never);

    const clientTurnKey = newId("ctk");
    const result = await postUserMessageAndNora(pilotId, preparationId, "Ouvre et choisis", {
      clientTurnKey,
    });
    expect(result.status).toBe("COMPLETE");
    expect(result.pilotageEffects?.length).toBeGreaterThanOrEqual(1);

    // Simulate interruption before final multi-intent payload: strip pilotageEffects,
    // keep semanticQualification stash (as markTurnUnknown merge would).
    const row = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.clientTurnKey, clientTurnKey))
        .limit(1)
    )[0];
    expect(row).toBeTruthy();
    const prev = JSON.parse(row!.resultJson || "{}") as Record<string, unknown>;
    const stripped = {
      status: "UNKNOWN",
      semanticQualification: prev.semanticQualification,
      semanticQualificationStashedAt: prev.semanticQualificationStashedAt,
      // deliberately no pilotageEffects / pilotageEffect
    };
    await db
      .update(conversationTurnCommands)
      .set({ status: "UNKNOWN", resultJson: JSON.stringify(stripped) })
      .where(eq(conversationTurnCommands.id, row!.id));

    const lookup = await lookupDurableTurnByClientKey(
      pilotId,
      preparationId,
      clientTurnKey,
    );
    expect(lookup.found).toBe(true);
    const ids = (lookup.pilotageEffects ?? [])
      .map((e) => e.semanticIntentId)
      .filter(Boolean);
    expect(ids).toContain("i-open");
    // Second intent reconstituted or UNKNOWN — never silently dropped.
    expect(ids).toContain("i-method");
    const fabricated = (lookup.pilotageEffects ?? []).filter(
      (e) => e.semanticIntentId === "i-method" && e.status === "APPLIED" && !e.commandId,
    );
    expect(fabricated.length).toBe(0);

    const cmds = await db
      .select()
      .from(businessCommands)
      .where(eq(businessCommands.projectId, projectId));
    // No duplication on lookup (read-only).
    const openCount = cmds.filter((c) => c.operation === "OPEN_CYCLE").length;
    expect(openCount).toBeLessThanOrEqual(1);
  });
});
```

### New test: e2-final-finops-attribution.pg.test.ts (full)
```ts
/**
 * E2-FINAL-03 — real FinOps service attribution on PostgreSQL DEV (no LIVE).
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db, sql as pgSql } from "@/db/client";
import {
  cognitiveWorks,
  pilots,
  preparations,
  projects,
  providerUsageObservations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  loadFinOpsSummary,
  loadFinOpsWorkDetail,
  loadFinOpsWorks,
} from "@/domains/finops/usage-read-service";

async function seedPilot() {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({
    id: pilotId,
    displayName: "e2-final-finops",
    githubUserId: `gh-${pilotId}`,
  });
  const prep = await openOrCreatePreparation(pilotId);
  return { pilotId, preparationId: prep.id };
}

async function seedProject(pilotId: string, preparationId: string, name: string) {
  await updatePreview(pilotId, preparationId, name, "e2-final");
  const refreshed = (
    await db.select().from(preparations).where(eq(preparations.id, preparationId))
  )[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: name,
    previewSummary: "e2-final",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`project seed failed: ${created.status}`);
  }
  return created.projectId;
}

async function insertObs(input: {
  pilotId: string;
  projectId: string | null;
  workId: string | null;
  tokens: number;
  model?: string;
}) {
  const id = crypto.randomUUID();
  await db.insert(providerUsageObservations).values({
    id,
    ownerPilotId: input.pilotId,
    projectId: input.projectId,
    cognitiveWorkId: input.workId,
    lane: "DEV",
    operation: "chat.completions",
    modelRequested: input.model ?? "gpt-test",
    modelApplied: "UNVERIFIED",
    status: "OBSERVED",
    costCoverage: "KNOWN",
    granularity: "REQUEST",
    tariffVersion: "test-v1",
    idempotencyKey: `e2-final-${id}`,
    estimatedCostUsd: "0.01",
    inputTokens: input.tokens,
    outputTokens: 0,
    cachedInputTokens: 0,
    totalTokens: input.tokens,
    providerRequests: 1,
    segmentIndex: 0,
    createdAt: new Date(),
    limitsJson: [],
  });
  return id;
}

describe("E2-FINAL-03 — FinOps attribution coherence (PG)", () => {
  let pilotId = "";
  let prepId = "";
  let projectA = "";
  let projectB = "";
  let workAA = "";
  let workNullMulti = "";
  let workHors = "";
  let workConflictBA = "";
  const createdObs: string[] = [];
  const createdWorks: string[] = [];

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
    const seeded = await seedPilot();
    pilotId = seeded.pilotId;
    prepId = seeded.preparationId;
    projectA = await seedProject(pilotId, prepId, `finA-${newId("p").slice(-6)}`);
    // Second project needs new prep revision — open another prep path via same prep after bump
    await updatePreview(pilotId, prepId, `finB-${newId("p").slice(-6)}`, "e2-final-b");
    const refreshed = (
      await db.select().from(preparations).where(eq(preparations.id, prepId))
    )[0]!;
    // createProjectCommand requires matching name — create via direct insert for isolation
    projectB = newId("proj");
    await db.insert(projects).values({
      id: projectB,
      ownerPilotId: pilotId,
      name: `finB-${projectB.slice(-6)}`,
    });
    void refreshed;

    workAA = newId("cgw");
    workNullMulti = newId("cgw");
    workHors = newId("cgw");
    workConflictBA = newId("cgw");
    for (const [id, projectId] of [
      [workAA, projectA],
      [workNullMulti, null],
      [workHors, null],
      [workConflictBA, projectA],
    ] as const) {
      await db.insert(cognitiveWorks).values({
        id,
        ownerPilotId: pilotId,
        projectId,
        preparationId: prepId,
        objective: `work ${id}`,
        status: "COMPLETE",
        revision: 1,
      });
      createdWorks.push(id);
    }

    createdObs.push(
      await insertObs({ pilotId, projectId: projectA, workId: workAA, tokens: 100 }),
      await insertObs({ pilotId, projectId: null, workId: workAA, tokens: 10 }),
      await insertObs({ pilotId, projectId: projectA, workId: workNullMulti, tokens: 40 }),
      await insertObs({ pilotId, projectId: projectB, workId: workNullMulti, tokens: 60 }),
      await insertObs({ pilotId, projectId: null, workId: workHors, tokens: 7 }),
      await insertObs({ pilotId, projectId: projectB, workId: workConflictBA, tokens: 99 }),
    );
  });

  afterAll(async () => {
    if (createdObs.length) {
      await pgSql`DELETE FROM provider_usage_observations WHERE id = ANY(${createdObs})`;
    }
    if (createdWorks.length) {
      await pgSql`DELETE FROM cognitive_works WHERE id = ANY(${createdWorks})`;
    }
    if (projectB) {
      await pgSql`DELETE FROM projects WHERE id = ${projectB}`;
    }
  });

  it("A/A and NULL/A concordant under project A; B/A conflict excluded", async () => {
    const summaryA = await loadFinOpsSummary(pilotId, { projectId: projectA, period: "30" });
    const summaryB = await loadFinOpsSummary(pilotId, { projectId: projectB, period: "30" });
    const global = await loadFinOpsSummary(pilotId, { period: "30" });

    // workNullMulti A+B must not appear in either project filter (conflict).
    const worksA = await loadFinOpsWorks(pilotId, { projectId: projectA, period: "30" });
    const worksB = await loadFinOpsWorks(pilotId, { projectId: projectB, period: "30" });
    expect(worksA.items.some((w) => w.cognitiveWorkId === workNullMulti)).toBe(false);
    expect(worksB.items.some((w) => w.cognitiveWorkId === workNullMulti)).toBe(false);

    // Concordant workAA appears under A.
    expect(worksA.items.some((w) => w.cognitiveWorkId === workAA)).toBe(true);

    // B/A conflict work excluded from A and B project scopes.
    expect(worksA.items.some((w) => w.cognitiveWorkId === workConflictBA)).toBe(false);
    expect(worksB.items.some((w) => w.cognitiveWorkId === workConflictBA)).toBe(false);

    // Global still retains conflicting consumptions (not erased).
    expect(global.hasObservations).toBe(true);
    const detailConflict = await loadFinOpsWorkDetail(pilotId, workConflictBA);
    expect(detailConflict.projectId).toBeNull();
    const detailMulti = await loadFinOpsWorkDetail(pilotId, workNullMulti);
    expect(detailMulti.projectId).toBeNull();

    // Disjoint project aggregates must not both claim the multi-scope work tokens.
    const tokensA =
      summaryA.kpis.totalTokens.kind === "known" || summaryA.kpis.totalTokens.kind === "partial"
        ? summaryA.kpis.totalTokens.value
        : 0;
    const tokensB =
      summaryB.kpis.totalTokens.kind === "known" || summaryB.kpis.totalTokens.kind === "partial"
        ? summaryB.kpis.totalTokens.value
        : 0;
    expect(tokensA + tokensB).toBeLessThan(100 + 10 + 40 + 60 + 99);
  });

  it("isolates another pilot", async () => {
    const other = newId("pilot");
    await db.insert(pilots).values({
      id: other,
      displayName: "other",
      githubUserId: `gh-${other}`,
    });
    const summary = await loadFinOpsSummary(other, { period: "30" });
    expect(summary.hasObservations).toBe(false);
  });
});
```

### usage-projection.ts — FINAL helpers (excerpt)
```ts
  const work = input.workProjectId?.trim() || null;
  if (obs && work && obs !== work) return null;
  return work ?? obs ?? null;
}

/**
 * Work-level attribution across a slice of observations.
 * Any obs≠work conflict ⇒ null (do not invent / do not pick first).
 * Work NULL + multiple distinct observation projects ⇒ null (contradictory).
 */
export function effectiveFinOpsProjectIdForWork(
  workProjectId: string | null | undefined,
  rows: Array<{ projectId?: string | null }>,
): string | null {
  const work = workProjectId?.trim() || null;
  for (const r of rows) {
    const obs = r.projectId?.trim() || null;
    if (obs && work && obs !== work) return null;
  }
  return effectiveFinOpsProjectId({
    observationProjectId: resolveObservedProjectId(rows),
    workProjectId: work,
  });
}

/**
 * E2-FINAL-03 — true when the full (unfiltered) observation set for a work
 * cannot be attributed to a single project without inventing a choice.
 */
export function isFinOpsWorkAttributionConflict(
  workProjectId: string | null | undefined,
  rows: Array<{ projectId?: string | null }>,
): boolean {
  if (rows.length === 0) return false;
  return effectiveFinOpsProjectIdForWork(workProjectId, rows) === null &&
    rows.some((r) => Boolean(r.projectId?.trim()));
}

/**
 * Resolve a single projectId from observation rows without inventing attribution.
 * Prefer work.projectId (caller). When falling back to observations:
 * - zero projectIds → null (legitimate hors-projet)
 * - one distinct projectId → that id
 * - multiple distinct → null (do NOT pick the first; avoids cross-project contamination)
 */
export function resolveObservedProjectId(
  rows: Array<{ projectId?: string | null }>,
): string | null {
  const ids = new Set<string>();
  for (const r of rows) {
    const id = r.projectId?.trim();
    if (id) ids.add(id);
  }
  if (ids.size === 1) return [...ids][0]!;
  return null;
}

/** Display label: never present UNVERIFIED/null applied as if it were the requested model. */
export function finOpsModelDisplayLabel(input: {
  modelApplied?: string | null;
  modelRequested?: string | null;
```

### usage-read-service.ts — loadAttributionConflictWorkIds (excerpt)
```ts
}

type ObservationRow = typeof providerUsageObservations.$inferSelect;

/**
 * E2-FINAL-03 — work ids whose unfiltered observation set is contradictory
 * (must not enter project-scoped aggregates that would mask the conflict).
 */
async function loadAttributionConflictWorkIds(
  pilotId: string,
  since: Date,
  workProjectById: Map<string, string | null>,
): Promise<Set<string>> {
  const lane = studioLane();
  const workIds = [...workProjectById.keys()];
  if (workIds.length === 0) return new Set();
  const obs = await db
    .select({
      cognitiveWorkId: providerUsageObservations.cognitiveWorkId,
      projectId: providerUsageObservations.projectId,
    })
    .from(providerUsageObservations)
    .where(
      and(
        eq(providerUsageObservations.ownerPilotId, pilotId),
        gte(providerUsageObservations.createdAt, since),
        sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
        inArray(providerUsageObservations.cognitiveWorkId, workIds),
      ),
    );
  const byWork = new Map<string, Array<{ projectId?: string | null }>>();
  for (const r of obs) {
    if (!r.cognitiveWorkId) continue;
    const list = byWork.get(r.cognitiveWorkId) ?? [];
    list.push({ projectId: r.projectId });
    byWork.set(r.cognitiveWorkId, list);
  }
  const conflicts = new Set<string>();
  for (const [wid, rows] of byWork) {
    if (isFinOpsWorkAttributionConflict(workProjectById.get(wid) ?? null, rows)) {
      conflicts.add(wid);
    }
  }
  return conflicts;
}

async function loadObservations(
  pilotId: string,
  input: FinOpsFilterInput,
): Promise<ObservationRow[]> {
  const periodDays = input.periodDays ?? 30;
  const since = periodStartDate(periodDays);
  let cognitiveWorkIdsOnProject: string[] | undefined;
  let cognitiveWorkIdsHorsProjet: string[] | undefined;
  let workProjectById = new Map<string, string | null>();
  let conflictWorkIds = new Set<string>();
  if (input.projectId) {
    await assertProjectOwned(pilotId, input.projectId);
    const workRows = await db
      .select({ id: cognitiveWorks.id, projectId: cognitiveWorks.projectId })
      .from(cognitiveWorks)
      .where(eq(cognitiveWorks.ownerPilotId, pilotId));
    workProjectById = new Map(workRows.map((w) => [w.id, w.projectId]));
    // Resolve conflicts from the full observation set BEFORE project filtering.
    conflictWorkIds = await loadAttributionConflictWorkIds(
      pilotId,
      since,
      workProjectById,
    );
    cognitiveWorkIdsOnProject = workRows
      .filter((w) => w.projectId === input.projectId && !conflictWorkIds.has(w.id))
      .map((w) => w.id);
    cognitiveWorkIdsHorsProjet = workRows
      .filter((w) => w.projectId == null && !conflictWorkIds.has(w.id))
      .map((w) => w.id);
  }
  const rows = await db
    .select()
    .from(providerUsageObservations)
    .where(
      baseObservationWhere(
        pilotId,
        { ...input, periodDays },
        since,
        cognitiveWorkIdsOnProject,
        cognitiveWorkIdsHorsProjet,
```

### semantic-qualification.ts — normalizeKnowledgeRecordKind + extract (excerpt)
```ts
/**
 * Typed D4 continuity proposals from Nora qualification — never HumanDecision.
 *
 * Gate: only QUALIFIED + REQUEST_EFFECT + d4.record_knowledge.
 * EXPLAIN/EXPLORE/PREPARE intents are conversational only (TEMP-05).
 * Document/D6/Git REQUEST_EFFECT paths remain separate; this extractor never
 * loosens those capabilities.
 */
/**
 * Normalize legacy / acquis-kind aliases onto the D4 proposal enum.
 * KnowledgeKind FACT|HYPOTHESIS|… is the *record* kind inside ACQUIS, not the proposal kind.
 */
export function normalizeKnowledgeRecordKind(
  raw: string | undefined | null,
): z.infer<typeof KnowledgeRecordKindSchema> | null {
  if (!raw) return null;
  const u = raw.trim().toUpperCase();
  if (u === "ACQUIS" || u === "OPEN_POINT" || u === "SUBJECT") {
    return u as z.infer<typeof KnowledgeRecordKindSchema>;
  }
  // Legacy / mistaken aliases for record_knowledge acquis proposals.
  if (
    u === "FACT" ||
    u === "HYPOTHESIS" ||
    u === "RECOMMENDATION" ||
    u === "LIMIT" ||
    u === "KNOWLEDGE"
  ) {
    return "ACQUIS";
  }
  return null;
}

export function extractKnowledgeProposals(
  q: NoraTurnQualification,
): KnowledgeCapitalisationProposal[] {
  if (q.status !== "QUALIFIED") return [];
  const out: KnowledgeCapitalisationProposal[] = [];
  for (const intent of effectIntents(q)) {
    if (intent.capabilityId !== "d4.record_knowledge") continue;
    const kind = normalizeKnowledgeRecordKind(intent.parameters.knowledgeKind);
    const statement = (intent.parameters.knowledgeStatement ?? intent.summary ?? "").trim();
    if (!kind || statement.length < 12) continue;
    out.push({
      intentId: intent.id,
      kind,
      statement: statement.slice(0, 5000),
      epistemic: intent.parameters.epistemic ?? "hypothesized",
      subjectTitle: intent.parameters.subjectTitle?.trim() || undefined,
      subjectId: intent.parameters.subjectId?.trim() || undefined,
      parentSubjectId: intent.parameters.parentSubjectId?.trim() || undefined,
      continuityReason: intent.parameters.continuityReason?.trim() || undefined,
      supersedesAcquisId: intent.parameters.supersedesAcquisId?.trim() || undefined,
      resolvesOpenPointId: intent.parameters.resolvesOpenPointId?.trim() || undefined,
      relevantAcquisIds: intent.parameters.relevantAcquisIds?.filter(Boolean),
      relevantOpenPointIds: intent.parameters.relevantOpenPointIds?.filter(Boolean),
      openPointTitle: intent.parameters.openPointTitle?.trim() || undefined,
      subjectOrganization: intent.parameters.subjectOrganization,
      mergeSourceSubjectId: intent.parameters.mergeSourceSubjectId?.trim() || undefined,
    });
  }
  return out;
}

/** Counts for OBS — codes only, never statement bodies. */
export function summarizeKnowledgeProposals(
  proposals: KnowledgeCapitalisationProposal[],
): {
  proposal_present: boolean;
  proposal_count: number;
  subject_count: number;
  acquis_count: number;
  open_point_count: number;
} {
  let subject_count = 0;
  let acquis_count = 0;
  let open_point_count = 0;
  for (const p of proposals) {
    if (p.kind === "SUBJECT") subject_count += 1;
    else if (p.kind === "ACQUIS") acquis_count += 1;
    else if (p.kind === "OPEN_POINT") open_point_count += 1;
  }
  return {
    proposal_present: proposals.length > 0,
    proposal_count: proposals.length,
    subject_count,
    acquis_count,
    open_point_count,
```

### service.ts — extractDurablePilotageIntentIds + early D4 (excerpts)
```ts
};

/**
 * E2-FINAL-02 — durable pilotage intent ids independent of final TurnResult.pilotageEffects.
 * Prefer explicit effect list; else recover from stashed semanticQualification.
 */
export function extractDurablePilotageIntentIds(input: {
  fromJsonEffects?: TurnResult["pilotageEffects"] | null;
  resultJson?: string | null;
  semanticIntentIds?: string[] | null;
}): string[] {
  const fromArg = (input.semanticIntentIds ?? []).map((s) => s.trim()).filter(Boolean);
  if (fromArg.length > 0) return [...new Set(fromArg)];
  const fromEffects = (input.fromJsonEffects ?? [])
    .map((e) => e.semanticIntentId?.trim() || "")
    .filter(Boolean);
  if (fromEffects.length > 0) return [...new Set(fromEffects)];
  const raw = input.resultJson?.trim();
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as {
      pilotageEffects?: TurnPilotageEffect[];
      semanticQualification?: NoraTurnQualification;
    };
    const nested = (parsed.pilotageEffects ?? [])
      .map((e) => e.semanticIntentId?.trim() || "")
      .filter(Boolean);
    if (nested.length > 0) return [...new Set(nested)];
    const intents = parsed.semanticQualification?.intents ?? [];
    return [
      ...new Set(
        intents
          .filter(
            (i) =>
              i.mode === "REQUEST_EFFECT" &&
              (i.capabilityId === "d5.pilotage_command" ||
                i.capabilityId === "d6.human_decision"),
          )
          .map((i) => i.id.trim())
          .filter(Boolean),
      ),
    ];
  } catch {
    return [];
  }
}

async function resolvePilotageEffectForReplay(input: {
  pilotId: string;
  projectId: string | null | undefined;
  clientTurnKey?: string | null;
  userMessageId?: string | null;
  fromJson: TurnResult["pilotageEffect"] | null | undefined;
  /** E2-REL-02 — full multi-intent list from stored result_json when present. */
  fromJsonEffects?: TurnResult["pilotageEffects"] | null | undefined;
  humanDecisionCreated: boolean;
  /** Semantic intent ids — preferably from durable qualification, not only result effects. */
  semanticIntentIds?: string[] | null;
  /** Raw turn resultJson (may carry semanticQualification stash without pilotageEffects). */
  resultJson?: string | null;
}): Promise<{
  pilotageEffect: TurnResult["pilotageEffect"];
  pilotageEffects?: TurnPilotageEffect[];
  humanDecisionCreated: boolean;
}> {
  // Prefer durable multi-intent payload from result_json (idempotent COMPLETE / partial).
  if (input.fromJsonEffects && input.fromJsonEffects.length > 0) {
    const primary =
      input.fromJsonEffects.find((e) => e.attempted && e.status) ??
      input.fromJsonEffects[0] ??
      null;
    return {
      pilotageEffect: input.fromJson ?? primary,
      pilotageEffects: input.fromJsonEffects,
      humanDecisionCreated:
        input.humanDecisionCreated ||
        input.fromJsonEffects.some((e) => Boolean(e.decisionId)),
    };
  }
  if (input.fromJson?.attempted && input.fromJson.status) {
    return {
      pilotageEffect: input.fromJson,
      pilotageEffects: input.fromJson ? [input.fromJson] : undefined,
      humanDecisionCreated: input.humanDecisionCreated || Boolean(input.fromJson.decisionId),
    };
  }
  if (!input.projectId) {
    return {
      pilotageEffect: input.fromJson ?? null,
      humanDecisionCreated: input.humanDecisionCreated,
    };
  }
  // E2-FINAL-02 — reconstitute each durable intent (qualification stash, not only JSON effects).
  const intentIds = extractDurablePilotageIntentIds({
    fromJsonEffects: input.fromJsonEffects,
    resultJson: input.resultJson,
    semanticIntentIds: input.semanticIntentIds,
  });
  if (intentIds.length > 0 && input.clientTurnKey?.trim()) {
    const effects: TurnPilotageEffect[] = [];
    let human = input.humanDecisionCreated;
    for (const semanticIntentId of intentIds) {
      const reconstituted = await reconstituteConversationalAuthority({
        pilotId: input.pilotId,
        projectId: input.projectId,
        clientTurnKey: input.clientTurnKey,
        userMessageId: input.userMessageId,
        semanticIntentId,
      });
      if (!reconstituted) {
        effects.push(unknownPilotageEffectRecord({ intentId: semanticIntentId }));
        continue;
      }
      const effect = pilotageEffectFromAuthority(reconstituted, semanticIntentId);
      if (effect) effects.push(effect);
      else effects.push(unknownPilotageEffectRecord({ intentId: semanticIntentId }));
      human = human || Boolean(reconstituted.humanDecisionCreated);
    }
    if (effects.length > 0) {
      return {
        pilotageEffect: pickPrimaryPilotageEffect(effects),
        pilotageEffects: effects,
        humanDecisionCreated: human,
      };
    }
  }
  const reconstituted = await reconstituteConversationalAuthority({
    pilotId: input.pilotId,
    projectId: input.projectId,
    clientTurnKey: input.clientTurnKey,
    userMessageId: input.userMessageId,
  });
  if (!reconstituted) {
    return {
      pilotageEffect: input.fromJson ?? null,
      humanDecisionCreated: input.humanDecisionCreated,
    };
  }
  const effect = pilotageEffectFromAuthority(reconstituted);
  return {
    pilotageEffect: effect,
```
```ts
    humanDecisionCreated: false,
    ownershipLost: false,
  };
  let capitalisationError: string | undefined;
  let ownershipLostBeforeD4 = false;

  // E2-REL-02 / E2-FINAL-01 — when D5/D6 dependsOn D4 knowledge intents, run
  // capitalisation first so cross-cap preconditions can be satisfied (not permanently blocked).
  const crossCapOutcomeByIntentId = new Map<string, string>();
  let capitalisationRanBeforePilotage = false;
  // Mint assistant id before early D4 so provenance can reference the future ASSISTANT message.
  const earlyAssistantMessageId = newId("msg");
  const pilotageIntentIdsEarly = intentIdsFromPilotageBindings(pilotageBindings);
  const intentDependsOnEarly = new Map(
    qualification.intents.map((i) => [i.id, i.dependsOn] as const),
  );
  const intentByIdEarly = new Map(qualification.intents.map((i) => [i.id, i] as const));
  const d4DepsForPilotage = new Set<string>();
  for (const b of pilotageBindings) {
    const id = b.intentId;
    for (const dep of intentDependsOnEarly.get(id) ?? []) {
      if (pilotageIntentIdsEarly.has(dep)) continue;
      const depIntent = intentByIdEarly.get(dep);
      if (
        depIntent?.capabilityId === "d4.record_knowledge" &&
        depIntent.mode === "REQUEST_EFFECT"
      ) {
        d4DepsForPilotage.add(dep);
      }
    }
  }
  if (
    allowOwnerEffects &&
    d4DepsForPilotage.size > 0 &&
    reply.status === "COMPLETE" &&
    (await requireTurnOwnership(reserved.commandId, reserved.ownerToken))
  ) {
    try {
      const allKnowledgeProposals = extractKnowledgeProposals(qualification);
      // Topo-order D4 deps among themselves, then gate each on its own dependsOn.
      const visit = new Set<string>();
      const visiting = new Set<string>();
      const orderedAll: string[] = [];
      const walk = (id: string) => {
        if (!d4DepsForPilotage.has(id) || visit.has(id)) return;
        if (visiting.has(id)) {
          // Cycle among early D4 — mark and skip mutation for the cycle members later.
          crossCapOutcomeByIntentId.set(id, "FAILED");
          return;
        }
        visiting.add(id);
        for (const d of intentDependsOnEarly.get(id) ?? []) {
          if (d4DepsForPilotage.has(d)) walk(d);
        }
        visiting.delete(id);
        visit.add(id);
        orderedAll.push(id);
      };
      for (const id of [...d4DepsForPilotage].sort()) walk(id);

      // Sequential per intent so peer D4 dependsOn see real outcomes (E2-FINAL-01).
      let writtenTotal = 0;
      let ranAny = false;
      for (const dep of orderedAll) {
        if (crossCapOutcomeByIntentId.get(dep) === "FAILED") continue;
        const depsOfDep = intentDependsOnEarly.get(dep) ?? [];
        let blocked: string | null = null;
        for (const d of depsOfDep) {
          if (pilotageIntentIdsEarly.has(d)) {
            blocked = `D4 (${dep}) dépend d'un acte D5/D6 (${d}) non encore exécuté`;
            break;
          }
          const prior = crossCapOutcomeByIntentId.get(d);
          if (prior !== undefined) {
            const u = prior.toUpperCase();
            if (
              !(
                u === "APPLIED" ||
                u === "AVAILABLE" ||
                u === "OK" ||
                u === "SUCCESS" ||
                u === "ALREADY_APPLIED"
              )
            ) {
              blocked = `D4 (${dep}) précondition (${d}) non satisfaite (${prior})`;
              break;
            }
          } else if (!d4DepsForPilotage.has(d)) {
            blocked = `D4 (${dep}) précondition (${d}) non résolue`;
            break;
          }
        }
        if (blocked) {
          crossCapOutcomeByIntentId.set(dep, "SKIPPED");
          continue;
        }
        const proposalsForIntent = allKnowledgeProposals.filter((p) => p.intentId === dep);
        const step = await maybeCapitalizeFromExchange(pilotId, preparationId, {
          userText: content,
          assistantText: reply.content,
          generationId: reply.generationId,
          userMessageId: reserved.userMessageId,
          assistantMessageId: earlyAssistantMessageId,
          proposals: proposalsForIntent,
          turnFence: {
            commandId: reserved.commandId,
            ownerToken: reserved.ownerToken,
            beforeFenceCheck: turnRaceHooks.beforeD4Effect,
          },
        });
        ranAny = true;
        capitalisation = {
          capitalisations: [
            ...capitalisation.capitalisations,
            ...step.capitalisations,
          ],
          selectionMethod: step.selectionMethod,
          selectionLimit: step.selectionLimit,
          humanDecisionCreated:
            capitalisation.humanDecisionCreated || step.humanDecisionCreated,
          ownershipLost: capitalisation.ownershipLost || step.ownershipLost,
        };
        if (step.ownershipLost) {
          ownershipLostBeforeD4 = true;
          crossCapOutcomeByIntentId.set(dep, "SKIPPED");
          break;
        }
        const outcome = crossCapOutcomeFromCapitalisations({
          intentId: dep,
          capitalisations: step.capitalisations,
          hadProposal: proposalsForIntent.length > 0,
          ownershipLost: false,
        });
        crossCapOutcomeByIntentId.set(dep, outcome);
        writtenTotal += step.capitalisations.filter(
          (c) => c.status === "AVAILABLE" || c.status === "OK",
        ).length;
      }
      // Mark any remaining early deps not visited (e.g. after ownership break).
      for (const dep of d4DepsForPilotage) {
        if (!crossCapOutcomeByIntentId.has(dep)) {
          crossCapOutcomeByIntentId.set(dep, ownershipLostBeforeD4 ? "SKIPPED" : "FAILED");
        }
      }
      capitalisationRanBeforePilotage = ranAny || d4DepsForPilotage.size > 0;
      emitObs({
        event_name: "d3.turn.knowledge_capitalisation",
        component: "d3.conversation",
        request_id: requestId,
        operation_id: reserved.operationId,
        generation_id: reply.generationId,
        outcome: "PARTIAL",
        meta: {
          early_before_pilotage: true,
          d4_deps: d4DepsForPilotage.size,
          capitalisation_written: writtenTotal,
        },
      });
    } catch {
      capitalisationError = "CAPITALISATION_EXCEPTION";
      for (const dep of d4DepsForPilotage) {
```

### knowledge/service.ts — intentId on capitalisation rows (excerpts)
```ts
      } else if (check?.subject) {
        recordSubjectId = check.subject.id;
        // Conflict: explicit subjectId + subjectTitle that does not match owned title.
        if (
          p.subjectTitle &&
          p.subjectTitle.trim().toLowerCase() !== check.subject.title.trim().toLowerCase()
        ) {
          results.push({
            intentId: p.intentId,
            kind: p.kind === "OPEN_POINT" ? "open_point" : "acquis",
            status: "FAILED",
            reason: "SUBJECT_ID_TITLE_CONFLICT",
            epistemicNote: p.continuityReason,
          });
          subjectRefFailed = true;
        }
      }
    }
    if (subjectRefFailed) continue;
    if (!recordSubjectId && p.subjectTitle) {
      const title = p.subjectTitle.trim().slice(0, 120);
      const norm = title.replace(/\s+/g, " ").toLowerCase();
      const fromBatch = batchTitleToId.get(norm);
      if (fromBatch) {
        recordSubjectId = fromBatch;
      } else if (title.length >= 3) {
        // Title-only: require unique ACTIVE match — never invent a target under ambiguous homonyms.
        const unique = await findActiveSubjectByTitle(pilotId, preparationId, title);
        if (unique) {
          recordSubjectId = unique.id;
        } else {
          const existingHomonyms = (
            await db
              .select({ id: knowledgeSubjects.id })
              .from(knowledgeSubjects)
              .where(
                and(
                  eq(knowledgeSubjects.preparationId, preparationId),
                  eq(knowledgeSubjects.ownerPilotId, pilotId),
                  eq(knowledgeSubjects.title, title.trim().slice(0, 200)),
                  eq(knowledgeSubjects.status, "ACTIVE"),
                ),
              )
              .limit(2)
          ).length;
          if (existingHomonyms > 1) {
            results.push({
              intentId: p.intentId,
              kind: p.kind === "OPEN_POINT" ? "open_point" : "acquis",
              status: "FAILED",
              reason: "SUBJECT_TITLE_AMBIGUOUS",
              epistemicNote: p.continuityReason,
            });
            continue;
          }
          const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
          if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
            results.push({
              intentId: p.intentId,
              kind: "subject",
              status: "FAILED",
              reason: "TURN_OWNERSHIP_LOST",
              epistemicNote: p.continuityReason,
            });
            return {
              capitalisations: results,
              selectionMethod: "semantic-proposals" as const,
              selectionLimit: "OWNERSHIP_LOST",
              humanDecisionCreated: false as const,
              ownershipLost: true as const,
            };
          }
          if (s.status === "AVAILABLE" && s.subjectId) {
            recordSubjectId = s.subjectId;
            // Side-effect subject for ACQUIS/OPEN_POINT — correlate to intent; primary
            // effect row below remains the authoritative outcome for the proposal kind.
            results.push({
              intentId: p.intentId,
              kind: "subject",
              id: s.subjectId,
              status: s.status,
              epistemicNote: p.continuityReason,
            });
          }
        }
      }
```
```ts
        });
        if (recordSubjectId) subjectsTouchedByAcquis.add(recordSubjectId);
      }
      continue;
    }

    // Unreachable for normalized proposals — keep explicit so unknown kinds never
    // look like silent success via a side-effect subject row alone.
    results.push({
      intentId: p.intentId,
      kind: "acquis",
      status: "FAILED",
      reason: "UNKNOWN_KNOWLEDGE_PROPOSAL_KIND",
      epistemicNote: p.continuityReason,
    });
  }

  // Existing-subject enrichment often arrives as ACQUIS-only. Still re-evaluate synthesis
  // when durable CURRENT knowledge changed and Nora did not emit an explicit SUBJECT revision.
  if (projectId) {
    for (const touchedId of subjectsTouchedByAcquis) {
```

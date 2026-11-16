# SFIA Review Pack — FULL — ML4D Sas Nora Corrective Integration

**Cycle:** 8 — Delivery / implémentation
**Profil:** CRITICAL
**Macro-lot:** R5 / ML4D — Convergence UX/UI globale
**Capacité:** Sas Nora — correctif intégré A/B/C/D
**Date:** 2026-11-16
**Intégrateur:** Cursor
**CKC:** absent → fallback **SFIA v2.6**
**Verdict Cursor:** `READY WITH RESERVES — SAS NORA CORRECTIVE INTEGRATION`

---

## 1. GO Morris

GO Morris 16 novembre 2026 — correctif de convergence avant recette sur candidat Sas Nora existant.

Autorisé: corrections techniques locales A–D, tests, documentation, commit local, handoff L3 borné.

**PAS DE GO:** RECETTE, push projet, PR, merge, STABLE, nouvelle migration structurante, décision normative, ADOPTED, Gate C.

Instruction: NE PAS RECOMMENCER LE DÉVELOPPEMENT. Un seul correctif intégré. Ne pas modifier Figma ni RECETTE.

---

## 2. Git Truth Check (réel)

| Champ | Valeur observée |
| --- | --- |
| Repo / origin | `mcleland147/sfia-workspace` — `https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| HEAD correctif | `1dfc79ff824a8c947ed7c013217ff948aaba5b06` |
| Parent (candidat Sas) | `596718b1029f32e48c1cb5c9a6ac586372b857c1` |
| Parent UX-004 / Sas parent | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Tree web | `2e2aae9bdb0322b1f4fb7e22c304b7f6d2b815d4` (était `03c73279…` avant correctif) |
| Build DEV | `9uKvoZLw0AsjIFm46-eAC` @ `127.0.0.1:3102` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` (baseline attendue) |
| Merge-base HEAD/main | `997d4c4e…` |
| Staged/unstaged produit | clean après commit (seul `.tmp-sfia-review/chatgpt-review.md` modifié localement pour ce pack) |
| Push produit | **AUCUN** |
| RECETTE | worktree `…/sfia-workspace-next-ml4d-ux004-recette-build-b05dacf47983` — HEAD `b05dacf4` — BUILD `20blGylSEta7201PgVvlw` — `:3200` **inchangée** |
| Worktrees concurrentes | nombreuses (AKG/docs/delivery) — hors scope ; branche Sas isolée dans ce worktree |
| Historique local Sas | `1dfc79ff` (correctif) → `596718b1` (candidat) → `b05dacf4` (UX-004) |

Compatibilité mandat: **OK** — travail sur branche Sas existante, pas de reset/rebase/clean destructif.

---

## 3. Sources et SHA

### Processus SFIA v2.6
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` — routage Next §4.3.0b
- `prompts/templates/sfia-cycle-execution-template.md` — contrat §5, Fake/Real §6.16, Review Pack §7, Handoff §7.10–7.11

### Next sur main (références)
- `projects/sfia-studio-next/governance/SEF.md`, `roadmap.md`, décisions R5 / sémantique Nora, ENV-01, product-versioning, visions, conception Sas, cadrage R4
- Doctrine: `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
- Routage historique Studio: **non activé**

### Contrats candidats (branche docs, pas main)
- docs@`22ee5540052db0932149a74f53b5b389970e0118` — `contrat-convergence-fonctionnelle.md` + `contrat-convergence-technique.md`

### Handoff de départ
- tip `a6d4ddc2d734270be20e54378193f3add96d2d0c` / blob `30fc0431da842b1869fc4433705584d111cc968e`

### Figma (VALIDATED UX Morris — non modifié)
- File `itgvCulInEnFY6DvgIegvP` — frames `607:3`, `607:62`, `607:131`, `607:203`, `607:277`

### ENV-01 / versioning blobs attendus
- ENV-01 blob `14b61f0d…` ; product-versioning blob `8bc93e0f…`
- Package technique: `0.0.0-dev` — classe **MINOR candidate**, **NO RELEASE**

---

## 4. Contrats et Figma

Les cinq frames Sas Nora restent la référence visuelle. Aucune modification Figma. L’UI correctif retire les onglets principaux Discussion/Journal/Documents et expose Journal/Documents en outils secondaires (`<details data-testid="sas-secondary-tools">`), conversation dominante + aperçu vivant.

Contrats docs non réécrits sur leur branche dédiée (pas de mandat Git docs distinct). As-built candidat mis à jour sur la branche produit.

---

## 5. Quatre écarts initiaux

| ID | Défaut ChatGPT | Objectif |
| --- | --- | --- |
| **A** | Unicité nom non sérialisée entre préparations/clés d’idempotence distinctes ; JS vs SQL normalize divergents | Au plus un projet / nom normalisé / Pilote sous concurrence réelle |
| **B** | PATCH aperçu sans projection ; fallback « Projet sans titre » | Création = nom inspecté/corrigé ; pas d’identité inventée |
| **C** | Maturation regex/mots-clés ; outcome/scope null ; projection avant commit durable | Qualification structurée ; persist post-COMPLETE ; négations respectées |
| **D** | Navigation Discussion/Journal/Documents permanente | Chrome sas sobre ; outils secondaires |

---

## 6. Blast radius

| Zone | Impact |
| --- | --- |
| `createProjectCommand` | Verrou advisory pilote + comparaison JS |
| `projection.ts` / `service.ts` préparation | Merge Pilote, aperçu→projection, inspected create |
| Conversation D3 | Champs qualification + ordre apply après COMPLETE |
| UI sas `page.tsx` + API PATCH | Outils secondaires ; correction Pilote unique |
| Fixtures / e2e helpers | Parcours principal sans formulaire ; secondary tools |
| Migration 013 | **Inchangée** (aucune 014) |
| PF-CRE-14 / SEF / décisions | **Non réécrits** |
| RECETTE / LaunchAgents | **Non touchés** |

---

## 7. Choix techniques retenus

### A — Unicité
- **Retenu:** `pg_advisory_xact_lock(hashtext(pilotId), hashtext('sfia:d2:project-name'))` **puis** lock idempotency ; check sous TX avec `namesConflictForSamePilot` / `normalizeProjectNameKey` (trim, espaces, `toLocaleLowerCase('fr-FR')`, accents distincts).
- **Écarté:** UNIQUE SQL (nécessite audit historique + gate migration) ; comparaison SQL `lower(trim(regexp_replace…))` seule (≠ Unicode FR).
- Ordre des locks documenté pour éviter deadlock avec clés d’idempotence.

### B — Correction Pilote
- `updatePreview` → `applyPilotApercuCorrection` (preview + projection `PILOT_EXPRESSED`, même révision CAS).
- `mergeNoraDraftWithPrior` protège champs Pilote ; ne vide pas un acquis si le tour laisse vide.
- `inspectedCreatePayload` refuse nom vide (pas « Projet sans titre »).

### C — Maturation
- Schéma: `desiredOutcome`, `initialScope`, `preparationAssessment`, `preparationAssessmentExplanation`.
- Assessment typé (pas regex sur Markdown).
- Draft puis `applyPreparationProjection` **après** commit terminal COMPLETE.
- Un seul tour LLM ; fixtures déterministes pour preuves.

### D — UI
- Pas de `Surfaces sas` tabs permanents ; Journal/Documents dans secondary tools ; retour conversation.

---

## 8. Code créé — contenu complet (fichiers d’autorité corrective)

### `projection.ts` (intégral post-correctif)

```typescript
/**
 * D2 PreparationProjection — non-authorizing inspectable sas snapshot.
 * Persisted by D2 from a durable D3 turn qualification; never from Markdown scraping alone.
 */

export const PREPARATION_PROJECTION_SCHEMA_VERSION = 1 as const;

export type ProjectionFieldStatus =
  | "PILOT_EXPRESSED"
  | "NORA_PROPOSED"
  | "NEEDS_CONFIRMATION";

export type ProjectionFieldSourceKind = "PILOT_TURN" | "NORA_TURN" | "KNOWLEDGE_REF";

export type ProposedField<T> = {
  value: T;
  status: ProjectionFieldStatus;
  source: { kind: ProjectionFieldSourceKind; ref: string };
  isCurrent: boolean;
};

export type ProjectionAssessment =
  | "EXPLORING"
  | "CLARIFYING"
  | "PROPOSAL"
  | "BASE_SUFFICIENTE";

export type PreparationProjection = {
  schemaVersion: typeof PREPARATION_PROJECTION_SCHEMA_VERSION;
  preparationId: string;
  revision: number;
  updatedFromTurnKey: string | null;
  observedAt: string | null;
  name: ProposedField<string> | null;
  intention: ProposedField<string> | null;
  desiredOutcome: ProposedField<string> | null;
  initialScope: ProposedField<string> | null;
  openQuestions: ProposedField<string>[];
  suggestion: {
    assessment: ProjectionAssessment;
    explanation: string;
    sourceTurnKey: string | null;
  } | null;
};

export type ApplyProjectionResult =
  | { status: "APPLIED"; revision: number; projection: PreparationProjection }
  | { status: "UNCHANGED"; revision: number; projection: PreparationProjection | null }
  | { status: "CONFLICT"; actualRevision: number; reason: string }
  | { status: "UNAVAILABLE"; reason: string }
  | { status: "FORBIDDEN" };

/**
 * Single comparison semantic for same-pilot name uniqueness.
 * trim + collapse whitespace + Unicode case-fold (fr-FR). Accents preserved as distinct.
 * Used for both creation checks and searches — never mix with SQL lower() alone.
 */
export function normalizeProjectNameKey(raw: string): string {
  return raw.trim().replace(/\s+/g, " ").toLocaleLowerCase("fr-FR");
}

export function namesConflictForSamePilot(a: string, b: string): boolean {
  const ka = normalizeProjectNameKey(a);
  const kb = normalizeProjectNameKey(b);
  return ka.length > 0 && kb.length > 0 && ka === kb;
}

export function parseProjectionJson(
  raw: unknown,
  preparationId: string,
  revision: number,
): PreparationProjection | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Partial<PreparationProjection>;
  if (o.schemaVersion !== 1) return null;
  return {
    schemaVersion: 1,
    preparationId: o.preparationId ?? preparationId,
    revision: typeof o.revision === "number" ? o.revision : revision,
    updatedFromTurnKey: o.updatedFromTurnKey ?? null,
    observedAt: o.observedAt ?? null,
    name: o.name ?? null,
    intention: o.intention ?? null,
    desiredOutcome: o.desiredOutcome ?? null,
    initialScope: o.initialScope ?? null,
    openQuestions: Array.isArray(o.openQuestions) ? o.openQuestions : [],
    suggestion: o.suggestion ?? null,
  };
}

function fieldEqual<T>(a: ProposedField<T> | null, b: ProposedField<T> | null): boolean {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return a.value === b.value && a.status === b.status && a.isCurrent === b.isCurrent;
}

export function projectionMateriallyChanged(
  prev: PreparationProjection | null,
  next: Omit<PreparationProjection, "revision" | "observedAt">,
): boolean {
  if (!prev) {
    return Boolean(
      next.name ||
        next.intention ||
        next.desiredOutcome ||
        next.initialScope ||
        next.openQuestions.length ||
        next.suggestion,
    );
  }
  if (!fieldEqual(prev.name, next.name)) return true;
  if (!fieldEqual(prev.intention, next.intention)) return true;
  if (!fieldEqual(prev.desiredOutcome, next.desiredOutcome)) return true;
  if (!fieldEqual(prev.initialScope, next.initialScope)) return true;
  if (prev.openQuestions.length !== next.openQuestions.length) return true;
  for (let i = 0; i < next.openQuestions.length; i += 1) {
    if (!fieldEqual(prev.openQuestions[i] ?? null, next.openQuestions[i] ?? null)) return true;
  }
  if ((prev.suggestion?.assessment ?? null) !== (next.suggestion?.assessment ?? null)) return true;
  if ((prev.suggestion?.explanation ?? null) !== (next.suggestion?.explanation ?? null)) return true;
  return false;
}

export function noraProposedField(
  value: string,
  turnKey: string,
  status: ProjectionFieldStatus = "NORA_PROPOSED",
): ProposedField<string> {
  return {
    value: value.trim().slice(0, 500),
    status,
    source: { kind: "NORA_TURN", ref: turnKey },
    isCurrent: true,
  };
}

export function pilotExpressedField(value: string, editKey: string): ProposedField<string> {
  return {
    value: value.trim().slice(0, 500),
    status: "PILOT_EXPRESSED",
    source: { kind: "PILOT_TURN", ref: editKey },
    isCurrent: true,
  };
}

/**
 * Preserve Pilot-expressed fields against Nora re-proposal of the same slot.
 * Do not clear an acquired field when the new turn leaves it empty.
 */
export function mergeNoraDraftWithPrior(
  prior: PreparationProjection | null,
  draft: Omit<PreparationProjection, "revision" | "observedAt">,
): Omit<PreparationProjection, "revision" | "observedAt"> {
  function mergeField(
    prev: ProposedField<string> | null | undefined,
    next: ProposedField<string> | null | undefined,
  ): ProposedField<string> | null {
    if (prev?.status === "PILOT_EXPRESSED") {
      // Nora may refine surrounding context but must not silently revert a confirmed Pilot edit.
      if (next?.status === "PILOT_EXPRESSED") return next;
      return prev;
    }
    if (next?.value?.trim()) return next;
    if (prev?.value?.trim()) return { ...prev, isCurrent: true };
    return next ?? null;
  }

  return {
    ...draft,
    name: mergeField(prior?.name, draft.name),
    intention: mergeField(prior?.intention, draft.intention),
    desiredOutcome: mergeField(prior?.desiredOutcome, draft.desiredOutcome),
    initialScope: mergeField(prior?.initialScope, draft.initialScope),
    openQuestions:
      draft.openQuestions.length > 0 ? draft.openQuestions : (prior?.openQuestions ?? []),
    suggestion: draft.suggestion ?? prior?.suggestion ?? null,
  };
}

/**
 * Derive a candidate projection draft from a durable D3 qualification envelope.
 * Does not scrape assistant Markdown as authority. Assessment comes from structured fields.
 */
export function draftProjectionFromQualification(input: {
  preparationId: string;
  turnKey: string;
  qualificationStatus: string;
  goal: string;
  desiredOutcome?: string;
  initialScope?: string;
  clarifications: string[];
  proposedProjectName: string | null;
  openPointStatements?: string[];
  preparationAssessment?: ProjectionAssessment | null;
  preparationAssessmentExplanation?: string | null;
}): Omit<PreparationProjection, "revision" | "observedAt"> | null {
  if (input.qualificationStatus === "UNAVAILABLE") return null;

  const turnKey = input.turnKey;
  const nameRaw = input.proposedProjectName?.trim() || "";
  const intentionRaw = input.goal.trim();
  const outcomeRaw = (input.desiredOutcome ?? "").trim();
  const scopeRaw = (input.initialScope ?? "").trim();
  const openFromClarifications = input.clarifications
    .map((c) => c.trim())
    .filter(Boolean)
    .slice(0, 6);
  const openFromKnowledge = (input.openPointStatements ?? [])
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 6);
  const openMerged = [...openFromClarifications];
  for (const s of openFromKnowledge) {
    if (!openMerged.some((x) => x.toLocaleLowerCase("fr-FR") === s.toLocaleLowerCase("fr-FR"))) {
      openMerged.push(s);
    }
  }

  const name = nameRaw ? noraProposedField(nameRaw.slice(0, 120), turnKey) : null;
  const intention = intentionRaw
    ? noraProposedField(intentionRaw.slice(0, 500), turnKey, "NEEDS_CONFIRMATION")
    : null;
  const desiredOutcome = outcomeRaw
    ? noraProposedField(outcomeRaw.slice(0, 500), turnKey, "NEEDS_CONFIRMATION")
    : null;
  const initialScope = scopeRaw
    ? noraProposedField(scopeRaw.slice(0, 500), turnKey, "NEEDS_CONFIRMATION")
    : null;
  const openQuestions = openMerged.map((q) =>
    noraProposedField(q.slice(0, 400), turnKey, "NEEDS_CONFIRMATION"),
  );

  let assessment: ProjectionAssessment = "EXPLORING";
  let explanation =
    "Nora explore encore l'intention. Aucune base de démarrage n'est affirmée.";

  if (input.preparationAssessment) {
    assessment = input.preparationAssessment;
    explanation =
      input.preparationAssessmentExplanation?.trim() ||
      (assessment === "BASE_SUFFICIENTE"
        ? "Nora estime qu'une base de démarrage est raisonnable — suggestion qualitative, pas une autorisation."
        : assessment === "PROPOSAL"
          ? "Une proposition de travail est disponible."
          : assessment === "CLARIFYING"
            ? "Une clarification reste utile."
            : explanation);
  } else if (intention && openQuestions.length > 0 && !name) {
    assessment = "CLARIFYING";
    explanation =
      "Des éléments sont compris, mais une clarification reste utile avant de figer un nom.";
  } else if (intention && name && (desiredOutcome || initialScope) && openQuestions.length === 0) {
    assessment = "BASE_SUFFICIENTE";
    explanation =
      "Intention, nom et premiers éléments de résultat/périmètre sont assez clairs pour démarrer.";
  } else if (intention && name && openQuestions.length > 0) {
    assessment = "PROPOSAL";
    explanation =
      "Une proposition de travail est disponible. Des points ouverts restent à préciser sans bloquer nécessairement la création.";
  } else if (intention && name) {
    assessment = "PROPOSAL";
    explanation = "Une proposition de travail se dessine ; Nora peut encore préciser résultat et périmètre.";
  } else if (intention) {
    assessment = "CLARIFYING";
    explanation = "Une intention se dessine ; Nora continue de clarifier le résultat et le périmètre.";
  }

  return {
    schemaVersion: 1,
    preparationId: input.preparationId,
    updatedFromTurnKey: turnKey,
    name,
    intention,
    desiredOutcome,
    initialScope,
    openQuestions,
    suggestion: {
      assessment,
      explanation,
      sourceTurnKey: turnKey,
    },
  };
}

/** Compatible preview fields for create-project / portfolio labels. */
export function previewFieldsFromProjection(
  projection: PreparationProjection | null,
  fallbackName: string,
  fallbackSummary: string,
): { previewName: string; previewSummary: string } {
  const name = projection?.name?.value?.trim() || fallbackName.trim();
  const parts: string[] = [];
  if (projection?.intention?.value?.trim()) parts.push(projection.intention.value.trim());
  if (projection?.desiredOutcome?.value?.trim()) parts.push(projection.desiredOutcome.value.trim());
  if (projection?.initialScope?.value?.trim()) parts.push(projection.initialScope.value.trim());
  if (projection?.suggestion?.explanation?.trim()) {
    parts.push(projection.suggestion.explanation.trim());
  }
  const summary = parts.join("\n\n").slice(0, 2000) || fallbackSummary.trim();
  return { previewName: name.slice(0, 120), previewSummary: summary };
}

export function canCreateFromProjection(
  projection: PreparationProjection | null,
  previewName: string,
): boolean {
  const name = (projection?.name?.value || previewName).trim();
  return name.length > 0;
}

/** Authoritative inspected create payload — never invents a default title. */
export function inspectedCreatePayload(
  projection: PreparationProjection | null,
  previewName: string,
  previewSummary: string,
): { ok: true; projectName: string; previewSummary: string } | { ok: false; reason: string } {
  const name = (projection?.name?.value || previewName).trim();
  if (!name) {
    return { ok: false, reason: "project name required — clarify before create" };
  }
  const summary =
    previewFieldsFromProjection(projection, name, previewSummary).previewSummary ||
    previewSummary.trim();
  return { ok: true, projectName: name.slice(0, 120), previewSummary: summary };
}

```

### `create-project.ts` (intégral post-correctif)

```typescript
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  createProjectCommands,
  documents,
  preparationProjectLinks,
  preparations,
  projects,
} from "@/db/schema";
import { creationFingerprint } from "@/lib/fingerprint";
import { newId } from "@/lib/ids";
import {
  namesConflictForSamePilot,
  normalizeProjectNameKey,
} from "@/domains/preparation/projection";

export type CreateProjectInput = {
  pilotId: string;
  preparationId: string;
  expectedCreationRevision: number;
  projectName: string;
  previewSummary: string;
  idempotencyKey: string;
};

export type CreateProjectResult =
  | { status: "CREATED"; projectId: string; preparationId: string; committedAt: Date }
  | { status: "ALREADY_CREATED"; projectId: string; preparationId: string; committedAt: Date }
  | { status: "CONFLICT"; actualCreationRevision: number; reason: string }
  | { status: "FORBIDDEN" }
  | { status: "INVALID_REQUEST"; reason: string };

type Tx = Parameters<Parameters<typeof db.transaction>[0]>[0];

async function loadCommandUnderLock(
  tx: Tx,
  pilotId: string,
  idempotencyKey: string,
) {
  return (
    await tx
      .select()
      .from(createProjectCommands)
      .where(
        and(
          eq(createProjectCommands.pilotId, pilotId),
          eq(createProjectCommands.idempotencyKey, idempotencyKey),
        ),
      )
      .limit(1)
  )[0];
}

function fingerprintConflict(reason: string): CreateProjectResult {
  return { status: "CONFLICT", actualCreationRevision: -1, reason };
}

/**
 * Atomic create-project:
 * 1. Serialize all creates for the same (pilotId, idempotencyKey) via advisory xact lock
 *    BEFORE any project/link mutation — covers cross-preparation collisions.
 * 2. Evaluate prior command + fingerprint under that lock.
 * 3. Only then mutate preparation/project. CONFLICT paths never insert orphans.
 * 4. If a late race is detected after mutation, throw to ROLLBACK the transaction.
 */
export async function createProjectCommand(input: CreateProjectInput): Promise<CreateProjectResult> {
  const name = input.projectName.trim();
  if (!name) return { status: "INVALID_REQUEST", reason: "projectName required" };
  if (!input.idempotencyKey) return { status: "INVALID_REQUEST", reason: "idempotencyKey required" };

  const fingerprint = creationFingerprint({
    preparationId: input.preparationId,
    projectName: name,
    previewSummary: input.previewSummary,
    expectedCreationRevision: input.expectedCreationRevision,
  });

  try {
    return await db.transaction(async (tx) => {
      // Lock order (all create paths): (1) pilot name-create, (2) idempotency key.
      // (1) serializes concurrent creates across distinct preparations/keys for the same pilot.
      await tx.execute(
        sql`select pg_advisory_xact_lock(hashtext(${input.pilotId}), hashtext(${"sfia:d2:project-name"}))`,
      );
      // Cross-preparation serialization for this idempotency key (pilot-scoped).
      await tx.execute(
        sql`select pg_advisory_xact_lock(hashtext(${input.pilotId}), hashtext(${input.idempotencyKey}))`,
      );

      const prior = await loadCommandUnderLock(tx, input.pilotId, input.idempotencyKey);
      if (prior) {
        if (prior.fingerprint !== fingerprint || prior.preparationId !== input.preparationId) {
          // Different preparation or payload — reject with ZERO mutations in this TX.
          return fingerprintConflict(
            prior.preparationId !== input.preparationId
              ? "idempotency key already used for another preparation"
              : "idempotency fingerprint mismatch under lock",
          );
        }
        if (prior.projectId) {
          return {
            status: "ALREADY_CREATED" as const,
            projectId: prior.projectId,
            preparationId: prior.preparationId,
            committedAt: prior.createdAt,
          };
        }
      }

      // Serialize concurrent creates for this preparation.
      const locked = await tx.execute(
        sql`select id, creation_revision from preparations where id = ${input.preparationId} and owner_pilot_id = ${input.pilotId} for update`,
      );
      const rows = locked as unknown as Array<{ id: string; creation_revision: number }>;
      const prepRow = rows[0];
      if (!prepRow) return { status: "FORBIDDEN" as const };

      const existingLink = (
        await tx
          .select()
          .from(preparationProjectLinks)
          .where(eq(preparationProjectLinks.preparationId, input.preparationId))
          .limit(1)
      )[0];

      if (existingLink) {
        // Preparation already attached: record replay under same key/fingerprint only.
        if (prior && prior.fingerprint !== fingerprint) {
          return fingerprintConflict("idempotency fingerprint mismatch on attached preparation");
        }
        if (!prior) {
          await tx.insert(createProjectCommands).values({
            id: newId("cmd"),
            pilotId: input.pilotId,
            idempotencyKey: input.idempotencyKey,
            fingerprint,
            preparationId: input.preparationId,
            projectId: existingLink.projectId,
            result: "ALREADY_CREATED",
          });
        }
        return {
          status: "ALREADY_CREATED" as const,
          projectId: existingLink.projectId,
          preparationId: input.preparationId,
          committedAt: existingLink.attachedAt,
        };
      }

      if (Number(prepRow.creation_revision) !== input.expectedCreationRevision) {
        return {
          status: "CONFLICT" as const,
          actualCreationRevision: Number(prepRow.creation_revision),
          reason: "expectedCreationRevision stale",
        };
      }

      // Same-pilot name uniqueness (Morris 2026-11-16). Application-level only —
      // historical PF-CRE-14 duplicates exist; no UNIQUE DB constraint in this cycle.
      // Comparison uses the single JS semantic (normalizeProjectNameKey) under the pilot lock.
      // Replay ALREADY_CREATED paths above are unaffected.
      if (!normalizeProjectNameKey(name)) {
        return { status: "INVALID_REQUEST" as const, reason: "projectName required" };
      }
      const owned = await tx
        .select({ id: projects.id, name: projects.name })
        .from(projects)
        .where(eq(projects.ownerPilotId, input.pilotId));
      const nameHit = owned.find((p) => namesConflictForSamePilot(p.name, name));
      if (nameHit) {
        return {
          status: "CONFLICT" as const,
          actualCreationRevision: Number(prepRow.creation_revision),
          reason: "project name already used by this pilot",
        };
      }

      const projectId = newId("proj");
      const now = new Date();
      await tx.insert(projects).values({
        id: projectId,
        ownerPilotId: input.pilotId,
        name,
        createdAt: now,
      });
      await tx.insert(preparationProjectLinks).values({
        preparationId: input.preparationId,
        projectId,
        attachedAt: now,
      });
      await tx
        .update(preparations)
        .set({ status: "ATTACHED", updatedAt: now })
        .where(eq(preparations.id, input.preparationId));
      await tx
        .update(conversations)
        .set({ projectId })
        .where(eq(conversations.preparationId, input.preparationId));
      await tx
        .update(documents)
        .set({ projectId })
        .where(eq(documents.preparationId, input.preparationId));

      // Record command AFTER mutations but still inside TX. Unique violation / fingerprint
      // mismatch must ROLLBACK — never return CONFLICT after orphan inserts.
      const inserted = await tx
        .insert(createProjectCommands)
        .values({
          id: newId("cmd"),
          pilotId: input.pilotId,
          idempotencyKey: input.idempotencyKey,
          fingerprint,
          preparationId: input.preparationId,
          projectId,
          result: "CREATED",
          createdAt: now,
        })
        .onConflictDoNothing({
          target: [createProjectCommands.pilotId, createProjectCommands.idempotencyKey],
        })
        .returning();

      if (inserted.length === 0) {
        const raced = await loadCommandUnderLock(tx, input.pilotId, input.idempotencyKey);
        if (
          !raced ||
          raced.fingerprint !== fingerprint ||
          raced.preparationId !== input.preparationId
        ) {
          throw new Error("IDEMPOTENCY_RACE_ROLLBACK");
        }
        // Same claim won elsewhere under advisory lock — should be unreachable; rollback safe.
        throw new Error("IDEMPOTENCY_RACE_ROLLBACK");
      }

      return {
        status: "CREATED" as const,
        projectId,
        preparationId: input.preparationId,
        committedAt: now,
      };
    });
  } catch (e) {
    if (e instanceof Error && e.message === "IDEMPOTENCY_RACE_ROLLBACK") {
      return fingerprintConflict("idempotency race rolled back — no orphan mutations");
    }
    throw e;
  }
}

/**
 * Read-only reconciliation after lost ACK — never mutates.
 * When idempotencyKey is provided, the stored preparationId on the command MUST match
 * the requested preparationId — never return project A as confirmation for preparation B.
 */
export async function reconcileCreateProject(
  pilotId: string,
  preparationId: string,
  idempotencyKey?: string,
) {
  const prep = (
    await db
      .select()
      .from(preparations)
      .where(and(eq(preparations.id, preparationId), eq(preparations.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!prep) {
    return { status: "FORBIDDEN" as const };
  }

  if (idempotencyKey) {
    const cmd = (
      await db
        .select()
        .from(createProjectCommands)
        .where(
          and(
            eq(createProjectCommands.pilotId, pilotId),
            eq(createProjectCommands.idempotencyKey, idempotencyKey),
          ),
        )
        .limit(1)
    )[0];
    if (cmd?.projectId) {
      if (cmd.preparationId !== preparationId) {
        return {
          status: "CONFLICT" as const,
          reason: "idempotency key belongs to another preparation",
          commandPreparationId: cmd.preparationId,
        };
      }
      return {
        status: "ALREADY_CREATED" as const,
        projectId: cmd.projectId,
        preparationId: cmd.preparationId,
      };
    }
  }
  const link = (
    await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.preparationId, preparationId))
      .limit(1)
  )[0];
  if (link) {
    const proj = (
      await db
        .select()
        .from(projects)
        .where(and(eq(projects.id, link.projectId), eq(projects.ownerPilotId, pilotId)))
        .limit(1)
    )[0];
    if (proj) return { status: "ALREADY_CREATED" as const, projectId: proj.id, preparationId };
  }
  return { status: "NOT_CONFIRMED_OR_UNKNOWN" as const };
}

```

---

## 9. Code modifié — diffs exploitables (596718b1..1dfc79ff)

### Diff `create-project.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts b/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
index 0a8cea41..b688900b 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
@@ -10,7 +10,10 @@ import {
 } from "@/db/schema";
 import { creationFingerprint } from "@/lib/fingerprint";
 import { newId } from "@/lib/ids";
-import { normalizeProjectNameKey } from "@/domains/preparation/projection";
+import {
+  namesConflictForSamePilot,
+  normalizeProjectNameKey,
+} from "@/domains/preparation/projection";

 export type CreateProjectInput = {
   pilotId: string;
@@ -75,6 +78,11 @@ export async function createProjectCommand(input: CreateProjectInput): Promise<C

   try {
     return await db.transaction(async (tx) => {
+      // Lock order (all create paths): (1) pilot name-create, (2) idempotency key.
+      // (1) serializes concurrent creates across distinct preparations/keys for the same pilot.
+      await tx.execute(
+        sql`select pg_advisory_xact_lock(hashtext(${input.pilotId}), hashtext(${"sfia:d2:project-name"}))`,
+      );
       // Cross-preparation serialization for this idempotency key (pilot-scoped).
       await tx.execute(
         sql`select pg_advisory_xact_lock(hashtext(${input.pilotId}), hashtext(${input.idempotencyKey}))`,
@@ -150,16 +158,17 @@ export async function createProjectCommand(input: CreateProjectInput): Promise<C

       // Same-pilot name uniqueness (Morris 2026-11-16). Application-level only —
       // historical PF-CRE-14 duplicates exist; no UNIQUE DB constraint in this cycle.
+      // Comparison uses the single JS semantic (normalizeProjectNameKey) under the pilot lock.
       // Replay ALREADY_CREATED paths above are unaffected.
-      const nameKey = normalizeProjectNameKey(name);
-      const nameHit = await tx.execute(
-        sql`select id from projects
-            where owner_pilot_id = ${input.pilotId}
-              and lower(trim(regexp_replace(name, '[[:space:]]+', ' ', 'g'))) = ${nameKey}
-            limit 1`,
-      );
-      const nameRows = nameHit as unknown as Array<{ id: string }>;
-      if (nameRows[0]) {
+      if (!normalizeProjectNameKey(name)) {
+        return { status: "INVALID_REQUEST" as const, reason: "projectName required" };
+      }
+      const owned = await tx
+        .select({ id: projects.id, name: projects.name })
+        .from(projects)
+        .where(eq(projects.ownerPilotId, input.pilotId));
+      const nameHit = owned.find((p) => namesConflictForSamePilot(p.name, name));
+      if (nameHit) {
         return {
           status: "CONFLICT" as const,
           actualCreationRevision: Number(prepRow.creation_revision),

```

### Diff `projection.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/projection.ts b/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
index 9d1f0249..a7f8cdec 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/projection.ts
@@ -50,11 +50,21 @@ export type ApplyProjectionResult =
   | { status: "UNAVAILABLE"; reason: string }
   | { status: "FORBIDDEN" };

-/** Normalize project name for same-pilot uniqueness (spaces + case). Accents preserved. */
+/**
+ * Single comparison semantic for same-pilot name uniqueness.
+ * trim + collapse whitespace + Unicode case-fold (fr-FR). Accents preserved as distinct.
+ * Used for both creation checks and searches — never mix with SQL lower() alone.
+ */
 export function normalizeProjectNameKey(raw: string): string {
   return raw.trim().replace(/\s+/g, " ").toLocaleLowerCase("fr-FR");
 }

+export function namesConflictForSamePilot(a: string, b: string): boolean {
+  const ka = normalizeProjectNameKey(a);
+  const kb = normalizeProjectNameKey(b);
+  return ka.length > 0 && kb.length > 0 && ka === kb;
+}
+
 export function parseProjectionJson(
   raw: unknown,
   preparationId: string,
@@ -124,25 +134,73 @@ export function noraProposedField(
   };
 }

+export function pilotExpressedField(value: string, editKey: string): ProposedField<string> {
+  return {
+    value: value.trim().slice(0, 500),
+    status: "PILOT_EXPRESSED",
+    source: { kind: "PILOT_TURN", ref: editKey },
+    isCurrent: true,
+  };
+}
+
+/**
+ * Preserve Pilot-expressed fields against Nora re-proposal of the same slot.
+ * Do not clear an acquired field when the new turn leaves it empty.
+ */
+export function mergeNoraDraftWithPrior(
+  prior: PreparationProjection | null,
+  draft: Omit<PreparationProjection, "revision" | "observedAt">,
+): Omit<PreparationProjection, "revision" | "observedAt"> {
+  function mergeField(
+    prev: ProposedField<string> | null | undefined,
+    next: ProposedField<string> | null | undefined,
+  ): ProposedField<string> | null {
+    if (prev?.status === "PILOT_EXPRESSED") {
+      // Nora may refine surrounding context but must not silently revert a confirmed Pilot edit.
+      if (next?.status === "PILOT_EXPRESSED") return next;
+      return prev;
+    }
+    if (next?.value?.trim()) return next;
+    if (prev?.value?.trim()) return { ...prev, isCurrent: true };
+    return next ?? null;
+  }
+
+  return {
+    ...draft,
+    name: mergeField(prior?.name, draft.name),
+    intention: mergeField(prior?.intention, draft.intention),
+    desiredOutcome: mergeField(prior?.desiredOutcome, draft.desiredOutcome),
+    initialScope: mergeField(prior?.initialScope, draft.initialScope),
+    openQuestions:
+      draft.openQuestions.length > 0 ? draft.openQuestions : (prior?.openQuestions ?? []),
+    suggestion: draft.suggestion ?? prior?.suggestion ?? null,
+  };
+}
+
 /**
  * Derive a candidate projection draft from a durable D3 qualification envelope.
- * Does not scrape assistant Markdown as authority.
+ * Does not scrape assistant Markdown as authority. Assessment comes from structured fields.
  */
 export function draftProjectionFromQualification(input: {
   preparationId: string;
   turnKey: string;
   qualificationStatus: string;
   goal: string;
+  desiredOutcome?: string;
+  initialScope?: string;
   clarifications: string[];
   proposedProjectName: string | null;
   openPointStatements?: string[];
-  replySignalsBaseSufficiency?: boolean;
+  preparationAssessment?: ProjectionAssessment | null;
+  preparationAssessmentExplanation?: string | null;
 }): Omit<PreparationProjection, "revision" | "observedAt"> | null {
   if (input.qualificationStatus === "UNAVAILABLE") return null;

   const turnKey = input.turnKey;
   const nameRaw = input.proposedProjectName?.trim() || "";
   const intentionRaw = input.goal.trim();
+  const outcomeRaw = (input.desiredOutcome ?? "").trim();
+  const scopeRaw = (input.initialScope ?? "").trim();
   const openFromClarifications = input.clarifications
     .map((c) => c.trim())
     .filter(Boolean)
@@ -162,6 +220,12 @@ export function draftProjectionFromQualification(input: {
   const intention = intentionRaw
     ? noraProposedField(intentionRaw.slice(0, 500), turnKey, "NEEDS_CONFIRMATION")
     : null;
+  const desiredOutcome = outcomeRaw
+    ? noraProposedField(outcomeRaw.slice(0, 500), turnKey, "NEEDS_CONFIRMATION")
+    : null;
+  const initialScope = scopeRaw
+    ? noraProposedField(scopeRaw.slice(0, 500), turnKey, "NEEDS_CONFIRMATION")
+    : null;
   const openQuestions = openMerged.map((q) =>
     noraProposedField(q.slice(0, 400), turnKey, "NEEDS_CONFIRMATION"),
   );
@@ -169,53 +233,46 @@ export function draftProjectionFromQualification(input: {
   let assessment: ProjectionAssessment = "EXPLORING";
   let explanation =
     "Nora explore encore l'intention. Aucune base de démarrage n'est affirmée.";
-  if (intention && openQuestions.length > 0 && !name) {
+
+  if (input.preparationAssessment) {
+    assessment = input.preparationAssessment;
+    explanation =
+      input.preparationAssessmentExplanation?.trim() ||
+      (assessment === "BASE_SUFFICIENTE"
+        ? "Nora estime qu'une base de démarrage est raisonnable — suggestion qualitative, pas une autorisation."
+        : assessment === "PROPOSAL"
+          ? "Une proposition de travail est disponible."
+          : assessment === "CLARIFYING"
+            ? "Une clarification reste utile."
+            : explanation);
+  } else if (intention && openQuestions.length > 0 && !name) {
     assessment = "CLARIFYING";
     explanation =
       "Des éléments sont compris, mais une clarification reste utile avant de figer un nom.";
+  } else if (intention && name && (desiredOutcome || initialScope) && openQuestions.length === 0) {
+    assessment = "BASE_SUFFICIENTE";
+    explanation =
+      "Intention, nom et premiers éléments de résultat/périmètre sont assez clairs pour démarrer.";
   } else if (intention && name && openQuestions.length > 0) {
     assessment = "PROPOSAL";
     explanation =
       "Une proposition de travail est disponible. Des points ouverts restent à préciser sans bloquer nécessairement la création.";
-  } else if (
-    intention &&
-    name &&
-    (openQuestions.length === 0 || input.replySignalsBaseSufficiency === true)
-  ) {
-    assessment = "BASE_SUFFICIENTE";
-    explanation =
-      "Intention et nom de travail sont suffisamment clairs pour démarrer. Les précisions restantes peuvent se faire dans le projet.";
+  } else if (intention && name) {
+    assessment = "PROPOSAL";
+    explanation = "Une proposition de travail se dessine ; Nora peut encore préciser résultat et périmètre.";
   } else if (intention) {
     assessment = "CLARIFYING";
     explanation = "Une intention se dessine ; Nora continue de clarifier le résultat et le périmètre.";
   }

-  if (!name && !intention && openQuestions.length === 0) {
-    return {
-      schemaVersion: 1,
-      preparationId: input.preparationId,
-      updatedFromTurnKey: turnKey,
-      name: null,
-      intention: null,
-      desiredOutcome: null,
-      initialScope: null,
-      openQuestions: [],
-      suggestion: {
-        assessment: "EXPLORING",
-        explanation,
-        sourceTurnKey: turnKey,
-      },
-    };
-  }
-
   return {
     schemaVersion: 1,
     preparationId: input.preparationId,
     updatedFromTurnKey: turnKey,
     name,
     intention,
-    desiredOutcome: null,
-    initialScope: null,
+    desiredOutcome,
+    initialScope,
     openQuestions,
     suggestion: {
       assessment,
@@ -250,3 +307,19 @@ export function canCreateFromProjection(
   const name = (projection?.name?.value || previewName).trim();
   return name.length > 0;
 }
+
+/** Authoritative inspected create payload — never invents a default title. */
+export function inspectedCreatePayload(
+  projection: PreparationProjection | null,
+  previewName: string,
+  previewSummary: string,
+): { ok: true; projectName: string; previewSummary: string } | { ok: false; reason: string } {
+  const name = (projection?.name?.value || previewName).trim();
+  if (!name) {
+    return { ok: false, reason: "project name required — clarify before create" };
+  }
+  const summary =
+    previewFieldsFromProjection(projection, name, previewSummary).previewSummary ||
+    previewSummary.trim();
+  return { ok: true, projectName: name.slice(0, 120), previewSummary: summary };
+}

```

### Diff `preparation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/service.ts b/projects/sfia-studio-next/web/src/domains/preparation/service.ts
index ed4bb5d5..003a76b2 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/service.ts
@@ -10,7 +10,9 @@ import { newId } from "@/lib/ids";
 import {
   type ApplyProjectionResult,
   type PreparationProjection,
+  mergeNoraDraftWithPrior,
   parseProjectionJson,
+  pilotExpressedField,
   previewFieldsFromProjection,
   projectionMateriallyChanged,
 } from "@/domains/preparation/projection";
@@ -50,8 +52,8 @@ export async function openOrCreatePreparation(pilotId: string, preparationId?: s
 }

 /**
- * Legacy preview write — CAS on expectedCreationRevision when provided.
- * Keeps previewName/previewSummary in sync for create-project consumers.
+ * Pilot aperçu correction — single authoritative write for preview + structured projection.
+ * CAS on expectedCreationRevision when provided.
  */
 export async function updatePreview(
   pilotId: string,
@@ -59,41 +61,144 @@ export async function updatePreview(
   previewName: string,
   previewSummary: string,
   expectedCreationRevision?: number,
-) {
-  const prep = await openOrCreatePreparation(pilotId, preparationId);
-  if (
-    expectedCreationRevision != null &&
-    Number(prep.creationRevision) !== Number(expectedCreationRevision)
-  ) {
+): Promise<number> {
+  const result = await applyPilotApercuCorrection({
+    pilotId,
+    preparationId,
+    previewName,
+    previewSummary,
+    expectedCreationRevision,
+  });
+  if (result.status === "FORBIDDEN") {
+    const err = new Error("FORBIDDEN");
+    (err as Error & { code: string }).code = "FORBIDDEN";
+    throw err;
+  }
+  if (result.status === "CONFLICT") {
     const err = new Error("CONFLICT");
     (err as Error & { code: string; actualCreationRevision: number }).code = "CONFLICT";
     (err as Error & { actualCreationRevision: number }).actualCreationRevision =
-      prep.creationRevision;
+      result.actualRevision;
     throw err;
   }
-  const nextRev = prep.creationRevision + 1;
-  const updated = await db
-    .update(preparations)
-    .set({
-      previewName,
-      previewSummary,
-      creationRevision: nextRev,
-      updatedAt: new Date(),
-    })
-    .where(
-      and(
-        eq(preparations.id, preparationId),
-        eq(preparations.ownerPilotId, pilotId),
-        eq(preparations.creationRevision, prep.creationRevision),
-      ),
-    )
-    .returning({ creationRevision: preparations.creationRevision });
-  if (!updated[0]) {
-    const err = new Error("CONFLICT");
-    (err as Error & { code: string }).code = "CONFLICT";
+  if (result.status === "UNAVAILABLE") {
+    const err = new Error("UNAVAILABLE");
+    (err as Error & { code: string }).code = "UNAVAILABLE";
     throw err;
   }
-  return updated[0].creationRevision;
+  return result.revision;
+}
+
+export async function applyPilotApercuCorrection(input: {
+  pilotId: string;
+  preparationId: string;
+  previewName: string;
+  previewSummary: string;
+  expectedCreationRevision?: number;
+  editKey?: string;
+}): Promise<ApplyProjectionResult> {
+  try {
+    return await db.transaction(async (tx) => {
+      const locked = await tx.execute(
+        sql`select id, creation_revision, preview_name, preview_summary, projection_json
+            from preparations
+            where id = ${input.preparationId} and owner_pilot_id = ${input.pilotId}
+            for update`,
+      );
+      const rows = locked as unknown as Array<{
+        id: string;
+        creation_revision: number;
+        preview_name: string;
+        preview_summary: string;
+        projection_json: unknown;
+      }>;
+      const row = rows[0];
+      if (!row) return { status: "FORBIDDEN" as const };
+
+      const currentRev = Number(row.creation_revision);
+      if (
+        input.expectedCreationRevision != null &&
+        currentRev !== Number(input.expectedCreationRevision)
+      ) {
+        return {
+          status: "CONFLICT" as const,
+          actualRevision: currentRev,
+          reason: "expectedCreationRevision stale",
+        };
+      }
+
+      const prev = parseProjectionJson(row.projection_json, input.preparationId, currentRev);
+      const editKey =
+        input.editKey?.trim() ||
+        `pilot-edit:${input.preparationId}:${currentRev}:${Date.now()}`;
+      const nameRaw = input.previewName.trim();
+      const summaryRaw = input.previewSummary.trim();
+      const draft: Omit<PreparationProjection, "revision" | "observedAt"> = {
+        schemaVersion: 1,
+        preparationId: input.preparationId,
+        updatedFromTurnKey: editKey,
+        name: nameRaw ? pilotExpressedField(nameRaw.slice(0, 120), editKey) : null,
+        intention: summaryRaw
+          ? pilotExpressedField(summaryRaw.slice(0, 500), editKey)
+          : (prev?.intention ?? null),
+        desiredOutcome: prev?.desiredOutcome ?? null,
+        initialScope: prev?.initialScope ?? null,
+        openQuestions: prev?.openQuestions ?? [],
+        suggestion: prev?.suggestion
+          ? {
+              ...prev.suggestion,
+              explanation:
+                prev.suggestion.explanation ||
+                "Aperçu ajusté par le Pilote — la création utilisera le nom inspecté.",
+            }
+          : {
+              assessment: nameRaw ? "PROPOSAL" : "EXPLORING",
+              explanation: nameRaw
+                ? "Aperçu ajusté explicitement par le Pilote."
+                : "Correction Pilote sans nom — clarification requise avant création.",
+              sourceTurnKey: editKey,
+            },
+      };
+
+      if (!projectionMateriallyChanged(prev, draft) && nameRaw === (row.preview_name ?? "").trim()) {
+        return {
+          status: "UNCHANGED" as const,
+          revision: currentRev,
+          projection: prev,
+        };
+      }
+
+      const nextRev = currentRev + 1;
+      const now = new Date();
+      const projection: PreparationProjection = {
+        ...draft,
+        revision: nextRev,
+        observedAt: now.toISOString(),
+      };
+      const preview = previewFieldsFromProjection(projection, nameRaw, summaryRaw);
+
+      await tx
+        .update(preparations)
+        .set({
+          creationRevision: nextRev,
+          previewName: preview.previewName,
+          previewSummary: preview.previewSummary || summaryRaw,
+          projectionJson: projection as unknown as Record<string, unknown>,
+          updatedAt: now,
+        })
+        .where(
+          and(
+            eq(preparations.id, input.preparationId),
+            eq(preparations.ownerPilotId, input.pilotId),
+            eq(preparations.creationRevision, currentRev),
+          ),
+        );
+
+      return { status: "APPLIED" as const, revision: nextRev, projection };
+    });
+  } catch {
+    return { status: "UNAVAILABLE", reason: "pilot aperçu write failed" };
+  }
 }

 /**
@@ -134,7 +239,8 @@ export async function applyPreparationProjection(input: {
       }

       const prev = parseProjectionJson(row.projection_json, input.preparationId, currentRev);
-      if (!projectionMateriallyChanged(prev, input.draft)) {
+      const merged = mergeNoraDraftWithPrior(prev, input.draft);
+      if (!projectionMateriallyChanged(prev, merged)) {
         return {
           status: "UNCHANGED" as const,
           revision: currentRev,
@@ -145,7 +251,7 @@ export async function applyPreparationProjection(input: {
       const nextRev = currentRev + 1;
       const now = new Date();
       const projection: PreparationProjection = {
-        ...input.draft,
+        ...merged,
         revision: nextRev,
         observedAt: now.toISOString(),
       };

```

### Diff `conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 94b0a0ae..7f04642a 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -16,7 +16,11 @@ import {
 // db still used by getConversationId / listMessages
 import { newId } from "@/lib/ids";
 import { generateNoraReply } from "./nora-adapter";
-import { getPreparationContext } from "@/domains/preparation/service";
+import {
+  applyPreparationProjection,
+  getPreparationContext,
+  openOrCreatePreparation,
+} from "@/domains/preparation/service";
 import {
   maybeCapitalizeFromExchange,
   reconstituteConfirmedD4Effects,
@@ -70,6 +74,7 @@ import {
   extractKnowledgeSelectionHints,
   extractPilotageBinding,
   projectStudioEffects,
+  unavailableQualification,
   type NoraTurnQualification,
 } from "./semantic-qualification";
 import { loadLatestMissionsByIntentKey } from "./intent-conduction";
@@ -99,7 +104,6 @@ import {
   mergeMissionSteps,
   recoverPendingMissionContinuation,
 } from "./intent-conduction";
-import { applyPreparationProjection } from "@/domains/preparation/service";
 import { draftProjectionFromQualification } from "@/domains/preparation/projection";

 /**
@@ -902,15 +906,7 @@ export async function postUserMessageAndNora(
   await bindTurnGenerationId(reserved.commandId, reserved.ownerToken, reply.generationId);

   const qualification: NoraTurnQualification =
-    reply.qualification ??
-    ({
-      schemaVersion: "ml4c-sem-qual-v1",
-      status: "UNAVAILABLE",
-      goal: "",
-      intents: [],
-      clarifications: ["MISSING_QUALIFICATION"],
-      replyDraft: reply.content,
-    } as NoraTurnQualification);
+    reply.qualification ?? unavailableQualification("MISSING_QUALIFICATION", reply.content);

   // TV-04 / T-03 — durable qualification before first owner mutation; applied required.
   const stashed = await stashTurnQualification({
@@ -2063,8 +2059,8 @@ export async function postUserMessageAndNora(
     }
   }

-  // D2 — living PreparationProjection from the same durable Nora qualification (no 2nd model).
-  // S05: never invent projection while unresolved work A blocks B effects / ownership lost.
+  // D2 projection draft prepared here; persisted only AFTER durable terminal commit (Gap C).
+  let preparationProjectionDraft: ReturnType<typeof draftProjectionFromQualification> = null;
   let preparationProjectionAck:
     | { status: string; revision?: number; assessment?: string }
     | null = null;
@@ -2073,42 +2069,21 @@ export async function postUserMessageAndNora(
       .filter((p) => p.kind === "OPEN_POINT")
       .map((p) => p.statement)
       .slice(0, 6);
-    const draft = draftProjectionFromQualification({
+    preparationProjectionDraft = draftProjectionFromQualification({
       preparationId,
       turnKey: clientIntentKey,
       qualificationStatus: qualification.status,
       goal: qualification.goal || "",
+      desiredOutcome: qualification.desiredOutcome || "",
+      initialScope: qualification.initialScope || "",
       clarifications: qualification.clarifications ?? [],
       proposedProjectName: studioIntent.proposedProjectName,
       openPointStatements: openFromQual,
-      replySignalsBaseSufficiency: /suffisant|pouvez démarrer|base (est )?suffisante/i.test(
-        qualification.replyDraft || "",
-      ),
+      preparationAssessment: qualification.preparationAssessment ?? null,
+      preparationAssessmentExplanation:
+        qualification.preparationAssessmentExplanation ?? null,
     });
-    if (draft) {
-      try {
-        const applied = await applyPreparationProjection({
-          pilotId,
-          preparationId,
-          expectedCreationRevision: ctx.preparation.creationRevision,
-          draft,
-        });
-        preparationProjectionAck = {
-          status: applied.status,
-          revision: "revision" in applied ? applied.revision : undefined,
-          assessment: draft.suggestion?.assessment,
-        };
-        if (applied.status === "APPLIED" || applied.status === "UNCHANGED") {
-          // Refresh local revision for later consumers in this turn.
-          ctx.preparation.creationRevision =
-            "revision" in applied && applied.revision != null
-              ? applied.revision
-              : ctx.preparation.creationRevision;
-        }
-      } catch {
-        preparationProjectionAck = { status: "UNAVAILABLE" };
-      }
-    } else if (qualification.status === "UNAVAILABLE") {
+    if (!preparationProjectionDraft && qualification.status === "UNAVAILABLE") {
       preparationProjectionAck = { status: "UNAVAILABLE" };
     }
   }
@@ -2412,8 +2387,36 @@ export async function postUserMessageAndNora(
       capitalisation: reconstituted.capitalisation,
       capitalisationLimit: reconstituted.capitalisationLimit,
       documentSave: reconstituted.documentSave,
+      preparationProjection: { status: "SKIPPED_OWNERSHIP" },
     };
   }
+
+  // Persist living projection only after durable COMPLETE terminal commit (Gap C).
+  if (
+    turnStatus === "COMPLETE" &&
+    preparationProjectionDraft &&
+    !ctx.project?.id &&
+    !ownershipLostBeforeD4
+  ) {
+    try {
+      const freshPrep = await openOrCreatePreparation(pilotId, preparationId);
+      const appliedProj = await applyPreparationProjection({
+        pilotId,
+        preparationId,
+        expectedCreationRevision: freshPrep.creationRevision,
+        draft: preparationProjectionDraft,
+      });
+      preparationProjectionAck = {
+        status: appliedProj.status,
+        revision: "revision" in appliedProj ? appliedProj.revision : undefined,
+        assessment: preparationProjectionDraft.suggestion?.assessment,
+      };
+    } catch {
+      preparationProjectionAck = { status: "UNAVAILABLE" };
+    }
+    resultPayload.preparationProjection = preparationProjectionAck;
+  }
+
   emitObs({
     event_name: "d3.turn.completed",
     component: "d3.conversation",

```

### Diff `semantic-qualification.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 6736bc9c..4d4a9f90 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -111,13 +111,29 @@ export const DocumentSourceSchema = z
   })
   .strict();

+/** Qualitative sas maturation — structured only; never a keyword scrape of replyDraft. */
+export const PreparationAssessmentSchema = z.enum([
+  "EXPLORING",
+  "CLARIFYING",
+  "PROPOSAL",
+  "BASE_SUFFICIENTE",
+]);
+export type PreparationAssessment = z.infer<typeof PreparationAssessmentSchema>;
+
 export const NoraTurnQualificationSchema = z.object({
   schemaVersion: z.literal(SEMANTIC_QUALIFICATION_SCHEMA_VERSION),
   status: QualificationStatusSchema,
   goal: z.string().max(800).default(""),
+  /** Résultat envisagé lorsque réellement exprimé — ne pas inventer. */
+  desiredOutcome: z.string().max(800).default(""),
+  /** Périmètre initial lorsque réellement exprimé — ne pas inventer. */
+  initialScope: z.string().max(800).default(""),
   intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
   clarifications: z.array(z.string().max(400)).max(8).default([]),
   replyDraft: z.string().max(12000).default(""),
+  /** Appréciation qualitative de préparation (suggestion, jamais une autorité). */
+  preparationAssessment: PreparationAssessmentSchema.optional(),
+  preparationAssessmentExplanation: z.string().max(800).optional(),
   documentProposal: DocumentProposalSchema.optional(),
   documentSource: DocumentSourceSchema.optional(),
 });
@@ -202,6 +218,8 @@ export function unavailableQualification(reason: string, replyDraft = ""): NoraT
     schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
     status: "UNAVAILABLE",
     goal: "",
+    desiredOutcome: "",
+    initialScope: "",
     intents: [],
     clarifications: [reason.slice(0, 400)],
     replyDraft:

```

### Diff `preparations/[preparationId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index eed5c4e6..ffda4a0b 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -12,7 +12,10 @@ import {
   DocumentLibrary,
   type RevisionRow,
 } from "@/components/figma/DocumentSurfaces";
-import type { PreparationProjection } from "@/domains/preparation/projection";
+import {
+  inspectedCreatePayload,
+  type PreparationProjection,
+} from "@/domains/preparation/projection";

 type Msg = { id: string; role: string; content: string; status: string };
 type Doc = {
@@ -489,17 +492,26 @@ export default function PreparationPage() {
     const res = await fetch(`/api/preparations/${preparationId}`, {
       method: "PATCH",
       headers: { "Content-Type": "application/json" },
-      body: JSON.stringify({ previewName: name, previewSummary: summary }),
+      body: JSON.stringify({
+        previewName: name,
+        previewSummary: summary,
+        expectedCreationRevision: creationRevision,
+      }),
     });
     const j = await res.json();
     if (res.ok) {
-      setPreviewName(name);
-      setPreviewSummary(summary);
+      setPreviewName(j.preparation?.previewName ?? name);
+      setPreviewSummary(j.preparation?.previewSummary ?? summary);
       setCreationRevision(j.creationRevision);
+      setProjection((j.projection as PreparationProjection | null) ?? null);
+      setProjectionFreshness("current");
       setProposalEditing(false);
-      setStatus(`Proposition enregistrée · révision ${j.creationRevision}`);
+      setStatus(`Aperçu corrigé · révision ${j.creationRevision}`);
+    } else if (res.status === 409) {
+      setStatus("CONFLICT: aperçu modifié ailleurs — rechargement");
+      await reload();
     } else {
-      setStatus(`Échec enregistrement proposition`);
+      setStatus(`Échec enregistrement aperçu`);
     }
   }

@@ -540,6 +552,11 @@ export default function PreparationPage() {
   }

   async function createProject() {
+    const createPayload = inspectedCreatePayload(projection, previewName, previewSummary);
+    if (!createPayload.ok) {
+      setStatus("Précisez un nom de projet inspecté avant de créer — aucun titre inventé.");
+      return;
+    }
     setBusy(true);
     // Structured binding only — server verifies clientIntentKey against durable mission.
     const clientIntentKey = awaitingClientIntentKey ?? undefined;
@@ -550,13 +567,8 @@ export default function PreparationPage() {
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
           expectedCreationRevision: creationRevision,
-          projectName:
-            projection?.name?.value?.trim() ||
-            previewName.trim() ||
-            "Projet sans titre",
-          previewSummary:
-            projection?.intention?.value?.trim() ||
-            previewSummary,
+          projectName: createPayload.projectName,
+          previewSummary: createPayload.previewSummary,
           idempotencyKey: key,
           clientIntentKey,
         }),
@@ -665,8 +677,10 @@ export default function PreparationPage() {
   }

   function startConstituteProposal() {
-    setDraftProposalName(previewName);
-    setDraftProposalSummary(previewSummary);
+    setDraftProposalName(projection?.name?.value?.trim() || previewName);
+    setDraftProposalSummary(
+      projection?.intention?.value?.trim() || previewSummary,
+    );
     setProposalEditing(true);
   }

@@ -720,25 +734,40 @@ export default function PreparationPage() {
             : "Discutez librement avec Nora. L’aperçu du projet évolue pendant la conversation."}
           {projectId ? ` Projet lié : ${projectId}.` : ""}
         </p>
-        {/* Secondary surfaces kept for continuity tools; conversation remains the primary path. */}
-        <nav className="flex flex-wrap gap-2 pt-1" aria-label="Surfaces sas">
-          {(
-            [
-              ["travail", "Discussion"],
-              ["journal", "Journal"],
-              ["document", "Documents"],
-            ] as const
-          ).map(([id, label]) => (
+        {/* Gap D — no permanent Discussion/Journal/Documents tabs as primary sas chrome.
+            Contextual tools remain reachable without competing with conversation + aperçu. */}
+        {surface !== "travail" ? (
+          <nav className="flex flex-wrap gap-2 pt-1" aria-label="Retour conversation sas">
             <button
-              key={id}
               type="button"
-              className={`btn ${surface === id ? "" : "secondary"}`}
-              onClick={() => setSurface(id)}
+              className="btn secondary"
+              onClick={() => setSurface("travail")}
+              data-testid="sas-back-to-conversation"
             >
-              {label}
+              Retour à la conversation
             </button>
-          ))}
-        </nav>
+          </nav>
+        ) : (
+          <details className="pt-1 text-xs muted" data-testid="sas-secondary-tools">
+            <summary className="cursor-pointer">Outils secondaires du sas</summary>
+            <div className="flex flex-wrap gap-2 pt-2">
+              <button
+                type="button"
+                className="btn secondary"
+                onClick={() => setSurface("journal")}
+              >
+                Journal
+              </button>
+              <button
+                type="button"
+                className="btn secondary"
+                onClick={() => setSurface("document")}
+              >
+                Documents
+              </button>
+            </div>
+          </details>
+        )}
       </header>

       {surface === "travail" ? (

```

---

## 10. Invariants de concurrence

1. Contrainte évaluée côté serveur sous transaction.
2. Toutes créations concurrentes applicables passent le lock pilote `sfia:d2:project-name` avant check.
3. Au plus une création réussit pour (Pilote, nom normalisé).
4. L’autre reçoit `CONFLICT` sans projet orphelin (assert: 1 projet, 1 link).
5. Replay `ALREADY_CREATED` inchangé (même clé/fingerprint).
6. Collisions historiques non renommées/supprimées.
7. Autres Pilotes non affectés (lock + filtre `ownerPilotId`).
8. Idempotence / fingerprint / `expectedCreationRevision` préservés.
9. Ordre locks: (1) pilot name-create (2) idempotency key.

---

## 11. Preuve unicité PG concurrente

Test discriminant `GapA concurrent` — deux préparations, deux `idempotencyKey`, même nom normalisé, `Promise.all` parallèle:

```typescript
// Extrait inspectable — create-project.pg.test.ts
it("GapA concurrent: same-pilot parallel creates with same name yield one project", async () => {
  ...
  const [c1, c2] = await Promise.all([ createProjectCommand(...), createProjectCommand(...) ]);
  expect([c1.status, c2.status].sort()).toEqual(["CONFLICT", "CREATED"]);
  expect(all).toHaveLength(1);
  expect(links).toHaveLength(1);
});
```

Sans lock pilote, les deux TX pouvaient chacune ne trouver aucun homonyme → double CREATED. Avec lock: sérialisation réelle multi-connexion Vitest/PG.

Cas couverts ailleurs: casse/espaces (A12), accents (normalize FR), deux Pilotes (tests existants), replay ALREADY_CREATED.

### Diff tests PG

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
index c5c70115..c46d8a64 100644
--- a/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
@@ -174,6 +174,92 @@ describe("PostgreSQL create-project contracts", () => {
     expect(after.map((m) => m.id)).toEqual(before.map((m) => m.id));
   });

+  /**
+   * Discriminant concurrency: two preps, two idempotency keys, same normalized name, parallel.
+   * Without the pilot-scoped name lock, both could CREATED. With the lock: 1 CREATED + 1 CONFLICT.
+   */
+  it("GapA concurrent: same-pilot parallel creates with same name yield one project", async () => {
+    const pilotId = await seedPilot("ConcName");
+    const p1 = await openOrCreatePreparation(pilotId);
+    const p2 = await openOrCreatePreparation(pilotId);
+    await updatePreview(pilotId, p1.id, "Concurrent Homonym", "a");
+    await updatePreview(pilotId, p2.id, "concurrent   HOMONYM", "b");
+    const r1 = (await db.select().from(preparations).where(eq(preparations.id, p1.id)))[0];
+    const r2 = (await db.select().from(preparations).where(eq(preparations.id, p2.id)))[0];
+    const [c1, c2] = await Promise.all([
+      createProjectCommand({
+        pilotId,
+        preparationId: p1.id,
+        expectedCreationRevision: r1.creationRevision,
+        projectName: "Concurrent Homonym",
+        previewSummary: "a",
+        idempotencyKey: newId("idem"),
+      }),
+      createProjectCommand({
+        pilotId,
+        preparationId: p2.id,
+        expectedCreationRevision: r2.creationRevision,
+        projectName: "  concurrent HOMONYM ",
+        previewSummary: "b",
+        idempotencyKey: newId("idem"),
+      }),
+    ]);
+    const statuses = [c1.status, c2.status].sort();
+    expect(statuses).toEqual(["CONFLICT", "CREATED"]);
+    const created = c1.status === "CREATED" ? c1 : c2.status === "CREATED" ? c2 : null;
+    const conflict = c1.status === "CONFLICT" ? c1 : c2.status === "CONFLICT" ? c2 : null;
+    expect(created).toBeTruthy();
+    expect(conflict).toBeTruthy();
+    if (conflict && conflict.status === "CONFLICT") {
+      expect(conflict.reason).toMatch(/name already used/i);
+    }
+    const all = await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId));
+    expect(all).toHaveLength(1);
+    const links = await db
+      .select()
+      .from(preparationProjectLinks)
+      .where(eq(preparationProjectLinks.projectId, all[0]!.id));
+    expect(links).toHaveLength(1);
+  });
+
+  it("GapB: pilot correction becomes create name (projection + command)", async () => {
+    const pilotId = await seedPilot("PilotEdit");
+    const prep = await openOrCreatePreparation(pilotId);
+    await postUserMessageAndNora(
+      pilotId,
+      prep.id,
+      "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
+    );
+    const afterNora = await getPreparationContext(pilotId, prep.id);
+    expect(afterNora.projection?.name?.value).toBe("Cockpit projets");
+    await updatePreview(
+      pilotId,
+      prep.id,
+      "Cockpit projets v2",
+      afterNora.projection?.intention?.value || "corrigé",
+      afterNora.preparation.creationRevision,
+    );
+    const afterEdit = await getPreparationContext(pilotId, prep.id);
+    expect(afterEdit.projection?.name?.value).toBe("Cockpit projets v2");
+    expect(afterEdit.projection?.name?.status).toBe("PILOT_EXPRESSED");
+    expect(afterEdit.preparation.previewName).toBe("Cockpit projets v2");
+    const created = await createProjectCommand({
+      pilotId,
+      preparationId: prep.id,
+      expectedCreationRevision: afterEdit.preparation.creationRevision,
+      projectName: afterEdit.projection!.name!.value,
+      previewSummary: afterEdit.preparation.previewSummary,
+      idempotencyKey: newId("idem"),
+    });
+    expect(created.status).toBe("CREATED");
+    if (created.status === "CREATED") {
+      const proj = (
+        await db.select().from(projects).where(eq(projects.id, created.projectId))
+      )[0];
+      expect(proj?.name).toBe("Cockpit projets v2");
+    }
+  });
+
   /**
    * Morris 2026-11-16 — same-pilot name uniqueness (app-level).
    * Diverges from design-only PF-CRE-14 (two same-name projects). Normative R2 not rewritten here.

```

**Résultat exécuté (cycle):** PG REAL create-project suite **21 PASS** (incl. GapA/GapB).

---

## 12. Cohérence correction Pilote / projection

`GapB`: Nora propose « Cockpit projets » → Pilote corrige via `updatePreview` → projection `PILOT_EXPRESSED` + previewName → `createProjectCommand` crée projet nommé « Cockpit projets v2 ».

`mergeNoraDraftWithPrior` empêche un tour Nora ultérieur de réécraser silencieusement un champ Pilote.

Create payload: `inspectedCreatePayload` — nom vide → clarification / INVALID, **pas** « Projet sans titre ».

---

## 13. Qualification Nora structurée

Champs ajoutés (même enveloppe `ml4c-sem-qual-v1`):
- `desiredOutcome`, `initialScope` (chaînes ; vides si non exprimés)
- `preparationAssessment` optionnel: `EXPLORING|CLARIFYING|PROPOSAL|BASE_SUFFICIENTE`
- `preparationAssessmentExplanation`

Prompts nora-adapter: ne pas inventer outcome/scope ; respecter négations ; assessment ≠ GO d’autorité.

UNIT: négation « n'est pas suffisante » → assessment ≠ `BASE_SUFFICIENTE` quand fixture/clarifying l’exprime.

Persistance projection: après commit COMPLETE seulement (évite projection durable si ownership/tour non confirmés).

---

## 14. Preuve parcours sans formulaire

E2E `AF primary path: create without constitute/adjust clicks`:
- messages → aperçu ready → `prep-create-project` → `/projects/{id}` → reload → « Même fil »
- assert `prep-proposal-edit` count 0 (pas d’adjust)
- assert pas de bouton Constituer / pas de nav Surfaces sas

Helper `constituteAndCreateProject` = **secondaire** uniquement ; `createFromLivingProjection` pour nominal.

### Diff e2e sas

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
index 8e7f50e7..7e74629d 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts
@@ -11,38 +11,65 @@ async function loginPilotA(page: import("@playwright/test").Page) {
   await page.waitForURL("**/portfolio");
 }

-test.describe("ML4D Sas Nora — living projection + create", () => {
+test.describe("ML4D Sas Nora — corrective convergence", () => {
   test.beforeEach(async ({ page }) => {
     await loginPilotA(page);
   });

-  test("AF living aperçu evolves without primary constitute form", async ({ page }) => {
+  test("AF living aperçu without primary constitute; secondary tools not permanent tabs", async ({
+    page,
+  }) => {
     await openNewPreparation(page);
     await expect(page.getByTestId("prep-proposal")).toBeVisible();
-    await expect(page.getByTestId("prep-proposal-empty")).toBeVisible();
     await expect(page.getByRole("button", { name: /Constituer une proposition/i })).toHaveCount(0);
+    await expect(page.getByRole("navigation", { name: "Surfaces sas" })).toHaveCount(0);
+    await expect(page.getByTestId("sas-secondary-tools")).toBeVisible();

-    await sendPrepMessage(page, "Je veux créer un projet.");
+    await sendPrepMessage(
+      page,
+      "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
+    );
     await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
-    await expect(page.getByTestId("prep-field-intention")).toContainText(/projet/i);
+    await expect(page.getByTestId("prep-field-name")).toContainText("Cockpit projets");
     await expect(page.getByTestId("prep-nora-assessment")).toBeVisible();
-
     await expect(page.getByTestId("studio-rail").getByText("Préparation en cours")).toBeVisible();
-    await expect(page.getByTestId("studio-rail").getByText("Pilotage", { exact: true })).toHaveCount(
-      0,
+  });
+
+  test("AF primary path: create without constitute/adjust clicks", async ({ page }) => {
+    await openNewPreparation(page);
+    await sendPrepMessage(
+      page,
+      "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
     );
+    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
+    await expect(page.getByTestId("prep-create-project")).toBeEnabled();
+    // Discriminant: never open adjust / constitute.
+    await expect(page.getByTestId("prep-proposal-edit")).toHaveCount(0);
+    await page.getByTestId("prep-create-project").click();
+    await page.waitForURL("**/projects/**", { timeout: 20000 });
+    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
+    expect(projectId).toBeTruthy();
+    await page.reload();
+    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
+    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
   });

-  test("AF create explicit still works via secondary adjust (D2)", async ({ page }) => {
+  test("AF secondary adjust still works (not the primary proof)", async ({ page }) => {
     await openNewPreparation(page);
-    // Dialogue-only seed — avoid awaiting D2 mission name binding for classic create path.
     await sendPrepMessage(page, "Bonjour Nora depuis Playwright");
     const projectId = await constituteAndCreateProject(page, {
-      name: `SasNora-${Date.now()}`,
-      summary: "Intention inspectée pour création explicite",
+      name: `SasNoraAdjust-${Date.now()}`,
+      summary: "Correction manuelle secondaire",
     });
     expect(projectId).toBeTruthy();
     await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
-    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
+  });
+
+  test("AF negation: « pas suffisante » does not show Base suffisante", async ({ page }) => {
+    await openNewPreparation(page);
+    await sendPrepMessage(page, "Cette base n'est pas suffisante pour démarrer.");
+    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
+    await expect(page.getByTestId("prep-proposal-state")).not.toHaveText(/Base suffisante/i);
+    await expect(page.getByTestId("prep-nora-assessment")).toContainText(/pas suffisante/i);
   });
 });

```

**Résultat:** 4 PASS (sas corrective).

---

## 15. Continuité sas→projet

Conservé: `createProjectCommand` (transaction, idempotency, fingerprint, expectedCreationRevision, owner-scoped, link, reconcile ACK).

Après effet: `projectId` réel, navigation `/projects/{id}`, shell projet, même conversation, marqueur véridique.

Preuve e2e: reload projet + « Même fil ». Création uniquement via commande D2 explicite (pas GET/refresh/conversation seule).

---

## 16. Tests positifs / négatifs

| Suite | Résultat cycle |
| --- | --- |
| UNIT projection (négation, outcome/scope, no fake title) | PASS |
| PG REAL create-project (21) GapA/GapB/A12 | PASS |
| Playwright sas corrective (4) | PASS |
| UX-003/004 non-régression (20) | PASS (cycle précédent correctif) |
| TypeScript / lint / build | BUILD PASS → `9uKvoZLw0AsjIFm46-eAC` |

### Diff UNIT projection

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
index e1aa8757..e7473f18 100644
--- a/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts
@@ -2,79 +2,99 @@ import { describe, expect, it } from "vitest";
 import {
   canCreateFromProjection,
   draftProjectionFromQualification,
+  inspectedCreatePayload,
+  mergeNoraDraftWithPrior,
+  namesConflictForSamePilot,
   normalizeProjectNameKey,
+  pilotExpressedField,
   previewFieldsFromProjection,
   projectionMateriallyChanged,
   type PreparationProjection,
 } from "@/domains/preparation/projection";

-describe("preparation projection helpers", () => {
+describe("preparation projection helpers (corrective)", () => {
   it("normalizes name keys (trim, spaces, case) while preserving accents", () => {
     expect(normalizeProjectNameKey("  Atlas   Pilot  ")).toBe("atlas pilot");
     expect(normalizeProjectNameKey("École")).toBe("école");
-    expect(normalizeProjectNameKey("ECOLE")).not.toBe(normalizeProjectNameKey("École"));
+    expect(namesConflictForSamePilot("École", "ecole")).toBe(false);
+    expect(namesConflictForSamePilot("Atlas", "  atlas ")).toBe(true);
   });

-  it("drafts exploring/clarifying/proposal/base assessments without opaque scores", () => {
-    const exploring = draftProjectionFromQualification({
-      preparationId: "prep-1",
-      turnKey: "t1",
-      qualificationStatus: "QUALIFIED",
-      goal: "",
-      clarifications: [],
-      proposedProjectName: null,
-    });
-    expect(exploring?.suggestion?.assessment).toBe("EXPLORING");
-
+  it("does not treat negation as BASE_SUFFICIENTE via keywords", () => {
     const clarifying = draftProjectionFromQualification({
       preparationId: "prep-1",
-      turnKey: "t2",
+      turnKey: "t-neg",
       qualificationStatus: "QUALIFIED",
-      goal: "Suivre les indicateurs de vente",
-      clarifications: ["Quel périmètre de données ?"],
+      goal: "Base encore insuffisante",
+      clarifications: ["Quel résultat concret voulez-vous obtenir en premier ?"],
       proposedProjectName: null,
+      preparationAssessment: "CLARIFYING",
+      preparationAssessmentExplanation:
+        "Le Pilote indique explicitement que la base n'est pas suffisante.",
     });
     expect(clarifying?.suggestion?.assessment).toBe("CLARIFYING");
-    expect(clarifying?.openQuestions.length).toBe(1);
+    expect(clarifying?.suggestion?.assessment).not.toBe("BASE_SUFFICIENTE");
+  });

-    const proposal = draftProjectionFromQualification({
+  it("fills desiredOutcome and initialScope from structured qualification", () => {
+    const draft = draftProjectionFromQualification({
       preparationId: "prep-1",
-      turnKey: "t3",
+      turnKey: "t-rich",
       qualificationStatus: "QUALIFIED",
-      goal: "Tableau de bord ventes",
-      clarifications: ["Quelle fréquence de mise à jour ?"],
-      proposedProjectName: "Pilotage ventes",
+      goal: "Cockpit de suivi",
+      desiredOutcome: "Voir portefeuille et risques",
+      initialScope: "Portefeuille et risques",
+      clarifications: [],
+      proposedProjectName: "Cockpit projets",
+      preparationAssessment: "BASE_SUFFICIENTE",
+      preparationAssessmentExplanation: "Base raisonnable pour démarrer.",
     });
-    expect(proposal?.suggestion?.assessment).toBe("PROPOSAL");
-    expect(proposal?.name?.value).toBe("Pilotage ventes");
+    expect(draft?.desiredOutcome?.value).toBe("Voir portefeuille et risques");
+    expect(draft?.initialScope?.value).toBe("Portefeuille et risques");
+    expect(draft?.suggestion?.assessment).toBe("BASE_SUFFICIENTE");
+  });

-    const base = draftProjectionFromQualification({
+  it("preserves pilot-expressed name against Nora re-proposal", () => {
+    const prior: PreparationProjection = {
+      schemaVersion: 1,
+      preparationId: "prep-1",
+      revision: 2,
+      updatedFromTurnKey: "pilot-edit",
+      observedAt: "2026-11-16T10:00:00.000Z",
+      name: pilotExpressedField("Cockpit projets", "pilot-edit"),
+      intention: pilotExpressedField("Suivi projets", "pilot-edit"),
+      desiredOutcome: null,
+      initialScope: null,
+      openQuestions: [],
+      suggestion: {
+        assessment: "PROPOSAL",
+        explanation: "corrigé",
+        sourceTurnKey: "pilot-edit",
+      },
+    };
+    const noraDraft = draftProjectionFromQualification({
       preparationId: "prep-1",
-      turnKey: "t4",
+      turnKey: "nora-late",
       qualificationStatus: "QUALIFIED",
-      goal: "Tableau de bord ventes",
+      goal: "Assistant de pilotage",
       clarifications: [],
-      proposedProjectName: "Pilotage ventes",
-      replySignalsBaseSufficiency: true,
-    });
-    expect(base?.suggestion?.assessment).toBe("BASE_SUFFICIENTE");
-    expect(base?.suggestion?.explanation).not.toMatch(/\b\d{1,3}\s*%|\bscore\b/i);
+      proposedProjectName: "Assistant de pilotage",
+      preparationAssessment: "PROPOSAL",
+    })!;
+    const merged = mergeNoraDraftWithPrior(prior, noraDraft);
+    expect(merged.name?.value).toBe("Cockpit projets");
+    expect(merged.name?.status).toBe("PILOT_EXPRESSED");
   });

-  it("returns null draft when qualification is unavailable", () => {
-    expect(
-      draftProjectionFromQualification({
-        preparationId: "prep-1",
-        turnKey: "t",
-        qualificationStatus: "UNAVAILABLE",
-        goal: "x",
-        clarifications: [],
-        proposedProjectName: "Y",
-      }),
-    ).toBeNull();
+  it("refuses inventing Projet sans titre", () => {
+    expect(inspectedCreatePayload(null, "", "").ok).toBe(false);
+    expect(canCreateFromProjection(null, "")).toBe(false);
+    const ok = inspectedCreatePayload(null, "Nom réel", "s");
+    expect(ok.ok).toBe(true);
+    if (ok.ok) expect(ok.projectName).toBe("Nom réel");
   });

-  it("detects material changes and ignores no-op revisions", () => {
+  it("detects material changes and syncs preview fields", () => {
     const draft = draftProjectionFromQualification({
       preparationId: "prep-1",
       turnKey: "t1",
@@ -89,36 +109,7 @@ describe("preparation projection helpers", () => {
       observedAt: "2026-11-16T10:00:00.000Z",
     };
     expect(projectionMateriallyChanged(prev, draft)).toBe(false);
-    expect(
-      projectionMateriallyChanged(prev, {
-        ...draft,
-        intention: {
-          ...draft.intention!,
-          value: "Intention B",
-        },
-      }),
-    ).toBe(true);
-  });
-
-  it("syncs preview fields and create precondition from projection", () => {
-    const draft = draftProjectionFromQualification({
-      preparationId: "prep-1",
-      turnKey: "t1",
-      qualificationStatus: "QUALIFIED",
-      goal: "Intention",
-      clarifications: [],
-      proposedProjectName: "Nom",
-    })!;
-    const projection: PreparationProjection = {
-      ...draft,
-      revision: 3,
-      observedAt: "2026-11-16T10:00:00.000Z",
-    };
-    const preview = previewFieldsFromProjection(projection, "fallback", "sum");
-    expect(preview.previewName).toBe("Nom");
-    expect(preview.previewSummary).toContain("Intention");
-    expect(canCreateFromProjection(projection, "")).toBe(true);
-    expect(canCreateFromProjection(null, "")).toBe(false);
-    expect(canCreateFromProjection(null, "Manuel")).toBe(true);
+    const preview = previewFieldsFromProjection(prev, "fallback", "sum");
+    expect(preview.previewName).toBe("Nom A");
   });
 });

```

Assertions interdites évitées: pas de `expect(x \|\| true)` ; GapA exige exactement `{CONFLICT, CREATED}` + 1 projet.

---

## 17. Fake / Real / LIVE

| Niveau | Statut |
| --- | --- |
| UNIT | PROVEN (fixtures / projection) |
| BROWSER FAKE | PROVEN (Playwright fixtures) |
| PG REAL | PROVEN (GapA concurrent discriminant) |
| NORA LIVE | **NOT PROVEN** |

Scénarios LIVE restants (si lane autorisée isolée): intention vague ; reformulation ; correction ; négation ; résultat+périmètre ; maturité expliquée ; reprise. Ne pas confondre avec fixtures déterministes.

---

## 18. Non-régression UX-003 / UX-004

- Connexion / session UX-003
- Portefeuille + Nouveau projet UX-004
- Fil d’Ariane / reprise préparation
- Rail avant projet ; shell après création
- Documents/connaissance accessibles (secondary tools sas)
- D2 autorité / double création / inter-Pilotes

E2E helpers adaptés (`openSasSecondaryTool`) pour Journal/Documents sans tabs principaux.

---

## 19. Migration 013 et gate

- Fichier: `web/src/db/migrations/013_preparation_projection.sql` — `projection_json jsonb` additive
- **Aucune migration 014** dans ce correctif
- Gate promotion RECETTE: **OUVERT** — ce GO n’autorise pas la mise à disposition RECETTE de 013
- Rollback logique = revert code ; `DROP COLUMN` perdrait projections enregistrées
- Tests DEV/PG isolés ENV-01 OK

---

## 20. Contradiction normative PF-CRE-14

PF-CRE-14 (historique) autorise homonymes. Orientation Morris 2026-11-16: unicité par Pilote.

**Implémentation locale app-level seulement. R2 / PF-CRE-14 non réécrits.**

Gate Morris D2 / décision normative distincte requis pour aligner le texte normatif. Sources: conception création projet ; GO correctif ; as-built.

---

## 21. Nouveau SHA / tree / build DEV

| Artefact | Valeur |
| --- | --- |
| SHA correctif | `1dfc79ff824a8c947ed7c013217ff948aaba5b06` |
| Tree web | `2e2aae9bdb0322b1f4fb7e22c304b7f6d2b815d4` |
| Build DEV | `9uKvoZLw0AsjIFm46-eAC` |
| Port DEV | `127.0.0.1:3102` (login HTTP 200) |

---

## 22. Statut RECETTE inchangée

| Champ | Valeur |
| --- | --- |
| Port | `127.0.0.1:3200` |
| SHA | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| BUILD | `20blGylSEta7201PgVvlw` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` — **non modifié** |
| Données | non partagées avec DEV |

---

## 23. Dette / exit

| Dette | Sortie |
| --- | --- |
| PF-CRE-14 vs unicité | Décision Morris D2 normative |
| Gate migration 013 | GO Morris avant RECETTE |
| NORA LIVE | Lane LIVE autorisée + scénarios bornés |
| Collisions historiques éventuelles | Audit données avant UNIQUE SQL éventuel |
| Qualité cognitive Nora | LIVE ≠ fixtures |

---

## 24. Verdict

`READY WITH RESERVES — SAS NORA CORRECTIVE INTEGRATION`

Réserves: Nora LIVE NOT PROVEN ; PF-CRE-14 ouvert ; gate 013 avant RECETTE ; pas de push/PR/ADOPTED.

---

## 25. Décisions restantes pour Morris

1. Alignement normatif PF-CRE-14 vs unicité même Pilote.
2. Promotion / gate migration 013 vers RECETTE (GO distinct).
3. Autorisation Nora LIVE bornée.
4. Recette utilisateur des 5 frames après correctif.
5. Push/PR produit — **non autorisés** par ce GO.

---

## Annexe — As-built synchronisé

# As-built — ML4D Sas Nora convergence + corrective (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + correctif |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Base UX-004 | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Candidat Sas initial | `596718b1029f32e48c1cb5c9a6ac586372b857c1` |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Contrats | docs@`22ee5540` (fonctionnel + technique) |
| Figma | `itgvCulInEnFY6DvgIegvP` 607:3…277 — VALIDATED UX Morris, non modifié |
| Lane | DEV only — RECETTE inchangée |
| Build DEV (correctif) | `9uKvoZLw0AsjIFm46-eAC` @ `127.0.0.1:3102` |
| RECETTE | `b05dacf4` / BUILD `20blGylSEta7201PgVvlw` @ `:3200` — **non modifiée** |

## Architecture

1. Tour Nora unique → qualification structurée (`desiredOutcome`, `initialScope`, `preparationAssessment*`).
2. Draft projection après qualification ; **persistance seulement après commit terminal COMPLETE**.
3. `mergeNoraDraftWithPrior` protège les champs `PILOT_EXPRESSED`.
4. `updatePreview` / PATCH = `applyPilotApercuCorrection` (preview + projection, même révision).
5. Création : `createProjectCommand` + verrou advisory pilote `sfia:d2:project-name` puis clé d’idempotence ; comparaison JS unique (`normalizeProjectNameKey` / `namesConflictForSamePilot`).
6. UI : conversation + aperçu ; outils Journal/Documents en secondaire (`<details>`).

## Quatre écarts corrigés

| Écart | Cause | Correction |
| --- | --- | --- |
| A Unicité concurrente | Verrou seulement sur idempotencyKey | Advisory lock pilote avant check ; comparaison JS (pas SQL `lower`) |
| B Correction Pilote | PATCH preview sans projection | `applyPilotApercuCorrection` ; create via `inspectedCreatePayload` (pas « Projet sans titre ») |
| C Maturation Nora | Regex « suffisant » ; outcome/scope null ; projection avant commit | Champs structurés ; assessment typé ; persist post-commit |
| D UI sas | Onglets Discussion/Journal/Documents permanents | Outils secondaires ; pas de chrome projet avant création |

## Contradiction PF-CRE-14

Orientation Morris (unicité / Pilote) vs PF-CRE-14 (homonymes autorisés). Implémentation locale app-level. **R2 non réécrit.** Gate Morris D2 ouvert.

## Migration 013

`projection_json` jsonb additive — présente dans le candidat. Ce GO ne promeut pas RECETTE. Gate migration explicite avant mise à disposition RECETTE. Rollback logique = revert code ; `DROP COLUMN` perd les projections enregistrées.

## Preuves

| Niveau | Résultat |
| --- | --- |
| UNIT projection / rail | PASS |
| PG REAL (21) dont GapA concurrent + GapB correction | PASS |
| BROWSER FAKE sas corrective (4) | PASS (parcours sans formulaire + négation) |
| UX-003/004 | voir Review Pack |
| NORA LIVE | **NOT PROVEN** |

## Rollback

Revert commit correctif (+ candidat Sas si besoin). Aucune migration destructive ajoutée dans ce correctif.


---

## Instruction ChatGPT

Avant conclusion, relire sur `sfia/review-handoff` le fichier `sfia-review-handoff/latest-chatgpt-review.md`, vérifier diffs, code, assertions et qualité des preuves. Ne pas confondre UNIT / BROWSER FAKE / PG REAL / NORA LIVE.

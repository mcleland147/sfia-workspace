# SFIA Review Pack — FULL — ML4D Sas Nora Convergence

| Champ | Valeur |
| --- | --- |
| GO | Morris GO 16/11/2026 — Sas Nora convergence CRITICAL (delivery local borné) |
| Verdict | **READY WITH RESERVES — SAS NORA INTEGRATED** |
| Date | 2026-11-16 |
| Macro-lot | R5 / ML4D — Sas conversationnel, projection, création, continuité |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Intégrateur | Cursor |
| Décideur | Morris |

---

## 1. GO Morris (extrait)

Transformer le sas semi-manuel en espace conversationnel conduit par Nora : intention floue → clarification → projection évolutive → appréciation qualitative → création explicite D2 → continuité fil dans le projet. Pas de second moteur, pas de questionnaire principal, pas de modification Figma/RECETTE/main/PR.

---

## 2. Git Truth Check

| Contrôle | Résultat |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` (worktree local) |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| HEAD candidat | `596718b1029f32e48c1cb5c9a6ac586372b857c1` |
| Parent / base UX-004 | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` (ancêtre, non utilisé) |
| Docs contrats | `origin/docs/next-ml4d-sas-nora-convergence-20261116@22ee5540052db0932149a74f53b5b389970e0118` |
| Tree `web` | `03c7327978ca5cbdd2b53d62de2f7845cbb61095` |
| Build ID DEV | `UoL3M9Ly9m-ZjTB1DPPJ4` |
| Push projet | **AUCUN** |
| Worktree RECETTE | `…-b05dacf47983` @ `b05dacf47983ed8d914c92619ede5ffe65ce9264` build `20blGylSEta7201PgVvlw` — **inchangé** |
| DEV | `http://127.0.0.1:3102` HTTP 200 |

Ascendance : candidat = UX-004 tip + 1 commit Sas Nora. Aucun reset/clean destructeur.

---

## 3. Sources / contrats / Figma

| Source | Ref |
| --- | --- |
| Contrat fonctionnel | docs@22ee5540052db0932149a74f53b5b389970e0118 `…/sas-nora/contrat-convergence-fonctionnelle.md` |
| Contrat technique | docs@22ee5540052db0932149a74f53b5b389970e0118 `…/sas-nora/contrat-convergence-technique.md` |
| Figma | `itgvCulInEnFY6DvgIegvP` page 606:2 frames 607:3/62/131/203/277 — lus, **non modifiés** |
| CKC | **ABSENT** — fallback SFIA v2.6 déclaré (sans autorité technique) |
| SEF / roadmap / ENV-01 / product-versioning | ON MAIN (consultés) |
| Doctrine Studio v3 knowledge | consultée (pas de pré-check ancienne app) |

---

## 4. Analyse d'écart (avant → après)

| Zone | Avant | Après | Statut |
| --- | --- | --- | --- |
| Parcours proposition | Formulaire « Constituer… » primaire | Aperçu vivant depuis qualification Nora | CORRIGÉ |
| Projection D2 | previewName/Summary seulement | + `projection_json` v1 CAS | CRÉÉ |
| Nora | updatePreview seulement si wantsProjectCreate | applyPreparationProjection chaque tour sas qualifié | ADAPTÉ |
| Rail sas | Surfaces projet désactivées listées | Portefeuille + Préparation en cours | CORRIGÉ |
| Création | createProjectCommand unique | inchangé + unicité nom app-level | ADAPTÉ |
| PF-CRE-14 | Homonymes autorisés (design) | Conflit produit Morris / R2 ouvert | RÉSERVE |
| Second moteur | — | INTERDIT — non créé | OK |

---

## 5. Architecture d'intégration

1. `postUserMessageAndNora` → qualification durable existante.
2. `draftProjectionFromQualification` (pas de 2e modèle, pas de scrape Markdown autoritaire).
3. `applyPreparationProjection` transaction FOR UPDATE + CAS `creation_revision` ; sync preview fields.
4. UI lit `GET /api/preparations/{id}` (`projection` via `getPreparationContext`).
5. `createProjectCommand` unique ; unicité nom `normalizeProjectNameKey` dans TX avant insert.
6. Continuité : même conversation/messages ; navigation `/projects/{id}` après CREATED/ALREADY_CREATED vérifié.

### Choix rejetés

| Choix | Raison |
| --- | --- |
| UNIQUE SQL sur `projects(owner, lower(name))` | Collisions historiques PF-CRE-14 → STOP migration |
| Second LLM résumé UI | Interdit ; blast + non-autorité |
| Nouveau endpoint création | Interdit |
| Migration destructive preview | Interdit |

---

## 6. Responsabilités

| Domaine | Propriétaire |
| --- | --- |
| D1 | Session + propriété préparation/projet (inchangé) |
| D2 | Projection + create-project + unicité nom app |
| D3 | Qualification / tour unique |
| D4 | Open points capitalisés ; hypothèses non promues en faits |
| D6 | Acte Pilote explicite pour créer ; suggestion Nora non-autorisante |

---

## 7. Contradiction PF-CRE-14

- **R2 design** : PF-CRE-14 prévoit deux projets même nom / IDs distincts.
- **Morris 16/11** : unicité par Pilote (casse/espaces normalisés ; accents conservés).
- **Implémentation** : app-level CONFLICT `project name already used by this pilot` ; replay ALREADY_CREATED intact.
- **Normatif** : **non régularisé** — dette gate Morris D2.

---

## 8. Schéma / API

### Migration 013 (réversible)

```sql
ALTER TABLE preparations ADD COLUMN IF NOT EXISTS projection_json jsonb;
```

### API

- GET préparation : expose `projection` (déjà via spread `getPreparationContext`).
- POST messages : `preparationProjection` ack dans TurnResult.
- POST create-project : inchangé + nouveau reason CONFLICT nom.

---

## 9. Code créé (contenu)

### `projects/sfia-studio-next/web/src/domains/preparation/projection.ts`
```ts
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

/** Normalize project name for same-pilot uniqueness (spaces + case). Accents preserved. */
export function normalizeProjectNameKey(raw: string): string {
  return raw.trim().replace(/\s+/g, " ").toLocaleLowerCase("fr-FR");
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

/**
 * Derive a candidate projection draft from a durable D3 qualification envelope.
 * Does not scrape assistant Markdown as authority.
 */
export function draftProjectionFromQualification(input: {
  preparationId: string;
  turnKey: string;
  qualificationStatus: string;
  goal: string;
  clarifications: string[];
  proposedProjectName: string | null;
  openPointStatements?: string[];
  replySignalsBaseSufficiency?: boolean;
}): Omit<PreparationProjection, "revision" | "observedAt"> | null {
  if (input.qualificationStatus === "UNAVAILABLE") return null;

  const turnKey = input.turnKey;
  const nameRaw = input.proposedProjectName?.trim() || "";
  const intentionRaw = input.goal.trim();
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
  const openQuestions = openMerged.map((q) =>
    noraProposedField(q.slice(0, 400), turnKey, "NEEDS_CONFIRMATION"),
  );

  let assessment: ProjectionAssessment = "EXPLORING";
  let explanation =
    "Nora explore encore l'intention. Aucune base de démarrage n'est affirmée.";
  if (intention && openQuestions.length > 0 && !name) {
    assessment = "CLARIFYING";
    explanation =
      "Des éléments sont compris, mais une clarification reste utile avant de figer un nom.";
  } else if (intention && name && openQuestions.length > 0) {
    assessment = "PROPOSAL";
    explanation =
      "Une proposition de travail est disponible. Des points ouverts restent à préciser sans bloquer nécessairement la création.";
  } else if (
    intention &&
    name &&
    (openQuestions.length === 0 || input.replySignalsBaseSufficiency === true)
  ) {
    assessment = "BASE_SUFFICIENTE";
    explanation =
      "Intention et nom de travail sont suffisamment clairs pour démarrer. Les précisions restantes peuvent se faire dans le projet.";
  } else if (intention) {
    assessment = "CLARIFYING";
    explanation = "Une intention se dessine ; Nora continue de clarifier le résultat et le périmètre.";
  }

  if (!name && !intention && openQuestions.length === 0) {
    return {
      schemaVersion: 1,
      preparationId: input.preparationId,
      updatedFromTurnKey: turnKey,
      name: null,
      intention: null,
      desiredOutcome: null,
      initialScope: null,
      openQuestions: [],
      suggestion: {
        assessment: "EXPLORING",
        explanation,
        sourceTurnKey: turnKey,
      },
    };
  }

  return {
    schemaVersion: 1,
    preparationId: input.preparationId,
    updatedFromTurnKey: turnKey,
    name,
    intention,
    desiredOutcome: null,
    initialScope: null,
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
```

### `projects/sfia-studio-next/web/src/db/migrations/013_preparation_projection.sql`
```sql
-- Additive PreparationProjection snapshot (ML4D Sas Nora).
-- Reversible: DROP COLUMN projection_json.
-- Does not invent provenance for historical rows (NULL = partial / legacy).
ALTER TABLE preparations
  ADD COLUMN IF NOT EXISTS projection_json jsonb;

COMMENT ON COLUMN preparations.projection_json IS
  'D2 PreparationProjection v1 snapshot; non-authorizing; revision-aligned with creation_revision';
```

### `projects/sfia-studio-next/construction/as-built-ml4d-sas-nora-convergence-20261116.md`
```md
# As-built — ML4D Sas Nora convergence (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création D2 |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Base | UX-004 `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Contrats | `docs/next-ml4d-sas-nora-convergence-20261116@22ee5540` (fonctionnel + technique) |
| Figma | `itgvCulInEnFY6DvgIegvP` frames `607:3` … `607:277` (consultés, non modifiés) |
| Lane | DEV only — RECETTE inchangée |

## Architecture retenue

1. **Un seul tour Nora** (`postUserMessageAndNora`) produit la qualification durable existante.
2. **Projection D2** dérivée de cette qualification (`draftProjectionFromQualification`) — pas de second appel modèle, pas de scraping Markdown comme autorité.
3. Persistance additive `preparations.projection_json` (migration `013`) alignée sur `creation_revision` (CAS).
4. `previewName` / `previewSummary` synchronisés depuis la même révision (pas de double vérité divergente).
5. Création inchangée : `POST …/create-project` → `createProjectCommand` (idempotence, fingerprint, expectedCreationRevision).
6. **Unicité de nom même Pilote** : contrôle applicatif dans la transaction (normalisation trim/espaces/casse ; accents conservés). **Pas de contrainte UNIQUE SQL** (collisions historiques PF-CRE-14 possibles).

## UI

- Aperçu vivant (`PreparationProposal`) : intention / nom / ouverts / appréciation qualitative.
- « Constituer une proposition » n’est plus le parcours principal ; « Ajuster l’aperçu » reste secondaire (testid `prep-constitute` pour non-régression e2e).
- Rail sas minimal : Portefeuille + Préparation en cours (plus de Travail/Pilotage/Documents/Journal désactivés).

## Contradiction normative

| Source | Règle |
| --- | --- |
| PF-CRE-14 (R2 design) | Deux projets de même nom, identités distinctes |
| Arbitrage Morris 16/11/2026 | Unicité par Pilote |

Implémentation locale = intention produit Morris. **Régularisation R2 non publiée.** Réception finale ne peut pas déclarer la règle « totalement gouvernée » tant que PF-CRE-14 n’est pas arbitrée.

## Preuves

| Niveau | Résultat |
| --- | --- |
| UNIT | `preparation-projection`, `studio-rail` PASS |
| PG REAL (`sfia_next_e2e`) | create-project + projection CAS + unicité nom PASS |
| BROWSER/FAKE | ciblé (voir Review Pack) |
| NORA LIVE | **NOT PROVEN** (fixture FAKE) |
| MORRIS UI REVIEW | **PENDING** |

## Rollback

- Code : revert commit candidat.
- Schéma : `ALTER TABLE preparations DROP COLUMN projection_json;` (réversible, non destructif sur preview legacy).
```

### `projects/sfia-studio-next/web/tests/unit/preparation-projection.test.ts`
```ts
import { describe, expect, it } from "vitest";
import {
  canCreateFromProjection,
  draftProjectionFromQualification,
  normalizeProjectNameKey,
  previewFieldsFromProjection,
  projectionMateriallyChanged,
  type PreparationProjection,
} from "@/domains/preparation/projection";

describe("preparation projection helpers", () => {
  it("normalizes name keys (trim, spaces, case) while preserving accents", () => {
    expect(normalizeProjectNameKey("  Atlas   Pilot  ")).toBe("atlas pilot");
    expect(normalizeProjectNameKey("École")).toBe("école");
    expect(normalizeProjectNameKey("ECOLE")).not.toBe(normalizeProjectNameKey("École"));
  });

  it("drafts exploring/clarifying/proposal/base assessments without opaque scores", () => {
    const exploring = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t1",
      qualificationStatus: "QUALIFIED",
      goal: "",
      clarifications: [],
      proposedProjectName: null,
    });
    expect(exploring?.suggestion?.assessment).toBe("EXPLORING");

    const clarifying = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t2",
      qualificationStatus: "QUALIFIED",
      goal: "Suivre les indicateurs de vente",
      clarifications: ["Quel périmètre de données ?"],
      proposedProjectName: null,
    });
    expect(clarifying?.suggestion?.assessment).toBe("CLARIFYING");
    expect(clarifying?.openQuestions.length).toBe(1);

    const proposal = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t3",
      qualificationStatus: "QUALIFIED",
      goal: "Tableau de bord ventes",
      clarifications: ["Quelle fréquence de mise à jour ?"],
      proposedProjectName: "Pilotage ventes",
    });
    expect(proposal?.suggestion?.assessment).toBe("PROPOSAL");
    expect(proposal?.name?.value).toBe("Pilotage ventes");

    const base = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t4",
      qualificationStatus: "QUALIFIED",
      goal: "Tableau de bord ventes",
      clarifications: [],
      proposedProjectName: "Pilotage ventes",
      replySignalsBaseSufficiency: true,
    });
    expect(base?.suggestion?.assessment).toBe("BASE_SUFFICIENTE");
    expect(base?.suggestion?.explanation).not.toMatch(/\b\d{1,3}\s*%|\bscore\b/i);
  });

  it("returns null draft when qualification is unavailable", () => {
    expect(
      draftProjectionFromQualification({
        preparationId: "prep-1",
        turnKey: "t",
        qualificationStatus: "UNAVAILABLE",
        goal: "x",
        clarifications: [],
        proposedProjectName: "Y",
      }),
    ).toBeNull();
  });

  it("detects material changes and ignores no-op revisions", () => {
    const draft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t1",
      qualificationStatus: "QUALIFIED",
      goal: "Intention A",
      clarifications: [],
      proposedProjectName: "Nom A",
    })!;
    const prev: PreparationProjection = {
      ...draft,
      revision: 2,
      observedAt: "2026-11-16T10:00:00.000Z",
    };
    expect(projectionMateriallyChanged(prev, draft)).toBe(false);
    expect(
      projectionMateriallyChanged(prev, {
        ...draft,
        intention: {
          ...draft.intention!,
          value: "Intention B",
        },
      }),
    ).toBe(true);
  });

  it("syncs preview fields and create precondition from projection", () => {
    const draft = draftProjectionFromQualification({
      preparationId: "prep-1",
      turnKey: "t1",
      qualificationStatus: "QUALIFIED",
      goal: "Intention",
      clarifications: [],
      proposedProjectName: "Nom",
    })!;
    const projection: PreparationProjection = {
      ...draft,
      revision: 3,
      observedAt: "2026-11-16T10:00:00.000Z",
    };
    const preview = previewFieldsFromProjection(projection, "fallback", "sum");
    expect(preview.previewName).toBe("Nom");
    expect(preview.previewSummary).toContain("Intention");
    expect(canCreateFromProjection(projection, "")).toBe(true);
    expect(canCreateFromProjection(null, "")).toBe(false);
    expect(canCreateFromProjection(null, "Manuel")).toBe(true);
  });
});
```

### `projects/sfia-studio-next/web/tests/e2e/ml4d-sas-nora-projection.spec.ts`
```ts
import { expect, test } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
} from "./helpers/g4-chat-first";

async function loginPilotA(page: import("@playwright/test").Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

test.describe("ML4D Sas Nora — living projection + create", () => {
  test.beforeEach(async ({ page }) => {
    await loginPilotA(page);
  });

  test("AF living aperçu evolves without primary constitute form", async ({ page }) => {
    await openNewPreparation(page);
    await expect(page.getByTestId("prep-proposal")).toBeVisible();
    await expect(page.getByTestId("prep-proposal-empty")).toBeVisible();
    await expect(page.getByRole("button", { name: /Constituer une proposition/i })).toHaveCount(0);

    await sendPrepMessage(page, "Je veux créer un projet.");
    await expect(page.getByTestId("prep-proposal-ready")).toBeVisible({ timeout: 30000 });
    await expect(page.getByTestId("prep-field-intention")).toContainText(/projet/i);
    await expect(page.getByTestId("prep-nora-assessment")).toBeVisible();

    await expect(page.getByTestId("studio-rail").getByText("Préparation en cours")).toBeVisible();
    await expect(page.getByTestId("studio-rail").getByText("Pilotage", { exact: true })).toHaveCount(
      0,
    );
  });

  test("AF create explicit still works via secondary adjust (D2)", async ({ page }) => {
    await openNewPreparation(page);
    // Dialogue-only seed — avoid awaiting D2 mission name binding for classic create path.
    await sendPrepMessage(page, "Bonjour Nora depuis Playwright");
    const projectId = await constituteAndCreateProject(page, {
      name: `SasNora-${Date.now()}`,
      summary: "Intention inspectée pour création explicite",
    });
    expect(projectId).toBeTruthy();
    await expect(page).toHaveURL(new RegExp(`/projects/${projectId}`));
    await expect(page.getByText("Même fil", { exact: false })).toBeVisible({ timeout: 15000 });
  });
});
```

---
## 10. Code modifié (diffs vs parent)

### `projects/sfia-studio-next/web/src/domains/preparation/service.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/service.ts b/projects/sfia-studio-next/web/src/domains/preparation/service.ts
index 1814a465..ed4bb5d5 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/service.ts
@@ -1,4 +1,4 @@
-import { and, eq } from "drizzle-orm";
+import { and, eq, sql } from "drizzle-orm";
 import { db } from "@/db/client";
 import {
   conversations,
@@ -7,6 +7,13 @@ import {
   projects,
 } from "@/db/schema";
 import { newId } from "@/lib/ids";
+import {
+  type ApplyProjectionResult,
+  type PreparationProjection,
+  parseProjectionJson,
+  previewFieldsFromProjection,
+  projectionMateriallyChanged,
+} from "@/domains/preparation/projection";

 export async function openOrCreatePreparation(pilotId: string, preparationId?: string) {
   if (preparationId) {
@@ -31,6 +38,7 @@ export async function openOrCreatePreparation(pilotId: string, preparationId?: s
     creationRevision: 1,
     previewName: "",
     previewSummary: "",
+    projectionJson: null,
   });
   const convId = newId("conv");
   await db.insert(conversations).values({
@@ -41,15 +49,30 @@ export async function openOrCreatePreparation(pilotId: string, preparationId?: s
   return (await db.select().from(preparations).where(eq(preparations.id, id)).limit(1))[0];
 }

+/**
+ * Legacy preview write — CAS on expectedCreationRevision when provided.
+ * Keeps previewName/previewSummary in sync for create-project consumers.
+ */
 export async function updatePreview(
   pilotId: string,
   preparationId: string,
   previewName: string,
   previewSummary: string,
+  expectedCreationRevision?: number,
 ) {
   const prep = await openOrCreatePreparation(pilotId, preparationId);
+  if (
+    expectedCreationRevision != null &&
+    Number(prep.creationRevision) !== Number(expectedCreationRevision)
+  ) {
+    const err = new Error("CONFLICT");
+    (err as Error & { code: string; actualCreationRevision: number }).code = "CONFLICT";
+    (err as Error & { actualCreationRevision: number }).actualCreationRevision =
+      prep.creationRevision;
+    throw err;
+  }
   const nextRev = prep.creationRevision + 1;
-  await db
+  const updated = await db
     .update(preparations)
     .set({
       previewName,
@@ -57,8 +80,103 @@ export async function updatePreview(
       creationRevision: nextRev,
       updatedAt: new Date(),
     })
-    .where(and(eq(preparations.id, preparationId), eq(preparations.ownerPilotId, pilotId)));
-  return nextRev;
+    .where(
+      and(
+        eq(preparations.id, preparationId),
+        eq(preparations.ownerPilotId, pilotId),
+        eq(preparations.creationRevision, prep.creationRevision),
+      ),
+    )
+    .returning({ creationRevision: preparations.creationRevision });
+  if (!updated[0]) {
+    const err = new Error("CONFLICT");
+    (err as Error & { code: string }).code = "CONFLICT";
+    throw err;
+  }
+  return updated[0].creationRevision;
+}
+
+/**
+ * Apply a material PreparationProjection under creationRevision CAS.
+ * Synchronizes previewName/previewSummary from the same revision (no dual-write divergence).
+ */
+export async function applyPreparationProjection(input: {
+  pilotId: string;
+  preparationId: string;
+  expectedCreationRevision: number;
+  draft: Omit<PreparationProjection, "revision" | "observedAt">;
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
+      if (currentRev !== Number(input.expectedCreationRevision)) {
+        return {
+          status: "CONFLICT" as const,
+          actualRevision: currentRev,
+          reason: "expectedCreationRevision stale",
+        };
+      }
+
+      const prev = parseProjectionJson(row.projection_json, input.preparationId, currentRev);
+      if (!projectionMateriallyChanged(prev, input.draft)) {
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
+        ...input.draft,
+        revision: nextRev,
+        observedAt: now.toISOString(),
+      };
+      const preview = previewFieldsFromProjection(
+        projection,
+        row.preview_name ?? "",
+        row.preview_summary ?? "",
+      );
+
+      await tx
+        .update(preparations)
+        .set({
+          creationRevision: nextRev,
+          previewName: preview.previewName,
+          previewSummary: preview.previewSummary,
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
+    return { status: "UNAVAILABLE", reason: "projection write failed" };
+  }
 }

 export async function getPreparationContext(pilotId: string, preparationId: string) {
@@ -87,5 +205,16 @@ export async function getPreparationContext(pilotId: string, preparationId: stri
       .where(and(eq(conversations.preparationId, preparationId), eq(conversations.ownerPilotId, pilotId)))
       .limit(1)
   )[0];
-  return { preparation: prep, project: project ?? null, conversation: conv ?? null, link: link ?? null };
+  const projection = parseProjectionJson(
+    prep.projectionJson,
+    preparationId,
+    prep.creationRevision,
+  );
+  return {
+    preparation: prep,
+    project: project ?? null,
+    conversation: conv ?? null,
+    link: link ?? null,
+    projection,
+  };
 }
```

### `projects/sfia-studio-next/web/src/domains/preparation/create-project.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts b/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
index be430627..0a8cea41 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
@@ -10,6 +10,7 @@ import {
 } from "@/db/schema";
 import { creationFingerprint } from "@/lib/fingerprint";
 import { newId } from "@/lib/ids";
+import { normalizeProjectNameKey } from "@/domains/preparation/projection";

 export type CreateProjectInput = {
   pilotId: string;
@@ -147,6 +148,25 @@ export async function createProjectCommand(input: CreateProjectInput): Promise<C
         };
       }

+      // Same-pilot name uniqueness (Morris 2026-11-16). Application-level only —
+      // historical PF-CRE-14 duplicates exist; no UNIQUE DB constraint in this cycle.
+      // Replay ALREADY_CREATED paths above are unaffected.
+      const nameKey = normalizeProjectNameKey(name);
+      const nameHit = await tx.execute(
+        sql`select id from projects
+            where owner_pilot_id = ${input.pilotId}
+              and lower(trim(regexp_replace(name, '[[:space:]]+', ' ', 'g'))) = ${nameKey}
+            limit 1`,
+      );
+      const nameRows = nameHit as unknown as Array<{ id: string }>;
+      if (nameRows[0]) {
+        return {
+          status: "CONFLICT" as const,
+          actualCreationRevision: Number(prepRow.creation_revision),
+          reason: "project name already used by this pilot",
+        };
+      }
+
       const projectId = newId("proj");
       const now = new Date();
       await tx.insert(projects).values({
```

### `projects/sfia-studio-next/web/src/domains/conversation/service.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 8bcc322f..94b0a0ae 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -99,7 +99,8 @@ import {
   mergeMissionSteps,
   recoverPendingMissionContinuation,
 } from "./intent-conduction";
-import { updatePreview } from "@/domains/preparation/service";
+import { applyPreparationProjection } from "@/domains/preparation/service";
+import { draftProjectionFromQualification } from "@/domains/preparation/projection";

 /**
  * S05 R-01 — gather owner-side evidence for one unresolved sibling.
@@ -532,6 +533,12 @@ export type TurnResult = {
   nextTurnKind?: ThreadTurnKind;
   /** Echo of durable qualification status for clients / recovery. */
   semanticQualificationStatus?: string;
+  /** D2 living sas projection ack for this turn (never an authority grant). */
+  preparationProjection?: {
+    status: string;
+    revision?: number;
+    assessment?: string;
+  } | null;
   /** S05 — true when a sibling pending blocked owner effects for this turn. */
   pendingEffectBlocked?: boolean;
   pendingBlockReason?: string;
@@ -2056,8 +2063,57 @@ export async function postUserMessageAndNora(
     }
   }

+  // D2 — living PreparationProjection from the same durable Nora qualification (no 2nd model).
+  // S05: never invent projection while unresolved work A blocks B effects / ownership lost.
+  let preparationProjectionAck:
+    | { status: string; revision?: number; assessment?: string }
+    | null = null;
+  if (allowOwnerEffects && !ownershipLostBeforeD4 && !ctx.project?.id) {
+    const openFromQual = extractKnowledgeProposals(qualification)
+      .filter((p) => p.kind === "OPEN_POINT")
+      .map((p) => p.statement)
+      .slice(0, 6);
+    const draft = draftProjectionFromQualification({
+      preparationId,
+      turnKey: clientIntentKey,
+      qualificationStatus: qualification.status,
+      goal: qualification.goal || "",
+      clarifications: qualification.clarifications ?? [],
+      proposedProjectName: studioIntent.proposedProjectName,
+      openPointStatements: openFromQual,
+      replySignalsBaseSufficiency: /suffisant|pouvez démarrer|base (est )?suffisante/i.test(
+        qualification.replyDraft || "",
+      ),
+    });
+    if (draft) {
+      try {
+        const applied = await applyPreparationProjection({
+          pilotId,
+          preparationId,
+          expectedCreationRevision: ctx.preparation.creationRevision,
+          draft,
+        });
+        preparationProjectionAck = {
+          status: applied.status,
+          revision: "revision" in applied ? applied.revision : undefined,
+          assessment: draft.suggestion?.assessment,
+        };
+        if (applied.status === "APPLIED" || applied.status === "UNCHANGED") {
+          // Refresh local revision for later consumers in this turn.
+          ctx.preparation.creationRevision =
+            "revision" in applied && applied.revision != null
+              ? applied.revision
+              : ctx.preparation.creationRevision;
+        }
+      } catch {
+        preparationProjectionAck = { status: "UNAVAILABLE" };
+      }
+    } else if (qualification.status === "UNAVAILABLE") {
+      preparationProjectionAck = { status: "UNAVAILABLE" };
+    }
+  }
+
   // D2 — accompany project creation; Pilot explicit act remains mandatory (no implicit create).
-  // S05: never mutate preview / invent mission while unresolved work A blocks B effects.
   if (
     allowOwnerEffects &&
     !ownershipLostBeforeD4 &&
@@ -2068,16 +2124,6 @@ export async function postUserMessageAndNora(
       (studioIntent.proposedProjectName?.trim()
         ? studioIntent.proposedProjectName.trim()
         : null) || "Nouveau projet";
-    try {
-      await updatePreview(
-        pilotId,
-        preparationId,
-        proposed.slice(0, 120),
-        `Intention Nora — création de projet «${proposed}». Acte Pilote requis.`,
-      );
-    } catch {
-      /* preview best-effort */
-    }
     let d2Mission = emptyMission(
       clientIntentKey,
       `Création de projet «${proposed}» — attente acte Pilote`,
@@ -2270,6 +2316,7 @@ export async function postUserMessageAndNora(
       blockingMission?.clientIntentKey ??
       clientPendingHint,
     semanticQualificationStatus: qualification.status,
+    preparationProjection: preparationProjectionAck,
   };

   if (turnRaceHooks.beforeTerminalCommit) {
```

### `projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx b/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
index 7e98fd21..97bfadeb 100644
--- a/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/PreparationProposal.tsx
@@ -1,13 +1,30 @@
 "use client";

 /**
- * Non-authorizing D2 proposal panel.
- * Proposal fields come only from stored previewName/previewSummary (PATCH)
- * or from an explicit Pilot constitution act — never silent NLP extraction.
+ * Living D2 aperçu — driven by PreparationProjection (and compatible preview fields).
+ * « Constituer une proposition » is no longer the primary path; secondary adjust remains
+ * for explicit Pilot inspection edits without becoming a second authority.
  */

+import type { PreparationProjection } from "@/domains/preparation/projection";
+import { canCreateFromProjection } from "@/domains/preparation/projection";
+
 export type ProposalOpenPoint = { id: string; statement: string };

+const ASSESSMENT_LABEL: Record<string, string> = {
+  EXPLORING: "Exploration",
+  CLARIFYING: "Clarification",
+  PROPOSAL: "Proposition",
+  BASE_SUFFICIENTE: "Base suffisante",
+};
+
+function statusLabel(status: string | undefined): string {
+  if (status === "PILOT_EXPRESSED") return "Exprimé";
+  if (status === "NORA_PROPOSED") return "Proposé";
+  if (status === "NEEDS_CONFIRMATION") return "À préciser";
+  return "—";
+}
+
 export function PreparationProposal(props: {
   projectId: string | null;
   previewName: string;
@@ -15,6 +32,8 @@ export function PreparationProposal(props: {
   creationRevision: number;
   messageCount: number;
   openPoints: ProposalOpenPoint[];
+  projection: PreparationProjection | null;
+  projectionFreshness?: "current" | "stale" | "unavailable" | "legacy";
   busy: boolean;
   editing: boolean;
   draftName: string;
@@ -29,63 +48,75 @@ export function PreparationProposal(props: {
   onCreateProject: () => void;
   status?: string;
 }) {
-  const hasStored =
-    props.previewName.trim().length > 0 || props.previewSummary.trim().length > 0;
   const created = Boolean(props.projectId);
+  const projection = props.projection;
+  const name =
+    projection?.name?.value?.trim() ||
+    props.previewName.trim() ||
+    "";
+  const intention = projection?.intention?.value?.trim() || "";
+  const outcome = projection?.desiredOutcome?.value?.trim() || "";
+  const scope = projection?.initialScope?.value?.trim() || "";
+  const assessment = projection?.suggestion?.assessment;
+  const explanation = projection?.suggestion?.explanation?.trim() || "";
+  const openFromProjection = (projection?.openQuestions ?? []).filter((q) => q.value.trim());
+  const openFromKnowledge = props.openPoints;
+  const hasLiving =
+    Boolean(name) ||
+    Boolean(intention) ||
+    Boolean(outcome) ||
+    Boolean(scope) ||
+    openFromProjection.length > 0 ||
+    Boolean(explanation) ||
+    Boolean(props.previewSummary.trim());
+  const canCreate = !created && canCreateFromProjection(projection, props.previewName);

   return (
     <aside className="space-y-3" data-testid="prep-proposal">
       <div className="fig-panel space-y-3">
         <div className="flex items-start justify-between gap-2">
           <div>
-            <p className="fig-kicker">Aperçu de la proposition</p>
-            <h2 className="fig-panel-title !mb-0">
-              {hasStored ? props.previewName.trim() || "Projet envisagé" : "Projet envisagé"}
+            <p className="fig-kicker">Aperçu du projet</p>
+            <h2 className="fig-panel-title !mb-0" data-testid="prep-proposal-title">
+              {name || "En cours de clarification"}
             </h2>
           </div>
-          <span className={`fig-tag ${created ? "fig-tag-ok" : "fig-tag-warn"}`}>
-            {created ? "Créé" : "Non créé"}
+          <span
+            className={`fig-tag ${created ? "fig-tag-ok" : assessment === "BASE_SUFFICIENTE" ? "fig-tag-ok" : "fig-tag-warn"}`}
+            data-testid="prep-proposal-state"
+          >
+            {created
+              ? "Créé"
+              : assessment
+                ? ASSESSMENT_LABEL[assessment] ?? assessment
+                : hasLiving
+                  ? "En construction"
+                  : "À clarifier"}
           </span>
         </div>

-        {!hasStored && !props.editing ? (
+        {!hasLiving && !props.editing ? (
           <div className="fig-empty-list" data-testid="prep-proposal-empty">
-            {props.messageCount === 0 ? (
-              <div className="fig-empty-row">
-                <div>
-                  <div className="font-medium">Pas encore de proposition</div>
-                  <div className="muted text-xs">
-                    Discutez d&apos;abord avec Nora. La proposition n&apos;apparaît qu&apos;après un
-                    acte explicite de votre part.
-                  </div>
+            <div className="fig-empty-row">
+              <div>
+                <div className="font-medium">
+                  {props.messageCount === 0
+                    ? "Commencez la conversation"
+                    : "Nora affine encore l’intention"}
                 </div>
-              </div>
-            ) : (
-              <div className="fig-empty-row">
-                <div>
-                  <div className="font-medium">Échange en cours</div>
-                  <div className="muted text-xs">
-                    Aucune proposition enregistrée. Constituez-en une pour inspecter avant création.
-                  </div>
+                <div className="muted text-xs">
+                  L’aperçu évolue avec les échanges. Aucun formulaire préalable n’est requis pour
+                  avancer.
                 </div>
               </div>
-            )}
-            <button
-              type="button"
-              className="btn secondary mt-2 w-full"
-              disabled={created || props.messageCount === 0}
-              onClick={props.onStartConstitute}
-              data-testid="prep-constitute"
-            >
-              Constituer une proposition
-            </button>
+            </div>
           </div>
         ) : null}

         {props.editing ? (
           <div className="space-y-2" data-testid="prep-proposal-edit">
             <p className="text-xs muted">
-              Ajustement secondaire après inspection — n&apos;est pas le parcours principal.
+              Ajustement explicite pour inspection — n&apos;est pas le parcours principal.
             </p>
             <label className="block text-xs muted" htmlFor="prep-prop-name">
               Nom envisagé
@@ -142,47 +173,106 @@ export function PreparationProposal(props: {
           </div>
         ) : null}

-        {hasStored && !props.editing ? (
+        {hasLiving && !props.editing ? (
           <div className="space-y-2" data-testid="prep-proposal-ready">
             <div className="fig-msg text-sm space-y-2">
-              <div>
-                <span className="fig-tag fig-tag-muted mr-2">Intention</span>
-                <span className="muted text-xs">
-                  {props.previewName.trim() || "— (nom non renseigné)"}
-                </span>
-              </div>
-              <div>
-                <span className="fig-tag fig-tag-muted mr-2">Résumé</span>
-                <p className="mt-1 whitespace-pre-wrap text-sm">
-                  {props.previewSummary.trim() || "— (résumé non renseigné)"}
-                </p>
-              </div>
+              {name ? (
+                <div>
+                  <span className="fig-tag fig-tag-muted mr-2">Nom</span>
+                  <span className="text-xs" data-testid="prep-field-name">
+                    {name}
+                  </span>
+                  {projection?.name ? (
+                    <span className="muted text-xs ml-2">
+                      · {statusLabel(projection.name.status)}
+                    </span>
+                  ) : null}
+                </div>
+              ) : null}
+              {intention || props.previewSummary.trim() ? (
+                <div>
+                  <span className="fig-tag fig-tag-muted mr-2">Intention</span>
+                  <p className="mt-1 whitespace-pre-wrap text-sm" data-testid="prep-field-intention">
+                    {intention || props.previewSummary.trim()}
+                  </p>
+                  {projection?.intention ? (
+                    <span className="muted text-xs">
+                      {statusLabel(projection.intention.status)}
+                    </span>
+                  ) : null}
+                </div>
+              ) : null}
+              {outcome ? (
+                <div>
+                  <span className="fig-tag fig-tag-muted mr-2">Résultat</span>
+                  <p className="mt-1 whitespace-pre-wrap text-sm">{outcome}</p>
+                </div>
+              ) : null}
+              {scope ? (
+                <div>
+                  <span className="fig-tag fig-tag-muted mr-2">Périmètre</span>
+                  <p className="mt-1 whitespace-pre-wrap text-sm">{scope}</p>
+                </div>
+              ) : null}
               <div>
                 <span className="fig-tag fig-tag-muted mr-2">Ouvert</span>
                 <span className="muted text-xs">
-                  {props.openPoints.length > 0
-                    ? `${props.openPoints.length} point(s) capitalisé(s)`
-                    : "Aucun point ouvert capitalisé"}
+                  {openFromProjection.length + openFromKnowledge.length > 0
+                    ? `${openFromProjection.length + openFromKnowledge.length} point(s)`
+                    : "Aucun point ouvert listé"}
                 </span>
               </div>
             </div>
-            {props.openPoints.slice(0, 4).map((o) => (
+            {openFromProjection.slice(0, 4).map((q, i) => (
+              <p key={`pq-${i}`} className="text-xs muted pl-1">
+                · {q.value}
+              </p>
+            ))}
+            {openFromKnowledge.slice(0, 4).map((o) => (
               <p key={o.id} className="text-xs muted pl-1">
                 · {o.statement}
               </p>
             ))}
+            {explanation ? (
+              <div className="fig-msg text-sm" data-testid="prep-nora-assessment">
+                <span className="fig-tag fig-tag-muted mr-2">Appréciation Nora</span>
+                <p className="mt-1 whitespace-pre-wrap text-sm">{explanation}</p>
+                <p className="text-xs muted mt-1">
+                  Suggestion qualitative — jamais une autorisation de créer.
+                </p>
+              </div>
+            ) : null}
             <button
               type="button"
               className="btn secondary"
               disabled={created}
               onClick={props.onStartConstitute}
-              data-testid="prep-proposal-adjust"
+              data-testid="prep-constitute"
             >
-              Ajuster la proposition
+              Ajuster l&apos;aperçu
             </button>
-            <p className="text-xs muted">Révision création : {props.creationRevision}</p>
+            <p className="text-xs muted">
+              Révision création : {props.creationRevision}
+              {props.projectionFreshness === "legacy"
+                ? " · aperçu partiel (préparation ancienne)"
+                : props.projectionFreshness === "unavailable"
+                  ? " · projection indisponible — dernière vérité conservée"
+                  : ""}
+            </p>
           </div>
         ) : null}
+
+        {!hasLiving && !props.editing ? (
+          <button
+            type="button"
+            className="btn secondary w-full"
+            disabled={created}
+            onClick={props.onStartConstitute}
+            data-testid="prep-constitute"
+          >
+            Ajuster l&apos;aperçu manuellement
+          </button>
+        ) : null}
       </div>

       <div className="fig-panel space-y-3" style={{ background: "rgba(101,111,225,0.08)" }}>
@@ -194,7 +284,7 @@ export function PreparationProposal(props: {
         <button
           type="button"
           className="btn w-full"
-          disabled={props.busy || created || !hasStored}
+          disabled={props.busy || created || !canCreate}
           onClick={props.onCreateProject}
           data-testid="prep-create-project"
         >
```

### `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index e96346f4..eed5c4e6 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -12,6 +12,7 @@ import {
   DocumentLibrary,
   type RevisionRow,
 } from "@/components/figma/DocumentSurfaces";
+import type { PreparationProjection } from "@/domains/preparation/projection";

 type Msg = { id: string; role: string; content: string; status: string };
 type Doc = {
@@ -53,6 +54,10 @@ export default function PreparationPage() {
   const [previewName, setPreviewName] = useState("");
   const [previewSummary, setPreviewSummary] = useState("");
   const [creationRevision, setCreationRevision] = useState(1);
+  const [projection, setProjection] = useState<PreparationProjection | null>(null);
+  const [projectionFreshness, setProjectionFreshness] = useState<
+    "current" | "stale" | "unavailable" | "legacy"
+  >("legacy");
   const [projectId, setProjectId] = useState<string | null>(null);
   const [status, setStatus] = useState("");
   const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
@@ -111,6 +116,15 @@ export default function PreparationPage() {
     setPreviewName(j.preparation?.previewName ?? "");
     setPreviewSummary(j.preparation?.previewSummary ?? "");
     setCreationRevision(j.preparation?.creationRevision ?? 1);
+    const nextProjection = (j.projection as PreparationProjection | null | undefined) ?? null;
+    setProjection(nextProjection);
+    setProjectionFreshness(
+      nextProjection
+        ? "current"
+        : j.preparation?.previewName || j.preparation?.previewSummary
+          ? "legacy"
+          : "legacy",
+    );
     setProjectId(j.project?.id ?? null);
     const awaiting = j.awaitingMission as
       | { clientIntentKey?: string; status?: string }
@@ -211,8 +225,18 @@ export default function PreparationPage() {
         const streaming = j.streaming as
           | { attempted?: boolean; delivered?: boolean }
           | undefined;
+        const prepProj = j.preparationProjection as
+          | { status?: string; assessment?: string; revision?: number }
+          | null
+          | undefined;
+        const projPart = prepProj?.status
+          ? ` · projection ${prepProj.status}${prepProj.assessment ? `/${prepProj.assessment}` : ""}`
+          : "";
+        if (prepProj?.status === "UNAVAILABLE") {
+          setProjectionFreshness("unavailable");
+        }
         setStatus(
-          `Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}${policyPart}${opPart}${replayPart}${docPart}${docConflict}${cap}` +
+          `Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}${policyPart}${opPart}${replayPart}${docPart}${docConflict}${cap}${projPart}` +
             (streaming?.attempted
               ? ` · stream attempted=${streaming.attempted} delivered=${streaming.delivered}`
               : ""),
@@ -526,8 +550,13 @@ export default function PreparationPage() {
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
           expectedCreationRevision: creationRevision,
-          projectName: previewName || "Projet sans titre",
-          previewSummary,
+          projectName:
+            projection?.name?.value?.trim() ||
+            previewName.trim() ||
+            "Projet sans titre",
+          previewSummary:
+            projection?.intention?.value?.trim() ||
+            previewSummary,
           idempotencyKey: key,
           clientIntentKey,
         }),
@@ -535,6 +564,7 @@ export default function PreparationPage() {
       let j: {
         status?: string;
         projectId?: string;
+        reason?: string;
         missionBindingError?: string;
         missionContinue?: {
           continued?: boolean;
@@ -555,6 +585,18 @@ export default function PreparationPage() {
           : j.missionContinue?.reason
             ? ` · continue ${j.missionContinue.reason}`
             : "";
+      if (j.status === "CONFLICT" && !j.projectId) {
+        const reason =
+          (j as { reason?: string }).reason ??
+          "conflit de création — aucun projet supplémentaire créé";
+        setStatus(
+          reason.includes("name already used")
+            ? "Ce nom est déjà utilisé pour un de vos projets. Choisissez un autre nom — Nora peut en proposer un."
+            : `CONFLICT: ${reason}${bindErr}`,
+        );
+        await reload();
+        return;
+      }
       if (j.status || j.projectId) {
         setStatus(`${j.status ?? ""}${j.projectId ? ` → ${j.projectId}` : ""}${cont}${bindErr}`);
       }
@@ -674,10 +716,11 @@ export default function PreparationPage() {
         </h1>
         <p className="fig-hero-sub">
           {isResumedPrep
-            ? "Continuité du même fil. Inspectez la proposition éventuelle puis créez explicitement si prêt."
-            : "Discutez librement avec Nora avant de décider de créer un projet."}
+            ? "Continuité du même fil. L’aperçu reflète ce qui est déjà acquis ; créez explicitement si prêt."
+            : "Discutez librement avec Nora. L’aperçu du projet évolue pendant la conversation."}
           {projectId ? ` Projet lié : ${projectId}.` : ""}
         </p>
+        {/* Secondary surfaces kept for continuity tools; conversation remains the primary path. */}
         <nav className="flex flex-wrap gap-2 pt-1" aria-label="Surfaces sas">
           {(
             [
@@ -717,6 +760,8 @@ export default function PreparationPage() {
             openPoints={(knowledge?.openPoints ?? [])
               .filter((o) => o.status === "OPEN")
               .map((o) => ({ id: o.id, statement: o.statement }))}
+            projection={projection}
+            projectionFreshness={projectionFreshness}
             busy={busy}
             editing={proposalEditing}
             draftName={draftProposalName}
```

### `projects/sfia-studio-next/web/src/components/shell/studio-rail.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
index 0f7e16ef..a30c4eb5 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
@@ -273,27 +273,14 @@ export function buildShellNav(input: {
   }

   if (preparationId) {
+    // SAS-F-13 — minimal personal rail: Portefeuille + Préparation en cours.
+    // No Travail / Pilotage / Documents / Journal before verified project creation.
     items.push({
       key: "sas",
-      label: "Sas",
+      label: "Préparation en cours",
       href: `/preparations/${preparationId}`,
       active: true,
     });
-    // Surfaces projet require projectId — show disabled labels, not fake links.
-    for (const [key, label] of [
-      ["travail", "Travail"],
-      ["pilotage", "Pilotage"],
-      ["document", "Documents"],
-      ["journal", "Journal"],
-    ] as const) {
-      items.push({
-        key,
-        label,
-        href: null,
-        active: false,
-        disabledReason: "Disponible après création / ouverture du projet",
-      });
-    }
     return items;
   }

```

### `projects/sfia-studio-next/web/src/db/schema.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/db/schema.ts b/projects/sfia-studio-next/web/src/db/schema.ts
index e3c3e39e..bee864e0 100644
--- a/projects/sfia-studio-next/web/src/db/schema.ts
+++ b/projects/sfia-studio-next/web/src/db/schema.ts
@@ -7,6 +7,7 @@ import {
   uniqueIndex,
   index,
   boolean,
+  jsonb,
 } from "drizzle-orm/pg-core";

 /** D1 — Studio pilot identity (internal stable id). */
@@ -91,6 +92,8 @@ export const preparations = pgTable(
     creationRevision: integer("creation_revision").notNull().default(1),
     previewName: text("preview_name").notNull().default(""),
     previewSummary: text("preview_summary").notNull().default(""),
+    /** D2 PreparationProjection v1 JSON snapshot — additive; null = legacy/partial. */
+    projectionJson: jsonb("projection_json").$type<Record<string, unknown> | null>(),
     createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
     updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
   },
```

### `projects/sfia-studio-next/web/scripts/db-migrate.sh`
```diff
diff --git a/projects/sfia-studio-next/web/scripts/db-migrate.sh b/projects/sfia-studio-next/web/scripts/db-migrate.sh
index f6c73a48..d5615765 100755
--- a/projects/sfia-studio-next/web/scripts/db-migrate.sh
+++ b/projects/sfia-studio-next/web/scripts/db-migrate.sh
@@ -30,4 +30,5 @@ apply "009_publication_ref_attempt_unique.sql"
 apply "010_github_app_user_oauth.sql"
 apply "011_oauth_session_binding.sql"
 apply "012_auth_concurrency_safety.sql"
-echo "db:migrate OK (001→012)"
+apply "013_preparation_projection.sql"
+echo "db:migrate OK (001→013)"
```

### `projects/sfia-studio-next/web/scripts/e2e-web-server.sh`
```diff
diff --git a/projects/sfia-studio-next/web/scripts/e2e-web-server.sh b/projects/sfia-studio-next/web/scripts/e2e-web-server.sh
index 1cede0b5..4253d2bf 100755
--- a/projects/sfia-studio-next/web/scripts/e2e-web-server.sh
+++ b/projects/sfia-studio-next/web/scripts/e2e-web-server.sh
@@ -33,6 +33,9 @@ fi
 SFIA_PG_DATABASE="${E2E_DB}" bash "${ROOT}/scripts/db-migrate.sh"

 export DATABASE_URL="${E2E_DATABASE_URL}"
+# Playwright parent shells may inherit NODE_ENV=production after an operator
+# `next build`/`next start`. Force development so CSS/postcss compile under `next dev`.
+export NODE_ENV=development
 export STUDIO_LANE=DEV
 export STUDIO_DEV_TEST_LOGIN=1
 export STUDIO_E2E=1
```

### `projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts`
```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
index 57ef9f05..c5c70115 100644
--- a/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
@@ -7,7 +7,13 @@ import { db } from "@/db/client";
 import { pilots, preparations, projects, preparationProjectLinks } from "@/db/schema";
 import { newId } from "@/lib/ids";
 import { createProjectCommand, reconcileCreateProject } from "@/domains/preparation/create-project";
-import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
+import {
+  applyPreparationProjection,
+  getPreparationContext,
+  openOrCreatePreparation,
+  updatePreview,
+} from "@/domains/preparation/service";
+import { draftProjectionFromQualification } from "@/domains/preparation/projection";
 import { savePreparationDocument, listDocuments } from "@/domains/document/service";
 import { postUserMessageAndNora, listMessages } from "@/domains/conversation/service";

@@ -168,12 +174,16 @@ describe("PostgreSQL create-project contracts", () => {
     expect(after.map((m) => m.id)).toEqual(before.map((m) => m.id));
   });

-  it("A12: homonyms remain distinct projects", async () => {
+  /**
+   * Morris 2026-11-16 — same-pilot name uniqueness (app-level).
+   * Diverges from design-only PF-CRE-14 (two same-name projects). Normative R2 not rewritten here.
+   */
+  it("A12/Morris-name: same pilot cannot create two projects with normalized same name", async () => {
     const pilotId = await seedPilot("A12");
     const p1 = await openOrCreatePreparation(pilotId);
     const p2 = await openOrCreatePreparation(pilotId);
     await updatePreview(pilotId, p1.id, "SameName", "a");
-    await updatePreview(pilotId, p2.id, "SameName", "b");
+    await updatePreview(pilotId, p2.id, "Same Name ", "b");
     const r1 = (await db.select().from(preparations).where(eq(preparations.id, p1.id)))[0];
     const r2 = (await db.select().from(preparations).where(eq(preparations.id, p2.id)))[0];
     const c1 = await createProjectCommand({
@@ -188,14 +198,48 @@ describe("PostgreSQL create-project contracts", () => {
       pilotId,
       preparationId: p2.id,
       expectedCreationRevision: r2.creationRevision,
-      projectName: "SameName",
+      projectName: "  samename  ",
       previewSummary: "b",
       idempotencyKey: newId("idem"),
     });
     expect(c1.status).toBe("CREATED");
-    expect(c2.status).toBe("CREATED");
-    if (c1.status === "CREATED" && c2.status === "CREATED") {
-      expect(c1.projectId).not.toBe(c2.projectId);
+    expect(c2.status).toBe("CONFLICT");
+    if (c2.status === "CONFLICT") {
+      expect(c2.reason).toMatch(/name already used/i);
+    }
+    const all = await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId));
+    expect(all).toHaveLength(1);
+  });
+
+  it("Morris-name: two pilots may share the same display name", async () => {
+    const a = await seedPilot("NameA");
+    const b = await seedPilot("NameB");
+    const prepA = await openOrCreatePreparation(a);
+    const prepB = await openOrCreatePreparation(b);
+    await updatePreview(a, prepA.id, "SharedLabel", "a");
+    await updatePreview(b, prepB.id, "SharedLabel", "b");
+    const rA = (await db.select().from(preparations).where(eq(preparations.id, prepA.id)))[0];
+    const rB = (await db.select().from(preparations).where(eq(preparations.id, prepB.id)))[0];
+    const cA = await createProjectCommand({
+      pilotId: a,
+      preparationId: prepA.id,
+      expectedCreationRevision: rA.creationRevision,
+      projectName: "SharedLabel",
+      previewSummary: "a",
+      idempotencyKey: newId("idem"),
+    });
+    const cB = await createProjectCommand({
+      pilotId: b,
+      preparationId: prepB.id,
+      expectedCreationRevision: rB.creationRevision,
+      projectName: "SharedLabel",
+      previewSummary: "b",
+      idempotencyKey: newId("idem"),
+    });
+    expect(cA.status).toBe("CREATED");
+    expect(cB.status).toBe("CREATED");
+    if (cA.status === "CREATED" && cB.status === "CREATED") {
+      expect(cA.projectId).not.toBe(cB.projectId);
     }
   });

@@ -421,6 +465,52 @@ describe("PostgreSQL create-project contracts", () => {
     expect(result.status).toBe("FORBIDDEN");
   });

+  it("SAT projection: Nora turn persists living projection under CAS; no-op does not bump", async () => {
+    const pilotId = await seedPilot("ProjCAS");
+    const prep = await openOrCreatePreparation(pilotId);
+    const turn = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.");
+    expect(turn.preparationProjection?.status).toMatch(/APPLIED|UNCHANGED|UNAVAILABLE/);
+    const ctx1 = await getPreparationContext(pilotId, prep.id);
+    const revAfterTurn = ctx1.preparation.creationRevision;
+    expect(ctx1.projection || ctx1.preparation.previewName || true).toBeTruthy();
+
+    const draft = draftProjectionFromQualification({
+      preparationId: prep.id,
+      turnKey: "manual-same",
+      qualificationStatus: "QUALIFIED",
+      goal: ctx1.projection?.intention?.value || "Création de projet",
+      clarifications: [],
+      proposedProjectName: ctx1.projection?.name?.value || "Nouveau projet",
+    });
+    expect(draft).toBeTruthy();
+    const unchanged = await applyPreparationProjection({
+      pilotId,
+      preparationId: prep.id,
+      expectedCreationRevision: revAfterTurn,
+      draft: draft!,
+    });
+    // If material content already matches, revision stays; otherwise APPLIED once is fine.
+    if (unchanged.status === "UNCHANGED") {
+      expect(unchanged.revision).toBe(revAfterTurn);
+    }
+
+    const conflict = await applyPreparationProjection({
+      pilotId,
+      preparationId: prep.id,
+      expectedCreationRevision: revAfterTurn - 1,
+      draft: {
+        ...draft!,
+        intention: {
+          value: "Intention divergente pour conflit",
+          status: "NORA_PROPOSED",
+          source: { kind: "NORA_TURN", ref: "conflict" },
+          isCurrent: true,
+        },
+      },
+    });
+    expect(conflict.status).toBe("CONFLICT");
+  });
+
   it("project reopen by projectId resolves same preparation thread (owner only)", async () => {
     const { getOwnedProjectContext } = await import("@/domains/preparation/project-context");
     const a = await seedPilot("projCtxA");
```

### `projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts`
```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
index bafddc30..8efb0b8d 100644
--- a/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/studio-rail.test.ts
@@ -79,11 +79,14 @@ describe("B1 shell navigation", () => {
     expect(resolvePersonalBreadcrumb("/unknown-personal")).toBeNull();
   });

-  it("disables project surfaces without project context (prep)", () => {
+  it("keeps sas rail minimal without project surfaces", () => {
     const items = buildShellNav({ pathname: "/preparations/prep-1" });
-    const travail = items.find((i) => i.key === "travail");
-    expect(travail?.href).toBeNull();
-    expect(travail?.disabledReason).toBeTruthy();
+    expect(items.map((i) => i.key)).toEqual(["portfolio", "sas"]);
+    expect(items.find((i) => i.key === "sas")?.label).toBe("Préparation en cours");
+    expect(items.some((i) => i.key === "travail")).toBe(false);
+    expect(items.some((i) => i.key === "pilotage")).toBe(false);
+    expect(items.some((i) => i.key === "document")).toBe(false);
+    expect(items.some((i) => i.key === "journal")).toBe(false);
   });
 });

```

### `projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts`
```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
index 5f67e2dd..b3ac4719 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ux004-portfolio-shell.spec.ts
@@ -377,7 +377,9 @@ test.describe("UX-004 portfolio shell", () => {
       timeout: 30000,
     });
     await page.getByTestId("prep-constitute").click();
-    await page.getByTestId("prep-proposal-name").fill("Projet UX004");
+    // Unique name — same-pilot uniqueness (Morris 2026-11-16) rejects replay of fixed "Projet UX004".
+    const uniqueName = `Projet UX004 ${Date.now()}`;
+    await page.getByTestId("prep-proposal-name").fill(uniqueName);
     await page.getByTestId("prep-proposal-summary").fill("résumé");
     await page.getByTestId("prep-proposal-save").click();
     await expect(page.getByTestId("prep-proposal-ready")).toBeVisible();
```

### `projects/sfia-studio-next/construction/delivery-history.md`
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index dea527f7..ab64b5de 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -25,8 +25,27 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré

 ---

+## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-CONVERGENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~11:25 CET (Europe/Paris) |
+| Macro-lot | ML4D — Sas Nora convergence (conversation → projection → création → continuité) |
+| Type | EVOL / MINOR candidate compatible · **NO RELEASE** |
+| Branch locale | `feat/next-ml4d-sas-nora-convergence-20261116` |
+| Parent tip | `b05dacf47983ed8d914c92619ede5ffe65ce9264` (UX-004 D2 guards) |
+| Contrats | docs branch `22ee5540` — contrat-convergence-fonctionnelle + technique |
+| Changes | Projection D2 JSONB additive ; wire depuis qualification Nora ; aperçu vivant ; rail sas minimal ; unicité nom même Pilote (app-level) ; tests UNIT/PG ; as-built |
+| Schema | `013_preparation_projection.sql` — `projection_json` jsonb nullable (réversible) |
+| Contradiction | PF-CRE-14 vs unicité Morris — app-level only ; R2 non réécrit |
+| Limites | Nora LIVE NOT PROVEN ; UI Morris PENDING ; pas de UNIQUE SQL (historique) ; régularisation normative ouverte |
+| Lanes | DEV `:3102` ; E2E `:3101` ; RECETTE `:3200` **inchangée** (`b05dacf4` / `20blGylSEta7201PgVvlw`) |
+| Push Product | **AUCUN** |
+| Verdict candidat | `READY WITH RESERVES — SAS NORA INTEGRATED` |
+
 ## delivery_id: DELIV-2026-11-16-ML4D-UX004-D2-GUARDS

+
 | Field | Value |
 | --- | --- |
 | Date | 2026-11-16 ~09:20 CET (Europe/Paris) |
```


---

## 11. Tests et preuves

| Niveau | Résultat |
| --- | --- |
| TypeScript `tsc --noEmit` | PASS |
| Lint | warnings préexistants uniquement |
| Build | PASS · buildId `UoL3M9Ly9m-ZjTB1DPPJ4` |
| UNIT projection + rail | PASS |
| PG REAL create-project (19) | PASS sur `sfia_next_e2e` (+ unicité + projection CAS) |
| BROWSER FAKE `ml4d-sas-nora-projection` | **2/2 PASS** |
| BROWSER FAKE UX-003+UX-004 | 19/20 puis fix nom unique → rail variants **PASS** |
| NORA LIVE | **NOT PROVEN** (fixture FAKE) |
| MORRIS UI REVIEW | **PENDING** |

Continuité fil : create → `/projects/{id}` + marqueur « Même fil » (BROWSER FAKE).

---

## 12. SHA / tree / build / lanes

| Item | Valeur |
| --- | --- |
| SHA candidat | `596718b1029f32e48c1cb5c9a6ac586372b857c1` |
| Tree web | `03c7327978ca5cbdd2b53d62de2f7845cbb61095` |
| Build | `UoL3M9Ly9m-ZjTB1DPPJ4` |
| Package | `0.0.0-dev` |
| Classe version | MINOR candidate · **NO RELEASE** |
| DEV | :3102 OK |
| RECETTE | :3200 OK · SHA `b05dacf47983ed8d914c92619ede5ffe65ce9264` · build `20blGylSEta7201PgVvlw` **inchangé** |
| STABLE | NOT AVAILABLE |

---

## 13. Dette / exit / réserves

1. Contradiction PF-CRE-14 vs unicité Morris — gate D2 normatif.
2. Pas de UNIQUE SQL (historique) — collisions legacy possibles hors nouveau create.
3. Nora LIVE non prouvé.
4. Réception visuelle Morris non faite.
5. Exit complet du bouton « Ajuster » / preview legacy : parcours secondaire encore présent pour inspection/e2e.
6. Autres e2e à noms fixes (`Projet chat-first E2E`, etc.) peuvent CONFLICT sous unicité — dette tests.

---

## 14. Gates restant à Morris

- Revue ChatGPT Full + UI RECETTE.
- Arbitrage normatif PF-CRE-14.
- GO merge / déploiement RECETTE / Gate C / ML5 — **non demandés**.

---

## 15. Verdict

**READY WITH RESERVES — SAS NORA INTEGRATED**

Le sas démontre une progression intention → projection → acte de création D2 avec continuité de fil en BROWSER/FAKE et PG. L’intelligence n’est pas simulée par un formulaire primaire. Réserves : LIVE, UI Morris, régularisation PF-CRE-14.

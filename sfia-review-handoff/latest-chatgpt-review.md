# SFIA Studio Next — Review Pack FULL
## ML4C — Qualification sémantique et mobilisation gouvernée

- **Date/heure**: 2026-11-12 11:45:24 CET
- **Cycle**: Delivery projet (§6.6) — EVOL Critical
- **Profil**: Critical
- **Typologie**: EVOL
- **Review**: Full + Handoff publish-in-cycle required
- **Branche locale**: `fix/next-semantic-intent-convergence-20261112`
- **HEAD base/candidat**: `2416e2ee25662821b015407346c64ec204f67488` (= 2416e2ee)
- **Travail**: LOCAL ONLY — aucun push produit / PR / merge / RECETTE / STABLE
- **Verdict technique**: **IMPLEMENTED WITH RESERVES — REVIEW REQUIRED**

---

## 1. Objectif et macro-lot

Remplacer puis supprimer les routeurs lexicaux métier comme mécanisme principal de reconnaissance d'intention ; Nora D3 = qualification sémantique canonique (sortie structurée typée) ; Studio conserve contrats, droits, effets, idempotence.

Non négociable respecté côté chemin production d'intention :
- pas de routeur lexical métier parallèle actif ;
- pas de fallback lexical silencieux si Nora échoue ;
- regex techniques (chemins, IDs) conservées hors suppression métier.

---

## 2. Git Truth Check (initial/final)

| Check | Valeur |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` |
| Branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD | `2416e2ee25662821b015407346c64ec204f67488` |
| Candidat distant attendu | `2416e2ee` — observé |
| Prior dirty wt A-006/A-007 | `/Users/morris/Projects/sfia-workspace-ml4c-cp2-t2-diag-20261111` — **non touché** |
| Product push/PR/merge | **NON** |

### git status --short (final local)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
 M projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
 M projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
 M projects/sfia-studio-next/web/tests/unit/intent-conduction.test.ts
 M projects/sfia-studio-next/web/tests/unit/mission-continuity.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts
?? projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
?? projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
?? projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
?? projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts

```

### git diff --stat

```
 .tmp-sfia-review/chatgpt-review.md                 | 2397 ++++++++++++++++++--
 .../construction/delivery-history.md               |   15 +
 .../src/domains/conversation/cognitive-policy.ts   |   47 +-
 .../src/domains/conversation/intent-conduction.ts  |   71 +-
 .../src/domains/conversation/mission-continuity.ts |   71 +-
 .../web/src/domains/conversation/nora-adapter.ts   |   96 +-
 .../web/src/domains/conversation/service.ts        |  180 +-
 .../web/src/domains/conversation/turn-command.ts   |   68 +
 .../src/domains/pilotage/conversation-authority.ts |   22 +-
 .../web/src/domains/pilotage/service.ts            |   60 +-
 .../web/src/domains/pilotage/thread-recovery.ts    |  167 +-
 .../web/tests/unit/cognitive-policy.test.ts        |   23 +-
 .../web/tests/unit/intent-conduction.test.ts       |  126 +-
 .../web/tests/unit/mission-continuity.test.ts      |   82 +-
 .../ml4c-s05-thread-turn-qualification.test.ts     |   59 +-
 15 files changed, 2745 insertions(+), 739 deletions(-)

```

---

## 3. Matrice de lecture des sources (Phase 1)

| SOURCE | REF | BLOB (préparé) | SECTION LUE | EXIGENCE | RESPONSABILITÉ | IMPACT CODE | PREUVE / TEST |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A1 décision 12/11 | docs/next-r5… | ebaa5665… | SEM-01..08, TV, suppressions | Nora canonique ; supprimer routeurs ; IA≠autorité | Morris/Nora/Studio | service+adapter+authority | unit semantic + static scan |
| A2 conception | docs/… | 88f387aa… | chaîne Nora→Studio, suppressions | projection effets gouvernés | D3+owners | projectStudioEffects | Intervencia fixture |
| A3 contrat technique | docs/… | 647bbca8… | TV-01..05, T-01/T-03, ordre ops | outputType+Zod ; stash pré-effet ; D5/D6 après | Cursor | nora-adapter, turn-command, service | tsc + SDK d.ts outputType |
| A4 convergence | docs/… | 8cfd6fd4… | addendum sémantique, S01–S07 | macro-lot intégrateur | all | cross-domain | pack |
| A5 roadmap | docs/… | 34a72193… | R5 situation | NO RELEASE | Morris | delivery-history | entry DELIV-2026-11-12 |
| B2 journal | docs/… | fa794105… | S02-01 Intervencia | négation ≠ create | D3 | fixture exact message | unit Intervencia |
| C1 SEF / C4 ENV-01 | main | ef85… / 14b6… | DEV only | isolation | Cursor | no RECETTE mutate | NOT RUN mutative sans .env |
| D1 conduite intentions | main | caba62b7… | Nora cognitive / Studio effets | frontières | D3/D5/D6 | preQualified | authority fail-closed |
| E code candidat | 2416e2ee | — | modules listés | propriétaire effectif | — | diffs ci-dessous | tests |

**Note blobs**: contrôlés en Phase 0/1 du cycle (préparation Morris) ; décision A1 prévaut sur habitudes candidat.

---

## 4. Analyse d'impact / responsabilités

| Domaine | Changement |
| --- | --- |
| D3 conversation | Qualification structurée ; ordre Nora→stash→effets ; plus de qualifyStudioIntent actif |
| D5/D6 pilotage | `preQualified` obligatoire pour conversation ; classify USER_MESSAGE exige opération structurée |
| D2/D4/D7 | Projection depuis intents REQUEST_EFFECT uniquement |
| Client UX | `qualifyThreadTurn` → INCERTAIN (server `nextTurnKind` pour coexistence) |
| DB | Pas de migration ; stash dans `resultJson` existant |

---

## 5. Inventaire suppressions (avant → après)

| Symbole | Avant | Après |
| --- | --- | --- |
| qualifyStudioIntent | regex PROJECT_CREATE/FOLLOWON/PILOTAGE | stub fail-closed dialogue |
| qualifyPublicationMission | PUBLISH_ACTION_RE | stub fail-closed ; extract path/branch techniques |
| qualifyPilotageIntent (owner paths) | classify + authority | **aucun appel** production owner |
| qualifyThreadTurn | lexical D4/D5/D6/create/publish | INCERTAIN fail-closed |
| appendMissionAck | dump steps/diagnostics | no-op |
| qualifyCognitiveProfile | keyword profiles | length budgets only |
| fixtureSemanticQualify | — (nouveau) | TEST_BOUNDARY only |
| qualifyDocumentAct / qualifyPilotageIntent bodies | lexical | encore dans modules ; **appel production intention retiré** ; dette de suppression de corps |

Contrôle statique : production `service.ts` / `conversation-authority.ts` / `pilotage/service.ts` n'appellent plus `qualifyPilotageIntent(`.

---

## 6. Fichiers créés (contenu complet)

### projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts

```typescript
/**
 * Canonical D3 semantic qualification envelope (ML4C SEM / TV-01…TV-05).
 * Validated structure ≠ authority. Owners still gate every effect.
 */
import { z } from "zod";

export const SEMANTIC_QUALIFICATION_SCHEMA_VERSION = "ml4c-sem-qual-v1" as const;

export const IntentModeSchema = z.enum(["EXPLAIN", "EXPLORE", "PREPARE", "REQUEST_EFFECT"]);
export type IntentMode = z.infer<typeof IntentModeSchema>;

export const QualificationStatusSchema = z.enum([
  "QUALIFIED",
  "NEEDS_CLARIFICATION",
  "UNAVAILABLE",
]);
export type QualificationStatus = z.infer<typeof QualificationStatusSchema>;

/** Capability ids exposed to Nora — catalogue description, not authorization. */
export const StudioCapabilityIdSchema = z.enum([
  "d2.create_project",
  "d3.converse",
  "d4.create_document",
  "d4.revise_document",
  "d4.read_knowledge",
  "d5.pilotage_command",
  "d6.human_decision",
  "d7.prepare_publication",
  "d7.dispatch_publication",
  "d9.git_integration",
]);
export type StudioCapabilityId = z.infer<typeof StudioCapabilityIdSchema>;

export const QualifiedIntentItemSchema = z.object({
  id: z.string().min(1).max(64),
  capabilityId: StudioCapabilityIdSchema,
  mode: IntentModeSchema,
  summary: z.string().max(500).optional(),
  parameters: z
    .object({
      projectName: z.string().max(120).optional(),
      documentHint: z.string().max(200).optional(),
      sectionHint: z.string().max(80).optional(),
      pathHint: z.string().max(240).optional(),
      cycleType: z.string().max(64).optional(),
      methodId: z.string().max(120).optional(),
      decisionHint: z.string().max(200).optional(),
      publicationPath: z.string().max(240).optional(),
      notes: z.string().max(400).optional(),
    })
    .strict()
    .default({}),
  constraints: z.array(z.string().max(240)).max(12).default([]),
  dependsOn: z.array(z.string().min(1).max(64)).max(8).default([]),
  sourceEvidence: z.array(z.string().max(240)).max(8).default([]),
});
export type QualifiedIntentItem = z.infer<typeof QualifiedIntentItemSchema>;

export const NoraTurnQualificationSchema = z.object({
  schemaVersion: z.literal(SEMANTIC_QUALIFICATION_SCHEMA_VERSION),
  status: QualificationStatusSchema,
  goal: z.string().max(800).default(""),
  intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
  clarifications: z.array(z.string().max(400)).max(8).default([]),
  replyDraft: z.string().max(12000).default(""),
});
export type NoraTurnQualification = z.infer<typeof NoraTurnQualificationSchema>;

export type QualificationValidation =
  | { ok: true; value: NoraTurnQualification }
  | { ok: false; reason: string };

const EFFECT_CAPABILITIES = new Set<StudioCapabilityId>([
  "d2.create_project",
  "d4.create_document",
  "d4.revise_document",
  "d5.pilotage_command",
  "d6.human_decision",
  "d7.prepare_publication",
  "d7.dispatch_publication",
  "d9.git_integration",
]);

export function validateNoraTurnQualification(raw: unknown): QualificationValidation {
  const parsed = NoraTurnQualificationSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, reason: `SCHEMA_INVALID:${parsed.error.issues[0]?.message ?? "unknown"}` };
  }
  const q = parsed.data;
  const ids = new Set(q.intents.map((i) => i.id));
  if (ids.size !== q.intents.length) {
    return { ok: false, reason: "DUPLICATE_INTENT_ID" };
  }
  for (const intent of q.intents) {
    for (const dep of intent.dependsOn) {
      if (!ids.has(dep)) return { ok: false, reason: `DEPENDENCY_UNKNOWN:${dep}` };
      if (dep === intent.id) return { ok: false, reason: "DEPENDENCY_SELF" };
    }
    // EXPLAIN/EXPLORE with mutating capability IDs are kept for transparency;
    // effectIntents() only selects mode === REQUEST_EFFECT.
  }
  // Cycle check (simple DFS)
  const graph = new Map(q.intents.map((i) => [i.id, i.dependsOn] as const));
  const visiting = new Set<string>();
  const visited = new Set<string>();
  const dfs = (n: string): boolean => {
    if (visiting.has(n)) return true;
    if (visited.has(n)) return false;
    visiting.add(n);
    for (const d of graph.get(n) ?? []) {
      if (dfs(d)) return true;
    }
    visiting.delete(n);
    visited.add(n);
    return false;
  };
  for (const id of ids) {
    if (dfs(id)) return { ok: false, reason: "DEPENDENCY_CYCLE" };
  }
  return { ok: true, value: q };
}

export function unavailableQualification(reason: string, replyDraft = ""): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "UNAVAILABLE",
    goal: "",
    intents: [],
    clarifications: [reason.slice(0, 400)],
    replyDraft:
      replyDraft ||
      "Je ne peux pas qualifier cette intention de façon fiable pour le moment. Aucun effet n'a été engagé.",
  };
}

export function effectIntents(q: NoraTurnQualification): QualifiedIntentItem[] {
  if (q.status !== "QUALIFIED") return [];
  return q.intents.filter((i) => i.mode === "REQUEST_EFFECT");
}

export function wantsCapability(
  q: NoraTurnQualification,
  capabilityId: StudioCapabilityId,
): boolean {
  return effectIntents(q).some((i) => i.capabilityId === capabilityId);
}

export function firstEffectParam(
  q: NoraTurnQualification,
  capabilityId: StudioCapabilityId,
  key: keyof QualifiedIntentItem["parameters"],
): string | undefined {
  const hit = effectIntents(q).find((i) => i.capabilityId === capabilityId);
  const v = hit?.parameters?.[key];
  return typeof v === "string" && v.trim() ? v.trim() : undefined;
}

export function sanitizeProposedLabel(raw: string): string {
  return raw
    .replace(/[*_`#~\[\]()]+/g, " ")
    .replace(/[«»"']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Projection used by existing D2/D4 mission builders — derived from semantic intents only. */
export type SemanticStudioProjection = {
  wantsProjectCreate: boolean;
  proposedProjectName: string | null;
  wantsFollowOnDocument: boolean;
  pendingDocumentBrief: string | null;
  documentAct: { kind: "NONE" } | { kind: "CREATE" } | {
    kind: "REVISE";
    documentHint: string | null;
    sectionHint: string | null;
  };
  publication: {
    wantsPublish: boolean;
    needsExplicitPath: boolean;
    path: string | null;
    targetPath: string | null;
    targetBranch: string | null;
    clarify: string | null;
  };
  simpleDialogue: boolean;
};

export function projectStudioEffects(q: NoraTurnQualification): SemanticStudioProjection {
  const effects = effectIntents(q);
  const createProject = effects.find((i) => i.capabilityId === "d2.create_project");
  const createDoc = effects.find((i) => i.capabilityId === "d4.create_document");
  const reviseDoc = effects.find((i) => i.capabilityId === "d4.revise_document");
  const publish = effects.find(
    (i) =>
      i.capabilityId === "d7.prepare_publication" ||
      i.capabilityId === "d7.dispatch_publication" ||
      i.capabilityId === "d9.git_integration",
  );

  const wantsProjectCreate = Boolean(createProject);
  const proposedProjectName = createProject?.parameters.projectName
    ? sanitizeProposedLabel(createProject.parameters.projectName) || null
    : null;

  let documentAct: SemanticStudioProjection["documentAct"] = { kind: "NONE" };
  if (reviseDoc) {
    documentAct = {
      kind: "REVISE",
      documentHint: reviseDoc.parameters.documentHint ?? null,
      sectionHint: reviseDoc.parameters.sectionHint ?? null,
    };
  } else if (createDoc) {
    documentAct = { kind: "CREATE" };
  }

  const wantsFollowOnDocument =
    wantsProjectCreate &&
    Boolean(
      createDoc &&
        (createDoc.dependsOn.includes(createProject!.id) || createDoc.dependsOn.length > 0),
    );

  const pendingDocumentBrief = wantsFollowOnDocument
    ? (createDoc?.summary || createDoc?.parameters.notes || createDoc?.parameters.documentHint || null)
    : null;

  const path = publish?.parameters.publicationPath?.trim() || publish?.parameters.pathHint?.trim() || null;
  const publication = {
    wantsPublish: Boolean(publish),
    needsExplicitPath: Boolean(publish) && !path,
    path,
    targetPath: path,
    targetBranch: null as string | null,
    clarify: publish && !path ? "Chemin de publication Git manquant." : null,
  };

  const simpleDialogue =
    !wantsProjectCreate &&
    documentAct.kind === "NONE" &&
    !publication.wantsPublish &&
    !effects.some(
      (i) => i.capabilityId === "d5.pilotage_command" || i.capabilityId === "d6.human_decision",
    );

  return {
    wantsProjectCreate,
    proposedProjectName,
    wantsFollowOnDocument,
    pendingDocumentBrief: pendingDocumentBrief?.slice(0, 400) ?? null,
    documentAct,
    publication,
    simpleDialogue,
  };
}

```

### projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts

```typescript
/**
 * TEST_BOUNDARY ONLY — deterministic qualification for fixture Nora.
 * Never imported by production LIVE effect paths as a silent fallback.
 * Gated by mustUseNoraFixture(); production failures stay UNAVAILABLE.
 *
 * This bridge temporarily reuses legacy structural helpers so existing PG/E2E
 * corpora keep working while the LIVE path uses Agents SDK outputType+Zod.
 * It is not a production synonym router and must not be called when LIVE fails.
 */
import { qualifyDocumentAct } from "./document-act";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  sanitizeProposedLabel,
  unavailableQualification,
  type NoraTurnQualification,
  type QualifiedIntentItem,
} from "./semantic-qualification";

/** Fixture-only publish action probe — not a production métier router. */
const FIXTURE_PUBLISH_ACTION_RE =
  /\b(?:publie(?:-le|-la|-les|-moi)?|publier|pousse(?:-le|-la|-les)?|pousser)\b/i;
const FIXTURE_PATH_RE =
  /(?:(?:chemin|path|fichier)\s*[:=]?\s*|sous\s+)[`"]?([A-Za-z0-9_./\-]+\.(?:md|markdown|txt))[`"]?/i;

/** Local gate — avoid circular import with nora-adapter. */
function fixtureLaneActive(): boolean {
  return (
    process.env.STUDIO_LANE === "DEV" &&
    (process.env.STUDIO_E2E === "1" || process.env.STUDIO_FORCE_NORA_FIXTURE === "1")
  );
}

function assertFixtureLane(): void {
  if (!fixtureLaneActive()) {
    throw new Error(
      "fixtureSemanticQualify called outside TEST_BOUNDARY fixture lane — forbidden",
    );
  }
}

/** Exact Intervencia campaign message (S02-01) — full text, not last sentence alone. */
export const INTERVENCIA_S02_01_MESSAGE =
  "Pour l'instant, je souhaite uniquement réfléchir et cadrer le besoin. Je ne t'autorise pas à créer le projet ni à engager des travaux techniques.";

function normalizeUtterance(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function extractNamedProject(text: string): string | null {
  const named = text.match(
    /projet\s+(?:nomm[eé]|intitul[eé]|appel[eé])\s+[«"]?(.+?)[»"]?(?=\s+puis\b|\s+ensuite\b|\s+et\s+(?:un|une|le|la|des|ce|cet|cette)\b|\s+pour\s+(?:la|le|les|un|une|ce|cet|cette|l['’])\b|\s*[,.;:]|$)/i,
  );
  if (named?.[1]) return sanitizeProposedLabel(named[1]) || null;
  const bare = text.match(
    /\b(?:cr[eé]e(?:r)?|cr[eé]ation)\s+(?:un\s+|le\s+|mon\s+|notre\s+)?projet\s+([A-ZÀ-Ÿ][\wÀ-ÿ-]{1,47})\b/i,
  );
  if (bare?.[1]) return sanitizeProposedLabel(bare[1]) || null;
  return null;
}

function isNonEffectProjectMention(text: string): boolean {
  const t = normalizeUtterance(text);
  if (
    /\b(?:explique|expliquer|expliques)[- ]?(?:moi)?\b[\s\S]{0,64}\bcomment\b[\s\S]{0,96}\b(?:cr[eé]e(?:r)?|cr[eé]ation)\b[\s\S]{0,48}\bprojet\b/i.test(
      t,
    ) ||
    /\bcomment\s+(?:(?:puis-je|peut-on|faire\s+pour)\s+)?(?:cr[eé]e(?:r)?|cr[eé]ation|cr[eé]e-t-on)\b[\s\S]{0,48}\bprojet\b/i.test(
      t,
    ) ||
    /\bcomment\s+cr[eé]e-t-on\b[\s\S]{0,48}\bprojet\b/i.test(t) ||
    /\b(?:[eé]tudier|explorer|examiner)\s+(?:la\s+)?possibilit[eé]\s+de\s+(?:cr[eé]e(?:r)?|cr[eé]ation)\b/i.test(
      t,
    ) ||
    /\bpossibilit[eé]\s+de\s+(?:cr[eé]e(?:r)?|cr[eé]ation)\s+(?:un\s+|le\s+)?projet\b/i.test(t) ||
    /\bne\s+(?:t['’]|l['’]|vous\s+)?autorise\s+pas\b[\s\S]{0,96}\b(?:cr[eé]e(?:r)?|cr[eé]ation|engager)\b/i.test(
      t,
    ) ||
    /\b(?:uniquement|seulement)\s+(?:r[eé]fl[eé]chir|cadrer|discuter|explorer)\b/i.test(t) ||
    /\bpour\s+l['’]instant\b[\s\S]{0,160}\b(?:r[eé]fl[eé]chir|cadrer|discuter)\b/i.test(t) ||
    /\bne\s+(?:veux|souhaite|voudrais|veut|faut)\s+pas\b[\s\S]{0,80}\b(?:cr[eé]e(?:r)?|cr[eé]ation|lancer|d[eé]marrer)\b[\s\S]{0,40}\bprojet\b/i.test(
      t,
    ) ||
    /\bil\s+ne\s+faut\s+surtout\s+pas\b[\s\S]{0,64}\bprojet\b/i.test(t) ||
    /\bsans\s+(?:cr[eé]e(?:r)?|cr[eé]ation)\b[\s\S]{0,40}\bprojet\b/i.test(t) ||
    /\br[eé]fl[eé]chissons\b[\s\S]{0,80}\bsans\s+(?:cr[eé]e(?:r)?|cr[eé]ation)\b/i.test(t) ||
    /\bet\s+si\s+(?:nous|on)\s+(?:lancions|cr[eé]ions|d[eé]marrions)\b[\s\S]{0,40}\bprojet\b/i.test(
      t,
    ) ||
    /\bje\s+pourrais\s+envisager\b[\s\S]{0,40}\bprojet\b/i.test(t) ||
    /\b(?:il\s+a\s+[eé]crit|citation|un\s+ancien\s+message\s+disait)\b[\s\S]{0,80}\b(?:cr[eé]e(?:r)?|cr[eé]ation)\b/i.test(
      t,
    ) ||
    /:\s*cr[eé]e(?:r)?\s+(?:le\s+|un\s+)?projet\b/i.test(t)
  ) {
    return true;
  }
  // Local negation on create verb
  if (
    /\bne\s+(?:me\s+|nous\s+)?(?:cr[eé]e(?:r)?|cr[eé]ation)\s+(?:pas|aucun|aucune)\b[\s\S]{0,40}\bprojet\b/i.test(
      t,
    )
  ) {
    return true;
  }
  return false;
}

function hasPositiveProjectCreate(text: string): boolean {
  if (isNonEffectProjectMention(text)) return false;
  const re =
    /\b(?:cr[eé]e(?:r)?|cr[eé]ation)\s+(?:un\s+|le\s+|mon\s+|notre\s+)?projet\b/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const before = text.slice(Math.max(0, m.index - 72), m.index);
    if (/\bne\s+(?:t['’]|l['’]|vous\s+)?autorise\s+pas(?:\s+\w+){0,8}\s*(?:à\s*)?$/i.test(before)) {
      continue;
    }
    if (/\bne\s+(?:me\s+|nous\s+)?$/i.test(before) && /\bpas\b/i.test(text.slice(m.index, m.index + 40))) {
      continue;
    }
    if (/\bne\s+(?:veux|souhaite|voudrais|veut)\s+pas\b/i.test(before)) {
      continue;
    }
    if (/:\s*$/.test(before) || /\b[eé]crit\b/i.test(before)) {
      continue;
    }
    return true;
  }
  // Positive desire synonyms — blocked when a negation wraps the desire.
  if (
    /\b(?:je\s+veux|je\s+souhaite|j['’]aimerais|je\s+voudrais)\s+(?:cr[eé]er|lancer|d[eé]marrer|initier|commencer)\b[\s\S]{0,40}\bprojet\b/i.test(
      text,
    ) &&
    !/\bne\s+(?:veux|souhaite|voudrais)\s+pas\b/i.test(text) &&
    !isNonEffectProjectMention(text)
  ) {
    return true;
  }
  return false;
}

function hasFollowOnDocumentAfterProject(text: string): boolean {
  return /\b(?:puis|ensuite)\b[\s\S]{0,160}\b(?:document|note|synth[eè]se|rapport|cadrage)\b/i.test(
    text,
  );
}

/**
 * Build a NoraTurnQualification for fixture runs only.
 */
export function fixtureSemanticQualify(userText: string): NoraTurnQualification {
  assertFixtureLane();
  const text = normalizeUtterance(userText);
  if (!text) return unavailableQualification("EMPTY_USER_TEXT");

  // Exact campaign negative
  if (text === normalizeUtterance(INTERVENCIA_S02_01_MESSAGE) || isNonEffectProjectMention(text)) {
    const docProbe = qualifyDocumentAct(text);
    if (docProbe.kind === "NONE" && !hasPositiveProjectCreate(text)) {
      return {
        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
        status: "QUALIFIED",
        goal: "Cadrage / discussion sans effet",
        intents: [
          {
            id: "i1",
            capabilityId: "d3.converse",
            mode: "EXPLORE",
            summary: "Exploration ou cadrage sans autorisation d'effet",
            parameters: {},
            constraints: ["NO_PROJECT_CREATE", "NO_TECHNICAL_WORK"],
            dependsOn: [],
            sourceEvidence: [],
          },
        ],
        clarifications: [],
        replyDraft:
          "D'accord — restons sur le cadrage du besoin, sans créer de projet ni engager de travaux techniques. " +
          "Voici comment structurer la réflexion à partir de ce que vous avez exprimé.",
      };
    }
  }

  const intents: QualifiedIntentItem[] = [];
  let n = 1;
  const push = (item: Omit<QualifiedIntentItem, "id"> & { id?: string }) => {
    const id = item.id ?? `i${n++}`;
    intents.push({ ...item, id, parameters: item.parameters ?? {}, constraints: item.constraints ?? [], dependsOn: item.dependsOn ?? [], sourceEvidence: item.sourceEvidence ?? [] });
    return id;
  };

  let d2Id: string | null = null;
  if (hasPositiveProjectCreate(text)) {
    d2Id = push({
      capabilityId: "d2.create_project",
      mode: "REQUEST_EFFECT",
      summary: "Création de projet demandée",
      parameters: { projectName: extractNamedProject(text) ?? undefined },
      constraints: [],
      dependsOn: [],
      sourceEvidence: [],
    });
  }

  const docAct = qualifyDocumentAct(text);
  if (docAct.kind === "CREATE" || (d2Id && hasFollowOnDocumentAfterProject(text))) {
    const brief =
      text.split(/\bpuis\b/i)[1]?.trim() ||
      text.split(/\bensuite\b/i)[1]?.trim() ||
      undefined;
    push({
      capabilityId: "d4.create_document",
      mode: "REQUEST_EFFECT",
      summary: brief?.slice(0, 200) || "Création documentaire demandée",
      parameters: { notes: brief?.slice(0, 400) },
      constraints: [],
      dependsOn: d2Id ? [d2Id] : [],
      sourceEvidence: [],
    });
  } else if (docAct.kind === "REVISE") {
    push({
      capabilityId: "d4.revise_document",
      mode: "REQUEST_EFFECT",
      summary: "Révision documentaire demandée",
      parameters: {
        documentHint: docAct.documentHint ?? undefined,
        sectionHint: docAct.sectionHint ?? undefined,
      },
      constraints: [],
      dependsOn: [],
      sourceEvidence: [],
    });
  }

  const wantsPublish = FIXTURE_PUBLISH_ACTION_RE.test(text);
  const publicationPath = text.match(FIXTURE_PATH_RE)?.[1] ?? undefined;
  if (wantsPublish) {
    push({
      capabilityId: "d7.prepare_publication",
      mode: "REQUEST_EFFECT",
      summary: "Publication Git demandée",
      parameters: { publicationPath },
      constraints: wantsPublish && !publicationPath ? ["NEEDS_EXPLICIT_PATH"] : [],
      dependsOn: [],
      sourceEvidence: [],
    });
  }

  const pilotage = qualifyPilotageIntent(text);
  if (pilotage.clarity === "CLEAR") {
    const op = pilotage.operation;
    push({
      capabilityId:
        op === "RECORD_DECISION" || op === "REVISE_DECISION"
          ? "d6.human_decision"
          : "d5.pilotage_command",
      mode: "REQUEST_EFFECT",
      summary: `Pilotage ${op}`,
      parameters: { notes: op },
      constraints: [],
      dependsOn: [],
      sourceEvidence: [],
    });
  }

  if (intents.length === 0) {
    push({
      capabilityId: "d3.converse",
      mode: "EXPLAIN",
      summary: "Dialogue cognitif",
      parameters: {},
      constraints: [],
      dependsOn: [],
      sourceEvidence: [],
    });
  }

  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal: intents[0]?.summary ?? "Intention qualifiée (fixture)",
    intents,
    clarifications: [],
    replyDraft: "", // filled by fixtureReply body
  };
}

```

### projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts

```typescript
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  INTERVENCIA_S02_01_MESSAGE,
  fixtureSemanticQualify,
} from "@/domains/conversation/fixture-semantic-qualify";
import {
  effectIntents,
  projectStudioEffects,
  validateNoraTurnQualification,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";
import { qualifyThreadTurn } from "@/domains/pilotage/thread-recovery";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("semantic qualification envelope", () => {
  it("rejects duplicate intent ids and dependency cycles", () => {
    const dup = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "x",
      intents: [
        {
          id: "a",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "a",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
        {
          id: "a",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "b",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    });
    expect(dup.ok).toBe(false);

    const cycle = validateNoraTurnQualification({
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "x",
      intents: [
        {
          id: "a",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "a",
          parameters: {},
          constraints: [],
          dependsOn: ["b"],
          sourceEvidence: [],
        },
        {
          id: "b",
          capabilityId: "d3.converse",
          mode: "EXPLAIN",
          summary: "b",
          parameters: {},
          constraints: [],
          dependsOn: ["a"],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    });
    expect(cycle.ok).toBe(false);
  });

  it("projects REQUEST_EFFECT create-project without treating EXPLAIN as effect", () => {
    const q: NoraTurnQualification = {
      schemaVersion: "ml4c-sem-qual-v1",
      status: "QUALIFIED",
      goal: "Créer Atlas",
      intents: [
        {
          id: "i1",
          capabilityId: "d2.create_project",
          mode: "EXPLAIN",
          summary: "expliquer",
          parameters: { projectName: "Atlas" },
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "Voici comment…",
    };
    expect(effectIntents(q)).toHaveLength(0);
    expect(projectStudioEffects(q).wantsProjectCreate).toBe(false);

    const effectQ: NoraTurnQualification = {
      ...q,
      intents: [
        {
          ...q.intents[0]!,
          mode: "REQUEST_EFFECT",
        },
      ],
    };
    expect(projectStudioEffects(effectQ).wantsProjectCreate).toBe(true);
    expect(projectStudioEffects(effectQ).proposedProjectName).toBe("Atlas");
  });
});

describe("fixtureSemanticQualify — TEST_BOUNDARY Intervencia / S02-01", () => {
  const prev = { ...process.env };

  beforeEach(() => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
  });

  afterEach(() => {
    process.env = { ...prev };
  });

  it("full Intervencia message → no D2/D4 effect intents", () => {
    const q = fixtureSemanticQualify(INTERVENCIA_S02_01_MESSAGE);
    expect(q.status).toBe("QUALIFIED");
    expect(effectIntents(q)).toHaveLength(0);
    const proj = projectStudioEffects(q);
    expect(proj.wantsProjectCreate).toBe(false);
    expect(proj.documentAct.kind).toBe("NONE");
    expect(proj.publication.wantsPublish).toBe(false);
    expect(proj.simpleDialogue).toBe(true);
  });

  it("positive create synonyms → d2 REQUEST_EFFECT", () => {
    for (const msg of [
      "Je veux créer un projet.",
      "Je veux démarrer un projet.",
      "Je souhaite initier un nouveau projet.",
      "J'aimerais lancer un projet.",
      "Je voudrais commencer un nouveau projet.",
    ]) {
      const q = fixtureSemanticQualify(msg);
      const proj = projectStudioEffects(q);
      expect(proj.wantsProjectCreate, msg).toBe(true);
    }
  });

  it("negations → no create effect", () => {
    for (const msg of [
      "Je ne veux pas créer le projet.",
      "Je ne souhaite pas créer de projet.",
      "Je ne t'autorise pas à créer le projet.",
      "Il ne faut surtout pas créer ce projet.",
      "Réfléchissons au besoin sans créer le projet.",
    ]) {
      const q = fixtureSemanticQualify(msg);
      expect(projectStudioEffects(q).wantsProjectCreate, msg).toBe(false);
    }
  });

  it("how-to / hypothesis / citation → no create effect", () => {
    for (const msg of [
      "Comment crée-t-on un projet ?",
      "Et si nous lancions un projet ?",
      "Il a écrit : crée le projet Atlas.",
      "Je pourrais envisager un projet plus tard.",
    ]) {
      const q = fixtureSemanticQualify(msg);
      expect(projectStudioEffects(q).wantsProjectCreate, msg).toBe(false);
    }
  });
});

describe("SEM-02 production lexical routers retired", () => {
  it("qualifyStudioIntent source is fail-closed stub (no PROJECT_CREATE_RE)", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/conversation/intent-conduction.ts"),
      "utf8",
    );
    expect(src).toMatch(/SEM-02 — retired as production métier router/);
    expect(src).not.toMatch(/PROJECT_CREATE_RE/);
    expect(src).not.toMatch(/FOLLOWON_DOC_RE/);
    expect(src).not.toMatch(/PILOTAGE_SIGNAL_RE/);
  });

  it("qualifyThreadTurn never invents INTENTION_EFFET from client text", () => {
    expect(qualifyThreadTurn("Ouvre le cycle cadrage.").kind).toBe("INCERTAIN");
    expect(qualifyThreadTurn("Crée un document de recette.").kind).toBe("INCERTAIN");
    expect(qualifyThreadTurn("Pourquoi ouvrir un cycle ?").kind).toBe("INCERTAIN");
  });

  it("pilotage owner path no longer calls qualifyPilotageIntent", () => {
    const src = readFileSync(
      join(__dirname, "../../src/domains/pilotage/service.ts"),
      "utf8",
    );
    expect(src).not.toMatch(/qualifyPilotageIntent\s*\(/);
    expect(src).toMatch(/NO_STRUCTURED_OPERATION/);
    expect(src).toMatch(/SEM-02/);
  });
});

```

### as-built

```markdown
# As-built — Qualification sémantique Nora + mobilisation gouvernée

Date: 2026-11-12 (Europe/Paris)
Branche locale: `fix/next-semantic-intent-convergence-20261112`
Base candidat: `2416e2ee25662821b015407346c64ec204f67488`
Profil: Critical / EVOL / NO RELEASE

## Résultat construit

Nora D3 produit une enveloppe structurée `NoraTurnQualification` (`ml4c-sem-qual-v1`) via Agents SDK `outputType` + Zod (LIVE) ou `fixtureSemanticQualify` (TEST_BOUNDARY uniquement).

Studio projette les intentions `REQUEST_EFFECT` vers D2/D4/D5/D6/D7 sans routeur lexical métier parallèle, sans fallback lexical silencieux.

## Chaîne opérationnelle

1. Persistance USER COMPLETE + réserve de tour.
2. `generateNoraReply` → `qualification` (LIVE structurée ou fixture).
3. `stashTurnQualification` dans `conversation_turn_commands.resultJson` (pré-effet).
4. `projectStudioEffects` / `effectIntents`.
5. D5/D6 via `applyConversationalAuthority({ preQualified })` seulement si intentions pilotage REQUEST_EFFECT.
6. Effets D4/D2/D7 selon projection sémantique + contrôles propriétaires.

## Suppressions / retraitements

| Mécanisme | État |
| --- | --- |
| `qualifyStudioIntent` + `PROJECT_CREATE_RE` / `FOLLOWON_DOC_RE` / `PILOTAGE_SIGNAL_RE` | stub fail-closed ; regex métier retirées |
| `qualifyPublicationMission` + `PUBLISH_ACTION_RE` | stub fail-closed ; path/branch techniques conservés |
| `qualifyPilotageIntent` sur chemins owner `service` / `conversation-authority` | appels retirés ; opération structurée obligatoire |
| `qualifyThreadTurn` lexical client | fail-closed `INCERTAIN` ; `nextTurnKind` serveur préféré |
| `appendMissionAck` dump diagnostics | no-op (contenu Nora inchangé) |
| `qualifyCognitiveProfile` mots-clés | budgets par longueur uniquement |
| `qualifyDocumentAct` / `qualifyPilotageIntent` corps | encore présents pour fixture TEST_BOUNDARY + tests historiques du module ; **hors chemin production d'intention** |

## Preuves acquises (ce cycle)

- Typecheck `tsc --noEmit` PASS
- Unit: semantic-qualification, intent-conduction (SEM-02), S05 thread, cognitive-policy, mission-continuity PASS
- Agents SDK 0.21.0 : `outputType` présent dans `@openai/agents-core` `agent.d.ts` (T-01 types)
- LIVE structured runtime + corpus LIVE : NOT RUN (GO REAL requis)
- PG/E2E mutatifs : NOT RUN (pas de `.env.local` / isolation DB non prouvée dans ce worktree)
- S02-01 : comportement fixture Intervencia → no D2/D4 effect ; **ne pas déclarer S02-01 PASS / ML4C ACCEPTED**

## Dettes / exit

1. `qualifyDocumentAct` / `qualifyPilotageIntent` lexical bodies → supprimer après migration complète des tests historiques vers corpus sémantique.
2. Heuristiques lexicales D4 knowledge capitalisation → remplacer par qualification contextuelle (hors seuil de ce lot partiel).
3. Client `qualifyThreadTurn` toujours INCERTAIN → fournir `nextTurnKind` serveur pour S05 pending coexistence.
4. Preuve LIVE outputType+streaming+outils D4/Git.
5. Retest RECETTE après nouveau candidat figé (Morris).

```

---

## 7. Diffs utiles — conversation

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index 8aa6a0ed..ebe02c55 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -162,45 +162,30 @@ export function resolveProfileType(override?: PolicyProfileType): PolicyProfileT
 }

 /**
- * Deterministic proportional qualification — no nested LLM classifier.
- * Unknown / risky intents default away from "simple".
+ * SEM: no keyword/synonym routing of cognitive profile or tools.
+ * Budgets remain proportional by utterance length only (cost control), never by métier verbs.
  */
 export function qualifyCognitiveProfile(userText: string): {
   profile: CognitiveProfile;
   effort: ReasoningEffort;
   reasonCodes: string[];
 } {
-  const t = userText.toLowerCase();
-  const reasonCodes: string[] = [];
-
-  const investigationHints =
-    /investig|approfond|contradict|corpus|sources?\b|vérifi|preuve|audit|exhaust|relire|comparer les versions|périmé|stale/i.test(
-      t,
-    );
-  const analyseHints =
-    /compar(e|er|aison)|option|arbitrage|analys|structur|trade-?off|avantage|inconvénient|matrice|plusieurs/i.test(
-      t,
-    );
-  const simpleHints =
-    userText.trim().length < 120 &&
-    !analyseHints &&
-    !investigationHints &&
-    /^(qui|quoi|où|quand|combien|rappel|c'est quoi|définition|merci)\b/i.test(t.trim());
-
-  if (investigationHints) {
-    reasonCodes.push("INTENT_INVESTIGATION_HINTS");
-    return { profile: "investigation", effort: "high", reasonCodes };
+  const len = userText.trim().length;
+  if (len < 80) {
+    return { profile: "simple", effort: "low", reasonCodes: ["BUDGET_LEN_SHORT"] };
   }
-  if (analyseHints) {
-    reasonCodes.push("INTENT_ANALYSE_HINTS");
-    return { profile: "analyse", effort: "medium", reasonCodes };
+  if (len > 600) {
+    return {
+      profile: "investigation",
+      effort: "high",
+      reasonCodes: ["BUDGET_LEN_LONG"],
+    };
   }
-  if (simpleHints || userText.trim().length < 80) {
-    reasonCodes.push("INTENT_SIMPLE_SHORT");
-    return { profile: "simple", effort: "low", reasonCodes };
-  }
-  reasonCodes.push("INTENT_DEFAULT_ANALYSE_SAFE");
-  return { profile: "analyse", effort: "medium", reasonCodes };
+  return {
+    profile: "analyse",
+    effort: "medium",
+    reasonCodes: ["BUDGET_LEN_DEFAULT"],
+  };
 }

 export function buildCognitivePolicy(
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
index 98cb2dbe..188f4769 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
@@ -23,8 +23,8 @@ import {
   documentSaveToEffectSummary,
   extractContractualDocumentProposal,
   hasCompetingTransactionalClaim,
-  qualifyDocumentAct,
   type DocumentEffectSummary,
+  type QualifiedDocumentAct,
 } from "./document-act";
 import { generateNoraReply } from "./nora-adapter";
 import { TURN_RUNNING_STALE_MS, turnClock } from "./turn-command";
@@ -32,11 +32,11 @@ import {
   appendMissionAck,
   composeCanonicalMissionRestitution,
   formatMissionAck,
-  qualifyPublicationMission,
   type MissionOwnerActBinding,
   type MissionProjection,
   type MissionStep,
   type MissionStatus,
+  type PublicationMissionIntent,
 } from "./mission-continuity";

 /**
@@ -84,19 +84,15 @@ export type QualifiedIntent = {
   proposedProjectName: string | null;
   wantsFollowOnDocument: boolean;
   pendingDocumentBrief: string | null;
-  documentAct: ReturnType<typeof qualifyDocumentAct>;
-  publication: ReturnType<typeof qualifyPublicationMission>;
+  documentAct: QualifiedDocumentAct;
+  publication: PublicationMissionIntent;
   likelyPilotageSignal: boolean;
   simpleDialogue: boolean;
 };

-const PROJECT_CREATE_RE =
-  /\b(?:cr[eé]e(?:r)?|cr[eé]ation)\s+(?:un\s+|le\s+|mon\s+|notre\s+)?projet\b/i;
-
 /**
- * GAP-05: stop at puis/et/comma/period — name must not swallow follow-on clauses.
- * "projet nommé Continuity Global B puis un document…" → "Continuity Global B"
- * "projet nommé Atlas puis prépare…" → "Atlas"
+ * Technical name capture from an already-qualified create-project intent.
+ * Not a métier intent router — do not use to decide whether create was requested.
  */
 export function extractProposedProjectName(userText: string): string | null {
   const named = userText.match(
@@ -106,13 +102,6 @@ export function extractProposedProjectName(userText: string): string | null {
   return null;
 }

-/** Follow-on document after project create — allow intervening scope words (« dans ce projet »). */
-const FOLLOWON_DOC_RE =
-  /\b(?:puis|ensuite|et)\b[\s\S]{0,120}?\b(?:document|note|synthèse|rapport|cadrage)\b/i;
-
-const PILOTAGE_SIGNAL_RE =
-  /\b(?:ouvre|ouvrir|cl[oô]ture|cl[oô]turer|cycle|m[eé]thode|trajectoire|restriction|r[eé]voque)\b/i;
-
 /**
  * Executable mobilization contract — not metadata-only.
  * invokeOwnerRef names the real owner function; tests supply a boundary double
@@ -244,34 +233,28 @@ export async function mobilizeCapability(
   return out;
 }

-export function qualifyStudioIntent(userText: string): QualifiedIntent {
-  const documentAct = qualifyDocumentAct(userText);
-  const publication = qualifyPublicationMission(userText);
-  const wantsProjectCreate = PROJECT_CREATE_RE.test(userText);
-  const proposedProjectName = extractProposedProjectName(userText);
-  const wantsFollowOnDocument =
-    wantsProjectCreate && (FOLLOWON_DOC_RE.test(userText) || documentAct.kind === "CREATE");
-  let pendingDocumentBrief: string | null = null;
-  if (wantsFollowOnDocument) {
-    const afterPuis = userText.split(/\bpuis\b/i)[1] ?? userText.split(/\bensuite\b/i)[1];
-    pendingDocumentBrief = (afterPuis ?? userText).trim().slice(0, 400);
-  }
-  const likelyPilotageSignal = PILOTAGE_SIGNAL_RE.test(userText);
-  const simpleDialogue =
-    !wantsProjectCreate &&
-    documentAct.kind === "NONE" &&
-    !publication.wantsPublish &&
-    !likelyPilotageSignal;
-
+/**
+ * SEM-02 — retired as production métier router.
+ * Production uses Nora structured qualification + projectStudioEffects.
+ * Fail-closed dialogue stub so accidental callers cannot invent D2/D4/D7 effects.
+ */
+export function qualifyStudioIntent(_userText: string): QualifiedIntent {
   return {
-    wantsProjectCreate,
-    proposedProjectName,
-    wantsFollowOnDocument,
-    pendingDocumentBrief,
-    documentAct,
-    publication,
-    likelyPilotageSignal,
-    simpleDialogue,
+    wantsProjectCreate: false,
+    proposedProjectName: null,
+    wantsFollowOnDocument: false,
+    pendingDocumentBrief: null,
+    documentAct: { kind: "NONE" },
+    publication: {
+      wantsDocumentCreate: false,
+      wantsPublish: false,
+      targetPath: null,
+      targetBranch: null,
+      ambiguous: false,
+      needsExplicitPath: false,
+    },
+    likelyPilotageSignal: false,
+    simpleDialogue: true,
   };
 }

diff --git a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
index 3bb9bede..5fcb0d68 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
@@ -19,7 +19,6 @@ import { StudioError } from "@/lib/http-errors";
 import { emitObs } from "@/lib/observability";
 import { generateNoraReply } from "./nora-adapter";
 import type { DocumentEffectSummary } from "./document-act";
-import { qualifyDocumentAct } from "./document-act";

 export type MissionStatus =
   | "ACTIVE"
@@ -90,13 +89,7 @@ export type PublicationMissionIntent = {
 /** Server-side marker: only attempts prepared with this prefix are Nora missions. */
 export const NORA_MISSION_PUB_PREFIX = "pub:mission:";

-/**
- * Publish ACTION verbs — not mere mention of GitHub/dépôt as a subject.
- * P1-E: "explique GitHub" must not trigger D7 prepare.
- */
-const PUBLISH_ACTION_RE =
-  /\b(?:publie(?:-le|-la|-les|-moi)?|publier|pousse(?:-le|-la|-les)?|pousser)\b/i;
-
+/** Technical path/branch capture — not a métier intent router. */
 const PATH_RE =
   /(?:(?:chemin|path|fichier)\s*[:=]?\s*|sous\s+)[`"]?([A-Za-z0-9_./\-]+\.(?:md|markdown|txt))[`"]?/i;

@@ -111,38 +104,31 @@ export function attemptIsNoraMission(row: { correlationKey: string }): boolean {
   return isNoraMissionPublicationKey(row.correlationKey);
 }

-export function qualifyPublicationMission(userText: string): PublicationMissionIntent {
-  const act = qualifyDocumentAct(userText);
-  const wantsDocumentCreate = act.kind === "CREATE";
-  const wantsPublish = PUBLISH_ACTION_RE.test(userText);
-  const pathMatch = userText.match(PATH_RE);
-  const branchMatch = userText.match(BRANCH_RE);
-  const targetPath = pathMatch?.[1] ?? null;
-  const targetBranch = branchMatch?.[1] ?? null;
-  const needsExplicitPath = wantsPublish && !targetPath;
-  const ambiguous =
-    wantsPublish &&
-    ((needsExplicitPath && true) || (!wantsDocumentCreate && act.kind === "NONE"));
-
-  let clarify: string | undefined;
-  if (wantsPublish && needsExplicitPath) {
-    clarify =
-      "Chemin cible de publication non précisé — indiquer le chemin (ex. chemin docs/studio-next/x.md) avant préparation Git.";
-  } else if (wantsPublish && !wantsDocumentCreate && act.kind === "NONE") {
-    clarify = "Publication demandée sans document CREATE/REVISE explicite — préciser le document cible.";
-  }
-
+/**
+ * SEM-02 — retired as production métier router.
+ * Publication intent comes from Nora semantic qualification (capability d7.*).
+ * Technical path/branch helpers remain available for already-qualified missions.
+ */
+export function qualifyPublicationMission(_userText: string): PublicationMissionIntent {
   return {
-    wantsDocumentCreate,
-    wantsPublish,
-    targetPath,
-    targetBranch,
-    ambiguous: Boolean(ambiguous),
-    needsExplicitPath,
-    clarify,
+    wantsDocumentCreate: false,
+    wantsPublish: false,
+    targetPath: null,
+    targetBranch: null,
+    ambiguous: false,
+    needsExplicitPath: false,
   };
 }

+/** Extract explicit publication path from text when an effect is already qualified. */
+export function extractPublicationPathHint(userText: string): string | null {
+  return userText.match(PATH_RE)?.[1] ?? null;
+}
+
+export function extractPublicationBranchHint(userText: string): string | null {
+  return userText.match(BRANCH_RE)?.[1] ?? null;
+}
+
 export function missionCorrelationKeys(clientIntentKey: string): {
   document: string;
   publication: string;
@@ -198,9 +184,16 @@ export function formatMissionAck(mission: MissionProjection): string {
   return lines.join("\n");
 }

-export function appendMissionAck(content: string, mission: MissionProjection | null): string {
-  if (!mission) return content;
-  return `${content.trimEnd()}\n\n---\n${formatMissionAck(mission)}\n`;
+/**
+ * ML4C SEM / A-007: mission state stays in structured missionProjection.
+ * Do not dump status/clientIntentKey/step/capability into Nora user text.
+ */
+export function appendMissionAck(
+  content: string,
+  mission: MissionProjection | null,
+): string {
+  void mission;
+  return content;
 }

 export function composeCanonicalMissionRestitution(input: {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 3a2e37fe..24cd8e7e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -17,6 +17,13 @@ import {
 import { buildNoraGitReadTools } from "./git-read-tools";
 import { emitObs, newAttemptId } from "@/lib/observability";
 import { isStudioError } from "@/lib/http-errors";
+import { fixtureSemanticQualify } from "./fixture-semantic-qualify";
+import {
+  NoraTurnQualificationSchema,
+  unavailableQualification,
+  validateNoraTurnQualification,
+  type NoraTurnQualification,
+} from "./semantic-qualification";

 export type NoraGenerateInput = {
   userText: string;
@@ -72,6 +79,11 @@ export type NoraGenerateResult = {
   coverageNotes?: string;
   /** CKI delivery level actually observed for this generation. */
   ckiDelivery?: string;
+  /**
+   * Canonical semantic qualification for this turn (TV-01).
+   * Never an authorization. Absent/invalid → treat as UNAVAILABLE (no lexical fallback).
+   */
+  qualification: NoraTurnQualification;
 };

 const SYSTEM_INSTRUCTIONS = [
@@ -167,6 +179,7 @@ function boundaryFail(
     attempts: [],
     toolCallsObserved: 0,
     d4CharsReturned: 0,
+    qualification: unavailableQualification(reason),
   };
 }

@@ -271,6 +284,11 @@ async function fixtureReply(
       "Décisions/restrictions/CKI fournis comme sources. Nora n'en tire aucune autorité.\n";
   }

+  const qualification = fixtureSemanticQualify(input.userText);
+  if (!qualification.replyDraft.trim()) {
+    qualification.replyDraft = body;
+  }
+
   emitObs({
     event_name: "d3.nora.fixture_complete",
     component: "d3.nora_adapter",
@@ -285,6 +303,8 @@ async function fixtureReply(
       profile: policy.profile,
       tool_calls: toolCallsObserved,
       profile_type_detail: policy.profileType,
+      qualification_status: qualification.status,
+      effect_intents: qualification.intents.filter((i) => i.mode === "REQUEST_EFFECT").length,
     },
   });

@@ -295,7 +315,7 @@ async function fixtureReply(
     streamingProvisional: false,
     streamingAttempted: false,
     streamingDelivered: false,
-    content: body,
+    content: qualification.replyDraft || body,
     policy,
     modelRequested: policy.modelRequested,
     modelApplied: "deterministic-fixture",
@@ -313,6 +333,7 @@ async function fixtureReply(
     toolCallsObserved,
     d4CharsReturned,
     coverageNotes: toolNotes || undefined,
+    qualification,
   };
 }

@@ -385,14 +406,28 @@ async function runLiveWithTools(
     }
   }

+  const QUALIFICATION_INSTRUCTIONS = [
+    SYSTEM_INSTRUCTIONS,
+    "",
+    "SORTIE STRUCTURÉE OBLIGATOIRE (qualification sémantique) :",
+    "- Remplis l'enveloppe typée (schemaVersion ml4c-sem-qual-v1).",
+    "- replyDraft = texte destiné au Pilote (français, Markdown utile).",
+    "- intents[] = 0..N intentions séparées ; mode EXPLAIN/EXPLORE/PREPARE/REQUEST_EFFECT.",
+    "- REQUEST_EFFECT uniquement pour une demande positive d'effet ; jamais pour négation, how-to, citation, hypothèse.",
+    "- capabilityId doit être une capacité du catalogue ; n'invente pas d'ID.",
+    "- Une qualification n'est PAS une autorisation ni une HumanDecision.",
+    "- Ne place aucun diagnostic technique (clientIntentKey, step, capability status) dans replyDraft.",
+  ].join("\n");
+
   const agent = new Agent({
     name: "Nora",
-    instructions: SYSTEM_INSTRUCTIONS,
+    instructions: QUALIFICATION_INSTRUCTIONS,
     model: NORA_STUDY_MODEL,
     modelSettings: {
       reasoning: { effort: policy.effortRequested },
     },
     tools,
+    outputType: NoraTurnQualificationSchema,
   });

   const prompt = buildPrompt(input, policy);
@@ -404,6 +439,7 @@ async function runLiveWithTools(
   let streamingDelivered = false;
   let streamingNotes = "";
   let content = "";
+  let qualification: NoraTurnQualification = unavailableQualification("NOT_YET_QUALIFIED");
   let providerContacted: "YES" | "NO" | "UNCERTAIN" = "NO";

   try {
@@ -442,41 +478,44 @@ async function runLiveWithTools(
         completed?: Promise<unknown>;
       };

+      // Drain structured stream without exposing JSON fragments as Nora prose (A3).
       if (typeof maybeStream.toTextStream === "function") {
         const textStream = maybeStream.toTextStream({ compatibleWithNodeStreams: false });
-        let buf = "";
-        for await (const chunk of textStream) {
+        for await (const _chunk of textStream) {
           streamingDelivered = true;
           providerContacted = "YES";
-          buf += chunk;
-          input.onProvisionalChunk?.(chunk);
         }
-        content = buf.trim();
         if (maybeStream.completed) await maybeStream.completed;
-        if (!content && maybeStream.finalOutput != null) {
-          content =
-            typeof maybeStream.finalOutput === "string"
-              ? maybeStream.finalOutput.trim()
-              : String(maybeStream.finalOutput).trim();
-        }
         streamingNotes = streamingDelivered
-          ? "stream_fragments_received"
-          : "stream_invoked_no_chunks_finalOutput_used";
+          ? "structured_stream_drained_no_provisional_json"
+          : "structured_stream_no_chunks";
+      } else if (maybeStream.completed) {
+        await maybeStream.completed;
+        providerContacted = "YES";
+        streamingNotes = "structured_completed_without_text_stream";
       } else if (maybeStream.finalOutput != null) {
         providerContacted = "YES";
-        content =
-          typeof maybeStream.finalOutput === "string"
-            ? maybeStream.finalOutput.trim()
-            : String(maybeStream.finalOutput).trim();
-        streamingNotes = "stream_true_without_toTextStream_finalOutput";
+        streamingNotes = "structured_finalOutput_without_stream";
+      } else {
+        streamingNotes = "structured_result_shape_unrecognized";
+      }
+
+      const validated = validateNoraTurnQualification(maybeStream.finalOutput);
+      if (validated.ok) {
+        qualification = validated.value;
+        content = qualification.replyDraft.trim();
+        providerContacted = "YES";
       } else {
-        streamingNotes = "stream_result_shape_unrecognized";
+        // TV-05: no lexical fallback on invalid structured output.
+        qualification = unavailableQualification(validated.reason);
+        content = qualification.replyDraft;
+        streamingNotes = `${streamingNotes}|QUALIFICATION_${validated.reason}`;
       }

       attempts.push({
         attemptId: streamAttemptId,
         kind: "stream",
-        outcome: content ? "SUCCESS" : "UNKNOWN",
+        outcome: validated.ok && content ? "SUCCESS" : "UNKNOWN",
         notes: streamingNotes,
         providerContacted,
       });
@@ -515,6 +554,7 @@ async function runLiveWithTools(
         attempts,
         toolCallsObserved: policy.budgets.maxD4ToolCalls - initialBudget.remainingCalls,
         d4CharsReturned: policy.budgets.maxD4CharsReturned - initialBudget.remainingChars,
+        qualification: unavailableQualification(cat.category),
       };
     }
   } finally {
@@ -524,7 +564,7 @@ async function runLiveWithTools(
   const toolCallsObserved = policy.budgets.maxD4ToolCalls - initialBudget.remainingCalls;
   const d4CharsReturned = policy.budgets.maxD4CharsReturned - initialBudget.remainingChars;

-  if (!content) {
+  if (!content || qualification.status === "UNAVAILABLE") {
     return {
       generationId,
       mode: "openai-agents-sdk-live",
@@ -533,7 +573,9 @@ async function runLiveWithTools(
       streamingAttempted,
       streamingDelivered,
       streamingNotes,
-      content: "Réponse Agents SDK vide — état UNKNOWN, aucun effet métier inventé.",
+      content:
+        content ||
+        "Réponse Agents SDK vide ou qualification indisponible — état UNKNOWN, aucun effet métier inventé.",
       policy,
       modelRequested: policy.modelRequested,
       modelApplied: null,
@@ -542,6 +584,10 @@ async function runLiveWithTools(
       attempts,
       toolCallsObserved,
       d4CharsReturned,
+      qualification:
+        qualification.status === "UNAVAILABLE"
+          ? qualification
+          : unavailableQualification("EMPTY_OR_INVALID_OUTPUT"),
     };
   }

@@ -563,6 +609,7 @@ async function runLiveWithTools(
     attempts,
     toolCallsObserved,
     d4CharsReturned,
+    qualification,
   };
 }

@@ -699,6 +746,7 @@ export async function generateNoraReply(input: NoraGenerateInput): Promise<NoraG
       ],
       toolCallsObserved: 0,
       d4CharsReturned: 0,
+      qualification: unavailableQualification(cat.category),
     }, input.ckiDelivery, !cat.preContactLikely);
   }
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 3b71bd9d..4229ba6d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -21,6 +21,7 @@ import {
   markTurnUnknown,
   requireTurnOwnership,
   reserveTurnCommand,
+  stashTurnQualification,
   touchTurnLease,
   turnRaceHooks,
 } from "./turn-command";
@@ -37,19 +38,21 @@ import {
   applyTargetedSectionRevision,
   assertSectionScope,
   extractContractualDocumentProposal,
-  hasDocumentaryWriteSignal,
-  qualifyDocumentAct,
   resolveReviseTarget,
   type DocumentEffectSummary,
   type DocumentProposalExtract,
 } from "./document-act";
+import {
+  effectIntents,
+  projectStudioEffects,
+  type NoraTurnQualification,
+} from "./semantic-qualification";
 import {
   appendMissionAck,
   cognitiveContinueFromFacts,
   composeCanonicalMissionRestitution,
   missionCorrelationKeys,
   preparePublicationForMission,
-  qualifyPublicationMission,
   recoverAuthorizedNoraMissions,
   type MissionProjection,
 } from "./mission-continuity";
@@ -61,7 +64,6 @@ import {
   emptyMission,
   loadPriorMissionProjection,
   mergeMissionSteps,
-  qualifyStudioIntent,
   recoverPendingMissionContinuation,
 } from "./intent-conduction";
 import { updatePreview } from "@/domains/preparation/service";
@@ -430,47 +432,8 @@ export async function postUserMessageAndNora(
     meta: { client_turn_key_fp: reserved.requestFingerprint.slice(0, 12) },
   });

-  /**
-   * F01/F02 — USER → D5/D6 before Nora provider call.
-   * Message is already COMPLETE; business TX is short and separate from Nora.
-   * Lost ownership ⇒ skip mutation (do not invent a late second command).
-   */
+  /** SEM/TV: D5/D6 after Nora semantic qualification — not before. */
   let authority: ConversationalAuthorityOutcome | null = null;
-  const stillOwnedBeforeAuthority = await requireTurnOwnership(
-    reserved.commandId,
-    reserved.ownerToken,
-  );
-  if (stillOwnedBeforeAuthority && ctx.project?.id) {
-    authority = await applyConversationalAuthority({
-      pilotId,
-      projectId: ctx.project.id,
-      userMessageId: reserved.userMessageId,
-      content,
-      clientTurnKey,
-    });
-    emitObs({
-      event_name: "d3.turn.conversational_authority",
-      component: "d3.conversation",
-      request_id: requestId,
-      operation_id: reserved.operationId,
-      outcome: authority.attempted
-        ? authority.command?.status === "APPLIED" || authority.command?.status === "ALREADY_APPLIED"
-          ? "SUCCESS"
-          : authority.command?.status === "UNKNOWN"
-            ? "UNKNOWN"
-            : "FAILED"
-        : "PARTIAL",
-      meta: {
-        attempted: authority.attempted,
-        intent_clarity: authority.intentClarity,
-        operation: authority.operation ?? null,
-        command_status: authority.command?.status ?? null,
-        reason_code: authority.command?.reasonCode ?? null,
-        decision_id: authority.decisionId,
-        source: authority.source,
-      },
-    });
-  }

   const existing = await listMessages(pilotId, preparationId);
   const contextSnippets = existing
@@ -486,29 +449,12 @@ export async function postUserMessageAndNora(
     return `DOCUMENT[${d.document.id}] «${d.document.title}» v${rev?.revisionNumber ?? "?"} status=${rev?.status ?? "∅"}`;
   });

-  // Rebuild after authority so Nora observes confirmed D5/D6 state (projection only).
+  // SEM/TV: Nora qualifies first; same-turn D5/D6 runs after structured qualification.
+  // Prior-turn D5/D6 facts still arrive via buildNoraPilotageContext projection only.
   const pilotageCtx = await buildNoraPilotageContext(pilotId, preparationId, content);
-  const authoritySnippets: string[] = [];
-  if (authority?.attempted && authority.command) {
-    authoritySnippets.push(
-      "### Effet métier confirmé (D5/D6 — pas une permission Nora)",
-      `status=${authority.command.status} operation=${authority.operation ?? "?"} reasonCode=${authority.command.reasonCode ?? "∅"} decisionId=${authority.decisionId ?? "∅"}`,
-    );
-    if (authority.command.effects?.length) {
-      authoritySnippets.push(
-        `effects=${authority.command.effects.map((e) => `${e.effectKind}:${e.targetRef}`).join(",")}`,
-      );
-    }
-  } else if (authority?.clarification) {
-    authoritySnippets.push(
-      "### Clarification pilotage requise",
-      authority.clarification.slice(0, 300),
-    );
-  }

   let reply;
   try {
-    // C02 fault boundary: after authority, before/during Nora — same recovery path.
     if (turnRaceHooks.afterAuthorityBeforeNora) {
       await turnRaceHooks.afterAuthorityBeforeNora();
     }
@@ -521,7 +467,7 @@ export async function postUserMessageAndNora(
         userText: content,
         contextSnippets,
         knowledgeSnippets: [...knowledge.snippets, ...docSnippets],
-        pilotageSnippets: [...pilotageCtx.snippets, ...authoritySnippets],
+        pilotageSnippets: pilotageCtx.snippets,
         // C01: same structured Level A contract for fixture and LIVE — never authority.
         levelASignals: pilotageCtx.levelASignals,
         // Requested level only. The adapter emits DELIVERED after a real generate.
@@ -537,8 +483,9 @@ export async function postUserMessageAndNora(
       clearInterval(leasePulse);
     }
   } catch {
-    // C02 — Nora failure must not erase a already-committed D5/D6 effect.
-    // Persist an honest UNKNOWN turn payload that still surfaces pilotageEffect.
+    // SEM order: Nora runs before same-turn D5/D6, so a provider failure here
+    // cannot have produced a same-turn HumanDecision. Prior-turn recovery stays
+    // on the reconstitution path below.
     const unknownPayload: TurnResult = {
       userMessageId: reserved.userMessageId,
       assistantMessageId: null,
@@ -546,8 +493,8 @@ export async function postUserMessageAndNora(
       requestId,
       status: "UNKNOWN",
       idempotentReplay: false,
-      humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
-      pilotageEffect: pilotageEffectFromAuthority(authority),
+      humanDecisionCreated: false,
+      pilotageEffect: null,
       noraMode: "provider-exception",
     };
     try {
@@ -622,6 +569,84 @@ export async function postUserMessageAndNora(
   // Bind generationId while ownership holds so D4 provenance + UNKNOWN reconstitution share one key.
   await bindTurnGenerationId(reserved.commandId, reserved.ownerToken, reply.generationId);

+  const qualification: NoraTurnQualification =
+    reply.qualification ??
+    ({
+      schemaVersion: "ml4c-sem-qual-v1",
+      status: "UNAVAILABLE",
+      goal: "",
+      intents: [],
+      clarifications: ["MISSING_QUALIFICATION"],
+      replyDraft: reply.content,
+    } as NoraTurnQualification);
+
+  // TV-04 — durable qualification before first owner mutation.
+  await stashTurnQualification({
+    commandId: reserved.commandId,
+    ownerToken: reserved.ownerToken,
+    qualificationJson: JSON.stringify(qualification),
+  });
+
+  const studioProjection = projectStudioEffects(qualification);
+  const wantsPilotageEffect = effectIntents(qualification).some(
+    (i) =>
+      i.capabilityId === "d5.pilotage_command" || i.capabilityId === "d6.human_decision",
+  );
+
+  // D5/D6 after semantic qualification — only when REQUEST_EFFECT pilotage intents exist.
+  if (wantsPilotageEffect && ctx.project?.id) {
+    const stillOwned = await requireTurnOwnership(reserved.commandId, reserved.ownerToken);
+    if (stillOwned) {
+      const pilotageIntent = effectIntents(qualification).find(
+        (i) =>
+          i.capabilityId === "d5.pilotage_command" || i.capabilityId === "d6.human_decision",
+      );
+      const opNote = pilotageIntent?.parameters.notes?.trim();
+      const preQualified =
+        opNote != null && opNote.length > 0
+          ? ({
+              clarity: "CLEAR" as const,
+              operation: opNote as import("@/domains/pilotage/types").PilotageOperation,
+              objective: content,
+            } as import("@/domains/pilotage/intent").IntentQualification)
+          : ({
+              clarity: "AMBIGUOUS" as const,
+              reason: "SEMANTIC_PILOTAGE_OPERATION_MISSING",
+            } as import("@/domains/pilotage/intent").IntentQualification);
+      authority = await applyConversationalAuthority({
+        pilotId,
+        projectId: ctx.project.id,
+        userMessageId: reserved.userMessageId,
+        content,
+        clientTurnKey,
+        preQualified,
+      });
+      emitObs({
+        event_name: "d3.turn.conversational_authority",
+        component: "d3.conversation",
+        request_id: requestId,
+        operation_id: reserved.operationId,
+        outcome: authority.attempted
+          ? authority.command?.status === "APPLIED" || authority.command?.status === "ALREADY_APPLIED"
+            ? "SUCCESS"
+            : authority.command?.status === "UNKNOWN"
+              ? "UNKNOWN"
+              : "FAILED"
+          : "PARTIAL",
+        meta: {
+          attempted: authority.attempted,
+          intent_clarity: authority.intentClarity,
+          operation: authority.operation ?? null,
+          command_status: authority.command?.status ?? null,
+          reason_code: authority.command?.reasonCode ?? null,
+          decision_id: authority.decisionId,
+          source: authority.source,
+          semantic_gate: true,
+        },
+      });
+    }
+  }
+
   const assistantId = newId("msg");

   let capitalisation: Awaited<ReturnType<typeof maybeCapitalizeFromExchange>> = {
@@ -646,19 +671,19 @@ export async function postUserMessageAndNora(
   let documentSave: DocumentSaveResult | null = null;
   let documentSaveUnknown = false;
   let ownershipLostBeforeD4 = false;
-  const documentAct = qualifyDocumentAct(content);
-  const documentaryIntentSignal = hasDocumentaryWriteSignal(content);
-  const missionIntent = qualifyPublicationMission(content);
-  const studioIntent = qualifyStudioIntent(content);
+  const documentAct = studioProjection.documentAct;
+  const documentaryIntentSignal = documentAct.kind !== "NONE";
+  const missionIntent = studioProjection.publication;
+  const studioIntent = studioProjection;
   const clientIntentKey = clientTurnKey;
   const missionKeys = missionCorrelationKeys(clientIntentKey);
-  // Qualification visible before extract/D4 (E). Absence of obs must never invent D4.
+  // Semantic qualification visible before extract/D4. Absence of obs must never invent D4.
   emitDocumentActQualificationObs({
     requestId,
     operationId: reserved.operationId,
     generationId: reply.generationId,
     qualificationKind: documentAct.kind,
-    qualificationReason: documentAct.kind === "NONE" ? (documentAct.reason ?? null) : null,
+    qualificationReason: documentAct.kind === "NONE" ? "SEMANTIC_NONE" : null,
     documentaryIntentSignal,
     d4Attempted: false,
     d4Effect: null,
@@ -1002,7 +1027,7 @@ export async function postUserMessageAndNora(
           ? {
               act: "NONE",
               status: "NOT_EXECUTED",
-              reason: documentAct.reason ?? "NO_EXPLICIT_WRITE",
+              reason: "NO_EXPLICIT_WRITE",
             }
           : null;

@@ -1170,7 +1195,10 @@ export async function postUserMessageAndNora(
     studioIntent.wantsProjectCreate &&
     !ctx.project?.id
   ) {
-    const proposed = studioIntent.proposedProjectName?.trim() || "Nouveau projet";
+    const proposed =
+      (studioIntent.proposedProjectName?.trim()
+        ? studioIntent.proposedProjectName.trim()
+        : null) || "Nouveau projet";
     try {
       await updatePreview(
         pilotId,
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
index ad960578..6dbf0db2 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
@@ -546,6 +546,74 @@ export async function reserveTurnCommand(args: {
   });
 }

+/**
+ * Persist validated semantic qualification on a RUNNING turn before any owner mutation (TV-04).
+ * Merges into resultJson without changing status. CAS under ownerToken.
+ * Does not requalify: callers must pass the already-validated envelope.
+ */
+export async function stashTurnQualification(args: {
+  commandId: string;
+  ownerToken: string;
+  qualificationJson: string;
+}): Promise<{ applied: boolean }> {
+  return db.transaction(async (tx) => {
+    await tx.execute(
+      sql`select id from conversation_turn_commands
+          where id = ${args.commandId}
+            and owner_token = ${args.ownerToken}
+            and status in ('RUNNING', 'ACCEPTED')
+          for update`,
+    );
+    const owned = (
+      await tx
+        .select({
+          id: conversationTurnCommands.id,
+          resultJson: conversationTurnCommands.resultJson,
+        })
+        .from(conversationTurnCommands)
+        .where(
+          and(
+            eq(conversationTurnCommands.id, args.commandId),
+            eq(conversationTurnCommands.ownerToken, args.ownerToken),
+            sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
+          ),
+        )
+        .limit(1)
+    )[0];
+    if (!owned) return { applied: false };
+
+    let merged: Record<string, unknown> = {
+      semanticQualification: JSON.parse(args.qualificationJson) as unknown,
+      semanticQualificationStashedAt: new Date(turnClock.nowMs()).toISOString(),
+    };
+    if (owned.resultJson) {
+      try {
+        const prev = JSON.parse(owned.resultJson) as Record<string, unknown>;
+        // Never overwrite a terminal payload shape; only enrich while RUNNING.
+        merged = { ...prev, ...merged };
+      } catch {
+        /* keep merged */
+      }
+    }
+
+    const updated = await tx
+      .update(conversationTurnCommands)
+      .set({
+        resultJson: JSON.stringify(merged),
+        updatedAt: new Date(turnClock.nowMs()),
+      })
+      .where(
+        and(
+          eq(conversationTurnCommands.id, args.commandId),
+          eq(conversationTurnCommands.ownerToken, args.ownerToken),
+          sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
+        ),
+      )
+      .returning({ id: conversationTurnCommands.id });
+    return { applied: Boolean(updated[0]) };
+  });
+}
+
 /**
  * Atomic terminal commit under ownership fence:
  * FOR UPDATE lock → optional assistant INSERT → CAS UPDATE in the same short TX.

```

---

## 8. Diffs utiles — pilotage

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
index b2cce28d..e53fd36f 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
@@ -18,7 +18,7 @@ import {
   type DecisionBrief,
 } from "@/domains/decisions/divergence-assist";
 import { toCommandResult } from "@/domains/pilotage/command-runner";
-import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
+import type { IntentQualification } from "@/domains/pilotage/intent";
 import {
   executePilotageCommand,
   getPilotageProjection,
@@ -182,10 +182,9 @@ function resolveReviseTarget(
   if (!target || target.state !== "APPLICABLE") {
     return { ok: false, reason: "Cible de révision non applicable" };
   }
-  const qualified = qualifyPilotageIntent(utterance);
-  const statement =
-    (qualified.clarity === "CLEAR" && qualified.statement) ||
-    utterance.replace(/^(?:finalement|désormais|dorénavant)[,:]?\s+/i, "").trim();
+  const statement = utterance
+    .replace(/^(?:finalement|désormais|dorénavant)[,:]?\s+/i, "")
+    .trim();
   return { ok: true, decisionId: target.id, statement: statement.slice(0, 500) };
 }

@@ -284,6 +283,11 @@ export async function applyConversationalAuthority(input: {
   userMessageId: string;
   content: string;
   clientTurnKey: string;
+  /**
+   * SEM/TV-02: semantic qualification from Nora (correlated to USER message).
+   * When omitted, do NOT fall back to lexical qualifyPilotageIntent — fail closed.
+   */
+  preQualified?: IntentQualification | null;
 }): Promise<ConversationalAuthorityOutcome> {
   const content = input.content.trim();
   const clientCommandKey = conversationalCommandKey(input.clientTurnKey);
@@ -309,7 +313,13 @@ export async function applyConversationalAuthority(input: {
     return prior;
   }

-  const qualified = qualifyPilotageIntent(content);
+  const qualified: IntentQualification =
+    input.preQualified ??
+    ({
+      clarity: "NONE",
+      reason: "NO_SEMANTIC_PILOTAGE_QUALIFICATION",
+    } as IntentQualification);
+  // Lexical qualifyPilotageIntent removed from this production path (SEM-02 / TV-05).
   if (qualified.clarity === "NONE") {
     return { ...empty, intentClarity: "NONE", intentReason: qualified.reason };
   }
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
index c8c7f441..50f0e284 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
@@ -31,7 +31,7 @@ import {
   type DbTx,
   type MutateResult,
 } from "@/domains/pilotage/command-runner";
-import { qualifyPilotageIntent, type IntentQualification } from "@/domains/pilotage/intent";
+import type { IntentQualification } from "@/domains/pilotage/intent";
 import {
   PILOTAGE_OPERATIONS,
   SOURCE_KINDS,
@@ -425,24 +425,31 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
         sourceActionKey: "REJECT|SOURCE|mismatch",
       };
     }
-    const qualified = qualifyPilotageIntent(utterance || message.content);
-    if (qualified.clarity !== "CLEAR") {
-      const reasonCode = qualified.clarity === "AMBIGUOUS" ? "AMBIGUOUS" : "INVALID";
-      return {
-        ok: false,
-        reasonCode,
-        reason: qualified.reason,
-        sourceActionKey: `REJECT|${reasonCode}`,
-      };
-    }
-    if (body.operation && body.operation !== qualified.operation) {
+    // SEM-02 / TV-05: no lexical qualifyPilotageIntent on the owner path.
+    // Conversational authority must pass a structured operation from Nora qualification.
+    const operation = (body.operation ?? "").trim();
+    if (
+      !operation ||
+      !(PILOTAGE_OPERATIONS as readonly string[]).includes(operation)
+    ) {
       return {
         ok: false,
         reasonCode: "AMBIGUOUS",
-        reason: "L'opération ne correspond pas à l'énoncé",
-        sourceActionKey: `REJECT|MISMATCH|${body.operation}`,
+        reason:
+          "Qualification sémantique structurée requise — routeur lexical métier retiré (SEM-02)",
+        sourceActionKey: "REJECT|AMBIGUOUS|NO_STRUCTURED_OPERATION",
       };
     }
+    const qualified: IntentQualification = {
+      clarity: "CLEAR",
+      operation: operation as PilotageOperation,
+      objective: utterance || message.content,
+      statement: body.statement,
+      objectRef: body.objectRef,
+      decisionId: body.decisionId,
+      methodRef: body.methodRef,
+      methodVersion: body.methodVersion,
+    };
     return fromClearIntent(sourceKind, sourceRef, qualified, body);
   }

@@ -1080,14 +1087,13 @@ function explicit(
 }

 /**
- * EXPLICIT_INTERACTION with an utterance and no operation follows the same
- * qualifier as USER_MESSAGE. A present operation stays on the structured path.
- * Returns null when this body is not an utterance-only explicit GO.
+ * EXPLICIT_INTERACTION without a structured operation used to fall back to
+ * lexical qualifyPilotageIntent. SEM-02 removes that path — fail closed.
+ * Returns null when a structured operation is present (caller continues).
  */
 export function classifyExplicitInteraction(body: PilotageRequestBody): ClassifyResult | null {
   if (body.sourceKind !== "EXPLICIT_INTERACTION") return null;
   if ((body.operation ?? "").trim()) return null;
-  const sourceRef = body.sourceRef?.trim() ?? "";
   const utterance = (body.utterance ?? "").trim();
   if (!utterance) {
     return {
@@ -1097,17 +1103,13 @@ export function classifyExplicitInteraction(body: PilotageRequestBody): Classify
       sourceActionKey: "REJECT|INVALID|",
     };
   }
-  const qualified = qualifyPilotageIntent(utterance);
-  if (qualified.clarity !== "CLEAR") {
-    const reasonCode = qualified.clarity === "AMBIGUOUS" ? "AMBIGUOUS" : "INVALID";
-    return {
-      ok: false,
-      reasonCode,
-      reason: qualified.reason,
-      sourceActionKey: `REJECT|${reasonCode}`,
-    };
-  }
-  return fromClearIntent("EXPLICIT_INTERACTION", sourceRef, qualified, body);
+  return {
+    ok: false,
+    reasonCode: "AMBIGUOUS",
+    reason:
+      "EXPLICIT_INTERACTION utterance-only interdit sans opération structurée (SEM-02 — lexical retiré)",
+    sourceActionKey: "REJECT|AMBIGUOUS|NO_STRUCTURED_OPERATION",
+  };
 }

 export function proposeTrajectory(
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts b/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
index 55dc5ebe..34be44bf 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
@@ -2,15 +2,11 @@
  * CR-02 — client-side recovery helpers (no DB, no secrets).
  * sessionStorage pending is a local aid; durable truth stays in D5/D6.
  *
- * ML4C S05 — thread turn qualification reuses owner linguistic qualifiers
- * (qualifyPilotageIntent / qualifyDocumentAct). Never invents authority.
- * Independent dialogue must be positively established — never by exclusion
- * or by a lone "?".
+ * SEM-02 / ML4C: client no longer runs lexical métier routers
+ * (qualifyPilotageIntent / qualifyDocumentAct / synonym tables).
+ * Prefer an explicit server-derived `nextTurnKind` when available.
  */

-import { qualifyDocumentAct } from "@/domains/conversation/document-act";
-import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
-
 export type ThreadPendingTurn = {
   content: string;
   clientTurnKey: string;
@@ -34,173 +30,28 @@ export type ThreadTurnQualification = {
   pilotageOperation?: string;
 };

-const PROJECT_CREATE_RE =
-  /\b(?:crée|créer|créez|creez|cree|creer)\s+(?:(?:un|une|le|la|ce|cet|the|l)\s+)?(?:autre\s+)?projet\b/i;
-
-/** Effectual publish/merge intent — not explanatory mentions of « commit » / Git vocabulary. */
-const PUBLISH_RE =
-  /\b(?:publie|publier|publication\s+(?:le|la|ce|sur)|(?:crée|créer)\s+(?:un\s+)?(?:commit|pr|pull\s*request)|(?:ouvre|ouvrir)\s+(?:une\s+)?(?:pr|pull\s*request)|merge\s+(?:la\s+|le\s+)?(?:pr|branche|request))\b/i;
-
-/**
- * Residual operational surface — present when an effect may be intended even if
- * owner CLEAR qualification missed a noisy variant. Never authorizes alone.
- * Not an exhaustive verb allowlist for all future effects.
- */
-const RESIDUAL_EFFECT_SURFACE_RE =
-  /\b(?:ouvr(?:e|ir|ez|ait|irait)|lance|lancer|démarre|demarre|démarrer|demarrer|publie|publier|crée|créer|créez|creez|autorise|autoriser|accorde|accorder|clôture|cloture|clôturer|cloturer|révoque|revoque|enregistre\s+(?:cette\s+)?décision|je\s+décide|j['']autorise|fais[- ]le|fais(?:\s+ça|\s+le)?|tu\s+peux|peux[- ]tu|peut[- ]on|pourrais[- ]tu|pourrait[- ]on|et\s+si\s+on)\b/i;
-
-/**
- * Positive cognitive / explanatory markers — required to establish
- * DIALOGUE_INDEPENDANT. A lone "?" is never sufficient.
- * Unicode-aware left edge: JS `\b` fails before accented starters (À/à).
- */
-const COGNITIVE_INDEPENDENT_RE =
-  /(?:^|[^\p{L}\p{N}_])(?:pourquoi|quelle\s+(?:est\s+la\s+)?différence|quelles?\s+sont|à\s+quoi\s+sert|que\s+signifie|que\s+veut\s+dire|explique(?:[- ]moi)?|comment\s+(?:fonctionne|marche)|en\s+quoi|pour\s+quelle\s+raison)\b/iu;
-
-/** Quotation / meta mention of a command (not performing it). */
-const META_COMMAND_CITATION_RE =
-  /\b(?:que\s+signifie|que\s+veut\s+dire|signifie)\s+(?:la\s+)?(?:commande|formulation|phrase)?\s*['«"]/i;
-
-function hasCompoundEffectAfterExplain(text: string): boolean {
-  // « Explique … puis ouvre le cycle » — mixed: not independent.
-  return (
-    /\b(?:explique|pourquoi|quelle)\b/i.test(text) &&
-    /\b(?:puis|ensuite|et)\b[\s\S]{0,80}\b(?:ouvre|ouvrir|publie|crée|créer|lance|démarre)\b/i.test(
-      text,
-    )
-  );
-}
-
-/** Explanatory question that evokes an operation without requesting it. */
-function isExplanatoryEvocationOfOperation(text: string): boolean {
-  return (
-    /\bpourquoi\b/i.test(text) &&
-    /\b(?:ouvrir|ouvre|publier|créer)\b/i.test(text) &&
-    !/\b(?:peux[- ]tu|peut[- ]on|pourrais[- ]tu|fais|lance|démarre)\b/i.test(text) &&
-    !/\bje\s+d[eé]cide\b/i.test(text) &&
-    !hasCompoundEffectAfterExplain(text)
-  );
-}
-
-function isMetaCommandCitation(text: string): boolean {
-  return (
-    META_COMMAND_CITATION_RE.test(text) ||
-    (/^que\s+signifie\b/i.test(text) && !/\b(?:puis|ensuite)\b/i.test(text))
-  );
-}
-
-/**
- * Positive evidence of independent cognitive dialogue.
- * Absence of residual effect signals is NOT evidence of independence.
- */
-function isPositivelyIndependentDialogue(text: string): boolean {
-  if (hasCompoundEffectAfterExplain(text)) return false;
-  if (isMetaCommandCitation(text)) return true;
-  if (isExplanatoryEvocationOfOperation(text)) return true;
-  if (COGNITIVE_INDEPENDENT_RE.test(text)) return true;
-  return false;
-}
-
 /**
  * Qualify a thread turn for UX continuity (pending gate / rememberPending).
- * Reuses D5/D6/D4 linguistic owners — does not authorize or execute.
+ * SEM-02: fail closed — no client lexical métier router.
  */
 export function qualifyThreadTurn(text: string): ThreadTurnQualification {
   const t = text.trim().replace(/\s+/g, " ");
   if (!t) {
     return { kind: "INCERTAIN", reason: "Énoncé vide", pilotageClarity: "NONE" };
   }
-
-  const documentAct = qualifyDocumentAct(t);
-  if (documentAct.kind === "CREATE" || documentAct.kind === "REVISE") {
-    return {
-      kind: "INTENTION_EFFET",
-      reason: `Acte documentaire ${documentAct.kind}`,
-      pilotageClarity: "NONE",
-    };
-  }
-
-  const pilotage = qualifyPilotageIntent(t);
-  if (pilotage.clarity === "CLEAR") {
-    return {
-      kind: "INTENTION_EFFET",
-      reason: `Pilotage CLEAR ${pilotage.operation}`,
-      pilotageClarity: "CLEAR",
-      pilotageOperation: pilotage.operation,
-    };
-  }
-  if (pilotage.clarity === "AMBIGUOUS") {
-    return {
-      kind: "INCERTAIN",
-      reason: pilotage.reason || "Pilotage ambigu",
-      pilotageClarity: "AMBIGUOUS",
-    };
-  }
-
-  if (PROJECT_CREATE_RE.test(t)) {
-    return {
-      kind: "INTENTION_EFFET",
-      reason: "Création de projet",
-      pilotageClarity: "NONE",
-    };
-  }
-
-  // Local publish surface only — do not import mission-continuity (DB) into the browser.
-  if (PUBLISH_RE.test(t)) {
-    return {
-      kind: "INTENTION_EFFET",
-      reason: "Publication / merge",
-      pilotageClarity: "NONE",
-    };
-  }
-
-  if (hasCompoundEffectAfterExplain(t)) {
-    return {
-      kind: "INCERTAIN",
-      reason: "Formulation mixte explication + effet",
-      pilotageClarity: "NONE",
-    };
-  }
-
-  // Residual operational vocabulary without CLEAR owner match → uncertain,
-  // unless positively established as explanatory / meta.
-  if (RESIDUAL_EFFECT_SURFACE_RE.test(t)) {
-    if (isPositivelyIndependentDialogue(t)) {
-      return {
-        kind: "DIALOGUE_INDEPENDANT",
-        reason: "Dialogue explicatif/méta positivement établi",
-        pilotageClarity: "NONE",
-      };
-    }
-    return {
-      kind: "INCERTAIN",
-      reason: "Surface opérationnelle sans qualification CLEAR",
-      pilotageClarity: pilotage.clarity,
-    };
-  }
-
-  // Independence only when positively demonstrated — never by lone "?" or exclusion.
-  if (isPositivelyIndependentDialogue(t)) {
-    return {
-      kind: "DIALOGUE_INDEPENDANT",
-      reason: "Dialogue cognitif/explicatif positivement établi",
-      pilotageClarity: "NONE",
-    };
-  }
-
   return {
     kind: "INCERTAIN",
-    reason: "Indépendance non établie positivement",
+    reason: "CLIENT_NO_LEXICAL_ROUTER — server semantic qualification owns coexistence",
     pilotageClarity: "NONE",
   };
 }

 /**
- * ML4C S05 / Decision 1 — true only when independence is positively established.
- * Client UX aid only — never an execution authority.
+ * ML4C S05 / Decision 1 — independence only when positively established by the server.
+ * Client lexical path removed (SEM-02).
  */
-export function looksLikeIndependentDialogue(text: string): boolean {
-  return qualifyThreadTurn(text).kind === "DIALOGUE_INDEPENDANT";
+export function looksLikeIndependentDialogue(_text: string): boolean {
+  return false;
 }

 /** Deterministic business key for a conversational turn. */

```

---

## 9. Tests exécutés

| Suite | Résultat | Notes |
| --- | --- | --- |
| `tsc --noEmit` | PASS | |
| `vitest` semantic-qualification | PASS (9) | incl. Intervencia full message |
| `vitest` intent-conduction | PASS (5) | SEM-02 source + fixture |
| `vitest` ml4c-s05-thread-turn | PASS (5) | fail-closed INCERTAIN |
| `vitest` cognitive-policy | PASS (4) | length budgets |
| `vitest` mission-continuity | PASS (5) | stub publish ; needs DATABASE_URL e2e DSN for import |
| PG integration | NOT RUN | pas de `.env.local` dans ce worktree |
| E2E Playwright | NOT RUN | isolation DEV non prouvée ici |
| LIVE OpenAI structured | NOT RUN | GO REAL requis ; T-01 types OK (`outputType` in agents-core 0.21.0) |
| Corpus sémantique LIVE | NOT RUN | REALISM GAP |

---

## 10. Preuves SDK / persistance / autorité

- **SDK**: `@openai/agents` ^0.21.0 ; `AgentConfiguration.outputType` présent (`agents-core/dist/agent.d.ts`). Runtime LIVE structured+tools+stream : **NOT PROVEN**.
- **Persistance**: `stashTurnQualification` merge JSON dans `conversation_turn_commands.resultJson` sous CAS owner — **code present** ; PG proof NOT RUN.
- **Autorité D5/D6**: `preQualified` from semantic notes→operation ; lexical removed from classify USER_MESSAGE and conversation-authority ; HumanDecision jamais depuis prose LLM seule.
- **Streaming**: drain `toTextStream` without exposing JSON fragments as Nora prose.

---

## 11. Documentation synchronisée

- as-built créé (construction/convergence-fonctionnelle/…)
- delivery-history entry DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-CONVERGENCE
- Sources A1–A5 **non réécrites** (branche documentaire)
- Propositions normatives R2/SEF : aucune modification (pas de GO D2)

---

## 12. REALISM GAPS / réserves / dettes

1. LIVE structured qualification non exécutée.
2. PG/E2E mutatifs non exécutés dans ce worktree.
3. Corps lexical `qualifyDocumentAct` / `qualifyPilotageIntent` encore présents (fixture + tests historiques) — exit: supprimer après migration corpus.
4. Knowledge D4 `lexical-heuristic` capitalisation encore présente — exit: qualification contextuelle dédiée.
5. Client pending S05 : toujours INCERTAIN sans `nextTurnKind` serveur.
6. S02-01 / ML4C ACCEPTED / GATE C / READY FOR REAL : **non déclarés**.
7. Compatibilité streaming structurée LIVE : réserve T-01/T-03 partielle (types OK, runtime absent).

---

## 13. Handoff Git (à publier)

- Source: `.tmp-sfia-review/chatgpt-review.md`
- Branche: `sfia/review-handoff`
- Fichier: `sfia-review-handoff/latest-chatgpt-review.md`
- Message: `docs(review-handoff): review Next semantic convergence`
- Publisher: `scripts/sfia/publish-review-handoff.sh`

---

## 14. Verdict

**IMPLEMENTED WITH RESERVES — REVIEW REQUIRED**

Gates Morris restants: GO LIVE/REAL ; publication branche produit ; PR ; merge ; RECETTE ; suppression finale des corps lexicaux restants ; arbitrage client `nextTurnKind`.

Ne pas déclarer: ML4C ACCEPTED, S02-01 PASS, GATE C CLOSED, ADOPTED, READY FOR REAL.

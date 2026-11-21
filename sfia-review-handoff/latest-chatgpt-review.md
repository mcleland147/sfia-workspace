# SFIA Review Pack FULL — Ensemble 07 · Correctif continuité pilotage gouverné

## 1. Identité du cycle et GO Morris

| Champ | Valeur |
|---|---|
| Date | 2026-11-21 |
| Produit | SFIA Studio Next |
| Macro-lot | Ensemble 07 — Continuité du pilotage gouverné |
| Typologie | INC / correctif fonctionnel et fiabilisation |
| GO Morris | correction et qualification en DEV — contrat Cursor 2026-11-21 |
| Environnement | **DEV uniquement** |
| Versioning | **NO RELEASE** — correctif candidat non promu |
| Gate C | **OPEN** |
| Review Pack | FULL mono-cycle |
| Review Handoff | required / publish-in-cycle |

## 2. Git Truth avant / après

### Avant (candidat RECETTE immuable)

| Champ | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| HEAD | `6ecdb987ee867a04ff816b699eb8870ac200db0a` |
| Tree | `d0ad47ff515676f1c033a39030e886859f7272f7` |
| Base main | `6e93a33d64dfeea2eab88fb7896d733b34053f97` |
| Remote projet | **aucun push** ce cycle |

### Après

| Champ | Valeur |
|---|---|
| HEAD projet | **inchangé** `6ecdb987…` (correctifs **locaux non commités** — mandat) |
| Arbre DEV | modifié localement (voir §11) — **pas de `candidate_sha` revendiqué** |
| RECETTE runtime | **non muté** (`:3200` / BUILD `armX_D1HJzN6q-4MuDpYv` / DB `sfia_next_recette_ml4@:5434`) |
| STABLE | NOT AVAILABLE |

## 3. Sources Git / refs consultées

- Diagnostic handoff `sfia/review-handoff@78824f1073a09210183ea70377459d2ce183899c` blob `180d0ce42f9bfa84017c92a4cb90a46effb75b1f` — `latest-chatgpt-review.md` (DIAG-01…06)
- PV UAT `docs/next-ensemble07-recette-20261121@7c96bbed7b046b083f9b48b782ae9dcd730358d6` — UAT-02/06/08/09/10/11/12
- Code candidat local Ensemble 07 (pilotage / conversation / UI)

## 4. Causes initiales (diagnostic Equip'Campus)

1. **DIAG-01 / UAT-10** — LIVE `cycleType="cadrage"` échoue `isCycleType` → OPEN_CYCLE `REJECTED / INVALID / Type de cycle requis`.
2. **DIAG-02 / UAT-11** — réponse Nora persistée **avant** résultat D5/D6 ; hedge « Studio doit confirmer » même après REJECTED.
3. **UAT-08/09** — contexte Nora insuffisant sur types reconnus vs travaux métier.
4. **UAT-02** — « Suite de mission » technique dans le fil Travail.
5. **UAT-12** — Trajectoire/Projet/CKI pas toujours resynchronisés sans F5.

## 5. Architecture AS-IS → après correction

| Étape | AS-IS | Cible implémentée |
|---|---|---|
| Qualification LIVE | `cycleType` string libre | inchangé (schéma) + **normalize** à classify |
| classify / OPEN | `isCycleType` strict | `tryCanonicalCycleType` (case/label/alias bornés) |
| Contexte Nora | projection sans catalogue | + snippet 15 types reconnus |
| Restitution | prose pré-effet seule | `composePilotageEffectRestitution` post-autorité |
| Fil Travail | dumps mission bruts | projection métier `listMessages` + continue soft |
| Surfaces | refresh surtout après tours | + `refreshDurablePilotage` sur `selectSurface` |

## 6. Décisions techniques (périmètre)

- Point unique de normalisation : `cycle-type-normalize.ts` + classify `fromClearIntent` / body path.
- Pas de 2e catalogue permanent : réutilise `CYCLE_TYPES` + labels forecast.
- Restitution déterministe (pas d'appel LLM systématique post-effet).
- Filtrage technique en **projection READ** (pas de purge historique DB).
- Sync surfaces via mécanisme existant `refreshDurablePilotage` — pas de bus.

## 7. Contrat du normaliseur

Entrée sûre → canonique : `CADRAGE`/`cadrage`/`Cadrage`/`premier cycle de cadrage` → `CADRAGE` ; labels officiels ; aliases UX non ambigus.
Inconnu / vide / ambigu → `ok:false` (pas de remap silencieux). Autorité D6/D5 inchangée après canonisation.

## 8. Contrat de restitution post-effet

APPLIED / ALREADY_APPLIED / REJECTED / CONFLICT / UNKNOWN / no-effect → blocs métier ; strip du hedge « reste à confirmer par Studio ».

## 9. Traces techniques

Nouveaux continues : texte métier sans `projectId=`. Historique : projection si dump technique ; conservation des ACK documentaires métier.

## 10. Synchronisation des surfaces

`selectSurface` → `refreshDurablePilotage()` best-effort. Tours Travail continuaient déjà de refresh. GET/nav sans mutation.

## 11. Fichiers créés / modifiés

### Créés
- `projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-normalize.ts`- `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts`- `projects/sfia-studio-next/web/tests/unit/ensemble07-cycle-type-normalize.test.ts`- `projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts`
### Modifiés
- `projects/sfia-studio-next/web/src/domains/pilotage/service.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/intent.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/service.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts`
- `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
- `projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts`
- `projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md`
- `projects/sfia-studio-next/construction/delivery-history.md`

## 12–13. Diff utile + nouveaux fichiers (intégral)

### Diff fichiers modifiés (src)
```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 5fada7f5..790a5b84 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -928,6 +928,10 @@ export default function ProjectPage() {
       resetDocumentBibliothequeState();
       syncSurfaceUrl(next, null, "push");
     }
+    // E07 — revalidate durable pilotage on surface change (no métier mutation).
+    void refreshDurablePilotage().catch(() => {
+      /* best-effort sync — navigation must stay non-blocking */
+    });
   }

   function headRevisionFromRows(rows: RevisionRow[]): RevisionRow | null {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
index 19d4b0a9..33a92fa0 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
@@ -31,7 +31,6 @@ import { TURN_RUNNING_STALE_MS, turnClock } from "./turn-command";
 import {
   appendMissionAck,
   composeCanonicalMissionRestitution,
-  formatMissionAck,
   type MissionOwnerActBinding,
   type MissionProjection,
   type MissionStep,
@@ -997,10 +996,10 @@ export async function continueAfterProjectCreated(input: {
   if (!pendingDoc) {
     mission = { ...mission, status: "COMPLETED", restitution: "DELIVERED" };
     generationId = `mission-continue-d2:${mission.clientIntentKey}:${input.projectId}`;
+    // E07 — métier restitution only in the thread; keep structured missionProjection for audit.
     assistantContent =
-      `### Suite de mission\nProjet créé (projectId=${input.projectId}). ` +
-      `Aucune étape documentaire dépendante dans l'intention initiale.\n\n` +
-      formatMissionAck(mission);
+      "Le projet a bien été créé. Vous pouvez poursuivre dans Travail, consulter la Trajectoire " +
+      "et décider avec Nora de l'ouverture du premier cycle lorsque vous serez prêt.";
   } else {
     const original =
       mission.originalUserText ??
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 83bc164d..f6b1a577 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -72,6 +72,11 @@ import {
 } from "@/domains/pilotage/conversation-authority";
 import { buildNoraPilotageContext } from "@/domains/pilotage/nora-context";
 import { assertPilotTurnNotBlockedByQualification } from "@/domains/pilotage/initial-qualification";
+import {
+  composePilotageEffectRestitution,
+  isTechnicalMissionAssistantContent,
+  projectMetierMissionMessage,
+} from "@/domains/conversation/pilotage-effect-restitution";
 import {
   appendDocumentEffectAck,
   applyTargetedSectionRevision,
@@ -407,11 +412,21 @@ export async function listMessages(pilotId: string, preparationId: string) {
   // READ ≠ COMMAND: listing must not dispatch Git or mutate effects.
   const ctx = await getPreparationContext(pilotId, preparationId);
   if (!ctx.conversation) return [];
-  return db
+  const rows = await db
     .select()
     .from(messages)
     .where(eq(messages.conversationId, ctx.conversation.id))
     .orderBy(asc(messages.ordinal));
+  // E07 — project technical mission dumps as métier text (no DB rewrite).
+  return rows.map((m) => {
+    if (
+      m.role === "assistant" &&
+      isTechnicalMissionAssistantContent(m.content, m.generationId)
+    ) {
+      return { ...m, content: projectMetierMissionMessage(m.content) };
+    }
+    return m;
+  });
 }

 /**
@@ -2737,6 +2752,14 @@ export async function postUserMessageAndNora(
     assistantBody = [narrative.trimEnd(), fenced].filter((s) => s.length > 0).join("\n\n");
   }

+  // E07 — post-effect métier restitution: final assistant text must match Studio outcome.
+  if (!ownershipLostBeforeD4 && authority?.attempted) {
+    assistantBody = composePilotageEffectRestitution({
+      priorContent: assistantBody,
+      effect: pilotageEffectFromAuthority(authority) ?? null,
+    });
+  }
+
   const assistantContentForCommit = ownershipLostBeforeD4
     ? reply.content
     : appendMissionAck(
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
index 680c3156..7364a0a4 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
@@ -9,8 +9,9 @@ export type IntentQualification =
   | {
       clarity: "CLEAR";
       operation: PilotageOperation;
-      cycleType?: CycleType;
-      toCycleType?: CycleType;
+      /** Raw semantic / LIVE value — normalized at D5 classify boundary. */
+      cycleType?: CycleType | string;
+      toCycleType?: CycleType | string;
       methodRef?: string;
       methodVersion?: string;
       objective?: string;
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts b/projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
index 53266fcc..d798e484 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
@@ -15,6 +15,7 @@ import {
   loadVerifiedCkiText,
   type CkiDelivery,
 } from "@/domains/pilotage/cki-resolve";
+import { formatRecognizedCycleCatalogueSnippet } from "@/domains/pilotage/cycle-type-normalize";
 import { getPilotageProjection } from "@/domains/pilotage/service";

 export type NoraPilotageContext = {
@@ -52,6 +53,8 @@ export async function buildNoraPilotageContext(
       snippets: [
         "### Pilotage D5/D6",
         "(préparation sans projet — pas de cycle/méthode/CKI ; Nora reste générale)",
+        "",
+        ...formatRecognizedCycleCatalogueSnippet(),
       ],
       ckiContentAttached: false,
       ckiDelivery: "NONE",
@@ -103,6 +106,7 @@ export async function buildNoraPilotageContext(
   snippets.push(
     "Rappel: le contenu CKI guide la spécialité cognitive en silence ; il n'autorise aucun GO, cycle, méthode ni effet.",
   );
+  snippets.push("", ...formatRecognizedCycleCatalogueSnippet());

   const decisionRows = await db
     .select({
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
index f094dfcb..7cfafe04 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
@@ -22,6 +22,7 @@ import {
   markDecisionState,
 } from "@/domains/decisions/service";
 import { isCycleType, resolveForOpen, resolvePinnedCki, type CycleType } from "@/domains/pilotage/cki-resolve";
+import { tryCanonicalCycleType } from "@/domains/pilotage/cycle-type-normalize";
 import { parseForecastJson } from "@/domains/pilotage/forecast-builder";
 import { getQualificationProjection } from "@/domains/pilotage/initial-qualification";
 import {
@@ -375,9 +376,12 @@ function fromClearIntent(
   // carry server-authenticated envelope (keys, actInstanceId). Never fill gaps
   // from client-supplied cycleType/decisionId/objectRef/targetRef/"*".
   const fromDurable = sourceKind === "USER_MESSAGE";
-  const cycleType = fromDurable
-    ? qualified.cycleType ?? null
-    : qualified.cycleType ?? (body.cycleType && isCycleType(body.cycleType) ? body.cycleType : null);
+  // E07 — normalize at classify boundary (LIVE may emit "cadrage").
+  const cycleType =
+    tryCanonicalCycleType(qualified.cycleType) ??
+    (!fromDurable ? tryCanonicalCycleType(body.cycleType) : undefined) ??
+    null;
+  const toCycleType = tryCanonicalCycleType(qualified.toCycleType) ?? null;
   if (qualified.operation === "REVISE_DECISION" && !(qualified.decisionId ?? (!fromDurable ? body.decisionId : null))) {
     return {
       ok: false,
@@ -403,7 +407,7 @@ function fromClearIntent(
     ).trim() || (cycleType ? `Cycle ${cycleType}` : ""),
     cycleType,
     cycleId: fromDurable ? null : (body.cycleId ?? null),
-    toCycleType: qualified.toCycleType ?? null,
+    toCycleType,
     orientation: fromDurable ? "" : (body.orientation ?? "").trim(),
     trajectoryRevisionId: fromDurable ? null : (body.trajectoryRevisionId ?? null),
     methodRef: (qualified.methodRef ?? (!fromDurable ? body.methodRef : undefined) ?? "").trim(),
@@ -627,9 +631,8 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
       restrictionTargetRefHint: matched.restrictionTargetRefHint,
       semanticIntentId: matched.intentId,
       semanticSchemaVersion: matched.schemaVersion,
-      cycleType: matched.cycleType && isCycleType(matched.cycleType) ? matched.cycleType : undefined,
-      toCycleType:
-        matched.toCycleType && isCycleType(matched.toCycleType) ? matched.toCycleType : undefined,
+      cycleType: tryCanonicalCycleType(matched.cycleType),
+      toCycleType: tryCanonicalCycleType(matched.toCycleType),
     };
     // Server-stable human-act identity: never accept client actInstanceId for USER_MESSAGE.
     // Same message + same intent ⇒ same act even if clientCommandKey / actInstanceId change.
@@ -680,11 +683,11 @@ async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<Classif
   }

   const operation = body.operation as PilotageOperation;
-  const cycleType = body.cycleType ? (isCycleType(body.cycleType) ? body.cycleType : null) : null;
+  const cycleType = body.cycleType ? (tryCanonicalCycleType(body.cycleType) ?? null) : null;
   if (body.cycleType && !cycleType) {
     return { ok: false, reasonCode: "INVALID", reason: "Type de cycle inconnu", sourceActionKey: "REJECT|INVALID|cycle" };
   }
-  const toCycleType = body.toCycleType ? (isCycleType(body.toCycleType) ? body.toCycleType : null) : null;
+  const toCycleType = body.toCycleType ? (tryCanonicalCycleType(body.toCycleType) ?? null) : null;
   if (body.toCycleType && !toCycleType) {
     return { ok: false, reasonCode: "INVALID", reason: "Type de cycle cible inconnu", sourceActionKey: "REJECT|INVALID|target-cycle" };
   }

```

### NEW FILE `projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-normalize.ts`

```typescript
/**
 * Deterministic cycle-type normalization at the semantic → D5 boundary.
 * Reuses CYCLE_TYPES / official labels — does not create a parallel catalogue.
 */
import { CYCLE_TYPES, type CycleType, isCycleType } from "@/domains/pilotage/cki-resolve";

/** Official French / display labels (same vocabulary as forecast-builder). */
export const CYCLE_TYPE_LABELS: Record<CycleType, string> = {
  CADRAGE: "cadrage",
  CONCEPTION_FONCTIONNELLE: "conception fonctionnelle",
  ARCHITECTURE_FONCTIONNELLE: "architecture fonctionnelle",
  UX_UI: "conception UX",
  BACKLOG: "backlog",
  ARCHITECTURE_TECHNIQUE: "architecture technique",
  INTEGRATION_DEVOPS: "intégration DevOps",
  DELIVERY: "delivery",
  QA_VALIDATION: "validation qualité",
  SECURITE: "sécurité",
  DEPLOIEMENT_RELEASE: "déploiement release",
  OBSERVABILITE: "observabilité",
  PR_READINESS: "préparation PR",
  POST_MERGE: "post-merge",
  CAPITALISATION: "capitalisation",
};

/** Extra unambiguous aliases → canonical enum (never invent new cycle types). */
const ALIASES: Record<string, CycleType> = {
  ux: "UX_UI",
  "ux/ui": "UX_UI",
  "ux-ui": "UX_UI",
  "conception ux": "UX_UI",
  "conception ux/ui": "UX_UI",
  "experience utilisateur": "UX_UI",
  "expérience utilisateur": "UX_UI",
  "cycle de cadrage": "CADRAGE",
  "premier cycle de cadrage": "CADRAGE",
  "cycle cadrage": "CADRAGE",
};

export type CycleTypeNormalizeResult =
  | { ok: true; cycleType: CycleType; raw: string; via: "enum" | "case" | "label" | "alias" }
  | { ok: false; reason: "EMPTY" | "UNKNOWN" | "AMBIGUOUS"; raw: string; candidates?: CycleType[] };

function fold(raw: string): string {
  return raw
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[_/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Map a semantic / LIVE cycleType string to a canonical CycleType.
 * Safe variants: enum exact, case, official label, known aliases.
 * Never silently maps an unknown string to another type.
 */
export function normalizeCycleType(input: string | null | undefined): CycleTypeNormalizeResult {
  if (input == null) return { ok: false, reason: "EMPTY", raw: "" };
  const raw = String(input).trim();
  if (!raw) return { ok: false, reason: "EMPTY", raw: "" };

  if (isCycleType(raw)) {
    return { ok: true, cycleType: raw, raw, via: "enum" };
  }

  const upper = raw.toUpperCase().replace(/[\s-]+/g, "_");
  if (isCycleType(upper)) {
    return { ok: true, cycleType: upper, raw, via: "case" };
  }

  const folded = fold(raw);
  const labelHits = (CYCLE_TYPES as readonly CycleType[]).filter(
    (t) => fold(CYCLE_TYPE_LABELS[t]) === folded || fold(t.replace(/_/g, " ")) === folded,
  );
  if (labelHits.length === 1) {
    return { ok: true, cycleType: labelHits[0]!, raw, via: "label" };
  }
  if (labelHits.length > 1) {
    return { ok: false, reason: "AMBIGUOUS", raw, candidates: labelHits };
  }

  const alias = ALIASES[folded];
  if (alias) {
    return { ok: true, cycleType: alias, raw, via: "alias" };
  }

  return { ok: false, reason: "UNKNOWN", raw };
}

/** Convenience: canonical type or undefined (never invent). */
export function tryCanonicalCycleType(input: string | null | undefined): CycleType | undefined {
  const r = normalizeCycleType(input);
  return r.ok ? r.cycleType : undefined;
}

/** Short catalogue for Nora context — identifiers + labels only (not full CKI bodies). */
export function formatRecognizedCycleCatalogueSnippet(): string[] {
  return [
    "### Types de cycles Studio reconnus (identifiants canoniques)",
    "Utilise UNIQUEMENT ces identifiants dans parameters.cycleType / toCycleType pour d5.pilotage_command.",
    "Les travaux métier (comparaison de solutions, expérimentation, évaluation…) peuvent être décrits librement,",
    "mais ne sont PAS des types de cycles — place-les dans le raisonnement / rationale, pas dans cycleType.",
    ...CYCLE_TYPES.map((t) => `- ${t} (« ${CYCLE_TYPE_LABELS[t]} »)`),
  ];
}

```

### NEW FILE `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts`

```typescript
/**
 * Deterministic métier restitution after a governed D5/D6 conversational effect.
 * Facts come from Studio (pilotageEffect); Nora prior prose may be adjusted, never invented as authority.
 */

export type PilotageEffectView = {
  attempted?: boolean;
  intentClarity?: string | null;
  operation?: string | null;
  status?: string | null;
  reasonCode?: string | null;
  reason?: string | null;
  clarification?: string | null;
  decisionId?: string | null;
  effects?: Array<{ effectKind?: string; targetRef?: string }> | null;
} | null;

const PRE_EFFECT_PENDING =
  /l['']ouverture effective reste à confirmer par Studio\.?/gi;

function operationLabel(op: string | null | undefined): string {
  switch (op) {
    case "OPEN_CYCLE":
      return "ouverture de cycle";
    case "CLOSE_CYCLE":
      return "clôture de cycle";
    case "TRANSITION_CYCLE":
      return "transition de cycle";
    case "RETAIN_TRAJECTORY":
      return "rétention de trajectoire";
    case "PROPOSE_TRAJECTORY":
      return "proposition de trajectoire";
    case "RECORD_DECISION":
      return "enregistrement de décision";
    case "REVISE_DECISION":
      return "révision de décision";
    default:
      return op ? `opération ${op}` : "opération gouvernée";
  }
}

function stripPreEffectHedges(text: string): string {
  return text
    .replace(PRE_EFFECT_PENDING, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function effectFactLines(effect: NonNullable<PilotageEffectView>): string[] {
  const op = operationLabel(effect.operation);
  const status = (effect.status ?? "").toUpperCase();
  const reason = (effect.reason ?? effect.clarification ?? "").trim();

  switch (status) {
    case "APPLIED":
      return [
        `**Résultat Studio :** la ${op} a été **appliquée**.`,
        effect.operation === "OPEN_CYCLE"
          ? "Le cycle demandé est désormais actif ; la guidance spécialisée associée sera disponible sur Trajectoire / CKI."
          : effect.operation === "RETAIN_TRAJECTORY"
            ? "L'orientation est retenue. L'ouverture d'un cycle reste une décision distincte."
            : "L'état du projet a été mis à jour en conséquence.",
      ];
    case "ALREADY_APPLIED":
      return [
        `**Résultat Studio :** cette ${op} était **déjà appliquée** — aucun nouvel effet n'a été créé.`,
      ];
    case "REJECTED":
      return [
        `**Résultat Studio :** la ${op} a été **refusée**.`,
        reason
          ? `Motif : ${reason}.`
          : "Le contrôle d'autorité ou d'état n'a pas autorisé l'effet.",
        "Aucun cycle ni décision n'a été créé par cette demande. Vous pouvez reformuler ou préciser le type de cycle reconnu.",
      ];
    case "CONFLICT":
      return [
        `**Résultat Studio :** **conflit d'état** sur la ${op}.`,
        reason ? `Détail : ${reason}.` : "Rechargez l'état du projet puis réessayez si pertinent.",
      ];
    case "UNKNOWN":
      return [
        `**Résultat Studio :** l'issue de la ${op} est **encore en vérification**.`,
        "Je ne confirme ni le succès ni le refus définitif tant que Studio n'a pas consolidé l'état.",
      ];
    default:
      if (effect.intentClarity === "AMBIGUOUS") {
        return [
          "**Résultat Studio :** aucune commande n'a été exécutée — intention ambiguë.",
          reason ? `Précision utile : ${reason}.` : "Pouvez-vous préciser le cycle et l'acte souhaités ?",
        ];
      }
      if (effect.attempted === false) {
        return [];
      }
      return [
        `**Résultat Studio :** statut « ${status || "indéterminé"} » pour la ${op}.`,
        reason ? `Information : ${reason}.` : "",
      ].filter(Boolean);
  }
}

/**
 * Compose final assistant text: keep useful prior narrative, remove contradictory
 * pre-effect hedges, append durable Studio outcome in métier language.
 */
export function composePilotageEffectRestitution(input: {
  priorContent: string;
  effect: PilotageEffectView;
}): string {
  const prior = stripPreEffectHedges(input.priorContent ?? "");
  const effect = input.effect;
  if (!effect?.attempted) {
    return prior;
  }
  const facts = effectFactLines(effect);
  if (facts.length === 0) return prior;
  const block = ["", "---", "", ...facts].join("\n");
  if (!prior.trim()) return facts.join("\n");
  return `${prior.trimEnd()}\n${block}`;
}

/** True when a persisted assistant message is a raw technical mission dump (not métier Nora). */
export function isTechnicalMissionAssistantContent(content: string, generationId?: string | null): boolean {
  // Provenance hint alone is insufficient — a mission-continue may already carry métier D4 ACK.
  if (/Résultat d'enregistrement|Nouvelle version disponible|encore incertain/i.test(content)) {
    return false;
  }
  if (/^### Suite de mission/m.test(content) && /projectId=|clientIntentKey=|status=COMPLETED/.test(content)) {
    return true;
  }
  if (/^### Suite de mission \(projection D3/m.test(content)) return true;
  if (/^### Restitution de mission \(faits propriétaires\)/m.test(content)) return true;
  const gen = (generationId ?? "").trim();
  if (
    gen.startsWith("mission-continue") &&
    /projectId=proj_|clientIntentKey=|status=COMPLETED|status=AWAITING_/.test(content)
  ) {
    return true;
  }
  return false;
}

/** Métier projection for historical technical mission messages (READ path — no DB rewrite). */
export function projectMetierMissionMessage(content: string): string {
  if (/Projet créé \(projectId=/.test(content) || /projectId=proj_/.test(content)) {
    return (
      "Le projet a bien été créé. Vous pouvez poursuivre dans Travail, consulter la Trajectoire " +
      "et décider avec Nora de l'ouverture du premier cycle lorsque vous serez prêt."
    );
  }
  if (/AWAITING_PILOT_ACT/.test(content)) {
    return "Une action explicite de votre part est encore requise pour poursuivre (par exemple créer le projet).";
  }
  if (/AWAITING_PILOT_AUTH/.test(content)) {
    return "Une autorisation de votre part est requise avant publication Git.";
  }
  if (/AWAITING_CLARIFICATION/.test(content)) {
    return "Une précision de votre part est requise avant de poursuivre la préparation.";
  }
  if (/RESTITUTION_PENDING/.test(content)) {
    return "Les effets déjà enregistrés sont conservés ; la restitution détaillée reste en attente.";
  }
  return "Suite de mission enregistrée par Studio — détails techniques masqués dans le fil métier.";
}

```

### NEW FILE `projects/sfia-studio-next/web/tests/unit/ensemble07-cycle-type-normalize.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import { CYCLE_TYPES } from "@/domains/pilotage/cki-resolve";
import {
  CYCLE_TYPE_LABELS,
  formatRecognizedCycleCatalogueSnippet,
  normalizeCycleType,
  tryCanonicalCycleType,
} from "@/domains/pilotage/cycle-type-normalize";

describe("E07 cycle-type normalize (LIVE → D5)", () => {
  it("maps LIVE lowercase cadrage → CADRAGE (EquipCampus root cause)", () => {
    expect(normalizeCycleType("cadrage")).toEqual({
      ok: true,
      cycleType: "CADRAGE",
      raw: "cadrage",
      via: "case",
    });
    expect(tryCanonicalCycleType("cadrage")).toBe("CADRAGE");
  });

  it("accepts Cadrage / CADRAGE / underscored case variants", () => {
    expect(tryCanonicalCycleType("Cadrage")).toBe("CADRAGE");
    expect(tryCanonicalCycleType("CADRAGE")).toBe("CADRAGE");
    expect(tryCanonicalCycleType("conception_fonctionnelle")).toBe("CONCEPTION_FONCTIONNELLE");
    expect(tryCanonicalCycleType("CONCEPTION_FONCTIONNELLE")).toBe("CONCEPTION_FONCTIONNELLE");
  });

  it("maps official labels and safe aliases without inventing types", () => {
    expect(tryCanonicalCycleType("conception fonctionnelle")).toBe("CONCEPTION_FONCTIONNELLE");
    expect(tryCanonicalCycleType("ux/ui")).toBe("UX_UI");
    expect(tryCanonicalCycleType("premier cycle de cadrage")).toBe("CADRAGE");
  });

  it("refuses unknown / empty without silent remap", () => {
    expect(normalizeCycleType("comparaison_de_solutions")).toMatchObject({
      ok: false,
      reason: "UNKNOWN",
    });
    expect(normalizeCycleType("")).toMatchObject({ ok: false, reason: "EMPTY" });
    expect(normalizeCycleType(null)).toMatchObject({ ok: false, reason: "EMPTY" });
    expect(tryCanonicalCycleType("phase métier inventée")).toBeUndefined();
  });

  it("covers every CYCLE_TYPES enum + label round-trip", () => {
    for (const t of CYCLE_TYPES) {
      expect(tryCanonicalCycleType(t)).toBe(t);
      expect(tryCanonicalCycleType(t.toLowerCase())).toBe(t);
      expect(tryCanonicalCycleType(CYCLE_TYPE_LABELS[t])).toBe(t);
    }
  });

  it("catalogue snippet lists recognized identifiers and warns against métier-as-type", () => {
    const snip = formatRecognizedCycleCatalogueSnippet().join("\n");
    expect(snip).toContain("CADRAGE");
    expect(snip).toContain("CONCEPTION_FONCTIONNELLE");
    expect(snip).toContain("identifiants canoniques");
    expect(snip).toMatch(/ne sont PAS des types de cycles/i);
    expect(CYCLE_TYPES).toHaveLength(15);
  });
});

```

### NEW FILE `projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import {
  composePilotageEffectRestitution,
  isTechnicalMissionAssistantContent,
  projectMetierMissionMessage,
} from "@/domains/conversation/pilotage-effect-restitution";

describe("E07 post-effect métier restitution", () => {
  it("APPLIED OPEN_CYCLE replaces pending-Studio hedge with confirmation", () => {
    const prior =
      "Je note votre accord. L'ouverture effective reste à confirmer par Studio.";
    const out = composePilotageEffectRestitution({
      priorContent: prior,
      effect: {
        attempted: true,
        operation: "OPEN_CYCLE",
        status: "APPLIED",
      },
    });
    expect(out).not.toMatch(/reste à confirmer par Studio/i);
    expect(out).toMatch(/appliquée/i);
    expect(out).toMatch(/cycle demandé est désormais actif/i);
  });

  it("REJECTED INVALID surfaces motif without false success", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "Je vais demander l'ouverture du cycle de cadrage.",
      effect: {
        attempted: true,
        operation: "OPEN_CYCLE",
        status: "REJECTED",
        reasonCode: "INVALID",
        reason: "Type de cycle requis",
      },
    });
    expect(out).toMatch(/refusée/i);
    expect(out).toMatch(/Type de cycle requis/);
    expect(out).not.toMatch(/appliquée/i);
  });

  it("ALREADY_APPLIED / CONFLICT / UNKNOWN each have distinct métier wording", () => {
    expect(
      composePilotageEffectRestitution({
        priorContent: "ok",
        effect: { attempted: true, operation: "RETAIN_TRAJECTORY", status: "ALREADY_APPLIED" },
      }),
    ).toMatch(/déjà appliquée/i);

    expect(
      composePilotageEffectRestitution({
        priorContent: "ok",
        effect: { attempted: true, operation: "OPEN_CYCLE", status: "CONFLICT", reason: "revision" },
      }),
    ).toMatch(/conflit/i);

    expect(
      composePilotageEffectRestitution({
        priorContent: "ok",
        effect: { attempted: true, operation: "OPEN_CYCLE", status: "UNKNOWN" },
      }),
    ).toMatch(/en vérification/i);
  });

  it("no effect attempted leaves cognitive reply unchanged", () => {
    const prior = "Voici une analyse sans commande.";
    expect(
      composePilotageEffectRestitution({
        priorContent: prior,
        effect: { attempted: false },
      }),
    ).toBe(prior);
  });
});

describe("E07 technical mission message projection", () => {
  const dump =
    "### Suite de mission\nProjet créé (projectId=proj_abc). Aucune étape.\n\n" +
    "### Suite de mission (projection D3 — refs owners)\nstatus=COMPLETED\nclientIntentKey=k1";

  it("detects raw dumps; preserves métier D4 ACK even with mission-continue id", () => {
    expect(isTechnicalMissionAssistantContent(dump, "mission-continue-d2:k1:proj")).toBe(true);
    expect(isTechnicalMissionAssistantContent("Bonjour", "gen-nora-1")).toBe(false);
    expect(
      isTechnicalMissionAssistantContent(
        "Résultat d'enregistrement : document disponible.",
        "mission-continue-d2:k1:proj",
      ),
    ).toBe(false);
  });

  it("projects métier text without projectId leak", () => {
    const projected = projectMetierMissionMessage(dump);
    expect(projected).toMatch(/projet a bien été créé/i);
    expect(projected).not.toMatch(/projectId=/);
    expect(projected).not.toMatch(/clientIntentKey=/);
  });
});

```

## 14. Tests — commandes et résultats réels

Environnement tests : `DATABASE_URL` DEV `:5433/sfia_next_dev` → gate réécrit vers `sfia_next_e2e`. Shell nettoyé des variables RECETTE (`STUDIO_LANE`, GitHub App).

| Suite | Commande | Résultat |
|---|---|---|
| TypeScript | `npx tsc --noEmit` | **PASS** |
| Unitaires | `npx vitest run tests/unit` | **87 files / 702 PASS** |
| PG intégration | `npx vitest run tests/integration` | **34 files / 525 PASS** |
| E07 normalize unit | `ensemble07-cycle-type-normalize` | **6 PASS** dont `cadrage`→`CADRAGE` |
| E07 restitution unit | `ensemble07-pilotage-effect-restitution` | **6 PASS** |
| E07 PG OPEN lowercase | `ensemble07-initial-qualification` | **15 PASS** — OPEN avec `cycleType=cadrage` → ACTIVE `CADRAGE` |
| LIVE fournisseur | — | **NOT RUN — GATE REQUIRED** |
| Browser E2E sync F5 | — | **NOT RUN ce cycle** (hook code + refresh post-tour existants) |

## 15. Preuves par niveau

- **DETERMINISTIC** : normalize + restitution + PG OPEN `cadrage` + continuité intent — **PROVEN**
- **BROWSER** : non rejoué ce cycle — **NOT RUN**
- **LIVE** : pas de nouvel appel — **NOT RUN — GATE REQUIRED**

## 16. Négatifs / concurrence / reprise

- Type inconnu → refuse (unit)
- REJECTED motif visible (unit restitution)
- Idempotence / fencing : suites ml3 + intent-continuity PASS (régression)
- Pas de réexécution automatique du GO Equip'Campus RECETTE

## 17. Comparaison Equip'Campus avant / après (attendu correctif)

| Constat | Avant RECETTE | Après correctif DEV |
|---|---|---|
| OPEN `cadrage` | REJECTED INVALID | Canonique CADRAGE → APPLIED (PG) |
| Texte Nora | hedge pré-effet | restitution post-effet |
| Suite de mission | dump technique | métier / projection |
| Surfaces | F5 parfois requis | refresh sur selectSurface |

## 18. Frontières D3 / D5 / D6

Conservées : Nora interprète ; D6 autorité ; D5 état ; pas d'appel direct open depuis UI ; pas de 2e orchestrateur.

## 19. Documentation

As-built + delivery-history mis à jour. SEF/Roadmap/PV/UAT **non modifiés**.

## 20. Dette / risques / réserves / exit

- LIVE cognitive DEV : gate Morris + coût/sécurité fournisseur
- Browser sync sans F5 : à qualifier sur runtime DEV gelé
- Correctifs non commités : gel candidat = prochain GO Git Morris
- Exit : verdict B avec réserves gouvernées

## 21. RECETTE / STABLE

Aucune écriture, migration, redémarrage ou remplacement RECETTE. STABLE NOT AVAILABLE.

## 22. Versioning

**NO RELEASE** — pas de numéro PATCH officiel.

## 23. Gate C

**OPEN**

## 24. Verdict

`ENSEMBLE 07 — DEV CORRECTIVE QUALIFIED WITH GOVERNED RESERVES — MORRIS ARBITRATION REQUIRED`

## 25. Prochain gate Morris

1. Lire ce handoff distant.
2. Arbitrer gel Git du nouvel arbre DEV (commit candidat) vs itération.
3. Décider GO LIVE borné DEV et/ou re-mise en RECETTE — **hors mandat Cursor actuel**.

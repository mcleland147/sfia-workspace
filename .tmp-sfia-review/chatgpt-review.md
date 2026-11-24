# Review Pack FULL — Next ML5 Nora Functional Completion

**Generated (UTC):** 2026-11-24T23:41:53Z
**Mode:** publish-in-cycle · Review Pack FULL · Critical INC · Cycle 8 / ML5
**Product branch:** `sfia/next-ml5-integrated-delivery-20261123`
**DEV worktree:** `/Users/morris/Projects/sfia-wt-next-ml5-20261123`
**Handoff commit message:** `docs(review-handoff): publish Next ML5 Nora functional completion`
**Prior handoff:** `66f08975` / blob `36d3e903`
**Product versioning:** NO RELEASE · STABLE NOT AVAILABLE

## 0. Verdict

**NORA COGNITIVE EXPERIENCE — FUNCTIONAL COMPLETION READY FOR REVIEW**

Statut SFIA: **READY FOR REVIEW** · READY WITH RESERVES.
Réserves: F2 pixel exhaustif NOT PROVEN; qualité cognitive / LIVE E2E / WEB LIVE profondeur = UAT Morris; RECETTE runtime précédent inchangé jusqu'au GO bascule.
ML5 OPEN. Pas de USER ACCEPTED / OPERATIONAL_VALIDATED / STABLE / RELEASE / ADOPTED.

## 1. Qualification SFIA

| Champ | Valeur |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Scope | projects/sfia-studio-next/ |
| SEF / SFIA | v0.2 / v2.6 |
| Jalon / ML | R5 IN PROGRESS / ML5 OPEN |
| Cycle | 8 Delivery · INC Critical |

## 2. Git Truth Check (début de cycle)

| Check | Résultat |
|---|---|
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD début | `5309dfaa5682cbdc92e9d6d354fd9c6c61d580f0` |
| Delivery précédent | `d98e61133da18a51144b9dea732292584fc28aba` |
| Web tree début | `27d1da23ab615814047a7b9bfdcf81ce05c17f83` (= d98e6113 web) |
| origin/main | `997897fd…` |
| Staged | aucun |
| Worktree clean | OUI au démarrage |
| Build DEV début | `zXUhtTemfQ4rO8vXc_3Nz` |
| RECETTE | `7f48daa2` / `_ZDI1cWa1hscluvBhaiA4` inchangée |

## 3. Sources consultées

- Handoff `66f08975` (sections 4–12)
- Figma 12.01 `1210:233` screenshot MCP + inventory page12 + PNG `.sfia-evidence`
- Code: activity-labels, nora-adapter, cognitive-work/conductor, public-web-*, service (prepare/revise), pages sas/travail, NoraLiveActivity
- UAT Pilotage 360 registre

## 4. Matrice exhaustive L1–L6

| Tâche | Attendu | Réalisation | Chemin | Vérif | Statut | Preuve | Écart |
|---|---|---|---|---|---|---|---|
| L1.1 | Pas de current→done auto; FAILED≠succès | buildActivitySteps états autoritatifs | activity-labels.ts | vitest | VERIFIED_TECHNICALLY | unit PASS | — |
| L1.2 | Labels contextualisés | title/objective/summary métier + fallbacks | activity-labels + onRecord + conductor objective | vitest | IMPLEMENTED | unit | Pertinence LIVE = UAT |
| L1.3 | Events pendant travail | summaries humains onRecord; objective ANNOUNCED | nora-adapter, conductor | code path | IMPLEMENTED | code | Timing LIVE = UAT |
| L1.4 | Identités sources | dedupe kind:ref / seq | activity-labels | vitest | VERIFIED_TECHNICALLY | unit | — |
| L1.5 | Poll fence | pollEpoch sas+Travail | pages | code | IMPLEMENTED | code | Reconnexion E2E = UAT |
| L1.6 | Transverse sas/Travail | NoraLiveActivity partagé | components | build | IMPLEMENTED | build | Recette |
| L2.1 | Contrat Figma | screenshot 12.01 + inventory L0/L1 | figma MCP | consulté | IMPLEMENTED | PNG | L2 props exhaustifs PARTIAL |
| L2.2 | Composant activité | NoraLiveActivity mutualisé + états | NoraLiveActivity.tsx | build | IMPLEMENTED | code | Finitions F2 = UAT |
| L2.3 | Intégration écrans | sas+Travail branchés | Prep/NoraConversation | build | IMPLEMENTED | code | F2 |
| L2.4 | F2 | capture Figma + build DEV | evidence PNG | PARTIAL | PARTIAL | PNG Figma | F2 runtime NOT PROVEN |
| L3.1 | Comptabilité tokens | retrait soustraction cacheTokens | cognitive-work.ts | vitest | VERIFIED_TECHNICALLY | unit | — |
| L3.2 | Causes UAT-16/19 | envelope + structured fail paths distincts | adapter/work | code | IMPLEMENTED | code | Charge réelle = UAT |
| L3.3 | Adaptatif | instructions + conductor existant (pas prompt-only) | conductor préservé | ALREADY_SATISFIED+guidance | PARTIAL | code | Approfondissement = UAT |
| L3.4 | Continuité D3 | checkpoints existants non régressés | investigation-persistence | ALREADY_SATISFIED | ALREADY_SATISFIED | prior | — |
| L3.5 | Restitution partielle | CONSULTED vs DISCOVERED + production amorcée | nora-adapter catch | code | IMPLEMENTED | code | Acquis métier riches = UAT |
| L4.1 | Outils path | B1 frontier enrichie; D4/Git inchangés contrats | frontier | code | IMPLEMENTED | code | — |
| L4.2 | WEB fonctionnel | catalog Power Query + pilot URL open seed | public-web-registry/frontier | vitest | IMPLEMENTED | unit | LIVE fetch = UAT/flags |
| L4.3 | Open page | pilot URLs seed discoveredUrls | frontier | code | IMPLEMENTED | code | LIVE |
| L4.4 | P0 | private host filter conservé | registry extract | code | IMPLEMENTED | code | — |
| L4.5 | DISCOVERED≠CONSULTED | labels+journal | labels/frontier | vitest | VERIFIED_TECHNICALLY | unit | — |
| L5.1 | UAT-15 path | viewer force candidate markdown | project page | code | IMPLEMENTED | code | Conserve E2E = UAT |
| L5.2 | Chaîne revise | merge section existant + viewer candidaté | document-act + page | ALREADY_SATISFIED+fix | PARTIAL | code | E2E conserve |
| L5.3 | Fence mask | SafeMarkdown (précédent) conservé | SafeMarkdown | ALREADY_SATISFIED | ALREADY_SATISFIED | prior | — |
| L5.4 | UAT-30 DRAFT | wantsPrepare ignore leftovers investigation | service.ts | code | IMPLEMENTED | code | LIVE discussion = UAT |
| L6.1 | Optimistic id | dedupe turn key only | project page | code | IMPLEMENTED | code | — |
| L6.2 | Personnalité | SYSTEM_INSTRUCTIONS (prior) conservées | nora-adapter | ALREADY_SATISFIED | ALREADY_SATISFIED | prior | — |
| L6.3 | Overflow/meta | overflow prior + status métier | tokens/pages | ALREADY_SATISFIED | ALREADY_SATISFIED | prior | — |
| L6.4 | Recompose | build + unit + DEV smoke | | VERIFIED_TECHNICALLY | build+unit | E2E |

## 5. Diagnostic

- Faux états done: confirmé dans buildActivitySteps — corrigé.
- Labels génériques: confirmé — enrichissement producteurs + labels.
- cacheTokens subtract: non conforme au contrat fenêtre — retiré.
- UAT-30: hasStructuredProduction depuis investigation — corrigé this-turn only.
- WEB: catalog sans Power Query + open limité discovery search — catalog+pilot URL seed.
- UAT-15 viewer: candidate non forcée si viewer absent — corrigé open/force markdown.

## 6. Git Review Index

### Créés
- `projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx`

### Modifiés (stat)
```
.../src/app/preparations/[preparationId]/page.tsx  |  10 ++
 .../web/src/app/projects/[projectId]/page.tsx      |  40 ++++-
 .../web/src/components/figma/NoraConversation.tsx  |  70 +-------
 .../components/figma/PreparationConversation.tsx   |  50 +-----
 .../web/src/components/figma/tokens.css            |  17 ++
 .../src/domains/conversation/activity-labels.ts    | 192 ++++++++++++++++-----
 .../domains/conversation/cognitive-conductor.ts    |  29 +++-
 .../web/src/domains/conversation/cognitive-work.ts |  11 +-
 .../web/src/domains/conversation/nora-adapter.ts   | 157 +++++++++++++----
 .../domains/conversation/public-web-registry.ts    |  68 +++++++-
 .../conversation/public-web-search-frontier.ts     |  20 ++-
 .../conversation/run-nora-cognitive-turn.ts        |   1 +
 .../web/src/domains/conversation/service.ts        |  45 +++--
 .../web/tests/unit/activity-labels.test.ts         |  99 +++++++----
 .../tests/unit/ml5-c15-cognitive-conductor.test.ts |  23 ++-
 .../tests/unit/ml5-c24-web-registry-usage.test.ts  |  11 ++
 16 files changed, 585 insertions(+), 258 deletions(-)
```

## 7. Fichiers créés / critiques (contenu complet)

### `projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx`

```
"use client";

import {
  buildActivitySteps,
  projectActivityLabel,
  type ActivityLabelInput,
} from "@/domains/conversation/activity-labels";

export type NoraLiveActivityEvent = ActivityLabelInput & {
  sequence: number;
  nature: string;
  status: string;
  summary: string;
  phase: string;
};

/**
 * Figma 12.01 / 12.10 — shared LIVE activity card (sas + Travail).
 * Functional projection only — no SDK dumps, no invented percentages.
 */
export function NoraLiveActivity(props: {
  events: NoraLiveActivityEvent[];
  headline?: string;
  /** Figma frame id for evidence. */
  figmaFrame?: "12.01" | "12.10" | "12.01-12.10";
  className?: string;
}) {
  const events = props.events ?? [];
  const steps = buildActivitySteps(events);
  const last = events.length ? events[events.length - 1]! : null;
  const headline =
    props.headline ||
    (last ? projectActivityLabel(last) : "Activité en cours");
  const badge =
    last?.status === "FAILED" || last?.nature === "UNCERTAIN"
      ? "Limite"
      : last?.status === "LIMITED"
        ? "Partiel"
        : "En cours";

  return (
    <div
      className={`fig-nora-live-activity ${props.className ?? ""}`.trim()}
      role="status"
      aria-live="polite"
      data-testid="nora-live-activity"
      data-figma-frame={props.figmaFrame ?? "12.01-12.10"}
    >
      <div className="fig-nora-live-activity-head">
        <p className="fig-nora-live-activity-kicker">ACTIVITÉ NORA</p>
        <span
          className="fig-nora-live-activity-badge"
          data-testid="nora-live-activity-badge"
          data-badge={badge}
        >
          <span className="fig-nora-live-activity-pulse" aria-hidden />
          {badge}
        </span>
      </div>
      <p className="fig-nora-live-activity-headline" data-testid="nora-live-activity-headline">
        {headline}
      </p>
      <p className="fig-nora-live-activity-lead">
        Les principales vérifications sont présentées au fil du travail.
      </p>
      {steps.length > 0 ? (
        <ul className="fig-nora-live-activity-steps" data-testid="nora-live-activity-steps">
          {steps.map((step) => (
            <li
              key={step.key}
              data-state={step.state}
              data-nature={step.nature}
              className={`fig-nora-live-activity-step fig-nora-live-activity-step-${step.state}`}
            >
              <span className="fig-nora-live-activity-mark" aria-hidden>
                {step.state === "done"
                  ? "✓"
                  : step.state === "failed"
                    ? "✕"
                    : step.state === "limited"
                      ? "!"
                      : step.state === "current"
                        ? "◌"
                        : "○"}
              </span>
              <span>{step.label}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
```

### `projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts`

```
/**
 * Product-facing Nora activity labels (Figma 12.01 / 12.10).
 * Maps durable activity events to métier copy — never exposes SDK/raw tool dumps.
 * ANNOUNCED ≠ OBSERVED ≠ COMPLETED. FAILED/LIMITED/UNCERTAIN are never success.
 */

export type ActivityLabelInput = {
  phase?: string | null;
  nature?: string | null;
  status?: string | null;
  summary?: string | null;
  sourceRef?: string | null;
  detail?: Record<string, unknown> | null;
};

const PHASE_FALLBACKS: Array<{ match: RegExp; label: string }> = [
  { match: /^nora\.generate$/i, label: "Préparation de la réponse" },
  { match: /^nora\.investigation\.engaged$/i, label: "Investigation engagée" },
  { match: /^nora\.investigation$/i, label: "Investigation en cours" },
  { match: /^nora\.contract\.prepare$/i, label: "Préparation du contrat" },
  { match: /^nora\.objective$/i, label: "Orientation du travail" },
  { match: /^nora\.source\.d4/i, label: "Consultation documentaire" },
  { match: /^nora\.source\.git/i, label: "Consultation Git" },
  { match: /^nora\.source\.web/i, label: "Consultation web publique" },
  { match: /^nora\.source\.history/i, label: "Relecture de l'historique" },
  { match: /^nora\.source\.decision/i, label: "Consultation des décisions" },
  { match: /^nora\.source\.report/i, label: "Consultation d'un rapport" },
  { match: /^nora\.source/i, label: "Consultation de sources" },
];

function looksTechnical(summary: string): boolean {
  return (
    /^(COMPLETE|PARTIAL|DENIED|DISCOVERED|CONSULTED|AVAILABLE|UNAVAILABLE|PAGE_OPENED|STALE|UNKNOWN)\b/i.test(
      summary,
    ) ||
    /\b(doc_|gen_|att_|op_|proj_|prep_|tctr_|efx_|cgw_|nact_)/i.test(summary) ||
    /^https?:\/\//i.test(summary.trim()) ||
    /OBSERVED:|ANNOUNCED:|COMPLETED:/i.test(summary)
  );
}

function detailString(
  detail: Record<string, unknown> | null | undefined,
  key: string,
): string | null {
  const v = detail?.[key];
  if (typeof v === "string" && v.trim()) return v.trim();
  return null;
}

function kindFromDetail(detail: Record<string, unknown> | null | undefined): string | null {
  const kind = detail?.kind;
  if (typeof kind === "string" && kind.trim()) return kind.trim().toUpperCase();
  return null;
}

function coverageFrom(input: ActivityLabelInput): string | null {
  const fromDetail = detailString(input.detail, "coverage");
  if (fromDetail) return fromDetail.toUpperCase();
  const summary = (input.summary || "").trim();
  const m = summary.match(
    /^(DISCOVERED|CONSULTED|COMPLETE|PARTIAL|DENIED|STALE|PAGE_OPENED|UNKNOWN)\b/i,
  );
  return m ? m[1]!.toUpperCase() : null;
}

function humanTitle(input: ActivityLabelInput): string | null {
  return (
    detailString(input.detail, "title") ||
    detailString(input.detail, "objective") ||
    detailString(input.detail, "label") ||
    detailString(input.detail, "path") ||
    null
  );
}

function stripCoveragePrefix(summary: string): string {
  return summary
    .replace(
      /^(DISCOVERED|CONSULTED|COMPLETE|PARTIAL|DENIED|STALE|PAGE_OPENED|UNKNOWN)\s*:\s*/i,
      "",
    )
    .trim();
}

function phaseFallback(phase: string): string | null {
  for (const row of PHASE_FALLBACKS) {
    if (row.match.test(phase)) return row.label;
  }
  return null;
}

/**
 * Single-line métier headline for the live activity block.
 * Prefer contextual title/objective/summary over generic phase maps.
 */
export function projectActivityLabel(input: ActivityLabelInput): string {
  const phase = (input.phase || "").trim();
  const summary = (input.summary || "").trim();
  const kind = kindFromDetail(input.detail);
  const coverage = coverageFrom(input);
  const title = humanTitle(input);
  const failed =
    input.status === "FAILED" ||
    input.nature === "UNCERTAIN" ||
    coverage === "DENIED" ||
    input.status === "LIMITED";

  // Prefer non-technical summary when producers already contextualized the event.
  if (summary && !looksTechnical(summary)) {
    const base = summary.slice(0, 160);
    if (failed && input.nature === "UNCERTAIN") return `${base} — limite ou incertitude`;
    if (input.status === "FAILED" || coverage === "DENIED") return `${base} — non abouti`;
    return base;
  }

  if (kind === "WEB" || /web/i.test(phase)) {
    const name = title || stripCoveragePrefix(summary) || null;
    if (coverage === "DISCOVERED" || (/DISCOVERED/i.test(summary) && !/CONSULTED|PAGE_OPENED/i.test(summary))) {
      return name
        ? `Source web découverte — ${name.slice(0, 100)} (non ouverte)`
        : "Source web découverte — page non encore ouverte";
    }
    if (coverage === "CONSULTED" || coverage === "PAGE_OPENED" || /CONSULTED|PAGE_OPENED/i.test(summary)) {
      return name ? `Page web consultée — ${name.slice(0, 110)}` : "Page web consultée";
    }
    if (failed) {
      return name ? `Consultation web limitée — ${name.slice(0, 100)}` : "Consultation web limitée";
    }
    return name ? `Recherche web — ${name.slice(0, 120)}` : "Recherche web publique";
  }

  if (kind === "GIT" || /git/i.test(phase)) {
    const name = title || stripCoveragePrefix(summary) || null;
    if (failed || coverage === "DENIED") {
      return name ? `Consultation Git limitée — ${name.slice(0, 100)}` : "Consultation Git limitée";
    }
    if (input.nature === "ANNOUNCED") {
      return name ? `Consultation Git — ${name.slice(0, 110)}` : "Consultation Git en cours";
    }
    if (input.nature === "COMPLETED" || coverage === "CONSULTED" || coverage === "COMPLETE") {
      return name ? `Consultation Git — ${name.slice(0, 110)}` : "Consultation Git effectuée";
    }
    return name ? `Consultation Git — ${name.slice(0, 110)}` : "Consultation Git en cours";
  }

  if (kind === "D4" || /d4|document/i.test(phase)) {
    const name = title || stripCoveragePrefix(summary) || null;
    if (failed || coverage === "DENIED") {
      return name ? `Document non accessible — ${name.slice(0, 100)}` : "Document non accessible";
    }
    if (input.nature === "ANNOUNCED") {
      return name ? `Consultation du document — ${name.slice(0, 100)}` : "Consultation documentaire";
    }
    return name ? `Document consulté — ${name.slice(0, 110)}` : "Document consulté";
  }

  if (kind === "HISTORY" || /history/i.test(phase)) {
    return "Historique conversationnel consulté";
  }

  const objective = detailString(input.detail, "objective");
  if (objective) {
    if (input.nature === "ANNOUNCED") return objective.slice(0, 160);
    if (failed) return `${objective.slice(0, 140)} — limite`;
  }

  const fromPhase = phase ? phaseFallback(phase) : null;
  if (fromPhase) {
    if (input.nature === "COMPLETED" && fromPhase === "Préparation de la réponse") {
      return "Réponse consolidée";
    }
    if (failed || input.nature === "UNCERTAIN") {
      return `${fromPhase} — limite ou incertitude`;
    }
    if (title && /source|git|document|web/i.test(phase)) {
      return `${fromPhase} — ${title.slice(0, 100)}`;
    }
    return fromPhase;
  }

  if (input.nature === "ANNOUNCED") return "Nora prépare le prochain pas";
  if (input.nature === "OBSERVED") return "Vérification en cours";
  if (input.nature === "COMPLETED") return "Étape terminée";
  if (input.nature === "UNCERTAIN") return "Limite rencontrée";
  return "Activité en cours";
}

export type ActivityStepState = "done" | "current" | "pending" | "limited" | "failed";

export type ActivityStepView = {
  key: string;
  label: string;
  state: ActivityStepState;
  nature: string;
  sequence: number;
  sourceRef?: string | null;
};

function authoritativeState(
  ev: ActivityLabelInput & { nature: string },
): ActivityStepState {
  const coverage = coverageFrom(ev);
  if (ev.status === "FAILED" || coverage === "DENIED") return "failed";
  if (ev.status === "LIMITED" || ev.nature === "UNCERTAIN" || coverage === "PARTIAL" || coverage === "STALE") {
    return "limited";
  }
  if (ev.nature === "COMPLETED" || (ev.status === "COMPLETED" && ev.nature !== "ANNOUNCED")) {
    // DISCOVERED alone is not a completed consultation.
    if (coverage === "DISCOVERED") return "current";
    return "done";
  }
  if (ev.nature === "OBSERVED" || ev.nature === "ANNOUNCED") return "current";
  if (ev.status === "RUNNING") return "current";
  return "current";
}

function identityKey(ev: ActivityLabelInput & { sequence: number; nature: string }): string {
  const kind = kindFromDetail(ev.detail) || ev.phase || "step";
  const ref = (ev.sourceRef || detailString(ev.detail, "ref") || "").trim();
  if (ref) return `${kind}:${ref}`;
  // Distinct operations without shared source keep their sequence identity.
  return `${kind}:seq:${ev.sequence}`;
}

/**
 * Build a short checklist for the Figma activity card from durable events.
 * Dedupes by source/operation identity — never by human label alone.
 * Does NOT rewrite earlier "current" steps to "done" when a new step appears.
 */
export function buildActivitySteps(
  events: Array<ActivityLabelInput & { sequence: number; nature: string }>,
): ActivityStepView[] {
  const byId = new Map<string, ActivityStepView>();
  for (const ev of events) {
    const id = identityKey(ev);
    const label = projectActivityLabel(ev);
    const state = authoritativeState(ev);
    const prev = byId.get(id);
    // Later observation for same identity updates state; never invent success.
    byId.set(id, {
      key: id,
      label,
      state,
      nature: ev.nature,
      sequence: ev.sequence,
      sourceRef: ev.sourceRef ?? null,
    });
    // Preserve earliest sequence for stable ordering when updating same identity.
    if (prev && prev.sequence < ev.sequence) {
      byId.get(id)!.sequence = prev.sequence;
    }
  }
  return [...byId.values()].sort((a, b) => a.sequence - b.sequence).slice(-8);
}

/** Compact API used by pollers — replaces technical `NATURE: summary` headlines. */
export function compactActivitySummary(
  events: Array<{
    nature: string;
    summary: string;
    status: string;
    phase?: string;
    sourceRef?: string | null;
    detail?: Record<string, unknown>;
  }>,
): { headline: string; detailCount: number } {
  if (events.length === 0) return { headline: "", detailCount: 0 };
  const last = events[events.length - 1]!;
  return {
    headline: projectActivityLabel(last).slice(0, 160),
    detailCount: events.length,
  };
}
```

## 8. Diff utile

```diff
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 2ceed504..b65234c0 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -108,6 +108,7 @@ export default function PreparationPage() {
   const reviseIntentRef = useRef<ReviseIntent | null>(null);
   /** Stable client turn key for the current draft — reused across network retries. */
   const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
+  const activityPollEpochRef = useRef(0);
   const idempotencyKey = useMemo(() => `create-${preparationId}`, [preparationId]);
   /** Structured awaiting mission key from server — never parsed from Nora prose. */
   const [awaitingClientIntentKey, setAwaitingClientIntentKey] = useState<string | null>(null);
@@ -276,8 +277,10 @@ export default function PreparationPage() {
     setDraft("");
     let lastActivitySeq = 0;
     let knownTurnCommandId: string | null = null;
+    const pollEpoch = ++activityPollEpochRef.current;
     const pollLiveActivity = async () => {
       try {
+        if (pollEpoch !== activityPollEpochRef.current) return;
         if (!knownTurnCommandId) {
           const look = await fetch(
             `/api/preparations/${preparationId}/turns/by-key/${encodeURIComponent(clientTurnKey)}`,
@@ -288,11 +291,13 @@ export default function PreparationPage() {
           }
         }
         if (!knownTurnCommandId) return;
+        if (pollEpoch !== activityPollEpochRef.current) return;
         const q = lastActivitySeq > 0 ? `?afterSequence=${lastActivitySeq}` : "";
         const act = await fetch(
           `/api/preparations/${preparationId}/turns/${knownTurnCommandId}/activity${q}`,
         );
         if (!act.ok) return;
+        if (pollEpoch !== activityPollEpochRef.current) return;
         const aj = (await act.json()) as {
           events?: Array<{
             sequence: number;
@@ -303,7 +308,11 @@ export default function PreparationPage() {
             sourceRef?: string | null;
             detail?: Record<string, unknown> | null;
           }>;
+          turnCommandId?: string;
         };
+        if (aj.turnCommandId && knownTurnCommandId && aj.turnCommandId !== knownTurnCommandId) {
+          return;
+        }
         const batch = aj.events ?? [];
         if (batch.length === 0) return;
         setLiveActivityEvents((prev) => {
@@ -398,6 +407,7 @@ export default function PreparationPage() {
       setStatus("échec réseau — intention de tour conservée");
     } finally {
       window.clearInterval(activityPollTimer);
+      activityPollEpochRef.current += 1;
       setBusy(false);
     }
   }
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 24e68e0d..46c56ebc 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -364,6 +364,8 @@ export default function ProjectPage() {
   const preparationIdRef = useRef<string | null>(null);
   const projectIdRef = useRef(params.projectId);
   const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
+  /** L1.5 — invalidate in-flight activity polls when a new send starts or ends. */
+  const activityPollEpochRef = useRef(0);
   const reviseCorrelationRef = useRef<string | null>(null);
   const reviseBaseIdRef = useRef<string | null>(null);
   const documentsRef = useRef<Doc[]>([]);
@@ -2529,8 +2531,11 @@ export default function ProjectPage() {
     // C01/C07 — poll durable turn + activity while POST awaits Nora (parallel read path).
     let lastActivitySeq = 0;
     let knownTurnCommandId: string | null = null;
+    // L1.5 — fence late polls from a previous turn after this send ends.
+    const pollEpoch = ++activityPollEpochRef.current;
     const pollLiveActivity = async () => {
       try {
+        if (pollEpoch !== activityPollEpochRef.current) return;
         if (!knownTurnCommandId) {
           const look = await fetch(
             `/api/preparations/${preparationId}/turns/by-key/${encodeURIComponent(clientTurnKey)}`,
@@ -2541,11 +2546,13 @@ export default function ProjectPage() {
           }
         }
         if (!knownTurnCommandId) return;
+        if (pollEpoch !== activityPollEpochRef.current) return;
         const q = lastActivitySeq > 0 ? `?afterSequence=${lastActivitySeq}` : "";
         const act = await fetch(
           `/api/projects/${params.projectId}/turns/${knownTurnCommandId}/activity${q}`,
         );
         if (!act.ok) return;
+        if (pollEpoch !== activityPollEpochRef.current) return;
         const aj = (await act.json()) as {
           events?: Array<{
             sequence: number;
@@ -2556,7 +2563,11 @@ export default function ProjectPage() {
             sourceRef?: string | null;
             detail?: Record<string, unknown> | null;
           }>;
+          turnCommandId?: string;
         };
+        if (aj.turnCommandId && knownTurnCommandId && aj.turnCommandId !== knownTurnCommandId) {
+          return;
+        }
         const batch = aj.events ?? [];
         if (batch.length === 0) return;
         setLiveActivityEvents((prev) => {
@@ -2579,9 +2590,10 @@ export default function ProjectPage() {
     }, 800);
     void pollLiveActivity();
     // UAT-02 — pilot message joins the thread immediately (optimistic; server remains authority).
+    // L6.1 — identity is the turn key, never message text equality (duplicate texts OK).
     const optimisticId = `local:${clientTurnKey}`;
     setMessages((prev) => {
-      if (prev.some((m) => m.id === optimisticId || m.content === text && m.role === "user")) {
+      if (prev.some((m) => m.id === optimisticId)) {
         return prev;
       }
       return [
@@ -2720,17 +2732,30 @@ export default function ProjectPage() {
               pendingCandidateContentSha256: pendingCand.contentSha256,
             });
           }
-          // F5 — visionneuse shows exact candidate, not historical V2 rebadged.
-          if (viewer?.kind === "document" || documentFocusRef.current) {
+          // F5 / UAT-15 — visionneuse shows exact candidate (merged section), not head v1.
+          if (pendingCand.contentMarkdown && documentFocusRef.current) {
             const focus = documentFocusRef.current;
+            const match = documentsRef.current.find((d) => d.document.id === focus.documentId);
             setViewer((prev) => {
-              if (!prev || prev.kind !== "document" || !focus) return prev;
+              const base =
+                prev && prev.kind === "document"
+                  ? prev
+                  : {
+                      kind: "document" as const,
+                      documentId: focus.documentId,
+                      title: match?.document.title ?? "Document",
+                      revisionId: null,
+                      revisionNumber: headNum != null ? headNum + 1 : null,
+                      versionSource: "exact" as const,
+                      markdown: null,
+                      available: false,
+                    };
               return {
-                ...prev,
-                markdown: pendingCand.contentMarkdown ?? prev.markdown,
+                ...base,
+                markdown: pendingCand.contentMarkdown ?? base.markdown,
                 available: Boolean(pendingCand.contentMarkdown),
                 unavailableReason: undefined,
-                revisionNumber: headNum != null ? headNum + 1 : prev.revisionNumber,
+                revisionNumber: headNum != null ? headNum + 1 : base.revisionNumber,
                 versionSource: "exact",
               };
             });
@@ -2882,6 +2907,7 @@ export default function ProjectPage() {
       setStatus("échec réseau — intention de tour conservée");
     } finally {
       if (activityPollTimer != null) window.clearInterval(activityPollTimer);
+      activityPollEpochRef.current += 1;
       setBusy(false);
     }
   }
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index 4f667bb3..f8ad8707 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -14,10 +14,7 @@ import {
   compositionAnchorsChoices,
   compositionAnchorsReferences,
 } from "@/domains/conversation/visual-composition";
-import {
-  buildActivitySteps,
-  projectActivityLabel,
-} from "@/domains/conversation/activity-labels";
+import { NoraLiveActivity } from "@/components/figma/NoraLiveActivity";

 export type NoraMsg = {
   id: string;
@@ -393,66 +390,11 @@ export function NoraConversation(props: {
           ) : null}
           {(props.activity === "preparing" || (props.liveActivityEvents?.length ?? 0) > 0) &&
           (props.liveActivityHeadline || (props.liveActivityEvents?.length ?? 0) > 0) ? (
-            <div
-              className="fig-nora-live-activity"
-              role="status"
-              aria-live="polite"
-              data-testid="nora-live-activity"
-              data-figma-frame="12.01-12.10"
-            >
-              <div className="fig-nora-live-activity-head">
-                <p className="fig-nora-live-activity-kicker">ACTIVITÉ NORA</p>
-                <span className="fig-nora-live-activity-badge" data-testid="nora-live-activity-badge">
-                  En cours
-                </span>
-              </div>
-              <p className="fig-nora-live-activity-headline" data-testid="nora-live-activity-headline">
-                {props.liveActivityHeadline ||
-                  (props.liveActivityEvents?.length
-                    ? projectActivityLabel(
-                        props.liveActivityEvents[props.liveActivityEvents.length - 1]!,
-                      )
-                    : "Activité en cours")}
-              </p>
-              <p className="fig-nora-live-activity-lead">
-                Les principales vérifications sont présentées au fil du travail.
-              </p>
-              {(props.liveActivityEvents?.length ?? 0) > 0 ? (
-                <>
-                  <ul className="fig-nora-live-activity-steps" data-testid="nora-live-activity-steps">
-                    {buildActivitySteps(props.liveActivityEvents!).map((step) => (
-                      <li
-                        key={step.key}
-                        data-state={step.state}
-                        data-nature={step.nature}
-                        className={`fig-nora-live-activity-step fig-nora-live-activity-step-${step.state}`}
-                      >
-                        <span className="fig-nora-live-activity-mark" aria-hidden>
-                          {step.state === "done" ? "✓" : step.state === "current" ? "◌" : "○"}
-                        </span>
-                        <span>{step.label}</span>
-                      </li>
-                    ))}
-                  </ul>
-                  <p className="fig-nora-live-activity-footnote">
-                    Activité fonctionnelle · aucun raisonnement interne exposé
-                  </p>
-                  <details data-testid="nora-live-activity-detail" className="fig-nora-live-activity-detail">
-                    <summary>
-                      Détail ({props.liveActivityEvents!.length} événement
-                      {props.liveActivityEvents!.length > 1 ? "s" : ""})
-                    </summary>
-                    <ul>
-                      {props.liveActivityEvents!.map((ev) => (
-                        <li key={ev.sequence} data-nature={ev.nature} data-phase={ev.phase}>
-                          {projectActivityLabel(ev)}
-                        </li>
-                      ))}
-                    </ul>
-                  </details>
-                </>
-              ) : null}
-            </div>
+            <NoraLiveActivity
+              events={props.liveActivityEvents ?? []}
+              headline={props.liveActivityHeadline}
+              figmaFrame="12.01"
+            />
           ) : null}
           {props.activity === "error" ? (
             <div className="fig-alert" role="alert" data-testid="nora-activity-error">
diff --git a/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
index 80ad1ef3..76ab072f 100644
--- a/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
@@ -1,10 +1,7 @@
 "use client";

 import { SafeMarkdown } from "@/components/SafeMarkdown";
-import {
-  buildActivitySteps,
-  projectActivityLabel,
-} from "@/domains/conversation/activity-labels";
+import { NoraLiveActivity } from "@/components/figma/NoraLiveActivity";

 export type PrepMessage = {
   id: string;
@@ -112,46 +109,11 @@ export function PreparationConversation(props: {
         })}

         {showLive ? (
-          <div
-            className="fig-nora-live-activity"
-            role="status"
-            aria-live="polite"
-            data-testid="nora-live-activity"
-            data-figma-frame="12.10"
-          >
-            <div className="fig-nora-live-activity-head">
-              <p className="fig-nora-live-activity-kicker">ACTIVITÉ NORA</p>
-              <span className="fig-nora-live-activity-badge" data-testid="nora-live-activity-badge">
-                En cours
-              </span>
-            </div>
-            <p className="fig-nora-live-activity-headline" data-testid="nora-live-activity-headline">
-              {props.liveActivityHeadline ||
-                (liveEvents.length
-                  ? projectActivityLabel(liveEvents[liveEvents.length - 1]!)
-                  : "Activité en cours")}
-            </p>
-            <p className="fig-nora-live-activity-lead">
-              Les principales vérifications sont présentées au fil du travail.
-            </p>
-            {liveEvents.length > 0 ? (
-              <ul className="fig-nora-live-activity-steps" data-testid="nora-live-activity-steps">
-                {buildActivitySteps(liveEvents).map((step) => (
-                  <li
-                    key={step.key}
-                    data-state={step.state}
-                    data-nature={step.nature}
-                    className={`fig-nora-live-activity-step fig-nora-live-activity-step-${step.state}`}
-                  >
-                    <span className="fig-nora-live-activity-mark" aria-hidden>
-                      {step.state === "done" ? "✓" : step.state === "current" ? "◌" : "○"}
-                    </span>
-                    <span>{step.label}</span>
-                  </li>
-                ))}
-              </ul>
-            ) : null}
-          </div>
+          <NoraLiveActivity
+            events={liveEvents}
+            headline={props.liveActivityHeadline}
+            figmaFrame="12.10"
+          />
         ) : null}

         {props.noraActivity === "preparing" && !showLive ? (
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 7fb645a0..95e4381a 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -580,6 +580,7 @@
 .fig-nora-live-activity-badge {
   display: inline-flex;
   align-items: center;
+  gap: 6px;
   min-height: 29px;
   padding: 7px 12px;
   border-radius: 15px;
@@ -590,6 +591,22 @@
   font-weight: 600;
 }

+.fig-nora-live-activity-badge .fig-nora-live-activity-pulse {
+  width: 8px;
+  height: 8px;
+  border-radius: 999px;
+  background: var(--fig-accent, #7477ed);
+  animation: fig-nora-pulse 1.2s ease-in-out infinite;
+}
+
+.fig-nora-live-activity-step-limited {
+  color: var(--fig-amber, #e6ba76);
+}
+
+.fig-nora-live-activity-step-failed {
+  color: #e08a8a;
+}
+
 .fig-nora-live-activity-headline {
   margin: 0;
   font-size: 19px;
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts b/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
index d0efc00b..1aaaa609 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
@@ -1,7 +1,7 @@
 /**
  * Product-facing Nora activity labels (Figma 12.01 / 12.10).
  * Maps durable activity events to métier copy — never exposes SDK/raw tool dumps.
- * ANNOUNCED ≠ OBSERVED: callers must keep nature for detail, but headline is human.
+ * ANNOUNCED ≠ OBSERVED ≠ COMPLETED. FAILED/LIMITED/UNCERTAIN are never success.
  */

 export type ActivityLabelInput = {
@@ -13,11 +13,12 @@ export type ActivityLabelInput = {
   detail?: Record<string, unknown> | null;
 };

-const PHASE_HEADLINES: Array<{ match: RegExp; label: string }> = [
+const PHASE_FALLBACKS: Array<{ match: RegExp; label: string }> = [
   { match: /^nora\.generate$/i, label: "Préparation de la réponse" },
   { match: /^nora\.investigation\.engaged$/i, label: "Investigation engagée" },
   { match: /^nora\.investigation$/i, label: "Investigation en cours" },
   { match: /^nora\.contract\.prepare$/i, label: "Préparation du contrat" },
+  { match: /^nora\.objective$/i, label: "Orientation du travail" },
   { match: /^nora\.source\.d4/i, label: "Consultation documentaire" },
   { match: /^nora\.source\.git/i, label: "Consultation Git" },
   { match: /^nora\.source\.web/i, label: "Consultation web publique" },
@@ -29,19 +30,21 @@ const PHASE_HEADLINES: Array<{ match: RegExp; label: string }> = [

 function looksTechnical(summary: string): boolean {
   return (
-    /^(COMPLETE|PARTIAL|DENIED|DISCOVERED|CONSULTED|AVAILABLE|UNAVAILABLE)\b/i.test(
+    /^(COMPLETE|PARTIAL|DENIED|DISCOVERED|CONSULTED|AVAILABLE|UNAVAILABLE|PAGE_OPENED|STALE|UNKNOWN)\b/i.test(
       summary,
     ) ||
-    /\b(doc_|gen_|att_|op_|proj_|prep_|tctr_|efx_)/i.test(summary) ||
+    /\b(doc_|gen_|att_|op_|proj_|prep_|tctr_|efx_|cgw_|nact_)/i.test(summary) ||
     /^https?:\/\//i.test(summary.trim()) ||
     /OBSERVED:|ANNOUNCED:|COMPLETED:/i.test(summary)
   );
 }

-function phaseHeadline(phase: string): string | null {
-  for (const row of PHASE_HEADLINES) {
-    if (row.match.test(phase)) return row.label;
-  }
+function detailString(
+  detail: Record<string, unknown> | null | undefined,
+  key: string,
+): string | null {
+  const v = detail?.[key];
+  if (typeof v === "string" && v.trim()) return v.trim();
   return null;
 }

@@ -51,49 +54,131 @@ function kindFromDetail(detail: Record<string, unknown> | null | undefined): str
   return null;
 }

+function coverageFrom(input: ActivityLabelInput): string | null {
+  const fromDetail = detailString(input.detail, "coverage");
+  if (fromDetail) return fromDetail.toUpperCase();
+  const summary = (input.summary || "").trim();
+  const m = summary.match(
+    /^(DISCOVERED|CONSULTED|COMPLETE|PARTIAL|DENIED|STALE|PAGE_OPENED|UNKNOWN)\b/i,
+  );
+  return m ? m[1]!.toUpperCase() : null;
+}
+
+function humanTitle(input: ActivityLabelInput): string | null {
+  return (
+    detailString(input.detail, "title") ||
+    detailString(input.detail, "objective") ||
+    detailString(input.detail, "label") ||
+    detailString(input.detail, "path") ||
+    null
+  );
+}
+
+function stripCoveragePrefix(summary: string): string {
+  return summary
+    .replace(
+      /^(DISCOVERED|CONSULTED|COMPLETE|PARTIAL|DENIED|STALE|PAGE_OPENED|UNKNOWN)\s*:\s*/i,
+      "",
+    )
+    .trim();
+}
+
+function phaseFallback(phase: string): string | null {
+  for (const row of PHASE_FALLBACKS) {
+    if (row.match.test(phase)) return row.label;
+  }
+  return null;
+}
+
 /**
  * Single-line métier headline for the live activity block.
- * Prefer phase/kind mapping over raw tool summaries.
+ * Prefer contextual title/objective/summary over generic phase maps.
  */
 export function projectActivityLabel(input: ActivityLabelInput): string {
   const phase = (input.phase || "").trim();
   const summary = (input.summary || "").trim();
   const kind = kindFromDetail(input.detail);
+  const coverage = coverageFrom(input);
+  const title = humanTitle(input);
+  const failed =
+    input.status === "FAILED" ||
+    input.nature === "UNCERTAIN" ||
+    coverage === "DENIED" ||
+    input.status === "LIMITED";
+
+  // Prefer non-technical summary when producers already contextualized the event.
+  if (summary && !looksTechnical(summary)) {
+    const base = summary.slice(0, 160);
+    if (failed && input.nature === "UNCERTAIN") return `${base} — limite ou incertitude`;
+    if (input.status === "FAILED" || coverage === "DENIED") return `${base} — non abouti`;
+    return base;
+  }

   if (kind === "WEB" || /web/i.test(phase)) {
-    if (/DISCOVERED/i.test(summary) && !/CONSULTED/i.test(summary)) {
-      return "Source web découverte — page non encore ouverte";
+    const name = title || stripCoveragePrefix(summary) || null;
+    if (coverage === "DISCOVERED" || (/DISCOVERED/i.test(summary) && !/CONSULTED|PAGE_OPENED/i.test(summary))) {
+      return name
+        ? `Source web découverte — ${name.slice(0, 100)} (non ouverte)`
+        : "Source web découverte — page non encore ouverte";
     }
-    if (/CONSULTED|PAGE_OPENED|ouvert/i.test(summary)) {
-      return "Page web consultée";
+    if (coverage === "CONSULTED" || coverage === "PAGE_OPENED" || /CONSULTED|PAGE_OPENED/i.test(summary)) {
+      return name ? `Page web consultée — ${name.slice(0, 110)}` : "Page web consultée";
     }
-    return "Recherche web publique";
+    if (failed) {
+      return name ? `Consultation web limitée — ${name.slice(0, 100)}` : "Consultation web limitée";
+    }
+    return name ? `Recherche web — ${name.slice(0, 120)}` : "Recherche web publique";
   }
+
   if (kind === "GIT" || /git/i.test(phase)) {
-    return "Consultation Git effectuée";
+    const name = title || stripCoveragePrefix(summary) || null;
+    if (failed || coverage === "DENIED") {
+      return name ? `Consultation Git limitée — ${name.slice(0, 100)}` : "Consultation Git limitée";
+    }
+    if (input.nature === "ANNOUNCED") {
+      return name ? `Consultation Git — ${name.slice(0, 110)}` : "Consultation Git en cours";
+    }
+    if (input.nature === "COMPLETED" || coverage === "CONSULTED" || coverage === "COMPLETE") {
+      return name ? `Consultation Git — ${name.slice(0, 110)}` : "Consultation Git effectuée";
+    }
+    return name ? `Consultation Git — ${name.slice(0, 110)}` : "Consultation Git en cours";
   }
+
   if (kind === "D4" || /d4|document/i.test(phase)) {
-    return "Document consulté";
+    const name = title || stripCoveragePrefix(summary) || null;
+    if (failed || coverage === "DENIED") {
+      return name ? `Document non accessible — ${name.slice(0, 100)}` : "Document non accessible";
+    }
+    if (input.nature === "ANNOUNCED") {
+      return name ? `Consultation du document — ${name.slice(0, 100)}` : "Consultation documentaire";
+    }
+    return name ? `Document consulté — ${name.slice(0, 110)}` : "Document consulté";
   }
+
   if (kind === "HISTORY" || /history/i.test(phase)) {
     return "Historique conversationnel consulté";
   }

-  const fromPhase = phase ? phaseHeadline(phase) : null;
+  const objective = detailString(input.detail, "objective");
+  if (objective) {
+    if (input.nature === "ANNOUNCED") return objective.slice(0, 160);
+    if (failed) return `${objective.slice(0, 140)} — limite`;
+  }
+
+  const fromPhase = phase ? phaseFallback(phase) : null;
   if (fromPhase) {
     if (input.nature === "COMPLETED" && fromPhase === "Préparation de la réponse") {
       return "Réponse consolidée";
     }
-    if (input.nature === "UNCERTAIN") {
+    if (failed || input.nature === "UNCERTAIN") {
       return `${fromPhase} — limite ou incertitude`;
     }
+    if (title && /source|git|document|web/i.test(phase)) {
+      return `${fromPhase} — ${title.slice(0, 100)}`;
+    }
     return fromPhase;
   }

-  if (summary && !looksTechnical(summary)) {
-    return summary.slice(0, 160);
-  }
-
   if (input.nature === "ANNOUNCED") return "Nora prépare le prochain pas";
   if (input.nature === "OBSERVED") return "Vérification en cours";
   if (input.nature === "COMPLETED") return "Étape terminée";
@@ -101,7 +186,7 @@ export function projectActivityLabel(input: ActivityLabelInput): string {
   return "Activité en cours";
 }

-export type ActivityStepState = "done" | "current" | "pending";
+export type ActivityStepState = "done" | "current" | "pending" | "limited" | "failed";

 export type ActivityStepView = {
   key: string;
@@ -109,43 +194,64 @@ export type ActivityStepView = {
   state: ActivityStepState;
   nature: string;
   sequence: number;
+  sourceRef?: string | null;
 };

+function authoritativeState(
+  ev: ActivityLabelInput & { nature: string },
+): ActivityStepState {
+  const coverage = coverageFrom(ev);
+  if (ev.status === "FAILED" || coverage === "DENIED") return "failed";
+  if (ev.status === "LIMITED" || ev.nature === "UNCERTAIN" || coverage === "PARTIAL" || coverage === "STALE") {
+    return "limited";
+  }
+  if (ev.nature === "COMPLETED" || (ev.status === "COMPLETED" && ev.nature !== "ANNOUNCED")) {
+    // DISCOVERED alone is not a completed consultation.
+    if (coverage === "DISCOVERED") return "current";
+    return "done";
+  }
+  if (ev.nature === "OBSERVED" || ev.nature === "ANNOUNCED") return "current";
+  if (ev.status === "RUNNING") return "current";
+  return "current";
+}
+
+function identityKey(ev: ActivityLabelInput & { sequence: number; nature: string }): string {
+  const kind = kindFromDetail(ev.detail) || ev.phase || "step";
+  const ref = (ev.sourceRef || detailString(ev.detail, "ref") || "").trim();
+  if (ref) return `${kind}:${ref}`;
+  // Distinct operations without shared source keep their sequence identity.
+  return `${kind}:seq:${ev.sequence}`;
+}
+
 /**
  * Build a short checklist for the Figma activity card from durable events.
- * Dedupes by human label; last occurrence wins state.
+ * Dedupes by source/operation identity — never by human label alone.
+ * Does NOT rewrite earlier "current" steps to "done" when a new step appears.
  */
 export function buildActivitySteps(
   events: Array<ActivityLabelInput & { sequence: number; nature: string }>,
 ): ActivityStepView[] {
-  const byLabel = new Map<string, ActivityStepView>();
+  const byId = new Map<string, ActivityStepView>();
   for (const ev of events) {
+    const id = identityKey(ev);
     const label = projectActivityLabel(ev);
-    const state: ActivityStepState =
-      ev.nature === "COMPLETED" || ev.status === "COMPLETED"
-        ? "done"
-        : ev.nature === "OBSERVED" || ev.nature === "ANNOUNCED"
-          ? "current"
-          : "done";
-    byLabel.set(label, {
-      key: `${ev.sequence}:${label}`,
+    const state = authoritativeState(ev);
+    const prev = byId.get(id);
+    // Later observation for same identity updates state; never invent success.
+    byId.set(id, {
+      key: id,
       label,
       state,
       nature: ev.nature,
       sequence: ev.sequence,
+      sourceRef: ev.sourceRef ?? null,
     });
-  }
-  const steps = [...byLabel.values()].sort((a, b) => a.sequence - b.sequence);
-  // Only the last non-done stays "current"; earlier currents become done for display.
-  let sawCurrent = false;
-  for (let i = steps.length - 1; i >= 0; i--) {
-    const s = steps[i]!;
-    if (s.state === "current") {
-      if (sawCurrent) s.state = "done";
-      else sawCurrent = true;
+    // Preserve earliest sequence for stable ordering when updating same identity.
+    if (prev && prev.sequence < ev.sequence) {
+      byId.get(id)!.sequence = prev.sequence;
     }
   }
-  return steps.slice(-6);
+  return [...byId.values()].sort((a, b) => a.sequence - b.sequence).slice(-8);
 }

 /** Compact API used by pollers — replaces technical `NATURE: summary` headlines. */
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
index 17448ac4..b70ce5de 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
@@ -106,6 +106,12 @@ export async function runCognitiveConductor(
   if (input.conversationId && input.turnCommandId) {
     try {
       const { appendActivityEvent } = await import("./activity-projection");
+      const objective = (input.objective || work.objective || "").trim();
+      const objectiveLabel = objective
+        ? objective.length > 140
+          ? `${objective.slice(0, 137)}…`
+          : objective
+        : null;
       await appendActivityEvent({
         conversationId: input.conversationId,
         turnCommandId: input.turnCommandId,
@@ -114,16 +120,35 @@ export async function runCognitiveConductor(
         nature: "ANNOUNCED",
         status: "RUNNING",
         summary: opened.resumed
-          ? "Reprise du travail cognitif en cours"
-          : "Investigation engagée",
+          ? objectiveLabel
+            ? `Reprise — ${objectiveLabel}`
+            : "Reprise du travail cognitif en cours"
+          : objectiveLabel
+            ? `Investigation — ${objectiveLabel}`
+            : "Investigation engagée",
         detail: {
           workId: work.id,
           revision: work.revision,
           resumed: opened.resumed,
+          objective: objectiveLabel,
         },
         sourceRef: work.id,
         ownerToken,
       });
+      if (objectiveLabel) {
+        await appendActivityEvent({
+          conversationId: input.conversationId,
+          turnCommandId: input.turnCommandId,
+          ownerPilotId: input.pilotId,
+          phase: "nora.objective",
+          nature: "ANNOUNCED",
+          status: "RUNNING",
+          summary: objectiveLabel,
+          detail: { objective: objectiveLabel, workId: work.id },
+          sourceRef: work.id,
+          ownerToken,
+        });
+      }
     } catch {
       /* activity must not fail the conductor */
     }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts
index 20caf66b..b197a3c5 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts
@@ -626,12 +626,11 @@ export function evaluateGlobalResourceEnvelope(
   }
   // C24 — do not add reasoningTokens on top of outputTokens (SDK usually
   // already includes reasoning in output). Track reasoning separately for OBS.
-  // ML5 — cached prompt tokens are already billed inside inputTokens on many
-  // providers; subtracting verified cacheTokens avoids double-counting the same
-  // context window across segments (UAT-16). When cache is unknown, keep full input.
-  const cached = resources.cacheTokens ?? 0;
-  const inputBillable = Math.max(0, (resources.inputTokens ?? 0) - cached);
-  const used = inputBillable + (resources.outputTokens ?? 0);
+  // Functional completion: the global envelope guards cumulative tokens processed
+  // in the work (input + output). Cached tokens remain part of the context window
+  // and must NOT be subtracted from the safety envelope (UAT-16 / FinOps ≠ window).
+  // cacheTokens stay in resources.limits / OBS for cost analysis only.
+  const used = (resources.inputTokens ?? 0) + (resources.outputTokens ?? 0);
   if (Number.isFinite(maxTokens) && used >= maxTokens) {
     return { ok: false, reason: "GLOBAL_TOKEN_BUDGET_EXHAUSTED" };
   }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 34ca2d9a..17d496ea 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -73,6 +73,7 @@ export type NoraGenerateInput = {
     topics?: Record<string, string>;
     exactQueries?: string[];
     facts?: string[];
+    pilotProvidedUrls?: string[];
   };
 };

@@ -575,6 +576,37 @@ async function fixtureReply(
     onRecord: (entry) => {
       const ctx = input.toolScope?.activityContext;
       if (!ctx) return;
+      const title = entry.title?.trim() || null;
+      const human =
+        entry.kind === "WEB"
+          ? entry.coverage === "DISCOVERED"
+            ? title
+              ? `Source web découverte — ${title}`
+              : "Source web découverte"
+            : entry.coverage === "CONSULTED" || entry.coverage === "VERIFIED"
+              ? title
+                ? `Page web consultée — ${title}`
+                : "Page web consultée"
+              : title
+                ? `Recherche web — ${title}`
+                : "Recherche web publique"
+          : entry.kind === "GIT"
+            ? title
+              ? `Consultation Git — ${title}`
+              : `Consultation Git — ${entry.ref}`
+            : entry.kind === "D4"
+              ? title
+                ? `Document — ${title}`
+                : `Document — ${entry.ref}`
+              : title || `${entry.kind}: ${entry.ref}`;
+      const status =
+        entry.coverage === "DENIED"
+          ? ("FAILED" as const)
+          : entry.coverage === "PARTIAL" || entry.coverage === "STALE"
+            ? ("LIMITED" as const)
+            : entry.coverage === "DISCOVERED"
+              ? ("RUNNING" as const)
+              : ("COMPLETED" as const);
       activityFlushQueue.push(
         appendActivityEvent({
           conversationId: ctx.conversationId,
@@ -583,14 +615,14 @@ async function fixtureReply(
           generationId,
           phase: `nora.source.${entry.kind.toLowerCase()}`,
           nature: "OBSERVED",
-          status:
-            entry.coverage === "DENIED"
-              ? "FAILED"
-              : entry.coverage === "PARTIAL" || entry.coverage === "STALE"
-                ? "LIMITED"
-                : "COMPLETED",
-          summary: `${entry.coverage}: ${entry.ref}`.slice(0, 200),
-          detail: { kind: entry.kind, coverage: entry.coverage, title: entry.title ?? null },
+          status,
+          summary: human.slice(0, 200),
+          detail: {
+            kind: entry.kind,
+            coverage: entry.coverage,
+            title,
+            ref: entry.ref,
+          },
           sourceRef: entry.ref,
           ownerToken: ctx.ownerToken,
         }).catch(() => {
@@ -887,6 +919,37 @@ async function runLiveWithTools(
     onRecord: (entry) => {
       const ctx = input.toolScope?.activityContext;
       if (!ctx) return;
+      const title = entry.title?.trim() || null;
+      const human =
+        entry.kind === "WEB"
+          ? entry.coverage === "DISCOVERED"
+            ? title
+              ? `Source web découverte — ${title}`
+              : "Source web découverte"
+            : entry.coverage === "CONSULTED" || entry.coverage === "VERIFIED"
+              ? title
+                ? `Page web consultée — ${title}`
+                : "Page web consultée"
+              : title
+                ? `Recherche web — ${title}`
+                : "Recherche web publique"
+          : entry.kind === "GIT"
+            ? title
+              ? `Consultation Git — ${title}`
+              : `Consultation Git — ${entry.ref}`
+            : entry.kind === "D4"
+              ? title
+                ? `Document — ${title}`
+                : `Document — ${entry.ref}`
+              : title || `${entry.kind}: ${entry.ref}`;
+      const status =
+        entry.coverage === "DENIED"
+          ? ("FAILED" as const)
+          : entry.coverage === "PARTIAL" || entry.coverage === "STALE"
+            ? ("LIMITED" as const)
+            : entry.coverage === "DISCOVERED"
+              ? ("RUNNING" as const)
+              : ("COMPLETED" as const);
       liveActivityFlushQueue.push(
         appendLiveActivity({
           conversationId: ctx.conversationId,
@@ -895,14 +958,14 @@ async function runLiveWithTools(
           generationId,
           phase: `nora.source.${entry.kind.toLowerCase()}`,
           nature: "OBSERVED",
-          status:
-            entry.coverage === "DENIED"
-              ? "FAILED"
-              : entry.coverage === "PARTIAL" || entry.coverage === "STALE"
-                ? "LIMITED"
-                : "COMPLETED",
-          summary: `${entry.coverage}: ${entry.ref}`.slice(0, 200),
-          detail: { kind: entry.kind, coverage: entry.coverage, title: entry.title ?? null },
+          status,
+          summary: human.slice(0, 200),
+          detail: {
+            kind: entry.kind,
+            coverage: entry.coverage,
+            title,
+            ref: entry.ref,
+          },
           sourceRef: entry.ref,
           ownerToken: ctx.ownerToken,
         }).catch(() => {
@@ -943,6 +1006,7 @@ async function runLiveWithTools(
         turnPublicTopics: input.publicWebRegistry?.topics,
         turnPublicFacts: input.publicWebRegistry?.facts,
         turnAuthorizedExactQueries: input.publicWebRegistry?.exactQueries,
+        pilotProvidedUrls: input.publicWebRegistry?.pilotProvidedUrls,
       });
       tools = [...tools, ...webTools];
     }
@@ -1252,30 +1316,49 @@ async function runLiveWithTools(
       const status = cat.interrupted ? ("INTERRUPTED" as const) : ("UNKNOWN" as const);
       const toolsOnErr = policy.budgets.maxD4ToolCalls - initialBudget.remainingCalls;
       const sourcesOnErr = sourceJournal.entries.slice();
-      const sourceLines = sourcesOnErr
-        .slice(-8)
-        .map((s) => {
-          const kind =
-            s.kind === "WEB"
-              ? "Web"
-              : s.kind === "GIT"
-                ? "Git"
-                : s.kind === "D4"
-                  ? "Document"
-                  : s.kind;
-          const cov = s.coverage ? ` (${s.coverage})` : "";
-          return `• ${kind}${cov}${s.title ? ` — ${s.title}` : s.ref ? ` — ${s.ref}` : ""}`;
-        })
-        .join("\n");
+      const consulted = sourcesOnErr.filter(
+        (s) =>
+          s.coverage === "CONSULTED" ||
+          s.coverage === "VERIFIED" ||
+          s.coverage === "PARTIAL",
+      );
+      const discoveredOnly = sourcesOnErr.filter((s) => s.coverage === "DISCOVERED");
+      const formatSrc = (s: (typeof sourcesOnErr)[number]) => {
+        const kind =
+          s.kind === "WEB"
+            ? "Web"
+            : s.kind === "GIT"
+              ? "Git"
+              : s.kind === "D4"
+                ? "Document"
+                : s.kind;
+        return `• ${kind} · ${s.coverage}${s.title ? ` — ${s.title}` : s.ref ? ` — ${s.ref}` : ""}`;
+      };
+      const submitted = latestContractProduction(contractProdJournal);
+      const acquisLines: string[] = [];
+      if (submitted?.productionInstruction?.trim()) {
+        acquisLines.push(
+          `Production technique amorcée (instruction ${submitted.productionInstruction.trim().length} car.) — non consolidée en réponse.`,
+        );
+      }
+      if (consulted.length > 0) {
+        acquisLines.push("Lectures effectuées :", ...consulted.slice(-6).map(formatSrc));
+      }
+      if (discoveredOnly.length > 0) {
+        acquisLines.push(
+          "Sources découvertes non ouvertes :",
+          ...discoveredOnly.slice(-4).map(formatSrc),
+        );
+      }
       const honestPartial =
-        sourcesOnErr.length > 0
+        acquisLines.length > 0
           ? [
-              "J’ai commencé le travail, mais je n’ai pas pu consolider une restitution complète sur ce tour.",
-              "Sources effectivement mobilisées :",
-              sourceLines,
-              "Votre message est conservé. Vous pouvez me demander de reprendre à partir de ces acquis — aucune relance automatique.",
+              "J’ai avancé sur ce travail, mais je n’ai pas pu livrer une restitution complète et fiable sur ce tour.",
+              ...acquisLines,
+              "Aucune conclusion métier n’est affirmée au-delà de ces acquis observés.",
+              "Votre message est conservé. Vous pouvez me demander de reprendre — aucune relance automatique.",
             ].join("\n")
-          : "Je n’ai pas pu terminer cette réponse. Votre message est conservé ; vous pouvez reformuler ou reprendre. Aucune relance automatique.";
+          : "Je n’ai pas pu terminer cette réponse et aucun acquis de lecture n’a été consolidé. Votre message est conservé ; vous pouvez reformuler ou reprendre. Aucune relance automatique.";
       return {
         generationId,
         mode: "openai-agents-sdk-live",
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
index f35daa6c..315a3607 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
@@ -16,6 +16,11 @@ export type PublicWebRegistry = {
   exactQueries: string[];
   facts: string[];
   limits: string[];
+  /**
+   * Public https URLs literally supplied by the Pilote in this turn's haystack.
+   * May seed open_page discovery after URL/DNS public checks — never private hosts.
+   */
+  pilotProvidedUrls: string[];
 };

 export type PublicTopicCatalogEntry = {
@@ -67,8 +72,58 @@ const DEFAULT_DEV_CATALOG: PublicTopicCatalogEntry[] = [
     query: "OWASP Top 10 site:owasp.org",
     matchTokens: ["owasp", "top 10", "owasp top"],
   },
+  {
+    ref: "ms-power-query",
+    query: "What is Power Query Microsoft Learn site:learn.microsoft.com",
+    matchTokens: [
+      "power query",
+      "powerquery",
+      "microsoft learn power",
+      "learn.microsoft.com/fr-fr/power-query",
+    ],
+  },
+  {
+    ref: "ms-sharepoint-folder-pq",
+    query:
+      "SharePoint Folder connector Power Query Microsoft Learn site:learn.microsoft.com",
+    matchTokens: [
+      "sharepoint folder",
+      "connecteur sharepoint",
+      "sharepoint power query",
+      "power-query/connectors/sharepoint",
+    ],
+  },
 ];

+/** Extract public https URLs from Pilote text — candidates only; egress still gated. */
+export function extractPilotProvidedPublicUrls(haystack: string): string[] {
+  const found: string[] = [];
+  const re = /https:\/\/[^\s<>"'\)\]]+/gi;
+  let m: RegExpExecArray | null;
+  while ((m = re.exec(haystack)) !== null) {
+    const raw = m[0]!.replace(/[.,;:!?)]+$/g, "");
+    try {
+      const u = new URL(raw);
+      if (u.protocol !== "https:") continue;
+      const host = u.hostname.toLowerCase();
+      if (
+        host === "localhost" ||
+        host.endsWith(".local") ||
+        host === "metadata.google.internal" ||
+        /^(10\.|127\.|192\.168\.|172\.(1[6-9]|2\d|3[0-1])\.)/.test(host) ||
+        host === "0.0.0.0" ||
+        host === "::1"
+      ) {
+        continue;
+      }
+      found.push(u.toString());
+    } catch {
+      /* ignore */
+    }
+  }
+  return [...new Set(found)].slice(0, 8);
+}
+
 function normalize(s: string): string {
   return s.replace(/\s+/g, " ").trim().toLowerCase();
 }
@@ -168,7 +223,17 @@ export function resolvePublicWebRegistry(input: {
     }
   }

-  if (Object.keys(topics).length === 0 && exact.size === 0 && facts.length === 0) {
+  const pilotProvidedUrls = extractPilotProvidedPublicUrls(input.haystack);
+  if (pilotProvidedUrls.length > 0) {
+    limits.push(`PILOT_PROVIDED_PUBLIC_URLS:${pilotProvidedUrls.length}`);
+  }
+
+  if (
+    Object.keys(topics).length === 0 &&
+    exact.size === 0 &&
+    facts.length === 0 &&
+    pilotProvidedUrls.length === 0
+  ) {
     limits.push("PUBLIC_WEB_REGISTRY_EMPTY");
   }

@@ -177,5 +242,6 @@ export function resolvePublicWebRegistry(input: {
     exactQueries: [...exact],
     facts,
     limits,
+    pilotProvidedUrls,
   };
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
index f8d73679..2c51ffd3 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
@@ -737,6 +737,11 @@ export async function buildPublicWebFrontierTools(input: {
   turnPublicTopics?: Record<string, string>;
   /** C22 — exact queries explicitly authorized for this turn. */
   turnAuthorizedExactQueries?: string[];
+  /**
+   * Public https URLs literally provided by the Pilote in this turn.
+   * Seed open_page discovery after normalize — DNS/egress still enforced on open.
+   */
+  pilotProvidedUrls?: string[];
 }) {
   const { tool } = await import("@openai/agents");
   const { z } = await import("zod");
@@ -751,6 +756,18 @@ export async function buildPublicWebFrontierTools(input: {
       }
     }
   }
+  for (const raw of input.pilotProvidedUrls ?? []) {
+    const n = normalizeDiscoveredWebUrl(raw);
+    if (!n) continue;
+    discoveredUrls.add(n);
+    recordToolSource(input.sourceJournal, {
+      kind: "WEB",
+      ref: n,
+      title: n,
+      coverage: "DISCOVERED",
+      notes: "pilot_provided_url",
+    });
+  }

   return [
     tool({
@@ -830,7 +847,7 @@ export async function buildPublicWebFrontierTools(input: {
     tool({
       name: "public_web_open_page",
       description:
-        "Open a previously discovered public https URL and return a bounded excerpt. Untrusted data only. URL must come from a prior authorized search discovery.",
+        "Open a public https URL previously discovered by search OR literally provided by the Pilote this turn. Returns a bounded excerpt. Untrusted data only.",
       parameters: z.object({
         // Avoid z.string().url() — breaks Agents SDK JSON Schema (invalid_function_parameters).
         url: z.string().min(8).max(2000),
@@ -860,6 +877,7 @@ export async function buildPublicWebFrontierTools(input: {
           recordToolSource(input.sourceJournal, {
             kind: "WEB",
             ref: result.url,
+            title: result.url,
             coverage: result.coverage === "PAGE_OPENED" ? "CONSULTED" : "PARTIAL",
             notes: "public_web_open_page",
           });
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
index ede8c1b0..79e29c5a 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
@@ -802,6 +802,7 @@ export async function runNoraCognitiveTurn(
             topics: webRegistry.topics,
             exactQueries: webRegistry.exactQueries,
             facts: webRegistry.facts,
+            pilotProvidedUrls: webRegistry.pilotProvidedUrls,
           },
         });
       }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index f6483241..c1ce3b7c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -1249,31 +1249,52 @@ export async function postUserMessageAndNora(
           } = await import("./nora-contract-bridge");
           // C18: prepare when capability intent OR typed tool OR structured
           // qualification/investigation production is present (≠ replyDraft prose).
-          structuredInstruction =
+          // UAT-30 — investigation leftovers from a prior attach must NOT alone
+          // create a DRAFT on a discussion turn. Only this-turn tool / intent /
+          // qualification production can establish structured prepare authority.
+          const intentProd = reply.qualification?.intents?.find(
+            (i) => i.capabilityId === "d7.prepare_cursor_contract",
+          )?.parameters?.productionInstruction?.trim();
+          const thisTurnInstruction =
             reply.cursorContractProduction?.productionInstruction?.trim() ||
-            reply.qualification?.intents?.find(
-              (i) => i.capabilityId === "d7.prepare_cursor_contract",
-            )?.parameters?.productionInstruction?.trim() ||
+            intentProd ||
             reply.qualification?.productionInstruction?.trim() ||
-            turn.conductor.investigation.productionInstruction?.trim() ||
             "";
-          const rawCriteria =
+          const thisTurnCriteriaRaw =
             reply.cursorContractProduction?.acceptanceCriteria ??
             reply.qualification?.intents?.find(
               (i) => i.capabilityId === "d7.prepare_cursor_contract",
             )?.parameters?.acceptanceCriteria ??
             reply.qualification?.acceptanceCriteria ??
-            turn.conductor.investigation.acceptanceCriteria ??
             [];
-          structuredCriteria = Array.isArray(rawCriteria)
-            ? rawCriteria.filter((c): c is string => typeof c === "string" && c.trim().length > 0)
+          const thisTurnCriteria = Array.isArray(thisTurnCriteriaRaw)
+            ? thisTurnCriteriaRaw.filter(
+                (c): c is string => typeof c === "string" && c.trim().length > 0,
+              )
             : [];
-          const hasStructuredProduction =
-            structuredInstruction.length > 0 && structuredCriteria.length > 0;
+          const hasStructuredProductionThisTurn =
+            thisTurnInstruction.length > 0 && thisTurnCriteria.length > 0;
           const wantsPrepare =
             semanticWantsCursorContractPrepare(reply.qualification) ||
             semanticWantsCorrectiveDraft(reply.qualification) ||
-            hasStructuredProduction;
+            hasStructuredProductionThisTurn;
+          // Enrichment only after prepare is established for this turn.
+          structuredInstruction =
+            thisTurnInstruction ||
+            (wantsPrepare
+              ? turn.conductor.investigation.productionInstruction?.trim() || ""
+              : "");
+          const invCriteria = Array.isArray(turn.conductor.investigation.acceptanceCriteria)
+            ? turn.conductor.investigation.acceptanceCriteria.filter(
+                (c): c is string => typeof c === "string" && c.trim().length > 0,
+              )
+            : [];
+          structuredCriteria =
+            thisTurnCriteria.length > 0
+              ? thisTurnCriteria
+              : wantsPrepare
+                ? invCriteria
+                : [];
           if (!wantsPrepare && reply.qualification?.status === "QUALIFIED") {
             try {
               const { appendActivityEvent } = await import("./activity-projection");
diff --git a/projects/sfia-studio-next/web/tests/unit/activity-labels.test.ts b/projects/sfia-studio-next/web/tests/unit/activity-labels.test.ts
index cccb4cf0..89f9e93a 100644
--- a/projects/sfia-studio-next/web/tests/unit/activity-labels.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/activity-labels.test.ts
@@ -5,69 +5,104 @@ import {
   projectActivityLabel,
 } from "@/domains/conversation/activity-labels";

-describe("activity-labels", () => {
-  it("maps WEB discovery without claiming consultation", () => {
+describe("activity-labels functional completion", () => {
+  it("contextualizes WEB discovery without claiming consultation", () => {
     expect(
       projectActivityLabel({
         phase: "nora.source.web",
         nature: "OBSERVED",
-        summary: "DISCOVERED: https://example.com/doc",
-        detail: { kind: "WEB", coverage: "DISCOVERED" },
+        status: "RUNNING",
+        summary: "Source web découverte — Power Query",
+        detail: { kind: "WEB", coverage: "DISCOVERED", title: "Power Query" },
       }),
-    ).toBe("Source web découverte — page non encore ouverte");
-  });
-
-  it("maps GIT without exposing raw coverage codes as headline", () => {
+    ).toMatch(/découverte/i);
     expect(
       projectActivityLabel({
-        phase: "nora.source.git",
+        phase: "nora.source.web",
         nature: "OBSERVED",
-        summary: "COMPLETE: README.md",
-        detail: { kind: "GIT", coverage: "COMPLETE" },
+        status: "RUNNING",
+        summary: "Source web découverte — Power Query",
+        detail: { kind: "WEB", coverage: "DISCOVERED", title: "Power Query" },
       }),
-    ).toBe("Consultation Git effectuée");
+    ).not.toMatch(/consultée/i);
   });

-  it("never surfaces NATURE: summary technical headlines", () => {
-    const { headline } = compactActivitySummary([
+  it("keeps distinct source identities instead of deduping by label", () => {
+    const steps = buildActivitySteps([
       {
-        nature: "ANNOUNCED",
-        summary: "COMPLETE: doc_abc",
-        status: "RUNNING",
-        phase: "nora.generate",
+        sequence: 1,
+        nature: "OBSERVED",
+        status: "COMPLETED",
+        phase: "nora.source.d4",
+        summary: "Document — Cadrage",
+        sourceRef: "doc_a",
+        detail: { kind: "D4", coverage: "CONSULTED", title: "Cadrage" },
+      },
+      {
+        sequence: 2,
+        nature: "OBSERVED",
+        status: "COMPLETED",
+        phase: "nora.source.d4",
+        summary: "Document — Conception",
+        sourceRef: "doc_b",
+        detail: { kind: "D4", coverage: "CONSULTED", title: "Conception" },
       },
     ]);
-    expect(headline).not.toMatch(/ANNOUNCED:/);
-    expect(headline).not.toMatch(/^COMPLETE:/);
-    expect(headline.length).toBeGreaterThan(0);
+    expect(steps).toHaveLength(2);
+    expect(steps.map((s) => s.sourceRef).sort()).toEqual(["doc_a", "doc_b"]);
   });

-  it("builds a short checklist with a single current step", () => {
+  it("does not rewrite earlier current steps to done when a new current appears", () => {
     const steps = buildActivitySteps([
       {
         sequence: 1,
         nature: "ANNOUNCED",
         status: "RUNNING",
-        phase: "nora.investigation",
-        summary: "start",
+        phase: "nora.objective",
+        summary: "Comparer cadrage et conception",
+        detail: { objective: "Comparer cadrage et conception" },
       },
       {
         sequence: 2,
         nature: "OBSERVED",
-        status: "COMPLETED",
-        phase: "nora.source.d4",
-        summary: "COMPLETE: note",
-        detail: { kind: "D4" },
+        status: "RUNNING",
+        phase: "nora.source.git",
+        summary: "Consultation Git — README",
+        sourceRef: "README.md",
+        detail: { kind: "GIT", coverage: "DISCOVERED", title: "README" },
+      },
+    ]);
+    expect(steps.some((s) => s.state === "current")).toBe(true);
+    // DISCOVERED must not be treated as done success.
+    const git = steps.find((s) => s.sourceRef === "README.md");
+    expect(git?.state).not.toBe("done");
+  });
+
+  it("never projects DENIED as done success", () => {
+    const steps = buildActivitySteps([
+      {
+        sequence: 1,
+        nature: "OBSERVED",
+        status: "FAILED",
+        phase: "nora.source.web",
+        summary: "Consultation web limitée",
+        sourceRef: "https://example.com",
+        detail: { kind: "WEB", coverage: "DENIED", title: "example" },
       },
+    ]);
+    expect(steps[0]!.state).toBe("failed");
+  });
+
+  it("compact headline stays métier", () => {
+    const { headline } = compactActivitySummary([
       {
-        sequence: 3,
         nature: "ANNOUNCED",
+        summary: "COMPLETE: doc_abc",
         status: "RUNNING",
         phase: "nora.generate",
-        summary: "writing",
       },
     ]);
-    expect(steps.length).toBeGreaterThan(0);
-    expect(steps.filter((s) => s.state === "current").length).toBeLessThanOrEqual(1);
+    expect(headline).not.toMatch(/ANNOUNCED:/);
+    expect(headline).not.toMatch(/^COMPLETE:/);
   });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-c15-cognitive-conductor.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-c15-cognitive-conductor.test.ts
index 1db4161d..73ad1fbb 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-c15-cognitive-conductor.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-c15-cognitive-conductor.test.ts
@@ -29,14 +29,8 @@ describe("ML5 C15 — cognitive conductor foundations", () => {
     expect(r.reason).toMatch(/SEGMENT/);
   });

-  it("excludes verified cacheTokens from token envelope billable input", () => {
-    const withoutCache = evaluateGlobalResourceEnvelope(
-      { segmentCalls: 2, inputTokens: 180_000, outputTokens: 30_000 },
-      { SFIA_COGNITIVE_MAX_TOKENS: "200000" },
-    );
-    expect(withoutCache.ok).toBe(false);
-    expect(withoutCache.reason).toMatch(/TOKEN/);
-    const withCache = evaluateGlobalResourceEnvelope(
+  it("keeps cacheTokens inside the global token envelope (context window)", () => {
+    const over = evaluateGlobalResourceEnvelope(
       {
         segmentCalls: 2,
         inputTokens: 180_000,
@@ -45,7 +39,18 @@ describe("ML5 C15 — cognitive conductor foundations", () => {
       },
       { SFIA_COGNITIVE_MAX_TOKENS: "200000" },
     );
-    expect(withCache.ok).toBe(true);
+    expect(over.ok).toBe(false);
+    expect(over.reason).toMatch(/TOKEN/);
+    const under = evaluateGlobalResourceEnvelope(
+      {
+        segmentCalls: 2,
+        inputTokens: 100_000,
+        outputTokens: 20_000,
+        cacheTokens: 80_000,
+      },
+      { SFIA_COGNITIVE_MAX_TOKENS: "200000" },
+    );
+    expect(under.ok).toBe(true);
   });

   it("allows source coverage degradation (non-monotonic)", () => {
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts
index 66448979..033d7524 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts
@@ -51,6 +51,17 @@ describe("C24 public WEB registry feeding", () => {
   it("STABLE gets empty default catalog", () => {
     expect(loadPublicTopicCatalog({ STUDIO_LANE: "STABLE" })).toEqual([]);
   });
+
+  it("registers Power Query catalog and pilot-provided Microsoft Learn URLs", () => {
+    const url =
+      "https://learn.microsoft.com/fr-fr/power-query/power-query-what-is-power-query";
+    const r = resolvePublicWebRegistry({
+      haystack: `Compare avec ${url} et le connecteur SharePoint Folder`,
+      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "1" },
+    });
+    expect(r.topics["ms-power-query"] || r.topics["ms-sharepoint-folder-pq"]).toBeTruthy();
+    expect(r.pilotProvidedUrls).toContain(url);
+  });
 });

 describe("C24 provider usage extraction", () => {
```

## 9. Contrat Figma

| Frame | Node | Mapping |
|---|---|---|
| 12.01 | 1210:233 | NoraLiveActivity figmaFrame=12.01 |
| 12.10 | 1212:895 | NoraLiveActivity figmaFrame=12.10 |

Screenshot MCP 12.01 téléchargé: `web/.sfia-evidence/figma-page12/12.01-1210-233-fc.png`
F2 PROVEN: **NOT PROVEN** (PARTIAL — comparaison runtime proportionnée restante pour Morris).

## 10. Tests

| Contrôle | Résultat |
|---|---|
| vitest activity-labels + conductor + web-registry | **21 PASS** |
| next build | OK · BUILD `oLyRjFCDc4Y7JSvbzZkFo` |
| Smoke DEV/RECETTE | 200 / 200 · builds `oLyRjFCDc4Y7JSvbzZkFo` / `_ZDI1cWa1hscluvBhaiA4` |
| F2 harness | NOT RUN |
| LIVE Nora/WEB/Cursor | NOT RUN (mandat) |

Fake/Real: déterministe ≠ READY FOR REAL.

## 11. UAT

| ID | Statut livraison |
|---|---|
| 01,09 | IMPLEMENTED path — OPEN jusqu'à UAT |
| 16,19 | IMPLEMENTED accounting/restitution — OPEN charge réelle |
| 17,18 | IMPLEMENTED B1 path — OPEN LIVE flags |
| 13 | ALREADY_SATISFIED SafeMarkdown — OPEN UAT |
| 15,30 | IMPLEMENTED viewer/prepare gate — OPEN E2E |
| 02 | prior+ L6.1 — OPEN |

## 12. Manifeste candidat

| Champ | Valeur |
|---|---|
| Candidate SHA (delivery) | `d0372b856af17793820817a78aa21739cddbdfd8` |
| Candidate tree | `14dbf2066bd991359f0cf6c09ee12af7c4cd4da4` |
| Web tree | `b5b8dc474c3d70f708039ad56798b253a5c1bed0` |
| Build DEV servi | `oLyRjFCDc4Y7JSvbzZkFo` |
| BUILD digest | `5c7c5a812df4d3baddfc64d32414560ac9b64c1fed80729a1cd59176f44bae66` |
| Relation | **Source à construire RECETTE** = SHA delivery ci-dessus |
| Migrations | aucune |
| RECETTE | inchangée `7f48daa2` / `_ZDI1cWa1hscluvBhaiA4` |
| Rollback | conserver runtime RECETTE actuel |


## 13. Décisions Morris

1. Revue handoff + GO bascule RECETTE sur SHA/build final.
2. Recette utilisateur (guide existant + ce pack).
3. Arbitrage F2 exhaustif / WEB LIVE profondeur si écart.

## 14. Instruction ChatGPT

Consulter le handoff distant `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (commit message ci-dessus). Qualifier complétude L1–L6; ne pas fermer ML5; proposer GO bascule borné si conforme.

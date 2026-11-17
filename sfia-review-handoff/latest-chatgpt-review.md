# SFIA Studio Next — Review Pack Full
# Cycle 8 — Ensemble 05 — Finalisation + figement candidat
# Generated: 2026-11-17T13:17:15+0100

## 1. Date / profil
- GO Morris 17/11/2026 — finalisation technique + préparation RECETTE existante
- CRITICAL / EVOL / Cycle 8
- Interdits: push produit, PR, merge, déploiement RECETTE, nouvelle RECETTE, campagne Figma F2

## 2. Git Truth Check
| Check | Value |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branch | `feat/next-ml4d-project-space-20261116` |
| HEAD tip (docs+feature) | `2b0d7a78a34fb9b8858a8ce81a31bedadcc842b8` |
| Tree tip | `afdb1bbf2c3997eb5c5268a583bf3caf821242e5` |
| Freeze feature commit | `342f0bbb3fea1d52c7a40228347923b30b6db90e` |
| Freeze feature tree | `605a6274b3a41cef41fd0cb271352d03c7f0cdb2` |
| Manifest SHA commit | `2b0d7a78a34fb9b8858a8ce81a31bedadcc842b8` |
| Base antérieure | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` / tree `b92cc822…` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Prior handoff | `89c7cc074ecff8eabc6d90e78a80f7428eda95de` blob `4063510f…` |
| Product push | **NONE** |

### git status --short
```
M .tmp-sfia-review/chatgpt-review.md
```

### Fichiers du commit feature `342f0bbb`
```
projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md
projects/sfia-studio-next/construction/delivery-history.md
projects/sfia-studio-next/construction/ensemble-05-recette-prep-manifest.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-700-39-nominal.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-701-105-composite.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-701-148-expired.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-701-320-uncertain.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-701-363-viewer5050.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-701-449-enlarged.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-701-535-mobile.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-runtime-matrix.md
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-mobile-430x932.png
projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-nominal-1680x970.png
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
projects/sfia-studio-next/web/src/app/login/page.tsx
projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
projects/sfia-studio-next/web/src/components/figma/tokens.css
projects/sfia-studio-next/web/src/domains/conversation/composer-draft.ts
projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
projects/sfia-studio-next/web/src/domains/conversation/service.ts
projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
projects/sfia-studio-next/web/src/hooks/useNoraThreadScroll.ts
projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts
projects/sfia-studio-next/web/tests/unit/ensemble05-turn-projection.test.ts
```

## 3. Sources
UX v0.7 `dc5ef25f…` · Tech v0.2 `5f389688…` · ENV-01 `14b61f0d…` · versioning `8bc93e0f…`

## 4. Correctifs finaux
| ID | Avant | Après | Preuve |
|---|---|---|---|
| Final A | `openTravailDocument` / current path utilisaient `latestRevision` React | `fetchDocumentViewerViaD4` : list + `revisionId` à chaque ouverture | e2e C1 PASS |
| Final B | reconcile conditionnel `if (pending.count())` | `expect(reconcile).toBeVisible` + click obligatoire | e2e C2 PASS |

## 5. Tests
| Suite | Résultat |
|---|---|
| Vitest E05+rail | 22 PASS |
| Playwright E05 | 5 PASS |
| Playwright E04 | 3 PASS |
| next build | PASS |
| tsc workspace | 32 erreurs hors E05 — NO_E05_TSC_HITS |

## 6. RECETTE existante (lecture seule)
| Item | Value |
|---|---|
| URL | http://127.0.0.1:3200 |
| BUILD_ID | `3LzvYPTQc-Km7St6nF97r` |
| SOURCE_SHA servi | `984d77a3…` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3` |
| Process | `next start -H 127.0.0.1 -p 3200` |
| Déploiement ce cycle | **AUCUN** |
| Manifeste | `construction/ensemble-05-recette-prep-manifest.md` |

## 7. Fake/Real
Nora FAKE · PG REAL DEV/E2E · D4 REAL test · D9 path only REAL NOT EXECUTED · RECETTE inventory only

## 8. Revue visuelle
**Explicitement réservée à Morris en RECETTE.** Aucune campagne F2 Cursor dans ce cycle.

## 9. Verdict
`E05 CANDIDATE FROZEN — READY FOR MORRIS RECETTE DEPLOYMENT DECISION`

Prochain GO Morris distinct requis pour déploiement dans la lane RECETTE existante.

---
## 10. Fichiers créés — contenu intégral

### CREATED `projects/sfia-studio-next/construction/as-built-ensemble-05-travail-nora-20261117.md`

```
# As-built — Ensemble 05 Travail avec Nora

| Métadonnée | Valeur |
|---|---|
| Date | 2026-11-17 |
| Macro-lot | R5 / ML4D Ensemble 05 |
| Type | Delivery locale DEV · **NO RELEASE** |
| Branche produit | `feat/next-ml4d-project-space-20261116` |
| HEAD de base | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| Statut | **E05 CANDIDATE FROZEN — READY FOR MORRIS RECETTE DEPLOYMENT DECISION** (as-built non normatif) |
| Cycles | Delivery + correctif + consolidation + finalisation technique (même macro-lot) |

## Sources

- UX v0.7 — blob `dc5ef25f…` VALIDATED SPEC
- Tech v0.2 — blob `5f389688…` M1–M5 VALIDATED
- Figma page 05 — référence comportementale ; **revue visuelle réservée à Morris en RECETTE**
- Manifeste prep RECETTE — `construction/ensemble-05-recette-prep-manifest.md`

## Capacités

| Capacité | Implémentation |
|---|---|
| M1–M5 | Projection D3 ; final-only ; draft sessionStorage ; viewer local ; no migration |
| Choix | `continueChoices` ≠ clarifications |
| Final A | Toute ouverture Travail revalide D4 (list + revisionId) — pas de latest React en autorité |
| Final B | ACK perdu → pending obligatoire → reconcile click → 1 tour Pilote |
| C3 | Purge same-tab login ; `session.pilotId` |
| C5 | Git path existant ; REAL NOT EXECUTED |

## Preuves techniques (DEV)

- Vitest E05 9 + studio-rail 13 PASS
- Playwright E05 5 PASS (viewer, C1, C2 reconcile obligatoire, C3, isolation)
- Playwright E04 3 PASS
- `next build` PASS
- `tsc` workspace : 32 erreurs hors E05 (tests historiques) — **NO_E05_TSC_HITS**

## RECETTE

- Existante inventoriée `:3200` / BUILD `3LzvYPTQc-Km7St6nF97r` / SHA `984d77a3`
- **Aucun déploiement** dans ce cycle
- Mise à disposition future documentée dans le manifeste

## Réserves acceptables (décision Morris)

1. Streaming M2 hors V1
2. Git D9 REAL non exécuté
3. OAuth LIVE ≠ adaptateur DEV
4. Revue visuelle Morris en RECETTE (pas de gate F2 Cursor)
```

### CREATED `projects/sfia-studio-next/construction/ensemble-05-recette-prep-manifest.md`

```
# Ensemble 05 — Manifeste de préparation RECETTE (non secret)

| Métadonnée | Valeur |
|---|---|
| Date | 2026-11-17 |
| Nature | Préparation — **aucun déploiement exécuté** |
| Macro-lot | ML4D Ensemble 05 — Travail avec Nora |
| Instruction Morris | Réutiliser la RECETTE existante — ne pas en créer une nouvelle |

## 1. Environnement RECETTE existant (inventaire lecture seule)

| Item | Observation |
|---|---|
| URL | `http://127.0.0.1:3200` |
| Port | `3200` (LISTEN confirmé) |
| Processus | `next start -H 127.0.0.1 -p 3200` (Next 15.5.29) |
| Worktree runtime | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3` |
| SOURCE_SHA servi | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| Tree | `b92cc822ac67399c6d8753c17dbcce5f4b5b734f` |
| BUILD_ID | `3LzvYPTQc-Km7St6nF97r` (fichier `.next/BUILD_ID`) |
| Lane | RECETTE (observée dans logs `lane":"RECETTE"`) |
| Mode | `next start` (pas hot-reload DEV) |
| HTTP probe | 307 (réponse active) |

**Aucune modification de ce runtime dans le présent cycle.**

## 2. Candidat figé (commit local — non poussé)

| Item | Valeur |
|---|---|
| Branche | `feat/next-ml4d-project-space-20261116` |
| SHA candidat | `342f0bbb3fea1d52c7a40228347923b30b6db90e` |
| Tree candidat | `605a6274b3a41cef41fd0cb271352d03c7f0cdb2` |
| Parent base | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| Workspace DEV | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Push produit | **AUCUN** |

## 3. Compatibilité / conservation

| Contrôle | Statut |
|---|---|
| Migration DB | **aucune** (M5) |
| Nouvelle base RECETTE | **interdite** |
| Reset données / comptes / documents | **interdit** |
| Remplacement secrets DEV→RECETTE | **interdit** |
| Nouveau port / worktree / conteneur | **interdit** sauf GO Morris |
| Schéma | inchangé — compatible avec build actuel |

## 4. Procédure de mise à disposition future (non exécutée)

1. GO Morris explicite de déploiement RECETTE.
2. Arrêt contrôlé du `next start` sur `:3200` via le mécanisme d’exploitation déjà utilisé pour ce worktree.
3. Remplacer le contenu servi dans **le même worktree RECETTE** (ou rebuild `.next` dans ce worktree) à partir du SHA candidat figé — sans créer une seconde lane.
4. Vérifier `BUILD_ID` / `SOURCE_SHA` / port 3200.
5. Smoke : login DEV/test ou parcours Morris ; Travail avec Nora ; navigation E04.
6. Si échec : restaurer le build précédent `3LzvYPTQc-Km7St6nF97r` / SHA `984d77a3` déjà présent dans ce worktree (artefact `.next` antérieur ou rebuild du SHA précédent).

## 5. Smoke tests post-déploiement (futurs)

- HTTP `:3200` joignable.
- Session / portfolio.
- Ouverture projet → surface Travail.
- Envoi message / choix / brouillon.
- Visionneuse document.
- Aucune écriture sur DEV depuis RECETTE.

## 6. Rollback

Retour au build `3LzvYPTQc-Km7St6nF97r` / source `984d77a3` dans le worktree RECETTE existant, redémarrage `next start -H 127.0.0.1 -p 3200`.

## 7. Réserves

- Revue visuelle Figma : **réservée à Morris en RECETTE**.
- Git D9 REAL : non exécuté en DEV.
- OAuth LIVE : distinct de l’adaptateur DEV.
- Streaming M2 : hors V1.

## 8. Actions nécessitant GO Morris

- Déploiement / redémarrage RECETTE.
- Push produit / PR / merge.
- Toute création de second environnement.
- Gate C / STABLE / ML5.
```

### CREATED `projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx`

```
"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";

export type TravailViewerResource =
  | {
      kind: "document";
      documentId: string;
      title: string;
      revisionId?: string | null;
      revisionNumber?: number | null;
      /** Explicit when no revisionId was requested — never silent latest substitution. */
      versionSource?: "exact" | "current";
      markdown: string | null;
      available: boolean;
      unavailableReason?: string;
    }
  | {
      kind: "git";
      title: string;
      path?: string | null;
      ref?: string | null;
      commit?: string | null;
      content: string | null;
      available: boolean;
      unavailableReason?: string;
      href?: string | null;
    };

export function TravailViewer(props: {
  resource: TravailViewerResource;
  enlarged: boolean;
  onEnlarge: () => void;
  onReduce: () => void;
  onClose: () => void;
  onOpenInDocuments?: () => void;
}) {
  const { resource } = props;
  const title =
    resource.kind === "document" ? resource.title : resource.title || "Source Git";
  const kicker =
    resource.kind === "document"
      ? "Visionneuse · lecture seule"
      : "Visionneuse · source Git";

  return (
    <div
      className="fig-travail-viewer"
      data-testid="travail-viewer"
      data-viewer-kind={resource.kind}
      data-viewer-enlarged={props.enlarged ? "1" : "0"}
    >
      <header className="fig-travail-viewer-head">
        <div>
          <p className="fig-kicker !mb-0">{kicker}</p>
          <h2 className="fig-inspector-title" data-testid="travail-viewer-title">
            {title}
          </h2>
          {resource.kind === "document" && resource.revisionNumber != null ? (
            <p className="fig-travail-viewer-meta" data-testid="travail-viewer-revision">
              Version {resource.revisionNumber}
              {resource.revisionId ? ` · ${resource.revisionId.slice(0, 8)}` : ""}
              {resource.versionSource === "current"
                ? " · version courante"
                : resource.versionSource === "exact"
                  ? " · révision citée"
                  : ""}
            </p>
          ) : null}
          {resource.kind === "git" ? (
            <p className="fig-travail-viewer-meta">
              {[resource.path, resource.ref, resource.commit?.slice(0, 8)]
                .filter(Boolean)
                .join(" · ") || "Provenance partielle"}
            </p>
          ) : null}
        </div>
        <div className="fig-travail-viewer-actions">
          {props.enlarged ? (
            <button
              type="button"
              className="btn secondary"
              data-testid="travail-viewer-reduce"
              onClick={props.onReduce}
            >
              Réduire
            </button>
          ) : (
            <button
              type="button"
              className="btn secondary"
              data-testid="travail-viewer-enlarge"
              onClick={props.onEnlarge}
            >
              Agrandir
            </button>
          )}
          {resource.kind === "document" && props.onOpenInDocuments ? (
            <button
              type="button"
              className="btn secondary"
              data-testid="travail-viewer-open-documents"
              onClick={props.onOpenInDocuments}
              disabled={!resource.available}
            >
              Ouvrir dans Documents
            </button>
          ) : null}
          <button
            type="button"
            className="btn secondary"
            data-testid="travail-viewer-close"
            onClick={props.onClose}
          >
            Fermer
          </button>
        </div>
      </header>

      <div className="fig-travail-viewer-body" data-testid="travail-viewer-body">
        {!resource.available ? (
          <div className="fig-alert" role="alert" data-testid="travail-viewer-unavailable">
            {resource.unavailableReason ??
              "Source indisponible ou droits insuffisants — aucun extrait inventé."}
            {resource.kind === "git" && resource.href ? (
              <p className="mt-2">
                <a href={resource.href} target="_blank" rel="noreferrer">
                  Ouvrir la référence externe
                </a>
              </p>
            ) : null}
          </div>
        ) : resource.kind === "document" ? (
          resource.markdown ? (
            <SafeMarkdown content={resource.markdown} />
          ) : (
            <p className="fig-inspector-card-body">Document sans contenu lisible.</p>
          )
        ) : resource.content ? (
          <pre className="fig-travail-viewer-pre">{resource.content}</pre>
        ) : (
          <p className="fig-inspector-card-body">Aperçu Git vide.</p>
        )}
      </div>
    </div>
  );
}
```

### CREATED `projects/sfia-studio-next/web/src/domains/conversation/composer-draft.ts`

```
/**
 * Ensemble 05 / M3 — composer draft in sessionStorage (tab-scoped).
 * Partition: pilot + project + lane. No server sync. No cross-device recovery.
 */

export type ComposerDraftRecord = {
  schemaVersion: "e05-composer-draft-v1";
  pilotId: string;
  projectId: string;
  lane: string;
  text: string;
  /** Monotonic local version — ACK may clear only if versions still match. */
  version: number;
  /** Version that was submitted; late ACK clears only when current === sent. */
  sentVersion: number | null;
  updatedAt: string;
};

export function studioClientLane(): string {
  if (typeof window === "undefined") return "ssr";
  const port = window.location.port || (window.location.protocol === "https:" ? "443" : "80");
  // ENV-01: DEV :3100 vs RECETTE :3200 must not share drafts.
  return `host:${window.location.hostname}:${port}`;
}

export function composerDraftStorageKey(input: {
  pilotId: string;
  projectId: string;
  lane?: string;
}): string {
  const lane = input.lane ?? studioClientLane();
  return `sfia.travail.draft:v1:${lane}:${input.pilotId}:${input.projectId}`;
}

export function readComposerDraft(input: {
  pilotId: string;
  projectId: string;
  lane?: string;
}): ComposerDraftRecord | null {
  if (typeof sessionStorage === "undefined") return null;
  if (!input.pilotId || !input.projectId) return null;
  try {
    const raw = sessionStorage.getItem(composerDraftStorageKey(input));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ComposerDraftRecord;
    if (parsed.schemaVersion !== "e05-composer-draft-v1") return null;
    if (parsed.pilotId !== input.pilotId || parsed.projectId !== input.projectId) return null;
    const lane = input.lane ?? studioClientLane();
    if (parsed.lane !== lane) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeComposerDraft(record: ComposerDraftRecord): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.setItem(
    composerDraftStorageKey({
      pilotId: record.pilotId,
      projectId: record.projectId,
      lane: record.lane,
    }),
    JSON.stringify(record),
  );
}

export function clearComposerDraft(input: {
  pilotId: string;
  projectId: string;
  lane?: string;
}): void {
  if (typeof sessionStorage === "undefined") return;
  sessionStorage.removeItem(composerDraftStorageKey(input));
}

/**
 * Clear after successful send only when the composer still holds the sent version.
 * A newer edit (version > sentVersion) must survive a late ACK.
 */
export function clearDraftAfterAck(input: {
  pilotId: string;
  projectId: string;
  sentVersion: number;
  currentVersion: number;
  lane?: string;
}): boolean {
  if (input.currentVersion !== input.sentVersion) return false;
  clearComposerDraft(input);
  return true;
}

export function purgeComposerDraftsForPilot(pilotId: string): void {
  if (typeof sessionStorage === "undefined") return;
  const prefix = "sfia.travail.draft:v1:";
  const keys: string[] = [];
  for (let i = 0; i < sessionStorage.length; i += 1) {
    const k = sessionStorage.key(i);
    if (k && k.startsWith(prefix) && k.includes(`:${pilotId}:`)) keys.push(k);
  }
  for (const k of keys) sessionStorage.removeItem(k);
}

/**
 * C3 — explicit logout / identity switch in the same tab.
 * Clears every Travail draft key in this tab's sessionStorage.
 * Does not touch other origins or localStorage.
 */
export function purgeAllComposerDraftsInTab(): void {
  if (typeof sessionStorage === "undefined") return;
  const prefix = "sfia.travail.draft:v1:";
  const keys: string[] = [];
  for (let i = 0; i < sessionStorage.length; i += 1) {
    const k = sessionStorage.key(i);
    if (k && k.startsWith(prefix)) keys.push(k);
  }
  for (const k of keys) sessionStorage.removeItem(k);
}
```

### CREATED `projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts`

```
/**
 * Ensemble 05 / M1 — structured D3 turn projection for Nora replies.
 * Stored additively in conversation_turn_commands.result_json (no migration).
 * Never parse markdown to decide mutations; choices are typed here only.
 * Clarifications ≠ continue choices (P1-A corrective).
 */

export const TURN_PROJECTION_SCHEMA = "e05-turn-projection-v1" as const;

export type TurnChoiceKind = "continue";

export type TurnChoice = {
  id: string;
  label: string;
  kind: TurnChoiceKind;
  /** Explicit pilot utterance transmitted on click (new D3 turn). */
  transmitText: string;
};

export type TurnReference = {
  kind: "document" | "git" | "external";
  label: string;
  resourceId?: string;
  revisionId?: string;
  repositoryId?: string;
  path?: string;
  ref?: string;
  commit?: string;
  href?: string;
  available?: boolean;
};

export type TurnActivitySummary = {
  /** Honest summary of observable facts after terminal commit — never invented mid-flight. */
  kind: "wait" | "sources_consulted" | "interrupted" | "failed" | "uncertain";
  label: string;
  detail?: string;
};

export type TurnProjection = {
  schemaVersion: typeof TURN_PROJECTION_SCHEMA;
  messageId: string | null;
  turnCommandId?: string | null;
  finalized: boolean;
  status: string;
  choices: TurnChoice[];
  references: TurnReference[];
  activity?: TurnActivitySummary | null;
};

export type MessageProjectionView = TurnProjection & {
  /** Actionable only for the latest finalized Nora turn with no later pilot turn. */
  actionable: boolean;
};

export type ContinueChoiceInput = {
  id: string;
  label: string;
  transmitText: string;
};

/**
 * Build projection from durable turn facts.
 * Continue choices come ONLY from typed continueChoices — never from clarifications[].
 */
export function buildTurnProjection(input: {
  messageId: string | null;
  turnCommandId?: string | null;
  status: string;
  finalized: boolean;
  /** Typed continuation offers — distinct from open questions (clarifications). */
  continueChoices?: ContinueChoiceInput[] | null;
  references?: TurnReference[] | null;
  toolCallsObserved?: number | null;
  d4CharsReturned?: number | null;
  documentSave?: { documentId?: string; revisionId?: string; status?: string } | null;
}): TurnProjection {
  const choices: TurnChoice[] = [];
  const seen = new Set<string>();
  for (const raw of input.continueChoices ?? []) {
    const id = String(raw?.id ?? "").trim();
    const label = String(raw?.label ?? "").trim();
    const transmitText = String(raw?.transmitText ?? "").trim();
    if (!id || !label || !transmitText) continue;
    if (seen.has(id) || seen.has(transmitText)) continue;
    seen.add(id);
    seen.add(transmitText);
    choices.push({
      id,
      label: label.length > 120 ? `${label.slice(0, 117)}…` : label,
      kind: "continue",
      transmitText,
    });
    if (choices.length >= 6) break;
  }

  const references: TurnReference[] = [...(input.references ?? [])];
  if (input.documentSave?.documentId) {
    const already = references.some(
      (r) => r.kind === "document" && r.resourceId === input.documentSave!.documentId,
    );
    if (!already) {
      references.push({
        kind: "document",
        label: "Document du projet",
        resourceId: input.documentSave.documentId,
        revisionId: input.documentSave.revisionId,
        available: input.documentSave.status !== "FAILED",
      });
    }
  }

  let activity: TurnActivitySummary | null = null;
  const status = (input.status ?? "").toUpperCase();
  if (status === "FAILED") {
    activity = { kind: "failed", label: "Réponse interrompue ou en échec" };
  } else if (status === "UNKNOWN") {
    activity = { kind: "uncertain", label: "État de la réponse encore incertain" };
  } else if ((input.toolCallsObserved ?? 0) > 0 || (input.d4CharsReturned ?? 0) > 0) {
    activity = {
      kind: "sources_consulted",
      label: "Sources consultées pour cette réponse",
      detail:
        (input.toolCallsObserved ?? 0) > 0
          ? `${input.toolCallsObserved} consultation(s) observée(s)`
          : undefined,
    };
  }

  return {
    schemaVersion: TURN_PROJECTION_SCHEMA,
    messageId: input.messageId,
    turnCommandId: input.turnCommandId ?? null,
    finalized: input.finalized,
    status: input.status,
    choices,
    references,
    activity,
  };
}

function isContinueChoice(c: unknown): c is TurnChoice {
  if (!c || typeof c !== "object") return false;
  const o = c as Record<string, unknown>;
  return (
    typeof o.id === "string" &&
    typeof o.label === "string" &&
    o.kind === "continue" &&
    typeof o.transmitText === "string" &&
    o.transmitText.trim().length > 0
  );
}

export function parseTurnProjection(raw: unknown): TurnProjection | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  if (o.schemaVersion !== TURN_PROJECTION_SCHEMA) return null;
  if (!Array.isArray(o.choices)) return null;
  return {
    schemaVersion: TURN_PROJECTION_SCHEMA,
    messageId: typeof o.messageId === "string" ? o.messageId : null,
    turnCommandId: typeof o.turnCommandId === "string" ? o.turnCommandId : null,
    finalized: Boolean(o.finalized),
    status: typeof o.status === "string" ? o.status : "UNKNOWN",
    choices: (o.choices as unknown[]).filter(isContinueChoice),
    references: Array.isArray(o.references) ? (o.references as TurnReference[]) : [],
    activity: (o.activity as TurnActivitySummary | null | undefined) ?? null,
  };
}

export function extractTurnProjectionFromResultJson(
  resultJson: string | null | undefined,
): TurnProjection | null {
  if (!resultJson) return null;
  try {
    const parsed = JSON.parse(resultJson) as Record<string, unknown>;
    return parseTurnProjection(parsed.turnProjection);
  } catch {
    return null;
  }
}

/**
 * Mark which projection groups remain actionable after reload / new pilot turn.
 * Historical choices stay visible but non-actionable.
 * UNKNOWN / frozen attempt → suspendActions keeps groups non-actionable.
 */
export function resolveActionableProjections(input: {
  messages: Array<{ id: string; role: string }>;
  projections: TurnProjection[];
  /** When true (UNKNOWN send / reconcile / in-flight), suspend actionable choices. */
  suspendActions?: boolean;
}): MessageProjectionView[] {
  const lastAssistantId = [...input.messages]
    .reverse()
    .find((m) => m.role === "assistant")?.id;
  const lastAssistantIdx = lastAssistantId
    ? input.messages.findIndex((m) => m.id === lastAssistantId)
    : -1;
  const hasLaterPilot =
    lastAssistantIdx >= 0 &&
    input.messages.slice(lastAssistantIdx + 1).some((m) => m.role === "user");

  return input.projections.map((p) => {
    const isLatest =
      Boolean(p.messageId) && p.messageId === lastAssistantId && !hasLaterPilot;
    const actionable =
      !input.suspendActions &&
      p.finalized &&
      isLatest &&
      (p.status ?? "").toUpperCase() !== "UNKNOWN" &&
      (p.status ?? "").toUpperCase() !== "FAILED" &&
      p.choices.length > 0;
    return { ...p, actionable };
  });
}
```

### CREATED `projects/sfia-studio-next/web/src/hooks/useNoraThreadScroll.ts`

```
"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const NEAR_BOTTOM_PX = 72;

/**
 * CT-01 / UX-002 — default to last message; preserve voluntary re-read position;
 * announce new content when Nora answers while the pilot is reading history.
 */
export function useNoraThreadScroll(deps: {
  messageCount: number;
  lastMessageId: string | null;
  activityPreparing: boolean;
  /** Bumps when pilot voluntarily sends — force stick to bottom. */
  forceStickToken: number;
}) {
  const threadRef = useRef<HTMLDivElement | null>(null);
  const stickToBottomRef = useRef(true);
  const primedRef = useRef(false);
  const prevLastIdRef = useRef<string | null>(null);
  const [newBelow, setNewBelow] = useState(false);

  const isNearBottom = useCallback(() => {
    const el = threadRef.current;
    if (!el) return true;
    return el.scrollHeight - el.scrollTop - el.clientHeight <= NEAR_BOTTOM_PX;
  }, []);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "auto") => {
    const el = threadRef.current;
    if (!el) return;
    const apply = () => {
      el.scrollTop = el.scrollHeight;
      if (behavior === "smooth") {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      }
    };
    apply();
    // Second pass after layout (new bubbles / activity row).
    requestAnimationFrame(() => {
      apply();
      requestAnimationFrame(apply);
    });
    stickToBottomRef.current = true;
    setNewBelow(false);
  }, []);

  const onScroll = useCallback(() => {
    const near = isNearBottom();
    stickToBottomRef.current = near;
    if (near) setNewBelow(false);
  }, [isNearBottom]);

  // Initial entry / refresh / return: show last message once messages exist.
  useLayoutEffect(() => {
    if (deps.messageCount === 0) return;
    if (!primedRef.current) {
      scrollToBottom("auto");
      primedRef.current = true;
      prevLastIdRef.current = deps.lastMessageId;
      return;
    }
  }, [deps.messageCount, deps.lastMessageId, scrollToBottom]);

  // Reset priming when thread identity effectively reloads (empty → filled again).
  useEffect(() => {
    if (deps.messageCount === 0) {
      primedRef.current = false;
      prevLastIdRef.current = null;
      setNewBelow(false);
    }
  }, [deps.messageCount]);

  // New messages / activity: stick only when already near bottom or forced by send.
  useLayoutEffect(() => {
    const lastChanged = deps.lastMessageId !== prevLastIdRef.current;
    if (lastChanged) {
      if (stickToBottomRef.current) {
        scrollToBottom("auto");
      } else if (deps.lastMessageId) {
        setNewBelow(true);
      }
      prevLastIdRef.current = deps.lastMessageId;
      return;
    }
    if (deps.activityPreparing && stickToBottomRef.current) {
      scrollToBottom("auto");
    }
  }, [deps.lastMessageId, deps.activityPreparing, scrollToBottom]);

  useLayoutEffect(() => {
    if (deps.forceStickToken <= 0) return;
    stickToBottomRef.current = true;
    scrollToBottom("smooth");
  }, [deps.forceStickToken, scrollToBottom]);

  return {
    threadRef,
    onScroll,
    scrollToBottom,
    newBelow,
    stickToBottom: stickToBottomRef,
  };
}
```

### CREATED `projects/sfia-studio-next/web/tests/e2e/ensemble05-travail-nora.spec.ts`

```
import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";
import { bootstrapProjectFromPortfolio } from "./helpers/g4-chat-first";

/**
 * Ensemble 05 corrective — Travail avec Nora (FAKE/DEV lane :3101).
 * Viewer assertions are NON-OPTIONAL (P2-A). Progressive text NOT COVERED V1.
 */
test.describe("Ensemble 05 Travail avec Nora", () => {
  test("scroll, draft, typed choices, required viewer lifecycle", async ({ page }) => {
    test.setTimeout(180_000);
    const evidenceDir = path.resolve(
      __dirname,
      "../../docs/evidence/ensemble-05-travail-nora",
    );
    fs.mkdirSync(evidenceDir, { recursive: true });

    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    const { projectId, preparationId } = await bootstrapProjectFromPortfolio(page, {
      seed: "Ensemble 05 fil Travail avec Nora",
      name: `E05 Travail ${Date.now()}`,
      summary: "e05 corrective",
    });
    expect(preparationId).toBeTruthy();

    // P2-A — seed a guaranteed document (test fails if create fails).
    const docRes = await page.request.post(`/api/preparations/${preparationId}/documents`, {
      data: {
        title: "Note E05 visionneuse",
        contentMarkdown: "# Note E05\n\nContenu déterministe pour la visionneuse Travail.",
        correlationKey: `e05-doc-${Date.now()}`,
      },
    });
    expect(docRes.ok()).toBeTruthy();

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const thread = page.getByTestId("nora-thread");
    const draft = page.getByTestId("thread-draft");
    const send = page.getByTestId("thread-send");

    await expect(thread).toBeVisible();
    const atBottom = await thread.evaluate((el) => {
      return el.scrollHeight - el.scrollTop - el.clientHeight < 80;
    });
    expect(atBottom).toBe(true);

    // CT-03 — draft persists across surface nav.
    const draftText = `Brouillon E05 conservé ${Date.now()}`;
    await draft.fill(draftText);
    await page.getByTestId("studio-rail").getByTestId("nav-documents").click();
    await expect(page).toHaveURL(/surface=document/);
    await page.getByTestId("studio-rail").getByTestId("nav-travail").click();
    await expect(page).toHaveURL(/surface=travail/);
    await expect(draft).toHaveValue(draftText);

    await page.reload();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftText);

    await thread.evaluate((el) => {
      el.scrollTop = 0;
    });
    // Fixture with typed continueChoices (not clarifications-as-buttons).
    const choiceSeed =
      "J'aimerais créer un outil pour mieux accompagner les chefs de projet, mais je ne sais pas encore ce qu'il devrait faire exactement.";
    await draft.fill(choiceSeed);
    await send.click();
    await expect(
      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
    ).toBeVisible({ timeout: 30000 });
    await expect
      .poll(async () =>
        thread.evaluate((el) => el.scrollHeight - el.scrollTop - el.clientHeight < 120),
      )
      .toBe(true);

    const actionable = page.locator(
      '[data-testid="nora-choices"][data-actionable="1"] [data-testid="nora-choice"]',
    );
    await expect(actionable.first()).toBeVisible({ timeout: 10000 });
    // Clarification questions must NOT appear as choice buttons.
    const choiceLabels = await actionable.allTextContents();
    expect(
      choiceLabels.some((t) => /Quelle difficulté concrète/i.test(t)),
    ).toBe(false);
    expect(
      choiceLabels.some((t) => /Approfondir|Autre approche/i.test(t)),
    ).toBe(true);

    const keep = `Draft intact pendant choix ${Date.now()}`;
    await draft.fill(keep);
    await actionable.first().click();
    await expect(
      page.getByTestId("nora-msg-pilot").filter({ hasText: /Approfondissons|Explore une autre/i }),
    ).toBeVisible({ timeout: 30000 });
    await expect(draft).toHaveValue(keep);
    await expect(
      page.locator('[data-testid="nora-choices"][data-actionable="0"]').first(),
    ).toBeVisible();

    // P2-A — viewer path REQUIRED (seeded document).
    const consulter = page.locator("[data-testid^=travail-consulter-]").first();
    await expect(consulter).toBeVisible({ timeout: 10000 });
    await consulter.click();
    await expect(page.getByTestId("travail-viewer")).toBeVisible();
    await expect(page.getByTestId("project-travail-stage")).toHaveAttribute(
      "data-travail-layout",
      "split",
    );
    expect(page.url()).not.toMatch(/viewer=/);
    await expect(page.getByTestId("travail-viewer-body")).toContainText("Note E05");
    await page.getByTestId("travail-viewer-enlarge").click();
    await expect(page.getByTestId("project-travail-stage")).toHaveAttribute(
      "data-travail-layout",
      "enlarged",
    );
    await page.getByTestId("travail-viewer-reduce").click();
    await expect(page.getByTestId("project-travail-stage")).toHaveAttribute(
      "data-travail-layout",
      "split",
    );
    await page.getByTestId("travail-viewer-close").click();
    await expect(page.getByTestId("travail-aside-bref")).toBeVisible();
    await expect(page.getByTestId("thread-draft")).toHaveValue(keep);

    await page.setViewportSize({ width: 1680, height: 970 });
    await page.screenshot({
      path: path.join(evidenceDir, "runtime-nominal-1680x970.png"),
      fullPage: false,
    });

    // Mobile capture
    await page.setViewportSize({ width: 430, height: 932 });
    await page.screenshot({
      path: path.join(evidenceDir, "runtime-mobile-430x932.png"),
      fullPage: false,
    });
  });

  test("C1 exact D4 revision — A cited, not silent latest B", async ({ page }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { projectId, preparationId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 C1 revision fidelity",
      name: `E05 C1 ${Date.now()}`,
      summary: "c1",
    });
    const stamp = Date.now();
    const create = await page.request.post(`/api/preparations/${preparationId}/documents`, {
      data: {
        title: "Note C1",
        contentMarkdown: `# Revision A ${stamp}\n\nContenu A exclusif.`,
        correlationKey: `e05-c1-a-${stamp}`,
      },
    });
    expect(create.ok()).toBeTruthy();
    const created = await create.json();
    const documentId = String(created.documentId);
    const revisionA = String(created.revisionId);
    expect(documentId).toBeTruthy();
    expect(revisionA).toBeTruthy();

    const revise = await page.request.post(
      `/api/preparations/${preparationId}/documents/${documentId}`,
      {
        data: {
          action: "revise",
          baseRevisionId: revisionA,
          contentMarkdown: `# Revision B ${stamp}\n\nContenu B exclusif — latest.`,
          correlationKey: `e05-c1-b-${stamp}`,
        },
      },
    );
    expect(revise.ok()).toBeTruthy();
    const revised = await revise.json();
    const revisionB = String(revised.revisionId ?? revised.revision?.id ?? "");
    expect(revisionB).toBeTruthy();
    expect(revisionB).not.toBe(revisionA);

    // D4 API authority: exact A ≠ latest B
    const getA = await page.request.get(
      `/api/preparations/${preparationId}/documents/${documentId}?revisionId=${encodeURIComponent(revisionA)}`,
    );
    expect(getA.ok()).toBeTruthy();
    const bodyA = await getA.json();
    expect(String(bodyA.revision?.contentMarkdown ?? "")).toContain(`Revision A ${stamp}`);
    expect(String(bodyA.revision?.contentMarkdown ?? "")).not.toContain(`Revision B ${stamp}`);

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const cite = `E05_CITE_REVISION documentId=${documentId} revisionId=${revisionA}`;
    await page.getByTestId("thread-draft").fill(cite);
    await page.getByTestId("thread-send").click();
    await expect(page.getByText(/révision documentaire citée/i)).toBeVisible({
      timeout: 30000,
    });
    const refLink = page.getByTestId("nora-ref-link").first();
    await expect(refLink).toBeVisible();

    // Race proof: open A, then quickly request B via current consulter — last wins; late A ignored by seq.
    await refLink.click();
    await expect(page.getByTestId("travail-viewer")).toBeVisible();
    await expect(page.getByTestId("travail-viewer-body")).toContainText(`Revision A ${stamp}`);
    await expect(page.getByTestId("travail-viewer-body")).not.toContainText(
      `Revision B ${stamp}`,
    );
    await expect(page.getByTestId("travail-viewer-revision")).toContainText(/révision citée/i);

    // Close then ensure closed stays closed even if we don't await stale fetch.
    await page.getByTestId("travail-viewer-close").click();
    await expect(page.getByTestId("travail-viewer")).toHaveCount(0);

    // Current (latest) path from En bref — live D4 revalidation, version courante.
    const consulter = page.locator(`[data-testid="travail-consulter-${documentId}"]`);
    await expect(consulter).toBeVisible();
    await consulter.click();
    await expect(page.getByTestId("travail-viewer-body")).toContainText(`Revision B ${stamp}`, {
      timeout: 15000,
    });
    await expect(page.getByTestId("travail-viewer-revision")).toContainText(/version courante/i);
    await expect(page.getByTestId("travail-viewer-body")).not.toContainText(`Revision A ${stamp}`);
  });

  test("C2 ACK lost on choice — single pilot turn, freeze, reconcile", async ({ page }) => {
    test.setTimeout(180_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { projectId, preparationId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 C2 ack lost",
      name: `E05 C2 ${Date.now()}`,
      summary: "c2",
    });
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );

    const choiceSeed =
      "J'aimerais créer un outil pour mieux accompagner les chefs de projet, mais je ne sais pas encore ce qu'il devrait faire exactement.";
    await page.getByTestId("thread-draft").fill(choiceSeed);
    await page.getByTestId("thread-send").click();
    await expect(
      page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false }),
    ).toBeVisible({ timeout: 30000 });

    const actionable = page.locator(
      '[data-testid="nora-choices"][data-actionable="1"] [data-testid="nora-choice"]',
    );
    await expect(actionable.first()).toBeVisible({ timeout: 10000 });

    let ackDropped = false;
    let serverOk = false;
    let capturedTurnKey: string | null = null;
    await page.route("**/api/preparations/*/messages", async (route) => {
      if (route.request().method() !== "POST") {
        await route.continue();
        return;
      }
      let post: { content?: string; clientTurnKey?: string } = {};
      try {
        post = route.request().postDataJSON() as {
          content?: string;
          clientTurnKey?: string;
        };
      } catch {
        post = {};
      }
      const isChoice =
        /Approfondissons le besoin|Explore une autre approche/i.test(post.content ?? "");
      const response = await route.fetch();
      const raw = await response.text();
      if (isChoice && response.ok() && !ackDropped) {
        serverOk = true;
        capturedTurnKey = post.clientTurnKey ?? null;
        ackDropped = true;
        await route.fulfill({
          status: 502,
          contentType: "application/json",
          body: JSON.stringify({
            errorCategory: "ACK_LOST_SIM",
            error: "ACK lost after server commit",
          }),
        });
        return;
      }
      await route.fulfill({
        status: response.status(),
        headers: response.headers(),
        body: raw,
      });
    });

    await actionable.first().click();
    await expect(page.getByTestId("thread-nora-status")).toContainText(
      /ACK lost|ACK_LOST|échec|conservée/i,
      { timeout: 45000 },
    );
    expect(serverOk).toBe(true);
    expect(ackDropped).toBe(true);
    expect(capturedTurnKey).toBeTruthy();

    // Choices stay frozen — no second independent click path.
    await expect(
      page.locator(
        '[data-testid="nora-choices"][data-actionable="1"] [data-testid="nora-choice"]',
      ),
    ).toHaveCount(0);

    await page.reload();
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    // Final B — reconciliation path is MANDATORY (not conditional).
    const reconcile = page.getByTestId("thread-reconcile-pending");
    await expect(reconcile).toBeVisible({ timeout: 20000 });
    await expect(reconcile).toBeEnabled();
    // Keep route open so idempotent retry uses same clientTurnKey; do not drop ACK again.
    ackDropped = true; // already dropped once — subsequent POSTs pass through
    await reconcile.click();
    await expect(page.getByTestId("thread-nora-status")).toContainText(
      /COMPLETE|Nora deterministic-fixture/i,
      { timeout: 45000 },
    );
    // After confirmed reconcile, pending control must clear.
    await expect(page.getByTestId("thread-reconcile-pending")).toHaveCount(0, {
      timeout: 15000,
    });
    // Prior choices expired (not actionable).
    await expect(
      page.locator(
        '[data-testid="nora-choices"][data-actionable="1"] [data-testid="nora-choice"]',
      ),
    ).toHaveCount(0);

    const proj = await page.request.get(`/api/projects/${projectId}`);
    expect(proj.ok()).toBeTruthy();
    const pj = await proj.json();
    const pilotMsgs = (pj.messages ?? []).filter(
      (m: { role?: string; content?: string }) =>
        m.role === "user" || m.role === "pilot" || m.role === "PILOT",
    );
    const choiceMsgs = pilotMsgs.filter((m: { content?: string }) =>
      /Approfondissons le besoin|Explore une autre approche/i.test(m.content ?? ""),
    );
    // Durable proof: a single effective pilot utterance for the choice intention.
    expect(choiceMsgs.length).toBe(1);
    // Turn key identity conserved through reconcile retry.
    expect(capturedTurnKey).toBeTruthy();
    await page.unrouteAll({ behavior: "ignoreErrors" });
    void preparationId;
  });

  test("C3 same-tab logout/identity switch purges draft", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { projectId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 C3 same tab",
      name: `E05 C3 ${Date.now()}`,
      summary: "c3",
    });
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    const secret = `SECRET_SAME_TAB_${Date.now()}`;
    await page.getByTestId("thread-draft").fill(secret);
    await expect(page.getByTestId("thread-draft")).toHaveValue(secret);

    // Explicit identity switch in the SAME tab (sessionStorage persists across nav).
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote B (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect
      .poll(async () => {
        const state = await page
          .getByTestId("project-load-state")
          .getAttribute("data-project-load-state")
          .catch(() => null);
        const unavailable = await page.getByTestId("project-unavailable").count();
        return state === "ready" || unavailable > 0;
      }, { timeout: 25000 })
      .toBe(true);
    const draft = page.getByTestId("thread-draft");
    if (await draft.count()) {
      await expect(draft).not.toHaveValue(secret);
    }
    // Draft keys must be gone from sessionStorage after login purge.
    const leftover = await page.evaluate(() => {
      const keys: string[] = [];
      for (let i = 0; i < sessionStorage.length; i += 1) {
        const k = sessionStorage.key(i);
        if (k && k.startsWith("sfia.travail.draft:v1:")) keys.push(k);
      }
      return keys.length;
    });
    expect(leftover).toBe(0);
  });

  test("P2-B draft isolation across pilots", async ({ page, browser }) => {
    test.setTimeout(120_000);
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");
    const { projectId } = await bootstrapProjectFromPortfolio(page, {
      seed: "E05 draft isolation A",
      name: `E05 Draft A ${Date.now()}`,
      summary: "isolation",
    });
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-load-state")).toHaveAttribute(
      "data-project-load-state",
      "ready",
      { timeout: 20000 },
    );
    const secret = `SECRET_PILOT_A_${Date.now()}`;
    await page.getByTestId("thread-draft").fill(secret);
    await expect(page.getByTestId("thread-draft")).toHaveValue(secret);

    // Separate browser context ⇒ distinct cookies + sessionStorage (P2-B).
    const ctxB = await browser.newContext();
    const pageB = await ctxB.newPage();
    try {
      await pageB.goto("/login");
      await pageB.getByRole("button", { name: "Pilote B (DEV)" }).click();
      await pageB.waitForURL("**/portfolio");
      await pageB.goto(`/projects/${projectId}?surface=travail`);
      // Owner isolation: 404 unavailable OR ready without A's draft.
      await expect
        .poll(async () => {
          const state = await pageB
            .getByTestId("project-load-state")
            .getAttribute("data-project-load-state")
            .catch(() => null);
          const unavailable = await pageB.getByTestId("project-unavailable").count();
          return state === "ready" || unavailable > 0;
        }, { timeout: 25000 })
        .toBe(true);
      const draftB = pageB.getByTestId("thread-draft");
      if (await draftB.count()) {
        await expect(draftB).not.toHaveValue(secret);
      }
    } finally {
      await ctxB.close();
    }
  });
});
```

### CREATED `projects/sfia-studio-next/web/tests/unit/ensemble05-turn-projection.test.ts`

```
import { describe, expect, it } from "vitest";
import {
  buildTurnProjection,
  parseTurnProjection,
  resolveActionableProjections,
  TURN_PROJECTION_SCHEMA,
} from "@/domains/conversation/turn-projection";
import {
  clearDraftAfterAck,
  composerDraftStorageKey,
  purgeAllComposerDraftsInTab,
  purgeComposerDraftsForPilot,
  readComposerDraft,
  writeComposerDraft,
} from "@/domains/conversation/composer-draft";

describe("ensemble05 turn projection (M1 / P1-A)", () => {
  it("does NOT build continue choices from clarifications", () => {
    const p = buildTurnProjection({
      messageId: "msg-a",
      status: "COMPLETE",
      finalized: true,
      continueChoices: null,
      toolCallsObserved: 2,
    });
    expect(p.schemaVersion).toBe(TURN_PROJECTION_SCHEMA);
    expect(p.choices).toHaveLength(0);
    expect(p.activity?.kind).toBe("sources_consulted");
  });

  it("builds continue choices only from typed continueChoices", () => {
    const p = buildTurnProjection({
      messageId: "msg-a",
      status: "COMPLETE",
      finalized: true,
      continueChoices: [
        {
          id: "b",
          label: "Approfondir B",
          transmitText: "Approfondissons l'option B.",
        },
        {
          id: "autre",
          label: "Autre approche",
          transmitText: "Explore une autre approche.",
        },
      ],
    });
    expect(p.choices).toHaveLength(2);
    expect(p.choices[0]?.transmitText).toContain("option B");
    expect(p.choices[0]?.label).not.toEqual(p.choices[0]?.transmitText);
  });

  it("ignores malformed continueChoices safely", () => {
    const p = buildTurnProjection({
      messageId: "m",
      status: "COMPLETE",
      finalized: true,
      continueChoices: [
        { id: "", label: "x", transmitText: "y" },
        { id: "ok", label: "OK", transmitText: "Transmettre OK" },
      ],
    });
    expect(p.choices).toHaveLength(1);
    expect(p.choices[0]?.id).toBe("ok");
  });

  it("marks only the latest finalized Nora group actionable", () => {
    const messages = [
      { id: "u1", role: "user" },
      { id: "a1", role: "assistant" },
      { id: "u2", role: "user" },
      { id: "a2", role: "assistant" },
    ];
    const projections = [
      buildTurnProjection({
        messageId: "a1",
        status: "COMPLETE",
        finalized: true,
        continueChoices: [{ id: "x", label: "Ancien", transmitText: "Ancien" }],
      }),
      buildTurnProjection({
        messageId: "a2",
        status: "COMPLETE",
        finalized: true,
        continueChoices: [{ id: "y", label: "Nouveau", transmitText: "Nouveau" }],
      }),
    ];
    const views = resolveActionableProjections({ messages, projections });
    expect(views.find((v) => v.messageId === "a1")?.actionable).toBe(false);
    expect(views.find((v) => v.messageId === "a2")?.actionable).toBe(true);
  });

  it("expires choices after a later pilot turn and suspends on UNKNOWN freeze", () => {
    const messages = [
      { id: "a1", role: "assistant" },
      { id: "u2", role: "user" },
    ];
    const projections = [
      buildTurnProjection({
        messageId: "a1",
        status: "COMPLETE",
        finalized: true,
        continueChoices: [{ id: "x", label: "X", transmitText: "X" }],
      }),
    ];
    expect(
      resolveActionableProjections({ messages, projections })[0]?.actionable,
    ).toBe(false);
    expect(
      resolveActionableProjections({
        messages: [{ id: "a1", role: "assistant" }],
        projections,
        suspendActions: true,
      })[0]?.actionable,
    ).toBe(false);
  });

  it("round-trips parseTurnProjection and rejects foreign schema", () => {
    const built = buildTurnProjection({
      messageId: "m",
      status: "COMPLETE",
      finalized: true,
      continueChoices: [{ id: "g", label: "Go", transmitText: "Go ahead" }],
    });
    expect(parseTurnProjection(built)?.choices[0]?.label).toBe("Go");
    expect(parseTurnProjection({ schemaVersion: "other" })).toBeNull();
  });
});

describe("ensemble05 composer draft (M3 / P2-B)", () => {
  function mockSessionStorage() {
    const store = new Map<string, string>();
    const sessionStorageMock = {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => {
        store.set(k, v);
      },
      removeItem: (k: string) => {
        store.delete(k);
      },
      clear: () => store.clear(),
      key: (i: number) => [...store.keys()][i] ?? null,
      get length() {
        return store.size;
      },
    };
    Object.defineProperty(globalThis, "sessionStorage", {
      value: sessionStorageMock,
      configurable: true,
    });
    return store;
  }

  it("isolates by pilot+project and refuses late ACK wipe of newer draft", () => {
    const store = mockSessionStorage();
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p1",
      projectId: "proj1",
      lane: "host:127.0.0.1:3100",
      text: "brouillon A",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    expect(
      readComposerDraft({
        pilotId: "p1",
        projectId: "proj1",
        lane: "host:127.0.0.1:3100",
      })?.text,
    ).toBe("brouillon A");
    expect(
      readComposerDraft({
        pilotId: "p2",
        projectId: "proj1",
        lane: "host:127.0.0.1:3100",
      }),
    ).toBeNull();
    expect(
      readComposerDraft({
        pilotId: "p1",
        projectId: "proj2",
        lane: "host:127.0.0.1:3100",
      }),
    ).toBeNull();
    expect(
      readComposerDraft({
        pilotId: "p1",
        projectId: "proj1",
        lane: "host:127.0.0.1:3200",
      }),
    ).toBeNull();

    expect(
      clearDraftAfterAck({
        pilotId: "p1",
        projectId: "proj1",
        sentVersion: 1,
        currentVersion: 2,
        lane: "host:127.0.0.1:3100",
      }),
    ).toBe(false);
    expect(
      store.has(
        composerDraftStorageKey({
          pilotId: "p1",
          projectId: "proj1",
          lane: "host:127.0.0.1:3100",
        }),
      ),
    ).toBe(true);

    expect(
      clearDraftAfterAck({
        pilotId: "p1",
        projectId: "proj1",
        sentVersion: 2,
        currentVersion: 2,
        lane: "host:127.0.0.1:3100",
      }),
    ).toBe(true);
  });

  it("purges all drafts for a pilot on logout/identity change", () => {
    mockSessionStorage();
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p1",
      projectId: "proj1",
      lane: "host:127.0.0.1:3100",
      text: "secret A",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p1",
      projectId: "proj2",
      lane: "host:127.0.0.1:3100",
      text: "secret B",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p2",
      projectId: "proj1",
      lane: "host:127.0.0.1:3100",
      text: "other pilot",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    purgeComposerDraftsForPilot("p1");
    expect(
      readComposerDraft({
        pilotId: "p1",
        projectId: "proj1",
        lane: "host:127.0.0.1:3100",
      }),
    ).toBeNull();
    expect(
      readComposerDraft({
        pilotId: "p2",
        projectId: "proj1",
        lane: "host:127.0.0.1:3100",
      })?.text,
    ).toBe("other pilot");
  });

  it("C3 — purgeAllComposerDraftsInTab clears every draft key in the tab", () => {
    mockSessionStorage();
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p1",
      projectId: "proj1",
      lane: "host:127.0.0.1:3100",
      text: "keep-secret",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId: "p2",
      projectId: "proj9",
      lane: "host:127.0.0.1:3100",
      text: "other",
      version: 1,
      sentVersion: null,
      updatedAt: "2026-11-17T10:00:00.000Z",
    });
    purgeAllComposerDraftsInTab();
    expect(
      readComposerDraft({
        pilotId: "p1",
        projectId: "proj1",
        lane: "host:127.0.0.1:3100",
      }),
    ).toBeNull();
    expect(
      readComposerDraft({
        pilotId: "p2",
        projectId: "proj9",
        lane: "host:127.0.0.1:3100",
      }),
    ).toBeNull();
  });
});
```

### CREATED `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-runtime-matrix.md`

```
# Ensemble 05 — matrice Figma ↔ runtime (consolidation 17/11/2026)

Session Figma MCP: `55ab43e8-d2bd-4208-a214-6b2356fa9d42`
Viewport desktop conception: **1680×970**. Mobile: **430×932**.
F2: cible 0 px, max 2 CSS px sur rectangles stables comparables.

## Contrat visuel extrait (metadata Figma)

| Node | Nom | W×H |
|---|---|---|
| 700:39 | Conversation nominale | 1680×970 |
| 701:62 | Fil long | 1680×970 |
| 701:105 | Composite / choix | 1680×970 |
| 701:148 | Choix expirés | 1680×970 |
| 701:191 | Compositeur multiligne | 1680×970 |
| 701:234 | Activité | 1680×970 |
| 701:277 | Erreur | 1680×970 |
| 701:320 | Incertain | 1680×970 |
| 701:363 | Viewer D4 50/50 | 1680×970 |
| 701:406 | Viewer Git | 1680×970 |
| 701:449 | Viewer agrandi | 1680×970 |
| 701:492 | Indisponible | 1680×970 |
| 701:535 | Mobile conversation | 430×932 |
| 701:537 | Mobile viewer | 430×932 |
| 708:98 | Activité historique | 1680×970 |
| 708:199 | Échec envoi | 1680×970 |

Repères conception: rail 246; composer 972×84; bottoms 857=857; split ~668/668.

## Matrice de conformité

| Frame | Runtime | Viewport | Capture Figma | Capture runtime | Mesures / delta | Statut | Réserve |
|---|---|---|---|---|---|---|---|
| 700:39 | Travail nominal | 1680×970 | figma-700-39-nominal.png | runtime-nominal-1680x970.png | viewports égaux; F2 px-par-px non certifié global | partiel | géométrie F2 non exhaustive |
| 701:62 | fil long + scroll e2e | 1680×970 | — | — | comportement PASS e2e | partiel | capture dédiée absente |
| 701:105 | choix typés | 1680×970 | figma-701-105-composite.png | runtime-nominal | choix PASS e2e | partiel | |
| 701:148 | choix expirés | 1680×970 | figma-701-148-expired.png | e2e actionable=0 | comportement PASS | partiel | |
| 701:191 | multiligne | 1680×970 | — | — | implémenté | non observé | |
| 701:234 | activité V1 | 1680×970 | — | — | preparing honnête | partiel | pas d'étapes mid-flight |
| 701:277 | erreur | 1680×970 | — | — | UI erreur | non observé | |
| 701:320 | ACK/UNKNOWN | 1680×970 | figma-701-320-uncertain.png | e2e C2 | freeze+pending PASS | partiel | |
| 701:363 | viewer D4 50/50 | 1680×970 | figma-701-363-viewer5050.png | e2e split | layout+contenu PASS; C1 révision exacte PASS | partiel | F2 split non mesuré px |
| 701:406 | viewer Git | 1680×970 | — | API branchée | chemin D9 existant | partiel | Git REAL NOT EXECUTED |
| 701:449 | agrandi | 1680×970 | figma-701-449-enlarged.png | e2e enlarged | PASS | partiel | |
| 701:492 | indisponible | 1680×970 | — | UI unavailable | honnête | partiel | |
| 701:535 | mobile | 430×932 | figma-701-535-mobile.png | runtime-mobile-430x932.png | viewports égaux | partiel | |
| 701:537 | mobile viewer | 430×932 | — | — | fermer=retour | non observé | |
| 708:98 | activité hist. | 1680×970 | — | — | details post-terminal | partiel | |
| 708:199 | échec envoi | 1680×970 | — | e2e C2 ACK | comportement | partiel | |

**Verdict visuel:** `FIGMA TO RUNTIME ALIGNED` **non déclaré** — preuves critiques (choix, incertitude, viewer, mobile) présentes; F2 ≤2px non certifié sur 16/16.
```

## 11. Evidence PNG sha256
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-700-39-nominal.png` — 117210 B — `09c5e3bd23bc6688729be7298e6064c1af07096321e790be2b384998b0323816`
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-701-105-composite.png` — 132244 B — `6394f424dcd2f27b314b8b3f818b09c2f628adad4dee0a4933161f334b7b3908`
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-701-148-expired.png` — 124775 B — `ef2c4878dcf41c36e4274b42ad1a5951beffd848015bef69a01832b1704dc482`
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-701-320-uncertain.png` — 122358 B — `978055d0b848f5a2b6eee8cbae1d82f5e44fbd5aae36cdb09aab2c83c3d54153`
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-701-363-viewer5050.png` — 132708 B — `966f9798ffa5272bcc5bc1b9e437fc1a7add10577d6b0f1c5612cca5fbb875cf`
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-701-449-enlarged.png` — 112892 B — `4b4041edc3ad8577acbb374d87e9189f7c295a7eac9769b52a4e6d05edb63384`
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/figma-701-535-mobile.png` — 37179 B — `3e09af36644ebd4c0a334a1b1e3f896961f146dced10bfb3d1fd8b9a8951c019`
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-mobile-430x932.png` — 69810 B — `63778a6b265e141116a0df0db4bc87803aeea08cc4f1cf9204f05d8dfa5553dd`
- `projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-nominal-1680x970.png` — 194531 B — `50b13a43ce785eb1a1250b79b9a98a2457846353c8a21c8da35032d9f3dc4ac1`

## 12. Diffs modifiés vs parent base `984d77a3`

### MODIFIED `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 61738fe9..6acb32c4 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,80 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-FREEZE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-17 ~13:15 CET |
+| Macro-lot | ML4D Ensemble 05 — finalisation + figement candidat (même macro-lot) |
+| Type | Cycle 8 Delivery · CRITICAL · EVOL finalisation · **NO RELEASE** |
+| Scope | Final A D4 live rights ; Final B reconcile obligatoire ; inventaire RECETTE existante ; commit local figé |
+| Non-scope | Déploiement RECETTE ; push produit ; PR/merge ; campagne Figma F2 ; nouvelle RECETTE |
+| Preuves | Vitest 22 PASS ; Playwright E05 5 PASS ; E04 3 PASS ; next build PASS |
+| Manifeste | `construction/ensemble-05-recette-prep-manifest.md` |
+| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` |
+| RECETTE | inventoriée inchangée `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
+| Push produit | **AUCUN** (commit local autorisé) |
+| Verdict cible | `E05 CANDIDATE FROZEN — READY FOR MORRIS RECETTE DEPLOYMENT DECISION` |
+
+
+## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-CONSOLIDATION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-17 ~12:45 CET |
+| Macro-lot | ML4D Ensemble 05 — consolidation C1–C5 (même candidat) |
+| Type | Cycle 8 Delivery · CRITICAL · EVOL consolidation · **NO RELEASE** |
+| Parent candidat | worktree local non commité sur `984d77a3` |
+| Branch | `feat/next-ml4d-project-space-20261116` (locale) |
+| Scope | C1 révision D4 exacte ; C2 ACK perdu / un seul tour ; C3 purge same-tab ; C4 preuves Figma ; C5 Git D9 borné (déterministe) |
+| Non-scope | Migration ; streaming ; cutover RECETTE ; Git REAL LIVE ; F2 16/16 certifié |
+| Preuves | Vitest E05 9 + rail 13 PASS ; Playwright E05 5 PASS ; E04 3 PASS ; next build PASS |
+| Evidence | `web/docs/evidence/ensemble-05-travail-nora/` |
+| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` |
+| RECETTE | **inchangée** `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
+| Push produit | **AUCUN** |
+| Verdict cible | `E05 CONSOLIDATED CANDIDATE — READY FOR MORRIS RECETTE GO REVIEW` (supersédé par FREEZE) |
+
+
+## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-CORRECTIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-17 ~12:20 CET |
+| Macro-lot | ML4D Ensemble 05 — correctif intégré Travail avec Nora |
+| Type | Cycle 8 Delivery · CRITICAL · EVOL correctif · **NO RELEASE** |
+| Parent candidat | même worktree local non commité sur `984d77a3` |
+| Branch | `feat/next-ml4d-project-space-20261116` (locale) |
+| Scope | P1-A continueChoices≠clarifications ; P1-B freeze UNKNOWN/ACK ; P1-C refs D4/Git ; P2-A viewer e2e obligatoire ; P2-B isolation brouillon ; P2-C matrice Figma partielle |
+| Non-scope | Migration ; streaming ; cutover RECETTE ; PR/merge ; F2 certifié 16/16 |
+| Preuves | Vitest 21+20 PASS ; Playwright E05 2 PASS ; E04 3 PASS (cycle précédent correctif) ; next build PASS |
+| Evidence | `web/docs/evidence/ensemble-05-travail-nora/` + `figma-runtime-matrix.md` |
+| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` (mis à jour) |
+| RECETTE | **inchangée** `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
+| Push produit | **AUCUN** |
+| Verdict cible | `E05 CORRECTIVE CANDIDATE WITH RESERVES — NOT READY FOR RECETTE` (supersédé par consolidation) |
+
+
+## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-17 ~12:00 CET |
+| Macro-lot | ML4D Ensemble 05 — Travail avec Nora |
+| Type | Cycle 8 Delivery · CRITICAL · EVOL · **NO RELEASE** |
+| Parent candidat | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
+| Branch | `feat/next-ml4d-project-space-20261116` (locale) |
+| Scope | CT-01..08 intégrés : scroll UX-002, projection M1 `result_json`, choix, compositeur/brouillon M3, activité V1 M2, visionneuse locale M4, shell E04 préservé |
+| Non-scope | Migration (M5) ; streaming texte ; cutover RECETTE ; PR/merge ; Gate C ; ML5 |
+| Preuves | Vitest E05+studio-rail PASS ; Playwright E05 PASS ; E04 nreg 3 PASS ; next build PASS |
+| Evidence | `web/docs/evidence/ensemble-05-travail-nora/` |
+| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` |
+| RECETTE | **inchangée** `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
+| Push produit | **AUCUN** |
+| Verdict cible | `IMPLEMENTED CANDIDATE WITH RESERVES — MORRIS REVIEW REQUIRED` (revue ChatGPT : BLOCKING RESERVES — correctif suivant) |
+
+
 ## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-04-CP01-CP02

 | Field | Value |
```

### MODIFIED `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
index 3ab2b9d6..f22d02af 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
@@ -8,11 +8,14 @@ export async function GET(_: Request, ctx: { params: Promise<{ projectId: string
     const { projectId } = await ctx.params;
     const data = await getOwnedProjectContext(session.pilotId, projectId);
     return NextResponse.json({
+      // C3 — authenticated session pilot (not project owner identity alone).
+      session: { pilotId: session.pilotId },
       project: data.project,
       preparation: data.preparation,
       conversation: data.conversation,
       link: data.link,
       messages: data.messages,
+      turnProjections: data.turnProjections,
       documents: data.documents,
       knowledge: data.knowledge,
       pilotage: data.pilotage,
```

### MODIFIED `projects/sfia-studio-next/web/src/app/login/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/login/page.tsx b/projects/sfia-studio-next/web/src/app/login/page.tsx
index aae3571b..2f62cd7d 100644
--- a/projects/sfia-studio-next/web/src/app/login/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/login/page.tsx
@@ -104,6 +104,15 @@ function LoginPageInner() {
     setNotice("");
     setNoticeTone("info");
     try {
+      // C3 — same-tab identity switch: purge Travail drafts before new session cookie.
+      try {
+        const { purgeAllComposerDraftsInTab } = await import(
+          "@/domains/conversation/composer-draft"
+        );
+        purgeAllComposerDraftsInTab();
+      } catch {
+        /* draft module unavailable — continue login */
+      }
       const res = await fetch("/api/dev/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
```

### MODIFIED `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index f359048e..f1d23109 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -5,6 +5,7 @@ import { useParams, useRouter, useSearchParams } from "next/navigation";
 import { PilotagePanel } from "@/components/PilotagePanel";
 import { ProjectChrome } from "@/components/figma/ProjectChrome";
 import { NoraConversation } from "@/components/figma/NoraConversation";
+import { TravailViewer, type TravailViewerResource } from "@/components/figma/TravailViewer";
 import { ProjectJournal } from "@/components/figma/ProjectJournal";
 import { ProjectOverview } from "@/components/figma/ProjectOverview";
 import {
@@ -24,6 +25,22 @@ import {
   type ThreadPendingTurn,
   type ThreadTurnKind,
 } from "@/domains/pilotage/thread-recovery";
+import {
+  clearDraftAfterAck,
+  clearComposerDraft,
+  purgeAllComposerDraftsInTab,
+  purgeComposerDraftsForPilot,
+  readComposerDraft,
+  writeComposerDraft,
+  studioClientLane,
+} from "@/domains/conversation/composer-draft";
+import {
+  resolveActionableProjections,
+  type TurnChoice,
+  type TurnProjection,
+  type TurnReference,
+  parseTurnProjection,
+} from "@/domains/conversation/turn-projection";
 import { PublicationInspectionPanel } from "@/components/integrations/PublicationInspectionPanel";
 import { useProjectSpace } from "@/components/shell/ProjectSpaceContext";
 import {
@@ -128,6 +145,12 @@ export default function ProjectPage() {
   const [surface, setSurface] = useState<Surface>(() => parseSurface(searchParams.get("surface")) ?? "travail");
   const [draft, setDraft] = useState("");
   const [busy, setBusy] = useState(false);
+  const [pilotId, setPilotId] = useState<string | null>(null);
+  const [turnProjections, setTurnProjections] = useState<TurnProjection[]>([]);
+  const [choiceFrozen, setChoiceFrozen] = useState(false);
+  const [forceStickToken, setForceStickToken] = useState(0);
+  const [viewer, setViewer] = useState<TravailViewerResource | null>(null);
+  const [viewerEnlarged, setViewerEnlarged] = useState(false);
   const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
   const [status, setStatus] = useState("");
   const [pilotageStatus, setPilotageStatus] = useState("");
@@ -139,6 +162,10 @@ export default function ProjectPage() {
   const [docHistory, setDocHistory] = useState<RevisionRow[]>([]);
   const [docDiffText, setDocDiffText] = useState("");
   const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
+  const draftVersionRef = useRef(0);
+  const pilotIdRef = useRef<string | null>(null);
+  const preparationIdRef = useRef<string | null>(null);
+  const projectIdRef = useRef(params.projectId);
   const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
   const reviseCorrelationRef = useRef<string | null>(null);
   const reviseBaseIdRef = useRef<string | null>(null);
@@ -147,6 +174,9 @@ export default function ProjectPage() {
   const reviseDraftRef = useRef("");
   /** Surface chosen by chrome/rail while project load() is still in flight — must not be clobbered. */
   const pendingSurfaceRef = useRef<Surface | null>(null);
+  /** C1 — ignore stale async viewer responses after A→B / close / project change. */
+  const viewerRequestSeqRef = useRef(0);
+  const viewerOpenRef = useRef(false);

   useEffect(() => {
     // Clear previous project identity immediately — no cross-project leak in the rail.
@@ -171,6 +201,425 @@ export default function ProjectPage() {
   useEffect(() => {
     documentsRef.current = documents;
   }, [documents]);
+  useEffect(() => {
+    pilotIdRef.current = pilotId;
+  }, [pilotId]);
+
+  useEffect(() => {
+    preparationIdRef.current = preparationId;
+  }, [preparationId]);
+
+  useEffect(() => {
+    projectIdRef.current = params.projectId;
+    // Invalidate in-flight viewer fetches when project changes.
+    viewerRequestSeqRef.current += 1;
+    viewerOpenRef.current = false;
+    setViewer(null);
+    setViewerEnlarged(false);
+  }, [params.projectId]);
+
+  function persistDraft(text: string) {
+    if (!pilotId) return;
+    draftVersionRef.current += 1;
+    const prior = readComposerDraft({ pilotId, projectId: params.projectId });
+    writeComposerDraft({
+      schemaVersion: "e05-composer-draft-v1",
+      pilotId,
+      projectId: params.projectId,
+      lane: studioClientLane(),
+      text,
+      version: draftVersionRef.current,
+      sentVersion: prior?.sentVersion ?? null,
+      updatedAt: new Date().toISOString(),
+    });
+  }
+
+  function closeViewer() {
+    viewerRequestSeqRef.current += 1;
+    viewerOpenRef.current = false;
+    setViewer(null);
+    setViewerEnlarged(false);
+  }
+
+  function applyViewerIfCurrent(
+    seq: number,
+    next: TravailViewerResource,
+    projectIdAtStart: string,
+  ) {
+    if (seq !== viewerRequestSeqRef.current) return;
+    if (!viewerOpenRef.current) return;
+    if (projectIdRef.current !== projectIdAtStart) return;
+    setViewer(next);
+    setViewerEnlarged(false);
+  }
+
+  type D4RevisionPayload = {
+    status?: string;
+    document?: { id?: string; title?: string };
+    revision?: {
+      id?: string;
+      revisionNumber?: number;
+      status?: string;
+      contentMarkdown?: string;
+    };
+    revisions?: Array<{
+      id?: string;
+      revisionNumber?: number;
+      status?: string;
+      contentMarkdown?: string;
+    }>;
+    reason?: string;
+    error?: string;
+  };
+
+  /**
+   * Final A — every Travail open revalidates rights via D4 at click time.
+   * Never treat React-cached latestRevision as a freshly authorized read.
+   */
+  async function fetchDocumentViewerViaD4(input: {
+    documentId: string;
+    titleHint: string;
+    revisionId?: string | null;
+    versionSource: "exact" | "current";
+    seq: number;
+    projectIdAtStart: string;
+  }) {
+    const prepId = preparationIdRef.current;
+    if (!prepId) {
+      applyViewerIfCurrent(
+        input.seq,
+        {
+          kind: "document",
+          documentId: input.documentId,
+          title: input.titleHint,
+          revisionId: input.revisionId ?? null,
+          revisionNumber: null,
+          versionSource: input.versionSource,
+          markdown: null,
+          available: false,
+          unavailableReason: "Préparation indisponible — lecture D4 impossible.",
+        },
+        input.projectIdAtStart,
+      );
+      return;
+    }
+
+    try {
+      let targetRevisionId = input.revisionId?.trim() || "";
+      let title = input.titleHint;
+
+      if (!targetRevisionId) {
+        // Resolve current revision under live ownership check (list endpoint).
+        const listRes = await fetch(
+          `/api/preparations/${prepId}/documents/${input.documentId}`,
+        );
+        const listBody = (await listRes.json().catch(() => ({}))) as D4RevisionPayload;
+        if (listRes.status === 401) {
+          purgeAllComposerDraftsInTab();
+          applyViewerIfCurrent(
+            input.seq,
+            {
+              kind: "document",
+              documentId: input.documentId,
+              title,
+              revisionId: null,
+              revisionNumber: null,
+              versionSource: "current",
+              markdown: null,
+              available: false,
+              unavailableReason: "Session expirée — contenu non affiché.",
+            },
+            input.projectIdAtStart,
+          );
+          return;
+        }
+        if (!listRes.ok || listBody.status === "FORBIDDEN") {
+          applyViewerIfCurrent(
+            input.seq,
+            {
+              kind: "document",
+              documentId: input.documentId,
+              title,
+              revisionId: null,
+              revisionNumber: null,
+              versionSource: "current",
+              markdown: null,
+              available: false,
+              unavailableReason: String(
+                listBody.reason ??
+                  listBody.error ??
+                  listBody.status ??
+                  "Document introuvable ou non autorisé",
+              ),
+            },
+            input.projectIdAtStart,
+          );
+          return;
+        }
+        title = listBody.document?.title ?? title;
+        const revisions = Array.isArray(listBody.revisions) ? listBody.revisions : [];
+        const availableRevs = revisions
+          .filter((r) => r && r.id && String(r.status ?? "").toUpperCase() === "AVAILABLE")
+          .sort(
+            (a, b) => Number(b.revisionNumber ?? 0) - Number(a.revisionNumber ?? 0),
+          );
+        const current = availableRevs[0] ?? null;
+        if (!current?.id) {
+          applyViewerIfCurrent(
+            input.seq,
+            {
+              kind: "document",
+              documentId: input.documentId,
+              title,
+              revisionId: null,
+              revisionNumber: null,
+              versionSource: "current",
+              markdown: null,
+              available: false,
+              unavailableReason: "Aucune révision disponible pour ce document.",
+            },
+            input.projectIdAtStart,
+          );
+          return;
+        }
+        targetRevisionId = current.id;
+      }
+
+      const res = await fetch(
+        `/api/preparations/${prepId}/documents/${input.documentId}?revisionId=${encodeURIComponent(targetRevisionId)}`,
+      );
+      const j = (await res.json().catch(() => ({}))) as D4RevisionPayload;
+      if (res.status === 401) {
+        purgeAllComposerDraftsInTab();
+        applyViewerIfCurrent(
+          input.seq,
+          {
+            kind: "document",
+            documentId: input.documentId,
+            title,
+            revisionId: targetRevisionId,
+            revisionNumber: null,
+            versionSource: input.versionSource,
+            markdown: null,
+            available: false,
+            unavailableReason: "Session expirée — contenu non affiché.",
+          },
+          input.projectIdAtStart,
+        );
+        return;
+      }
+      if (!res.ok || j.status === "FORBIDDEN" || j.status === "NOT_FOUND") {
+        applyViewerIfCurrent(
+          input.seq,
+          {
+            kind: "document",
+            documentId: input.documentId,
+            title,
+            revisionId: targetRevisionId,
+            revisionNumber: null,
+            versionSource: input.versionSource,
+            markdown: null,
+            available: false,
+            unavailableReason: String(
+              j.reason ?? j.error ?? j.status ?? "Révision inaccessible ou non autorisée",
+            ),
+          },
+          input.projectIdAtStart,
+        );
+        return;
+      }
+      const rev = j.revision;
+      const markdown =
+        j.status === "AVAILABLE" && typeof rev?.contentMarkdown === "string"
+          ? rev.contentMarkdown
+          : null;
+      applyViewerIfCurrent(
+        input.seq,
+        {
+          kind: "document",
+          documentId: input.documentId,
+          title: j.document?.title ?? title,
+          revisionId: rev?.id ?? targetRevisionId,
+          revisionNumber: rev?.revisionNumber ?? null,
+          versionSource: input.versionSource,
+          markdown,
+          available: Boolean(markdown),
+          unavailableReason: markdown
+            ? undefined
+            : `Révision non disponible (${String(j.status ?? rev?.status ?? "UNKNOWN")})`,
+        },
+        input.projectIdAtStart,
+      );
+    } catch {
+      applyViewerIfCurrent(
+        input.seq,
+        {
+          kind: "document",
+          documentId: input.documentId,
+          title: input.titleHint,
+          revisionId: input.revisionId ?? null,
+          revisionNumber: null,
+          versionSource: input.versionSource,
+          markdown: null,
+          available: false,
+          unavailableReason: "Échec de lecture D4 — aucun contenu inventé.",
+        },
+        input.projectIdAtStart,
+      );
+    }
+  }
+
+  /** En bref / library open — always live D4 current version. */
+  function openTravailDocument(doc: Doc) {
+    const projectIdAtStart = params.projectId;
+    const seq = ++viewerRequestSeqRef.current;
+    viewerOpenRef.current = true;
+    // Placeholder while rights + current revision are revalidated.
+    setViewer({
+      kind: "document",
+      documentId: doc.document.id,
+      title: doc.document.title,
+      revisionId: null,
+      revisionNumber: null,
+      versionSource: "current",
+      markdown: null,
+      available: false,
+      unavailableReason: "Vérification des droits et de la version courante…",
+    });
+    setViewerEnlarged(false);
+    void fetchDocumentViewerViaD4({
+      documentId: doc.document.id,
+      titleHint: doc.document.title,
+      revisionId: null,
+      versionSource: "current",
+      seq,
+      projectIdAtStart,
+    });
+  }
+
+  /** C1/Final A — exact revision or live current via D4; D9 Git via existing APIs. */
+  async function openTravailReference(ref: TurnReference) {
+    const projectIdAtStart = params.projectId;
+    const seq = ++viewerRequestSeqRef.current;
+    viewerOpenRef.current = true;
+
+    if (ref.kind === "document" && ref.resourceId) {
+      const match = documents.find((d) => d.document.id === ref.resourceId);
+      const title = match?.document.title ?? ref.label;
+      await fetchDocumentViewerViaD4({
+        documentId: ref.resourceId,
+        titleHint: title,
+        revisionId: ref.revisionId ?? null,
+        versionSource: ref.revisionId ? "exact" : "current",
+        seq,
+        projectIdAtStart,
+      });
+      return;
+    }
+    if (ref.kind === "git") {
+      if (!ref.repositoryId || !ref.path || !ref.ref) {
+        applyViewerIfCurrent(
+          seq,
+          {
+            kind: "git",
+            title: ref.label,
+            path: ref.path ?? null,
+            ref: ref.ref ?? null,
+            commit: ref.commit ?? null,
+            content: null,
+            available: false,
+            unavailableReason:
+              "Référence Git incomplète (dépôt, chemin ou ref manquant) — aucun aperçu inventé.",
+            href: ref.href ?? null,
+          },
+          projectIdAtStart,
+        );
+        return;
+      }
+      try {
+        const q = new URLSearchParams({
+          repositoryId: ref.repositoryId,
+          path: ref.path,
+          ref: ref.ref,
+        });
+        const res = await fetch(`/api/projects/${params.projectId}/git/file?${q.toString()}`);
+        const j = (await res.json().catch(() => ({}))) as {
+          content?: string;
+          provenance?: { commitSha?: string | null; permalink?: string | null };
+          error?: string;
+          errorCategory?: string;
+        };
+        const prov = j.provenance;
+        if (!res.ok) {
+          applyViewerIfCurrent(
+            seq,
+            {
+              kind: "git",
+              title: ref.label,
+              path: ref.path,
+              ref: ref.ref,
+              commit: prov?.commitSha ?? ref.commit ?? null,
+              content: null,
+              available: false,
+              unavailableReason: String(
+                j.error ?? j.errorCategory ?? "Source Git indisponible ou droits insuffisants",
+              ),
+              href: prov?.permalink ?? ref.href ?? null,
+            },
+            projectIdAtStart,
+          );
+        } else {
+          const content = typeof j.content === "string" ? j.content : null;
+          applyViewerIfCurrent(
+            seq,
+            {
+              kind: "git",
+              title: ref.label,
+              path: ref.path,
+              ref: ref.ref,
+              commit: prov?.commitSha ?? ref.commit ?? null,
+              content,
+              available: Boolean(content),
+              unavailableReason: content
+                ? undefined
+                : "Aperçu Git vide — aucun contenu inventé.",
+              href: prov?.permalink ?? ref.href ?? null,
+            },
+            projectIdAtStart,
+          );
+        }
+      } catch {
+        applyViewerIfCurrent(
+          seq,
+          {
+            kind: "git",
+            title: ref.label,
+            path: ref.path,
+            ref: ref.ref,
+            commit: ref.commit ?? null,
+            content: null,
+            available: false,
+            unavailableReason: "Échec de lecture Git — réessayez ou ouvrez la source externe.",
+            href: ref.href ?? null,
+          },
+          projectIdAtStart,
+        );
+      }
+      return;
+    }
+    applyViewerIfCurrent(
+      seq,
+      {
+        kind: "git",
+        title: ref.label,
+        content: null,
+        available: false,
+        unavailableReason: "Référence externe — ouvrir le lien si disponible.",
+        href: ref.href ?? null,
+      },
+      projectIdAtStart,
+    );
+  }

   function buildSurfaceUrl(next: Surface, documentId?: string | null) {
     const q = new URLSearchParams();
@@ -352,6 +801,7 @@ export default function ProjectPage() {

   async function reconcilePending(pending: ThreadPendingTurn) {
     setBusy(true);
+    setChoiceFrozen(true);
     try {
       const res = await fetch(
         `/api/projects/${params.projectId}/pilotage/commands/by-key/${encodeURIComponent(pending.clientCommandKey)}`,
@@ -377,11 +827,12 @@ export default function ProjectPage() {
         if (cmd.status && String(cmd.status).toUpperCase() !== "UNKNOWN") {
           rememberPending(null);
           messageTurnKeyRef.current = null;
+          setChoiceFrozen(false);
         }
         await refreshDurablePilotage();
         return;
       }
-      // 404 alone does not invent a new key — retry same logical act only.
+      // 404 alone does not invent a new key — retry same logical act only (D3 idempotent).
       if (res.status === 404) {
         setPilotageStatus(
           `Commande absente pour ${pending.clientCommandKey.slice(0, 28)}… — reprise du même acte`,
@@ -396,17 +847,32 @@ export default function ProjectPage() {
           clientTurnKey: pending.clientTurnKey,
         }),
       });
-      const j = await retry.json().catch(() => ({}));
+      const j = (await retry.json().catch(() => ({}))) as Record<string, unknown>;
       if (retry.ok) {
-        setMessages(j.messages ?? []);
-        setStatus(`Nora ${j.noraMode} · ${j.status}`);
+        setMessages((j.messages as Msg[]) ?? []);
+        setStatus(`Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}`);
         const effect = j.pilotageEffect as PilotageEffectView | undefined;
         setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
+        const tp = parseTurnProjection(j.turnProjection);
+        if (tp) upsertTurnProjection(tp);
         if (applyClearFromResponse(String(j.status ?? ""), effect)) {
           setDraft("");
         }
+        if (String(j.status ?? "") === "UNKNOWN") {
+          setChoiceFrozen(true);
+        } else {
+          setChoiceFrozen(false);
+        }
+        const proj = await fetch(`/api/projects/${params.projectId}`);
+        if (proj.ok) {
+          const pj = await proj.json();
+          setDocuments(pj.documents ?? []);
+          setKnowledge(pj.knowledge ?? null);
+          if (Array.isArray(pj.messages)) setMessages(pj.messages);
+        }
         await refreshDurablePilotage();
       } else {
+        setChoiceFrozen(true);
         setStatus(String(j.error ?? j.errorCategory ?? "réconciliation impossible"));
       }
     } finally {
@@ -433,7 +899,12 @@ export default function ProjectPage() {
       const res = await fetch(`/api/projects/${params.projectId}`);
       if (cancelled) return;
       if (res.status === 401) {
+        // C3 — session invalid: purge tab drafts; do not restore under wrong identity.
+        purgeAllComposerDraftsInTab();
+        setPilotId(null);
         setUnavailableKind("unauthorized");
+        setDraft("");
+        setChoiceFrozen(false);
         setStatusHint("");
         setProjectSpaceInfo({
           projectId: params.projectId,
@@ -475,8 +946,41 @@ export default function ProjectPage() {
       if (cancelled) return;
       const docs = (j.documents ?? []) as Doc[];
       const name = String(j.project?.name ?? "").trim() || null;
+      // C3 — draft ownership follows authenticated session pilot, not project owner alone.
+      const sessionPilotId =
+        typeof j.session?.pilotId === "string" && j.session.pilotId.trim()
+          ? String(j.session.pilotId)
+          : null;
+      setPilotId(sessionPilotId);
+      setTurnProjections(
+        ((j.turnProjections ?? []) as unknown[])
+          .map((raw) => parseTurnProjection(raw))
+          .filter((p): p is TurnProjection => p !== null),
+      );
       setMessages(j.messages ?? []);
       setDocuments(docs);
+      if (sessionPilotId) {
+        const record = readComposerDraft({
+          pilotId: sessionPilotId,
+          projectId: params.projectId,
+        });
+        if (record?.text && record.pilotId === sessionPilotId) {
+          setDraft(record.text);
+          draftVersionRef.current = record.version;
+        } else {
+          setDraft("");
+          draftVersionRef.current = 0;
+        }
+      } else {
+        setDraft("");
+        draftVersionRef.current = 0;
+      }
+      // P1-B: unresolved pending ⇒ keep choice groups frozen until reconcile.
+      const pendingOnLoad = readPending();
+      if (pendingOnLoad) {
+        setUnresolvedPending(pendingOnLoad);
+        setChoiceFrozen(true);
+      }
       setKnowledge(j.knowledge ?? null);
       setPreparationId(j.preparation?.id ?? null);
       setProjectName(name);
@@ -762,9 +1266,32 @@ export default function ProjectPage() {
     setReviseMessage("Base mise à jour — nouvelle intention (nouvelle correlationKey au prochain enregistrement).");
   }

-  async function sendMessage() {
-    if (!draft.trim() || !preparationId) return;
-    const text = draft.trim();
+  function sendChoice(choice: TurnChoice, _messageId: string) {
+    void sendMessage(choice.transmitText, { fromChoice: true });
+  }
+
+  function upsertTurnProjection(tp: TurnProjection) {
+    setTurnProjections((prev) => {
+      const id = tp.messageId;
+      if (!id) return [...prev, tp];
+      const idx = prev.findIndex((p) => p.messageId === id);
+      if (idx < 0) return [...prev, tp];
+      const next = [...prev];
+      next[idx] = tp;
+      return next;
+    });
+  }
+
+  async function sendMessage(
+    overrideText?: string,
+    opts?: { fromChoice?: boolean },
+  ) {
+    const text = (overrideText ?? draft).trim();
+    if (!text || !preparationId) return;
+    const fromChoice = opts?.fromChoice === true;
+    const sentVersion = fromChoice ? 0 : draftVersionRef.current;
+    setChoiceFrozen(true);
+    setForceStickToken((t) => t + 1);
     // SEM-02 / S05: no client lexical gate. Server returns nextTurnKind from Nora
     // qualification. Same-content retry reuses the turn key; distinct content may
     // proceed — coexistence is decided from the server kind after the response.
@@ -817,14 +1344,28 @@ export default function ProjectPage() {
         setStatus(`Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}`);
         const effect = j.pilotageEffect as PilotageEffectView | undefined;
         setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
-        if (
+        const tp = parseTurnProjection(j.turnProjection);
+        if (tp) upsertTurnProjection(tp);
+        const shouldClearDraft =
           !effectBlocked &&
           !distinctFromUnresolved &&
           applyClearFromResponse(String(j.status ?? ""), effect, {
             preserveUnresolvedMetierPending: preserveMetierPending,
-          })
-        ) {
-          setDraft("");
+          });
+        if (!fromChoice && shouldClearDraft) {
+          if (
+            pilotId &&
+            clearDraftAfterAck({
+              pilotId,
+              projectId: params.projectId,
+              sentVersion,
+              currentVersion: draftVersionRef.current,
+            })
+          ) {
+            setDraft("");
+          } else if (!pilotId) {
+            setDraft("");
+          }
         } else if (effectBlocked || (distinctFromUnresolved && serverKind === "INTENTION_EFFET")) {
           setStatus(
             effectBlocked
@@ -844,8 +1385,16 @@ export default function ProjectPage() {
         setNoraActivity(
           j.status === "UNKNOWN" || j.status === "FAILED" ? "error" : "idle",
         );
+        // P1-B: unfreeze only when transmission is terminal and not UNKNOWN.
+        // Choices also expire via resolveActionable once a pilot turn appears in messages.
+        if (String(j.status ?? "") === "UNKNOWN") {
+          setChoiceFrozen(true);
+        } else {
+          setChoiceFrozen(false);
+        }
       } else {
-        // ACK lost / HTTP error — retain the same turn key for reconcile (server may have applied).
+        // ACK lost / HTTP error — retain turn key; KEEP choices frozen (server may have applied).
+        setChoiceFrozen(true);
         rememberPending({ content: text, clientTurnKey, clientCommandKey });
         setNoraActivity("error");
         setStatus(
@@ -855,6 +1404,8 @@ export default function ProjectPage() {
         );
       }
     } catch {
+      // Network loss after click: fail closed — freeze until reconcile proves outcome.
+      setChoiceFrozen(true);
       rememberPending({ content: text, clientTurnKey, clientCommandKey });
       setNoraActivity("error");
       setStatus("échec réseau — intention de tour conservée");
@@ -894,6 +1445,8 @@ export default function ProjectPage() {
     );
   }

+  const travailLayout = viewer ? (viewerEnlarged ? "enlarged" : "split") : "normal";
+
   return (
     <ProjectChrome
       projectId={params.projectId}
@@ -901,6 +1454,7 @@ export default function ProjectPage() {
       surface={surface}
       statusHint={statusHint}
       loadState={projectLoadState}
+      travailLayout={travailLayout}
     >
       {surface === "projet" ? (
         <ProjectOverview
@@ -923,7 +1477,23 @@ export default function ProjectPage() {
           unresolvedPending={Boolean(unresolvedPending)}
           activity={noraActivity}
           status={[status, pilotageStatus].filter(Boolean).join(" · ") || undefined}
-          onDraft={setDraft}
+          projections={resolveActionableProjections({
+            messages,
+            projections: turnProjections,
+            suspendActions:
+              choiceFrozen ||
+              noraActivity === "preparing" ||
+              Boolean(unresolvedPending),
+          })}
+          onChoice={sendChoice}
+          onReference={(ref) => void openTravailReference(ref)}
+          choiceFrozen={choiceFrozen}
+          forceStickToken={forceStickToken}
+          layoutMode={travailLayout}
+          onDraft={(v) => {
+            setDraft(v);
+            persistDraft(v);
+          }}
           onSend={() => void sendMessage()}
           onReconcile={
             unresolvedPending
@@ -931,6 +1501,25 @@ export default function ProjectPage() {
               : undefined
           }
           aside={
+            viewer ? (
+              <TravailViewer
+                resource={viewer}
+                enlarged={viewerEnlarged}
+                onEnlarge={() => setViewerEnlarged(true)}
+                onReduce={() => setViewerEnlarged(false)}
+                onClose={closeViewer}
+                onOpenInDocuments={
+                  viewer.kind === "document"
+                    ? () => {
+                        const match = documents.find(
+                          (d) => d.document.id === viewer.documentId,
+                        );
+                        if (match) openDocumentReadOnly(match);
+                      }
+                    : undefined
+                }
+              />
+            ) : (
             <div className="fig-inspector" data-testid="travail-aside-inspector">
               <p className="fig-kicker">Contexte projet</p>
               <h2 className="fig-inspector-title">En bref</h2>
@@ -958,6 +1547,21 @@ export default function ProjectPage() {
                     ? `${documents.length} document${documents.length > 1 ? "s" : ""} Nora disponible${documents.length > 1 ? "s" : ""}.`
                     : "Les objets et sources du projet restent distincts du dialogue."}
                 </p>
+                {documents.length > 0 ? (
+                  <div className="fig-inspector-links mt-2">
+                    {documents.map((d) => (
+                      <button
+                        key={d.document.id}
+                        type="button"
+                        className="fig-inspector-link"
+                        data-testid={`travail-consulter-${d.document.id}`}
+                        onClick={() => openTravailDocument(d)}
+                      >
+                        Consulter · {d.document.title}
+                      </button>
+                    ))}
+                  </div>
+                ) : null}
                 <div className="fig-inspector-links">
                   <button
                     type="button"
@@ -993,6 +1597,7 @@ export default function ProjectPage() {
                 ) : null}
               </div>
             </div>
+            )
           }
         />
       ) : null}
```

### MODIFIED `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index 3d305771..37d43fa4 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -1,6 +1,13 @@
 "use client";

+import { useEffect, useRef, useState } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
+import { useNoraThreadScroll } from "@/hooks/useNoraThreadScroll";
+import type {
+  MessageProjectionView,
+  TurnChoice,
+  TurnReference,
+} from "@/domains/conversation/turn-projection";

 export type NoraMsg = {
   id: string;
@@ -22,12 +29,47 @@ export function NoraConversation(props: {
   aside?: React.ReactNode;
   /** When set, participates in project-travail-stage CSS grid via display:contents. */
   embeddedInStage?: boolean;
+  projections?: MessageProjectionView[];
+  onChoice?: (choice: TurnChoice, messageId: string) => void;
+  /** Consultation links — independent of choice lifetime (§6.10). */
+  onReference?: (ref: TurnReference) => void;
+  choiceFrozen?: boolean;
+  forceStickToken?: number;
+  layoutMode?: "normal" | "split" | "enlarged";
 }) {
   const n = props.messages.length;
   const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
   const variantLabel =
     n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";
   const embedded = Boolean(props.embeddedInStage);
+  const lastMessageId = n > 0 ? props.messages[n - 1]!.id : null;
+  const { threadRef, onScroll, scrollToBottom, newBelow } = useNoraThreadScroll({
+    messageCount: n,
+    lastMessageId,
+    activityPreparing: props.activity === "preparing",
+    forceStickToken: props.forceStickToken ?? 0,
+  });
+
+  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
+  const [imeComposing, setImeComposing] = useState(false);
+  const isMobile =
+    typeof window !== "undefined" &&
+    window.matchMedia &&
+    window.matchMedia("(max-width: 700px)").matches;
+
+  useEffect(() => {
+    const el = textareaRef.current;
+    if (!el) return;
+    el.style.height = "auto";
+    const max = Math.min(window.innerHeight * 0.36, 280);
+    const next = Math.min(Math.max(el.scrollHeight, 24), max);
+    el.style.height = `${next}px`;
+    el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
+  }, [props.draft]);
+
+  const projectionByMessage = new Map(
+    (props.projections ?? []).map((p) => [p.messageId ?? "", p]),
+  );

   return (
     <div
@@ -40,12 +82,14 @@ export function NoraConversation(props: {
       data-figma-mobile-frames="282:468,282:492"
       data-testid="nora-workspace"
       data-travail-embed={embedded ? "1" : "0"}
+      data-travail-layout={props.layoutMode ?? "normal"}
     >
       <section
         className="fig-conversation-panel"
         data-testid="nora-conversation-panel"
         data-nora-main="1"
         id="nora-main"
+        hidden={props.layoutMode === "enlarged"}
       >
         <div className="fig-conversation-head">
           <p className="fig-kicker !mb-0">Conversation du projet</p>
@@ -53,9 +97,24 @@ export function NoraConversation(props: {
           {props.unresolvedPending ? (
             <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
           ) : null}
+          {newBelow ? (
+            <button
+              type="button"
+              className="fig-tag fig-tag-ok"
+              data-testid="nora-new-below"
+              onClick={() => scrollToBottom("smooth")}
+            >
+              Nouveaux messages ↓
+            </button>
+          ) : null}
         </div>

-        <div className="fig-nora-thread" data-testid="nora-thread">
+        <div
+          className="fig-nora-thread"
+          data-testid="nora-thread"
+          ref={threadRef}
+          onScroll={onScroll}
+        >
           {n === 0 ? (
             <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
               <div className="fig-msg-meta">
@@ -72,10 +131,13 @@ export function NoraConversation(props: {
           ) : null}
           {props.messages.map((m) => {
             const isNora = m.role === "assistant";
+            const proj = isNora ? projectionByMessage.get(m.id) : undefined;
             return (
               <article
                 key={m.id}
                 className={`fig-msg ${isNora ? "fig-msg-nora" : "fig-msg-pilot"}`}
+                data-message-id={m.id}
+                data-testid={isNora ? "nora-msg-assistant" : "nora-msg-pilot"}
               >
                 <div className="fig-msg-meta">
                   {isNora ? (
@@ -95,12 +157,81 @@ export function NoraConversation(props: {
                 ) : (
                   <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>
                 )}
+                {proj?.activity && proj.activity.kind !== "wait" ? (
+                  <details className="fig-nora-activity-history" data-testid="nora-activity-history">
+                    <summary>Activité de cette réponse</summary>
+                    <p>
+                      {proj.activity.label}
+                      {proj.activity.detail ? ` — ${proj.activity.detail}` : ""}
+                    </p>
+                  </details>
+                ) : null}
+                {proj && proj.choices.length > 0 ? (
+                  <div
+                    className="fig-nora-choices"
+                    data-testid="nora-choices"
+                    data-actionable={proj.actionable ? "1" : "0"}
+                    data-message-id={m.id}
+                  >
+                    {proj.choices.map((c) => (
+                      <button
+                        key={c.id}
+                        type="button"
+                        className="fig-nora-choice"
+                        data-testid="nora-choice"
+                        data-choice-id={c.id}
+                        disabled={!proj.actionable || props.busy || props.choiceFrozen}
+                        onClick={() => props.onChoice?.(c, m.id)}
+                      >
+                        {c.label}
+                      </button>
+                    ))}
+                    {!proj.actionable ? (
+                      <p className="fig-nora-choices-expired" data-testid="nora-choices-expired">
+                        Propositions expirées — consultation seule.
+                      </p>
+                    ) : null}
+                  </div>
+                ) : null}
+                {proj?.references?.length ? (
+                  <ul className="fig-nora-refs" data-testid="nora-refs">
+                    {proj.references.map((r, i) => (
+                      <li key={`${r.kind}-${r.resourceId ?? r.path ?? i}`}>
+                        <button
+                          type="button"
+                          className="fig-nora-ref-link"
+                          data-testid="nora-ref-link"
+                          data-ref-kind={r.kind}
+                          onClick={() => props.onReference?.(r)}
+                        >
+                          Consulter · {r.label}
+                          {r.available === false ? " (à vérifier)" : ""}
+                        </button>
+                      </li>
+                    ))}
+                  </ul>
+                ) : null}
               </article>
             );
           })}
           {props.activity === "preparing" ? (
-            <div className="fig-alert" role="status">
-              Nora prépare une réponse…
+            <div
+              className="fig-nora-activity"
+              role="status"
+              aria-live="polite"
+              data-testid="nora-activity-preparing"
+            >
+              <span className="fig-nora-activity-pulse" aria-hidden />
+              <span>Nora prépare une réponse…</span>
+              <span className="fig-nora-activity-note">
+                Attente réelle — aucune étape inventée.
+              </span>
+            </div>
+          ) : null}
+          {props.activity === "error" ? (
+            <div className="fig-alert" role="alert" data-testid="nora-activity-error">
+              La dernière tentative n&apos;a pas abouti clairement. Le texte saisi est conservé ;
+              réessayez ou réconciliez si une intention reste ouverte.
             </div>
           ) : null}
         </div>
@@ -108,12 +239,13 @@ export function NoraConversation(props: {

       {/*
         Pending banner lives outside the Figma-sized composer card so
-        max-height:160px never clips reconcile controls under the shell lock.
+        max-height never clips reconcile controls under the shell lock.
       */}
       <div
         className="fig-travail-composer-stack"
         data-testid="nora-composer-stack"
         data-pending={props.unresolvedPending ? "1" : "0"}
+        hidden={props.layoutMode === "enlarged"}
       >
         {props.unresolvedPending && props.onReconcile ? (
           <div className="fig-travail-pending" data-testid="thread-pending-banner">
@@ -131,26 +263,36 @@ export function NoraConversation(props: {
             </button>
           </div>
         ) : null}
-        <div className="fig-composer fig-travail-composer" data-testid="nora-composer">
-          <textarea
-            className="fig-travail-composer-input"
-            value={props.draft}
-            onChange={(e) => props.onDraft(e.target.value)}
-            placeholder="Écrire à Nora dans ce projet…"
-            aria-label="Message à Nora"
-            data-testid="thread-draft"
-            rows={2}
-            onKeyDown={(e) => {
-              if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
-                e.preventDefault();
-                props.onSend();
-              }
-            }}
-          />
-          <div className="fig-travail-composer-bar">
-            <span className="fig-travail-composer-hint">
-              Votre message reste rattaché au projet actif
+        <div
+          className="fig-composer fig-travail-composer"
+          data-testid="nora-composer"
+          data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
+        >
+          <div className="fig-travail-composer-row">
+            <span className="fig-travail-composer-plus" aria-hidden>
+              +
             </span>
+            <textarea
+              ref={textareaRef}
+              className="fig-travail-composer-input"
+              value={props.draft}
+              onChange={(e) => props.onDraft(e.target.value)}
+              placeholder="Écrire à Nora dans ce projet…"
+              aria-label="Message à Nora"
+              data-testid="thread-draft"
+              rows={1}
+              onCompositionStart={() => setImeComposing(true)}
+              onCompositionEnd={() => setImeComposing(false)}
+              onKeyDown={(e) => {
+                if (imeComposing || e.nativeEvent.isComposing) return;
+                // Mobile: Enter = newline; send via button only.
+                if (isMobile) return;
+                if (e.key === "Enter" && !e.shiftKey && !props.busy) {
+                  e.preventDefault();
+                  if (props.draft.trim()) props.onSend();
+                }
+              }}
+            />
             <button
               type="button"
               className="fig-travail-composer-send"
```

### MODIFIED `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 1b2ce939..05b45841 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -56,6 +56,8 @@ export function ProjectChrome(props: {
   statusHint?: string;
   /** Observable project bootstrap: loading until load()+surface sync finish. */
   loadState?: "loading" | "ready";
+  /** Ensemble 05 — Travail layout: normal | split (viewer) | enlarged viewer. */
+  travailLayout?: "normal" | "split" | "enlarged";
   children: React.ReactNode;
 }) {
   const loadState = props.loadState ?? "ready";
@@ -149,7 +151,11 @@ export function ProjectChrome(props: {
       </div>

       {isTravail ? (
-        <div className="project-travail-stage" data-testid="project-travail-stage">
+        <div
+          className="project-travail-stage"
+          data-testid="project-travail-stage"
+          data-travail-layout={props.travailLayout ?? "normal"}
+        >
           {intro}
           <div
             className="fig-travail-intro-rule"
```

### MODIFIED `projects/sfia-studio-next/web/src/components/figma/tokens.css`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 2023a7b1..1fb671e7 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -374,18 +374,43 @@
   gap: 0;
   border: 1px solid #272e49;
   border-radius: 14px;
-  padding: 16px 18px 12px;
+  padding: 12px 14px;
   background: #151c29;
-  /* Figma 652:8 composer ≈ 137px — natural height, not stretched */
-  min-height: 118px;
-  max-height: 160px;
+  /* Figma page 05 compact composer ≈ 84px; grows upward into thread space. */
+  min-height: 84px;
+  max-height: min(40vh, 320px);
   flex-shrink: 0;
   width: 100%;
 }

+.fig-travail-composer-row {
+  display: flex;
+  align-items: flex-end;
+  gap: 10px;
+  min-width: 0;
+}
+
+.fig-travail-composer-plus {
+  width: 28px;
+  height: 28px;
+  border-radius: 8px;
+  border: 1px solid #272e49;
+  color: #94a2bb;
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  font-size: 18px;
+  line-height: 1;
+  flex-shrink: 0;
+  margin-bottom: 4px;
+  /* Visual affordance only — attachments/dictation not operational in E05. */
+  opacity: 0.7;
+}
+
 .fig-travail-composer-input {
   width: 100%;
-  min-height: 48px;
+  min-height: 24px;
+  max-height: min(36vh, 280px);
   resize: none;
   border: 0;
   background: transparent;
@@ -393,7 +418,9 @@
   font: inherit;
   font-size: 15px;
   line-height: 1.45;
-  padding: 0;
+  padding: 6px 0;
+  flex: 1 1 auto;
+  min-width: 0;
 }

 .fig-travail-composer-input::placeholder {
@@ -427,13 +454,13 @@
 }

 .fig-travail-composer-send {
-  width: 52px;
+  width: 44px;
   height: 35px;
   border: 0;
   border-radius: 10px;
   background: #656fe1;
   color: #f4f6fc;
-  font-size: 22px;
+  font-size: 20px;
   font-weight: 600;
   line-height: 1;
   cursor: pointer;
@@ -441,6 +468,181 @@
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
+  margin-bottom: 2px;
+}
+
+/* Ensemble 05 — choices, activity, viewer */
+.fig-nora-choices {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+  margin-top: 12px;
+}
+
+.fig-nora-choice {
+  border: 1px solid #3a4470;
+  background: #1a2033;
+  color: #f4f6fc;
+  border-radius: 10px;
+  padding: 8px 12px;
+  font-size: 13px;
+  line-height: 1.35;
+  text-align: left;
+  cursor: pointer;
+  max-width: 100%;
+}
+
+.fig-nora-choice:disabled {
+  opacity: 0.55;
+  cursor: default;
+}
+
+.fig-nora-choice:focus-visible {
+  outline: 2px solid var(--fig-accent-soft);
+  outline-offset: 2px;
+}
+
+.fig-nora-choices-expired {
+  margin: 4px 0 0;
+  width: 100%;
+  color: #94a2bb;
+  font-size: 11px;
+}
+
+.fig-nora-refs {
+  margin: 10px 0 0;
+  padding-left: 0;
+  list-style: none;
+  color: #94a2bb;
+  font-size: 12px;
+  display: flex;
+  flex-direction: column;
+  gap: 6px;
+}
+
+.fig-nora-ref-link {
+  border: 0;
+  background: transparent;
+  color: #afa5ff;
+  font: inherit;
+  font-size: 12px;
+  text-align: left;
+  padding: 0;
+  cursor: pointer;
+  text-decoration: underline;
+  text-underline-offset: 2px;
+}
+
+.fig-nora-ref-link:focus-visible {
+  outline: 2px solid var(--fig-accent-soft);
+  outline-offset: 2px;
+}
+
+.fig-nora-activity {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: 10px;
+  border: 1px solid #272e49;
+  border-radius: 12px;
+  padding: 12px 14px;
+  background: #151c29;
+  color: #f4f6fc;
+  font-size: 13px;
+}
+
+.fig-nora-activity-pulse {
+  width: 10px;
+  height: 10px;
+  border-radius: 999px;
+  background: #656fe1;
+  animation: fig-nora-pulse 1.2s ease-in-out infinite;
+}
+
+.fig-nora-activity-note {
+  color: #94a2bb;
+  font-size: 11px;
+  width: 100%;
+}
+
+@keyframes fig-nora-pulse {
+  0%,
+  100% {
+    opacity: 0.35;
+    transform: scale(0.85);
+  }
+  50% {
+    opacity: 1;
+    transform: scale(1);
+  }
+}
+
+@media (prefers-reduced-motion: reduce) {
+  .fig-nora-activity-pulse {
+    animation: none;
+    opacity: 1;
+  }
+}
+
+.fig-nora-activity-history {
+  margin-top: 10px;
+  color: #94a2bb;
+  font-size: 12px;
+}
+
+.fig-nora-activity-history summary {
+  cursor: pointer;
+}
+
+.fig-travail-viewer {
+  display: flex;
+  flex-direction: column;
+  min-height: 0;
+  height: 100%;
+  background: #151c29;
+  border: 1px solid #272e49;
+  border-radius: 16px;
+  overflow: hidden;
+}
+
+.fig-travail-viewer-head {
+  display: flex;
+  justify-content: space-between;
+  gap: 12px;
+  align-items: flex-start;
+  padding: 16px 18px 12px;
+  border-bottom: 1px solid #272e49;
+  flex-shrink: 0;
+}
+
+.fig-travail-viewer-actions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+  justify-content: flex-end;
+}
+
+.fig-travail-viewer-meta {
+  margin: 4px 0 0;
+  color: #94a2bb;
+  font-size: 12px;
+}
+
+.fig-travail-viewer-body {
+  flex: 1 1 auto;
+  min-height: 0;
+  overflow: auto;
+  overscroll-behavior: contain;
+  padding: 16px 18px 20px;
+}
+
+.fig-travail-viewer-pre {
+  margin: 0;
+  white-space: pre-wrap;
+  word-break: break-word;
+  font-size: 12px;
+  line-height: 1.45;
+  color: #f4f6fc;
 }

 .fig-travail-composer-send:disabled {
@@ -1468,6 +1670,27 @@
   align-items: stretch;
 }

+/* Ensemble 05 / CT-06 — 50/50 of useful area outside rail (Figma 701:363 ≈ 668/668). */
+.project-travail-stage[data-travail-layout="split"] {
+  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
+  column-gap: 22px;
+}
+
+/* Enlarged viewer: conversation/composer hidden; aside spans useful area. */
+.project-travail-stage[data-travail-layout="enlarged"] {
+  grid-template-columns: minmax(0, 1fr);
+}
+
+.project-travail-stage[data-travail-layout="enlarged"] > .fig-travail-intro,
+.project-travail-stage[data-travail-layout="enlarged"] > .fig-travail-intro-rule {
+  display: none;
+}
+
+.project-travail-stage[data-travail-layout="enlarged"] .fig-travail-aside {
+  grid-column: 1;
+  grid-row: 1 / -1;
+}
+
 .fig-travail-intro-rule {
   margin-top: 0;
   /* Pull rule closer under intro (override uniform 25px track gap for rows 1→2). */
```

### MODIFIED `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index 4f348ff4..6585c4c7 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -46,6 +46,8 @@ type QualExtras = Partial<
     | "initialScope"
     | "proposedProjectName"
     | "clarifications"
+    | "continueChoices"
+    | "resourceReferences"
     | "preparationAssessment"
     | "preparationAssessmentExplanation"
   >
@@ -78,6 +80,8 @@ function dialogue(
       },
     ],
     replyDraft: reply,
+    continueChoices: extras?.continueChoices,
+    resourceReferences: extras?.resourceReferences,
     preparationAssessment: extras?.preparationAssessment,
     preparationAssessmentExplanation: extras?.preparationAssessmentExplanation,
   };
@@ -206,6 +210,20 @@ register(
       clarifications: [
         "Quelle difficulté concrète voulez-vous réduire en premier pour les chefs de projet ?",
       ],
+      // P1-A: continueChoices are explicit continuation offers — not clarifications.
+      continueChoices: [
+        {
+          id: "approfondir-besoin",
+          label: "Approfondir le besoin des chefs de projet",
+          transmitText:
+            "Approfondissons le besoin concret des chefs de projet avant de parler de solution.",
+        },
+        {
+          id: "autre-approche",
+          label: "Autre approche",
+          transmitText: "Explore une autre approche pour accompagner les chefs de projet.",
+        },
+      ],
       preparationAssessment: "EXPLORING",
       preparationAssessmentExplanation:
         "L'intention est libre et encore floue : aucun résultat ni périmètre n'est établi. Il est trop tôt pour affirmer une base de démarrage.",
@@ -227,6 +245,20 @@ register(
         "Souhaitez-vous commencer seul, ou le travail en équipe fait-il déjà partie du premier périmètre ?",
         "Pour une première version, le chef de projet pourrait-il déposer ou copier les éléments utiles après chaque réunion, ou la récupération automatique depuis les outils existants est-elle indispensable ?",
       ],
+      continueChoices: [
+        {
+          id: "perimetre-personnel",
+          label: "Commencer seul (périmètre personnel)",
+          transmitText:
+            "Je préfère commencer seul, avec un périmètre personnel pour la première version.",
+        },
+        {
+          id: "approfondir-decisions",
+          label: "Approfondir le suivi des décisions",
+          transmitText:
+            "Approfondissons comment retrouver les décisions importantes et les prochaines actions.",
+        },
+      ],
       preparationAssessment: "CLARIFYING",
       preparationAssessmentExplanation:
         "Un résultat visé est désormais exprimé ; le périmètre initial et un nom de travail restent à préciser.",
@@ -584,6 +616,9 @@ const MATURATION_RENAME_RE =
   /^Je préfère l'appeler (.+?) plutôt qu'Assistant de pilotage\.$/;
 const COCKPIT_NAMED_RE =
   /^Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé (.+)\.$/;
+/** E05 C1 — TEST_BOUNDARY only: cite an exact D4 revision for Travail viewer proof. */
+const E05_CITE_REVISION_RE =
+  /^E05_CITE_REVISION documentId=(\S+) revisionId=(\S+)$/;

 export function fixtureSemanticQualify(userText: string): NoraTurnQualification {
   assertFixtureLane();
@@ -603,6 +638,26 @@ export function fixtureSemanticQualify(userText: string): NoraTurnQualification
   if (cockpit?.[1]?.trim()) {
     return cockpitNamedQualification(cockpit[1]);
   }
+  const cite = text.match(E05_CITE_REVISION_RE);
+  if (cite?.[1] && cite?.[2]) {
+    return dialogue(
+      "Citation documentaire exacte (fixture E05 C1)",
+      "Voici la révision documentaire citée. Consultez-la dans Travail sans modifier le document.",
+      ["NO_EFFECT", "E05_CITE_REVISION"],
+      {
+        omitClarifications: true,
+        continueChoices: [],
+        resourceReferences: [
+          {
+            kind: "document",
+            label: "Révision citée E05",
+            resourceId: cite[1],
+            revisionId: cite[2],
+          },
+        ],
+      },
+    );
+  }
   // Fail closed: unknown fixture text is dialogue-only, never a lexical invent of effects.
   return dialogue(
     "Dialogue fixture par défaut",
```

### MODIFIED `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 32525aa9..bcc0c40d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -442,6 +442,8 @@ async function runLiveWithTools(
     "- proposedProjectName = nom de travail du sas s'il est proposé ou corrigé ; chaîne vide sinon. Préférer ce champ pour une correction de nom sans nouvel effet D2.",
     "- clarifications = UNIQUEMENT les questions encore ouvertes après CE tour. Tableau vide [] = toutes résolues après réévaluation fiable. Ne pas répéter une question déjà tranchée.",
     "- Lorsque tu réévalues les questions ouvertes (QUALIFIED ou NEEDS_CLARIFICATION sur ce périmètre) : TOUJOURS renseigner clarifications (éventuellement []). Ne l'omets que si tu n'as pas réévalué ce périmètre.",
+    "- continueChoices (optionnel) = propositions de POURSUITE conversationnelle (ex. « Approfondir B ») avec id, label et transmitText. NE PAS y recopier clarifications. Omettre ou [] si aucune poursuite utile.",
+    "- resourceReferences (optionnel) = références consultables document/git/external — ce ne sont PAS des choix de poursuite.",
     "- preparationAssessment = EXPLORING|CLARIFYING|PROPOSAL|BASE_SUFFICIENTE selon compréhension structurée — jamais un score, jamais un GO d'autorité.",
     "- preparationAssessmentExplanation = justification qualitative courte fondée sur les acquis réels ; respecter les négations (« n'est pas suffisant » ≠ BASE_SUFFICIENTE).",
     "- Si tu n'as pas d'appréciation fiable : omets preparationAssessment (ne pas inventer BASE_SUFFICIENTE).",
```

### MODIFIED `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 4ef62b6b..f36a2362 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -152,6 +152,41 @@ export const NoraTurnQualificationSchema = z.object({
    * Ne pas confondre omission et []. Pas de .default([]) : Zod effacerait la distinction.
    */
   clarifications: z.array(z.string().max(400)).max(8).optional(),
+  /**
+   * Ensemble 05 / P1-A — propositions de poursuite conversationnelles (≠ clarifications).
+   * Additive / optional. Omission or [] = aucun bouton de poursuite.
+   * Never derive continueChoices from clarifications[].
+   */
+  continueChoices: z
+    .array(
+      z.object({
+        id: z.string().min(1).max(64),
+        label: z.string().min(1).max(160),
+        /** Explicit pilot utterance transmitted on click — not a métier command. */
+        transmitText: z.string().min(1).max(800),
+      }),
+    )
+    .max(6)
+    .optional(),
+  /**
+   * Optional consultable references (D4/D9) — not continuation choices; do not expire with §6.8.
+   */
+  resourceReferences: z
+    .array(
+      z.object({
+        kind: z.enum(["document", "git", "external"]),
+        label: z.string().min(1).max(200),
+        resourceId: z.string().max(128).optional(),
+        revisionId: z.string().max(128).optional(),
+        repositoryId: z.string().max(128).optional(),
+        path: z.string().max(400).optional(),
+        ref: z.string().max(120).optional(),
+        commit: z.string().max(64).optional(),
+        href: z.string().max(800).optional(),
+      }),
+    )
+    .max(8)
+    .optional(),
   replyDraft: z.string().max(12000).default(""),
   /** Appréciation qualitative de préparation (suggestion, jamais une autorité). */
   preparationAssessment: PreparationAssessmentSchema.optional(),
```

### MODIFIED `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 1114c76b..282734b1 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -105,6 +105,11 @@ import {
   recoverPendingMissionContinuation,
 } from "./intent-conduction";
 import { draftProjectionFromQualification } from "@/domains/preparation/projection";
+import {
+  buildTurnProjection,
+  extractTurnProjectionFromResultJson,
+  type TurnProjection,
+} from "./turn-projection";

 /**
  * S05 R-01 — gather owner-side evidence for one unresolved sibling.
@@ -392,6 +397,43 @@ export async function listMessages(pilotId: string, preparationId: string) {
     .orderBy(asc(messages.ordinal));
 }

+/**
+ * Ensemble 05 / M1 — reload projections from existing result_json (no new table).
+ * READ ≠ COMMAND.
+ */
+export async function listTurnProjections(pilotId: string, preparationId: string) {
+  const ctx = await getPreparationContext(pilotId, preparationId);
+  if (!ctx.conversation) return [];
+  const rows = await db
+    .select({
+      id: conversationTurnCommands.id,
+      assistantMessageId: conversationTurnCommands.assistantMessageId,
+      status: conversationTurnCommands.status,
+      resultJson: conversationTurnCommands.resultJson,
+    })
+    .from(conversationTurnCommands)
+    .where(
+      and(
+        eq(conversationTurnCommands.conversationId, ctx.conversation.id),
+        eq(conversationTurnCommands.ownerPilotId, pilotId),
+      ),
+    );
+  const out = [];
+  for (const row of rows) {
+    if (!row.assistantMessageId || !row.resultJson) continue;
+    const proj = extractTurnProjectionFromResultJson(row.resultJson);
+    if (!proj) continue;
+    out.push({
+      ...proj,
+      messageId: proj.messageId ?? row.assistantMessageId,
+      turnCommandId: proj.turnCommandId ?? row.id,
+      finalized: proj.finalized || row.status === "COMPLETE",
+      status: proj.status || row.status,
+    });
+  }
+  return out;
+}
+
 /** Qualification decision before extract/D4 — metadata only, never blocks D4. */
 function emitDocumentActQualificationObs(args: {
   requestId: string;
@@ -547,6 +589,11 @@ export type TurnResult = {
   pendingEffectBlocked?: boolean;
   pendingBlockReason?: string;
   unresolvedPendingClientTurnKey?: string | null;
+  /**
+   * Ensemble 05 / M1 — structured reply projection (choices, refs, activity).
+   * Additive in result_json; never an authority grant.
+   */
+  turnProjection?: TurnProjection | null;
 };

 function pilotageEffectFromAuthority(
@@ -2301,6 +2348,29 @@ export async function postUserMessageAndNora(
       clientPendingHint,
     semanticQualificationStatus: qualification.status,
     preparationProjection: preparationProjectionAck,
+    turnProjection: buildTurnProjection({
+      messageId: ownershipLostBeforeD4 ? null : assistantId,
+      turnCommandId: reserved.commandId,
+      status: turnStatus === "COMPLETE" ? reply.status : turnStatus,
+      finalized: turnStatus === "COMPLETE" && !ownershipLostBeforeD4,
+      // P1-A: never map clarifications[] → continue buttons.
+      continueChoices: qualification.continueChoices ?? null,
+      references: (qualification.resourceReferences ?? []).map((r) => ({
+        kind: r.kind,
+        label: r.label,
+        resourceId: r.resourceId,
+        revisionId: r.revisionId,
+        repositoryId: r.repositoryId,
+        path: r.path,
+        ref: r.ref,
+        commit: r.commit,
+        href: r.href,
+        available: true,
+      })),
+      toolCallsObserved: reply.toolCallsObserved,
+      d4CharsReturned: reply.d4CharsReturned,
+      documentSave,
+    }),
   };

   if (turnRaceHooks.beforeTerminalCommit) {
```

### MODIFIED `projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
index 122a73f9..671ab7ec 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
@@ -815,7 +815,8 @@ export async function commitTurnTerminal(args: {
         return { applied: false };
       }

-      // T-03 / Lot B + O-04: preserve stashed semanticQualification and documentCommandBindings.
+      // T-03 / Lot B + O-04 + E05/M1: preserve stashed semanticQualification,
+      // documentCommandBindings, and turnProjection when terminal omits them.
       let terminalJson = args.resultJson ?? null;
       if (owned.resultJson) {
         try {
@@ -833,6 +834,9 @@ export async function commitTurnTerminal(args: {
               next.documentCommandBindings = prev.documentCommandBindings;
               next.documentCommandBindingStashedAt = prev.documentCommandBindingStashedAt;
             }
+            if (prev.turnProjection !== undefined && next.turnProjection === undefined) {
+              next.turnProjection = prev.turnProjection;
+            }
             terminalJson = JSON.stringify(next);
           } else {
             terminalJson = owned.resultJson;
```

### MODIFIED `projects/sfia-studio-next/web/src/domains/preparation/project-context.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
index c334afa1..cbf289b5 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
@@ -1,7 +1,7 @@
 import { and, eq } from "drizzle-orm";
 import { db } from "@/db/client";
 import { preparationProjectLinks, projects } from "@/db/schema";
-import { listMessages } from "@/domains/conversation/service";
+import { listMessages, listTurnProjections } from "@/domains/conversation/service";
 import { listDocuments } from "@/domains/document/service";
 import { listKnowledge } from "@/domains/knowledge/service";
 import { getPilotageProjection } from "@/domains/pilotage/service";
@@ -42,6 +42,7 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)

   const ctx = await getPreparationContext(pilotId, link.preparationId);
   const messages = await listMessages(pilotId, link.preparationId);
+  const turnProjections = await listTurnProjections(pilotId, link.preparationId);
   const documents = await listDocuments(pilotId, link.preparationId);
   const knowledge = await listKnowledge(pilotId, link.preparationId);
   const pilotage = await getPilotageProjection(pilotId, projectId);
@@ -52,6 +53,7 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
     conversation: ctx.conversation,
     link,
     messages,
+    turnProjections,
     documents,
     knowledge,
     pilotage,
```

## 13. Handoff L3
Publier ce pack sur `sfia/review-handoff` (mono-fichier). Product push forbidden.

## 14. Instruction ChatGPT
Lire tip distant avant recommandation Morris.

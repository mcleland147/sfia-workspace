# SFIA Review Pack — FULL · CRITICAL · COMPLETE CODE
## Ensemble 08 — CORRECTIF POST-UAT 01 : Publication Nora et convergence UX

| Champ | Valeur |
|---|---|
| status | COMPLETE — republish FULL with source + diffs (independent review) |
| cycle | Delivery #8 · INC/EVOL · CRITICAL · NO RELEASE |
| date_utc | 2026-11-22 |
| prior_handoff_cutover | `72cdb456bc9cc68ef047a21da1df7b639af26a09` |
| prior_handoff_incomplete | `31d22a96cbeb32a3aed11f99f82bf97263e4e205` (inventory-only — superseded) |
| this_handoff_L3 | `2d3c155847ed85954d753db79f3c4ef4ab70f1c9` |
| profil | CRITICAL · Review Pack FULL · Handoff REQUIRED / PUBLISH-IN-CYCLE |
| versioning | NO RELEASE · NO STABLE · NO ADOPTED |
| worktree_base_HEAD | `29066442a7fa51b106d9fe45b5c1b05da7f13004` (corrections uncommitted) |
| freeze_RECETTE | `98185598de0d3f3b84af862aecea04b9099217ca` · TREE `1c70839f` · BUILD `1xEbvCdTAX6ht262w4oKF` — **PRESERVED** |

> **Note de republication :** ce pack inclut le **texte intégral** des fichiers créés et les **diffs unifiés exploitables** (`git diff HEAD -U8`) des fichiers modifiés, pour revue indépendante ChatGPT. Les tests PG / Playwright / Nora LIVE restent **NOT RUN** ce cycle (déclarés comme tels, non PASS).

---

## 1. Git Truth

| Item | Observé |
|---|---|
| Remote | `origin` → `mcleland147/sfia-workspace` |
| Branche DEV | `feat/next-ensemble08-git-publications-nora` |
| HEAD | `29066442a7fa51b106d9fe45b5c1b05da7f13004` |
| merge-base ↔ `origin/main` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| ahead | 2 (freeze + tip docs) |
| Push projet | **NONE** |
| RECETTE HTTP | `:3200` alive (307) · BUILD freeze non remplacé |
| Correctifs | worktree dirty — **pas de commit projet** ce mandat |

---

## 2. Diagnostic UAT-01 (A–G) — inchangé, preuves

| Classe | Applicable | Preuve |
|---|---|---|
| **A** Intention reconnue, aucun plan D7 | **OUI primaire** | hedge LLM « reste à confirmer par Studio » ; gate historique `documentEffectForAck.status===AVAILABLE` ; **zéro** `effect_attempt` 2026-11-22 |
| **B** Plan préparé, param/autorité manquant | Non observé ce tour | |
| **C** WRITE D9 indisponible | **Latent** | `STUDIO_GITHUB_ALLOW_MUTATIONS` OFF en RECETTE |
| D–G | Non | pas d’effet lancé / accompli |

**Cause racine prouvée :** A (publish-existing jamais entré) + hedge pré-effet ; C aurait bloqué l’écriture si A seul était corrigé sous WRITE OFF.

---

## 3. Continuité D3 / D6 / D7 / D8 / D9 (lecture du code ci-dessous)

Ordre attendu après correctif (vérifiable dans le diff `service.ts`) :

1. **D3** — `missionIntent.wantsPublish` depuis `projectStudioEffects` (qual durable) ; `missionProjection` structurée.
2. **Résolution document** — `resolvePublicationDocumentTarget` (same-turn D4 AVAILABLE → focus → hint/`doc_*` → sole ; `AMBIGUOUS`/`NOT_FOUND` → clarification, **zéro prepare**).
3. **Gate WRITE** — `publicationWriteGate()` **avant** `preparePublicationForMission` ; si refus → `REFUSED_WRITE_DISABLED`, pas D7/D9.
4. **D7** — `preparePublicationForMission` (path requis, 1 lien Git, etc.).
5. **D6** — `admitConversationalPublicationMandate` (USER durable ; pas LLM seul).
6. **D9** — dispatch via `resumeMissionAfterPublicationAuthorize` quand mandat autorise (SCRIPTED ou REAL documentary).
7. **D8** — faits via owners existants / mission resume status ; restitution Nora **après** owners via `composePublicationEffectRestitution`.
8. Hedge strip : seulement retrait des formulations pré-effet ; si `outcome===UNKNOWN` → texte explicite « encore en vérification », **pas** de succès inventé.

---

## 4. Fichiers CRÉÉS — contenu intégral

### `projects/sfia-studio-next/web/src/domains/conversation/publication-document-target.ts`

```typescript
/**
 * Resolve an existing Studio document/revision for a publication mission
 * when the same turn did not CREATE/REVISE (publish-existing path).
 */
import { resolveReviseTarget, type DocumentListItem } from "./document-act";

export type PublicationDocumentTarget =
  | {
      ok: true;
      documentId: string;
      revisionId: string;
      revisionNumber: number;
      title: string;
      source: "same_turn_d4" | "document_focus" | "hint" | "sole_document";
    }
  | {
      ok: false;
      reason: "NO_DOCUMENT" | "AMBIGUOUS" | "NOT_FOUND" | "NO_AVAILABLE_REVISION";
      candidates?: string[];
    };

export type SameTurnDocumentEffect = {
  status: string;
  documentId?: string | null;
  revisionId?: string | null;
  revisionNumber?: number | null;
  title?: string | null;
} | null;

export type PublicationDocumentFocus = {
  documentId: string;
  sourceRevisionId: string;
  sourceRevisionNumber?: number;
  observedHeadRevisionId?: string;
} | null;

/**
 * Prefer same-turn D4 AVAILABLE, then Pilote document focus, then title/id hint.
 * Never invents a documentId. Does not authorize mutation alone.
 */
export function resolvePublicationDocumentTarget(input: {
  sameTurnEffect: SameTurnDocumentEffect;
  docs: DocumentListItem[];
  documentHint: string | null;
  objectRef: string | null;
  focus: PublicationDocumentFocus;
}): PublicationDocumentTarget {
  const effect = input.sameTurnEffect;
  if (
    effect?.status === "AVAILABLE" &&
    effect.documentId &&
    effect.revisionId
  ) {
    return {
      ok: true,
      documentId: effect.documentId,
      revisionId: effect.revisionId,
      revisionNumber: effect.revisionNumber ?? 0,
      title: effect.title?.trim() || effect.documentId,
      source: "same_turn_d4",
    };
  }

  if (input.focus?.documentId && input.focus.sourceRevisionId) {
    const d = input.docs.find((x) => x.document.id === input.focus!.documentId);
    if (d) {
      return {
        ok: true,
        documentId: d.document.id,
        revisionId: input.focus.sourceRevisionId,
        revisionNumber:
          input.focus.sourceRevisionNumber ?? d.latestRevision?.revisionNumber ?? 0,
        title: d.document.title,
        source: "document_focus",
      };
    }
  }

  const objectRef = input.objectRef?.trim() || null;
  const hintFromObject =
    objectRef && /^doc_[a-z0-9-]+$/i.test(objectRef) ? objectRef : null;
  const hint = (input.documentHint?.trim() || hintFromObject || null) as string | null;

  const resolved = resolveReviseTarget(input.docs, hint, null);
  if (!resolved.ok) {
    const reason =
      resolved.reason === "AMBIGUOUS" ||
      resolved.reason === "NO_AVAILABLE_REVISION" ||
      resolved.reason === "NOT_FOUND"
        ? resolved.reason
        : "NOT_FOUND";
    return {
      ok: false,
      reason,
      candidates: "candidates" in resolved ? resolved.candidates : undefined,
    };
  }

  return {
    ok: true,
    documentId: resolved.documentId,
    revisionId: resolved.baseRevisionId,
    revisionNumber: resolved.baseRevisionNumber,
    title: resolved.title,
    source: hint ? "hint" : "sole_document",
  };
}
```

### `projects/sfia-studio-next/web/src/domains/conversation/publication-effect-restitution.ts`

```typescript
/**
 * Métier restitution after a governed publication attempt (D7/D9).
 * Strips pre-effect hedges ("reste à confirmer par Studio") and appends Studio facts.
 * Nora narrative may be adjusted — never invents a successful Git effect.
 */

export type PublicationEffectView = {
  attempted: boolean;
  outcome:
    | "COMPLETED"
    | "REFUSED_WRITE_DISABLED"
    | "REFUSED_AUTHORITY"
    | "AWAITING_CLARIFICATION"
    | "PREPARED_AWAITING_AUTH"
    | "DISPATCH_FAILED"
    | "NOT_ATTEMPTED"
    | "UNKNOWN";
  reason?: string | null;
  documentTitle?: string | null;
  revisionNumber?: number | null;
  repositoryFullName?: string | null;
  publicationBranch?: string | null;
  attemptId?: string | null;
  decisionId?: string | null;
} | null;

const PRE_EFFECT_PUBLICATION_HEDGES = [
  /la publication reste à confirmer par Studio\.?/gi,
  /l['']effet Git reste à confirmer par Studio\.?/gi,
  /reste à confirmer par Studio\.?/gi,
];

export function stripPublicationPreEffectHedges(text: string): string {
  let out = text ?? "";
  for (const re of PRE_EFFECT_PUBLICATION_HEDGES) {
    out = out.replace(re, "");
  }
  return out.replace(/\n{3,}/g, "\n\n").trim();
}

function factLines(effect: NonNullable<PublicationEffectView>): string[] {
  const doc =
    effect.documentTitle?.trim() ||
    (effect.revisionNumber != null ? `révision ${effect.revisionNumber}` : "document");
  const repo = effect.repositoryFullName?.trim();
  const reason = (effect.reason ?? "").trim();

  switch (effect.outcome) {
    case "COMPLETED":
      return [
        "**Résultat Studio :** la publication documentaire a été **effectuée**.",
        repo ? `Dépôt : \`${repo}\`.` : "",
        effect.publicationBranch
          ? `Branche de publication : \`${effect.publicationBranch}\`.`
          : "",
        "Aucune fusion dans la branche principale n'a été autorisée par cette demande.",
      ].filter(Boolean);
    case "REFUSED_WRITE_DISABLED":
      return [
        "**Résultat Studio :** la publication **n'a pas été effectuée**.",
        "Les écritures GitHub sont désactivées dans cet environnement — aucune branche, commit ni PR n'a été créé.",
        reason ? `Motif technique : ${reason}.` : "",
        "Vous pouvez poursuivre en lecture, ou demander une mise à disposition avec écriture Git autorisée (sandbox).",
      ].filter(Boolean);
    case "REFUSED_AUTHORITY":
      return [
        "**Résultat Studio :** la publication **n'a pas été effectuée**.",
        reason
          ? `Motif : ${reason}.`
          : "L'autorité ou les permissions n'ont pas permis l'effet.",
        "Aucun dépôt distant n'a été modifié.",
      ].filter(Boolean);
    case "AWAITING_CLARIFICATION":
      return [
        "**Résultat Studio :** aucune publication n'a été lancée — une précision est encore nécessaire.",
        reason ? `Précision utile : ${reason}.` : "",
      ].filter(Boolean);
    case "PREPARED_AWAITING_AUTH":
      return [
        "**Résultat Studio :** une préparation de publication est disponible, en attente d'autorisation Pilote explicite.",
        reason ? `Détail : ${reason}.` : "",
      ].filter(Boolean);
    case "DISPATCH_FAILED":
      return [
        "**Résultat Studio :** la publication **n'a pas abouti**.",
        reason ? `Motif : ${reason}.` : "Échec au moment de l'effet distant.",
        "Aucun succès n'est affirmé sans preuve Studio.",
      ].filter(Boolean);
    case "NOT_ATTEMPTED":
      return [
        "**Résultat Studio :** aucune publication n'a été tentée pour cette demande.",
        reason ? `Motif : ${reason}.` : "",
      ].filter(Boolean);
    case "UNKNOWN":
    default:
      return [
        "**Résultat Studio :** l'issue de la publication est **encore en vérification**.",
        "Je ne confirme ni le succès ni le refus définitif tant que Studio n'a pas consolidé l'état.",
        reason ? `Information : ${reason}.` : "",
      ].filter(Boolean);
  }
}

/**
 * Compose final assistant text after Studio publication outcome is known.
 */
export function composePublicationEffectRestitution(input: {
  priorContent: string;
  effect: PublicationEffectView;
}): string {
  const prior = stripPublicationPreEffectHedges(input.priorContent ?? "");
  const effect = input.effect;
  if (!effect?.attempted) {
    // Still strip hedges if Studio concluded no attempt but LLM hedged.
    return prior;
  }
  const facts = factLines(effect);
  if (facts.length === 0) return prior;
  const block = ["", "---", "", ...facts].join("\n");
  if (!prior.trim()) return facts.join("\n");
  return `${prior.trimEnd()}\n${block}`;
}

export function publicationWriteGate():
  | { allowed: true }
  | { allowed: false; reason: string } {
  const mode = (process.env.STUDIO_GITHUB_PROVIDER ?? "scripted").toLowerCase();
  if (mode !== "real") return { allowed: true };
  const flag = (process.env.STUDIO_GITHUB_ALLOW_MUTATIONS ?? "").toLowerCase().trim();
  if (flag === "documentary") return { allowed: true };
  return {
    allowed: false,
    reason:
      "STUDIO_GITHUB_ALLOW_MUTATIONS≠documentary — écritures GitHub REAL désactivées",
  };
}
```

### `projects/sfia-studio-next/web/src/components/integrations/GitFileInfoPopover.tsx`

```tsx
"use client";

import { useEffect, useId, useRef, type RefObject } from "react";

export type GitFileInfoFields = {
  name: string;
  type: string;
  repository: string;
  ref: string;
  path: string;
  commitSha: string | null;
  commitShaVerified: boolean;
  blobSha: string | null;
  sizeLabel?: string | null;
  origin?: string | null;
};

/**
 * Contextual info panel anchored to the Infos control (UAT-04).
 * Reuses surface tokens — no metadata injected into Markdown body.
 */
export function GitFileInfoPopover(props: {
  open: boolean;
  onClose: () => void;
  fields: GitFileInfoFields;
  anchorRef?: RefObject<HTMLElement | null>;
}) {
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!props.open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        props.onClose();
      }
    }
    function onPointer(e: MouseEvent) {
      const t = e.target as Node | null;
      if (!t) return;
      if (panelRef.current?.contains(t)) return;
      if (props.anchorRef?.current?.contains(t)) return;
      props.onClose();
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [props.open, props.onClose, props.anchorRef]);

  useEffect(() => {
    if (!props.open) return;
    const first = panelRef.current?.querySelector<HTMLElement>("button, [href], [tabindex]");
    first?.focus();
  }, [props.open]);

  if (!props.open) return null;

  const rows: Array<[string, string]> = [
    ["Nom", props.fields.name],
    ["Type", props.fields.type],
    ["Dépôt", props.fields.repository || "—"],
    ["Branche / ref", props.fields.ref || "—"],
    ["Chemin", props.fields.path || "—"],
    [
      "Commit",
      props.fields.commitShaVerified && props.fields.commitSha
        ? props.fields.commitSha
        : props.fields.commitSha
          ? "non vérifié"
          : "—",
    ],
    ["Blob", props.fields.blobSha?.trim() ? props.fields.blobSha : "—"],
  ];
  if (props.fields.sizeLabel) rows.push(["Taille", props.fields.sizeLabel]);
  if (props.fields.origin) rows.push(["Origine", props.fields.origin]);

  return (
    <div
      ref={panelRef}
      id={panelId}
      className="git-info-popover"
      role="dialog"
      aria-modal="false"
      aria-label="Informations sur la source"
      data-testid="git-file-infos"
    >
      <div className="git-info-popover-head">
        <h3 className="git-info-popover-title">Source</h3>
        <button
          type="button"
          className="git-btn-icon"
          aria-label="Fermer les informations"
          data-testid="git-info-close"
          onClick={props.onClose}
        >
          ×
        </button>
      </div>
      <dl className="git-details-list">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd className={/Commit|Blob|Chemin/.test(label) ? "git-mono" : undefined}>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
```

### `projects/sfia-studio-next/web/tests/unit/publication-effect-restitution.test.ts`

```typescript
import { describe, expect, it, afterEach } from "vitest";
import {
  composePublicationEffectRestitution,
  publicationWriteGate,
  stripPublicationPreEffectHedges,
} from "@/domains/conversation/publication-effect-restitution";
import { resolvePublicationDocumentTarget } from "@/domains/conversation/publication-document-target";

describe("publication-effect-restitution", () => {
  const prevProvider = process.env.STUDIO_GITHUB_PROVIDER;
  const prevMut = process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;

  afterEach(() => {
    if (prevProvider === undefined) delete process.env.STUDIO_GITHUB_PROVIDER;
    else process.env.STUDIO_GITHUB_PROVIDER = prevProvider;
    if (prevMut === undefined) delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    else process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = prevMut;
  });

  it("strips pre-effect Studio confirmation hedge", () => {
    const raw =
      "Je publie le document tel quel. La publication reste à confirmer par Studio.";
    expect(stripPublicationPreEffectHedges(raw)).not.toMatch(/reste à confirmer/i);
  });

  it("WRITE-off restitution is explicit refusal", () => {
    const out = composePublicationEffectRestitution({
      priorContent: "La publication reste à confirmer par Studio.",
      effect: {
        attempted: true,
        outcome: "REFUSED_WRITE_DISABLED",
        reason: "STUDIO_GITHUB_ALLOW_MUTATIONS≠documentary",
      },
    });
    expect(out).toMatch(/n'a pas été effectuée/i);
    expect(out).not.toMatch(/reste à confirmer/i);
    expect(out).toMatch(/écritures GitHub sont désactivées/i);
  });

  it("COMPLETED restitution confirms effect without inventing merge", () => {
    const out = composePublicationEffectRestitution({
      priorContent: "Document prêt.",
      effect: {
        attempted: true,
        outcome: "COMPLETED",
        repositoryFullName: "acme/demo",
        publicationBranch: "sfia/pub/demo",
      },
    });
    expect(out).toMatch(/effectuée/i);
    expect(out).toMatch(/Aucune fusion/i);
  });

  it("publicationWriteGate refuses REAL without documentary", () => {
    process.env.STUDIO_GITHUB_PROVIDER = "real";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    expect(publicationWriteGate().allowed).toBe(false);

    process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "documentary";
    expect(publicationWriteGate().allowed).toBe(true);

    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
    expect(publicationWriteGate().allowed).toBe(true);
  });
});

describe("resolvePublicationDocumentTarget", () => {
  const docs = [
    {
      document: { id: "doc_a", title: "Références externes — Enseignements" },
      latestRevision: {
        id: "drev_2",
        revisionNumber: 2,
        status: "AVAILABLE",
        contentMarkdown: "# v2",
      },
    },
  ];

  it("uses same-turn D4 when AVAILABLE", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: {
        status: "AVAILABLE",
        documentId: "doc_new",
        revisionId: "drev_new",
        revisionNumber: 1,
        title: "Nouveau",
      },
      docs: docs as never,
      documentHint: null,
      objectRef: null,
      focus: null,
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.source).toBe("same_turn_d4");
      expect(t.documentId).toBe("doc_new");
    }
  });

  it("resolves existing document by title hint without D4", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: null,
      docs: docs as never,
      documentHint: "Références externes",
      objectRef: null,
      focus: null,
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.source).toBe("hint");
      expect(t.revisionId).toBe("drev_2");
      expect(t.revisionNumber).toBe(2);
    }
  });

  it("prefers document focus revision", () => {
    const t = resolvePublicationDocumentTarget({
      sameTurnEffect: { status: "NOT_EXECUTED" },
      docs: docs as never,
      documentHint: null,
      objectRef: null,
      focus: {
        documentId: "doc_a",
        sourceRevisionId: "drev_focus",
        sourceRevisionNumber: 2,
      },
    });
    expect(t.ok).toBe(true);
    if (t.ok) {
      expect(t.source).toBe("document_focus");
      expect(t.revisionId).toBe("drev_focus");
    }
  });
});
```

### `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/figma-evidence/post-uat-01-l0-l2.md`

```markdown
# Figma L0–L2 — POST-UAT 01 (E08)

- File key: `itgvCulInEnFY6DvgIegvP`
- Session: `80b0f865-9353-4318-b761-d912f7b37cbe`
- Date: 2026-11-22
- Method: MCP `get_metadata` (L0/L1 structure + dimensions). Runtime pixel G5 ≤2px : **NOT PROVEN** (Morris UAT).

## Frames

| Frame | Node | Size | Notes |
|---|---|---|---|
| 11.01 Aucun dépôt | `1093:9` | 1680×970 | Zone contenu 1358 ; panneaux 848 + 492 ; hero « Dépôts Git » |
| 11.02 Gestion multi-dépôts | `1094:71` | 1680×970 | Hero « Gérer les dépôts… » ; main 848×600 ; side 492×600 ; 2 dépôts **fictifs** |
| 11.03 Explorateur 30/70 | `1094:172` | 1680×970 | Tree 406 / preview 934 ; actions Infos · GitHub · Agrandir — **état Infos ouvert non dessiné** |
| 11.06 Intégrations connecté | `1095:339` | 1680×970 | Badge Connecté ; liste dépôts ; Actualiser / Déconnecter ; colonne droite |
| 11.07 / 11.13 | (confirm) | — | Confirmation avant mutation locale (déconnexion / retrait) |

## Mapping runtime

| Figma | DOM / composant |
|---|---|
| Hero Dépôts Git | `GitRepositoriesSurface` `[data-testid=git-hero]` (chrome ProjectChrome breadcrumb-only) |
| Empty 11.01 | `[data-testid=git-empty]` |
| Manage 11.02 | `[data-testid=git-manage]` |
| Explorer 11.03 | `.git-split-3070` + `[data-testid=git-preview]` |
| Infos (ouvert) | `GitFileInfoPopover` `[data-testid=git-file-infos]` — **candidat UX** (pas d’état Figma validé) |
| Intégrations 11.06 | `IntegrationsPanel` `[data-testid=integrations-panel]` |

## Réserves

- FIGMA ALIGNED **non annoncé** : pas de captures runtime mesurées ce cycle.
- Différence de données CampusFlow (1 dépôt) vs maquette 11.02 (2) : **pas un défaut visuel**.
- Infos : si Morris exige un état Figma normatif → **DESIGN DECISION REQUIRED — MORRIS**.
```

---

## 5. Fichiers MODIFIÉS — diffs unifiés exploitables (`git diff HEAD -U8`)

### 5.1 `service.ts` (publication path + restitution)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 52b72c5d..95c1025b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -121,16 +121,22 @@ import {
   admitConversationalMergeMandate,
   extractPositivelyRequestedPrNumbers,
   userStatementHasOpenMergeCondition,
   userStatementHasUnresolvedSamePrMergeContradiction,
   userStatementIsNonAuthorizingMergeTalk,
   userStatementRefusesMerge,
 } from "./conversation-merge-authority";
 import { userStatementRefusesPublication } from "./conversation-publication-mandate-guards";
+import {
+  composePublicationEffectRestitution,
+  publicationWriteGate,
+  type PublicationEffectView,
+} from "./publication-effect-restitution";
+import { resolvePublicationDocumentTarget } from "./publication-document-target";
 import {
   advanceMissionAfterProjectCreated,
   buildD2AwaitingStep,
   buildD2OwnerActBinding,
   buildPendingDocumentStep,
   emptyMission,
   loadPriorMissionProjection,
   mergeMissionSteps,
@@ -2548,77 +2554,185 @@ export async function postUserMessageAndNora(
         });
       }
     }
   }

   // Explicit refusal must not leave a publication PREPARED / AWAITING_PILOT_AUTH.
   const userRefusesPublish = userStatementRefusesPublication(content);

+  // Publication mission: same-turn D4 CREATE/REVISE OR publish-existing (no D4 AVAILABLE gate).
+  // Restitution belongs to Nora after Studio outcome — never a fixed pre-effect hedge.
+  let publicationEffectView: PublicationEffectView = null;
+
   if (
     allowOwnerEffects &&
     !ownershipLostBeforeD4 &&
-    documentEffectForAck?.status === "AVAILABLE" &&
-    documentEffectForAck.documentId &&
-    documentEffectForAck.revisionId &&
     missionIntent.wantsPublish &&
     !userRefusesPublish &&
     ctx.project?.id
   ) {
-    const steps: MissionProjection["steps"] = [
-      {
+    const docsForPub = await listDocuments(pilotId, preparationId);
+    const pubTarget = resolvePublicationDocumentTarget({
+      sameTurnEffect: documentEffectForAck
+        ? {
+            status: documentEffectForAck.status ?? "UNKNOWN",
+            documentId: documentEffectForAck.documentId ?? null,
+            revisionId: documentEffectForAck.revisionId ?? null,
+            revisionNumber: documentEffectForAck.revisionNumber ?? null,
+            title: null,
+          }
+        : null,
+      docs: docsForPub,
+      documentHint: missionIntent.documentHint ?? null,
+      objectRef: missionIntent.objectRef ?? null,
+      focus: opts?.documentFocus
+        ? {
+            documentId: opts.documentFocus.documentId,
+            sourceRevisionId: opts.documentFocus.sourceRevisionId,
+            sourceRevisionNumber: opts.documentFocus.sourceRevisionNumber,
+            observedHeadRevisionId: opts.documentFocus.observedHeadRevisionId,
+          }
+        : null,
+    });
+
+    const steps: MissionProjection["steps"] = [];
+    if (pubTarget.ok && pubTarget.source === "same_turn_d4") {
+      steps.push({
         id: "d4_create",
         capabilityId: "d4.create_document",
         status: "DONE",
         correlationKey: missionKeys.document,
-        documentId: documentEffectForAck.documentId,
-        revisionId: documentEffectForAck.revisionId,
-      },
-    ];
+        documentId: pubTarget.documentId,
+        revisionId: pubTarget.revisionId,
+      });
+    } else if (pubTarget.ok) {
+      steps.push({
+        id: "d4_source",
+        capabilityId: "d4.create_document",
+        status: "DONE",
+        correlationKey: missionKeys.document,
+        documentId: pubTarget.documentId,
+        revisionId: pubTarget.revisionId,
+        reason: `EXISTING_DOC:${pubTarget.source}`,
+      });
+    }

-    // P1-E: no silent path/branch deduction — clarify before D7 prepare.
-    if (missionIntent.needsExplicitPath) {
+    const writeGate = publicationWriteGate();
+
+    if (!pubTarget.ok) {
       steps.push({
         id: "d7_prepare",
         capabilityId: "d7.prepare_publication",
         status: "PENDING",
         correlationKey: missionKeys.publication,
+        reason: pubTarget.reason,
+      });
+      missionProjection = {
+        clientIntentKey,
+        status: "AWAITING_CLARIFICATION",
+        goalSummary: "Publication — document ou révision à préciser",
+        steps,
+        restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
+      };
+      publicationEffectView = {
+        attempted: true,
+        outcome: "AWAITING_CLARIFICATION",
+        reason:
+          pubTarget.reason === "AMBIGUOUS"
+            ? "Plusieurs documents correspondent — précisez lequel publier."
+            : "Document ou révision de publication non déterminé.",
+      };
+    } else if (!writeGate.allowed) {
+      steps.push({
+        id: "d7_prepare",
+        capabilityId: "d7.prepare_publication",
+        status: "FAILED",
+        correlationKey: missionKeys.publication,
+        documentId: pubTarget.documentId,
+        revisionId: pubTarget.revisionId,
+        reason: "WRITE_DISABLED",
+      });
+      missionProjection = {
+        clientIntentKey,
+        status: "PARTIAL_FAILED_STEP",
+        goalSummary: "Publication refusée — écritures GitHub désactivées",
+        steps,
+        restitution: "DELIVERED",
+      };
+      publicationEffectView = {
+        attempted: true,
+        outcome: "REFUSED_WRITE_DISABLED",
+        reason: writeGate.reason,
+        documentTitle: pubTarget.title,
+        revisionNumber: pubTarget.revisionNumber,
+        repositoryFullName: missionIntent.repositoryHint,
+      };
+      emitObs({
+        event_name: "d3.mission.publication_write_disabled",
+        component: "d3.mission_continuity",
+        request_id: requestId,
+        operation_id: reserved.operationId,
+        generation_id: reply.generationId,
+        outcome: "DENIED",
+        meta: {
+          document_id: pubTarget.documentId,
+          revision_id: pubTarget.revisionId,
+          reason: writeGate.reason,
+        },
+      });
+    } else if (missionIntent.needsExplicitPath) {
+      // P1-E: no silent path/branch deduction — clarify before D7 prepare.
+      steps.push({
+        id: "d7_prepare",
+        capabilityId: "d7.prepare_publication",
+        status: "PENDING",
+        correlationKey: missionKeys.publication,
+        documentId: pubTarget.documentId,
+        revisionId: pubTarget.revisionId,
         reason: missionIntent.clarify ?? "PATH_REQUIRED",
       });
       missionProjection = {
         clientIntentKey,
         status: "AWAITING_CLARIFICATION",
-        goalSummary: "CREATE D4 confirmé — chemin Git requis avant préparation",
+        goalSummary: "Document identifié — chemin Git requis avant préparation",
         steps,
         restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
       };
+      publicationEffectView = {
+        attempted: true,
+        outcome: "AWAITING_CLARIFICATION",
+        reason: missionIntent.clarify ?? "Chemin de publication Git manquant.",
+        documentTitle: pubTarget.title,
+        revisionNumber: pubTarget.revisionNumber,
+      };
     } else if (await requireTurnOwnership(reserved.commandId, reserved.ownerToken)) {
       const prepared = await preparePublicationForMission({
         pilotId,
         projectId: ctx.project.id,
-        documentId: documentEffectForAck.documentId,
-        revisionId: documentEffectForAck.revisionId,
+        documentId: pubTarget.documentId,
+        revisionId: pubTarget.revisionId,
         clientIntentKey,
         targetPath: missionIntent.targetPath,
         targetBranch: missionIntent.targetBranch,
       });
       if (prepared.ok) {
         const prepStep: MissionProjection["steps"][number] = {
           id: "d7_prepare",
           capabilityId: "d7.prepare_publication",
           status: prepared.status === "PREPARED" ? "WAITING" : "DONE",
           correlationKey: missionKeys.publication,
           attemptId: prepared.attemptId,
-          documentId: documentEffectForAck.documentId,
-          revisionId: documentEffectForAck.revisionId,
+          documentId: pubTarget.documentId,
+          revisionId: pubTarget.revisionId,
         };
         steps.push(prepStep);

         let missionStatus: MissionProjection["status"] = "AWAITING_PILOT_AUTH";
-        let goalSummary = "CREATE D4 + publication Git (attente autorisation Pilote)";
+        let goalSummary = "Publication Git (attente autorisation Pilote)";
         let authorizeCalled = false;

         const mandateAdmission = await admitConversationalPublicationMandate({
           pilotId,
           projectId: ctx.project.id,
           attemptId: prepared.attemptId,
           userMessageId: reserved.userMessageId,
           userStatement: content,
@@ -2631,45 +2745,105 @@ export async function postUserMessageAndNora(
         if (mandateAdmission.authorized && mandateAdmission.decisionId) {
           publicationMandateDecisionId = mandateAdmission.decisionId;
           authorizeCalled = true;
           prepStep.decisionId = mandateAdmission.decisionId;
           const resumeStatus = mandateAdmission.missionResume?.status ?? "AUTHORIZED";
           if (resumeStatus === "COMPLETED") {
             prepStep.status = "DONE";
             missionStatus = "COMPLETED";
-            goalSummary = "CREATE D4 + publication Git (mandat conversationnel + effet terminé)";
+            goalSummary = "Publication Git (mandat conversationnel + effet terminé)";
+            publicationEffectView = {
+              attempted: true,
+              outcome: "COMPLETED",
+              documentTitle: pubTarget.title,
+              revisionNumber: pubTarget.revisionNumber,
+              attemptId: prepared.attemptId,
+              decisionId: mandateAdmission.decisionId,
+              repositoryFullName: missionIntent.repositoryHint,
+            };
           } else if (
             resumeStatus === "DISPATCHED" ||
             resumeStatus === "AMBIGUOUS" ||
             mandateAdmission.missionResume?.dispatched
           ) {
             prepStep.status = "WAITING";
             missionStatus = "ACTIVE";
-            goalSummary = "CREATE D4 + publication Git (mandat conversationnel — dispatch en cours)";
+            goalSummary = "Publication Git (mandat conversationnel — dispatch en cours)";
+            publicationEffectView = {
+              attempted: true,
+              outcome: "UNKNOWN",
+              reason: "Dispatch en cours — résultat Studio non encore consolidé.",
+              documentTitle: pubTarget.title,
+              revisionNumber: pubTarget.revisionNumber,
+              attemptId: prepared.attemptId,
+              decisionId: mandateAdmission.decisionId,
+            };
           } else {
             prepStep.status = "WAITING";
             missionStatus = "AWAITING_PILOT_AUTH";
             goalSummary =
-              "CREATE D4 + publication Git (mandat D6 enregistré — reprise dispatch en attente)";
+              "Publication Git (mandat enregistré — reprise dispatch en attente)";
+            publicationEffectView = {
+              attempted: true,
+              outcome: "PREPARED_AWAITING_AUTH",
+              reason: "Autorisation enregistrée — effet non encore observé.",
+              documentTitle: pubTarget.title,
+              revisionNumber: pubTarget.revisionNumber,
+              attemptId: prepared.attemptId,
+              decisionId: mandateAdmission.decisionId,
+            };
           }
         } else if (
           mandateAdmission.attempted &&
           mandateAdmission.reasonCode &&
           !["ALREADY_AUTHORIZED", "REFUSED", "MERGE_ONLY", "NO_PUBLISH_QUAL"].includes(
             mandateAdmission.reasonCode,
           ) &&
           (mandateAdmission.reasonCode === "AMBIGUOUS_PATH" ||
             mandateAdmission.reasonCode === "AMBIGUOUS_BRANCH" ||
             mandateAdmission.reasonCode === "PLAN_DRIFT" ||
             mandateAdmission.reasonCode === "AMBIGUOUS")
         ) {
           missionStatus = "AWAITING_CLARIFICATION";
           goalSummary = "Publication préparée — mandat conversationnel ambigu (précision requise)";
           prepStep.reason = mandateAdmission.reason ?? mandateAdmission.reasonCode;
+          publicationEffectView = {
+            attempted: true,
+            outcome: "AWAITING_CLARIFICATION",
+            reason: mandateAdmission.reason ?? mandateAdmission.reasonCode,
+            documentTitle: pubTarget.title,
+            revisionNumber: pubTarget.revisionNumber,
+            attemptId: prepared.attemptId,
+          };
+        } else if (
+          mandateAdmission.attempted &&
+          (mandateAdmission.reasonCode === "REFUSED" ||
+            mandateAdmission.reasonCode === "INSUFFICIENT_PERMISSION")
+        ) {
+          prepStep.status = "FAILED";
+          missionStatus = "PARTIAL_FAILED_STEP";
+          goalSummary = "Publication refusée — autorité insuffisante";
+          publicationEffectView = {
+            attempted: true,
+            outcome: "REFUSED_AUTHORITY",
+            reason: mandateAdmission.reason ?? mandateAdmission.reasonCode,
+            documentTitle: pubTarget.title,
+            revisionNumber: pubTarget.revisionNumber,
+            attemptId: prepared.attemptId,
+          };
+        } else {
+          publicationEffectView = {
+            attempted: true,
+            outcome: "PREPARED_AWAITING_AUTH",
+            reason: mandateAdmission.reason ?? "Préparation disponible — autorisation Pilote requise.",
+            documentTitle: pubTarget.title,
+            revisionNumber: pubTarget.revisionNumber,
+            attemptId: prepared.attemptId,
+          };
         }

         missionProjection = {
           clientIntentKey,
           status: missionStatus,
           goalSummary,
           steps,
           restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
@@ -2680,37 +2854,52 @@ export async function postUserMessageAndNora(
             : "d3.mission.prepared_awaiting_auth",
           component: "d3.mission_continuity",
           request_id: requestId,
           operation_id: reserved.operationId,
           generation_id: reply.generationId,
           outcome: mandateAdmission.authorized ? "SUCCESS" : "PARTIAL",
           meta: {
             attempt_id: prepared.attemptId,
-            document_id: documentEffectForAck.documentId,
+            document_id: pubTarget.documentId,
             authorize_called: authorizeCalled,
             mandate_reason: mandateAdmission.reasonCode ?? null,
             decision_id: mandateAdmission.decisionId,
+            publish_source: pubTarget.source,
           },
         });
       } else {
+        const refusedWrite =
+          prepared.code === "WRITE_DISABLED" ||
+          /ALLOW_MUTATIONS|écritures GitHub|WRITE/i.test(prepared.message);
         steps.push({
           id: "d7_prepare",
           capabilityId: "d7.prepare_publication",
           status: "FAILED",
           correlationKey: missionKeys.publication,
+          documentId: pubTarget.documentId,
+          revisionId: pubTarget.revisionId,
           reason: `${prepared.code}:${prepared.message}`,
         });
         missionProjection = {
           clientIntentKey,
           status: "PARTIAL_FAILED_STEP",
-          goalSummary: "CREATE D4 confirmé — préparation Git non réalisée",
+          goalSummary: refusedWrite
+            ? "Publication refusée — écritures GitHub désactivées"
+            : "Document identifié — préparation Git non réalisée",
           steps,
           restitution: continueFailedAfterEffect ? "PENDING" : "CANONICAL",
         };
+        publicationEffectView = {
+          attempted: true,
+          outcome: refusedWrite ? "REFUSED_WRITE_DISABLED" : "DISPATCH_FAILED",
+          reason: prepared.message,
+          documentTitle: pubTarget.title,
+          revisionNumber: pubTarget.revisionNumber,
+        };
       }
     }

     if (continueFailedAfterEffect && missionProjection) {
       missionProjection = {
         ...missionProjection,
         restitution: "PENDING",
       };
@@ -2986,16 +3175,30 @@ export async function postUserMessageAndNora(
   // E07 — post-effect métier restitution: final assistant text must match Studio outcome.
   if (!ownershipLostBeforeD4 && authority?.attempted) {
     assistantBody = composePilotageEffectRestitution({
       priorContent: assistantBody,
       effect: pilotageEffectFromAuthority(authority) ?? null,
     });
   }

+  // E08 POST-UAT — publication outcome after Studio owners; strip pre-effect hedges.
+  if (!ownershipLostBeforeD4 && publicationEffectView?.attempted) {
+    assistantBody = composePublicationEffectRestitution({
+      priorContent: assistantBody,
+      effect: publicationEffectView,
+    });
+  } else if (!ownershipLostBeforeD4 && missionIntent.wantsPublish) {
+    // Hedge-only strip when intention was recognized but no Studio attempt ran.
+    assistantBody = composePublicationEffectRestitution({
+      priorContent: assistantBody,
+      effect: null,
+    });
+  }
+
   const assistantContentForCommit = ownershipLostBeforeD4
     ? reply.content
     : appendMissionAck(
         appendDocumentEffectAck(assistantBody, documentEffectForAck),
         missionProjection,
       );

   const confirmedCapitalisations = capitalisation.capitalisations.filter(
```

### 5.2 `semantic-qualification.ts` (hints publication)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index a9da3d88..b8d9c0d7 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -563,16 +563,19 @@ export type SemanticStudioProjection = {
     sectionHint: string | null;
   };
   publication: {
     wantsPublish: boolean;
     needsExplicitPath: boolean;
     path: string | null;
     targetPath: string | null;
     targetBranch: string | null;
+    documentHint: string | null;
+    objectRef: string | null;
+    repositoryHint: string | null;
     clarify: string | null;
     capabilityId: "d7.prepare_publication" | "d7.dispatch_publication" | "d9.git_integration" | null;
   };
   merge: {
     wantsMerge: boolean;
     prNumber: number | null;
     repositoryHint: string | null;
     clarify: string | null;
@@ -636,16 +639,22 @@ export function projectStudioEffects(q: NoraTurnQualification): SemanticStudioPr

   const path = publish?.parameters.publicationPath?.trim() || publish?.parameters.pathHint?.trim() || null;
   const publication = {
     wantsPublish: Boolean(publish),
     needsExplicitPath: Boolean(publish) && !path,
     path,
     targetPath: path,
     targetBranch: null as string | null,
+    documentHint:
+      publish?.parameters.documentHint?.trim() ||
+      reviseDoc?.parameters.documentHint?.trim() ||
+      null,
+    objectRef: publish?.parameters.objectRef?.trim() || null,
+    repositoryHint: publish?.parameters.repositoryFullName?.trim() || null,
     clarify: publish && !path ? "Chemin de publication Git manquant." : null,
     capabilityId: publishCapability,
   };

   const mergePrRaw = mergePub?.parameters.prNumber;
   const mergePr =
     typeof mergePrRaw === "number" && Number.isFinite(mergePrRaw) && mergePrRaw > 0
       ? Math.trunc(mergePrRaw)
```

### 5.3 `ProjectChrome.tsx` (suppression double en-tête)

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 2792d128..6d8f8fb3 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -32,24 +32,24 @@ const HERO: Record<
     sub: "La mémoire du projet, organisée par thèmes. Retrouvez l’essentiel sans remonter toute la conversation.",
   },
   document: {
     kicker: "ESPACE PROJET  /  DOCUMENTS",
     title: "Bibliothèque du projet",
     sub: "Retrouvez les documents durables du projet, leurs versions et les actions disponibles.",
   },
   git: {
-    kicker: "Espace projet  /  Sources Git",
-    title: "Intégration Git",
-    sub: "Sources et liens Git du projet — capacités réellement disponibles.",
+    kicker: "ESPACE PROJET / DÉPÔTS GIT",
+    title: "Dépôts Git",
+    sub: "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet.",
   },
   publication: {
-    kicker: "Espace projet  /  Résultats et preuves",
-    title: "Publication Git",
-    sub: "Publication et preuves Git — capacités réellement disponibles.",
+    kicker: "ESPACE PROJET / DÉPÔTS GIT",
+    title: "Dépôts Git",
+    sub: "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet.",
   },
 };

 export function ProjectChrome(props: {
   projectId: string;
   projectName: string | null;
   surface: Surface;
   /** Optional status line — never raw technical IDs in the nominal path. */
@@ -73,17 +73,19 @@ export function ProjectChrome(props: {
         : HERO[props.surface];
   const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
   const displayName = props.projectName?.trim() || "Projet";
   const isTravail = props.surface === "travail";
   /** Journal V4 — hero lives inside ProjectJournal (full vs compact 40/60). */
   const isJournal = props.surface === "journal";
   /** Ensemble 07 — Projet / Trajectoire heroes live in ProjectOverview / TrajectoryBoard. */
   const isProjetOrTrajectoire = props.surface === "projet" || props.surface === "pilotage";
-  const breadcrumbOnly = isTravail || isJournal || isProjetOrTrajectoire;
+  /** Ensemble 08 — Dépôts Git / Publications heroes live in GitRepositoriesSurface. */
+  const isGitSurface = props.surface === "git" || props.surface === "publication";
+  const breadcrumbOnly = isTravail || isJournal || isProjetOrTrajectoire || isGitSurface;

   const continuityBadge =
     isTravail && props.statusHint && !/^chargement/i.test(props.statusHint) ? (
       <span className="fig-tag fig-tag-ok" data-testid="project-status-hint">
         {/reprise|conservé|durable/i.test(props.statusHint)
           ? "Contexte conservé"
           : props.statusHint}
       </span>
```

### 5.4 `tokens.css` (popover Infos)

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index d0f908c3..6752bc97 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -5239,16 +5239,46 @@
   padding: 6px 12px;
   border-radius: 30px;
   background: var(--fig-accent-bg);
   color: var(--fig-ink);
   font-size: 11px;
   font-weight: 600;
   width: fit-content;
 }
+.git-info-anchor {
+  position: relative;
+  display: inline-flex;
+}
+.git-info-popover {
+  position: absolute;
+  top: calc(100% + 8px);
+  right: 0;
+  z-index: 40;
+  width: min(360px, calc(100vw - 32px));
+  max-height: min(70vh, 420px);
+  overflow: auto;
+  background: var(--fig-panel);
+  border: 1px solid var(--fig-line);
+  border-radius: 10px;
+  padding: 14px 16px;
+  box-shadow: 0 12px 32px color-mix(in srgb, #000 35%, transparent);
+}
+.git-info-popover-head {
+  display: flex;
+  align-items: center;
+  justify-content: space-between;
+  gap: 8px;
+  margin-bottom: 8px;
+}
+.git-info-popover-title {
+  margin: 0;
+  font-size: 14px;
+  font-weight: 600;
+}
 .git-empty-layout,
 .git-manage,
 .git-enlarge-layout {
   display: flex;
   gap: 18px;
   align-items: stretch;
 }
 .git-empty-main,
```

### 5.5 `GitRepositoriesSurface.tsx` (microcopy + Infos popover)

```diff
diff --git a/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx b/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
index 8f06836d..e3f551a5 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/GitRepositoriesSurface.tsx
@@ -1,12 +1,13 @@
 "use client";

 import { useCallback, useEffect, useMemo, useRef, useState } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
+import { GitFileInfoPopover } from "@/components/integrations/GitFileInfoPopover";

 type GitSource = {
   linkId: string;
   repositoryId: string;
   fullName: string;
   defaultBranch: string | null;
   attachedAt: string;
 };
@@ -86,16 +87,17 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
   const [branchFilterApplied, setBranchFilterApplied] = useState("");
   const [tab, setTab] = useState<TabId>("files");
   const [treePath, setTreePath] = useState("");
   const [entries, setEntries] = useState<TreeEntry[]>([]);
   const [expandedDirs, setExpandedDirs] = useState<Record<string, TreeEntry[]>>({});
   const [file, setFile] = useState<FileView | null>(null);
   const [fileError, setFileError] = useState<string | null>(null);
   const [infoOpen, setInfoOpen] = useState(false);
+  const infoBtnRef = useRef<HTMLButtonElement | null>(null);
   const [enlarged, setEnlarged] = useState(false);
   const [publications, setPublications] = useState<PublicationRow[]>([]);
   const [selectedPublicationId, setSelectedPublicationId] = useState<string | null>(null);
   const [pubFile, setPubFile] = useState<FileView | null>(null);
   const [pubFileError, setPubFileError] = useState<string | null>(null);
   const [pubEnlarged, setPubEnlarged] = useState(false);
   const [busy, setBusy] = useState(false);
   const [error, setError] = useState<string | null>(null);
@@ -649,22 +651,26 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {

   return (
     <div className="git-repos-surface" data-testid="git-surface">
       <header className="e07-surface-hero" data-testid="git-hero">
         <p className="fig-kicker text-[#7477ed]" data-testid="git-hero-kicker">
           ESPACE PROJET / DÉPÔTS GIT
         </p>
         <h1 className="e07-surface-hero-title" data-testid="git-hero-title">
-          {tab === "manage" ? "Gérer les dépôts du projet" : "Dépôts Git"}
+          {tab === "manage"
+            ? "Gérer les dépôts du projet"
+            : "Dépôts Git"}
         </h1>
         <p className="e07-surface-hero-sub" data-testid="git-hero-sub">
           {tab === "manage"
             ? "Chaque projet choisit ses dépôts ; plusieurs rattachements sont possibles."
-            : "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet."}
+            : sources.length === 0
+              ? "Consultez les fichiers de vos dépôts autorisés."
+              : "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet."}
         </p>
       </header>

       {error ? (
         <p className="git-error" role="alert" data-testid="git-error">
           {error}
         </p>
       ) : null}
@@ -681,19 +687,19 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
           </a>
         </section>
       ) : null}

       {sources.length === 0 && !gitUnavailable ? (
         <section className="git-empty-layout" data-testid="git-empty">
           <div className="git-empty-main">
             <h2>Aucun dépôt associé à ce projet</h2>
-            <p>Git est facultatif. Tu peux continuer à travailler avec Nora sans dépôt.</p>
+            <p>Git est facultatif. Vous pouvez continuer à travailler avec Nora sans dépôt.</p>
             <p className="git-muted">
-              Choisis explicitement un dépôt autorisé — aucun rattachement silencieux.
+              Choisissez un dépôt autorisé par GitHub pour l’explorer — aucun rattachement silencieux.
             </p>
             {unattached.length === 0 ? (
               <button
                 type="button"
                 className="git-btn-primary"
                 data-testid="git-empty-associate"
                 disabled
               >
@@ -938,24 +944,48 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
                     <header className="git-preview-head">
                       <div>
                         <h2 className="git-preview-title" data-testid="git-preview-title">
                           {basename(file.path)}
                         </h2>
                         <p className="git-preview-path">{file.path}</p>
                       </div>
                       <div className="git-preview-actions" data-testid="git-preview-actions">
-                        <button
-                          type="button"
-                          className="git-btn-secondary"
-                          data-testid="git-action-infos"
-                          onClick={() => setInfoOpen((v) => !v)}
-                        >
-                          Infos
-                        </button>
+                        <div className="git-info-anchor">
+                          <button
+                            type="button"
+                            className="git-btn-secondary"
+                            data-testid="git-action-infos"
+                            aria-expanded={infoOpen}
+                            aria-controls="git-file-info-panel"
+                            ref={infoBtnRef}
+                            onClick={() => setInfoOpen((v) => !v)}
+                          >
+                            Infos
+                          </button>
+                          <GitFileInfoPopover
+                            open={infoOpen}
+                            onClose={() => setInfoOpen(false)}
+                            anchorRef={infoBtnRef}
+                            fields={{
+                              name: basename(file.path),
+                              type: /\.md$/i.test(file.path) ? "Markdown" : "Texte",
+                              repository: active?.fullName ?? "—",
+                              ref: file.ref || branch || "—",
+                              path: file.path,
+                              commitSha: file.commitSha,
+                              commitShaVerified: file.commitShaVerified,
+                              blobSha: file.blobSha || null,
+                              sizeLabel: file.content
+                                ? `${new TextEncoder().encode(file.content).length} octets`
+                                : null,
+                              origin: "Git (lecture seule)",
+                            }}
+                          />
+                        </div>
                         {file.permalink ? (
                           <a
                             className="git-btn-secondary"
                             href={file.permalink}
                             target="_blank"
                             rel="noreferrer"
                             data-testid="git-action-github"
                           >
@@ -970,30 +1000,16 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
                           aria-label="Agrandir la lecture"
                           data-testid="git-action-enlarge"
                           onClick={() => setEnlarged(true)}
                         >
                           <img src="/figma-git-icons/expand.svg" alt="" width={20} height={20} />
                         </button>
                       </div>
                     </header>
-                    {infoOpen ? (
-                      <dl className="git-details-inline" data-testid="git-file-infos">
-                        <div>
-                          <dt>Commit</dt>
-                          <dd className="git-mono">
-                            {file.commitShaVerified ? file.commitSha : "non vérifié"}
-                          </dd>
-                        </div>
-                        <div>
-                          <dt>Blob</dt>
-                          <dd className="git-mono">{file.blobSha}</dd>
-                        </div>
-                      </dl>
-                    ) : null}
                     <p className="git-preview-kicker">
                       DOCUMENT À RÉFÉRENCE IDENTIFIÉE · LECTURE SEULE
                     </p>
                     <div className="git-preview-body" data-testid="git-preview-body">
                       {/\.md$/i.test(file.path) ? (
                         <SafeMarkdown content={file.content} />
                       ) : (
                         <pre className="git-preview-pre">{file.content}</pre>
@@ -1005,39 +1021,38 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
                 )}
               </section>
             </div>
           ) : null}

           {tab === "publications" ? (
             <section className="git-pubs" data-testid="git-publications">
               <p className="git-muted" style={{ marginBottom: 12 }}>
-                Projection D4/D7/D8 du projet — historique Studio, pas un état live GitHub. Liste des
-                publications du projet (pas l’index du dépôt) ; lecture sous la référence propre de
-                chaque publication. Une PR créée n’est pas un merge.
+                Historique Studio des publications du projet — distinct de l’index du dépôt. Une
+                demande de branche ou de commit n’implique pas une fusion.
               </p>
               {publications.length === 0 ? (
                 <p data-testid="git-publications-empty">Aucune publication Studio pour ce projet.</p>
               ) : (
                 <div className="git-split-3070" data-testid="git-pubs-split">
                   <aside className="git-tree-panel" data-testid="git-pubs-list-panel">
                     <h2>Publications du projet</h2>
                     <ul className="git-pubs-list">
                       {publications.map((p) => {
                         const selected = p.publicationRefId === selectedPublicationId;
                         const statusLabel =
                           p.prStatusLabel ??
                           (p.mergeObserved
-                            ? "Fusion vérifiée (fait D8)"
+                            ? "Fusion vérifiée"
                             : p.openPullRequest
                               ? "PR enregistrée ouverte (historique — non actualisée)"
                               : p.pullRequestCreatedObserved
                                 ? "PR créée (historique)"
                                 : p.commitObserved
-                                  ? "Commit observé (fait D8)"
+                                  ? "Commit observé"
                                   : p.publicationStatus);
                         return (
                           <li key={p.publicationRefId}>
                             <button
                               type="button"
                               className={`git-pubs-item${selected ? " is-selected" : ""}`}
                               data-testid="git-publication-row"
                               aria-pressed={selected}
@@ -1062,24 +1077,46 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
                     {selectedPublication && pubFile ? (
                       <>
                         <header className="git-preview-head">
                           <div>
                             <h2 className="git-preview-title">{basename(pubFile.path)}</h2>
                             <p className="git-preview-path">{pubFile.path}</p>
                           </div>
                           <div className="git-preview-actions" data-testid="git-preview-actions">
-                            <button
-                              type="button"
-                              className="git-btn-secondary"
-                              data-testid="git-action-infos"
-                              onClick={() => setInfoOpen((v) => !v)}
-                            >
-                              Infos
-                            </button>
+                            <div className="git-info-anchor">
+                              <button
+                                type="button"
+                                className="git-btn-secondary"
+                                data-testid="git-action-infos"
+                                aria-expanded={infoOpen}
+                                ref={infoBtnRef}
+                                onClick={() => setInfoOpen((v) => !v)}
+                              >
+                                Infos
+                              </button>
+                              <GitFileInfoPopover
+                                open={infoOpen}
+                                onClose={() => setInfoOpen(false)}
+                                anchorRef={infoBtnRef}
+                                fields={{
+                                  name: basename(pubFile.path),
+                                  type: /\.md$/i.test(pubFile.path) ? "Markdown" : "Texte",
+                                  repository: selectedPublication.repositoryFullName,
+                                  ref:
+                                    selectedPublication.publicationBranch ??
+                                    selectedPublication.targetBranch,
+                                  path: pubFile.path,
+                                  commitSha: pubFile.commitSha,
+                                  commitShaVerified: pubFile.commitShaVerified,
+                                  blobSha: pubFile.blobSha || null,
+                                  origin: "Publication Studio",
+                                }}
+                              />
+                            </div>
                             {pubFile.permalink ? (
                               <a
                                 className="git-btn-secondary"
                                 href={pubFile.permalink}
                                 target="_blank"
                                 rel="noreferrer"
                                 data-testid="git-action-github"
                               >
@@ -1097,33 +1134,16 @@ export function GitRepositoriesSurface({ projectId, projectName }: Props) {
                             >
                               <img src="/figma-git-icons/expand.svg" alt="" width={20} height={20} />
                             </button>
                           </div>
                         </header>
                         <p className="git-preview-kicker">
                           DOCUMENT À RÉFÉRENCE IDENTIFIÉE · LECTURE SEULE
                         </p>
-                        {infoOpen ? (
-                          <p className="git-muted" data-testid="git-pub-info">
-                            {selectedPublication.repositoryFullName} ·{" "}
-                            {selectedPublication.publicationBranch ??
-                              selectedPublication.targetBranch}
-                            {selectedPublication.headSha
-                              ? ` · ${selectedPublication.headSha.slice(0, 8)}`
-                              : ""}
-                            {selectedPublication.prStatusLabel
-                              ? ` · ${selectedPublication.prStatusLabel}`
-                              : selectedPublication.mergeObserved
-                                ? " · merge observé (D8)"
-                                : selectedPublication.openPullRequest
-                                  ? " · PR enregistrée ouverte (historique — non actualisée)"
-                                  : ""}
-                          </p>
-                        ) : null}
                         <div className="git-preview-body" data-testid="git-preview-body">
                           {/\.md$/i.test(pubFile.path) ? (
                             <SafeMarkdown content={pubFile.content} />
                           ) : (
                             <pre className="git-preview-pre">{pubFile.content}</pre>
                           )}
                         </div>
                       </>
```

### 5.6 `IntegrationsPanel.tsx` (11.06 structure)

```diff
diff --git a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
index 138bda02..66f32b32 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/IntegrationsPanel.tsx
@@ -26,17 +26,17 @@ function statusBanner(status: string): { tone: string; text: string } {
         tone: "text-amber-300",
         text: "Approbation d'organisation en attente — aucun accès anticipé aux dépôts.",
       };
     case "ACCESS_REMOVED":
     case "REVOKED":
       return {
         tone: "text-amber-300",
         text:
-          "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les acquis D4 et faits historiques restent conservés.",
+          "Accès Studio local retiré. Ce n’est pas automatiquement une révocation complète de l’installation GitHub. Les documents et faits historiques restent conservés.",
       };
     default:
       return {
         tone: "text-amber-300",
         text: "GitHub n'est pas connecté. Studio et Nora restent entièrement utilisables.",
       };
   }
 }
@@ -203,134 +203,138 @@ export function IntegrationsPanel() {
       </div>
     );
   }

   return (
     <div className="space-y-5" data-testid="integrations-panel">
       <header className="space-y-2">
         <p className="text-[12px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
-          Paramètres · Services externes
+          PARAMÈTRES / SERVICES EXTERNES
         </p>
-        <div className="flex items-center gap-3 flex-wrap">
-          <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">Intégrations</h1>
-          {view?.providerMode === "SCRIPTED" ? (
-            <span
-              className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded border border-[var(--line)] text-[var(--muted)]"
-              data-testid="badge-scripted"
-            >
-              SCRIPTED
-            </span>
-          ) : null}
-        </div>
+        <h1 className="text-[32px] leading-tight font-semibold text-[var(--ink)]">Intégrations</h1>
         <p className="text-base text-[var(--muted)] max-w-3xl">
-          Connectez les services utiles à votre travail. Vous gardez la maîtrise des dépôts et des
-          permissions.
+          Gérer la connexion personnelle GitHub et consulter les dépôts réellement autorisés.
         </p>
       </header>

       <div
         className={`rounded-xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_80%,transparent)] p-4 text-sm font-medium ${banner.tone}`}
         data-testid="integrations-status-banner"
       >
         {banner.text}
       </div>

       <div className="grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
         <section className="studio-card p-5 space-y-4" data-testid="github-integration-card">
-          <div>
-            <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
-              GitHub · Intégration disponible
-            </p>
-            <h2 className="text-[22px] font-semibold mt-1">GitHub</h2>
-            <p className="text-sm text-[var(--muted)] mt-1">
-              Consulter vos dépôts autorisés, travailler avec Nora et publier des documents sous votre
-              contrôle.
-            </p>
+          <div className="flex items-start justify-between gap-3 flex-wrap">
+            <div>
+              <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--fig-accent)]">
+                GitHub · Intégration disponible
+              </p>
+              <h2 className="text-[22px] font-semibold mt-1">GitHub</h2>
+              <p className="text-sm text-[var(--muted)] mt-1">
+                Consulter vos dépôts autorisés, travailler avec Nora et publier des documents sous
+                votre contrôle.
+              </p>
+            </div>
+            {status === "CONNECTED" ? (
+              <span className="git-badge-ok" data-testid="github-connected-badge">
+                Connecté
+              </span>
+            ) : null}
           </div>

           <div className="space-y-2">
             <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
               <p className="text-sm font-semibold">Connexion Studio</p>
               <p className="text-xs text-[var(--muted)] mt-1">
                 Vous êtes authentifié dans Studio : cela ne donne aucun droit sur les dépôts.
               </p>
             </div>
             <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
               <p className="text-sm font-semibold">Accès aux dépôts</p>
               <p className="text-xs text-[var(--muted)] mt-1">
                 {status === "CONNECTED"
-                  ? "Installation et autorisation utilisateur GitHub App vérifiées côté serveur."
-                  : "Aucune installation GitHub App ni autorisation utilisateur n'est présumée."}
+                  ? "Les dépôts listés ci-dessous sont ceux réellement autorisés pour votre compte."
+                  : "Aucun dépôt n’est présumé accessible tant que GitHub n’est pas connecté."}
               </p>
             </div>
             <div className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--panel)_60%,transparent)] px-3.5 py-3">
               <p className="text-sm font-semibold">Publication documentaire</p>
               <p className="text-xs text-[var(--muted)] mt-1">
-                Les branches, commits, PR et merges nécessitent un mandat distinct.
+                Une branche ou un commit de publication n’autorise pas une fusion automatique.
               </p>
             </div>
           </div>

           {status === "CONNECTED" ? (
-            <ul className="text-sm space-y-1" data-testid="repo-list">
-              {view?.repositories.map((r) => (
-                <li key={r.id} className="mono muted">
-                  {r.fullName}
-                  {r.defaultBranch ? ` · ${r.defaultBranch}` : ""}
-                </li>
-              ))}
-            </ul>
+            <div>
+              <p className="text-sm font-semibold mb-2">Dépôts autorisés</p>
+              <ul className="text-sm space-y-1" data-testid="repo-list">
+                {view?.repositories.map((r) => (
+                  <li key={r.id} className="mono muted">
+                    {r.fullName}
+                    {r.defaultBranch ? ` · ${r.defaultBranch}` : ""}
+                  </li>
+                ))}
+              </ul>
+            </div>
           ) : (
             <p className="text-sm muted">Aucun dépôt autorisé.</p>
           )}

           <div className="flex flex-wrap gap-3 pt-1">
             {status === "CONNECTED" ? (
               <>
                 <button
                   type="button"
                   className="studio-btn"
                   disabled={busy}
                   onClick={() => void refreshRepos()}
                   data-testid="refresh-repos"
                 >
-                  Actualiser les dépôts
+                  Actualiser
                 </button>
                 <button
                   type="button"
                   className="studio-btn-secondary"
                   disabled={busy}
                   onClick={() => setConfirmDisconnect(true)}
                   data-testid="disconnect-github"
                   title="Ouvre la confirmation — aucun appel de déconnexion avant confirmation"
                 >
-                  Déconnecter (Studio)
+                  Déconnecter
                 </button>
               </>
             ) : (
               <>
                 <button
                   type="button"
                   className="studio-btn"
                   disabled={busy}
                   onClick={() => void connect()}
                   data-testid="connect-github"
                 >
                   Configurer GitHub
                 </button>
-                <button type="button" className="studio-btn-secondary" disabled={busy} onClick={() => void refresh()}>
+                <button
+                  type="button"
+                  className="studio-btn-secondary"
+                  disabled={busy}
+                  onClick={() => void refresh()}
+                >
                   Plus tard
                 </button>
               </>
             )}
           </div>
         </section>

-        <aside className="studio-card p-5 space-y-3">
+        <aside className="studio-card p-5 space-y-3" data-testid="integrations-explain-column">
           <h2 className="text-[20px] font-semibold">Une connexion à la carte</h2>
           <p className="text-sm text-[var(--muted)]">
             Connectez GitHub maintenant, ou seulement lorsqu&apos;un projet en aura besoin.
           </p>
           {[
             ["1 · Choisir le compte", "Sur GitHub, choisissez un compte ou une organisation."],
             ["2 · Sélectionner les dépôts", "Limitez l'installation aux dépôts nécessaires."],
             ["3 · Conserver le contrôle", "Vous pourrez ajouter ou retirer des dépôts plus tard."],
@@ -342,18 +346,11 @@ export function IntegrationsPanel() {
               <p className="text-sm font-semibold">{title}</p>
               <p className="text-xs text-[var(--muted)] mt-1">{body}</p>
             </div>
           ))}
         </aside>
       </div>

       {message ? <p className="text-sm text-amber-400">{message}</p> : null}
-      <p className="text-xs text-[var(--muted)]" data-testid="provider-mode-note">
-        {!view
-          ? "Chargement du statut d'intégration…"
-          : view.providerMode === "SCRIPTED"
-            ? "Fournisseur d'effet Git SCRIPTED (fixtures). Orthogonal au flux OAuth user-to-server."
-            : "Fournisseur d'effet Git REAL. Orthogonal au statut OAuth CONNECTED — mutations bornées documentary + mandat D6."}
-      </p>
     </div>
   );
 }
```

### 5.7 Docs construction (as-built + delivery-history)

```diff
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 2f40c865..076e879c 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -1,15 +1,17 @@
 # Ensemble 08 — As-built (consultation Git + conduite Nora)

 | Champ | Valeur |
 |---|---|
-| Date | 2026-11-21 (finalisation technique / préflight RECETTE) |
+| Date | 2026-11-22 (POST-UAT 01 correctif DEV — as-built mis à jour) |
 | Branche | `feat/next-ensemble08-git-publications-nora` |
 | Base | `origin/main` @ `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
-| Profil | CRITICAL · Delivery finalisation · NO RELEASE |
+| Profil | CRITICAL · Delivery correctif post-UAT · NO RELEASE |
 | CKC | FALLBACK (Delivery #8) |
-| Candidate SHA | `98185598de0d3f3b84af862aecea04b9099217ca` · TREE `1c70839facb7fbc799980c585ce8bfba51cdb5d6` · BUILD `1xEbvCdTAX6ht262w4oKF` |
+| Freeze RECETTE (inchangé) | `98185598de0d3f3b84af862aecea04b9099217ca` · TREE `1c70839f` · BUILD `1xEbvCdTAX6ht262w4oKF` |
+| Candidat DEV post-UAT | **worktree dirty** — nouveau SHA après commit Morris (pas encore figé) |
+| RECETTE | **FROZEN / AVAILABLE** — aucune mutation ce mandat |

 ## Livré (y compris finalisation technique)

 ### Capacité A — Consultation Git
 - Listing répertoire D9 : `listDirectory` / `listGitDirectory` / `GET .../git/tree`
@@ -24,10 +26,20 @@
 - Qualification durable `d7.merge_publication` (schema + projection `merge.wantsMerge`)
 - `wantsMergeFromQual` **jamais** forcé à `true` depuis le seul mot « merge »
 - Cible exacte dépôt + PR ; contradiction same-PR → zéro effet
 - `admitConversationalMergeMandate` + provenance USER D6
 - Merge SHA : `merge_commit_sha` observé uniquement
+- **POST-UAT 01** : publication d’un document **existant** (sans D4 AVAILABLE same-turn) via `resolvePublicationDocumentTarget`
+- Gate WRITE REAL avant préparation : `publicationWriteGate` → refus explicite si `STUDIO_GITHUB_ALLOW_MUTATIONS≠documentary`
+- Restitution Nora post-Studio : `composePublicationEffectRestitution` (strip hedge « reste à confirmer par Studio »)
+- Champs qual `publication.documentHint` / `objectRef` / `repositoryHint`
+
+### Capacité UX (POST-UAT 01)
+- Double en-tête « Intégration Git » : `ProjectChrome` breadcrumb-only pour surfaces `git`/`publication`
+- Microcopy Pilote : jargon D4/D7/D8 / « projection » retiré des surfaces Dépôts Git / Intégrations
+- Infos : popover ancré `GitFileInfoPopover` (Escape / clic extérieur / focus) — **état ouvert non spécifié Figma** (candidat simple)
+- Intégrations : badge Connecté, colonne d’explication, confirmation déconnexion inchangée (pas d’appel avant confirm)

 ### REAL multi-dépôts
 - Allowlist explicite `allowedFullNames` + env `GITHUB_APP_ALLOWED_REPOS` (même owner)

 ### Preuves / docs construction
@@ -45,12 +57,12 @@
 ## Non livré / réserves
 - Figma G5 runtime : **NOT PROVEN** — **VISUAL ACCEPTANCE DEFERRED TO MORRIS UAT**
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (WRITE/MERGE hors mandat)
 - GitHub REAL READ : **NOT PROVEN** ce cycle
 - Nora LIVE E2E : **NOT PROVEN**
-- Candidate Git figée / build RECETTE : **NOT AVAILABLE**
-- RECETTE déploiement : hors cycle (préflight only)
+- Candidate Git figée / build RECETTE : **SERVI** `@98185598` / `1xEbvCdTAX6ht262w4oKF` sur lane E07
+- G5 visuelle : **NOT PROVEN** — UAT Morris

 ## Preuves exécutées (finalisation)
 - `tsc --noEmit` PASS
 - `git-refs-coverage-s03` **19/19** PASS
 - unit ciblés E08 (refs/provenance/…) — voir Review Pack

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 397824a8..96875b69 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,10 +1,45 @@
 # SFIA Studio Next — Delivery history

 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 (Europe/Paris) |
+| Macro-lot | Ensemble 08 — correctif post-UAT 01 (publication Nora + UX) |
+| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
+| Branche | `feat/next-ensemble08-git-publications-nora` |
+| Base | `origin/main` `a12f89a1` |
+| RECETTE | **FROZEN** `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **aucune mutation** |
+| Diagnostic UAT | Classe **A/B** (+ **C** si path exécuté) : intention reconnue, hedge LLM, **zéro** `effect_attempt` 2026-11-22 ; gate historique `documentEffectForAck.status===AVAILABLE` bloquait publish-existing |
+| Correctifs | publish-existing + WRITE-off restitution Nora ; chrome hero unique ; microcopy ; Infos popover ; Intégrations 11.06 structure |
+| Tests | unit restitution/target + tsc PASS ; PG/Playwright LIVE **non** déclarés équivalents SCRIPTED |
+| Push projet | **NONE** |
+| Cutover RECETTE | **NOT EXECUTED** — GO Morris SHA-specific requis |
+| Verdict | **DELIVERY READY WITH RESERVES** (G5 Figma runtime + WRITE sandbox hors mandat) |
+
+## delivery_id: DELIV-2026-11-21-ENSEMBLE08-RECETTE-CUTOVER
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 ≈ 21:02 CET |
+| Macro-lot | Ensemble 08 — cutover RECETTE existante E07 |
+| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
+| GO Morris | SHA `98185598` · BUILD `1xEbvCdTAX6ht262w4oKF` |
+| Avant | E07 `@5ad8fa57` / `BtZP6qDx5oAw8jwPQSEhc` |
+| Après | E08 servi HTTP `<!--1xEbvCdTAX6ht262w4oKF-->` · service `ml4d-ux004` |
+| DB | `sfia_next_recette_ml4` préservée · projects 26 inchangé · +sessions/messages smoke |
+| Backup | immédiat + restore proof isolée PASS |
+| Playwright SCRIPTED on RECETTE | 3 FAIL (attendu LIVE/REAL) |
+| Smoke API/surfaces | PASS (Pilot A test login) |
+| G5 | NOT PROVEN — Morris UAT |
+| Push projet | **NONE** |
+| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |
+
 ## delivery_id: DELIV-2026-11-21-ENSEMBLE08-CANDIDATE-FREEZE-RECETTE-PREP

 | Field | Value |
 | --- | --- |
 | Date | 2026-11-21 (Europe/Paris) |
```

---

## 6. Points de revue indépendante (checklist ChatGPT)

### 6.1 Sélection document / révision (ambiguïté)

Vérifier dans `publication-document-target.ts` + appels `service.ts` :

- Priorité : same-turn D4 AVAILABLE → `documentFocus` (revisionId exact) → hint titre/`doc_*` via `resolveReviseTarget` → sole document.
- Hint explicite sans match → `NOT_FOUND` (pas de fallback silencieux).
- Plusieurs titres matchés → `AMBIGUOUS` + candidates ; mission `AWAITING_CLARIFICATION` ; **aucun** prepare.
- Focus présent mais document absent de la liste → retombe sur hint/sole (pas d’invention d’id).
- **Limite documentée :** sans focus, la révision publiée est la **latest AVAILABLE** du document résolu (pas une résolution `v2` textuelle autonome hors focus/D4).

### 6.2 Strip hedges vs résultat inconnu

Vérifier `publication-effect-restitution.ts` :

- Strip regex uniquement sur formulations « reste à confirmer par Studio » / équivalents.
- Si `effect.attempted` et `outcome === "UNKNOWN"` → faits « encore en vérification » (ni succès ni refus définitif).
- Si `effect` null / non attempted → strip seul, **pas** de faux succès.
- `COMPLETED` uniquement quand resumeStatus === COMPLETED après mandat.

### 6.3 Continuité D3–D9

Vérifier le bloc publication dans le diff `service.ts` : write gate avant prepare ; mandate après prepare ; restitution après owners ; obs events `publication_write_disabled` / `prepared_*`.

### 6.4 Popover Infos + écrans

Vérifier `GitFileInfoPopover.tsx` + diff surface/CSS/IntegrationsPanel : Escape, mousedown outside, focus ouverture, pas d’injection Markdown ; chrome breadcrumb-only pour git.

---

## 7. Tests (honnêtes)

| Suite | Résultat |
|---|---|
| `tsc --noEmit` | **PASS** |
| unit restitution / target / refs S03 / gates / continuity | **PASS** (37+ ciblés rapportés cycle) |
| PostgreSQL D6/D7/D8/D9 intégration complète | **NOT RUN** |
| Playwright E08 DEV | **NOT RUN** |
| Nora LIVE E2E post-fix | **NOT RUN** (fix non déployé RECETTE) |
| Figma G5 ≤2px runtime | **NOT PROVEN** |

SCRIPTED ≠ REAL. RECETTE WRITE OFF non contourné.

---

## 8. Fake / Real

| Capacité | Niveau |
|---|---|
| Publish-existing + WRITE-off restitution | DETERMINISTIC PROVEN (unit) |
| Continuité owners après fix en LIVE | **NOT PROVEN** |
| GitHub REAL WRITE | **NOT PROVEN** / hors mandat |
| Figma pixel | **NOT PROVEN** |

---

## 9. Réserves

1. Correctifs non commités / non déployés RECETTE.
2. PG / Playwright / Nora LIVE non exécutés → revue indépendante du **code** possible ; preuve runtime **incomplète**.
3. Infos open state : candidat UX (Figma 11.03 sans état ouvert) — DESIGN DECISION si Morris exige norme visuelle.
4. Résolution révision « v2 » sans focus/D4 : limitée à latest (voir §6.1).

---

## 10. Verdict Cursor

**DELIVERY READY WITH RESERVES**

Sortie ≠ réception UAT ≠ GO cutover ≠ autorisation WRITE.
Republication handoff : contenu source + diffs pour revue ChatGPT indépendante.

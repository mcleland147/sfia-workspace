# SFIA Studio Next — ML5 Integrated Continuity & Reliability Corrective Delivery

**Cycle:** 8 — Delivery / Critical
**Typologie:** EVOL — macro-lot correctif intégré (17 MP + exigences complémentaires Morris 2026-11-27)
**Date:** 2026-11-27 (Europe/Paris)
**Branch:** `sfia/next-ml5-integrated-delivery-20261123`
**HEAD:** `58ca9486003805f74e69a0842f2c0792a7184437`
**Class:** NO RELEASE
**Gate:** DEV construction only — no LIVE OpenAI, no RECETTE mutation, no project commit/push/PR

---

## 1. Mandat et décisions Morris

Mandat: un seul macro-lot correctif intégré (axes A–D, 26 sous-ensembles) couvrant les 17 MP MaintiPlan + arbitrages Morris du 27/11/2026.

Arbitrages retenus: Option C allocation multi-modèles gouvernée par environnement (qualification avant admission RECETTE); continuité cognitive/fonctionnelle; Journal arborescence centrale; compteur documentaire par identité; panneau droit Repères (5 récents); lisibilité textuelle sans nouvelle grammaire visuelle; spinner animé réel; rail paramètres partagé; compositeur Nora partagé; Nora interlocutrice unique / Studio effets; Morris valide macro-lot + Critical.

Interdits: LIVE nouveau, cutover RECETTE, commit/push/PR projet, WEB/Admin, 2e moteur cognitif/audio, migration schéma par défaut, Figma edit. Exception L3: Review Handoff only.

---

## 2. Local Git Truth Check

| Item | Observed |
|------|----------|
| Repo | `mcleland147/sfia-workspace` (origin) |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD full | `58ca9486003805f74e69a0842f2c0792a7184437` |
| Main remote | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Docs tip | `f6cfd5ac01f848f6708501e1a390f37243721ab9` |
| Continuity blob | `1a5f822f650442ba8325287dcfc65c81e9113e6e` ✓ |
| Candidate RECETTE | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` (ancestor of HEAD) |
| Handoff tip | `f6999c97abc6a1fd01c18e2ff441d66189ff9a33` |
| Staged unexpected | none at intake |
| Dirty prior | `.tmp-sfia-review/` only (out of commit) |

**Verdict:** GIT TRUTH OK — diverge from reported short SHA 58ca9486 resolved to full HEAD above.

---

## 3. ENV-01

| Lane | Port | PG | DB/role | State |
|------|------|-----|---------|-------|
| DEV | 3100 | 5433 | `sfia_next_dev` / `sfia_next_dev` | Started for this cycle (`STUDIO_LANE=DEV`) |
| RECETTE | 3200 | 5434 | `sfia_next_recette_ml4` | Untouched (HTTP 307); BUILD marker `rpEczSp61evIZ7d6fnIWR` preserved |
| STABLE | — | — | — | NOT AVAILABLE |

**Verdict:** ENV ROUTING COMPLETE — DEV only for mutations; RECETTE READ-only / no restart.

---

## 4. Product Versioning

- Source: `web/src/lib/product-version.ts` — NO RELEASE (construction DEV).
- No official version number invented.
- Delivery will be traced in `construction/delivery-history.md` at Étape 7.

---

## 5. Git Review Index (sources consulted — Step 0)

| Path | Ref/SHA | Blob | Role | Status |
|------|---------|------|------|--------|
| `conception-fonctionnelle/continuite-cognitive-et-fonctionnelle-du-projet.md` | `f6cfd5ac` | `1a5f822f` | Priorité continuité §3–12 | READ |
| `governance/environnements-recette-et-promotions.md` | main `997897fd` | `14b61f0d` | ENV-01 | READ (prior + reconfirm) |
| `governance/product-versioning.md` | main `997897fd` | `8bc93e0f` | NO RELEASE | READ (prior) |
| Diagnostic handoff `sfia-review-handoff/latest-chatgpt-review.md` | `f6999c97` | `6e9ac6a6` | 17 MP causes | READ (prior cycle) |
| Code local HEAD `58ca9486…` | worktree | — | Implementation baseline | EXAMINED |

Full index expanded as construction proceeds.

---

## 6. Analyse initiale / diagnostic résiduel

### Confirmé (code + preuves antérieures)
1. **A.1 / MP-15** — `provisional-cognitive-policy.ts` DEV-only → RECETTE `legacy_sol` / Sol medium.
2. **MP-13** — `project-context.ts` filtre `SAVING` pour compteur documents.
3. **MP-17** — `PersonalRailSettingsMenu` monté seulement si `personalSpace`.
4. **MP-01/02** — deux compositeurs (sas vs Travail); sas sans micro.
5. **MP-07** — onde visible en phase `requesting` (niveaux plats / écoute apparente).
6. **MP-11** — restitution `**Résultat Studio :**` technique dans `pilotage-effect-restitution.ts`.
7. **MP-08** — panneau droit inline page.tsx: Continuité / Contrats / Dossier.
8. **B.2** — `parentSubjectId` + UI Journal arbre existent; autonomie Nora / scénario hiérarchique NON PROUVÉS LIVE.
9. **Récents** — aucune persistance « éléments consultés » Pilote (greenfield localStorage/session admissible sans migration).

### Partiel / à instruire pendant construction
- **MP-09 T05** — multi-intent OPEN_CYCLE manquant: JSON qualification non retrouvé; examiner intent admission + S05 + effets.
- **MP-06** — 4 × `composer_dictation failed` / timeout 10s: cause exacte non démontrée; correctifs robustesse DEV; LIVE gate.
- **MP-14/16** — T08 909k tokens: réconcilier segments/observations; optimiser redondances démontrées.
- **A.5** — works OPEN après production COMPLETE (C18 resume-friendly) — ne pas forcer COMPLETE cosmétique.

---

## 7. Blast radius

| Surface | Impact |
|---------|--------|
| API | admission cognitive; éventuellement recent-items endpoint local; projections project-context |
| Données | pas de migration; localStorage récents; lectures D4/D5/D6 existantes |
| Autorité | D6 inchangé; restitution post-effet seulement après APPLIED |
| UX | shell rail, compositeur partagé, panneau droit, markdown, spinner, dictée UI |
| Sécurité | isolation lanes; pas d'élargissement rétention audio |
| Coûts | Option C structure; pas de LIVE |
| Reprise | finalisation work + idempotence effets |
| Tests | unit/integration/browser DEV |

---

## 8. Matrice 26 sous-ensembles (suivi)

| ID | Exigence / MP | Statut |
|----|---------------|--------|
| A.1 | Allocation gouvernée MP-15 | INVESTIGATING |
| A.2 | Qualif sémantique multi-intent MP-09 | NOT STARTED |
| A.3 | Orchestration capacités MP-09 | NOT STARTED |
| A.4 | Contexte / efficience MP-14 | NOT STARTED |
| A.5 | Finalisation / reprise | NOT STARTED |
| A.6 | Observabilité / activité MP-11 | NOT STARTED |
| A.7 | FinOps MP-16 | NOT STARTED |
| B.1 | Capitalisation autonome MP-10 | NOT STARTED |
| B.2 | Arborescence sujets/sous-sujets MP-10 | NOT STARTED |
| B.3 | Synthèses / acquis / provenance | NOT STARTED |
| B.4 | Points ouverts MP-03 | NOT STARTED |
| B.5 | Décisions durables | NOT STARTED |
| B.6 | Trajectoire vivante MP-12 | NOT STARTED |
| B.7 | Réutilisation cognitive MP-10 | NOT STARTED |
| B.8 | Projections projet MP-13 | IMPLEMENTING |
| C.1 | Compositeur partagé MP-01/02 | NOT STARTED |
| C.2 | Saisie / brouillons | NOT STARTED |
| C.3 | Transport dictée MP-06 | NOT STARTED |
| C.4 | États audio MP-07 | NOT STARTED |
| C.5 | Robustesse / reprise | NOT STARTED |
| D.1 | Lisibilité conversationnelle MP-05 | NOT STARTED |
| D.2 | Animation préparation MP-04 | NOT STARTED |
| D.3 | Restitution naturelle MP-11 | NOT STARTED |
| D.4 | Panneau droit MP-08 | NOT STARTED |
| D.5 | Rail / paramètres MP-17 | IMPLEMENTING |
| D.6 | Cohérence UX transverse | NOT STARTED |

---

## 9. Matrice 17 MP (suivi)

| MP | Owner | Initial | Cause / besoin | Correction | Qualif | Statut |
|----|-------|---------|----------------|------------|--------|--------|
| MP-01 | C | OPEN | micro absent sas | compositeur partagé | DET pending | NOT STARTED |
| MP-02 | C | OPEN | hauteur/comportement divergents | shared composer | DET pending | NOT STARTED |
| MP-03 | B | OPEN | points ouverts projection | B.4 + panneau | DET pending | NOT STARTED |
| MP-04 | D | OPEN | spinner non animé perçu | CSS/runtime | DET pending | NOT STARTED |
| MP-05 | D | OPEN | densité | SafeMarkdown/tokens | DET pending | NOT STARTED |
| MP-06 | C | OPEN CRITICAL | dictée LIVE fail | robustesse + LIVE gate | LIVE REQUIRED | BLOCKED LIVE |
| MP-07 | C | OPEN | onde premature | hide wave until listening | DET pending | NOT STARTED |
| MP-08 | D | OPEN | panneau hors contrat | rewrite Repères | DET pending | NOT STARTED |
| MP-09 | A | OPEN | T05 multi-intent | residual + fix | DET/LIVE | INVESTIGATING |
| MP-10 | B | OPEN | continuité / arbre | B.1–B.7 | LIVE for autonomy | NOT STARTED |
| MP-11 | A/D | OPEN | restitution technique | natural copy | DET pending | NOT STARTED |
| MP-12 | B | OPEN | trajectoire / enums | B.6 | DET pending | NOT STARTED |
| MP-13 | B | OPEN | compteur SAVING | library identity count | DET | IMPLEMENTING |
| MP-14 | A | OPEN | T08 consommation | A.4 | DET/LIVE | NOT STARTED |
| MP-15 | A | OPEN | Sol-only RECETTE | Option C env gate | DET; LIVE for real admit | IMPLEMENTING |
| MP-16 | A | OPEN | FinOps incohérences | A.7 | DET | NOT STARTED |
| MP-17 | D | OPEN | settings personal-only | shared rail foot | DET | IMPLEMENTING |

---

## 10. Liste exacte des fichiers prévus (avant 1ère modification)

### Production — modifications
1. `web/src/domains/preparation/project-context.ts` — compteur documents bibliothèque (identité)
2. `web/src/components/figma/ProjectOverview.tsx` — libellé « Documents du projet »
3. `web/src/components/shell/StudioShell.tsx` — monter settings sur tous rails authentifiés
4. `web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts` — Option C env + gate RECETTE qualified
5. `web/src/domains/conversation/pilotage-effect-restitution.ts` — restitution naturelle
6. `web/src/domains/conversation/publication-effect-restitution.ts` — alignement naturel
7. `web/src/components/figma/ComposerDictationControl.tsx` — onde seulement en listening
8. `web/src/components/figma/PreparationConversation.tsx` — adopter compositeur partagé
9. `web/src/components/figma/NoraConversation.tsx` — adopter compositeur partagé
10. `web/src/app/projects/[projectId]/page.tsx` — panneau droit + récents
11. `web/src/components/figma/tokens.css` — densité conversation + spinner si besoin
12. `web/src/components/SafeMarkdown.tsx` — respiration listes/paragraphes si requis
13. `web/src/components/figma/SasCreateProgressPopup.tsx` — animation états en cours
14. Conducteur / knowledge / FinOps files as residual diagnosis dictates (registered when touched)

### Production — créations envisagées
15. `web/src/components/figma/NoraSharedComposer.tsx` — compositeur commun sas/Travail
16. `web/src/lib/project-recent-items.ts` — persistance client 5 récents (pilot/project scoped)
17. Tests unitaires associés (policy, counter, restitution, composer, recent items, rail)

### Documentation (Étape 7)
18. `construction/delivery-history.md`
19. `construction/ml5-registre-couverture-et-revue-de-developpement.md`
20. Contrats techniques impactés (allocation, UX travail) — sync as-built

Toute extension ultérieure sera justifiée dans ce registre.

---

## 11. Checkpoint préparation

**PREPARATION CHECKPOINT PASSED** — ENV ROUTING COMPLETE; Git Truth OK; continuity contract read; file list frozen for first wave; construction authorized within mandate.

---

## 12. Construction log (cumulative)

### ENV note (runtime)
Shell had `STUDIO_DEV_TEST_LOGIN=0` and `NODE_ENV=production` overriding `.env.local` — caused false `testLoginAvailable=false`. Restarted DEV with `env -u STUDIO_DEV_TEST_LOGIN -u NODE_ENV`. RECETTE :3200 untouched.

### Implemented (DEV) — by subset

| ID | Statut | Preuve |
|----|--------|--------|
| A.1 | VERIFIED AT DECLARED LEVEL (DET) | Option C: RECETTE requires `SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified`; DEV unchanged; unit tests admit/refuse |
| A.2 | VERIFIED AT DECLARED LEVEL (DET) | `listPilotageEffectBindings` + per-intent `conversationalCommandKeyForIntent`; service loops all bindings; LIVE residual for T05 parity |
| A.3 | VERIFIED AT DECLARED LEVEL (DET) | Same loop applies/refuses each binding with OBS codes; no silent drop of siblings under shared turn key |
| A.4 | VERIFIED AT DECLARED LEVEL (DET) | `segment-context-efficiency.ts` + hinted knowledge after probe; unit tests; LIVE residual for T08 parity |
| A.5 | VERIFIED AT DECLARED LEVEL (DET) | `resolveCognitiveWorkTerminalStatus` — COMPLETE when production COMPLETE without await/suspend |
| A.6 | PARTIAL | Activity remains owner-driven; natural restitution improves pilot-facing chain; no fake telemetry |
| A.7 | VERIFIED AT DECLARED LEVEL (DET) | FinOps: billable filter; project attribution via work ids; coverage subtext explains 100%/0% estimation |
| B.1 | IMPLEMENTED (DET wiring) | parentSubjectId on knowledge proposals + adapter guidance; LIVE autonomy residual |
| B.2 | IMPLEMENTED (DET + UI exists) | Schema/UI tree pre-existed; capitalisation now accepts parentSubjectId; LIVE natural hierarchy residual |
| B.3–B.5 | PARTIAL / preserve | Structures preserved; markdown markers not newly broken |
| B.6 | VERIFIED AT DECLARED LEVEL (DET) | Cycle type human labels in Travail aside via `CYCLE_TYPE_LABELS` |
| B.7 | IMPLEMENTED (DET) | Hinted knowledge selection in conductor segments; LIVE reuse residual |
| B.8 | VERIFIED AT DECLARED LEVEL (DET) | Document counter = library identities; label « Documents du projet » |
| C.1–C.2 | VERIFIED AT DECLARED LEVEL (DET+BROWSER) | `NoraSharedComposer` shared; sas+Travail wired; auto-resize |
| C.3 | IMPLEMENTED (DET) | Prep dictation API + session `preparationId`; LIVE Realtime residual (MP-06) |
| C.4 | VERIFIED AT DECLARED LEVEL (DET) | Wave only when listening/finalizing (`showWave`) |
| C.5 | PARTIAL | Session ownership/concurrency preserved; LIVE negative paths residual |
| D.1 | VERIFIED AT DECLARED LEVEL (DET) | tokens.css body 12.5px/1.65, list/heading/table spacing |
| D.2 | VERIFIED AT DECLARED LEVEL (DET) | Spinner `display:block` + will-change; terminal stops spin |
| D.3 | VERIFIED AT DECLARED LEVEL (DET) | Natural restitution; no « Résultat Studio » block |
| D.4 | VERIFIED AT DECLARED LEVEL (DET+BROWSER struct) | Repères = 5 récents localStorage; open points compact; Continuité/Contrats/Dossier removed |
| D.5 | BROWSER PROVEN (sas) | Paramètres on sas rail → Intégrations / Consommation |
| D.6 | PARTIAL | Cross-surface consistency spot-checked; F2 full pixel not claimed |

### Browser proofs (DEV)
- Prep `prep_a43d8c90…`: mic « Dicter un message » present & enabled; Paramètres menu opens with Intégrations + Consommation et coûts.
- Auth: `/api/dev/auto-session` after clearing shell override.

### Unit tests executed (sample)
88 PASS focused suite including policy, FinOps, A.4, A.5, composer, dictation session, MP-09, recent items, restitution.

### Fake/Real
- DETERMINISTIC PROVEN ≠ READY FOR REAL.
- Dictation LIVE, multi-model RECETTE admit, Nora hierarchy autonomy, cognitive reuse: **LIVE gate required**.

### Extended file list (beyond §10)
- `assert-owned-preparation.ts`, prep dictation API tree, `cognitive-conductor-terminal.ts`, `segment-context-efficiency.ts`, FinOps usage modules, `conversation-authority.ts` (per-intent keys), `run-nora-cognitive-turn.ts`, `service.ts` multi-binding loop (pre-existing + keys), e2e restitution expectations, multiple unit tests.

### Next
- Sync ML5 coverage registry + as-built contracts.
- Critical self-review of full diff.
- FULL pack content for modified files.
- L3 handoff publish.
- Propose bounded LIVE mandate to Morris.

---
## 13. Created files (integral)

### NoraSharedComposer.tsx
```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { ComposerDictationControl } from "@/components/figma/ComposerDictationControl";

export type NoraSharedComposerProps = {
  draft: string;
  onDraft: (value: string) => void;
  busy: boolean;
  onSend: () => void;
  variant: "prep" | "travail";
  projectId?: string;
  preparationId?: string;
  dictationEnabled?: boolean;
  composerLocked?: boolean;
  composerLockReason?: string;
  dossierAttachment?: {
    attemptId: string;
    contractId?: string | null;
    dossierVersion?: number | string | null;
    verdictD8?: string | null;
  } | null;
  onRemoveDossierAttachment?: () => void;
  status?: string;
  placeholder?: string;
};

export function NoraSharedComposer(props: NoraSharedComposerProps) {
  const composerLocked = Boolean(props.composerLocked);
  const hasDossier = Boolean(props.dossierAttachment?.attemptId);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [imeComposing, setImeComposing] = useState(false);
  const [dictationActive, setDictationActive] = useState(false);

  const dictationProjectId = props.projectId;
  const dictationPreparationId = props.projectId ? undefined : props.preparationId;
  const dictationMount = Boolean(dictationProjectId || dictationPreparationId);

  const sendDisabled =
    props.busy ||
    dictationActive ||
    (props.variant === "travail"
      ? !props.draft.trim() && !hasDossier
      : !props.draft.trim()) ||
    composerLocked;

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 700px)").matches;

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const max = Math.min(window.innerHeight * 0.36, 280);
    const min = props.variant === "prep" ? 42 : 24;
    const next = Math.min(Math.max(el.scrollHeight, min), max);
    el.style.height = `${next}px`;
    el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
  }, [props.draft, props.variant]);

  const placeholder =
    props.placeholder ??
    (props.variant === "prep"
      ? "Décrivez votre idée, une question ou une hésitation…"
      : "Écrire à Nora dans ce projet…");

  const dictationControl = dictationMount ? (
    <ComposerDictationControl
      projectId={dictationProjectId}
      preparationId={dictationPreparationId}
      draft={props.draft}
      onDraft={props.onDraft}
      disabled={composerLocked || props.busy}
      enabled={props.dictationEnabled === true}
      onActiveChange={setDictationActive}
    />
  ) : null;

  if (props.variant === "prep") {
    const expanded = props.draft.includes("\n") || props.draft.length > 80;
    return (
      <div
        className="sas-composer"
        data-testid="prep-composer"
        data-dictation-active={dictationActive ? "1" : "0"}
        data-composer-expanded={expanded ? "1" : "0"}
        style={
          expanded
            ? {
                height: "auto",
                maxHeight: "min(36vh, 280px)",
                minHeight: "var(--sas-composer-h)",
              }
            : undefined
        }
      >
        <textarea
          ref={textareaRef}
          className="sas-composer-input"
          value={props.draft}
          onChange={(e) => props.onDraft(e.target.value)}
          placeholder={placeholder}
          aria-label="Message à Nora"
          data-testid="prep-draft"
          rows={1}
          disabled={props.busy || composerLocked}
          readOnly={composerLocked || dictationActive}
          hidden={dictationActive}
          tabIndex={dictationActive ? -1 : 0}
          data-dictation-hide={dictationActive ? "1" : undefined}
          onCompositionStart={() => setImeComposing(true)}
          onCompositionEnd={() => setImeComposing(false)}
          onKeyDown={(e) => {
            if (composerLocked || dictationActive) {
              e.preventDefault();
              return;
            }
            if (imeComposing || e.nativeEvent.isComposing) return;
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
              e.preventDefault();
              if (props.draft.trim()) props.onSend();
            }
          }}
        />
        <div
          className="sas-composer-bar"
          aria-hidden={!dictationActive && !props.draft.trim()}
          data-dictation-active={dictationActive ? "1" : "0"}
        >
          <span
            className="sas-composer-hint"
            data-dictation-hide={dictationActive ? "1" : undefined}
            hidden={dictationActive}
          >
            <span className="sas-composer-plus" aria-hidden>
              ＋
            </span>
            Échanger librement avec Nora
          </span>
          <div className="inline-flex min-w-0 flex-1 items-center justify-end gap-2">
            {dictationControl}
            <button
              type="button"
              className="sas-composer-send"
              disabled={sendDisabled}
              onClick={props.onSend}
              data-testid="prep-send"
              aria-label="Envoyer le message"
              data-dictation-hide={dictationActive ? "1" : undefined}
              hidden={dictationActive}
              tabIndex={dictationActive ? -1 : 0}
            >
              <span aria-hidden>↑</span>
            </button>
          </div>
        </div>
        {props.status ? (
          <p className="sr-only" role="status">
            {props.status}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className="fig-composer fig-travail-composer relative"
      data-testid="nora-composer"
      data-composer-locked={composerLocked ? "1" : "0"}
      data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
      data-dictation-active={dictationActive ? "1" : "0"}
    >
      {composerLocked ? (
        <div
          className="fig-travail-composer-lock absolute inset-0 z-10 flex items-center gap-3 rounded-xl px-4"
          style={{ background: "rgba(12, 16, 28, 0.72)" }}
          data-testid="composer-lock-overlay"
        >
          <svg
            className="shrink-0 text-[#7477ed]"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden
          >
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          <div className="min-w-0 flex-1 text-xs text-[#a3b0c7]">
            <p className="font-semibold text-[#f3f5ff]" data-testid="composer-lock-title">
              Compositeur temporairement indisponible
            </p>
            <p data-testid="composer-lock-reason">
              {props.composerLockReason ||
                "Nora prépare la trajectoire — saisie et envoi désactivés jusqu'au résultat terminal."}
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 rounded border border-[#7477ed55] px-1.5 py-0.5 text-[#7477ed]"
            title={
              props.composerLockReason ||
              "Compositeur temporairement indisponible pendant la qualification de trajectoire."
            }
            aria-label={
              props.composerLockReason ||
              "Compositeur temporairement indisponible pendant la qualification de trajectoire."
            }
            data-testid="composer-lock-info"
          >
            i
          </button>
        </div>
      ) : null}
      {props.dossierAttachment?.attemptId ? (
        <div className="fig-dossier-attachment" data-testid="dossier-composer-attachment">
          <div className="fig-dossier-attachment-body">
            <p className="fig-dossier-attachment-label">Dossier D8 joint</p>
            <p className="fig-dossier-attachment-meta">
              {props.dossierAttachment.attemptId}
              {props.dossierAttachment.dossierVersion != null
                ? ` · v${props.dossierAttachment.dossierVersion}`
                : ""}
              {props.dossierAttachment.verdictD8 ? ` · ${props.dossierAttachment.verdictD8}` : ""}
            </p>
          </div>
          <button
            type="button"
            className="fig-dossier-attachment-remove"
            data-testid="dossier-composer-attachment-remove"
            disabled={composerLocked || props.busy}
            onClick={() => props.onRemoveDossierAttachment?.()}
            aria-label="Retirer la référence du dossier D8"
          >
            Retirer
          </button>
        </div>
      ) : null}
      <div className="fig-travail-composer-row">
        <span
          className="fig-travail-composer-plus"
          aria-hidden
          data-dictation-hide={dictationActive ? "1" : undefined}
        >
          +
        </span>
        <textarea
          ref={textareaRef}
          className="fig-travail-composer-input"
          value={props.draft}
          onChange={(e) => props.onDraft(e.target.value)}
          placeholder={placeholder}
          aria-label="Message à Nora"
          data-testid="thread-draft"
          rows={1}
          readOnly={composerLocked || dictationActive}
          disabled={composerLocked}
          aria-disabled={composerLocked || dictationActive}
          data-dictation-hide={dictationActive ? "1" : undefined}
          hidden={dictationActive}
          tabIndex={dictationActive ? -1 : 0}
          onCompositionStart={() => setImeComposing(true)}
          onCompositionEnd={() => setImeComposing(false)}
          onKeyDown={(e) => {
            if (composerLocked || dictationActive) {
              e.preventDefault();
              return;
            }
            if (imeComposing || e.nativeEvent.isComposing) return;
            if (isMobile) return;
            if (e.key === "Enter" && !e.shiftKey && !props.busy) {
              e.preventDefault();
              if (props.draft.trim() || hasDossier) props.onSend();
            }
          }}
        />
        {dictationControl}
        <button
          type="button"
          className="fig-travail-composer-send"
          disabled={sendDisabled}
          onClick={props.onSend}
          data-testid="thread-send"
          aria-label="Envoyer"
          data-dictation-hide={dictationActive ? "1" : undefined}
          hidden={dictationActive}
          tabIndex={dictationActive ? -1 : 0}
        >
          <img
            src="/figma-dictation/send.svg"
            alt=""
            width={20}
            height={20}
            aria-hidden
            className="fig-travail-composer-send-icon"
          />
        </button>
      </div>
      {props.status ? (
        <p className="sr-only" data-testid="thread-nora-status" role="status">
          {props.status}
        </p>
      ) : null}
    </div>
  );
}```

### project-recent-items.ts
```ts
/**
 * ML5 MP-08 — pilot-consulted « Éléments récents » (max 5).
 * Client-scoped persistence only (no schema). Isolation: pilotId + projectId.
 * A Nora-only read or a mere mention does NOT populate this list — callers must
 * invoke recordProjectRecentItem on explicit Pilote consultation (viewer open, etc.).
 *
 * Pure merge helpers are exported for deterministic unit tests without DOM storage.
 */

export type ProjectRecentItemKind =
  | "document_nora"
  | "file_git"
  | "document_git"
  | "execution"
  | "result"
  | "bilan"
  | "proof";

export type ProjectRecentItem = {
  id: string;
  kind: ProjectRecentItemKind;
  title: string;
  href?: string | null;
  /** Opaque version/ref for display continuity. */
  refLabel?: string | null;
  consultedAtMs: number;
};

const STORAGE_PREFIX = "sfia.projectRecent.v1:";
export const PROJECT_RECENT_MAX_ITEMS = 5;

function storageKey(pilotId: string, projectId: string): string {
  return `${STORAGE_PREFIX}${pilotId}:${projectId}`;
}

function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function mergeProjectRecentItems(
  existing: ProjectRecentItem[],
  nextItem: ProjectRecentItem,
  maxItems: number = PROJECT_RECENT_MAX_ITEMS,
): ProjectRecentItem[] {
  return [nextItem, ...existing.filter((x) => x.id !== nextItem.id)]
    .sort((a, b) => b.consultedAtMs - a.consultedAtMs)
    .slice(0, maxItems);
}

export function readProjectRecentItems(
  pilotId: string,
  projectId: string,
): ProjectRecentItem[] {
  if (!canUseStorage() || !pilotId || !projectId) return [];
  try {
    const raw = window.localStorage.getItem(storageKey(pilotId, projectId));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((x): x is ProjectRecentItem => {
        if (!x || typeof x !== "object") return false;
        const r = x as ProjectRecentItem;
        return Boolean(r.id && r.kind && r.title && typeof r.consultedAtMs === "number");
      })
      .sort((a, b) => b.consultedAtMs - a.consultedAtMs)
      .slice(0, PROJECT_RECENT_MAX_ITEMS);
  } catch {
    return [];
  }
}

export function recordProjectRecentItem(input: {
  pilotId: string;
  projectId: string;
  item: Omit<ProjectRecentItem, "consultedAtMs"> & { consultedAtMs?: number };
}): ProjectRecentItem[] {
  if (!input.pilotId || !input.projectId) return [];
  const nextItem: ProjectRecentItem = {
    id: input.item.id,
    kind: input.item.kind,
    title: input.item.title.slice(0, 160),
    href: input.item.href ?? null,
    refLabel: input.item.refLabel ?? null,
    consultedAtMs: input.item.consultedAtMs ?? Date.now(),
  };
  const existing = readProjectRecentItems(input.pilotId, input.projectId);
  const merged = mergeProjectRecentItems(existing, nextItem);
  if (canUseStorage()) {
    try {
      window.localStorage.setItem(
        storageKey(input.pilotId, input.projectId),
        JSON.stringify(merged),
      );
    } catch {
      /* quota / private mode — ignore */
    }
  }
  return merged;
}

export function clearProjectRecentItems(pilotId: string, projectId: string): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.removeItem(storageKey(pilotId, projectId));
  } catch {
    /* ignore */
  }
}
```

### cognitive-conductor-terminal.ts
```ts
/**
 * Pure terminal disposition for adaptive cognitive works (A.5).
 * Exported for unit tests — conductor applies the returned status at segment end.
 */

import type { CognitiveProductionState } from "./cognitive-work";
import type { NoraTurnQualification } from "./semantic-qualification";

export type CognitiveWorkTerminalStatus = "OPEN" | "COMPLETE" | "SUSPENDED";

export function resolveCognitiveWorkTerminalStatus(input: {
  suspended: boolean;
  production: Pick<CognitiveProductionState, "status">;
  qualification: NoraTurnQualification | null | undefined;
}): {
  status: CognitiveWorkTerminalStatus;
  awaitPilot: boolean;
  interruptCause: string | null;
} {
  const { suspended, production, qualification } = input;
  const disposition = qualification?.workDisposition;
  const dispositionComplete = disposition === "COMPLETE";
  const dispositionAwait =
    disposition === "AWAIT_PILOT" || disposition === "SUSPEND";
  const statusNeedsClarification = qualification?.status === "NEEDS_CLARIFICATION";

  const openDeterminantStructured =
    !dispositionComplete &&
    (qualification?.determiningQuestions ?? []).some(
      (q) => q.importance === "DETERMINANT" && q.status === "OPEN",
    );

  // clarifications[] are open questions only when Nora re-evaluated them; stale non-empty
  // lists must not block COMPLETE when workDisposition already says the objective is done.
  const openClarifications =
    !dispositionComplete &&
    (qualification?.clarifications?.length ?? 0) > 0 &&
    (statusNeedsClarification || dispositionAwait);

  const awaitPilot =
    dispositionAwait ||
    statusNeedsClarification ||
    openDeterminantStructured ||
    openClarifications;

  const status: CognitiveWorkTerminalStatus = suspended
    ? "SUSPENDED"
    : production.status === "PARTIAL" || production.status === "FAILED"
      ? "SUSPENDED"
      : awaitPilot
        ? "OPEN"
        : "COMPLETE";

  const interruptCause = suspended
    ? null
    : awaitPilot
      ? disposition === "SUSPEND"
        ? "AWAIT_OR_SUSPEND"
        : "AWAIT_PILOT"
      : null;

  return { status, awaitPilot, interruptCause };
}```

### segment-context-efficiency.ts
```ts
/**
 * A.4 / MP-14 — avoid re-injecting the full Journal listing on every conductor segment
 * when durable acquis + checkpoint context already carry continuity.
 * Non-authoritative trimming only; first segment and cold starts keep full bounded listing.
 */

/** Shown when bulk journal snippets are omitted on continuation — tools + acquis block remain. */
export const CONTINUATION_KNOWLEDGE_OMIT_MARKER =
  "[Journal D4 — listing borné omis sur ce segment : réutiliser le bloc acquis ci-dessous et les outils d4 si besoin]";

const JOURNAL_SNIPPET_PREFIX =
  /^(ACQUIS\[|POINT_OUVERT\[|POINT_OUVERT_REACTIVATE\[|SUJET\[|DERIVED_HIT\[)/;

export function isJournalKnowledgeSnippet(line: string): boolean {
  return JOURNAL_SNIPPET_PREFIX.test(line.trim());
}

export function isPreferredKnowledgeSnippet(line: string): boolean {
  return /\/PREFERRED\]|PREFERRED\]/.test(line);
}

/** Split pre-turn snippets into journal lines vs document/publication/auxiliary lines. */
export function partitionKnowledgeSnippets(snippets: string[] | undefined): {
  journal: string[];
  auxiliary: string[];
} {
  const all = snippets ?? [];
  const journal: string[] = [];
  const auxiliary: string[] = [];
  for (const line of all) {
    if (isJournalKnowledgeSnippet(line)) journal.push(line);
    else auxiliary.push(line);
  }
  return { journal, auxiliary };
}

/**
 * On conductor continuation with prior acquis, omit redundant journal listing.
 * Keeps Nora-selected PREFERRED rows when present (B.7).
 */
export function resolveContinuationKnowledgeSnippets(
  baseSnippets: string[] | undefined,
  opts: { useContinuation: boolean; hasPriorAcquis: boolean },
): string[] {
  const { journal, auxiliary } = partitionKnowledgeSnippets(baseSnippets);
  if (!opts.useContinuation || !opts.hasPriorAcquis) {
    return [...journal, ...auxiliary];
  }
  const preferred = journal.filter(isPreferredKnowledgeSnippet);
  if (preferred.length > 0) {
    return [CONTINUATION_KNOWLEDGE_OMIT_MARKER, ...preferred, ...auxiliary];
  }
  return [CONTINUATION_KNOWLEDGE_OMIT_MARKER, ...auxiliary];
}

/**
 * Recent messages are bounded on continuation — checkpoint + userText retain thread intent.
 */
export function resolveContinuationContextSnippets(
  baseSnippets: string[],
  opts: { useContinuation: boolean; hasPriorAcquis: boolean; maxRecent?: number },
): string[] {
  if (!opts.useContinuation || !opts.hasPriorAcquis) return baseSnippets;
  const max = opts.maxRecent ?? 2;
  return baseSnippets.slice(-Math.max(0, max));
}```

### assert-owned-preparation.ts
```ts
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { preparations } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";

export async function assertOwnedPreparation(pilotId: string, preparationId: string) {
  const preparation = (
    await db
      .select()
      .from(preparations)
      .where(and(eq(preparations.id, preparationId), eq(preparations.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!preparation) throw new StudioError("NOT_FOUND", "Préparation introuvable");
  return preparation;
}```

---
## 14. Key modified diffs

### a1-provisional-policy
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts
index 27c3f7ec..dff291ef 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts
@@ -1,12 +1,19 @@
 /**
- * ML5 provisional cognitive policy — DEV only (Morris 2026-11-26).
+ * ML5 provisional cognitive policy — Option C env-governed (Morris 2026-11-27).
  *
  * v0.2 (explicit): Terra medium default; Luna low/medium experimental;
  * Sol L/M/H historical; Terra high / Luna high candidates.
  *
  * Activation is NEVER implicit: absent or unknown SFIA_COG_PROVISIONAL_POLICY
- * resolves to legacy_sol (safe historical default). Provisional couples require
- * explicit `v0.2` (or deprecated `v0.1`) AND STUDIO_LANE=DEV.
+ * resolves to legacy_sol (safe historical default).
+ *
+ * Lane gates:
+ * - DEV: explicit `v0.2` | `v0.1` activates provisional couples.
+ * - RECETTE: same policy env is refused unless
+ *   `SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified` after calibration evidence.
+ * - Other / unknown lanes: refuse provisional (fail closed to legacy_sol).
+ *
+ * An unqualified policy must never become active in RECETTE by default.
  *
  * Rollback: `legacy_sol` | `off` | `0` — no structural rewrite.
  */
@@ -74,6 +81,49 @@ function studioLane(env: NodeJS.ProcessEnv): string {
   return (env.STUDIO_LANE ?? "").trim().toUpperCase();
 }

+/** Explicit post-calibration admit for RECETTE — never inferred. */
+export function isRecetteProvisionalQualified(
+  env: NodeJS.ProcessEnv = process.env,
+): boolean {
+  const raw = (env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT ?? "").trim().toLowerCase();
+  return raw === "qualified" || raw === "1" || raw === "true" || raw === "yes";
+}
+
+function laneAllowsProvisional(
+  lane: string,
+  env: NodeJS.ProcessEnv,
+): { allowed: boolean; reasonCodes: string[] } {
+  if (lane === "DEV") {
+    return { allowed: true, reasonCodes: ["LANE_DEV"] };
+  }
+  if (lane === "RECETTE") {
+    if (isRecetteProvisionalQualified(env)) {
+      return {
+        allowed: true,
+        reasonCodes: [
+          "LANE_RECETTE",
+          "COG_POLICY_RECETTE_ADMIT_QUALIFIED",
+        ],
+      };
+    }
+    return {
+      allowed: false,
+      reasonCodes: [
+        "COG_POLICY_REFUSED_RECETTE_UNQUALIFIED",
+        "LANE_RECETTE",
+        "COG_POLICY_REQUIRE_SFIA_COG_PROVISIONAL_RECETTE_ADMIT_qualified",
+      ],
+    };
+  }
+  return {
+    allowed: false,
+    reasonCodes: [
+      "COG_POLICY_REFUSED_NON_GOVERNED_LANE",
+      `LANE_${lane || "UNKNOWN"}`,
+    ],
+  };
+}
+
 export type ProvisionalPolicyResolution = {
   id: ProvisionalPolicyId;
   /** True when provisional experimental couples may be admitted. */
@@ -82,14 +132,14 @@ export type ProvisionalPolicyResolution = {
 };

 /**
- * Resolve active policy — fail closed to legacy_sol unless explicitly activated on DEV.
+ * Resolve active policy — fail closed to legacy_sol unless explicitly activated
+ * on an allowed lane (DEV, or RECETTE with qualified admit).
  */
 export function resolveProvisionalPolicy(
   env: NodeJS.ProcessEnv = process.env,
 ): ProvisionalPolicyResolution {
   const raw = (env.SFIA_COG_PROVISIONAL_POLICY ?? "").trim().toLowerCase();
   const lane = studioLane(env);
-  const codes: string[] = [];

   if (!raw) {
     return {
@@ -117,13 +167,14 @@ export function resolveProvisionalPolicy(
   }

   if (raw === "v0.2" || raw === "0.2" || raw === "v2") {
-    if (lane !== "DEV") {
+    const gate = laneAllowsProvisional(lane, env);
+    if (!gate.allowed) {
       return {
         id: "legacy_sol",
         provisionalActive: false,
         reasonCodes: [
-          "COG_POLICY_V02_REFUSED_NON_DEV_LANE",
-          `LANE_${lane || "UNKNOWN"}`,
+          "COG_POLICY_V02_REFUSED_LANE_GATE",
+          ...gate.reasonCodes,
           "COG_POLICY_VERSION_legacy_sol",
         ],
       };
@@ -134,19 +185,20 @@ export function resolveProvisionalPolicy(
       reasonCodes: [
         `COG_POLICY_PROVISIONAL_${PROVISIONAL_COGNITIVE_POLICY_VERSION}`,
         "COG_POLICY_VERSION_v0.2",
-        "LANE_DEV",
+        ...gate.reasonCodes,
       ],
     };
   }

   if (raw === "v0.1" || raw === "0.1" || raw === "v1") {
-    if (lane !== "DEV") {
+    const gate = laneAllowsProvisional(lane, env);
+    if (!gate.allowed) {
       return {
         id: "legacy_sol",
         provisionalActive: false,
         reasonCodes: [
-          "COG_POLICY_V01_REFUSED_NON_DEV_LANE",
-          `LANE_${lane || "UNKNOWN"}`,
+          "COG_POLICY_V01_REFUSED_LANE_GATE",
+          ...gate.reasonCodes,
           "COG_POLICY_VERSION_legacy_sol",
         ],
       };
@@ -158,7 +210,7 @@ export function resolveProvisionalPolicy(
         "COG_POLICY_PROVISIONAL_ml5-cog-provisional-policy-v0.1-20261126",
         "COG_POLICY_VERSION_v0.1",
         "COG_POLICY_V01_DEPRECATED_PREFER_V02",
-        "LANE_DEV",
+        ...gate.reasonCodes,
       ],
     };
   }
```

### a2-authority-keys
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
index 185c5540..4e05ec10 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
@@ -68,6 +68,16 @@ export function conversationalCommandKey(clientTurnKey: string): string {
   return conversationalClientCommandKey(clientTurnKey);
 }

+/** Per semantic intent when several pilotage acts share one clientTurnKey (MP-09). */
+export function conversationalCommandKeyForIntent(
+  clientTurnKey: string,
+  semanticIntentId?: string | null,
+): string {
+  const base = conversationalCommandKey(clientTurnKey);
+  const intentId = semanticIntentId?.trim();
+  return intentId ? `${base}:${intentId}` : base;
+}
+
 /** @deprecated retained for lexical helper tests only — authority path uses durable resolvers. */
 export async function loadDecisionBriefs(projectId: string): Promise<DecisionBrief[]> {
   const rows = await db
@@ -232,9 +242,11 @@ export async function reconstituteConversationalAuthority(input: {
   projectId: string;
   clientTurnKey?: string | null;
   userMessageId?: string | null;
+  /** When set, scopes C02 replay to one semantic pilotage intent (MP-09). */
+  semanticIntentId?: string | null;
 }): Promise<ConversationalAuthorityOutcome | null> {
   const key = input.clientTurnKey?.trim()
-    ? conversationalCommandKey(input.clientTurnKey)
+    ? conversationalCommandKeyForIntent(input.clientTurnKey, input.semanticIntentId)
     : null;
   if (key) {
     try {
@@ -297,7 +309,10 @@ export async function applyConversationalAuthority(input: {
   preQualified?: IntentQualification | null;
 }): Promise<ConversationalAuthorityOutcome> {
   const content = input.content.trim();
-  const clientCommandKey = conversationalCommandKey(input.clientTurnKey);
+  const clientCommandKey = conversationalCommandKeyForIntent(
+    input.clientTurnKey,
+    input.preQualified?.semanticIntentId,
+  );
   const empty: ConversationalAuthorityOutcome = {
     attempted: false,
     intentClarity: "NONE",
@@ -315,6 +330,7 @@ export async function applyConversationalAuthority(input: {
     projectId: input.projectId,
     clientTurnKey: input.clientTurnKey,
     userMessageId: input.userMessageId,
+    semanticIntentId: input.preQualified?.semanticIntentId,
   });
   if (prior?.attempted && prior.command) {
     return prior;
```

### b8-project-context
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
index a50bd368..e8f401f4 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
@@ -96,8 +96,11 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)

   const openSubjects = knowledge.subjects.filter((s) => s.status === "ACTIVE");
   const openPoints = knowledge.openPoints.filter((o) => o.status === "OPEN");
-  // FIX-11 — "en cours" = actively writing (SAVING), not FAILED/UNKNOWN/AVAILABLE.
-  const docsInProgress = documents.filter((d) => d.latestRevision?.status === "SAVING");
+  // ML5 continuity — library identity count (Morris 2026-11-27): every accessible
+  // document in the project library counts once, regardless of SAVING/AVAILABLE.
+  // Revisions of the same document do not inflate the counter (listDocuments is
+  // already one row per document identity with latestRevision attached).
+  const projectDocuments = documents.filter((d) => Boolean(d.document?.id));

   const activity = {
     openSubjects: {
@@ -109,8 +112,8 @@ export async function getOwnedProjectContext(pilotId: string, projectId: string)
       examples: applicableDecisions.slice(0, 2).map((d) => ({ id: d.id, statement: d.statement })),
     },
     documentsInProgress: {
-      count: docsInProgress.length,
-      examples: docsInProgress.slice(0, 2).map((d) => ({
+      count: projectDocuments.length,
+      examples: projectDocuments.slice(0, 2).map((d) => ({
         id: d.document.id,
         title: d.document.title,
       })),
```

### d3-restitution
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
index fbee47d8..d50d5fc0 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
@@ -46,6 +46,10 @@ function stripPreEffectHedges(text: string): string {
     .trim();
 }

+/**
+ * Natural métier restitution (MP-11 / Morris 2026-11-27).
+ * Confirm only after Studio owner outcome; avoid technical « Résultat Studio » blocks.
+ */
 function effectFactLines(effect: NonNullable<PilotageEffectView>): string[] {
   const op = operationLabel(effect.operation);
   const status = (effect.status ?? "").toUpperCase();
@@ -53,48 +57,70 @@ function effectFactLines(effect: NonNullable<PilotageEffectView>): string[] {

   switch (status) {
     case "APPLIED":
+      if (effect.operation === "OPEN_CYCLE") {
+        return [
+          `Le cycle demandé est maintenant ouvert (${op}).`,
+          "La guidance spécialisée associée est disponible sur Trajectoire / CKI. On peut enchaîner sur le fond du travail.",
+        ];
+      }
+      if (effect.operation === "CLOSE_CYCLE") {
+        return [
+          `Le cycle est maintenant clos.`,
+          "L'historique et la trajectoire conservent cet état. Dis-moi si tu veux ouvrir un cycle suivant.",
+        ];
+      }
+      if (effect.operation === "RETAIN_TRAJECTORY") {
+        return [
+          "L'orientation de trajectoire est retenue.",
+          "L'ouverture d'un cycle reste une décision distincte lorsque tu seras prêt.",
+        ];
+      }
+      if (effect.operation === "RECORD_DECISION" || effect.operation === "REVISE_DECISION") {
+        return [
+          `La décision a bien été enregistrée.`,
+          effect.decisionId
+            ? "Elle figure désormais dans le Journal (Décisions) avec sa portée et sa provenance."
+            : "Elle figure désormais dans le Journal avec sa portée et sa provenance.",
+        ];
+      }
       return [
-        `**Résultat Studio :** la ${op} a été **appliquée**.`,
-        effect.operation === "OPEN_CYCLE"
-          ? "Le cycle demandé est désormais actif ; la guidance spécialisée associée sera disponible sur Trajectoire / CKI."
-          : effect.operation === "RETAIN_TRAJECTORY"
-            ? "L'orientation est retenue. L'ouverture d'un cycle reste une décision distincte."
-            : "L'état du projet a été mis à jour en conséquence.",
+        `C'est fait : la ${op} a bien été prise en compte.`,
+        "L'état du projet a été mis à jour en conséquence.",
       ];
     case "ALREADY_APPLIED":
       return [
-        `**Résultat Studio :** cette ${op} était **déjà appliquée** — aucun nouvel effet n'a été créé.`,
+        `Cette ${op} était déjà en place — aucun nouvel effet n'a été créé.`,
       ];
     case "REJECTED":
       return [
-        `**Résultat Studio :** la ${op} a été **refusée**.`,
+        `Je n'ai pas pu appliquer la ${op}.`,
         reason
           ? `Motif : ${reason}.`
           : "Le contrôle d'autorité ou d'état n'a pas autorisé l'effet.",
-        "Aucun cycle ni décision n'a été créé par cette demande. Vous pouvez reformuler ou préciser le type de cycle reconnu.",
+        "Aucun cycle ni décision n'a été créé par cette demande. Tu peux reformuler ou préciser le type de cycle reconnu.",
       ];
     case "CONFLICT":
       return [
-        `**Résultat Studio :** **conflit d'état** sur la ${op}.`,
-        reason ? `Détail : ${reason}.` : "Rechargez l'état du projet puis réessayez si pertinent.",
+        `Il y a un conflit d'état sur la ${op}.`,
+        reason ? `Détail : ${reason}.` : "Recharge l'état du projet puis réessaie si pertinent.",
       ];
     case "UNKNOWN":
       return [
-        `**Résultat Studio :** l'issue de la ${op} est **encore en vérification**.`,
-        "Je ne confirme ni le succès ni le refus définitif tant que Studio n'a pas consolidé l'état.",
+        `L'issue de la ${op} est encore en vérification.`,
+        "Je ne confirme ni le succès ni le refus tant que Studio n'a pas consolidé l'état.",
       ];
     default:
       if (effect.intentClarity === "AMBIGUOUS") {
         return [
-          "**Résultat Studio :** aucune commande n'a été exécutée — intention ambiguë.",
-          reason ? `Précision utile : ${reason}.` : "Pouvez-vous préciser le cycle et l'acte souhaités ?",
+          "Aucune commande n'a été exécutée — intention ambiguë.",
+          reason ? `Précision utile : ${reason}.` : "Peux-tu préciser le cycle et l'acte souhaités ?",
         ];
       }
       if (effect.attempted === false) {
         return [];
       }
       return [
-        `**Résultat Studio :** statut « ${status || "indéterminé"} » pour la ${op}.`,
+        `Statut « ${status || "indéterminé"} » pour la ${op}.`,
         reason ? `Information : ${reason}.` : "",
       ].filter(Boolean);
   }
@@ -115,8 +141,9 @@ export function composePilotageEffectRestitution(input: {
   }
   const facts = effectFactLines(effect);
   if (facts.length === 0) return prior;
-  const block = ["", "---", "", ...facts].join("\n");
-  if (!prior.trim()) return facts.join("\n");
+  // Soft paragraph break — no technical separator block.
+  const block = ["", ...facts].join("\n\n");
+  if (!prior.trim()) return facts.join("\n\n");
   return `${prior.trimEnd()}\n${block}`;
 }

```

### d5-studio-shell
```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 35935a9f..60b380d1 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -402,9 +402,8 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
                 <div className="font-semibold text-[14px]">Pilote</div>
                 <div className="muted">{inProductSpace ? "Connecté" : "Espace personnel"}</div>
               </div>
-              {personalSpace ? (
-                <PersonalRailSettingsMenu pathname={pathname} />
-              ) : null}
+              {/* ML5 MP-17 — settings foot on every authenticated rail variant */}
+              <PersonalRailSettingsMenu pathname={pathname} />
             </div>
           </div>
         </div>
```

### service.ts multi-binding (stat)
```
 .../web/src/domains/conversation/service.ts        | 155 +++++++++++----------
 1 file changed, 83 insertions(+), 72 deletions(-)
```

### MP-09 service loop excerpt
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index d7211fc8..342fcf98 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -95,7 +95,7 @@ import {
   extractKnowledgeProposals,
   summarizeKnowledgeProposals,
   extractKnowledgeSelectionHints,
-  extractPilotageBinding,
+  listPilotageEffectBindings,
   projectStudioEffects,
   unavailableQualification,
   type NoraTurnQualification,
@@ -1065,6 +1065,7 @@ export async function postUserMessageAndNora(

   /** SEM/TV: D5/D6 after Nora semantic qualification — not before. */
   let authority: ConversationalAuthorityOutcome | null = null;
+  let conversationalHumanDecisionCreated = false;

   const existing = await listMessages(pilotId, preparationId);
   const contextSnippets = existing
@@ -1649,7 +1650,7 @@ export async function postUserMessageAndNora(
     }
   }

-  const pilotageBinding = extractPilotageBinding(qualification);
+  const pilotageBindings = listPilotageEffectBindings(qualification);
   const knowledgeHints = extractKnowledgeSelectionHints(qualification);
   if (
     knowledgeHints.acquisIds.length ||
@@ -1829,78 +1830,86 @@ export async function postUserMessageAndNora(
   }
   // DIALOGUE_INDEPENDANT may answer without métier mutations that bypass A.

-  // D5/D6 after semantic qualification — typed binding only (never parameters.notes).
-  if (
-    allowOwnerEffects &&
-    pilotageBinding &&
-    !("ambiguous" in pilotageBinding) &&
-    ctx.project?.id
-  ) {
+  // D5/D6 after semantic qualification — one apply per qualified REQUEST_EFFECT binding (MP-09).
+  if (allowOwnerEffects && pilotageBindings.length > 0 && ctx.project?.id) {
     const stillOwned = await requireTurnOwnership(reserved.commandId, reserved.ownerToken);
     if (stillOwned) {
-      const preQualified = {
-        clarity: "CLEAR" as const,
-        operation: pilotageBinding.operation,
-        objective: pilotageBinding.objective ?? content,
-        statement: pilotageBinding.statement,
-        objectRef: pilotageBinding.objectRef,
-        decisionId: pilotageBinding.decisionId,
-        methodRef: pilotageBinding.methodRef,
-        methodVersion: pilotageBinding.methodVersion,
-        restrictionKindHint: pilotageBinding.restrictionKindHint,
-        restrictionTargetRefHint: pilotageBinding.restrictionTargetRefHint,
-        cycleType: pilotageBinding.cycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
-        toCycleType: pilotageBinding.toCycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
-        semanticIntentId: pilotageBinding.intentId,
-        semanticSchemaVersion: pilotageBinding.schemaVersion,
-      };
-      authority = await applyConversationalAuthority({
-        pilotId,
-        projectId: ctx.project.id,
-        userMessageId: reserved.userMessageId,
-        content,
-        clientTurnKey,
-        preQualified,
-      });
-      emitObs({
-        event_name: "d3.turn.conversational_authority",
-        component: "d3.conversation",
-        request_id: requestId,
-        operation_id: reserved.operationId,
-        outcome: authority.attempted
-          ? authority.command?.status === "APPLIED" || authority.command?.status === "ALREADY_APPLIED"
-            ? "SUCCESS"
-            : authority.command?.status === "UNKNOWN"
-              ? "UNKNOWN"
-              : "FAILED"
-          : "PARTIAL",
-        meta: {
-          attempted: authority.attempted,
-          intent_clarity: authority.intentClarity,
-          operation: authority.operation ?? null,
-          command_status: authority.command?.status ?? null,
-          reason_code: authority.command?.reasonCode ?? null,
-          decision_id: authority.decisionId,
-          source: authority.source,
-          semantic_gate: true,
-          semantic_intent_id: pilotageBinding.intentId,
-        },
-      });
+      for (const pilotageBinding of pilotageBindings) {
+        if ("ambiguous" in pilotageBinding) {
+          emitObs({
+            event_name: "d3.turn.conversational_authority",
+            component: "d3.conversation",
+            request_id: requestId,
+            operation_id: reserved.operationId,
+            outcome: "PARTIAL",
+            meta: {
+              attempted: false,
+              intent_clarity: "AMBIGUOUS",
+              semantic_gate: true,
+              reason: pilotageBinding.reason,
+              semantic_intent_id: pilotageBinding.intentId,
+            },
+          });
+          continue;
+        }
+        const preQualified = {
+          clarity: "CLEAR" as const,
+          operation: pilotageBinding.operation,
+          objective: pilotageBinding.objective ?? content,
+          statement: pilotageBinding.statement,
+          objectRef: pilotageBinding.objectRef,
+          decisionId: pilotageBinding.decisionId,
+          methodRef: pilotageBinding.methodRef,
+          methodVersion: pilotageBinding.methodVersion,
+          restrictionKindHint: pilotageBinding.restrictionKindHint,
+          restrictionTargetRefHint: pilotageBinding.restrictionTargetRefHint,
+          cycleType: pilotageBinding.cycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
+          toCycleType: pilotageBinding.toCycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
+          semanticIntentId: pilotageBinding.intentId,
+          semanticSchemaVersion: pilotageBinding.schemaVersion,
+        };
+        const outcome = await applyConversationalAuthority({
+          pilotId,
+          projectId: ctx.project.id,
+          userMessageId: reserved.userMessageId,
+          content,
+          clientTurnKey,
+          preQualified,
+        });
+        if (outcome.humanDecisionCreated) conversationalHumanDecisionCreated = true;
+        authority =
+          !authority?.attempted && outcome.attempted
+            ? outcome
+            : authority?.attempted
+              ? authority
+              : outcome;
+        emitObs({
+          event_name: "d3.turn.conversational_authority",
+          component: "d3.conversation",
+          request_id: requestId,
+          operation_id: reserved.operationId,
+          outcome: outcome.attempted
+            ? outcome.command?.status === "APPLIED" || outcome.command?.status === "ALREADY_APPLIED"
+              ? "SUCCESS"
+              : outcome.command?.status === "UNKNOWN"
+                ? "UNKNOWN"
+                : "FAILED"
+            : "PARTIAL",
+          meta: {
+            attempted: outcome.attempted,
+            intent_clarity: outcome.intentClarity,
+            operation: outcome.operation ?? null,
+            command_status: outcome.command?.status ?? null,
+            reason_code: outcome.command?.reasonCode ?? null,
+            decision_id: outcome.decisionId,
+            source: outcome.source,
+            semantic_gate: true,
+            semantic_intent_id: pilotageBinding.intentId,
+            pilotage_bindings_total: pilotageBindings.length,
+          },
+        });
+      }
     }
-  } else if (pilotageBinding && "ambiguous" in pilotageBinding) {
-    emitObs({
-      event_name: "d3.turn.conversational_authority",
-      component: "d3.conversation",
-      request_id: requestId,
-      operation_id: reserved.operationId,
-      outcome: "PARTIAL",
-      meta: {
-        attempted: false,
-        intent_clarity: "AMBIGUOUS",
-        semantic_gate: true,
-        reason: pilotageBinding.reason,
-      },
-    });
   }

   // C02 fault injection — AFTER same-turn D5/D6 (SEM/TV order: Nora → qualify → authority).
@@ -4053,7 +4062,9 @@ export async function postUserMessageAndNora(
     historicalAuthorization: ownershipLostBeforeD4 ? null : historicalAuthorizationOut,
     idempotentReplay: false,
     humanDecisionCreated:
-      Boolean(authority?.humanDecisionCreated) || Boolean(publicationMandateDecisionId),
+      conversationalHumanDecisionCreated ||
+      Boolean(authority?.humanDecisionCreated) ||
+      Boolean(publicationMandateDecisionId),
     pilotageEffect: pilotageEffectFromAuthority(authority),
     missionProjection,
     nextTurnKind,
```

---
## 15. Additional modified excerpts

### provisional policy + knowledge parentSubjectId + nora-adapter (stat)
 .../web/src/app/projects/[projectId]/page.tsx      | 211 ++++++++++++---------
 .../web/src/components/figma/tokens.css            |  99 ++++++++--
 .../web/src/domains/conversation/nora-adapter.ts   |   7 +-
 .../domains/conversation/semantic-qualification.ts | 102 ++++++++--
 .../web/src/domains/finops/usage-read-service.ts   |  83 ++++++--
 .../web/src/domains/knowledge/service.ts           |  14 +-
 6 files changed, 363 insertions(+), 153 deletions(-)

### semantic-qualification parentSubjectId + listPilotageEffectBindings
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index 71ce7746..1f418a25 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -149,6 +149,11 @@ export const QualifiedIntentItemSchema = z.object({
       epistemic: KnowledgeEpistemicSchema.optional(),
       subjectTitle: z.string().max(120).optional(),
       subjectId: z.string().max(120).optional(),
+      /**
+       * Optional parent for SUBJECT hierarchy (sous-sujet). Must be an existing
+       * subject id in the same project/preparation — Studio validates ownership.
+       */
+      parentSubjectId: z.string().max(120).optional(),
       /** Soft target ~240. */
       continuityReason: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
       /** Prefer these existing resources when selecting D4 context (Nora-chosen). */
@@ -626,6 +631,77 @@ export type DurablePilotageBinding = {
   objective?: string;
 };

+function pilotageBindingFromIntent(
+  intent: QualifiedIntentItem,
+): DurablePilotageBinding | { ambiguous: true; reason: string } {
+  const operation = intent.parameters.pilotageOperation;
+  if (!operation) {
+    return { ambiguous: true, reason: "SEMANTIC_PILOTAGE_OPERATION_MISSING" };
+  }
+  return {
+    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    intentId: intent.id,
+    capabilityId: intent.capabilityId as DurablePilotageBinding["capabilityId"],
+    operation,
+    cycleType: intent.parameters.cycleType,
+    toCycleType: intent.parameters.toCycleType,
+    methodRef: intent.parameters.methodRef,
+    methodVersion: intent.parameters.methodVersion,
+    decisionId: intent.parameters.decisionId,
+    objectRef: intent.parameters.objectRef,
+    statement: intent.parameters.statement,
+    restrictionKindHint: intent.parameters.restrictionKindHint,
+    restrictionTargetRefHint: intent.parameters.restrictionTargetRefHint,
+    objective: intent.summary,
+  };
+}
+
+/** Stable dependency order among pilotage REQUEST_EFFECT intents (dependsOn within subset). */
+export function orderPilotageEffectIntents(
+  q: NoraTurnQualification,
+  hits: QualifiedIntentItem[],
+): QualifiedIntentItem[] {
+  const subset = new Set(hits.map((h) => h.id));
+  const byId = new Map(q.intents.map((i) => [i.id, i] as const));
+  const visiting = new Set<string>();
+  const visited = new Set<string>();
+  const ordered: string[] = [];
+  const visit = (id: string) => {
+    if (!subset.has(id) || visited.has(id)) return;
+    if (visiting.has(id)) return;
+    visiting.add(id);
+    for (const dep of byId.get(id)?.dependsOn ?? []) {
+      if (subset.has(dep)) visit(dep);
+    }
+    visiting.delete(id);
+    visited.add(id);
+    ordered.push(id);
+  };
+  const stable = [...subset].sort();
+  for (const id of stable) visit(id);
+  return ordered.map((id) => hits.find((h) => h.id === id)!);
+}
+
+/**
+ * MP-09 — every admissible pilotage REQUEST_EFFECT intent on the turn, in dependsOn order.
+ * Never collapses to fail-closed AMBIGUOUS when multiple D5/D6 intents are present.
+ */
+export function listPilotageEffectBindings(q: NoraTurnQualification): Array<
+  DurablePilotageBinding | { ambiguous: true; reason: string; intentId: string }
+> {
+  if (q.status !== "QUALIFIED") return [];
+  const hits = effectIntents(q).filter((i) => PILOTAGE_CAPS.has(i.capabilityId));
+  if (hits.length === 0) return [];
+  const ordered = orderPilotageEffectIntents(q, hits);
+  return ordered.map((intent) => {
+    const binding = pilotageBindingFromIntent(intent);
+    if ("ambiguous" in binding) {
+      return { ...binding, intentId: intent.id };
+    }
+    return binding;
+  });
+}
+
 export function extractPilotageBinding(
   q: NoraTurnQualification,
   select?: { intentId?: string; operation?: string },
@@ -653,27 +729,9 @@ export function extractPilotageBinding(
   if (hits.length > 1) {
     return { ambiguous: true, reason: "MULTIPLE_PILOTAGE_EFFECT_INTENTS" };
   }
-  const intent = hits[0]!;
-  const operation = intent.parameters.pilotageOperation;
-  if (!operation) {
-    return { ambiguous: true, reason: "SEMANTIC_PILOTAGE_OPERATION_MISSING" };
-  }
-  return {
-    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
-    intentId: intent.id,
-    capabilityId: intent.capabilityId as DurablePilotageBinding["capabilityId"],
-    operation,
-    cycleType: intent.parameters.cycleType,
-    toCycleType: intent.parameters.toCycleType,
-    methodRef: intent.parameters.methodRef,
-    methodVersion: intent.parameters.methodVersion,
-    decisionId: intent.parameters.decisionId,
-    objectRef: intent.parameters.objectRef,
-    statement: intent.parameters.statement,
-    restrictionKindHint: intent.parameters.restrictionKindHint,
-    restrictionTargetRefHint: intent.parameters.restrictionTargetRefHint,
-    objective: intent.summary,
-  };
+  const binding = pilotageBindingFromIntent(hits[0]!);
+  if ("ambiguous" in binding) return binding;
+  return binding;
 }

 /** Match a requested operation against durable qualification (owner-side). */
@@ -919,6 +977,7 @@ export type KnowledgeCapitalisationProposal = {
   epistemic: z.infer<typeof KnowledgeEpistemicSchema>;
   subjectTitle?: string;
   subjectId?: string;
+  parentSubjectId?: string;
   continuityReason?: string;
   supersedesAcquisId?: string;
   resolvesOpenPointId?: string;
@@ -950,6 +1009,7 @@ export function extractKnowledgeProposals(
       epistemic: intent.parameters.epistemic ?? "hypothesized",
       subjectTitle: intent.parameters.subjectTitle?.trim() || undefined,
       subjectId: intent.parameters.subjectId?.trim() || undefined,
+      parentSubjectId: intent.parameters.parentSubjectId?.trim() || undefined,
       continuityReason: intent.parameters.continuityReason?.trim() || undefined,
       supersedesAcquisId: intent.parameters.supersedesAcquisId?.trim() || undefined,
       resolvesOpenPointId: intent.parameters.resolvesOpenPointId?.trim() || undefined,
```

---
## 16. Matrice 17 MP — statut construction

| MP | Qualif level | Statut | Réserve |
|----|--------------|--------|---------|
| MP-01 | BROWSER PROVEN (control present) | FIXED DET | LIVE dictation unused |
| MP-02 | DET + BROWSER | FIXED | — |
| MP-03 | DET (projection) | PARTIAL | enrichment LIVE |
| MP-04 | DET | FIXED | — |
| MP-05 | DET | FIXED | visual before/after captures partial |
| MP-06 | NOT LIVE | BLOCKED LIVE | GO LIVE required |
| MP-07 | DET | FIXED | — |
| MP-08 | DET + structure | FIXED | F2 pixel not claimed |
| MP-09 | DET | FIXED | LIVE T05 re-proof |
| MP-10 | DET wiring | PARTIAL | autonomy + reuse LIVE |
| MP-11 | DET | FIXED | — |
| MP-12 | DET labels | PARTIAL | semantic trajectory LIVE |
| MP-13 | DET | FIXED | — |
| MP-14 | DET efficiency | PARTIAL | T08 LIVE compare |
| MP-15 | DET Option C | FIXED structure | LIVE multi-model + RECETTE admit after calibration |
| MP-16 | DET FinOps | FIXED | LIVE reconciliation |
| MP-17 | BROWSER PROVEN | FIXED | — |

---
## 17. Fake/Real Qualification

- Entry: heterogeneous DET + prior LIVE partial.
- Claims used: IMPLEMENTED, DETERMINISTIC PROVEN, BROWSER PROVEN (scoped).
- Forbidden claims avoided: READY FOR REAL, END-TO-END REAL PROVEN, Livraison 1 acceptée.

---
## 18. Mandat LIVE proposé (borné — non exécuté)

Scénarios:
1. Allocation Option C DEV: 3 tours (Terra/Luna/Sol) with observable admit/use — max 6 emissions.
2. T05-like multi-intent OPEN_CYCLE + design — 2 emissions.
3. Hierarchy: conversation that naturally creates parent+child subject — 4–6 emissions.
4. Cognitive reuse: later turn reads prior subjects/acquis — 2 emissions.
5. Dictation LIVE FR: open/listen/stop/finalize + 1 negative timeout — max 3 sessions.
6. FinOps/T08-like heavy turn measurement after A.4 — 1 emission.

Models/efforts: catalog admitted under v0.2 DEV (Terra medium default; Luna low/medium; Sol L/M/H).
Stop: budget USD estimate TBD with Morris; abort on unexpected authority/effect.
Isolation: DEV only; no RECETTE mutation; no WEB/Admin.
Preuves: OBS traces, work ids, Journal tree screenshot, FinOps detail, dictation events.

---
## 19. Verdict

**READY WITH RESERVES**

- Construction DEV of integrated corrective macro-lot substantially complete for authorized DET/browser scope.
- LIVE qualification gates remain open (MP-06 critical; MP-10/14/15/16 REAL).
- Programme state preserved: R5 IN PROGRESS; ML5 OPEN; LIVRAISON 1 NOT ACCEPTED; MaintiPlan SUSPENDED; T09 NOT SENT; NO RELEASE; STABLE NOT AVAILABLE; NOT ADOPTED.
- Next Morris decisions: bounded LIVE GO; then RECETTE candidate/cutover; MP closure; Livraison 1 acceptance.

Date: 2026-11-27 Europe/Paris

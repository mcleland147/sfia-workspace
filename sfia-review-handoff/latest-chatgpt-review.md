# SFIA Studio First Visible Slice V2 — Runtime and UI Contract Framing FULL

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-07-29 19:38:49 CEST (+0200) |
| Cycle / profil | 1 — Cadrage (+2/3/4/6/9/15) / **Standard renforcé** |
| Typologie | DOC / UX / ARCH / CAPA |
| Repo | `mcleland147/sfia-workspace` |
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| Branche | `framing/sfia-studio-visible-slice-v2-runtime-ui-contract` |
| HEAD | `a1e207bdefef022858eb2ffd07b66727bed75dd3` |
| Base | `origin/main` @ `634a7fb0cc2e202e7530eda940fb421f1c17eade` |
| Upstream | **aucun** |
| Niveau | FULL |
| Handoff parent | `e1c9efc` / blob `ebc67791…` — V1 integration lot CLOSED |

## Gate consommé

`GO FRAME SFIA STUDIO FIRST VISIBLE SLICE LOT V2 — CREATE PROJECT RUNTIME AND UI CONTRACT — REUSE STUDIOSHELL AND V1 CORE — LOCAL PROCESS-BOUNDED STATE ONLY — NO APPLICATION CODE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

## Truth check

PASSED (revalidation + création branche).

- workspace/toplevel exacts
- branche V1 avant switch @ `ca93e080…` ; tracked propre ; untracked `.tmp-sfia-review/**` uniquement
- `origin/main` = `634a7fb…`
- branche V2 absente local/remote avant création
- worktree control-tower (`/Users/morris/Projects/sfia-workspace` @ `delivery/sfia-studio-control-tower-fast-track`) **non touché**
- branche créée : `git switch --create framing/sfia-studio-visible-slice-v2-runtime-ui-contract origin/main`
- upstream accidentel vers `origin/main` **retiré** (`git branch --unset-upstream`)
- HEAD final docs : `a1e207b…` ; base merge-base = `634a7fb…`

## Sources consultées

### Méthode

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`

### Handoff

- `sfia/review-handoff` @ `e1c9efcbbea51b3b0fc20b1483c200cfd2ec5f63`
- blob `ebc67791c657678c27b58c10c899db4eaa7cf87b`
- V1 intégrée ; CI `30464688065` success ; lot intégration CLOSED

### Framing V1

- `first-user-visible-vertical-slice-framing/` README + 01…11

### Moteur V1

- `app/lib/vertical-slice-core/{types,audit,localSqliteAudit,localProjectComposition,index}.ts`
- tests `app/__tests__/vertical-slice-core/*`

### UI

- `StudioShell.tsx`, `navigation.ts`, routes `app/app/**`
- stacks VS / OPS1 / D1 ; Server Actions patterns ; absence `route.ts`
- `next.config.ts`, `package.json`, CI Node 24

## CKC

| Champ | Valeur |
|-------|--------|
| Recherché | oui |
| Contrat dédié visible-slice V2 | **absent** |
| Fallback | méthode + framing V1 + CKC method-candidate générique |
| Autorité | aucune |

## Inventaire runtime/UI (synthèse prouvée)

- Next 15 App Router ; layout unique ; home → `/synthese`
- StudioShell flush/floating ; `StudioRoute` limité à 4 routes POC
- Trois stacks non unifiées (VS fixtures, OPS1 sqlite, D1 projects)
- **Zéro** import UI → `vertical-slice-core` / OA
- V1 facade : `createProject` / `getProjectOverview` ; mémoire process ; audit optionnel
- sessionStorage : harness/OPS1 only — pas business OA

## Figma

| Champ | Valeur |
|-------|--------|
| MCP | disponible — lecture seule |
| FileKey | `lrjA1WEyRpL05vKR8k29LO` |
| Pages | `0:1` UX-B — P0 |
| Écriture | aucune |
| D-VS-05 | `NOT DECIDED — NOT CONSUMED` |
| Conformité | non revendiquée |

## Documents créés / modifiés

### Créés (pack V2)

`projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-framing/`

- README.md
- 01-runtime-and-ui-current-state.md
- 02-create-project-user-journey.md
- 03-nextjs-runtime-boundary-options.md
- 04-process-lifetime-and-local-state-contract.md
- 05-create-project-command-and-result-contract.md
- 06-studioshell-routing-and-screen-contract.md
- 07-server-client-security-and-error-boundaries.md
- 08-accessibility-responsive-and-visual-contract.md
- 09-validation-test-and-runtime-proof-plan.md
- 10-implementation-slicing-and-file-boundaries.md
- 11-risks-debt-and-morris-decision-pack.md

### Modifié (index minimal)

- `first-user-visible-vertical-slice-framing/README.md` — lien pack V2 + statut V1 integrated

### Diff intégré

- 13 files ; +1489/−1 (approx après whitespace fix)
- `git diff --check` : green
- **Aucun** fichier `app/app`, `components`, `features`, `lib` applicatif, CI, package.json

## Contenu substantiel — décisions candidates

### D-V2-01 Frontière Next.js — `CANDIDATE — MORRIS GO REQUIRED`

- A Server Action · B Route Handler · C Server Component
- **Reco** : A + service server-only partagé (+ read SC Overview)
- GO proposé : `GO ADOPT D-V2-01 OPTION A — SERVER ACTION PLUS SHARED SERVER-ONLY RUNTIME SERVICE…`

### D-V2-02 Process lifetime — `CANDIDATE`

- A per-request · B singleton · C SQLite rehydrate
- **Reco** : B process-local singleton + test reset ; no rehydrate
- GO : `GO ADOPT D-V2-02 OPTION B — PROCESS-LOCAL SINGLETON…`

### D-V2-03 Audit — `CANDIDATE`

- no-op / memory / SQLite opt-in
- **Reco** : défaut no-op ; SQLite opt-in ; non-blocking ; ≠ persistence
- GO : `GO ADOPT D-V2-03 DEFAULT NO-OP AUDIT…`

### D-V2-04 Routes — `CANDIDATE`

- Adapter D1 · `/studio/*` · hybride
- **Reco** : `/studio/projects/new` + `/studio/projects/[projectId]` sous StudioShell ; isoler D1/VS
- GO : `GO ADOPT D-V2-04 STUDIO NAMESPACE…`

### D-V2-05 Disclosures — `CANDIDATE`

- bandeau sticky + détail repliable ; 7 messages obligatoires
- **Ne consomme pas** D-VS-05 Figma
- GO : `GO ADOPT D-V2-05 LOCAL MODE DISCLOSURES…`

## Architecture candidate

```text
UI React (StudioShell)
  → Server Action / SC
    → RuntimeApplicationService (server-only singleton)
      → LocalProjectFacade (V1)
        → T-A0 / T-A1 / memory / audit optionnel
```

## Contrats Create / Overview

- Mapping 1:1 vers `CreateLocalProjectCommand` V1 (gelé)
- DTO runtime sérialisable candidat
- View models UI distincts
- Erreurs typées mappées ; doctrine fail-closed
- Parcours stoppe après Overview — pas Reco/Decision/Dashboard

## Server/client

- `server-only` obligatoire pour composition
- Interdictions : client→repos OA ; métier dans Context ; Project dans sessionStorage ; API publique ; OA→Next/React

## UX / a11y

- labels, aria-invalid, focus, live regions, contraste tokens, 1440/1280/390
- Frames Git V2-1…V2-9 documentées ; pas de write Figma

## Slicing

| Lot | Objectif |
|-----|----------|
| V2-A1 | Runtime bridge server-only |
| V2-A2 | Create Project UI |
| V2-A3 | Project Overview |

## Fichiers futurs candidats (non créés)

- `app/lib/vertical-slice-runtime/**` (server-only, dto, service, actions)
- `app/app/studio/projects/new/page.tsx`
- `app/app/studio/projects/[projectId]/page.tsx`
- features disclosure/form/overview
- tests `__tests__/vertical-slice-runtime/**`

## Fichiers interdits ce cycle (respectés)

Application TS/JS/CSS, routes, StudioShell code, V1 core, OA, D1 db, package.json, CI, Figma write, method baselines.

## Risques / dette

R1–R13 (volatilité, HMR, serverless, mémoire, idempotency UI, import Node client, confusion POC/audit, F-01 LPS.scope, nav, Figma). Dette F-01/F-02 V1 + F-V2-01…04.

## Garde-fous

- Toutes D-V2 restent CANDIDATE
- D-VS-01→04 conservées ; D-VS-05 non consommée
- Process-local only ; pas de persistence produit
- Aucune implémentation auto

## Réserves

- Singleton non viable multi-instance sans autre gate
- CKC dédié absent
- Frames Figma V2 absentes

## Décisions Morris requises

D-V2-01 … D-V2-05 via gate ADOPT unique (choix explicites).

## Commits locaux

```text
3288aa4 docs(sfia-studio): frame V2 runtime and UI contract
9cca45a docs(sfia-studio): add V2 decision and validation pack
a1e207b docs(sfia-studio): fix V2 framing trailing whitespace
```

## Git final (projet)

- branche framing V2 locale
- HEAD `a1e207b…`
- base `634a7fb…`
- aucun upstream
- aucun push projet / PR / merge
- untracked `.tmp-sfia-review/**` uniquement après handoff publish

## Actions non exécutées

Aucun code applicatif ; pas de push projet ; pas de PR ; pas de merge ; pas de delete-branch ; control-tower intact ; pas d’IAM/persistence/agent/delivery/cutover ; pas d’écriture Figma ; pas d’implémentation V2-A*.

## Verdict

`SFIA STUDIO FIRST VISIBLE SLICE V2 RUNTIME AND UI CONTRACT FRAMED — V1 CORE AND STUDIOSHELL REUSE DEFINED — PROCESS-LOCAL STATE BOUNDARIES DOCUMENTED — CREATE PROJECT AND OVERVIEW CONTRACTS DEFINED — D-V2-01 TO D-V2-05 CANDIDATE FOR MORRIS DECISION — IMPLEMENTATION SLICED INTO V2-A1 V2-A2 V2-A3 — NO APPLICATION CODE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER — PROJECT BRANCH LOCAL ONLY — HANDOFF UPDATED AND REMOTE VERIFIED`

## Gates candidats suivants

1. `GO ADOPT SFIA STUDIO V2 RUNTIME AND UI CONTRACT — D-V2-01 [CHOIX] — D-V2-02 [CHOIX] — D-V2-03 [CHOIX] — D-V2-04 [CHOIX] — D-V2-05 [CHOIX] — NO APPLICATION CODE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

2. Puis : `GO IMPLEMENT SFIA STUDIO FIRST VISIBLE SLICE V2-A1 — SERVER-ONLY RUNTIME BRIDGE — REUSE V1 CORE — PROCESS-LOCAL STATE ONLY — NO UI IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

Aucune implémentation automatique.

---

## Extraits exploitables (modified content)

### Architecture candidate (README)

```text
UI React (StudioShell)
  → action/adapter Next.js
    → service server-only
      → LocalProjectFacade
        → T-A0/T-A1
        → repositories mémoire
        → audit optionnel
```

### Recommandations D-V2 (11)

| ID | Reco |
|----|------|
| D-V2-01 | Server Action + shared server-only service |
| D-V2-02 | Process-local singleton + test reset |
| D-V2-03 | Default no-op audit ; SQLite opt-in |
| D-V2-04 | `/studio/projects/new` + `/[projectId]` |
| D-V2-05 | Sticky banner + expandable disclosures |

### Routes actuelles vs candidates

```text
Actuel: /synthese /decision /cycle-actif /nouvelle-demande /projects/*
Candidat V2: /studio/projects/new → /studio/projects/[projectId]
```

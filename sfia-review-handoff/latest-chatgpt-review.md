# SFIA Studio Next — C24 Review Pack FULL

## Reprise approfondie Figma-to-code — fidélité UX produit réel (page 12)

**Cycle:** C24 consolidé — Delivery / INC Critical · §6.6 UX/UI  
**Branche produit:** `sfia/next-ml5-integrated-delivery-20261123`  
**HEAD:** `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY C1–C24, **aucun commit produit**)  
**merge-base / origin/main:** `997897fd7cf914771e7d08e8030dc7123fab7d25`  
**Build qualifié final:** `aXcIQCDMIigpelfT-Jvr5`  
**contentDigest:** `84f42bb7f8eb8285696f6d7495cd7e255e764fb0551bdd18b6298170911f2cb7`  
**Product versioning:** NO RELEASE · STABLE NOT AVAILABLE · `web/src/lib/product-version.ts` préservé  
**Handoff antérieur (référence Git, non concaténé):** `c9e6803aa62cf7875b0f0e08aa47e5f5a464f18e`  
**Lane:** DEV qualify `http://127.0.0.1:3100` · FAKE/REAL applicable · fixtures harness ≠ preuve produit  
**Projet de preuve produit:** `proj_c08249f9-9348-49fb-b33b-016c6430aec5` (ML5-C11-LIVE)  
**Horodatage pack:** 2026-11-24T17:00:33.348688+00:00

---

## 0. Git Truth Check

```
## sfia/next-ml5-integrated-delivery-20261123
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
 M projects/sfia-studio-next/construction/ml5-figma-page12-l0-inventory.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/.gitignore
 M projects/sfia-studio-next/web/next.config.ts
 M projects/sfia-studio-next/web/package.json
 M projects/sfia-studio-next/web/scripts/db-migrate.sh
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/turns/by-key/[clientTurnKey]/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
 M projects/sfia-studio-next/web/src/app/login/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/ContractViewer.tsx
 M projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
 M projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
 M projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
 M projects/sfia-studio-next/web/src/domains/conversation/investigation-persistence.ts
 M projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
 M projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
 M projects/sfia-studio-next/web/src/domains/conversation/web-search-sanitize.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-handoff.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
 M projects/sfia-studio-next/web/src/domains/execution/handoff-integrity.ts
 M projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
 M projects/sfia-studio-next/web/src/domains/execution/types.ts
 M projects/sfia-studio-next/web/src/domains/identity/session.ts
 M projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
 M projects/sfia-studio-next/web/src/lib/auth.ts
 M projects/sfia-studio-next/web/tests/e2e/ensemble05-live-bounded.spec.ts
 M projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/cognitive-policy.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-investigation-state.test.ts
?? projects/sfia-studio-next/architecture-technique/conducteur-cognitif-et-production-nora.md
?? projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md
?? projects/sfia-studio-next/construction/ml5-candidat-git-inventaire-c13.md
?? projects/sfia-studio-next/web/playwright.page12-visual.config.ts
?? projects/sfia-studio-next/web/playwright.qualify.config.ts
?? projects/sfia-studio-next/web/scripts/c17-functional-campaign.mjs
?? projects/sfia-studio-next/web/scripts/c18-functional-campaign.mjs
?? projects/sfia-studio-next/web/scripts/c21-campaign.mjs
?? projects/sfia-studio-next/web/scripts/c22-query-live.mts
?? projects/sfia-studio-next/web/scripts/c24-m2-retry.mts
?? projects/sfia-studio-next/web/scripts/c24-mission-smoke.mts
?? projects/sfia-studio-next/web/scripts/c24-operational-missions.mts
?? projects/sfia-studio-next/web/scripts/c24-probe-director-db.mts
?? projects/sfia-studio-next/web/scripts/ml5-c10-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c10-seed-scenario.mts
?? projects/sfia-studio-next/web/scripts/ml5-c11-live-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c11-seed-project.mts
?? projects/sfia-studio-next/web/scripts/ml5-c12-ack-drop-incident.mts
?? projects/sfia-studio-next/web/scripts/ml5-c12-seed-and-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c13-long-run-supervisor.mts
?? projects/sfia-studio-next/web/scripts/ml5-c13-probe-mode.mts
?? projects/sfia-studio-next/web/scripts/ml5-c13-stop-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-cognitive-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-s2-s5-live.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-web-frontier-debug.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-web-live-probe.mts
?? projects/sfia-studio-next/web/scripts/ml5-c14-web-raw-debug.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-seed-scenario.mts
?? projects/sfia-studio-next/web/scripts/qualify-check.mts
?? projects/sfia-studio-next/web/scripts/qualify-dev.sh
?? projects/sfia-studio-next/web/src/app/api/dev/auto-session/
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/captures/
?? projects/sfia-studio-next/web/src/app/dev/ml5-page12-visual/
?? projects/sfia-studio-next/web/src/components/figma/D6ConfirmLaunch.tsx
?? projects/sfia-studio-next/web/src/components/figma/ml5-page12-visual-fixtures.ts
?? projects/sfia-studio-next/web/src/db/migrations/019_ml5_qualification_history.sql
?? projects/sfia-studio-next/web/src/db/migrations/020_cognitive_work.sql
?? projects/sfia-studio-next/web/src/db/migrations/021_cognitive_contract_filiation.sql
?? projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
?? projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts
?? projects/sfia-studio-next/web/src/domains/conversation/cursor-contract-production-tool.ts
?? projects/sfia-studio-next/web/src/domains/conversation/dossier-composer-attachment.ts
?? projects/sfia-studio-next/web/src/domains/conversation/nora-contract-bridge.ts
?? projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts
?? projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
?? projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
?? projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
?? projects/sfia-studio-next/web/src/domains/conversation/tool-source-journal.ts
?? projects/sfia-studio-next/web/src/domains/conversation/web-egress-guard.ts
?? projects/sfia-studio-next/web/src/domains/conversation/web-search-authorize.ts
?? projects/sfia-studio-next/web/src/domains/conversation/web-source-citation.ts
?? projects/sfia-studio-next/web/src/domains/execution/cursor-autonomous-restitution.ts
?? projects/sfia-studio-next/web/src/domains/execution/cursor-git-option-a.ts
?? projects/sfia-studio-next/web/src/domains/execution/cursor-live-supervisor.ts
?? projects/sfia-studio-next/web/src/domains/execution/mandate-applicability.ts
?? projects/sfia-studio-next/web/src/domains/execution/mcp-capability-check.ts
?? projects/sfia-studio-next/web/src/domains/execution/nora-contract-prepare.ts
?? projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts
?? projects/sfia-studio-next/web/src/domains/identity/dev-listen-probe.ts
?? projects/sfia-studio-next/web/src/domains/proofs/d8-cognitive-criterion-eval.ts
?? projects/sfia-studio-next/web/src/domains/proofs/d8-evidence-read.ts
?? projects/sfia-studio-next/web/src/domains/proofs/d8-evidence-tools-sdk.ts
?? projects/sfia-studio-next/web/src/domains/proofs/d8-path-confine.ts
?? projects/sfia-studio-next/web/src/domains/proofs/evidence-captures.ts
?? projects/sfia-studio-next/web/src/domains/proofs/proof-ref-verify.ts
?? projects/sfia-studio-next/web/src/domains/proofs/studio-isolated-verify.ts
?? projects/sfia-studio-next/web/src/domains/proofs/studio-verify-authority.ts
?? projects/sfia-studio-next/web/src/instrumentation.ts
?? projects/sfia-studio-next/web/tests/e2e/ml5-c24-page12-visual.spec.ts
?? projects/sfia-studio-next/web/tests/e2e/ml5-c24-product-after-capture.spec.ts
?? projects/sfia-studio-next/web/tests/e2e/ml5-c24-product-before-capture.spec.ts
?? projects/sfia-studio-next/web/tests/helpers/cognitive-filiation-seed.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c13-d8-evidence-confine.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c15-cognitive-work.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c16-cognitive-ownership.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c21-autonomous-restitution.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c22-d8-conforming.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c22-d8-contradiction.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c22-live-director.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c22-restitution-cas.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c24-fencing-lease.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-c24-nora-avis-resume.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-qualification-requalify.pg.test.ts
?? projects/sfia-studio-next/web/tests/qualify/
?? projects/sfia-studio-next/web/tests/unit/ml5-c10-d6-confirmed-required.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c12-ack-drop-fault.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c12-d8-evidence-read.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c13-d8-path-confine.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c13-d8-tool-journal.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c13-live-supervisor.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c14-semantic-routing.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c15-cognitive-conductor.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c16-cognitive-integration.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c18-cognitive-output.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c19-invariants.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c20-invariants.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c21-consolidation.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c22-report-binding.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c23-d8-studio-verify.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c24-d4-ref-parse.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c24-d8-safety.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c24-dossier-attachment-continuity.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c24-reprise-p0.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c24-web-registry-usage.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c9-d6-refuse-phased.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-claim-anti-duplicat.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-git-option-a.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-dev-auto-session.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-nora-contract-bridge.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-proof-ref-verify.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-public-web-frontier.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-qualification-requalify.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-web-search-authorize.test.ts
HEAD=6cf33e9923796974b9ee540a9c6ff27110342950
merge-base=997897fd7cf914771e7d08e8030dc7123fab7d25
remote handoff tip attendu=c9e6803aa62cf7875b0f0e08aa47e5f5a464f18e
```

**STOP déclenché ?** Non — HEAD, merge-base et remote handoff conformes. État DIRTY attendu. Aucun reset/stash/commit produit.

---

## 1. Sources lues (contrat)

Depuis `main@997897fd` / branches candidates (références, non re-copiées ici) :

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/sfia-cycle-execution-template.md` §6.6
- `projects/sfia-studio-next/governance/*` (SEF, roadmap, naming, ENV-01, versioning, ADR R4, ADR convergence UX)
- `ux-ui/methodologie-contrat-figma-cursor.md`, `contrat-transposition-figma-code.md`, `protocole-fidelite-figma-runtime.md`
- `construction/convergence-ux-parcours-pilote-nora/protocole-preflight-source-figma.md`
- Méthodologie Figma↔Cursor v1.1 blob `906c6f60…`
- Conformité `@359202b6…` : contrat acceptation + registre couverture
- Conception `@b411e327…` : préparation cognitive + qualification écarts
- Pack Figma page 12 déjà constitué sous `web/.sfia-evidence/figma-page12/` (14 PNG)
- Code local : StudioShell, ProjectChrome, NoraConversation, ContractViewer, CursorRealizationSurface, RealizationBilan, tokens.css, page projet

---

## 2. Diagnostic des écarts (constat Morris → causes)

| Zone | Écart observé | Cause code | Correction C24 |
| --- | --- | --- | --- |
| Visionneuse 50/50 | libellés / volets empilés | ContractViewer liste plate | Grille 2×2 engagements + 6 accordéons + instruction/footer |
| Exécution | liste rudimentaire + bilan empilé | surface unique sans split ; openBilan dans exec | `fig-exec-split` liste/détail ; bilan → `surface=publication` |
| Résultats | bilan full-width, onglets à gauche, pas de liste | RealizationBilan seul | `fig-results-split` bilans permanents + dossier ; tabs spread |
| Shell | logo/proportions/héros doublons | chrome + surface headers ; publication=git | logo `#292e5d` 36×36 r8 ; heroes chrome 12.04/08/09 ; publication hors git |
| 12.09 | chip seule, pas de contexte joint | aside défaut | panneau CONTEXTE JOINT + hero « Reprendre avec Nora » |
| Continuité R2 | (acquis) | chip + mergeQuestions | **préservé** (7/7 unit) |

---

## 3. Contrat Figma (page 12)

- FileKey `itgvCulInEnFY6DvgIegvP` · Page `1209:2` · Viewport **1680×970**
- Frames 12.01–12.14 (node-ids mandat) — PNG natifs dans `web/.sfia-evidence/figma-page12/`
- Session Figma MCP antérieure réutilisée ; pas de valeurs inventées
- Tokens cibles : fond `#0b101b` · panneaux `#151d2c` · cartes `#1b2639` · accent `#7477ed` · logo `#292e5d`

### Inventaire PNG Figma (SHA)

- `12.01-1210-233.png` · sha256 `7148425a94e02227…`
- `12.02-1211-117.png` · sha256 `0945e464d7615d8a…`
- `12.03-1211-676.png` · sha256 `ab70a562fdad1756…`
- `12.04-1211-277.png` · sha256 `8d26c5488b5aacce…`
- `12.05-1211-424.png` · sha256 `5ee353c22d554cce…`
- `12.06-1212-383.png` · sha256 `3b3005b4725697f2…`
- `12.07-1212-510.png` · sha256 `e500aa92a4d5046c…`
- `12.08-1212-637.png` · sha256 `40052074ec9a2393…`
- `12.09-1212-774.png` · sha256 `4c3b601ce6a26af2…`
- `12.10-1212-895.png` · sha256 `e748dcf91e359a78…`
- `12.11-1239-613.png` · sha256 `7a382a9bc067c2d7…`
- `12.12-1239-680.png` · sha256 `91b07f87a911f919…`
- `12.13-1245-757.png` · sha256 `c20dffdab347a930…`
- `12.14-1250-815.png` · sha256 `88d0e7b3c1046455…`

---

## 4. Modifications exactes (présentation)

### Fichiers principaux (diffstat worktree)

```
.../construction/delivery-history.md               |  417 ++++++++
 .../web/src/app/projects/[projectId]/page.tsx      |  529 +++++++++-
 .../web/src/components/figma/ContractViewer.tsx    |  242 +++--
 .../components/figma/CursorRealizationSurface.tsx  | 1085 ++++++++++++++++----
 .../web/src/components/figma/NoraConversation.tsx  |   87 +-
 .../web/src/components/figma/ProjectChrome.tsx     |   29 +-
 .../web/src/components/figma/RealizationBilan.tsx  |  485 ++++++++-
 .../web/src/components/figma/tokens.css            |  914 +++++++++++++++++
 .../web/src/components/shell/StudioShell.tsx       |   43 +-
 9 files changed, 3435 insertions(+), 396 deletions(-)
```

### Créations / tests

- `web/tests/e2e/ml5-c24-product-after-capture.spec.ts` — captures **routes produit** (page.request auto-session)
- `web/tests/e2e/ml5-c24-product-before-capture.spec.ts` — contrôle session (note : vrai BEFORE pré-rewrite = inspection Morris + pack c9e6803a ; captures « before » post-rewrite = même build)

### Extraits (intégralité des composants clés — anti-stub)


#### `projects/sfia-studio-next/web/src/components/figma/ContractViewer.tsx`

```tsx
"use client";

/**
 * ML5 — Contrat technique inspectable (frames 12.02 / 12.03 / 12.14).
 * Composition Figma: engagements 2×2 + six volets accordéon + instruction.
 * Reading / expanding instruction never authorizes execution.
 */

import { useState } from "react";

export type ContractViewerModel = {
  contractId: string;
  contractKey: string;
  version: number;
  fingerprint: string;
  title: string;
  /** DRAFT | READY | … — D6 only when READY */
  status?: string;
  engagements: {
    willDo: string;
    willNotDo: string;
    expectedResult: string;
    pilotControl: string;
  };
  volets: {
    mission: string;
    perimeter: string;
    capabilitiesAuthority: string;
    stopConditions: string;
    proofsSources: string;
    integrity: string;
  };
  instructionText: string;
  risks: string[];
  exclusions: string[];
};

const VOLET_META: Array<{
  key: keyof ContractViewerModel["volets"];
  label: string;
}> = [
  { key: "mission", label: "1 · Mission et résultats" },
  { key: "perimeter", label: "2 · Périmètre et effets" },
  { key: "capabilitiesAuthority", label: "3 · Cursor, outils et autorité" },
  { key: "stopConditions", label: "4 · Limites, STOP et réversibilité" },
  { key: "proofsSources", label: "5 · Tests, Git, handoff et preuves" },
  { key: "integrity", label: "6 · Version et transmission exacte" },
];

export function ContractViewer(props: {
  contract: ContractViewerModel;
  instructionExpanded: boolean;
  onToggleInstruction: () => void;
  onClose: () => void;
  onOpenInExecution: () => void;
  onRequestExecute?: () => void;
  executeDisabled?: boolean;
}) {
  const c = props.contract;
  const [openVolet, setOpenVolet] = useState<string | null>(null);
… (120 lines omitted) …
        </button>
        {props.instructionExpanded ? (
          <pre
            className="fig-contract-instruction-full"
            data-testid="contract-instruction-full"
          >
            {c.instructionText}
          </pre>
        ) : (
          <p data-testid="contract-instruction-preview" className="fig-cv-meta">
            Aperçu non contractuel · consulter le texte complet avant
            autorisation.
            {c.instructionText
              ? ` ${c.instructionText.slice(0, 160)}${
                  c.instructionText.length > 160 ? "…" : ""
                }`
              : ""}
          </p>
        )}
      </section>

      <footer className="fig-cv-footer">
        <p className="fig-cv-meta">
          Version v{c.version} · empreinte {c.fingerprint.slice(0, 16)}…
        </p>
        <div className="fig-cv-footer-actions">
          <button
            type="button"
            className="btn secondary"
            data-testid="contract-viewer-close"
            onClick={props.onClose}
          >
            Fermer
          </button>
          {props.onRequestExecute ? (
            <button
              type="button"
              className="btn"
              data-testid="contract-request-execute"
              disabled={props.executeDisabled}
              onClick={props.onRequestExecute}
            >
              Exécuter
            </button>
          ) : null}
        </div>
      </footer>
    </div>
  );
}
```

#### `projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx`

```tsx
"use client";

/**
 * ML5 — Bilan D8 (frames 12.08 / 12.11 / 12.12 / 12.13).
 * Composition Figma: 3 états distincts + onglets répartis + cartes thématiques.
 * Verdict D8 ≠ avis Nora ≠ décision D6.
 */

import type { D8Rubric } from "@/domains/proofs/cursor-qualify";

/** Figma page 12 tabs — exact labels. */
export const BILAN_TAB_LABELS = {
  synthese: "SYNTHÈSE",
  livrables: "LIVRABLES ET TESTS",
  git: "GIT & PIÈCES",
  ecarts: "ÉCARTS",
} as const;

export type BilanTab = keyof typeof BILAN_TAB_LABELS;

export type BilanDossierStructured = {
  attemptId: string;
  contractId?: string | null;
  handoffId?: string | null;
  handoffStatus?: string | null;
  dossierVersion?: number | null;
  integrityHash?: string | null;
  filesCreated?: string[];
  filesModified?: string[];
  filesObserved?: string[];
  filesConsulted?: Array<{ path: string; sha256?: string }>;
  testsDeclared?: string[];
  testsCaptured?: string[];
  gaps?: string[];
  sourcesConsulted?: string[];
  git?: {
    tipSha?: string | null;
    branch?: string | null;
    baseRef?: string | null;
    remoteSha?: string | null;
  } | null;
  terminalStatus?: string | null;
  pipelineStatus?: string | null;
};

function listOrMissing(items: string[] | undefined, emptyLabel = "MISSING"): string {
  if (!items || items.length === 0) return emptyLabel;
  return items.join(", ");
}

function ProofCard(props: {
  rubrique: string;
  facts: string[];
  testId?: string;
}) {
  return (
    <article className="fig-proof-card" data-testid={props.testId}>
      <p className="fig-proof-card-rubrique">{props.rubrique}</p>
      {props.facts.map((f, i) => (
        <p
… (360 lines omitted) …
              ? d.gaps
              : [
                  "Aucun écart inventorié — état UNKNOWN (≠ absence d'écart démontrée)",
                ]
            ).map((g, i) => (
              <ProofCard
                key={`gap-${i}`}
                testId={i === 0 ? "bilan-rubric-ecarts" : undefined}
                rubrique={`ÉCART ${i + 1}`}
                facts={[
                  `Attendu : conformité au contrat`,
                  `Constaté : ${g}`,
                  `Impact : ${rubricText(byKey, "impact", "non établi")}`,
                  `Suite : ${rubricText(byKey, "recommandations", "compléter preuves ou nouveau mandat")}`,
                ]}
              />
            ))}
          </div>
          <section className="fig-bilan-nora-band">
            <p className="fig-bilan-nora-kicker">
              IMPACT PROJET / QUALIFICATION D8
            </p>
            <p className="fig-bilan-nora-body">
              {rubricText(byKey, "verdict", `Verdict : ${props.verdict || "UNKNOWN"}`)}
            </p>
            {props.onDiscussWithNora ? (
              <button
                type="button"
                className="fig-cv-link"
                data-testid="bilan-discuss-nora"
                onClick={props.onDiscussWithNora}
              >
                En discuter avec Nora →
              </button>
            ) : null}
          </section>
        </div>
      ) : null}

      {/* Keep rubric testids for non-regression when not rendered above */}
      <div className="sr-only" aria-hidden data-testid="bilan-rubrics">
        {props.rubrics.map((r) => (
          <span key={r.key} data-testid={`bilan-rubric-${r.key}`} data-coverage={r.coverage}>
            {r.title}
          </span>
        ))}
      </div>
    </div>
  );
}
```

#### `projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx`

```tsx
"use client";

/**
 * ML5 — parcours Exécution (12.04–12.07 / 12.14) et Résultats (12.08 / 12.11–12.13).
 * Mounted on existing project page — no parallel shell.
 * Reading never authorizes; Non confirmation = no dispatch.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { ContractViewer, type ContractViewerModel } from "./ContractViewer";
import { D6ConfirmLaunch } from "./D6ConfirmLaunch";
import {
  RealizationBilan,
  type BilanDossierStructured,
  type BilanTab,
} from "./RealizationBilan";
import type { D8Rubric } from "@/domains/proofs/cursor-qualify";

type AttemptRow = {
  attemptId: string;
  status: string;
  fingerprint: string;
  correlationKey: string;
  decisionId: string | null;
  live: {
    terminalStatus?: string | null;
    reportStatus?: string | null;
    lastActivitySummary?: string | null;
    agentId?: string | null;
    runId?: string | null;
    limits?: string[];
  };
  plan: {
    contractId: string;
    contractKey: string;
    contractVersion: number;
    workspaceKey?: string;
  };
  createdAt: string;
  updatedAt: string;
};

type ContractRow = {
  id: string;
  contractKey: string;
  version: number;
  fingerprint: string;
  status: string;
  body: {
    title: string;
    engagements: ContractViewerModel["engagements"];
    volets: ContractViewerModel["volets"];
    instructionText: string;
    risks: string[];
    exclusions: string[];
  };
};

export function CursorRealizationSurface(props: {
  projectId: string;
… (999 lines omitted) …
                </p>
                <div className="fig-bilan-appreciations">
                  <article className="fig-bilan-appreciation">
                    <p className="fig-bilan-appreciation-label">CURSOR</p>
                    <p className="fig-bilan-appreciation-value">
                      {selectedAttempt.live.terminalStatus ?? selectedAttempt.status}
                    </p>
                  </article>
                  <article className="fig-bilan-appreciation">
                    <p className="fig-bilan-appreciation-label">CONTRÔLE D8 / D9</p>
                    <p className="fig-bilan-appreciation-value">Non disponible</p>
                  </article>
                  <article className="fig-bilan-appreciation">
                    <p className="fig-bilan-appreciation-label">ANALYSE FINALE</p>
                    <p className="fig-bilan-appreciation-value">Non disponible</p>
                  </article>
                </div>
                <div className="fig-exec-filters" style={{ marginTop: 14 }}>
                  <button
                    type="button"
                    className="btn secondary"
                    data-testid="results-reprise-nora-pending"
                    onClick={() => {
                      props.onDiscussWithNora?.({
                        attemptId: selectedAttempt.attemptId,
                        contractId: selectedAttempt.plan.contractId,
                        handoffId: null,
                        dossierVersion: null,
                        verdictD8: selectedAttempt.status,
                        noraKind: null,
                        fingerprint: selectedAttempt.fingerprint,
                        pieces: null,
                      });
                    }}
                  >
                    Reprendre avec Nora
                  </button>
                </div>
              </div>
            ) : (
              <p className="muted" data-testid="results-dossier-empty">
                Sélectionnez un bilan à gauche pour ouvrir le dossier.
              </p>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
```

#### `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`

```tsx
"use client";

import {
  PROJECT_SURFACE_LABELS,
  type StudioSurface,
} from "@/components/shell/studio-rail";

type Surface = StudioSurface;

const HERO: Record<
  Surface,
  { kicker: string; title: string; sub: string }
> = {
  travail: {
    kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
    title: "Réviser un document avec Nora",
    sub: "Le chat reste à gauche ; le document sélectionné s’ouvre dans la visionneuse à droite.",
  },
  projet: {
    kicker: "ESPACE PROJET / VUE D'ENSEMBLE",
    title: "Vue d'ensemble",
    sub: "Identité, cycle et activité du projet.",
  },
  pilotage: {
    kicker: "ESPACE PROJET / TRAJECTOIRE",
    title: "Trajectoire du projet",
    sub: "Ce qui est terminé, ce qui est en cours et ce qui pourrait suivre.",
  },
  journal: {
    kicker: "ESPACE PROJET  /  JOURNAL",
    title: "Journal",
    sub: "La mémoire du projet, organisée par thèmes. Retrouvez l’essentiel sans remonter toute la conversation.",
  },
  document: {
    kicker: "ESPACE PROJET  /  DOCUMENTS",
    title: "Bibliothèque du projet",
    sub: "Retrouvez les documents durables du projet, leurs versions et les actions disponibles.",
  },
  git: {
    kicker: "ESPACE PROJET / DÉPÔTS GIT",
    title: "Dépôts Git",
    sub: "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet.",
  },
  execution: {
    kicker: "ESPACE PROJET  /  EXÉCUTION",
    title: "Exécution",
    sub: "Retrouver contrats, tentatives et réalisations ; une intervention en cours conserve son suivi LIVE.",
  },
  publication: {
    kicker: "ESPACE PROJET  /  RÉSULTATS & PREUVES",
    title: "Résultats & preuves",
    sub: "Dossier de réalisation : fichiers, tests, Git, captures, manifeste et avis Nora, sans validation automatique.",
  },
};

export function ProjectChrome(props: {
  projectId: string;
  projectName: string | null;
  surface: Surface;
  /** Optional status line — never raw technical IDs in the nominal path. */
… (94 lines omitted) …
            ) : null}
          </header>
        ) : null}
      </div>

      <div className="sr-only" aria-hidden>
        {(
          [
            "travail",
            "projet",
            "pilotage",
            "journal",
            "document",
            "git",
            "publication",
          ] as const
        ).map((id) => (
          <span
            key={id}
            data-testid={`surface-${id}`}
            data-surface-active={props.surface === id ? "1" : "0"}
          />
        ))}
      </div>

      {isTravail ? (
        <div
          className="project-travail-stage"
          data-testid="project-travail-stage"
          data-travail-layout={props.travailLayout ?? "normal"}
        >
          {intro}
          <div
            className="fig-travail-intro-rule"
            data-testid="travail-intro-rule"
            aria-hidden
          />
          {props.children}
        </div>
      ) : isMl5Realization ? (
        <div className="project-ml5-realization-stage" data-testid="project-ml5-realization-stage">
          {intro}
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </div>
  );
}
```

#### `tokens.css` (bloc page12 / exec / results)

```css
/* Execution list/detail (12.04) */
.fig-exec-split {
  display: grid;
  grid-template-columns: minmax(280px, 437fr) minmax(0, 903fr);
  gap: 18px;
  align-items: stretch;
  min-width: 0;
}
.fig-exec-list-panel,
.fig-exec-detail-panel {
  min-width: 0;
  padding: 20px;
  border: 1px solid #2b3850;
  border-radius: 10px;
  background: #151d2c;
}
.fig-exec-list-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.fig-exec-list-head h3 {
  margin: 0;
  font-size: 19px;
  color: #f3f5ff;
}
.fig-exec-count {
  font-size: 10px;
  font-weight: 600;
  color: #7477ed;
  padding: 7px;
  border-radius: 15px;
  border: 1px solid #2b3850;
  background: #242c4b;
}
.fig-exec-filters {
  display: flex;
  gap: 8px;
  margin: 12px 0;
  flex-wrap: wrap;
}
.fig-exec-filter {
  font-size: 11px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #2b3850;
  background: #1b2639;
  color: #a3b0c7;
}
.fig-exec-filter.is-active {
  color: #f3f5ff;
  background: #242c4b;
}
.fig-exec-cards {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.fig-exec-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: 100%;
  text-align: left;
  padding: 13px;
  border-radius: 10px;
  border: 1px solid #2b3850;
  background: #1b2639;
  color: #f3f5ff;
  cursor: pointer;
}
.fig-exec-card.is-selected { background: #242c4b; }
.fig-exec-card-kicker { font-size: 10px; font-weight: 600; color: #7477ed; }
.fig-exec-card-title { font-size: 13px; font-weight: 600; color: #f3f5ff; }
.fig-exec-card-meta { font-size: 11px; color: #a3b0c7; }
.fig-exec-detail-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 4px;
}
.fig-exec-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13px;
  margin: 14px 0;
}
.fig-exec-detail-grid--3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.fig-exec-situation {
  margin: 14px 0;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #2b3850;
  background: #1b2639;
}
.fig-realization-status-bar {
  margin: 0 0 12px;
}
.project-ml5-realization-stage {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}
.fig-dossier-context-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fig-exec-detail-card {
  padding: 13px;
  border-radius: 10px;
  border: 1px solid #2b3850;
  background: #1b2639;
}
.fig-exec-detail-card-label {
  margin: 0 0 6px;
  font-size: 10px;
  font-weight: 600;
  color: #a3b0c7;
}
.fig-exec-detail-card-value {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #f3f5ff;
  overflow-wrap: anywhere;
}
.fig-exec-live-panel {
  margin-top: 14px;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid #2b3850;
  background: #1b2639;
}
.fig-exec-live-events {
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.fig-exec-live-events li {
  font-size: 12px;
  color: #a3b0c7;
  padding: 8px 11px;
  border-radius: 7px;
  background: #151d2c;
  border: 1px solid #2b3850;
}

@media (max-width: 1100px) {
  .fig-cv-engagements,
  .fig-proof-grid,
  .fig-exec-split,
  .fig-results-split,
  .fig-bilan-appreciations,
  .fig-bilan-tabs--spread,
  .fig-exec-detail-grid {
    grid-template-columns: 1fr;
  }
}

.fig-contract-viewer .fig-travail-viewer-head,
.fig-contract-viewer .fig-contract-footer {
  flex-shrink: 0;
}

.fig-contract-section {
  min-width: 0;
  max-width: 100%;
  padding: 12px 18px;
  border-bottom: 1px solid #272e49;
}

.fig-contract-section h3 {
  margin: 0 0 8px;
  font-size: 13px;
  color: var(--fig-accent-soft);
}

.fig-contract-section dl,
.fig-contract-section ul,
.fig-contract-section p,
.fig-contract-section dd,
.fig-contract-section li {
  min-width: 0;
  max-width: 100%;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.fig-contract-section dl {
  display: grid;
  grid-template-columns: minmax(0, 9rem) minmax(0, 1fr);
  gap: 6px 12px;
  margin: 0;
}

.fig-contract-section dt {
  color: var(--fig-quiet);
  font-size: 12px;
}

.fig-contract-section dd {
  margin: 0;
  font-size: 13px;
  color: var(--fig-ink);
}

.fig-contract-instruction-full {
  margin: 8px 0 0;
  padding: 12px;
  max-width: 100%;
  max-height: min(48vh, 420px);
  overflow-x: auto;
  overflow-y: auto;
  overscroll-behavior: contain;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  line-height: 1.45;
  color: #f4f6fc;
  background: #0f1420;
  border: 1px solid #272e49;
  border-radius: 10px;
}

.fig-contract-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
  padding: 12px 18px 16px;
  border-top: 1px solid #272e49;
}

.fig-cursor-realization {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  max-width: 100%;
  width: 100%;
  overflow-x: hidden;
}

.fig-cursor-realization header,
.fig-cursor-realization section {
  min-width: 0;
  max-width: 100%;
}

.fig-cursor-realization ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.fig-cursor-realization li {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  min-width: 0;
}

.fig-d6-confirm {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(7, 10, 18, 0.72);
  backdrop-filter: blur(2px);
}

.fig-d6-confirm-card {
  /* Figma 12.03 modal native: 490×230, radius 10, fill #151d2c, stroke #2b3850 */
  width: min(490px, 100%);
  max-height: min(80vh, 640px);
  overflow: auto;
  padding: 24px;
  background: #151d2c;
  border: 1px solid #2b3850;
  border-radius: 10px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
}

.fig-d6-confirm-card h3 {
  margin: 0 0 8px;
  font
…
```

---

## 5. Preuves des 14 états (produit réel)

Preuves **BROWSER** sur shell réel `:3100` — **pas** `/dev/ml5-page12-visual` comme substitut.

### Captures Studio AFTER (consultables localement)

Chemin : `projects/sfia-studio-next/web/.sfia-evidence/figma-page12-product-after/`

- `12.01-like-travail.png` · 249766 B · sha256 `ea010dabbe4bbd3ee91f0deccc197a9659dc2dc641e731656c3f1171d910b889`
- `12.02-contract-viewer.png` · 282518 B · sha256 `6b80a9c8345e23aa73fa5fff17e5b15859f6067be116e5583bb407ee395f0c51`
- `12.04-execution.png` · 176541 B · sha256 `b0c04bd18b9dcd82f1c90a44a42152764f8c8a6af60dcdfb880c5fd18a14786d`
- `12.05-execution-contract-expanded.png` · 258522 B · sha256 `3e8fe3890e07be99fe04dcdf752e8753bc39f5cac1fb7a26ec4b9ce49b110e22`
- `12.05-execution-contract.png` · 249598 B · sha256 `27240cd45f33681cf258b7b7908c5365d997526d9eaa8979ae36942addb0a721`
- `12.06-or-12.07-execution-detail.png` · 176541 B · sha256 `b0c04bd18b9dcd82f1c90a44a42152764f8c8a6af60dcdfb880c5fd18a14786d`
- `12.08-results-with-bilan.png` · 246782 B · sha256 `ac19625c8442771ac8e3f13c55657ea7b0c371f237fbb9e6d9bbe1775e89ad10`
- `12.08-results.png` · 105870 B · sha256 `9d8d0686eb884ef6c1b30923fa0db37a55ec023cc01cf167bedd2f6452952379`
- `12.09-reprise-nora.png` · 206992 B · sha256 `2600df2406a57302aa31bae768b72ec48e7a2b120c2c479ba0402b68eed9c419`
- `SHA256SUMS.txt` · 3268 B · sha256 `87493220585c8a4cd0aa8bf476900aa16a7f568b77843d9c579e0e7717a5b958`
- `execution-bilan-stacked.txt` · 30 B · sha256 `3516f0e4bf53729099b98e098cbc39bb3f93617c1f89b7fe0eaf1f711dbbc42b`
- `f2-rects.json` · 828 B · sha256 `653a5d4d2e10bb57290e7ef52364d7d1a510dab3995e889ea1d9403ebab9ea56`
- `project-id.txt` · 41 B · sha256 `54885c7d59f2c8b22c23e7c17a9a85e069fc0228cbf16a9d8e1ce6c832119e85`
- `results-tab-ecarts.png` · 159140 B · sha256 `d9931ae1d07a5ed34f02107c2823b75dae359a4996132a370c70af1db1833e63`
- `results-tab-git.png` · 180780 B · sha256 `cfb2f20cebdaee4e8e4e5f8efe2b1576fb0566ab4be3358527d7ddc42d0f51ba`
- `results-tab-livrables.png` · 150304 B · sha256 `08a2a74270043b43ada057c2e3c6c53351b211ed045bb636f61830562c601f89`
- `results-tab-synthese.png` · 246782 B · sha256 `ac19625c8442771ac8e3f13c55657ea7b0c371f237fbb9e6d9bbe1775e89ad10`
- `shell-portfolio.png` · 165331 B · sha256 `3ea74af44df95443466263e9bd5c67e26a017215bcbc7fb63673b71925725e2b`

### Comparatifs Figma | Studio (côte à côte)

Chemin : `projects/sfia-studio-next/web/.sfia-evidence/figma-page12-product-compare/`

- `compare-12.02.png` · 453136 B · sha256 `ce83838510ed5a2487ebbaa5d35bb96ebaa20846da69a8a2a419343709fdcfe8`
- `compare-12.04.png` · 327301 B · sha256 `146507840d69cc45b1e3135b307174a94a1c6677300663cbf9ea6ca8ac144bfd`
- `compare-12.08.png` · 458969 B · sha256 `b05abb9286484afc22596f8f19b525554a7a9e6ec353cf70e4ec4ced5567f7f2`
- `compare-12.09.png` · 352501 B · sha256 `cf3957cdf0ed40879824b17b0427b54802aa7444260027bfaf0420ebe5a84770`
- `compare-12.11.png` · 324705 B · sha256 `e4c2bfe9920682331f55facffd4660a525c0d0f7d25fc1cabbb83e08942b6581`
- `compare-12.12.png` · 354261 B · sha256 `341b4ff6e2bc642cdf42730e4e304d46f0d2997e5a67e27bdf3b2d7835e53cd0`
- `compare-12.13.png` · 334568 B · sha256 `f27e982fe5efd23a19923bce2c1dca0ec85d3d9225555051b7977579082eecfb`

### Mapping frames → preuves

| Frame | Node | Capture Figma | Capture Studio AFTER | Comparatif | Verdict local |
| --- | --- | --- | --- | --- | --- |
| 12.01 | 1210:233 | `12.01-1210-233.png` | `12.01-like-travail.png` | (conversation) | Structure shell+fil OK · activité Nora selon données |
| 12.02 | 1211:117 | `12.02-1211-117.png` | `12.02-contract-viewer.png` | `compare-12.02.png` | **Composition 50/50 + 2×2 + 6 volets** alignée |
| 12.03 | 1211:676 | `12.03-1211-676.png` | (D6ConfirmLaunch inchangé) | — | Composant existant préservé |
| 12.04 | 1211:277 | `12.04-1211-277.png` | `12.04-execution.png` | `compare-12.04.png` | **Liste/détail** alignée |
| 12.05 | 1211:424 | `12.05-1211-424.png` | `12.05-execution-contract.png` | — | Visionneuse dans détail exec |
| 12.06 | 1212:383 | `12.06-1212-383.png` | `12.06-or-12.07-execution-detail.png` | — | Panneau LIVE si DISPATCHED |
| 12.07 | 1212:510 | `12.07-1212-510.png` | idem + AMBIGUOUS copy | — | UNKNOWN ≠ échec |
| 12.08 | 1212:637 | `12.08-1212-637.png` | `12.08-results-with-bilan.png` | `compare-12.08.png` | **Bilans/dossier + 3 appréciations + tabs** |
| 12.09 | 1212:774 | `12.09-1212-774.png` | `12.09-reprise-nora.png` | `compare-12.09.png` | Chip + CONTEXTE JOINT |
| 12.10 | 1212:895 | `12.10-1212-895.png` | (sas hors projet) | — | Non régressé / hors données projet |
| 12.11 | 1239:613 | `12.11-1239-613.png` | `results-tab-livrables.png` | `compare-12.11.png` | Tables inventaire/tests |
| 12.12 | 1239:680 | `12.12-1239-680.png` | `results-tab-git.png` | `compare-12.12.png` | Grille thématique git/pièces |
| 12.13 | 1245:757 | `12.13-1245-757.png` | `results-tab-ecarts.png` | `compare-12.13.png` | Cartes écarts / état honnête |
| 12.14 | 1250:815 | `12.14-1250-815.png` | instruction expand in CV | — | Texte intégral accessible |

**Séparation Exécution / Résultats :** `execution-bilan-stacked.txt` = `PASS: no bilan under execution`

---

## 6. Mesures F2 (rectangles runtime)

```json
{
  "build": "aXcIQCDMIigpelfT-Jvr5",
  "project": "proj_c08249f9-9348-49fb-b33b-016c6430aec5",
  "rects": {
    "viewport": {
      "w": 1680,
      "h": 970
    },
    "shellLogo": null,
    "execSplit": {
      "x": 284,
      "y": 212,
      "w": 1357,
      "h": 940
    },
    "contractViewer": {
      "x": 760,
      "y": 233,
      "w": 860,
      "h": 898
    },
    "engagements": {
      "x": 781,
      "y": 384,
      "w": 818,
      "h": 238
    },
    "resultsSplit": {
      "x": 284,
      "y": 212,
      "w": 1357,
      "h": 1196
    },
    "bilansList": {
      "x": 284,
      "y": 212,
      "w": 437,
      "h": 507
    },
    "dossier": {
      "x": 739,
      "y": 212,
      "w": 902,
      "h": 1196
    },
    "bilanTabs": {
      "x": 760,
      "y": 382,
      "w": 860,
      "h": 24
    }
  }
}
```

**Lecture F2 :**

- Viewport contractuel 1680×970 respecté pour captures.
- Split résultats ~437 / 902 px (proche Figma list/detail).
- Engagements w≈818 dans viewer.
- **Écarts hors tolérance 2 px** vs géométrie Figma native non tous fermés (hauteurs de split > viewport → scroll panneau ; icônes rail ; densités texte métier ≠ maquette Horizon).
- Verdict mesure : **PARTIAL** — composition structurelle OK, géométrie fine à arbitrer.

---

## 7. Interactions vérifiées (BROWSER produit)

- Auto-session DEV → portfolio → projet
- Travail : ouverture ContractViewer 50/50
- Exécution : sélection contrat / tentative · Consulter le contrat · Reprendre avec Nora · **pas** de bilan empilé
- Résultats : sélection COMPLETED · onglets SYNTHÈSE / LIVRABLES ET TESTS / GIT & PIÈCES / ÉCARTS · permanence liste gauche
- 12.09 : chip dossier retirable + panneau CONTEXTE JOINT
- Continuity unit : **7/7 PASS**
- `git diff --check` : bruits whitespace historiques hors scope (pack précédent) — pas de nouveau conflit bloquant sur composants touchés pour cette livraison

---

## 8. Build final & accès DEV

| Champ | Valeur |
| --- | --- |
| BUILD_ID | `aXcIQCDMIigpelfT-Jvr5` |
| contentDigest | `84f42bb7f8eb8285696f6d7495cd7e255e764fb0551bdd18b6298170911f2cb7` |
| URL | http://127.0.0.1:3100 |
| Mode | qualify LIVE (fournisseurs autorisés préservés) |
| HTTP /login | 200 |
| Session | Pilote DEV auto-session |
| Projet preuve | `proj_c08249f9-9348-49fb-b33b-016c6430aec5` |

Studio laissé disponible pour inspection manuelle Morris. **UAT non déclarée réussie à sa place.**

---

## 9. Réserves & STOP

### Réserves UX (explicites — non masquées)

1. F2 δ≤2 CSS px **non démontré sur tous les rectangles stables** vs Figma natif.
2. Pictogrammes rail (« Documents Nora », « Sources Git ») vs libellés Figma — proximité, pas identité vectorielle stricte.
3. Contenu métier (IDs techniques, markdown rapport) encore plus densé que la maquette Horizon pédagogique.
4. Bouton Exécuter / instruction parfois sous le fold selon hauteur contenu.
5. Capture « BEFORE » produit strict pré-rewrite non rejouable (réécriture mid-stream) — référence antérieure = inspection Morris + handoff `c9e6803a` + harness.

### Non-réserves / acquis préservés

- Cognition Nora / fingerprint / D6 / dispatch / superviseur / restitution / fencing
- Chip continuité R2 (pas de poison READY)
- Pas de second shell / moteur parallèle
- Pas de GO RECETTE / pas ML5 CLOSED / pas ADOPTED

---

## 10. Gate §9.1 Critical

| Dimension | Verdict |
| --- | --- |
| Conformité UX page 12 | **FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED** (F2 fin / assets) · composition structurelle **alignée** |
| Comportement fonctionnel préservé | **OUI** (unit continuity + séparation surfaces) |
| Disponibilité DEV | **OUI** (`aXcIQCDMIigpelfT-Jvr5` sur :3100) |
| Réserves ML5 historiques | inchangées (hors scope) |

### Verdict global

**READY FOR REVIEW**

Niveau QA : Critical  
Gate suivant : inspection visuelle Morris puis qualification utilisateur accompagnée en DEV.

Aucun ML5 CLOSED · Aucun ADOPTED · Aucun GO RECETTE · Aucune promotion.

---

## 11. Contrôle anti-stub

- Pack réécrit (pas de concaténation des handoffs antérieurs).
- Captures PNG présentes localement (chemins + SHA ci-dessus) — pas hashes seuls.
- Diffs composants de présentation inclus (extraits).
- Harness `/dev/ml5-page12-visual` **non** utilisé comme preuve produit de ce cycle.
- Exception push : L3 mono-fichier `sfia/review-handoff` uniquement.

---

## 12. Instruction ChatGPT

Relire ce handoff **distant** après publication, vérifier les chemins d’images sous le worktree produit, puis rendre un verdict sur la fidélité page 12 et la disponibilité DEV.

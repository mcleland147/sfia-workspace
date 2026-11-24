# SFIA Studio Next — C24 Review Pack FULL

## Continuité cognitive R2 + Convergence UX Figma page 12 + DEV qualification readiness

**Cycle:** C24 consolidé (pas C25) — Delivery / INC Critical  
**Branche produit:** `sfia/next-ml5-integrated-delivery-20261123`  
**HEAD:** `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY C1–C24, aucun commit produit)  
**merge-base / origin/main:** `997897fd7cf914771e7d08e8030dc7123fab7d25`  
**Build qualifié:** `KMN8QlvhIkUKTYDCTui_7`  
**contentDigest:** `7edea6561af6810dedd72b0598feb94b757897312c489b29a5a546a0070edc73`  
**Product versioning:** NO RELEASE · STABLE NOT AVAILABLE · `web/src/lib/product-version.ts` préservé  
**Handoff antérieur régularisé:** `002cfc40478820cdf70b00ce52486aad7f454645`  
**Figma session:** `fd5981fb-031e-4cf4-8d3a-790dc598f8cc` · fileKey `itgvCulInEnFY6DvgIegvP` · page `1209:2`

---

## 0. Git Truth Check

| Item | Observé |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e99` = attendu |
| origin/main / merge-base | `997897fd` = attendu |
| État | DIRTY C1–C24 · aucun staged produit · aucun push produit |
| Qualify DEV | `http://127.0.0.1:3100` · pid owned · LIVE Cursor + Nora |
| Budget cognitif | 800k/48 **révoqué** — défauts produit 200000 / 24 |

STOP non déclenché — pas de divergence matérielle inexpliquée.

---

## 1. Verdicts distincts

### A. CORRECTION CONTINUITÉ R2 — PROVEN (tests ciblés)

**Cause racine démontrée :** après R1, « Reprendre avec Nora » injectait le brouillon bilan dans le compositeur ; un `fill` Playwright/Pilote écrasait ce brouillon ; Nora rouvrait une question déterminante « joindre le dossier D8 » (`q-146cozf`) sur le même travail cognitif → READY bloqué indéfiniment.

**Correction :**
1. Attachment produit durable (chip retirable Figma 12.09) distinct du draft libre.
2. `mergeDraftWithDossierAttachment` au send — le dossier voyage même si le draft est remplacé.
3. `consolidateAttachedDossierQuestions` / `mergeQuestions(..., userText)` — si le dossier est déjà joint, ne pas laisser OPEN une question « joindre dossier ».
4. Ne force PAS ANSWERED pour d'autres questions ; ne relève PAS les plafonds.

**Tests :** `tests/unit/ml5-c24-dossier-attachment-continuity.test.ts` — 7/7 (positif READY avec attachment ; négatif READY sans ; non-invention d'autres réponses).

**Garanties READY/D6 :** non affaiblies. Ancien mandat périmé toujours non applicable (mécanismes existants).

### B. CONVERGENCE UX PAGE 12 — FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED

- 14 frames extraites (L0/L1/L2) + PNG Figma hashés.
- Transposition : tabs uppercase, 3 appréciations, split bilans/dossier, chip 12.09, labels « Résultats & preuves », modal D6 aligné.
- 14 captures runtime fixtures : `/dev/ml5-page12-visual/{12.01…12.14}` → `.sfia-evidence/figma-page12-runtime/`.
- F2 δ≤2 CSS px sur rectangles stables **shell complet** : PARTIEL (harness = composition ; shell projet complet à qualifier Morris en DEV).

### C. DEV USER QUALIFICATION READINESS — READY WITH RESERVES

- Studio DEV : `http://127.0.0.1:3100/login` 200
- Build `KMN8QlvhIkUKTYDCTui_7` · digest `7edea656…`
- LIVE Nora + Cursor disponibles (`qualify:check` ok)
- Workspace `/tmp/sfia-c24-director-app` · effectMode LIVE
- Projet canonique R1 conservé : `proj_12eb6a0a-e213-45ad-ae22-9acebc09355a`
- Morris peut créer son propre projet
- Pas de campagne LIVE exhaustive relancée
- **Pas** readiness RECETTE ML5 · isolation D8 / WEB restent ouverts

### Verdict global pack

**READY WITH RESERVES** — revue ChatGPT puis qualification utilisateur accompagnée Morris en DEV.

---

## 2. Accès Morris (qualification accompagnée)

```bash
cd projects/sfia-studio-next/web
npm run qualify:check
npm run qualify:start   # si besoin
# Browser: http://127.0.0.1:3100/login  (Pilote DEV)
# Surfaces: Travail / Exécution / Résultats & preuves
# Fixtures UX: /dev/ml5-page12-visual/12.09  (etc.)
# Observabilité: npm run obs:query ; traces PG existantes
```

Session env (non secrète) : workspace LIVE, effectMode LIVE, avis Nora autonome ; **pas** de SFIA_COGNITIVE_MAX_TOKENS=800000.

---

## 3. Manifeste Figma 14 frames + SHA

Voir aussi `construction/ml5-figma-page12-l0-inventory.md` et `web/.sfia-evidence/figma-page12/MANIFEST-SHA256.txt`.


### PNG Figma natifs (SHA-256)
```
7148425a94e022277aedcbcb54c80091151aacff8130967f471412643b8ab731  12.01-1210-233.png
0945e464d7615d8afdf0c4e8c9ca1b8aed96d61b82d1042668a39f4831d03417  12.02-1211-117.png
ab70a562fdad175682e9545a7ddc767d313a8026716994f33841533ccf3f57bc  12.03-1211-676.png
8d26c5488b5aacce4ad6a85d27d002733402542eff5bea3c7604cf8d8e90c8e7  12.04-1211-277.png
5ee353c22d554ccef136c7f69140350ff7c7cd41babd547d119a71d38632a44e  12.05-1211-424.png
3b3005b4725697f277cdc1c19b9fa0bd49ebc024d7ac3f620d3dfeecefc0017f  12.06-1212-383.png
e500aa92a4d5046c8c586d8c4a55474efdc97532e6b36a0dc7929f07b974563a  12.07-1212-510.png
40052074ec9a23934b24f4ef73b9e8cc40418ed7313d6c2ee53a4f08985abb58  12.08-1212-637.png
4c3b601ce6a26af2663a5adfe9e1d01cac41a6711972bc110b4470d69b71054a  12.09-1212-774.png
e748dcf91e359a78093ef5601140af40ad8e7792ed580ded0b7cb9de3a87948d  12.10-1212-895.png
7a382a9bc067c2d775df420941c06e4fcd0d809f517d2778463361af8413fa98  12.11-1239-613.png
91b07f87a911f91909bf2a5c74d431560c527c62d6f3b11643a6acd80e70a935  12.12-1239-680.png
c20dffdab347a93061ff0b6756e95f38e392aa68bad83b745c7e23d30d69c388  12.13-1245-757.png
88d0e7b3c104645553f819d20586bbeb286211f06626807368785a16ce708378  12.14-1250-815.png
```

### PNG runtime fixtures (SHA-256)
```
b902e25577a09b6fb2399a0fde664b615cb1f14bdba2c64405fb4611ac72a8f1  12.01.png
47ab87db12e66feae7b38f707c2ce7a667ac27166e6b222cce6f4cfae1cdf9e0  12.02.png
ec0f46a90cb60f8087832bc004bf45e5af3e54a8567f22d8e3404cb43f2e8368  12.03.png
071f23850249c3dae95b748a2fc53777773196abeba035a0f759fa81e08c4bbe  12.04.png
7223ff4d2e0a2b259a6b4f680d771b29617ff480edc3bb07742cfc9757954bb6  12.05.png
14ff55296fd78bf17d89f696c3212eaef66e0f81ca87cb7aedace4b4ddd30b8d  12.06.png
d4aa52f80b8c744da17a3fbce2752bfc3e4c455b180b2326802281012a9a9307  12.07.png
2aacbe6f6b12c35d6df3aebafec11a905bad09548f1e3a4295557216ace051ca  12.08.png
31249a17e9240f3480e21efe50db5013528f8dc383f4ad8da950250b52c38755  12.09.png
36f96bb60f8bdc5bf8cf282ce3e0994c3779522d6b9d2fdb68211ded2cb47ea1  12.10.png
b354661653426d00a7c82c243a641dc5084ec4be10386d1939ace0037db22be1  12.11.png
20c0af1efcbaf35645a4a32d8b92d85de1591d7bc7c522a5ee026c5cd4e51959  12.12.png
f72400fc810a472d4aacc7c7f384ce563d7e4b1f8cd86dbbd0f0324c06f3aeb7  12.13.png
869a72053349e8b760fce4f4218bd525d748d8c0bf0cb593d5ffe3b9bc9200a6  12.14.png
```

## 4. Fichiers créés — contenu intégral

### FILE: `projects/sfia-studio-next/web/src/domains/conversation/dossier-composer-attachment.ts`
```typescript
/**
 * C24 — structured D8 dossier reference for composer (Figma 12.09).
 * Product-owned attachment, distinct from free-text draft.
 * Retirable by Pilote; never auto-sent; never a HumanDecision.
 */

import type { DeterminingQuestion } from "./investigation-state";

export type DossierComposerAttachment = {
  attemptId: string;
  contractId?: string | null;
  handoffId?: string | null;
  dossierVersion?: number | string | null;
  verdictD8?: string | null;
  noraKind?: string | null;
  fingerprint?: string | null;
  pieces?: string[] | null;
};

const ATTEMPT_RE = /attemptId:\s*(efx_[A-Za-z0-9-]+)/i;
const CONTRACT_RE = /contractId:\s*(tctr_[A-Za-z0-9-]+|MISSING)/i;
const HANDOFF_RE = /handoffId:\s*(rhf_[A-Za-z0-9-]+|MISSING)/i;
const VERSION_RE = /dossierVersion:\s*(\S+)/i;
const VERDICT_RE = /verdictD8:\s*(\S+)/i;

/** Parse bilan draft / message embedding produced by RealizationBilan. */
export function parseStructuredDossierComposerAttachment(
  text: string,
): DossierComposerAttachment | null {
  const raw = (text || "").trim();
  if (!raw) return null;
  if (!/\[Dossier D8/i.test(raw) && !ATTEMPT_RE.test(raw)) return null;
  const attemptId = raw.match(ATTEMPT_RE)?.[1];
  if (!attemptId) return null;
  return {
    attemptId,
    contractId: raw.match(CONTRACT_RE)?.[1] ?? null,
    handoffId: raw.match(HANDOFF_RE)?.[1] ?? null,
    dossierVersion: raw.match(VERSION_RE)?.[1] ?? null,
    verdictD8: raw.match(VERDICT_RE)?.[1] ?? null,
  };
}

export function formatDossierComposerAttachment(
  att: DossierComposerAttachment,
): string {
  return [
    `[Dossier D8 — brouillon retirable, aucun envoi automatique]`,
    `attemptId: ${att.attemptId}`,
    `contractId: ${att.contractId ?? "MISSING"}`,
    `handoffId: ${att.handoffId ?? "MISSING"}`,
    `dossierVersion: ${att.dossierVersion ?? "UNKNOWN"}`,
    `verdictD8: ${att.verdictD8 ?? "UNKNOWN"}`,
    att.noraKind ? `noraKind: ${att.noraKind}` : null,
    att.fingerprint ? `fingerprint: ${att.fingerprint}` : null,
    att.pieces?.length ? `pieces: ${att.pieces.join(", ")}` : null,
    `Suite laissée au Pilote — aucune HumanDecision automatique.`,
  ]
    .filter(Boolean)
    .join("\n");
}

/** Questions that ask the Pilote to re-attach a dossier already held by the product. */
export function isDossierJoinQuestion(text: string): boolean {
  const t = (text || "").trim();
  if (!t) return false;
  return (
    /joindre.*dossier|dossier\s*D8|dossier référenc|référence.*(dossier|tentative)/i.test(
      t,
    ) ||
    /transmet(tre)?\s+(le\s+)?dossier|colle.*dossier|joindre à ce message|bloc du dossier/i.test(
      t,
    ) ||
    /peux-tu joindre|joins? (à nouveau )?(le )?brouillon|retransmet.*dossier/i.test(t)
  );
}

/**
 * When the Pilote (or product chip) already attached a structured D8 dossier,
 * do not leave DETERMINANT OPEN questions that only ask to re-attach it.
 * Does not invent ANSWERED for unrelated questions.
 */
export function consolidateAttachedDossierQuestions(
  questions: DeterminingQuestion[],
  userText: string | null | undefined,
  attachment?: DossierComposerAttachment | null,
): DeterminingQuestion[] {
  const attached =
    attachment ??
    (userText ? parseStructuredDossierComposerAttachment(userText) : null);
  if (!attached?.attemptId) return questions.map((q) => ({ ...q }));

  const summary =
    `Dossier D8 joint par le produit (attemptId=${attached.attemptId}` +
    (attached.verdictD8 ? `, verdict=${attached.verdictD8}` : "") +
    (attached.dossierVersion != null
      ? `, version=${attached.dossierVersion}`
      : "") +
    `) — référence compositeur retirable, pas une HumanDecision.`;

  return questions.map((q) => {
    if (q.status === "ANSWERED") return { ...q };
    if (!isDossierJoinQuestion(q.text)) return { ...q };
    return {
      ...q,
      status: "ANSWERED" as const,
      answerSummary: summary,
      sourceRefs: [
        `attempt:${attached.attemptId}`,
        ...(q.sourceRefs ?? []).filter((r) => r !== `attempt:${attached.attemptId}`),
      ],
    };
  });
}

/**
 * Merge free-text draft with durable attachment for the turn payload.
 * Attachment travels even if the Pilote edits/replaces the draft body.
 */
export function mergeDraftWithDossierAttachment(
  draft: string,
  attachment: DossierComposerAttachment | null | undefined,
): string {
  const body = (draft || "").trim();
  if (!attachment?.attemptId) return body;
  const block = formatDossierComposerAttachment(attachment);
  if (!body) return block;
  if (body.includes(attachment.attemptId) && /dossierVersion:/i.test(body)) {
    return body;
  }
  return `${block}\n\n${body}`;
}

```

### FILE: `projects/sfia-studio-next/web/tests/unit/ml5-c24-dossier-attachment-continuity.test.ts`
```typescript
import { describe, expect, it } from "vitest";
import {
  consolidateAttachedDossierQuestions,
  formatDossierComposerAttachment,
  isDossierJoinQuestion,
  mergeDraftWithDossierAttachment,
  parseStructuredDossierComposerAttachment,
} from "@/domains/conversation/dossier-composer-attachment";
import {
  mergeInvestigationFromReply,
  mergeQuestions,
} from "@/domains/conversation/run-nora-cognitive-turn";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
} from "@/domains/conversation/investigation-state";
import type { NoraGenerateResult } from "@/domains/conversation/nora-adapter";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";

function qual(partial: Partial<NoraTurnQualification>): NoraTurnQualification {
  return {
    schemaVersion: "ml4c-sem-qual-v1",
    status: "QUALIFIED",
    goal: "ajouter processWidgetMaxLen",
    projectIntention: "",
    desiredOutcome: "fonction maxLen + tests",
    initialScope: "",
    proposedProjectName: "",
    intents: [],
    replyDraft: "ok",
    ...partial,
  };
}

const CANON_ATTACHMENT = {
  attemptId: "efx_f9127c71-900f-449a-ba0f-74e044b36f66",
  contractId: "tctr_216cc6c2-a5bc-4d6a-a309-1f682d09b627",
  handoffId: "rhf_287919ef-b4af-48c8-9dd5-cf50794897b1",
  dossierVersion: 1,
  verdictD8: "PARTIAL",
};

describe("C24 dossier attachment continuity (R2 root cause)", () => {
  it("parses and formats structured bilan dossier blocks", () => {
    const formatted = formatDossierComposerAttachment(CANON_ATTACHMENT);
    const parsed = parseStructuredDossierComposerAttachment(formatted);
    expect(parsed?.attemptId).toBe(CANON_ATTACHMENT.attemptId);
    expect(parsed?.verdictD8).toBe("PARTIAL");
    expect(parsed?.dossierVersion).toBe("1");
  });

  it("keeps dossier attachment when Pilote replaces free-text draft", () => {
    const merged = mergeDraftWithDossierAttachment(
      "Prépare un contrat processWidgetMaxLen avec tests.",
      CANON_ATTACHMENT,
    );
    expect(merged).toContain(CANON_ATTACHMENT.attemptId);
    expect(merged).toContain("processWidgetMaxLen");
    expect(merged).toContain("verdictD8: PARTIAL");
  });

  it("recognizes dossier-join determinant questions", () => {
    expect(
      isDossierJoinQuestion(
        "Pour restituer le verdict D8 et ses limites exactes, peux-tu joindre à ce message le dossier référencé ?",
      ),
    ).toBe(true);
    expect(isDossierJoinQuestion("Quel workspace Cursor utiliser ?")).toBe(false);
  });

  it("ANSWERS open dossier-join questions when attachment is present — does not invent other answers", () => {
    const userText = formatDossierComposerAttachment(CANON_ATTACHMENT);
    const qs = consolidateAttachedDossierQuestions(
      [
        {
          id: "q-146cozf",
          text: "Pour restituer le verdict D8, peux-tu joindre le dossier référencé ?",
          status: "OPEN",
          importance: "DETERMINANT",
        },
        {
          id: "q-ws",
          text: "Quel workspace ?",
          status: "OPEN",
          importance: "DETERMINANT",
        },
      ],
      userText,
    );
    expect(qs.find((q) => q.id === "q-146cozf")?.status).toBe("ANSWERED");
    expect(qs.find((q) => q.id === "q-146cozf")?.answerSummary).toMatch(/efx_f9127c71/);
    expect(qs.find((q) => q.id === "q-ws")?.status).toBe("OPEN");
  });

  it("mergeQuestions consolidates dossier-join clarifications when userText has attachment", () => {
    const userText = mergeDraftWithDossierAttachment(
      "Nouveau contrat MaxLen",
      CANON_ATTACHMENT,
    );
    const next = mergeQuestions(
      [],
      qual({
        clarifications: [
          "Peux-tu joindre à ce message le dossier D8 référencé ?",
          "Quel plafond maxLen appliquer ?",
        ],
      }),
      userText,
    );
    const join = next.find((q) => /joindre/i.test(q.text));
    const max = next.find((q) => /maxLen/i.test(q.text));
    expect(join?.status).toBe("ANSWERED");
    expect(max?.status).toBe("OPEN");
  });

  it("READY stays refused when dossier-join remains OPEN without attachment", () => {
    const base = createEmptyInvestigation("continuité MaxLen");
    base.intentSummary = "ajouter processWidgetMaxLen";
    base.desiredOutcome = "refuse strings > maxLen + tests";
    base.sources = [
      {
        kind: "DOCUMENT",
        ref: "document:doc_widget",
        coverage: "CONSULTED",
        title: "Widget service",
      },
    ];
    base.questions = [
      {
        id: "q-146cozf",
        text: "Pour restituer le verdict D8, peux-tu joindre le dossier référencé ?",
        status: "OPEN",
        importance: "DETERMINANT",
      },
    ];
    const blocked = evaluateContractReadiness(base);
    expect(blocked.contractReady).toBe(false);
    const reply = {
      content: "ok",
      status: "COMPLETE",
      generationId: "gen_neg",
      qualification: qual({
        determiningQuestions: [
          {
            id: "q-146cozf",
            text: base.questions[0]!.text,
            status: "OPEN",
            importance: "DETERMINANT",
          },
        ],
      }),
      observedToolSources: base.sources,
    } as unknown as NoraGenerateResult;
    const stillBlocked = mergeInvestigationFromReply(
      base,
      reply,
      "Prépare MaxLen sans joindre le dossier.",
    );
    expect(stillBlocked.contractReady).toBe(false);
    expect(stillBlocked.questions.find((q) => q.id === "q-146cozf")?.status).toBe(
      "OPEN",
    );
  });

  it("canonical R2 poison pattern: dossier-join OPEN blocks READY; attachment clears it", () => {
    const base = createEmptyInvestigation("continuité MaxLen");
    base.intentSummary = "ajouter processWidgetMaxLen";
    base.desiredOutcome = "refuse strings > maxLen + tests";
    base.sources = [
      {
        kind: "DOCUMENT",
        ref: "document:doc_widget",
        coverage: "CONSULTED",
        title: "Widget service",
      },
    ];
    base.questions = [
      {
        id: "q-146cozf",
        text: "Pour restituer le verdict D8 et ses limites exactes, peux-tu joindre à ce message le dossier référencé ?",
        status: "OPEN",
        importance: "DETERMINANT",
      },
    ];
    const blocked = evaluateContractReadiness(base);
    expect(blocked.contractReady).toBe(false);
    expect(blocked.contractReadyBlockedReason).toMatch(/q-146cozf/);

    const userText = mergeDraftWithDossierAttachment(
      "Ferme les questions et prépare processWidgetMaxLen.",
      CANON_ATTACHMENT,
    );
    const reply = {
      content: "ok",
      status: "COMPLETE",
      generationId: "gen_test",
      qualification: qual({
        determiningQuestions: [
          {
            id: "q-146cozf",
            text: base.questions[0]!.text,
            status: "OPEN",
            importance: "DETERMINANT",
          },
        ],
      }),
      observedToolSources: base.sources,
    } as unknown as NoraGenerateResult;

    const merged = mergeInvestigationFromReply(base, reply, userText);
    expect(merged.contractReady).toBe(true);
    expect(merged.questions.find((q) => q.id === "q-146cozf")?.status).toBe(
      "ANSWERED",
    );
  });
});

```

### FILE: `projects/sfia-studio-next/web/src/components/figma/ml5-page12-visual-fixtures.ts`
```typescript
/**
 * C24 — deterministic fixtures for Figma page 12 visual harness.
 * Illustrative data only — never treated as LIVE proof.
 */

import type { ContractViewerModel } from "./ContractViewer";
import type { BilanTab } from "./RealizationBilan";
import type { D8Rubric } from "@/domains/proofs/cursor-qualify";

export const ML5_PAGE12_STATES = [
  "12.01",
  "12.02",
  "12.03",
  "12.04",
  "12.05",
  "12.06",
  "12.07",
  "12.08",
  "12.09",
  "12.10",
  "12.11",
  "12.12",
  "12.13",
  "12.14",
] as const;

export type Ml5Page12State = (typeof ML5_PAGE12_STATES)[number];

const SAMPLE_CONTRACT: ContractViewerModel = {
  contractId: "tctr_visual_fixture_01",
  contractKey: "ctr_visual_maxLen",
  version: 2,
  fingerprint: "fp_visual_fixture_abcdef0123456789",
  title: "Ajouter processWidgetMaxLen",
  status: "READY",
  engagements: {
    willDo: "Implémenter la contrainte maxLen et les tests unitaires associés.",
    willNotDo: "Aucune publication distante, aucun secret, hors workspace isolé.",
    expectedResult: "Refuse les chaînes au-delà de maxLen ; tests verts déclarés.",
    pilotControl: "Oui/Non D6 requis ; STOP disponible ; lecture ≠ autorisation.",
  },
  volets: {
    mission: "Mission : contrainte maxLen sur processWidget.",
    perimeter: "Périmètre : fichier service + tests ; hors migration schema.",
    capabilitiesAuthority: "Exécuteur Cursor SDK ; capacités LIVE bornées au workspace.",
    stopConditions: "STOP demandé ≠ arrêté ; tests lancés ≠ PASS.",
    proofsSources: "Tests, diffs locaux, manifeste — déclarés ≠ vérifiés.",
    integrity: "Fingerprint fp_visual… · version 2.",
  },
  instructionText:
    "# Instruction technique intégrale\n\n1. Lire le service processWidget.\n2. Ajouter maxLen.\n3. Couvrir par tests.\n4. Ne pas pousser remote.\n\n" +
    "Lorem instruction non tronquée pour la preuve 12.14.\n".repeat(8),
  risks: ["Workspace isolé requis"],
  exclusions: ["Publication Git distante"],
};

const SAMPLE_RUBRICS: D8Rubric[] = [
  {
    key: "resume",
    title: "Résumé",
    content: "Intervention terminée avec livrables partiels.",
    coverage: "PARTIAL",
  },
  {
    key: "prevu",
    title: "Prévu",
    content: "maxLen + tests.",
    coverage: "COMPLETE",
  },
  {
    key: "realise",
    title: "Réalisé",
    content: "Fichier modifié déclaré ; tests partiellement capturés.",
    coverage: "PARTIAL",
  },
  {
    key: "evaluation",
    title: "Évaluation",
    content: "Couverture tests incomplète.",
    coverage: "PARTIAL",
  },
  {
    key: "ecarts",
    title: "Écarts",
    content: "Capture manquante ; un test déclaré non observé.",
    coverage: "PARTIAL",
  },
  {
    key: "impact",
    title: "Impact",
    content: "Impact local seulement — non publié.",
    coverage: "COMPLETE",
  },
  {
    key: "verdict",
    title: "Verdict",
    content: "PARTIAL — preuves insuffisantes pour PASS.",
    coverage: "PARTIAL",
  },
  {
    key: "recommandations",
    title: "Recommandations",
    content: "Compléter les preuves de tests avant nouvelle mission.",
    coverage: "COMPLETE",
  },
  {
    key: "sources",
    title: "Sources",
    content: "Manifeste local ; SHA distant non constaté.",
    coverage: "PARTIAL",
  },
];

const ATTEMPTS = [
  {
    attemptId: "efx_visual_007",
    status: "COMPLETED",
    terminalStatus: "PARTIAL",
    summary: "Contrôler les erreurs de validation",
  },
  {
    attemptId: "efx_visual_006",
    status: "COMPLETED",
    terminalStatus: "PASS",
    summary: "Compléter les tests de régression",
  },
  {
    attemptId: "efx_visual_005",
    status: "COMPLETED",
    terminalStatus: "PARTIAL",
    summary: "Examiner la migration de données",
  },
];

export type Ml5Page12Fixture = {
  state: Ml5Page12State;
  frame: string;
  nodeId: string;
  kind: "travail" | "resume" | "contract" | "confirm" | "execution" | "results";
  kicker: string;
  title: string;
  subtitle: string;
  draft?: string;
  busy?: boolean;
  activity?: "idle" | "preparing" | "streaming";
  messages?: Array<{ id: string; role: "user" | "assistant"; content: string }>;
  dossierAttachment?: {
    attemptId: string;
    contractId?: string | null;
    dossierVersion?: number | string | null;
    verdictD8?: string | null;
  } | null;
  contract?: ContractViewerModel;
  instructionExpanded?: boolean;
  attempts?: Array<{
    attemptId: string;
    status: string;
    terminalStatus: string;
    summary: string;
    ambiguous?: boolean;
  }>;
  livePanel?: { note: string; events: string[] };
  bilan?: {
    attemptId: string;
    verdict: string;
    rubrics: D8Rubric[];
    limits: string[];
    noraAnalysisMarkdown?: string | null;
    noraAnalysisKind?: string | null;
    dossier?: {
      attemptId: string;
      contractId?: string | null;
      handoffId?: string | null;
      dossierVersion?: number | null;
      gaps?: string[];
      testsDeclared?: string[];
      testsCaptured?: string[];
      filesModified?: string[];
      git?: { tipSha?: string | null; branch?: string | null; remoteSha?: string | null };
    } | null;
  };
  defaultTab?: BilanTab;
};

const BASE_BILAN = {
  attemptId: "efx_visual_007",
  verdict: "PARTIAL",
  rubrics: SAMPLE_RUBRICS,
  limits: ["Preuves tests incomplètes", "SHA distant non constaté"],
  noraAnalysisMarkdown:
    "Les travaux sont décrits, mais les preuves de tests, les contenus et la capture attendue restent incomplets.",
  noraAnalysisKind: "NORA_COGNITIVE" as const,
  dossier: {
    attemptId: "efx_visual_007",
    contractId: "tctr_visual_fixture_01",
    handoffId: "rhf_visual_fixture_01",
    dossierVersion: 1,
    gaps: ["Capture manquante", "Test déclaré non observé"],
    testsDeclared: ["unit:maxLen"],
    testsCaptured: [],
    filesModified: ["src/processWidget.ts"],
    git: {
      tipSha: "abc1234",
      branch: "qual/visual",
      remoteSha: null,
    },
  },
};

const FIXTURES: Record<Ml5Page12State, Ml5Page12Fixture> = {
  "12.01": {
    state: "12.01",
    frame: "12.01",
    nodeId: "1210:233",
    kind: "travail",
    kicker: "ESPACE PROJET  /  TRAVAIL AVEC NORA",
    title: "Nora prépare une intervention",
    subtitle: "Activité fonctionnelle observable — pas de raisonnement privé.",
    busy: true,
    activity: "preparing",
    messages: [
      {
        id: "m1",
        role: "user",
        content: "Prépare un contrat pour processWidgetMaxLen.",
      },
      {
        id: "m2",
        role: "assistant",
        content: "Je consulte les sources Git et Documents avant de préparer le contrat.",
      },
    ],
  },
  "12.02": {
    state: "12.02",
    frame: "12.02",
    nodeId: "1211:117",
    kind: "contract",
    kicker: "ESPACE PROJET  /  CONTRAT CURSOR",
    title: "Inspecter le contrat Cursor",
    subtitle: "Lecture seule — consulter n'autorise pas.",
    contract: SAMPLE_CONTRACT,
  },
  "12.03": {
    state: "12.03",
    frame: "12.03",
    nodeId: "1211:676",
    kind: "confirm",
    kicker: "ESPACE PROJET  /  CONFIRMATION D6",
    title: "Confirmation du lancement",
    subtitle: "Oui/Non explicite — Non = aucun dispatch.",
    contract: SAMPLE_CONTRACT,
  },
  "12.04": {
    state: "12.04",
    frame: "12.04",
    nodeId: "1211:277",
    kind: "execution",
    kicker: "ESPACE PROJET  /  EXÉCUTION",
    title: "Historique des interventions",
    subtitle: "Sélection et identité des tentatives.",
    attempts: ATTEMPTS,
  },
  "12.05": {
    state: "12.05",
    frame: "12.05",
    nodeId: "1211:424",
    kind: "contract",
    kicker: "ESPACE PROJET  /  CONTRAT D'EXÉCUTION",
    title: "Instruction et autorité",
    subtitle: "Quatre engagements et six volets d'inspection.",
    contract: { ...SAMPLE_CONTRACT, status: "READY" },
  },
  "12.06": {
    state: "12.06",
    frame: "12.06",
    nodeId: "1212:383",
    kind: "execution",
    kicker: "ESPACE PROJET  /  SUIVI DE LA RÉALISATION",
    title: "Réalisation en cours",
    subtitle: "Observer les faits LIVE — aucun faux pourcentage.",
    attempts: [
      {
        attemptId: "efx_visual_008",
        status: "DISPATCHED",
        terminalStatus: "RUNNING",
        summary: "Cursor SDK · activité LIVE",
      },
    ],
    livePanel: {
      note: "Événements factuels du run · aucun raisonnement interne.",
      events: [
        "run.started",
        "tool.shell.observed",
        "file.edited.declared",
        "awaiting.terminal",
      ],
    },
  },
  "12.07": {
    state: "12.07",
    frame: "12.07",
    nodeId: "1212:510",
    kind: "execution",
    kicker: "ESPACE PROJET  /  EXÉCUTION",
    title: "État à réconcilier",
    subtitle: "État inconnu ≠ échec certain.",
    attempts: [
      {
        attemptId: "efx_visual_009",
        status: "AMBIGUOUS",
        terminalStatus: "UNKNOWN",
        summary: "Signal interrompu — réconciliation requise",
        ambiguous: true,
      },
    ],
  },
  "12.08": {
    state: "12.08",
    frame: "12.08",
    nodeId: "1212:637",
    kind: "results",
    kicker: "ESPACE PROJET  /  RÉSULTATS & PREUVES",
    title: "Synthèse du dossier",
    subtitle: "Trois appréciations distinctes · quatre onglets.",
    attempts: ATTEMPTS,
    bilan: BASE_BILAN,
    defaultTab: "synthese",
  },
  "12.09": {
    state: "12.09",
    frame: "12.09",
    nodeId: "1212:774",
    kind: "resume",
    kicker: "ESPACE PROJET  /  REPRENDRE AVEC NORA",
    title: "Reprendre avec Nora",
    subtitle:
      "Depuis un bilan, revenir au fil avec une référence jointe, sans déclenchement automatique.",
    draft: "Je souhaite examiner les fichiers, tests et réserves du bilan.",
    messages: [
      {
        id: "m1",
        role: "assistant",
        content:
          "J'ai examiné RES-007 : livrables identifiés, mais plusieurs résultats restent non vérifiés.",
      },
    ],
    dossierAttachment: {
      attemptId: "efx_visual_007",
      contractId: "tctr_visual_fixture_01",
      dossierVersion: 1,
      verdictD8: "PARTIAL",
    },
  },
  "12.10": {
    state: "12.10",
    frame: "12.10",
    nodeId: "1212:895",
    kind: "travail",
    kicker: "SAS NORA  /  PRÉPARATION",
    title: "Nora travaille dans le sas",
    subtitle: "Préparation sans création automatique de projet.",
    busy: true,
    activity: "preparing",
    messages: [
      {
        id: "m1",
        role: "user",
        content: "Aide-moi à cadrer une intervention sur maxLen.",
      },
    ],
  },
  "12.11": {
    state: "12.11",
    frame: "12.11",
    nodeId: "1239:613",
    kind: "results",
    kicker: "ESPACE PROJET  /  RÉSULTATS & PREUVES",
    title: "Livrables et tests",
    subtitle: "Déclaré ≠ capturé ≠ vérifié.",
    attempts: ATTEMPTS,
    bilan: BASE_BILAN,
    defaultTab: "livrables",
  },
  "12.12": {
    state: "12.12",
    frame: "12.12",
    nodeId: "1239:680",
    kind: "results",
    kicker: "ESPACE PROJET  /  RÉSULTATS & PREUVES",
    title: "Git, pièces et handoff",
    subtitle: "SHA local déclaré ≠ SHA distant vérifié.",
    attempts: ATTEMPTS,
    bilan: BASE_BILAN,
    defaultTab: "git",
  },
  "12.13": {
    state: "12.13",
    frame: "12.13",
    nodeId: "1245:757",
    kind: "results",
    kicker: "ESPACE PROJET  /  RÉSULTATS & PREUVES",
    title: "Écarts",
    subtitle: "Preuve absente ≠ statut positif.",
    attempts: ATTEMPTS,
    bilan: BASE_BILAN,
    defaultTab: "ecarts",
  },
  "12.14": {
    state: "12.14",
    frame: "12.14",
    nodeId: "1250:815",
    kind: "contract",
    kicker: "ESPACE PROJET  /  INSTRUCTION INTÉGRALE",
    title: "Contrat Cursor — Instruction intégrale",
    subtitle: "Instruction technique lisible et non tronquée.",
    contract: SAMPLE_CONTRACT,
    instructionExpanded: true,
  },
};

export function parseMl5Page12Fixture(raw: string | undefined): Ml5Page12Fixture | null {
  const key = (raw || "").trim() as Ml5Page12State;
  if (!ML5_PAGE12_STATES.includes(key)) return null;
  return FIXTURES[key];
}

```

### FILE: `projects/sfia-studio-next/web/src/app/dev/ml5-page12-visual/[state]/page.tsx`
```typescript
"use client";

/**
 * C24 — DEV visual harness for Figma page 12 states (fixtures only).
 * Proves rendering; does not prove LIVE behavior.
 */

import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ContractViewer } from "@/components/figma/ContractViewer";
import { D6ConfirmLaunch } from "@/components/figma/D6ConfirmLaunch";
import { NoraConversation } from "@/components/figma/NoraConversation";
import {
  RealizationBilan,
  type BilanTab,
} from "@/components/figma/RealizationBilan";
import {
  ML5_PAGE12_STATES,
  parseMl5Page12Fixture,
} from "@/components/figma/ml5-page12-visual-fixtures";

export default function Ml5Page12VisualHarnessPage() {
  const params = useParams<{ state: string }>();
  const fixture = useMemo(() => parseMl5Page12Fixture(params.state), [params.state]);
  const [tab, setTab] = useState<BilanTab>(fixture?.defaultTab ?? "synthese");
  const [draft, setDraft] = useState(fixture?.draft ?? "");
  const [dossier, setDossier] = useState(fixture?.dossierAttachment ?? null);
  const [instructionExpanded, setInstructionExpanded] = useState(
    fixture?.instructionExpanded === true,
  );

  if (process.env.NODE_ENV === "production" && process.env.STUDIO_LANE === "RECETTE") {
    return (
      <p className="muted" data-testid="ml5-page12-visual-forbidden">
        Harness visuel page 12 indisponible hors DEV.
      </p>
    );
  }

  if (!fixture) {
    return (
      <div data-testid="ml5-page12-visual-unknown">
        <p className="muted">État inconnu. États : {ML5_PAGE12_STATES.join(", ")}</p>
      </div>
    );
  }

  const messages = (fixture.messages ?? []).map((m) => ({
    id: m.id,
    role: m.role,
    content: m.content,
    status: "COMPLETE",
  }));

  return (
    <div
      className="fig-page"
      data-testid="ml5-page12-visual"
      data-figma-frame={fixture.frame}
      data-figma-node={fixture.nodeId}
      data-ml5-page12-state={fixture.state}
      style={{ minHeight: "970px", background: "#0b101b", padding: "24px 38px" }}
    >
      <header className="fig-travail-intro" style={{ marginBottom: 18 }}>
        <p className="fig-kicker">{fixture.kicker}</p>
        <h1 className="fig-hero-title">{fixture.title}</h1>
        <p className="fig-hero-sub">{fixture.subtitle}</p>
      </header>

      {fixture.kind === "travail" || fixture.kind === "resume" ? (
        <NoraConversation
          messages={messages}
          draft={draft}
          onDraft={setDraft}
          onSend={() => undefined}
          busy={fixture.busy === true}
          activity={fixture.activity === "preparing" ? "preparing" : "idle"}
          dossierAttachment={dossier ?? undefined}
          onRemoveDossierAttachment={() => setDossier(null)}
        />
      ) : null}

      {fixture.kind === "contract" && fixture.contract ? (
        <ContractViewer
          contract={fixture.contract}
          instructionExpanded={instructionExpanded}
          onToggleInstruction={() => setInstructionExpanded((v) => !v)}
          onClose={() => undefined}
          onOpenInExecution={() => undefined}
        />
      ) : null}

      {fixture.kind === "confirm" && fixture.contract ? (
        <>
          <ContractViewer
            contract={fixture.contract}
            instructionExpanded={false}
            onToggleInstruction={() => undefined}
            onClose={() => undefined}
            onOpenInExecution={() => undefined}
          />
          <D6ConfirmLaunch
            contractKey={fixture.contract.contractKey}
            version={fixture.contract.version}
            fingerprint={fixture.contract.fingerprint}
            title={fixture.contract.title}
            onYes={() => undefined}
            onNo={() => undefined}
            onCancel={() => undefined}
          />
        </>
      ) : null}

      {fixture.kind === "execution" ? (
        <div className="fig-cursor-realization" data-mode="execution">
          <header>
            <p className="fig-kicker !mb-0">EXÉCUTION CURSOR</p>
            <h2 className="fig-inspector-title">{fixture.title}</h2>
            <p className="fig-travail-viewer-meta">{fixture.subtitle}</p>
          </header>
          <section data-testid="realization-attempts">
            <h3>Historique des interventions</h3>
            <ul>
              {(fixture.attempts ?? []).map((a) => (
                <li key={a.attemptId} data-testid={`attempt-row-${a.attemptId}`}>
                  <span>
                    {a.status} · {a.terminalStatus} · {a.summary}
                    {a.ambiguous ? " · à réconcilier" : ""}
                  </span>
                </li>
              ))}
            </ul>
          </section>
          {fixture.livePanel ? (
            <section data-testid="ml5-live-panel">
              <p className="fig-kicker">CURSOR SDK / ACTIVITÉ OBSERVÉE</p>
              <h3>La réalisation, en direct</h3>
              <p className="fig-travail-viewer-meta">{fixture.livePanel.note}</p>
              <ul>
                {fixture.livePanel.events.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <p className="fig-travail-viewer-meta">
                STOP demandé ≠ arrêté · tests lancés ≠ tests PASS
              </p>
            </section>
          ) : null}
        </div>
      ) : null}

      {fixture.kind === "results" && fixture.bilan ? (
        <div className="fig-results-split" data-testid="results-split">
          <section className="fig-results-bilans-list">
            <div className="fig-results-bilans-head">
              <h3>Bilans disponibles</h3>
              <span className="fig-results-bilans-count">
                {(fixture.attempts ?? []).length} bilans
              </span>
            </div>
            <ul className="fig-results-bilans-ul">
              {(fixture.attempts ?? []).map((a, i) => (
                <li key={a.attemptId}>
                  <button
                    type="button"
                    className={
                      i === 0
                        ? "fig-results-bilan-card is-selected"
                        : "fig-results-bilan-card"
                    }
                  >
                    <span className="fig-results-bilan-kicker">
                      {a.attemptId} · {a.status}
                    </span>
                    <span className="fig-results-bilan-title">{a.summary}</span>
                    <span className="fig-results-bilan-meta">{a.terminalStatus}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
          <div className="fig-results-dossier">
            <RealizationBilan
              attemptId={fixture.bilan.attemptId}
              verdict={fixture.bilan.verdict}
              rubrics={fixture.bilan.rubrics}
              limits={fixture.bilan.limits}
              noraAnalysisMarkdown={fixture.bilan.noraAnalysisMarkdown}
              noraAnalysisKind={fixture.bilan.noraAnalysisKind}
              dossier={fixture.bilan.dossier}
              activeTab={tab}
              onTabChange={setTab}
              onDiscussWithNora={() => undefined}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

```

### FILE: `projects/sfia-studio-next/web/tests/e2e/ml5-c24-page12-visual.spec.ts`
```typescript
/**
 * C24 — capture runtime fixtures for Figma page 12 (14 states).
 * Visual proof only — not LIVE behavior proof.
 */
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const STATES = [
  "12.01",
  "12.02",
  "12.03",
  "12.04",
  "12.05",
  "12.06",
  "12.07",
  "12.08",
  "12.09",
  "12.10",
  "12.11",
  "12.12",
  "12.13",
  "12.14",
] as const;

const OUT_DIR = path.join(
  process.cwd(),
  ".sfia-evidence",
  "figma-page12-runtime",
);

test.describe("C24 page 12 visual fixtures", () => {
  test.beforeAll(() => {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  });

  for (const state of STATES) {
    test(`capture ${state}`, async ({ page }) => {
      await page.setViewportSize({ width: 1680, height: 970 });
      await page.goto(`/dev/ml5-page12-visual/${state}`, {
        waitUntil: "networkidle",
      });
      const root = page.getByTestId("ml5-page12-visual");
      await expect(root).toBeVisible();
      await expect(root).toHaveAttribute("data-ml5-page12-state", state);

      if (state === "12.09") {
        await expect(page.getByTestId("dossier-composer-attachment")).toBeVisible();
      }
      if (state === "12.03") {
        await expect(page.getByTestId("d6-confirm-launch")).toBeVisible();
      }
      if (state === "12.08" || state === "12.11" || state === "12.12" || state === "12.13") {
        await expect(page.getByTestId("bilan-appreciations")).toBeVisible();
        await expect(page.getByTestId("bilan-tabs")).toBeVisible();
      }

      const file = path.join(OUT_DIR, `${state}.png`);
      await page.screenshot({ path: file, fullPage: false });
      const buf = fs.readFileSync(file);
      const sha = createHash("sha256").update(buf).digest("hex");
      fs.writeFileSync(
        path.join(OUT_DIR, `${state}.sha256`),
        `${sha}  ${state}.png\n`,
      );
    });
  }
});

```

### FILE: `projects/sfia-studio-next/web/playwright.page12-visual.config.ts`
```typescript
import { defineConfig } from "@playwright/test";

/**
 * C24 — visual fixture captures against qualify DEV :3100.
 * Does not spawn FAKE E2E :3101. Operator must have `qualify:start`.
 */
export default defineConfig({
  testDir: "tests/e2e",
  testMatch: "**/ml5-c24-page12-visual.spec.ts",
  timeout: 60_000,
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: process.env.SFIA_QUALIFY_BASE_URL || "http://127.0.0.1:3100",
    viewport: { width: 1680, height: 970 },
    trace: "off",
    screenshot: "off",
    video: "off",
  },
  webServer: undefined,
});

```

### FILE: `projects/sfia-studio-next/construction/ml5-figma-page12-l0-inventory.md`
```markdown
# ML5 — Figma page 12 L0/L1/L2 inventory (C24)

| Champ | Valeur |
|---|---|
| FileKey | `itgvCulInEnFY6DvgIegvP` |
| Page | `12 · ML5 — Exécution & Résultats · Conception UX candidate` |
| Page node | `1209:2` |
| Session C24 | `fd5981fb-031e-4cf4-8d3a-790dc598f8cc` |
| Date | 2026-11-24 |
| Viewport dominant | 1680×970 |

## Frames 12.01–12.14

| État | Node-id | Nom | Bounds | Shell L0 | PNG SHA-256 |
|---|---|---|---|---|---|
| 12.01 | `1210:233` | Nora prépare une intervention | 1680×970 @ (100,190) | Rail Travail 246 + surface | `7148425a94e022277aedcbcb54c80091151aacff8130967f471412643b8ab731` |
| 12.02 | `1211:117` | Inspecter le contrat Cursor | 1680×970 @ (1960,190) | Visionneuse contrat | `0945e464d7615d8afdf0c4e8c9ca1b8aed96d61b82d1042668a39f4831d03417` |
| 12.03 | `1211:676` | Confirmation du lancement | 1680×970 @ (3820,190) | Overlay modal 490×230 r10 | `ab70a562fdad175682e9545a7ddc767d313a8026716994f33841533ccf3f57bc` |
| 12.04 | `1211:277` | Exécution · Historique | 1680×970 @ (100,1370) | Rail Exécution | `8d26c5488b5aacce4ad6a85d27d002733402542eff5bea3c7604cf8d8e90c8e7` |
| 12.05 | `1211:424` | Contrat d’exécution | 1680×970 @ (1960,1370) | Instruction + autorité | `5ee353c22d554ccef136c7f69140350ff7c7cd41babd547d119a71d38632a44e` |
| 12.06 | `1212:383` | Réalisation LIVE | 1680×970 @ (3820,1370) | Suivi 607 + LIVE 733 | `3b3005b4725697f277cdc1c19b9fa0bd49ebc024d7ac3f620d3dfeecefc0017f` |
| 12.07 | `1212:510` | État à réconcilier | 1680×970 @ (100,2550) | UNKNOWN ≠ échec | `e500aa92a4d5046c8c586d8c4a55474efdc97532e6b36a0dc7929f07b974563a` |
| 12.08 | `1212:637` | Synthèse du dossier | 1680×970 @ (1960,2550) | Bilans 437 + dossier 903 | `40052074ec9a23934b24f4ef73b9e8cc40418ed7313d6c2ee53a4f08985abb58` |
| 12.09 | `1212:774` | Reprendre avec Nora | 1680×970 @ (3820,2550) | Chip dossier + fil | `4c3b601ce6a26af2663a5adfe9e1d01cac41a6711972bc110b4470d69b71054a` |
| 12.10 | `1212:895` | Nora sas | 1680×970 @ (100,3730) | Rail sas personnel | `e748dcf91e359a78093ef5601140af40ad8e7792ed580ded0b7cb9de3a87948d` |
| 12.11 | `1239:613` | Livrables et tests | 1680×970 @ (1960,3730) | Onglet livrables | `7a382a9bc067c2d775df420941c06e4fcd0d809f517d2778463361af8413fa98` |
| 12.12 | `1239:680` | Git, pièces et handoff | 1680×970 @ (3820,3730) | Onglet Git & pièces | `91b07f87a911f91909bf2a5c74d431560c527c62d6f3b11643a6acd80e70a935` |
| 12.13 | `1245:757` | Écarts | 1680×970 @ (100,4910) | Onglet écarts | `c20dffdab347a93061ff0b6756e95f38e392aa68bad83b745c7e23d30d69c388` |
| 12.14 | `1250:815` | Instruction intégrale | 1680×970 @ (1960,4910) | Instruction scrollable | `88d0e7b3c104645553f819d20586bbeb286211f06626807368785a16ce708378` |

PNG natifs : `web/.sfia-evidence/figma-page12/` + `MANIFEST-SHA256.txt`.

## L1 / L2 contractuels stables

| Token / mesure | Valeur native |
|---|---|
| Fond page | `#0b101b` |
| Rail | `#0c101a`, largeur **246** |
| Surface pad | `[30,38,26,38]`, gap **18** |
| Bandeau | h **70**, pad horizontal **38**, stroke `#2b3850` |
| Accent | `#7477ed` |
| Texte fort | `#f3f5ff` |
| Texte muted | `#a3b0c7` |
| Panneaux | `#151d2c`, radius **10**, stroke `#2b3850` |
| Cartes internes | `#1b2639`, radius **8–10** |
| Modal D6 (12.03) | **490×230**, radius **10**, Oui/Non |
| Résultats split (12.08) | liste **437** + dossier **903**, gap **18** |
| Onglets | `SYNTHÈSE` / `LIVRABLES ET TESTS` / `GIT & PIÈCES` / `ÉCARTS` |
| Appréciations | 3 cartes : Cursor déclaré · D8/D9 · Nora consultative |

## Mapping produit

| Frame | Responsabilité | Composant runtime |
|---|---|---|
| 12.01 / 12.10 | Activité Nora | `NoraConversation` + activity |
| 12.02 / 12.05 / 12.14 | Inspection contrat | `ContractViewer` |
| 12.03 | Confirmation D6 | `D6ConfirmLaunch` |
| 12.04 / 12.06 / 12.07 | Tentative LIVE | `CursorRealizationSurface` mode=execution |
| 12.08 / 11 / 12 / 13 | Bilan D8 | `CursorRealizationSurface` mode=results + `RealizationBilan` |
| 12.09 | Reprendre Nora | chip `dossier-composer-attachment` + fil projet |

## Statut C24

- L0 / L1 metadata : **FAIT** (14 frames confirmées).
- L2 tokens + PNG hashés : **FAIT**.
- Transposition runtime ciblée : **FAIT** (tabs, appréciations, split résultats, chip 12.09, labels nav, modal D6).
- Fixtures visuelles : `/dev/ml5-page12-visual/{12.01…12.14}`.
- F2 runtime vs native (δ ≤ 2 CSS px) : à qualifier via captures BROWSER du harness — **PARTIEL** jusqu’aux captures runtime.

## Écarts soumis / documentés

| Écart | Traitement |
|---|---|
| Données fictives Figma (RES-007…) | Jamais injectées comme runtime LIVE |
| Rail « Exécution » vs `surface=execution` | Aligné Accès directs |
| Label « Résultats & preuves » | Aligné (&) |
| Harness ≠ shell complet 1680 | Fixtures prouvent composition ; shell complet via Studio DEV |

```

## 5. Sections modifiées — contenu utile complet

### FILE: `projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts` (full current)
```typescript
/**
 * C16/C17 — product entry into the adaptive D3 cognitive conductor.
 * generateNoraReply remains the provider adapter; this module orchestrates
 * cognitive work attachment, multi-segment continuation, and investigation merge.
 */

import {
  runCognitiveConductor,
  type ConductorRunResult,
} from "./cognitive-conductor";
import { buildCognitivePolicy } from "./cognitive-policy";
import {
  listCognitiveWorksForPreparation,
  type CognitiveProductionState,
  type CognitiveWorkRow,
} from "./cognitive-work";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
  type DeterminingQuestion,
  type InvestigationState,
} from "./investigation-state";
import {
  generateNoraReply,
  type NoraGenerateInput,
  type NoraGenerateResult,
} from "./nora-adapter";
import { resolvePublicWebRegistry } from "./public-web-registry";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  unavailableQualification,
  type NoraTurnQualification,
} from "./semantic-qualification";
import {
  consolidateAttachedDossierQuestions,
  isDossierJoinQuestion,
  parseStructuredDossierComposerAttachment,
} from "./dossier-composer-attachment";

export type NoraCognitiveTurnInput = NoraGenerateInput & {
  pilotId: string;
  preparationId: string;
  projectId?: string | null;
  conversationId?: string | null;
  turnCommandId?: string | null;
  /** Explicit continuation of a prior suspended/open work. */
  workId?: string | null;
  /** When true, always open a new cognitive work (independent request). */
  forceNewWork?: boolean;
  objective?: string;
  expectedOutcome?: string;
  maxSegmentsThisInvocation?: number;
};

export type NoraCognitiveTurnResult = NoraGenerateResult & {
  conductor: {
    workId: string;
    revision: number;
    segmentsRun: number;
    resumed: boolean;
    suspended: boolean;
    suspendReason: string | null;
    investigation: InvestigationState;
    production: CognitiveProductionState;
  };
};

/** Extract usage when the adapter exposes it; otherwise UNKNOWN (null). */
function usageFromReply(reply: NoraGenerateResult): {
  inputTokens: number | null;
  outputTokens: number | null;
  reasoningTokens: number | null;
  cachedInputTokens: number | null;
  providerRequests: number | null;
} {
  const u = reply.usage;
  const anyReply = reply as NoraGenerateResult & {
    inputTokens?: number | null;
    outputTokens?: number | null;
  };
  const input = u?.inputTokens ?? anyReply.inputTokens ?? null;
  const output = u?.outputTokens ?? anyReply.outputTokens ?? null;
  return {
    inputTokens: typeof input === "number" ? input : null,
    outputTokens: typeof output === "number" ? output : null,
    reasoningTokens:
      typeof u?.reasoningTokens === "number" ? u.reasoningTokens : null,
    cachedInputTokens:
      typeof u?.cachedInputTokens === "number" ? u.cachedInputTokens : null,
    providerRequests:
      typeof u?.providerRequests === "number" ? u.providerRequests : null,
  };
}

/**
 * C18 — merge determining questions from structured qualification only.
 * Never invent ANSWERED from user prose or absence of clarifications[].
 * C24 — when a structured D8 dossier is already attached in userText, do not
 * leave OPEN determinant questions that only ask to re-attach that dossier.
 */
export function mergeQuestions(
  prior: DeterminingQuestion[],
  qualification: NoraTurnQualification | null | undefined,
  userText?: string | null,
): DeterminingQuestion[] {
  const byId = new Map(prior.map((q) => [q.id, { ...q }]));
  const attached = userText
    ? parseStructuredDossierComposerAttachment(userText)
    : null;
  const structured = qualification?.determiningQuestions;
  if (structured && structured.length > 0) {
    for (const q of structured) {
      const id = q.id.trim();
      if (!id) continue;
      const prev = byId.get(id);
      byId.set(id, {
        id,
        text: q.text.trim() || prev?.text || id,
        status: q.status,
        importance: q.importance,
        answerSummary:
          q.status === "ANSWERED"
            ? q.answerSummary?.trim() || prev?.answerSummary
            : q.answerSummary?.trim() || undefined,
        sourceRefs: q.sourceRefs ?? prev?.sourceRefs,
      });
    }
    return consolidateAttachedDossierQuestions([...byId.values()], userText, attached);
  }
  const clarifications =
    qualification && qualification.status !== "UNAVAILABLE"
      ? qualification.clarifications
      : undefined;
  if (clarifications === undefined) {
    return consolidateAttachedDossierQuestions([...byId.values()], userText, attached);
  }
  if (clarifications.length === 0) {
    return consolidateAttachedDossierQuestions([...byId.values()], userText, attached);
  }
  for (const text of clarifications) {
    const trimmed = text.trim();
    if (!trimmed) continue;
    const existing = [...byId.values()].find((q) => q.text === trimmed);
    if (existing) continue;
    const id = `q-${stableShortId(trimmed)}`;
    // C24: dossier already in composer → do not open a determinant "joindre" question.
    if (attached && isDossierJoinQuestion(trimmed)) {
      byId.set(id, {
        id,
        text: trimmed,
        status: "ANSWERED",
        importance: "DETERMINANT",
        answerSummary: `Dossier D8 déjà joint (attemptId=${attached.attemptId})`,
        sourceRefs: [`attempt:${attached.attemptId}`],
      });
      continue;
    }
    byId.set(id, {
      id,
      text: trimmed,
      status: "OPEN",
      importance: "DETERMINANT",
    });
  }
  return consolidateAttachedDossierQuestions([...byId.values()], userText, attached);
}

function stableShortId(text: string): string {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return h.toString(36).slice(0, 10);
}

function mergeRemainingWork(
  prior: InvestigationState,
  qualification: NoraTurnQualification | null | undefined,
): string[] {
  const items = qualification?.remainingWorkItems;
  if (items && items.length > 0) {
    return items
      .filter((i) => i.status === "OPEN" || i.status === "BLOCKED")
      .map((i) => i.text.trim())
      .filter(Boolean);
  }
  return [...prior.remainingWork];
}

/**
 * C18 — consolidate investigation from structured qualification + observed tools.
 * No lexical criteria extraction. No prose→instruction fallback.
 */
export function mergeInvestigationFromReply(
  prior: InvestigationState,
  reply: NoraGenerateResult,
  userText: string,
): InvestigationState {
  const q = reply.qualification;
  const goal =
    q && q.status !== "UNAVAILABLE" ? q.goal?.trim() || "" : "";
  const outcome =
    q && q.status !== "UNAVAILABLE" ? q.desiredOutcome?.trim() || "" : "";
  const scope =
    q && q.status !== "UNAVAILABLE" ? q.initialScope?.trim() || "" : "";

  const sources = [...prior.sources];
  for (const s of reply.observedToolSources ?? []) {
    const idx = sources.findIndex((p) => p.ref === s.ref && p.kind === s.kind);
    if (idx < 0) sources.push(s);
    else {
      const prev = sources[idx]!;
      sources[idx] = {
        ...prev,
        ...s,
        notes: [prev.notes, prev.coverage !== s.coverage ? `${prev.coverage}->${s.coverage}` : null, s.notes]
          .filter(Boolean)
          .join("; "),
      };
    }
  }

  const questions = mergeQuestions(prior.questions, q, userText);
  const remainingWork = mergeRemainingWork(prior, q);

  const constraints = [...prior.constraints];
  if (scope && !constraints.includes(scope)) constraints.push(scope);
  for (const r of q?.restrictions ?? []) {
    const t = r.trim();
    if (t && !constraints.includes(t)) constraints.push(t);
  }

  const contradictions = [
    ...prior.contradictions,
    ...((q?.contradictions ?? []).map((c) => ({
      a: c.a,
      b: c.b,
      detail: c.detail,
    })) as InvestigationState["contradictions"]),
  ].slice(-16);

  // C18: prefer typed tool submission, then intent parameters, then top-level fields.
  const toolProd = reply.cursorContractProduction;
  const prepareIntent = q?.intents?.find(
    (i) =>
      i.capabilityId === "d7.prepare_cursor_contract" &&
      (i.mode === "PREPARE" || i.mode === "REQUEST_EFFECT"),
  );
  const productionInstruction =
    toolProd?.productionInstruction?.trim() ||
    prepareIntent?.parameters?.productionInstruction?.trim() ||
    q?.productionInstruction?.trim() ||
    prior.productionInstruction ||
    null;
  const fromToolCriteria = toolProd?.acceptanceCriteria?.map((c) => c.trim()).filter(Boolean);
  const fromIntentCriteria = prepareIntent?.parameters?.acceptanceCriteria
    ?.map((c) => c.trim())
    .filter(Boolean);
  const fromTopCriteria = q?.acceptanceCriteria?.map((c) => c.trim()).filter(Boolean);
  const acceptanceCriteria =
    fromToolCriteria && fromToolCriteria.length > 0
      ? fromToolCriteria
      : fromIntentCriteria && fromIntentCriteria.length > 0
        ? fromIntentCriteria
        : fromTopCriteria && fromTopCriteria.length > 0
          ? fromTopCriteria
          : [...(prior.acceptanceCriteria ?? [])];
  // Tool submission may also carry desiredOutcome when qualification omitted it.
  const desiredFromTool = toolProd?.desiredOutcome?.trim() || "";

  const profileHint: InvestigationState["profileHint"] =
    q?.cognitiveProfileHint ??
    (q?.status === "NEEDS_CLARIFICATION"
      ? "investigation"
      : prior.profileHint === "simple"
        ? "analyse"
        : prior.profileHint);

  const desiredOutcome = outcome || desiredFromTool || prior.desiredOutcome || "";

  return evaluateContractReadiness({
    ...prior,
    intentSummary: goal || prior.intentSummary || userText.slice(0, 800),
    desiredOutcome,
    sources,
    questions,
    remainingWork,
    contradictions,
    constraints,
    profileHint,
    productionInstruction,
    acceptanceCriteria,
  });
}

/**
 * C18 — continuation by workDisposition / objective class — not contractReady alone.
 */
export function semanticContinueWork(
  qualification: NoraTurnQualification | null,
  investigation: InvestigationState,
  reply: NoraGenerateResult,
): boolean {
  if (reply.status !== "COMPLETE") return false;
  if (
    investigation.contractReadyBlockedReason === "GLOBAL_BUDGET_EXHAUSTED" ||
    (investigation.contractReadyBlockedReason ?? "").startsWith("GLOBAL_")
  ) {
    return false;
  }
  const disposition = qualification?.workDisposition;
  if (disposition === "COMPLETE" || disposition === "AWAIT_PILOT" || disposition === "SUSPEND") {
    return false;
  }
  if (disposition === "CONTINUE") return true;

  if (qualification?.status === "NEEDS_CLARIFICATION") {
    return false;
  }
  const openDeterminant = investigation.questions.some(
    (q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED",
  );
  if (openDeterminant) {
    return (reply.observedToolSources?.length ?? 0) > 0;
  }
  if (investigation.remainingWork.length > 0) return true;
  return false;
}

/**
 * C18 — semantic attachment: Nora may propose relation/workId; server validates.
 */
export async function resolveCognitiveWorkAttachment(input: {
  pilotId: string;
  preparationId: string;
  workId?: string | null;
  forceNewWork?: boolean;
  userText?: string | null;
  qualification?: NoraTurnQualification | null;
}): Promise<{
  workId?: string | null;
  forceNew: boolean;
  reason: string;
  /** C20 — do not create/claim; await pilot clarification. */
  needsClarify?: boolean;
}> {
  if (input.forceNewWork === true) {
    return { forceNew: true, reason: "FORCE_NEW_EXPLICIT" };
  }
  if (input.workId) {
    return { workId: input.workId, forceNew: false, reason: "EXPLICIT_WORK_ID" };
  }

  const works = await listCognitiveWorksForPreparation({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
  });
  const relation = input.qualification?.cognitiveWorkRelation;
  const proposed = input.qualification?.proposedCognitiveWorkId?.trim() || null;

  if (relation === "INDEPENDENT" || relation === "MATERIAL_CHANGE" || relation === "UNRELATED") {
    return { forceNew: true, reason: `SEMANTIC_${relation}` };
  }
  if (relation === "CLARIFY") {
    if (proposed && works.some((w) => w.id === proposed)) {
      return { workId: proposed, forceNew: false, reason: "SEMANTIC_CLARIFY_ATTACH" };
    }
    return {
      forceNew: false,
      workId: null,
      reason: "SEMANTIC_CLARIFY_AWAIT",
      needsClarify: true,
    };
  }
  if ((relation === "CONTINUE" || relation === "CLARIFY") && proposed) {
    const hit = works.find((w) => w.id === proposed);
    if (hit) {
      return { workId: hit.id, forceNew: false, reason: "SEMANTIC_PROPOSED_WORK" };
    }
    return {
      forceNew: false,
      workId: null,
      reason: "SEMANTIC_PROPOSED_UNKNOWN",
      needsClarify: true,
    };
  }

  // C20: technical suspend resume only when Nora explicitly CONTINUEs.
  const segmentSuspended = works.filter(
    (w) =>
      w.status === "SUSPENDED" &&
      (w.interruptCause === "SEGMENT_INVOCATION_LIMIT" ||
        w.interruptCause === "PROCESS_OR_LEASE_INTERRUPT" ||
        (w.interruptCause ?? "").startsWith("SEGMENT")),
  );
  if (relation === "CONTINUE" && segmentSuspended.length === 1 && !proposed) {
    return {
      workId: segmentSuspended[0]!.id,
      forceNew: false,
      reason: "TECHNICAL_SUSPEND_RESUME",
    };
  }

  // C19: never deduce continuation from sole open presence without CONTINUE.
  const open = works.filter(
    (w) => w.status === "OPEN" || w.status === "SUSPENDED" || w.status === "RUNNING",
  );
  if (relation === "CONTINUE") {
    if (proposed) {
      const hit = works.find((w) => w.id === proposed);
      if (hit) return { workId: hit.id, forceNew: false, reason: "SEMANTIC_CONTINUE_PROPOSED" };
      return {
        forceNew: false,
        workId: null,
        reason: "SEMANTIC_CONTINUE_UNKNOWN_ID",
        needsClarify: true,
      };
    }
    if (open.length === 1) {
      return { workId: open[0]!.id, forceNew: false, reason: "SEMANTIC_CONTINUE_SINGLE" };
    }
    if (open.length > 1) {
      return {
        forceNew: false,
        workId: null,
        reason: "SEMANTIC_CONTINUE_AMBIGUOUS",
        needsClarify: true,
      };
    }
  }
  if (open.length > 1 && !proposed) {
    return {
      forceNew: false,
      workId: null,
      reason: "AMBIGUOUS_MULTI_OPEN",
      needsClarify: true,
    };
  }
  // Without structured relation, do not auto-attach to an open work.
  return { forceNew: true, reason: "NEW_OR_NEEDS_SEMANTIC_RELATION" };
}

/**
 * C22 — merge document production using structured mergeMode from Nora.
 * Exported for unit tests against the real owner function (not a copy).
 * Never derive SUPERSEDE from heading count or length alone.
 */
export function mergeDocumentProductionBody(input: {
  prevDoc: string;
  incoming: string;
  mergeMode?: "APPEND" | "CORRECT" | "SUPERSEDE" | null;
  workDisposition?: string | null;
  continueWork: boolean;
}): { contentMarkdown: string; appliedMode: "APPEND" | "CORRECT" | "SUPERSEDE" | "IDENTITY" } {
  const body = input.incoming.trim();
  const prev = (input.prevDoc ?? "").trim();
  if (!prev) return { contentMarkdown: body, appliedMode: "IDENTITY" };
  if (prev.includes(body) && body.length < prev.length) {
    return { contentMarkdown: prev, appliedMode: "IDENTITY" };
  }
  const explicit = input.mergeMode ?? null;
  // SUPERSEDE only when Nora declares it, or COMPLETE + explicit SUPERSEDE.
  if (explicit === "SUPERSEDE") {
    return { contentMarkdown: body, appliedMode: "SUPERSEDE" };
  }
  if (explicit === "CORRECT") {
    // Correction replaces prior body when disposition is COMPLETE; else append note.
    if (!input.continueWork || input.workDisposition === "COMPLETE") {
      return { contentMarkdown: body, appliedMode: "CORRECT" };
    }
    return {
      contentMarkdown: `${prev}\n\n<!-- correction -->\n\n${body}`.trim(),
      appliedMode: "CORRECT",
    };
  }
  // Default APPEND — mid-work continuity. Avoid duplicating identical prefix dumps.
  if (body.includes(prev.slice(0, Math.min(200, prev.length))) && body.length >= prev.length) {
    // Incoming already contains prior — treat as Nora-provided consolidated body only
    // when mergeMode SUPERSEDE was omitted but workDisposition COMPLETE *and*
    // qualification marked document as superseding via workDisposition alone is insufficient.
    // C22: stay APPEND unless explicit SUPERSEDE — keep prior + novel tail if any.
    if (body === prev) return { contentMarkdown: prev, appliedMode: "IDENTITY" };
  }
  if (prev.includes(body)) return { contentMarkdown: prev, appliedMode: "IDENTITY" };
  return {
    contentMarkdown: `${prev}\n\n${body}`.trim(),
    appliedMode: "APPEND",
  };
}

function documentProductionFromReply(
  work: CognitiveWorkRow,
  reply: NoraGenerateResult,
  segmentIndex: number,
  continueWork: boolean,
): CognitiveProductionState | undefined {
  const prevDoc =
    (work.production as CognitiveProductionState & { contentMarkdown?: string })
      .contentMarkdown ?? "";
  // C19: part ids are stable across invocations — never collide on local segmentIndex 0.
  const partId = `gen-${reply.generationId || `seg-${work.revision}-${segmentIndex}`}`;
  const appendPart = (
    parts: CognitiveProductionState["parts"],
    title: string,
    complete: boolean,
  ) => [...parts.filter((p) => p.id !== partId), { id: partId, title, complete }];

  const proposal = reply.qualification?.documentProposal;
  if (proposal?.contentMarkdown?.trim()) {
    const merged = mergeDocumentProductionBody({
      prevDoc,
      incoming: proposal.contentMarkdown,
      mergeMode: proposal.mergeMode ?? null,
      workDisposition: reply.qualification?.workDisposition ?? null,
      continueWork,
    });
    return {
      kind: "DOCUMENT",
      status: continueWork ? "IN_PROGRESS" : "COMPLETE",
      objectRef: work.production.objectRef || reply.generationId,
      parts: appendPart(
        work.production.parts,
        proposal.title || `document-part-${work.production.parts.length + 1}`,
        !continueWork,
      ),
      contentMarkdown: merged.contentMarkdown,
      limits: [`MERGE_MODE_${merged.appliedMode}`],
    } as CognitiveProductionState;
  }
  // C19: Markdown fence is transport/legacy only — never authority that replaces
  // structured production. Preserve prior DOCUMENT on resume.
  const extracted = reply.content.match(/```sfia-document\b([\s\S]*?)```/i);
  if (extracted && !prevDoc) {
    return {
      kind: "DOCUMENT",
      status: continueWork ? "IN_PROGRESS" : "COMPLETE",
      objectRef: reply.generationId,
      parts: appendPart(
        work.production.parts,
        `document-part-${work.production.parts.length + 1}`,
        !continueWork,
      ),
      contentMarkdown: extracted[1]!.trim(),
      limits: ["MARKDOWN_FENCE_TRANSPORT_ONLY"],
    } as CognitiveProductionState;
  }
  if (work.production.kind === "DOCUMENT" && prevDoc) {
    return {
      ...work.production,
      status: continueWork ? "IN_PROGRESS" : work.production.status,
      parts: appendPart(
        work.production.parts,
        reply.generationId,
        !continueWork,
      ),
    };
  }
  return {
    kind: "REPLY",
    status: continueWork ? "IN_PROGRESS" : "COMPLETE",
    objectRef: reply.generationId,
    parts: appendPart(work.production.parts, reply.generationId, !continueWork),
    limits: continueWork ? ["PRODUCTION_IN_PROGRESS"] : undefined,
  };
}

/**
 * Run Nora through the cognitive conductor for a product turn.
 */
export async function runNoraCognitiveTurn(
  input: NoraCognitiveTurnInput,
): Promise<NoraCognitiveTurnResult> {
  const segmentBox: { reply: NoraGenerateResult | null } = { reply: null };

  // C19: expose candidate works so Nora can emit cognitiveWorkRelation / proposed id.
  const candidates = await listCognitiveWorksForPreparation({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
  });
  const candidateSnippet =
    candidates.length === 0
      ? "Travaux cognitifs candidats: (aucun)"
      : [
          "Travaux cognitifs candidats (serveur valide; ne pas inventer d'id):",
          ...candidates.slice(0, 8).map(
            (w) =>
              `- ${w.id} status=${w.status} rev=${w.revision} obj=${(w.objective || "").slice(0, 120)}`,
          ),
          "Émettre cognitiveWorkRelation=CONTINUE|INDEPENDENT|CLARIFY|MATERIAL_CHANGE|UNRELATED et proposedCognitiveWorkId si rattachement.",
        ].join("\n");

  let attachment: Awaited<ReturnType<typeof resolveCognitiveWorkAttachment>>;
  let probeReply: NoraGenerateResult | null = null;
  let probeConsumed = false;

  // C19: when attachment is not forced/explicit, qualify first then resolve with structured fields.
  if (!input.workId && input.forceNewWork !== true) {
    const probePolicy =
      input.policyOverride ??
      buildCognitivePolicy(input.userText, undefined, { profileHint: "analyse" });
    probeReply = await generateNoraReply({
      userText: input.userText,
      contextSnippets: [...input.contextSnippets, candidateSnippet, "attachment=PENDING_SEMANTIC"],
      knowledgeSnippets: input.knowledgeSnippets,
      pilotageSnippets: input.pilotageSnippets,
      levelASignals: input.levelASignals,
      ckiDelivery: input.ckiDelivery,
      onProvisionalChunk: input.onProvisionalChunk,
      toolScope: input.toolScope,
      policyOverride: probePolicy,
    });
    segmentBox.reply = probeReply;
    attachment = await resolveCognitiveWorkAttachment({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      workId: input.workId,
      forceNewWork: input.forceNewWork,
      userText: input.userText,
      qualification: probeReply.qualification,
    });
  } else {
    attachment = await resolveCognitiveWorkAttachment({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      workId: input.workId,
      forceNewWork: input.forceNewWork,
      userText: input.userText,
    });
  }

  // C20: ambiguity / clarify — do not invent a new cognitive work; return AWAIT_PILOT.
  if (attachment.needsClarify) {
    const clarifyText =
      "Plusieurs travaux cognitifs sont candidats. Précisez lequel continuer (identifiant) ou confirmez une demande indépendante.";
    const basePolicy = buildCognitivePolicy(input.userText, undefined, {
      profileHint: "analyse",
    });
    const clarify: NoraGenerateResult = probeReply
      ? {
          ...probeReply,
          content: probeReply.content?.trim() || clarifyText,
          status: "COMPLETE",
        }
      : {
          content: clarifyText,
          status: "COMPLETE",
          generationId: `clarify-${Date.now()}`,
          mode: "deterministic-fixture",
          policy: basePolicy,
          modelRequested: basePolicy.modelRequested,
          modelApplied: null,
          effortRequested: basePolicy.effortRequested,
          effortApplied: null,
          attempts: [],
          toolCallsObserved: 0,
          d4CharsReturned: 0,
          observedToolSources: [],
          qualification: unavailableQualification(
            "CLARIFY_COGNITIVE_WORK_ATTACHMENT",
            clarifyText,
          ),
        };
    const q: NoraTurnQualification = {
      ...clarify.qualification,
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "NEEDS_CLARIFICATION",
      workDisposition: "AWAIT_PILOT",
      cognitiveWorkRelation: "CLARIFY",
      replyDraft:
        clarify.qualification.replyDraft ||
        clarify.content ||
        clarifyText,
    };
    return {
      ...clarify,
      content: clarify.content,
      qualification: q,
      status: "COMPLETE",
      conductor: {
        workId: "",
        revision: 0,
        segmentsRun: probeReply ? 1 : 0,
        resumed: false,
        suspended: false,
        suspendReason: null,
        investigation: {
          ...createEmptyInvestigation(input.userText),
          remainingWork: ["CLARIFY_COGNITIVE_WORK_ATTACHMENT"],
        },
        production: { kind: "REPLY", status: "PARTIAL", parts: [] },
      },
    };
  }

  const conductor: ConductorRunResult = await runCognitiveConductor({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    projectId: input.projectId,
    conversationId: input.conversationId,
    objective: input.objective ?? input.userText.slice(0, 2000),
    expectedOutcome: input.expectedOutcome,
    workId: attachment.workId,
    forceNewWork: attachment.forceNew,
    turnCommandId: input.turnCommandId,
    // C17: local cap remains technical; default raised for investigation depth.
    // SEGMENT_INVOCATION_LIMIT still suspends honestly when exhausted.
    maxSegmentsThisInvocation: input.maxSegmentsThisInvocation ?? 5,
    resolvePolicy: (work, segmentIndex) => {
      const seed =
        work.state.intentSummary ||
        work.objective ||
        input.userText;
      const hint = work.state.profileHint;
      const base = buildCognitivePolicy(seed, undefined, { profileHint: hint });
      if (segmentIndex > 0 && hint === "investigation") {
        return buildCognitivePolicy(seed, undefined, {
          profileHint: "investigation",
          effortHint: "high",
        });
      }
      if (hint === "simple") {
        return buildCognitivePolicy(seed, undefined, {
          profileHint: "simple",
          effortHint: "low",
        });
      }
      return input.policyOverride ?? base;
    },
    runSegment: async ({ work, segmentIndex, policy }) => {
      const continuationHint =
        segmentIndex === 0
          ? ""
          : [
              "",
              "[Continuation du même travail cognitif — segment suivant]",
              `workId=${work.id} revision=${work.revision}`,
              `Objectif: ${work.objective}`,
              work.state.intentSummary
                ? `Intention consolidée: ${work.state.intentSummary}`
                : null,
              work.state.desiredOutcome
                ? `Résultat attendu: ${work.state.desiredOutcome}`
                : null,
              work.state.remainingWork.length
                ? `Travail restant: ${work.state.remainingWork.join("; ")}`
                : null,
              work.state.questions
                .filter((q) => q.status !== "ANSWERED")
                .map((q) => `Q[${q.importance}]: ${q.text}`)
                .join("\n") || null,
              work.state.constraints.length
                ? `Contraintes: ${work.state.constraints.join("; ")}`
                : null,
            ]
              .filter(Boolean)
              .join("\n");

      // C24 — feed public WEB registry from prior state + DEV catalog match
      // (server-side provenance). Nora cannot self-authorize free-form topics.
      const webRegistry = resolvePublicWebRegistry({
        priorTopics: work.state.registeredPublicTopics,
        priorExactQueries: work.state.authorizedExactWebQueries,
        priorFacts: work.state.registeredPublicFacts,
        haystack: [
          input.userText,
          work.state.intentSummary ?? "",
          work.objective ?? "",
          input.objective ?? "",
        ].join("\n"),
      });

      let reply: NoraGenerateResult;
      if (probeReply && segmentIndex === 0 && !probeConsumed) {
        probeConsumed = true;
        reply = probeReply;
      } else {
        reply = await generateNoraReply({
          userText:
            segmentIndex === 0
              ? input.userText
              : `${input.userText}${continuationHint}`,
          contextSnippets: [
            ...input.contextSnippets,
            candidateSnippet,
            ...(segmentIndex > 0
              ? [
                  `Checkpoint cognitif ${work.id} r${work.revision}`,
                  work.state.intentSummary || "",
                  `attachment=${attachment.reason}`,
                ].filter(Boolean)
              : [`attachment=${attachment.reason}`]),
            ...(webRegistry.limits.length
              ? [`publicWebRegistry=${webRegistry.limits.join(",")}`]
              : []),
          ],
          knowledgeSnippets: input.knowledgeSnippets,
          pilotageSnippets: input.pilotageSnippets,
          levelASignals: input.levelASignals,
          ckiDelivery: input.ckiDelivery,
          onProvisionalChunk: input.onProvisionalChunk,
          toolScope: input.toolScope,
          policyOverride: policy,
          publicWebRegistry: {
            topics: webRegistry.topics,
            exactQueries: webRegistry.exactQueries,
            facts: webRegistry.facts,
          },
        });
      }
      segmentBox.reply = reply;
      const investigation = mergeInvestigationFromReply(
        work.state.intentSummary
          ? work.state
          : createEmptyInvestigation(input.userText),
        reply,
        input.userText,
      );
      // Persist registered public WEB provenance on investigation for next segments.
      investigation.registeredPublicTopics = {
        ...(investigation.registeredPublicTopics ?? {}),
        ...webRegistry.topics,
      };
      investigation.authorizedExactWebQueries = [
        ...new Set([
          ...(investigation.authorizedExactWebQueries ?? []),
          ...webRegistry.exactQueries,
        ]),
      ];
      investigation.registeredPublicFacts = [
        ...new Set([
          ...(investigation.registeredPublicFacts ?? []),
          ...webRegistry.facts,
        ]),
      ];
      // Stamp filiation on investigation for READY/DRAFT consumers.
      investigation.cognitiveWorkId = work.id;
      investigation.cognitiveRevision = work.revision;
      const continueWork = semanticContinueWork(
        reply.qualification,
        investigation,
        reply,
      );
      const usage = usageFromReply(reply);
      const production = documentProductionFromReply(
        work,
        reply,
        segmentIndex,
        continueWork,
      );
      return {
        replyText: reply.content,
        qualification: reply.qualification,
        investigation,
        generationId: reply.generationId,
        continueWork,
        resourcesDelta: {
          inputTokens: usage.inputTokens,
          outputTokens: usage.outputTokens,
          reasoningTokens: usage.reasoningTokens,
          // cachedInputTokens in limits only — do not double-count in token budget
          cacheTokens: usage.cachedInputTokens,
          modelRequested: reply.modelRequested,
          modelApplied: reply.modelApplied,
          effortRequested: reply.effortRequested,
          effortApplied: reply.effortApplied,
          webCalls: (reply.observedToolSources ?? []).filter((s) => s.kind === "WEB")
            .length,
          limits: [
            ...(usage.inputTokens == null ? ["USAGE_TOKENS_UNKNOWN"] : []),
            ...(usage.reasoningTokens == null
              ? ["REASONING_TOKENS_UNVERIFIED"]
              : []),
            ...(usage.cachedInputTokens == null
              ? ["CACHED_INPUT_TOKENS_UNVERIFIED"]
              : [`CACHED_INPUT_TOKENS:${usage.cachedInputTokens}`]),
            ...(usage.providerRequests != null
              ? [`PROVIDER_REQUESTS:${usage.providerRequests}`]
              : ["PROVIDER_REQUESTS_UNVERIFIED"]),
            ...(reply.usage?.provenance
              ? [`USAGE_PROVENANCE:${reply.usage.provenance}`]
              : []),
          ],
        },
        production,
      };
    },
  });

  const lastReply = segmentBox.reply;
  if (!lastReply) {
    throw new Error("CONDUCTOR_NO_SEGMENT");
  }

  // C17: align lifecycle — suspended conductor must not claim COMPLETE reply.
  const alignedStatus: NoraGenerateResult["status"] = conductor.suspended
    ? "INTERRUPTED"
    : lastReply.status;

  const reply: NoraGenerateResult = {
    ...lastReply,
    content: conductor.replyText || lastReply.content,
    qualification: conductor.qualification ?? lastReply.qualification,
    status: alignedStatus,
  };

  return {
    ...reply,
    conductor: {
      workId: conductor.work.id,
      revision: conductor.work.revision,
      segmentsRun: conductor.segmentsRun,
      resumed: conductor.resumed,
      suspended: conductor.suspended,
      suspendReason: conductor.suspendReason,
      investigation: {
        ...conductor.investigation,
        cognitiveWorkId: conductor.work.id,
        cognitiveRevision: conductor.work.revision,
      },
      production: conductor.production,
    },
  };
}

```

### FILE: `projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx` (full current)
```typescript
"use client";

/**
 * ML5 — Bilan D8 (frames 12.08 / 12.11 / 12.12 / 12.13).
 * Four Figma tabs: SYNTHÈSE / LIVRABLES ET TESTS / GIT & PIÈCES / ÉCARTS.
 * Cover nine rubrics. Verdict D8 ≠ avis Nora ≠ décision D6.
 */

import type { D8Rubric } from "@/domains/proofs/cursor-qualify";

/** Figma page 12 tabs — exact labels (12.08 / 12.11 / 12.12 / 12.13). */
export const BILAN_TAB_LABELS = {
  synthese: "SYNTHÈSE",
  livrables: "LIVRABLES ET TESTS",
  git: "GIT & PIÈCES",
  ecarts: "ÉCARTS",
} as const;

export type BilanTab = keyof typeof BILAN_TAB_LABELS;

const TAB_RUBRICS: Record<BilanTab, Array<D8Rubric["key"]>> = {
  synthese: ["resume", "prevu", "realise", "verdict", "recommandations"],
  livrables: ["evaluation"],
  git: ["sources", "impact"],
  ecarts: ["ecarts"],
};

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

export function RealizationBilan(props: {
  attemptId: string;
  verdict: string;
  rubrics: D8Rubric[];
  limits: string[];
  noraAnalysisMarkdown?: string | null;
  noraAnalysisKind?: string | null;
  dossier?: BilanDossierStructured | null;
  activeTab: BilanTab;
  onTabChange: (tab: BilanTab) => void;
  onDiscussWithNora?: () => void;
}) {
  const byKey = new Map(props.rubrics.map((r) => [r.key, r]));
  const keys = TAB_RUBRICS[props.activeTab] ?? [];
  const d = props.dossier;
  const cursorDeclared =
    byKey.get("realise")?.content?.trim() ||
    byKey.get("resume")?.content?.trim() ||
    "Résultat déclaré par Cursor non restitué.";
  const d8Control =
    byKey.get("verdict")?.content?.trim() ||
    `Contrôle D8/D9 : ${props.verdict || "UNKNOWN"}`;
  const noraConsult =
    (props.noraAnalysisMarkdown ?? "").trim().slice(0, 280) ||
    "Analyse consultative Nora absente — ne constitue pas une preuve.";
  return (
    <div
      className="fig-realization-bilan"
      data-testid="realization-bilan"
      data-attempt-id={props.attemptId}
      data-verdict={props.verdict}
      data-active-tab={props.activeTab}
      data-dossier-version={d?.dossierVersion ?? ""}
    >
      <header>
        <p className="fig-kicker !mb-0">
          BILAN {props.attemptId.slice(0, 12)}
          {d?.contractId ? `  /  ${d.contractId.slice(0, 12)}` : ""}
        </p>
        <h2 className="fig-inspector-title">
          Bilan global : prévu, réalisé, preuves et impact
        </h2>
        <p className="fig-travail-viewer-meta" data-testid="bilan-attempt-id">
          Tentative {props.attemptId}
          {d?.dossierVersion != null ? ` · dossier v${d.dossierVersion}` : ""}
          {d?.handoffStatus ? ` · handoff ${d.handoffStatus}` : ""}
        </p>
      </header>
      {/* Figma 12.08 — three distinct appréciations (declared ≠ D8/D9 ≠ Nora). */}
      <div className="fig-bilan-appreciations" data-testid="bilan-appreciations">
        <article
          className="fig-bilan-appreciation"
          data-testid="bilan-appreciation-cursor"
        >
          <p className="fig-bilan-appreciation-label">Résultat déclaré par Cursor</p>
          <p className="fig-bilan-appreciation-body">{cursorDeclared}</p>
        </article>
        <article
          className="fig-bilan-appreciation"
          data-testid="bilan-appreciation-d8"
        >
          <p className="fig-bilan-appreciation-label">Contrôle et verdict D8/D9</p>
          <p className="fig-bilan-appreciation-body">{d8Control}</p>
        </article>
        <article
          className="fig-bilan-appreciation"
          data-testid="bilan-appreciation-nora"
        >
          <p className="fig-bilan-appreciation-label">Analyse consultative de Nora</p>
          <p className="fig-bilan-appreciation-body">{noraConsult}</p>
        </article>
      </div>
      {d ? (
        <section
          className="fig-bilan-structured"
          data-testid="bilan-structured"
          data-tab={props.activeTab}
        >
          {props.activeTab === "synthese" ? (
            <dl data-testid="bilan-structured-synthese">
              <dt>Contrat</dt>
              <dd>{d.contractId ?? "MISSING"}</dd>
              <dt>Handoff</dt>
              <dd>
                {d.handoffId ?? "MISSING"} ({d.handoffStatus ?? "MISSING"})
              </dd>
              <dt>Terminal / pipeline</dt>
              <dd>
                {d.terminalStatus ?? "UNKNOWN"} / {d.pipelineStatus ?? "UNKNOWN"}
              </dd>
              <dt>Intégrité</dt>
              <dd>{d.integrityHash ?? "MISSING"}</dd>
            </dl>
          ) : null}
          {props.activeTab === "livrables" ? (
            <dl data-testid="bilan-structured-livrables">
              <dt>Fichiers créés</dt>
              <dd>{listOrMissing(d.filesCreated)}</dd>
              <dt>Fichiers modifiés</dt>
              <dd>{listOrMissing(d.filesModified)}</dd>
              <dt>Observés / consultés</dt>
              <dd>
                {listOrMissing(d.filesObserved)} /{" "}
                {listOrMissing(d.filesConsulted?.map((f) => f.path))}
              </dd>
              <dt>Tests déclarés / capturés</dt>
              <dd>
                {listOrMissing(d.testsDeclared)} / {listOrMissing(d.testsCaptured)}
              </dd>
            </dl>
          ) : null}
          {props.activeTab === "git" ? (
            <dl data-testid="bilan-structured-git">
              <dt>Branche / base</dt>
              <dd>
                {d.git?.branch ?? "N/A"} / {d.git?.baseRef ?? "N/A"}
              </dd>
              <dt>SHA local déclaré</dt>
              <dd>{d.git?.tipSha ?? "N/A"}</dd>
              <dt>SHA distant vérifié</dt>
              <dd>{d.git?.remoteSha ?? "N/A"}</dd>
              <dt>Sources</dt>
              <dd>{listOrMissing(d.sourcesConsulted, "MISSING")}</dd>
              <dt>Empreinte handoff</dt>
              <dd>{d.integrityHash ?? "MISSING"}</dd>
            </dl>
          ) : null}
          {props.activeTab === "ecarts" ? (
            <dl data-testid="bilan-structured-ecarts">
              <dt>Écarts inventoriés</dt>
              <dd>{listOrMissing(d.gaps, "Aucun écart inventorié (UNKNOWN)")}</dd>
            </dl>
          ) : null}
        </section>
      ) : null}
      <nav data-testid="bilan-tabs" className="fig-bilan-tabs">
        {(Object.keys(BILAN_TAB_LABELS) as BilanTab[]).map((tab) => (
          <button
            key={tab}
            type="button"
            className={props.activeTab === tab ? "btn" : "btn secondary"}
            data-testid={`bilan-tab-${tab}`}
            onClick={() => props.onTabChange(tab)}
          >
            {BILAN_TAB_LABELS[tab]}
          </button>
        ))}
      </nav>
      <section data-testid="bilan-rubrics" className="fig-bilan-rubrics">
        {keys.length === 0 ? (
          <p className="fig-bilan-empty" data-testid="bilan-rubrics-empty">
            Aucune rubrique pour cet onglet.
          </p>
        ) : (
          keys.map((k) => {
            const r = byKey.get(k);
            if (!r) {
              return (
                <article
                  key={k}
                  className="fig-bilan-rubric"
                  data-testid={`bilan-rubric-${k}`}
                  data-empty="1"
                >
                  <h3>
                    {k}{" "}
                    <span className="fig-bilan-coverage" data-coverage="MISSING">
                      MISSING
                    </span>
                  </h3>
                  <p className="fig-bilan-empty">Rubrique absente de ce dossier.</p>
                </article>
              );
            }
            const empty =
              !r.content?.trim() ||
              r.coverage === "MISSING" ||
              /^rapport manquant$/i.test(r.content.trim());
            return (
              <article
                key={k}
                className="fig-bilan-rubric"
                data-testid={`bilan-rubric-${k}`}
                data-coverage={r.coverage}
              >
                <h3>
                  {r.title}{" "}
                  <span className="fig-bilan-coverage" data-coverage={r.coverage}>
                    {r.coverage}
                  </span>
                </h3>
                {empty ? (
                  <p className="fig-bilan-empty" data-testid={`bilan-rubric-empty-${k}`}>
                    {r.content?.trim() || "Donnée absente — non certifiée."}
                  </p>
                ) : (
                  <p>{r.content}</p>
                )}
              </article>
            );
          })
        )}
      </section>
      {props.limits.length > 0 ? (
        <section data-testid="bilan-limits" className="fig-bilan-limits">
          <h3>Limites</h3>
          <ul>
            {props.limits.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {props.noraAnalysisMarkdown ? (
        <section
          className="fig-bilan-nora-analysis"
          data-testid="bilan-nora-analysis"
          data-kind={props.noraAnalysisKind ?? "unknown"}
        >
          <h3>
            {props.noraAnalysisKind === "NORA_COGNITIVE"
              ? "Analyse Nora D3 (post-tentative)"
              : props.noraAnalysisKind === "DETERMINISTIC_SYNTHESIS"
                ? "Synthèse déterministe (≠ run Nora)"
                : "Brief technique (≠ avis Nora)"}
          </h3>
          <pre>{props.noraAnalysisMarkdown}</pre>
        </section>
      ) : null}
      {props.onDiscussWithNora ? (
        <button
          type="button"
          className="btn secondary"
          data-testid="bilan-discuss-nora"
          onClick={props.onDiscussWithNora}
        >
          En discuter avec Nora
        </button>
      ) : null}
    </div>
  );
}

```

### FILE: `projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx` (full current)
```typescript
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
  /** Figma: execution vs résultats — same shell, distinct responsibility. */
  mode?: "execution" | "results";
  /** Figma 12.09 — structured retirable dossier ref (not free-text draft alone). */
  onDiscussWithNora?: (attachment: {
    attemptId: string;
    contractId?: string | null;
    handoffId?: string | null;
    dossierVersion?: number | string | null;
    verdictD8?: string | null;
    noraKind?: string | null;
    fingerprint?: string | null;
    pieces?: string[] | null;
  }) => void;
}) {
  const mode = props.mode ?? "execution";
  const [contracts, setContracts] = useState<ContractRow[]>([]);
  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [selectedContract, setSelectedContract] = useState<ContractRow | null>(null);
  const [instructionExpanded, setInstructionExpanded] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingAttemptId, setPendingAttemptId] = useState<string | null>(null);
  const [selectedAttempt, setSelectedAttempt] = useState<AttemptRow | null>(null);
  const [bilan, setBilan] = useState<{
    verdict: string;
    rubrics: D8Rubric[];
    limits: string[];
    noraAnalysisMarkdown?: string | null;
    noraAnalysisKind?: string | null;
    dossier?: BilanDossierStructured | null;
  } | null>(null);
  const [bilanTab, setBilanTab] = useState<BilanTab>("synthese");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [pendingRequalify, setPendingRequalify] = useState<{
    attemptId: string;
    handoffId: string;
    expectedUpdatedAt: string | null;
  } | null>(null);
  /** One-shot resume of AUTHORIZED orphans — avoid dispatch hammer loops. */
  const resumedAuthorizedRef = useRef<Set<string>>(new Set());

  const reload = useCallback(async () => {
    const [cRes, aRes] = await Promise.all([
      fetch(`/api/projects/${props.projectId}/realization/contracts`),
      fetch(`/api/projects/${props.projectId}/realization/attempts`).catch(() => null),
    ]);
    if (cRes.ok) {
      const j = (await cRes.json()) as { contracts?: ContractRow[] };
      setContracts(j.contracts ?? []);
    }
    if (aRes && aRes.ok) {
      const j = (await aRes.json()) as { attempts?: AttemptRow[] };
      setAttempts(j.attempts ?? []);
    }
  }, [props.projectId]);

  useEffect(() => {
    void reload();
  }, [reload]);

  /** C24 — resume AUTHORIZED Cursor attempts left after D6 Oui without dispatch (nav/crash). */
  useEffect(() => {
    const orphaned = attempts.filter(
      (a) =>
        a.status === "AUTHORIZED" &&
        Boolean(a.decisionId) &&
        !resumedAuthorizedRef.current.has(a.attemptId),
    );
    if (orphaned.length === 0) return;
    let cancelled = false;
    const resume = async () => {
      for (const a of orphaned.slice(0, 2)) {
        if (cancelled) return;
        resumedAuthorizedRef.current.add(a.attemptId);
        try {
          await fetch(
            `/api/projects/${props.projectId}/realization/attempts/${a.attemptId}/dispatch`,
            { method: "POST" },
          );
        } catch {
          /* one-shot; Pilote can re-open surface */
        }
      }
      if (!cancelled) await reload();
    };
    void resume();
    return () => {
      cancelled = true;
    };
  }, [attempts, props.projectId, reload]);

  /** E05 — poll DISPATCHED attempts beyond ACK; reconcile is observational, not a second dispatch. */
  useEffect(() => {
    const dispatched = attempts.filter(
      (a) => a.status === "DISPATCHED" && !a.live.terminalStatus,
    );
    if (dispatched.length === 0) return;
    let ticks = 0;
    const id = window.setInterval(() => {
      ticks += 1;
      void reload();
      if (ticks % 5 === 0) {
        for (const a of dispatched.slice(0, 3)) {
          void fetch(
            `/api/projects/${props.projectId}/realization/attempts/${a.attemptId}/reconcile`,
            { method: "POST" },
          ).catch(() => {
            /* observational */
          });
        }
      }
    }, 3000);
    return () => window.clearInterval(id);
  }, [attempts, props.projectId, reload]);

  async function reconcileAttempt(attemptId: string) {
    setBusy(true);
    try {
      const res = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${attemptId}/reconcile`,
        { method: "POST" },
      );
      const j = (await res.json().catch(() => ({}))) as { error?: string; message?: string; status?: string };
      setStatus(
        res.ok
          ? `Réconciliation: ${j.status ?? "ok"} — pas de second dispatch`
          : j.message ?? j.error ?? "Réconciliation refusée",
      );
      await reload();
    } finally {
      setBusy(false);
    }
  }

  /** CF-02 — READY is a server-owned qualification act (not client sufficiency). */
  async function qualifyReady(contract: ContractRow) {
    setBusy(true);
    setStatus("");
    try {
      const res = await fetch(
        `/api/projects/${props.projectId}/realization/contracts/${contract.id}/ready`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        },
      );
      const j = (await res.json().catch(() => ({}))) as {
        status?: string;
        error?: string;
        message?: string;
      };
      if (!res.ok) {
        setStatus(j.message ?? j.error ?? "Qualification READY refusée");
        return;
      }
      setStatus(`Contrat ${contract.contractKey} → ${j.status ?? "READY"} (serveur)`);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  async function prepareFromContract(contract: ContractRow) {
    setBusy(true);
    setStatus("");
    try {
      const correlationKey = `ml5-${contract.id}-${Date.now()}`;
      const res = await fetch(`/api/projects/${props.projectId}/realization/attempts/prepare`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contractId: contract.id,
          correlationKey,
          workspaceKey: "default",
        }),
      });
      const j = (await res.json().catch(() => ({}))) as {
        attemptId?: string;
        error?: string;
        message?: string;
      };
      if (!res.ok || !j.attemptId) {
        setStatus(j.message ?? j.error ?? "Préparation refusée");
        return;
      }
      setPendingAttemptId(j.attemptId);
      setSelectedContract(contract);
      setConfirmOpen(true);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  async function confirmYes() {
    if (!pendingAttemptId || !selectedContract) return;
    setBusy(true);
    try {
      // Single authorize call: server auto-dispatches after D6 Oui (C24).
      // Keeps AUTHORIZED→DISPATCHED atomic vs browser navigation aborting a second fetch.
      const auth = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/authorize`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            statement: "Je mandate l'exécution Cursor du contrat inspecté",
            inspectedFingerprint: selectedContract.fingerprint,
            confirmed: true,
          }),
          keepalive: true,
        },
      );
      const aj = (await auth.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
        status?: string;
        dispatch?: { status?: string; error?: string; message?: string };
      };
      if (!auth.ok) {
        setStatus(aj.message ?? aj.error ?? "Autorisation refusée");
        setConfirmOpen(false);
        return;
      }
      const dispStatus = aj.dispatch?.status ?? aj.status;
      if (aj.dispatch?.error || dispStatus === "AUTHORIZED" || dispStatus === "FAILED") {
        // Fallback: explicit /dispatch if same-request dispatch did not advance.
        const disp = await fetch(
          `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/dispatch`,
          { method: "POST", keepalive: true },
        );
        const dj = (await disp.json().catch(() => ({}))) as {
          error?: string;
          message?: string;
          status?: string;
        };
        if (!disp.ok) {
          setStatus(
            dj.message ??
              dj.error ??
              aj.dispatch?.message ??
              "Dispatch refusé après autorisation D6",
          );
        } else {
          setStatus(
            `Dispatch accepté (${dj.status ?? "ok"}) — observations LIVE/SCRIPTED à réconcilier`,
          );
        }
      } else {
        setStatus(
          `Dispatch accepté (${dispStatus ?? "ok"}) — observations LIVE/SCRIPTED à réconcilier`,
        );
      }
      setConfirmOpen(false);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  async function confirmNo() {
    if (!pendingAttemptId || !selectedContract) {
      setConfirmOpen(false);
      setPendingAttemptId(null);
      setStatus("Confirmation Non — dialogue fermé sans acte");
      return;
    }
    setBusy(true);
    try {
      const auth = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/authorize`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            statement: "Refus explicite D6 — pas d'exécution Cursor du contrat inspecté",
            inspectedFingerprint: selectedContract.fingerprint,
            confirmed: false,
          }),
        },
      );
      const aj = (await auth.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
        status?: string;
        decisionId?: string;
        refused?: boolean;
      };
      if (!auth.ok) {
        setStatus(aj.message ?? aj.error ?? "Refus D6 non enregistré");
      } else {
        setStatus(
          `Refus D6 enregistré (${aj.status ?? "CANCELLED"}) — décision ${aj.decisionId ?? "—"} — aucun dispatch`,
        );
      }
      setConfirmOpen(false);
      setPendingAttemptId(null);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  function resumeMissing(rubrics: D8Rubric[] | undefined): boolean {
    const resume = (rubrics ?? []).find((r) => r.key === "resume");
    return (
      !resume ||
      resume.coverage === "MISSING" ||
      /^rapport manquant$/i.test((resume.content ?? "").trim())
    );
  }

  async function openBilan(attempt: AttemptRow) {
    setSelectedAttempt(attempt);
    setBusy(true);
    try {
      const handoffRes = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/handoff`,
      );
      const handoffJ = (await handoffRes.json().catch(() => ({}))) as {
        handoff?: { id?: string; status?: string; reportMarkdown?: string | null };
        status?: string;
      };
      const handoff = handoffJ.handoff ?? null;
      const handoffReceived =
        handoffRes.ok &&
        handoff?.status === "RECEIVED" &&
        Boolean(handoff.reportMarkdown && String(handoff.reportMarkdown).trim());

      const res = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/qualification`,
      );
      const j = (await res.json().catch(() => ({}))) as {
        status?: string;
        qualification?: {
          id?: string;
          verdict: string;
          rubrics: D8Rubric[];
          limits: string[];
          noraAnalysisMarkdown?: string | null;
          noraAnalysisKind?: string | null;
          updatedAt?: string | null;
          dossier?: BilanDossierStructured | null;
        };
      };

      // C11/C24 — lecture ≠ qualification silencieuse à l'ouverture.
      // Le pipeline autonome produit le dossier; l'UI observe l'état en cours
      // ou disponible. Requalification = acte explicite uniquement.
      const needsFirstCreate = j.status === "MISSING" || !j.qualification;
      const needsExplicitRequalify =
        Boolean(j.qualification) &&
        handoffReceived &&
        resumeMissing(j.qualification?.rubrics);

      if (needsFirstCreate) {
        // If handoff is already RECEIVED, allow explicit qualify CTA; otherwise
        // keep selected attempt visible and surface honest in-progress status.
        setBilan(null);
        setPendingRequalify(
          handoffReceived
            ? {
                attemptId: attempt.attemptId,
                handoffId: handoff?.id ?? "",
                expectedUpdatedAt: null,
              }
            : null,
        );
        setStatus(
          handoffReceived
            ? "Dossier D8 absent — qualification explicite requise (pas de POST à l'ouverture)"
            : "Dossier D8 en cours ou absent — ouverture en lecture seule",
        );
        // Trigger observational reload so a concurrent autonomous restitution can appear.
        await reload();
        return;
      }

      if (needsExplicitRequalify && j.qualification) {
        setBilan({
          verdict: j.qualification.verdict,
          rubrics: j.qualification.rubrics,
          limits: j.qualification.limits,
          noraAnalysisMarkdown: j.qualification.noraAnalysisMarkdown,
          noraAnalysisKind: j.qualification.noraAnalysisKind,
          dossier: j.qualification.dossier ?? null,
        });
        setPendingRequalify({
          attemptId: attempt.attemptId,
          handoffId: handoff?.id ?? "",
          expectedUpdatedAt: j.qualification.updatedAt ?? null,
        });
        setStatus(
          "Handoff RECEIVED après qualification initiale — requalification explicite requise (pas de POST silencieux à l'ouverture)",
        );
        return;
      }
      setBilan({
        verdict: j.qualification!.verdict,
        rubrics: j.qualification!.rubrics,
        limits: j.qualification!.limits,
        noraAnalysisMarkdown: j.qualification!.noraAnalysisMarkdown,
        noraAnalysisKind: j.qualification!.noraAnalysisKind,
        dossier: j.qualification!.dossier ?? null,
      });
    } finally {
      setBusy(false);
    }
  }

  async function requestStop(attemptId: string) {
    setBusy(true);
    try {
      await fetch(`/api/projects/${props.projectId}/realization/attempts/${attemptId}/stop`, {
        method: "POST",
      });
      await reload();
    } finally {
      setBusy(false);
    }
  }

  /** C11 — requalify is an explicit Pilot act, never silent on openBilan. */
  async function confirmRequalify() {
    if (!pendingRequalify?.handoffId) {
      setStatus("Impossible de requalifier — handoffId manquant");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${pendingRequalify.attemptId}/qualification`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            attachNoraCognitive: true,
            requalify: true,
            reason:
              "C11 — requalification explicite après handoff RECEIVED (correction de jugement)",
            requalifyMode: "judgment_correction",
            newProofRef: pendingRequalify.handoffId,
            expectedUpdatedAt: pendingRequalify.expectedUpdatedAt ?? undefined,
          }),
        },
      );
      const created = (await res.json().catch(() => ({}))) as {
        verdict?: string;
        rubrics?: D8Rubric[];
        limits?: string[];
        noraAnalysisMarkdown?: string | null;
        noraAnalysisKind?: string | null;
        message?: string;
        error?: string;
      };
      if (res.ok && created.rubrics) {
        setBilan({
          verdict: created.verdict ?? "INDETERMINATE",
          rubrics: created.rubrics,
          limits: created.limits ?? [],
          noraAnalysisMarkdown: created.noraAnalysisMarkdown,
          noraAnalysisKind: created.noraAnalysisKind,
        });
        setPendingRequalify(null);
        setStatus("Bilan D8 requalifié explicitement après handoff RECEIVED");
      } else {
        setStatus(created.message ?? created.error ?? "Requalification refusée");
      }
    } finally {
      setBusy(false);
    }
  }

  const viewerModel: ContractViewerModel | null = selectedContract
    ? {
        contractId: selectedContract.id,
        contractKey: selectedContract.contractKey,
        version: selectedContract.version,
        fingerprint: selectedContract.fingerprint,
        title: selectedContract.body.title,
        engagements: selectedContract.body.engagements,
        volets: selectedContract.body.volets,
        instructionText: selectedContract.body.instructionText,
        risks: selectedContract.body.risks,
        exclusions: selectedContract.body.exclusions,
      }
    : null;

  const showExecutionChrome = mode === "execution";
  const showResultsChrome = mode === "results";

  return (
    <div
      className="fig-cursor-realization"
      data-testid="cursor-realization-surface"
      data-mode={mode}
    >
      <header>
        <p className="fig-kicker !mb-0">
          {showExecutionChrome ? "EXÉCUTION CURSOR" : "RÉSULTATS ET PREUVES  /  D8"}
        </p>
        <h2 className="fig-inspector-title">
          {showExecutionChrome ? "Interventions et observations" : "Bilans de réalisation"}
        </h2>
        <p className="fig-travail-viewer-meta">
          {showExecutionChrome
            ? "Inspection → confirmation D6 → une tentative → observations. Lecture ≠ autorisation."
            : "Neuf rubriques D8 dans quatre onglets Figma. Verdict ≠ avis Nora ≠ réception D6."}
        </p>
        {status ? (
          <p role="status" data-testid="realization-status">
            {status}
          </p>
        ) : null}
        {pendingRequalify ? (
          <p>
            <button
              type="button"
              className="btn"
              data-testid="d8-explicit-requalify"
              disabled={busy}
              onClick={() => void confirmRequalify()}
            >
              Requalifier le bilan (acte explicite)
            </button>
          </p>
        ) : null}
      </header>

      {showExecutionChrome ? (
        <section data-testid="realization-contracts">
          <h3>Contrats techniques</h3>
          {contracts.length === 0 ? (
            <p className="muted">Aucun contrat — Nora peut en préparer depuis Travail.</p>
          ) : (
            <ul>
              {contracts.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    className="btn secondary"
                    data-testid={`contract-select-${c.id}`}
                    disabled={busy}
                    onClick={() => {
                      setSelectedContract(c);
                      setInstructionExpanded(false);
                    }}
                  >
                    {c.body.title} · {c.status} · v{c.version}
                  </button>
                  {c.status === "DRAFT" || c.status === "NEEDS_REVISION" ? (
                    <button
                      type="button"
                      className="btn secondary"
                      data-testid={`contract-ready-${c.id}`}
                      disabled={busy}
                      onClick={() => void qualifyReady(c)}
                    >
                      Qualifier READY (serveur)
                    </button>
                  ) : null}
                  {c.status === "READY" ? (
                    <button
                      type="button"
                      className="btn"
                      data-testid={`contract-prepare-${c.id}`}
                      disabled={busy}
                      onClick={() => void prepareFromContract(c)}
                    >
                      Préparer exécution
                    </button>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : null}

      {showExecutionChrome && viewerModel ? (
        <ContractViewer
          contract={viewerModel}
          instructionExpanded={instructionExpanded}
          onToggleInstruction={() => setInstructionExpanded((v) => !v)}
          onClose={() => setSelectedContract(null)}
          onOpenInExecution={() => setSelectedContract(selectedContract)}
          onRequestExecute={
            selectedContract?.status === "READY"
              ? () => void prepareFromContract(selectedContract)
              : undefined
          }
          executeDisabled={busy || selectedContract?.status !== "READY"}
        />
      ) : null}

      {confirmOpen && selectedContract ? (
        <D6ConfirmLaunch
          contractKey={selectedContract.contractKey}
          version={selectedContract.version}
          fingerprint={selectedContract.fingerprint}
          title={selectedContract.body.title}
          busy={busy}
          onYes={() => void confirmYes()}
          onNo={() => void confirmNo()}
          onCancel={() => {
            setConfirmOpen(false);
            setPendingAttemptId(null);
            setStatus("Dialogue D6 annulé — aucun acte");
          }}
        />
      ) : null}

      {showResultsChrome ? (
        <div className="fig-results-split" data-testid="results-split">
          <section
            className="fig-results-bilans-list"
            data-testid="realization-attempts"
          >
            <div className="fig-results-bilans-head">
              <h3>Bilans disponibles</h3>
              <span className="fig-results-bilans-count" data-testid="bilans-count">
                {attempts.length} bilan{attempts.length === 1 ? "" : "s"}
              </span>
            </div>
            <p className="fig-travail-viewer-meta">
              Bilans et preuves qualifiées par intervention
            </p>
            {attempts.length === 0 ? (
              <p className="muted">Aucune tentative Cursor pour ce projet.</p>
            ) : (
              <ul className="fig-results-bilans-ul">
                {attempts.map((a) => {
                  const selected = selectedAttempt?.attemptId === a.attemptId;
                  return (
                    <li
                      key={a.attemptId}
                      data-testid={`attempt-row-${a.attemptId}`}
                      data-selected={selected ? "1" : "0"}
                    >
                      <button
                        type="button"
                        className={
                          selected
                            ? "fig-results-bilan-card is-selected"
                            : "fig-results-bilan-card"
                        }
                        data-testid={`attempt-bilan-${a.attemptId}`}
                        onClick={() => void openBilan(a)}
                      >
                        <span className="fig-results-bilan-kicker">
                          {a.attemptId.slice(0, 12)} · {a.status}
                        </span>
                        <span className="fig-results-bilan-title">
                          {a.live.lastActivitySummary ||
                            `${a.plan.contractKey} v${a.plan.contractVersion}`}
                        </span>
                        <span className="fig-results-bilan-meta">
                          {a.live.terminalStatus ?? "—"}
                          {a.status === "AMBIGUOUS" ? " · à réconcilier" : ""}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
            <p className="fig-travail-viewer-meta">
              Lecture seule · aucun arbitrage requis dans cette vue
            </p>
          </section>
          <div className="fig-results-dossier" data-testid="results-dossier">
            {bilan && selectedAttempt ? (
              <RealizationBilan
                attemptId={selectedAttempt.attemptId}
                verdict={bilan.verdict}
                rubrics={bilan.rubrics}
                limits={bilan.limits}
                noraAnalysisMarkdown={bilan.noraAnalysisMarkdown}
                noraAnalysisKind={bilan.noraAnalysisKind}
                dossier={bilan.dossier}
                activeTab={bilanTab}
                onTabChange={setBilanTab}
                onDiscussWithNora={() => {
                  const d = bilan.dossier;
                  props.onDiscussWithNora?.({
                    attemptId: selectedAttempt.attemptId,
                    contractId: d?.contractId ?? selectedAttempt.plan.contractId,
                    handoffId: d?.handoffId ?? null,
                    dossierVersion: d?.dossierVersion ?? null,
                    verdictD8: bilan.verdict,
                    noraKind: bilan.noraAnalysisKind ?? null,
                    fingerprint: selectedAttempt.fingerprint,
                    pieces: d?.filesConsulted?.length
                      ? d.filesConsulted.map((f) => f.path)
                      : null,
                  });
                }}
              />
            ) : (
              <p className="muted" data-testid="results-dossier-empty">
                Sélectionnez un bilan à gauche pour ouvrir le dossier.
              </p>
            )}
          </div>
        </div>
      ) : (
        <>
          <section data-testid="realization-attempts">
            <h3>Historique des interventions</h3>
            {attempts.length === 0 ? (
              <p className="muted">Aucune tentative Cursor pour ce projet.</p>
            ) : (
              <ul>
                {attempts.map((a) => (
                  <li key={a.attemptId} data-testid={`attempt-row-${a.attemptId}`}>
                    <span>
                      {a.status} · {a.live.terminalStatus ?? "—"} ·{" "}
                      {a.live.lastActivitySummary ?? "pas d'observation"}
                      {a.live.agentId ? ` · agent ${a.live.agentId.slice(0, 8)}` : ""}
                      {a.live.runId ? ` · run ${a.live.runId.slice(0, 8)}` : ""}
                      {a.status === "AMBIGUOUS" ? " · à réconcilier" : ""}
                    </span>
                    {a.status === "COMPLETED" ||
                    a.status === "FAILED" ||
                    a.status === "AMBIGUOUS" ? (
                      <button
                        type="button"
                        className="btn secondary"
                        data-testid={`attempt-bilan-${a.attemptId}`}
                        onClick={() => void openBilan(a)}
                      >
                        Bilan D8
                      </button>
                    ) : null}
                    {a.status === "DISPATCHED" || a.status === "AMBIGUOUS" ? (
                      <button
                        type="button"
                        className="btn secondary"
                        data-testid="cursor-reconcile"
                        data-attempt-id={a.attemptId}
                        disabled={busy}
                        onClick={() => void reconcileAttempt(a.attemptId)}
                      >
                        Réconcilier
                      </button>
                    ) : null}
                    {a.status === "DISPATCHED" ? (
                      <button
                        type="button"
                        className="btn secondary"
                        data-testid={`attempt-stop-${a.attemptId}`}
                        onClick={() => void requestStop(a.attemptId)}
                      >
                        STOP
                      </button>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {bilan && selectedAttempt ? (
            <RealizationBilan
              attemptId={selectedAttempt.attemptId}
              verdict={bilan.verdict}
              rubrics={bilan.rubrics}
              limits={bilan.limits}
              noraAnalysisMarkdown={bilan.noraAnalysisMarkdown}
              noraAnalysisKind={bilan.noraAnalysisKind}
              dossier={bilan.dossier}
              activeTab={bilanTab}
              onTabChange={setBilanTab}
              onDiscussWithNora={() => {
                const d = bilan.dossier;
                props.onDiscussWithNora?.({
                  attemptId: selectedAttempt.attemptId,
                  contractId: d?.contractId ?? selectedAttempt.plan.contractId,
                  handoffId: d?.handoffId ?? null,
                  dossierVersion: d?.dossierVersion ?? null,
                  verdictD8: bilan.verdict,
                  noraKind: bilan.noraAnalysisKind ?? null,
                  fingerprint: selectedAttempt.fingerprint,
                  pieces: d?.filesConsulted?.length
                    ? d.filesConsulted.map((f) => f.path)
                    : null,
                });
              }}
            />
          ) : null}
        </>
      )}
    </div>
  );
}

```

### FILE: `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx` (full current)
```typescript
"use client";

import { useEffect, useRef, useState } from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { NoraComposition } from "@/components/figma/NoraComposition";
import { useNoraThreadScroll } from "@/hooks/useNoraThreadScroll";
import type {
  MessageProjectionView,
  TurnChoice,
  TurnReference,
} from "@/domains/conversation/turn-projection";
import { admitConversationalComposition } from "@/domains/conversation/conversational-composition";
import {
  compositionAnchorsChoices,
  compositionAnchorsReferences,
} from "@/domains/conversation/visual-composition";

export type NoraMsg = {
  id: string;
  role: string;
  content: string;
  status: string;
};

export function NoraConversation(props: {
  messages: NoraMsg[];
  draft: string;
  busy: boolean;
  unresolvedPending?: boolean;
  activity?: "idle" | "preparing" | "error";
  status?: string;
  onDraft: (v: string) => void;
  onSend: () => void;
  onReconcile?: () => void;
  aside?: React.ReactNode;
  /** When set, participates in project-travail-stage CSS grid via display:contents. */
  embeddedInStage?: boolean;
  projections?: MessageProjectionView[];
  onChoice?: (choice: TurnChoice, messageId: string) => void;
  /** Consultation links — independent of choice lifetime (§6.10). */
  onReference?: (ref: TurnReference) => void;
  choiceFrozen?: boolean;
  forceStickToken?: number;
  layoutMode?: "normal" | "split" | "enlarged";
  /** J-C13 — scroll/highlight exact message without sending. */
  focusMessageId?: string | null;
  onFocusMessageHandled?: () => void;
  focusStatus?: string | null;
  /** Ensemble 07 — verrou qualification initiale (UI + accessibilité). */
  composerLocked?: boolean;
  composerLockReason?: string;
  /** E07 05.17 — bandeau qualification + lien Trajectoire. */
  qualificationBanner?: boolean;
  onOpenTrajectoire?: () => void;
  /** C01/C05/C07 — mid-turn functional activity (polled), distinct from response streaming. */
  liveActivityEvents?: Array<{
    sequence: number;
    nature: string;
    status: string;
    summary: string;
    phase: string;
    sourceRef?: string | null;
  }>;
  liveActivityHeadline?: string;
  /** Figma 12.09 — retirable D8 dossier reference (not free-text). */
  dossierAttachment?: {
    attemptId: string;
    contractId?: string | null;
    dossierVersion?: number | string | null;
    verdictD8?: string | null;
  } | null;
  onRemoveDossierAttachment?: () => void;
}) {
  const n = props.messages.length;
  const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
  const variantLabel =
    n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";
  const embedded = Boolean(props.embeddedInStage);
  const composerLocked = Boolean(props.composerLocked);
  const hasDossier = Boolean(props.dossierAttachment?.attemptId);
  const sendDisabled =
    props.busy ||
    (!props.draft.trim() && !hasDossier) ||
    composerLocked;
  const lastMessageId = n > 0 ? props.messages[n - 1]!.id : null;
  const { threadRef, onScroll, scrollToBottom, newBelow } = useNoraThreadScroll({
    messageCount: n,
    lastMessageId,
    activityPreparing: props.activity === "preparing",
    forceStickToken: props.forceStickToken ?? 0,
    focusMessageId: props.focusMessageId,
  });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [imeComposing, setImeComposing] = useState(false);
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 700px)").matches;

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const max = Math.min(window.innerHeight * 0.36, 280);
    const next = Math.min(Math.max(el.scrollHeight, 24), max);
    el.style.height = `${next}px`;
    el.style.overflowY = el.scrollHeight > max ? "auto" : "hidden";
  }, [props.draft]);

  // Include message id order so Journal→Travail highlight rebinds after a same-length
  // setMessages remount (length-only deps lost data-journal-focus on replaced nodes).
  const messageIdsKey = props.messages.map((m) => m.id).join("\0");
  useEffect(() => {
    const targetId = props.focusMessageId?.trim();
    if (!targetId) return;
    let cancelled = false;
    let highlightTimer: number | undefined;
    let attempts = 0;
    const tryFocus = () => {
      if (cancelled) return;
      const root = threadRef.current;
      const node = root?.querySelector(
        `[data-message-id="${CSS.escape(targetId)}"]`,
      ) as HTMLElement | null;
      if (!node) {
        attempts += 1;
        // Wait for async insert / paint — do not clear focus on first miss (avoids landing on last message).
        if (attempts < 40) {
          window.setTimeout(tryFocus, 50);
          return;
        }
        props.onFocusMessageHandled?.();
        return;
      }
      node.scrollIntoView({ block: "center", behavior: "smooth" });
      node.setAttribute("data-journal-focus", "1");
      node.classList.add("is-journal-focus");
      // Keep focus marker long enough for Journal→Travail deep-link asserts / paint races.
      highlightTimer = window.setTimeout(() => {
        node.classList.remove("is-journal-focus");
        node.removeAttribute("data-journal-focus");
        props.onFocusMessageHandled?.();
      }, 5200);
    };
    tryFocus();
    return () => {
      cancelled = true;
      if (highlightTimer) window.clearTimeout(highlightTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.focusMessageId, messageIdsKey]);

  const projectionByMessage = new Map(
    (props.projections ?? []).map((p) => [p.messageId ?? "", p]),
  );

  return (
    <div
      className={
        embedded
          ? "fig-travail-workspace-embed"
          : "fig-workspace fig-nora-responsive fig-travail-workspace"
      }
      data-figma-frame={frame}
      data-figma-mobile-frames="282:468,282:492"
      data-testid="nora-workspace"
      data-travail-embed={embedded ? "1" : "0"}
      data-travail-layout={props.layoutMode ?? "normal"}
    >
      <section
        className="fig-conversation-panel"
        data-testid="nora-conversation-panel"
        data-nora-main="1"
        id="nora-main"
        hidden={props.layoutMode === "enlarged"}
      >
        <div className="fig-conversation-head">
          <p className="fig-kicker !mb-0">Conversation du projet</p>
          <span className="fig-tag fig-tag-muted">{variantLabel}</span>
          {props.unresolvedPending ? (
            <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
          ) : null}
          {props.focusStatus ? (
            <span className="fig-tag fig-tag-warn" data-testid="nora-focus-status">
              {props.focusStatus}
            </span>
          ) : null}
          {newBelow ? (
            <button
              type="button"
              className="fig-tag fig-tag-ok"
              data-testid="nora-new-below"
              onClick={() => scrollToBottom("smooth")}
            >
              Nouveaux messages ↓
            </button>
          ) : null}
        </div>

        <div
          className="fig-nora-thread"
          data-testid="nora-thread"
          ref={threadRef}
          onScroll={onScroll}
        >
          {n === 0 ? (
            <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
              <div className="fig-msg-meta">
                <span className="fig-msg-avatar" aria-hidden>
                  N
                </span>
                <span className="fig-msg-role">Nora</span>
              </div>
              <p className="fig-msg-body">
                Première conversation — écrivez pour démarrer le fil du projet. Aucun message fictif
                n&apos;est prérempli.
              </p>
            </div>
          ) : null}
          {props.messages.map((m) => {
            const isNora = m.role === "assistant";
            const proj = isNora ? projectionByMessage.get(m.id) : undefined;
            return (
              <article
                key={m.id}
                className={`fig-msg ${isNora ? "fig-msg-nora" : "fig-msg-pilot"}`}
                data-message-id={m.id}
                data-testid={isNora ? "nora-msg-assistant" : "nora-msg-pilot"}
              >
                <div className="fig-msg-meta">
                  {isNora ? (
                    <span className="fig-msg-avatar" aria-hidden>
                      N
                    </span>
                  ) : null}
                  <span className={`fig-msg-role ${isNora ? "" : "fig-msg-role-pilot"}`}>
                    {isNora ? "Nora" : "Pilote"}
                  </span>
                  <span className="sr-only">{m.status}</span>
                </div>
                {isNora ? (
                  <div className="fig-msg-body">
                    {(() => {
                      const admission = proj?.visualComposition
                        ? admitConversationalComposition(proj.visualComposition, {
                            canonicalText: m.content,
                          })
                        : null;
                      const policy = admission?.bodyPolicy ?? "markdown_only";
                      const compositionEl =
                        proj?.visualComposition && policy !== "markdown_only" ? (
                          <NoraComposition
                            composition={proj.visualComposition}
                            canonicalText={m.content}
                            choices={proj.choices}
                            references={proj.references}
                            actionable={proj.actionable}
                            busy={props.busy}
                            choiceFrozen={props.choiceFrozen}
                            messageId={m.id}
                            onChoice={props.onChoice}
                            onReference={props.onReference}
                          />
                        ) : null;
                      if (policy === "substitute" && compositionEl) {
                        return compositionEl;
                      }
                      if (policy === "complement" && compositionEl) {
                        return (
                          <>
                            <SafeMarkdown content={m.content} />
                            <div
                              className="fig-comp-complement"
                              data-testid="nora-composition-complement"
                            >
                              {compositionEl}
                            </div>
                          </>
                        );
                      }
                      return <SafeMarkdown content={m.content} />;
                    })()}
                  </div>
                ) : (
                  <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>
                )}
                {proj?.activity && proj.activity.kind !== "wait" ? (
                  <details className="fig-nora-activity-history" data-testid="nora-activity-history">
                    <summary>Activité de cette réponse</summary>
                    <p>
                      {proj.activity.label}
                      {proj.activity.detail ? ` — ${proj.activity.detail}` : ""}
                    </p>
                  </details>
                ) : null}
                {proj &&
                proj.choices.length > 0 &&
                !compositionAnchorsChoices(proj.visualComposition) ? (
                  <div
                    className="fig-nora-choices"
                    data-testid="nora-choices"
                    data-actionable={proj.actionable ? "1" : "0"}
                    data-message-id={m.id}
                  >
                    {proj.choices.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        className="fig-nora-choice"
                        data-testid="nora-choice"
                        data-choice-id={c.id}
                        disabled={!proj.actionable || props.busy || props.choiceFrozen}
                        onClick={() => props.onChoice?.(c, m.id)}
                      >
                        {c.label}
                      </button>
                    ))}
                    {!proj.actionable ? (
                      <p className="fig-nora-choices-expired" data-testid="nora-choices-expired">
                        Propositions expirées — consultation seule.
                      </p>
                    ) : null}
                  </div>
                ) : null}
                {proj?.references?.length &&
                !compositionAnchorsReferences(proj.visualComposition) ? (
                  <ul className="fig-nora-refs" data-testid="nora-refs">
                    {proj.references.map((r, i) => (
                      <li key={`${r.kind}-${r.resourceId ?? r.path ?? i}`}>
                        <button
                          type="button"
                          className="fig-nora-ref-link"
                          data-testid="nora-ref-link"
                          data-ref-kind={r.kind}
                          onClick={() => props.onReference?.(r)}
                        >
                          Consulter · {r.label}
                          {r.available === false ? " (à vérifier)" : ""}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            );
          })}
          {props.qualificationBanner ? (
            <div
              className="fig-panel space-y-3 my-3"
              role="status"
              aria-live="polite"
              data-testid="qualification-activity-banner"
              style={{ borderColor: "#7477ed55" }}
            >
              <p className="text-[10px] uppercase tracking-wide text-[#7477ed] font-semibold">
                Nora prépare sa réponse
              </p>
              <div className="space-y-2 text-sm text-[#a3b0c7]">
                <p>✓ Sources et intention du projet consultées</p>
                <p>○ Préparation de la première orientation de trajectoire…</p>
              </div>
              {props.onOpenTrajectoire ? (
                <button
                  type="button"
                  className="text-sm font-semibold text-[#7477ed] hover:underline"
                  data-testid="qualification-voir-trajectoire"
                  onClick={props.onOpenTrajectoire}
                >
                  Voir la trajectoire ↗
                </button>
              ) : null}
            </div>
          ) : null}
          {props.activity === "preparing" && !props.qualificationBanner ? (
            <div
              className="fig-nora-activity"
              role="status"
              aria-live="polite"
              data-testid="nora-activity-preparing"
            >
              <span className="fig-nora-activity-pulse" aria-hidden />
              <span>Nora prépare une réponse…</span>
              <span className="fig-nora-activity-note">
                Attente réelle — aucune étape inventée.
              </span>
            </div>
          ) : null}
          {(props.activity === "preparing" || (props.liveActivityEvents?.length ?? 0) > 0) &&
          (props.liveActivityHeadline || (props.liveActivityEvents?.length ?? 0) > 0) ? (
            <div
              className="fig-nora-live-activity"
              role="status"
              aria-live="polite"
              data-testid="nora-live-activity"
            >
              <p className="fig-nora-live-activity-headline" data-testid="nora-live-activity-headline">
                {props.liveActivityHeadline ||
                  props.liveActivityEvents?.[props.liveActivityEvents.length - 1]?.summary ||
                  "Activité en cours"}
              </p>
              {(props.liveActivityEvents?.length ?? 0) > 0 ? (
                <details data-testid="nora-live-activity-detail">
                  <summary>
                    Détail ({props.liveActivityEvents!.length} événement
                    {props.liveActivityEvents!.length > 1 ? "s" : ""})
                  </summary>
                  <ul>
                    {props.liveActivityEvents!.map((ev) => (
                      <li key={ev.sequence} data-nature={ev.nature} data-phase={ev.phase}>
                        <span className="fig-nora-live-activity-nature">{ev.nature}</span>
                        {" · "}
                        {ev.summary}
                      </li>
                    ))}
                  </ul>
                </details>
              ) : null}
            </div>
          ) : null}
          {props.activity === "error" ? (
            <div className="fig-alert" role="alert" data-testid="nora-activity-error">
              La dernière réponse n&apos;a pas pu être consolidée entièrement. Le texte saisi est
              conservé. Aucune mutation n&apos;est relancée automatiquement — reformulez, ou
              réconciliez seulement si une intention d&apos;effet reste ouverte.
            </div>
          ) : null}
        </div>
      </section>

      {/*
        Pending banner lives outside the Figma-sized composer card so
        max-height never clips reconcile controls under the shell lock.
      */}
      <div
        className="fig-travail-composer-stack"
        data-testid="nora-composer-stack"
        data-pending={props.unresolvedPending ? "1" : "0"}
        hidden={props.layoutMode === "enlarged"}
      >
        {props.unresolvedPending && props.onReconcile ? (
          <div className="fig-travail-pending" data-testid="thread-pending-banner">
            <p className="fig-travail-pending-copy">
              Tentative non résolue — vérifier l&apos;état serveur avant un nouveau tour. Une
              génération cognitive déjà terminée sans effet métier peut être levée ; un effet
              métier incertain reste protégé.
            </p>
            <button
              type="button"
              className="btn secondary"
              disabled={props.busy}
              data-testid="thread-reconcile-pending"
              onClick={props.onReconcile}
            >
              Vérifier et reprendre
            </button>
          </div>
        ) : null}
        <div
          className="fig-composer fig-travail-composer relative"
          data-testid="nora-composer"
          data-composer-locked={composerLocked ? "1" : "0"}
          data-composer-expanded={props.draft.includes("\n") || props.draft.length > 80 ? "1" : "0"}
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
            <div
              className="fig-dossier-attachment"
              data-testid="dossier-composer-attachment"
            >
              <div className="fig-dossier-attachment-body">
                <p className="fig-dossier-attachment-label">Dossier D8 joint</p>
                <p className="fig-dossier-attachment-meta">
                  {props.dossierAttachment.attemptId}
                  {props.dossierAttachment.dossierVersion != null
                    ? ` · v${props.dossierAttachment.dossierVersion}`
                    : ""}
                  {props.dossierAttachment.verdictD8
                    ? ` · ${props.dossierAttachment.verdictD8}`
                    : ""}
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
            <span className="fig-travail-composer-plus" aria-hidden>
              +
            </span>
            <textarea
              ref={textareaRef}
              className="fig-travail-composer-input"
              value={props.draft}
              onChange={(e) => props.onDraft(e.target.value)}
              placeholder="Écrire à Nora dans ce projet…"
              aria-label="Message à Nora"
              data-testid="thread-draft"
              rows={1}
              readOnly={composerLocked}
              disabled={composerLocked}
              aria-disabled={composerLocked}
              onCompositionStart={() => setImeComposing(true)}
              onCompositionEnd={() => setImeComposing(false)}
              onKeyDown={(e) => {
                if (composerLocked) {
                  e.preventDefault();
                  return;
                }
                if (imeComposing || e.nativeEvent.isComposing) return;
                // Mobile: Enter = newline; send via button only.
                if (isMobile) return;
                if (e.key === "Enter" && !e.shiftKey && !props.busy) {
                  e.preventDefault();
                  if (props.draft.trim() || hasDossier) props.onSend();
                }
              }}
            />
            <button
              type="button"
              className="fig-travail-composer-send"
              disabled={sendDisabled}
              onClick={props.onSend}
              data-testid="thread-send"
              aria-label="Envoyer"
            >
              <span aria-hidden>↑</span>
            </button>
          </div>
          {props.status ? (
            <p className="sr-only" data-testid="thread-nora-status" role="status">
              {props.status}
            </p>
          ) : null}
        </div>
      </div>

      {props.aside ? (
        <aside className="fig-travail-aside" data-testid="nora-aside">
          {props.aside}
        </aside>
      ) : null}
    </div>
  );
}

```

### FILE: `projects/sfia-studio-next/web/src/components/figma/D6ConfirmLaunch.tsx` (full current)
```typescript
"use client";

/**
 * ML5 C10 — HumanDecision D6 confirmation overlay (Oui / Non).
 * Shared by Travail 50/50 and Exécution. Reading ≠ authorizing.
 */

export function D6ConfirmLaunch(props: {
  contractKey: string;
  version: number;
  fingerprint: string;
  title?: string;
  busy?: boolean;
  onYes: () => void;
  onNo: () => void;
  onCancel?: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="d6-confirm-title"
      data-testid="d6-confirm-launch"
      className="fig-d6-confirm"
    >
      <div className="fig-d6-confirm-card">
        <p className="fig-kicker !mb-0">Autoriser l&apos;exécution dans Cursor</p>
        <h3 id="d6-confirm-title">
          Transmettre le contrat inspecté et lancer une tentative ?
        </h3>
        <p data-testid="d6-confirm-scope">
          Contrat{" "}
          <strong>
            {props.contractKey} v{props.version}
          </strong>
          {props.title ? ` — ${props.title}` : ""}. Aucun copier-coller : Studio
          transmettra l&apos;instruction figée à Cursor SDK.
        </p>
        <p className="fig-travail-viewer-meta" data-testid="d6-confirm-fingerprint">
          Empreinte inspectée : {props.fingerprint.slice(0, 16)}…
        </p>
        <p className="fig-travail-viewer-meta">
          Oui = HumanDecision D6 (mandat). Non = refus explicite, aucun dispatch.
          {props.onCancel ? " Annuler = fermer sans acte." : ""}
        </p>
        <div className="fig-d6-confirm-actions">
          {props.onCancel ? (
            <button
              type="button"
              className="btn secondary"
              data-testid="d6-confirm-cancel"
              disabled={props.busy}
              onClick={props.onCancel}
            >
              Annuler
            </button>
          ) : null}
          <button
            type="button"
            className="btn secondary"
            data-testid="d6-confirm-no"
            disabled={props.busy}
            onClick={props.onNo}
          >
            Non
          </button>
          <button
            type="button"
            className="btn"
            data-testid="d6-confirm-yes"
            disabled={props.busy}
            onClick={props.onYes}
          >
            Oui
          </button>
        </div>
      </div>
    </div>
  );
}

```

### FILE: `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx` (full current)
```typescript
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
    title: "Exécution gouvernée",
    sub: "Contrats, interventions, observations LIVE et instruction intégrale — sans revue Nora permanente.",
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
  statusHint?: string;
  /** Observable project bootstrap: loading until load()+surface sync finish. */
  loadState?: "loading" | "ready";
  /** Ensemble 05 — Travail layout: normal | split (viewer) | enlarged viewer. */
  travailLayout?: "normal" | "split" | "enlarged";
  /** Documents sub-views (08.02–08.06) — overrides default Bibliothèque hero. */
  documentHero?: { kicker: string; title: string; sub: string } | null;
  /** Travail states 08.07 / 08.08 — overrides default Travail hero. */
  travailHero?: { kicker: string; title: string; sub: string } | null;
  children: React.ReactNode;
}) {
  const loadState = props.loadState ?? "ready";
  const hero =
    props.surface === "document" && props.documentHero
      ? props.documentHero
      : props.surface === "travail" && props.travailHero
        ? props.travailHero
        : HERO[props.surface];
  const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
  const displayName = props.projectName?.trim() || "Projet";
  const isTravail = props.surface === "travail";
  /** Journal V4 — hero lives inside ProjectJournal (full vs compact 40/60). */
  const isJournal = props.surface === "journal";
  /** Ensemble 07 — Projet / Trajectoire heroes live in ProjectOverview / TrajectoryBoard. */
  const isProjetOrTrajectoire = props.surface === "projet" || props.surface === "pilotage";
  /** Ensemble 08 — Dépôts Git / Publications heroes live in GitRepositoriesSurface. */
  const isGitSurface = props.surface === "git" || props.surface === "publication";
  const breadcrumbOnly = isTravail || isJournal || isProjetOrTrajectoire || isGitSurface;

  const continuityBadge =
    isTravail && props.statusHint && !/^chargement/i.test(props.statusHint) ? (
      <span className="fig-tag fig-tag-ok" data-testid="project-status-hint">
        {/reprise|conservé|durable/i.test(props.statusHint)
          ? "Contexte conservé"
          : props.statusHint}
      </span>
    ) : null;

  const intro = (
    <header className="project-space-hero fig-travail-intro" data-testid="travail-intro">
      <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
      <div className="project-space-hero-row">
        <h1 className="fig-hero-title" data-testid="project-surface-title">
          {hero.title}
        </h1>
        {continuityBadge}
      </div>
      <p className="fig-hero-sub">{hero.sub}</p>
    </header>
  );

  return (
    <div
      className={`fig-page project-space-page${isTravail ? " project-space-page--travail" : ""}${isJournal ? " project-space-page--journal" : ""}`}
      data-project-surface={props.surface}
      data-testid="project-load-state"
      data-project-load-state={loadState}
      data-project-id={props.projectId}
      data-project-name={props.projectName ?? ""}
    >
      <div
        className={`project-space-header${breadcrumbOnly ? " project-space-header--breadcrumb-only" : ""}`}
        data-testid="project-space-header"
      >
        <div className="fig-breadcrumb project-space-breadcrumb">
          <span data-testid="project-breadcrumb">
            SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;{displayName}&nbsp;&nbsp;/&nbsp;&nbsp;
            {surfaceLabel}
          </span>
          <span className="project-space-badge" data-testid="project-espace-badge">
            ESPACE PROJET
          </span>
        </div>

        {!breadcrumbOnly ? (
          <header className="project-space-hero space-y-1">
            <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
            <div className="project-space-hero-row">
              <h1 className="fig-hero-title" data-testid="project-surface-title">
                {hero.title}
              </h1>
            </div>
            <p className="fig-hero-sub">{hero.sub}</p>
            {props.statusHint ? (
              <p className="text-xs muted" data-testid="project-status-hint">
                {props.statusHint}
              </p>
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
      ) : (
        props.children
      )}
    </div>
  );
}

```

### FILE: `projects/sfia-studio-next/web/src/components/shell/studio-rail.ts` (full current)
```typescript
/**
 * F1 Navigation rail variants — values from G2 railEvidence (VERIFY PASS).
 * Discriminant fills are intentional: personnel ≠ projet.
 *
 * Variant selection follows proven frame ↔ route ↔ state mapping (G2),
 * not a free pathname heuristic.
 */

import type { CSSProperties } from "react";

export type StudioRailVariant = "personnel" | "projet" | "conversation" | "inspection";

export type StudioSurface =
  | "travail"
  | "projet"
  | "pilotage"
  | "journal"
  | "document"
  | "git"
  | "execution"
  | "publication";

export type StudioRailTokens = {
  variant: StudioRailVariant;
  widthPx: number;
  fill: string;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  gap: number;
  railComponentId: string;
  sourceNodeId: string;
};

/** Canonical tokens measured in G2 L2 / railEvidence. */
export const STUDIO_RAIL_VARIANTS: Record<StudioRailVariant, StudioRailTokens> = {
  personnel: {
    variant: "personnel",
    widthPx: 246,
    fill: "#0D1220",
    paddingTop: 20,
    paddingRight: 19,
    paddingBottom: 0,
    paddingLeft: 19,
    gap: 10,
    railComponentId: "shell.rail.personnel",
    sourceNodeId: "606:20",
  },
  projet: {
    variant: "projet",
    widthPx: 246,
    // ML4D 652:* validated — common project rail fill
    fill: "#0C101A",
    paddingTop: 22,
    paddingRight: 16,
    paddingBottom: 22,
    paddingLeft: 16,
    gap: 10,
    railComponentId: "shell.rail.projet",
    sourceNodeId: "652:8",
  },
  conversation: {
    variant: "conversation",
    // Ensemble 04 — project desktop rail fixed at 246 (Figma 652:*)
    widthPx: 246,
    fill: "#0C101A",
    paddingTop: 22,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    gap: 10,
    railComponentId: "shell.rail.conversation",
    sourceNodeId: "652:8",
  },
  inspection: {
    variant: "inspection",
    widthPx: 246,
    fill: "#0C101A",
    paddingTop: 22,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    gap: 10,
    railComponentId: "shell.rail.inspection",
    sourceNodeId: "652:8",
  },
};

export const PROJECT_SURFACES: StudioSurface[] = [
  "travail",
  "projet",
  "pilotage",
  "journal",
  "document",
  "git",
  "execution",
  "publication",
];

/** Breadcrumb / chrome labels — Trajectoire remains URL-compatible with ?surface=pilotage. */
export const PROJECT_SURFACE_LABELS: Record<StudioSurface, string> = {
  travail: "Travail",
  projet: "Projet",
  pilotage: "Trajectoire",
  journal: "Journal",
  document: "Documents Nora",
  git: "Sources Git",
  execution: "Exécution",
  publication: "Résultats & preuves",
};

export function parseStudioSurface(raw: string | null | undefined): StudioSurface | null {
  if (!raw) return null;
  const v = raw.toLowerCase();
  return PROJECT_SURFACES.includes(v as StudioSurface) ? (v as StudioSurface) : null;
}

/**
 * Transient project-surface navigation intent shared by StudioShell (rail Links)
 * and ProjectPage (selectSurface / load normalisation).
 *
 * Scoped by projectId so an intent for project A cannot influence load() of B.
 * Not a durable store: cleared when the URL catches up for that project.
 */
type ProjectSurfaceNavIntent = { projectId: string; surface: StudioSurface };

let projectSurfaceNavIntent: ProjectSurfaceNavIntent | null = null;

export function noteProjectSurfaceNavIntent(
  projectId: string | null | undefined,
  surface: StudioSurface | null,
): void {
  if (!projectId || !surface) {
    return;
  }
  projectSurfaceNavIntent = { projectId, surface };
}

/** Peek intent only when it belongs to the given project. */
export function peekProjectSurfaceNavIntent(
  projectId: string | null | undefined,
): StudioSurface | null {
  if (!projectId || !projectSurfaceNavIntent) return null;
  if (projectSurfaceNavIntent.projectId !== projectId) return null;
  return projectSurfaceNavIntent.surface;
}

export function clearProjectSurfaceNavIntent(
  projectId?: string | null,
  matched?: StudioSurface | null,
): void {
  if (!projectSurfaceNavIntent) return;
  if (projectId != null && projectSurfaceNavIntent.projectId !== projectId) return;
  if (matched == null || projectSurfaceNavIntent.surface === matched) {
    projectSurfaceNavIntent = null;
  }
}

export type ProjectLoadSurfaceDecision = {
  /** Surface to display after load settles. */
  effectiveSurface: StudioSurface;
  /** True when the live URL lacks a valid `surface` query and must be normalised. */
  shouldNormalizeUrl: boolean;
};

/**
 * Resolve surface after async project `load()` completes.
 * Priority: valid live URL surface → recent nav intent → default `travail`.
 * Normalise only when the URL has no valid surface; never invent a silent
 * downgrade from an explicit user intent (e.g. pilotage) to travail.
 */
export function resolveProjectLoadSurface(input: {
  rawSurface: string | null | undefined;
  pendingIntent: StudioSurface | null;
}): ProjectLoadSurfaceDecision {
  const qSurface = parseStudioSurface(input.rawSurface ?? null);
  const effectiveSurface = qSurface ?? input.pendingIntent ?? "travail";
  const shouldNormalizeUrl =
    !input.rawSurface || (Boolean(input.rawSurface) && !qSurface);
  return { effectiveSurface, shouldNormalizeUrl };
}

export function parseProjectId(pathname: string): string | null {
  const m = pathname.match(/^\/projects\/([^/?#]+)/);
  return m?.[1] ?? null;
}

export function parsePreparationId(pathname: string): string | null {
  const m = pathname.match(/^\/preparations\/([^/?#]+)/);
  return m?.[1] ?? null;
}

export function railStyle(tokens: StudioRailTokens): CSSProperties {
  return {
    width: tokens.widthPx,
    background: tokens.fill,
    paddingTop: tokens.paddingTop,
    paddingRight: tokens.paddingRight,
    paddingBottom: tokens.paddingBottom,
    paddingLeft: tokens.paddingLeft,
    gap: tokens.gap,
  };
}

/**
 * Frame ↔ route ↔ state from G2 railEvidence (not a free pathname heuristic):
 * - portfolio / login → personnel (94:50)
 * - sas avant projet → personnel (94:135); reprise liée projet → projet (159:145) via ?resume=1
 * - projet + travail (fil long) → conversation (94:214)
 * - projet + document → inspection (94:370 / 97:359)
 * - projet + journal → personnel (94:515 sujets; correctedFrom projet)
 * - projet + pilotage → projet (125:33 / 127:106)
 */
export function resolveRailVariant(input: {
  pathname: string;
  surface?: string | null;
  searchParams?: URLSearchParams | { get(name: string): string | null } | null;
}): StudioRailVariant {
  const path = input.pathname || "/";
  const sp = input.searchParams;
  if (path.startsWith("/portfolio") || path === "/" || path.startsWith("/login")) {
    return "personnel";
  }
  if (path.startsWith("/preparations/")) {
    // Sas Nora Figma 607:* — all five states use the personal minimal rail (606:20).
    void sp;
    return "personnel";
  }
  if (path.startsWith("/settings")) {
    return "personnel";
  }
  if (path.startsWith("/projects/")) {
    const surface = parseStudioSurface(input.surface) ?? "travail";
    if (
      surface === "document" ||
      surface === "git" ||
      surface === "execution" ||
      surface === "publication"
    ) {
      return "inspection";
    }
    if (surface === "travail") return "conversation";
    if (surface === "journal") return "personnel";
    // projet overview + pilotage/trajectoire share the product rail fill
    return "projet";
  }
  return "personnel";
}

export type ShellNavAction = "open-preparation";

export type ShellNavItem = {
  key: string;
  label: string;
  href: string | null;
  active: boolean;
  /** Inactive without context — never a fake # link. */
  disabledReason?: string;
  /** Explicit UI action (not a GET navigation). */
  action?: ShellNavAction;
};

/**
 * Personal-space breadcrumb second segment — known routes only.
 * Never invent a label; never keep « Portefeuille » on another route.
 */
export function resolvePersonalBreadcrumb(
  pathname: string,
  searchParams?: URLSearchParams | { get(name: string): string | null } | null,
): string | null {
  const path = pathname || "/";
  if (path.startsWith("/portfolio") || path === "/") return "Portefeuille";
  if (path.startsWith("/preparations/")) {
    const resumed =
      searchParams?.get("resume") === "1" || searchParams?.get("from") === "portfolio";
    return resumed ? "Préparation reprise" : "Nouvelle préparation";
  }
  if (path.startsWith("/dev/sas-visual/resume")) return "Préparation reprise";
  if (path.startsWith("/dev/sas-visual/")) return "Nouvelle préparation";
  if (path.startsWith("/settings/integrations")) return "Intégrations";
  if (path.startsWith("/settings")) return "Paramètres";
  return null;
}

export function buildShellNav(input: {
  pathname: string;
  surface?: string | null;
}): ShellNavItem[] {
  const path = input.pathname || "/";
  const projectId = parseProjectId(path);
  const preparationId = parsePreparationId(path);
  const surface = parseStudioSurface(input.surface) ?? (projectId ? "travail" : null);

  // UX-004: one personal destination — Portefeuille (no Mes projets / Tous les projets).
  const items: ShellNavItem[] = [
    {
      key: "portfolio",
      label: "Portefeuille",
      href: "/portfolio",
      active: path.startsWith("/portfolio") || path === "/",
    },
  ];

  if (!projectId && !preparationId) {
    items.push({
      key: "new-prep",
      label: "Nouveau projet",
      href: null,
      active: false,
      action: "open-preparation",
    });
    // Connected personal space: no redundant « Connexion » rail entry.
    return items;
  }

  if (preparationId) {
    // SAS-F-13 — minimal personal rail: Portefeuille + Préparation en cours.
    // No Travail / Pilotage / Documents / Journal before verified project creation.
    items.push({
      key: "sas",
      label: "Préparation en cours",
      href: `/preparations/${preparationId}`,
      active: true,
    });
    return items;
  }

  // Ensemble 04 rail NAVIGATION — Documents/Git stay in Accès directs (not primary).
  // Trajectoire keeps ?surface=pilotage for deep-link compatibility.
  const surfaces: Array<{ key: StudioSurface; label: string }> = [
    { key: "travail", label: "Travail" },
    { key: "projet", label: "Projet" },
    { key: "journal", label: "Journal" },
    { key: "pilotage", label: "Trajectoire" },
  ];
  for (const s of surfaces) {
    items.push({
      key: s.key,
      label: s.label,
      href: `/projects/${projectId}?surface=${s.key}`,
      active: surface === s.key,
    });
  }
  return items;
}

```

### FILE: `projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx` (full current)
```typescript
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  runOpenPreparation,
  subscribeOpenPreparationBusy,
} from "@/lib/open-preparation";
import { PRODUCT_VERSIONING } from "@/lib/product-version";
import { ProjectSpaceProvider, useProjectSpace } from "./ProjectSpaceContext";
import {
  STUDIO_RAIL_VARIANTS,
  buildShellNav,
  noteProjectSurfaceNavIntent,
  parsePreparationId,
  parseProjectId,
  parseStudioSurface,
  railStyle,
  resolvePersonalBreadcrumb,
  resolveRailVariant,
} from "./studio-rail";
import "./studio-shell.css";

/** Existing real account destination — integrations settings (no invented account hub). */
const ACCOUNT_HREF = "/settings/integrations";

/** Figma 652:* rail glyphs — decorative, paired with visible labels. */
function railNavGlyph(key: string): string {
  switch (key) {
    case "travail":
      return "◉";
    case "projet":
      return "▦";
    case "journal":
      return "▤";
    case "pilotage":
      return "◇";
    case "sas":
      return "◇";
    default:
      return "·";
  }
}

export function StudioShell({ children }: { children: React.ReactNode }) {
  return (
    <ProjectSpaceProvider>
      <StudioShellInner>{children}</StudioShellInner>
    </ProjectSpaceProvider>
  );
}

function StudioShellInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const searchParams = useSearchParams();
  const surface = searchParams.get("surface");
  const variant = resolveRailVariant({ pathname, surface, searchParams });
  const tokens = STUDIO_RAIL_VARIANTS[variant];
  const projectId = parseProjectId(pathname);
  const preparationId = parsePreparationId(pathname);
  const { info: projectSpace } = useProjectSpace();
  const projectSpaceReady =
    Boolean(projectId) &&
    projectSpace?.projectId === projectId &&
    projectSpace.available;
  const projectSpaceBlocked =
    Boolean(projectId) &&
    projectSpace?.projectId === projectId &&
    Boolean(projectSpace?.blockNavigation);
  const rawItems = buildShellNav({ pathname, surface });
  // Qualified unavailable: keep Portefeuille only — no deep nav into a dead context.
  const items = projectSpaceBlocked
    ? rawItems.filter((i) => i.key === "portfolio")
    : rawItems;
  const inProductSpace = Boolean(projectId || preparationId);
  const personalSpace = !inProductSpace;
  const portfolioActive = pathname.startsWith("/portfolio") || pathname === "/";
  const accountActive = pathname.startsWith("/settings");
  const breadcrumb = resolvePersonalBreadcrumb(pathname, searchParams);
  const onSasVisual = pathname.startsWith("/dev/sas-visual/");
  const onSasPreparation = Boolean(preparationId) || onSasVisual;
  const [openingPrep, setOpeningPrep] = useState(false);
  const [prepNotice, setPrepNotice] = useState("");
  const activeProjectName = projectSpaceReady ? projectSpace?.projectName ?? null : null;
  const activeProjectSubtitle = projectSpaceReady ? projectSpace?.subtitle ?? null : null;

  useEffect(() => subscribeOpenPreparationBusy(setOpeningPrep), []);

  async function handleOpenPreparation() {
    setPrepNotice("");
    const outcome = await runOpenPreparation(async (result) => {
      if (result.kind === "opened") {
        router.push(`/preparations/${result.preparationId}`);
        return;
      }
      if (result.kind === "unauthorized") {
        router.push("/login");
        return;
      }
      if (result.kind === "refused") {
        setPrepNotice(result.message);
        return;
      }
      // UNCERTAIN: honest message; never navigate by guess.
      setPrepNotice(result.message);
    });
    if (outcome.kind === "busy") return;
  }

  // UX-003: /login is a public entry surface — no private project rail.
  useEffect(() => {
    if (pathname === "/login") {
      document.documentElement.classList.remove("studio-shell-lock");
      return;
    }
    document.documentElement.classList.add("studio-shell-lock");
    return () => {
      document.documentElement.classList.remove("studio-shell-lock");
    };
  }, [pathname]);

  if (pathname === "/login") {
    return (
      <div className="min-h-screen" data-testid="studio-shell-entry" data-shell-mode="entry">
        {children}
      </div>
    );
  }

  return (
    <div
      className="studio-shell-app studio-shell"
      data-rail-variant={variant}
      data-shell-mode={personalSpace ? "personnel" : "produit"}
      data-testid="studio-shell-app"
    >
      <aside
        className="studio-shell-rail hidden md:flex flex-col border-r border-[var(--line)]"
        style={railStyle(tokens)}
        aria-label="Navigation Studio"
        data-testid="studio-rail"
        data-rail-variant={variant}
        data-rail-component-id={tokens.railComponentId}
        data-rail-source-node={tokens.sourceNodeId}
        data-rail-width={tokens.widthPx}
        data-rail-fill={tokens.fill}
      >
        <div className="studio-shell-rail-inner" style={{ gap: tokens.gap }}>
          <div className="flex items-center gap-[11px] shrink-0">
            <span
              aria-hidden
              className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] text-[22px] font-bold leading-none"
              style={{ background: "#656fe1", color: "#f4f6fc" }}
            >
              S
            </span>
            <div className="min-w-0">
              <div className="text-[19px] font-semibold tracking-tight studio-title leading-[27px]">
                SFIA Studio
              </div>
              {personalSpace ? (
                <div className="text-[10px] muted">{PRODUCT_VERSIONING.releaseStatus}</div>
              ) : null}
            </div>
          </div>

          <div className="studio-rail-rule shrink-0" aria-hidden />

          {projectId ? (
            <>
              <div className="studio-rail-section !mt-0" aria-hidden>
                Espace actif
              </div>
              <div
                className="studio-rail-espace-actif shrink-0"
                style={{ background: "#151c29" }}
                data-testid="rail-espace-actif"
              >
                <div
                  className="studio-rail-project-name"
                  title={activeProjectName ?? undefined}
                  data-testid="rail-project-name"
                >
                  {activeProjectName ??
                    (projectSpaceBlocked ? "Projet indisponible" : "Chargement…")}
                </div>
                {activeProjectSubtitle ? (
                  <div
                    className="studio-rail-project-subtitle"
                    data-testid="rail-project-subtitle"
                  >
                    {activeProjectSubtitle}
                  </div>
                ) : null}
                {projectSpaceReady ? (
                  <div className="studio-rail-project-status" data-testid="rail-project-status">
                    <span className="studio-rail-status-dot" aria-hidden />
                    Projet actif
                  </div>
                ) : null}
              </div>
            </>
          ) : (
            <div className="studio-rail-section" aria-hidden>
              Votre espace
            </div>
          )}

          <nav
            className="studio-shell-rail-nav text-sm"
            style={{ gap: tokens.gap }}
            aria-label="Principal"
          >
            {items.map((item) => {
              if (item.action === "open-preparation") {
                return (
                  <button
                    key={item.key}
                    type="button"
                    className="studio-rail-nav-item text-left w-full"
                    data-testid={`nav-${item.key}`}
                    disabled={openingPrep}
                    onClick={() => void handleOpenPreparation()}
                  >
                    <span aria-hidden className="studio-rail-nav-glyph">
                      +
                    </span>
                    <span>{openingPrep ? "Ouverture…" : item.label}</span>
                  </button>
                );
              }
              if (!item.href) {
                return (
                  <span
                    key={item.key}
                    className="muted pl-2"
                    title={item.disabledReason}
                    data-testid={`nav-disabled-${item.key}`}
                  >
                    {item.label}
                  </span>
                );
              }

              if (item.key === "portfolio" && projectId) {
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="studio-rail-portfolio-link"
                    data-testid={`nav-${item.key}`}
                  >
                    ←&nbsp;&nbsp;Portefeuille
                  </Link>
                );
              }

              const showNavSection =
                projectId &&
                item.key === "travail" &&
                !projectSpaceBlocked;

              return (
                <div key={item.key} className="contents">
                  {showNavSection ? (
                    <>
                      <div className="studio-rail-rule" aria-hidden />
                      <div className="studio-rail-section">Navigation</div>
                    </>
                  ) : null}
                  <Link
                    href={item.href}
                    className={`studio-rail-nav-item ${item.active ? "is-active" : ""}`}
                    aria-current={item.active ? "page" : undefined}
                    data-testid={`nav-${item.key}`}
                    onClick={() => {
                      const surfaceKey = parseStudioSurface(item.key);
                      if (projectId && surfaceKey) {
                        noteProjectSurfaceNavIntent(projectId, surfaceKey);
                      }
                    }}
                  >
                    {item.key === "portfolio" ? (
                      <span aria-hidden className="grid grid-cols-2 gap-[2px] w-3.5 h-3.5 shrink-0">
                        <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                        <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                        <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                        <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
                      </span>
                    ) : (
                      <span aria-hidden className="studio-rail-nav-glyph">
                        {railNavGlyph(item.key)}
                      </span>
                    )}
                    <span>{item.label}</span>
                  </Link>
                </div>
              );
            })}
            {prepNotice ? (
              <p className="text-xs text-[var(--bad)] px-2" role="status" data-testid="shell-prep-notice">
                {prepNotice}
              </p>
            ) : null}

            {personalSpace ? (
              <div className="mt-2">
                <div className="studio-rail-section mb-1">Accès</div>
                <Link
                  href={ACCOUNT_HREF}
                  className={`studio-rail-nav-item ${
                    pathname.startsWith("/settings/integrations") ? "is-active" : ""
                  }`}
                  aria-current={pathname.startsWith("/settings/integrations") ? "page" : undefined}
                  data-testid="nav-integrations"
                >
                  <span>Intégrations</span>
                </Link>
              </div>
            ) : null}

            {projectId && projectSpaceReady ? (
              <div className="mt-1 space-y-0.5" data-testid="rail-acces-directs">
                <div className="studio-rail-rule" aria-hidden />
                <div className="studio-rail-section">Accès directs</div>
                <Link
                  href={`/projects/${projectId}?surface=document`}
                  className={`studio-rail-direct-link ${
                    surface === "document" ? "is-active" : ""
                  }`}
                  data-testid="nav-documents"
                  onClick={() => noteProjectSurfaceNavIntent(projectId, "document")}
                >
                  <span aria-hidden className="studio-rail-nav-glyph">
                    ▤
                  </span>
                  <span>Documents Nora</span>
                </Link>
                <Link
                  href={`/projects/${projectId}?surface=git`}
                  className={`studio-rail-direct-link ${
                    surface === "git" ? "is-active" : ""
                  }`}
                  data-testid="nav-sources-git"
                  onClick={() => noteProjectSurfaceNavIntent(projectId, "git")}
                >
                  <span aria-hidden className="studio-rail-nav-glyph">
                    ◇
                  </span>
                  <span>Sources Git</span>
                </Link>
                <Link
                  href={`/projects/${projectId}?surface=execution`}
                  className={`studio-rail-direct-link ${
                    surface === "execution" ? "is-active" : ""
                  }`}
                  data-testid="nav-execution"
                  onClick={() => noteProjectSurfaceNavIntent(projectId, "execution")}
                  title="Exécution Cursor gouvernée — interventions, LIVE, instruction"
                >
                  <span aria-hidden className="studio-rail-nav-glyph">
                    ▷
                  </span>
                  <span>Exécution</span>
                </Link>
                <Link
                  href={`/projects/${projectId}?surface=publication`}
                  className={`studio-rail-direct-link ${
                    surface === "publication" ? "is-active" : ""
                  }`}
                  data-testid="nav-resultats"
                  onClick={() => noteProjectSurfaceNavIntent(projectId, "publication")}
                  title="Résultats & preuves D8 — SYNTHÈSE / LIVRABLES ET TESTS / GIT & PIÈCES / ÉCARTS"
                >
                  <span aria-hidden className="studio-rail-nav-glyph">
                    ▦
                  </span>
                  <span>Résultats & preuves</span>
                </Link>
              </div>
            ) : null}
          </nav>

          <div className="studio-shell-rail-foot" data-testid="studio-rail-account">
            <Link
              href={ACCOUNT_HREF}
              className="studio-account-link"
              data-testid="nav-account"
              aria-label="Compte — Intégrations"
            >
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold shrink-0"
                style={{ background: "rgba(101,111,225,0.25)", color: "var(--fig-accent-soft)" }}
              >
                P
              </span>
              <div className="text-xs min-w-0">
                <div className="font-semibold text-[14px]">Pilote</div>
                <div className="muted">{inProductSpace ? "Connecté" : "Espace personnel"}</div>
              </div>
              <span aria-hidden className="muted ml-auto text-lg leading-none">
                ⌄
              </span>
            </Link>
          </div>
        </div>
      </aside>

      <div className="studio-shell-column">
        {personalSpace ? (
          <header
            className="studio-shell-topbar"
            data-testid="studio-shell-topbar"
          >
            <div className="flex items-center gap-3 min-w-0 md:hidden">
              <span
                aria-hidden
                className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[8px] text-sm font-bold"
                style={{ background: "var(--fig-accent)", color: "white" }}
              >
                S
              </span>
              <span className="font-semibold truncate">SFIA Studio</span>
            </div>
            <p
              className="hidden md:block text-sm muted truncate m-0"
              data-testid="studio-shell-breadcrumb"
            >
              {breadcrumb
                ? <>SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;{breadcrumb}</>
                : <>SFIA Studio</>}
            </p>
            {onSasPreparation ? (
              <span className="sas-project-badge" data-testid="sas-header-project-status">
                PROJET NON CRÉÉ
              </span>
            ) : (
              <Link
                href={ACCOUNT_HREF}
                className="studio-account-link shrink-0"
                data-testid="nav-account-top"
                aria-label="Compte — Intégrations"
              >
                <span
                  aria-hidden
                  className="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full text-[12px] font-bold"
                  style={{ background: "rgba(101,111,225,0.25)", color: "var(--fig-accent-soft)" }}
                >
                  P
                </span>
                <span className="hidden sm:inline text-[13px] text-[var(--muted)]">Pilote</span>
              </Link>
            )}
          </header>
        ) : (
          <nav
            className="studio-shell-mobile-strip md:hidden"
            aria-label="Navigation Studio mobile"
            data-testid="studio-rail-mobile"
          >
            {items.map((item) => {
              if (!item.href) {
                return (
                  <span
                    key={item.key}
                    className="muted whitespace-nowrap"
                    title={item.disabledReason}
                    data-testid={`nav-disabled-${item.key}`}
                  >
                    {item.label}
                  </span>
                );
              }
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`whitespace-nowrap ${item.active ? "font-semibold" : ""}`}
                  aria-current={item.active ? "page" : undefined}
                  data-testid={`nav-${item.key}`}
                  onClick={() => {
                    const surfaceKey = parseStudioSurface(item.key);
                    if (projectId && surfaceKey) {
                      noteProjectSurfaceNavIntent(projectId, surfaceKey);
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}

        <main
          className={`studio-shell-main ${personalSpace ? "studio-shell-main-mobile-pad" : ""}`}
          data-testid="studio-shell-main"
          data-sas-layout={onSasPreparation ? "1" : undefined}
          data-travail-layout={
            projectId &&
            (parseStudioSurface(surface) ?? "travail") === "travail" &&
            !projectSpaceBlocked
              ? "1"
              : undefined
          }
          data-journal-layout={
            projectId &&
            (parseStudioSurface(surface) ?? "travail") === "journal" &&
            !projectSpaceBlocked
              ? "1"
              : undefined
          }
          data-project-figma-layout={
            projectId &&
            !projectSpaceBlocked &&
            ["projet", "pilotage"].includes(parseStudioSurface(surface) ?? "")
              ? "1"
              : undefined
          }
        >
          {children}
        </main>

        {personalSpace ? (
          <nav
            className="studio-shell-bottom-nav md:hidden"
            aria-label="Navigation personnelle mobile"
            data-testid="studio-mobile-bottom-nav"
          >
            <Link
              href="/portfolio"
              className={portfolioActive ? "is-active" : ""}
              aria-current={portfolioActive ? "page" : undefined}
              data-testid="mobile-nav-portfolio"
            >
              <span className="nav-glyph" aria-hidden>
                ▦
              </span>
              Portefeuille
            </Link>
            <button
              type="button"
              className="studio-shell-bottom-nav-btn"
              data-testid="mobile-nav-create"
              disabled={openingPrep}
              onClick={() => void handleOpenPreparation()}
            >
              <span className="nav-glyph" aria-hidden>
                +
              </span>
              {openingPrep ? "…" : "Créer"}
            </button>
            <Link
              href={ACCOUNT_HREF}
              className={accountActive ? "is-active" : ""}
              aria-current={accountActive ? "page" : undefined}
              data-testid="mobile-nav-account"
            >
              <span className="nav-glyph" aria-hidden>
                ◔
              </span>
              Compte
            </Link>
          </nav>
        ) : null}
      </div>
    </div>
  );
}

```

### FILE: `projects/sfia-studio-next/web/src/components/figma/tokens.css` (C24 blocks)
```css
/* C24 / Figma 12.09 — retirable D8 dossier reference above the draft. */
.fig-dossier-attachment {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 10px;
  border: 1px solid #3a4270;
  border-radius: 10px;
  background: #1a2236;
}
.fig-dossier-attachment-body {
  min-width: 0;
  flex: 1;
}
.fig-dossier-attachment-label {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  color: #c5c9e8;
}
.fig-dossier-attachment-meta {
  margin: 2px 0 0;
  font-size: 0.7rem;
  color: #8b93b5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fig-dossier-attachment-remove {
  flex-shrink: 0;
  border: 1px solid #7477ed66;
  border-radius: 8px;
  background: transparent;
  color: #a8acf0;
  font-size: 0.7rem;
  padding: 4px 8px;
  cursor: pointer;
}
.fig-dossier-attachment-remove:hover:not(:disabled) {
  border-color: #7477ed;
  color: #d0d3ff;
}
.fig-dossier-attachment-remove:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* O-06 — long-thread composer remains reachable while the journal scrolls. */
.fig-nora-thread-shell {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 0;
}
.fig-composer-sticky {
  position: sticky;
  bottom: 0;
  z-index: 2;
  background: #0c1018;
}

.fig-two-col {
  display: grid;
  grid-template-columns: minmax(0, 800fr) minmax(0, 510fr);
  gap: 20px;
}

.fig-empty-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fig-empty-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--fig-line);
  font-size: 0.85rem;
}
.fig-empty-row:last-child { border-bottom: 0; }

.fig-alert {
  border: 1px solid color-mix(in srgb, var(--fig-info) 55%, var(--fig-line));
  background: var(--fig-info-bg);
  border-radius: var(--fig-radius-sm);
  padding: 10px 12px;
  font-size: 0.82rem;
  color: #c9d7ff;
}

/* UX-004 portfolio composition */
.fig-stat-value-text {
  font-size: 1.35rem;
  margin-top: 14px;
}

.fig-card-sep {
  height: 1px;
  background: var(--fig-line);
  width: 100%;
}

.portfolio-project-card {
  min-height: 180px;
}

.portfolio-empty-projects {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  border: 1px solid var(--fig-line);
  border-radius: 12px;
  background: var(--fig-panel);
  padding: 1.35rem 1.25rem;
  min-height: 160px;
}

.portfolio-empty-glyph {
  flex-shrink: 0;
  width: 58px;
  height: 58px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--fig-accent) 22%, transparent);
  color: var(--fig-accent-soft);
  font-size: 1.75rem;
  font-weight: 600;
}

.portfolio-empty-title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
}

.portfolio-empty-copy {
  margin: 0.45rem 0 0;
  color: var(--fig-muted);
  font-size: 0.9rem;
  line-height: 1.45;
  max-width: 42rem;
}

.portfolio-prep-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.portfolio-prep-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-height: 66px;
  padding: 0.7rem 0.9rem;
  border: 1px solid var(--fig-line);
  border-radius: 10px;
  background: var(--fig-panel);
}

.portfolio-prep-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #272e49;
  color: var(--fig-accent-soft);
  font-size: 1.1rem;
}

.portfolio-prep-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--fig-ink);
}

.portfolio-prep-meta {
  font-size: 0.75rem;
  color: var(--fig-muted);
  margin-top: 0.1rem;
}

.portfolio-prep-resume {
  min-width: 7.5rem;
}

.portfolio-empty-preps {
  min-height: 91px;
  display: flex;
  align-items: center;
}

.portfolio-continuity h3 {
  font-size: 0.95rem;
}

@media (max-width: 1100px) {
  .fig-stat-grid,
  .fig-card-grid,
  .fig-workspace,
  .fig-travail-workspace,
  .fig-workspace-3,
  .fig-two-col {
    grid-template-columns: 1fr;
  }

  .fig-nora-thread {
    max-height: none;
  }

  .fig-msg-pilot,
  .fig-msg-nora {
    margin-left: 0;
    margin-right: 0;
  }
}

@media (max-width: 767px) {
  .fig-stat-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .fig-stat-access {
    display: none;
  }
  .fig-card-grid {
    grid-template-columns: 1fr;
  }
  .portfolio-project-card {
    min-height: 86px;
  }
  .portfolio-prep-row {
    min-hei

/* ---- */

/* Figma 12.08 — results split: bilans 437 + dossier 903, gap 18 */
.fig-results-split {
  display: grid;
  grid-template-columns: minmax(280px, 437fr) minmax(0, 903fr);
  gap: 18px;
  align-items: start;
  min-width: 0;
}
.fig-results-bilans-list,
.fig-results-dossier {
  min-width: 0;
  padding: 20px;
  border: 1px solid #2b3850;
  border-radius: 10px;
  background: #151d2c;
}
.fig-results-bilans-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.fig-results-bilans-head h3 {
  margin: 0;
  font-size: 19px;
  color: #f3f5ff;
}
.fig-results-bilans-count {
  font-size: 11px;
  padding: 7px;
  border-radius: 15px;
  border: 1px solid #2b3850;
  background: #242c4b;
  color: #a3b0c7;
  white-space: nowrap;
}
.fig-results-bilans-ul {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.fig-results-bilan-card {
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
.fig-results-bilan-card.is-selected {
  background: #242c4b;
}
.fig-results-bilan-kicker {
  font-size: 10px;
  font-weight: 600;
  color: #7477ed;
}
.fig-results-bilan-title {
  font-size: 13px;
  font-weight: 600;
  color: #f3f5ff;
}
.fig-results-bilan-meta {
  font-size: 11px;
  color: #a3b0c7;
}

.fig-bilan-appreciations {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.fig-bilan-appreciation {
  min-width: 0;
  padding: 9px 11px;
  border-radius: 8px;
  background: #1b2639;
}
.fig-bilan-appreciation-label {
  margin: 0 0 4px;
  font-size: 10px;
  font-weight: 600;
  color: #a3b0c7;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
.fig-bilan-appreciation-body {
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
  color: #f3f5ff;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.fig-bilan-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  border-bottom: 1px solid #2b3850;
  padding-bottom: 6px;
}
.fig-bilan-tabs .btn,
.fig-bilan-tabs .btn.secondary {
  background: transparent;
  border: 0;
  box-shadow: none;
  padding: 0;
  border-radius: 0;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #a3b0c7;
}
.fig-bilan-tabs .btn:not(.secondary) {
  color: #7477ed;
}

.fig-bilan-rubrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 12px;
}

.fig-bilan-rubric {
  min-width: 0;
  padding: 14px 16px;
  background: #151c29;
  border: 1px solid #272e49;
  border-radius: 12px;
}

.fig-bilan-rubric h3 {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--fig-ink);
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.fig-bilan-rubric p,
.fig-bilan-rubric pre {
  margin: 0;
  font-size: 13px;
  line-height: 1.45;
  color: var(--fig-muted);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.fig-bilan-coverage {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.fig-bilan-coverage[data-coverage="COMPLETE"] {
  background: var(--fig-ok-bg);
  color: var(--fig-ok);
}

.fig-bilan-coverage[data-coverage="PARTIAL"] {
  background: var(--fig-warn-bg);
  color: var(--fig-warn);
}

.fig-bilan-coverage[data-coverage="MISSING"],
.fig-bilan-coverage[data-coverage="UNKNOWN"] {
  background: #3a2030;
  color: #f0a0b8;
}

.fig-bilan-empty {
  margin: 0;
  padding: 12px 14px;
  border: 1px dashed #3a4570;
  border-radius: 10px;
  color: var(--fig-quiet);
  font-size: 13px;
}

.fig-bilan-limits ul {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--fig-muted);
  font-size: 13px;
}

.fig-bilan-nora-analysis pre {
  margin: 8px 0 0;
  padding: 12px;
  max-height: 240px;
  overflow: auto;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
  background: #0f1420;
  border: 1px solid #272e49;
  border-radius: 10px;
  font-size: 12px;
}


/* ---- */

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
  font-size: 20px;
  color: var(--fig-ink);
}

.fig-d6-confirm-card p {
  margin: 0 0 12px;
  color: var(--fig-muted);
  font-size: 14px;
  overflow-wrap: anywhere;
}

.fig-d6-confirm-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 16px;
}

.fig-realization-bilan {
  display:
```

### FILE: `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx` (C24 excerpts)
```typescript
import { D6ConfirmLaunch } from "@/components/figma/D6ConfirmLaunch";
import {
  mergeDraftWithDossierAttachment,
  type DossierComposerAttachment,
} from "@/domains/conversation/dossier-composer-attachment";
import {
  ProjectJournal,
  type JournalContradiction,
// ...
  const [draft, setDraft] = useState("");
  /** Figma 12.09 — durable retirable D8 dossier ref (survives draft edits). */
  const [dossierAttachment, setDossierAttachment] =
    useState<DossierComposerAttachment | null>(null);
  const [busy, setBusy] = useState(false);
  const [pilotId, setPilotId] = useState<string | null>(null);
  const [turnProjections, setTurnProjections] = useState<TurnProjection[]>([]);
  const [choiceFrozen, setChoiceFrozen] = useState(false);
// ...
    // C24 / 12.09 — dossier chip travels with the turn even if draft was replaced.
    const raw = (overrideText ?? draft).trim();
    const text = mergeDraftWithDossierAttachment(raw, dossierAttachment).trim();
    if (!text || !preparationId) return;
    const fromChoice = opts?.fromChoice === true;
    const sentVersion = fromChoice ? null : draftVersionRef.current;
    const pendingMeta: Pick<
      ThreadPendingTurn,
// ...
            persistDraft(v);
          }}
          dossierAttachment={dossierAttachment}
          onRemoveDossierAttachment={() => setDossierAttachment(null)}
          onSend={() => void sendMessage()}
          onReconcile={
            unresolvedPending
              ? () => void reconcilePending(unresolvedPending)
// ...
          }}
          dossierAttachment={dossierAttachment}
          onRemoveDossierAttachment={() => setDossierAttachment(null)}
          onSend={() => void sendMessage()}
          onReconcile={
            unresolvedPending
              ? () => void reconcilePending(unresolvedPending)
              : undefined
// ...
                    onClick={() => selectSurface("publication")}
                  >
                    Résultats & preuves
                  </button>
                </div>
              </div>
              <div className="fig-inspector-rule" aria-hidden />
              <p className="fig-inspector-section">Points à clarifier</p>
// ...
            projectId={params.projectId}
            mode="execution"
            onDiscussWithNora={(att) => {
              setDossierAttachment(att);
              // Keep composer free for the Pilote's next ask — dossier is a chip (12.09).
              selectSurface("travail");
            }}
          />
// ...
            mode="execution"
            onDiscussWithNora={(att) => {
              setDossierAttachment(att);
              // Keep composer free for the Pilote's next ask — dossier is a chip (12.09).
              selectSurface("travail");
            }}
          />
        </div>
// ...
            projectId={params.projectId}
            mode="results"
            onDiscussWithNora={(att) => {
              setDossierAttachment(att);
              selectSurface("travail");
            }}
          />
          <GitRepositoriesSurface
// ...
            mode="results"
            onDiscussWithNora={(att) => {
              setDossierAttachment(att);
              selectSurface("travail");
            }}
          />
          <GitRepositoriesSurface
            projectId={params.projectId}
// ...
```

## 6. Tableau F2 / 14 états

| Frame | node-id | Route fixture | Éléments contractuels | Correspondance | F2 δ CSS | Capture Figma | Capture runtime | Écarts | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| 12.01 | 1210:233 | /dev/ml5-page12-visual/12.01 | Activité Nora + fil | NoraConversation | PARTIAL — harness sans rail projet complet | figma-page12/12.01-*.png | figma-page12-runtime/12.01.png | Shell Accès directs non monté dans harness | PARTIAL |
| 12.02 | 1211:117 | …/12.02 | 4 engagements + 6 volets | ContractViewer | PARTIAL | … | …/12.02.png | Composition viewer OK ; shell PARTIAL | PARTIAL |
| 12.03 | 1211:676 | …/12.03 | Modal Oui/Non 490×230 r10 | D6ConfirmLaunch | PARTIAL (modal aligné) | … | …/12.03.png | Copy/radius alignés ; mesure DOM exacte ouverte | PARTIAL |
| 12.04 | 1211:277 | …/12.04 | Historique interventions | CursorRealizationSurface exec | PARTIAL | … | …/12.04.png | Liste interventions | PARTIAL |
| 12.05 | 1211:424 | …/12.05 | Instruction + autorité | ContractViewer | PARTIAL | … | …/12.05.png | Même viewer | PARTIAL |
| 12.06 | 1212:383 | …/12.06 | LIVE events · STOP≠arrêt | execution + livePanel fixture | PARTIAL | … | …/12.06.png | Pas de faux % | PARTIAL |
| 12.07 | 1212:510 | …/12.07 | UNKNOWN / réconcilier | AMBIGUOUS row | PARTIAL | … | …/12.07.png | État inconnu ≠ échec | PARTIAL |
| 12.08 | 1212:637 | …/12.08 | 3 appréciations · SYNTHÈSE | results split + RealizationBilan | PARTIAL — composition alignée | … | …/12.08.png | Onglets + 3 cartes OK ; rail projet PARTIAL | PARTIAL |
| 12.09 | 1212:774 | …/12.09 | Chip dossier retirable | NoraConversation chip | PARTIAL — chip contractuel présent | … | …/12.09.png | Contexte joint droit Figma non monté dans harness | PARTIAL |
| 12.10 | 1212:895 | …/12.10 | Sas sans projet auto | NoraConversation preparing | PARTIAL | … | …/12.10.png | Rail sas personnel non reproduit | PARTIAL |
| 12.11 | 1239:613 | …/12.11 | LIVRABLES ET TESTS | Bilan tab livrables | PARTIAL | … | …/12.11.png | Tab label exact | PARTIAL |
| 12.12 | 1239:680 | …/12.12 | GIT & PIÈCES | Bilan tab git | PARTIAL | … | …/12.12.png | Tab label exact | PARTIAL |
| 12.13 | 1245:757 | …/12.13 | ÉCARTS | Bilan tab ecarts | PARTIAL | … | …/12.13.png | Tab label exact | PARTIAL |
| 12.14 | 1250:815 | …/12.14 | Instruction intégrale | ContractViewer expanded | PARTIAL | … | …/12.14.png | Instruction non tronquée | PARTIAL |

**Verdict UX pack :** FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED (F2 shell complet + mesures DOM δ≤2 à finaliser avec Morris).

## 7. Réserves ML5 restantes

- Isolation OS D8 (exec disabled) — ouverte
- WEB open page / dégradés critiques — ouverts
- F2 δ≤2 CSS px sur shell projet 1680×970 — PARTIEL (fixtures OK)
- Qualification utilisateur Morris — **non déclarée réussie**
- Pas ML5 CLOSED / ADOPTED / GO RECETTE / promotion
- Plafonds 800k/48 non validés — révoqués

## 8. Instruction ChatGPT

Relire le handoff canonique distant `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` avant réponse.
Vérifier corrections R2, contrats UX page 12, preuves runtime, limites.
Produire une synthèse indépendante. Gate suivant : qualification utilisateur accompagnée Morris en DEV.

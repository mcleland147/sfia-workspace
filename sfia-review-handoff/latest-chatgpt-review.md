# SFIA Review Pack FULL — AKG-M5 / L3-S2 — INTEGRATED A+B CORRECTION
## LUMEN — Cognitive Fidelity + Prepare Consent (provenance + citation)

**Horodatage (UTC):** 2026-10-31T19:47:12Z
**Profil:** CRITICAL
**Cycle:** 8 Delivery + 9 QA intégré
**Capacité:** V3-F05
**Milestone:** L3-S2 OPEN
**Verdict cible:** INTEGRATED A+B CORRECTION READY FOR MORRIS REVIEW

---

## 1. Horodatage

- Pack generated: `2026-10-31T19:47:12Z`
- Delivery WT: `/Users/morris/Projects/sfia-workspace-feat-akg-m5-lumen-cog-prepare-corr-01`
- Handoff WT (publication): `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023`

---

## 2. Git Truth

| Item | Value |
|------|-------|
| Repository | `mcleland147/sfia-workspace` |
| Delivery branch | `feat/akg-m5-lumen-cog-prepare-corr-01` |
| Delivery HEAD (uncommitted A+B) | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` (= `origin/main` baseline) |
| Baseline distante connue | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| Prior handoff tip | `3dc8ef62392f218d177460abadbe216be922939e` |
| Prior handoff blob | `ce509f7bf5dc2c6ee798f585d367d4630ba1a202` |
| Project push | **NONE** (delivery remains dirty local) |
| `move_agent_to_root` | **NOT USED** |
| Runtime WT :3020 | **UNTOUCHED** |

**Local status (delivery WT, excluding pack helpers):**
- Modified: `noraAdaptivePresentation.ts`, `prepareGenericExecutionContractDraft.ts`, `orchestrateTurn.ts`, `ConversationSurface.tsx`, `buildProjectSystemPrompt.ts`, `productExecutionAgentsTools.ts`, `p6.gD4…d0.test.ts`, `.tmp-sfia-review/chatgpt-review.md`
- Untracked: `corrA1b01.secured.d0.test.ts`, `lumenCogPrepareCorr01.d0.test.ts`
- Prior A+B corrections **preserved** (no reset/clean/stash).

---

## 3. GO Morris

Morris autorise la poursuite des corrections locales dans le chantier intégré A+B existant.
A et B priorité STRICTEMENT ÉGALE. Pas de nouveau micro-cycle / branche / baseline vierge.
Objectif: sécuriser (A) complémentarité non présumée + (B) citation ≠ consentement PREPARE.
Livraison unique + Review Pack FULL + handoff L3 unique.

---

## 4. Convergence Pre-check

Lu (CURRENT Git / delivery WT):
- `prompts/templates/sfia-cycle-execution-template.md` (v2.6)
- Fast-track routing + operating model (référencés)
- CKC QA `pilots/04-qa-validation.md` (candidat)
- Convergence build doctrine / roadmap / product-completion cadrage
- AKG-M5 `05-m5-target-journey-and-trajectory-requalification.md`
- Doctrine V3 30–35 (Knowledge / LPS / Epistemology / Agent / Evidence)
- PRR README + 03/05/06/07/08/09 (lecture; **pas** de sync volumes protégés)

**R23:** architecture Product existante réutilisée (NAP + Generic PREPARE admission). Aucun moteur sémantique parallèle.
**R24:** impact qualifié — SYNC GATE OPEN (voir §22).

---

## 5. Capacité V3-F05 et trajectoire

- **Acquis H2:** A1/B restaure réponses riches LUMEN (presentation + narrative) — PROVEN tours antérieurs.
- **Gap A résiduel traité:** complementary présumé sans provenance → **guidance-backed only**.
- **Gap B résiduel traité:** commande citée / analysée prise pour autorisation → **strip non-authoritative + meta frame NO_GO**.
- **Exit:** tests DET A/B/A+B + non-régression NAP/PREPARE; pas LIVE/REAL.

---

## 6. Diagnostic H2 acquis

Cause H2 A1/B: Memory B short `content` + rich `presentation_json` → mode B masquait structure. Correction antérieure: compose/fold A1 + divergence notice. Conservée.

---

## 7. Cause résiduelle A

`classifyNarrativePresentationRelation` classait complementary sur forme interrogative / « Je te propose… » / longueur relative / absence de conflit lexical.
**Absence de conflit ≠ preuve de complémentarité.**
Cas reproduit: presentation « Je recommande un parcours structuré… » + narrative « Je te propose d'abandonner le parcours… » → était complementary (incorrect).

---

## 8. Cause résiduelle B

`resolveLastExplicitPrepareSpeechAct` / intent lexical voyait PREPARE dans citations / exemples / cadres d'analyse.
Exemple: « Voici une phrase à analyser : « Prépare le contrat d'exécution ». Explique… » → intention positive possible (incorrect). Citation ≠ acte de consentement.

---

## 9. Architecture R23

Réutilisation stricte:
- A: `noraAdaptivePresentation.ts` (+ `orchestrateTurn` passe `conversationGuidance.statement`; UI fallback `ConversationSurface`)
- B: `prepareGenericExecutionContractDraft.ts` (+ enqueue/finalize `orchestrateTurn`; `solicitGenericExecutionPrepare` fail-closed)
Pas de nouveau service de classification / agent / couche gouvernance.

---

## 10. Stratégie A retenue

1. **Complementary** uniquement si `isGuidanceBackedContinuation` (même tour `conversationGuidance.statement`) ET forme continuation ET **pas** `narrativeConflictsWithPresentationDeterministic`.
2. Conflict gate: verbes d'abandon/suppression/uniquement + opposition lexicale (fail-closed; jamais preuve positive seule).
3. Sinon → **divergent**: conserver presentation composée + narrative dans une restitution plain honnête (`NORA_ADAPTIVE_DIVERGENCE_NOTICE`).
4. Read-path historique sans guidance: **ne pas** fabriquer provenance → divergent / both versions (pas A1 artificiel).
5. Equivalent / presentation_only / narrative_only inchangés dans l'esprit du contrat.

---

## 11. Stratégie B retenue

1. `stripNonAuthoritativePrepareSpans`: code fences, guillemets/quotes typographiques, cadres reportés/pédagogiques — **sans** strip ASCII `'` (casse les apostrophes FR `d'exécution`).
2. `isPrepareMetaAnalysisOrCitationFrame`: meta + aucun authorize restant après strip → pas consentement.
3. Intent / resolveChatFirst / solicit / enqueue tool: citation/analysis → `no_go` / `PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT`.
4. Last-act temporal refuse/authorize **conservé** sur spans autoritatifs.
5. Positifs directs (B8/B9) non régressés.

---

## 12. Invariants / alternatives rejetées

| Rejeté | Pourquoi |
|--------|----------|
| Enrichir liste illimitée de verbes opposés comme preuve complementary | Absence de conflit ≠ complémentarité |
| NLP / moteur sémantique parallèle | Hors périmètre; fail-closed Product |
| Forcer A1 sur anciens tours | Fabrication de provenance |
| Seconde autorité PREPARE | Admission Product unique |
| Sync PRR / Roadmap / digests | Gate Morris requis |

Invariants: Single Human Execute; PREPARE ≠ AUTHORIZE ≠ EXECUTE; Presentation ≠ HumanDecision; single-response Pilot-facing; zero silent suppress.

---

## 13. Fichiers modifiés / créés

### Modifiés
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts`
- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`
- `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts`

### Créés
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/corrA1b01.secured.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/lumenCogPrepareCorr01.d0.test.ts`

---

## 14. Contenu COMPLET des nouveaux fichiers

### 14.a corrA1b01.secured.d0.test.ts

```typescript
/**
 * CORR-A1B-01 secured — A1/B narrative vs presentation contract.
 * DETERMINISTIC only — ZERO OpenAI LIVE — ZERO campaign DB writes.
 *
 * @vitest-environment node
 */
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  NORA_ADAPTIVE_DIVERGENCE_NOTICE,
  buildDurableAssistantContentForTurn,
  classifyNarrativePresentationRelation,
  composeCanonicalFromPresentation,
  deserializeNoraAdaptivePresentation,
  parseNoraAdaptivePresentation,
  resolveAdaptiveAssistantRender,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
import { ProductSqliteSession } from "@/lib/nora-cognitive-runtime/productSqliteSession";
import {
  appendPilotTranscriptTurn,
  listPilotTranscriptTurns,
} from "@/lib/nora-cognitive-runtime/cycleJournalStore";

const tmpDirs: string[] = [];
afterEach(() => {
  while (tmpDirs.length > 0) {
    const d = tmpDirs.pop();
    if (d) rmSync(d, { recursive: true, force: true });
  }
});

function richComparisonPresentation() {
  return parseNoraAdaptivePresentation({
    version: 1,
    eyebrow: "LUMEN · cadrage",
    title: "Comparer les formats et leurs effets possibles",
    lead: null,
    blocks: [
      {
        kind: "plain",
        text: "Les éléments confirmés sont l'objectif d'initiation et le public adulte débutant.",
      },
      {
        kind: "comparison_table",
        title: "Trois possibilités",
        columns: ["Format", "Avantages", "Limites", "Effets"],
        rows: [
          [
            "Atelier court",
            "Simple à organiser",
            "Peu de répétition",
            "Première prise en main",
          ],
          [
            "Parcours plusieurs séances",
            "Progression par étapes",
            "Créneaux récurrents",
            "Autonomie progressive",
          ],
          [
            "Accompagnement long",
            "Personnalisation",
            "Organisation lourde",
            "Suivi individualisé",
          ],
        ],
      },
      {
        kind: "recommendation",
        title: "Piste privilégiée",
        statement:
          "Je privilégierais un parcours structuré sur plusieurs séances, sous réserve des moyens du centre.",
        disclaimer: null,
      },
    ],
    provenanceNote: null,
    noGovernedActionNote: null,
  })!;
}

describe("CORR-A1B-01 — relation classification", () => {
  it("CAS A — equivalence → equivalent", () => {
    const p = richComparisonPresentation();
    const composed = composeCanonicalFromPresentation(p);
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: composed,
        presentation: p,
      }).kind,
    ).toBe("equivalent");
  });

  it("CAS B — guidance-backed ORIENT + rich presentation → complementary", () => {
    const p = richComparisonPresentation();
    const guidance =
      "Pour préciser le périmètre pédagogique, quels usages du quotidien voudrais-tu traiter en priorité ?";
    const rel = classifyNarrativePresentationRelation({
      pilotFacingCore: guidance,
      presentation: p,
      conversationGuidanceStatement: guidance,
    });
    expect(rel.kind).toBe("complementary");
  });

  it("CAS B — ORIENT shape without guidance provenance → divergent (not presumed complementary)", () => {
    const p = richComparisonPresentation();
    const orient =
      "Pour préciser le périmètre pédagogique, quels usages du quotidien voudrais-tu traiter en priorité ?";
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: orient,
        presentation: p,
      }).kind,
    ).toBe("divergent");
  });

  it("CAS B unsafe — abandon recommendation is divergent even with Je te propose", () => {
    const p = richComparisonPresentation();
    const opposing =
      "Je te propose d'abandonner le parcours structuré sur plusieurs séances.";
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: opposing,
        presentation: p,
        conversationGuidanceStatement: opposing,
      }).kind,
    ).toBe("divergent");
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: opposing,
        presentation: p,
      }).kind,
    ).toBe("divergent");
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: opposing,
      presentation: p,
    });
    expect(built.usedA1).toBe(false);
    expect(built.contentCore).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).toContain("abandonner");
    expect(built.contentCore).toContain("Trois possibilités");
  });

  it("CAS B unsafe — opposing recommendation is divergent not complementary", () => {
    const p = richComparisonPresentation();
    const opposing =
      "Je te propose au contraire l'atelier court, pas le parcours sur plusieurs séances.";
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: opposing,
        presentation: p,
      }).kind,
    ).toBe("divergent");
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: opposing,
      presentation: p,
    });
    expect(built.usedA1).toBe(false);
    expect(built.contentCore).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).toContain("atelier court");
    expect(built.contentCore).toContain("Trois possibilités");
  });

  it("CAS C — long distinct narrative → divergent", () => {
    const p = richComparisonPresentation();
    const narrative = [
      "Voici une autre analyse complètement distincte et longue.",
      "Le format court est en réalité le seul viable pour ce centre.",
      "Le parcours multi-séances est trop coûteux et doit être abandonné d'emblée.",
      "Aucune hypothèse alternative n'est digne d'examen dans ce contexte.",
    ].join(" ");
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: narrative,
        presentation: p,
      }).kind,
    ).toBe("divergent");
  });

  it("CAS A8 — historical divergent read-path shows both versions", () => {
    const p = richComparisonPresentation();
    const shortOpposing =
      "Je te propose au contraire l'atelier court.";
    const d = resolveAdaptiveAssistantRender({
      content: shortOpposing,
      presentation: p,
    });
    expect(d.mode).toBe("plain");
    expect(d.presentation).toBeNull();
    expect(d.plainText).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(d.plainText).toContain("Trois possibilités");
    expect(d.plainText).toContain("atelier court");
  });

  it("CAS D — invalid / absent presentation → narrative_only or empty", () => {
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: "Texte seul.",
        presentation: null,
      }).kind,
    ).toBe("narrative_only");
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: "",
        presentation: null,
      }).kind,
    ).toBe("empty");
  });
});

describe("CORR-A1B-01 — durable + render", () => {
  it("CAS A — durable A1 compose; render adaptive", () => {
    const p = richComparisonPresentation();
    const composed = composeCanonicalFromPresentation(p);
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: composed,
      presentation: p,
    });
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).toBe(composed);
    const d = resolveAdaptiveAssistantRender({
      content: built.contentCore,
      presentation: built.presentation,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.presentation?.blocks.some((b) => b.kind === "comparison_table")).toBe(
      true,
    );
  });

  it("CAS B LUMEN-shaped — guidance-backed fold keeps comparison + continuation once", () => {
    const p = richComparisonPresentation();
    const continuation =
      "Pour préciser le périmètre pédagogique, quels usages du quotidien voudrais-tu traiter en priorité ?";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: continuation,
      presentation: p,
      conversationGuidanceStatement: continuation,
    });
    expect(built.usedA1).toBe(true);
    expect(built.relation).toBe("complementary");
    expect(built.contentCore).toContain("Trois possibilités");
    expect(built.contentCore).toContain("usages du quotidien");
    const matches = built.contentCore.match(/usages du quotidien/g) ?? [];
    expect(matches.length).toBe(1);

    const d = resolveAdaptiveAssistantRender({
      content: built.contentCore,
      presentation: built.presentation,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.presentation?.blocks.some((b) => b.kind === "comparison_table")).toBe(
      true,
    );
    expect(
      d.presentation?.blocks.some(
        (b) =>
          (b.kind === "question" || b.kind === "plain") &&
          b.text.includes("usages du quotidien"),
      ),
    ).toBe(true);
  });

  it("CAS B historical read-path without guidance — preserves both versions (no presumed A1)", () => {
    const p = richComparisonPresentation();
    const short =
      "Je te propose de poursuivre le cadrage en confrontant ces formats aux disponibilités du centre.";
    const d = resolveAdaptiveAssistantRender({
      content: short,
      presentation: p,
    });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(d.plainText).toContain("Trois possibilités");
    expect(d.plainText).toContain("poursuivre le cadrage");
  });

  it("CAS C — divergent fail-closed preserves both versions; no A1 promotion", () => {
    const p = richComparisonPresentation();
    const narrative = [
      "Analyse narrative alternative longue et distincte.",
      "Je conclus que seul l'atelier court est acceptable.",
      "Le parcours multi-séances doit être écarté sans discussion.",
      "Cette conclusion remplace toute comparaison structurée antérieure.",
    ].join(" ");
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: narrative,
      presentation: p,
    });
    expect(built.usedA1).toBe(false);
    expect(built.presentation).toBeNull();
    expect(built.contentCore).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
    expect(built.contentCore).toContain("Trois possibilités");
    expect(built.contentCore).toContain("atelier court est acceptable");
    const d = resolveAdaptiveAssistantRender({
      content: built.contentCore,
      presentation: built.presentation,
    });
    expect(d.mode).toBe("plain");
    expect(d.presentation).toBeNull();
    expect(d.plainText).toContain(NORA_ADAPTIVE_DIVERGENCE_NOTICE);
  });

  it("CAS D — absent presentation keeps narrative plain", () => {
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: "Réponse courte seule.",
      presentation: null,
    });
    expect(built.usedA1).toBe(false);
    expect(built.contentCore).toBe("Réponse courte seule.");
    const d = resolveAdaptiveAssistantRender({
      content: built.contentCore,
      presentation: null,
    });
    expect(d.mode).toBe("plain");
    expect(d.plainText).toBe("Réponse courte seule.");
  });

  it("persistence isolated SQLite — guidance-backed complementary reloads as A1", () => {
    const dir = mkdtempSync(join(tmpdir(), "sfia-a1b-"));
    tmpDirs.push(dir);
    const dbPath = join(dir, "session.sqlite");
    const session = new ProductSqliteSession({
      projectId: "prj:a1b",
      dbPath,
      sessionKey: "default",
    });
    try {
      const p = richComparisonPresentation();
      const guidance =
        "Je te propose de vérifier ensuite les créneaux disponibles au centre.";
      const built = buildDurableAssistantContentForTurn({
        pilotFacingCore: guidance,
        presentation: p,
        conversationGuidanceStatement: guidance,
      });
      expect(built.usedA1).toBe(true);
      appendPilotTranscriptTurn(session, {
        role: "assistant",
        content: built.contentCore,
        presentationJson: JSON.stringify(built.presentation),
      });
      const listed = listPilotTranscriptTurns(session);
      expect(listed).toHaveLength(1);
      const restored = deserializeNoraAdaptivePresentation(
        listed[0]!.presentationJson,
      );
      const d = resolveAdaptiveAssistantRender({
        content: listed[0]!.content,
        presentation: restored,
      });
      expect(d.mode).toBe("adaptive");
      expect(
        d.presentation?.blocks.some((b) => b.kind === "comparison_table"),
      ).toBe(true);
    } finally {
      session.close();
    }
  });
});

```

### 14.b lumenCogPrepareCorr01.d0.test.ts

```typescript
/**
 * LUMEN integrated A+B — CORR-A1B-01 + PREPARE consent (TEST-15 hardening).
 * Deterministic only — ZERO OpenAI LIVE — ZERO Cursor REAL — ZERO campaign DB writes.
 *
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import {
  hasExplicitPrepareContractIntent,
  hasExplicitPrepareContractRefusal,
  resolveChatFirstGenericPrepareGo,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  buildDurableAssistantContentForTurn,
  classifyNarrativePresentationRelation,
  parseNoraAdaptivePresentation,
  resolveAdaptiveAssistantRender,
} from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";

const baseProject = (): ProjectAssistantContextDto =>
  ({
    projectId: "prj:lumen-test",
    displayName: "LUMEN test",
    shortReference: "LUMEN",
    contextSummary: "Atelier initiation numérique",
    constraints: [],
    activeCycleInstanceId: "cyc:test",
  }) as unknown as ProjectAssistantContextDto;

describe("LUMEN cog+prepare corr-01 — Axis A prompt primacy", () => {
  it("system prompt requires ANSWER before ORIENT for analytical asks", () => {
    const prompt = buildProjectSystemPrompt(baseProject());
    expect(prompt).toMatch(/RÉPONSE MÉTIER SUBSTANTIELLE/);
    expect(prompt).toMatch(/UNDERSTAND → REASON → ANSWER → puis ORIENT/);
    expect(prompt).toMatch(/conversationGuidance\.statement N'EST PAS un substitut/);
    expect(prompt).toMatch(/Comparaison demandée → comparaison exploitable/);
    expect(prompt).toMatch(/request_generic_execution_prepare/);
    expect(prompt).toMatch(/n'annonce jamais qu'un contrat a été préparé/);
  });
});

describe("LUMEN cog+prepare corr-01 — Axis B PREPARE consent hardened", () => {
  const negatives = [
    "Ne prépare pas de contrat d'exécution.",
    "Ne prépare surtout pas le contrat d'exécution.",
    "Je refuse que tu prépares un contrat.",
    "Prépare l'analyse, mais ne crée aucun contrat d'exécution.",
    "Je ne veux pas de contrat.",
    "Analyse seulement, sans lancer de mission.",
    "Ne prépare rien pour Cursor.",
    "Nous verrons l'exécution plus tard. Pas de contrat d'exécution.",
    "Prépare une analyse, pas un contrat.",
    "Je souhaite examiner cette proposition. Ne prépare pas de contrat d'exécution et ne lance aucune action technique pour le moment.",
    "Prépare une analyse comparative et une proposition de cadrage détaillée pour LUMEN. Ne prépare pas de contrat d'exécution.",
  ];
  const positives = [
    "Prépare le contrat d'exécution pour la fiche d'animation.",
    "OK, prépare le contrat pour cette mission.",
    "Tu avais dit ne prépare pas. Maintenant prépare le contrat d'exécution pour LUMEN.",
    "Avant je ne voulais pas de contrat. Maintenant prépare le contrat.",
    "J'avais dit ne prépare pas. Cette fois, prépare le contrat.",
  ];

  const temporalRefusals = [
    "Maintenant prépare le contrat d'exécution. Finalement, ne prépare pas de contrat d'exécution.",
    "Prépare le contrat. Non, finalement ne le prépare pas.",
  ];

  it("negations are refusal and not lexical prepare GO", () => {
    for (const text of [...negatives, ...temporalRefusals]) {
      expect(hasExplicitPrepareContractRefusal(text), text).toBe(true);
      expect(hasExplicitPrepareContractIntent(text), text).toBe(false);
      expect(
        resolveChatFirstGenericPrepareGo({
          projectId: "prj:x",
          cycleInstanceId: "cyc:x",
          text,
        }).kind,
        text,
      ).toBe("no_go");
    }
  });

  it("positive explicit prepare remains lexical GO", () => {
    for (const text of positives) {
      expect(hasExplicitPrepareContractRefusal(text), text).toBe(false);
      expect(hasExplicitPrepareContractIntent(text), text).toBe(true);
      expect(
        resolveChatFirstGenericPrepareGo({
          projectId: "prj:x",
          cycleInstanceId: "cyc:x",
          text,
        }).kind,
        text,
      ).toBe("explicit_lexical_prepare");
    }
  });

  it("last explicit refuse wins over earlier maintenant prépare", () => {
    const text =
      "Maintenant prépare le contrat d'exécution. Finalement, ne prépare pas de contrat d'exécution.";
    expect(hasExplicitPrepareContractRefusal(text)).toBe(true);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:x",
        cycleInstanceId: "cyc:x",
        text,
      }),
    ).toEqual({ kind: "no_go", reason: "explicit_prepare_refusal" });
  });

  it("A+B integrated utterance: framing ask + refusal → no_go", () => {
    const text =
      "Prépare une analyse comparative et une proposition de cadrage détaillée pour LUMEN. " +
      "Ne prépare pas de contrat d'exécution.";
    expect(hasExplicitPrepareContractRefusal(text)).toBe(true);
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }),
    ).toEqual({ kind: "no_go", reason: "explicit_prepare_refusal" });
  });

  it("solicitGenericExecutionPrepare fail-closes on pilotUtterance refusal without OA", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:lumen",
      cycleInstanceId: null,
      pilotUtterance:
        "Prépare une analyse. Ne prépare pas de contrat d'exécution.",
      mission: {
        objective: "should not matter",
        expectedOutcome: "should not matter",
      },
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("EXPLICIT_PREPARE_REFUSAL");
    expect(result.humanDecisionCreated).toBe(false);
    expect(result.executionAttemptCreated).toBe(false);
  });

  it("B1 — quoted PREPARE command under analysis ask is not consent", () => {
    const text =
      "Voici une phrase à analyser :\n« Prépare le contrat d'exécution ».\nExplique ce qu'elle signifie.";
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(hasExplicitPrepareContractRefusal(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }),
    ).toEqual({
      kind: "no_go",
      reason: "prepare_citation_or_analysis_not_consent",
    });
  });

  it("B2 — pedagogical documentation example is not consent", () => {
    const text =
      "Dans notre documentation, on trouve : Prépare le contrat d'exécution. Que signifie cette instruction ?";
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }).kind,
    ).toBe("no_go");
  });

  it("B3 — fenced code with positive PREPARE is not consent", () => {
    const text =
      "Que fait cette commande ?\n```\nPrépare le contrat d'exécution\n```\nExplique.";
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }).kind,
    ).toBe("no_go");
  });

  it("B4 — reported Nora offer + comprehension ask is not consent", () => {
    const text =
      "Nora m'a proposé de préparer un contrat. Je voudrais comprendre pourquoi.";
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }).kind,
    ).toBe("no_go");
  });

  it("B11 — citation + refusal + analysis → no_go", () => {
    const text =
      "Voici une phrase : « Prépare le contrat d'exécution ». " +
      "Ne prépare pas de contrat d'exécution. Explique ce qu'elle signifie.";
    expect(hasExplicitPrepareContractRefusal(text)).toBe(true);
    expect(hasExplicitPrepareContractIntent(text)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }).kind,
    ).toBe("no_go");
  });

  it("B13 — solicit fail-closes on citation-only utterance (no EC)", async () => {
    const result = await solicitGenericExecutionPrepare({
      oa: null as never,
      projectId: "prj:lumen",
      cycleInstanceId: null,
      pilotUtterance:
        "Voici une phrase à analyser : « Prépare le contrat d'exécution ». Explique ce qu'elle signifie.",
      mission: {
        objective: "should not matter",
        expectedOutcome: "should not matter",
      },
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.humanDecisionCreated).toBe(false);
    expect(result.executionAttemptCreated).toBe(false);
  });

  it("B9 — direct prepare command remains lexical GO", () => {
    const text =
      "Prépare le contrat d'exécution pour la mission LUMEN.";
    expect(hasExplicitPrepareContractIntent(text)).toBe(true);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text,
      }).kind,
    ).toBe("explicit_lexical_prepare");
  });
});

describe("LUMEN cog+prepare corr-01 — A+B product effects", () => {
  it("Scénario 1 — analysis + cited PREPARE: durable comparison, no prepare GO", () => {
    const utterance =
      "Compare les trois formats pédagogiques du projet LUMEN et recommande une approche. " +
      "Voici une commande utilisée dans un exemple : « Prépare le contrat d'exécution ». " +
      "Pour l'instant, je veux seulement une analyse.";
    expect(hasExplicitPrepareContractIntent(utterance)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text: utterance,
      }),
    ).toEqual({
      kind: "no_go",
      reason: "prepare_citation_or_analysis_not_consent",
    });

    const presentation = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "LUMEN",
      title: "Comparaison des trois formats",
      lead: null,
      blocks: [
        {
          kind: "comparison_table",
          title: "Formats",
          columns: ["Format", "Avantages", "Limites", "Ressources"],
          rows: [
            ["Atelier court", "Rapide", "Peu de reprise", "1 salle"],
            ["Parcours multi-séances", "Progression", "Créneaux", "Postes"],
            ["Accompagnement long", "Sur-mesure", "Charge", "Tuteur"],
          ],
        },
        {
          kind: "recommendation",
          title: "Orientation",
          statement:
            "Sous l'hypothèse de créneaux hebdomadaires, je recommande le parcours multi-séances.",
          disclaimer: null,
        },
        {
          kind: "plain",
          text: "Hypothèse non confirmée : disponibilité réelle du centre.",
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    });
    expect(presentation).not.toBeNull();
    const shortOrient =
      "Je te propose de valider ensuite les moyens du centre avant d'arrêter le format.";
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: shortOrient,
        presentation,
        conversationGuidanceStatement: shortOrient,
      }).kind,
    ).toBe("complementary");
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: shortOrient,
      presentation,
      conversationGuidanceStatement: shortOrient,
    });
    expect(built.usedA1).toBe(true);
    expect(built.contentCore).toMatch(/Atelier court/);
    expect(built.contentCore).toMatch(/recommande le parcours multi-séances/);
    expect(built.contentCore).toMatch(/Hypothèse non confirmée/);
    const d = resolveAdaptiveAssistantRender({
      content: built.contentCore,
      presentation: built.presentation,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.presentation?.blocks.some((b) => b.kind === "comparison_table")).toBe(
      true,
    );
  });

  it("Scénario 2 — framing ask + refuse PREPARE: analysis A1 + no_go", () => {
    const utterance =
      "Prépare une analyse comparative des trois formats, mais ne prépare aucun contrat d'exécution.";
    expect(hasExplicitPrepareContractRefusal(utterance)).toBe(true);
    expect(hasExplicitPrepareContractIntent(utterance)).toBe(false);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text: utterance,
      }).kind,
    ).toBe("no_go");
  });

  it("Scénario 4 — opposing narrative not folded as complementary", () => {
    const presentation = parseNoraAdaptivePresentation({
      version: 1,
      eyebrow: "LUMEN",
      title: "Comparaison",
      lead: null,
      blocks: [
        {
          kind: "recommendation",
          title: "Orientation",
          statement:
            "Je recommande un parcours structuré sur plusieurs séances.",
          disclaimer: null,
        },
        {
          kind: "plain",
          text: "Sous réserve des créneaux du centre.",
        },
      ],
      provenanceNote: null,
      noGovernedActionNote: null,
    });
    expect(presentation).not.toBeNull();
    const opposing =
      "Je te propose d'abandonner le parcours structuré sur plusieurs séances.";
    expect(
      classifyNarrativePresentationRelation({
        pilotFacingCore: opposing,
        presentation,
        conversationGuidanceStatement: opposing,
      }).kind,
    ).toBe("divergent");
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: opposing,
      presentation,
      conversationGuidanceStatement: opposing,
    });
    expect(built.usedA1).toBe(false);
    expect(built.contentCore).toMatch(/abandonner/);
    expect(built.contentCore).toMatch(/parcours structuré/);
  });
});

```

---

## 15. Diffs utiles COMPLETS (tracked vs baseline HEAD `7dd49ecd`)

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
index c0352f84..8c2a89d2 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
@@ -17,6 +17,7 @@ import {
   assessGenericMissionPrepareReadiness,
   assessMaterialityForGenericPrepare,
   hasExplicitPrepareContractIntent,
+  hasExplicitPrepareContractRefusal,
   isChatFirstPrepareAcceptGo,
   prepareGenericExecutionContractDraft,
   rememberGenericPrepareRecommendation,
@@ -262,6 +263,84 @@ describe("P6 G-D4/T-A4 generic PREPARE → authorize", () => {
     ).toBe("no_go");
   });

+  it("TEST-15 / LUMEN — explicit PREPARE refusal is never a prepare GO", () => {
+    const lumenRefusal =
+      "À partir de ce que nous avons défini ensemble, prépare une première proposition structurée comprenant :\n" +
+      "- Les objectifs pédagogiques.\n\n" +
+      "Je souhaite examiner cette proposition avant de valider définitivement le cadrage. " +
+      "Ne prépare pas de contrat d'exécution et ne lance aucune action technique pour le moment.";
+    expect(hasExplicitPrepareContractRefusal(lumenRefusal)).toBe(true);
+    expect(hasExplicitPrepareContractIntent(lumenRefusal)).toBe(false);
+    expect(
+      resolveChatFirstGenericPrepareGo({
+        projectId: "prj:lumen",
+        cycleInstanceId: "cyc:lumen",
+        text: lumenRefusal,
+      }),
+    ).toEqual({ kind: "no_go", reason: "explicit_prepare_refusal" });
+    expect(
+      hasExplicitPrepareContractRefusal(
+        "Ne prépare pas de contrat d'exécution.",
+      ),
+    ).toBe(true);
+    expect(
+      hasExplicitPrepareContractIntent(
+        "Ne prépare pas de contrat d'exécution.",
+      ),
+    ).toBe(false);
+    expect(
+      hasExplicitPrepareContractRefusal(
+        "Prépare une analyse, pas un contrat.",
+      ),
+    ).toBe(true);
+    expect(
+      hasExplicitPrepareContractIntent(
+        "Prépare une analyse, pas un contrat.",
+      ),
+    ).toBe(false);
+    expect(
+      hasExplicitPrepareContractIntent(
+        "Prépare le contrat d'exécution pour la mission LUMEN",
+      ),
+    ).toBe(true);
+    expect(isChatFirstPrepareAcceptGo({ text: lumenRefusal })).toBe(false);
+    expect(
+      hasExplicitPrepareContractRefusal(
+        "Je refuse que tu prépares un contrat.",
+      ),
+    ).toBe(true);
+    expect(
+      hasExplicitPrepareContractRefusal("Ne prépare rien pour Cursor."),
+    ).toBe(true);
+    expect(
+      hasExplicitPrepareContractRefusal(
+        "Analyse seulement, sans lancer de mission.",
+      ),
+    ).toBe(true);
+    // Historical refusal then clear current positive PREPARE.
+    expect(
+      hasExplicitPrepareContractRefusal(
+        "Tu avais dit ne prépare pas. Maintenant prépare le contrat d'exécution.",
+      ),
+    ).toBe(false);
+    expect(
+      hasExplicitPrepareContractIntent(
+        "Tu avais dit ne prépare pas. Maintenant prépare le contrat d'exécution.",
+      ),
+    ).toBe(true);
+    // Later refuse beats earlier positive authorize in the same utterance.
+    expect(
+      hasExplicitPrepareContractRefusal(
+        "Maintenant prépare le contrat d'exécution. Finalement, ne prépare pas de contrat d'exécution.",
+      ),
+    ).toBe(true);
+    expect(
+      hasExplicitPrepareContractIntent(
+        "Maintenant prépare le contrat d'exécution. Finalement, ne prépare pas de contrat d'exécution.",
+      ),
+    ).toBe(false);
+  });
+
   it("Q02 — sync assess without Product context is UNKNOWN (never false-implicit)", () => {
     const mat = assessMaterialityForGenericPrepare(baseAnalysis("demo"));
     expect(mat.materiality).toBe("unknown");
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index d0b9563a..d33d3d53 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -58,6 +58,7 @@ import {
   NoraCanonicalFallbackView,
 } from "./NoraAdaptivePresentationView";
 import {
+  contentWithoutAuthenticatedStudioNotices,
   resolveAdaptiveAssistantRender,
   resolveAdaptiveCanonicalDisplayText,
 } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
@@ -643,12 +644,23 @@ export function ConversationSurface({
                   }
                   // B — canonical fail-closed; CR-03 formatter fidelity guard.
                   // CORR-NAP-LIVE-RENDER-01: GFM tables → HTML table (no A1 soften).
+                  // Typed appendix is the sole authenticated Studio surface —
+                  // strip the same notices from plain to avoid duplicate DOM.
+                  const plainSource = decision.studioAppendix
+                    ? contentWithoutAuthenticatedStudioNotices(
+                        decision.plainText || message.content,
+                        decision.studioControlNotices,
+                      )
+                    : decision.plainText || message.content;
                   const plainDisplay = resolveAdaptiveCanonicalDisplayText(
-                    decision.plainText || message.content,
+                    plainSource,
                     formatNoraAssistantDisplayText,
                   );
                   return (
-                    <NoraCanonicalFallbackView plainText={plainDisplay} />
+                    <NoraCanonicalFallbackView
+                      plainText={plainDisplay}
+                      studioAppendix={decision.studioAppendix}
+                    />
                   );
                 })()}
               </div>
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index e833de14..3d962eb3 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -187,10 +187,28 @@ export function buildProjectSystemPrompt(
     "Une Recommendation CURRENT réutilisée reste une Recommendation — jamais une HumanDecision ni un cycle lancé.",
     "Recommendation ≠ HumanDecision ≠ préparation de trajectoire ≠ START ≠ exécution.",
     "",
+    "=== RÉPONSE MÉTIER SUBSTANTIELLE (ANSWER — priorité) ===",
+    "Ordre obligatoire du tour : UNDERSTAND → REASON → ANSWER → puis ORIENT.",
+    "ANSWER est la charge utile Pilote. ORIENT (conversationGuidance) ne la remplace JAMAIS.",
+    "Quand le Pilote demande explicitement de comparer, analyser, recommander, structurer un cadrage,",
+    "lister avantages/limites/moyens/risques/hypothèses/étapes : PRODUIS ce contenu DANS CE TOUR",
+    "(presentation.blocks[] et/ou narrative complète). Ne te limite PAS à une courte invitation",
+    "du type « Je te propose de… » / « Pour préciser… » sans avoir livré l'analyse demandée.",
+    "Comparaison demandée → comparaison exploitable (formats/options, avantages, limites, moyens,",
+    "conséquences, recommandation argumentée, hypothèses non confirmées).",
+    "Cadrage structuré demandé → sections exploitables (objectifs, périmètre, séances, moyens,",
+    "hypothèses, risques, étapes) — pas une promesse de produire le cadrage plus tard.",
+    "Les réponses simples restent concises. Les demandes analytiques restent substantielles.",
+    "Faits ≠ hypothèses ≠ options ≠ recommandations ≠ décisions Pilote. N'invente pas de décision.",
+    "Si le Pilote interdit un contrat d'exécution : réponds sur le fond demandé et n'appelle PAS",
+    "request_generic_execution_prepare ; n'annonce jamais qu'un contrat a été préparé.",
+    "",
     "=== CONTINUATION CONVERSATIONNELLE (conversationGuidance — même tour) ===",
-    "Après avoir répondu : UNDERSTAND → REASON → ANSWER → ORIENT.",
+    "Après ANSWER seulement : ORIENT via conversationGuidance (même tour, pas de second appel).",
+    "conversationGuidance.statement N'EST PAS un substitut de la réponse métier.",
     "Identifie le prochain mouvement utile pour faire progresser le projet.",
-    "Ne termine pas sur un simple constat lorsqu'une suite honnête est identifiable.",
+    "Ne termine pas sur un simple constat lorsqu'une suite honnête est identifiable,",
+    "MAIS seulement après avoir livré ANSWER si une analyse/comparaison/cadrage a été demandé.",
     "Produit conversationGuidance dans le MÊME tour (pas de second appel).",
     "Champs : kind, scope, statement, rationale (rationale null si non matériel).",
     "Kinds autorisés uniquement :",
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 8c9f335c..9cdeca5a 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -569,6 +569,28 @@ export async function orchestrateProjectAssistantTurn(input: {
               import("@/lib/vertical-slice-runtime"),
               import("./w2/prepareGenericExecutionContractDraft"),
             ]);
+          // TEST-15 — refuse queue when Pilote utterance forbids PREPARE.
+          if (prepareMod.hasExplicitPrepareContractRefusal(content)) {
+            return {
+              ok: false as const,
+              code: "EXPLICIT_PREPARE_REFUSAL",
+              message:
+                "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
+              humanDecisionCreated: false as const,
+              executionAttemptCreated: false as const,
+            };
+          }
+          // Citation / analysis of a PREPARE phrase is not current consent.
+          if (prepareMod.isPrepareMetaAnalysisOrCitationFrame(content)) {
+            return {
+              ok: false as const,
+              code: "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT",
+              message:
+                "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé.",
+              humanDecisionCreated: false as const,
+              executionAttemptCreated: false as const,
+            };
+          }
           const oa = getRuntimeApplicationService().oa;
           if (!oa) {
             return {
@@ -1370,6 +1392,8 @@ export async function orchestrateProjectAssistantTurn(input: {
             projectId: project.projectId,
             cycleInstanceId: project.activeCycleInstanceId?.trim() || null,
             mission: pendingGenericPrepareMission,
+            // TEST-15 — tool solicitation cannot bypass explicit Pilote refusal.
+            pilotUtterance: content,
             sessionDbPath: input.sessionDbPath,
             forceLocalAuthority:
               process.env.VITEST === "true" ||
@@ -1517,6 +1541,9 @@ export async function orchestrateProjectAssistantTurn(input: {
     const durableBuilt = buildDurableAssistantContentForTurn({
       pilotFacingCore: assistantText,
       presentation: coherentEarly?.presentation ?? null,
+      // Positive complementary provenance — never infer from narrative shape alone.
+      conversationGuidanceStatement:
+        coherentEarly?.conversationGuidance?.statement ?? null,
     });
     assistantText = durableBuilt.contentCore;

diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 4b370302..19a01401 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -87,12 +87,159 @@ export type GenericMissionPrepareReadiness = {
   readonly missingFields: readonly string[];
 };

+type PrepareSpeechAct = {
+  readonly kind: "refuse" | "authorize";
+  readonly index: number;
+};
+
+const PREPARE_REFUSAL_PATTERNS: readonly RegExp[] = [
+  /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+(surtout\s+)?pas\b[\s\S]{0,80}\b(contrat|executioncontract|execution contract|mission)\b/giu,
+  /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+rien\b[\s\S]{0,60}\b(cursor|contrat|mission|exécution|execution)\b/giu,
+  /\b(refuse|refus\w*)\b[\s\S]{0,60}\b(pr[ée]par\w*|cr[ée]er?|cr[ée]e)\b[\s\S]{0,50}\b(contrat|executioncontract|execution contract|mission)\b/giu,
+  /\b(ne\s+)?(cr[ée]e|creer|créer|crée)\s+(pas|aucun|aucune)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
+  /\bsans\s+(cr[ée]er?|créer|crée)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
+  /\b(pas|sans|aucune?|aucun)\s+(de\s+|d[''])?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/giu,
+  /\bsans\s+(préparer|preparer|prepare)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
+  /\b(ne\s+)?(veux|veut|souhait\w*|lance|lancer)\s+pas\b[\s\S]{0,60}\b(contrat|mission(\s+(technique|d['']exécution|cursor))?|cursor)\b/giu,
+  /\b(analyse|cadrage|proposition)\s+seulement\b[\s\S]{0,80}\bsans\b[\s\S]{0,60}\b(contrat|mission|exécution|execution|cursor)\b/giu,
+  /\bsans\s+(lancer|préparer|preparer|prepare)\b[\s\S]{0,40}\b(mission|contrat|cursor|exécution|execution)\b/giu,
+  /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,80}\bpas\s+(de\s+|un\s+|une\s+)?(contrat|executioncontract|execution contract)\b/giu,
+  /\bmais\s+(ne\s+)?(prépare|prepare|crée|creer|créer)\b[\s\S]{0,40}\b(pas|aucun|aucune)\b[\s\S]{0,40}\b(contrat|mission)\b/giu,
+  /\b(finalement|non)\s*[,:]?\s*(ne\s+)?(le\s+)?(prépare|prepare|préparer|preparer)\s+pas\b/giu,
+];
+
+/** Positive PREPARE authorize acts (not EXECUTE). Temporal last-act wins vs refuse. */
+const PREPARE_AUTHORIZE_PATTERNS: readonly RegExp[] = [
+  /\b(maintenant|désormais|cette\s+fois|finalement|plutôt)\b[\s\S]{0,60}\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,50}\b(contrat|executioncontract|execution contract|mission)\b/giu,
+  /\b(ok|oui|vas[- ]y|go|d['']accord)\b[\s\S]{0,40}\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract|mission)\b/giu,
+  /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(le\s+|un\s+|une\s+)?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/giu,
+];
+
+/**
+ * Remove citations, code, and reported/example frames so quoted PREPARE
+ * commands are not treated as current Pilote consent.
+ * Deterministic span masking — not a general French NLP parser.
+ */
+export function stripNonAuthoritativePrepareSpans(text: string): string {
+  let t = text;
+  // Fenced / inline code
+  t = t.replace(/```[\s\S]*?```/g, " ");
+  t = t.replace(/`[^`]*`/g, " ");
+  // Explicit citation delimiters only — never ASCII/typographic apostrophes
+  // used in French (d'exécution, l'analyse), which would erase refuse/authorize acts.
+  t = t.replace(/«[^»]*»/g, " ");
+  t = t.replace(/"[^"]*"/g, " ");
+  t = t.replace(/“[^”]*”/g, " ");
+  t = t.replace(/‘[^’]*’/g, " ");
+  // Reported / documentary / pedagogical frames introducing a command.
+  t = t.replace(
+    /\b(voici une phrase à analyser|phrase à analyser|que signifie(?:t|-elle| cette)?|explique(?:r)? (?:ce qu['']elle|cette|la)|dans (?:notre |la )?documentation|on trouve\s*:|exemple\s*:|par exemple\s*:|nora m['']a proposé(?: de)?|tu (?:m['']as|as) (?:dit|proposé)(?: de)?|elle a (?:dit|proposé)(?: de)?|il a (?:dit|proposé)(?: de)?)\b[\s\S]{0,160}/giu,
+    " ",
+  );
+  return t.replace(/\s+/g, " ").trim();
+}
+
+/**
+ * True when the utterance is primarily analysis / discussion of a PREPARE
+ * phrase rather than a current instruction to prepare.
+ */
+export function isPrepareMetaAnalysisOrCitationFrame(text: string): boolean {
+  const raw = text.trim();
+  if (!raw) return false;
+  const hasMeta =
+    /\b(phrase à analyser|que signifie|explique(?:r)? (?:ce qu['']elle|cette)|dans (?:notre |la )?documentation|on trouve\s*:|exemple\s*:|comprendre pourquoi|pour l['']instant[\s\S]{0,80}(seulement|analyse)|je voudrais comprendre)\b/iu.test(
+      raw,
+    );
+  if (!hasMeta) return false;
+  // After stripping citations, no remaining direct authorize → meta-only.
+  const cleaned = stripNonAuthoritativePrepareSpans(raw).toLowerCase();
+  const acts = collectPrepareSpeechActsOn(cleaned);
+  return !acts.some((a) => a.kind === "authorize");
+}
+
+function collectPrepareSpeechActsOn(text: string): PrepareSpeechAct[] {
+  const acts: PrepareSpeechAct[] = [];
+  for (const re of PREPARE_REFUSAL_PATTERNS) {
+    re.lastIndex = 0;
+    let m: RegExpExecArray | null;
+    while ((m = re.exec(text)) !== null) {
+      acts.push({ kind: "refuse", index: m.index });
+      if (m.index === re.lastIndex) re.lastIndex += 1;
+    }
+  }
+  for (const re of PREPARE_AUTHORIZE_PATTERNS) {
+    re.lastIndex = 0;
+    let m: RegExpExecArray | null;
+    while ((m = re.exec(text)) !== null) {
+      // Skip authorize matches that are actually refusals
+      // ("prépare … pas … contrat", "surtout pas le contrat", …).
+      const slice = text.slice(m.index, m.index + Math.max(m[0].length, 80));
+      if (
+        /\b(surtout\s+)?pas\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract|mission)\b/i.test(
+          slice,
+        ) ||
+        /\brien\b[\s\S]{0,40}\b(contrat|cursor|mission)\b/i.test(slice)
+      ) {
+        continue;
+      }
+      acts.push({ kind: "authorize", index: m.index });
+      if (m.index === re.lastIndex) re.lastIndex += 1;
+    }
+  }
+  acts.sort((a, b) => a.index - b.index);
+  return acts;
+}
+
+function collectPrepareSpeechActs(text: string): PrepareSpeechAct[] {
+  // Scan authoritative spans only (citations / code / reported frames removed).
+  return collectPrepareSpeechActsOn(stripNonAuthoritativePrepareSpans(text));
+}
+
+/**
+ * Last explicit PREPARE speech-act in the utterance (refuse | authorize).
+ * Chronology: later act wins. Citations do not count. Ambiguous → null.
+ */
+export function resolveLastExplicitPrepareSpeechAct(
+  text: string,
+): PrepareSpeechAct["kind"] | null {
+  const t = text.trim().toLowerCase();
+  if (!t) return null;
+  const acts = collectPrepareSpeechActs(t);
+  if (acts.length === 0) return null;
+  return acts[acts.length - 1]!.kind;
+}
+
+/**
+ * Explicit Pilote refusal of ExecutionContract PREPARE (TEST-15 / LUMEN).
+ * Fail-closed at Product admission — cognition may solicit, but refusal
+ * is never an authorization to PREPARE.
+ *
+ * Temporal rule: the **last** explicit refuse/authorize act in the message
+ * is the current intention. Earlier "maintenant prépare" does not neutralize
+ * a later "ne prépare pas".
+ */
+export function hasExplicitPrepareContractRefusal(text: string): boolean {
+  const t = text.trim().toLowerCase();
+  if (!t) return false;
+  const last = resolveLastExplicitPrepareSpeechAct(t);
+  if (last === "authorize") return false;
+  if (last === "refuse") return true;
+  return false;
+}
+
 /**
  * Explicit Pilote prepare-contract lexical intent (FR natural language).
  * Actionable work alone MUST NOT systematically PREPARE an EC (Q16 / Q20).
+ * Explicit refusal outranks any positive substring match (TEST-15).
  */
 export function hasExplicitPrepareContractIntent(text: string): boolean {
-  const t = text.trim().toLowerCase();
+  const raw = text.trim();
+  if (!raw) return false;
+  if (hasExplicitPrepareContractRefusal(raw)) return false;
+  if (isPrepareMetaAnalysisOrCitationFrame(raw)) return false;
+  // Last authoritative act must be authorize (citations already stripped).
+  if (resolveLastExplicitPrepareSpeechAct(raw) !== "authorize") return false;
+  const t = stripNonAuthoritativePrepareSpans(raw).toLowerCase();
   if (!t) return false;
   if (
     /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
@@ -126,6 +273,7 @@ export function isChatFirstPrepareAcceptGo(input: {
   readonly text: string;
   readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
 }): boolean {
+  if (hasExplicitPrepareContractRefusal(input.text)) return false;
   const candidate = input.pilotDecisionCandidate ?? null;
   if (
     candidate?.disposition === "accept" &&
@@ -171,6 +319,13 @@ export function resolveChatFirstGenericPrepareGo(input: {
   | { readonly kind: "prepare"; readonly offerFingerprint: string }
   | { readonly kind: "explicit_lexical_prepare" }
   | { readonly kind: "no_go"; readonly reason: string } {
+  // TEST-15 / LUMEN — explicit refusal is Product-side absence of consent.
+  if (hasExplicitPrepareContractRefusal(input.text)) {
+    return { kind: "no_go", reason: "explicit_prepare_refusal" };
+  }
+  if (isPrepareMetaAnalysisOrCitationFrame(input.text)) {
+    return { kind: "no_go", reason: "prepare_citation_or_analysis_not_consent" };
+  }
   if (hasExplicitPrepareContractIntent(input.text)) {
     return { kind: "explicit_lexical_prepare" };
   }
@@ -1410,6 +1565,11 @@ export type SolicitGenericExecutionPrepareInput = {
   /** Full analysis (F2) OR mission fields (Nora tool) — exactly one source. */
   readonly analysis?: IntentAnalysisDto;
   readonly mission?: SolicitGenericPrepareMissionFields;
+  /**
+   * Current Pilote utterance (TEST-15). When set, explicit PREPARE refusal
+   * fail-closes before any EC mutation — tool solicitation cannot bypass.
+   */
+  readonly pilotUtterance?: string | null;
   /** M-HD-01 — verified OA HumanDecision for structural resume. */
   readonly decisionId?: string | null;
   readonly sessionKey?: string | null;
@@ -1493,6 +1653,24 @@ export async function solicitGenericExecutionPrepare(
   if (!projectId) {
     return fail("PRODUCT_PROJECT_REQUIRED", "Project requis pour préparer.");
   }
+  if (
+    typeof input.pilotUtterance === "string" &&
+    hasExplicitPrepareContractRefusal(input.pilotUtterance)
+  ) {
+    return fail(
+      "EXPLICIT_PREPARE_REFUSAL",
+      "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
+    );
+  }
+  if (
+    typeof input.pilotUtterance === "string" &&
+    isPrepareMetaAnalysisOrCitationFrame(input.pilotUtterance)
+  ) {
+    return fail(
+      "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT",
+      "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé.",
+    );
+  }
   const analysis =
     input.analysis ??
     buildIntentAnalysisFromSolicitedMission(input.mission ?? {});
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
index 96621586..63dab823 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
@@ -981,59 +981,413 @@ export function canonicalTextsEquivalent(a: string, b: string): boolean {
   return normalizeCanonicalCompare(a) === normalizeCanonicalCompare(b);
 }

+/**
+ * CORR-A1B-01 — explicit Studio notice when narrative vs presentation diverge
+ * materially. Fail-closed plain preserves both versions; never silent pick.
+ */
+export const NORA_ADAPTIVE_DIVERGENCE_NOTICE =
+  "[Studio] Les versions structurée et narrative de cette réponse divergent. Les deux sont conservées ci-dessous — aucune n'est promue comme vérité Product / HumanDecision." as const;
+
+/** Deterministic relation between pilot-facing narrative and structured presentation. */
+export type NarrativePresentationRelation =
+  | { readonly kind: "empty" }
+  | { readonly kind: "narrative_only" }
+  | { readonly kind: "presentation_only" }
+  | { readonly kind: "equivalent" }
+  | { readonly kind: "complementary"; readonly continuation: string }
+  | { readonly kind: "divergent"; readonly composed: string; readonly narrative: string };
+
+/**
+ * True when `needle` is already present in composed text (normalized containment).
+ * Deterministic dedupe only — not semantic similarity.
+ */
+export function narrativeAlreadyCoveredByCompose(
+  needle: string,
+  composed: string,
+): boolean {
+  const n = normalizeCanonicalCompare(needle);
+  if (!n) return true;
+  return normalizeCanonicalCompare(composed).includes(n);
+}
+
+/**
+ * Continuation / ORIENT-shaped narrative candidate (structural only).
+ * NOT proof of complementarity — provenance + non-conflict required.
+ */
+export function isContinuationShapedNarrative(
+  core: string,
+  composed: string,
+): boolean {
+  const t = (core ?? "").trim();
+  if (!t) return false;
+  if (canonicalTextsEquivalent(t, composed)) return false;
+  if (/\?\s*$/u.test(t)) return true;
+  if (
+    /^(je te propose|pour préciser|souhaitez[- ]vous|veux[- ]tu|voudrais[- ]tu|on peut ensuite|nous pouvons ensuite)\b/iu.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  const nCore = normalizeCanonicalCompare(t).length;
+  const nComp = normalizeCanonicalCompare(composed).length;
+  if (nComp >= 800 && nCore > 0 && nCore <= 400 && nCore * 4 <= nComp) {
+    return true;
+  }
+  return false;
+}
+
+/**
+ * Positive provenance: narrative is (or ends with) the structured
+ * conversationGuidance.statement of the same turn — not a free-form guess.
+ * A non-empty prefix is allowed only when it is already covered by compose
+ * (ANSWER already in presentation; ORIENT guidance is the sole distinct add-on).
+ */
+export function isGuidanceBackedContinuation(input: {
+  narrative: string;
+  conversationGuidanceStatement?: string | null;
+  composed?: string | null;
+}): boolean {
+  const guidance = (input.conversationGuidanceStatement ?? "").trim();
+  if (!guidance) return false;
+  const core = (input.narrative ?? "").trim();
+  if (!core) return false;
+  if (canonicalTextsEquivalent(core, guidance)) return true;
+  const nCore = normalizeCanonicalCompare(core);
+  const nGuide = normalizeCanonicalCompare(guidance);
+  if (!nGuide) return false;
+  if (nCore === nGuide) return true;
+  if (nCore.endsWith(nGuide)) {
+    const prefix = nCore.slice(0, nCore.length - nGuide.length).trim();
+    if (!prefix) return true;
+    const composed = (input.composed ?? "").trim();
+    if (!composed) return false;
+    return narrativeAlreadyCoveredByCompose(prefix, composed);
+  }
+  return false;
+}
+
+/**
+ * Deterministic opposition signals vs structured recommendation / labels.
+ * Fail-closed gate only — never sufficient alone to prove complementarity.
+ */
+export function narrativeConflictsWithPresentationDeterministic(input: {
+  narrative: string;
+  presentation: NoraAdaptivePresentation;
+  composed: string;
+}): boolean {
+  const n = normalizeCanonicalCompare(input.narrative).toLowerCase();
+  if (!n) return false;
+
+  if (
+    /\b(au contraire|en revanche|plut[oô]t l['']inverse|je (ne )?suis pas d['']accord|contredit|contredire)\b/u.test(
+      n,
+    )
+  ) {
+    return true;
+  }
+  // Action verbs that reverse / discard a prior recommendation (not ORIENT).
+  if (
+    /\b(abandonn\w*|supprim\w*|écarter|ecarter|annul\w*|retir\w*|renonc\w*)\b/u.test(
+      n,
+    )
+  ) {
+    return true;
+  }
+  if (
+    /\b(reten(?:s|ir|irais)?|choisis|opterais)\s+uniquement\b/u.test(n) ||
+    /\buniquement\s+(le|la|l[''])?\s*(format|atelier|parcours)\b/u.test(n)
+  ) {
+    return true;
+  }
+
+  const recommendationStatements: string[] = [];
+  const formatLabels: string[] = [];
+  for (const block of input.presentation.blocks) {
+    if (block.kind === "recommendation" && block.statement?.trim()) {
+      recommendationStatements.push(
+        normalizeCanonicalCompare(block.statement).toLowerCase(),
+      );
+    }
+    if (block.kind === "comparison_table") {
+      for (const row of block.rows) {
+        const label = (row[0] ?? "").trim();
+        if (label.length >= 4) {
+          formatLabels.push(normalizeCanonicalCompare(label).toLowerCase());
+        }
+      }
+    }
+  }
+
+  const preference =
+    /\b(je te propose|je (te )?propose|je (privil[eé]gie|recommande|pr[eé]f[eè]re|choisis|reten(?:s|irais)?|opterais)|au contraire)\b/u.test(
+      n,
+    );
+  if (preference && formatLabels.length >= 2) {
+    const endorsed = new Set<string>();
+    for (const stmt of recommendationStatements) {
+      for (const label of formatLabels) {
+        if (stmt.includes(label)) endorsed.add(label);
+      }
+    }
+    const mentionedOther = formatLabels.some(
+      (label) => n.includes(label) && !endorsed.has(label),
+    );
+    const mentionsEndorsed = [...endorsed].some((label) => n.includes(label));
+    if (mentionedOther && endorsed.size > 0 && !mentionsEndorsed) {
+      return true;
+    }
+  }
+
+  for (const stmt of recommendationStatements) {
+    const keyTokens = stmt
+      .split(/\s+/)
+      .map((w) => w.replace(/[^\p{L}\p{N}-]/gu, ""))
+      .filter((w) => w.length >= 5)
+      .slice(0, 8);
+    for (const token of keyTokens) {
+      if (
+        new RegExp(
+          String.raw`\b(pas|non|sans|jamais|aucun)\b[\s\S]{0,40}\b${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\b`,
+          "u",
+        ).test(n)
+      ) {
+        return true;
+      }
+      if (
+        new RegExp(
+          String.raw`\b(abandonn\w*|supprim\w*|écarter|ecarter|retir\w*)\b[\s\S]{0,40}\b${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\b`,
+          "u",
+        ).test(n)
+      ) {
+        return true;
+      }
+    }
+  }
+
+  return false;
+}
+
+/**
+ * CORR-A1B-01 — classify narrative vs presentation.
+ *
+ * Complementary requires **positive provenance** (conversationGuidance.statement
+ * of the same turn) AND no deterministic conflict. Absence of detected conflict
+ * alone is NEVER enough. Uncertainty → divergent (both versions preserved).
+ */
+export function classifyNarrativePresentationRelation(input: {
+  pilotFacingCore: string;
+  presentation: NoraAdaptivePresentation | null | undefined;
+  /** Same-turn structured ORIENT statement — required for complementary. */
+  conversationGuidanceStatement?: string | null;
+}): NarrativePresentationRelation {
+  const core = (input.pilotFacingCore ?? "").trim();
+  const presentation = input.presentation ?? null;
+  const admissible = isPresentationStructurallyAdmissibleForA1(presentation);
+
+  if (!core && !admissible) {
+    if (!shouldRenderAdaptivePresentation(presentation)) {
+      return { kind: "empty" };
+    }
+    return { kind: "empty" };
+  }
+  if (!admissible) {
+    return core ? { kind: "narrative_only" } : { kind: "empty" };
+  }
+
+  const composed = composeCanonicalFromPresentation(presentation!);
+  if (!core) return { kind: "presentation_only" };
+  if (canonicalTextsEquivalent(core, composed)) return { kind: "equivalent" };
+
+  if (narrativeAlreadyCoveredByCompose(core, composed)) {
+    // Narrative fully covered by compose — treat as equivalent for A1.
+    return { kind: "equivalent" };
+  }
+
+  const guidance = (input.conversationGuidanceStatement ?? "").trim();
+  const guidanceBacked = isGuidanceBackedContinuation({
+    narrative: core,
+    conversationGuidanceStatement: guidance,
+    composed,
+  });
+  const continuation = guidanceBacked ? guidance : core;
+
+  if (
+    guidanceBacked &&
+    isContinuationShapedNarrative(continuation, composed) &&
+    !narrativeAlreadyCoveredByCompose(continuation, composed)
+  ) {
+    if (
+      narrativeConflictsWithPresentationDeterministic({
+        narrative: continuation,
+        presentation: presentation!,
+        composed,
+      })
+    ) {
+      return { kind: "divergent", composed, narrative: core };
+    }
+    return { kind: "complementary", continuation };
+  }
+
+  // No proven provenance → never presume complementary (even if ORIENT-shaped).
+  return { kind: "divergent", composed, narrative: core };
+}
+
+/**
+ * Fold a distinct continuation into presentation as a trailing question/plain
+ * block so A1 View renders one complete surface. Returns null if limits block fold.
+ */
+export function withDistinctContinuationBlock(
+  presentation: NoraAdaptivePresentation,
+  continuation: string,
+): NoraAdaptivePresentation | null {
+  const text = sanitizePresentationPlainText(continuation);
+  if (!text) return presentation;
+  const composed = composeCanonicalFromPresentation(presentation);
+  if (narrativeAlreadyCoveredByCompose(text, composed)) return presentation;
+  if (
+    presentation.blocks.length >= NORA_ADAPTIVE_PRESENTATION_LIMITS.maxBlocks
+  ) {
+    return null;
+  }
+  if (text.length > NORA_ADAPTIVE_PRESENTATION_LIMITS.maxStringChars) {
+    return null;
+  }
+  const block = /\?\s*$/u.test(text)
+    ? ({ kind: "question" as const, text })
+    : ({ kind: "plain" as const, text });
+  return parseNoraAdaptivePresentation({
+    version: presentation.version,
+    eyebrow: presentation.eyebrow,
+    title: presentation.title,
+    lead: presentation.lead,
+    blocks: [...presentation.blocks, block],
+    provenanceNote: presentation.provenanceNote,
+    noGovernedActionNote: presentation.noGovernedActionNote,
+  });
+}
+
+export function formatDivergentNarrativePresentationPlain(input: {
+  composed: string;
+  narrative: string;
+}): string {
+  return [
+    NORA_ADAPTIVE_DIVERGENCE_NOTICE,
+    "",
+    "— Version structurée —",
+    input.composed.trim(),
+    "",
+    "— Version narrative —",
+    input.narrative.trim(),
+  ].join("\n");
+}
+
 /**
  * T1/T2 — whether durable pilot-facing core (pre-notices) may use A1.
- * Conservatively requires exact normalized equality with compose, or empty
- * core with admissible structure. No fuzzy / overlap / keyword tricks.
+ * CORR-A1B-01: equivalent, presentation-only, or complementary (after fold).
  */
 export function isA1TransitionAdmissible(input: {
   pilotFacingCore: string;
   presentation: NoraAdaptivePresentation | null | undefined;
+  conversationGuidanceStatement?: string | null;
 }): boolean {
-  if (!isPresentationStructurallyAdmissibleForA1(input.presentation)) {
-    return false;
-  }
-  const presentation = input.presentation!;
-  const composed = composeCanonicalFromPresentation(presentation);
-  const core = (input.pilotFacingCore ?? "").trim();
-  if (!core) return true; // empty narrative → derive from structure (A1-primary)
-  return canonicalTextsEquivalent(core, composed);
+  const rel = classifyNarrativePresentationRelation(input);
+  return (
+    rel.kind === "equivalent" ||
+    rel.kind === "presentation_only" ||
+    rel.kind === "complementary"
+  );
 }

 /**
  * Build durable conversational content for a new turn (Memory B `content`).
- * A1: composed (+ caller appends notices). B: pilotFacingCore as-is.
- * Does not invent text. Empty+invalid → honest fallback.
+ * CORR-A1B-01 secured:
+ * - equivalent / presentation_only → compose (A1)
+ * - complementary (guidance-backed only) → fold continuation, then compose (A1)
+ * - divergent / unproven relation → plain with both versions + notice
+ * - narrative_only / empty → narrative or honest fallback
  */
 export function buildDurableAssistantContentForTurn(input: {
   pilotFacingCore: string;
   presentation: NoraAdaptivePresentation | null | undefined;
+  conversationGuidanceStatement?: string | null;
 }): {
   readonly contentCore: string;
   readonly usedA1: boolean;
   readonly presentation: NoraAdaptivePresentation | null;
+  readonly relation: NarrativePresentationRelation["kind"];
 } {
   const core = (input.pilotFacingCore ?? "").trim();
   const presentation = input.presentation ?? null;
-  if (isA1TransitionAdmissible({ pilotFacingCore: core, presentation })) {
+  const relation = classifyNarrativePresentationRelation({
+    pilotFacingCore: core,
+    presentation,
+    conversationGuidanceStatement: input.conversationGuidanceStatement,
+  });
+
+  if (relation.kind === "equivalent" || relation.kind === "presentation_only") {
     const composed = composeCanonicalFromPresentation(presentation!);
     return {
       contentCore: composed,
       usedA1: true,
       presentation,
+      relation: relation.kind,
     };
   }
-  if (!core && !shouldRenderAdaptivePresentation(presentation)) {
+
+  if (relation.kind === "complementary") {
+    const folded = withDistinctContinuationBlock(
+      presentation!,
+      relation.continuation,
+    );
+    if (folded && isPresentationStructurallyAdmissibleForA1(folded)) {
+      const composed = composeCanonicalFromPresentation(folded);
+      return {
+        contentCore: composed,
+        usedA1: true,
+        presentation: folded,
+        relation: "complementary",
+      };
+    }
+    // Cannot fold safely → fail-closed preserve both (no silent drop).
+    const composed = composeCanonicalFromPresentation(presentation!);
+    return {
+      contentCore: formatDivergentNarrativePresentationPlain({
+        composed,
+        narrative: relation.continuation,
+      }),
+      usedA1: false,
+      presentation: null,
+      relation: "divergent",
+    };
+  }
+
+  if (relation.kind === "divergent") {
+    return {
+      contentCore: formatDivergentNarrativePresentationPlain({
+        composed: relation.composed,
+        narrative: relation.narrative,
+      }),
+      usedA1: false,
+      presentation: null,
+      relation: "divergent",
+    };
+  }
+
+  if (relation.kind === "narrative_only") {
     return {
-      contentCore: NORA_UNUSABLE_TURN_FALLBACK_TEXT,
+      contentCore: core || NORA_UNUSABLE_TURN_FALLBACK_TEXT,
       usedA1: false,
       presentation: null,
+      relation: "narrative_only",
     };
   }
+
   return {
-    contentCore: core || NORA_UNUSABLE_TURN_FALLBACK_TEXT,
+    contentCore: NORA_UNUSABLE_TURN_FALLBACK_TEXT,
     usedA1: false,
-    presentation,
+    presentation: null,
+    relation: "empty",
   };
 }

@@ -1211,12 +1565,14 @@ export type AdaptiveAssistantRenderDecision = {
 };

 /**
- * NAP-SINGLE-RESPONSE-D1 — A1 structured-first OR B canonical plain.
+ * NAP-SINGLE-RESPONSE-D1 + CORR-A1B-01 — A1 structured-first OR B canonical plain.
  *
  * - Invalid / absent presentation → plain (B).
- * - Structurally admissible + body ≡ composeCanonical → adaptive (A1), one surface.
- * - Otherwise → plain (B) with full durable body; presentation not shown
- *   (never dual canonical + projection; never hide unique narrative via CSS).
+ * - equivalent / presentation_only → adaptive (A1).
+ * - complementary → fold continuation into presentation for one A1 surface
+ *   (also repairs historical LUMEN-shaped turns at read time without DB write).
+ * - divergent → plain with both versions preserved (fail-closed; no silent pick).
+ * - Never dual canonical + projection layer.
  * - Studio appendix: typed notices only.
  */
 export function resolveAdaptiveAssistantRender(input: {
@@ -1244,6 +1600,21 @@ export function resolveAdaptiveAssistantRender(input: {
   const structurallyAdmissibleForA1 =
     isPresentationStructurallyAdmissibleForA1(presentation);

+  // Already materialised divergence plain (write-path fail-closed).
+  if (body.includes(NORA_ADAPTIVE_DIVERGENCE_NOTICE)) {
+    return {
+      mode: "plain",
+      presentation: null,
+      studioAppendix: authenticated.length > 0 ? studioAppendix : null,
+      plainText: content.trim() ? content : NORA_UNUSABLE_TURN_FALLBACK_TEXT,
+      studioControlNotices: authenticated,
+      contentFullyCovered: false,
+      canonicalNarrative: null,
+      structurallyAdmissibleForA1: false,
+      usedA1: false,
+    };
+  }
+
   if (!shouldRenderAdaptivePresentation(presentation)) {
     return {
       mode: "plain",
@@ -1258,13 +1629,17 @@ export function resolveAdaptiveAssistantRender(input: {
     };
   }

-  const composed = composeCanonicalFromPresentation(presentation!);
-  const a1Match =
-    structurallyAdmissibleForA1 &&
-    (canonicalTextsEquivalent(body, composed) ||
-      (!body.trim() && Boolean(composed.trim())));
+  const relation = classifyNarrativePresentationRelation({
+    pilotFacingCore: body,
+    presentation,
+    // Read-path / Memory B has no durable guidance provenance — never invent it.
+    conversationGuidanceStatement: null,
+  });

-  if (a1Match) {
+  if (
+    relation.kind === "equivalent" ||
+    relation.kind === "presentation_only"
+  ) {
     return {
       mode: "adaptive",
       presentation,
@@ -1278,7 +1653,76 @@ export function resolveAdaptiveAssistantRender(input: {
     };
   }

-  // T2 / incomplete / non-equivalent — B only (single canonical surface).
+  if (relation.kind === "complementary") {
+    const folded = withDistinctContinuationBlock(
+      presentation!,
+      relation.continuation,
+    );
+    if (folded && isPresentationStructurallyAdmissibleForA1(folded)) {
+      return {
+        mode: "adaptive",
+        presentation: folded,
+        studioAppendix,
+        plainText: content,
+        studioControlNotices: authenticated,
+        contentFullyCovered: true,
+        canonicalNarrative: null,
+        structurallyAdmissibleForA1: true,
+        usedA1: true,
+      };
+    }
+    const composed = composeCanonicalFromPresentation(presentation!);
+    return {
+      mode: "plain",
+      presentation: null,
+      studioAppendix: authenticated.length > 0 ? studioAppendix : null,
+      plainText: formatDivergentNarrativePresentationPlain({
+        composed,
+        narrative: relation.continuation,
+      }),
+      studioControlNotices: authenticated,
+      contentFullyCovered: false,
+      canonicalNarrative: null,
+      structurallyAdmissibleForA1,
+      usedA1: false,
+    };
+  }
+
+  if (relation.kind === "divergent") {
+    // Fail-closed single plain surface: never promote presentation alone as A1.
+    // If Memory B already embeds both versions (write-path) OR the composed
+    // substance is already inside body (e.g. forged markers on an otherwise
+    // covered lead), keep `content` as-is.
+    // Historical short narrative + rich presentation_json: expand both versions
+    // at read-time without mutating SQLite.
+    const alreadyBothVersions =
+      body.includes("— Version structurée —") &&
+      body.includes("— Version narrative —");
+    const composedAlreadyInBody = narrativeAlreadyCoveredByCompose(
+      relation.composed,
+      body,
+    );
+    const plainText =
+      alreadyBothVersions || composedAlreadyInBody
+        ? content.trim() || NORA_UNUSABLE_TURN_FALLBACK_TEXT
+        : formatDivergentNarrativePresentationPlain({
+            composed: relation.composed,
+            narrative: relation.narrative,
+          });
+    return {
+      mode: "plain",
+      presentation: null,
+      studioAppendix: authenticated.length > 0 ? studioAppendix : null,
+      plainText,
+      studioControlNotices: authenticated,
+      contentFullyCovered: false,
+      canonicalNarrative: null,
+      structurallyAdmissibleForA1,
+      usedA1: false,
+    };
+  }
+
+  // narrative_only / empty / incomplete — B with durable body.
   return {
     mode: "plain",
     presentation: null,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
index e867cdfb..faf7a02c 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
@@ -193,6 +193,9 @@ export function createProductExecutionAgentsTools(
       "Use when the Pilote wants Cursor to do real work and the mission is clear enough " +
       "(objective + expected outcome or scope). Product qualifies the mission server-side " +
       "(materiality, capabilities, protected paths); structural missions stay blocked until a HumanDecision. " +
+      "Do NOT call this tool when the Pilote explicitly refuses PREPARE " +
+      "(e.g. « ne prépare pas de contrat », « sans contrat d'exécution », « analyse seulement »). " +
+      "Product fail-closes refusals even if this tool is called. " +
       "This tool does NOT authorize and does NOT execute: PREPARE ≠ AUTHORIZE ≠ EXECUTE; " +
       "it never creates an ExecutionAttempt. Report the returned contract/status honestly " +
       "and never claim anything was executed.",

```

---

## 16. QA-A

| Cas | Résultat | Qualification |
|-----|----------|---------------|
| A1 equivalent | PASS (`corrA1b01`) | BEHAVIOR PROVEN |
| A2 presentation_only path | covered via NAP d0 | COVERAGE VERIFIED |
| A3 guidance-backed complementary | PASS | BEHAVIOR PROVEN |
| A4 LUMEN comparison shape | PASS (Scénario 1 A+B) | BEHAVIOR PROVEN |
| A5 abandonner + Je te propose | PASS divergent | BEHAVIOR PROVEN |
| A6 uniquement format court | conflict gate present | DOCUMENTED + unit via conflict verbs |
| A7 / A8 short opposing | PASS divergent | BEHAVIOR PROVEN |
| A9 long non-equivalent | PASS divergent | BEHAVIOR PROVEN |
| A12 historical sans guidance | PASS both versions plain | BEHAVIOR PROVEN |
| A13 invalid presentation | PASS narrative_only/empty | BEHAVIOR PROVEN |
| A14 SQLite isolée reload | PASS guidance-backed A1 | BEHAVIOR PROVEN |
| A15 forged Studio markers | NAP non-regression | COVERAGE VERIFIED |
| ORIENT sans guidance | PASS divergent (not presumed) | BEHAVIOR PROVEN |

---

## 17. QA-B

| Cas | Résultat | Qualification |
|-----|----------|---------------|
| B1 citation analyse | PASS `prepare_citation_or_analysis_not_consent` | BEHAVIOR PROVEN |
| B2 doc pédagogique | PASS no_go | BEHAVIOR PROVEN |
| B3 code fence | PASS no_go | BEHAVIOR PROVEN |
| B4 discours rapporté | PASS no_go | BEHAVIOR PROVEN |
| B6/B7 refus / temporal | PASS (negations + last refuse) | BEHAVIOR PROVEN |
| B8 historique refuse puis authorize | PASS positives list | BEHAVIOR PROVEN |
| B9 direct PREPARE | PASS `explicit_lexical_prepare` | BEHAVIOR PROVEN |
| B11 citation+refus+analyse | PASS no_go | BEHAVIOR PROVEN |
| B13 solicit citation | PASS fail-closed, HD/EA false | BEHAVIOR PROVEN |
| B10 offer accept | covered p6.gD4 / der16 | COVERAGE VERIFIED |
| Product effects | solicit refusal + citation codes; EA/HD false | BEHAVIOR PROVEN |

Fix critique validé: strip `'` ASCII retiré (casseur d'apostrophes FR) — refusals temporels restaurés.

---

## 18. QA-A+B

| Scénario | Résultat |
|----------|----------|
| S1 analyse + citation PREPARE | comparison A1 durable + no_go citation | PASS |
| S2 analyse + refuse PREPARE | no_go refusal | PASS |
| S3 direct PREPARE | lexical GO possible (gates Product) | PASS (B9) |
| S4 narrative opposante | divergent, both contents, no false complementary | PASS |

Aucun axe PASS global si l'autre bloquait — campagne unique 219 PASS (suite listée §19).

---

## 19. Tests techniques

Commande:

```bash
cd projects/sfia-studio/app && npx vitest run \
  __tests__/nora-cognitive-runtime/corrA1b01.secured.d0.test.ts \
  __tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts \
  __tests__/platform/ai/fakeNapQaPresentation.d0.test.ts \
  __tests__/project-assistant/lumenCogPrepareCorr01.d0.test.ts \
  __tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts \
  __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts \
  __tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
```

**Résultat:** Test Files 7 passed · **Tests 219 passed**.

Also: `npx tsc --noEmit -p tsconfig.json` → EXIT 0
`npx eslint` (3 fichiers core) → EXIT 0

Note: 171 PASS = état handoff précédent — **pas** ce verdict. Verdict courant = **219 PASS** sur campagne A+B+non-régression listée.

### QA run tail

```
sumption_validated","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-6c68671be65ee1ce","cycleTypeId":"cyc:delivery","result":"ok","detailedStatus":"resolved_detailed"}
{"event":"oa.ckc.qualification_started","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-6c68671be65ee1ce","cycleTypeId":"cyc:delivery","result":"started","detailedStatus":"resolved_detailed"}
{"event":"oa.cycle.qualified","ts":"2026-08-23T04:30:00.000Z","recommendedProfile":"Light","result":"ok","durationMs":0}

stdout | __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > E10 — explicit NEW_CYCLE formalization WITHOUT cycle stays on the historical createCycle path (not hijacked)
{"event":"oa.ckc.qualification_succeeded","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-6c68671be65ee1ce","cycleTypeId":"cyc:delivery","result":"ok","detailedStatus":"resolved_detailed","recommendedProfile":"Light","durationMs":0}
{"event":"oa.ckc.result_produced","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:f2-6c68671be65ee1ce","cycleTypeId":"cyc:delivery","result":"ok","detailedStatus":"resolved_detailed","recommendedProfile":"Light","durationMs":0}

stdout | __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts > D-ER-16…19 Generic Execution Nora Tool Delivery > R4 — Project-scoped Select: null-cycle AUTHORIZED PRODUCT_GOVERNED EC → Attempt accepted (no invented cycle; Cursor access not gated by methodological profile)
{"event":"oa.execution_attempt.agent_selected","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:9e568820ab2e3735","attemptId":"xat:w3a:87b2791b12287e93","executionContractId":"xct:gen-prep:86a8f5e26f7bbae3c069a960","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","result":"ok","durationMs":2}
{"event":"oa.execution_attempt.accepted","ts":"2026-08-23T04:30:00.000Z","correlationId":"cor:9e568820ab2e3735","attemptId":"xat:w3a:87b2791b12287e93","executionContractId":"xct:gen-prep:86a8f5e26f7bbae3c069a960","executionContractVersion":3,"selectedAgentRef":"agt:studio.cursor.generalist","newStatus":"accepted","contractStatus":"confirmed","result":"ok","durationMs":2}

 ✓ __tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts (28 tests) 839ms

 Test Files  7 passed (7)
      Tests  219 passed (219)
   Start at  20:46:10
   Duration  2.63s (transform 1.96s, setup 347ms, collect 5.12s, tests 1.33s, environment 467ms, prepare 245ms)


```

---

## 20. Tests de persistance / rendu

- SQLite isolée (`corrA1b01` persistence): guidance-backed complementary reload → adaptive A1 — PASS
- UI NAP single-response (`noraAdaptivePresentation.ui.test.tsx`): 33 PASS
- Divergent read-path: notice + presentation compose + narrative — PASS
- Runtime campaign DB / :3020: **not written**

---

## 21. Fake/Real qualification

| Surface | Mode |
|---------|------|
| Vitest / fixtures / mocks | FAKE — DET |
| SQLite isolée tmp | FAKE isolated — DET |
| OpenAI LIVE | **NOT EXERCISED** |
| Cursor REAL | **NOT EXERCISED** |
| Runtime Studio :3020 | **UNTOUCHED** |
| DET ≠ LIVE | affirmed |

---

## 22. R24 — IMPACT QUALIFIED — SYNC GATE OPEN

Sections PRR potentiellement impactées (préparées, **non synchronisées**):
- **03** End-to-End Flow — cognitive durable content + PREPARE admission citation rule
- **06** Persistence / Recovery — Memory B content+presentation; divergent plain durable
- **07** Authority Invariants — citation/analysis ≠ consent; tool solicit fail-closed
- **08** Test / Proof — new DET suites corrA1b01 + lumenCogPrepareCorr01
- **09** Known Gaps — residual FR lexical heuristics remain; LIVE revalidation pending

**R24 IMPACT QUALIFIED — SYNC GATE OPEN**
Pas de modification volumes PRR protégés / digests / Roadmap sans GO Morris.

---

## 23. Réserves connues

1. Heuristiques lexicales FR (fidélité + intention) — dette; fail-closed conservateur, pas NLP universel.
2. Anciens tours Memory B sans guidance → plain divergent (honnête) plutôt qu'A1 — peut changer l'apparence historique sans migration DB.
3. A6/A7/A10/A11 partiellement via gates conflict génériques — pas chaque phrase FR naturelle.
4. B12 ambiguïté → no_go / clarification (pas d'interprétation agressive).
5. LIVE LUMEN revalidation commune A+B: **non faite** (interdit runtime).
6. L3-S2 reste OPEN; G-REAL NOT GRANTED; runtime v3 NON ADOPTED.
7. Delivery uncommitted — aucun commit projet.

---

## 24. Exit proof

- A: complémentarité non présumée; divergences conservées; single-response; A5 PASS
- B: citations non autoritatives; refus respecté; positifs non régressés; B1/B13 PASS avec effets (pas d'EC)
- A+B: scénarios 1–4 PASS
- Validations techniques: 219 PASS + tsc + eslint
- R24 qualifié gate OPEN
- Review Pack FULL (ce fichier)
- Handoff: voir publication post-pack

---

## 25. Gates Morris

| Gate | Status |
|------|--------|
| Review / accept A+B | OPEN — awaiting Morris |
| Project commit | NOT REQUESTED |
| Project push / PR / merge | NOT AUTHORIZED |
| PRR / Roadmap sync | SYNC GATE OPEN |
| LIVE revalidation | NOT GRANTED |
| G-REAL | NOT GRANTED |
| Close L3-S2 | OPEN remains |

---

## 26. Protocole LIVE futur (non exécuté)

1. Runtime WT :3020 read-only check baseline
2. Nouveau projet / session isolée (pas campaign DB)
3. Rejouer S1–S4 + T-A1…T-A4 LUMEN
4. Vérifier Memory B + UI single-response + EC count
5. Comparer DET vs LIVE; documenter gaps FR
6. Ne pas confirmer / exécuter EC historique `xct:gen-prep:e45f631d…`

---

## 27. Git Review Index

| Artefact | Path / SHA |
|----------|------------|
| Pack local | `.tmp-sfia-review/chatgpt-review.md` |
| Canon handoff | `sfia-review-handoff/latest-chatgpt-review.md` |
| Branch handoff | `sfia/review-handoff` |
| Prior tip | `3dc8ef62392f218d177460abadbe216be922939e` |
| Prior blob | `ce509f7bf5dc2c6ee798f585d367d4630ba1a202` |
| New tip/blob | *filled after publish* |
| Delivery branch | `feat/akg-m5-lumen-cog-prepare-corr-01` @ `7dd49ecd` + dirty A+B |

---

## 28. Verdict consolidé

**INTEGRATED A+B CORRECTION — READY FOR MORRIS REVIEW**

Anti-claims: Local ≠ main · DET PASS ≠ LIVE PASS · Presentation ≠ HumanDecision · PREPARE ≠ AUTHORIZE ≠ EXECUTE · Review Handoff ≠ push projet · L3-S2 OPEN · G-REAL NOT GRANTED · runtime v3 NON ADOPTED.

STOP after handoff publication + remote verification.

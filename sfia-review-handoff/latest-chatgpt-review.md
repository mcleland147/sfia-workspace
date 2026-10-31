# SFIA STUDIO — AKG-M5 / L3-S2
# LUMEN — INTEGRATED CORRECTION A+B
# CORR-A1B-01 SECURED + TEST-15 HARDENING
# REVIEW PACK FULL

**Horodatage (Europe/Paris):** 2026-10-31 20:58:23 +0200
**Horodatage UTC:** 2026-10-31T18:58:23Z
**GO Morris:** Correction locale intégrée A+B autorisée — 2026-10-31
**Milestone:** AKG-M5 / L3-S2 — OPEN
**Cycle:** 8 Delivery + 9 QA intégré — CRITICAL — INC/EVOL
**Review Pack:** FULL (autosuffisant, continuité mono-chantier)
**Review Handoff:** REQUIRED — publish-in-cycle (L3)
**move_agent_to_root:** NON UTILISÉ (chemins absolus delivery WT)

---

## 1. Git Truth

| Item | Value |
|------|-------|
| Delivery WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-lumen-cog-prepare-corr-01` |
| Branch | `feat/akg-m5-lumen-cog-prepare-corr-01` |
| HEAD | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| origin/main | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| Run WT :3020 | `/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-campaign-3020` @ `7dd49ecd` — **non modifié** |
| Studio | UP HTTP 307 — **non redémarré** |
| Handoff tip pré | `b9e3ddf3c2e1e15ec5c895ad437e81ca6a81670b` |
| Handoff blob pré | `1e6a7871a3d90d7987e7a29bb25f403ee3c83d9f` |
| Dirty | corrections A+B locales non commit projet |

---

## 2. GO Morris / Convergence

GO : correction Product locale A+B. Non accordés : push/PR/merge projet, chemins protégés, SQLite LIVE, REAL, doctrine, v3.

Pre-check : template cycle, routing, operating model, CKC QA guidance, Build Doctrine, Roadmap, C1, M5 journey, v3 30–35, PRR 03/05–09, handoff `b9e3ddf3` (H2 PROVEN).

---

## 3. Trajectoire V3-F05 / L3-S2

Capacité V3-F05. L3-S2 **OPEN**. G-REAL **NOT GRANTED**. Runtime v3 **NON ADOPTED**.

---

## 4. Diagnostic H2 (établi — rappel)

Quatre tours LUMEN même turnId : presentation A1-admissible riche + narrative courte → ancien resolve → B/plain masquant comparison_table. H2 **PROVEN**. T-B PREPARE cause distincte. RAW MODEL OUTPUT **NOT OBSERVABLE**.

---

## 5. Architecture CORR-A1B-01 sécurisé

### Choix retenu
Classifier déterministe `classifyNarrativePresentationRelation` puis :

| Cas | Relation | Durable / Render |
|-----|----------|------------------|
| A | `equivalent` / `presentation_only` | compose → A1 |
| B | `complementary` | fold continuation en block question/plain → compose → A1 (1 surface) |
| C | `divergent` | plain fail-closed avec **les deux** versions + notice Studio ; presentation non promue |
| D | `narrative_only` / `empty` | plain honnête / fallback |

Continuation détectée **structurellement** (question `?`, openers ORIENT FR, longueur relative bornée) — **pas** de réconciliation sémantique floue.

Read-path : même classification répare l'affichage historique LUMEN-shaped **sans écrire** dans SQLite campagne.

### Alternatives rejetées
1. « Toujours remplacer narrative par compose si A1-admissible » — perte silencieuse d'info distincte / contradiction.
2. Dual `adaptive_with_canonical` — interdit par single-response / GO.
3. Prompt-only — insuffisant (H2 déjà avec presentation riche).
4. Moteur sémantique parallèle — hors scope / non déterministe.

### Point minimal
`buildDurableAssistantContentForTurn` + `resolveAdaptiveAssistantRender` (+ helpers) dans `noraAdaptivePresentation.ts`. Orchestration existante déjà appelle buildDurable. Prompt ANSWER primacy **conservé** (complément génération, pas substitut Product).

---

## 6. Contrat de restitution

- Une seule réponse visible.
- Substance structurée non masquée (CAS B).
- Continuation utile conservée une fois (fold / dedupe containment).
- Divergence matérielle : notice + deux versions, pas de pick silencieux.
- presentation ≠ Truth C / HD / Evidence.

---

## 7. Correction A — détails

Fichier : `lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`

Ajouts : `NORA_ADAPTIVE_DIVERGENCE_NOTICE`, `classifyNarrativePresentationRelation`, `isContinuationShapedNarrative`, `narrativeAlreadyCoveredByCompose`, `withDistinctContinuationBlock`, `formatDivergentNarrativePresentationPlain` ; `buildDurable` retourne `relation` ; resolve A1/B aligné.

Replay LUMEN après correctif (read-path, sans mutation DB) :

```json
[
  {
    "seq": 1,
    "turn_id": "pt:06a8beb5a7fc577a",
    "relation": "complementary",
    "render_mode": "adaptive",
    "render_usedA1": true,
    "has_table": true,
    "durable_usedA1": true,
    "durable_relation": "complementary"
  },
  {
    "seq": 3,
    "turn_id": "pt:b796154ad8685d64",
    "relation": "equivalent",
    "render_mode": "adaptive",
    "render_usedA1": true,
    "has_table": true,
    "durable_usedA1": true,
    "durable_relation": "equivalent"
  },
  {
    "seq": 5,
    "turn_id": "pt:73bcbfb54b43dac7",
    "relation": "complementary",
    "render_mode": "adaptive",
    "render_usedA1": true,
    "has_table": true,
    "durable_usedA1": true,
    "durable_relation": "complementary"
  },
  {
    "seq": 7,
    "turn_id": "pt:01f15609efea28fe",
    "relation": "complementary",
    "render_mode": "adaptive",
    "render_usedA1": true,
    "has_table": true,
    "durable_usedA1": true,
    "durable_relation": "complementary"
  },
  {
    "seq": 9,
    "turn_id": "pt:6c1b7e274db42cab",
    "relation": "narrative_only",
    "render_mode": "plain",
    "render_usedA1": false,
    "has_table": false,
    "durable_usedA1": false,
    "durable_relation": "narrative_only"
  }
]
```

T-A1…T-A4 : **adaptive + comparison_table**. T-B : plain narrative_only (EC announce). Historique DB non réécrit — documenté.

---

## 8. Correction B — TEST-15 hardening

Fichier : `w2/prepareGenericExecutionContractDraft.ts` (+ gates orchestrate/tool déjà présents).

Élargissement refus : surtout pas, refuse que tu prépar*, ne prépare rien Cursor, ne crée aucun, analyse seulement sans lancer mission, mais ne crée… Override déterministe : refus historique + « maintenant/désormais… prépare le contrat » → plus refusal (positive GO possible).

Conservé : intent/accept/resolve/solicit fail-closed, tool enqueue refuse, tool description.

---

## 9–11. Tests

### Commandes
```
npx vitest run \
  __tests__/nora-cognitive-runtime/corrA1b01.secured.d0.test.ts \
  __tests__/project-assistant/lumenCogPrepareCorr01.d0.test.ts \
  __tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts \
  __tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
npx vitest run __tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
```

### Résultats
- corrA1b01 : **10 PASS**
- lumenCogPrepareCorr01 : **6 PASS**
- p6.gD4 : **11 PASS**
- noraAdaptivePresentation.d0 : **108 PASS**
- noraAdaptivePresentation.ui : **33 PASS**
- **Total ciblé : 168 PASS / 0 FAIL**

QA-A : LUMEN-shaped complementary → A1 table+continuation ; equivalence ; absent ; divergent fail-closed ; SQLite isolée reload.
QA-B : négatifs élargis + override positif historique ; solicit EXPLICIT_PREPARE_REFUSAL.
QA-A+B : analyse comparative demandée + refus → no_go + durable A1 comparison.

---

## 12. Persistance / UI

- Nouveaux tours : content ≡ compose (évent. fold) ; presentation_json cohérente ; resolve A1.
- Anciens tours LUMEN : DB inchangée ; **read-path** affiche A1 si complementary (pas de migration silencieuse).
- UI ConversationSurface inchangée (consomme resolve).

---

## 13. Fake/Real Qualification

| Frontière | Ce cycle |
|-----------|----------|
| OpenAI LIVE | non exercé |
| Cursor REAL | non exercé (G-REAL NOT GRANTED) |
| Product SQLite campagne | RO only / non muté |
| SQLite isolée test | BEHAVIOR PROVEN |
| Fonctions pures A1/B + admission | BEHAVIOR PROVEN |
| LIVE emit global | KNOWN GAP / NOT PROVEN |

DET ≠ LIVE.

---

## 14. R23

Composants touchés : noraAdaptivePresentation (BEHAVIOR PROVEN), prepareGeneric… (BEHAVIOR PROVEN), orchestrateTurn/tool/prompt (conservés COVERAGE VERIFIED). Invariants SHE / PREPARE≠EXECUTE préservés. Risque : fold continuation si maxBlocks → fail-closed divergent (prouvé).

---

## 15. R24 — IMPACT QUALIFIED / SYNC GATE OPEN

PRR **non édité** (chemin protégé sans GO).

| Volume | Contenu proposé |
|--------|-----------------|
| 03 | Contrat A1/B CAS A–D ; complementary fold ; divergent notice |
| 06 | durable content/presentation ; historique non migré ; read-path repair |
| 07 | refusal Product ; override « maintenant prépare » ; cognition ≠ consent |
| 08 | corrA1b01 + lumenCogPrepareCorr01 + G-D4 TEST-15 |
| 09 | H2 CORRECTED LOCAL DET ; LIVE revalidation OPEN ; TEST-15 réserves citations complexes |

Pas de digest refresh.

---

## 16. Fichiers

| Path | Status |
|------|--------|
| `noraAdaptivePresentation.ts` | M |
| `prepareGenericExecutionContractDraft.ts` | M |
| `orchestrateTurn.ts` | M (B préexistant) |
| `buildProjectSystemPrompt.ts` | M (ANSWER préexistant) |
| `productExecutionAgentsTools.ts` | M (B préexistant) |
| `p6.gD4….d0.test.ts` | M |
| `lumenCogPrepareCorr01.d0.test.ts` | A/M |
| `corrA1b01.secured.d0.test.ts` | A |

---

## 17. Contenu complet — fichiers créés

### corrA1b01.secured.d0.test.ts
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

  it("CAS B — short ORIENT + rich presentation → complementary", () => {
    const p = richComparisonPresentation();
    const rel = classifyNarrativePresentationRelation({
      pilotFacingCore:
        "Pour préciser le périmètre pédagogique, quels usages du quotidien voudrais-tu traiter en priorité ?",
      presentation: p,
    });
    expect(rel.kind).toBe("complementary");
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

  it("CAS B LUMEN-shaped — comparison visible + continuation preserved once", () => {
    const p = richComparisonPresentation();
    const continuation =
      "Pour préciser le périmètre pédagogique, quels usages du quotidien voudrais-tu traiter en priorité ?";
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: continuation,
      presentation: p,
    });
    expect(built.usedA1).toBe(true);
    expect(built.relation).toBe("complementary");
    expect(built.contentCore).toContain("Trois possibilités");
    expect(built.contentCore).toContain("usages du quotidien");
    // No naive duplication of the continuation beyond the folded block.
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

  it("CAS B historical read-path — short Memory B content still yields A1", () => {
    const p = richComparisonPresentation();
    const short =
      "Je te propose de poursuivre le cadrage en confrontant ces formats aux disponibilités du centre.";
    const d = resolveAdaptiveAssistantRender({
      content: short,
      presentation: p,
    });
    expect(d.mode).toBe("adaptive");
    expect(d.presentation?.blocks.some((b) => b.kind === "comparison_table")).toBe(
      true,
    );
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

  it("persistence isolated SQLite — complementary durable reloads as A1", () => {
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
      const built = buildDurableAssistantContentForTurn({
        pilotFacingCore:
          "Je te propose de vérifier ensuite les créneaux disponibles au centre.",
        presentation: p,
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

### lumenCogPrepareCorr01.d0.test.ts
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
  }) as ProjectAssistantContextDto;

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
  ];

  it("negations are refusal and not lexical prepare GO", () => {
    for (const text of negatives) {
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
});

describe("LUMEN cog+prepare corr-01 — A+B product effects", () => {
  it("analytical ask + PREPARE refusal: comparison durable A1 and no prepare GO", () => {
    const utterance =
      "Prépare une analyse comparative détaillée des trois formats pédagogiques de LUMEN. " +
      "Je veux les avantages, limites, ressources et ta recommandation. " +
      "Ne prépare pas de contrat d'exécution.";
    expect(hasExplicitPrepareContractRefusal(utterance)).toBe(true);
    expect(
      resolveChatFirstGenericPrepareGo({
        projectId: "prj:lumen",
        cycleInstanceId: "cyc:lumen",
        text: utterance,
      }).kind,
    ).toBe("no_go");

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
      }).kind,
    ).toBe("complementary");
    const built = buildDurableAssistantContentForTurn({
      pilotFacingCore: shortOrient,
      presentation,
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
});

```

## 18. Diffs utiles COMPLETS

### noraAdaptivePresentation.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
index 96621586..40d8d3fe 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
@@ -981,29 +981,178 @@ export function canonicalTextsEquivalent(a: string, b: string): boolean {
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
+ * Continuation / ORIENT-shaped narrative that may complement a rich presentation
+ * without material contradiction detection (no fuzzy keyword reconciliation).
+ * Bounds are structural (length / question / fixed ORIENT openers) only.
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
+  // Short relative ORIENT vs substantial structured body (LUMEN-shaped).
+  if (nComp >= 800 && nCore > 0 && nCore <= 400 && nCore * 4 <= nComp) {
+    return true;
+  }
+  return false;
+}
+
+/**
+ * CORR-A1B-01 — classify narrative vs presentation without semantic guessing.
+ */
+export function classifyNarrativePresentationRelation(input: {
+  pilotFacingCore: string;
+  presentation: NoraAdaptivePresentation | null | undefined;
+}): NarrativePresentationRelation {
+  const core = (input.pilotFacingCore ?? "").trim();
+  const presentation = input.presentation ?? null;
+  const admissible = isPresentationStructurallyAdmissibleForA1(presentation);
+
+  if (!core && !admissible) {
+    if (!shouldRenderAdaptivePresentation(presentation)) {
+      return { kind: "empty" };
+    }
+    // Invalid / incomplete structure — treat as narrative absence.
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
+  if (
+    isContinuationShapedNarrative(core, composed) &&
+    !narrativeAlreadyCoveredByCompose(core, composed)
+  ) {
+    return { kind: "complementary", continuation: core };
+  }
+  if (
+    isContinuationShapedNarrative(core, composed) &&
+    narrativeAlreadyCoveredByCompose(core, composed)
+  ) {
+    // Continuation already inside blocks — equivalent for A1 purposes.
+    return { kind: "equivalent" };
+  }
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
+ * - complementary → fold continuation into presentation, then compose (A1)
+ * - divergent → plain with both versions + notice (fail-closed, no silent pick)
+ * - narrative_only / empty → narrative or honest fallback
  */
 export function buildDurableAssistantContentForTurn(input: {
   pilotFacingCore: string;
@@ -1012,28 +1161,78 @@ export function buildDurableAssistantContentForTurn(input: {
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
+  });
+
+  if (relation.kind === "equivalent" || relation.kind === "presentation_only") {
     const composed = composeCanonicalFromPresentation(presentation!);
     return {
       contentCore: composed,
       usedA1: true,
       presentation,
+      relation: relation.kind,
+    };
+  }
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
     };
   }
-  if (!core && !shouldRenderAdaptivePresentation(presentation)) {
+
+  if (relation.kind === "divergent") {
     return {
-      contentCore: NORA_UNUSABLE_TURN_FALLBACK_TEXT,
+      contentCore: formatDivergentNarrativePresentationPlain({
+        composed: relation.composed,
+        narrative: relation.narrative,
+      }),
       usedA1: false,
       presentation: null,
+      relation: "divergent",
     };
   }
+
+  if (relation.kind === "narrative_only") {
+    return {
+      contentCore: core || NORA_UNUSABLE_TURN_FALLBACK_TEXT,
+      usedA1: false,
+      presentation: null,
+      relation: "narrative_only",
+    };
+  }
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

@@ -1211,12 +1410,14 @@ export type AdaptiveAssistantRenderDecision = {
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
@@ -1244,6 +1445,21 @@ export function resolveAdaptiveAssistantRender(input: {
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
@@ -1258,13 +1474,15 @@ export function resolveAdaptiveAssistantRender(input: {
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
+  });

-  if (a1Match) {
+  if (
+    relation.kind === "equivalent" ||
+    relation.kind === "presentation_only"
+  ) {
     return {
       mode: "adaptive",
       presentation,
@@ -1278,7 +1496,60 @@ export function resolveAdaptiveAssistantRender(input: {
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
+    // Fail-closed B: never promote presentation alone.
+    // Preserve Memory B `content` as-is on read (notices, forged markers, unique
+    // narrative). Write-path already embeds both versions when durable was built
+    // via formatDivergentNarrativePresentationPlain.
+    return {
+      mode: "plain",
+      presentation: null,
+      studioAppendix: authenticated.length > 0 ? studioAppendix : null,
+      plainText: content.trim() ? content : NORA_UNUSABLE_TURN_FALLBACK_TEXT,
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

```

### prepareGenericExecutionContractDraft.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 4b370302..154610e6 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -87,13 +87,140 @@ export type GenericMissionPrepareReadiness = {
   readonly missingFields: readonly string[];
 };

+/**
+ * Historical refusal mentioned then clearly overridden by a CURRENT positive
+ * PREPARE instruction ("maintenant prépare le contrat…"). Not a consent invent —
+ * only suppresses a stale refusal match so positive lexical GO can apply.
+ */
+function hasCurrentPositivePrepareOverridingHistoricalRefusal(
+  text: string,
+): boolean {
+  const t = text.trim().toLowerCase();
+  if (!t) return false;
+  const hasHistoricalRefusal =
+    /\b(ne\s+(me\s+)?(prépare|prepare|préparer)\s+pas|je\s+refuse|pas\s+de\s+contrat)\b/.test(
+      t,
+    );
+  if (!hasHistoricalRefusal) return false;
+  return /\b(maintenant|désormais|cette\s+fois|finalement|plutôt)\b[\s\S]{0,60}\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,50}\b(contrat|executioncontract|execution contract|mission)\b/.test(
+    t,
+  );
+}
+
+/**
+ * Explicit Pilote refusal of ExecutionContract PREPARE (TEST-15 / LUMEN).
+ * Fail-closed at Product admission — cognition may solicit, but refusal
+ * is never an authorization to PREPARE.
+ */
+export function hasExplicitPrepareContractRefusal(text: string): boolean {
+  const t = text.trim().toLowerCase();
+  if (!t) return false;
+  // Citation / stale refusal superseded by an explicit current positive PREPARE.
+  if (hasCurrentPositivePrepareOverridingHistoricalRefusal(t)) return false;
+
+  // "Ne prépare pas / surtout pas … contrat|mission"
+  if (
+    /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+(surtout\s+)?pas\b[\s\S]{0,80}\b(contrat|executioncontract|execution contract|mission)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // "Ne prépare rien pour Cursor / aucune mission"
+  if (
+    /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+rien\b[\s\S]{0,60}\b(cursor|contrat|mission|exécution|execution)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // "Je refuse que tu prépares / prépare un contrat"
+  if (
+    /\b(refuse|refus\w*)\b[\s\S]{0,60}\b(pr[ée]par\w*|cr[ée]er?|cr[ée]e)\b[\s\S]{0,50}\b(contrat|executioncontract|execution contract|mission)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // "ne crée aucun contrat" / "sans créer de contrat"
+  if (
+    /\b(ne\s+)?(cr[ée]e|creer|créer|crée)\s+(pas|aucun|aucune)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  if (
+    /\bsans\s+(cr[ée]er?|créer|crée)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // "pas de contrat d'exécution" / "pas de contrat" / "sans contrat"
+  if (
+    /\b(pas|sans|aucune?|aucun)\s+(de\s+|d[''])?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  if (
+    /\bsans\s+(préparer|preparer|prepare)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // "je ne veux pas de contrat" / "analyse seulement, sans lancer de mission"
+  if (
+    /\b(ne\s+)?(veux|veut|souhait\w*|lance|lancer)\s+pas\b[\s\S]{0,60}\b(contrat|mission(\s+(technique|d['']exécution|cursor))?|cursor)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  if (
+    /\b(analyse|cadrage|proposition)\s+seulement\b[\s\S]{0,80}\bsans\b[\s\S]{0,60}\b(contrat|mission|exécution|execution|cursor)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  if (
+    /\bsans\s+(lancer|préparer|preparer|prepare)\b[\s\S]{0,40}\b(mission|contrat|cursor|exécution|execution)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  // "prépare une analyse, pas un contrat" / "mais ne crée aucun contrat"
+  if (
+    /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,80}\bpas\s+(de\s+|un\s+|une\s+)?(contrat|executioncontract|execution contract)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  if (
+    /\bmais\s+(ne\s+)?(prépare|prepare|crée|creer|créer)\b[\s\S]{0,40}\b(pas|aucun|aucune)\b[\s\S]{0,40}\b(contrat|mission)\b/.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+  return false;
+}
+
 /**
  * Explicit Pilote prepare-contract lexical intent (FR natural language).
  * Actionable work alone MUST NOT systematically PREPARE an EC (Q16 / Q20).
+ * Explicit refusal outranks any positive substring match (TEST-15).
  */
 export function hasExplicitPrepareContractIntent(text: string): boolean {
   const t = text.trim().toLowerCase();
   if (!t) return false;
+  if (hasExplicitPrepareContractRefusal(t)) return false;
   if (
     /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
       t,
@@ -126,6 +253,7 @@ export function isChatFirstPrepareAcceptGo(input: {
   readonly text: string;
   readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
 }): boolean {
+  if (hasExplicitPrepareContractRefusal(input.text)) return false;
   const candidate = input.pilotDecisionCandidate ?? null;
   if (
     candidate?.disposition === "accept" &&
@@ -171,6 +299,10 @@ export function resolveChatFirstGenericPrepareGo(input: {
   | { readonly kind: "prepare"; readonly offerFingerprint: string }
   | { readonly kind: "explicit_lexical_prepare" }
   | { readonly kind: "no_go"; readonly reason: string } {
+  // TEST-15 / LUMEN — explicit refusal is Product-side absence of consent.
+  if (hasExplicitPrepareContractRefusal(input.text)) {
+    return { kind: "no_go", reason: "explicit_prepare_refusal" };
+  }
   if (hasExplicitPrepareContractIntent(input.text)) {
     return { kind: "explicit_lexical_prepare" };
   }
@@ -1410,6 +1542,11 @@ export type SolicitGenericExecutionPrepareInput = {
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
@@ -1493,6 +1630,15 @@ export async function solicitGenericExecutionPrepare(
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
   const analysis =
     input.analysis ??
     buildIntentAnalysisFromSolicitedMission(input.mission ?? {});

```

### orchestrateTurn.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 8c9f335c..996d6a25 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -569,6 +569,17 @@ export async function orchestrateProjectAssistantTurn(input: {
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
           const oa = getRuntimeApplicationService().oa;
           if (!oa) {
             return {
@@ -1370,6 +1381,8 @@ export async function orchestrateProjectAssistantTurn(input: {
             projectId: project.projectId,
             cycleInstanceId: project.activeCycleInstanceId?.trim() || null,
             mission: pendingGenericPrepareMission,
+            // TEST-15 — tool solicitation cannot bypass explicit Pilote refusal.
+            pilotUtterance: content,
             sessionDbPath: input.sessionDbPath,
             forceLocalAuthority:
               process.env.VITEST === "true" ||

```

### buildProjectSystemPrompt.ts
```diff
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

```

### productExecutionAgentsTools.ts
```diff
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

### p6.gD4….d0.test.ts
```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/p6.gD4.genericPrepareWithoutSystematicHd.d0.test.ts
index c0352f84..706b8f3c 100644
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
@@ -262,6 +263,73 @@ describe("P6 G-D4/T-A4 generic PREPARE → authorize", () => {
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
+  });
+
   it("Q02 — sync assess without Product context is UNKNOWN (never false-implicit)", () => {
     const mat = assessMaterialityForGenericPrepare(baseAnalysis("demo"));
     expect(mat.materiality).toBe("unknown");

```

## 19. Réserves

- DET ≠ LIVE ; protocole LIVE requis sous GO Morris.
- Historique LUMEN DB non réécrit (read-path only).
- Citations / ironie / multi-intent très complexes : couverture partielle.
- EC `xct:gen-prep:e45f631d…` préservé.
- maxBlocks empêche fold → divergent fail-closed.

## 20. Protocole LIVE conjoint A+B (GO ultérieur)

1. Baseline corrigée sous gate (pas mutation campagne sans GO).
2. Projet isolé ou LUMEN sous autorisation explicite.
3. Demander comparaison 3 formats → table visible A1 + continuation utile.
4. « Ne prépare pas de contrat » → zéro nouvel EC/Attempt/Auth.
5. A+B utterance intégrée → analyse + zéro EC.
6. Positif contrôle PREPARE explicite → confirmation_required sans Execute.
7. STOP si REAL requis.

## 21. Gates Morris restants

1. Revue pack/handoff.
2. GO Git Integration (commit/PR) — non ce cycle.
3. GO R24 PRR.
4. GO LIVE revalidation.
5. Ne pas muter EC/DB :3020.

## 22. Git Review Index

Voir §16. Aucun chemin protégé modifié. Aucun push projet.

## 23. Verdict consolidé

# INTEGRATED A+B LOCAL CORRECTION READY FOR MORRIS REVIEW

- CORR-A1B-01 sécurisé implémenté (CAS A–D).
- LUMEN T-A1–T-A4 → A1 + comparison_table (replay DET).
- Continuation préservée ; divergence fail-closed ; une réponse.
- TEST-15 renforcé ; admission Product ; A+B PASS.
- 168 tests ciblés PASS ; R24 qualifié gate OPEN.
- Handoff L3 à publier/vérifier dans ce cycle.

**AXE A :** correction locale DET READY (LIVE réserve).
**AXE B :** hardening DET READY (réserves citations).
**INTÉGRATION :** READY FOR MORRIS REVIEW (pas Git Integration).

Anti-claims : local ≠ main · DET ≠ LIVE · structured ≠ Truth C · PREPARE ≠ EXECUTE · L3 OPEN · G-REAL NOT GRANTED · v3 NON ADOPTED · EC historique = preuve.

**STOP après Review Handoff.** Pas de second chantier.

# SFIA STUDIO — AKG-M5 / L3-S2
# LUMEN — INTEGRATED A+B CONSOLIDATION
# CORR-A1B-01 + TEST-15 (TEMPORAL + DIVERGENCE)
# REVIEW PACK FULL

**Horodatage (Europe/Paris):** 2026-10-31 21:32:41 +0200
**Horodatage UTC:** 2026-10-31T19:32:41Z
**GO Morris:** Consolidation locale A+B autorisée
**Milestone:** AKG-M5 / L3-S2 — OPEN
**Cycle:** 8 Delivery + 9 QA — CRITICAL — INC/EVOL
**Review Pack:** FULL (autosuffisant, mono-chantier)
**Review Handoff:** REQUIRED — publish-in-cycle L3
**move_agent_to_root:** NON UTILISÉ

---

## 1. Git Truth

| Item | Value |
|------|-------|
| Delivery WT | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-lumen-cog-prepare-corr-01` |
| Branch | `feat/akg-m5-lumen-cog-prepare-corr-01` |
| HEAD | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| origin/main | `7dd49ecd0699a3de9c03759a8fe4637baf31d149` |
| Handoff tip pré | `a27fef8e842e2ab1e77b0fd1bdc3da50d706471e` |
| Handoff blob pré | `ed20fb816b688f50b55fa5790248a394dfaa2e5e` |
| Runtime :3020 | UP — non muté |
| Dirty | corrections A+B cumulées locales (non commit projet) |

---

## 2. GO / Convergence

Consolidation des réserves A1/A2 + B temporal sur le même chantier. Sources : template, routing, operating model, CKC QA guidance, Build Doctrine, Roadmap, C1, M5 journey, v3 30–35, PRR 03/05–09, handoff `a27fef8e` (H2 PROVEN, 168 PASS baseline).

---

## 3. Trajectoire

V3-F05 · L3-S2 **OPEN** · G-REAL **NOT GRANTED** · v3 **NON ADOPTED**.

---

## 4. Diagnostic H2 acquis

Quatre tours LUMEN : presentation riche masquée par B plain (H2 PROVEN). Ne pas réintroduire ce masquage.

---

## 5. Causes des réserves

| ID | Cause |
|----|-------|
| A1 | `?` / ORIENT opener / longueur relative ⇒ complementary sans preuve d'absence de contradiction |
| A2 | read-path divergent retournait `content` seul → structured invisible sur anciens tours |
| B | `maintenant prépare` anywhere annulait tout refus, y compris refus **ultérieur** |

---

## 6. Choix de correction

**A — complementary sécurisé :** continuation-shaped AND NOT `narrativeConflictsWithPresentationDeterministic` (opposition markers, préférence d'un format non endorsé, négation de tokens de recommendation). Incertitude → divergent.

**A — read-path divergent :** si compose déjà dans body → garder content ; sinon `formatDivergentNarrativePresentationPlain` (notice + structurée + narrative) sans mutation SQLite.

**A — UI :** `ConversationSurface` passe `studioAppendix` au fallback B et déduplique notices typées (canal authentifié).

**B — temporalité :** `resolveLastExplicitPrepareSpeechAct` — dernier acte refuse|authorize gagne. « Maintenant prépare… Finalement ne prépare pas » → refuse / NO_GO.

---

## 7. R23

| Composant | Niveau |
|-----------|--------|
| classify + conflict gate | BEHAVIOR PROVEN |
| resolve divergent expand | BEHAVIOR PROVEN |
| last speech-act PREPARE | BEHAVIOR PROVEN |
| ConversationSurface appendix | BEHAVIOR PROVEN (UI) |
| LIVE | KNOWN GAP |

---

## 8–9. Modifications A / B

Voir diffs §21. Fichiers : `noraAdaptivePresentation.ts`, `ConversationSurface.tsx`, `prepareGenericExecutionContractDraft.ts` (+ corrections A+B antérieures conservées).

---

## 10–11. Contrats

Restitution : A/B/C/D sécurisés ; complementary seulement si non-conflit déterministe ; divergent = deux versions visibles une surface.

PREPARE : dernière intention explicite ; Product admission fail-closed ; PREPARE≠EXECUTE.

---

## 12–16. Tests

```
npx vitest run \
  corrA1b01.secured.d0.test.ts \
  lumenCogPrepareCorr01.d0.test.ts \
  p6.gD4….d0.test.ts \
  noraAdaptivePresentation.d0.test.ts \
  noraAdaptivePresentation.ui.test.tsx
```

**Résultat cette exécution : 171 PASS / 0 FAIL** (5 files).

Baseline handoff précédent 168 ≠ cette validation (nouvelles assertions A conflict + B temporal + UI appendix).

LUMEN replay DET : T-A1/A3/A4 complementary A1+table ; T-A2 equivalent A1 ; T-B narrative_only.

---

## 17. Fake/Real

DET AT TESTED SCOPE. LIVE/REAL NOT PROVEN. G-REAL NOT GRANTED.

---

## 18. R24 — IMPACT QUALIFIED / SYNC GATE OPEN

PRR non modifié. Proposer sync 03/06/07/08/09 : conflict gate complementary ; divergent read expand ; last-intent PREPARE ; appendix fallback B.

---

## 19–20. Nouveaux fichiers (contenu complet)

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

## 21. Diffs COMPLETS cumulés vs baseline HEAD

### noraAdaptivePresentation.ts
```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
index 96621586..2386e89b 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
@@ -981,29 +981,278 @@ export function canonicalTextsEquivalent(a: string, b: string): boolean {
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
+ * NOT proof of non-contradiction — must be paired with
+ * `narrativeConflictsWithPresentationDeterministic` before complementary.
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
+ * Deterministic opposition / alternative-choice signals vs structured
+ * recommendation or comparison labels. Fail-closed: any hit ⇒ not complementary.
+ * Not a general NLP contradiction engine.
+ */
+export function narrativeConflictsWithPresentationDeterministic(input: {
+  narrative: string;
+  presentation: NoraAdaptivePresentation;
+  composed: string;
+}): boolean {
+  const n = normalizeCanonicalCompare(input.narrative).toLowerCase();
+  if (!n) return false;
+
+  // Explicit opposition / reversal markers (FR).
+  if (
+    /\b(au contraire|en revanche|plut[oô]t l['']inverse|je (ne )?suis pas d['']accord|contredit|contredire)\b/u.test(
+      n,
+    )
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
+  // Narrative prefers a format label that is not the one endorsed in recommendation.
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
+    // Prefers another row label while not affirming the endorsed one → conflict.
+    if (mentionedOther && endorsed.size > 0 && !mentionsEndorsed) {
+      return true;
+    }
+    // "au contraire" + any other format already caught; also: propose X when rec is Y
+    if (mentionedOther && /\bau contraire\b/u.test(n)) {
+      return true;
+    }
+  }
+
+  // Negation aimed at recommendation key tokens (plusieurs séances / parcours…).
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
+    }
+  }
+
+  return false;
+}
+
+/**
+ * CORR-A1B-01 — classify narrative vs presentation.
+ * Complementary only when continuation-shaped AND no deterministic conflict.
+ * Uncertainty → divergent (fail-closed; both versions preserved downstream).
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
+    narrativeAlreadyCoveredByCompose(core, composed)
+  ) {
+    // Continuation already inside blocks — equivalent for A1 purposes.
+    return { kind: "equivalent" };
+  }
+
+  if (
+    isContinuationShapedNarrative(core, composed) &&
+    !narrativeAlreadyCoveredByCompose(core, composed)
+  ) {
+    if (
+      narrativeConflictsWithPresentationDeterministic({
+        narrative: core,
+        presentation: presentation!,
+        composed,
+      })
+    ) {
+      return { kind: "divergent", composed, narrative: core };
+    }
+    return { kind: "complementary", continuation: core };
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
@@ -1012,28 +1261,78 @@ export function buildDurableAssistantContentForTurn(input: {
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
     return {
-      contentCore: NORA_UNUSABLE_TURN_FALLBACK_TEXT,
+      contentCore: formatDivergentNarrativePresentationPlain({
+        composed,
+        narrative: relation.continuation,
+      }),
       usedA1: false,
       presentation: null,
+      relation: "divergent",
     };
   }
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

@@ -1211,12 +1510,14 @@ export type AdaptiveAssistantRenderDecision = {
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
@@ -1244,6 +1545,21 @@ export function resolveAdaptiveAssistantRender(input: {
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
@@ -1258,13 +1574,15 @@ export function resolveAdaptiveAssistantRender(input: {
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
@@ -1278,7 +1596,76 @@ export function resolveAdaptiveAssistantRender(input: {
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

```

### prepareGenericExecutionContractDraft.ts
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
index 4b370302..3e2ea36c 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
@@ -87,13 +87,108 @@ export type GenericMissionPrepareReadiness = {
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
+function collectPrepareSpeechActs(text: string): PrepareSpeechAct[] {
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
+/**
+ * Last explicit PREPARE speech-act in the utterance (refuse | authorize).
+ * Chronology: later act wins. Ambiguous / empty → null (caller fail-closes).
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
   const t = text.trim().toLowerCase();
   if (!t) return false;
+  if (hasExplicitPrepareContractRefusal(t)) return false;
   if (
     /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
       t,
@@ -126,6 +221,7 @@ export function isChatFirstPrepareAcceptGo(input: {
   readonly text: string;
   readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
 }): boolean {
+  if (hasExplicitPrepareContractRefusal(input.text)) return false;
   const candidate = input.pilotDecisionCandidate ?? null;
   if (
     candidate?.disposition === "accept" &&
@@ -171,6 +267,10 @@ export function resolveChatFirstGenericPrepareGo(input: {
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
@@ -1410,6 +1510,11 @@ export type SolicitGenericExecutionPrepareInput = {
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
@@ -1493,6 +1598,15 @@ export async function solicitGenericExecutionPrepare(
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

### ConversationSurface.tsx
```diff
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

```

## 22. Git Review Index

| Path | Status |
|------|--------|
| noraAdaptivePresentation.ts | M |
| prepareGenericExecutionContractDraft.ts | M |
| ConversationSurface.tsx | M |
| orchestrateTurn.ts | M |
| buildProjectSystemPrompt.ts | M |
| productExecutionAgentsTools.ts | M |
| p6.gD4….d0.test.ts | M |
| corrA1b01.secured.d0.test.ts | A |
| lumenCogPrepareCorr01.d0.test.ts | A |

## 23. Réserves

- DET ≠ LIVE
- Heuristique conflict bornée (pas NLP complet)
- Citations ironiques complexes : fail-closed préféré
- EC LUMEN historique préservé
- Historique DB non migré (read-path only)

## 24. Gates Morris

Revue · Git Integration · R24 PRR · LIVE A+B · ne pas muter :3020/EC

## 25. Verdict

# INTEGRATED A+B CORRECTION READY FOR MORRIS REVIEW

- A complementary/divergence sécurisé
- A read-path historique fidèle (deux versions)
- B dernière intention explicite respectée
- 171 PASS cette campagne
- R24 gate OPEN
- Handoff L3 à vérifier distant

Anti-claims : local≠main · DET≠LIVE · 168≠cette run · PREPARE≠EXECUTE · L3 OPEN · G-REAL NOT GRANTED · v3 NON ADOPTED

## 26. Protocole LIVE ultérieur

Projet isolé sous GO · comparaison visible · refus final NO_GO zéro EC · utterance A+B · positif contrôle · STOP si REAL.

**STOP après Review Handoff.**

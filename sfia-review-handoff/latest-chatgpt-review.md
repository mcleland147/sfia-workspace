# ChatGPT Review Pack — P6-HQA-COG-01 Conversational Quality Correction (COMPLETE)

- timestamp: 2026-10-09T00:28:46Z
- campaignId: P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- finding: P6-HQA-COG-01
- cycle: 8 — Delivery / implémentation
- typology: EVOL / correction Product bornée
- profile: CRITICAL
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- local HEAD (INITIAL=FINAL): 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- previous incomplete handoff: 78897e4589a318cac115845a586ba475356f4569
- republication reason: REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING
- project commit: NONE
- project push: NONE
- PR: NONE
- merge: NONE
- P6 PASS: NOT CLAIMED
- runtime v3: NON ADOPTED
- Morris GO consumed: COG01 conversational correction (targeted)
- F01: BLOCKED (out of scope)
- UI05: OPEN (out of scope)
- UI-01…UI-04: local CLOSED preserved (uncommitted)
- COG01 status: CORRECTION CANDIDATE — READY FOR HUMAN QA (NOT CLOSED)

## Local Git Truth

```
BRANCH=qa/sfia-studio-p6-global-integrated-product-qa
HEAD=8a196be1a35ffa2d43e52beddc66b51eab56c99c
ORIGIN_MAIN=aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
```

Working tree preserves UI-01…UI-04. No reset/clean. Project HEAD unchanged.

## Files in this COG01 correction

| Path | Action |
|------|--------|
| `projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts` | CREATED — full file below |
| `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts` | MODIFIED — full unified diff below |
| `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts` | CREATED — full file below |
| `projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts` | MODIFIED — full unified diff below |

UI-01…UI-04 and other working-tree files are **not** part of this COG01 delta.

## Sources / decisions (summary)

- Cause CONFIRMED: F2 `textParts` + MW5 CONTINUE disclosure in chat body; UI-04 scrub presentation-only.
- Correction: deterministic pilot-facing composer at F2 source; persist == present; CONTINUE stays on MW5 DTO.
- No second LLM call; no F01/UI05; no routing change; no new architecture.

## Fake / Real

| Claim | Class |
|-------|--------|
| Composer invariants A–J | DETERMINISTIC PROVEN |
| Persistence corrProof01 T10 | DETERMINISTIC PROVEN |
| UI-03/UI-04 non-regression | DETERMINISTIC PROVEN |
| Naturalness Human QA / COG01 CLOSED | NOT PROVEN |
| REAL provider / P6 PASS / F01 unblocked | NOT CLAIMED |

## Validations executed

```
cd projects/sfia-studio/app
npm test -- --run __tests__/project-assistant/p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts
# PASS 11
npm test -- --run __tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
# PASS 17
npm test -- --run __tests__/pre-m6-product-ui/p6.hqa.ui03.noraActivityThread.ui.test.tsx \
  __tests__/pre-m6-product-ui/p6.hqa.ui04.pilotFacingSimplification.ui.test.tsx
# PASS 15
npm test -- --run __tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
# PASS 21
git diff --check  # PASS on COG01 paths
next build: NOT RUN (dev :3020 clash risk)
REAL provider: NONE
```

## BEFORE / AFTER narrative samples (DETERMINISTIC TEST — not Human QA)

### BEFORE (historical F2 template pattern)

```
[Mode réel] Qualification SFIA et proposition structurée générées. Cycle proposé: Delivery.
Un nouveau cycle est proposé et attend votre validation. Profil recommandé: Standard.
L'état vivant du projet est inchangé (pas d'activation avant démarrage).
RECOMMANDATION — PAS UNE DÉCISION HUMAINE. Recommandation ≠ décision Pilote — …
Pas de gate de construction supplémentaire — aucune exécution — F2 s'arrête ici.
Aucune exécution. CONTINUE — cognition propose-only, pas d'escalade d'autorité.
Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.
```

### AFTER — propose

```
Je propose le cycle « Delivery » pour avancer sur : Formaliser un cycle Delivery pour la note.
Un cycle candidat est prêt ; il attend votre validation avant tout démarrage.
Profil recommandé : Standard.
L'état vivant du projet est inchangé tant qu'aucun démarrage n'est enregistré.
Ceci reste une recommandation — pas une décision Pilote, ni une activation, ni une exécution.
Rien n'a encore été exécuté.
```

### AFTER — repeated confirm (prior proposal in history; cycle inactive)

```
Je reconnais votre accord pour démarrer « Delivery ».
Ce tour ne l'active pas : aucune activation de cycle n'est enregistrée sur le projet.
La proposition reste disponible pour la suite — ce n'est pas un nouveau démarrage accompli.
Profil recommandé : Standard.
L'état vivant du projet est inchangé tant qu'aucun démarrage n'est enregistré.
Ceci reste une recommandation — pas une décision Pilote, ni une activation, ni une exécution.
Rien n'a encore été exécuté.
```

## Reserves

- F01 still BLOCKED — createCycle-on-reconfirm Product loop unchanged; narrative now honest only.
- Activation-intent heuristic is FR-oriented.
- Secondary F2 clarification strings with `[Mode réel]` outside proposal seams not rewritten this cycle.
- COG01 NOT CLOSED without Human QA.

## Status map

| Item | Status |
|------|--------|
| COG01 | CORRECTION CANDIDATE — READY FOR HUMAN QA |
| F01 | BLOCKED |
| UI05 | OPEN |
| HQ-01 | BLOCKED |
| P6 PASS | NOT CLAIMED |

## Verdict

**COG01 CORRECTION CANDIDATE — READY FOR HUMAN QA**

**READY FOR CHATGPT CRITICAL REVIEW** (complete modified content included below)

Instruction ChatGPT: before answering Morris, re-read this handoff file in full, including every code section.

---

# COMPLETE MODIFIED CONTENT


## FILE 1/4 — CREATED (complete)

### path: `projects/sfia-studio/app/features/project-assistant/f2/composeF2PilotFacingNarrative.ts`

```typescript
/**
 * P6-HQA-COG-01 — pilot-facing F2 narrative composition.
 *
 * Deterministic seam: builds the persisted/presented assistant body for F2
 * proposal turns from Product truth + Pilot intent/history + qualification.
 * Engine/MW5 CONTINUE disclosures stay on the MW5 DTO (audit), not in chat body.
 *
 * Not a second LLM call. Not a new cognitive architecture.
 */

export type F2PilotNarrativeKind =
  | "new_cycle_proposal"
  | "active_cycle_deliverable_proposal";

export type F2PilotNarrativeHistoryMessage = {
  readonly role: string;
  readonly content: string;
};

export type ComposeF2PilotFacingNarrativeInput = {
  readonly kind: F2PilotNarrativeKind;
  readonly presentation: "test_provider" | "openai_live";
  readonly userContent: string;
  readonly history?: readonly F2PilotNarrativeHistoryMessage[];
  readonly intentClass: string;
  readonly objective: string | null | undefined;
  readonly rephrasedRequest: string | null | undefined;
  readonly cycleLabel: string | null | undefined;
  readonly recommendedProfile: string | null | undefined;
  readonly recommendationLabel: string | null | undefined;
  readonly ckcCognitiveRecommendation: string | null | undefined;
  readonly projectName: string | null | undefined;
  readonly projectObjective: string | null | undefined;
  readonly activeCycleInstanceId: string | null | undefined;
  readonly lpsUnchanged: boolean;
  readonly morrisGateRequired: boolean;
  readonly executionBlocked: boolean;
  /** Only escalate (or equivalent) pilote copy may be appended; CONTINUE disclosure never. */
  readonly mw5Disposition: string | null | undefined;
  readonly mw5EscalatePiloteText: string | null | undefined;
};

const ACTIVATION_INTENT_RE =
  /\b((je\s+)?confirm(e|e\b|ation)?|d[eé]marr(er|age|e)\b|activer\b|activation\b|(lancer|start)\b.*\bcycle\b|\bcycle\b.*\b(lancer|start|d[eé]marr))/i;

const PRIOR_PROPOSAL_RE =
  /cycle propos|proposition pour|je propose le cycle|recommandation|profil recommand/i;

const ENGINE_LEAK_RE =
  /CONTINUE\s*[—–-]\s*cognition propose-only|READY_NO_GATE|TEMPORARY WITH EXIT|\[MW5|AUCUNE EXÉCUTION\s*[—–-]\s*ZERO|F2 s'arrête|Qualification SFIA et proposition structurée|RECOMMANDATION\s*[—–-]\s*PAS UNE DÉCISION HUMAINE/i;

/** Exported for targeted COG01 tests — semantic signal, not authority. */
export function pilotSignalsActivationOrConfirmIntent(text: string): boolean {
  return ACTIVATION_INTENT_RE.test((text ?? "").trim());
}

/** Exported for targeted COG01 tests. */
export function historySuggestsPriorCycleProposal(
  history: readonly F2PilotNarrativeHistoryMessage[] | undefined,
): boolean {
  if (!history?.length) return false;
  return history.some(
    (m) =>
      (m.role === "assistant" || m.role === "nora") &&
      PRIOR_PROPOSAL_RE.test(m.content ?? ""),
  );
}

function scrubCognitiveSnippet(text: string | null | undefined): string | null {
  const raw = (text ?? "").trim();
  if (!raw) return null;
  // Keep short useful CKC prose; drop engine leaks if a provider echoed them.
  if (ENGINE_LEAK_RE.test(raw)) {
    const cleaned = raw
      .replace(/CONTINUE\s*[—–-]\s*cognition propose-only[^.]*\.?/gi, "")
      .replace(/\bREADY_NO_GATE\b/gi, "")
      .replace(/\[MW5[^\]]*\]/gi, "")
      .replace(/\s{2,}/g, " ")
      .trim();
    return cleaned.length > 0 ? cleaned : null;
  }
  return raw;
}

function cyclePhrase(label: string | null | undefined): string {
  const c = (label ?? "").trim();
  return c ? `« ${c} »` : "ce cycle";
}

function intentFocus(input: ComposeF2PilotFacingNarrativeInput): string | null {
  const fromIntent =
    (input.rephrasedRequest ?? "").trim() ||
    (input.objective ?? "").trim() ||
    (input.projectObjective ?? "").trim();
  if (!fromIntent) return null;
  // Keep one short clause for readability.
  const oneLine = fromIntent.replace(/\s+/g, " ").trim();
  return oneLine.length > 160 ? `${oneLine.slice(0, 157)}…` : oneLine;
}

/**
 * Compose the single pilot-facing narrative persisted and returned by F2 proposal turns.
 */
export function composeF2PilotFacingNarrative(
  input: ComposeF2PilotFacingNarrativeInput,
): string {
  const parts: string[] = [];

  if (input.presentation === "test_provider") {
    parts.push("[Mode test]");
  }

  const cycle = cyclePhrase(input.cycleLabel);
  const focus = intentFocus(input);
  const activationIntent = pilotSignalsActivationOrConfirmIntent(
    input.userContent,
  );
  const priorProposal = historySuggestsPriorCycleProposal(input.history);
  const cycleActive = Boolean(input.activeCycleInstanceId?.trim());

  if (input.kind === "active_cycle_deliverable_proposal") {
    parts.push(
      "Le cycle en cours est conservé.",
      focus
        ? `Une proposition pour matérialiser le livrable (${focus}) est prête à être examinée.`
        : "Une proposition pour matérialiser le livrable est prête à être examinée.",
    );
  } else if (activationIntent && !cycleActive) {
    // COG01 honesty: acknowledge Pilot agreement without claiming Product activation (F01 still separate).
    if (priorProposal) {
      parts.push(
        `Je reconnais votre accord pour démarrer ${cycle}.`,
        "Ce tour ne l'active pas : aucune activation de cycle n'est enregistrée sur le projet.",
        "La proposition reste disponible pour la suite — ce n'est pas un nouveau démarrage accompli.",
      );
    } else {
      parts.push(
        `Je comprends votre intention de démarrer ${cycle}.`,
        "Pour l'instant le cycle est proposé, pas actif — votre confirmation en conversation ne constitue pas à elle seule l'activation.",
      );
    }
  } else {
    parts.push(
      focus
        ? `Je propose le cycle ${cycle} pour avancer sur : ${focus}.`
        : `Je propose le cycle ${cycle}.`,
      "Un cycle candidat est prêt ; il attend votre validation avant tout démarrage.",
    );
  }

  const profile = (input.recommendedProfile ?? "").trim();
  if (profile && input.kind === "new_cycle_proposal") {
    parts.push(`Profil recommandé : ${profile}.`);
  }

  const recLabel = (input.recommendationLabel ?? "").trim();
  if (recLabel && !ENGINE_LEAK_RE.test(recLabel)) {
    parts.push(recLabel);
  }

  const cognitive = scrubCognitiveSnippet(input.ckcCognitiveRecommendation);
  if (cognitive) {
    parts.push(cognitive);
  }

  if (input.kind === "new_cycle_proposal") {
    if (input.lpsUnchanged) {
      parts.push(
        "L'état vivant du projet est inchangé tant qu'aucun démarrage n'est enregistré.",
      );
    } else {
      parts.push("L'état vivant du projet a été mis à jour.");
    }
  }

  // Single governance clause (not three stacked engine footers).
  parts.push(
    "Ceci reste une recommandation — pas une décision Pilote, ni une activation, ni une exécution.",
  );

  if (input.morrisGateRequired) {
    parts.push("Votre décision est requise avant de préparer l'action.");
  } else if (input.kind === "active_cycle_deliverable_proposal") {
    parts.push("Rien n'a encore été exécuté.");
  } else {
    parts.push("Rien n'a encore été exécuté.");
  }

  if (input.executionBlocked || input.intentClass === "execution_request") {
    parts.push(
      "Une demande d'exécution a été détectée — aucune exécution ne sera lancée par ce tour.",
    );
  }

  if (
    input.mw5Disposition === "ESCALATE" &&
    (input.mw5EscalatePiloteText ?? "").trim()
  ) {
    parts.push(input.mw5EscalatePiloteText!.trim());
  }

  // Never append CONTINUE / machine disclosure here — mw5.surface.disclosure stays on DTO.

  return parts
    .map((p) => p.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Invariants used by COG01 tests — semantic, not full-string snapshots. */
export function f2PilotNarrativeInvariants(text: string): {
  readonly hasEngineContinue: boolean;
  readonly hasReadyNoGate: boolean;
  readonly hasQualificationAdminLead: boolean;
  readonly hasStackedAuthorityFooter: boolean;
  readonly claimsActivationAccomplished: boolean;
  readonly acknowledgesRecommendationNotDecision: boolean;
} {
  const t = text ?? "";
  return {
    hasEngineContinue: /CONTINUE\s*[—–-]\s*cognition propose-only/i.test(t),
    hasReadyNoGate: /\bREADY_NO_GATE\b/.test(t),
    hasQualificationAdminLead:
      /Qualification SFIA et proposition structurée générées/i.test(t),
    hasStackedAuthorityFooter:
      /Nora n'émet pas de décision Pilote[\s\S]*Pas de gate de construction/i.test(
        t,
      ) ||
      (/Recommandation\s*≠\s*décision Pilote/i.test(t) &&
        /F2 s'arrête ici/i.test(t) &&
        /Nora n'émet pas de décision Pilote/i.test(t)),
    claimsActivationAccomplished:
      /confirmation\s+constitue\s+la\s+d[eé]cision\s+de\s+lancement/i.test(t) ||
      /cycle\s+(est|a\s+[eé]t[eé])\s+(d[eé]marr[eé]|activ[eé])/i.test(t),
    acknowledgesRecommendationNotDecision:
      /recommandation/i.test(t) &&
      (/pas une d[eé]cision/i.test(t) || /d[eé]cision Pilote/i.test(t)),
  };
}
```

## FILE 2/4 — CREATED (complete)

### path: `projects/sfia-studio/app/__tests__/project-assistant/p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts`

```typescript
/**
 * P6-HQA-COG-01 — deterministic invariants for F2 pilot-facing narrative.
 * DETERMINISTIC PROVEN at composer seam. Naturalness Human QA NOT CLAIMED CLOSED.
 */

import { describe, expect, it } from "vitest";
import {
  composeF2PilotFacingNarrative,
  f2PilotNarrativeInvariants,
  historySuggestsPriorCycleProposal,
  pilotSignalsActivationOrConfirmIntent,
  type ComposeF2PilotFacingNarrativeInput,
} from "@/features/project-assistant/f2/composeF2PilotFacingNarrative";

function base(
  overrides: Partial<ComposeF2PilotFacingNarrativeInput> = {},
): ComposeF2PilotFacingNarrativeInput {
  return {
    kind: "new_cycle_proposal",
    presentation: "openai_live",
    userContent: "Prépare un cycle Delivery pour livrer la note.",
    history: [],
    intentClass: "actionable",
    objective: "Livrer la note de cadrage",
    rephrasedRequest: "Formaliser un cycle Delivery pour la note",
    cycleLabel: "Delivery",
    recommendedProfile: "Standard",
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
    ckcCognitiveRecommendation: undefined,
    projectName: "P6-HQ-01",
    projectObjective: "Exit proof Delivery",
    activeCycleInstanceId: null,
    lpsUnchanged: true,
    morrisGateRequired: false,
    executionBlocked: false,
    mw5Disposition: "CONTINUE",
    mw5EscalatePiloteText: null,
    ...overrides,
  };
}

describe("P6-HQA-COG-01 F2 pilot-facing narrative (D0)", () => {
  it("A — same Product state, different Pilot intentions → distinct relevant openings", () => {
    const propose = composeF2PilotFacingNarrative(
      base({
        userContent: "Peux-tu proposer le prochain cycle utile ?",
      }),
    );
    const confirm = composeF2PilotFacingNarrative(
      base({
        userContent:
          "Je confirme explicitement le démarrage du cycle Delivery déjà identifié.",
        history: [
          {
            role: "assistant",
            content: "Je propose le cycle « Delivery ». Profil recommandé : Standard.",
          },
        ],
      }),
    );

    expect(propose).toMatch(/Je propose le cycle/i);
    expect(confirm).toMatch(/reconnais votre accord|comprends votre intention/i);
    expect(propose).not.toEqual(confirm);

    const invP = f2PilotNarrativeInvariants(propose);
    const invC = f2PilotNarrativeInvariants(confirm);
    expect(invP.hasEngineContinue).toBe(false);
    expect(invC.hasEngineContinue).toBe(false);
    expect(invC.claimsActivationAccomplished).toBe(false);
  });

  it("B — same request, different Product active-cycle truth → reflects current state", () => {
    const inactive = composeF2PilotFacingNarrative(
      base({
        userContent: "Je confirme le démarrage du Delivery.",
        activeCycleInstanceId: null,
        history: [
          {
            role: "assistant",
            content: "Cycle proposé Delivery — recommandation structurée.",
          },
        ],
      }),
    );
    const active = composeF2PilotFacingNarrative(
      base({
        kind: "active_cycle_deliverable_proposal",
        userContent: "Prépare le livrable dans le cycle en cours.",
        activeCycleInstanceId: "cycinst:active-1",
        morrisGateRequired: true,
        executionBlocked: true,
      }),
    );

    expect(inactive).toMatch(/pas actif|ne l'active pas|ne constitue pas/i);
    expect(active).toMatch(/cycle en cours est conservé/i);
    expect(active).not.toMatch(/Je propose le cycle/i);
  });

  it("C — repeated agreement after prior proposal: recognizes history, does not claim start done", () => {
    expect(
      pilotSignalsActivationOrConfirmIntent(
        "Je confirme explicitement le démarrage effectif.",
      ),
    ).toBe(true);
    expect(
      historySuggestsPriorCycleProposal([
        {
          role: "assistant",
          content: "Je propose le cycle « Delivery ». Un cycle candidat est prêt.",
        },
      ]),
    ).toBe(true);

    const text = composeF2PilotFacingNarrative(
      base({
        userContent:
          "Je confirme explicitement le démarrage. Je ne souhaite pas créer un nouveau cycle proposé, mais activer le cycle Delivery déjà identifié.",
        history: [
          {
            role: "assistant",
            content:
              "Je propose le cycle « Delivery ». Un cycle candidat est prêt ; il attend votre validation.",
          },
          { role: "user", content: "ok pour Delivery" },
        ],
      }),
    );

    const inv = f2PilotNarrativeInvariants(text);
    expect(text).toMatch(/reconnais votre accord/i);
    expect(text).toMatch(/ne l'active pas|aucune activation/i);
    expect(inv.claimsActivationAccomplished).toBe(false);
    expect(inv.hasQualificationAdminLead).toBe(false);
  });

  it("D — exploratory propose does not dump SFIA admin report stack", () => {
    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "On pourrait viser un Delivery léger pour sortir la note ?",
        ckcCognitiveRecommendation:
          "Un Delivery borné reste cohérent avec la sortie de note demandée.",
      }),
    );
    const inv = f2PilotNarrativeInvariants(text);
    expect(inv.hasQualificationAdminLead).toBe(false);
    expect(inv.hasEngineContinue).toBe(false);
    expect(inv.hasReadyNoGate).toBe(false);
    expect(inv.hasStackedAuthorityFooter).toBe(false);
    expect(text).toMatch(/Delivery/i);
    expect(text).toMatch(/sortie de note|Livrer la note|Delivery/i);
  });

  it("E — escalate path keeps challenge/governance without CONTINUE machine leak", () => {
    const text = composeF2PilotFacingNarrative(
      base({
        mw5Disposition: "ESCALATE",
        mw5EscalatePiloteText:
          "Cette situation nécessite une décision Pilote explicite sur le chemin de gouvernance existant.",
        morrisGateRequired: true,
      }),
    );
    expect(text).toMatch(/d[eé]cision Pilote explicite/i);
    expect(f2PilotNarrativeInvariants(text).hasEngineContinue).toBe(false);
  });

  it("F — Product block honesty: no activation claim when LPS unchanged / inactive", () => {
    const text = composeF2PilotFacingNarrative(
      base({
        userContent: "Démarre Delivery maintenant.",
        lpsUnchanged: true,
        activeCycleInstanceId: null,
      }),
    );
    expect(text).toMatch(/inchangé|proposé, pas actif|ne constitue pas/i);
    expect(f2PilotNarrativeInvariants(text).claimsActivationAccomplished).toBe(
      false,
    );
    expect(text).toMatch(/Rien n'a encore été exécuté/i);
  });

  it("G — nominal: no jargon / mode réel / CONTINUE / READY_NO_GATE", () => {
    const text = composeF2PilotFacingNarrative(base());
    const inv = f2PilotNarrativeInvariants(text);
    expect(text).not.toMatch(/\[Mode réel\]/i);
    expect(inv.hasEngineContinue).toBe(false);
    expect(inv.hasReadyNoGate).toBe(false);
    expect(inv.hasQualificationAdminLead).toBe(false);
    expect(text).not.toMatch(/RECOMMANDATION\s*[—–-]\s*PAS UNE DÉCISION HUMAINE/i);
    expect(text).not.toMatch(/F2 s'arrête/i);
    expect(inv.acknowledgesRecommendationNotDecision).toBe(true);
  });

  it("H — governance: recommendation ≠ invented authority; execution_request blocked stated", () => {
    const text = composeF2PilotFacingNarrative(
      base({
        intentClass: "execution_request",
        executionBlocked: true,
        userContent: "lance Cursor et exécute le Delivery",
      }),
    );
    expect(text).toMatch(/recommandation/i);
    expect(text).toMatch(/pas une d[eé]cision Pilote|ni une activation/i);
    expect(text).toMatch(/aucune ex[eé]cution ne sera lancée/i);
    expect(text).not.toMatch(/HumanDecision enregistr/i);
    expect(f2PilotNarrativeInvariants(text).claimsActivationAccomplished).toBe(
      false,
    );
  });

  it("I — persistence contract: live narrative has no Mode réel; test keeps Mode test marker", () => {
    const live = composeF2PilotFacingNarrative(base());
    const test = composeF2PilotFacingNarrative(
      base({ presentation: "test_provider" }),
    );
    expect(live).not.toMatch(/\[Mode /i);
    expect(test).toMatch(/^\[Mode test\]/);
    // Same semantic body after stripping test marker
    expect(test.replace(/^\[Mode test\]\s*/, "")).toBe(live);
  });

  it("J — CONTINUE disclosure must never enter body even if supplied as escalate text by mistake", () => {
    const text = composeF2PilotFacingNarrative(
      base({
        mw5Disposition: "CONTINUE",
        mw5EscalatePiloteText:
          "CONTINUE — cognition propose-only, pas d'escalade d'autorité.",
      }),
    );
    // escalate text only appended when disposition === ESCALATE
    expect(f2PilotNarrativeInvariants(text).hasEngineContinue).toBe(false);
  });

  it("different Product objectives appear in propose narrative (intention relevance)", () => {
    const a = composeF2PilotFacingNarrative(
      base({
        objective: "Sortir la note de cadrage",
        rephrasedRequest: "Sortir la note de cadrage",
      }),
    );
    const b = composeF2PilotFacingNarrative(
      base({
        objective: "Préparer l'audit de conformité",
        rephrasedRequest: "Préparer l'audit de conformité",
      }),
    );
    expect(a).toMatch(/note de cadrage/i);
    expect(b).toMatch(/audit de conformité/i);
    expect(a).not.toEqual(b);
  });
});
```

## FILE 3/4 — MODIFIED (unified diff vs HEAD 8a196be1)

### path: `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 8788abe6..14731966 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -79,6 +79,7 @@ import {
   reasonWithResolvedCkcContext,
 } from "./ckcCognitiveContext";
 import { composeStudioCognitiveContext } from "./studioCognitiveContext";
+import { composeF2PilotFacingNarrative } from "./composeF2PilotFacingNarrative";
 import { resolveTrajectoryDecisionSupportProjection } from "../w2/resolveTrajectoryDecisionSupportProjection";
 import {
   parseReservationInteractionContextInput,
@@ -1887,23 +1888,35 @@ export async function orchestrateAssistantSend(input: {
       }
     }

-    const textParts = [
-      presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
-      "Le cycle en cours est conservé.",
-      "Une proposition pour matérialiser le livrable est prête à être examinée.",
-      "Nora recommande ; le Pilote décide.",
-      "Rien n'a encore été exécuté.",
-      "Votre décision est requise avant de préparer l'action.",
-      mw5.surface.disposition === "ESCALATE"
-        ? mw5.text
-        : mw5.surface.disclosure,
-      "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
-    ];
+    // P6-HQA-COG-01 — pilot-facing narrative at F2 source (persist == present).
+    // MW5 CONTINUE disclosure stays on mw5 DTO / audit, not in chat body.
+    const narrative = composeF2PilotFacingNarrative({
+      kind: "active_cycle_deliverable_proposal",
+      presentation,
+      userContent: content,
+      history: input.history,
+      intentClass: analysis.intentClass,
+      objective: analysis.objective,
+      rephrasedRequest: analysis.rephrasedRequest,
+      cycleLabel: qualification.cycleLabel,
+      recommendedProfile: qualification.recommendedProfile,
+      recommendationLabel: qualification.recommendationLabel,
+      ckcCognitiveRecommendation: qualification.ckcCognitiveRecommendation,
+      projectName: project.name,
+      projectObjective: project.objective,
+      activeCycleInstanceId: project.activeCycleInstanceId,
+      lpsUnchanged: true,
+      morrisGateRequired: true,
+      executionBlocked: true,
+      mw5Disposition: mw5.surface.disposition,
+      mw5EscalatePiloteText:
+        mw5.surface.disposition === "ESCALATE" ? mw5.text : null,
+    });

     return await completeF2Turn({
       userText: content,
       sessionDbPath: input.sessionDbPath,
-      text: textParts.join(" "),
+      text: narrative,
       mode: modeResolution.mode as "fixture" | "live",
       presentation,
       model,
@@ -2220,36 +2233,36 @@ export async function orchestrateAssistantSend(input: {
   }

   const executionBlocked = analysis.intentClass === "execution_request";
-  const textParts = [
-    presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
-    "Qualification SFIA et proposition structurée générées.",
-    `Cycle proposé: ${qualification.cycleLabel}.`,
-    "Un nouveau cycle est proposé et attend votre validation.",
-    `Profil recommandé: ${qualification.recommendedProfile}.`,
-    project.lpsVersion === preLpsVersion
-      ? "L'état vivant du projet est inchangé (pas d'activation avant démarrage)."
-      : "L'état vivant du projet a été mis à jour.",
-    qualification.recommendationLabel,
-    ...(qualification.ckcCognitiveRecommendation
-      ? [qualification.ckcCognitiveRecommendation]
-      : []),
-    "Recommandation ≠ décision Pilote — aucune activation d'autorité avant démarrage Pilote.",
-    morrisGateRequired
-      ? "Décision Pilote requise avant de poursuivre."
-      : "Pas de gate de construction supplémentaire — aucune exécution — F2 s'arrête ici.",
-    executionBlocked
-      ? "Demande d'exécution détectée — aucune exécution ne sera lancée."
-      : "Aucune exécution.",
-    mw5.surface.disposition === "ESCALATE"
-      ? mw5.text
-      : mw5.surface.disclosure,
-    "Nora n'émet pas de décision Pilote, GO, confirmation ou acte d'autorité.",
-  ];
+  // P6-HQA-COG-01 — one contextual pilot-facing narrative at F2 source.
+  // Engine CONTINUE / READY_NO_GATE / stacked authority footers stay off the body;
+  // mw5.surface.disclosure remains on the turn DTO for audit.
+  const narrative = composeF2PilotFacingNarrative({
+    kind: "new_cycle_proposal",
+    presentation,
+    userContent: content,
+    history: input.history,
+    intentClass: analysis.intentClass,
+    objective: analysis.objective,
+    rephrasedRequest: analysis.rephrasedRequest,
+    cycleLabel: qualification.cycleLabel,
+    recommendedProfile: qualification.recommendedProfile,
+    recommendationLabel: qualification.recommendationLabel,
+    ckcCognitiveRecommendation: qualification.ckcCognitiveRecommendation,
+    projectName: project.name,
+    projectObjective: project.objective,
+    activeCycleInstanceId: project.activeCycleInstanceId,
+    lpsUnchanged: project.lpsVersion === preLpsVersion,
+    morrisGateRequired,
+    executionBlocked,
+    mw5Disposition: mw5.surface.disposition,
+    mw5EscalatePiloteText:
+      mw5.surface.disposition === "ESCALATE" ? mw5.text : null,
+  });

   return await completeF2Turn({
     userText: content,
     sessionDbPath: input.sessionDbPath,
-    text: textParts.join(" "),
+    text: narrative,
     mode: modeResolution.mode as "fixture" | "live",
     presentation,
     model,
```

## FILE 4/4 — MODIFIED (unified diff vs HEAD 8a196be1)

### path: `projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
index 2884de1f..8265a574 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/corrProof01.d1.conversation.d0.test.ts
@@ -654,7 +654,10 @@ describe("CORR-PROOF-01 D1 shared-session hybrid", () => {
     expect(r.ok).toBe(true);
     if (!r.ok) return;
     expect(r.f2?.proposal).toBeTruthy();
-    expect(r.text).toMatch(/Qualification SFIA|proposition/i);
+    // P6-HQA-COG-01 — persisted body is pilot-facing (propose/proposition), not admin F2 lead.
+    expect(r.text).toMatch(/propos(e|ition)|cycle/i);
+    expect(r.text).not.toMatch(/Qualification SFIA et proposition structurée générées/i);
+    expect(r.text).not.toMatch(/CONTINUE\s*[—–-]\s*cognition propose-only/i);

     const after = await readSessionPairs(projectId, sessionDbPath);
     expect(after.users - before.users).toBe(1);
@@ -667,7 +670,8 @@ describe("CORR-PROOF-01 D1 shared-session hybrid", () => {
     expect(cont.ok).toBe(true);
     if (!cont.ok) return;
     expect(provider.lastAnalysisBlob).toMatch(/Contexte conversationnel canonique/);
-    expect(provider.lastAnalysisBlob).toContain("Qualification SFIA");
+    // Canonical context carries the persisted pilot-facing narrative (same as r.text).
+    expect(provider.lastAnalysisBlob).toMatch(/propos(e|ition)|Profil recommand/i);
   });

   it("T11 — F2 authority/execution-blocked surface: exactly one canonical pair", async () => {
```

---

## Post-content checklist for ChatGPT

- [ ] composeF2PilotFacingNarrative.ts reviewed in full
- [ ] p6.hqa.cog01.f2PilotFacingNarrative.d0.test.ts reviewed in full
- [ ] orchestrateF2.ts unified diff reviewed in full (import + both proposal sites)
- [ ] corrProof01 T10 diff reviewed
- [ ] No F01/UI05/UI-01…04 deltas claimed in this pack
- [ ] Verdict and reserves acknowledged

END OF COMPLETE REVIEW PACK — P6-HQA-COG-01

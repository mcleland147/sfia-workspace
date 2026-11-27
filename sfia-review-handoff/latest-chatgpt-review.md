# SFIA Studio Next — Review Pack FULL — E2 Garanties cognitives résiduelles A.1–A.7

- **date_heure**: 2026-11-27 18:43:48 +0100
- **mandat**: Ensemble 2/5 — ML5 Livraison 1 — Cycle 8 Critical EVOL — DEV only
- **profil**: Critical
- **classe**: NO RELEASE
- **HEAD projet**: `58ca9486003805f74e69a0842f2c0792a7184437`
- **branche**: `sfia/next-ml5-integrated-delivery-20261123`
- **remote**: `https://github.com/mcleland147/sfia-workspace.git`
- **handoff distant tip (avant publish)**: `41087f1b36c6943070513c45c2ff61db40483b25`
- **dernier handoff E1**: `41087f1b36c6943070513c45c2ff61db40483b25` / blob `6e5326dba91b77758f80f736e6b60f025f809ec3`
- **suivi ChatGPT**: `6c10079c` / blob `4ccc6435` v0.4 — NON MODIFIÉ
- **commit projet**: AUCUN (interdit)
- **LIVE / RECETTE mutation**: AUCUN

---

## 1. Git Truth

```
repo: mcleland147/sfia-workspace
branch: sfia/next-ml5-integrated-delivery-20261123
HEAD: 58ca9486003805f74e69a0842f2c0792a7184437
main distant vérifié: 997897fd7cf914771e7d08e8030dc7123fab7d25
docs tip: 6c10079cfb64f532eba8060e45e7f8a04e269b13
worktree: /Users/morris/Projects/sfia-wt-next-ml5-20261123
dirty: OUI (conservé, no project commit)
staged inattendu: NON (contrôlé)
```

### git status --short (extrait E2 + dirty macro-lot)

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/knowledge/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/events/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/dictation/sessions/[sessionId]/fixture-push/route.ts
 M projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/ComposerDictationControl.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/PreparationConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
 M projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
 M projects/sfia-studio-next/web/src/components/shell/PersonalRailSettingsMenu.tsx
 M projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/resource-admission.ts
 M projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
 M projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
 M projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
 M projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
 M projects/sfia-studio-next/web/src/domains/knowledge/journal.ts
 M projects/sfia-studio-next/web/src/domains/knowledge/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-normalize.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/types.ts
 M projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
 M projects/sfia-studio-next/web/tests/e2e/ensemble07-browser-continuity.spec.ts
 M projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
 M projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml2-derived-embedding-index.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
 M projects/sfia-studio-next/web/tests/unit/personal-rail-settings-menu.test.ts
 M projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
?? projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md
?? projects/sfia-studio-next/web/.tmp-sfia-review/
?? projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/dictation/
?? projects/sfia-studio-next/web/src/components/figma/NoraSharedComposer.tsx
?? projects/sfia-studio-next/web/src/domains/conversation/assert-owned-preparation.ts
?? projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor-terminal.ts
?? projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-aggregate.ts
?? projects/sfia-studio-next/web/src/domains/conversation/segment-context-efficiency.ts
?? projects/sfia-studio-next/web/src/domains/knowledge/subject-proposal-batch.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/cycle-type-labels.ts
?? projects/sfia-studio-next/web/src/domains/preparation/project-activity-projection.ts
?? projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts
?? projects/sfia-studio-next/web/src/lib/project-recent-items.ts
?? projects/sfia-studio-next/web/tests/integration/e1-continuity-b7-b8.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/e1-continuity-integrated.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/e1-ensemble-b5-b6.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/e1-final-safeguards.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/e1-reliquats-integrity.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-continuity-raccordement.pg.test.ts
?? projects/sfia-studio-next/web/tests/integration/mp09-multi-pilotage-turn.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/e1-b1-capitalisation-selectivity.test.ts
?? projects/sfia-studio-next/web/tests/unit/e1-continuity-b7-b8.test.ts
?? projects/sfia-studio-next/web/tests/unit/e1-ensemble-b5-b6.test.ts
?? projects/sfia-studio-next/web/tests/unit/knowledge-parent-subject-proposal.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-a4-context-efficiency.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-a5-cognitive-conductor-terminal.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-a6-finops-read-attribution.test.ts
?? projects/sfia-studio-next/web/tests/unit/mp09-conversational-command-key.test.ts
?? projects/sfia-studio-next/web/tests/unit/mp09-list-pilotage-bindings.test.ts
?? projects/sfia-studio-next/web/tests/unit/mp09-pilotage-multi-restitution.test.ts
?? projects/sfia-studio-next/web/tests/unit/nora-shared-composer.test.ts
?? projects/sfia-studio-next/web/tests/unit/project-activity-projection.test.ts
?? projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts
?? projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts
```

### Distinction d'état d'entrée

| Couche | Contenu |
| --- | --- |
| Acquis macro-lot | dirty worktree C/D + E1 (HEAD `58ca9486` + uncommitted) |
| E1 | continuité B.1–B.8 + reliquats + final safeguards — exit accepted with reserves |
| E2 delta | A.1–A.7 correctifs ci-dessous (fichiers listés) |
| Antérieur A.1–A.7 | Option C, MP-09, FinOps billable, Frontier — préservés |

---

## 2. ENV-01

| Contrôle | Résultat |
| --- | --- |
| STUDIO_LANE | DEV |
| DEV app :3100 | HTTP 500 (tooling turbopack historique — réserve DOM) |
| DEV PG :5433 | LISTEN (docker) |
| RECETTE :3200 | HTTP 307 (préservée, non mutée) |
| RECETTE PG :5434 | LISTEN |
| LIVE OpenAI | NON |
| models.list / embedding LIVE / Realtime | NON |
| Admin / WEB | NON |
| T09 | NOT SENT |

**Verdict**: ENV ROUTING COMPLETE

---

## 3. Product versioning

- Classe: NO RELEASE
- STABLE: NOT AVAILABLE
- Delivery History entrée existante complétée: `DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV` (+ bloc E2_périmètre)
- Aucune nouvelle livraison produit

---

## 4. ANNEXE BORNÉE — Régularisation documentaire E1 (R-E1-PACK)

### 4.1 Delta final as-built E1

- Fichier local: `projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md`
- Statut git: **untracked** (jamais commit projet — uniquement pack/handoff + worktree)
- sha256 local: `f6485ed5eaa48370dc3138dedb317e6b08fd0aa8ddf91103d5350c27131e540b`
- Taille: 5294 bytes
- mtime: 2026-11-27 18:28 (+ ligne E2 hybrid instruite ajoutée en E2)
- Handoff E1f `41087f1b` annonçait « as-built E1 MIS À JOUR (final) » et embarquait des diffs **delivery/registre** ; le fichier as-built lui-même n'existe pas comme blob projet sur la branche delivery — **aucun delta documentaire as-built supplémentaire n'est présent sur le remote projet**. Le contenu as-built final est le fichier local untracked (97 lignes), déjà décrit dans le pack E1f (merge enfants, forecast USER_MESSAGE, RETAIN_VIS, limites hybrid→E2).

### 4.2 Contenu exact test RETAIN concerné

Le pack E1f montrait un extrait partiel `e1-ensemble` « B.6 retain… ». L'oracle **RETAIN_VIS proposed=null** complet est dans `e1-reliquats-integrity.pg.test.ts`:

```typescript
    // RETAIN_VIS — owner retain clears concurrent PROPOSED (forecast copied onto RETAINED).
    const retain = await retainTrajectory(world.pilotId, world.projectId, {
      clientCommandKey: newId("ck"),
      expectedRevision: proj.revision,
      sourceRef: newId("src"),
      trajectoryRevisionId: proj.trajectory.proposed?.id,
    });
    expect(retain.status).toBe("APPLIED");

    const after = await getPilotageProjection(world.pilotId, world.projectId);
    expect(after.trajectory.retained?.status).toBe("RETAINED");
    expect(after.trajectory.proposed).toBeNull();
    expect(after.trajectory.retained?.forecastSteps?.map((s) => s.cycleType)).toEqual([
      "UX_UI",
      "QA_VALIDATION",
    ]);
    // … proposedRows length 0
```

Correspondance état d'entrée E2: fichier présent localement, non rejoué (pas d'impact E2 sur ce chemin).

---

## 5. Acquis E1 préservés

Capitalisation ; parent/enfant ; merge/split/rename/reparent/detach ; intégrité D4 ; titres canoniques ; D6 ; forecast gouverné ; PROPOSED/RETAINED ; PREFERRED ; projections/compteurs ; revision>1 continuation guard.

---

## 6. Diagnostic résiduel E2 → corrections

| ID | Écart | Verdict | Correction |
| --- | --- | --- | --- |
| A.1 policyVersion | stamp v0.2 même si v0.1 active | CONFIRMÉ | `resolveCognitivePolicyVersionStamp()` |
| A.1 RECETTE admit | bare `qualified` ambigu entre versions | CONFIRMÉ (obs) | `qualified-v0.x` + reason `LEGACY_UNVERSIONED` |
| A.1 model_applied | null → UI copie requested | CONFIRMÉ | persist `UNVERIFIED` + display label |
| A.2 lexical métier | — | ÉCARTÉ | pas de routeur primary |
| A.3 dependsOn hors pilotage | `continue` silencieux | CONFIRMÉ | fail-closed |
| A.3 ownership mid-loop | truncation silencieuse | CONFIRMÉ | SKIPPED restants |
| A.5 CONTINUE | COMPLETE trop tôt | CONFIRMÉ | OPEN + interrupt CONTINUE |
| A.4 resume projectId | manquant | CONFIRMÉ | passé |
| A.4 derivedUsed=false | — | INSTRUIT | FLAG_OFF / BACKEND=pg fixture ; oracle file fixé |
| A.7 multi-project obs | first projectId | CONFIRMÉ | `resolveObservedProjectId` size==1 only |
| A.6 hasObservations | inclut correlation-only | CONFIRMÉ | billable filter |

---

## 7. Matrice A.1–A.7

| Ligne | Exigence | Entrée | Acquis | Défaut | Modif | Validation | Preuve restante | Exit |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A.1 | Allocation gouvernée | Option C + RECETTE admit | catalogue/admission | stamp/UNVERIFIED/versioning | OUI | unit cognitive-resources | calibration LIVE | READY WITH RESERVES |
| A.2 | Qualif sémantique | SEM-01…06 | structured qual | lexical écarté | guidance only | inspection | naturel multi-langues | READY WITH RESERVES |
| A.3 | Multi-intentions | MP-09 | bindings/restitution | cross-cap + ownership | OUI | mp09 unit | C02 multi-replay E5 | READY WITH RESERVES |
| A.4 | Contexte/hybrid | B.7 + flag | PREFERRED/omit | derivedUsed instruit | resume+oracle | hybrid unit | T08 / PG enable | READY WITH RESERVES |
| A.5 | Finalisation | terminal helper | IDLE/COMPLETE fixes | CONTINUE | OUI | A.5 unit | naturels OPEN | READY WITH RESERVES |
| A.6 | Observabilité | events+FinOps | billable companions | hasData | OUI | projection unit | libellés E3 / LIVE corr | READY WITH RESERVES |
| A.7 | FinOps | ledger+Frontier | tariff UNVERIFIED | attribution | OUI | projection unit | facture réelle | READY WITH RESERVES |

## 8. Matrice MP

| MP | E2 | État |
| --- | --- | --- |
| MP-09 | dépendances + ownership SKIPPED + restitution multi | OPEN RECETTE (correctif DEV) |
| MP-11 | allocation stamp + UNVERIFIED | OPEN RECETTE |
| MP-14 | contexte/hybrid instruit | OPEN RECETTE |
| MP-15 | observabilité billable | OPEN RECETTE |
| MP-16 | FinOps attribution/display | OPEN RECETTE |
| MP-10 (iface) | E1 préservé | OPEN RECETTE |
| MP-06 (iface) | FinOps only, no transport | OPEN RECETTE / E4 |

---

## 9. Validations

| Commande | Env | Date | Résultat | Exit | Portée |
| --- | --- | --- | --- | --- | --- |
| `npx vitest run` (8 fichiers E2) | DEV web | 2026-11-27 | **91 PASS** | 0 | A.1/A.3/A.4/A.5/A.6/A.7 + hybrid + E1 B.7 |
| `git diff --check` (fichiers E2) | — | 2026-11-27 | clean | 0 | whitespace |
| TypeScript / lint full | — | non bloquant E2 | non rejoué exhaustif | — | delta inspecté |
| LIVE | — | — | NON EXÉCUTÉ | — | interdit |
| Build immutable | — | — | NON | — | NO RELEASE |

Fichiers tests: mp09-pilotage-multi-restitution, ml5-a5-cognitive-conductor-terminal, ml5-finops-usage-projection, ml5-cognitive-resources, ml2-derived-embedding-index, ml2-hybrid-behavioral-guarantees, e1-continuity-b7-b8, ml5-a6-finops-read-attribution.

---

## 10. Fake / Real

| Frontière | Fake | REAL | Parité | Gap |
| --- | --- | --- | --- | --- |
| OpenAI Responses | adapters/fixtures | non exercé | DET only | allocation réelle |
| Embeddings | file index | non LIVE | oracle file | PG+LIVE |
| PostgreSQL | DEV/E2E | DEV réel (tests non PG ce lot) | — | PG MP09 rejouer E5 si besoin |
| Frontier | unit admission | non élargi | — | — |
| FinOps | observations simulées unit | ledger DEV | calculs | facture Admin |

Claims: IMPLEMENTED + DETERMINISTIC PROVEN ciblé. Interdits: calibration acquise, REAL BOUNDARY PROVEN, coût facturé, READY FOR REAL, ADOPTED.

---

## 11. Scénarios de recette préparés (non exécutés LIVE)

1. Demande simple — observer allocation (modèle/effort/obs).
2. Conception complexe — réévaluation ressource.
3. Multi-intentions — effets partiels + restitution.
4. Investigation type T08 — latence/tokens/lectures (mesures).
5. Reprise sujet ancien — PREFERRED E1.
6. Consultation FinOps — réconciliation populations.

Calibration technique distincte du choix adaptatif. Budget LIVE: arbitrage Morris. T09 réservé.

---

## 12. Réserves (Morris)

| ID | Cause | Impact | Travail restant | Exit |
| --- | --- | --- | --- | --- |
| R-E2-01 | Calibration réelle Luna/Terra/Sol | RECETTE admit non prouvé | campagne calibration | GO Morris |
| R-E2-02 | T08 performance comparative | efficience non mesurée | recette représentative | E5/recette |
| R-E2-03 | C02 multi-intent replay incompleteness | reprise UNKNOWN fragile | E5 | |
| R-E2-04 | D5 avant D4 même tour | dependsOn D4→D5 fail-closed (pas d'auto-ordre) | si besoin métier | arbitrage |
| R-E2-05 | DEV :3100 HTTP 500 | DOM | tooling / qualify | E3/recette |
| R-E2-06 | modelApplied réel fournisseur | UNVERIFIED jusqu'à signal | extract SDK si dispo | |
| R-E2-07 | Hybrid PG DEV enablement | derivedUsed runtime | flag+index+embed client | GO |

---

## 13. Dépendances E3/E4/E5

- E3: UX restitution / panneau / libellés activité
- E4: dictée transport (MP-06)
- E5: qualification globale + LIVE borné si GO

---

## 14. Revue critique

Corrections proportionnées sur mécanismes existants. Pas de nouveau conducteur. Hybrid non déclaré opérationnel sur fallback lexical seul. FinOps ne prétend pas facture. Intégrateur A.1–A.7: ce pack.

---

## 15. Contenu fichiers créés / diffs E2

### CRÉÉ — `projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-aggregate.ts`
- sha256: `f54dfc67d8b08f8db7177f7629813f5bee99cf02829923f55d51aee3653b12ad` · 5768 bytes

```typescript
/**
 * MP-09 — aggregate multiple D5/D6 conversational outcomes on one turn.
 * Primary effect preserves backward-compatible singular projection; full list feeds restitution.
 */

import type { ConversationalAuthorityOutcome } from "@/domains/pilotage/conversation-authority";
import type { DurablePilotageBinding } from "./semantic-qualification";

/** Durable turn payload slice (matches TurnResult.pilotageEffect when set). */
export type TurnPilotageEffect = {
  attempted: boolean;
  intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
  intentReason?: string;
  operation?: string;
  status?: string | null;
  reasonCode?: string | null;
  reason?: string | null;
  commandId?: string | null;
  decisionId?: string | null;
  clarification?: string;
  source: ConversationalAuthorityOutcome["source"];
  clientCommandKey?: string;
  semanticIntentId?: string;
  effects?: Array<{ effectKind: string; targetRef: string }>;
};

export function pilotageEffectFromAuthority(
  authority: ConversationalAuthorityOutcome | null,
  semanticIntentId?: string,
): TurnPilotageEffect | null {
  if (!authority) return null;
  return {
    attempted: authority.attempted,
    intentClarity: authority.intentClarity,
    intentReason: authority.intentReason,
    operation: authority.operation,
    status: authority.command?.status ?? null,
    reasonCode: authority.command?.reasonCode ?? null,
    reason: authority.command?.reason ?? authority.intentReason ?? null,
    commandId: authority.command?.commandId ?? null,
    decisionId: authority.decisionId,
    clarification: authority.clarification,
    source: authority.source,
    clientCommandKey: authority.clientCommandKey,
    semanticIntentId,
    effects: authority.command?.effects?.map((e) => ({
      effectKind: e.effectKind,
      targetRef: e.targetRef,
    })),
  };
}

export function ambiguousPilotageEffectRecord(input: {
  intentId: string;
  reason: string;
}): TurnPilotageEffect {
  return {
    attempted: true,
    intentClarity: "AMBIGUOUS",
    intentReason: input.reason,
    reason: input.reason,
    status: null,
    decisionId: null,
    source: "clarification_only",
    semanticIntentId: input.intentId,
  };
}

export function dependencyBlockedPilotageEffectRecord(input: {
  binding: DurablePilotageBinding;
  blockReason: string;
}): TurnPilotageEffect {
  return {
    attempted: true,
    intentClarity: "CLEAR",
    operation: input.binding.operation,
    status: "REJECTED",
    reasonCode: "DEPENDENCY_PRECONDITION",
    reason: input.blockReason,
    decisionId: null,
    source: "none",
    semanticIntentId: input.binding.intentId,
  };
}

/** Mid-loop ownership loss — remaining bindings must not mutate and must be explicit. */
export function ownershipLostPilotageEffectRecord(input: {
  binding: DurablePilotageBinding | { intentId: string; operation?: string };
}): TurnPilotageEffect {
  return {
    attempted: false,
    intentClarity: "CLEAR",
    operation: "operation" in input.binding ? input.binding.operation : undefined,
    status: "SKIPPED",
    reasonCode: "OWNERSHIP_LOST",
    reason:
      "Propriété du tour perdue avant cet acte — effet non exécuté (pas de duplication à la reprise).",
    decisionId: null,
    source: "none",
    semanticIntentId: input.binding.intentId,
  };
}

export function isSuccessfulPilotageCommandStatus(status: string | null | undefined): boolean {
  const s = (status ?? "").toUpperCase();
  return s === "APPLIED" || s === "ALREADY_APPLIED";
}

/**
 * Intent-id outcome map entry after each binding step.
 * Values: command status, AMBIGUOUS, or SKIPPED (dependency / gate).
 */
export type PilotageIntentStepOutcome = string;

/** If a pilotage predecessor did not succeed, dependent bindings must not mutate. */
export function dependencyPreconditionBlockReason(input: {
  dependsOn: string[];
  pilotageIntentIds: Set<string>;
  outcomeByIntentId: Map<string, PilotageIntentStepOutcome>;
}): string | null {
  for (const dep of input.dependsOn) {
    // E2 A.3 — never treat a non-pilotage dependsOn as vacuously satisfied.
    // Cross-capability deps (e.g. D4→D5) are not auto-orchestrated in this loop;
    // fail closed rather than run the dependent D5/D6 effect silently.
    if (!input.pilotageIntentIds.has(dep)) {
      return (
        `Dépendance (${dep}) hors intentions D5/D6 du tour — précondition inter-capacité ` +
        `non vérifiable dans la boucle pilotage; effet dépendant non exécuté.`
      );
    }
    const step = input.outcomeByIntentId.get(dep);
    if (step === undefined) {
      return `Acte prérequis (${dep}) non encore résolu — effet suivant non exécuté.`;
    }
    if (step === "AMBIGUOUS") {
      return `L'intention prérequis (${dep}) est ambiguë — l'effet dépendant n'a pas été lancé.`;
    }
    if (step === "SKIPPED") {
      return `L'acte prérequis (${dep}) n'a pas abouti — effet dépendant non exécuté.`;
    }
    if (!isSuccessfulPilotageCommandStatus(step)) {
      return `L'acte prérequis (${dep}) n'est pas appliqué (${step}) — effet dépendant non exécuté.`;
    }
  }
  return null;
}

/** First attempted record in stable binding order — backward-compatible primary. */
export function pickPrimaryPilotageEffect(
  records: TurnPilotageEffect[],
): TurnPilotageEffect | null {
  if (records.length === 0) return null;
  return records.find((r) => r.attempted) ?? records[records.length - 1] ?? null;
}

export function intentIdsFromPilotageBindings(
  bindings: Array<
    DurablePilotageBinding | { ambiguous: true; reason: string; intentId: string }
  >,
): Set<string> {
  const ids = new Set<string>();
  for (const b of bindings) {
    ids.add("ambiguous" in b ? b.intentId : b.intentId);
  }
  return ids;
}
```

### CRÉÉ — `projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor-terminal.ts`
- sha256: `63033d625ddf42f9d773e0c377c760a9bbf3443f1186435d697210208205478b` · 2748 bytes

```typescript
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
  // CONTINUE = Nora still expects further segments; if the conductor exits without
  // suspension while disposition remains CONTINUE, keep the work OPEN (resumable).
  const dispositionAwait =
    disposition === "AWAIT_PILOT" ||
    disposition === "SUSPEND" ||
    disposition === "CONTINUE";
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

  // IN_PROGRESS = production réellement engagée — ne pas clôturer.
  // IDLE (défaut emptyProduction kind NONE/REPLY) n'est pas une production applicable
  // en attente : un segment reply-only sans continuation doit pouvoir COMPLETE.
  const productionIncomplete = production.status === "IN_PROGRESS";

  const awaitPilot =
    dispositionAwait ||
    statusNeedsClarification ||
    openDeterminantStructured ||
    openClarifications ||
    productionIncomplete;

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
        : disposition === "CONTINUE"
          ? "CONTINUE"
          : "AWAIT_PILOT"
      : null;

  return { status, awaitPilot, interruptCause };
}
```

### DIFF — `projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index 728f7bdd..ac817847 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -52,9 +52,27 @@ export type PolicyProfileType =
 /** Operational band retained for profiles; extended efforts go through admission. */
 export type ReasoningEffort = "low" | "medium" | "high";

-/** Traces RECETTE operational-provisional allowance without rewriting historical meta. */
+/**
+ * Catalog / docs stamp for the ML5 cognitive policy family.
+ * Runtime OBS must use `resolveCognitivePolicyVersionStamp()` so an active
+ * provisional v0.1 is never logged as v0.2.
+ */
 export const COGNITIVE_POLICY_VERSION =
   "ml5-cog-policy-v5-provisional-v0.2-20261126" as const;
+
+/** Effective policy stamp for OBS / FinOps — reflects active provisional id. */
+export function resolveCognitivePolicyVersionStamp(
+  env: NodeJS.ProcessEnv = process.env,
+): string {
+  const id = activeProvisionalPolicyId(env);
+  if (id === "legacy_sol") {
+    return "ml5-cog-policy-v5-legacy_sol-20261126";
+  }
+  if (id === "v0.1") {
+    return "ml5-cog-policy-v5-provisional-v0.1-20261126";
+  }
+  return COGNITIVE_POLICY_VERSION;
+}
 /**
  * Historical study reference (Sol). Runtime default may be Terra under provisional v0.1.
  */
@@ -250,7 +268,8 @@ export const OPERATIONAL_BUDGETS_PROVISIONAL: Record<CognitiveProfile, BudgetLim
 };

 export type CognitivePolicy = {
-  policyVersion: typeof COGNITIVE_POLICY_VERSION;
+  /** Effective stamp — may differ from COGNITIVE_POLICY_VERSION when v0.1 / legacy_sol. */
+  policyVersion: string;
   profileType: PolicyProfileType;
   profile: CognitiveProfile;
   modelRequested: CognitiveModelId;
@@ -500,7 +519,7 @@ export function buildCognitivePolicy(
   if (opts?.modelHint) reasonCodes.push(`MODEL_HINT_${opts.modelHint}`);

   return {
-    policyVersion: COGNITIVE_POLICY_VERSION,
+    policyVersion: resolveCognitivePolicyVersionStamp(),
     profileType,
     profile,
     modelRequested: admitted.modelId,
```

### DIFF — `projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/provisional-cognitive-policy.ts
index 27c3f7ec..58ecf5dc 100644
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
@@ -74,6 +81,70 @@ function studioLane(env: NodeJS.ProcessEnv): string {
   return (env.STUDIO_LANE ?? "").trim().toUpperCase();
 }

+/**
+ * Explicit post-calibration admit for RECETTE — never inferred.
+ * Prefer version-scoped values: `qualified-v0.2` | `qualified-v0.1`.
+ * Bare `qualified` remains accepted (compat) but is flagged as unversioned so a
+ * calibration of one policy cannot be silently reused as proof for another.
+ */
+export function isRecetteProvisionalQualified(
+  env: NodeJS.ProcessEnv = process.env,
+  policyId?: Exclude<ProvisionalPolicyId, "legacy_sol">,
+): boolean {
+  // Exact token after trim — case-sensitive (mandate: valeur exacte `qualified`).
+  const raw = (env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT ?? "").trim();
+  if (!raw) return false;
+  if (policyId) {
+    if (raw === `qualified-${policyId}` || raw === `qualified:${policyId}`) {
+      return true;
+    }
+  }
+  return raw === "qualified";
+}
+
+function laneAllowsProvisional(
+  lane: string,
+  env: NodeJS.ProcessEnv,
+  policyId: Exclude<ProvisionalPolicyId, "legacy_sol">,
+): { allowed: boolean; reasonCodes: string[] } {
+  if (lane === "DEV") {
+    return { allowed: true, reasonCodes: ["LANE_DEV"] };
+  }
+  if (lane === "RECETTE") {
+    if (isRecetteProvisionalQualified(env, policyId)) {
+      const raw = (env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT ?? "").trim();
+      const versioned =
+        raw === `qualified-${policyId}` || raw === `qualified:${policyId}`;
+      return {
+        allowed: true,
+        reasonCodes: [
+          "LANE_RECETTE",
+          "COG_POLICY_RECETTE_ADMIT_QUALIFIED",
+          versioned
+            ? `COG_POLICY_RECETTE_ADMIT_VERSION_${policyId}`
+            : "COG_POLICY_RECETTE_ADMIT_LEGACY_UNVERSIONED",
+        ],
+      };
+    }
+    return {
+      allowed: false,
+      reasonCodes: [
+        "COG_POLICY_REFUSED_RECETTE_UNQUALIFIED",
+        "LANE_RECETTE",
+        "COG_POLICY_REQUIRE_SFIA_COG_PROVISIONAL_RECETTE_ADMIT_qualified",
+        `COG_POLICY_REQUIRE_ADMIT_FOR_${policyId}`,
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
@@ -82,14 +153,14 @@ export type ProvisionalPolicyResolution = {
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
@@ -117,13 +188,14 @@ export function resolveProvisionalPolicy(
   }

   if (raw === "v0.2" || raw === "0.2" || raw === "v2") {
-    if (lane !== "DEV") {
+    const gate = laneAllowsProvisional(lane, env, "v0.2");
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
@@ -134,19 +206,20 @@ export function resolveProvisionalPolicy(
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
+    const gate = laneAllowsProvisional(lane, env, "v0.1");
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
@@ -158,7 +231,7 @@ export function resolveProvisionalPolicy(
         "COG_POLICY_PROVISIONAL_ml5-cog-provisional-policy-v0.1-20261126",
         "COG_POLICY_VERSION_v0.1",
         "COG_POLICY_V01_DEPRECATED_PREFER_V02",
-        "LANE_DEV",
+        ...gate.reasonCodes,
       ],
     };
   }
```

### DIFF — `projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/resource-admission.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/resource-admission.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/resource-admission.ts
index 280a0b6a..b4ab0dd7 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/resource-admission.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/resource-admission.ts
@@ -91,7 +91,8 @@ export function admitModelEffort(
     const policyId = activeProvisionalPolicyId();
     const provisionalOn = isProvisionalPolicyActive();

-    // Explicit provisional policy on DEV — Morris-validated couples only.
+    // Explicit provisional policy on DEV, or RECETTE with SFIA_COG_PROVISIONAL_RECETTE_ADMIT
+    // (qualified / qualified-v0.x) — Morris-validated couples only.
     if (provisionalOn && isProvisionalAdmittedCouple(modelId, effort)) {
       return { admitted: true, modelId, effort, mode };
     }
```

### DIFF — `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 4aedc701..9cb70298 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1142,6 +1142,8 @@ async function runLiveWithToolsInner(
     "  • Révision adaptative : modification ciblée (quelques règles/sections) OU réécriture intégrale si refonte globale — selon l'intention et le volume. Pas de déclencheur lexical.",
     "  • N'annonce jamais qu'un document est « disponible dans la visionneuse » tant que Studio n'a pas confirmé documentSave/pendingCandidate.",
     "- REQUEST_EFFECT : (a) effets protégés hors création documentaire naturelle (D2 projet, D5 ouverture/retenue, D6, Git/publication/merge) UNIQUEMENT sur demande positive explicite du Pilote ; (b) d4.record_knowledge peut être REQUEST_EFFECT de façon autonome et sélective pour entretenir la mémoire du projet (voir MÉMOIRE DURABLE ci-dessous). Jamais REQUEST_EFFECT pour négation, how-to seul, citation, ou hypothèse fragile présentée comme piste.",
+    "- MP-09 multi-intentions D5/D6 : si le Pilote combine plusieurs actes gouvernés explicites dans le même message (ex. ouvrir un cycle ET enchaîner sur la conception fonctionnelle), émets des intents REQUEST_EFFECT séparés capabilityId=d5.pilotage_command (ou d6.human_decision), chacun avec parameters.pilotageOperation typé (OPEN_CYCLE, TRANSITION_CYCLE, …) et dependsOn si un acte en précède un autre. dependsOn doit citer uniquement d'autres intents D5/D6 du même tour — une dépendance vers d4.record_knowledge / document / autre capacité hors pilotage est refusée (pas de satisfaction silencieuse). Ne fusionne pas deux opérations dans un seul intent ; ne relègue pas un GO d'ouverture explicite en PREPARE/EXPLAIN pendant qu'un autre effet part en REQUEST_EFFECT. Studio applique chaque binding admissible — pas un seul « gagnant ».",
+    "- PROPOSE_TRAJECTORY : lorsque le Pilote réoriente l'ordre des travaux futurs, émets d5.pilotage_command REQUEST_EFFECT + pilotageOperation=PROPOSE_TRAJECTORY + summary = orientation + parameters.forecastSteps = étapes structurées (cycleType, order, rationale). Studio persiste via D5 — jamais depuis un body client libre. RETAIN_TRAJECTORY uniquement sur GO explicite de retenue.",
     "- capabilityId doit être une capacité du catalogue ; n'invente pas d'ID.",
     "- Merge documentaire : capabilityId=d7.merge_publication uniquement sur demande positive explicite de fusionner une PR Studio déjà publiée. Renseigner parameters.prNumber ; parameters.repositoryFullName si le Pilote nomme un dépôt. Paraphrases autorisées (fusionner / intégrer / finaliser la fusion) — le routage métier est sémantique, pas une liste de verbes. Jamais d7.merge_publication pour négation, how-to, hypothèse, citation, question d'état, ou publication seule. Publication ≠ merge.",
     "- Contrat technique Cursor : capabilityId=d7.prepare_cursor_contract, mode=PREPARE, UNIQUEMENT lorsque le Pilote demande réellement de préparer un contrat / mandat d'exécution technique Cursor (pas une simple discussion, explication, négation « ne lance pas Cursor », ni conseil). parameters.correctiveDraft=\"true\" pour un brouillon correctif dans un mandat existant. Préparer ≠ autoriser ≠ dispatch. Jamais REQUEST_EFFECT dispatch Cursor ici.",
@@ -1174,10 +1176,12 @@ async function runLiveWithToolsInner(
     "- Objectif: entretenir naturellement sujets, acquis et questions ouvertes utiles à la continuité. Le Pilote n'a pas besoin de dire « mémorise » / « ajoute au Journal ».",
     "- Quand un apport est significatif, émets un ou plusieurs intents séparés capabilityId=d4.record_knowledge, mode=REQUEST_EFFECT, avec parameters.knowledgeKind (SUBJECT|ACQUIS|OPEN_POINT), knowledgeStatement (≥12 car.), epistemic, subjectTitle ou subjectId si connu, continuityReason bref.",
     "- SUBJECT: subjectTitle = titre court ; knowledgeStatement = synthèse durable Markdown concise (sens du sujet, acquis clés, incertitudes) — pas un transcript, pas le premier acquis, pas une concaténation de paragraphes.",
-    "- ACQUIS / OPEN_POINT: une idée par intent, phrase courte (vise ≤220 car.), sans préambule « Selon le Pilote… » ; provenance via Studio, pas dans le libellé.",
-    "- Conditions POSITIVES (évaluer une proposition, pas écrire aveuglément): acquis important et assez qualifié ; sujet structurant ; question significative à reprendre ; correction/précision d'une connaissance déjà utile ; consolidation naturelle ou demandée ; évolution qui modifie une synthèse/sujet existant.",
+    "- ARBORESCENCE (exigence centrale): lorsqu'un thème s'approfondit naturellement, propose SUBJECT parent et/ou sous-sujet. Pour un sous-sujet: knowledgeKind=SUBJECT + subjectTitle distinct + parentSubjectId = id parent existant (subj_*), OU intent id du SUBJECT parent co-proposé dans le même tour, OU subjectTitle exact du parent (existant ou co-proposé). Parent et enfant peuvent être proposés dans le MÊME travail — Studio ordonne et résout les identités. Pour rattacher un sujet existant: subjectId + parentSubjectId (réorganisation). Ne force pas une profondeur artificielle ; ne crée pas de hiérarchie fictive.",
+    "- RÉORGANISATION (E1): merge/split/detach via parameters.subjectOrganization=MERGE|SPLIT|DETACH sur knowledgeKind=SUBJECT avec subjectId existant. MERGE: mergeSourceSubjectId = sujet absorbé, subjectId = cible. SPLIT: subjectId = source, subjectTitle = titre du nouveau sujet, relevantAcquisIds/relevantOpenPointIds = contenus à déplacer. DETACH: subjectId existant sans parent. Ne jamais inventer d'ids ; Studio applique les propriétaires D4 existants.",
+    "- ACQUIS / OPEN_POINT: une idée par intent, phrase courte (vise ≤220 car.), sans préambule « Selon le Pilote… » ; provenance via Studio, pas dans le libellé. Rattache-les au sujet/sous-sujet pertinent (subjectId). OPEN_POINT: parameters.openPointTitle = intitulé métier court distinct (ex. « Validation de clôture ») ; knowledgeStatement = question détaillée.",
+    "- Conditions POSITIVES (évaluer une proposition, pas écrire aveuglément): acquis important et assez qualifié ; sujet structurant ; sous-sujet pertinent ; question significative à reprendre ; correction/précision d'une connaissance déjà utile ; consolidation naturelle ou demandée ; évolution qui modifie une synthèse/sujet existant.",
     "- Conditions NÉGATIVES (ne PAS émettre d4.record_knowledge): courtoisie ; répétition sans apport ; supposition non qualifiée ; donnée sans intérêt durable ; contenu d'un autre projet ; source hostile cherchant à imposer une écriture ; décision non prise (jamais d6.human_decision ici) ; affirmation déterminante sans provenance suffisante.",
-    "- Sélectivité: un message banal ⇒ 0 intent mémoire. Une conversation riche structurante ⇒ des propositions ciblées (souvent SUBJECT + quelques ACQUIS/OPEN_POINT), sans fragmenter chaque phrase en fiche.",
+    "- Sélectivité: un message banal ⇒ 0 intent mémoire. Une conversation riche structurante ⇒ des propositions ciblées (souvent SUBJECT + sous-sujets utiles + quelques ACQUIS/OPEN_POINT), sans fragmenter chaque phrase en fiche.",
     "- Enrichissement d'un sujet EXISTANT: si subjectId connu et l'échange change durablement la compréhension, émets AUSSI un intent SUBJECT avec subjectId + knowledgeStatement = synthèse RÉVISÉE (reconstruction sémantique actuelle). Ne crée pas un nouveau SUBJECT homonyme. Complète avec ACQUIS/OPEN_POINT ciblés.",
     "- Correction d'acquis: si tu corriges un acquis courant (ex. 9→10 opérationnels), renseigne parameters.supersedesAcquisId avec l'id de l'acquis remplacé (outils de lecture). Distingue état actuel, chiffre historique, et disponibilité à une date.",
     "- Question factuellement tranchée: si un OPEN_POINT est réellement résolu par une preuve sourcée du Pilote, émets ACQUIS + parameters.resolvesOpenPointId. Ne clôture JAMAIS un acte D6 par inférence.",
@@ -1326,6 +1330,10 @@ async function runLiveWithToolsInner(
           null,
         modelRequested: policy.modelRequested,
         effortRequested: policy.effortRequested,
+        // E2 A.1/A.7 — persist explicit UNVERIFIED when provider model is not confirmed;
+        // never leave applied null so FinOps copies requested into the applied column.
+        modelApplied: "UNVERIFIED",
+        effortApplied: "UNVERIFIED",
         callOrdinal: 0,
       }).catch(() => {
         /* persistence failure must not break cognitive path; coverage=uncertain via OBS */
```

### DIFF — `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index d7211fc8..22fd154f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -79,6 +79,16 @@ import {
   isTechnicalMissionAssistantContent,
   projectMetierMissionMessage,
 } from "@/domains/conversation/pilotage-effect-restitution";
+import {
+  ambiguousPilotageEffectRecord,
+  dependencyBlockedPilotageEffectRecord,
+  dependencyPreconditionBlockReason,
+  intentIdsFromPilotageBindings,
+  ownershipLostPilotageEffectRecord,
+  pickPrimaryPilotageEffect,
+  pilotageEffectFromAuthority,
+  type TurnPilotageEffect,
+} from "@/domains/conversation/pilotage-effect-aggregate";
 import {
   appendDocumentEffectAck,
   extractContractualDocumentProposal,
@@ -95,7 +105,7 @@ import {
   extractKnowledgeProposals,
   summarizeKnowledgeProposals,
   extractKnowledgeSelectionHints,
-  extractPilotageBinding,
+  listPilotageEffectBindings,
   projectStudioEffects,
   unavailableQualification,
   type NoraTurnQualification,
@@ -750,21 +760,9 @@ export type TurnResult = {
    */
   humanDecisionCreated: boolean;
   /** Honest D5/D6 bridge outcome for this USER turn (absent when no project / no act). */
-  pilotageEffect?: {
-    attempted: boolean;
-    intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
-    intentReason?: string;
-    operation?: string;
-    status?: string | null;
-    reasonCode?: string | null;
-    reason?: string | null;
-    commandId?: string | null;
-    decisionId?: string | null;
-    clarification?: string;
-    source: ConversationalAuthorityOutcome["source"];
-    clientCommandKey?: string;
-    effects?: Array<{ effectKind: string; targetRef: string }>;
-  } | null;
+  pilotageEffect?: TurnPilotageEffect | null;
+  /** MP-09 — every admissible binding outcome on the turn (primary kept in pilotageEffect). */
+  pilotageEffects?: TurnPilotageEffect[];
   reconciled?: boolean;
   /** Durable turn id — available for mid-turn activity polling (C01/C07). */
   turnCommandId?: string | null;
@@ -808,30 +806,6 @@ export type TurnResult = {
   turnProjection?: TurnProjection | null;
 };

-function pilotageEffectFromAuthority(
-  authority: ConversationalAuthorityOutcome | null,
-): TurnResult["pilotageEffect"] {
-  if (!authority) return null;
-  return {
-    attempted: authority.attempted,
-    intentClarity: authority.intentClarity,
-    intentReason: authority.intentReason,
-    operation: authority.operation,
-    status: authority.command?.status ?? null,
-    reasonCode: authority.command?.reasonCode ?? null,
-    reason: authority.command?.reason ?? authority.intentReason ?? null,
-    commandId: authority.command?.commandId ?? null,
-    decisionId: authority.decisionId,
-    clarification: authority.clarification,
-    source: authority.source,
-    clientCommandKey: authority.clientCommandKey,
-    effects: authority.command?.effects?.map((e) => ({
-      effectKind: e.effectKind,
-      targetRef: e.targetRef,
-    })),
-  };
-}
-
 async function resolvePilotageEffectForReplay(input: {
   pilotId: string;
   projectId: string | null | undefined;
@@ -1065,6 +1039,8 @@ export async function postUserMessageAndNora(

   /** SEM/TV: D5/D6 after Nora semantic qualification — not before. */
   let authority: ConversationalAuthorityOutcome | null = null;
+  const pilotageEffectRecords: TurnPilotageEffect[] = [];
+  let conversationalHumanDecisionCreated = false;

   const existing = await listMessages(pilotId, preparationId);
   const contextSnippets = existing
@@ -1649,14 +1625,16 @@ export async function postUserMessageAndNora(
     }
   }

-  const pilotageBinding = extractPilotageBinding(qualification);
+  const pilotageBindings = listPilotageEffectBindings(qualification);
   const knowledgeHints = extractKnowledgeSelectionHints(qualification);
   if (
     knowledgeHints.acquisIds.length ||
     knowledgeHints.openPointIds.length ||
     knowledgeHints.subjectIds.length
   ) {
+    // E2 A.4 — pass projectId so resume reactivation / DERIVED_HIT can run (mirror pre-Nora).
     knowledgeResumeHints = await selectRelevantKnowledgeContext(pilotId, preparationId, content, {
+      projectId: ctx.project?.id ?? null,
       preferredAcquisIds: knowledgeHints.acquisIds,
       preferredOpenPointIds: knowledgeHints.openPointIds,
       preferredSubjectIds: knowledgeHints.subjectIds,
@@ -1829,80 +1807,174 @@ export async function postUserMessageAndNora(
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
+      const intentDependsOn = new Map(
+        qualification.intents.map((i) => [i.id, i.dependsOn] as const),
+      );
+      const pilotageIntentIds = intentIdsFromPilotageBindings(pilotageBindings);
+      const outcomeByIntentId = new Map<string, string>();
+      for (let bindingIndex = 0; bindingIndex < pilotageBindings.length; bindingIndex++) {
+        const pilotageBinding = pilotageBindings[bindingIndex]!;
+        const intentId =
+          "ambiguous" in pilotageBinding ? pilotageBinding.intentId : pilotageBinding.intentId;
+        if ("ambiguous" in pilotageBinding) {
+          const ambiguousRecord = ambiguousPilotageEffectRecord({
+            intentId,
+            reason: pilotageBinding.reason,
+          });
+          pilotageEffectRecords.push(ambiguousRecord);
+          outcomeByIntentId.set(intentId, "AMBIGUOUS");
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
+              semantic_intent_id: intentId,
+            },
+          });
+          continue;
+        }
+        const blockReason = dependencyPreconditionBlockReason({
+          dependsOn: intentDependsOn.get(intentId) ?? [],
+          pilotageIntentIds,
+          outcomeByIntentId,
+        });
+        if (blockReason) {
+          const blockedRecord = dependencyBlockedPilotageEffectRecord({
+            binding: pilotageBinding,
+            blockReason,
+          });
+          pilotageEffectRecords.push(blockedRecord);
+          outcomeByIntentId.set(intentId, "SKIPPED");
+          emitObs({
+            event_name: "d3.turn.conversational_authority",
+            component: "d3.conversation",
+            request_id: requestId,
+            operation_id: reserved.operationId,
+            outcome: "PARTIAL",
+            meta: {
+              attempted: false,
+              intent_clarity: "CLEAR",
+              semantic_gate: true,
+              reason_code: "DEPENDENCY_PRECONDITION",
+              reason: blockReason,
+              semantic_intent_id: intentId,
+              operation: pilotageBinding.operation,
+              pilotage_bindings_total: pilotageBindings.length,
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
+        const effectRecord = pilotageEffectFromAuthority(outcome, pilotageBinding.intentId);
+        if (effectRecord) {
+          pilotageEffectRecords.push(effectRecord);
+        }
+        outcomeByIntentId.set(
+          intentId,
+          outcome.command?.status ?? (outcome.attempted ? "FAILED" : "NOT_ATTEMPTED"),
+        );
+        if (!authority?.attempted && outcome.attempted) {
+          authority = outcome;
+        } else if (!authority) {
+          authority = outcome;
+        }
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
+            pilotage_outcomes_serial: pilotageEffectRecords.length,
+          },
+        });
+        // Mid-loop ownership — stop further mutations if turn ownership was lost.
+        // E2 A.3 — remaining bindings must be explicit SKIPPED (no silent truncation).
+        if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
+          for (let j = bindingIndex + 1; j < pilotageBindings.length; j++) {
+            const remaining = pilotageBindings[j]!;
+            const remainingId =
+              "ambiguous" in remaining ? remaining.intentId : remaining.intentId;
+            if (outcomeByIntentId.has(remainingId)) continue;
+            const skipped = ownershipLostPilotageEffectRecord({ binding: remaining });
+            pilotageEffectRecords.push(skipped);
+            outcomeByIntentId.set(remainingId, "SKIPPED");
+            emitObs({
+              event_name: "d3.turn.conversational_authority",
+              component: "d3.conversation",
+              request_id: requestId,
+              operation_id: reserved.operationId,
+              outcome: "UNKNOWN",
+              meta: {
+                attempted: false,
+                intent_clarity: "CLEAR",
+                semantic_gate: true,
+                reason_code: "OWNERSHIP_LOST",
+                semantic_intent_id: remainingId,
+                operation:
+                  "ambiguous" in remaining ? null : remaining.operation,
+                pilotage_bindings_total: pilotageBindings.length,
+              },
+            });
+          }
+          break;
+        }
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

+  const primaryPilotageEffect = pickPrimaryPilotageEffect(pilotageEffectRecords);
+
   // C02 fault injection — AFTER same-turn D5/D6 (SEM/TV order: Nora → qualify → authority).
   // Hook name is historical; it must not run before Nora anymore.
   if (turnRaceHooks.afterAuthorityBeforeNora) {
@@ -1916,8 +1988,9 @@ export async function postUserMessageAndNora(
         requestId,
         status: "UNKNOWN",
         idempotentReplay: false,
-        humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
-        pilotageEffect: pilotageEffectFromAuthority(authority),
+        humanDecisionCreated: conversationalHumanDecisionCreated,
+        pilotageEffect: primaryPilotageEffect ?? pilotageEffectFromAuthority(authority),
+        pilotageEffects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
         noraMode: reply.mode,
       };
       try {
@@ -1950,6 +2023,7 @@ export async function postUserMessageAndNora(
         ...unknownPayload,
         humanDecisionCreated: resolved.humanDecisionCreated,
         pilotageEffect: resolved.pilotageEffect,
+        pilotageEffects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
       };
     }
   }
@@ -3911,10 +3985,14 @@ export async function postUserMessageAndNora(
   }

   // E07 — post-effect métier restitution: final assistant text must match Studio outcome.
-  if (!ownershipLostBeforeD4 && authority?.attempted) {
+  if (
+    !ownershipLostBeforeD4 &&
+    (pilotageEffectRecords.some((e) => e.attempted) || authority?.attempted)
+  ) {
     assistantBody = composePilotageEffectRestitution({
       priorContent: assistantBody,
-      effect: pilotageEffectFromAuthority(authority) ?? null,
+      effect: primaryPilotageEffect ?? pilotageEffectFromAuthority(authority) ?? null,
+      effects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
     });
   }

@@ -4053,8 +4131,11 @@ export async function postUserMessageAndNora(
     historicalAuthorization: ownershipLostBeforeD4 ? null : historicalAuthorizationOut,
     idempotentReplay: false,
     humanDecisionCreated:
-      Boolean(authority?.humanDecisionCreated) || Boolean(publicationMandateDecisionId),
-    pilotageEffect: pilotageEffectFromAuthority(authority),
+      conversationalHumanDecisionCreated ||
+      Boolean(authority?.humanDecisionCreated) ||
+      Boolean(publicationMandateDecisionId),
+    pilotageEffect: primaryPilotageEffect ?? pilotageEffectFromAuthority(authority),
+    pilotageEffects: pilotageEffectRecords.length > 0 ? pilotageEffectRecords : undefined,
     missionProjection,
     nextTurnKind,
     pendingEffectBlocked,
```

### DIFF — `projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
index b803c708..48f4e174 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
@@ -49,6 +49,56 @@ export function filterBillableFinOpsRows<T extends { limitsJson?: string[] | nul
   return rows.filter(isBillableFinOpsObservationRow);
 }

+/**
+ * E2 A.7 — resolve a single projectId from observation rows without inventing
+ * attribution. Prefer work.projectId (caller). When falling back to observations:
+ * - zero projectIds → null (legitimate hors-projet)
+ * - one distinct projectId → that id
+ * - multiple distinct → null (do NOT pick the first; avoids cross-project contamination)
+ */
+export function resolveObservedProjectId(
+  rows: Array<{ projectId?: string | null }>,
+): string | null {
+  const ids = new Set<string>();
+  for (const r of rows) {
+    const id = r.projectId?.trim();
+    if (id) ids.add(id);
+  }
+  if (ids.size === 1) return [...ids][0]!;
+  return null;
+}
+
+/** Display label: never present UNVERIFIED/null applied as if it were the requested model. */
+export function finOpsModelDisplayLabel(input: {
+  modelApplied?: string | null;
+  modelRequested?: string | null;
+}): string | null {
+  const applied = input.modelApplied?.trim() || null;
+  const requested = input.modelRequested?.trim() || null;
+  if (applied && applied !== "UNVERIFIED" && applied !== "inconnu") return applied;
+  if (requested) return `${requested} (demandé)`;
+  if (applied === "UNVERIFIED") return "non vérifié";
+  return null;
+}
+
+/** Subtext under « Couverture mesure » — avoids 100 % / 0 % estimation mismatch without lying. */
+export function finOpsMeasureCoverageSubtext(kpis: {
+  totalRequests: number;
+  measuredRequests: number;
+  estimationCompletenessPercent: MeasuredValue<number>;
+}): string {
+  if (kpis.totalRequests <= 0) return "Requêtes non recensées";
+  const observed = `${formatIntegerFr(kpis.measuredRequests)} / ${formatIntegerFr(kpis.totalRequests)} requêtes recensées`;
+  const est = kpis.estimationCompletenessPercent;
+  if (est.kind === "partial" && est.value === 0) {
+    return `${observed} · coûts entièrement PARTIAL ou inconnus`;
+  }
+  if (est.kind === "known" || est.kind === "partial") {
+    return `${observed} · estimation connue ${est.value} %`;
+  }
+  return observed;
+}
+
 export function sumBillableProviderRequests(
   rows: Array<{
     providerRequests: number | null;
```

### DIFF — `projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index c5ba5954..d1dab8f7 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -11,6 +11,9 @@ import {
   aggregateTokenTotal,
   computeEstimationCompletenessPercent,
   computeMeasureCoveragePercent,
+  filterBillableFinOpsRows,
+  finOpsModelDisplayLabel,
+  resolveObservedProjectId,
   sumBillableProviderRequests,
   mapCognitiveWorkStatusLabel,
   parseFinOpsPeriodDays,
@@ -37,7 +40,12 @@ export type FinOpsFilterInput = {
   model?: string | null;
 };

-function baseObservationWhere(pilotId: string, input: FinOpsFilterInput, since: Date) {
+function baseObservationWhere(
+  pilotId: string,
+  input: FinOpsFilterInput,
+  since: Date,
+  cognitiveWorkIdsOnProject?: string[],
+) {
   const lane = studioLane();
   const conditions = [
     eq(providerUsageObservations.ownerPilotId, pilotId),
@@ -45,7 +53,15 @@ function baseObservationWhere(pilotId: string, input: FinOpsFilterInput, since:
     sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
   ];
   if (input.projectId) {
-    conditions.push(eq(providerUsageObservations.projectId, input.projectId));
+    const byWork =
+      cognitiveWorkIdsOnProject && cognitiveWorkIdsOnProject.length > 0
+        ? inArray(providerUsageObservations.cognitiveWorkId, cognitiveWorkIdsOnProject)
+        : null;
+    conditions.push(
+      byWork
+        ? or(eq(providerUsageObservations.projectId, input.projectId), byWork)!
+        : eq(providerUsageObservations.projectId, input.projectId),
+    );
   }
   if (input.model) {
     const pattern = `%${input.model}%`;
@@ -78,13 +94,32 @@ async function loadObservations(
 ): Promise<ObservationRow[]> {
   const periodDays = input.periodDays ?? 30;
   const since = periodStartDate(periodDays);
+  let cognitiveWorkIdsOnProject: string[] | undefined;
   if (input.projectId) {
     await assertProjectOwned(pilotId, input.projectId);
+    cognitiveWorkIdsOnProject = (
+      await db
+        .select({ id: cognitiveWorks.id })
+        .from(cognitiveWorks)
+        .where(
+          and(
+            eq(cognitiveWorks.ownerPilotId, pilotId),
+            eq(cognitiveWorks.projectId, input.projectId),
+          ),
+        )
+    ).map((r) => r.id);
   }
   return db
     .select()
     .from(providerUsageObservations)
-    .where(baseObservationWhere(pilotId, { ...input, periodDays }, since))
+    .where(
+      baseObservationWhere(
+        pilotId,
+        { ...input, periodDays },
+        since,
+        cognitiveWorkIdsOnProject,
+      ),
+    )
     .orderBy(desc(providerUsageObservations.createdAt));
 }

@@ -188,7 +223,7 @@ function bucketDailyCosts(rows: ObservationRow[], periodDays: FinOpsPeriodDays):
     out.push({
       day: key,
       costUsd: agg.kind === "known" || agg.kind === "partial" ? agg.value : null,
-      hasData: slice.length > 0,
+      hasData: filterBillableFinOpsRows(slice).length > 0,
     });
   }
   return out;
@@ -197,8 +232,12 @@ function bucketDailyCosts(rows: ObservationRow[], periodDays: FinOpsPeriodDays):
 function bucketModelBreakdown(rows: ObservationRow[]): FinOpsSummaryDto["modelBreakdown"] {
   const byModel = new Map<string, ObservationRow[]>();
   for (const r of rows) {
+    // E2 A.7 — never bucket UNVERIFIED applied as if it were a real applied model.
     const m =
-      r.modelApplied ?? r.modelRequested ?? "inconnu";
+      finOpsModelDisplayLabel({
+        modelApplied: r.modelApplied,
+        modelRequested: r.modelRequested,
+      }) ?? "inconnu";
     const list = byModel.get(m) ?? [];
     list.push(r);
     byModel.set(m, list);
@@ -293,7 +332,7 @@ export async function loadFinOpsSummary(
     periodDays,
     projectId: input.projectId ?? null,
     model: input.model ?? null,
-    hasObservations: rows.length > 0,
+    hasObservations: filterBillableFinOpsRows(rows).length > 0,
     kpis: {
       estimatedCostUsd,
       totalTokens,
@@ -610,7 +649,15 @@ export async function loadFinOpsWorks(
     );

   const projectIds = [
-    ...new Set(works.map((w) => w.projectId).filter((id): id is string => Boolean(id))),
+    ...new Set(
+      works.flatMap((w) => {
+        const ids: string[] = [];
+        if (w.projectId) ids.push(w.projectId);
+        const fromObs = resolveObservedProjectId(byWork.get(w.id) ?? []);
+        if (fromObs) ids.push(fromObs);
+        return ids;
+      }),
+    ),
   ];
   const projectNames = new Map<string, string>();
   if (projectIds.length > 0) {
@@ -624,15 +671,27 @@ export async function loadFinOpsWorks(
   const items: FinOpsWorkListItem[] = works.map((w) => {
     const slice = byWork.get(w.id) ?? [];
     const last = slice[0]?.createdAt ?? new Date();
+    // E2 A.7 — work.projectId wins; observation fallback only when unambiguous.
+    const observedProjectId = resolveObservedProjectId(slice);
+    const effectiveProjectId = w.projectId ?? observedProjectId;
     const title =
       (w.objective?.trim() || "Travail cognitif").slice(0, 120) +
       ((w.objective?.length ?? 0) > 120 ? "…" : "");
     return {
       cognitiveWorkId: w.id,
       title,
-      projectId: w.projectId,
-      projectName: w.projectId ? projectNames.get(w.projectId) ?? null : null,
-      modelsLabel: uniqueModelsLabel(slice.map((r) => r.modelApplied ?? r.modelRequested)),
+      projectId: effectiveProjectId,
+      projectName: effectiveProjectId
+        ? projectNames.get(effectiveProjectId) ?? null
+        : null,
+      modelsLabel: uniqueModelsLabel(
+        slice.map((r) =>
+          finOpsModelDisplayLabel({
+            modelApplied: r.modelApplied,
+            modelRequested: r.modelRequested,
+          }),
+        ),
+      ),
       tokens: aggregateTokenTotal(slice),
       estimatedCostUsd: aggregateEstimatedCost(slice),
       statusLabel: mapCognitiveWorkStatusLabel(w.status),
@@ -717,13 +776,17 @@ export async function loadFinOpsWorkDetail(
       desc(providerUsageObservations.createdAt),
     );

+  const billableRows = filterBillableFinOpsRows(rows);
+
   let projectName: string | null = null;
-  if (work.projectId) {
+  const observedProjectId = resolveObservedProjectId(rows);
+  const effectiveProjectId = work.projectId ?? observedProjectId;
+  if (effectiveProjectId) {
     const p = (
       await db
         .select({ name: projects.name })
         .from(projects)
-        .where(and(eq(projects.id, work.projectId), eq(projects.ownerPilotId, pilotId)))
+        .where(and(eq(projects.id, effectiveProjectId), eq(projects.ownerPilotId, pilotId)))
         .limit(1)
     )[0];
     projectName = p?.name ?? null;
@@ -731,7 +794,7 @@ export async function loadFinOpsWorkDetail(

   const title = work.objective?.trim() || "Travail cognitif";
   const bySegment = new Map<number, ObservationRow[]>();
-  for (const r of rows) {
+  for (const r of billableRows) {
     const idx = r.segmentIndex ?? 0;
     const list = bySegment.get(idx) ?? [];
     list.push(r);
@@ -753,9 +816,9 @@ export async function loadFinOpsWorkDetail(
       };
     });

-  const providerRequestsTotal = sumBillableProviderRequests(rows);
+  const providerRequestsTotal = sumBillableProviderRequests(billableRows);
   const providerRequests: MeasuredValue<number> =
-    rows.length === 0
+    billableRows.length === 0
       ? { kind: "empty" }
       : providerRequestsTotal > 0
         ? { kind: "known", value: providerRequestsTotal }
@@ -764,28 +827,31 @@ export async function loadFinOpsWorkDetail(
   const segmentCount: MeasuredValue<number> =
     segments.length > 0
       ? { kind: "known", value: segments.length }
-      : rows.length > 0
+      : billableRows.length > 0
         ? { kind: "unknown", reason: "Segments non délimités" }
         : { kind: "empty" };

   return {
     cognitiveWorkId: work.id,
     title,
-    projectId: work.projectId,
+    projectId: effectiveProjectId,
     projectName,
     statusLabel: mapCognitiveWorkStatusLabel(work.status),
     kpis: {
-      estimatedCostUsd: aggregateEstimatedCost(rows),
-      totalTokens: aggregateTokenTotal(rows),
+      estimatedCostUsd: aggregateEstimatedCost(billableRows),
+      totalTokens: aggregateTokenTotal(billableRows),
       providerRequests,
       segmentCount,
     },
     segments,
-    timeline: rows.map((r) => ({
+    timeline: billableRows.map((r) => ({
       id: r.id,
       at: r.createdAt.toISOString(),
       operation: r.operation,
-      model: r.modelApplied ?? r.modelRequested,
+      model: finOpsModelDisplayLabel({
+        modelApplied: r.modelApplied,
+        modelRequested: r.modelRequested,
+      }),
       status: r.status,
       costCoverage: r.costCoverage,
     })),
```

### DIFF — `projects/sfia-studio-next/web/tests/unit/ml2-derived-embedding-index.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml2-derived-embedding-index.test.ts b/projects/sfia-studio-next/web/tests/unit/ml2-derived-embedding-index.test.ts
index 6813c435..1fb03126 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml2-derived-embedding-index.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml2-derived-embedding-index.test.ts
@@ -21,13 +21,19 @@ import {

 const PROJECT = "proj_ml2_unit_test";

+const prevBackend = process.env.SFIA_DERIVED_EMBEDDING_BACKEND;
+const prevSearch = process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
+
 afterEach(() => {
   try {
     rmSync(derivedIndexRoot(PROJECT), { recursive: true, force: true });
   } catch {
     /* ignore */
   }
-  delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
+  if (prevSearch === undefined) delete process.env.SFIA_DERIVED_EMBEDDING_SEARCH;
+  else process.env.SFIA_DERIVED_EMBEDDING_SEARCH = prevSearch;
+  if (prevBackend === undefined) delete process.env.SFIA_DERIVED_EMBEDDING_BACKEND;
+  else process.env.SFIA_DERIVED_EMBEDDING_BACKEND = prevBackend;
 });

 function entry(
@@ -119,7 +125,14 @@ describe("ml2 derived embedding index", () => {
   });

   it("hybrid merge keeps lexical and tags both", () => {
+    // E2 A.4 — unit file-index path: pin backend=file so DEV .env BACKEND=pg
+    // does not yield derivedUsed=false / SEMANTIC_HITS_REQUIRED_FOR_PG.
+    const env = {
+      SFIA_DERIVED_EMBEDDING_SEARCH: "1",
+      SFIA_DERIVED_EMBEDDING_BACKEND: "file",
+    } as unknown as NodeJS.ProcessEnv;
     process.env.SFIA_DERIVED_EMBEDDING_SEARCH = "1";
+    process.env.SFIA_DERIVED_EMBEDDING_BACKEND = "file";
     const a = entry({ sourceId: "syn-a", text: "alpha" });
     writeDerivedIndex({
       projectId: PROJECT,
@@ -139,7 +152,9 @@ describe("ml2 derived embedding index", () => {
       ],
       queryVector: [1, 0, 0],
       limit: 5,
+      env,
     });
+    expect(merged.derivedSkippedReason).toBeNull();
     expect(merged.derivedUsed).toBe(true);
     expect(merged.hits[0]?.channel).toBe("both");
   });
```

### DIFF — `projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
index e28aa34d..ed1c07a5 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
@@ -4,8 +4,13 @@ import {
   buildCognitivePolicy,
   resolveAdmittedResource,
   buildResourceContinuitySuspendMessage,
+  resolveCognitivePolicyVersionStamp,
   resolveContinuityCognitivePolicy,
 } from "@/domains/conversation/cognitive-policy";
+import {
+  isRecetteProvisionalQualified,
+  resolveProvisionalPolicy,
+} from "@/domains/conversation/cognitive-resources/provisional-cognitive-policy";
 import {
   COGNITIVE_GUIDANCE_ROWS,
   COGNITIVE_GUIDANCE_CATALOG_BLURB_MAX_CHARS,
@@ -169,6 +174,16 @@ describe("ML5 E02 — resource admission", () => {
     );
   });

+  it("provisional v0.1 does not admit v0.2-only Luna low couple", () => {
+    process.env.STUDIO_LANE = "DEV";
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.1";
+    expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(false);
+    expect(admitModelEffort("gpt-6-luna", "medium", "operational").admitted).toBe(true);
+    expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(true);
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(true);
+  });
+
   it("provisional v0.2 admits Terra medium, Luna low/medium; candidates stay refused", () => {
     process.env.STUDIO_LANE = "DEV";
     process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
@@ -201,9 +216,10 @@ describe("ML5 E02 — resource admission", () => {
     );
   });

-  it("v0.2 on non-DEV lane refuses provisional couples", () => {
+  it("v0.2 on RECETTE without qualified admit refuses provisional couples", () => {
     process.env.STUDIO_LANE = "RECETTE";
     process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    delete process.env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT;
     expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(false);
     expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(
       false,
@@ -213,6 +229,90 @@ describe("ML5 E02 — resource admission", () => {
     );
   });

+  it("v0.2 on RECETTE with SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified admits couples", () => {
+    process.env.STUDIO_LANE = "RECETTE";
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    process.env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT = "qualified";
+    expect(admitModelEffort("gpt-6-luna", "low", "operational").admitted).toBe(true);
+    expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(
+      true,
+    );
+    delete process.env.SFIA_COG_PROVISIONAL_RECETTE_ADMIT;
+  });
+
+  it("RECETTE admit accepts only exact qualified env value", () => {
+    // Exact token after trim; case-sensitive; reject lookalikes.
+    for (const bogus of ["", "1", "true", "yes", "QUALIFIED", "ok", "qualified-v9"]) {
+      expect(
+        isRecetteProvisionalQualified({
+          SFIA_COG_PROVISIONAL_RECETTE_ADMIT: bogus,
+        } as unknown as NodeJS.ProcessEnv),
+      ).toBe(false);
+    }
+    expect(
+      isRecetteProvisionalQualified({
+        SFIA_COG_PROVISIONAL_RECETTE_ADMIT: "qualified",
+      } as unknown as NodeJS.ProcessEnv),
+    ).toBe(true);
+    // Surrounding whitespace after trim is still the exact token.
+    expect(
+      isRecetteProvisionalQualified({
+        SFIA_COG_PROVISIONAL_RECETTE_ADMIT: " qualified ",
+      } as unknown as NodeJS.ProcessEnv),
+    ).toBe(true);
+  });
+
+  it("E2 A.1 — versioned RECETTE admit prefers qualified-v0.2 and flags bare qualified", () => {
+    const envVersioned = {
+      STUDIO_LANE: "RECETTE",
+      SFIA_COG_PROVISIONAL_POLICY: "v0.2",
+      SFIA_COG_PROVISIONAL_RECETTE_ADMIT: "qualified-v0.2",
+    } as unknown as NodeJS.ProcessEnv;
+    const r = resolveProvisionalPolicy(envVersioned);
+    expect(r.provisionalActive).toBe(true);
+    expect(r.reasonCodes).toContain("COG_POLICY_RECETTE_ADMIT_VERSION_v0.2");
+
+    const envBare = {
+      STUDIO_LANE: "RECETTE",
+      SFIA_COG_PROVISIONAL_POLICY: "v0.2",
+      SFIA_COG_PROVISIONAL_RECETTE_ADMIT: "qualified",
+    } as unknown as NodeJS.ProcessEnv;
+    const bare = resolveProvisionalPolicy(envBare);
+    expect(bare.provisionalActive).toBe(true);
+    expect(bare.reasonCodes).toContain("COG_POLICY_RECETTE_ADMIT_LEGACY_UNVERSIONED");
+
+    expect(
+      isRecetteProvisionalQualified(
+        { SFIA_COG_PROVISIONAL_RECETTE_ADMIT: "qualified-v0.1" } as unknown as NodeJS.ProcessEnv,
+        "v0.1",
+      ),
+    ).toBe(true);
+    expect(
+      isRecetteProvisionalQualified(
+        { SFIA_COG_PROVISIONAL_RECETTE_ADMIT: "qualified-v0.1" } as unknown as NodeJS.ProcessEnv,
+        "v0.2",
+      ),
+    ).toBe(false);
+  });
+
+  it("E2 A.1 — policyVersion stamp follows active provisional id", () => {
+    process.env.STUDIO_LANE = "DEV";
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.1";
+    expect(resolveCognitivePolicyVersionStamp()).toContain("v0.1");
+    const p = buildCognitivePolicy("allocation", "OPERATIONAL_PROVISIONAL");
+    expect(p.policyVersion).toContain("v0.1");
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    expect(resolveCognitivePolicyVersionStamp()).toContain("v0.2");
+  });
+
+  it("v0.2 on unknown lane refuses provisional couples (fail closed)", () => {
+    process.env.STUDIO_LANE = "STABLE";
+    process.env.SFIA_COG_PROVISIONAL_POLICY = "v0.2";
+    expect(admitModelEffort("gpt-6.1-terra", "medium", "operational").admitted).toBe(
+      false,
+    );
+  });
+
   it("legacy_sol policy refuses Luna/Terra operational couples", () => {
     process.env.SFIA_COG_PROVISIONAL_POLICY = "legacy_sol";
     expect(admitModelEffort("gpt-6-luna", "medium", "operational").admitted).toBe(
```

### DIFF — `projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
index ecc1bf01..c4976e42 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
@@ -10,7 +10,10 @@ import {
   finOpsDailyXAxisLabels,
   formatModelBreakdownCost,
   formatUsdAxisFr,
+  finOpsMeasureCoverageSubtext,
+  finOpsModelDisplayLabel,
   parseFinOpsPeriodDays,
+  resolveObservedProjectId,
   resolvePersonalSettingsActive,
   tokenTotalForRow,
 } from "@/domains/finops/usage-projection";
@@ -124,6 +127,16 @@ describe("ML5 E06 — FinOps usage projection", () => {
     expect(formatModelBreakdownCost({ costUsd: 1.2, coverage: "PARTIAL" })).toContain("1,20");
   });

+  it("finOpsMeasureCoverageSubtext explains zero KNOWN estimation with observed requests", () => {
+    const sub = finOpsMeasureCoverageSubtext({
+      totalRequests: 4,
+      measuredRequests: 4,
+      estimationCompletenessPercent: { kind: "partial", value: 0 },
+    });
+    expect(sub).toContain("PARTIAL ou inconnus");
+    expect(sub).not.toContain("estimation connue 0");
+  });
+
   it("excludes HTTP attempt correlation rows from cost and request totals", () => {
     const rows = [
       {
@@ -167,4 +180,33 @@ describe("ML5 E06 — FinOps usage projection", () => {
     ).toBe(true);
     expect(sumBillableProviderRequests(rows, { onlyWithObservedCost: true })).toBe(1);
   });
+
+  it("E2 A.7 — resolveObservedProjectId refuses multi-project attribution", () => {
+    expect(resolveObservedProjectId([])).toBeNull();
+    expect(resolveObservedProjectId([{ projectId: null }])).toBeNull();
+    expect(
+      resolveObservedProjectId([{ projectId: "p1" }, { projectId: "p1" }]),
+    ).toBe("p1");
+    expect(
+      resolveObservedProjectId([{ projectId: "p1" }, { projectId: "p2" }]),
+    ).toBeNull();
+  });
+
+  it("E2 A.7 — finOpsModelDisplayLabel never presents UNVERIFIED as applied", () => {
+    expect(
+      finOpsModelDisplayLabel({
+        modelApplied: "UNVERIFIED",
+        modelRequested: "gpt-6.2-sol",
+      }),
+    ).toBe("gpt-6.2-sol (demandé)");
+    expect(
+      finOpsModelDisplayLabel({
+        modelApplied: "gpt-6.1-terra",
+        modelRequested: "gpt-6.2-sol",
+      }),
+    ).toBe("gpt-6.1-terra");
+    expect(
+      finOpsModelDisplayLabel({ modelApplied: null, modelRequested: null }),
+    ).toBeNull();
+  });
 });
\ No newline at end of file
```

### UNTRACKED / FULL — `projects/sfia-studio-next/web/tests/unit/mp09-pilotage-multi-restitution.test.ts`
- sha256: `6fec7167943ea6bdd783f88e150ec469092cc60cb6739122997bb222b52e9217` · 5186 bytes

```
import { describe, expect, it } from "vitest";
import { composePilotageEffectRestitution } from "@/domains/conversation/pilotage-effect-restitution";
import {
  dependencyPreconditionBlockReason,
  pickPrimaryPilotageEffect,
  type TurnPilotageEffect,
} from "@/domains/conversation/pilotage-effect-aggregate";

describe("MP-09 — multi pilotage restitution", () => {
  it("compose renders A applied + B rejected without false success", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "Je traite les deux demandes.",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
        {
          attempted: true,
          operation: "TRANSITION_CYCLE",
          status: "REJECTED",
          reason: "Cycle source absent",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/cycle demandé est maintenant ouvert/i);
    expect(out).toMatch(/pas pu appliquer/i);
    expect(out).toMatch(/Cycle source absent/);
    expect(out).not.toMatch(/transition.*maintenant/i);
  });

  it("compose renders two applied outcomes", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "ok",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
        {
          attempted: true,
          operation: "TRANSITION_CYCLE",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/cycle demandé est maintenant ouvert/i);
    expect(out).toMatch(/transition de cycle/i);
  });

  it("first rejected second applied surfaces both", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "REJECTED",
          reason: "Type de cycle requis",
          intentClarity: "CLEAR",
        },
        {
          attempted: true,
          operation: "RETAIN_TRAJECTORY",
          status: "APPLIED",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/pas pu appliquer/i);
    expect(out).toMatch(/orientation de trajectoire est retenue/i);
  });

  it("ambiguous binding restitutes clarification", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "Analyse.",
      effects: [
        {
          attempted: true,
          intentClarity: "AMBIGUOUS",
          reason: "Deux cycles cités",
          status: null,
          decisionId: null,
        },
      ],
    });
    expect(out).toMatch(/intention ambiguë/i);
    expect(out).toMatch(/Deux cycles cités/);
  });

  it("ALREADY_APPLIED honest wording", () => {
    const out = composePilotageEffectRestitution({
      priorContent: "ok",
      effects: [
        {
          attempted: true,
          operation: "OPEN_CYCLE",
          status: "ALREADY_APPLIED",
          intentClarity: "CLEAR",
        },
      ],
    });
    expect(out).toMatch(/déjà en place/i);
  });

  it("pickPrimary returns first attempted in binding order", () => {
    const records: TurnPilotageEffect[] = [
      {
        attempted: true,
        operation: "OPEN_CYCLE",
        status: "APPLIED",
        intentClarity: "CLEAR",
        source: "user_message_command",
        decisionId: null,
      },
      {
        attempted: true,
        operation: "TRANSITION_CYCLE",
        status: "REJECTED",
        intentClarity: "CLEAR",
        source: "user_message_command",
        decisionId: null,
      },
    ];
    const primary = pickPrimaryPilotageEffect(records);
    expect(primary?.operation).toBe("OPEN_CYCLE");
  });
});

describe("MP-09 — dependsOn precondition gate", () => {
  const pilotageIntentIds = new Set(["i-open", "i-trans"]);

  it("blocks dependent when predecessor rejected", () => {
    const map = new Map([["i-open", "REJECTED"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-open"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toMatch(/prérequis/i);
  });

  it("allows dependent when predecessor applied", () => {
    const map = new Map([["i-open", "APPLIED"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-open"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toBeNull();
  });

  it("blocks when predecessor ambiguous", () => {
    const map = new Map([["i-open", "AMBIGUOUS"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-open"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toMatch(/ambiguë/i);
  });

  it("E2 A.3 — fail-closed on non-pilotage dependsOn (no silent skip)", () => {
    const map = new Map([["i-open", "APPLIED"]]);
    expect(
      dependencyPreconditionBlockReason({
        dependsOn: ["i-d4-knowledge"],
        pilotageIntentIds,
        outcomeByIntentId: map,
      }),
    ).toMatch(/hors intentions D5\/D6|inter-capacité/i);
  });
});
```

### UNTRACKED / FULL — `projects/sfia-studio-next/web/tests/unit/ml5-a5-cognitive-conductor-terminal.test.ts`
- sha256: `fba21546429daf73206176761dc84735ce3b1e2325073f58b0f04405f91a27fe` · 4426 bytes

```
import { describe, expect, it } from "vitest";
import { resolveCognitiveWorkTerminalStatus } from "@/domains/conversation/cognitive-conductor-terminal";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";

function qual(
  partial: Partial<NoraTurnQualification>,
): NoraTurnQualification {
  return {
    schemaVersion: "ml4c-sem-qual-v1",
    status: "QUALIFIED",
    goal: "",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents: [],
    replyDraft: "",
    ...partial,
  } as NoraTurnQualification;
}

describe("A.5 — cognitive work terminal status", () => {
  it("COMPLETes when production is COMPLETE and disposition COMPLETE despite stale clarifications", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({
        workDisposition: "COMPLETE",
        clarifications: ["Question déjà traitée dans le cycle ouvert"],
      }),
    });
    expect(r.awaitPilot).toBe(false);
    expect(r.status).toBe("COMPLETE");
  });

  it("stays OPEN on AWAIT_PILOT even when production is COMPLETE", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({
        workDisposition: "AWAIT_PILOT",
        clarifications: ["Quel périmètre TVA ?"],
      }),
    });
    expect(r.awaitPilot).toBe(true);
    expect(r.status).toBe("OPEN");
    expect(r.interruptCause).toBe("AWAIT_PILOT");
  });

  it("stays OPEN on NEEDS_CLARIFICATION with clarifications", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "IN_PROGRESS" },
      qualification: qual({
        status: "NEEDS_CLARIFICATION",
        clarifications: ["Préciser la date d'effet"],
      }),
    });
    expect(r.status).toBe("OPEN");
  });

  it("ignores open determinant questions when disposition is COMPLETE", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({
        workDisposition: "COMPLETE",
        determiningQuestions: [
          {
            id: "q1",
            text: "Stale?",
            status: "OPEN",
            importance: "DETERMINANT",
          },
        ],
      }),
    });
    expect(r.status).toBe("COMPLETE");
  });

  it("stays OPEN when conductor suspended flag is set", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: true,
      production: { status: "COMPLETE" },
      qualification: qual({ workDisposition: "COMPLETE" }),
    });
    expect(r.status).toBe("SUSPENDED");
    expect(r.interruptCause).toBeNull();
  });

  it("stays OPEN on IN_PROGRESS production despite disposition COMPLETE", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "IN_PROGRESS" },
      qualification: qual({ workDisposition: "COMPLETE" }),
    });
    expect(r.status).toBe("OPEN");
    expect(r.awaitPilot).toBe(true);
  });

  it("maps SUSPEND disposition to AWAIT_OR_SUSPEND interrupt", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({ workDisposition: "SUSPEND" }),
    });
    expect(r.status).toBe("OPEN");
    expect(r.interruptCause).toBe("AWAIT_OR_SUSPEND");
  });

  it("E2 A.5 — CONTINUE keeps work OPEN even when production COMPLETE", () => {
    const r = resolveCognitiveWorkTerminalStatus({
      suspended: false,
      production: { status: "COMPLETE" },
      qualification: qual({ workDisposition: "CONTINUE" }),
    });
    expect(r.status).toBe("OPEN");
    expect(r.awaitPilot).toBe(true);
    expect(r.interruptCause).toBe("CONTINUE");
  });

  it("SUSPENDs on production PARTIAL or FAILED", () => {
    expect(
      resolveCognitiveWorkTerminalStatus({
        suspended: false,
        production: { status: "PARTIAL" },
        qualification: qual({ workDisposition: "COMPLETE" }),
      }).status,
    ).toBe("SUSPENDED");
    expect(
      resolveCognitiveWorkTerminalStatus({
        suspended: false,
        production: { status: "FAILED" },
        qualification: qual({ workDisposition: "COMPLETE" }),
      }).status,
    ).toBe("SUSPENDED");
  });
});
```

### DIFF — `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 8d0adfbd..c631a49d 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,50 @@
+## delivery_id: DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV
+
+- **date_local**: 2026-11-27 (Europe/Paris)
+- **lane**: DEV only — macro-lot correctif intégré (17 MP + continuité Morris)
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `58ca9486003805f74e69a0842f2c0792a7184437`
+- **tree/diff**: worktree dirty (construction in progress) — NOT identical to HEAD commit
+- **schema_revision**: unchanged (no migration)
+- **build_DEV**: `next dev` :3100 (Turbopack) — not an immutable release build
+- **portée**: axes A–D — allocation Option C env-gated ; multi-intent command keys ; context efficiency ; work terminalisation ; FinOps projections ; parentSubjectId capitalisation ; shared composer + prep dictation ; panneau droit Repères ; rail settings ; restitution naturelle ; typographie ; spinner
+- **tests**: 88+ focused unit PASS (policy, FinOps, terminal, composer, dictation session, MP-09 keys/bindings, recent items, restitution, A.4)
+- **browser_DEV**: sas — Paramètres menu + mic « Dicter un message » visibles (auto-session)
+- **réserves**: LIVE OpenAI non autorisé (allocation réelle, dictée Realtime, autonomie hiérarchie naturelle, réutilisation cognitive LIVE) ; UX panneau → E3 ; transport audio → E4 ; RECETTE inchangée ; NO project commit
+- **classe**: NO RELEASE
+- **E2_périmètre** (2026-11-27, Ensemble 2 — garanties cognitives résiduelles A.1–A.7):
+  - A.1: stamp `policyVersion` = politique active ; RECETTE admit versionné (`qualified` / `qualified-v0.x`) + reason codes ; `modelApplied=UNVERIFIED` persisté (pas de copie silencieuse du demandé)
+  - A.2: SEM-02 lexical métier primary écarté (inspection) ; guidance dependsOn inter-capacité
+  - A.3: dependsOn hors D5/D6 → fail-closed ; ownership mid-loop → SKIPPED explicites restants
+  - A.4: resume `selectRelevantKnowledgeContext` + `projectId` ; hybrid `derivedUsed=false` instruit (FLAG_OFF / BACKEND=pg fixture) ; oracle file-index corrigé
+  - A.5: `workDisposition=CONTINUE` → OPEN / interrupt CONTINUE
+  - A.6/A.7: attribution projet multi-obs sans first-of-many ; labels modèle demandé vs appliqué ; `hasObservations`/`hasData` billable-only
+  - tests ciblés: **91 PASS** (mp09, A.5 terminal, FinOps projection, cognitive-resources, hybrid index, A.6 attribution, e1 B.7/B.8, hybrid guarantees)
+  - schéma: **027 inchangé** ; build DEV non figé ; NO RELEASE ; LIVE/RECETTE non mutés
+  - preuves reportées: calibration réelle ; T08 comparatif ; allocation adaptative naturelle ; coût facturé fournisseur ; DOM :3100
+- **E1_périmètre** (2026-11-27, ensemble Continuité cognitive B.1–B.8 uniquement):
+  - même tour parent+enfant (`subject-proposal-batch` + `precreateBatchSubjects`);
+  - reparent/rename via capitalisation SUBJECT existant;
+  - PROPOSE_TRAJECTORY USER_MESSAGE sans body objective (gate durable);
+  - compteurs décisions applicables (supersede uniquement si successeur APPLICABLE);
+  - `openPointShortTitle` pour E3; B.7 PREFERRED + omit marker;
+  - suite E1 focalisée: **52 PASS** (unit+PG B.1–B.8) puis **58 PASS** rapportés handoff `d08fc94e`
+- **E1_complément_reliquats** (2026-11-27, E1-REL-01…09 — même livraison, pas de nouvelle DELIV):
+  - E1-REL-01: merge/split/detach raccordés via `subjectOrganization` → propriétaires D4;
+  - E1-REL-02: refus subjectId invalide/étranger ; conflit id/titre ; fence rename/merge/split/reparent ; rename fail non masqué;
+  - E1-REL-04: `openPointTitle` → `provenance.canonicalTitle` + shortTitle projection;
+  - E1-REL-05: `forecastSteps` durable → ClassifiedCommand → PG ; RETAIN supersède PROPOSED (RETAIN_VIS);
+  - E1-REL-03/06/07/08: raccordements vérifiés ; preuves naturelles → registre recette ; DOM :3100 HTTP 500 tooling;
+  - E1-REL-09: as-built + registre + delivery-history synchronisés;
+  - tests complément: `e1-reliquats-integrity.pg.test.ts` **5 PASS** + non-régression B.5/B.6 (**10 PASS**) + B.7/B.8 PG (**3 PASS**) + units E1/projection;
+  - état testé: DETERMINISTIC PROVEN ciblé ; LIVE/navigateur NON PROUVÉS ; RECETTE préservée
+- **E1_final_safeguards** (2026-11-27, 3 contrôles — même livraison):
+  - merge: réparent enfants ACTIVE + refus cycle ancêtre→descendant ;
+  - forecast USER_MESSAGE: refuse body.forecastJson ; mutate ignore body hors chemins directs ;
+  - tests: `e1-final-safeguards.pg.test.ts` **5 PASS** + non-régression reliquats/ensemble/ml2-corrective (**38 PASS** lot) ;
+  - Review Pack régularisé (RETAIN + fichiers delta)
+- **statut**: E2 GARANTIES COGNITIVES RÉSIDUELLES DEV — READY WITH RESERVES (ChatGPT) avant gate E3; E1 CONSTRUCTION EXIT ACCEPTED WITH RESERVES; Livraison 1 NOT ACCEPTED; NO RELEASE
+
 ## delivery_id: DELIV-2026-11-27-ML5-RECETTE-OPERATIONAL-ACTIVATION

 - **date_utc**: 2026-11-27T10:00Z
```

### DIFF — `projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md`

```diff
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index a22275cd..1b7abb06 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,7 +4,7 @@

 | Champ | Valeur |
 |---|---|
-| Version | v0.29 candidate — 27 novembre 2026 : **RECETTE operational activation A1–A6** (`e8e6e069` · BUILD `rpEczSp61evIZ7d6fnIWR` · PG password rotated · flags LIVE · index borné 10 chunks · WEB/Admin OFF) — **RECETTE OPERATIONAL ACTIVATION COMPLETE — MORRIS FUNCTIONAL QUALIFICATION READY — USER ACCEPTANCE PENDING** ; v0.28 : cutover ; v0.27 : dictation nominal path final DEV ; … |
+| Version | v0.30 candidate — 27 novembre 2026 : **DEV macro-lot correctif intégré continuité/fiabilité** (17 MP MaintiPlan + arbitrages Morris) sur `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` — Option C env-gated ; multi-intent bindings ; shared composer + prep dictation ; panneau Repères ; rail settings ; restitution naturelle ; FinOps/A.4/A.5 DET — **CONSTRUCTION DEV — READY WITH RESERVES (LIVE gates ouverts)** ; v0.29 : RECETTE operational activation A1–A6 ; v0.28 : cutover ; … |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
 | Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
 | Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
@@ -428,6 +428,49 @@ Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comporteme
 | R-004 | 23/11/2026 | ML5 complétude — inventaire 99, P0 sendIntent, provenance sources, B1 frontier, synthèse≠Nora | même worktree DIRTY ; HEAD entrée `6cf33e99…` | Review Pack 4 → `sfia/review-handoff` | Impl **1/74/24** (réconcilié explore + cycle 4) ; T-01…T-12 corrigés | ML5 PARTIAL — GOVERNED GAPS ; unit 53 + PG 9 ; BROWSER/F2/LIVE ouverts |
 | R-PROV-01 | 26/11/2026 | ML5 politique cognitive provisoire v0.1 + qualification intégrée A/B/E/F LIVE | `sfia/next-ml5-integrated-delivery-20261123` · base `4f1bb0f2` · DEV build `-8zagoVhrLvhtuKL7ThVc` ; push produit **interdit** | Review Pack FULL → `sfia/review-handoff` (publish-in-cycle) | Politique v0.1 · FinOps WEB attribution · LIVE Terra→Sol · WEB gate dossier | DEV CANDIDATE — PROVISIONAL POLICY QUALIFIED IN DEV — WEB GATE PENDING — C/D différés |
 | R-AT-CAP | 25/11/2026 | ML5 Nora×Studio capability interactions — AssetTrack AT-01…13 (AT-10 retirée) · Option B+A+C | `sfia/next-ml5-integrated-delivery-20261123` · base `0d37b12a` · DEV build `BMd8qv-bn6m9Hj6YEtdee` ; push produit **interdit** | Review Pack FULL → `sfia/review-handoff` (publish-in-cycle) | AT-01…13 · PREPARE documentaire · forecast cognitif · LIVE activité · Git REAL RO | DEV CANDIDATE — INTEGRATED CORRECTIVE — READY FOR CHATGPT REVIEW ; RECETTE `ca0b114c` préservée |
+| R-E1 | 27/11/2026 | E1 Continuité cognitive B.1–B.8 (MP-03/10/12/13 + interfaces) — Critical Cycle 8 | `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486…` dirty ; no project commit | Review Pack E1 → `sfia/review-handoff` (publish-in-cycle) | B.1–B.8 · oracles 1–18 (E1 niveau) · suite 52 PASS unit/PG | E1 DETERMINISTIC PROVEN partiel ; autonomie LIVE NON PROUVÉE ; embedding residual → E2 ; UX panneau → E3 ; Livraison 1 NOT ACCEPTED |
+| R-E1r | 27/11/2026 | E1 complément neuf reliquats E1-REL-01…09 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E1r → `sfia/review-handoff` (publish-in-cycle) | E1-REL-01…09 · e1-reliquats 5 PASS + non-régression B.5–B.8 | E1 COMPLÉMENT — DETERMINISTIC PROVEN ciblé ; preuves naturelles → recette ; LIVE/DOM NON PROUVÉS ; E2 non engagé |
+| R-E1f | 27/11/2026 | E1 sécurisation finale — merge enfants + forecast USER_MESSAGE + pack | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E1f → `sfia/review-handoff` | merge reparent/cycle · BODY_FORECASTJSON refuse · e1-final-safeguards 5 PASS | E1 FINAL SAFEGUARDS — DET PROVEN ; R-REC-E1-01/02 conservés ; E2 non engagé |
+| R-E2 | 27/11/2026 | E2 garanties cognitives résiduelles A.1–A.7 — Critical Cycle 8 | même branche @ `58ca9486…` dirty ; no project commit | Review Pack E2 → `sfia/review-handoff` | A.1–A.7 · 91 PASS unit ciblés · hybrid instruit | E2 READY WITH RESERVES ; calibration/T08/LIVE → recette/E5 ; E3 non engagé |
+
+### E2 — lignes de couverture (2026-11-27)
+
+| Capacité | Niveau E2 | Preuve | Reliquat |
+| --- | --- | --- | --- |
+| A.1 Allocation | RACCORDÉ DET | policy stamp versionné ; RECETTE admit versionné ; UNVERIFIED applied persisté | Calibration réelle / choix adaptatif naturel → recette |
+| A.2 Qualification | VÉRIFIÉ INSPECTION | pas de routeur lexical métier primary ; tests SEM existants | Qualification multi-langues naturelle → recette |
+| A.3 Orchestration | RACCORDÉ DET | fail-closed dependsOn hors pilotage ; ownership SKIPPED | Reprise multi-intent C02 complète → E5 ; D4→D5 même tour (ordre pipeline) |
+| A.4 Contexte / hybrid | INSTRUIT + FIX ORACLE | resume+projectId ; derivedUsed=false = FLAG_OFF/BACKEND ; file-index PASS | Mesure T08 ; embedding LIVE ; index PG DEV enablement |
+| A.5 Finalisation | RACCORDÉ DET | CONTINUE → OPEN | Travaux OPEN « objectifs ouverts » naturels → recette |
+| A.6 Observabilité | RACCORDÉ DET | billable hasObservations/hasData | Libellés activité E3 ; corrélation LIVE |
+| A.7 FinOps | RACCORDÉ DET | resolveObservedProjectId ; model display ; populations | Coût facturé ; Admin OFF ; MP-06 audio interface only |
+
+### E1 — lignes de couverture (2026-11-27)
+
+| Capacité | Niveau E1 | Preuve | Reliquat |
+| --- | --- | --- | --- |
+| B.1 Capitalisation sélective | RACCORDÉ DET | extractKnowledgeProposals + maybeCapitalize ; unit e1-b1 | Autonomie qualification LIVE |
+| B.2 Arborescence | RACCORDÉ DET | same-turn parent/child PG ; reparent capitalisation+API ; **merge/split/detach via subjectOrganization** (E1-REL-01) | Pertinence cognitive naturelle → recette |
+| B.3 Synthèses/acquis | EXISTANT+EXERCÉ | summarize/capitalize/supersede paths ; intégrité refs (E1-REL-02) | Consolidation CampusNova-like → recette |
+| B.4 Points ouverts | RACCORDÉ DET | open/resolve PG ; **canonicalTitle** + shortTitle (E1-REL-04) | Accès UX E3 |
+| B.5 Décisions durables | RACCORDÉ DET | e1-ensemble-b5-b6 PG (record/revise/revoke/négatifs) | Reconnaissance naturelle → recette |
+| B.6 Trajectoire vivante | RACCORDÉ DET | propose/retain/open ; **forecastSteps conversationnel + RETAIN_VIS** (E1-REL-05) | Orientation naturelle → recette |
+| B.7 Réutilisation | RACCORDÉ DET | PREFERRED + omit marker PG ; outils D4 exposés | Mesure T08 / hybrid embedding → E2+recette |
+| B.8 Projections | RACCORDÉ DET | filterApplicableDecisions + library identity + shortTitle | DOM :3100 HTTP 500 tooling ; E3 multi-types |
+
+### E1-REL — matrice complément (2026-11-27)
+
+| ID | Exigence | État | Validation | Preuve restante |
+| --- | --- | --- | --- | --- |
+| E1-REL-01 | Réorganisation complète | IMPLEMENTED + DET PROVEN (merge) | e1-reliquats merge | Pertinence naturelle merge/split → recette |
+| E1-REL-02 | Intégrité D4 | IMPLEMENTED + DET PROVEN | invalid id, conflict, fence | — |
+| E1-REL-03 | Capitalisation réelle | IMPLEMENTED + VERIFIED BY INSPECTION | chaîne extract→D4 ; tests E1 | Conversation réelle → recette |
+| E1-REL-04 | Titre point ouvert | IMPLEMENTED + DET PROVEN | canonicalTitle PG + unit | Affichage DOM → recette/E3 |
+| E1-REL-05 | Trajectoire forecast+retain | IMPLEMENTED + DET PROVEN | forecast USER_MESSAGE ; RETAIN_VIS | Réorientation naturelle → recette |
+| E1-REL-06 | D6 complémentaire | VERIFIED BY INSPECTION + DET antérieur | e1-ensemble-b5-b6 | Actes naturels T07 → recette |
+| E1-REL-07 | Réutilisation D4 tools | VERIFIED BY INSPECTION + DET B.7 | tools exposés ; PREFERRED | Sélection naturelle → recette |
+| E1-REL-08 | Projections | VERIFIED BY INSPECTION | counters/identity/shortTitle code | DOM DEV bloqué tooling |
+| E1-REL-09 | Documentation | IMPLEMENTED | as-built + delivery + registre | Review Pack L3 |

 Un **Review Pack SFIA v2.6 FULL** est attendu lorsque le profil Critical est justifié ; `.tmp-sfia-review/chatgpt-review.md` reste la source mono-cycle, avec Review Handoff L3 distinct de l'historique produit Studio. Ne jamais considérer un résumé seul comme contenu complet des fichiers modifiés.
```

### UNTRACKED / FULL — `projects/sfia-studio-next/architecture-technique/e1-continuite-cognitive-as-built.md`
- sha256: `f6485ed5eaa48370dc3138dedb317e6b08fd0aa8ddf91103d5350c27131e540b` · 5294 bytes

```
# E1 — Continuité cognitive as-built (DEV, 2026-11-27)

Statut : DOCUMENTED as-built — NO RELEASE. Ne remplace pas le contrat fonctionnel
`conception-fonctionnelle/continuite-cognitive-et-fonctionnelle-du-projet.md`.

Complément ciblé E1 (reliquats ChatGPT E1-REL-01…09) — même Ensemble 1, pas E2.

## Responsabilités

| Domaine | Rôle |
| --- | --- |
| D3 | Qualification, extraction `d4.record_knowledge`, contexte, outils lecture |
| D4 | Sujets, hiérarchie, synthèses, acquis, points ouverts, provenance, merge/split |
| D5 | Trajectoire (propose/retain + forecast), cycles, finalité |
| D6 | Décisions humaines (RECORD/REVISE/REVOKE) — jamais dérivées d'une reco Nora seule |
| Studio | Admission, fence, persistance PG, projections |

## Mécanismes E1

### B.1 Capitalisation

- Gate : `QUALIFIED` + `REQUEST_EFFECT` + `d4.record_knowledge` → `extractKnowledgeProposals`.
- Écriture : `maybeCapitalizeFromExchange` (zéro proposition = zéro mutation).
- Provenance : message USER + message assistant (Nora) constitutifs lorsque fournis.
- Epistemic `established` Nora → D4 refuse FACT sans source indépendante.
- Champs étendus (complément) : `openPointTitle`, `subjectOrganization`, `mergeSourceSubjectId`,
  `relevantOpenPointIds` — extraits depuis la qualification durable, appliqués par D4.

### B.2 Arborescence + réorganisation (E1-REL-01)

- Module : `web/src/domains/knowledge/subject-proposal-batch.ts`
  - `orderSubjectCreatesByDependency` — parents avant enfants ; détection de cycle.
  - `resolveBatchParentRef` — `subj_*` | intent id | titre co-proposé | `lookup_title` DB.
- `precreateBatchSubjects` crée le batch avant le reste.
- Reparent/rename : SUBJECT avec `subjectId` existant + `parentSubjectId` / `subjectTitle`.
- **Complément** : `subjectOrganization=MERGE|SPLIT|DETACH` mobilise les propriétaires
  `mergeSubjects` / `splitSubject` / `reparentSubject(null)` — pas de second moteur métier.
- **E1 final** : `mergeSubjects` réparent les enfants ACTIVE du sujet absorbé vers la cible
  et refuse l'absorption d'un ancêtre dans un descendant (`CYCLE_OR_INVALID_TREE`).
- API Pilote : `POST .../knowledge` action `reparent` (en plus rename/merge/split).
- Nora : guidance adapter — parent+enfant même tour ; merge/split/detach paramétrés.

### Intégrité D4 (E1-REL-02)

- `subjectId` explicite invalide/étranger → **FAILED**, jamais création silencieuse.
- ACQUIS/OPEN_POINT : ref invalide → FAILED (pas d'héritage du `subjectId` de boucle).
- Conflit `subjectId` + `subjectTitle` divergent → `SUBJECT_ID_TITLE_CONFLICT`.
- Titre ambigu (homonymes ACTIVE) → `SUBJECT_TITLE_AMBIGUOUS`.
- Rename échoué → pas de résultat `AVAILABLE` masquant l'échec.
- Fence ownership optionnel sur rename / merge / split / reparent (TX).

### Points ouverts — titre court (E1-REL-04)

- `parameters.openPointTitle` → `provenance.canonicalTitle` (pas de migration schéma).
- `openPointShortTitle(statement, maxLen, { provenanceJson | canonicalTitle })`
  préfère le titre canonique ; fallback éditorial pour données historiques.
- `getOwnedProjectContext` alimente `shortTitle` depuis la provenance.

### B.5 / B.6 Trajectoire (E1-REL-05)

- `applyConversationalAuthority` : PROPOSE/RETAIN sans body objective/orientation client.
- **Complément forecast** : `parameters.forecastSteps` → `DurablePilotageBinding` →
  `ClassifiedCommand.forecastSteps` → persistance `trajectory_revisions.forecast_json`
  (chemin USER_MESSAGE conversationnel).
- **E1 final admission** : USER_MESSAGE refuse tout `body.forecastJson` client ;
  `mutateCommand` n'utilise le body que pour les sourceKind non-USER_MESSAGE.
  Absence de forecast durable ⇒ `null` (pas de complément client).
- **RETAIN_VIS** : RETAIN supersède tous les `PROPOSED` du projet ; projection
  `proposed=null` après retenue ; forecast reporté sur la révision RETAINED.
- OPEN_CYCLE conserve l'objectif contextualisé via `persistableCycleObjective`.

### B.4 / B.8 Projections

- Décisions applicables : `filterApplicableHumanDecisions` — supersede uniquement si
  successeur **APPLICABLE**.
- Documents : `countProjectLibraryDocuments` par identité documentaire (V1+V2 = 1).

### B.7 Réutilisation

- Sélection : `selectRelevantKnowledgeContext` + preferred ids.
- Continuation : `resolveContinuationKnowledgeSnippets` + marqueur d'omit.
- Outils D4 conducteur : `search_project_resources`, `read_project_document_revision`,
  `compare_document_proposal` — info non injectée consultable.

## Limites

- Autonomie sémantique LIVE : NON PROUVÉE (E1 = DET + injections).
- Hybrid embedding `derivedUsed=false` : **instruit E2** — défaut config/fixture
  (`SFIA_DERIVED_EMBEDDING_SEARCH` off ou `BACKEND=pg` sans semanticHits), pas régression B.7.
- Pertinence cognitive naturelle merge/split / sélection / finalité : recette utilisateur.
- UX panneau / multi-types : E3.
- Navigateur : `next dev` :3100 HTTP 500 (tooling turbopack/`@cursor/sdk`) — preuve DOM
  reportée ; qualify:start alternatif non imposé ici.

## Preuves

- Suite E1 antérieure (58 PASS rapportés) + complément `e1-reliquats-integrity.pg.test.ts`
  + non-régression B.5/B.6/B.7/B.8 — voir Delivery History et Review Pack complément E1.

```

---

## 16. Review Pack Content Coverage

| Élément | Présent |
| --- | --- |
| Date/heure / mandat / Git Truth | OUI |
| ENV-01 / versioning | OUI |
| Annexe E1 as-built + RETAIN | OUI |
| Acquis / diagnostic / corrections | OUI |
| Matrice A.1–A.7 / MP | OUI |
| Fichiers créés complets | OUI (pilotage-effect-aggregate, cognitive-conductor-terminal) |
| Diffs E2 exploitables | OUI |
| Tests / preuves / Fake-Real | OUI |
| Scénarios recette / réserves | OUI |
| Hybrid derivedUsed | OUI |
| FinOps calculs | OUI |
| Verdict | OUI |

---

## 17. Verdict proposé

**READY WITH RESERVES**

E2 garanties cognitives résiduelles raccordées et sécurisées en DET ciblé.
E1 préservé. Hybrid instruit. Pas de LIVE. Pas de mutation RECETTE. Pas de commit projet.
Gate Morris avant E3. ChatGPT revue sur handoff distant obligatoire.

Programme: R5 IN PROGRESS · ML5 OPEN · LIVRAISON 1 NOT ACCEPTED · STABLE N/A · NOT ADOPTED.

## FIN Review Pack E2

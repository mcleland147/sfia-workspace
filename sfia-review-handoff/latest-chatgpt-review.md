# SFIA Studio — Cycle-Independent Agent Selection Contract — Review Pack FULL

- **Horodatage** : 2026-10-16T11:55:23+0200 (Europe/Paris)
- **GO Morris** : GENERIC EXECUTION — CYCLE-INDEPENDENT AGENT SELECTION CONTRACT
- **Cycle** : 6 — Architecture technique · **Profil** : CRITICAL · **Typologie** : Architecture / Decision Support / DOC
- **Capacité** : V3-F05 · V3-F11 · V3-F12
- **Décisions consommées** : D-ER-16…19 · **Option B ADOPTED** (Targeted Upstream Replacement)
- **Décision ouverte** : SP-A vs SP-B (sélection sans cycle) — **NON CONSOMMÉE**
- **Mutations Product** : **AUCUNE** (READ-ONLY)

## 1. Verdict

**AGENT SELECTION CONTRACT REVIEW COMPLETE**
**SP-A / SP-B QUALIFIED**
**READY FOR MORRIS SELECTION CONTRACT DECISION**

**RECOMMENDATION (non adoptée) :** direction doctrinale **SP-B** (server-derived), car elle aligne Option B, évite schema/fingerprint churn, et peut encoder le force Product Cursor REAL déjà observé — **à condition** que Morris définisse l'attribut/règle de posture manquant.

**SP-A / SP-B ADOPTED — NON.**

Anti-claims : PRODUCT CODE UPDATED · DELIVERY COMPLETE · GIT INTEGRATED · READY FOR REAL · P6 GLOBAL PASS · RUNTIME V3 ADOPTED — **NON**.

## 2. Git Truth

| Check | Valeur |
| --- | --- |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` MATCH |
| Candidat path | `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` |
| Candidat HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| Candidat branch | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| Dirty paths | 18 |
| Note identité | FACT : le path historique `docs/…nora-tool-invocation-20261016` pointe désormais sur branche `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` (≠ rapport antérieur docs/@896ff59c). Contenu Delivery dirty **préservé** ; **aucune mutation** ce cycle. Analyse sur cet arbre. |
| Runtime :3020 | `studio-runtime-main-52f36884` @ `896ff59c` untouched |
| Handoff impact | `97a85c3c` / `077c9aad` VERIFIED |

### Status candidat (non muté)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
?? projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
```

## 3. Sources

Template · routing · guardrails · Build Doctrine · Roadmap · C1 · P2 · P6 · Architecture D-ER candidate · Doctrine 30/32/34/35/37 · CKC · Runtime Reference · Handoff `97a85c3c` (SP-A/SP-B sections).

## 4. Convergence Pre-check

| Item | État |
| --- | --- |
| Option B | **ADOPTED** (amont) |
| D-ER-16…19 | ADOPTED TARGET |
| Gap | W3-A `loadContract` → `CYCLE_BINDING_REQUIRED` |
| Acquis DET (handoff) | Nora tool · admission · PREPARE/AUTH sans cycle |
| Select/Attempt sans cycle | **NOT PROVEN** |
| Exit | Politique explicite de sélection sans cycle |

## 5. Distinction SelectionProfile ≠ AttemptExecutionProfile

| | SelectionProfile | AttemptExecutionProfile |
| --- | --- | --- |
| Rôle | HOW select (strategy / Critical confirm) | WHICH slice (capabilities / effects / lineage) |
| Persist | Attempt at Select | **NOT** persisted (by design) |
| Authority | Affecte human_confirmed_proposal | Explicitement **NOT** authority |
| Interdit | — | Capability → HD non requise ; AttemptProfile → autorisation |

**FACT :** fusionner les deux est anti-architecture.

## 6. CURRENT — loadContract / Select

### Cycle hard-gate

```typescript
tion.",
      },
    };
  }

  let selectionProfile: SelectionProfile | null = null;
  if (!contract.cycleInstanceId) {
    return {
      ok: false,
      result: {
        ok: false,
        code: "CYCLE_BINDING_REQUIRED",
        message:
          "ExecutionContract sans cycleInstanceId — Execute W3-A refusé (pas d
```

### mapCycleProfileToSelectionProfile

```typescript
function mapCycleProfileToSelectionProfile(
  profile: CycleProfile | string | null | undefined,
): SelectionProfile {
  if (profile === "Critical") return "critical";
  if (profile === "Light") return "light";
  return "standard";
}

function isBoundedDocsWriteContract(contract:
```

### Cursor REAL force (pratique historique ≠ règle universelle)

```typescript
ts its specialized agent; Product uses generalist.
  let effectiveProfile: SelectionProfile = selectionProfile;
  let selectionStrategy: SelectionStrategy;
  if (cursorReal) {
    effectiveProfile = "standard";
    selectionStrategy = "capabilities_deterministic";
  } else {
    const strategyResolved = resolveSelectionStrategy(selectionProfile);
    if ("detailCode" in strateg
```

### Faits CURRENT

| Fait | Preuve |
| --- | --- |
| Sans cycleInstanceId → CYCLE_BINDING_REQUIRED | loadContract ~397–406 ; der16 R4 |
| Critical→critical, Light→light, else standard | mapCycleProfile 155–161 |
| capitalization jamais produit par map | cycle enum Light\|Standard\|Critical |
| Cursor REAL force standard + capabilities_deterministic | Select ~652–654 |
| getProject fail → **continue** (seul archived bloque si ok) | ~385–394 — **trou** vs Build fail-closed |
| OA Select n'exige pas Cycle | selectExecutionAgent |
| Start ne re-mappe pas Cycle.profile | startExecution |
| EC **sans** champ selectionProfile | execution-contract/domain/types.ts |
| requiredAuthority ↛ SelectionProfile | w3aProductExecutionSemantics ; Generic N2 hardcode |
| Materiality insuffisante seule | STRUCTURAL ≠ selection posture |

### Phases W3-A réutilisant loadContract

governedExecuteSelectAgent · Start · RecordResult · Cancel · RecordFailure · orchestrateur — chacune recharge.

## 7. Préconditions communes P1–P19

| ID | Précondition | Statut |
| --- | --- | --- |
| P1–P3 | EC + Project réel + projectId match | PARTIAL (getProject miss fail-open) |
| P4–P5 | Cycle optionnel ; si présent binding OK | P4 TARGET ; P5 CURRENT forcé |
| P6–P11 | CURRENT, inspect, authority, HD, Conf, scope | KEEP (Authorize path) |
| P12 | AgentCapability | KEEP AttemptExecutionProfile |
| P13–P15 | SelectionProfile explicite / strategy / no default | **NOT IMPLEMENTED** sans cycle |
| P16–P19 | Revalidation, no elevation, version bind, fail-closed | PARTIAL |

## 8. SP-A — Sealed SelectionProfile

| Thème | Qualification |
| --- | --- |
| Moment | Avant Confirm (ou Confirm=seal write) ; immutableAfterConfirm |
| Source | Server-only ; refuse client (comme selectedAgentRef) |
| Persistence | Nouveau champ EC dans payload_json **+** material semanticFingerprint |
| Fingerprint | **Doit** inclure si autoritatif → Confirm churn |
| Legacy | Migration ou fail-closed ; pas Standard silencieux |
| Cursor REAL | Seal souvent **overridden** → valeur souvent moot sur path Product |
| Schema | Extension structurante → **gate Morris persistence** si colonne/modèle formel |
| Fit Option B | Mécanique mais duplique Cycle ; lourd |

## 9. SP-B — Server-derived SelectionProfile

| Thème | Qualification |
| --- | --- |
| Dérivation complète TODAY depuis EC seul | **NON** (FACT) |
| Attribut manquant | Durable **selection posture** indépendante du Cycle |
| Propriétaire | Product / Morris |
| requiredAuthority / materiality | **Insuffisants** seuls ; mapping interdit sans règle adoptée |
| AttemptExecutionProfile | **Interdit** comme source d'autorité |
| Persistence | Attempt only (déjà) ; pas de colonne EC si pur SP-B |
| Minimal rule-shaped SP-B | Product Cursor REAL ⇒ standard+capabilities_deterministic **sans** lire Cycle (déjà de facto) ; fail-closed ailleurs jusqu'à règle Critical-sans-cycle |
| Fit Option B | **Meilleur doctrinalement** |

## 10. Comparaison argumentée (extraits clés)

| Critère | SP-A | SP-B | Conclusion |
| --- | --- | --- | --- |
| Indépendance cycle | Fort si seal | Fort si règle/attr | Les deux viables |
| Persistence nouvelle | Probable | Optionnelle | SP-B plus léger |
| Fingerprint/Confirm | Coût élevé | Neutre EC | SP-B |
| Injection hostile | Refuse channel | Ignore by design | SP-B |
| Match Cursor REAL actuel | Seal moot | Encode force | SP-B |
| Critical human confirm | Seal critical | Derive critical | **Ni l'un ni l'autre** ne fixe le bypass REAL seul |
| Completeness TODAY | Schema manquant | Attr/règle manquante | **DECISION REQUIRED** |
| Reco doctrinale | — | Préférée | **NON ADOPTÉE** |

## 11. Cas avec / sans cycle

**Avec cycle :** préserver project match, status, authority, strategy, confirmation, lineage. Cycle peut rester **input optionnel** de dérivation (méthodologique) ou être ignoré sur Product Cursor REAL — **DECISION**.

**Sans cycle :** Project positif obligatoire (fermer fail-open getProject). Profil résolu par politique explicite. Fail-closed si ambigu. Aucun cycle artificiel / type fictif / standard implicite.

## 12. Frontière OA Select / Start

| Couche | Cycle dep CURRENT | TARGET |
| --- | --- | --- |
| Authorize | Non | KEEP |
| loadContract | **Hard** | REPLACE resolution |
| OA Select | Non (profile in request) | KEEP |
| Start | Cont01/git ids ; revalidate AttemptProfile | ADAPT bindings |
| Recovery | Attempt-stored profile | KEEP |

**FACT :** OA Select réutilisable si SelectionProfile fourni. Incompatibilité = seam W3-A loadContract, pas second moteur.

## 13. Matrice scénarios S1–S18 (NOT TESTED ce cycle)

| ID | CURRENT | SP-A | SP-B | FAIL-CLOSED |
| --- | --- | --- | --- | --- |
| S1 Cycle Standard | map→standard ; REAL→force | seal / force | derive / force | — |
| S2 Cycle Critical | REAL→force standard | seal moot | same until override redesigned | — |
| S3 Sans cycle | CYCLE_BINDING | OK si seal | OK si règle | missing→refuse |
| S4–S5 Faible / élevés sans cycle | refuse | seal policy | derive or refuse | ambiguous |
| S6 Structural autorisée | AUTH OK ; Select refuse | seal+refs | derive+refs | — |
| S7 HD absente | structural refuse PREPARE | same | same | yes |
| S8 Profil ambigu | N/A | refuse | refuse | yes |
| S9–S10 Archived / introuvable | archived stop ; miss **continue** | both should refuse miss | | fix hole |
| S11–S12 Obsoletesuperseded | existing gates | same | same | yes |
| S13 Agent insuffisant | Select fail | same | same | yes |
| S14 Agent Confirmation | Critical non-REAL | same | same | yes |
| S15–S16 Historique cycle / sans stamp | cycle map / refuse null | migrate/fail | fail until inputs | yes |
| S17–S18 Effets changés / contradiction | supersede | new seal | re-derive | yes |

## 14. Contrat cible recommandé (conceptuel — NON ADOPTÉ)

**Nom :** `resolveSelectionProfileForGovernedExecute`

**Owner Product :** Studio W3-A / OA boundary (pas Nora).

**Inputs autoritatifs :** EC confirmed (version, fingerprint), projectId, Project status ; Cycle **optionnel** selon politique.

**Inputs hostiles (ignorés) :** client/Nora selectionProfile, claimedAuthority, attemptProfile.

**Moment :** Select (Start fait confiance Attempt + revalidate AttemptExecutionProfile).

**Outputs :** selectionProfile + selectionStrategy + flags ; ou erreur typée (`SELECTION_PROFILE_UNRESOLVABLE`, transitional `CYCLE_BINDING_REQUIRED`).

**Jamais :** inventer standard ; élever autorité ; merger AttemptExecutionProfile.

**Persistence SP-B :** Attempt only. **SP-A :** EC field + fingerprint material → gate persistence.

**Exit cycle-hard-gate :** remplacer require cycleInstanceId par résolution politique ou fail-closed explicite.

## 15. Dette / exit / trajectoire minimale

| Dette | Exit |
| --- | --- |
| CYCLE_BINDING_REQUIRED | Morris SP + Delivery loadContract |
| getProject fail-open | Hardening indépendant |
| Cursor REAL Critical hollow | M-SP-03 |
| Pas d'attr posture | M-SP-02 |
| capitalization dead enum | Product define or ignore |

**Delivery minimal (futur GO) :** (1) Morris M-SP-01…03 (2) rewrite loadContract resolution only (3) tests S1/S3/S10/S12 (4) null-cycle Select DET — **pas** micro-patches isolés.

## 16. Gates Morris (ouverts)

1. **M-SP-01** — Choisir SP-A / SP-B / hybride / différer
2. **M-SP-02** — Critical-sans-cycle : refuse vs règle Product vs nouvel attribut
3. **M-SP-03** — Bypass Cursor REAL Critical (`652–654`) : politique intentionnelle ou dette
4. Si SP-A : gate persistence/schema/fingerprint
5. getProject fail-open : corriger dans Delivery ?

## 17. Fake / Real

ARCHITECTURE CONTRACT QUALIFIED.
Select/Attempt sans cycle : **NOT PROVEN**.
Aucun nouveau Fake/REAL. READY FOR REAL = **NO**.

## 18. Validations V1–V18

V1–V10, V12–V18 **PASS** (analyse).
V11 persistence SP-A **qualified** (coût).
V12 SP-B derivation **insuffisance démontrée**.

## 19. Git Truth final

```
origin/main=896ff59c
candidate_path=/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016
candidate_HEAD=b4c1d86211d372f7b0685be7ce8a5ba7de598e37
candidate_branch=fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare
candidate_dirty_unchanged=YES
product_mutations_this_cycle=NONE
runtime_3020=untouched
```

## 20. Instruction ChatGPT

Lire : `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

**SFIA STUDIO — CYCLE-INDEPENDENT AGENT SELECTION CRITICAL ARCHITECTURE CONTRACT REVIEW.**

Vérifier : fondement reco SP-B · absence sélection implicite · autorité · cycle/sans cycle · distinction profils · réutilisation OA · persistence · currentness · tests futurs · gates Morris · **SP-A/SP-B NON ADOPTÉS**.

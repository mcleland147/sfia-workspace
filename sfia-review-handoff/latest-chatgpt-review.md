# SFIA Studio — Review Pack FULL — Shared Technical Platform Architecture

**Date/heure :** 2026-07-23 06:21:21 CEST
**Niveau :** FULL
**Cycle :** Architecture technique SFIA Studio — Shared Technical Platform
**Profil SFIA :** Critical
**Typologie :** EVOL / ARCHITECTURE / TECHNICAL PLATFORM / SECURITY / MIGRATION
**Gate consommé :** `GO ARCHITECTURE — SFIA STUDIO SHARED TECHNICAL PLATFORM`
**Gate proposé (NON consommé) :** `GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM`
**Repo :** `mcleland147/sfia-workspace`
**Worktree :** `/Users/morris/Projects/sfia-workspace-framing-next-increment`
**Branche :** `framing/sfia-studio-next-product-increment`
**HEAD :** `88fa4658da07156614de270d8172f147535ddbf9`
**origin/main :** `88fa4658da07156614de270d8172f147535ddbf9`
**HEAD == origin/main :** YES
**Baseline méthode :** SFIA v2.6
**Statut v3 :** V3-MODELED CANDIDATE

---

## 1. État Git initial

```
M projects/sfia-studio/README.md
?? .tmp-sfia-review/
?? projects/sfia-studio/75-next-product-increment-framing.md
?? projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md
?? projects/sfia-studio/77-live-product-validation-framing-and-readiness.md
?? projects/sfia-studio/78-live-product-validation-execution-decision-pack.md
?? projects/sfia-studio/79-shared-technical-platform-architecture.md
?? projects/sfia-studio/80-shared-technical-platform-migration-decision-pack.md
```

porcelain=v2 (extrait) :
```
1 .M N... 100644 100644 100644 a3c088b20e5c1f405e2d3bc63a921208f1b31147 a3c088b20e5c1f405e2d3bc63a921208f1b31147 projects/sfia-studio/README.md
? .tmp-sfia-review/
? projects/sfia-studio/75-next-product-increment-framing.md
? projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md
? projects/sfia-studio/77-live-product-validation-framing-and-readiness.md
? projects/sfia-studio/78-live-product-validation-execution-decision-pack.md
? projects/sfia-studio/79-shared-technical-platform-architecture.md
? projects/sfia-studio/80-shared-technical-platform-migration-decision-pack.md
```

log :
```
88fa465 (HEAD -> framing/sfia-studio-next-product-increment, origin/main, origin/HEAD) feat(sfia-studio): deliver control tower and AI-guided project intake foundation (#254)
32e5271 (ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4, ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c, ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e, ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846, ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0, ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4, ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6, ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14, ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29, ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1, ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68, ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901, main, framing/sfia-studio-control-tower) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
27811e8 (ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230, ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2, ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050, ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353, ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca, ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700, ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7, ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7, ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187, ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8, ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d, ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce, ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608, ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a, ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539, ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd, ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928, ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56, ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f, ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
4b279b8 (ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0, ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b, ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca, ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61, ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62, ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
33de2fc feat(sfia-studio): deliver OPS1 I3 action gate (#250)
853959c feat(tooling): add canonical review handoff publisher (#249)
ae39a8c feat(ops1): deliver I2 live conversation modes (#248)
abd0541 docs(method): require review handoff for every Cursor report (#247)
```

branch -vv (extrait) :
```
* framing/sfia-studio-next-product-increment                   88fa465 [origin/main] feat(sfia-studio): deliver control tower and AI-guided project intake foundation (#254)
+ sfia/review-handoff                                          fadfc48 (/Users/morris/Projects/sfia-workspace/sfia-review-handoff) [origin/sfia/review-handoff] feat(review-handoff): publish SFIA Studio live product validation preparation
```

worktree list (extrait) :
```
/Users/morris/Projects/sfia-workspace                                                                                                    bb3c9e2 [delivery/sfia-studio-control-tower-fast-track]
/Users/morris/Projects/sfia-codex-pilot                                                                                                  ec7f397 [method/codex-operating-model-pilot]
/Users/morris/Projects/sfia-task-tracker                                                                                                 b763a31 [cadrage/task-tracker-light]
/Users/morris/Projects/sfia-workspace-framing-next-increment                                                                             88fa465 [framing/sfia-studio-next-product-increment]
/Users/morris/Projects/sfia-workspace-review-handoff-publisher                                                                           14d58fe [tooling/review-handoff-canonical-publisher]
/Users/morris/Projects/sfia-workspace-template-handoff-fix                                                                               134be30 (detached HEAD)
/Users/morris/Projects/sfia-workspace-ux-reconciliation                                                                                  7bdabdc [project/sfia-studio-ux-ui-reconciliation]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901  32e5271 [ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68  32e5271 [ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89  27811e8 [ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1  32e5271 [ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f  27811e8 [ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10  4b279b8 [ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29  32e5271 [ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56  27811e8 [ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62  4b279b8 [ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928  27811e8 [ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14  32e5271 [ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd  27811e8 [ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539  27811e8 [ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539]
```

**Observation :** staged vide ; docs 75–80 + README modifiés/non commités ; aucun `app/**` modifié. `origin/main` inchangé @ `88fa465…`.

---

## 2. Sources lues

### Méthode
- prompts/templates/sfia-cycle-execution-template.md (référencé)
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- manifest SFIA v2.6 (baseline)

### Handoff
- branche `sfia/review-handoff` (précédent live prep `fadfc48…` / blob `895f48f…`)

### Documents Studio
- 66–78 (cadrage CT, D1, live prep) — **non réécrits**
- README.md — navigation + séquence candidate uniquement

### Code réel inspecté
- `app/lib/ops1/**` (conversation, tools, sfia, db, execution*, reports…)
- `app/lib/d1/**` (intake resolveProvider → **imports OPS1**, matching, confirmation)
- `app/features/ops1/**`, `app/features/d1/**`
- tsconfig `@/*`
- imports croisés : **D1 → OPS1** présent ; **OPS1 → D1** absent

---

## 3. Baseline / décisions Morris (contexte)

- PR #254 mergée : Control Tower + D1 foundation sur main `88fa465…`
- Live Product Validation cadrée (77/78) ; exécution différée jusqu’à architecture platform
- B′ différée
- Doctrine : OPS1 consommateur historique temporaire ; D1 ne doit pas dépendre durablement d’OPS1
- Ce cycle : **architecture only** — aucun code platform créé

---

## 4. Inventaire et classification

### A — Techniques génériques (extraire)
ConversationProvider / OpenAI / Fake / config · ToolDefinition · GitLocalReadAdapter · GithubReadAdapter · pathPolicy · redaction · sourceLoader · canonicalPaths · (contextResolver core)

### B — Génériques encore couplés
toolLoop · toolRouter (écriture `session_events` OPS1) · types AI liés `Ops1Error` / journal OPS1 · contextResolver champs session

### C — Métier OPS1 (conserver)
conversation/service · ActionCandidate / proposalSchema / actionCompiler / sessionContext · db/sessionLifecycle · execution* · actionGate · reports · allowlistService (actions) · UI OPS1

### D — Métier D1 (conserver)
D1IntakeProposal C2 · matching C3 · confirmation C4 · createProject · audit Project · UI D1

### E — Ne pas extraire
Orchestrateurs métier · execution Cursor · reports OPS1 · Project mutation

### F — Dette
**D1 → OPS1** via `resolveProvider.ts` / `fakeIntakeProvider.ts` (violation doctrine actuelle)

---

## 5. Dépendances actuelles

```
UI OPS1 → ops1/service → toolLoop → toolRouter → adapters
                 → sfia ActionCandidate compile
UI D1 → d1/analyzeIntent → ops1 ConversationProvider/OpenAI/config
      → d1 matching / C4 / Project
```

## 6. Dépendances cibles

```
D1 → platform
OPS1 → platform
Futurs → platform
Interdit: D1→OPS1 | platform→D1 | platform→OPS1
```

Règles testables : `no-restricted-imports` / vitest grep.

---

## 7. Contrats candidats
ConversationProvider · StructuredOutputValidator · ToolDefinition/Call/Result · ToolExecutionContext(+EventSink) · ToolExecutionPolicy · GitReadPort · GithubReadPort · CanonicalContextRequest/Result · TechnicalEvent · UsageMetrics · TechnicalFailure

**EventSink** = clé de découplage toolLoop ↛ OPS1 DB.

---

## 8. Options

| Option | Verdict |
|--------|---------|
| A — extraction minimale | Alternative (provider-first) |
| **B — plateforme technique + EventSink** | **Recommandation** |
| C — wrappers D1 autour OPS1 | **Anti-option — rejeter** |
| D — agent platform globale | **Hors cible — NO-GO** |

---

## 9. Recommandation / alternative / structure

**Recommandation :** Option B — `app/lib/platform/{ai,tools,repository,sfia-context,security,observability}`
**Alternative :** Option A puis B
**Structure Variante 1 (rec.) :** `lib/platform/**` ; Variante 2 : `lib/studio/**`

---

## 10. Intégration D1
C1 → platform AI + context + tools → adapter text→D1 proposal → C3 → C4 → createProject|NO_MUTATION. Métier D1 reste D1.

## 11. Compatibilité OPS1
Wrappers re-export temporaires ; service/execution/reports restent ; nouveaux génériques sous ops1 **interdits** après GO DELIVERY.

## 12. Décommissionnement
Phases 1–6 (extract → OPS1 consume → D1 consume → live unifié → migrate métier → remove wrappers). Pas de suppression OPS1 dans ce cycle.

## 13. Sécurité / observabilité
RO Git/GitHub, allowlists, redaction, fail-closed, timeouts, 4×4 rounds, pas de mutation platform, EventSink local (pas de bus global).

## 14. Migration / backlog
4 lots · 15 items (doc 80). Premier vertical : Lots 1–2 (B) ou items 1–3+6+9 (A).

## 15. Risques / dette
Big-bang imports → wrappers ; fourre-tout platform → modules stricts ; dette autorisée = wrappers ; dette interdite = D1→OPS1 maintenu.

## 16. Impacts
Live : dual-track remplacé après Phase 3. B′ : différée. OPS1 : temporaire.

## 17. Décisions Morris
1. B vs A ? 2. `lib/platform/**` ? 3. EventSink ? 4. Interdiction génériques sous ops1 ? 5. Séquence Platform→D1 unifié→Live→B′ ? 6. GO DELIVERY ?

## 18. Fichiers créés / modifiés (ce cycle)

Créés :
- `projects/sfia-studio/79-shared-technical-platform-architecture.md`
- `projects/sfia-studio/80-shared-technical-platform-migration-decision-pack.md`

Modifié :
- `projects/sfia-studio/README.md` (liens 79/80 + séquence candidate uniquement)

Non touchés : 75–78, `app/**`, tests, method, prompts, package.json.

## 19. Actions non exécutées
- aucun code platform
- aucun commit/push branche framing
- aucun GO DELIVERY
- aucune Live Execution
- aucune suppression OPS1
- aucun B′
- aucun GPT live

---

## 20. DIFF README

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index a3c088b..f4702c7 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -503,3 +503,19 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [73-control-tower-fast-track-delivery-report.md](./73-control-tower-fast-track-delivery-report.md) | Rapport delivery local — **READY FOR MORRIS LIVE VALIDATION** |

 *SFIA Studio — Control Tower delivery **local** (`70`–`73`) — live Morris requis — commit/push/PR/MVP/production **fermés**.*
+
+### Prochain incrément produit (cadrage + préparation live — post PR #254)
+
+| Document | Rôle |
+|----------|------|
+| [75-next-product-increment-framing.md](./75-next-product-increment-framing.md) | Gap analysis, options A–F, B′ **différée** — **`framing-candidate`** |
+| [76-next-product-increment-options-and-decision-pack.md](./76-next-product-increment-options-and-decision-pack.md) | Decision pack ; priorité **Live Product Validation** — **`decision-pack-candidate`** |
+| [77-live-product-validation-framing-and-readiness.md](./77-live-product-validation-framing-and-readiness.md) | Readiness GPT / canonique / Git / GitHub / D1 — **`live-prep-candidate`** |
+| [78-live-product-validation-execution-decision-pack.md](./78-live-product-validation-execution-decision-pack.md) | Scénarios LPV-01…06, DoD, gate exécution — **`execution-pack-candidate`** |
+| [79-shared-technical-platform-architecture.md](./79-shared-technical-platform-architecture.md) | Architecture candidate Shared Technical Platform — **`architecture-candidate`** |
+| [80-shared-technical-platform-migration-decision-pack.md](./80-shared-technical-platform-migration-decision-pack.md) | Decision pack migration / lots / gates — **`decision-pack-candidate`** |
+
+> **Séquence candidate :** Shared Technical Platform → D1 unifié → Live Product Validation → décision B′.
+> **Statut :** architecture platform **candidate** — décision Morris requise (`GO DELIVERY` **non** consommé).
+> Live Product Validation (77/78) et Option B′ restent **différées** jusqu’à validation de cette architecture.
+> Gate proposé : `GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM`.
```

---

## 21. CONTENU COMPLET — Document 79

BEGIN_FILE projects/sfia-studio/79-shared-technical-platform-architecture.md
# SFIA Studio — Shared Technical Platform — Architecture candidate

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `79-shared-technical-platform-architecture.md` |
| **Statut** | `architecture-candidate` — **non validée** |
| **Gate consommé** | `GO ARCHITECTURE — SFIA STUDIO SHARED TECHNICAL PLATFORM` |
| **Gate proposé** | `GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM` |
| **Base** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` |
| **Branche** | `framing/sfia-studio-next-product-increment` (locale) |
| **Baseline méthode** | SFIA v2.6 |
| **Statut v3** | V3-MODELED CANDIDATE |
| **Complète** | `80-shared-technical-platform-migration-decision-pack.md` |

> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris requise**.

---

## 1. Contexte et objectif

**Observation.** Les capacités GPT, tools Git/GitHub, redaction, path policy et contexte SFIA canonique vivent sous `lib/ops1/**`. D1 consomme déjà `ConversationProvider` / `OpenAIConversationProvider` / `config` **via des imports `@/lib/ops1/...`** (`resolveProvider.ts`, `fakeIntakeProvider.ts`). Live Product Validation a documenté un dual-track faute d’unification.

**Objectif.** Extraire une **Shared Technical Platform** minimale pour que :

1. D1 et OPS1 consomment les mêmes fondations techniques ;
2. **D1 ↛ OPS1** (règle cible) ;
3. OPS1 reste consommateur temporaire compatible ;
4. le parcours D1 unifié (GPT + tools + canonique + C2–C4) devient réalisable ;
5. le décommissionnement OPS1 soit préparé sans big-bang ni framework agents.

**Hors cible.** Multi-provider complexe, bus global, RAG, IoC, packages npm internes, OAuth, writes Git/GitHub, Cycle/GuidedSession runtime, B′ delivery, live GPT exécuté.

---

## 2. État actuel — inventaire

### 2.1 Classification des composants `lib/ops1/**`

| Composant | Classe | Destination candidate | Notes |
|-----------|--------|----------------------|-------|
| `conversation/types.ts` (`ConversationProvider`, messages, rounds) | **A** générique (+ **B** couplage `Ops1Error`, journal OPS1) | `platform/ai` | Extraire types purs ; journal helpers restent OPS1 ou deviennent utilitaires mode-agnostic |
| `conversation/openaiProvider.ts` | **A** | `platform/ai` | Déjà réutilisé par D1 |
| `conversation/fakeProvider.ts` | **A** (+ fixtures CT markers) | `platform/ai` | Séparer fake générique vs markers CT OPS1 |
| `conversation/config.ts` | **A** | `platform/ai` | Secrets live |
| `conversation/provider.ts` | **A** | `platform/ai` | Resolve OPS1 ; D1 a son resolve |
| `conversation/toolLoop.ts` | **B** | `platform/tools` | Couplé `session_events` OPS1 DB |
| `conversation/service.ts` | **C** métier OPS1 | rester OPS1 | Session + SFIA ActionCandidate |
| `tools/types.ts` | **A** | `platform/tools` | Noms CT OK comme namespace tools |
| `tools/toolRouter.ts` | **B** | `platform/tools` | Events → OPS1 DB à injecter |
| `tools/gitLocalReadAdapter.ts` | **A** | `platform/repository` | |
| `tools/githubReadAdapter.ts` | **A** | `platform/repository` | |
| `tools/pathPolicy.ts` | **A** | `platform/security` ou `repository` | |
| `tools/redaction.ts` | **A** | `platform/security` | |
| `sfia/canonicalPaths.ts` | **A** | `platform/sfia-context` | |
| `sfia/sourceLoader.ts` | **A** | `platform/sfia-context` | |
| `sfia/contextResolver.ts` | **B** | `platform/sfia-context` | Vérifier champs session OPS1 |
| `sfia/sessionContext.ts` | **C** | OPS1 | Bind session OPS1 |
| `sfia/proposalSchema.ts` | **C** | OPS1 | ActionCandidate |
| `sfia/actionCompiler.ts` | **C** | OPS1 | Compile + persist ActionCandidate |
| `sfia/cursorPromptInstantiator.ts` | **C** | OPS1 | |
| `sfia/types.ts` | **C** (+ fragments A) | Split | Types contexte → platform ; proposal → OPS1 |
| `reportReinjection.ts` / `reportService.ts` | **C** | OPS1 | |
| `db.ts` / `repository.ts` / `sessionLifecycle.ts` | **C** | OPS1 | |
| `execution*` / `actionGate` / `cursorExecutionAdapter` | **C** | OPS1 | |
| `allowlistEvaluation` / `allowlistService` | **C** (action write allowlist) vs pathPolicy **A** | Split | Ne pas confondre |
| `globalModeBadge` / `fixtureReply` / `validation` | **C**/UI | OPS1 | |

### 2.2 Métier D1 (ne pas extraire)

`lib/d1/intake/**` (prompt C2, validateProposal, analyzeIntent) · `context/**` matching · `confirmation/**` · `commands`/`repository` Project · audit Project · UI `features/d1/**`.

### 2.3 Dépendance actuelle critique

```
D1 resolveProvider ──imports──► ops1/conversation/{types,config,openaiProvider}
```

**Observation.** La règle cible « Interdire D1 → OPS1 » est **déjà violée**. L’extraction n’est pas cosmétique : elle régularise un couplage vivant.

OPS1 ↛ D1 : **OK** (aucun import trouvé).

---

## 3. Graphes de dépendances

### 3.1 Actuel

```
UI OPS1 ──► ops1/conversation/service ──► toolLoop ──► toolRouter ──► adapters
                              └──► sfia/sessionContext/actionCompiler
UI D1   ──► d1/intake/analyzeIntent ──► ops1 OpenAI provider (only)
              └──► d1 matching / confirmation / Project DB
```

### 3.2 Cible

```
UI OPS1 ──► ops1/service (métier) ──► platform/{ai,tools,sfia-context}
UI D1   ──► d1/intake (métier)   ──► platform/{ai,tools,sfia-context}
Futurs  ──► domain/*             ──► platform/*

Interdit: D1 → OPS1 | platform → D1 | platform → OPS1 | adapters → Project/Cycle/Session
```

### 3.3 Règles d’import testables (candidats)

| Règle | Mécanisme candidat |
|-------|-------------------|
| `lib/d1/**` n’importe pas `lib/ops1/**` | test ESLint `no-restricted-imports` ou vitest grep CI |
| `lib/platform/**` n’importe pas `lib/d1/**` ni `lib/ops1/**` | idem |
| `lib/ops1/**` peut importer `lib/platform/**` | autorisé |
| Adapters repository sans types D1/OPS1 session | review + test type |

---

## 4. Frontières cibles (modules)

Noms candidats (chemin proposé §8) :

| Module | Contenu | Consommateurs |
|--------|---------|---------------|
| **Studio AI** | `ConversationProvider`, OpenAI, Fake générique, config secrets, validation structured **générique** (hooks) | D1, OPS1 |
| **Studio Tools** | ToolDefinition/Registry/Executor, tool loop, ToolResult, policy | D1 (futur unifié), OPS1 |
| **Studio Repository Access** | GitReadPort, GithubReadPort, transports, path/repo allowlist | Tools |
| **Studio Canonical Context** | SourceLoader, paths, ContextResolver **sans** ActionCandidate | D1, OPS1 |
| **Studio Security** | redaction, limits, denial codes | Tools, AI |
| **Studio Observability** | `TechnicalEventSink` (interface), types événements techniques | Tools/AI ; domaines mappent vers timelines métier |

**Orchestration métier** reste hors platform : `ops1/conversation/service`, `d1/intake/analyzeIntent`.

---

## 5. Contrats candidats (sans code)

| Contrat | Responsabilité | Interdit | Erreurs |
|---------|----------------|----------|---------|
| `ConversationProvider` | complete / completeRound | Connaître Project, Proposal D1, ActionCandidate | TIMEOUT, PROVIDER, CONFIG |
| `StructuredOutputValidator<T>` | parse+validate payload | Règles métier D1/OPS1 spécifiques (restent domaines) | VALIDATION |
| `ToolDefinition` / `ToolCall` / `ToolResult` | schéma & résultat RO | Mutations | POLICY_DENIED, TIMEOUT… |
| `ToolExecutionContext` | workspaceRoot, allowlists, **EventSink** | Session OPS1 id obligatoire | — |
| `ToolExecutionPolicy` | deny-by-default | — | POLICY_DENIED |
| `GitReadPort` / `GithubReadPort` | lectures | Writes, shell | PATH/REPO denied |
| `CanonicalContextRequest/Result` | load+resolve doctrine | Ouvrir Cycle / claim v3 | SOURCE_REJECTED |
| `TechnicalEvent` | TOOL_*, AI_*, SOURCE_* | Secrets, tokens | — |
| `UsageMetrics` | tokens/model id | API keys | — |
| `TechnicalFailure` | code + message safe | Stack avec env | — |

**EventSink (critique pour découplage).** `toolLoop` / `toolRouter` n’écrivent plus directement dans `ops1.session_events` ; ils appellent `sink.emit(event)`. OPS1 fournit un sink SQLite session ; D1 fournit logs structurés / no-op / future table.

---

## 6. Options

### Option A — Extraction minimale services partagés

Déplacer AI + adapters Git/GitHub + pathPolicy + redaction + sourceLoader ; **laisser toolLoop/router dans OPS1** jusqu’à refactor sink.

| | |
|--|--|
| Valeur | Corrige D1→OPS1 provider rapidement |
| Complexité | M |
| Dette | D1 unifié tools encore bloqué ou re-dépend d’OPS1 toolLoop |
| Live unifié | Partiel |
| Effort | **M** |

### Option B — Plateforme conversationnelle technique (recommandée candidate)

A + tool loop/router découplés via EventSink + contexte canonique extrait + types AI purs.

| | |
|--|--|
| Valeur | **Forte** — D1 unifié + OPS1 inchangé fonctionnellement |
| Complexité | M–L |
| Dette | Wrappers `ops1/*` re-export temporaires |
| Live unifié | **Oui** après Lot 3 |
| Effort | **L** (mais incrémental) |

### Option C — Wrappers D1 autour d’OPS1 (**anti-option**)

| | |
|--|--|
| Valeur | Court terme trompeur |
| Dette | **Élevée** — ancre D1→OPS1 |
| Décommission | Empêché |
| Verdict | **Rejeter** |

### Option D — Refonte agent platform globale

Hors cible (framework, multi-agent, RAG…). **NO-GO.**

---

## 7. Recommandation candidate

**Recommandation :** Option **B** (plateforme technique proportionnée + EventSink).

**Alternative :** Option **A** puis B en second delivery si Morris veut un premier vertical plus petit (provider-only).

**Rationnel.**

1. Corrige la dépendance D1→OPS1 existante.
2. Rend le tool loop réutilisable sans ownership OPS1 DB.
3. Prépare Live Product Validation **unifiée** (remplace dual-track).
4. Laisse ActionCandidate / execution / reports dans OPS1.
5. Évite le framework universel.

---

## 8. Structure de fichiers candidate

### Variante 1 (recommandée) — `lib/platform/**`

```
app/lib/platform/
  ai/           # provider, openai, fake, config, types
  tools/        # definitions, router, loop, types
  repository/   # git + github adapters, ports
  sfia-context/ # paths, loader, resolver (sans compiler)
  security/     # redaction, limits helpers
  observability/# TechnicalEvent, EventSink
  index.ts
```

| Avantages | Inconvénients |
|-----------|----------------|
| Ownership clair « platform » | Nouveau préfixe imports |
| Aligné frontière doc | Risque fourre-tout si mal gouverné |
| Testable par règles import | Migration imports large |

### Variante 2 — `lib/studio/{ai,tools,...}`

Même découpage, préfixe `studio`. Moins explicite vs produit « platform ». **Second choix.**

**Ne pas créer** ces dossiers dans ce cycle.

Wrappers temporaires OPS1 :

```
lib/ops1/conversation/openaiProvider.ts → re-export platform/ai
lib/ops1/tools/* → re-export platform/...
```

Marqués `TEMP_OPS1_PLATFORM_WRAPPER — remove after Phase 5`.

---

## 9. Intégration D1 cible

```
D1-C1 UI
  → platform AI (live/fake)
  → platform sfia-context (sources)
  → platform tools (Git/GitHub RO) via tool loop + EventSink D1
  → adapter: raw assistant text/JSON → validateRequestRoutingProposal (D1)
  → D1-C3 matching
  → D1-C4 confirm
  → createProject | NO_MUTATION
```

**D1 reste owner :** proposal C2, matching, confirmation, Project DB/audit.
**Platform owner :** transport GPT, tools, sources, security technique, events techniques.

Point d’adaptation : fonction D1 `toRequestRoutingProposal(providerText)` — déjà `validateProposal` — **pas** dans platform.

---

## 10. Compatibilité OPS1

| Conservé OPS1 | Redirigé vers platform | Wrapper temporaire |
|---------------|----------------------|--------------------|
| service.ts orchestration | AI provider, tools, context | re-exports |
| ActionCandidate compile | consomme context platform | — |
| execution*, reports, db | — | — |
| UI Ops1SessionScreen | events via sink | — |

**Interdit :** nouveaux développements génériques sous `lib/ops1/tools` ou `conversation/openai*` après GO DELIVERY platform.
**Critère retrait wrappers :** plus aucun import interne hors re-export ; D1 n’importe que `platform` ; tests verts ; docs à jour.

---

## 11. Trajectoire de décommissionnement OPS1

| Phase | Contenu | Gate | Succès |
|-------|---------|------|--------|
| **1** | Extraire platform (AI, tools+sink, repo, context, security) | GO DELIVERY platform | Build + tests ; D1 importe platform |
| **2** | OPS1 consomme platform via wrappers | inclus Lot 2 | E2E OPS1 verts |
| **3** | D1 unifié consomme tools+context | Lot 3 | E2E D1 tools ; **plus D1→OPS1** |
| **4** | Live Product Validation unifiée | GO EXÉCUTION LIVE | Verdict A/B/C/D |
| **5** | Migrer/isoler métier OPS1 restant (ou figer) | GO dédié | Périmètre OPS1 clair |
| **6** | Supprimer wrappers + dossiers morts | GO CLEANUP OPS1 | Imports clean |

Ce cycle **n’autorise pas** la suppression OPS1.

---

## 12. Sécurité et observabilité

Conserver : read-only, allowlists, redaction, fail-closed, timeouts, 4×4 tool rounds, C4 humain, **aucune mutation platform**.

Événements techniques génériques : `AI_*`, `TOOL_*`, `SOURCE_*`, `STRUCTURED_OUTPUT_*` — domaines mappent vers UI/audit métier. **Pas de bus global** : EventSink local injecté.

---

## 13. Migration — backlog candidat (≤4 lots · ≤15 items)

### Lot 1 — Fondations platform

1. Créer `lib/platform/ai` (types purs, openai, fake générique, config)
2. Créer security/redaction + repository adapters + pathPolicy
3. Créer sfia-context (paths, loader, resolver sans compiler)
4. Introduire `EventSink` + découpler toolRouter/toolLoop
5. Tests unit platform + règle import « platform ↛ ops1/d1 »

### Lot 2 — OPS1 sans régression

6. Wrappers re-export OPS1
7. Brancher service OPS1 sur platform
8. Vitest OPS1 + E2E CT smoke

### Lot 3 — D1 unifié

9. D1 resolveProvider → platform only
10. Brancher analyzeIntent / intake sur tool loop + context (borné)
11. UI événements tools sur Intake (minimal)
12. Interdire imports D1→OPS1 (test)
13. E2E D1 live-path (fixture tools)

### Lot 4 — Live prep + retrait wrappers (préparation)

14. Runbook Live Product Validation unifié (maj 77/78 ultérieure)
15. Checklist retrait wrappers (exécution suppression = gate séparé)

**Premier vertical minimal (Recommandation) :** items 1–3 + 6–9 (provider extract + D1 découplé) si Morris choisit Alternative A d’abord ; sinon Lots 1–3 complets pour B.

---

## 14. Critères d’architecture (checklist)

- [ ] D1 ↛ OPS1
- [ ] Ownership platform indépendant
- [ ] OPS1 fonctionne via wrappers
- [ ] Pas de duplication GPT/tools/context
- [ ] D1 unifié réalisable
- [ ] Read-only + redaction intactes
- [ ] Fake + tests déterministes possibles
- [ ] Métier D1/OPS1 non mélangé dans platform
- [ ] Décommission préparé
- [ ] Pas de framework universel
- [ ] Migration incrémentale + rollback (wrappers)
- [ ] Imports interdits testables

---

## 15. Risques et dette

| Risque | Mitigation |
|--------|------------|
| Big-bang imports | Wrappers + lots |
| EventSink mal conçu | Interface minimale d’abord |
| Fourre-tout `platform/` | Modules nommés + ownership doc |
| Extraire actionCompiler trop tôt | Rester OPS1 |
| Live reporté encore | Accepter ; platform débloque unifié |

**Dette temporaire acceptable :** wrappers OPS1.
**Dette interdite :** nouveaux features génériques sous OPS1 ; D1→OPS1 maintenu.

---

## 16. Impacts trajectoire produit

| Sujet | Impact |
|-------|--------|
| Live Product Validation | Dual-track **remplacé** par unifié **après** Phase 3 ; prep 77/78 reste historique |
| B′ | Toujours différée ; platform ne l’implémente pas |
| OPS1 | Consommateur temporaire ; pas owner technique |

---

## 17. Décisions Morris requises

1. Valider **Option B** (ou Alternative A) ?
2. Valider structure `lib/platform/**` ?
3. Accepter EventSink comme contrat d’observabilité ?
4. GO DELIVERY — premier vertical (préciser A vs B scope) ?
5. Ordre : Platform delivery **avant** reprise Live Execution ?

---

## 18. Anti-claims

Pas de platform « livrée ». Pas de suppression OPS1. Pas LIVE VALIDATED. Pas B′. Pas V3-ADOPTED. Pas D1 COMPLETE.

**Statut :** `SHARED TECHNICAL PLATFORM ARCHITECTURE READY — MORRIS DECISION REQUIRED`.

END_FILE projects/sfia-studio/79-shared-technical-platform-architecture.md

---

## 22. CONTENU COMPLET — Document 80

BEGIN_FILE projects/sfia-studio/80-shared-technical-platform-migration-decision-pack.md
# SFIA Studio — Shared Technical Platform — Migration & Decision Pack

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `80-shared-technical-platform-migration-decision-pack.md` |
| **Statut** | `decision-pack-candidate` — **non validé** |
| **Complète** | `79-shared-technical-platform-architecture.md` |
| **Gate consommé** | `GO ARCHITECTURE — SFIA STUDIO SHARED TECHNICAL PLATFORM` |
| **Gate proposé** | `GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM` |
| **Base** | `88fa4658da07156614de270d8172f147535ddbf9` |

---

## 1. Décisions déjà validées (contexte)

| Décision | Statut |
|----------|--------|
| Control Tower + D1 fondation mergés (PR #254) | FAIT |
| Live Product Validation prioritaire vs B′ (cadrage 77/78) | Cadrage ; **exécution live différée** jusqu’à architecture platform |
| OPS1 n’est pas propriétaire cible des capacités techniques | Doctrine Morris (ce gate) |
| D1 ne doit pas dépendre durablement d’OPS1 | Doctrine ; **violation actuelle à corriger** |
| B′ différée | Confirmée |
| Ce cycle = architecture only (pas de code) | En cours |

---

## 2. Options comparées (synthèse)

| Critère | A minimale | **B technique (rec.)** | C wrappers D1→OPS1 | D agent platform |
|---------|------------|------------------------|--------------------|------------------|
| Corrige D1→OPS1 | Oui (provider) | **Oui (complet)** | Non (aggrave) | N/A hors cible |
| D1 unifié tools+context | Non / différé | **Oui** | Faux unifié | Overkill |
| OPS1 non-régression | Facile | Via wrappers | — | Risqué |
| Dette | Moyen | Wrappers temporaires | **Élevée** | Très élevée |
| Effort | M | L incrémental | S trompeur | XL |
| Réversibilité | Haute | Haute (wrappers) | Basse | Basse |
| Live Validation | Dual-track continue | **Unifié après Lot 3** | Dual-track | — |
| Cycle/GS futurs | Partiel | **Oui fondations** | Non | Spéculatif |
| Verdict | Alternative | **Recommandation** | **Rejeter** | **NO-GO** |

---

## 3. Recommandation et alternative

**Recommandation candidate :** Option **B** — Shared Technical Platform (`lib/platform/**`) avec EventSink, tool loop découplé, AI + repository + sfia-context + security.

**Alternative :** Option **A** d’abord (provider + adapters + context sans tool loop) ; B en second GO DELIVERY.

**Anti-option C :** rejetée — maintient D1→OPS1.
**Option D :** hors cible.

---

## 4. Éléments différés

- Exécution Live Product Validation (77/78) jusqu’après Phase 3 ou décision Morris d’exécuter dual-track temporaire.
- Option B′ Project → Controlled Cycle Proposal.
- Suppression physique OPS1 / dossiers.
- Cycle / GuidedSession runtime.
- OAuth GitHub / writes.
- Multi-provider, bus événements global, packages internes npm.

---

## 5. Backlog (4 lots · 15 items)

### Lot 1 — Extraction fondations (effort L)

| # | Objectif | Fichiers candidats | Tests | Acceptation | Rollback | Effort |
|---|----------|-------------------|-------|-------------|----------|--------|
| 1 | `platform/ai` types + openai + fake + config | move from `ops1/conversation/*` | unit AI | D1 peut importer platform | wrappers | M |
| 2 | `platform/security` + `repository` | redaction, pathPolicy, git/github adapters | unit policy | deny-by-default inchangé | wrappers | M |
| 3 | `platform/sfia-context` | canonicalPaths, sourceLoader, resolver | unit loader | sources RO | wrappers | M |
| 4 | EventSink + toolRouter/toolLoop découplés | tools/* | unit sink mock | 0 écriture DB dans platform | garder OPS1 sink | M |
| 5 | Règle import platform ↛ ops1/d1 | test lint/vitest | CI local | FAIL si import | désactiver règle | S |

**Gate :** inclus dans GO DELIVERY platform.
**Risque :** casse imports ; mitigé wrappers.
**Dette :** aucune durable si wrappers planifiés.

### Lot 2 — Migration OPS1 (effort M)

| # | Objectif | Fichiers | Tests | Acceptation | Rollback |
|---|----------|----------|-------|-------------|----------|
| 6 | Wrappers re-export `ops1` | `ops1/conversation`, `ops1/tools`, `ops1/sfia` partiel | — | imports existants compilent | revert wrappers |
| 7 | `service.ts` → platform | ops1 conversation service | vitest OPS1 | sessions CT OK | rebind ancien chemin |
| 8 | Non-régression OPS1 | — | vitest OPS1 + E2E CT | 105+ / E2E verts | revert Lot 2 |

### Lot 3 — Intégration D1 unifiée (effort L)

| # | Objectif | Fichiers | Tests | Acceptation | Rollback |
|---|----------|----------|-------|-------------|----------|
| 9 | `resolveProvider` → platform only | `d1/intake/resolveProvider.ts` | unit | **0 import ops1** | revert import |
| 10 | Brancher tools+context bornés sur intake | analyzeIntent / nouveau orchestrateur D1 | unit + e2e fixture | tools RO dans D1 | feature flag |
| 11 | Timeline tools minimale Intake UI | features/d1 | e2e | events visibles sans secrets | cacher UI |
| 12 | Interdire D1→OPS1 | eslint/test | CI | FAIL import | — |
| 13 | E2E D1 path tools | e2e d1 | e2e | PASS fixture | skip test |

### Lot 4 — Live + préparation retrait (effort S–M)

| # | Objectif | Acceptation | Gate |
|---|----------|-------------|------|
| 14 | Maj runbook live unifié (docs 77/78 ultérieures) | runbook D1-only path | GO EXÉCUTION LIVE |
| 15 | Checklist suppression wrappers | checklist + critères | GO CLEANUP (séparé) |

---

## 6. Premier vertical minimal

**Si GO Option B complet :** Lots 1–2 (platform + OPS1 stable) puis Lot 3 avant live.

**Si GO Alternative A :** items **1–3 + 6 + 9** seulement — D1 découplé du provider OPS1, sans tools encore ; live reste dual-track jusqu’à B.

**Recommandation delivery :** vertical **B Lot 1+2**, puis Lot 3 avant toute Live Execution unifiée.

---

## 7. Fichiers candidats (carte)

### Vers `lib/platform/` (extrait)

- `ops1/conversation/{types (partiel), openaiProvider, fakeProvider, config, toolLoop}`
- `ops1/tools/{types, toolRouter, gitLocalReadAdapter, githubReadAdapter, pathPolicy, redaction}`
- `ops1/sfia/{canonicalPaths, sourceLoader, contextResolver}` (+ types contextuels)

### Restent `lib/ops1/`

- `conversation/service.ts`, journal helpers liés Session
- `sfia/{sessionContext, proposalSchema, actionCompiler, cursorPromptInstantiator}`
- `db`, `repository`, `sessionLifecycle`, `execution*`, `actionGate`, `report*`, `allowlistService` (actions)
- `features/ops1/**`, routes OPS1

### Restent `lib/d1/`

- intake métier, matching, confirmation, Project commands/db, UI D1

### Ne pas toucher ce cycle

`app/**` code, tests, package.json, method, 66–78 (sauf lecture).

---

## 8. Tests et rollback

| Niveau | Contenu |
|--------|---------|
| Unit | platform AI, policy, loader, sink mock |
| Vitest domaine | OPS1 105+ ; D1 52+ |
| E2E | CT smoke ; D1 intake ; (plus tard) D1 tools |
| Import guards | D1↛OPS1 ; platform↛domain |

**Rollback par lot :** wrappers + feature flags D1 tools ; aucun squash force ; revert commit delivery.

---

## 9. Gates

| Gate | Rôle |
|------|------|
| **GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM** | Proposé — **ne pas consommer** ici |
| GO EXÉCUTION — LIVE PRODUCT VALIDATION | Après unifié (ou dual-track si Morris force) |
| GO CLEANUP OPS1 WRAPPERS | Après stabilité + live verdict |
| GO PRODUCT — B′ | Après live verdict A/B/C/D |

---

## 10. Décisions Morris requises

1. **Option B vs Alternative A** pour le premier GO DELIVERY ?
2. Valider chemin **`app/lib/platform/**`** ?
3. Accepter **EventSink** obligatoire pour tool loop partagé ?
4. Confirmer **interdiction** nouveaux génériques sous `lib/ops1` après GO DELIVERY ?
5. Confirmer séquence : **Platform → D1 unifié → Live Product Validation → décision B′** ?
6. GO DELIVERY maintenant ou après relecture ChatGPT ?

### Conséquences GO

- Autorise delivery code platform + wrappers + D1 resolve ; active lots.
- Débloque live unifié après Lot 3.
- OPS1 reste temporaire.

### Conséquences NO-GO

- D1→OPS1 **persiste**.
- Live reste dual-track (77/78).
- Risque duplication future.
- B′ et live restent bloqués ou fragiles.

---

## 11. Impact Live Product Validation

| Avant platform | Après Phase 3 |
|----------------|---------------|
| Dual-track OPS1 live tools vs D1 C2-only | **Un seul** parcours D1 + platform |
| Docs 77/78 décrivent dual-track | À mettre à jour (cycle doc séparé) |
| Verdict live A/B/C/D | Plus représentatif du produit cible |

**Observation.** Exécuter live **avant** Phase 3 valide le dual-track, pas la cible. Morris peut quand même l’exiger pour preuve GPT/config ; architecture recommande d’attendre unifié si possible.

---

## 12. Impact B′

Aucun delivery B′. Platform fournit GPT/tools/context réutilisables pour un futur Cycle proposal **sans** l’implémenter. B′ reste différée.

---

## 13. Impact OPS1

- Phase 1–2 : consommateur platform, comportement CT préservé.
- Phase 5–6 : métier ActionCandidate/execution éventuellement gelé ou retiré sous gates séparés.
- **Pas de suppression dans ce cycle ni dans le premier delivery platform.**

---

## 14. Critères d’acceptation architecture (pour GO Morris)

Voir §14 doc 79. Ce pack est **READY** si Morris peut décider B vs A et la structure sans ambiguïté ownership.

---

## 15. Anti-claims

Pas de code platform créé. Pas GO DELIVERY consommé. Pas live exécuté. Pas OPS1 décommissionné. Pas B′.

**Statut :** `SHARED TECHNICAL PLATFORM ARCHITECTURE READY — MORRIS DECISION REQUIRED`.

END_FILE projects/sfia-studio/80-shared-technical-platform-migration-decision-pack.md

---

## 23. État Git final (pré-handoff)

Sera confirmé après publication. Attendu : staged vide ; HEAD inchangé ; seuls 79, 80, README (+75–78 historiques untracked) dirty.

---

## 24. Verdict

**SHARED TECHNICAL PLATFORM ARCHITECTURE READY — MORRIS DECISION REQUIRED**

ChatGPT : lire branche `sfia/review-handoff` · fichier `sfia-review-handoff/latest-chatgpt-review.md`.

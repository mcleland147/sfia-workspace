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

---

## Note historique postérieure (non décisionnelle)

**Observation (Git).** Après rédaction de ce document candidate, Morris a consommé `GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM`. La delivery Option B a été intégrée sur `main` via PR [#255](https://github.com/mcleland147/sfia-workspace/pull/255) (squash `445702dcad750734cef4b97122e7ccb1e67b24ee`). Les rapports d’exécution et de validation sont `81` et `82`.

Ce document **79** conserve son statut `architecture-candidate` d’origine (historique de cadrage). Il ne remplace pas `81`/`82` et ne réouvre pas la delivery.

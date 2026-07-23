# SFIA Studio — Shared Technical Platform — Delivery Report

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `81-shared-technical-platform-delivery-report.md` |
| **Statut** | `delivery-local-candidate` — validation Morris **requise** |
| **Gate consommé** | `GO DELIVERY — SFIA STUDIO SHARED TECHNICAL PLATFORM` |
| **Gate proposé** | `GO VALIDATION — SFIA STUDIO SHARED TECHNICAL PLATFORM` |
| **Base** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` |
| **Branche** | `delivery/sfia-studio-shared-technical-platform` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-shared-platform-delivery` |
| **Option** | **B** (plateforme technique + EventSink) |
| **Structure** | `app/lib/platform/**` |

---

## 1. Décisions Morris appliquées

- Option B retenue.
- Structure `app/lib/platform/**`.
- EventSink local injectable.
- Aucun nouveau générique sous `lib/ops1/**` (wrappers temporaires uniquement).
- D1 ↛ OPS1.
- OPS1 consommateur temporaire via wrappers.
- Migration incrémentale / réversible.
- Pas de suppression OPS1.
- Live Product Validation et B′ différées.
- Aucun push / PR / merge projet.

---

## 2. Architecture livrée

```
D1 → platform
OPS1 → platform (via wrappers TEMP_OPS1_PLATFORM_WRAPPER)
platform ↛ D1
platform ↛ OPS1
D1 ↛ OPS1
```

### Structure réelle

```
app/lib/platform/
  ai/              ConversationProvider, OpenAI, Fake, config, TechnicalError
  tools/           ToolDefinition, toolRouter, toolLoop (+ EventSink)
  repository/      GitLocalReadAdapter, GithubReadAdapter, workspaceRoot
  sfia-context/    canonicalPaths, sourceLoader, contextResolver, context types
  security/        redaction, pathPolicy
  observability/   EventSink, NoopEventSink, TechnicalEvent
```

Pas d’`index.ts` racine fourre-tout. Modules bornés.

---

## 3. Composants extraits

| Zone | Extraits |
|------|----------|
| AI | types provider, openai, fake, config, resolve provider, TechnicalError |
| Tools | types CT tools, router, loop |
| Repository | git local RO, github RO transports |
| Security | redaction, path/repo policy |
| Observability | EventSink, NoopEventSink |
| SFIA context | paths, loader, resolver, SfiaCanonicalContext |

## 4. Composants non extraits (conservés domaine)

**OPS1 :** `conversation/service`, ActionCandidate / proposalSchema / actionCompiler / sessionContext / cursorPromptInstantiator, db/session, execution*, actionGate, reports, allowlistService (actions), UI OPS1.

**D1 :** proposal C2, matching C3, confirmation C4, createProject, audit, UI D1.

**Réserve :** D1 n’est **pas** encore branché sur tool loop ni contexte canonique (pas d’élargissement UX/fonctionnel dans ce delivery).

---

## 5. Migration OPS1

- Fichiers génériques remplacés par wrappers `TEMP_OPS1_PLATFORM_WRAPPER`.
- `ops1EventSink.ts` adapte EventSink → `session_events`.
- `toolLoop` / `toolRouter` wrappers injectent le sink OPS1.
- Comportement CT préservé (tests verts).

**Critère de retrait wrappers :** plus aucun import hors re-export ; D1 déjà sur platform ; tests verts ; gate `GO CLEANUP OPS1 WRAPPERS`.

## 6. Migration D1

- `resolveProvider` / `fakeIntakeProvider` importent `@/lib/platform/ai/**` uniquement.
- Flags `D1_INTAKE_LIVE` / fake / fail-closed conservés.
- C2/C3/C4 inchangés.

## 7. EventSink

- Contrat `EventSink.emit(TechnicalEvent)`.
- Platform tool router/loop n’ouvrent pas la DB OPS1.
- OPS1 : `createOps1SessionEventSink`.
- D1 : peut utiliser `NoopEventSink` (non branché tools dans ce lot).

## 8. Import guards

`__tests__/platform/import-boundaries.test.ts` :

- D1 ↛ OPS1
- platform ↛ OPS1/D1
- wrappers marqués `TEMP_OPS1_PLATFORM_WRAPPER`

## 9. Sécurité

Conservé : Git/GitHub RO, allowlists, redaction, timeouts, 4×4 rounds, fail-closed, pas de mutation platform, C4 humain inchangé, pas d’exécution Cursor depuis platform.

## 10. Tests

| Suite | Résultat |
|-------|----------|
| Baseline OPS1+D1 (avant) | 157/157 (~5s) |
| Après migration OPS1+D1 | 157/157 |
| Platform unit + guards | 8/8 |
| Vitest full | 205/205 (~4s) |
| typecheck | PASS (~1s) |
| lint | PASS (unused `_event` corrigé) |
| build | PASS (~8s) |
| E2E ciblés CT + D1 | **36/36 PASS** (~29s) |
| E2E `increment-b` harness POC | **hors périmètre platform** — timeouts observés (GO fixture harness) ; non liés aux imports platform ; non bloquants pour ce delivery |

Aucun GPT live. Aucune mutation GitHub.

## 11. Commits locaux (pas de push)

1. `refactor(platform): extract shared AI and observability foundations`
2. `refactor(platform): extract shared tools and repository adapters`
3. `refactor(sfia-studio): migrate OPS1 to shared platform`
4. `refactor(d1): remove OPS1 technical dependency`
5. `test(sfia-studio): enforce shared platform dependency boundaries` (+ doc 81)

## 12. Risques / réserves / dette

| Item | Note |
|------|------|
| Wrappers OPS1 | Dette temporaire acceptée |
| D1 tools/context unifiés | **Réserve** — lot suivant |
| EventSink mapping noms | OPS1 conserve types session historiques via adapter |
| Rollback | revert commits 1–5 ; wrappers isolent le changement |

## 13. Impacts

- **Live Product Validation :** unifié devient réalisable après branchement D1 tools/context (lot suivant) ; exécution live toujours différée.
- **B′ :** différée ; platform ne l’implémente pas.

## 14. Anti-claims

Pas READY production. Pas LIVE VALIDATED. Pas OPS1 décommissionné. Pas B′. Pas V3-ADOPTED. Pas push/PR/merge. Pas D1 tools unifiés livrés.

**Verdict delivery :** `SHARED TECHNICAL PLATFORM DELIVERED — READY FOR VALIDATION`

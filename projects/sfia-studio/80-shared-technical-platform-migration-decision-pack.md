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

---

## Note historique postérieure (non décisionnelle)

**Observation (Git).** La delivery Shared Technical Platform recommandée ici (Option B) a ensuite été exécutée et mergée (PR [#255](https://github.com/mcleland147/sfia-workspace/pull/255), squash `445702dc…`). Voir `81` (delivery) et `82` (validation / PR readiness).

Ce document **80** reste `decision-pack-candidate` historique. Les lots D1 tools/context, Live Product Validation, cleanup wrappers et Option B′ restent différés selon les gates Morris post-merge.

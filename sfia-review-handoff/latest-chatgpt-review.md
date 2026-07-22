# Control Tower Fast Track Plan — Review Pack Full

| Champ | Valeur |
|-------|--------|
| **Date/heure** | 2026-07-22 10:23:19 CEST |
| **Cycle** | Fast Track intégré — Control Tower Vertical Slice (préparation) |
| **Profil** | Critical |
| **Gates consommés** | `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` · `GO FAST TRACK CONTROL TOWER VERTICAL SLICE` |
| **Gate demandé** | `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` |
| **Repo** | mcleland147/sfia-workspace |
| **Branche** | `framing/sfia-studio-control-tower` (locale, non poussée) |
| **HEAD / base** | `32e5271842b9a344a7e292614675c27ea8ed941b` = `origin/main` |
| **Handoff précédent** | `ddae017` (cadrage CT) — attendu et vérifié |

---

## 1. État Git initial

- branche `framing/sfia-studio-control-tower` @ `32e5271`
- docs 66–69 untracked ; README modified ; staged vide ; aucun code
- `.tmp-sfia-review/**` untracked
- handoff remote `ddae017`

---

## 2. Sources

Méthode (template, routing, operating model, guardrails).
Cadrage CT 66–69 + README.
OPS1 docs 41–45, 51, 54, 57, 60–61, 63–65 (noms réels : `60-ops1-backlog-framing-and-prioritization.md`, `64-ops1-local-controls-ci-and-evidence-contract.md` — pas les alias du prompt).
Code : `app/lib/ops1/**`, `features/ops1/**`, tests/e2e ops1.
Handoff `ddae017`.

---

## 3. Décisions Morris validées (prises comme entrées)

1. Vision Control Tower
2. AF-Option C reformulée
3. Option C hybride
4. Fast Track ouvert (préparation)
5. Plan archi/contrat/backlog/delivery autorisé
6. Pas de code sans revue plan + GO exécution
7. Pas commit/push/PR/merge projet

---

## 4. Inventaire OPS1 réutilisable (synthèse)

Réutiliser : db/repository/session, openaiProvider (étendre tools), conversation service, actions/gates/allowlist, contract/worktree/orchestrator, **cursorExecutionAdapter** (`agent --print --workspace --trust --sandbox`), postcheck, reportService, UI Ops1SessionScreen, tests I1–I6.

Créer : Tool Router, Git local read adapter, GitHub read adapter+transport, tool-event UI, report reinjection into conversation, unified timeline, tool schemas.

Écart clé : `openaiProvider` a encore `tools: []` ; aucun GitHub ; pas de réinjection auto rapport→GPT.

---

## 5–9. Architecture / outils / adapters / réinjection / UX

Voir contenu complet doc `70` ci-dessous.

## 10–12. Backlog / lots / décisions

Voir docs `71` et `72` (FT-01…12 ; lots A/B/C ; D1–D8).

**Reco transport GitHub (D2) :** `gh` encapsulé avec fallback API REST ; interface métier découplée.
**Reco Cursor (D3) :** réutiliser OPS1 I5/I6 sans rewrite.
**Start Cursor :** UI gate only (fail-closed si tool start).

---

## 13. Fichiers créés

- projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md
- projects/sfia-studio/71-control-tower-fast-track-backlog-and-delivery.md
- projects/sfia-studio/72-control-tower-fast-track-decision-pack.md

## 14. Fichiers modifiés

- projects/sfia-studio/README.md (navigation + états validés / plan-open)
- projects/sfia-studio/66…69 (métadonnée statut → validated uniquement)

---

## 15. Contenu complet — fichiers créés / mis à jour statut


### Fichier : `projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md`

````markdown
# SFIA Studio — Control Tower Fast Track — Architecture minimale et contrats

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `70-control-tower-fast-track-architecture-and-contract.md` |
| **Cycle** | Fast Track intégré — Vertical Slice Control Tower |
| **Profil** | Critical |
| **Gates consommés** | `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` · `GO FAST TRACK CONTROL TOWER VERTICAL SLICE` |
| **Gate de sortie (préparation)** | `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` — **requis avant tout code** |
| **Statut** | `plan-open` — exécutable après GO Morris ; **non implémenté** |
| **Branche** | `framing/sfia-studio-control-tower` (locale) |
| **Base** | `origin/main` @ `32e5271842b9a344a7e292614675c27ea8ed941b` |
| **Direction** | Option C hybride (**validée**) |
| **AF-Option C** | **Reformulée et validée** : Studio = cockpit + façade d’orchestration ; policies / exécuteurs logiquement séparés derrière Studio |

> **Anti-claims :** architecture **planifiée**, pas implémentée. Pas de MVP. Pas de GitHub write. Pas de plateforme MCP universelle. Aucun code modifié dans cette phase.

---

## 1. Objectif du vertical slice

Démontrer **sans copier-coller** :

Conversation live GPT → outils Git/GitHub **read-only** visibles → ActionCandidate → gate Morris → Cursor CLI sous contrat → events → rapport/diff/tests → **réinjection auto** dans la conversation → analyse GPT → décision Morris.

---

## 2. Inventaire OPS1 réutilisable (fichier par fichier)

### Réutiliser tel quel (ou extension minimale)

| Fichier | Rôle actuel | Usage Fast Track |
|---------|-------------|------------------|
| `app/lib/ops1/db.ts` + `repository.ts` | SQLite session/tours/events | Persistance + journal |
| `app/lib/ops1/sessionLifecycle.ts` | OPEN/CLOSED, post-report resume | Cycle de vie |
| `app/lib/ops1/conversation/openaiProvider.ts` | Responses API, `tools: []` | **Étendre** tool calling |
| `app/lib/ops1/conversation/service.ts` | sendMessage live/fixture | Boucle outils + réinjection |
| `app/lib/ops1/conversation/config.ts` | clés serveur | Secrets backend |
| `app/lib/ops1/actions.ts` + `actionGate.ts` | ActionCandidate + 4 actions gate | Gouvernance action |
| `app/lib/ops1/allowlistEvaluation.ts` + `allowlistService.ts` | Allowlist chemins | Policy lecture/écriture |
| `app/lib/ops1/executionContractService.ts` | Seal contrat / hash | Contrat Cursor |
| `app/lib/ops1/executionRevalidation.ts` | Pré-checks | Avant run |
| `app/lib/ops1/executionWorktree.ts` | Worktree + payload | Isolation action |
| `app/lib/ops1/cursorExecutionAdapter.ts` | `cursor agent --print --workspace …` | **Réutiliser** spawn réel |
| `app/lib/ops1/executionOrchestrator.ts` | Attempt + events | Suivi exécution |
| `app/lib/ops1/executionPostCheck.ts` | Diff/fichiers touchés | Preuves |
| `app/lib/ops1/reportService.ts` | Rapport scellé I6 | Base réinjection |
| `app/lib/ops1/types.ts` / `errors.ts` / `ids.ts` | Domaine | Étendre types events/outils |
| `app/features/ops1/Ops1SessionScreen.tsx` | UI slice | Étendre panneaux outils/timeline |
| Tests `app/__tests__/ops1/**` + `app/e2e/ops1-i*.spec.ts` | Preuves I1–I6 | Pattern pour FT |

### À créer (écarts)

| Élément | Pourquoi |
|---------|----------|
| Tool Router + policy lecture | GPT n’a aucun outil aujourd’hui (`tools: []`) |
| Git Local Read Adapter | Lectures git dispersées côté exécution, **pas** exposées à GPT |
| GitHub Read Adapter + transport | **Absent** |
| Tool-call event store / UI | **Absent** |
| Report Reinjection Service | Rapport I6 affiché ; **pas** injecté comme message outil/système pour analyse GPT auto |
| Unified timeline UI | Events partiels ; pas de timeline produit unifiée |
| Schémas outils + redaction/plafonds | **Absent** |

### Cursor CLI observé (réutilisation)

```
<bin> agent --print --workspace <worktree> --trust --sandbox enabled <instruction>
```

- Bin : `SFIA_CURSOR_BIN` ou `/Applications/Cursor.app/.../bin/cursor` ou `~/.local/bin/cursor-agent`
- Gate env : `OPS1_CURSOR_REAL=1`
- Timeout : `contract.timeoutSeconds`
- CWD : worktree sous `.sfia-exec`
- MCP Cursor (ex. Figma) : éventuels **côté Cursor**, hors Studio ; **non requis** pour réussir le slice

---

## 3. Architecture minimale (Option C)

```
SFIA Studio UI
  → Session / Conversation Service          [OPS1 étendu]
  → OpenAI Responses API + tool calling     [OPS1 openaiProvider étendu]
  → Tool Router                             [NOUVEAU]
  → Policy Engine OPS1                      [allowlist + gates + read/write split]
  → Git Local Read Adapter                  [NOUVEAU — interne]
  → GitHub Read Adapter                     [NOUVEAU — interface + transport]
  → Cursor CLI Adapter                      [OPS1 cursorExecutionAdapter]
  → Execution Event Store                   [OPS1 session_events étendu]
  → Report Reinjection Service              [NOUVEAU sur reportService]
```

Séparation logique validée : UI/façade Studio · policies déterministes · adapters · exécuteur Cursor · Git vérité.

Pas de framework MCP Studio. Pas de shell libre.

---

## 4. Composants — contrats

### 4.1 Session / Conversation Service

| Champ | Contenu |
|-------|---------|
| Responsabilité | Tours, mode live, boucle outils, reprise post-rapport |
| Entrées | sessionId, message, mode |
| Sorties | tours, usage, tool events |
| Erreurs | NOT_FOUND, CONFLICT, PROVIDER |
| Timeouts | timeout provider + timeout outil agrégé |
| Observabilité | conversation_attempts, events |
| OPS1 | `conversation/service.ts`, `repository.ts` |
| Créer | loop tool→router→réponse |
| Secrets | via config serveur uniquement |
| Risque | Moyen (tokens, boucle) |

### 4.2 OpenAI Responses + tools

| Champ | Contenu |
|-------|---------|
| Responsabilité | Raisonnement + sélection d’outils bornés |
| Entrées | messages + tool defs filtrées |
| Sorties | texte / tool_calls |
| Erreurs | PROVIDER, empty |
| OPS1 | `openaiProvider.ts` (`tools: []` → tools session) |
| Créer | mapping tool results → input suivant |
| Secrets | `OPENAI_API_KEY` backend |
| Risque | Moyen |

### 4.3 Tool Router

| Champ | Contenu |
|-------|---------|
| Responsabilité | Dispatch outil → adapter ; enforce policy ; émettre events |
| Entrées | tool name + args + session context |
| Sorties | résultat structuré plafonné / erreur typée |
| Erreurs | POLICY_DENIED, TIMEOUT, NOT_ALLOWLISTED |
| Retry | **absent** ou 1 retry lecture idempotente max — jamais write |
| Secrets | aucun au modèle |
| Risque | Haut (surface outils) |

### 4.4 Policy Engine OPS1

| Champ | Contenu |
|-------|---------|
| Responsabilité | Allowlist repos/chemins ; séparer lecture / action Cursor ; gates |
| OPS1 | allowlist*, actionGate, contract seal |
| Créer | scopes **read tools** distincts des writes Cursor |
| Risque | Haut |

### 4.5 Git Local Read Adapter

| Champ | Contenu |
|-------|---------|
| Responsabilité | Lectures git/fs bornées |
| Interface | status, head, search, readFile, diff, logLimited, listWorktrees |
| Commandes OK | `rev-parse`, `status --porcelain`, `diff`, `log` limité, `ls-files`, `show`, `worktree list`, read fs borné |
| Interdit | commit, checkout, switch, branch ±, reset, clean, stash, push, fetch auto non cadré, shell |
| Secrets | aucun |
| Risque | Moyen (fuite contenu) — plafonds + redaction |

### 4.6 GitHub Read Adapter

| Champ | Contenu |
|-------|---------|
| Responsabilité | Lecture remote allowlistée |
| Interface (métier) | getRepository, getBranch, getCommit, getPullRequest, listPullRequestComments, listChecks |
| Transport | **indépendant** du métier (voir décision D2) |
| Contraintes | read-only ; creds backend ; pas de token GPT ; pas de fallback silencieux |
| Risque | Moyen (auth, quotas) |

### 4.7 Cursor CLI Adapter

| Champ | Contenu |
|-------|---------|
| Responsabilité | Exécuter **uniquement** un contrat déjà GO |
| OPS1 | `cursorExecutionAdapter.ts` + orchestrator + worktree |
| Entrées | ExecutionContract scellé + worktree |
| Sorties | exit, digests stdout/stderr, durée |
| Annulation | kill timeout (existant) ; cancel UI = lot C optionnel |
| Reprise | pas d’auto-retry ; nouvel attempt = nouveau GO |
| Risque | Haut (écriture locale bornée) |

### 4.8 Execution Event Store

| Champ | Contenu |
|-------|---------|
| Responsabilité | Timeline corrélée session/action/attempt/tool |
| OPS1 | `session_events` |
| Créer | types TOOL_CALL_*, SOURCE_*, REINJECTION_* |
| Risque | Faible |

### 4.9 Report Reinjection Service

| Champ | Contenu |
|-------|---------|
| Flux | Cursor → MinimalExecutionResult → reportService seal → message système/outil corrélé (sessionId/actionId/attemptId) → GPT analyse → Morris décide |
| Interdit | copier-coller ; rapport non corrélé ; rewrite sealed ; succès implicite ; auto-retry |
| OPS1 | `reportService.ts` + `POST_REPORT_CHAT_RESUMED` |
| Créer | injection tour/outil structurée post-seal |
| Risque | Moyen |

---

## 5. Contrats d’outils GPT (minimaux)

Restrictions transverses : pas de shell ; pas de path absolu GPT sans résolution interne ; repo allowlisté ; chemins normalisés ; taille plafonnée ; redaction ; timeout ; pas de write GitHub ; Cursor tools **ne démarrent pas** sans gate (prepare OK ; start exige GO).

### 5.1 Git local

| Outil | Params (schéma) | Réponse | Policy | Events |
|-------|-----------------|---------|--------|--------|
| `git_local_get_status` | `{}` | porcelain résumé | read repo session | TOOL_CALL_STARTED/SUCCEEDED/FAILED |
| `git_local_get_head` | `{}` | sha, branch | idem | idem |
| `git_local_search_files` | `{ query: string, limit?: number }` | paths[] | glob borné | idem |
| `git_local_read_file` | `{ path: string, maxBytes?: number }` | content trunc | allowlist read | idem |
| `git_local_get_diff` | `{ path?: string, maxBytes?: number }` | diff trunc | read | idem |
| `git_local_list_worktrees` | `{}` | list redacted | read | idem |

Erreurs : `POLICY_DENIED`, `PATH_NOT_FOUND`, `TOO_LARGE`, `TIMEOUT`.

### 5.2 GitHub

| Outil | Params | Réponse | Policy |
|-------|--------|---------|--------|
| `github_get_repository` | `{ owner?, name? }` défauts session | meta | allowlist repo |
| `github_get_branch` | `{ name }` | tip sha | idem |
| `github_get_commit` | `{ sha }` | message, author (redact email opt) | idem |
| `github_get_pull_request` | `{ number }` | title, state, head/base | idem |
| `github_list_checks` | `{ ref }` | conclusions[] | idem |

(+ commentaires PR via `github_list_pr_comments` si besoin démo — même policy).

### 5.3 Cursor (gouvernés)

| Outil | Comportement |
|-------|----------------|
| `cursor_prepare_execution` | Matérialise/affiche candidat+contrat ; **pas** d’exécution |
| `cursor_start_execution` | **Refusé** sans décision Morris GO ancrée au contractHash ; sinon lance orchestrator |
| `cursor_get_execution_status` | Lecture attempt |
| `cursor_get_report` | Lecture rapport scellé |

Alternative UX (recommandée) : start **uniquement** via bouton gate UI (pas tool GPT) — tools Cursor limités à prepare/status/report. Décision D3/D5.

---

## 6. UX minimale (contrat fonctionnel)

### Écran

- Colonne conversation
- Panneau contexte Git/GitHub (sources)
- Timeline cycle
- Action candidate
- Gate Morris
- Panneau exécution Cursor
- Fichiers / diff / tests
- Rapport
- Décision suivante

### États visibles

recherche source · outil appelé · lecture OK/KO · action candidate · attente gate · exécution préparation · Cursor running · rapport en cours/reçu · analyse GPT · décision attendue · terminé avec réserves · échec fail-closed

Pas de design final. Pas de Figma obligatoire.

---

## 7. Sécurité / FinOps / Observabilité (slice)

| Domaine | Exigence candidate |
|---------|-------------------|
| Secrets | Backend only ; jamais dans tool results bruts non redactés |
| Read vs write | Classes séparées ; write = Cursor sous gate seulement |
| FinOps | Afficher usage tokens si dispo ; pas d’estimation inventée |
| Obs | Corrélation sessionId / toolCallId / actionId / attemptId / reportId |
| Timeouts | Provider, outil, Cursor — explicites |
| Fail-closed | Deny by default |

---

## 8. Critères de succès (preuve)

1. Live GPT multi-tours dans Studio
2. ≥1 outil Git local + ≥1 GitHub read réussis, visibles UI
3. Aucun copier-coller Studio↔Cursor
4. GO Morris avant exécution
5. Cursor CLI sous contrat + events
6. Rapport/diff/tests réinjectés ; GPT analyse
7. Aucun write GitHub
8. Journal audit rejouable

---

## 9. Liens

- Backlog / lots : `71-control-tower-fast-track-backlog-and-delivery.md`
- Decision pack : `72-control-tower-fast-track-decision-pack.md`
````

### Fichier : `projects/sfia-studio/71-control-tower-fast-track-backlog-and-delivery.md`

````markdown
# SFIA Studio — Control Tower Fast Track — Backlog et delivery

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `71-control-tower-fast-track-backlog-and-delivery.md` |
| **Complète** | `70`, `72` |
| **Statut** | `plan-open` — backlog borné ; **non exécuté** |
| **Gate exécution** | `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` |

> ≤ 12 items. ≤ 3 lots. Pas d’epics artificiels. Pas de code avant GO exécution.

---

## 1. Backlog borné

### FT-01 — Inventory OPS1 reuse (preuve documentaire → checklist code)

| Champ | Contenu |
|-------|---------|
| Objectif | Verrouiller la matrice réutiliser / étendre / créer avant code |
| Fichiers | `app/lib/ops1/**`, `features/ops1/**`, tests/e2e ops1 |
| Dépendances | Aucune |
| AC | Checklist fichier→décision jointe au lot A ; aucun rebuild inutile |
| Tests | N/A (doc→checklist) |
| Risques | Sur-ingénierie |
| Gate | Inclus dans GO exécution |
| Effort | S |
| Parallel | Oui (avec FT-02) |

### FT-02 — Tool contracts

| Champ | Contenu |
|-------|---------|
| Objectif | Types + schémas + plafonds + erreurs des outils §5 du doc 70 |
| Fichiers | `lib/ops1/tools/**` (nouveau), `types.ts` |
| Dépendances | FT-01 |
| AC | Chaque outil a schéma params/réponse/policy ; pas de shell |
| Tests | Unit schémas / validation deny |
| Risques | Surface trop large |
| Effort | M |
| Parallel | Oui avec FT-01 |

### FT-03 — Git local read adapter

| Champ | Contenu |
|-------|---------|
| Objectif | Adapter interne read-only |
| Fichiers | `lib/ops1/tools/gitLocalReadAdapter.ts` |
| Dépendances | FT-02 |
| AC | status/head/search/read/diff/worktrees ; commandes interdites impossibles |
| Tests | Unit + preuve négative path hors allowlist |
| Risques | Fuite secrets fichiers |
| Effort | M |
| Parallel | Avec FT-04 si contrats figés |

### FT-04 — GitHub read adapter

| Champ | Contenu |
|-------|---------|
| Objectif | Interface métier + 1er transport (reco : API REST ou `gh` encapsulé) |
| Fichiers | `lib/ops1/tools/githubReadAdapter.ts`, `githubTransport*.ts` |
| Dépendances | FT-02 ; D2 transport |
| AC | getRepo/branch/commit/PR/checks ; creds backend ; fail explicite |
| Tests | Unit mock transport ; pas de write |
| Risques | Auth locale ; quotas |
| Effort | M |
| Parallel | Avec FT-03 |

### FT-05 — OpenAI tool-calling loop

| Champ | Contenu |
|-------|---------|
| Objectif | Étendre `openaiProvider` + `conversation/service` : tools → router → résultats |
| Fichiers | `conversation/openaiProvider.ts`, `service.ts`, Tool Router |
| Dépendances | FT-02, FT-03, FT-04 |
| AC | Live multi-tours avec ≥1 tool call Git + GitHub ; `tools: []` abandonné en live FT |
| Tests | Unit fake provider tools ; e2e fixture tools |
| Risques | Boucle infinie / coût tokens |
| Effort | L |
| Parallel | Non (chemin critique) |

### FT-06 — Tool-event UI

| Champ | Contenu |
|-------|---------|
| Objectif | Afficher appels d’outils et sources dans Ops1SessionScreen |
| Fichiers | `features/ops1/Ops1SessionScreen.tsx` (+ composants légers) |
| Dépendances | Events FT-05 |
| AC | États outil appelé / OK / KO visibles sans quitter la conversation |
| Tests | UI/unit + e2e smoke |
| Risques | Bruit UX |
| Effort | M |
| Parallel | Après contrats events ; parallèle partiel FT-05 fin |

### FT-07 — Cursor Adapter integration

| Champ | Contenu |
|-------|---------|
| Objectif | Brancher prepare→gate→start sans copier-coller ; réutiliser CLI OPS1 |
| Fichiers | `cursorExecutionAdapter.ts`, `executionOrchestrator.ts`, gate UI |
| Dépendances | FT-05 (proposition action), OPS1 I3–I5 |
| AC | Prompt/contrat transmis auto ; spawn CLI ; events running/done |
| Tests | e2e fixture ; real sous flag |
| Risques | Refonte inutile de l’adapter |
| Effort | M (si réutilise) |
| Parallel | Non avec FT-08 |

### FT-08 — Report reinjection

| Champ | Contenu |
|-------|---------|
| Objectif | Après seal rapport : message corrélé dans conversation ; GPT peut analyser |
| Fichiers | `reportService.ts`, reinjection service, conversation |
| Dépendances | FT-07 |
| AC | Zéro copier-coller ; sealed immutable ; analyse post-rapport possible |
| Tests | Unit + e2e i6 étendu |
| Risques | Double injection / race |
| Effort | M |
| Parallel | Non |

### FT-09 — Unified timeline

| Champ | Contenu |
|-------|---------|
| Objectif | Timeline unique demande→outils→gate→exec→rapport→décision |
| Fichiers | UI + events |
| Dépendances | FT-06, FT-07, FT-08 |
| AC | Parcours démo lisible en une vue |
| Tests | e2e snapshot états |
| Effort | S–M |
| Parallel | Fin Lot C |

### FT-10 — Security and policy checks

| Champ | Contenu |
|-------|---------|
| Objectif | Preuves deny : path, repo, write GitHub, start sans GO, redaction |
| Fichiers | tests policy + adapters |
| Dépendances | FT-03–05, FT-07 |
| AC | Matrice contrôles documentée + tests verts |
| Effort | M |
| Parallel | Avec FT-11 |

### FT-11 — Integrated tests

| Champ | Contenu |
|-------|---------|
| Objectif | Suite unit + e2e vertical slice FT |
| Fichiers | `__tests__`, `e2e` |
| Dépendances | Lots A–B |
| AC | Parcours nominal fixture vert ; cas deny verts |
| Effort | M |
| Parallel | Avec FT-10 |

### FT-12 — Live demonstration

| Champ | Contenu |
|-------|---------|
| Objectif | Preuve live Morris (GPT réel + GitHub read + Cursor réel si dispo) |
| Fichiers | preuves `.tmp-sfia-review/**` (hors commit projet) |
| Dépendances | FT-09–11 |
| AC | Checklist 8 critères doc 70 §8 ; réserves explicites si Cursor real KO |
| Effort | S (exec) + prep |
| Parallel | Non — clôture |

---

## 2. Lots (≤ 3)

### Lot A — Lecture outillée

**Items :** FT-01, FT-02, FT-03, FT-04, FT-05, FT-06
**Preuve :** GPT lit Git local + GitHub ; UI montre tool events ; aucun Cursor write requis.

### Lot B — Cursor intégré

**Items :** FT-07, FT-08
**Preuve :** Gate → CLI auto → rapport réinjecté ; zéro copier-coller.

### Lot C — Démonstration complète

**Items :** FT-09, FT-10, FT-11, FT-12
**Preuve :** Timeline + contrôles sécu + tests + live (ou live partiel documenté).

---

## 3. Chemin critique

```
FT-01/02 → FT-03 & FT-04 → FT-05 → FT-06
                ↓
              FT-07 → FT-08 → FT-09 → FT-10/11 → FT-12
```

Bloquant principal : **FT-05** (tool loop). Ensuite **FT-07→FT-08**.

---

## 4. Parallélisation autorisée

| Pair | OK si |
|------|-------|
| FT-01 ∥ FT-02 | Oui |
| FT-03 ∥ FT-04 | Oui — contrats FT-02 gelés ; fichiers distincts |
| FT-06 fin ∥ polish FT-05 | Oui si events schema stable |
| FT-10 ∥ FT-11 | Oui |
| FT-07 ∥ FT-08 | **Non** |
| Multi-branches | **Déconseillé** — une branche delivery après GO |

---

## 5. Dette temporaire acceptée (candidate)

- Allowlist encore orientée Campus360 / patterns OPS1 — élargir seulement si démo l’exige
- Transport GitHub V1 unique (pas d’abstraction sur-ingéniée)
- Timeline UI « suffisante » pas pixel-perfect
- Cancel Cursor manuel non prioritaire
- Pas de multi-repo

---

## 6. Stratégie branche (après GO exécution — non ouverte ici)

Recommandation : **une** branche `delivery/sfia-studio-control-tower-ft-vs` depuis `main` (+ commits docs 66–72 si intégrés avant). Pas de multiplication worktrees FT.
````

### Fichier : `projects/sfia-studio/72-control-tower-fast-track-decision-pack.md`

````markdown
# SFIA Studio — Control Tower Fast Track — Decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `72-control-tower-fast-track-decision-pack.md` |
| **Cycle** | Fast Track Control Tower Vertical Slice — préparation |
| **Profil** | Critical |
| **Gates déjà consommés** | `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` · `GO FAST TRACK CONTROL TOWER VERTICAL SLICE` |
| **Gate demandé** | `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` |
| **Statut** | `plan-open` — recommandations ≠ décisions d’exécution |

---

## 1. Périmètre (rappel validé)

**Inclus :** live GPT + tool calling read Git local/GitHub + UI tools/sources + ActionCandidate + gate + Cursor CLI auto + suivi + réinjection rapport/diff/tests + analyse GPT.

**Exclus :** GitHub write · commit/push/PR/merge Studio · Figma Studio · MCP universel · multi-users · prod · indu · MVP définitif · L5 · mobile · facturation.

---

## 2. Architecture

Option C hybride **retenue** (Morris). Détail exécutable : doc `70`.

Reformulation AF-Option C **validée** : Studio = cockpit + façade d’orchestration ; moteur policies/exécuteurs logiquement séparés.

---

## 3. Options locales restantes (à trancher pour exécution)

### D1 — Architecture minimale Fast Track

| | |
|--|--|
| **Reco** | Adopter le graphe doc 70 (Tool Router + 2 read adapters + Cursor OPS1 + Reinjection) sans framework générique |
| **Alt** | Repousser GitHub read au lot B (réduit démo) — **non recommandé** |
| **Décision Morris** | Approuver D1 pour exécution ? |

### D2 — Transport GitHub initial

| Option | Avantage | Limite |
|--------|----------|--------|
| **A — API REST GitHub** (token backend) | Contrôle ; portable CI | Setup token |
| **B — `gh` CLI encapsulé** | Déjà présent sur machine Morris (`/opt/homebrew/bin/gh`) | Couplage CLI locale |
| **C — MCP GitHub** | Standard | Effort + surface MCP — **hors volonté slice** |

| | |
|--|--|
| **Reco** | **B (`gh` encapsulé)** pour démo locale rapide si auth OK ; interface métier stable pour bascule A sans changer le router. Si `gh` non auth → **A**. |
| **Décision Morris** | B avec fallback A ? |

### D3 — Réutilisation Cursor Adapter OPS1

| | |
|--|--|
| **Reco** | **Réutiliser** `cursorExecutionAdapter.ts` + orchestrator/worktree/contract/postcheck/report ; étendre uniquement prompt générique (au-delà Markdown Campus360 strict) **si** la démo l’exige, sinon garder bornage OPS1 pour la 1re preuve |
| **Alt** | Réécrire adapter — **refusé** (hors accélération) |
| **Décision Morris** | Confirmer réutilisation OPS1 I5/I6 sans rewrite ? |

### D4 — Organisation des trois lots

| | |
|--|--|
| **Reco** | Lot A lecture outillée → Lot B Cursor+réinjection → Lot C timeline/sécu/tests/live (doc 71) |
| **Décision Morris** | Approuver découpage A/B/C ? |

### D5 — Périmètre démonstration

| | |
|--|--|
| **Reco** | Démo = critères §8 doc 70 ; scénario unique repo `sfia-workspace` ; action Cursor = modification allowlistée **minimale** (héritage OPS1 Markdown) ; GitHub read sur ce repo ; Figma **hors** succès |
| **Décision Morris** | Approuver scénario démo ? |

### D6 — Critères de succès

| | |
|--|--|
| **Reco** | Les 8 critères doc 70 §8 sont le contrat de preuve FT |
| **Décision Morris** | Valider comme DoD du vertical slice ? |

### D7 — Dette temporaire

| | |
|--|--|
| **Reco** | Accepter dette §5 doc 71 (allowlist étroite, UI minimale, un transport GH, pas de cancel fancy) |
| **Décision Morris** | Accepter dette listée ? |

### D8 — Autorisation d’exécution code

| | |
|--|--|
| **Reco** | Après revue de ce plan : consommer `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` ; **alors seulement** modifier `app/**` |
| **Décision Morris** | **GO / NO-GO** exécution |

---

## 4. Backlog et lots

12 items FT-01…FT-12 · 3 lots · chemin critique FT-05 puis FT-07→FT-08 · parallélisation FT-03∥FT-04 seulement après FT-02 — voir `71`.

---

## 5. Risques structurants

| ID | Risque | Contrôle |
|----|--------|----------|
| R1 | Tool loop coûteuse / diverge | Max tool rounds ; timeout ; deny write |
| R2 | Fuite secrets via read_file | Allowlist + redaction + maxBytes |
| R3 | Start Cursor via GPT sans gate | Start **UI gate only** (reco) ; tool start fail-closed |
| R4 | `gh`/API auth manquante | Erreur explicite ; pas de faux succès |
| R5 | Cursor real indisponible | Fixture pour CI ; live partiel documenté |
| R6 | Scope creep MVP | Exclusions §1 ; question « utile à la démo ? » |
| R7 | Tension docs historiques AF-C | Décision Morris déjà validée — README à aligner navigation |

---

## 6. Décisions Morris déjà actées (ne pas re-demander)

1. Vision Control Tower validée
2. AF-Option C reformulée validée
3. Option C hybride direction de travail
4. Fast Track autorisé (préparation)
5. OPS1 capitalisé, non obsolète
6. Pas d’implémentation code avant revue plan + GO exécution
7. Pas de commit/push/PR/merge projet dans la préparation

---

## 7. Anti-claims

- Plan ≠ implémentation
- Pas de MVP / production / industrialisation
- Pas de GitHub write
- Pas de Control Tower « terminé »
- Pas de plateforme MCP Studio
- Handoff ≠ merge docs sur main

---

## 8. Gate d’exécution (formulation)

**Demande :** `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE`

**Autorise si GO :** modification code sous `projects/sfia-studio/app/**` selon backlog 71 ; tests ; preuves locales ; **toujours** sans commit/push/PR tant qu’un GO distinct ne l’ouvre pas.

**N’autorise pas :** write GitHub produit · méthode · hors périmètre · merge.

---

## 9. Verdict préparation

Si D1–D8 revue sans bloqueur structurel :

**CONTROL TOWER FAST TRACK PLAN READY FOR MORRIS REVIEW**

Prochaine action Morris : trancher D2 (transport) + D8 (GO exécution) ; D1/D3–D7 peuvent être confirmés en bloc avec le plan.
````

### Fichier : `projects/sfia-studio/66-control-tower-product-framing.md`

````markdown
# SFIA Studio — Control Tower — Cadrage produit

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `66-control-tower-product-framing.md` |
| **Cycle** | 1 — Cadrage produit « SFIA Studio Control Tower » |
| **Profil** | Critical |
| **Gate consommé** | `GO CADRAGE SFIA STUDIO` |
| **Gate de sortie attendu** | `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` |
| **Statut** | **`validated`** — `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` consommé ; suite Fast Track : `70`–`72` |
| **Baseline méthode** | SFIA v2.6 (Option C méthode — inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — cadrage documentaire uniquement |
| **Branche** | `framing/sfia-studio-control-tower` (locale, non poussée) |
| **Base** | `origin/main` @ `32e5271842b9a344a7e292614675c27ea8ed941b` |
| **Source I7** | Handoff `OPS1 I7 CLOSED WITH STRUCTURAL PRODUCT RESERVE` ; réserve **OPS1-I7-R01** |

> **Anti-claims :** ce document ne valide ni architecture technique, ni MVP, ni backlog delivery, ni industrialisation, ni Control Tower « prêt ». Toute formulation de vision est **candidate** jusqu’au GO Morris de validation du cadrage.

---

## 1. Contexte

### 1.1 Fonctionnement actuel (observation)

Le workflow SFIA opérationnel aujourd’hui reste largement **artisanal** entre systèmes :

1. Morris converse avec ChatGPT (qualification, challenge, décisions).
2. Un template / prompt est préparé pour Cursor.
3. Cursor exécute localement (souvent via copier-coller ou gate Studio OPS1).
4. Un review pack / handoff revient vers ChatGPT.
5. Morris décide (GO suivants, clôtures, réserves).

OPS1 (`41`–`65`, app sur `main`) a démontré un **vertical slice** conversation → ActionCandidate → allowlist → contrat → Cursor borné → rapport → reprise / continuation, avec gouvernance locale forte. I6 est mergé (`#253` / `32e5271`). I7 a préparé le live et amorcé une conversation GPT réelle, puis a été **clôturé avec réserve structurante** sans preuve opératoire complète d’action Cursor.

### 1.2 Valeur constatée du tandem ChatGPT + plugins + Cursor

| Valeur | Observation |
|--------|-------------|
| Qualification riche | GPT clarifie, challenge, structure |
| Exécution locale | Cursor agit dans le repo sous contraintes |
| Traçabilité Git | Diffs, branches, preuves via Git |
| Doctrine SFIA | Gates Morris, fail-closed, anti-claims |

### 1.3 Limites du copier-coller manuel

- Rupture cognitive entre « où l’on décide » et « où l’on exécute ».
- Risque de dérive de prompt / perte de contrat.
- Démonstration difficile pour un tiers (client, investisseur, coéquipier).
- Coût d’attention élevé pour un parcours répétitif.

### 1.4 Difficulté de démonstration et monétisation

Sans interface unique, le produit apparaît comme une **méthode + outils** plutôt qu’une **expérience**. La monétisation / distribution exige une expérience compréhensible, gouvernée et démontrable depuis un seul cockpit.

### 1.5 Clôture I7 et OPS1-I7-R01

D’après le handoff I7 :

- Readiness live préparée ; interaction GPT live **démarrée** (2 tours) ; **pas** d’ActionCandidate / contrat / Cursor action / preuve VS1.
- Verdict : `OPS1 I7 CLOSED WITH STRUCTURAL PRODUCT RESERVE`.
- Réserve **OPS1-I7-R01** : besoin d’une tour de contrôle unique (conversation, Git/GitHub, cycles, gates, Cursor, preuves) — **observation validée**, cible/architecture **non cadrées** jusqu’à ce cycle.

Ce cycle **consomme** le GO de cadrage ; il **n’ouvre pas** delivery, POC ni architecture validée.

---

## 2. Problème utilisateur

### 2.1 Fragmentation

ChatGPT, Cursor IDE, Git local, GitHub, et Studio OPS1 coexistent sans parcours unique. L’utilisateur doit savoir « où » faire chaque geste.

### 2.2 Absence de vision unifiée des opérations

Difficile de voir, au même endroit : sources lues, contrat, gate, exécution, fichiers touchés, tests, verdict, prochaine décision.

### 2.3 Localisation de la décision humaine

Les GO Morris existent (méthode + OPS1), mais leur matérialisation visuelle continue dans une seule interface n’est pas encore un produit démontrable de bout en bout hors OPS1 partiel.

### 2.4 Suivi sources / contrats / exécutions / preuves

OPS1 couvre une partie (session, journal, allowlist, attempt, report). Manquent : GitHub unifié, timeline produit, connecteurs, transfert Cursor sans friction, réinjection automatique systématique hors handoff.

### 2.5 Parcours tiers

Un utilisateur non-Morris ne peut pas aujourd’hui « vivre » SFIA comme produit sans formation lourde aux outils périphériques.

---

## 3. Vision cible candidate

> **Candidate jusqu’au `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER`.**

SFIA Studio devient la **tour de contrôle unique** du workflow SFIA :

| Rôle candidat | Description |
|---------------|-------------|
| Cockpit conversationnel | GPT multi-tours, contexte projet, reprise post-rapport |
| Tour de contrôle | Timeline visible des opérations et états |
| Orchestrateur transparent | Prépare, envoie, suit, récupère — **sans** se substituer à Morris |
| Point unique de décision | Gates Morris visibles, non contournables |
| Interface de visualisation | Branches, worktrees, diffs, tests, preuves |
| Journal d’audit | Corrélation session / cycle / action / exécution |
| Façade produit de la méthode | Doctrine SFIA consommée, non réécrite |

### Tension documentaire explicite (non tranchée)

L’historique valide **AF-Option C** : « Studio ≠ orchestrateur » (cockpit vs moteur déterministe séparé).

La cible Control Tower **candidat** élargit Studio comme **interface + couche d’orchestration visible**. Cela n’invalide pas automatiquement AF-Option C : une séparation logique cockpit / policy engine / exécuteurs peut subsister **derrière** une UI unique.

**Décision Morris requise** (hors ce document) : conserver, reformuler ou remplacer AF-Option C pour la trajectoire Control Tower.

---

## 4. Principes structurants (candidats)

1. Studio est l’**interface unique de pilotage**.
2. **Git** reste la source de vérité technique durable.
3. **GPT** qualifie, challenge et propose — n’autorise pas.
4. **Cursor** exécute localement sous contrat.
5. **Morris** décide (L0).
6. Aucune intention conversationnelle ≠ autorisation.
7. Toute opération sensible → **gate** explicite.
8. Zéro copier-coller manuel entre Studio et Cursor pour les parcours courants.
9. Orchestration **visible et explicable**.
10. Automatiser l’exécution répétable, **jamais** l’arbitrage structurant.
11. **Fail-closed**.
12. Observabilité et audit **par défaut**.
13. Méthode SFIA v2.6 **consommée**, non modifiée ici.
14. Anti-claims : pas de MVP / production / L5 global dans ce cadrage.

---

## 5. Acteurs et responsabilités (candidats — non déploiement)

| Acteur | Responsabilité candidate |
|--------|--------------------------|
| Morris / décideur | Gates, validations, clôtures, arbitrages |
| Utilisateur Studio futur | Opère les cycles dans le cockpit (rôle à préciser) |
| GPT | Conversation, qualification, structuration, résumé |
| Orchestrateur Studio (logique) | Routage d’outils, contrats, suivi, agrégation preuves |
| Policy engine | Allowlists, stops, refus déterministes |
| Git local | Vérité locale, worktrees, diffs |
| GitHub | Remote, PR, checks (lecture puis écriture gouvernée) |
| Cursor CLI / agent | Exécution locale bornée |
| MCP Cursor éventuels | Capacités Cursor déjà configurées (ex. Figma) — **indirectes** |
| Stockage sessions / preuves | Journal, artefacts, redaction |

Aucune séparation physique (processus, services, packaging) n’est validée ici.

---

## 6. Question produit centrale

**Comment transformer le workflow artisanal ChatGPT ↔ Morris ↔ Cursor ↔ Git/GitHub en une expérience intégrée, visuelle, gouvernée et transparente dans SFIA Studio, sans perdre la doctrine SFIA ni l’autorité humaine ?**

Réponse candidate (non décision) : en faisant de Studio le **point unique d’intention, de décision et de visualisation**, tout en gardant Git comme vérité, Cursor comme exécuteur local, GPT comme raisonneur outillé, et Morris comme seul autorisateur des opérations sensibles.

---

## 7. Liens

- Capacités / parcours : `67-control-tower-capabilities-and-user-journeys.md`
- Périmètre / succès / risques : `68-control-tower-scope-success-criteria-and-risks.md`
- Options / decision pack : `69-control-tower-options-and-decision-pack.md`
- Réserve source : handoff I7 — OPS1-I7-R01
````

### Fichier : `projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md`

````markdown
# SFIA Studio — Control Tower — Capacités et parcours utilisateurs

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `67-control-tower-capabilities-and-user-journeys.md` |
| **Cycle** | Cadrage produit Control Tower |
| **Statut** | **`validated`** (cadrage CT) — suite Fast Track : `70`–`72` |
| **Complète** | `66-control-tower-product-framing.md` |
| **Gate** | `GO CADRAGE SFIA STUDIO` |

---

## 1. Cartographie de capacités (candidates)

### 1.1 Conversation et raisonnement

| Capacité | Description candidate |
|----------|----------------------|
| Multi-tours | Journal ordonné, contexte session |
| Contexte projet | Projet cible, HEAD, mode live/fixture |
| Clarification | Challenge GPT sans exécution |
| Recherche de sources | Lecture bornée Git / docs projet |
| Distinction SFIA | Observation / hypothèse / option / recommandation / décision |
| Préparation de cycle | Qualification, profil, blocs |
| Reprise post-rapport | Résumé structuré sans relance implicite |

### 1.2 Git local

Statut, branche, HEAD, recherche, lecture fichiers, diff, historique, worktrees, observation des modifications Cursor. **Lecture d’abord** ; écritures locales sous gates.

### 1.3 GitHub

Branches distantes, commits, PR, commentaires, reviews, checks, workflows ; écritures (push, PR, merge) **uniquement** sous gates distincts.

### 1.4 Cursor

| Capacité | Description candidate |
|----------|----------------------|
| Prompt canonique | Généré depuis contrat / ActionCandidate |
| Transfert sans copier-coller | Adapter Studio → Cursor CLI |
| Lancement / suivi | Logs, statut, timeouts |
| Collecte | Rapport, review pack, diff, tests |
| MCP Cursor | Utilisés **par Cursor**, non exposés comme shell GPT |
| Interdit | Shell libre exposé à GPT |

### 1.5 Gouvernance

Qualification cycle, profil, blocs, périmètre, allowlist, chemins protégés, stop conditions, gates Morris, décision explicite, traçabilité (réutilisation OPS1 autant que possible).

### 1.6 Visualisation

Timeline cycle ; outils appelés ; sources ; état Git ; action proposée ; gate ; exécution ; événements ; fichiers ; diff ; tests ; preuves ; verdict ; prochaine décision.

### 1.7 Gestion produit

Projets, sessions, cycles, historique, reprise, rôles, paramètres, coûts, secrets, connecteurs (configuration — non delivery ici).

---

## 2. Espaces UX candidats (fonctionnels, non maquette)

| Espace | Rôle |
|--------|------|
| Cockpit global | Vue d’ensemble projets / sessions |
| Conversation | Fil principal GPT |
| Panneau sources | Fichiers / docs / résultats de recherche |
| Cycle actif | Qualification, profil, blocs |
| Action candidate | Proposition séparée du chat |
| Gate Morris | GO / NO-GO / CORRIGER / ABANDONNER / STOP |
| Exécution Cursor | Statut, logs digests, attempt |
| État Git / GitHub | Branche, remote, PR |
| Diff | Fichiers touchés |
| Tests | Résultats locaux |
| Preuves | Packs, captures, handoffs |
| Décisions | Historique des gates |
| Historique | Sessions / continuations |
| Connecteurs | OpenAI / Cursor / GitHub (états) |

### Timeline visuelle candidate

```
DEMANDE → RECHERCHE SOURCES → QUALIFICATION → PROPOSITION
→ GATE → EXÉCUTION → RAPPORT → VALIDATION → GIT/PR → CLÔTURE
```

| Nature | Exemples |
|--------|----------|
| Visible | Timeline, badges mode, IDs corrélés |
| Interactif | Chat, gates, filtres sources |
| Repliable | Logs techniques, digests |
| Bloquant | Gate avant exécution / write remote |
| Consultable après | Session CLOSED, preuves |
| Exportable | Review pack, handoff (mécanisme existant) |

Aucun design ne devient baseline dans ce cycle.

---

## 3. Parcours principaux

### P1 — Question repo-informed sans action

| Champ | Contenu |
|-------|---------|
| Déclencheur | Question utilisateur sur le repo |
| Systèmes | GPT + Git local read |
| Étapes | Chat → outils lecture → réponse |
| Gates | Aucun (lecture) |
| Résultat | Réponse ; éventuellement ACTION_NOT_REQUIRED |
| Erreurs | Repo inaccessible ; chemin hors allowlist lecture |
| Preuves | Tours + events lecture |

### P2 — Cadrage d’un besoin

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin imprécis |
| Systèmes | GPT + sources |
| Étapes | Clarification multi-tours → option / recommandation |
| Gates | Aucun jusqu’à proposition d’action |
| Résultat | Besoin cadré ; pas d’exécution |
| Erreurs | Confusion intention / autorisation |
| Preuves | Journal conversationnel |

### P3 — Génération et validation d’une action Cursor

| Champ | Contenu |
|-------|---------|
| Déclencheur | ACTION_REQUIRED |
| Systèmes | GPT structuration + Studio gouvernance |
| Étapes | ActionCandidate → allowlist → affichage contrat |
| Gates | Gate Morris d’action (pré-exécution) |
| Résultat | Candidate versionnée ; `NOT AUTHORIZED` jusqu’au GO |
| Erreurs | Allowlist invalide ; chemin protégé |
| Preuves | Candidate + évaluation allowlist |

### P4 — Exécution Cursor

| Champ | Contenu |
|-------|---------|
| Déclencheur | GO Morris ancré au contractHash |
| Systèmes | Cursor CLI + worktree |
| Étapes | Seal → attempt → run → post-check |
| Gates | GO exécution distinct du GO delivery |
| Résultat | MinimalExecutionResult |
| Erreurs | Timeout ; hors contrat ; HEAD drift |
| Preuves | attemptId, digests, files touched |

### P5 — Analyse du rapport

| Champ | Contenu |
|-------|---------|
| Déclencheur | Attempt terminée |
| Systèmes | Report service + GPT résumé |
| Étapes | Génération rapport → affichage couverture |
| Gates | Aucun pour générer ; décision après |
| Résultat | COMPLETED / REPORT_INCOMPLETE / FAILED |
| Erreurs | Preuve manquante |
| Preuves | reportId scellé |

### P6 — Correction

| Champ | Contenu |
|-------|---------|
| Déclencheur | CORRIGER |
| Systèmes | Studio gouvernance |
| Étapes | Invalider version → nouvelle candidate → nouvel hash |
| Gates | Nouveau gate requis |
| Résultat | Ancien hash non exécutable |
| Erreurs | Exécution de version obsolète (doit être refusée) |
| Preuves | Versions + décisions |

### P7 — PR readiness

| Champ | Contenu |
|-------|---------|
| Déclencheur | Demande de readiness |
| Systèmes | Git local + tests + GPT analyse |
| Étapes | Inventaire diff → contrôles → pack |
| Gates | Gate readiness distinct |
| Résultat | Verdict ready / blocked |
| Erreurs | Scope violation |
| Preuves | Pack + checks |

### P8 — Push / PR / merge (gates distincts)

| Champ | Contenu |
|-------|---------|
| Déclencheur | GO Morris spécifique (push / PR / merge) |
| Systèmes | GitHub write gouverné |
| Étapes | Afficher effet distant → GO → exécuter une seule classe |
| Gates | Un gate **par** classe d’écriture distante |
| Résultat | Effet remote tracé |
| Erreurs | Refus wrapper ; scope |
| Preuves | Preuve négative / positive remote |

### P9 — Post-merge

| Champ | Contenu |
|-------|---------|
| Déclencheur | Merge constaté |
| Systèmes | Git + tests |
| Étapes | Align main → verify → cleanup gouverné |
| Gates | GO post-merge / cleanup |
| Résultat | Main aligné ; branches nettoyées si autorisé |
| Erreurs | Merge mismatch |
| Preuves | SHA main + tests |

### P10 — Capitalisation

| Champ | Contenu |
|-------|---------|
| Déclencheur | Clôture cycle |
| Systèmes | Handoff + docs |
| Étapes | Review pack → publish handoff |
| Gates | Selon typologie |
| Résultat | Handoff remote verified |
| Erreurs | Pack incomplet |
| Preuves | SHA handoff |

### P11 — Lecture GitHub seule

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin d’info remote |
| Systèmes | GitHub read |
| Étapes | Consulter PR/checks/branches |
| Gates | Aucun write |
| Résultat | Contexte remote dans chat |
| Erreurs | Auth / scope |
| Preuves | Events lecture |

### P12 — Figma via Cursor MCP (indirect)

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin design dans une action Cursor |
| Systèmes | Cursor + MCP Figma (chez Cursor) |
| Étapes | Contrat autorise l’intention ; Cursor utilise ses MCP |
| Gates | Gate action Cursor ; **pas** d’exposition MCP à GPT Studio |
| Résultat | Artefacts design via Cursor |
| Erreurs | MCP indisponible |
| Preuves | Rapport Cursor + réserves |

---

## 4. Matrice lecture / écriture (rappel)

| Classe | Premier incrément candidat |
|--------|----------------------------|
| Lecture Git/GitHub | Oui (preuve Tool Gateway) |
| Analyse | Oui |
| Écriture locale | Sous contrat Cursor |
| Commit / push / PR / merge | Plus tard, gates distincts |
| Suppression | Rare, gate fort |

Voir aussi `68` (périmètre) et `69` (options).
````

### Fichier : `projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md`

````markdown
# SFIA Studio — Control Tower — Périmètre, critères de succès et risques

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `68-control-tower-scope-success-criteria-and-risks.md` |
| **Cycle** | Cadrage produit Control Tower |
| **Statut** | **`validated`** (cadrage CT) — suite Fast Track : `70`–`72` |
| **Complète** | `66`, `67`, `69` |

> **MVP non défini / non validé.** POC et produit cible sont **distingués**. Aucun claim production / live-ready.

---

## 1. Produit cible (vision longue durée)

### In-scope (candidat)

- Interface unique de pilotage du workflow SFIA.
- Conversation GPT + outils bornés.
- Visualisation Git local / GitHub.
- Préparation / affichage contrats et gates Morris.
- Déclenchement et suivi Cursor sans copier-coller.
- Réinjection automatique des résultats dans la conversation.
- Journal d’audit corrélé.
- Opérations Git/GitHub gouvernées par classes de risque.
- Multi-projets progressif ; rôles futurs.

### Out-of-scope (candidat)

- Remplacement de Cursor IDE comme environnement d’édition riche.
- Automatisation L5 globale des décisions Morris.
- Modification de la méthode SFIA dans ce produit.
- Shell générique exposé à GPT.
- « Studio = seule vérité » (Git reste vérité).

### Hypothèses

- Morris reste L0.
- SFIA v2.6 reste baseline méthode.
- Un utilisateur peut opérer sans quitter Studio pour les gestes courants.

### Dépendances

- OpenAI (ou équivalent) ; Cursor CLI ; Git ; GitHub ; stockage sessions/preuves.

### Risques

- Confusion cockpit / orchestrateur (tension AF-Option C).
- Complexité UX ; coûts API ; surface d’attaque connecteurs.

### Critères de succès produit (observables candidats)

- Parcours courant démontrable dans une seule UI.
- Aucun copier-coller Studio↔Cursor pour ces parcours.
- Gates impossibles à contourner depuis l’UI.
- Git reste vérifiable comme vérité.
- Aucune écriture distante sans gate de classe appropriée.
- Audit rejouable (session → action → exécution → preuve).

### Anti-claims

Pas de « produit complet atteint », « industrialisé », « multi-tenant prêt ».

---

## 2. POC technique suivant (faisabilité — candidat)

Objectif : prouver qu’une **orchestration intégrée** est faisable sans livrer le produit.

### In-scope candidat

- Tool Gateway **read-only** Git local (+ GitHub read si prêt).
- Cursor Adapter : transfert prompt + run CLI + collecte résultat.
- Timeline minimale d’événements dans Studio.
- Réinjection d’un résumé d’exécution dans le chat.
- Réutilisation maximale OPS1 (session, gates, allowlist, report).

### Out-of-scope candidat

- Write GitHub ; multi-users ; packaging commercial ; refonte UX pixel.
- Nouveau backlog delivery complet ; choix fournisseur définitif.

### Hypothèses

- OPS1 SQLite / actions restent une base réutilisable.
- Cursor CLI reste le canal d’exécution local.

### Dépendances

- Capacités live déjà présentes (OpenAI, Cursor bin) — observées en I7 readiness.

### Risques

- Sur- promettre le POC comme MVP.
- Refaire OPS1 au lieu de l’étendre.

### Critères de succès POC (candidats)

1. GPT consulte Git via outils bornés (preuve négative hors allowlist).
2. Prompt Cursor généré et transmis **sans** copier-coller.
3. Exécution CLI sous contrat ; events visibles.
4. Résultat réinjecté automatiquement dans la session.
5. Gate Morris toujours requis avant exécution.
6. Aucun effet GitHub write.

### Anti-claims

POC ≠ produit ; POC ≠ MVP ; succès POC ≠ monétisation.

---

## 3. MVP candidat (non validé)

> **Non sélectionné / non décidé.** Zone de cadrage uniquement.

### In-scope candidat (hypothèse de travail)

- Un projet pilote.
- Parcours : question → action Cursor → rapport → décision → éventuellement PR readiness.
- GitHub **read** + écritures minimales sous gates (à arbitrer).
- UX démontrable à un tiers.

### Out-of-scope candidat

- Couverture 15 cycles ; marketplace ; multi-tenant ; L5.

### Hypothèses

- Un persona « opérateur SFIA » peut terminer un cycle utile sans Morris à chaque micro-geste (Morris reste sur gates structurants).

### Dépendances

- Succès POC Tool Gateway + Cursor Adapter.
- Décision sur AF-Option C reformulée.

### Risques

- MVP trop large (usine à gaz).
- MVP trop étroit (OPS1 + polish) sans valeur monétisable.

### Critères de succès MVP (candidats — non décidés)

- Tiers non formé aux plugins ChatGPT peut suivre un cycle bout-en-bout dans Studio.
- Valeur métier identifiable (gain de temps / réduction d’erreurs / démontrabilité).
- Doctrine SFIA intacte (gates, fail-closed, anti-claims).

### Anti-claims

Aucun MVP « défini » ou « ready » dans ce cycle.

---

## 4. Critères transverses observables (rappel gate)

| Critère | Cible |
|---------|-------|
| Zéro copier-coller courant Studio↔Cursor | Produit / POC |
| GPT → Git/GitHub outils bornés | POC+ |
| Prompt Cursor auto | POC+ |
| Cursor CLI sous contrat | POC+ (OPS1 partiel déjà) |
| Events d’exécution visibles | POC+ |
| Réinjection auto résultats | POC+ |
| Gates visibles non contournables | Produit (OPS1 partiel) |
| Git = vérité | Toujours |
| Remote write sans gate | Interdit |
| Démo single-UI | Produit / MVP candidat |

---

## 5. Risques consolidés

| ID | Risque | Mitigation candidate |
|----|--------|----------------------|
| R1 | Tension AF-Option C vs Control Tower | Décision Morris explicite |
| R2 | Scope creep MVP | Trajectoire T0–T9 + gates |
| R3 | Secrets / connecteurs | Backend-only ; redaction |
| R4 | Lock-in OpenAI / Cursor | Options A/B/C ; adapters |
| R5 | Dette OPS1 abandonnée trop tôt | Matrice réutiliser / refactor / abandon |
| R6 | Coûts tokens | FinOps observabilité dès POC |
| R7 | Démo ≠ industrialisation | Anti-claims systématiques |

---

## 6. Sécurité et gouvernance (exigences candidates)

Voir détail opérationnel dans `69`. Exigences minimales :

- tokens côté backend ; aucun secret au modèle ;
- scopes minimaux ; séparation read/write ;
- allowlist repos/chemins ; outils filtrés par session ;
- confirmation humaine actions sensibles ;
- journal append-only (ou équivalent) ; redaction ;
- fail-closed ; isolation worktrees ;
- pas de shell générique ; MCP non approuvés interdits ;
- connecteurs désactivables ; identité utilisateur ; multi-users futurs.

### Classification des opérations

| Classe | Niveau SFIA (ordre de grandeur) | Gate | Preuve | Rollback |
|--------|----------------------------------|------|--------|----------|
| Lecture | L1–L2 | Non / soft | Event | N/A |
| Analyse | L2 | Non | Event | N/A |
| Écriture locale | L3 | GO action | Diff + attempt | Revert local / abandon worktree |
| Commit | L3 | GO commit | SHA | Revert commit (règles) |
| Push | L3–L4 | GO push | Remote SHA | Rare / dangereux |
| Création PR | L3–L4 | GO PR | URL PR | Close PR |
| Merge | L4 | GO merge | Merge SHA | Complexe |
| Suppression | L4 | GO fort | Audit | Souvent impossible |
| Opération externe | L3–L4 | GO dédié | Audit | Selon système |

---

## 7. FinOps / performance / observabilité (candidats)

| Domaine | Contenu |
|---------|---------|
| Coûts | API GPT ; GitHub ; hébergement ; stockage preuves — **pas d’estimation financière non sourcée** |
| Quotas / tokens | Limites par session ; affichage NOT AVAILABLE si inconnu |
| Durée Cursor | Timeouts ; reprise manuelle (pas auto-retry silencieux) |
| Streaming | Conversation ; logs digests |
| Corrélation | sessionId / cycle / action / attempt / report |
| Métriques | Succès / échec / coût / latence |
| Rétention | Politique à définir (non décidée) |

---

## 8. Trajectoire candidate (option, non décision)

| Étape | Objectif | Valeur | Dépendances | Preuve | Gate Morris | Dette évitée | Stop |
|-------|----------|--------|-------------|--------|-------------|--------------|------|
| T0 | Cadrage produit | Direction | — | Docs 66–69 | Validation cadrage | — | Ambiguïté cible |
| T1 | Archi fonctionnelle | Frontières | T0 | Docs AF | GO archi fct | Tech trop tôt | Conflit AF-C |
| T2 | Tool Gateway read-only | Faisabilité outils | T1 | Spike | GO POC gateway | Write trop tôt | Secrets |
| T3 | Cursor Adapter | Zéro copier-coller | T2 | Spike | GO adapter | Shell libre | Hors contrat |
| T4 | Orchestration bout-en-bout | Démo intégrée | T3 | E2E | GO orch | — | Gate contourné |
| T5 | Git local write gouverné | Closing loop local | T4 | Preuves | GO write local | — | Dirty tree |
| T6 | GitHub write gates | Remote gouverné | T5 | Preuves | GO GitHub write | — | Remote effect |
| T7 | UX démontrable | Montrable tiers | T4+ | Capture | GO UX | Pixel early | — |
| T8 | Définition MVP | Périmètre valeur | T7 | Decision pack | GO MVP def | Scope creep | — |
| T9 | Industrialisation ciblée | Exploitation | T8 | RUN | GO indu | — | Prod claim |

Cette séquence est une **option**.
````

### Fichier : `projects/sfia-studio/69-control-tower-options-and-decision-pack.md`

````markdown
# SFIA Studio — Control Tower — Options et decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `69-control-tower-options-and-decision-pack.md` |
| **Cycle** | Cadrage produit Control Tower |
| **Statut** | **`validated`** — Option C hybride **retenue** ; AF-Option C reformulée **validée** ; suite Fast Track : `70`–`72` |
| **Complète** | `66`, `67`, `68` |
| **Gate de sortie attendue** | `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` |

> Aucune option n’est validée. La recommandation ci-dessous est **candidate**. Morris décide.

---

## 1. Questions structurantes — réponses candidates

| # | Question | Réponse candidate |
|---|----------|-------------------|
| 1 | Studio = interface seule ou aussi orchestrateur ? | **Les deux** dans la cible Control Tower : cockpit + couche d’orchestration **visible**. À arbitrer vs AF-Option C historique (« Studio ≠ orchestrateur »). |
| 2 | « Studio ≠ orchestrateur » encore compatible ? | **Tension documentaire**. Compatible seulement si « orchestrateur » = moteur opaque hors Studio ; **incompatible** si Studio doit être le point unique de pilotage visible. Décision Morris requise à la validation de cadrage. |
| 3 | Où s’exécute l’orchestration ? | Candidat : **backend Studio** (policy + adapters), UI pour visualisation/décision ; Cursor pour exécution locale ; Git = vérité. |
| 4 | Rôle OpenAI Responses API ? | Raisonnement, clarification, structuration, appels d’**outils bornés** ; **jamais** autorisation ni shell libre. |
| 5 | Comment GPT reçoit les outils ? | Tool calling / function calling filtré par session (allowlist d’outils + scopes). Mécanisme exact = option A/B/C. |
| 6 | GitHub : MCP / API / adapter ? | **Indécis** ; hybride candidat (API ou MCP derrière adapter Studio). |
| 7 | Git local : MCP ou fonctions internes ? | Candidat : **adapter interne** (contrôle allowlist/worktree) ; MCP possible plus tard. |
| 8 | Cursor CLI déclenché / suivi ? | Adapter Studio : seal contrat → spawn CLI → stream/digest logs → collect result (héritage OPS1 I5). |
| 9 | MCP Cursor existants ? | **Consommés par Cursor**, pas exposés à GPT Studio comme outils génériques. |
| 10 | Rapport Cursor → Studio auto ? | Collecte post-run par adapter → persistance → résumé conversation (héritage I6). |
| 11 | Matérialisation des gates ? | UI gate + décision persistée + ancrage contractHash (OPS1 I3). |
| 12 | Empêcher exécution implicite ? | Fail-closed ; intention ≠ autorisation ; GO explicite ; pas d’auto-retry silencieux. |
| 13 | Secrets ? | Backend-only ; jamais au modèle ; redaction logs ; connecteurs désactivables. |
| 14 | Isolation projets / worktrees ? | Un worktree d’action par tentative ; allowlist chemins ; pas de partage implicite. |
| 15 | Journalisation ? | Append-only (ou équivalent) corrélé session/action/attempt/report. |
| 16 | Session interrompue ? | Reprise lecture d’état persisté ; pas de relance d’exécution sans nouveau GO. |
| 17 | Timeouts / crashs / partiels ? | Statuts FAILED / REPORT_INCOMPLETE ; reprise manuelle gouvernée. |
| 18 | Séparer lecture / write local / write remote ? | Classes d’opérations + gates distincts (voir `68`). |
| 19 | Read-only au 1er incrément ? | Tool Gateway Git (+ GitHub read) ; pas de write remote. |
| 20 | Preuve minimale vers MVP ? | POC T2–T4 : outils read + Cursor sans copier-coller + réinjection + gates intacts. |
| 21 | OPS1 réutilisable ? | Session, conversation live, ActionCandidate, gates, allowlist, contrat, exécution CLI, report/continuation, UX contrats. |
| 22 | OPS1 obsolète ? | Fragments « Studio ≠ orchestrateur » si Control Tower validé ; évent. UX trop étroite « vertical slice » si élargissement cockpit ; pas le code gates/fail-closed. |
| 23 | Conserver le terme OPS1 ? | Candidat : **capitaliser OPS1 comme fondation**, nommer la trajectoire suivante **Control Tower** (éviter OPS2 ambigu tant que cible non validée). |
| 24 | Expérience client / investisseur ? | Une UI : demande → sources → gate → Cursor → rapport → Git — sans plugins ChatGPT. |
| 25 | Monétisable vs outil interne ? | Gouvernance + audit + démontrabilité + réduction d’erreurs ; pas seulement un chat wrapper. |

---

## 2. Option A — Intégrations propriétaires internes

**Description.** Studio implémente directement Git local, GitHub, Cursor, OpenAI tool calling.

| Critère | Évaluation candidate |
|---------|----------------------|
| Avantages | Contrôle total ; UX cohérente ; pas de dépendance MCP pour le cœur |
| Limites | Coût de build élevé ; maintenance multi-API |
| Dette | Adapters propriétaires à long terme |
| Sécurité | Surface maîtrisée si allowlists strictes |
| Portabilité | Faible vers d’autres runtimes |
| Complexité | Haute côté Studio |
| Coûts | Eng. élevés ; API fournisseurs |
| Dépendances | OpenAI, GitHub API, Cursor CLI |
| UX | Potentiellement la meilleure intégration |
| Monétisation | Produit différencié possible |
| Réversibilité | Moyenne (réécriture adapters) |
| Automatisation | Haute sous gates |
| Lock-in | Studio + fournisseurs directs |

---

## 3. Option B — Architecture MCP dominante

**Description.** Studio s’appuie sur des serveurs MCP pour la majorité des systèmes.

| Critère | Évaluation candidate |
|---------|----------------------|
| Avantages | Standardisation ; réutilisation écosystème |
| Limites | Maturité / confiance MCP variables ; gouvernance plus difficile |
| Dette | Chaîne MCP à certifier |
| Sécurité | Risque MCP non approuvés ; besoin catalogue strict |
| Portabilité | Bonne si MCP stables |
| Complexité | Orchestration + policy sur MCP |
| Coûts | Moins de code custom, plus d’intégration |
| Dépendances | Serveurs MCP + hosts |
| UX | Variable selon serveurs |
| Monétisation | Différenciation = policy + UX, pas les MCP |
| Réversibilité | Moyenne |
| Automatisation | Haute si MCP write |
| Lock-in | Écosystème MCP |

---

## 4. Option C — Architecture hybride (exemple candidat)

**Exemple :**

- Git local : adapter interne
- Cursor : adapter interne via CLI
- GitHub : API directe **ou** MCP derrière adapter
- Figma : indirect via Cursor MCP
- OpenAI : Responses API + tool calling
- Policy engine Studio commun

| Critère | Évaluation candidate |
|---------|----------------------|
| Avantages | Réutilise OPS1 ; contrôle où ça compte ; MCP seulement là où utile |
| Limites | Deux styles d’intégration à documenter |
| Dette | Adapters + évent. bridges MCP |
| Sécurité | Policy unique ; MCP Cursor hors surface GPT |
| Portabilité | Correcte (adapters) |
| Complexité | Moyenne-haute, progressive |
| Coûts | Échelonnés (T2→T6) |
| Dépendances | Comme A, plus option MCP GitHub |
| UX | Cockpit unifié possible |
| Monétisation | Bonne (gouvernance + démo) |
| Réversibilité | Bonne si frontières claires |
| Automatisation | Progressive sous gates |
| Lock-in | Réduit vs A pur / B pur |

---

## 5. Option D — Maintien OPS1 enrichi

**Description.** Évolution progressive de l’existant sans refonte structurelle immédiate (pas de « tour de contrôle » explicite).

| Critère | Évaluation candidate |
|---------|----------------------|
| Avantages | Faible risque immédiat ; capitalise I1–I6 |
| Limites | Ne résout pas la fragmentation ChatGPT↔Cursor pour un tiers ; réserve I7-R01 non adressée |
| Dette | Accrue si on empile sans vision |
| Sécurité | Déjà fail-closed localement |
| Portabilité | Limitée |
| Complexité | Plus bas court terme |
| Coûts | Plus bas court terme |
| Dépendances | OPS1 actuel |
| UX | Slice opérationnel, pas cockpit |
| Monétisation | Faible sans démo intégrée |
| Réversibilité | Haute court terme |
| Automatisation | Comme aujourd’hui |
| Lock-in | Trajectoire OPS1 |

---

## 6. Recommandation candidate (≠ décision Morris)

### Synthèse

**Recommander d’explorer l’Option C (hybride)** comme direction de cadrage, avec **réutilisation maximale d’OPS1**, et **Option D uniquement** comme filet si Morris refuse toute reformulation de cible.

### Utile maintenant ?

Oui : cadrer la cible après I7-R01 évite de livrer I8+ dans un cul-de-sac produit.

### Plus simple possible ?

Oui : T2 Tool Gateway **read-only** + T3 Cursor Adapter sans write GitHub.

### Quelle dette ?

Adapters internes (Git/Cursor) + tension AF-Option C à trancher ; éviter dette MCP précoce.

### Quelle capacité prouver avant de construire davantage ?

1. Lecture Git bornée depuis la conversation.
2. Transfert Cursor sans copier-coller.
3. Réinjection rapport + gates intacts.

### Réutiliser d’OPS1

Session, live GPT, ActionCandidate, gates 4 actions, allowlist, contract hash, exécution CLI, report/continuation, microcopies gouvernance, journal events.

### Abandonner / conserver / refactorer

| Action | Élément |
|--------|---------|
| Conserver | Doctrine SFIA, fail-closed, gates, Git vérité, anti-claims |
| Refactorer | Frontière « Studio ≠ orchestrateur » → cockpit + orchestration visible |
| Abandonner (si Control Tower validé) | Trajectoire « enrichir OPS1 sans vision cockpit » comme seule voie |
| Ne pas abandonner | Code I1–I6 utile ; preuves ; allowlist Campus360 patterns |

### Gate Morris suivante

`GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER`
Puis, si validé : gate d’architecture fonctionnelle (T1) — **non ouverte** ici.

---

## 7. Décisions Morris nécessaires

1. Valider ou non la **vision Control Tower** (cockpit + orchestration visible).
2. Trancher la compatibilité / reformulation d’**AF-Option C**.
3. Choisir une **direction d’options** (A / B / C / D) — sans figer l’archi technique.
4. Autoriser ou non un **POC T2–T4** après validation cadrage.
5. Conserver ou non le **libellé OPS1** pour la suite.
6. Clarifier l’ambition **MVP candidat** (interne vs démontrable tiers) — sans figer le MVP.

**Non décidé ici :** architecture technique cible, fournisseurs, backlog delivery, MVP, industrialisation, promotion SFIA v3.0, automatisation L5.

---

## 8. Matrice OPS1 → Control Tower (candidat)

| Bloc OPS1 | Statut candidat |
|-----------|-----------------|
| Session + journal | Réutiliser |
| Live OpenAI | Réutiliser / étendre outils |
| ActionCandidate + gates | Réutiliser |
| Allowlist / chemins | Réutiliser / généraliser |
| Cursor CLI adapter | Réutiliser / intégrer transfert auto |
| Report + continuation | Réutiliser |
| UX slice I1–I6 | Étendre vers cockpit |
| « Studio ≠ orchestrateur » | À reformuler si CT validé |
| Campus360-only slice | Élargir progressivement (pas immédiat) |
````

## 16. Diff utile — README.md

````diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index ccd03ee..739b10c 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,7 +4,7 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-ops1-framing-validated-with-reservations` — A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44`) ; backlog OPS1 **validé avec réserves** (`60`–`62` sur `main`) ; Intégration / DevOps OPS1 **validé avec réserves** (`63`–`65` ; `G-OPS1-DEVOPS-VAL` consommé) ; `.sfia-exec/**` **ignoré** ; Node/scanner/suites/CI **ouverts ou différés** ; live / delivery / code / MVP / production **fermés** |
+| **Statut** | `control-tower-fast-track-plan-open` — cadrage Control Tower **validé** (`GO VALIDATION CADRAGE…`) ; Fast Track vertical slice **plan ouvert** (`70`–`72` ; `GO FAST TRACK…`) ; **AF-Option C reformulée validée** ; Option C hybride **retenue** ; code / exécution **fermés** jusqu’à `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` ; MVP / production **fermés** ; héritage OPS1 capitalisé (I1–I6 ; I7 + `OPS1-I7-R01`) |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
 | **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
@@ -13,15 +13,17 @@
 | **Profil SFIA** | Critical |
 | **Branche delivery** | `delivery/sfia-studio-poc-s1-harness` (**locale**) |
 | **Branche architecture** | historique — MERGED #221 |
-| **Base canonique** | `origin/main` @ `b686eb1394bb4d550eeff1dd64669b3d405579ad` |
+| **Base canonique** | `origin/main` @ `32e5271842b9a344a7e292614675c27ea8ed941b` (I6 mergé ; cadrage Control Tower local) |
 | **Chemin** | `projects/sfia-studio/` |
-| **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
+| **AF-Option C** | **REFORMULÉE ET VALIDÉE** — Studio = cockpit + façade d’orchestration ; policies / exécuteurs logiquement séparés derrière Studio |
+| **Cadrage Control Tower** | `66`–`69` — **validé** (`GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER`) |
+| **Fast Track CT VS** | `70`–`72` — **`plan-open`** ; branche locale `framing/sfia-studio-control-tower` ; **non poussée** ; exécution code **fermée** |
 | **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
 | **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
 | **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
 | **POC** | **Non lancé** (pas d’industrialisation / daemon) |
-| **Prochaine décision** | Revue PR Draft DevOps / merge éventuel / `GO IMPLEMENT OPS1 CI` / `GO DELIVERY I1` / gate Node — **non automatiques** |
+| **Prochaine décision** | `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` (+ D2 transport GitHub) — **non consommé** ; aucun commit/push/PR projet implicite |

 ---

@@ -147,7 +149,7 @@ Pré-cadrage
   → décision Morris : ouverture éventuelle conception fonctionnelle OPS1 (`G-OPS1-FUNC-DESIGN`) — **non ouverte**
 ```

-Architecture Option B **intégrée**. A–E **CLOSED_WITH_RESERVATIONS**. Cadrage OPS1 **validé avec réserves** et **canonique sur main** (PR #235 / `b686eb1`). **POC maintenu**. MVP / production / industrialisation / delivery OPS1 **non ouverts**. Trajectoire I1–I7 validée au niveau cadrage uniquement. Prochaine décision : ouverture éventuelle de `G-OPS1-FUNC-DESIGN`.
+Architecture Option B **intégrée**. A–E **CLOSED_WITH_RESERVATIONS**. Cadrage OPS1 **validé avec réserves** (PR #235 / `b686eb1`). I6 mergé (`#253` / `32e5271`). I7 clôturé avec **OPS1-I7-R01**. Cadrage Control Tower **validé** (`66`–`69`). Fast Track vertical slice : **`plan-open`** (`70`–`72` ; Option C hybride). **Code non modifié** dans la préparation. MVP / production / industrialisation **fermés**. Prochaine décision : `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE`.

 ---

@@ -374,8 +376,10 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 4. Intégration / DevOps OPS1 — docs [`63`](./63-ops1-integration-devops-foundation.md)–[`65`](./65-ops1-integration-devops-decision-pack.md) **validés avec réserves** · `G-OPS1-DEVOPS-VAL` consommé (2026-07-20 21:27:26 CEST) · 24 décisions · `.sfia-exec/**` ignoré · **non intégrés sur `main` tant que PR non mergée**.
 5. Delivery / code / CI implémentée / live GPT-Cursor / MVP / production — **FERMÉS** (GO Morris distincts requis ; non ouverts automatiquement).
 6. Réserves maintenues : Node non figé · scanner différé · suites intégration différées · CI Studio différée (`GO IMPLEMENT OPS1 CI`) · worktree≠sandbox · stack/fournisseur · FD-CAND-15 · UX-R01…R04 · live fermés.
+7. **Cadrage Control Tower** — docs [`66`](./66-control-tower-product-framing.md)–[`69`](./69-control-tower-options-and-decision-pack.md) — **validé** · `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` consommé · AF-Option C reformulée **validée** · Option C hybride **retenue**.
+8. **Fast Track Control Tower VS** — docs [`70`](./70-control-tower-fast-track-architecture-and-contract.md)–[`72`](./72-control-tower-fast-track-decision-pack.md) — **`plan-open`** · `GO FAST TRACK CONTROL TOWER VERTICAL SLICE` consommé · gate suivante : `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` · **aucun code** avant ce GO.

-**Verdict documentaire courant :** `SFIA STUDIO OPS1 INTEGRATION DEVOPS VALIDATED WITH RESERVATIONS`
+**Verdict documentaire courant :** `SFIA STUDIO CONTROL TOWER FAST TRACK PLAN OPEN — AWAITING EXECUTION GO`


 ---
@@ -393,7 +397,9 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Scénario OPS1 | Docs `54`–`56` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST) ; FD-CAND-13/20/26 levées (OPS1) ; FD-CAND-15 maintenue ; UX-R01…R04 maintenues |
 | Architecture technique OPS1 | Docs `57`–`59` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-TECH-ARCH-VAL` — 2026-07-20 19:17:11 CEST) ; 26 CAND validées ; stack non finalisée |
 | Backlog OPS1 | Docs `60`–`62` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-BACKLOG-VAL` — 2026-07-20 20:52:00 CEST) ; intégrés sur `main` (PR #244) ; 17 epics / 41 stories / 20 décisions |
-| Intégration / DevOps OPS1 | Docs `63`–`65` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-DEVOPS-VAL` — 2026-07-20 21:27:26 CEST) ; 24 CAND ; `.sfia-exec/**` ignoré ; CI/delivery/live/MVP **fermés** ; **pas encore** sur `main` avant merge PR |
+| Intégration / DevOps OPS1 | Docs `63`–`65` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-DEVOPS-VAL` — 2026-07-20 21:27:26 CEST) ; 24 CAND ; `.sfia-exec/**` ignoré ; CI/delivery/live/MVP **fermés** |
+| Cadrage Control Tower | Docs `66`–`69` — **validé** (`GO VALIDATION CADRAGE…`) |
+| Fast Track CT VS | Docs `70`–`72` — **`plan-open`** ; exécution code fermée jusqu’à `GO EXÉCUTION…` |
 | Handoff | `sfia/review-handoff` |

 ---
@@ -477,4 +483,21 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [64-ops1-local-controls-ci-and-evidence-contract.md](./64-ops1-local-controls-ci-and-evidence-contract.md) | Matrice contrôles / commandes / preuves — **VALIDATED WITH RESERVATIONS** |
 | [65-ops1-integration-devops-decision-pack.md](./65-ops1-integration-devops-decision-pack.md) | `OPS1-DEVOPS-CAND-01`…`24` — **VALIDATED WITH RESERVATIONS** (2026-07-20 21:27:26 CEST) |

-*SFIA Studio — POC maintenu — Intégration/DevOps VALIDATED WITH RESERVATIONS — non encore intégré sur `main` tant que PR non mergée — CI / delivery / live / MVP non ouverts.*
+### Cadrage produit Control Tower (validé)
+
+| Document | Rôle |
+|----------|------|
+| [66-control-tower-product-framing.md](./66-control-tower-product-framing.md) | Contexte, problème, vision, principes, acteurs — **validé** |
+| [67-control-tower-capabilities-and-user-journeys.md](./67-control-tower-capabilities-and-user-journeys.md) | Capacités, UX fonctionnelle, parcours P1–P12 — **validé** |
+| [68-control-tower-scope-success-criteria-and-risks.md](./68-control-tower-scope-success-criteria-and-risks.md) | Produit / POC / MVP candidats, critères, risques — **validé** |
+| [69-control-tower-options-and-decision-pack.md](./69-control-tower-options-and-decision-pack.md) | Options A–D ; Option C **retenue** — **validé** |
+
+### Fast Track Control Tower Vertical Slice (`plan-open`)
+
+| Document | Rôle |
+|----------|------|
+| [70-control-tower-fast-track-architecture-and-contract.md](./70-control-tower-fast-track-architecture-and-contract.md) | Archi minimale, inventaire OPS1, outils, adapters, UX — **`plan-open`** |
+| [71-control-tower-fast-track-backlog-and-delivery.md](./71-control-tower-fast-track-backlog-and-delivery.md) | FT-01…12, lots A/B/C, chemin critique — **`plan-open`** |
+| [72-control-tower-fast-track-decision-pack.md](./72-control-tower-fast-track-decision-pack.md) | D1–D8, risques, gate exécution — **`plan-open`** |
+
+*SFIA Studio — Control Tower **cadrage validé** · Fast Track **plan ouvert** (`70`–`72`) — code / MVP / production **non ouverts** — prochaine gate : `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE`.*
````

---

## 17. Risques / dette / anti-claims

Risques R1–R7 (doc 72). Dette temporaire doc 71 §5.
Anti-claims : plan≠code ; pas MVP/prod ; pas GitHub write ; pas MCP Studio universel ; pas merge.

## 18. Contrôles

```
--- status ---
 M projects/sfia-studio/README.md
?? .tmp-sfia-review/
?? projects/sfia-studio/66-control-tower-product-framing.md
?? projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md
?? projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md
?? projects/sfia-studio/69-control-tower-options-and-decision-pack.md
?? projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md
?? projects/sfia-studio/71-control-tower-fast-track-backlog-and-delivery.md
?? projects/sfia-studio/72-control-tower-fast-track-decision-pack.md
--- stat ---
 projects/sfia-studio/README.md | 39 +++++++++++++++++++++++++++++++--------
 1 file changed, 31 insertions(+), 8 deletions(-)
--- no app code ---
(none)
```

## 19. État Git final (pré-handoff)

- Branche `framing/sfia-studio-control-tower` @ `32e5271842b9a344a7e292614675c27ea8ed941b` inchangé
- Docs non commités (volontaire)
- Aucun push framing

## 20. Verdict

**CONTROL TOWER FAST TRACK PLAN READY FOR MORRIS REVIEW**

ChatGPT : lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

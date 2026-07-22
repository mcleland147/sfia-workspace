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

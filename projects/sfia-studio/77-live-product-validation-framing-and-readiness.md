# SFIA Studio — Live Product Validation — Framing & Readiness

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `77-live-product-validation-framing-and-readiness.md` |
| **Statut** | `live-prep-candidate` — **plan prêt** ; **non exécuté** |
| **Gate consommé** | `GO PRÉPARATION — SFIA STUDIO LIVE PRODUCT VALIDATION` |
| **Gate proposé** | `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` |
| **Base** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` |
| **Branche cadrage** | `framing/sfia-studio-next-product-increment` (locale) |
| **Baseline méthode** | SFIA v2.6 |
| **Statut v3** | V3-MODELED CANDIDATE |
| **Complète** | `78-live-product-validation-execution-decision-pack.md` |

---

## 1. Décision Morris

**Incrément immédiat :** validation live du parcours **existant** avec :

- GPT réel ;
- contexte SFIA canonique (moteur CT / OPS1) ;
- Git local read-only ;
- GitHub read-only via `gh` ;
- D1-C1 → D1-C4 (Project create / NO_MUTATION).

**B′ différée** jusqu’après analyse des résultats.
Ce cycle = **préparation uniquement** (pas d’appel GPT live, pas de mutation Project).

---

## 2. Objectif

Répondre à :

> Le premier parcours SFIA Studio fonctionne-t-il réellement avec GPT, les sources SFIA canoniques et les outils Git/GitHub read-only, de manière utile, fiable, observable et gouvernée ?

---

## 3. Architecture live réelle (Observation)

### 3.1 Deux surfaces runtime (gap structurant)

| Surface | Route | GPT live | Tools Git/GitHub | Contexte canonique | Mutation Project |
|---------|-------|----------|------------------|--------------------|------------------|
| **Control Tower / OPS1** | `/ops1/nouvelle-demande` | Oui (`OPENAI_*`, mode live UI) | Oui (`toolLoop` + adapters) | Oui (`lib/ops1/sfia/**`) | Non (ActionCandidate / gates OPS1) |
| **D1 Intake** | `/nouvelle-demande` | Oui si `D1_INTAKE_LIVE=1` | **Non** (pas de tool loop) | **Non** (prompt C2 local) | Oui via C4 confirm → `createProject` |

**Observation.** Il n’existe **pas** aujourd’hui une conversation unique qui enchaîne GPT+tools+canonique **et** C4 Project.
**Hypothèse de plan :** validation **dual-track** acceptable pour ce GO (preuve du socle sans unifier le code).
**Décision Morris requise :** accepter dual-track **ou** exiger une correction d’unification (hors ce cycle prep → delivery).

### 3.2 Chaîne logique cible (composée)

```
Track CT:  User → OPS1 live → GPT → tools (Git/GitHub) → contexte SFIA → UI tools/sources
Track D1:  User → Intake → GPT live C2 → matching C3 → confirm C4 → Project / NO_MUTATION → Cockpit
```

---

## 4. Matrice d’étapes

| Étape | Runtime | Live prêt | Configuration | Mutation | Gate | Preuve attendue | Réserve |
|-------|---------|-----------|---------------|----------|------|-----------------|---------|
| UI D1-C1 | Oui | Oui | — | Non | — | Route `/nouvelle-demande` | — |
| Provider GPT D1 | Oui | **Config** | `D1_INTAKE_LIVE=1` + `OPENAI_*` | Non | — | mode `live` UI | Défaut = fake |
| Provider GPT OPS1 | Oui | **Config** | `OPENAI_*` + mode live UI | Non | — | badge GPT LIVE | — |
| Tools CT | Oui | Oui si gh/git OK | allowlists | Non | — | tool events UI | — |
| Contexte canonique | Oui (OPS1) | Oui | paths allowlist | Non | — | sources chargées | Pas dans D1 |
| Git local RO | Oui | Oui | repo root | Non | — | head/status/read | — |
| GitHub RO `gh` | Oui | **Probe OK** | `gh auth` | Non | — | repo/branch/PR | OAuth Studio absent (OK mono) |
| Matching C3 | Oui | Oui | — | Non | — | scores / UNAVAILABLE Cycle | — |
| Confirm C4 | Oui | Oui | — | **Oui** create | Humain | audit PROJECT_* | Existing = NO_MUTATION |
| Cockpit | Oui | Oui | — | Non | — | project + audit | Next-step placeholder |
| Cursor exec | Oui OPS1 | **Hors live LPV** | — | Potentiel | Morris GO | — | **NO-GO** ce plan |

---

## 5. GPT live readiness

| Élément | État |
|---------|------|
| Provider | `OpenAIConversationProvider` (`openai`) |
| Env | `OPENAI_API_KEY`, `OPENAI_MODEL` — **présents** dans `.env.local` local (valeurs non exposées) |
| D1 live flag | `D1_INTAKE_LIVE=1` — **absent** du `.env.local` → D1 reste fake jusqu’à config |
| Fail-closed D1 | Live demandé + secrets absents → `CONFIG`, **pas** de fake silencieux |
| OPS1 fake force | `OPS1_CONVERSATION_PROVIDER=fake` |
| Timeout D1 | `D1_INTAKE_PROVIDER_TIMEOUT_MS = 25000` |
| Tool rounds CT | `CT_MAX_TOOL_ROUNDS=4`, `CT_MAX_TOOL_CALLS_PER_ROUND=4` |
| UI D1 mode | hint `mode fake|live` après analyse |
| UI OPS1 | badges FIXTURE / LIVE DISPONIBLE / GPT LIVE |

**Probes ce cycle :** présence config uniquement — **aucun** appel API GPT.

**Scénarios GPT futurs :** nominal, clarification, JSON valide/invalide, timeout, indisponible, tool pertinent/refusé, action non autorisée, limites.

---

## 6. Contexte SFIA canonique

**Chemins core (allowlist fermée) :**

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

**Project context optionnel :** docs `70`, `72`, `73` Studio.

**Baseline runtime :** `SFIA_METHOD_BASELINE = "SFIA v2.6"`.

**Preuves live (track CT) :**

1. Demande fondateurs Studio / méthode → sources core citées/chargées.
2. Demande décision Morris / gates → pas d’invention de GO.
3. Contradiction candidate vs baseline → réserve / stop, pas d’adoption v3.

---

## 7. Git local read-only

Capacités : status, head, search, read_file, diff, worktrees, log — via `gitLocalReadAdapter` + `pathPolicy` (deny write / hors préfixes).

Preuves : HEAD, status, search doc fondateur, read borné template, deny path, deny write, source visible UI.

---

## 8. GitHub read-only via `gh`

| Probe prep (exécutée) | Résultat |
|-----------------------|----------|
| `gh --version` | 2.96.0 |
| `gh auth status` | Logged in `mcleland147` (keyring) ; token **redacted** |
| `gh api user --jq '{login}'` | `mcleland147` |
| `gh repo view mcleland147/sfia-workspace` | `nameWithOwner` OK ; defaultBranch `main` |

Allowlist repo : `mcleland147/sfia-workspace` uniquement.
Transport : `gh_cli` si auth ; sinon REST si `GITHUB_TOKEN` (non requis ici).

Preuves live : compte, repo, branche main, commit, PR #254, checks, deny autre repo, indisponibilité `gh`.

---

## 9. D1-C1 → C4

| Capacité | Live prêt | Note |
|----------|-----------|------|
| C1 shell | Oui | 2 actions ; Reprendre → Workspace |
| C2 live | Config | `D1_INTAKE_LIVE=1` |
| C3 | Oui | déterministe ; Cycle/Action UNAVAILABLE |
| C4 create | Oui | gate humain ; audit |
| C4 existing | Oui | NO_MUTATION + note domaine |

---

## 10. Visibilité produit

| Élément | État |
|---------|------|
| Mode live OPS1 | **Déjà visible** (badges) |
| Mode live D1 | **Partiel** (hint après analyse) |
| Modèle GPT | Partiel / logs — pas de secret |
| Outils appelés/OK/KO | **OPS1 visible** ; D1 N/A |
| Transport GitHub | Partiel (tool events) |
| Proposition / match / confirm | D1 visible |
| Mutation / NO_MUTATION | Visible |
| Erreurs | Visible fail-closed |
| Figma | **Non requis** si dual-track + badges OPS1 suffisent |

---

## 11. Sécurité

| Risque | Contrôle | Preuve | Gap | Bloquant live |
|--------|----------|--------|-----|---------------|
| GPT mute Project | C4 only | Code confirm | — | Non |
| Git write | Policy deny | Unit/E2E | — | Non |
| GitHub write | Tools read-only | Code | — | Non |
| Shell libre | Absent tools | — | — | Non |
| Secret logs/UI | redaction | Code | Vigilance review pack | Non |
| Fake silencieux | CONFIG fail-closed | Code D1/OPS1 | — | Non |
| Repo hors allowlist | CT_GITHUB_REPO_ALLOWLIST | Code | — | Non |
| Cursor exec | Hors scénarios LPV | Plan | Discipline exécution | Non si respecté |
| Dual-surface confusion | Docs | Ce doc | Acceptation Morris | **Décision** |

---

## 12. Performance / coût (candidats)

| Seuil | Valeur candidate | Mécanisme | Gap | Décision |
|-------|------------------|-----------|-----|----------|
| Timeout GPT D1 | 25 s | Code | — | OK |
| Tool rounds | 4×4 | Code | — | OK |
| Read max | 32 KiB / 12k chars result | Code | — | OK |
| Parcours wall-clock | ≤ 10 min / scénario | Manuel | Runbook | Morris soft |
| Port 3020 | 1 serveur | Playwright reuse | Contention connue | Runbook |
| Tokens | Journaliser usage provider si exposé | OPS1 usage fields | Pas de budget $ | Soft |

---

## 13. DoD candidate (non validée)

1. GPT réel répond (OPS1 et/ou D1 selon track).
2. Mode live identifiable.
3. Contexte canonique traçable (track CT).
4. ≥1 lecture Git locale visible.
5. ≥1 lecture GitHub `gh` visible.
6. Aucun outil write.
7. Proposition C2 valide (track D1).
8. Matching C3 déterministe.
9. C4 humain.
10. Project créé + audité.
11. Existing → NO_MUTATION sans faux link.
12. Erreurs visibles.
13. Aucun secret exposé.
14. Négatifs critiques prouvés.
15. Preuves capturées.
16. Tests automatisés existants toujours verts (rejeu ciblé).
17. Verdict A/B/C/D explicite.

---

## 14. Gaps classés

| ID | Gap | Classe | Notes |
|----|-----|--------|-------|
| G1 | `D1_INTAKE_LIVE` non positionné | **A** config | Ajouter `=1` local avant track D1 |
| G2 | Dual-surface (pas d’unification tools dans D1) | **F** Morris | Accepter pour LPV ou exiger delivery |
| G3 | Visibilité live D1 faible vs OPS1 | **C** | Amélioration non bloquante |
| G4 | CI GitHub absente | **D** | Différable |
| G5 | Port 3020 contention | **A/C** | Runbook / un seul serveur |
| G6 | Canonical paths n’incluent pas encore 75–78 | **C** | Optionnel après merge docs |
| G7 | Unifier D1↔toolLoop | **E/B** | Hors prep ; delivery si Morris l’exige |
| G8 | B′ | **E** | Différée |

**Corrections code minimales :** aucune dans ce cycle. Si G2/G7 → cycle delivery séparé.

---

## 15. Plan d’exécution candidat (≤3 lots · ≤12 items)

### Lot 1 — Readiness (config + probes)

1. Vérifier `OPENAI_*` + démarrer app
2. Positionner `D1_INTAKE_LIVE=1`
3. Probe `gh` + Git local HEAD
4. Checklist allowlists / badges live

### Lot 2 — Scénarios live LPV-01…06

5–10. Exécuter scénarios (`78`) — captures + logs

### Lot 3 — Clôture

11. Rejeu tsc/lint/vitest ciblés si dérive
12. Verdict A/B/C/D + impact B′

---

## 16. Stop conditions (exécution future)

- Secret exposé
- Write Git/GitHub tenté/réussi
- Cursor execution hors GO
- Fake substitué en live
- Mutation Project sans confirm
- Unification code improvisée
- Périmètre B′ glissé

---

## 17. Anti-claims

Pas GPT LIVE VALIDATED · pas LIVE PRODUCT READY · pas D1 COMPLETE · pas PROJECT LINKED · pas CYCLE OPENED · pas V3 IMPLEMENTED/ADOPTED · plan ≠ exécution · `gh` local ≠ OAuth produit.

**Statut :** `LIVE PRODUCT VALIDATION PLAN READY` — en attente de GO EXÉCUTION Morris.

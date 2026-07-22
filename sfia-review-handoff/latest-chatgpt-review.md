# Review Pack Full — SFIA Studio Live Product Validation Preparation

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-23 00:57:06 CEST
- **Cycle/profil :** Conception + archi prep + QA readiness · Critical
- **Gate consommé :** GO PRÉPARATION — SFIA STUDIO LIVE PRODUCT VALIDATION
- **Gate proposé :** GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION
- **Repo :** mcleland147/sfia-workspace
- **Worktree :** `/Users/morris/Projects/sfia-workspace-framing-next-increment`
- **Branche :** `framing/sfia-studio-next-product-increment` (non poussée)
- **HEAD/base :** `88fa4658da07156614de270d8172f147535ddbf9` = origin/main `88fa4658da07156614de270d8172f147535ddbf9`
- **Handoff cadrage :** `65fabb8b353265182b72e8e98806b52d7219569f` / blob `dfc74af175f501c4994e4710caa09cbb51dcafdf`
- **Baseline :** SFIA v2.6 · v3 V3-MODELED CANDIDATE

## 2. État Git initial

```
 M projects/sfia-studio/README.md
?? projects/sfia-studio/75-next-product-increment-framing.md
?? projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md
?? projects/sfia-studio/77-live-product-validation-framing-and-readiness.md
?? projects/sfia-studio/78-live-product-validation-execution-decision-pack.md
```

Fichiers attendus présents (75/76/README) conservés ; 77/78 ajoutés. Aucun autre drift projet.

## 3. Décision Morris

Live Product Validation = incrément immédiat. B′ différée. Pas GO delivery / pas exécution live dans ce cycle.

## 4. Architecture live (synthèse)

**Dual-track :** OPS1/CT (`/ops1/nouvelle-demande`) = GPT+tools+canonique ; D1 (`/nouvelle-demande`) = GPT C2 + C3/C4 Project. Pas d’unification runtime. Gap F (acceptation Morris).

## 5. Readiness

- **GPT :** OpenAI provider ; `OPENAI_*` présents `.env.local` (non exposés) ; `D1_INTAKE_LIVE` à activer (A)
- **Canonique :** core paths + project 70/72/73 ; baseline v2.6
- **Git local :** adapters RO + pathPolicy
- **GitHub :** `gh` OK login `mcleland147` ; allowlist `mcleland147/sfia-workspace`
- **D1-C1…C4 :** prêts ; live C2 = config flag
- **Sécurité :** fail-closed ; redaction ; C4 humain ; no write tools
- **Visibilité :** OPS1 forte ; D1 partielle (C)

## 6. Scénarios

LPV-01 create · LPV-02 existing NO_MUTATION · LPV-03 ambiguous · LPV-04 provider down · LPV-05 GH down · LPV-06 canonique — détails dans 78.

## 7. Plan

3 lots / 12 items. Corrections code : aucune ce cycle.

## 8. Post-live → B′

A may resume · B corrections · C rework · D Morris reserves.

## 9. Fichiers

Créés : 77, 78
Modifiés : 75, 76, README
Staged : 0 · Commit projet : non · Push framing : non

## 10. Contenu complet — 77

```markdown
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

```

## 11. Contenu complet — 78

```markdown
# SFIA Studio — Live Product Validation — Execution Decision Pack

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `78-live-product-validation-execution-decision-pack.md` |
| **Statut** | `execution-pack-candidate` — **non autorisé à exécuter** sans GO Morris |
| **Complète** | `77-live-product-validation-framing-and-readiness.md` |
| **Gate proposé** | `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` |
| **Base** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` |

---

## 1. Décisions déjà actées

| Décision | Statut |
|----------|--------|
| Baseline SFIA v2.6 | Actée |
| CT + D1-I1…C4 sur main | Actée (PR #254) |
| Incrément immédiat = Live Product Validation | Actée (Morris) |
| B′ différée | Actée |
| GPT propose / Morris décide / Cursor exécute | Actée |
| Préparation sans appel GPT / sans mutation | Actée (ce cycle) |

---

## 2. Configuration requise (avant Lot 2)

| Variable / outil | Requis | État prep |
|------------------|--------|-----------|
| `OPENAI_API_KEY` | Oui | Présent `.env.local` (non affiché) |
| `OPENAI_MODEL` | Oui | Présent `.env.local` |
| `D1_INTAKE_LIVE=1` | Track D1 | **À ajouter** (config A) |
| Ne pas forcer `D1_INTAKE_PROVIDER=fake` | Track D1 | Vérifier shell/env |
| Ne pas forcer `OPS1_CONVERSATION_PROVIDER=fake` | Track CT | Vérifier |
| `gh` auth | Track CT GitHub | **OK** `mcleland147` |
| Serveur app `:3020` | Oui | Un seul process |
| Données Project test | Track D1 LPV-02 | Créer via LPV-01 ou manuel |

**Interdit d’afficher** clés, tokens, contenus `.env`.

---

## 3. Probes (prep — déjà faites / à refaire au démarrage exécution)

```text
gh --version
gh auth status          # login only ; token redacted
gh api user --jq '{login}'
gh repo view mcleland147/sfia-workspace --json nameWithOwner,defaultBranchRef
git rev-parse HEAD      # depuis repo root
git status -sb
```

Pas d’appel OpenAI en préparation. En exécution : uniquement via UI Studio.

---

## 4. Stratégie dual-track (à confirmer Morris)

| Track | Où | Couvre |
|-------|-----|--------|
| **CT** | `/ops1/nouvelle-demande` mode **live** | GPT + tools Git/GitHub + contexte canonique + UI outils |
| **D1** | `/nouvelle-demande` + `D1_INTAKE_LIVE=1` | C1–C4 + Project create / NO_MUTATION |

**PASS global** exige les deux tracks verts sur leurs scénarios assignés, sauf décision Morris contraire.

---

## 5. Scénarios LPV-01 … LPV-06

### LPV-01 — Création d’un nouveau Project (Track D1)

| Champ | Contenu |
|-------|---------|
| Données | Aucun Project homonyme ; intention réelle non sensible |
| Demande | Ex. « Créer un projet Studio pour documenter la validation live mono-opérateur » |
| Outils attendus | Aucun tool CT (D1) |
| Outils interdits | Write ; Cursor |
| Événements | mode live ; proposal CREATE ; match NO_MATCH/faible ; confirm ; PROJECT_CREATED |
| Résultat | Project ACTIVE/DRAFT selon flux ; Cockpit |
| Mutation | **Oui** (après confirm) |
| Audit | `PROJECT_*` visibles |
| Captures | intake → proposal → confirm → cockpit |
| PASS | Project persisté + audit + pas de claim LINKED/CYCLE |
| FAIL | Mutation sans confirm ; fake en live ; erreur opaque |

### LPV-02 — Project existant (Track D1)

| Champ | Contenu |
|-------|---------|
| Données | Project créé en LPV-01 (nom/objectif proches) |
| Demande | Intention référençant ce Project |
| Événements | STRONG/POSSIBLE match ; confirm existing ; **NO_MUTATION** + note domaine |
| Mutation | Non |
| PASS | Navigation Project OK ; note visible ; pas PROJECT LINKED |
| FAIL | Création dupliquée silencieuse ; claim link |

### LPV-03 — Ambiguë (Track D1)

| Champ | Contenu |
|-------|---------|
| Demande | Intention vague (« je veux avancer sur SFIA ») |
| Attendu | Clarification NEED_CLARIFICATION ; pas d’outils CT ; pas mutation |
| PASS | Questions claires ; aucune proposition exécutable prématurée |
| FAIL | Create Project sans clarif ; fake tools |

### LPV-04 — Provider indisponible (Track D1 ou OPS1)

| Champ | Contenu |
|-------|---------|
| Setup | Live demandé + clé retirée temporairement **ou** modèle invalide (sans commit) |
| Attendu | Erreur CONFIG/PROVIDER claire ; **pas** de fallback fake silencieux |
| Mutation | Non |
| PASS | Message actionnable ; reprise après restauration config |
| FAIL | Fake silencieux ; mutation |

### LPV-05 — GitHub indisponible (Track CT)

| Champ | Contenu |
|-------|---------|
| Setup | Session OPS1 live ; simuler indispo `gh` (PATH / logout temporaire) **ou** tool deny |
| Attendu | Erreur transport explicite ; Git local peut réussir ; pas de faux succès GH |
| PASS | UI montre échec GH ; proposition/analyse partielle honnête |
| FAIL | Succès GH inventé ; crash non récupérable |

### LPV-06 — Source canonique / contradiction (Track CT)

| Champ | Contenu |
|-------|---------|
| Demande | Exiger template/routing **et** tenter d’obtenir une « adoption v3 » ou Cycle inventé |
| Attendu | Sources core chargées ; refus d’improviser doctrine ; anti-claims respectés |
| Outils | git_local_read / search sur allowlist |
| PASS | Citations/paths réels ; pas V3-ADOPTED ; pas CYCLE OPENED |
| FAIL | Prompt Cursor inventé ; doctrine hors repo |

### Couverture tools (Track CT — intégrée à LPV-05/06 + smoke)

Ajouter smoke CT en Lot 2 :

- `git_local_get_head` / `git_local_get_status`
- `github_get_repository` ou `github_get_branch`
- deny path hors allowlist

---

## 6. Critères PASS/FAIL globaux

**PASS (verdict A candidate)** si :

- LPV-01, 02, 03 PASS (D1)
- LPV-04 PASS (au moins un track)
- LPV-05, 06 PASS (CT)
- Smoke Git+GitHub PASS
- Aucun secret exposé
- DoD `77` §13 items 1–15 satisfaits

**PARTIEL (B)** si nominal OK mais ≥1 négatif critique flaky/non prouvé, ou visibilité insuffisante.

**NOT READY (C)** si fail-closed cassé, write possible, confusion fixture/live, ou GPT autorise mutation.

**WITH RESERVES (D)** si A sauf réserves documentées acceptables (ex. dual-track, badge D1 minimal).

---

## 7. Corrections candidates (pas dans ce cycle)

| Gap | Classe | Fichier probable | Effort | Gate |
|-----|--------|------------------|--------|------|
| `D1_INTAKE_LIVE` | A | `.env.local` local | S | Aucun (config) |
| Badge live D1 renforcé | C | `IntakeView` / rail | S | Delivery optionnel |
| Unifier tools dans D1 | B/F | intake + toolLoop | L | GO delivery + archi |
| CI | D | `.github` | M | GO tooling |

---

## 8. Lots / items (exécution)

| Lot | Item | Objectif | AC | Effort |
|-----|------|----------|----|--------|
| 1 | R1 | Config OpenAI + D1 live flag | Live D1 possible | S |
| 1 | R2 | Probes gh + git | Auth OK | S |
| 1 | R3 | App up :3020 unique | UI joignable | S |
| 2 | S1 | LPV-01 | PASS table | M |
| 2 | S2 | LPV-02 | PASS | M |
| 2 | S3 | LPV-03 | PASS | S |
| 2 | S4 | LPV-04 | PASS | S |
| 2 | S5 | LPV-05 + smoke GH/Git | PASS | M |
| 2 | S6 | LPV-06 + canonique | PASS | M |
| 3 | V1 | Captures/logs rangés `.tmp-sfia-review/` | Dossier preuves | S |
| 3 | V2 | Verdict A/B/C/D | Doc clôture | S |
| 3 | V3 | Impact B′ | Décision pack update | S |

**Total items : 12.** Pas de B′. Pas de Cursor write/exec.

---

## 9. Risques

- Confusion OPS1 vs D1 (opérateur)
- `.env` exporté dans logs
- Port 3020 double serveur
- Coût tokens OpenAI
- Tentation d’« améliorer » le code mid-flight

---

## 10. Arbitrages Morris (exécution)

1. **GO EXÉCUTION** oui/non
2. Dual-track accepté ?
3. Budget temps / tokens soft ?
4. Qui capture les preuves (Morris / Cursor) ?
5. Autoriser correctif **config only** mid-run ?

---

## 11. Gate d’exécution proposé

```text
GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION
```

Périmètre = ce pack + `77`.
Hors périmètre = B′, GuidedSession, Cycle runtime, writes, OAuth, CI, Figma.

---

## 12. NO-GO

- Claim live validé avant fin Lot 3
- B′ / C5 naming
- Git/GitHub write
- Cursor execution
- Commit/push/PR pendant live
- Secrets dans handoff
- Fallback fake silencieux

---

## 13. Verdicts post-live → B′

| Verdict | Libellé | B′ |
|---------|---------|-----|
| **A** | LIVE PRODUCT VALIDATED — OPTION B′ FRAMING MAY RESUME | Reprise cadrage B′ autorisable |
| **B** | LIVE PRODUCT PARTIALLY VALIDATED — CORRECTIONS REQUIRED | B′ différée ; correctifs |
| **C** | LIVE PRODUCT NOT READY — ARCHITECTURE OR PROVIDER REWORK REQUIRED | B′ fermée |
| **D** | LIVE PRODUCT VALIDATED WITH RESERVES — MORRIS DECISION REQUIRED | Morris tranche B′ |

---

## 14. Anti-claims

Ce document n’autorise pas l’exécution.
Il ne valide pas GPT live ni le produit.
Il ne rouvre pas B′.

**Prochaine action :** Décision Morris sur `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION`.

```

## 12. Contenu complet mis à jour — 75

```markdown
# SFIA Studio — Cadrage du prochain incrément produit

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `75-next-product-increment-framing.md` |
| **Statut** | `framing-candidate` — trajectoire **réordonnée** (Live Validation prioritaire) |
| **Gate consommé (cadrage)** | `GO CADRAGE — SFIA STUDIO NEXT PRODUCT INCREMENT` |
| **Décision Morris ultérieure** | `GO PRÉPARATION — SFIA STUDIO LIVE PRODUCT VALIDATION` (2026-07-23) |
| **Gate de sortie demandé (live prep)** | `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` |
| **Base Git** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` (PR #254 squash) |
| **Branche cadrage locale** | `framing/sfia-studio-next-product-increment` (**non poussée**) |
| **Baseline méthode** | **SFIA v2.6** |
| **Statut v3** | **V3-MODELED CANDIDATE** |
| **Autorité** | Morris (L0) — aucune option n’est une décision |

> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris requise**.

---

## 1. Contexte post-merge

**Observation.** La PR [#254](https://github.com/mcleland147/sfia-workspace/pull/254) a intégré sur `main` le Control Tower Fast Track et la fondation D1-I1 → D1-C4 (312 fichiers, squash `88fa465…`). Post-merge : tests D1 52/52, OPS1 105/105, E2E 50/50, lint/tsc/build PASS ; CI GitHub absente.

**Formulation correcte.** Control Tower Fast Track et D1-I1 à D1-C4 constituent la nouvelle **base produit intégrée** sur `main`, sous baseline méthode SFIA v2.6.

**Anti-claims.** Pas D1 COMPLETE · pas PROJECT LINKED · pas CYCLE OPENED · pas ACTION RESUMED · pas GUIDED SESSION STARTED · pas SFIA v3.0 IMPLEMENTED/ADOPTED · pas de prochain incrément validé avant GO Morris · capacités Studio ≠ promotion méthode.

---

## 1bis. Décision Morris — incrément immédiat = Live Product Validation

**Décision Morris (actée — préparation).** L’incrément immédiat n’est **pas** B′. C’est la **validation live du parcours existant** :

- GPT réel ;
- contexte SFIA canonique (surface Control Tower / OPS1) ;
- Git local read-only ;
- GitHub read-only via `gh` ;
- parcours D1-C1 → D1-C4 (création / sélection Project).

**Conséquence pour B′.** Option B′ — Project → Controlled Cycle Proposal — reste une **extension fonctionnelle candidate différée**. Elle ne doit être réouverte qu’**après** analyse des résultats live (`77`/`78`). Ce document conserve l’analyse B′ ci-dessous comme capitalisation ; elle n’est **pas** le périmètre d’exécution immédiat.

**Séquence mise à jour :**

```
Palier actuel (main)
  → Live Product Validation (préparation → exécution → verdict)
  → décision Morris (A/B/C/D live)
  → éventuelle reprise framing B′ / architecture Cycle proposal
```

Documents de préparation live : `77-live-product-validation-framing-and-readiness.md`, `78-live-product-validation-execution-decision-pack.md`.

---

## 2. État produit réel (code + contrats)

### A. Capacités réellement disponibles

| Capacité | Preuve runtime |
|----------|----------------|
| Control Tower tools + allowlist + tool loop | `lib/ops1/tools/**`, `conversation/toolLoop.ts` |
| Contexte SFIA canonique + ActionCandidate OPS1 | `lib/ops1/sfia/**`, report reinjection |
| Project SQLite + Workspace + Cockpit | `lib/d1/db.ts`, routes `/workspace`, `/projects/*` |
| Audit Project + idempotence create | `d1_audit_events`, `d1_idempotency_keys` |
| Intake conversationnel `/nouvelle-demande` | D1-C1 → C4 UI |
| Proposition structurée non exécutable | `lib/d1/intake/**` (fake défaut) |
| Matching Projects déterministe | `lib/d1/context/**` |
| Confirmation + createProject | `lib/d1/confirmation/**` |

### B. Capacités partiellement disponibles

| Capacité | Limite |
|----------|--------|
| Outcome `OPEN_CYCLE_CANDIDATE` | Proposable par C2 ; **aucune** ouverture Cycle |
| Action recommandée `OPEN_CYCLE_IN_PROJECT` | Émise en matching ; Cycle source **UNAVAILABLE** |
| Cockpit « prochaine action » | Texte placeholder ; pas de commande |
| MethodMode | Gouvernance interne ; UI lecture seule |
| OPS1 Session / Gate / Action | Maturité CT/OPS1 ; **non rattachés** à D1 Project |

### C. Capacités modélisées seulement (candidate)

- Schémas `sfia-v3-modeled/schemas/cycle/*` (CycleInstance, GuidedSession, TransitionProposal, ContextSnapshot)
- Schémas project trajectory / review bundle
- Docs `sfia-v3-framing/**`, `sfia-v3-design/**`, delivery packs D1

### D. Capacités absentes (runtime)

- Objet Cycle D1 / repository / commandes
- GuidedSession produit
- Relation persistante Intake → Project
- Source Cycle/Action dans snapshot contexte (= `UNAVAILABLE`, non simulé)
- Gate produit « ouvrir Cycle » avec mutation
- CI GitHub sur la branche Studio

### E–H. Contrats manquants / dettes / UX coupée

| Type | Élément |
|------|---------|
| Contrat manquant | Intake→Project persistence (`EXISTING PROJECT CONFIRMATION PERSISTENCE NOT IMPLEMENTED`) |
| Contrat manquant | Project→Cycle runtime |
| Dette acceptée | UX-R04 · GPT live hors critère · CI absente · `.tmp-sfia-review/` |
| Dette bloquante pour la *suite méthodologique* | Pas d’objet/commande Cycle ; cockpit sans suite démontrable |
| Expérience interrompue | Après create/confirm Project → Cockpit sans prochaine étape exécutable |

---

## 3. Matrice du parcours (où ça s’arrête)

Parcours cible observé :

demande → proposition → matching → confirmation → Project créé/sélectionné → **suite méthodologique**

| Étape | Disponible | Persistée | Auditée | Gate | UX | Limite |
|-------|------------|-----------|---------|------|----|--------|
| Décrire besoin (intake) | Oui | Non (React local + `sessionLocalId`) | Events structurés logs | Non | Oui | Pas d’objet Intake DB |
| Proposition C2 | Oui | Non | Logs | Non | Oui | Non exécutable |
| Matching C3 Projects | Oui | Snapshot éphémère | Logs | Non | Oui | Cycle/Action UNAVAILABLE |
| Confirm create Project | Oui | Oui (SQLite) | `PROJECT_*` | Humain C4 | Oui | — |
| Confirm existing Project | Oui | **Non** (NO_MUTATION) | Non métier link | Humain | Oui | Contrat link absent |
| Suite Cycle / GuidedSession | **Non** | — | — | — | Placeholder | **Rupture actuelle** |
| Action / exécution Cursor depuis Project | Non (OPS1 parallèle) | OPS1 own DB | OPS1 | OPS1 gates | OPS1 UI | Pas de lien Project |

**Observation.** La rupture utilisateur réelle après D1-C4 est : *« J’ai un Project ; quelle est la prochaine étape méthodologique contrôlée ? »* — pas « polish » ni « CI » en premier.

---

## 4. Discovery domaine

### 4.1 Project (existe — runtime)

- Identité `projectId`, états `DRAFT|ACTIVE`, version, workspace, owner mono-opérateur
- Commandes : create / selectMethodMode / activate (I1)
- Repository SQLite `d1_projects` + assignments + audit + idempotency
- **Pas** de FK Cycle, pas de table intake_link

### 4.2 Intake (partiel — non persistant)

- Session React + `sessionLocalId` ; proposals / match / confirmation intents en mémoire
- Events d’observabilité (pas table métier)
- Durée de vie = session navigateur
- Reprise : Workspace liste Projects ; **pas** reprise d’un intake lié

### 4.3 Cycle (candidate schema only)

- `cycle-instance.schema.json` : `cycleId`, `projectId`, states PROPOSED…CANCELLED, profile, cycleType
- **Aucun** code `lib/d1/cycle/**`, aucune table SQLite D1
- Snapshot C3 force `cycleSourceStatus: UNAVAILABLE`
- UI historique `/cycle-actif` = Increment VS/POC, **pas** Cycle D1

### 4.4 GuidedSession (candidate schema only)

- Schema modeled ; ownership Project/Cycle documenté en framing v3
- **Absent** du runtime D1 ; distinct conceptuellement d’OPS1 Session

### 4.5 Action / Gate / Decision / OPS1

| Objet | Statut | Réutilisabilité |
|-------|--------|-----------------|
| OPS1 Session | Runtime mature | Exécution CT ; **pas** ownership Project |
| ActionCandidate (OPS1/sfia) | Runtime | Propose/deny/compile ; lié session OPS1 |
| Gate OPS1 I3 | Runtime | Confirmation exécution Cursor |
| Decision Center UI | P0/VS fixture | Non rattaché D1 Project |
| Gate produit « ouvrir Cycle » | Absent | À concevoir si Option B/C |

### 4.6 Relations

| Relation | Code | Schema candidate | Exemple | N’existe pas | Réutilisable | Migration ? |
|----------|------|------------------|---------|--------------|--------------|-------------|
| Intake → Project | Non (NO_MUTATION) | Non dédié | Non | Oui | — | Oui si objet/lien |
| Project → Cycle | Non | Oui (`projectId` requis) | Oui | Runtime | Schema guide | Oui (table cycle) |
| Cycle → GuidedSession | Non | Oui | Oui | Oui | — | Oui |
| GuidedSession → ActionCandidate | Non | Partiel | — | Oui | OPS1 patterns | Décision archi |
| Cycle → Gate/Decision | Non | Decision schemas | Oui | Runtime D1 | OPS1 analogie | Oui |
| Project → OPS1 Session | Non | Non | Non | Oui | Adapter futur | Décision |
| Project/Cycle → Git ref | OPS1 sfia context | Git schema | Oui | Lien D1 | CT engine | Optionnel |
| Project/Cycle → Review bundle | Non | Oui | Oui | Runtime | — | Ultérieur |

---

## 5. Options (candidates — non décisions)

### Option A — Consolider Intake → Project

**Objectif candidat.** Persister une relation explicite intake confirmé ↔ Project ; lever le `NO_MUTATION` *uniquement* avec vrai contrat.

| Critère | Évaluation |
|---------|------------|
| Valeur utilisateur immédiate | **Faible–moyenne** seule (reprise technique) |
| Continuité vision | Favorable (intégrité domaine) |
| Fondation domaine | Forte |
| Risque architecture | Moyen (nouveau objet/lien) |
| Effort | **M** |
| Utile maintenant ? | Partiellement — surtout comme **sous-lot** |

**Challenge.** Seul, ne répond pas à « prochaine étape méthodologique ». Solution plus simple : conserver NO_MUTATION + note jusqu’à un vertical qui consomme le lien.

### Option B — Project → proposition de Cycle (PROPOSED_ONLY)

**Objectif candidat.** Depuis Cockpit (Project ACTIVE), proposer le prochain Cycle SFIA (type, profil, blocs, risques, sources) via moteur canonique / routing ; confirmation humaine ; résultat **PROPOSED_ONLY** **sans** objet Cycle persistant (ou avec artefact de proposition auditée bornée, sans claim CYCLE OPENED).

| Critère | Évaluation |
|---------|------------|
| Valeur utilisateur immédiate | **Forte** |
| Continuité vision CT | Favorable |
| Fondation domaine | Moyenne (prépare C sans simuler) |
| Risque architecture | Moyen (couche proposition temporaire) |
| Réutilisation | Forte (sfia context, routing, patterns C2/C4) |
| Duplication OPS1 | Neutre–faible si ownership « proposal produit » clair |
| Effort | **M** |
| Utile maintenant ? | **Oui** |

**Challenge.** Ne pas présenter la proposition comme Cycle ouvert. Ne pas mélanger Session OPS1 et proposition produit. Gate Morris architecture léger puis delivery.

### Option C — Fondation Cycle minimale + ouverture contrôlée

**Objectif candidat.** Table/repository Cycle, états minimaux, propose → confirm → open idempotent + audit.

| Critère | Évaluation |
|---------|------------|
| Valeur | Forte *si* contrat mûr |
| Fondation | **Très forte** |
| Risque | **Élevé** (surdimensionnement, migration, états) |
| Schema readiness | Moyenne (candidate 0.1.0-d1, non runtime-prouvé) |
| Effort | **L** |
| Utile maintenant ? | Possible mais **prématuré** sans archi dédiée |

**Challenge.** Ouvrir un Cycle simulé / incomplet = faux succès. Exiger **GO ARCHITECTURE** avant delivery.

### Option D — GuidedSession avant Cycle persistant

**Objectif candidat.** Session guidée Project-scoped ; Cycle reste proposition.

| Critère | Évaluation |
|---------|------------|
| Valeur distincte vs Intake/OPS1 | **Faible–incertaine** |
| Risque objet intermédiaire | **Élevé** |
| Effort | **L** |
| Utile maintenant ? | Non prioritaire |

**Challenge.** Ownership flou vs IntakeView et Ops1SessionScreen → déprioriser.

### Option E — Industrialisation (CI, gitignore, cleanup)

| Critère | Évaluation |
|---------|------------|
| Valeur utilisateur | Faible |
| Dette outillage | Réelle mais **non bloquante** du parcours |
| Effort | **S–M** |
| Traitement | **Parallèle / cleanup séparé** |

### Option F — UX-R04 polish D1-I1→C4

| Critère | Évaluation |
|---------|------------|
| Irritants | Présents mais secondaires vs rupture Cycle |
| Effort | **M** (+ Figma possible) |
| Priorité | Différée après suite méthodologique |

### Options supplémentaires

- **B′** : Option B + sous-lot A minimal (lier confirmation existing → `projectId` dans un *proposal binding* audit-only) — recommandé comme packaging vertical.
- **Non-option** : L5 global, multi-user, billing, promotion v3 — **NO-GO**.

---

## 6. Matrice comparative (synthèse)

| Option | Valeur UX | Fondation | Risque | Effort | Verdict cadrage |
|--------|-----------|-----------|--------|--------|-----------------|
| A | Faible seule | Forte | Moyen | M | Sous-lot / différée seule |
| **B** | **Forte** | Moyenne | Moyen | M | **Recommandée** |
| C | Forte | Très forte | Élevé | L | Alternative si Morris veut fondation d’abord |
| D | Faible | Moyenne | Élevé | L | Différée |
| E | Faible | Outillage | Faible | S–M | Parallèle |
| F | Moyenne | Nulle | Faible | M | Différée |

---

## 7. Recommandation (historique de cadrage) + priorité live

### Priorité immédiate (Décision Morris)

**Live Product Validation** du parcours existant — voir `77` / `78`.
Ce n’est **pas** une validation déjà exécutée.

### Recommandation fonctionnelle différée (toujours candidate)

**Option B′ — « Project → Controlled Cycle Proposal (PROPOSED_ONLY) »**
reste la recommandation d’*extension* après preuve live, avec sous-lot A *minimal* éventuel.

**Identifiant candidat (non validé) :** `D1-NEXT` / `D1-C5-candidate` — **pas** « C5 validé ».

**Rationnel (conservé).**

1. Traite la rupture utilisateur après C4.
2. Réutilise le moteur de contexte canonique et les patterns propose→confirm.
3. Évite de simuler un Cycle runtime.
4. Prépare Option C sans fausse adoption.
5. Démontrable après que le live du socle soit prouvé.

### Alternative de repli (toujours)

**Option C** avec **GO ARCHITECTURE Cycle foundation** si Morris préfère la fondation Cycle après (ou à la place de) B′.

### Différées

- B′ / C / D / F — **après** verdict live
- E — parallèle tooling possible pendant/après live
- A seule — insuffisante comme incrément visible

### Préconditions

- Main reste @ PR #254 (ou compatible)
- Pas de promotion v3
- Architecture technique courte (schéma proposition, audit events, anti-claims) avant code
- Fake provider OK pour DoD ; live GPT non critère

### Périmètre candidat

- Point d’entrée : Project Cockpit (`ACTIVE`)
- Génération proposition Cycle (type/profil/blocs/risques/sources) **non exécutable**
- Gate humain Confirm / Refine / Cancel / Analyze-only
- Résultat `CYCLE_PROPOSAL_RECORDED` ou équivalent **PROPOSED_ONLY**
- Audit append-only sur Project (nouveaux event types bornés)
- Tests unit + E2E ; pas de table Cycle obligatoire

### Hors périmètre

- Persistance CycleInstance / GuidedSession
- Claim CYCLE OPENED
- Exécution Cursor depuis ce flux
- Refonte OPS1
- UX-R04 global / Figma delivery
- CI GitHub (sauf cycle parallèle)
- package.json / migrations SQL versionnées hors embed justifié

---

## 8. Incrément vertical candidat (≤ 3 lots · ≤ 12 items)

**Problème utilisateur.** Après création/confirmation d’un Project, l’utilisateur ne peut pas obtenir une suite méthodologique contrôlée.

**Utilisateur cible.** Morris / opérateur Studio mono-acteur (I1).

**Départ.** Project Cockpit `ACTIVE` (post C4 ou manuel).

**Arrivée.** Proposition de Cycle affichée, confirmée ou refusée, avec preuve audit ; **aucun** Cycle ouvert.

### Parcours nominal

1. Ouvrir Cockpit Project ACTIVE
2. Déclencher « Proposer la prochaine étape méthodologique »
3. Système produit proposition (sources + rationale)
4. Humain confirme
5. Système enregistre PROPOSED_ONLY + audit
6. UI affiche statut proposition (pas CYCLE OPENED)

### Alternatifs

- Refine / Cancel / Analyze-only
- Indisponibilité contexte → message honnête
- Project DRAFT → refuse ou invite activation

### Lots candidats

| Lot | Contenu | Items (max) |
|-----|---------|-------------|
| L1 | Contrat proposition + génération (reuse sfia/routing) | 4 |
| L2 | UI Cockpit + gate confirm + anti-claims | 4 |
| L3 | Audit/idempotence + tests E2E + (opt) binding projectId | 4 |

### DoD candidate (non validée)

- E2E nominal + refine/cancel
- Aucun claim CYCLE OPENED / PROJECT LINKED
- Audit lisible Cockpit
- tsc/lint/vitest/e2e ciblés verts
- Docs delivery pack incrément

**Stop conditions.** Besoin d’objet Cycle persistant pour « réussir » ; mélange OPS1 Session ; dépendance live GPT ; migration hors périmètre.

**Figma.** Non requis pour ce cadrage ; **oui** pour un cycle design si polish/layout Cockpit dense (frames : Cockpit next-step, Proposal panel, Confirm gate, Proposed-only result).

---

## 9. UX fonctionnelle (sans maquette)

- Entrée : section « Prochaine action » Cockpit (remplace placeholder)
- Visible : Project name/state ; sources utilisées ; proposition Cycle (type, profil, blocs)
- Statut proposition : `DRAFT_UI` → `AWAITING_CONFIRM` → `PROPOSED_ONLY` | `CANCELLED`
- Gate : Confirmer / Affiner / Annuler / Analyze-only
- Après confirm : badge/statut honnête « Proposition enregistrée — Cycle non ouvert »
- Indisponibilité : message contrat/source manquante
- Retour Workspace inchangé
- Audit : timeline étendue
- **Interdit :** toast « Cycle ouvert », simulation liste Cycles

---

## 10. Industrialisation (classement)

| Sujet | Classe |
|-------|--------|
| CI GitHub absente | Parallèle / différable (non bloquant incrément B) |
| `.tmp-sfia-review/` non ignoré | Cleanup séparé |
| Branche delivery historique | Cleanup séparé (GO dédié) |
| GPT live | Différable (hors DoD) |
| Contention port 3020 E2E | Avant delivery (runbook / config test) — parallèle |
| SQLite embed D1 | Acceptable ; migrations versionnées si Option C |
| README metadata stale (SHA/status locaux) | Réserve documentaire — ne pas réécrire 66–74 |

---

## 11. Trajectoire candidate (non backlog validé)

```
Palier actuel
  CT + OPS1 + D1-I1…C4 (main 88fa465)

Palier immédiat (Décision Morris)
  Live Product Validation (GPT + canonique CT + Git/GitHub RO + D1-C1…C4)

Palier suivant candidat (conditionnel — après verdict live)
  Project → Controlled Cycle Proposal (PROPOSED_ONLY)  [Option B′]

Paliers ultérieurs possibles
  Cycle foundation persistante (Option C)
  → GuidedSession
  → ActionCandidate rattaché
  → exécution Cursor
  → rapport / décision / reprise
```

| | |
|--|--|
| Prochain incrément **immédiat** | Live Product Validation |
| Prochain incrément **fonctionnel différé** | B′ (si live OK) |
| Dépendances B′ | Verdict live A ou D accepté |
| Différé | D, F, live GPT comme *critère de release produit* permanent |
| Preuves live | Scénarios LPV-01…06 (`78`) |
| Gates | GO EXÉCUTION LIVE → verdict → éventuel GO ARCHITECTURE B′ |
| Dette temporaire OK | Dual-surface OPS1/CT + D1 jusqu’à décision Morris |
| Dette interdite | Simuler Cycle ; confondre fixture et live ; V3-ADOPTED |

---

## 12. Risques · réserves · dette

**Risques.** Couche proposition qui devient permanente ; confusion OPS1 ; pression pour « ouvrir » trop tôt ; README historique trompeur.

**Réserves.** Link intake→Project ; Cycle UNAVAILABLE ; UX-R04 ; CI ; GuidedSession non choisie.

**Dette.** Event types audit à étendre ; éventuelle table `d1_cycle_proposals` si on refuse le JSON opaque — **préférer table/contrat explicite** à un blob non typé.

---

## 13. Gates Morris

1. **GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION** (immédiat — demandé via `78`)
2. Après live : appliquer verdict A/B/C/D (`78` § verdicts)
3. Si live OK et Morris le souhaite : **GO ARCHITECTURE — CYCLE PROPOSAL (B′)**
4. Si C retenu : **GO ARCHITECTURE Cycle foundation**
5. Parallèle optionnel : **GO CLEANUP** / CI / gitignore

~~GO VALIDATION CADRAGE pour B′~~ — **différé** tant que la preuve live n’est pas tranchée.

---

## 14. Anti-claims (rappel)

Ce document ne valide **aucune** option.
Il ne revendique pas D1 COMPLETE, PROJECT LINKED, CYCLE OPENED, ni SFIA v3 IMPLEMENTED/ADOPTED.

**Statut :** `framing-candidate` — en attente de décision Morris.

```

## 13. Contenu complet mis à jour — 76

```markdown
# SFIA Studio — Options et decision pack — prochain incrément produit

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `76-next-product-increment-options-and-decision-pack.md` |
| **Complète** | `75-next-product-increment-framing.md` |
| **Statut** | `decision-pack-candidate` — priorité **Live Product Validation** actée ; B′ différée |
| **Base** | `origin/main` @ `88fa4658da07156614de270d8172f147535ddbf9` |
| **Gate immédiat demandé** | `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` |
| **Compléments live** | `77`, `78` |

---

## 1. Décisions déjà actées (ne pas rouvrir)

| Décision | Source |
|----------|--------|
| Baseline méthode = SFIA v2.6 | Manifest / operating model |
| SFIA v3.0 = V3-MODELED CANDIDATE (non adopté) | Framing v3 + anti-claims D1 |
| CT Fast Track + D1-I1→C4 intégrés sur main | PR #254 / post-merge |
| Existing Project confirm = NO_MUTATION tant que contrat link absent | D1-C4 delivery |
| Cycle/Action sources = UNAVAILABLE (non simulés) | D1-C3 code |
| GPT propose / Morris décide / Cursor exécute | Operating model |
| L5 global interdit | Doctrine Studio |
| Pas de package.json / deps dans le lot CT/D1 | PR readiness |
| **Incrément immédiat = Live Product Validation** (GPT + canonique CT + Git/GitHub RO + D1-C1…C4) | Morris — GO PRÉPARATION LIVE (2026-07-23) |
| **Option B′ différée** jusqu’après analyse des résultats live | Même décision |

## 2. Décisions à ne pas rouvrir dans ce decision pack

- Réécrire l’histoire des docs 66–74
- Promouvoir v3 en baseline
- Refondre OPS1 pour « coller » à D1 sans preuve
- Rendre GPT autorisateur
- Traiter CI comme substitut de valeur produit
- Valider « C5 » / B′ par simple naming **avant** preuve live
- Inclure B′ dans le périmètre d’exécution live

---

## 3. Options synthétiques

| ID | Titre | Intention | Effort | Reco cadrage |
|----|-------|-----------|--------|--------------|
| A | Intake → Project persistence | Contrat link / reprise | M | Sous-lot éventuel |
| **B / B′** | Project → Cycle proposal PROPOSED_ONLY | Suite méthodologique visible | M | **Principale** |
| C | Cycle foundation + open contrôlé | Objet Cycle runtime | L | Alternative |
| D | GuidedSession d’abord | Session guidée Project | L | Différée |
| E | Industrialisation CI/hygiène | Outillage | S–M | Parallèle |
| F | UX-R04 polish | UX sans nouveau domaine | M | Différée |

Détail et challenge : voir `75`.

---

## 4. Impacts par option

### A — Intake → Project

| Impact | Contenu |
|--------|---------|
| Domaine | Nouveau lien ou objet intake |
| UX | Reprise ; peu de « wow » seul |
| Migration | Probable (table) |
| Anti-claim | Toujours pas PROJECT LINKED tant que sémantique floue |
| Conséquence si choisi seul | Technique sans suite Cycle |

### B / B′ — Cycle proposal

| Impact | Contenu |
|--------|---------|
| Domaine | Contrat *proposal* (+ audit) ; pas CycleInstance |
| UX | Cockpit débloqué |
| Migration | Faible à moyenne (events / table proposals) |
| Anti-claim | Strict PROPOSED_ONLY |
| Conséquence | Prépare C ; dette temporaire de couche proposal |

### C — Cycle foundation

| Impact | Contenu |
|--------|---------|
| Domaine | Table Cycle + états + commandes |
| UX | Ouverture réelle possible |
| Migration | Oui |
| Anti-claim | CYCLE OPENED seulement après confirm |
| Conséquence | Archi obligatoire ; risque surdimensionnement |

### D — GuidedSession

| Impact | Ownership vs Intake/OPS1 à clarifier ; délai élevé ; faible valeur immédiate |

### E — Industrialisation

| Impact | Qualité repo ; zéro parcours métier nouveau |

### F — UX-R04

| Impact | Polish ; Figma probable ; ne débloque pas la rupture |

---

## 5. Arbitrages Morris demandés

### Immédiat — Live Product Validation

1. **GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION** (voir `78`)
2. Accepter la validation **dual-surface** (OPS1/CT tools+canonique **et** D1 intake C1–C4) sans unifier le code dans ce cycle ?
3. Autoriser `D1_INTAKE_LIVE=1` local pour le track D1 ?
4. Seuil d’acceptation des réserves (visibilité D1 mode live partielle, etc.)

### Différé — après verdict live

### Décision D1 — Quel prochain incrément **fonctionnel** ?

Choisir **une** trajectoire **après** live :

1. **Reprendre B′** si verdict live A ou D (réserves acceptées)
2. **Retenir C** (Cycle foundation) si live OK mais B′ rejeté
3. **Corrections live** (verdict B) avant toute extension
4. **Rework** (verdict C) — pas d’extension
5. **E/F** seulement si Morris priorise outillage/polish

### Décision D2–D5 (B′)

Inchangées par rapport au cadrage initial — **non ouvertes** tant que live non tranché. Voir historique §5 ci-dessous et `75`.

---

## 5bis. Historique — arbitrages B′ (conservés, non actifs)

### Décision D1 historique — Quel prochain incrément ?

Choisir **une** trajectoire :

1. **Valider recommandation B′** (Cycle proposal PROPOSED_ONLY + sous-lot A optionnel)
2. **Retenir alternative C** (Cycle foundation d’abord) → déclenche GO ARCHITECTURE Cycle
3. **Retenir A seule** (link intake→Project) — non recommandé comme seul incrément
4. **Retenir E ou F** comme prochain cycle — accepte de différer la suite méthodologique
5. **Demander un re-cadrage** si hypothèses contestées

### Décision D2 — Packaging A

Si B′ : inclure le sous-lot Intake→Project **dans** le vertical, **après**, ou **jamais pour cet incrément** ?

### Décision D3 — Artefact de proposition

Préférer :

- events d’audit Project seulement ;
- ou table `d1_cycle_proposals` typée ;
- **interdire** JSON opaque non contractuel comme seul stockage métier.

### Décision D4 — Tooling parallèle

Autoriser un cycle séparé CI / `.gitignore` / cleanup branche delivery **en parallèle** de B′ ? (recommandé : oui, GO distinct)

### Décision D5 — Figma

Exiger un cycle design Figma avant delivery B′ ? (recommandation cadrage : **non** pour MVP fonctionnel ; **oui** si polish layout)

---

## 6. Recommandations (mises à jour)

1. **Immédiat :** exécuter le plan live (`77`/`78`) sous GO EXÉCUTION.
2. **B′ :** rester différée ; ne pas lancer architecture/delivery B′ avant verdict live.
3. **Séquence :**

```
GO EXÉCUTION LIVE PRODUCT VALIDATION
  → collecte preuves LPV-01…06
  → verdict A | B | C | D
  → si A ou D(+accept) : éventuel GO ARCHITECTURE B′
  → si B : correctifs bornés puis re-live
  → si C : rework conception/architecture (pas B′)
```

---

## 7. Gates futurs (proposés)

| Gate | Quand |
|------|-------|
| `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION` | **Immédiat** |
| `GO ARCHITECTURE — SFIA STUDIO CYCLE PROPOSAL CONTRACT` | Si live OK + Morris choisit B′ |
| `GO ARCHITECTURE — SFIA STUDIO CYCLE FOUNDATION` | Si C |
| `GO DELIVERY — …` | Après archi |
| `GO CLEANUP — delivery branch / tmp gitignore / CI` | Optionnel parallèle |
| `GO DESIGN FIGMA — …` | Si D5 = oui |

---

## 8. NO-GO explicites

- Simuler Cycle/Action comme disponibles
- Claim CYCLE OPENED / PROJECT LINKED / D1 COMPLETE / V3-IMPLEMENTED/ADOPTED
- Claim **GPT LIVE VALIDATED** / **LIVE PRODUCT READY** avant exécution + verdict
- GPT comme autorité de mutation
- Automatiser l’arbitrage « quel Cycle ouvrir » sans gate humain
- L5 global / multi-tenant / billing
- Modifier method/** ou promouvoir v3 par ce produit
- Exécuter B′ ou unifier D1↔tools **dans** le cycle live sans GO dédié
- Confondre fixture/fake et live

---

## 9. Conséquences des verdicts live (pour B′)

| Verdict live | Conséquence B′ |
|--------------|----------------|
| **A** LIVE PRODUCT VALIDATED | B′ framing **peut** reprendre |
| **B** PARTIALLY VALIDATED | B′ **reste différée** ; correctifs d’abord |
| **C** NOT READY | B′ **fermée** jusqu’à rework |
| **D** VALIDATED WITH RESERVES | Morris arbitre si B′ peut démarrer malgré réserves |

---

## 10. Ordre recommandé des réponses Morris

1. **GO EXÉCUTION LIVE** (ou blocage motivé).
2. Trancher dual-surface vs exigence d’unification (gap documenté dans `77`).
3. Après live : appliquer A/B/C/D puis rouvrir D1…D5 B′ si pertinent.

---

## 11. Anti-claims

Ce pack ne constitue **pas** une validation live exécutée, **pas** une adoption v3, **pas** une ouverture Cycle, **pas** une validation B′.

**Statut :** préparation live prête — **Décision Morris requise** pour l’exécution.

```

## 14. Diff utile README

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index a3c088b..d036d04 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -503,3 +503,16 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
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
+
+> **Incrément immédiat :** Live Product Validation (préparation faite ; exécution **non** autorisée sans GO Morris).
+> **Option B′** (Cycle proposal) : **différée** jusqu’après verdict live.
+> Gate demandé : `GO EXÉCUTION — SFIA STUDIO LIVE PRODUCT VALIDATION`.

```

## 15. Actions non exécutées

- Appel GPT live
- Mutation Project
- Modification app/**
- Commit/push framing
- PR/merge
- B′ delivery
- Cursor execution
- OAuth / CI / Figma

## 16. État Git final

```
branch=framing/sfia-studio-next-product-increment
HEAD=88fa4658da07156614de270d8172f147535ddbf9
status:
 M projects/sfia-studio/README.md
?? projects/sfia-studio/75-next-product-increment-framing.md
?? projects/sfia-studio/76-next-product-increment-options-and-decision-pack.md
?? projects/sfia-studio/77-live-product-validation-framing-and-readiness.md
?? projects/sfia-studio/78-live-product-validation-execution-decision-pack.md
```

## 17. Verdict

**VERDICT :** LIVE PRODUCT VALIDATION PLAN READY — MORRIS EXECUTION DECISION REQUIRED

Demander à ChatGPT de lire :
- branche `sfia/review-handoff`
- fichier `sfia-review-handoff/latest-chatgpt-review.md`

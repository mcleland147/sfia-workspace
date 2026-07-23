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

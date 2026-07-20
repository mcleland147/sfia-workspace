# 64 — OPS1 Local Controls, CI and Evidence Contract

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `64-ops1-local-controls-ci-and-evidence-contract.md` |
| **Complément** | [`63`](./63-ops1-integration-devops-foundation.md) · [`65`](./65-ops1-integration-devops-decision-pack.md) |
| **Statut** | `VALIDATED WITH RESERVATIONS — G-OPS1-DEVOPS-VAL` — Morris — 2026-07-20 21:27:26 CEST |
| **Horodatage validation** | 2026-07-20 21:27:26 CEST |
| **Base** | `origin/main` @ `6584646…` |

> Matrice des contrôles locaux et CI candidats pour OPS1 — **validée avec réserves** (`G-OPS1-DEVOPS-VAL`, 2026-07-20 21:27:26 CEST).
> Statuts commande : **EXISTS** · **PARTIAL** · **CANDIDATE** · **NOT REQUIRED OPS1**.
> Une commande **CANDIDATE** n’existe pas encore dans le repository comme automatisation OPS1.

---

## 1. Légende des statuts

| Statut | Signification |
|--------|----------------|
| **EXISTS** | Commande ou pratique vérifiable aujourd’hui dans le repo |
| **PARTIAL** | Socle partiel (ex. ignore `.env`) sans outillage complet |
| **CANDIDATE** | À créer dans un futur delivery ou cycle d’implémentation CI/DevOps |
| **NOT REQUIRED OPS1** | Existe éventuellement ailleurs ; hors obligation OPS1 delivery |

Codes retour attendus (convention) : `0` = PASS ; `≠0` = FAIL/STOP ; états métier `REPORT_INCOMPLETE` / `METRICS_INCOMPLETE` ≠ succès silencieux.

---

## 2. Matrice des contrôles

| Contrôle | Portée | Commande actuelle ou candidate | Entrées | Résultat attendu | Preuve | Stop condition | Statut |
|----------|--------|-------------------------------|---------|------------------|--------|----------------|--------|

| Branche / HEAD / base | Git local | `git branch --show-current` · `git rev-parse HEAD` · `git rev-parse origin/main` · `git merge-base` | repo cloné | HEAD = base attendue ou descendante compatible | stdout capturé + SHA | divergence non autorisée / base inconnue | EXISTS |
| Working tree clean (projet) | Git local | `git status --short` | repo | pas de modifs hors allowlist cycle | status dump | modifs hors allowlist | EXISTS |
| Staged vide (pré-commit cycle) | Git local | `git diff --cached --name-only` | index | sortie vide hors staging volontaire | stdout | staging parasite | EXISTS |
| Ignore `.sfia-exec` | Git ignore | `git check-ignore -v <path>` | chemins sous `projects/sfia-studio/.sfia-exec/**` | path ignoré (exit 0 + règle affichée) | sortie `check-ignore` + règle `.gitignore:…:projects/sfia-studio/.sfia-exec/**` | path non ignoré | EXISTS — `CLOSED — EVIDENCE PROVIDED` (2026-07-20 21:16:34 CEST) |
| Version Node Studio (`engines`) | Config | lecture `app/package.json` + recherche `.nvmrc`/CI Studio | package.json | pin canonique présent **ou** absence documentée | dump engines / preuve négative | pin inventé | PARTIAL/OPEN — `TREATED — REMAINS OPEN` (Cas B ; package.json non modifié) |
| Allowlist fichiers cycle | Doc/Git | revue `git diff --name-status` vs allowlist cycle | diff | uniquement fichiers autorisés | diff name-status | fichier hors allowlist | EXISTS (manuel) / CANDIDATE (script) |
| Fichiers protégés 01–62 / method / prompts | Doc/Git | `git diff` + path denylist | diff | aucun touch protégé | diff | modification protégée | EXISTS (manuel) / CANDIDATE (script) |
| Chemins / realpath / racine | Runtime futur | contrôle runner candidat (realpath + prefix root) | chemins contrat | tous chemins sous racine autorisée | log validation paths | échappe racine | CANDIDATE |
| Allowlist Campus360 | Runtime/scénario | validation listes `allowedReads/Modifies/Creates` | contrat gelé | sous-ensemble exhaustif ; pas de wildcard nu | contrat + preuve négative | path hors allowlist / wildcard | CANDIDATE (runtime) ; règles EXISTS en docs `55` |
| Symlinks | Runtime | detect symlink escape post-realpath | paths | deny escape | log | symlink escape | CANDIDATE |
| Environnement filtré | Runtime | env allowlist runner | process env | uniquement vars non sensibles autorisées | dump redacted env keys | secret ou var interdite | CANDIDATE |
| Secrets scan | Local/CI | scanner outillé **CANDIDATE** (gate `GO IMPLEMENT OPS1 SECRET SCANNING`) ; minimal manuel pré-delivery ≠ scanner complet | tree + diff | 0 secret | rapport scan | secret détecté | PARTIAL (`.env*` ignore) / CANDIDATE (outil) — `DEFERRED` |
| Réseau deny default | Runtime | policy network off + probe | runner | pas d’egress sauf exception gate | preuve config + PN si besoin | egress non autorisé | CANDIDATE |
| Remote Git bloqué | Runtime/Git | wrapper git deny push/fetch remote write | commandes git | remote write refuse | log deny + PN-09 | push/PR/merge auto | CANDIDATE (runtime) ; politique EXISTS `OPS1-TECH-CAND-26` |
| Canonicalisation contrat | Runtime | canonical JSON/MD déterministe | contrat | bytes stables | contrat canonique + hash | divergence canon | CANDIDATE |
| Hash SHA-256 `contractHash` | Runtime | sha256(canon) | contrat | hash stable ; ≠ attemptId | fichier hash | mismatch / confusion IDs | CANDIDATE |
| Gate Morris présent | Fonctionnel | vérif artefact gate decision | session | GO explicite avant exec | gateDecision append-only | exec sans gate | CANDIDATE (impl) ; règle EXISTS docs |
| SQLite opérationnel | Runtime | init schema + integrity_check | path sqlite | schema OK ; hors git | log + schema version | sqlite versionné / corrupt | CANDIDATE |
| Append-only artefacts | Runtime | write-once files under artifacts/ | payloads | pas de rewrite | fs evidence | mutation preuve | CANDIDATE |
| Locks / attempts | Runtime | lock session + `executionAttemptId` | sqlite | un attempt actif ; pas retry auto | rows attempt | double exec / retry auto | CANDIDATE |
| Rapport `REPORT_INCOMPLETE` | Runtime/QA | génération rapport strict | preuves | COMPLETED seulement si couverture OK | rapport | COMPLETED silencieux / incomplete ignoré | CANDIDATE |
| Métriques `METRICS_INCOMPLETE` | Obs | collecte métriques déclarées | rapport | manquantes → état explicite + cause | section metrics | métriques absentes silencieuses | CANDIDATE |
| Lint | App Studio | `npm run lint` (cwd `app`) | sources TS/JS | exit 0 | log lint | lint errors | EXISTS |
| Typecheck | App Studio | `npm run typecheck` | tsconfig | exit 0 | log tsc | erreurs TS | EXISTS |
| Tests unitaires | App Studio | `npm test` (vitest run) | __tests__ | exit 0 | rapport vitest | échec test | EXISTS |
| Tests intégration runtime | App/Runtime | suite CANDIDATE (realpath/allowlist/symlink/hash/sqlite/locks/append-only/incomplete/remote/network) — **non créée** | fixtures + fs | exit 0 | rapport | suite absente si exigée par GO | CANDIDATE — `DEFERRED — DELIVERY I1 OR DEVOPS IMPLEMENTATION GATE` |
| E2E | App Studio | `npm run test:e2e` | playwright.config + e2e/ | exit 0 | playwright-report/ (non versionné) | échec E2E | EXISTS |
| Build | App Studio | `npm run build` | sources | build Next OK | log build | échec build | EXISTS |
| Installation déterministe | App Studio | `npm ci` | package-lock.json | node_modules aligné lock | log npm ci | lock drift / install ad hoc | EXISTS (commande npm) ; script wrapper CANDIDATE |
| Diff check whitespace | Git | `git diff --check` | diff | clean | stdout | whitespace errors | EXISTS |
| Markdown / liens docs | Docs | lychee/markdown-link-check **candidat** | docs md | liens OK | rapport liens | lien cassé | CANDIDATE |
| Contrôle fichiers protégés CI | CI future | path filter job | PR files | deny method/prompts/.github studio edits hors GO | check annotation | touch protégé | CANDIDATE |
| Anti-effet distant CI | CI/docs | pas de credentials push ; permissions read | workflow | aucun push depuis job | workflow yaml futur | permission write injustifiée | CANDIDATE |
| Artefacts CI rétention | CI | upload-artifact courte | rapports | retention 7–14j candidate | meta artifact | rétention infinie secrets | CANDIDATE — `DEFERRED — GO IMPLEMENT OPS1 CI REQUIRED` |
| Cleanup worktree/runtime | Ops local | script cleanup sous GO | `.sfia-exec` | suppression gouvernée | preuve cleanup | cleanup sans GO / fuite données | CANDIDATE |
| Harness typecheck/test (hist.) | Harness POC | `npm run typecheck` / `npm test` (cwd harness) | harness/ | vert si utilisé | logs | N/A OPS1 delivery tant que non sélectionné | EXISTS mais NOT REQUIRED OPS1 delivery |
| CI Interv360 | Autre projet | workflow `interv360-ci.yml` | interv360 paths | N/A Studio | — | ne pas invoquer comme CI Studio | EXISTS (autre projet) / NOT REQUIRED OPS1 |


---

## 3. Graphe logique des contrôles (ordre)

```text
[0] Truth Git (branche/HEAD/base/status/staged)
        ↓
[1] Allowlist cycle + fichiers protégés + diff --check
        ↓
[2] Install déterministe (npm ci) — si code touché
        ↓
[3] Secrets scan (local)
        ↓
[4] Lint → Typecheck → Unit → (Integration) → Build → E2E
        ↓
[5] (Runtime delivery) Path/realpath/symlink/allowlist Campus360
        ↓
[6] Env filter + network deny + remote Git deny
        ↓
[7] Contract canon + contractHash + gateDecision
        ↓
[8] SQLite + locks + attemptId (≠ hash)
        ↓
[9] Append-only artefacts + rapport
        ↓
[10] Metrics completeness → PASS | REPORT_INCOMPLETE | METRICS_INCOMPLETE
        ↓
[11] Cleanup gouverné (GO distinct) — hors chemin nominal happy-path
```

CI PR candidate (futur) rejoue un sous-ensemble **sans secrets** des étapes [1]–[4] (+ doc-guard), jamais les effets runtime distants.

---

## 4. Règles fail-closed

1. Toute absence de preuve exigée ⇒ **FAIL** ou **INCOMPLETE**, jamais PASS implicite.
2. Secret détecté ⇒ **STOP** immédiat.
3. Path/symlink/allowlist violation ⇒ **STOP** ; pas d’exécution.
4. Remote Git write tenté ⇒ **STOP** + preuve négative.
5. Retry automatique après échec attempt ⇒ **STOP** (interdit).
6. `COMPLETED` avec preuves/métriques manquantes ⇒ **STOP** / invalidation.

---

## 5. Convention de rapport de contrôle

```text
controlId: <id>
status: PASS | FAIL | REPORT_INCOMPLETE | METRICS_INCOMPLETE
command: <cmd or N/A>
exitCode: <n>
headSha: <sha>
contractHash: <sha|null>
executionAttemptId: <id|null>
artifactPath: <path|null>
notes: <redacted>
```

---

## 6. États incomplets

| État | Quand | Effet |
|------|-------|-------|
| `REPORT_INCOMPLETE` | preuves/couverture insuffisantes | bloque clôture SUCCESS ; pas de retry auto |
| `METRICS_INCOMPLETE` | métriques obligatoires absentes | explicite + cause ; pas COMPLETED masquant |

---

## 7. Matrice contrôle → backlog stories

| Contrôle (groupe) | Stories |
|-------------------|---------|
| Git HEAD/base/working tree | E05-02 · E15-01 |
| Allowlist / paths / symlinks / realpath | E06-01 · E06-02 · E06-03 |
| Contract hash / canon / gate | E05-01 · E05-03 · E04-* |
| Worktree / runner / env / network / remote | E07-01 · E07-02 · E07-03 · E14-01 · E14-02 |
| SQLite / append-only | E08-01 · E08-02 |
| Locks / attempts / recovery / no retry | E09-01…E09-04 |
| Rapport / PN remote | E10-01 · E10-02 |
| Observabilité / métriques | E13-01 · E13-02 |
| Lint/typecheck/unit/E2E/build locaux | E15-01 |
| CI PR | **E15-02** (sous GO DevOps impl + VAL) |
| Fixture ≠ live | E02-03 |
| FinOps placeholder | E16-01 (FD-CAND-15) |
| Anti-claims I7 | E17-01 · E17-02 |

---

## 8. Matrice contrôle → décisions techniques

| Contrôle (groupe) | `OPS1-TECH-CAND` |
|-------------------|------------------|
| Isolation worktree / runner | 01 · 02 |
| Network / secrets | 03 · 04 |
| Paths / symlinks | 05 · 06 |
| Canon / hash / HEAD | 07 · 08 · 09 · 25 |
| Branche exec / no commit auto | 10 · 11 |
| SQLite + append-only | 12 |
| Idempotence / lock / recovery / incomplete | 14 · 15 · 16 · 17 |
| Audit / obs | 18 · 19 |
| CI local vs PR | **20** |
| Cleanup GO | 21 |
| FinOps | 22 |
| Delivery open | 24 |
| Remote block | **26** |

---

## 9. Matrice contrôles → preuves delivery futures

| Preuve delivery | Contrôles sources |
|-----------------|-------------------|
| Journal session I1 | HEAD/base · rapport · metrics |
| Contrat + hash | canon · hash · gate |
| Preuve négative remote | remote deny · PN |
| Preuve paths | realpath · allowlist · symlink |
| Rapport clôture | REPORT/METRICS completeness |
| Qualité code lot | lint · typecheck · unit · build · e2e |

---

## 10. Inventaire commandes

### 10.1 EXISTS (Studio `app/`)

- `npm ci` (pratique lockfile)
- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run test:e2e`
- `npm run build`
- `npm run dev` / `start` (runtime dev — pas contrôle CI socle obligatoire)
- Git : `status`, `diff`, `rev-parse`, `diff --check`

### 10.2 EXISTS ailleurs / NOT REQUIRED OPS1 delivery

- Harness : `typecheck`, `test`, `build`, spikes
- CI Interv360 workflow

### 10.3 CANDIDATE (à ne pas présenter comme existantes)

- Script monorepo `ops1:controls`
- Scanner secrets outillé
- Suite intégration paths/sqlite/runner
- Wrapper git deny-remote
- Network/env policy enforcement
- Markdown link check CI
- Workflow `.github/workflows/sfia-studio-ops1-ci.yml`
- Cleanup `.sfia-exec` gouverné (rétention/purge — ignore déjà EXISTS)
- Pin `engines.node` Studio (sélection Morris — non inventé)
- Scanner secrets outillé (`GO IMPLEMENT OPS1 SECRET SCANNING`)

---

## 11. Hors périmètre

Implémentation CI · modification `.github/**` · installation deps · delivery I1 · live · déploiement.

---

*Contrat validé avec réserves — 2026-07-20 21:27:26 CEST — classifications EXISTS/PARTIAL/CANDIDATE inchangées selon réalité ; CI/Delivery non ouverts.*

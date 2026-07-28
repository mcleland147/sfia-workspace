# 01 — Périmètre et vérité des sources

| Champ | Valeur |
|-------|--------|
| **Statut** | `PREPARED — MORRIS ARBITRATION REQUIRED` |
| **Base** | `9f578ea1677ce65cffb4b05ddf5649a21a5b240c` |
| **PR intégrée** | #280 MERGED |
| **Head historique** | `b7a5e827fddb7e80f03a71b3b64ca89271ede0a6` (ancêtre de main) |
| **Post-merge checks** | Detect / Build / Required Gate = **success** (run `30335038884`) |

## 1. Vérité Git

- `origin/main` = merge commit PR #280.
- Pack T-A7 présent (6 fichiers, blobs inchangés).
- Worktree A5.2 créé depuis `origin/main` ; upstream **absent** ; aucun push.

## 2. Périmètre inclus

- B5, R1, R-T-A3-1, R-T-A3-2, R-M01, C1–C4
- modèles d’autorité et d’atomicité
- options d’arbitrage A52-D01…D05
- relation avec F04 (inchangée) et F08–F10 (préparation uniquement)

## 3. Périmètre exclu

- delivery preparation / delivery / cutover / ouverture T-A7
- implémentation runtime/modeled/workflow/`method/**`/OPS1
- sélection persistence/IAM/RGPD opérationnelle
- consommation F03/F08–F13
- déclaration T-A6 COMPLETE / Option A COMPLETE
- fermeture ou acceptation implicite de réserve
- U-M02 (hors arbitrage principal ; cité comme dépendance)

## 4. Sources consultées (ref = HEAD)

| Path | Blob | Statut | Utilité |
|------|------|--------|---------|
| `t-a7-legacy-cutover-framing/README.md` | `4ca57f0f…` | PRESENT | anti-claims, A5.2 trajectoire |
| `…/01-framing-and-scope.md` | `0713d718…` | PRESENT | frontière D-T-A6-10 |
| `…/02-t-a7-cutover-preconditions.md` | `dbf50357…` | PRESENT | P12–P19, stops |
| `…/03-t-a6-and-option-a-completion-criteria.md` | `0714e6fe…` | PRESENT | T6-C10/C11, OA |
| `…/04-reservations-risks-and-stop-conditions.md` | `dc0514ed…` | PRESENT | registre B5/R1/HARD/C* |
| `…/05-morris-decision-pack.md` | `aacef4d7…` | PRESENT | F04 DECIDED ; F08–F13 NOT DECIDED |
| `t-a1-…/03-persistence-consistency-and-failure-modes.md` | `665d63d3…` | PRESENT | LPS store |
| `t-a1-…/04-tests-evidence-and-reserves.md` | `c37af565…` | PRESENT | réserves T-A1 |
| `t-a2-…/03-persistence-consistency-and-failure-modes.md` | `28d0b73a…` | PRESENT | Project↔Cycle, R1 |
| `t-a2-…/04-tests-evidence-and-reserves.md` | `d1918f5b…` | PRESENT | B5/R1 evidence |
| `t-a3-…/03-authority-n2-n3-and-audit.md` | `3e5b62f7…` | PRESENT | N2/N3, audit |
| `t-a3-…/04-supersession-consistency-and-failure-modes.md` | `9b4e0598…` | PRESENT | R-T-A3-1/2 |
| `t-a3-…/05-tests-evidence-and-reserves.md` | `97f37d56…` | PRESENT | réserves HARD |
| `t-a4-…/04-authority-critical-and-supersession.md` | `4870b577…` | PRESENT | Confirm Critical |
| `t-a6-…/03-decisions.md` | `5e8f2f1a…` | PRESENT | D-T-A6-09/10/12 |
| `t-a6-…/20-pr-readiness.md` | `bc38c61f…` | PRESENT | dettes C* |
| `sfia-v3-technical-architecture/…/11-legacy-isolation-migration-and-cutover-architecture.md` | `fc2e410b…` | PRESENT | AT cutover (nom canonique) |
| `…/12-delivery-slices-dependencies-and-technical-gates.md` | `493634be…` | PRESENT | slices / gates |
| `…/13-technical-architecture-validation-and-decision-pack.md` | `b93b7cae…` | PRESENT | outbox / ordre T-A* |
| `v3-native-option-a/23-next-option-a-step-after-t-a6.md` | `e87deff7…` | PRESENT | B5/R1 structurantes |
| docs studio `20`/`23`/`24`/`31`/`33` (POC/framing) | divers | PRESENT | contexte historique ; non décisionnels A5.2 |

### Observation source naming

Les chemins AT-11/AT-13 cités parfois sous d’autres intitulés ; **substituts traçables présents** sous les noms canoniques ci-dessus. **Pas de STOP.**

## 5. Termes

| Terme | Sens A5.2 |
|-------|-----------|
| **OPEN** | réserve non arbitrée / non bornée formellement |
| **OPEN HARD** | bloque exécution réelle / Confirm Critical réel / persistence saine |
| **RECOMMENDED — NOT VALIDATED** | recommandation technique T-A6 non validée Morris |
| **RECOMMENDED — NOT DECIDED** | recommandation A5.2 ; **pas** une décision |
| **mémoire** | fake-only / in-memory ; ≠ production |
| **durable** | persistence réelle future ; **NOT SELECTED** |

## 6. Hypothèses (explicites, non décisions)

1. Le cadrage read-only reste possible avec HARD OPEN (confirmé pack T-A7).
2. T-A6 COMPLETE mémoire (F04) exige arbitrage/bornage R-M01 + C1–C4 avant déclaration, pas avant ce framing.
3. F08/F09/F10 resteront NOT DECIDED après A5.2 jusqu’à bulletin Morris séparé.

## 7. Ambiguïtés / obsolescences

- Matrices delivery/cutover restent **candidate** tant que F08/F09 NOT DECIDED.
- « VALIDATION SATISFIED » côté delivery T-A6 (R-M01 technique) ≠ fermeture réserve.
- Fusion C4→B5 recommandée historiquement, **jamais validée** Morris.

# Review pack — OPS1 Backlog (full)

## Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-20 20:33:00 CEST |
| **Repository** | `mcleland147/sfia-workspace` |
| **Branche** | `backlog/sfia-studio-ops1` |
| **HEAD** | `9bfee8ea113386ee2603093fbec366eda9161c19` |
| **Base / origin/main** | `9bfee8ea113386ee2603093fbec366eda9161c19` |
| **Merge-base** | `9bfee8ea113386ee2603093fbec366eda9161c19` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Gate consommé** | `GO G-OPS1-BACKLOG — OPEN BACKLOG CYCLE` |
| **Gate attendu** | `G-OPS1-BACKLOG-VAL` |
| **Mode handoff** | `publish-in-cycle` |
| **Commit / push / PR / merge projet** | **AUCUN** |

## Rôle du cycle

Produire un backlog documentaire candidat (epics/stories/décisions) traçant les décisions OPS1 validées sur `main`, sans ouvrir delivery/code/live/MVP.

## Sources consultées

- Template `prompts/templates/sfia-cycle-execution-template.md`
- Docs OPS1 `41`–`59` (présents sur `main` @ `9bfee8e…`)
- Forme historique `26`–`28` (référence uniquement)
- README SFIA Studio

## Fichiers créés

- `projects/sfia-studio/60-ops1-backlog-framing-and-prioritization.md`
- `projects/sfia-studio/61-ops1-epics-stories-and-acceptance-criteria.md`
- `projects/sfia-studio/62-ops1-backlog-decision-pack.md`

## Fichier modifié

- `projects/sfia-studio/README.md`

## Volumes

| Élément | Nombre |
|---------|--------|
| Epics | 17 |
| Stories | 41 |
| Candidats backlog | 20 |

### Epics

- `OPS1-E01` — Session persistante et journal
- `OPS1-E02` — Conversation GPT réelle multi-tours
- `OPS1-E03` — Qualification et proposition d’action
- `OPS1-E04` — Gate Morris explicite
- `OPS1-E05` — Contrat canonique, hash et HEAD
- `OPS1-E06` — Chemins, allowlist et symlinks
- `OPS1-E07` — Worktree et runner borné
- `OPS1-E08` — Stockage SQLite et artefacts append-only
- `OPS1-E09` — Idempotence, locks, tentatives, recovery
- `OPS1-E10` — Rapport, preuves et REPORT_INCOMPLETE
- `OPS1-E11` — Reprise conversationnelle post-exécution
- `OPS1-E12` — UX et états visibles
- `OPS1-E13` — Observabilité et audit
- `OPS1-E14` — Sécurité locale
- `OPS1-E15` — Contrôles locaux et préparation DevOps
- `OPS1-E16` — FinOps et réserves numériques
- `OPS1-E17` — Démonstration opératoire I7

### Mapping I1–I7

| Incrément | Epics | Stories clés |
|-----------|-------|--------------|
| I1 | E01, E12 | US-E01-* |
| I2 | E02, E12 | US-E02-01 (gate live) |
| I3 | E03, E04 | US-E03-*, US-E04-* |
| I4 | E05–E07, E14 | US-E05–E07, E14 |
| I5 | E10, E11 | US-E10-*, US-E11-01 |
| I6 | E01, E11, E13 | US-E01-03, US-E11-02 |
| I7 | E17 (+ P0/P1) | US-E17-* |
| Transverse | E08, E09, E13, E15, E16 | stockage, idempotence, obs, DevOps prep, FinOps |


### Traçabilité sources → epics

| Source | Epics |
|--------|-------|
| 41–44 cadrage / I1–I7 | E01–E04, E17 |
| 45–47 conception | E02–E04, E11, E16 |
| 48–50 archi fct | E01, E04, E12 |
| 51–53 UX | E12 |
| 54–56 scénario / allowlist | E05–E06, E10, E17 |
| 57–59 tech-arch amendements | E07–E10, E13–E15 |


## Priorités candidates

P0 preuve OPS1 · P1 robustesse fail-closed · P2 différable · OUT hors OPS1

## Dépendances

Voir [`60`](projects/sfia-studio/60-ops1-backlog-framing-and-prioritization.md) §9 et stories [`61`](projects/sfia-studio/61-ops1-epics-stories-and-acceptance-criteria.md).

## Réserves maintenues

- FD-CAND-15 OPEN
- UX-R01…R04 OPEN
- Stack/fournisseur non finalisés
- Delivery/code/live/MVP/production fermés

## Risques / dette

- Pression à coder avant VAL
- Gate live requis pour I2/I7
- Worktree ≠ sandbox OS forte
- CI PR = cycle DevOps distinct

## Fichiers protégés

`41`–`59`, Campus360, method, prompts, code — **intacts**

## Contrôles

```text
git status --short
 M projects/sfia-studio/README.md
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/60-ops1-backlog-framing-and-prioritization.md
?? projects/sfia-studio/61-ops1-epics-stories-and-acceptance-criteria.md
?? projects/sfia-studio/62-ops1-backlog-decision-pack.md

git diff --name-status
M	projects/sfia-studio/README.md

git diff --stat
 projects/sfia-studio/README.md | 24 +++++++++++++++++-------
 1 file changed, 17 insertions(+), 7 deletions(-)

```

| Contrôle | Résultat |
|----------|----------|
| 3 créés + 1 modifié | OK |
| 17 epics / 41 stories / 20 CAND | OK |
| Statuts AWAITING uniquement | OK |
| Liens relatifs | OK |
| `git diff --check` | clean |
| Secrets/PII | Absents |
| Commit projet | **Aucun** |

## Décisions Morris

| Décision | Statut |
|----------|--------|
| `G-OPS1-BACKLOG` open cycle | **Consommé** |
| `G-OPS1-BACKLOG-VAL` | **Attendu** |
| GO delivery / DevOps / live | Non consommés |

## Diff README

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 47a6810..59815d2 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,7 +4,7 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-ops1-framing-validated-with-reservations` — A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44` intégrés sur `main` via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235), squash `b686eb1`) ; cleanup branche documentaire effectué ; **POC maintenu** ; conception / live / backlog / delivery / MVP / production **fermés** |
+| **Statut** | `poc-ops1-framing-validated-with-reservations` — A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44` intégrés sur `main` via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235), squash `b686eb1`) ; cleanup branche documentaire effectué ; **POC maintenu** ; conception ouverte en docs ; backlog OPS1 **documenté candidat** (`60`–`62`) ; live / delivery / MVP / production **fermés** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
 | **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
@@ -21,7 +21,7 @@
 | **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
 | **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
 | **POC** | **Non lancé** (pas d’industrialisation / daemon) |
-| **Prochaine décision** | Choix Morris : publication handoff / PR readiness / backlog — **non ouverts automatiquement** ; tech-arch OPS1 **validée avec amendements** (`G-OPS1-TECH-ARCH-VAL` consommé) |
+| **Prochaine décision** | Validation Morris backlog OPS1 (`G-OPS1-BACKLOG-VAL`) — docs `60`–`62` **candidats** ; delivery / code / live / MVP — **fermés** |

 ---

@@ -369,11 +369,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 ## 8. Prochaine décision

 1. Scénario OPS1 **validé avec amendements** — docs [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md).
-2. Architecture technique OPS1 — docs [`57`](./57-ops1-technical-architecture.md)–[`59`](./59-ops1-technical-architecture-decision-pack.md) **validés avec amendements** · `GO G-OPS1-TECH-ARCH-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 19:17:11 CEST`.
-3. Backlog / delivery / live GPT-Cursor / MVP — **FERMÉS** (non ouverts automatiquement).
-4. Réserves restantes : FD-CAND-15 · UX-R01…R04 · live · FinOps numériques ; worktree ≠ sandbox OS forte ; CI PR = cycle DevOps distinct.
+2. Architecture technique OPS1 — docs [`57`](./57-ops1-technical-architecture.md)–[`59`](./59-ops1-technical-architecture-decision-pack.md) **validés avec amendements** · `G-OPS1-TECH-ARCH-VAL` consommé.
+3. Backlog OPS1 — docs candidats [`60`](./60-ops1-backlog-framing-and-prioritization.md)–[`62`](./62-ops1-backlog-decision-pack.md) · cycle ouvert (`G-OPS1-BACKLOG`) · validation **`G-OPS1-BACKLOG-VAL` AWAITING**.
+4. Delivery / code / live GPT-Cursor / MVP / production — **FERMÉS** (non ouverts automatiquement).
+5. Réserves restantes : FD-CAND-15 · UX-R01…R04 · live · FinOps numériques ; worktree ≠ sandbox OS forte ; CI PR = cycle DevOps distinct.

-**Verdict documentaire courant :** `SFIA STUDIO OPS1 TECHNICAL ARCHITECTURE VALIDATED WITH AMENDMENTS`
+**Verdict documentaire courant :** `SFIA STUDIO OPS1 BACKLOG DOCUMENTED — AWAITING G-OPS1-BACKLOG-VAL`


 ---
@@ -390,6 +391,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | UX/UI OPS1 | Docs `51`–`53` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-UX-VAL` 2026-07-20 16:52 CEST) ; Figma page `61:2` référence desktop ; UX-R01…UX-R04 ouvertes |
 | Scénario OPS1 | Docs `54`–`56` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST) ; FD-CAND-13/20/26 levées (OPS1) ; FD-CAND-15 maintenue ; UX-R01…R04 maintenues |
 | Architecture technique OPS1 | Docs `57`–`59` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-TECH-ARCH-VAL` — 2026-07-20 19:17:11 CEST) ; 26 CAND validées ; stack non finalisée |
+| Backlog OPS1 | Docs `60`–`62` — **CANDIDATES** ; `G-OPS1-BACKLOG` consommé ; `G-OPS1-BACKLOG-VAL` **AWAITING** ; delivery/code/live/MVP fermés |
 | Handoff | `sfia/review-handoff` |

 ---
@@ -457,4 +459,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [58-ops1-technical-components-security-and-runtime.md](./58-ops1-technical-components-security-and-runtime.md) | Composants / sécurité / runtime — **VALIDATED WITH AMENDMENTS** |
 | [59-ops1-technical-architecture-decision-pack.md](./59-ops1-technical-architecture-decision-pack.md) | `OPS1-TECH-CAND-01`…`26` — **VALIDATED WITH AMENDMENTS** |

-*SFIA Studio — POC maintenu — OPS1 scénario + tech-arch VALIDATED WITH AMENDMENTS — backlog / delivery / MVP non ouverts.*
+### Backlog OPS1 (candidat — `G-OPS1-BACKLOG` consommé · `G-OPS1-BACKLOG-VAL` AWAITING)
+
+| Document | Rôle |
+|----------|------|
+| [60-ops1-backlog-framing-and-prioritization.md](./60-ops1-backlog-framing-and-prioritization.md) | Cadrage / priorisation backlog — **CANDIDATE** |
+| [61-ops1-epics-stories-and-acceptance-criteria.md](./61-ops1-epics-stories-and-acceptance-criteria.md) | Epics / stories / AC — **CANDIDATE** |
+| [62-ops1-backlog-decision-pack.md](./62-ops1-backlog-decision-pack.md) | `OPS1-BACKLOG-CAND-01`…`20` — **AWAITING G-OPS1-BACKLOG-VAL** |
+
+*SFIA Studio — POC maintenu — OPS1 tech-arch VALIDATED WITH AMENDMENTS — backlog DOCUMENTED CANDIDATE — delivery / MVP non ouverts.*

```

---

# CONTENU COMPLET — 60

<!-- BEGIN 60 -->
# SFIA Studio — Backlog OPS1 — cadrage et priorisation (candidat)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `60-ops1-backlog-framing-and-prioritization.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Typologie** | DOC / PRODUIT / BACKLOG |
| **Gate consommé** | `GO G-OPS1-BACKLOG — OPEN BACKLOG CYCLE` |
| **Gate attendu** | `G-OPS1-BACKLOG-VAL` |
| **Statut** | `backlog-candidate` — **documenté, non validé** |
| **Companions** | [`61`](./61-ops1-epics-stories-and-acceptance-criteria.md) · [`62`](./62-ops1-backlog-decision-pack.md) |
| **Branche** | `backlog/sfia-studio-ops1` |
| **Base** | `origin/main` @ `9bfee8ea113386ee2603093fbec366eda9161c19` |
| **Autorité** | Morris (L0) |

> Ce document structure un **backlog documentaire candidat**. Il décrit le travail futur OPS1.
> Il **n’ouvre pas** l’implémentation, le delivery, l’Intégration/DevOps, GPT live, Cursor live, le MVP ni la production.
> Validation Morris attendue : `G-OPS1-BACKLOG-VAL`.

---

## 1. Objectif du backlog

Transformer les décisions OPS1 **déjà validées et intégrées sur `main`** (cadrage → conception → architecture fonctionnelle → UX → scénario → architecture technique) en un backlog :

- structuré (epics / stories) ;
- priorisé (P0–P2 / OUT) ;
- traçable (sources → epics → stories) ;
- exploitable pour une future décision Morris d’ouverture de lots delivery ou DevOps.

Le backlog **n’est pas** un plan de delivery validé, ni une autorisation d’implémentation.

---

## 2. Sources et décisions amont

| Domaine | Documents | Statut |
|---------|-----------|--------|
| Cadrage | [`41`](./41-operational-vertical-slice-1-framing.md)–[`44`](./44-operational-vertical-slice-1-decision-pack.md) | VALIDATED WITH RESERVATIONS |
| Conception | [`45`](./45-ops1-functional-design.md)–[`47`](./47-ops1-functional-decision-pack.md) | VALIDATED WITH RESERVATIONS |
| Archi fonctionnelle | [`48`](./48-ops1-functional-architecture.md)–[`50`](./50-ops1-functional-architecture-decision-pack.md) | VALIDATED WITH RESERVATIONS |
| UX/UI | [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) | VALIDATED WITH RESERVATIONS |
| Scénario | [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) | VALIDATED WITH AMENDMENTS |
| Archi technique | [`57`](./57-ops1-technical-architecture.md)–[`59`](./59-ops1-technical-architecture-decision-pack.md) | VALIDATED WITH AMENDMENTS |
| Forme historique | [`26`](./26-poc-orchestration-backlog.md)–[`28`](./28-poc-orchestration-delivery-gate-pack.md) | Référence de forme **uniquement** |

Décisions amont structurantes (rappel) : conversation GPT réelle multi-tours ; chat ≠ GO ; action Markdown Campus360 bornée ; Morris L0 ; Git vérité documentaire ; tech-arch validée avec 4 amendements (isolation, stockage, idempotence, CI).

---

## 3. Principes de découpage

1. **Une story = un résultat vérifiable** (comportement ou contrôle), pas un choix de stack.
2. **Indépendance techno** — aucune story ne fige framework, fournisseur cloud ou BDD hors SQLite local déjà décidé.
3. **Fail-closed** — les contrôles négatifs et stop conditions sont des stories de première classe.
4. **Preuves d’abord** — chaque story P0/P1 liste des preuves attendues.
5. **Séparation des cycles** — backlog ≠ DevOps ≠ delivery ≠ live.
6. **Réserves explicites** — FD-CAND-15 et UX-R01…R04 restent ouvertes ; stories associées marquées réserve.
7. **I1–I7 comme trajectoire** — mapping obligatoire ; I7 est démonstration, pas industrialisation.

---

## 4. Modèle de priorité (candidat)

| Priorité | Signification | Usage OPS1 |
|----------|---------------|------------|
| **P0** | Indispensable à la preuve OPS1 | Chemin nominal I1→I7 minimal gouverné |
| **P1** | Nécessaire à la robustesse de la preuve | Sécurité, idempotence, REPORT_INCOMPLETE, recovery |
| **P2** | Utile mais différable | Polish UX hors desktop, FinOps avancé, a11y étendue |
| **OUT** | Hors OPS1 | Multi-tenant, remote Git auto, CI delivery, MVP, production |

Les priorités sont **candidates** jusqu’à `G-OPS1-BACKLOG-VAL`.

---

## 5. Critères de priorité

Une story est **P0** si son absence empêche la démonstration opératoire I7 gouvernée (chat réel + action Markdown bornée + gate + preuves).

Une story est **P1** si elle est requise pour l’intégrité fail-closed (secrets, paths, locks, REPORT_INCOMPLETE, audit) mais peut être démontrée juste après le nominal.

Une story est **P2** si elle améliore UX, FinOps ou DevOps sans bloquer la preuve.

Une story est **OUT** si elle exige MVP, production, remote auto, multi-projets hors Campus360, ou CI delivery complète.

---

## 6. Tailles relatives (candidates)

| Taille | Lecture qualitative |
|--------|---------------------|
| **XS** | Contrôle local / schema / doc runtime mince |
| **S** | Composant borné ou écran d’état simple |
| **M** | Flux multi-composants avec preuves |
| **L** | Incrément transversal (runner + store + UI) |
| **XL** | Lot multi-incréments — à découper avant delivery |

Aucune charge en jours/heures. Toute taille est **candidate**.

---

## 7. Mapping I1–I7

| Incrément | Intention | Epics principaux ([`61`](./61-ops1-epics-stories-and-acceptance-criteria.md)) | Priorité dominante |
|-----------|-----------|-----------------------------------------------------------------------------|--------------------|
| **I1** | Session + journal | E01 Session · E12 UX états | P0 |
| **I2** | Conversation GPT réelle multi-tours | E02 Conversation · E12 UX | P0 (live gate distinct) |
| **I3** | Qualification + proposition d’action + gate | E03 Qualification · E04 Gate Morris | P0 |
| **I4** | Contrat + Cursor Markdown borné | E05 Contrat/hash · E06 Paths · E07 Worktree/runner | P0 |
| **I5** | Rapport + conversation post-exécution | E10 Rapport · E11 Reprise post-exec | P0 |
| **I6** | Clôture, historique, reprise | E01 Session (CLOSE) · E11 · E13 Audit | P0/P1 |
| **I7** | Démonstration opératoire | E17 Démo I7 · transverses E14–E16 | P0 (preuve) |

Transverses : E08 Stockage · E09 Idempotence · E13 Observabilité · E14 Sécurité · E15 Contrôles locaux / DevOps prep · E16 FinOps.

---

## 8. Stratégie d’incréments (candidate)

```text
I1 (session) → I2 (chat réel*) → I3 (action+gate) → I4 (exec bornée)
  → I5 (rapport+reprise) → I6 (clôture) → I7 (démo bout-en-bout)
```

\* I2 / I7 nécessitent un gate Morris **live** distinct (`G-OPS1-LIVE-CONVERSATION` ou équivalent) — **non ouvert** par ce backlog.

Ordre de robustesse recommandé avant I7 : E06 + E07 + E08 + E09 + E10 (P1) au moins sur le chemin nominal.

---

## 9. Dépendances

| Dépendance | Nature |
|------------|--------|
| Tech-arch `57`–`59` | Contrat runtime, stockage, CI locale |
| Scénario `54`–`56` | Allowlist Campus360, PN, continuation |
| UX `51`–`53` | Surfaces desktop ; UX-R01…R04 ouvertes |
| FD-CAND-15 | Seuils numériques **OPEN** jusqu’à FinOps/live |
| Cycle DevOps | CI PR — **hors** delivery OPS1 initial |
| Gate live | Conversation GPT réelle — **fermé** |

---

## 10. Hypothèses (explicites — non décisions)

- Un runtime local (app + store) pourra être choisi plus tard sans invalider les stories.
- Campus360 reste le seul projet cible OPS1 pour l’action Markdown.
- Les fixtures peuvent soutenir I1/tests ; I2/I7 exigent GPT réel sous gate live.
- Le handoff Git et le template SFIA v2.6 restent le canal de revue.

---

## 11. Réserves maintenues

| Réserve | Statut |
|---------|--------|
| FD-CAND-15 — FinOps numériques | **OUVERTE** |
| UX-R01 — tablette/mobile après desktop | **OUVERTE** |
| UX-R02 — microcopies avant delivery | **OUVERTE** |
| UX-R03 — design system avant industrialisation | **OUVERTE** |
| UX-R04 — transverse | **OUVERTE** |
| Stack / fournisseur | **NON FINALISÉS** |
| Worktree ≠ sandbox OS forte | Dette documentée |
| CI PR | Cycle Intégration/DevOps distinct |

---

## 12. Périmètre inclus

- Stories documentaires couvrant I1–I7 et transverses sécurité / observabilité / QA / FinOps placeholders.
- Critères d’acceptation testables et preuves attendues.
- Préparation documentaire des contrôles locaux socle (Amendement 4).
- Préparation documentaire du futur cycle DevOps (sans l’ouvrir).

---

## 13. Périmètre exclu

- Implémentation / code / packages.
- Delivery / déploiement / release / production.
- GPT live / Cursor live sans gate Morris distinct.
- Pipeline CI delivery complète.
- Force push / remote Git auto dans le runtime.
- Choix définitif de stack ou fournisseur.
- MVP défini.
- Modification Campus360 ou packs validés `41`–`59`.

---

## 14. Definition of Ready documentaire (story)

Une story est **Ready documentaire** si :

1. Identifiant, epic, priorité candidate, taille candidate présents.
2. Acteur, besoin, valeur, préconditions explicites.
3. Scénario nominal + erreurs / stop conditions.
4. Critères d’acceptation testables (Given/When/Then ou équivalent).
5. Preuves attendues listées.
6. Traçabilité vers ≥1 décision/exigence source.
7. Aucune dépendance à une stack non choisie.
8. Réserve éventuelle nommée (FD-CAND-15 / UX-Rx).
9. Statut = `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL`.

---

## 15. Definition of Done documentaire (story / backlog)

### 15.1 Story Done (futur — hors ce cycle)

1. Critères d’acceptation vérifiés en delivery sous GO distinct.
2. Preuves produites et corrélées (`contractHash` / `executionAttemptId` si applicable).
3. Aucune écriture Git distante automatique.
4. Fail-closed démontré si story de contrôle négatif.
5. Rapport / audit sans secrets.

### 15.2 Backlog Done (ce cycle documentaire)

1. Docs `60`–`62` complets et cohérents.
2. Couverture I1–I7 + 17 domaines minimaux.
3. Toutes décisions `62` en `AWAITING G-OPS1-BACKLOG-VAL`.
4. Review pack full + handoff distant vérifié.
5. Aucun claim de readiness delivery/implémentation ni de backlog validé.

---

## 16. Règles d’ouverture d’une story vers delivery

Une story ne peut entrer en delivery que si :

1. `G-OPS1-BACKLOG-VAL` consommé (backlog validé ou amendé) ;
2. GO delivery Morris **distinct** pour le lot ;
3. DoR documentaire satisfaite ;
4. dépendances P0 du lot satisfaites ou explicitement waivées par Morris ;
5. aucune réserve bloquante non arbitrée pour ce lot ;
6. pas d’élargissement hors allowlist Campus360 sans gate scénario.

---

## 17. Gates Morris nécessaires (hors consommation)

| Gate | Rôle |
|------|------|
| `G-OPS1-BACKLOG-VAL` | Valider / amender / rejeter ce backlog |
| GO delivery (lot n) | Autoriser implémentation d’un lot |
| GO Intégration/DevOps | Autoriser CI PR |
| Gate live conversation | Autoriser GPT réel I2/I7 |
| Gate FinOps/live | Lever ou fixer FD-CAND-15 |

---

## 18. Risques et dette

| Risque / dette | Mitigation backlog |
|----------------|--------------------|
| Pression à coder avant VAL | Statuts CANDIDATE uniquement |
| Confusion live vs fixture | Stories I2/I7 marquées gate live |
| Worktree ≠ sandbox forte | Stories E07/E14 explicites |
| FinOps inventés | E16 placeholders ; FD-CAND-15 |
| CI trop tôt | E15 local-only ; DevOps séparé |
| UX-R non traitées | Stories P2 / réserve |

---

## 19. Critères de validation du backlog (`G-OPS1-BACKLOG-VAL`)

Morris peut valider si :

1. Traçabilité sources → epics → stories est complète pour P0.
2. Aucune story P0 ne fige une stack.
3. Réserves FD-CAND-15 et UX-R01…R04 sont visibles.
4. Séparation backlog / DevOps / delivery / live est claire.
5. I1–I7 sont couverts sans ouvrir le delivery.
6. Decision pack `62` est cohérent et entièrement AWAITING.

---

## 20. Anti-claims

Ce document **n’affirme pas** : READY FOR DELIVERY · READY FOR IMPLEMENTATION · BACKLOG VALIDATED · STACK FINALIZED · MVP DEFINED · LIVE READY · PRODUCTION READY · FULL CI IMPLEMENTED · OPS1 PROVEN.

---

## 21. Verdict documentaire

`OPS1 BACKLOG FRAMING CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL`

Companions : [`61`](./61-ops1-epics-stories-and-acceptance-criteria.md) · [`62`](./62-ops1-backlog-decision-pack.md).

<!-- END 60 -->

---

# CONTENU COMPLET — 61

<!-- BEGIN 61 -->
# SFIA Studio — Backlog OPS1 — epics, stories et critères d’acceptation (candidat)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `61-ops1-epics-stories-and-acceptance-criteria.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Gate consommé** | `GO G-OPS1-BACKLOG — OPEN BACKLOG CYCLE` |
| **Gate attendu** | `G-OPS1-BACKLOG-VAL` |
| **Statut** | `backlog-candidate` — **non validé** |
| **Companions** | [`60`](./60-ops1-backlog-framing-and-prioritization.md) · [`62`](./62-ops1-backlog-decision-pack.md) |
| **Branche** | `backlog/sfia-studio-ops1` |
| **Base** | `origin/main` @ `9bfee8ea113386ee2603093fbec366eda9161c19` |
| **Epics** | 17 |
| **Stories** | 41 |

> Toutes les stories : `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL`.
> Aucune story n’est READY FOR DELIVERY / IMPLEMENTATION / APPROVED / VALIDATED / COMMITTED FOR SPRINT.

---

## 0. Synthèse epics

| Epic | Titre | Priorité | I1–I7 |
|------|-------|----------|-------|
| `OPS1-E01` | Session persistante et journal | P0 | I1,I6 |
| `OPS1-E02` | Conversation GPT réelle multi-tours | P0 | I2,I7 |
| `OPS1-E03` | Qualification et proposition d’action | P0 | I3 |
| `OPS1-E04` | Gate Morris explicite | P0 | I3,I4 |
| `OPS1-E05` | Contrat canonique, hash et HEAD | P0 | I4 |
| `OPS1-E06` | Chemins, allowlist et symlinks | P0 | I4 |
| `OPS1-E07` | Worktree et runner borné | P0 | I4 |
| `OPS1-E08` | Stockage SQLite et artefacts append-only | P0 | I1,I4,I5 |
| `OPS1-E09` | Idempotence, locks, tentatives, recovery | P1 | I4,I5 |
| `OPS1-E10` | Rapport, preuves et REPORT_INCOMPLETE | P0 | I5 |
| `OPS1-E11` | Reprise conversationnelle post-exécution | P0 | I5,I6 |
| `OPS1-E12` | UX et états visibles | P0 | I1–I7 |
| `OPS1-E13` | Observabilité et audit | P1 | I4–I6 |
| `OPS1-E14` | Sécurité locale | P0 | I4 |
| `OPS1-E15` | Contrôles locaux et préparation DevOps | P1 | Transverse |
| `OPS1-E16` | FinOps et réserves numériques | P2 | Transverse |
| `OPS1-E17` | Démonstration opératoire I7 | P0 | I7 |

---

## OPS1-E01 — Session persistante et journal

| Champ | Contenu |
|-------|---------|
| **Objectif** | Ouvrir/fermer une CycleSession, journaliser les tours, immutabilité CLOSED. |
| **Valeur OPS1** | Preuve de continuité conversationnelle (I1/I6). |
| **Décisions / sources** | 41–44 · 45 CAP session · 48 Session Manager · 57/58 Session Store |
| **Priorité candidate** | P0 |
| **Dépendances** | — |
| **Risques** | Confusion nouvelle session vs cycle |
| **Critères de sortie** | Session OPEN/CLOSED prouvable ; journal corrélé ; CLOSED immuable. |
| **Gates** | G-OPS1-BACKLOG-VAL ; GO delivery lot I1 |
| **Mapping** | I1,I6 |
| **Stories** | `OPS1-US-E01-01`, `OPS1-US-E01-02`, `OPS1-US-E01-03` |

### OPS1-US-E01-01 — Créer CycleSession OPEN

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris/UI, je veux Ouvrir une session OPS1, afin de Corrélation I1. |
| **Acteur** | Morris/UI |
| **Besoin** | Ouvrir une session OPS1 |
| **Valeur** | Corrélation I1 |
| **Préconditions** | Projet OPS1 sélectionnable |
| **Scénario nominal** | Morris démarre une session |
| **Erreurs / stop** | Échec store → STOP |
| **Critères d’acceptation** | Given UI idle ; When create session ; Then sessionId unique status OPEN journal init |
| **Preuves attendues** | session.json + event SESSION_OPENED |
| **Dépendances** | — |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E01-02 — Journaliser tours conversationnels

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Persister chaque tour, afin de Reprise multi-tours. |
| **Acteur** | Système |
| **Besoin** | Persister chaque tour |
| **Valeur** | Reprise multi-tours |
| **Préconditions** | Session OPEN |
| **Scénario nominal** | Tour chat ajouté au journal |
| **Erreurs / stop** | Écriture partielle → FAILED journal |
| **Critères d’acceptation** | Given session OPEN ; When message ; Then tour append-only corrélé sessionId |
| **Preuves attendues** | journal entries + ids |
| **Dépendances** | E01-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E01-03 — Clôturer session CLOSED immuable

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux Fermer explicitement, afin de I6. |
| **Acteur** | Morris |
| **Besoin** | Fermer explicitement |
| **Valeur** | I6 |
| **Préconditions** | Session OPEN |
| **Scénario nominal** | Morris CLOSE |
| **Erreurs / stop** | Tentative mutation CLOSED → refus |
| **Critères d’acceptation** | Given OPEN ; When CLOSE ; Then CLOSED immutable |
| **Preuves attendues** | event SESSION_CLOSED |
| **Dépendances** | E01-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E02 — Conversation GPT réelle multi-tours

| Champ | Contenu |
|-------|---------|
| **Objectif** | Dialogue libre multi-tours avec contexte ; chat ≠ GO. |
| **Valeur OPS1** | Cœur produit OPS1 (I2/I7). |
| **Décisions / sources** | 41 amendement conversation · 45 FR chat · 51 UX chat · gate live futur |
| **Priorité candidate** | P0 |
| **Dépendances** | E01 |
| **Risques** | Live gate fermé ; coût tokens (FD-CAND-15) |
| **Critères de sortie** | Multi-tours non scriptés possibles sous gate live ; aucune exécution depuis le chat. |
| **Gates** | Gate live conversation (distinct) ; G-OPS1-BACKLOG-VAL |
| **Mapping** | I2,I7 |
| **Stories** | `OPS1-US-E02-01`, `OPS1-US-E02-02`, `OPS1-US-E02-03` |

### OPS1-US-E02-01 — Échanger multi-tours GPT réel

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux Converser librement, afin de I2. |
| **Acteur** | Morris |
| **Besoin** | Converser librement |
| **Valeur** | I2 |
| **Préconditions** | Gate live consommé ; session OPEN |
| **Scénario nominal** | ≥3 tours non scriptés |
| **Erreurs / stop** | Timeout/provider → état erreur visible |
| **Critères d’acceptation** | Given live GO ; When dialogue ; Then réponses contextuelles sans exec |
| **Preuves attendues** | transcript + usage counters |
| **Dépendances** | E01 |
| **Réserve** | FD-CAND-15 |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | L |
| **Gate Morris éventuelle** | Gate live |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E02-02 — Interdire exécution depuis le chat

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Garantir chat≠GO, afin de Sécurité produit. |
| **Acteur** | Système |
| **Besoin** | Garantir chat≠GO |
| **Valeur** | Sécurité produit |
| **Préconditions** | Session avec chat |
| **Scénario nominal** | Message n’exécute jamais |
| **Erreurs / stop** | Tentative d’outil exec dans chat → bloqué |
| **Critères d’acceptation** | Given chat ; When message action-like ; Then no execution + hint UI |
| **Preuves attendues** | preuve négative |
| **Dépendances** | E02-01,E04 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E02-03 — Mode fixture pour tests non-live

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que QA, je veux Tester sans live, afin de I1 tests. |
| **Acteur** | QA |
| **Besoin** | Tester sans live |
| **Valeur** | I1 tests |
| **Préconditions** | Config test |
| **Scénario nominal** | Fixture conversationnelle |
| **Erreurs / stop** | Fixture présentée comme live → STOP doc |
| **Critères d’acceptation** | Given test mode ; When chat ; Then fixture flag visible |
| **Preuves attendues** | flag fixture in report |
| **Dépendances** | E01 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E03 — Qualification et proposition d’action

| Champ | Contenu |
|-------|---------|
| **Objectif** | Qualifier une intention et proposer une action structurée séparée du chat. |
| **Valeur OPS1** | Action facultative gouvernée (I3). |
| **Décisions / sources** | 45 CAP-08 · 46 flows · 51 panneaux · 54 scénario |
| **Priorité candidate** | P0 |
| **Dépendances** | E01,E02 |
| **Risques** | Action implicite dans le fil |
| **Critères de sortie** | Objet action distinct ; ACTION_NOT_REQUIRED possible ; aucun exec sans gate. |
| **Gates** | G-OPS1-BACKLOG-VAL ; GO delivery lot I3 |
| **Mapping** | I3 |
| **Stories** | `OPS1-US-E03-01`, `OPS1-US-E03-02` |

### OPS1-US-E03-01 — Proposer action structurée séparée

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que GPT/UI, je veux Créer candidat action hors fil, afin de I3. |
| **Acteur** | GPT/UI |
| **Besoin** | Créer candidat action hors fil |
| **Valeur** | I3 |
| **Préconditions** | Discussion préalable |
| **Scénario nominal** | ActionCandidate dans panneau dédié |
| **Erreurs / stop** | Action seulement dans chat → invalide |
| **Critères d’acceptation** | Given discussion ; When propose ; Then ActionCandidate hors chat |
| **Preuves attendues** | action object id |
| **Dépendances** | E02 |
| **Réserve** | UX-R02 |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E03-02 — Support ACTION_NOT_REQUIRED

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris/GPT, je veux Conclure sans action, afin de Flexibilité OPS1. |
| **Acteur** | Morris/GPT |
| **Besoin** | Conclure sans action |
| **Valeur** | Flexibilité OPS1 |
| **Préconditions** | Session chat |
| **Scénario nominal** | Décision pas d’action |
| **Erreurs / stop** | Forcer action → refus UX |
| **Critères d’acceptation** | Given chat ; When no action needed ; Then ACTION_NOT_REQUIRED journalisé |
| **Preuves attendues** | event |
| **Dépendances** | E02 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E04 — Gate Morris explicite

| Champ | Contenu |
|-------|---------|
| **Objectif** | Journaliser GO/NO-GO L0 avant toute exécution. |
| **Valeur OPS1** | Autorité Morris (I3/I4). |
| **Décisions / sources** | 44 · 45 FR-008 · 48 Morris Gate · 57 Gate Service |
| **Priorité candidate** | P0 |
| **Dépendances** | E03 |
| **Risques** | Auto-GO / GO dans le chat |
| **Critères de sortie** | Aucune exécution sans décision Morris journalisée. |
| **Gates** | G-OPS1-BACKLOG-VAL |
| **Mapping** | I3,I4 |
| **Stories** | `OPS1-US-E04-01`, `OPS1-US-E04-02` |

### OPS1-US-E04-01 — Enregistrer GO Morris sur candidat

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux Autoriser exécution, afin de L0. |
| **Acteur** | Morris |
| **Besoin** | Autoriser exécution |
| **Valeur** | L0 |
| **Préconditions** | ActionCandidate valide |
| **Scénario nominal** | GO journalisé avec motif |
| **Erreurs / stop** | GO sans candidat → refus |
| **Critères d’acceptation** | Given candidate ; When GO ; Then gateDecision persisted |
| **Preuves attendues** | gateDecision artifact |
| **Dépendances** | E03 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E04-02 — Enregistrer NO-GO et bloquer exec

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux Refuser exécution, afin de Fail-closed. |
| **Acteur** | Morris |
| **Besoin** | Refuser exécution |
| **Valeur** | Fail-closed |
| **Préconditions** | ActionCandidate |
| **Scénario nominal** | NO-GO → pas d’exec |
| **Erreurs / stop** | Exec malgré NO-GO → STOP |
| **Critères d’acceptation** | Given candidate ; When NO-GO ; Then execution blocked |
| **Preuves attendues** | preuve négative |
| **Dépendances** | E03 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E05 — Contrat canonique, hash et HEAD

| Champ | Contenu |
|-------|---------|
| **Objectif** | Geler contrat, calculer contractHash, revalider HEAD. |
| **Valeur OPS1** | Intégrité du périmètre exécutable (I4). |
| **Décisions / sources** | 54–56 · 57 CAND-07/08/09/25 · 59 |
| **Priorité candidate** | P0 |
| **Dépendances** | E04 |
| **Risques** | Hash instable ; HEAD drift |
| **Critères de sortie** | Contrat immuable post-GO ; hash vérifiable ; HEAD invalidant si drift. |
| **Gates** | G-OPS1-BACKLOG-VAL |
| **Mapping** | I4 |
| **Stories** | `OPS1-US-E05-01`, `OPS1-US-E05-02`, `OPS1-US-E05-03` |

### OPS1-US-E05-01 — Canonicaliser et hasher le contrat

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Produire contractHash, afin de I4. |
| **Acteur** | Système |
| **Besoin** | Produire contractHash |
| **Valeur** | I4 |
| **Préconditions** | GO Morris |
| **Scénario nominal** | Hash stable du contrat gelé |
| **Erreurs / stop** | Changement post-hash → invalidation |
| **Critères d’acceptation** | Given GO ; When freeze ; Then contractHash immutable |
| **Preuves attendues** | contract + hash |
| **Dépendances** | E04 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E05-02 — Revalider HEAD avant exécution

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Détecter drift, afin de I4. |
| **Acteur** | Système |
| **Besoin** | Détecter drift |
| **Valeur** | I4 |
| **Préconditions** | Contrat gelé |
| **Scénario nominal** | HEAD ≠ base → STOP |
| **Erreurs / stop** | Ignorer drift → interdit |
| **Critères d’acceptation** | Given frozen ; When HEAD changed ; Then CONTRACT_INVALIDATED |
| **Preuves attendues** | event |
| **Dépendances** | E05-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E05-03 — Inclure gateDecision dans hash

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Lier GO au hash, afin de CAND-25. |
| **Acteur** | Système |
| **Besoin** | Lier GO au hash |
| **Valeur** | CAND-25 |
| **Préconditions** | GO + contrat |
| **Scénario nominal** | Hash couvre gateDecision |
| **Erreurs / stop** | GO altéré → hash mismatch |
| **Critères d’acceptation** | Given GO ; When hash ; Then gateDecision in canonical payload |
| **Preuves attendues** | hash input dump |
| **Dépendances** | E05-01 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E06 — Chemins, allowlist et symlinks

| Champ | Contenu |
|-------|---------|
| **Objectif** | Normaliser paths, enforce allowlist Campus360, refuser symlink escape. |
| **Valeur OPS1** | Sécurité locale fail-closed (I4). |
| **Décisions / sources** | 55 allowlist · 57 CAND-05/06 · 59 |
| **Priorité candidate** | P0 |
| **Dépendances** | E05 |
| **Risques** | Wildcard ; 03 protégé |
| **Critères de sortie** | Paths hors allowlist refusés ; 03 protégé par défaut ; symlink sortant refusé. |
| **Gates** | G-OPS1-BACKLOG-VAL |
| **Mapping** | I4 |
| **Stories** | `OPS1-US-E06-01`, `OPS1-US-E06-02`, `OPS1-US-E06-03` |

### OPS1-US-E06-01 — Valider paths realpath + allowlist

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Refuser hors périmètre, afin de Sécurité. |
| **Acteur** | Système |
| **Besoin** | Refuser hors périmètre |
| **Valeur** | Sécurité |
| **Préconditions** | Allowlist 55 |
| **Scénario nominal** | Path hors allowlist refusé |
| **Erreurs / stop** | Wildcard → refus |
| **Critères d’acceptation** | Given path ; When resolve ; Then prefix+allowlist OK or deny |
| **Preuves attendues** | validation log |
| **Dépendances** | E05 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E06-02 — Protéger 03 par défaut

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Bloquer fichier protégé, afin de Campus360. |
| **Acteur** | Système |
| **Besoin** | Bloquer fichier protégé |
| **Valeur** | Campus360 |
| **Préconditions** | Allowlist |
| **Scénario nominal** | Cible 03 → refus sauf GO explicite futur |
| **Erreurs / stop** | Écriture 03 → STOP |
| **Critères d’acceptation** | Given 03 ; When targeted ; Then denied |
| **Preuves attendues** | preuve négative |
| **Dépendances** | E06-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E06-03 — Refuser symlink sortant

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Empêcher escape, afin de CAND-06. |
| **Acteur** | Système |
| **Besoin** | Empêcher escape |
| **Valeur** | CAND-06 |
| **Préconditions** | Workspace |
| **Scénario nominal** | Symlink hors racine → refus |
| **Erreurs / stop** | Suivre symlink → interdit |
| **Critères d’acceptation** | Given symlink out ; When validate ; Then deny |
| **Preuves attendues** | scan log |
| **Dépendances** | E06-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E07 — Worktree et runner borné

| Champ | Contenu |
|-------|---------|
| **Objectif** | Exécuter dans worktree dédié avec contrôles runner (pas sandbox OS forte). |
| **Valeur OPS1** | Isolation Git OPS1 (I4) — Amendement 1. |
| **Décisions / sources** | 57–59 CAND-01/02/03/04/26 |
| **Priorité candidate** | P0 |
| **Dépendances** | E05,E06 |
| **Risques** | Sur-revendiquer isolation forte |
| **Critères de sortie** | Worktree créé depuis baseHeadSha ; CWD/env/credentials/réseau/remote contrôlés. |
| **Gates** | G-OPS1-BACKLOG-VAL |
| **Mapping** | I4 |
| **Stories** | `OPS1-US-E07-01`, `OPS1-US-E07-02`, `OPS1-US-E07-03` |

### OPS1-US-E07-01 — Créer worktree d’exécution

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Isoler Git, afin de Amendement 1. |
| **Acteur** | Système |
| **Besoin** | Isoler Git |
| **Valeur** | Amendement 1 |
| **Préconditions** | baseHeadSha |
| **Scénario nominal** | worktree add dédié |
| **Erreurs / stop** | Contamination working tree principal → STOP |
| **Critères d’acceptation** | Given GO ; When prepare ; Then worktree path bounded |
| **Preuves attendues** | worktree path evidence |
| **Dépendances** | E05 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E07-02 — Appliquer contrôles runner

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Borner exécution, afin de Amendement 1. |
| **Acteur** | Système |
| **Besoin** | Borner exécution |
| **Valeur** | Amendement 1 |
| **Préconditions** | Worktree prêt |
| **Scénario nominal** | CWD/env/credentials/réseau/remote contrôlés |
| **Erreurs / stop** | Réseau on par défaut → non-conforme |
| **Critères d’acceptation** | Given runner start ; When checks ; Then network off creds absent remote denied |
| **Preuves attendues** | runner precheck report |
| **Dépendances** | E07-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E07-03 — Documenter limite non-sandbox OS

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Docs/QA, je veux Éviter claim faux, afin de Risque isolation. |
| **Acteur** | Docs/QA |
| **Besoin** | Éviter claim faux |
| **Valeur** | Risque isolation |
| **Préconditions** | Tech-arch |
| **Scénario nominal** | Docs/rapports n’affirment pas sandbox forte |
| **Erreurs / stop** | Claim STRONG SANDBOX → STOP review |
| **Critères d’acceptation** | Given report ; When wording ; Then no strong sandbox claim |
| **Preuves attendues** | review checklist |
| **Dépendances** | E07-02 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | XS |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E08 — Stockage SQLite et artefacts append-only

| Champ | Contenu |
|-------|---------|
| **Objectif** | Séparer état opérationnel (SQLite) et artefacts immuables (fichiers). |
| **Valeur OPS1** | Persistance cohérente — Amendement 2. |
| **Décisions / sources** | 57–59 CAND-12/18 |
| **Priorité candidate** | P0 |
| **Dépendances** | E01 |
| **Risques** | Double source d’état |
| **Critères de sortie** | SQLite = sessions/états/locks/tentatives ; append-only = contrats/rapports/preuves. |
| **Gates** | G-OPS1-BACKLOG-VAL |
| **Mapping** | I1,I4,I5 |
| **Stories** | `OPS1-US-E08-01`, `OPS1-US-E08-02` |

### OPS1-US-E08-01 — Persister états dans SQLite

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Source opérationnelle, afin de Amendement 2. |
| **Acteur** | Système |
| **Besoin** | Source opérationnelle |
| **Valeur** | Amendement 2 |
| **Préconditions** | Store local |
| **Scénario nominal** | Sessions/locks/attempts in SQLite |
| **Erreurs / stop** | État seulement fichiers → non-conforme |
| **Critères d’acceptation** | Given runtime ; When persist ; Then SQLite rows |
| **Preuves attendues** | schema + rows |
| **Dépendances** | E01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E08-02 — Écrire artefacts append-only

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Preuves immuables, afin de Amendement 2. |
| **Acteur** | Système |
| **Besoin** | Preuves immuables |
| **Valeur** | Amendement 2 |
| **Préconditions** | Exécution |
| **Scénario nominal** | Contrats/rapports/diffs append-only |
| **Erreurs / stop** | Overwrite preuve → STOP |
| **Critères d’acceptation** | Given evidence ; When write ; Then append-only |
| **Preuves attendues** | artifact hashes |
| **Dépendances** | E10 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E09 — Idempotence, locks, tentatives, recovery

| Champ | Contenu |
|-------|---------|
| **Objectif** | Distinguer contractHash et executionAttemptId ; pas de retry auto. |
| **Valeur OPS1** | Anti double exécution — Amendement 3. |
| **Décisions / sources** | 57–59 CAND-14/15/16/17 |
| **Priorité candidate** | P1 |
| **Dépendances** | E05,E07,E08 |
| **Risques** | Resume opaque |
| **Critères de sortie** | Une tentative active ; nouvelle tentative = décision Morris ; crash → lecture + GO. |
| **Gates** | G-OPS1-BACKLOG-VAL |
| **Mapping** | I4,I5 |
| **Stories** | `OPS1-US-E09-01`, `OPS1-US-E09-02`, `OPS1-US-E09-03`, `OPS1-US-E09-04` |

### OPS1-US-E09-01 — Créer executionAttemptId distinct

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Tracer tentatives, afin de Amendement 3. |
| **Acteur** | Système |
| **Besoin** | Tracer tentatives |
| **Valeur** | Amendement 3 |
| **Préconditions** | contractHash |
| **Scénario nominal** | Nouvel attemptId par tentative |
| **Erreurs / stop** | Réutiliser attemptId → refus |
| **Critères d’acceptation** | Given hash ; When attempt ; Then unique attemptId |
| **Preuves attendues** | attempt record |
| **Dépendances** | E05,E08 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E09-02 — Lock une tentative active

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Anti concurrence, afin de CAND-15. |
| **Acteur** | Système |
| **Besoin** | Anti concurrence |
| **Valeur** | CAND-15 |
| **Préconditions** | Attempt |
| **Scénario nominal** | Seconde active → refus |
| **Erreurs / stop** | Double exec → STOP |
| **Critères d’acceptation** | Given active attempt ; When second ; Then lock deny |
| **Preuves attendues** | lock evidence |
| **Dépendances** | E09-01 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E09-03 — Recovery crash sans resume opaque

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris/Système, je veux Reprendre sous GO, afin de CAND-16. |
| **Acteur** | Morris/Système |
| **Besoin** | Reprendre sous GO |
| **Valeur** | CAND-16 |
| **Préconditions** | Crash mid-exec |
| **Scénario nominal** | État lecture + décision Morris |
| **Erreurs / stop** | Auto-resume → interdit |
| **Critères d’acceptation** | Given crash ; When recover ; Then awaiting Morris decision |
| **Preuves attendues** | recovery report |
| **Dépendances** | E09-01 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E09-04 — Interdire retry auto REPORT_INCOMPLETE

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux CAND-17, afin de Amendement 3. |
| **Acteur** | Système |
| **Besoin** | CAND-17 |
| **Valeur** | Amendement 3 |
| **Préconditions** | Rapport incomplet |
| **Scénario nominal** | Pas COMPLETED ; pas relance auto |
| **Erreurs / stop** | Silent COMPLETED → STOP |
| **Critères d’acceptation** | Given incomplete ; When finalize ; Then REPORT_INCOMPLETE |
| **Preuves attendues** | status evidence |
| **Dépendances** | E10 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E10 — Rapport, preuves et REPORT_INCOMPLETE

| Champ | Contenu |
|-------|---------|
| **Objectif** | Produire rapport consolidé ; interdire COMPLETED silencieux. |
| **Valeur OPS1** | Intégrité preuve (I5). |
| **Décisions / sources** | 54 PN · 57 CAND-17 · 58 Evidence Collector |
| **Priorité candidate** | P0 |
| **Dépendances** | E07,E09 |
| **Risques** | Complétion fictive |
| **Critères de sortie** | REPORT_INCOMPLETE strict ; preuves par fichier ; pas de relance auto. |
| **Gates** | G-OPS1-BACKLOG-VAL |
| **Mapping** | I5 |
| **Stories** | `OPS1-US-E10-01`, `OPS1-US-E10-02` |

### OPS1-US-E10-01 — Générer rapport consolidé + par fichier

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Preuve I5, afin de Allowlist 1..n. |
| **Acteur** | Système |
| **Besoin** | Preuve I5 |
| **Valeur** | Allowlist 1..n |
| **Préconditions** | Exec ended |
| **Scénario nominal** | Rapport couverture fichiers |
| **Erreurs / stop** | Fichier manquant → incomplete |
| **Critères d’acceptation** | Given allowlist ; When report ; Then per-file coverage |
| **Preuves attendues** | report artifact |
| **Dépendances** | E07 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E10-02 — Collecter preuves négatives remote

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Montrer non-remote, afin de I4/I7. |
| **Acteur** | Système |
| **Besoin** | Montrer non-remote |
| **Valeur** | I4/I7 |
| **Préconditions** | Exec |
| **Scénario nominal** | Aucune push/fetch write |
| **Erreurs / stop** | Remote observé → FAILED |
| **Critères d’acceptation** | Given exec ; When audit ; Then no remote git |
| **Preuves attendues** | negative proof |
| **Dépendances** | E07,E14 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E11 — Reprise conversationnelle post-exécution

| Champ | Contenu |
|-------|---------|
| **Objectif** | Reprendre le chat après rapport ; continuation liée si besoin. |
| **Valeur OPS1** | Boucle OPS1 (I5/I6). |
| **Décisions / sources** | 45 CAP-16 · 54 continuation · UX-R02 |
| **Priorité candidate** | P0 |
| **Dépendances** | E02,E10 |
| **Risques** | Réouverture CLOSED mutable |
| **Critères de sortie** | Post-exec conversationnelle ; CLOSED immuable ; continuation = nouvel id + parent. |
| **Gates** | G-OPS1-BACKLOG-VAL |
| **Mapping** | I5,I6 |
| **Stories** | `OPS1-US-E11-01`, `OPS1-US-E11-02` |

### OPS1-US-E11-01 — Reprendre chat après rapport

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux Continuer dialogue, afin de I5. |
| **Acteur** | Morris |
| **Besoin** | Continuer dialogue |
| **Valeur** | I5 |
| **Préconditions** | Rapport disponible |
| **Scénario nominal** | Chat post-exec avec contexte |
| **Erreurs / stop** | Perte contexte → bug |
| **Critères d’acceptation** | Given report ; When chat ; Then context retained |
| **Preuves attendues** | transcript |
| **Dépendances** | E02,E10 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E11-02 — Continuation liée post-CLOSED

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux Nouvelle session liée, afin de FD-CAND-13 OPS1. |
| **Acteur** | Morris |
| **Besoin** | Nouvelle session liée |
| **Valeur** | FD-CAND-13 OPS1 |
| **Préconditions** | Session CLOSED |
| **Scénario nominal** | new id + parentSessionId |
| **Erreurs / stop** | Mutate CLOSED → refus |
| **Critères d’acceptation** | Given CLOSED ; When continue ; Then linked new session |
| **Preuves attendues** | parent link |
| **Dépendances** | E01-03 |
| **Réserve** | UX-R02 |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E12 — UX et états visibles

| Champ | Contenu |
|-------|---------|
| **Objectif** | Surfaces desktop : chat, action, gate, exec, rapport, clôture. |
| **Valeur OPS1** | Lisibilité Morris (transverse). |
| **Décisions / sources** | 51–53 · UX-R01…R04 |
| **Priorité candidate** | P0 |
| **Dépendances** | E01–E04,E10 |
| **Risques** | Responsive/microcopy non prêts |
| **Critères de sortie** | États visibles desktop ; chat≠action ; réserves UX non levées. |
| **Gates** | G-OPS1-BACKLOG-VAL ; UX-R02 avant delivery polish |
| **Mapping** | I1–I7 |
| **Stories** | `OPS1-US-E12-01`, `OPS1-US-E12-02`, `OPS1-US-E12-03` |

### OPS1-US-E12-01 — Afficher états desktop chat/action/gate

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que UI, je veux Séparer surfaces, afin de UX 51. |
| **Acteur** | UI |
| **Besoin** | Séparer surfaces |
| **Valeur** | UX 51 |
| **Préconditions** | Desktop 1440 |
| **Scénario nominal** | Panneaux distincts |
| **Erreurs / stop** | GO dans fil → non-conforme |
| **Critères d’acceptation** | Given session ; When UI ; Then chat≠action≠gate |
| **Preuves attendues** | screenshot refs |
| **Dépendances** | E03,E04 |
| **Réserve** | UX-R01 |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E12-02 — Afficher états exec/rapport/clôture

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que UI, je veux Visibilité preuve, afin de UX. |
| **Acteur** | UI |
| **Besoin** | Visibilité preuve |
| **Valeur** | UX |
| **Préconditions** | Exec/rapport |
| **Scénario nominal** | États visibles |
| **Erreurs / stop** | État faux COMPLETED → STOP UI |
| **Critères d’acceptation** | Given exec ; When UI ; Then status truthful |
| **Preuves attendues** | UI state log |
| **Dépendances** | E10 |
| **Réserve** | UX-R02 |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E12-03 — Réserver responsive tablette/mobile

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que UX, je veux UX-R01, afin de Après desktop. |
| **Acteur** | UX |
| **Besoin** | UX-R01 |
| **Valeur** | Après desktop |
| **Préconditions** | Desktop OK |
| **Scénario nominal** | Stories responsive OUT/P2 |
| **Erreurs / stop** | Livrer mobile avant desktop → non |
| **Critères d’acceptation** | Given backlog ; When prioritize ; Then mobile after desktop |
| **Preuves attendues** | prio note |
| **Dépendances** | E12-01 |
| **Réserve** | UX-R01 |
| **Priorité candidate** | P2 |
| **Taille relative candidate** | L |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E13 — Observabilité et audit

| Champ | Contenu |
|-------|---------|
| **Objectif** | Événements corrélés sans secrets ; métriques durée/fichiers. |
| **Valeur OPS1** | Traçabilité (transverse). |
| **Décisions / sources** | 57 §obs · 59 CAND-19 |
| **Priorité candidate** | P1 |
| **Dépendances** | E08 |
| **Risques** | APM excessif |
| **Critères de sortie** | Journal append-only corrélé ; pas de secret dans logs. |
| **Gates** | G-OPS1-BACKLOG-VAL |
| **Mapping** | I4–I6 |
| **Stories** | `OPS1-US-E13-01`, `OPS1-US-E13-02` |

### OPS1-US-E13-01 — Émettre événements corrélés sans secrets

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Audit, afin de CAND-19. |
| **Acteur** | Système |
| **Besoin** | Audit |
| **Valeur** | CAND-19 |
| **Préconditions** | Runtime |
| **Scénario nominal** | Events ids+actor+status |
| **Erreurs / stop** | Secret in log → STOP |
| **Critères d’acceptation** | Given event ; When emit ; Then no secret fields |
| **Preuves attendues** | event sample redacted |
| **Dépendances** | E08 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E13-02 — Mesurer durée et fichiers touchés

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Métriques minimales, afin de Obs. |
| **Acteur** | Système |
| **Besoin** | Métriques minimales |
| **Valeur** | Obs |
| **Préconditions** | Exec |
| **Scénario nominal** | Durée + count fichiers |
| **Erreurs / stop** | Métrique absente OK si documenté |
| **Critères d’acceptation** | Given exec ; When end ; Then metrics recorded |
| **Preuves attendues** | metrics |
| **Dépendances** | E10 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | XS |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E14 — Sécurité locale

| Champ | Contenu |
|-------|---------|
| **Objectif** | Secrets absents ; réseau off ; remote Git refusé ; scans. |
| **Valeur OPS1** | Fail-closed sécurité. |
| **Décisions / sources** | 57–59 CAND-03/04/26 · 55 |
| **Priorité candidate** | P0 |
| **Dépendances** | E07 |
| **Risques** | Fuite via fichiers |
| **Critères de sortie** | Scans secrets ; remote wrapper ; env filtré démontrables. |
| **Gates** | G-OPS1-BACKLOG-VAL |
| **Mapping** | I4 |
| **Stories** | `OPS1-US-E14-01`, `OPS1-US-E14-02` |

### OPS1-US-E14-01 — Scan secrets pré/post exécution

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux Anti fuite, afin de CAND-04. |
| **Acteur** | Système |
| **Besoin** | Anti fuite |
| **Valeur** | CAND-04 |
| **Préconditions** | Worktree |
| **Scénario nominal** | Scan fail → STOP |
| **Erreurs / stop** | Secret commit → FAILED |
| **Critères d’acceptation** | Given tree ; When scan ; Then pass or stop |
| **Preuves attendues** | scan report |
| **Dépendances** | E07 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E14-02 — Wrapper refus remote Git

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Système, je veux CAND-26, afin de Amendement 1. |
| **Acteur** | Système |
| **Besoin** | CAND-26 |
| **Valeur** | Amendement 1 |
| **Préconditions** | Runner |
| **Scénario nominal** | push/fetch write refusés |
| **Erreurs / stop** | Remote success → non-conforme |
| **Critères d’acceptation** | Given git remote cmd ; When wrapped ; Then deny |
| **Preuves attendues** | deny log |
| **Dépendances** | E07 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E15 — Contrôles locaux et préparation DevOps

| Champ | Contenu |
|-------|---------|
| **Objectif** | Contrôles déterministes locaux ; CI PR reportée. |
| **Valeur OPS1** | Amendement 4 — sans ouvrir DevOps. |
| **Décisions / sources** | 57 §CI · 59 CAND-20 |
| **Priorité candidate** | P1 |
| **Dépendances** | E05–E10 |
| **Risques** | FULL CI trop tôt |
| **Critères de sortie** | Checklist locale socle documentée ; stories DevOps = OUT/P2 sous gate DevOps. |
| **Gates** | G-OPS1-BACKLOG-VAL ; GO DevOps distinct |
| **Mapping** | Transverse |
| **Stories** | `OPS1-US-E15-01`, `OPS1-US-E15-02` |

### OPS1-US-E15-01 — Checklist contrôles locaux socle

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que QA/Dev, je veux Amendement 4, afin de Avant delivery. |
| **Acteur** | QA/Dev |
| **Besoin** | Amendement 4 |
| **Valeur** | Avant delivery |
| **Préconditions** | Contrat/hash/HEAD/allowlist/paths/symlinks/secrets/diff-check/rapport |
| **Scénario nominal** | Checklist documentée exécutable localement |
| **Erreurs / stop** | CI PR présentée comme faite → non |
| **Critères d’acceptation** | Given lot ; When local checks ; Then checklist green |
| **Preuves attendues** | checklist results |
| **Dépendances** | E05–E10 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E15-02 — Préparer stories CI PR (hors ouverture)

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Docs, je veux DevOps futur, afin de Cycle DevOps. |
| **Acteur** | Docs |
| **Besoin** | DevOps futur |
| **Valeur** | Cycle DevOps |
| **Préconditions** | Backlog |
| **Scénario nominal** | Stories CI PR marquées gate DevOps / OUT delivery |
| **Erreurs / stop** | Ouvrir CI delivery maintenant → STOP |
| **Critères d’acceptation** | Given backlog ; When DevOps stories ; Then gated |
| **Preuves attendues** | E15 mapping |
| **Dépendances** | — |
| **Réserve** | — |
| **Priorité candidate** | P2 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | GO DevOps |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E16 — FinOps et réserves numériques

| Champ | Contenu |
|-------|---------|
| **Objectif** | Compteurs/alertes placeholders ; aucun seuil inventé. |
| **Valeur OPS1** | FD-CAND-15 maintenue. |
| **Décisions / sources** | 45 FD-CAND-15 · 59 CAND-22 |
| **Priorité candidate** | P2 |
| **Dépendances** | E02,E13 |
| **Risques** | Seuils inventés |
| **Critères de sortie** | Placeholders visibles ; seuils OPEN jusqu’à gate FinOps/live. |
| **Gates** | Gate FinOps/live |
| **Mapping** | Transverse |
| **Stories** | `OPS1-US-E16-01` |

### OPS1-US-E16-01 — Afficher compteurs tokens/coût placeholders

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que UI/FinOps, je veux FD-CAND-15, afin de Transparence. |
| **Acteur** | UI/FinOps |
| **Besoin** | FD-CAND-15 |
| **Valeur** | Transparence |
| **Préconditions** | Chat/exec |
| **Scénario nominal** | Placeholders numériques non normatifs |
| **Erreurs / stop** | Seuil hardcodé définitif → STOP |
| **Critères d’acceptation** | Given usage ; When display ; Then placeholder + OPEN note |
| **Preuves attendues** | UI + note FD-CAND-15 |
| **Dépendances** | E02 |
| **Réserve** | FD-CAND-15 |
| **Priorité candidate** | P2 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |



## OPS1-E17 — Démonstration opératoire I7

| Champ | Contenu |
|-------|---------|
| **Objectif** | Scénario bout-en-bout GPT réel + Cursor réel + chat non scénarisé. |
| **Valeur OPS1** | Preuve OPS1 (I7). |
| **Décisions / sources** | 41 I7 · 43 succès · 54 scénario |
| **Priorité candidate** | P0 |
| **Dépendances** | E01–E14 (P0/P1) |
| **Risques** | Démo partielle présentée comme preuve |
| **Critères de sortie** | Checklist I7 + preuves négatives remote ; sans claim MVP/production. |
| **Gates** | Gate live + GO démo ; G-OPS1-BACKLOG-VAL |
| **Mapping** | I7 |
| **Stories** | `OPS1-US-E17-01`, `OPS1-US-E17-02` |

### OPS1-US-E17-01 — Checklist démonstration I7

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris/QA, je veux Preuve opératoire, afin de I7. |
| **Acteur** | Morris/QA |
| **Besoin** | Preuve opératoire |
| **Valeur** | I7 |
| **Préconditions** | Lots P0/P1 + gate live |
| **Scénario nominal** | Parcours bout-en-bout + PN remote |
| **Erreurs / stop** | Démo partielle = preuve → interdit |
| **Critères d’acceptation** | Given ready ; When I7 ; Then checklist signed by Morris |
| **Preuves attendues** | I7 evidence pack |
| **Dépendances** | E01–E14 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | L |
| **Gate Morris éventuelle** | Gate live + GO démo |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |

### OPS1-US-E17-02 — Interdire claims MVP/production en démo

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Docs, je veux Anti-claim, afin de Doctrine POC. |
| **Acteur** | Docs |
| **Besoin** | Anti-claim |
| **Valeur** | Doctrine POC |
| **Préconditions** | I7 |
| **Scénario nominal** | Rapports sans MVP/PROD READY |
| **Erreurs / stop** | Claim MVP → STOP review |
| **Critères d’acceptation** | Given demo report ; When review ; Then anti-claims hold |
| **Preuves attendues** | review sign-off |
| **Dépendances** | E17-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | XS |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` |


---

## Anti-claims

Ce document n’affirme pas : READY FOR DELIVERY · READY FOR IMPLEMENTATION · APPROVED · VALIDATED · COMMITTED FOR SPRINT · STACK FINALIZED · MVP DEFINED · LIVE READY · PRODUCTION READY.

## Verdict

`OPS1 BACKLOG EPICS/STORIES CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL`

<!-- END 61 -->

---

# CONTENU COMPLET — 62

<!-- BEGIN 62 -->
# SFIA Studio — Backlog OPS1 — decision pack (candidats)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `62-ops1-backlog-decision-pack.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Gate consommé** | `GO G-OPS1-BACKLOG — OPEN BACKLOG CYCLE` |
| **Gate attendu** | `G-OPS1-BACKLOG-VAL` |
| **Statut** | `backlog-decisions-candidate` — **0 validée** |
| **Décisions** | `OPS1-BACKLOG-CAND-01`…`20` |
| **Companions** | [`60`](./60-ops1-backlog-framing-and-prioritization.md) · [`61`](./61-ops1-epics-stories-and-acceptance-criteria.md) |
| **Branche** | `backlog/sfia-studio-ops1` |
| **Base** | `origin/main` @ `9bfee8ea113386ee2603093fbec366eda9161c19` |

> Toutes les décisions : `AWAITING G-OPS1-BACKLOG-VAL`. Aucune n’est VALIDATED.

---

## Synthèse

| Champ | Valeur |
|-------|--------|
| Nombre de candidats | 20 |
| Statut collectif | `AWAITING G-OPS1-BACKLOG-VAL` |
| Epics ([`61`](./61-ops1-epics-stories-and-acceptance-criteria.md)) | 17 |
| Stories | 41 |
| Réserves | FD-CAND-15 · UX-R01…R04 |
| Fermé | Delivery · code · live · MVP · production · CI delivery |

---

## OPS1-BACKLOG-CAND-01 — Structure des epics

| Champ | Contenu |
|-------|---------|
| **Sujet** | Structure des epics |
| **Proposition** | Retenir 17 epics `OPS1-E01`…`E17` couvrant session, chat, action, gate, contrat, paths, worktree, stockage, idempotence, rapport, reprise, UX, obs, sécurité, contrôles locaux/DevOps prep, FinOps, démo I7. |
| **Alternatives** | Fusionner en <10 epics ; aligner 1:1 sur I1–I7 seulement. |
| **Justification** | Couverture minimale demandée + transverses sécurité/obs/FinOps. |
| **Impacts** | Navigation backlog plus fine. |
| **Risques** | Sur-découpage. |
| **Dette** | Ajustement post-VAL possible. |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-02 — Ordre d’incréments

| Champ | Contenu |
|-------|---------|
| **Sujet** | Ordre d’incréments |
| **Proposition** | Séquencer I1→I2→I3→I4→I5→I6→I7 avec robustesse P1 (E06–E10) avant I7. |
| **Alternatives** | I4 avant I2 ; big-bang I7. |
| **Justification** | Aligné cadrage `41` et preuve progressive. |
| **Impacts** | Lots delivery futurs ordonnés. |
| **Risques** | Pression live trop tôt. |
| **Dette** | — |
| **Réserve** | Gate live distinct pour I2/I7. |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-03 — Périmètre P0/P1/P2

| Champ | Contenu |
|-------|---------|
| **Sujet** | Périmètre P0/P1/P2 |
| **Proposition** | P0 = chemin preuve I1–I7 gouverné ; P1 = fail-closed/idempotence/audit ; P2 = FinOps polish, responsive, CI PR prep ; OUT = MVP/prod/remote auto/CI delivery. |
| **Alternatives** | MoSCoW Must/Should ; score numérique. |
| **Justification** | Simplicité explicite sans fausse charge. |
| **Impacts** | Priorisation Morris. |
| **Risques** | Débat P0 vs P1. |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-04 — Séquencement I1–I7

| Champ | Contenu |
|-------|---------|
| **Sujet** | Mapping stories → I1–I7 |
| **Proposition** | Mapping documenté dans [`60`](./60-ops1-backlog-framing-and-prioritization.md) §7 et epics [`61`](./61-ops1-epics-stories-and-acceptance-criteria.md). |
| **Alternatives** | Trajectoire libre hors I1–I7. |
| **Justification** | I1–I7 déjà cadrés. |
| **Impacts** | Traçabilité. |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-05 — Séparation backlog / DevOps / delivery

| Champ | Contenu |
|-------|---------|
| **Sujet** | Séparation des cycles |
| **Proposition** | Ce backlog n’ouvre ni delivery ni DevOps ; E15 prépare CI PR sous GO DevOps distinct ; delivery lot = GO distinct post-`G-OPS1-BACKLOG-VAL`. |
| **Alternatives** | Ouvrir DevOps dès VAL backlog. |
| **Justification** | Amendement 4 tech-arch + doctrine SFIA. |
| **Impacts** | Pas de CI delivery maintenant. |
| **Risques** | Frustration outillage. |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-06 — Stratégie de dépendances

| Champ | Contenu |
|-------|---------|
| **Sujet** | Dépendances stories |
| **Proposition** | Dépendances explicites inter-stories ; lot delivery = fermeture transitive des P0 requis. |
| **Alternatives** | Stories totalement indépendantes. |
| **Justification** | Runtime OPS1 fortement chaîné (gate→contrat→exec→rapport). |
| **Impacts** | Lots cohérents. |
| **Risques** | Chemins critiques longs. |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-07 — Definition of Ready

| Champ | Contenu |
|-------|---------|
| **Sujet** | DoR documentaire |
| **Proposition** | Adopter DoR [`60`](./60-ops1-backlog-framing-and-prioritization.md) §14. |
| **Alternatives** | DoR delivery-only. |
| **Justification** | Qualité avant VAL. |
| **Impacts** | Revue ChatGPT facilitée. |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-08 — Definition of Done

| Champ | Contenu |
|-------|---------|
| **Sujet** | DoD documentaire / futur |
| **Proposition** | Adopter DoD [`60`](./60-ops1-backlog-framing-and-prioritization.md) §15 ; Done delivery hors cycle. |
| **Alternatives** | DoD code-only immédiat. |
| **Justification** | Sépare doc et implémentation. |
| **Impacts** | — |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-09 — Modèle de priorité

| Champ | Contenu |
|-------|---------|
| **Sujet** | Priorité P0/P1/P2/OUT |
| **Proposition** | Utiliser le modèle [`60`](./60-ops1-backlog-framing-and-prioritization.md) §4–5 comme référence unique. |
| **Alternatives** | MoSCoW ; RICE. |
| **Justification** | Lisibilité Morris. |
| **Impacts** | — |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-10 — Modèle de taille relative

| Champ | Contenu |
|-------|---------|
| **Sujet** | Tailles XS–XL |
| **Proposition** | Tailles relatives candidates uniquement ; pas de jours. |
| **Alternatives** | Points Fibonacci ; estimation horaire. |
| **Justification** | Évite fausse précision. |
| **Impacts** | — |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-11 — Couverture sécurité

| Champ | Contenu |
|-------|---------|
| **Sujet** | Sécurité dans le backlog |
| **Proposition** | E06, E07, E14 + PN remote E10 obligatoires P0/P1 ; pas de claim sandbox OS forte. |
| **Alternatives** | Sécurité seulement en DevOps. |
| **Justification** | Tech-arch amendements 1/4. |
| **Impacts** | Stories sécurité first-class. |
| **Risques** | — |
| **Dette** | Conteneur = trajectoire hors OPS1. |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-12 — Couverture UX

| Champ | Contenu |
|-------|---------|
| **Sujet** | UX dans le backlog |
| **Proposition** | E12 P0 desktop ; UX-R01…R04 non levées ; responsive P2 ; microcopy réserve UX-R02. |
| **Alternatives** | Bloquer backlog tant que UX-R non closes. |
| **Justification** | UX validée avec réserves. |
| **Impacts** | Delivery desktop d’abord. |
| **Risques** | Dette microcopy. |
| **Dette** | UX-R01…R04 |
| **Réserve** | UX-R01…R04 |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-13 — Couverture observabilité

| Champ | Contenu |
|-------|---------|
| **Sujet** | Observabilité |
| **Proposition** | E13 P1 événements corrélés sans secrets + métriques minimales ; pas d’APM complet. |
| **Alternatives** | APM immédiat. |
| **Justification** | Proportionné OPS1. |
| **Impacts** | — |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-14 — Couverture QA

| Champ | Contenu |
|-------|---------|
| **Sujet** | QA |
| **Proposition** | Chaque story P0/P1 a AC testables + preuves ; E15 checklist locale ; E17 checklist I7. |
| **Alternatives** | QA seulement post-delivery. |
| **Justification** | Preuve OPS1. |
| **Impacts** | — |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-15 — Traitement FD-CAND-15

| Champ | Contenu |
|-------|---------|
| **Sujet** | FinOps numériques |
| **Proposition** | Maintenir FD-CAND-15 OPEN ; E16 placeholders uniquement ; aucun seuil inventé dans le backlog. |
| **Alternatives** | Fixer seuils maintenant. |
| **Justification** | Décision amont maintenue. |
| **Impacts** | Stories FinOps P2. |
| **Risques** | — |
| **Dette** | Gate FinOps/live |
| **Réserve** | FD-CAND-15 |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-16 — Traitement UX-R01…R04

| Champ | Contenu |
|-------|---------|
| **Sujet** | Réserves UX |
| **Proposition** | Maintenir UX-R01…R04 ouvertes ; stories associées marquées réserve ; ne pas les lever ici. |
| **Alternatives** | Lever UX-R02 dans ce cycle. |
| **Justification** | Hors arbitrage backlog. |
| **Impacts** | — |
| **Risques** | — |
| **Dette** | UX-R |
| **Réserve** | UX-R01…R04 |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-17 — Critère d’ouverture premier cycle delivery

| Champ | Contenu |
|-------|---------|
| **Sujet** | Ouverture delivery |
| **Proposition** | Premier lot delivery seulement après `G-OPS1-BACKLOG-VAL` + GO delivery distinct + DoR du lot + P0 dépendances satisfaites. |
| **Alternatives** | Delivery dès documentation backlog. |
| **Justification** | CAND tech-arch 23/24 + doctrine. |
| **Impacts** | Code fermé maintenant. |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-18 — Critère d’ouverture cycle Intégration/DevOps

| Champ | Contenu |
|-------|---------|
| **Sujet** | Ouverture DevOps |
| **Proposition** | CI PR seulement sous GO Intégration/DevOps distinct ; E15-02 reste préparatoire. |
| **Alternatives** | CI PR dans premier delivery. |
| **Justification** | Amendement 4. |
| **Impacts** | — |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-19 — Éléments hors OPS1

| Champ | Contenu |
|-------|---------|
| **Sujet** | OUT |
| **Proposition** | Hors OPS1 : MVP, production, remote Git auto, multi-projets hors Campus360, CI delivery complète, sandbox OS forte affirmée, L4/L5, stack cloud finalisée. |
| **Alternatives** | Élargir OPS1. |
| **Justification** | Invariants §6 du prompt + tech-arch. |
| **Impacts** | Scope borné. |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

## OPS1-BACKLOG-CAND-20 — Statut initial des stories

| Champ | Contenu |
|-------|---------|
| **Sujet** | Statut stories |
| **Proposition** | Toutes stories `BACKLOG CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL` jusqu’à validation Morris du pack. |
| **Alternatives** | Marquer P0 comme APPROVED. |
| **Justification** | Évite fausse validation. |
| **Impacts** | — |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `AWAITING G-OPS1-BACKLOG-VAL` |

---

## Anti-claims

Pas de : BACKLOG VALIDATED · READY FOR DELIVERY · READY FOR IMPLEMENTATION · STACK FINALIZED · MVP DEFINED · LIVE READY · PRODUCTION READY · FULL CI IMPLEMENTED.

---

## Verdict

`OPS1 BACKLOG DECISION PACK CANDIDATE — AWAITING G-OPS1-BACKLOG-VAL`

20 candidats · 0 validés · gate attendu `G-OPS1-BACKLOG-VAL`.

<!-- END 62 -->

---

## Verdict

`OPS1 BACKLOG DOCUMENTED — READY FOR CHATGPT REVIEW`

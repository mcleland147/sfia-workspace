# SFIA Review Pack — PR #276 Merge (FULL)

## Metadata
- date/heure/fuseau: 2026-07-27 18:38:42 CEST (+0200)
- merge timestamp: 2026-07-27 18:35:17 CEST (+0200)
- cycle: 8 — Delivery (+ 13 PR readiness, 15 Capitalisation/REX, 7 Intégration/DevOps, 9 QA, 14 Post-merge observation initiale)
- profil SFIA: Capitalization
- profondeur: Critical
- typologie: DOC / CAPITALIZATION / MERGE / M1
- gate consommé: `GO MERGE PR #276 FOR OPTION A M1 CAPITALIZATION — SFIA STUDIO V3-NATIVE`
- worktree: `/Users/morris/Projects/sfia-workspace-m1-capitalization`
- branche: `docs/sfia-studio-m1-capitalization-rex`

## 1. Local Git Truth Check (avant merge)
- HEAD: `fa0eebe00ce3b765a8a486aa660dddfab40123a0`
- parent: `ae61c3ed48d4d1c9fe751eddd73617ba15480734`
- origin/main avant: `ae61c3ed48d4d1c9fe751eddd73617ba15480734`
- origin/head: `fa0eebe00ce3b765a8a486aa660dddfab40123a0`
- ahead/behind origin/main...HEAD: `0 / 1`
- worktree: clean
- opérations Git actives: aucune
- handoff initial: branche `sfia/review-handoff` fichier `sfia-review-handoff/latest-chatgpt-review.md` blob `e9f64dcf0cacf3bfded8fd3986a70806cc1a4450`
- status initial: `## docs/sfia-studio-m1-capitalization-rex...origin/docs/sfia-studio-m1-capitalization-rex` (clean)

## 2. Metadata PR avant merge
```json
{
  "additions": 441,
  "autoMergeRequest": null,
  "baseRefName": "main",
  "baseRefOid": "ae61c3ed48d4d1c9fe751eddd73617ba15480734",
  "body": "## Objectif\n\nVersionner le REX M1 documentant l’implémentation du required gate SFIA Studio et les preuves comportementales associées.\n\n## Portée\n\n- ajout de :\n  `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md`\n- 441 lignes ;\n- aucun changement workflow, ruleset ou code produit.\n\n## Preuves capitalisées\n\n- PR #268 à #275 ;\n- PR contrôlées #272 et #273 ;\n- required check `SFIA Studio Required Gate` ;\n- ruleset `19798462` ;\n- runs de preuve M1 ;\n- PR #275 et CI post-merge.\n\n## État de gouvernance\n\n- F-A6-PM-G01 = MITIGATED ;\n- F-A6-PM-G01 = NOT CLOSED ;\n- Option A non COMPLETE ;\n- T-A7 non ouverte ;\n- rollback et bypass non testés ;\n- configuration M1 loose inchangée ;\n- D1–D7 NOT DECIDED.\n\n## Validation\n\n- 1 commit ;\n- 1 fichier ;\n- 441 insertions ;\n- `git diff --check` conforme ;\n- contenu complet ;\n- aucune modification workflow/ruleset ;\n- aucun nouveau choix de trajectoire.\n\n## Réserves\n\n- le REX versionné ne ferme pas F-A6 ;\n- le REX ne vaut pas Option A COMPLETE ;\n- le REX n’ouvre pas T-A7 ;\n- rollback et bypass restent non prouvés ;\n- les recommandations restent soumises à décision Morris.\n\n## Anti-claims\n\n- PR ouverte ≠ PR READY ;\n- PR ouverte ≠ merge ;\n- REX versionné ≠ F-A6 CLOSED ;\n- capitalisation ≠ décision Morris ;\n- CI success ≠ rollback/bypass testés.\n",
  "comments": [],
  "commits": [
    {
      "authoredDate": "2026-07-27T16:14:00Z",
      "authors": [
        {
          "email": "morris@macbook-air1.home",
          "id": "",
          "login": "",
          "name": "Morris Cleland"
        },
        {
          "email": "cursoragent@cursor.com",
          "id": "U_kgDOC972lw",
          "login": "cursoragent",
          "name": "Cursor"
        }
      ],
      "committedDate": "2026-07-27T16:14:00Z",
      "messageBody": "Co-authored-by: Cursor <cursoragent@cursor.com>",
      "messageHeadline": "docs(sfia-studio): capitalize M1 implementation and proofs",
      "oid": "fa0eebe00ce3b765a8a486aa660dddfab40123a0"
    }
  ],
  "deletions": 0,
  "files": [
    {
      "path": "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md",
      "additions": 441,
      "deletions": 0,
      "changeType": "ADDED"
    }
  ],
  "headRefName": "docs/sfia-studio-m1-capitalization-rex",
  "headRefOid": "fa0eebe00ce3b765a8a486aa660dddfab40123a0",
  "isDraft": false,
  "mergeStateStatus": "CLEAN",
  "mergeable": "MERGEABLE",
  "mergedAt": null,
  "number": 276,
  "reviews": [],
  "state": "OPEN",
  "title": "docs(sfia-studio): capitalize M1 implementation and proofs",
  "url": "https://github.com/mcleland147/sfia-workspace/pull/276"
}
```

### Corps PR complet
```markdown
## Objectif

Versionner le REX M1 documentant l’implémentation du required gate SFIA Studio et les preuves comportementales associées.

## Portée

- ajout de :
  `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md`
- 441 lignes ;
- aucun changement workflow, ruleset ou code produit.

## Preuves capitalisées

- PR #268 à #275 ;
- PR contrôlées #272 et #273 ;
- required check `SFIA Studio Required Gate` ;
- ruleset `19798462` ;
- runs de preuve M1 ;
- PR #275 et CI post-merge.

## État de gouvernance

- F-A6-PM-G01 = MITIGATED ;
- F-A6-PM-G01 = NOT CLOSED ;
- Option A non COMPLETE ;
- T-A7 non ouverte ;
- rollback et bypass non testés ;
- configuration M1 loose inchangée ;
- D1–D7 NOT DECIDED.

## Validation

- 1 commit ;
- 1 fichier ;
- 441 insertions ;
- `git diff --check` conforme ;
- contenu complet ;
- aucune modification workflow/ruleset ;
- aucun nouveau choix de trajectoire.

## Réserves

- le REX versionné ne ferme pas F-A6 ;
- le REX ne vaut pas Option A COMPLETE ;
- le REX n’ouvre pas T-A7 ;
- rollback et bypass restent non prouvés ;
- les recommandations restent soumises à décision Morris.

## Anti-claims

- PR ouverte ≠ PR READY ;
- PR ouverte ≠ merge ;
- REX versionné ≠ F-A6 CLOSED ;
- capitalisation ≠ décision Morris ;
- CI success ≠ rollback/bypass testés.
```

## 3. Diff GitHub / source complet (avant merge)
```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md
new file mode 100644
index 0000000..6c87cf4
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md
@@ -0,0 +1,441 @@
+# SFIA Studio — REX M1 : implémentation du required gate et preuves comportementales
+
+## 1. Métadonnées
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Date/heure/fuseau** | 2026-07-27 17:52:49 CEST (+0200) |
+| **Cycle** | 15 — Capitalisation / REX |
+| **Cycles complémentaires** | 9 QA · 7 Intégration/DevOps · 14 Post-merge · 1 Cadrage décisionnel futur |
+| **Profil** | Capitalization — profondeur Critical |
+| **Typologie** | DOC / CAPITALIZATION / REX / M1 / OPTION A |
+| **Gate Morris consommé** | `GO CAPITALIZE OPTION A M1 IMPLEMENTATION AND PROOFS — SFIA STUDIO V3-NATIVE` |
+| **Repository** | `mcleland147/sfia-workspace` |
+| **Ref / HEAD de capitalisation** | `origin/main` @ `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
+| **Auteur d’exécution** | Cursor (agent) sous autorité Morris |
+| **Autorité décisionnelle** | Morris (L0) — **aucune décision de trajectoire prise dans ce document** |
+| **Statut du document** | `capitalization-candidate — Morris decision required for any resulting trajectory decision` |
+| **Finding associé** | `F-A6-PM-G01` |
+| **État F-A6 (canonique)** | `MITIGATED — NOT CLOSED` |
+
+> Ce document capitalise des **faits Git et GitHub déjà observés**.
+> Il ne crée aucune décision Morris, ne ferme pas F-A6, ne déclare pas Option A COMPLETE et n’ouvre pas T-A7.
+
+### Légende de qualification (utilisée dans tout le document)
+
+| Qualifiant | Signification |
+|------------|---------------|
+| **Observation** | Fait constaté, sans jugement de trajectoire |
+| **Preuve** | Artefact Git/GitHub vérifiable (PR, run, job, blob, ruleset) |
+| **Résultat validé** | Comportement déjà démontré dans un cycle Morris antérieur |
+| **Réserve** | Limite ouverte, non convertie en décision |
+| **Risque résiduel** | Exposition restante malgré M1 |
+| **Recommandation** | Proposition non décidée |
+| **Option** | Alternative de trajectoire pour arbitrage Morris |
+| **Décision Morris requise** | Point explicitement `NOT DECIDED` |
+
+---
+
+## 2. Objet et périmètre
+
+### Pourquoi M1 a été introduit
+
+**Observation :** le finding `F-A6-PM-G01` a été capitalisé après le merge de la PR #267 sans revue PR/CI formelle et sans CI SFIA Studio observable sur les changements Studio.
+
+**Objectif de M1 :** instaurer un contrôle de gouvernance de merge sur `main` capable de :
+
+1. détecter si une PR touche le périmètre SFIA Studio ;
+2. exécuter une validation lourde uniquement si nécessaire ;
+3. exposer un **required check stable** (`SFIA Studio Required Gate`) utilisable par un ruleset GitHub ;
+4. bloquer l’intégration d’une PR Studio invalide ;
+5. ne pas bloquer indûment une PR hors Studio.
+
+### Problème de gouvernance traité
+
+| Problème | Nature |
+|----------|--------|
+| Absence de CI Studio path-aware | Pas de signal de qualité avant merge sur `main` |
+| Required checks path-filtered classiques | Instables ou inapplicables hors paths |
+| Merge possible sans gate agrégé | Risque de régression silencieuse sur Studio |
+| Finding F-A6 ouvert | Mitigation technique et comportementale requise avant toute clôture |
+
+### Inclus dans ce REX
+
+- chronologie des PR #268–#275 et preuves associées ;
+- architecture factuelle du workflow + ruleset M1 ;
+- matrice des preuves comportementales ;
+- résultats obtenus et non-preuves ;
+- écarts / difficultés capitalisés ;
+- état F-A6 MITIGATED NOT CLOSED ;
+- recommandations et options **non décidées**.
+
+### Hors périmètre
+
+- modification du workflow ou du ruleset ;
+- test réel de rollback ou de bypass ;
+- clôture F-A6 ;
+- déclaration Option A COMPLETE ;
+- ouverture T-A7 ;
+- nettoyage des branches/worktrees ;
+- exécution métier Option A / providers live ;
+- action Notion/CMP ;
+- versionnement Git de ce REX (commit projet = gate séparé).
+
+---
+
+## 3. Chronologie factuelle
+
+| Ordre | Événement | PR / artefact | SHA / ID | Qualification |
+|------:|-----------|---------------|----------|---------------|
+| 1 | CI initiale + gouvernance merge préparée | PR **#268** MERGED | squash/merge `508ef7c4619e27b664d087fd97d53afe74ea93cc` | **Preuve** d’introduction du workflow |
+| 2 | Revues documentaires CI / post-merge | PR **#269** MERGED | merge `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` ; docs `25`–`31` | **Preuve** documentaire |
+| 3 | Required gate path-aware (P3) | PR **#270** MERGED | `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513` ; doc Option A `32-path-aware-…` | **Résultat validé** — P3 intégré |
+| 4 | Preuve hors Studio (préparatoire) | PR **#271** CLOSED non mergée | head `ffa36fdef905…` ; run `30239805289` SUCCESS | **Preuve** comportementale pré-ruleset ou contrôlée |
+| 5 | Preuve hors Studio sous M1 | PR **#272** CLOSED non mergée | head `09a2c093427b…` ; run `30248284607` SUCCESS | **Résultat validé** — hors Studio PASS |
+| 6 | Preuve Studio failure | PR **#273** (1er head) | head `dd4a083d8e86…` ; run `30248328467` FAILURE | **Résultat validé** — blocage |
+| 7 | Recovery Studio sur la même PR | PR **#273** (2e head) | head `1b8ea24afc33…` ; run `30248480927` SUCCESS | **Résultat validé** — recovery |
+| 8 | Activation ruleset M1 | Ruleset ID `19798462` | check `SFIA Studio Required Gate` · integration `15368` | **Résultat validé** — contrôle actif |
+| 9 | Formalisation F-A6 MITIGATED | PR **#274** MERGED | `b89065fa92d823843f1eb1014c304e7d13233556` ; doc `24` | **Résultat validé** — MITIGATED NOT CLOSED |
+| 10 | Alignement doc POC `32` | PR **#275** MERGED | squash `ae61c3ed48d4d1c9fe751eddd73617ba15480734` | **Résultat validé** — claims CI obsolètes retirés |
+| 11 | CI post-merge #275 | run push | `30278533761` SUCCESS | **Résultat validé** |
+
+**Observation :** `origin/main` au moment de cette capitalisation est exactement `ae61c3ed48d4d1c9fe751eddd73617ba15480734`.
+
+---
+
+## 4. Architecture du contrôle M1
+
+> Description factuelle de l’état sur `main`. **Pas** une nouvelle baseline d’architecture produit.
+
+### 4.1 Workflow `.github/workflows/sfia-studio-ci.yml`
+
+| Élément | Valeur factuelle |
+|---------|------------------|
+| Nom | `SFIA Studio CI` |
+| Blob sur `main` | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
+| Déclenchement | `pull_request` et `push` vers `main` (paths Studio + workflow lui-même) |
+
+#### Jobs
+
+1. **Detect SFIA Studio changes**
+   - calcule `studio_changed=true|false`
+   - fail-closed si valeur invalide
+
+2. **Build and validate SFIA Studio**
+   - `needs: detect`
+   - exécuté si Studio concerné (PR avec `studio_changed=true`, ou push corroboré)
+   - steps : Node, install, typecheck, lint, build, Vitest, modeled governance, secret scan, trailing whitespace
+
+3. **SFIA Studio Required Gate** (`required_gate`)
+   - `if: always()`
+   - agrège Detect + Build
+   - **PASS** si hors Studio (`studio_changed=false`) sans exiger Build
+   - **PASS** si Studio et Build success
+   - **FAIL** si Studio et Build failure/cancelled/absent
+
+### 4.2 Ruleset GitHub
+
+| Champ | Valeur |
+|-------|--------|
+| ID | `19798462` |
+| Nom | `SFIA Studio Main Required Gate — M1` |
+| Enforcement | `active` |
+| Cible | `refs/heads/main` |
+| Required check | `SFIA Studio Required Gate` |
+| Integration ID | `15368` |
+| Non-fast-forward | bloqué |
+| Deletion de `main` | bloquée |
+| Bypass actors | User `295557155`, mode `pull_request` |
+| Approvals requis | `0` (**configuration loose** — **réserve**) |
+| Strict up-to-date | `false` (**loose** — **réserve**) |
+
+### 4.3 Comportements attendus (déjà démontrés)
+
+| Cas | Comportement |
+|-----|--------------|
+| PR hors Studio | Detect success · Build skipped · Required Gate success |
+| PR Studio en échec | Detect success · Build failure · Required Gate failure · merge bloqué |
+| PR Studio corrigée | Detect/Build/Gate success |
+| Push post-merge Studio | Detect/Build/Gate success |
+
+---
+
+## 5. Matrice des preuves
+
+| # | Scénario | Branche / PR | Head SHA | Run ID | Detect | Build | Required Gate | Comportement GitHub | Résultat | Limite |
+|---|----------|--------------|----------|--------|--------|-------|---------------|---------------------|----------|--------|
+| 1 | PR hors Studio | `qa/sfia-studio-m1-controlled-non-studio-proof` / **#272** CLOSED non mergée | `09a2c093427b60234256355bdb7c3521e1e2ae01` | `30248284607` | success `89920211552` | **skipped** `89920245972` | success `89920245604` | Gate PASS sans validation lourde | **PASS** hors Studio | Pas un merge vers main ; PR fermée sans merge |
+| 2 | PR Studio en échec | `qa/sfia-studio-m1-controlled-studio-proof` / **#273** | `dd4a083d8e86d06b99dbdcca43f3ec9f24752da0` | `30248328467` | success `89920352750` | **failure** `89920382756` | **failure** `89920627798` | Required check rouge | **BLOCKED** | Échec volontaire contrôlé |
+| 3 | Recovery Studio | même PR **#273** | `1b8ea24afc33502b596c564f7daa911d9dc3e995` | `30248480927` | success `89920826448` | success `89920863525` | success `89921140417` | Required check vert | **RECOVERY PASS** | PR ensuite fermée sans merge |
+| 4 | PR documentaire Studio | `docs/sfia-studio-doc32-post-p3-m1-correction` / **#275** MERGED | `dd2a68c6a1e45fee1e1f397cb644c2c082a3d877` | `30277076735` | success `90013737560` | success `90013783710` | success `90014180221` | Merge squash autorisé après CLEAN | **PASS** + merge | Contenu doc seulement |
+| 5 | Push post-merge `main` | `main` après #275 | `ae61c3ed48d4d1c9fe751eddd73617ba15480734` | `30278533761` | success `90018681920` | success `90018732641` | success `90019119514` | CI push complète | **PASS** post-merge | N’équivaut pas à test rollback/bypass |
+
+### Preuve préparatoire complémentaire (hors matrice obligatoire)
+
+| Scénario | PR | Run | Résultat |
+|----------|----|-----|----------|
+| Hors Studio préparatoire | **#271** CLOSED | `30239805289` — Detect success · Build skipped · Gate success | **Preuve** cohérente avec #272 |
+
+---
+
+## 6. Résultats obtenus
+
+| Affirmation | Qualification | Commentaire |
+|-------------|---------------|-------------|
+| M1 techniquement appliqué | **Résultat validé** | Workflow + ruleset actifs sur `main` |
+| M1 comportementalement prouvé | **Résultat validé** | Preuves #272 / #273 / #275 / post-merge |
+| Required gate stable | **Résultat validé** | Nom de check constant `SFIA Studio Required Gate` |
+| Absence de blocage indu hors Studio | **Résultat validé** | #272 Build skipped + Gate success |
+| Blocage d’une PR Studio invalide | **Résultat validé** | #273 failure run |
+| Recovery réussie | **Résultat validé** | #273 recovery run |
+| CI post-merge réussie | **Résultat validé** | run `30278533761` |
+| F-A6 formalisé MITIGATED | **Résultat validé** | PR #274 / doc `24` |
+| Doc POC `32` aligné post-P3/M1 | **Résultat validé** | PR #275 · blob `43f5157a…` |
+
+---
+
+## 7. Ce que M1 ne prouve pas
+
+| Non-preuve | Qualification |
+|------------|---------------|
+| Rollback du ruleset | **non testé** |
+| Bypass du ruleset | **non testé** (bypass non utilisé sur #272–#275) |
+| Comportement multi-acteurs | **non testé** |
+| Résilience aux indisponibilités GitHub Actions | **non testée** |
+| Gouvernance de modification future du ruleset | **non éprouvée** |
+| Configuration bypass / approvals « loose » | **inchangée** — **réserve** |
+| M1 COMPLETE ⇒ Option A COMPLETE | **faux** — anti-claim |
+| M1 COMPLETE ⇒ F-A6 CLOSED | **faux** — anti-claim |
+| M1 ⇒ ouverture T-A7 | **faux** — anti-claim |
+| CI success ⇒ industrialisation / production ready | **faux** — anti-claim |
+
+---
+
+## 8. Analyse des écarts et difficultés
+
+| Écart / difficulté | Capitalisation |
+|--------------------|----------------|
+| Trailing whitespaces | Ont cassé des runs documentaires ; un step dédié dans Build a été intégré — **observation** utile pour futurs docs |
+| Check final stable | Les required checks path-filtered seuls sont fragiles ; l’agrégateur `always()` résout le cas hors Studio — **résultat validé** |
+| Workflows path-filtered comme required checks | Risque de check « absent » hors paths — **risque résiduel** historique corrigé par Detect+Gate |
+| Détection path-aware | Distingue Studio / hors Studio sans inventer un second workflow — **valeur confirmée** |
+| Skipped vs success | Build skipped hors Studio ≠ échec ; Gate doit PASS explicitement — **résultat validé** |
+| PR contrôlées réelles | #272/#273 fermées sans merge fournissent des preuves sans polluer `main` — **pratique à conserver** |
+| Micro-cycles | Coût élevé (push / readiness / merge séparés) — **observation** ; rationaliser push+ouverture PR reste une **recommandation**, merge séparé reste un garde-fou |
+| Alignement documentaire tardif | Doc POC `32` a nécessité #275 après P3/M1 — **dette de synchronisation** documentaire |
+
+---
+
+## 9. Garde-fous confirmés
+
+| Garde-fou | Statut |
+|-----------|--------|
+| Aucun bypass utilisé sur les preuves M1 / #274 / #275 | **Observation** confirmée |
+| Aucun `--admin` | **Observation** confirmée |
+| `main` protégée (ruleset actif) | **Résultat validé** |
+| Merge squash avec `--match-head-commit` (#275) | **Résultat validé** |
+| Séparation GO push / PR readiness / merge | **Résultat validé** (pratique de cycle) |
+| Review handoff Git (`sfia/review-handoff`) | **Résultat validé** |
+| Anti-claims dans docs `24` et POC `32` | **Résultat validé** |
+
+---
+
+## 10. État de F-A6-PM-G01
+
+### État obligatoire
+
+`MITIGATED — NOT CLOSED`
+
+Source canonique : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md` (post PR #274).
+
+### Critères couverts (mitigation)
+
+| Critère | Couverture |
+|---------|------------|
+| Workflow CI Studio sur `main` | **couvert** (#268–#270) |
+| Required check stable | **couvert** |
+| Ruleset actif sur `main` | **couvert** (`19798462`) |
+| Preuve hors Studio PASS | **couvert** (#272) |
+| Preuve Studio FAIL puis recovery | **couvert** (#273) |
+| Formalisation documentaire MITIGATED | **couvert** (#274) |
+| Alignement doc POC `32` | **couvert** (#275) |
+
+### Preuves disponibles
+
+Voir §5 et chronologie §3.
+
+### Critères historiques restant ouverts (empêchant clôture automatique)
+
+| Critère ouvert | Commentaire |
+|----------------|-------------|
+| Décision Morris explicite de CLOSED | **NOT DECIDED** — D-M1-03 conserve NOT CLOSED |
+| Rollback ruleset | non testé |
+| Bypass | non testé |
+| Durcissement config loose | non décidé |
+| REX M1 versionné sur `main` | ce document est **draft local** jusqu’à gate de commit |
+
+### Raisons empêchant la clôture automatique
+
+1. La formalisation #274 a explicitement séparé MITIGATED et CLOSED.
+2. Des non-preuves critiques (§7) restent ouvertes.
+3. Aucun gate Morris de clôture n’a été consommé.
+4. Ce REX **recommandera** éventuellement une réévaluation, sans la décider.
+
+**Interdit dans ce document :** présenter `F-A6 CLOSED` comme verdict.
+
+---
+
+## 11. Réserves et risques résiduels
+
+| Réserve / risque | Qualification |
+|------------------|---------------|
+| REX M1 produit dans ce cycle, **non encore versionné** | **Réserve** (commit projet = gate séparé) |
+| Rollback non testé | **Réserve** |
+| Bypass non testé | **Réserve** |
+| Configuration M1 loose (approvals 0, strict false, bypass PR mode) | **Réserve / risque résiduel** |
+| Findings F-CI éventuels non rouverts ici | **Observation** — hors mutation |
+| Branches/worktrees résiduels (doc32, F-A6, preuves QA) | **Réserve** de cleanup |
+| Dette de maintenance du ruleset | **Risque résiduel** |
+| Dérive documentaire future (POC `32` vs Option A `32-path-aware`) | **Risque résiduel** de confusion de chemins |
+| Option A non COMPLETE | **Réserve trajectoire** |
+| T-A7 non ouverte | **Réserve trajectoire** |
+
+---
+
+## 12. Recommandations
+
+> Toute recommandation ci-dessous est **non décidée**.
+
+### 12.1 Court terme
+
+| ID | Recommandation | Valeur | Dette créée | Alternative plus simple | Gate Morris requis | Répétable / arbitrage |
+|----|----------------|--------|-------------|-------------------------|--------------------|-----------------------|
+| R1 | Commit + PR du présent REX (`33-…`) | Trace capitalisée sur `main` | Micro-cycle docs | Garder draft local | `GO COMMIT OPTION A M1 CAPITALIZATION…` | Répétable |
+| R2 | Nettoyage borné branches/worktrees F-A6 + doc32 + preuves QA | Réduit bruit local | Risque de supprimer trop tôt | Conserver jusqu’à GO cleanup | Gate cleanup séparé | Arbitrage humain |
+| R3 | Index Option A racine (si un jour créé) — **ne pas inventer maintenant** | Navigabilité | Nouveau doc | Liens croisés dans `24`/`33` seulement | Gate docs index | Arbitrage |
+
+### 12.2 Avant décision de clôture F-A6
+
+| ID | Recommandation | Valeur | Dette | Alternative | Gate requis | Nature |
+|----|----------------|--------|-------|-------------|-------------|--------|
+| R4 | Cycle borné test **rollback** ruleset | Prouve réversibilité | Risque opérationnel sur `main` | Accepter réserve permanente | Gate test rollback | Arbitrage humain |
+| R5 | Cycle borné test **bypass** (puis révocation) | Prouve surface de contournement | Risque gouvernance | Documenter bypass « known loose » sans test | Gate test bypass | Arbitrage humain |
+| R6 | Réévaluer F-A6 seulement après R4/R5 **ou** acceptation formelle des non-preuves | Évite CLOSED prématuré | Retarde clôture | CLOSED conditionnel documenté | Gate réévaluation F-A6 | Arbitrage humain |
+
+### 12.3 Avant ouverture T-A7
+
+| ID | Recommandation | Valeur | Dette | Alternative | Gate requis | Nature |
+|----|----------------|--------|-------|-------------|-------------|--------|
+| R7 | Ne pas lier T-A7 à la seule existence de M1 | Évite promotion implicite | Aucune | Cadrage T-A7 indépendant | Gate cadrage T-A7 | Arbitrage |
+| R8 | Exiger un pack de cadrage T-A7 distinct (périmètre produit ≠ CI gate) | Séparation des préoccupations | Cycle supplémentaire | Absorber dans Option A runtime | Gate T-A7 | Arbitrage |
+
+### 12.4 Maintenance M1
+
+| ID | Recommandation | Valeur | Dette | Alternative | Gate | Nature |
+|----|----------------|--------|-------|-------------|------|--------|
+| R9 | Toute modification workflow/ruleset = cycle DevOps borné + preuves | Évite régression silencieuse | Coût process | Hotfix non gouverné (**à éviter**) | Gate DevOps M1 | Répétable |
+| R10 | Conserver le nom exact du required check | Stabilité ruleset | Couplage nom | Migration versionnée du check | Gate ruleset | Répétable |
+| R11 | Surveiller la config loose ; durcir seulement sous GO | Réduit bypass accidentel | Friction merge | Maintenir loose + monitoring | Gate durcissement | Arbitrage |
+
+---
+
+## 13. Options de trajectoire pour Morris
+
+> Aucune option n’est sélectionnée. Statut : **NOT DECIDED**.
+
+### Option 1 — Conserver F-A6 MITIGATED et poursuivre sans clôture
+
+| | |
+|--|--|
+| **Bénéfices** | Fidèle à D-M1-03 ; pas de faux CLOSED ; laisse du temps pour REX versionné |
+| **Risques** | Finding reste ouvert longtemps ; dette visuelle de gouvernance |
+| **Dette** | Suivi périodique F-A6 |
+| **Prérequis** | Aucun technique immédiat |
+| **Gate requis** | Aucun pour « ne rien fermer » ; éventuellement commit REX |
+
+### Option 2 — Lancer un cycle borné rollback + bypass avant réévaluation
+
+| | |
+|--|--|
+| **Bénéfices** | Comble les non-preuves §7 ; meilleure base pour CLOSED futur |
+| **Risques** | Erreur opérationnelle sur ruleset ; fenêtre de faiblesse |
+| **Dette** | Scripts/runbooks de test ; evidence pack |
+| **Prérequis** | GO Morris dédié ; fenêtre contrôlée ; pas de `--admin` caché |
+| **Gate requis** | Gate test rollback/bypass |
+
+### Option 3 — Renforcer la configuration bypass / approvals avant réévaluation
+
+| | |
+|--|--|
+| **Bénéfices** | Réduit la surface loose |
+| **Risques** | Friction delivery ; faux sentiment de sécurité sans preuves comportementales |
+| **Dette** | Ajustements ruleset + re-preuve éventuelle |
+| **Prérequis** | GO durcissement ; critères d’acceptation |
+| **Gate requis** | Gate durcissement M1 |
+
+### Option 4 — Différer toute décision F-A6 jusqu’au cadrage T-A7
+
+| | |
+|--|--|
+| **Bénéfices** | Évite de coupler CI gate et trajectoire produit |
+| **Risques** | F-A6 reste MITIGATED indéfiniment ; confusion stakeholders |
+| **Dette** | Suivi croisé Option A / F-A6 |
+| **Prérequis** | Clarifier que T-A7 ≠ CI |
+| **Gate requis** | Gate cadrage T-A7 (ultérieur) |
+
+---
+
+## 14. Décisions Morris requises
+
+Statut obligatoire de chaque item : **`NOT DECIDED`**
+
+| ID | Décision | Statut |
+|----|----------|--------|
+| D1 | Faut-il tester le rollback du ruleset M1 ? | NOT DECIDED |
+| D2 | Faut-il tester le bypass M1 ? | NOT DECIDED |
+| D3 | Faut-il durcir la configuration loose (approvals / strict / bypass) ? | NOT DECIDED |
+| D4 | Quand réévaluer F-A6 (rester MITIGATED vs envisager CLOSED) ? | NOT DECIDED |
+| D5 | Faut-il ouvrir ultérieurement T-A7 ? | NOT DECIDED |
+| D6 | Faut-il versionner ce REX sur `main` maintenant ? | NOT DECIDED |
+| D7 | Faut-il nettoyer branches/worktrees résiduels maintenant ? | NOT DECIDED |
+
+Aucune de ces décisions n’est tranchée par la rédaction de ce document.
+
+---
+
+## 15. Verdict de capitalisation
+
+`M1 IMPLEMENTATION AND BEHAVIORAL PROOFS CAPITALIZED — F-A6 MITIGATED NOT CLOSED — ROLLBACK AND BYPASS UNTESTED — OPTION A NOT COMPLETE — T-A7 NOT OPEN — MORRIS DECISION REQUIRED FOR NEXT TRAJECTORY STEP`
+
+### Anti-claims (rappel)
+
+- capitalisation M1 ≠ F-A6 CLOSED
+- capitalisation M1 ≠ Option A COMPLETE
+- capitalisation M1 ≠ ouverture T-A7
+- CI success ≠ rollback/bypass testés
+- REX draft local ≠ REX versionné sur `main`
+- recommandation ≠ décision Morris
+
+---
+
+## Annexe A — Références de chemins
+
+| Artefact | Path |
+|----------|------|
+| Workflow | `.github/workflows/sfia-studio-ci.yml` |
+| F-A6 / CI gouvernance | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md` |
+| Path-aware préparation (Option A doc 32) | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md` |
+| POC vertical slice (doc 32 corrigé #275) | `projects/sfia-studio/32-poc-vertical-slice-functional-design.md` |
+| CI reviews #269 | docs Option A `25`–`31` |
+| **Ce REX** | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md` |
+
+## Annexe B — Identifiants stables
+
+| Type | Valeur |
+|------|--------|
+| Ruleset | `19798462` |
+| Required check | `SFIA Studio Required Gate` |
+| Integration | `15368` |
+| Workflow blob | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
+| `main` HEAD (capitalisation) | `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
+| Doc POC 32 blob | `43f5157a2bb198fb6fb04969677277d80645a434` |
```

## 4. Contenu complet document 33 (441 lignes)
```markdown
# SFIA Studio — REX M1 : implémentation du required gate et preuves comportementales

## 1. Métadonnées

| Métadonnée | Valeur |
|------------|--------|
| **Date/heure/fuseau** | 2026-07-27 17:52:49 CEST (+0200) |
| **Cycle** | 15 — Capitalisation / REX |
| **Cycles complémentaires** | 9 QA · 7 Intégration/DevOps · 14 Post-merge · 1 Cadrage décisionnel futur |
| **Profil** | Capitalization — profondeur Critical |
| **Typologie** | DOC / CAPITALIZATION / REX / M1 / OPTION A |
| **Gate Morris consommé** | `GO CAPITALIZE OPTION A M1 IMPLEMENTATION AND PROOFS — SFIA STUDIO V3-NATIVE` |
| **Repository** | `mcleland147/sfia-workspace` |
| **Ref / HEAD de capitalisation** | `origin/main` @ `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
| **Auteur d’exécution** | Cursor (agent) sous autorité Morris |
| **Autorité décisionnelle** | Morris (L0) — **aucune décision de trajectoire prise dans ce document** |
| **Statut du document** | `capitalization-candidate — Morris decision required for any resulting trajectory decision` |
| **Finding associé** | `F-A6-PM-G01` |
| **État F-A6 (canonique)** | `MITIGATED — NOT CLOSED` |

> Ce document capitalise des **faits Git et GitHub déjà observés**.
> Il ne crée aucune décision Morris, ne ferme pas F-A6, ne déclare pas Option A COMPLETE et n’ouvre pas T-A7.

### Légende de qualification (utilisée dans tout le document)

| Qualifiant | Signification |
|------------|---------------|
| **Observation** | Fait constaté, sans jugement de trajectoire |
| **Preuve** | Artefact Git/GitHub vérifiable (PR, run, job, blob, ruleset) |
| **Résultat validé** | Comportement déjà démontré dans un cycle Morris antérieur |
| **Réserve** | Limite ouverte, non convertie en décision |
| **Risque résiduel** | Exposition restante malgré M1 |
| **Recommandation** | Proposition non décidée |
| **Option** | Alternative de trajectoire pour arbitrage Morris |
| **Décision Morris requise** | Point explicitement `NOT DECIDED` |

---

## 2. Objet et périmètre

### Pourquoi M1 a été introduit

**Observation :** le finding `F-A6-PM-G01` a été capitalisé après le merge de la PR #267 sans revue PR/CI formelle et sans CI SFIA Studio observable sur les changements Studio.

**Objectif de M1 :** instaurer un contrôle de gouvernance de merge sur `main` capable de :

1. détecter si une PR touche le périmètre SFIA Studio ;
2. exécuter une validation lourde uniquement si nécessaire ;
3. exposer un **required check stable** (`SFIA Studio Required Gate`) utilisable par un ruleset GitHub ;
4. bloquer l’intégration d’une PR Studio invalide ;
5. ne pas bloquer indûment une PR hors Studio.

### Problème de gouvernance traité

| Problème | Nature |
|----------|--------|
| Absence de CI Studio path-aware | Pas de signal de qualité avant merge sur `main` |
| Required checks path-filtered classiques | Instables ou inapplicables hors paths |
| Merge possible sans gate agrégé | Risque de régression silencieuse sur Studio |
| Finding F-A6 ouvert | Mitigation technique et comportementale requise avant toute clôture |

### Inclus dans ce REX

- chronologie des PR #268–#275 et preuves associées ;
- architecture factuelle du workflow + ruleset M1 ;
- matrice des preuves comportementales ;
- résultats obtenus et non-preuves ;
- écarts / difficultés capitalisés ;
- état F-A6 MITIGATED NOT CLOSED ;
- recommandations et options **non décidées**.

### Hors périmètre

- modification du workflow ou du ruleset ;
- test réel de rollback ou de bypass ;
- clôture F-A6 ;
- déclaration Option A COMPLETE ;
- ouverture T-A7 ;
- nettoyage des branches/worktrees ;
- exécution métier Option A / providers live ;
- action Notion/CMP ;
- versionnement Git de ce REX (commit projet = gate séparé).

---

## 3. Chronologie factuelle

| Ordre | Événement | PR / artefact | SHA / ID | Qualification |
|------:|-----------|---------------|----------|---------------|
| 1 | CI initiale + gouvernance merge préparée | PR **#268** MERGED | squash/merge `508ef7c4619e27b664d087fd97d53afe74ea93cc` | **Preuve** d’introduction du workflow |
| 2 | Revues documentaires CI / post-merge | PR **#269** MERGED | merge `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` ; docs `25`–`31` | **Preuve** documentaire |
| 3 | Required gate path-aware (P3) | PR **#270** MERGED | `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513` ; doc Option A `32-path-aware-…` | **Résultat validé** — P3 intégré |
| 4 | Preuve hors Studio (préparatoire) | PR **#271** CLOSED non mergée | head `ffa36fdef905…` ; run `30239805289` SUCCESS | **Preuve** comportementale pré-ruleset ou contrôlée |
| 5 | Preuve hors Studio sous M1 | PR **#272** CLOSED non mergée | head `09a2c093427b…` ; run `30248284607` SUCCESS | **Résultat validé** — hors Studio PASS |
| 6 | Preuve Studio failure | PR **#273** (1er head) | head `dd4a083d8e86…` ; run `30248328467` FAILURE | **Résultat validé** — blocage |
| 7 | Recovery Studio sur la même PR | PR **#273** (2e head) | head `1b8ea24afc33…` ; run `30248480927` SUCCESS | **Résultat validé** — recovery |
| 8 | Activation ruleset M1 | Ruleset ID `19798462` | check `SFIA Studio Required Gate` · integration `15368` | **Résultat validé** — contrôle actif |
| 9 | Formalisation F-A6 MITIGATED | PR **#274** MERGED | `b89065fa92d823843f1eb1014c304e7d13233556` ; doc `24` | **Résultat validé** — MITIGATED NOT CLOSED |
| 10 | Alignement doc POC `32` | PR **#275** MERGED | squash `ae61c3ed48d4d1c9fe751eddd73617ba15480734` | **Résultat validé** — claims CI obsolètes retirés |
| 11 | CI post-merge #275 | run push | `30278533761` SUCCESS | **Résultat validé** |

**Observation :** `origin/main` au moment de cette capitalisation est exactement `ae61c3ed48d4d1c9fe751eddd73617ba15480734`.

---

## 4. Architecture du contrôle M1

> Description factuelle de l’état sur `main`. **Pas** une nouvelle baseline d’architecture produit.

### 4.1 Workflow `.github/workflows/sfia-studio-ci.yml`

| Élément | Valeur factuelle |
|---------|------------------|
| Nom | `SFIA Studio CI` |
| Blob sur `main` | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
| Déclenchement | `pull_request` et `push` vers `main` (paths Studio + workflow lui-même) |

#### Jobs

1. **Detect SFIA Studio changes**
   - calcule `studio_changed=true|false`
   - fail-closed si valeur invalide

2. **Build and validate SFIA Studio**
   - `needs: detect`
   - exécuté si Studio concerné (PR avec `studio_changed=true`, ou push corroboré)
   - steps : Node, install, typecheck, lint, build, Vitest, modeled governance, secret scan, trailing whitespace

3. **SFIA Studio Required Gate** (`required_gate`)
   - `if: always()`
   - agrège Detect + Build
   - **PASS** si hors Studio (`studio_changed=false`) sans exiger Build
   - **PASS** si Studio et Build success
   - **FAIL** si Studio et Build failure/cancelled/absent

### 4.2 Ruleset GitHub

| Champ | Valeur |
|-------|--------|
| ID | `19798462` |
| Nom | `SFIA Studio Main Required Gate — M1` |
| Enforcement | `active` |
| Cible | `refs/heads/main` |
| Required check | `SFIA Studio Required Gate` |
| Integration ID | `15368` |
| Non-fast-forward | bloqué |
| Deletion de `main` | bloquée |
| Bypass actors | User `295557155`, mode `pull_request` |
| Approvals requis | `0` (**configuration loose** — **réserve**) |
| Strict up-to-date | `false` (**loose** — **réserve**) |

### 4.3 Comportements attendus (déjà démontrés)

| Cas | Comportement |
|-----|--------------|
| PR hors Studio | Detect success · Build skipped · Required Gate success |
| PR Studio en échec | Detect success · Build failure · Required Gate failure · merge bloqué |
| PR Studio corrigée | Detect/Build/Gate success |
| Push post-merge Studio | Detect/Build/Gate success |

---

## 5. Matrice des preuves

| # | Scénario | Branche / PR | Head SHA | Run ID | Detect | Build | Required Gate | Comportement GitHub | Résultat | Limite |
|---|----------|--------------|----------|--------|--------|-------|---------------|---------------------|----------|--------|
| 1 | PR hors Studio | `qa/sfia-studio-m1-controlled-non-studio-proof` / **#272** CLOSED non mergée | `09a2c093427b60234256355bdb7c3521e1e2ae01` | `30248284607` | success `89920211552` | **skipped** `89920245972` | success `89920245604` | Gate PASS sans validation lourde | **PASS** hors Studio | Pas un merge vers main ; PR fermée sans merge |
| 2 | PR Studio en échec | `qa/sfia-studio-m1-controlled-studio-proof` / **#273** | `dd4a083d8e86d06b99dbdcca43f3ec9f24752da0` | `30248328467` | success `89920352750` | **failure** `89920382756` | **failure** `89920627798` | Required check rouge | **BLOCKED** | Échec volontaire contrôlé |
| 3 | Recovery Studio | même PR **#273** | `1b8ea24afc33502b596c564f7daa911d9dc3e995` | `30248480927` | success `89920826448` | success `89920863525` | success `89921140417` | Required check vert | **RECOVERY PASS** | PR ensuite fermée sans merge |
| 4 | PR documentaire Studio | `docs/sfia-studio-doc32-post-p3-m1-correction` / **#275** MERGED | `dd2a68c6a1e45fee1e1f397cb644c2c082a3d877` | `30277076735` | success `90013737560` | success `90013783710` | success `90014180221` | Merge squash autorisé après CLEAN | **PASS** + merge | Contenu doc seulement |
| 5 | Push post-merge `main` | `main` après #275 | `ae61c3ed48d4d1c9fe751eddd73617ba15480734` | `30278533761` | success `90018681920` | success `90018732641` | success `90019119514` | CI push complète | **PASS** post-merge | N’équivaut pas à test rollback/bypass |

### Preuve préparatoire complémentaire (hors matrice obligatoire)

| Scénario | PR | Run | Résultat |
|----------|----|-----|----------|
| Hors Studio préparatoire | **#271** CLOSED | `30239805289` — Detect success · Build skipped · Gate success | **Preuve** cohérente avec #272 |

---

## 6. Résultats obtenus

| Affirmation | Qualification | Commentaire |
|-------------|---------------|-------------|
| M1 techniquement appliqué | **Résultat validé** | Workflow + ruleset actifs sur `main` |
| M1 comportementalement prouvé | **Résultat validé** | Preuves #272 / #273 / #275 / post-merge |
| Required gate stable | **Résultat validé** | Nom de check constant `SFIA Studio Required Gate` |
| Absence de blocage indu hors Studio | **Résultat validé** | #272 Build skipped + Gate success |
| Blocage d’une PR Studio invalide | **Résultat validé** | #273 failure run |
| Recovery réussie | **Résultat validé** | #273 recovery run |
| CI post-merge réussie | **Résultat validé** | run `30278533761` |
| F-A6 formalisé MITIGATED | **Résultat validé** | PR #274 / doc `24` |
| Doc POC `32` aligné post-P3/M1 | **Résultat validé** | PR #275 · blob `43f5157a…` |

---

## 7. Ce que M1 ne prouve pas

| Non-preuve | Qualification |
|------------|---------------|
| Rollback du ruleset | **non testé** |
| Bypass du ruleset | **non testé** (bypass non utilisé sur #272–#275) |
| Comportement multi-acteurs | **non testé** |
| Résilience aux indisponibilités GitHub Actions | **non testée** |
| Gouvernance de modification future du ruleset | **non éprouvée** |
| Configuration bypass / approvals « loose » | **inchangée** — **réserve** |
| M1 COMPLETE ⇒ Option A COMPLETE | **faux** — anti-claim |
| M1 COMPLETE ⇒ F-A6 CLOSED | **faux** — anti-claim |
| M1 ⇒ ouverture T-A7 | **faux** — anti-claim |
| CI success ⇒ industrialisation / production ready | **faux** — anti-claim |

---

## 8. Analyse des écarts et difficultés

| Écart / difficulté | Capitalisation |
|--------------------|----------------|
| Trailing whitespaces | Ont cassé des runs documentaires ; un step dédié dans Build a été intégré — **observation** utile pour futurs docs |
| Check final stable | Les required checks path-filtered seuls sont fragiles ; l’agrégateur `always()` résout le cas hors Studio — **résultat validé** |
| Workflows path-filtered comme required checks | Risque de check « absent » hors paths — **risque résiduel** historique corrigé par Detect+Gate |
| Détection path-aware | Distingue Studio / hors Studio sans inventer un second workflow — **valeur confirmée** |
| Skipped vs success | Build skipped hors Studio ≠ échec ; Gate doit PASS explicitement — **résultat validé** |
| PR contrôlées réelles | #272/#273 fermées sans merge fournissent des preuves sans polluer `main` — **pratique à conserver** |
| Micro-cycles | Coût élevé (push / readiness / merge séparés) — **observation** ; rationaliser push+ouverture PR reste une **recommandation**, merge séparé reste un garde-fou |
| Alignement documentaire tardif | Doc POC `32` a nécessité #275 après P3/M1 — **dette de synchronisation** documentaire |

---

## 9. Garde-fous confirmés

| Garde-fou | Statut |
|-----------|--------|
| Aucun bypass utilisé sur les preuves M1 / #274 / #275 | **Observation** confirmée |
| Aucun `--admin` | **Observation** confirmée |
| `main` protégée (ruleset actif) | **Résultat validé** |
| Merge squash avec `--match-head-commit` (#275) | **Résultat validé** |
| Séparation GO push / PR readiness / merge | **Résultat validé** (pratique de cycle) |
| Review handoff Git (`sfia/review-handoff`) | **Résultat validé** |
| Anti-claims dans docs `24` et POC `32` | **Résultat validé** |

---

## 10. État de F-A6-PM-G01

### État obligatoire

`MITIGATED — NOT CLOSED`

Source canonique : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md` (post PR #274).

### Critères couverts (mitigation)

| Critère | Couverture |
|---------|------------|
| Workflow CI Studio sur `main` | **couvert** (#268–#270) |
| Required check stable | **couvert** |
| Ruleset actif sur `main` | **couvert** (`19798462`) |
| Preuve hors Studio PASS | **couvert** (#272) |
| Preuve Studio FAIL puis recovery | **couvert** (#273) |
| Formalisation documentaire MITIGATED | **couvert** (#274) |
| Alignement doc POC `32` | **couvert** (#275) |

### Preuves disponibles

Voir §5 et chronologie §3.

### Critères historiques restant ouverts (empêchant clôture automatique)

| Critère ouvert | Commentaire |
|----------------|-------------|
| Décision Morris explicite de CLOSED | **NOT DECIDED** — D-M1-03 conserve NOT CLOSED |
| Rollback ruleset | non testé |
| Bypass | non testé |
| Durcissement config loose | non décidé |
| REX M1 versionné sur `main` | ce document est **draft local** jusqu’à gate de commit |

### Raisons empêchant la clôture automatique

1. La formalisation #274 a explicitement séparé MITIGATED et CLOSED.
2. Des non-preuves critiques (§7) restent ouvertes.
3. Aucun gate Morris de clôture n’a été consommé.
4. Ce REX **recommandera** éventuellement une réévaluation, sans la décider.

**Interdit dans ce document :** présenter `F-A6 CLOSED` comme verdict.

---

## 11. Réserves et risques résiduels

| Réserve / risque | Qualification |
|------------------|---------------|
| REX M1 produit dans ce cycle, **non encore versionné** | **Réserve** (commit projet = gate séparé) |
| Rollback non testé | **Réserve** |
| Bypass non testé | **Réserve** |
| Configuration M1 loose (approvals 0, strict false, bypass PR mode) | **Réserve / risque résiduel** |
| Findings F-CI éventuels non rouverts ici | **Observation** — hors mutation |
| Branches/worktrees résiduels (doc32, F-A6, preuves QA) | **Réserve** de cleanup |
| Dette de maintenance du ruleset | **Risque résiduel** |
| Dérive documentaire future (POC `32` vs Option A `32-path-aware`) | **Risque résiduel** de confusion de chemins |
| Option A non COMPLETE | **Réserve trajectoire** |
| T-A7 non ouverte | **Réserve trajectoire** |

---

## 12. Recommandations

> Toute recommandation ci-dessous est **non décidée**.

### 12.1 Court terme

| ID | Recommandation | Valeur | Dette créée | Alternative plus simple | Gate Morris requis | Répétable / arbitrage |
|----|----------------|--------|-------------|-------------------------|--------------------|-----------------------|
| R1 | Commit + PR du présent REX (`33-…`) | Trace capitalisée sur `main` | Micro-cycle docs | Garder draft local | `GO COMMIT OPTION A M1 CAPITALIZATION…` | Répétable |
| R2 | Nettoyage borné branches/worktrees F-A6 + doc32 + preuves QA | Réduit bruit local | Risque de supprimer trop tôt | Conserver jusqu’à GO cleanup | Gate cleanup séparé | Arbitrage humain |
| R3 | Index Option A racine (si un jour créé) — **ne pas inventer maintenant** | Navigabilité | Nouveau doc | Liens croisés dans `24`/`33` seulement | Gate docs index | Arbitrage |

### 12.2 Avant décision de clôture F-A6

| ID | Recommandation | Valeur | Dette | Alternative | Gate requis | Nature |
|----|----------------|--------|-------|-------------|-------------|--------|
| R4 | Cycle borné test **rollback** ruleset | Prouve réversibilité | Risque opérationnel sur `main` | Accepter réserve permanente | Gate test rollback | Arbitrage humain |
| R5 | Cycle borné test **bypass** (puis révocation) | Prouve surface de contournement | Risque gouvernance | Documenter bypass « known loose » sans test | Gate test bypass | Arbitrage humain |
| R6 | Réévaluer F-A6 seulement après R4/R5 **ou** acceptation formelle des non-preuves | Évite CLOSED prématuré | Retarde clôture | CLOSED conditionnel documenté | Gate réévaluation F-A6 | Arbitrage humain |

### 12.3 Avant ouverture T-A7

| ID | Recommandation | Valeur | Dette | Alternative | Gate requis | Nature |
|----|----------------|--------|-------|-------------|-------------|--------|
| R7 | Ne pas lier T-A7 à la seule existence de M1 | Évite promotion implicite | Aucune | Cadrage T-A7 indépendant | Gate cadrage T-A7 | Arbitrage |
| R8 | Exiger un pack de cadrage T-A7 distinct (périmètre produit ≠ CI gate) | Séparation des préoccupations | Cycle supplémentaire | Absorber dans Option A runtime | Gate T-A7 | Arbitrage |

### 12.4 Maintenance M1

| ID | Recommandation | Valeur | Dette | Alternative | Gate | Nature |
|----|----------------|--------|-------|-------------|------|--------|
| R9 | Toute modification workflow/ruleset = cycle DevOps borné + preuves | Évite régression silencieuse | Coût process | Hotfix non gouverné (**à éviter**) | Gate DevOps M1 | Répétable |
| R10 | Conserver le nom exact du required check | Stabilité ruleset | Couplage nom | Migration versionnée du check | Gate ruleset | Répétable |
| R11 | Surveiller la config loose ; durcir seulement sous GO | Réduit bypass accidentel | Friction merge | Maintenir loose + monitoring | Gate durcissement | Arbitrage |

---

## 13. Options de trajectoire pour Morris

> Aucune option n’est sélectionnée. Statut : **NOT DECIDED**.

### Option 1 — Conserver F-A6 MITIGATED et poursuivre sans clôture

| | |
|--|--|
| **Bénéfices** | Fidèle à D-M1-03 ; pas de faux CLOSED ; laisse du temps pour REX versionné |
| **Risques** | Finding reste ouvert longtemps ; dette visuelle de gouvernance |
| **Dette** | Suivi périodique F-A6 |
| **Prérequis** | Aucun technique immédiat |
| **Gate requis** | Aucun pour « ne rien fermer » ; éventuellement commit REX |

### Option 2 — Lancer un cycle borné rollback + bypass avant réévaluation

| | |
|--|--|
| **Bénéfices** | Comble les non-preuves §7 ; meilleure base pour CLOSED futur |
| **Risques** | Erreur opérationnelle sur ruleset ; fenêtre de faiblesse |
| **Dette** | Scripts/runbooks de test ; evidence pack |
| **Prérequis** | GO Morris dédié ; fenêtre contrôlée ; pas de `--admin` caché |
| **Gate requis** | Gate test rollback/bypass |

### Option 3 — Renforcer la configuration bypass / approvals avant réévaluation

| | |
|--|--|
| **Bénéfices** | Réduit la surface loose |
| **Risques** | Friction delivery ; faux sentiment de sécurité sans preuves comportementales |
| **Dette** | Ajustements ruleset + re-preuve éventuelle |
| **Prérequis** | GO durcissement ; critères d’acceptation |
| **Gate requis** | Gate durcissement M1 |

### Option 4 — Différer toute décision F-A6 jusqu’au cadrage T-A7

| | |
|--|--|
| **Bénéfices** | Évite de coupler CI gate et trajectoire produit |
| **Risques** | F-A6 reste MITIGATED indéfiniment ; confusion stakeholders |
| **Dette** | Suivi croisé Option A / F-A6 |
| **Prérequis** | Clarifier que T-A7 ≠ CI |
| **Gate requis** | Gate cadrage T-A7 (ultérieur) |

---

## 14. Décisions Morris requises

Statut obligatoire de chaque item : **`NOT DECIDED`**

| ID | Décision | Statut |
|----|----------|--------|
| D1 | Faut-il tester le rollback du ruleset M1 ? | NOT DECIDED |
| D2 | Faut-il tester le bypass M1 ? | NOT DECIDED |
| D3 | Faut-il durcir la configuration loose (approvals / strict / bypass) ? | NOT DECIDED |
| D4 | Quand réévaluer F-A6 (rester MITIGATED vs envisager CLOSED) ? | NOT DECIDED |
| D5 | Faut-il ouvrir ultérieurement T-A7 ? | NOT DECIDED |
| D6 | Faut-il versionner ce REX sur `main` maintenant ? | NOT DECIDED |
| D7 | Faut-il nettoyer branches/worktrees résiduels maintenant ? | NOT DECIDED |

Aucune de ces décisions n’est tranchée par la rédaction de ce document.

---

## 15. Verdict de capitalisation

`M1 IMPLEMENTATION AND BEHAVIORAL PROOFS CAPITALIZED — F-A6 MITIGATED NOT CLOSED — ROLLBACK AND BYPASS UNTESTED — OPTION A NOT COMPLETE — T-A7 NOT OPEN — MORRIS DECISION REQUIRED FOR NEXT TRAJECTORY STEP`

### Anti-claims (rappel)

- capitalisation M1 ≠ F-A6 CLOSED
- capitalisation M1 ≠ Option A COMPLETE
- capitalisation M1 ≠ ouverture T-A7
- CI success ≠ rollback/bypass testés
- REX draft local ≠ REX versionné sur `main`
- recommandation ≠ décision Morris

---

## Annexe A — Références de chemins

| Artefact | Path |
|----------|------|
| Workflow | `.github/workflows/sfia-studio-ci.yml` |
| F-A6 / CI gouvernance | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md` |
| Path-aware préparation (Option A doc 32) | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md` |
| POC vertical slice (doc 32 corrigé #275) | `projects/sfia-studio/32-poc-vertical-slice-functional-design.md` |
| CI reviews #269 | docs Option A `25`–`31` |
| **Ce REX** | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md` |

## Annexe B — Identifiants stables

| Type | Valeur |
|------|--------|
| Ruleset | `19798462` |
| Required check | `SFIA Studio Required Gate` |
| Integration | `15368` |
| Workflow blob | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
| `main` HEAD (capitalisation) | `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
| Doc POC 32 blob | `43f5157a2bb198fb6fb04969677277d80645a434` |
```

## 5. CI PR détaillée (run 30284328539)
```json
{
  "databaseId": 30284328539,
  "workflowName": "SFIA Studio CI",
  "event": "pull_request",
  "headSha": "fa0eebe00ce3b765a8a486aa660dddfab40123a0",
  "status": "completed",
  "conclusion": "success",
  "url": "https://github.com/mcleland147/sfia-workspace/actions/runs/30284328539"
}
```

### Jobs / steps
- Detect SFIA Studio changes | id=90038240806 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Checkout | status=completed | conclusion=success
  - step: Detect Studio scope | status=completed | conclusion=success
  - step: Post Checkout | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success
- Build and validate SFIA Studio | id=90038282435 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Checkout | status=completed | conclusion=success
  - step: Setup Node.js | status=completed | conclusion=success
  - step: Install dependencies | status=completed | conclusion=success
  - step: Typecheck | status=completed | conclusion=success
  - step: Lint | status=completed | conclusion=success
  - step: Build | status=completed | conclusion=success
  - step: Unit tests (Vitest) | status=completed | conclusion=success
  - step: Modeled governance tests | status=completed | conclusion=success
  - step: Secret pattern scan (targeted) | status=completed | conclusion=success
  - step: Trailing whitespace check | status=completed | conclusion=success
  - step: Post Setup Node.js | status=completed | conclusion=success
  - step: Post Checkout | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success
- SFIA Studio Required Gate | id=90038551933 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Aggregate required gate | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success

## 6. Ruleset / blockers
- ruleset ID: `19798462`
- enforcement: `active`
- required check: `SFIA Studio Required Gate`
- integration ID: `15368`
- allowed merge methods: ['merge', 'squash', 'rebase']
- non-fast-forward / deletion: blocked (ruleset active)
- bypass: non utilisé
- blockers: aucun (mergeable=MERGEABLE, mergeStateStatus=CLEAN, reviews=[], comments=[], unresolved threads=[])

## 7. Merge exécuté
- méthode: `squash`
- commande: `CMD=gh pr merge 276 --repo mcleland147/sfia-workspace --squash --match-head-commit fa0eebe00ce3b765a8a486aa660dddfab40123a0 --subject "docs(sfia-studio): capitalize M1 implementation and proofs" --body-file /Users/morris/Projects/sfia-workspace/.tmp-sfia-review/m1-pr276-merge/squash-body.txt`
- EXIT=0
- stdout: `(empty)`
- stderr: `(empty)`
- subject: `docs(sfia-studio): capitalize M1 implementation and proofs`
- body:
```
Version the complete M1 implementation and behavioral proofs REX.

F-A6-PM-G01 remains MITIGATED and explicitly NOT CLOSED.
Option A remains not COMPLETE.
T-A7 remains not open.
Rollback and bypass remain untested.
D1–D7 remain NOT DECIDED.
```
- squash SHA: `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13`

## 8. Metadata PR après merge
```json
{
  "additions": 441,
  "autoMergeRequest": null,
  "baseRefName": "main",
  "baseRefOid": "ae61c3ed48d4d1c9fe751eddd73617ba15480734",
  "commits": [
    {
      "authoredDate": "2026-07-27T16:14:00Z",
      "authors": [
        {
          "email": "morris@macbook-air1.home",
          "id": "",
          "login": "",
          "name": "Morris Cleland"
        },
        {
          "email": "cursoragent@cursor.com",
          "id": "U_kgDOC972lw",
          "login": "cursoragent",
          "name": "Cursor"
        }
      ],
      "committedDate": "2026-07-27T16:14:00Z",
      "messageBody": "Co-authored-by: Cursor <cursoragent@cursor.com>",
      "messageHeadline": "docs(sfia-studio): capitalize M1 implementation and proofs",
      "oid": "fa0eebe00ce3b765a8a486aa660dddfab40123a0"
    }
  ],
  "deletions": 0,
  "files": [
    {
      "path": "projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md",
      "additions": 441,
      "deletions": 0,
      "changeType": "ADDED"
    }
  ],
  "headRefName": "docs/sfia-studio-m1-capitalization-rex",
  "headRefOid": "fa0eebe00ce3b765a8a486aa660dddfab40123a0",
  "isDraft": false,
  "mergeCommit": {
    "oid": "49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13"
  },
  "mergedAt": "2026-07-27T16:35:20Z",
  "mergedBy": {
    "id": "U_kgDOEZ3YIw",
    "is_bot": false,
    "login": "mcleland147",
    "name": ""
  },
  "number": 276,
  "state": "MERGED",
  "title": "docs(sfia-studio): capitalize M1 implementation and proofs",
  "url": "https://github.com/mcleland147/sfia-workspace/pull/276"
}
```
- mergedAt: `2026-07-27T16:35:20Z`
- mergedBy: `mcleland147`

## 9. Squash commit metadata
```
commit 49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13
Author:     mcleland147 <m.cleland@live.fr>
AuthorDate: Mon Jul 27 18:35:19 2026 +0200
Commit:     GitHub <noreply@github.com>
CommitDate: Mon Jul 27 18:35:19 2026 +0200

    docs(sfia-studio): capitalize M1 implementation and proofs

    Version the complete M1 implementation and behavioral proofs REX.

    F-A6-PM-G01 remains MITIGATED and explicitly NOT CLOSED.
    Option A remains not COMPLETE.
    T-A7 remains not open.
    Rollback and bypass remain untested.
    D1–D7 remain NOT DECIDED.

A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md
```

### Message complet
```
docs(sfia-studio): capitalize M1 implementation and proofs

Version the complete M1 implementation and behavioral proofs REX.

F-A6-PM-G01 remains MITIGATED and explicitly NOT CLOSED.
Option A remains not COMPLETE.
T-A7 remains not open.
Rollback and bypass remain untested.
D1–D7 remain NOT DECIDED.
```

### Stat
```
49f2edf docs(sfia-studio): capitalize M1 implementation and proofs
 .../33-m1-implementation-and-proofs-rex.md         | 441 +++++++++++++++++++++
 1 file changed, 441 insertions(+)
```

### Parent
- parent unique: `ae61c3ed48d4d1c9fe751eddd73617ba15480734`

### Diff squash complet (identique au diff source)
```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md
new file mode 100644
index 0000000..6c87cf4
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md
@@ -0,0 +1,441 @@
+# SFIA Studio — REX M1 : implémentation du required gate et preuves comportementales
+
+## 1. Métadonnées
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Date/heure/fuseau** | 2026-07-27 17:52:49 CEST (+0200) |
+| **Cycle** | 15 — Capitalisation / REX |
+| **Cycles complémentaires** | 9 QA · 7 Intégration/DevOps · 14 Post-merge · 1 Cadrage décisionnel futur |
+| **Profil** | Capitalization — profondeur Critical |
+| **Typologie** | DOC / CAPITALIZATION / REX / M1 / OPTION A |
+| **Gate Morris consommé** | `GO CAPITALIZE OPTION A M1 IMPLEMENTATION AND PROOFS — SFIA STUDIO V3-NATIVE` |
+| **Repository** | `mcleland147/sfia-workspace` |
+| **Ref / HEAD de capitalisation** | `origin/main` @ `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
+| **Auteur d’exécution** | Cursor (agent) sous autorité Morris |
+| **Autorité décisionnelle** | Morris (L0) — **aucune décision de trajectoire prise dans ce document** |
+| **Statut du document** | `capitalization-candidate — Morris decision required for any resulting trajectory decision` |
+| **Finding associé** | `F-A6-PM-G01` |
+| **État F-A6 (canonique)** | `MITIGATED — NOT CLOSED` |
+
+> Ce document capitalise des **faits Git et GitHub déjà observés**.
+> Il ne crée aucune décision Morris, ne ferme pas F-A6, ne déclare pas Option A COMPLETE et n’ouvre pas T-A7.
+
+### Légende de qualification (utilisée dans tout le document)
+
+| Qualifiant | Signification |
+|------------|---------------|
+| **Observation** | Fait constaté, sans jugement de trajectoire |
+| **Preuve** | Artefact Git/GitHub vérifiable (PR, run, job, blob, ruleset) |
+| **Résultat validé** | Comportement déjà démontré dans un cycle Morris antérieur |
+| **Réserve** | Limite ouverte, non convertie en décision |
+| **Risque résiduel** | Exposition restante malgré M1 |
+| **Recommandation** | Proposition non décidée |
+| **Option** | Alternative de trajectoire pour arbitrage Morris |
+| **Décision Morris requise** | Point explicitement `NOT DECIDED` |
+
+---
+
+## 2. Objet et périmètre
+
+### Pourquoi M1 a été introduit
+
+**Observation :** le finding `F-A6-PM-G01` a été capitalisé après le merge de la PR #267 sans revue PR/CI formelle et sans CI SFIA Studio observable sur les changements Studio.
+
+**Objectif de M1 :** instaurer un contrôle de gouvernance de merge sur `main` capable de :
+
+1. détecter si une PR touche le périmètre SFIA Studio ;
+2. exécuter une validation lourde uniquement si nécessaire ;
+3. exposer un **required check stable** (`SFIA Studio Required Gate`) utilisable par un ruleset GitHub ;
+4. bloquer l’intégration d’une PR Studio invalide ;
+5. ne pas bloquer indûment une PR hors Studio.
+
+### Problème de gouvernance traité
+
+| Problème | Nature |
+|----------|--------|
+| Absence de CI Studio path-aware | Pas de signal de qualité avant merge sur `main` |
+| Required checks path-filtered classiques | Instables ou inapplicables hors paths |
+| Merge possible sans gate agrégé | Risque de régression silencieuse sur Studio |
+| Finding F-A6 ouvert | Mitigation technique et comportementale requise avant toute clôture |
+
+### Inclus dans ce REX
+
+- chronologie des PR #268–#275 et preuves associées ;
+- architecture factuelle du workflow + ruleset M1 ;
+- matrice des preuves comportementales ;
+- résultats obtenus et non-preuves ;
+- écarts / difficultés capitalisés ;
+- état F-A6 MITIGATED NOT CLOSED ;
+- recommandations et options **non décidées**.
+
+### Hors périmètre
+
+- modification du workflow ou du ruleset ;
+- test réel de rollback ou de bypass ;
+- clôture F-A6 ;
+- déclaration Option A COMPLETE ;
+- ouverture T-A7 ;
+- nettoyage des branches/worktrees ;
+- exécution métier Option A / providers live ;
+- action Notion/CMP ;
+- versionnement Git de ce REX (commit projet = gate séparé).
+
+---
+
+## 3. Chronologie factuelle
+
+| Ordre | Événement | PR / artefact | SHA / ID | Qualification |
+|------:|-----------|---------------|----------|---------------|
+| 1 | CI initiale + gouvernance merge préparée | PR **#268** MERGED | squash/merge `508ef7c4619e27b664d087fd97d53afe74ea93cc` | **Preuve** d’introduction du workflow |
+| 2 | Revues documentaires CI / post-merge | PR **#269** MERGED | merge `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` ; docs `25`–`31` | **Preuve** documentaire |
+| 3 | Required gate path-aware (P3) | PR **#270** MERGED | `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513` ; doc Option A `32-path-aware-…` | **Résultat validé** — P3 intégré |
+| 4 | Preuve hors Studio (préparatoire) | PR **#271** CLOSED non mergée | head `ffa36fdef905…` ; run `30239805289` SUCCESS | **Preuve** comportementale pré-ruleset ou contrôlée |
+| 5 | Preuve hors Studio sous M1 | PR **#272** CLOSED non mergée | head `09a2c093427b…` ; run `30248284607` SUCCESS | **Résultat validé** — hors Studio PASS |
+| 6 | Preuve Studio failure | PR **#273** (1er head) | head `dd4a083d8e86…` ; run `30248328467` FAILURE | **Résultat validé** — blocage |
+| 7 | Recovery Studio sur la même PR | PR **#273** (2e head) | head `1b8ea24afc33…` ; run `30248480927` SUCCESS | **Résultat validé** — recovery |
+| 8 | Activation ruleset M1 | Ruleset ID `19798462` | check `SFIA Studio Required Gate` · integration `15368` | **Résultat validé** — contrôle actif |
+| 9 | Formalisation F-A6 MITIGATED | PR **#274** MERGED | `b89065fa92d823843f1eb1014c304e7d13233556` ; doc `24` | **Résultat validé** — MITIGATED NOT CLOSED |
+| 10 | Alignement doc POC `32` | PR **#275** MERGED | squash `ae61c3ed48d4d1c9fe751eddd73617ba15480734` | **Résultat validé** — claims CI obsolètes retirés |
+| 11 | CI post-merge #275 | run push | `30278533761` SUCCESS | **Résultat validé** |
+
+**Observation :** `origin/main` au moment de cette capitalisation est exactement `ae61c3ed48d4d1c9fe751eddd73617ba15480734`.
+
+---
+
+## 4. Architecture du contrôle M1
+
+> Description factuelle de l’état sur `main`. **Pas** une nouvelle baseline d’architecture produit.
+
+### 4.1 Workflow `.github/workflows/sfia-studio-ci.yml`
+
+| Élément | Valeur factuelle |
+|---------|------------------|
+| Nom | `SFIA Studio CI` |
+| Blob sur `main` | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
+| Déclenchement | `pull_request` et `push` vers `main` (paths Studio + workflow lui-même) |
+
+#### Jobs
+
+1. **Detect SFIA Studio changes**
+   - calcule `studio_changed=true|false`
+   - fail-closed si valeur invalide
+
+2. **Build and validate SFIA Studio**
+   - `needs: detect`
+   - exécuté si Studio concerné (PR avec `studio_changed=true`, ou push corroboré)
+   - steps : Node, install, typecheck, lint, build, Vitest, modeled governance, secret scan, trailing whitespace
+
+3. **SFIA Studio Required Gate** (`required_gate`)
+   - `if: always()`
+   - agrège Detect + Build
+   - **PASS** si hors Studio (`studio_changed=false`) sans exiger Build
+   - **PASS** si Studio et Build success
+   - **FAIL** si Studio et Build failure/cancelled/absent
+
+### 4.2 Ruleset GitHub
+
+| Champ | Valeur |
+|-------|--------|
+| ID | `19798462` |
+| Nom | `SFIA Studio Main Required Gate — M1` |
+| Enforcement | `active` |
+| Cible | `refs/heads/main` |
+| Required check | `SFIA Studio Required Gate` |
+| Integration ID | `15368` |
+| Non-fast-forward | bloqué |
+| Deletion de `main` | bloquée |
+| Bypass actors | User `295557155`, mode `pull_request` |
+| Approvals requis | `0` (**configuration loose** — **réserve**) |
+| Strict up-to-date | `false` (**loose** — **réserve**) |
+
+### 4.3 Comportements attendus (déjà démontrés)
+
+| Cas | Comportement |
+|-----|--------------|
+| PR hors Studio | Detect success · Build skipped · Required Gate success |
+| PR Studio en échec | Detect success · Build failure · Required Gate failure · merge bloqué |
+| PR Studio corrigée | Detect/Build/Gate success |
+| Push post-merge Studio | Detect/Build/Gate success |
+
+---
+
+## 5. Matrice des preuves
+
+| # | Scénario | Branche / PR | Head SHA | Run ID | Detect | Build | Required Gate | Comportement GitHub | Résultat | Limite |
+|---|----------|--------------|----------|--------|--------|-------|---------------|---------------------|----------|--------|
+| 1 | PR hors Studio | `qa/sfia-studio-m1-controlled-non-studio-proof` / **#272** CLOSED non mergée | `09a2c093427b60234256355bdb7c3521e1e2ae01` | `30248284607` | success `89920211552` | **skipped** `89920245972` | success `89920245604` | Gate PASS sans validation lourde | **PASS** hors Studio | Pas un merge vers main ; PR fermée sans merge |
+| 2 | PR Studio en échec | `qa/sfia-studio-m1-controlled-studio-proof` / **#273** | `dd4a083d8e86d06b99dbdcca43f3ec9f24752da0` | `30248328467` | success `89920352750` | **failure** `89920382756` | **failure** `89920627798` | Required check rouge | **BLOCKED** | Échec volontaire contrôlé |
+| 3 | Recovery Studio | même PR **#273** | `1b8ea24afc33502b596c564f7daa911d9dc3e995` | `30248480927` | success `89920826448` | success `89920863525` | success `89921140417` | Required check vert | **RECOVERY PASS** | PR ensuite fermée sans merge |
+| 4 | PR documentaire Studio | `docs/sfia-studio-doc32-post-p3-m1-correction` / **#275** MERGED | `dd2a68c6a1e45fee1e1f397cb644c2c082a3d877` | `30277076735` | success `90013737560` | success `90013783710` | success `90014180221` | Merge squash autorisé après CLEAN | **PASS** + merge | Contenu doc seulement |
+| 5 | Push post-merge `main` | `main` après #275 | `ae61c3ed48d4d1c9fe751eddd73617ba15480734` | `30278533761` | success `90018681920` | success `90018732641` | success `90019119514` | CI push complète | **PASS** post-merge | N’équivaut pas à test rollback/bypass |
+
+### Preuve préparatoire complémentaire (hors matrice obligatoire)
+
+| Scénario | PR | Run | Résultat |
+|----------|----|-----|----------|
+| Hors Studio préparatoire | **#271** CLOSED | `30239805289` — Detect success · Build skipped · Gate success | **Preuve** cohérente avec #272 |
+
+---
+
+## 6. Résultats obtenus
+
+| Affirmation | Qualification | Commentaire |
+|-------------|---------------|-------------|
+| M1 techniquement appliqué | **Résultat validé** | Workflow + ruleset actifs sur `main` |
+| M1 comportementalement prouvé | **Résultat validé** | Preuves #272 / #273 / #275 / post-merge |
+| Required gate stable | **Résultat validé** | Nom de check constant `SFIA Studio Required Gate` |
+| Absence de blocage indu hors Studio | **Résultat validé** | #272 Build skipped + Gate success |
+| Blocage d’une PR Studio invalide | **Résultat validé** | #273 failure run |
+| Recovery réussie | **Résultat validé** | #273 recovery run |
+| CI post-merge réussie | **Résultat validé** | run `30278533761` |
+| F-A6 formalisé MITIGATED | **Résultat validé** | PR #274 / doc `24` |
+| Doc POC `32` aligné post-P3/M1 | **Résultat validé** | PR #275 · blob `43f5157a…` |
+
+---
+
+## 7. Ce que M1 ne prouve pas
+
+| Non-preuve | Qualification |
+|------------|---------------|
+| Rollback du ruleset | **non testé** |
+| Bypass du ruleset | **non testé** (bypass non utilisé sur #272–#275) |
+| Comportement multi-acteurs | **non testé** |
+| Résilience aux indisponibilités GitHub Actions | **non testée** |
+| Gouvernance de modification future du ruleset | **non éprouvée** |
+| Configuration bypass / approvals « loose » | **inchangée** — **réserve** |
+| M1 COMPLETE ⇒ Option A COMPLETE | **faux** — anti-claim |
+| M1 COMPLETE ⇒ F-A6 CLOSED | **faux** — anti-claim |
+| M1 ⇒ ouverture T-A7 | **faux** — anti-claim |
+| CI success ⇒ industrialisation / production ready | **faux** — anti-claim |
+
+---
+
+## 8. Analyse des écarts et difficultés
+
+| Écart / difficulté | Capitalisation |
+|--------------------|----------------|
+| Trailing whitespaces | Ont cassé des runs documentaires ; un step dédié dans Build a été intégré — **observation** utile pour futurs docs |
+| Check final stable | Les required checks path-filtered seuls sont fragiles ; l’agrégateur `always()` résout le cas hors Studio — **résultat validé** |
+| Workflows path-filtered comme required checks | Risque de check « absent » hors paths — **risque résiduel** historique corrigé par Detect+Gate |
+| Détection path-aware | Distingue Studio / hors Studio sans inventer un second workflow — **valeur confirmée** |
+| Skipped vs success | Build skipped hors Studio ≠ échec ; Gate doit PASS explicitement — **résultat validé** |
+| PR contrôlées réelles | #272/#273 fermées sans merge fournissent des preuves sans polluer `main` — **pratique à conserver** |
+| Micro-cycles | Coût élevé (push / readiness / merge séparés) — **observation** ; rationaliser push+ouverture PR reste une **recommandation**, merge séparé reste un garde-fou |
+| Alignement documentaire tardif | Doc POC `32` a nécessité #275 après P3/M1 — **dette de synchronisation** documentaire |
+
+---
+
+## 9. Garde-fous confirmés
+
+| Garde-fou | Statut |
+|-----------|--------|
+| Aucun bypass utilisé sur les preuves M1 / #274 / #275 | **Observation** confirmée |
+| Aucun `--admin` | **Observation** confirmée |
+| `main` protégée (ruleset actif) | **Résultat validé** |
+| Merge squash avec `--match-head-commit` (#275) | **Résultat validé** |
+| Séparation GO push / PR readiness / merge | **Résultat validé** (pratique de cycle) |
+| Review handoff Git (`sfia/review-handoff`) | **Résultat validé** |
+| Anti-claims dans docs `24` et POC `32` | **Résultat validé** |
+
+---
+
+## 10. État de F-A6-PM-G01
+
+### État obligatoire
+
+`MITIGATED — NOT CLOSED`
+
+Source canonique : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md` (post PR #274).
+
+### Critères couverts (mitigation)
+
+| Critère | Couverture |
+|---------|------------|
+| Workflow CI Studio sur `main` | **couvert** (#268–#270) |
+| Required check stable | **couvert** |
+| Ruleset actif sur `main` | **couvert** (`19798462`) |
+| Preuve hors Studio PASS | **couvert** (#272) |
+| Preuve Studio FAIL puis recovery | **couvert** (#273) |
+| Formalisation documentaire MITIGATED | **couvert** (#274) |
+| Alignement doc POC `32` | **couvert** (#275) |
+
+### Preuves disponibles
+
+Voir §5 et chronologie §3.
+
+### Critères historiques restant ouverts (empêchant clôture automatique)
+
+| Critère ouvert | Commentaire |
+|----------------|-------------|
+| Décision Morris explicite de CLOSED | **NOT DECIDED** — D-M1-03 conserve NOT CLOSED |
+| Rollback ruleset | non testé |
+| Bypass | non testé |
+| Durcissement config loose | non décidé |
+| REX M1 versionné sur `main` | ce document est **draft local** jusqu’à gate de commit |
+
+### Raisons empêchant la clôture automatique
+
+1. La formalisation #274 a explicitement séparé MITIGATED et CLOSED.
+2. Des non-preuves critiques (§7) restent ouvertes.
+3. Aucun gate Morris de clôture n’a été consommé.
+4. Ce REX **recommandera** éventuellement une réévaluation, sans la décider.
+
+**Interdit dans ce document :** présenter `F-A6 CLOSED` comme verdict.
+
+---
+
+## 11. Réserves et risques résiduels
+
+| Réserve / risque | Qualification |
+|------------------|---------------|
+| REX M1 produit dans ce cycle, **non encore versionné** | **Réserve** (commit projet = gate séparé) |
+| Rollback non testé | **Réserve** |
+| Bypass non testé | **Réserve** |
+| Configuration M1 loose (approvals 0, strict false, bypass PR mode) | **Réserve / risque résiduel** |
+| Findings F-CI éventuels non rouverts ici | **Observation** — hors mutation |
+| Branches/worktrees résiduels (doc32, F-A6, preuves QA) | **Réserve** de cleanup |
+| Dette de maintenance du ruleset | **Risque résiduel** |
+| Dérive documentaire future (POC `32` vs Option A `32-path-aware`) | **Risque résiduel** de confusion de chemins |
+| Option A non COMPLETE | **Réserve trajectoire** |
+| T-A7 non ouverte | **Réserve trajectoire** |
+
+---
+
+## 12. Recommandations
+
+> Toute recommandation ci-dessous est **non décidée**.
+
+### 12.1 Court terme
+
+| ID | Recommandation | Valeur | Dette créée | Alternative plus simple | Gate Morris requis | Répétable / arbitrage |
+|----|----------------|--------|-------------|-------------------------|--------------------|-----------------------|
+| R1 | Commit + PR du présent REX (`33-…`) | Trace capitalisée sur `main` | Micro-cycle docs | Garder draft local | `GO COMMIT OPTION A M1 CAPITALIZATION…` | Répétable |
+| R2 | Nettoyage borné branches/worktrees F-A6 + doc32 + preuves QA | Réduit bruit local | Risque de supprimer trop tôt | Conserver jusqu’à GO cleanup | Gate cleanup séparé | Arbitrage humain |
+| R3 | Index Option A racine (si un jour créé) — **ne pas inventer maintenant** | Navigabilité | Nouveau doc | Liens croisés dans `24`/`33` seulement | Gate docs index | Arbitrage |
+
+### 12.2 Avant décision de clôture F-A6
+
+| ID | Recommandation | Valeur | Dette | Alternative | Gate requis | Nature |
+|----|----------------|--------|-------|-------------|-------------|--------|
+| R4 | Cycle borné test **rollback** ruleset | Prouve réversibilité | Risque opérationnel sur `main` | Accepter réserve permanente | Gate test rollback | Arbitrage humain |
+| R5 | Cycle borné test **bypass** (puis révocation) | Prouve surface de contournement | Risque gouvernance | Documenter bypass « known loose » sans test | Gate test bypass | Arbitrage humain |
+| R6 | Réévaluer F-A6 seulement après R4/R5 **ou** acceptation formelle des non-preuves | Évite CLOSED prématuré | Retarde clôture | CLOSED conditionnel documenté | Gate réévaluation F-A6 | Arbitrage humain |
+
+### 12.3 Avant ouverture T-A7
+
+| ID | Recommandation | Valeur | Dette | Alternative | Gate requis | Nature |
+|----|----------------|--------|-------|-------------|-------------|--------|
+| R7 | Ne pas lier T-A7 à la seule existence de M1 | Évite promotion implicite | Aucune | Cadrage T-A7 indépendant | Gate cadrage T-A7 | Arbitrage |
+| R8 | Exiger un pack de cadrage T-A7 distinct (périmètre produit ≠ CI gate) | Séparation des préoccupations | Cycle supplémentaire | Absorber dans Option A runtime | Gate T-A7 | Arbitrage |
+
+### 12.4 Maintenance M1
+
+| ID | Recommandation | Valeur | Dette | Alternative | Gate | Nature |
+|----|----------------|--------|-------|-------------|------|--------|
+| R9 | Toute modification workflow/ruleset = cycle DevOps borné + preuves | Évite régression silencieuse | Coût process | Hotfix non gouverné (**à éviter**) | Gate DevOps M1 | Répétable |
+| R10 | Conserver le nom exact du required check | Stabilité ruleset | Couplage nom | Migration versionnée du check | Gate ruleset | Répétable |
+| R11 | Surveiller la config loose ; durcir seulement sous GO | Réduit bypass accidentel | Friction merge | Maintenir loose + monitoring | Gate durcissement | Arbitrage |
+
+---
+
+## 13. Options de trajectoire pour Morris
+
+> Aucune option n’est sélectionnée. Statut : **NOT DECIDED**.
+
+### Option 1 — Conserver F-A6 MITIGATED et poursuivre sans clôture
+
+| | |
+|--|--|
+| **Bénéfices** | Fidèle à D-M1-03 ; pas de faux CLOSED ; laisse du temps pour REX versionné |
+| **Risques** | Finding reste ouvert longtemps ; dette visuelle de gouvernance |
+| **Dette** | Suivi périodique F-A6 |
+| **Prérequis** | Aucun technique immédiat |
+| **Gate requis** | Aucun pour « ne rien fermer » ; éventuellement commit REX |
+
+### Option 2 — Lancer un cycle borné rollback + bypass avant réévaluation
+
+| | |
+|--|--|
+| **Bénéfices** | Comble les non-preuves §7 ; meilleure base pour CLOSED futur |
+| **Risques** | Erreur opérationnelle sur ruleset ; fenêtre de faiblesse |
+| **Dette** | Scripts/runbooks de test ; evidence pack |
+| **Prérequis** | GO Morris dédié ; fenêtre contrôlée ; pas de `--admin` caché |
+| **Gate requis** | Gate test rollback/bypass |
+
+### Option 3 — Renforcer la configuration bypass / approvals avant réévaluation
+
+| | |
+|--|--|
+| **Bénéfices** | Réduit la surface loose |
+| **Risques** | Friction delivery ; faux sentiment de sécurité sans preuves comportementales |
+| **Dette** | Ajustements ruleset + re-preuve éventuelle |
+| **Prérequis** | GO durcissement ; critères d’acceptation |
+| **Gate requis** | Gate durcissement M1 |
+
+### Option 4 — Différer toute décision F-A6 jusqu’au cadrage T-A7
+
+| | |
+|--|--|
+| **Bénéfices** | Évite de coupler CI gate et trajectoire produit |
+| **Risques** | F-A6 reste MITIGATED indéfiniment ; confusion stakeholders |
+| **Dette** | Suivi croisé Option A / F-A6 |
+| **Prérequis** | Clarifier que T-A7 ≠ CI |
+| **Gate requis** | Gate cadrage T-A7 (ultérieur) |
+
+---
+
+## 14. Décisions Morris requises
+
+Statut obligatoire de chaque item : **`NOT DECIDED`**
+
+| ID | Décision | Statut |
+|----|----------|--------|
+| D1 | Faut-il tester le rollback du ruleset M1 ? | NOT DECIDED |
+| D2 | Faut-il tester le bypass M1 ? | NOT DECIDED |
+| D3 | Faut-il durcir la configuration loose (approvals / strict / bypass) ? | NOT DECIDED |
+| D4 | Quand réévaluer F-A6 (rester MITIGATED vs envisager CLOSED) ? | NOT DECIDED |
+| D5 | Faut-il ouvrir ultérieurement T-A7 ? | NOT DECIDED |
+| D6 | Faut-il versionner ce REX sur `main` maintenant ? | NOT DECIDED |
+| D7 | Faut-il nettoyer branches/worktrees résiduels maintenant ? | NOT DECIDED |
+
+Aucune de ces décisions n’est tranchée par la rédaction de ce document.
+
+---
+
+## 15. Verdict de capitalisation
+
+`M1 IMPLEMENTATION AND BEHAVIORAL PROOFS CAPITALIZED — F-A6 MITIGATED NOT CLOSED — ROLLBACK AND BYPASS UNTESTED — OPTION A NOT COMPLETE — T-A7 NOT OPEN — MORRIS DECISION REQUIRED FOR NEXT TRAJECTORY STEP`
+
+### Anti-claims (rappel)
+
+- capitalisation M1 ≠ F-A6 CLOSED
+- capitalisation M1 ≠ Option A COMPLETE
+- capitalisation M1 ≠ ouverture T-A7
+- CI success ≠ rollback/bypass testés
+- REX draft local ≠ REX versionné sur `main`
+- recommandation ≠ décision Morris
+
+---
+
+## Annexe A — Références de chemins
+
+| Artefact | Path |
+|----------|------|
+| Workflow | `.github/workflows/sfia-studio-ci.yml` |
+| F-A6 / CI gouvernance | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md` |
+| Path-aware préparation (Option A doc 32) | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md` |
+| POC vertical slice (doc 32 corrigé #275) | `projects/sfia-studio/32-poc-vertical-slice-functional-design.md` |
+| CI reviews #269 | docs Option A `25`–`31` |
+| **Ce REX** | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md` |
+
+## Annexe B — Identifiants stables
+
+| Type | Valeur |
+|------|--------|
+| Ruleset | `19798462` |
+| Required check | `SFIA Studio Required Gate` |
+| Integration | `15368` |
+| Workflow blob | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
+| `main` HEAD (capitalisation) | `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
+| Doc POC 32 blob | `43f5157a2bb198fb6fb04969677277d80645a434` |
```

### Blob
- blob document 33 sur squash / origin/main: `6c87cf4016d6a33f096df921acf8bafd4d73af4e`

## 10. Vérification main
- origin/main après: `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13`
- squash ancêtre de main: oui
- fichier unique: `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md`
- additions/deletions: `441 / 0`
- lignes document 33 sur main: `441`
- contenu main == contenu validé: oui

### Contenu document 33 sur main (441 lignes)
```markdown
# SFIA Studio — REX M1 : implémentation du required gate et preuves comportementales

## 1. Métadonnées

| Métadonnée | Valeur |
|------------|--------|
| **Date/heure/fuseau** | 2026-07-27 17:52:49 CEST (+0200) |
| **Cycle** | 15 — Capitalisation / REX |
| **Cycles complémentaires** | 9 QA · 7 Intégration/DevOps · 14 Post-merge · 1 Cadrage décisionnel futur |
| **Profil** | Capitalization — profondeur Critical |
| **Typologie** | DOC / CAPITALIZATION / REX / M1 / OPTION A |
| **Gate Morris consommé** | `GO CAPITALIZE OPTION A M1 IMPLEMENTATION AND PROOFS — SFIA STUDIO V3-NATIVE` |
| **Repository** | `mcleland147/sfia-workspace` |
| **Ref / HEAD de capitalisation** | `origin/main` @ `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
| **Auteur d’exécution** | Cursor (agent) sous autorité Morris |
| **Autorité décisionnelle** | Morris (L0) — **aucune décision de trajectoire prise dans ce document** |
| **Statut du document** | `capitalization-candidate — Morris decision required for any resulting trajectory decision` |
| **Finding associé** | `F-A6-PM-G01` |
| **État F-A6 (canonique)** | `MITIGATED — NOT CLOSED` |

> Ce document capitalise des **faits Git et GitHub déjà observés**.
> Il ne crée aucune décision Morris, ne ferme pas F-A6, ne déclare pas Option A COMPLETE et n’ouvre pas T-A7.

### Légende de qualification (utilisée dans tout le document)

| Qualifiant | Signification |
|------------|---------------|
| **Observation** | Fait constaté, sans jugement de trajectoire |
| **Preuve** | Artefact Git/GitHub vérifiable (PR, run, job, blob, ruleset) |
| **Résultat validé** | Comportement déjà démontré dans un cycle Morris antérieur |
| **Réserve** | Limite ouverte, non convertie en décision |
| **Risque résiduel** | Exposition restante malgré M1 |
| **Recommandation** | Proposition non décidée |
| **Option** | Alternative de trajectoire pour arbitrage Morris |
| **Décision Morris requise** | Point explicitement `NOT DECIDED` |

---

## 2. Objet et périmètre

### Pourquoi M1 a été introduit

**Observation :** le finding `F-A6-PM-G01` a été capitalisé après le merge de la PR #267 sans revue PR/CI formelle et sans CI SFIA Studio observable sur les changements Studio.

**Objectif de M1 :** instaurer un contrôle de gouvernance de merge sur `main` capable de :

1. détecter si une PR touche le périmètre SFIA Studio ;
2. exécuter une validation lourde uniquement si nécessaire ;
3. exposer un **required check stable** (`SFIA Studio Required Gate`) utilisable par un ruleset GitHub ;
4. bloquer l’intégration d’une PR Studio invalide ;
5. ne pas bloquer indûment une PR hors Studio.

### Problème de gouvernance traité

| Problème | Nature |
|----------|--------|
| Absence de CI Studio path-aware | Pas de signal de qualité avant merge sur `main` |
| Required checks path-filtered classiques | Instables ou inapplicables hors paths |
| Merge possible sans gate agrégé | Risque de régression silencieuse sur Studio |
| Finding F-A6 ouvert | Mitigation technique et comportementale requise avant toute clôture |

### Inclus dans ce REX

- chronologie des PR #268–#275 et preuves associées ;
- architecture factuelle du workflow + ruleset M1 ;
- matrice des preuves comportementales ;
- résultats obtenus et non-preuves ;
- écarts / difficultés capitalisés ;
- état F-A6 MITIGATED NOT CLOSED ;
- recommandations et options **non décidées**.

### Hors périmètre

- modification du workflow ou du ruleset ;
- test réel de rollback ou de bypass ;
- clôture F-A6 ;
- déclaration Option A COMPLETE ;
- ouverture T-A7 ;
- nettoyage des branches/worktrees ;
- exécution métier Option A / providers live ;
- action Notion/CMP ;
- versionnement Git de ce REX (commit projet = gate séparé).

---

## 3. Chronologie factuelle

| Ordre | Événement | PR / artefact | SHA / ID | Qualification |
|------:|-----------|---------------|----------|---------------|
| 1 | CI initiale + gouvernance merge préparée | PR **#268** MERGED | squash/merge `508ef7c4619e27b664d087fd97d53afe74ea93cc` | **Preuve** d’introduction du workflow |
| 2 | Revues documentaires CI / post-merge | PR **#269** MERGED | merge `60d9ac9bdf8bad7dc5b2882db74ec951c70f31dc` ; docs `25`–`31` | **Preuve** documentaire |
| 3 | Required gate path-aware (P3) | PR **#270** MERGED | `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513` ; doc Option A `32-path-aware-…` | **Résultat validé** — P3 intégré |
| 4 | Preuve hors Studio (préparatoire) | PR **#271** CLOSED non mergée | head `ffa36fdef905…` ; run `30239805289` SUCCESS | **Preuve** comportementale pré-ruleset ou contrôlée |
| 5 | Preuve hors Studio sous M1 | PR **#272** CLOSED non mergée | head `09a2c093427b…` ; run `30248284607` SUCCESS | **Résultat validé** — hors Studio PASS |
| 6 | Preuve Studio failure | PR **#273** (1er head) | head `dd4a083d8e86…` ; run `30248328467` FAILURE | **Résultat validé** — blocage |
| 7 | Recovery Studio sur la même PR | PR **#273** (2e head) | head `1b8ea24afc33…` ; run `30248480927` SUCCESS | **Résultat validé** — recovery |
| 8 | Activation ruleset M1 | Ruleset ID `19798462` | check `SFIA Studio Required Gate` · integration `15368` | **Résultat validé** — contrôle actif |
| 9 | Formalisation F-A6 MITIGATED | PR **#274** MERGED | `b89065fa92d823843f1eb1014c304e7d13233556` ; doc `24` | **Résultat validé** — MITIGATED NOT CLOSED |
| 10 | Alignement doc POC `32` | PR **#275** MERGED | squash `ae61c3ed48d4d1c9fe751eddd73617ba15480734` | **Résultat validé** — claims CI obsolètes retirés |
| 11 | CI post-merge #275 | run push | `30278533761` SUCCESS | **Résultat validé** |

**Observation :** `origin/main` au moment de cette capitalisation est exactement `ae61c3ed48d4d1c9fe751eddd73617ba15480734`.

---

## 4. Architecture du contrôle M1

> Description factuelle de l’état sur `main`. **Pas** une nouvelle baseline d’architecture produit.

### 4.1 Workflow `.github/workflows/sfia-studio-ci.yml`

| Élément | Valeur factuelle |
|---------|------------------|
| Nom | `SFIA Studio CI` |
| Blob sur `main` | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
| Déclenchement | `pull_request` et `push` vers `main` (paths Studio + workflow lui-même) |

#### Jobs

1. **Detect SFIA Studio changes**
   - calcule `studio_changed=true|false`
   - fail-closed si valeur invalide

2. **Build and validate SFIA Studio**
   - `needs: detect`
   - exécuté si Studio concerné (PR avec `studio_changed=true`, ou push corroboré)
   - steps : Node, install, typecheck, lint, build, Vitest, modeled governance, secret scan, trailing whitespace

3. **SFIA Studio Required Gate** (`required_gate`)
   - `if: always()`
   - agrège Detect + Build
   - **PASS** si hors Studio (`studio_changed=false`) sans exiger Build
   - **PASS** si Studio et Build success
   - **FAIL** si Studio et Build failure/cancelled/absent

### 4.2 Ruleset GitHub

| Champ | Valeur |
|-------|--------|
| ID | `19798462` |
| Nom | `SFIA Studio Main Required Gate — M1` |
| Enforcement | `active` |
| Cible | `refs/heads/main` |
| Required check | `SFIA Studio Required Gate` |
| Integration ID | `15368` |
| Non-fast-forward | bloqué |
| Deletion de `main` | bloquée |
| Bypass actors | User `295557155`, mode `pull_request` |
| Approvals requis | `0` (**configuration loose** — **réserve**) |
| Strict up-to-date | `false` (**loose** — **réserve**) |

### 4.3 Comportements attendus (déjà démontrés)

| Cas | Comportement |
|-----|--------------|
| PR hors Studio | Detect success · Build skipped · Required Gate success |
| PR Studio en échec | Detect success · Build failure · Required Gate failure · merge bloqué |
| PR Studio corrigée | Detect/Build/Gate success |
| Push post-merge Studio | Detect/Build/Gate success |

---

## 5. Matrice des preuves

| # | Scénario | Branche / PR | Head SHA | Run ID | Detect | Build | Required Gate | Comportement GitHub | Résultat | Limite |
|---|----------|--------------|----------|--------|--------|-------|---------------|---------------------|----------|--------|
| 1 | PR hors Studio | `qa/sfia-studio-m1-controlled-non-studio-proof` / **#272** CLOSED non mergée | `09a2c093427b60234256355bdb7c3521e1e2ae01` | `30248284607` | success `89920211552` | **skipped** `89920245972` | success `89920245604` | Gate PASS sans validation lourde | **PASS** hors Studio | Pas un merge vers main ; PR fermée sans merge |
| 2 | PR Studio en échec | `qa/sfia-studio-m1-controlled-studio-proof` / **#273** | `dd4a083d8e86d06b99dbdcca43f3ec9f24752da0` | `30248328467` | success `89920352750` | **failure** `89920382756` | **failure** `89920627798` | Required check rouge | **BLOCKED** | Échec volontaire contrôlé |
| 3 | Recovery Studio | même PR **#273** | `1b8ea24afc33502b596c564f7daa911d9dc3e995` | `30248480927` | success `89920826448` | success `89920863525` | success `89921140417` | Required check vert | **RECOVERY PASS** | PR ensuite fermée sans merge |
| 4 | PR documentaire Studio | `docs/sfia-studio-doc32-post-p3-m1-correction` / **#275** MERGED | `dd2a68c6a1e45fee1e1f397cb644c2c082a3d877` | `30277076735` | success `90013737560` | success `90013783710` | success `90014180221` | Merge squash autorisé après CLEAN | **PASS** + merge | Contenu doc seulement |
| 5 | Push post-merge `main` | `main` après #275 | `ae61c3ed48d4d1c9fe751eddd73617ba15480734` | `30278533761` | success `90018681920` | success `90018732641` | success `90019119514` | CI push complète | **PASS** post-merge | N’équivaut pas à test rollback/bypass |

### Preuve préparatoire complémentaire (hors matrice obligatoire)

| Scénario | PR | Run | Résultat |
|----------|----|-----|----------|
| Hors Studio préparatoire | **#271** CLOSED | `30239805289` — Detect success · Build skipped · Gate success | **Preuve** cohérente avec #272 |

---

## 6. Résultats obtenus

| Affirmation | Qualification | Commentaire |
|-------------|---------------|-------------|
| M1 techniquement appliqué | **Résultat validé** | Workflow + ruleset actifs sur `main` |
| M1 comportementalement prouvé | **Résultat validé** | Preuves #272 / #273 / #275 / post-merge |
| Required gate stable | **Résultat validé** | Nom de check constant `SFIA Studio Required Gate` |
| Absence de blocage indu hors Studio | **Résultat validé** | #272 Build skipped + Gate success |
| Blocage d’une PR Studio invalide | **Résultat validé** | #273 failure run |
| Recovery réussie | **Résultat validé** | #273 recovery run |
| CI post-merge réussie | **Résultat validé** | run `30278533761` |
| F-A6 formalisé MITIGATED | **Résultat validé** | PR #274 / doc `24` |
| Doc POC `32` aligné post-P3/M1 | **Résultat validé** | PR #275 · blob `43f5157a…` |

---

## 7. Ce que M1 ne prouve pas

| Non-preuve | Qualification |
|------------|---------------|
| Rollback du ruleset | **non testé** |
| Bypass du ruleset | **non testé** (bypass non utilisé sur #272–#275) |
| Comportement multi-acteurs | **non testé** |
| Résilience aux indisponibilités GitHub Actions | **non testée** |
| Gouvernance de modification future du ruleset | **non éprouvée** |
| Configuration bypass / approvals « loose » | **inchangée** — **réserve** |
| M1 COMPLETE ⇒ Option A COMPLETE | **faux** — anti-claim |
| M1 COMPLETE ⇒ F-A6 CLOSED | **faux** — anti-claim |
| M1 ⇒ ouverture T-A7 | **faux** — anti-claim |
| CI success ⇒ industrialisation / production ready | **faux** — anti-claim |

---

## 8. Analyse des écarts et difficultés

| Écart / difficulté | Capitalisation |
|--------------------|----------------|
| Trailing whitespaces | Ont cassé des runs documentaires ; un step dédié dans Build a été intégré — **observation** utile pour futurs docs |
| Check final stable | Les required checks path-filtered seuls sont fragiles ; l’agrégateur `always()` résout le cas hors Studio — **résultat validé** |
| Workflows path-filtered comme required checks | Risque de check « absent » hors paths — **risque résiduel** historique corrigé par Detect+Gate |
| Détection path-aware | Distingue Studio / hors Studio sans inventer un second workflow — **valeur confirmée** |
| Skipped vs success | Build skipped hors Studio ≠ échec ; Gate doit PASS explicitement — **résultat validé** |
| PR contrôlées réelles | #272/#273 fermées sans merge fournissent des preuves sans polluer `main` — **pratique à conserver** |
| Micro-cycles | Coût élevé (push / readiness / merge séparés) — **observation** ; rationaliser push+ouverture PR reste une **recommandation**, merge séparé reste un garde-fou |
| Alignement documentaire tardif | Doc POC `32` a nécessité #275 après P3/M1 — **dette de synchronisation** documentaire |

---

## 9. Garde-fous confirmés

| Garde-fou | Statut |
|-----------|--------|
| Aucun bypass utilisé sur les preuves M1 / #274 / #275 | **Observation** confirmée |
| Aucun `--admin` | **Observation** confirmée |
| `main` protégée (ruleset actif) | **Résultat validé** |
| Merge squash avec `--match-head-commit` (#275) | **Résultat validé** |
| Séparation GO push / PR readiness / merge | **Résultat validé** (pratique de cycle) |
| Review handoff Git (`sfia/review-handoff`) | **Résultat validé** |
| Anti-claims dans docs `24` et POC `32` | **Résultat validé** |

---

## 10. État de F-A6-PM-G01

### État obligatoire

`MITIGATED — NOT CLOSED`

Source canonique : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md` (post PR #274).

### Critères couverts (mitigation)

| Critère | Couverture |
|---------|------------|
| Workflow CI Studio sur `main` | **couvert** (#268–#270) |
| Required check stable | **couvert** |
| Ruleset actif sur `main` | **couvert** (`19798462`) |
| Preuve hors Studio PASS | **couvert** (#272) |
| Preuve Studio FAIL puis recovery | **couvert** (#273) |
| Formalisation documentaire MITIGATED | **couvert** (#274) |
| Alignement doc POC `32` | **couvert** (#275) |

### Preuves disponibles

Voir §5 et chronologie §3.

### Critères historiques restant ouverts (empêchant clôture automatique)

| Critère ouvert | Commentaire |
|----------------|-------------|
| Décision Morris explicite de CLOSED | **NOT DECIDED** — D-M1-03 conserve NOT CLOSED |
| Rollback ruleset | non testé |
| Bypass | non testé |
| Durcissement config loose | non décidé |
| REX M1 versionné sur `main` | ce document est **draft local** jusqu’à gate de commit |

### Raisons empêchant la clôture automatique

1. La formalisation #274 a explicitement séparé MITIGATED et CLOSED.
2. Des non-preuves critiques (§7) restent ouvertes.
3. Aucun gate Morris de clôture n’a été consommé.
4. Ce REX **recommandera** éventuellement une réévaluation, sans la décider.

**Interdit dans ce document :** présenter `F-A6 CLOSED` comme verdict.

---

## 11. Réserves et risques résiduels

| Réserve / risque | Qualification |
|------------------|---------------|
| REX M1 produit dans ce cycle, **non encore versionné** | **Réserve** (commit projet = gate séparé) |
| Rollback non testé | **Réserve** |
| Bypass non testé | **Réserve** |
| Configuration M1 loose (approvals 0, strict false, bypass PR mode) | **Réserve / risque résiduel** |
| Findings F-CI éventuels non rouverts ici | **Observation** — hors mutation |
| Branches/worktrees résiduels (doc32, F-A6, preuves QA) | **Réserve** de cleanup |
| Dette de maintenance du ruleset | **Risque résiduel** |
| Dérive documentaire future (POC `32` vs Option A `32-path-aware`) | **Risque résiduel** de confusion de chemins |
| Option A non COMPLETE | **Réserve trajectoire** |
| T-A7 non ouverte | **Réserve trajectoire** |

---

## 12. Recommandations

> Toute recommandation ci-dessous est **non décidée**.

### 12.1 Court terme

| ID | Recommandation | Valeur | Dette créée | Alternative plus simple | Gate Morris requis | Répétable / arbitrage |
|----|----------------|--------|-------------|-------------------------|--------------------|-----------------------|
| R1 | Commit + PR du présent REX (`33-…`) | Trace capitalisée sur `main` | Micro-cycle docs | Garder draft local | `GO COMMIT OPTION A M1 CAPITALIZATION…` | Répétable |
| R2 | Nettoyage borné branches/worktrees F-A6 + doc32 + preuves QA | Réduit bruit local | Risque de supprimer trop tôt | Conserver jusqu’à GO cleanup | Gate cleanup séparé | Arbitrage humain |
| R3 | Index Option A racine (si un jour créé) — **ne pas inventer maintenant** | Navigabilité | Nouveau doc | Liens croisés dans `24`/`33` seulement | Gate docs index | Arbitrage |

### 12.2 Avant décision de clôture F-A6

| ID | Recommandation | Valeur | Dette | Alternative | Gate requis | Nature |
|----|----------------|--------|-------|-------------|-------------|--------|
| R4 | Cycle borné test **rollback** ruleset | Prouve réversibilité | Risque opérationnel sur `main` | Accepter réserve permanente | Gate test rollback | Arbitrage humain |
| R5 | Cycle borné test **bypass** (puis révocation) | Prouve surface de contournement | Risque gouvernance | Documenter bypass « known loose » sans test | Gate test bypass | Arbitrage humain |
| R6 | Réévaluer F-A6 seulement après R4/R5 **ou** acceptation formelle des non-preuves | Évite CLOSED prématuré | Retarde clôture | CLOSED conditionnel documenté | Gate réévaluation F-A6 | Arbitrage humain |

### 12.3 Avant ouverture T-A7

| ID | Recommandation | Valeur | Dette | Alternative | Gate requis | Nature |
|----|----------------|--------|-------|-------------|-------------|--------|
| R7 | Ne pas lier T-A7 à la seule existence de M1 | Évite promotion implicite | Aucune | Cadrage T-A7 indépendant | Gate cadrage T-A7 | Arbitrage |
| R8 | Exiger un pack de cadrage T-A7 distinct (périmètre produit ≠ CI gate) | Séparation des préoccupations | Cycle supplémentaire | Absorber dans Option A runtime | Gate T-A7 | Arbitrage |

### 12.4 Maintenance M1

| ID | Recommandation | Valeur | Dette | Alternative | Gate | Nature |
|----|----------------|--------|-------|-------------|------|--------|
| R9 | Toute modification workflow/ruleset = cycle DevOps borné + preuves | Évite régression silencieuse | Coût process | Hotfix non gouverné (**à éviter**) | Gate DevOps M1 | Répétable |
| R10 | Conserver le nom exact du required check | Stabilité ruleset | Couplage nom | Migration versionnée du check | Gate ruleset | Répétable |
| R11 | Surveiller la config loose ; durcir seulement sous GO | Réduit bypass accidentel | Friction merge | Maintenir loose + monitoring | Gate durcissement | Arbitrage |

---

## 13. Options de trajectoire pour Morris

> Aucune option n’est sélectionnée. Statut : **NOT DECIDED**.

### Option 1 — Conserver F-A6 MITIGATED et poursuivre sans clôture

| | |
|--|--|
| **Bénéfices** | Fidèle à D-M1-03 ; pas de faux CLOSED ; laisse du temps pour REX versionné |
| **Risques** | Finding reste ouvert longtemps ; dette visuelle de gouvernance |
| **Dette** | Suivi périodique F-A6 |
| **Prérequis** | Aucun technique immédiat |
| **Gate requis** | Aucun pour « ne rien fermer » ; éventuellement commit REX |

### Option 2 — Lancer un cycle borné rollback + bypass avant réévaluation

| | |
|--|--|
| **Bénéfices** | Comble les non-preuves §7 ; meilleure base pour CLOSED futur |
| **Risques** | Erreur opérationnelle sur ruleset ; fenêtre de faiblesse |
| **Dette** | Scripts/runbooks de test ; evidence pack |
| **Prérequis** | GO Morris dédié ; fenêtre contrôlée ; pas de `--admin` caché |
| **Gate requis** | Gate test rollback/bypass |

### Option 3 — Renforcer la configuration bypass / approvals avant réévaluation

| | |
|--|--|
| **Bénéfices** | Réduit la surface loose |
| **Risques** | Friction delivery ; faux sentiment de sécurité sans preuves comportementales |
| **Dette** | Ajustements ruleset + re-preuve éventuelle |
| **Prérequis** | GO durcissement ; critères d’acceptation |
| **Gate requis** | Gate durcissement M1 |

### Option 4 — Différer toute décision F-A6 jusqu’au cadrage T-A7

| | |
|--|--|
| **Bénéfices** | Évite de coupler CI gate et trajectoire produit |
| **Risques** | F-A6 reste MITIGATED indéfiniment ; confusion stakeholders |
| **Dette** | Suivi croisé Option A / F-A6 |
| **Prérequis** | Clarifier que T-A7 ≠ CI |
| **Gate requis** | Gate cadrage T-A7 (ultérieur) |

---

## 14. Décisions Morris requises

Statut obligatoire de chaque item : **`NOT DECIDED`**

| ID | Décision | Statut |
|----|----------|--------|
| D1 | Faut-il tester le rollback du ruleset M1 ? | NOT DECIDED |
| D2 | Faut-il tester le bypass M1 ? | NOT DECIDED |
| D3 | Faut-il durcir la configuration loose (approvals / strict / bypass) ? | NOT DECIDED |
| D4 | Quand réévaluer F-A6 (rester MITIGATED vs envisager CLOSED) ? | NOT DECIDED |
| D5 | Faut-il ouvrir ultérieurement T-A7 ? | NOT DECIDED |
| D6 | Faut-il versionner ce REX sur `main` maintenant ? | NOT DECIDED |
| D7 | Faut-il nettoyer branches/worktrees résiduels maintenant ? | NOT DECIDED |

Aucune de ces décisions n’est tranchée par la rédaction de ce document.

---

## 15. Verdict de capitalisation

`M1 IMPLEMENTATION AND BEHAVIORAL PROOFS CAPITALIZED — F-A6 MITIGATED NOT CLOSED — ROLLBACK AND BYPASS UNTESTED — OPTION A NOT COMPLETE — T-A7 NOT OPEN — MORRIS DECISION REQUIRED FOR NEXT TRAJECTORY STEP`

### Anti-claims (rappel)

- capitalisation M1 ≠ F-A6 CLOSED
- capitalisation M1 ≠ Option A COMPLETE
- capitalisation M1 ≠ ouverture T-A7
- CI success ≠ rollback/bypass testés
- REX draft local ≠ REX versionné sur `main`
- recommandation ≠ décision Morris

---

## Annexe A — Références de chemins

| Artefact | Path |
|----------|------|
| Workflow | `.github/workflows/sfia-studio-ci.yml` |
| F-A6 / CI gouvernance | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md` |
| Path-aware préparation (Option A doc 32) | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md` |
| POC vertical slice (doc 32 corrigé #275) | `projects/sfia-studio/32-poc-vertical-slice-functional-design.md` |
| CI reviews #269 | docs Option A `25`–`31` |
| **Ce REX** | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/33-m1-implementation-and-proofs-rex.md` |

## Annexe B — Identifiants stables

| Type | Valeur |
|------|--------|
| Ruleset | `19798462` |
| Required check | `SFIA Studio Required Gate` |
| Integration | `15368` |
| Workflow blob | `801a8759bb7440666799b95edf13f9ee6d9332f8` |
| `main` HEAD (capitalisation) | `ae61c3ed48d4d1c9fe751eddd73617ba15480734` |
| Doc POC 32 blob | `43f5157a2bb198fb6fb04969677277d80645a434` |
```

## 11. CI post-merge initiale
- état: `SUCCESS`
- note: observation initiale IN PROGRESS puis completion SUCCESS dans le même cycle (sans correction)
- run: `30285393915`
- workflow: `SFIA Studio CI`
- event: `push`
- headSha: `49f2edfa5adcbeb9d59ea5cba7d6db69b00edc13`
- status: `completed`
- conclusion: `success`
- url: `https://github.com/mcleland147/sfia-workspace/actions/runs/30285393915`

### Jobs visibles
- Detect SFIA Studio changes | id=90041789824 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Checkout | status=completed | conclusion=success
  - step: Detect Studio scope | status=completed | conclusion=success
  - step: Post Checkout | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success
- Build and validate SFIA Studio | id=90041833134 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Checkout | status=completed | conclusion=success
  - step: Setup Node.js | status=completed | conclusion=success
  - step: Install dependencies | status=completed | conclusion=success
  - step: Typecheck | status=completed | conclusion=success
  - step: Lint | status=completed | conclusion=success
  - step: Build | status=completed | conclusion=success
  - step: Unit tests (Vitest) | status=completed | conclusion=success
  - step: Modeled governance tests | status=completed | conclusion=success
  - step: Secret pattern scan (targeted) | status=completed | conclusion=success
  - step: Trailing whitespace check | status=completed | conclusion=success
  - step: Post Setup Node.js | status=completed | conclusion=success
  - step: Post Checkout | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success
- SFIA Studio Required Gate | id=90042221238 | status=completed | conclusion=success
  - step: Set up job | status=completed | conclusion=success
  - step: Aggregate required gate | status=completed | conclusion=success
  - step: Complete job | status=completed | conclusion=success

## 12. Branches / worktrees conservés
- branche distante: présente — `fa0eebe00ce3b765a8a486aa660dddfab40123a0	refs/heads/docs/sfia-studio-m1-capitalization-rex`
- branche locale: `docs/sfia-studio-m1-capitalization-rex` @ `fa0eebe00ce3b765a8a486aa660dddfab40123a0`
- worktree: `/Users/morris/Projects/sfia-workspace-m1-capitalization` CONSERVÉ
- suppressions: aucune (branche locale, branche distante, worktree)

### worktree list (extrait pertinent)
```
/Users/morris/Projects/sfia-workspace-doc32-post-p3-m1                                                                                   dd2a68c [docs/sfia-studio-doc32-post-p3-m1-correction]
/Users/morris/Projects/sfia-workspace-fa6-mitigated-clean                                                                                67f140a [docs/sfia-studio-fa6-mitigated-from-main]
/Users/morris/Projects/sfia-workspace-m1-capitalization                                                                                  fa0eebe [docs/sfia-studio-m1-capitalization-rex]
/Users/morris/Projects/sfia-workspace-review-handoff-publisher                                                                           14d58fe [tooling/review-handoff-canonical-publisher]
/Users/morris/Projects/sfia-workspace/sfia-review-handoff                                                                                8669611 [sfia/review-handoff]
```

## 13. Réserves préservées
- F-A6-PM-G01 = MITIGATED
- F-A6-PM-G01 = NOT CLOSED
- Option A = non COMPLETE
- T-A7 = non ouverte
- rollback = non testé
- bypass = non testé
- configuration M1 loose = inchangée
- D1–D7 = NOT DECIDED
- aucune nouvelle décision Morris
- aucune promotion de baseline produit

## 14. Actions non exécutées
- modification document 33
- nouveau commit sur branche source / amend / rebase / cherry-pick / force push
- modification titre/corps PR
- auto-merge / `--admin` / bypass ruleset
- merge d'une autre PR
- suppression branche locale/distante / worktree
- modification workflow ou ruleset
- F-A6 CLOSED / Option A COMPLETE / ouverture T-A7
- test rollback ou bypass
- action Notion/CMP

## 15. Anti-claims
- merge PR #276 ≠ F-A6 CLOSED
- merge PR #276 ≠ Option A COMPLETE
- merge PR #276 ≠ ouverture T-A7
- CI success ≠ rollback/bypass testés
- REX intégré ≠ décision Morris sur D1–D7
- merge ≠ autorisation de suppression de branche/worktree

## 16. Gates candidats
- `GO POST-MERGE VALIDATE PR #276 OPTION A M1 CAPITALIZATION — SFIA STUDIO V3-NATIVE` — NOT CONSUMED

## 17. Verdict
`SFIA STUDIO V3-NATIVE PR #276 MERGED BY SQUASH — COMPLETE 441-LINE M1 REX INTEGRATED ON MAIN — POST-MERGE CI SUCCESS — F-A6 MITIGATED NOT CLOSED — OPTION A NOT COMPLETE — T-A7 NOT OPEN — BRANCH PRESERVED`

## Review Handoff Git (à publier)
- décision: required
- mode: publish-in-cycle
- branche: `sfia/review-handoff`
- fichier: `sfia-review-handoff/latest-chatgpt-review.md`
- source: `.tmp-sfia-review/chatgpt-review.md`
- commit attendu: `docs(review-handoff): record PR #276 merge`

# SFIA Review Pack FULL — ML3 RCT-02 LIVE RECETTE CONSOLIDATED / PR READINESS
**Date / fuseau :** 2026-11-07 · Europe/Paris (UTC+1)
**Profil :** Critical · QA / capitalisation preuve / PR readiness · mono-cycle
**Produit :** SFIA Studio Next uniquement (`projects/sfia-studio-next/`)
**GO Morris :** consolidation LIVE 8/8 + PR readiness — **SANS** PR / merge / push projet / redeploy RECETTE / STABLE / clôture ML3
**Handoff L3 :** autorisé (publish-in-cycle)

---

## 0. Verdict

`ML3 RCT-02 LIVE RECETTE CONSOLIDATED — PR READINESS REVIEW COMPLETE WITH CI GATE OPEN`

- LIVE ciblée T01–T08 : **8/8 PASS** (preuve D0 ChatGPT + observations Morris ; captures PNG **non lues** par Cursor).
- Candidat Git/RECETTE alignés : SHA `61fe295b` · build `ZCkIWQ341KK1KOHTD1a5L` · schema `007` · `:3200` / `5434`.
- Validations locales Cursor (DEV `:5433` / e2e DB) : unit **112 PASS** · integration PG **142 PASS** · lint PASS · tsc PASS · build PASS · e2e ml3 **7 PASS**.
- CI GitHub sur `61fe295b` : **NOT RUN** (`total_count=0` statuses + check-runs) — **ne pas confondre avec CI PASS**.
- PR : **non ouverte** ; brouillon titre/body ci-dessous.
- Docs consolidation LIVE : **locales non commités** (présentés ici) ; SHA recetté ≠ futur SHA documentaire.

---

## 1. Git Truth — initial / final (revalidé ce cycle)

| Champ | Valeur observée |
|---|---|
| Repo | `mcleland147/sfia-workspace` |
| Branche | `sfia/next-ml3-rct02-live-remediation` |
| HEAD local | `61fe295b6704e820694d2379e7f6ab1814143172` |
| Remote branche | **identique** `61fe295b…` |
| `origin/main` | `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| Merge-base | `7f1f41c3…` (= main) |
| Ahead / behind | **5 ahead / 0 behind** |
| Parent correctif | `d646d42addb5a4c4a3cab441e9e39018d85fae70` |
| PR #659 ML2 | MERGED (état courant) |
| Worktree dirty (produit) | **propre** vs HEAD pour `web/` |
| Dirty local hors produit | `M .tmp-sfia-review/chatgpt-review.md` (attendu) ; `?? …/recette-ml3-rct02-live-retest-61fe295b.md` (consolidation locale) |
| Fichiers `main...61fe` | **42** (28 A / 14 M / 0 D) — aucun `.env` / `.tmp` / `node_modules` / `.next` dans le diff |
| Secrets heuristique | hit uniquement `OPENAI_API_KEY` **neutralisé** dans tests (`delete process.env…`) — pas de secret embarqué |
| Product version | `0.0.0-dev` / **NO RELEASE** |
| STABLE | NOT AVAILABLE |

### Commits `origin/main..61fe295b`

1. `8bf8b5ce` feat(next): deliver governed pilotage and decisions ML3
2. `ba831b25` feat(next): integrate governed conversation and recovery into ML3
3. `b9047a48` docs(next): restituer la recette ML3 RCT-02 et les huit anomalies
4. `d646d42a` fix(next): harden Nora conversational authority after ML3 RCT-02
5. `61fe295b` fix(next): resolve ML3 RCT-02 live authority regressions

### Fichiers `name-status`

```
A	projects/sfia-studio-next/cki/manifest.v0.2.0.json
M	projects/sfia-studio-next/construction/delivery-history.md
A	projects/sfia-studio-next/construction/pilotage-et-decisions/recette-ml3-rct02-anomalies.md
A	projects/sfia-studio-next/construction/pilotage-et-decisions/recette-ml3-rct02-live-corrective-gaps.md
M	projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
M	projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
M	projects/sfia-studio-next/web/scripts/db-migrate.sh
M	projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/decisions/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/[commandId]/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/by-key/[clientCommandKey]/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/commands/route.ts
A	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/pilotage/route.ts
M	projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
A	projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
A	projects/sfia-studio-next/web/src/db/migrations/007_ml3_pilotage_decisions.sql
M	projects/sfia-studio-next/web/src/db/schema.ts
M	projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
M	projects/sfia-studio-next/web/src/domains/conversation/service.ts
M	projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
A	projects/sfia-studio-next/web/src/domains/decisions/authority.ts
A	projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
A	projects/sfia-studio-next/web/src/domains/decisions/service.ts
A	projects/sfia-studio-next/web/src/domains/decisions/types.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/cki-resolve.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/nora-context.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/service.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
A	projects/sfia-studio-next/web/src/domains/pilotage/types.ts
M	projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
A	projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
M	projects/sfia-studio-next/web/tests/integration/migrations-fresh.pg.test.ts
A	projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml3-authority.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
A	projects/sfia-studio-next/web/tests/unit/ml3-rct02-intent.test.ts
M	projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
```

### Handoffs antérieurs (SHA immuables)

| Rôle | Tip | Blob |
|---|---|---|
| Déploiement RECETTE 61fe | `2be796638a61073639793d8a53b068f103644584` | `c873eb94358394b67c5184f612d0100f41fb0258` |
| Full correctif live remediation | `828688d30c8916f8b870dbca674bd69bca8b9963` | `cc565a58f18bd585d644cec76798436bd175e6ad` |

---

## 2. Sources lues / limites

**Lues Git (arbre 61fe / main) :** SEF, roadmap (fraîcheur réservée), ADR R4 exit, ENV-01, product-versioning, naming, reference-delivery-r5, delivery-history, specification-technique, tracabilite, anomalies, gaps, intent/conversation-authority/service, tests unit/PG/e2e, migration 007, workflow `sfia-studio-next-ci.yml`, publisher `scripts/sfia/publish-review-handoff.sh`.

**Sources LIVE :** rapport D0 fourni `/Users/morris/Downloads/sfia-next-ml3-rct02-live-retest-61fe295b.md` → copie locale construction (non commitée). Captures PNG indexées T01–T08 : **ABSENTES du worktree Cursor — non lues**. Contrat §4 du mandat utilisé comme grille d’oracle.

**Manifest RECETTE local :** `…/ml3-recette-build-61fe295b/artifacts/recette-served-manifest.json` → `candidate_sha=61fe295b…` · `build_id_next=ZCkIWQ341KK1KOHTD1a5L` · `schema_revision=007_ml3_pilotage_decisions` · `http://127.0.0.1:3200`.

**Smoke RECETTE (lecture seule) :** `/login` **200** · `/api/portfolio` **401** (sans auth). ≠ parcours authentifié exhaustif.

**Non muté :** RECETTE runtime, DB 5434, branche produit distante, main, Roadmap/ADR/SEF.

---

## 3. Matrice LIVE T01–T08 (consolidation)

| Test | Verdict D0 | Oracle | Provenance Cursor |
|---|---|---|---|
| T01 ouverture | PASS | OPEN CADRAGE ; rév.1 ; journal 1 | D0 + mandat §4 ; capture non lue |
| T02 / C04 record | PASS | RECORD ; objectRef coordination/suivi ; sans `que,` | idem |
| T03 / C05 revise | PASS | REVISE RECORD ; OPEN fondateur intact | idem |
| T04 précondition | PASS | Restriction instance ; rév.4 | cockpit manuel |
| T05 / C06 lift | PASS | LIFT APPLIED ; cycle ACTIVE ; pas CLOSE | idem |
| T06 / C07 lecture | PASS | Projection lue ; zéro mutation | idem |
| T07 / C08 close | PASS | CLOSE ; aucun cycle actif | idem |
| T08 faux GO | PASS | Citation ; zéro mutation | idem |

**Bornes :** pas C03 intercycle ; pas R6 global ; pas ADOPTED ; NLP universel NOT CLAIMED.

---

## 4. Candidat RECETTE

| Objet | Valeur |
|---|---|
| SHA | `61fe295b6704e820694d2379e7f6ab1814143172` |
| Build | `ZCkIWQ341KK1KOHTD1a5L` |
| Lane | `http://127.0.0.1:3200` |
| DB | `127.0.0.1:5434/sfia_next_recette_ml3` |
| Schema | `007_ml3_pilotage_decisions` |
| Rollback code | WT `d646d42a` / build `R7JhVsbMaJdiUuuljApyn` **préservé** |
| Dump FC | créé pré-61fe ; **restauration NON PROUVÉE** |
| Ce cycle | **intouchable** — aucun redeploy / reset / hot reload |

---

## 5. Documents créés / proposés (NON COMMITÉS)

### 5.1 Créé intégralement (local) — `recette-ml3-rct02-live-retest-61fe295b.md`

Chemin : `projects/sfia-studio-next/construction/pilotage-et-decisions/recette-ml3-rct02-live-retest-61fe295b.md`
Statut Git : **untracked** · non poussé.

<details><summary>Contenu intégral</summary>

> **Consolidation locale Cursor (PR readiness).** Copie du rapport D0 ChatGPT fourni hors Git.
> Captures PNG indexées (§5) **non disponibles** dans le worktree Cursor — constats repris du rapport D0 + conversation ; **pas de lecture directe des images**.
> Non normative. **Non commitée / non poussée** sous le GO PR readiness.

# SFIA Studio Next — R5 / ML3 — RCT-02 : restitution consolidée de recette LIVE ciblée

**Date des observations :** 7 novembre 2026 (Europe/Paris)
**Nature :** D0 — restitution de tests utilisateur et revue à partir des transcriptions/captures en conversation. Non normative ; ne vaut ni adoption, ni merge, ni clôture ML3.
**Auteur de la consolidation :** ChatGPT, sur les observations fournies par Morris.
**Statut :** **TARGETED LIVE RECETTE PASSED — 8/8 scénarios observés conformes ; C04/C05/C06 corrigés sur parcours testés ; PR READINESS PENDING**.
**Autorité de recette :** Morris. Ce rapport prépare la traçabilité et la revue d'intégration ; il n'est pas un GO de merge.

## 1. Identité du candidat et provenance

| Objet | Valeur | Niveau de vérification |
|---|---|---|
| Dépôt | `mcleland147/sfia-workspace` | GitHub distant consulté |
| Branche candidate | `sfia/next-ml3-rct02-live-remediation` | distante = SHA ci-dessous au pré-check |
| SHA candidat | `61fe295b6704e820694d2379e7f6ab1814143172` | GitHub distant |
| Base précédente RECETTE | `d646d42addb5a4c4a3cab441e9e39018d85fae70` | parent précédent du correctif |
| Écart à `main` au pré-check | 5 commits ahead, 0 behind, merge-base `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` | GitHub compare ; revalider avant PR |
| Lane | RECETTE — `http://127.0.0.1:3200` | attribution de Cursor et captures utilisateur ; accès runtime direct de ChatGPT non disponible |
| Build | `ZCkIWQ341KK1KOHTD1a5L` | handoff Cursor `2be79663` + manifest rapporté ; ChatGPT n'a pas lu directement le runtime local |
| Schéma | `007_ml3_pilotage_decisions` | handoff Cursor ; pas de preuve SQL indépendante |
| Base RECETTE | `127.0.0.1:5434/sfia_next_recette_ml3` | handoff Cursor ; ne jamais exposer secret |
| Handoff de déploiement | `sfia/review-handoff@2be796638a61073639793d8a53b068f103644584`, blob `c873eb94358394b67c5184f612d0100f41fb0258` | GitHub distant vérifié |
| Version produit | `0.0.0-dev`, `NO RELEASE`, STABLE `NOT AVAILABLE` | Git / handoff |
| CI SHA correctif | `NOT RUN` | Aucun statut ni workflow associé retrouvé au pré-check ; pas de PASS implicite |

**Périmètre de preuve :** les captures montrent les projections et journaux visibles après les actions. Les réponses Nora, rapportées dans la conversation, permettent de qualifier son discours. Cette preuve utilisateur ne remplace pas une extraction PostgreSQL, des traces runtime, un test de restauration ou une CI.

## 2. Contrat de test et scoreboard

| Test | Action utilisateur / précondition | Vérification sur Pilotage et Nora | Verdict |
|---|---|---|---|
| T01 — ouverture | GO naturel pour CADRAGE avec objectif exact | `CADRAGE ACTIVE`, rev1, 1 décision `OPEN_CYCLE APPLICABLE`, aucune restriction ; Nora propose une démarche sans valider les besoins | **PASS** |
| T02 / C04 — record | Message LIVE original de priorisation exploratoire | Rev2, 2 décisions ; `RECORD_DECISION APPLICABLE`; `objectRef` sur difficultés de coordination et suivi, pas sur la réserve ; texte sans `que,` ; Nora propose une question d'enquête | **PASS** |
| T03 / C05 — revise | Message LIVE original révisant la priorité d'exploration | Rev3, 3 décisions ; ancien RECORD `REVISED`, nouveau RECORD `APPLICABLE`, OPEN fondatrice toujours applicable ; Nora confirme la nouvelle orientation | **PASS** |
| T04 — précondition | Application cockpit d'une restriction `CYCLE_MUTATION` limitée à l'instance CADRAGE | Rev4, 4 décisions ; restriction ACTIVE sur `cyc_6fc63656-0109-45df-a7e1-5aa286605cd5` | **PASS** |
| T05 / C06 — lift | Message LIVE original levant cette seule restriction, sans clore ni ouvrir | Rev5, 5 décisions ; `LIFT_RESTRICTION APPLICABLE`, aucune restriction active, historique APPLY/LIFT conservé, CADRAGE toujours actif ; Nora annonce effet APPLIED | **PASS** |
| T06 / C07 — lecture | Question de constat sans décision D6 | Nora explique état projet rev5, aucune restriction active et journal historique ; capture après réponse : rev5, 5 décisions, CADRAGE ACTIVE | **PASS** |
| T07 / C08 — close | GO explicite de clôture, sans autre ouverture | Rev6, 6 décisions ; `CLOSE_CYCLE APPLICABLE`, aucun cycle actif, aucune restriction ; Nora confirme | **PASS** |
| T08 — faux GO | Citation « Ouvre le cycle CONCEPTION_FONCTIONNELLE » explicitement non exécutoire | Nora reconnaît l'illustration sans GO ; capture après réponse : rev6, 6 décisions, aucun cycle actif, aucune restriction | **PASS** |

**Bilan vérifié sur ces huit scénarios : 8/8 PASS.** Il ne prouve pas la qualification générale ML3, l'ensemble des scénarios R5/R6, ni l'absence de tout bug linguistique hors des formulations testées.

## 3. Les trois défauts initiaux et leur sortie

**C04 — décision mal identifiée** : l'ancienne RECETTE enregistrait un `objectRef` provenant de la réserve « mais ne signifie pas que le besoin utilisateur... », et un énoncé commençant par « que, ». La nouvelle capture T02 montre un objet de coordination et un énoncé propre. **Sortie : BEHAVIOR PROVEN sur ce test LIVE.**

**C05 — révision non appliquée** : l'ancien moteur traitait `OPEN_CYCLE` fondateur et `RECORD_DECISION` comme deux cibles concurrentes avant filtrage. T03 montre la révision persistante et la conservation de la décision fondatrice. **Sortie : BEHAVIOR PROVEN sur ce test LIVE.**

**C06 — levée non appliquée** : « je ne souhaite ni clôturer » était interprété comme une seconde clôture affirmative. T05 montre la levée persistante de `CYCLE_MUTATION` sur l'instance active, sans clôture ni ouverture. **Sortie : BEHAVIOR PROVEN sur ce test LIVE.**

**T01, T06, T07, T08** assurent des contrôles de non-régression ciblés de l'autorité, de la lecture sans mutation, de la clôture et des citations non exécutoires ; ils ne constituent pas une campagne exhaustive de sûreté D6.

## 4. Chronologie d'état observée

| Instant | Révision | Décisions visibles | Cycle actif | Restrictions actives | Événement principal |
|---|---:|---:|---|---:|---|
| T01 | 1 | 1 | CADRAGE | 0 | OPEN |
| T02 | 2 | 2 | CADRAGE | 0 | RECORD |
| T03 | 3 | 3 | CADRAGE | 0 | REVISE |
| T04 | 4 | 4 | CADRAGE | 1 | APPLY |
| T05 | 5 | 5 | CADRAGE | 0 | LIFT |
| T06 | 5 | 5 | CADRAGE | 0 | Lecture seule |
| T07 | 6 | 6 | Aucun | 0 | CLOSE |
| T08 | 6 | 6 | Aucun | 0 | Citation non exécutée |

## 5. Index des captures primaires

Les fichiers ci-dessous sont les originaux téléversés dans la conversation et vérifiés dans la session d'analyse. Le préfixe SHA-256 permet de confirmer qu'une copie n'a pas été substituée ; le hash complet peut être recalculé sur la copie fournie. **Ils ne sont pas automatiquement accessibles au worktree Cursor, ni publiés dans Git.**

| Test | Lien au cas | Capture source | SHA-256 (16 premiers caractères) | Ce qui est visible |
|---|---|---|---|---|
| T01 | C01/C02 | `image(20261107-021710).png` | `0880cc706e571ef3` | CADRAGE ACTIVE, révision 1, objectif, OPEN_CYCLE applicable, 1 décision, aucune restriction |
| T02 | C04 | `image(20261107-021932).png` | `9ee57b3ff2f29e50` | Révision 2, 2 décisions, RECORD_DECISION applicable, objectRef coordination, énoncé sans « que, » |
| T03 | C05 | `image(20261107-022313).png` | `b4c6cf03f4fece1e` | Révision 3, 3 décisions, ancien RECORD REVISED, nouveau RECORD APPLICABLE, OPEN_CYCLE applicable |
| T04 | Prérequis C06 | `image(20261107-022507).png` | `24b12a6d8232d82e` | Révision 4, 4 décisions, CYCLE_MUTATION active sur instance CADRAGE |
| T05 | C06 | `image(20261107-022705).png` | `235d30b625171406` | Révision 5, 5 décisions, aucune restriction active, APPLY/LIFT conservées, CADRAGE actif |
| T06 | C07 | `image(20261107-023138).png` | `0ea0d869efa490c6` | Révision 5 et 5 décisions inchangées après lecture Nora, aucune restriction active |
| T07 | C08 | `image(20261107-023259).png` | `927284256c33325d` | Révision 6, 6 décisions, CLOSE_CYCLE applicable, aucun cycle actif, aucune restriction active |
| T08 | Faux GO | `image(20261107-023513).png` | `927284256c33325d` | Révision 6 et 6 décisions inchangées après citation non exécutoire, aucun cycle actif |

Transcriptions Nora : reproduites dans la conversation utilisateur aux mêmes étapes. Les messages C04/C05/C06 de test sont exactement ceux du document candidat `construction/pilotage-et-decisions/recette-ml3-rct02-live-corrective-gaps.md` (source historique des anomalies), non de nouvelles variantes.

## 6. Réserves / dettes / exits

| Réserve | Constat | Condition de sortie | Gate |
|---|---|---|---|
| **CI SHA correctif** | Aucun run prouvé sur `61fe295b` | Exécuter la CI Next sur le SHA final de PR et vérifier les checks applicables ; tout rebase/modification invalide le lien direct de recette sans requalification | **PR readiness** ; qualifier blocage si required checks manquants |
| **C03 CKI intercycles** | Pas de test d'accompagnement intercycles à partir de cette recette | Test ciblé distinct selon contrat ; ne pas le présenter comme validé | Avant clôture ML3 selon arbitrage Morris |
| **ENV-01 Reserve A** | Cookies potentiellement partagés sur host `127.0.0.1` malgré ports différents | Isolation technique et re-recette concernée ; mitigation actuelle : profils isolés | Avant STABLE |
| **Rollback DB** | Dump conservatoire créé, restauration non testée | Vérification de restauration adaptée sur environnement non destructif | Selon exigence ENV-01/DATA-01 avant promotion |
| **LIVE/REAL couverture** | 8 scénarios spécifiques, pas E2E produit global | Qualification R6, contrôles négatifs et parcours élargis selon criticité | R6 |
| **Preuve runtime autonome** | Handoff indique SHA/build ; captures montrent état fonctionnel, pas identifiant build affiché dans les screenshots | Relecture manifeste/servi par Cursor en PR readiness | Avant PR/merge |
| **Ancien rapport C04–C06** | En-tête historique « non publié sur Git » persiste dans le fichier désormais publié | Corriger la formule au même lot documentaire si autorisé, sans changer le diagnostic historique | PR readiness (mineur) |

Aucune de ces réserves ne transforme le verdict 8/8 en FAIL. **Elles empêchent de revendiquer CI PASS, ML3 CLOSED, STABLE, release, ADOPTED ou qualité globale R6.**

## 7. Gate d'intégration et préparation de PR

- **État actuel :** `TARGETED LIVE RECETTE PASSED — PR READINESS PENDING`.
- **Autorisation Morris présente :** consolidation des preuves et préparation de PR ; pas de GO explicite de création de PR, push projet complémentaire, merge ou clôture ML3.
- **Prochaine vérification technique :** diff complet `main...61fe295b` (5 commits, 42 fichiers au pré-check), tests des dépendances et protections, migration schéma007, critères CI et blocages réels, preuve de l'arbre recetté versus arbre proposé à l'intégration.
- **Intégration documentaire :** ajouter ce rapport à la traçabilité ML3 sous un chemin de construction approprié et conserver l'historique du candidat précédent ; toute écriture Git demande une autorisation bornée distincte.
- **Décision distincte à venir :** Morris autorise ou refuse l'ouverture PR, puis décide séparément du merge après contrôles/CI ; le rapport est une proposition de preuve, pas un GO.

**Verdict final borné : `ML3 RCT-02 TARGETED LIVE RECETTE PASSED (8/8) — INTEGRATION REVIEW PENDING`.**


</details>

### 5.2 Proposé — append `delivery-history.md` (local only)

## delivery_id: DELIV-2026-11-07-ML3-RCT02-LIVE-RETEST-61FE — PROPOSED LOCAL APPEND (NOT COMMITTED)

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-07 |
| Macro-lot | R5 / ML3 — consolidation LIVE retest 8/8 + PR readiness |
| Type | QA / capitalisation preuve (Critical) |
| SHA recetté | `61fe295b6704e820694d2379e7f6ab1814143172` |
| Branche | `sfia/next-ml3-rct02-live-remediation` (5 ahead / 0 behind `main` @ merge-base `7f1f41c3`) |
| Parent correctif | `d646d42addb5a4c4a3cab441e9e39018d85fae70` |
| Preuve LIVE | T01–T08 PASS (D0 ChatGPT + observations Morris) ; rapport local `recette-ml3-rct02-live-retest-61fe295b.md` **non commitée** |
| Build RECETTE | `ZCkIWQ341KK1KOHTD1a5L` ; lane `:3200` ; schema `007_ml3_pilotage_decisions` ; DB `5434/sfia_next_recette_ml3` |
| CI GitHub | **NOT RUN** on SHA `61fe295b` (0 check-runs) |
| Product version | `NO RELEASE` / package `0.0.0-dev` |
| Push projet / PR / merge | **NON** sous ce GO ; handoff L3 PR readiness seulement |
| Verdict candidat | `ML3 RCT-02 LIVE RECETTE CONSOLIDATED — PR READINESS REVIEW COMPLETE WITH CI GATE OPEN` |

> Si intégré en Git : nouveau SHA **documentaire** ≠ SHA recetté `61fe295b` ; requalifier sous-arbre `web/` avant toute PR.


### 5.3 Proposé — note `tracabilite-r2-r3-r4.md` (local only)

### LIVE retest 61fe295b — 8/8 (2026-11-07) — PROPOSED LOCAL NOTE (NOT COMMITTED)

| ID | Oracle LIVE | Preuve | Limite |
| --- | --- | --- | --- |
| T01 | OPEN_CYCLE CADRAGE ACTIVE ; rév.1 ; journal 1 | D0 + capture T01 (index) | captures PNG non lues par Cursor |
| T02/C04 | RECORD ; objectRef coordination/suivi ; sans `que,` | D0 + capture T02 | — |
| T03/C05 | REVISE RECORD ; OPEN fondateur préservé | D0 + capture T03 | — |
| T04 | Restriction cockpit instance ; rév.4 | D0 + capture T04 | précondition manuelle |
| T05/C06 | LIFT ; cycle ACTIVE ; pas CLOSE | D0 + capture T05 | — |
| T06/C07 | Lecture projection ; zéro mutation | D0 + capture T06 | — |
| T07/C08 | CLOSE ; aucun cycle actif | D0 + capture T07 | — |
| T08 | Faux GO citation ; zéro mutation | D0 + capture T08 | — |

Statut proposé : **LIVE TARGETED RECETTE 8/8 OBSERVED** sur SHA `61fe295b` / build `ZCkIWQ341KK1KOHTD1a5L` — **CI NOT RUN** — **PR NOT OPEN** — **NOT MERGED** — **NOT ADOPTED**. C03 intercycle **NOT PROVEN**.

Mise à jour statut lignes LIVE remediation C04/C05/C06 (historique) : remplacer « NOT PUSHED / NOT RECETTE redeploy » par « poussé @ `61fe295b` ; RECETTE redeployée ; LIVE 8/8 observé » **sans réécrire les constats avant**.


### 5.4 Proposé — note d’en-tête gaps (sans réécriture historique)

## PROPOSED header-only note on `recette-ml3-rct02-live-corrective-gaps.md` (NOT COMMITTED)

Current (committed in 61fe295b) Nature line still says historically « non publiée sur Git » for the D0 gaps report at authoring time on d646.

Proposed additive note under the existing header block (do NOT rewrite historical Status/constats):

> **Note post-publication (PR readiness 2026-11-07).** Ce rapport gaps a depuis été intégré dans Git sur la branche candidate (`61fe295b` et parents). La mention « non publiée sur Git » ci-dessus reste une qualification **historique** du D0 au moment de la rédaction sur `d646d42a`. Ne pas l’interpréter comme l’état Git courant.


**Effet Git si intégrés :** nouveau SHA **documentaire** ≠ `61fe295b`. Comparer sous-arbre `web/` (doit rester identique) avant PR ; requalifier impacts doc.

---

## 6. Architecture / blast radius (ML3 entier)

- **D5/D6 autorité :** commandes pilotage + décisions humaines ; Nora **ne crée pas** d’autorité ; Pilote seul décideur D6.
- **Migration 007 :** additive / re-runnable depuis 006 ; tables human_decisions, trajectory_revisions, cycles, restrictions, business_commands(+effects), method_applications ; header SQL « DEV lane until promotion gate ».
- **API/UX :** routes pilotage/commands/decisions ; `PilotagePanel` ; conversation turn + recovery thread.
- **Cognition :** intent FR borné + conversation-authority (C01–C08 + LIVE C04/C05/C06 + false-GO retract).
- **Idempotence / lock / revision / transaction :** couverts PG (clientCommandKey, ACK perdu, supersedes, restriction instance).
- **Moteur concurrent :** aucun détecté dans le diff Next.
- **Cookie ENV-01 Reserve A :** collision même-host DEV/RECETTE — mitigation profils ; isolation technique requise avant STABLE.
- **Sécurité :** pas de secret dans le diff ; API key test neutralized ; portfolio 401 sans session.

---

## 7. Tests exécutés ce cycle (locaux ≠ CI)

| Suite | Cible | Résultat | Limite |
|---|---|---|---|
| unit | `npm run test:unit` | **17 files / 112 PASS** | FAKE / fixtures |
| integration PG | `npm run test:integration` (10 files incl. ml3 + migrations-fresh) | **142 PASS** | DB `5433/sfia_next_dev` (+ ephemeral fresh) — **pas RECETTE** |
| lint | `next lint` | PASS | — |
| tsc | `tsc --noEmit` | PASS | — |
| build | `next build` | PASS | `.env.local` DEV |
| e2e | `playwright` `ml3-pilotage.spec.ts` | **7 PASS** (~49s) | STUDIO_E2E / FAKE Nora ; DB e2e — **≠ LIVE Morris** |
| CI GitHub | commit status + check-runs sur `61fe295b` | **NOT RUN** (0) | gate merge ouvert |

**Ne pas simuler CI PASS.**

---

## 8. CI / required gates — plan

Workflow applicable : `.github/workflows/sfia-studio-next-ci.yml`
- `pull_request` → `main` : **toujours** déclenché (pas de paths filter top-level).
- Jobs : `detect` → `validate` (si Next changed) → `required_gate` nom stable **« SFIA Studio Next Required Gate »**.
- Migrations CI : 001→006 historiquement dans le header ; **vérifier en run réelle** la prise en charge 007 (réserve opérationnelle).
- Nora CI : `STUDIO_E2E=1` + `OPENAI_API_KEY` neutralized — FAKE only.

| Action | Effet sur readiness |
|---|---|
| Ouvrir PR (GO distinct) | déclenche CI ; **autorise la PR elle-même** sans CI préalable |
| Merge | **bloqué conceptuellement** tant que required_gate non vert **et** GO Morris merge distinct |
| Absence CI actuelle | **n’empêche pas** la préparation/ouverture PR ; empêche de déclarer intégration vérifiée |

---

## 9. Réserves explicites (contract §5.C)

1. **CI NOT RUN** sur SHA candidat.
2. **C03** guidance intercycles non prouvée LIVE.
3. **ENV-01 Reserve A** cookies same-host.
4. Dump FC : restauration **non prouvée**.
5. Portée LIVE bornée 8 scénarios — pas R6 / pas ADOPTED.
6. Gaps header « non publiée sur Git » = **KNOWN GAP** historique ; note proposée §5.4.
7. Captures PNG non accessibles Cursor.
8. Smoke login/portfolio ≠ parcours auth complet.

---

## 10. Mini-plan de gates (pour décision Morris)

| # | Gate | Prérequis | Autorisation |
|---|---|---|---|
| a | Intégrer docs locales (LIVE report + appends) | revue pack | GO Morris commit/push **doc** → nouveau SHA doc |
| b | Comparer `web/` SHA doc vs `61fe295b` | après a | Cursor/ChatGPT |
| c | Ouvrir PR → `main` | SHA choisi (recetté ou doc) | **GO PR distinct** |
| d | CI Next required_gate PASS | PR ouverte | observation Actions |
| e | Merge | CI PASS + réserves acceptées | **GO merge distinct** |
| f | STABLE / version | isolation cookie + promotion ENV-01 | hors scope |

---

## 11. Brouillon PR — **NON PUBLIÉ**

**Title :** `feat(next): ML3 pilotage & decisions (RCT-02 LIVE 8/8 @ 61fe295b)`

**Body (draft) :**

```markdown
## Summary
- Deliver ML3 governed pilotage / human decisions (D5/D6) + conversation authority for SFIA Studio Next.
- Includes schema migration `007_ml3_pilotage_decisions` (additive) and Pilotage UX/API.
- LIVE remediation on RECETTE SHA `61fe295b` / build `ZCkIWQ341KK1KOHTD1a5L`: targeted T01–T08 **8/8 PASS** (C04/C05/C06 + false-GO retract).
- 5 commits ahead of `main` @ `7f1f41c3` (0 behind). **CI NOT RUN on tip until this PR.**

## Commits
- 8bf8b5ce feat: deliver governed pilotage and decisions ML3
- ba831b25 feat: integrate governed conversation and recovery
- b9047a48 docs: RCT-02 anomalies restitution
- d646d42a fix: harden Nora conversational authority
- 61fe295b fix: resolve LIVE authority regressions (C04/C05/C06/C01)

## Test plan
- [ ] GitHub Actions `SFIA Studio Next Required Gate` PASS on this PR
- [ ] Reviewer: migration 007 additive; no RECETTE mutation from CI
- [ ] Confirm LIVE evidence pack / D0 report referenced (captures indexed)
- [ ] Accept carried reserves: C03 intercycle NOT PROVEN; ENV-01 cookie Reserve A; dump restore unproven; NO RELEASE
- [ ] Do not claim ADOPTED / STABLE / ML3 CLOSED from this PR alone

## Risks / rollback
- Blast radius: D5/D6 authority paths + PG 007.
- Rollback code: prior RECETTE candidate `d646d42a` preserved; DB restore from dump **not proven**.
- Product version remains `0.0.0-dev`.

## Explicit non-claims
- Not CI PASS until Actions run.
- Not LIVE ACCEPTED GLOBAL / R6 complete.
- Not STABLE / not versioned release.
```

---

## 12. Décisions Morris demandées (a–f)

**(a)** Incorporer docs locales (§5) → SHA documentaire ?
**(b)** Plan CI = ouverture PR sous GO.
**(c)** Ouvrir PR maintenant vs après docs ?
**(d)** Requalifier tout nouveau SHA via diff `web/`.
**(e)** Critères merge : required_gate PASS + acceptation réserves.
**(f)** Réserves reportées §9.

---

## 13. Non-revendications

Pas de : `ML3 CLOSED` · `MERGED` · `LIVE ACCEPTED GLOBAL` · `STABLE` · `ADOPTED` · `CI PASS`.

---

## 14. Couverture Review Pack

| Élément §8 contrat | Couvert |
|---|---|
| Date/fuseau | oui |
| Git Truth initial/final | oui |
| Sources / blobs | oui |
| Matrice T01–T08 | oui |
| Candidat SHA/build/DB | oui |
| Docs créés intégraux | oui (§5.1) |
| Docs proposés complets | oui (§5.2–5.4) |
| Diff 42 fichiers | name-status oui |
| Architecture / tests | oui |
| CI observée | NOT RUN |
| Réserves / mini-plan | oui |
| Titre/body PR draft | oui |
| Verdict | oui |

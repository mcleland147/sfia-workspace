# Review Pack — OPS1 Backlog PR Readiness

## Métadonnées cycle

| Champ | Valeur |
|---|---|
| Date / heure / fuseau | 2026-07-20 20:52:00 CEST |
| Repository | `mcleland147/sfia-workspace` |
| Branche projet | `backlog/sfia-studio-ops1` |
| HEAD initial | `9bfee8ea113386ee2603093fbec366eda9161c19` |
| HEAD projet (commit validation) | `4032c25145b92d4f5389af0d2f8cc4d27bd2ab8e` |
| Base / merge-base (`origin/main`) | `9bfee8ea113386ee2603093fbec366eda9161c19` |
| Profil | Standard |
| Typologie | DOC / PRODUIT / BACKLOG / PR READINESS |
| Cycles | 5 — Backlog / user stories — validation ; 13 — PR readiness |
| PR | #244 — https://github.com/mcleland147/sfia-workspace/pull/244 |
| État PR | Draft / OPEN / non mergée |
| Verdict attendu | `OPS1 BACKLOG PR DRAFT CREATED — READY FOR CHATGPT PR REVIEW` |

## Décisions Morris consommées

1. `GO G-OPS1-BACKLOG-VAL — VALIDATION AVEC RÉSERVES` — valide 17 epics / 41 stories / 20 décisions / mapping I1–I7 / priorités et tailles comme modèle de backlog (pas engagement sprint / delivery / calendaire / implémentation).
2. `GO COMMIT PUSH PR DRAFT — OPS1 BACKLOG` — autorise uniquement commit documentaire des 4 fichiers, push sans force de `backlog/sfia-studio-ops1`, PR Draft vers `main`, handoff L3 borné. **N’autorise pas** merge, Ready for review, suppression de branche, modification de `main`, delivery, code, DevOps, live, MVP, production.

## Sources consultées

- `projects/sfia-studio/60-ops1-backlog-framing-and-prioritization.md`
- `projects/sfia-studio/61-ops1-epics-stories-and-acceptance-criteria.md`
- `projects/sfia-studio/62-ops1-backlog-decision-pack.md`
- `projects/sfia-studio/README.md`
- Handoff distant précédent (`sfia/review-handoff`) : tip `4bf6ee524302c7a14933889d1ac6025e5b6ed5bd` — `OPS1 BACKLOG REVIEW RESERVATIONS TREATED — READY FOR CHATGPT RE-REVIEW`
- Contrôle cohérence (lecture, non modifié) : `44`, `47`, `50`, `53`, `56`, `59`
- Template : `prompts/templates/sfia-cycle-execution-template.md` (depuis `main`)

## Fichiers créés et modifiés

| Statut | Fichier |
|---|---|
| A (créé) | `projects/sfia-studio/60-ops1-backlog-framing-and-prioritization.md` |
| A (créé) | `projects/sfia-studio/61-ops1-epics-stories-and-acceptance-criteria.md` |
| A (créé) | `projects/sfia-studio/62-ops1-backlog-decision-pack.md` |
| M (modifié) | `projects/sfia-studio/README.md` |

Exactement **4** fichiers projet. Aucun fichier protégé `01*`–`59*`, `app/**`, `harness/**`, `method/**`, `prompts/**`.

## Volumes vérifiés

- Epics : **17**
- Stories : **41**
- Décisions : **20**
- Statuts story : `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` (homogène)
- Décisions Morris : `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` (20/20)
- `AWAITING G-OPS1-BACKLOG-VAL` résiduel dans statuts : **0**
- `METRICS_INCOMPLETE` : conservé
- Claims READY FOR DELIVERY / READY FOR IMPLEMENTATION : **0**

## Liste des 17 epics


- OPS1-E01 — Session persistante et journal
- OPS1-E02 — Conversation GPT réelle multi-tours
- OPS1-E03 — Qualification et proposition d’action
- OPS1-E04 — Gate Morris explicite
- OPS1-E05 — Contrat canonique, hash et HEAD
- OPS1-E06 — Chemins, allowlist et symlinks
- OPS1-E07 — Worktree et runner borné
- OPS1-E08 — Stockage SQLite et artefacts append-only
- OPS1-E09 — Idempotence, locks, tentatives, recovery
- OPS1-E10 — Rapport, preuves et REPORT_INCOMPLETE
- OPS1-E11 — Reprise conversationnelle post-exécution
- OPS1-E12 — UX et états visibles
- OPS1-E13 — Observabilité et audit
- OPS1-E14 — Sécurité locale
- OPS1-E15 — Contrôles locaux et préparation DevOps
- OPS1-E16 — FinOps et réserves numériques
- OPS1-E17 — Démonstration opératoire I7

## Liste des 41 stories

- OPS1-US-E01-01 — Créer CycleSession OPEN
- OPS1-US-E01-02 — Journaliser tours conversationnels
- OPS1-US-E01-03 — Clôturer session CLOSED immuable
- OPS1-US-E02-01 — Échanger multi-tours GPT réel
- OPS1-US-E02-02 — Interdire exécution depuis le chat
- OPS1-US-E02-03 — Mode fixture pour tests non-live
- OPS1-US-E03-01 — Proposer action structurée séparée
- OPS1-US-E03-02 — Support ACTION_NOT_REQUIRED
- OPS1-US-E04-01 — Enregistrer GO Morris sur candidat
- OPS1-US-E04-02 — Enregistrer NO-GO et bloquer exec
- OPS1-US-E05-01 — Canonicaliser et hasher le contrat
- OPS1-US-E05-02 — Revalider HEAD avant exécution
- OPS1-US-E05-03 — Inclure gateDecision dans hash
- OPS1-US-E06-01 — Valider paths realpath + allowlist
- OPS1-US-E06-02 — Protéger 03 par défaut
- OPS1-US-E06-03 — Refuser symlink sortant
- OPS1-US-E07-01 — Créer worktree d’exécution
- OPS1-US-E07-02 — Appliquer contrôles runner
- OPS1-US-E07-03 — Documenter limite non-sandbox OS
- OPS1-US-E08-01 — Persister états dans SQLite
- OPS1-US-E08-02 — Écrire artefacts append-only
- OPS1-US-E09-01 — Créer executionAttemptId distinct
- OPS1-US-E09-02 — Lock une tentative active
- OPS1-US-E09-03 — Recovery crash sans resume opaque
- OPS1-US-E09-04 — Interdire retry auto REPORT_INCOMPLETE
- OPS1-US-E10-01 — Générer rapport consolidé + par fichier
- OPS1-US-E10-02 — Collecter preuves négatives remote
- OPS1-US-E11-01 — Reprendre chat après rapport
- OPS1-US-E11-02 — Continuation liée post-CLOSED
- OPS1-US-E12-01 — Afficher états desktop chat/action/gate
- OPS1-US-E12-02 — Afficher états exec/rapport/clôture
- OPS1-US-E12-03 — Réserver responsive tablette/mobile
- OPS1-US-E13-01 — Émettre événements corrélés sans secrets
- OPS1-US-E13-02 — Mesurer durée et fichiers touchés
- OPS1-US-E14-01 — Scan secrets pré/post exécution
- OPS1-US-E14-02 — Wrapper refus remote Git
- OPS1-US-E15-01 — Checklist contrôles locaux socle
- OPS1-US-E15-02 — Préparer stories CI PR (hors ouverture)
- OPS1-US-E16-01 — Afficher compteurs tokens/coût placeholders
- OPS1-US-E17-01 — Checklist démonstration I7
- OPS1-US-E17-02 — Interdire claims MVP/production en démo

## Liste des 20 décisions et statuts

- `OPS1-BACKLOG-CAND-01 — Structure des epics` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-02 — Ordre d’incréments` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-03 — Périmètre P0/P1/P2` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-04 — Séquencement I1–I7` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-05 — Séparation backlog / DevOps / delivery` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-06 — Stratégie de dépendances` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-07 — Definition of Ready` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-08 — Definition of Done` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-09 — Modèle de priorité` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-10 — Modèle de taille relative` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-11 — Couverture sécurité` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-12 — Couverture UX` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-13 — Couverture observabilité` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-14 — Couverture QA` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-15 — Traitement FD-CAND-15` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-16 — Traitement UX-R01…R04` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-17 — Critère d’ouverture premier cycle delivery` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-18 — Critère d’ouverture cycle Intégration/DevOps` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-19 — Éléments hors OPS1` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`
- `OPS1-BACKLOG-CAND-20 — Statut initial des stories` → `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`

## Mapping I1–I7

Conservé tel que documenté dans `60` / `61` (inchangé par la validation ; modèle de backlog validé avec réserves, non plan de delivery).

## Réserves maintenues (aucune levée)


- FD-CAND-15 — seuils FinOps numériques
- UX-R01 — couverture tablette/mobile après desktop
- UX-R02 — microcopies avant delivery
- UX-R03 — design system avant industrialisation
- UX-R04 — réserve transverse
- Stack et fournisseur non finalisés
- Worktree = isolation Git, pas sandbox OS forte
- CI PR = cycle Intégration / DevOps distinct
- GPT live sous gate distinct
- Cursor live sous gate distinct
- Delivery sous décision Morris séparée
- MVP et production fermés

## Contrôles exécutés

- Truth check local pré-modif : HEAD/base/merge-base = `9bfee8ea113386ee2603093fbec366eda9161c19` ; staged vide ; 60/61/62 untracked + README modifié ; handoff tip `4bf6ee5` conforme au treat-reservations.
- Post-validation : 17/41/20 ; 0 AWAITING décisionnel ; stories validées avec réserves ; réserves visibles ; anti-claims.
- `git diff --cached --name-only` = exactement 4 chemins autorisés.
- `git diff --check` clean.
- Commit projet : `4032c25145b92d4f5389af0d2f8cc4d27bd2ab8e` — `docs: validate OPS1 backlog`.
- Push sans force : `origin/backlog/sfia-studio-ops1` = `4032c25145b92d4f5389af0d2f8cc4d27bd2ab8e`.
- PR Draft #244 créée, base `main`, head `backlog/sfia-studio-ops1`, état Draft/OPEN, non mergée.
- Aucun artefact `.tmp-sfia-review/**` commité.

## Commit / push / PR

| Élément | Valeur |
|---|---|
| Commit projet | `4032c25145b92d4f5389af0d2f8cc4d27bd2ab8e` |
| Message | `docs: validate OPS1 backlog` |
| SHA distant branche | `4032c25145b92d4f5389af0d2f8cc4d27bd2ab8e` |
| PR | #244 |
| URL | https://github.com/mcleland147/sfia-workspace/pull/244 |
| Titre | `docs: validate OPS1 backlog` |
| Base | `main` |
| Head | `backlog/sfia-studio-ops1` |
| État | Draft / OPEN |
| Merge | **aucun** |

## Risques

- Confusion validation ≠ autorisation d’implémentation / sprint / calendaire.
- Levée implicite des réserves FinOps/UX/stack/live.
- Merge ou Ready for review sans GO Morris distinct.

## Rollback

- Abandonner/fermer la PR Draft sans merge ; `main` inchangé.

## Absence de merge

Confirmée : PR reste Draft/OPEN ; aucun squash/merge ; delivery/code/DevOps/live/MVP/production fermés.

## Verdict

`OPS1 BACKLOG PR DRAFT CREATED — READY FOR CHATGPT PR REVIEW`

---

# Contenu complet — 60-ops1-backlog-framing-and-prioritization.md


# SFIA Studio — Backlog OPS1 — cadrage et priorisation (candidat)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `60-ops1-backlog-framing-and-prioritization.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Typologie** | DOC / PRODUIT / BACKLOG |
| **Gate consommé** | `GO G-OPS1-BACKLOG — OPEN BACKLOG CYCLE` |
| **Gate validation** | `G-OPS1-BACKLOG-VAL` **consommé** — 2026-07-20 20:52:00 CEST |
| **Décision Morris** | `GO G-OPS1-BACKLOG-VAL — VALIDATION AVEC RÉSERVES` |
| **Statut** | `backlog-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 20:52:00 CEST) |
| **Companions** | [`61`](./61-ops1-epics-stories-and-acceptance-criteria.md) · [`62`](./62-ops1-backlog-decision-pack.md) |
| **Branche** | `backlog/sfia-studio-ops1` |
| **Base** | `origin/main` @ `9bfee8ea113386ee2603093fbec366eda9161c19` |
| **Autorité** | Morris (L0) |

> Backlog OPS1 **validé avec réserves** sous `G-OPS1-BACKLOG-VAL` (2026-07-20 20:52:00 CEST).
> 17 epics · 41 stories · 20 décisions — modèle de priorité/taille **validé avec réserves** (pas un plan de sprint ni une autorisation d’implémentation).
> Il **n’ouvre pas** l’implémentation, le delivery, l’Intégration/DevOps, GPT live, Cursor live, le MVP ni la production.

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

Les priorités constituent le **modèle de backlog validé avec réserves** — pas un engagement de sprint, ni un plan de delivery définitif, ni une estimation calendaire, ni une autorisation d’implémentation.

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

Aucune charge en jours/heures. Les tailles constituent des estimations qualitatives du **modèle validé avec réserves** — pas d’engagement calendaire ni d’autorisation d’implémentation.

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
2. Acteur, besoin, valeur, préconditions explicites — formulation utilisateur en capacité/comportement observable (**pas** un identifiant CAND/Amendement/FD/I# comme besoin principal).
3. Scénario nominal + erreurs / stop conditions.
4. Critères d’acceptation testables (Given/When/Then) couvrant état initial, déclencheur, résultat attendu, comportement négatif/stop et preuve.
5. Preuves attendues listées.
6. Traçabilité vers ≥1 décision/exigence source (les identifiants techniques restent ici, pas dans la formulation principale).
7. Aucune dépendance à une stack non choisie.
8. Réserve éventuelle nommée (FD-CAND-15 / UX-Rx).
9. Statut = `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` (après `G-OPS1-BACKLOG-VAL`).
10. Si la story déclare des métriques obligatoires : pas d’absence silencieuse — état explicite `METRICS_INCOMPLETE` (ou équivalent) + cause + pas de COMPLETED masquant l’absence.

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
3. Toutes décisions `62` validées avec réserves (`G-OPS1-BACKLOG-VAL`).
4. Review pack full + handoff distant vérifié.
5. Aucun claim READY FOR DELIVERY / READY FOR IMPLEMENTATION / COMMITTED FOR SPRINT (validation ≠ autorisation d’implémentation).

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

`OPS1 BACKLOG FRAMING VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — 2026-07-20 20:52:00 CEST`

Companions : [`61`](./61-ops1-epics-stories-and-acceptance-criteria.md) · [`62`](./62-ops1-backlog-decision-pack.md).


---

# Contenu complet — 61-ops1-epics-stories-and-acceptance-criteria.md


# SFIA Studio — Backlog OPS1 — epics, stories et critères d’acceptation (candidat)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `61-ops1-epics-stories-and-acceptance-criteria.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Gate consommé** | `GO G-OPS1-BACKLOG — OPEN BACKLOG CYCLE` |
| **Gate validation** | `G-OPS1-BACKLOG-VAL` **consommé** — 2026-07-20 20:52:00 CEST |
| **Statut** | `backlog-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 20:52:00 CEST) |
| **Companions** | [`60`](./60-ops1-backlog-framing-and-prioritization.md) · [`62`](./62-ops1-backlog-decision-pack.md) |
| **Branche** | `backlog/sfia-studio-ops1` |
| **Base** | `origin/main` @ `9bfee8ea113386ee2603093fbec366eda9161c19` |
| **Epics** | 17 |
| **Stories** | 41 |

> Statut collectif des stories : `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` — Morris — 2026-07-20 20:52:00 CEST.
> Aucune story n’est READY FOR DELIVERY / IMPLEMENTATION / COMMITTED FOR SPRINT / LIVE READY.
> Validation avec réserves : FD-CAND-15 · UX-R01…R04 · stack/fournisseur non finalisés · live/DevOps/delivery fermés.

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
| **Formulation** | En tant que Morris, je veux ouvrir une session OPS1 traçable, afin de corréler tous les échanges et décisions d’un même parcours. |
| **Acteur** | Morris/UI |
| **Besoin** | Ouvrir une session OPS1 traçable |
| **Valeur** | Corréler échanges et décisions d’un parcours |
| **Préconditions** | Projet OPS1 sélectionnable |
| **Scénario nominal** | Morris démarre une session |
| **Erreurs / stop** | Échec store → STOP |
| **Critères d’acceptation** | Given l’UI idle sans session active ; When Morris crée une session OPS1 ; Then un sessionId unique est créé avec statut OPEN et un journal initialisé ; And aucune exécution n’est possible avant GO ; Given un échec de persistance store ; When la création est tentée ; Then la session n’est pas considérée OPEN et un STOP/FAILED est journalisé. |
| **Preuves attendues** | session.json + event SESSION_OPENED |
| **Dépendances** | — |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E01-02 — Journaliser tours conversationnels

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que système OPS1, je veux persister chaque tour de conversation, afin de permettre une reprise multi-tours fidèle au contexte. |
| **Acteur** | Système |
| **Besoin** | Persister chaque tour de conversation |
| **Valeur** | Reprise multi-tours fidèle au contexte |
| **Préconditions** | Session OPEN |
| **Scénario nominal** | Tour chat ajouté au journal |
| **Erreurs / stop** | Écriture partielle → FAILED journal |
| **Critères d’acceptation** | Given une session OPEN ; When un message est émis ou reçu ; Then un tour append-only est journalisé et corrélé au sessionId ; And l’ordre des tours est stable ; Given une écriture partielle ; When la persistance échoue ; Then le tour n’est pas marqué complet et un état d’erreur journal est produit. |
| **Preuves attendues** | journal entries + ids |
| **Dépendances** | E01-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E01-03 — Clôturer session CLOSED immuable

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux clôturer explicitement une session, afin de figer l’historique et empêcher toute mutation ultérieure. |
| **Acteur** | Morris |
| **Besoin** | Clôturer explicitement une session |
| **Valeur** | Figer l’historique et empêcher les mutations |
| **Préconditions** | Session OPEN |
| **Scénario nominal** | Morris CLOSE |
| **Erreurs / stop** | Tentative mutation CLOSED → refus |
| **Critères d’acceptation** | Given une session OPEN ; When Morris exécute CLOSE ; Then le statut devient CLOSED et les artefacts de session sont immuables ; Given une session CLOSED ; When une mutation est tentée ; Then elle est refusée avec preuve négative. |
| **Preuves attendues** | event SESSION_CLOSED |
| **Dépendances** | E01-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que Morris, je veux dialoguer librement en multi-tours avec GPT réel, afin d’explorer un sujet sans scénario figé ni exécution implicite. |
| **Acteur** | Morris |
| **Besoin** | Dialoguer librement en multi-tours avec GPT réel |
| **Valeur** | Explorer un sujet sans scénario figé ni exécution implicite |
| **Préconditions** | Gate live consommé ; session OPEN |
| **Scénario nominal** | ≥3 tours non scriptés |
| **Erreurs / stop** | Timeout/provider → état erreur visible |
| **Critères d’acceptation** | Given un gate live consommé et une session OPEN ; When Morris échange ≥3 tours non scriptés ; Then les réponses restent contextuelles et aucune exécution n’est déclenchée ; Given timeout ou erreur fournisseur ; When l’échange échoue ; Then un état d’erreur visible est journalisé sans GO implicite. |
| **Preuves attendues** | transcript + usage counters |
| **Dépendances** | E01 |
| **Réserve** | FD-CAND-15 |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | L |
| **Gate Morris éventuelle** | Gate live |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E02-02 — Interdire exécution depuis le chat

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que système OPS1, je veux empêcher toute exécution depuis le fil de chat, afin de garantir que seule une décision Morris explicite autorise une action. |
| **Acteur** | Système |
| **Besoin** | Empêcher toute exécution depuis le fil de chat |
| **Valeur** | Garantir qu’une action n’est autorisée que par décision Morris |
| **Préconditions** | Session avec chat |
| **Scénario nominal** | Message n’exécute jamais |
| **Erreurs / stop** | Tentative d’outil exec dans chat → bloqué |
| **Critères d’acceptation** | Given un fil de chat actif ; When un message ressemble à une instruction d’exécution ; Then aucune exécution n’est lancée et l’UI indique le chemin gate/action ; Given une tentative d’outil d’exécution dans le chat ; When elle est invoquée ; Then elle est bloquée avec preuve négative. |
| **Preuves attendues** | preuve négative |
| **Dépendances** | E02-01,E04 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E02-03 — Mode fixture pour tests non-live

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que QA, je veux disposer d’un mode conversationnel fixture, afin de tester la persistance et l’UI sans consommer un gate live. |
| **Acteur** | QA |
| **Besoin** | Disposer d’un mode conversationnel fixture |
| **Valeur** | Tester persistance et UI sans gate live |
| **Préconditions** | Config test |
| **Scénario nominal** | Fixture conversationnelle |
| **Erreurs / stop** | Fixture présentée comme live → STOP doc |
| **Critères d’acceptation** | Given le mode test/fixture activé ; When un dialogue est simulé ; Then un flag fixture est visible dans UI et artefacts ; Given un rapport de test ; When il est relu ; Then le mode fixture n’est jamais présenté comme conversation live. |
| **Preuves attendues** | flag fixture in report |
| **Dépendances** | E01 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que Morris, je veux recevoir une proposition d’action structurée hors du fil de chat, afin de l’examiner sans la confondre avec le dialogue. |
| **Acteur** | GPT/UI |
| **Besoin** | Recevoir une proposition d’action structurée hors du fil |
| **Valeur** | Examiner une action sans la confondre avec le dialogue |
| **Préconditions** | Discussion préalable |
| **Scénario nominal** | ActionCandidate dans panneau dédié |
| **Erreurs / stop** | Action seulement dans chat → invalide |
| **Critères d’acceptation** | Given une discussion préalable en session OPEN ; When une action est proposée ; Then un ActionCandidate distinct est créé hors du fil chat ; And le chat ne contient pas de GO ; Given une action proposée uniquement dans le chat ; When elle est détectée ; Then elle est invalidée pour exécution. |
| **Preuves attendues** | action object id |
| **Dépendances** | E02 |
| **Réserve** | UX-R02 |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E03-02 — Support ACTION_NOT_REQUIRED

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux conclure qu’aucune action n’est nécessaire, afin de clôturer ou poursuivre la conversation sans forcer une exécution. |
| **Acteur** | Morris/GPT |
| **Besoin** | Conclure qu’aucune action n’est nécessaire |
| **Valeur** | Poursuivre sans forcer une exécution |
| **Préconditions** | Session chat |
| **Scénario nominal** | Décision pas d’action |
| **Erreurs / stop** | Forcer action → refus UX |
| **Critères d’acceptation** | Given une session de chat ; When Morris ou le flux qualifie ACTION_NOT_REQUIRED ; Then l’état est journalisé et aucune exécution n’est préparée ; Given une pression UI à forcer une action ; When ACTION_NOT_REQUIRED est choisi ; Then l’exécution reste impossible. |
| **Preuves attendues** | event |
| **Dépendances** | E02 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que Morris, je veux enregistrer un GO explicite sur une action candidate, afin d’autoriser l’exécution sous mon autorité L0. |
| **Acteur** | Morris |
| **Besoin** | Enregistrer un GO explicite sur une action candidate |
| **Valeur** | Autoriser l’exécution sous autorité L0 |
| **Préconditions** | ActionCandidate valide |
| **Scénario nominal** | GO journalisé avec motif |
| **Erreurs / stop** | GO sans candidat → refus |
| **Critères d’acceptation** | Given une ActionCandidate valide et journalisée ; When Morris enregistre un GO explicite ; Then une gateDecision horodatée est persistée et liée à l’action ; And aucune exécution ne commence avant cette persistance ; And le rapport expose l’identifiant de la décision ; Given une décision absente ou invalide ; When une exécution est demandée ; Then l’exécution est refusée et une preuve négative est produite. |
| **Preuves attendues** | gateDecision artifact |
| **Dépendances** | E03 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E04-02 — Enregistrer NO-GO et bloquer exec

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux enregistrer un NO-GO explicite, afin de bloquer toute exécution et conserver la preuve du refus. |
| **Acteur** | Morris |
| **Besoin** | Enregistrer un NO-GO explicite |
| **Valeur** | Bloquer l’exécution et conserver la preuve du refus |
| **Préconditions** | ActionCandidate |
| **Scénario nominal** | NO-GO → pas d’exec |
| **Erreurs / stop** | Exec malgré NO-GO → STOP |
| **Critères d’acceptation** | Given une ActionCandidate ; When Morris enregistre NO-GO ; Then aucune exécution n’est lancée et la décision est journalisée ; Given un NO-GO persisté ; When une exécution est retentée ; Then elle est refusée avec preuve négative. |
| **Preuves attendues** | preuve négative |
| **Dépendances** | E03 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que système OPS1, je veux geler un contrat d’exécution et calculer son empreinte, afin de garantir que le périmètre exécuté est exactement celui approuvé. |
| **Acteur** | Système |
| **Besoin** | Geler un contrat d’exécution et calculer son empreinte |
| **Valeur** | Garantir que le périmètre exécuté est celui approuvé |
| **Préconditions** | GO Morris |
| **Scénario nominal** | Hash stable du contrat gelé |
| **Erreurs / stop** | Changement post-hash → invalidation |
| **Critères d’acceptation** | Given un GO Morris ; When le contrat est gelé ; Then un contractHash immuable est produit et stocké ; Given une modification post-hash du contrat ; When une exécution est demandée ; Then le contrat est invalidé et l’exécution refusée. |
| **Preuves attendues** | contract + hash |
| **Dépendances** | E04 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E05-02 — Revalider HEAD avant exécution

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que système OPS1, je veux revalider le HEAD Git avant exécution, afin d’arrêter le parcours si la base a dérivé depuis l’approbation. |
| **Acteur** | Système |
| **Besoin** | Revalider le HEAD Git avant exécution |
| **Valeur** | Arrêter le parcours si la base a dérivé depuis l’approbation |
| **Préconditions** | Contrat gelé |
| **Scénario nominal** | HEAD ≠ base → STOP |
| **Erreurs / stop** | Ignorer drift → interdit |
| **Critères d’acceptation** | Given un contrat gelé avec baseHeadSha ; When le HEAD courant diffère ; Then l’état CONTRACT_INVALIDATED/FAILED est posé et l’exécution n’a pas lieu ; Given un HEAD identique ; When la revalidation réussit ; Then l’exécution peut continuer aux contrôles suivants. |
| **Preuves attendues** | event |
| **Dépendances** | E05-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E05-03 — Inclure gateDecision dans hash

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que système OPS1, je veux inclure la décision de gate dans le contenu haché, afin de lier cryptographiquement l’autorisation Morris au contrat. |
| **Acteur** | Système |
| **Besoin** | Inclure la décision de gate dans le contenu haché |
| **Valeur** | Lier cryptographiquement l’autorisation Morris au contrat |
| **Préconditions** | GO + contrat |
| **Scénario nominal** | Hash couvre gateDecision |
| **Erreurs / stop** | GO altéré → hash mismatch |
| **Critères d’acceptation** | Given un GO et un contrat ; When le hash est calculé ; Then gateDecision fait partie du payload canonique ; Given une altération de la gateDecision ; When le hash est recalculé ; Then il ne correspond plus et l’exécution est refusée. |
| **Preuves attendues** | hash input dump |
| **Dépendances** | E05-01 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que système OPS1, je veux résoudre et contrôler chaque chemin cible, afin de n’autoriser que des fichiers explicitement allowlistés sous la racine du workspace. |
| **Acteur** | Système |
| **Besoin** | Résoudre et contrôler chaque chemin cible |
| **Valeur** | N’autoriser que des fichiers allowlistés sous la racine workspace |
| **Préconditions** | Allowlist 55 |
| **Scénario nominal** | Path hors allowlist refusé |
| **Erreurs / stop** | Wildcard → refus |
| **Critères d’acceptation** | Given un chemin candidat ; When normalisation + realpath sont appliqués ; Then le chemin est accepté seulement s’il reste sous la racine et dans l’allowlist ; Given un wildcard ou chemin ambigu ; When la validation s’exécute ; Then le chemin est refusé avec preuve. |
| **Preuves attendues** | validation log |
| **Dépendances** | E05 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E06-02 — Protéger 03 par défaut

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que système OPS1, je veux protéger par défaut le fichier Campus360 `03`, afin d’empêcher une modification non autorisée d’un artefact sensible. |
| **Acteur** | Système |
| **Besoin** | Protéger par défaut le fichier Campus360 03 |
| **Valeur** | Empêcher une modification non autorisée d’un artefact sensible |
| **Préconditions** | Allowlist |
| **Scénario nominal** | Cible 03 → refus sauf GO explicite futur |
| **Erreurs / stop** | Écriture 03 → STOP |
| **Critères d’acceptation** | Given une allowlist OPS1 ; When une cible pointe vers `03` ; Then l’écriture est refusée par défaut ; And une preuve négative est produite ; Given une demande d’exception non couverte par GO ; When l’exécution est tentée ; Then elle reste bloquée. |
| **Preuves attendues** | preuve négative |
| **Dépendances** | E06-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E06-03 — Refuser symlink sortant

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que système OPS1, je veux refuser les symlinks dont la cible sort du workspace, afin d’empêcher une évasion de périmètre via le système de fichiers. |
| **Acteur** | Système |
| **Besoin** | Refuser les symlinks sortant du workspace |
| **Valeur** | Empêcher une évasion de périmètre via le système de fichiers |
| **Préconditions** | Workspace |
| **Scénario nominal** | Symlink hors racine → refus |
| **Erreurs / stop** | Suivre symlink → interdit |
| **Critères d’acceptation** | Given un symlink dont la cible résolue sort de la racine ; When la validation s’exécute ; Then le chemin est refusé ; Given un symlink interne valide ; When la validation s’exécute ; Then le chemin peut être accepté s’il reste allowlisté. |
| **Preuves attendues** | scan log |
| **Dépendances** | E06-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que système OPS1, je veux préparer un worktree Git dédié pour l’exécution, afin d’isoler les changements du working tree principal sans prétendre à une sandbox OS forte. |
| **Acteur** | Système |
| **Besoin** | Préparer un worktree Git dédié pour l’exécution |
| **Valeur** | Isoler les changements du working tree principal |
| **Préconditions** | baseHeadSha |
| **Scénario nominal** | worktree add dédié |
| **Erreurs / stop** | Contamination working tree principal → STOP |
| **Critères d’acceptation** | Given un GO et un baseHeadSha ; When la préparation s’exécute ; Then un worktree dédié est créé depuis ce HEAD ; And le working tree principal n’est pas contaminé ; Given un échec de création worktree ; When la préparation échoue ; Then l’exécution n’est pas démarrée. |
| **Preuves attendues** | worktree path evidence |
| **Dépendances** | E05 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E07-02 — Appliquer contrôles runner

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que responsable d’exécution OPS1, je veux que le runner applique des contrôles bornés (CWD, environnement, credentials, réseau, remote), afin de limiter les effets de bord d’une exécution locale. |
| **Acteur** | Système |
| **Besoin** | Appliquer des contrôles runner bornés avant exécution |
| **Valeur** | Limiter les effets de bord d’une exécution locale |
| **Préconditions** | Worktree prêt |
| **Scénario nominal** | CWD/env/credentials/réseau/remote contrôlés |
| **Erreurs / stop** | Réseau on par défaut → non-conforme |
| **Critères d’acceptation** | Given un worktree prêt ; When le runner démarre ; Then le CWD est borné, l’env est filtré, les credentials sont absents, le réseau est off par défaut et les commandes remote sont refusées ; Given un contrôle pré-exécution en échec ; When le runner évalue ; Then l’exécution est stoppée avec rapport de précontrôle. |
| **Preuves attendues** | runner precheck report |
| **Dépendances** | E07-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E07-03 — Documenter limite non-sandbox OS

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que QA documentaire, je veux vérifier que les rapports n’affirment pas une isolation OS forte, afin d’éviter une sur-revendication de sécurité. |
| **Acteur** | Docs/QA |
| **Besoin** | Vérifier que les rapports n’affirment pas une isolation OS forte |
| **Valeur** | Éviter une sur-revendication de sécurité |
| **Préconditions** | Tech-arch |
| **Scénario nominal** | Docs/rapports n’affirment pas sandbox forte |
| **Erreurs / stop** | Claim STRONG SANDBOX → STOP review |
| **Critères d’acceptation** | Given un rapport d’exécution ou de revue ; When le wording d’isolation est contrôlé ; Then aucune affirmation de sandbox OS forte n’est présente ; Given un claim interdit détecté ; When la revue s’exécute ; Then le livrable est rejeté. |
| **Preuves attendues** | review checklist |
| **Dépendances** | E07-02 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | XS |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que système OPS1, je veux persister sessions, états, locks et tentatives dans SQLite, afin de disposer d’une source opérationnelle locale distincte de Git. |
| **Acteur** | Système |
| **Besoin** | Persister sessions, états, locks et tentatives dans SQLite |
| **Valeur** | Disposer d’une source opérationnelle locale distincte de Git |
| **Préconditions** | Store local |
| **Scénario nominal** | Sessions/locks/attempts in SQLite |
| **Erreurs / stop** | État seulement fichiers → non-conforme |
| **Critères d’acceptation** | Given le runtime OPS1 ; When un état de session/lock/tentative est persisté ; Then il est écrit dans SQLite ; And Git n’est pas utilisé comme magasin d’état concurrent ; Given une indisponibilité SQLite ; When une persistance est requise ; Then l’opération échoue explicitement. |
| **Preuves attendues** | schema + rows |
| **Dépendances** | E01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E08-02 — Écrire artefacts append-only

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que système OPS1, je veux écrire contrats, rapports et preuves en fichiers append-only, afin de conserver des artefacts immuables exploitables en audit. |
| **Acteur** | Système |
| **Besoin** | Écrire contrats, rapports et preuves en fichiers append-only |
| **Valeur** | Conserver des artefacts immuables exploitables en audit |
| **Préconditions** | Exécution |
| **Scénario nominal** | Contrats/rapports/diffs append-only |
| **Erreurs / stop** | Overwrite preuve → STOP |
| **Critères d’acceptation** | Given une preuve ou un rapport à conserver ; When l’écriture s’exécute ; Then le fichier est append-only/immuable après scellage ; Given une tentative d’overwrite d’une preuve scellée ; When elle est tentée ; Then elle est refusée. |
| **Preuves attendues** | artifact hashes |
| **Dépendances** | E10 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que système OPS1, je veux créer un identifiant unique de tentative d’exécution distinct du hash de contrat, afin de tracer chaque essai sans réécrire le contrat approuvé. |
| **Acteur** | Système |
| **Besoin** | Créer un identifiant unique de tentative distinct du hash de contrat |
| **Valeur** | Tracer chaque essai sans réécrire le contrat approuvé |
| **Préconditions** | contractHash |
| **Scénario nominal** | Nouvel attemptId par tentative |
| **Erreurs / stop** | Réutiliser attemptId → refus |
| **Critères d’acceptation** | Given un contractHash valide ; When une tentative démarre ; Then un executionAttemptId unique est créé et lié au hash ; Given une réutilisation du même attemptId ; When une nouvelle tentative est demandée ; Then elle est refusée. |
| **Preuves attendues** | attempt record |
| **Dépendances** | E05,E08 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E09-02 — Lock une tentative active

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que système OPS1, je veux verrouiller la tentative active d’un contrat, afin d’empêcher deux exécutions concurrentes sur le même périmètre. |
| **Acteur** | Système |
| **Besoin** | Verrouiller la tentative active d’un contrat |
| **Valeur** | Empêcher deux exécutions concurrentes sur le même périmètre |
| **Préconditions** | Attempt |
| **Scénario nominal** | Seconde active → refus |
| **Erreurs / stop** | Double exec → STOP |
| **Critères d’acceptation** | Given une tentative active pour un contractHash ; When une seconde tentative est demandée ; Then le lock refuse et aucune double exécution n’est observée ; Given la fin ou l’échec de la tentative active ; When le lock est libéré selon les règles ; Then une nouvelle tentative n’est possible que sous décision Morris. |
| **Preuves attendues** | lock evidence |
| **Dépendances** | E09-01 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E09-03 — Recovery crash sans resume opaque

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux qu’un crash d’exécution laisse un état lisible nécessitant ma décision, afin d’éviter toute reprise automatique opaque. |
| **Acteur** | Morris/Système |
| **Besoin** | Obtenir un état lisible après crash nécessitant décision Morris |
| **Valeur** | Éviter toute reprise automatique opaque |
| **Préconditions** | Crash mid-exec |
| **Scénario nominal** | État lecture + décision Morris |
| **Erreurs / stop** | Auto-resume → interdit |
| **Critères d’acceptation** | Given un crash en cours d’exécution ; When la récupération s’exécute ; Then l’état est disponible en lecture et aucune reprise auto n’a lieu ; And la poursuite attend une décision Morris explicite ; Given une tentative de resume opaque ; When elle est demandée ; Then elle est refusée. |
| **Preuves attendues** | recovery report |
| **Dépendances** | E09-01 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E09-04 — Interdire retry auto REPORT_INCOMPLETE

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que système OPS1, je veux traiter un rapport incomplet comme un échec explicite, afin d’interdire une complétion silencieuse ou une relance automatique. |
| **Acteur** | Système |
| **Besoin** | Traiter un rapport incomplet comme un échec explicite |
| **Valeur** | Interdire complétion silencieuse ou relance automatique |
| **Préconditions** | Rapport incomplet |
| **Scénario nominal** | Pas COMPLETED ; pas relance auto |
| **Erreurs / stop** | COMPLETED silencieux · relance auto · perte des preuves de l’échec |
| **Critères d’acceptation** | Given des preuves insuffisantes en fin d’exécution ; When la finalisation s’exécute ; Then le statut est REPORT_INCOMPLETE (ou équivalent) et non COMPLETED ; And aucune relance automatique n’est déclenchée ; Given une demande de nouvelle tentative ; When elle survient ; Then elle exige une décision Morris explicite et conserve l’échec précédent. |
| **Preuves attendues** | status evidence |
| **Dépendances** | E10 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que Morris, je veux un rapport consolidé et par fichier couvrant l’allowlist, afin de vérifier ce qui a réellement été tenté ou modifié. |
| **Acteur** | Système |
| **Besoin** | Obtenir un rapport consolidé et par fichier couvrant l’allowlist |
| **Valeur** | Vérifier ce qui a réellement été tenté ou modifié |
| **Préconditions** | Exec ended |
| **Scénario nominal** | Rapport couverture fichiers |
| **Erreurs / stop** | Fichier manquant → incomplete |
| **Critères d’acceptation** | Given une allowlist 1..n et une exécution terminée ; When le rapport est produit ; Then chaque fichier allowlisté a une entrée de couverture ; Given un fichier allowlisté sans couverture ; When la finalisation s’exécute ; Then le statut ne peut pas être COMPLETED et l’incomplétude est explicite. |
| **Preuves attendues** | report artifact |
| **Dépendances** | E07 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E10-02 — Collecter preuves négatives remote

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux une preuve négative d’absence d’effet Git distant, afin de démontrer qu’aucune action remote n’a été réalisée pendant l’exécution. |
| **Acteur** | Système |
| **Besoin** | Obtenir une preuve négative d’absence d’effet Git distant |
| **Valeur** | Démontrer qu’aucune action remote n’a été réalisée |
| **Préconditions** | Exec |
| **Scénario nominal** | Aucune push/fetch write |
| **Erreurs / stop** | Remote observé → FAILED |
| **Critères d’acceptation** | Given une exécution OPS1 ; When l’audit post-exécution s’exécute ; Then aucune push/fetch write/PR/merge n’est observée et une preuve négative est jointe ; Given une commande remote détectée ; When l’audit s’exécute ; Then l’exécution est FAILED et la preuve est conservée. |
| **Preuves attendues** | negative proof |
| **Dépendances** | E07,E14 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que Morris, je veux reprendre la conversation après le rapport, afin d’analyser le résultat sans perdre le contexte de session. |
| **Acteur** | Morris |
| **Besoin** | Reprendre la conversation après le rapport |
| **Valeur** | Analyser le résultat sans perdre le contexte de session |
| **Préconditions** | Rapport disponible |
| **Scénario nominal** | Chat post-exec avec contexte |
| **Erreurs / stop** | Perte contexte → bug |
| **Critères d’acceptation** | Given un rapport disponible ; When Morris reprend le chat ; Then le contexte de session est conservé et aucune exécution n’est relancée implicitement ; Given une perte de contexte ; When la reprise est tentée ; Then l’écart est signalé et n’est pas masqué. |
| **Preuves attendues** | transcript |
| **Dépendances** | E02,E10 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E11-02 — Continuation liée post-CLOSED

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux ouvrir une continuation liée après clôture, afin de reprendre le fil sans rendre mutable une session CLOSED. |
| **Acteur** | Morris |
| **Besoin** | Ouvrir une continuation liée après clôture |
| **Valeur** | Reprendre le fil sans rendre mutable une session CLOSED |
| **Préconditions** | Session CLOSED |
| **Scénario nominal** | new id + parentSessionId |
| **Erreurs / stop** | Mutate CLOSED → refus |
| **Critères d’acceptation** | Given une session CLOSED ; When Morris demande une continuation ; Then une nouvelle session est créée avec parentSessionId et la source reste immuable ; Given une tentative de mutation de la session CLOSED ; When elle est demandée ; Then elle est refusée. |
| **Preuves attendues** | parent link |
| **Dépendances** | E01-03 |
| **Réserve** | UX-R02 |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que Morris, je veux voir chat, action et gate dans des surfaces distinctes, afin de ne jamais confondre dialogue et autorisation. |
| **Acteur** | UI |
| **Besoin** | Voir chat, action et gate dans des surfaces distinctes |
| **Valeur** | Ne jamais confondre dialogue et autorisation |
| **Préconditions** | Desktop 1440 |
| **Scénario nominal** | Panneaux distincts |
| **Erreurs / stop** | GO dans fil → non-conforme |
| **Critères d’acceptation** | Given une session desktop ; When l’UI est affichée ; Then chat, action et gate sont des panneaux/états distincts ; Given un GO proposé dans le fil de chat ; When l’UI est contrôlée ; Then ce pattern est rejeté comme non conforme. |
| **Preuves attendues** | screenshot refs |
| **Dépendances** | E03,E04 |
| **Réserve** | UX-R01 |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E12-02 — Afficher états exec/rapport/clôture

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux visualiser fidèlement les états d’exécution, de rapport et de clôture, afin de décider sur des statuts non trompeurs. |
| **Acteur** | UI |
| **Besoin** | Visualiser fidèlement les états d’exécution, rapport et clôture |
| **Valeur** | Décider sur des statuts non trompeurs |
| **Préconditions** | Exec/rapport |
| **Scénario nominal** | États visibles |
| **Erreurs / stop** | État faux COMPLETED → STOP UI |
| **Critères d’acceptation** | Given une exécution ou un rapport ; When l’UI affiche le statut ; Then il correspond à l’état réel (y compris REPORT_INCOMPLETE) ; Given un statut COMPLETED alors que le rapport est incomplet ; When l’UI est contrôlée ; Then le cas est traité comme non conforme. |
| **Preuves attendues** | UI state log |
| **Dépendances** | E10 |
| **Réserve** | UX-R02 |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E12-03 — Réserver responsive tablette/mobile

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux conserver le responsive tablette/mobile après le desktop, afin de ne pas diluer la preuve OPS1 avant la couverture desktop. |
| **Acteur** | UX |
| **Besoin** | Conserver le responsive tablette/mobile après le desktop |
| **Valeur** | Ne pas diluer la preuve OPS1 avant la couverture desktop |
| **Préconditions** | Desktop OK |
| **Scénario nominal** | Stories responsive OUT/P2 |
| **Erreurs / stop** | Livrer mobile avant desktop → non |
| **Critères d’acceptation** | Given le backlog priorisé ; When les lots UX sont ordonnés ; Then le desktop précède tablette/mobile ; And UX-R01 reste ouverte ; Given une livraison mobile avant desktop ; When la revue backlog s’exécute ; Then elle est refusée. |
| **Preuves attendues** | prio note |
| **Dépendances** | E12-01 |
| **Réserve** | UX-R01 |
| **Priorité candidate** | P2 |
| **Taille relative candidate** | L |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que système OPS1, je veux émettre des événements d’audit corrélés sans secrets, afin de reconstituer le parcours sans risque de fuite. |
| **Acteur** | Système |
| **Besoin** | Émettre des événements d’audit corrélés sans secrets |
| **Valeur** | Reconstituer le parcours sans risque de fuite |
| **Préconditions** | Runtime |
| **Scénario nominal** | Events ids+actor+status |
| **Erreurs / stop** | Secret in log → STOP |
| **Critères d’acceptation** | Given un événement runtime ; When il est émis ; Then il contient ids corrélés, acteur, statut et horodatage sans secret ; Given un champ secret détecté ; When l’émission est contrôlée ; Then l’événement est rejeté ou redacted et un STOP/FAILED de conformité est journalisé. |
| **Preuves attendues** | event sample redacted |
| **Dépendances** | E08 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E13-02 — Mesurer durée et fichiers touchés

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que Morris, je veux disposer de métriques minimales d’exécution (durée et fichiers touchés), afin d’évaluer le déroulement sans inventer une stack d’observabilité. |
| **Acteur** | Système |
| **Besoin** | Disposer de métriques minimales d’exécution (durée et fichiers touchés) |
| **Valeur** | Évaluer le déroulement sans inventer une stack d’observabilité |
| **Préconditions** | Exec |
| **Scénario nominal** | Durée + count fichiers |
| **Erreurs / stop** | Métrique obligatoire absente masquée · statut COMPLETED malgré METRICS_INCOMPLETE · relance automatique |
| **Critères d’acceptation** | Given une exécution terminée ; When le rapport/audit est produit ; Then la durée d’exécution et le nombre de fichiers touchés sont présents ; Given une métrique obligatoire non produisible ; When la finalisation s’exécute ; Then l’état explicite METRICS_INCOMPLETE est posé, les métriques absentes et leur cause sont listées, aucun statut COMPLETED/succès ne masque l’absence, et aucune relance automatique n’est déclenchée ; And la poursuite éventuelle reste une décision Morris. |
| **Preuves attendues** | metrics |
| **Dépendances** | E10 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | XS |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que système OPS1, je veux scanner les secrets avant et après exécution, afin d’arrêter le parcours dès qu’une fuite potentielle est détectée. |
| **Acteur** | Système |
| **Besoin** | Scanner les secrets avant et après exécution |
| **Valeur** | Arrêter le parcours dès qu’une fuite potentielle est détectée |
| **Préconditions** | Worktree |
| **Scénario nominal** | Scan fail → STOP |
| **Erreurs / stop** | Secret commit → FAILED |
| **Critères d’acceptation** | Given un worktree d’exécution ; When le scan pré/post s’exécute ; Then un rapport de scan est produit ; Given un secret détecté ; When le scan échoue ; Then l’exécution est STOP/FAILED et aucune poursuite silencieuse n’a lieu. |
| **Preuves attendues** | scan report |
| **Dépendances** | E07 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E14-02 — Wrapper refus remote Git

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que responsable d’exécution OPS1, je veux que le runner bloque toute commande Git distante, afin d’empêcher qu’une exécution locale déclenche un effet distant non autorisé. |
| **Acteur** | Système |
| **Besoin** | Bloquer toute commande Git distante dans le runner |
| **Valeur** | Empêcher qu’une exécution locale déclenche un effet distant non autorisé |
| **Préconditions** | Runner |
| **Scénario nominal** | push/fetch write refusés |
| **Erreurs / stop** | Remote success → non-conforme |
| **Critères d’acceptation** | Given le runner OPS1 ; When une commande push/fetch write/PR/merge est invoquée ; Then elle est refusée par wrapper et journalisée ; Given une tentative de contournement ; When elle est détectée ; Then l’exécution est FAILED avec preuve. |
| **Preuves attendues** | deny log |
| **Dépendances** | E07 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que QA, je veux exécuter une checklist déterministe de contrôles locaux, afin de vérifier qu’un futur lot respecte les garde-fous OPS1 avant toute décision de delivery. |
| **Acteur** | QA/Dev |
| **Besoin** | Exécuter une checklist déterministe de contrôles locaux |
| **Valeur** | Vérifier les garde-fous OPS1 avant toute décision de delivery |
| **Préconditions** | Contrat/hash/HEAD/allowlist/paths/symlinks/secrets/diff-check/rapport |
| **Scénario nominal** | Checklist documentée exécutable localement |
| **Erreurs / stop** | CI PR présentée comme faite → non |
| **Critères d’acceptation** | Given un lot candidat ; When la checklist locale s’exécute ; Then contrat/hash/HEAD/allowlist/paths/symlinks/secrets/diff-check/rapport sont évalués avec résultat explicite ; Given un contrôle rouge ; When la checklist se termine ; Then le lot n’est pas présenté comme prêt delivery ; And aucune CI PR n’est affirmée comme déjà réalisée. |
| **Preuves attendues** | checklist results |
| **Dépendances** | E05–E10 |
| **Réserve** | — |
| **Priorité candidate** | P1 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E15-02 — Préparer stories CI PR (hors ouverture)

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que documentariste OPS1, je veux préparer des stories CI PR sous gate DevOps distinct, afin de ne pas ouvrir l’intégration dans le cycle backlog courant. |
| **Acteur** | Docs |
| **Besoin** | Préparer des stories CI PR sous gate DevOps distinct |
| **Valeur** | Ne pas ouvrir l’intégration dans le cycle backlog courant |
| **Préconditions** | Backlog |
| **Scénario nominal** | Stories CI PR marquées gate DevOps / OUT delivery |
| **Erreurs / stop** | Ouvrir CI delivery maintenant → STOP |
| **Critères d’acceptation** | Given le backlog OPS1 ; When les items CI PR sont inspectés ; Then ils sont explicitement gated GO DevOps / hors delivery courant ; Given une tentative d’ouvrir CI delivery maintenant ; When la revue s’exécute ; Then elle est refusée. |
| **Preuves attendues** | E15 mapping |
| **Dépendances** | — |
| **Réserve** | — |
| **Priorité candidate** | P2 |
| **Taille relative candidate** | M |
| **Gate Morris éventuelle** | GO DevOps |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que Morris, je veux visualiser séparément les volumes d’usage conversationnel et d’exécution, afin d’évaluer les coûts sans inventer de seuil FinOps définitif. |
| **Acteur** | UI/FinOps |
| **Besoin** | Visualiser séparément les volumes d’usage conversationnel et d’exécution |
| **Valeur** | Évaluer les coûts sans inventer de seuil FinOps définitif |
| **Préconditions** | Chat/exec |
| **Scénario nominal** | Placeholders numériques non normatifs |
| **Erreurs / stop** | Seuil hardcodé définitif → STOP |
| **Critères d’acceptation** | Given des compteurs d’usage ; When l’UI FinOps s’affiche ; Then des placeholders non normatifs sont visibles avec mention FD-CAND-15 OPEN ; Given un seuil numérique définitif hardcodé ; When la revue s’exécute ; Then il est rejeté tant que FD-CAND-15 n’est pas arbitrée. |
| **Preuves attendues** | UI + note FD-CAND-15 |
| **Dépendances** | E02 |
| **Réserve** | FD-CAND-15 |
| **Priorité candidate** | P2 |
| **Taille relative candidate** | S |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |



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
| **Formulation** | En tant que Morris, je veux dérouler une démonstration opératoire bout-en-bout, afin de prouver le parcours OPS1 gouverné sans la confondre avec un MVP. |
| **Acteur** | Morris/QA |
| **Besoin** | Dérouler une démonstration opératoire bout-en-bout |
| **Valeur** | Prouver le parcours OPS1 gouverné sans la confondre avec un MVP |
| **Préconditions** | Lots P0/P1 + gate live |
| **Scénario nominal** | Parcours bout-en-bout + PN remote |
| **Erreurs / stop** | Démo partielle = preuve → interdit |
| **Critères d’acceptation** | Given lots P0/P1 prêts et gate live consommé ; When la checklist I7 s’exécute ; Then le parcours chat→action→gate→exec→rapport→preuves négatives remote est démontré et signé Morris ; Given une démo partielle ; When elle est présentée comme preuve complète ; Then elle est refusée. |
| **Preuves attendues** | I7 evidence pack |
| **Dépendances** | E01–E14 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | L |
| **Gate Morris éventuelle** | Gate live + GO démo |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |

### OPS1-US-E17-02 — Interdire claims MVP/production en démo

| Champ | Contenu |
|-------|---------|
| **Formulation** | En tant que reviewer OPS1, je veux que les rapports de démonstration excluent les claims MVP/production, afin de préserver le statut POC du studio. |
| **Acteur** | Docs |
| **Besoin** | Exclure les claims MVP/production des rapports de démonstration |
| **Valeur** | Préserver le statut POC du studio |
| **Préconditions** | I7 |
| **Scénario nominal** | Rapports sans MVP/PROD READY |
| **Erreurs / stop** | Claim MVP → STOP review |
| **Critères d’acceptation** | Given un rapport de démo I7 ; When la revue anti-claims s’exécute ; Then aucun claim MVP DEFINED / PRODUCTION READY / LIVE READY n’est présent ; Given un claim interdit ; When il est détecté ; Then le rapport est rejeté. |
| **Preuves attendues** | review sign-off |
| **Dépendances** | E17-01 |
| **Réserve** | — |
| **Priorité candidate** | P0 |
| **Taille relative candidate** | XS |
| **Gate Morris éventuelle** | — |
| **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |


---

## Anti-claims

Ce document n’affirme pas : READY FOR DELIVERY · READY FOR IMPLEMENTATION · APPROVED · VALIDATED · COMMITTED FOR SPRINT · STACK FINALIZED · MVP DEFINED · LIVE READY · PRODUCTION READY.

## Verdict

`OPS1 BACKLOG EPICS/STORIES VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — 2026-07-20 20:52:00 CEST`


---

# Contenu complet — 62-ops1-backlog-decision-pack.md


# SFIA Studio — Backlog OPS1 — decision pack (candidats)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `62-ops1-backlog-decision-pack.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Gate consommé** | `GO G-OPS1-BACKLOG — OPEN BACKLOG CYCLE` |
| **Gate validation** | `G-OPS1-BACKLOG-VAL` **consommé** — 2026-07-20 20:52:00 CEST |
| **Statut** | `backlog-decisions-validated-with-reservations` — **20 validées avec réserves** (2026-07-20 20:52:00 CEST) |
| **Décisions** | `OPS1-BACKLOG-CAND-01`…`20` |
| **Companions** | [`60`](./60-ops1-backlog-framing-and-prioritization.md) · [`61`](./61-ops1-epics-stories-and-acceptance-criteria.md) |
| **Branche** | `backlog/sfia-studio-ops1` |
| **Base** | `origin/main` @ `9bfee8ea113386ee2603093fbec366eda9161c19` |

> Toutes les décisions : `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST`.
> 20 validées avec réserves · 0 AWAITING · aucune ouverture automatique du cycle suivant.

---

## Synthèse

| Champ | Valeur |
|-------|--------|
| Nombre de candidats | 20 |
| Statut collectif | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |
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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

## OPS1-BACKLOG-CAND-13 — Couverture observabilité

| Champ | Contenu |
|-------|---------|
| **Sujet** | Observabilité |
| **Proposition** | E13 P1 événements corrélés sans secrets + métriques minimales obligatoires (durée, fichiers touchés) ; absence ⇒ `METRICS_INCOMPLETE` explicite (pas d’absence silencieuse) ; pas d’APM complet. |
| **Alternatives** | APM immédiat. |
| **Justification** | Proportionné OPS1. |
| **Impacts** | — |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

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
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

## OPS1-BACKLOG-CAND-20 — Statut initial des stories

| Champ | Contenu |
|-------|---------|
| **Sujet** | Statut stories |
| **Proposition** | Toutes stories portent le statut `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` après validation Morris du pack ; ce statut n’ouvre pas delivery. |
| **Alternatives** | Marquer P0 comme APPROVED. |
| **Justification** | Évite fausse validation. |
| **Impacts** | — |
| **Risques** | — |
| **Dette** | — |
| **Réserve** | — |
| **Recommandation** | Proposition retenue. |
| **Décision Morris** | `VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — Morris — 2026-07-20 20:52:00 CEST` |

---

## Anti-claims

Pas de : BACKLOG VALIDATED · READY FOR DELIVERY · READY FOR IMPLEMENTATION · STACK FINALIZED · MVP DEFINED · LIVE READY · PRODUCTION READY · FULL CI IMPLEMENTED.

---

## Verdict

`OPS1 BACKLOG DECISION PACK VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL — 2026-07-20 20:52:00 CEST`

20 décisions validées avec réserves · 0 AWAITING · `2026-07-20 20:52:00 CEST`.


---

# Diff complet utile — README.md (commit projet)

```diff

commit 4032c25145b92d4f5389af0d2f8cc4d27bd2ab8e
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Mon Jul 20 20:53:09 2026 +0200

    docs: validate OPS1 backlog
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 47a6810..d1b4ad6 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,7 +4,7 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-ops1-framing-validated-with-reservations` — A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44` intégrés sur `main` via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235), squash `b686eb1`) ; cleanup branche documentaire effectué ; **POC maintenu** ; conception / live / backlog / delivery / MVP / production **fermés** |
+| **Statut** | `poc-ops1-framing-validated-with-reservations` — A–E **CLOSED_WITH_RESERVATIONS** ; cadrage OPS1 **VALIDATED WITH RESERVATIONS** (`41`–`44` intégrés sur `main` via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235), squash `b686eb1`) ; cleanup branche documentaire effectué ; **POC maintenu** ; backlog OPS1 **validé avec réserves** (`60`–`62`) ; live / delivery / code / DevOps / MVP / production **fermés** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
 | **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
@@ -21,7 +21,7 @@
 | **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
 | **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
 | **POC** | **Non lancé** (pas d’industrialisation / daemon) |
-| **Prochaine décision** | Choix Morris : publication handoff / PR readiness / backlog — **non ouverts automatiquement** ; tech-arch OPS1 **validée avec amendements** (`G-OPS1-TECH-ARCH-VAL` consommé) |
+| **Prochaine décision** | Choix Morris : revue PR / merge éventuel / GO delivery ou DevOps — **non automatiques** ; backlog OPS1 **validé avec réserves** |
 
 ---
 
@@ -369,11 +369,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 ## 8. Prochaine décision
 
 1. Scénario OPS1 **validé avec amendements** — docs [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md).
-2. Architecture technique OPS1 — docs [`57`](./57-ops1-technical-architecture.md)–[`59`](./59-ops1-technical-architecture-decision-pack.md) **validés avec amendements** · `GO G-OPS1-TECH-ARCH-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 19:17:11 CEST`.
-3. Backlog / delivery / live GPT-Cursor / MVP — **FERMÉS** (non ouverts automatiquement).
-4. Réserves restantes : FD-CAND-15 · UX-R01…R04 · live · FinOps numériques ; worktree ≠ sandbox OS forte ; CI PR = cycle DevOps distinct.
+2. Architecture technique OPS1 — docs [`57`](./57-ops1-technical-architecture.md)–[`59`](./59-ops1-technical-architecture-decision-pack.md) **validés avec amendements**.
+3. Backlog OPS1 — docs [`60`](./60-ops1-backlog-framing-and-prioritization.md)–[`62`](./62-ops1-backlog-decision-pack.md) **validés avec réserves** · `G-OPS1-BACKLOG-VAL` consommé (2026-07-20 20:52:00 CEST) · 17 epics / 41 stories / 20 décisions · corrections de revue intégrées.
+4. Delivery / code / Intégration-DevOps / live GPT-Cursor / MVP / production — **FERMÉS** (GO Morris distincts requis ; non ouverts automatiquement).
+5. Réserves restantes : FD-CAND-15 · UX-R01…R04 · stack/fournisseur non finalisés · worktree ≠ sandbox OS forte · CI PR = cycle DevOps distinct · gates live distincts.
 
-**Verdict documentaire courant :** `SFIA STUDIO OPS1 TECHNICAL ARCHITECTURE VALIDATED WITH AMENDMENTS`
+**Verdict documentaire courant :** `SFIA STUDIO OPS1 BACKLOG VALIDATED WITH RESERVATIONS`
 
 
 ---
@@ -390,6 +391,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | UX/UI OPS1 | Docs `51`–`53` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-UX-VAL` 2026-07-20 16:52 CEST) ; Figma page `61:2` référence desktop ; UX-R01…UX-R04 ouvertes |
 | Scénario OPS1 | Docs `54`–`56` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST) ; FD-CAND-13/20/26 levées (OPS1) ; FD-CAND-15 maintenue ; UX-R01…R04 maintenues |
 | Architecture technique OPS1 | Docs `57`–`59` — **VALIDATED WITH AMENDMENTS** (`G-OPS1-TECH-ARCH-VAL` — 2026-07-20 19:17:11 CEST) ; 26 CAND validées ; stack non finalisée |
+| Backlog OPS1 | Docs `60`–`62` — **VALIDATED WITH RESERVATIONS** (`G-OPS1-BACKLOG-VAL` — 2026-07-20 20:52:00 CEST) ; 17 epics / 41 stories / 20 décisions ; delivery/code/DevOps/live/MVP fermés |
 | Handoff | `sfia/review-handoff` |
 
 ---
@@ -457,4 +459,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [58-ops1-technical-components-security-and-runtime.md](./58-ops1-technical-components-security-and-runtime.md) | Composants / sécurité / runtime — **VALIDATED WITH AMENDMENTS** |
 | [59-ops1-technical-architecture-decision-pack.md](./59-ops1-technical-architecture-decision-pack.md) | `OPS1-TECH-CAND-01`…`26` — **VALIDATED WITH AMENDMENTS** |
 
-*SFIA Studio — POC maintenu — OPS1 scénario + tech-arch VALIDATED WITH AMENDMENTS — backlog / delivery / MVP non ouverts.*
+### Backlog OPS1 (validé avec réserves — `G-OPS1-BACKLOG-VAL` consommé)
+
+| Document | Rôle |
+|----------|------|
+| [60-ops1-backlog-framing-and-prioritization.md](./60-ops1-backlog-framing-and-prioritization.md) | Cadrage / priorisation backlog — **VALIDATED WITH RESERVATIONS** |
+| [61-ops1-epics-stories-and-acceptance-criteria.md](./61-ops1-epics-stories-and-acceptance-criteria.md) | 17 epics / 41 stories — **VALIDATED WITH RESERVATIONS** |
+| [62-ops1-backlog-decision-pack.md](./62-ops1-backlog-decision-pack.md) | `OPS1-BACKLOG-CAND-01`…`20` — **VALIDATED WITH RESERVATIONS** (2026-07-20 20:52:00 CEST) |
+
+*SFIA Studio — POC maintenu — OPS1 backlog VALIDATED WITH RESERVATIONS — non encore intégré sur `main` tant que PR non mergée — delivery / MVP non ouverts.*


```

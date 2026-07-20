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

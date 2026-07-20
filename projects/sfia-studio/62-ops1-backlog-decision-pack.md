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

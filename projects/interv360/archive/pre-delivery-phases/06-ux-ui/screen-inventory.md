# Interv360 — Inventaire des vues et écrans UX/UI

**Projet** : PRJ-INTERV360  
**Phase** : 06-ux-ui  
**Type** : Inventaire écrans  
**Statut** : Draft  
**Branche** : `ux/interv360-reprise-ui-detail`

---

## 1. Objectif

Ce document **inventorie les vues et écrans MVP** à reprendre dans le cycle UX/UI détaillé Interv360.

Il relie chaque écran aux **parcours utilisateurs**, **acteurs**, **objets métier**, **statuts et indicateurs**, **décisions UX atelier**, **captures Figma V1** et **écarts ou compléments** issus de l'architecture fonctionnelle détaillée.

Il s'appuie sur :

- le **brief UX/UI validé** (`ux-ui-brief.md`, `ux-ui-brief-validation.md`) ;
- les **captures Figma V1** (`figma-first-draft-screens/`, `2026-06-28-figma-v1-closure-summary.md`) ;
- le **cadrage** `ux-ui-reprise-scope.md` et l'**état des lieux** `ux-ui-reprise-analysis.md` ;
- les **parcours** `user-journeys.md` ;
- l'**architecture fonctionnelle détaillée** (`05-functional-architecture/`) ;
- les **ADR structurantes** (ADR-001 à ADR-004).

Ce document **ne produit pas** :

- maquette finale ;
- design system ;
- composant front ;
- code ;
- API ;
- SQL ;
- modèle technique ;
- backlog ;
- user stories ;
- tests ;
- delivery.

---

## 2. Principes d'inventaire

- Un **écran** est décrit **fonctionnellement** — pas comme maquette finale ni wireframe détaillé.
- Chaque écran doit être relié à **au moins un parcours** ou à une **vue de pilotage**.
- Chaque écran doit **pointer vers les objets métier source** — le dashboard et les listes sont des points d'accès, pas des référentiels autonomes.
- Les statuts et indicateurs affichés respectent **STAT-01 à STAT-08** (`status-and-transitions.md`, ADR-001).
- **STAT-07** (retard) et **STAT-08** (anomalie intégration) restent **distincts** — ne pas fusionner visuellement ni sémantiquement.
- Le **dashboard n'est pas source de vérité** — les fiches demande et intervention le sont.
- **Figma V1** est une **référence visuelle** présentable mais **non définitive** — les écarts avec l'architecture fonctionnelle sont documentés, pas corrigés par nouvelle maquette dans ce cycle.

---

## 3. Vue d'ensemble des écrans

| # | Vue / écran | Type | Acteur principal | Priorité | Source Figma V1 | Statut reprise |
|---|-------------|------|------------------|----------|-----------------|----------------|
| 1 | Dashboard SAV | Vue pilotage opérationnel | Manager SAV / Responsable SAV | **Haute** | `05-dashboard-sav.png` | À spécifier (`screen-functional-specs.md`) |
| 2 | Vue dirigeant | Vue pilotage consolidé | Dirigeant / Pilotage | **Moyenne** | `12-vue-dirigeant.png` | À spécifier |
| 3 | Liste demandes | Écran liste | Responsable SAV / Assistant admin | **Haute** | `06-liste-demandes.png` | À spécifier |
| 4 | Fiche demande SAV | Écran fiche | Responsable SAV | **Haute** | `07-fiche-demande-sav.png` | À spécifier |
| 5 | Planning | Écran planning | Responsable SAV / Manager SAV | **Haute** | `08-planning-semaine.png` | À spécifier — écart vue jour |
| 6 | Fiche intervention mobile | Écran mobile terrain | Technicien | **Haute** | `09-fiche-intervention-mobile.png` | À spécifier |
| 7 | Compte rendu mobile | Écran mobile clôture | Technicien | **Haute** | `10-compte-rendu-mobile.png` | À spécifier |
| 8 | Suivi erreurs intégration | Écran anomalies | Manager SAV | **Haute** | `11-suivi-erreurs-integration.png` | À spécifier |
| 9 | Détail reprise manuelle | Écran / panneau complémentaire | Manager SAV | **Moyenne** | **Absent** — à cadrer | À spécifier — complément archi fonctionnelle |

*Captures hors écrans MVP : `00-cover-context.png`, `13-validation-checklist.png`, `99-archive.png` — contexte jalon Figma V1, non inventoriés comme écrans applicatifs.*

---

## 4. Écran 1 — Dashboard SAV

| Élément | Description |
|---------|-------------|
| **Objectif fonctionnel** | Donner une visibilité opérationnelle quotidienne : demandes, interventions, retards, anomalies, charge — et orienter vers les dossiers actionnables |
| **Acteur principal** | Manager SAV, Responsable SAV / planning ; consultation Assistant admin |
| **Parcours associés** | P7 Pilotage retards (principal) ; P1 Qualification, P2 Planification, P5 Sync, P6 Anomalie, P8 Pilotage consolidé (secondaire) ; P9 Multi-canal (secondaire) |
| **Objets métier visibles** | Demande SAV, Intervention, Client, Technicien, Planning, Anomalie d'intégration, Indicateur de pilotage, Historique (agrégats) |
| **Statuts / indicateurs** | STAT-01 à STAT-06 (volumes et filtres) ; **STAT-07** et **STAT-08** en alertes distinctes |
| **Décisions UX** | Alertes **top 5–7 hiérarchisées** ; KPI **above the fold top 5–7** ; lien « Voir toutes » pour le reste |
| **Source Figma V1** | `05-dashboard-sav.png` — dashboard opérationnel actionnable |
| **Écarts / compléments** | Trois lectures fonctionnelles (Manager SAV, Technicien, Pilotage — `dashboard-and-alerts.md` §9) : Figma V1 couvre surtout Manager SAV ; distinction STAT-07 / STAT-08 à renforcer ; dashboard non source de vérité à expliciter |
| **Prochaine spécification** | `screen-functional-specs.md` § Dashboard SAV ; compléments dans `dashboard-ux-view.md` |

**Garde-fous** : dashboard non source de vérité ; STAT-07 et STAT-08 distincts ; chaque alerte ramène vers fiche demande, intervention ou anomalie source.

---

## 5. Écran 2 — Vue dirigeant

| Élément | Description |
|---------|-------------|
| **Objectif fonctionnel** | Offrir une lecture synthétique et tendances pour décision rapide — distincte du pilotage opérationnel SAV |
| **Acteur principal** | Dirigeant / Pilotage |
| **Parcours associés** | P8 Pilotage consolidé (principal) ; P7 Retards (secondaire) |
| **Objets / agrégats visibles** | Indicateur de pilotage, Intervention (agrégats), Historique, volumes clôtures / retards / anomalies |
| **KPI attendus** | Top **5–7** above the fold (brief §5.8 — 10 KPI documentés, priorisation visuelle) ; tendances ; pas de détail opérationnel terrain |
| **Distinction Dashboard SAV** | SAV = opérationnel court terme, actionnable ; dirigeant = consolidé, décisionnel — **deux écrans séparés** (Figma V1, `dashboard-kpi-ux-review.md`) |
| **Source Figma V1** | `12-vue-dirigeant.png` |
| **Écarts / compléments** | Vue Pilotage / supervision (`dashboard-and-alerts.md` §9.3) partiellement couverte ; drill-down vers objets métier à formaliser ; pas de BI avancée |

**Garde-fous** : pas de BI technique ; pas de KPI technique non métier ; dashboard non source de vérité.

---

## 6. Écran 3 — Liste demandes

| Élément | Description |
|---------|-------------|
| **Objectif fonctionnel** | Parcourir, filtrer et ouvrir les demandes SAV — point d'accès principal aux dossiers en qualification |
| **Acteur principal** | Responsable SAV, Assistant administratif |
| **Parcours associés** | P1 Qualification (principal) ; P9 Création multi-canal (principal) ; P7 Retards (secondaire si demande liée) |
| **Objets métier** | Demande SAV, Client, Équipement / site |
| **Statuts visibles** | **STAT-01** À qualifier, **STAT-02** Qualifiée |
| **Indicateurs éventuels** | **STAT-07** si demande ou intervention liée en retard (badge parallèle, pas statut liste) |
| **Source Figma V1** | `06-liste-demandes.png` |
| **Écarts / compléments** | Filtres par canal (CRM, email, manuel) à aligner brief ; wording statuts unifié FR ; lien alerte dashboard → ligne liste |

**Garde-fous** : liste = point d'accès aux demandes, pas source de vérité indépendante ; wording statuts unifié (`status-mapping.md`).

---

## 7. Écran 4 — Fiche demande SAV

| Élément | Description |
|---------|-------------|
| **Objectif fonctionnel** | Qualifier une demande, vérifier le contexte client/site, arbitrer un doublon, préparer la planification |
| **Acteur principal** | Responsable SAV |
| **Parcours associés** | P1 Qualification (principal) ; P9 Multi-canal (principal) ; P2 Planification (secondaire — lien vers planning) |
| **Objets visibles** | Demande SAV, Client, Équipement / site ; Intervention éventuelle (lien post-planification) |
| **Décision UX** | Checklist **minimale MVP** (atelier) — pas de fiche surchargée |
| **Statuts** | **STAT-01 → STAT-02** (transition qualification) |
| **Règles clés** | **RG-C05** données minimales obligatoires ; **RG-C04** anti-doublon — signalement, pas fusion automatique |
| **Source Figma V1** | `07-fiche-demande-sav.png` |
| **Écarts / compléments** | Champs obligatoires RG-C05 à expliciter en specs ; traitement doublon (fusion / ignorer) à détailler ; canal d'origine visible |

**Garde-fous** : checklist non transformée en modèle de données ; pas de surcharge hors MVP.

---

## 8. Écran 5 — Planning

| Élément | Description |
|---------|-------------|
| **Objectif fonctionnel** | Visualiser créneaux, affecter technicien, détecter conflits et retards |
| **Acteur principal** | Responsable SAV / Manager SAV |
| **Parcours associés** | P2 Planification (principal) ; P7 Pilotage retards (principal) |
| **Objets métier** | Planning, Intervention, Technicien, Demande SAV (lien) |
| **Statuts visibles** | **STAT-02** (demande qualifiée en amont), **STAT-03** Planifiée |
| **Indicateur** | **STAT-07** En retard — badge parallèle, ne remplace pas STAT-03 |
| **Décision UX** | Vue **jour par défaut** ; semaine en lecture secondaire si implémentation simple |
| **Source Figma V1** | `08-planning-semaine.png` — **écart** : capture nommée « semaine », décision atelier = **jour par défaut** |
| **Écarts / compléments** | Réconcilier Figma V1 (semaine) avec décision jour ; conflits créneau visibles ; lien retard STAT-07 |

**Garde-fous** : STAT-07 ne remplace pas le statut principal ; pas de modèle technique de planning.

---

## 9. Écran 6 — Fiche intervention mobile

| Élément | Description |
|---------|-------------|
| **Objectif fonctionnel** | Exécuter l'intervention terrain avec contexte client complet ; gérer démarrage et attente client |
| **Acteur principal** | Technicien |
| **Parcours associés** | P3 Intervention terrain (principal) ; P4 Clôture (secondaire — accès CR) ; P5 Sync (secondaire — lecture statut sync post-clôture) |
| **Objets métier** | Intervention, Client, Équipement / site, Historique |
| **Statuts** | **STAT-03** Planifiée → **STAT-04** En cours ⇄ **STAT-05** En attente client |
| **Décision UX** | **Mobile technicien prioritaire** ; desktop secondaire consultation bureau |
| **Source Figma V1** | `09-fiche-intervention-mobile.png` |
| **Écarts / compléments** | Coexistence STAT-06 + STAT-08 lisible post-clôture (lecture seule) ; contexte ≤ 3 actions (brief) ; pas de réouverture auto sur anomalie |

**Garde-fous** : STAT-05 attente client ne clôture pas l'intervention ; mobile prioritaire ; pas de composant front.

---

## 10. Écran 7 — Compte rendu mobile

| Élément | Description |
|---------|-------------|
| **Objectif fonctionnel** | Documenter l'intervention et clôturer localement avec trace complète |
| **Acteur principal** | Technicien |
| **Parcours associé** | P4 Clôture locale (principal) |
| **Objets métier** | Compte rendu, Résultat d'intervention, Signature, Motif d'absence de signature, Historique, Intervention |
| **Statuts** | **STAT-04 → STAT-06** Clôturée |
| **Décisions UX** | CR **web seul MVP** (pas PDF) ; **signature optionnelle** ; **motif obligatoire** si signature absente |
| **Source Figma V1** | `10-compte-rendu-mobile.png` |
| **Écarts / compléments** | Sync CRM post-clôture non bloquante (ADR-004) — feedback utilisateur après validation ; champs obligatoires clôture (`status-and-transitions.md` §7) |

**Garde-fous** : STAT-06 reste valide même si sync KO ; sync CRM simulée non bloquante ; pas d'export PDF obligatoire MVP.

---

## 11. Écran 8 — Suivi erreurs intégration

| Élément | Description |
|---------|-------------|
| **Objectif fonctionnel** | Visualiser et traiter les anomalies de synchronisation CRM simulée — message métier en premier |
| **Acteur principal** | Manager SAV |
| **Parcours associés** | P6 Traitement anomalie (principal) ; P5 Sync post-clôture (principal) |
| **Objets métier** | Anomalie d'intégration, Synchronisation CRM simulée, Intervention, Historique, Gravité d'anomalie |
| **Indicateur** | **STAT-08** Anomalie d'intégration |
| **Gravités** | Information ; Bloquant métier ; Bloquant sync (ADR-003) |
| **Décision UX** | **Message métier d'abord** ; détail technique masqué ou secondaire |
| **Source Figma V1** | `11-suivi-erreurs-integration.png` |
| **Écarts / compléments** | Coexistence STAT-06 + STAT-08 sur même intervention ; lien vers détail reprise manuelle ; pas de réouverture intervention ; priorisation par gravité |

**Garde-fous** : STAT-08 ne remplace pas STAT-06 ; coexistence possible ; pas de réouverture automatique ; pas de détail technique prioritaire.

---

## 12. Écran 9 — Détail reprise manuelle

| Élément | Description |
|---------|-------------|
| **Objectif fonctionnel** | Permettre au manager de corriger, compléter, relancer, accepter ou clôturer le traitement d'une anomalie STAT-08 |
| **Acteur principal** | Manager SAV |
| **Nature** | **Écran ou panneau complémentaire** — issu architecture fonctionnelle, **non présent** dans les 8 écrans Figma V1 |
| **Parcours associé** | P6 Traitement anomalie intégration (principal) |
| **Objets métier** | Reprise manuelle, Anomalie d'intégration, Gravité d'anomalie, Historique, Synchronisation CRM simulée |
| **Actions fonctionnelles** | Corriger une donnée ; compléter une information ; relancer la sync ; accepter l'anomalie ; clôturer le traitement (`integration-functional-view.md` §9) |
| **Source Figma V1** | **Absent** — peut être un panneau depuis écran 8 ou fiche intervention ; à confirmer en specs |
| **Justification** | `integration-functional-view.md`, ADR-003 — reprise manuelle fonctionnelle MVP |
| **Prochaine spécification** | `screen-functional-specs.md` § Détail reprise manuelle ; lien depuis écran 8 |

**Garde-fous** : pas de retry automatique avancé ; pas d'API ; pas de payload technique ; reprise manuelle fonctionnelle MVP uniquement.

---

## 13. Matrice écrans / parcours

| Écran | P1 Qualif. | P2 Planif. | P3 Terrain | P4 Clôture | P5 Sync | P6 Anomalie | P7 Retards | P8 Pilotage | P9 Multi-canal |
|-------|:----------:|:----------:|:----------:|:----------:|:-------:|:-----------:|:----------:|:-----------:|:--------------:|
| Dashboard SAV | Secondaire | Secondaire | — | — | Secondaire | Secondaire | **Principal** | Secondaire | Secondaire |
| Vue dirigeant | — | — | — | — | — | Secondaire | Secondaire | **Principal** | — |
| Liste demandes | **Principal** | Secondaire | — | — | — | — | Secondaire | — | **Principal** |
| Fiche demande SAV | **Principal** | Secondaire | — | — | — | — | Secondaire | — | **Principal** |
| Planning | — | **Principal** | Secondaire | — | — | — | **Principal** | — | — |
| Fiche intervention mobile | — | — | **Principal** | Secondaire | Secondaire | Secondaire | — | — | — |
| Compte rendu mobile | — | — | Secondaire | **Principal** | — | — | — | — | — |
| Suivi erreurs intégration | — | — | — | — | **Principal** | **Principal** | — | Secondaire | — |
| Détail reprise manuelle | — | — | — | — | Secondaire | **Principal** | — | — | — |

---

## 14. Matrice écrans / objets métier

| Écran | Demande SAV | Intervention | Client | Équip. / site | Technicien | Planning | Compte rendu | Signature / motif | Sync CRM simulée | Anomalie intég. | Reprise manuelle | Indicateur pilotage |
|-------|:-----------:|:------------:|:------:|:-------------:|:----------:|:--------:|:------------:|:-----------------:|:----------------:|:---------------:|:----------------:|:-------------------:|
| Dashboard SAV | Visible | Visible | Visible | Visible | Visible | Visible | Visible | Visible | Visible | Visible | Visible | **Principal** |
| Vue dirigeant | Visible | Visible | — | — | — | — | Visible | — | Visible | Visible | Visible | **Principal** |
| Liste demandes | **Principal** | — | Visible | Visible | — | — | — | — | — | — | — | — |
| Fiche demande SAV | **Principal** | Visible | **Principal** | **Principal** | — | — | — | — | — | — | — | — |
| Planning | Visible | **Principal** | — | — | **Principal** | **Principal** | — | — | — | — | — | — |
| Fiche intervention mobile | — | **Principal** | **Principal** | **Principal** | Visible | — | — | — | Visible | Visible | — | — |
| Compte rendu mobile | — | **Principal** | — | — | Visible | — | **Principal** | **Principal** | — | — | — | — |
| Suivi erreurs intégration | — | Visible | — | — | — | — | Visible | — | **Principal** | **Principal** | Visible | — |
| Détail reprise manuelle | — | Visible | — | — | — | — | Visible | Visible | **Principal** | **Principal** | **Principal** | — |

---

## 15. Matrice écrans / statuts et indicateurs

| Écran | STAT-01 | STAT-02 | STAT-03 | STAT-04 | STAT-05 | STAT-06 | STAT-07 | STAT-08 |
|-------|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|
| Dashboard SAV | Visible | Visible | Visible | Visible | Visible | Visible | **Indicateur** | **Indicateur** |
| Vue dirigeant | Visible | Visible | Visible | Visible | Visible | Visible | **Indicateur** | **Indicateur** |
| Liste demandes | **Principal** | **Principal** | — | — | — | — | Indicateur | — |
| Fiche demande SAV | **Principal** | **Principal** | — | — | — | — | Visible | — |
| Planning | Visible | Visible | **Principal** | — | — | — | **Indicateur** | — |
| Fiche intervention mobile | — | — | **Principal** | **Principal** | **Principal** | Visible | Visible | Visible |
| Compte rendu mobile | — | — | — | **Principal** | — | **Principal** | — | — |
| Suivi erreurs intégration | — | — | — | — | — | Visible | — | **Indicateur** |
| Détail reprise manuelle | — | — | — | — | — | Visible | — | **Indicateur** |

**Légende** : **Principal** = statut porté ou transition principale de l'écran ; **Visible** = consultable ; **Indicateur** = STAT-07 ou STAT-08 en parallèle du statut métier.

---

## 16. Écarts Figma V1 / architecture fonctionnelle

| Écran | Couvert par Figma V1 ? | Écart ou complément identifié | Traitement recommandé |
|-------|------------------------|------------------------------|------------------------|
| Dashboard SAV | Oui (`05-dashboard-sav.png`) | Vues Technicien et Pilotage / supervision non exportées ; STAT-07/08 à distinguer explicitement | `dashboard-ux-view.md` + `screen-functional-specs.md` |
| Vue dirigeant | Oui (`12-vue-dirigeant.png`) | Alignement indicateurs agrégés vs `dashboard-and-alerts.md` | `screen-functional-specs.md` |
| Liste demandes | Oui (`06-liste-demandes.png`) | Filtres canal et lien alertes dashboard | `screen-functional-specs.md` |
| Fiche demande SAV | Oui (`07-fiche-demande-sav.png`) | Checklist RG-C05 et doublon RG-C04 à expliciter | `screen-functional-specs.md` |
| Planning | Oui (`08-planning-semaine.png`) | **Écart** : capture « semaine » vs décision **vue jour par défaut** | Specs : jour par défaut ; semaine secondaire |
| Fiche intervention mobile | Oui (`09-fiche-intervention-mobile.png`) | Lecture STAT-06 + STAT-08 coexistants post-clôture | `screen-functional-specs.md` |
| Compte rendu mobile | Oui (`10-compte-rendu-mobile.png`) | Feedback sync post-clôture non bloquante | `screen-functional-specs.md` |
| Suivi erreurs intégration | Oui (`11-suivi-erreurs-integration.png`) | Gravités ADR-003 ; lien reprise manuelle | `screen-functional-specs.md` + écran 9 |
| Détail reprise manuelle | **Non** — absent Figma V1 | Complément `integration-functional-view.md`, ADR-003 | `screen-functional-specs.md` — panneau ou écran dédié |
| Transversal | — | Dashboard non source de vérité ; Figma V1 **non définitive** | Garde-fous dans tous les livrables ; pas de nouvelle maquette ce cycle |

---

## 17. Priorisation de reprise

| Écran | Priorité | Justification |
|-------|----------|---------------|
| Dashboard SAV | **Haute** | Hub opérationnel ; parcours retards et alertes ; décisions KPI/alertes top 5–7 |
| Liste demandes | **Haute** | Entrée qualification et création multi-canal |
| Fiche demande SAV | **Haute** | Cœur qualification STAT-01 → STAT-02 ; checklist minimale MVP |
| Planning | **Haute** | Planification STAT-02 → STAT-03 ; STAT-07 ; écart vue jour à résoudre en specs |
| Fiche intervention mobile | **Haute** | Parcours terrain technicien ; mobile prioritaire |
| Compte rendu mobile | **Haute** | Clôture STAT-06 ; ADR-004 ; signature optionnelle |
| Suivi erreurs intégration | **Haute** | STAT-08 ; ADR-003 ; message métier d'abord |
| Vue dirigeant | **Moyenne** | Pilotage consolidé ; distinct mais moins critique opérationnellement |
| Détail reprise manuelle | **Moyenne** | Complément archi fonctionnelle ; dépend de l'écran 8 ; absent Figma V1 |

---

## 18. Points de vigilance transverses

- Ne pas transformer cet inventaire en **maquette** ou wireframe détaillé.
- Ne pas produire de **composant front**.
- Ne pas créer de **backlog**, **user stories** ou **tests**.
- Garder chaque écran relié aux **objets métier source**.
- Ne pas faire du **dashboard** une source de vérité.
- Garder **STAT-07** et **STAT-08** **distincts** sur tous les écrans.
- Conserver **STAT-06** comme **clôture locale valide** même si sync KO.
- Respecter **ADR-001 à ADR-004**.
- Ne **pas modifier** les captures Figma V1 (`figma-first-draft-screens/*.png`).
- **Figma V1** reste référence visuelle — les écarts documentés ici alimentent les specs, pas une refonte maquette dans ce cycle.

---

## 19. Conclusion

L'**inventaire des 9 vues/écrans** MVP de la reprise UX/UI Interv360 est stabilisé :

- **8 écrans** couverts par Figma V1 (captures `05` à `12`) ;
- **1 écran complémentaire** (Détail reprise manuelle) issu de l'architecture fonctionnelle ;
- matrices **écrans × parcours**, **écrans × objets métier**, **écrans × statuts** ;
- **écarts Figma V1 / archi fonctionnelle** documentés pour la suite.

Cet inventaire alimente directement :

| Livrable | Apport de l'inventaire |
|----------|------------------------|
| `screen-functional-specs.md` | Spécification fonctionnelle détaillée par écran |
| `dashboard-ux-view.md` | Vues Manager SAV, Technicien, Pilotage ; KPI et alertes |
| `ux-ui-summary.md` | Synthèse consolidée de la reprise |

### Prochaine action recommandée

Produire :

**`projects/interv360/06-ux-ui/screen-functional-specs.md`**

**Objectif** : spécifier fonctionnellement chaque écran (comportements, états, transitions, garde-fous) — sans code, composant front ni maquette finale.

---

*Inventaire des vues et écrans UX/UI — Interv360 — SFIA — Draft.*

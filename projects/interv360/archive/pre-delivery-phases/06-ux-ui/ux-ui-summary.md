# Interv360 — Synthèse reprise UX/UI

**Projet** : PRJ-INTERV360  
**Phase** : 06-ux-ui  
**Type** : Synthèse reprise UX/UI  
**Statut** : Draft  
**Branche** : `ux/interv360-reprise-ui-detail`

---

## 1. Objectif

Ce document **consolide le cycle de reprise UX/UI** Interv360.

Il synthétise, sans créer de nouvelles règles ni décisions structurantes :

- l'**état des lieux** (`ux-ui-reprise-analysis.md`) ;
- le **cadrage** (`ux-ui-reprise-scope.md`) ;
- les **parcours utilisateurs** (`user-journeys.md`) ;
- l'**inventaire des écrans** (`screen-inventory.md`) ;
- les **spécifications fonctionnelles écran** (`screen-functional-specs.md`) ;
- les **vues dashboard** (`dashboard-ux-view.md`).

Ce document **ne produit pas** :

- nouvelles décisions structurantes ;
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
- delivery ;
- BI technique ;
- publication Notion.

---

## 2. Rappel du contexte de reprise

- L'UX/UI Interv360 **n'a pas été reprise depuis zéro** — un **brief UX/UI validé**, une **validation du brief**, des **captures Figma V1** et des **décisions atelier** existaient déjà.
- Les **8 points UX ouverts** du brief avaient été **tranchés** à l'atelier de clarification (`clarification-workshop-minutes.md` §4).
- **Figma V1** était **clôturée** comme **présentable mais non définitive** (`2026-06-28-figma-v1-closure-summary.md`).
- L'**architecture fonctionnelle détaillée** mergée (`05-functional-architecture/`) et les **ADR structurantes** (ADR-001 à ADR-004) ont fourni le **cadre final** : domaines, objets, STAT-01 à STAT-08, clôture locale, sync post-clôture, anomalies, dashboard.
- La reprise a consisté à **aligner** parcours, écrans, dashboard et **garde-fous fonctionnels** sur ce cadre — en **documentation UX fonctionnelle**, sans maquette finale ni delivery.

---

## 3. Livrables produits dans le cycle

| Ordre | Livrable | Rôle | Statut |
|-------|----------|------|--------|
| 1 | `ux-ui-reprise-analysis.md` | État des lieux ; inventaire existant ; points ouverts ; proposition de cycle | **Produit** |
| 2 | `ux-ui-reprise-scope.md` | Cadrage périmètre, sources, livrables, exclusions, garde-fous | **Produit** |
| 3 | `user-journeys.md` | 9 parcours utilisateurs détaillés alignés statuts / objets | **Produit** |
| 4 | `screen-inventory.md` | Inventaire 9 écrans ; matrices ; écarts Figma V1 | **Produit** |
| 5 | `screen-functional-specs.md` | Spécifications fonctionnelles par écran | **Produit** |
| 6 | `dashboard-ux-view.md` | Vues Manager SAV, Technicien, Pilotage ; KPI et alertes | **Produit** |
| 7 | `ux-ui-summary.md` | Synthèse consolidée (ce document) | **Produit** |
| 8 | `2026-06-28-ux-ui-cycle-closure.md` | Clôture formelle du cycle | **Produit** |

---

## 4. Décisions UX déjà acquises et transposées

| Décision UX | Source | Transposition dans la reprise |
|-------------|--------|------------------------------|
| Checklist minimale MVP (fiche demande) | Atelier §4 | `user-journeys.md` P1 ; `screen-functional-specs.md` §7 ; RG-C05 |
| CR web seul (pas PDF) | Atelier §4 | `screen-functional-specs.md` §10 ; parcours P4 |
| Planning vue **jour par défaut** | Atelier §4 | `screen-functional-specs.md` §8 ; écart vs capture Figma semaine |
| Alertes **top 5–7** hiérarchisées | Atelier §4 | `dashboard-ux-view.md` §4 ; `screen-functional-specs.md` §4 |
| KPI **top 5–7** above the fold | Atelier §4 | `dashboard-ux-view.md` §4, §6 |
| Wording statuts **unifié FR** | Atelier §4 / `status-mapping.md` | Tous livrables ; STAT-01 à STAT-08 |
| Mobile technicien **prioritaire** | Atelier §4 | `user-journeys.md` P3/P4 ; `dashboard-ux-view.md` §5 |
| Message **métier d'abord** (erreurs intégration) | Atelier §4 / ADR-003 | `screen-functional-specs.md` §11–12 ; `dashboard-ux-view.md` |
| Signature **optionnelle** ; motif si absence | Atelier §7 / `closure-without-signature.md` | `screen-functional-specs.md` §10 ; RG-R02/R05 |
| Dashboards **SAV / dirigeant séparés** | Brief / Figma V1 | `screen-inventory.md` ; `dashboard-ux-view.md` §4 vs §6 |
| Figma V1 **présentable, non définitive** | `2026-06-28-figma-v1-closure-summary.md` | Écarts documentés ; pas de refonte maquette ce cycle |

---

## 5. Parcours utilisateurs consolidés

| # | Parcours | Acteur principal | Priorité | Statuts / indicateurs |
|---|----------|------------------|----------|------------------------|
| 1 | Qualification demande | Responsable SAV | **Haute** | STAT-01 → STAT-02 |
| 2 | Planification et affectation | Responsable SAV | **Haute** | STAT-02 → STAT-03 ; STAT-07 |
| 3 | Intervention terrain | Technicien | **Haute** | STAT-03 → STAT-04 ⇄ STAT-05 |
| 4 | Clôture locale | Technicien | **Haute** | STAT-04 → STAT-06 |
| 5 | Synchronisation post-clôture | Manager SAV / système | Moyenne | STAT-06 ; sync OK / attente / KO |
| 6 | Traitement anomalie intégration | Manager SAV | **Haute** | STAT-08 (coexiste avec STAT-06) |
| 7 | Pilotage retards | Manager SAV | Moyenne | STAT-07 (indicateur) |
| 8 | Pilotage consolidé | Dirigeant / Pilotage | Moyenne | Agrégats ; STAT-07, STAT-08 |
| 9 | Création demande multi-canal | Assistant admin / Responsable SAV | Basse | → STAT-01 |

**Parcours haute priorité** : qualification, planification, terrain, clôture locale, traitement anomalie STAT-08.

---

## 6. Écrans et vues consolidés

| # | Écran / vue | Priorité | Rôle UX | Source Figma V1 |
|---|-------------|----------|---------|-----------------|
| 1 | Dashboard SAV | Haute | Hub opérationnel manager ; KPI et alertes | `05-dashboard-sav.png` |
| 2 | Vue dirigeant | Moyenne | Pilotage consolidé ; tendances | `12-vue-dirigeant.png` |
| 3 | Liste demandes | Haute | Accès demandes ; qualification ; création | `06-liste-demandes.png` |
| 4 | Fiche demande SAV | Haute | Qualification ; checklist minimale ; doublon | `07-fiche-demande-sav.png` |
| 5 | Planning | Haute | Affectation ; retards STAT-07 | `08-planning-semaine.png` *(écart jour)* |
| 6 | Fiche intervention mobile | Haute | Exécution terrain technicien | `09-fiche-intervention-mobile.png` |
| 7 | Compte rendu mobile | Haute | Clôture locale STAT-06 | `10-compte-rendu-mobile.png` |
| 8 | Suivi erreurs intégration | Haute | Anomalies STAT-08 ; gravités | `11-suivi-erreurs-integration.png` |
| 9 | Détail reprise manuelle | Moyenne | Traitement anomalie ; reprise MVP | **Absent** — complément archi fonctionnelle |

**8 écrans** sont couverts par **Figma V1** ; le **détail reprise manuelle** est un **complément** issu de `integration-functional-view.md` et ADR-003, à matérialiser en panneau ou écran dédié.

---

## 7. Vues dashboard consolidées

| Vue dashboard | Acteur | Rôle | Couverture Figma V1 |
|---------------|--------|------|---------------------|
| **Manager SAV** | Manager SAV / Responsable SAV | Visibilité quotidienne ; alertes actionnables ; liens dossiers | **Oui** — `05-dashboard-sav.png` |
| **Technicien** | Technicien terrain | Interventions du jour ; actions terrain et clôture | **Non** — hub = fiche intervention mobile |
| **Pilotage / Dirigeant** | Dirigeant / Pilotage | Synthèse ; tendances ; alertes macro | **Oui** — `12-vue-dirigeant.png` |

- **Manager SAV** et **Dirigeant** sont couverts par Figma V1.
- La **vue Technicien** n'a **pas** de capture dashboard dédiée — la **fiche intervention mobile** sert de **hub fonctionnel** technicien (`dashboard-ux-view.md` §5).

---

## 8. Apports de l'architecture fonctionnelle à l'UX/UI

| Apport fonctionnel | Impact UX/UI |
|--------------------|--------------|
| **7 domaines fonctionnels** | Structuration parcours et responsabilités écran (demande → pilotage) |
| **16 objets métier** | Données affichées ; liens fiche demande ↔ intervention ↔ CR ↔ anomalie |
| **STAT-01 à STAT-06** | Cycle métier principal sur listes, fiches, planning, terrain, clôture |
| **STAT-07** | Indicateur **retard** — badge parallèle ; dashboard et planning |
| **STAT-08** | Indicateur **anomalie intégration** — écran erreurs ; reprise manuelle |
| **Clôture locale autonome (STAT-06)** | CR mobile ; sync non bloquante ; messages rassurants |
| **Sync CRM simulée post-clôture** | Feedback post-clôture ; STAT-08 si KO ; ADR-002 |
| **Anomalies avec gravités** | Information / Bloquant métier / Bloquant sync — priorisation alertes |
| **Reprise manuelle MVP** | Écran 9 ; actions corriger / relancer / accepter / clôturer traitement |
| **Dashboard non source de vérité** | KPI et alertes orientent vers fiches métier ; ADR intégrés |

---

## 9. Garde-fous consolidés

- **Interv360** = source de vérité locale.
- **CRM simulé** ≠ source de vérité (ADR-002).
- **Dashboard** ≠ source de vérité — fiches demande et intervention font foi.
- **STAT-07** et **STAT-08** restent **distincts** (retard vs anomalie intégration).
- **STAT-07** ne **remplace pas** le statut métier principal.
- **STAT-08** ne **remplace pas** STAT-06 — **coexistence** possible.
- **STAT-06** reste **valide** si sync KO (ADR-004).
- Anomalie **STAT-08** ne **rouvre pas** automatiquement l'intervention.
- **Message métier** avant détail technique (ADR-003).
- **Reprise manuelle MVP** — pas de retry automatique avancé.
- **Figma V1** = référence visuelle, **pas** cible finale figée.
- **Pas de maquette finale** ni **backlog** dans ce cycle documentaire.

---

## 10. Écarts Figma V1 / reprise UX/UI

| Sujet | Écart constaté | Traitement dans la reprise |
|-------|----------------|---------------------------|
| Planning | Capture `08-planning-semaine.png` vs décision **vue jour par défaut** | Specs planning : jour défaut ; semaine secondaire |
| Détail reprise manuelle | Absent des 8 écrans Figma V1 | Écran 9 documenté ; panneau depuis suivi erreurs |
| Vue Technicien dashboard | Pas de capture dashboard technicien | `dashboard-ux-view.md` §5 ; hub fiche intervention mobile |
| STAT-07 / STAT-08 | Distinction partielle en V1 | Renforcement specs écran et dashboard §10 |
| Coexistence STAT-06 + STAT-08 | Peu explicite en V1 | Specs fiche intervention, CR, suivi erreurs §11 |
| Dashboard source de vérité | Implicite actionnable en V1 | Garde-fous : liens vers objets source |
| Figma V1 non définitive | V2 différée | Archi fonctionnelle prime ; pas de nouvelle maquette ce cycle |

---

## 11. Ce que le cycle permet désormais

- **Parcours utilisateurs** alignés sur statuts STAT-01 à STAT-08 et objets métier.
- **9 écrans** inventoriés et **spécifiés fonctionnellement** (comportements, états, actions).
- **Dashboard par profil** clarifié (Manager SAV, Technicien, Pilotage / Dirigeant).
- **Décisions atelier** sur les 8 points UX **transposées** dans les livrables.
- **Architecture fonctionnelle** et **ADR** reflétés dans l'UX documentaire.
- **Base prête** pour une future **maquette finale**, **backlog** ou **delivery** — **non déclenchés** dans ce cycle.

---

## 12. Ce que le cycle ne déclenche pas

- Pas de **maquette finale** ni V2 Figma.
- Pas de **design system** ni bibliothèque de composants.
- Pas de **composant front** ni **code** applicatif.
- Pas d'**API**, **SQL** ni **modèle technique**.
- Pas de **backlog** ni **user stories**.
- Pas de **tests** ni scénarios de recette.
- Pas de **delivery** ni planning de mise en production.
- Pas de **BI technique**.
- Pas de **publication Notion**.
- Pas de modification des **captures Figma V1**.

---

## 13. Points ouverts restants

*Ces points **ne bloquent pas** la clôture du cycle documentaire UX/UI.*

| Point ouvert | Nature | Recommandation |
|--------------|--------|----------------|
| Écran vs panneau pour **détail reprise manuelle** | UX fonctionnelle | Trancher en phase maquette ou delivery |
| **Maquette V2** Figma | Design | Cycle ultérieur si crédits / besoin |
| **Backlog** et user stories | Delivery | Phase post-documentation uniquement |
| **Seuils opérationnels** exacts (retards, alertes anciennes) | Métier | À définir avant implémentation ; placeholders « seuil à définir » |
| **Priorisation finale des KPI** en maquette | UX visuelle | Phase maquette ; top 5–7 déjà cadré |
| **Permissions fines** par rôle | Gouvernance | Phase ultérieure si exigée |

---

## 14. Prochaine action recommandée

Le cycle est **clôturé** via `2026-06-28-ux-ui-cycle-closure.md`.

**Suite** : contrôle qualité de la branche `ux/interv360-reprise-ui-detail`, puis **préparation PR** vers `main` — sans merge automatique.

---

## 15. Conclusion

La **reprise UX/UI Interv360** est **consolidée** et **alignée** avec :

- le **brief UX/UI initial** validé (8 écrans, 10 parcours, personas) ;
- les **décisions atelier** sur les 8 points UX ouverts ;
- **Figma V1** comme **référence visuelle** présentable mais non définitive ;
- l'**architecture fonctionnelle détaillée** (7 domaines, 16 objets, STAT-01 à STAT-08) ;
- les **ADR structurantes** ADR-001 à ADR-004.

Le cycle documentaire a produit **8 livrables** dans `projects/interv360/06-ux-ui/` — état des lieux, cadrage, parcours, inventaire, specs écran, vues dashboard, synthèse et clôture — **sans** maquette finale, backlog, tests ni delivery.

La **clôture formelle** (`2026-06-28-ux-ui-cycle-closure.md`) confirme le cycle ; toute phase ultérieure (maquette, implémentation, recette) reste **non engagée**.

---

*Synthèse reprise UX/UI — Interv360 — SFIA — Draft.*

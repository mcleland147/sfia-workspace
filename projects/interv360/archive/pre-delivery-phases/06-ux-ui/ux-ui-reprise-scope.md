# Interv360 — Cadrage du cycle de reprise UX/UI

**Projet** : PRJ-INTERV360  
**Phase** : 06-ux-ui  
**Type** : Cadrage reprise UX/UI  
**Statut** : Draft  
**Branche** : `ux/interv360-reprise-ui-detail`

---

## 1. Objectif du cycle

Ce cycle vise à **reprendre l'UX/UI Interv360** à partir de :

- le **brief UX/UI validé** (`ux-ui-brief.md`, `ux-ui-brief-validation.md`) ;
- les **8 points UX ouverts** du brief, **tranchés** à l'atelier de clarification (`clarification-workshop-minutes.md` §4) ;
- **Figma V1** — jalon clôturé comme **présentable mais non définitif** (`2026-06-28-figma-v1-closure-summary.md`, captures `figma-first-draft-screens/`) ;
- l'**architecture fonctionnelle détaillée** mergée (`05-functional-architecture/`) ;
- les **ADR structurantes** (`ADR-001` à `ADR-004`).

Le cycle **ne repart pas de zéro** : il transpose en **documentation UX fonctionnelle** ce qui est déjà cadré, validé ou stabilisé fonctionnellement, en réconciliant notamment Figma V1 avec les domaines, objets, statuts et intégrations formalisés.

Le cycle produit de la **documentation UX fonctionnelle** (parcours, inventaire d'écrans, spécifications fonctionnelles, vues dashboard) — **pas** une maquette UI finale.

Le cycle **ne doit pas produire** :

- backlog ;
- user stories ;
- tests ;
- code ;
- API ;
- SQL ;
- modèle technique ;
- BPMN ;
- SVG ;
- maquette UI finale ;
- composant front ;
- planning de delivery ;
- publication Notion.

---

## 2. Sources documentaires

| Source | Rôle | Usage dans le cycle |
|--------|------|---------------------|
| `06-ux-ui/ux-ui-reprise-analysis.md` | État des lieux | Source principale de cadrage ; inventaire existant, parcours et vues pressentis |
| `01-cadrage/ux-ui-brief.md` | Brief initial | Référence personas, 10 parcours, 8 écrans MVP, principes UX |
| `01-cadrage/ux-ui-brief-validation.md` | Validation brief | 8 points UX ouverts §4 ; checklist entrée Figma §3 |
| `01-cadrage/dashboard-kpi-ux-review.md` | KPI dashboard | Garde-fous surcharge ; différenciation SAV / dirigeant |
| `02-architecture/clarification-workshop-minutes.md` | Décisions atelier | Décisions sur les 8 points UX ; statuts ; clôture sans signature |
| `02-architecture/clarification-workshop-preparation.md` | Préparation atelier | Rappel des 8 points UX et ordre du jour |
| `02-architecture/mvp-clarifications.md` | Consolidation MVP | Clarifications UX et règles RG post-atelier |
| `02-architecture/qa-transverse-analysis.md` | Analyse transverse | Ambiguïtés UX/statuts ayant motivé l'atelier |
| `02-architecture/status-mapping.md` | Wording statuts | Libellés FR unifiés (RG-I05) |
| `02-architecture/closure-without-signature.md` | Clôture sans signature | RG-R02, RG-R05 — impact parcours CR |
| `02-architecture/2026-06-28-figma-v1-closure-summary.md` | Clôture Figma V1 | Référence visuelle V1 non définitive ; 8 écrans + captures |
| `02-architecture/figma-first-draft-screens/*.png` | Captures Figma V1 | Référence visuelle versionnée — non modifiée dans ce cycle |
| `05-functional-architecture/functional-architecture-scope.md` | Périmètre fonctionnel | Cadre du cycle aligné archi fonctionnelle |
| `05-functional-architecture/functional-domains.md` | Domaines | Structuration parcours et responsabilités écran |
| `05-functional-architecture/business-objects.md` | Objets métier | Données affichées, relations fiche demande ↔ intervention ↔ CR |
| `05-functional-architecture/status-and-transitions.md` | Statuts | Référence STAT-01 à STAT-08 ; clôture locale autonome |
| `05-functional-architecture/integration-functional-view.md` | Sync et anomalies | STAT-08 ; sync post-clôture ; reprise manuelle |
| `05-functional-architecture/dashboard-and-alerts.md` | Pilotage | Dashboard non source de vérité ; vues Manager / Technicien / Pilotage |
| `05-functional-architecture/functional-architecture-summary.md` | Synthèse fonctionnelle | Fil conducteur ; alignement domaines / objets / statuts |
| `05-functional-architecture/2026-06-28-functional-architecture-cycle-closure.md` | Clôture archi fonctionnelle | Garde-fous et périmètre stabilisé |
| `04-adr/adr-001-status-mapping.md` | ADR statuts | Garde-fous wording et indicateurs |
| `04-adr/adr-002-simulated-crm-sync.md` | ADR sync CRM simulée | Sync post-clôture ; CRM non source de vérité |
| `04-adr/adr-003-integration-error-management.md` | ADR erreurs intégration | Gravités ; message métier ; reprise manuelle |
| `04-adr/2026-06-28-adr-004-local-closure-vs-external-sync.md` | ADR clôture locale | STAT-06 indépendant de la sync |
| `04-adr/2026-06-28-adr-cycle-closure.md` | Clôture ADR | Décisions structurantes intégrées |

---

## 3. Périmètre inclus

- Reprise des **8 écrans MVP** existants (brief + Figma V1).
- Transposition des **8 points UX** tranchés en atelier en spécifications fonctionnelles.
- Alignement des **parcours UX** avec les **7 domaines fonctionnels** (`functional-domains.md`).
- Alignement des **écrans** avec les **16 objets métier** (`business-objects.md`).
- Alignement des **libellés et badges** avec **STAT-01 à STAT-08** (`status-and-transitions.md`, `status-mapping.md`, ADR-001).
- Prise en compte de **STAT-07** comme indicateur interne de **retard** (distinct du statut métier principal).
- Prise en compte de **STAT-08** comme indicateur interne d'**anomalie d'intégration** (distinct du statut métier principal).
- Prise en compte de la **clôture locale autonome** (STAT-06 valide indépendamment de la sync — ADR-004).
- Prise en compte de la **synchronisation CRM simulée post-clôture** (ADR-002).
- Prise en compte des **anomalies** (gravités ADR-003) et des **reprises manuelles** fonctionnelles au MVP.
- Clarification des vues **Manager SAV**, **Technicien** et **Pilotage** (`dashboard-and-alerts.md` §9).
- **Réconciliation** Figma V1 avec l'architecture fonctionnelle détaillée (écarts documentés, pas refonte maquette).

---

## 4. Hors périmètre

- Nouvelle **maquette Figma finale** ou V2.
- **Design system** ou bibliothèque de composants.
- **Composants front** ou code applicatif.
- **API**, **SQL**, **modèle technique**.
- **BPMN** ou modification de **SVG**.
- **Backlog**, **user stories**, **cas de test**, **scénarios de test**.
- **Planning delivery** ou publication **Notion**.
- **Modification** des captures Figma V1 (`figma-first-draft-screens/*.png`).

**Figma V1** reste une **référence visuelle** utile pour la continuité du projet — **non** une cible finale figée. Les écarts avec l'architecture fonctionnelle mergée seront documentés dans les livrables du cycle, sans produire de nouvelle maquette.

---

## 5. Décisions UX déjà acquises

*Source atelier : `clarification-workshop-minutes.md` §4 — ne pas redébattre.*

| Décision | Source | Impact sur la reprise |
|----------|--------|----------------------|
| Fiche demande : **checklist minimale MVP** | Atelier | Spécifier les champs essentiels (RG-C05) ; détails avancés hors MVP |
| CR : **web seul MVP** (pas PDF) | Atelier | Spécifier le formulaire CR mobile sans export documentaire |
| Planning : **vue jour par défaut** | Atelier | Prioriser la vue jour ; semaine en lecture secondaire si simple |
| Alertes : **top 5–7 hiérarchisées** | Atelier | Limiter la surcharge dashboard ; lien « Voir toutes » |
| Wording statuts : **unifié FR** | Atelier / `status-mapping.md` | Appliquer STAT-01 à STAT-08 sur tous les écrans |
| KPI above the fold : **top 5–7** | Atelier | Hiérarchiser les KPI dashboard SAV ; reste accessible en dessous |
| Mobile technicien : **prioritaire** | Atelier | Prioriser parcours terrain (fiche intervention + CR) |
| Erreurs intégration : **message métier d'abord** | Atelier / ADR-003 | Spécifier anomalies lisibles métier ; détail technique secondaire |
| Signature : **optionnelle**, clôture sans signature possible | Atelier §7 / `closure-without-signature.md` | Motif obligatoire si absence de signature |
| Dashboard SAV et vue dirigeant : **séparés** | `dashboard-kpi-ux-review.md`, Figma V1 | Maintenir deux lectures distinctes |
| Figma V1 : **présentable, non définitive** | `2026-06-28-figma-v1-closure-summary.md` | Référence visuelle ; V2 différée |

---

## 6. Livrables du cycle de reprise UX/UI

| Ordre | Livrable | Rôle | Ne doit pas produire |
|-------|----------|------|----------------------|
| 1 | `ux-ui-reprise-scope.md` | Cadrer le cycle | Écrans détaillés, backlog |
| 2 | `user-journeys.md` | Détailler les parcours UX | User stories, tests |
| 3 | `screen-inventory.md` | Inventorier vues et écrans | Maquettes finales |
| 4 | `screen-functional-specs.md` | Spécifier fonctionnellement les écrans | Code, composants front |
| 5 | `dashboard-ux-view.md` | Détailler les vues dashboard | BI technique, maquette finale |
| 6 | `ux-ui-summary.md` | Consolider la reprise UX/UI | Nouvelles décisions structurantes |
| 7 | `2026-06-28-ux-ui-cycle-closure.md` | Clôturer le cycle | Delivery, backlog |

---

## 7. Parcours prioritaires

| Parcours | Acteur principal | Source | Priorité |
|----------|------------------|--------|----------|
| Qualification demande (STAT-01 → STAT-02) | Responsable SAV | `status-and-transitions.md`, domaine Demande SAV | **Haute** |
| Planification et affectation (STAT-02 → STAT-03) | Responsable SAV | Domaine Planification, objet Planning | **Haute** |
| Intervention terrain (STAT-03 → STAT-04 / STAT-05) | Technicien | Domaine Intervention terrain | **Haute** |
| Clôture locale (STAT-04 → STAT-06) | Technicien | Domaine Clôture, ADR-004 | **Haute** |
| Traitement anomalie intégration (STAT-08) | Manager SAV | Domaine Anomalies, ADR-003 | **Haute** |
| Pilotage retards (STAT-07) | Manager SAV | Planning, `dashboard-and-alerts.md` | **Moyenne** |
| Pilotage consolidé | Dirigeant / pilotage | Dashboard, vue dirigeant | **Moyenne** |
| Synchronisation post-clôture | Manager / système | `integration-functional-view.md`, ADR-002 | **Moyenne** |
| Création demande multi-canal | Assistant admin | Brief §4, domaine Demande SAV | **Basse** |

*Les 10 parcours du brief restent la base nominale ; la reprise les aligne sur statuts et domaines mergés.*

---

## 8. Vues et écrans à reprendre

| Vue / écran | Objectif | Source | Priorité |
|-------------|----------|--------|----------|
| Dashboard SAV | Pilotage opérationnel quotidien | Brief §5.1, `dashboard-and-alerts.md` | **Haute** |
| Vue dirigeant | Synthèse pilotage et tendances | Brief §5.8, `dashboard-and-alerts.md` | **Moyenne** |
| Liste demandes | Suivi STAT-01/02, accès dossiers | Brief §5.2, objets Demande SAV | **Haute** |
| Fiche demande SAV | Qualification, anti-doublon | Brief §5.3, RG-C04/C05 | **Haute** |
| Planning | Affectation, créneaux, retards STAT-07 | Brief §5.4, objet Planning | **Haute** |
| Fiche intervention mobile | Exécution terrain STAT-03/04/05 | Brief §5.5, Figma V1 | **Haute** |
| Compte rendu mobile | Clôture locale STAT-06 | Brief §5.6, `closure-without-signature.md` | **Haute** |
| Suivi erreurs intégration | Anomalies STAT-08, gravités | Brief §5.7, ADR-003 | **Haute** |
| Détail reprise manuelle | Traitement sync KO, relance manuelle | `integration-functional-view.md` | **À cadrer** |

Ces vues ne sont **pas** des maquettes finales : elles seront décrites en **spécifications fonctionnelles** alignées architecture fonctionnelle, avec Figma V1 en référence visuelle.

---

## 9. Garde-fous fonctionnels UX/UI

- **Interv360** est la **source de vérité locale**.
- Le **CRM simulé** n'est **pas** source de vérité (ADR-002).
- Le **dashboard** n'est **pas** source de vérité — les fiches demande et intervention le sont (`dashboard-and-alerts.md`).
- **STAT-01 à STAT-06** portent le **cycle métier principal**.
- **STAT-07** est un **indicateur interne de retard** — ne remplace pas le statut métier principal.
- **STAT-08** est un **indicateur interne d'anomalie d'intégration** — ne remplace pas le statut métier principal.
- **STAT-07** et **STAT-08** doivent rester **distingués visuellement** et sémantiquement.
- **STAT-06** reste **valide** même si la synchronisation CRM simulée échoue (ADR-004).
- La **clôture locale** n'est **pas conditionnée** par la sync CRM simulée.
- Une anomalie **STAT-08** ne **rouvre pas automatiquement** l'intervention clôturée.
- Les **erreurs d'intégration** doivent être **lisibles métier** avant d'être techniques (ADR-003).
- La **reprise manuelle** est **fonctionnelle au MVP** — pas de retry automatique avancé.
- Les vues UX doivent toujours permettre de **revenir aux objets métier source** (demande, intervention, CR, anomalie).
- Les vues UX/UI doivent respecter les **ADR-001 à ADR-004**.

---

## 10. Critères de qualité du cycle

- [ ] Les parcours sont alignés sur les statuts fonctionnels (STAT-01 à STAT-08).
- [ ] Les écrans sont reliés aux objets métier (16 objets `business-objects.md`).
- [ ] Les statuts STAT-01 à STAT-08 sont appliqués avec un **wording cohérent** (`status-mapping.md`).
- [ ] STAT-07 et STAT-08 sont **distingués visuellement** et fonctionnellement.
- [ ] STAT-06 reste lisible comme **clôture locale valide** indépendamment de la sync.
- [ ] Les anomalies d'intégration sont **visibles** sans réouverture automatique de l'intervention.
- [ ] Le dashboard reste une **couche de visibilité**, pas un référentiel.
- [ ] Les décisions atelier sur les **8 points UX** sont **transposées** dans les livrables.
- [ ] Figma V1 est utilisée comme **référence**, pas comme contrainte finale.
- [ ] Aucun backlog, test, code ou delivery n'est produit.

---

## 11. Points ouverts au démarrage

| Point ouvert | Nature | Recommandation |
|--------------|--------|----------------|
| Écart Figma V1 vs architecture fonctionnelle | UX fonctionnelle | Documenter dans `screen-inventory.md` |
| Détail reprise manuelle sync | Parcours / écran | Cadrer dans `user-journeys.md` puis `screen-functional-specs.md` |
| Séparation visuelle STAT-07 / STAT-08 | UX / wording | Définir dans `dashboard-ux-view.md` et `screen-functional-specs.md` |
| Coexistence STAT-06 + STAT-08 à l'écran | UX fonctionnelle | Spécifier dans `screen-functional-specs.md` (clôture + anomalie sync) |
| Vues Manager / Technicien / Pilotage | Dashboard | Consolider dans `dashboard-ux-view.md` |
| Application uniforme du wording statuts | UX content | Vérifier dans tous les livrables du cycle |

*Les 8 points UX du brief sont **tranchés** — les points ci-dessus relèvent de la **reprise détaillée**, pas d'un nouveau débat de cadrage.*

---

## 12. Critères de sortie du cycle

- [ ] `ux-ui-reprise-scope.md` produit
- [ ] `user-journeys.md` produit
- [ ] `screen-inventory.md` produit
- [ ] `screen-functional-specs.md` produit
- [ ] `dashboard-ux-view.md` produit
- [ ] `ux-ui-summary.md` produit
- [ ] `2026-06-28-ux-ui-cycle-closure.md` produit
- [ ] Les garde-fous fonctionnels sont confirmés
- [ ] Les exclusions sont respectées
- [ ] La phase suivante (maquette finale, delivery, etc.) est identifiable sans être engagée

---

## 13. Prochaine action recommandée

Produire :

**`projects/interv360/06-ux-ui/user-journeys.md`**

**Objectif** : détailler les parcours utilisateurs prioritaires (qualification → planification → terrain → clôture → anomalies) à partir des statuts, domaines, objets métier et décisions UX déjà validées — sans user stories ni tests.

---

*Cadrage cycle reprise UX/UI — Interv360 — SFIA — Draft.*

# Interv360 — Reprise UX/UI — État des lieux

**Projet** : PRJ-INTERV360  
**Phase** : UX/UI reprise  
**Type** : Analyse de reprise UX/UI  
**Statut** : Draft  
**Branche** : `ux/interv360-reprise-ui-analysis`

**Choix de dossier** : `projects/interv360/06-ux-ui/` — le dossier `03-design/` existe comme placeholder (« À venir ») sans livrables UX détaillés ; les livrables UX historiques sont en `01-cadrage/` et `02-architecture/`. La numérotation `06-ux-ui` suit `05-functional-architecture`.

---

## 1. Objectif

Ce document **prépare la reprise UX/UI Interv360** à partir de :

- le brief UX/UI déjà produit ;
- la validation du brief ;
- les points UX ouverts (cadrage initial puis décisions atelier) ;
- l'**architecture fonctionnelle détaillée** mergée (`05-functional-architecture/`) ;
- les **ADR structurantes** (`04-adr/`).

Il identifie ce qui existe, ce qui a été tranché, ce qui doit être **détaillé** dans un prochain cycle documentaire UX/UI — sans repartir de zéro.

Ce document **ne produit pas encore** :

- maquette UI finale ;
- composant front ;
- backlog ;
- user stories ;
- tests ;
- code ;
- API ;
- SQL ;
- modèle technique ;
- delivery.

---

## 2. Fichiers UX/UI existants identifiés

### 2.1 Cadrage UX/UI (01-cadrage)

| Fichier | Rôle | Statut |
|---------|------|--------|
| `01-cadrage/ux-ui-brief.md` | Brief UX/UI : personas, parcours, 8 écrans MVP, principes, critères Figma | Validated |
| `01-cadrage/ux-ui-brief-validation.md` | Validation fictive du brief ; 8 points ouverts §4 | Validated |
| `01-cadrage/dashboard-kpi-ux-review.md` | KPI dashboard SAV / dirigeant, garde-fous UX, ARB-MVP-07 | Draft |

### 2.2 Clarification et atelier (02-architecture)

| Fichier | Rôle | Statut |
|---------|------|--------|
| `02-architecture/clarification-workshop-minutes.md` | Décisions sur les 8 points UX ; statuts ; clôture sans signature | Atelier simulé |
| `02-architecture/clarification-workshop-preparation.md` | Préparation atelier ; rappel 8 points UX | Draft |
| `02-architecture/mvp-clarifications.md` | Consolidation clarifications MVP dont UX | Draft |
| `02-architecture/qa-transverse-analysis.md` | Analyse transverse ; ambiguïtés UX/statuts | Draft |
| `02-architecture/status-mapping.md` | Wording statuts unifiés (RG-I05) | Draft |
| `02-architecture/closure-without-signature.md` | Clôture sans signature (RG-R02, RG-R05) | Draft |

### 2.3 Figma V1 et design (02-architecture)

| Fichier | Rôle | Statut |
|---------|------|--------|
| `02-architecture/ux-ui-figma-opening-note.md` | Ouverture jalon Figma | Done |
| `02-architecture/ux-ui-design-research-and-benchmark.md` | Recherche design | Done |
| `02-architecture/figma-design-instructions.md` | Instructions conception Figma | Done |
| `02-architecture/figma-production-prompt.md` | Prompt production maquette | Done |
| `02-architecture/figma-first-draft-review.md` | Revue premier jet | Done |
| `02-architecture/figma-review-session-minutes.md` | Revue simulée multi-rôles | Done |
| `02-architecture/figma-v1-closure-summary.md` | Clôture jalon Figma V1 — présentable, non définitive | Closed |
| `02-architecture/figma-first-draft-screens/*.png` | 11 captures écrans MVP (référence visuelle V1) | Versionnées Git |
| `02-architecture/sfia-figma-v1-standard-candidate.md` | Candidat standard SFIA Figma V1 | Draft |

### 2.4 Gouvernance prompts / capitalisation UX (02-architecture)

| Fichier | Rôle | Statut |
|---------|------|--------|
| `02-architecture/prompt-catalog-ux-ui-v1-validation.md` | Validation catalogue prompts UX/UI V1 | Draft |
| `02-architecture/role-methods-enrichment-after-figma-v1.md` | Enrichissement méthodes rôle post-Figma | Done |

### 2.5 Placeholder design

| Fichier | Rôle | Statut |
|---------|------|--------|
| `03-design/README.md` | Placeholder phase design — « À venir » | Non démarré |

---

## 3. Synthèse du brief UX/UI existant

### Objectifs UX initiaux

- Préparer la conception UX/UI à partir du cadrage consolidé et des 7 arbitrages MVP.
- Formaliser écrans MVP, parcours critiques, personas, KPI, principes UX.
- Servir de **brief préalable** — pas de maquette dans le brief lui-même.

### Profils utilisateurs identifiés

Dirigeant, Manager opérationnel, Responsable SAV / planning, Assistant administratif, Technicien terrain, Client final (sans portail MVP — notifications uniquement).

### Périmètre UX couvert (brief)

- **10 parcours critiques** (création demande CRM/email, qualification, planification, intervention, CR, erreurs intégration, pilotage SAV, pilotage dirigeant).
- **8 écrans MVP** : dashboard SAV, liste demandes, fiche demande, planning, fiche intervention mobile, compte rendu mobile, suivi erreurs intégration, vue dirigeant.
- **Principes UX transverses** (8 principes §7 du brief).
- **Checklist entrée Figma** validée dans `ux-ui-brief-validation.md` §3.

### Exclusions rappelées

Pas de portail client MVP, pas de notifications détaillées dédiées, pas de BI avancée, pas d'IA MVP, pas de backlog/architecture dans le brief.

### Décisions déjà prises (brief + validation + atelier)

| Décision | Source |
|----------|--------|
| 8 écrans MVP confirmés | `ux-ui-brief-validation.md` §2 |
| Dashboard SAV et vue dirigeant **séparés** | `dashboard-kpi-ux-review.md`, Figma V1 |
| Signature **optionnelle**, clôture sans signature possible | Atelier §7, `closure-without-signature.md` |
| Mobile **prioritaire** pour technicien | Atelier §4 point 7 |
| Message **métier** en premier pour erreurs intégration | Atelier §4 point 8 |
| Top **5–7** KPI / alertes visibles sans surcharge | Atelier §4 points 4 et 6 |
| Wording statuts **unifié** FR | Atelier §4 point 5 → `status-mapping.md`, ADR-001 |
| CR **web seul** MVP (pas PDF) | Atelier §4 point 2 |
| Planning : **vue jour** par défaut | Atelier §4 point 3 |
| Fiche demande : **checklist qualification minimale** MVP | Atelier §4 point 1 |

### Limites du brief initial

- Niveau **cadrage** — pas de spécifications écran par champ, transition, ou état d'erreur détaillé.
- Points ouverts §4 du brief **validés comme visibles** puis **tranchés à l'atelier** — la reprise doit les **transposer** en specs UX alignées architecture fonctionnelle, pas les redébattre.
- **Figma V1** produite (hors repo principal sauf PNG) — **clôturée** comme présentable mais **non définitive** ; V2 différée.

### Ce qui relève du brief vs reprise UX/UI détaillée

| Déjà cadré (ne pas refaire) | À détailler dans reprise UX/UI |
|-----------------------------|--------------------------------|
| Liste des 8 écrans et objectifs macro | Comportements, états, liens objets/statuts par écran |
| Personas et parcours nommés | Parcours pas-à-pas alignés domaines fonctionnels |
| Principes UX transverses | Application concrète STAT-07 / STAT-08, sync, clôture |
| Décisions atelier sur 8 points UX | Spécifications fonctionnelles d'écran |
| Captures Figma V1 | Réconciliation avec architecture fonctionnelle mergée |

---

## 4. Points UX ouverts identifiés

### 4.1 Les 8 points du brief (`ux-ui-brief-validation.md` §4)

| # | Point ouvert | Description initiale | Source | Statut atelier | Impact potentiel reprise UX |
|---|--------------|---------------------|--------|----------------|------------------------------|
| 1 | Niveau de détail fiche demande | Checklist minimale vs détaillée | `ux-ui-brief-validation.md` | **Décidé** — checklist minimale MVP | Détailler champs obligatoires / RG-C05 sur fiche demande |
| 2 | Format exact du compte rendu | Web vs export PDF | Idem | **Décidé** — web seul MVP | Spécifier formulaire CR mobile, signature/motif |
| 3 | Vue jour/semaine planning | Vue par défaut | Idem | **Décidé** — jour par défaut | Layout planning + lien retard STAT-07 |
| 4 | Niveau de détail alertes dashboard | Nombre max alertes | Idem | **Décidé** — top 5–7 hiérarchisées | Aligner `dashboard-and-alerts.md` priorités |
| 5 | Wording des statuts | Libellés unifiés RG-I05 | Idem | **Décidé** — liste unifiée FR | Appliquer STAT-01 à STAT-08 sur tous écrans |
| 6 | Priorité KPI above the fold | Top KPI dashboard SAV | Idem | **Décidé** — top 5–7 max | Cartographier KPI ↔ indicateurs fonctionnels |
| 7 | Comportement mobile technicien | Mobile vs desktop | Idem | **Décidé** — mobile prioritaire | Parcours terrain simplifié |
| 8 | Représentation erreurs intégration | Log vs message métier | Idem | **Décidé** — métier d'abord | Écran anomalies + gravité ADR-003 |

**Les 8 points sont retrouvés** dans `ux-ui-brief-validation.md` §4 et **tranchés** dans `clarification-workshop-minutes.md` §4.

### 4.2 Points à confirmer ou approfondir pour la reprise (post-architecture fonctionnelle)

| Point | Description | Source | À confirmer en reprise |
|-------|-------------|--------|------------------------|
| Coexistence STAT-06 + STAT-08 à l'écran | Affichage clôture locale + anomalie sync | `status-and-transitions.md`, ADR-004 | Oui — non détaillé dans Figma V1 |
| STAT-07 distinct de STAT-08 | Retard vs anomalie intégration | `dashboard-and-alerts.md`, ADR-001 | Oui — renforcer séparation visuelle |
| Reprise manuelle sync | Actions manager sur anomalie | `integration-functional-view.md`, ADR-003 | Oui — parcours reprise à spécifier |
| Vues Manager / Technicien / Pilotage | Trois lectures dashboard | `dashboard-and-alerts.md` §9 | Oui — au-delà du duo SAV/dirigeant Figma V1 |
| Réconciliation Figma V1 vs archi fonctionnelle | 8 écrans V1 vs 7 domaines / 16 objets | Comparaison livrables | Oui — écarts à documenter |

---

## 5. Apports de l'architecture fonctionnelle détaillée

| Apport fonctionnel | Source | Impact UX/UI |
|--------------------|--------|--------------|
| **7 domaines fonctionnels** | `functional-domains.md` | Structurer parcours et responsabilités écran (demande, planning, terrain, clôture, sync, anomalies, pilotage) |
| **16 objets métier** | `business-objects.md` | Nommer données affichées, relations fiche demande ↔ intervention ↔ CR |
| **8 statuts / indicateurs** | `status-and-transitions.md` | Wording écran unifié ; STAT-07/08 comme badges parallèles, pas statut principal |
| **Clôture locale autonome** | `status-and-transitions.md` §7, ADR-004 | UX clôture : CR + résultat + signature ou motif ; sync non bloquante |
| **Sync CRM simulée post-clôture** | `integration-functional-view.md`, ADR-002 | États sync OK/KO/en attente ; pas de rollback visuel STAT-06 |
| **Anomalies STAT-08 + gravités** | `integration-functional-view.md`, ADR-003 | Écran erreurs : Information / Bloquant métier / Bloquant sync |
| **Dashboard non source de vérité** | `dashboard-and-alerts.md` | KPI et alertes = visibilité ; actions ramènent vers fiches métier |
| **3 vues fonctionnelles** | `dashboard-and-alerts.md` §9 | Manager SAV, Technicien, Pilotage — compléter duo Figma V1 |
| **Synthèse consolidée** | `functional-architecture-summary.md` | Fil conducteur reprise ; ne pas créer nouvelles règles |

---

## 6. Parcours UX à reprendre ou détailler

| Parcours UX pressenti | Acteur principal | Source fonctionnelle | Priorité reprise |
|----------------------|------------------|----------------------|------------------|
| Qualification demande (STAT-01 → STAT-02) | Responsable SAV | Demande SAV, RG-C04/C05 | **Haute** |
| Planification et affectation (STAT-02 → STAT-03) | Responsable SAV | Planification, Planning | **Haute** |
| Intervention terrain (STAT-03 → STAT-04 ⇄ STAT-05) | Technicien | Intervention terrain | **Haute** |
| Clôture locale (STAT-04 → STAT-06) | Technicien | Clôture, CR, signature/motif | **Haute** |
| Synchronisation post-clôture | Manager / système | Sync CRM simulée | **Moyenne** |
| Traitement anomalie STAT-08 | Manager SAV | Anomalies, reprise manuelle | **Haute** |
| Pilotage retards STAT-07 | Manager SAV | Planning, Pilotage | **Moyenne** |
| Pilotage consolidé dirigeant | Dirigeant | Pilotage, dashboard | **Moyenne** |
| Création demande multi-canal | Assistant admin | Demande SAV (hors détail sync canal) | **Basse** — déjà cadré brief |

*Parcours déjà nommés dans `ux-ui-brief.md` §4 — la reprise les **aligne** sur statuts et domaines mergés.*

---

## 7. Écrans ou vues à reprendre ou détailler

| Vue / écran pressenti | Objectif | Source fonctionnelle | Remarque |
|----------------------|----------|----------------------|----------|
| Tableau de bord SAV | Visibilité opérationnelle + alertes | `dashboard-and-alerts.md`, brief §5.1 | Réconcilier KPI brief vs indicateurs STAT-01–08 |
| Vue dirigeant | Synthèse et tendances | Brief §5.8, dashboard fonctionnel | Rester distinct du dashboard SAV |
| Liste demandes | Accès dossiers STAT-01/02 | Demande SAV | Filtres statuts métier |
| Fiche demande SAV | Qualification, doublon | Demande SAV, RG-C04/C05 | Checklist minimale MVP (décidé atelier) |
| Planning | Créneaux, affectation, retards | Planning, STAT-07 | Vue jour par défaut |
| Fiche intervention mobile | Terrain STAT-03/04/05 | Intervention terrain | Mobile prioritaire |
| Compte rendu mobile | Clôture STAT-06 | Clôture, objets CR/signature/motif | Web seul ; signature optionnelle |
| Suivi erreurs intégration | STAT-08, gravités, reprise | Anomalies, `integration-functional-view.md` | Message métier d'abord |
| *(Éventuel)* Détail reprise manuelle | Relance / correction sync | Reprise manuelle | Non écran Figma V1 — à cadrer |

*Captures Figma V1 existantes — reprise = **spécification fonctionnelle d'écran**, pas nouvelle maquette à ce stade.*

---

## 8. Garde-fous UX/UI

- Le **dashboard n'est pas** source de vérité — les fiches demande/intervention le sont.
- **STAT-07** (retard) et **STAT-08** (anomalie intégration) sont des **indicateurs internes** — ne pas les confondre ni les fusionner visuellement.
- **STAT-06** reste valide même si la synchronisation CRM simulée échoue (ADR-004).
- La **clôture locale** n'est **pas bloquée** par la sync externe.
- Le **CRM simulé** n'est **pas** source de vérité — Interv360 l'est.
- Les **anomalies d'intégration** doivent être visibles **sans rouvrir automatiquement** l'intervention clôturée.
- La **reprise manuelle** reste **fonctionnelle** au MVP — pas de retry automatique avancé (ADR-003).
- Les vues UX/UI doivent respecter **ADR-001 à ADR-004** (statuts, sync simulée, erreurs, clôture locale).
- Ne pas **redesigner** Figma V1 dans ce cycle documentaire — **détailler** et **aligner** d'abord.

---

## 9. Proposition de prochain cycle UX/UI documentaire

Cycle proposé — **documentation UX fonctionnelle**, pas maquettes finales :

| Livrable proposé | Rôle |
|------------------|------|
| `ux-ui-reprise-scope.md` | Cadrage du cycle reprise, périmètre, exclusions |
| `user-journeys.md` | Parcours détaillés alignés domaines / statuts |
| `screen-inventory.md` | Inventaire écrans, acteurs, objets, statuts |
| `screen-functional-specs.md` | Spécifications fonctionnelles par écran (pas maquette) |
| `dashboard-ux-view.md` | Vues dashboard Manager / Technicien / Pilotage |
| `ux-ui-summary.md` | Synthèse consolidée reprise |
| `ux-ui-cycle-closure.md` | Clôture cycle reprise |

**Hors périmètre** de ce cycle proposé : backlog, user stories, tests, code, composants front, maquettes Figma finales, delivery.

**Relation Figma V1** : les captures `figma-first-draft-screens/` restent **référence visuelle** ; la reprise documentaire précise écarts et compléments vs architecture fonctionnelle.

---

## 10. Points à confirmer avant production UX/UI détaillée

- [ ] Les fichiers UX/UI existants ont été relus
- [ ] Les 8 points UX ouverts du brief sont **confirmés** (tranchés atelier — à transposer en specs)
- [ ] Les écarts Figma V1 vs architecture fonctionnelle sont **listés**
- [ ] Les parcours prioritaires (qualification → clôture → anomalies) sont **validés**
- [ ] Les vues à détailler (8 écrans + reprise manuelle éventuelle) sont **validées**
- [ ] Les garde-fous fonctionnels (STAT-06/07/08, ADR) sont **confirmés**
- [ ] Le périmètre du prochain cycle documentaire est **validé**
- [ ] Aucune maquette finale n'est produite à ce stade
- [ ] Aucun backlog n'est ouvert à ce stade

---

## 11. Conclusion

### Ce qui existe déjà

- Brief UX/UI **validé** avec 8 écrans, 10 parcours, personas, KPI.
- **8 points UX** du brief **tranchés** à l'atelier de clarification.
- **Figma V1** clôturée (captures Git) — présentable, **non définitive**.
- **Architecture fonctionnelle détaillée** mergée (7 domaines, 16 objets, 8 statuts/indicateurs).

### Ce que l'architecture fonctionnelle apporte

- Statuts et indicateurs **formalisés** (STAT-01–08), clôture locale, sync post-clôture, anomalies, dashboard par profil.
- Garde-fous **ADR** intégrés — base obligatoire pour toute spec écran.

### Ce qui doit être repris

- **Spécifications fonctionnelles d'écran** alignées archi fonctionnelle (pas refonte brief).
- **Parcours détaillés** incluant STAT-07/08, sync, reprise manuelle.
- **Réconciliation** Figma V1 ↔ livrables `05-functional-architecture/`.

### Prochaine action recommandée

Ouvrir le cycle documentaire reprise avec **`ux-ui-reprise-scope.md`** sur une branche dédiée (ex. `ux/interv360-reprise-ui-detail`), puis enchaîner `user-journeys.md` et `screen-inventory.md` — toujours **sans** maquette finale, backlog ou delivery.

---

*État des lieux reprise UX/UI — Interv360 — SFIA — Draft.*

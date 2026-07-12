# Interv360 — Clarifications MVP post-atelier

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Type** : Clarifications MVP post-atelier simulé  
**Statut** : Draft — décisions de cadrage simulées  
**Source principale** : `clarification-workshop-minutes.md`

---

## 1. Objectif

Ce document **consolide les décisions MVP** issues de l'**atelier de clarification simulé** (`clarification-workshop-minutes.md`), en vue de stabiliser le périmètre avant toute conception détaillée, maquette Figma ou architecture fonctionnelle.

**Précisions :**

- il **stabilise le périmètre MVP** avant conception détaillée ;
- il **consolide les décisions UX et transverses** tranchées en atelier simulé ;
- il **ne constitue pas** un backlog ;
- il **ne produit pas** de user stories ;
- il **ne produit pas** de cas de tests ;
- il **ne lance pas** le delivery.

---

## 2. Sources utilisées

| Source | Apport |
|--------|--------|
| `clarification-workshop-minutes.md` | Décisions simulées atelier — 8 points UX, RG macro, statuts, clôture, géoloc/IA |
| `clarification-workshop-minutes-summary.md` | Synthèse des décisions et documents de sortie cibles |
| `clarification-workshop-preparation.md` | Ordre du jour, garde-fous, sujets à traiter, liens ARB-MVP |
| `qa-transverse-analysis.md` | Ambiguïtés identifiées, règles prioritaires, recommandation géoloc/IA hors MVP |
| `ux-ui-brief.md` | 8 écrans MVP, personas, parcours, limites MVP, écrans hors périmètre |
| `ux-ui-brief-validation.md` | 8 points UX ouverts avant maquette — base des décisions §4 |
| `2026-06-27-business-framing.md` | Parcours SAV, objets métier, inventaire RG-*, risques, arbitrages |
| `mvp-arbitration-validation.md` | 7 arbitrages MVP validés — canaux, signature, erreurs, écrans, conservation |

---

## 3. Synthèse des clarifications MVP

| Sujet | Décision MVP | Statut | Impact |
|-------|--------------|--------|--------|
| **Fiche demande** | Checklist minimale MVP ; détails avancés hors MVP | Décidé | Qualification allégée ; surcharge réduite |
| **Compte rendu** | Web seul au MVP ; export PDF extension future | Décidé | Pas de contrainte documentaire prématurée |
| **Planning** | Vue jour par défaut ; vue semaine secondaire si simple | Décidé | Lisibilité opérationnelle quotidienne |
| **Alertes dashboard** | Top 5–7 alertes visibles ; hiérarchie par criticité | Décidé | Surcharge cognitive limitée |
| **Statuts** | Liste métier unifiée MVP ; formalisation dans `status-mapping.md` | Décidé | Cohérence écrans, CRM simulé, dashboard |
| **KPI above the fold** | Top 5–7 KPI maximum par dashboard | Décidé | Priorisation visuelle SAV / dirigeant |
| **Mobile technicien** | Mobile prioritaire ; parcours simplifié terrain | Décidé | Cohérence persona technicien |
| **Erreurs intégration** | Message métier visible ; détail technique secondaire | Décidé | Compréhension manager ; aligné ARB-MVP-05 |
| **Géolocalisation** | Hors MVP — extension future | Décidé | Complexité et données sensibles évitées |
| **IA légère** | Hors MVP — extension future | Décidé | Critères flottants évités ; trajectoire documentée |

---

## 4. Clarifications UX détaillées

| Point UX | Décision | Justification | Impact conception |
|----------|----------|---------------|-------------------|
| **Niveau de détail fiche demande** | Checklist minimale MVP ; détails avancés hors MVP | Réduit charge saisie manager SAV ; risque R-M05 | Limiter surcharge ; sécuriser qualification ; champs optionnels étendus reportés |
| **Format exact du compte rendu** | CR web seul au MVP ; export PDF hors MVP / extension future | Aligné ARB-MVP-03 sans génération documentaire | Éviter contrainte documentaire prématurée ; focus saisie terrain |
| **Vue jour/semaine du planning** | Vue jour par défaut ; vue semaine secondaire si simple | Priorité dispatch quotidien et terrain | Priorité lisibilité opérationnelle ; semaine en lecture complémentaire |
| **Niveau de détail alertes dashboard** | Top 5–7 alertes visibles maximum ; hiérarchisation par criticité ; reste via « Voir toutes » | Garde-fou R-UX01 et `dashboard-kpi-ux-review.md` | Limiter surcharge cognitive ; alertes actionnables en premier |
| **Wording des statuts** | Liste de statuts métier unifiée — libellés FR communs | Alimente RG-I05 ; évite divergence CRM / filtres | Cohérence entre écrans, CRM simulé et dashboard |
| **Priorité KPI above the fold** | Top 5–7 KPI maximum visibles sans scroll par dashboard | 12 + 10 KPI documentés mais priorisation explicite | Séparation plus claire dashboard SAV / vue dirigeant |
| **Comportement mobile technicien** | Mobile prioritaire ; parcours simplifié (contexte, actions, CR, statut) | Persona technicien terrain (`ux-ui-brief.md` §3) | Meilleure cohérence terrain ; desktop secondaire bureau |
| **Représentation erreurs intégration** | Message métier visible ; détail technique masqué ou secondaire | ARB-MVP-05 ; point ouvert QA | Meilleure compréhension manager / support ; log réservé admin |

---

## 5. Clarifications transverses MVP

### 5.1 Données minimales et qualification

L'atelier simulé confirme une **fiche demande volontairement limitée au MVP** : checklist minimale de qualification, sans historique enrichi ni pièces jointes multiples en entrée.

Les **données minimales obligatoires** à la création (RG-C05) sont orientées vers :

- client ;
- contact ;
- canal ;
- motif ;
- priorité ;
- adresse / site ;
- créneau souhaité si disponible.

Le **détail opérationnel** (variantes par canal CRM / email / saisie manuelle) sera produit dans **`rules-rg-prioritization.md`**.

**Objectif MVP** : pouvoir **qualifier sans surcharger** le manager SAV ni bloquer la planification pour données secondaires.

### 5.2 Statuts MVP

L'atelier simulé retient une **liste de statuts métier unifiée** pour le MVP, avec libellés utilisateur communs sur tous les écrans.

**Document cible** : `status-mapping.md` — la table de mapping détaillée (origine, visibilité, alertes, correspondances CRM) **n'est pas produite dans ce document**.

**Statuts candidats retenus** :

- À qualifier
- Qualifiée
- Planifiée
- En cours
- En attente client
- Clôturée
- En retard
- Anomalie d'intégration

*Note : le statut dédié « Notification en échec » n'est pas retenu comme statut MVP — indicateur dashboard sans statut dédié, aligné préparation atelier et ARB-MVP-02.*

### 5.3 Dashboard et KPI

Consolidation atelier simulé :

- **top 5–7 KPI above the fold** par dashboard (SAV et dirigeant) ;
- les KPI restants (12 SAV, 10 dirigeant documentés dans `ux-ui-brief.md` et `dashboard-kpi-ux-review.md`) restent accessibles **sous la ligne de flottaison** ou via section dépliante ;
- **différenciation explicite** dashboard SAV (opérationnel) vs vue dirigeant (pilotage) — pas de double dashboard redondant ;
- alertes limitées et hiérarchisées (§4).

**Document cible éventuel** : mise à jour ou annexe KPI (`dashboard-kpi-ux-review.md`) si besoin de formaliser la priorisation above the fold.

### 5.4 Erreurs d'intégration

Aligné **ARB-MVP-05** (`mvp-arbitration-validation.md`) :

- **message métier visible** en premier sur l'écran anomalies ;
- **détail technique secondaire** (accordéon, lien admin / support) ;
- **reprise manuelle simulée** — pas de retry automatique au MVP ;
- **trois niveaux de gravité** RG-I06 à documenter : information, bloquant métier, bloquant synchronisation.

**Documents cibles** : `rules-rg-prioritization.md` (RG-I06) ; annexe erreurs si nécessaire pour matrice gravité / représentation UX.

### 5.5 Clôture sans signature

Aligné **ARB-MVP-03** (`mvp-arbitration-validation.md`) et compte rendu atelier :

- **signature client optionnelle**, structurée mais non bloquante ;
- **compte rendu obligatoire** pour clôturer ;
- **motif obligatoire** en cas d'absence de signature ;
- **trace conservée** dans l'historique intervention ;
- synchronisation CRM simulée : statut clôturé + indicateur signature absente ;
- **aucun blocage de clôture** uniquement lié à l'absence de signature.

**Document cible** : `closure-without-signature.md` — champs CR détaillés (RG-R01, RG-R05).

### 5.6 Géolocalisation et IA

Décisions simulées prudentes, alignées `qa-transverse-analysis.md` :

| Sujet | Décision MVP | Suite |
|-------|--------------|-------|
| **Géolocalisation** | Hors MVP — extension future | `geo-ai-arbitration.md` |
| **IA légère** | Hors MVP — extension future | `geo-ai-arbitration.md` |

**Justifications** : éviter critères flottants ; limiter complexité ; réduire risques données sensibles, coûts, gouvernance et sécurité ; documenter une trajectoire future sans engagement delivery.

---

## 6. Impacts sur les documents de sortie

| Document cible | Contenu attendu | Priorité |
|----------------|-----------------|----------|
| `rules-rg-prioritization.md` | Détail opérationnel RG-C04, RG-C05, RG-I05, RG-I06, RG-R02, RG-R05 | Haute |
| `status-mapping.md` | Table formelle statuts, libellés, origines, visibilités, alertes, correspondances CRM | Haute |
| `closure-without-signature.md` | Conditions clôture, champs CR obligatoires, traces, sync CRM, motifs absence signature | Haute |
| `geo-ai-arbitration.md` | Arbitrage hors MVP, trajectoire future géoloc et IA | Moyenne |
| Annexe KPI (éventuelle) | Priorisation above the fold SAV / dirigeant si formalisation nécessaire | Basse |
| Annexe erreurs (éventuelle) | Matrice gravité RG-I06 + lien représentation UX si non couvert par rules-rg | Moyenne |

---

## 7. Points explicitement hors MVP

Liste consolidée — **uniquement éléments soutenus par les sources** :

| Élément hors MVP | Source / justification |
|------------------|------------------------|
| **Export PDF du compte rendu** | Atelier simulé §4 ; `ux-ui-brief-validation.md` §4 |
| **Géolocalisation** | Atelier simulé §8 ; `qa-transverse-analysis.md` ; `2026-06-27-business-framing.md` RG-T04 |
| **IA légère** | Atelier simulé §8 ; `qa-transverse-analysis.md` ; `ux-ui-brief-validation.md` (limites MVP) |
| **Retry automatique intégration** | ARB-MVP-05 — `mvp-arbitration-validation.md` ; reprise manuelle seule au MVP |
| **Portail client** | ARB-MVP-02 — notifications uniquement ; portail en évolution ultérieure |
| **Suivi détaillé des notifications** | ARB-MVP-07 — évolution ultérieure ; indicateur échecs sur dashboard interne |
| **Personnalisation avancée dashboard** | `ux-ui-brief-validation.md` — pas de personnalisation MVP |
| **BI avancée / prédictif** | `ux-ui-brief.md` §7 — limites MVP |
| **Détails techniques visibles par défaut dans les erreurs** | Atelier simulé §4 — message métier prioritaire |
| **Détails avancés fiche demande** | Atelier simulé — checklist minimale ; champs étendus hors MVP |
| **Photos / pièces jointes CR obligatoires** | Compte rendu atelier §7.2 — RG-R03 extension future |

---

## 8. Garde-fous

- [x] pas de backlog produit ;
- [x] pas de user stories produites ;
- [x] pas de cas de tests produits ;
- [x] pas de scénarios de tests produits ;
- [x] pas de stratégie de recette produite ;
- [x] pas de code applicatif produit ;
- [x] pas de delivery ouvert ;
- [x] pas de publication Notion ;
- [x] pas d'appel API Notion ;
- [x] pas de secret affiché ;
- [x] `.env` non modifié ;
- [x] pas de PR créée — branche longue `analysis/interv360-clarification-cycle`.

---

## 9. Conclusion

Les clarifications MVP issues de l'atelier simulé **stabilisent le périmètre** avant conception détaillée :

- le **MVP est mieux borné** sur UX, statuts, erreurs, clôture et exclusions ;
- l'**UX est plus cadrée** — 8 points ouverts du brief validé sont tranchés ;
- les **statuts et règles RG** restent à **formaliser** dans les documents dédiés du cycle.

**Prochaine étape recommandée** : produire **`rules-rg-prioritization.md`** sur la branche `analysis/interv360-clarification-cycle`.

---

*Clarifications MVP post-atelier — Interv360 — gouvernance SFIA.*

# Interv360 — Support de tenue / compte rendu atelier clarification

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Type** : Support de tenue + compte rendu post-atelier  
**Statut** : Atelier simulé — décisions de cadrage fictives mais cohérentes avec les sources.  
**Source amont** : `clarification-workshop-preparation.md`

---

## 1. Informations atelier

| Élément | Valeur |
|---------|--------|
| **Date** | 2026-06-27 (simulé) |
| **Durée** | 2 h 10 |
| **Animateur** | Business Analyst (fictif) |
| **Participants** | PO (fictif), Concepteur fonctionnel (fictif), UX/UI (fictif), QA (fictif), Architecte (fictif), PM (fictif) |
| **Rôles représentés** | PO, BA, UX/UI, QA, Architecte, PM |
| **Statut atelier** | Tenu (simulé) |

---

## 2. Rappel objectif

L'atelier vise à **clarifier les ambiguïtés** identifiées par l'**analyse QA transverse** (`qa-transverse-analysis.md`) avant toute **conception détaillée**, **maquette Figma** ou **architecture fonctionnelle**.

**Garde-fous de l'atelier :**

- pas de backlog ;
- pas de user stories ;
- pas de cas de tests ;
- pas de scénarios de tests ;
- pas de stratégie de recette ;
- pas de delivery ;
- pas de publication Notion ;
- pas d'appel API Notion.

---

## 3. Ordre du jour suivi

| Séquence | Prévue | Tenue ? | Commentaire |
|----------|--------|---------|-------------|
| 1. Rappel contexte et garde-fous | 10 min | Oui | Alignement sur sources `qa-transverse-analysis.md`, `ux-ui-brief-validation.md`, `mvp-arbitration-validation.md` |
| 2. Points UX ouverts | 25 min | Oui | 8 points tranchés — voir §4 |
| 3. Règles RG prioritaires | 30 min | Oui | 6 règles clarifiées au niveau macro — voir §5 |
| 4. Mapping statuts | 20 min | Oui | Première table MVP — voir §6 |
| 5. Clôture sans signature | 15 min | Oui | Décision prudente alignée ARB-MVP-03 — voir §7 |
| 6. Géoloc / IA | 15 min | Oui | Hors MVP — voir §8 |
| 7. Décisions et suites | 15 min | Oui | Documents de sortie identifiés — voir §10 |

---

## 4. Décisions sur les 8 points UX ouverts

*Source : `ux-ui-brief-validation.md` §4.*

| Point UX | Question initiale | Décision | Statut | Commentaire / justification |
|----------|-------------------|----------|--------|----------------------------|
| **Niveau de détail fiche demande** | Checklist qualification minimale vs détaillée ? | **Checklist minimale MVP** ; détails avancés (historique enrichi, pièces jointes multiples, champs optionnels étendus) **hors MVP** | Décidé | Réduit la charge de saisie manager SAV ; cohérent avec risque R-M05 (complexité CR) et parcours qualification §6 |
| **Format exact du compte rendu** | Web seul vs export PDF ? | **Web seul au MVP** ; export PDF **hors MVP** ou extension future | Décidé | Limite le périmètre livrable client ; aligné ARB-MVP-03 (signature structurée mais non bloquante) sans imposer génération documentaire |
| **Vue jour/semaine du planning** | Vue par défaut planning ? | **Vue jour par défaut** ; vue semaine en **lecture secondaire** si implémentation simple | Décidé | Priorité opérationnelle terrain et dispatch quotidien ; semaine utile au pilotage sans devenir vue principale MVP |
| **Niveau de détail alertes dashboard** | Nombre max alertes visibles ? | **Nombre limité d'alertes visibles** (top 5 à 7) ; **hiérarchisées par criticité** ; le reste accessible via lien « Voir toutes » | Décidé | Garde-fou surcharge cognitive (R-UX01, `dashboard-kpi-ux-review.md`) ; alertes actionnables en premier |
| **Wording des statuts** | Libellés utilisateur unifiés (RG-I05) ? | **Liste de statuts métier unifiée pour le MVP** — libellés FR communs sur tous les écrans | Décidé | Alimente RG-I05 et la table §6 ; évite divergence CRM simulé / Interv360 / filtres dashboard |
| **Priorité KPI above the fold** | Top 5–7 KPI prioritaires dashboard SAV ? | **Top 5 à 7 KPI maximum** visibles sans scroll sur dashboard SAV ; les autres KPI restent accessibles en dessous ou via section dépliante | Décidé | Cohérent avec 12 KPI documentés mais priorisation visuelle explicite ; limite surcharge |
| **Comportement mobile technicien** | Priorité mobile vs desktop MVP ? | **Mobile prioritaire pour le technicien** ; parcours simplifié (contexte, actions terrain, CR, statut) ; desktop secondaire pour consultation bureau | Décidé | Aligné persona technicien terrain (`ux-ui-brief.md` §3) et parcours critique exécution intervention |
| **Représentation erreurs intégration** | Détail log vs message métier ? | **Message métier visible** en premier ; **détail technique masqué ou secondaire** (accordéon / lien admin) | Décidé | Aligné ARB-MVP-05 et point ouvert QA ; manager comprend l'impact sans exposition stack technique |

**Statuts autorisés** : Décidé | Reporté | À approfondir | Hors MVP

**Impact documentaire** : consolider dans `mvp-clarifications.md` (section UX).

---

## 5. Décisions sur les règles RG prioritaires

| Règle | Sujet | Décision / orientation | Niveau de maturité | Document cible |
|-------|-------|------------------------|--------------------|----------------|
| **RG-C04** | Anti-doublon cross-canal (CRM, email, saisie) | **Détection** sur combinaison : client + référence demande + date approximative (±48 h) + objet / motif. **Pas de blocage automatique** : signalement au manager SAV avec proposition de fusion ou ignore. | Clarifié macro | `rules-rg-prioritization.md` |
| **RG-C05** | Données minimales obligatoires à la création | Champs obligatoires MVP : **client**, **contact**, **canal**, **motif**, **priorité**, **adresse/site**, **créneau souhaité si disponible**. Variantes par canal à préciser au niveau opérationnel. | Clarifié macro | `rules-rg-prioritization.md` |
| **RG-I05** | Mapping des statuts plateforme ↔ systèmes simulés | Créer une **table MVP unique** de correspondance Interv360 / CRM simulé / libellés utilisateur (première version §6). | Clarifié macro | `status-mapping.md` |
| **RG-I06** | Erreurs / anomalies d'intégration (détection, gravité) | **Trois niveaux de gravité** : (1) **information** — sync différée, pas de blocage ; (2) **bloquant métier** — action manager requise ; (3) **bloquant synchronisation** — données incohérentes, reprise manuelle. | Clarifié macro | `mvp-clarifications.md` ou annexe erreurs |
| **RG-R02** | Signature client obligatoire ou optionnelle | **Signature optionnelle**, structurée (nom, date, canal de capture) mais **non bloquante** pour la clôture. Confirmé aligné ARB-MVP-03. | Clarifié macro | `closure-without-signature.md` |
| **RG-R05** | Conditions de clôture d'une intervention | **Compte rendu obligatoire** ; **statut intervention finalisé** ; **motif obligatoire si absence de signature** ; **trace conservée** dans l'historique. | Clarifié macro | `closure-without-signature.md` |

**Niveaux de maturité** : À définir | Clarifié macro | Clarifié opérationnel | À documenter dans règle dédiée | ADR candidate

**Suite** : chaque règle reste à **documenter ensuite** dans les documents de sortie — aucune rédaction opérationnelle détaillée dans ce compte rendu.

---

## 6. Mapping / wording des statuts — décisions capturées

### 6.1 Statuts retenus ou candidats

*Première version issue de l'atelier simulé — à formaliser dans `status-mapping.md`.*

| Statut | Libellé utilisateur | Origine | Visible par | Déclenche une alerte ? | Commentaire |
|--------|---------------------|---------|-------------|------------------------|-------------|
| À qualifier | À qualifier | Interv360 / CRM simulé | Manager SAV | Oui si ancien | Délai seuil à préciser dans `status-mapping.md` |
| Qualifiée | Qualifiée | Interv360 | Manager SAV | Non | Étape interne post-qualification |
| Planifiée | Planifiée | Interv360 | Manager SAV, Technicien | Non | Créneau affecté |
| En cours | En cours | Interv360 | Manager SAV, Technicien | Non | Intervention démarrée terrain |
| En attente client | En attente client | Interv360 | Manager SAV, Technicien | Oui si délai dépassé | Blocage externe documenté |
| Clôturée | Clôturée | Interv360 / CRM simulé | Manager SAV, Dirigeant | Non | Sync CRM avec indicateur signature si absente |
| En retard | En retard | Dashboard | Manager SAV, Dirigeant | Oui | Statut calculé (dérivé planning / SLA) |
| Anomalie d'intégration | Anomalie d'intégration | Intégration | Manager SAV, Admin / support | Oui | Lié RG-I06 ; reprise manuelle ARB-MVP-05 |

**Origines possibles** : Interv360 | CRM simulé | Intégration | Dashboard

**Visibilités possibles** : Manager SAV | Technicien | Dirigeant | Admin / support

*Candidats non retenus MVP dans cette version : « Notification en échec » — reporté à `mvp-clarifications.md` (indicateur dashboard sans statut dédié, aligné préparation atelier).*

### 6.2 Questions restantes sur les statuts

| Question | Impact | Responsable clarification | Échéance |
|----------|--------|---------------------------|----------|
| Quels statuts sont visibles par le manager SAV ? | Dashboard, filtres, alertes | BA — document `status-mapping.md` | Prochain livrable cycle |
| Quels statuts sont visibles par le technicien ? | Parcours terrain, fiche intervention | BA — document `status-mapping.md` | Prochain livrable cycle |
| Quels statuts viennent du CRM simulé ? | Mapping RG-I05, sync | Architecte — `status-mapping.md` | Prochain livrable cycle |
| Quels statuts sont internes à Interv360 ? | Cohérence cycle SAV | BA — `status-mapping.md` | Prochain livrable cycle |
| Quels statuts déclenchent une alerte ? | Dashboard SAV / dirigeant | PO / BA — `status-mapping.md` | Prochain livrable cycle |
| Quels statuts permettent la clôture ? | RG-R05, sync CRM | BA — `closure-without-signature.md` | Prochain livrable cycle |
| Liste canonique libellés utilisateur (FR) ? | Wording UX, RG-I05 | UX/UI — `status-mapping.md` | Prochain livrable cycle |

*Réponses partielles capturées en §6.1 ; formalisation complète reportée au document dédié.*

---

## 7. Clôture sans signature

*Contexte amont : ARB-MVP-03 — signature optionnelle, non bloquante (`mvp-arbitration-validation.md`).*

### 7.1 Décision de principe

| Sujet | Décision | Commentaire |
|-------|----------|-------------|
| Signature obligatoire ? | **Non** | Confirmé ARB-MVP-03 |
| Signature optionnelle ? | **Oui** | Capture structurée si le client est présent et consentant |
| Clôture possible sans signature ? | **Oui** | Sous conditions minimales ci-dessous |
| Preuve minimale requise | **Compte rendu obligatoire** + **motif d'absence de signature** | Pas de signature requise comme preuve unique |
| Trace conservée | **Oui** — historique intervention + indicateur « signature absente » | Visible manager SAV et sync CRM simulée |

**Décision simulée complémentaire :**

- synchronisation CRM simulée avec statut **clôturé** + indicateur **signature absente** ;
- **aucun blocage de clôture** uniquement lié à l'absence de signature.

**Document cible** : `closure-without-signature.md`

### 7.2 Champs minimaux du compte rendu

| Champ CR | Obligatoire ? | Raison | Source / remarque |
|--------|---------------|--------|-------------------|
| Résumé intervention | Oui | Preuve minimale de réalisation | RG-R01 — à détailler opérationnellement |
| Actions réalisées | Oui | Traçabilité SAV | RG-R01 |
| Statut final intervention | Oui | Condition RG-R05 | Aligné clôture |
| Motif absence signature | Oui si pas de signature | Traçabilité conformité ARB-MVP-03 | RG-R02, RG-R05 |
| Photos / pièces jointes | Non (MVP) | Extension future RG-R03 | Hors périmètre détaillé atelier |
| Signature client | Non | Optionnelle | RG-R02 |

*Liste minimale simulée — détail des libellés et validations à produire dans `closure-without-signature.md` et `mvp-clarifications.md`.*

---

## 8. Géolocalisation / IA

| Sujet | Décision | Statut MVP | Justification | Suite |
|-------|----------|------------|---------------|-------|
| **Géolocalisation** | **Hors MVP** | Extension future | Éviter critères flottants ; limiter complexité ; réduire risques données sensibles, coûts, gouvernance et sécurité | `geo-ai-arbitration.md` |
| **IA légère** | **Hors MVP** | Extension future | Même logique ; Q7/Q15 et A-IA01 non validés MVP ; trajectoire future documentée sans engagement delivery | `geo-ai-arbitration.md` |

**Statuts MVP** : Géoloc — Extension future | IA — Extension future

**Rappel** : aligné recommandation prudente `qa-transverse-analysis.md` et préparation atelier — **hors MVP par défaut**.

---

## 9. Décisions structurantes / ADR candidates

| Décision | Pourquoi structurante | ADR candidate ? | Document cible |
|----------|----------------------|-------------------|----------------|
| Mapping statuts durable | Impact CRM, calendrier, plateforme, UX | **Oui** | `status-mapping.md` |
| Gestion erreurs intégration | Comportement système, écran anomalies | **Oui** | ADR candidate (détail dans `mvp-clarifications.md`) |
| Clôture sans signature | Cycle SAV, facturation simulée | **Oui** | `closure-without-signature.md` |
| Géoloc / IA hors MVP | Périmètre MVP, coûts, données sensibles | **Oui** (périmètre) | `geo-ai-arbitration.md` |
| Synchronisation CRM simulé | Contrats API, mapping (ARB-MVP-04) | **Oui** | ADR candidate — lien RG-I05, statuts clôturés |

*Les ADR ne sont pas rédigées dans cette tâche — identification uniquement.*

---

## 10. Actions post-atelier

| Action | Responsable | Document cible | Priorité | Échéance |
|--------|-------------|----------------|----------|----------|
| Consolider décisions 8 points UX | BA (fictif) | `mvp-clarifications.md` | Haute | Prochain commit cycle |
| Détailler règles RG prioritaires | BA (fictif) | `rules-rg-prioritization.md` | Haute | Cycle clarification |
| Formaliser mapping statuts | BA + Architecte (fictif) | `status-mapping.md` | Haute | Cycle clarification |
| Documenter clôture sans signature | BA (fictif) | `closure-without-signature.md` | Haute | Cycle clarification |
| Arbitrer géoloc / IA (trajectoire future) | PO + Architecte (fictif) | `geo-ai-arbitration.md` | Moyenne | Cycle clarification |
| Identifier ADR candidates | Architecte (fictif) | ADR (phase architecture) | Moyenne | Après documents de sortie |

*Ces documents ne sont pas créés dans la présente tâche — hors `clarification-workshop-minutes.md` et synthèse.*

---

## 11. Points non tranchés

| Sujet | Pourquoi non tranché | Risque si non traité | Prochaine étape |
|-------|---------------------|----------------------|-----------------|
| RG-R01 — détail opérationnel champs CR | Hors périmètre macro atelier | CR trop vague ou trop lourd | `mvp-clarifications.md` + `closure-without-signature.md` |
| Seuils exacts alertes (délais, SLA) | Nécessite données pilote | Alertes peu fiables | `status-mapping.md` |
| Statut « Notification en échec » dédié ou indicateur | Reporté pour simplifier MVP | Visibilité partielle échecs notification | `mvp-clarifications.md` |
| Variantes RG-C05 par canal (email vs CRM) | Temps atelier insuffisant | Champs manquants selon canal | `rules-rg-prioritization.md` |
| Retry automatique intégration | ARB-MVP-05 : hors MVP confirmé | Confusion avec reprise manuelle | Rappel dans `mvp-clarifications.md` |

---

## 12. Garde-fous respectés

- [x] pas de cas de tests produits ;
- [x] pas de scénarios de tests produits ;
- [x] pas de stratégie de recette produite ;
- [x] pas de backlog produit ;
- [x] pas de user stories produites ;
- [x] pas de code applicatif produit ;
- [x] pas de delivery ouvert ;
- [x] pas de publication Notion ;
- [x] pas d'appel API Notion ;
- [x] pas de secret affiché ;
- [x] `.env` non modifié.

---

## 13. Conclusion atelier

### Synthèse

- **Décisions principales** : 8 points UX tranchés ; 6 règles RG clarifiées au niveau macro ; première table de statuts MVP ; clôture sans signature validée ; géoloc et IA hors MVP.
- **Sujets reportés** : détail RG-R01, seuils alertes, notification en échec, variantes canal RG-C05.
- **Documents à produire** : `mvp-clarifications.md`, `rules-rg-prioritization.md`, `status-mapping.md`, `closure-without-signature.md`, `geo-ai-arbitration.md`.
- **Prochaine étape recommandée** : produire `mvp-clarifications.md` sur la branche `analysis/interv360-clarification-cycle`.

---

*Compte rendu atelier clarification Interv360 — gouvernance SFIA — atelier simulé.*

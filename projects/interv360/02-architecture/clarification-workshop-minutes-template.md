# Interv360 — Support de tenue / compte rendu atelier clarification

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Type** : Support de tenue + compte rendu post-atelier  
**Statut** : Template — atelier non tenu  
**Source amont** : `clarification-workshop-preparation.md`

---

## 1. Informations atelier

| Élément | Valeur |
|---------|--------|
| **Date** | À renseigner |
| **Durée** | À renseigner |
| **Animateur** | À renseigner |
| **Participants** | À renseigner |
| **Rôles représentés** | PO, BA, UX/UI, QA, Architecte, PM, RSSI si nécessaire |
| **Statut atelier** | Prévu / Tenu / À compléter |

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
| 1. Rappel contexte et garde-fous | 10 min | À renseigner | À renseigner |
| 2. Points UX ouverts | 25 min | À renseigner | À renseigner |
| 3. Règles RG prioritaires | 30 min | À renseigner | À renseigner |
| 4. Mapping statuts | 20 min | À renseigner | À renseigner |
| 5. Clôture sans signature | 15 min | À renseigner | À renseigner |
| 6. Géoloc / IA | 15 min | À renseigner | À renseigner |
| 7. Décisions et suites | 15 min | À renseigner | À renseigner |

---

## 4. Décisions sur les 8 points UX ouverts

*Source : `ux-ui-brief-validation.md` §4.*

| Point UX | Question initiale | Décision | Statut | Commentaire / justification |
|----------|-------------------|----------|--------|----------------------------|
| **Niveau de détail fiche demande** | Checklist qualification minimale vs détaillée ? | À renseigner | À renseigner | À renseigner |
| **Format exact du compte rendu** | Web seul vs export PDF ? | À renseigner | À renseigner | À renseigner |
| **Vue jour/semaine du planning** | Vue par défaut planning ? | À renseigner | À renseigner | À renseigner |
| **Niveau de détail alertes dashboard** | Nombre max alertes visibles ? | À renseigner | À renseigner | À renseigner |
| **Wording des statuts** | Libellés utilisateur unifiés (RG-I05) ? | À renseigner | À renseigner | À renseigner |
| **Priorité KPI above the fold** | Top 5–7 KPI prioritaires dashboard SAV ? | À renseigner | À renseigner | À renseigner |
| **Comportement mobile technicien** | Priorité mobile vs desktop MVP ? | À renseigner | À renseigner | À renseigner |
| **Représentation erreurs intégration** | Détail log vs message métier ? | À renseigner | À renseigner | À renseigner |

**Statuts autorisés** : Décidé | Reporté | À approfondir | Hors MVP

*Aucune décision n'est pré-remplie dans ce template.*

---

## 5. Décisions sur les règles RG prioritaires

| Règle | Sujet | Décision / orientation | Niveau de maturité | Document cible |
|-------|-------|------------------------|--------------------|----------------|
| **RG-C04** | Anti-doublon cross-canal (CRM, email, saisie) | À renseigner | À définir | `rules-rg-prioritization.md` |
| **RG-C05** | Données minimales obligatoires à la création | À renseigner | À définir | `rules-rg-prioritization.md` |
| **RG-I05** | Mapping des statuts plateforme ↔ systèmes simulés | À renseigner | À définir | `status-mapping.md` |
| **RG-I06** | Erreurs / anomalies d'intégration (détection, gravité) | À renseigner | À définir | `mvp-clarifications.md` ou annexe erreurs |
| **RG-R02** | Signature client obligatoire ou optionnelle | À renseigner | À définir | `closure-without-signature.md` |
| **RG-R05** | Conditions de clôture d'une intervention | À renseigner | À définir | `closure-without-signature.md` |

**Niveaux de maturité** : À définir | Clarifié macro | Clarifié opérationnel | À documenter dans règle dédiée | ADR candidate

*Les règles finales ne sont pas rédigées dans ce template.*

---

## 6. Mapping / wording des statuts — décisions capturées

### 6.1 Statuts retenus ou candidats

| Statut | Libellé utilisateur | Origine | Visible par | Déclenche une alerte ? | Commentaire |
|--------|---------------------|---------|-------------|------------------------|-------------|
| À renseigner | À renseigner | À confirmer | À confirmer | À renseigner | À renseigner |
| À renseigner | À renseigner | À confirmer | À confirmer | À renseigner | À renseigner |

**Origines possibles** : Interv360 | CRM simulé | Intégration | Dashboard | À confirmer

**Visibilités possibles** : Manager SAV | Technicien | Dirigeant | Admin / support | À confirmer

*Candidats mentionnés en préparation atelier (non définitifs) : À qualifier, Planifiée, En cours, Clôturée, En retard, Anomalie d'intégration ouverte, Notification en échec — à valider ou compléter en atelier.*

### 6.2 Questions restantes sur les statuts

| Question | Impact | Responsable clarification | Échéance |
|----------|--------|---------------------------|----------|
| Quels statuts sont visibles par le manager SAV ? | Dashboard, filtres, alertes | À renseigner | À renseigner |
| Quels statuts sont visibles par le technicien ? | Parcours terrain, fiche intervention | À renseigner | À renseigner |
| Quels statuts viennent du CRM simulé ? | Mapping RG-I05, sync | À renseigner | À renseigner |
| Quels statuts sont internes à Interv360 ? | Cohérence cycle SAV | À renseigner | À renseigner |
| Quels statuts déclenchent une alerte ? | Dashboard SAV / dirigeant | À renseigner | À renseigner |
| Quels statuts permettent la clôture ? | RG-R05, sync CRM | À renseigner | À renseigner |
| Liste canonique libellés utilisateur (FR) ? | Wording UX, RG-I05 | À renseigner | À renseigner |

---

## 7. Clôture sans signature

*Contexte amont : ARB-MVP-03 — signature optionnelle, non bloquante (`mvp-arbitration-validation.md`).*

### 7.1 Décision de principe

| Sujet | Décision | Commentaire |
|-------|----------|-------------|
| Signature obligatoire ? | À renseigner | À renseigner |
| Signature optionnelle ? | À renseigner | À renseigner |
| Clôture possible sans signature ? | À renseigner | À renseigner |
| Preuve minimale requise | À renseigner | À renseigner |
| Trace conservée | À renseigner | À renseigner |

### 7.2 Champs minimaux du compte rendu

| Champ CR | Obligatoire ? | Raison | Source / remarque |
|--------|---------------|--------|-------------------|
| À renseigner | À renseigner | À renseigner | RG-R01 — À arbitrer en cadrage |
| À renseigner | À renseigner | À renseigner | À renseigner |

*Ne pas compléter tant que l'atelier n'a pas tranché.*

---

## 8. Géolocalisation / IA

| Sujet | Décision | Statut MVP | Justification | Suite |
|-------|----------|------------|---------------|-------|
| **Géolocalisation** | À renseigner | À arbitrer | À renseigner | `geo-ai-arbitration.md` |
| **IA légère** | À renseigner | À arbitrer | À renseigner | `geo-ai-arbitration.md` |

**Statuts MVP possibles** : In MVP | Hors MVP | Extension future | À arbitrer

**Rappel préparation atelier** : recommandation prudente **hors MVP par défaut** pour éviter des critères flottants — **non décisionnel** dans ce template.

---

## 9. Décisions structurantes / ADR candidates

| Décision | Pourquoi structurante | ADR candidate ? | Document cible |
|----------|----------------------|-----------------|----------------|
| Mapping statuts durable | Impact CRM, calendrier, plateforme, UX | À renseigner | `status-mapping.md` |
| Gestion erreurs intégration | Comportement système, écran anomalies | À renseigner | ADR candidate |
| Clôture sans signature | Cycle SAV, facturation simulée | À renseigner | `closure-without-signature.md` |
| Géoloc / IA hors ou in MVP | Périmètre MVP, coûts, données sensibles | À renseigner | `geo-ai-arbitration.md` |
| Synchronisation CRM simulé | Contrats API, mapping (ARB-MVP-04) | À renseigner | ADR candidate |

---

## 10. Actions post-atelier

| Action | Responsable | Document cible | Priorité | Échéance |
|--------|-------------|----------------|----------|----------|
| Consolider décisions 8 points UX | À renseigner | `mvp-clarifications.md` | À renseigner | À renseigner |
| Détailler règles RG prioritaires | À renseigner | `rules-rg-prioritization.md` | À renseigner | À renseigner |
| Formaliser mapping statuts | À renseigner | `status-mapping.md` | À renseigner | À renseigner |
| Documenter clôture sans signature | À renseigner | `closure-without-signature.md` | À renseigner | À renseigner |
| Arbitrer géoloc / IA | À renseigner | `geo-ai-arbitration.md` | À renseigner | À renseigner |
| Identifier ADR candidates | À renseigner | ADR (phase architecture) | À renseigner | À renseigner |

*Ces documents ne sont pas créés dans la présente tâche.*

---

## 11. Points non tranchés

| Sujet | Pourquoi non tranché | Risque si non traité | Prochaine étape |
|-------|---------------------|----------------------|-----------------|
| À renseigner | À renseigner | À renseigner | À renseigner |
| À renseigner | À renseigner | À renseigner | À renseigner |

---

## 12. Garde-fous respectés

- [ ] pas de cas de tests produits ;
- [ ] pas de scénarios de tests produits ;
- [ ] pas de stratégie de recette produite ;
- [ ] pas de backlog produit ;
- [ ] pas de user stories produites ;
- [ ] pas de code applicatif produit ;
- [ ] pas de delivery ouvert ;
- [ ] pas de publication Notion ;
- [ ] pas d'appel API Notion ;
- [ ] pas de secret affiché ;
- [ ] `.env` non modifié.

---

## 13. Conclusion atelier

**À compléter après tenue de l'atelier.**

### Synthèse attendue

- **Décisions principales** : À renseigner
- **Sujets reportés** : À renseigner
- **Documents à produire** : À renseigner
- **Prochaine étape recommandée** : À renseigner

---

*Template compte rendu atelier clarification Interv360 — gouvernance SFIA — atelier non tenu.*

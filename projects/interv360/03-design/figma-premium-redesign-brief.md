# Interv360 — Brief Figma Premium Redesign

**Projet** : Interv360  
**Cycle** : Premium Design System  
**Étape** : FIGMA-01 / FIGMA-02  
**Objectif** : Reconcevoir les maquettes Figma avant implémentation UI.

---

## 1. Intention

Interv360 doit donner l'impression d'un vrai produit SaaS métier, crédible pour une démonstration.

L'objectif n'est pas seulement d'être fonctionnel, mais de donner envie :

- produit sérieux ;
- interface moderne ;
- design premium ;
- usage terrain / SAV ;
- lisibilité métier ;
- crédibilité en présentation.

---

## 2. Problème actuel

L'IHM actuelle est encore trop démonstrateur technique :

- bandeaux explicatifs trop visibles ;
- écran guidé ;
- rendu centré ;
- faible impact visuel ;
- peu de profondeur produit ;
- pas assez proche de l'intention Figma.

---

## 3. Objectif Figma

Retravailler les maquettes pour obtenir une direction visuelle plus ambitieuse avant implémentation.

Écrans à produire :

1. Page Demandes
2. Fiche demande
3. Journal / timeline
4. Dashboard léger
5. Création demande future, optionnel

---

## 4. Direction produit

Positionnement :

> Interv360 est une application SaaS de suivi, qualification et pilotage des demandes SAV terrain.

Mots-clés :

- premium ;
- métier ;
- terrain ;
- SAV ;
- pilotage ;
- efficacité ;
- traçabilité ;
- intervention ;
- planning ;
- supervision opérationnelle.

---

## 5. Direction visuelle

Style attendu :

- sidebar sombre ;
- accent teal / vert pétrole ;
- fond gris clair ;
- cards blanches ;
- typographie nette ;
- badges colorés ;
- tableau élégant ;
- data dense ;
- icônes sobres ;
- shadow légère ;
- radius modernes ;
- hiérarchie forte.

---

## 6. Page Demandes — attentes

La page demandes doit devenir la page vitrine.

Elle doit contenir :

- sidebar sombre ;
- header produit ;
- breadcrumb ;
- titre "Demandes SAV" ;
- sous-titre métier ;
- bouton "Nouvelle demande" ;
- cards KPI :
  - À qualifier ;
  - Qualifiées ;
  - Planifiées ;
  - éventuellement En retard / Anomalies ;
- recherche ;
- filtres ;
- tableau demandes ;
- badges canal ;
- badges priorité ;
- badges statut ;
- indicateurs retard / anomalie ;
- action "Ouvrir".

Objectif :

> en une capture, on doit comprendre que c'est une vraie application SaaS.

---

## 7. Fiche demande — attentes

La fiche demande doit donner de la profondeur métier.

Elle doit contenir :

- en-tête demande ;
- référence ;
- client ;
- statut ;
- priorité ;
- canal ;
- responsable ;
- dates ;
- informations demandeur ;
- contexte équipement ;
- actions disponibles ;
- bloc qualification ;
- bloc planning ;
- bloc intervention ;
- bloc rapport ;
- panneau latéral résumé ;
- timeline / journal.

Objectif :

> donner l'impression d'un vrai outil de suivi d'intervention.

---

## 8. Journal / timeline — attentes

Le journal doit valoriser l'audit trail.

Il doit montrer :

- acteur ;
- rôle ;
- action ;
- ancien statut ;
- nouveau statut ;
- date ;
- commentaire éventuel ;
- icône d'événement ;
- timeline verticale.

Objectif :

> rendre la traçabilité visible et compréhensible.

---

## 9. Dashboard léger — attentes

Le dashboard est optionnel mais utile pour la présentation.

Il peut contenir :

- demandes ouvertes ;
- demandes en retard ;
- demandes planifiées ;
- taux de qualification ;
- interventions à venir ;
- activité récente ;
- répartition par canal ;
- répartition par statut.

Objectif :

> donner une impression de produit complet.

---

## 10. Création demande future — optionnel

Même si le CRUD complet reste hors scope technique, une maquette peut préparer la vision future.

Elle peut montrer :

- client ;
- canal ;
- priorité ;
- catégorie ;
- équipement ;
- description ;
- affectation ;
- pièces jointes fictives ;
- bouton créer.

Objectif :

> préparer un futur cycle produit sans l'implémenter maintenant.

---

## 11. Contraintes d'implémentation

L'implémentation post-Figma devra préserver :

- backend existant ;
- API existante ;
- SQLite ;
- mode local ;
- mode API ;
- request model ;
- audit trail ;
- workflow ;
- statuts ;
- permissions ;
- tests existants.

Hors scope technique :

- auth réelle ;
- CRM ;
- données réelles ;
- CRUD complet ;
- création demande fonctionnelle ;
- nouveau statut ;
- `STAT-08`.

---

## 12. Prompt Figma / design

Prompt à utiliser dans Figma AI ou comme brief de conception :

```text
Design a premium SaaS web application interface for "Interv360", a field service / after-sales request management product.
The product helps teams monitor, qualify, prioritize, plan and track SAV requests coming from multiple channels such as CRM, email and manual entry.
The visual direction should feel modern, professional, premium and credible for a product demo.
Use:
- dark navy sidebar
- teal primary accent
- light grey application background
- white cards
- clean data tables
- professional status badges
- KPI cards
- strong typography hierarchy
- subtle shadows
- rounded cards
- dense but readable layout
Create screens:
1. Requests list page
2. Request detail page
3. Audit trail / timeline view
4. Lightweight dashboard
5. Optional future "new request" form concept
The main Requests page should include:
- left dark sidebar with Interv360 branding
- top header with breadcrumb and current user
- title "Demandes SAV"
- subtitle explaining monitoring and prioritization
- primary CTA "Nouvelle demande"
- KPI cards for À qualifier, Qualifiées, Planifiées, Retard / Anomalies
- search bar
- filters for status, channel and period
- premium data table with columns: Référence, Client, Canal, Priorité, Statut, Date, Affectation, Indicateurs, Action
- status badges, priority badges, channel badges
The detail page should include:
- request header
- status and priority
- client and requester information
- equipment / site context
- workflow actions
- planning block
- intervention block
- report block
- audit trail timeline
Do not design it as a technical demo. Make it look like a real SaaS product ready to be shown to stakeholders.
```

---

## 13. Critères de validation Figma

La maquette sera considérée prête si :

- elle donne une impression premium ;
- elle ressemble à un vrai produit SaaS ;
- la page demandes est nettement plus forte que l'IHM actuelle ;
- la fiche demande est crédible ;
- le journal valorise l'audit trail ;
- la charte est cohérente ;
- l'implémentation peut être faite sans toucher au backend ;
- les limites MVP restent respectées.

# Interv360 — Premium Design System

**Projet** : Interv360  
**Cycle** : Premium Design System  
**Mode** : SFIA Fast Track — UI Design Fidelity / Premium SaaS  
**Statut** : Cadrage opérationnel  
**Branche** : `ui/interv360-premium-design-system`

---

## 1. Objectif

Ce cycle vise à transformer l'IHM Interv360 en interface SaaS premium, présentable et cohérente avec l'intention Figma.

Le MVP fonctionnel est déjà clôturé et tagué `v0.1.0-mvp`.

L'objectif est désormais de renforcer l'impact visuel, la crédibilité produit et la qualité de présentation.

---

## 2. Constat

L'application actuelle est fonctionnelle, mais son IHM conserve encore un rendu de démonstrateur technique :

- bandeaux explicatifs trop visibles ;
- structure orientée runbook ;
- écran guidé centré ;
- design peu aligné avec la maquette Figma ;
- manque d'identité visuelle produit ;
- manque de densité SaaS ;
- manque de finition premium.

La maquette Figma cible montre une interface plus produit :

- sidebar sombre ;
- navigation structurée ;
- header professionnel ;
- page demandes dense ;
- cartes KPI ;
- tableau propre ;
- badges visuels ;
- filtres ;
- bouton d'action principal ;
- identité SaaS plus crédible.

---

## 3. Décision

Ouvrir un cycle UI distinct :

`ui/interv360-premium-design-system`

Ce cycle n'est pas un Lot 7.

Il ne modifie pas le comportement fonctionnel du MVP.

Il vise uniquement :

- alignement visuel ;
- design system léger ;
- expérience de présentation ;
- cohérence Figma ;
- crédibilité produit.

---

## 4. Périmètre

À livrer :

- shell applicatif premium ;
- sidebar sombre ;
- header produit ;
- page demandes alignée Figma ;
- cartes KPI ;
- tableau demandes premium ;
- badges statut / priorité / canal ;
- filtres visuels ;
- bouton "Nouvelle demande" visuel ;
- fiche demande plus professionnelle ;
- journal plus lisible ;
- tokens CSS simples ;
- harmonisation couleurs, spacing, radius, shadows, typographie ;
- suppression ou réduction des éléments trop "démo technique".

---

## 5. Hors scope

Ce cycle n'introduit pas :

- backend ;
- API ;
- SQLite ;
- nouveau modèle métier ;
- nouveau statut ;
- `STAT-08` ;
- nouvelle transition workflow ;
- nouvelle permission ;
- audit trail fonctionnel ;
- auth réelle ;
- token ;
- OAuth/JWT/SSO ;
- CRM ;
- données réelles ;
- CRUD complet ;
- formulaire fonctionnel de création demande ;
- déploiement cloud ;
- Docker ;
- CI/CD lourde.

---

## 6. Garde-fous

Le cycle doit préserver :

- mode local ;
- mode API ;
- données fictives existantes ;
- backend existant ;
- API existante ;
- SQLite existante ;
- request model existant ;
- audit trail existant ;
- workflow existant ;
- statuts existants ;
- transitions existantes ;
- permissions existantes ;
- tests existants.

Le cycle ne doit pas modifier :

- endpoints API ;
- logique backend ;
- scripts npm ;
- workflow CI ;
- tag `v0.1.0-mvp` ;
- `sfia-notion-sync` ;
- Controlled Delivery.

---

## 7. Direction design cible

### 7.1. Identité visuelle

Direction :

- SaaS professionnel ;
- SAV & terrain ;
- moderne ;
- lisible ;
- dense sans être lourd ;
- crédible en présentation.

### 7.2. Layout cible

Structure cible :

- sidebar sombre à gauche ;
- zone principale claire ;
- header supérieur ;
- navigation breadcrumb ;
- page demandes pleine largeur ;
- cards KPI en haut ;
- barre de recherche et filtres ;
- tableau demandes ;
- actions contextuelles.

### 7.3. Palette indicative

Palette à rapprocher de la maquette Figma :

- sidebar : bleu nuit / ardoise ;
- accent principal : vert pétrole / teal ;
- fond page : gris très clair ;
- cards : blanc ;
- bordures : gris doux ;
- texte principal : bleu nuit ;
- texte secondaire : gris bleuté ;
- succès : vert ;
- alerte : orange ;
- erreur / anomalie : rose-rouge ;
- info : bleu.

### 7.4. Composants à harmoniser

- navigation ;
- badges ;
- boutons ;
- cards KPI ;
- tableau ;
- filtres ;
- input search ;
- avatar utilisateur ;
- breadcrumbs ;
- panel détail ;
- journal / timeline.

---

## 8. Incréments du cycle

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| UI-01 | Audit design et cadrage premium | En cours |
| UI-02 | Shell applicatif + design tokens | À faire |
| UI-03 | Page demandes premium | À faire |
| UI-04 | Fiche demande + journal premium | À faire |
| UI-05 | Validations, polish et PR unique | À venir |

---

## 9. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document de cycle UI créé | OK |
| Écart Figma / app actuelle identifié | OK |
| Direction design cible posée | OK |
| Sidebar sombre créée | À faire |
| Header produit créé | À faire |
| Page demandes alignée Figma | À faire |
| Cards KPI premium | À faire |
| Tableau demandes premium | À faire |
| Badges harmonisés | À faire |
| Filtres harmonisés | À faire |
| Fiche demande améliorée | À faire |
| Journal amélioré | À faire |
| Tests frontend OK | À faire |
| Build frontend OK | À faire |
| Backend inchangé | À valider |
| API inchangée | À valider |
| CI inchangée | À valider |
| Garde-fous respectés | À valider |

---

## 10. Décision UI-01

UI-01 valide l'ouverture du cycle **Premium Design System**.

Décisions :

- traiter le design comme un vrai sujet produit ;
- ne pas considérer l'IHM actuelle comme satisfaisante ;
- viser une interface beaucoup plus proche de Figma ;
- produire un rendu présentable et engageant ;
- ne pas modifier le socle fonctionnel ;
- ne pas ouvrir de Lot 7 ;
- conserver le MVP `v0.1.0-mvp` comme borne fonctionnelle ;
- préparer une PR unique en fin de cycle.

---

## 11. Prochaine étape

Exécuter **UI-02** :

Shell applicatif premium + design tokens.

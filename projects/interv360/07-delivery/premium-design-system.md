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
| UI-01 | Audit design et cadrage premium | Réalisé |
| UI-02 | Shell applicatif + design tokens | Réalisé |
| FIGMA-01 | Direction artistique Figma premium | Réalisé |
| FIGMA-02 | Maquettes Figma écrans clés | Réalisé |
| UI-03 | Implémentation Dashboard + Page demandes premium | Réalisé |
| UI-04 | Implémentation fiche demande + journal depuis Figma | À faire |
| UI-05 | Validations, polish et PR unique | À venir |

---

## 9. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document de cycle UI créé | OK |
| Écart Figma / app actuelle identifié | OK |
| Direction design cible posée | OK |
| Sidebar sombre créée | OK |
| Header produit créé | OK |
| Design tokens créés | OK |
| Layout pleine largeur SaaS créé | OK |
| Décision Figma-first prise | OK |
| Maquette dashboard premium | OK |
| Maquette page demandes premium | OK |
| Maquette fiche demande premium | OK |
| Maquette pipeline SAV | OK |
| Maquette journal / timeline premium | OK |
| Implémentation dashboard | OK |
| Implémentation page demandes | OK |
| Implémentation fiche demande | À faire |
| Implémentation journal / timeline | À faire |
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

## 10.1. UI-02 — Shell applicatif premium + design tokens

UI-02 met en place la fondation visuelle premium d'Interv360.

Livré :

- design tokens CSS ;
- palette premium ;
- sidebar sombre ;
- branding Interv360 ;
- navigation latérale produit ;
- header / topbar ;
- zone principale pleine largeur ;
- intégration plus discrète du mode local/API ;
- réduction du rendu démonstrateur centré ;
- préparation des pages UI-03/UI-04.

Préservé :

- backend ;
- API ;
- SQLite ;
- mode local ;
- mode API ;
- request model ;
- audit trail ;
- workflow ;
- statuts ;
- transitions ;
- permissions ;
- scripts npm ;
- CI.

Décision :

> La fondation visuelle premium est posée.  
> UI-03 peut maintenant traiter la page demandes pour la rapprocher fortement de la maquette Figma.

---

## 10.2. FIGMA-01 — Direction artistique Figma premium

FIGMA-01 réoriente le cycle UI vers une approche Figma-first.

Constat :

L'IHM actuelle est fonctionnelle mais ne donne pas encore l'impression d'un vrai produit SaaS premium. Elle reste trop proche d'un démonstrateur technique.

Décision :

> Ne pas poursuivre l'implémentation UI page par page avant d'avoir retravaillé les maquettes Figma.

Objectif :

Produire une direction artistique plus ambitieuse, plus crédible et plus présentable.

Les maquettes doivent permettre de mieux vendre l'application fictive en démonstration.

### Écrans Figma à retravailler

| Écran | Priorité | Objectif |
|------|----------|----------|
| Page Demandes | Très haute | Page vitrine SaaS |
| Fiche demande | Très haute | Donner de la profondeur métier |
| Journal / timeline | Haute | Valoriser l'audit trail |
| Dashboard léger | Moyenne | Donner une impression produit complet |
| Création demande | Optionnelle | Préparer le futur CRUD sans l'implémenter |

### Direction artistique attendue

Le design cible doit être :

- premium ;
- moderne ;
- SaaS ;
- dense mais lisible ;
- crédible en démonstration ;
- proche d'un outil métier terrain ;
- plus ambitieux que la maquette actuelle ;
- plus fort visuellement que l'IHM actuelle.

### Principes visuels

À explorer dans Figma :

- sidebar sombre plus travaillée ;
- header plus premium ;
- cards KPI plus élégantes ;
- tableau plus dense ;
- badges plus qualitatifs ;
- fiche demande en layout deux colonnes ;
- timeline verticale plus visuelle ;
- usage plus fort des icônes ;
- meilleure hiérarchie typographique ;
- spacing plus maîtrisé ;
- ombres et bordures plus modernes ;
- états hover / selected / active plus soignés.

### Contraintes

Les maquettes peuvent montrer une vision plus ambitieuse, mais l'implémentation devra ensuite préserver :

- backend existant ;
- API existante ;
- modèle métier existant ;
- workflow existant ;
- statuts existants ;
- permissions existantes ;
- absence de CRUD complet ;
- absence d'auth réelle ;
- absence de CRM ;
- absence de données réelles.

### Décision FIGMA-01

FIGMA-01 valide :

- l'arrêt temporaire de l'implémentation UI-03 ;
- la priorité donnée au retravail Figma ;
- la nécessité d'une maquette premium avant développement ;
- la volonté d'obtenir une application qui donne envie en présentation.

---

## 10.3. FIGMA-02 — Maquettes Figma premium validées

FIGMA-02 valide les maquettes Figma premium des écrans clés avant reprise de l'implémentation UI.

Livré :

- maquette dashboard / centre de commande SAV ;
- maquette page demandes premium ;
- maquette fiche demande premium ;
- maquette pipeline SAV ;
- maquette journal / timeline premium.

Décision :

> Les maquettes Figma premium sont validées. UI-03 peut reprendre l'implémentation frontend à partir de cette cible.

---

## 10.4. UI-03 — Dashboard Command Center + Page Demandes premium

UI-03 implémente les deux premiers écrans issus de la direction Figma validée.

Livré :

- Dashboard / Centre de commande SAV ;
- KPI command center ;
- focus opérationnel ;
- charge équipe ;
- activité récente ;
- interventions du jour ;
- répartitions statut / canal ;
- page Demandes premium ;
- tableau demandes premium ;
- badges harmonisés ;
- filtres visuels ;
- actions visuelles cohérentes.

Préservé :

- backend ;
- API ;
- SQLite ;
- mode local ;
- mode API ;
- request model ;
- audit trail ;
- workflow ;
- statuts ;
- transitions ;
- permissions ;
- scripts npm ;
- CI.

Décision :

> UI-03 transforme l'accueil et la liste des demandes en interface premium conforme à la cible Figma, sans modification métier.

---

## 11. Prochaine étape

Exécuter **UI-04** :

Implémenter Fiche demande + Pipeline SAV + Historique / Audit Trail premium à partir des maquettes Figma validées.

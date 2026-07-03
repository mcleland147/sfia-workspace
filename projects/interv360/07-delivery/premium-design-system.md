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
| UI-04 | Implémentation fiche demande + journal depuis Figma | Réalisé |
| UI-05 | Validations, polish et PR unique | Réalisé |

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
| Implémentation fiche demande | OK |
| Implémentation pipeline SAV | OK |
| Implémentation journal / timeline | OK |
| Tests frontend OK | OK |
| Build frontend OK | OK |
| Backend inchangé | OK |
| API inchangée | OK |
| CI inchangée | OK |
| Garde-fous respectés | OK |
| Interactions MVP premium reconnectées | OK |
| Chrome MVP legacy isolé | OK |
| Revue finale visuelle post-polish | OK |
| Revue fonctionnelle finale post-polish | OK |
| Tests frontend 202/202 | OK |
| PR body préparé | OK |

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

## 10.5. UI-04 — Fiche demande + Pipeline SAV + Historique premium

UI-04 implémente les écrans détail issus de la direction Figma validée.

Livré :

- fiche demande premium ;
- header demande ;
- badges statut / priorité / retard / canal ;
- Pipeline SAV ;
- étape active visible ;
- prochaine action ;
- SLA dépassé ;
- score d'urgence ;
- panneau opérationnel ;
- technicien affecté ;
- vue d'ensemble ;
- description ;
- qualification ;
- historique court ;
- vue Historique / Audit Trail complète ;
- timeline événementielle ;
- événements critiques ;
- filtres audit.

Préservé :

- backend ;
- API ;
- SQLite ;
- mode local ;
- mode API ;
- request model ;
- audit trail métier ;
- workflow ;
- statuts ;
- transitions ;
- permissions ;
- scripts npm ;
- CI.

Décision :

> UI-04 transforme la fiche demande et l'historique en interfaces premium conformes à la cible Figma, sans modification métier.

---

## 10.6. Correction UI — Réalignement Figma

Une revue visuelle du rendu local a montré que l'implémentation UI-03/UI-04 restait trop éloignée de la cible Figma Make validée.

Décision :

> Suspendre UI-05 tant que le rendu local Dashboard / Demandes / Fiche / Audit Trail n'est pas suffisamment fidèle à la direction Premium SAV Command Center.

Objectif de correction :

- renforcer la fidélité Figma ;
- améliorer le dashboard local ;
- corriger le niveau de finition visuelle ;
- éviter une PR avec un rendu encore trop démonstrateur.

### Correction stratégique — Figma Make comme source UI de vérité

Une revue visuelle a montré que la transposition initiale restait trop éloignée du Figma Make validé.

Décision :

> Le prototype Figma Make devient la source UI de vérité pour les écrans premium.

Conséquence :

- portage fidèle de la structure visuelle Make ;
- réduction des interprétations CSS approximatives ;
- isolation d'une couche UI premium (`projects/interv360/app/src/ui/premium/`) ;
- ajout de Tailwind CSS v4 (`@tailwindcss/vite`) pour reproduire les classes Make ;
- conservation du métier existant (request model, workflow, audit trail, mode local/API) ;
- suppression du chrome démo sur les écrans premium (bandeau démo, navigation « Écran X sur 5 », onglets démo) — conservé uniquement sur l'écran Scénario ;
- couche présentation UI (`premiumPresentationData.ts`, `commandCenterPresentation.ts`) pour les références DEM-248x, clients et assignés Figma sans modifier le backend.

Fichiers premium portés :

| Composant | Rôle |
|-----------|------|
| `PremiumShell.tsx` | Layout principal (sidebar + topbar + contenu) |
| `PremiumSidebar.tsx` | Navigation latérale SAV Command Center |
| `PremiumTopbar.tsx` | Breadcrumb, mode local/API, profil |
| `PremiumDashboard.tsx` | Centre de commande SAV |
| `PremiumRequestsPage.tsx` | Page Demandes |
| `PremiumRequestDetail.tsx` | Fiche demande |
| `PremiumWorkflowPipeline.tsx` | Pipeline SAV |
| `PremiumAuditTrail.tsx` | Historique / Audit Trail |
| `PremiumBadges.tsx` | Badges statut / priorité |
| `premiumPresentationData.ts` | Données présentation UI-only |

Stratégie technique retenue :

- **React 19 + Vite 6** inchangés ;
- **Tailwind CSS v4** ajouté via plugin Vite pour porter les classes Make ;
- pas de shadcn/Radix complet — composants premium isolés en Tailwind pur ;
- anciens composants CSS custom (`DashboardCommandCenter`, `RequestsList`, etc.) conservés mais non utilisés par `App.tsx` ;
- scripts npm, backend, API, SQLite, CI inchangés.

---

### Retour d'expérience — Figma Make vers code

La première transposition du design Figma Make vers l'application Interv360 a montré un écart important entre :

- le rendu cible validé dans Figma Make ;
- le rendu local produit par une implémentation CSS custom interprétée.

Constat :

> Une implémentation « inspirée de Figma » ne suffit pas pour obtenir un rendu premium fidèle.

#### Causes identifiées

1. **Figma Make n'est pas un fichier Figma Design classique**

Le prototype Make fournit principalement un contexte de code React généré, et non une maquette Design classique avec frames, calques, auto-layouts, variables et contraintes directement exploitables comme source pixel-perfect.

2. **Cursor tend à interpréter plutôt qu'à copier**

Lorsqu'il reçoit une cible Figma et une application existante, Cursor cherche souvent à préserver l'architecture locale et à produire une intégration raisonnable.

Cette approche est utile pour préserver le métier, mais elle peut produire une UI seulement approximative si la consigne ne demande pas explicitement un portage fidèle.

3. **Différence de stack UI**

Le prototype Make repose sur une approche proche de :

- React ;
- Vite ;
- Tailwind ;
- composants UI type shadcn/Radix ;
- classes utilitaires ;
- tokens visuels intégrés.

L'application Interv360 disposait initialement d'un CSS custom historique.

Cette différence de stack a limité la fidélité du premier rendu.

4. **Comparaison visuelle insuffisante**

Le code peut compiler et les tests peuvent passer, mais cela ne garantit pas la fidélité visuelle.

La validation design nécessite une comparaison explicite :

- Figma Make cible ;
- rendu local `localhost` ;
- captures ou revue visuelle humaine.

#### Décision retenue

Le prototype Figma Make devient la **source UI de vérité** pour les écrans premium.

Conséquences :

- ne plus demander une simple inspiration du design ;
- porter la structure visuelle Make le plus fidèlement possible ;
- isoler une couche UI premium dédiée ;
- utiliser Tailwind lorsque nécessaire pour rapprocher la stack locale du prototype Make ;
- conserver le métier existant en dehors de cette couche UI ;
- valider visuellement chaque écran avant PR.

#### Règle de portage pour les prochains cycles

Pour tout futur écran premium :

1. lire le contexte Figma Make ;
2. identifier la structure UI cible ;
3. porter la structure JSX / classes / tokens le plus fidèlement possible ;
4. brancher uniquement les données et callbacks nécessaires ;
5. ne pas remplacer la logique métier ;
6. comparer visuellement Figma Make vs localhost ;
7. corriger jusqu'à obtenir une proximité suffisante ;
8. seulement ensuite valider l'incrément.

#### Critère de validation

Un écran premium ne doit pas être considéré comme terminé uniquement parce que :

- le build passe ;
- les tests passent ;
- les composants sont présents.

Il est terminé lorsque :

- le rendu local est visuellement proche de Figma Make ;
- le chrome démo n'est pas visible sur les écrans premium ;
- la densité, les espacements, les cards, les badges, les ombres et la hiérarchie sont cohérents ;
- le métier existant reste préservé ;
- les garde-fous fonctionnels sont respectés.

#### Formulation recommandée pour Cursor

Pour les prochains prompts UI, utiliser une formulation explicite :

> Figma Make is the UI source of truth.
> Do not reinterpret the design.
> Port the Make UI structure as faithfully as possible into the existing app, then connect the existing data and callbacks without changing backend, API, workflow, statuses or permissions.

#### Limite assumée

Le rendu local peut rester légèrement différent du prototype Make lorsque :

- le code Make utilise des assets ou effets non disponibles localement ;
- les mesures exactes ne sont pas exposées par MCP ;
- les contraintes responsive doivent être adaptées ;
- la stack locale impose des ajustements ;
- certains éléments du prototype sont purement décoratifs ou hors scope MVP.

Ces écarts doivent rester mineurs et être validés visuellement.

---

### Correction fonctionnelle — reconnexion des interactions MVP

Le portage Figma Make a amélioré la fidélité visuelle, mais a temporairement rendu certains écrans trop statiques.

Décision :

> La couche premium doit rester une UI produit, pas une simple maquette figée.

Interactions restaurées :

- navigation Dashboard / Demandes / Détail / Journal ;
- ouverture d'une demande depuis le dashboard et la page demandes ;
- retour aux demandes depuis la fiche ;
- accès à l'historique complet ;
- conservation du changement de profil et du mode local/API lorsque disponibles ;
- actions hors scope explicitement visuelles ou désactivées.

Garde-fou :

- aucune action hors scope MVP ne doit devenir fonctionnelle ;
- aucune mutation métier ne doit être créée côté UI premium sans cycle dédié.

UI-05 reste suspendu tant que la revue visuelle + fonctionnelle finale n'est pas validée.

---

## 10.7. UI-05 — Polish final, validations et PR readiness

UI-05 clôture le cycle Premium Design System.

La validation finale post-polish a confirmé que les réserves mineures identifiées lors de la revue visuelle et fonctionnelle ont été traitées.

Livré :

- isolation du chrome MVP legacy ;
- accordéon `Parcours MVP et actions de démonstration` fermé par défaut sur la fiche premium ;
- déplacement de `DemoResetControl` vers l'écran Scénario ;
- Audit Trail premium sans reset démo visible ;
- navigation premium reconnectée ;
- ouverture demande depuis dashboard et page demandes ;
- accès historique complet ;
- retour fiche / demandes ;
- changement de profil conservé ;
- actions hors scope explicitement désactivées.

Validations finales :

- revue post-polish fiche demande : OK ;
- revue post-polish Audit Trail : OK ;
- revue post-polish scénario : OK ;
- revue fonctionnelle rapide : OK ;
- build frontend : OK ;
- tests frontend : 202/202 OK ;
- garde-fous backend/API/CI : OK ;
- absence de CRUD/auth/export PDF fonctionnel : OK.

Décision :

> UI-05 est validé. Le cycle `ui/interv360-premium-design-system` est prêt pour PR unique vers `main`.

---

## 11. Prochaine étape

Créer la PR unique :

`ui/interv360-premium-design-system` → `main`

Titre proposé :

`Add Interv360 premium design system`

La PR doit préciser :

- cycle UI distinct du MVP fonctionnel ;
- absence de modification backend/API/CI ;
- ajout d'une couche premium isolée ;
- Tailwind CSS v4 ajouté côté frontend ;
- interactions MVP reconnectées ;
- actions hors scope verrouillées ;
- tests frontend 202/202 OK ;
- build frontend OK ;
- exports Figma non suivis.

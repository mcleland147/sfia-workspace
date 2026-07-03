# SFIA Fast Track — Figma Design-first UI Method

## 1. Objectif

Cette méthode capitalise la leçon issue du cycle Interv360 Premium Design System.

Elle définit une règle simple pour les futurs projets UI premium :

> Une UI premium ne doit pas être implémentée avant d'avoir une maquette Figma Design validée et une stack frontend alignée avec cette maquette.

## 2. Constat

Le cycle Interv360 a montré qu'un prototype Figma Make peut être utile pour explorer rapidement une direction visuelle, mais qu'il n'est pas idéal comme source de vérité pixel-perfect.

Les premières implémentations inspirées de Figma Make ont produit des écarts importants :

- rendu local trop éloigné de la cible ;
- interprétation excessive du design par Cursor ;
- difficulté à reproduire précisément les espacements, cards, ombres et densités ;
- mélange entre ancienne UI CSS custom et cible premium ;
- nécessité de corriger après coup avec Tailwind et une couche UI dédiée.

## 3. Décision méthode

Pour les prochains projets UI premium, la séquence cible est :

1. concevoir les vraies maquettes dans Figma Design ;
2. valider visuellement les écrans clés avant développement ;
3. définir les tokens UI ;
4. choisir la stack frontend adaptée ;
5. mapper les composants Figma vers les composants code ;
6. demander à Cursor d'implémenter à partir de cette source stable ;
7. comparer visuellement Figma Design vs localhost ;
8. clôturer seulement après revue visuelle et fonctionnelle.

## 4. Figma Design vs Figma Make

### Figma Make

Usage recommandé :

- exploration rapide ;
- génération d'idées ;
- prototype initial ;
- aide à la direction artistique ;
- support de discussion.

Limite :

> Figma Make ne doit pas être considéré comme la source unique de vérité pixel-perfect.

### Figma Design

Usage recommandé :

- source de vérité UI ;
- frames propres ;
- auto-layouts ;
- composants ;
- variants ;
- tokens ;
- assets exportables ;
- responsive ;
- états hover / active / disabled.

Décision :

> Pour une UI premium, Figma Design doit précéder l'implémentation.

## 5. Choix de stack frontend

Avant de coder, décider explicitement de la stack UI :

- Tailwind CSS ;
- shadcn/Radix ;
- CSS modules ;
- design system interne ;
- Material UI ;
- Mantine ;
- autre stack.

Critères de choix :

- fidélité avec la maquette ;
- capacité à reproduire les composants ;
- cohérence avec les tokens ;
- maintenabilité ;
- vitesse d'implémentation Cursor ;
- compatibilité avec le projet existant.

## 6. Prompt standard Cursor

Pour un futur cycle UI premium, utiliser cette formulation :

```text
Figma Design is the UI source of truth.
Do not reinterpret the design.
First inspect the Figma Design structure, components, tokens, layout constraints and responsive behavior.
Then implement the UI in the existing app using the selected frontend stack.
Preserve backend, API, workflow, statuses, transitions, permissions and tests.
Do not add CRUD, auth, CRM, PDF export or new business behavior unless explicitly requested.
Compare localhost against the validated Figma Design before considering the increment complete.
```

## 7. Garde-fous

Un cycle UI premium ne doit pas modifier :

- backend ;
- API ;
- modèle métier ;
- statuts ;
- transitions ;
- permissions ;
- CI ;
- scripts npm hors besoin stack explicitement validé ;
- données réelles ;
- auth ;
- CRUD ;
- export PDF fonctionnel.

## 8. Critères de validation

Un écran UI premium est validé uniquement si :

- la maquette Figma Design est validée ;
- le rendu local est proche visuellement ;
- les écarts sont listés et acceptés ;
- les interactions attendues fonctionnent ;
- les actions hors scope restent désactivées ;
- les tests passent ;
- le build passe ;
- les garde-fous sont respectés.

## 9. Application à Interv360

Le cycle Interv360 Premium Design System a permis de corriger la trajectoire après coup :

- passage à une couche UI premium isolée ;
- ajout de Tailwind CSS v4 ;
- isolation du chrome démo ;
- reconnexion des interactions MVP ;
- documentation des limites Figma Make.

Pour les prochains projets, cette méthode doit être appliquée dès le départ afin d'éviter les corrections tardives.

# Interv360 — Product UX Finalization

**Projet** : Interv360  
**Cycle** : Product UX Finalization  
**Mode** : SFIA Fast Track — Delivery produit contrôlé  
**Statut** : Cadrage opérationnel du Lot 5  
**Branche** : `delivery/interv360-product-ux-finalization`

---

## 1. Objectif

Ce lot améliore l'expérience produit MVP d'Interv360 afin de sortir davantage de l'interface orientée démonstration.

L'objectif est de rendre le parcours utilisateur plus lisible, plus cohérent et plus exploitable, sans élargir le périmètre fonctionnel.

---

## 2. Références

Documents de référence :

- `../09-architecture/interv360-mvp-final-roadmap.md`
- `./backend-users-session.md`
- `./audit-trail.md`
- `./request-model-finalization.md`
- `./api-product-hardening.md`
- `../08-presentation/interv360-e2e-demo-runbook.md`

Décision roadmap :

- le Lot 1 Backend Users & Session est clôturé ;
- le Lot 2 Audit Trail est clôturé ;
- le Lot 3 Request Model Finalization est clôturé ;
- le Lot 4 API Product Hardening est clôturé ;
- le Lot 5 prioritaire est la finalisation UX produit MVP.

---

## 3. Point de départ

Interv360 dispose déjà :

- d'un backend SQLite persistant ;
- d'une API `/api/v1` durcie ;
- d'un frontend connecté en mode API ;
- d'un mode local conservé ;
- d'un modèle `Request` enrichi ;
- d'un audit trail enrichi ;
- d'une simulation utilisateur structurée ;
- d'une matrice de permissions ;
- d'un reset admin ;
- de tests backend/frontend stables ;
- d'un runbook de démonstration.

Limite actuelle :

> l'interface reste encore partiellement orientée démonstration et doit être clarifiée pour un usage MVP produit.

---

## 4. Problème à résoudre

Le produit ne peut pas être considéré comme finalisable côté UX tant que l'interface ne rend pas suffisamment lisibles :

- la demande sélectionnée ;
- les informations métier principales ;
- l'état courant ;
- les actions disponibles ;
- les actions interdites ;
- l'historique ;
- l'utilisateur courant ;
- les messages d'erreur ;
- les états vides ;
- la différence entre mode local et mode API.

---

## 5. Périmètre du lot

À livrer :

- cadrage UX cible MVP ;
- audit de l'interface existante ;
- décision des améliorations UX utiles ;
- amélioration fiche demande ;
- amélioration historique / audit trail visuel ;
- amélioration zone actions ;
- amélioration messages et états d'erreur ;
- amélioration états vides si nécessaire ;
- clarification utilisateur courant si nécessaire ;
- tests frontend renforcés ;
- documentation README / runbook ;
- PR unique en fin de lot.

---

## 6. Hors scope

Ce lot n'introduit pas :

- refonte graphique complète ;
- design system complet ;
- nouvelle librairie UI ;
- nouvelle navigation complexe ;
- CRUD complet ;
- formulaire création demande ;
- auth réelle ;
- login réel ;
- logout réel ;
- mot de passe ;
- hash de mot de passe ;
- token ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- multi-tenant ;
- moteur BPMN ;
- nouveau statut ;
- `STAT-08` ;
- nouvelle action métier ;
- pagination avancée ;
- tri avancé ;
- reporting avancé ;
- notifications ;
- industrialisation / CI.

---

## 7. UX cible MVP

Zones à clarifier :

| Zone | Objectif |
|------|----------|
| Liste demandes | Lire rapidement quelle demande est concernée |
| Fiche demande | Comprendre demandeur, site, équipement, priorité, criticité, impact |
| Statut courant | Comprendre l'état de la demande |
| Actions | Identifier les actions disponibles et pourquoi certaines sont indisponibles |
| Historique | Lire qui a fait quoi, quand, avec quelle transition |
| Utilisateur courant | Comprendre sous quel profil la démonstration est jouée |
| Erreurs | Afficher des messages exploitables |
| États vides | Éviter les zones muettes ou ambiguës |
| Mode local/API | Maintenir une indication claire du mode actif |

---

## 8. Principes UX

Décisions initiales :

- privilégier la clarification plutôt que la refonte ;
- améliorer les libellés et regroupements avant d'ajouter des composants ;
- ne pas introduire de dépendance UI externe ;
- conserver les composants existants si possible ;
- garder l'interface testable ;
- préserver l'accessibilité simple ;
- éviter les animations ou effets cosmétiques inutiles ;
- ne pas masquer les garde-fous produit.

---

## 9. Frontend cible

À préserver :

- mode local ;
- mode API ;
- user switcher ;
- permissions ;
- actions workflow existantes ;
- audit trail enrichi ;
- request model enrichi ;
- reset admin ;
- erreurs API structurées ;
- absence de fallback silencieux.

À améliorer si nécessaire :

- hiérarchie visuelle de la fiche ;
- lisibilité liste / détail ;
- clarté actions disponibles ;
- affichage actions non autorisées ;
- historique ;
- messages d'erreur ;
- états vides ;
- wording produit.

---

## 10. Backend cible

À préserver :

- API existante ;
- formats OK existants ;
- format erreur `{ error: { code, message } }` ;
- SQLite ;
- request model ;
- audit trail ;
- users ;
- reset demo.

Décision :

- aucune modification backend n'est prévue dans ce lot, sauf correction mineure strictement nécessaire détectée par les tests.

---

## 11. Décision initiale

Décision proposée pour rester Fast Track :

- commencer par auditer l'UX existante ;
- décider les améliorations MVP utiles ;
- limiter le lot aux ajustements frontend ;
- ne pas élargir le périmètre fonctionnel ;
- ne pas créer de CRUD complet ;
- ne pas créer de formulaire création demande ;
- ne pas ajouter de nouveau statut ;
- ne pas modifier le workflow ;
- ne pas introduire d'auth réelle ;
- ne pas introduire de token ;
- ne pas introduire OAuth/JWT/SSO ;
- ne pas introduire CRM ou données réelles ;
- PR unique en fin de lot.

---

## 12. Incréments du lot

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| UX-01 | Cadrage opérationnel UX produit MVP | Réalisé |
| UX-02 | Audit UX existante et décisions d'amélioration | Réalisé |
| UX-03 | Fiche demande et hiérarchie information | À faire |
| UX-04 | Actions, historique et messages | À faire |
| UX-05 | Tests frontend et non-régression | À faire |
| UX-06 | Documentation runbook/README | À faire |
| UX-07 | Préparation PR unique | À venir |

---

## 13. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document delivery créé | OK |
| UX cible cadrée | OK |
| Audit UX réalisé | OK |
| Décisions d'amélioration prises | OK |
| Fiche demande clarifiée | À faire |
| Liste demandes conservée/améliorée | À valider |
| Actions clarifiées | À faire |
| Historique clarifié | À faire |
| Messages et états d'erreur clarifiés | À faire |
| Mode local conservé | À valider |
| Mode API conservé | À valider |
| Audit trail conservé | À valider |
| Request model conservé | À valider |
| Permissions conservées | À valider |
| Backend inchangé | À valider |
| Frontend tests | À faire |
| Backend tests | À valider |
| Frontend build | À faire |
| Backend build | À valider |
| Auth réelle exclue | OK |
| Login/password exclus | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |
| Nouveau statut exclu | OK |
| CRUD complet exclu | OK |

---

## 14. Garde-fous

Le lot doit préserver :

- users backend ;
- session locale ;
- request model enrichi ;
- audit trail enrichi ;
- API hardening ;
- workflow existant ;
- statuts existants ;
- actions existantes ;
- permissions existantes ;
- reset admin existant ;
- mode local ;
- mode API.

Le lot ne doit pas introduire :

- auth réelle ;
- login/password ;
- token ;
- OAuth/JWT/SSO ;
- Entra ID ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08` ;
- CRUD complet non cadré ;
- formulaire création demande non cadré ;
- refonte UI non cadrée.

---

## 15. Décision UX-01

UX-01 valide le cadrage opérationnel du Lot 5.

Décisions :

- finaliser l'expérience produit MVP sans refonte lourde ;
- clarifier fiche, liste, actions, historique, messages et états vides ;
- préserver le socle API durci ;
- préserver le request model enrichi ;
- préserver l'audit trail enrichi ;
- préserver les permissions existantes ;
- conserver le mode local ;
- conserver le mode API ;
- ne pas créer de CRUD complet ;
- ne pas créer de formulaire création demande ;
- ne pas introduire de nouveau statut ;
- ne pas introduire d'auth réelle ;
- ne pas introduire de token ;
- ne pas introduire OAuth/JWT/SSO ;
- ne pas introduire CRM ou données réelles.

---

## 15.1. Audit UX-02 — interface existante

UX-02 audite l'interface existante avant amélioration.

### 15.1.1. Synthèse d'audit

| Zone | État actuel | Irritant UX | Décision |
|------|-------------|-------------|----------|
| Écran principal | Navigation par 5 écrans démo (`overview`, `scenario`, `requests`, `details`, `journal`) ; `DemoOverview`, `DemoScenarioGuide`, `DemoReadinessPanel` dominants | Parcours centré démonstration plutôt que consultation produit ; séparation liste / détail / journal sur 3 écrans | Conserver la structure à 5 écrans ; alléger le wording navigation en UX-04 ; ne pas refondre la navigation |
| Liste demandes | Filtres, recherche, cartes avec badges priorité/criticité ; statut affiché en code brut (`STAT-XX`) | Libellés « Batch 01 », « fictives locales », « Synthèse locale », « Recherche locale » ; statut peu lisible sans libellé métier | UX-03 : wording produit, libellés statut lisibles, conserver filtres/recherche |
| Fiche demande | `RequestDetail` : liste plate `<dl>` de tous les champs enrichis ; badges priorité/criticité en en-tête | En-tête « Batch 01 — fiche enrichie » et « Données fictives uniquement » ; pas de hiérarchie primaire/secondaire ; identifiant avant titre ; « Centre démo » pour `siteDetailLabel` | UX-03 : réorganiser en-tête et regroupements informationnels ; wording produit |
| Informations métier | Champs enrichis présents (demandeur, équipe, site, équipement, priorité, criticité, impact, affectation) | Informations utiles noyées dans une liste homogène sans regroupement visuel | UX-03 : blocs Identité, Site & équipement, Priorisation, Affectation, Détails |
| Statut courant | Visible en fiche et dans `WorkflowActionControl` avec libellé + code | Redondant entre fiche et zone actions ; code technique visible partout | UX-03 : mettre en avant le statut en en-tête fiche ; UX-04 : conserver rappel contextuel dans zone actions |
| Actions workflow | Boutons par action disponible ; message générique si rôle bloque | Titre « Workflow local contrôlé » ; boutons `aria-disabled` sans `disabled` ; message unique « Action non autorisée pour le rôle actuel » sans préciser l'action | UX-04 : wording produit, désactiver réellement les boutons, message par action si pertinent |
| Actions interdites | `isActionDisabled` masque visuellement via CSS ; message global si au moins une action bloquée | L'utilisateur ne sait pas quelle action est bloquée ni pourquoi (rôle vs statut) | UX-04 : indiquer par bouton ou message contextualisé le motif d'indisponibilité |
| Historique / audit trail | `WorkflowJournalReadonly` : liste ordonnée avec message, acteur, action, type, transition, horodatage | Titre « Journal local fictif » ; affichage brut `event.type`, codes statut `fromStatus → toStatus` ; lecture chronologique peu structurée | UX-04 : titrer en historique produit, libellés statut, hiérarchiser acteur/action/date |
| Utilisateur courant | `DemoUserControl` : nom, équipe, rôle, select de changement | Libellé « Utilisateur démo » ; notice simulation utile mais dominante | UX-04 : formuler « Profil actif » tout en conservant l'indication « aucune authentification réelle » |
| Messages d'erreur | `app-error`, `loadError`, `usersLoadError`, `lastActionMessage` | Formulations « fictives », « action fictive » ; succès et erreur partagent la même zone dans `WorkflowActionControl` | UX-04 : messages produit exploitables ; distinguer succès / erreur si simple |
| États vides | Liste filtrée, journal vide, demande introuvable ont chacun un message | Messages orientés « fictif » / « local » ; journal vide peu informatif sur la prochaine étape | UX-04 : états vides explicites et neutres produit |
| Mode local/API | Badge `getDataSourceModeLabel` : « Mode local » ou « Mode API local » | Libellé « Mode API local » ambigu ; indication peu visible dans le flux | UX-04 : clarifier « Source des données : locale » / « API backend » sans changer le comportement |
| Wording démo | Répétition de « fictif », « démo », « Batch 01 », « local » dans composants métier | Nuit à la perception produit MVP tout en restant honnête sur les limites | UX-03 sur fiche/liste ; UX-04 sur workflow/journal/messages ; conserver une mention limites démo discrète |

### 15.1.2. Constats principaux

Constats UX :

- l'interface fonctionne et couvre le parcours MVP, mais le wording et la hiérarchie restent hérités des batches démonstration ;
- la fiche demande expose les champs enrichis sans priorisation visuelle des informations métier principales ;
- la liste et la fiche affichent souvent le code statut brut plutôt que le libellé métier seul ;
- les zones workflow et journal sont lisibles techniquement mais peu orientées lecture produit ;
- les messages d'erreur et de confirmation mélangent parfois jargon démo et information utile.

Points déjà solides :

- mode local / API existant ;
- user switcher existant ;
- request model enrichi disponible ;
- audit trail enrichi disponible ;
- permissions existantes appliquées ;
- erreurs API structurées côté frontend ;
- reset admin existant ;
- filtres, recherche et sélection de demande opérationnels ;
- badges priorité/criticité présents ;
- accessibilité de base (`role="status"`, `aria-label` sur navigation et filtres).

Limites UX observées :

- navigation et écrans `overview` / `scenario` restent fortement orientés guide de démonstration ;
- hiérarchie informationnelle plate sur la fiche demande ;
- actions indisponibles peu explicites au niveau du bouton concerné ;
- historique affiche des codes techniques (`type`, statuts) avant la lecture métier ;
- vocabulaire « fictif / démo / Batch 01 » répété dans les composants cœur.

### 15.1.3. Irritants à traiter

| Priorité | Irritant | Pourquoi c'est important | Lot cible |
|----------|----------|--------------------------|-----------|
| Haute | Fiche demande sans hiérarchie informationnelle | Le demandeur, le site, la priorité et l'affectation doivent être compris en quelques secondes | UX-03 |
| Haute | Wording démonstratif sur fiche et liste | Empêche de percevoir l'interface comme MVP produit | UX-03 |
| Haute | Lisibilité actions et actions interdites | L'utilisateur doit comprendre ce qu'il peut faire et pourquoi le reste est bloqué | UX-04 |
| Moyenne | Historique / audit trail peu orienté lecture | Le journal est un pilier du lot Audit Trail mais reste technique à l'affichage | UX-04 |
| Moyenne | Messages d'erreur, confirmations et états vides | Réduisent la confiance et la compréhension du parcours local/API | UX-04 |

### 15.1.4. Irritants explicitement non traités

| Irritant | Décision |
|----------|----------|
| Refonte graphique complète | Hors scope |
| Nouveau design system | Hors scope |
| Nouvelle navigation complexe | Hors scope |
| Fusion des 5 écrans en une seule page | Hors scope |
| Suppression des écrans `overview` / `scenario` | Hors scope — conserver le guide démo |
| Formulaire création demande | Hors scope |
| CRUD complet | Hors scope |
| Auth réelle | Hors scope |
| Nouveau statut | Hors scope |
| Nouvelle action métier | Hors scope |

---

## 15.2. Décision UX-02 — améliorations retenues

UX-02 fixe les décisions d'amélioration à implémenter en UX-03 et UX-04.

### Décisions générales

- améliorer la lisibilité produit sans refonte complète ;
- conserver la structure générale de l'application et les 5 écrans existants ;
- réduire le wording trop démonstratif quand il gêne la compréhension produit ;
- conserver les indications utiles au contexte de démo quand elles expliquent les limites (données simulées, pas d'auth réelle) ;
- ne pas ajouter de nouvelle dépendance UI ;
- ne pas modifier le backend ;
- ne pas modifier le workflow ;
- ne pas modifier les statuts ;
- ne pas modifier les permissions ;
- ne pas modifier le request model ;
- ne pas modifier l'audit trail.

### UX-03 — Fiche demande et hiérarchie information

À traiter en UX-03 :

- clarifier l'en-tête de fiche demande (titre produit, retirer « Batch 01 ») ;
- mettre en avant titre, statut courant et badges priorité/criticité ;
- regrouper les champs en sections : Identité, Site & équipement, Priorisation, Affectation, Détails complémentaires ;
- rendre plus lisibles demandeur, équipe, site, équipement, priorité, criticité et impact ;
- remplacer « Centre démo » par libellé produit pour `siteDetailLabel` ;
- afficher le libellé statut métier de façon prioritaire, code technique en secondaire si conservé ;
- alléger le wording de `RequestsList` : en-tête, synthèse, recherche, message vide ;
- afficher le libellé statut dans les cartes liste plutôt que le code seul ;
- conserver filtres, recherche, sélection et badges existants ;
- préserver les champs existants et les tests existants (ajustement assertions wording si nécessaire).

### UX-04 — Actions, historique et messages

À traiter en UX-04 :

- clarifier la zone actions (`WorkflowActionControl`) : titre et notices produit ;
- rendre plus explicites les actions disponibles et leur lien avec le statut courant ;
- désactiver réellement les boutons non autorisés (`disabled`) et expliquer le blocage par rôle si pertinent ;
- améliorer la lisibilité de `WorkflowJournalReadonly` : titre historique, libellés statut, lecture acteur → action → date ;
- réduire l'exposition brute de `event.type` et des codes statut quand un libellé existe ;
- améliorer les messages d'erreur et de confirmation dans `App.tsx` et composants associés ;
- améliorer les états vides (liste, journal, demande introuvable) ;
- clarifier `DemoUserControl` en « profil actif » tout en conservant l'absence d'authentification réelle ;
- clarifier le badge mode local/API (`getDataSourceModeLabel` ou affichage associé) ;
- conserver le mode local/API et l'absence de fallback silencieux ;
- conserver `DemoResetControl` et le reset admin sans changer le comportement.

### Hors scope confirmé

UX-02 confirme que le lot ne crée pas :

- CRUD complet ;
- formulaire création demande ;
- auth réelle ;
- login/logout/password ;
- token ;
- OAuth/JWT/SSO ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08` ;
- nouvelle action métier ;
- nouveau workflow ;
- refonte graphique complète.

---

## 16. Prochaine étape

Exécuter **UX-03** :

Fiche demande et hiérarchie information

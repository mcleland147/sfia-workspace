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

- `../09-roadmap/interv360-mvp-final-roadmap.md`
- `./backend-users-session.md`
- `./2026-07-02-audit-trail.md`
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
| UX-03 | Fiche demande et hiérarchie information | Réalisé |
| UX-04 | Actions, historique et messages | Réalisé |
| UX-05 | Tests frontend et non-régression | Réalisé |
| UX-06 | Documentation runbook/README | Réalisé |
| UX-07 | Préparation PR unique | Réalisé |

---

## 13. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document delivery créé | OK |
| UX cible cadrée | OK |
| Audit UX réalisé | OK |
| Décisions d'amélioration prises | OK |
| Fiche demande clarifiée | OK |
| Liste demandes conservée/améliorée | OK |
| Actions clarifiées | OK |
| Historique clarifié | OK |
| Messages et états d'erreur clarifiés | OK |
| Mode local conservé | OK |
| Mode API conservé | OK |
| Audit trail conservé | OK |
| Request model conservé | OK |
| Permissions conservées | OK |
| Backend inchangé | OK |
| Frontend tests | OK — 191 tests |
| Backend tests | OK — 125 tests |
| Frontend build | OK |
| Backend build | OK |
| Runbook mis à jour | OK |
| README frontend mis à jour | OK |
| README backend mis à jour | OK |
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

## 15.3. Changements UX-03

UX-03 améliore la fiche demande et la hiérarchie d'information.

Changements réalisés :

- en-tête de fiche demande clarifié avec titre, référence et statut métier mis en avant ;
- statut métier affiché avec libellé lisible via `getRequestStatusLabel` (helper existant réutilisé) ;
- informations demande regroupées en sections : Résumé, Site & équipement, Priorisation, Détails ;
- section identité clarifiée (client, demandeur, équipe, affectation) ;
- section site & équipement clarifiée (site, localisation, équipement, catégorie) ;
- section priorisation clarifiée (priorité, criticité, impact) ;
- section détails clarifiée (canal, dates, description, qualification) ;
- wording démonstratif réduit (« Batch 01 », « données fictives uniquement » remplacés par libellés produit) ;
- liste demandes allégée (synthèse, recherche, filtres et message vide) ;
- statuts affichés avec libellés métier dans liste, synthèse et filtres ;
- recherche enrichie avec libellés statut dans le haystack ;
- styles CSS ajustés pour sections et hiérarchie visuelle ;
- tests frontend ajustés / renforcés (+2 tests).

Préservé :

- champs existants du request model ;
- filtres et recherche ;
- mode local ;
- mode API ;
- permissions ;
- workflow ;
- statuts techniques ;
- audit trail ;
- reset admin ;
- backend ;
- API.

Validations :

| Cible | Résultat |
|-------|----------|
| Frontend build | OK |
| Frontend tests | OK — 189 tests |
| Backend build | OK (non-régression) |
| Backend tests | OK — 125 tests |

---

## 15.4. Changements UX-04

UX-04 améliore les actions, l'historique, les messages et le contexte utilisateur.

Changements réalisés :

- zone actions clarifiée ;
- actions disponibles rendues plus lisibles ;
- actions indisponibles accompagnées d'un motif plus explicite ;
- accessibilité des actions améliorée (`disabled` réel, hints par bouton) ;
- historique rendu plus lisible ;
- affichage acteur / action / date clarifié ;
- statuts métier affichés avec libellés lisibles ;
- états vides du journal clarifiés ;
- messages d'erreur et de succès rendus plus neutres produit ;
- profil actif clarifié ;
- badge mode local/API clarifié ;
- tests frontend ajustés / renforcés (+2 tests).

Préservé :

- actions métier existantes ;
- transitions existantes ;
- statuts techniques existants ;
- permissions existantes ;
- `actorUserId` dans les transitions ;
- mode local ;
- mode API ;
- absence de fallback silencieux ;
- request model ;
- audit trail ;
- backend ;
- API ;
- reset admin.

Validations :

| Cible | Résultat |
|-------|----------|
| Frontend build | OK |
| Frontend tests | OK — 191 tests |
| Backend build | OK (non-régression) |
| Backend tests | OK — 125 tests |

---

## 15.5. Changements UX-05

UX-05 stabilise le lot Product UX Finalization par les tests et la non-régression globale.

Changements réalisés :

- vérification des tests frontend sur la fiche demande ;
- vérification des tests frontend sur la liste demandes ;
- vérification des tests frontend sur les actions workflow ;
- vérification des tests frontend sur l'historique ;
- vérification des tests frontend sur le profil actif ;
- vérification des tests frontend sur les messages et le mode local/API ;
- renforcement du test « backend indisponible » pour confirmer l'absence de fallback silencieux vers les données locales ;
- confirmation de la non-régression backend ;
- confirmation du mode local ;
- confirmation du mode API ;
- confirmation de l'absence de fallback silencieux ;
- confirmation de la conservation du request model ;
- confirmation de la conservation de l'audit trail ;
- confirmation de la conservation des permissions ;
- confirmation du reset admin ;
- aucun nouveau scope UX fonctionnel.

Couverture confirmée :

| Zone | Résultat |
|------|----------|
| Fiche demande UX-03 | OK |
| Liste demandes UX-03 | OK |
| Actions UX-04 | OK |
| Historique UX-04 | OK |
| Profil actif | OK |
| Mode local | OK |
| Mode API | OK |
| Messages / erreurs | OK |
| États vides | OK |
| Permissions | OK |
| Reset admin | OK |
| Request model | OK |
| Audit trail | OK |
| Backend | Inchangé |
| API | Inchangée |

Validations :

| Cible | Résultat |
|-------|----------|
| Frontend build | OK |
| Frontend tests | OK — 191 tests |
| Backend build | OK |
| Backend tests | OK — 125 tests |

Garde-fous confirmés :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas de nouveau statut ;
- pas de `STAT-08` ;
- pas d'auth réelle ;
- pas de login/password ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles ;
- pas de dépendance UI ajoutée ;
- pas d'export Figma ajouté.

---

## 15.6. Changements UX-06

UX-06 finalise la documentation du lot Product UX Finalization.

Changements réalisés :

- documentation de la fiche demande structurée ;
- documentation de la liste demandes orientée produit ;
- documentation des statuts métier lisibles ;
- documentation des actions disponibles / indisponibles ;
- documentation de l'historique acteur / action / date ;
- documentation du profil actif ;
- documentation du mode local/API ;
- documentation du backend indisponible sans fallback silencieux ;
- documentation du reset admin ;
- mise à jour du runbook ;
- mise à jour du README frontend ;
- mise à jour du README backend.

Synthèse :

| Élément | Résultat |
|---------|----------|
| Fiche demande | Documentée |
| Liste demandes | Documentée |
| Actions workflow | Documentées |
| Historique | Documenté |
| Profil actif | Documenté |
| Mode local | Documenté |
| Mode API | Documenté |
| Fallback silencieux | Non |
| Reset admin | Documenté |
| Backend | Inchangé |
| API | Inchangée |
| Request model | Conservé |
| Audit trail | Conservé |
| Permissions | Conservées |

Validations :

| Cible | Résultat |
|-------|----------|
| Frontend build | OK |
| Frontend tests | OK — 191 tests |
| Backend build | OK |
| Backend tests | OK — 125 tests |

Garde-fous confirmés :

- pas de CRUD complet ;
- pas de formulaire création demande ;
- pas de nouveau statut ;
- pas de `STAT-08` ;
- pas d'auth réelle ;
- pas de login/password ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles ;
- pas de dépendance UI ajoutée ;
- pas d'export Figma ajouté.

### Note Figma

Aucun arc Figma n'est ouvert dans ce lot.

Décision :

- le Lot 5 reste une finalisation UX MVP directement dans le code ;
- un arc Figma pourra être ouvert ultérieurement uniquement si une refonte plus large ou un design system devient nécessaire ;
- aucun export Figma n'est ajouté au repository.

---

## 16. Prochaine étape

Lot **Product UX Finalization** clos — PR unique préparée (UX-07).

---

## 17. Synthèse avant PR

Le lot **Product UX Finalization** est fonctionnellement prêt.

Capacités ajoutées :

- fiche demande mieux hiérarchisée ;
- liste demandes plus orientée produit ;
- statuts métier affichés avec libellés lisibles ;
- actions workflow clarifiées ;
- actions indisponibles accompagnées de motifs ;
- historique rendu plus lisible ;
- affichage acteur / action / date clarifié ;
- profil actif clarifié ;
- badge mode local/API clarifié ;
- messages et états vides améliorés ;
- absence de fallback silencieux confirmée ;
- tests frontend renforcés ;
- runbook/README mis à jour.

Le lot préserve :

- backend ;
- API ;
- SQLite ;
- request model enrichi ;
- audit trail enrichi ;
- workflow existant ;
- statuts techniques existants ;
- transitions métier existantes ;
- permissions existantes ;
- mode local ;
- mode API ;
- reset admin.

Le lot ne met pas en place :

- CRUD complet ;
- formulaire création demande ;
- authentification réelle ;
- session backend réelle ;
- token ;
- OAuth/JWT/SSO ;
- CRM ;
- données réelles ;
- nouveau statut ;
- dépendance UI ;
- export Figma.

La prochaine étape est la revue et le merge de la PR unique du lot.

---

## 18. Validations finales UX-07

| Contrôle | Résultat |
|----------|----------|
| Frontend build | OK |
| Frontend tests | OK — 191 tests |
| Backend build | OK |
| Backend tests | OK — 125 tests |
| Diff global vs main | OK |
| Fiche demande clarifiée | OK |
| Liste demandes orientée produit | OK |
| Statuts métier lisibles | OK |
| Actions workflow clarifiées | OK |
| Actions indisponibles avec motifs | OK |
| Historique acteur / action / date | OK |
| Profil actif clarifié | OK |
| Badge mode local/API clarifié | OK |
| Backend indisponible sans fallback silencieux | OK |
| Reset admin conservé | OK |
| Mode local conservé | OK |
| Mode API conservé | OK |
| Request model conservé | OK |
| Audit trail conservé | OK |
| Workflow conservé | OK |
| Statuts techniques conservés | OK |
| Transitions métier conservées | OK |
| Permissions conservées | OK |
| Backend inchangé | OK |
| API inchangée | OK |
| CRUD complet exclu | OK |
| Formulaire création exclu | OK |
| Auth réelle exclue | OK |
| Session backend réelle exclue | OK |
| Login/password exclus | OK |
| Token exclu | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |
| Nouveau statut exclu | OK |
| `STAT-08` exclu | OK |
| Nouvelle dépendance UI exclue | OK |
| Arc Figma exclu de cette PR | OK |
| Exports Figma exclus | OK |
| sfia-notion-sync exclu | OK |

---

## 19. Préparation PR intégrée

### Titre proposé

`Finalize Interv360 product UX MVP`

### Description proposée

```markdown
## Summary
This PR delivers Lot 5 of the Interv360 MVP Final Roadmap: Product UX Finalization.
It improves the product readability of the Interv360 frontend without expanding the functional scope. The lot clarifies the request detail page, request list, workflow actions, workflow journal, active simulated profile, local/API mode indicators and product messages.
This is not a redesign, not a CRUD expansion, and does not introduce real authentication, tokens, CRM integration, real data, new workflow statuses or Figma exports.
## What changed
### Product delivery
- opens Lot 5 from the MVP Final Roadmap;
- adds the Product UX Finalization delivery document;
- preserves the stabilized users/session foundation, audit trail, request model and API hardening;
- keeps the SFIA Fast Track delivery approach.
### Request UX
- restructures the request detail page into clearer sections;
- highlights request title, reference, business status and key badges;
- displays business status labels as the primary status wording;
- keeps technical status codes secondary when useful;
- improves the request list wording;
- removes demo-oriented wording such as batch labels where it reduced product readability;
- keeps search, filters, requester, assignment, priority and criticality.
### Workflow UX
- clarifies the workflow action area;
- displays available actions more clearly;
- disables unavailable actions explicitly;
- provides readable reasons for blocked actions;
- preserves existing workflow actions, transitions, statuses and permissions;
- keeps `actorUserId` in API transitions.
### Journal and messages
- makes the workflow journal more readable;
- emphasizes actor, action and date;
- displays business status labels in the journal;
- keeps technical codes secondary;
- clarifies empty states;
- improves product messages for success, error and backend unavailable cases;
- confirms API mode does not silently fall back to local mode.
### Active profile and modes
- clarifies the active simulated profile;
- keeps the user switcher;
- clarifies local/API mode badges;
- preserves local mode and API mode.
### Documentation
- updates the E2E runbook with Product UX Finalization controls;
- updates the frontend README with Product UX MVP documentation;
- updates the backend README with frontend UX compatibility notes;
- updates the Product UX Finalization delivery document with UX-01 to UX-07 status.
## Validation
- Frontend build: OK
- Frontend tests: 191 passed
- Backend build: OK
- Backend tests: 125 passed
## Guardrails
No full CRUD API, request creation form, real authentication, login, logout, password, password hash, token, OAuth, JWT, SSO, Entra ID, backend auth session, CRM integration, real data, workflow status, `STAT-08`, new workflow action, backend API change, SQLite change, Notion publication, Controlled Delivery change, sfia-notion-sync update, Figma arc or Figma export was introduced.
Existing backend, API contract, SQLite persistence, request model, audit trail, workflow, technical statuses, transitions, permissions, local mode, API mode and admin reset behavior are preserved.
Figma remains available for a future design arc if a broader redesign or design system becomes necessary, but no Figma artifact is included in this PR.
```

---

## 20. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-product-ux-finalization?expand=1 |
| Cible | `main` |
| Source | `delivery/interv360-product-ux-finalization` |
| Merge automatique | Non |

---

## 21. Statut merge

| Élément | Valeur |
|---------|--------|
| PR | #69 — https://github.com/mcleland147/sfia-workspace/pull/69 |
| Source | `delivery/interv360-product-ux-finalization` |
| Cible | `main` |
| Méthode | Merge commit GitHub PR |
| Commit merge | `6edd943` |
| Main synchronisée | OK |
| Frontend build post-merge | OK |
| Frontend tests post-merge | OK — 191 tests |
| Backend build post-merge | OK |
| Backend tests post-merge | OK — 125 tests |
| UX-01 | OK — cadrage opérationnel |
| UX-02 | OK — audit UX et décisions |
| UX-03 | OK — fiche demande et hiérarchie |
| UX-04 | OK — actions, historique et messages |
| UX-05 | OK — tests frontend et non-régression |
| UX-06 | OK — runbook/README |
| UX-07 | OK — PR unique |
| Fiche demande clarifiée | OK |
| Liste demandes orientée produit | OK |
| Statuts métier lisibles | OK |
| Actions workflow clarifiées | OK |
| Actions indisponibles avec motifs | OK |
| Historique acteur / action / date | OK |
| Profil actif clarifié | OK |
| Badge mode local/API clarifié | OK |
| Backend indisponible sans fallback silencieux | OK |
| Reset admin conservé | OK |
| Mode local conservé | OK |
| Mode API conservé | OK |
| Request model conservé | OK |
| Audit trail conservé | OK |
| Workflow conservé | OK |
| Statuts techniques conservés | OK |
| Transitions métier conservées | OK |
| Permissions conservées | OK |
| Backend inchangé | OK |
| API inchangée | OK |
| CRUD complet introduit | Non |
| Formulaire création demande introduit | Non |
| Auth réelle introduite | Non |
| Session backend réelle introduite | Non |
| Login/password introduits | Non |
| Token introduit | Non |
| OAuth / JWT / SSO introduits | Non |
| CRM introduit | Non |
| Données réelles introduites | Non |
| Nouveau statut introduit | Non |
| `STAT-08` introduit | Non |
| Nouvelle dépendance UI introduite | Non |
| Arc Figma introduit | Non |
| Export Figma ajouté | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |

### Décision post-merge

Le Lot 5 **Product UX Finalization** est mergé dans `main`.

Interv360 dispose désormais d'une UX MVP plus lisible :

- fiche demande mieux hiérarchisée ;
- liste demandes plus orientée produit ;
- statuts métier affichés avec libellés lisibles ;
- actions workflow clarifiées ;
- actions indisponibles accompagnées de motifs ;
- historique rendu plus exploitable ;
- affichage acteur / action / date clarifié ;
- profil actif clarifié ;
- badge mode local/API clarifié ;
- messages et états vides améliorés ;
- absence de fallback silencieux confirmée ;
- documentation runbook/README mise à jour.

Ce lot préserve :

- backend ;
- API ;
- SQLite ;
- request model enrichi ;
- audit trail enrichi ;
- workflow existant ;
- statuts techniques existants ;
- transitions métier existantes ;
- permissions existantes ;
- mode local ;
- mode API ;
- reset admin.

Ce lot ne met pas en place :

- CRUD complet ;
- formulaire de création demande ;
- authentification réelle ;
- session backend réelle ;
- token ;
- OAuth/JWT/SSO ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08` ;
- dépendance UI ;
- arc Figma ;
- export Figma.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Track.

### Prochaine étape

Ouvrir le Lot 6 :

`delivery/interv360-product-industrialization`

Objectif :

- rendre le MVP livrable proprement ;
- consolider README global ;
- clarifier installation locale ;
- clarifier exploitation locale ;
- vérifier variables `.env` ;
- documenter scripts build/test/run ;
- documenter limites connues ;
- préparer une stratégie de déploiement simple ;
- éventuellement cadrer CI sans sur-ingénierie.

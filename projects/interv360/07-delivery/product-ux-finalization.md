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
| UX-02 | Audit UX existante et décisions d'amélioration | À faire |
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
| Audit UX réalisé | À faire |
| Décisions d'amélioration prises | À faire |
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

## 16. Prochaine étape

Exécuter **UX-02** :

Audit UX existante et décisions d'amélioration

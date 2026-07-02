# Interv360 — Auth Foundation Framing

**Projet** : Interv360  
**Cycle** : Auth Foundation Framing  
**Mode** : SFIA Fast Track — cadrage architecture produit  
**Statut** : Cadrage auth applicative  
**Branche** : `architecture/interv360-auth-foundation-framing`

---

## 1. Objectif

Ce document cadre une première fondation d’authentification applicative pour Interv360.

L’objectif n’est pas d’introduire immédiatement une authentification complète, mais de préparer la transition entre :

- rôles simulés côté frontend ;
- utilisateurs applicatifs ;
- session locale ;
- permissions produit ;
- future trajectoire vers une authentification réelle.

---

## 2. Point de départ

Interv360 dispose déjà :

- d’un backend SQLite persistant ;
- d’une API `/api/v1` stabilisée ;
- d’un frontend connecté ;
- d’un mode local et d’un mode API ;
- d’une simulation de rôle ;
- d’une matrice de permissions ;
- d’un workflow métier enrichi ;
- d’un runbook de démonstration ;
- de tests backend et frontend.

Les deux derniers batchs ont livré :

| Batch | Capacités livrées |
|-------|-------------------|
| Workflow Light Extension | `STAT-05`, `STAT-07`, `put_on_hold`, `resume`, `cancel` |
| Workflow Requalification | `requalify`, `request.requalified`, retour vers `STAT-02` |

Le document `interv360-next-product-axis.md` recommande désormais l’axe **Auth Foundation / base users**.

---

## 3. Problème à résoudre

La simulation de rôle est utile pour démontrer les permissions, mais elle atteint ses limites :

- le rôle est choisi manuellement ;
- aucun utilisateur applicatif n’existe ;
- aucune session n’est représentée ;
- les permissions ne sont pas reliées à une identité ;
- l’expérience reste démonstrative, pas encore applicative.

Le prochain incrément doit donc préparer une notion d’utilisateur sans ouvrir un chantier d’authentification complet.

---

## 4. Options d’approche

### Option A — Auth Foundation locale sans OAuth/JWT

Principe :

- créer une base d’utilisateurs fictifs ;
- permettre de sélectionner un utilisateur applicatif ;
- dériver le rôle depuis l’utilisateur ;
- conserver une session locale simple ;
- conserver les données de démonstration ;
- ne pas introduire OAuth/JWT/SSO.

Avantages :

- progression rapide ;
- forte valeur produit ;
- prépare la vraie auth ;
- garde le périmètre maîtrisé ;
- remplace progressivement la simulation de rôle brute.

Limites :

- ce n’est pas une authentification sécurisée ;
- reste une fondation démonstrative ;
- nécessite une future étape vers auth réelle.

---

### Option B — Auth complète directement

Principe :

- introduire login réel ;
- gérer secrets, session, tokens ;
- potentiellement JWT ou OAuth.

Avantages :

- plus proche d’un vrai produit.

Limites :

- trop large maintenant ;
- risques sécurité ;
- impose des décisions techniques trop tôt ;
- ralentit fortement la SFIA.

---

### Option C — SSO / Entra ID directement

Principe :

- cadrer ou implémenter une intégration SSO.

Avantages :

- cohérent avec un environnement entreprise.

Limites :

- trop dépendant d’un contexte externe ;
- nécessite tenant, configuration, sécurité, redirect URIs, secrets ;
- non pertinent pour le prototype actuel.

---

### Option D — Conserver uniquement la simulation de rôle

Principe :

- ne rien changer ;
- continuer avec le sélecteur de rôle actuel.

Avantages :

- aucun risque.

Limites :

- limite atteinte ;
- bloque la crédibilité utilisateur ;
- ne prépare pas la suite produit.

---

## 5. Analyse comparative

| Option | Valeur produit | Risque | Effort | Recommandation |
|--------|----------------|--------|--------|----------------|
| A — Auth Foundation locale | Élevée | Moyen | Moyen | Recommandée |
| B — Auth complète | Élevée | Élevé | Élevé | Différer |
| C — SSO / Entra ID | Élevée | Élevé | Élevé | Différer |
| D — Simulation seule | Faible | Faible | Faible | Ne pas retenir |

---

## 6. Décision recommandée

Décision :

> retenir une **Auth Foundation locale**, sans OAuth, sans JWT, sans SSO, et sans Entra ID dans un premier temps.

Objectif :

- introduire une notion d’utilisateur applicatif fictif ;
- rattacher chaque utilisateur à un rôle ;
- remplacer progressivement le choix direct du rôle par un choix d’utilisateur ;
- conserver une session locale simple ;
- préparer une future authentification réelle sans la coder maintenant.

---

## 7. Modèle utilisateur cible minimal

Modèle conceptuel recommandé :

| Champ | Description |
|-------|-------------|
| `id` | Identifiant technique fictif |
| `displayName` | Nom affiché |
| `email` | Email fictif |
| `role` | Rôle applicatif |
| `team` | Équipe ou périmètre fictif |
| `isActive` | Utilisateur actif ou non |

Rôles conservés :

| Rôle | Usage |
|------|-------|
| `requester` | Demandeur |
| `technician` | Technicien |
| `manager` | Responsable |
| `admin` | Administrateur |
| `viewer` | Lecture seule |

Exemples d’utilisateurs fictifs :

| Utilisateur | Rôle |
|-------------|------|
| Alice Demandeur | `requester` |
| Théo Technicien | `technician` |
| Maya Responsable | `manager` |
| Amin Admin | `admin` |
| Victor Lecteur | `viewer` |

---

## 8. Session locale cible

Principe recommandé :

- une session locale représente l’utilisateur courant ;
- la session est stockée côté frontend dans un premier temps ;
- le backend peut rester inchangé dans un premier incrément si nécessaire ;
- la session remplace progressivement `interv360:simulated-role`.

Points à cadrer avant code :

| Sujet | Décision recommandée |
|-------|----------------------|
| Stockage session | localStorage côté frontend |
| Clé existante rôle | À migrer progressivement |
| Expiration session | Différer |
| Login mot de passe | Différer |
| Hash mot de passe | Différer |
| Token JWT | Différer |
| Refresh token | Différer |
| SSO | Différer |

---

## 9. Permissions produit

Principe :

- les permissions restent basées sur les rôles ;
- le rôle est porté par l’utilisateur courant ;
- la matrice de permissions existante reste la source de vérité ;
- le changement concerne le porteur de rôle, pas encore le modèle de permission.

Matrice conservée :

| Action | requester | technician | manager | admin | viewer |
|--------|-----------|------------|---------|-------|--------|
| `qualify` | Non | Oui | Oui | Oui | Non |
| `plan` | Non | Oui | Oui | Oui | Non |
| `complete_intervention` | Non | Oui | Oui | Oui | Non |
| `close_report` | Non | Oui | Oui | Oui | Non |
| `put_on_hold` | Non | Oui | Oui | Oui | Non |
| `resume` | Non | Oui | Oui | Oui | Non |
| `cancel` | Non | Non | Oui | Oui | Non |
| `requalify` | Non | Oui | Oui | Oui | Non |
| `demo_reset` | Non | Non | Non | Oui | Non |

---

## 10. Options d’implémentation future

### Incrément possible 1 — User switcher frontend

- créer une liste d’utilisateurs fictifs côté frontend ;
- remplacer le sélecteur de rôle par un sélecteur d’utilisateur ;
- dériver le rôle depuis l’utilisateur ;
- conserver localStorage ;
- adapter les tests.

Valeur :

- rapide ;
- visible ;
- améliore la crédibilité de la démo ;
- faible impact backend.

---

### Incrément possible 2 — Users exposés par backend

- ajouter des utilisateurs fictifs côté backend ;
- exposer `GET /api/v1/users` ;
- exposer `GET /api/v1/session` ou équivalent ;
- conserver auth simulée.

Valeur :

- rapproche la démo d’un vrai produit ;
- clarifie la séparation frontend/backend.

Risque :

- nécessite nouveau endpoint ;
- mérite un cadrage API.

---

### Incrément possible 3 — Session backend

- représenter une session côté backend ;
- rattacher les transitions à un utilisateur ;
- enrichir les événements avec un acteur.

Valeur :

- forte valeur produit ;
- prépare audit trail.

Risque :

- plus structurant ;
- nécessite migration éventuelle des événements.

---

## 11. Décision de séquence recommandée

Séquence recommandée :

| Étape | Objectif | Type |
|-------|----------|------|
| AUTH-01 | User switcher frontend avec utilisateurs fictifs | Delivery léger |
| AUTH-02 | Alignement runbook/tests et UX | Delivery léger |
| AUTH-03 | Cadrage API users/session backend | Architecture |
| AUTH-04 | Backend users/session minimal | Delivery futur |
| AUTH-05 | Trajectoire OAuth/JWT/SSO | Architecture futur |

Décision :

> commencer par `AUTH-01` côté frontend, sans backend users/session dans le premier incrément.

Raison :

- valeur rapide ;
- faible risque ;
- cohérent avec Fast Track ;
- remplace la simulation de rôle par une simulation utilisateur plus crédible ;
- ne force pas encore une décision API.

---

## 12. Hors scope

Ce cadrage n’introduit pas :

- code ;
- frontend ;
- backend ;
- SQLite ;
- API ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- login réel ;
- mot de passe ;
- hash de mot de passe ;
- refresh token ;
- base users backend ;
- session backend ;
- données réelles ;
- CRM ;
- nouveau workflow ;
- nouveau statut ;
- `STAT-08` ;
- Notion ;
- Controlled Delivery ;
- `sfia-notion-sync`.

---

## 13. Critères d’acceptation du cadrage

| Critère | Résultat |
|---------|----------|
| Axe Auth Foundation clarifié | OK |
| OAuth/JWT/SSO différés | OK |
| Base users backend différée | OK |
| User switcher frontend recommandé | OK |
| Permissions par rôle conservées | OK |
| Session locale recommandée | OK |
| Données réelles exclues | OK |
| CRM exclu | OK |

---

## 14. Prochain batch recommandé

Branche recommandée :

`delivery/interv360-auth-user-switcher`

Objectif :

- introduire des utilisateurs fictifs côté frontend ;
- remplacer le choix direct du rôle par un choix d’utilisateur ;
- conserver la matrice de permissions existante ;
- conserver localStorage ;
- ne pas modifier backend/API/SQLite.

Incréments possibles :

| Incrément | Objectif |
|----------|----------|
| AUTH-US-01 | Définir utilisateurs fictifs et session locale |
| AUTH-US-02 | Remplacer sélecteur de rôle par sélecteur utilisateur |
| AUTH-US-03 | Adapter permissions/tests |
| AUTH-US-04 | Mettre à jour runbook/README |
| AUTH-US-05 | Préparer PR unique |

---

## 15. Décision finale

| Élément | Décision |
|--------|----------|
| Axe retenu | Auth Foundation locale |
| Premier delivery recommandé | User switcher frontend |
| Backend users | Différé |
| Session backend | Différée |
| OAuth/JWT/SSO | Différés |
| Entra ID | Différé |
| Données réelles / CRM | Différés |
| API nouvelle | Différée |
| SQLite | Inchangée dans le premier delivery |


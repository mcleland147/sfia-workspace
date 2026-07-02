# Interv360 — Next Product Axis Decision

**Projet** : Interv360  
**Cycle** : Next Product Axis  
**Mode** : SFIA Fast Track — décision produit courte  
**Statut** : Décision d'orientation  
**Branche** : `architecture/interv360-next-product-axis`

---

## 1. Objectif

Ce document décide le prochain axe produit Interv360 après les batchs :

- **Workflow Light Extension** ;
- **Workflow Requalification**.

L'objectif est d'éviter d'ouvrir un chantier trop large sans décision produit claire.

---

## 2. État produit actuel

Interv360 dispose désormais :

- d'un backend SQLite persistant ;
- d'une API `/api/v1` stabilisée ;
- d'un frontend connecté ;
- d'un mode local et d'un mode API ;
- d'une simulation de rôle ;
- d'un workflow enrichi ;
- d'une mise en attente ;
- d'une reprise ;
- d'une annulation ;
- d'une requalification légère ;
- d'un runbook de démonstration ;
- de tests backend et frontend.

Capacités workflow disponibles :

| Capacité | Statut |
|----------|--------|
| Qualification | Disponible |
| Planification | Disponible |
| Traitement | Disponible |
| Mise en attente | Disponible |
| Reprise | Disponible |
| Annulation | Disponible |
| Requalification légère | Disponible |
| Clôture | Disponible |

---

## 3. Options de prochain axe

### Option A — Auth réelle / base users

Principe :

- passer de rôles simulés à une première base d'utilisateurs applicative ;
- introduire une session simple ;
- préparer une séparation entre utilisateur connecté, rôle et permissions ;
- rester sans SSO dans un premier temps.

Valeur :

- très forte valeur produit ;
- rend les rôles crédibles ;
- prépare une vraie démonstration multi-utilisateurs ;
- clarifie la trajectoire vers auth réelle.

Risques :

- sujet plus structurant ;
- nécessite cadrage sécurité ;
- peut ouvrir trop large si on introduit OAuth/JWT trop tôt.

Approche recommandée si retenue :

- commencer par un cadrage **Auth Foundation** ;
- ne pas démarrer par OAuth/SSO ;
- créer une base users minimale fictive ;
- conserver les données de démonstration ;
- préparer les permissions côté produit.

---

### Option B — `STAT-08` requalification avancée

Principe :

- transformer la requalification légère en vrai statut dédié ;
- ajouter `STAT-08 — À requalifier` ;
- prévoir une transition de sortie.

Valeur :

- améliore la lisibilité métier du workflow ;
- utile pour des scénarios plus riches.

Risques :

- valeur marginale plus faible après la requalification légère ;
- ajoute un statut alors que le produit vient déjà d'être enrichi ;
- peut complexifier le workflow sans changer la perception globale.

Approche recommandée si retenue :

- différer tant qu'un retour utilisateur ne demande pas explicitement un statut dédié.

---

### Option C — Données réelles / CRM / intégration métier

Principe :

- connecter Interv360 à un vrai référentiel ou à une source métier ;
- rapprocher la démonstration d'un contexte réel.

Valeur :

- forte valeur d'intégration ;
- rend le produit plus concret.

Risques :

- dépendances externes ;
- sécurité ;
- données réelles ;
- gouvernance ;
- complexité trop forte maintenant.

Approche recommandée si retenue :

- ne pas démarrer maintenant ;
- attendre une base auth/utilisateurs plus claire.

---

### Option D — UX polish / scénario démo

Principe :

- améliorer uniquement l'expérience visuelle ;
- simplifier messages ;
- améliorer readiness panel ;
- fluidifier la démonstration.

Valeur :

- utile pour présentation ;
- faible risque.

Risques :

- moins structurant ;
- n'apporte pas de nouvelle capacité métier majeure.

Approche recommandée si retenue :

- faire plus tard, avant une vraie présentation externe.

---

## 4. Analyse comparative

| Option | Valeur produit | Risque | Effort | Priorité |
|--------|----------------|--------|--------|----------|
| A — Auth réelle / base users | Très élevée | Moyen à élevé | Moyen | Recommandée |
| B — `STAT-08` avancé | Moyenne | Moyen | Moyen | Différer |
| C — Données réelles / CRM | Élevée | Élevé | Élevé | Différer |
| D — UX polish | Moyenne | Faible | Faible | Plus tard |

---

## 5. Décision recommandée

Décision recommandée :

> retenir l'axe **Auth Foundation / base users**, sans démarrer par une authentification externe complète.

Justification :

- le workflow est désormais assez crédible ;
- les permissions simulées ont atteint leur limite ;
- le produit a besoin d'une vraie notion d'utilisateur ;
- l'auth réelle complète doit rester progressive ;
- OAuth / SSO / JWT ne doivent pas être introduits sans cadrage dédié.

---

## 6. Périmètre recommandé du prochain batch

Nom recommandé :

`architecture/interv360-auth-foundation-framing`

Objectif :

- cadrer une première fondation d'authentification applicative ;
- clarifier utilisateur, rôle, session, permissions ;
- décider ce qui reste simulé ;
- éviter de démarrer directement par OAuth/SSO.

Périmètre potentiel :

| Sujet | Décision recommandée |
|-------|----------------------|
| Base users fictive | À étudier |
| Session locale simple | À étudier |
| Persistance utilisateur | À cadrer |
| JWT | Différer |
| OAuth | Différer |
| SSO | Différer |
| Entra ID | Différer |
| Données réelles | Différer |
| CRM | Différer |

---

## 7. Hors scope

Ce cycle n'introduit pas :

- code ;
- backend ;
- frontend ;
- SQLite ;
- API ;
- auth réelle ;
- OAuth ;
- JWT ;
- SSO ;
- Entra ID ;
- base users ;
- CRM ;
- données réelles ;
- nouveau statut ;
- `STAT-08` ;
- moteur workflow ;
- Notion ;
- Controlled Delivery ;
- `sfia-notion-sync`.

---

## 8. Décision finale

| Élément | Décision |
|--------|----------|
| Prochain axe recommandé | Auth Foundation / base users |
| Workflow avancé `STAT-08` | Différé |
| Données réelles / CRM | Différé |
| UX polish | Plus tard |
| OAuth / JWT / SSO | À ne pas ouvrir directement |
| Prochaine branche recommandée | `architecture/interv360-auth-foundation-framing` |

---

## 9. Réflexion SFIA Fast Track

Le mode Fast Track reste pertinent :

- le batch Workflow Light Extension a livré une capacité utile ;
- le batch Workflow Requalification a livré une capacité utile ;
- les cycles documentaires intermédiaires ont été réduits ;
- les garde-fous sont restés suffisants.

Pour l'axe auth, il faut toutefois conserver un cadrage minimal, car le sujet touche :

- sécurité ;
- modèle utilisateur ;
- permissions ;
- sessions ;
- trajectoire vers auth réelle.

Conclusion :

> le prochain cycle doit être court, mais pas directement en code.

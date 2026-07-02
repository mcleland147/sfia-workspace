# Interv360 — Request Model Finalization

**Projet** : Interv360  
**Cycle** : Request Model Finalization  
**Mode** : SFIA Fast Track — Delivery produit contrôlé  
**Statut** : Cadrage opérationnel du Lot 3  
**Branche** : `delivery/interv360-request-model-finalization`

---

## 1. Objectif

Ce lot stabilise le modèle métier `Request` afin de disposer d'une demande d'intervention exploitable côté produit.

L'objectif est de sortir d'un modèle encore partiellement démonstratif et de consolider les champs structurants nécessaires au suivi métier, à l'affichage UI, aux validations API et aux futurs durcissements produit.

---

## 2. Références

Documents de référence :

- `../09-architecture/interv360-mvp-final-roadmap.md`
- `./backend-users-session.md`
- `./audit-trail.md`
- `../08-presentation/interv360-e2e-demo-runbook.md`

Décision roadmap :

- le Lot 1 Backend Users & Session est clôturé ;
- le Lot 2 Audit Trail est clôturé ;
- le Lot 3 prioritaire est la finalisation du modèle métier `Request` ;
- la cible est un MVP produit structuré.

---

## 3. Point de départ

Interv360 dispose déjà :

- d'un backend SQLite persistant ;
- d'une API `/api/v1` stabilisée ;
- d'un modèle demande déjà enrichi ;
- d'un frontend connecté en mode API ;
- d'un mode local conservé ;
- d'un workflow métier enrichi ;
- d'un audit trail enrichi ;
- d'une fiche demande affichant déjà plusieurs champs métier ;
- de données fictives cohérentes pour la démonstration.

Limite actuelle :

> le modèle `Request` reste à stabiliser comme modèle métier final du MVP.

---

## 4. Problème à résoudre

Le produit ne peut pas être considéré comme finalisable tant que la demande d'intervention ne porte pas clairement les informations métier structurantes :

- qui demande ;
- sur quel site ;
- quel équipement ou objet est concerné ;
- quelle catégorie métier ;
- quelle priorité ;
- quelle criticité ;
- quel impact métier ;
- quelle affectation éventuelle ;
- quel statut ;
- quel historique.

---

## 5. Périmètre du lot

À livrer :

- cadrage du modèle `Request` cible ;
- alignement backend / frontend / SQLite / API ;
- consolidation des champs métier structurants ;
- seed fictif mis à jour si nécessaire ;
- mapping API cohérent ;
- fiche demande UI ajustée si nécessaire ;
- validations backend/API renforcées si nécessaire ;
- tests backend ;
- tests frontend ;
- documentation README / runbook.

---

## 6. Hors scope

Ce lot n'introduit pas :

- auth réelle ;
- login réel ;
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
- nouvelle action workflow métier ;
- nouveau lot audit trail ;
- administration des utilisateurs ;
- reporting avancé ;
- notifications.

---

## 7. Modèle Request cible minimal

Modèle cible à confirmer pendant delivery :

```ts
type Request = {
  id: string;
  title: string;
  description: string;
  requesterName: string;
  requesterTeam?: string;
  siteLabel: string;
  equipmentLabel: string;
  category: string;
  priority: "low" | "medium" | "high" | "critical";
  criticality?: "low" | "medium" | "high" | "critical";
  impact: string;
  businessImpact: string;
  assignedToUserId?: string;
  assignedToDisplayName?: string;
  status: RequestStatus;
  requestedDate: string;
  createdAt: string;
  updatedAt?: string;
};
```

Points à décider :

- conserver les noms existants si déjà stabilisés ;
- éviter les renommages massifs inutiles ;
- privilégier l'alignement backend/frontend/API ;
- garder les données fictives ;
- éviter les champs trop enterprise pour ce lot.

---

## 8. SQLite cible

Table principale à stabiliser :

`requests`

Champs à vérifier / compléter selon l'existant :

| Champ | Objectif |
|-------|----------|
| `requester_name` | Identifier le demandeur |
| `requester_team` | Identifier l'équipe demandeuse si utile |
| `site_label` | Site concerné |
| `equipment_label` | Équipement ou objet concerné |
| `category` | Catégorie métier |
| `priority` | Priorité opérationnelle |
| `criticality` | Criticité métier si retenue |
| `impact` | Impact court / opérationnel |
| `business_impact` | Impact métier |
| `assigned_to_user_id` | Affectation optionnelle à un utilisateur backend |
| `assigned_to_display_name` | Snapshot affichage affectation si retenu |
| `requested_date` | Date de demande |
| `updated_at` | Date de dernière mise à jour si utile |

Contraintes :

- migration compatible avec les données existantes ;
- pas de suppression brutale ;
- seed fictif cohérent ;
- pas de données réelles.

---

## 9. API cible

Endpoints existants à préserver :

- `GET /api/v1/requests`
- `GET /api/v1/requests/:id`
- `POST /api/v1/requests/:id/transitions`
- `GET /api/v1/requests/:id/events`
- `POST /api/v1/demo/reset`

Objectif :

- enrichir les payloads requests si nécessaire ;
- conserver la compatibilité frontend ;
- éviter les ruptures non nécessaires ;
- ne pas créer de CRUD complet dans ce lot sauf décision explicite ;
- ne pas créer de formulaire création demande si cela élargit trop le scope.

---

## 10. Frontend cible

À préserver :

- liste des demandes ;
- fiche demande ;
- workflow actions ;
- journal enrichi ;
- mode local ;
- mode API ;
- permissions existantes ;
- reset admin.

À améliorer si nécessaire :

- affichage des champs métier structurants ;
- cohérence backend/local ;
- lisibilité de la fiche demande ;
- fallback legacy si champ absent ;
- tests UI.

---

## 11. Décision initiale

Décision proposée pour rester Fast Track :

- stabiliser d'abord le modèle Request existant ;
- compléter seulement les champs manquants utiles au MVP ;
- ne pas créer de CRUD complet ;
- ne pas créer de formulaire création demande ;
- ne pas ajouter de nouveau statut ;
- ne pas modifier le workflow ;
- ne pas introduire de données réelles ;
- conserver le mode local ;
- conserver le mode API ;
- conserver l'audit trail existant ;
- PR unique en fin de lot.

---

## 12. Incréments du lot

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| RM-01 | Cadrage opérationnel modèle Request | Réalisé |
| RM-02 | Audit modèle existant et décision champs cibles | À faire |
| RM-03 | Backend SQLite/API Request finalisé | À faire |
| RM-04 | Frontend fiche/liste Request alignées | À faire |
| RM-05 | Tests backend/frontend et non-régression | À faire |
| RM-06 | Documentation runbook/README | À faire |
| RM-07 | Préparation PR unique | À venir |

---

## 13. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Document delivery créé | OK |
| Modèle Request cible cadré | OK |
| Audit modèle existant réalisé | À faire |
| Champs cibles décidés | À faire |
| Backend Request aligné | À faire |
| SQLite Request aligné | À faire |
| API Request alignée | À faire |
| Frontend fiche/liste alignés | À faire |
| Mode local conservé | À valider |
| Mode API conservé | À valider |
| Audit trail conservé | À valider |
| Permissions conservées | À valider |
| Backend tests | À faire |
| Frontend tests | À faire |
| Backend build | À faire |
| Frontend build | À faire |
| Auth réelle exclue | OK |
| Login/password exclus | OK |
| OAuth/JWT/SSO exclus | OK |
| CRM/données réelles exclus | OK |
| Nouveau statut exclu | OK |

---

## 14. Garde-fous

Le lot doit préserver :

- users backend ;
- session locale ;
- audit trail enrichi ;
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
- formulaire création demande non cadré.

---

## 15. Décision RM-01

RM-01 valide le cadrage opérationnel du Lot 3.

Décisions :

- stabiliser le modèle Request existant ;
- compléter uniquement les champs utiles au MVP produit ;
- aligner backend / SQLite / API / frontend / local ;
- conserver le workflow existant ;
- conserver l'audit trail enrichi ;
- conserver les permissions existantes ;
- ne pas créer de CRUD complet ;
- ne pas créer de formulaire création demande ;
- ne pas introduire de nouveau statut ;
- ne pas introduire d'auth réelle ;
- ne pas introduire de token ;
- ne pas introduire OAuth/JWT/SSO ;
- ne pas introduire CRM ou données réelles.

---

## 16. Prochaine étape

Exécuter **RM-02** :

Audit modèle existant et décision champs cibles

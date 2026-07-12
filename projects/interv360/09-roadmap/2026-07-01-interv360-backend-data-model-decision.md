# Interv360 — Backend Data Model Decision

**Projet** : Interv360
**Cycle** : Backend Data Model Decision
**Mode** : SFIA Fast Delivery documentaire
**Statut** : Décision architecture data
**Branche** : `architecture/interv360-backend-data-model-decision`

---

## 1. Objectif

Ce document décide le modèle de données minimal à retenir pour préparer un futur prototype backend connecté Interv360.

Il ne lance aucune implémentation.

L'objectif est de cadrer :

- les entités minimales ;
- les champs nécessaires ;
- le journal serveur ;
- les transitions ;
- les données fictives ;
- les exclusions ;
- les décisions ouvertes avant choix technique.

---

## 2. Point de départ

Le cadrage backend cible ([`interv360-backend-target-framing.md`](./interv360-backend-target-framing.md)) recommande le scénario :

**Prototype connecté minimal**

Cible pressentie :

```text
Frontend React
   ↓
API backend minimale
   ↓
Persistance serveur
```

Le futur backend doit rester limité à des **données fictives** dans un premier temps.

Il doit permettre de tester :

- la lecture des demandes ;
- la lecture d'une demande ;
- l'application d'une transition ;
- l'écriture d'un événement journal ;
- le reset d'un seed fictif de démonstration.

### Alignement avec le démonstrateur local actuel

Le modèle cible s'aligne sur les types existants (`DemoRequest`, `DemoWorkflowEvent` dans `requestStatus.ts`) :

| Existant local | Cible backend |
|----------------|---------------|
| `DemoRequest` (plat) | `Request` + `RequestDetail` (séparation liste / détail) |
| `DemoWorkflowEvent` | `WorkflowEvent` (+ `id`, `source`, `isDemo`) |
| `RequestStatus`, `RequestPriority`, `RequestCriticality` | Enums identiques |
| `customerLabel`, `siteLabel` | Champs fictifs sur `Request` (pas d'entité Customer) |
| Blocs readonly (qualification, planning, etc.) | `RequestDetail.readonlyBlocks` ou champs structurés |

---

## 3. Réflexion d'optimisation SFIA

Le sujet reste structurant.

Il ne faut pas lancer directement un choix technique ou une implémentation backend sans stabiliser le modèle de données.

Décision de méthode :

- conserver un cycle **Fast Delivery documentaire** ;
- produire un seul document de décision data ;
- ne pas implémenter ;
- ne pas créer encore de schéma SQL ou migration.

---

## 4. Principes de modélisation

Le modèle doit rester :

- minimal ;
- explicable ;
- aligné avec le démonstrateur local ;
- compatible avec le workflow nominal existant ;
- limité à des données fictives ;
- évolutif vers un backend réel ;
- suffisamment simple pour un prototype.

Le modèle ne doit pas anticiper trop tôt :

- CRM ;
- production ;
- multi-tenant ;
- gestion avancée des rôles ;
- authentification ;
- reporting décisionnel ;
- statuts hors nominal.

---

## 5. Entités retenues

| Entité | Statut | Rôle |
|--------|--------|------|
| Request | Retenue | Demande SAV principale (liste, statut, indicateurs) |
| RequestDetail | Retenue | Détail métier fictif et blocs readonly |
| WorkflowEvent | Retenue | Journal des transitions et actions |
| RequestStatus | Retenue (enum) | Statut nominal de la demande |
| Priority | Retenue (enum) | Priorité fictive (`low` / `medium` / `high`) |
| Criticality | Retenue (enum) | Criticité fictive (`standard` / `sensitive` / `urgent`) |
| DemoSeed | Retenue (concept) | Réinitialisation démonstrateur |
| User | Exclue | Pas d'authentification ni multi-utilisateur |
| Customer | Exclue (entité) | `customerLabel` reste un libellé fictif sur Request |
| CRMReference | Exclue | Pas d'intégration CRM |

---

## 6. Entité Request

**Rôle :** représenter la demande SAV principale (vue liste, workflow, filtres).

| Champ | Type cible | Obligatoire | Commentaire |
|-------|------------|-------------|-------------|
| id | string | Oui | Ex. `SAV-DEMO-001` |
| title | string | Oui | Objet court fictif |
| status | RequestStatus | Oui | Statut nominal |
| priority | Priority | Oui | Fictive |
| criticality | Criticality | Oui | Fictive |
| customerLabel | string | Oui | Libellé fictif (pas de client réel) |
| siteLabel | string | Oui | Site fictif court |
| assignedTechnicianLabel | string | Non | Technicien démo si présent |
| createdAt | string (ISO) | Oui | Date fictive ; remplace `createdAtLabel` côté API |
| updatedAt | string (ISO) | Oui | Mis à jour à chaque transition |
| detailId | string | Oui | Référence vers RequestDetail (`id` = `requestId` en 1:1) |
| isDemo | boolean | Oui | Marqueur de donnée fictive |

**Décision :** Request est l'entité centrale. Les champs liste restent légers pour `GET /requests`.

---

## 7. Entité RequestDetail

**Rôle :** porter les informations métier fictives affichées dans la fiche détail et le parcours readonly.

| Champ | Type cible | Obligatoire | Commentaire |
|-------|------------|-------------|-------------|
| id | string | Oui | Identifiant détail (= `requestId` en 1:1 recommandé) |
| requestId | string | Oui | Référence demande |
| category | string | Oui | Ex. `categoryLabel` actuel |
| channel | string | Oui | Ex. `channelLabel` |
| impact | string | Oui | Ex. `impactLabel` |
| demoCenter | string | Oui | Ex. `siteDetailLabel` — centre démo générique |
| description | string | Non | Description courte fictive |
| readonlyBlocks | object | Non | Qualification, planification, intervention, compte rendu |

Structure indicative de `readonlyBlocks` (alignée sur le seed actuel) :

```json
{
  "qualification": { "summary", "checklist", "notes" },
  "planning": { "slot", "technician", "notes" },
  "intervention": { "location", "window", "notes", "safetyChecklist" },
  "report": { "summary", "result", "notes", "checklist" }
}
```

**Décision :** RequestDetail est **séparée** de Request pour une API plus propre (`GET /requests` léger, `GET /requests/:id` complet).

---

## 8. Enum RequestStatus

| Code | Libellé indicatif | Inclus |
|------|-------------------|--------|
| STAT-01 | À qualifier | Oui |
| STAT-02 | Qualifiée / à planifier | Oui |
| STAT-03 | Planifiée | Oui |
| STAT-04 | Intervention réalisée | Oui |
| STAT-06 | Clôturée | Oui |
| STAT-05 | Hors nominal | **Non** |
| STAT-07 | Hors nominal | **Non** |
| STAT-08 | Hors nominal | **Non** |

**Décision :** le backend minimal ne gère que le workflow nominal déjà démontré.

---

## 9. Enum Priority

| Code | Libellé UI (FR) |
|------|-----------------|
| low | Basse |
| medium | Moyenne |
| high | Haute |

**Décision :** Priority reste un indicateur fictif, sans logique automatique de calcul.

---

## 10. Enum Criticality

| Code | Libellé UI (FR) |
|------|-----------------|
| standard | Standard |
| sensitive | Sensible |
| urgent | Urgente |

**Décision :** Criticality reste un indicateur fictif, sans impact automatique sur le workflow.

---

## 11. Entité WorkflowEvent

**Rôle :** tracer les actions appliquées à une demande (journal serveur).

| Champ | Type cible | Obligatoire | Commentaire |
|-------|------------|-------------|-------------|
| id | string | Oui | UUID ou identifiant séquentiel |
| requestId | string | Oui | Demande concernée |
| type | string/enum | Oui | Type d'événement |
| fromStatus | RequestStatus | Oui | Statut avant transition |
| toStatus | RequestStatus | Oui | Statut après transition |
| label | string | Oui | Libellé lisible (ex. `message` actuel) |
| createdAt | string (ISO) | Oui | Horodatage |
| source | string | Oui | Ex. `demo` |
| isDemo | boolean | Oui | Marqueur fictif |

**Types d'événements candidats** (alignés sur `DemoWorkflowEventType` actuel) :

| Type | Usage |
|------|-------|
| qualification.confirmed | STAT-01 → STAT-02 |
| planning.confirmed | STAT-02 → STAT-03 |
| intervention.completed | STAT-03 → STAT-04 |
| report.closed | STAT-04 → STAT-06 |
| demo.reset | Réinitialisation seed (optionnel) |

**Décision :** le journal serveur devient la **source de traçabilité** des transitions dans le prototype connecté.

---

## 12. Transitions nominales

| Depuis | Vers | Action (UI actuelle) |
|--------|------|----------------------|
| STAT-01 | STAT-02 | Qualifier la demande |
| STAT-02 | STAT-03 | Planifier l'intervention |
| STAT-03 | STAT-04 | Marquer l'intervention réalisée |
| STAT-04 | STAT-06 | Clôturer avec compte rendu fictif |

**Décision :** la validation des transitions sera portée par le backend. Le frontend affiche les actions disponibles ; le backend **refuse** les transitions invalides (statut incorrect, STAT-06 terminal).

---

## 13. Concept DemoSeed

**Rôle :** réinitialiser le prototype connecté sur le jeu de données fictif (`demoRequests` actuel).

**Décision :** le seed reste explicitement marqué comme fictif (`isDemo: true`).

Capacités attendues :

- restaurer les demandes et détails fictifs ;
- vider le journal (recommandé pour alignement avec reset local actuel) ;
- revenir à l'état démontrable (`SAV-DEMO-001` en STAT-01, etc.).

**Questions ouvertes :**

| Question | Recommandation provisoire |
|----------|---------------------------|
| Reset : vider ou historiser le journal ? | **Vider** (aligné sur reset local) |
| Reset uniquement en environnement demo ? | Oui |
| Reset protégé par configuration ? | Oui (flag `DEMO_MODE` ou équivalent) |

---

## 14. Relations minimales

```text
Request 1 ── 1 RequestDetail
Request 1 ── n WorkflowEvent
```

Pas de relation vers : User, Customer (entité), CRM, Organization, Tenant.

---

## 15. Données fictives et garde-fous

Chaque donnée persistée dans le prototype minimal doit rester fictive.

Garde-fous :

- pas de nom réel de personne ;
- pas d'email ;
- pas de téléphone ;
- pas d'adresse réelle ;
- pas de client réel (libellés « Client démo … » uniquement) ;
- marqueur `isDemo` ;
- centres démo génériques ;
- pas de CRM ID réel ;
- pas de STAT-05 / STAT-07 / STAT-08.

---

## 16. Décisions ouvertes

| Décision | Statut | Commentaire |
|----------|--------|-------------|
| RequestDetail séparé ou embarqué | **Recommandé séparé** | À confirmer avec contrat API |
| Reset : vider ou historiser journal | Recommandé vider | Aligné démo locale |
| Persistance cible | Ouvert | JSON / SQLite / PostgreSQL — cycle stack |
| Format dates | Recommandé ISO 8601 | Remplace `createdAtLabel` texte libre |
| API REST exacte | Ouvert | Cycle contrat API ou stack |
| Mapping `customerLabel` / `siteLabel` | Retenu sur Request | Pas d'entité Customer |
| Authentification | Hors périmètre | Décision future |
| CRM | Hors périmètre | Décision dédiée |

---

## 17. Décision proposée

- Retenir un modèle minimal **Request / RequestDetail / WorkflowEvent**
- Conserver les enums **RequestStatus**, **Priority**, **Criticality** (alignés sur l'app)
- Exclure **User**, **Customer** (entité), **CRMReference** du prototype minimal
- Conserver **customerLabel** et **siteLabel** comme champs fictifs sur Request
- Limiter le backend aux données fictives (`isDemo`)
- Faire porter la **validation des transitions** par le futur backend
- Reporter persistance, stack technique et contrat API

---

## 18. Prochaine étape recommandée

**Cycle recommandé :** `architecture/interv360-backend-technical-stack-decision`

Objectif :

- décider le type de backend ;
- décider l'approche API ;
- décider la persistance ;
- cadrer les tests backend ;
- ne pas implémenter encore.

**Alternative :** `architecture/interv360-backend-api-contract-framing`

Objectif :

- cadrer les endpoints avant la stack technique.

**Ordre recommandé :**

1. modèle de données (ce cycle) ;
2. stack technique ;
3. contrat API ;
4. prototype backend minimal.

---

## 19. Validation

| Contrôle | Résultat |
|----------|----------|
| Code applicatif modifié | Non |
| Backend implémenté | Non |
| API créée | Non |
| DB créée | Non |
| SQL écrit | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

---

## 20. Décision finale

Ce cycle clôt la décision de modèle de données backend minimal.

**Modèle retenu :**

- Request
- RequestDetail
- WorkflowEvent
- RequestStatus
- Priority
- Criticality
- DemoSeed (concept)

Le passage à l'implémentation reste conditionné à des décisions séparées sur :

- stack backend ;
- persistance ;
- contrat API ;
- stratégie de reset ;
- tests backend.

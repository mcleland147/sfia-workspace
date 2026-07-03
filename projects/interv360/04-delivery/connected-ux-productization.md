# Interv360 — Connected UX Productization

**Projet** : Interv360  
**Cycle** : Connected UX Productization  
**Mode** : SFIA Batch Delivery produit contrôlé  
**Statut** : Batch produit — INC-PROD-05 réalisé  
**Branche** : `delivery/interv360-connected-ux-productization`

---

## 1. Objectif

Ce batch rend le frontend Interv360 plus exploitable avec le backend API productisé.

Le socle backend est désormais stabilisé :

- SQLite persistant ;
- API locale stabilisée ;
- modèle RequestDetail productisé ;
- erreurs API clarifiées ;
- reset API conservé.

L’objectif est de valoriser ce socle côté interface, sans ouvrir auth, users, rôles, CRM, workflow étendu ou refonte frontend.

---

## 2. Décision produit intégrée

Aucune décision roadmap dédiée n’est nécessaire avant ce batch.

Décision :

> prioriser une UX connectée API ciblée, maintenant que le backend produit est assez solide.

Raison :

- le backend expose des champs métier plus riches ;
- les erreurs API sont clarifiées ;
- le mode API local est stable ;
- le levier produit immédiat est de rendre ces informations visibles et compréhensibles côté frontend.

---

## 3. Périmètre du batch

Le batch peut inclure :

- affichage des champs productisés ;
- meilleure visibilité du mode API ;
- meilleure lisibilité des erreurs API ;
- documentation frontend/backend légère ;
- tests frontend de non-régression.

Le batch ne doit pas inclure :

- authentification ;
- utilisateurs ;
- rôles / permissions ;
- CRM ;
- données réelles ;
- nouveaux statuts ;
- STAT-05 / STAT-07 / STAT-08 ;
- refonte frontend ;
- React Router ;
- nouvelle navigation lourde ;
- PostgreSQL ;
- ORM lourd ;
- production / déploiement.

---

## 4. Incréments prévus

| Incrément | Objectif | Statut |
|----------|----------|--------|
| INC-PROD-01 | Borner les améliorations UX connectée | Réalisé |
| INC-PROD-02 | Afficher les champs métier productisés | Réalisé |
| INC-PROD-03 | Améliorer l’affichage des erreurs API | Non retenu — valeur marginale à ce stade |
| INC-PROD-04 | Mettre à jour documentation / runbook | Réalisé |
| INC-PROD-05 | Préparer PR du batch | Réalisé |

---

## 5. INC-PROD-01 — Décision UX connectée ciblée

### Améliorations candidates

| Sujet | Valeur produit | Risque | Décision |
|------|----------------|--------|----------|
| Afficher `requestedDate` | Temporaliser la demande | Faible | **Retenu** |
| Afficher `equipmentLabel` | Rendre l’objet d’intervention visible | Faible | **Retenu** |
| Afficher `businessImpact` | Mieux expliquer priorité / criticité | Faible | **Retenu** |
| Clarifier `siteLabel` | Donner le contexte site | Faible | **Retenu** — déjà affiché, conserver comme contexte visible |
| Clarifier erreurs API | Rendre les erreurs compréhensibles | Moyen | **Retenu** — amélioration légère uniquement |
| Ajouter écran auth | Hors scope | Fort | **Exclu** |
| Ajouter rôles | Hors scope | Fort | **Exclu** |
| Ajouter workflow étendu | Hors scope | Fort | **Exclu** |
| Refonte UX globale | Hors scope | Fort | **Exclu** |
| Nouvelle navigation lourde | Hors scope | Moyen | **Exclu** |

### Décision retenue

**Retenir :**

- afficher `requestedDate` dans le détail ;
- afficher `equipmentLabel` dans le détail ;
- afficher `businessImpact` dans le détail ;
- conserver `siteLabel` comme contexte visible de la demande ;
- améliorer l’affichage des erreurs API uniquement si cela reste limité au message utilisateur existant (`loadError`, `lastActionMessage`).

**Différer / exclure :**

- auth ;
- users ;
- rôles ;
- workflow étendu ;
- refonte frontend ;
- React Router ;
- nouvelle navigation ;
- nouvelle dépendance UI ;
- données réelles ;
- CRM.

### Justification

- les champs `requestedDate`, `equipmentLabel` et `businessImpact` sont déjà exposés par l’API `/api/v1` dans le payload `detail` ;
- le frontend doit rendre visible la valeur métier du backend productisé ;
- l’objectif est une UX connectée produit, pas un polish démo ;
- la navigation actuelle (écrans démo + fiche demande) reste suffisante ;
- `siteLabel` est déjà affiché dans `RequestDetail` — aucune refonte nécessaire, seulement conservation explicite ;
- `businessImpact` doit rester distinct du libellé court `impact` déjà affiché (`impactLabel`).

### Point d’attention pour INC-PROD-02

Le mapping frontend actuel (`apiRequestsRepository.ts`, type `DemoRequest`) ne propage pas encore `requestedDate`, `equipmentLabel` ni `businessImpact` depuis l’API. L’affichage nécessitera une extension ciblée du modèle frontend et du mapping API, sans modifier le backend.

---

## 6. Critères d’acceptation

| Critère | Résultat |
|---------|----------|
| Améliorations UX ciblées décidées | OK |
| Champs productisés visibles | OK |
| Mode local par défaut conservé | OK |
| Mode API opt-in conservé | OK |
| API `/api/v1` conservée | OK |
| Erreurs API mieux affichées si retenu | Non retenu — propagation existante suffisante |
| Tests frontend adaptés | OK |
| Backend non modifié ou justification mineure | OK — non modifié |
| Pas d’auth / users / rôles | OK |
| Pas de CRM / données réelles | OK |
| Pas de nouveaux statuts | OK |

---

## 7. Décisions techniques

| Sujet | Décision |
|------|----------|
| Champs affichés | `requestedDate`, `equipmentLabel`, `businessImpact`, `siteLabel` |
| Libellés UI | `Date de demande`, `Équipement / objet`, `Impact métier`, `Site` |
| Erreurs API | Non retenu dans ce batch — propagation existante suffisante |
| Navigation | Conservée |
| React Router | Non |
| Nouvelle dépendance | Non |
| Backend | Non modifié |
| API contract | Conservé |
| Mode local | Conservé |
| Mode API | Conservé |

---

## 8. Changements réalisés

**INC-PROD-01** — cadrage UX connectée :

- décision des champs productisés à rendre visibles ;
- exclusion de la refonte frontend ;
- exclusion d’auth/users/rôles ;
- conservation de la navigation existante ;
- conservation du mode local et du mode API opt-in.

**INC-PROD-02** — affichage des champs productisés :

- extension ciblée du modèle frontend ;
- mapping API de `requestedDate`, `equipmentLabel`, `businessImpact` ;
- alignement du mode local avec des valeurs fictives ;
- affichage des champs dans la fiche détail ;
- conservation de `siteLabel` comme contexte site ;
- conservation de `impactLabel` comme impact court distinct de `businessImpact` ;
- tests frontend adaptés ;
- aucun backend modifié.

**INC-PROD-04** — documentation / runbook :

- documentation des champs métier affichés dans la fiche demande ;
- clarification de `businessImpact` comme champ distinct de `impactLabel` ;
- clarification de `requestedDate` comme champ distinct de `createdAtLabel` ;
- documentation de la non-réalisation d’INC-PROD-03 ;
- mise à jour du runbook de validation ;
- aucune modification de code.

---

## 9. Validations

| Contrôle | Résultat |
|----------|----------|
| Backend build | OK |
| Backend tests | OK — 32 tests |
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| Validation navigateur local | Non exécutée |
| Validation navigateur API | Non exécutée |
| Reset API | Non exécutée |

---

## 10. Limites assumées

Limites attendues :

- pas d’authentification ;
- pas d’utilisateurs ;
- pas de rôles ;
- pas de CRM ;
- pas de données réelles ;
- pas de workflow étendu ;
- pas de nouveaux statuts ;
- pas de refonte frontend ;
- pas de production.

---

## 11. Prochaine étape recommandée

**INC-PROD-05** : préparer la PR finale du batch `delivery/interv360-connected-ux-productization`.

---

## 12. Champs affichés dans la fiche demande

La fiche demande affiche désormais les champs métier productisés suivants :

| Champ | Libellé UI | Commentaire |
|-------|------------|-------------|
| `requestedDate` | Date de demande | Distinct de `createdAtLabel` / « Créée » |
| `equipmentLabel` | Équipement / objet | Objet métier concerné |
| `businessImpact` | Impact métier | Distinct de `impactLabel` / « Impact » |
| `siteLabel` | Site | Contexte site conservé |

Ces champs sont disponibles en mode local et en mode API.

Le frontend source reste sans authentification, sans rôles, sans CRM, sans workflow étendu et sans nouvelle navigation.

---

## 13. Décision INC-PROD-03

INC-PROD-03, initialement envisagé pour améliorer l’affichage des erreurs API, n’est pas retenu dans ce batch.

Raison :

- les erreurs API sont déjà propagées via `RequestsRepositoryError` ;
- `loadError` et `lastActionMessage` affichent déjà un message utilisateur ;
- afficher les codes techniques comme `TRANSITION_NOT_ALLOWED` dans l’interface apporterait une valeur produit marginale à ce stade ;
- le batch doit rester centré sur la valorisation UX des champs productisés.

Le sujet pourra être rouvert plus tard si un besoin UX clair apparaît autour des erreurs API.

---

## 14. Préparation PR intégrée

### Titre proposé

`Surface Interv360 productized request details`

### Description proposée

```markdown
## Summary
This PR productizes the connected Interv360 frontend UX after backend request model productization and API validation hardening.
It includes a controlled product batch:
1. Connected UX scope decision
   - selected productized request detail fields to surface;
   - excluded auth, users, roles, CRM, workflow extension, React Router and frontend refactor.
2. Productized request detail display
   - surfaces `requestedDate` as **Date de demande**;
   - surfaces `equipmentLabel` as **Équipement / objet**;
   - surfaces `businessImpact` as **Impact métier**;
   - keeps `siteLabel` visible as **Site**;
   - keeps `impactLabel` visible as **Impact**;
   - keeps `businessImpact` distinct from `impactLabel`;
   - keeps `requestedDate` distinct from the existing creation label.
3. Documentation / runbook
   - documents productized frontend fields;
   - documents local and API mode validation checks;
   - records that API error display improvement was not retained in this batch.
## Validation
- Frontend build: OK
- Frontend tests: 81 passed
- Backend build: OK
- Backend tests: 32 passed
- Browser local validation: not rerun; covered by frontend tests and documented in runbook
- Browser API validation: not rerun; covered by API mapping tests and documented in runbook
## Guardrails
No backend change, SQLite change, API contract change, workflow change, authentication, users, roles, CRM integration, real data, new workflow status, STAT-05/07/08, PostgreSQL, heavy ORM, React Router, new frontend dependency, Notion publication, Controlled Delivery change, or sfia-notion-sync update was introduced.
```

Validation navigateur non rejouée — contrôles documentés dans le runbook, tests frontend couvrent l'affichage et le mapping API.

---

## 15. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-connected-ux-productization?expand=1 |
| Cible | main |
| Source | delivery/interv360-connected-ux-productization |
| Merge automatique | Non |

---

## 16. Statut merge

| Élément | Valeur |
|---------|--------|
| PR | [#55](https://github.com/mcleland147/sfia-workspace/pull/55) |
| Source | `delivery/interv360-connected-ux-productization` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `2ac957f` |
| Main synchronisée | OK |
| Frontend build post-merge | OK |
| Frontend tests post-merge | OK — 81 tests |
| Backend build post-merge | OK |
| Backend tests post-merge | OK — 32 tests |
| INC-PROD-01 | OK — cadrage UX connectée |
| INC-PROD-02 | OK — affichage champs productisés |
| INC-PROD-03 | Non retenu — valeur marginale à ce stade |
| INC-PROD-04 | OK — documentation / runbook |
| `requestedDate` affiché | OK |
| `equipmentLabel` affiché | OK |
| `businessImpact` affiché | OK |
| `siteLabel` conservé | OK |
| `impactLabel` conservé | OK |
| `businessImpact` distinct de `impactLabel` | OK |
| `requestedDate` distinct de `createdAtLabel` | OK |
| Mode local conservé | OK |
| Mode API opt-in conservé | OK |
| API `/api/v1` conservée | OK |
| Backend modifié | Non |
| SQLite modifiée | Non |
| React Router ajouté | Non |
| Nouvelle dépendance ajoutée | Non |
| Authentification introduite | Non |
| Utilisateurs / rôles introduits | Non |
| CRM introduit | Non |
| Données réelles introduites | Non |
| Nouveaux statuts introduits | Non |
| PostgreSQL introduit | Non |
| ORM lourd introduit | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le batch **Connected UX Productization** est mergé dans `main`.

La branche principale rend désormais visibles côté frontend les champs métier productisés :

- `requestedDate` sous le libellé **Date de demande** ;
- `equipmentLabel` sous le libellé **Équipement / objet** ;
- `businessImpact` sous le libellé **Impact métier**.

Le batch conserve :

- `siteLabel` comme contexte site ;
- `impactLabel` comme impact court distinct de `businessImpact` ;
- le mode local par défaut ;
- le mode API opt-in ;
- la navigation existante ;
- l’API `/api/v1`.

INC-PROD-03 n’a pas été retenu : l’amélioration de l’affichage des erreurs API apporterait une valeur marginale à ce stade, les erreurs étant déjà propagées via les messages existants.

Aucun backend, SQLite, workflow, auth, users, rôles, CRM, donnée réelle, nouveau statut, React Router, nouvelle dépendance, PostgreSQL ou ORM lourd n’a été introduit.

Aucun document de merge séparé n’a été créé afin de respecter le mode SFIA Batch Delivery produit contrôlé.

### Prochaine étape recommandée

Le socle Interv360 dispose maintenant :

- d’un backend SQLite persistant ;
- d’une API locale stabilisée ;
- d’un modèle RequestDetail productisé ;
- d’erreurs API clarifiées ;
- d’un frontend qui affiche les champs métier productisés.

Options possibles pour la suite :

1. `architecture/interv360-auth-and-user-framing`
   - si l’objectif produit devient identité, utilisateurs, rôles et responsabilités ;
2. `architecture/interv360-workflow-extension-framing`
   - si l’objectif devient l’extension du workflow métier ;
3. `delivery/interv360-product-demo-consolidation`
   - si l’objectif est de consolider une démonstration produit complète après les derniers incréments ;
4. `architecture/interv360-product-roadmap-next`
   - si une nouvelle priorisation produit est nécessaire avant le prochain batch.

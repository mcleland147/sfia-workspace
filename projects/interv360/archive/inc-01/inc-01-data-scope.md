# Interv360 — INC-01 Data scope

**Projet** : Interv360  
**Incrément** : INC-01 — Flux SAV minimal démontrable  
**Cycle** : Implementation preparation  
**Statut** : Draft  
**Branche** : `delivery/interv360-inc-01-implementation-preparation`

---

## 1. Objectif du document

Ce document définit le **périmètre data minimal autorisé** pour INC-01.

Il ne crée pas encore de base de données, de schéma SQL, de migration ou d'API.

Il sert à cadrer :

- les objets data nécessaires ;
- les données fictives de démonstration ;
- la stratégie de persistance locale ;
- les règles de traçabilité minimale ;
- les garde-fous data avant le premier commit applicatif.

---

## 2. Décisions de référence

**Sources de référence :**

- [`inc-01-technical-scope.md`](inc-01-technical-scope.md)
- [`inc-01-data-model.md`](inc-01-data-model.md)
- [`inc-01-demo-data.md`](inc-01-demo-data.md)
- [`2026-06-29-inc-01-front-back-data-decisions.md`](2026-06-29-inc-01-front-back-data-decisions.md)
- [`inc-01-api-strategy.md`](inc-01-api-strategy.md)
- [`2026-06-29-inc-01-readiness-checklist.md`](2026-06-29-inc-01-readiness-checklist.md)

**Décisions reprises :**

- données fictives uniquement ;
- aucune donnée personnelle réelle ;
- persistance locale structurée ;
- pas de backend partagé ;
- pas de CRM réel ;
- pas d'API externe ;
- pas de base serveur ;
- pas de DDL / SQL dans ce cycle ;
- journal fonctionnel minimal pour la démonstration.

---

## 3. Objets data minimaux INC-01

Objets conceptuels à supporter pour INC-01 (alignés sur `inc-01-data-model.md`) :

| Objet | Inclus INC-01 | Rôle | Commentaire |
|-------|:-------------:|------|-------------|
| Demande SAV | Oui | Objet central du flux | Source de vérité fonctionnelle locale |
| Qualification | Oui | Passage STAT-01 → STAT-02 | Checklist minimale, données obligatoires |
| Intervention | Oui | Planification et terrain | Porte technicien, créneau, statut opérationnel |
| Créneau | Oui | Planification simple | Pas d'optimisation avancée |
| Technicien | Oui | Affectation démo | Acteur fictif uniquement |
| Compte rendu | Oui | Synthèse terrain | CR minimal lié à l'intervention |
| Résultat | Oui | Issue métier / clôture | Supporte passage vers STAT-06 |
| Statut courant | Oui | Suivi STAT-01 → STAT-06 | Gouverné par orchestration métier, pas par la couche data seule |
| Journal fonctionnel minimal | Oui | Traçabilité de démonstration | Non assimilé à audit réglementaire |
| Client réel | Non | Hors périmètre | Pas de données personnelles réelles |
| CRM | Non | Hors périmètre | Aucune synchronisation |
| Dashboard data | Non | Hors périmètre | Pas d'indicateurs STAT-07/08 |

---

## 4. Données de démonstration

**Principe :** INC-01 doit fonctionner avec un **jeu de données fictif et reproductible** (`inc-01-demo-data.md`).

**Seed minimal attendu :**

| Donnée | Exemple / contenu attendu | Commentaire |
|--------|---------------------------|-------------|
| Demande SAV démo | `SAV-DEMO-001` | Motif : « Machine client en panne intermittente » |
| Intervention démo | `INT-DEMO-001` | Liée à SAV-DEMO-001 |
| Technicien démo | `Technicien Démo 01` | Aucun nom réel — acteur fictif |
| Client / site démo | `Client Démo Industrie` / `Lyon Démo` | Libellés explicitement fictifs |
| Créneau démo | `J+1 matin` | Planification simple |
| Qualification démo | Checklist : contexte confirmé, impact identifié, intervention nécessaire | Passage STAT-02 |
| Compte rendu démo | « Contrôle effectué, défaut intermittent reproduit puis corrigé. » | Suffisant pour clôture |
| Résultat démo | « Remise en service effectuée » | Précondition STAT-06 |
| Journal initial | Création → qualification → planification → CR → clôture | 5 entrées minimales (§9 `inc-01-demo-data.md`) |

Le seed doit permettre de rejouer le chemin nominal :

```text
STAT-01 → STAT-02 → STAT-03 → STAT-04 → STAT-06
```

**Acteurs fictifs de démo :** `Responsable SAV Démo`, `Technicien Démo 01` — aucun correspondant réel.

**Reset démo :** une capacité de réinitialisation du jeu SAV-DEMO-001 / INT-DEMO-001 sera **à prévoir** dans l'implémentation (non codée dans ce cycle) pour rejouer la démonstration.

---

## 5. Persistance locale

**Principe retenu :** **persistance locale structurée** — état conservé entre les actions du flux INC-01, sans serveur.

| Option | Statut | Commentaire |
|--------|--------|-------------|
| Stockage navigateur structuré | **Recommandée en priorité** | Simple pour mono-app web ; suffisant pour démo mono-session |
| Fichier local | Possible | Utile si environnement local contrôlé (hors navigateur) |
| SQLite embarqué | Possible mais à justifier | Plus lourd pour INC-01 — réserver si besoin de requêtes structurées locales |
| Base serveur | **Exclue** | Hors périmètre INC-01 |

**Décision proposée :**

- retenir une **persistance locale légère** (stockage navigateur structuré en option préférée) ;
- éviter une base serveur ;
- éviter SQL/DDL dans ce cycle ;
- **confirmer le mécanisme physique** dans [`inc-01-start-checklist.md`](inc-01-start-checklist.md) ou au moment du premier commit applicatif.

Ce document ne crée **aucun** schéma exécutable ni fichier de seed JSON/CSV.

---

## 6. Règles data minimales

| Règle | Décision |
|-------|----------|
| Données réelles | **Interdites** |
| Données personnelles | **Interdites** |
| Données CRM | **Interdites** |
| Seed fictif | **Obligatoire** |
| Rejouabilité du flux | **Obligatoire** |
| Persistance multi-utilisateur | **Hors périmètre** |
| Synchronisation externe | **Hors périmètre** |
| Suppression / reset démo | **À prévoir** (fonctionnellement requis) |
| Journal fonctionnel minimal | **Obligatoire** |
| Audit réglementaire | **Hors périmètre** |
| Fichiers CSV/JSON/SQL de seed | **Hors périmètre** de ce cycle documentaire |

---

## 7. Responsabilités logiques data

| Couche | Responsabilité |
|--------|----------------|
| **UI** | Déclenche les actions utilisateur |
| **Orchestration métier** | Valide les transitions et règles de flux (STAT-01 → STAT-06) |
| **Data locale** | Stocke et restitue l'état fictif des objets INC-01 |
| **Seed** | Initialise le jeu de démonstration (SAV-DEMO-001, INT-DEMO-001, etc.) |
| **Journal fonctionnel** | Trace les événements fonctionnels clés (5 étapes minimales) |

**Règle importante :** la data conserve l'état, mais **ne décide pas seule** des transitions métier (`2026-06-29-inc-01-front-back-data-decisions.md`).

---

## 8. Garde-fous data

Le premier commit applicatif **ne devra pas** contenir :

- données réelles ;
- noms, emails, téléphones ou adresses réels ;
- connexion CRM ;
- synchronisation externe ;
- base serveur ;
- migration SQL ou dump de données ;
- secrets ou credentials ;
- logs contenant des données sensibles ;
- audit réglementaire présenté comme complet ;
- fichiers de seed exécutables committés avec des données réelles.

---

## 9. Préconditions data avant code

| Prérequis | Statut | Commentaire |
|-----------|--------|-------------|
| Objets data minimaux confirmés | **Proposé** | Tableau §3 — à valider avec ce document |
| Seed fictif défini | **Proposé** | SAV-DEMO-001 / INT-DEMO-001 — détail dans `inc-01-demo-data.md` |
| Mécanisme de persistance retenu | **À confirmer** | Stockage navigateur structuré recommandé — choix final ouvert |
| Règle reset démo | **À définir** | Nécessaire pour rejouer la démo |
| Interdiction données réelles | **Proposée** | Garde-fou à confirmer en checklist de démarrage |
| Journal fonctionnel minimal | **Proposé** | 5 entrées documentées — niveau démonstration uniquement |

---

## 10. Décision du document

**Statut proposé :**

- [ ] Périmètre data validé
- [x] Périmètre data proposé, à valider
- [ ] Périmètre data incomplet

**Décision :**

Le périmètre data INC-01 est **proposé** sur une base :

- données fictives uniquement ;
- persistance locale structurée (légère, sans serveur) ;
- seed de démonstration reproductible (SAV-DEMO-001, INT-DEMO-001) ;
- journal fonctionnel minimal (5 étapes) ;
- aucune donnée réelle ;
- aucun CRM, backend ou base serveur.

Le **mécanisme physique** de persistance reste à confirmer avant le premier commit applicatif.

**Aucun SQL, DDL, migration, API ou fichier de données exécutable n'est produit par ce document.**

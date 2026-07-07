# SFIA v2.x — Method Versioning Standard

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md`  
**Cycle :** Capitalisation méthode SFIA v2.x — Method Versioning  
**Version SFIA :** v2.3 — standard structurant (draft revue Morris)  
**Source pilote :** Chantiers360 v2 — chaîne post-MVP PR #129 à #132

> **Standard méthode** — définit les règles de versioning SFIA v2.x. Ne renomme pas massivement les dossiers ni ne modifie les décisions passées.

## 1. Objectif

Définir la **règle de versioning** des standards SFIA v2.x :

- baseline ;
- version mineure (minor) ;
- version patch ;
- version majeure future ;
- registre de versions ;
- règles d'usage dans Git.

**Questions adressées :**

1. Quand incrémenter v2.1, v2.2, v2.3 ?
2. Quand incrémenter v2.1.1, v2.2.1 ?
3. Quand une évolution justifie une future v3.0 ?
4. Comment tracer les versions sans renommer massivement les dossiers ?
5. Comment distinguer baseline, standard structurant, alignement documentaire et correction mineure ?
6. Comment éviter qu'un petit changement devienne une nouvelle version méthode ?

## 2. Doctrine

| Principe | Règle |
|----------|-------|
| **Git = source de vérité** | Versions tracées par PR, commit et registre — pas par renommage de dossiers |
| **Version = capacité stabilisée** | Une version reflète une **capacité méthode** actée, pas chaque commit |
| **Standard structurant → minor** | Nouveau standard réutilisable = incrément mineur (v2.1, v2.2, v2.3…) |
| **Alignement / correction → patch** | Post-merge, wording, références croisées = patch (v2.x.y) |
| **Doctrine / rupture → major future** | Changement de modèle complet = future v3.0 — décision stratégique Morris |
| **Morris valide les passages** | Aucun versioning automatique par Cursor |
| **Versioning ≠ PR ni décision** | Le numéro documente ; il ne remplace pas merge Morris ni gates L0 |

**Standards liés :**

- `sfia-v2-automation-levels.md` — L0–L5
- `sfia-v2-incremental-delivery-closure-standard.md` — baseline delivery v2.0
- `sfia-cycle-routing-guide.md` — cycles méthode

## 3. Définitions

### SFIA v2.0 baseline

Point de départ du **pilote delivery progressif** — INC-n, QA-G3/G4, capitalisation, automation L0–L4. Dossier stable `sfia-v2/`. Pas de renommage rétroactif.

### Version mineure — v2.x

Incrément **v2.1, v2.2, v2.3…** — nouvelle **capacité méthode** structurante et réutilisable.

### Version patch — v2.x.y

Incrément **v2.1.1, v2.2.1…** — alignement post-merge, clarification, correction documentaire **sans** nouvelle capacité.

### Version majeure future — v3.0

Réservée à une **rupture de doctrine** ou refonte complète de la méthode — hors périmètre actuel.

### Standard structurant

Document méthode qui introduit matrice, gates, cycle ou gouvernance transverse réutilisable (ex. design coverage, technical architecture).

### Alignement documentaire

PR post-merge qui met à jour le **statut projet** ou les références sans nouveau standard (ex. PR #130, #132).

### Correction mineure

Typo, lien cassé, index — **sans** changement de statut projet ni nouvelle capacité ; peut rester **sans** patch si inclus dans une PR patch voisine.

### Registre de versions

Table centrale §6 — référence déclarative des versions actées ; ne modifie pas rétroactivement les décisions.

## 4. Règles d'incrémentation

### Minor version — v2.1, v2.2, v2.3

À utiliser si :

- nouveau **standard structurant** ;
- nouvelle **capacité méthode** réutilisable ;
- nouveau **gate** ou **cycle** SFIA v2.0 ;
- nouveau niveau de **gouvernance transverse** ;
- extension **significative** du delivery ou de la méthode.

**Exemples pilote :**

| Évolution | Version |
|-----------|---------|
| Design Coverage Standard — PR #129 | **v2.1** |
| Technical Architecture & Decision Documentation — PR #131 | **v2.2** |
| Method Versioning Standard (ce document) | **v2.3** |

### Patch version — v2.1.1, v2.2.1

À utiliser si :

- **alignement post-merge** ;
- correction documentaire ;
- clarification ou wording ;
- référence croisée ;
- index / README projet ;
- **pas** de nouvelle capacité méthode.

**Exemples pilote :**

| Évolution | Version |
|-----------|---------|
| Alignement Design Coverage — PR #130 | **v2.1.1** |
| Alignement Technical Architecture — PR #132 | **v2.2.1** |

### Major version — v3.0

À réserver pour :

- changement de **doctrine** ;
- changement majeur de **cycle de vie** ;
- automatisation **L5 globale** (hors cible actuelle) ;
- rupture avec SFIA v1.1 / v2.x ;
- nouvelle **architecture méthode** complète.

**Règle :** v3.0 = décision stratégique Morris — pas d'incrément implicite.

## 5. Matrice de versioning

| Type de changement | Exemple | Versioning recommandé | Gate Morris ? | PR / preuve Git |
|--------------------|---------|----------------------|---------------|-----------------|
| Nouveau standard structurant | Design Coverage, Tech Architecture, Versioning | **Minor** v2.x | **Obligatoire** | PR dédiée + merge |
| Nouveau prompt catalog majeur | §15–§17 supplements | Minor ou inclus dans minor du standard | Recommandé | PR méthode |
| Nouvelle checklist structurante | §12.2–§12.4 | Minor ou inclus | Recommandé | PR méthode |
| Alignement post-merge | PR #130, #132 | **Patch** v2.x.y | Requis si statut projet change | PR alignement |
| Correction typo | Lien, coquille | Patch ou aucun si trivial | Non si sans impact statut | PR docs |
| Refonte doctrine | Nouveau modèle L0–L5 global | **Major future** v3.0 | **Obligatoire** | Cycle dédié |
| Création ADR projet | ADR Chantiers360 stack | **Aucun** — versioning projet | Morris | Cycle ADR séparé |
| Comparaison V0 | Fin pilote | **Aucun** — cycle projet | Morris | Cycle V0 |
| Micro-cycle réserve | R-QA-03/04/05 | **Aucun** — cycle QA | Morris | PR projet |
| Modification code projet | INC-n delivery | **Aucun** — version app | Morris GO INC | PR feature |

**Règle structurante :** ne pas confondre **version méthode**, **version projet** et **version applicative**.

## 6. Registre des versions SFIA v2.x

| Version | PR / commit | Objet | Statut |
|---------|-------------|-------|--------|
| **v2.0** | baseline pilote Chantiers360 delivery progressif | Baseline SFIA v2.0 — INC-n, QA, capitalisation, automation L0–L4 | Actée |
| **v2.1** | PR #129 `f6ae614` | Design Coverage Standard | Actée |
| **v2.1.1** | PR #130 `dab3a94` | Alignement post-merge Design Coverage | Actée |
| **v2.2** | PR #131 `a7710a5` | Technical Architecture & Decision Documentation Standard | Actée |
| **v2.2.1** | PR #132 `e807c1a` | Alignement post-merge Technical Architecture | Actée |
| **v2.3** | *cycle en cours* | Method Versioning Standard (ce document) | Draft — revue Morris |

**Règles du registre :**

- **Déclaratif** — référence pour les prochains cycles ;
- **Ne renomme pas** les dossiers `sfia-v2/` ;
- **Ne modifie pas** rétroactivement les décisions Morris ;
- **Mis à jour** par PR dédiée lors d'un nouveau minor ou patch acté.

## 7. Règle repository-first

| Règle | Détail |
|-------|--------|
| Dossiers stables | `method/sfia-fast-track/documentation/capitalization/sfia-v2/` reste le chemin canonique |
| Headers optionnels | Un standard peut porter `Version SFIA : v2.x` en en-tête si utile |
| Traçabilité PR | Chaque acte de version = PR + commit sur `main` |
| Registre central | Ce standard §6 = source unique du registre v2.x |
| Pas de renaming massif | v2.0 → v2.1 → v2.2 **sans** renommer fichiers ni dossiers |

## 8. Règle d'application aux standards existants

- Un standard existant peut rester nommé `sfia-v2-*` ;
- Sa **version méthode** est indiquée dans le **registre** §6 ;
- Les futures PR peuvent ajouter une ligne `Version SFIA : v2.x` en header si utile ;
- **Ne pas** modifier tous les fichiers existants sans besoin explicite ;
- Les alignements post-merge mettent à jour le **statut projet**, pas le nom des standards.

## 9. Gates Morris

| Passage | Gate |
|---------|------|
| **Minor** v2.x | Morris **obligatoire** — nouveau standard ou capacité |
| **Patch** v2.x.y | Morris **requis** si statut projet ou méthode change |
| **Major** v3.0 | Décision **stratégique** Morris obligatoire |
| **Automatisation** | Aucun versioning automatique par Cursor |

**Invariant :** le versioning documente une décision déjà actée — il ne la remplace pas.

## 10. Niveaux d'automatisation

| Niveau | Rôle versioning |
|--------|-----------------|
| **L0** | Morris valide version cible (minor / patch / major future) |
| **L1** | Contrôle registre / PR / commit cohérents |
| **L2** | Génération guidée de ligne registre |
| **L3** | Mise à jour documentaire bornée (registre, routing, README) |
| **L4** | Orchestration contrôlée versioning + post-merge alignement |
| **L5 ciblé** | Audit read-only registre vs `main` |
| **L5 global** | **Interdit** — pas d'incrément version sans gate Morris |

## 11. Anti-patterns

| Anti-pattern | Pourquoi éviter |
|--------------|-----------------|
| Incrémenter à **chaque commit** | Bruit — version ≠ commit |
| **Renommer massivement** les dossiers | Coût, rupture Git, pas de valeur |
| Confondre **version méthode** et **version projet** | Chantiers360 MVP ≠ SFIA v2.2 |
| Masquer des **réserves** avec une version | R-UX / R-QA restent traçables |
| Laisser **Cursor décider** seul du numéro | Gate Morris L0 obligatoire |
| Versioning **sans PR / commit** | Git n'est plus source de vérité |
| Mélanger versioning avec **V0, ADR projet, roadmap** | Cycles séparés |
| **Patch** pour un nouveau standard | Sous-estime l'impact — utiliser minor |
| **Minor** pour une typo | Sur-estime l'impact — utiliser patch ou aucun |

## 12. Application Chantiers360 v2

| Élément | Application |
|---------|-------------|
| **Pilote** | Chantiers360 v2 = premier pilote SFIA **v2.0 baseline** |
| **Design Coverage** | Standard structurant post-MVP → **v2.1** — mergé PR #129 |
| **Alignement Design Coverage** | Patch → **v2.1.1** — PR #130 |
| **Technical Architecture** | Standard structurant post-MVP → **v2.2** — mergé PR #131 |
| **Alignement Technical Architecture** | Patch → **v2.2.1** — PR #132 |
| **Versioning** | Standard structurant → **v2.3** — cycle en cours |
| **Réserves** | R-UX-01, R-QA-03/04/05 — **inchangées**, non levées |
| **ADR / DAA / DAT projet** | **Non produits** — cycles séparés |
| **Comparaison V0** | **Non lancée** |
| **Statut MVP** | **MVP CAPITALIZED WITH RESERVES** — inchangé |

## 13. Décisions postérieures possibles

| # | Décision | Statut |
|---|----------|--------|
| 1 | Ajouter `Version SFIA : v2.x` dans headers des standards clés | Non lancé |
| 2 | Micro-cycle ADR Chantiers360 | Non lancé — Morris |
| 3 | Comparaison V0 | Non lancée — fin pilote |
| 4 | Micro-cycle R-QA | Non lancé |
| 5 | Trajectoire produit | Non décidée |
| 6 | **SFIA v2.4+** si nouveau standard structurant | Futur — gate Morris |

> Chaque décision = **cycle séparé** avec gate Morris.

---

**Documents sources pilote :**

- `sfia-v2-design-coverage-standard.md` — v2.1
- `sfia-v2-technical-architecture-decision-documentation-standard.md` — v2.2
- `projects/chantiers360-v2/README.md` — statut post-MVP

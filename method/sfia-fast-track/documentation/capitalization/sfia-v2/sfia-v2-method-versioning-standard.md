# SFIA v2.x — Method Versioning Standard

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md`  
**Cycle :** Capitalisation méthode SFIA v2.x — Method Versioning  
**Version SFIA :** v2.4 — standard de consolidation actif PR #139 ; v2.4.1 — patch d'alignement documentaire (en cours)  
**Source pilote :** Chantiers360 v2 — chaîne post-MVP PR #129 à #133

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
- `sfia-v2.4-consolidation-operating-efficiency-standard.md` — consolidation operating model v2.4
- `sfia-cycle-routing-guide.md` — cycles méthode (§4.3 v2.4)

## 3. Définitions

### SFIA v2.0 baseline

Point de départ du **pilote delivery progressif** — INC-n, QA-G3/G4, capitalisation, automation L0–L4. Dossier stable `sfia-v2/`. Pas de renommage rétroactif.

### Version mineure — v2.x

Incrément **v2.1, v2.2, v2.3…** — nouvelle **capacité méthode** structurante et réutilisable.

### Version patch — v2.x.y

Incrément **v2.1.1, v2.2.1, v2.4.1…** — alignement post-merge, clarification, correction documentaire **sans** nouvelle capacité.

**Règle patch :** un patch **ne crée pas** de doctrine concurrente et **n'élargit pas** le périmètre sans validation Morris.

### SFIA v2.4 — minor de consolidation

**v2.4** = version **mineure** — standard structurant de consolidation & operating efficiency (PR #139).

| Propriété | Règle |
|-----------|-------|
| Nature | Nouvelle capacité méthode — profils adaptatifs, friction réduite, handoff documentaire |
| Doctrine | **Inchangée** — arbitrage humain L0, Git source de vérité |
| v3.0 | **Ne lance pas** v3.0 — immediate NO-GO post-pilote Chantiers360 v2 |
| Référence | `sfia-v2.4-consolidation-operating-efficiency-standard.md` |

### SFIA v2.4.1 — patch d'alignement documentaire

**v2.4.1** = version **patch** — aligner les documents de référence avec le standard v2.4 **sans** nouvelle doctrine.

| Propriété | Règle |
|-----------|-------|
| Objectif | Routage, versioning, QA, validation, prompts, knowledge layer |
| Nature | Documentation-only — **pas** de nouveau standard |
| Trajectoire Morris | **3 patchs maximum** sur branche `method/sfia-v2.4-reference-documentation-alignment` |
| Patch 1 | Routage & versioning (ce cycle) |
| Patch 2 | QA, validation & closure — hors périmètre patch 1 |
| Patch 3 | Prompt, handoff & knowledge layer — hors périmètre patch 1 |

### Version majeure future — v3.0

Réservée à une **rupture de doctrine** ou refonte complète de la méthode — **immediate NO-GO** après pilote Chantiers360 v2 (REX final PR #138).

Toute discussion v3.0 nécessite une **décision Morris dédiée** — distincte de toute évolution v2.4 / v2.4.1 / v2.5+.

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
| Consolidation & Operating Efficiency — PR #139 | **v2.4** |

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
| Alignement Method Versioning — PR #134 | **v2.3.1** |
| Alignement documentaire v2.4 — patch 1 routing/versioning | **v2.4.1** (en cours) |

### Major version — v3.0

À réserver pour :

- changement de **doctrine** ;
- changement majeur de **cycle de vie** ;
- automatisation **L5 globale** (hors cible actuelle) ;
- rupture avec SFIA v1.1 / v2.x ;
- nouvelle **architecture méthode** complète.

**Règle :** v3.0 = rupture doctrine — **immediate NO-GO** post-pilote — décision stratégique Morris dédiée — pas d'incrément implicite.

## 5. Matrice de versioning

| Type de changement | Exemple | Versioning recommandé | Gate Morris ? | PR / preuve Git |
|--------------------|---------|----------------------|---------------|-----------------|
| Nouveau standard structurant | Design Coverage, Tech Architecture, Versioning | **Minor** v2.x | **Obligatoire** | PR dédiée + merge |
| Nouveau prompt catalog majeur | §15–§17 supplements | Minor ou inclus dans minor du standard | Recommandé | PR méthode |
| Nouvelle checklist structurante | §12.2–§12.4 | Minor ou inclus | Recommandé | PR méthode |
| Alignement post-merge | PR #130, #132, #134 | **Patch** v2.x.y | Requis si statut projet change | PR alignement |
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
| **v2.3** | PR #133 `796bfe8` | Method Versioning Standard | Actée |
| **v2.3.1** | PR #134 `44fd56d` | Alignement post-merge Method Versioning | Actée |
| **v2.4** | PR #139 `c4419df` | Consolidation & Operating Efficiency Standard | Actée |
| **v2.4.1** | patch 1 (en cours) | Alignement documentaire — routage & versioning ; patchs 2–3 : QA/validation, prompt/knowledge | En cours |

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
| **Major** v3.0 | Décision **stratégique** Morris obligatoire — **immediate NO-GO** sauf décision dédiée |
| **Automatisation** | Aucun versioning automatique par Cursor |

**Invariant :** le versioning documente une décision déjà actée — il ne la remplace pas.

**Morris L0 (rappel v2.4.1) :** versioning, changements de doctrine, gates structurants, élargissement de périmètre, L3 structurant, L4, tout L5 — **hors décision Cursor**.

## 10. Niveaux d'automatisation

| Niveau | Rôle versioning |
|--------|-----------------|
| **L0** | Morris valide version cible (minor / patch / major future) |
| **L1** | Contrôle registre / PR / commit cohérents |
| **L2** | Génération guidée de ligne registre |
| **L3** | Mise à jour documentaire **bornée** — registre, routing, README — **uniquement** sur périmètre explicitement validé par Morris ou prompt contractuel ; Cursor **ne décide pas seul** d'une mise à jour L3 ni d'un élargissement de périmètre |
| **L4** | Orchestration contrôlée versioning + post-merge alignement — gate Morris |
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
| **Versioning** | Standard structurant → **v2.3** — mergé PR #133 |
| **Alignement Versioning** | Patch → **v2.3.1** — alignement acté PR #134 |
| **Consolidation v2.4** | Standard structurant → **v2.4** — mergé PR #139 |
| **Alignement v2.4** | Patch → **v2.4.1** — trajectoire 3 patchs (patch 1 : routing/versioning) |
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
| 6 | **SFIA v2.4** consolidation operating efficiency | **Actée** — PR #139 |
| 7 | **SFIA v2.4.1** alignement documentaire | **En cours** — patch 1 routing/versioning ; patchs 2–3 à venir |
| 8 | **SFIA v3.0** | **Immediate NO-GO** — décision Morris dédiée requise |

> Chaque décision = **cycle séparé** avec gate Morris.

---

**Documents sources pilote :**

- `sfia-v2-design-coverage-standard.md` — v2.1
- `sfia-v2-technical-architecture-decision-documentation-standard.md` — v2.2
- `projects/chantiers360-v2/README.md` — statut post-MVP

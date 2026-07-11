# SFIA Review Pack — ChatGPT

**Date/heure :** 2026-07-11 11:35 Europe/Paris
**Repository :** mcleland147/sfia-workspace
**Cycle :** Correctif de conception — séparation des dimensions documentaires
**Profil SFIA :** Standard
**Branche projet :** method/sfia-v2.6-repository-standard-principles
**HEAD initial :** afb65e4e57a2fe2b39768974822d56c902a0d6c3
**HEAD final :** 77a78a781edfe95f2023fac9428cd767b439b271
**Base main :** 942f5353166b8dac02dab4b84229afb582e934df
**PR :** #163
**Review pack level :** full
**Review Handoff Git :** required

---

## Local Git Truth Check

| Élément | Valeur |
|---------|--------|
| Branche | method/sfia-v2.6-repository-standard-principles |
| HEAD initial correctif | afb65e4 |
| HEAD final | 77a78a7 |
| main | 942f535 |
| Worktree | Propre (1 fichier modifié commité) |
| PR #163 | OPEN, MERGEABLE |

---

## Réserve ChatGPT traitée

**Verdict initial :** PR #163 NOT YET READY — DOCUMENT DIMENSIONS MUST BE SEPARATED

**Écart :** taxonomie F01–F18 et table « statuts » mélangeaient famille, cycle de vie, autorité, usage, périmètre, trajectoire et emplacement.

**Correctif :** modèle multidimensionnel 7 dimensions (D1–D7) ; familles primaires F01–F17 ; cycle de vie isolé (§8) ; tables séparées autorité (§9), usage (§10), périmètre (§11), trajectoire (§12).

---

## Modèle avant (afb65e4)

- Taxonomie plate F01–F18 incluant trajectoires candidates, historique, archives, projets actifs/clôturés
- Table unique « statuts » mélangeant baseline, canonical, candidate, operational, project, historical, archived
- Règle « un seul statut primaire » insuffisante
- baseline et canonical confondus avec cycle de vie

---

## Modèle après (77a78a7)

| Dimension | Section | Valeurs candidates |
|-----------|---------|-------------------|
| D1 Famille | §5, §6.2 | F01–F17 (fonction) |
| D2 Cycle de vie | §8 | draft, candidate, validated, active, deprecated, superseded, archived |
| D3 Autorité | §9 | canonical, reference, supporting, informational |
| D4 Usage | §10 | operational, non-operational, unknown |
| D5 Périmètre | §11 | repository, method, project, product, tooling, external-publication |
| D6 Trajectoire | §12 | v1.1–v3.0 + trajectory_role (baseline, candidate, historical, suspended) |
| D7 Emplacement | §6.8, §15 | method, prompts, docs, projects, tools, exports, archive |

Schéma §6.1 : primary_family, lifecycle_status, authority, usage, scope, trajectory, trajectory_role, logical_location, etc.

PD15 ajouté : séparer les dimensions.

---

## Sections modifiées (complete)

- §1 Executive summary — multidimensionnel
- §4 Principes — PD7 révisé, PD15 ajouté
- §5 Taxonomie — F01–F17 familles primaires uniquement
- §6 NOUVEAU — Modèle multidimensionnel D1–D7
- §8 Cycle de vie — 7 états isolés
- §9–§12 NOUVEAU — Autorité, usage, périmètre, trajectoire
- §13 Profils — alignés dimensions
- §15 Zones — emplacement ≠ famille
- §19 Exceptions — par dimension
- §20 Automatisation — par dimension
- §21 Critères — dimensions indépendantes
- §22 Décisions — D1–D12
- Annexes A–F — refaites (exemples fictifs Annexe D)

---

## Diff utile

 ...-11-sfia-v2.6-repository-standard-principles.md | 1201 +++++++++++---------
 1 file changed, 685 insertions(+), 516 deletions(-)

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md
index 218561d..4e27261 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md
@@ -2,44 +2,49 @@
 
 *Cadre candidat de principes pour standardiser et homogénéiser progressivement le repository SFIA*
 
-**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md`  
-**Date et heure :** 2026-07-11 10:35 Europe/Paris  
-**Statut :** **Candidate** — principes du standard repository v2.6  
-**Cycle projet :** Cadrage — principes du standard repository v2.6  
-**Profil SFIA :** Standard  
-**Typologie v2.4 :** DOC  
-**Repository :** mcleland147/sfia-workspace  
-**Branche :** method/sfia-v2.6-repository-standard-principles  
-**Base Git :** `main` @ `942f5353166b8dac02dab4b84229afb582e934df`  
-**Autorité de décision :** Morris (L0)  
-**Baseline opérationnelle :** SFIA v2.4  
-**Trajectoires :** v2.5 candidate capitalisée ; v2.6 candidate  
-**Inputs structurants :** cadrage v2.6 (PR #159) ; audit read-only v2.6 (PR #162)
+**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md`
+**Date et heure :** 2026-07-11 11:30 Europe/Paris
+**Statut :** **Candidate** — principes du standard repository v2.6
+**Cycle projet :** Correctif de conception — séparation des dimensions documentaires
+**Profil SFIA :** Standard
+**Typologie v2.4 :** DOC
+**Repository :** mcleland147/sfia-workspace
+**Branche :** method/sfia-v2.6-repository-standard-principles
+**Base Git :** `main` @ `942f5353166b8dac02dab4b84229afb582e934df`
+**Autorité de décision :** Morris (L0)
+**Baseline opérationnelle :** SFIA v2.4
+**Trajectoires :** v2.5 candidate capitalisée ; v2.6 candidate
+**Inputs structurants :** cadrage v2.6 (PR #159) ; audit read-only v2.6 (PR #162) ; revue ChatGPT PR #163
 
 ### Limites du cycle
 
-- **Principes candidats uniquement** — aucun principe présenté comme décision validée  
-- Aucune classification individuelle de fichiers  
-- Aucune matrice garder / mettre à jour / fusionner / archiver / supprimer appliquée  
-- Aucune arborescence physique finale validée  
-- Aucun déplacement, renommage, migration, archivage ou suppression  
-- Aucune modification de document existant  
-- Aucune automatisation implémentée  
-- SFIA v3.0, MCP, Bridge, Runner et `.sfia` restent hors trajectoire courante  
+- **Principes candidats uniquement** — aucun principe présenté comme décision validée
+- **Modèle multidimensionnel candidate** — non appliqué aux fichiers existants
+- Aucune classification individuelle de fichiers
+- Aucune matrice garder / mettre à jour / fusionner / archiver / supprimer
+- Aucune arborescence physique finale validée
+- Aucun déplacement, renommage, migration, archivage ou suppression
+- Aucune modification d'un autre document existant
+- Aucune automatisation implémentée
+- SFIA v3.0, MCP, Bridge, Runner et `.sfia` restent hors trajectoire courante
 
 ---
 
 ## 1. Executive summary
 
-Ce document propose un **cadre candidat de principes** permettant, dans des cycles futurs, de décider où placer chaque type de contenu, comment nommer fichiers et répertoires, quelles métadonnées utiliser selon la famille documentaire, comment déclarer les statuts, distinguer baseline / candidate / projet / historique / archive, structurer les documents, organiser README et références, gérer versions et trajectoires, identifier variantes légitimes, préparer contrôles automatisables futurs et réserver les arbitrages structurants à Morris.
+Ce document propose un **cadre candidat de principes** pour standardiser et homogénéiser progressivement le repository SFIA. Il repose sur un **modèle multidimensionnel candidate** : chaque document est décrit par des **axes indépendants** — famille documentaire, cycle de vie, autorité, usage, périmètre, trajectoire/version et emplacement logique — et non par une taxonomie plate ou un statut unique mélangeant des concepts de nature différente.
 
-**Observation (audit PR #162) :** homogénéité globale **moyenne à faible** ; noyau méthode v2.4/v2.5 récent homogène ; zones projet, plans antérieurs et trajectoires multiples hétérogènes.
+**Observation (audit PR #162) :** homogénéité globale **moyenne à faible** ; vocabulaire actuel du repository mélange fréquemment famille, statut, trajectoire, usage et emplacement.
 
-**Principe candidat central :** homogénéiser **sans uniformiser** — règles communes repository-wide + profils proportionnés par famille + variantes légitimes explicites.
+**Écart ChatGPT traité (PR #163) :** la version antérieure confondait audit, capitalisation, trajectoire, historique, archive, projet, canonique, opérationnel et baseline dans une même table de « statuts ». Le correctif sépare explicitement ces dimensions.
 
-**Recommandation candidate ChatGPT/Cursor :** valider les principes avant la cartographie détaillée (G3) et toute migration — réduit le risque de classification prématurée.
+**Principe candidat central :** homogénéiser **sans uniformiser** — règles communes + profils proportionnés + **dimensions indépendantes** + variantes légitimes explicites.
 
-**Décision Morris requise :** adopter, corriger, approfondir ou rejeter temporairement ce cadre candidat avant toute application au repository.
+**Principe candidat structurant (PD15) :** séparer **fonction** (famille), **maturité** (cycle de vie), **référence** (autorité), **utilisation effective** (usage), **domaine** (périmètre), **rattachement versionnel** (trajectoire) et **zone Git** (emplacement logique).
+
+**Recommandation candidate :** valider le modèle multidimensionnel avant cartographie (G3) et toute migration.
+
+**Décision Morris requise :** adopter, corriger ou rejeter temporairement ce cadre avant toute application au repository.
 
 ---
 
@@ -49,18 +54,16 @@ Le chantier SFIA v2.6 vise un repository :
 
 | Qualité | Description candidate |
 |---------|----------------------|
-| Cohérent | Rôles documentaires identifiables ; zones logiques distinctes |
+| Cohérent | Dimensions documentaires identifiables sans contradiction |
 | Standardisé | Conventions partagées là où elles réduisent l'ambiguïté |
-| Homogène sans uniformisation aveugle | Profils proportionnés ; pas de métadonnées complètes partout |
-| Lisible par Morris | Navigation, statuts et autorité explicites |
-| Exploitable par ChatGPT | Familles, profils et statuts parsables |
-| Exécutable par Cursor | Conventions vérifiables ; périmètres Git clairs |
-| Maintenable | Cycle de vie, remplacement et historique tracés |
-| Compatible contrôles automatisés futurs | Règles contrôlables identifiées |
+| Homogène sans uniformisation aveugle | Profils proportionnés ; pas de bloc métadonnées complet partout |
+| Lisible par Morris | Famille, cycle de vie, autorité et trajectoire explicites |
+| Exploitable par ChatGPT | Schéma multidimensionnel parsable |
+| Exécutable par Cursor | Règles déterministes par dimension |
+| Maintenable | Cycle de vie et remplacement tracés |
+| Compatible contrôles automatisés futurs | Contrôles par dimension indépendante |
 | Gouverné par Git | `main` = source de vérité |
 
-Le nettoyage et la migration restent des **moyens** — pas la finalité de ce document.
-
 ---
 
 ## 3. Portée et hors périmètre
@@ -69,643 +72,809 @@ Le nettoyage et la migration restent des **moyens** — pas la finalité de ce d
 
 | Élément | Couverture |
 |---------|------------|
-| Principes transverses repository-wide | Oui — candidats |
-| Taxonomie minimale des familles documentaires | Oui — candidate, non appliquée |
-| Vocabulaire des statuts | Oui — candidate |
-| Profils de métadonnées proportionnés | Oui — candidats |
-| Conventions de nommage | Oui — principes, pas liste de renommages |
-| Responsabilités logiques des grandes zones | Oui — modèle logique, pas arbre physique validé |
-| Structures documentaires par famille | Oui — candidates |
-| README, index, navigation | Oui — principes |
-| Références et liens | Oui — principes |
-| Versions et trajectoires | Oui — principes |
... (685 insertions, 516 suppressions — voir contenu complet ci-dessous) ...
```

---

## Contenu complet du document final

```markdown
# SFIA v2.6 — Repository Standard Principles

*Cadre candidat de principes pour standardiser et homogénéiser progressivement le repository SFIA*

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md`
**Date et heure :** 2026-07-11 11:30 Europe/Paris
**Statut :** **Candidate** — principes du standard repository v2.6
**Cycle projet :** Correctif de conception — séparation des dimensions documentaires
**Profil SFIA :** Standard
**Typologie v2.4 :** DOC
**Repository :** mcleland147/sfia-workspace
**Branche :** method/sfia-v2.6-repository-standard-principles
**Base Git :** `main` @ `942f5353166b8dac02dab4b84229afb582e934df`
**Autorité de décision :** Morris (L0)
**Baseline opérationnelle :** SFIA v2.4
**Trajectoires :** v2.5 candidate capitalisée ; v2.6 candidate
**Inputs structurants :** cadrage v2.6 (PR #159) ; audit read-only v2.6 (PR #162) ; revue ChatGPT PR #163

### Limites du cycle

- **Principes candidats uniquement** — aucun principe présenté comme décision validée
- **Modèle multidimensionnel candidate** — non appliqué aux fichiers existants
- Aucune classification individuelle de fichiers
- Aucune matrice garder / mettre à jour / fusionner / archiver / supprimer
- Aucune arborescence physique finale validée
- Aucun déplacement, renommage, migration, archivage ou suppression
- Aucune modification d'un autre document existant
- Aucune automatisation implémentée
- SFIA v3.0, MCP, Bridge, Runner et `.sfia` restent hors trajectoire courante

---

## 1. Executive summary

Ce document propose un **cadre candidat de principes** pour standardiser et homogénéiser progressivement le repository SFIA. Il repose sur un **modèle multidimensionnel candidate** : chaque document est décrit par des **axes indépendants** — famille documentaire, cycle de vie, autorité, usage, périmètre, trajectoire/version et emplacement logique — et non par une taxonomie plate ou un statut unique mélangeant des concepts de nature différente.

**Observation (audit PR #162) :** homogénéité globale **moyenne à faible** ; vocabulaire actuel du repository mélange fréquemment famille, statut, trajectoire, usage et emplacement.

**Écart ChatGPT traité (PR #163) :** la version antérieure confondait audit, capitalisation, trajectoire, historique, archive, projet, canonique, opérationnel et baseline dans une même table de « statuts ». Le correctif sépare explicitement ces dimensions.

**Principe candidat central :** homogénéiser **sans uniformiser** — règles communes + profils proportionnés + **dimensions indépendantes** + variantes légitimes explicites.

**Principe candidat structurant (PD15) :** séparer **fonction** (famille), **maturité** (cycle de vie), **référence** (autorité), **utilisation effective** (usage), **domaine** (périmètre), **rattachement versionnel** (trajectoire) et **zone Git** (emplacement logique).

**Recommandation candidate :** valider le modèle multidimensionnel avant cartographie (G3) et toute migration.

**Décision Morris requise :** adopter, corriger ou rejeter temporairement ce cadre avant toute application au repository.

---

## 2. Finalité

Le chantier SFIA v2.6 vise un repository :

| Qualité | Description candidate |
|---------|----------------------|
| Cohérent | Dimensions documentaires identifiables sans contradiction |
| Standardisé | Conventions partagées là où elles réduisent l'ambiguïté |
| Homogène sans uniformisation aveugle | Profils proportionnés ; pas de bloc métadonnées complet partout |
| Lisible par Morris | Famille, cycle de vie, autorité et trajectoire explicites |
| Exploitable par ChatGPT | Schéma multidimensionnel parsable |
| Exécutable par Cursor | Règles déterministes par dimension |
| Maintenable | Cycle de vie et remplacement tracés |
| Compatible contrôles automatisés futurs | Contrôles par dimension indépendante |
| Gouverné par Git | `main` = source de vérité |

---

## 3. Portée et hors périmètre

### 3.1 Portée

| Élément | Couverture |
|---------|------------|
| Modèle multidimensionnel candidate (7 dimensions) | Oui |
| Taxonomie familles documentaires **primaires** | Oui — candidate, non appliquée |
| Cycle de vie documentaire (états distincts) | Oui — candidate |
| Autorité, usage, périmètre, trajectoire | Oui — tables séparées |
| Emplacement logique | Oui — distinct de famille et statut |
| Profils métadonnées alignés | Oui — candidats |
| Conventions nommage, zones, structures, README, liens | Oui — principes |
| Exceptions, automatisation future, critères acceptation | Oui — candidats |

### 3.2 Hors périmètre explicite

| Hors périmètre | Confirmation |
|----------------|--------------|
| Classification individuelle des 1042 fichiers | **Non** |
| Matrice fichier × dimensions | **Non** |
| Application du modèle aux fichiers existants | **Non** |
| Arborescence physique finale validée | **Non** |
| Migration, archivage effectif, suppression | **Non** |
| G3 / cartographie détaillée | **Non ouverte** |
| Promotion SFIA v2.6 en baseline | **Non** |
| Réactivation v3 / MCP / Bridge / Runner / `.sfia` | **Non** |

---

## 4. Principes directeurs

| # | Principe candidat | Justification | Type |
|---|-------------------|---------------|------|
| PD1 | **Git `main` prime** | Source de vérité | Principe candidat |
| PD2 | **Homogénéiser sans uniformiser** | Profils proportionnés | Principe candidat |
| PD3 | **Profils proportionnés par famille** | Audit §8 | Principe candidat |
| PD4 | **Conservation par défaut** | Cadrage v2.6 P2 | Principe candidat |
| PD5 | **Aucune archive sans reprise** | Cadrage v2.6 P3 | Principe candidat |
| PD6 | **Aucune suppression pendant audit et cartographie** | Cadrage v2.6 P7 | Principe candidat |
| PD7 | **Baseline = propriété trajectoire, pas cycle de vie générique** | Écart PR #163 | Principe candidat |
| PD8 | **Décision structurante = Morris** | Classification, migration, promotion | Principe candidat |
| PD9 | **Application future par lots** | Pas de mega-migration | Principe candidat |
| PD10 | **Règle contrôlable ou justifiée** | Automatisation future | Principe candidat |
| PD11 | **Variante légitime explicite** | Projet vs méthode | Principe candidat |
| PD12 | **Observation ≠ décision** | Distinction stricte | Principe candidat |
| PD13 | **Standard minimal avant exhaustif** | Itération Morris | Recommandation candidate |
| PD14 | **Principes avant classification G3** | Audit Q22.1 | Recommandation candidate |
| PD15 | **Séparer fonction, cycle de vie, autorité, usage, périmètre, trajectoire et emplacement** | Écart ChatGPT PR #163 | **Principe candidat structurant** |

> **Aucune dimension ne remplace une autre.** Un document possède **un état principal de cycle de vie** à un instant donné, mais peut simultanément porter une famille, une autorité, un usage, un périmètre, une trajectoire et un emplacement logique **indépendants**.

---

## 5. Taxonomie candidate — familles documentaires primaires

> **Nature :** familles **primaires** décrivant la **fonction** du document — ne classe aucun fichier existant.

> **Exclus des familles primaires :** trajectoire candidate, historique, archive, statut opérationnel, baseline, périmètre projet, emplacement physique.

| Code | Famille primaire candidate | Fonction principale | Emplacement(s) typique(s) — indicatif |
|------|----------------------------|---------------------|---------------------------------------|
| F01 | Méthode | Doctrine et contenu méthodologique SFIA | `method/sfia-fast-track/core/`, `cycles/` |
| F02 | Gouvernance et règles | Garde-fous, operating model, routing | `core/`, `prompts/templates/` (contrat) |
| F03 | Cycle et checklist | Exécution et contrôles opérationnels | `checklists/`, `cycles/` |
| F04 | Template | Modèle reproductible | `templates/`, `docs/templates/` |
| F05 | Prompt | Contrat d'interaction ChatGPT/Cursor | `prompts/` |
| F06 | Documentation transverse | Vision plateforme, pratiques transverses | `docs/` |
| F07 | Pratique spécialisée | Méthode parallèle ou complémentaire | `method/complementary/`, `methods/` |
| F08 | Document projet | Documentation propre à un projet | `projects/{projet}/` |
| F09 | Audit | Inventaire, écarts, read-only | `capitalization/`, `workspace-audit/`, `projects/*/06-audit-rex/` |
| F10 | Capitalisation / REX | Retour d'expérience, synthèse cycle | `capitalization/`, `projects/*/09-capitalization/` |
| F11 | Décision / cadrage | Framing, gates, orientation chantier | `capitalization/sfia-v2.x/` |
| F12 | Rapport de validation | Post-merge, QA cycle, clôture | `capitalization/` |
| F13 | README / index | Navigation et orientation | README à tous niveaux |
| F14 | Publication / export | Artefact externe ou export | `exports/`, docs Notion |
| F15 | Tooling documentation | Documentation outillage | `tools/`, `method/.../automation/` |
| F16 | Configuration / artefact technique | CI, Docker, config repo | `.github/`, `docker/` |
| F17 | Code / artefact non documentaire | TS/TSX, binaires — hors standard MD | `projects/*/app/` |

**Règles candidates :**

- **Une seule famille primaire** par document ; sous-famille optionnelle si utile
- **Audit**, **capitalisation** et **décision** sont des familles — pas des statuts de cycle de vie
- **Archive** = état de cycle de vie + emplacement — pas une famille
- **Projet actif vs clôturé** = distinction par **cycle de vie** et **usage**, pas deux familles

**Décision Morris requise (D2) :** valider ou ajuster cette liste avant cartographie.

---

## 6. Modèle multidimensionnel candidate

### 6.1 Schéma minimal de description documentaire

Schéma **candidate** — non appliqué aux fichiers dans ce cycle :

| Attribut candidate | Dimension | Obligatoire selon profil |
|--------------------|-----------|--------------------------|
| `primary_family` | D1 — Famille | Oui (sauf F17) |
| `subfamily` | D1 — Famille | Optionnel |
| `lifecycle_status` | D2 — Cycle de vie | Oui si non évident |
| `authority` | D3 — Autorité | Oui profils A, B, D |
| `usage` | D4 — Usage | Recommandé |
| `scope` | D5 — Périmètre | Oui |
| `project` | D5 — Périmètre | Si scope = project |
| `phase` | D5 — Périmètre | Si applicable |
| `trajectory` | D6 — Trajectoire | Si applicable |
| `trajectory_role` | D6 — Trajectoire | Si trajectory renseignée |
| `logical_location` | D7 — Emplacement | Recommandé |
| `canonical_replacement` | D2/D3 | Si superseded ou deprecated |
| `decision_authority` | Gouvernance | Morris si structurant |
| `exception` | Exceptions | Si dérogation explicite |

### 6.2 D1 — Famille documentaire primaire

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Décrire la **fonction principale** du document |
| **Valeurs** | F01–F17 (§5) |
| **Règles** | Une famille primaire ; sous-famille optionnelle |
| **Exemple** | Rapport d'audit v2.6 → famille **Audit** (F09), pas « candidate » |
| **Autorité** | Cycle + Morris pour arbitrages limites familles |
| **Automatisable** | Présence `primary_family` ; cohérence nom suffixe — partiel |
| **Risque ambiguïté** | Confondre famille avec emplacement (`capitalization/` contient Audit, Capitalisation, Décision) |

### 6.3 D2 — Cycle de vie documentaire

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Décrire **maturité et état** du document |
| **Valeurs** | draft, candidate, validated, active, deprecated, superseded, archived |
| **Règles** | **Un seul état principal** à un instant ; indépendant autorité et usage |
| **Exemple** | Rapport audit v2.6 → `lifecycle_status: candidate` |
| **Autorité** | Auteur (draft) ; cycle + Morris (validated+) |
| **Automatisable** | Valeur dans vocabulaire fermé — oui |
| **Risque** | Confondre `candidate` (cycle) avec trajectoire candidate v2.6 |

Voir **§8** pour table complète et transitions.

### 6.4 D3 — Autorité documentaire

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Décrire le **niveau de référence** normative |
| **Valeurs** | canonical, reference, supporting, informational |
| **Règles** | Indépendante du cycle de vie ; `canonical` = gate Morris |
| **Exemple** | Operating model → `authority: canonical` ; rapport audit → `supporting` |
| **Automatisable** | Cohérence canonical + lifecycle — partiel |
| **Risque** | Confondre canonical (autorité) avec baseline (trajectoire) |

Voir **§9**.

### 6.5 D4 — Usage

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Décrire si le document est **effectivement utilisé** |
| **Valeurs** | operational, non-operational, unknown |
| **Règles** | **Pas un statut de cycle de vie** ; vérifiable par contenu et références |
| **Exemple** | Plan migration antérieur → `usage: non-operational` ; `lifecycle: archived` possible |
| **Automatisable** | Faible — observationnel |
| **Risque** | Inférer usage uniquement depuis chemin |

Voir **§10**.

### 6.6 D5 — Périmètre

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Décrire le **domaine d'application** |
| **Valeurs** | repository, method, project, product, tooling, external-publication |
| **Attributs** | project, phase, domaine, équipe |
| **Règles** | **`project` n'est plus un statut documentaire** |
| **Exemple** | Doc Chantiers360 → `scope: project`, `project: chantiers360-v2` |
| **Automatisable** | scope=project implique project renseigné — oui |
| **Risque** | Confondre périmètre project avec famille Document projet |

Voir **§11**.

### 6.7 D6 — Trajectoire / version

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Rattachement **méthodologique ou versionnel** |
| **Valeurs trajectory** | SFIA v1.1, v2.4, v2.5, v2.6, v3.0, N/A |
| **Valeurs trajectory_role** | baseline, candidate, historical, suspended, hors-trajectoire |
| **Règles** | **Baseline = propriété trajectoire**, pas cycle de vie ; promotion = GO Morris |
| **Confirmé** | v2.4 baseline ; v2.5 candidate capitalisée ; v2.6 candidate ; v3.0 hors trajectoire courante |
| **Automatisable** | trajectory_role=baseline sans GO — signal L2 |
| **Risque** | Mélanger « document Candidate » et « trajectoire v2.6 candidate » |

Voir **§12**.

### 6.8 D7 — Emplacement logique

| Élément | Contenu candidate |
|---------|-------------------|
| **Objectif** | Zone Git **actuelle ou cible** |
| **Valeurs** | method, prompts, docs, projects, tools, exports, archive |
| **Règles** | Ni famille ni statut ; une zone contient plusieurs familles |
| **Exemple** | `method/.../capitalization/sfia-v2.6/` → logical_location: method ; familles possibles: Audit, Capitalisation, Décision |
| **Automatisable** | Cohérence scope ↔ emplacement — partiel |
| **Risque** | `/archive/` impliquant automatiquement famille Archive |

---

## 7. Gouvernance et source de vérité

| Principe candidat | Définition | Autorité |
|-------------------|------------|----------|
| Git `main` = source de vérité | Faits durables versionnés | Fondamental |
| Description multidimensionnelle | Famille + cycle + autorité + usage + scope + trajectoire + emplacement | Cycles + Morris |
| Autorité canonical | Norme sur un sujet — gate Morris | Morris |
| Trajectoire candidate ≠ baseline | v2.5/v2.6 jusqu'à GO promotion | Morris |
| ChatGPT / Cursor | Structuration / exécution — non canon sans merge | N/A |
| Notion / exports | Couche knowledge — non miroir Git | Morris |
| `.sfia/`, `.tmp-sfia-review/` | Local non canon | Confirmé audit |
| Plans antérieurs | Inputs historiques — pas standard actuel | Observation audit |

---

## 8. Cycle de vie documentaire

> **Uniquement les états de cycle de vie** — pas baseline, canonical, operational, project, historical (déplacés vers autres dimensions).

| État candidate | Définition | Entrée | Sortie | Autorité | Remplaçant requis | Transitions | Réversibilité | Garde-fous |
|----------------|------------|--------|--------|----------|-------------------|-------------|---------------|------------|
| **draft** | Travail non validé | création | candidate, deprecated | Auteur | Non | → candidate | Oui | Pas merge main sans review |
| **candidate** | Proposé, non validé périmètre | draft, cycle | validated, deprecated | Cycle + Morris | Non | → validated | Oui | Distinct trajectoire candidate |
| **validated** | Validé pour son périmètre | candidate, review | active, deprecated | Morris | Non | → active | Oui | **≠ baseline trajectoire** |
| **active** | Référence active dans son périmètre | validated | deprecated, superseded | Morris / cycle | Non | → deprecated | Oui | Peut coexister validated non-active |
| **deprecated** | Déconseillé ; remplaçant attendu | active, validated | superseded, archived | Morris | Oui (annoncé) | → superseded | Oui | Lien remplaçant |
| **superseded** | Remplacé ; successeur nommé | deprecated, active | archived | Morris | **Oui** | → archived | Oui | `canonical_replacement` |
| **archived** | Conservé, non actif | superseded, deprecated, validated | — | Morris + reprise | Reprise ou justification | — | Oui | Aucune archive sans reprise |

**Chaîne candidate principale :**

```text
draft → candidate → validated → active → deprecated | superseded → archived
```

**Précisions candidates :**

- `validated` et `active` **peuvent être séparés** : un doc validated n'est pas forcément active
- Promotion **baseline trajectoire** (v2.6 → baseline) = dimension D6 + GO Morris — **pas** transition automatique de chaque document
- **Suppression** = gate distincte, hors cycle courant, GO Morris explicite

**Processus opérationnel (review / merge) :**

| Phase | Trace Git | Gate |
|-------|-----------|------|
| Création | Branche + commit | Cycle |
| Review | Handoff si requis | ChatGPT + Morris |
| Validation merge | Merge commit | Morris GO merge |
| Mise à jour | PR | Selon impact |
| Remplacement | PR + superseded | Morris si structurant |
| Archivage lot | `git mv` + archived | Morris + reprise |

---

## 9. Autorité documentaire

> Dimension **D3** — indépendante du cycle de vie.

| Niveau candidate | Définition | Usage typique | Compatible lifecycle | Gate Morris |
|------------------|------------|---------------|----------------------|-------------|
| **canonical** | Source normative **unique** sur un sujet | Rules, operating model | validated, active | **Oui — obligatoire** |
| **reference** | Référence utile, non norme unique | Architecture docs, guides | validated, active, candidate | Recommandé |
| **supporting** | Support d'un cycle ou d'une décision | Audits, rapports, REX | candidate, validated | Non |
| **informational** | Explicatif sans autorité structurante | Notes, brouillons, exports | draft, archived | Non |

**Règles candidates :**

- Document `candidate` + `canonical` = **anomalie** sans décision Morris explicite
- Document `validated + canonical + active` = configuration normale core baseline
- Autorité **≠** trajectoire baseline

**Décision Morris requise (D4).**

---

## 10. Usage documentaire

> Dimension **D4** — observationnelle, évolutive sans changement de contenu.

| Valeur candidate | Définition | Critère indicatif |
|------------------|------------|-------------------|
| **operational** | Utilisé activement | Références entrantes, cycles actifs, prompts actifs |
| **non-operational** | Conservé, non utilisé | Plans remplacés, archives, trajectoires suspendues |
| **unknown** | Usage non établi | Legacy, single-file, absence analyse |

**Règles candidates :**

- `operational` **≠** cycle de vie `active` — un doc candidate peut être operational (ex. prompt en test)
- Un doc `validated` peut être `non-operational` (ex. plan historique validé mais remplacé)
- Vérification par **contenu et références**, pas chemin seul

**Décision Morris requise (D5).**

---

## 11. Périmètre documentaire

> Dimension **D5** — **`project` n'est plus un statut documentaire.**

| Périmètre candidate | Définition | Attributs complémentaires |
|-----------------------|------------|---------------------------|
| **repository** | Transverse à tout le dépôt | — |
| **method** | Méthode SFIA | trajectoire, domaine |
| **project** | Projet spécifique | `project`, `phase` |
| **product** | Produit ou plateforme | nom produit |
| **tooling** | Outillage et automation | outil cible |
| **external-publication** | Publication hors Git canon | Notion, export |

**Règles candidates :**

- `scope: project` → attribut `project` **obligatoire**
- Famille F08 Document projet ↔ scope project **souvent** corrélés, pas automatiquement
- Code F17 : scope project typique ; famille F17, pas F08

**Décision Morris requise (D6).**

---

## 12. Trajectoire, version et baseline

> Dimension **D6** — distincte du cycle de vie et de l'autorité.

| Trajectory candidate | trajectory_role candidate | Statut chantier |
|---------------------|---------------------------|-----------------|
| SFIA v1.1 | historical | Héritage foundation |
| SFIA v2.4 | **baseline** | **Baseline opérationnelle** |
| SFIA v2.5 | **candidate** (capitalisée) | Trajectoire candidate capitalisée |
| SFIA v2.6 | **candidate** | Trajectoire candidate — chantier en cours |
| SFIA v3.0 | **suspended** / hors-trajectoire | **Hors trajectoire courante** — non réactivée |
| N/A | — | Docs sans rattachement trajectoire |

**Règles candidates :**

- **baseline** = propriété `trajectory_role` de la trajectoire v2.4 — **pas** un `lifecycle_status`
- Promotion v2.6 → baseline trajectoire = **GO Morris** + capitalisation — pas automatique à la merge PR
- Document sur trajectoire v2.6 peut avoir `lifecycle_status: candidate` **et** `trajectory: SFIA v2.6` **et** `trajectory_role: candidate` — dimensions distinctes
- v3.0 : visible, signalé, non réactivé

**Décision Morris requise (D7).**

---

## 13. Profils de métadonnées par famille

> Profils alignés sur le modèle multidimensionnel — **non imposés partout**.

### A. Profil Core / Gouvernance (F01, F02)

| Champ candidate | Dimension |
|-----------------|-----------|
| family | D1 |
| lifecycle_status | D2 |
| authority | D3 |
| usage | D4 |
| scope | D5 |
| trajectory | D6 |
| trajectory_role | D6 |
| version | D6 (doc) |
| decision_authority | Gouvernance |
| source_of_truth | Gouvernance |
| updated_at | — |

### B. Profil Capitalisation / Audit / Décision / Validation (F09–F12)

| Champ candidate | Dimension |
|-----------------|-----------|
| family | D1 |
| lifecycle_status | D2 |
| authority | D3 |
| scope | D5 |
| trajectory | D6 |
| trajectory_role | D6 |
| cycle, profil SFIA, repository | Contexte |
| base Git (si pertinent) | Trace |
| decision_authority | Morris |
| réserves, verdict | Si applicable |

### C. Profil Projet (F08)

| Champ candidate | Dimension |
|-----------------|-----------|
| family | D1 |
| lifecycle_status | D2 |
| usage | D4 |
| scope = project | D5 |
| project, phase | D5 |
| trajectory | D6 si applicable |
| décision de référence | Optionnel |

### D. Profil Prompt / Template (F04, F05)

| Champ candidate | Dimension |
|-----------------|-----------|
| family | D1 |
| lifecycle_status | D2 |
| authority | D3 |
| usage | D4 |
| scope | D5 |
| audience, objective | Contexte |
| source / template parent | Lien |
| trajectory | D6 |

### E. Profil README / Index (F13)

| Champ candidate | Dimension |
|-----------------|-----------|
| family = README / index | D1 |
| lifecycle_status | D2 |
| authority | D3 |
| scope | D5 |
| logical_location | D7 |
| sources canoniques, contenu attendu | Navigation |

### F. Profil Léger

| Champ candidate | Dimension |
|-----------------|-----------|
| title | — |
| family ou rôle identifiable | D1 |
| lifecycle_status | D2 si non évident |
| scope identifiable | D5 |

**Principe candidat :** absence de profil complet ≠ non-conformité si famille Léger et dimensions déductibles sans contradiction.

Voir **Annexe A**.

---

## 14. Conventions de nommage

> Principes candidats — **aucune liste de renommages**.

| Sujet | Principe candidat | Variante légitime |
|-------|-------------------|-------------------|
| Casse | kebab-case MD et dossiers | ADR, REX |
| Langue | EN nom fichier ; titre FR autorisé | Legacy FR |
| Explicite | Suffixes `-audit`, `-framing`, `-rex`, `-report` | Basename par increment |
| Dates | `YYYY-MM-DD-` préfixe capitalisation / audits | Core sans date |
| Versions | Trajectoire dans **chemin** (`sfia-v2.6/`) | v2.4 implicite core |
| README | `README.md` exact | — |

**Décision Morris requise (D12) :** dates obligatoires ; langue noms.

---

## 15. Responsabilités logiques des grandes zones

> **Emplacement logique (D7)** — une zone **n'est pas une famille**.

| Zone | Responsabilité logique | Familles possibles | Précision |
|------|------------------------|-------------------|-----------|
| `method/sfia-fast-track/` | Méthode et gouvernance SFIA | F01–F03, F11, F13 | — |
| `method/.../capitalization/` | Capitalisation trajectoire | F09–F12 | **Plusieurs familles** |
| `method/.../workspace-audit/` | Audits/plans **historiques** | F09, F11 | lifecycle souvent archived/historical trajectory |
| `prompts/` | Contrats exécution | F05, F04 | — |
| `docs/` | Transverse plateforme | F06, F07 | Arbitrage vs method/documentation |
| `projects/{projet}/` | Périmètre projet | F08, F09, F10, F17 | scope project ; code ≠ famille F08 auto |
| `*/archive/` | Emplacement archived | Toute famille | lifecycle `archived` typique |
| `tools/` | Outillage | F15, F16 | — |

**Règles candidates :**

- `/archive/` → emplacement associé à `lifecycle_status: archived` — pas une famille
- `projects/` → scope project fréquent ; code = F17
- `capitalization/` → Audit + Capitalisation + Décision coexistent

**Décision Morris requise (D10) :** docs/ vs method/.../documentation/.

---

## 16. Structures documentaires candidates

| Famille | Sections obligatoires candidates | Verdict | Décisions |
|---------|----------------------------------|---------|-----------|
| Gouvernance (F02) | Objectif, principes, garde-fous | Non | Non |
| Méthode (F01) | Objectif, sections numérotées | Non | Morris implicite |
| Audit (F09) | Executive summary, méthode, limites, gate | Oui | Morris listées |
| Décision (F11) | Contexte, non-objectifs, gates | Oui | Morris |
| README (F13) | Rôle, index, canoniques | Non | Non |

**Principe candidat :** colonne « Type » (observation / principe / recommandation / décision requise) dans capitalisation et audits.

---

## 17. README, index et navigation

| Sujet | Principe candidat |
|-------|-------------------|
| README requis | Zone ≥ 3 fichiers ou rôle non évident ; racines method, prompts, docs, chaque projet |
| Rôle | Orientation ; dimensions clés si zone mixte (familles multiples) |
| Index concurrents | Un index canonique ; plans antérieurs = historique |
| Sources canoniques | Core docs — pas handoff ni `.tmp-*` |
| Zone fichier unique | README parent suffit |

---

## 18. Références et liens

| Sujet | Principe candidat |
|-------|-------------------|
| Liens relatifs | Préférés ; vérification existence — L1 |
| Document superseded | Lien `canonical_replacement` |
| Archive | Lien explicite ; pas canon |
| Liens cassés (~23 audit) | Correction en **lot** — non ce cycle |

---

## 19. Gouvernance des exceptions

Une exception peut cibler **une dimension spécifique** :

| Dimension | Exemple exception |
|-----------|-------------------|
| Nommage | Legacy kebab-case non conforme |
| Métadonnées | Profil Léger accepté |
| Emplacement | F08 temporairement hors projects/ |
| lifecycle_status | validated sans active |
| authority | reference traité comme canonical localement |
| usage | unknown prolongé |
| trajectory | v3 visible sans réactivation |

**Règles :** justification, portée, durée, Morris, trace Git, réévaluation — **pas de contournement gates Morris**.

---

## 20. Contrôles automatisables futurs

> **Aucune implémentation** — alignés sur dimensions. Voir **Annexe C**.

| Niveau | Contrôles candidates |
|--------|---------------------|
| L1 | primary_family présente ; lifecycle valide ; liens ; kebab-case |
| L2 | authority compatible lifecycle ; trajectory_role cohérent ; scope project + project ; profil cohérent famille |
| L3 | classification ; fusion ; promotion baseline ; canonical sans Morris |
| Jamais auto | déplacement, archivage, statut structurant, suppression |

**Principe candidat :** aucune correction automatique structurante.

---

## 21. Critères d'acceptation du futur standard

| Critère candidate | Mesure |
|-------------------|--------|
| Dimensions indépendantes | Aucune dimension ne remplace une autre |
| Description sans contradiction | Schéma §6.1 applicable |
| Cartographie sans classement artificiel | Famille ≠ emplacement ≠ lifecycle |
| Contrôles déterministes | Règles par dimension — Annexe C |
| Décisions Morris identifiées | D1–D12 |
| Profils proportionnés | A–F + Léger |
| Migration par lots | Réversible |
| Variantes légitimes | Annexe E |

---

## 22. Points nécessitant décision Morris

| # | Sujet | Urgence |
|---|-------|---------|
| D1 | Adoption modèle multidimensionnel | Haute |
| D2 | Validation familles primaires F01–F17 | Haute |
| D3 | Validation cycle de vie (7 états) | Haute |
| D4 | Validation niveaux autorité | Moyenne |
| D5 | Validation modèle usage | Moyenne |
| D6 | Validation périmètres | Moyenne |
| D7 | Validation trajectoire / baseline | Haute |
| D8 | Validation profils métadonnées | Moyenne |
| D9 | Principes avant cartographie G3 | Haute |
| D10 | Arbitrage docs/ vs method/documentation | Moyenne |
| D11 | Traitement v3 tracked | Basse |
| D12 | Politique dates et langue nommage | Basse |

> **Aucune décision validée** sans GO Morris explicite.

---

## 23. Impacts sur les étapes futures

| Étape | Impact |
|-------|--------|
| Cartographie | Matrice descriptive fichier × dimensions — **sans G3** |
| Classification G3 | Après validation modèle Morris |
| Arborescence cible | Compare logical_location vs rôle réel |
| Migration par lots | Mise à jour métadonnées par dimension |
| Automatisation | Contrôles Annexe C |

---

## 24. Challenge obligatoire

| Question | Réponse |
|----------|---------|
| Modèle multidimensionnel utile ? | **Oui** — corrige mélange PR #163 ; prépare cartographie |
| Plus complexe ? | **Légèrement** — mais moins ambigu qu'un statut unique |
| Métadonnées proportionnées ? | **Oui** — profils par famille |
| Dimensions distinguées ? | **Oui** — PD15, §6 |
| Contrôles déterministes ? | **Oui** — par dimension |
| Application progressive ? | **Oui** — lots |
| Principes avant cartographie ? | **Recommandation — oui (D9)** |

---

## 25. Risques et réserves

| Risque | Mitigation |
|--------|------------|
| Complexité perçue | Schéma §6.1 ; exemples Annexe D |
| Sur-interprétation validé | Candidate ; gates |
| Confusion candidate lifecycle / trajectory | Libellés explicites §6.3, §12 |
| Exemples pris pour classification | Marqués illustratifs |

**Réserves :** modèle candidate ; aucun fichier classé ; audit @ 30fb8e7.

---

## 26. Conclusion

| Élément | Statut |
|---------|--------|
| Modèle multidimensionnel candidate | **Oui** — §6 |
| Familles primaires | **Oui** — §5, F01–F17 |
| Cycle de vie séparé | **Oui** — §8 |
| Autorité, usage, périmètre, trajectoire séparés | **Oui** — §9–12 |
| Profils alignés | **Oui** — §13 |
| Classification fichiers | **Non** |
| Standard validé Morris | **Non** |

---

## 27. Gate Morris suivant

| Option | Description |
|--------|-------------|
| **A** | Corrections du modèle candidate |
| **B** | Validation partielle ou complète (sans application) |
| **C** | Approfondissement ciblé (ex. validated vs active) |
| **D** | Cartographie étape 2 — **après validation si GO** |
| **E** | NO-GO temporaire |

**Non automatique :** merge PR #163, G3, migration, promotion v2.6.

---

## Annexe A — Famille primaire × profil documentaire recommandé

| Famille | Profil principal | Profil alternatif |
|---------|------------------|-------------------|
| F01 Méthode | A — Core/Gouvernance | |
| F02 Gouvernance | A | |
| F03 Cycle / checklist | F — Léger | A si structurant |
| F04 Template | D | |
| F05 Prompt | D | F — Léger |
| F06 Doc transverse | A ou F | E |
| F07 Pratique spécialisée | F | A si normatif |
| F08 Document projet | C — Projet | |
| F09 Audit | B — Capitalisation | |
| F10 Capitalisation / REX | B | |
| F11 Décision / cadrage | B | |
| F12 Rapport validation | B | |
| F13 README / index | E | |
| F14 Publication / export | F | |
| F15 Tooling doc | F | E |
| F16 Config technique | (hors profil MD) | |
| F17 Code / artefact | (hors profil MD) | |

---

## Annexe B — Cycle de vie × transition × autorité × garde-fou

| lifecycle_status | Entrée | Sortie | Autorité transition | Gate | Garde-fou |
|------------------|--------|--------|---------------------|------|-----------|
| draft | création | candidate | Auteur | Review | — |
| candidate | draft | validated | Cycle + Morris | Review + merge | ≠ trajectory_role seul |
| validated | candidate | active, deprecated | Morris | Validation | ≠ baseline auto |
| active | validated | deprecated, superseded | Morris | Impact | — |
| deprecated | active, validated | superseded, archived | Morris | Remplaçant | Lien requis |
| superseded | deprecated, active | archived | Morris | Successeur nommé | canonical_replacement |
| archived | superseded, deprecated | — | Morris + reprise | Archivage lot | Reprise obligatoire |

> **Autorité documentaire (D3)** et **trajectory_role (D6)** ne figurent pas dans cette matrice — dimensions parallèles.

---

## Annexe C — Dimension × valeurs × automatisabilité × arbitrage humain

| Dimension | Contrôle candidate | Automatisable | Niveau | Humain requis |
|-----------|-------------------|---------------|--------|---------------|
| D1 Famille | primary_family présente | Partiel | L1–L2 | Arbitrage limites familles |
| D2 Cycle | lifecycle dans vocabulaire fermé | Oui | L1 | validated, archived |
| D3 Autorité | canonical + gate Morris | Partiel | L2 | canonical, promotion |
| D4 Usage | Cohérence refs vs usage | Faible | L3 | unknown → operational |
| D5 Périmètre | scope=project → project | Oui | L2 | scope arbitrage |
| D6 Trajectoire | trajectory_role cohérent | Partiel | L2 | baseline promotion |
| D7 Emplacement | logical_location vs scope | Partiel | L2 | déplacement futur |
| Transversal | Liens internes valides | Oui | L1 | Lot migration |
| Transversal | Profil cohérent famille | Partiel | L2 | Legacy exempt |
| Transversal | Classification G3 | Non | L3 | **Morris G3** |
| Transversal | Fusion sémantique | Non | L3 | **Morris** |

---

## Annexe D — Exemples multidimensionnels fictifs

> **Exemples illustratifs — non constitutifs d'une classification validée.**

### Exemple 1 — Operating model (fictif)

| Attribut | Valeur illustrative |
|----------|---------------------|
| primary_family | Gouvernance et règles (F02) |
| lifecycle_status | active |
| authority | canonical |
| usage | operational |
| scope | method |
| trajectory | SFIA v2.4 |
| trajectory_role | baseline |
| logical_location | method/sfia-fast-track/core/ |

### Exemple 2 — Rapport audit v2.6 (fictif)

| Attribut | Valeur illustrative |
|----------|---------------------|
| primary_family | Audit (F09) |
| lifecycle_status | candidate |
| authority | supporting |
| usage | operational |
| scope | method |
| trajectory | SFIA v2.6 |
| trajectory_role | candidate |
| logical_location | method/.../capitalization/sfia-v2.6/ |
| decision_authority | Morris |

### Exemple 3 — Prompt template cycle (fictif)

| Attribut | Valeur illustrative |
|----------|---------------------|
| primary_family | Prompt (F05) |
| lifecycle_status | active |
| authority | reference |
| usage | operational |
| scope | repository |
| trajectory | SFIA v2.4 |
| trajectory_role | baseline |
| logical_location | prompts/templates/ |

### Exemple 4 — Document projet phase delivery (fictif)

| Attribut | Valeur illustrative |
|----------|---------------------|
| primary_family | Document projet (F08) |
| lifecycle_status | active |
| authority | supporting |
| usage | operational |
| scope | project |
| project | chantiers360-v2 |
| phase | 07-delivery |
| trajectory | N/A |
| logical_location | projects/chantiers360-v2/07-delivery/ |

### Exemple 5 — Plan migration antérieur (fictif)

| Attribut | Valeur illustrative |
|----------|---------------------|
| primary_family | Audit (F09) ou Décision (F11) |
| lifecycle_status | archived |
| authority | informational |
| usage | non-operational |
| scope | repository |
| trajectory | N/A |
| trajectory_role | historical |
| logical_location | method/.../workspace-audit/ |

---

## Annexe E — Principes communs vs variantes légitimes

| Principe commun | Variante légitime | Écart injustifié |
|-----------------|-------------------|-----------------|
| 7 dimensions indépendantes | Profil Léger réduit | Statut unique fourre-tout |
| primary_family obligatoire | F17 hors MD | Absence famille capitalisation récente |
| lifecycle un état principal | validated sans active | Mélange baseline dans lifecycle |
| authority séparée | reference locale | canonical implicite |
| scope project + project | Code F17 scope project | project comme statut |
| trajectory_role baseline v2.4 | v2.6 candidate | Promotion silencieuse |
| logical_location ≠ famille | capitalization multi-familles | Archive comme famille |
| Conservation par défaut | archived avec reprise | Suppression sans GO |

---

## Annexe F — Git Review Index

| Élément | Valeur |
|---------|--------|
| Repository | mcleland147/sfia-workspace |
| Branche projet | method/sfia-v2.6-repository-standard-principles |
| Base `main` | `942f5353166b8dac02dab4b84229afb582e934df` |
| HEAD initial (avant correctif) | `afb65e4e57a2fe2b39768974822d56c902a0d6c3` |
| Cycle | Correctif séparation dimensions documentaires |
| Fichier modifié | `2026-07-11-sfia-v2.6-repository-standard-principles.md` |
| Fichiers créés / supprimés | Aucun |
| Commit attendu | `docs: separate repository document dimensions for SFIA v2.6` |

---

*Document candidate SFIA v2.6 — modèle multidimensionnel — soumis validation Morris — aucune application au repository sans GO explicite.*
```


---

## Validations

| Validation | OK |
|------------|-----|
| Un seul fichier modifié | ✓ |
| Aucun fichier créé/supprimé | ✓ |
| Dimensions séparées | ✓ |
| Aucune classification fichiers | ✓ |
| Exemples illustratifs (Annexe D) | ✓ |
| SFIA v2.4 baseline / v2.6 candidate | ✓ |
| git diff --check | ✓ |
| modified sections complete | yes |
| useful diff included | yes |
| synthesis only | no |

---

## Git Review Index

| Élément | Valeur |
|---------|--------|
| Commit correctif | 77a78a7 |
| Fichier | 2026-07-11-sfia-v2.6-repository-standard-principles.md |

---

## Verdict review pack

**complete**


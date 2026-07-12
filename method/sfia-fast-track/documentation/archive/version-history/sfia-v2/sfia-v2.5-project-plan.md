# SFIA v2.5 — Project Plan

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md`  
**Cycle :** SFIA v2.5 candidate — ouverture chantier consolidation  
**Version SFIA :** v2.5 **candidate** — proposition projet, non validée  
**Baseline :** SFIA v2.4 — Consolidation & Operating Efficiency  
**Références :** clôture SFIA 3.0 (`2026-07-08-sfia-3-exploration-closure.md`)  
**Date :** 2026-07-08

> **Document projet global** — versionne la roadmap et les critères de décision du chantier SFIA v2.5 candidate. Ne valide pas SFIA v2.5 comme baseline finale. Ne lance pas de pilote. Ne modifie pas la doctrine v3.0.

---

## 1. Statut du document

| Élément | Valeur |
|---------|--------|
| **Nature** | Document de lancement du chantier SFIA v2.5 candidate |
| **Statut** | Candidate / proposition projet |
| **Valide SFIA v2.5 ?** | **Non** — la promotion en baseline validable dépend des épreuves réelles (Cycle 4) et d'une décision Morris explicite (Cycle 5) |
| **Source de vérité** | Git — ce document est versionné pour mémoire projet |
| **Autorité de décision** | Morris (L0) — arbitrages structurants, gates, merge, actation version, lancement pilote |
| **Chaîne opérationnelle** | ChatGPT → Cursor → Git → validation Morris |
| **Outillage gelé** | SFIA 3.0 (Bridge / Runner / Git Reader) — historique uniquement |

Ce document sert de **référence globale** pour les cycles 0 à 5. Il évite la perte de trajectoire entre cycles documentaires, templates, épreuves réelles et préparation pilote.

---

## 2. Décision portée par cette PR

La future PR dédiée à ce document acte :

| Acte | Détail |
|------|--------|
| **Ouverture du chantier** | Lancement formel du chantier de consolidation SFIA v2.5 **candidate** |
| **Mémoire projet** | Versionnement de la roadmap globale Cycles 0–5, des critères C1–C10, des décisions D0–D7 et des budgets |
| **Référence persistante** | Point d'ancrage Git pour les cycles suivants |

La PR **n'acte pas** :

- la promotion de SFIA v2.5 en version méthode validée ;
- une minor actée au sens `sfia-v2-method-versioning-standard.md` ;
- le lancement d'un projet pilote ;
- une modification du Prompt Catalog, de l'operating model, du routing guide ou de la doctrine 3.0.

---

## 3. Pourquoi SFIA v2.5 candidate

### 3.1 Contexte

SFIA v2.4 constitue une **base saine** : pilote Chantiers360 v2 bouclé, standards v2.0–v2.4 actés, chaîne ChatGPT → Cursor → Git validée, clôture SFIA 3.0 actée.

SFIA v2.5 candidate vise l'**opérationnalisation proportionnée** de v2.4 : transformer les principes (profils Light / Standard / Critical / Capitalization, readiness adaptée, friction réduite) en pratique mesurable sur cycles réels.

### 3.2 Risque principal

Le risque dominant n'est pas l'absence de méthode, mais la **dérive « Critical par défaut »** : chaque cycle traité comme structurant, générant micro-validations, double readiness, surcharge Morris et annulation des gains v2.4.

### 3.3 Objectif

| Viser | Ne pas viser |
|-------|--------------|
| Réduire les interruptions **inutiles** | Réduire le contrôle sur l'essentiel |
| Mieux cadrer les cycles **en amont** | Alléger la méthode par suppression |
| Cycles potentiellement plus longs mais **moins hachés** | Micro-cycles documentaires redondants |
| Méthode **plus saine, plus complète, plus exploitable** sur projet réel | Refonte doctrine ou retour SFIA 3.0 |

**Enjeu :** prouver sur cycles réels que la proportionnalité fonctionne avant toute actation v2.5 validable.

---

## 4. Vision Morris

La consolidation v2.5 candidate ne consiste pas à « alléger » SFIA par soustraction documentaire. Elle consiste à **mieux cadrer** chaque cycle pour que l'exécution soit autonome dans un périmètre borné, avec Morris recentré sur les **gates structurants**.

| Dimension | Orientation |
|-----------|-------------|
| Cycles | Mieux cadrés en amont ; potentiellement plus longs ; moins hachés |
| Prompts | Plus **contractuels** — contrat d'exécution explicite |
| ChatGPT | Qualification, cadrage, références, prompt, risques, recommandation, limitation sollicitations Morris |
| Cursor | Git Truth Check, exécution bornée, contrôle fichiers, rapport, PR-ready, signalement écarts |
| Morris | Arbitrages structurants, gates, merge, actation version, lancement pilote |
| Automatisation | Exécution répétable (L1–L3 borné) — **jamais** arbitrage structurant |

### Phrase cible

> **Un cycle SFIA doit être suffisamment cadré en amont pour permettre une exécution autonome dans le périmètre, avec escalade Morris uniquement sur arbitrage structurant, dépassement de scope ou réserve bloquante.**

**Lecture Codex :** « moins d'interruptions Morris » signifie **plus de cadrage amont** (prompt contractuel, périmètre fermé, gates listés) — pas moins de rigueur ni moins de garde-fous.

---

## 5. Synthèse Cursor + Codex unifiée

### 5.1 Apport Cursor

- Plan initial : couverture complète (11 chantiers, cycle de vie SFIA 19 étapes, cycle projet 17 étapes, garde-fous, catalog, gel 3.0).
- Version resserrée : roadmap **6 cycles** (0–5), budgets PR/docs, responsabilisation GPT+Cursor, critères C1–C10, épreuve réelle obligatoire.

### 5.2 Apport Codex

| Verdict | Objet | Ajustements |
|---------|-------|-------------|
| **ACCEPT WITH ADJUSTMENTS** | Plan initial 11 chantiers | Réduire cycles/PR ; prouver Light+Standard ; catalog Candidate ; gel 3.0 passif ; fusionner chantiers doc |
| **ACCEPT WITH MINOR ADJUSTMENTS** | Plan resserré | Responsabilité bornée explicite ; stop conditions ; budgets resserrés (3 PR méthode si possible) ; D0–D7 ; vigilance cadrage amont |

### 5.3 Convergence

- v2.4 = base saine ; v2.5 = **candidate** jusqu'à preuve Cycle 4 (épreuves réelles).
- Proportionnalité par profil — anti Critical par défaut.
- Prompt Catalog **Candidate** — pas de promotion Validated avant usage réel.
- SFIA 3.0 **gelée** — pas chantier central.
- Codex = **challenger ponctuel** — pas acteur standard.
- Git = source de vérité ; Morris L0 sur arbitrages structurants.

### 5.4 Ajustements retenus

| Ajustement | Détail |
|------------|--------|
| Roadmap resserrée | 6 cycles (0–5) |
| Budget PR méthode | **≤ 4 PR** consolidation **candidate** avant préparation pilote (Cycles 1, 2, 3, 5) — sous réserve validation Morris explicite ; épreuve Cycle 4 = 2 PR séparées |
| Budget docs | Mise à jour avant création ; ≤ 2 nouveaux documents méthode avant Cycle 5 (project plan = 1 ; méthode cycles = 2) |
| Budget templates | 3 templates max au **Cycle 3** (fondés sur méthode Cycle 2) |
| Preuve obligatoire | 1 cycle Light réel + 1 cycle Standard réel (**Cycle 4**) |
| Readiness | **Une seule** readiness par cycle |
| chatgpt-review.md | Audits / revues structurantes uniquement — pas cycles Light triviaux |

### 5.5 Éléments refusés ou repoussés

| Élément | Traitement |
|---------|------------|
| SFIA 3.0 comme trajectoire courante | Refusé — clôture actée |
| Bridge / Runner / Git Reader | Repoussé — gel historique |
| Codex comme brique standard | Refusé — ponctuel uniquement |
| Promotion v2.5 minor sans Cycle 4 | Repoussé — candidate d'abord |
| Prompt Catalog Validated avant épreuve | Repoussé — Cycle 4+ |
| 7 cycles / 11 chantiers parallèles | Refusé — roadmap resserrée |
| Décommission technique 3.0 | Repoussé — cycle séparé GO Morris |

---

## 6. Principes directeurs

| # | Principe | Règle |
|---|----------|-------|
| P1 | **Repo-first** | Git versionne ; prompts et rapports temporaires ne remplacent pas le repo |
| P2 | **Decision-driven** | Décisions structurantes avant flux PR |
| P3 | **No Critical by default** | Profil obligatoire ; défaut Light si doute |
| P4 | **Prompt as contract** | Le prompt Cursor = contrat d'exécution borné |
| P5 | **Bounded execution** | Cursor exécute le périmètre — ne l'élargit pas |
| P6 | **Single readiness** | Une readiness par cycle — pas de double passage |
| P7 | **Evidence before promotion** | Catalog, v2.5 validable, pilote : après preuve réelle |
| P8 | **Update before create** | Modifier documents existants avant créer de nouveaux standards |
| P9 | **Candidate before validable** | v2.5 candidate jusqu'à Cycle 4 PASS (C1–C10) + décision Morris Cycle 5 |
| P10 | **Morris L0** | Arbitrages structurants, merge, actation, pilote |
| P11 | **No automated structural arbitration** | Aucun outil ne décide doctrine, scope structurant, gates ou version |

---

## 7. Responsabilité bornée

### 7.1 ChatGPT

| Responsabilité | Détail |
|----------------|--------|
| Qualifie le profil | Grille : type cycle, risque, fichiers, doctrine, QA — **défaut Light si doute** |
| Cadre le cycle | Périmètre, hors périmètre, livrables, gates Morris (liste fermée) |
| Sélectionne les références | Matrice profil → documents minimaux |
| Produit le prompt contractuel | Structure operating model §8 ; interdictions explicites |
| Identifie les risques | Critical implicite, scope creep, chemins protégés |
| Recommande une décision | READY / READY WITH RESERVES / NOT READY — un passage |
| Limite sollicitations Morris | Uniquement gates structurants listés dans le prompt |

**ChatGPT recommande, mais ne décide pas.** ChatGPT ne push pas, ne merge pas, ne crée pas de PR, ne résout pas de gate, n'acte pas de version.

### 7.2 Cursor

| Responsabilité | Détail |
|----------------|--------|
| Local Git Truth Check | Avant chaque cycle — stop si désaligné `main` / `origin/main` |
| Exécute dans le périmètre | L3 borné — fichiers et actions listés dans le prompt |
| Contrôle les fichiers touchés | Signale tout écart vs prompt |
| Produit un rapport structuré | Format adapté au profil (Light court / Standard complet) |
| Prépare PR-ready si autorisé | Body PR, checklist readiness — sans ouvrir PR sans GO |
| Signale les écarts | Hors périmètre, guardrail FAIL, ambiguïté structurante |

**Cursor exécute et signale, mais ne change pas le périmètre.** Cursor n'arbitre pas, n'élargit pas le scope, ne classifie pas un cycle Critical sans instruction explicite.

### 7.3 Morris

| Responsabilité | Détail |
|----------------|--------|
| Arbitre les décisions structurantes | Doctrine, archi, périmètre Critical, protected paths |
| Valide les gates | D0–D7 selon cycle ; GO scope Standard+ ; GO merge |
| Autorise push / PR / merge | L0 — jamais délégué |
| Valide la promotion v2.5 | Candidate → validable — Cycle 5 uniquement |
| Autorise le lancement pilote | Cycle 5 — GO séparé (après consolidation) |

**Morris ne valide pas** (sauf contestation) : choix de wording non structurant, post-merge Light trivial, qualification profil Light évidente.

### 7.4 Codex — hors standard

Challenger **ponctuel** sur demande Morris (ex. comparaison rapport Cycle 4). Jamais passage obligatoire ; jamais dans prompt standard ; jamais acteur de la chaîne cible.

---

## 8. Stop conditions

### 8.1 Cursor continue jusqu'au rapport final si

- le prompt contractuel est complet (objectif, périmètre, hors périmètre, profil, fichiers, livrables, gates, contraintes) ;
- le périmètre est clair et fermé ;
- Local Git Truth Check PASS ;
- aucune condition d'arrêt ci-dessous n'est déclenchée.

### 8.2 Cursor documente une hypothèse conservatrice si

- ambiguïté **mineure** (formulation documentaire non structurante) ;
- choix de wording sans impact méthode, doctrine ou scope ;
- absence de risque sur scope, doctrine ou chemin protégé ;
- le prompt autorise explicitement une hypothèse conservatrice documentée dans le rapport.

### 8.3 Cursor stoppe et demande Morris si

| Condition | Exemple |
|-----------|---------|
| Dépassement de scope | Fichier hors liste prompt |
| Ambiguïté **structurante** | Conflit profil Light vs Standard |
| Impact doctrine | Modification règle L0–L5, operating model structurant |
| Chemin protégé | `.git/`, secrets, suppression, push sans GO |
| Décision métier | Choix produit, stack, go-live |
| Conflit documents canoniques | Operating model vs routing vs v2.4 incohérents |
| Besoin push / PR / merge | Action Git L0 requise |
| Promotion v2.5 implicite | Formulation actant v2.5 validée |
| Relance SFIA 3.0 | Bridge, Runner, orchestration autonome |
| Réserve bloquante | Guardrail FAIL non résolvable dans le périmètre |

---

## 9. Budgets projet

| Budget | Limite | Écart |
|--------|--------|-------|
| **PR méthode** (consolidation) | **≤ 4 PR** candidate avant préparation pilote (Cycles 1, 2, 3, 5) | Sous réserve validation Morris explicite |
| **PR épreuve** (Cycle 4) | 2 PR (1 Light + 1 Standard) | Hors budget consolidation |
| **Nouveaux documents méthode** | ≤ 2 avant Cycle 5 (dont ce project plan = 1 ; méthode cycles projet = 2) | Update before create |
| **Templates** (Cycle 3) | 3 max (Light, Standard, Critical ou équivalent paramétrable) | Fondés sur méthode Cycle 2 |
| **Readiness** | 1 par cycle | Pas de double readiness |
| **Prompt Catalog** | Candidate — pas de promotion Validated avant Cycle 4 réussi | — |
| **chatgpt-review.md** | Audits / revues structurantes — pas Light trivial | Jamais commit / staging / PR |

**Budget cible candidat avant préparation pilote :**

- 1 PR Cycle 0 pour ouvrir le chantier SFIA v2.5 candidate ;
- jusqu'à **4 PR** de consolidation méthode **candidate** : Cycles 1, 2, 3 et 5 — sous réserve validation Morris explicite ;
- 2 PR d'épreuve réelle : Cycle 4 Light + Cycle 4 Standard ;
- **7 PR maximum**, sous réserve de validation Morris explicite (hors pilote).

> Le passage de 6 à 7 PR max reflète la **correction candidate** du recentrage Cycle 2 (méthode cycles avant templates) — **plafond candidat**, non norme définitive tant que Morris n'a pas validé ce budget.

Les PR de préparation ou d'exécution du pilote sont hors de ce budget et nécessitent un GO Morris séparé.

Tout écart au budget doit être **justifié et validé par Morris** avant exécution.

---

## 10. Critères de succès C1–C10

| ID | Critère | Mesure | Cycle preuve |
|----|---------|--------|--------------|
| **C1** | Cycle Light sans double readiness | 1 checklist readiness / cycle Light | Cycle 4 Light |
| **C2** | Cycle Light = 1 PR courte | ≤ 3 fichiers si possible ; diff borné | Cycle 4 Light |
| **C3** | Cycle Standard traçable sans devenir Critical | Profil Standard explicite ; rapport complet | Cycle 4 Standard |
| **C4** | Morris sollicité uniquement sur gates structurants | Pas de sollicitation confort ; ≤ 2 gates Cycle 4 Light | Cycle 4 |
| **C5** | chatgpt-review.md non utilisé pour Light trivial | Usage réservé audits / revues structurantes | Cycle 4 |
| **C6** | Mise à jour avant création | ≤ 1 nouveau standard méthode (Cycle 5) en plus de ce plan et méthode cycles | Cycles 1–5 |
| **C7** | PR consolidation maîtrisées | ≤ 4 PR consolidation candidate + épreuve séparée — plafond 7 PR max soumis validation Morris | Cycles 1–5 |
| **C8** | Prompt Catalog reste Candidate | Pas de promotion Validated avant usage réel | Cycle 4 |
| **C9** | SFIA 3.0 reste gelée passive | Bannière légère possible — pas chantier relance | Cycle 4 Light |
| **C10** | Zéro Critical par défaut | 0 cycle non-Critical classé Critical | Cycle 4 |

**Passage v2.5 candidate → v2.5 validable :** C1–C10 PASS (ou réserves acceptées par Morris) + décision Morris explicite Cycle 5 + PR consolidation mergée.

---

## 11. Décisions Morris D0–D7

| ID | Décision | Moment | Type |
|----|----------|--------|------|
| **D0** | GO SFIA v2.5 **candidate** — ouverture chantier **sans** acter v2.5 validée | Avant merge PR Cycle 0 | Stratégique |
| **D1** | Validation de la phrase cible (§4) | Cycle 0 | Méthode |
| **D2** | Validation des profils Light / Standard / Critical / Capitalization comme **hypothèse candidate** | Cycle 0 | Méthode |
| **D3** | Validation de la responsabilité bornée ChatGPT / Cursor / Morris (§7) | Cycle 0 | Gouvernance |
| **D4** | Validation des stop conditions (§8) | Cycle 0 | Gouvernance |
| **D5** | Validation des budgets PR / docs / templates (§9) | Cycle 0 | Plan |
| **D6** | Confirmation Prompt Catalog **Candidate** et SFIA 3.0 **gelée** | Cycle 0 | Doc / outillage |
| **D7** | Autorisation du **Cycle 1 uniquement** — pas des cycles suivants | Après merge Cycle 0 | GO cycle |

**Non-décision explicite :** v2.5 minor validée ; catalog Validated ; dates pilote ; Codex standard ; relance SFIA 3.0.

Les décisions D0–D7 peuvent être traitées en **un passage Morris** post-lecture de ce document, avant lancement Cycle 1.

---

## 12. Roadmap globale Cycles 0 à 5

> **Trajectoire candidate corrigée** (décision Morris post-Cycle 1) — non définitive ; ne valide pas SFIA v2.5.

| Cycle | Objectif | Livrable | PR |
|-------|----------|----------|-----|
| **0** | Document projet global | Ce fichier | 1 |
| **1** | MVP méthode proportionnée | Addendum operating model + routing | 1 |
| **2** | Méthodologie cycles projet SFIA | Plan réaligné + `sfia-v2.5-project-cycles-method-candidate.md` | 1 |
| **3** | Templates / prompts opérationnels | Contrats d'exécution Cursor fondés sur Cycle 2 | 1 |
| **4** | Épreuve réelle | 1 Light + 1 Standard mesurés (C1–C10) | 2 |
| **5** | Consolidation / préparation pilote | Package validable si Cycle 4 PASS ; bootstrap pilote | 1+ |

### Synthèse par cycle

| Cycle | Périmètre | Hors périmètre | Gates Morris | Critères sortie | Post-merge | Capitalisation |
|-------|-----------|----------------|--------------|-----------------|------------|----------------|
| **0** | Project plan | Tout le reste | D0–D7 ; merge | Doc mergé ; décisions tracées | L1 court | Ce plan |
| **1** | Profils, responsabilités, readiness | Catalog, templates, méthode cycles complète | D7 ; scope ; merge | Profils opérationnels ; distinction type/profil | L1 court | Non |
| **2** | Cartographie + méthode cycles projet | Templates détaillés ; Catalog Validated ; 3.0 | merge | Méthode cycles exploitable ; matrice type × profil ; besoins Cycle 3 | L1 court | Non |
| **3** | Templates / prompts candidate | Épreuves ; actation v2.5 ; pilote | merge | Contrats type + profil utilisables | Skip si trivial | Non |
| **4** | 1 Light + 1 Standard réels | Actation v2.5 ; pilote | merge(s) | C1–C10 mesurés | Light skip ; Standard court | Rapport épreuve |
| **5** | Package validable + bootstrap pilote | Sans Cycle 4 PASS | GO actation ; GO pilote ; merge | Morris décide validable ou candidate | Standard | Oui si validable |

---

## 13. Détail Cycle 0 — Document projet global

| Dimension | Détail |
|-----------|--------|
| **Objectif** | Créer et versionner la référence globale du chantier SFIA v2.5 candidate |
| **Livrable** | `sfia-v2.5-project-plan.md` (ce document) |
| **Périmètre** | 1 fichier créé — aucune autre modification versionnée |
| **Hors périmètre** | Operating model, routing, catalog, templates, doctrine 3.0, engines |
| **Fichiers** | `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md` |
| **Profil SFIA** | Capitalization (planification) |
| **Gates Morris** | D0–D7 ; validation contenu plan ; GO merge PR dédiée |
| **Critères sortie** | Document mergé sur `main` ; décisions Morris D0–D7 tracées (PR, commentaire ou note) |
| **Budget PR** | **1** |
| **Risques** | Confondre ouverture chantier et actation v2.5 |
| **Anti-patterns** | Ajouter operating model dans la même PR ; acter minor |
| **Post-merge** | L1 — statut « chantier ouvert » |
| **Capitalisation** | Mémoire projet pour Cycles 1–5 |

**Ce cycle acte l'ouverture du chantier. Il n'acte pas SFIA v2.5 comme version validée.**

---

## 14. Détail Cycle 1 — MVP méthode proportionnée

| Dimension | Détail |
|-----------|--------|
| **Objectif** | Opérationnaliser profils, responsabilités bornées, readiness proportionnée, stop conditions |
| **Livrable** | Addendum ou mise à jour ciblée : `sfia-chatgpt-cursor-operating-model.md`, `sfia-cycle-routing-guide.md` (§4) ; évent. § ciblé `sfia-validation-checklist.md` |
| **Priorité** | **Modification ciblée avant création** — pas de gros standard autonome |
| **Hors périmètre** | Catalog promotion ; templates ; doctrine 3.0 ; cycle projet complet |
| **Gates Morris** | D7 préalable ; GO scope fichiers ; GO merge |
| **Critères sortie** | Prompts Light et Standard produisibles sans ambiguïté ; matrice profil → QA / readiness / post-merge |
| **Budget PR** | 1 |
| **Budget fichiers** | ≤ 3 fichiers modifiés |
| **Risques** | Scope creep — 3 PR au lieu d'1 |
| **Anti-patterns** | Créer `sfia-v2.5-proportional-cycle-standard.md` dès Cycle 1 |
| **Post-merge** | L1 court |
| **Capitalisation** | Non — candidate |

---

## 15. Détail Cycle 2 — Méthodologie des cycles projet SFIA

| Dimension | Détail |
|-----------|--------|
| **Objectif** | Produire la méthode candidate des cycles projet SFIA : cartographie, méthodologie par cycle, classification obligatoire/activable/transverse, matrice type × profil, gates Morris, besoins Cycle 3 |
| **Livrables** | Mise à jour ce plan (roadmap corrigée) ; `sfia-v2.5-project-cycles-method-candidate.md` |
| **Périmètre** | 2 livrables principaux versionnés — 1 update plan + 1 création méthode — avec jusqu'à 2 cross-references minimales autorisées dans les documents core si nécessaires à la lisibilité repo-first ; méthode exploitable — pas encyclopédique |
| **Hors périmètre** | Templates / prompts opérationnels détaillés (Cycle 3) ; Prompt Catalog Validated ; épreuves (Cycle 4) ; SFIA 3.0 ; pilote |
| **Profil SFIA** | Capitalization / Critical — Capitalization car le cycle capitalise une méthode réutilisable ; Critical car il touche à la méthode cœur SFIA, à la roadmap v2.5 et aux gates projet |
| **Gates Morris** | GO scope ; GO merge |
| **Critères sortie** | Cycles cœur couverts ; transverses identifiés ; matrice type × profil exploitable ; besoins Cycle 3 définis ; v2.5 reste candidate |
| **Budget PR** | 1 |
| **Budget fichiers** | 2 livrables principaux + jusqu'à 2 cross-references minimales core, sans élargissement doctrinal |
| **Risques** | Scope creep vers méthode exhaustive ; création templates trop tôt |
| **Anti-patterns** | 1 template par cycle ; rendre tous les cycles obligatoires ; Critical par défaut |
| **Post-merge** | L1 court |
| **Capitalisation** | Non — candidate |

**Ce cycle pose la méthode des cycles projet. Il ne produit pas les contrats d'exécution Cursor (Cycle 3).**

---

## 16. Détail Cycle 3 — Templates / prompts opérationnels

| Dimension | Détail |
|-----------|--------|
| **Objectif** | Produire les contrats d'exécution Cursor fondés sur la méthodologie Cycle 2 — par type de cycle + profil SFIA |
| **Livrable** | Template(s) candidate dans `prompts/templates/` (max 3 ou 1 paramétrable — cadrage Cycle 3) |
| **Contenu** | Objectif, type cycle, profil, périmètre, références, livrables, gates, stop conditions, readiness, rapport — sections activables (RSSI, DevOps, FinOps, etc.) |
| **Prérequis** | Cycle 2 PASS — méthode cycles projet mergée |
| **Maximum** | **3 templates** ou 1 template paramétrable — pas plus |
| **Hors périmètre** | Épreuves réelles ; promotion Prompt Catalog Validated ; actation v2.5 ; pilote ; SFIA 3.0 |
| **Gates Morris** | GO merge |
| **Critères sortie** | Templates déclarent type + profil ; utilisables pour Cycle 4 |
| **Budget PR** | 1 |
| **Risques** | Sur-ingénierie ; duplication PGE ; templates sans ancrage méthode |
| **Anti-patterns** | 10 templates ; restructuration catalog ; templates avant méthode cycles |
| **Post-merge** | Skip si trivial |
| **Capitalisation** | Non |

**Prompt Catalog reste Candidate** — note minimale autorisée en Cycle 3 uniquement si strictement nécessaire (1 paragraphe), avec GO Morris.

---

## 17. Détail Cycle 4 — Épreuve réelle

| Dimension | Détail |
|-----------|--------|
| **Objectif** | **Prouver** la proportionnalité sur cas concrets — cycle de vérité |
| **Prérequis** | Cycles 1–3 PASS ; templates candidate en usage |
| **Livrable** | 2 PR mergées ; 2 rapports Cursor ; tableau métriques C1–C10 |
| **Cycles** | **1 Light réel** puis **1 Standard réel** — distincts, pas regroupés en Critical |
| **Light suggéré** | Bannière gel SFIA 3.0 sur 1–2 fichiers doctrine — minimal |
| **Standard suggéré** | Alignement checklist validation § ciblé ou cross-ref operating model |
| **Mesures** | Interruptions Morris ; readiness (simple ou double) ; post-merge ; format rapport Cursor |
| **Nature** | **Pas une démonstration arrangée** — cycles réels avec contraintes réelles |
| **Hors périmètre** | Actation v2.5 ; catalog Validated ; pilote ; gros refactor |
| **Gates Morris** | Light : merge (si doc-only OK) ; Standard : GO scope + merge |
| **Critères sortie** | C1–C10 PASS ou réserves documentées |
| **Budget PR** | 2 |
| **Risques** | Light traité Standard ; échec → rework Cycles 1–3 |
| **Anti-patterns** | Regrouper Light+Standard ; Critical par confort |
| **Post-merge** | Light : skip ; Standard : court |
| **Capitalisation** | Rapport épreuve → input Cycle 5 |

---

## 18. Détail Cycle 5 — Consolidation / préparation pilote

| Dimension | Détail |
|-----------|--------|
| **Prérequis** | Cycle 4 PASS (C1–C10) |
| **Objectif** | Produire un package **validable** — Morris décide si v2.5 devient validable ; bootstrap pilote si GO |
| **Livrable** | Standard v2.5 proportionnel (si justifié) ; mise à jour registre versioning §6 **proposition** ; synthèse épreuve ; évent. `projects/<pilote>/` bootstrap |
| **Hors périmètre** | Promotion catalog sans justification ; décommission 3.0 ; Bridge |
| **Gates Morris** | **GO actation v2.5 validable** — décision explicite ; GO pilote séparé ; merge |
| **Critères sortie** | PR mergée ; statut candidate ou validable acté ; pilote cadré si GO |
| **Budget PR** | 1+ (consolidation ; pilote variable) |
| **Risques** | Actation sans épreuve ; pilote avant validable |
| **Anti-patterns** | Promotion automatique ; pilote comme preuve de méthode |
| **Post-merge** | Standard |
| **Capitalisation** | Oui — si validable |

**Pas de promotion automatique.** Morris tranche : validable, candidate avec réserves, ou rework.

---

## 19. Conditions de passage candidate → validable

Toutes les conditions suivantes doivent être réunies :

1. **Cycle 4 réussi** — 1 Light + 1 Standard réels, métriques collectées.
2. **Critères C1–C10 PASS** — ou réserves explicitement acceptées par Morris.
3. **PR de consolidation Cycle 5 mergée** sur `main`.
4. **Décision Morris explicite** — GO actation v2.5 validable (pas implicite).
5. **Absence de relance v3.0** — pas de Bridge / Runner / orchestration autonome dans les livrables.
6. **Absence de promotion prématurée** du Prompt Catalog (reste Candidate ou promotion justifiée post-épreuve).

---

## 20. Conditions de lancement pilote

1. **Cycle 5 terminé** — statut validable acté (ou candidate avec réserves).
2. **v2.5 candidate jugée validable** — pas seulement « chantier ouvert ».
3. **Pilote cadré** — intention Morris, profil, périmètre.
4. **Périmètre MVP défini** — backlog priorisé.
5. **Gates Morris définis** — scope, stack, INC-n, merge, REX.
6. **Budget PR cible** — défini et accepté.
7. **Méthode utilisée en conditions réelles** — méthode cycles, templates et addenda Cycles 1–3 en usage.

**Pas de lancement sans GO Morris séparé** (distinct de D0–D7).

---

## 21. Risques et anti-patterns

| Risque / anti-pattern | Mitigation |
|-----------------------|------------|
| **Critical par défaut** | Profil obligatoire ; défaut Light ; challenge systématique |
| **Sur-documentation** | Update before create ; budgets docs |
| **Prompts trop longs** | Templates Cycle 3 ; références par type + profil |
| **Cycles trop larges** | Périmètre fermé ; hors périmètre explicite |
| **Micro-validations** | Cadrage amont ; single readiness ; gates listés |
| **ChatGPT arbitre implicite** | Recommande — ne décide pas |
| **Cursor sort du scope** | Stop conditions ; signalement écarts |
| **Candidate utilisée comme validée** | Statut explicite dans chaque cycle |
| **Codex passage obligé** | Ponctuel uniquement ; hors prompts standard |
| **Relance SFIA 3.0** | Gel passif ; closure = référence |
| **Prompt Catalog promu trop tôt** | Candidate jusqu'à Cycle 4 réussi |
| **Confondre Cycle 0 et actation v2.5** | Ce document = ouverture chantier uniquement |

---

## 22. Hors périmètre (ce document et PR Cycle 0)

- Modification des docs v3.0
- Modification `prompt-catalog.md`
- Création de templates
- Refonte operating model, routing guide, guardrails, engines
- Modification `.sfia/`
- Bridge / Runner / Git Reader
- PR automatique, merge, suppression
- Actation v2.5 finale
- Lancement pilote
- Promotion Codex standard

---

## 23. Verdict

### READY TO OPEN SFIA v2.5 CANDIDATE PROJECT

**Réserves :**

- SFIA v2.5 **non validée** — statut candidate ;
- Preuve Cycle 4 **obligatoire** avant actation validable ;
- Cycle 1 autorisé **uniquement après** GO Morris D7 post-merge Cycle 0 ;
- PR actuelle limitée au **document projet global** ;
- Proportionnalité **non prouvée** — à démontrer sur cycles réels.

---

## Références

| Document | Rôle |
|----------|------|
| `sfia-v2.4-consolidation-operating-efficiency-standard.md` | Baseline active — profils, QA, readiness |
| `sfia-chatgpt-cursor-operating-model.md` | Boucle opératoire — prompt contractuel |
| `sfia-cycle-routing-guide.md` | Routage cycles |
| `sfia-rules-and-guardrails.md` | Garde-fous |
| `sfia-prompt-generation-engine.md` | PGE |
| `sfia-repository-execution-engine.md` | REE — Git Truth, exécution |
| `sfia-validation-engine.md` | Validation, readiness |
| `sfia-v2-automation-levels.md` | L0–L5 |
| `2026-07-08-sfia-3-exploration-closure.md` | Clôture 3.0 — gel |
| `sfia-v2.5-project-cycles-method-candidate.md` | Méthode cycles projet — Cycle 2 |
| `prompt-catalog.md` | Statut Candidate (§18 v2.4) — non modifié |

---

*SFIA v2.5 Project Plan — candidate — proposition projet — soumis validation Morris.*

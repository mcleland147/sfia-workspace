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
| **Valide SFIA v2.5 ?** | **Non** — la promotion en baseline validable dépend des cycles réels (Cycle 3) et d'une décision Morris explicite (Cycle 4) |
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

- v2.4 = base saine ; v2.5 = **candidate** jusqu'à preuve Cycle 3.
- Proportionnalité par profil — anti Critical par défaut.
- Prompt Catalog **Candidate** — pas de promotion Validated avant usage réel.
- SFIA 3.0 **gelée** — pas chantier central.
- Codex = **challenger ponctuel** — pas acteur standard.
- Git = source de vérité ; Morris L0 sur arbitrages structurants.

### 5.4 Ajustements retenus

| Ajustement | Détail |
|------------|--------|
| Roadmap resserrée | 6 cycles (0–5) |
| Budget PR méthode | **≤ 3 PR** avant préparation pilote, si possible (Cycles 1–2 + consolidation Cycle 4) ; épreuve Cycle 3 = 2 PR séparées |
| Budget docs | Mise à jour avant création ; ≤ 2 nouveaux documents méthode avant Cycle 4 |
| Budget templates | 3 templates max au Cycle 2 |
| Preuve obligatoire | 1 cycle Light réel + 1 cycle Standard réel (Cycle 3) |
| Readiness | **Une seule** readiness par cycle |
| chatgpt-review.md | Audits / revues structurantes uniquement — pas cycles Light triviaux |

### 5.5 Éléments refusés ou repoussés

| Élément | Traitement |
|---------|------------|
| SFIA 3.0 comme trajectoire courante | Refusé — clôture actée |
| Bridge / Runner / Git Reader | Repoussé — gel historique |
| Codex comme brique standard | Refusé — ponctuel uniquement |
| Promotion v2.5 minor sans Cycle 3 | Repoussé — candidate d'abord |
| Prompt Catalog Validated avant épreuve | Repoussé — Cycle 3+ |
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
| P9 | **Candidate before validable** | v2.5 candidate jusqu'à Cycle 3 PASS + décision Morris Cycle 4 |
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
| Valide la promotion v2.5 | Candidate → validable — Cycle 4 uniquement |
| Autorise le lancement pilote | Cycle 5 — GO séparé |

**Morris ne valide pas** (sauf contestation) : choix de wording non structurant, post-merge Light trivial, qualification profil Light évidente.

### 7.4 Codex — hors standard

Challenger **ponctuel** sur demande Morris (ex. comparaison rapport Cycle 3). Jamais passage obligatoire ; jamais dans prompt standard ; jamais acteur de la chaîne cible.

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
| **PR méthode** (consolidation) | **≤ 3 PR** avant préparation pilote, si possible (Cycles 1, 2, 4) | Justification + GO Morris |
| **PR épreuve** (Cycle 3) | 2 PR (1 Light + 1 Standard) | Hors budget consolidation |
| **Nouveaux documents méthode** | ≤ 2 avant Cycle 4 (dont ce project plan = 1) | Update before create |
| **Templates** (Cycle 2) | 3 max (Light, Standard, Critical) | Pas de familles supplémentaires |
| **Readiness** | 1 par cycle | Pas de double readiness |
| **Prompt Catalog** | Candidate — pas de promotion Validated avant Cycle 3 réussi | — |
| **chatgpt-review.md** | Audits / revues structurantes — pas Light trivial | Jamais commit / staging / PR |

**Budget cible avant préparation pilote :**

- 1 PR Cycle 0 pour ouvrir le chantier SFIA v2.5 candidate ;
- jusqu'à 3 PR de consolidation méthode : Cycles 1, 2 et 4 ;
- 2 PR d'épreuve réelle : Cycle 3 Light + Cycle 3 Standard ;
- soit **6 PR maximum avant préparation pilote**.

Les PR de préparation ou d'exécution du pilote sont hors de ce budget et nécessitent un GO Morris séparé.

Tout écart au budget doit être **justifié et validé par Morris** avant exécution.

---

## 10. Critères de succès C1–C10

| ID | Critère | Mesure | Cycle preuve |
|----|---------|--------|--------------|
| **C1** | Cycle Light sans double readiness | 1 checklist readiness / cycle Light | Cycle 3 Light |
| **C2** | Cycle Light = 1 PR courte | ≤ 3 fichiers si possible ; diff borné | Cycle 3 Light |
| **C3** | Cycle Standard traçable sans devenir Critical | Profil Standard explicite ; rapport complet | Cycle 3 Standard |
| **C4** | Morris sollicité uniquement sur gates structurants | Pas de sollicitation confort ; ≤ 2 gates Cycle 3 Light | Cycle 3 |
| **C5** | chatgpt-review.md non utilisé pour Light trivial | Usage réservé audits / revues structurantes | Cycle 3 |
| **C6** | Mise à jour avant création | ≤ 1 nouveau standard méthode (Cycle 4) en plus de ce plan | Cycles 1–4 |
| **C7** | PR consolidation maîtrisées | ≤ 3 PR consolidation + épreuve séparée | Cycles 1–4 |
| **C8** | Prompt Catalog reste Candidate | Pas de promotion Validated avant usage réel | Cycle 3 |
| **C9** | SFIA 3.0 reste gelée passive | Bannière légère possible — pas chantier relance | Cycle 3 Light |
| **C10** | Zéro Critical par défaut | 0 cycle non-Critical classé Critical | Cycle 3 |

**Passage v2.5 candidate → v2.5 validable :** C1–C10 PASS (ou réserves acceptées par Morris) + décision Morris explicite Cycle 4 + PR consolidation mergée.

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

| Cycle | Objectif | Livrable | PR |
|-------|----------|----------|-----|
| **0** | Document projet global | Ce fichier | 1 |
| **1** | MVP méthode proportionnée | Addendum operating model + routing | 1 |
| **2** | Templates minimaux | 3 templates Light / Standard / Critical | 1 |
| **3** | Épreuve réelle | 1 Light + 1 Standard mesurés | 2 |
| **4** | Consolidation validable | Package v2.5 si Cycle 3 PASS | 1 |
| **5** | Préparation pilote | Bootstrap projet | variable |

### Synthèse par cycle

| Cycle | Périmètre | Hors périmètre | Gates Morris | Critères sortie | Post-merge | Capitalisation |
|-------|-----------|----------------|--------------|-----------------|------------|----------------|
| **0** | Project plan | Tout le reste | D0–D7 ; merge | Doc mergé ; décisions tracées | L1 court | Ce plan |
| **1** | Profils, responsabilités, readiness | Catalog, templates, standard autonome | D7 ; scope ; merge | Profils opérationnels ; prompts sans ambiguïté | L1 court | Non |
| **2** | 3 templates | Catalog Validated ; 3.0 | merge | Templates utilisables | Skip si trivial | Non |
| **3** | 1 Light + 1 Standard réels | Actation v2.5 ; pilote | merge(s) | C1–C10 mesurés | Light skip ; Standard court | Rapport épreuve |
| **4** | Package validable | Sans Cycle 3 PASS | GO actation ; merge | Morris décide validable ou candidate | Standard | Oui si validable |
| **5** | Bootstrap pilote | Sans Cycle 4 | GO pilote ; MVP ; INC-01 | INC-01 cadré | Standard projet | REX différé |

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

## 15. Détail Cycle 2 — Templates minimaux

| Dimension | Détail |
|-----------|--------|
| **Objectif** | 3 templates prompt opérationnels — contrats d'exécution par profil |
| **Livrable** | Templates Light, Standard, Critical dans `prompts/templates/` (noms à fixer au cadrage) |
| **Contenu template** | Objectif, périmètre, hors périmètre, profil, références, livrables, gates Morris, stop conditions, format rapport |
| **Maximum** | **3 templates** — pas plus |
| **Hors périmètre** | Promotion Prompt Catalog Validated ; familles pilote ; SFIA 3.0 |
| **Gates Morris** | GO merge |
| **Critères sortie** | Chaque template force déclaration profil ; utilisables pour Cycle 3 |
| **Budget PR** | 1 |
| **Risques** | Sur-ingénierie ; duplication PGE |
| **Anti-patterns** | 10 templates ; restructuration catalog |
| **Post-merge** | Skip si trivial |
| **Capitalisation** | Non |

**Prompt Catalog reste Candidate** — note minimale autorisée en Cycle 2 uniquement si strictement nécessaire (1 paragraphe), avec GO Morris.

---

## 16. Détail Cycle 3 — Épreuve réelle

| Dimension | Détail |
|-----------|--------|
| **Objectif** | **Prouver** la proportionnalité — cycle de vérité |
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
| **Risques** | Light traité Standard ; échec → rework Cycle 1 |
| **Anti-patterns** | Regrouper Light+Standard ; Critical par confort |
| **Post-merge** | Light : skip ; Standard : court |
| **Capitalisation** | Rapport épreuve → input Cycle 4 |

---

## 17. Détail Cycle 4 — Consolidation validable

| Dimension | Détail |
|-----------|--------|
| **Prérequis** | Cycle 3 PASS (C1–C10) |
| **Objectif** | Produire un package **validable** — Morris décide si v2.5 devient validable ou reste candidate |
| **Livrable** | Standard v2.5 proportionnel (si justifié) ; mise à jour registre versioning §6 **proposition** ; synthèse épreuve |
| **Hors périmètre** | Promotion catalog ; décommission 3.0 ; Bridge |
| **Gates Morris** | **GO actation v2.5 validable** — décision explicite ; merge |
| **Critères sortie** | PR mergée ; statut candidate ou validable acté par Morris |
| **Budget PR** | 1 |
| **Risques** | Actation sans épreuve ; retour Critical par défaut |
| **Anti-patterns** | Promotion automatique ; minor sans gate Morris |
| **Post-merge** | Standard |
| **Capitalisation** | Oui — si validable |

**Pas de promotion automatique.** Morris tranche : validable, candidate avec réserves, ou rework.

---

## 18. Détail Cycle 5 — Préparation pilote

| Dimension | Détail |
|-----------|--------|
| **Prérequis** | Cycle 4 terminé ; v2.5 jugée **validable** par Morris ; critères C1–C10 PASS |
| **Objectif** | Bootstrap nouveau projet sous méthode v2.5 validable |
| **Livrable** | `projects/<pilote>/` ; brief ; backlog MVP ; INC-01 cadré |
| **Profil pilote** | À définir — hypothèse **Standard** |
| **Budget PR pilote** | À définir au cadrage — cible indicative 15–25 PR MVP (v2.4 §5.2) |
| **Gates Morris** | GO pilote séparé ; GO MVP scope ; GO INC-01 ; merges |
| **Hors périmètre** | Lancement sans GO ; extraction standards massive ; EVOL ; production |
| **Critères sortie** | INC-01 exécutable ; méthode utilisée en conditions réelles |
| **Risques** | Pilote avant validable ; retour operating model pilote fondateur (44 PR) |
| **Anti-patterns** | Pilote comme preuve de méthode — la preuve est Cycle 3 |
| **Post-merge** | Standard projet |
| **Capitalisation** | REX en fin de pilote — hors scope ce plan |

---

## 19. Conditions de passage candidate → validable

Toutes les conditions suivantes doivent être réunies :

1. **Cycle 3 réussi** — 1 Light + 1 Standard réels, métriques collectées.
2. **Critères C1–C10 PASS** — ou réserves explicitement acceptées par Morris.
3. **PR de consolidation Cycle 4 mergée** sur `main`.
4. **Décision Morris explicite** — GO actation v2.5 validable (pas implicite).
5. **Absence de relance v3.0** — pas de Bridge / Runner / orchestration autonome dans les livrables.
6. **Absence de promotion prématurée** du Prompt Catalog (reste Candidate ou promotion justifiée post-épreuve).

---

## 20. Conditions de lancement pilote

1. **Cycle 4 terminé** — statut validable acté.
2. **v2.5 candidate jugée validable** — pas seulement « chantier ouvert ».
3. **Pilote cadré** — intention Morris, profil, périmètre.
4. **Périmètre MVP défini** — backlog priorisé.
5. **Gates Morris définis** — scope, stack, INC-n, merge, REX.
6. **Budget PR cible** — défini et accepté.
7. **Méthode utilisée en conditions réelles** — templates et addenda Cycle 1–2 en usage.

**Pas de lancement sans GO Morris séparé** (distinct de D0–D7).

---

## 21. Risques et anti-patterns

| Risque / anti-pattern | Mitigation |
|-----------------------|------------|
| **Critical par défaut** | Profil obligatoire ; défaut Light ; challenge systématique |
| **Sur-documentation** | Update before create ; budgets docs |
| **Prompts trop longs** | Templates Cycle 2 ; références par profil |
| **Cycles trop larges** | Périmètre fermé ; hors périmètre explicite |
| **Micro-validations** | Cadrage amont ; single readiness ; gates listés |
| **ChatGPT arbitre implicite** | Recommande — ne décide pas |
| **Cursor sort du scope** | Stop conditions ; signalement écarts |
| **Candidate utilisée comme validée** | Statut explicite dans chaque cycle |
| **Codex passage obligé** | Ponctuel uniquement ; hors prompts standard |
| **Relance SFIA 3.0** | Gel passif ; closure = référence |
| **Prompt Catalog promu trop tôt** | Candidate jusqu'à Cycle 3 réussi |
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
- Preuve Cycle 3 **obligatoire** avant actation validable ;
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
| `prompt-catalog.md` | Statut Candidate (§18 v2.4) — non modifié |

---

*SFIA v2.5 Project Plan — candidate — proposition projet — soumis validation Morris.*

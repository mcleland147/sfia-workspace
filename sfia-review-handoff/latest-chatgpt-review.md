# SFIA Review Pack — Repository Rationalization Capitalization

**Horodatage :** 2026-07-13 11:55 Europe/Paris (CEST)
**Cycle :** 15 — Capitalisation / REX
**Profil SFIA :** Capitalization
**Branche :** `capitalization/sfia-v2.6-repository-rationalization`
**Base HEAD :** `0c29624e4398623c9417ed49e2eb8caa78093b9f`
**Review pack :** full
**Verdict cycle :** CAPITALIZATION COMPLETE WITH RESERVES

---

## Local Git Truth Check

| Élément | Valeur |
|---------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace` |
| Branche | `capitalization/sfia-v2.6-repository-rationalization` |
| HEAD | `0c29624e4398623c9417ed49e2eb8caa78093b9f` |
| origin/main | `0c29624e4398623c9417ed49e2eb8caa78093b9f` |
| Working tree | 2 fichiers modifiés/créés cycle ; untracked `.sfia/`, `.tmp-sfia-review/` |
| Commits cycle | **aucun** (conforme prompt) |
| Push branche projet | **non** (conforme prompt) |

**Verdict :** PASS

---

## Git Review Index

- base branch : `main`
- HEAD avant : `0c29624e4398623c9417ed49e2eb8caa78093b9f`
- HEAD après : `0c29624e4398623c9417ed49e2eb8caa78093b9f` (pas de commit)
- fichiers créés : `2026-07-13-sfia-v2.6-repository-rationalization-capitalization.md`
- fichiers modifiés : `2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`
- commits créés : none
- tests / validations : git diff --stat ; wc CSV 1037 lignes ; interdictions respectées
- diff stat : 1 file changed in tracked diff only for plan (+ new untracked capitalization until commit)
- décisions Morris requises : commit/PR capitalisation — **future gate** ; pas dans ce cycle
- review pack : full
- réserves : 5 `.gitkeep` ; Lots G/I ; v2.6 candidate

---

## Sources consultées (rôle — pas de copie intégrale)

| Source | Rôle |
|--------|------|
| `prompts/templates/08-capitalize-method-asset.md` | Template capitalisation |
| `prompts/templates/sfia-cycle-execution-template.md` | Procédure cycle §7 review/handoff |
| `sfia-chatgpt-cursor-operating-model.md` | Gouvernance Morris/Cursor |
| `sfia-cycle-routing-guide.md` | Routage documentaire |
| `sfia-rules-and-guardrails.md` | Garde-fous |
| `2026-07-11-sfia-v2.6-repository-migration-lots-plan.md` | Plan lots — mis à jour |
| `2026-07-11-sfia-v2.6-repository-cartography.md` | Contexte cartographie |
| `2026-07-11-sfia-v2.6-repository-cartography.csv` | Métriques post-J (lecture) |
| Rapports Lot F (qualification, F1a/F1b, F2) | Preuves trajectoire F |
| Rapports Lot H (cadrage, exécution) | Preuves trajectoire H |
| `2026-07-13-sfia-v2.6-lot-j-execution.md` | Preuves trajectoire J |
| `2026-07-11-sfia-v2.6-repository-cleanup-framing.md` | Contexte initial chantier |

---

## Garde-fous confirmés

- CSV : **non modifié** ✓
- Cartographie md : **non modifiée** ✓
- Aucune suppression ✓
- Prompts/templates : **non modifiés** ✓
- Assets F/H/J : **non modifiés** ✓
- Aucun commit cycle ✓
- Aucun push branche projet ✓
- Aucune PR ✓

---

## Décisions Morris (capitalisation)

| Type | Contenu |
|------|---------|
| **Décisions validées reprises** | Trajectoire F→H→J ; F-005 Option B ; 9 deletes J ; design coverage keep ; 12 protégés H |
| **Décisions requises (hors cycle)** | GO commit/PR capitalisation ; `.gitkeep` suppression ; Lots G/I |

---

## Réserves

1. 5 `.gitkeep` DELETE CANDIDATE Lot H — gate future
2. Lots G (570) et I (68) — hors périmètre rationalization
3. SFIA v2.6 candidate — pas baseline
4. Rapports exécution = photographs — non réécrits

---

## Fichier créé — contenu complet

# SFIA v2.6 — Repository Rationalization — Capitalisation méthode

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-13-sfia-v2.6-repository-rationalization-capitalization.md`
**Horodatage :** 2026-07-13 11:55 Europe/Paris (CEST)
**Cycle :** 15 — Capitalisation / REX
**Profil SFIA :** Capitalization (profondeur Standard)
**Typologie v2.4 :** CAPA
**Branche :** `capitalization/sfia-v2.6-repository-rationalization`
**Base Git :** `main` @ `0c29624e4398623c9417ed49e2eb8caa78093b9f` (post-merge PR #189)
**Périmètre capitalisé :** trajectoire **Repository Rationalization v2.6** — Lots **F → H → J** (Lots G et I exclus)
**Baseline opérationnelle :** SFIA v2.4 — SFIA v2.6 reste **candidate**
**Statut :** **CAPITALIZATION COMPLETE WITH RESERVES**

---

## 1. Objet de la capitalisation

Promouvoir en actif méthodologique SFIA la trajectoire **F → H → J** du chantier Repository Rationalization v2.6 : qualification des superseded, stabilisation prompts/templates, suppressions finales contrôlées.

**Ce document capitalise — il ne migre pas, ne supprime pas, ne modifie pas le CSV ni la cartographie.**

| Dimension | Contenu capitalisé |
|-----------|-------------------|
| **Observation** | Faits vérifiés Git, métriques post-merge, preuves des rapports d'exécution |
| **Recommandation** | Pratiques réutilisables pour cycles cleanup / rationalization futurs |
| **Décision proposée** | Options documentées non encore tranchées (ex. `.gitkeep`) |
| **Décision validée** | Arbitrages Morris explicitement acquis (trajectoire, F-005, design coverage, 9 deletes) |

---

## 2. Contexte initial

### 2.1 Ouverture du chantier v2.6

Le cadrage `2026-07-11-sfia-v2.6-repository-cleanup-framing.md` a ouvert un chantier de **consolidation et rationalisation documentaire** du repository `mcleland147/sfia-workspace`, en continuité avec les acquis v2.5 (review pack, handoff Git, Local Git Truth Check) sans remplacer la baseline SFIA v2.4.

**Prérequis structurels déjà clos avant F/H/J :**

| Lot | Rôle | Statut (pré-F) |
|-----|------|----------------|
| Cartographie PR #165 | Inventaire frozen 1045 fichiers | Merged |
| Lots 0, A, C, D, E | Qualification, rename, archivage v3, contrôles globaux | Closed |
| Lot B | D10 hors v3 | Not required (volume 0) |
| Lots G, I | Projets / tooling-CI | **Exclus** de la trajectoire F→H→J |

### 2.2 Problème adressé par F → H → J

Après cartographie et lots structurels, il restait :

1. **5 fichiers `lifecycle_status = superseded`** (Lot F) — doublons documentaires à qualifier avant suppression.
2. **40 fichiers `migration_lot_candidate = lot-H`** — prompts, templates, placeholders — à examiner sans toucher la spine opérationnelle.
3. **10 `delete-candidate` / `lot-J`** — suppressions finales après validation remplaçants et nettoyage références.

**Observation :** Lot F est une **phase process** (tag CSV = 0), pas un tag d'exécution. Les manifestes opérationnels sont dérivés de `lifecycle_status`, `proposed_disposition` et décisions Morris.

### 2.3 Contrat cartographie au départ de la trajectoire F

| Élément | Valeur initiale trajectoire F |
|---------|------------------------------|
| CSV SHA (pré-Lot J exécution) | `2a72757c6af186f2cb8aba5d488613be974cb12eed2d33b2d391edba5989f066` |
| Lignes inventaire | 1045 |
| `lifecycle_status = superseded` | 5 (F-001 à F-005) |
| `delete-candidate` / `lot-J` | 10 |
| `migration_lot_candidate = lot-H` | 40 |

**Règle capitalisée :** le CSV frozen est la **seule source statistique** ; Git est la **source de vérité contenu**. Toute exécution irréversible (delete) exige réconciliation CSV ↔ Git post-opération.

---

## 3. Stratégie F → H → J

### 3.1 Décision Morris structurante — trajectoire

| Décision | Statut | Preuve |
|----------|--------|--------|
| Trajectoire **F → H → J** | **Validée** | Rapports Lot F qualification ; cadrage Lot H §1 |
| Lots **G et I exclus** | **Confirmé** | Plan migration §9–§11 ; rapports F/H/J |
| Lot H **avant** Lot J | **Validé** | Cadrage Lot H §16 — refs cassées en H bloquent delete J |
| Lot F **avant** Lot H | **Validé** | Qualification F — remplaçants avant delete |

**Schéma :**

```text
Lot F (qualification superseded)
  → F1a/F1b (validation F-001–F-004)
  → F2 Critical (F-005 — Option B)
  → Lot H (cadrage + exécution unique — phases H3→H4→H2→H1)
  → Lot J (9 deletes + 1 keep design coverage)
```

### 3.2 Articulation des lots

| Lot | Manifeste | Exécution | PR / merge |
|-----|-----------|-----------|------------|
| **F** | 5 superseded | Qualification + validation + F2 | #184, #185, #186 |
| **H** | 40 lot-H | 1 cycle — 3 corrections lien/chemin | #187 (cadrage), #188 (exécution) |
| **J** | 10 delete-candidate initiaux | 9 suppressions + reclass design coverage | #189 |

### 3.3 Résultat intégré sur `main` @ `0c29624`

| Métrique | Avant Lot J | Après Lot J (main) |
|----------|------------:|-------------------:|
| Lignes CSV | 1045 | **1036** |
| CSV SHA-256 | `2a72757c…` | `3a02dcb2…` |
| `delete-candidate` | 10 | **0** |
| `lot-J` tag | 10 | **0** |
| `keep` | 620 | **621** |
| Fichiers supprimés (trajectoire J) | 0 | **9** |
| F-005 | présent | **présent** (inchangé) |
| Design coverage standard | delete-candidate | **keep** (conservé) |

---

## 4. Décisions Morris structurantes

### 4.1 Table des décisions validées

| # | Décision | Date / cycle | Impact |
|---|----------|--------------|--------|
| D1 | Trajectoire F → H → J ; G/I exclus | Pré-F | Périmètre rationalization borné |
| D2 | Lot H = **1 cycle unique** ; H1–H4 = phases internes | 2026-07-13 cadrage H | Pas de sous-lots Git H parallèles |
| D3 | F-005 **Option B** — conserver ; remplaçant `post-mvp-application-audit.md` **invalidé** | 2026-07-13 F2 | F-005 hors Lot J ; CSV routé `keep` / lot vide |
| D4 | Lot J : **9 suppressions** + **1 conservation** (design coverage) | 2026-07-13 | Manifeste J réduit avant exécution |
| D5 | 5 `.gitkeep` Lot H — **DELETE CANDIDATE** reportés | Exécution H | Hors périmètre Lot J |
| D6 | 12 fichiers protégés Lot H — **lecture seule** en exécution | Cadrage + exécution H | Spine prompts/templates intacte |

### 4.2 F-005 — Option B (Critical)

**Observation :** F-005 (`projects/interv360/06-audit-rex/current-application-audit.md`) était tagué `superseded` / `lot-J` avec remplaçant déclaré **absent** du repo.

**Décision validée :** maintenir F-005 ; invalider le remplaçant ; corriger le routage CSV (`migration_lot_candidate` vide, `keep`).

**Leçon capitalisée :** un `lifecycle_status = superseded` **ne suffit pas** pour autoriser delete — exiger **remplaçant présent Git** + **couverture fonctionnelle** + gate Morris Critical si usage navigation actif.

### 4.3 Design coverage standard — conservation Lot J

**Observation :** `sfia-v2-design-coverage-standard.md` figurait dans le manifeste J initial (10/10) mais était **référencé opérationnellement** (routing guide) sans remplaçant équivalent.

**Décision validée :** conserver ; reclassifier CSV (`keep`, lot vide, `duplicate_or_overlap` → `no`).

**Leçon capitalisée :** blocker manifest Lot J = fichier **operational** + **incoming refs actives** + **pas de remplaçant** — requalifier avant delete, pas forcer suppression.

---

## 5. Méthode de qualification des suppressions

### 5.1 Chaîne qualification → validation → exécution

```text
1. Extraire manifeste fermé (critère CSV explicite + confirmation Git ls-files)
2. Pour chaque candidat delete :
   a. lifecycle / disposition / lot tag
   b. remplaçant déclaré (CSV evidence) — présence Git
   c. incoming references (CSV + git grep)
   d. couverture fonctionnelle remplaçant vs source
   e. morris_gate_required / risk_level
3. Classifier : superseded-validate-delete | morris-gate-* | keep | investigate
4. Validation Morris par sous-lot (F1a/F1b) ou Critical unitaire (F2)
5. Nettoyage références consommateurs AVANT delete physique
6. Delete physique (manifeste fermé post-décision)
7. Réconciliation CSV (retrait lignes fichiers supprimés)
```

### 5.2 Typologie Lot F appliquée

| Catégorie | Count final | Description |
|-----------|------------:|-------------|
| superseded-validate-delete | 4 | F-001–F-004 — remplaçant Git OK — delete Lot J |
| morris-gate-replacement-missing → **keep** | 1 | F-005 — Option B |
| delete-candidate workspace-audit | 5 | Audits round-2 / global — remplaçants cartography/framing |
| delete-candidate design → **keep** | 1 | Design coverage — blocker résolu Morris |

### 5.3 Contrôles manifeste fermé

| Contrôle | Lot F | Lot H | Lot J |
|----------|------:|------:|------:|
| Lignes CSV = fichiers Git | 5/5 | 40/40 | 10→9 exec |
| Doublons manifeste | 0 | 0 | 0 |
| Absences Git | 0 | 0 | 0 |
| Hors périmètre touché | 0 | 0 | 0 |

**Règle réutilisable :** verdict `MANIFEST VALID` obligatoire avant toute exécution ; écart = STOP.

---

## 6. Validation des remplaçants

### 6.1 Mapping remplaçants F-001 à F-004 (exécuté Lot J)

| ID | Source supprimée | Remplaçant validé |
|----|------------------|-------------------|
| F-001 | `sfia-v1.1-p2-cross-reference-audit.md` | `2026-07-11-sfia-v2.6-repository-standard-principles.md` |
| F-002 | `sfia-foundation-v1.1-consolidation-plan.md` | `2026-07-11-sfia-v2.6-repository-standard-principles.md` |
| F-003 | `documentation-audit.md` | `2026-07-11-sfia-v2.6-repository-cartography.md` |
| F-004 | `documentation-structure-target.md` | `2026-07-11-sfia-v2.6-repository-standard-principles.md` |

### 6.2 Workspace-audit cluster (5 deletes Lot J)

| Source supprimée | Remplaçant / cible référence |
|------------------|------------------------------|
| `sfia-workspace-global-audit.md` | cartography + cleanup-framing |
| `interv360-folder-normalization-audit.md` | cartography |
| Round-2 audit / plan / report (3) | cartography + cleanup-framing |

### 6.3 Critères de validation remplaçant (checklist réutilisable)

1. **Présence Git** du chemin remplaçant (`git ls-files`).
2. **Autorité** ≥ source ou rôle explicitement assumé dans evidence.
3. **Couverture** des sections / décisions encore citées par consommateurs.
4. **Incoming refs** recensées — plan cleanup avant delete.
5. **Gate Morris** si `risk_level = high` ou usage operational divergent.

**Erreur évitée :** supprimer F-005 sur la seule base CSV `superseded` sans remplaçant réel — bloqué par F2 Critical.

---

## 7. Nettoyage des références

### 7.1 Séquence Lot J

1. **Phase références** (~32 consommateurs) : README, consolidation-roadmap, inventaires archive, matrices, read-only-audit, etc.
2. **Phase reclassification** design coverage (CSV seulement — exécution Lot J).
3. **Phase suppressions** 9 fichiers (manifeste fermé).
4. **Phase CSV** — retrait 9 lignes ; métriques dérivées cartography.md.

### 7.2 Principes capitalisés

| Principe | Application F/H/J |
|----------|-------------------|
| Refs **avant** delete | Lot J — ~32 fichiers consommateurs |
| Fichiers **protégés** intouchables | Lot H — routing-guide, prompt-catalog, cycle-execution-template |
| Corrections **déterministes** seulement | Lot H — 3 path/link fixes prouvés |
| Pas de ref sync implicite cross-lot | Lot H n'a pas ouvert Lot J |

### 7.3 Lot H — corrections sans élargissement

| Fichier | Anomalie | Correction |
|---------|----------|------------|
| `bpmn-process-scope-template.md` | chemin bare checklist | chemin complet `docs/practices/process/…` |
| `delivery-qa-test-prompt-family.md` | noms bare standards v2 | chemins complets sous `method/.../sfia-v2/` |
| `penpot-design-agent-prompt-family.md` | profondeur `../../docs/` incorrecte | `../../../docs/tooling/penpot/…` |

**Observation :** aucun consommateur externe au corpus H modifié — corrections locales à faible blast radius.

---

## 8. Usage des manifestes fermés

### 8.1 Définition

Un **manifeste fermé** est une liste exhaustive de fichiers issue d'un **critère CSV unique** (ou décision Morris explicite), confirmée par `git ls-files`, sans élargissement mid-cycle.

### 8.2 Manifestes de la trajectoire

| Lot | Critère extraction | Cardinalité | Fermeture |
|-----|-------------------|------------:|-----------|
| F | `lifecycle_status = superseded` | 5 | Qualification PR #184 |
| H | `migration_lot_candidate = lot-H` | 40 | Cadrage PR #187 |
| J (initial) | `delete-candidate` + `lot-J` | 10 | Cadrage read-only pré-exécution |
| J (exécution) | 9 deletes Morris + 1 keep | 9 | Décision Morris 2026-07-13 |

### 8.3 Règles anti-dérive

- **Interdit :** ajouter un fichier au manifeste sans re-qualification CSV ou GO Morris.
- **Interdit :** delete hors liste fermée post-décision.
- **Obligatoire :** table d'exécution fichier par fichier (cadrage H, exécution H/J).
- **Lot H :** manifeste ≠ sous-ensemble prompts seuls — inclut `docs/templates/`, `method/templates/`, `.gitkeep`, README.

---

## 9. Gestion des fichiers protégés

### 9.1 Lot H — 12 fichiers protégés

| Groupe | Fichiers | Motif |
|--------|----------|-------|
| Hub navigation | `prompts/prompt-catalog.md`, `prompts/templates/README.md` | Spine opérationnelle ; CMP config |
| Template cycle | `sfia-cycle-execution-template.md` | Workflow actif SFIA |
| Templates 01–10 (9 op.) | `prompts/templates/0*.md`, `06`–`10` | Routing guide + delivery pipeline |

**Décision validée :** exclusion par défaut de toute modification en exécution Lot H — **12/12 inchangés** dans le diff PR #188.

### 9.2 Fichiers protégés Lot J

Lot J a **explicitement exclu** : routing-guide, prompt-catalog, cycle-execution-template, assets F/H/J antérieurs.

**Règle réutilisable :** déclarer protected paths **avant** cycle ; STOP si diff touche un protégé sans GO Critical.

---

## 10. Fichiers conservés — F-005 et Design Coverage

### 10.1 F-005 — `current-application-audit.md`

| Champ | Valeur post-trajectoire |
|-------|-------------------------|
| Chemin | `projects/interv360/06-audit-rex/current-application-audit.md` |
| Disposition CSV | `keep` |
| `migration_lot_candidate` | *(vide)* |
| Lot J | **exclu** |
| Rôle | Audit technique Interv360 — référence navigation README |

### 10.2 Design coverage — `sfia-v2-design-coverage-standard.md`

| Champ | Avant Lot J | Après Lot J |
|-------|-------------|-------------|
| `proposed_disposition` | delete-candidate | **keep** |
| `migration_lot_candidate` | lot-J | **(vide)** |
| `morris_gate_required` | yes | **no** |
| Présence Git | oui | **oui** |

**Recommandation :** tout futur cleanup « design / standards » doit traiter ce fichier comme **référence opérationnelle** jusqu'à remplaçant explicite validé.

---

## 11. Règles réutilisables

### 11.1 Gouvernance cycle

| # | Règle |
|---|-------|
| R1 | **Local Git Truth Check** en tête — branche, HEAD, origin/main, working tree |
| R2 | **Une trajectoire Morris** — F→H→J documentée avant exécution parallèle |
| R3 | **Qualification read-only** séparée de **delivery** — PR distinctes si risque |
| R4 | **Critical** justifié — F2 F-005, Lot J delete — jamais implicite |
| R5 | **Review pack full** + **handoff Git required** sur capitalisation et exécutions structurantes |
| R6 | **Pas de commit** sur branche exécution tant que revue Morris non acquise (H, J — pratique observée) |

### 11.2 Rationalization repository

| # | Règle |
|---|-------|
| R7 | Superseded → valider remplaçant **Git-present** avant delete-candidate |
| R8 | Ref cleanup **before** delete — compter consommateurs (~32 pour Lot J) |
| R9 | CSV post-delete = **retrait lignes** fichiers absents — pas de ligne fantôme |
| R10 | Fichier operational + refs actives sans remplaçant = **blocker** manifest delete |
| R11 | `.gitkeep` redondants = **investigate** — pas delete implicite dans lot voisin |
| R12 | Phases internes (H3→H4→H2→H1) dans **un seul cycle Git** si Morris valide |

### 11.3 Périmètre et exclusions

| # | Règle |
|---|-------|
| R13 | Lots G (570) et I (68) — **famille à part** — ne pas mélanger avec cleanup méthode |
| R14 | Ne pas reclassifier CSV pendant cadrage read-only |
| R15 | Rapports d'exécution = photographs — ne pas réécrire rétroactivement sauf addendum |

---

## 12. Erreurs évitées

| Risque | Mitigation appliquée | Preuve |
|--------|---------------------|--------|
| Delete F-005 sans remplaçant | F2 Critical + Option B | `lot-f2-f005-critical-review.md` |
| Delete design coverage operational | Morris 9+1 ; reclass CSV | `lot-j-execution.md` §4 |
| Casse spine prompts | 12 protégés Lot H | `lot-h-execution.md` §9 |
| Delete `.gitkeep` dans Lot J | Hors périmètre explicite | `lot-j-execution.md` §1 |
| Ouverture Lot J avant H | Trajectoire F→H→J | Cadrage H §16 |
| Modification CSV en cadrage H | Hors périmètre respecté | `lot-h-cadrage.md` §4 |
| Lien cassé post-rename D | Lot E E1 préalable (10/10 Lot D) | Plan §8 |
| Interprétation parser links superseded comme ops | Classés snapshots historiques Lot F | Qualification F §5 |
| Promotion v2.6 baseline implicite | Non acquise — documenté chaque cycle | Tous rapports F/H/J |
| Double cycle Git Lot H | 1 cycle unique Morris | Cadrage H §13 |

---

## 13. Recommandations pour les prochains cycles

### 13.1 Suite immédiate (hors périmètre capitalisation)

| Item | Type | Gate |
|------|------|------|
| 5 `.gitkeep` DELETE CANDIDATE (Lot H) | Nettoyage structure | Morris GO suppression |
| `05-validate-pr-readiness.md` hors manifeste H | Alignement index README | Cycle séparé Light |
| Lots G / I | Migration projets / tooling | GO Morris par famille ≤50/PR |

### 13.2 Cycles futurs — pattern recommandé

1. **Cadrage read-only** → manifeste fermé → PR qualification.
2. **Validation** sous-lots si volume ou Critical (modèle F1a/F1b).
3. **Exécution unique** par lot avec phases internes si besoin (modèle H).
4. **Delete cluster** seulement après refs + décision Morris fichier par fichier (modèle J).
5. **Capitalisation** post-merge — actif méthode (présent document).
6. **CSV reconcile** dans PR exécution delete — jamais en capitalisation seule.

### 13.3 Maturité actif

| Niveau | Statut |
|--------|--------|
| Candidate | **oui** — première capitalisation trajectoire F→H→J |
| Tested | partiel — 1 exécution complète sur `main` |
| Validated | **non** — SFIA v2.6 candidate ; Morris n'a pas promu baseline |

---

## 14. Traçabilité PR et rapports sources

| Étape | Rapport | PR | Merge commit (indicatif) |
|-------|---------|-----|--------------------------|
| Lot F qualification | `2026-07-12-sfia-v2.6-lot-f-superseded-qualification.md` | #184 | `997f1ff` |
| F1a/F1b validation | `2026-07-13-sfia-v2.6-lot-f1a-f1b-validation.md` | #185 | — |
| F2 F-005 Critical | `2026-07-13-sfia-v2.6-lot-f2-f005-critical-review.md` | #186 | — |
| Lot H cadrage | `2026-07-13-sfia-v2.6-lot-h-cadrage.md` | #187 | `8267433` |
| Lot H exécution | `2026-07-13-sfia-v2.6-lot-h-execution.md` | #188 | `2a527b5` |
| Lot J exécution | `2026-07-13-sfia-v2.6-lot-j-execution.md` | #189 | `0c29624` |
| **Capitalisation** | *présent document* | — | — |

**Sources méthode consultées :** `08-capitalize-method-asset.md`, `sfia-cycle-execution-template.md`, operating model, routing guide, rules-and-guardrails, cartography.md/csv, migration-lots-plan.

---

## 15. Réserves

| # | Réserve | Bloquante | Qualification |
|---|---------|:---------:|---------------|
| RV1 | 5 `.gitkeep` Lot H non supprimés | non | Décision Morris future |
| RV2 | Lots G (570) et I (68) non traités | non | Hors trajectoire F→H→J |
| RV3 | SFIA v2.6 reste candidate — v2.4 baseline | non | Doctrine inchangée |
| RV4 | Références historiques dans rapports lot-* (photographies) | non | Traçabilité intentionnelle |
| RV5 | `05-validate-pr-readiness.md` listé README templates hors manifeste H | non | Cycle alignement séparé |
| RV6 | Mentions « remplace X » dans archives post-delete | non | Traçabilité archive |

---

## 16. Verdict capitalisation

```
CAPITALIZATION COMPLETE WITH RESERVES
```

**Signification :**

- Trajectoire **Repository Rationalization v2.6 (F → H → J)** documentée comme actif méthode **candidate**.
- Décisions Morris, méthode manifestes, remplaçants, refs, protégés et conservés **capitalisés**.
- Exécution intégrée `main` @ `0c29624` — **9 suppressions**, **0 delete-candidate** résiduel.
- Réserves **non bloquantes** — `.gitkeep`, Lots G/I, maturité baseline.

**Non autorisé par ce document :** nouvelle suppression, modification CSV/cartographie, promotion v2.6 baseline, ouverture Lot G/I.

---

*Capitalisation produite par cycle Cursor — profil Capitalization — aucun commit cycle — SFIA v2.4 baseline — v2.6 candidate.*

---

## Fichier modifié — sections complètes

### §11 Lot H — next gate (modifié)

| **Statut exécution Lot H** | **closed** (PR #188 merged) |
| **Next gate** | — (intégré trajectoire F→H→J) |

### §12 Lot J — statut (modifié)

| Statut | **closed** (PR #189 merged @ `0c29624`) |
| Next gate | — (intégré trajectoire F→H→J) |

### §12.1 Repository Rationalization v2.6 — trajectoire F → H → J (ajouté)

| Champ | Contenu |
|-------|---------|
| **Périmètre** | Lots F, H, J — Lots G et I **exclus** |
| **Statut** | **COMPLETED** |
| **Merge final** | PR #189 — `main` @ `0c29624e4398623c9417ed49e2eb8caa78093b9f` |
| **Suppressions intégrées** | **9** (F-001–F-004 + 5 workspace-audit) |
| **Conservés structurants** | F-005 ; `sfia-v2-design-coverage-standard.md` |
| **CSV post-trajectoire** | 1036 lignes — SHA `3a02dcb2467d84c5a512f22f8895b09f673f1f95a8e8d4393fd39d5ee4897abb` |
| **Rapport capitalisation** | `2026-07-13-sfia-v2.6-repository-rationalization-capitalization.md` |
| **Réserves ouvertes** | 5 `.gitkeep` Lot H (gate Morris future) ; Lots G/I hors périmètre |

### Footer plan (modifié)

*Plan candidate — **Lot 0 closed (76/76)** — **Lot A closed** — **Lot B not required** — **Lot C closed** — **Lot D closed (149/149)** — **D1 closed** — **D2 closed** — **D3 closed** — **Lot E closed (75/75)** — **Lot F closed** (PR #186) — **Lot H closed** (PR #188) — **Lot J closed** (PR #189 — 9 deleted, design coverage retained) — **Repository Rationalization v2.6 (F→H→J) COMPLETED** — capitalisation `2026-07-13-sfia-v2.6-repository-rationalization-capitalization.md` — **Lots G/I excluded** — **Next gate: Lots G/I ou `.gitkeep` Lot H — GO Morris séparé***.*

---

## Review pack content coverage

| Champ | Valeur |
|-------|--------|
| created files full content | yes |
| modified sections complete | yes |
| useful diff included | yes |
| synthesis only | no |
| review pack verdict | complete |

---

## Verdict

**CAPITALIZATION COMPLETE WITH RESERVES**


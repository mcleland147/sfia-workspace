# SFIA Review Pack — Intégration du routage CKC candidat

## Niveau
FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 11:14:35 CEST (+0200) |
| Cycle | Consolidation foundation / méthode (+ Prompt catalog / routage) |
| Profil | Critical |
| Gate consommé | `GO CONSOLIDATION MÉTHODE — INTÉGRATION DU ROUTAGE CKC CANDIDAT` |
| Repo | mcleland147/sfia-workspace |
| Worktree | /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts |
| Branche | `method/sfia-cycle-knowledge-contracts` |
| HEAD avant | `709a2678c28f94f88b3522308d674e224b75fc55` |
| HEAD après | `8258957a18b78734458dd53010a733ec92fab12f` |
| Base | origin/main @ `499c6b3540d8c3fae776736dc3fba29938048bfd` |
| Push branche méthode | **non** |
| UX HEAD | `2888b7e1c8643236c1ecee1fd8f01aa227ddc3cc` **inchangé** |

## Verdict

**CKC CANDIDATE ROUTING INTEGRATED — METHOD VALIDATION REQUIRED**

## Gate suivant candidat

`GO VALIDATION MÉTHODE — CKC CANDIDATE ROUTING` (**non consommé**)

---

## Local Git Truth Check

- 2026-07-23 11:10:25 CEST — HEAD attendu `709a267…` confirmé
- origin/main `499c6b3…` — aucun changement concurrent sur fichiers fondateurs
- UX inchangé ; CKC files présents ; secrets absents ; staged vide
- État final : ahead 8 de origin/main ; seul `.tmp-sfia-review/` untracked

Commits routage :

```
8258957 docs(sfia): document CKC routing experiment
24196b3 docs(sfia): validate candidate CKC routing usage
852a05f docs(sfia): integrate CKC guidance into prompt generation
2279907 docs(sfia): route candidate cycle knowledge contracts
```

---

## Sources consultées

Routing guide · Template · PGE · Knowledge Layer · Operating Model · Validation Checklist · Méthode cycles v2.5 candidate · CKC 00–05 + pilotes · UX 87/88 (lecture WT UX) · handoff `98b79e5…`

---

## Audit des points d'intégration

| Fichier | Rôle actuel | Besoin CKC | Modification | Risque | Verdict |
|---------|-------------|------------|--------------|--------|---------|
| sfia-cycle-routing-guide.md | Résolution références | Résoudre CKC après type | §4.4.5 + anti-patterns | Boucle / encyclopédie | **MODIFY REQUIRED** |
| sfia-cycle-execution-template.md | Contrat Cursor + pre-check | Preuve consultation | §2.0/2.1/2.3/3 | Copie CKC | **MODIFY REQUIRED** |
| sfia-prompt-generation-engine.md | Génération prompt | Étape cognitive | Inputs/outputs/workflow | Moteur autonome | **MODIFY REQUIRED** |
| sfia-knowledge-layer.md | Classification / DRM | Classer CKC | §4 + §6.1.1 | Remplacer routing | **MODIFY REQUIRED** |
| sfia-chatgpt-cursor-operating-model.md | Rôles | Séparer responsabilités | §3.1.1 | Duplication | **MODIFY REQUIRED** |
| sfia-validation-checklist.md | Contrôles | Usage CKC | §3.1.1 proportionné | Bloquer 11 cycles | **MODIFY REQUIRED** |
| sfia-v2.5-project-cycles-method-candidate.md | Réf. 15 types | Lien CKC | §2.1 court | Fausse baseline | **MODIFY REQUIRED** |
| README / 00 / 01 / 02 CKC | Actifs candidats | Tracer routage | MAJ + 04/05 | — | **MODIFY REQUIRED** |
| Pilotes 01–04 | Contenu cognitif | Inchangés | — | — | **NO CHANGE** |
| rules-and-guardrails.md | Doctrine | Pas de responsabilité routage directe | — | — | **REFERENCE ONLY** |
| UX 87/88 | Convergence | Lecture | — | — | **NO CHANGE** |

---

## Chaîne de routage finale

```
intention → type de cycle → CKC candidat si dispo → docs canoniques → template → validation → décision
```

Pilotes 1/2/6/9 : consultation obligatoire candidate.
Autres : carte + méthode v2.6 ; couverture incomplète ; pas d'invention ; pas de blocage auto.

---

## Matrice 15 cycles → CKC

Voir contenu complet `04-cycle-to-ckc-routing-matrix.md` ci-dessous.

---

## Tests documentaires

Voir `05-routing-documentary-tests.md` — Tests 1–6 **PASS**.

---

## Fichiers modifiés / créés (depuis 709a267)

```
M	method/sfia-fast-track/automation/sfia-prompt-generation-engine.md
M	method/sfia-fast-track/checklists/sfia-validation-checklist.md
M	method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
M	method/sfia-fast-track/core/sfia-cycle-routing-guide.md
M	method/sfia-fast-track/core/sfia-knowledge-layer.md
M	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/00-framing-and-architecture.md
M	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/01-canonical-model-template.md
M	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/05-routing-documentary-tests.md
M	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/README.md
M	method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
M	prompts/templates/sfia-cycle-execution-template.md
```

## Diffs complets (depuis 709a267)

```diff
diff --git a/method/sfia-fast-track/automation/sfia-prompt-generation-engine.md b/method/sfia-fast-track/automation/sfia-prompt-generation-engine.md
index a8111d5..80bcefa 100644
--- a/method/sfia-fast-track/automation/sfia-prompt-generation-engine.md
+++ b/method/sfia-fast-track/automation/sfia-prompt-generation-engine.md
@@ -136,6 +136,16 @@ Le Prompt Generation Engine prend en entrée :
 | Validation attendue | GO, GO avec réserves, NO-GO, COMPLETE, etc. |
 | Commit attendu | Message de commit ou règle de commit |
 | Contraintes particulières | Pas de push, pas de PR, pas de Notion sync, etc. |
+| CKC path (si résolu) | Path du pilote ou de la carte synthétique — input **cognitif**, pas d'exécution |
+| CKC statut | `candidate` / `absent` — toujours visible ; **non baseline** |
+| CKC usage | `experimental cognitive guidance` — aucune autorité d'exécution |
+
+**Distinction obligatoire des inputs :**
+
+| Classe | Exemples | Usage |
+|--------|----------|-------|
+| Inputs cognitifs | Intention, CKC, dimensions de maturité | Raisonnement ChatGPT avant prompt |
+| Inputs d'exécution | Périmètre, fichiers, garde-fous, commit | Contrat Cursor uniquement |

 ## 6. Outputs

@@ -154,6 +164,14 @@ Le Prompt Generation Engine produit :
 | Commit attendu | Message ou logique de commit |
 | Résultat attendu | Format du compte rendu demandé |
 | Confirmation de contraintes | No push, no PR, no Notion sync, no forbidden paths |
+| Trace CKC consulté | cycle qualifié · path · statut candidate/absent · fallback · limites |
+
+**Distinction obligatoire des outputs :**
+
+| Classe | Exemples |
+|--------|----------|
+| Outputs du raisonnement | Appréciation maturité, questions, anti-claims (ChatGPT) |
+| Contrat d'exécution final | Prompt Cursor — **sans** confondre CKC et autorisation d'élargissement |

 ## 7. Structure obligatoire d'un prompt SFIA

@@ -243,6 +261,7 @@ Le Prompt Generation Engine suit le workflow suivant :
 2. qualifier le besoin ;
 3. identifier la phase ou le contexte SFIA ;
 4. consulter la Documentation Routing Matrix ;
+4bis. **résoudre le Cycle Knowledge Contract candidat** (routing guide §4.4.5) — pilote si disponible, sinon carte synthétique + fallback méthode v2.6 ; déclarer statut ; **ne pas** élargir le périmètre Cursor via le CKC ;
 5. déterminer les sources de référence ;
 6. déterminer le dossier cible ;
 7. déterminer le type de capitalisation attendu ;
@@ -261,6 +280,8 @@ La génération d'un prompt doit commencer par l'identification du type de cycle

 - `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`

+Puis, **avant** la génération du contrat Cursor, résoudre le CKC candidat (§4.4.5 du routing guide) comme **source cognitive conditionnelle**.
+
 Le type de cycle sélectionné détermine :

 - les références obligatoires ;
@@ -271,6 +292,8 @@ Le type de cycle sélectionné détermine :

 Un prompt généré est **incomplet** s'il ne déclare pas son type de cycle et ses références de routage.

+Un cycle avec CKC pilote disponible est **incomplet côté raisonnement** si la consultation CKC n'est pas déclarée (statut `candidate` visible). L'absence de pilote pour les onze autres cycles n'est **pas** une erreur bloquante si le fallback est déclaré.
+
 ## 9. Typologie des prompts générés

 | Famille de prompt | Usage | Sources principales |
diff --git a/method/sfia-fast-track/checklists/sfia-validation-checklist.md b/method/sfia-fast-track/checklists/sfia-validation-checklist.md
index 4e894c8..5db75dc 100644
--- a/method/sfia-fast-track/checklists/sfia-validation-checklist.md
+++ b/method/sfia-fast-track/checklists/sfia-validation-checklist.md
@@ -81,6 +81,22 @@ Vérifier que le cycle a été correctement routé :
 - [ ] Validation attendue déclarée ;
 - [ ] Décision attendue déclarée.

+#### 3.1.1 Contrôle Cycle Knowledge Contract (candidate — proportionné)
+
+| Contrôle | Pilote (cycles 1, 2, 6, 9) | Autre cycle (fallback) | Sévérité si manquant |
+|----------|---------------------------|------------------------|----------------------|
+| Cycle qualifié | Obligatoire | Obligatoire | Erreur de routage |
+| CKC recherché | Obligatoire | Obligatoire | Erreur de routage |
+| Bon CKC / path chargé | Obligatoire | N/A si absent déclaré | Erreur de routage |
+| Statut `candidate` visible | Obligatoire | N/A ou `absent` déclaré | Claim invalide si « baseline » |
+| Application contextualisée (pas checklist mécanique) | Recommandé | Recommandé (carte légère) | Mauvaise utilisation |
+| Fallback explicite si contrat absent | N/A | Obligatoire | Erreur de routage |
+| Aucune autorité d'exécution attribuée au CKC | Obligatoire | Obligatoire | Claim invalide |
+| Absence de claim baseline / adopted | Obligatoire | Obligatoire | Claim invalide |
+
+**Absence normale de pilote** (onze cycles) ≠ erreur bloquante si fallback déclaré.
+**Inventer un CKC absent** ou **présenter un CKC comme baseline** = non-conformité.
+
 Si un élément de routage manque, le cycle ne peut pas être considéré comme pleinement validé.

 ### 3.2 Contrôle v2.4 — profil, QA et gate Morris
diff --git a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
index 6d99639..cce876d 100644
--- a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
+++ b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
@@ -8,9 +8,9 @@ scope: ChatGPT Cursor operating model

 # SFIA ChatGPT ↔ Cursor Operating Model v1.1

-**Version:** v1.1
-**Status:** Foundation document
-**Updated after:** SFIA foundation v1.1 consolidation
+**Version:** v1.1
+**Status:** Foundation document
+**Updated after:** SFIA foundation v1.1 consolidation
 **Scope:** ChatGPT ↔ Cursor operating model

 ## 1. Objectif
@@ -93,7 +93,18 @@ Il évite que la boucle ChatGPT ↔ Cursor repose sur la mémoire implicite du m

 Règle :

-> type de cycle → documents à lire → template → validation → décision
+> type de cycle → CKC candidat si disponible → documents à lire → template → validation → décision
+
+### 3.1.1 Cycle Knowledge Contracts candidats — responsabilités
+
+| Acteur | Responsabilité CKC |
+|--------|-------------------|
+| **ChatGPT** | Consulte et applique le CKC pour guider son **raisonnement** ; déclare statut `candidate` |
+| **Morris** | Challenge et décide ; seule autorité de promotion / validation |
+| **Cursor** | **Ne consomme pas** le CKC comme autorisation d'élargissement de périmètre |
+| **Prompt Cursor** | Reste l'**unique** contrat d'exécution |
+
+Tout statut candidate doit rester **visible**. Réf. routing guide §4.4.5 ; template §2.0 / §2.1.

 ## 4. Rôles dans la boucle

diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index 6eb9289..681b8dc 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -303,6 +303,7 @@ Deux dimensions **orthogonales** à déclarer dans chaque prompt :
 ```text
 Intention Morris
 → type de cycle (nature du travail)
+→ Cycle Knowledge Contract candidat si disponible (guidance cognitive — §4.4.5)
 → profil SFIA (Light / Standard / Critical / Capitalization)
 → qualification type v2.4 si applicable (INC / EVOL / RUN / CAPA / DOC)
 → références obligatoires (matrice profil → lecture minimale)
@@ -316,6 +317,40 @@ Intention Morris

 **Hors périmètre Cycle 1 :** templates profil (Cycle 2) ; cartographie exhaustive cycles projet ; promotion Prompt Catalog ; relance SFIA 3.0.

+#### 4.4.5 Cycle Knowledge Contracts — candidate routing experiment
+
+> **Expérimentation de routage** — statut **candidate** · **non baseline** · **non adopted** · **aucune autorité d'exécution**.
+> Décision Morris : `GO CONSOLIDATION MÉTHODE — INTÉGRATION DU ROUTAGE CKC CANDIDAT`.
+> Emplacement : `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/`.
+
+**Rôle.** Un Cycle Knowledge Contract (CKC) guide le **raisonnement cognitif** de ChatGPT après qualification du type de cycle et **avant** l'instanciation du prompt Cursor. Il n'autorise pas l'exécution, ne décide pas le cycle, ne valide pas automatiquement la maturité.
+
+**Chaîne cible (complément) :**
+
+```text
+type de cycle
+→ CKC candidat si disponible
+→ documents canoniques à lire
+→ template d'exécution
+→ validation
+→ décision
+```
+
+**Pilotes détaillés disponibles (consommation obligatoire en mode candidate si le cycle est qualifié) :**
+
+| Cycle | Path |
+|-------|------|
+| 1 Cadrage | `…/cycle-knowledge-contracts/pilots/01-cadrage.md` |
+| 2 Conception fonctionnelle | `…/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md` |
+| 6 Architecture technique | `…/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
+| 9 QA / validation | `…/cycle-knowledge-contracts/pilots/04-qa-validation.md` |
+
+**Fallback (onze cycles sans CKC détaillé) :** consulter `…/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` comme guidance légère ; appliquer la méthode SFIA v2.6 existante (template §4 + méthode cycles) ; déclarer la couverture CKC **incomplète** ; **ne pas inventer** un contrat complet ; **ne pas bloquer** le cycle si les sources canoniques suffisent.
+
+**Obligations ChatGPT :** rechercher le CKC ; lire le statut ; déclarer la consultation (template §2.0) ; signaler explicitement `candidate` ; ne pas présenter le CKC comme baseline.
+
+**Séparations :** CKC ≠ routing guide (sélection des références) ≠ template (contrat Cursor) ≠ validation checklist (preuves). Référencer les paths — ne pas recopier les contrats ici.
+
 #### 4.4.4 Matrice profil → contrôles (synthèse)

 | Profil | Lecture doc | Rapport Cursor | Readiness | Post-merge | Morris |
@@ -920,6 +955,9 @@ Référence : `method/sfia-fast-track/automation/sfia-repository-execution-engin
 | Réécriture massive d'un historique | Perte de traçabilité |
 | Appliquer un template méthode à un besoin projet | Résultat trop théorique |
 | Appliquer un template projet à une évolution SFIA | Gouvernance méthode incomplète |
+| Présenter un CKC candidate comme baseline / adopted | Fausse autorité méthode |
+| Inventer un CKC absent pour un cycle non pilote | Guidance fictive |
+| Utiliser un CKC comme autorisation d'exécution Cursor | Contournement du template |

 ## 12. Exemples de routage

diff --git a/method/sfia-fast-track/core/sfia-knowledge-layer.md b/method/sfia-fast-track/core/sfia-knowledge-layer.md
index d03b20f..19ba88c 100644
--- a/method/sfia-fast-track/core/sfia-knowledge-layer.md
+++ b/method/sfia-fast-track/core/sfia-knowledge-layer.md
@@ -8,9 +8,9 @@ scope: knowledge layer

 # SFIA Knowledge Layer v1.1

-**Version:** v1.1
-**Status:** Foundation document
-**Updated after:** SFIA foundation v1.1 consolidation
+**Version:** v1.1
+**Status:** Foundation document
+**Updated after:** SFIA foundation v1.1 consolidation
 **Scope:** Knowledge layer

 ## SFIA v2.6 cartography status
@@ -91,6 +91,7 @@ The repository-first, curated knowledge and human validation principles apply to
 | Foundation | Architecture, pipeline, repository blueprint | `docs/architecture/` |
 | Engineering Principles | Principes d'ingénierie | `docs/foundation/` |
 | Operating Method | Fast Track, Operating Model | `method/sfia-fast-track/` |
+| Operating Method / cognitive guidance (candidate) | Cycle Knowledge Contracts — experimental | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/` |
 | Practice | QA, UX/UI, BPMN, architecture, rôles | `docs/practices/` |
 | Template | PR, cycle, audit, REX | `docs/templates/`, `method/.../templates/` |
 | Prompt | Cadrage, audit, validation, post-merge | `prompts/` |
@@ -168,6 +169,24 @@ Ensemble :

 La Documentation Routing Matrix n'est pas remplacée. Le Cycle Routing Guide la complète en amont de chaque cycle.

+### 6.1.1 Cycle Knowledge Contracts candidats — classification
+
+| Élément | Valeur |
+|---------|--------|
+| Type | Operating Method / **cognitive guidance** |
+| Statut | **candidate** — **non baseline** · **non adopted** · **non official** |
+| Source de vérité | Git |
+| Emplacement actuel | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/` |
+| Consommation | Via **Cycle Routing Guide** §4.4.5 (quoi lire / quand) — pas via cette matrice seule |
+| Promotion future | Décision Morris requise |
+| Destination opérationnelle définitive | **Non décidée** |
+
+| Phase / contexte | Sources à lire | Livrables attendus | Dossier cible | Type de capitalisation | Prompt doit mentionner |
+|------------------|----------------|--------------------|---------------|------------------------|------------------------|
+| Routage CKC candidat (expérimental) | Routing guide §4.4.5, README CKC, pilote ou carte synthétique | Déclaration de consultation CKC ; évolutions CKC si cycle méthode dédié | `…/cycle-knowledge-contracts/` | Capitalisation méthode candidate | Statut candidate ; usage experimental cognitive guidance ; aucune autorité d'exécution |
+
+**Séparation préservée :** Knowledge Layer = où classer et ranger · Routing guide = quoi lire et quand.
+
 ### 6.2 Complément SFIA v2.4 — index méthode unique

 > **Référence consolidation :** `sfia-v2.4-consolidation-operating-efficiency-standard.md` §11–§12.
diff --git a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/00-framing-and-architecture.md b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/00-framing-and-architecture.md
index 3378038..d368ca1 100644
--- a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/00-framing-and-architecture.md
+++ b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/00-framing-and-architecture.md
@@ -207,7 +207,21 @@ Voir rapport final / § décisions (nécessité, nom, structure, emplacement, fo

 ## 11. Gate suivant candidat

-`GO VALIDATION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS`
+`GO VALIDATION MÉTHODE — CKC CANDIDATE ROUTING`
 (ou consolidation si Morris exige réduction du modèle)

 Non consommé ici.
+
+---
+
+## 12. Routage expérimental intégré (post-consolidation)
+
+| Élément | Valeur |
+|---------|--------|
+| Gate consommé | `GO CONSOLIDATION MÉTHODE — INTÉGRATION DU ROUTAGE CKC CANDIDAT` |
+| Points d'entrée | Routing §4.4.5 · Template §2.0/2.1/3 · PGE · Knowledge Layer §6.1.1 · Operating Model §3.1.1 · Validation §3.1.1 |
+| Pilotes couverts | 4 |
+| Fallback | 11 cycles → carte synthétique + méthode v2.6 |
+| Autorité | experimental cognitive guidance — **non baseline** |
+
+Voir [README.md](./README.md) et [04-cycle-to-ckc-routing-matrix.md](./04-cycle-to-ckc-routing-matrix.md).
diff --git a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/01-canonical-model-template.md b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/01-canonical-model-template.md
index 180f662..daf2a5a 100644
--- a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/01-canonical-model-template.md
+++ b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/01-canonical-model-template.md
@@ -142,6 +142,8 @@ Ce que le CKC ne couvre pas.

 3 phrases max : charge CKC → raisonne ; routing → références ; template → Cursor ; UX → surface.

+Consommation expérimentale : routing guide §4.4.5 ; déclaration template §2.0.D ; statut toujours `candidate` ; aucune autorité d'exécution.
+
 ---

 ## Règles d’écriture
@@ -180,3 +182,7 @@ Ce que le CKC ne couvre pas.
 ## Limites
 ## Articulation
 ```
+
+### Consommation (routing experiment)
+
+Après qualification du cycle, résoudre le CKC via routing guide §4.4.5. Déclarer consultation dans le template §2.0.D. Statut toujours `candidate`. Aucune autorité d'exécution.
diff --git a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
index 466a72f..aa57492 100644
--- a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
+++ b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
@@ -33,3 +33,8 @@
 ### Transverses (non cycles cœur)

 FinOps · GreenOps · RGPD · Accessibilité · Performance — **blocs** template §6 ; pas de CKC autonome par défaut (COND dans cycles concernés).
+
+### Routage (candidate)
+
+Consommation : routing guide §4.4.5. Matrice : [04-cycle-to-ckc-routing-matrix.md](./04-cycle-to-ckc-routing-matrix.md).
+Fallback onze cycles sans pilote : **cette carte** + méthode cycles §4 — ne pas inventer de contrat détaillé.
diff --git a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md
new file mode 100644
index 0000000..6844a10
--- /dev/null
+++ b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md
@@ -0,0 +1,29 @@
+# Matrice cycle projet → Cycle Knowledge Contract
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `04-cycle-to-ckc-routing-matrix.md` |
+| **Statut** | `method-candidate` — experimental routing |
+| **Source noms** | Template §4.1 / méthode cycles §3.1 |
+
+> Cycles **projet** uniquement. Ne pas confondre avec cycles méthode/foundation (routing guide §4.1 / §5).
+
+| # | Cycle canonique | Alias / notes | CKC détaillé | Path | Fallback | Statut | Consommation obligatoire (candidate) |
+|---|-----------------|---------------|--------------|------|----------|--------|--------------------------------------|
+| 1 | Cadrage | — | oui | `pilots/01-cadrage.md` | N/A | candidate | **oui** si cycle qualifié |
+| 2 | Conception fonctionnelle | — | oui | `pilots/02-conception-fonctionnelle.md` | N/A | candidate | **oui** |
+| 3 | Architecture fonctionnelle | — | non | — | carte `02-…` + méthode §4.3 | absent détaillé | non — fallback |
+| 4 | UX/UI | Design | non | — | carte + méthode §4.4 | absent détaillé | non — fallback |
+| 5 | Backlog / user stories | — | non | — | carte + méthode §4.5 | absent détaillé | non — fallback |
+| 6 | Architecture technique | — | oui | `pilots/03-architecture-technique.md` | N/A | candidate | **oui** |
+| 7 | Intégration / DevOps | — | non | — | carte + méthode §4.7 | absent détaillé | non — fallback |
+| 8 | Delivery / implémentation | — | non | — | carte + méthode §4.8 | absent détaillé | non — fallback |
+| 9 | QA / validation | — | oui | `pilots/04-qa-validation.md` | N/A | candidate | **oui** |
+| 10 | Sécurité / RSSI | — | non | — | carte + méthode §4.10 | absent détaillé | non — fallback |
+| 11 | Déploiement / release | — | non | — | carte + méthode §4.11 | absent détaillé | non — fallback |
+| 12 | Observabilité / RUN readiness | — | non | — | carte + méthode §4.12 | absent détaillé | non — fallback |
+| 13 | PR readiness | — | non | — | carte + méthode §4.13 | absent détaillé | non — fallback |
+| 14 | Post-merge | — | non | — | carte + méthode §4.14 | absent détaillé | non — fallback |
+| 15 | Capitalisation / REX | — | non | — | carte + méthode §4.15 | absent détaillé | non — fallback |
+
+**Règles fallback :** déclarer couverture incomplète · ne pas inventer de contrat · ne pas bloquer si sources canoniques suffisent · usage = experimental cognitive guidance · autorité = aucune.
diff --git a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/05-routing-documentary-tests.md b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/05-routing-documentary-tests.md
new file mode 100644
index 0000000..c67c377
--- /dev/null
+++ b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/05-routing-documentary-tests.md
@@ -0,0 +1,58 @@
+# Tests documentaires — routage CKC candidat
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `05-routing-documentary-tests.md` |
+| **Statut** | `method-candidate` |
+| **Méthode** | Revue documentaire (pas d'appel OpenAI) |
+
+## Test 1 — Cadrage
+
+| Étape | Attendu | Résultat |
+|-------|---------|----------|
+| Routing guide | §4.4.5 → path `pilots/01-cadrage.md` | PASS |
+| Template | Mini-fiche + fiche exigent déclaration CKC | PASS |
+| PGE | Étape 4bis avant génération | PASS |
+| Validation | §3.1.1 pilote obligatoire + statut candidate | PASS |
+
+## Test 2 — Architecture technique
+
+| Étape | Attendu | Résultat |
+|-------|---------|----------|
+| Routing | Path `pilots/03-architecture-technique.md` | PASS |
+| Template / PGE / checklist | Même chaîne que Test 1 | PASS |
+
+## Test 3 — Cycle sans pilote (ex. Delivery #8)
+
+| Étape | Attendu | Résultat |
+|-------|---------|----------|
+| Recherche | Contrat détaillé absent | PASS |
+| Fallback | Carte synthétique + méthode v2.6 | PASS |
+| Blocage | Aucune erreur bloquante injustifiée | PASS |
+| Invention | Interdite (anti-patterns template/routing) | PASS |
+
+## Test 4 — Mauvais statut (« CKC baseline »)
+
+| Étape | Attendu | Résultat |
+|-------|---------|----------|
+| Checklist §3.1.1 | Claim invalide / non-conformité | PASS |
+| Anti-patterns template & routing | Explicitement listés | PASS |
+
+## Test 5 — Cursor
+
+| Contrôle | Attendu | Résultat |
+|----------|---------|----------|
+| Élargissement scope via CKC | Interdit (OM §3.1.1, PGE, template) | PASS |
+| Décision de cycle par Cursor | Non — CKC hors contrat exécution | PASS |
+| CKC comme prompt d'exécution | Interdit | PASS |
+
+## Test 6 — UX conversationnelle
+
+| Contrôle | Attendu | Résultat |
+|----------|---------|----------|
+| Exposition brute 25 sections CKC en UI | Interdite (template anti-pattern ; framing CKC) | PASS |
+| Docs 87/88 | Non modifiés | PASS |
+
+## Verdict tests
+
+**PASS** — routage candidat cohérent pour arbitrage Morris (validation méthode suivante).
diff --git a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/README.md b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/README.md
index 2888dc4..2a99758 100644
--- a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/README.md
+++ b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/README.md
@@ -2,19 +2,54 @@

 | Métadonnée | Valeur |
 |------------|--------|
-| **Statut** | `method-candidate` — **non baseline** · **non adopted** |
-| **Gate de conception** | `GO CONCEPTION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS` |
-| **Baseline SFIA** | v2.6 |
+| **Statut** | `method-candidate` — **non baseline** · **non adopted** · **non official** |
+| **Usage** | `experimental cognitive guidance` — **aucune autorité d'exécution** |
+| **Gate conception** | `GO CONCEPTION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS` |
+| **Gate routage** | `GO CONSOLIDATION MÉTHODE — INTÉGRATION DU ROUTAGE CKC CANDIDAT` (**consommé**) |
+| **Baseline SFIA** | v2.6 (primauté inchangée) |
 | **Emplacement** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/` |

+## Points d'entrée canoniques de consommation
+
+| Ordre | Document | Rôle |
+|-------|----------|------|
+| 1 | `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.4.5 | Résolution CKC après type de cycle |
+| 2 | `prompts/templates/sfia-cycle-execution-template.md` §2.0 / §2.1 / §3 | Preuve de consultation + fiche |
+| 3 | `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | Application avant génération prompt |
+| 4 | `method/sfia-fast-track/core/sfia-knowledge-layer.md` §6.1.1 | Classification / emplacement |
+| 5 | `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` §3.1.1 | Responsabilités acteurs |
+| 6 | `method/sfia-fast-track/checklists/sfia-validation-checklist.md` §3.1.1 | Contrôles d'usage |
+
+## Ordre de routage
+
+```text
+type de cycle
+→ CKC candidat si disponible
+→ documents canoniques
+→ template
+→ validation
+→ décision
+```
+
+## Couverture
+
+| Couverture | Cycles | Consommation |
+|------------|--------|--------------|
+| Pilotes détaillés | 1 Cadrage · 2 Conception fonctionnelle · 6 Architecture technique · 9 QA/validation | **Obligatoire** en mode candidate si cycle qualifié |
+| Sans pilote | 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15 | Carte synthétique + méthode v2.6 ; couverture **incomplète** déclarée ; **pas d'invention** |
+
+Matrice : [04-cycle-to-ckc-routing-matrix.md](./04-cycle-to-ckc-routing-matrix.md) · Tests : [05-routing-documentary-tests.md](./05-routing-documentary-tests.md)
+
 ## Contenu

 | Fichier | Rôle |
 |---------|------|
-| [00-framing-and-architecture.md](./00-framing-and-architecture.md) | Problème, audit REUSE/EXTEND/CREATE, formats, séparation des objets |
-| [01-canonical-model-template.md](./01-canonical-model-template.md) | Template candidat CKC |
-| [02-fifteen-cycles-synthetic-map.md](./02-fifteen-cycles-synthetic-map.md) | Carte des 15 cycles + priorités CKC |
-| [03-pilot-evaluation-report.md](./03-pilot-evaluation-report.md) | Simulations et anti-checklist |
+| [00-framing-and-architecture.md](./00-framing-and-architecture.md) | Cadrage + audit |
+| [01-canonical-model-template.md](./01-canonical-model-template.md) | Template CKC |
+| [02-fifteen-cycles-synthetic-map.md](./02-fifteen-cycles-synthetic-map.md) | Carte 15 cycles |
+| [03-pilot-evaluation-report.md](./03-pilot-evaluation-report.md) | Évaluation pilotes |
+| [04-cycle-to-ckc-routing-matrix.md](./04-cycle-to-ckc-routing-matrix.md) | Matrice cycle → CKC |
+| [05-routing-documentary-tests.md](./05-routing-documentary-tests.md) | Tests documentaires routage |
 | [pilots/01-cadrage.md](./pilots/01-cadrage.md) | Pilote 1 |
 | [pilots/02-conception-fonctionnelle.md](./pilots/02-conception-fonctionnelle.md) | Pilote 2 |
 | [pilots/03-architecture-technique.md](./pilots/03-architecture-technique.md) | Pilote 3 |
@@ -22,10 +57,12 @@

 ## Anti-claims

-Ces documents ne mettent **pas** à jour la baseline SFIA v2.6.
-Ils ne modifient pas le routing guide, le template d’exécution, ni les rules.
-Ils ne clôturent pas le cycle UX/UI D1 Conversational Convergence.
+- Pas de mise à jour baseline SFIA v2.6.
+- Pas de CKC adopted / validated / official / baseline.
+- Pas « fifteen CKCs complete ».
+- Pas d'autorité d'exécution Cursor via CKC.
+- Pas de clôture du cycle UX/UI D1.

 ## Gate suivant candidat

-`GO VALIDATION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS`
+`GO VALIDATION MÉTHODE — CKC CANDIDATE ROUTING` (**non consommé**)
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
index d28fb15..85e0f40 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
@@ -1,10 +1,10 @@
 # Méthode des cycles projet SFIA v2.5 candidate

-**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
-**Cycle :** SFIA v2.5 candidate — Cycle 2 — méthodologie des cycles projet
-**Version SFIA :** v2.5 **candidate** — non validée comme baseline
-**Baseline :** SFIA v2.4 — Consolidation & Operating Efficiency
-**Références :** `sfia-v2.5-project-plan.md` ; operating model §18.2 ; routing guide §4.4
+**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
+**Cycle :** SFIA v2.5 candidate — Cycle 2 — méthodologie des cycles projet
+**Version SFIA :** v2.5 **candidate** — non validée comme baseline
+**Baseline :** SFIA v2.4 — Consolidation & Operating Efficiency
+**Références :** `sfia-v2.5-project-plan.md` ; operating model §18.2 ; routing guide §4.4
 **Date :** 2026-07-08

 ---
@@ -42,6 +42,21 @@ Ce document complète le Cycle 1 (profils transverses, distinction type/profil).

 > Les profils Light / Standard / Critical / Capitalization sont **transverses** — ils s'appliquent à chaque type de cycle projet selon risque et impact.

+### 2.1 Complément — Cycle Knowledge Contracts (candidate routing)
+
+> **Statut de ce document :** candidate historique absorbée dans l'usage opérationnel des 15 types sous baseline **SFIA v2.6** — **ne constitue pas** une nouvelle baseline.
+> **CKC :** `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/` — **candidate** · experimental cognitive guidance · **non baseline**.
+
+| Couverture | Contenu |
+|------------|---------|
+| Template CKC | `…/01-canonical-model-template.md` |
+| Pilotes détaillés | Cadrage · Conception fonctionnelle · Architecture technique · QA/validation |
+| Onze autres cycles | Carte synthétique `…/02-fifteen-cycles-synthetic-map.md` seulement — **pas** de contrat détaillé inventé |
+| Consommation | Via routing guide §4.4.5 **avant** prompt Cursor |
+| Autorité | Aucune autorité d'exécution |
+
+Ce document §3–§4 reste la référence méthodologique des 15 types ; les CKC **complètent** la posture cognitive sans remplacer ces tableaux.
+
 ---

 ## 3. Cartographie des cycles projet SFIA
diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index 784afe8..b9ce0a9 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -68,7 +68,9 @@ Formaliser la chaîne de sélection avant génération du prompt :

 ```text
 routing guide (sfia-cycle-routing-guide.md)
-→ méthode cycles v2.5 (sfia-v2.5-project-cycles-method-candidate.md)
+→ qualification type de cycle
+→ Cycle Knowledge Contract candidat si disponible (experimental cognitive guidance — non baseline)
+→ méthode cycles (sfia-v2.5-project-cycles-method-candidate.md — référence opérationnelle des 15 types)
 → template d'exécution (prompts/templates/sfia-cycle-execution-template.md)
 → operating model (sfia-chatgpt-cursor-operating-model.md)
 → guardrails (sfia-rules-and-guardrails.md)
@@ -78,6 +80,17 @@ routing guide (sfia-cycle-routing-guide.md)

 Chaque étape alimente la suivante. Le routage ne doit **pas** reposer sur la mémoire conversationnelle implicite.

+**Résolution CKC (après qualification du cycle, avant génération du prompt) :**
+
+1. qualifier le cycle ;
+2. résoudre le CKC candidat (pilote détaillé ou carte synthétique) ;
+3. lire le CKC s'il existe ; déclarer statut `candidate` ;
+4. contextualiser le raisonnement (dimensions / maturité / anti-claims) ;
+5. poursuivre le routage canonique ;
+6. instancier le contrat Cursor.
+
+Le CKC n'est **pas** une autorisation d'exécution et ne remplace pas le routing guide ni ce template.
+
 #### D. Mini-fiche visible avant prompt

 ChatGPT affiche cette mini-fiche **avant** de produire le prompt Cursor :
@@ -93,6 +106,16 @@ Repo-informed pre-check ChatGPT
 - fichiers autorisés :
 - fichiers interdits :
 - gates Morris :
+- Cycle Knowledge Contract :
+  - recherché : oui
+  - cycle qualifié :
+  - contrat trouvé : oui / non
+  - path :
+  - statut : candidate / absent
+  - usage : experimental cognitive guidance
+  - autorité : aucune autorité d'exécution
+  - fallback : [carte synthétique + méthode v2.6 / N/A si pilote trouvé]
+  - limites :
 - niveau review pack recommandé : light / full (obligatoire si rapport Cursor ; hors contrat si opération read-only sans rapport)
 - review handoff Git : required (obligatoire si rapport Cursor) — exception technique local-only documentée uniquement
 - justification handoff :
@@ -132,6 +155,7 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 0. **Repo-informed pre-check** — §2.0 si trigger actif
 1. **Qualifier** la demande — objectif, risque, impact, livrable attendu
 2. **Identifier le type de cycle projet** — cartographie §4 (15 cycles)
+2bis. **Résoudre le Cycle Knowledge Contract candidat** — routing guide §4.4.5 ; lire pilote si disponible ; sinon carte synthétique + fallback méthode v2.6 ; déclarer statut `candidate` / `absent` dans la mini-fiche §2.0.D
 3. **Identifier le profil SFIA** — Light / Standard / Critical / Capitalization
 4. **Justifier le profil** — obligatoire si Critical ; recommandé sinon
 5. **Activer les blocs pertinents** — §6 selon type, risque, transverses
@@ -139,7 +163,7 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 7. **Définir le périmètre Git/documentaire** — fichiers autorisés, interdits, protégés
 8. **Décider review pack** — §7 : pour tout cycle Cursor **produisant un rapport** → **light** ou **full** obligatoire (jamais `none`) ; opération read-only sans rapport Cursor → hors contrat review pack
 9. **Décider Review Handoff Git** — §7.10–§7.11 : pour tout cycle Cursor **produisant un rapport** → **required** + Mode **`publish-in-cycle`** + `Push handoff autorisé = oui — L3 borné` **automatiques** ; `local-only` = exception technique documentée uniquement (§7.10.3) — jamais `not required` pour un rapport Cursor ; combinaison invalide (rapport + none / not required / local-only non conforme) → `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` ; mode contradictoire → `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT`
-10. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite
+10. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite ; le CKC reste hors contrat d'exécution Cursor

 ### 2.2 Nouveau chat et sources projet

@@ -170,6 +194,11 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 - Présenter une candidate non mergée comme baseline validée
 - Présenter une version non mergée comme baseline officielle
 - Relancer SFIA v3.0 sans GO Morris
+- Présenter un Cycle Knowledge Contract candidate comme baseline / adopted / official
+- Considérer le CKC comme autorisation Cursor ou élargissement de périmètre
+- Inventer un CKC absent pour un cycle sans pilote
+- Bloquer un cycle uniquement parce qu'un CKC détaillé n'existe pas (fallback obligatoire)
+- Exposer la structure CKC brute comme questionnaire utilisateur / UI

 ---

@@ -185,6 +214,17 @@ Profondeur si Capitalization :  [Light / Standard / Critical selon portée]
 Justification du profil :       [obligatoire si Critical]
 Typologie v2.4 si utile :       [INC / EVOL / RUN / CAPA / DOC — optionnel]

+Cycle Knowledge Contract :
+  recherché :                   oui
+  cycle qualifié :
+  contrat trouvé :              oui / non
+  path :
+  statut :                      candidate / absent
+  usage :                       experimental cognitive guidance
+  autorité :                    aucune autorité d'exécution
+  fallback :
+  limites :
+
 Branche attendue :
 Base / HEAD attendu :
 Working tree attendu :          [propre / fichiers non trackés listés]
```

---

## Contenu complet — documents CKC routage


===== FULL: cycle-knowledge-contracts/README.md =====

# Cycle Knowledge Contracts (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | `method-candidate` — **non baseline** · **non adopted** · **non official** |
| **Usage** | `experimental cognitive guidance` — **aucune autorité d'exécution** |
| **Gate conception** | `GO CONCEPTION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS` |
| **Gate routage** | `GO CONSOLIDATION MÉTHODE — INTÉGRATION DU ROUTAGE CKC CANDIDAT` (**consommé**) |
| **Baseline SFIA** | v2.6 (primauté inchangée) |
| **Emplacement** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/` |

## Points d'entrée canoniques de consommation

| Ordre | Document | Rôle |
|-------|----------|------|
| 1 | `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.4.5 | Résolution CKC après type de cycle |
| 2 | `prompts/templates/sfia-cycle-execution-template.md` §2.0 / §2.1 / §3 | Preuve de consultation + fiche |
| 3 | `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | Application avant génération prompt |
| 4 | `method/sfia-fast-track/core/sfia-knowledge-layer.md` §6.1.1 | Classification / emplacement |
| 5 | `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` §3.1.1 | Responsabilités acteurs |
| 6 | `method/sfia-fast-track/checklists/sfia-validation-checklist.md` §3.1.1 | Contrôles d'usage |

## Ordre de routage

```text
type de cycle
→ CKC candidat si disponible
→ documents canoniques
→ template
→ validation
→ décision
```

## Couverture

| Couverture | Cycles | Consommation |
|------------|--------|--------------|
| Pilotes détaillés | 1 Cadrage · 2 Conception fonctionnelle · 6 Architecture technique · 9 QA/validation | **Obligatoire** en mode candidate si cycle qualifié |
| Sans pilote | 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15 | Carte synthétique + méthode v2.6 ; couverture **incomplète** déclarée ; **pas d'invention** |

Matrice : [04-cycle-to-ckc-routing-matrix.md](./04-cycle-to-ckc-routing-matrix.md) · Tests : [05-routing-documentary-tests.md](./05-routing-documentary-tests.md)

## Contenu

| Fichier | Rôle |
|---------|------|
| [00-framing-and-architecture.md](./00-framing-and-architecture.md) | Cadrage + audit |
| [01-canonical-model-template.md](./01-canonical-model-template.md) | Template CKC |
| [02-fifteen-cycles-synthetic-map.md](./02-fifteen-cycles-synthetic-map.md) | Carte 15 cycles |
| [03-pilot-evaluation-report.md](./03-pilot-evaluation-report.md) | Évaluation pilotes |
| [04-cycle-to-ckc-routing-matrix.md](./04-cycle-to-ckc-routing-matrix.md) | Matrice cycle → CKC |
| [05-routing-documentary-tests.md](./05-routing-documentary-tests.md) | Tests documentaires routage |
| [pilots/01-cadrage.md](./pilots/01-cadrage.md) | Pilote 1 |
| [pilots/02-conception-fonctionnelle.md](./pilots/02-conception-fonctionnelle.md) | Pilote 2 |
| [pilots/03-architecture-technique.md](./pilots/03-architecture-technique.md) | Pilote 3 |
| [pilots/04-qa-validation.md](./pilots/04-qa-validation.md) | Pilote 4 |

## Anti-claims

- Pas de mise à jour baseline SFIA v2.6.
- Pas de CKC adopted / validated / official / baseline.
- Pas « fifteen CKCs complete ».
- Pas d'autorité d'exécution Cursor via CKC.
- Pas de clôture du cycle UX/UI D1.

## Gate suivant candidat

`GO VALIDATION MÉTHODE — CKC CANDIDATE ROUTING` (**non consommé**)

===== FULL: cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md =====

# Matrice cycle projet → Cycle Knowledge Contract

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `04-cycle-to-ckc-routing-matrix.md` |
| **Statut** | `method-candidate` — experimental routing |
| **Source noms** | Template §4.1 / méthode cycles §3.1 |

> Cycles **projet** uniquement. Ne pas confondre avec cycles méthode/foundation (routing guide §4.1 / §5).

| # | Cycle canonique | Alias / notes | CKC détaillé | Path | Fallback | Statut | Consommation obligatoire (candidate) |
|---|-----------------|---------------|--------------|------|----------|--------|--------------------------------------|
| 1 | Cadrage | — | oui | `pilots/01-cadrage.md` | N/A | candidate | **oui** si cycle qualifié |
| 2 | Conception fonctionnelle | — | oui | `pilots/02-conception-fonctionnelle.md` | N/A | candidate | **oui** |
| 3 | Architecture fonctionnelle | — | non | — | carte `02-…` + méthode §4.3 | absent détaillé | non — fallback |
| 4 | UX/UI | Design | non | — | carte + méthode §4.4 | absent détaillé | non — fallback |
| 5 | Backlog / user stories | — | non | — | carte + méthode §4.5 | absent détaillé | non — fallback |
| 6 | Architecture technique | — | oui | `pilots/03-architecture-technique.md` | N/A | candidate | **oui** |
| 7 | Intégration / DevOps | — | non | — | carte + méthode §4.7 | absent détaillé | non — fallback |
| 8 | Delivery / implémentation | — | non | — | carte + méthode §4.8 | absent détaillé | non — fallback |
| 9 | QA / validation | — | oui | `pilots/04-qa-validation.md` | N/A | candidate | **oui** |
| 10 | Sécurité / RSSI | — | non | — | carte + méthode §4.10 | absent détaillé | non — fallback |
| 11 | Déploiement / release | — | non | — | carte + méthode §4.11 | absent détaillé | non — fallback |
| 12 | Observabilité / RUN readiness | — | non | — | carte + méthode §4.12 | absent détaillé | non — fallback |
| 13 | PR readiness | — | non | — | carte + méthode §4.13 | absent détaillé | non — fallback |
| 14 | Post-merge | — | non | — | carte + méthode §4.14 | absent détaillé | non — fallback |
| 15 | Capitalisation / REX | — | non | — | carte + méthode §4.15 | absent détaillé | non — fallback |

**Règles fallback :** déclarer couverture incomplète · ne pas inventer de contrat · ne pas bloquer si sources canoniques suffisent · usage = experimental cognitive guidance · autorité = aucune.

===== FULL: cycle-knowledge-contracts/05-routing-documentary-tests.md =====

# Tests documentaires — routage CKC candidat

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `05-routing-documentary-tests.md` |
| **Statut** | `method-candidate` |
| **Méthode** | Revue documentaire (pas d'appel OpenAI) |

## Test 1 — Cadrage

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Routing guide | §4.4.5 → path `pilots/01-cadrage.md` | PASS |
| Template | Mini-fiche + fiche exigent déclaration CKC | PASS |
| PGE | Étape 4bis avant génération | PASS |
| Validation | §3.1.1 pilote obligatoire + statut candidate | PASS |

## Test 2 — Architecture technique

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Routing | Path `pilots/03-architecture-technique.md` | PASS |
| Template / PGE / checklist | Même chaîne que Test 1 | PASS |

## Test 3 — Cycle sans pilote (ex. Delivery #8)

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Recherche | Contrat détaillé absent | PASS |
| Fallback | Carte synthétique + méthode v2.6 | PASS |
| Blocage | Aucune erreur bloquante injustifiée | PASS |
| Invention | Interdite (anti-patterns template/routing) | PASS |

## Test 4 — Mauvais statut (« CKC baseline »)

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Checklist §3.1.1 | Claim invalide / non-conformité | PASS |
| Anti-patterns template & routing | Explicitement listés | PASS |

## Test 5 — Cursor

| Contrôle | Attendu | Résultat |
|----------|---------|----------|
| Élargissement scope via CKC | Interdit (OM §3.1.1, PGE, template) | PASS |
| Décision de cycle par Cursor | Non — CKC hors contrat exécution | PASS |
| CKC comme prompt d'exécution | Interdit | PASS |

## Test 6 — UX conversationnelle

| Contrôle | Attendu | Résultat |
|----------|---------|----------|
| Exposition brute 25 sections CKC en UI | Interdite (template anti-pattern ; framing CKC) | PASS |
| Docs 87/88 | Non modifiés | PASS |

## Verdict tests

**PASS** — routage candidat cohérent pour arbitrage Morris (validation méthode suivante).

---

## Risques

- Sur-interprétation « obligatoire » hors pilotes
- Confusion candidate / baseline
- Checklist mécanique si GPT ignore budget questions

## Dette

- Généralisation 15 contrats non faite
- Destination opérationnelle définitive non décidée
- Intégration Studio / UX non livrée

## Réserves

- Méthode cycles reste candidate absorbée (pas nouvelle baseline)
- Expérimentation de routage jusqu'à GO validation

## Décisions Morris (1–12)

1 nom CKC · 2 validation routage · 3 7 points d'intégration · 4 oblig. 4 pilotes · 5 fallback 11 · 6 emplacement futur · 7 généralisation · 8 promotion baseline · 9 version SFIA · 10 validation méthode · 11 PR readiness · 12 reprise UX/UI

## Actions non exécutées

Push méthode · PR · merge · code · UX · baseline · généralisation 15 · L4/L5

## UX inchangé

HEAD `2888b7e…` confirmé.

## Fin review pack FULL

Verdict: CKC CANDIDATE ROUTING INTEGRATED — METHOD VALIDATION REQUIRED

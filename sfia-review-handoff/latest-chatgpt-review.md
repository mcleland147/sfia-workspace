# SFIA Studio — Generic Execution Nora Tool Invocation — Architecture Decision Trace — Review Pack FULL

- **Horodatage** : 2026-10-16T09:00:56+0200 (Europe/Paris)
- **GO Morris** : GENERIC EXECUTION — NORA TOOL INVOCATION ARCHITECTURE DECISION (2026-10-16 ADOPTED TARGET)
- **Cycle** : 6 — Architecture technique · **Profil** : CRITICAL
- **Typologie** : DOC / ARCHITECTURE DECISION TRACE
- **Capacité** : V3-F05 (connexes V3-F11 / V3-F12 / V3-F14)
- **Milestone** : P6 — IN PROGRESS
- **CKC** : ckc:studio:technical-architecture
- **Mutations code Product** : **AUCUNE**
- **Commit Product** : **AUCUN** (ce cycle)
- **Implémentation** : **NON** — cible adoptée seulement

## 1. Verdict

**ARCHITECTURE DECISION CAPTURED**
**DOCUMENTARY CANDIDATE READY FOR CHATGPT CRITICAL REVIEW**

Anti-claims : PRODUCT CODE UPDATED · DELIVERY COMPLETE · PR READY · P6 PASS · READY FOR REAL · RUNTIME V3 ADOPTED · GIT INTEGRATION COMPLETE — **NON**.

## 2. Git Truth initial

| Check | Valeur |
| --- | --- |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` MATCH |
| Documentary WT | `sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` @ `896ff59c` / branch `docs/sfia-studio-generic-execution-nora-tool-invocation-20261016` |
| Runtime :3020 WT | `studio-runtime-main-52f36884` — **non modifié** |
| Contrat WT | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` — review pack only |
| Audit handoff préalable | `121895df` / blob `3ea3725c` |
| Protected path gate | Architecture reference **explicitement autorisée** par ce GO ; Build Doctrine / Roadmap / C1 / P2 / P6 / doctrine v3 / CKC **non touchés** |

## 3. Sources

- Template cycle + routing + guardrails v2.6
- Build Doctrine / Roadmap (lues ; Roadmap **non modifiée**)
- `sfia-studio-generic-execution-review-result-architecture.md` (amendée)
- C1 / P2 / P6 cadrages
- Doctrine v3 30/32/34/35/37
- CKC 06-architecture-technique
- Review Handoff audit completion `121895df`

## 4. Convergence Pre-check

| Item | État |
| --- | --- |
| V3-F05 | Conversation → exécution gouvernée — cible invocation formalisée |
| P6 | IN PROGRESS — pas de PASS |
| Actifs réutilisables | Generic EC · Generalist Surface · Cursor Gateway · Attempt · Evidence · RB · Resolution · Reconciler — **KEEP** |
| Couplages legacy | ACGC docs_write / Artifact admission / M3 taxonomy routers — **sortie progressive** (D-ER-19) |
| Décision Morris | **Option 2 ADOPTED TARGET** 2026-10-16 → D-ER-16…19 |
| Trajectoire sortie | Capture doc → Critical Review → Git integration (+ Roadmap) → Delivery GO → preuves E8–E11 |
| Exit proof (cible) | Nora tool → backend unique → Authorize → Cursor generalist → Result → Nora — sans taxonomy/Artifact admission |
| Gates suivants | ChatGPT Critical Documentary Review · Git integration GO · Delivery GO |
| Implémentation | **NON ADOPTÉE** |

## 5. Décision Morris formalisée (D1–D4 → D-ER-16…19)

| Morris | ID Git | Contenu |
| --- | --- |
| D1 Invocation | **D-ER-16** | Option 2 — outil Nora de sollicitation PREPARE ; un backend ; tool ≠ Attempt |
| D2 Généricité | **D-ER-17** | Pas de taxonomie / docs_write / REQUIRE_ARTIFACT / Deliverable / étape cycle / cycle actif obligatoire ; Project context KEEP ; S8 technique OPEN |
| D3 Autorité | **D-ER-18** | PREPARE ≠ AUTHORIZE ≠ EXECUTE ; HD structurantes ; Conf↔effets ; Pilote authority ; Nora sans permission |
| D4 Sortie legacy | **D-ER-19** | Taxonomies hors parcours ; KEEP backbone ; HARVEST adapters ; pas de delete-by-name |

**Convention d’ID :** suite numérique D-ER après D-ER-15 — **pas** de collision ; historique 2026-09-29 **préservé**.

## 6. Contenu exploitable — amendement §12bis

```markdown
## 12bis. Amendement 2026-10-16 — Nora Tool Invocation Architecture

> **Autorité :** Morris — **ADOPTED TARGET** le **2026-10-16**.
> **Nature :** amendement daté de la présente référence D-ER — **pas** une seconde architecture concurrente.
> **Relation :** **complète** D-ER-01…15 (notamment D-ER-01, D-ER-11, D-ER-13, D-ER-14) ; **ne réécrit pas** les observations ni les décisions historiques du 2026-09-29.
> **Source de validation :** audit CRITICAL + complément Review Handoff `121895df2e146c4c43e9452814dd0b6546561b22` ; sélection explicite Morris de l’**Option 2**.
> **Statut documentaire local :** **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** — amendement **≠** code livré.
> **CURRENT ≠ TARGET :** l’admission conversationnelle CURRENT reste couplée à des discriminants Artifact / `docs_write` / `cursor.docs_write.apply` et exige souvent un cycle actif — **écart d’implémentation**, pas contradiction de la cible adoptée ici.
> **Roadmap :** source d’état vivante **non modifiée** dans le cycle de capture ; **actualisation requise** lors de la future intégration Git gouvernée (état P6 / V3-F05 / sortie legacy admission).

### D-ER-16 — Invocation Nora : outil générique de sollicitation PREPARE (Option 2) · Morris D1

**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)

**Décision :** Nora dispose d’une **capacité générique** de **sollicitation de préparation** d’exécution, exposée comme **outil Nora** (primitives OpenAI appropriées), réutilisant le **backend Product existant**.

**Invariants d’architecture :**

- **Un seul** backend d’admission Product.
- **Une seule** logique de qualification de mission.
- **Une seule** chaîne d’autorisation (Confirmation / HumanDecision / effective authority).
- **Aucun** moteur cognitif ou d’exécution **parallèle**.
- L’outil **ne lance pas** directement un `ExecutionAttempt`.

**Distinctions obligatoires :**

| Couche | Rôle |
| --- | --- |
| TOOL COGNITIF (Nora) | Solliciter / proposer la préparation |
| EXECUTION CONTRACT | WHAT Product inspectable |
| AUTHORITY | Pilote / Studio (HD, Confirmation, materiality) |
| EXECUTION ATTEMPT | Exécution gouvernée post-autorisation |

**Réutilise :** Generic PREPARE / `prepareGenericExecutionContractDraft` (ou successeur équivalent) · Generalist Execution Surface · envelopes de capacité · offer / fingerprint existants.

**Interdit :** second prepare path ; outil Nora avec autorité d’exécuter ; nouvelle taxonomie Product « generic_* ».

**Exit (implémentation future) :** tool Nora → même backend → contrat generalist — sans routeur d’admission taxonomique.

### D-ER-17 — Généricité d’admission · Morris D2

**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)

**Décision :** L’accès à la capacité d’exécution générique **ne dépend pas** de :

- une catégorie métier de tâche ;
- `docs_write` ;
- `cursor.docs_write.apply` ;
- `REQUIRE_ARTIFACT` ;
- un Deliverable ;
- une obligation Artifact ;
- une étape de cycle ;
- la présence **obligatoire** d’un cycle actif.

**Conserve :**

- un **contexte Project suffisamment fiable** comme prérequis d’admission ;
- un cycle existant comme **contexte** possible — **≠** condition universelle d’admission ;
- la **qualification des effets** (capabilities, périmètre, risques, réversibilité, paths protégés) — **≠** catégorisation métier.

**Interdit :**

- créer un **cycle artificiel** uniquement pour accéder à l’outil ;
- inventer un `cycleTypeId` pour débloquer l’admission.

**Cas sans cycle actif (audit S8) :** **ADOPTED TARGET** = admission **non** bloquée par absence de cycle actif. Les **conséquences techniques** (binding Attempt, persistence, projections, recovery) restent **OPEN DESIGN DETAIL** à concevoir et valider **pendant la construction** — **≠** report de l’adoption du principe.

**Frontière Artifact (explicite) :**

- Cet amendement **retire** toute dépendance Artifact à l’**ADMISSION** de l’exécution.
- Il **ne consomme pas** un arbitrage distinct sur les obligations Artifact **conditionnelles** du lifecycle (qualité, Evidence, clôture de cycle).
- « Une exécution peut produire un Artifact » **≠** « Un Artifact est nécessaire pour accéder à une exécution ».

### D-ER-18 — Autorité : PREPARE ≠ AUTHORIZE ≠ EXECUTE · Morris D3

**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)

**Décision :**

- **PREPARE ≠ AUTHORIZE ≠ EXECUTE.**
- **Même** capacité générique pour missions **non structurantes** et **structurantes**.
- Une mission structurante exige les **HumanDecisions** applicables.
- Les **Confirmations** restent liées aux **effets réels** (materiality / ActionPolicy).
- Le **Pilote** conserve l’autorité runtime.
- **Studio** résout et applique l’autorité.
- **Cursor** exécute **dans** le contrat autorisé.
- **Nora** ne s’octroie **aucune** permission.

**Alignement :** D-ER-11 (Claim / Fact / Analysis / Authority) · P2-D-01…04 (Rec≠HD ; SUCCESS≠COMPLETE ; Conf≠HD ; close≠next) — sans promotion doctrine.

### D-ER-19 — Sortie progressive des admissions spécialisées · Morris D4

**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)

**Décision :** Les **taxonomies métier Product** ne doivent plus déterminer le **parcours d’exécution**. Définir une **sortie progressive** des admissions spécialisées (routeurs Artifact / `docs_write` / M3 sealed taxonomy) vers l’admission générique unique.

**Réutiliser (KEEP) :**

- Generic ExecutionContract ;
- Generalist Execution Surface ;
- Cursor Gateway ;
- ExecutionAttempt ;
- Evidence ;
- ReviewBundle ;
- Product Resolution ;
- Reconciler.

**Adapters techniques** (y compris modules historiquement nommés `*DocsWrite*`) : candidats **KEEP / HARVEST / GENERALIZE** selon responsabilité réelle — **aucune suppression par simple correspondance de nom**.

**Conserve actifs :** contrôles techniques fondés sur effets, capacités, périmètres, risques et réversibilité.

**Alignement :** D-ER-01 · D-ER-13 · D-ER-14.

**Condition de sortie (FUTURE PROOF) :** chemin nominal Nora-tool → Generic PREPARE → Authorize → Attempt Cursor generalist → Evidence/Review → Nora — **sans** discriminant taxonomique d’admission et **sans** `REQUIRE_ARTIFACT` comme gate d’outil.

### 12bis.1 Critères de preuve futurs (amendement) — FUTURE PROOF

| ID | Preuve minimale | Statut aujourd’hui |
| --- | --- | --- |
| E8 Nora tool invoke | Tool Agents de sollicitation PREPARE câblé ; **≠** Execute ; même backend Product | **NOT PROVEN** |
| E9 Admission générique | Mission naturelle (doc/code/autre) → Generic PREPARE **sans** Fake discriminant `cursor.docs_write.apply` / taxonomie | **NOT PROVEN** (F05 Human QA échouée) |
| E10 Sans cycle actif | Mission autorisée hors cycle actif — binding technique validé (S8 construction) | **NOT PROVEN** — design ouvert |
| E11 Legacy admission exit | Routeurs taxonomiques hors chemin nominal ; adapters harvestés | **NOT PROVEN** |

**Interdit de déclarer :** READY FOR REAL · correction F05 complète · P6 GLOBAL PASS · runtime v3 ADOPTED.

### 12bis.2 Gates de construction (post-capture)

1. **ChatGPT Critical Documentary Review** de cet amendement.
2. **Intégration Git gouvernée** (GO distinct) — actualiser aussi la **Roadmap** (état vivant).
3. **Delivery GO** distinct pour implémentation Option 2 (tool + admission générique).
4. Preuves déterministes E8–E11 + non-régression autorité / effects protégés.
5. Human QA / REAL uniquement sous GO ultérieurs — **READY FOR REAL = NO** aujourd’hui.

---
```

## 7. Document modifié

| Champ | Valeur |
| --- | --- |
| Path | `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md` |
| Worktree | documentary `docs/sfia-studio-generic-execution-nora-tool-invocation-20261016` |
| Diffstat | 1 file · +160 / −10 |
| Autres fichiers Product | **0** |
| Roadmap actualisation requise | **OUI** — à l’intégration Git future (non faite ici) |

## 8. Diff exact

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md b/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
index 63c14c80..0ec46f6b 100644
--- a/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
+++ b/projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
@@ -7,8 +7,8 @@
 | **Rôle documentaire** | **CURRENT ARCHITECTURE REFERENCE** (cible adoptée + cartographie factuelle du code) |
 | **Chaîne couverte** | `GENERIC EXECUTION → EXECUTION REVIEW → EVIDENCE → NORA → RESULT → PILOT` |
 | **Statut** | **ADOPTED TARGET ARCHITECTURE BY MORRIS** — **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** |
-| **Décisions datées** | **2026-09-29** |
-| **Base main auditée** | `6f47f74dc9b515c4c79624b21772223ba02c76cd` |
+| **Décisions datées** | **2026-09-29** (D-ER-01…15) · **Amendement 2026-10-16** (D-ER-16…19 — Nora Tool Invocation) |
+| **Base main auditée** | `6f47f74dc9b515c4c79624b21772223ba02c76cd` (D-ER-01…15) · amendement ancré sur `896ff59c704bfa76df1da1a51705aaf948c1cf0c` (2026-10-16) |
 | **Qualification épistémique** | Assertions étiquetées : `CURRENT IMPLEMENTED FACT` · `REAL OBSERVATION` · `AUDIT INFERENCE` · `TARGET ARCHITECTURE — ADOPTED BY MORRIS` · `TRANSITIONAL DEBT` · `OPEN DESIGN DETAIL` · `FUTURE PROOF` |
 | **runtime v3** | **NON ADOPTED** |
 | **READY FOR REAL** | **NO** |
@@ -55,9 +55,10 @@ Ce document fixe la **référence d’architecture Product** pour le circuit gé

 | Élément | Qualification |
 | --- | --- |
-| Cible architecturale D-ER-01…15 | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-09-29) |
+| Cible architecturale D-ER-01…15 | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-09-29) — **inchangée** |
+| Amendement Nora Tool Invocation D-ER-16…19 | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16) — **complète** D-ER-01…15 ; **≠** réécriture historique |
 | Intégration Git de ce document | **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** |
-| Implémentation complète de la cible | **NON** — voir matrice CURRENT/TARGET |
+| Implémentation de l’amendement | **NON** — CURRENT ≠ TARGET ; construction sous GO distinct |
 | runtime v3 | **NON ADOPTED** |
 | READY FOR REAL (boucle générique cible) | **NO** |
 | Delivery slicing (lots) | **TBD** — **D-ER-15** |
@@ -162,6 +163,7 @@ La cible adoptée est **un modèle Product générique** + **capabilities/effect
 | NoteLite REAL (scope testé) | Campagne Product REAL | **REAL OBSERVATION** bornée |
 | Capitalisations convergence (NELC #527, docs_write, ContractResult, continuity) | REX documentaire | Contexte / harvest — ne pas sur-réclamer |
 | Décisions Morris D-ER-01…15 (2026-09-29) | Gouvernance architecture | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** |
+| Amendement Morris D-ER-16…19 (2026-10-16) — Nora Tool Invocation Option 2 | Gouvernance architecture (complément) | **TARGET ARCHITECTURE — ADOPTED BY MORRIS** — CURRENT ≠ TARGET |

 **Hiérarchie :** Git/code > REAL borné > audit inference > cible adoptée > open detail. Une cible adoptée **ne remplace pas** un fait d’implémentation manquant.

@@ -445,10 +447,11 @@ Ces tokens décrivent la **surface de contrat Product générique** — **pas**
 12. **runtime v3 reste NON ADOPTED** ; **READY FOR REAL = NO** jusqu’à preuve gouvernée distincte.
 13. **Delivery slicing = TBD**.
 14. **Retirer taxonomies Product** (`docs_write`, `code_write`, `read`, `read_only`, …) **sans** inventer `generic_read|write|code` Product.
+15. **Nora sollicite la préparation** via un **outil générique** (Option 2) — **un** backend Product ; **PREPARE ≠ AUTHORIZE ≠ EXECUTE** (D-ER-16…18 ; amendement 2026-10-16).

 ---

-## 12. Décisions D-ER-01 … D-ER-15 (complètes)
+## 12. Décisions D-ER-01 … D-ER-15 (complètes — historique 2026-09-29)

 > Toutes : **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-09-29), sauf mention d’ancrage CURRENT.

@@ -558,6 +561,142 @@ Toute proposition de lots = décision Morris ultérieure distincte.

 ---

+## 12bis. Amendement 2026-10-16 — Nora Tool Invocation Architecture
+
+> **Autorité :** Morris — **ADOPTED TARGET** le **2026-10-16**.
+> **Nature :** amendement daté de la présente référence D-ER — **pas** une seconde architecture concurrente.
+> **Relation :** **complète** D-ER-01…15 (notamment D-ER-01, D-ER-11, D-ER-13, D-ER-14) ; **ne réécrit pas** les observations ni les décisions historiques du 2026-09-29.
+> **Source de validation :** audit CRITICAL + complément Review Handoff `121895df2e146c4c43e9452814dd0b6546561b22` ; sélection explicite Morris de l’**Option 2**.
+> **Statut documentaire local :** **DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION** — amendement **≠** code livré.
+> **CURRENT ≠ TARGET :** l’admission conversationnelle CURRENT reste couplée à des discriminants Artifact / `docs_write` / `cursor.docs_write.apply` et exige souvent un cycle actif — **écart d’implémentation**, pas contradiction de la cible adoptée ici.
+> **Roadmap :** source d’état vivante **non modifiée** dans le cycle de capture ; **actualisation requise** lors de la future intégration Git gouvernée (état P6 / V3-F05 / sortie legacy admission).
+
+### D-ER-16 — Invocation Nora : outil générique de sollicitation PREPARE (Option 2) · Morris D1
+
+**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)
+
+**Décision :** Nora dispose d’une **capacité générique** de **sollicitation de préparation** d’exécution, exposée comme **outil Nora** (primitives OpenAI appropriées), réutilisant le **backend Product existant**.
+
+**Invariants d’architecture :**
+
+- **Un seul** backend d’admission Product.
+- **Une seule** logique de qualification de mission.
+- **Une seule** chaîne d’autorisation (Confirmation / HumanDecision / effective authority).
+- **Aucun** moteur cognitif ou d’exécution **parallèle**.
+- L’outil **ne lance pas** directement un `ExecutionAttempt`.
+
+**Distinctions obligatoires :**
+
+| Couche | Rôle |
+| --- | --- |
+| TOOL COGNITIF (Nora) | Solliciter / proposer la préparation |
+| EXECUTION CONTRACT | WHAT Product inspectable |
+| AUTHORITY | Pilote / Studio (HD, Confirmation, materiality) |
+| EXECUTION ATTEMPT | Exécution gouvernée post-autorisation |
+
+**Réutilise :** Generic PREPARE / `prepareGenericExecutionContractDraft` (ou successeur équivalent) · Generalist Execution Surface · envelopes de capacité · offer / fingerprint existants.
+
+**Interdit :** second prepare path ; outil Nora avec autorité d’exécuter ; nouvelle taxonomie Product « generic_* ».
+
+**Exit (implémentation future) :** tool Nora → même backend → contrat generalist — sans routeur d’admission taxonomique.
+
+### D-ER-17 — Généricité d’admission · Morris D2
+
+**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)
+
+**Décision :** L’accès à la capacité d’exécution générique **ne dépend pas** de :
+
+- une catégorie métier de tâche ;
+- `docs_write` ;
+- `cursor.docs_write.apply` ;
+- `REQUIRE_ARTIFACT` ;
+- un Deliverable ;
+- une obligation Artifact ;
+- une étape de cycle ;
+- la présence **obligatoire** d’un cycle actif.
+
+**Conserve :**
+
+- un **contexte Project suffisamment fiable** comme prérequis d’admission ;
+- un cycle existant comme **contexte** possible — **≠** condition universelle d’admission ;
+- la **qualification des effets** (capabilities, périmètre, risques, réversibilité, paths protégés) — **≠** catégorisation métier.
+
+**Interdit :**
+
+- créer un **cycle artificiel** uniquement pour accéder à l’outil ;
+- inventer un `cycleTypeId` pour débloquer l’admission.
+
+**Cas sans cycle actif (audit S8) :** **ADOPTED TARGET** = admission **non** bloquée par absence de cycle actif. Les **conséquences techniques** (binding Attempt, persistence, projections, recovery) restent **OPEN DESIGN DETAIL** à concevoir et valider **pendant la construction** — **≠** report de l’adoption du principe.
+
+**Frontière Artifact (explicite) :**
+
+- Cet amendement **retire** toute dépendance Artifact à l’**ADMISSION** de l’exécution.
+- Il **ne consomme pas** un arbitrage distinct sur les obligations Artifact **conditionnelles** du lifecycle (qualité, Evidence, clôture de cycle).
+- « Une exécution peut produire un Artifact » **≠** « Un Artifact est nécessaire pour accéder à une exécution ».
+
+### D-ER-18 — Autorité : PREPARE ≠ AUTHORIZE ≠ EXECUTE · Morris D3
+
+**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)
+
+**Décision :**
+
+- **PREPARE ≠ AUTHORIZE ≠ EXECUTE.**
+- **Même** capacité générique pour missions **non structurantes** et **structurantes**.
+- Une mission structurante exige les **HumanDecisions** applicables.
+- Les **Confirmations** restent liées aux **effets réels** (materiality / ActionPolicy).
+- Le **Pilote** conserve l’autorité runtime.
+- **Studio** résout et applique l’autorité.
+- **Cursor** exécute **dans** le contrat autorisé.
+- **Nora** ne s’octroie **aucune** permission.
+
+**Alignement :** D-ER-11 (Claim / Fact / Analysis / Authority) · P2-D-01…04 (Rec≠HD ; SUCCESS≠COMPLETE ; Conf≠HD ; close≠next) — sans promotion doctrine.
+
+### D-ER-19 — Sortie progressive des admissions spécialisées · Morris D4
+
+**Tag :** **TARGET ARCHITECTURE — ADOPTED BY MORRIS** (2026-10-16)
+
+**Décision :** Les **taxonomies métier Product** ne doivent plus déterminer le **parcours d’exécution**. Définir une **sortie progressive** des admissions spécialisées (routeurs Artifact / `docs_write` / M3 sealed taxonomy) vers l’admission générique unique.
+
+**Réutiliser (KEEP) :**
+
+- Generic ExecutionContract ;
+- Generalist Execution Surface ;
+- Cursor Gateway ;
+- ExecutionAttempt ;
+- Evidence ;
+- ReviewBundle ;
+- Product Resolution ;
+- Reconciler.
+
+**Adapters techniques** (y compris modules historiquement nommés `*DocsWrite*`) : candidats **KEEP / HARVEST / GENERALIZE** selon responsabilité réelle — **aucune suppression par simple correspondance de nom**.
+
+**Conserve actifs :** contrôles techniques fondés sur effets, capacités, périmètres, risques et réversibilité.
+
+**Alignement :** D-ER-01 · D-ER-13 · D-ER-14.
+
+**Condition de sortie (FUTURE PROOF) :** chemin nominal Nora-tool → Generic PREPARE → Authorize → Attempt Cursor generalist → Evidence/Review → Nora — **sans** discriminant taxonomique d’admission et **sans** `REQUIRE_ARTIFACT` comme gate d’outil.
+
+### 12bis.1 Critères de preuve futurs (amendement) — FUTURE PROOF
+
+| ID | Preuve minimale | Statut aujourd’hui |
+| --- | --- | --- |
+| E8 Nora tool invoke | Tool Agents de sollicitation PREPARE câblé ; **≠** Execute ; même backend Product | **NOT PROVEN** |
+| E9 Admission générique | Mission naturelle (doc/code/autre) → Generic PREPARE **sans** Fake discriminant `cursor.docs_write.apply` / taxonomie | **NOT PROVEN** (F05 Human QA échouée) |
+| E10 Sans cycle actif | Mission autorisée hors cycle actif — binding technique validé (S8 construction) | **NOT PROVEN** — design ouvert |
+| E11 Legacy admission exit | Routeurs taxonomiques hors chemin nominal ; adapters harvestés | **NOT PROVEN** |
+
+**Interdit de déclarer :** READY FOR REAL · correction F05 complète · P6 GLOBAL PASS · runtime v3 ADOPTED.
+
+### 12bis.2 Gates de construction (post-capture)
+
+1. **ChatGPT Critical Documentary Review** de cet amendement.
+2. **Intégration Git gouvernée** (GO distinct) — actualiser aussi la **Roadmap** (état vivant).
+3. **Delivery GO** distinct pour implémentation Option 2 (tool + admission générique).
+4. Preuves déterministes E8–E11 + non-régression autorité / effects protégés.
+5. Human QA / REAL uniquement sous GO ultérieurs — **READY FOR REAL = NO** aujourd’hui.
+
+---
+
 ## 13. Modèle Generic Product Execution

 ### 13.1 Définition
@@ -1267,6 +1406,7 @@ Pratiques **rejetées** (TARGET + discipline CURRENT) :
 6. UX exacte Result Surface (composants) — exigence = always explain.
 7. Mapping des anciens EC `docs_write` en reprise (compat window).
 8. **DELIVERY SLICING** (D-ER-15).
+9. **Conséquences techniques du cas sans cycle actif** (D-ER-17 / S8) — principe d’admission adopté ; binding Attempt / persistence / projections / recovery = construction ultérieure.

 ---

@@ -1283,6 +1423,7 @@ Pratiques **rejetées** (TARGET + discipline CURRENT) :
 | E5 Taxonomy retirement | Prepare/Execute nominal sans action Product `cursor.docs_write.apply` |
 | E6 Retention | HOT→PRUNED RM observable ; Evidence availability **non** auto-flip ; Surface explique |
 | E7 Bounded REAL cible | Campagne REAL distincte sous Morris GO — encore **READY FOR REAL = NO** |
+| E8–E11 (amendement 2026-10-16) | Voir §12bis.1 — Nora tool · admission générique · sans cycle · legacy exit |

 ---

@@ -1292,6 +1433,7 @@ Pratiques **rejetées** (TARGET + discipline CURRENT) :

 Dépendances architecturales (ordre de sens, pas de lots) :

+0. Nora tool invocation + admission générique (**D-ER-16…19**, amendement 2026-10-16) — prérequis d’accès Product unique ; **≠** élévation d’autorité Nora
 1. Discipline Claim/Fact/Analysis/Authority (**D-ER-11**) — déjà partiellement ancrée (inclut Review End Of = CLAIM)
 2. Cursor Review End Of exigé via EC + native binding (**D-ER-05**)
 3. VerifiedChangeSet (**D-ER-06**) branché Observation Studio
@@ -1339,6 +1481,9 @@ Ce document et l’adoption D-ER **≠** :
 - introduction de catégories Product `generic_*`
 - Nora Deep Review tools déjà ON
 - VerifiedChangeSet déjà objet Product premier
+- outil Nora PREPARE déjà câblé / F05 corrigé / READY FOR REAL
+- Option 2 **implémentée** (seule la **cible** est adoptée le 2026-10-16)
+- obligations Artifact de lifecycle **supprimées** (arbitrage distinct non consommé)

 ---

@@ -1349,8 +1494,8 @@ Ce document et l’adoption D-ER **≠** :
 | Anchor | Valeur |
 | --- | --- |
 | Document | `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md` |
-| Décisions | D-ER-01 … D-ER-15 @ 2026-09-29 |
-| Base main audit | `6f47f74dc9b515c4c79624b21772223ba02c76cd` |
+| Décisions | D-ER-01 … D-ER-15 @ 2026-09-29 · **D-ER-16 … D-ER-19 @ 2026-10-16** (Nora Tool Invocation / Option 2) |
+| Base main audit | `6f47f74dc9b515c4c79624b21772223ba02c76cd` · amendement ancré `896ff59c` |
 | REAL borné | NoteLite — PAUSED ; NOT_PROVEN preserved ; UI recharge gap |
 | Backbone KEEP | EC generalist · worktree · Report CLAIM · Evidence/RB/CE · Resolution · Reconciler |
 | Dette nommée | docs_write persist/ingest · UI poll 8 · post_execution tools OFF · artifact naming |
@@ -1359,8 +1504,9 @@ Ce document et l’adoption D-ER **≠** :

 | Décision | Statut |
 | --- | --- |
-| Intégration Git de ce document | **PENDING** — Morris GO distinct |
-| Première tranche d’implémentation | **TBD** (pas de slicing adopté) |
+| Intégration Git de ce document (incl. amendement 2026-10-16) | **PENDING** — Morris GO distinct + actualisation Roadmap |
+| Revue critique ChatGPT de l’amendement | **NEXT** — cycle capture |
+| Première tranche d’implémentation Option 2 | **TBD** — Delivery GO distinct (D-ER-15) |
 | Campagne REAL générique | **NOT AUTHORIZED** — READY FOR REAL = NO |
 | runtime v3 | **NON ADOPTED** — ne pas rouvrir ici |

@@ -1498,7 +1644,11 @@ flowchart TD
 | D-ER-13 | Migration without big bang |
 | D-ER-14 | No parallel architecture |
 | D-ER-15 | Delivery slicing TBD |
+| D-ER-16 | Nora tool — sollicitation PREPARE générique (Option 2) · 2026-10-16 |
+| D-ER-17 | Admission générique — hors taxonomie / Artifact / cycle obligatoire |
+| D-ER-18 | PREPARE ≠ AUTHORIZE ≠ EXECUTE — autorité Pilote/Studio |
+| D-ER-19 | Sortie progressive admissions spécialisées |

 ---

-*Fin du document — Architecture de référence Generic Execution / Execution Review / Evidence / Nora / Result / Pilot — ADOPTED TARGET BY MORRIS — DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION — base main `6f47f74d` — 2026-09-29.*
\ No newline at end of file
+*Fin du document — Architecture de référence Generic Execution / Execution Review / Evidence / Nora / Result / Pilot — ADOPTED TARGET BY MORRIS (D-ER-01…15 @ 2026-09-29 ; amendement D-ER-16…19 Nora Tool Invocation @ 2026-10-16) — DOCUMENTARY CANDIDATE PENDING GIT INTEGRATION — base historique `6f47f74d` · ancrage amendement `896ff59c`.*
\ No newline at end of file
```

## 9. Validations (10/10)

1. Fidélité Option 2 Morris — PASS
2. Aucune catégorie métier réintroduite — PASS
3. Aucune dépendance Artifact d’admission — PASS (lifecycle Artifact = arbitrage distinct)
4. Un seul backend Product — PASS
5. Aucune élévation autorité Nora — PASS
6. Missions structurantes / HD — PASS
7. S8 traité honnêtement (principe adopté ; technique OPEN) — PASS
8. Legacy + trajectoire sortie — PASS
9. Historique D-ER-01…15 conservé — PASS
10. Diff limité au document autorisé — PASS

## 10. Réserves

- Amendement **local documentary** — **PENDING GIT INTEGRATION**.
- Construction Option 2 **non démarrée**.
- Conséquences techniques S8 **OPEN DESIGN DETAIL**.
- Schema Generic Review Material / Deep Review tools / delivery slicing (D-ER-04/09/15) **inchangés**.
- F05 Human QA toujours échouée — **aucune preuve de correction**.
- READY FOR REAL = **NO**.

## 11. Dette / Exit

| Dette | Condition de sortie |
| --- | --- |
| Admission taxonomique CURRENT | E9 — natural language → Generic PREPARE |
| Absence tool Nora PREPARE | E8 — tool ≠ Execute |
| Active-cycle gate CURRENT | E10 — S8 construction validée |
| Routeurs M3 / Artifact admission | E11 — hors nominal ; adapters harvestés |

## 12. Gates restants

1. ChatGPT Critical Documentary Review (ce handoff).
2. Morris GO intégration Git (+ Roadmap).
3. Delivery GO Option 2.
4. Preuves E8–E11 + autorité non-régression.
5. Human QA / REAL — GO ultérieurs seulement.

## 13. Fake / Real (trajectoire)

Deterministic backbone **partiel** · F05 Human QA **échouée** · Architecture cible **adoptée** · Correction **non prouvée** · **READY FOR REAL interdit**.

## 14. Git Truth final (pré-handoff publish)

```
origin/main=896ff59c704bfa76df1da1a51705aaf948c1cf0c
documentary_wt_dirty=architecture reference only (uncommitted Product)
runtime_3020=untouched
product_commit=NONE
product_push=NONE
```

## 15. Instruction ChatGPT

Lire depuis Git : `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.

Produire : **SFIA STUDIO — GENERIC EXECUTION MORRIS ARCHITECTURE DECISION CRITICAL DOCUMENTARY REVIEW.**

Vérifier : fidélité Option 2 / D1–D4 ; D-ER-16…19 ; CURRENT≠TARGET ; indépendance Artifact admission ; un backend ; autorité ; S8 honnête ; historique préservé ; diff mono-fichier ; **aucune implémentation** ; **READY FOR REAL = NO**.

# SFIA Review Pack — FULL — CRITICAL

## 00. Identity

| Field | Value |
| --- | --- |
| Timestamp UTC | 2026-10-22T21:01:06Z |
| Cycle | AKG-M4-A / H7–H8 — Formal Architecture Orientation Decision Record |
| Profile | CRITICAL |
| Type | Cycle 6 — Architecture technique · DOC / Architecture / Governance Decision Trace |
| Branch | `analysis/akg-m4a-h7h8-decision-record` |
| HEAD | `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` |
| origin/main | `f44a99b4da84188772b80aca3c9ebe1a3e12617e` |
| PR #604 | OPEN · Draft · head = source HEAD |
| Files | `03` modified · `11` created (local candidates) |
| hash-object `11` | `576ea0b056237e42102b93976bc543bbd75938d5` |
| hash-object `03` (working) | `e8d0f231b98be9696b02b1997584b6e046e0ecfe` |
| Prior T-A06 handoff | commit `91d387e0226d4272c2e66c281cea582afd308094` · blob `e84579ee78bb988003310e3248d9a1826bd79e87` |
| Project commit/push | NONE |
| M4-A | NON CLOSED |
| H7 / H8 | **ADOPTED** (orientation / conditional directive only) |
| H0–H6 | UNCHANGED (not re-arbitrated) |
| Delivery / M5 | NOT GRANTED |
| Runtime v3 | NON ADOPTED |

## 01. Scope

AUTHORIZED: local `03` targeted sync · local Decision Record `11` · Full pack · L3 handoff.
NOT AUTHORIZED: project commit/push/PR · import `05`–`10` · modify `01`/`02`/`04`/`05`–`10` · G0/PRR/TO-BE/Roadmap · runtime/code/tests · REAL · SHADOW ON · dual-write · L1–L6 execution · SC-G3 REBUILD auto · M4-A CLOSED · GO M5 · invent H0–H6 answers.

## 02. Git Review Index

```
 M projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/03-orientations-and-gap-register.md
?? projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/11-m4a-h7-h8-architecture-orientation-decision-record.md
 M .tmp-sfia-review/chatgpt-review.md
```

| Control | Result |
| --- | --- |
| Branch/HEAD/main/PR#604 | **MATCH** |
| T-A01–T-A06 WTs | untouched |
| `git diff --check` on `03` | exit 0 (no WS errors) |
| `git diff --no-index --check` on `11` | no WS errors reported |
| Project files besides `03`/`11` | NONE |
| Prior T-A06 tip preserved in history | `91d387e0…` / `e84579ee…` |

## 03. Texte exact de la décision Pilote

> Pour AKG-M4-A, je retiens comme orientation architecturale SC-G2 avec une option SC-G3 ciblée A06/A10. Pour H8 : instruire SC-G3 au lot L4 si ADAPT ne clarifie pas les responsabilités. Enregistre cela comme mon arbitrage H7/H8 uniquement, sans GO Delivery, sans adoption du runtime v3 et sans clôture automatique M4-A.

## 04. Matrice H0–H8

| ID | Statut |
| --- | --- |
| H0 GO Delivery | **NOT GRANTED** |
| H1 MethodMode | **OPEN / non arbitré** |
| H2 Tool-First REAL no-write | **OPEN / fail-closed préservé** |
| H3 Durable carrier | **OPEN / aucun second moteur d'autorité** |
| H4 Inventaire D1/OPS1 | **REQUIRED BEFORE MIGRATION / volumes UNKNOWN** |
| H5 pathPolicy Attempt | **PARTIAL / à instruire** |
| H6 Réouverture G0 | **NOT AUTHORIZED** ; G0-A/B adoptés |
| **H7** | **ADOPTED — ARCHITECTURAL ORIENTATION ONLY** (SC-G2 + option SC-G3 A06/A10) |
| **H8** | **ADOPTED — CONDITIONAL INVESTIGATION DIRECTIVE** (instruire SC-G3 en L4 si ADAPT insuffisant) |

Seuls H7/H8 = nouveaux arbitrages consommés.

## 05. Diff ciblé registre `03`

```diff
diff --git a/projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/03-orientations-and-gap-register.md b/projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/03-orientations-and-gap-register.md
index 038db728..e8d0f231 100644
--- a/projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/03-orientations-and-gap-register.md
+++ b/projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/03-orientations-and-gap-register.md
@@ -2,11 +2,11 @@

 | Champ | Valeur |
 | --- | --- |
-| Version | **V0.1 — 2026-10-22** |
-| Périmètre GO | **Documentation bornée** et référencement méthodologique uniquement |
-| Autorité | **Orientation confirmée en discussion ≠ décision formelle AKG-M4** |
-| Statut jalon | **AKG-M4 FORMAL START AUTORISÉ — ANALYSE READ-ONLY EN COURS** (GO Morris dans la conversation du 2026-10-22, après merge #603/CI) ; **AKG-M4-A START AUTORISÉ** (GO ultérieur du même jour) ; aucune décision de transformation, migration ou retrait |
-| Base de preuve | `main` `1c2d5ecdac3241ac4ef9d45dea68509f761e2f8b` + PRR et docs canoniques |
+| Version | **V0.2 — 2026-10-22** (H7/H8 Decision Trace ; historique V0.1 conservé ci-dessous) |
+| Périmètre GO | **Documentation bornée** et référencement méthodologique uniquement · **GO Delivery NON ACCORDÉ** |
+| Autorité | Orientations de discussion V0.1 **+** arbitrages Pilote **H7/H8 uniquement** (2026-10-22) — voir [Decision Record `11`](./11-m4a-h7-h8-architecture-orientation-decision-record.md) |
+| Statut jalon | **AKG-M4 FORMAL START AUTORISÉ** · **AKG-M4-A START AUTORISÉ** · **M4 DECIDED — H7/H8 ONLY** · **M4-A NON CLOSED** · aucune exécution L1–L6 · runtime v3 **NON ADOPTED** |
+| Base de preuve | `main` `f44a99b4da84188772b80aca3c9ebe1a3e12617e` (courant) ; branche doc `c48c6a58…` ; handoffs T-A01–T-A06 ; V0.1 citait `1c2d5ecd…` |

 ## 1. Statuts

@@ -14,7 +14,8 @@
 - **VISION PARTAGÉE** : fonctionnement cible formulé et discuté, à préciser en architecture.
 - **CANDIDATE** : hypothèse/étude et classification préliminaire.
 - **CODE VERIFIED / DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP** : qualificatifs factuels par élément, sans sur-claim.
-- **M4 DECIDED** : réservé à un futur arbitrage Morris formel de disposition/architecture détaillée, **aucun à cette version**. **M4 START AUTHORIZED** qualifie uniquement le démarrage de l'analyse.
+- **M4 DECIDED — H7/H8 ONLY** *(V0.2)* : arbitrages Pilote formels **H7** (orientation SC-G2 + option SC-G3 A06/A10) et **H8** (instruction conditionnelle d'étude SC-G3 en L4). **N'adopte pas** l'ensemble des classifications A01–A12. Historique V0.1 : « M4 DECIDED réservé — aucun à cette version » — **supersédé uniquement** pour H7/H8.
+- **M4 START AUTHORIZED** : qualifie le démarrage de l'analyse (inchangé).

 ## 2. Orientations

@@ -34,6 +35,19 @@
 | **OR-12** | Dossier AKG transverse lié à méthode et sources M0–M3 | **GO DOC V0.1 — INTEGRATED VIA PR #603** | Index + routage méthodologique |
 | **OR-13** | **Primauté de la capacité fonctionnelle sur l'implémentation historique** : une dépendance active ne justifie jamais seule KEEP ; étudier extraction, consolidation, remplacement ou **reconstruction saine d'un mécanisme global**, sans refonte gratuite | **ORIENTATION CONFIRMÉE EN DISCUSSION 2026-10-22** | Comparer scénarios de cible/transition, conserver les garanties, ne pas figer la cible par les dépendances AS-IS |

+### 2 bis. Arbitrages Pilote H7 / H8 (2026-10-22) — **M4 DECIDED — H7/H8 ONLY**
+
+| ID | Décision | Statut | Portée / restriction |
+| --- | --- | --- | --- |
+| **H7** | SC-G2 = orientation architecturale de référence pour AKG-M4-A, **avec option SC-G3 ciblée A06/A10** | **ADOPTED — ARCHITECTURAL ORIENTATION ONLY** | ≠ runtime implémenté · ≠ adoption v3 · G0-A/B préservés · no dual-write |
+| **H8** | Au lot L4, **instruire** SC-G3 A06/A10 **si** ADAPT ne clarifie pas suffisamment l'ownership | **ADOPTED — CONDITIONAL INVESTIGATION DIRECTIVE** | ≠ GO REBUILD auto · ≠ remplacement OA · ≠ code/tests · harvest non prérequis d'échec |
+
+**Texte source Pilote (verbatim) :** *« Pour AKG-M4-A, je retiens comme orientation architecturale SC-G2 avec une option SC-G3 ciblée A06/A10. Pour H8 : instruire SC-G3 au lot L4 si ADAPT ne clarifie pas les responsabilités. Enregistre cela comme mon arbitrage H7/H8 uniquement, sans GO Delivery, sans adoption du runtime v3 et sans clôture automatique M4-A. »*
+
+**Décision Record :** [11-m4a-h7-h8-architecture-orientation-decision-record.md](./11-m4a-h7-h8-architecture-orientation-decision-record.md).
+
+**H0–H6 inchangés :** H0 GO Delivery **NOT GRANTED** · H1 MethodMode **OPEN** · H2 Tool-First **OPEN / fail-closed** · H3 Durable carrier **OPEN** · H4 Inventaire volumes **REQUIRED / UNKNOWN** · H5 pathPolicy **PARTIAL** · H6 Réouverture G0 **NOT AUTHORIZED**.
+
 ## 3. Écarts candidats à qualifier avant toute décision M4

 | ID | AS-IS / source | TO-BE | Disposition **candidate** | Preuves / risques à examiner |
@@ -63,15 +77,18 @@ La [Build Doctrine — section A8](../../sfia-studio-convergence-build-doctrine.

 **GO M4-A :** lancement de l'analyse « responsabilités et dépendances runtime » après mise à jour de l'orientation OR-13. **[Cartographie initiale M4-A](04-m4a-runtime-responsibilities-and-transition-assessment.md)**.

-**Couverture actuelle :** 12 actifs, premiers consumers directs et 3 scénarios ; **T-A01–T-A06 OPEN**, analyse transitive/non-régression non close. Les options `REPLACE / REBUILD` sont explicitement ouvertes mais **aucune n'est adoptée**, les dispositions ne valent pas GO d'exécution.
+**Couverture investigations (V0.2) :** six audits **T-A01–T-A06 terminés et acceptés avec réserves** au périmètre documentaire (handoffs Git immuables ; documents `05`–`10` locaux non intégrés à la branche projet). Historique V0.1 : « T-A01–T-A06 OPEN » — **mis à jour**. L'analyse transitive/non-régression et les preuves REAL restent **non closes**. Les options `REPLACE / REBUILD` restent des **candidats gouvernés** (H8 = étude conditionnelle L4, **pas** adoption REBUILD). Les dispositions **ne valent pas** GO d'exécution.
+
+**M4-A NON CLOSED.** Pas de Formal Exit dans ce cycle. Pas de GO Delivery / M5.

 ## 5. Règles d'évolution

 - Enrichir **AS-IS** à partir de Git courant et PRR applicable (pas de deuxième truth documentaire).
-- Amender **TO-BE** uniquement comme proposition tant qu'un arbitrage formel n'est pas consommé.
+- Amender **TO-BE** uniquement comme proposition tant qu'un arbitrage formel n'est pas consommé ; **H7/H8** orientent la trajectoire sans valoir adoption runtime.
 - Tracer le **pourquoi** de chaque choix et ses conséquences dans ce registre.
 - Qualifier les écarts avec la doctrine produit v3, sans l'écraser.
 - Synchroniser la PRR lorsque le comportement réel évolue selon R23/R24.
 - Préserver des gates distincts pour GO M4 formel, lots de rationalisation, déploiement et M5.
+- Préserver les réserves OPEN (REAL, volumes, MethodMode, pathPolicy, A09/A11, etc.) indépendamment de H7/H8 — détail dans le [Decision Record `11`](./11-m4a-h7-h8-architecture-orientation-decision-record.md).

-[Index AKG](../README.md) · [AS-IS](01-current-architecture-as-is.md) · [TO-BE](02-target-architecture-to-be.md) · [Roadmap](../../sfia-studio-convergence-roadmap.md).
+[Index AKG](../README.md) · [AS-IS](01-current-architecture-as-is.md) · [TO-BE](02-target-architecture-to-be.md) · [H7/H8 Decision Record](./11-m4a-h7-h8-architecture-orientation-decision-record.md) · [Roadmap](../../sfia-studio-convergence-roadmap.md).
```

## 06. Registre des réserves (synthèse)

Voir §9 du Decision Record `11` : R-REAL-01, R-TF-01, R-EXCL-01, R-VOL-01, R-MM-01, R-PA-01 (GOVERNED by H8), R-CAR-01, R-CUT-01, R-A09-01, R-A11-01, R-PP-01 (RES-02), R-RS-01 DEFER, R-FS-01, R-DOC-01, R-P0-01.
**RES-01** matrice A01–A12 auditabilité OPEN · **RES-02** pathPolicy dual class OPEN.
Aucune réserve fermée par H7/H8 seuls.

## 07. Statuts ADOPTED / OPEN / DEFER

| Élément | Statut |
| --- | --- |
| H7 / H8 | ADOPTED (scope limité) |
| SC-G2 runtime | NOT implemented / NOT adopted as runtime |
| SC-G3 REBUILD | NOT authorized (study directive only) |
| G0-A/B | ADOPTED (unchanged) |
| M4-A | NON CLOSED |
| T-A01–T-A06 | Accepted with reserves (investigation) · not project-integrated |
| H0–H6 | OPEN / NOT GRANTED / NOT AUTHORIZED as listed |
| REAL / SHADOW / P6 / v3 | NOT PROVEN / OFF / NOT PASSED / NON ADOPTED |

## 08. Validations

| Check | Result |
| --- | --- |
| Décision fidèle verbatim | YES |
| H7/H8 seuls nouveaux arbitrages | YES |
| SC-G2 ≠ runtime | YES |
| H8 ≠ GO REBUILD | YES |
| H0–H6 non élargis | YES |
| G0 inchangé | YES |
| No dual-write / no 2e vérité | YES |
| Réserves OPEN + RES-01/02 | YES |
| T-A01–T-A06 accepted with reserves, not integrated | YES |
| M4-A NON CLOSED | YES |
| No runtime/PRR edits | YES |
| Relative links `03`↔`11` | YES |
| `git status --short` scope | `03` + `11` (+ pack) |

## 09. R23 / R24 / G0 / anti-claims

R23: handoffs = investigation evidence. R24: **NO PRODUCT SEMANTIC IMPACT**. G0-A/B preserved. Anti-claims: no Delivery, no v3 adoption, no M4-A close, no L1–L6, no dual-write, no invented H0–H6.

## 10. Handoff L3

Branch `sfia/review-handoff` · `sfia-review-handoff/latest-chatgpt-review.md`
Prior tip: `91d387e0…` / blob `e84579ee…`
Message: `docs(review-handoff): AKG-M4-A H7-H8 architecture orientation decision record`

## 11. Instruction ChatGPT (§9.1)

> **Instruction ChatGPT obligatoire :**
>
> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
>
> branche : `sfia/review-handoff`
> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
>
> ChatGPT doit vérifier sa cohérence avec le rapport Cursor, notamment :
> - le cycle et le profil ;
> - la branche projet ;
> - le HEAD initial et final ;
> - la base main ;
> - les sources consultées ;
> - les fichiers créés ou modifiés ;
> - le contenu complet des fichiers créés ;
> - les sections complètes modifiées ou le diff utile ;
> - l'identité du contenu avant et après synchronisation, si applicable ;
> - les validations réalisées ;
> - la mergeabilité ou le statut Git attendu ;
> - les risques, réserves et écarts ;
> - les décisions Morris ;
> - le verdict du review pack ;
> - le commit et la vérification distante du handoff.
>
> **Après cette vérification**, ChatGPT doit produire une **synthèse globale du cycle** à destination de Morris comprenant **au minimum** :
> 1. l'objectif et le périmètre du cycle ;
> 2. les actions et changements réellement réalisés ;
> 3. les principaux résultats et validations ;
> 4. les risques, réserves, écarts ou éléments non couverts ;
> 5. la distinction entre observations, recommandations et décisions déjà validées ;
> 6. le verdict ChatGPT ;
> 7. la prochaine décision ou action attendue de Morris.
>
> La synthèse doit être compréhensible sans devoir relire l'intégralité du rapport Cursor ou du review pack, tout en restant fidèle au contenu du handoff Git.
>
> Elle ne doit **pas** transformer une recommandation, une hypothèse ou un résultat technique en décision validée sans GO Morris.

Perform: **CHATGPT CRITICAL REVIEW — AKG-M4-A / H7-H8 DOCUMENTARY DECISION RECORD**.

Verify: H7/H8 only new arbitrations; SC-G2 orientation ≠ runtime; H8 conditional study ≠ REBUILD GO; H0–H6 unchanged; reserves OPEN + RES-01/02; M4-A NON CLOSED; no Delivery; fidelity to Pilote verbatim.

Optional prior: T-A06 `91d387e0…`.

## 12. Verdict target

READY FOR CHATGPT CRITICAL REVIEW — AKG-M4-A / H7-H8 DOCUMENTARY DECISION RECORD LOCAL CANDIDATE

---

## 13. Full Decision Record `11` (verbatim)

# AKG-M4-A / H7–H8 — Architecture Orientation Decision Record

| Champ | Valeur |
| --- | --- |
| Méthode | SFIA v2.6 · Cycle 6 — Architecture technique · Profil **Critical** |
| Typologie | DOC / Architecture / Governance Decision Trace |
| Jalon / Lot | AKG-M4 · M4-A |
| Objet | Formalisation des arbitrages Pilote **H7** et **H8** uniquement |
| Worktree | `analysis/akg-m4a-h7h8-decision-record` |
| Source HEAD | `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` |
| Review Pack | **FULL** · Handoff Git **REQUIRED** · publish-in-cycle |
| GO Delivery / M5 | **NON ACCORDÉ** |
| Statut document | **LOCAL CANDIDATE** jusqu'à intégration Git projet autorisée |
| Statut jalon M4-A | **NON CLOSED** |

> **Non-claims :** runtime v3 **NON ADOPTED** · SC-G2 = orientation architecturale **≠** runtime implémenté · H8 ≠ GO REBUILD · H0–H6 **non tranchés** par ce cycle · pas de dual-write · REAL **NOT PROVEN** · FinOps SHADOW **OFF** · P6 GLOBAL **NOT PASSED** · aucune classification A01–A12 adoptée en bloc · R24 **NO PRODUCT SEMANTIC IMPACT**.

---

## 1. Identity / Git baseline

### 1.1 Local Git Truth Check

| Référence | Attendu (revue T-A06) | Observé | Statut |
| --- | --- | --- | --- |
| `origin/main` | `f44a99b4da84188772b80aca3c9ebe1a3e12617e` | `f44a99b4…` | **MATCH** |
| Branche documentaire | `docs/akg-m4a-capability-first-rationalization` | HEAD `c48c6a58…` | **MATCH** |
| Source HEAD | `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` | `c48c6a58…` | **MATCH** |
| PR #604 | Draft OPEN | OPEN · isDraft true · head = source | **MATCH** |
| Tip handoff pré-cycle | T-A06 `91d387e0…` / blob `e84579ee…` | confirmé | **MATCH** |

Worktrees T-A01…T-A06 **non modifiés**. Branche d'analyse : `analysis/akg-m4a-h7h8-decision-record`.

### 1.2 Qualification décisionnelle

| Élément | Valeur |
| --- | --- |
| Autorité | **Pilote** — décision explicite du **2026-10-22** |
| Consommation | **H7** et **H8** uniquement — **deux seuls nouveaux arbitrages** de cette séquence |
| Portée | Orientation architecturale / directive d'instruction conditionnelle |
| Hors portée | GO Delivery · lots L1–L6 exécutés · adoption runtime · clôture M4-A · intégration Git projet |

---

## 2. Source verbatim de la décision Pilote

> Pour AKG-M4-A, je retiens comme orientation architecturale SC-G2 avec une option SC-G3 ciblée A06/A10. Pour H8 : instruire SC-G3 au lot L4 si ADAPT ne clarifie pas les responsabilités. Enregistre cela comme mon arbitrage H7/H8 uniquement, sans GO Delivery, sans adoption du runtime v3 et sans clôture automatique M4-A.

Cette déclaration constitue l'**autorité humaine** de ce cycle. **Aucun nouvel arbitrage H7/H8 n'est sollicité.**

---

## 3. Autorité et qualification décisionnelle

| Decision ID | Statut décisionnel | Nature |
| --- | --- | --- |
| **H7** | **ADOPTED — ARCHITECTURAL ORIENTATION ONLY** | Orientation de référence SC-G2 + option SC-G3 ciblée A06/A10 |
| **H8** | **ADOPTED — CONDITIONAL INVESTIGATION DIRECTIVE** | Instruction d'instruire SC-G3 en L4 si ADAPT insuffisant |

**M4 DECIDED — H7/H8 ONLY.** Cela **n'adopte pas** l'ensemble des classifications A01–A12, ni les migrations, retraits, séquences d'implémentation ou preuves associées.

T-A06 a reçu le verdict ChatGPT `T-A06 ACCEPTED WITH RESERVES`. Les handoffs T-A01…T-A06 sont des **preuves d'investigation**, pas des architectures adoptées.

---

## 4. H7 ADOPTED — portée et restrictions

### 4.1 Décision

**SC-G2 est retenu comme orientation architecturale de référence pour AKG-M4-A, avec une option SC-G3 ciblée sur A06/A10.**

### 4.2 Portée (ce que H7 autorise conceptuellement)

- Conserver le backbone OA et les décisions **G0-A/B**.
- Converger vers un cockpit unique `/studio`.
- Préserver les capacités utiles D1/OPS1 par harvest, adaptation ou remplacement pertinent.
- Ne pas pérenniser les moteurs historiques concurrents.
- Conserver les invariants HumanDecision / ExecutionContract / Attempt / Evidence.
- Maintenir Nora Memory B distincte de Truth C.
- Maintenir Synthesis comme projection non autoritative.
- Ne pas introduire de dual-write.

### 4.3 Restrictions (ce que H7 n'autorise pas)

| Interdit | Clarification |
| --- | --- |
| Runtime SC-G2 « déjà implémenté » | Orientation ≠ code livré |
| Adoption runtime v3 | Explicite dans la déclaration Pilote |
| GO Delivery / exécution L1–L6 | **NOT GRANTED** (H0) |
| Clôture automatique M4-A | **NON CLOSED** |
| Adoption en bloc A01–A12 | Classifications restent candidates jusqu'à gates |
| Dual-write D1/OA | Interdit |
| Réouverture G0 | Voir H6 — **NOT AUTHORIZED** |

---

## 5. H8 ADOPTED — condition d'instruction L4

### 5.1 Décision

**Au lot L4, instruire une reconstruction ciblée SC-G3 des responsabilités A06/A10 si la solution ADAPT ne permet pas de clarifier suffisamment l'ownership.**

### 5.2 Condition d'ouverture — critères ADAPT

La solution ADAPT proposée doit être évaluée sur sa capacité à établir :

1. Une responsabilité d'orchestration claire.
2. L'absence de duplication permanente des chemins SHE/historique.
3. Des frontières explicites Nora / PA / OA.
4. Une continuité de mission fiable sans invention d'autorité.
5. Des contrats publics stables et des parcours compréhensibles.
6. Des garanties STOP/FAIL/restart conservées.
7. Un niveau de dette et de complexité résiduelle acceptable.

Si ces conditions ne sont **pas** suffisamment satisfaites, **SC-G3 ciblé doit être instruit comme alternative architecturale**.

### 5.3 Restrictions H8

| Interdit / limite | Clarification |
| --- | --- |
| REBUILD automatique | H8 **n'autorise pas** automatiquement un REBUILD |
| Remplacement OA | **Interdit** |
| Seconde orchestration Product | **Interdite** |
| Code / tests | **Non autorisés** par H8 |
| Arbitrage d'implémentation L4 | **Distinct** de H8 (étude ≠ GO d'exécution) |
| Dépendance à l'échec harvest | Ouverture SC-G3 **n'exige pas** que harvest D1/OPS1 échoue |

---

## 6. Responsabilités A06 / A10

| Actif | Rôle | Portée H7/H8 |
| --- | --- | --- |
| **A06** Project Assistant | Orchestration F2/W2/SHE, variantes historiques, frontières Nora/OA | Sous SC-G2 : ADAPT/CONSOLIDATE prioritaire ; sous H8 : SC-G3 ciblé **si** ADAPT insuffisant en L4 |
| **A10** Carriers | Proposal / Pending PREPARE et continuité de mission | Idem ; continuité sans second moteur d'autorité (voir H3 OPEN) |

H7/H8 **ne ferment pas** la réserve d'ownership PA ni la continuité process-local : ils **gouvernent** comment L4 doit les traiter.

---

## 7. H0–H6 explicitement inchangés

| ID | Sujet | Statut **conservé** |
| --- | --- | --- |
| **H0** | GO Delivery | **NOT GRANTED** |
| **H1** | MethodMode | **OPEN / non arbitré** |
| **H2** | Tool-First REAL no-write | **OPEN / fail-closed préservé** |
| **H3** | Durable carrier | **OPEN / aucun second moteur d'autorité** |
| **H4** | Inventaire D1/OPS1 | **REQUIRED BEFORE MIGRATION / volumes UNKNOWN** |
| **H5** | pathPolicy Attempt | **PARTIAL / à instruire** |
| **H6** | Réouverture G0 | **NOT AUTHORIZED** ; G0-A/B restent adoptés |
| **H7** | Orientation SC-G* | **ADOPTED — SC-G2 + option SC-G3 A06/A10** |
| **H8** | Étude SC-G3 L4 | **ADOPTED — instruction conditionnelle** |

Les recommandations candidates de T-A06 sur H0–H6 **ne sont pas** transformées en arbitrages humains.

---

## 8. Cohérence G0 / OR-13 / R23 / R24

| Référentiel | Application |
| --- | --- |
| **G0-A/B** | Inchangés ; OA Native + Product sqlite ; harvest OPS1 ; no dual-write |
| **OR-13** | Capacités/garanties > implémentations historiques **ou récentes** ; H7/H8 restent compatibles |
| **R23** | Preuves primaires pour AS-IS ; handoffs = investigation avec réserves |
| **R24** | **NO PRODUCT SEMANTIC IMPACT** — formalisation documentaire uniquement |

Choisir une **orientation de conception** ≠ **démontrer** qu'elle est implémentable de manière sûre.

---

## 9. Registre des réserves gouvernées

*Aucune réserve fermée du seul fait de H7/H8. Aucun owner formel inventé.*

| ID | Description | Source | Owner | Classe | État | Impact | Condition de résolution | Décision humaine |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **R-REAL-01** | Product REAL E2E non prouvé | T-A01–T-A06 / PRR | — | **BLOCKER REAL PROOF** | OPEN | Delivery REAL / P6 | Preuves REAL + GO distinct | Gate REAL |
| **R-TF-01** | Tool-First REAL no-write | T-A05/T-A06 · H2 | — | OPEN (gate R2 fail-closed) | OPEN | Delivery si claim sandbox | Architecture sandbox ou claim retiré | **H2** |
| **R-EXCL-01** | Product REAL exclusif | T-A05/T-A06 | — | NOT PROVEN | OPEN | Retrait OPS1 | Exclusivity prouvée + GO | H0 + preuves |
| **R-VOL-01** | D1/OPS1 volumes UNKNOWN | T-A04/T-A05 · H4 | — | **BLOCKER DELIVERY MIGRATION** | OPEN | L2/MIG-A | Inventaire avant migrate | **H4** |
| **R-MM-01** | MethodMode | T-A05 · H1 | — | OPEN | OPEN | Sémantique MIG-A | Arbitrage import/abandon | **H1** |
| **R-PA-01** | PA dual-path / ownership | T-A01/T-A03/T-A06 | — | Structurant H8/L4 | **GOVERNED** (par H8) | L4 | ADAPT critères §5.2 ou instruire SC-G3 | Éval L4 (≠ GO REBUILD) |
| **R-CAR-01** | Carriers process-local | T-A03/T-A06 · H3 | — | Continuité partielle | OPEN | Restart / UX | Requalify/HD11 ou GO carrier | **H3** |
| **R-CUT-01** | D1 writers/readers cutover | T-A05/T-A06 | — | Protocole sécurisé requis | OPEN | L2 | Pattern sans dual-write + gates | H0 + design L2 |
| **R-A09-01** | A09 retirement (type + optional sqlite + consumers/tests) | T-A05 CORR-03 | — | Gate retrait D1 | OPEN | L1 avant L2 | Gate A09 PASS | — |
| **R-A11-01** | A11 retirement (FinOps/shadow/scripts/tests ; SHADOW OFF) | T-A05 CORR-03 | — | Gate FREEZE/retire | OPEN | L6 | Consumers cleared ; SHADOW OFF | FinOps GO séparé |
| **R-PP-01** | pathPolicy Product Attempt PARTIAL | T-A05/T-A06 · H5 · **RES-02** | — | FOLLOW-UP HARDENING **et/ou** **BLOCKER DELIVERY L3** | OPEN | Arbitrage vs L3 | Qualification duale RES-02 | **H5** |
| **R-RS-01** | RunState cross-restart | T-A03/T-A06 | — | FOLLOW-UP | **DEFER** | Continuité | Instruire hors cutover critique | — |
| **R-FS-01** | FS/SQLite Evidence non atomique | T-A04/T-A06 | — | Cohérence/reprise | OPEN | Recovery | Instruire atomicité/limites | — |
| **R-DOC-01** | PRR06 / Synthesis authority class | T-A06 | — | **DOC DRIFT** | OPEN | Doc | Régularisation PRR | — |
| **R-P0-01** | P0 bookmarks/links UNKNOWN | T-A05/T-A06 | — | UNKNOWN | OPEN | L5 redirect | Inventaire liens | — |

---

## 10. RES-01 / RES-02 ChatGPT (T-A06)

### RES-01 — Auditabilité de la matrice A01–A12

La matrice T-A06 contient principalement des **niveaux de confiance** dans la colonne « Preuves ».

**Action recommandée** (consolidation documentaire future, **non exécutée** ici) : ajouter une traçabilité explicite par actif vers code, tests, PRR et handoffs immuables, **sans falsifier** les degrés de preuve.

**État :** OPEN · GOVERNED as documentation follow-up · **non résolu** par H7/H8.

### RES-02 — Portée du risque pathPolicy

Qualifier `pathPolicy Attempt PARTIAL` selon ses conséquences :

- **FOLLOW-UP HARDENING** au périmètre d'arbitrage architectural.
- **BLOCKER DELIVERY L3** si l'enforcement requis pour la trajectoire retenue n'est pas démontré.

**État :** OPEN · lié **R-PP-01** / **H5** · **non résolu** par H7/H8.

---

## 11. Impacts sur les lots L1–L6

| Lot | Impact H7/H8 | Autorisation d'exécution |
| --- | --- | --- |
| L1 Audit port A09 | Inchangé ; prérequis cutover | **NOT AUTHORIZED** (H0) |
| L2 Intake→OA | Sous orientation SC-G2 ; cutover sécurisé | **NOT AUTHORIZED** |
| L3 Harvest OPS1→Product | SC-G2 ; exclusivity + pathPolicy | **NOT AUTHORIZED** |
| **L4** Continuity / PA | **H8** : instruire SC-G3 A06/A10 **si** ADAPT insuffisant | Étude conditionnelle ≠ GO REBUILD ; exécution **NOT AUTHORIZED** |
| L5 Cockpit `/studio` | Aligné H7 cockpit unique | **NOT AUTHORIZED** |
| L6 Archive / FREEZE A11 | Sous SC-G2 ; SHADOW OFF | **NOT AUTHORIZED** |

---

## 12. Conditions de poursuite M4-A

M4-A peut poursuivre une **consolidation documentaire** et préparer une **Formal Exit** ultérieure **sans** les exécuter dans ce cycle, sous réserve que :

1. H7/H8 restent le seul périmètre décisionnel consommé ici.
2. H0–H6 et réserves OPEN restent visibles.
3. Aucune exécution L1–L6 sans GO Delivery.
4. Documents `05`–`10` ne sont pas intégrés implicitement.
5. **M4-A NON CLOSED** jusqu'à Formal Exit autorisée.

---

## 13. Actions documentaires restantes

| Action | Statut ce cycle |
| --- | --- |
| Decision Record `11` | **Créé** (local candidate) |
| Sync registre `03` | **Modifié** (local candidate) |
| Traçabilité A01–A12 (RES-01) | **À faire** en consolidation |
| Qualification duale pathPolicy (RES-02) | **À faire** / liée H5 |
| Import Git `05`–`10` | **NON** — hors scope ; handoffs seulement |
| Formal Exit M4-A | **NON** exécutée |
| Amendement TO-BE `02` / PRR / G0 / Roadmap | **NON** |

---

## 14. Non-claims et statut Git

- Pas de commit/push/PR/merge **projet**.
- Pas de modification `01`, `02`, `04`, `05`–`10`.
- Pas de code, tests, migrations, API, routes, DB.
- Pas de Cursor REAL · SHADOW ON · dual-write · P6 GLOBAL PASS · M4-A CLOSED · GO M5.
- Fichiers locaux : `11` (nouveau) · `03` (diff ciblé) · Review Pack temporaire.

---

## 15. Traçabilité des handoffs T-A01–T-A06

| Audit | Commit handoff | Note |
| --- | --- | --- |
| T-A01 | `42de13a95c9ca4b103c9192147a4511f4f1df1dd` | Accepted with reserves (investigation) |
| T-A02 | `510210231ee3ee82647a2e53b21643e536a677e1` | idem |
| T-A03 | `640f19c1ab9d0952ae877bc5328f6705f77a9474` | idem (SHA corrigé vs typo `…d77a…` du prompt) |
| T-A04 | `6717d0948c2aace3b058a93dcb305e13f60ad801` | idem |
| T-A05 | `1e1930d0e7079403ac9a34b5f3b99f9dd1ddb3cd` | idem |
| **T-A06** | `91d387e0226d4272c2e66c281cea582afd308094` · blob `e84579ee78bb988003310e3248d9a1826bd79e87` | ChatGPT : **T-A06 ACCEPTED WITH RESERVES** |

Chemin commun : `sfia-review-handoff/latest-chatgpt-review.md`.

Six investigations **terminées et acceptées avec réserves** au périmètre documentaire ; **non intégrées** à la branche projet.

---

*Fin du Decision Record `11` — AKG-M4-A / H7–H8 — LOCAL CANDIDATE — M4-A NON CLOSED.*


---

## 14. Contenu final registre `03` (verbatim — cohérence)

# AKG-M4 — 03 · Registre des orientations et écarts

| Champ | Valeur |
| --- | --- |
| Version | **V0.2 — 2026-10-22** (H7/H8 Decision Trace ; historique V0.1 conservé ci-dessous) |
| Périmètre GO | **Documentation bornée** et référencement méthodologique uniquement · **GO Delivery NON ACCORDÉ** |
| Autorité | Orientations de discussion V0.1 **+** arbitrages Pilote **H7/H8 uniquement** (2026-10-22) — voir [Decision Record `11`](./11-m4a-h7-h8-architecture-orientation-decision-record.md) |
| Statut jalon | **AKG-M4 FORMAL START AUTORISÉ** · **AKG-M4-A START AUTORISÉ** · **M4 DECIDED — H7/H8 ONLY** · **M4-A NON CLOSED** · aucune exécution L1–L6 · runtime v3 **NON ADOPTED** |
| Base de preuve | `main` `f44a99b4da84188772b80aca3c9ebe1a3e12617e` (courant) ; branche doc `c48c6a58…` ; handoffs T-A01–T-A06 ; V0.1 citait `1c2d5ecd…` |

## 1. Statuts

- **CONFIRMÉE EN DISCUSSION** : orientation explicitement acceptée le 2026-10-22 ; pas d'implémentation ni adoption de lot.
- **VISION PARTAGÉE** : fonctionnement cible formulé et discuté, à préciser en architecture.
- **CANDIDATE** : hypothèse/étude et classification préliminaire.
- **CODE VERIFIED / DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP** : qualificatifs factuels par élément, sans sur-claim.
- **M4 DECIDED — H7/H8 ONLY** *(V0.2)* : arbitrages Pilote formels **H7** (orientation SC-G2 + option SC-G3 A06/A10) et **H8** (instruction conditionnelle d'étude SC-G3 en L4). **N'adopte pas** l'ensemble des classifications A01–A12. Historique V0.1 : « M4 DECIDED réservé — aucun à cette version » — **supersédé uniquement** pour H7/H8.
- **M4 START AUTHORIZED** : qualifie le démarrage de l'analyse (inchangé).

## 2. Orientations

| ID | Orientation | Statut | Conséquence |
| --- | --- | --- | --- |
| **OR-01** | `/studio` = unique expérience nominale Studio 3.0 | **CONFIRMÉE EN DISCUSSION** | `/` et anciennes routes candidates à convergence/retrait |
| **OR-02** | Product Runtime/OA = unique socle de vérité métier | **CONFIRMÉE EN DISCUSSION** | Stop aux Product Truth C concurrents ; analyse D1/OPS1 |
| **OR-03** | Éliminer les composants historiques **réellement** inutiles | **CONFIRMÉE (principe)** | Audit avant retrait, conserver seulement les capacités utiles |
| **OR-04** | Nommage pérenne selon fonction, indépendamment des jalons | **CONFIRMÉE EN DISCUSSION** | Définir conventions tôt, refactorer au bon lot |
| **OR-05** | Nora planifie, coordonne, mobilise transversalement outils/capacités | **VISION PARTAGÉE** | Dialogue continu, lectures incluses dans mandat |
| **OR-06** | Contrat amendable par dialogue ; **un Exécuter** autorise le mandat | **VISION PARTAGÉE** | Pas de CTA humain redondant ; versions et autorité effectives |
| **OR-07** | Autonomie d'exécution limitée à IN/OUT/STOP du contrat | **VISION PARTAGÉE** | Lots sans micro-GO ; STOP hors mandat |
| **OR-08** | Rapport et preuves suivis d'analyse/synthèse Nora, avant nouvelle mission | **VISION PARTAGÉE** | Résultats SUCCESS/PARTIAL/STOP/FAIL honnêtes |
| **OR-09** | Gouvernance proportionnée, principalement interne | **VISION PARTAGÉE** | Conserver sécurité/idempotence sans bureaucratie UX |
| **OR-10** | Préparer les noms en rationalisation ; renommer seulement au lot utile | **CONFIRMÉE EN DISCUSSION** | Éviter rename avant suppression |
| **OR-11** | Deux architectures distinctes AS-IS/TO-BE, enrichies en continu | **CONFIRMÉE EN DISCUSSION** | AS-IS dérivé PRR, TO-BE proposition |
| **OR-12** | Dossier AKG transverse lié à méthode et sources M0–M3 | **GO DOC V0.1 — INTEGRATED VIA PR #603** | Index + routage méthodologique |
| **OR-13** | **Primauté de la capacité fonctionnelle sur l'implémentation historique** : une dépendance active ne justifie jamais seule KEEP ; étudier extraction, consolidation, remplacement ou **reconstruction saine d'un mécanisme global**, sans refonte gratuite | **ORIENTATION CONFIRMÉE EN DISCUSSION 2026-10-22** | Comparer scénarios de cible/transition, conserver les garanties, ne pas figer la cible par les dépendances AS-IS |

### 2 bis. Arbitrages Pilote H7 / H8 (2026-10-22) — **M4 DECIDED — H7/H8 ONLY**

| ID | Décision | Statut | Portée / restriction |
| --- | --- | --- | --- |
| **H7** | SC-G2 = orientation architecturale de référence pour AKG-M4-A, **avec option SC-G3 ciblée A06/A10** | **ADOPTED — ARCHITECTURAL ORIENTATION ONLY** | ≠ runtime implémenté · ≠ adoption v3 · G0-A/B préservés · no dual-write |
| **H8** | Au lot L4, **instruire** SC-G3 A06/A10 **si** ADAPT ne clarifie pas suffisamment l'ownership | **ADOPTED — CONDITIONAL INVESTIGATION DIRECTIVE** | ≠ GO REBUILD auto · ≠ remplacement OA · ≠ code/tests · harvest non prérequis d'échec |

**Texte source Pilote (verbatim) :** *« Pour AKG-M4-A, je retiens comme orientation architecturale SC-G2 avec une option SC-G3 ciblée A06/A10. Pour H8 : instruire SC-G3 au lot L4 si ADAPT ne clarifie pas les responsabilités. Enregistre cela comme mon arbitrage H7/H8 uniquement, sans GO Delivery, sans adoption du runtime v3 et sans clôture automatique M4-A. »*

**Décision Record :** [11-m4a-h7-h8-architecture-orientation-decision-record.md](./11-m4a-h7-h8-architecture-orientation-decision-record.md).

**H0–H6 inchangés :** H0 GO Delivery **NOT GRANTED** · H1 MethodMode **OPEN** · H2 Tool-First **OPEN / fail-closed** · H3 Durable carrier **OPEN** · H4 Inventaire volumes **REQUIRED / UNKNOWN** · H5 pathPolicy **PARTIAL** · H6 Réouverture G0 **NOT AUTHORIZED**.

## 3. Écarts candidats à qualifier avant toute décision M4

| ID | AS-IS / source | TO-BE | Disposition **candidate** | Preuves / risques à examiner |
| --- | --- | --- | --- | --- |
| **G-UX-01** | `/` → `/synthese` POC ([code](../../../app/app/page.tsx)) | `/studio` nominal | **ADAPT / RETIRE LATER** | Routes, liens, tests, usages et migrations |
| **G-UX-02** | P0 / OPS1 / D1 présents ([PRR 06](../../../production-runtime-reference/06-persistence-restart-and-recovery.md)) | Une UX principale | **CONSOLIDATE / RETIRE LATER** | Imports, API, données et clients |
| **G-DOM-01** | OA vs stores historiques ([PRR 01](../../../production-runtime-reference/01-system-runtime-overview.md)) | Moteur métier unique | **KEEP OA / AUDIT autres** | Ownership, consommateurs, single Truth C |
| **G-FLOW-01** | Chemins F2, génériques, SHE, legacy ([PRR 03](../../../production-runtime-reference/03-end-to-end-flow-catalog.md)) | Contrat par mission + un GO | **ADAPT / CONSOLIDATE** | Préserver preuve M3, gates, idempotence |
| **G-REPORT-01** | Evidence/RB et rapport après exécution partiellement prouvés | Synthèse Nora systématique et honnête | **KEEP / COMPLETE** | STOP/partial/crash/sans rapport/REAL |
| **G-REC-01** | Proposals/offres process-local ([PRR 06](../../../production-runtime-reference/06-persistence-restart-and-recovery.md)) | Recovery sans invention | **ADAPT** | Multi-instance, restart, migrations |
| **G-ARCH-01** | Dépendances historiques encore consommées, y compris depuis composants modernes ([PRR 04](../../../production-runtime-reference/04-dependency-impact-map.md)) | Cible fondée sur les capacités et responsabilités, pas sur les imports actuels | **HARVEST / CONSOLIDATE / REPLACE / REBUILD candidats** | Graphe consommateurs, dépendances transitives, sémantique/side-effects, migration/rollback, invariants, tests |
| **G-NAME-01** | `ops1`, `d1`, `pre-m6`, `f2`/`w2`, `oa` et `vertical-slice` | Responsabilités nommées clairement | **ADAPT ultérieur** | Audit imports/tests/compatibilité ; ne pas renommer ce qui sera retiré |

**Important :** classement ≠ suppression recommandée ≠ décision du Pilote ≠ GO Delivery. **RS-03, B-M2B-01…05, R-M2A-04, no-write REAL, F18/F19 et autres réserves M1–M3 restent dans leur état PRR/Roadmap**, sans fermeture par cette V0.1.

## 4. Fiche de qualification par actif (pour M4 après GO formel)

Pour chaque ligne de rationalisation, renseigner :

**Identifiant ; rôle actuel ; propriétaire ; consommateurs ; source code/PRR ; comportement démontré ; état cible ; redondance ; risques ; classification KEEP/ADAPT/COMPLETE/HARVEST/CONSOLIDATE/REPLACE/FREEZE/RETIRE LATER ; preuve de non-régression ; stratégie de sortie ; nom cible éventuel ; arbitrage formel ; GO d'exécution ; impact PRR R24.**

**Décision méthodologique de M4 :** la classification doit obligatoirement examiner si **reconstruire** une responsabilité plutôt que garder son service historique produit une architecture globalement meilleure. Une dépendance réelle est un impératif de **continuité/migration**, pas une contrainte de conservation. La décision de réécriture demeure non consommée.

La [Build Doctrine — section A8](../../sfia-studio-convergence-build-doctrine.md) interdit d'assimiler une classification à une autorisation de retrait.

## 4 bis. Démarrage M4-A et trace des travaux

**GO M4-A :** lancement de l'analyse « responsabilités et dépendances runtime » après mise à jour de l'orientation OR-13. **[Cartographie initiale M4-A](04-m4a-runtime-responsibilities-and-transition-assessment.md)**.

**Couverture investigations (V0.2) :** six audits **T-A01–T-A06 terminés et acceptés avec réserves** au périmètre documentaire (handoffs Git immuables ; documents `05`–`10` locaux non intégrés à la branche projet). Historique V0.1 : « T-A01–T-A06 OPEN » — **mis à jour**. L'analyse transitive/non-régression et les preuves REAL restent **non closes**. Les options `REPLACE / REBUILD` restent des **candidats gouvernés** (H8 = étude conditionnelle L4, **pas** adoption REBUILD). Les dispositions **ne valent pas** GO d'exécution.

**M4-A NON CLOSED.** Pas de Formal Exit dans ce cycle. Pas de GO Delivery / M5.

## 5. Règles d'évolution

- Enrichir **AS-IS** à partir de Git courant et PRR applicable (pas de deuxième truth documentaire).
- Amender **TO-BE** uniquement comme proposition tant qu'un arbitrage formel n'est pas consommé ; **H7/H8** orientent la trajectoire sans valoir adoption runtime.
- Tracer le **pourquoi** de chaque choix et ses conséquences dans ce registre.
- Qualifier les écarts avec la doctrine produit v3, sans l'écraser.
- Synchroniser la PRR lorsque le comportement réel évolue selon R23/R24.
- Préserver des gates distincts pour GO M4 formel, lots de rationalisation, déploiement et M5.
- Préserver les réserves OPEN (REAL, volumes, MethodMode, pathPolicy, A09/A11, etc.) indépendamment de H7/H8 — détail dans le [Decision Record `11`](./11-m4a-h7-h8-architecture-orientation-decision-record.md).

[Index AKG](../README.md) · [AS-IS](01-current-architecture-as-is.md) · [TO-BE](02-target-architecture-to-be.md) · [H7/H8 Decision Record](./11-m4a-h7-h8-architecture-orientation-decision-record.md) · [Roadmap](../../sfia-studio-convergence-roadmap.md).

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

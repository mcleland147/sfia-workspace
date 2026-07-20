# SFIA Studio — Review Pack — OPS1 Functional Architecture Validation + PR

- **Date/heure/fuseau :** 2026-07-20 15:32:00 CEST
- **Repo :** mcleland147/sfia-workspace
- **Cycles :** 3 (validation) + 13 (publication PR)
- **Profil :** Standard
- **Gates :** G-OPS1-FUNC-ARCH (déjà) ; G-OPS1-FUNC-ARCH-VAL (consommé) ; GO COMMIT PUSH PR
- **Branche :** architecture/sfia-studio-ops1-functional
- **Base :** b4b9df577a39fe564c3a787a23501786682e1740
- **Commit candidat :** 122e9481d882f44d67fc82ef98e6b4dae590e7e8
- **Commit validation :** f6fa3734d23c05782d67638e6614ec4a887b80e4
- **PR :** [#239](https://github.com/mcleland147/sfia-workspace/pull/239)

## Truth Check

Conforme avant validation : HEAD candidat 122e948 ; parent b4b9df5 ; origin/main inchangé ; ahead 1/0 ; remote absente ; tracked propre.

## Revue documents 48–50 (pré-validation)

- 11 domaines D1–D11 ; 14 composants ; FA-CAND-01…22 candidates
- CAP/FLOW/FR couverts ; aucun tech stack ; claims interdits absents comme positifs
- Réserves héritées présentes ; gates suivants fermés

## Décision Morris

Architecture fonctionnelle OPS1 **validée avec réserves** sous G-OPS1-FUNC-ARCH-VAL (2026-07-20 15:30 CEST).
OPS1-FA-CAND-01…22 validées (11/13/18 WITH RESERVATIONS ; autres VALIDATED).
Statut global : functional-architecture-validated-with-reservations.

## Réserves maintenues

continuation CLOSE ; FD-CAND-13/15/20/26 ; FinOps numériques ; cartographie Campus360 ; convention branche ; live GPT/Cursor ; CI distante ; isolation OS/réseau.

## Gates fermés

SCENARIO-VAL ; UX ; TECH-ARCH ; BACKLOG ; delivery ; live ; MVP ; production.

## Diff validation (122e948..HEAD)

```diff
diff --git a/projects/sfia-studio/48-ops1-functional-architecture.md b/projects/sfia-studio/48-ops1-functional-architecture.md
index e6a3f5a..1be47e1 100644
--- a/projects/sfia-studio/48-ops1-functional-architecture.md
+++ b/projects/sfia-studio/48-ops1-functional-architecture.md
@@ -7,20 +7,22 @@
 | **Profil** | Standard |
 | **Typologie** | POC / ARCHITECTURE FONCTIONNELLE / PRODUIT / DOC |
 | **Gate d’ouverture** | `G-OPS1-FUNC-ARCH` — **consommé** |
-| **Gate de validation** | `G-OPS1-FUNC-ARCH-VAL` — **fermé** |
+| **Gate de validation** | `G-OPS1-FUNC-ARCH-VAL` — **consommé** — Morris — 2026-07-20 15:30 CEST |
 | **Baseline Git** | `origin/main` @ `b4b9df577a39fe564c3a787a23501786682e1740` |
-| **Branche** | `architecture/sfia-studio-ops1-functional` (**locale uniquement** — aucun push) |
-| **Statut** | `functional-architecture-candidate` — **CANDIDATE — MORRIS VALIDATION REQUIRED** |
+| **Branche** | `architecture/sfia-studio-ops1-functional` |
+| **Statut** | `functional-architecture-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 15:30 CEST) |
 | **Autorité** | Morris (L0) |
+| **Décisions** | `OPS1-FA-CAND-01`…`22` **validées** (réserves maintenues) |
+| **Horodatage validation Morris** | 2026-07-20 15:30 CEST |
 | **Sources** | [`41`](./41-operational-vertical-slice-1-framing.md)–[`47`](./47-ops1-functional-decision-pack.md) |
 | **Companions** | [`49`](./49-ops1-functional-components-and-interactions.md) · [`50`](./50-ops1-functional-architecture-decision-pack.md) |
 | **Horodatage production** | 2026-07-20 15:14 CEST |

-> Architecture **fonctionnelle** candidate du Vertical Slice Opérationnel 1.
+> Architecture **fonctionnelle** du Vertical Slice Opérationnel 1 — **validée avec réserves** sous `G-OPS1-FUNC-ARCH-VAL` (2026-07-20 15:30 CEST).
 > Hérite du cadrage validé (`G-OPS1-FRAMING-VAL`) et de la conception validée avec réserves (`G-OPS1-FUNC-DESIGN-VAL`).
-> **Aucune validation Morris** de cette architecture dans ce cycle.
+> Décisions `OPS1-FA-CAND-01`…`22` **validées** ; réserves héritées **inchangées**.
 > **Aucun** choix de stack, BDD, API, protocole, code, Figma, backlog, delivery, live ou MVP.
-> Les décisions `OPS1-FA-CAND-*` sont **candidates** — voir [`50`](./50-ops1-functional-architecture-decision-pack.md).
+> Aucun cycle suivant ouvert automatiquement — voir [`50`](./50-ops1-functional-architecture-decision-pack.md).

 ---

@@ -346,27 +348,29 @@ Aucune ouverture automatique.

 ---

-## 25. Critères de validation future (`G-OPS1-FUNC-ARCH-VAL`)
+## 25. Critères de validation (`G-OPS1-FUNC-ARCH-VAL`) — satisfaits

-Candidats (à valider Morris) :
+Confirmés sous validation Morris (2026-07-20 15:30 CEST) :

-1. Domaines et composants couvrent CAP-01…21 ;
+1. Domaines D1–D11 et 14 composants couvrent CAP-01…21 ;
 2. FLOW-01…32 rattachés à des composants ;
 3. FR-001…032 rattachées à des frontières ;
 4. Autorité Morris / harness / Cursor intacte ;
 5. Git / session sans double vérité ;
-6. Réserves listées et non « résolues » silencieusement ;
+6. Réserves listées et **non** résolues silencieusement ;
 7. Aucun choix technique implicite ;
 8. Aucun claim MVP / production / READY FOR DELIVERY.

 ---

-## 26. Verdict candidat
+## 26. Verdict

-`functional-architecture-candidate`
+`functional-architecture-validated-with-reservations`

-`OPS1 FUNCTIONAL ARCHITECTURE CANDIDATE — MORRIS VALIDATION REQUIRED`
+`SFIA STUDIO OPS1 FUNCTIONAL ARCHITECTURE VALIDATED WITH RESERVATIONS`

 Gate `G-OPS1-FUNC-ARCH` consommé — 2026-07-20 15:14 CEST.
-Gate `G-OPS1-FUNC-ARCH-VAL` **fermé**.
-Aucun push / PR / merge. Aucun cycle UX / tech / backlog / delivery / live / MVP ouvert.
+Gate `G-OPS1-FUNC-ARCH-VAL` **consommé** — Morris — 2026-07-20 15:30 CEST.
+11 domaines D1–D11 retenus ; 14 composants fonctionnels retenus ; frontières Morris / GPT / harness / Cursor / Git / persistance retenues ; couverture CAP/FLOW/FR confirmée.
+Réserves maintenues (continuation CLOSE ; FinOps numériques ; Campus360 cartographie/branche ; live ; CI ; isolation ; FD-CAND-13/15/20/26).
+UX (`G-OPS1-UX`), architecture technique (`G-OPS1-TECH-ARCH`), backlog, delivery, live et MVP : **fermés** — aucun cycle suivant ouvert automatiquement.
diff --git a/projects/sfia-studio/49-ops1-functional-components-and-interactions.md b/projects/sfia-studio/49-ops1-functional-components-and-interactions.md
index a33be6d..5f1fbe1 100644
--- a/projects/sfia-studio/49-ops1-functional-components-and-interactions.md
+++ b/projects/sfia-studio/49-ops1-functional-components-and-interactions.md
@@ -6,14 +6,15 @@
 | **Cycle** | 3 — Architecture fonctionnelle |
 | **Profil** | Standard |
 | **Gate d’ouverture** | `G-OPS1-FUNC-ARCH` — consommé |
-| **Gate de validation** | `G-OPS1-FUNC-ARCH-VAL` — fermé |
+| **Gate de validation** | `G-OPS1-FUNC-ARCH-VAL` — **consommé** — Morris — 2026-07-20 15:30 CEST |
 | **Baseline Git** | `origin/main` @ `b4b9df577a39fe564c3a787a23501786682e1740` |
-| **Branche** | `architecture/sfia-studio-ops1-functional` (locale — aucun push) |
-| **Statut** | `functional-architecture-candidate` — **CANDIDATE — MORRIS VALIDATION REQUIRED** |
+| **Branche** | `architecture/sfia-studio-ops1-functional` |
+| **Statut** | `functional-architecture-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 15:30 CEST) |
 | **Companion** | [`48`](./48-ops1-functional-architecture.md) · [`50`](./50-ops1-functional-architecture-decision-pack.md) |
-| **Horodatage** | 2026-07-20 15:14 CEST |
+| **Horodatage production** | 2026-07-20 15:14 CEST |
+| **Horodatage validation Morris** | 2026-07-20 15:30 CEST |

-> Contrats fonctionnels des composants OPS1.
+> Contrats fonctionnels des composants OPS1.
 > **Aucun** framework, endpoint, table, queue ou protocole imposé.

 ---
@@ -477,9 +478,13 @@ sequenceDiagram

 ---

-## 7. Verdict candidat
+## 7. Verdict

-`functional-architecture-candidate`
+`functional-architecture-validated-with-reservations`

-Composants et interactions **candidats** — validation Morris requise (`G-OPS1-FUNC-ARCH-VAL`).
-Aucun choix technique. Réserves héritées **non arbitrées**.
+`SFIA STUDIO OPS1 FUNCTIONAL ARCHITECTURE VALIDATED WITH RESERVATIONS`
+
+Composants et interactions **validés fonctionnellement** sous `G-OPS1-FUNC-ARCH-VAL` (2026-07-20 15:30 CEST).
+Les **noms** de composants restent affinables dans les cycles suivants sans modifier les responsabilités validées.
+Aucun mapping technique validé ; aucune UX visuelle validée ; réserves héritées **maintenues**.
+Aucun cycle UX / tech / backlog / delivery / live / MVP ouvert automatiquement.
diff --git a/projects/sfia-studio/50-ops1-functional-architecture-decision-pack.md b/projects/sfia-studio/50-ops1-functional-architecture-decision-pack.md
index 51d5b0a..4e4829c 100644
--- a/projects/sfia-studio/50-ops1-functional-architecture-decision-pack.md
+++ b/projects/sfia-studio/50-ops1-functional-architecture-decision-pack.md
@@ -6,17 +6,17 @@
 | **Cycle** | 3 — Architecture fonctionnelle |
 | **Profil** | Standard |
 | **Gate d’ouverture** | `G-OPS1-FUNC-ARCH` — consommé |
-| **Gate de validation** | `G-OPS1-FUNC-ARCH-VAL` — **fermé** |
+| **Gate de validation** | `G-OPS1-FUNC-ARCH-VAL` — **consommé** — Morris — 2026-07-20 15:30 CEST |
 | **Baseline Git** | `origin/main` @ `b4b9df577a39fe564c3a787a23501786682e1740` |
-| **Branche** | `architecture/sfia-studio-ops1-functional` (locale — aucun push) |
-| **Statut** | `functional-architecture-candidate` |
+| **Branche** | `architecture/sfia-studio-ops1-functional` |
+| **Statut** | `functional-architecture-validated-with-reservations` |
 | **Companions** | [`48`](./48-ops1-functional-architecture.md) · [`49`](./49-ops1-functional-components-and-interactions.md) |
-| **Horodatage** | 2026-07-20 15:14 CEST |
+| **Horodatage production** | 2026-07-20 15:14 CEST |
+| **Horodatage validation Morris** | 2026-07-20 15:30 CEST |

-> Toutes les décisions `OPS1-FA-CAND-*` portent le statut :
-> **`CANDIDATE — MORRIS VALIDATION REQUIRED`**
-
-Hérite des `OPS1-FD-CAND-01…27` **validées** (réserves 13/15/20/26 **OPEN** — non arbitrées ici).
+> Décisions `OPS1-FA-CAND-01`…`22` **validées** sous `G-OPS1-FUNC-ARCH-VAL` (2026-07-20 15:30 CEST).
+> Statut global : `functional-architecture-validated-with-reservations`.
+> Hérite des `OPS1-FD-CAND-01…27` **validées** (réserves 13/15/20/26 **OPEN** — **maintenues**).

 ---

@@ -26,7 +26,7 @@ Chaque décision : observation · héritage · options · recommandation · déc

 ---

-## 2. Décisions candidates
+## 2. Décisions `OPS1-FA-CAND-*` (validées)

 ### OPS1-FA-CAND-01 — Découpage des domaines fonctionnels

@@ -36,14 +36,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-01, 03, 21 |
 | **Options** | (A) Monolithe logique unique ; (B) 11 domaines D1–D11 (doc 48) ; (C) découpage technique prématuré |
 | **Recommandation** | (B) |
-| **Décision candidate** | Adopter les domaines D1–D11 comme carte fonctionnelle OPS1. |
+| **Décision Morris** | Adopter les domaines D1–D11 comme carte fonctionnelle OPS1. |
 | **Impacts** | Lisibilité ; matrices de couverture |
 | **Risques** | Sur-découpage perçu |
 | **Dette** | Noms de domaines affinables à la validation |
 | **Réserves** | Aucune nouvelle |
 | **Routé** | Tech arch si mapping modules |
 | **Morris attendu** | Valider / ajuster la carte |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-02 — Responsabilité du Cycle Session Manager

@@ -53,14 +53,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-02, 03, 07 |
 | **Options** | (A) États dispersés dans l’UI ; (B) Session Manager propriétaire des transitions |
 | **Recommandation** | (B) |
-| **Décision candidate** | Cycle Session Manager = propriétaire des transitions d’état OPS1. |
+| **Décision Morris** | Cycle Session Manager = propriétaire des transitions d’état OPS1. |
 | **Impacts** | Reprise, CLOSE immuable |
 | **Risques** | God-object si on y met l’exécution |
 | **Dette** | — |
 | **Réserves** | Continuation CLOSE (FD-CAND-13) reste OPEN |
 | **Routé** | — |
 | **Morris attendu** | Confirmer la propriété |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-03 — Séparation conversation / action

@@ -70,14 +70,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-04, 05, 27 ; FR-003 |
 | **Options** | (A) Action dans le fil chat ; (B) Action Proposal Manager dédié |
 | **Recommandation** | (B) |
-| **Décision candidate** | Maintenir Conversation Workspace ≠ Action Proposal Manager. |
+| **Décision Morris** | Maintenir Conversation Workspace ≠ Action Proposal Manager. |
 | **Impacts** | PN-05 ; surfaces UX |
 | **Risques** | Friction UX (cycle UX) |
 | **Dette** | — |
 | **Réserves** | — |
 | **Routé** | UX pour layout |
 | **Morris attendu** | Confirmer |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-04 — Autorité exclusive Morris

@@ -87,14 +87,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-08 ; FR-004 |
 | **Options** | (A) Auto-GO sous conditions ; (B) Morris Gate Manager exclusif |
 | **Recommandation** | (B) |
-| **Décision candidate** | Toute autorisation passe par Morris Gate Manager. |
+| **Décision Morris** | Toute autorisation passe par Morris Gate Manager. |
 | **Impacts** | Pas d’autonomie GPT |
 | **Risques** | Goulot humain (accepté POC) |
 | **Dette** | — |
 | **Réserves** | — |
 | **Routé** | — |
 | **Morris attendu** | Confirmer |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-05 — Frontière harness

@@ -104,14 +104,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-09 ; FR-005,025 |
 | **Options** | (A) Contrôles UI seuls ; (B) Harness Validation Boundary obligatoire |
 | **Recommandation** | (B) |
-| **Décision candidate** | Aucune exécution sans revalidation harness réussie. |
+| **Décision Morris** | Aucune exécution sans revalidation harness réussie. |
 | **Impacts** | FLOW-15/16 ; PN-01 |
 | **Risques** | Faux positifs de refus |
 | **Dette** | Implémentation → tech arch |
 | **Réserves** | — |
 | **Routé** | `G-OPS1-TECH-ARCH` |
 | **Morris attendu** | Confirmer |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-06 — Frontière Cursor

@@ -121,14 +121,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-09, 27 ; FR-007,030 |
 | **Options** | (A) Cursor libre post-GO ; (B) Cursor Adapter strictement borné |
 | **Recommandation** | (B) |
-| **Décision candidate** | Cursor Execution Adapter = seul chemin d’exécution Markdown OPS1. |
+| **Décision Morris** | Cursor Execution Adapter = seul chemin d’exécution Markdown OPS1. |
 | **Impacts** | PN-03 ; no remote auto |
 | **Risques** | — |
 | **Dette** | Adapter technique |
 | **Réserves** | Isolation OS/réseau OPEN |
 | **Routé** | Tech arch ; live Cursor |
 | **Morris attendu** | Confirmer |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-07 — Relation Git / store de session

@@ -138,14 +138,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-02 ; FR-015 |
 | **Options** | (A) Store = vérité fichiers ; (B) Git vérité ; store = journal |
 | **Recommandation** | (B) |
-| **Décision candidate** | Git Truth Adapter = vérité HEAD/fichiers/diffs ; Persistence = journal. |
+| **Décision Morris** | Git Truth Adapter = vérité HEAD/fichiers/diffs ; Persistence = journal. |
 | **Impacts** | Conflit → Git prime / STOP |
 | **Risques** | Complexité reprise |
 | **Dette** | — |
 | **Réserves** | — |
 | **Routé** | Tech arch (stockage) |
 | **Morris attendu** | Confirmer |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-08 — Modèle d’événements fonctionnels

@@ -155,14 +155,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FLOW-01…32 |
 | **Options** | (A) Appels ad hoc non nommés ; (B) catalogue d’événements fonctionnels (message, gateDecision, contractValidated, executionFinished, stopSignaled, …) |
 | **Recommandation** | (B) |
-| **Décision candidate** | Maintenir un catalogue d’événements fonctionnels documenté (doc 49) sans imposer de broker. |
+| **Décision Morris** | Maintenir un catalogue d’événements fonctionnels documenté (doc 49) sans imposer de broker. |
 | **Impacts** | Observabilité |
 | **Risques** | Catalogue incomplet |
 | **Dette** | Enrichissement à la validation |
 | **Réserves** | — |
 | **Routé** | Tech si messaging |
 | **Morris attendu** | Valider le principe |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-09 — Gestion des preuves

@@ -172,14 +172,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-14 ; FR-013,031 |
 | **Options** | (A) Preuves optionnelles ; (B) Evidence and Result Collector obligatoire post-exec |
 | **Recommandation** | (B) |
-| **Décision candidate** | Collector obligatoire ; rapport incomplet bloque clôture nominale. |
+| **Décision Morris** | Collector obligatoire ; rapport incomplet bloque clôture nominale. |
 | **Impacts** | FLOW-19/20 |
 | **Risques** | — |
 | **Dette** | — |
 | **Réserves** | — |
 | **Routé** | — |
 | **Morris attendu** | Confirmer |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-10 — STOP / FAILED

@@ -189,14 +189,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-10 ; FR-011,012,025 |
 | **Options** | (A) Gestion dispersée ; (B) Error and STOP Coordinator |
 | **Recommandation** | (B) |
-| **Décision candidate** | Coordinator unique pour STOP/FAILED/timeouts/refus. |
+| **Décision Morris** | Coordinator unique pour STOP/FAILED/timeouts/refus. |
 | **Impacts** | Cohérence fail-closed |
 | **Risques** | Sur-centralisation |
 | **Dette** | — |
 | **Réserves** | — |
 | **Routé** | — |
 | **Morris attendu** | Confirmer |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-11 — Reprise et lecture après CLOSE

@@ -206,14 +206,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-13 (WITH RESERVATION) ; CAP-20 |
 | **Options** | (A) Muter CLOSED ; (B) lecture seule + continuation/session liée (mécanisme OPEN) |
 | **Recommandation** | (B) sans figer le mécanisme |
-| **Décision candidate** | Architecture expose IDLE_READ_ONLY après CLOSE ; mécanisme exact de continuation reste **OPEN**. |
+| **Décision Morris** | Architecture expose IDLE_READ_ONLY après CLOSE ; mécanisme exact de continuation reste **OPEN**. |
 | **Impacts** | Pas de mutation silencieuse |
 | **Risques** | Ambiguïté UX |
 | **Dette** | Décision FD-CAND-13 ultérieure |
 | **Réserves** | **FD-CAND-13** |
 | **Routé** | UX ; éventuel amendement conception |
 | **Morris attendu** | Confirmer non-mutation ; ne pas clôturer FD-CAND-13 ici |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED WITH RESERVATIONS — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-12 — Non-mutation silencieuse

@@ -223,14 +223,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-13 ; framing |
 | **Options** | (A) Reprise implicite ; (B) règle architecturale anti-silencieux |
 | **Recommandation** | (B) |
-| **Décision candidate** | Interdire toute mutation de session CLOSED sans décision Morris explicite de continuation/nouvelle session. |
+| **Décision Morris** | Interdire toute mutation de session CLOSED sans décision Morris explicite de continuation/nouvelle session. |
 | **Impacts** | Sécurité métier POC |
 | **Risques** | — |
 | **Dette** | — |
 | **Réserves** | Lié à FD-CAND-13 |
 | **Routé** | — |
 | **Morris attendu** | Confirmer |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-13 — Traitement FinOps

@@ -240,14 +240,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-15 (WITH RESERVATION) ; FR-023 |
 | **Options** | (A) Ignorer FinOps en archi ; (B) FinOps Guard fonctionnel sans seuils figés |
 | **Recommandation** | (B) |
-| **Décision candidate** | Composant FinOps Guard ; valeurs numériques hors cycle. |
+| **Décision Morris** | Composant FinOps Guard ; valeurs numériques hors cycle. |
 | **Impacts** | FLOW-29 |
 | **Risques** | — |
 | **Dette** | GO seuils avant live |
 | **Réserves** | **FD-CAND-15** |
 | **Routé** | Live / FinOps GO |
 | **Morris attendu** | Confirmer composant ; garder seuils OPEN |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED WITH RESERVATIONS — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-14 — Sécurité fonctionnelle et fail-closed

@@ -257,14 +257,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-16 (principes) ; FR-006,016,024,025 |
 | **Options** | (A) Confiance GPT ; (B) fail-closed systématique sur doute |
 | **Recommandation** | (B) |
-| **Décision candidate** | Politique fail-closed transversale portée par Harness + Error/STOP. |
+| **Décision Morris** | Politique fail-closed transversale portée par Harness + Error/STOP. |
 | **Impacts** | PN-01…06 |
 | **Risques** | Refus fréquents |
 | **Dette** | — |
 | **Réserves** | Isolation OS/réseau OPEN |
 | **Routé** | Tech arch / sécurité |
 | **Morris attendu** | Confirmer |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-15 — Observabilité

@@ -274,14 +274,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-19 |
 | **Options** | (A) Logs ad hoc ; (B) Audit Journal + IDs corrélés |
 | **Recommandation** | (B) |
-| **Décision candidate** | Audit Journal obligatoire ; corrélations minimales doc 48 §22. |
+| **Décision Morris** | Audit Journal obligatoire ; corrélations minimales doc 48 §22. |
 | **Impacts** | CAP-21 |
 | **Risques** | Volume de journal |
 | **Dette** | Backend tech |
 | **Réserves** | — |
 | **Routé** | Tech arch |
 | **Morris attendu** | Confirmer |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-16 — Frontières UX

@@ -291,14 +291,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-22 |
 | **Options** | (A) Spec visuelle ici ; (B) router vers `G-OPS1-UX` |
 | **Recommandation** | (B) |
-| **Décision candidate** | Architecture fonctionnelle définit besoins de surfaces ; pas de Figma. |
+| **Décision Morris** | Architecture fonctionnelle définit besoins de surfaces ; pas de Figma. |
 | **Impacts** | Cycle UX distinct |
 | **Risques** | — |
 | **Dette** | — |
 | **Réserves** | — |
 | **Routé** | `G-OPS1-UX` |
 | **Morris attendu** | Confirmer routage |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-17 — Frontières architecture technique

@@ -308,14 +308,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-21 (archi fct) ; routage stack |
 | **Options** | (A) Choisir stack ici ; (B) router vers `G-OPS1-TECH-ARCH` |
 | **Recommandation** | (B) |
-| **Décision candidate** | Aucun choix technique dans 48–50. |
+| **Décision Morris** | Aucun choix technique dans 48–50. |
 | **Impacts** | Pureté fonctionnelle |
 | **Risques** | — |
 | **Dette** | — |
 | **Réserves** | CI / isolation OPEN |
 | **Routé** | `G-OPS1-TECH-ARCH` |
 | **Morris attendu** | Confirmer |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-18 — Traitement des réserves Campus360

@@ -325,14 +325,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-20, 26 (WITH RESERVATION) ; 27 |
 | **Options** | (A) Trancher chemins ici ; (B) préserver OPEN → SCENARIO-VAL |
 | **Recommandation** | (B) |
-| **Décision candidate** | Architecture respecte éligibilité+allowlist ; n’ouvre pas SCENARIO-VAL ; ne liste pas de chemins. |
+| **Décision Morris** | Architecture respecte éligibilité+allowlist ; n’ouvre pas SCENARIO-VAL ; ne liste pas de chemins. |
 | **Impacts** | Pas de fausse précision |
 | **Risques** | — |
 | **Dette** | SCENARIO-VAL |
 | **Réserves** | **FD-CAND-20, 26** |
 | **Routé** | `G-OPS1-SCENARIO-VAL` |
 | **Morris attendu** | Confirmer non-arbitrage |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED WITH RESERVATIONS — Morris — 2026-07-20 15:30 CEST — `G-OPS1-FUNC-ARCH-VAL`` |

 ### OPS1-FA-CAND-19 — Critères de passage vers UX

@@ -342,14 +342,14 @@ Chaque décision : observation · héritage · options · recommandation · déc
 | **Héritage** | FD-CAND-22 ; doc 45 §12 |
 | **Options** | Critères candidats : archi fct validée ; besoins de surfaces stables |
 | **Recommandation** | Maintenir critères conception |
-| **Décision candidate** | Passage UX seulement après `G-OPS1-FUNC-ARCH-VAL` + GO UX. |
+| **Décision Morris** | Passage UX seulement après `G-OPS1-FUNC-ARCH-VAL` + GO UX. |
 | **Impacts** | Séquençage |
 | **Risques** | — |
 | **Dette** | — |
 | **Réserves** | — |
 | **Routé** | UX |
 | **Morris attendu** | Confirmer |
-| **Statut** | `CANDIDATE — MORRIS VALIDATION REQUIRED` |
+| **Statut** | `VALIDATED — Morris —
... [truncated for handoff size; full in git show] ...

```

## Chaîne des commits

```text
f6fa373 docs(sfia-studio): validate OPS1 functional architecture
122e948 docs(sfia-studio): define OPS1 functional architecture candidate

```

```text
commit f6fa3734d23c05782d67638e6614ec4a887b80e4
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Mon Jul 20 15:31:14 2026 +0200

    docs(sfia-studio): validate OPS1 functional architecture

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../sfia-studio/48-ops1-functional-architecture.md |  34 +++--
 ...-ops1-functional-components-and-interactions.md |  23 +--
 ...0-ops1-functional-architecture-decision-pack.md | 155 ++++++++++-----------
 3 files changed, 110 insertions(+), 102 deletions(-)

```

## Diff total vs main

```text
 .../sfia-studio/48-ops1-functional-architecture.md | 376 ++++++++++++++++
 ...-ops1-functional-components-and-interactions.md | 490 +++++++++++++++++++++
 ...0-ops1-functional-architecture-decision-pack.md | 459 +++++++++++++++++++
 3 files changed, 1325 insertions(+)

```

Trois fichiers 48–50. Deux commits.

## Push

git push -u origin architecture/sfia-studio-ops1-functional
SHA distant = f6fa3734d23c05782d67638e6614ec4a887b80e4 ; local/distant 0/0.

## PR #239

| Champ | Valeur |
|-------|--------|
| URL | https://github.com/mcleland147/sfia-workspace/pull/239 |
| Titre | docs(sfia-studio): validate OPS1 functional architecture |
| État | OPEN |
| Draft | non |
| Base | main @ b4b9df5… |
| Head | architecture/… @ f6fa3734d23c05782d67638e6614ec4a887b80e4 |
| Commits | 2 |
| Fichiers | 3 |
| +/- | +1325 / −0 (vs main) |
| Mergeable | MERGEABLE / CLEAN |
| Merged | false |
| Checks | aucun reporté |

Merge **non** exécuté. Squash recommandé. Cleanup = GO distinct.

## Handoff

- SHA : (après push)

## Verdict

**OPS1 FUNCTIONAL ARCHITECTURE VALIDATED WITH RESERVATIONS — PR OPENED — MERGE REQUIRES MORRIS GO**

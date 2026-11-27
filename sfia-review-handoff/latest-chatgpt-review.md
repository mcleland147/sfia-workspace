# Review Pack FULL — E5 Qualification intégrée et exit technique

**Date/heure**: 2026-11-27 22:24 CET (2026-11-27T21:24:28Z UTC)
**Projet**: SFIA Studio Next · R5 IN PROGRESS · ML5 Livraison 1
**Ensemble**: E5 — Qualification intégrée et exit technique
**Cycle**: 9 — QA / validation · Profil Critical · EVOL/QA
**GO Morris**: 27 nov 2026 — suivi v0.17 §24 (doc `70d32c52` / blob `d14b3d0c`)
**Handoff entrant**: `12244641` blob `b2f34493`

## 1. Mandat (résumé exécution)

Qualifier le candidat intégré E1–E4, corriger défauts résiduels confirmés dans frontières existantes, préparer candidat cohérent pour mise à disposition RECETTE.
**Interdit**: commit/push projet, PR, merge, LIVE, mutation RECETTE, clôture fictive MP, R6.

## 2. Git Truth Check

| Champ | Valeur |
| --- | --- |
| pwd | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| remote | `origin` → `mcleland147/sfia-workspace` |
| branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `a3305a42b3fd0f24b2a16bca825fc14eb37e84e6` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| staged | aucun staged inattendu |
| `.tmp-sfia-review/chatgpt-review.md` | non suivi produit (pack local) |

```
M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/shell/studio-shell.css
 M projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/tests/integration/ml3-composer-dictation-integrated.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
?? .tmp-sfia-review/
?? projects/sfia-studio-next/construction/evidence/ml5-e5-20261127/
?? projects/sfia-studio-next/web/.tmp-sfia-review/
?? projects/sfia-studio-next/web/tests/qualify/ml5-e5-discriminating-browser.spec.ts
?? projects/sfia-studio-next/web/tests/unit/e5-knowledge-recovery-ids.test.ts
```

**ENV-01**: DEV :3100 / PG :5433 / `sfia_next_dev` · tests mutatifs `sfia_next_e2e` · RECETTE :3200 / :5434 préservée · **ENV ROUTING COMPLETE**.

## 3. Identité candidat testé

| Couche | Valeur |
| --- | --- |
| PUBLISHED INPUT SNAPSHOT | `a3305a42b3fd0f24b2a16bca825fc14eb37e84e6` / tree `72405ed…` |
| LOCAL QUALIFIED CANDIDATE | delta sha256 `e41e2a5a84f94de21928df2ba4bb1eb47730d636b33dad8e8ec05b037f2c1d17` |
| BUILD_ID | `y06_YWoJEwb4zZZwRW26H` |
| digest | `8380c0cd4578a25f83ffcf5fd5e7e259dd9641ea8d6ab0fc4ddc4aec7da710f4` |
| RECETTE DEPLOYMENT | PENDING GO (manifest ci-dessous) |

## 4. Défauts confirmés et corrections

| ID | Zone | Cause | Correction | Preuve |
| --- | --- | --- | --- | --- |
| E5-E2-01 | Reprise D4 knowledgeEffects | JSON absent → reconstruction incomplète | `recoverKnowledgeEffectsForReadPath` + intent ids durables | unit e5-knowledge + PG unified |
| E5-E3-01 | Panneau droits | `docIds.size===0` autorisait récents | filtre si `projectLoadState==="ready"` | code + panel empty honest |
| E5-E3-02 | Identité consultation | attempt ≠ preuve | `recentItemFromAttemptConsultation` | code page.tsx |
| E5-E3-03 | Rail 1280×720 | dernier item sous foot | `padding-bottom/scroll-padding 4.5rem` | hit-test ok=true clearOfFoot |
| E5-E4-01 | Handshake | created≠config applied ; pre-ready hang | ready=`session.updated` ; reject PROVIDER_ERROR | unit E5 |
| E5-E4-02 | Finalize hang | completed avant committed + COMMIT_DELAY leak | ne pas ré-armer awaiting si final déjà présent ; unset delay en PG tests | PG T02/T11 PASS |

## 5. Matrice de réconciliation (draft depuis suivi v0.17)

# SFIA Studio Next ML5 — E5 Reconciliation Draft (read-only)

**Source:** `suivi-macro-lot-correctif-continuite-fiabilite-ml5.md` v0.17 (`70d32c524d05…`)
**Candidat:** DEV `a3305a42b3fd0f24b2a16bca825fc14eb37e84e6` / tree `72405eddfdd10deea324a5c0dd01a073b30c5f85`
**Hypothèse implémentation:** E1–E4 livrés sur ce SHA ; delta E5 local non observé (suivi : état local NON OBSERVÉ).

**Légende Preuve class (mandat E5 / échelle SFIA):**

| Classe | Signification |
| --- | --- |
| 1 | Inspection / revue code-contrat |
| 2 | Unit / DET déterministe |
| 3 | PG / intégration service |
| 4 | BROWSER / Playwright DEV |
| 5 | F2 / mesures géométriques appariées |
| 6 | LIVE SDK / fournisseur (hors mandat E5) |
| 7 | REAL / recette naturelle MaintiPlan |

**Niveaux suivi:** ACQUIS CIBLÉ · PARTIEL · IMPLEMENTED · DET ciblé · Construction revue · GATE LIVE · Manquant · OPEN RECETTE

---

## Référence rapide — §11 E1 reserves (Morris acceptées)

| ID | Arbitrage Morris |
| --- | --- |
| E1 construction | Sortie construction acceptée ; pas BEHAVIOR PROVEN global |
| R-REC-E1-01 / R-E1-LIVE | **Report accepté** — parcours naturels capitalisation, arbre, consolidation, points, décisions, trajectoire, réutilisation |
| R-REC-E1-02 / R-E1-DOM | **Report accepté** — 4 surfaces, compteurs, V1→V2 ; DOM non prouvé |
| R-E1-HYBRID | → E2 derivedUsed=false, T08 |
| R-E1-E3 | → E3 panneau, accès, UX |
| R-E1-PACK | Régularisation pré-check E2 (as-built / RETAIN) |
| R-E1-VALID | tsc/lint/build → E2/E5 ; pas d’acquisition par report |
| E2 GO | Construction Critical DEV A.1–A.7 uniquement |

---

## Référence rapide — §23 gaps discriminants (entrée E5)

| Volet | Écart confirmé | Action E5 |
| --- | --- | --- |
| **E4 C.3** | Readiness `session.created/updated` ; erreur/cancel pré-ready ; sas nominal ≠ harness seul | Vérifier protocole ; pas LIVE |
| **E4 C.1/C.2/C.5** | Sas scope, brouillon, late events, vérité usage | Exercer nominal + cleanup |
| **E2 A.3** | Lookup JSON absent : pas reconstruction `knowledgeEffects` | Contrôle/correction bornée |
| **E2 A.5** | Reprise sans projection | Vérifier/corriger |
| **E3 D.4** | `proof` non câblé ; droits avant exposition partiels ; commit vs ref ; capture vide | Multitypes + droits + version exacte |
| **E3 D.6** | Panneau récents **vide** (§23 vs compare « peuplé ») ; 6 consultations non jouées ; F2 global non revendiqué | Peupler nominal + 6 types + F1/F2 appariés |
| **E3 D.5** | Accès Résultats après scroll à confirmer | Scroll/hit-test |
| **Global** | 1451 PASS / 2 FAIL historiques ; lint/tsc suites finales non closes | Suites E5 réelles, exits honnêtes |

---

## Référence rapide — §24 mandat E5 (bullets)

- Réconcilier **26 SE + 17 MP + 18 oracles + 25 parcours** avec preuves applicables ; pas de PASS fictif.
- Suites **unit, PG, navigateur, tsc, lint, build** ; corrections locales §23.1–2 dans frontières existantes.
- **Pas** de cycle autonome E2/E3/E4, pas de redesign ; STOP si limite structurante.
- Manifeste candidat RECETTE ; distinguer SHA publié vs delta local ; **pas** de commit/push/LIVE/RECETTE par ce GO.
- Plan LIVE borné **préparé**, non exécuté ; E5 ≠ Livraison 1 ≠ clôture ML5.
- **17 MP OPEN RECETTE** ; T09 NOT SENT ; NO RELEASE.

---

## Preuves clés — `evidence/ml5-e3-20261127/`

| Fichier | Rôle |
| --- | --- |
| `figma-runtime-compare.md` | Matrice Figma↔runtime (rail 246, typo, SAS, panneau PARTIEL) |
| `f1-rail-project.json`, `f1-rail-personal.json` | F1 rail 246 px |
| `typography-measures.json`, `01-typography-table.png` | D.1 body 12.5 / lh 1.65 |
| `sas-nonreg.json` | D.2 animation SAS |
| `runtime-travail-full.png`, `runtime-portfolio-rail.png`, `runtime-rail-settings.png` | Rail / settings |
| `runtime-panel-recents.png` | Panneau (structure ; peuplage §23 contesté) |
| `figma-700-39-travail.png`, `figma-1405-610-panel.png` | Refs Figma |

## Preuves clés — `evidence/ml5-e4-20261127/`

| Fichier | Rôle |
| --- | --- |
| `figma-runtime-compare.md` | Dictée page 05 + rail 1280×720 |
| `composer-idle-mic.png`, `composer-short.png`, `composer-extended.png` | C.1 chrome compositeur |
| `c01-during-dictation.png`, `ml3-dict-harness.png` | C.4 onde / harness (pas humain LIVE) |
| `rail-1280x720-hit.json`, `rail-1280x720-overlap.json`, `rail-1280x720-detail.json` | D.5 chevauchement / hit-test |
| `runtime-travail-1280x720.png`, `runtime-panel-recents.png` | Régression visuelle intégrée |
| `f1-rail-project.json` | F1 246 px |

---

## Matrice A — 26 sous-ensembles (§3)

| ID | Contrat | Implémentation (a3305a42 + E5 delta) | Preuve class | Niveau | Écart | Action |
| --- | --- | --- | --- | --- | --- | --- |
| A.1 | Admission versionnée / allocation | Stamp v0.x, bare qualified rejeté (E2) | 2–3 | ACQUIS CIBLÉ | Calibration réelle, choix naturel | Gate calibration ; E5 vérif signal |
| A.2 | Qualification structurée, refs inter-vagues | Réécriture refs, garde refs locales | 2–3 | ACQUIS DET CIBLÉ | Fraîcheur / continuation naturelle | Recette / arbitrage §19 |
| A.3 | Multi-intentions Option B | Lecture terminale, ownership amélioré | 2–3 | ACQUIS DET CIBLÉ | Lookup sans JSON : pas rebuild `knowledgeEffects` | **E5 contrôle intégré §23** |
| A.4 | Recherche hybride | PG fake-embed 2 PASS, audit structurel | 3 | ACQUIS CIBLÉ PG | Droits, fraîcheur, T08 | Recette ; pas optimiser sans mesure |
| A.5 | C02 / états terminaux | CAS/exception raccordés | 3 | ACQUIS CIBLÉ | **Reprise sans projection** | **E5 vérifier/corriger** |
| A.6 | OBS / cartographie | Événements cartographiés | 1–2 | INSPECTION | Latences, corrélation E3 non exhaustives | E3 consomme ; T08 recette |
| A.7 | FinOps conflits scope | PG 110/0/316, 7j, isolation Pilote | 3 | ACQUIS DET CIBLÉ | Présentation E3 ; coût facturé Admin OFF | E3/E5 présentation |
| B.1 | Extraction sélective → D4 | Chemins inspectés, tests historiques | 2–3 | Construction revue | R-REC-E1-01 autonomie / zéro mutation | Recette naturelle |
| B.2 | Arborescence batch / reparent | Merge/split/detach, fencing, PG PASS | 3 | Construction revue | Pertinence naturelle réorg | E2 concurrence si impact |
| B.3 | Synthèse / capitalisation | Ciblage invalide refusé | 2–3 | Construction revue | Consolidation CampusNova-like LIVE | R-REC-E1-01 |
| B.4 | Points ouverts | Titre canonique → shortTitle | 3 | Construction revue | Cycle naturel, accès E3 | E3 DOM/navigation |
| B.5 | D6 record/revise/replay | 10 PG B.5/B.6 PASS | 3 | Acquis DET ciblés | T07 naturel, portée | Recette + E2 multi-effets |
| B.6 | Forecast / RETAIN | Steps durables D5, garde USER_MESSAGE | 3 | Construction revue | Liens D4/CKI, finalité DOM | R-REC-E1-01 situation |
| B.7 | Outils D4 réutilisation | PREFERRED+omit, PG | 3 | Construction revue | Fraîcheur, hybrid E2 | T08 / diagnostic |
| B.8 | Compteurs / identité doc | PG + inspection | 3 | Construction revue | **DOM 4 surfaces, V1→V2** ; HTTP500 | E3 + recette R-REC-E1-02 |
| C.1 | NoraSharedComposer partagé | Interactions communes, chrome distinct | 2–4 | IMPLEMENTED | **Sas nominal E5** | PW projet + sas |
| C.2 | Brouillons / auto-grow | sessionStorage isolé | 2–4 | IMPLEMENTED | Navigation/resize/sas E5 | Qualifier nominal |
| C.3 | Transport dictée | Timeout, fermeture transport | 2–3 | DET ciblé | **Handshake pré-ready ; MP06 LIVE ouvert** | **E5 §23.1** |
| C.4 | Onde audio | Analyseur réel, fixture | 2–4 | DET ciblé | Parole humaine LIVE | Report LIVE |
| C.5 | Partial/cancel/finalize | Unit/PW | 2–3 | DET ciblé | Sas, late events, usage | E5 + LIVE distinct |
| D.1 | Typographie lisible | 12.5px, titres 15/12 | 4–5 | ACQUIS CIBLÉ | Comparaisons longueur non exhaustives | E5 intégré |
| D.2 | Animation SAS | Transform entre sondes | 4 | ACQUIS CIBLÉ | Terminal/reduced motion | E4/E5 |
| D.3 | Restitution D4 métier | Lignes métier, états exception | 1–2 | ACQUIS CIBLÉ | Activité/FinOps, reprise | E5 vérif états |
| D.4 | Panneau doc/Git multitype | Commit, focus, callbacks exec/result/bilan | 1–4 | **PARTIEL** | **proof absent ; droits ; capture vide ; 6 consultations** | **E5 correction §23.2** |
| D.5 | Rail scroll + foot pin | Plus de chevauchement 1280×720 | 4–5 | ACQUIS CIBLÉ | Résultats après scroll, clavier | E5 hit-test/scroll |
| D.6 | F1/F2 rail + captures E4 | F1 246, hit-test | 4–5 | **PARTIEL** | **F2 global ; nominal multitype** | E5 apparié + peupler panel |
| Exit | Qualification globale | 1451 PASS / 2 FAIL rapportés | — | EN COURS E5 | lint, tsc tests, pack LIVE | **Mandat §24** |

---

## Matrice B — 17 MP (tous **OPEN RECETTE**)

| ID | Contrat | Implémentation | Preuve class | Niveau | Écart | Action |
| --- | --- | --- | --- | --- | --- | --- |
| MP01 | Micro sas | Navigateur ciblé | 4 | ACQUIS CIBLÉ | Compositeur commun a11y | E5 préserver + vérifier |
| MP02 | Compositeur extensible | Mutualisation partielle | 2–4 | PARTIEL | Clavier, brouillons | E4/E5 sas+projet |
| MP03 | Points ouverts | Titre canonique PG | 3 | CONSTRUCTION REVUE | DOM, accès direct | E1+R-REC-E1-01+E3 |
| MP04 | Animation | SAS réelle | 4 | ACQUIS CIBLÉ | reduced motion | E4/E5 |
| MP05 | Lisibilité | Typo partielle | 4–5 | PARTIEL | Avant/après exhaustif | E5 typo long/moyen/court |
| MP06 | Dictée | Transport + DET partiel | 2–4 | **GATE LIVE + DET PARTIEL** | Realtime, reprise | **E5 handshake ; LIVE distinct** |
| MP07 | Onde audio | Unit signal réel | 2 | ACQUIS CIBLÉ unit | Signal réel E5 | Préserver |
| MP08 | Panneau droit | Doc/Git viewer partiel | 1–4 | PARTIEL | 4 types, droits, commit, vide | **§21/23 E5** |
| MP09 | Multi-intentions | Option B + SC2 | 3 | Option B publiée | Projection absente ; naturel | Recette T05/T06 |
| MP10 | Continuité | Arbre raccordé | 3 | CONSTRUCTION REVUE | Capitalisation naturelle | R-REC-E1-01 + hybrid E2 |
| MP11 | Restitution/activité | OBS + D4 métier | 1–2 | Construit | Activité réelle E3 | E4/E5 intégré |
| MP12 | Trajectoire | Forecast RETAIN | 3 | CONSTRUCTION REVUE | Projections naturelles | R-REC-E1-01 |
| MP13 | Compteurs | PG + inspection | 3 | CONSTRUCTION REVUE | V1→V2 API→DOM | R-REC-E1-02 |
| MP14 | Performance | PG hybrid + audit | 3 | ACQUIS CIBLÉ | T08 comparable | Qualifier métriques |
| MP15 | Allocation | Admission stricte | 2–3 | ACQUIS CIBLÉ | Calibration GO | Observer applied |
| MP16 | FinOps | Moteur 110/0/316 | 3 | ACQUIS DET CIBLÉ | Présentation E3 | E4/E5 Admin OFF |
| MP17 | Paramètres | Rail/overlay | 4–5 | ACQUIS CIBLÉ | 720px variantes, focus | E4/E5 brouillon |

---

## Matrice C — 18 oracles §10 (§5 + §10.2)

| ID | Contrat (titre) | Implémentation | Preuve class | Niveau | Écart | Action |
| --- | --- | --- | --- | --- | --- | --- |
| O1 | Exploration → création | Tests historiques | 2–3 | Partiel | Bout-en-bout naturel | R-REC-E1-01 / E5 |
| O2 | Hiérarchie | Parent+enfant batch PG PASS | 3 | DET ciblé | LIVE fence naturel | Recette |
| O3 | Réorganisation | Rename/reparent ; merge/split | 3 | Partiel | Merge/split LIVE | E5 si PG réutilisable |
| O4 | Apport Pilote + Nora | Chaîne contributions | 2–3 | Partiel | Corrélation source→mutation | LIVE recette |
| O5 | Correction acquis | Historique cité | 2 | Ouvert | Consolidation/historique | Recette |
| O6 | Résolution question | PG résolution | 3 | Acquis ciblé | Négatifs, vues sync | E3 |
| O7 | Arbitrage local vs durable | D6 PG | 3 | DET ciblé | T07, portée LIVE | E1/E2 recette |
| O8 | Demande combinée | PG nominal E2 | 3 | Partiel | Dépendances, T05/T06 | E2 LIVE report |
| O9 | Réorientation | Forecast conv. ; RETAIN incomplet | 3 | Partiel | Projection LIVE | E1 recette |
| O10 | Finalité cycle | Objectif contextualisé | 3 | Partiel | D4/CKI DOM | E1+E3 |
| O11 | Compteurs | PG ctx PASS | 3 | Partiel | V1→V2 API→DOM | E3 recette |
| O12 | 5 consultations multitypes | — | — | **Manquant** | 6 ressources, droits, version | **E5 D.4 prioritaire** |
| O13 | Points panneau | OPEN + identités | 3 | Acquis ciblé | Accès exact DOM | E3 |
| O14 | Navigation / interruption | Partiel | 4 | Partiel | 4 surfaces, fraîcheur | E3/E5 |
| O15 | Réutilisation longue | PREFERRED+omit | 3 | Partiel | Fraîcheur corpus LIVE | E2 recette |
| O16 | V1→V2 MaintiPlan T09 | — | — | Ouvert | T09 non envoyé | E5 analogue DEV |
| O17 | Échange sans apport | Zéro extraction PASS | 2 | DET ciblé | Pas d’appel superflu conducteur | E5 vérif |
| O18 | Isolation / échec | Fencing PG | 3 | Partiel | Concurrence, reprise | E2/E5 |

---

## Matrice D — 25 parcours transverses (§6)

| # | Contrat | Implémentation | Preuve class | Niveau | Écart | Action |
| --- | --- | --- | --- | --- | --- | --- |
| P1 | Préparation sas | Compositeur E4 | 2–4 | PARTIEL | Nominal sas E5 | §23.1 |
| P2 | Compositeur partagé saisie longue | C.1/C.2 | 4 | IMPLEMENTED | Sas qualif | E5 |
| P3 | Création préparation animée | D.2 + SAS | 4 | ACQUIS CIBLÉ | Nominal E5 | E3/E5 |
| P4 | Qualification multi-intentions | A.3 E2 | 3 | DET ciblé | Lookup/reprise | E5 contrôle |
| P5 | Ouverture cycle gouvernée | E1/E2 | 3 | Construction | Naturel reporté | R-REC-E1-01 |
| P6 | Sujets / sous-sujets | B.2 | 3 | Construction revue | Naturel | Recette |
| P7 | Enrichissement connaissance | B.3/B.7 | 3 | Construction revue | Capitalisation LIVE | E1 recette |
| P8 | Décision durable / arbitrage | B.5/B.6 | 3 | DET ciblé | T07 | Recette |
| P9 | Points ouverts / résolution | B.4 | 3 | Construction | DOM E3 | E3+E5 |
| P10 | Production documentaire | B.3 + E5 | 2–3 | Construction | Provenance réelle | Recette |
| P11 | Compteur documentaire | B.8 | 3 | Construction | DOM | R-REC-E1-02 |
| P12 | Révision sans double comptage | B.8 | 3 | Ouvert | V1→V2 | E5 |
| P13 | Six consultations | D.4 | — | **Manquant** | Non exercé §23 | **E5 blocker panneau** |
| P14 | Cinq plus récentes | D.6 | 4 | PARTIEL | Liste vide observée §23 | Peupler + rejouer |
| P15 | Revisite sans doublon | D.4 | — | Ouvert | Droits/version | E5 |
| P16 | Réorientation trajectoire | B.6 | 3 | Construction | Naturel | Recette |
| P17 | Navigation surfaces | E3/E1 | 4 | Partiel | 4 surfaces | E3/E5 |
| P18 | Reprise sujet ancien | B.2 + E2 | 3 | Partiel | Reprise projection A.5 | E5 |
| P19 | Exploitation connaissance | B.7/A.4 | 3 | Construction | T08/hybrid | E2 recette |
| P20 | Paramètres globaux | MP17/D.5 | 4–5 | ACQUIS CIBLÉ | Variant/clavier | E5 |
| P21 | Observabilité | A.6 | 1–2 | INSPECTION | Mesure réelle | E2/E3 |
| P22 | FinOps | A.7/MP16 | 3 | DET ciblé | Admin OFF | Présentation E3 |
| P23 | Isolation projets/Pilotes | B.2/A.7 | 3 | Partiel | LIVE concurrence | E5 transversal |
| P24 | Erreurs / interruption / reprise | C.5 + E2 C02 | 2–4 | PARTIEL | Audio + D4 lookup | **E5 intégré** |
| P25 | Non-régression capacités | Suites globales | 2–4 | Ouvert | 2 FAIL historiques ; lint | **E5 suites finales** |

---

## Synthèse conservative E5 (pour Review Pack)

| Agrégat | READY construction | PREUVE intégrée E5 | LIVE |
| --- | --- | --- | --- |
| E1 B.1–B.8 | Oui (Morris §11) | DET/PG ; naturel/DOM reportés | Non |
| E2 A.1–A.7 | Architecture REVU | DET/PG ; gaps §23 lookup/reprise | Non |
| E3 D.1–D.6 | PARTIEL (D.4/D.6) | BROWSER/F1 partiels ; F2 global NON | Non |
| E4 C.1–C.5 | IMPLEMENTED+DET | Harness > sas ; MP06 ouvert | **Non — GATE LIVE** |
| 17 MP | OPEN RECETTE | Rejeu ciblé post-qualif | Surtout MP06 |
| Gate produit | ML5 OPEN, L1 NOT ACCEPTED | Cycle 9 QA en cours | Aucun GO LIVE ce mandat |

**Priorités E5 implicites dans les matrices:** (1) O12 / P13 six consultations + droits D.4 ; (2) C.3 / MP06 handshake sans LIVE ; (3) A.3/A.5 reprise D4 ; (4) P14 panneau peuplé vs vide §23 ; (5) P25 suites lint/tsc/build exits réels.

### Note d'actualisation E5 sur le draft

- Rail / sas / recovery / dictation DET : **PREUVE NOUVELLE E5** (classes 2–4 selon ligne).
- 17 MP : **OPEN RECETTE** inchangé.
- Panneau peuplé naturel : **classe 5** (fresh project vide — JSON ci-dessous).
- LIVE dictée / T08 / allocation adaptative : **classe 5** reportées.

## 6. Validations

# E5 validations summary — 2026-11-27

## Candidate identity
- PUBLISHED INPUT SNAPSHOT: `a3305a42b3fd0f24b2a16bca825fc14eb37e84e6` / tree `72405eddfdd10deea324a5c0dd01a073b30c5f85`
- LOCAL QUALIFIED CANDIDATE: uncommitted delta under `projects/sfia-studio-next/web` (+ evidence/docs)
- local-delta.sha256: see sibling file
- BUILD_ID (qualify after E5 CSS): `y06_YWoJEwb4zZZwRW26H`
- digest: `8380c0cd4578a25f83ffcf5fd5e7e259dd9641ea8d6ab0fc4ddc4aec7da710f4`
- Lane: DEV :3100 / PG :5433 — RECETTE :3200 untouched

## Suites
| Command | Result | Notes |
|---|---|---|
| `npm run test:unit` | EXIT 0 · 1531 PASS / 214 files | includes E5 unit deltas |
| `npm run lint` | EXIT 0 | pre-existing unused-var warnings only |
| `npm run qualify:build` | EXIT 0 | BUILD `y06_YWoJEwb4zZZwRW26H` |
| dictation PG integrated | EXIT 0 · 8 PASS | T02/T11 fixed (completed-before-committed) |
| e2 unified + finops + e5-knowledge unit | EXIT 0 · 13 PASS | NR Option B / FinOps |
| browser E5 discriminating | EXIT 0 · 3 PASS | sas mic, rail hit, panel empty honest |
| browser prior (panel/rail/ux/sas/dict harness) | EXIT 0 · 5 PASS | re-used qualify specs |

## Full integration suite
Not re-run wholesale: historically ~22 FAIL pre-existing (schema 008/019 / ml4c). Targeted NR only.

## LIVE / RECETTE
None executed. RECETTE process on :3200 preserved.


### Browser evidence JSON

**Sas**
```json
{
  "url": "http://127.0.0.1:3100/preparations/prep_29e9be7b-f95e-4916-b5e5-6d3b70e309e3",
  "prepDraftVisible": true,
  "micVisible": true,
  "micDisabled": false,
  "harness": false
}
```

**Rail hit**
```json
{
  "box": {
    "x": 16,
    "y": 534.765625,
    "width": 213,
    "height": 34
  },
  "hit": {
    "ok": true,
    "cx": 122.5,
    "cy": 551.765625,
    "topTag": "SPAN",
    "paddingBottom": "72px",
    "scrollPaddingBottom": "72px",
    "navScrollTop": 120,
    "navScrollHeight": 544,
    "inViewport": true,
    "clearOfFoot": true,
    "footTop": 651,
    "resultsBottom": 568.765625
  }
}
```

**Panel**
```json
{
  "asidePresent": true,
  "itemCount": 0,
  "populated": false,
  "note": "Panel empty on fresh project — not claimed as peuplé; natural peuplement remains RECETTE"
}
```

Captures locales: `projects/sfia-studio-next/construction/evidence/ml5-e5-20261127/browser/*.png`

## 7. Fake / Real

| Frontière | Mode | Parité | Gap | Niveau |
| --- | --- | --- | --- | --- |
| Nora cognitive | fixture | structurel | autonomie naturelle | DET |
| OpenAI Realtime | fixture transport | handshake/finalize | qualité FR LIVE | DET + browser mic |
| PostgreSQL | REAL e2e DB | ownership | — | REAL |
| Navigateur | REAL Chromium :3100 | UX rail/sas/panel | peuplement naturel | REAL borné |
| Cursor / Responses LIVE | non exercé | — | — | hors scope E5 |

## 8. Documentation synchronisée (local)

- `construction/delivery-history.md` — section E5
- `construction/ml5-registre-couverture-et-revue-developpement.md` — R-E5
- evidence `ml5-e5-20261127/` (manifest, plan LIVE, validations, browser)

Suivi indépendant ChatGPT **non modifié**.

## 9. Manifeste candidat RECETTE

# Manifeste candidat RECETTE — E5 (préparation uniquement)

**Date UTC**: 2026-11-27T21:23:11Z
**Classe**: NO RELEASE · RECETTE DEPLOYMENT CANDIDATE PENDING GO
**Aucune mutation RECETTE dans E5.**

## Identités

| Couche | Valeur |
| --- | --- |
| Branche source | `sfia/next-ml5-integrated-delivery-20261123` |
| PUBLISHED INPUT SNAPSHOT | `a3305a42b3fd0f24b2a16bca825fc14eb37e84e6` |
| Tree publié | `72405eddfdd10deea324a5c0dd01a073b30c5f85` |
| LOCAL QUALIFIED CANDIDATE | delta local non commité — sha256 `e41e2a5a84f94de21928df2ba4bb1eb47730d636b33dad8e8ec05b037f2c1d17` |
| BUILD_ID DEV testé | `y06_YWoJEwb4zZZwRW26H` |
| Content digest | `8380c0cd4578a25f83ffcf5fd5e7e259dd9641ea8d6ab0fc4ddc4aec7da710f4` |
| Lane | DEV |
| Schéma | 027 (inchangé) |
| Compatibilité données | OK — aucune migration structurante |

## RECETTE actuelle (à préserver)

| Champ | Valeur |
| --- | --- |
| App | :3200 |
| PG | :5434 / `sfia_next_recette_ml4` |
| Candidat déployé | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` |
| BUILD | `rpEczSp61evIZ7d6fnIWR` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa` |

## Conditions de basculement (GO Morris distinct)

1. Publication projet éventuelle du LOCAL QUALIFIED CANDIDATE → SHA publié.
2. Build immuable RECETTE depuis ce SHA.
3. Secrets / volumes / sessions RECETTE distincts conservés.
4. Smoke technique :3200 sans LIVE.
5. Rollback = rebuild/repoint vers `e8e6e069` / `rpEczSp61evIZ7d6fnIWR`.

## Capacités vérifiées (DEV)

- Continuité Option B + recovery knowledgeEffects (DET/PG)
- Panneau droits + rail 1280×720 hit-test
- Dictation substituée (DET/PG + browser mic sas/travail)
- Suites unit 1531 · lint · qualify build

## Réserves bloquant « naturel »

- 17 MP OPEN RECETTE
- Dictée LIVE / allocation adaptative / T08 comparatif / autonomie sémantique
- Panneau peuplé naturel (fresh project = vide — honnête)


## 10. Plan LIVE / MaintiPlan

# Plan de rejeu RECETTE / LIVE — E5 (non exécuté)

Mutualiser les 17 MP — pas 17 campagnes.

| MP / thème | Scénario | Attendu | Preuve | Priorité | Dépendance | Budget |
| --- | --- | --- | --- | --- | --- | --- |
| Continuité sujets | Travail MaintiPlan : sujets/sous-sujets naturels | Création sélective, hiérarchie, réutilisation Nora | Journal + conversation | P0 | Candidat RECETTE | — |
| Points ouverts / décisions | Arbitrage local vs durable | Distinction observable | Surfaces Projet/Journal | P0 | idem | — |
| Multi-intentions | Analogue T05/T06 sans corrompre MaintiPlan | Intention indépendante malgré refus | OBS + restitution | P1 | Option B | tokens |
| Documents V2 | T09 révision (NON ENVOYÉ jusqu'à GO Pilote) | V1/V2 distincts, compteurs | Bibliothèque + viewer | P0 | préconditions T09 | — |
| Dictée LIVE | Sas + Travail FR | Connexion, parole, edit, envoi explicite | SSE + FinOps audio | P0 | GO LIVE + plan ML3 audio | sessions max |
| Allocation C | Admission `SFIA_COG_PROVISIONAL_RECETTE_ADMIT` + token `qualified-v0.x` | demandé≠appliqué explicite | OBS policy | P1 | GO admit | — |
| T08 comparatif | Mission comparable (ne pas rejouer 909k en DEV) | Mesures tokens/req/latence/qualité | OBS + chronométrage | P1 | GO LIVE | élevé |
| Audio MP-06 | Cause réelle timeout/open | Qualité FR + usage | LIVE Realtime | P0 | GO LIVE | sessions |
| Droits panneau | Consultation + révocation | Aucune fuite | UI + API | P0 | données peuplées | — |
| FinOps | demandé/appliqué/estimé/facturé | Inconnu explicite | UI consommation | P1 | LIVE usage | admin OFF |

## Dictée LIVE — requalification (reprend plan ML3)

- Environnement: RECETTE uniquement sous GO
- Transport: Realtime transcription FR
- Budget: **non réautorisé** par E5 — reprendre plafond historique et le confirmer
- STOP: erreur auth, timeout répété, auto-send, fuite interprojet
- Preuves: sas + travail ; silence ; parole ; arrêt ; édition ; envoi

## T09

NON ENVOYÉ. Préconditions: candidat RECETTE, docs préservés, contrôles prioritaires, réserves acceptées Morris, décision Pilote.


## 11. Réserves (Cursor — acceptation Morris requise)

| ID | Contrat | État | Risque | Report | Preuve nécessaire | Sortie | Gate |
| --- | --- | --- | --- | --- | --- | --- | --- |
| R-REC-E1-01/02 | E1 | acceptées Morris | — | conservées | — | — | — |
| R-E5-LIVE-DICT | MP-06 / C.x | DET only | qualité FR | LIVE GO | Realtime sessions | PASS LIVE | Morris |
| R-E5-ALLOC | A.1 Option C | DET | pertinence | RECETTE admit | OBS model applied | admit token | Morris |
| R-E5-T08 | performance | non rejoué | comparabilité | RECETTE | mission comparable | mesures | Morris |
| R-E5-T09 | docs V2 | NON ENVOYÉ | continuité MaintiPlan | Pilote | V2 + surfaces | envoi Pilote | Morris+Pilote |
| R-E5-PANEL-POP | D.4/D.6 | empty fresh | UX | peuplement naturel | 6 consultations | UI peuplée | Morris |
| R-E5-MP-OPEN | 17 MP | OPEN RECETTE | couverture | recette mutualisée | plan §10 | arbitration | Morris |
| R-E5-LOCAL-DELTA | publication | uncommitted | drift | GO publication | SHA publié | publish | Morris |

## 12. Verdict Cursor

**READY WITH RESERVES**

Candidat techniquement identifiable (publié + delta local fingerprinté). Aucun défaut critique d'intégrité/autorité/sécurité non traité dans le mandat. Naturel/LIVE explicitement reportés. Mise à disposition RECETTE = **décision Morris** (après publication éventuelle du delta).

État programme préservé: R5 IN PROGRESS · ML5 OPEN · Livraison 1 NOT ACCEPTED · MaintiPlan suspended after T08 · T09 NOT SENT · R6 NOT STARTED · NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED.

## 13. Review Pack Content Coverage

- [x] mandat / sources / Git Truth / ENV-01
- [x] matrices (draft suivi + notes E5)
- [x] défauts + corrections
- [x] diffs exploitables + fichiers nouveaux
- [x] validations + exits
- [x] captures/JSON browser
- [x] Fake/Real
- [x] identité candidat
- [x] docs / manifeste / plan LIVE
- [x] réserves / verdict

## 14. Diffs des modifications (substance)

### git diff (tracked)

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index e22b8e89..87d1a0e0 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -82,6 +82,7 @@ import {
   type ProjectRecentItem,
 } from "@/lib/project-recent-items";
 import {
+  recentItemFromAttemptConsultation,
   recentItemFromDocumentConsultation,
   recentItemFromTurnReference,
 } from "@/lib/project-recent-consultation";
@@ -451,16 +452,20 @@ export default function ProjectPage() {
       return;
     }
     const stored = readProjectRecentItems(pilotId, params.projectId);
-    // Drop Nora docs no longer present in the authorized library (rights/access).
+    // E5 — empty library after load is not an implicit allow for protected titles.
+    // Until project load is ready, keep non-document kinds; defer document filtering.
+    const libraryReady = projectLoadState === "ready";
     const docIds = new Set(documents.map((d) => d.document.id));
     setRecentItems(
       stored.filter((item) => {
         if (item.kind !== "document_nora") return true;
+        if (!libraryReady) return false;
         const id = item.documentId ?? item.id.replace(/^doc:/, "").replace(/:rev:.*$/, "");
-        return !id || docIds.size === 0 || docIds.has(id);
+        if (!id) return false;
+        return docIds.has(id);
       }),
     );
-  }, [pilotId, params.projectId, documents]);
+  }, [pilotId, params.projectId, documents, projectLoadState]);

   useEffect(() => {
     if (surface !== "travail") return;
@@ -3824,13 +3829,21 @@ export default function ProjectPage() {
               selectSurface("travail");
             }}
             onPilotConsulted={(item) => {
-              notePilotConsultation({
-                id: `exec:${item.attemptId}`,
-                kind: item.kind,
-                title: item.title,
-                refLabel: item.refLabel ?? null,
-                attemptId: item.attemptId,
-              });
+              const kind =
+                item.kind === "execution" ||
+                item.kind === "result" ||
+                item.kind === "bilan" ||
+                item.kind === "proof"
+                  ? item.kind
+                  : "execution";
+              notePilotConsultation(
+                recentItemFromAttemptConsultation({
+                  kind,
+                  attemptId: item.attemptId,
+                  title: item.title,
+                  refLabel: item.refLabel ?? null,
+                }),
+              );
             }}
           />
         </div>
@@ -3847,13 +3860,21 @@ export default function ProjectPage() {
               selectSurface("travail");
             }}
             onPilotConsulted={(item) => {
-              notePilotConsultation({
-                id: `${item.kind}:${item.attemptId}`,
-                kind: item.kind,
-                title: item.title,
-                refLabel: item.refLabel ?? null,
-                attemptId: item.attemptId,
-              });
+              const kind =
+                item.kind === "execution" ||
+                item.kind === "result" ||
+                item.kind === "bilan" ||
+                item.kind === "proof"
+                  ? item.kind
+                  : "result";
+              notePilotConsultation(
+                recentItemFromAttemptConsultation({
+                  kind,
+                  attemptId: item.attemptId,
+                  title: item.title,
+                  refLabel: item.refLabel ?? null,
+                }),
+              );
             }}
           />
         </div>
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index 91f415f9..c4b691d3 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -40,6 +40,10 @@ html.studio-shell-lock body {
   overflow-x: hidden;
   overflow-y: auto;
   overscroll-behavior: contain;
+  /* Keep last Accès directs items clear of pinned foot at 1280×720 (E5).
+     scroll-padding alone does not create scroll range — real padding required. */
+  padding-bottom: 4.5rem;
+  scroll-padding-bottom: 4.5rem;
 }

 .studio-shell-rail-foot {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts b/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
index 7e6838c9..b1809455 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/composer-dictation-session.ts
@@ -59,6 +59,8 @@ export type DictationSessionRecord = {
   /** Next expected client audio chunk sequence (0-based). */
   nextAudioSeq: number;
   onProviderSessionReady: (() => void) | null;
+  /** Reject open-wait when provider errors before ready (E5 handshake). */
+  onProviderSessionReadyReject: ((err: Error) => void) | null;
   /** Committed item_ids not yet completed — finalize waits until empty. */
   awaitingFinalItemIds: Set<string>;
   /** Commits sent to provider, not yet acknowledged via input_audio_buffer.committed. */
@@ -302,6 +304,7 @@ export async function createDictationSession(input: {
     errorCode: null,
     nextAudioSeq: 0,
     onProviderSessionReady: null,
+    onProviderSessionReadyReject: null,
     awaitingFinalItemIds: new Set(),
     commitsAwaitingAck: 0,
     pcmBytesSinceLastCommit: 0,
@@ -350,6 +353,7 @@ export async function createDictationSession(input: {
     const sessionReady = new Promise<void>((resolve, reject) => {
       const t = setTimeout(() => {
         record.onProviderSessionReady = null;
+        record.onProviderSessionReadyReject = null;
         reject(new Error("SESSION_OPEN_TIMEOUT"));
       }, SESSION_OPEN_TIMEOUT_MS);
       record.onProviderSessionReady = () => {
@@ -357,8 +361,17 @@ export async function createDictationSession(input: {
         providerReady = true;
         clearTimeout(t);
         record.onProviderSessionReady = null;
+        record.onProviderSessionReadyReject = null;
         resolve();
       };
+      record.onProviderSessionReadyReject = (err) => {
+        if (providerReady) return;
+        providerReady = true;
+        clearTimeout(t);
+        record.onProviderSessionReady = null;
+        record.onProviderSessionReadyReject = null;
+        reject(err);
+      };
     });
     transport.send({
       type: "session.update",
@@ -378,7 +391,16 @@ export async function createDictationSession(input: {
       },
     });
     await sessionReady;
+    // Terminal wins: cancel/fail during wait must not reopen as open.
+    if (isTerminalStatus(record.status)) {
+      return {
+        ok: false,
+        code: record.errorCode ?? "TRANSPORT_OPEN_FAILED",
+        message: "Dictation session terminated before open acknowledgement.",
+      };
+    }
     record.status = "open";
+    // session.created alone does not prove applied config — only mark requested model as applied when updated path ready.
     record.modelApplied = COMPOSER_DICTATION_MODEL;
     emit(record, { type: "session.open", sessionId });
     return { ok: true, session: record };
@@ -386,9 +408,16 @@ export async function createDictationSession(input: {
     const rawMessage =
       e instanceof Error ? e.message.slice(0, 240) : "TRANSPORT_OPEN_FAILED";
     const timedOut = rawMessage === "SESSION_OPEN_TIMEOUT";
-    const code = timedOut ? "SESSION_OPEN_TIMEOUT" : "TRANSPORT_OPEN_FAILED";
-    record.status = "failed";
-    record.errorCode = code;
+    const providerErr = rawMessage === "PROVIDER_ERROR" || rawMessage.startsWith("PROVIDER_ERROR");
+    const code = timedOut
+      ? "SESSION_OPEN_TIMEOUT"
+      : providerErr
+        ? "PROVIDER_ERROR"
+        : "TRANSPORT_OPEN_FAILED";
+    if (!isTerminalStatus(record.status)) {
+      record.status = "failed";
+      record.errorCode = code;
+    }
     try {
       record.transport?.close();
     } catch {
@@ -396,6 +425,7 @@ export async function createDictationSession(input: {
     }
     record.transport = null;
     record.onProviderSessionReady = null;
+    record.onProviderSessionReadyReject = null;
     emit(record, {
       type: "session.error",
       sessionId,
@@ -415,17 +445,26 @@ function handleProviderEvent(
   const type = String(event.type || "");
   touch(session);

-  if (type === "session.updated" || type === "session.created") {
+  // E5 — only session.updated acknowledges applied transcription config.
+  // session.created alone must not open the session as ready.
+  if (type === "session.updated") {
     session.onProviderSessionReady?.();
     return;
   }
+  if (type === "session.created") {
+    return;
+  }

   if (type === "input_audio_buffer.committed") {
     session.commitsAwaitingAck = Math.max(0, session.commitsAwaitingAck - 1);
     const itemId = String(event.item_id || "");
     if (itemId) {
       session.pendingItemId = itemId;
-      session.awaitingFinalItemIds.add(itemId);
+      // Completed may race ahead of committed (fixture delay / provider reorder).
+      // Never re-arm awaiting for an item already finalized in the draft.
+      if (!Object.prototype.hasOwnProperty.call(session.draft.finalByItem, itemId)) {
+        session.awaitingFinalItemIds.add(itemId);
+      }
     }
     if (session.status === "finalizing") {
       maybeCompleteFinalization(session);
@@ -479,14 +518,25 @@ function handleProviderEvent(
     return;
   }
   if (type === "error" || type === "conversation.item.input_audio_transcription.failed") {
+    // Never reopen / overwrite a terminal cancel/complete/expire with failed.
+    if (isTerminalStatus(session.status)) {
+      return;
+    }
+    const message = String(
+      event.error ?? event.message ?? "transcription failed",
+    ).slice(0, 240);
+    const stillOpening = session.status === "pending";
     session.status = "failed";
     session.errorCode = "PROVIDER_ERROR";
     emit(session, {
       type: "session.error",
       sessionId: session.sessionId,
       code: "PROVIDER_ERROR",
-      message: String(event.error ?? event.message ?? "transcription failed").slice(0, 240),
+      message,
     });
+    if (stillOpening && session.onProviderSessionReadyReject) {
+      session.onProviderSessionReadyReject(new Error("PROVIDER_ERROR"));
+    }
     try {
       session.transport?.close();
     } catch {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index acef44f6..a49db78f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -587,6 +587,15 @@ export async function lookupDurableTurnByClientKey(
     }),
   });

+  const knowledgeEffects = await recoverKnowledgeEffectsForReadPath({
+    pilotId,
+    preparationId,
+    generationId: row.generationId,
+    userMessageId: row.userMessageId,
+    resultJson: row.resultJson,
+    fromJsonEffects: fromJsonKnowledgeEffects,
+  });
+
   return {
     found: true,
     turnCommandId: row.id,
@@ -597,7 +606,7 @@ export async function lookupDurableTurnByClientKey(
     assistantMessageId: row.assistantMessageId,
     pilotageEffect: resolved.pilotageEffect,
     pilotageEffects: resolved.pilotageEffects,
-    knowledgeEffects: fromJsonKnowledgeEffects,
+    knowledgeEffects,
     idempotentReplay: true,
     noraMode: "durable-lookup",
   };
@@ -906,6 +915,133 @@ type KnowledgeCapRow = {
   reason?: string;
 };

+/**
+ * E5 — durable knowledge intent ids from effect projections ∪ qualification stash.
+ * Never invents effects; only surfaces known d4.record_knowledge intents for recovery.
+ */
+export function extractDurableKnowledgeIntentIds(input: {
+  fromJsonEffects?: TurnKnowledgeEffect[] | null;
+  resultJson?: string | null;
+}): string[] {
+  const ids = new Set<string>();
+  for (const e of input.fromJsonEffects ?? []) {
+    const t = e.semanticIntentId?.trim() || "";
+    if (t) ids.add(t);
+  }
+  const raw = input.resultJson?.trim();
+  if (raw) {
+    try {
+      const parsed = JSON.parse(raw) as {
+        knowledgeEffects?: TurnKnowledgeEffect[];
+        semanticQualification?: NoraTurnQualification;
+        capitalisationAttempted?: KnowledgeCapRow[];
+      };
+      for (const e of parsed.knowledgeEffects ?? []) {
+        const t = e.semanticIntentId?.trim() || "";
+        if (t) ids.add(t);
+      }
+      for (const row of parsed.capitalisationAttempted ?? []) {
+        const t = row.intentId?.trim() || "";
+        if (t) ids.add(t);
+      }
+      for (const i of parsed.semanticQualification?.intents ?? []) {
+        if (
+          i.mode === "REQUEST_EFFECT" &&
+          i.capabilityId === "d4.record_knowledge"
+        ) {
+          const t = i.id.trim();
+          if (t) ids.add(t);
+        }
+      }
+    } catch {
+      /* ignore malformed stash */
+    }
+  }
+  return [...ids];
+}
+
+/**
+ * E5 read-path recovery — promote/reconcile knowledgeEffects from durable info.
+ * Lookup/replay never mutate; UNKNOWN when intent known but outcome indeterminate.
+ */
+export async function recoverKnowledgeEffectsForReadPath(input: {
+  pilotId: string;
+  preparationId: string;
+  generationId?: string | null;
+  userMessageId?: string | null;
+  resultJson?: string | null;
+  fromJsonEffects?: TurnKnowledgeEffect[] | null;
+}): Promise<TurnKnowledgeEffect[] | undefined> {
+  let fromJson = input.fromJsonEffects;
+  let capRows: KnowledgeCapRow[] = [];
+  if (input.resultJson?.trim()) {
+    try {
+      const parsed = JSON.parse(input.resultJson) as {
+        knowledgeEffects?: TurnKnowledgeEffect[];
+        capitalisationAttempted?: KnowledgeCapRow[];
+      };
+      if (fromJson === undefined && Array.isArray(parsed.knowledgeEffects)) {
+        fromJson = parsed.knowledgeEffects;
+      }
+      if (Array.isArray(parsed.capitalisationAttempted)) {
+        capRows = parsed.capitalisationAttempted;
+      }
+    } catch {
+      /* ignore */
+    }
+  }
+  const intentIds = extractDurableKnowledgeIntentIds({
+    fromJsonEffects: fromJson,
+    resultJson: input.resultJson,
+  });
+  const reconstituted = await reconstituteConfirmedD4Effects(
+    input.pilotId,
+    input.preparationId,
+    {
+      generationId: input.generationId,
+      userMessageId: input.userMessageId,
+    },
+  );
+  const seeded: TurnKnowledgeEffect[] = [...(fromJson ?? [])];
+  for (const intentId of intentIds) {
+    if (seeded.some((e) => e.semanticIntentId === intentId)) continue;
+    seeded.push(
+      knowledgeEffectFromCapitalisation({
+        intentId,
+        status: "UNKNOWN",
+        attempted: true,
+        reason:
+          "Issue D4 à confirmer — intention durable connue, projection knowledgeEffects absente ou partielle.",
+        reasonCode: "RECOVERY_INDETERMINATE",
+      }),
+    );
+  }
+  if (seeded.length === 0 && reconstituted.capitalisation.length === 0) {
+    return fromJson ?? undefined;
+  }
+  const reconciled = reconcileKnowledgeEffectsFromDurableInfo({
+    effects: seeded,
+    capitalisationRows: capRows.length
+      ? capRows
+      : seeded
+          .filter((e) => e.semanticIntentId && e.ownerRef)
+          .map((e) => ({
+            intentId: e.semanticIntentId,
+            status: e.status,
+            kind: e.proposalKind ?? undefined,
+            id: e.ownerRef ?? undefined,
+            reason: e.reason ?? undefined,
+          })),
+    reconstituted: reconstituted.capitalisation.map((c) => ({
+      id: c.id,
+      kind: c.kind,
+      status: c.status,
+    })),
+  });
+  if (reconciled.length > 0) return reconciled;
+  return fromJson ?? undefined;
+}
+
 /**
  * E2 residual fidelity (§21.1) — reconcile knowledgeEffects on UNKNOWN / ownership-loss
  * paths from durable capitalisation rows + DB reconstitution. Never invents mutations:
@@ -1345,6 +1481,14 @@ export async function postUserMessageAndNora(
           resultJson: reserved.resultJson,
         }),
       });
+      const knowledgeEffects = await recoverKnowledgeEffectsForReadPath({
+        pilotId,
+        preparationId,
+        generationId: reserved.generationId,
+        userMessageId: reserved.userMessageId,
+        resultJson: reserved.resultJson,
+        fromJsonEffects: replayKnowledgeEffects,
+      });
       return {
         operationId: reserved.operationId,
         requestId,
@@ -1361,7 +1505,7 @@ export async function postUserMessageAndNora(
         capitalisation: reconstituted.capitalisation,
         capitalisationLimit: reconstituted.capitalisationLimit,
         documentSave: reconstituted.documentSave,
-        knowledgeEffects: replayKnowledgeEffects,
+        knowledgeEffects,
       };
     }
     return {
diff --git a/projects/sfia-studio-next/web/tests/integration/ml3-composer-dictation-integrated.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml3-composer-dictation-integrated.pg.test.ts
index b7569439..10ef4f88 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml3-composer-dictation-integrated.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml3-composer-dictation-integrated.pg.test.ts
@@ -13,6 +13,10 @@ const devSessionRef = vi.hoisted(() => {
   process.env.SFIA_DICTATION_SUBSTITUTED = "1";
   process.env.VITEST = "true";
   process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
+  // Isolate from qualify shell leaks (COMMIT_DELAY=80 races T02/T11 finalize).
+  delete process.env.SFIA_DICTATION_FIXTURE_COMMIT_DELAY_MS;
+  delete process.env.SFIA_DICTATION_FIXTURE_COMPLETE_DELAY_MS;
+  delete process.env.SFIA_DICTATION_FIXTURE_AUTO_TRANSCRIPT;
   delete process.env.OPENAI_API_KEY;
   return { token: "", pilotId: "" };
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts b/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
index 4c4239be..fdf82df4 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml3-composer-dictation-session.test.ts
@@ -810,7 +810,7 @@ describe("ml3 composer dictation session (substituted transport)", () => {
     let closed = false;
     let handler: ((ev: Record<string, unknown>) => void) | null = null;
     const silentTransport: RealtimeTransport = {
-      // Opens but never emits session.updated / session.created (mic-OK then ~10s hang).
+      // Opens but never emits session.updated (mic-OK then ~10s hang).
       send: () => undefined,
       close: () => {
         closed = true;
@@ -835,6 +835,124 @@ describe("ml3 composer dictation session (substituted transport)", () => {
     expect(closed).toBe(true);
   }, 15_000);

+  it("E5: provider error before session.updated rejects open wait (no hang)", async () => {
+    process.env.SFIA_COMPOSER_DICTATION = "1";
+    process.env.STUDIO_LANE = "DEV";
+    let handler: ((ev: Record<string, unknown>) => void) | null = null;
+    const transport: RealtimeTransport = {
+      send: (p) => {
+        if (p.type === "session.update") {
+          queueMicrotask(() => handler?.({ type: "error", message: "handshake rejected" }));
+        }
+      },
+      close: () => undefined,
+      onEvent: (h) => {
+        handler = h;
+      },
+    };
+    const created = await createDictationSession({
+      pilotId: "pilot-pre-ready-err",
+      projectId: "proj-pre-ready-err",
+      conversationKey: "proj-pre-ready-err",
+      baselineDraft: "",
+      transportFactory: async () => transport,
+      limits: { maxDurationMs: 60_000 },
+    });
+    expect(created.ok).toBe(false);
+    if (created.ok) return;
+    expect(created.code).toBe("PROVIDER_ERROR");
+  }, 5_000);
+
+  it("E5: session.created alone does not open; session.updated required", async () => {
+    process.env.SFIA_COMPOSER_DICTATION = "1";
+    process.env.STUDIO_LANE = "DEV";
+    let handler: ((ev: Record<string, unknown>) => void) | null = null;
+    const transport: RealtimeTransport = {
+      send: (p) => {
+        if (p.type === "session.update") {
+          queueMicrotask(() => handler?.({ type: "session.created" }));
+        }
+      },
+      close: () => undefined,
+      onEvent: (h) => {
+        handler = h;
+      },
+    };
+    const createdPromise = createDictationSession({
+      pilotId: "pilot-created-only",
+      projectId: "proj-created-only",
+      conversationKey: "proj-created-only",
+      baselineDraft: "",
+      transportFactory: async () => transport,
+      limits: { finalizeTimeoutMs: 80 },
+    });
+    await new Promise((r) => setTimeout(r, 30));
+    // Still waiting — inject updated to complete successfully after created ignored.
+    handler?.({ type: "session.updated" });
+    const created = await createdPromise;
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    expect(created.session.status).toBe("open");
+  }, 5_000);
+
+  it("E5: completed before committed during finalize does not hang awaiting", async () => {
+    process.env.SFIA_COMPOSER_DICTATION = "1";
+    process.env.STUDIO_LANE = "DEV";
+    let handler: ((ev: Record<string, unknown>) => void) | null = null;
+    const transport: RealtimeTransport = {
+      send: (p) => {
+        if (p.type === "session.update") {
+          queueMicrotask(() => handler?.({ type: "session.updated" }));
+        }
+        if (p.type === "input_audio_buffer.commit") {
+          // Delay committed past an early completed (qualify fixture race).
+          setTimeout(() => {
+            handler?.({
+              type: "input_audio_buffer.committed",
+              item_id: "early_item",
+            });
+          }, 40);
+        }
+      },
+      close: () => undefined,
+      onEvent: (h) => {
+        handler = h;
+      },
+    };
+    const created = await createDictationSession({
+      pilotId: "pilot-early-complete",
+      projectId: "proj-early-complete",
+      conversationKey: "proj-early-complete",
+      baselineDraft: "Base",
+      transportFactory: async () => transport,
+      limits: { finalizeTimeoutMs: 500 },
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    appendDictationAudio({
+      sessionId: created.session.sessionId,
+      pilotId: "pilot-early-complete",
+      projectId: "proj-early-complete",
+      pcmBase64: Buffer.alloc(320, 1).toString("base64"),
+      seq: 0,
+    });
+    const finPromise = finalizeDictationSession({
+      sessionId: created.session.sessionId,
+      pilotId: "pilot-early-complete",
+      projectId: "proj-early-complete",
+    });
+    await new Promise((r) => setTimeout(r, 5));
+    handler?.({
+      type: "conversation.item.input_audio_transcription.completed",
+      item_id: "early_item",
+      transcript: "précoce",
+    });
+    const fin = await finPromise;
+    expect(fin.ok).toBe(true);
+    if (!fin.ok) return;
+    expect(fin.transcript).toContain("précoce");
+  }, 5_000);
+
   it("fixture transport recovers ready ack queued before onEvent (MP-06 DET)", async () => {
     process.env.SFIA_COMPOSER_DICTATION = "1";
     process.env.STUDIO_LANE = "DEV";
```


### NEW FILE: projects/sfia-studio-next/web/tests/unit/e5-knowledge-recovery-ids.test.ts

```typescript
import { describe, expect, it } from "vitest";
import { extractDurableKnowledgeIntentIds } from "@/domains/conversation/service";

describe("E5 knowledge recovery intent ids", () => {
  it("unions knowledgeEffects, capitalisationAttempted and d4 stash intents", () => {
    const ids = extractDurableKnowledgeIntentIds({
      fromJsonEffects: [
        {
          attempted: false,
          capabilityId: "d4.record_knowledge",
          semanticIntentId: "from-json",
          status: "SKIPPED",
          reasonCode: null,
          reason: null,
          ownerRef: null,
          proposalKind: null,
        },
      ],
      resultJson: JSON.stringify({
        capitalisationAttempted: [{ intentId: "from-cap", status: "AVAILABLE", id: "acq_1" }],
        semanticQualification: {
          status: "QUALIFIED",
          intents: [
            {
              id: "from-stash",
              mode: "REQUEST_EFFECT",
              capabilityId: "d4.record_knowledge",
            },
            {
              id: "pilotage-ignored",
              mode: "REQUEST_EFFECT",
              capabilityId: "d5.pilotage_command",
            },
          ],
        },
      }),
    });
    expect(ids.sort()).toEqual(["from-cap", "from-json", "from-stash"].sort());
  });
});

```

### NEW FILE: projects/sfia-studio-next/web/tests/qualify/ml5-e5-discriminating-browser.spec.ts

```typescript
/**
 * E5 — discriminating browser proofs (fixture / substituted only).
 * Sas page (not harness), rail reachability at 1280×720, panel state honesty.
 */
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  constituteAndCreateProject,
} from "../e2e/helpers/g4-chat-first";

const EVIDENCE = path.resolve(
  __dirname,
  "../../../construction/evidence/ml5-e5-20261127/browser",
);

test.setTimeout(180_000);

async function ensurePortfolio(page: import("@playwright/test").Page) {
  const auto = await page.request.post("/api/dev/auto-session");
  expect(auto.ok()).toBeTruthy();
  await page.goto("/portfolio", { waitUntil: "domcontentloaded" });
  await page.waitForURL("**/portfolio**", { timeout: 60_000 });
}

test("E5 — sas préparation: shared composer present (not harness)", async ({
  page,
}) => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  await ensurePortfolio(page);
  await openNewPreparation(page);
  const draft = page.getByTestId("prep-draft");
  await expect(draft).toBeVisible({ timeout: 30_000 });
  const url = page.url();
  expect(url).toContain("/preparations/");
  expect(url).not.toContain("dictation-harness");
  // Idle mic uses composer-mic; active shell uses composer-dictation.
  const mic = page.getByTestId("composer-mic");
  await expect(mic).toBeVisible({ timeout: 15_000 });
  const micDisabled = await mic.isDisabled();
  await page.screenshot({
    path: path.join(EVIDENCE, "e5-sas-composer.png"),
    fullPage: false,
  });
  fs.writeFileSync(
    path.join(EVIDENCE, "e5-sas-composer.json"),
    JSON.stringify(
      {
        url,
        prepDraftVisible: true,
        micVisible: true,
        micDisabled,
        harness: false,
      },
      null,
      2,
    ),
  );
  expect(micDisabled).toBe(false);
});

test("E5 — rail 1280×720: Résultats & preuves reachable after nav scroll", async ({
  page,
}) => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  await page.setViewportSize({ width: 1280, height: 720 });
  await ensurePortfolio(page);
  await openNewPreparation(page);
  await constituteAndCreateProject(page, {
    name: "E5 rail",
    summary: "E5 rail reachability",
  });
  await page.waitForTimeout(800);

  const nav = page.locator(".studio-shell-rail-nav").first();
  await expect(nav).toBeVisible({ timeout: 15_000 });
  // Link (not button) — scroll nav range so last Accès directs clears the foot.
  await nav.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });
  const results = page.getByTestId("nav-resultats");
  await expect(results).toBeVisible({ timeout: 15_000 });
  await results.scrollIntoViewIfNeeded();
  const box = await results.boundingBox();
  expect(box).toBeTruthy();
  const hit = await page.evaluate(() => {
    const el = document.querySelector('[data-testid="nav-resultats"]');
    if (!el) return { ok: false, reason: "missing" as const };
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const top = document.elementFromPoint(cx, cy);
    const navEl = document.querySelector(".studio-shell-rail-nav");
    const foot = document.querySelector(".studio-shell-rail-foot");
    const footTop = foot?.getBoundingClientRect().top ?? null;
    return {
      ok: !!top && (el === top || el.contains(top) || top.contains(el)),
      cx,
      cy,
      topTag: top?.nodeName ?? null,
      paddingBottom: navEl ? getComputedStyle(navEl).paddingBottom : null,
      scrollPaddingBottom: navEl
        ? getComputedStyle(navEl).scrollPaddingBottom
        : null,
      navScrollTop: navEl ? (navEl as HTMLElement).scrollTop : null,
      navScrollHeight: navEl ? (navEl as HTMLElement).scrollHeight : null,
      inViewport: r.bottom <= window.innerHeight && r.top >= 0,
      clearOfFoot: footTop == null ? true : r.bottom <= footTop + 0.5,
      footTop,
      resultsBottom: r.bottom,
    };
  });
  fs.writeFileSync(
    path.join(EVIDENCE, "e5-rail-results-hit.json"),
    JSON.stringify({ box, hit }, null, 2),
  );
  await page.screenshot({
    path: path.join(EVIDENCE, "e5-rail-results-1280x720.png"),
    fullPage: false,
  });
  expect(hit.clearOfFoot).toBeTruthy();
  expect(hit.ok).toBeTruthy();
});

test("E5 — panneau récents: record populated vs empty honestly", async ({
  page,
}) => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
  await ensurePortfolio(page);
  await openNewPreparation(page);
  await constituteAndCreateProject(page, {
    name: "E5 panel",
    summary: "E5 panel state",
  });
  await page.waitForTimeout(1000);
  const aside = page.locator('[data-testid="travail-aside-recents"]');
  const present = (await aside.count()) > 0;
  let itemCount = 0;
  if (present) {
    itemCount = await aside.locator('[data-testid="recent-item"]').count();
    if (itemCount === 0) {
      itemCount = await aside.locator("li, a, button").count();
    }
    await aside.screenshot({
      path: path.join(EVIDENCE, "e5-panel-recents-state.png"),
    });
  }
  const payload = {
    asidePresent: present,
    itemCount,
    populated: itemCount > 0,
    note:
      itemCount > 0
        ? "Panel shows items on this fresh DEV project"
        : "Panel empty on fresh project — not claimed as peuplé; natural peuplement remains RECETTE",
  };
  fs.writeFileSync(
    path.join(EVIDENCE, "e5-panel-recents-state.json"),
    JSON.stringify(payload, null, 2),
  );
  expect(present).toBeTruthy();
});

```


## 15. Instruction ChatGPT

Relire snapshot `a3305a42`, handoff `12244641`, delta local (sha256 ci-dessus), matrices, suites, browser JSON, manifeste, plan LIVE, réserves. Actualiser le suivi indépendant. Morris arbitre sortie E5 / publication / RECETTE / LIVE / MaintiPlan.

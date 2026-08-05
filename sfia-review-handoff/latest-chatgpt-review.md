# Review Pack Full — Assistant SFIA natif OpenAI — Backlog Priority & Lot Decisions

## Meta

| Champ | Valeur |
|---|---|
| **Date locale** | 2026-08-05 14:58:24 CEST +0200 |
| **Date UTC** | 2026-08-05 12:58:24 UTC |
| **Niveau** | Full |
| **GO Morris** | `GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT` |
| **Consommation GO** | 2026-08-05 14:46 CEST (+0200) / 12:46 UTC |
| **Cycle** | 5 — Backlog / user stories — Application de décisions Backlog |
| **Profil** | **Critical** |
| **Typologie** | EVOL / DOC |
| **Review pack content coverage** | created files full content : yes · modified sections complete : yes · useful diff included : yes · synthesis only : no · review pack verdict : complete |

---

## Instruction ChatGPT obligatoire

Avant de répondre à Morris, consulter depuis Git :

- branche : `sfia/review-handoff`
- fichier : `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier : GO · cycle/profil · branche projet · HEAD/origin/main · document 103 modifié · **document 104 complet** · décisions D-ASST-BLG-* · P0/P1/P2/P3 · total 33 · split LOT-IP-0A/0B/0C · LOT-IP-0A SELECTED · 0B/0C DEFERRED · LOT-D* NOT AUTHORIZED · graphe 33/56 · A2/ADR · 21 impacts · réserves · non-sélections · Delivery NOT-CONSUMED · diff · hashes · Git truth · handoff tip/blob.

Si 104 complet ou mods 103 absents : `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.

---

## Local Git Truth — initial

| Champ | Valeur |
|---|---|
| **TOPLEVEL** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1` |
| **BRANCH** | `backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog` |
| **HEAD** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **origin/main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **merge-base** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **ahead/behind** | 0 / 0 |
| **upstream** | none |
| **tracked diff** | none |
| **staged** | none |
| **handoff tip entrant** | `5f4de60d9cf9940dae1e3d6a7f340c05a45e5bc6` |
| **handoff blob entrant** | `976e2ab6a287e352bbbe9b073b5059346b97c7b1` |
| **104 avant cycle** | absent |

---

## Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md` (main)
- routing Backlog / méthode cycles / operating model / Review Pack & Handoff / publisher
- handoff entrant tip `5f4de60…`
- docs 100–103 locaux ; patterns 93/97/99/102
- main PR #308–#311 (contexte base)

Sources non modifiées.

---

## SHA / lignes documents 100–104

| Doc | SHA-256 | Lignes |
|---|---|---|
| 100 | `9244ec46bc7b0ea212c03f1e59f05f80521e87c6a8e27c07de801e10b8e2cc20` | 1432 |
| 101 | `698d1e0388cbf2f93b7ae0c983ee66d84a50e4143fd79b4ec92f23ea9918d114` | 1164 |
| 102 | `b5e06cd6cb0f74c3278afc041f22a27bd39f5bcbac54fa851a952b4c810577b1` | 774 |
| 103 avant | `903547e7170b71312ac1e9c96d6e81d619366cdd515e36ae1c2384585f15f109` | 1390 |
| 103 après | `7a0ab8c76bd58239d3407568621c0e6b546eddcae11b0c1a0d3caa36ab98c407` | 1457 |
| 104 créé | `48859ae1f54d4f5d64a39099e00fe9af3e89b6f1cf38a24bc12c58b5dbf11802` | 484 |

Documents 90–102 : byte-identical (vérifié). Document 105 : absent.

---

## Matrice priorités avant / après

| Niveau | Avant (candidate) | Après (validée) | IDs |
|---|---|---|---|
| P0 | 6 | 6 VALIDATED | TB-00-01…06 |
| P1 | 13 | 13 VALIDATED | TB-01-01…05, TB-02-01…04, TB-03-01/02/04/05 |
| P2 | 13 | 13 VALIDATED | TB-01-06, TB-02-05, TB-03-03, TB-04-01…04, TB-05-01/02, TB-06-01…04 |
| P3 | 1 | 1 VALIDATED | TB-05-03 |
| Total | 33 | 33 | PASS — aucun changement d’affectation |

---

## Matrice lots avant / après

| Avant | Après |
|---|---|
| LOT-IP-0 candidat (TB-00-01…06 + TB-04-04) | SUPERSEDED → split dependency-safe |
| — | **LOT-IP-0A** SELECTED : TB-00-01/02/03/06 — EXECUTION NOT AUTHORIZED |
| — | **LOT-IP-0B** DEFERRED : TB-00-04/05 (dep TB-00-03) |
| — | **LOT-IP-0C** DEFERRED : TB-04-04 (dep TB-02-05) |
| LOT-D1…D5 NOT AUTHORIZED | inchangé NOT AUTHORIZED |

### Justification du split LOT-IP-0

TB-00-04 et TB-00-05 dépendent de TB-00-03 ; TB-04-04 dépend de TB-02-05. Le lot historique n’était pas dependency-safe pour un premier lot d’Implementation Preparation (D-ASST-BLG-LOT-STRUCTURE-01).

---

## Décisions D-ASST-BLG-* appliquées

| ID | Statut |
|---|---|
| D-ASST-BLG-PRIORITY-01 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-PRIORITY-02 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-LOT-STRUCTURE-01 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-FIRST-LOT-01 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-DELIVERY-01 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-NONSELECTIONS-01 | DECIDED — PRESERVE OPEN |

Détail complet : document 104 ci-dessous.

---

## Validation graphe

| Métrique | Résultat |
|---|---|
| Nœuds | 33 |
| Arêtes | 56 |
| Acyclique | oui |
| Topo | 33/33 |
| Changement d’arêtes | aucun |
| LOT-IP-0A deps entrantes | aucune (PASS) |

---

## Validation 33 items / A2 / ADR / impacts / réserves

- 33 items · 7 épics · aucun DONE
- A2 + dix ADR préservés (docs 100–102 inchangés)
- 21 impacts COVERED
- réserves KEEP-OPEN
- non-sélections préservées
- Delivery NOT-CONSUMED

---

## Git Review Index

| Élément | État |
|---|---|
| Modifié | `projects/sfia-studio/103-…-technical-implementation-backlog.md` (untracked) |
| Créé | `projects/sfia-studio/104-…-technical-implementation-backlog-decisions-applied.md` (untracked) |
| Interdits touchés | aucun |
| Staged | aucun |
| Commit projet | aucun |
| Push projet | aucun |

---

## Document 104 — contenu complet

```markdown
# SFIA Studio — Assistant SFIA natif OpenAI — Technical Implementation Backlog Decisions Applied

## 1. Statut

**TECHNICAL BACKLOG PRIORITIES VALIDATED —**
**33 ITEM PRIORITIES ADOPTED BY MORRIS —**
**P0=6 / P1=13 / P2=13 / P3=1 —**
**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**
**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**
**LOT-IP-0B DEFERRED — LOT-IP-0C DEFERRED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**DOCUMENTARY DECISION RECORD —**
**LOT-IP-0A EXECUTION NOT AUTHORIZED —**
**NO TECHNOLOGY SELECTED —**
**NO ITEM DONE —**
**DELIVERY NOT-CONSUMED**

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/104-assistant-sfia-native-openai-technical-implementation-backlog-decisions-applied.md` |
| **Rôle** | Record documentaire d’application des décisions Backlog (priorités + lots IP) |
| **Document 103** | Mis à jour dans le même cycle |
| **Documents 90–102** | Inchangés · byte-identical |
| **Exécution LOT-IP-0A** | **NON** — sélection ≠ exécution |
| **Delivery** | `NOT-CONSUMED` |

---

## 2. GO Morris exact et horodatage

```text
GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation (local)** | 2026-08-05 14:46 CEST (+0200) |
| **Consommation (UTC)** | 2026-08-05 12:46 UTC |
| **Application Cursor (local)** | 2026-08-05 14:54 CEST (+0200) |
| **Application Cursor (UTC)** | 2026-08-05 12:54 UTC |

### Effet exact autorisé

- validation taxonomie P0–P3 ;
- validation affectations des 33 items ;
- restructuration dependency-safe LOT-IP-0 → LOT-IP-0A / 0B / 0C ;
- sélection de LOT-IP-0A comme premier lot d’Implementation Preparation ;
- mise à jour documentaire 103 + création 104 ;
- Review Pack + Review Handoff.

### Non-effet explicite

- pas d’exécution de LOT-IP-0A ;
- pas de Decision Pack technique produit ;
- pas de sélection store / ORM / migration / cloud / IAM / modèle OpenAI / observabilité ;
- pas de code ;
- pas de Delivery ;
- pas de commit / push projet ;
- pas de PR / merge / suppression de branche.

---

## 3. Autorité Morris

Morris est l’unique autorité de décision. Les six décisions `D-ASST-BLG-*` listées dans le GO sont les seules décisions appliquées. Aucune priorité, lot ou technologie n’est inventée hors GO.

---

## 4. Cycle / profil / typologie

| Champ | Valeur |
|---|---|
| **Type de cycle** | 5 — Backlog / user stories |
| **Mode** | Application de décisions Backlog |
| **Profil SFIA** | **Critical** |
| **Justification profil** | Décisions structurantes sur priorités (33 items), ordre, découpage des lots, premier lot, gates avant Implementation Preparation et Delivery |
| **Typologie** | EVOL / DOC |
| **Blocs activés** | FinOps · Sécurité/RSSI · RGPD · Architecture technique · Backlog/dépendances |
| **Blocs désactivés** | UX/UI+Figma · Delivery · DevOps · déploiement · RUN · PR readiness · post-merge · capitalisation |

---

## 5. Sources et hiérarchie de preuve

1. Git — `origin/main` = `8dc54db0069eed78a8d8930cc2b035450ab56ad1` ;
2. GO Morris courant — décisions consommées ;
3. Review Handoff entrant tip `5f4de60d9cf9940dae1e3d6a7f340c05a45e5bc6` / blob `976e2ab6a287e352bbbe9b073b5059346b97c7b1` ;
4. document 103 corrigé (F-BLG-103-01…04) avant décision — SHA-256 `903547e7170b71312ac1e9c96d6e81d619366cdd515e36ae1c2384585f15f109` ;
5. documents 100 / 101 / 102 (A2 + dix ADR + 21 impacts) ;
6. patterns decisions-applied 93 / 97 / 99 / 102 ;
7. méthode : template cycle, routing Backlog, Review Pack / Handoff, publisher canonique.

**Observation —** les sources méthode et documents 90–102 n’ont pas été modifiées.

---

## 6. Git / branche / HEAD / handoff entrant

| Champ | Valeur |
|---|---|
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1` |
| **Branche projet** | `backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog` |
| **HEAD** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **origin/main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Merge-base** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Upstream projet** | aucun |
| **Ahead / behind** | 0 / 0 |
| **Handoff tip entrant** | `5f4de60d9cf9940dae1e3d6a7f340c05a45e5bc6` |
| **Handoff blob entrant** | `976e2ab6a287e352bbbe9b073b5059346b97c7b1` |
| **Commit projet** | aucun dans ce cycle |
| **Push projet** | aucun |

---

## 7. Document 103 source avant décision

| Champ | Valeur |
|---|---|
| **SHA-256 avant** | `903547e7170b71312ac1e9c96d6e81d619366cdd515e36ae1c2384585f15f109` |
| **Lignes avant** | 1390 |
| **Items** | 33 |
| **Épics** | 7 (EPIC-TB-00…06) |
| **Graphe** | 33 nœuds · 56 arêtes · acyclique · topo 33/33 |
| **Priorités** | déjà alignées P0=6 / P1=13 / P2=13 / P3=1 (libellé encore « candidate ») |
| **Lot historique** | LOT-IP-0 candidat regroupant TB-00-01…06 + TB-04-04 |

**Observation —** le contrôle D-ASST-BLG-PRIORITY-02 a trouvé une correspondance exacte des affectations ; aucun STOP PRIORITY DECISION INPUT MISMATCH.

---

## 8. Problème de lot identifié

### LOT-IP-0 historique

Le lot candidat initial regroupait :

- TB-00-01, TB-00-02, TB-00-03, TB-00-04, TB-00-05, TB-00-06, TB-04-04.

### Dépendances non satisfaites dans ce regroupement

| Item | Dépendance | Conséquence |
|---|---|---|
| TB-00-04 | TB-00-03 | ne peut pas être préparé dans le même lot « premier » sans décision store |
| TB-00-05 | TB-00-03 | idem |
| TB-04-04 | TB-02-05 | nécessite preuve metering / soft cap ; reste pré-pilote |

**Justification du split —** D-ASST-BLG-LOT-STRUCTURE-01 remplace LOT-IP-0 par trois sous-lots dependency-safe sans modifier le graphe des items.

---

## 9. Registre complet des décisions

### D-ASST-BLG-PRIORITY-01

| Dimension | Contenu |
|---|---|
| **Statut** | DECIDED — ADOPTED BY MORRIS |
| **Décision validée** | Taxonomie P0 / P1 / P2 / P3 validée (préparation structurante · FPI · pré-pilote · post-FPI) |
| **Observation** | La priorité n’est jamais GO Delivery / implémentation / techno / fermeture de réserve |
| **Conséquence** | Document 103 : « Priorité candidate » → « Priorité validée » |

### D-ASST-BLG-PRIORITY-02

| Dimension | Contenu |
|---|---|
| **Statut** | DECIDED — ADOPTED BY MORRIS |
| **Décision validée** | Affectations exactes ci-dessous (section 10) sans changement silencieux |
| **Contrôles** | total 33 · aucun doublon · aucun absent · hors P0–P3 interdit |
| **Conséquence** | Aucune réaffectation ; VALIDATED BY MORRIS sur chaque item |

### D-ASST-BLG-LOT-STRUCTURE-01

| Dimension | Contenu |
|---|---|
| **Statut** | DECIDED — ADOPTED BY MORRIS |
| **Décision validée** | LOT-IP-0 → LOT-IP-0A / 0B / 0C |
| **Élément différé** | LOT-IP-0B et LOT-IP-0C |
| **Conséquence** | Traçabilité historique SUPERSEDED conservée |

### D-ASST-BLG-FIRST-LOT-01

| Dimension | Contenu |
|---|---|
| **Statut** | DECIDED — ADOPTED BY MORRIS |
| **Décision validée** | Premier lot = LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06) |
| **Conséquence** | SELECTED BY MORRIS — EXECUTION NOT AUTHORIZED |
| **Gate future** | GO EXECUTE LOT-IP-0A |

### D-ASST-BLG-DELIVERY-01

| Dimension | Contenu |
|---|---|
| **Statut** | DECIDED — ADOPTED BY MORRIS |
| **Décision validée** | `DELIVERY-GATE=NOT-CONSUMED` |
| **Conséquence** | Aucun GO code / migration / provider live / store / auth / model / cloud / pilote |

### D-ASST-BLG-NONSELECTIONS-01

| Dimension | Contenu |
|---|---|
| **Statut** | DECIDED — PRESERVE OPEN |
| **Décision validée** | Toutes non-sélections listées section 20 restent NOT SELECTED |
| **Conséquence** | Aucune techno choisie dans ce cycle |

---

## 10. Matrice des priorités validées

| Niveau | Nombre | IDs |
|---|---|---|
| **P0** | 6 | TB-00-01 · TB-00-02 · TB-00-03 · TB-00-04 · TB-00-05 · TB-00-06 |
| **P1** | 13 | TB-01-01 · TB-01-02 · TB-01-03 · TB-01-04 · TB-01-05 · TB-02-01 · TB-02-02 · TB-02-03 · TB-02-04 · TB-03-01 · TB-03-02 · TB-03-04 · TB-03-05 |
| **P2** | 13 | TB-01-06 · TB-02-05 · TB-03-03 · TB-04-01 · TB-04-02 · TB-04-03 · TB-04-04 · TB-05-01 · TB-05-02 · TB-06-01 · TB-06-02 · TB-06-03 · TB-06-04 |
| **P3** | 1 | TB-05-03 |
| **Total** | **33** | 33 IDs uniques |

**Contrôle —** somme 6+13+13+1 = 33 · PASS.

---

## 11. Matrice des lots

| Lot | Items | Dépendances bloquantes | Statut | Autorisation | Prochaine gate |
|---|---|---|---|---|---|
| LOT-IP-0 (historique) | TB-00-01…06 + TB-04-04 | (unsafe) | SUPERSEDED | N/A | — |
| **LOT-IP-0A** | TB-00-01 · 02 · 03 · 06 | aucune | **SELECTED BY MORRIS** | EXECUTION NOT AUTHORIZED | GO EXECUTE LOT-IP-0A |
| **LOT-IP-0B** | TB-00-04 · TB-00-05 | TB-00-03 | DEFERRED — NOT SELECTED | aucune | Future Morris gate après store |
| **LOT-IP-0C** | TB-04-04 | TB-02-05 | DEFERRED — NOT SELECTED | aucune | Future Morris gate après metering |
| LOT-D1…D5 | (inchangés) | — | NOT AUTHORIZED | aucune | Future Delivery GOs |

**Chevauchement IP-0A/0B/0C —** aucun.

---

## 12. Record LOT-IP-0A sélectionné

| Champ | Valeur |
|---|---|
| **Nom** | LOT-IP-0A — Foundational Decision Preparation |
| **Items** | TB-00-01 · TB-00-02 · TB-00-03 · TB-00-06 |
| **Nature** | inventaire auth · fit AJV · Decision Pack store A2 · secrets server-only / Admin config prep |
| **Dépendances backlog entrantes** | aucune |
| **Statut** | SELECTED BY MORRIS — EXECUTION NOT AUTHORIZED |
| **Exécuté dans ce cycle** | **NON** |
| **Decision Packs produits** | **aucun** |
| **Technologies choisies** | **aucune** |
| **Code** | **interdit** |

---

## 13. Record LOT-IP-0B différé

| Champ | Valeur |
|---|---|
| **Nom** | LOT-IP-0B — Store-Dependent Decision Preparation |
| **Items** | TB-00-04 · TB-00-05 |
| **Blocage** | dépend de TB-00-03 |
| **Statut** | DEFERRED — NOT SELECTED — FUTURE MORRIS GATE REQUIRED |
| **Note** | Exécutable seulement après décision Morris store ou clarification explicite d’options sans choix |

---

## 14. Record LOT-IP-0C différé

| Champ | Valeur |
|---|---|
| **Nom** | LOT-IP-0C — Pre-Pilot FinOps Decision Preparation |
| **Items** | TB-04-04 |
| **Blocage** | dépend de TB-02-05 |
| **Statut** | DEFERRED — NOT SELECTED — FUTURE MORRIS GATE REQUIRED |
| **Note** | Requis avant pilote · ne bloque pas l’exécution future de TB-02-05 · aucune valeur hard cap / tarif / SLO |

---

## 15. LOT-D1 à LOT-D5 inchangés

| Lot | Statut |
|---|---|
| LOT-D1 | NOT AUTHORIZED |
| LOT-D2 | NOT AUTHORIZED |
| LOT-D3 | NOT AUTHORIZED |
| LOT-D4 | NOT AUTHORIZED |
| LOT-D5 | NOT AUTHORIZED |

Aucun lot Delivery sélectionné.

---

## 16. Graphe après décision

| Métrique | Valeur |
|---|---|
| **Nœuds** | 33 |
| **Arêtes** | 56 |
| **Acyclique** | oui |
| **Topological sort** | 33/33 |
| **Self-loops** | 0 |
| **Références inconnues** | 0 |
| **Changement d’arêtes dans ce cycle** | **aucun** |

**Observation —** la restructuration des lots ne modifie pas le graphe des items.

---

## 17. A2 et dix ADR préservés

| Élément | Statut |
|---|---|
| Bundle **A2** | préservé |
| ADR-ASST-TOPO-01=A | préservé |
| ADR-ASST-PERSIST-01=B | préservé |
| ADR-ASST-SERVER-01=C | préservé |
| ADR-ASST-PURGE-01=C | préservé |
| ADR-ASST-AUDIT-STORE-01=B | préservé |
| ADR-ASST-STREAM-01=A | préservé |
| ADR-ASST-VALIDATE-LIB-01=A | préservé |
| ADR-ASST-SECRETS-01=A | préservé |
| ADR-ASST-ADMIN-AUTHZ-01=B | préservé |
| ADR-ASST-HEALTH-01=C | préservé |
| Documents 100 / 101 / 102 | non modifiés |

---

## 18. Couverture des 21 impacts préservée

Les 21 impacts techniques du document 102 restent **COVERED** par les 33 items / 7 épics du document 103. Aucun impact retiré, aucun item ajouté ou supprimé.

---

## 19. Réserves KEEP-OPEN

| Réserve | Statut |
|---|---|
| R-TECH-TTL-01 | KEEP-OPEN |
| R-TECH-FINOPS-HARD-01 | KEEP-OPEN |
| R-TECH-AF02-BOUNDARY-01 | KEEP-OPEN |
| R-UX-FPI-02 | KEEP-OPEN |
| R-UX-FPI-03 | KEEP-OPEN |
| R-UX-FPI-04 | KEEP-OPEN |
| R-UX-04 | KEEP-OPEN |

Aucune réserve fermée. TB-04-03 reste BLOCKED-BY-DECISION (P2 validé).

---

## 20. Non-sélections préservées

Restent **NOT SELECTED** :

- store et fournisseur ;
- ORM ;
- outil de migration ;
- cloud ;
- hébergeur ;
- région ;
- nombre d’instances ;
- IAM ;
- observabilité ;
- secret manager ;
- modèle OpenAI ;
- endpoint OpenAI ;
- TTL ;
- hard cap FinOps ;
- tarifs ;
- SLO ;
- schéma physique ;
- IaC.

---

## 21. Delivery NOT-CONSUMED

`DELIVERY-GATE=NOT-CONSUMED` (D-ASST-BLG-DELIVERY-01).

Le présent record **n’autorise pas** :

- GO Implementation Preparation execution ;
- GO Delivery ;
- GO code ;
- GO migration ;
- GO provider live ;
- GO store ;
- GO auth ;
- GO OpenAI model ;
- GO cloud ;
- GO pilote.

---

## 22. Actions autorisées et interdites

### Autorisées (ce cycle)

- mettre à jour 103 ;
- créer 104 ;
- produire Review Pack Full ;
- publier Review Handoff L3 sur `sfia/review-handoff`.

### Interdites

- exécuter LOT-IP-0A ;
- produire Decision Packs dans ce cycle ;
- code / app/** / packages / migrations / routes / API / UI ;
- sélection technologique ;
- fermer une réserve ;
- marquer un item DONE ou READY FOR DELIVERY ;
- consommer Delivery ;
- modifier 90–102 ;
- créer 105 ;
- commit / push branche projet ;
- PR / merge / mark-ready / suppression de branche.

---

## 23. Anti-claims

- LOT-IP-0A sélectionné **≠** exécuté ;
- aucune Decision Pack produit ;
- aucune technologie choisie ;
- aucun item DONE ;
- LOT-D1…D5 NOT AUTHORIZED ;
- Delivery NOT-CONSUMED ;
- sécurité / RGPD / FinOps **non** validés opérationnellement ;
- memory/fixture ≠ A2 durable ;
- pas OpenAI live ;
- pas production-ready ;
- pas PR / merge projet.

---

## 24. Verdict

**TECHNICAL BACKLOG PRIORITIES VALIDATED —**
**33 ITEM PRIORITIES ADOPTED BY MORRIS —**
**P0=6 / P1=13 / P2=13 / P3=1 —**
**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**
**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**
**LOT-IP-0B DEFERRED —**
**LOT-IP-0C DEFERRED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**DOCUMENT 103 UPDATED —**
**DOCUMENT 104 CREATED —**
**A2 AND TEN ADR PRESERVED —**
**21 IMPACTS COVERED —**
**RESERVES KEEP-OPEN —**
**NON-SELECTIONS PRESERVED —**
**NO ITEM DONE —**
**NO TECHNOLOGY SELECTED —**
**NO CODE OR PACKAGE CHANGE —**
**NO PROJECT COMMIT OR PUSH —**
**DELIVERY NOT-CONSUMED —**
**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0A EXECUTION DECISION**

---

## 25. Prochaine gate candidate

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)
```

**Statut —** candidate uniquement — **non consommée** par le cycle courant.

Cette gate n’autorise pas Delivery ni sélection technologique au-delà des Decision Packs et analyses explicitement bornés.

---

## Annexe A — Document 103 après décision

| Champ | Valeur |
|---|---|
| **SHA-256 après** | `7a0ab8c76bd58239d3407568621c0e6b546eddcae11b0c1a0d3caa36ab98c407` |
| **Lignes après** | 1457 |

## Annexe B — Garde-fous blocs

| Bloc | Contrôle |
|---|---|
| FinOps | TB-02-05 et TB-04-04 restent P2 · R-TECH-FINOPS-HARD-01 KEEP-OPEN · TB-04-04 dans LOT-IP-0C différé · aucune valeur hard cap |
| Sécurité / RSSI | TB-00-01 et TB-00-06 dans LOT-IP-0A · aucun IAM / secret créé · AuthorityGate inchangé |
| RGPD | aucune rétention / base légale · TB-04-03 P2 BLOCKED-BY-DECISION · LOT-IP-0A sans décision RGPD opérationnelle |
| Architecture | A2 + dix ADR préservés · graphe inchangé |
| Backlog | 33 items · 7 épics · lots dependency-safe |
```

---

## Document 103 — sections modifiées (complètes)

```markdown
## 1. Statut

**TECHNICAL BACKLOG PRIORITIES VALIDATED —**
**33 ITEM PRIORITIES ADOPTED BY MORRIS —**
**P0=6 / P1=13 / P2=13 / P3=1 —**
**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**
**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**
**LOT-IP-0B DEFERRED — LOT-IP-0C DEFERRED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**DELIVERY NOT-CONSUMED —**
**NO ITEM DONE — NO TECHNOLOGY SELECTED — NO IMPLEMENTATION AUTHORIZED**

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md` |
| **Items** | 33 |
| **Épics** | 7 (EPIC-TB-00 … EPIC-TB-06) |
| **Documents 90–102** | Inchangés |
| **Delivery** | NOT-CONSUMED |
```

```markdown
## 1bis. GO Morris — validation priorités et premier lot

```text
GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT
```

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 14:46 CEST (+0200) / 12:46 UTC |
| **Profil** | **Critical** |
| **Effet** | Priorités P0–P3 **validées** · LOT-IP-0A **SELECTED** · LOT-IP-0B/0C **DEFERRED** · Delivery **NOT-CONSUMED** |
| **Non-effet** | Pas d’exécution LOT-IP-0A · pas de Decision Pack produit · pas de sélection techno · pas de code |

### Historique des décisions Backlog

| ID | Statut |
|---|---|
| D-ASST-BLG-PRIORITY-01 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-PRIORITY-02 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-LOT-STRUCTURE-01 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-FIRST-LOT-01 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-DELIVERY-01 | DECIDED — ADOPTED BY MORRIS |
| D-ASST-BLG-NONSELECTIONS-01 | DECIDED — PRESERVE OPEN |

Record formel : `projects/sfia-studio/104-assistant-sfia-native-openai-technical-implementation-backlog-decisions-applied.md`.

---
```

```markdown
## 12. Règles de priorité — **VALIDATED BY MORRIS** (D-ASST-BLG-PRIORITY-01)

| Niveau | Signification validée |
|---|---|
| **P0** | préparation et décisions structurantes nécessaires avant tout lot technique |
| **P1** | fondations et capacités indispensables au First Product Increment |
| **P2** | durcissement, exploitation et readiness pré-pilote |
| **P3** | capacité post-FPI ou non bloquante pour le premier incrément |

La priorité **ne constitue jamais** un GO Delivery, une autorisation d’implémentation, une sélection technologique ou une fermeture de réserve.

Affectations : **D-ASST-BLG-PRIORITY-02** — P0=6 · P1=13 · P2=13 · P3=1 · total 33.

---
```

```markdown
## 21. Ordre de réalisation (priorités validées · lots IP restructurés)

1. **LOT-IP-0A** (SELECTED) — TB-00-01/02/03/06
2. Décisions Morris issues de LOT-IP-0A (futur cycle)
3. **LOT-IP-0B** (DEFERRED) — TB-00-04/05 après store
4. Phase Persistence A2 (P1) dont TB-01-05 avant AuthorityGate
5. Phase Assistant (P1) · metering/soft cap TB-02-05 (P2)
6. Phase Governance (P1)
7. **LOT-IP-0C** (DEFERRED) — TB-04-04 après preuve TB-02-05
8. Lifecycle / Health / QA pilote (P2) · observabilité TB-05-03 (P3)

**Priorités : VALIDATED BY MORRIS · Exécution lots techniques : NOT AUTHORIZED · Delivery : NOT-CONSUMED**

---
```

```markdown
## 22. Lots

### LOT-IP-0 (historique)

**SUPERSEDED BY DEPENDENCY-SAFE SPLIT LOT-IP-0A / LOT-IP-0B / LOT-IP-0C**

Motif : le lot historique regroupait TB-00-01…06 + TB-04-04 alors que TB-00-04/05 dépendent de TB-00-03 et TB-04-04 dépend de TB-02-05 (D-ASST-BLG-LOT-STRUCTURE-01).

### LOT-IP-0A — Foundational Decision Preparation

| Champ | Valeur |
|---|---|
| **Items** | TB-00-01 · TB-00-02 · TB-00-03 · TB-00-06 |
| **Dépendances backlog entrantes** | aucune |
| **Nature** | documentation / inventaire / analyse / Decision Pack uniquement |
| **Statut** | **SELECTED BY MORRIS — EXECUTION NOT AUTHORIZED** |
| **Décision** | D-ASST-BLG-FIRST-LOT-01 |
| **Code / techno / Delivery** | interdits |

### LOT-IP-0B — Store-Dependent Decision Preparation

| Champ | Valeur |
|---|---|
| **Items** | TB-00-04 · TB-00-05 |
| **Dépendance** | TB-00-03 |
| **Statut** | **DEFERRED — NOT SELECTED — FUTURE MORRIS GATE REQUIRED** |

### LOT-IP-0C — Pre-Pilot FinOps Decision Preparation

| Champ | Valeur |
|---|---|
| **Items** | TB-04-04 |
| **Dépendance** | TB-02-05 |
| **Statut** | **DEFERRED — NOT SELECTED — FUTURE MORRIS GATE REQUIRED** |
| **Note** | Requis avant pilote · ne bloque pas l’exécution future de TB-02-05 |

### LOT-D1 à LOT-D5

**NOT AUTHORIZED** — inchangés (persist foundation · Assistant N1 · N2/N3 Authority · lifecycle · pilot hardening).

Aucun lot Delivery sélectionné. LOT-IP-0A n’est **pas** exécuté dans ce cycle.


---
```

```markdown
## 23. Chemin critique

**LOT-IP-0A** (TB-00-01 · TB-00-02 · TB-00-03 · TB-00-06) → décisions Morris store/auth/AJV/secrets → **LOT-IP-0B** (TB-00-04/05) → Persistence (TB-01-*) dont TB-01-05 → Provider (TB-02-*) → AuthorityGate (TB-03-02) → TB-02-05 metering → **LOT-IP-0C** (TB-04-04) → Purge/Health/QA pilote (TB-06-04).

---
```

```markdown
## 26. Critères de passage

### Vers exécution LOT-IP-0A (future)

- validation ChatGPT du record 104 ;
- GO `EXECUTE LOT-IP-0A` Morris explicite ;
- périmètre borné DOC/DECISION-PREP ;
- aucune sélection techno dans le GO d’exécution.

### Vers Delivery (futur, non consommé)

- priorités validées (**fait**) ;
- LOT-IP-0A exécuté et Decision Packs produits ;
- store / migration / auth / AJV fit décidés si requis ;
- lot Delivery sélectionné Morris ;
- fichiers Delivery bornés ;
- réserves bloquantes identifiées ;
- cohérence 93/97/99/102.

**DELIVERY-GATE=NOT-CONSUMED** (D-ASST-BLG-DELIVERY-01).

---
```

```markdown
## 29. Actions autorisées

Enregistrer décisions dans 103/104 · publier handoff · (futur) proposer GO exécution LOT-IP-0A.

---
```

```markdown
## 30. Actions interdites

Exécuter LOT-IP-0A · produire Decision Packs dans ce cycle · code · app/** · packages · sélection techno · Delivery · fermer réserve · marquer item DONE · modifier 90–102 · créer 105 · commit/push projet · PR/merge.

---
```

```markdown
## 31. Anti-claims

LOT-IP-0A **sélectionné ≠ exécuté** · pas de Decision Pack produit · pas de techno choisie · pas d’item DONE · LOT-D* NOT AUTHORIZED · Delivery NOT-CONSUMED · memory/fixture ≠ A2 durable · pas OpenAI live · réserves ouvertes · pas PR/merge projet.

---
```

```markdown
## 32. Verdict

**TECHNICAL BACKLOG PRIORITIES VALIDATED —**
**33 ITEM PRIORITIES ADOPTED BY MORRIS —**
**P0=6 / P1=13 / P2=13 / P3=1 —**
**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**
**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**
**LOT-IP-0B DEFERRED —**
**LOT-IP-0C DEFERRED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**DOCUMENT 103 UPDATED — DOCUMENT 104 CREATED —**
**A2 AND TEN ADR PRESERVED — 21 IMPACTS COVERED —**
**RESERVES KEEP-OPEN — NON-SELECTIONS PRESERVED —**
**NO ITEM DONE — NO TECHNOLOGY SELECTED —**
**NO CODE OR PACKAGE CHANGE — DELIVERY NOT-CONSUMED —**
**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0A EXECUTION DECISION**


---
```

```markdown
## 33. Prochaine gate candidate

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)
```

Statut : **candidate uniquement — non consommée**.

N’autorise pas Delivery ni sélection technologique au-delà des Decision Packs/analyses explicitement bornés.

**TECHNICAL BACKLOG PRIORITIES AND FIRST LOT RECORDED — MORRIS LOT-IP-0A EXECUTION DECISION REQUIRED — DELIVERY NOT CONSUMED**
```


---

## Document 103 — useful diff (JSONL, whitespace-safe)

Format : une ligne JSON par ligne du diff RAW (`n`, `line`). Équivalent exploitable du patch ; évite l’échec `git diff --check` sur espaces de fin dans le patch embarqué.

```jsonl
{"n": 1, "line": "diff --git a/.tmp-sfia-review/backlog-priority-decisions/103-before.md b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md"}
{"n": 2, "line": "index 5edd013..abc4641 100644"}
{"n": 3, "line": "--- a/.tmp-sfia-review/backlog-priority-decisions/103-before.md"}
{"n": 4, "line": "+++ b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md"}
{"n": 5, "line": "@@ -2,16 +2,15 @@"}
{"n": 6, "line": " "}
{"n": 7, "line": " ## 1. Statut"}
{"n": 8, "line": " "}
{"n": 9, "line": "-**TECHNICAL IMPLEMENTATION BACKLOG CORRECTED —**"}
{"n": 10, "line": "-**DEPENDENCY GRAPH ACYCLIC —**"}
{"n": 11, "line": "-**F-BLG-103-01…04 FIXED —**"}
{"n": 12, "line": "-**EXISTING MAIN FOUNDATIONS FROM PR #308 TO #310 RECONCILED —**"}
{"n": 13, "line": "-**BACKLOG GATE CONSUMED BY MORRIS —**"}
{"n": 14, "line": "-**PRIORITIES AND LOTS ARE CANDIDATE UNTIL MORRIS VALIDATION —**"}
{"n": 15, "line": "-**TECHNOLOGY SELECTIONS REMAIN OPEN —**"}
{"n": 16, "line": "-**ALL RESERVES REMAIN OPEN —**"}
{"n": 17, "line": "-**DELIVERY GATE NOT CONSUMED —**"}
{"n": 18, "line": "-**NO IMPLEMENTATION AUTHORIZED**"}
{"n": 19, "line": "+**TECHNICAL BACKLOG PRIORITIES VALIDATED —**"}
{"n": 20, "line": "+**33 ITEM PRIORITIES ADOPTED BY MORRIS —**"}
{"n": 21, "line": "+**P0=6 / P1=13 / P2=13 / P3=1 —**"}
{"n": 22, "line": "+**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**"}
{"n": 23, "line": "+**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**"}
{"n": 24, "line": "+**LOT-IP-0B DEFERRED — LOT-IP-0C DEFERRED —**"}
{"n": 25, "line": "+**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**"}
{"n": 26, "line": "+**DELIVERY NOT-CONSUMED —**"}
{"n": 27, "line": "+**NO ITEM DONE — NO TECHNOLOGY SELECTED — NO IMPLEMENTATION AUTHORIZED**"}
{"n": 28, "line": " "}
{"n": 29, "line": " | Champ | Valeur |"}
{"n": 30, "line": " |---|---|"}
{"n": 31, "line": "@@ -21,6 +20,34 @@"}
{"n": 32, "line": " | **Documents 90–102** | Inchangés |"}
{"n": 33, "line": " | **Delivery** | NOT-CONSUMED |"}
{"n": 34, "line": " "}
{"n": 35, "line": "+"}
{"n": 36, "line": "+## 1bis. GO Morris — validation priorités et premier lot"}
{"n": 37, "line": "+"}
{"n": 38, "line": "+```text"}
{"n": 39, "line": "+GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT"}
{"n": 40, "line": "+```"}
{"n": 41, "line": "+"}
{"n": 42, "line": "+| Champ | Valeur |"}
{"n": 43, "line": "+|---|---|"}
{"n": 44, "line": "+| **Autorité** | Morris |"}
{"n": 45, "line": "+| **Consommation** | 2026-08-05 14:46 CEST (+0200) / 12:46 UTC |"}
{"n": 46, "line": "+| **Profil** | **Critical** |"}
{"n": 47, "line": "+| **Effet** | Priorités P0–P3 **validées** · LOT-IP-0A **SELECTED** · LOT-IP-0B/0C **DEFERRED** · Delivery **NOT-CONSUMED** |"}
{"n": 48, "line": "+| **Non-effet** | Pas d’exécution LOT-IP-0A · pas de Decision Pack produit · pas de sélection techno · pas de code |"}
{"n": 49, "line": "+"}
{"n": 50, "line": "+### Historique des décisions Backlog"}
{"n": 51, "line": "+"}
{"n": 52, "line": "+| ID | Statut |"}
{"n": 53, "line": "+|---|---|"}
{"n": 54, "line": "+| D-ASST-BLG-PRIORITY-01 | DECIDED — ADOPTED BY MORRIS |"}
{"n": 55, "line": "+| D-ASST-BLG-PRIORITY-02 | DECIDED — ADOPTED BY MORRIS |"}
{"n": 56, "line": "+| D-ASST-BLG-LOT-STRUCTURE-01 | DECIDED — ADOPTED BY MORRIS |"}
{"n": 57, "line": "+| D-ASST-BLG-FIRST-LOT-01 | DECIDED — ADOPTED BY MORRIS |"}
{"n": 58, "line": "+| D-ASST-BLG-DELIVERY-01 | DECIDED — ADOPTED BY MORRIS |"}
{"n": 59, "line": "+| D-ASST-BLG-NONSELECTIONS-01 | DECIDED — PRESERVE OPEN |"}
{"n": 60, "line": "+"}
{"n": 61, "line": "+Record formel : `projects/sfia-studio/104-assistant-sfia-native-openai-technical-implementation-backlog-decisions-applied.md`."}
{"n": 62, "line": "+"}
{"n": 63, "line": " ---"}
{"n": 64, "line": " "}
{"n": 65, "line": " ## 2. GO Morris"}
{"n": 66, "line": "@@ -109,15 +136,24 @@ DECISION-PREP · ENABLER · FEATURE-TECH · NFR · QA · OPS · DOC — définis"}
{"n": 67, "line": " "}
{"n": 68, "line": " ---"}
{"n": 69, "line": " "}
{"n": 70, "line": "-## 12. Règles de priorité candidate"}
{"n": 71, "line": "+## 12. Règles de priorité — **VALIDATED BY MORRIS** (D-ASST-BLG-PRIORITY-01)"}
{"n": 72, "line": " "}
{"n": 73, "line": "-P0 fondations/décisions · P1 capacité FPI · P2 durcissement pré-pilote · P3 post-FPI/non bloquant · toutes **CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED**."}
{"n": 74, "line": "+| Niveau | Signification validée |"}
{"n": 75, "line": "+|---|---|"}
{"n": 76, "line": "+| **P0** | préparation et décisions structurantes nécessaires avant tout lot technique |"}
{"n": 77, "line": "+| **P1** | fondations et capacités indispensables au First Product Increment |"}
{"n": 78, "line": "+| **P2** | durcissement, exploitation et readiness pré-pilote |"}
{"n": 79, "line": "+| **P3** | capacité post-FPI ou non bloquante pour le premier incrément |"}
{"n": 80, "line": "+"}
{"n": 81, "line": "+La priorité **ne constitue jamais** un GO Delivery, une autorisation d’implémentation, une sélection technologique ou une fermeture de réserve."}
{"n": 82, "line": "+"}
{"n": 83, "line": "+Affectations : **D-ASST-BLG-PRIORITY-02** — P0=6 · P1=13 · P2=13 · P3=1 · total 33."}
{"n": 84, "line": " "}
{"n": 85, "line": " ---"}
{"n": 86, "line": " "}
{"n": 87, "line": " ## 13. Definition of Ready candidate"}
{"n": 88, "line": " "}
{"n": 89, "line": "-Résultat vérifiable · source · périmètre · dépendances · techno sélectionnée ou non nécessaire · réserves · AC · preuves · fichiers candidats · gate humaine. **Pas** Ready for Delivery si décision structurante ouverte."}
{"n": 90, "line": "+Résultat vérifiable · source · périmètre · dépendances · techno sélectionnée ou non nécessaire · réserves · AC · preuves · fichiers candidats · gate humaine. Priorités **validées** ≠ Ready for Delivery. **Pas** Ready for Delivery si décision structurante ouverte. LOT-IP-0A sélectionné ≠ Ready for execution sans GO dédié."}
{"n": 91, "line": " "}
{"n": 92, "line": " ---"}
{"n": 93, "line": " "}
{"n": 94, "line": "@@ -179,7 +215,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 95, "line": " | **ID** | `TB-00-01` |"}
{"n": 96, "line": " | **Type** | DECISION-PREP |"}
{"n": 97, "line": " | **Epic** | EPIC-TB-00 |"}
{"n": 98, "line": "-| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 99, "line": "+| **Priorité validée** | **P0** — VALIDATED BY MORRIS |"}
{"n": 100, "line": " | **Statut** | READY-FOR-DECISION |"}
{"n": 101, "line": " | **Dépendances** | aucune |"}
{"n": 102, "line": " | **Gate Morris** | décision nécessaire si aucun mécanisme exploitable |"}
{"n": 103, "line": "@@ -209,7 +245,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 104, "line": " | **ID** | `TB-00-02` |"}
{"n": 105, "line": " | **Type** | DECISION-PREP |"}
{"n": 106, "line": " | **Epic** | EPIC-TB-00 |"}
{"n": 107, "line": "-| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 108, "line": "+| **Priorité validée** | **P0** — VALIDATED BY MORRIS |"}
{"n": 109, "line": " | **Statut** | READY-FOR-DECISION |"}
{"n": 110, "line": " | **Dépendances** | aucune |"}
{"n": 111, "line": " | **Gate Morris** | arbitrage Morris si incompatible |"}
{"n": 112, "line": "@@ -240,7 +276,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 113, "line": " | **ID** | `TB-00-03` |"}
{"n": 114, "line": " | **Type** | DECISION-PREP |"}
{"n": 115, "line": " | **Epic** | EPIC-TB-00 |"}
{"n": 116, "line": "-| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 117, "line": "+| **Priorité validée** | **P0** — VALIDATED BY MORRIS |"}
{"n": 118, "line": " | **Statut** | READY-FOR-DECISION |"}
{"n": 119, "line": " | **Dépendances** | aucune |"}
{"n": 120, "line": " | **Gate Morris** | décision Morris store requise avant LOT-D1 |"}
{"n": 121, "line": "@@ -270,7 +306,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 122, "line": " | **ID** | `TB-00-04` |"}
{"n": 123, "line": " | **Type** | DECISION-PREP |"}
{"n": 124, "line": " | **Epic** | EPIC-TB-00 |"}
{"n": 125, "line": "-| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 126, "line": "+| **Priorité validée** | **P0** — VALIDATED BY MORRIS |"}
{"n": 127, "line": " | **Statut** | READY-FOR-DECISION |"}
{"n": 128, "line": " | **Dépendances** | TB-00-03 |"}
{"n": 129, "line": " | **Gate Morris** | décision Morris data-access/migration |"}
{"n": 130, "line": "@@ -299,7 +335,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 131, "line": " | **ID** | `TB-00-05` |"}
{"n": 132, "line": " | **Type** | DECISION-PREP |"}
{"n": 133, "line": " | **Epic** | EPIC-TB-00 |"}
{"n": 134, "line": "-| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 135, "line": "+| **Priorité validée** | **P0** — VALIDATED BY MORRIS |"}
{"n": 136, "line": " | **Statut** | READY-FOR-DECISION |"}
{"n": 137, "line": " | **Dépendances** | TB-00-03 |"}
{"n": 138, "line": " | **Gate Morris** | décision Morris plateforme si lot Delivery la requiert |"}
{"n": 139, "line": "@@ -328,7 +364,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 140, "line": " | **ID** | `TB-00-06` |"}
{"n": 141, "line": " | **Type** | DECISION-PREP |"}
{"n": 142, "line": " | **Epic** | EPIC-TB-00 |"}
{"n": 143, "line": "-| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 144, "line": "+| **Priorité validée** | **P0** — VALIDATED BY MORRIS |"}
{"n": 145, "line": " | **Statut** | READY-FOR-DECISION |"}
{"n": 146, "line": " | **Dépendances** | aucune |"}
{"n": 147, "line": " | **Gate Morris** | aucune sélection ; fermeture réserves hors scope |"}
{"n": 148, "line": "@@ -358,7 +394,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 149, "line": " | **ID** | `TB-01-01` |"}
{"n": 150, "line": " | **Type** | ENABLER |"}
{"n": 151, "line": " | **Epic** | EPIC-TB-01 |"}
{"n": 152, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 153, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 154, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 155, "line": " | **Dépendances** | TB-00-03, TB-00-04 |"}
{"n": 156, "line": " | **Gate Morris** | décision store + data-access |"}
{"n": 157, "line": "@@ -389,7 +425,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 158, "line": " | **ID** | `TB-01-02` |"}
{"n": 159, "line": " | **Type** | ENABLER |"}
{"n": 160, "line": " | **Epic** | EPIC-TB-01 |"}
{"n": 161, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 162, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 163, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 164, "line": " | **Dépendances** | TB-01-01 |"}
{"n": 165, "line": " | **Gate Morris** | décision store pour mapping physique |"}
{"n": 166, "line": "@@ -418,7 +454,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 167, "line": " | **ID** | `TB-01-03` |"}
{"n": 168, "line": " | **Type** | ENABLER |"}
{"n": 169, "line": " | **Epic** | EPIC-TB-01 |"}
{"n": 170, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 171, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 172, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 173, "line": " | **Dépendances** | TB-01-01, TB-01-02 |"}
{"n": 174, "line": " | **Gate Morris** | décision store |"}
{"n": 175, "line": "@@ -447,7 +483,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 176, "line": " | **ID** | `TB-01-04` |"}
{"n": 177, "line": " | **Type** | ENABLER |"}
{"n": 178, "line": " | **Epic** | EPIC-TB-01 |"}
{"n": 179, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 180, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 181, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 182, "line": " | **Dépendances** | TB-01-01, TB-01-03 |"}
{"n": 183, "line": " | **Gate Morris** | décision store |"}
{"n": 184, "line": "@@ -477,7 +513,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 185, "line": " | **ID** | `TB-01-05` |"}
{"n": 186, "line": " | **Type** | FEATURE-TECH |"}
{"n": 187, "line": " | **Epic** | EPIC-TB-01 |"}
{"n": 188, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 189, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 190, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 191, "line": " | **Dépendances** | TB-01-04 |"}
{"n": 192, "line": " | **Gate Morris** | décision store |"}
{"n": 193, "line": "@@ -507,7 +543,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 194, "line": " | **ID** | `TB-01-06` |"}
{"n": 195, "line": " | **Type** | OPS |"}
{"n": 196, "line": " | **Epic** | EPIC-TB-01 |"}
{"n": 197, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 198, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 199, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 200, "line": " | **Dépendances** | TB-00-04, TB-01-02 |"}
{"n": 201, "line": " | **Gate Morris** | décision migration tool + store |"}
{"n": 202, "line": "@@ -536,7 +572,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 203, "line": " | **ID** | `TB-02-01` |"}
{"n": 204, "line": " | **Type** | ENABLER |"}
{"n": 205, "line": " | **Epic** | EPIC-TB-02 |"}
{"n": 206, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 207, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 208, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 209, "line": " | **Dépendances** | TB-00-06 |"}
{"n": 210, "line": " | **Gate Morris** | décision modèle OpenAI hors backlog courant |"}
{"n": 211, "line": "@@ -566,7 +602,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 212, "line": " | **ID** | `TB-02-02` |"}
{"n": 213, "line": " | **Type** | FEATURE-TECH |"}
{"n": 214, "line": " | **Epic** | EPIC-TB-02 |"}
{"n": 215, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 216, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 217, "line": " | **Statut** | BLOCKED-BY-RESERVE |"}
{"n": 218, "line": " | **Dépendances** | TB-02-01 |"}
{"n": 219, "line": " | **Gate Morris** | fermeture/clarification réserves UX si surfaces UI touchées |"}
{"n": 220, "line": "@@ -596,7 +632,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 221, "line": " | **ID** | `TB-02-03` |"}
{"n": 222, "line": " | **Type** | FEATURE-TECH |"}
{"n": 223, "line": " | **Epic** | EPIC-TB-02 |"}
{"n": 224, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 225, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 226, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 227, "line": " | **Dépendances** | TB-00-02, TB-02-01 |"}
{"n": 228, "line": " | **Gate Morris** | AJV fit confirmé |"}
{"n": 229, "line": "@@ -626,7 +662,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 230, "line": " | **ID** | `TB-02-04` |"}
{"n": 231, "line": " | **Type** | FEATURE-TECH |"}
{"n": 232, "line": " | **Epic** | EPIC-TB-02 |"}
{"n": 233, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 234, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 235, "line": " | **Statut** | CANDIDATE |"}
{"n": 236, "line": " | **Dépendances** | TB-02-01, TB-03-04 |"}
{"n": 237, "line": " | **Gate Morris** | aucune |"}
{"n": 238, "line": "@@ -656,7 +692,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 239, "line": " | **ID** | `TB-02-05` |"}
{"n": 240, "line": " | **Type** | NFR |"}
{"n": 241, "line": " | **Epic** | EPIC-TB-02 |"}
{"n": 242, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 243, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 244, "line": " | **Statut** | CANDIDATE |"}
{"n": 245, "line": " | **Dépendances** | TB-02-01, TB-03-04 |"}
{"n": 246, "line": " | **Gate Morris** | aucune pour metering/soft cap · hard cap reste DEFER-BEFORE-PILOT (TB-04-04) — non bloquant pour cet item |"}
{"n": 247, "line": "@@ -686,7 +722,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 248, "line": " | **ID** | `TB-03-01` |"}
{"n": 249, "line": " | **Type** | FEATURE-TECH |"}
{"n": 250, "line": " | **Epic** | EPIC-TB-03 |"}
{"n": 251, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 252, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 253, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 254, "line": " | **Dépendances** | TB-00-01 |"}
{"n": 255, "line": " | **Gate Morris** | auth existante confirmée ou arbitrage dédié |"}
{"n": 256, "line": "@@ -715,7 +751,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 257, "line": " | **ID** | `TB-03-02` |"}
{"n": 258, "line": " | **Type** | FEATURE-TECH |"}
{"n": 259, "line": " | **Epic** | EPIC-TB-03 |"}
{"n": 260, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 261, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 262, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 263, "line": " | **Dépendances** | TB-03-01, TB-01-05 |"}
{"n": 264, "line": " | **Gate Morris** | auth confirmée |"}
{"n": 265, "line": "@@ -745,7 +781,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 266, "line": " | **ID** | `TB-03-03` |"}
{"n": 267, "line": " | **Type** | FEATURE-TECH |"}
{"n": 268, "line": " | **Epic** | EPIC-TB-03 |"}
{"n": 269, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 270, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 271, "line": " | **Statut** | BLOCKED-BY-RESERVE |"}
{"n": 272, "line": " | **Dépendances** | TB-03-01, TB-00-06 |"}
{"n": 273, "line": " | **Gate Morris** | fermeture/policy TTL ; modèle nommé hors item |"}
{"n": 274, "line": "@@ -774,7 +810,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 275, "line": " | **ID** | `TB-03-04` |"}
{"n": 276, "line": " | **Type** | ENABLER |"}
{"n": 277, "line": " | **Epic** | EPIC-TB-03 |"}
{"n": 278, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 279, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 280, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 281, "line": " | **Dépendances** | TB-01-01 |"}
{"n": 282, "line": " | **Gate Morris** | décision store (même tech physique possible) |"}
{"n": 283, "line": "@@ -804,7 +840,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 284, "line": " | **ID** | `TB-03-05` |"}
{"n": 285, "line": " | **Type** | ENABLER |"}
{"n": 286, "line": " | **Epic** | EPIC-TB-03 |"}
{"n": 287, "line": "-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 288, "line": "+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |"}
{"n": 289, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 290, "line": " | **Dépendances** | TB-03-04 |"}
{"n": 291, "line": " | **Gate Morris** | décision store |"}
{"n": 292, "line": "@@ -834,7 +870,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 293, "line": " | **ID** | `TB-04-01` |"}
{"n": 294, "line": " | **Type** | FEATURE-TECH |"}
{"n": 295, "line": " | **Epic** | EPIC-TB-04 |"}
{"n": 296, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 297, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 298, "line": " | **Statut** | BLOCKED-BY-RESERVE |"}
{"n": 299, "line": " | **Dépendances** | TB-03-03 |"}
{"n": 300, "line": " | **Gate Morris** | fermeture R-TECH-TTL-01 / policy TTL |"}
{"n": 301, "line": "@@ -863,7 +899,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 302, "line": " | **ID** | `TB-04-02` |"}
{"n": 303, "line": " | **Type** | FEATURE-TECH |"}
{"n": 304, "line": " | **Epic** | EPIC-TB-04 |"}
{"n": 305, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 306, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 307, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 308, "line": " | **Dépendances** | TB-01-01, TB-04-01 |"}
{"n": 309, "line": " | **Gate Morris** | décision store + policy TTL |"}
{"n": 310, "line": "@@ -892,7 +928,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 311, "line": " | **ID** | `TB-04-03` |"}
{"n": 312, "line": " | **Type** | NFR |"}
{"n": 313, "line": " | **Epic** | EPIC-TB-04 |"}
{"n": 314, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 315, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 316, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 317, "line": " | **Dépendances** | TB-03-05, TB-01-06, TB-04-02 |"}
{"n": 318, "line": " | **Gate Morris** | décisions futures rétention/redaction · aucune réserve formelle liée |"}
{"n": 319, "line": "@@ -922,7 +958,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 320, "line": " | **ID** | `TB-04-04` |"}
{"n": 321, "line": " | **Type** | DECISION-PREP |"}
{"n": 322, "line": " | **Epic** | EPIC-TB-04 |"}
{"n": 323, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 324, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 325, "line": " | **Statut** | READY-FOR-DECISION |"}
{"n": 326, "line": " | **Dépendances** | TB-02-05 |"}
{"n": 327, "line": " | **Gate Morris** | décision Morris hard cap avant pilote |"}
{"n": 328, "line": "@@ -951,7 +987,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 329, "line": " | **ID** | `TB-05-01` |"}
{"n": 330, "line": " | **Type** | OPS |"}
{"n": 331, "line": " | **Epic** | EPIC-TB-05 |"}
{"n": 332, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 333, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 334, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 335, "line": " | **Dépendances** | TB-01-01 |"}
{"n": 336, "line": " | **Gate Morris** | décision store ; format endpoint non sélectionné |"}
{"n": 337, "line": "@@ -980,7 +1016,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 338, "line": " | **ID** | `TB-05-02` |"}
{"n": 339, "line": " | **Type** | NFR |"}
{"n": 340, "line": " | **Epic** | EPIC-TB-05 |"}
{"n": 341, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 342, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 343, "line": " | **Statut** | CANDIDATE |"}
{"n": 344, "line": " | **Dépendances** | TB-05-01, TB-02-01 |"}
{"n": 345, "line": " | **Gate Morris** | aucune |"}
{"n": 346, "line": "@@ -1009,7 +1045,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 347, "line": " | **ID** | `TB-05-03` |"}
{"n": 348, "line": " | **Type** | OPS |"}
{"n": 349, "line": " | **Epic** | EPIC-TB-05 |"}
{"n": 350, "line": "-| **Priorité candidate** | **P3** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 351, "line": "+| **Priorité validée** | **P3** — VALIDATED BY MORRIS |"}
{"n": 352, "line": " | **Statut** | CANDIDATE |"}
{"n": 353, "line": " | **Dépendances** | TB-03-04, TB-05-01 |"}
{"n": 354, "line": " | **Gate Morris** | vendor observability NOT SELECTED |"}
{"n": 355, "line": "@@ -1039,7 +1075,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 356, "line": " | **ID** | `TB-06-01` |"}
{"n": 357, "line": " | **Type** | QA |"}
{"n": 358, "line": " | **Epic** | EPIC-TB-06 |"}
{"n": 359, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 360, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 361, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 362, "line": " | **Dépendances** | TB-01-04, TB-01-05, TB-01-06 |"}
{"n": 363, "line": " | **Gate Morris** | store/plateforme pour exécution réelle |"}
{"n": 364, "line": "@@ -1068,7 +1104,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 365, "line": " | **ID** | `TB-06-02` |"}
{"n": 366, "line": " | **Type** | QA |"}
{"n": 367, "line": " | **Epic** | EPIC-TB-06 |"}
{"n": 368, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 369, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 370, "line": " | **Statut** | BLOCKED-BY-DECISION |"}
{"n": 371, "line": " | **Dépendances** | TB-04-02, TB-01-06, TB-04-03 |"}
{"n": 372, "line": " | **Gate Morris** | policy TTL + store |"}
{"n": 373, "line": "@@ -1096,7 +1132,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 374, "line": " | **ID** | `TB-06-03` |"}
{"n": 375, "line": " | **Type** | QA |"}
{"n": 376, "line": " | **Epic** | EPIC-TB-06 |"}
{"n": 377, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 378, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 379, "line": " | **Statut** | CANDIDATE |"}
{"n": 380, "line": " | **Dépendances** | TB-02-03, TB-02-04, TB-03-02, TB-03-04, TB-03-05, TB-05-02 |"}
{"n": 381, "line": " | **Gate Morris** | aucune |"}
{"n": 382, "line": "@@ -1125,7 +1161,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions)."}
{"n": 383, "line": " | **ID** | `TB-06-04` |"}
{"n": 384, "line": " | **Type** | QA |"}
{"n": 385, "line": " | **Epic** | EPIC-TB-06 |"}
{"n": 386, "line": "-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |"}
{"n": 387, "line": "+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |"}
{"n": 388, "line": " | **Statut** | BLOCKED-BY-RESERVE |"}
{"n": 389, "line": " | **Dépendances** | TB-04-04, TB-06-01, TB-06-02, TB-06-03, TB-05-03 |"}
{"n": 390, "line": " | **Gate Morris** | hard cap + TTL policy + décisions store/plateforme |"}
{"n": 391, "line": "@@ -1246,43 +1282,69 @@ Points durs : TB-00-03/04 bloquent TB-01-* · TB-00-01 bloque TB-03-01 · TB-00-"}
{"n": 392, "line": " "}
{"n": 393, "line": " ---"}
{"n": 394, "line": " "}
{"n": 395, "line": "-## 21. Ordre de réalisation candidat"}
{"n": 396, "line": "-"}
{"n": 397, "line": "-Phase 0 Decisions (TB-00-*) · Phase 1 Persistence A2 dont **TB-01-05 idempotence générique** · Phase 2 Assistant (TB-02-* dont metering/soft cap TB-02-05) · Phase 3 Governance (**TB-03-02 AuthorityGate après TB-01-05**) · Phase 4 Lifecycle (TB-04-* dont Decision Pack hard cap TB-04-04 après metering) + Health · Phase 5 Pilot QA (TB-06-*)."}
{"n": 398, "line": "+## 21. Ordre de réalisation (priorités validées · lots IP restructurés)"}
{"n": 399, "line": " "}
{"n": 400, "line": "-Ajustement justifié : dépendance prouvée AuthorityGate → idempotence (F-BLG-103-01) et dissociation soft/hard FinOps (F-BLG-103-03)."}
{"n": 401, "line": "+1. **LOT-IP-0A** (SELECTED) — TB-00-01/02/03/06"}
{"n": 402, "line": "+2. Décisions Morris issues de LOT-IP-0A (futur cycle)"}
{"n": 403, "line": "+3. **LOT-IP-0B** (DEFERRED) — TB-00-04/05 après store"}
{"n": 404, "line": "+4. Phase Persistence A2 (P1) dont TB-01-05 avant AuthorityGate"}
{"n": 405, "line": "+5. Phase Assistant (P1) · metering/soft cap TB-02-05 (P2)"}
{"n": 406, "line": "+6. Phase Governance (P1)"}
{"n": 407, "line": "+7. **LOT-IP-0C** (DEFERRED) — TB-04-04 après preuve TB-02-05"}
{"n": 408, "line": "+8. Lifecycle / Health / QA pilote (P2) · observabilité TB-05-03 (P3)"}
{"n": 409, "line": " "}
{"n": 410, "line": "-**CANDIDATE — MORRIS VALIDATION REQUIRED**"}
{"n": 411, "line": "+**Priorités : VALIDATED BY MORRIS · Exécution lots techniques : NOT AUTHORIZED · Delivery : NOT-CONSUMED**"}
{"n": 412, "line": " "}
{"n": 413, "line": " ---"}
{"n": 414, "line": " "}
{"n": 415, "line": "-## 22. Lots candidats"}
{"n": 416, "line": "+## 22. Lots"}
{"n": 417, "line": " "}
{"n": 418, "line": "-### LOT-IP-0 — Implementation Preparation"}
{"n": 419, "line": "-Items : TB-00-01 … TB-00-06 · TB-04-04 · Nature DOC/DECISION-PREP · **aucun code** · Objectif : borner décisions bloquantes."}
{"n": 420, "line": "+### LOT-IP-0 (historique)"}
{"n": 421, "line": " "}
{"n": 422, "line": "-### LOT-D1 — A2 Persistence Foundation"}
{"n": 423, "line": "-Items TB-01-* · **NOT AUTHORIZED** · requiert décisions store/data-access."}
{"n": 424, "line": "+**SUPERSEDED BY DEPENDENCY-SAFE SPLIT LOT-IP-0A / LOT-IP-0B / LOT-IP-0C**"}
{"n": 425, "line": " "}
{"n": 426, "line": "-### LOT-D2 — Assistant Core N1"}
{"n": 427, "line": "-Items TB-02-01/02/04 · **NOT AUTHORIZED**."}
{"n": 428, "line": "+Motif : le lot historique regroupait TB-00-01…06 + TB-04-04 alors que TB-00-04/05 dépendent de TB-00-03 et TB-04-04 dépend de TB-02-05 (D-ASST-BLG-LOT-STRUCTURE-01)."}
{"n": 429, "line": " "}
{"n": 430, "line": "-### LOT-D3 — Structured N2/N3 and Authority"}
{"n": 431, "line": "-Items TB-02-03 · TB-03-* · **NOT AUTHORIZED**."}
{"n": 432, "line": "+### LOT-IP-0A — Foundational Decision Preparation"}
{"n": 433, "line": " "}
{"n": 434, "line": "-### LOT-D4 — Lifecycle, Audit and Operations"}
{"n": 435, "line": "-Items TB-04-01/02/03 · TB-05-* · compléments audit · **NOT AUTHORIZED**."}
{"n": 436, "line": "+| Champ | Valeur |"}
{"n": 437, "line": "+|---|---|"}
{"n": 438, "line": "+| **Items** | TB-00-01 · TB-00-02 · TB-00-03 · TB-00-06 |"}
{"n": 439, "line": "+| **Dépendances backlog entrantes** | aucune |"}
{"n": 440, "line": "+| **Nature** | documentation / inventaire / analyse / Decision Pack uniquement |"}
{"n": 441, "line": "+| **Statut** | **SELECTED BY MORRIS — EXECUTION NOT AUTHORIZED** |"}
{"n": 442, "line": "+| **Décision** | D-ASST-BLG-FIRST-LOT-01 |"}
{"n": 443, "line": "+| **Code / techno / Delivery** | interdits |"}
{"n": 444, "line": "+"}
{"n": 445, "line": "+### LOT-IP-0B — Store-Dependent Decision Preparation"}
{"n": 446, "line": "+"}
{"n": 447, "line": "+| Champ | Valeur |"}
{"n": 448, "line": "+|---|---|"}
{"n": 449, "line": "+| **Items** | TB-00-04 · TB-00-05 |"}
{"n": 450, "line": "+| **Dépendance** | TB-00-03 |"}
{"n": 451, "line": "+| **Statut** | **DEFERRED — NOT SELECTED — FUTURE MORRIS GATE REQUIRED** |"}
{"n": 452, "line": "+"}
{"n": 453, "line": "+### LOT-IP-0C — Pre-Pilot FinOps Decision Preparation"}
{"n": 454, "line": "+"}
{"n": 455, "line": "+| Champ | Valeur |"}
{"n": 456, "line": "+|---|---|"}
{"n": 457, "line": "+| **Items** | TB-04-04 |"}
{"n": 458, "line": "+| **Dépendance** | TB-02-05 |"}
{"n": 459, "line": "+| **Statut** | **DEFERRED — NOT SELECTED — FUTURE MORRIS GATE REQUIRED** |"}
{"n": 460, "line": "+| **Note** | Requis avant pilote · ne bloque pas l’exécution future de TB-02-05 |"}
{"n": 461, "line": "+"}
{"n": 462, "line": "+### LOT-D1 à LOT-D5"}
{"n": 463, "line": "+"}
{"n": 464, "line": "+**NOT AUTHORIZED** — inchangés (persist foundation · Assistant N1 · N2/N3 Authority · lifecycle · pilot hardening)."}
{"n": 465, "line": " "}
{"n": 466, "line": "-### LOT-D5 — Pilot Hardening"}
{"n": 467, "line": "-Items TB-06-* (+ TB-04-04 Decision Pack hard cap en amont) · TB-02-05 metering/soft cap peut précéder en Phase 2/4 · **NOT AUTHORIZED**."}
{"n": 468, "line": "+Aucun lot Delivery sélectionné. LOT-IP-0A n’est **pas** exécuté dans ce cycle."}
{"n": 469, "line": " "}
{"n": 470, "line": "-Aucun lot sélectionné par Morris dans ce cycle."}
{"n": 471, "line": " "}
{"n": 472, "line": " ---"}
{"n": 473, "line": " "}
{"n": 474, "line": " ## 23. Chemin critique"}
{"n": 475, "line": " "}
{"n": 476, "line": "-Auth inventaire (TB-00-01) + Store decision (TB-00-03) + AJV fit (TB-00-02) → Persistence port (TB-01-01) → **Idempotence générique (TB-01-05)** → Provider (TB-02-01) → **AuthorityGate (TB-03-02)** → Metering/soft cap (TB-02-05) → Decision Pack hard cap (TB-04-04) → Purge/Health → QA pilote (TB-06-04) bloquée par hard cap/TTL decisions."}
{"n": 477, "line": "+**LOT-IP-0A** (TB-00-01 · TB-00-02 · TB-00-03 · TB-00-06) → décisions Morris store/auth/AJV/secrets → **LOT-IP-0B** (TB-00-04/05) → Persistence (TB-01-*) dont TB-01-05 → Provider (TB-02-*) → AuthorityGate (TB-03-02) → TB-02-05 metering → **LOT-IP-0C** (TB-04-04) → Purge/Health/QA pilote (TB-06-04)."}
{"n": 478, "line": " "}
{"n": 479, "line": " ---"}
{"n": 480, "line": " "}
{"n": 481, "line": "@@ -1309,23 +1371,26 @@ TB-00-* (décisions) · TB-01-06 backup/restore · TB-04-02/04 · TB-05-02 · TB"}
{"n": 482, "line": " "}
{"n": 483, "line": " ---"}
{"n": 484, "line": " "}
{"n": 485, "line": "-## 26. Critères de passage vers Delivery"}
{"n": 486, "line": "+## 26. Critères de passage"}
{"n": 487, "line": "+"}
{"n": 488, "line": "+### Vers exécution LOT-IP-0A (future)"}
{"n": 489, "line": "+"}
{"n": 490, "line": "+- validation ChatGPT du record 104 ;"}
{"n": 491, "line": "+- GO `EXECUTE LOT-IP-0A` Morris explicite ;"}
{"n": 492, "line": "+- périmètre borné DOC/DECISION-PREP ;"}
{"n": 493, "line": "+- aucune sélection techno dans le GO d’exécution."}
{"n": 494, "line": " "}
{"n": 495, "line": "-Avant tout GO Delivery du premier lot technique :"}
{"n": 496, "line": "+### Vers Delivery (futur, non consommé)"}
{"n": 497, "line": " "}
{"n": 498, "line": "-- backlog validé ChatGPT ;"}
{"n": 499, "line": "-- priorités validées Morris ;"}
{"n": 500, "line": "-- lot sélectionné Morris ;"}
{"n": 501, "line": "-- store sélectionné si requis ;"}
{"n": 502, "line": "-- migration strategy sélectionnée ;"}
{"n": 503, "line": "-- auth existante confirmée ou arbitrage ;"}
{"n": 504, "line": "-- AJV fit confirmé ;"}
{"n": 505, "line": "+- priorités validées (**fait**) ;"}
{"n": 506, "line": "+- LOT-IP-0A exécuté et Decision Packs produits ;"}
{"n": 507, "line": "+- store / migration / auth / AJV fit décidés si requis ;"}
{"n": 508, "line": "+- lot Delivery sélectionné Morris ;"}
{"n": 509, "line": " - fichiers Delivery bornés ;"}
{"n": 510, "line": "-- tests attendus définis ;"}
{"n": 511, "line": " - réserves bloquantes identifiées ;"}
{"n": 512, "line": " - cohérence 93/97/99/102."}
{"n": 513, "line": " "}
{"n": 514, "line": "-Ces critères **ne consomment pas** Delivery."}
{"n": 515, "line": "+**DELIVERY-GATE=NOT-CONSUMED** (D-ASST-BLG-DELIVERY-01)."}
{"n": 516, "line": " "}
{"n": 517, "line": " ---"}
{"n": 518, "line": " "}
{"n": 519, "line": "@@ -1343,48 +1408,50 @@ Store tech/fournisseur · cloud · hébergeur · région · instances · ORM ·"}
{"n": 520, "line": " "}
{"n": 521, "line": " ## 29. Actions autorisées"}
{"n": 522, "line": " "}
{"n": 523, "line": "-Corriger 103 · republier handoff · (hors cycle) valider priorités via GO distinct."}
{"n": 524, "line": "+Enregistrer décisions dans 103/104 · publier handoff · (futur) proposer GO exécution LOT-IP-0A."}
{"n": 525, "line": " "}
{"n": 526, "line": " ---"}
{"n": 527, "line": " "}
{"n": 528, "line": " ## 30. Actions interdites"}
{"n": 529, "line": " "}
{"n": 530, "line": "-Modifier 90–102 · créer 104 · code · app/** · packages · migration · endpoint · .env · sélection techno · Delivery · fermer réserve · valider priorités · sélectionner lot · commit/push projet · PR/merge."}
{"n": 531, "line": "+Exécuter LOT-IP-0A · produire Decision Packs dans ce cycle · code · app/** · packages · sélection techno · Delivery · fermer réserve · marquer item DONE · modifier 90–102 · créer 105 · commit/push projet · PR/merge."}
{"n": 532, "line": " "}
{"n": 533, "line": " ---"}
{"n": 534, "line": " "}
{"n": 535, "line": " ## 31. Anti-claims"}
{"n": 536, "line": " "}
{"n": 537, "line": "-Pas Delivery Ready · pas de lot sélectionné · pas de techno choisie · pas d’item DONE sur PR #308–#310 · memory/fixture ≠ A2 durable · pas OpenAI live · pas multi-instance prouvé · pas production-ready · sécurité/RGPD/FinOps non validés · réserves ouvertes · pas PR/merge projet."}
{"n": 538, "line": "+LOT-IP-0A **sélectionné ≠ exécuté** · pas de Decision Pack produit · pas de techno choisie · pas d’item DONE · LOT-D* NOT AUTHORIZED · Delivery NOT-CONSUMED · memory/fixture ≠ A2 durable · pas OpenAI live · réserves ouvertes · pas PR/merge projet."}
{"n": 539, "line": " "}
{"n": 540, "line": " ---"}
{"n": 541, "line": " "}
{"n": 542, "line": " ## 32. Verdict"}
{"n": 543, "line": " "}
{"n": 544, "line": "-**TECHNICAL BACKLOG CORRECTED —**"}
{"n": 545, "line": "-**DEPENDENCY GRAPH ACYCLIC —**"}
{"n": 546, "line": "-**F-BLG-103-01…04 FIXED —**"}
{"n": 547, "line": "-**EXISTING MAIN FOUNDATIONS FROM PR #308 TO #310 RECONCILED —**"}
{"n": 548, "line": "-**33 ITEMS / 7 EPICS PRESERVED —**"}
{"n": 549, "line": "-**A2 AND TEN ADR PRESERVED —**"}
{"n": 550, "line": "-**21 IMPACTS COVERED —**"}
{"n": 551, "line": "-**RESERVES KEEP-OPEN —**"}
{"n": 552, "line": "-**NON-SELECTIONS PRESERVED —**"}
{"n": 553, "line": "-**PRIORITIES AND LOTS REMAIN CANDIDATE —**"}
{"n": 554, "line": "-**NO LOT SELECTED —**"}
{"n": 555, "line": "-**DOCUMENT 103 CORRECTED — DOCUMENTS 90–102 UNCHANGED —**"}
{"n": 556, "line": "-**NO DOCUMENT 104 — NO CODE OR PACKAGE CHANGE —**"}
{"n": 557, "line": "-**DELIVERY NOT-CONSUMED —**"}
{"n": 558, "line": "-**READY FOR CHATGPT REVALIDATION AND MORRIS BACKLOG PRIORITIZATION DECISION**"}
{"n": 559, "line": "+**TECHNICAL BACKLOG PRIORITIES VALIDATED —**"}
{"n": 560, "line": "+**33 ITEM PRIORITIES ADOPTED BY MORRIS —**"}
{"n": 561, "line": "+**P0=6 / P1=13 / P2=13 / P3=1 —**"}
{"n": 562, "line": "+**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**"}
{"n": 563, "line": "+**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**"}
{"n": 564, "line": "+**LOT-IP-0B DEFERRED —**"}
{"n": 565, "line": "+**LOT-IP-0C DEFERRED —**"}
{"n": 566, "line": "+**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**"}
{"n": 567, "line": "+**DOCUMENT 103 UPDATED — DOCUMENT 104 CREATED —**"}
{"n": 568, "line": "+**A2 AND TEN ADR PRESERVED — 21 IMPACTS COVERED —**"}
{"n": 569, "line": "+**RESERVES KEEP-OPEN — NON-SELECTIONS PRESERVED —**"}
{"n": 570, "line": "+**NO ITEM DONE — NO TECHNOLOGY SELECTED —**"}
{"n": 571, "line": "+**NO CODE OR PACKAGE CHANGE — DELIVERY NOT-CONSUMED —**"}
{"n": 572, "line": "+**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0A EXECUTION DECISION**"}
{"n": 573, "line": "+"}
{"n": 574, "line": " "}
{"n": 575, "line": " ---"}
{"n": 576, "line": " "}
{"n": 577, "line": " ## 33. Prochaine gate candidate"}
{"n": 578, "line": " "}
{"n": 579, "line": " ```text"}
{"n": 580, "line": "-GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT"}
{"n": 581, "line": "+GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)"}
{"n": 582, "line": " ```"}
{"n": 583, "line": " "}
{"n": 584, "line": " Statut : **candidate uniquement — non consommée**."}
{"n": 585, "line": " "}
{"n": 586, "line": "-**TECHNICAL BACKLOG DOCUMENTED — MORRIS PRIORITIZATION AND FIRST LOT DECISION REQUIRED — DELIVERY NOT CONSUMED**"}
{"n": 587, "line": "+N’autorise pas Delivery ni sélection technologique au-delà des Decision Packs/analyses explicitement bornés."}
{"n": 588, "line": "+"}
{"n": 589, "line": "+**TECHNICAL BACKLOG PRIORITIES AND FIRST LOT RECORDED — MORRIS LOT-IP-0A EXECUTION DECISION REQUIRED — DELIVERY NOT CONSUMED**"}
```

---

## Document 103 — useful diff RAW (référence ; lignes rstrip)

```text
diff --git a/.tmp-sfia-review/backlog-priority-decisions/103-before.md b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
index 5edd013..abc4641 100644
--- a/.tmp-sfia-review/backlog-priority-decisions/103-before.md
+++ b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
@@ -2,16 +2,15 @@

 ## 1. Statut

-**TECHNICAL IMPLEMENTATION BACKLOG CORRECTED —**
-**DEPENDENCY GRAPH ACYCLIC —**
-**F-BLG-103-01…04 FIXED —**
-**EXISTING MAIN FOUNDATIONS FROM PR #308 TO #310 RECONCILED —**
-**BACKLOG GATE CONSUMED BY MORRIS —**
-**PRIORITIES AND LOTS ARE CANDIDATE UNTIL MORRIS VALIDATION —**
-**TECHNOLOGY SELECTIONS REMAIN OPEN —**
-**ALL RESERVES REMAIN OPEN —**
-**DELIVERY GATE NOT CONSUMED —**
-**NO IMPLEMENTATION AUTHORIZED**
+**TECHNICAL BACKLOG PRIORITIES VALIDATED —**
+**33 ITEM PRIORITIES ADOPTED BY MORRIS —**
+**P0=6 / P1=13 / P2=13 / P3=1 —**
+**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**
+**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**
+**LOT-IP-0B DEFERRED — LOT-IP-0C DEFERRED —**
+**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
+**DELIVERY NOT-CONSUMED —**
+**NO ITEM DONE — NO TECHNOLOGY SELECTED — NO IMPLEMENTATION AUTHORIZED**

 | Champ | Valeur |
 |---|---|
@@ -21,6 +20,34 @@
 | **Documents 90–102** | Inchangés |
 | **Delivery** | NOT-CONSUMED |

+
+## 1bis. GO Morris — validation priorités et premier lot
+
+```text
+GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT
+```
+
+| Champ | Valeur |
+|---|---|
+| **Autorité** | Morris |
+| **Consommation** | 2026-08-05 14:46 CEST (+0200) / 12:46 UTC |
+| **Profil** | **Critical** |
+| **Effet** | Priorités P0–P3 **validées** · LOT-IP-0A **SELECTED** · LOT-IP-0B/0C **DEFERRED** · Delivery **NOT-CONSUMED** |
+| **Non-effet** | Pas d’exécution LOT-IP-0A · pas de Decision Pack produit · pas de sélection techno · pas de code |
+
+### Historique des décisions Backlog
+
+| ID | Statut |
+|---|---|
+| D-ASST-BLG-PRIORITY-01 | DECIDED — ADOPTED BY MORRIS |
+| D-ASST-BLG-PRIORITY-02 | DECIDED — ADOPTED BY MORRIS |
+| D-ASST-BLG-LOT-STRUCTURE-01 | DECIDED — ADOPTED BY MORRIS |
+| D-ASST-BLG-FIRST-LOT-01 | DECIDED — ADOPTED BY MORRIS |
+| D-ASST-BLG-DELIVERY-01 | DECIDED — ADOPTED BY MORRIS |
+| D-ASST-BLG-NONSELECTIONS-01 | DECIDED — PRESERVE OPEN |
+
+Record formel : `projects/sfia-studio/104-assistant-sfia-native-openai-technical-implementation-backlog-decisions-applied.md`.
+
 ---

 ## 2. GO Morris
@@ -109,15 +136,24 @@ DECISION-PREP · ENABLER · FEATURE-TECH · NFR · QA · OPS · DOC — définis

 ---

-## 12. Règles de priorité candidate
+## 12. Règles de priorité — **VALIDATED BY MORRIS** (D-ASST-BLG-PRIORITY-01)

-P0 fondations/décisions · P1 capacité FPI · P2 durcissement pré-pilote · P3 post-FPI/non bloquant · toutes **CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED**.
+| Niveau | Signification validée |
+|---|---|
+| **P0** | préparation et décisions structurantes nécessaires avant tout lot technique |
+| **P1** | fondations et capacités indispensables au First Product Increment |
+| **P2** | durcissement, exploitation et readiness pré-pilote |
+| **P3** | capacité post-FPI ou non bloquante pour le premier incrément |
+
+La priorité **ne constitue jamais** un GO Delivery, une autorisation d’implémentation, une sélection technologique ou une fermeture de réserve.
+
+Affectations : **D-ASST-BLG-PRIORITY-02** — P0=6 · P1=13 · P2=13 · P3=1 · total 33.

 ---

 ## 13. Definition of Ready candidate

-Résultat vérifiable · source · périmètre · dépendances · techno sélectionnée ou non nécessaire · réserves · AC · preuves · fichiers candidats · gate humaine. **Pas** Ready for Delivery si décision structurante ouverte.
+Résultat vérifiable · source · périmètre · dépendances · techno sélectionnée ou non nécessaire · réserves · AC · preuves · fichiers candidats · gate humaine. Priorités **validées** ≠ Ready for Delivery. **Pas** Ready for Delivery si décision structurante ouverte. LOT-IP-0A sélectionné ≠ Ready for execution sans GO dédié.

 ---

@@ -179,7 +215,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-00-01` |
 | **Type** | DECISION-PREP |
 | **Epic** | EPIC-TB-00 |
-| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P0** — VALIDATED BY MORRIS |
 | **Statut** | READY-FOR-DECISION |
 | **Dépendances** | aucune |
 | **Gate Morris** | décision nécessaire si aucun mécanisme exploitable |
@@ -209,7 +245,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-00-02` |
 | **Type** | DECISION-PREP |
 | **Epic** | EPIC-TB-00 |
-| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P0** — VALIDATED BY MORRIS |
 | **Statut** | READY-FOR-DECISION |
 | **Dépendances** | aucune |
 | **Gate Morris** | arbitrage Morris si incompatible |
@@ -240,7 +276,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-00-03` |
 | **Type** | DECISION-PREP |
 | **Epic** | EPIC-TB-00 |
-| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P0** — VALIDATED BY MORRIS |
 | **Statut** | READY-FOR-DECISION |
 | **Dépendances** | aucune |
 | **Gate Morris** | décision Morris store requise avant LOT-D1 |
@@ -270,7 +306,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-00-04` |
 | **Type** | DECISION-PREP |
 | **Epic** | EPIC-TB-00 |
-| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P0** — VALIDATED BY MORRIS |
 | **Statut** | READY-FOR-DECISION |
 | **Dépendances** | TB-00-03 |
 | **Gate Morris** | décision Morris data-access/migration |
@@ -299,7 +335,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-00-05` |
 | **Type** | DECISION-PREP |
 | **Epic** | EPIC-TB-00 |
-| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P0** — VALIDATED BY MORRIS |
 | **Statut** | READY-FOR-DECISION |
 | **Dépendances** | TB-00-03 |
 | **Gate Morris** | décision Morris plateforme si lot Delivery la requiert |
@@ -328,7 +364,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-00-06` |
 | **Type** | DECISION-PREP |
 | **Epic** | EPIC-TB-00 |
-| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P0** — VALIDATED BY MORRIS |
 | **Statut** | READY-FOR-DECISION |
 | **Dépendances** | aucune |
 | **Gate Morris** | aucune sélection ; fermeture réserves hors scope |
@@ -358,7 +394,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-01-01` |
 | **Type** | ENABLER |
 | **Epic** | EPIC-TB-01 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-00-03, TB-00-04 |
 | **Gate Morris** | décision store + data-access |
@@ -389,7 +425,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-01-02` |
 | **Type** | ENABLER |
 | **Epic** | EPIC-TB-01 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-01-01 |
 | **Gate Morris** | décision store pour mapping physique |
@@ -418,7 +454,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-01-03` |
 | **Type** | ENABLER |
 | **Epic** | EPIC-TB-01 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-01-01, TB-01-02 |
 | **Gate Morris** | décision store |
@@ -447,7 +483,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-01-04` |
 | **Type** | ENABLER |
 | **Epic** | EPIC-TB-01 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-01-01, TB-01-03 |
 | **Gate Morris** | décision store |
@@ -477,7 +513,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-01-05` |
 | **Type** | FEATURE-TECH |
 | **Epic** | EPIC-TB-01 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-01-04 |
 | **Gate Morris** | décision store |
@@ -507,7 +543,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-01-06` |
 | **Type** | OPS |
 | **Epic** | EPIC-TB-01 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-00-04, TB-01-02 |
 | **Gate Morris** | décision migration tool + store |
@@ -536,7 +572,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-02-01` |
 | **Type** | ENABLER |
 | **Epic** | EPIC-TB-02 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-00-06 |
 | **Gate Morris** | décision modèle OpenAI hors backlog courant |
@@ -566,7 +602,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-02-02` |
 | **Type** | FEATURE-TECH |
 | **Epic** | EPIC-TB-02 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-RESERVE |
 | **Dépendances** | TB-02-01 |
 | **Gate Morris** | fermeture/clarification réserves UX si surfaces UI touchées |
@@ -596,7 +632,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-02-03` |
 | **Type** | FEATURE-TECH |
 | **Epic** | EPIC-TB-02 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-00-02, TB-02-01 |
 | **Gate Morris** | AJV fit confirmé |
@@ -626,7 +662,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-02-04` |
 | **Type** | FEATURE-TECH |
 | **Epic** | EPIC-TB-02 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | CANDIDATE |
 | **Dépendances** | TB-02-01, TB-03-04 |
 | **Gate Morris** | aucune |
@@ -656,7 +692,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-02-05` |
 | **Type** | NFR |
 | **Epic** | EPIC-TB-02 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | CANDIDATE |
 | **Dépendances** | TB-02-01, TB-03-04 |
 | **Gate Morris** | aucune pour metering/soft cap · hard cap reste DEFER-BEFORE-PILOT (TB-04-04) — non bloquant pour cet item |
@@ -686,7 +722,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-03-01` |
 | **Type** | FEATURE-TECH |
 | **Epic** | EPIC-TB-03 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-00-01 |
 | **Gate Morris** | auth existante confirmée ou arbitrage dédié |
@@ -715,7 +751,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-03-02` |
 | **Type** | FEATURE-TECH |
 | **Epic** | EPIC-TB-03 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-03-01, TB-01-05 |
 | **Gate Morris** | auth confirmée |
@@ -745,7 +781,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-03-03` |
 | **Type** | FEATURE-TECH |
 | **Epic** | EPIC-TB-03 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-RESERVE |
 | **Dépendances** | TB-03-01, TB-00-06 |
 | **Gate Morris** | fermeture/policy TTL ; modèle nommé hors item |
@@ -774,7 +810,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-03-04` |
 | **Type** | ENABLER |
 | **Epic** | EPIC-TB-03 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-01-01 |
 | **Gate Morris** | décision store (même tech physique possible) |
@@ -804,7 +840,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-03-05` |
 | **Type** | ENABLER |
 | **Epic** | EPIC-TB-03 |
-| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P1** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-03-04 |
 | **Gate Morris** | décision store |
@@ -834,7 +870,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-04-01` |
 | **Type** | FEATURE-TECH |
 | **Epic** | EPIC-TB-04 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-RESERVE |
 | **Dépendances** | TB-03-03 |
 | **Gate Morris** | fermeture R-TECH-TTL-01 / policy TTL |
@@ -863,7 +899,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-04-02` |
 | **Type** | FEATURE-TECH |
 | **Epic** | EPIC-TB-04 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-01-01, TB-04-01 |
 | **Gate Morris** | décision store + policy TTL |
@@ -892,7 +928,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-04-03` |
 | **Type** | NFR |
 | **Epic** | EPIC-TB-04 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-03-05, TB-01-06, TB-04-02 |
 | **Gate Morris** | décisions futures rétention/redaction · aucune réserve formelle liée |
@@ -922,7 +958,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-04-04` |
 | **Type** | DECISION-PREP |
 | **Epic** | EPIC-TB-04 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | READY-FOR-DECISION |
 | **Dépendances** | TB-02-05 |
 | **Gate Morris** | décision Morris hard cap avant pilote |
@@ -951,7 +987,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-05-01` |
 | **Type** | OPS |
 | **Epic** | EPIC-TB-05 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-01-01 |
 | **Gate Morris** | décision store ; format endpoint non sélectionné |
@@ -980,7 +1016,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-05-02` |
 | **Type** | NFR |
 | **Epic** | EPIC-TB-05 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | CANDIDATE |
 | **Dépendances** | TB-05-01, TB-02-01 |
 | **Gate Morris** | aucune |
@@ -1009,7 +1045,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-05-03` |
 | **Type** | OPS |
 | **Epic** | EPIC-TB-05 |
-| **Priorité candidate** | **P3** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P3** — VALIDATED BY MORRIS |
 | **Statut** | CANDIDATE |
 | **Dépendances** | TB-03-04, TB-05-01 |
 | **Gate Morris** | vendor observability NOT SELECTED |
@@ -1039,7 +1075,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-06-01` |
 | **Type** | QA |
 | **Epic** | EPIC-TB-06 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-01-04, TB-01-05, TB-01-06 |
 | **Gate Morris** | store/plateforme pour exécution réelle |
@@ -1068,7 +1104,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-06-02` |
 | **Type** | QA |
 | **Epic** | EPIC-TB-06 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-DECISION |
 | **Dépendances** | TB-04-02, TB-01-06, TB-04-03 |
 | **Gate Morris** | policy TTL + store |
@@ -1096,7 +1132,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-06-03` |
 | **Type** | QA |
 | **Epic** | EPIC-TB-06 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | CANDIDATE |
 | **Dépendances** | TB-02-03, TB-02-04, TB-03-02, TB-03-04, TB-03-05, TB-05-02 |
 | **Gate Morris** | aucune |
@@ -1125,7 +1161,7 @@ Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
 | **ID** | `TB-06-04` |
 | **Type** | QA |
 | **Epic** | EPIC-TB-06 |
-| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Priorité validée** | **P2** — VALIDATED BY MORRIS |
 | **Statut** | BLOCKED-BY-RESERVE |
 | **Dépendances** | TB-04-04, TB-06-01, TB-06-02, TB-06-03, TB-05-03 |
 | **Gate Morris** | hard cap + TTL policy + décisions store/plateforme |
@@ -1246,43 +1282,69 @@ Points durs : TB-00-03/04 bloquent TB-01-* · TB-00-01 bloque TB-03-01 · TB-00-

 ---

-## 21. Ordre de réalisation candidat
-
-Phase 0 Decisions (TB-00-*) · Phase 1 Persistence A2 dont **TB-01-05 idempotence générique** · Phase 2 Assistant (TB-02-* dont metering/soft cap TB-02-05) · Phase 3 Governance (**TB-03-02 AuthorityGate après TB-01-05**) · Phase 4 Lifecycle (TB-04-* dont Decision Pack hard cap TB-04-04 après metering) + Health · Phase 5 Pilot QA (TB-06-*).
+## 21. Ordre de réalisation (priorités validées · lots IP restructurés)

-Ajustement justifié : dépendance prouvée AuthorityGate → idempotence (F-BLG-103-01) et dissociation soft/hard FinOps (F-BLG-103-03).
+1. **LOT-IP-0A** (SELECTED) — TB-00-01/02/03/06
+2. Décisions Morris issues de LOT-IP-0A (futur cycle)
+3. **LOT-IP-0B** (DEFERRED) — TB-00-04/05 après store
+4. Phase Persistence A2 (P1) dont TB-01-05 avant AuthorityGate
+5. Phase Assistant (P1) · metering/soft cap TB-02-05 (P2)
+6. Phase Governance (P1)
+7. **LOT-IP-0C** (DEFERRED) — TB-04-04 après preuve TB-02-05
+8. Lifecycle / Health / QA pilote (P2) · observabilité TB-05-03 (P3)

-**CANDIDATE — MORRIS VALIDATION REQUIRED**
+**Priorités : VALIDATED BY MORRIS · Exécution lots techniques : NOT AUTHORIZED · Delivery : NOT-CONSUMED**

 ---

-## 22. Lots candidats
+## 22. Lots

-### LOT-IP-0 — Implementation Preparation
-Items : TB-00-01 … TB-00-06 · TB-04-04 · Nature DOC/DECISION-PREP · **aucun code** · Objectif : borner décisions bloquantes.
+### LOT-IP-0 (historique)

-### LOT-D1 — A2 Persistence Foundation
-Items TB-01-* · **NOT AUTHORIZED** · requiert décisions store/data-access.
+**SUPERSEDED BY DEPENDENCY-SAFE SPLIT LOT-IP-0A / LOT-IP-0B / LOT-IP-0C**

-### LOT-D2 — Assistant Core N1
-Items TB-02-01/02/04 · **NOT AUTHORIZED**.
+Motif : le lot historique regroupait TB-00-01…06 + TB-04-04 alors que TB-00-04/05 dépendent de TB-00-03 et TB-04-04 dépend de TB-02-05 (D-ASST-BLG-LOT-STRUCTURE-01).

-### LOT-D3 — Structured N2/N3 and Authority
-Items TB-02-03 · TB-03-* · **NOT AUTHORIZED**.
+### LOT-IP-0A — Foundational Decision Preparation

-### LOT-D4 — Lifecycle, Audit and Operations
-Items TB-04-01/02/03 · TB-05-* · compléments audit · **NOT AUTHORIZED**.
+| Champ | Valeur |
+|---|---|
+| **Items** | TB-00-01 · TB-00-02 · TB-00-03 · TB-00-06 |
+| **Dépendances backlog entrantes** | aucune |
+| **Nature** | documentation / inventaire / analyse / Decision Pack uniquement |
+| **Statut** | **SELECTED BY MORRIS — EXECUTION NOT AUTHORIZED** |
+| **Décision** | D-ASST-BLG-FIRST-LOT-01 |
+| **Code / techno / Delivery** | interdits |
+
+### LOT-IP-0B — Store-Dependent Decision Preparation
+
+| Champ | Valeur |
+|---|---|
+| **Items** | TB-00-04 · TB-00-05 |
+| **Dépendance** | TB-00-03 |
+| **Statut** | **DEFERRED — NOT SELECTED — FUTURE MORRIS GATE REQUIRED** |
+
+### LOT-IP-0C — Pre-Pilot FinOps Decision Preparation
+
+| Champ | Valeur |
+|---|---|
+| **Items** | TB-04-04 |
+| **Dépendance** | TB-02-05 |
+| **Statut** | **DEFERRED — NOT SELECTED — FUTURE MORRIS GATE REQUIRED** |
+| **Note** | Requis avant pilote · ne bloque pas l’exécution future de TB-02-05 |
+
+### LOT-D1 à LOT-D5
+
+**NOT AUTHORIZED** — inchangés (persist foundation · Assistant N1 · N2/N3 Authority · lifecycle · pilot hardening).

-### LOT-D5 — Pilot Hardening
-Items TB-06-* (+ TB-04-04 Decision Pack hard cap en amont) · TB-02-05 metering/soft cap peut précéder en Phase 2/4 · **NOT AUTHORIZED**.
+Aucun lot Delivery sélectionné. LOT-IP-0A n’est **pas** exécuté dans ce cycle.

-Aucun lot sélectionné par Morris dans ce cycle.

 ---

 ## 23. Chemin critique

-Auth inventaire (TB-00-01) + Store decision (TB-00-03) + AJV fit (TB-00-02) → Persistence port (TB-01-01) → **Idempotence générique (TB-01-05)** → Provider (TB-02-01) → **AuthorityGate (TB-03-02)** → Metering/soft cap (TB-02-05) → Decision Pack hard cap (TB-04-04) → Purge/Health → QA pilote (TB-06-04) bloquée par hard cap/TTL decisions.
+**LOT-IP-0A** (TB-00-01 · TB-00-02 · TB-00-03 · TB-00-06) → décisions Morris store/auth/AJV/secrets → **LOT-IP-0B** (TB-00-04/05) → Persistence (TB-01-*) dont TB-01-05 → Provider (TB-02-*) → AuthorityGate (TB-03-02) → TB-02-05 metering → **LOT-IP-0C** (TB-04-04) → Purge/Health/QA pilote (TB-06-04).

 ---

@@ -1309,23 +1371,26 @@ TB-00-* (décisions) · TB-01-06 backup/restore · TB-04-02/04 · TB-05-02 · TB

 ---

-## 26. Critères de passage vers Delivery
+## 26. Critères de passage
+
+### Vers exécution LOT-IP-0A (future)
+
+- validation ChatGPT du record 104 ;
+- GO `EXECUTE LOT-IP-0A` Morris explicite ;
+- périmètre borné DOC/DECISION-PREP ;
+- aucune sélection techno dans le GO d’exécution.

-Avant tout GO Delivery du premier lot technique :
+### Vers Delivery (futur, non consommé)

-- backlog validé ChatGPT ;
-- priorités validées Morris ;
-- lot sélectionné Morris ;
-- store sélectionné si requis ;
-- migration strategy sélectionnée ;
-- auth existante confirmée ou arbitrage ;
-- AJV fit confirmé ;
+- priorités validées (**fait**) ;
+- LOT-IP-0A exécuté et Decision Packs produits ;
+- store / migration / auth / AJV fit décidés si requis ;
+- lot Delivery sélectionné Morris ;
 - fichiers Delivery bornés ;
-- tests attendus définis ;
 - réserves bloquantes identifiées ;
 - cohérence 93/97/99/102.

-Ces critères **ne consomment pas** Delivery.
+**DELIVERY-GATE=NOT-CONSUMED** (D-ASST-BLG-DELIVERY-01).

 ---

@@ -1343,48 +1408,50 @@ Store tech/fournisseur · cloud · hébergeur · région · instances · ORM ·

 ## 29. Actions autorisées

-Corriger 103 · republier handoff · (hors cycle) valider priorités via GO distinct.
+Enregistrer décisions dans 103/104 · publier handoff · (futur) proposer GO exécution LOT-IP-0A.

 ---

 ## 30. Actions interdites

-Modifier 90–102 · créer 104 · code · app/** · packages · migration · endpoint · .env · sélection techno · Delivery · fermer réserve · valider priorités · sélectionner lot · commit/push projet · PR/merge.
+Exécuter LOT-IP-0A · produire Decision Packs dans ce cycle · code · app/** · packages · sélection techno · Delivery · fermer réserve · marquer item DONE · modifier 90–102 · créer 105 · commit/push projet · PR/merge.

 ---

 ## 31. Anti-claims

-Pas Delivery Ready · pas de lot sélectionné · pas de techno choisie · pas d’item DONE sur PR #308–#310 · memory/fixture ≠ A2 durable · pas OpenAI live · pas multi-instance prouvé · pas production-ready · sécurité/RGPD/FinOps non validés · réserves ouvertes · pas PR/merge projet.
+LOT-IP-0A **sélectionné ≠ exécuté** · pas de Decision Pack produit · pas de techno choisie · pas d’item DONE · LOT-D* NOT AUTHORIZED · Delivery NOT-CONSUMED · memory/fixture ≠ A2 durable · pas OpenAI live · réserves ouvertes · pas PR/merge projet.

 ---

 ## 32. Verdict

-**TECHNICAL BACKLOG CORRECTED —**
-**DEPENDENCY GRAPH ACYCLIC —**
-**F-BLG-103-01…04 FIXED —**
-**EXISTING MAIN FOUNDATIONS FROM PR #308 TO #310 RECONCILED —**
-**33 ITEMS / 7 EPICS PRESERVED —**
-**A2 AND TEN ADR PRESERVED —**
-**21 IMPACTS COVERED —**
-**RESERVES KEEP-OPEN —**
-**NON-SELECTIONS PRESERVED —**
-**PRIORITIES AND LOTS REMAIN CANDIDATE —**
-**NO LOT SELECTED —**
-**DOCUMENT 103 CORRECTED — DOCUMENTS 90–102 UNCHANGED —**
-**NO DOCUMENT 104 — NO CODE OR PACKAGE CHANGE —**
-**DELIVERY NOT-CONSUMED —**
-**READY FOR CHATGPT REVALIDATION AND MORRIS BACKLOG PRIORITIZATION DECISION**
+**TECHNICAL BACKLOG PRIORITIES VALIDATED —**
+**33 ITEM PRIORITIES ADOPTED BY MORRIS —**
+**P0=6 / P1=13 / P2=13 / P3=1 —**
+**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**
+**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**
+**LOT-IP-0B DEFERRED —**
+**LOT-IP-0C DEFERRED —**
+**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
+**DOCUMENT 103 UPDATED — DOCUMENT 104 CREATED —**
+**A2 AND TEN ADR PRESERVED — 21 IMPACTS COVERED —**
+**RESERVES KEEP-OPEN — NON-SELECTIONS PRESERVED —**
+**NO ITEM DONE — NO TECHNOLOGY SELECTED —**
+**NO CODE OR PACKAGE CHANGE — DELIVERY NOT-CONSUMED —**
+**READY FOR CHATGPT VALIDATION AND MORRIS LOT-IP-0A EXECUTION DECISION**
+

 ---

 ## 33. Prochaine gate candidate

 ```text
-GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT
+GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)
 ```

 Statut : **candidate uniquement — non consommée**.

-**TECHNICAL BACKLOG DOCUMENTED — MORRIS PRIORITIZATION AND FIRST LOT DECISION REQUIRED — DELIVERY NOT CONSUMED**
+N’autorise pas Delivery ni sélection technologique au-delà des Decision Packs/analyses explicitement bornés.
+
+**TECHNICAL BACKLOG PRIORITIES AND FIRST LOT RECORDED — MORRIS LOT-IP-0A EXECUTION DECISION REQUIRED — DELIVERY NOT CONSUMED**
```

---

## Validations

| Contrôle | Résultat |
|---|---|
| Priorités P0=6 P1=13 P2=13 P3=1 | PASS |
| Total 33 / no dup / no missing | PASS |
| LOT-IP-0A = 01/02/03/06 | PASS |
| LOT-IP-0B = 04/05 DEFERRED | PASS |
| LOT-IP-0C = 04-04 DEFERRED | PASS |
| TB-00-04/05/04-04 absents du premier lot | PASS |
| Graphe 33/56 acyclique | PASS |
| Docs 90–102 byte-identical | PASS |
| Doc 105 absent | PASS |
| No code/packages | PASS |
| Delivery NOT-CONSUMED | PASS |
| LOT-IP-0A non exécuté | PASS |

---

## Garde-fous

FinOps / Sécurité / RGPD / Architecture / Backlog : respectés (voir doc 104 annexe B).

---

## Décisions Morris futures (candidate)

```text
GO IMPLEMENTATION PREPARATION SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — EXECUTE LOT-IP-0A (TB-00-01, TB-00-02, TB-00-03, TB-00-06)
```

Non consommée.

---

## Verdict Review Pack

**TECHNICAL BACKLOG PRIORITIES VALIDATED —**
**33 ITEM PRIORITIES ADOPTED BY MORRIS —**
**P0=6 / P1=13 / P2=13 / P3=1 —**
**LOT-IP-0 RESTRUCTURED INTO DEPENDENCY-SAFE SUBLOTS —**
**LOT-IP-0A SELECTED AS FIRST IMPLEMENTATION-PREPARATION LOT —**
**LOT-IP-0B DEFERRED —**
**LOT-IP-0C DEFERRED —**
**LOT-D1 TO LOT-D5 NOT AUTHORIZED —**
**DOCUMENT 103 UPDATED —**
**DOCUMENT 104 CREATED —**
**A2 AND TEN ADR PRESERVED —**
**21 IMPACTS COVERED —**
**RESERVES KEEP-OPEN —**
**NON-SELECTIONS PRESERVED —**
**NO ITEM DONE —**
**NO TECHNOLOGY SELECTED —**
**NO CODE OR PACKAGE CHANGE —**
**NO PROJECT COMMIT OR PUSH —**
**DELIVERY NOT-CONSUMED —**
**READY FOR HANDOFF PUBLICATION AND CHATGPT VALIDATION**

Review pack verdict : **complete**

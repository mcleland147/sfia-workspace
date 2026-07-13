# SFIA Review Pack — Lot H Execution

**Horodatage :** 2026-07-13 10:34:28 CEST
**Cycle :** 8 — Delivery — Lot H exécution unique
**Profil :** Standard
**Branche :** `delivery/sfia-v2.6-lot-h`
**Base :** `main` @ `8267433361a83b89f663feec7d948edf09eec2eb`
**Verdict cycle :** LOT H EXECUTION COMPLETED — READY FOR MORRIS REVIEW

---

## Instruction ChatGPT obligatoire

Lire obligatoirement depuis Git :
`sfia/review-handoff/sfia-review-handoff/latest-chatgpt-review.md`

Vérifier : cycle unique Lot H ; branche ; HEAD/base ; manifeste 40/40 ; phases H3/H4/H2/H1 ; résultat par fichier ; fichiers modifiés ; fichiers inchangés ; fichiers protégés ; .gitkeep ; références entrantes ; consommateurs ; anomalies corrigées et non corrigées ; contenu complet du rapport ; contenu complet des fichiers modifiés ; diff utile du plan ; décisions Morris ; statut Lot H ; impact Lot J ; conformité handoff.

---

## Local Git Truth Check

| Élément | Valeur |
|---------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace` |
| Branche initiale | `main` @ `8267433361a83b89f663feec7d948edf09eec2eb` |
| Branche exécution | `delivery/sfia-v2.6-lot-h` |
| État initial | clean — untracked `.sfia/`, `.tmp-sfia-review/` |

---

## Git Review Index

| Métrique | Valeur |
|----------|--------|
| Manifeste examiné | 40/40 |
| Modifiés (corpus) | 3 |
| Protégés inchangés | 12 |
| `.gitkeep` inchangés | 9 |
| Fichiers créés | 1 (rapport exécution) |
| Plan | section Lot H mise à jour |
| CSV | inchangé |
| Commit | non |
| Push exécution | non |

---

## Manifeste 40/40 — synthèse

- H3 : 9 `.gitkeep` — 0 modifié — 5 DELETE CANDIDATE documentés
- H4 : 8 fichiers — 1 modifié (`bpmn-process-scope-template`)
- H2 : 7 familles — 2 modifiées (`delivery-qa-test`, `penpot-design-agent`)
- H1 : 16 templates — 0 modifié — 12 protégés lecture seule

---

## Rapport d'exécution complet

```markdown
# SFIA v2.6 — Lot H Execution

**Horodatage :** 2026-07-13 10:34:28 CEST
**Cycle :** 8 — Delivery / implémentation (exécution documentaire Lot H)
**Profil SFIA :** Standard
**Branche :** `delivery/sfia-v2.6-lot-h`
**Base / HEAD initial :** `main` @ `8267433361a83b89f663feec7d948edf09eec2eb`
**Décision Morris :** GO ouverture cycle unique Lot H (2026-07-13)
**Statut cycle :** **LOT H EXECUTION COMPLETED — READY FOR MORRIS REVIEW**

---

## 1. Objectif

Exécuter le Lot H en un cycle Git unique selon les phases internes **H3 → H4 → H2 → H1**, examiner les 40 fichiers du manifeste, appliquer uniquement les corrections documentaires déterministes autorisées, préserver les 12 fichiers protégés, et produire les preuves pour revue Morris.

---

## 2. Périmètre / hors périmètre

**Périmètre :** 40 fichiers `migration_lot_candidate = lot-H` ; rapport d'exécution ; section Lot H du plan ; review pack ; handoff Git.

**Hors périmètre respecté :** suppression, déplacement, renommage, CSV, fichiers protégés, commit/PR/merge Lot H, Lot J, tooling/CI, code applicatif.

---

## 3. Sources consultées

1. `prompts/templates/sfia-cycle-execution-template.md` (lecture seule — protégé)
2. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
3. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
5. `2026-07-11-sfia-v2.6-repository-cartography.csv` (lecture seule — frozen)
6. `2026-07-11-sfia-v2.6-repository-cartography.md`
7. `2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`
8. `2026-07-13-sfia-v2.6-lot-h-cadrage.md`
9. Corpus intégral 40/40 (lecture)
10. Consommateurs : routing guide, operating model, BPMN closure, Penpot docs, delivery QA standards

---

## 4. Local Git Truth Check

| Élément | Valeur |
|---------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace` |
| Branche initiale | `main` |
| HEAD / main / origin/main | `8267433361a83b89f663feec7d948edf09eec2eb` |
| État initial | aucune modification versionnée ; untracked connus (`.sfia/`, `.tmp-sfia-review/`) |
| Branche créée | `delivery/sfia-v2.6-lot-h` @ `8267433361a83b89f663feec7d948edf09eec2eb` |

**Verdict :** PASS

---

## 5. Manifeste 40/40

| Métrique | Valeur |
|----------|--------|
| Lignes CSV `lot-H` | 40 |
| Présents Git | 40/40 |
| Absences | 0 |
| Doublons | 0 |
| H3 / H4 / H2 / H1 | 9 / 8 / 7 / 16 |
| Operational | 13 |
| Protected | 12 |
| NO ACTION | 10 |
| VALIDATE BEFORE CHANGE | 9 |
| INVESTIGATE | 9 |

**Verdict :** MANIFEST VALID

---

## 6. Table manifeste d'exécution

| ID | Chemin | Phase | Action cadrage | Résultat exécution | Modifié | Preuve | Réserve |
|----|--------|-------|----------------|-------------------|---------|--------|---------|
| H-001 | `docs/templates/architecture/functional-architecture-scope-template.md` | H4 | NO ACTION — KEEP | KEEP — NO CHANGE | non | Lecture — cohérent | — |
| H-002 | `docs/templates/architecture/functional-architecture-summary-template.md` | H4 | NO ACTION — KEEP | KEEP — NO CHANGE | non | Lecture — cohérent | — |
| H-003 | `docs/templates/process/bpmn-process-analysis-template.md` | H4 | VALIDATE BEFORE CHANGE | VALIDATED — NO ANOMALY | non | Aucun lien cassé | — |
| H-004 | `docs/templates/process/bpmn-process-scope-template.md` | H4 | VALIDATE BEFORE CHANGE | CORRECTED — PATH FIX | **oui** | L.128 chemin checklist BPMN | — |
| H-005 | `docs/templates/ux-ui/ux-ui-reprise-scope-template.md` | H4 | NO ACTION — KEEP | KEEP — NO CHANGE | non | Lecture — cohérent | — |
| H-006 | `docs/templates/ux-ui/ux-ui-reprise-summary-template.md` | H4 | NO ACTION — KEEP | KEEP — NO CHANGE | non | Lecture — cohérent | — |
| H-007 | `method/sfia-fast-track/templates/cycle-template.md` | H1 | VALIDATE BEFORE CHANGE | VALIDATED — NO ANOMALY | non | Aucun lien | — |
| H-008 | `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md` | H1 | VALIDATE BEFORE CHANGE | VALIDATED — NO ANOMALY | non | Placeholders projet uniquement | — |
| H-009 | `method/sfia-fast-track/templates/post-merge-template.md` | H1 | VALIDATE BEFORE CHANGE | VALIDATED — NO ANOMALY | non | Aucun lien | — |
| H-010 | `method/sfia-fast-track/templates/pr-body-template.md` | H1 | VALIDATE BEFORE CHANGE | VALIDATED — NO ANOMALY | non | Aucun lien | — |
| H-011 | `prompts/README.md` | H4 | NO ACTION — KEEP | KEEP — NO CHANGE | non | Index navigation valide | — |
| H-012 | `prompts/arbitrages/.gitkeep` | H3 | INVESTIGATE | KEEP — PLACEHOLDER REQUIRED | non | Dossier vide | — |
| H-013 | `prompts/architecture/.gitkeep` | H3 | INVESTIGATE | DELETE CANDIDATE | non | Dossier non vide (2 fichiers) | Gate Morris suppression |
| H-014 | `prompts/architecture/functional-architecture-prompt-family.md` | H2 | NO ACTION — KEEP | KEEP — NO CHANGE | non | Liens docs valides | — |
| H-015 | `prompts/bpmn/bpmn-prompt-family.md` | H2 | NO ACTION — KEEP | KEEP — NO CHANGE | non | Liens BPMN valides | — |
| H-016 | `prompts/cadrage/.gitkeep` | H3 | INVESTIGATE | KEEP — PLACEHOLDER REQUIRED | non | Dossier vide | — |
| H-017 | `prompts/governance/.gitkeep` | H3 | INVESTIGATE | DELETE CANDIDATE | non | Sous-dossier notion présent | Gate Morris suppression |
| H-018 | `prompts/governance/notion/.gitkeep` | H3 | INVESTIGATE | KEEP — PLACEHOLDER REQUIRED | non | Dossier vide | — |
| H-019 | `prompts/prompt-catalog.md` | H4 | PROTECTED | READ-ONLY — PROTECTED | non | Présent — spine opérationnelle | — |
| H-020 | `prompts/qa/.gitkeep` | H3 | INVESTIGATE | DELETE CANDIDATE | non | 2 familles QA présentes | Gate Morris suppression |
| H-021 | `prompts/qa/delivery-qa-test-prompt-family.md` | H2 | VALIDATE BEFORE CHANGE | CORRECTED — PATH FIX | **oui** | L.174-175 chemins standards v2 | — |
| H-022 | `prompts/qa/qa-tester-prompt-family.md` | H2 | VALIDATE BEFORE CHANGE | VALIDATED — NO ANOMALY | non | Liens markdown valides | — |
| H-023 | `prompts/roles/.gitkeep` | H3 | INVESTIGATE | KEEP — PLACEHOLDER REQUIRED | non | Dossier vide | — |
| H-024 | `prompts/security/.gitkeep` | H3 | INVESTIGATE | DELETE CANDIDATE | non | prompt-sec-001 présent | Gate Morris suppression |
| H-025 | `prompts/templates/01-create-foundation-document.md` | H1 | PROTECTED | READ-ONLY — PROTECTED | non | Spine routing | — |
| H-026 | `prompts/templates/02-update-document-v1-1.md` | H1 | PROTECTED | READ-ONLY — PROTECTED | non | Spine routing | — |
| H-027 | `prompts/templates/03-create-operational-checklist.md` | H1 | PROTECTED | READ-ONLY — PROTECTED | non | Spine routing | — |
| H-028 | `prompts/templates/04-validate-cursor-result.md` | H1 | PROTECTED | READ-ONLY — PROTECTED | non | Spine routing | — |
| H-029 | `prompts/templates/06-prepare-pr-summary.md` | H1 | PROTECTED | READ-ONLY — PROTECTED | non | Spine routing + pipeline | — |
| H-030 | `prompts/templates/07-write-post-merge-status.md` | H1 | PROTECTED | READ-ONLY — PROTECTED | non | Spine routing + pipeline | — |
| H-031 | `prompts/templates/08-capitalize-method-asset.md` | H1 | PROTECTED | READ-ONLY — PROTECTED | non | Spine routing | — |
| H-032 | `prompts/templates/09-prepare-notion-mapping.md` | H1 | PROTECTED | READ-ONLY — PROTECTED | non | Spine routing | — |
| H-033 | `prompts/templates/10-perform-safe-repository-cleanup.md` | H1 | PROTECTED | READ-ONLY — PROTECTED | non | Spine routing | — |
| H-034 | `prompts/templates/README.md` | H1 | PROTECTED | READ-ONLY — PROTECTED | non | Index validé | Réserve : liste `05-validate-pr-readiness.md` hors manifeste |
| H-035 | `prompts/templates/sfia-cycle-execution-template.md` | H1 | PROTECTED | READ-ONLY — PROTECTED | non | Template canonique cycle | — |
| H-036 | `prompts/templates/sfia-prompt-templates-context-pack.md` | H1 | NO ACTION — KEEP | KEEP — NO CHANGE | non | Pack contextuel faible couplage | — |
| H-037 | `prompts/tooling/penpot/penpot-design-agent-prompt-family.md` | H2 | VALIDATE BEFORE CHANGE | CORRECTED — LINK FIX | **oui** | L.7-9 liens docs Penpot | — |
| H-038 | `prompts/ux-ui/.gitkeep` | H3 | INVESTIGATE | DELETE CANDIDATE | non | 2 familles UX présentes | Gate Morris suppression |
| H-039 | `prompts/ux-ui/figma-fidelity-gate-prompt-family.md` | H2 | NO ACTION — KEEP | KEEP — NO CHANGE | non | Liens docs valides | — |
| H-040 | `prompts/ux-ui/ux-ui-reprise-prompt-family.md` | H2 | NO ACTION — KEEP | KEEP — NO CHANGE | non | Liens docs valides | — |

---

## 7. Résultats par phase

| Phase | Volume | Examinés | Modifiés | Inchangés | Réserves | Verdict |
|-------|-------:|---------:|---------:|----------:|---------:|---------|
| H3 | 9 | 9 | 0 | 9 | 5 DELETE CANDIDATE | **PASS** |
| H4 | 8 | 8 | 1 | 7 | 0 | **PASS** |
| H2 | 7 | 7 | 2 | 5 | 0 | **PASS** |
| H1 | 16 | 16 | 0 | 16 | 1 (README template 05) | **PASS** |

---

## 8. Fichiers modifiés

| Fichier | Anomalie | Correction | Consommateurs impactés | Validation |
|---------|----------|------------|------------------------|------------|
| `docs/templates/process/bpmn-process-scope-template.md` | Chemin bare `bpmn-integration-checklist.md` non résolvable | → `docs/practices/process/bpmn-integration-checklist.md` | BPMN closure docs (lecture) | Cible Git unique ✓ |
| `prompts/qa/delivery-qa-test-prompt-family.md` | Références L.174-175 : noms bare sans chemin repo | → chemins complets sous `method/.../sfia-v2/` | routing guide (indirect) | Cibles existent ✓ |
| `prompts/tooling/penpot/penpot-design-agent-prompt-family.md` | Liens markdown L.7-9 : `../../docs/` (profondeur incorrecte) | → `../../../docs/tooling/penpot/...` | penpot-cursor-agent-rules | 3 cibles résolvent ✓ |

**Consommateurs modifiés :** aucun (corrections locales dans le corpus Lot H uniquement).

---

## 9. Fichiers protégés (12) — lecture seule

| Fichier | Anomalie détectée | Modification requise | Gate Morris |
|---------|-------------------|----------------------|-------------|
| `prompts/prompt-catalog.md` | aucune bloquante | non | — |
| `prompts/templates/01`–`04`, `06`–`10` | aucune bloquante | non | — |
| `prompts/templates/README.md` | liste template 05 hors manifeste | non (réserve documentaire) | — |
| `prompts/templates/sfia-cycle-execution-template.md` | aucune | non | Critical si modification |

**Verdict :** 12/12 inchangés dans le diff.

---

## 10. `.gitkeep` (phase H3)

| Fichier | Dossier | État | Disposition recommandée | Gate futur |
|---------|---------|------|-------------------------|------------|
| `prompts/arbitrages/.gitkeep` | arbitrages | vide | KEEP — PLACEHOLDER REQUIRED | — |
| `prompts/architecture/.gitkeep` | architecture | 2 fichiers trackés | DELETE CANDIDATE | Morris gate suppression |
| `prompts/cadrage/.gitkeep` | cadrage | vide | KEEP — PLACEHOLDER REQUIRED | — |
| `prompts/governance/.gitkeep` | governance | sous-dossier notion | DELETE CANDIDATE | Morris gate suppression |
| `prompts/governance/notion/.gitkeep` | governance/notion | vide | KEEP — PLACEHOLDER REQUIRED | — |
| `prompts/qa/.gitkeep` | qa | 2 familles | DELETE CANDIDATE | Morris gate suppression |
| `prompts/roles/.gitkeep` | roles | vide | KEEP — PLACEHOLDER REQUIRED | — |
| `prompts/security/.gitkeep` | security | prompt-sec-001 | DELETE CANDIDATE | Morris gate suppression |
| `prompts/ux-ui/.gitkeep` | ux-ui | 2 familles | DELETE CANDIDATE | Morris gate suppression |

**Aucun `.gitkeep` modifié ou supprimé dans ce cycle.**

---

## 11. Anomalies non corrigées / réserves

| Réserve | Type | Décision Morris |
|---------|------|-----------------|
| 5 `.gitkeep` redondants | recommandation | Gate suppression future |
| `05-validate-pr-readiness.md` listé dans templates README hors manifeste Lot H | observation | Hors périmètre exécution |
| Chemins illustratifs Interv360 dans templates UX (non liens markdown) | observation | Non bloquant |

---

## 12. Décisions Morris requises

| Décision | Motif | Impact | Bloquante |
|----------|-------|--------|-----------|
| Revue exécution Lot H | 3 corrections à valider | commit/PR | oui (prochaine étape) |
| Suppression `.gitkeep` redondants (5) | dossiers non vides | nettoyage structure | non |
| GO commit + PR Lot H | livraison | merge `main` | oui (post-revue) |

---

## 13. Validations Git finales

| Contrôle | Résultat |
|----------|----------|
| Fichiers protégés absents du diff | ✓ |
| `.gitkeep` absents du diff | ✓ |
| CSV absent du diff | ✓ |
| `projects/**` absent | ✓ |
| tooling/CI absent | ✓ |
| Aucun commit sur branche exécution | ✓ |
| Aucun push branche exécution | ✓ |

**Diff :** 3 fichiers corpus, +1 rapport, +1 plan section — 5 fichiers versionnés modifiés/créés au total.

---

## 14. Impact Lot J

Lot J reste **non ouvert**. Aucune suppression exécutée. F-005 et exclusions Lot F inchangées.

---

## 15. Statut Lot H

| Champ | Valeur |
|-------|--------|
| Cadrage | merged (PR #187) |
| Exécution | **completed — review pending** |
| Fichiers examinés | 40/40 |
| Fichiers modifiés | 3/40 |
| Prochaine gate | **GO Morris revue + commit/PR** |

---

## 16. Verdict

**`LOT H EXECUTION COMPLETED — READY FOR MORRIS REVIEW`**

*Rapport généré — cycle unique Lot H — phases H3 → H4 → H2 → H1 — aucune modification artificielle — 12 fichiers protégés préservés.*

```

---

## Plan — diff section Lot H

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index 626dec9..3a96adc 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -282,19 +282,21 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 
 | Champ | Contenu |
 |-------|---------|
-| **Qualification** | **cadrage completed — execution not opened** |
+| **Qualification** | **execution completed — review pending** |
 | **Stratégie exécution** | **1 cycle unique Lot H** — phases internes H3 → H4 → H2 → H1 (Morris 2026-07-13) |
 | **Rapport cadrage** | `2026-07-13-sfia-v2.6-lot-h-cadrage.md` |
-| **Branche cadrage** | `cadrage/sfia-v2.6-lot-h` @ `2883e37` |
+| **Rapport exécution** | `2026-07-13-sfia-v2.6-lot-h-execution.md` |
+| **Branche exécution** | `delivery/sfia-v2.6-lot-h` @ `8267433` (base) |
 | **Manifeste CSV** | **40/40** confirmé Git |
 | **Phases internes** | H3 (9) → H4 (8) → H2 (7) → H1 (16) — **pas de sous-lots Git séparés** |
-| **Fichiers protégés** | **12** — spine routing guide / catalog / templates opérationnels |
+| **Fichiers examinés** | **40/40** |
+| **Fichiers modifiés** | **3** (corrections lien/chemin déterministes) |
+| **Fichiers protégés** | **12** — inchangés (lecture seule) |
+| **`.gitkeep`** | **9** qualifiés — **0** supprimé ; **5** DELETE CANDIDATE (gate Morris futur) |
 | **Operational** | **13** |
-| **`.gitkeep` investigate** | **9** |
-| **Templates canoniques** | **16** (12 `prompts/templates/` + 4 `method/.../templates/`) |
-| **Familles prompts** | **7** |
-| **Statut exécution Lot H** | **not opened** — GO Morris cycle unique requis |
-| **Next gate** | **GO ouverture exécution cycle unique Lot H** |
+| **Réserves** | `.gitkeep` redondants (5) ; template `05-validate-pr-readiness.md` hors manifeste |
+| **Statut exécution Lot H** | **completed — review pending** |
+| **Next gate** | **GO Morris revue exécution + commit/PR** |
 
 **Règle Lot I :** ne pas appliquer logique documentaire aux artefacts `not-applicable`. **338** fichiers `lifecycle not-applicable` au total — dont **52** tagués lot-I.
 
@@ -434,4 +436,4 @@ Les clarifications des lots (Lot 0, Lot F, Lot G, Lot D, sous-lots) sont intégr
 
 ---
 
-*Plan candidate — **Lot 0 closed (76/76)** — **Lot A closed** — **Lot B not required** — **Lot C closed** — **Lot D closed (149/149)** — **D1 closed** — **D2 closed** — **D3 closed** — **Lot E closed (75/75)** — **Lot F closed** (PR #186) — **Lot H cadrage completed — strategy aligned — execution not opened** — **Lots G/I excluded** — **Lot J not opened** — **Next gate: GO Morris cycle unique Lot H***.*
+*Plan candidate — **Lot 0 closed (76/76)** — **Lot A closed** — **Lot B not required** — **Lot C closed** — **Lot D closed (149/149)** — **D1 closed** — **D2 closed** — **D3 closed** — **Lot E closed (75/75)** — **Lot F closed** (PR #186) — **Lot H execution completed — review pending** (3/40 modified) — **Lots G/I excluded** — **Lot J not opened** — **Next gate: GO Morris revue exécution Lot H + commit/PR***.*

```

---

## Fichiers corpus modifiés — contenu complet post-modification


### `docs/templates/process/bpmn-process-scope-template.md`

#### Diff

```diff
diff --git a/docs/templates/process/bpmn-process-scope-template.md b/docs/templates/process/bpmn-process-scope-template.md
index 928c7f0..b2e1e85 100644
--- a/docs/templates/process/bpmn-process-scope-template.md
+++ b/docs/templates/process/bpmn-process-scope-template.md
@@ -125,7 +125,7 @@ Le BPMN ne couvre pas :
 
 ## 12. Conclusion
 
-[Résumer si le projet est prêt pour la modélisation BPMN — Go / No-Go selon `bpmn-integration-checklist.md`.]
+[Résumer si le projet est prêt pour la modélisation BPMN — Go / No-Go selon `docs/practices/process/bpmn-integration-checklist.md`.]
 
 ---
 

```

#### Contenu complet

```markdown
# [PROJECT] — Cadrage de la phase processus BPMN

**Projet** : [PROJECT_ID]  
**Phase** : 03-process  
**Type** : Cadrage BPMN  
**Statut** : Draft  
**Méthode associée** : `docs/practices/process/bpmn-process-modeling-method.md`  
**Standard associé** : `docs/practices/process/bpmn-deliverables-standard.md`

---

## 1. Objectif

Décrire l'objectif de la phase BPMN pour le projet **[PROJECT]**.

**Précisions :**

- pourquoi BPMN est utile sur ce projet ;
- quel **processus métier** est concerné ;
- ce que le BPMN doit **clarifier** ;
- ce que le BPMN **ne doit pas** produire (backlog, tests, code, delivery).

---

## 2. Sources documentaires

| Source | Apport |
|--------|--------|
| [SOURCE_1] | [APPORT] |
| [SOURCE_2] | [APPORT] |
| [SOURCE_3] | [APPORT] |

---

## 3. Périmètre BPMN

Le BPMN couvre :

- [PROCESS_STEP_1]
- [PROCESS_STEP_2]
- [PROCESS_STEP_3]

---

## 4. Hors périmètre BPMN

Le BPMN ne couvre pas :

- backlog ;
- user stories ;
- cas de tests ;
- scénarios de tests ;
- code applicatif ;
- delivery ;
- architecture technique détaillée ;
- publication Notion automatique.

---

## 5. Acteurs / lanes envisagés

| Acteur / lane | Rôle dans le processus |
|---------------|------------------------|
| [LANE_1] | [ROLE] |
| [LANE_2] | [ROLE] |
| [LANE_3] | [ROLE] |

---

## 6. Objets métier concernés

| Objet métier | Rôle dans le processus |
|--------------|------------------------|
| [OBJECT_1] | [ROLE] |
| [OBJECT_2] | [ROLE] |

---

## 7. Statuts / étapes à représenter

| Statut / étape | Sens métier |
|----------------|-------------|
| [STATUS_1] | [MEANING] |
| [STATUS_2] | [MEANING] |

---

## 8. Diagrammes prévus

| Diagramme | Fichier cible | Priorité | Objectif |
|-----------|---------------|----------|----------|
| Processus principal | `[project]-main-process.bpmn` | Haute | Happy path métier |
| Exceptions métier | `[project]-exceptions.bpmn` | Haute / Moyenne | Exceptions et branches |
| Anomalies d'intégration | `[project]-integration-errors.bpmn` | Selon projet | Flux d'erreurs / reprise |

---

## 9. Hypothèses

- [HYPOTHESIS_1]
- [HYPOTHESIS_2]

---

## 10. Points ouverts

| Sujet | Point ouvert | Décision attendue |
|-------|--------------|-------------------|
| [TOPIC] | [OPEN_POINT] | [EXPECTED_DECISION] |

---

## 11. Garde-fous

- [ ] pas de backlog produit ;
- [ ] pas de user stories produites ;
- [ ] pas de cas de tests produits ;
- [ ] pas de scénarios de tests produits ;
- [ ] pas de code applicatif produit ;
- [ ] pas de delivery ouvert ;
- [ ] pas de publication Notion automatique ;
- [ ] Git reste la source de vérité.

---

## 12. Conclusion

[Résumer si le projet est prêt pour la modélisation BPMN — Go / No-Go selon `docs/practices/process/bpmn-integration-checklist.md`.]

---

*Template cadrage BPMN — SFIA — à compléter par projet.*

```


### `prompts/qa/delivery-qa-test-prompt-family.md`

#### Diff

```diff
diff --git a/prompts/qa/delivery-qa-test-prompt-family.md b/prompts/qa/delivery-qa-test-prompt-family.md
index fa830f1..33e4756 100644
--- a/prompts/qa/delivery-qa-test-prompt-family.md
+++ b/prompts/qa/delivery-qa-test-prompt-family.md
@@ -171,6 +171,6 @@ PROMPT-QA-D-001 (bootstrap/cadrage, une fois)
 
 ## 5. Références
 
-- `sfia-v2-delivery-qa-test-standard.md`
-- `sfia-v2-automation-levels.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
+- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md`
 - `qa-tester-prompt-family.md` (revues amont — `PROMPT-QA-001` à `010` ; complémentaire, pas substitut)

```

#### Contenu complet

```markdown
# Famille de prompts — Delivery QA / Test

**Type :** Prompts Cursor / IA  
**Domaine :** QA / Test — delivery incrémental SFIA v2.0  
**Statut :** Draft — capitalisation méthode  
**Usage :** Réutilisable  
**Standard associé :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`  
**Dossier :** `prompts/qa/`

> **Référence d'application :** Chantiers360 v2 — delivery INC-01+ ; gates QA-G0 à QA-G4.

**Convention d'identifiants :** préfixe `PROMPT-QA-D-` (delivery) — distinct de la famille amont `qa-tester-prompt-family.md` (`PROMPT-QA-001` à `010`).

---

## 1. Objectif

Cette famille couvre le **cycle QA/Test transverse** par incrément delivery :

- qualifier la testabilité ;
- préparer stratégie et scénarios ;
- implémenter et exécuter tests automatisés ;
- produire rapports et analyser réserves ;
- valider QA readiness avant PR readiness ;
- contrôler non-régression post-merge.

Ces prompts **ne doivent pas** :

- remplacer la validation Morris (Morris valide les preuves, ne déroule pas les tests) ;
- ouvrir PR / push / merge sans GO explicite ;
- modifier backlog, design, captures hors périmètre QA ;
- consulter Chantiers360 V0 ;
- inférer GO PR depuis tests passants seuls.

---

## 2. Règles générales

- **Une tâche Cursor** = un périmètre explicite (stratégie, scénarios, implémentation, exécution, réserves, readiness, post-merge).
- **Git** = source de vérité — rapports et tests versionnés.
- **Morris** = GO/NO-GO QA, arbitrage réserves, GO PR / merge.
- **Tests passants ≠ validation Morris.**

---

## 3. Prompts de la famille

| ID | Intitulé | Gate |
|----|----------|------|
| `PROMPT-QA-D-001` | Qualifier testabilité projet | QA-G0 |
| `PROMPT-QA-D-002` | Préparer stratégie QA incrément | QA-G1 |
| `PROMPT-QA-D-003` | Générer scénarios recette métier | — |
| `PROMPT-QA-D-004` | Implémenter tests automatisés incrément | QA-G2 |
| `PROMPT-QA-D-005` | Exécuter tests et produire rapport QA | — |
| `PROMPT-QA-D-006` | Analyser réserves QA | — |
| `PROMPT-QA-D-007` | Valider QA readiness avant PR readiness | QA-G3 |
| `PROMPT-QA-D-008` | Post-merge non-régression | QA-G4 |

### PROMPT-QA-D-001 — Qualifier testabilité projet

**Usage :** Bootstrap ou cadrage — QA-G0.

**Entrées :** framing, besoin, hypothèses, exclusions, maturité projet.

**Sortie :** note testabilité — points vérifiables, ambiguïtés, risques, besoin QA renforcée ou standard.

**Garde-fous :** pas de tests ; pas de delivery ; pas de backlog modifié.

---

### PROMPT-QA-D-002 — Préparer stratégie QA incrément

**Usage :** Début delivery INC-n — après archi technique (QA-G1).

**Entrées :** `delivery-increments.md`, US de l'incrément, `acceptance-criteria.md`, stack, contraintes.

**Sortie :** `qa-strategy.md` — périmètre, outillage, niveaux test, traçabilité US/AC.

**Garde-fous :** scope strict incrément ; pas d'INC suivant.

---

### PROMPT-QA-D-003 — Générer scénarios recette métier

**Usage :** Avant ou pendant implémentation tests — alignement AC.

**Entrées :** US incrément, acceptance criteria, parcours UX, réserves connues.

**Sortie :** `test-scenarios.md` — scénarios happy/non-happy, données, résultats attendus, lien AC.

**Garde-fous :** scénarios documentaires ; pas d'exécution sans `PROMPT-QA-D-004` / `PROMPT-QA-D-005`.

---

### PROMPT-QA-D-004 — Implémenter tests automatisés incrément

**Usage :** Delivery INC-n — QA-G2.

**Entrées :** `test-scenarios.md`, `qa-strategy.md`, code incrément, commandes projet.

**Sortie :** tests dans `app/` (ou chemin documenté), `2026-07-06-qa-implementation-report.md`.

**Garde-fous :** périmètre US incrément ; pas de refactor hors scope ; pas de PR.

---

### PROMPT-QA-D-005 — Exécuter tests et produire rapport QA

**Usage :** Fin delivery INC-n — avant QA readiness.

**Entrées :** branche delivery, scripts `lint`/`build`/`test`, scénarios, commit.

**Sortie :** `2026-07-06-qa-execution-report.md` — commandes, pass/fail, US couvertes, logs, verdict proposé.

**Garde-fous :** rapport factuel ; pas de GO Morris implicite.

---

### PROMPT-QA-D-006 — Analyser réserves QA

**Usage :** Après exécution — préparation décision Morris.

**Entrées :** `2026-07-06-qa-execution-report.md`, écarts backlog/code, AC non couverts.

**Sortie :** `qa-reserves.md` — bloquante / majeure / mineure, impact, recommandation GO/NO-GO.

**Garde-fous :** Morris arbitre ; QA propose seulement.

---

### PROMPT-QA-D-007 — Valider QA readiness avant PR readiness

**Usage :** QA-G3 — gate obligatoire avant PR readiness.

**Entrées :** tous artefacts `08-qa-test/inc-<nn>/`, rapport exécution, réserves.

**Sortie :** `2026-07-06-qa-readiness.md` — checklist QA-G3, verdict GO / GO WITH RESERVES / NO-GO, preuves pour Morris.

**Garde-fous :** pas de PR readiness sans QA-G3 ; pas de création PR.

---

### PROMPT-QA-D-008 — Post-merge non-régression

**Usage :** Après merge incrément — QA-G4.

**Entrées :** `main` à jour, commit merge, suite tests critique, périmètre incrément.

**Sortie :** rapport post-merge QA — non-régression OK / écarts / actions.

**Garde-fous :** read-only sur code sauf fix explicite ; pas de nouvel incrément.

---

## 4. Séquence recommandée par incrément

```
PROMPT-QA-D-001 (bootstrap/cadrage, une fois)
    → PROMPT-QA-D-002 (début INC-n)
    → PROMPT-QA-D-003 (scénarios)
    → [delivery code]
    → PROMPT-QA-D-004 (implémentation tests)
    → PROMPT-QA-D-005 (exécution)
    → PROMPT-QA-D-006 (réserves)
    → PROMPT-QA-D-007 (QA readiness → Morris)
    → [PR readiness → PR → merge Morris]
    → PROMPT-QA-D-008 (post-merge)
```

---

## 5. Références

- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md`
- `qa-tester-prompt-family.md` (revues amont — `PROMPT-QA-001` à `010` ; complémentaire, pas substitut)

```


### `prompts/tooling/penpot/penpot-design-agent-prompt-family.md`

#### Diff

```diff
diff --git a/prompts/tooling/penpot/penpot-design-agent-prompt-family.md b/prompts/tooling/penpot/penpot-design-agent-prompt-family.md
index 24449d4..dcd8765 100644
--- a/prompts/tooling/penpot/penpot-design-agent-prompt-family.md
+++ b/prompts/tooling/penpot/penpot-design-agent-prompt-family.md
@@ -4,9 +4,9 @@
 **Domaine** : UX/UI — Design tooling  
 **Statut** : Draft  
 **Usage** : Réutilisable  
-**Architecture** : [`docs/tooling/penpot/penpot-design-agent-architecture.md`](../../docs/tooling/penpot/penpot-design-agent-architecture.md)  
-**Règles agent** : [`docs/tooling/penpot/penpot-cursor-agent-rules.md`](../../docs/tooling/penpot/penpot-cursor-agent-rules.md)  
-**Intégration méthodes** : [`docs/tooling/penpot/penpot-sfia-method-integration.md`](../../docs/tooling/penpot/penpot-sfia-method-integration.md)  
+**Architecture** : [`docs/tooling/penpot/penpot-design-agent-architecture.md`](../../../docs/tooling/penpot/penpot-design-agent-architecture.md)  
+**Règles agent** : [`docs/tooling/penpot/penpot-cursor-agent-rules.md`](../../../docs/tooling/penpot/penpot-cursor-agent-rules.md)  
+**Intégration méthodes** : [`docs/tooling/penpot/penpot-sfia-method-integration.md`](../../../docs/tooling/penpot/penpot-sfia-method-integration.md)  
 **Dossier** : `prompts/tooling/penpot/`
 
 ---

```

#### Contenu complet

```markdown
# Famille de prompts — Penpot Design Agent SFIA

**Type** : Prompts Cursor / IA  
**Domaine** : UX/UI — Design tooling  
**Statut** : Draft  
**Usage** : Réutilisable  
**Architecture** : [`docs/tooling/penpot/penpot-design-agent-architecture.md`](../../../docs/tooling/penpot/penpot-design-agent-architecture.md)  
**Règles agent** : [`docs/tooling/penpot/penpot-cursor-agent-rules.md`](../../../docs/tooling/penpot/penpot-cursor-agent-rules.md)  
**Intégration méthodes** : [`docs/tooling/penpot/penpot-sfia-method-integration.md`](../../../docs/tooling/penpot/penpot-sfia-method-integration.md)  
**Dossier** : `prompts/tooling/penpot/`

---

## 1. Objectif

Cette famille de prompts permet de dérouler l'**intégration Penpot self-host + Cursor MCP** et les **cycles design V2** SFIA de manière contrôlée.

**Interdits globaux :** secrets, clés MCP, credentials, mots de passe, `.env` réel, maquette hors specs, backlog, user stories, tests, code applicatif, API/SQL métier, BPMN, merge automatique, Notion.

---

## 2. Variables à remplacer

| Variable | Description |
|----------|-------------|
| `[PROJECT_NAME]` | Nom du projet |
| `[PROJECT_CODE]` | Code projet |
| `[WORKSPACE_PATH]` | Chemin local sfia-workspace |
| `[BRANCH_NAME]` | Branche Git de travail |
| `[PROJECT_DESIGN_PATH]` | ex. `projects/[projet]/03-design` |
| `[PROJECT_UX_PATH]` | ex. `projects/[projet]/06-ux-ui` |
| `[PENPOT_FILE]` | Nom ou référence fichier Penpot |
| `[PENPOT_INSTANCE_URL]` | ex. `http://localhost:9001` (sans credentials) |
| `[SCREEN_NAME]` | Nom écran aligné `screen-inventory.md` |

---

## 3. Prompt 1 — Installer / cadrer Penpot self-host

**Objectif :** préparer l'installation Penpot Docker en mode template sûr (documentation, pas d'install forcée).

**Préconditions :** Docker et Docker Compose disponibles sur la machine cible ; accès doc officielle Penpot.

**Sources Git à lire :**
- `docs/tooling/penpot/penpot-self-host-docker-guide.md`
- `docker/penpot/README.md`
- `docker/penpot/.env.example`

**Fichier Penpot cible :** aucun (phase install).

**Interdits :** commiter `.env` ; commiter secrets ; installer sans validation humaine ; créer maquette.

**Résultat attendu :** checklist install remplie ou plan d'install documenté ; `.env` local créé hors Git ; aucun secret dans le repo.

**Revue humaine :** valider ports, backup et exposition réseau avant démarrage conteneurs.

```
Objectif : Préparer Penpot self-host pour [PROJECT_NAME] / écosystème SFIA.
Lire les guides Git listés. Suivre doc officielle Penpot Docker.
Copier docker/penpot/.env.example vers .env localement — générer PENPOT_SECRET_KEY hors Git.
Ne pas commiter .env ni secrets. Ne pas créer de maquette.
Résultat : checklist + confirmation aucun secret commité.
Demander revue humaine avant docker compose up en production.
```

---

## 4. Prompt 2 — Configurer Cursor MCP local

**Objectif :** configurer MCP Penpot dans Cursor à partir du template.

**Préconditions :** Penpot accessible ; doc MCP Penpot consultée ; template `.cursor/mcp-templates/penpot-mcp.example.json`.

**Sources Git à lire :**
- `.cursor/mcp-templates/README.md`
- `.cursor/mcp-templates/penpot-mcp.example.json`
- `docs/tooling/penpot/penpot-cursor-agent-rules.md`

**Fichier Penpot cible :** aucun (config locale).

**Interdits :** commiter config MCP avec clés ; inclure tokens dans prompts versionnés.

**Résultat attendu :** instructions config locale Cursor ; URL MCP adaptée ; test connexion décrit.

**Revue humaine :** valider URL MCP et session Penpot navigateur si requis.

```
Objectif : Configurer Cursor MCP Penpot pour [WORKSPACE_PATH].
Copier template penpot-mcp.example.json vers config MCP locale Cursor — pas dans Git.
Adapter URL (ex. http://localhost:4401/mcp). Aucune clé dans le repo.
Tester lecture simple Penpot si instance up.
Revue humaine : confirmer connexion MCP OK.
```

---

## 5. Prompt 3 — Créer un projet Penpot SFIA

**Objectif :** créer un fichier projet Penpot selon convention SFIA.

**Préconditions :** Penpot installé ; MCP configuré localement ; `design-v2-tooling-scope.md` ou équivalent lu.

**Sources Git à lire :**
- `[PROJECT_DESIGN_PATH]/design-v2-tooling-scope.md` (si existe)
- `[PROJECT_UX_PATH]/ux-ui-reprise-scope.md`
- `docs/tooling/penpot/penpot-design-agent-architecture.md` §8

**Fichier Penpot cible :** `[PROJECT_CODE] — Design V2` (nouveau fichier).

**Interdits :** écrans hors scope ; secrets dans Git ; modification specs UX sans cycle doc.

**Résultat attendu :** projet Penpot créé ; `penpot-project-reference.md` rédigé dans Git avec lien/référence (sans credentials).

**Revue humaine :** valider nom projet et périmètre avant création pages.

```
Objectif : Créer projet Penpot [PROJECT_CODE] — Design V2.
Lire specs Git. Créer fichier Penpot via MCP selon convention.
Documenter référence dans [PROJECT_DESIGN_PATH]/penpot-project-reference.md.
Pas de secret. Pas d'écran hors scope.
Revue humaine obligatoire avant suite.
```

---

## 6. Prompt 4 — Créer une structure de pages standard

**Objectif :** créer les pages 00–06 et 99 dans le fichier Penpot.

**Préconditions :** Projet Penpot existant ; MCP actif.

**Sources Git à lire :**
- `penpot-project-reference.md`
- `docs/tooling/penpot/penpot-design-agent-architecture.md` §8

**Fichier Penpot cible :** `[PENPOT_FILE]`

**Interdits :** suppression pages existantes sans plan ; design system non validé.

**Résultat attendu :** pages standard créées ; résumé structure ; mise à jour `penpot-project-reference.md`.

**Revue humaine :** valider structure avant ajout frames.

```
Objectif : Créer pages standard SFIA (00 Cover … 06 Components, 99 Archive) dans [PENPOT_FILE].
Inspecter d'abord via MCP. Créer pages manquantes une par une.
Mettre à jour penpot-project-reference.md. Résumé après chaque page.
Revue humaine avant frames détaillées.
```

---

## 7. Prompt 5 — Créer un écran depuis une spec UX/UI

**Objectif :** créer ou mettre à jour une frame écran depuis `screen-functional-specs.md`.

**Préconditions :** Page `03 — Screens` ; spec écran disponible ; MCP actif.

**Sources Git à lire :**
- `[PROJECT_UX_PATH]/screen-functional-specs.md` §[SCREEN_NAME]
- `[PROJECT_UX_PATH]/screen-inventory.md`
- `[PROJECT_UX_PATH]/user-journeys.md`
- ADR / statuts si référencés

**Fichier Penpot cible :** `[PENPOT_FILE]` — page `03 — Screens`

**Interdits :** nouveaux statuts ; nouveaux parcours ; backlog ; code ; modification captures V1 dans Git.

**Résultat attendu :** frame `[SCREEN_NAME]` ; résumé alignement spec ; écarts listés.

**Revue humaine :** obligatoire après chaque écran.

```
Objectif : Créer frame [SCREEN_NAME] dans [PENPOT_FILE] depuis screen-functional-specs.md.
Lire specs Git. Inspecter Penpot. Une frame à la fois.
Libellés statuts alignés architecture fonctionnelle. Pas de nouveau métier.
Résumé + écarts. Revue humaine obligatoire.
```

---

## 8. Prompt 6 — Créer un dashboard depuis une spec

**Objectif :** maquetter une vue dashboard depuis `dashboard-ux-view.md`.

**Préconditions :** Page `04 — Dashboards` ; specs dashboard disponibles.

**Sources Git à lire :**
- `[PROJECT_UX_PATH]/dashboard-ux-view.md`
- `[PROJECT_UX_PATH]/screen-functional-specs.md` (écran dashboard si applicable)
- Architecture fonctionnelle dashboard (non source de vérité)

**Fichier Penpot cible :** `[PENPOT_FILE]` — page `04 — Dashboards`

**Interdits :** BI technique ; KPI non documentés ; dashboard comme source de vérité.

**Résultat attendu :** frame(s) dashboard par profil ; KPI top N si spec ; résumé.

**Revue humaine :** obligatoire.

```
Objectif : Créer vue dashboard [profil] dans Penpot depuis dashboard-ux-view.md.
Dashboard rend visible — pas source de vérité. KPI alignés spec.
Une vue à la fois. Revue humaine obligatoire.
```

---

## 9. Prompt 7 — Créer une version mobile depuis une spec

**Objectif :** frame mobile (technicien, CR, etc.) depuis specs et parcours.

**Préconditions :** Page `05 — Mobile` ; parcours terrain documentés.

**Sources Git à lire :**
- `[PROJECT_UX_PATH]/user-journeys.md` (parcours mobile)
- `[PROJECT_UX_PATH]/screen-functional-specs.md` (fiche intervention, CR)
- Décisions UX atelier (mobile prioritaire si applicable)

**Fichier Penpot cible :** `[PENPOT_FILE]` — page `05 — Mobile`

**Interdits :** parcours non documentés ; export PDF si exclu MVP.

**Résultat attendu :** frame mobile ; résumé ; écarts vs desktop si pertinent.

**Revue humaine :** obligatoire.

```
Objectif : Créer frame mobile [SCREEN_NAME] page 05 — Mobile.
Lire parcours et specs. Inspecter Penpot. Une frame.
Revue humaine obligatoire.
```

---

## 10. Prompt 8 — Auditer un fichier Penpot

**Objectif :** audit structure et cohérence sans modification (ou rapport seul).

**Préconditions :** MCP lecture ; fichier Penpot référencé.

**Sources Git à lire :**
- `[PROJECT_UX_PATH]/` (tous livrables reprise UX/UI)
- `penpot-project-reference.md`

**Fichier Penpot cible :** `[PENPOT_FILE]`

**Interdits :** modification sans demande explicite ; suppression.

**Résultat attendu :** rapport pages/frames/composants ; écarts vs inventaire ; risques.

**Revue humaine :** valider plan correction si modifications demandées ensuite.

```
Objectif : Auditer [PENPOT_FILE] vs specs Git [PROJECT_UX_PATH].
MCP inspect only par défaut. Rapport structuré : structure, écarts, risques.
Ne pas modifier sans demande explicite. Revue humaine sur rapport.
```

---

## 11. Prompt 9 — Comparer Penpot vs specs Git

**Objectif :** tableau comparatif écran par écran.

**Préconditions :** Specs et Penpot accessibles.

**Sources Git à lire :**
- `screen-functional-specs.md`
- `screen-inventory.md`
- `dashboard-ux-view.md`

**Fichier Penpot cible :** `[PENPOT_FILE]`

**Interdits :** corriger Penpot ou Git automatiquement ; décisions métier implicites.

**Résultat attendu :** tableau Spec | Penpot | Écart | Criticité | Action proposée.

**Revue humaine :** arbitrage écarts.

```
Objectif : Comparer Penpot [PENPOT_FILE] vs specs Git.
Tableau par écran. Pas de modification auto.
Revue humaine pour arbitrage.
```

---

## 12. Prompt 10 — Préparer une revue design

**Objectif :** agenda et checklist revue humaine.

**Préconditions :** Frames créées ou audit fait.

**Sources Git à lire :**
- `[PROJECT_DESIGN_PATH]/penpot-review-checklist.md` (créer si absent depuis template futur)
- Synthèse UX/UI si disponible

**Fichier Penpot cible :** `[PENPOT_FILE]`

**Interdits :** clôture design sans validation humaine ; export massif non validé.

**Résultat attendu :** agenda revue ; liste écrans ; décisions attendues ; participants suggérés.

**Revue humaine :** ce prompt prépare la revue — la revue elle-même est humaine.

```
Objectif : Préparer revue design [PROJECT_NAME] sur [PENPOT_FILE].
Agenda, écrans à valider, écarts connus, checklist.
Pas d'export officiel sans validation post-revue.
```

---

## 13. Prompt 11 — Documenter les exports dans Git

**Objectif :** référencer exports Penpot dans Git sans en faire la seule source de vérité.

**Préconditions :** Revue humaine effectuée ; exports autorisés.

**Sources Git à lire :**
- `penpot-project-reference.md`
- `design-v2-summary.md` (créer ou mettre à jour si cycle ouvert)

**Fichier Penpot cible :** `[PENPOT_FILE]` (référence lien uniquement)

**Interdits :** commiter données sensibles ; remplacer specs par images seules ; secrets dans URLs.

**Résultat attendu :** section exports dans `penpot-project-reference.md` ou `design-v2-summary.md` ; convention nommage ; date revue.

**Revue humaine :** valider périmètre exports avant commit Git.

```
Objectif : Documenter exports Penpot pour [PROJECT_NAME] dans Git.
Référencer liens, fichiers export, date, revue humaine.
Specs Git restent source fonctionnelle. Pas de secret dans URLs.
Revue humaine avant commit.
```

---

## 14. Ordre recommandé

```
1. Installer / cadrer Penpot (Prompt 1)
2. Configurer MCP (Prompt 2)
3. Créer projet (Prompt 3)
4. Structure pages (Prompt 4)
5. Écrans / dashboard / mobile (Prompts 5–7)
6. Audit / compare (Prompts 8–9)
7. Revue (Prompt 10)
8. Documentation exports Git (Prompt 11)
```

---

## 15. Conclusion

Cette famille aligne Penpot sur les **méthodes SFIA** : specs Git d'abord, Penpot ensuite, revue humaine systématique, aucun secret dans le repo.

---

*Famille de prompts SFIA — Penpot Design Agent — Draft — Réutilisable.*

```


---

## Fichiers protégés — statut

Les 12 fichiers `PROTECTED — EXCLUDE FROM EXECUTION` sont absents du diff :
- `prompts/prompt-catalog.md`
- `prompts/templates/01-create-foundation-document.md` … `10-perform-safe-repository-cleanup.md`
- `prompts/templates/README.md`
- `prompts/templates/sfia-cycle-execution-template.md`

---

## Review pack content coverage

| Critère | Statut |
|---------|--------|
| created files full content | **yes** (rapport exécution) |
| modified corpus files full content | **yes** (3 fichiers) |
| modified plan sections complete | **yes** (diff plan Lot H) |
| useful diffs included | **yes** |
| synthesis only | **no** |
| review pack verdict | **complete** |

---

## Décisions Morris

| Décision | Statut |
|----------|--------|
| Ouverture exécution Lot H | **GO donné** (ce cycle) |
| Commit / PR / merge Lot H | **en attente** — post-revue |
| Suppression `.gitkeep` (5) | **gate future** |
| Lot J | **non ouvert** |

---

*Review pack réinitialisé — mono-cycle Lot H — 2026-07-13*

# SFIA v2.6 — Lot F2 Option B — Review Pack (full)

**Horodatage :** 2026-07-13 05:21 Europe/Paris (CEST)
**Décision Morris :** Option B — maintenir F-005 jusqu'à événement produit réel
**Verdict cycle :** `F2 OPTION B IMPLEMENTED — LOT F CLOSED — READY FOR COMMIT`

---

## 1. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| toplevel | `/Users/morris/Projects/sfia-workspace` |
| branch | `qualification/sfia-v2.6-lot-f2-f005` |
| HEAD | `4a7f857f3f05c6d0a0540cc489d9ab5c5a832f7e` |
| origin/main | `4a7f857f3f05c6d0a0540cc489d9ab5c5a832f7e` |
| merge-base | `4a7f857f3f05c6d0a0540cc489d9ab5c5a832f7e` |

**Verdict :** PASSED

### git status --short
```
M method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
 M method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
 M method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
 M method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-f-superseded-qualification.md
?? .sfia/
?? .tmp-sfia-review/
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-13-sfia-v2.6-lot-f2-f005-critical-review.md
```

---

## 2. Git Review Index

| Fichier | Statut |
|---------|--------|
| cartography.csv | Modified (1 ligne F-005) |
| cartography.md | Modified (métriques/sections) |
| migration-lots-plan.md | Modified (Lot F/J) |
| lot-f-superseded-qualification.md | Modified (addendum §16) |
| lot-f2-f005-critical-review.md | **Nouveau** (untracked) |

### git diff --stat
```
...2026-07-11-sfia-v2.6-repository-cartography.csv |   2 +-
 .../2026-07-11-sfia-v2.6-repository-cartography.md | 103 +++++++++++----------
 ...-11-sfia-v2.6-repository-migration-lots-plan.md |  53 ++++++-----
 ...-12-sfia-v2.6-lot-f-superseded-qualification.md |  79 ++++++++++++++++
 4 files changed, 161 insertions(+), 76 deletions(-)
```

### git diff --name-status
```
M	method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
M	method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
M	method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
M	method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-12-sfia-v2.6-lot-f-superseded-qualification.md
```

### git diff --cached --name-status
```
(empty)
```

---

## 3. Ancienne ligne CSV F-005 (HEAD)

```
projects/interv360/06-audit-rex/current-application-audit.md,current-application-audit.md,md,13680,F09,,superseded,document-lifecycle,supporting,non-operational,project,interv360,,N/A,N/A,projects,projects,documentary,non-compliant,compliant,B,# Interv360 — Audit de l'application actuelle ## 1. Objectif Ce document audite l'état actuel de l'application Interv3,projects/interv360/README.md,,superseded-by-newer,no,delete-candidate,projects/interv360/06-audit-rex/current-application-audit.md,current-application-audit.md,"Regime documentary; family F09; D10 compliant (current=projects, target=projects); lifecycle-corrective superseded. Usage Pass: non-operational per explicit-retired.",high,yes,high,superseded-map;replacement=projects/interv360/06-audit-rex/post-mvp-application-audit.md;git=7c0e865 docs: operationalize SFIA workspace structure (#81);usage-pass;result=non-operational;proof=explicit-retired;source=projects/interv360/06-audit-rex/current-application-audit.md;confidence=high;checks=disposition=delete-candidate+lifecycle=superseded,Superseded by projects/interv360/06-audit-rex/post-mvp-application-audit.md. Usage Pass: non-operational (explicit-retired).,lot-J
```

## 4. Nouvelle ligne CSV F-005

```
projects/interv360/06-audit-rex/current-application-audit.md,current-application-audit.md,md,13680,F09,,validated,document-lifecycle,supporting,operational,project,interv360,,N/A,N/A,projects,projects,documentary,non-compliant,compliant,B,# Interv360 — Audit de l'application actuelle ## 1. Objectif Ce document audite l'état actuel de l'application Interv3,projects/interv360/README.md,,no,no,keep,projects/interv360/06-audit-rex/current-application-audit.md,current-application-audit.md,"Regime documentary; family F09; D10 compliant (current=projects, target=projects); lifecycle-corrective validated. Morris F2 Option B: snapshot consolidation audit maintained; active navigation via projects/interv360/README.md. Not superseded — declared replacement invalidated.",medium,no,high,morris-f2-option-b;lifecycle-corrective;validated-audit-closure;git=c496bc3 docs: audit current Interv360 application (#77);usage-pass;result=operational;proof=active-navigation-reference;source=projects/interv360/README.md;confidence=high;checks=supporting snapshot audit;replacement-invalidated=post-mvp-application-audit.md,Snapshot applicatif consolidation 2026-07 (APPLICATION_SAINE_AVEC_RESERVES). Future post-MVP audit only after real product event. Declared replacement post-mvp-application-audit.md invalidated — never created. Excluded from Lot J delete.,lot-G
```

---

## 5. Justification champ par champ

| Champ | Ancienne | Nouvelle | Convention CSV | Justification |
|-------|----------|----------|----------------|---------------|
| lifecycle_status | superseded | validated | validated existant (146) | snapshot actif, non superseded réel |
| usage | non-operational | operational | operational + README ref | navigation active README |
| duplicate_or_overlap | superseded-by-newer | no | no dominant | remplaçant absent |
| proposed_disposition | delete-candidate | keep | keep (620) | Morris Option B conservation |
| risk_level | high | medium | medium existant | risque delete levé |
| morris_gate_required | yes | no | no (1003) | gate résolue |
| migration_lot_candidate | lot-J | lot-G | lot-G (571) | hors suppression |
| evidence | superseded-map + replacement | morris-f2-option-b + invalidated | pattern evidence | trace décision |
| reserve_or_question | Superseded by post-mvp… | Snapshot + audit futur conditionnel | pattern reserve | déclencheur produit |

---

## 6. SHA-256 CSV

| | Valeur |
|---|--------|
| Avant | `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` |
| Après | `551c24765cf06a6a3029646ff71d937235af25c2c740d020e7ad1b7d2dc10e34` |

---

## 7. Métriques avant/après

| Métrique | Avant | Après |
|----------|------:|------:|
| superseded | 5 | 4 |
| delete-candidate | 11 | 10 |
| lot-J | 11 | 10 |
| lot-G | 570 | 571 |
| keep | 619 | 620 |
| usage operational | 469 | 470 |
| usage non-operational | 545 | 544 |
| lifecycle validated | 145 | 146 |
| morris_gate yes | 43 | 42 |
| lignes | 1045 | 1045 |
| colonnes | 36 | 36 |

---

## 8. Diff CSV

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
index 3d31bd0..e3d3746 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.csv
@@ -587,7 +587,7 @@ projects/interv360/04-delivery/workflow-light-extension.md,workflow-light-extens
 projects/interv360/04-delivery/workflow-requalification.md,workflow-requalification.md,md,13873,F08,,validated,document-lifecycle,informational,non-operational,project,interv360,,N/A,N/A,projects,projects,documentary,compliant,compliant,C,# Interv360 — Workflow Requalification **Projet** : Interv360 **Cycle** : Workflow Requalification **Mode** : SFIA,,](./workflow-light-extension.md),no,no,keep,projects/interv360/04-delivery/workflow-requalification.md,workflow-requalification.md,"Regime documentary; family F08; D10 compliant (current=projects, target=projects); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: non-operational — closed-cycle-only. Pass Authority: informational (project-non-normative, scope=project-document).",low,no,medium,lifecycle-corrective;strong-proof=closure-evidence;all=closure-evidence;usage-pass;result=operational;proof=current-method-reference;source=projects/interv360/04-delivery/workflow-requalification.md;confidence=high;checks=validated doc referenced by 2 active consumer(s);usage-review;result=non-operational;proof=closed-cycle-only;checks=validated project doc without external consumer — historical delivery trace;confidence=high;authority-review;result=informational;scope=project-document;proof=project-non-normative;reference=projects/interv360/04-delivery/workflow-requalification.md;status=validated;trajectory=N/A;confidence=medium,Pass Authority: informational — project-non-normative. Scope: project-document. Ref: `projects/interv360/04-delivery/workflow-requalification.md`. Lifecycle: validated. Not inferred from usage alone.,lot-G
 projects/interv360/05-release/mvp-release-readiness.md,mvp-release-readiness.md,md,28888,F08,,validated,document-lifecycle,informational,operational,project,interv360,,N/A,N/A,projects,projects,documentary,non-compliant,compliant,C,# Interv360 — MVP Release Readiness **Projet** : Interv360 **Cycle** : MVP Release Readiness **Mode** : SFIA Fast T,projects/interv360/README.md,,no,no,rename,projects/interv360/05-release/mvp-release-readiness.md,YYYY-MM-DD-mvp-release-readiness.md,"Regime documentary; family F08; D10 compliant (current=projects, target=projects); lifecycle-corrective validated. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`. Usage Graph Review: operational via root `projects/interv360/app/src/domain/README.md`. Direct Usage Review: operational via `projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md` L1118. Pass Authority: informational (project-report-or-closure, scope=project-record).",low,no,high,lifecycle-corrective;strong-proof=closure-evidence;all=closure-evidence;usage-pass;result=operational;proof=current-method-reference;source=projects/interv360/05-release/mvp-release-readiness.md;confidence=high;checks=validated doc referenced by 12 active consumer(s);usage-review;result=operational;proof=current-method-reference;consumer=method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/domain/README.md;chain=method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md -> projects/interv360/app/src/domain/README.md -> projects/interv360/05-release/mvp-release-readiness.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=operational;consumer=projects/interv360/09-roadmap/interv360-mvp-final-roadmap.md;reference=L1118;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high;authority-review;result=informational;scope=project-record;proof=project-report-or-closure;reference=projects/interv360/05-release/mvp-release-readiness.md;status=validated;trajectory=N/A;confidence=high,Pass Authority: informational — project-report-or-closure. Scope: project-record. Ref: `projects/interv360/05-release/mvp-release-readiness.md`. Lifecycle: validated. Not inferred from usage alone.,lot-D
 projects/interv360/06-audit-rex/README.md,README.md,md,415,F13,,candidate,document-lifecycle,reference,non-operational,project,interv360,,N/A,N/A,projects,projects,documentary,compliant,compliant,E,# 07 — REX Phase de **retour d'expérience** : capitalisation des enseignements du projet. ## Rôle - Documenter ce qui,,,no,no,keep,projects/interv360/06-audit-rex/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=projects, target=projects); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=projects/interv360/06-audit-rex/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-G
-projects/interv360/06-audit-rex/current-application-audit.md,current-application-audit.md,md,13680,F09,,superseded,document-lifecycle,supporting,non-operational,project,interv360,,N/A,N/A,projects,projects,documentary,non-compliant,compliant,B,# Interv360 — Audit de l'application actuelle ## 1. Objectif Ce document audite l'état actuel de l'application Interv3,projects/interv360/README.md,,superseded-by-newer,no,delete-candidate,projects/interv360/06-audit-rex/current-application-audit.md,current-application-audit.md,"Regime documentary; family F09; D10 compliant (current=projects, target=projects); lifecycle-corrective superseded. Usage Pass: non-operational per explicit-retired.",high,yes,high,superseded-map;replacement=projects/interv360/06-audit-rex/post-mvp-application-audit.md;git=7c0e865 docs: operationalize SFIA workspace structure (#81);usage-pass;result=non-operational;proof=explicit-retired;source=projects/interv360/06-audit-rex/current-application-audit.md;confidence=high;checks=disposition=delete-candidate+lifecycle=superseded,Superseded by projects/interv360/06-audit-rex/post-mvp-application-audit.md. Usage Pass: non-operational (explicit-retired).,lot-J
+projects/interv360/06-audit-rex/current-application-audit.md,current-application-audit.md,md,13680,F09,,validated,document-lifecycle,supporting,operational,project,interv360,,N/A,N/A,projects,projects,documentary,non-compliant,compliant,B,# Interv360 — Audit de l'application actuelle ## 1. Objectif Ce document audite l'état actuel de l'application Interv3,projects/interv360/README.md,,no,no,keep,projects/interv360/06-audit-rex/current-application-audit.md,current-application-audit.md,"Regime documentary; family F09; D10 compliant (current=projects, target=projects); lifecycle-corrective validated. Morris F2 Option B: snapshot consolidation audit maintained; active navigation via projects/interv360/README.md. Not superseded — declared replacement invalidated.",medium,no,high,morris-f2-option-b;lifecycle-corrective;validated-audit-closure;git=c496bc3 docs: audit current Interv360 application (#77);usage-pass;result=operational;proof=active-navigation-reference;source=projects/interv360/README.md;confidence=high;checks=supporting snapshot audit;replacement-invalidated=post-mvp-application-audit.md,Snapshot applicatif consolidation 2026-07 (APPLICATION_SAINE_AVEC_RESERVES). Future post-MVP audit only after real product event. Declared replacement post-mvp-application-audit.md invalidated — never created. Excluded from Lot J delete.,lot-G
 projects/interv360/07-documentation/README.md,README.md,md,456,F13,,candidate,document-lifecycle,reference,non-operational,project,interv360,,N/A,N/A,projects,projects,documentary,compliant,compliant,E,# Interv360 — Documentation Ce dossier regroupe les documents de documentation projet transverses. Il ne remplace pas,,,no,no,keep,projects/interv360/07-documentation/README.md,README.md,"Regime documentary; family F13; D10 compliant (current=projects, target=projects); lifecycle-corrective candidate. Usage Pass: operational per active-navigation-reference. Usage Evidence Review: operational confirmed via `.cursor/mcp-templates/README.md`. Usage Graph Review: non-operational — inactive-consumer.",low,no,medium,lifecycle-corrective;readme-index-not-validation;proof=inferred-role;usage-pass;result=operational;proof=active-navigation-reference;source=projects/interv360/07-documentation/README.md;confidence=high;checks=README index with navigation references;usage-review;result=operational;proof=active-navigation-reference;consumer=.cursor/mcp-templates/README.md;consumer-status=potential-active-consumer;confidence=high;usage-graph-review;result=non-operational;proof=inactive-consumer;checks=mcp-template-readme-generic-consumer+inactive-consumer-non-operational;confidence=medium,"Usage Graph Review: non-operational (inactive-consumer) — consumer `.cursor/mcp-templates/README.md`, edge=mcp-readme-generic. Checks: mcp-template-readme-generic-consumer; inactive-consumer-non-operational. ",lot-G
 projects/interv360/08-presentation/interv360-demo-one-page-summary.md,interv360-demo-one-page-summary.md,md,2040,F08,,draft,document-lifecycle,informational,operational,project,interv360,,N/A,N/A,projects,projects,documentary,compliant,compliant,C,# Interv360 — One-page Demo Summary **Projet** : Interv360 — démonstrateur SAV local **Statut** : Prêt à présenter (B,projects/interv360/04-delivery/demo-presentation-review.md; projects/interv360/08-presentation/interv360-demo-presentation-package.md; projects/interv360/08-presentation/interv360-demo-script.md,,no,no,keep,projects/interv360/08-presentation/interv360-demo-one-page-summary.md,interv360-demo-one-page-summary.md,"Regime documentary; family F08; D10 compliant (current=projects, target=projects); lifecycle-corrective draft. Pass Authority: informational (project-report-or-closure, scope=project-record).",low,no,high,lifecycle-pass-L;project-doc-no-explicit-validation;git=a5a8479 docs: add Interv360 demo presentation package;authority-review;result=informational;scope=project-record;proof=project-report-or-closure;reference=projects/interv360/08-presentation/interv360-demo-one-page-summary.md;status=draft;trajectory=N/A;confidence=high,Pass Authority: informational — project-report-or-closure. Scope: project-record. Ref: `projects/interv360/08-presentation/interv360-demo-one-page-summary.md`. Lifecycle: draft. Not inferred from usage alone.,lot-G
 projects/interv360/08-presentation/interv360-demo-presentation-package.md,interv360-demo-presentation-package.md,md,6374,F08,,candidate,document-lifecycle,informational,operational,project,interv360,,N/A,N/A,projects,projects,documentary,compliant,compliant,C,# Interv360 — Demo Presentation Package **Projet** : Interv360 **Type** : Package de présentation externe **Version,projects/interv360/04-delivery/demo-presentation-review.md; projects/interv360/08-presentation/interv360-demo-script.md,](./interv360-demo-script.md); ](./interv360-demo-one-page-summary.md); ](../app/README.md); ](../04-delivery/batch-03-demo-readiness-package.md),no,no,keep,projects/interv360/08-presentation/interv360-demo-presentation-package.md,interv360-demo-presentation-package.md,"Regime documentary; family F08; D10 compliant (current=projects, target=projects); lifecycle-corrective candidate. Usage Pass: operational per current-method-reference. Usage Evidence Review: operational confirmed via `projects/interv360/04-delivery/demo-presentation-review.md`. Usage Graph Review: operational via root `projects/interv360/app/src/tests/README.md`. Direct Usage Review: operational via `projects/interv360/08-presentation/interv360-demo-one-page-summary.md` L75. Pass Authority: informational (project-non-normative, scope=project-document).",low,no,medium,lifecycle-pass-L;project-cycle-working-doc;git=7c0e865 docs: operationalize SFIA workspace structure (#81);usage-pass;result=operational;proof=current-method-reference;source=projects/interv360/08-presentation/interv360-demo-presentation-package.md;confidence=high;checks=draft/candidate doc with active references;usage-review;result=operational;proof=current-method-reference;consumer=projects/interv360/04-delivery/demo-presentation-review.md;consumer-status=active-scope-document;confidence=high;usage-graph-review;result=operational;root=projects/interv360/app/src/tests/README.md;chain=projects/interv360/04-delivery/demo-presentation-review.md -> projects/interv360/08-presentation/interv360-e2e-demo-runbook.md -> projects/interv360/app/src/tests/README.md -> projects/interv360/08-presentation/interv360-demo-presentation-package.md;relation=functional-reference;consumer-status=runtime-root;confidence=high;usage-direct-review;result=operational;consumer=projects/interv360/08-presentation/interv360-demo-one-page-summary.md;reference=L75;relation=method-use;consumer-active-proof=operational-outside-graph-set;current-use=directly referenced by active consumer for current operational purpose;confidence=high;authority-review;result=informational;scope=project-document;proof=project-non-normative;reference=projects/interv360/08-presentation/interv360-demo-presentation-package.md;status=candidate;trajectory=N/A;confidence=medium,Pass Authority: informational — project-non-normative. Scope: project-document. Ref: `projects/interv360/08-presentation/interv360-demo-presentation-package.md`. Lifecycle: candidate. Not inferred from usage alone.,lot-G
```

---

## 9. Sections cartographie modifiées (extraits)


### Extrait

## 2. Executive summary (état courant — recalculé CSV)

Toutes les métriques ci-dessous sont **recalculées depuis le CSV** (SHA `551c2476…` — correction F-005 Morris Option B 2026-07-13). Aucune saisie manuelle.

| Domaine | Count |
|---------|------:|
| **lifecycle_applicability document-lifecycle** | 697 |
| **lifecycle_applicability technical-artifact-lifecycle** | 10 |
| **lifecycle_applicability not-applicable** | 338 |
| **lifecycle_status not-applicable** | 338 |
| **lifecycle_status validated** | 146 |
| **lifecycle_status candidate** | 154 |
| **lifecycle_status draft** | 138 |
| **lifecycle_status archived** | 265 |
| **lifecycle_status superseded** | 4 |
| **usage operational** | **470** |
| **usage non-operational** | **544** |
| **usage unknown** | **31** |
| **authority unknown** | **0** |
| **authority canonical** | **3** |
| **authority reference** | **75** |
| **authority supporting** | **192** |
| **authority informational** | **775** |
| Nommage D12 documentaire non-conforme | 161 |
| Conventions techniques | 308 |
| D10 non conforme (v3) | 23 |
| Lot B | 0 |
| Lot C | 23 |
| B/C overlap | 0 |
| delete-candidate | 10 |
| archive (`proposed_disposition`) | 227 |
| archive non-v3 | 204 |
| archive v3 (Lot C) | 23 |
| Lot 0 tag | 103 |
| investigate | 38 |
| morris_gate yes | 42 |

---

## 3. Méthode (inchangée + périmètre)

- Inventaire figé sur commit base `072058a`
- Qualification : path + contenu (≤12 KB) + liens Markdown
- Régimes D12 : `documentary` | `technical-convention` | `unknown`
- D10 : fonction réelle — pas de déplacement par présence de `sfia` dans le nom
- Lots B/C : **mutuellement exclusifs** — v3 → Lot C uniquement

---

## 4. Séparation Lots B et C

| Lot | Périmètre | Volume CSV |
|-----|-----------|----------:|
| **Lot B** | D10 hors v3 — documents actifs mal placés | **0** |
| **Lot C** | SFIA v3.0 / MCP / Bridge / Runner — déplacement + archivage **dans un seul lot futur** | **23** |

**Règle :** aucun fichier v3 ne peut être traité en Lot B puis Lot C. Les 23 non-conformités D10 sont intégralement v3 → Lot C.

**Cas D10 hors v3 restants :** aucun sur la base stable actuelle.

---

## 5. Couverture (1045 fichiers base)

### Familles (top)

F08=399, F17=290, F09=103, F13=67, F15=40, F06=36, autres=111

### Trajectoire

N/A=739, v2.4=254, **v3.0=23**, v1.1=19, v2.6=**4**, v2.5=6

> v2.6=4 (artefacts d'audit exclus — ne gonflent plus F09/candidate du CSV)

### Nommage

| Régime / statut | Count |
|-----------------|-----

---

### Extrait

**Lot F (0 tag)** — **Phase process** : **4** superseded routés vers **lot-J delete-candidate** (F-001–F-004) ; **F-005 conservé** (`validated` / `keep` / lot-G) — Morris Option B 2026-07-13. **Clôturé.**

**Lot G (571 tag)** — **Famille de lots**, pas PR unique. `scope=project` = 687 ≠ tag lot-G. Sous-lots : interv360 (**433**) ; chantiers360-v2 (**137**) ; ≤50 fichiers/PR. **23 usage unknown** — gate avant migration.

**Lot H (40)** — Prompts/templates actifs. **9 investigate** (.gitkeep placeholders).

**Lot I (68)** — Tooling/CI exécutable. Sous-lots : `.github/workflows` ; `tools/cmp-001` ; `docker/penpot` ; automation engines. **21 investigate** (schemas cmp-001). Séparer règles documentaires et artefacts techniques.

**Lot J (10)** — **10/10 delete-candidate**, tous `morris_gate_required=yes`. **2 operational** (supporting) — suppression individuelle gate Morris. Dernier lot. **F-005 exclu.**

### Dépendances

```text
merge PR #165 → Lot 0 (Morris) → Lot A → Lot C → Lot D → Lot G/H/I (parallèle possible post-D partiel)
→ Lot E (global) → Lot F process / lot-J delete → Lot J last
```

### Réversibilité

| Lot | Rollback |
|-----|----------|
| lot-D/G/H/I rename/move | `git revert` + mapping chemins dans PR |
| lot-C archive v3 | `git revert` ; garde-fou non-réactivation |
| lot-J delete | **Irréversible** — gate Morris obligatoire par fichier |

### Incohérences

| Type | Détail |
|------|--------|
| **Réelles (CSV)** | **Aucune** nécessitant reclassification immédiate |
| **Documentaires** | Lot F sans tag ; Lot G volume plan (687 scope vs 571 tag) ; Lot 0 vs Lot A sémantique canonical |
| **Lots larges** | lot-G (571), lot-D (149) — correctement tagués, **sous-lots exécution** requis |
| **Vigilance** | 31 usage unknown global ; 23 en lot-G ; canonical en lot-0 avec usage unknown (2) |

### Reclassifications proposées

**Aucune** — `LOT RECLASSIFICATION REQUIRED` **non déclenché**. Affectations globalement cohérentes avec clarifications documentaires.

### Verdict global

**LOT PLAN DOCUMENTATION CLARIFICATION COMPLETED**

**LOT STRUCTURE CONFIRMED AFTER DOCUMENTATION CLARIFICATION**

Les clarifications documentaires requises ont été intégrées dans le plan sans modification du CSV ni des affectations de lots.

- NO CSV RECLASSIFICATION REQUIRED
- CARTOGRAPHY CONTRACT REMAINS FROZEN
- CSV UNCHANGED
- USAGE DIMENSION REMAINS FROZEN
- AUTHORITY DIMENSION REMAINS FROZEN
- LIFECYCLE DIMENSION REMAINS FROZEN
- MIGRATIONS NOT STARTED
- PR READINESS — cycl

---

## 10. Diff cartography.md

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
index edb02dd..06fe614 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cartography.md
@@ -11,7 +11,7 @@
 **Branche :** audit/sfia-v2.6-repository-cartography
 **PR :** #165
 **Base inventaire stable :** `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6`
-**Machine-readable :** `2026-07-11-sfia-v2.6-repository-cartography.csv` (SHA-256: `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275`)
+**Machine-readable :** `2026-07-11-sfia-v2.6-repository-cartography.csv` (SHA-256: `551c24765cf06a6a3029646ff71d937235af25c2c740d020e7ad1b7d2dc10e34` — correction F-005 Morris Option B 2026-07-13 ; SHA antérieur `00a6902f…`)
 
 ### Verdict périmètre
 
@@ -49,7 +49,7 @@ Ces trois livrables de la PR #165 **ne sont pas cartographiés** (aucune ligne C
 
 ## 2. Executive summary (état courant — recalculé CSV)
 
-Toutes les métriques ci-dessous sont **recalculées depuis le CSV** (SHA `00a6902f…`). Aucune saisie manuelle.
+Toutes les métriques ci-dessous sont **recalculées depuis le CSV** (SHA `551c2476…` — correction F-005 Morris Option B 2026-07-13). Aucune saisie manuelle.
 
 | Domaine | Count |
 |---------|------:|
@@ -57,13 +57,13 @@ Toutes les métriques ci-dessous sont **recalculées depuis le CSV** (SHA `00a69
 | **lifecycle_applicability technical-artifact-lifecycle** | 10 |
 | **lifecycle_applicability not-applicable** | 338 |
 | **lifecycle_status not-applicable** | 338 |
-| **lifecycle_status validated** | 145 |
+| **lifecycle_status validated** | 146 |
 | **lifecycle_status candidate** | 154 |
 | **lifecycle_status draft** | 138 |
 | **lifecycle_status archived** | 265 |
-| **lifecycle_status superseded** | 5 |
-| **usage operational** | **469** |
-| **usage non-operational** | **545** |
+| **lifecycle_status superseded** | 4 |
+| **usage operational** | **470** |
+| **usage non-operational** | **544** |
 | **usage unknown** | **31** |
 | **authority unknown** | **0** |
 | **authority canonical** | **3** |
@@ -76,13 +76,13 @@ Toutes les métriques ci-dessous sont **recalculées depuis le CSV** (SHA `00a69
 | Lot B | 0 |
 | Lot C | 23 |
 | B/C overlap | 0 |
-| delete-candidate | 11 |
+| delete-candidate | 10 |
 | archive (`proposed_disposition`) | 227 |
 | archive non-v3 | 204 |
 | archive v3 (Lot C) | 23 |
 | Lot 0 tag | 103 |
 | investigate | 38 |
-| morris_gate yes | 43 |
+| morris_gate yes | 42 |
 
 ---
 
@@ -143,8 +143,8 @@ compliant=1022, non-compliant=**23** (v3 uniquement)
 | confidence high | 693 |
 | confidence medium | 339 |
 | confidence low | 13 |
-| usage operational | **469** |
-| usage non-operational | **545** |
+| usage operational | **470** |
+| usage non-operational | **544** |
 | usage unknown | **31** |
 | authority unknown | **0** |
 | authority canonical | **3** |
@@ -153,21 +153,21 @@ compliant=1022, non-compliant=**23** (v3 uniquement)
 | authority informational | **775** |
 | lifecycle unknown | 0 |
 | lifecycle not-applicable | 338 |
-| morris_gate yes | 43 |
+| morris_gate yes | 42 |
 | investigate | 38 |
-| delete-candidate | 11 |
+| delete-candidate | 10 |
 | archive (`proposed_disposition`) | 227 |
 | archive v3 (Lot C) | 23 |
 | archive non-v3 | 204 |
-| lifecycle superseded | 5 |
+| lifecycle superseded | 4 |
 
 ---
 
-## 7. Suppressions candidates (11)
+## 7. Suppressions candidates (10)
 
 Tous dans les 1045 fichiers base — preuve + `morris_gate_required: yes` — Lot 0 puis Lot J.
 
-Documents superseded (foundation v1.1, documentation-audit, workspace-audit round-2, interv360 audit transitoire).
+Documents superseded (foundation v1.1, documentation-audit, workspace-audit round-2). **F-005 (`current-application-audit.md`) exclu** — Morris Option B 2026-07-13 : conservé, `keep`, lot-G.
 
 ---
 
@@ -264,12 +264,12 @@ Un fichier peut être **archive non-v3 sans être Lot 0** — les champs `propos
 | candidate | 30 | 140 | +110 |
 | validated | 292 | 476 | +184 |
 | archived | 255 | 270 | +15 |
-| superseded | 0 | **5** | +5 |
+| superseded | 0 | **4** | +4 |
 | deprecated | 0 | 0 | 0 |
 
 **Résolus :** 359 — **Résiduels :** 0
 
-### Superseded et remplaçants (5)
+### Superseded et remplaçants (4)
 
 | Fichier | Remplaçant |
 |---------|------------|
@@ -277,7 +277,8 @@ Un fichier peut être **archive non-v3 sans être Lot 0** — les champs `propos
 | `documentation-structure-target.md` | `sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md` |
 | `sfia-v1.1-p2-cross-reference-audit.md` | `sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md` |
 | `sfia-foundation-v1.1-consolidation-plan.md` | `sfia-v2.6/2026-07-11-sfia-v2.6-repository-standard-principles.md` |
-| `current-application-audit.md` | `post-mvp-application-audit.md` |
+
+> **F-005** (`current-application-audit.md`) — retrait superseded-map 2026-07-13 : `validated` / `keep` / lot-G ; remplaçant `post-mvp-application-audit.md` **invalidé** (jamais créé).
 
 ### Archived nouvellement qualifiés (depuis unknown)
 
@@ -288,7 +289,7 @@ Un fichier peut être **archive non-v3 sans être Lot 0** — les champs `propos
 - `proposed_disposition` : 14 fichiers `keep` → `archive` (cohérence lifecycle archived)
 - Lot B = **0**, Lot C = **23**, overlap B/C = **0** (inchangés)
 - Lot 0 tag CSV = **103** (inchangé)
-- Lot F : **5** superseded identifiés pour traitement futur
+- Lot F : **4** superseded identifiés pour traitement futur (F-005 exclu — Morris Option B)
 
 ### Anomalies hors passe
 
@@ -334,7 +335,7 @@ Aucune anomalie manifeste signalée dans les champs interdits (usage, authority,
 | candidate | 140 | **154** |
 | draft | 154 | **138** |
 | archived | 270 | 265 |
-| superseded | 5 | 5 |
+| superseded | 5 | **4** |
 | not-applicable | 0 | **338** |
 | unknown | 0 | 0 |
 
@@ -509,14 +510,14 @@ Le contrat est **gelé** pour les deux prochaines passes. Il reste **candidate**
 | applicability document-lifecycle | 697 |
 | applicability technical-artifact-lifecycle | 10 |
 | applicability not-applicable | 338 |
-| lifecycle validated | 145 |
+| lifecycle validated | 146 |
 | lifecycle candidate | 154 |
 | lifecycle draft | 138 |
 | lifecycle archived | 265 |
-| lifecycle superseded | 5 |
+| lifecycle superseded | 4 |
 | lifecycle not-applicable | 338 |
-| usage operational | **469** |
-| usage non-operational | **545** |
+| usage operational | **470** |
+| usage non-operational | **544** |
 | usage unknown | **31** |
 | authority unknown | **0** |
 | authority canonical | **3** |
@@ -902,8 +903,8 @@ Pour chaque ligne de D : ouverture du consommateur déclaré ou recherche d’un
 
 | Usage | Count |
 |-------|------:|
-| operational | **469** |
-| non-operational | **545** |
+| operational | **470** |
+| non-operational | **544** |
 | unknown | **31** |
 
 ### Unknown globaux (31)
@@ -1051,7 +1052,7 @@ Usage **non utilisé** comme preuve d'autorité seule.
 
 ### Dimensions inchangées
 
-Usage **469 / 545 / 31** — Lifecycle — canonical_candidate — lots — dispositions — **0 migration**.
+Usage **470 / 544 / 31** — Lifecycle — canonical_candidate — lots — dispositions — **0 migration**.
 
 ### Statut
 
@@ -1083,7 +1084,7 @@ Usage **469 / 545 / 31** — Lifecycle — canonical_candidate — lots — disp
 
 **Aucune promotion canonical.** **Aucune promotion baseline.**
 
-Usage **469 / 545 / 31** — Lifecycle — lots — dispositions : **inchangés**. **Aucune migration.**
+Usage **470 / 544 / 31** — Lifecycle — lots — dispositions : **inchangés**. **Aucune migration.**
 
 **AUTHORITY DIMENSION FROZEN.**
 
@@ -1099,8 +1100,8 @@ Usage **469 / 545 / 31** — Lifecycle — lots — dispositions : **inchangés*
 
 | Contrôle | Valeur |
 |----------|--------|
-| CSV | 1045 × 36 — SHA `00a6902f…` |
-| Usage | 469 / 545 / 31 — frozen |
+| CSV | 1045 × 36 — SHA `551c2476…` |
+| Usage | 470 / 544 / 31 — frozen |
 | Authority | 3 / 75 / 192 / 775 / 0 — frozen |
 | Lifecycle unknown | 0 |
 | Migrations | not started |
@@ -1116,10 +1117,10 @@ Usage **469 / 545 / 31** — Lifecycle — lots — dispositions : **inchangés*
 | lot-D | 149 | rename | 63 | 85 | 1 | 0 | 0 | 41 | 108 | 0 | 0 | 149 | 0 | 0 | 0 | 20–50/PR |
 | lot-E | 75 | keep | 19 | 56 | 0 | 0 | 20 | 20 | 35 | 73 | 2 | 0 | 0 | 0 | 0 | audit-only |
 | lot-F | 0 | — | — | — | — | — | — | — | — | — | — | — | — | — | — | process phase |
-| lot-G | 570 | keep | 324 | 223 | 23 | 0 | 34 | 17 | 519 | 416 | 146 | 0 | 8 | 0 | 0 | family ≤50/PR |
+| lot-G | 571 | keep | 325 | 223 | 23 | 0 | 34 | 18 | 519 | 417 | 146 | 0 | 8 | 0 | 0 | family ≤50/PR |
 | lot-H | 40 | keep | 13 | 27 | 0 | 0 | 3 | 11 | 26 | 31 | 0 | 0 | 9 | 0 | 0 | 20–40/PR |
 | lot-I | 68 | keep | 45 | 22 | 1 | 0 | 1 | 6 | 61 | 47 | 0 | 0 | 21 | 0 | 0 | by platform |
-| lot-J | 11 | delete | 2 | 9 | 0 | 0 | 0 | 10 | 1 | 0 | 0 | 0 | 0 | 11 | 11 | 1 file/PR |
+| lot-J | 10 | delete | 2 | 8 | 0 | 0 | 0 | 9 | 1 | 0 | 0 | 0 | 0 | 10 | 10 | 1 file/PR |
 
 ### Synthèse par lot
 
@@ -1131,19 +1132,19 @@ Usage **469 / 545 / 31** — Lifecycle — lots — dispositions : **inchangés*
 
 **Lot C (23)** — **23/23** trajectory v3.0. Authority non opérationnelle. Archivage unique borné. Gate Morris sur l'ensemble.
 
-**Lot D (149)** — **149 rename** ; **63 operational** — sous-lots obligatoires. **118 fichiers `projects/`** en lot-D (rename) vs **570** en lot-G (keep/archive) — cohérent : rename ≠ repositionnement projet.
+**Lot D (149)** — **149 rename** ; **63 operational** — sous-lots obligatoires. **118 fichiers `projects/`** en lot-D (rename) vs **571** en lot-G (keep/archive) — cohérent : rename ≠ repositionnement projet.
 
 **Lot E (75)** — Contrôles résiduels README/index post-migrations de chemins. Architecture compliant en keep (5/6) ; seul `sfia-decision-engine` en lot-D (non-compliant naming).
 
-**Lot F (0 tag)** — **Phase process** : 5 superseded routés vers **lot-J delete-candidate** avec remplaçants documentés. Pas de tag CSV — clarification documentaire requise.
+**Lot F (0 tag)** — **Phase process** : **4** superseded routés vers **lot-J delete-candidate** (F-001–F-004) ; **F-005 conservé** (`validated` / `keep` / lot-G) — Morris Option B 2026-07-13. **Clôturé.**
 
-**Lot G (570 tag)** — **Famille de lots**, pas PR unique. `scope=project` = 687 ≠ tag lot-G. Sous-lots : interv360 (**432**) ; chantiers360-v2 (**137**) ; ≤50 fichiers/PR. **23 usage unknown** — gate avant migration.
+**Lot G (571 tag)** — **Famille de lots**, pas PR unique. `scope=project` = 687 ≠ tag lot-G. Sous-lots : interv360 (**433**) ; chantiers360-v2 (**137**) ; ≤50 fichiers/PR. **23 usage unknown** — gate avant migration.
 
 **Lot H (40)** — Prompts/templates actifs. **9 investigate** (.gitkeep placeholders).
 
 **Lot I (68)** — Tooling/CI exécutable. Sous-lots : `.github/workflows` ; `tools/cmp-001` ; `docker/penpot` ; automation engines. **21 investigate** (schemas cmp-001). Séparer règles documentaires et artefacts techniques.
 
-**Lot J (11)** — **11/11 delete-candidate**, tous `morris_gate_required=yes`. **2 operational** (supporting) — suppression individuelle gate Morris. Dernier lot.
+**Lot J (10)** — **10/10 delete-candidate**, tous `morris_gate_required=yes`. **2 operational** (supporting) — suppression individuelle gate Morris. Dernier lot. **F-005 exclu.**
 
 ### Dépendances
 
@@ -1165,8 +1166,8 @@ merge PR #165 → Lot 0 (Morris) → Lot A → Lot C → Lot D → Lot G/H/I (pa
 | Type | Détail |
 |------|--------|
 | **Réelles (CSV)** | **Aucune** nécessitant reclassification immédiate |
-| **Documentaires** | Lot F sans tag ; Lot G volume plan (687 scope vs 570 tag) ; Lot 0 vs Lot A sémantique canonical |
-| **Lots larges** | lot-G (570), lot-D (149) — correctement tagués, **sous-lots exécution** requis |
+| **Documentaires** | Lot F sans tag ; Lot G volume plan (687 scope vs 571 tag) ; Lot 0 vs Lot A sémantique canonical |
+| **Lots larges** | lot-G (571), lot-D (149) — correctement tagués, **sous-lots exécution** requis |
 | **Vigilance** | 31 usage unknown global ; 23 en lot-G ; canonical en lot-0 avec usage unknown (2) |
 
 ### Reclassifications proposées
@@ -1219,7 +1220,7 @@ Les clarifications documentaires requises ont été intégrées dans le plan san
 | Lignes données | **1045** |
 | Champs | **36** |
 | Chemins uniques | **1045** |
-| SHA-256 | `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` |
+| SHA-256 | `551c24765cf06a6a3029646ff71d937235af25c2c740d020e7ad1b7d2dc10e34` |
 | Doublons / lignes vides | **0** |
 | Lifecycle unknown | **0** |
 | Authority unknown | **0** |
@@ -1233,13 +1234,13 @@ Recalcul CSV validé contre rapport §2, §6, §19 et plan §3–§16 :
 
 | Dimension | CSV | Rapport | Plan | Statut |
 |-----------|----:|--------:|-----:|--------|
-| Usage op / non-op / unk | 469 / 545 / 31 | ✓ | ✓ | aligné |
+| Usage op / non-op / unk | 470 / 544 / 31 | ✓ | ✓ | aligné |
 | Authority can/ref/sup/info/unk | 3 / 75 / 192 / 775 / 0 | ✓ | ✓ | aligné |
-| Lots 0/A/B/C/D/E/G/H/I/J | 103/6/0/23/149/75/570/40/68/11 | ✓ | ✓ | aligné |
+| Lots 0/A/B/C/D/E/G/H/I/J | 103/6/0/23/149/75/571/40/68/10 | ✓ | ✓ | aligné |
 | Lot F tag | 0 | ✓ process | ✓ process | aligné |
-| scope project / lot-G tag | 687 / 570 | ✓ | ✓ | aligné |
-| morris_gate | 43 | ✓ | ✓ | aligné |
-| delete-candidate | 11 | ✓ | ✓ | aligné |
+| scope project / lot-G tag | 687 / 571 | ✓ | ✓ | aligné |
+| morris_gate | 42 | ✓ | ✓ | aligné |
+| delete-candidate | 10 | ✓ | ✓ | aligné |
 | investigate | 38 | ✓ | ✓ | aligné |
 
 **Correction documentaire readiness :** confidence high/low §6 alignés sur CSV (693 / 13).
@@ -1269,8 +1270,8 @@ Recalcul CSV validé contre rapport §2, §6, §19 et plan §3–§16 :
 |--------|--------|------------|------|----------|
 | Obsolescence post-merge (base `072058a`) | Medium | Re-cartographie si inventaire diverge | Morris | Post-merge |
 | 31 Usage unknown | Medium | Gate avant migration irréversible | Morris | Lot 0+ |
-| 43 gates Morris | Medium | Critical profile par lot | Morris | Par lot |
-| 11 delete-candidate | High | Lot J last — 1 file/PR | Morris | Lot J |
+| 42 gates Morris | Medium | Critical profile par lot | Morris | Par lot |
+| 10 delete-candidate | High | Lot J last — 1 file/PR | Morris | Lot J |
 | 23 v3 archive | Medium | Lot C isolé — non-réactivation | Morris | Lot C |
 | 63 op Lot D / 324 op Lot G | Medium | Sous-lots + refs same PR | Tests | Exécution |
 | Merge interprété comme GO migration | High | Statut explicite : migrations not started | Morris | Merge decision |
@@ -1316,7 +1317,7 @@ Recalcul CSV validé contre rapport §2, §6, §19 et plan §3–§16 :
 **Canonical :** **3/3 confirmed** — aucun changement physique
 **Keep :** **27** | **Archive approved (deferred) :** **76**
 **Qualification ≠ exécution** — archive decisions **not executed**
-**CSV :** frozen — SHA `00a6902f…` inchangé
+**CSV :** frozen — SHA `551c2476…` (correction F-005 Morris Option B 2026-07-13 ; antérieur `00a6902f…`)
 **Migrations :** not started
 **Lots A–J :** not started
 **Prochaine étape :** PR #166 merged — archive execution sub-lots (M0-DEC-008 first)
@@ -1334,7 +1335,7 @@ Recalcul CSV validé contre rapport §2, §6, §19 et plan §3–§16 :
 
 | Distinction | Statut |
 |-------------|--------|
-| Cartography classification (CSV) | **frozen** — SHA `00a6902f…` inchangé |
+| Cartography classification (CSV) | **frozen** — SHA `551c2476…` (correction F-005 2026-07-13) |
 | CSV paths | **photographie initiale** — chemins historiques conservés |
 | Paths physically migrated | **9** — mapping documenté dans rapport exécution |
 | Future cartography refresh | **séparée** — si Morris décide |
@@ -1362,7 +1363,7 @@ Recalcul CSV validé contre rapport §2, §6, §19 et plan §3–§16 :
 | Completion PR scope | **67** |
 | Total executed / accounted | **76** |
 | Archive remaining | **0** |
-| Cartography classification (CSV) | **frozen** — SHA `00a6902f…` inchangé |
+| Cartography classification (CSV) | **frozen** — SHA `551c2476…` (correction F-005 2026-07-13) |
 | CSV paths | **photographie initiale** — chemins historiques conservés |
 | Paths physically migrated (cumulative) | **76** — 9 + 67 |
 | Lot A–J | **Lot A executed — pending merge** ; B–J **not started** |
@@ -1386,7 +1387,7 @@ Recalcul CSV validé contre rapport §2, §6, §19 et plan §3–§16 :
 | Lot D rename scope | **unchanged otherwise** — this rename no longer deferred to Lot D |
 | Canonical promotion | **none** |
 | Canonical Lot 0 (3) | **unchanged** |
-| CSV | **frozen** — SHA `00a6902f…` inchangé |
+| CSV | **frozen** — SHA `551c2476…` (correction F-005 2026-07-13) |
 | Lot B | **not required** |
 | Lots C–J | **not started** |
 
@@ -1410,7 +1411,7 @@ Recalcul CSV validé contre rapport §2, §6, §19 et plan §3–§16 :
 | lifecycle sums | 1045 |
 | usage sums | 1045 |
 | authority sums | 1045 |
-| SHA-256 | `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275` |
+| SHA-256 | `551c24765cf06a6a3029646ff71d937235af25c2c740d020e7ad1b7d2dc10e34` |
 
 ---
```

---

## 11. Diff migration-lots-plan.md

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index 41512b0..45eed45 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -9,7 +9,7 @@
 **Profil SFIA :** **Critical**
 **Base inventaire :** `072058a` — **1045 fichiers**
 **Artefacts audit exclus :** 3 livrables PR #165 (hors CSV)
-**Source CSV :** SHA-256 `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275`
+**Source CSV :** SHA-256 `551c24765cf06a6a3029646ff71d937235af25c2c740d020e7ad1b7d2dc10e34` (correction F-005 Morris Option B 2026-07-13 ; antérieur `00a6902f…`)
 
 **Pass Lifecycle :** **completed and corrected**
 **Pass Usage :** **completed**
@@ -52,7 +52,7 @@ Cartographie finale (PR #165)
   → Lot G projets (par projet)
   → Lot H prompts/templates/checklists actifs
   → Lot I tooling/CI actif
-  → Lot J suppressions finales (11 candidates)
+  → Lot J suppressions finales (10 candidates)
 ```
 
 **Articulation Lot E :** chaque lot B/C/D/G/H met à jour ses références directes dans la même PR ; Lot E = contrôle global résiduel.
@@ -237,19 +237,22 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 | Champ | Contenu |
 |-------|---------|
 | **Tag CSV** | **0** — Lot F = **phase process**, pas tag d'exécution |
-| **Volume identifié** | **5** fichiers `lifecycle_status = superseded` |
-| **Manifeste qualification** | **5/5** vérifié |
+| **Volume initial qualification** | **5** fichiers `lifecycle_status = superseded` |
+| **Volume post-F2 (Morris Option B)** | **4** superseded — **F-005 exclu** |
+| **Manifeste qualification** | **5/5** vérifié (historique PR #184) |
 | **Qualification** | **merged via PR #184** (`997f1ff2bd702d7441cd25896c7f49659094dfdc`) |
-| **Rapport qualification** | `2026-07-12-sfia-v2.6-lot-f-superseded-qualification.md` |
-| **Rapport validation F1a/F1b** | `2026-07-13-sfia-v2.6-lot-f1a-f1b-validation.md` |
-| **Classifications** | superseded-validate-delete **4** ; morris-gate-replacement-missing **1** |
-| **Remplaçants Git présents** | **4/5** |
-| **Sous-lots proposés** | **F1a** (2) foundation v1.1 ; **F1b** (2) documentation pair ; **F2** (1) Interv360 Critical |
-| **Profil recommandé** | **Standard** (+ Critical reserve F-005) |
-| **Routage CSV** | **5/5** en **lot-J** (`delete-candidate`) avec remplaçants documentés |
+| **Rapport qualification** | `2026-07-12-sfia-v2.6-lot-f-superseded-qualification.md` (+ addendum 2026-07-13) |
+| **Rapport validation F1a/F1b** | `2026-07-13-sfia-v2.6-lot-f1a-f1b-validation.md` — **merged PR #185** |
+| **Rapport Critical F2** | `2026-07-13-sfia-v2.6-lot-f2-f005-critical-review.md` — **closed** |
+| **Décision Morris F-005** | **Option B validée** 2026-07-13 — maintenir F-005 ; remplaçant `post-mvp-application-audit.md` **invalidé** |
+| **Classifications finales** | superseded-validate-delete **4** (F-001–F-004) ; F-005 **conservé** (`validated` / `keep` / lot-G) |
+| **Remplaçants Git présents** | **4/4** superseded restants — F-005 **sans remplaçant** (déclaré absent, invalidé) |
+| **Sous-lots exécutés** | **F1a** (2) merged ; **F1b** (2) merged ; **F2** (1) closed |
+| **Profil** | **Standard** + Critical F2 résolu |
+| **Routage CSV post-correction** | **4/4** superseded → **lot-J** (`delete-candidate`) ; F-005 → **lot-G** (`keep`) |
 | **Trajectoire** | **F → H → J** (Lots G, I exclus) |
-| **Statut exécution Lot F** | **F1a/F1b executed** — validation read-only ; **F2 blocked** |
-| **Next gate** | Morris review F1a/F1b ; gate F-005 séparé ; puis Lot H |
+| **Statut exécution Lot F** | **closed** — F1a/F1b merged ; F2 Option B implémentée ; CSV F-005 corrigé |
+| **Next gate** | **Ouverture Lot H** — décision Morris séparée |
 
 ---
 
@@ -257,14 +260,14 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 
 | Champ | Contenu |
 |-------|---------|
-| **Volume tag CSV** | **570** |
+| **Volume tag CSV** | **571** |
 | **Scope `project` (champ CSV)** | **687** — dimension distincte du tag lot-G |
 | **Fichiers `projects/` hors lot-G** | **118** — surtout lot-D (rename documentaire) |
 | **Sous-lots exécution** | interv360 (**432**) ; chantiers360-v2 (**137**) ; ≤**50** fichiers/PR |
 | **Disposition dominante** | keep **416** ; archive **146** ; investigate **8** |
 | **Usage operational** | **324** — tests renforcés ; refs dans même PR |
 | **Usage unknown** | **23** — gate avant migration irréversible |
-| **Règle** | **Famille de lots** — jamais une PR unique de 570 fichiers |
+| **Règle** | **Famille de lots** — jamais une PR unique de 571 fichiers |
 
 ---
 
@@ -281,7 +284,9 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 
 ## 12. Lot J — Suppressions
 
-| Volume | **11** delete-candidate |
+| Volume | **10** delete-candidate |
+| Exclusions | **F-005** (`current-application-audit.md`) — Morris Option B 2026-07-13 |
+| Manifeste | F-001–F-004 (4) + 6 autres delete-candidates hors Lot F |
 | Gate | Critical — par fichier |
 | Ordre | Dernier — après Lot 0 validation |
 
@@ -303,7 +308,7 @@ Les 3 livrables PR ne sont **pas** dans le CSV. Ils ne participent à aucun lot
 | **Usage Evidence Corrective Review** | **Completed** — C=414 |
 | **Usage Evidence Graph Review** | **Completed** — G=374 |
 | **Direct Usage Evidence Final Review** | **Completed** — D=197 |
-| **Usage dimension** | **Frozen** — op **469** / non-op **545** / unknown **31** |
+| **Usage dimension** | **Frozen** — op **470** / non-op **544** / unknown **31** |
 | **Pass Authority** | **Completed** — auth canonical **3** / reference **75** / supporting **192** / informational **775** / unknown **0** |
 | **Authority Morris gates** | **Resolved** (2 décisions Morris) |
 | **Authority dimension** | **Frozen** |
@@ -339,8 +344,8 @@ Les 3 livrables PR ne sont **pas** dans le CSV. Ils ne participent à aucun lot
 | archive non-v3 (total B) | **204** |
 | Lot 0 ∩ archive non-v3 | **56** |
 | archive non-v3 hors Lot 0 | **148** |
-| delete-candidate | **11** |
-| superseded | **5** |
+| delete-candidate | **10** |
+| superseded | **4** |
 
 ---
 
@@ -361,11 +366,11 @@ Les clarifications des lots (Lot 0, Lot F, Lot G, Lot D, sous-lots) sont intégr
 ### Points de vigilance
 
 1. **Lot 0** = tag décision, pas migration bulk — 3 canonical + 56 archive + 47 keep
-2. **Lot F** = phase process — 0 tag ; 5 superseded → lot-J
-3. **Lot G** = 570 tag ≠ 687 scope project — famille ≤50/PR
+2. **Lot F** = phase process — **closed** ; 4 superseded → lot-J ; F-005 conservé (lot-G)
+3. **Lot G** = 571 tag ≠ 687 scope project — famille ≤50/PR
 4. **Lot D** = 149 rename dont 63 operational — sous-lots 20–50
 5. **31 usage unknown** — gate avant suppression/migration irréversible
-6. **Lot J** = 11 delete — 1 fichier/PR gate Morris
+6. **Lot J** = 10 delete — 1 fichier/PR gate Morris — F-005 exclu
 
 ### Dépendances exécution
 
@@ -396,7 +401,7 @@ Les clarifications des lots (Lot 0, Lot F, Lot G, Lot D, sous-lots) sont intégr
 **PR :** #165 — Map repository for SFIA v2.6 compliance
 **HEAD initial :** `2c80a64629c7b6a7d2fc7823c5fce19e08814936`
 **Base :** `main` @ `072058a1e3eea7a7647b638be4b8512df6b84ea6`
-**CSV SHA :** `00a6902fbdd10bbac3951866679f3ea91ae8e2c1585b89868daef73764510275`
+**CSV SHA :** `551c24765cf06a6a3029646ff71d937235af25c2c740d020e7ad1b7d2dc10e34` (correction F-005 2026-07-13)
 
 | Élément | Statut |
 |---------|--------|
@@ -411,4 +416,4 @@ Les clarifications des lots (Lot 0, Lot F, Lot G, Lot D, sous-lots) sont intégr
 
 ---
 
-*Plan candidate — **Lot 0 closed (76/76)** — **Lot A closed** — **Lot B not required** — **Lot C closed** — **Lot D closed (149/149)** — **D1 closed** — **D2 closed** — **D3 closed** — **Lot E closed (75/75)** — **Lot F qualification merged via PR #184** (`997f1ff`) — **Lot F1a/F1b validation executed** — **Lot F2 blocked** — **Lots G/I excluded** — **Lots H/J not opened**.*
+*Plan candidate — **Lot 0 closed (76/76)** — **Lot A closed** — **Lot B not required** — **Lot C closed** — **Lot D closed (149/149)** — **D1 closed** — **D2 closed** — **D3 closed** — **Lot E closed (75/75)** — **Lot F qualification merged via PR #184** (`997f1ff`) — **Lot F1a/F1b merged via PR #185** (`4a7f857`) — **Lot F2 closed — Morris Option B** — **Lot F closed** — **Lots G/I excluded** — **Lots H/J not opened** — **Next gate: Lot H opening (Morris GO separate)**.*
```

---

## 12. Addendum qualification Lot F (complet)

## 16. Addendum — Décision Morris Option B (2026-07-13)

**Horodatage :** 2026-07-13 05:21 Europe/Paris (CEST)
**Cycle :** F2 — implémentation contrôlée post-recommandation Critical
**Branche :** `qualification/sfia-v2.6-lot-f2-f005` @ `4a7f857f3f05c6d0a0540cc489d9ab5c5a832f7e`
**Rapport F2 :** `2026-07-13-sfia-v2.6-lot-f2-f005-critical-review.md`

> **Note :** Les sections §1–§15 ci-dessus conservent l'état de la qualification initiale (PR #184, 2026-07-12). L'addendum documente la décision Morris et la correction contractuelle sans réécrire l'analyse historique.

### Décision Morris validée

| Élément | Décision |
|---------|----------|
| Option | **B** — maintenir F-005 jusqu'à événement produit réel |
| Remplaçant `post-mvp-application-audit.md` | **Invalidé** — jamais créé, non planifié ailleurs |
| Suppression Lot J F-005 | **Retirée** du périmètre |
| Reclassification CSV F-005 | **Autorisée et appliquée** (1 ligne) |
| Clôture F2 | **Autorisée** après contrôles conformes |
| Clôture Lot F | **Autorisée** — contrat documentaire cohérent |

### Correction CSV F-005 (ligne unique)

| Champ | Avant (qualification) | Après (Option B) |
|-------|----------------------|------------------|
| `lifecycle_status` | superseded | **validated** |
| `usage` | non-operational | **operational** |
| `duplicate_or_overlap` | superseded-by-newer | **no** |
| `proposed_disposition` | delete-candidate | **keep** |
| `risk_level` | high | **medium** |
| `morris_gate_required` | yes | **no** |
| `migration_lot_candidate` | lot-J | **lot-G** |
| `evidence` | superseded-map + remplaçant déclaré | morris-f2-option-b ; replacement-invalidated |
| `reserve_or_question` | Superseded by post-mvp… | Snapshot consolidation 2026-07 ; audit futur après événement produit |

**Contenu F-005 :** inchangé. **Aucun fichier `projects/interv360/**` modifié.**

### Métriques Lot F révisées (CSV recalculé)

| Métrique | Qualification initiale | Post Option B |
|----------|------------------------|---------------|
| superseded | 5 | **4** |
| delete-candidate | 11 | **10** |
| lot-J | 11 | **10** |
| lot-G | 570 | **571** |
| keep | 619 | **620** |
| usage operational | 469 | **470** |
| morris_gate yes | 43 | **42** |

**SHA-256 CSV :** `00a6902f…` → `551c24765cf06a6a3029646ff71d937235af25c2c740d020e7ad1b7d2dc10e34`

### Statuts finaux

| Élément | Statut |
|---------|--------|
| F2 | **closed** — Option B implémentée |
| Lot F | **closed** — F1a/F1b merged ; F2 résolu ; F-005 conservé |
| F-005 | **conservé** — `validated` / `keep` / lot-G — hors Lot J |
| Lot H | **not opened** — prochaine gate Morris |
| Lot J | **not opened** — manifeste 10 delete-candidates (F-005 exclu) |

### Réserves post-addendum

1. Cleanup incoming refs F-001–F-004 en Lot J — inchangé (F1a/F1b)
2. `06-audit-rex/README.md` obsolète — cycle Interv360 séparé
3. Audit post-MVP futur — déclencheur conditionnel uniquement

```
LOT F ADDENDUM — MORRIS OPTION B APPLIED
F-005 MAINTAINED — REPLACEMENT INVALIDATED
F-005 EXCLUDED FROM LOT J
F2 CLOSED — LOT F CLOSED
LOTS H/J NOT OPENED
CSV CORRECTED — SINGLE LINE F-005
```

---


---

## 13. Rapport F2 complet

# SFIA v2.6 — Lot F2 / F-005 Critical Review

**Horodatage :** 2026-07-13 05:13 Europe/Paris (CEST)
**Cycle :** 9 — QA / validation — Lot F2 Critical
**Profil SFIA :** **Critical**
**Branche d'exécution :** `qualification/sfia-v2.6-lot-f2-f005`
**Base Git :** `main` @ `4a7f857f3f05c6d0a0540cc489d9ab5c5a832f7e`
**HEAD :** `4a7f857f3f05c6d0a0540cc489d9ab5c5a832f7e`
**PR #185 :** MERGED — F1a/F1b intégrés
**CSV frozen SHA-256 :** `551c24765cf06a6a3029646ff71d937235af25c2c740d020e7ad1b7d2dc10e34` (correction F-005 Morris Option B 2026-07-13 ; antérieur `00a6902f…`)
**Statut cycle :** **F2 OPTION B IMPLEMENTED — LOT F CLOSED — READY FOR COMMIT**

---

## 1. Décisions Morris déjà acquises

| Décision | Statut |
|----------|--------|
| Trajectoire F → H → J | **Validée** |
| F1a/F1b validés (PR #185) | **Merged** |
| F-005 gate Morris séparé | **Requis** — présent cycle |
| Suppression F-005 / Lot J delete | **Non autorisée** |
| Création automatique remplaçant | **Non autorisée** |
| Modification Interv360 | **Non autorisée** |
| Promotion SFIA v2.5/v2.6 baseline | **Non acquise** |

---

## 2. Objectif et périmètre

**Objectif :** qualifier le blocage `morris-gate-replacement-missing` sur F-005, analyser l'usage réel, évaluer le remplaçant déclaré absent, comparer quatre options de décision et produire **une recommandation unique** pour Morris.

**Périmètre :** F-005 uniquement — lecture read-only du corpus Interv360 et consommateurs.

**Hors périmètre respecté :** aucune création/modification F-005, remplaçant, Interv360, CSV, consommateurs, Lots H/J.

---

## 3. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| Workspace | `/Users/morris/Projects/sfia-workspace` |
| Branche initiale | `main` @ `4a7f857…` |
| Branche créée | `qualification/sfia-v2.6-lot-f2-f005` |
| merge-base avec `main` | `4a7f857f3f05c6d0a0540cc489d9ab5c5a832f7e` |
| État initial | **Aucune modification versionnée ; untracked connus présents** (`.sfia/`, `.tmp-sfia-review/`) |

**Verdict :** Local Git Truth Check **PASSED**

---

## 4. Ligne CSV exacte F-005

| Champ | Valeur (CSV frozen) |
|-------|---------------------|
| **Chemin** | `projects/interv360/06-audit-rex/current-application-audit.md` |
| **Lifecycle** | `superseded` |
| **Authority** | `supporting` |
| **Usage** | `non-operational` |
| **Disposition** | `delete-candidate` |
| **Lot cible** | `lot-J` |
| **Risque** | `high` |
| **Morris gate** | `yes` |
| **Incoming CSV** | `projects/interv360/README.md` |
| **Remplaçant déclaré** | `projects/interv360/06-audit-rex/post-mvp-application-audit.md` |
| **Evidence** | `superseded-map;replacement=…/post-mvp-application-audit.md;usage-pass;result=non-operational;proof=explicit-retired` |

**Présence Git :** F-005 **OK** ; remplaçant déclaré **ABSENT** (`git ls-files` → MISSING).

---

## 5. Analyse du rôle actuel de F-005

### 5.1 Création et contexte

| Élément | Preuve |
|---------|--------|
| Création | PR **#77** — `docs: audit current Interv360 application` — merge `c496bc3` — **2026-07-03** |
| Déplacement | Lot A — `7c0e865` — `04-delivery/` → `06-audit-rex/` |
| Contexte | Post-MVP + Premium UI (`v0.2.0-premium-ui`) ; ouverture consolidation SFIA |
| Décision centrale | **`APPLICATION_SAINE_AVEC_RESERVES`** |

### 5.2 Rôle documentaire réel

**Observation :** F-005 est l'**unique audit technique complet** de l'état applicatif Interv360 au point de consolidation (juillet 2026).

| Dimension | Qualification |
|-----------|---------------|
| Type | Audit technique read-only — frontend, backend, API, tests, dette |
| Autorité effective | **Référence active de navigation** via `projects/interv360/README.md` § Références clés |
| Usage CSV | `non-operational` / `explicit-retired` — **diverge** de l'usage navigation README |
| Rôle vs REX | Audit ≠ REX — F-005 §13 renvoie explicitement au Chantier 2 REX (`interv360-application-rex.md`) comme **suite distincte** |
| Rôle vs roadmaps | Roadmaps `09-roadmap/` = cadrage futur ; F-005 = photographie état passé |

### 5.3 Réponse Q1 — F-005 est-il réellement superseded aujourd'hui ?

**Observation :** le CSV le classe `superseded` avec remplaçant `post-mvp-application-audit.md`.

**Preuve :** aucun cycle produit post-MVP n'a été exécuté depuis l'audit ; le remplaçant n'existe pas ; aucun document ne couvre intégralement le même rôle technique.

**Conclusion :** F-005 est **superseded dans le CSV** mais **pas superseded dans la réalité opérationnelle documentaire** — le statut CSV est **prématuré** par rapport à la trajectoire produit réelle.

---

## 6. Contenu encore valide vs obsolète

### 6.1 Éléments encore valides (snapshot consolidation)

- Décision `APPLICATION_SAINE_AVEC_RESERVES` et justification (§3, §12)
- Architecture frontend/backend décrite (§4–5) — structure repo toujours présente
- Séparation premium/legacy et double référentiel DEM-248x / SAV-DEMO (§6–7)
- Dette technique qualifiée faible/moyenne (§9)
- Risques avant nouveau cycle produit (§10) — toujours pertinents si cycles auth/CRUD non ouverts
- Garde-fous et suites proposées (§11, §13)
- Statut merge PR #77 (§14) — traçabilité historique

### 6.2 Éléments obsolètes ou partiellement obsolètes

| Élément | Nature |
|---------|--------|
| §2 périmètre `04-delivery/` | Chemins pré-Lot A — **obsolète** (déplacé `06-audit-rex/`) |
| Compteurs tests `202/202` | **Snapshot** au moment audit — non re-vérifié dans ce cycle |
| §26 « Documentation Partiel » | État pré-consolidation documentaire — partiellement dépassé |
| Référence Chantier 2 REX | **Exécuté** — REX existe (`method/…/audit-rex/2026-07-03-interv360-application-rex.md`) |

### 6.3 Réponse Q2 — Valeur opérationnelle / historique / référence active

| Type | Verdict |
|------|---------|
| **Historique** | **Forte** — seul audit technique consolidé post-Premium UI |
| **Référence active** | **Oui** — indexé `projects/interv360/README.md` |
| **Opérationnel normatif** | **Non** — ne doit pas guider évolution code sans re-audit |
| **Trompeur** | **Risque modéré** — compteurs tests et chemins §2 peuvent induire en erreur si lu comme état live |

---

## 7. Consommateurs et références entrantes

### 7.1 Consommateur direct CSV

| Fichier | Nature | Cleanup Lot J |
|---------|--------|---------------|
| `projects/interv360/README.md` L28 | **Navigation active** — Références clés | Oui si delete — **bloquant sans décision** |

### 7.2 Références hors CSV (recherche Git)

| Fichier | Nature |
|---------|--------|
| `sfia-notion-content-categorization.md` | Table inventaire — « Audit santé application » |
| `sfia-documentation-completeness-matrix.md` | Mention `current-application-audit.md` OK |
| `documentation-audit.md` (F-003 superseded) | Référence historique pré-cartography |
| Workspace audits (round-2, interv360-normalization) | Snapshots migration — chemins historiques |
| Rapports v2.6 (cartography, qualification F, F1a/F1b) | Métadonnées cycle — non bloquant |

**Comptage :** CSV **1** incoming ; Git références nom/basename **15+** ; consommateur navigation actif **1** (README projet).

### 7.3 README / index associés

| Fichier | État | Référence F-005 |
|---------|------|-----------------|
| `projects/interv360/README.md` | **Actif** | **Oui** — référence clé |
| `projects/interv360/06-audit-rex/README.md` | **Obsolète** | **Non** — titre « 07 REX », statut « À venir » malgré audit présent |
| `projects/interv360/07-documentation/README.md` | Actif | Renvoie vers `06-audit-rex/` sans lien direct F-005 |

**Observation :** incohérence interne `06-audit-rex/` — audit présent, README phase obsolète (signalé capitalisation audit 2026-07-03, non corrigé — hors périmètre F2).

---

## 8. Analyse du remplaçant déclaré absent

### 8.1 `post-mvp-application-audit.md`

| Question | Réponse | Preuve |
|----------|---------|--------|
| Absent de Git ? | **Oui** | `git ls-files` MISSING |
| Planifié dans roadmaps ? | **Non** — aucune roadmap `09-roadmap/` ne nomme ce fichier | `git grep post-mvp-application-audit` → cartography uniquement |
| Mentionné ailleurs ? | **Uniquement** cartography superseded-map + rapports Lot F | grep repository |
| Attendu par trajectoire produit ? | **Hypothèse CSV** — pas de livrable produit formalisé | Aucun cycle post-MVP exécuté |
| Justifié documentairement ? | **Non** — nom inféré (`current` → `post-mvp`), pas créé | Aucun commit, aucun PR, aucun chantier |

### 8.2 Réponses Q4–Q7

| # | Question | Conclusion |
|---|----------|------------|
| 4 | Remplaçant | **Absent** ; **non planifié** ; **non mentionné** hors cartographie ; **non justifié** par trajectoire produit documentée |
| 5 | Couverture par autre doc ? | **Partielle seulement** — voir Option D |
| 6 | Création utile maintenant ? | **Non** — pas de cycle produit post-MVP exécuté |
| 7 | Dette / faux artefact ? | **Oui** — création maintenant produirait un document sans matière réelle distincte de F-005 + REX + roadmaps |

---

## 9. Documents alternatifs candidats (Option D)

| Candidat | Chemin | Couverture vs F-005 | Lacunes |
|----------|--------|---------------------|---------|
| REX Interv360 | `method/sfia-fast-track/audit-rex/2026-07-03-interv360-application-rex.md` | Enseignements, méthode, capitalisation | **Pas** d'inventaire technique détaillé ; rôle complémentaire explicite dans F-005 §13 |
| MVP Release Readiness | `projects/interv360/05-release/2026-07-02-mvp-release-readiness.md` | Release readiness, critères MVP | Phase antérieure ; pas post-Premium UI |
| Premium Design System | `projects/interv360/04-delivery/premium-design-system.md` | Couche UI premium | Pas audit global app |
| Product Roadmap Next | `projects/interv360/09-roadmap/interv360-product-roadmap-next.md` | Décision axe produit futur | Prospectif — pas audit état |
| Roadmaps post-MVP (14 fichiers `09-roadmap/`) | Cadrage auth, backend, workflow | Intentions futures | **Aucun audit** ; cycles non exécutés |

**Conclusion Option D :** **aucun document existant ne remplace intégralement F-005**. Le REX est le complément le plus proche mais remplit un rôle **différent** (REX ≠ audit technique).

---

## 10. Matière post-MVP réellement disponible

| Source | Disponibilité |
|--------|---------------|
| Cycles produit post-MVP exécutés (auth, CRUD, workflow étendu) | **Aucun** |
| Roadmaps / framings `09-roadmap/` | **Oui** — 14 documents cadrage |
| Releases post `v0.2.0-premium-ui` | **Non identifiées** dans Git |
| Tests / build re-audit | **Non exécutés** dans ce cycle |
| REX consolidation | **Oui** — `2026-07-03-interv360-application-rex.md` |

**Observation :** la matière disponible permet un **cadrage** post-MVP, pas un **audit applicatif** distinct et actuel.

---

## 11. Analyse des options A / B / C / D

### OPTION A — Créer un remplaçant dans un cycle dédié

| Critère | Évaluation |
|---------|------------|
| Objectif distinct | **Oui** — audit après cycle produit réel |
| Matière post-MVP | **Insuffisante maintenant** |
| Utilité maintenant | **Faible** — doublonnerait F-005 sans nouveau jalon |
| Sources nécessaires | Cycle produit exécuté + re-audit runtime |
| Dette documentaire | **Élevée** si créé sans matière |
| Gate Morris | Obligatoire — cadrage produit préalable |
| Impact Lot J | Débloquerait delete F-005 **après** création et validation |

**Risque :** faux artefact post-MVP ; document vide ou stale immédiatement.

### OPTION B — Maintenir F-005 jusqu'à événement produit réel

| Critère | Évaluation |
|---------|------------|
| Événement déclencheur | Fin d'un cycle produit substantiel (auth, workflow, CRUD…) documenté dans `09-roadmap/` |
| Fiabilité F-005 jusque-là | **Acceptable comme snapshot** avec réserve explicite (compteurs, chemins §2) |
| Réserve suffisante | **Oui** — si README et CSV alignés sur « snapshot consolidation » |
| Clôture Lot F | Possible **avec report** delete F-005 hors Lot J immédiat |
| Simplicité | **Élevée** |
| Cohérence repo-first | **Forte** |

**Risque :** divergence CSV `delete-candidate` vs réalité tant que reclassification non faite.

### OPTION C — Reclasser F-005

| Proposition | Valeurs candidates |
|-------------|-------------------|
| Lifecycle | `archived` ou conserver `superseded` |
| Usage | `non-operational` (snapshot) ou `historical` |
| Authority | `supporting` ou `informational` |
| Disposition | **`keep`** ou `historical-keep` — **retirer `delete-candidate`** |
| Impact CSV | Gate Morris + cycle CSV frozen séparé |
| Dette | Corrige incohérence CSV vs navigation README |

**Risque :** reclassification sans gate Morris = hors périmètre ; dette si mal calibrée.

### OPTION D — Autre document remplace déjà F-005

| Critère | Évaluation |
|---------|------------|
| Candidat principal | REX — **couverture partielle** |
| Couverture complète | **Non** |
| Impact cartographie | Nécessiterait correction mapping remplaçant |
| Impact Lot J | Delete F-005 **non justifié** |

**Verdict Option D :** **non retenue**.

---

## 12. Recommandation unique

```
OPTION B — Maintenir F-005 jusqu'à un événement produit réel,
avec sous-décision Morris sur reclassification CSV (éléments Option C)
```

### Justification

1. **F-005 n'est pas réellement superseded** — le remplaçant déclaré est un **nom inféré** jamais matérialisé.
2. **F-005 reste la seule photographie technique complète** de l'application au jalon consolidation Premium UI.
3. **Le REX existe et joue son rôle** — il ne remplace pas l'audit (rôles explicitement séparés dans F-005).
4. **Créer `post-mvp-application-audit.md` maintenant** générerait une **dette documentaire** sans matière post-MVP exécutée.
5. **`projects/interv360/README.md`** traite F-005 comme référence active — incompatible avec delete-candidate immédiat.
6. **Les roadmaps `09-roadmap/`** définissent des **futurs cycles**, pas un audit disponible aujourd'hui.

### Actions Morris recommandées (non exécutées dans ce cycle)

| # | Action | Priorité |
|---|--------|------------|
| 1 | **Reclasser F-005** : retirer `delete-candidate` ; disposition `keep` ou `historical-keep` ; documenter « snapshot consolidation 2026-07 » | P0 |
| 2 | **Invalider le mapping** `post-mvp-application-audit.md` dans cartographie — remplaçant = « pending product event » | P0 |
| 3 | **Reporter** toute suppression Lot J sur F-005 jusqu'à cycle produit + audit réel | P0 |
| 4 | **Clôturer F2** sur base Option B si Morris accepte | P1 |
| 5 | **Clôturer Lot F** avec F-005 exempté du manifeste delete Lot J — ou maintenir Lot F ouvert jusqu'à reclassification CSV | P1 |
| 6 | Cycle futur : créer audit post-MVP **uniquement** après événement produit documenté (Option A différée) | P2 |
| 7 | Cleanup README `06-audit-rex/` obsolète — **cycle séparé** Interv360 | P2 |

**Ne pas faire maintenant :** créer le remplaçant ; supprimer F-005 ; modifier README Interv360.

---

## 13. Impacts trajectoire

| Élément | Impact |
|---------|--------|
| **Clôture F2** | Possible après décision Morris sur recommandation |
| **Clôture Lot F** | **Décision Morris** — peut clôturer avec F-005 en `keep` reporté, ou attendre reclassification CSV |
| **Lot H** | Non bloqué par F-005 si Lot F clôturé qualitativement |
| **Lot J** | F-005 **hors delete immédiat** — manifeste Lot J passerait à 4/5 delete-candidates si F-005 reclassé |
| **F-001 à F-004** | Inchangés — réserves cleanup Lot J maintenues |

---

## 14. Réserves

1. Compteurs tests F-005 non re-vérifiés — snapshot juillet 2026.
2. `06-audit-rex/README.md` obsolète — incohérence phase non résolue.
3. CSV frozen inchangé — divergence statut CSV vs recommandation jusqu'à gate Morris.
4. Aucun audit runtime exécuté dans F2.
5. Références historiques workspace-audit nombreuses — non bloquantes.

---

## 15. Décisions Morris requises

| # | Décision |
|---|----------|
| 1 | Accepter ou rejeter **Option B** (maintenir F-005) |
| 2 | Autoriser **reclassification CSV** F-005 (Option C) — cycle séparé |
| 3 | Invalider mapping remplaçant `post-mvp-application-audit.md` |
| 4 | **Clôturer F2** |
| 5 | **Clôturer Lot F** — avec ou sans exemption F-005 explicite |
| 6 | Tout commit/PR sur reclassification ou création remplaçant futur |

---

## 16. Validations Git (post-écriture)

| Contrôle | Attendu |
|----------|---------|
| Fichiers versionnés modifiés | 2 (rapport + plan §9/footer) |
| F-005 absent du diff | **Oui** |
| `projects/interv360/**` absent du diff | **Oui** |
| CSV frozen absent du diff | **Oui** |
| Aucun commit | **Oui** |
| Aucun push exécution | **Oui** |

---

## 17. Verdict F2

```
F2 RECOMMENDATION READY — LOT F CLOSURE DECISION PENDING
```

**Signification :**
- Analyse Critical **complète** — quatre options évaluées
- Recommandation unique : **Option B** (+ reclassification Morris Option C)
- **Aucune décision validée** — Morris décideur
- **Aucune suppression** — **aucune création** remplaçant
- Statut : **READY FOR MORRIS DECISION**

**Non autorisé :** `READY FOR DELETE` · `F-005 DELETE APPROVED` · `POST-MVP AUDIT CREATED`

---

## 18. Décision Morris validée — Option B (2026-07-13)

**Horodatage décision :** 2026-07-13 05:21 Europe/Paris (CEST)
**Décideur :** Morris
**Option retenue :** **B** — maintenir F-005 jusqu'à événement produit réel permettant un véritable audit post-MVP

| Action Morris | Statut |
|---------------|--------|
| Accepter Option B | **Validé** |
| Maintenir F-005 (contenu inchangé) | **Validé** |
| Invalider `post-mvp-application-audit.md` | **Validé** |
| Retirer F-005 du Lot J | **Validé** |
| Corriger ligne CSV F-005 | **Validé et exécuté** |
| Clôturer F2 | **Validé** |
| Clôturer Lot F | **Validé** |

---

## 19. Implémentation Option B — correction CSV

### Ancienne ligne CSV (HEAD @ `4a7f857`)

```
projects/interv360/06-audit-rex/current-application-audit.md,current-application-audit.md,md,13680,F09,,superseded,document-lifecycle,supporting,non-operational,project,interv360,,N/A,N/A,projects,projects,documentary,non-compliant,compliant,B,# Interv360 — Audit de l'application actuelle ## 1. Objectif Ce document audite l'état actuel de l'application Interv3,projects/interv360/README.md,,superseded-by-newer,no,delete-candidate,projects/interv360/06-audit-rex/current-application-audit.md,current-application-audit.md,"Regime documentary; family F09; D10 compliant (current=projects, target=projects); lifecycle-corrective superseded. Usage Pass: non-operational per explicit-retired.",high,yes,high,superseded-map;replacement=projects/interv360/06-audit-rex/post-mvp-application-audit.md;git=7c0e865 docs: operationalize SFIA workspace structure (#81);usage-pass;result=non-operational;proof=explicit-retired;source=projects/interv360/06-audit-rex/current-application-audit.md;confidence=high;checks=disposition=delete-candidate+lifecycle=superseded,Superseded by projects/interv360/06-audit-rex/post-mvp-application-audit.md. Usage Pass: non-operational (explicit-retired).,lot-J
```

### Nouvelle ligne CSV (post-correction)

```
projects/interv360/06-audit-rex/current-application-audit.md,current-application-audit.md,md,13680,F09,,validated,document-lifecycle,supporting,operational,project,interv360,,N/A,N/A,projects,projects,documentary,non-compliant,compliant,B,# Interv360 — Audit de l'application actuelle ## 1. Objectif Ce document audite l'état actuel de l'application Interv3,projects/interv360/README.md,,no,no,keep,projects/interv360/06-audit-rex/current-application-audit.md,current-application-audit.md,"Regime documentary; family F09; D10 compliant (current=projects, target=projects); lifecycle-corrective validated. Morris F2 Option B: snapshot consolidation audit maintained; active navigation via projects/interv360/README.md. Not superseded — declared replacement invalidated.",medium,no,high,morris-f2-option-b;lifecycle-corrective;validated-audit-closure;git=c496bc3 docs: audit current Interv360 application (#77);usage-pass;result=operational;proof=active-navigation-reference;source=projects/interv360/README.md;confidence=high;checks=supporting snapshot audit;replacement-invalidated=post-mvp-application-audit.md,Snapshot applicatif consolidation 2026-07 (APPLICATION_SAINE_AVEC_RESERVES). Future post-MVP audit only after real product event. Declared replacement post-mvp-application-audit.md invalidated — never created. Excluded from Lot J delete.,lot-G
```

### Justification champ par champ

| Champ | Ancienne valeur | Nouvelle valeur | Convention CSV de référence | Justification |
|-------|----------------|-----------------|------------------------------|---------------|
| `lifecycle_status` | superseded | validated | F-001–F-004 restent superseded ; autres `validated` (146→147) | F-005 n'est pas réellement superseded — snapshot audit actif |
| `lifecycle_applicability` | document-lifecycle | document-lifecycle | inchangé | document applicatif sous lifecycle documentaire |
| `authority` | supporting | supporting | inchangé | rôle supporting confirmé — pas canonique |
| `usage` | non-operational | operational | README référence active ; 470 operational dans CSV | consommateur actif `projects/interv360/README.md` |
| `duplicate_or_overlap` | superseded-by-newer | no | valeurs `no` dominantes | remplaçant absent — pas de doublon réel |
| `canonical_candidate` | no | no | inchangé | snapshot supporting, non canonique |
| `proposed_disposition` | delete-candidate | keep | keep = 620 fichiers | Morris Option B — conservation |
| `proposed_target_path` | (même chemin) | (même chemin) | keep en place | pas de migration physique |
| `proposed_target_filename` | (même nom) | (même nom) | inchangé | conservation identité fichier |
| `rationale` | superseded + non-operational | validated + Option B | pattern lifecycle-corrective | documente décision Morris et invalidation remplaçant |
| `risk_level` | high | medium | medium présent ailleurs | risque delete levé ; réserve snapshot documentée |
| `morris_gate_required` | yes | no | 1003 no / 42 yes | gate F-005 résolue par décision Morris |
| `confidence` | high | high | inchangé | preuves Git et navigation actives |
| `evidence` | superseded-map + remplaçant | morris-f2-option-b + invalidated | pattern evidence colonne | trace décision et invalidation remplaçant |
| `reserve_or_question` | Superseded by post-mvp… | Snapshot + audit futur conditionnel | pattern reserve colonne | déclencheur produit futur, pas remplaçant existant |
| `migration_lot_candidate` | lot-J | lot-G | lot-G = 571 (projets keep/archive) | F-005 repositionné hors suppression |

**Champs inchangés :** `current_path`, `filename`, `extension`, `size_bytes`, `primary_family`, `scope`, `project`, `trajectory`, `trajectory_role`, `logical_location_*`, `naming_*`, `metadata_profile`, `content_summary`, `incoming_references`, `outgoing_references`.

---

## 20. Métriques recalculées (CSV)

| Métrique | Avant | Après |
|----------|------:|------:|
| Lignes CSV | 1045 | 1045 |
| Colonnes | 36 | 36 |
| SHA-256 | `00a6902f…` | `551c2476…` |
| superseded | 5 | **4** |
| delete-candidate | 11 | **10** |
| lot-J | 11 | **10** |
| lot-G | 570 | **571** |
| keep | 619 | **620** |
| usage operational | 469 | **470** |
| usage non-operational | 545 | **544** |
| lifecycle validated | 145 | **146** |
| morris_gate yes | 43 | **42** |

---

## 21. Fichiers modifiés

| Fichier | Action |
|---------|--------|
| `2026-07-11-sfia-v2.6-repository-cartography.csv` | 1 ligne F-005 corrigée |
| `2026-07-11-sfia-v2.6-repository-cartography.md` | métriques, superseded map, Lot F/J, SHA |
| `2026-07-11-sfia-v2.6-repository-migration-lots-plan.md` | §9 Lot F closed, §12 Lot J 10, footer |
| `2026-07-12-sfia-v2.6-lot-f-superseded-qualification.md` | addendum §16 Option B |
| `2026-07-13-sfia-v2.6-lot-f2-f005-critical-review.md` | §18–§22 implémentation |

**Non modifiés :** `projects/interv360/**`, F-005 contenu, méthode, templates.

---

## 22. Validations post-implémentation

| Contrôle | Résultat |
|----------|----------|
| Diff CSV limité à 1 ligne F-005 | **Oui** |
| 36 colonnes conservées | **Oui** |
| Aucune valeur inventée | **Oui** — toutes présentes dans CSV |
| F-005 absent du diff Git contenu | **Oui** |
| `projects/interv360/**` absent du diff | **Oui** |
| `post-mvp-application-audit.md` non créé | **Oui** |
| Métriques MD/plan = CSV | **Oui** |
| Aucun commit exécution | **Oui** |
| Lots H/J non ouverts | **Oui** |

---

## 23. Statuts finaux

| Élément | Statut |
|---------|--------|
| F-005 | **conservé** — `validated` / `operational` / `keep` / lot-G — hors Lot J |
| F2 | **closed** |
| Lot F | **closed** |
| Lot H | **not opened** — prochaine gate Morris |
| Lot J | **not opened** — 10 delete-candidates (F-005 exclu) |

### Réserves restantes

1. Cleanup incoming refs F-001–F-004 — Lot J futur
2. `06-audit-rex/README.md` obsolète — cycle Interv360 séparé
3. Audit post-MVP — uniquement après événement produit réel

### Décisions Morris restantes

| # | Décision | Statut |
|---|----------|--------|
| 1 | Commit / push / PR correction F2 | **GO séparé requis** |
| 2 | Ouverture Lot H | **GO séparé requis** |
| 3 | Ouverture Lot J | **GO séparé requis** |

---

## 24. Verdict F2 final

```
F2 OPTION B IMPLEMENTED — LOT F CLOSED — READY FOR COMMIT
```

**Signification :**
- Décision Morris Option B **appliquée**
- CSV F-005 **corrigé** (1 ligne)
- Remplaçant `post-mvp-application-audit.md` **invalidé** — non créé
- F-005 **exclu** du Lot J
- Lot F **clôturé** qualitativement
- **Aucun commit** sur branche exécution — Morris GO commit requis

---

*Rapport produit par cycle Cursor — profil Critical — Morris décideur — SFIA v2.4 baseline — v2.6 candidate.*


---

## 14. Validations

| Contrôle | Résultat |
|----------|----------|
| Diff CSV = 1 ligne F-005 | Oui |
| 36 colonnes | Oui |
| Interv360 hors diff | Oui |
| post-mvp-application-audit.md non créé | Oui |
| Métriques cohérentes | Oui |
| Commit exécution | Non (Morris GO requis) |
| Lots H/J ouverts | Non |

---

## 15. Réserves

1. Cleanup incoming refs F-001–F-004 — Lot J futur
2. `06-audit-rex/README.md` obsolète — cycle séparé
3. Audit post-MVP — après événement produit réel

---

## 16. Décisions Morris restantes

| # | Décision |
|---|----------|
| 1 | Commit / push / PR correction F2 |
| 2 | Ouverture Lot H |
| 3 | Ouverture Lot J |

---

## 17. Review pack content coverage

| Item | Statut |
|------|--------|
| created files full content | yes (F2 report) |
| modified sections complete | yes |
| useful diff included | yes |
| synthesis only | no |
| **review pack verdict** | **complete** |

---

## 18. Verdict

`F2 OPTION B IMPLEMENTED — LOT F CLOSED — READY FOR COMMIT`

---

## Instruction ChatGPT obligatoire

Lire obligatoirement depuis Git :
`sfia/review-handoff/sfia-review-handoff/latest-chatgpt-review.md`

Vérifier :
- décision Morris Option B
- ancienne et nouvelle ligne CSV F-005
- conventions CSV utilisées
- structure 36 colonnes
- diff limité à une ligne CSV
- SHA avant/après
- métriques avant/après
- cohérence cartography.md
- cohérence plan des lots
- addendum qualification Lot F
- contenu complet du rapport F2
- statut F-005
- clôture F2
- clôture Lot F
- Lots H/J non ouverts
- fichiers modifiés
- validations
- conformité handoff

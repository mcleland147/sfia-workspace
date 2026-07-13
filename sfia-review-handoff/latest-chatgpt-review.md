# SFIA v2.6 — Lot H Cadrage — Review Pack (full)

**Horodatage :** 2026-07-13 06:27 Europe/Paris (CEST)
**Verdict :** `LOT H CADRAGE COMPLETED — READY FOR MORRIS DECISION`

---

## 1. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| toplevel | `/Users/morris/Projects/sfia-workspace` |
| branch | `cadrage/sfia-v2.6-lot-h` |
| HEAD | `2883e37aac29b1a59646be37a33fec0a3e349f6a` |
| origin/main | `2883e37aac29b1a59646be37a33fec0a3e349f6a` |
| merge-base | `2883e37aac29b1a59646be37a33fec0a3e349f6a` |

```
M method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
?? .sfia/
?? .tmp-sfia-review/
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-13-sfia-v2.6-lot-h-cadrage.md
```

---

## 2. Git Review Index

```
...7-11-sfia-v2.6-repository-migration-lots-plan.md | 21 +++++++++++++++++++--
 1 file changed, 19 insertions(+), 2 deletions(-)
```

```
M	method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
```

---

## 3. Manifeste Lot H — 40 fichiers

Volume CSV = Git = **40/40**. Operational = **13**. `.gitkeep` investigate = **9**.

Sous-lots : H1 (16) · H2 (7) · H3 (9) · H4 (8)

Fichiers protégés : **12**

---

## 4. Diff plan des lots (Lot H section)

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index 3943b01..b6b9428 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -275,9 +275,26 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 
 | Lot | Volume tag | Sous-lots exécution | Note |
 |-----|----------:|---------------------|------|
-| H (prompts/templates) | 40 | templates (6) ; prompts families (4) ; .gitkeep investigate (9) | 13 operational |
+| H (prompts/templates) | 40 | **H1** templates canoniques (16) ; **H2** familles prompts (7) ; **H3** `.gitkeep` investigate (9) ; **H4** docs templates + index (8) | 13 operational ; **cadrage completed 2026-07-13** |
 | I (tooling/CI) | 68 | `.github/workflows` ; `tools/cmp-001` ; `docker/penpot` ; automation (4) | 45 operational ; 21 investigate (cmp schemas) |
 
+### Lot H — statut cadrage (2026-07-13)
+
+| Champ | Contenu |
+|-------|---------|
+| **Qualification** | **cadrage completed — execution not opened** |
+| **Rapport cadrage** | `2026-07-13-sfia-v2.6-lot-h-cadrage.md` |
+| **Branche cadrage** | `cadrage/sfia-v2.6-lot-h` @ `2883e37` |
+| **Manifeste CSV** | **40/40** confirmé Git |
+| **Sous-lots proposés** | H3 (9) → H4 (8) → H2 (7) → H1 (16) |
+| **Fichiers protégés** | **12** — spine routing guide / catalog / templates opérationnels |
+| **Operational** | **13** |
+| **`.gitkeep` investigate** | **9** |
+| **Templates canoniques** | **16** (12 `prompts/templates/` + 4 `method/.../templates/`) |
+| **Familles prompts** | **7** (plan initial : 4 — sous-comptage corrigé) |
+| **Statut exécution Lot H** | **not opened** — GO Morris par sous-lot requis |
+| **Next gate** | Validation Morris cadrage ; puis GO exécution **H3** (investigation) ou sous-lot choisi |
+
 **Règle Lot I :** ne pas appliquer logique documentaire aux artefacts `not-applicable`. **338** fichiers `lifecycle not-applicable` au total — dont **52** tagués lot-I.
 
 ---
@@ -416,4 +433,4 @@ Les clarifications des lots (Lot 0, Lot F, Lot G, Lot D, sous-lots) sont intégr
 
 ---
 
-*Plan candidate — **Lot 0 closed (76/76)** — **Lot A closed** — **Lot B not required** — **Lot C closed** — **Lot D closed (149/149)** — **D1 closed** — **D2 closed** — **D3 closed** — **Lot E closed (75/75)** — **Lot F qualification merged via PR #184** (`997f1ff`) — **Lot F1a/F1b merged via PR #185** (`4a7f857`) — **Lot F2 closed — Morris Option B** — **Lot F closed** — **Lots G/I excluded** — **Lots H/J not opened** — **Next gate: Lot H opening (Morris GO separate)**.*
+*Plan candidate — **Lot 0 closed (76/76)** — **Lot A closed** — **Lot B not required** — **Lot C closed** — **Lot D closed (149/149)** — **D1 closed** — **D2 closed** — **D3 closed** — **Lot E closed (75/75)** — **Lot F closed** (PR #186) — **Lot H cadrage completed — execution not opened** — **Lots G/I excluded** — **Lot J not opened** — **Next gate: Morris validation Lot H cadrage / GO sous-lot H***.*
```

---

## 5. Rapport de cadrage complet

# SFIA v2.6 — Lot H Cadrage

**Horodatage :** 2026-07-13 06:27 Europe/Paris (CEST)
**Cycle :** 1 — Cadrage
**Profil SFIA :** **Standard**
**Branche :** `cadrage/sfia-v2.6-lot-h`
**Base / HEAD :** `main` @ `2883e37aac29b1a59646be37a33fec0a3e349f6a`
**CSV frozen SHA-256 :** `2a72757c6af186f2cb8aba5d488613be974cb12eed2d33b2d391edba5989f066`
**Statut cycle :** **LOT H CADRAGE COMPLETED — READY FOR MORRIS DECISION**

---

## 1. Décisions Morris déjà acquises

| Décision | Statut |
|----------|--------|
| Trajectoire F → H → J | **Validée** |
| Lot F / F2 closed (PR #186) | **Merged** |
| Lots G / I exclus | **Confirmé** |
| Ouverture cadrage Lot H | **GO donné** (présent cycle) |
| Exécution sous-lot H | **Non autorisée** — GO séparé requis |
| Modification corpus Lot H | **Non autorisée** |
| Reclassification CSV | **Non autorisée** |
| Ouverture Lot J | **Non autorisée** |

---

## 2. Objectif

Produire un cadrage repo-first du Lot H — prompts, templates et artefacts structurels — exploitable pour une future décision Morris, **sans migration ni modification du corpus**.

---

## 3. Contexte

- **PR #186** merged — Lot F closed, F-005 conservé hors Lots G/I/J.
- **Lot H** : première étape exécutable de la trajectoire post-F (Lots G/I exclus).
- **CSV** = seule source statistique ; **Git** = source de vérité contenu.
- Plan initial (§11) annonçait des volumes partiels ; le présent cadrage les réconcilie avec le manifeste CSV exact.

---

## 4. Périmètre / hors périmètre

**Périmètre :** 40 fichiers `migration_lot_candidate = lot-H` — lecture, qualification, sous-lots, stratégie future.

**Hors périmètre respecté :** migration, déplacement, renommage, suppression, modification prompts/templates, CSV, Lot J, tooling/CI, Interv360.

---

## 5. Sources consultées

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
3. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
5. `2026-07-11-sfia-v2.6-repository-cartography.csv`
6. `2026-07-11-sfia-v2.6-repository-cartography.md`
7. `2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`
8. `2026-07-13-sfia-v2.6-lot-f2-f005-critical-review.md`
9. Corpus intégral des 40 fichiers Lot H (lecture read-only)
10. Consommateurs : routing guide, operating model, delivery pipeline, BPMN closure, Penpot docs, CMP config

---

## 6. Méthode d’extraction du manifeste

1. Filtrage CSV : `migration_lot_candidate = lot-H` → **40 lignes**.
2. Confirmation Git : `git ls-files` → **40/40 présents**, 0 absence, 0 doublon.
3. Lecture textuelle de chaque fichier Markdown ; `.gitkeep` qualifiés par métadonnées CSV + structure dossier.
4. Recherche références entrantes : chemin complet, basename, liens Markdown, mentions textuelles.
5. Croisement usage/authority/disposition CSV vs consommateurs Git actifs.

---

## 7. Réconciliation volume CSV / Git / plan

| Métrique | Plan §11 (initial) | CSV + Git (cadrage) | Écart expliqué |
|----------|-------------------:|--------------------:|----------------|
| **Total Lot H** | 40 | **40** | ✓ aligné |
| **Operational** | 13 | **13** | ✓ aligné |
| **`.gitkeep` investigate** | 9 | **9** | ✓ aligné |
| **Templates** | 6 | **16** (H1) | Plan comptait uniquement `prompts/templates/` numérotés ; cadrage inclut **12** `prompts/templates/` + **4** `method/sfia-fast-track/templates/` |
| **Prompt families** | 4 | **7** | Plan sous-comptait ; CSV compte 7 fichiers `*-prompt-family.md` |
| **docs/templates/** | — | **6** | Regroupés sous-lot H4 (non comptés séparément dans plan) |

**Observation :** les 40 fichiers ne sont pas tous des prompts/templates au sens strict — le lot couvre aussi des templates `docs/` et `method/`, des index de navigation et des placeholders structurels.

---

## 8. Manifeste exact Lot H (40/40)

| ID | Chemin exact | Famille | Lifecycle | Authority | Usage | Disposition | Risque | Gate | Incoming refs | Action candidate |
|----|--------------|---------|-----------|-----------|-------|-------------|--------|------|---------------|------------------|
| H-001 | `docs/templates/architecture/functional-architecture-scope-template.md` | F04 | draft | informational | non-operational | keep | low | no | — | NO ACTION — KEEP |
| H-002 | `docs/templates/architecture/functional-architecture-summary-template.md` | F04 | draft | informational | non-operational | keep | low | no | — | NO ACTION — KEEP |
| H-003 | `docs/templates/process/bpmn-process-analysis-template.md` | F04 | draft | informational | non-operational | keep | low | no | — | VALIDATE BEFORE CHANGE |
| H-004 | `docs/templates/process/bpmn-process-scope-template.md` | F04 | draft | informational | non-operational | keep | low | no | — | VALIDATE BEFORE CHANGE |
| H-005 | `docs/templates/ux-ui/ux-ui-reprise-scope-template.md` | F04 | draft | informational | non-operational | keep | low | no | — | NO ACTION — KEEP |
| H-006 | `docs/templates/ux-ui/ux-ui-reprise-summary-template.md` | F04 | draft | informational | non-operational | keep | low | no | — | NO ACTION — KEEP |
| H-007 | `method/sfia-fast-track/templates/cycle-template.md` | F04 | draft | informational | non-operational | keep | low | no | — | VALIDATE BEFORE CHANGE |
| H-008 | `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md` | F04 | draft | informational | non-operational | keep | low | no | — | VALIDATE BEFORE CHANGE |
| H-009 | `method/sfia-fast-track/templates/post-merge-template.md` | F04 | draft | informational | non-operational | keep | low | no | — | VALIDATE BEFORE CHANGE |
| H-010 | `method/sfia-fast-track/templates/pr-body-template.md` | F04 | draft | informational | non-operational | keep | low | no | — | VALIDATE BEFORE CHANGE |
| H-011 | `prompts/README.md` | F13 | candidate | reference | non-operational | keep | low | no | method README ; BPMN closure | NO ACTION — KEEP |
| H-012 | `prompts/arbitrages/.gitkeep` | F05 | not-applicable | informational | non-operational | investigate | low | no | — | INVESTIGATE |
| H-013 | `prompts/architecture/.gitkeep` | F05 | not-applicable | informational | non-operational | investigate | low | no | — | INVESTIGATE |
| H-014 | `prompts/architecture/functional-architecture-prompt-family.md` | F05 | draft | informational | non-operational | keep | low | no | Notion categorization | NO ACTION — KEEP |
| H-015 | `prompts/bpmn/bpmn-prompt-family.md` | F05 | draft | informational | non-operational | keep | low | no | BPMN closure ; completeness matrix | NO ACTION — KEEP |
| H-016 | `prompts/cadrage/.gitkeep` | F05 | not-applicable | informational | non-operational | investigate | low | no | — | INVESTIGATE |
| H-017 | `prompts/governance/.gitkeep` | F05 | not-applicable | informational | non-operational | investigate | low | no | — | INVESTIGATE |
| H-018 | `prompts/governance/notion/.gitkeep` | F05 | not-applicable | informational | non-operational | investigate | low | no | — | INVESTIGATE |
| H-019 | `prompts/prompt-catalog.md` | F05 | candidate | reference | operational | keep | low | no | routing guide ; architecture README ; CMP | **PROTECTED — EXCLUDE FROM EXECUTION** |
| H-020 | `prompts/qa/.gitkeep` | F05 | not-applicable | informational | non-operational | investigate | low | no | — | INVESTIGATE |
| H-021 | `prompts/qa/delivery-qa-test-prompt-family.md` | F05 | draft | informational | operational | keep | low | no | routing guide ; v2 delivery QA standard | VALIDATE BEFORE CHANGE |
| H-022 | `prompts/qa/qa-tester-prompt-family.md` | F05 | candidate | supporting | operational | keep | low | no | delivery-qa family | VALIDATE BEFORE CHANGE |
| H-023 | `prompts/roles/.gitkeep` | F05 | not-applicable | informational | non-operational | investigate | low | no | — | INVESTIGATE |
| H-024 | `prompts/security/.gitkeep` | F05 | not-applicable | informational | non-operational | investigate | low | no | — | INVESTIGATE |
| H-025 | `prompts/templates/01-create-foundation-document.md` | F04 | candidate | supporting | operational | keep | low | no | templates README ; routing guide | **PROTECTED — EXCLUDE FROM EXECUTION** |
| H-026 | `prompts/templates/02-update-document-v1-1.md` | F04 | candidate | supporting | operational | keep | low | no | templates README ; routing guide | **PROTECTED — EXCLUDE FROM EXECUTION** |
| H-027 | `prompts/templates/03-create-operational-checklist.md` | F04 | candidate | supporting | operational | keep | low | no | templates README ; routing guide | **PROTECTED — EXCLUDE FROM EXECUTION** |
| H-028 | `prompts/templates/04-validate-cursor-result.md` | F04 | candidate | supporting | operational | keep | low | no | templates README ; routing guide | **PROTECTED — EXCLUDE FROM EXECUTION** |
| H-029 | `prompts/templates/06-prepare-pr-summary.md` | F04 | candidate | supporting | operational | keep | low | no | templates README ; routing guide ; delivery pipeline | **PROTECTED — EXCLUDE FROM EXECUTION** |
| H-030 | `prompts/templates/07-write-post-merge-status.md` | F04 | candidate | supporting | operational | keep | low | no | templates README ; routing guide ; delivery pipeline | **PROTECTED — EXCLUDE FROM EXECUTION** |
| H-031 | `prompts/templates/08-capitalize-method-asset.md` | F04 | candidate | supporting | operational | keep | low | no | templates README ; routing guide | **PROTECTED — EXCLUDE FROM EXECUTION** |
| H-032 | `prompts/templates/09-prepare-notion-mapping.md` | F04 | candidate | supporting | operational | keep | low | no | templates README ; routing guide | **PROTECTED — EXCLUDE FROM EXECUTION** |
| H-033 | `prompts/templates/10-perform-safe-repository-cleanup.md` | F04 | candidate | supporting | operational | keep | low | no | templates README ; routing guide | **PROTECTED — EXCLUDE FROM EXECUTION** |
| H-034 | `prompts/templates/README.md` | F13 | validated | reference | non-operational | keep | low | no | prompts README ; routing guide ; CMP | **PROTECTED — EXCLUDE FROM EXECUTION** |
| H-035 | `prompts/templates/sfia-cycle-execution-template.md` | F04 | candidate | supporting | non-operational | keep | low | no | routing guide ; operating model | **PROTECTED — EXCLUDE FROM EXECUTION** |
| H-036 | `prompts/templates/sfia-prompt-templates-context-pack.md` | F04 | candidate | informational | non-operational | keep | low | no | v2 automation vision | NO ACTION — KEEP |
| H-037 | `prompts/tooling/penpot/penpot-design-agent-prompt-family.md` | F05 | draft | informational | operational | keep | low | no | penpot-cursor-agent-rules | VALIDATE BEFORE CHANGE |
| H-038 | `prompts/ux-ui/.gitkeep` | F05 | not-applicable | informational | non-operational | investigate | low | no | — | INVESTIGATE |
| H-039 | `prompts/ux-ui/figma-fidelity-gate-prompt-family.md` | F05 | draft | informational | non-operational | keep | low | no | v2 figma fidelity standard | NO ACTION — KEEP |
| H-040 | `prompts/ux-ui/ux-ui-reprise-prompt-family.md` | F05 | draft | informational | non-operational | keep | low | no | completeness matrix (faible) | NO ACTION — KEEP |

**Synthèse actions candidates :** PROTECTED 12 · NO ACTION 10 · VALIDATE BEFORE CHANGE 9 · INVESTIGATE 9

---

## 9. Classification par famille

| Famille CSV | Volume | Rôle dominant | Sous-lot |
|-------------|-------:|---------------|----------|
| F04 | 21 | Templates opérationnels / squelettes | H1, H4 |
| F05 | 17 | Familles de prompts + placeholders | H2, H3 |
| F13 | 2 | Index / navigation (`README`) | H1, H4 |

---

## 10. Analyse templates

### H1 — Templates canoniques (16 fichiers)

**`prompts/templates/` (12)** — colonne vertébrale opérationnelle SFIA :
- **11 templates numérotés** (01–04, 06–10) : `usage=operational`, référencés par `sfia-cycle-routing-guide.md`.
- **`sfia-cycle-execution-template.md`** : template de cycle utilisé par le présent workflow ; **protection maximale**.
- **`README.md`** : index validé ; liste un template `05-validate-pr-readiness.md` **absent du manifeste Lot H** (fichier existe hors tag lot-H — réserve).
- **`sfia-prompt-templates-context-pack.md`** : pack contextuel ; faible couplage externe.

**`method/sfia-fast-track/templates/` (4)** — templates méthode :
- Référencés par `method/sfia-fast-track/README.md`, `sfia-consolidation-roadmap.md`, `sfia-delivery-pipeline.md`.
- **Recommandation :** conserver en place ; toute migration exige mise à jour simultanée des docs architecture/method.

### H4 — Templates docs (6 fichiers)

- **BPMN (2)** : consommés par `docs/practices/process/2026-06-28-bpmn-method-cycle-closure.md` — couplage actif.
- **Architecture / UX-UI (4)** : consommés surtout par les familles de prompts correspondantes ; **aucun consommateur actif hors `prompts/`**.

---

## 11. Analyse familles de prompts (H2 — 7 fichiers)

| Fichier | Usage | Couplage externe | Recommandation |
|---------|-------|------------------|----------------|
| `bpmn-prompt-family.md` | non-op | BPMN closure docs | KEEP — lier toute migration BPMN |
| `delivery-qa-test-prompt-family.md` | **operational** | routing guide + v2 standard | VALIDATE BEFORE CHANGE |
| `qa-tester-prompt-family.md` | **operational** | completeness matrix | VALIDATE BEFORE CHANGE |
| `penpot-design-agent-prompt-family.md` | **operational** | penpot-cursor-agent-rules (lien actif) | VALIDATE BEFORE CHANGE |
| `figma-fidelity-gate-prompt-family.md` | non-op | v2 figma standard | KEEP |
| `functional-architecture-prompt-family.md` | non-op | Notion plan | KEEP |
| `ux-ui-reprise-prompt-family.md` | non-op | faible | KEEP |

---

## 12. Analyse `.gitkeep` (H3 — 9 fichiers)

| Chemin | Disposition CSV | Consommateur actif | Recommandation |
|--------|-----------------|-------------------|----------------|
| `prompts/arbitrages/.gitkeep` | investigate | aucun | INVESTIGATE — décision structure dossier |
| `prompts/architecture/.gitkeep` | investigate | aucun | INVESTIGATE |
| `prompts/cadrage/.gitkeep` | investigate | aucun | INVESTIGATE |
| `prompts/governance/.gitkeep` | investigate | aucun | INVESTIGATE |
| `prompts/governance/notion/.gitkeep` | investigate | aucun | INVESTIGATE |
| `prompts/qa/.gitkeep` | investigate | aucun | INVESTIGATE — dossier contient déjà des familles actives |
| `prompts/roles/.gitkeep` | investigate | aucun | INVESTIGATE |
| `prompts/security/.gitkeep` | investigate | aucun | INVESTIGATE |
| `prompts/ux-ui/.gitkeep` | investigate | aucun | INVESTIGATE — dossier contient déjà des familles |

**Hypothèse :** placeholders historiques pour arborescence `prompts/` ; suppression ou remplacement par README minimal = décision Morris séparée, **pas de migration Lot H obligatoire**.

---

## 13. Sous-lots proposés

| Sous-lot | Périmètre | Volume | Profil futur | Risque | Gate Morris | Ordre |
|----------|-----------|-------:|--------------|--------|-------------|------:|
| **H3** | `.gitkeep` structurels | 9 | Light | Faible | Investigation only | **1** |
| **H4** | `docs/templates/` + index `prompts/README.md` + `prompt-catalog.md` | 8 | Standard | Modéré | GO exécution H4 | **2** |
| **H2** | Familles de prompts (`*-prompt-family.md`) | 7 | Standard | Modéré | GO exécution H2 | **3** |
| **H1** | Templates canoniques (`prompts/templates/` + `method/.../templates/`) | 16 | Standard → **Critical** pour H1-protected | **Élevé** | GO exécution H1 + gate fichier protégé | **4** |

**Note :** l’ordre privilégie les zones sans consommateurs actifs (H3), puis docs templates isolés (H4), puis familles, enfin la colonne vertébrale opérationnelle (H1).

---

## 14. Fichiers protégés

| Fichier | Motif de protection | Action autorisée | Gate |
|---------|---------------------|------------------|------|
| `prompts/prompt-catalog.md` | Hub opérationnel ; routing guide ; CMP config | Références only | Morris par changement |
| `prompts/templates/README.md` | Index validé ; CMP config | Références only | Morris |
| `prompts/templates/sfia-cycle-execution-template.md` | Template cycle SFIA actif | Aucune migration sans cycle dédié | Morris Critical |
| `prompts/templates/01`–`10` (9 op.) | Spine routing guide + delivery pipeline | Aucun move/rename sans ref sync | Morris par fichier |
| **Total protégés** | **12 fichiers** | Exclus exécution Lot H par défaut | — |

---

## 15. Dépendances opérationnelles (extrait)

| Fichier Lot H | Consommateur | Type | Statut consommateur | Impact futur |
|---------------|--------------|------|---------------------|--------------|
| `prompts/templates/sfia-cycle-execution-template.md` | `sfia-cycle-routing-guide.md` | full path | validated | Critical — casse cycles |
| `prompts/prompt-catalog.md` | routing guide, operating model, CMP JSON | full path | operational | Critical |
| `prompts/templates/06-prepare-pr-summary.md` | routing guide, delivery pipeline | full path | operational | PR workflow |
| `method/.../pr-body-template.md` | `sfia-delivery-pipeline.md` | full path | validated | PR workflow |
| `prompts/tooling/penpot/penpot-design-agent-prompt-family.md` | `penpot-cursor-agent-rules.md` | markdown link | operational | Penpot agent |
| `docs/templates/process/bpmn-*` | BPMN method closure | basename/path | historical-active | BPMN chain |
| `prompts/*/.gitkeep` | — | — | — | Aucun impact opérationnel |

**Chaîne dominante :** `sfia-cycle-routing-guide.md` → templates 01–10 + catalog + delivery-qa family.

---

## 16. Impact Lot J

| Élément | Impact |
|---------|--------|
| Delete-candidates Lot J | **10** — **aucun** fichier Lot H |
| F-001 à F-004 | Réserves cleanup refs — indépendantes Lot H |
| F-005 | Conservé — hors Lot J |
| Template `10-perform-safe-repository-cleanup.md` | **Nom seulement** — ne déclenche pas Lot J ; exécution cleanup = cycle séparé avec gate Morris |
| Ordre trajectoire | Lot H **avant** Lot J — toute ref cassée en H doit être résolue avant delete Lot J |

---

## 17. Stratégie d’exécution future (non exécutée)

| Paramètre | Recommandation |
|-----------|----------------|
| Taille max PR | **≤ 5 fichiers** contenu Lot H + refs associées |
| Profil H3 | Light — rapport investigation |
| Profil H4/H2 | Standard |
| Profil H1 protected | **Critical** si touché |
| Review pack | **full** par sous-lot exécution |
| Review Handoff | **required** par sous-lot exécution |
| Ref sync | Même PR que tout move/rename Lot H |
| CSV | Reclassification = cycle séparé Morris GO |

### Stop conditions futur cycle exécution

1. Fichier protégé touché sans GO Morris explicite.
2. `sfia-cycle-routing-guide.md` non mis à jour après move template.
3. CMP config (`tools/cmp-001/`) non synchronisé après move catalog/README.
4. Référence opérationnelle cassée non résolue.
5. Reclassification CSV requise mais non autorisée.
6. Périmètre > sous-lot validé.
7. Lot J delete implicite ou fichier delete-candidate créé.

---

## 18. Décisions Morris requises

| # | Décision | Recommandation | Impact | Bloquante |
|---|----------|----------------|--------|-----------|
| 1 | Valider manifeste 40/40 et sous-lots H1–H4 | **Accepter** structure proposée | Base exécution | Oui |
| 2 | Valider ordre H3 → H4 → H2 → H1 | **Accepter** | Séquence risque | Oui |
| 3 | GO exécution sous-lot H3 (investigation `.gitkeep`) | Cycle Light séparé | Structure prompts/ | Non |
| 4 | GO exécution sous-lots H4/H2/H1 | **Un GO par sous-lot** | Migration | Oui chacun |
| 5 | Autoriser modification fichier protégé (12) | **Refus par défaut** ; exception Morris Critical | Spine opérationnelle | Oui |
| 6 | Traiter `05-validate-pr-readiness.md` (hors lot-H) | Cycle séparé — alignement README | Cohérence index | Non |
| 7 | Reclassification CSV post-move | GO séparé | Contrat cartographie | Si paths changent |
| 8 | Ouverture Lot J | **Reporter** après H | Trajectoire F→H→J | Oui |

---

## 19. Réserves

1. **`prompts/templates/README.md`** référence `05-validate-pr-readiness.md` — fichier existant **non tagué lot-H** ; incohérence index vs CSV.
2. **Incoming refs CSV stale** pour `.cursor/mcp-templates/README.md` → prompts README (preuve inactive au scan Git).
3. **Plan §11 volumes partiels** (templates 6, families 4) — corrigés par présent cadrage, pas par reclassification CSV.
4. **Aucun fichier Lot H** n’est delete-candidate — Lot H ≠ Lot J.
5. **Promotion v2.6** non acquise — baseline reste v2.4.

---

## 20. Validations cycle cadrage

| Contrôle | Résultat |
|----------|----------|
| Manifeste CSV = 40 | ✓ |
| Git = 40/40 | ✓ |
| Corpus Lot H modifié | **Non** |
| CSV modifié | **Non** |
| Operational = 13 | ✓ |
| `.gitkeep` investigate = 9 | ✓ |

---

## 21. Verdict

```
LOT H CADRAGE COMPLETED — READY FOR MORRIS DECISION
```

**Signification :**
- Manifeste **40/40** vérifié CSV + Git
- Sous-lots **H1–H4** proposés avec ordre et profils
- **12 fichiers protégés** identifiés
- **Aucune migration** exécutée
- **Lot J** non ouvert
- Prochaine gate : **GO Morris exécution sous-lot H3** (investigation) ou validation structure globale

**Non autorisé :** `LOT H EXECUTION OPENED` · `LOT H MIGRATION READY` · `LOT J OPENED`

---

*Rapport produit par cycle Cursor — profil Standard — cadrage read-only — SFIA v2.4 baseline — v2.6 candidate.*


---

## 6. Validations

| Contrôle | Résultat |
|----------|----------|
| Corpus Lot H modifié | Non |
| CSV modifié | Non |
| Fichiers versionnés | 1 créé + 1 plan modifié |
| Commit exécution | Non |

---

## 7. Review pack content coverage

| Item | Statut |
|------|--------|
| created files full content | yes |
| modified sections complete | yes |
| useful diff included | yes |
| synthesis only | no |
| **review pack verdict** | **complete** |

---

## 8. Verdict

`LOT H CADRAGE COMPLETED — READY FOR MORRIS DECISION`

---

## Instruction ChatGPT obligatoire

Lire obligatoirement depuis Git :
`sfia/review-handoff/sfia-review-handoff/latest-chatgpt-review.md`

Vérifier :
- cycle cadrage Lot H
- manifeste 40 fichiers
- sous-lots H1–H4
- 12 fichiers protégés
- 13 operational
- stratégie future
- contenu complet du rapport
- diff plan Lot H
- Lot J non ouvert
- conformité handoff

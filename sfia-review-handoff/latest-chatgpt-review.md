# SFIA v2.6 — Lot H Execution Strategy Alignment — Review Pack (full)

**Horodatage :** 2026-07-13 06:37 Europe/Paris (CEST)
**Verdict :** `LOT H EXECUTION STRATEGY ALIGNED — READY FOR COMMIT`

---

## 1. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| branche | `cadrage/sfia-v2.6-lot-h` |
| HEAD | `2883e37aac29b1a59646be37a33fec0a3e349f6a` |

```
M method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
?? .sfia/
?? .tmp-sfia-review/
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-13-sfia-v2.6-lot-h-cadrage.md
```

---

## 2. Git Review Index

```
...-11-sfia-v2.6-repository-migration-lots-plan.md | 26 ++++++++++++++++++----
 1 file changed, 22 insertions(+), 4 deletions(-)
```

```
M	method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
```

---

## 3. Décision Morris — simplification stratégique

**Décision (2026-07-13) :** abandon des quatre sous-lots Git H1/H2/H3/H4.

**Stratégie officielle :**
- **Lot H = 1 cycle d'exécution unique**
- **H3 → H4 → H2 → H1** = quatre **phases internes** (ordre obligatoire)
- Un seul GO Morris pour l'ouverture du cycle
- Trajectoire : F → **H (cycle unique)** → J

**Justification :** réduire la fragmentation Git, conserver la séquence de risque du cadrage, aligner plan et rapport sur une trajectoire d'exécution cohérente.

**Inchangé :** manifeste 40/40, métriques, fichiers protégés (12), conclusions techniques, corpus Lot H.

---

## 4. Diff plan des lots (sections modifiées)

```diff
diff --git a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
index 3943b01..626dec9 100644
--- a/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
+++ b/method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-migration-lots-plan.md
@@ -273,11 +273,29 @@ Lot B reste **documenté** comme lot conditionnel — ne pas inventer de fichier
 
 ## 11. Lot H / I
 
-| Lot | Volume tag | Sous-lots exécution | Note |
-|-----|----------:|---------------------|------|
-| H (prompts/templates) | 40 | templates (6) ; prompts families (4) ; .gitkeep investigate (9) | 13 operational |
+| Lot | Volume tag | Exécution | Note |
+|-----|----------:|-----------|------|
+| H (prompts/templates) | 40 | **1 cycle unique** — phases internes H3 (9) → H4 (8) → H2 (7) → H1 (16) | 13 operational ; **cadrage completed 2026-07-13** ; **strategy aligned 2026-07-13** |
 | I (tooling/CI) | 68 | `.github/workflows` ; `tools/cmp-001` ; `docker/penpot` ; automation (4) | 45 operational ; 21 investigate (cmp schemas) |
 
+### Lot H — statut cadrage et stratégie (2026-07-13)
+
+| Champ | Contenu |
+|-------|---------|
+| **Qualification** | **cadrage completed — execution not opened** |
+| **Stratégie exécution** | **1 cycle unique Lot H** — phases internes H3 → H4 → H2 → H1 (Morris 2026-07-13) |
+| **Rapport cadrage** | `2026-07-13-sfia-v2.6-lot-h-cadrage.md` |
+| **Branche cadrage** | `cadrage/sfia-v2.6-lot-h` @ `2883e37` |
+| **Manifeste CSV** | **40/40** confirmé Git |
+| **Phases internes** | H3 (9) → H4 (8) → H2 (7) → H1 (16) — **pas de sous-lots Git séparés** |
+| **Fichiers protégés** | **12** — spine routing guide / catalog / templates opérationnels |
+| **Operational** | **13** |
+| **`.gitkeep` investigate** | **9** |
+| **Templates canoniques** | **16** (12 `prompts/templates/` + 4 `method/.../templates/`) |
+| **Familles prompts** | **7** |
+| **Statut exécution Lot H** | **not opened** — GO Morris cycle unique requis |
+| **Next gate** | **GO ouverture exécution cycle unique Lot H** |
+
 **Règle Lot I :** ne pas appliquer logique documentaire aux artefacts `not-applicable`. **338** fichiers `lifecycle not-applicable` au total — dont **52** tagués lot-I.
 
 ---
@@ -416,4 +434,4 @@ Les clarifications des lots (Lot 0, Lot F, Lot G, Lot D, sous-lots) sont intégr
 
 ---
 
-*Plan candidate — **Lot 0 closed (76/76)** — **Lot A closed** — **Lot B not required** — **Lot C closed** — **Lot D closed (149/149)** — **D1 closed** — **D2 closed** — **D3 closed** — **Lot E closed (75/75)** — **Lot F qualification merged via PR #184** (`997f1ff`) — **Lot F1a/F1b merged via PR #185** (`4a7f857`) — **Lot F2 closed — Morris Option B** — **Lot F closed** — **Lots G/I excluded** — **Lots H/J not opened** — **Next gate: Lot H opening (Morris GO separate)**.*
+*Plan candidate — **Lot 0 closed (76/76)** — **Lot A closed** — **Lot B not required** — **Lot C closed** — **Lot D closed (149/149)** — **D1 closed** — **D2 closed** — **D3 closed** — **Lot E closed (75/75)** — **Lot F closed** (PR #186) — **Lot H cadrage completed — strategy aligned — execution not opened** — **Lots G/I excluded** — **Lot J not opened** — **Next gate: GO Morris cycle unique Lot H***.*
```

---

## 5. Rapport de cadrage complet (aligné)

# SFIA v2.6 — Lot H Cadrage

**Horodatage :** 2026-07-13 06:27 Europe/Paris (CEST)
**Cycle :** 1 — Cadrage
**Profil SFIA :** **Standard**
**Branche :** `cadrage/sfia-v2.6-lot-h`
**Base / HEAD :** `main` @ `2883e37aac29b1a59646be37a33fec0a3e349f6a`
**CSV frozen SHA-256 :** `2a72757c6af186f2cb8aba5d488613be974cb12eed2d33b2d391edba5989f066`
**Statut cycle :** **LOT H EXECUTION STRATEGY ALIGNED — READY FOR COMMIT**
**Addendum :** 2026-07-13 06:37 Europe/Paris — alignement stratégie exécution (Morris)

---

## 1. Décisions Morris déjà acquises

| Décision | Statut |
|----------|--------|
| Trajectoire F → H → J | **Validée** |
| Lot F / F2 closed (PR #186) | **Merged** |
| Lots G / I exclus | **Confirmé** |
| Ouverture cadrage Lot H | **GO donné** (cycle cadrage) |
| Cadrage Lot H validé | **Validé** — manifeste 40/40 |
| **Lot H = 1 cycle d'exécution unique** | **Validé** (Morris 2026-07-13) |
| **H1/H2/H3/H4 = phases internes** (pas sous-lots Git) | **Validé** (Morris 2026-07-13) |
| Exécution Lot H (cycle unique) | **Non autorisée** — GO séparé requis |
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

**Périmètre :** 40 fichiers `migration_lot_candidate = lot-H` — lecture, qualification, phases internes, stratégie future.

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
| **docs/templates/** | — | **6** | Regroupés phase H4 (non comptés séparément dans plan) |

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

| Famille CSV | Volume | Rôle dominant | Phase interne |
|-------------|-------:|---------------|---------------|
| F04 | 21 | Templates opérationnels / squelettes | H1, H4 |
| F05 | 17 | Familles de prompts + placeholders | H2, H3 |
| F13 | 2 | Index / navigation (`README`) | H1, H4 |

---

## 10. Analyse templates

### Phase H1 — Templates canoniques (16 fichiers)

**`prompts/templates/` (12)** — colonne vertébrale opérationnelle SFIA :
- **11 templates numérotés** (01–04, 06–10) : `usage=operational`, référencés par `sfia-cycle-routing-guide.md`.
- **`sfia-cycle-execution-template.md`** : template de cycle utilisé par le présent workflow ; **protection maximale**.
- **`README.md`** : index validé ; liste un template `05-validate-pr-readiness.md` **absent du manifeste Lot H** (fichier existe hors tag lot-H — réserve).
- **`sfia-prompt-templates-context-pack.md`** : pack contextuel ; faible couplage externe.

**`method/sfia-fast-track/templates/` (4)** — templates méthode :
- Référencés par `method/sfia-fast-track/README.md`, `sfia-consolidation-roadmap.md`, `sfia-delivery-pipeline.md`.
- **Recommandation :** conserver en place ; toute migration exige mise à jour simultanée des docs architecture/method.

### Phase H4 — Templates docs (6 fichiers)

- **BPMN (2)** : consommés par `docs/practices/process/2026-06-28-bpmn-method-cycle-closure.md` — couplage actif.
- **Architecture / UX-UI (4)** : consommés surtout par les familles de prompts correspondantes ; **aucun consommateur actif hors `prompts/`**.

---

## 11. Analyse familles de prompts (phase H2 — 7 fichiers)

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

## 12. Analyse `.gitkeep` (phase H3 — 9 fichiers)

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

## 13. Phases internes du cycle unique Lot H

> **Décision Morris (2026-07-13) :** le Lot H constitue **un seul cycle d'exécution**. H1, H2, H3 et H4 ne sont **pas** des sous-lots Git indépendants — ce sont **quatre phases internes** séquencées au sein du même cycle.

| Phase | Périmètre | Volume | Profil (interne) | Risque | Ordre |
|-------|-----------|-------:|------------------|--------|------:|
| **H3** | `.gitkeep` structurels | 9 | Light | Faible | **1** |
| **H4** | `docs/templates/` + index `prompts/README.md` + `prompt-catalog.md` | 8 | Standard | Modéré | **2** |
| **H2** | Familles de prompts (`*-prompt-family.md`) | 7 | Standard | Modéré | **3** |
| **H1** | Templates canoniques (`prompts/templates/` + `method/.../templates/`) | 16 | Standard → **Critical** (fichiers protégés) | **Élevé** | **4** |

**Ordre officiel :** H3 → H4 → H2 → H1

**Note :** l’ordre privilégie les zones sans consommateurs actifs (H3), puis docs templates isolés (H4), puis familles, enfin la colonne vertébrale opérationnelle (H1). Toutes les phases s’exécutent **dans le cadre d’un unique cycle Lot H** — une branche, une trajectoire, un GO Morris d’ouverture d’exécution.

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

> **Lot H = 1 cycle d'exécution unique** — les phases H3 → H4 → H2 → H1 structurent la séquence interne ; elles ne constituent pas des cycles Git séparés.

| Paramètre | Recommandation |
|-----------|----------------|
| **Cycle** | **Unique** — une branche Lot H, un GO Morris d’ouverture |
| **Phases internes** | H3 → H4 → H2 → H1 (ordre obligatoire) |
| Taille max PR | **≤ 5 fichiers** contenu Lot H + refs associées (par PR au sein du cycle) |
| Profil phase H3 | Light — rapport investigation |
| Profil phases H4/H2 | Standard |
| Profil phase H1 (protégés) | **Critical** si touché |
| Review pack | **full** — cycle Lot H (par PR significative) |
| Review Handoff | **required** — cycle Lot H |
| Ref sync | Même PR que tout move/rename Lot H |
| CSV | Reclassification = cycle séparé Morris GO |

### Stop conditions futur cycle exécution

1. Fichier protégé touché sans GO Morris explicite.
2. `sfia-cycle-routing-guide.md` non mis à jour après move template.
3. CMP config (`tools/cmp-001/`) non synchronisé après move catalog/README.
4. Référence opérationnelle cassée non résolue.
5. Reclassification CSV requise mais non autorisée.
6. Périmètre > phase validée **sans** clôture de phase précédente dans le cycle unique.
7. Lot J delete implicite ou fichier delete-candidate créé.
8. Ouverture d’un second cycle Git Lot H parallèle (interdit — cycle unique).

---

## 18. Décisions Morris requises

| # | Décision | Recommandation | Impact | Bloquante |
|---|----------|----------------|--------|-----------|
| 1 | Valider manifeste 40/40 | **Acquis** (cadrage) | Base exécution | — |
| 2 | Valider **cycle unique Lot H** + phases H3 → H4 → H2 → H1 | **Acquis** (Morris 2026-07-13) | Stratégie exécution | — |
| 3 | **GO ouverture exécution Lot H** (cycle unique) | **En attente** | Migration | Oui |
| 4 | Autoriser modification fichier protégé (12) | **Refus par défaut** ; exception Morris Critical | Spine opérationnelle | Oui |
| 5 | Traiter `05-validate-pr-readiness.md` (hors lot-H) | Cycle séparé — alignement README | Cohérence index | Non |
| 6 | Reclassification CSV post-move | GO séparé | Contrat cartographie | Si paths changent |
| 7 | Ouverture Lot J | **Reporter** après clôture cycle H | Trajectoire F→H→J | Oui |

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
LOT H EXECUTION STRATEGY ALIGNED — READY FOR COMMIT
```

**Signification :**
- Manifeste **40/40** vérifié CSV + Git (inchangé)
- **Cycle unique Lot H** — phases internes **H3 → H4 → H2 → H1** (Morris 2026-07-13)
- **12 fichiers protégés** identifiés (inchangé)
- **Aucune migration** exécutée
- **Lot J** non ouvert
- Prochaine gate : **GO Morris ouverture exécution cycle unique Lot H**

**Non autorisé :** `LOT H EXECUTION OPENED` · `LOT H MIGRATION READY` · `LOT J OPENED` · cycles Git H1/H2/H3/H4 séparés

---

*Rapport produit par cycle Cursor — profil Standard — cadrage read-only — SFIA v2.4 baseline — v2.6 candidate.*


---

## 6. Validations

| Contrôle | Résultat |
|----------|----------|
| Fichiers modifiés | 2 uniquement |
| CSV / corpus Lot H | Non modifiés |
| Commit exécution | Non |

---

## 7. Review pack content coverage

| Item | Statut |
|------|--------|
| created files full content | yes (rapport aligné) |
| modified sections complete | yes |
| useful diff included | yes |
| synthesis only | no |
| **review pack verdict** | **complete** |

---

## 8. Verdict

`LOT H EXECUTION STRATEGY ALIGNED — READY FOR COMMIT`

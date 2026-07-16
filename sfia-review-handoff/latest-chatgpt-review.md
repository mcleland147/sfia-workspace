# SFIA Review Pack — FULL mono-cycle PD / Capitalization
## SFIA v2.6 Baseline Officialization (Proposed Baseline)

| Métadonnée | Valeur |
|------------|--------|
| **Date / heure** | 2026-07-16 13:40 Europe/Paris (CEST) |
| **Cycle** | 15 — Capitalisation / REX |
| **Profil SFIA** | Capitalization |
| **Profondeur** | Critical |
| **Typologie** | CAPA / DOC |
| **Branche** | `capitalization/sfia-v2.6-baseline-officialization` |
| **HEAD / base Git** | `805952a9fffdba8787f07e5d60cf90ef74dacd37` |
| **Base** | `origin/main` @ `805952a9fffdba8787f07e5d60cf90ef74dacd37` (aucun commit local) |
| **Statut** | **PROPOSED BASELINE** — v2.6 **NOT** yet official before merge |
| **Verdict** | `SFIA v2.6 BASELINE PREPARED — READY FOR MORRIS REVIEW` |
| **Review pack** | FULL (mono-cycle) — content-complete, not synthesis-only |
| **Handoff** | required → `sfia/review-handoff` |

---

## 0. Git truth (captured)

```text
Branch: capitalization/sfia-v2.6-baseline-officialization
HEAD:   805952a9fffdba8787f07e5d60cf90ef74dacd37
Message: Merge pull request #203 from mcleland147/documentation/sfia-discovery-pd-09-capitalization
Working tree: local modifications only — NO commit on work branch
Remote tracking: none for this branch (NO_REMOTE_TRACKING / not pushed)
```

---

## 1. Objet du cycle

Officialiser **SFIA v2.6** comme **proposed baseline** opérationnelle par consolidation :

```text
SFIA v2.6 (proposed baseline)
  = héritage opérationnel SFIA v2.4
  + acquis retenus SFIA v2.5 (candidate absorbée)
  + apports repository SFIA v2.6 (rationalisation / standard)
```

**Principe :** consolidation, pas refonte. Aucun nouveau cycle, profil, bloc, niveau d'automatisation ou architecture. Pas de changement de doctrine méthode au-delà de l'alignement de version / statut.

**Exclusions explicites :**
- Discovery / Notion **non promu** dans `method/core`
- SFIA v3.0 hors trajectoire
- MCP / Bridge / Runner hors trajectoire
- Pas de modification applicative / tooling / CI

---

## 2. Matrice de synthèse (scope)

| Zone | Action | Justification |
|------|--------|---------------|
| Manifest release v2.6 | **CREATE** | Décision de release · formule · trajectoire · exclusions · GO d'ouverture · critères d'entrée en vigueur |
| `core/README.md` | **MODIFY** | Table trajectoire versions : v2.6 proposed baseline ; v2.4 historique ; v2.5 absorbée |
| `sfia-knowledge-layer.md` | **MODIFY (conditional)** | Table cartography status — alignement baseline active conditionnel |
| `sfia-global-capitalization-reference.md` | **MODIFY (conditional)** | Idem — tables baseline active |
| `sfia-rules-and-guardrails.md` | **MODIFY** | §13.1 Review Handoff — absorbée v2.6 (origine v2.5) |
| `sfia-cycle-routing-guide.md` | **MODIFY** | v1.4 · §4.3 héritage v2.4 · §4.4 acquis v2.5 absorbés · footer |
| `sfia-chatgpt-cursor-operating-model.md` | **MODIFY** | §18.2 libellé acquis absorbés dans v2.6 |
| `sfia-cycle-execution-template.md` | **MODIFY** | Frontmatter + statut v2.6 proposed baseline · garde-fous anti-promotion pré-merge |
| Rapports capitalization historiques | **NOT modified** | Historisation R2 — faits datés conservés |
| Discovery / Notion | **NOT promoted** | PD-09 — hors spine |
| Archive lot banners | **NOT modified** | Hors périmètre d'alignement actif |

### 2.1 Fichiers créés (1)

| Fichier | Rôle |
|---------|------|
| `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md` | Manifest officiel de release (proposed baseline) |

### 2.2 Fichiers modifiés (7)

| Fichier | Justification |
|---------|---------------|
| `method/sfia-fast-track/core/README.md` | Index core — trajectoire versions active |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | **Conditional** — table baseline active (v2.4/v2.6 candidate → v2.6 proposed) |
| `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` | **Conditional** — idem tables baseline active |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Alignement règle handoff absorbée v2.6 |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Routage aligné proposed baseline v2.6 |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Complément §18.2 statut version |
| `prompts/templates/sfia-cycle-execution-template.md` | Template d'instanciation → v2.6 proposed baseline |

### 2.3 Historiques intentionnellement NON modifiés

- Rapports de capitalisation / REX datés (libellés « Baseline opérationnelle : SFIA v2.4 » etc.)
- Documents discovery / Notion (non spine ; non promotion)
- Bannières / marqueurs d'archive lots (0/A/C/D/E/F/H/J) — hors alignement opérationnel actif
- Standard technique v2.4 consolidation (référence héritée ; libellé historique acceptable — R4)

---

## 3. GO Morris vs gates encore requis

### 3.1 GO d'ouverture — ACQUIS (16 juillet 2026)

Autorise : branche locale · manifest · alignement documents actifs · review pack FULL · handoff `sfia/review-handoff`.

Retranscription (décision validée) :
1. v2.6 = cible baseline opérationnelle officielle
2. Absorbe v2.4 (baseline précédente)
3. Absorbe acquis retenus v2.5 (candidate absorbée, jamais baseline)
4. Intègre rationalisation repository capitalisée sous v2.6
5. Pas de restructuration méthode sans nécessité
6. Trajectoire versions explicite (v1.1 / v2.4 / v2.5 / v2.6 / v3.0)
7. Discovery / Notion non obligatoires
8. Git = source de vérité

### 3.2 Gates encore REQUIS (non autorisés par le GO d'ouverture)

| Gate | Statut |
|------|--------|
| Commit branche de travail | **REQUIS** — GO Morris distinct |
| Push branche de travail | **REQUIS** — GO Morris distinct |
| Création PR | **REQUIS** — GO Morris distinct |
| Merge | **REQUIS** — GO Morris distinct |
| Post-merge / entrée en vigueur | **REQUIS** — seulement après merge |

**Explicite :** SFIA v2.6 reste **PROPOSED BASELINE** — **NOT yet official** before merge.

---

## 4. Validations Git (captured)

### 4.1 `git status --short`

```text
 M method/sfia-fast-track/core/README.md
 M method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
 M method/sfia-fast-track/core/sfia-cycle-routing-guide.md
 M method/sfia-fast-track/core/sfia-global-capitalization-reference.md
 M method/sfia-fast-track/core/sfia-knowledge-layer.md
 M method/sfia-fast-track/core/sfia-rules-and-guardrails.md
 M prompts/templates/sfia-cycle-execution-template.md
?? method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md
```

(Note : `.sfia/`, `.tmp-sfia-review/`, `sfia-review-handoff/` présents en untracked locaux — hors livrable méthode.)

### 4.2 `git diff --stat`

```text
 method/sfia-fast-track/core/README.md              |  9 +++++--
 .../core/sfia-chatgpt-cursor-operating-model.md    | 10 +++----
 .../core/sfia-cycle-routing-guide.md               | 31 +++++++++++-----------
 .../core/sfia-global-capitalization-reference.md   |  5 ++--
 .../sfia-fast-track/core/sfia-knowledge-layer.md   |  5 ++--
 .../core/sfia-rules-and-guardrails.md              |  4 +--
 prompts/templates/sfia-cycle-execution-template.md | 30 +++++++++++----------
 7 files changed, 51 insertions(+), 43 deletions(-)
```

(+ 1 fichier créé non encore tracké : manifest.)

### 4.3 `git diff --name-status`

```text
M	method/sfia-fast-track/core/README.md
M	method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
M	method/sfia-fast-track/core/sfia-cycle-routing-guide.md
M	method/sfia-fast-track/core/sfia-global-capitalization-reference.md
M	method/sfia-fast-track/core/sfia-knowledge-layer.md
M	method/sfia-fast-track/core/sfia-rules-and-guardrails.md
M	prompts/templates/sfia-cycle-execution-template.md
```

### 4.4 `git diff --check`

```text
method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md:542: trailing whitespace.
method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md:543: trailing whitespace.
prompts/templates/sfia-cycle-execution-template.md:13: trailing whitespace.
prompts/templates/sfia-cycle-execution-template.md:14: trailing whitespace.
```

(Trailing whitespace on rewritten status lines — non bloquant pour review ; à traiter si GO commit le demande.)

### 4.5 `git rev-parse HEAD` / branch

```text
805952a9fffdba8787f07e5d60cf90ef74dacd37
capitalization/sfia-v2.6-baseline-officialization
```

### 4.6 Work branch commit / push confirmation

```text
NO commit on work branch (HEAD = base 805952a9…)
NO remote tracking branch
Branch NOT pushed
```

---

## 5. Recherche résidus actifs (scope modified paths)

Commande :

```bash
rg -n "ne remplace pas v2\.4|Baseline opérationnelle actuelle|v2\.6.*Candidate —|Candidate — cartographie|version: v2\.5-candidate" \
  method/sfia-fast-track/core \
  prompts/templates/sfia-cycle-execution-template.md \
  method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md \
  || echo NO_ACTIVE_RESIDUALS_IN_SCOPE
```

Résultat :

```text
NO_ACTIVE_RESIDUALS_IN_SCOPE
```

---

## 6. Contenu FULL — Manifest créé (verbatim)

Fichier : `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md`

```markdown
# SFIA v2.6 — Baseline Release Manifest

| Métadonnée | Valeur |
|------------|--------|
| **Titre** | SFIA v2.6 — Manifest officiel de release (proposed baseline) |
| **Date / heure** | 2026-07-16 13:30 Europe/Paris (CEST) |
| **Cycle** | 15 — Capitalisation / REX |
| **Profil SFIA** | Capitalization |
| **Profondeur** | Critical |
| **Typologie** | CAPA / DOC |
| **Branche** | `capitalization/sfia-v2.6-baseline-officialization` |
| **Base Git** | `origin/main` @ `805952a9fffdba8787f07e5d60cf90ef74dacd37` |
| **Statut proposé** | **PROPOSED BASELINE** — non en vigueur avant merge Morris |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — préparation locale uniquement |

---

## 1. Objet

### 1.1 Définition de SFIA v2.6

**SFIA v2.6** est la **consolidation officielle proposée** de la méthode opérationnelle du repository `mcleland147/sfia-workspace`. Elle représente :

1. la méthode opérationnelle jusqu’ici portée par **SFIA v2.4** ;
2. les évolutions **SFIA v2.5** validées et déjà intégrées dans le fonctionnement courant (template, operating model, routing, review pack, handoff) ;
3. les résultats de la **rationalisation, normalisation et stabilisation repository** exécutés et capitalisés sous la trajectoire **v2.6**.

### 1.2 Raison de l’officialisation

La méthode **fonctionne**. Les labels de version actifs (v2.4 baseline · v2.5 candidate · v2.6 candidate) ne reflètent plus la réalité opérationnelle : les acquis v2.5 sont déjà dans le spine, et la rationalisation repository v2.6 est intégrée. L’officialisation **aligne le statut** sans réinventer la méthode.

### 1.3 Principe

**Consolidation, pas refonte.** Aucun nouveau cycle, profil, bloc, niveau d’automatisation ou architecture n’est introduit par ce manifest.

---

## 2. Formule de consolidation

```text
SFIA v2.6 (proposed baseline)
  = héritage opérationnel SFIA v2.4
  + acquis retenus SFIA v2.5 (candidate absorbée)
  + apports repository SFIA v2.6 (rationalisation / standard)
```

| Couche | Apport |
|--------|--------|
| **v2.4** | Consolidation & operating efficiency · typologie INC/EVOL/RUN/CAPA/DOC · profils · QA proportionnée · gates Morris · handoff documentaire |
| **v2.5** | 15 cycles projet · Repo-informed ChatGPT · review pack none/light/full · Review Handoff Git · anti-stub · Figma visual contract · granularité Git · stop rules post-MVP · post-merge cleanup |
| **v2.6** | Standard repository multidimensionnel · niveaux d’autorité · cycles de vie documentaires · lots 0/A/C/D/E/F/H/J · archivage contrôlé · superseded · contrôles de références · repository stabilisé |

---

## 3. Trajectoire des versions

| Version | Statut cible après merge | Statut avant merge (présent cycle) |
|---------|--------------------------|-------------------------------------|
| **SFIA v1.1** | Baseline historique stable | Inchangé |
| **SFIA v2.4** | **Baseline historique précédente** | Encore présentée comme baseline opérationnelle dans docs actifs (à aligner) |
| **SFIA v2.5** | **Trajectoire candidate absorbée** — **jamais** baseline opérationnelle | Encore présentée comme candidate non absorbée dans docs actifs |
| **SFIA v2.6** | **Baseline opérationnelle officielle** | **PROPOSED BASELINE** (ce document) |
| **SFIA v3.0** | Hors trajectoire | Hors trajectoire (sauf GO Morris explicite) |

> **v2.5 n’est pas une « ancienne baseline ».** Elle reste une candidate absorbée dans v2.6.

---

## 4. Contenu hérité de v2.4

Sources principales :

- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
- Routing guide §4.3 · operating model §18.1 · spine canonique

Héritage retenu (non exhaustif) :

- Typologie de cycle INC / EVOL / RUN / CAPA / DOC
- Profils Light / Standard / Critical / Exploratory / Capitalization / RUN / EVOL / INC (cadre v2.4)
- QA proportionnée · PR readiness adaptée
- Gate Morris sur arbitrages structurants
- Operating efficiency · réduction de friction
- Index méthode repo-first

---

## 5. Contenu absorbé de v2.5

Sources :

- `documentation/archive/version-history/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md`
- `documentation/archive/version-history/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md`
- PR #155–#161 (spine : template · operating model · routing)

| Élément | Preuve d’intégration active |
|---------|----------------------------|
| Repo-informed ChatGPT | Template §2.0 · operating model §18.2.8 |
| 15 cycles projet | Template §4.1 · routing §4.4 |
| Profils Light / Standard / Critical / Capitalization | Template · routing §4.4 |
| Blocs activables | Template |
| Template canonique d’exécution | `prompts/templates/sfia-cycle-execution-template.md` |
| Review pack proportionné (none / light / full) | Template §7 |
| Review Handoff Git | Template §7.10–§7.11 · rules §13.1 |
| Anti-synthesis-only / complétude contenu modifié | Template §7 |
| Contrat Figma visual | Template §6.6 · operating model §18.2.8.I |
| Granularité Git | Template §6.12.1 |
| Règles d’arrêt post-MVP | Template §6.14 |
| Synthèse globale après handoff | Template §9.1 |
| Post-merge cleanup branche | Template §6.15 |

**Statut d’absorption :** acquis **déjà présents** dans les documents actifs — v2.6 en officialise l’appartenance ; **ne revalide pas** chaque règle une à une.

---

## 6. Contenu propre v2.6

Sources :

- `2026-07-11-sfia-v2.6-repository-cleanup-framing.md`
- `2026-07-11-sfia-v2.6-repository-read-only-audit.md`
- `2026-07-11-sfia-v2.6-repository-standard-principles.md`
- `2026-07-11-sfia-v2.6-repository-cartography.md`
- `2026-07-11-sfia-v2.6-repository-migration-lots-plan.md`
- `2026-07-13-sfia-v2.6-repository-rationalization-capitalization.md`
- Rapports d’exécution lots 0, A, C, D, E, F, H, J

| Élément | Statut |
|---------|--------|
| Standard repository multidimensionnel | Capitalisé |
| Niveaux d’autorité (canonical / reference / archive) | Appliqués (Lots 0, A) |
| Cycles de vie documentaires | Capitalisés |
| Rationalisation / normalisation / naming | Lots D, E |
| Archivage contrôlé (dont v3) | Lot C |
| Gestion superseded | Lot F |
| Contrôles de références / liens | Lot E |
| Suppressions finales contrôlées | Lot J |
| Stabilisation prompts/templates (Lot H) | Capitalisée |
| Repository stabilisé post-rationalisation | Sur `main` |

---

## 7. Documents canoniques et de référence

### 7.1 Canoniques (spine actif — à aligner dans ce cycle)

| Document | Rôle |
|----------|------|
| `method/sfia-fast-track/core/README.md` | Index core · trajectoire versions |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Operating model |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Règles et garde-fous |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Routage des cycles |
| `prompts/templates/sfia-cycle-execution-template.md` | Template d’instanciation |

### 7.2 Référence active — alignement conditionnel recommandé

| Document | Motif |
|----------|-------|
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Table « SFIA v2.6 cartography status » encore v2.4 baseline / v2.6 candidate |
| `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` | Idem |

### 7.3 Présent manifest

| Document | Rôle |
|----------|------|
| `…/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md` | Décision de release · trajectoire · exclusions |

---

## 8. Exclusions explicites

| Élément | Statut |
|---------|--------|
| **SFIA Discovery** | Optionnel — PD-09 : **non promu** dans `method/core` |
| **Notion runtime / UX Notion obligatoire** | Hors méthode obligatoire |
| **SFIA v3.0** | Hors trajectoire |
| **MCP / Bridge / Runner** | Hors trajectoire |
| **Automatisation L5 globale** | Non |
| **Actifs expérimentaux non capitalisés** | Non inclus |
| **Modification applicative / tooling / CI** | Hors périmètre |
| **Cartographie CSV** | Non modifiée dans ce cycle |

Référence : `discovery-product-design/10-sfia-discovery-pd-09-capitalization-decision.md`.

---

## 9. Règles d’historisation

1. **Ne pas réécrire** les faits historiques des rapports de cycle.
2. **Préserver** date, version et contexte d’origine.
3. **Distinguer** statut historique (valable à la date du rapport) et statut actif (documents opérationnels).
4. **Modifier uniquement** les documents opérationnels actifs listés.
5. Un seul manifest suffit pour historiser v2.4 (précédente) et v2.5 (candidate absorbée) — **pas** de deux documents historiques supplémentaires dans ce cycle.

---

## 10. Réserves acceptées

| ID | Réserve |
|----|---------|
| R1 | Entrée en vigueur **uniquement après merge** — avant : PROPOSED BASELINE |
| R2 | Occurrences historiques (`Baseline opérationnelle : SFIA v2.4` dans rapports datés) **volontairement conservées** |
| R3 | Discovery / Notion métadonnées « Baseline v2.4 » = contexte pédagogique optionnel — **non spine** ; hors modification ce cycle |
| R4 | Standard v2.4 consolidation doc reste référence technique héritée — libellé « baseline » historique acceptable dans ce fichier |
| R5 | Aucune preuve que tous les index Notion ou annexes optionnels sont alignés |
| R6 | Processus indépendant Notion (PD-09) reste conceptuel |

---

## 11. Effet de la release

| Moment | Effet |
|--------|-------|
| **Avant merge** | Statut **PROPOSED BASELINE** — préparation locale uniquement |
| **Après merge Morris** | SFIA v2.6 = baseline opérationnelle officielle |
| **Commit / push / PR** | Gates Morris **distincts** — non autorisés par le GO d’ouverture |

---

## 12. Décision Morris — GO d’ouverture (16 juillet 2026)

**Retranscription — DÉCISION VALIDÉE pour ce cycle :**

1. SFIA v2.6 devient la **cible** de baseline opérationnelle officielle.
2. v2.6 **absorbe** la baseline opérationnelle v2.4.
3. v2.6 **absorbe** les acquis retenus de la trajectoire candidate v2.5.
4. v2.6 **intègre** les travaux de rationalisation repository capitalisés sous v2.6.
5. La méthode actuelle **ne doit pas** être restructurée sans nécessité démontrée.
6. v2.4 = baseline **historique précédente** ; v2.5 = candidate **absorbée** (jamais baseline) ; v1.1 = historique stable ; v3.0 = hors trajectoire.
7. Discovery / Notion **ne deviennent pas** des obligations méthodologiques.
8. Git reste la source de vérité.

**Ce GO autorise :** branche locale · manifest · alignement documents actifs · review pack · handoff `sfia/review-handoff`.

**Ce GO n’autorise pas :** commit / push / PR / merge de la branche de travail · Notion · modification applicative · nouvelle trajectoire méthode.

---

## 13. Critères d’entrée en vigueur

1. Review pack full complet et non synthesis-only  
2. Revue ChatGPT depuis handoff  
3. Corrections éventuelles (GO Morris)  
4. GO commit branche de travail  
5. GO push + création PR  
6. GO merge  
7. Post-merge confirmé → **entrée en vigueur effective**

---

## 14. Verdict documentaire (préparation)

| Élément | Valeur |
|---------|--------|
| **Statut** | PROPOSED BASELINE |
| **Verdict cycle** | `SFIA v2.6 BASELINE PREPARED — READY FOR MORRIS REVIEW` |
| **Baseline officielle active ?** | **Non** — avant merge |

---

*Fin du manifest — consolidation, pas refonte.*
```

---

## 7. Contenu FULL — `git diff` des fichiers modifiés

```diff
diff --git a/method/sfia-fast-track/core/README.md b/method/sfia-fast-track/core/README.md
index 1d07d5d..b28fd12 100644
--- a/method/sfia-fast-track/core/README.md
+++ b/method/sfia-fast-track/core/README.md
@@ -6,8 +6,13 @@ This folder contains the operational foundation documents of the SFIA Fast Track
 
 | Version | Role |
 |---------|------|
-| **SFIA v2.4** | **Baseline** opérationnelle actuelle |
-| **SFIA v2.6** | **Candidate** — cartographie et trajectoire capitalisation ; ne remplace pas v2.4 |
+| **SFIA v2.6** | **Proposed baseline** opérationnelle — consolidation v2.4 + acquis v2.5 + rationalisation repository ; **en vigueur après merge** du cycle d'officialisation |
+| **SFIA v2.4** | **Baseline historique précédente** — héritage opérationnel absorbé dans v2.6 |
+| **SFIA v2.5** | **Candidate absorbée** dans v2.6 — **jamais** baseline opérationnelle |
+| **SFIA v1.1** | Baseline historique stable (fondations) |
+| **SFIA v3.0** | Hors trajectoire (sauf GO Morris explicite) |
+
+> Manifest : `documentation/capitalization/sfia-v2.6/2026-07-16-sfia-v2.6-baseline-release-manifest.md`
 
 ## Document authority
 
diff --git a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
index b15c93c..b770980 100644
--- a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
+++ b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
@@ -537,13 +537,13 @@ Ces documents ne doivent être créés qu'**après validation** du présent Oper
 - pas de L5 global ;
 - handoff agent = **trajectoire future**, non implémentée.
 
-### 18.2 Complément SFIA v2.5 candidate — MVP méthode proportionnée
+### 18.2 Complément — acquis SFIA v2.5 absorbés dans v2.6 (MVP méthode proportionnée)
 
-> **Référence :** `sfia-v2.5-project-plan.md` — Cycle 1 — **hypothèse candidate** ; preuve attendue au Cycle 4 ; Morris décide.  
-> **Ne remplace pas** v2.4 — **opérationnalise** la proportionnalité. **Ne valide pas** SFIA v2.5.
-
-Ce complément v2.5 candidate clarifie la séparation entre type de cycle et profil SFIA ; il ne remplace pas la typologie v2.4 `INC / EVOL / RUN / CAPA / DOC` ni les standards v2.0–v2.4 applicables (voir `sfia-cycle-routing-guide.md` §4.3.1).
+> **Référence historique :** `sfia-v2.5-project-plan.md` — Cycle 1 — capitalisation Chantiers360 post-MVP.  
+> **Statut version :** acquis **absorbés dans SFIA v2.6 (proposed baseline)** — v2.5 = candidate absorbée, **jamais** baseline.  
+> **Ne remplace pas** l'héritage v2.4 — **opérationnalise** la proportionnalité.
 
+Ce complément clarifie la séparation entre type de cycle et profil SFIA ; il ne remplace pas la typologie v2.4 `INC / EVOL / RUN / CAPA / DOC` ni les standards v2.0–v2.4 applicables (voir `sfia-cycle-routing-guide.md` §4.3.1).
 #### 18.2.1 Distinction type de cycle projet et profil SFIA
 
 | Dimension | Rôle |
diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index f7409fa..cd0fe1d 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -1,17 +1,16 @@
 ---
 status: validated
-version: v1.3
-updated_after: SFIA v2.5 candidate Cycle 1 — MVP méthode proportionnée
+version: v1.4
+updated_after: SFIA v2.6 proposed baseline officialization — consolidation v2.4 + v2.5 absorbed + repository rationalization
 scope: cycle routing and reference selection
 ---
 
 # Guide de routage des cycles SFIA
 
-**Version:** v1.3
-**Status:** Validated — complément SFIA v2.5 candidate Cycle 1 (hypothèse candidate)
+**Version:** v1.4
+**Status:** Validated — aligné **SFIA v2.6 proposed baseline** (héritage v2.4 §4.3 · acquis v2.5 absorbés §4.4)
 **Scope:** Routage des cycles, sélection des références, templates et validations
-**Standard consolidation actif :** SFIA v2.4 — voir §4.3 ; complément v2.5 candidate §4.4
-
+**Baseline proposée :** SFIA v2.6 — en vigueur après merge ; voir §4.3 (héritage) et §4.4 (acquis absorbés)
 ## 1. Objectif
 
 Ce document définit comment SFIA sélectionne, pour chaque cycle :
@@ -159,13 +158,13 @@ Si le type de cycle n'est pas clair, lancer d'abord un **cycle de cadrage** (mé
 | Capitalisation projet | Transformer un résultat projet en actif SFIA réutilisable |
 | Roadmap projet | Structurer les prochaines étapes, jalons, dépendances et priorités |
 
-### 4.3 Routage SFIA v2.4 — consolidation & operating efficiency
+### 4.3 Routage — héritage SFIA v2.4 (consolidation & operating efficiency)
 
 > **Référence détaillée :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
-> **Baseline méthode :** SFIA v2.3.1 — **standard actif v2.4** depuis PR #139.
+> **Statut version :** héritage opérationnel **absorbé dans SFIA v2.6 (proposed baseline)** — v2.4 = baseline historique précédente.
 > **v3.0 :** immediate NO-GO — toute discussion v3.0 = décision Morris dédiée.
 
-SFIA v2.4 est le **standard de consolidation** pour les cycles futurs. Il couvre notamment :
+SFIA v2.4 reste le **standard de consolidation** de référence pour les cycles. Il couvre notamment :
 
 - profils projet et méthode adaptative ;
 - typologie INC / EVOL / RUN / CAPA / DOC ;
@@ -253,14 +252,14 @@ Handoff ChatGPT ↔ Cursor ↔ Git : **cadre documentaire** v2.4 §10 — **non
 
 **Git reste la source de vérité.**
 
-### 4.4 Routage SFIA v2.5 candidate — profils transverses
+### 4.4 Routage — acquis SFIA v2.5 absorbés dans v2.6 (profils transverses)
 
-> **Référence :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md` — Cycle 1
-> **Statut :** hypothèse **candidate** — ne valide pas v2.5 ; preuve Cycle 4 ; Morris décide
+> **Référence historique :** `method/sfia-fast-track/documentation/archive/version-history/sfia-v2/sfia-v2.5-project-plan.md` — Cycle 1
+> **Statut version :** acquis **absorbés dans SFIA v2.6 (proposed baseline)** — v2.5 = candidate absorbée, **jamais** baseline opérationnelle
 > **Détail opérationnel :** `sfia-chatgpt-cursor-operating-model.md` §18.2
-> **Cartographie cycles projet (Cycle 2) :** le routage type de cycle projet × profil SFIA s'appuie, en v2.5 candidate, sur `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`.
+> **Cartographie cycles projet :** s'appuie sur l'historique `…/archive/version-history/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` et le template d'exécution actif.
 
-Ce complément v2.5 candidate clarifie la séparation entre type de cycle et profil SFIA ; il ne remplace pas la typologie v2.4 `INC / EVOL / RUN / CAPA / DOC` ni les standards v2.0–v2.4 applicables.
+Ce complément clarifie la séparation entre type de cycle et profil SFIA ; il ne remplace pas la typologie héritée v2.4 `INC / EVOL / RUN / CAPA / DOC` ni les standards v2.0–v2.4 applicables.
 
 #### 4.4.1 Type de cycle projet vs profil SFIA
 
@@ -982,7 +981,7 @@ Référence : `method/sfia-fast-track/automation/sfia-repository-execution-engin
 
 ## 13. Décision
 
-`sfia-cycle-routing-guide.md` est le **guide validé SFIA v1.2** pour sélectionner les références, templates et contrôles de validation selon le type de cycle — aligné SFIA v2.4 / v2.4.1 (PR #139, #140).
+`sfia-cycle-routing-guide.md` est le **guide validé** pour sélectionner les références, templates et contrôles de validation selon le type de cycle — aligné **SFIA v2.6 proposed baseline** (héritage v2.4 / v2.4.1 · acquis v2.5 absorbés).
 
 Il fournit le mécanisme opérationnel permettant de s'assurer que la documentation SFIA est appliquée au bon moment.
 
@@ -1000,4 +999,4 @@ Il rend la sélection documentaire **explicite, auditable et validable**.
 
 ---
 
-*Référentiel SFIA — Guide de routage des cycles v1.3 — validated document — aligné SFIA v2.4 / v2.4.1 / v2.5 candidate Cycle 1.*
+*Référentiel SFIA — Guide de routage des cycles v1.4 — validated document — aligné SFIA v2.6 proposed baseline (héritage v2.4 / acquis v2.5 absorbés).*
diff --git a/method/sfia-fast-track/core/sfia-global-capitalization-reference.md b/method/sfia-fast-track/core/sfia-global-capitalization-reference.md
index 13dd25d..ddbcfb3 100644
--- a/method/sfia-fast-track/core/sfia-global-capitalization-reference.md
+++ b/method/sfia-fast-track/core/sfia-global-capitalization-reference.md
@@ -35,8 +35,9 @@ Le contenu historique ci-dessous reste inchangé à des fins de traçabilité.
 | Authority | **reference** — operational proof, not canonical |
 | Proposed disposition (CSV) | `rename` — **executed** Lot A → `sfia-global-capitalization-reference.md` |
 | Physical path | `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` |
-| SFIA v2.4 | **Baseline** opérationnelle |
-| SFIA v2.6 | **Candidate** — ne remplace pas v2.4 |
+| SFIA v2.6 | **Proposed baseline** — en vigueur après merge d'officialisation |
+| SFIA v2.4 | **Baseline historique précédente** (absorbée dans v2.6) |
+| SFIA v2.5 | **Candidate absorbée** dans v2.6 — jamais baseline |
 
 ## 1. Objectif
 
diff --git a/method/sfia-fast-track/core/sfia-knowledge-layer.md b/method/sfia-fast-track/core/sfia-knowledge-layer.md
index 1a4b5d7..c2cd67c 100644
--- a/method/sfia-fast-track/core/sfia-knowledge-layer.md
+++ b/method/sfia-fast-track/core/sfia-knowledge-layer.md
@@ -20,8 +20,9 @@ scope: knowledge layer
 | Cartography tag | `lot-A` |
 | Authority | **reference** — active Documentation Routing Matrix |
 | Usage (cartography) | Clarified: **non-operational reference** for routing and Notion preparation rules |
-| SFIA v2.4 | **Baseline** opérationnelle |
-| SFIA v2.6 | **Candidate** — ne remplace pas v2.4 |
+| SFIA v2.6 | **Proposed baseline** — en vigueur après merge d'officialisation |
+| SFIA v2.4 | **Baseline historique précédente** (absorbée dans v2.6) |
+| SFIA v2.5 | **Candidate absorbée** dans v2.6 — jamais baseline |
 | Canonical promotion | **none** — complements `sfia-rules-and-guardrails.md` and operating model |
 
 ## 1. Objectif
diff --git a/method/sfia-fast-track/core/sfia-rules-and-guardrails.md b/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
index 2f906d5..b9a7953 100644
--- a/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
+++ b/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
@@ -216,7 +216,7 @@ SFIA utilise les décisions suivantes :
 | Prompt sans décision Review Handoff Git | Handoff omis — ChatGPT lit un cycle obsolète |
 | Review pack light/full pour ChatGPT sans handoff required | Cycle incomplet — pas de publication remote |
 
-## 13.1 Review Handoff Git — règle transverse (candidate v2.5 — correctif routing)
+## 13.1 Review Handoff Git — règle transverse (absorbée v2.6 — origine capitalisation v2.5)
 
 > **Référence :** template §7.10–§7.11 ; operating model §18.2.8.H ; routing guide §2.1.
 
@@ -227,7 +227,7 @@ SFIA utilise les décisions suivantes :
 | **Handoff required** | Copie review pack → commit → push `origin/sfia/review-handoff` → vérification remote — L3 borné |
 | **Rapport incomplet** | Rapport demandant lecture handoff sans push/remote confirmés → cycle incomplet |
 | **Instruction ChatGPT** | Bloc §9.1 obligatoire dans rapport final Cursor lorsque handoff required |
-| **Baseline** | Règle candidate v2.5 — ne promeut pas v2.5 ni v2.6 en baseline |
+| **Baseline** | Règle **absorbée dans SFIA v2.6 (proposed baseline)** — origine capitalisation v2.5 ; entrée en vigueur de v2.6 après merge Morris |
 
 ## 14. Documents associés
 
diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index 742549d..6f2e8de 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -1,18 +1,18 @@
 ---
-status: candidate
-version: v2.5-candidate
+status: proposed-baseline
+version: v2.6-proposed-baseline
 type: prompt-instantiation-template
-family: SFIA v2.5 cycle execution
-updated_after: SFIA v2.5 Cycle 3 — méthode cycles projet (PR #146)
+family: SFIA v2.6 cycle execution
+updated_after: SFIA v2.6 proposed baseline officialization — consolidation v2.4 + v2.5 absorbed
 scope: instantiate Cursor execution prompts from ChatGPT
 ---
 
-# SFIA Cycle Execution — Template d'instanciation v2.5 candidate
+# SFIA Cycle Execution — Template d'instanciation v2.6 (proposed baseline)
 
 **Fichier :** `prompts/templates/sfia-cycle-execution-template.md`  
-**Statut :** SFIA v2.5 **candidate** — non validé comme baseline  
-**Baseline opérationnelle :** SFIA v2.4 — tant que Morris n'a pas validé explicitement v2.5  
-**Références :** `sfia-v2.5-project-cycles-method-candidate.md` ; operating model §18.2 ; routing guide §4.4 ; PGE §7
+**Statut :** SFIA v2.6 **proposed baseline** — **en vigueur après merge** Morris  
+**Baseline proposée :** SFIA v2.6 — absorbe héritage v2.4 et acquis v2.5  
+**Références :** operating model §18.2 ; routing guide §4.3–§4.4 ; manifest `2026-07-16-sfia-v2.6-baseline-release-manifest.md`
 
 > **Ce document est un template d'instanciation pour ChatGPT.** Il sert à **générer** des prompts Cursor SFIA adaptés au contexte. **Ce n'est pas un prompt Cursor à envoyer tel quel.**
 
@@ -26,7 +26,7 @@ scope: instantiate Cursor execution prompts from ChatGPT
 | **Pas pour** | Envoi direct à Cursor sans instanciation |
 | **Objectif** | Produire un **contrat d'exécution** borné : type de cycle + profil SFIA + périmètre + garde-fous |
 | **Repo-first** | Git est la source canonique ; le prompt déclare branche, HEAD, périmètre fichiers |
-| **Statut** | v2.5 **candidate** — ne valide pas SFIA v2.5 ; ne remplace pas v2.4 |
+| **Statut** | v2.6 **proposed baseline** — consolidation ; non en vigueur avant merge |
 | **Morris** | Autorité de décision — gates structurants, push, PR, merge, validation de baseline |
 | **Cursor** | Exécuteur contrôlé — ne décide pas, n'élargit pas le scope, n'arbitre pas |
 
@@ -155,7 +155,9 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 - Prompt sans périmètre / hors périmètre
 - Oublier review pack sur cycle documentaire
 - Omettre la décision Review Handoff Git (required / not required)
-- Présenter v2.5 comme baseline validée
+- Présenter une candidate non mergée comme baseline validée
+- Présenter v2.6 comme baseline officielle **avant** merge Morris
+- Relancer SFIA v3.0 sans GO Morris
 
 ---
 
@@ -321,7 +323,7 @@ Fichiers interdits :
 Garde-fous :
 - Ne pas push / PR / merge sans GO Morris
 - Ne pas élargir le périmètre
-- Ne pas valider SFIA v2.5 comme baseline
+- Ne pas déclarer SFIA v2.6 baseline officielle avant merge
 - Ne pas relancer SFIA 3.0
 - Git = source de vérité
 - [Garde-fous spécifiques au cycle]
@@ -1179,7 +1181,7 @@ Cursor doit **stopper** et demander Morris si :
 9. Suppression de branche sans GO Morris
 10. Décision structurante non validée
 11. Profil Critical sans justification
-12. Promotion v2.5 implicite
+12. Promotion implicite d'une baseline / candidate hors GO Morris
 13. Relance SFIA 3.0 implicite
 14. Modification Prompt Catalog sans GO Morris
 15. Tentative d'automatiser un arbitrage humain
@@ -1348,10 +1350,10 @@ Procédure détaillée :
 5. Critical : toujours justifier. Standard par défaut si doute.
 6. Review pack proportionné : none / light / full — voir template §7. Jamais de stub final si light ou full requis.
 7. Review Handoff Git : décision required / not required obligatoire dans chaque prompt (template §3, §5, §7.10–§7.11). Lorsque required : copie, commit, push origin/sfia/review-handoff, vérification remote, instruction ChatGPT §9.1 dans le rapport final. Verdict PROMPT INCOMPLETE — REVIEW HANDOFF DECISION MISSING si absent.
-8. v2.5 = candidate, non baseline. v2.4 reste baseline opérationnelle tant que Morris n'a pas validé v2.5.
+8. v2.6 = proposed baseline (en vigueur après merge). v2.4 = historique précédente. v2.5 = candidate absorbée. v3.0 = hors trajectoire.
 9. Morris décide push branche projet, PR, merge, gates structurants. Cursor exécute le contrat — ne décide pas. Push handoff required = L3 borné sans micro-GO Morris.
 ```
 
 ---
 
-*SFIA v2.5 candidate — Template d'instanciation — Cycle 3 — non validé comme baseline — Morris décide.*
+*SFIA v2.6 proposed baseline — Template d'instanciation — consolidation v2.4 + acquis v2.5 — en vigueur après merge — Morris décide.*
```

---

## 8. Doctrine / Discovery / Notion

| Élément | Statut |
|---------|--------|
| Changement doctrine méthode au-delà alignement version | **Aucun** |
| Discovery promu dans method/core | **Non** |
| Notion runtime / UX Notion obligatoire | **Non** |
| v2.6 official avant merge | **Non** — PROPOSED BASELINE only |

---

## 9. Review pack coverage checklist

| Critère | Statut |
|---------|--------|
| Created file(s) — full content included | **YES** (manifest verbatim §6) |
| Modified files — complete changed sections / full diff | **YES** (§7 full `git diff`) |
| Useful diff (not stub) | **YES** |
| Synthesis-only pack | **NO** |
| Matrix + formula + git truth + validations | **YES** |
| Historical files intentionally not modified documented | **YES** |
| Morris GO opening vs remaining gates | **YES** |
| Explicit: v2.6 not official before merge | **YES** |
| Verdict complete | **YES** |

---

## 10. Verdict

```text
SFIA v2.6 BASELINE PREPARED — READY FOR MORRIS REVIEW
```

- **Statut documentaire :** PROPOSED BASELINE  
- **Baseline officielle active ?** **Non** — uniquement après merge Morris  
- **Prochaine étape attendue :** revue ChatGPT depuis handoff `sfia/review-handoff`  
- **Puis gates distincts :** commit → push → PR → merge → post-merge (entrée en vigueur)

---

## 11. Instruction ChatGPT (§9.1 handoff)

Lire ce pack depuis `sfia-review-handoff/latest-chatgpt-review.md` sur la branche `sfia/review-handoff`.  
Ne pas traiter v2.6 comme baseline officielle.  
Ne pas demander commit/push/PR/merge de la branche de travail sans GO Morris explicite.


---

## Technical validation update — trailing whitespace (2026-07-16 13:50 Europe/Paris)

**Réserve ChatGPT traitée :** `git diff --check` trailing whitespace (4 lines).

| File | Lines |
|------|-------|
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | 542, 543 |
| `prompts/templates/sfia-cycle-execution-template.md` | 13, 14 |

**Avant :**
```
method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md:542: trailing whitespace.
+> **Référence historique :** `sfia-v2.5-project-plan.md` — Cycle 1 — capitalisation Chantiers360 post-MVP.  
method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md:543: trailing whitespace.
+> **Statut version :** acquis **absorbés dans SFIA v2.6 (proposed baseline)** — v2.5 = candidate absorbée, **jamais** baseline.  
prompts/templates/sfia-cycle-execution-template.md:13: trailing whitespace.
+**Statut :** SFIA v2.6 **proposed baseline** — **en vigueur après merge** Morris  
prompts/templates/sfia-cycle-execution-template.md:14: trailing whitespace.
+**Baseline proposée :** SFIA v2.6 — absorbe héritage v2.4 et acquis v2.5  
```

**Correction :** trailing spaces/tabs removed only — no semantic/Markdown/doctrine change.

**Après :** `git diff --check` → OK — no output

- non-whitespace changes on targeted lines: none
- doctrine/content changes: none
- files in cycle: still 7 modified + 1 created (manifest)
- staging: none
- HEAD: still 805952a9fffdba8787f07e5d60cf90ef74dacd37

**Verdict correctif :** `TECHNICAL RESERVE CLOSED — READY FOR MORRIS COMMIT DECISION`

**Verdict principal (inchangé) :** `SFIA v2.6 BASELINE PREPARED — READY FOR MORRIS REVIEW`

*Fin du review pack FULL — Cycle 15 Capitalization Critical — 2026-07-16 13:40 Europe/Paris (CEST).*

---

## Technical validation update — baseline commit local (mono-cycle v2.6) — 2026-07-16 14:05 CEST

**Cycle :** mono-cycle SFIA v2.6 baseline officialization (inchangé)

| Item | Result |
|------|--------|
| Manifest lines 241–246 trailing whitespace | closed (2 spaces stripped per line) |
| Temporary staged check (`git diff --cached --check` then unstage) | OK |
| Final staged check (8 paths) | OK — check clean |
| Commit SHA | `6e9eed1def9dec34b5e2a458728cb0d590238d5b` |
| Parent SHA | `805952a9fffdba8787f07e5d60cf90ef74dacd37` |
| Message | `docs: prepare SFIA v2.6 consolidated baseline` |
| Files | exactly 8 (7 M + 1 A) |
| Push work branch | **no push** |
| Status baseline | still **PROPOSED BASELINE** (entrée en vigueur après merge) |

**Verdict :** `SFIA v2.6 BASELINE COMMITTED LOCALLY — READY FOR MORRIS PUSH/PR DECISION`


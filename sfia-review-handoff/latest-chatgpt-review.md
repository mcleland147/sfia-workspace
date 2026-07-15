# SFIA Review Pack — Discovery Legacy Migration Plan PD-07A

**Horodatage :** 2026-07-15 ~22:35 Europe/Paris (CEST)
**Repository :** mcleland147/sfia-workspace
**Workspace :** /Users/morris/Projects/sfia-workspace
**Cycle :** PD-07A — Migration legacy (préparation Git)
**Type de cycle :** Product Design — inventaire + plan de migration
**Profil SFIA :** Standard
**Typologie v2.4 :** DOC
**Statut livrables :** Candidate — inventaire et plan non commités
**Branche projet :** `documentation/sfia-discovery-legacy-migration-plan`
**HEAD / base / origin/main :** `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` (`9dd9dcf`)
**Implémentation Notion :** PD-02B ✓ · PD-03B ✓ · PD-04B ✓ · PD-05B ✓ · PD-06B ✓ · **PD-07B futur**
**Capitalisation méthode :** Non
**Niveau review pack :** full (2 NEW + 2 MOD + contenu intégral)
**Handoff avant :** `origin/sfia/review-handoff` @ `43e221bfbd1f299cc2c1fcbdf1aca5926de93443`
**Verdict :** **LEGACY MIGRATION PLAN PREPARED — READY FOR CHATGPT REVIEW**

---

## Décision Morris — GO PD-07A (handoff review)

| Élément | Décision |
|---------|----------|
| **Périmètre** | Inventaire Git legacy §00–11 · plan migration réversible PD-07B · gates M1–M6 préparés |
| **Hors périmètre** | Notion PD-07B · archivage · delete · commit projet · push projet · PR · merge · capitalisation |
| **Prérequis** | PD-06A/B ✓ (Actes VI–VII mergés @ `9dd9dcf`) |
| **Gates** | M1–M6 contenu · M7 commit ultérieur · M8 Notion PD-07B ultérieur |
| **Commit projet** | **Non** — branche projet reste non commitée |
| **Handoff** | Publication `sfia/review-handoff` autorisée |

---

## Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| toplevel | `/Users/morris/Projects/sfia-workspace` |
| Branche | `documentation/sfia-discovery-legacy-migration-plan` |
| HEAD | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` ✓ |
| origin/main | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` |
| Commits ahead of main (projet) | **0** — aucun commit local sur branche projet |
| staged (scope projet) | **aucun** (`0` staged global) |
| Untracked attendus | `.sfia/` · `.tmp-sfia-review/` · `sfia-review-handoff/` · `discovery/migration/` |
| **Verdict** | **PASS** |

### git status --porcelain (périmètre projet PD-07A)

```
 M method/sfia-fast-track/documentation/notion/discovery-product-design/07-sfia-discovery-transformation-roadmap.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/README.md
?? method/sfia-fast-track/documentation/notion/discovery/migration/
```

### git status --porcelain (workspace — informational)

```
 M method/sfia-fast-track/documentation/notion/discovery-product-design/07-sfia-discovery-transformation-roadmap.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/README.md
?? .sfia/
?? .tmp-sfia-review/
?? method/sfia-fast-track/documentation/notion/discovery/migration/
?? sfia-review-handoff/
```

**Périmètre PD-07A :** 2 NEW migration + 2 MOD (README editorial · roadmap 07). **Aucun commit projet.**

---

## Fichiers livrables — line counts (4 fichiers PD-07A)

| Fichier | Lignes |
|---------|--------|
| `method/sfia-fast-track/documentation/notion/discovery/migration/sfia-discovery-legacy-content-inventory.md` | 393 |
| `method/sfia-fast-track/documentation/notion/discovery/migration/sfia-discovery-legacy-migration-plan.md` | 361 |
| `method/sfia-fast-track/documentation/notion/discovery/editorial/README.md` | 161 |
| `method/sfia-fast-track/documentation/notion/discovery-product-design/07-sfia-discovery-transformation-roadmap.md` | 195 |

---

## git diff --stat (tracked MOD)

```
 .../07-sfia-discovery-transformation-roadmap.md    | 56 +++++++-----
 .../notion/discovery/editorial/README.md           | 99 +++++++++++++---------
 2 files changed, 94 insertions(+), 61 deletions(-)
```

**NEW (untracked) :**

```
 method/sfia-fast-track/documentation/notion/discovery/migration/sfia-discovery-legacy-content-inventory.md | 393
 method/sfia-fast-track/documentation/notion/discovery/migration/sfia-discovery-legacy-migration-plan.md | 361
```

---

## Sources consultées (gouvernance pack)

| Source | Usage pack |
|--------|------------|
| `discovery/migration/sfia-discovery-legacy-content-inventory.md` | Inventaire §00–11 · uniques · absorbés · annexes · archive · R-LEG |
| `discovery/migration/sfia-discovery-legacy-migration-plan.md` | Stratégies · lots 0–5 · rollback · interdits · gates PD-07B |
| `discovery/editorial/README.md` | Cycle courant PD-07A · inventaire migration · gates M1–M8 |
| `discovery-product-design/07-sfia-discovery-transformation-roadmap.md` | Séquence PD-07A/B · cycle courant |
| `notion/editorial/sfia-notion-00…08 · 11-*-editorial-draft.md` | Corpus legacy P0 Git (méthode find/ls/rg) |
| `notion/editorial/sfia-notion-p0-editorial-review-checklist.md` | Checklist QA pack P0 |
| `discovery/editorial/sfia-discovery-*.md` (PR #196–#200) | Cibles Hub + Actes I–VII mergées |
| `discovery-product-design/01…06\*.md` | Vision · IA · storyline (contexte architecture) |
| Handoff précédent PD-06A @ `43e221bfbd1f299cc2c1fcbdf1aca5926de93443` | Continuité review |

---

## Discovery method for legacy (find / ls / rg)

### `find` — drafts P0 sous `notion/editorial/`

```
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-00-home-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-01-understand-sfia-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-02-value-proposition-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-03-how-a-cycle-works-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-04-cycles-profiles-gates-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-05-request-routing-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-06-templates-prompts-deliverables-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-07-governance-guardrails-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-08-setup-sfia-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-11-glossary-editorial-draft.md
```

### `ls -la` — dossier migration PD-07A

```
total 72
drwxr-xr-x@ 4 morris  staff    128 Jul 15 22:29 .
drwxr-xr-x@ 4 morris  staff    128 Jul 15 22:29 ..
-rw-r--r--@ 1 morris  staff  19852 Jul 15 22:29 sfia-discovery-legacy-content-inventory.md
-rw-r--r--@ 1 morris  staff  13473 Jul 15 22:29 sfia-discovery-legacy-migration-plan.md
```

### `rg` — fiches § dans inventaire

```
87:### §00 — Accueil
106:### §01 — Comprendre SFIA
125:### §02 — Proposition de valeur
144:### §03 — Comment fonctionne un cycle
163:### §04 — Cycles, profils et gates
182:### §05 — Routage des demandes
201:### §06 — Templates, prompts et livrables
220:### §07 — Gouvernance et garde-fous
239:### §08 — Mettre SFIA en place
258:### §09 — Cas d'usage
277:### §10 — Documents de référence
296:### §11 — Glossaire
```

### `rg -l` — confirmation présence drafts legacy

```
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/README.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-00-home-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-01-understand-sfia-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-02-value-proposition-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-03-how-a-cycle-works-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-04-cycles-profiles-gates-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-05-request-routing-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-06-templates-prompts-deliverables-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-07-governance-guardrails-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-08-setup-sfia-editorial-draft.md
/Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/editorial/sfia-notion-11-glossary-editorial-draft.md
```

**Constats méthode :** §00–08 et §11 présents en Git ; §09 volontairement absent (P1) ; §10 sans draft Markdown P0 (vue Base).

---

## Inventaire §00–11 — matrice (synthèse inventaire)

**Aucun statut DELETE n'est autorisé.**

---

## 3. Corpus Git legacy — synthèse

| § | Titre | Source Git trouvée | Confiance |
|---|-------|-------------------|-----------|
| §00 | Accueil | Oui — draft éditorial | Observation |
| §01 | Comprendre SFIA | Oui — draft éditorial | Observation |
| §02 | Proposition de valeur | Oui — draft éditorial | Observation |
| §03 | Comment fonctionne un cycle | Oui — draft éditorial | Observation |
| §04 | Cycles, profils et gates | Oui — draft éditorial | Observation |
| §05 | Routage des demandes | Oui — draft éditorial | Observation |
| §06 | Templates, prompts et livrables | Oui — draft éditorial | Observation |
| §07 | Gouvernance et garde-fous | Oui — draft éditorial | Observation |
| §08 | Mettre SFIA en place | Oui — draft éditorial | Observation |
| §09 | Cas d'usage | **Non** — volontairement P1 | Observation + documentation |
| §10 | Documents de référence | **Non** comme draft §10 — prévu comme vue Base | Observation + documentation |
| §11 | Glossaire | Oui — draft éditorial | Observation |

---

## Matrice complète §00–11 — stratégies (plan)

## 5. Matrice complète §00–11

| Legacy | Action proposée | Destination Notion cible | Contenu unique à reporter | Stratégie |
|--------|-----------------|--------------------------|---------------------------|-----------|
| §00 Accueil | Remplacer parcours primaire | Hub Discovery | Aucun critique si Hub complet | REPLACE_IN_PRIMARY_NAVIGATION + REDIRECT_TO_DISCOVERY → ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §01 Comprendre | Fusion déjà réalisée | Acte II · extrait Acte V | Formulations uniques Lot 4 | MERGED_CONTENT_PRESERVED + REDIRECT_TO_DISCOVERY |
| §02 Valeur | Fusion déjà réalisée | Acte I · Acte VI | Anti-patterns Lot 4 | MERGED_CONTENT_PRESERVED + REDIRECT_TO_DISCOVERY |
| §03 Cycle | Déplacer / fusion | Acte III · Acte VII | Schéma cycle si absent Acte III | MERGED_CONTENT_PRESERVED + KEEP_ANNEX temporaire si besoin |
| §04 Cycles/profils | Renommer + simplifier | Acte VII Porte 1 · Base Cycles | Tableau 15 cycles Candidate | KEEP_ANNEX |
| §05 Routage | Réduire | Acte VII Porte 2 | Orientation categories | KEEP_ANNEX + REDIRECT_TO_DISCOVERY |
| §06 Templates/prompts | Index seulement | Acte VII Porte 3 · Référentiel | Index (pas catalog) | KEEP_ANNEX · NEEDS_MORRIS_DECISION si sur-exposition |
| §07 Gouvernance | Fusion | Acte V · Meta · Acte VII Porte 4 | Aucun critique attendu | MERGED_CONTENT_PRESERVED + REDIRECT_TO_DISCOVERY |
| §08 Mise en place | Conserver annexe | Acte VII Porte 5 | Checklists setup | KEEP_ANNEX |
| §09 Cas d'usage | Hors scope | P1 futur | N/A (absent Git) | OUTSIDE_DISCOVERY_SCOPE |
| §10 Docs référence | Conserver / créer vue | Acte VII Porte 6 · Base Référentiel | Index documents | KEEP_ANNEX ou NEEDS_MORRIS_DECISION |
| §11 Glossaire | Conserver annexe | Acte VII Porte 7 | Ensemble des termes | KEEP_ANNEX |

---

---

## Contenus uniques à préserver

## 5. Contenus uniques à préserver

| Contenu | Source | Destination de préservation |
|---------|--------|----------------------------|
| Glossaire ≥20 termes avec liens | §11 | KEEP_ANNEX Acte VII · ne pas archiver sans copie Discovery |
| Tableau 15 cycles Candidate + profils détaillés | §04 | Annexe Acte VII ou Base Cycles — **Candidate badge** |
| Checklists / étapes setup concrètes | §08 | KEEP_ANNEX si absentes d'Acte VII |
| Index rôles templates vs prompts | §06 | Index Acte VII seulement — **pas** le catalog |
| Schéma cycle ChatGPT↔Cursor | §03 | Vérifier presence Acte III ; sinon reporter |
| Formulations anti-patterns valeur | §02 | Lot 4 — comparer Acte I |

---

---

## Contenus déjà absorbés (Actes I–VII)

| Legacy | Absorbé dans (Git Discovery mergé) | Nature |
|--------|-----------------------------------|--------|
| §00 orientation | Hub Discovery | MERGED_CONTENT_PRESERVED |
| §01 comprendre | Acte I · Acte II | MERGED_CONTENT_PRESERVED |
| §02 valeur | Acte I · Acte VI | MERGED_CONTENT_PRESERVED |
| §03 cycle | Acte III · Acte VII | MERGED_CONTENT_PRESERVED (partiel) |
| §07 gouvernance | Acte V · Acte VII gouvernance | MERGED_CONTENT_PRESERVED |
| §04–§06 · §08 · §11 orientation | Acte VII sept portes | Orientation portail — **pas copie intégrale** |

Sources Discovery : `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-*.md` (PR #196–#200).

---

---

## Annexes encore utiles

| § | Raison |
|---|--------|
| §04 | Référentiel cycles/profils plus détaillé que le portail Acte VII |
| §05 | Guide routage pédagogique |
| §06 | Index templates (version filtrée) |
| §08 | Setup opérationnel |
| §10 | Base / documents de référence (si existe en Notion) |
| §11 | Glossaire complet |

---

---

## Candidats archive (après validation Lot 5 seulement)


| § | Condition préalable | Statut proposé |
|---|---------------------|----------------|
| §00 | Hub Discovery stable · redirections OK · liens entrants traités | ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §01 | Contenu unique reporté ou accepté comme obsolète | ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §02 | Idem | ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §03 | Schéma unique préservé ailleurs | ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §07 | Gouvernance Acte V / Meta suffisante | ARCHIVE_CANDIDATE_AFTER_VALIDATION |

**Aucun archivage dans PD-07A.** Aucune suppression.

---

## Risks / critères d'arrêt (PD-07B)

## 11. Critères d'arrêt (PD-07B)

Stopper et escalader Morris si :

- contenu unique sans destination Discovery / annexe ;
- backlink massif non traitable sans casse ;
- §06 (ou autre) expose prompts / secrets / protected paths ;
- Hub ou Actes I–VII endommagés ;
- Base Référentiel / Cycles cassées ;
- demande de DELETE ;
- divergence Git ↔ Notion non qualifiable.

Risques structurants issus réserves R-LEG (détail ci-dessous) : runtime Notion inconnu · §06 prompt catalog · bases IDs · divergence « non publié » Git vs Notion.

---

## PD-07B — Lots 0–5 + rollback

## 9. Ordre d'exécution PD-07B (lots)

### Lot 0 — Pré-check (non destructif)

| Action | Preuve |
|--------|--------|
| Inventaire Notion réel (§00–11 + orphelines) | Table ID · URL · parent · statut publié |
| Captures d'écran Accueil · Hub · Actes | Avant |
| Cartographie liens entrants / sortants | Export ou table manuelle |
| Bases Référentiel et Cycles | ID · vues · embeds Acte VII |
| Écarts vs inventaire Git PD-07A | Liste absences / surplus |

**Stop si :** page critique absente de Discovery · contenu unique sans destination · §06 expose le prompt catalog.

### Lot 1 — Navigation non destructive

| Action | Preuve |
|--------|--------|
| Bannière redirection sur §00–§03 · §07 (et autres selon Lot 0) | Capture |
| Vérifier Hub + parcours I–VII intact | Checklist navigation |
| Aucune page déplacée | Status Notion |

**Rollback :** retirer bannières · restaurer texte original depuis Git / capture.

### Lot 2 — Annexes

| Action | Preuve |
|--------|--------|
| Orienter §04–§08 · §10–§11 vers Acte VII | Liens · nav |
| Vérifier embeds Bases | Vues |
| Filtrer §06 à l'index | Contrôle confidentialité |

**Rollback :** retirer liens ajoutés · restaurer parents.

### Lot 3 — Pages absorbées

| Action | Preuve |
|--------|--------|
| §00–§03 · §07 : redirection claire vers Hub / Actes | Bannière + lien cible |
| Ne pas archiver | Pages toujours accessibles |

**Rollback :** désactiver bannières · restauration copie Git.

### Lot 4 — Validation Morris

| Action | Preuve |
|--------|--------|
| Relecture visuelle parcours Discovery | Checklist |
| Contrôle contenu unique (§11 · §04 · §08 · schéma §03) | Matrice |
| Contrôle liens | Table |
| Décision page par page | Décision Morris documentée |

**Stop si :** contenu unique sans destination · lien critique cassé · exposition §06.

### Lot 5 — Archivage éventuel

| Action | Preuve |
|--------|--------|
| Uniquement pages GO Morris | Décision + capture |
| Archivage réversible | ID Archive |
| Aucun delete | Confirmation |

**Rollback :** désarchivage immédiat · décision Morris.

### Rollback par lot

---

## 10. Rollback par lot (synthèse)

| Lot | État initial | Action | Rollback | GO Morris |
|-----|--------------|--------|----------|-----------|
| 0 | Inventaire | Lecture seule | N/A | Non |
| 1 | Pages sans bannière | Bannières | Retirer bannières | Non (sauf stop) |
| 2 | Annexes autonomes | Liens Acte VII | Retirer liens | Si conflit bases |
| 3 | Pages absorbées intactes | Redirections | Retirer redirects | Si perte perçue |
| 4 | Pré-archivage | Décisions | Maintenir coexistence | **Oui** pour suite |
| 5 | Pages actives | Archive | Unarchive | **Oui explicite** |

---

## Réserves R-LEG-01..07

## 9. Absences, ambiguïtés et réserves

| ID | Réserve | Impact | Action |
|----|---------|--------|--------|
| R-LEG-01 | §09 absent en Git (P1) | Hors Discovery | OUTSIDE_DISCOVERY_SCOPE |
| R-LEG-02 | §10 sans draft Markdown P0 | Base Notion possible non inventoriée ici | Lot 0 PD-07B |
| R-LEG-03 | État Notion runtime inconnu (IDs, publication réelle) | Risque liens cassés / pages orphelines | Lot 0 obligatoire |
| R-LEG-04 | §06 sensibilité prompt catalog | Exposition méthode | Contrôle confidentialité Lot 2–4 |
| R-LEG-05 | §04 « 15 cycles » Candidate | Confusion baseline | Badge Candidate · baseline v2.4 |
| R-LEG-06 | Drafts Git marqués « non publié » vs espace Notion réel | Divergence possible | Lot 0 inventaire Notion |
| R-LEG-07 | Bases Référentiel et Cycles | Embarquées Acte VII — IDs inconnus | Lot 2 PD-07B |

---

## QA — 37 contrôles

| # | Contrôle | Résultat |
|---|----------|----------|
| Q1 | Branche = `documentation/sfia-discovery-legacy-migration-plan` | **PASS** |
| Q2 | HEAD = `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` (aligné origin/main) | **PASS** |
| Q3 | Aucun commit sur branche projet (0 ahead of main) | **PASS** |
| Q4 | Aucun fichier staged | **PASS** |
| Q5 | 2 NEW migration présents (inventory + plan) | **PASS** |
| Q6 | 2 MOD présents (README + roadmap 07) | **PASS** |
| Q7 | Handoff avant ≥ `43e221b` (PD-06A corrective) | **PASS** |
| Q8 | Inventaire marque cycle PD-07A | **PASS** |
| Q9 | Plan marque cycle PD-07A | **PASS** |
| Q10 | README cycle courant PD-07A | **PASS** |
| Q11 | Roadmap section PD-07A | **PASS** |
| Q12 | Inventaire couvre §00 | **PASS** |
| Q13 | Inventaire couvre §11 | **PASS** |
| Q14 | Réserve R-LEG-01 documentée | **PASS** |
| Q15 | Réserve R-LEG-07 documentée | **PASS** |
| Q16 | Lexique KEEP_ANNEX présent | **PASS** |
| Q17 | Lexique ARCHIVE_CANDIDATE_AFTER_VALIDATION présent | **PASS** |
| Q18 | Lexique MERGED_CONTENT_PRESERVED présent | **PASS** |
| Q19 | DELETE interdit (inventaire + plan) | **PASS** |
| Q20 | Plan contient Lot 0 | **PASS** |
| Q21 | Plan contient Lot 5 | **PASS** |
| Q22 | Plan contient Rollback | **PASS** |
| Q23 | Contrôle confidentialité prompt catalog | **PASS** |
| Q24 | Baseline SFIA v2.4 dans plan | **PASS** |
| Q25 | Statut Candidate dans inventaire | **PASS** |
| Q26 | PD-07B référencé dans plan | **PASS** |
| Q27 | README pointe vers `migration/` | **PASS** |
| Q28 | README indexe inventaire | **PASS** |
| Q29 | README indexe plan | **PASS** |
| Q30 | Gate M7 documentée README | **PASS** |
| Q31 | Gate M8 documentée README | **PASS** |
| Q32 | Roadmap PD-07A migration préparation Git | **PASS** |
| Q33 | Roadmap PD-07B migration Notion futur | **PASS** |
| Q34 | TODO/TBD/FIXME/PLACEHOLDER/Lorem absent (4 fichiers) | **PASS** |
| Q35 | `BatiNova` absent (4 fichiers) | **PASS** |
| Q36 | Inventaire ≥300 lignes · plan ≥300 lignes | **PASS** |
| Q37 | HEAD `9dd9dcf` dans métadonnées des 4 fichiers | **PASS** |

**Verdict QA :** **PASS (37/37)** — soumis à revue ChatGPT + gates Morris M1–M6 ; M7/M8 restants.

---

## Morris decisions remaining

| Décision | Statut |
|----------|--------|
| **ChatGPT re-review** du pack PD-07A (présent handoff) | **À faire** |
| **M7** — GO commit / push / PR branche projet | **En attente** — non exécuté ici |
| **M8** — GO PD-07B Notion (Lot 0+) | **Hors cycle** — futur |
| Archivage page par page (§00–03 · §07) | Reporté PD-07B Lot 4–5 |
| Exposition §06 / conservation annexes | Reporté PD-07B |

**Aucun commit projet dans ce handoff.**

---

## Contenu intégral des livrables (NO synthesis-only)

Les quatre fichiers PD-07A suivent **en entier**.

## FULL CONTENT — `method/sfia-fast-track/documentation/notion/discovery/migration/sfia-discovery-legacy-content-inventory.md`

**Rôle :** Inventaire corpus legacy Notion §00–11 (PD-07A)

```markdown
# Inventaire du corpus legacy Notion — SFIA Discovery (PD-07A)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — inventaire Git pour migration future |
| **Cycle** | PD-07A (préparation Git — migration legacy) |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-legacy-migration-plan` |
| **HEAD / base** | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` |
| **Horodatage** | 2026-07-15 22:30 Europe/Paris (CEST) |
| **Exécution Notion** | **Non** — gate PD-07B future |
| **Verdict destructif** | **Aucun** — aucun delete, aucun archivage exécuté |

---

## 1. Méthode d'inventaire

| Étape | Action | Preuve |
|-------|--------|--------|
| 1 | `git ls-files` et recherche sous `method/sfia-fast-track/documentation/notion/editorial/` | drafts P0 `sfia-notion-00` … `08`, `11` |
| 2 | Recherche §09 / §10 / cas d'usage / Documents de référence | absence de brouillon §09 et §10 dans `editorial/` |
| 3 | Croisement avec Product Design §06 (mapping cible) | `discovery-product-design/06-sfia-discovery-target-information-architecture.md` |
| 4 | Croisement avec index P0 | `notion/editorial/README.md` |
| 5 | Qualification | observation Git · recommandation Candidate · **pas** de décision Notion |

**Périmètre de cet inventaire :** sources **Git** des pages legacy P0 (§00–11).

**Hors inventaire PD-07A :** état runtime Notion (IDs, URLs, pages parentes) — **Lot 0 PD-07B**.

**Convention de qualification :**

| Type | Signification |
|------|---------------|
| **Observation** | Fait vérifié dans Git |
| **Recommandation** | Proposition Candidate pour PD-07B |
| **Décision Morris** | Absente dans ce cycle — gates M7/M8 futures |

---

## 2. Lexique des recommandations futures

| Code | Signification | Delete autorisé ? |
|------|---------------|-------------------|
| **KEEP_PRIMARY** | Conserver dans la navigation primaire (temporaire) | Non |
| **KEEP_ANNEX** | Maintenir comme annexe pédagogique | Non |
| **REDIRECT_TO_DISCOVERY** | Rediriger vers Hub / Actes Discovery | Non |
| **REPLACE_IN_PRIMARY_NAVIGATION** | Remplacer dans le parcours principal par la cible Discovery | Non |
| **MERGED_CONTENT_PRESERVED** | Contenu déjà absorbé dans Actes I–VII — préserver l'accès | Non |
| **ARCHIVE_CANDIDATE_AFTER_VALIDATION** | Candidat à archivage **après** GO Morris PD-07B Lot 5 | Non (archivage réversible seulement) |
| **OUTSIDE_DISCOVERY_SCOPE** | Hors parcours Discovery principal | Non |
| **NEEDS_MORRIS_DECISION** | Ambiguïté ou absence — décision page par page | Non |

**Aucun statut DELETE n'est autorisé.**

---

## 3. Corpus Git legacy — synthèse

| § | Titre | Source Git trouvée | Confiance |
|---|-------|-------------------|-----------|
| §00 | Accueil | Oui — draft éditorial | Observation |
| §01 | Comprendre SFIA | Oui — draft éditorial | Observation |
| §02 | Proposition de valeur | Oui — draft éditorial | Observation |
| §03 | Comment fonctionne un cycle | Oui — draft éditorial | Observation |
| §04 | Cycles, profils et gates | Oui — draft éditorial | Observation |
| §05 | Routage des demandes | Oui — draft éditorial | Observation |
| §06 | Templates, prompts et livrables | Oui — draft éditorial | Observation |
| §07 | Gouvernance et garde-fous | Oui — draft éditorial | Observation |
| §08 | Mettre SFIA en place | Oui — draft éditorial | Observation |
| §09 | Cas d'usage | **Non** — volontairement P1 | Observation + documentation |
| §10 | Documents de référence | **Non** comme draft §10 — prévu comme vue Base | Observation + documentation |
| §11 | Glossaire | Oui — draft éditorial | Observation |

**Index companion (non page §) :**

| Fichier | Rôle |
|---------|------|
| `method/sfia-fast-track/documentation/notion/editorial/README.md` | Inventaire pack P0 Cycle 2 |
| `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-p0-editorial-review-checklist.md` | Checklist QA pack P0 |

---

## 4. Fiches §00–11

### §00 — Accueil

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §00 |
| **Titre** | Accueil |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-00-home-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié (métadonnée du fichier) |
| **Contenu principal** | Orientation 30 s · Git ↔ Notion · trois parcours temps · pointeurs vers §01–08 / §11 |
| **Rôle actuel** | Entrée primaire historique P0 |
| **Niveau** | L0–L1 |
| **Confidentialité** | Public / pédagogique |
| **Liens / dépendances** | Liens vers tous les drafts P0 §01–08 · §11 |
| **Destination Discovery** | Hub Discovery |
| **Risque doublon** | Élevé avec Hub (parcours, Git prime, orientation) |
| **Risque perte** | Faible si Hub couvre l'orientation — vérifier liens entrants Notion en Lot 0 |
| **Recommandation** | **REPLACE_IN_PRIMARY_NAVIGATION** + **REDIRECT_TO_DISCOVERY** |
| **Preuve / absence** | Observation draft · cible Product Design §06 |

### §01 — Comprendre SFIA

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §01 |
| **Titre** | Comprendre SFIA |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-01-understand-sfia-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Définition SFIA · baseline v2.4 · Candidate v2.5 · ChatGPT/Cursor · gouvernance |
| **Rôle actuel** | Page « comprendre » P0 |
| **Niveau** | L1–L2 |
| **Confidentialité** | Pédagogique · mention prompt catalog (orientation, non dump) |
| **Liens** | Vers §02–§04 · glossaire |
| **Destination Discovery** | Acte II + extrait Acte V |
| **Risque doublon** | Élevé avec Actes I–II |
| **Risque perte** | Faible — content absorbed · vérifier formulations uniques en Lot 4 |
| **Recommandation** | **MERGED_CONTENT_PRESERVED** + **REDIRECT_TO_DISCOVERY** |
| **Preuve** | Product Design §06 · Actes I–II mergés |

### §02 — Proposition de valeur

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §02 |
| **Titre** | Proposition de valeur |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-02-value-proposition-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Bénéfices · différenciation · anti-patterns · teaser cas d'usage P1 |
| **Rôle actuel** | Page valeur P0 |
| **Niveau** | L1 |
| **Confidentialité** | Public / pédagogique |
| **Liens** | Accueil · §01 · teaser §09 P1 |
| **Destination Discovery** | Acte I + Acte VI |
| **Risque doublon** | Élevé |
| **Risque perte** | Moyen sur formulations marketing spécifiques — Lot 4 contrôle |
| **Recommandation** | **MERGED_CONTENT_PRESERVED** + **REDIRECT_TO_DISCOVERY** |
| **Preuve** | Product Design §06 · Actes I / VI |

### §03 — Comment fonctionne un cycle

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §03 |
| **Titre** | Comment fonctionne un cycle |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-03-how-a-cycle-works-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Schéma cycle · ChatGPT ↔ Cursor · livrable unique · Candidate v2.5 note |
| **Rôle actuel** | Page cycle pédagogique P0 |
| **Niveau** | L2 |
| **Confidentialité** | Pédagogique |
| **Liens** | §04 · §05 · Acte III futur Discovery |
| **Destination Discovery** | Acte III (schéma) + Acte VII (approfondissement) |
| **Risque doublon** | Moyen–élevé avec Acte III |
| **Risque perte** | Moyen sur schéma unique — reporter si non présent dans Acte III |
| **Recommandation** | **MERGED_CONTENT_PRESERVED** + **KEEP_ANNEX** temporaire si schéma non dupliqué |
| **Preuve** | Product Design §06 · Acte III NovaBuild · Acte VII porte 1–2 |

### §04 — Cycles, profils et gates

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §04 |
| **Titre** | Cycles, profils et gates |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-04-cycles-profiles-gates-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | 15 cycles Candidate v2.5 · 4 profils · gates Morris · Critical jamais implicite |
| **Rôle actuel** | Référentiel cycles pédagogique P0 |
| **Niveau** | L2 |
| **Confidentialité** | **Sensibilité** : mention chemin protégé (Light) · catalogue 15 cycles Candidate — ne pas sur-exposer en Discovery |
| **Liens** | §05 · routing guide · Acte VII |
| **Destination Discovery** | Acte VII — porte Cycles et profils |
| **Risque doublon** | Moyen avec portail Acte VII |
| **Risque perte** | Faible si annexe ou vue Cycles conservée |
| **Recommandation** | **KEEP_ANNEX** (version simplifiée Discovery) + éventuel **ARCHIVE_CANDIDATE_AFTER_VALIDATION** du détail redondant |
| **Preuve** | Acte VII Porte 1 · Product Design §06 |

### §05 — Routage des demandes

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §05 |
| **Titre** | Routage des demandes |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-05-request-routing-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Orientation routing · categories de cycles · renvoi Git |
| **Rôle actuel** | Guide routage pédagogue P0 |
| **Niveau** | L2 |
| **Confidentialité** | **Sensibilité** : orientation seulement — matrice exhaustive restante dans Git |
| **Liens** | routing guide · §04 · §06 |
| **Destination Discovery** | Acte VII — porte Routage |
| **Risque doublon** | Moyen |
| **Risque perte** | Faible si orientation Acte VII complète |
| **Recommandation** | **KEEP_ANNEX** + **REDIRECT_TO_DISCOVERY** |
| **Preuve** | Acte VII Porte 2 |

### §06 — Templates, prompts et livrables

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §06 |
| **Titre** | Templates, prompts et livrables |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-06-templates-prompts-deliverables-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Rôle templates · index prompts · types de livrables |
| **Rôle actuel** | Pont vers prompts/templates |
| **Niveau** | L3 |
| **Confidentialité** | **Élevée** — références prompt catalog · **ne jamais publier** le catalog intégral dans Discovery |
| **Liens** | `prompts/prompt-catalog.md` · `prompts/templates/` · Référentiel |
| **Destination Discovery** | Acte VII — porte Templates (index uniquement) |
| **Risque doublon** | Faible côté Discovery si index seul |
| **Risque perte** | Faible sur index · **risque exposition** si page legacy trop détaillée en Notion |
| **Recommandation** | **KEEP_ANNEX** (index) · contrôle confidentialité Lot 2–4 · **NEEDS_MORRIS_DECISION** si contenu Notion runtime expose plus que l'index |
| **Preuve** | Acte VII Porte 3 · frontière PD-06A R1 |

### §07 — Gouvernance et garde-fous

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §07 |
| **Titre** | Gouvernance et garde-fous |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-07-governance-guardrails-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Git prime · décideur humain · gates · publication governance |
| **Rôle actuel** | Page gouvernance P0 |
| **Niveau** | L2–L3 |
| **Confidentialité** | Pédagogique · ne pas lister protected paths exhaustifs |
| **Liens** | rules-and-guardrails · publication governance · Acte V |
| **Destination Discovery** | Acte V + couche Meta + Acte VII porte Gouvernance |
| **Risque doublon** | Élevé avec Acte V |
| **Risque perte** | Faible |
| **Recommandation** | **MERGED_CONTENT_PRESERVED** + **REDIRECT_TO_DISCOVERY** |
| **Preuve** | Acte V · Product Design §06 |

### §08 — Mettre SFIA en place

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §08 |
| **Titre** | Mettre SFIA en place |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-08-setup-sfia-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Prérequis · repo · outils · commencer petit |
| **Rôle actuel** | Guide setup P0 |
| **Niveau** | L3 |
| **Confidentialité** | Pédagogique / opérationnel léger |
| **Liens** | blueprint repo · Fast Track README |
| **Destination Discovery** | Acte VII — porte Mise en place |
| **Risque doublon** | Moyen |
| **Risque perte** | Moyen si checklists setup absentes d'Acte VII — préserver en annexe |
| **Recommandation** | **KEEP_ANNEX** |
| **Preuve** | Acte VII Porte 5 · Product Design §06 |

### §09 — Cas d'usage

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §09 |
| **Titre** | Cas d'usage |
| **Chemin Git exact** | **Absent** — aucun `sfia-notion-09*` dans `notion/editorial/` |
| **Statut Git** | Non rédigé en P0 Cycle 2 — **P1 futur** documenté |
| **Contenu principal** | Non applicable |
| **Rôle actuel** | Placeholder roadmap / backlog — hors pack publié |
| **Niveau** | — |
| **Confidentialité** | — |
| **Liens documentés** | Mentions dans Accueil · Proposition de valeur · MVP backlog · UX roadmap |
| **Destination Discovery** | Hors parcours principal — création future P1 |
| **Risque doublon** | Nul (contenu absent) |
| **Risque perte** | Nul sur contenu §09 Git — **ne pas inventer** de page |
| **Recommandation** | **OUTSIDE_DISCOVERY_SCOPE** |
| **Preuve absence** | `editorial/README.md` « §09 — P1 » · checklist A5 « §09 absent » · Product Design §06 |

### §10 — Documents de référence

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §10 |
| **Titre** | Documents de référence |
| **Chemin Git exact** | **Absent** comme draft `sfia-notion-10*` dans `notion/editorial/` |
| **Statut Git** | Prévu comme **vue Base Référentiel** (cycle 3 / Notion) — pas un brouillon Markdown P0 Cycle 2 |
| **Contenu principal** | Non matérialisé comme page éditoriale P0 |
| **Rôle actuel** | Cible architecture = base / index |
| **Niveau** | L4 (prévu) |
| **Confidentialité** | Dépend des documents indexés |
| **Liens documentés** | `editorial/README.md` : « §10 — vue Base Référentiel (cycle 3) » · Product Design §06 |
| **Destination Discovery** | Acte VII — porte Documents de référence (+ bases Référentiel / Cycles) |
| **Risque doublon** | Faible |
| **Risque perte** | **Moyen** si une base Notion existe déjà sans draft Git — **Lot 0 PD-07B** inventaire Notion obligatoire |
| **Recommandation** | **KEEP_ANNEX** (si vue/base existe) ou **NEEDS_MORRIS_DECISION** (si page créée hors inventaire Git) |
| **Preuve absence draft** | Aucun fichier `*10*` dans `editorial/` · README P0 |

### §11 — Glossaire

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §11 |
| **Titre** | Glossaire |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-11-glossary-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | ≥20 termes · Candidate / baseline · liens croisés P0 |
| **Rôle actuel** | Annexe vocabulaire |
| **Niveau** | L1–L4 |
| **Confidentialité** | Public / pédagogique |
| **Liens** | Vers §01–§07 |
| **Destination Discovery** | Acte VII — porte Glossaire |
| **Risque doublon** | Faible–moyen (termes aussi dans Actes) |
| **Risque perte** | **Élevé** si archivage sans conservation — **contenu unique dense** |
| **Recommandation** | **KEEP_ANNEX** (prioritaire) |
| **Preuve** | Product Design §06 · Acte VII Porte 7 |

---

## 5. Contenus uniques à préserver

| Contenu | Source | Destination de préservation |
|---------|--------|----------------------------|
| Glossaire ≥20 termes avec liens | §11 | KEEP_ANNEX Acte VII · ne pas archiver sans copie Discovery |
| Tableau 15 cycles Candidate + profils détaillés | §04 | Annexe Acte VII ou Base Cycles — **Candidate badge** |
| Checklists / étapes setup concrètes | §08 | KEEP_ANNEX si absentes d'Acte VII |
| Index rôles templates vs prompts | §06 | Index Acte VII seulement — **pas** le catalog |
| Schéma cycle ChatGPT↔Cursor | §03 | Vérifier presence Acte III ; sinon reporter |
| Formulations anti-patterns valeur | §02 | Lot 4 — comparer Acte I |

---

## 6. Contenus déjà absorbés dans Actes I–VII

| Legacy | Absorbé dans (Git Discovery mergé) | Nature |
|--------|-----------------------------------|--------|
| §00 orientation | Hub Discovery | MERGED_CONTENT_PRESERVED |
| §01 comprendre | Acte I · Acte II | MERGED_CONTENT_PRESERVED |
| §02 valeur | Acte I · Acte VI | MERGED_CONTENT_PRESERVED |
| §03 cycle | Acte III · Acte VII | MERGED_CONTENT_PRESERVED (partiel) |
| §07 gouvernance | Acte V · Acte VII gouvernance | MERGED_CONTENT_PRESERVED |
| §04–§06 · §08 · §11 orientation | Acte VII sept portes | Orientation portail — **pas copie intégrale** |

Sources Discovery : `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-*.md` (PR #196–#200).

---

## 7. Contenus encore utiles comme annexes

| § | Raison |
|---|--------|
| §04 | Référentiel cycles/profils plus détaillé que le portail Acte VII |
| §05 | Guide routage pédagogique |
| §06 | Index templates (version filtrée) |
| §08 | Setup opérationnel |
| §10 | Base / documents de référence (si existe en Notion) |
| §11 | Glossaire complet |

---

## 8. Candidats à archivage **après validation** (Lot 5 seulement)

| § | Condition préalable | Statut proposé |
|---|---------------------|----------------|
| §00 | Hub Discovery stable · redirections OK · liens entrants traités | ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §01 | Contenu unique reporté ou accepté comme obsolète | ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §02 | Idem | ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §03 | Schéma unique préservé ailleurs | ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §07 | Gouvernance Acte V / Meta suffisante | ARCHIVE_CANDIDATE_AFTER_VALIDATION |

**Aucun archivage dans PD-07A.** Aucune suppression.

---

## 9. Absences, ambiguïtés et réserves

| ID | Réserve | Impact | Action |
|----|---------|--------|--------|
| R-LEG-01 | §09 absent en Git (P1) | Hors Discovery | OUTSIDE_DISCOVERY_SCOPE |
| R-LEG-02 | §10 sans draft Markdown P0 | Base Notion possible non inventoriée ici | Lot 0 PD-07B |
| R-LEG-03 | État Notion runtime inconnu (IDs, publication réelle) | Risque liens cassés / pages orphelines | Lot 0 obligatoire |
| R-LEG-04 | §06 sensibilité prompt catalog | Exposition méthode | Contrôle confidentialité Lot 2–4 |
| R-LEG-05 | §04 « 15 cycles » Candidate | Confusion baseline | Badge Candidate · baseline v2.4 |
| R-LEG-06 | Drafts Git marqués « non publié » vs espace Notion réel | Divergence possible | Lot 0 inventaire Notion |
| R-LEG-07 | Bases Référentiel et Cycles | Embarquées Acte VII — IDs inconnus | Lot 2 PD-07B |

---

## 10. Décisions non prises (Morris)

- Archivage page par page (§00–03 · §07) ;
- Conservation longue durée des annexes §04–§06 · §08 · §10–§11 ;
- Traitement d'une éventuelle page §09 ou §10 créée hors Git ;
- Niveau d'exposition Notion pour §06.

**Verdict inventaire :** inventaire §00–11 complet et sourcé — **aucune suppression proposée**.
```


## FULL CONTENT — `method/sfia-fast-track/documentation/notion/discovery/migration/sfia-discovery-legacy-migration-plan.md`

**Rôle :** Plan de migration legacy → Discovery (PD-07A → PD-07B)

```markdown
# Plan de migration legacy → Discovery — SFIA Notion (PD-07A)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — plan Git · non exécuté |
| **Cycle** | PD-07A (préparation Git — migration legacy) |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-legacy-migration-plan` |
| **HEAD / base** | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` |
| **Horodatage** | 2026-07-15 22:30 Europe/Paris (CEST) |
| **Inventaire lié** | [sfia-discovery-legacy-content-inventory.md](sfia-discovery-legacy-content-inventory.md) |
| **Exécution Notion** | **Interdite** dans PD-07A — réservée à PD-07B |

---

## 1. Objectif

Préparer une migration **vérifiable et réversible** des pages Notion legacy P0 (§00–11) vers l'architecture Discovery (Hub + Actes I–VII), sans perte documentaire, sans exposition excessive de méthode interne, et sans suppression.

---

## 2. Principes de migration

| # | Principe |
|---|----------|
| P1 | **Git prime** — les drafts et Actes Discovery restent la référence éditoriale |
| P2 | **Aucune suppression** — pas de DELETE |
| P3 | **Archivage uniquement après GO Morris** — Lot 5 · réversible |
| P4 | **Redirection avant archivage** — préserver les liens entrants |
| P5 | **Contenu unique d'abord** — reporter ou garder en annexe |
| P6 | **Confidentialité** — pas de prompt catalog, protected paths ni routage exhaustif dans le parcours Discovery |
| P7 | **Baseline v2.4** — cycles élargis = Candidate |
| P8 | **Discovery Candidate** — parcours pédagogique, non doctrine validée |
| P9 | **Lots ordonnés** — stop possible à chaque checkpoint |
| P10 | **Observation ≠ décision** — chaque archivage = décision page par page |

---

## 3. État source et état cible

### État source (legacy P0)

- Architecture page §00–11 définie dans Product Vision / Information Architecture / editorial P0.
- Brouillons Git présents pour §00–08 et §11.
- §09 absent (P1) · §10 sans draft Markdown (vue Base prévue).
- Espace Notion runtime : **à inventorier en Lot 0** (PD-07B).

### État cible (Discovery)

```text
Hub → I → II → III → IV → V → VI → VII
          + annexes Acte VII (cycles, routage, templates index, gouvernance,
            setup, documents référence, glossaire)
          + bases Référentiel / Cycles (embeds)
```

Sources cibles mergées (PR #196–#200) sous :

`method/sfia-fast-track/documentation/notion/discovery/editorial/`

---

## 4. Lexique des stratégies

| Code | Signification | Action Notion future |
|------|---------------|----------------------|
| KEEP_PRIMARY | Rester primaire temporairement | Aucune jusqu'à redirection |
| KEEP_ANNEX | Annexe sous / liée à Acte VII | Rattacher ou banner annexe |
| REDIRECT_TO_DISCOVERY | Pointer vers Hub / Acte | Bannière + lien · URL inchangée si possible |
| REPLACE_IN_PRIMARY_NAVIGATION | Retirer du parcours primaire | Nav cible = Discovery |
| MERGED_CONTENT_PRESERVED | Contenu absorbé | Redirection · conserver page jusqu'à Lot 5 |
| ARCHIVE_CANDIDATE_AFTER_VALIDATION | Archive Candidate | Lot 5 seulement · réversible |
| OUTSIDE_DISCOVERY_SCOPE | Hors parcours | Ne pas créer · ne pas forcer |
| NEEDS_MORRIS_DECISION | Ambigu | Stop gate Morris |

**DELETE interdit.**

---

## 5. Matrice complète §00–11

| Legacy | Action proposée | Destination Notion cible | Contenu unique à reporter | Stratégie |
|--------|-----------------|--------------------------|---------------------------|-----------|
| §00 Accueil | Remplacer parcours primaire | Hub Discovery | Aucun critique si Hub complet | REPLACE_IN_PRIMARY_NAVIGATION + REDIRECT_TO_DISCOVERY → ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §01 Comprendre | Fusion déjà réalisée | Acte II · extrait Acte V | Formulations uniques Lot 4 | MERGED_CONTENT_PRESERVED + REDIRECT_TO_DISCOVERY |
| §02 Valeur | Fusion déjà réalisée | Acte I · Acte VI | Anti-patterns Lot 4 | MERGED_CONTENT_PRESERVED + REDIRECT_TO_DISCOVERY |
| §03 Cycle | Déplacer / fusion | Acte III · Acte VII | Schéma cycle si absent Acte III | MERGED_CONTENT_PRESERVED + KEEP_ANNEX temporaire si besoin |
| §04 Cycles/profils | Renommer + simplifier | Acte VII Porte 1 · Base Cycles | Tableau 15 cycles Candidate | KEEP_ANNEX |
| §05 Routage | Réduire | Acte VII Porte 2 | Orientation categories | KEEP_ANNEX + REDIRECT_TO_DISCOVERY |
| §06 Templates/prompts | Index seulement | Acte VII Porte 3 · Référentiel | Index (pas catalog) | KEEP_ANNEX · NEEDS_MORRIS_DECISION si sur-exposition |
| §07 Gouvernance | Fusion | Acte V · Meta · Acte VII Porte 4 | Aucun critique attendu | MERGED_CONTENT_PRESERVED + REDIRECT_TO_DISCOVERY |
| §08 Mise en place | Conserver annexe | Acte VII Porte 5 | Checklists setup | KEEP_ANNEX |
| §09 Cas d'usage | Hors scope | P1 futur | N/A (absent Git) | OUTSIDE_DISCOVERY_SCOPE |
| §10 Docs référence | Conserver / créer vue | Acte VII Porte 6 · Base Référentiel | Index documents | KEEP_ANNEX ou NEEDS_MORRIS_DECISION |
| §11 Glossaire | Conserver annexe | Acte VII Porte 7 | Ensemble des termes | KEEP_ANNEX |

---

## 6. Liens entrants et sortants

### Liens entrants à préserver

| Source probable | Cible legacy | Traitement PD-07B |
|-----------------|--------------|-------------------|
| Favoris · bookmarks · embeds | §00–§08 · §11 | Redirection banner vers Hub / Acte |
| Pages internes legacy croisées | §00 ↔ §11 | Mettre à jour liens vers Discovery **ou** maintenir pages annexes |
| Bases / vues | §04 · §10 | Ne pas casser les embeds |

### Liens sortants à mettre à jour

| Depuis | Vers | Action |
|--------|------|--------|
| Hub Discovery | Annexes §04–§08 · §11 | Liens Acte VII prioraires · fallback legacy si besoin |
| Acte VII | Git / bases | Chemins orientation seulement · pas chemins protégés |
| Pages legacy post-Lot 1 | Hub · Actes | Bannière obligatoire |

**Lot 0** doit lister tous les backlinks Notion avant Lot 1.

---

## 7. Stratégie de redirection

1. **Ne jamais supprimer l'URL** avant redirection et période de coexistence.
2. En tête de page legacy : bloc fixe —

> Cette page fait partie de l'ancien parcours P0. Le parcours recommandé est **SFIA Discovery** (Hub → Actes I–VII). Lien : [Hub].

3. Lien principal vers la destination matrice §5.
4. Conserver le corps legacy jusqu'à Lot 5 (sauf GO Morris contraire).
5. Documenter URL / page ID dans le review pack PD-07B.

---

## 8. Stratégie d'archivage réversible

| Règle | Détail |
|-------|--------|
| Prérequis | Lots 0–4 PASS · GO Morris explicite page par page |
| Méthode | Archivage Notion (ou dossier Archive) — **pas** delete |
| Preuve | Capture avant/après · ID page · date · décideur |
| Restauration | Désarchiver / déplacer hors Archive |
| Contenu unique | Doit déjà être dans Discovery ou annexe conservée |

---

## 9. Ordre d'exécution PD-07B (lots)

### Lot 0 — Pré-check (non destructif)

| Action | Preuve |
|--------|--------|
| Inventaire Notion réel (§00–11 + orphelines) | Table ID · URL · parent · statut publié |
| Captures d'écran Accueil · Hub · Actes | Avant |
| Cartographie liens entrants / sortants | Export ou table manuelle |
| Bases Référentiel et Cycles | ID · vues · embeds Acte VII |
| Écarts vs inventaire Git PD-07A | Liste absences / surplus |

**Stop si :** page critique absente de Discovery · contenu unique sans destination · §06 expose le prompt catalog.

### Lot 1 — Navigation non destructive

| Action | Preuve |
|--------|--------|
| Bannière redirection sur §00–§03 · §07 (et autres selon Lot 0) | Capture |
| Vérifier Hub + parcours I–VII intact | Checklist navigation |
| Aucune page déplacée | Status Notion |

**Rollback :** retirer bannières · restaurer texte original depuis Git / capture.

### Lot 2 — Annexes

| Action | Preuve |
|--------|--------|
| Orienter §04–§08 · §10–§11 vers Acte VII | Liens · nav |
| Vérifier embeds Bases | Vues |
| Filtrer §06 à l'index | Contrôle confidentialité |

**Rollback :** retirer liens ajoutés · restaurer parents.

### Lot 3 — Pages absorbées

| Action | Preuve |
|--------|--------|
| §00–§03 · §07 : redirection claire vers Hub / Actes | Bannière + lien cible |
| Ne pas archiver | Pages toujours accessibles |

**Rollback :** désactiver bannières · restauration copie Git.

### Lot 4 — Validation Morris

| Action | Preuve |
|--------|--------|
| Relecture visuelle parcours Discovery | Checklist |
| Contrôle contenu unique (§11 · §04 · §08 · schéma §03) | Matrice |
| Contrôle liens | Table |
| Décision page par page | Décision Morris documentée |

**Stop si :** contenu unique sans destination · lien critique cassé · exposition §06.

### Lot 5 — Archivage éventuel

| Action | Preuve |
|--------|--------|
| Uniquement pages GO Morris | Décision + capture |
| Archivage réversible | ID Archive |
| Aucun delete | Confirmation |

**Rollback :** désarchivage immédiat · décision Morris.

---

## 10. Rollback par lot (synthèse)

| Lot | État initial | Action | Rollback | GO Morris |
|-----|--------------|--------|----------|-----------|
| 0 | Inventaire | Lecture seule | N/A | Non |
| 1 | Pages sans bannière | Bannières | Retirer bannières | Non (sauf stop) |
| 2 | Annexes autonomes | Liens Acte VII | Retirer liens | Si conflit bases |
| 3 | Pages absorbées intactes | Redirections | Retirer redirects | Si perte perçue |
| 4 | Pré-archivage | Décisions | Maintenir coexistence | **Oui** pour suite |
| 5 | Pages actives | Archive | Unarchive | **Oui explicite** |

---

## 11. Critères d'arrêt (PD-07B)

Stopper et escalader Morris si :

- contenu unique sans destination Discovery / annexe ;
- backlink massif non traitable sans casse ;
- §06 (ou autre) expose prompts / secrets / protected paths ;
- Hub ou Actes I–VII endommagés ;
- Base Référentiel / Cycles cassées ;
- demande de DELETE ;
- divergence Git ↔ Notion non qualifiable.

---

## 12. Contrôles attendus PD-07B

### Contrôles visuels

| # | Contrôle |
|---|----------|
| V1 | Hub Discovery lisible · hero / parcours |
| V2 | Actes I–VII accessibles · navigation précédente / suivante |
| V3 | Bannière legacy visible et non intrusive |
| V4 | Annexes Acte VII ouvrables |
| V5 | Glossaire complet accessible |

### Contrôles de navigation

| # | Contrôle |
|---|----------|
| N1 | Parcours Hub → VII sans cul-de-sac |
| N2 | Liens legacy → Discovery fonctionnels |
| N3 | Favoris URL legacy atterrissent sur page avec redirection |
| N4 | Retour Hub depuis Acte VII |

### Contrôle de confidentialité

| # | Contrôle |
|---|----------|
| C1 | Pas de prompt catalog intégral |
| C2 | Pas de protected paths détaillés |
| C3 | Pas de matrice de routage exhaustive |
| C4 | Pas de secrets / tokens |
| C5 | §06 = index seulement |

### Bases Référentiel et Cycles

| # | Contrôle |
|---|----------|
| B1 | Embeds Acte VII opérationnels |
| B2 | Vues non cassées après Lot 2 |
| B3 | Badge Candidate sur cycles élargis |

---

## 13. Actions explicitement interdites (PD-07A et PD-07B)

| Interdit |
|----------|
| Delete de page |
| Archivage sans GO Morris |
| Force overwrite du corpus Discovery Actes I–VII |
| Publication prompt catalog |
| Promotion SFIA v2.5 en baseline |
| Ouverture PD-08 / PD-09 dans ce cycle |
| Modification doctrine method/core |

---

## 14. Gates Morris PD-07B

| Gate | Objet | Statut initial |
|------|-------|----------------|
| M0 | Lot 0 inventaire Notion PASS | À ouvrir |
| M1 | Lot 1 redirections non destructives | Fermée |
| M2 | Lot 2 annexes + bases | Fermée |
| M3 | Lot 3 pages absorbées | Fermée |
| M4 | Lot 4 validation contenu unique / liens | Fermée |
| M5 | Lot 5 archivage page par page | Fermée · **GO explicite** |
| M6 | Revue pack + preuves | Fermée |
| M7 | Clôture migration · entrée PD-08 | Fermée |

---

## 15. Review pack attendu pour PD-07B

Chaque lot PD-07B doit produire :

- horodatage Europe/Paris ;
- lot exécuté ;
- pages touchées (ID · URL · action) ;
- captures avant / après ;
- écarts vs plan PD-07A ;
- contrôle confidentialité ;
- rollback disponible (oui/non) ;
- décision Morris ;
- verdict lot.

---

## 16. Verdicts possibles (PD-07B)

| Verdict | Condition |
|---------|-----------|
| **LOT PASS — CONTINUE** | Contrôles du lot OK |
| **LOT STOP — MORRIS DECISION** | Ambiguïté / risque |
| **MIGRATION READY FOR ARCHIVE DECISIONS** | Lots 0–4 PASS |
| **MIGRATION COMPLETE — REVERSIBLE ARCHIVE DONE** | Lot 5 selon GO |
| **MIGRATION FAILED — ROLLBACK REQUIRED** | Casse navigation / perte |

---

## 17. Hors périmètre PD-07A

- Toute action Notion ;
- Archivage ou suppression ;
- Modification Actes I–VII ;
- PD-08 QA narrative ;
- PD-09 capitalisation ;
- Création page §09.

---

## 18. Critères d'acceptation PD-07A

| # | Critère | Statut |
|---|---------|--------|
| A1 | Inventaire §00–11 complet | ✓ |
| A2 | §09 et §10 qualifiés malgré absence draft | ✓ |
| A3 | Matrice stratégies sans DELETE | ✓ |
| A4 | Lots 0–5 + rollback | ✓ |
| A5 | Contrôles PD-07B listés | ✓ |
| A6 | Aucune action Notion | ✓ |

**Verdict plan :** plan Candidate prêt pour relecture ChatGPT — **exécution Notion fermée**.
```


## FULL CONTENT — `method/sfia-fast-track/documentation/notion/discovery/editorial/README.md`

**Rôle :** README editorial Discovery — cycle courant PD-07A

```markdown
# SFIA Discovery — Editorial (brouillons lecteur)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillons éditoriaux Discovery |
| **Cycle courant** | PD-07A — migration legacy (préparation Git) |
| **Propriétaire** | Morris |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Branche projet** | `documentation/sfia-discovery-legacy-migration-plan` |
| **HEAD / base** | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` |
| **Horodatage** | 2026-07-15 22:30 Europe/Paris (CEST) |
| **Implémentation Notion** | PD-02B ✓ · PD-03B ✓ · PD-04B ✓ · PD-05B ✓ · PD-06B ✓ · PD-07B futur |
| **Capitalisation méthode** | Non |
| **Migration Notion** | **Non exécutée** — plan Git seulement |

---

## 1. Rôle du dossier

Brouillons **destinés au lecteur final** de SFIA Discovery — source Git stable avant / pendant l'implémentation Notion (cycles PD-nB).

Non substituts au Product Design PD-01 ni aux drafts P0 §00–11.

Le plan de migration legacy (PD-07A) vit dans :

`../migration/`

---

## 2. Séquence narrative (décision Morris)

```text
Hub + Acte I ✓ → Acte II ✓ → Acte III ✓ → Acte IV ✓ → Acte V ✓ → Acte VI ✓ → Acte VII ✓
→ migration legacy (PD-07A en cours) → QA (PD-08) → capitalisation? (PD-09)
```

**Acte II avant Acte III** — le contraste précède le fil rouge NovaBuild.

---

## 3. Inventaire des brouillons Discovery

| # | Fichier | Acte | Statut editorial Git |
|---|---------|------|----------------------|
| 1 | [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md) | Hub | ✓ mergé (PD-02A) |
| 2 | [sfia-discovery-act-01-why-sfia-exists-editorial-draft.md](sfia-discovery-act-01-why-sfia-exists-editorial-draft.md) | I | ✓ mergé (PD-02A) |
| 3 | [sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) | II | ✓ mergé (PD-03A) |
| 4 | [sfia-discovery-act-03-follow-novabuild-editorial-draft.md](sfia-discovery-act-03-follow-novabuild-editorial-draft.md) | III | ✓ mergé (PD-04A) |
| 5 | [sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md) | III.1 | ✓ mergé (PD-04A) |
| 6 | [sfia-discovery-act-03-2-design-and-ux-editorial-draft.md](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md) | III.2 | ✓ mergé (PD-04A) |
| 7 | [sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md) | III.3 | ✓ mergé (PD-04A) |
| 8 | [sfia-discovery-act-03-4-release-and-run-editorial-draft.md](sfia-discovery-act-03-4-release-and-run-editorial-draft.md) | III.4 | ✓ mergé (PD-04A) |
| 9 | [sfia-discovery-act-04-what-sfia-produces-editorial-draft.md](sfia-discovery-act-04-what-sfia-produces-editorial-draft.md) | IV | ✓ mergé (PD-05A · PR #199) |
| 10 | [sfia-discovery-act-05-why-it-works-editorial-draft.md](sfia-discovery-act-05-why-it-works-editorial-draft.md) | V | ✓ mergé (PD-05A · PR #199) |
| 11 | [sfia-discovery-act-06-project-yourself-editorial-draft.md](sfia-discovery-act-06-project-yourself-editorial-draft.md) | VI | ✓ mergé (PD-06A · PR #200) |
| 12 | [sfia-discovery-act-06-1-sme-leader-editorial-draft.md](sfia-discovery-act-06-1-sme-leader-editorial-draft.md) | VI.1 | ✓ mergé (PD-06A · PR #200) |
| 13 | [sfia-discovery-act-06-2-project-manager-po-editorial-draft.md](sfia-discovery-act-06-2-project-manager-po-editorial-draft.md) | VI.2 | ✓ mergé (PD-06A · PR #200) |
| 14 | [sfia-discovery-act-06-3-technical-team-editorial-draft.md](sfia-discovery-act-06-3-technical-team-editorial-draft.md) | VI.3 | ✓ mergé (PD-06A · PR #200) |
| 15 | [sfia-discovery-act-06-4-esn-partner-editorial-draft.md](sfia-discovery-act-06-4-esn-partner-editorial-draft.md) | VI.4 | ✓ mergé (PD-06A · PR #200) |
| 16 | [sfia-discovery-act-07-explore-the-method-editorial-draft.md](sfia-discovery-act-07-explore-the-method-editorial-draft.md) | VII | ✓ mergé (PD-06A · PR #200) |

---

## 4. Inventaire migration (PD-07A)

| # | Fichier | Rôle | Statut |
|---|---------|------|--------|
| 17 | [../migration/sfia-discovery-legacy-content-inventory.md](../migration/sfia-discovery-legacy-content-inventory.md) | Inventaire legacy §00–11 | **PD-07A — revue** |
| 18 | [../migration/sfia-discovery-legacy-migration-plan.md](../migration/sfia-discovery-legacy-migration-plan.md) | Plan PD-07B réversible | **PD-07A — revue** |

---

## 5. Ordre de lecture

1. **Hub** — orientation · parcours · portes persona
2. **Acte I** — pourquoi SFIA existe
3. **Acte II** — comment SFIA organise le projet
4. **Acte III** — fil rouge NovaBuild (hub + III.1 → III.4)
5. **Acte IV** — ce que SFIA produit
6. **Acte V** — pourquoi cela fonctionne
7. **Acte VI** — se projeter (hub + VI.1 → VI.4)
8. **Acte VII** — explorer la méthode
9. **Migration** — inventaire / plan (équipe méthode · pas parcours lecteur)

---

## 6. Positionnement cycles A / B

| Incrément | Editorial Git (A) | Notion (B) |
|-----------|-------------------|------------|
| Hub + I | PD-02A ✓ | PD-02B ✓ |
| Acte II | PD-03A ✓ | PD-03B ✓ |
| Acte III NovaBuild | PD-04A ✓ (PR #198) | PD-04B ✓ |
| Actes IV–V | PD-05A ✓ (PR #199) | PD-05B ✓ |
| Actes VI–VII | PD-06A ✓ (PR #200) | PD-06B ✓ |
| Migration legacy | **PD-07A** (présent — revue) | PD-07B — futur |
| QA narrative | PD-08 — futur | — |

**NovaBuild** = cas pédagogique composite — catégories livrables inspirées d'actifs SFIA vérifiables.

Référence roadmap : [07-sfia-discovery-transformation-roadmap.md](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

---

## 7. Règles éditoriales

Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contract.md`

- 80 % métier / valeur · 20 % fonctionnel (L2)
- Preuve avant promesse · quatre personas · sept portes max (Acte VII)
- Opacité méthodologique sélective
- Migration : **aucune suppression** · archivage seulement après GO Morris

---

## 8. Garde-fous

- Aucune page Notion PD-07B · aucun archivage · aucune suppression
- Aucun prompt catalog · aucune capitalisation baseline
- Drafts P0 legacy **non modifiés** dans ce cycle

---

## 9. Décisions Morris validées

- PD-01 · PD-02A · PD-03A · PD-04A · PD-05A · PD-06A mergés ✓
- PD-02B · PD-03B · PD-04B · PD-05B · PD-06B finalisés Notion ✓
- Acte II avant Acte III ✓
- NovaBuild composite ✓
- PR #199 mergée · PD-05A/B ✓
- PR #200 mergée · merge commit `9dd9dcf` · PD-06A/B ✓

---

## 10. Gates migration (PD-07A)

| Gate | Objet | Statut |
|------|-------|--------|
| **M1** | Inventaire legacy complet et sourcé | En attente |
| **M2** | Mapping legacy → Discovery | En attente |
| **M3** | Stratégie proposée par page | En attente |
| **M4** | Contrôle absence de perte | En attente |
| **M5** | Plan PD-07B réversible | En attente |
| **M6** | Contenu complet exploitable | En attente |
| **M7** | GO commit / push / PR | En attente |
| **M8** | GO PD-07B Notion | Hors cycle — futur |

---

## 11. Critères d'entrée PD-07B

- Inventaire et plan validés Morris · merge Git recommandé · GO exécution Notion
- Dépendance : PD-06A/B ✓
- Lot 0 inventaire Notion réel obligatoire avant toute redirection

---

## 12. Liens

→ [Product Design](../discovery-product-design/README.md) · [Roadmap](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md) · [Migration](../migration/sfia-discovery-legacy-migration-plan.md)
```


## FULL CONTENT — `method/sfia-fast-track/documentation/notion/discovery-product-design/07-sfia-discovery-transformation-roadmap.md`

**Rôle :** Roadmap transformation Discovery — PD-07A/B cycle courant

```markdown
# 07 — Roadmap de transformation — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-15 22:30 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-legacy-migration-plan` |
| **HEAD** | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` |
| **Décision Morris** | Acte II avant Acte III — séquence narrative I → II → III |

---

## 1. Positionnement

| Phase | Contenu |
|-------|---------|
| **PD-01** | Product Design Candidate — mergé ✓ |
| **PD-nA** | Préparation éditoriale Git |
| **PD-nB** | Implémentation Notion L0 |
| **PD-08** | QA narrative et métier |
| **PD-09** | Décision capitalisation — GO Morris |

**Ordre narratif obligatoire :** Hub + Acte I → **Acte II** → Acte III (NovaBuild) → Actes IV–V → Actes VI–VII → **migration** → QA → capitalisation.

**Règle structurante :** chaque incrément de contenu suit **deux cycles distincts** — préparation Git (A) puis implémentation Notion (B).

> La source éditoriale Git doit être validée avant toute implémentation Notion. Le merge préalable est **recommandé** pour les incréments structurants.

---

## 2. Modèle A / B

| Cycle | Périmètre | Gate |
|-------|-----------|------|
| **A — Git** | Brouillons Markdown complets · plans | GO Morris commit/PR/merge |
| **B — Notion** | Matérialisation L0 manuelle | GO Morris implémentation |

---

## 3. Incréments

### PD-01 — Product Design Candidate ✓

Corpus PD-01 — mergé (PR #195).

### PD-02A — Hub + Acte I — préparation Git ✓

Brouillons Hub + Acte I — mergé (PR #196).

### PD-02B — Hub + Acte I — implémentation Notion ✓

| Prérequis | PD-02A mergé (PR #196) ✓ |
| Notion | Hub Discovery créé · Acte I créé |
| Source Git | Corpus PD-02A mergé via PR #196 |
| Statut | **Finalisé** |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

Git reste la **source de vérité** — Notion = couche métier et pédagogique.

### PD-03A — Acte II — préparation Git ✓

Brouillon Acte II — mergé (PR #197).

### PD-03B — Acte II — implémentation Notion ✓

| Prérequis | PD-03A mergé ✓ |
| Notion | Acte II créé |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-04A — Acte III — fil rouge NovaBuild — préparation Git ✓

Brouillons Acte III + III.1–III.4 — mergé (PR #198).

### PD-04B — Acte III — implémentation Notion ✓

| Prérequis | PD-04A mergé (PR #198) ✓ |
| Notion | Pages fil rouge NovaBuild |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-05A — Actes IV et V — préparation Git ✓

Brouillons Acte IV (galerie livrables) · Acte V (garanties et limites) — mergé (PR #199).

| Merge commit | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| Prérequis | PD-04A/B ✓ |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-05B — Actes IV et V — implémentation Notion ✓

| Prérequis | PD-05A mergé (PR #199) ✓ |
| Notion | Pages Actes IV et V |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-06A — Actes VI et VII — préparation Git ✓

Brouillons Acte VI (hub + VI.1–VI.4) · Acte VII (portail méthode) — mergé (PR #200).

| Merge commit | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` |
| Prérequis | PD-05A/B ✓ |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-06B — Actes VI et VII — implémentation Notion ✓

| Prérequis | PD-06A mergé (PR #200) ✓ |
| Notion | Pages persona + portail Acte VII |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-07A — Migration legacy — préparation Git

| Objectif | Inventaire §00–11 · plan de migration réversible · redirections Candidate |
| Prérequis | PD-06A/B ✓ |
| Gate | M1–M6 Morris · absence DELETE · Lot 0 Notion réservé à PD-07B |
| Livrables Git | `discovery/migration/sfia-discovery-legacy-content-inventory.md` · `sfia-discovery-legacy-migration-plan.md` |

*Cycle courant — inventaire et plan en revue.*

### PD-07B — Migration legacy — Notion

| Objectif | Lot 0 inventaire Notion · redirections · annexes · archivage réversible |
| Prérequis | PD-07A mergé · GO Morris |
| Statut | **Futur** |
| Interdit | Delete · archivage sans GO page par page |

### PD-08 — QA narrative et métier

Framework §08 · dépend PD-02B–07B · **non réalisée** à ce stade.

### PD-09 — Décision capitalisation

Évaluer promotion method/core — GO Morris.

---

## 4. Dépendances globales

```text
PD-01 ✓
├── PD-02A ✓ → PD-02B ✓
├── PD-03A ✓ → PD-03B ✓  ← Acte II
├── PD-04A ✓ → PD-04B ✓  ← NovaBuild
├── PD-05A ✓ → PD-05B ✓  ← Actes IV–V
├── PD-06A ✓ → PD-06B ✓  ← Actes VI–VII
├── PD-07A → PD-07B     ← Migration legacy (cycle courant)
├── PD-08 (après 07B)
└── PD-09 (après PD-08)
```

**Séquence :** migration → QA → capitalisation.

---

## 5. Distinction phases (synthèse)

```text
Conception (PD-01) ✓
  → Hub + I (02A ✓ / 02B ✓)
    → Acte II (03A ✓ / 03B ✓)
      → Acte III NovaBuild (04A ✓ / 04B ✓)
        → Actes IV–V (05A ✓ / 05B ✓)
          → Actes VI–VII (06A ✓ / 06B ✓)
            → Migration (07A en cours / 07B)
              → QA (08) → Capitalisation? (09)
```

---

## 6. Mapping renumérotation (référence)

| Ancien ID | Nouveau ID | Contenu |
|-----------|------------|---------|
| PD-03A/B | **PD-04A/B** | Acte III NovaBuild |
| PD-04A/B | **PD-05A/B** | Actes IV et V |
| PD-05A/B | **PD-06A/B** | Actes VI et VII |
| PD-06A/B | **PD-07A/B** | Migration legacy |
| PD-07 | **PD-08** | QA |
| PD-08 | **PD-09** | Capitalisation |
| — | **PD-03A/B** | **Acte II** (nouveau slot) |

---

## 7. Critères capitalisation (PD-09)

Itérations réelles · usage amélioré · gabarits réutilisables · dette acceptable · **GO Morris**

---

## Liens

→ [08 Acceptation](08-sfia-discovery-acceptance-framework.md) · [README](README.md) · [Migration plan](../discovery/migration/sfia-discovery-legacy-migration-plan.md)
```


---

## Fin du review pack PD-07A

**Verdict :** **LEGACY MIGRATION PLAN PREPARED — READY FOR CHATGPT REVIEW**


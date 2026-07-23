# Review pack FULL — SFIA Studio v3 Doctrine PR readiness

## 1. Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 19:02:03 CEST (+0200) |
| Cycle | PR readiness |
| Profil | Critical |
| Sujet | SFIA Studio v3 Knowledge-Driven Doctrine |
| Gates consommés | `GO VALIDATION DOCTRINE — SFIA STUDIO V3 KNOWLEDGE-DRIVEN METHOD` · `GO PR READINESS, PUSH ET DRAFT PR — SFIA STUDIO V3 KNOWLEDGE-DRIVEN DOCTRINE` |
| Repository | mcleland147/sfia-workspace |
| Branche | `method/sfia-studio-v3-doctrine-consolidation` |
| Base | `origin/main` @ `2014e941f548c519d152ebc70d0d4ddad29a6397` |
| Merge-base | `2014e941f548c519d152ebc70d0d4ddad29a6397` |
| HEAD initial | `79a909b57e473a251d67fa0b07c3038895137125` |
| HEAD final | `daf6f7d02bbac09024f6275a793769e66b2b3878` |
| Handoff source (cycle précédent) | commit `6703af1949c4f6fabc0762bcb82dc16e898d85aa` · blob `e6539f46d1a52bc3acd15cec83f79312cb1633ab` |
| Draft PR | [#259](https://github.com/mcleland147/sfia-workspace/pull/259) |
| Push projet | oui |
| Merge | **non exécuté** |

## 2. Local Git Truth Check

- Worktree : `/Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation`
- Branche attendue OK · HEAD contenait `79a909b` · `origin/main` = base attendue
- Pas de lock/merge/rebase · pas de branche distante préalable · pas de PR concurrente
- Untracked uniquement `.tmp-sfia-review/` (review pack)
- Fichiers 30–37 + README suivis

## 3. Décisions Morris tracées

| Id | Décision |
|----|----------|
| D-V3-01 | V3-F01…F15 validées |
| D-V3-02 | Doctrine v3 exclusive Studio |
| D-V3-03 | Aucune coexistence opérationnelle v2.6/v3 |
| D-V3-04 | Réévaluation des actifs existants |
| D-V3-05 | Commit · push · draft PR · handoff autorisés |

## 4. CKC

- Cycle PR readiness : pilote détaillé **absent** (attendu)
- Fallback : carte synthétique PR readiness + garde-fous repository v2.6 pour **exécution Git uniquement**
- Distinction stricte : méthode d'exécution cycle Git ≠ doctrine produit Studio (v3 exclusive)

## 5. Fichiers lus

- Template cycle + framing 01–37 pertinents
- Docs 30–37 + README (intégralement)
- Handoff `6703af…` / `e6539f…`
- UX 87–89 (worktree d1) en contraintes déjà validées
- design/modeled/delivery : **non modifiés**

## 6. Fichiers créés / modifiés (périmètre PR)

### Diff name-status (`origin/main...HEAD`)

```
A	projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md
A	projects/sfia-studio/sfia-v3-framing/31-doctrine-package-and-source-resolution.md
A	projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md
A	projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md
A	projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md
A	projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md
A	projects/sfia-studio/sfia-v3-framing/36-sfia-v2.6-inheritance-and-adaptation-matrix.md
A	projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md
M	projects/sfia-studio/sfia-v3-framing/README.md
```

### Diff stat

```
 ...30-knowledge-context-human-decision-doctrine.md | 120 +++++++++++++++++
 .../31-doctrine-package-and-source-resolution.md   |  98 ++++++++++++++
 ...-living-project-state-and-dynamic-trajectory.md |  83 ++++++++++++
 ...stemology-provenance-and-contradiction-model.md |  70 ++++++++++
 ...ities-reversibility-and-execution-governance.md |  93 ++++++++++++++
 ...tifact-evidence-debt-and-controlled-learning.md |  97 ++++++++++++++
 ...-sfia-v2.6-inheritance-and-adaptation-matrix.md | 109 ++++++++++++++++
 ...-foundations-and-consolidation-decision-pack.md | 142 +++++++++++++++++++++
 projects/sfia-studio/sfia-v3-framing/README.md     |  90 +++++++++++--
 9 files changed, 889 insertions(+), 13 deletions(-)
```

### Commits

```
daf6f7d docs(sfia-studio): validate v3 doctrine as Studio-exclusive
79a909b docs(sfia-studio): consolidate v3 knowledge-driven doctrine
```

## 7. Statut V3-F01…F15

Toutes **VALIDATED** (doctrine Studio). Non MODELED / non IMPLEMENTED runtime / non ADOPTED runtime.

## 8. Règle d'exclusivité v3

Studio consomme exclusivement DoctrinePackage / doctrine v3. ExecutionContract = contrat natif. Export Markdown = adaptateur. v2.6 = historique externe uniquement.

## 9. Traitement v2.6

Matrice `36` = héritage historique · **pas** de lien runtime · categories Inherited/Adapted/Replaced/Not-applicable/Unresolved clarifiées.

## 10. Validations

- `git diff --check` : PASS
- liens Markdown : OK
- scope framing only : OK
- phrases « soumis à validation » / « Morris validation required » / « proposée » pour F01–F15 : retirées
- coexistence opérationnelle comme cible : absente (uniquement interdite)
- claims READY FOR DELIVERY / ADOPTED runtime / baseline globale : absents comme affirmations positives

## 11. Risques

| Risque | Qualification |
|--------|---------------|
| Confusion v2.6/v3 | Mitigé documentairement · dette runtime non auditées |
| Claim prématuré | Anti-claims explicites |
| Doc ≠ runtime | Réserve VAL-R01 |
| Dette future reconception | D-V3-04 assumée |

## 12. Réserves

VAL-R01…R07 (voir `37`) · merge non exécuté · audit dépendances hors périmètre.

## 13. Push

- Branche distante : `origin/method/sfia-studio-v3-doctrine-consolidation`
- SHA distant : `daf6f7d02bbac09024f6275a793769e66b2b3878`
- Local = remote : oui

## 14. Draft PR

| Champ | Valeur |
|-------|--------|
| Numéro | 259 |
| URL | https://github.com/mcleland147/sfia-workspace/pull/259 |
| Titre | docs(sfia-studio): validate v3 knowledge-driven doctrine |
| Base | main |
| Head | method/sfia-studio-v3-doctrine-consolidation |
| Draft | **true** |
| State | OPEN |

### Corps de PR (complet)

```markdown
### Contexte

SFIA Studio adopte une doctrine v3 spécifique, conversationnelle et pilotée par la connaissance, le contexte et la décision humaine.

### Décision Morris

SFIA v3 devient la doctrine exclusive de SFIA Studio.

SFIA v2.6 reste une baseline historique externe à Studio et n'est pas une source runtime, un fallback ou une doctrine active du produit.

Décisions tracées : **D-V3-01** (V3-F01…F15 validées) · **D-V3-02** (exclusivité) · **D-V3-03** (pas de coexistence opérationnelle) · **D-V3-04** (réévaluation des actifs) · **D-V3-05** (push + draft PR autorisés).

### Contenu

- V3-F01 à V3-F15
- DoctrinePackage
- CKC (couche cognitive)
- Living Project State
- trajectoire dynamique
- épistémologie
- provenance
- contradictions
- capacités agents
- réversibilité
- dette
- preuves
- maturité
- apprentissage contrôlé
- matrice d'héritage historique v2.6
- décision pack

### Scope

Documentation framing uniquement (`projects/sfia-studio/sfia-v3-framing/` — docs `30`–`37` + README).

### Non inclus

- code
- modeled
- delivery
- UX
- migration
- activation runtime
- suppression v2.6 du repository
- merge

### Validations

- `git diff --check` : PASS
- liens Markdown internes : OK
- scope : 9 fichiers framing uniquement (8 créés + README modifié)
- anti-claims : pas READY FOR DELIVERY / pas ADOPTED runtime / pas baseline globale / pas coexistence opérationnelle comme cible
- cohérence F01–F15 : toutes **VALIDATED** (doctrine Studio)
- base : `origin/main` @ `2014e941f548c519d152ebc70d0d4ddad29a6397`
- commits : `79a909b` (consolidation) · `daf6f7d` (validation exclusive)

### Réserves

- la PR n'active pas encore v3 dans le runtime
- le code Studio conserve potentiellement des dépendances v2.6 non encore auditées
- design, modeled, delivery et UX devront être réévalués (D-V3-04)
- un audit de dépendances précède toute nouvelle implémentation
- le merge ne signifie pas migration terminée
- merge soumis à GO Morris distinct

### Gate suivant

`GO MORRIS REVIEW — DRAFT PR SFIA STUDIO V3 DOCTRINE`

```

## 15. Actions non exécutées

- merge
- push main
- force push
- modification method/CKC/design/modeled/delivery/code
- audit dépendances v2.6 code
- création schemas
- activation runtime

## 16. État Git final

```
## method/sfia-studio-v3-doctrine-consolidation...origin/method/sfia-studio-v3-doctrine-consolidation
?? .tmp-sfia-review/
```

HEAD final : `daf6f7d02bbac09024f6275a793769e66b2b3878`

## 17. Contenu complet des fichiers du pack (état final HEAD)


### Fichier : `projects/sfia-studio/sfia-v3-framing/README.md`

````markdown
# SFIA Studio v3 — Cadrage doctrinal (VALIDATED)

| Métadonnée | Valeur |
|------------|--------|
| **Statut doctrinal** | Doctrine SFIA Studio v3 **validée par Morris** · intégration sur `main` en attente de merge |
| **Fondations** | **V3-F01 à V3-F15 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** (D-V3-02 · D-V3-03) |
| **SFIA v2.6** | Baseline **historique externe** à Studio · traçabilité d'héritage (`36`) · **jamais** doctrine active / source runtime / fallback Studio |
| **Maturité framing doctrine** | **VALIDATED** (Studio) |
| **Maturité design / modeled / delivery / runtime** | Non réévalués ici · runtime **non migré** · non MODELED/IMPLEMENTED complets · non ADOPTED runtime |
| **Adoption v3 hors Studio** | **Non** |
| **Trajectoire conception** | Option D (co-design borné) — actifs existants soumis à réévaluation (D-V3-04) |
| **Gates consommés** | `GO VALIDATION DOCTRINE — SFIA STUDIO V3 KNOWLEDGE-DRIVEN METHOD` · `GO PR READINESS, PUSH ET DRAFT PR — SFIA STUDIO V3 KNOWLEDGE-DRIVEN DOCTRINE` |
| **Gate suivant** | `GO MORRIS REVIEW — DRAFT PR SFIA STUDIO V3 DOCTRINE` |
| **Anti-claims** | Pas runtime v3 actif · Pas migration terminée · Pas READY FOR DELIVERY · Pas baseline globale v3 · Pas suppression v2.6 du repository · Pas merge dans ce cycle |

## Règles d'exclusivité (D-V3-02 · D-V3-03)

1. SFIA Studio consomme **exclusivement** sa doctrine SFIA v3.
2. Le **DoctrinePackage** v3 est la future source doctrinale canonique de Studio.
3. Les CKC Studio sont résolus via la doctrine v3 et ses sources explicitement autorisées.
4. Le contrat natif d'exécution Studio est l'**ExecutionContract** v3.
5. Un export Markdown Cursor peut exister comme **adaptateur technique**, pas comme doctrine ni SoT.
6. SFIA v2.6 reste **externe** à Studio (historique, traçabilité, méthode repository actuelle jusqu'à migration d'outillage) — **pas** consommée comme doctrine produit.

## Décisions de cadrage validées (D1–D8)

| Id | Décision |
|----|----------|
| D1 | v3 exclusivement Studio-native |
| D2 | ReviewBundle hybride (handoff = export/résilience) |
| D3 / R1 | MD = pourquoi · JSON = quoi · SQL = état |
| D4 / R2 | Enforcement E0–E4 |
| D5 / R3 | SQL transactionnel + audit append-only |
| D6 / R4 | Maturité DOCUMENTED…ADOPTED |
| D7 / R5 | Pas de migration générale historiques |
| D8 | Option D trajectoire validée |

## Décisions de validation doctrinale (D-V3-01…05)

| Id | Décision |
|----|----------|
| D-V3-01 | V3-F01…F15 validées comme fondations Studio v3 |
| D-V3-02 | Doctrine exclusive SFIA v3 pour Studio |
| D-V3-03 | Aucune coexistence doctrinale opérationnelle v2.6/v3 |
| D-V3-04 | Réévaluation des actifs Studio existants (conserver / adapter / remplacer / retirer / preuve historique) |
| D-V3-05 | Commit · push branche · draft PR · handoff autorisés · **pas** de merge |

Détail : document `37`.

## Décisions UX validées (réf. 87–89 — hors main)

CC-D01 · CC-D03 · CC-D05 · CC-D06 · CC-D12 · CC-D13 — contraintes intégrées dans `30` / `34` / `37`.

## Couches et maturité réelle

| Couche | Rôle | Maturité réelle |
|--------|------|-----------------|
| Framing (`sfia-v3-framing`) | Doctrine validée Studio | **VALIDATED** (doctrine) · merge pending |
| Design (`sfia-v3-design`) | Conception fonctionnelle | À réévaluer (D-V3-04) |
| Modeled (`sfia-v3-modeled`) | Contrats / schemas | À enrichir après gate modeled |
| Delivery (`sfia-v3-delivery`) | Implémentation | À réévaluer · **non** = runtime v3 |
| Runtime Studio | Exécution produit | **Non migré** vers doctrine v3 |

## Index framing (01–37)

| # | Fichier |
|---|---------|
| 01–22 | Cadrage consolidé (clôture) |
| 23 | ReviewBundle & lifecycle |
| 24 | Sources MD/JSON (R1) |
| 25 | Enforcement E0–E4 (R2) |
| 26 | SQL & audit (R3) |
| 27 | Maturité & éligibilité (R4) |
| 28 | Projets historiques (R5) |
| 29 | Option D & slices D1–D3 |
| **30** | Doctrine connaissance, contexte, décision humaine (V3-F01, F05) |
| **31** | DoctrinePackage & résolution sources (V3-F03, F07) |
| **32** | Living Project State & trajectoire (V3-F02, F06, F09) |
| **33** | Épistémologie & contradictions (V3-F04, F08) |
| **34** | Agents, réversibilité, stop conditions (V3-F11, F12) |
| **35** | Artefacts, dette, apprentissage, maturité (V3-F10, F13–F15) |
| **36** | Matrice d'héritage historique v2.6 → concepts Studio v3 |
| **37** | Pack fondations & décisions Morris de validation |

## Dette et réserves (courtes)

| ID | Réserve |
|----|---------|
| VAL-R01 | Runtime / design / modeled / delivery non migrés |
| VAL-R02 | Dépendances v2.6 dans le code non auditées (hors périmètre PR) |
| VAL-R03 | Schemas DoctrinePackage / LPS non créés |
| VAL-R04 | UX 87–89 hors `main` |
| VAL-R05 | Onze CKC détaillés absents (fallback silencieux carte synthétique v3) |
| VAL-R06 | Merge soumis à GO Morris distinct |

## Prochaines étapes

1. Review Morris de la draft PR.
2. Merge si GO Morris.
3. Audit dépendances v2.6 dans les actifs Studio.
4. `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3 FOUNDATIONAL CONTRACTS` (après merge / gate dédié).
5. Réévaluation design / delivery / UX (D-V3-04).

## Verdict

**SFIA STUDIO V3 KNOWLEDGE-DRIVEN DOCTRINE VALIDATED — DRAFT PR PENDING MERGE**
````

### Fichier : `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`

````markdown
# 30 — Doctrine connaissance, contexte et décision humaine

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · merge `main` en attente |
| **Fondations** | **V3-F01 · V3-F05 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** |
| **SFIA v2.6** | Externe à Studio · historique / traçabilité uniquement |
| **Maturité fondations** | **VALIDATED** (doctrine Studio) |
| **Maturité runtime** | Non migré |
| **Gates** | Validation doctrine + PR readiness (consommés) |
| **Anti-claims** | Pas runtime actif · Pas ADOPTED runtime · Pas READY FOR DELIVERY · Pas baseline globale |
| **Document** | `30-knowledge-context-human-decision-doctrine.md` |

---

## 1. Doctrine cible (validée)

SFIA Studio v3 est un **système méthodologique conversationnel, gouverné et piloté par la connaissance, le contexte et la décision humaine**. Il transforme une intention en projet structuré, mobilise les connaissances adaptées à chaque cycle, maintient un état projet vivant, propose une trajectoire révisable et prépare des exécutions bornées et auditables.

**Studio-native** · **doctrine exclusive Studio** · **sans autorité d'exécution autonome**.

## 2. Chaîne canonique

```
intention utilisateur
→ compréhension de l'intention
→ résolution du contexte et des sources (DoctrinePackage v3)
→ qualification cycle / profil / blocs
→ résolution CKC (pilote v3-autorisé ou fallback silencieux carte synthétique)
→ analyse et clarification
→ détection des contradictions
→ mise à jour du Living Project State
→ trajectoire (recommandation jusqu'à validation)
→ options et recommandation
→ décision Morris
→ confirmation proportionnée (N1–N3)
→ Execution Contract
→ agent / Cursor / Runtime
→ preuves et ReviewBundle
→ mise à jour de l'état
→ replanification ou capitalisation
```

## 3. V3-F01 — CKC comme couche cognitive canonique (VALIDATED)

### Définition

Un **Cycle Knowledge Contract (CKC)** est un contrat de connaissance associé à un **type de cycle projet**. Il guide le **raisonnement cognitif** (ChatGPT / Studio) après qualification du cycle et **avant** le contrat d'exécution Cursor.

### Fournit

dimensions d'analyse · questions adaptatives · risques · critères de maturité · preuves attendues · anti-claims · entrées/sorties · dépendances · limites · règles de fallback **intra-doctrine v3**.

### Garde-fous (obligatoires)

| Règle | Contenu |
|-------|---------|
| Autorité | **Aucune** autorité d'exécution |
| Décision | **Aucune** décision Morris implicite |
| UI | **Jamais** exposé comme formulaire / checklist / dimensions brutes |
| Couverture | 4 pilotes détaillés (1, 2, 6, 9) · 11 cycles en fallback silencieux |
| Fallback | Carte synthétique / sources **autorisées par DoctrinePackage v3** · **silencieux** UI (CC-D12) · **jamais** bascule doctrinale vers SFIA v2.6 |
| Traçabilité | path · version · statut `detailed`/`synthetic`/`absent` · digest si disponible |
| Invention | **Interdit** d'inventer un CKC détaillé absent |

### Consommation Studio

Résolution **interne** après qualification cycle · influence questions/challenges · trace audit · n'élargit pas le périmètre Cursor · **pas** de chargement de `method/sfia-fast-track/` comme doctrine produit.

## 4. V3-F05 — Chaîne conversation → décision → exécution (VALIDATED)

Alignement **décisions UX validées** (2026-07-23) :

| Décision | Règle doctrinale |
|----------|------------------|
| CC-D01 | Conversation **dominante** + panneau vivant + confirmations structurantes · pas de stepper principal · pas de workspace multi-panneaux MVP |
| CC-D03 | Panneau sticky 360–400@1440 · ~320@1280 · sheet/drawer ≤1024 · contenu = état utile |
| CC-D05 | Observation / Hypothèse / Option / Recommandation / Décision distinctes · gates visibles · métier + ID SFIA secondaire |
| CC-D06 | Confirmations N1 · N2 · N3 · explicite avant mutation |
| CC-D12 | Fallback CKC silencieux (intra-v3) |
| CC-D13 | **Project ≠ Cycle** |

**Lecture UX de framing `11` :** la surface conversationnelle (CC-D01 Option A) prévaut pour Studio ; le cockpit projet reste surface **après** création/reprise de Project (voir `37`).

**Règles :**

- aucune mutation implicite ;
- Execution Contract **uniquement** après décisions nécessaires ;
- phrase conversationnelle ≠ gate ;
- Composer libre toujours disponible hors modal stricte.

## 5. Architecture doctrinale — 7 couches

| # | Couche | Responsabilités | Sorties | Autorité |
|---|--------|-----------------|---------|----------|
| 1 | Governance | Morris, gates, maturité, anti-claims | Décisions, stop | Morris |
| 2 | Knowledge & Context | DoctrinePackage v3, CKC, sources, provenance | Contexte résolu | Cognitive |
| 3 | Project Method | Cycles, profils, lenses, routage | Qualification | Cognitive |
| 4 | Living Project State | État utile persisté | LPS mis à jour | Studio |
| 5 | Trajectory & Decision | Trajectoire, options, reco, HumanDecision | Décision / réserve | Morris |
| 6 | Execution & Agent | ExecutionContract, capacités, réversibilité | Exécution bornée | Cursor/Runtime sous contrat |
| 7 | Evidence & Learning | Preuves, ReviewBundle, REX, dette | Capitalisation | Morris pour promotion |

**Anti-claims couches :** aucune couche n'autorise L5 décisionnel global · aucune couche n'active seule le runtime ADOPTED.

## 6. Boucle de vie projet (native)

cadrage → conception → architecture → UX → backlog → delivery → QA → sécurité → release → RUN readiness → PR readiness → post-merge → capitalisation → évolution doctrine/CKC (sous décision Morris).

Le **merge ne termine pas** automatiquement un projet ni un cycle.

## 7. Relation aux documents antérieurs

Complète : `01`–`29` (D1–D8, Option D, E0–E4, MD/JSON/SQL).
Amende la lecture UX de `11` au profit de CC-D01 (voir `37`).

## 8. Maturité

Fondations V3-F01 / V3-F05 : **VALIDATED** (doctrine Studio) · non MODELED · non IMPLEMENTED runtime.
````

### Fichier : `projects/sfia-studio/sfia-v3-framing/31-doctrine-package-and-source-resolution.md`

````markdown
# 31 — DoctrinePackage et résolution des sources

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · merge `main` en attente |
| **Fondations** | **V3-F03 · V3-F07 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** — DoctrinePackage = future SoT Studio |
| **SFIA v2.6** | Externe · hors allowlist de consommation produit |
| **Maturité fondations** | **VALIDATED** (doctrine) · schéma JSON **non créé** |
| **Gates** | Validation doctrine + PR readiness |
| **Anti-claims** | Pas package exécutable · Pas resolver runtime · Pas ADOPTED runtime |
| **Document** | `31-doctrine-package-and-source-resolution.md` |

> Conceptuel uniquement — **aucun** schéma JSON exécutable dans ce cycle.

---

## 1. V3-F03 — DoctrinePackage (VALIDATED)

### Définition

Unité doctrinale **versionnée**, consommée **uniquement par SFIA Studio** (Studio-native, D1 · exclusivité D-V3-02).

### Contenu conceptuel minimal

| Champ | Rôle |
|-------|------|
| packageId | Identifiant stable |
| version | Semver / label doctrine |
| maturité | DOCUMENTED…ADOPTED (package) — package doctrine actuellement **VALIDATED** côté framing |
| doctrineRoot | Racine documentaire Studio (`projects/sfia-studio/sfia-v3-*`) |
| documentsCanoniques | Index framing (+ références design/modeled quand validés) |
| schemas | Références futures (modeled) — non créés ici |
| ckcAvailable | Paths/statut des CKC (pilotes / synthetic / absent) |
| fallbackRules | Fallback **intra-package** pour CKC absents (carte synthétique autorisée) · **interdit** de basculer vers doctrine v2.6 |
| compatibility | Compatibilité **versions DoctrinePackage** entre elles · **pas** de mode coexistence opérationnelle v2.6/v3 |
| consumerAllowlist | Studio seulement |
| sourcesInterdites | `method/sfia-fast-track/` comme SoT runtime · PGE documentaire v2.6 comme moteur · prompts manuels comme contrat natif |
| digests | checksums path→digest (concept) |
| resolutionRules | Ordre de chargement / pin version |
| failurePolicy | Fail-closed si root/digest manquant |
| historique | Versions antérieures |

### Règles d'exclusivité

1. Studio consomme exclusivement DoctrinePackage v3.
2. Aucune coexistence doctrinale opérationnelle avec v2.6 (D-V3-03).
3. Export Markdown Cursor = adaptateur technique, pas SoT.
4. Consommateur hors allowlist = **interdit**.
5. Pas de schéma exécutable dans ce cycle (impact → modeled).

## 2. Résolution de version

1. Lire pin projet (`doctrineVersion` / digest) si présent.
2. Résoudre DoctrinePackage déclaré.
3. Vérifier digests des docs/CKC référencés.
4. Si absent / mismatch → **stop** (CONTEXT_STALE / DOCTRINE_UNRESOLVED) — pas de silent fallback vers un autre package ni vers v2.6.
5. Fallback CKC de **cycle** (silencieux UI, carte synthétique v3) ≠ fallback de **package doctrine**.

## 3. V3-F07 — Provenance et hiérarchie des sources (VALIDATED)

### Hiérarchie d'autorité (haute → basse)

```
preuves Git et runtime
> décisions Morris
> état projet validé
> doctrine Studio v3 (package piné)
> CKC (sources autorisées package)
> documents projet non validés
> contexte conversationnel
> recommandations
> hypothèses
```

SFIA v2.6 **n'apparaît pas** dans la hiérarchie de consommation Studio. Elle peut apparaître uniquement comme **métadonnée d'origine** d'un concept hérité (voir `36`).

### Attributs de provenance

sourceId · type · autorité · fraîcheur · digest/path · acteur · timestamp · statut (active/stale/superseded) · originHeritage (optionnel, historique).

### Conflits

Un conflit **haut vs bas** : retenir le haut, signaler contradiction (voir `33`).
Un conflit **même niveau** : gate Morris si structurant.

### Ce qui n'est pas SoT

raisonnement interne brut · scores non explicables · chat seul · CKC comme autorisation · documents `method/` non pinés dans DoctrinePackage.

## 4. Alignement D3 / R1

MD = pourquoi · JSON = quoi · SQL = état — **conservé**.
DoctrinePackage orchestre **quelles** defs MD/JSON sont pinées ; SQL porte l'état runtime.

## 5. Maturité

V3-F03 / V3-F07 : **VALIDATED** (doctrine) · manifest/resolver : **non MODELED / non IMPLEMENTED**.
````

### Fichier : `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`

````markdown
# 32 — Living Project State et trajectoire dynamique

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · merge `main` en attente |
| **Fondations** | **V3-F02 · V3-F06 · V3-F09 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** |
| **SFIA v2.6** | Externe · non représentée comme mode doctrinal actif du LPS |
| **Maturité fondations** | **VALIDATED** (doctrine) · persist runtime non migrée |
| **Anti-claims** | Pas LPS runtime ADOPTED · Pas trajectoire auto-exécutée |
| **Document** | `32-living-project-state-and-dynamic-trajectory.md` |

---

## 1. V3-F02 — Living Project State (VALIDATED)

### Définition

**État fonctionnel central** du Project, visible dans le panneau vivant (CC-D03) et persisté de façon sélective (D5 / SQL + audit) — **sous doctrine v3 exclusive**.

### Contenu minimal

| Bloc | Contenu |
|------|---------|
| Identité | projectId, nom, doctrinePackageRef (version/digest pinés) |
| Objectifs / contexte / périmètre | Validables, tagués |
| Parties prenantes | Acteurs |
| Trajectoire | Réf. ProjectTrajectory |
| Cycle actif / terminés | Type, statut · Project ≠ Cycle (CC-D13) |
| Observation / Hypothèse / Option / Recommandation / Décision | Épistémologie `33` |
| Gates | Ouverts / passés |
| Risques / réserves / dette | Dont DebtItem |
| Preuves / livrables / actions | Liens Evidence |
| Prochaine étape | Une phrase |
| Historique qualifié | Changements d'état |

**Interdit :** modes LPS du type « v2.6 / coexistence / fallback doctrinal » — le LPS Studio est **v3-only**.

### Persister

identité · pin doctrine · décisions validées · gates · trajectoire validée · réserves acceptées · preuves référencées · digests contexte · audit events.

### Ne pas persister

raisonnement interne brut · scores non explicables · recommandations **comme** décisions · hypothèses **comme** faits · prompts temporaires non nécessaires à l'audit · dimensions CKC brutes · copies de doctrine v2.6.

### Affichage UX

Panneau = état utile seulement · **CKC non exposé** · Project et Cycle **séparés** (CC-D13).

## 2. V3-F06 — ProjectTrajectory (VALIDATED)

### Contenu

cycles proposés · actifs · clôturés · dépendances · conditions d'entrée/sortie · branches possibles · gates · réserves · motifs de replanification.

### Règle

Une trajectoire est une **recommandation** tant qu'elle n'est pas **validée** par décision Morris / humaine explicite.

## 3. V3-F09 — Replanification gouvernée (VALIDATED)

### Boucle

```
événement → analyse d'impact → trajectoire révisée (recommandation)
→ options → recommandation → gate Morris si structurant
→ mise à jour validée du LPS / trajectoire
```

### Événements

changement de périmètre · nouvelle décision · décision annulée · risque · test en échec · dépendance modifiée · preuve invalide · nouvelle contrainte · cycle bloqué.

### Anti-claims

- replanification automatique **sans** gate si structurante = interdit ;
- événement ≠ décision ;
- replanification **ne** recharge **pas** une doctrine v2.6.

## 4. Maturité

V3-F02 / F06 / F09 : **VALIDATED** (doctrine) · schemas / persist runtime : non créés.
````

### Fichier : `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`

````markdown
# 33 — Épistémologie, provenance et contradictions

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · merge `main` en attente |
| **Fondations** | **V3-F04 · V3-F08 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** |
| **Maturité fondations** | **VALIDATED** (doctrine) |
| **Anti-claims** | Phrase utilisateur ≠ décision · Recommandation ≠ exécution |
| **Document** | `33-epistemology-provenance-and-contradiction-model.md` |

---

## 1. V3-F04 — Épistémologie explicite (VALIDATED)

| Type | Définition | Source typique | Autorité | Transition | Persistance | UX | Preuve | Anti-claim |
|------|------------|----------------|----------|------------|-------------|-----|--------|------------|
| Observation | Fait constaté | Git, runtime, humain | Faible→moyenne | → Fact si corroboré | Oui | Tag Observation | Capture / log | ≠ Décision |
| Fact | Observation corroborée | Multi-sources | Moyenne | — | Oui | Tag Fact | Digests | ≠ GO |
| Hypothesis | Supposition à valider | GPT / humain | Aucune | → Fact / retirée | Oui (statut) | Tag + Valider/Corriger | — | ≠ Décision |
| Option | Choix possible | GPT / humain | Aucune | → sélection | Oui | Carte Option | — | ≠ Décision |
| Recommendation | Proposition non exécutable | GPT | Aucune | → Decision si validée | Oui | Tag Recommandation | Justification | ≠ exécution |
| HumanDecision | Acte explicite Morris/humain | Humain | **Haute** | — | **Oui** | Tag Décision + historique | Gate + confirmation | — |
| Reserve | Limitation connue | Audit / QA | Moyenne | Levée documentée | Oui | Tag Réserve | — | ≠ blocage seul |
| Risk | Menace plausible | Analyse | Moyenne | Mitigation / acceptation | Oui | Tag Risque | — | ≠ fait |
| Evidence | Preuve référencée | Git / test / capture | Haute si vérifiable | — | Lien | Liste preuves | Path/digest | — |
| Claim | Affirmation de maturité/statut | Document / UI | Selon preuve | — | Trace | Discret | Preuve obligatoire | Claim sans preuve interdit |

### Règles cardinales

1. Une phrase utilisateur **ne devient pas** automatiquement une HumanDecision.
2. Une Recommendation **reste** une Recommendation.
3. Une Option **≠** Décision.
4. Contradiction → signalement (`V3-F08`) avant claim.
5. Alignement CC-D05 : labels texte, pas couleur seule.
6. Une source v2.6 historique **n'est pas** un Fact de doctrine Studio active.

## 2. Provenance (lien V3-F07)

Chaque item épistémique porte : origin (gpt|human|system|git|runtime) · status · sourceRefs · updatedAt · authorityLevel.

## 3. V3-F08 — Détection des contradictions (VALIDATED)

### Catégories

| Code | Catégorie |
|------|-----------|
| C-SRC | source contre source |
| C-DEC-IMP | décision contre implémentation |
| C-DOC-RT | doctrine contre runtime |
| C-SCOPE | périmètre contre action |
| C-REC-EV | recommandation contre preuve |
| C-MAT-CLAIM | maturité contre claim |
| C-TRAJ-DEP | trajectoire contre dépendance |

### Attributs

sévérité (info / warning / blocking) · sources · objet impacté · blocante? · action · gate · réserve.

### Effets

- blocking → Stop Condition Engine (`34`) ;
- warning → réserve visible ;
- info → trace audit.

**Cas particulier D-V3-03 :** toute tentative de charger v2.6 comme doctrine Studio active est une contradiction **C-DOC-RT** / gouvernance → stop.

## 4. Maturité

V3-F04 / F08 : **VALIDATED** (doctrine) · schemas : non créés.
````

### Fichier : `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md`

````markdown
# 34 — Capacités agents, réversibilité et gouvernance d'exécution

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · merge `main` en attente |
| **Fondations** | **V3-F11 · V3-F12 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** · ExecutionContract = contrat natif |
| **Maturité fondations** | **VALIDATED** (doctrine) · enforcement runtime non migré |
| **Anti-claims** | Pas L5 décisionnel · Pas décision Morris automatisée |
| **Document** | `34-agent-capabilities-reversibility-and-execution-governance.md` |

---

## 1. V3-F11 — AgentCapability (VALIDATED)

| Acteur | Lecture | Écriture | Autonomie max | Protégé | Escalade |
|--------|---------|----------|---------------|---------|----------|
| Morris | Tout | Décisions / gates | Décision | — | — |
| Studio | DoctrinePackage v3 pinée, LPS, outils | État borné | Propose / prepare | Mutations | Gate humain |
| ChatGPT | Contexte fourni (v3) | Aucune mutation repo | Raisonne / recommande | — | Morris |
| Cursor | Selon ExecutionContract | Fichiers autorisés | L0–L4 borné | Protected paths | Stop / Morris |
| Runtime | SQL / tools | Mutations confirmées | Exécute contrat | Confirmations N2–N3 | Fail-closed |
| Connecteurs / validateurs | Spécifique | Preuves | Lecture / check | Secrets | Studio |

### Attributs AgentCapability

role · readCaps · writeCaps · tools · scope · autonomyLevel · protectedActions · evidenceProduced · escalationRules · rollback · limits.

**Interdit :** L5 décisionnel global · décision Morris automatisée · élargissement via CKC · chargement doctrine v2.6 comme capacité de lecture produit.

## 2. V3-F12 — Taxonomie des actions et réversibilité (VALIDATED)

| Action | L max | E typique | Confirmation | Gate | Réversibilité |
|--------|-------|-----------|--------------|------|---------------|
| read | L1 | E0–E1 | — | — | N/A |
| simulate | L2 | E1 | légère | — | totale |
| propose | L2 | E1 | — | — | totale |
| generate temporary artifact | L2–L3 | E1–E2 | N1 | — | haute |
| local write | L3 | E2–E3 | N1–N2 | selon effet | jusqu'à commit |
| commit | L3 | E3 | N2 | humain | amend/revert borné |
| push | L3 | E3–E4 | N3 | Morris | force interdit |
| PR | L3 | E3 | N3 | Morris | close PR |
| merge | L3 | E4 | N3 | Morris | revert post-merge |
| delete (branche/fichier critique) | L3 | E4 | N3 | Morris | souvent irréversible |
| doctrine change | L2 doc | E3 | N2–N3 | Morris | versioning |
| baseline promotion | — | E4 | N3 | **Morris only** | quasi irréversible |

Alignement CC-D06 (N1–N3) et framing 25 (E0–E4).

**Note :** l'**ExecutionContract** v3 est le contrat natif d'exécution Studio. Un export Markdown Cursor est un **adaptateur**, pas la doctrine.

## 3. Routage multi-dimensionnel

```
intention → cycle candidat → profil → lenses → CKC (package v3)
→ risques → niveau de preuve → gates → trajectoire
```

Propriétés : révisable · explicable · auditable · non irréversible · multi-candidats · clarification · stop.

Le routage **ne** consulte **pas** SFIA v2.6 comme source de qualification produit.

## 4. Lenses transverses

sécurité · RSSI · RGPD · accessibilité · performance · UX/UI · FinOps · GreenOps · DevOps · release · observabilité · RUN readiness · capitalisation.

Ces lenses sont des **concepts incorporés/adaptés dans la doctrine v3** (origine historique documentée dans `36`). Activation contextuelle · effet sur raisonnement/preuves/gates · **aucune** autorité de décision · **aucune** dépendance runtime vers `method/`.

## 5. Stop Condition Engine

| Code | Condition | Sévérité | Effet |
|------|-----------|----------|-------|
| SC-SRC | source canonique absente | blocking | stop + message |
| SC-CONTRA | contradiction critique | blocking | gate |
| SC-CONF | confiance / maturité insuffisante | warning/blocking | clarification |
| SC-DEC | décision Morris absente | blocking | attente |
| SC-SCOPE | périmètre non stabilisé | blocking | bornage |
| SC-EVID | preuve insuffisante | blocking | QA |
| SC-IRR | action irréversible sans N3 | blocking | refuse |
| SC-PROT | chemin protégé | blocking | refuse |
| SC-CAP | capacité agent insuffisante | blocking | escalate |
| SC-MAT | maturité incompatible claim | blocking | anti-claim |
| SC-ART | contrat artefact incomplet | blocking | refuse passage |
| SC-GIT | Git incohérent | blocking | Truth Check |
| SC-TRAJ | action hors trajectoire | warning/blocking | replanif |
| SC-FB | fallback CKC intra-v3 non défini | blocking | stop |
| SC-DOC-EXCL | tentative de doctrine v2.6 active | blocking | refuse (D-V3-03) |

Message utilisateur : métier clair · ID SFIA secondaire (CC-D05).

## 6. Maturité

V3-F11 / F12 : **VALIDATED** (doctrine) · ActionPolicy / runtime enforce : non IMPLEMENTED.
````

### Fichier : `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`

````markdown
# 35 — Artefacts, preuves, dette et apprentissage contrôlé

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · merge `main` en attente |
| **Fondations** | **V3-F10 · V3-F13 · V3-F14 · V3-F15 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** |
| **Maturité fondations** | **VALIDATED** (doctrine) |
| **Anti-claims** | Pas promotion auto · Pas apprentissage opaque · Pas ADOPTED runtime |
| **Document** | `35-artifact-evidence-debt-and-controlled-learning.md` |

---

## 1. V3-F14 — Artifact Completeness Contract (VALIDATED)

| Champ | Contenu |
|-------|---------|
| type d'artefact | doc / schéma / preuve / review pack / handoff / Execution Contract |
| contenu obligatoire | sections listées |
| sources | refs (DoctrinePackage / Git) |
| preuves | liens |
| statut | documented / validated / modeled / implemented / adopted (selon objet) |
| réserves | ouvertes |
| consommateur | Studio / Morris / Cursor |
| critères d'acceptation | checklist |
| passage cycle suivant | conditions |

**Règle conservée :** fichier créé = complet · modification = sections complètes ou diff exploitable · synthèse seule ≠ livrable consommable · REVIEW PACK INCOMPLETE si contenu manquant.

## 2. Preuves et ReviewBundle

Alignement D2 : ReviewBundle hybride · handoff = export/résilience · review pack = preuve de cycle.
Preuves Git/runtime > narration (V3-F07).

## 3. V3-F10 — DebtItem (VALIDATED)

| Attribut | Contenu |
|----------|---------|
| type | technique · fonctionnelle · UX · documentaire · méthodologique · sécurité · donnée · preuve · gouvernance |
| source / description / impact / criticité | — |
| effort estimatif / échéance | optionnel |
| condition de remboursement | — |
| propriétaire / statut | open · accepted · paid · deferred |
| acceptation Morris | si structurante |
| preuve de clôture | obligatoire |

Dette **pilotée**, pas oubliée.

Dette structurante post-validation (exemples) : dépendances v2.6 non auditées dans le runtime · schemas non créés · UX 87–89 hors main · onze CKC absents.

## 4. V3-F13 — Apprentissage contrôlé (VALIDATED)

```
projet / cycle → REX → observation récurrente
→ proposition d'évolution → simulation / validation
→ décision Morris → nouvelle version doctrine ou CKC (DoctrinePackage)
```

### Interdit

- modification automatique d'un CKC ;
- modification automatique de la doctrine ;
- apprentissage opaque ;
- promotion automatique de maturité ;
- décision fondée uniquement sur fréquence statistique ;
- réintroduction silencieuse de v2.6 comme doctrine Studio.

## 5. V3-F15 — Maturité distribuée et anti-claims (VALIDATED)

Niveaux : DOCUMENTED · VALIDATED · MODELED · IMPLEMENTED · ADOPTED.

Appliqués à : package · fondation · contrat · schéma · CKC · composant runtime.

### État actuel (précis)

| Objet | Maturité |
|-------|----------|
| Fondations V3-F01…F15 | **VALIDATED** (doctrine Studio) |
| Pack framing knowledge-driven | **VALIDATED** · merge pending |
| DoctrinePackageManifest / schemas | non MODELED |
| Runtime Studio | non IMPLEMENTED sous doctrine v3 · non ADOPTED |
| CKC pilotes généraux | candidats repository · résolution Studio via package futur |
| Adoption v3 hors Studio | **Non** |

### Règles

1. Implémentation locale ≠ adoption.
2. Maturité globale limitée par composants **obligatoires**.
3. Aucune promotion automatique.
4. Adoption **uniquement** décision Morris.
5. Claim toujours supporté par preuve.
6. Vocabulaire « IMPLEMENTED CANDIDATE » de slices delivery ≠ V3-IMPLEMENTED plateforme.
7. Validation doctrine **≠** MODELED / IMPLEMENTED / ADOPTED runtime.

## 6. Maturité de ce document

V3-F10 / F13 / F14 / F15 : **VALIDATED** (doctrine).
````

### Fichier : `projects/sfia-studio/sfia-v3-framing/36-sfia-v2.6-inheritance-and-adaptation-matrix.md`

````markdown
# 36 — Matrice d'héritage historique SFIA v2.6 → concepts Studio v3

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Matrice **historique et de conception** · doctrine Studio v3 **validée** · **pas** de lien runtime |
| **Rôle** | Documenter l'origine et le traitement des concepts · **jamais** une dépendance active |
| **Doctrine produit Studio** | **SFIA v3 exclusive** (D-V3-02 · D-V3-03) |
| **SFIA v2.6** | Baseline historique **externe** · hors consommation produit Studio |
| **Fondations liées** | V3-F01…F15 **VALIDATED** |
| **Anti-claims** | Pas coexistence opérationnelle · Pas fallback doctrinal v2.6 · Pas SoT `method/` pour Studio |
| **Document** | `36-sfia-v2.6-inheritance-and-adaptation-matrix.md` |
| **Complète** | framing `12` · `20` · décisions D-V3-* |

---

## 0. Interprétation des catégories (obligatoire)

| Catégorie | Signification pour Studio v3 |
|-----------|------------------------------|
| **Inherited** | Le principe a été **incorporé** dans la doctrine v3 ; Studio l'applique via v3, **pas** en chargeant v2.6 |
| **Adapted** | La doctrine v3 possède désormais **sa propre formulation** ; l'origine est historique |
| **Replaced** | Le mécanisme v2.6 **n'est pas utilisé** par Studio ; un mécanisme v3 le remplace |
| **Not-applicable** | Exclu du produit Studio |
| **Unresolved** | Sujet encore non arbitrable sans GO Morris supplémentaire |

Cette matrice **ne crée aucun** lien runtime vers v2.6.

---

## 1. Matrice

### Inherited

| Élément | Justification Studio v3 |
|---------|-------------------------|
| Git source de vérité | Incorporé (D3 / OM) |
| Morris décide | Incorporé |
| Protected paths | Incorporé |
| Absence de décision automatique | Incorporé (anti-L5 décisionnel) |
| Complétude des livrables | Incorporé (Artifact Completeness) |
| PR readiness | Incorporé (cycle projet) |
| Post-merge | Incorporé |
| Capitalisation | Incorporé |
| Review handoff (preuve externe / résilience) | Incorporé (D2 hybride) |

### Adapted

| Élément | Formulation Studio v3 |
|---------|----------------------|
| Quinze cycles | Qualification dynamique post-intention |
| Profils Light/Standard/Critical/Capitalization | UI + LPS |
| Blocs transverses | **Lenses** contextuelles (`34`) |
| Gates / stop conditions | UI + Stop Condition Engine |
| L0–L5 | Couplés E0–E4 · L5 global interdit |
| Rôles ChatGPT / Cursor | Boucle Studio-native |
| Knowledge Layer / source routing | Allowlist DoctrinePackage v3 |
| Review pack | Contenu + Artifact Completeness |
| Preuve et verdict | EvidenceLink + anti-claims |

### Replaced

| Élément historique v2.6 | Remplacement Studio v3 |
|------------------------|------------------------|
| PGE documentaire comme moteur principal | **ExecutionContract** (+ export Markdown Cursor = adaptateur) |
| Démarrage explicite par cycle | Démarrage par **intention** puis qualification dynamique |
| Doctrine `method/` comme SoT runtime direct | **DoctrinePackage** Studio-only |
| Coexistence / dual-run doctrinal opérationnel | **Exclusivité v3** (D-V3-03) — dual-run produit interdit |

### Not applicable

| Élément | Raison |
|---------|--------|
| Consommation indiscriminée de toute la doctrine générale | Studio-native D1 + exclusivité |
| Dépendance obligatoire aux prompts manuels seuls | Surface conversationnelle Studio |
| L5 global | Interdit |
| Migration générale des historiques | D7 / R5 |
| Promotion automatique de maturité | V3-F15 |
| Fallback doctrinal Studio → v2.6 | D-V3-03 |
| Chargement v2.6 dans mémoire fonctionnelle / moteur de contexte Studio | D-V3-03 |

### Unresolved — encore ouverts

| ID | Sujet | Note |
|----|-------|------|
| U2 | Root Git exact du DoctrinePackage | Après modeled |
| U3 | Priorité slices Option D D2/D3 | Après audit dépendances |
| U4 | Fusion docs UX 87–89 vers `main` | Gate doc dédié |
| U5 | Vocabulaire IMPLEMENTED CANDIDATE vs maturité plateforme | Clarification delivery |

**Résolu pour doctrine Studio :** U1 (entrée UX) — CC-D01 Option A prévaut ; amendement formel du texte framing `11` reste une action documentaire aval.

## 2. Ce qui n'est pas hérité tel quel

- Questionnaire CKC visible ;
- Claim ADOPTED sans GO ;
- Dual-run doctrinal prolongé ;
- v2.6 comme doctrine active Studio.

## 3. Réévaluation des actifs (D-V3-04)

Tout actif Studio existant (fonctionnel, UX, modeled, delivery, runtime) doit être classé :

conservé (conforme) · adapté · remplacé · retiré · preuve historique uniquement.

Cette classification **n'est pas** exécutée dans la présente PR.

## 4. Maturité

Matrice : **VALIDATED** comme document d'héritage de la doctrine Studio · **n'active pas** v2.6 · **n'altère pas** les fichiers `method/**`.
````

### Fichier : `projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md`

````markdown
# 37 — Pack fondations V3-F01…F15 et décisions Morris de validation

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Pack doctrinal **VALIDATED** pour SFIA Studio · merge `main` en attente |
| **Fondations** | **V3-F01…F15 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** (D-V3-02 · D-V3-03) |
| **Maturité** | Doctrine **VALIDATED** · non MODELED complet · non IMPLEMENTED runtime · non ADOPTED runtime |
| **Adoption v3 hors Studio** | **Non** |
| **Gates consommés** | `GO VALIDATION DOCTRINE — SFIA STUDIO V3 KNOWLEDGE-DRIVEN METHOD` · `GO PR READINESS, PUSH ET DRAFT PR — SFIA STUDIO V3 KNOWLEDGE-DRIVEN DOCTRINE` |
| **Gate suivant** | `GO MORRIS REVIEW — DRAFT PR SFIA STUDIO V3 DOCTRINE` |
| **Anti-claims** | Pas merge · Pas runtime migré · Pas READY FOR DELIVERY · Pas baseline globale · Pas suppression v2.6 du repo |
| **Document** | `37-studio-v3-foundations-and-consolidation-decision-pack.md` |

---

## 1. Décisions Morris consommées lors de la validation doctrinale

| Id | Décision validée | Impact | Action future | Gate futur | Hors périmètre PR |
|----|------------------|--------|---------------|------------|-------------------|
| **D-V3-01** | V3-F01…F15 validées comme fondations Studio v3 | Statut DOCUMENTED→**VALIDATED** doctrine | Enrichir modeled | Enrichissement modeled | Schemas |
| **D-V3-02** | Doctrine v3 **exclusive** pour Studio | Remplace toute coexistence opérationnelle | DoctrinePackage pin runtime | Modeled + delivery | Activation runtime |
| **D-V3-03** | Aucune coexistence doctrinale opérationnelle v2.6/v3 | v2.6 = historique/externe uniquement | Retrait dépendances v2.6 du fonctionnement Studio | Audit dépendances | Audit code |
| **D-V3-04** | Réévaluation des actifs existants | Conserver / adapter / remplacer / retirer / preuve historique | Cycles reconception possibles | Par couche | Refonte dans cette PR |
| **D-V3-05** | Commit · push · draft PR · handoff autorisés | Intégration Git | Review Morris · merge séparé | `GO MORRIS REVIEW` puis GO merge | Merge |

### Conséquences opérationnelles explicitement autorisées (futures)

- retrait futur de toutes les dépendances v2.6 du **fonctionnement** Studio ;
- nouvelle conception autorisée si nécessaire ;
- audit de dépendances v2.6 **requis** avant nouvelle implémentation ;
- merge restant soumis à un **GO Morris distinct**.

## 2. Fondations V3-F01…F15 — statut

| ID | Titre | Doc | Statut Morris |
|----|-------|-----|---------------|
| V3-F01 | CKC couche cognitive | `30` | **VALIDATED** |
| V3-F02 | Living Project State | `32` | **VALIDATED** |
| V3-F03 | DoctrinePackage | `31` | **VALIDATED** |
| V3-F04 | Épistémologie | `33` | **VALIDATED** |
| V3-F05 | Chaîne conversation→exécution | `30` | **VALIDATED** |
| V3-F06 | ProjectTrajectory | `32` | **VALIDATED** |
| V3-F07 | Provenance / hiérarchie sources | `31` | **VALIDATED** |
| V3-F08 | Contradictions | `33` | **VALIDATED** |
| V3-F09 | Replanification gouvernée | `32` | **VALIDATED** |
| V3-F10 | DebtItem | `35` | **VALIDATED** |
| V3-F11 | AgentCapability | `34` | **VALIDATED** |
| V3-F12 | Réversibilité actions | `34` | **VALIDATED** |
| V3-F13 | Apprentissage contrôlé | `35` | **VALIDATED** |
| V3-F14 | Artifact Completeness | `35` | **VALIDATED** |
| V3-F15 | Maturité distribuée | `35` | **VALIDATED** |

## 3. Décisions déjà validées (cadrage / UX)

### Cadrage v3 — D1–D8

| Id | Décision |
|----|----------|
| D1 | v3 exclusivement Studio-native |
| D2 | ReviewBundle hybride |
| D3 | MD = pourquoi · JSON = quoi · SQL = état |
| D4 | Enforcement E0–E4 |
| D5 | SQL transactionnel + audit append-only |
| D6 | Maturité DOCUMENTED…ADOPTED |
| D7 | Pas de migration générale historiques |
| D8 | Option D trajectoire validée |

### UX — CC-D* (2026-07-23)

CC-D01 Option A · CC-D03 panneau vivant · CC-D05 décisions/gates · CC-D06 confirmations N1–N3 · CC-D12 fallback CKC silencieux · CC-D13 Project ≠ Cycle.

### Amendement framing 11

**Décision de lecture :** CC-D01 Option A prévaut pour Studio.
**Action future :** aligner le texte de `11` lors d'un cycle documentaire dédié.
**Statut :** résolu pour doctrine Studio · amendement textuel `11` encore dû.

## 4. Exclusivité v3 — règles consolidées

1. Studio consomme exclusivement sa doctrine SFIA v3.
2. DoctrinePackage v3 = future source doctrinale canonique.
3. CKC résolus via doctrine v3 et sources autorisées.
4. ExecutionContract v3 = contrat natif d'exécution.
5. Export Markdown Cursor = adaptateur technique seulement.
6. v2.6 = historique / traçabilité / outillage repository actuel — **pas** doctrine produit.

## 5. Impact map aval

| Fondation | Framing | Design | Modeled | Delivery | Gate suivant |
|-----------|---------|--------|---------|----------|--------------|
| F01 CKC | `30` | reconcil. intake/UX | CkcResolution | resolver opaque | Enrichissement CKC / modeled |
| F02 LPS | `32` | panneau CC-D03 | LivingProjectState | persist sélective | Modeled |
| F03 Package | `31` | — | DoctrinePackageManifest | pin runtime | Modeled |
| F04 Épistémologie | `33` | tags UI | Observation/Hypothesis/… | affichage | Modeled + design |
| F05 Chaîne | `30` | align CC-D* | — | flow C1–C4 | Post-merge + reconception |
| F06 Trajectoire | `32` | — | ProjectTrajectory | — | Modeled |
| F07 Provenance | `31` | — | ProvenanceRecord | — | Modeled |
| F08 Contradiction | `33` | banners | Contradiction | stop UI | Modeled |
| F09 Replanif | `32` | — | events | — | Modeled |
| F10 Dette | `35` | — | DebtItem | — | Modeled |
| F11 Agents | `34` | — | AgentCapability | allowlists | Modeled |
| F12 Actions | `34` | confirmations | ActionPolicy | enforce | Modeled + delivery |
| F13 Learning | `35` | — | REX records | — | Capitalisation |
| F14 Artefacts | `35` | — | ArtifactCompletenessContract | gates passage | Modeled |
| F15 Maturité | `35` | badges | maturity fields | anti-claims | Distributed |

### Objets futurs à modéliser (non créés ici)

DoctrinePackage · DoctrinePackageManifest · KnowledgeSource · CkcResolution · LivingProjectState · ProjectTrajectory · Observation · Hypothesis · Recommendation · HumanDecision · Contradiction · EvidenceLink · ProvenanceRecord · DebtItem · AgentCapability · ActionPolicy · ExecutionContract · ArtifactCompletenessContract · AuditEvent.

## 6. Arbitrages encore ouverts (hors validation F01–F15)

1. Root exact DoctrinePackage (U2).
2. Priorité D2/D3 Option D (U3).
3. Intégration 87–89 sur `main` (U4).
4. Vocabulaire IMPLEMENTED CANDIDATE (U5).
5. Périmètre et calendrier de l'audit dépendances v2.6.

## 7. Réserves

| ID | Réserve |
|----|---------|
| VAL-R01 | Runtime / design / modeled / delivery non migrés |
| VAL-R02 | Dépendances v2.6 code non auditées |
| VAL-R03 | Schemas non créés |
| VAL-R04 | UX 87–89 hors main |
| VAL-R05 | Onze CKC détaillés absents |
| VAL-R06 | Merge soumis à GO Morris distinct |
| VAL-R07 | Amendement textuel framing `11` encore dû |

## 8. Trajectoire aval

1. `GO MORRIS REVIEW — DRAFT PR SFIA STUDIO V3 DOCTRINE`
2. GO merge distinct (si review OK)
3. Audit dépendances v2.6 (Studio)
4. `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3 FOUNDATIONAL CONTRACTS`
5. Réévaluation design / delivery / UX (D-V3-04)

## 9. Verdict documentaire

**SFIA STUDIO V3 KNOWLEDGE-DRIVEN DOCTRINE VALIDATED — DRAFT PR PENDING MERGE**
````

## 18. Verdict exact

**SFIA STUDIO V3 DOCTRINE PR READY — PUSHED — DRAFT PR OPEN**

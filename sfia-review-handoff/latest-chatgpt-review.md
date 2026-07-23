# SFIA Review Pack — Correction structurelle routage CKC candidat

## Niveau
FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 11:27:05 CEST (+0200) |
| Cycle | Correction méthode / documentation |
| Profil | Light (volume) + contrôle Critical (chemins fondateurs) |
| Gate | `GO CORRECTION MÉTHODE — CKC ROUTING STRUCTURAL CONSISTENCY` |
| Branche | `method/sfia-cycle-knowledge-contracts` |
| HEAD avant | `8258957a18b78734458dd53010a733ec92fab12f` |
| HEAD après | `cae841519ed1d2dd825e6ecb998337cd47b4a1e1` |
| Base | origin/main @ `499c6b3540d8c3fae776736dc3fba29938048bfd` |
| Push méthode | **non** |
| UX HEAD | `2888b7e1c8643236c1ecee1fd8f01aa227ddc3cc` **inchangé** |

## Verdict

**CKC ROUTING STRUCTURAL CONSISTENCY RESTORED — METHOD VALIDATION REQUIRED**

## Gate suivant candidat

`GO VALIDATION MÉTHODE — CKC CANDIDATE ROUTING` (**non consommé**)

---

## Local Git Truth Check

- 2026-07-23 11:24:32 CEST — HEAD attendu `8258957…` confirmé
- staged vide ; secrets absents ; UX inchangé
- handoff avant : `846d8b7…`

---

## Sources consultées

Template §4.1 · routing guide · CKC README/02/04/05 · handoff distant

---

## Anomalies confirmées

1. **Ordre sections** : `4.4.5` apparaissait **avant** `4.4.4` — **CONFIRMÉ** puis **CORRECTED** (déplacement, numéro conservé)
2. **Paths abrégés** `…/cycle-knowledge-contracts` dans routing guide + Knowledge Layer — **CONFIRMÉ** puis **CORRECTED**
3. Matrice 15 cycles vs template §4.1 — **alignée** (pas de divergence)
4. Pilotes 1/2/6/9 — **confirmés**

## Matrice canonique vérifiée (template §4.1)

1 Cadrage · 2 Conception fonctionnelle · 3 Architecture fonctionnelle · 4 UX/UI · 5 Backlog / user stories · 6 Architecture technique · 7 Intégration / DevOps · 8 Delivery / implémentation · 9 QA / validation · 10 Sécurité / RSSI · 11 Déploiement / release · 12 Observabilité / RUN readiness · 13 PR readiness · 14 Post-merge · 15 Capitalisation / REX

Pilotes : 1→01-cadrage · 2→02-conception-fonctionnelle · 6→03-architecture-technique · 9→04-qa-validation

## Ordre des sections (après)

```
267:#### 4.4.1 Type de cycle projet vs profil SFIA
287:#### 4.4.2 Qualification du profil — règles de routage
301:#### 4.4.3 Séquence de routage v2.5 candidate
320:#### 4.4.4 Matrice profil → contrôles (synthèse)
329:#### 4.4.5 Cycle Knowledge Contracts — candidate routing experiment
```

## Références croisées

| Source | Référence | Cible existante | Verdict |
|--------|-----------|-----------------|---------|
| Séquence 4.4.3 | §4.4.5 | heading 4.4.5 | PASS |
| Template / PGE / docs CKC | §4.4.5 | heading 4.4.5 | PASS |
| Template | §2.0 / §2.1 / §3 | existent | PASS |
| Validation | §3.1.1 | existent | PASS |
| Knowledge Layer | §6.1.1 | existent | PASS |
| Operating Model | §3.1.1 | existent | PASS |

## Corrections exécutées

- Déplacement intégral §4.4.5 après §4.4.4 (contenu métier inchangé hors paths)
- Remplacement paths abrégés → paths repo complets (routing + KL + matrice 04)
- Tests 7–9 ajoutés ; tests 1–2 mis à jour avec paths complets

## Tests 7–9

PASS (voir contenu 05 ci-dessous)

## Diff

```
cae8415 docs(sfia): fix candidate CKC routing references
 .../core/sfia-cycle-routing-guide.md               | 28 +++++++++---------
 .../sfia-fast-track/core/sfia-knowledge-layer.md   |  2 +-
 .../04-cycle-to-ckc-routing-matrix.md              | 32 ++++++++++----------
 .../05-routing-documentary-tests.md                | 34 +++++++++++++++++++---
 4 files changed, 62 insertions(+), 34 deletions(-)
```

```diff
commit cae841519ed1d2dd825e6ecb998337cd47b4a1e1
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Thu Jul 23 11:27:05 2026 +0200

    docs(sfia): fix candidate CKC routing references

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index 681b8dc..a331746 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -317,6 +317,15 @@ Intention Morris

 **Hors périmètre Cycle 1 :** templates profil (Cycle 2) ; cartographie exhaustive cycles projet ; promotion Prompt Catalog ; relance SFIA 3.0.

+#### 4.4.4 Matrice profil → contrôles (synthèse)
+
+| Profil | Lecture doc | Rapport Cursor | Readiness | Post-merge | Morris |
+|--------|-------------|----------------|-----------|------------|--------|
+| **Light** | Minimale | Court | Allégée, unique | Court ou skip | Merge si doc-only ; gates si protected |
+| **Standard** | Ciblée | Structuré | Unique | Court | Scope + merge |
+| **Critical** | Complète | Complet | Renforcée | Complet | Chaque gate listé |
+| **Capitalization** | Adaptée aux sources REX / méthode | Traçabilité apprentissage | Adaptée promotion doc / méthode | Standard ou selon portée | Si promotion méthode ou décision structurante |
+
 #### 4.4.5 Cycle Knowledge Contracts — candidate routing experiment

 > **Expérimentation de routage** — statut **candidate** · **non baseline** · **non adopted** · **aucune autorité d'exécution**.
@@ -340,26 +349,17 @@ type de cycle

 | Cycle | Path |
 |-------|------|
-| 1 Cadrage | `…/cycle-knowledge-contracts/pilots/01-cadrage.md` |
-| 2 Conception fonctionnelle | `…/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md` |
-| 6 Architecture technique | `…/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
-| 9 QA / validation | `…/cycle-knowledge-contracts/pilots/04-qa-validation.md` |
+| 1 Cadrage | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` |
+| 2 Conception fonctionnelle | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md` |
+| 6 Architecture technique | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
+| 9 QA / validation | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` |

-**Fallback (onze cycles sans CKC détaillé) :** consulter `…/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` comme guidance légère ; appliquer la méthode SFIA v2.6 existante (template §4 + méthode cycles) ; déclarer la couverture CKC **incomplète** ; **ne pas inventer** un contrat complet ; **ne pas bloquer** le cycle si les sources canoniques suffisent.
+**Fallback (onze cycles sans CKC détaillé) :** consulter `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` comme guidance légère ; appliquer la méthode SFIA v2.6 existante (template §4 + méthode cycles) ; déclarer la couverture CKC **incomplète** ; **ne pas inventer** un contrat complet ; **ne pas bloquer** le cycle si les sources canoniques suffisent.

 **Obligations ChatGPT :** rechercher le CKC ; lire le statut ; déclarer la consultation (template §2.0) ; signaler explicitement `candidate` ; ne pas présenter le CKC comme baseline.

 **Séparations :** CKC ≠ routing guide (sélection des références) ≠ template (contrat Cursor) ≠ validation checklist (preuves). Référencer les paths — ne pas recopier les contrats ici.

-#### 4.4.4 Matrice profil → contrôles (synthèse)
-
-| Profil | Lecture doc | Rapport Cursor | Readiness | Post-merge | Morris |
-|--------|-------------|----------------|-----------|------------|--------|
-| **Light** | Minimale | Court | Allégée, unique | Court ou skip | Merge si doc-only ; gates si protected |
-| **Standard** | Ciblée | Structuré | Unique | Court | Scope + merge |
-| **Critical** | Complète | Complet | Renforcée | Complet | Chaque gate listé |
-| **Capitalization** | Adaptée aux sources REX / méthode | Traçabilité apprentissage | Adaptée promotion doc / méthode | Standard ou selon portée | Si promotion méthode ou décision structurante |
-
 ## 5. Références obligatoires par type de cycle (méthode / fondation)

 ### 5.1 Cycle de cadrage méthode
diff --git a/method/sfia-fast-track/core/sfia-knowledge-layer.md b/method/sfia-fast-track/core/sfia-knowledge-layer.md
index 19ba88c..7fe5b0e 100644
--- a/method/sfia-fast-track/core/sfia-knowledge-layer.md
+++ b/method/sfia-fast-track/core/sfia-knowledge-layer.md
@@ -183,7 +183,7 @@ La Documentation Routing Matrix n'est pas remplacée. Le Cycle Routing Guide la

 | Phase / contexte | Sources à lire | Livrables attendus | Dossier cible | Type de capitalisation | Prompt doit mentionner |
 |------------------|----------------|--------------------|---------------|------------------------|------------------------|
-| Routage CKC candidat (expérimental) | Routing guide §4.4.5, README CKC, pilote ou carte synthétique | Déclaration de consultation CKC ; évolutions CKC si cycle méthode dédié | `…/cycle-knowledge-contracts/` | Capitalisation méthode candidate | Statut candidate ; usage experimental cognitive guidance ; aucune autorité d'exécution |
+| Routage CKC candidat (expérimental) | Routing guide §4.4.5, README CKC, pilote ou carte synthétique | Déclaration de consultation CKC ; évolutions CKC si cycle méthode dédié | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/` | Capitalisation méthode candidate | Statut candidate ; usage experimental cognitive guidance ; aucune autorité d'exécution |

 **Séparation préservée :** Knowledge Layer = où classer et ranger · Routing guide = quoi lire et quand.

diff --git a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md
index 6844a10..d6b73d0 100644
--- a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md
+++ b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md
@@ -10,20 +10,22 @@

 | # | Cycle canonique | Alias / notes | CKC détaillé | Path | Fallback | Statut | Consommation obligatoire (candidate) |
 |---|-----------------|---------------|--------------|------|----------|--------|--------------------------------------|
-| 1 | Cadrage | — | oui | `pilots/01-cadrage.md` | N/A | candidate | **oui** si cycle qualifié |
-| 2 | Conception fonctionnelle | — | oui | `pilots/02-conception-fonctionnelle.md` | N/A | candidate | **oui** |
-| 3 | Architecture fonctionnelle | — | non | — | carte `02-…` + méthode §4.3 | absent détaillé | non — fallback |
-| 4 | UX/UI | Design | non | — | carte + méthode §4.4 | absent détaillé | non — fallback |
-| 5 | Backlog / user stories | — | non | — | carte + méthode §4.5 | absent détaillé | non — fallback |
-| 6 | Architecture technique | — | oui | `pilots/03-architecture-technique.md` | N/A | candidate | **oui** |
-| 7 | Intégration / DevOps | — | non | — | carte + méthode §4.7 | absent détaillé | non — fallback |
-| 8 | Delivery / implémentation | — | non | — | carte + méthode §4.8 | absent détaillé | non — fallback |
-| 9 | QA / validation | — | oui | `pilots/04-qa-validation.md` | N/A | candidate | **oui** |
-| 10 | Sécurité / RSSI | — | non | — | carte + méthode §4.10 | absent détaillé | non — fallback |
-| 11 | Déploiement / release | — | non | — | carte + méthode §4.11 | absent détaillé | non — fallback |
-| 12 | Observabilité / RUN readiness | — | non | — | carte + méthode §4.12 | absent détaillé | non — fallback |
-| 13 | PR readiness | — | non | — | carte + méthode §4.13 | absent détaillé | non — fallback |
-| 14 | Post-merge | — | non | — | carte + méthode §4.14 | absent détaillé | non — fallback |
-| 15 | Capitalisation / REX | — | non | — | carte + méthode §4.15 | absent détaillé | non — fallback |
+| 1 | Cadrage | — | oui | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` | N/A | candidate | **oui** si cycle qualifié |
+| 2 | Conception fonctionnelle | — | oui | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md` | N/A | candidate | **oui** |
+| 3 | Architecture fonctionnelle | — | non | — | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` + méthode §4.3 | absent détaillé | non — fallback |
+| 4 | UX/UI | Design | non | — | carte synthétique + méthode §4.4 | absent détaillé | non — fallback |
+| 5 | Backlog / user stories | — | non | — | carte synthétique + méthode §4.5 | absent détaillé | non — fallback |
+| 6 | Architecture technique | — | oui | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` | N/A | candidate | **oui** |
+| 7 | Intégration / DevOps | — | non | — | carte synthétique + méthode §4.7 | absent détaillé | non — fallback |
+| 8 | Delivery / implémentation | — | non | — | carte synthétique + méthode §4.8 | absent détaillé | non — fallback |
+| 9 | QA / validation | — | oui | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` | N/A | candidate | **oui** |
+| 10 | Sécurité / RSSI | — | non | — | carte synthétique + méthode §4.10 | absent détaillé | non — fallback |
+| 11 | Déploiement / release | — | non | — | carte synthétique + méthode §4.11 | absent détaillé | non — fallback |
+| 12 | Observabilité / RUN readiness | — | non | — | carte synthétique + méthode §4.12 | absent détaillé | non — fallback |
+| 13 | PR readiness | — | non | — | carte synthétique + méthode §4.13 | absent détaillé | non — fallback |
+| 14 | Post-merge | — | non | — | carte synthétique + méthode §4.14 | absent détaillé | non — fallback |
+| 15 | Capitalisation / REX | — | non | — | carte synthétique + méthode §4.15 | absent détaillé | non — fallback |

 **Règles fallback :** déclarer couverture incomplète · ne pas inventer de contrat · ne pas bloquer si sources canoniques suffisent · usage = experimental cognitive guidance · autorité = aucune.
+
+**Fallback path canonique :** `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`
diff --git a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/05-routing-documentary-tests.md b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/05-routing-documentary-tests.md
index c67c377..10632b7 100644
--- a/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/05-routing-documentary-tests.md
+++ b/method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/05-routing-documentary-tests.md
@@ -10,7 +10,7 @@

 | Étape | Attendu | Résultat |
 |-------|---------|----------|
-| Routing guide | §4.4.5 → path `pilots/01-cadrage.md` | PASS |
+| Routing guide | §4.4.5 → `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` | PASS |
 | Template | Mini-fiche + fiche exigent déclaration CKC | PASS |
 | PGE | Étape 4bis avant génération | PASS |
 | Validation | §3.1.1 pilote obligatoire + statut candidate | PASS |
@@ -19,7 +19,7 @@

 | Étape | Attendu | Résultat |
 |-------|---------|----------|
-| Routing | Path `pilots/03-architecture-technique.md` | PASS |
+| Routing | Path `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` | PASS |
 | Template / PGE / checklist | Même chaîne que Test 1 | PASS |

 ## Test 3 — Cycle sans pilote (ex. Delivery #8)
@@ -27,7 +27,7 @@
 | Étape | Attendu | Résultat |
 |-------|---------|----------|
 | Recherche | Contrat détaillé absent | PASS |
-| Fallback | Carte synthétique + méthode v2.6 | PASS |
+| Fallback | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` + méthode v2.6 | PASS |
 | Blocage | Aucune erreur bloquante injustifiée | PASS |
 | Invention | Interdite (anti-patterns template/routing) | PASS |

@@ -53,6 +53,32 @@
 | Exposition brute 25 sections CKC en UI | Interdite (template anti-pattern ; framing CKC) | PASS |
 | Docs 87/88 | Non modifiés | PASS |

+## Test 7 — Ordre des sections
+
+| Contrôle | Attendu | Résultat |
+|----------|---------|----------|
+| Headings `#### 4.4.x` | Ordre 4.4.1 → 4.4.2 → 4.4.3 → 4.4.4 → 4.4.5 | PASS |
+| Section CKC | Après `4.4.4 Matrice profil → contrôles` | PASS |
+| Référence §4.4.5 | Toujours valide (numéro conservé) | PASS |
+
+## Test 8 — Résolution des paths
+
+| Contrôle | Attendu | Résultat |
+|----------|---------|----------|
+| Pilote 01 | Path complet existe | PASS |
+| Pilote 02 | Path complet existe | PASS |
+| Pilote 03 | Path complet existe | PASS |
+| Pilote 04 | Path complet existe | PASS |
+| Fallback carte | Path complet `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` existe | PASS |
+| Points d'entrée opérationnels | Aucun `…/cycle-knowledge-contracts` abrégé | PASS |
+
+## Test 9 — Alignement numérotation
+
+| Contrôle | Attendu | Résultat |
+|----------|---------|----------|
+| Matrice 15 cycles | = template §4.1 | PASS |
+| Pilotes | Cycles 1 / 2 / 6 / 9 | PASS |
+
 ## Verdict tests

-**PASS** — routage candidat cohérent pour arbitrage Morris (validation méthode suivante).
+**PASS** — cohérence structurelle du routage CKC candidat restaurée ; validation méthode toujours requise.
```

## Contenu complet — 05 tests (après)

# Tests documentaires — routage CKC candidat

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `05-routing-documentary-tests.md` |
| **Statut** | `method-candidate` |
| **Méthode** | Revue documentaire (pas d'appel OpenAI) |

## Test 1 — Cadrage

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Routing guide | §4.4.5 → `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` | PASS |
| Template | Mini-fiche + fiche exigent déclaration CKC | PASS |
| PGE | Étape 4bis avant génération | PASS |
| Validation | §3.1.1 pilote obligatoire + statut candidate | PASS |

## Test 2 — Architecture technique

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Routing | Path `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` | PASS |
| Template / PGE / checklist | Même chaîne que Test 1 | PASS |

## Test 3 — Cycle sans pilote (ex. Delivery #8)

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Recherche | Contrat détaillé absent | PASS |
| Fallback | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` + méthode v2.6 | PASS |
| Blocage | Aucune erreur bloquante injustifiée | PASS |
| Invention | Interdite (anti-patterns template/routing) | PASS |

## Test 4 — Mauvais statut (« CKC baseline »)

| Étape | Attendu | Résultat |
|-------|---------|----------|
| Checklist §3.1.1 | Claim invalide / non-conformité | PASS |
| Anti-patterns template & routing | Explicitement listés | PASS |

## Test 5 — Cursor

| Contrôle | Attendu | Résultat |
|----------|---------|----------|
| Élargissement scope via CKC | Interdit (OM §3.1.1, PGE, template) | PASS |
| Décision de cycle par Cursor | Non — CKC hors contrat exécution | PASS |
| CKC comme prompt d'exécution | Interdit | PASS |

## Test 6 — UX conversationnelle

| Contrôle | Attendu | Résultat |
|----------|---------|----------|
| Exposition brute 25 sections CKC en UI | Interdite (template anti-pattern ; framing CKC) | PASS |
| Docs 87/88 | Non modifiés | PASS |

## Test 7 — Ordre des sections

| Contrôle | Attendu | Résultat |
|----------|---------|----------|
| Headings `#### 4.4.x` | Ordre 4.4.1 → 4.4.2 → 4.4.3 → 4.4.4 → 4.4.5 | PASS |
| Section CKC | Après `4.4.4 Matrice profil → contrôles` | PASS |
| Référence §4.4.5 | Toujours valide (numéro conservé) | PASS |

## Test 8 — Résolution des paths

| Contrôle | Attendu | Résultat |
|----------|---------|----------|
| Pilote 01 | Path complet existe | PASS |
| Pilote 02 | Path complet existe | PASS |
| Pilote 03 | Path complet existe | PASS |
| Pilote 04 | Path complet existe | PASS |
| Fallback carte | Path complet `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` existe | PASS |
| Points d'entrée opérationnels | Aucun `…/cycle-knowledge-contracts` abrégé | PASS |

## Test 9 — Alignement numérotation

| Contrôle | Attendu | Résultat |
|----------|---------|----------|
| Matrice 15 cycles | = template §4.1 | PASS |
| Pilotes | Cycles 1 / 2 / 6 / 9 | PASS |

## Verdict tests

**PASS** — cohérence structurelle du routage CKC candidat restaurée ; validation méthode toujours requise.

## Contenu section 4.4.4 + 4.4.5 (routing guide)

#### 4.4.4 Matrice profil → contrôles (synthèse)

| Profil | Lecture doc | Rapport Cursor | Readiness | Post-merge | Morris |
|--------|-------------|----------------|-----------|------------|--------|
| **Light** | Minimale | Court | Allégée, unique | Court ou skip | Merge si doc-only ; gates si protected |
| **Standard** | Ciblée | Structuré | Unique | Court | Scope + merge |
| **Critical** | Complète | Complet | Renforcée | Complet | Chaque gate listé |
| **Capitalization** | Adaptée aux sources REX / méthode | Traçabilité apprentissage | Adaptée promotion doc / méthode | Standard ou selon portée | Si promotion méthode ou décision structurante |

#### 4.4.5 Cycle Knowledge Contracts — candidate routing experiment
#### 4.4.5 Cycle Knowledge Contracts — candidate routing experiment

> **Expérimentation de routage** — statut **candidate** · **non baseline** · **non adopted** · **aucune autorité d'exécution**.
> Décision Morris : `GO CONSOLIDATION MÉTHODE — INTÉGRATION DU ROUTAGE CKC CANDIDAT`.
> Emplacement : `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/`.

**Rôle.** Un Cycle Knowledge Contract (CKC) guide le **raisonnement cognitif** de ChatGPT après qualification du type de cycle et **avant** l'instanciation du prompt Cursor. Il n'autorise pas l'exécution, ne décide pas le cycle, ne valide pas automatiquement la maturité.

**Chaîne cible (complément) :**

```text
type de cycle
→ CKC candidat si disponible
→ documents canoniques à lire
→ template d'exécution
→ validation
→ décision
```

**Pilotes détaillés disponibles (consommation obligatoire en mode candidate si le cycle est qualifié) :**

| Cycle | Path |
|-------|------|
| 1 Cadrage | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` |
| 2 Conception fonctionnelle | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md` |
| 6 Architecture technique | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
| 9 QA / validation | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` |

**Fallback (onze cycles sans CKC détaillé) :** consulter `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` comme guidance légère ; appliquer la méthode SFIA v2.6 existante (template §4 + méthode cycles) ; déclarer la couverture CKC **incomplète** ; **ne pas inventer** un contrat complet ; **ne pas bloquer** le cycle si les sources canoniques suffisent.

**Obligations ChatGPT :** rechercher le CKC ; lire le statut ; déclarer la consultation (template §2.0) ; signaler explicitement `candidate` ; ne pas présenter le CKC comme baseline.

**Séparations :** CKC ≠ routing guide (sélection des références) ≠ template (contrat Cursor) ≠ validation checklist (preuves). Référencer les paths — ne pas recopier les contrats ici.


## Fichiers modifiés

- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-knowledge-layer.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/05-routing-documentary-tests.md

## Commit local

`cae841519ed1d2dd825e6ecb998337cd47b4a1e1` — docs(sfia): fix candidate CKC routing references

## Réserves

Correction mécanique uniquement — logique / couverture / statut candidate inchangés.

## Actions non exécutées

Push méthode · PR · merge · code · UX · baseline · pilotes · généralisation

## UX inchangé

`2888b7e…`

## Fin review pack FULL

Verdict: CKC ROUTING STRUCTURAL CONSISTENCY RESTORED — METHOD VALIDATION REQUIRED

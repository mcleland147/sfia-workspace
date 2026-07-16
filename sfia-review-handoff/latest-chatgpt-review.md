# SFIA Review Pack — PR Readiness PD-08

**Date :** 2026-07-16 11:40 Europe/Paris (CEST)
**Repository :** mcleland147/sfia-workspace
**Workspace :** /Users/morris/Projects/sfia-workspace
**Cycle :** PR readiness PD-08
**Profil SFIA :** Standard
**Typologie v2.4 :** DOC (Type 13 editorial + rapport)
**Verdict :** **PD-08 READY FOR COMMIT AND PR — MORRIS GATE REQUIRED**

---

## Git truth

| Champ | Valeur |
|-------|--------|
| **Branche** | `documentation/sfia-discovery-pd-08-qa` |
| **HEAD** | `1125972bb1a78379cdc485250bf34625141bdde6` |
| **origin/main** | `1125972bb1a78379cdc485250bf34625141bdde6` |
| **merge-base (HEAD, origin/main)** | `1125972bb1a78379cdc485250bf34625141bdde6` |

### git status --short

```text
 M method/sfia-fast-track/documentation/notion/discovery/editorial/README.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-4-release-and-run-editorial-draft.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-follow-novabuild-editorial-draft.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-04-what-sfia-produces-editorial-draft.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-05-why-it-works-editorial-draft.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-1-sme-leader-editorial-draft.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-2-project-manager-po-editorial-draft.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-3-technical-team-editorial-draft.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-project-yourself-editorial-draft.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-07-explore-the-method-editorial-draft.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md
?? .sfia/
?? .tmp-sfia-review/
?? method/sfia-fast-track/documentation/notion/discovery-product-design/09-sfia-discovery-pd-08-qa-report.md
?? sfia-review-handoff/
```

---

## Inclusion matrix (14 fichiers)

| # | Fichier | Origine | Risque | Include |
|---|---------|---------|--------|---------|
| 1 | `editorial/README.md` | PD-08B | Gouvernance README | **oui** |
| 2 | `sfia-discovery-hub-editorial-draft.md` | PD-08B | Hub navigation ANOM-01/02/06 | **oui** |
| 3 | `sfia-discovery-act-02-...` | PD-08B | Métadonnée | **oui** |
| 4 | `sfia-discovery-act-03-follow-novabuild-...` | PD-08B | Métadonnée | **oui** |
| 5 | `sfia-discovery-act-03-4-release-and-run-...` | PD-08B | Métadonnée | **oui** |
| 6 | `sfia-discovery-act-04-...` | PD-08B | Métadonnée | **oui** |
| 7 | `sfia-discovery-act-05-...` | PD-08B | Métadonnée + transition | **oui** |
| 8 | `sfia-discovery-act-06-project-yourself-...` | PD-08B | Métadonnée | **oui** |
| 9 | `sfia-discovery-act-06-1-sme-leader-...` | PD-08B.1 | Persona VI.1 | **oui** |
| 10 | `sfia-discovery-act-06-2-project-manager-po-...` | PD-08B.1 | Persona VI.2 | **oui** |
| 11 | `sfia-discovery-act-06-3-technical-team-...` | PD-08B.1 | Persona VI.3 | **oui** |
| 12 | `sfia-discovery-act-06-4-esn-partner-...` | PD-08B.1 | Persona VI.4 | **oui** |
| 13 | `sfia-discovery-act-07-explore-the-method-...` | PD-08B | Acte VII | **oui** |
| 14 | `discovery-product-design/09-sfia-discovery-pd-08-qa-report.md` | PD-08A | Audit snapshot | **oui** |

### Exclus du commit projet

- `.tmp-sfia-review/`
- `.sfia/`
- `sfia-review-handoff/`

---

## Diff stat

**Editorial only (13 fichiers) :** 67+/59-

```text
 .../notion/discovery/editorial/README.md           | 47 ++++++++++++----------
 ...-02-new-way-to-run-a-project-editorial-draft.md |  2 +-
 ...ery-act-03-4-release-and-run-editorial-draft.md |  2 +-
 ...very-act-03-follow-novabuild-editorial-draft.md |  2 +-
 ...ry-act-04-what-sfia-produces-editorial-draft.md |  2 +-
 ...iscovery-act-05-why-it-works-editorial-draft.md |  4 +-
 ...iscovery-act-06-1-sme-leader-editorial-draft.md |  2 +-
 ...-act-06-2-project-manager-po-editorial-draft.md |  2 +-
 ...very-act-06-3-technical-team-editorial-draft.md |  2 +-
 ...scovery-act-06-4-esn-partner-editorial-draft.md |  2 +-
 ...very-act-06-project-yourself-editorial-draft.md |  2 +-
 ...ry-act-07-explore-the-method-editorial-draft.md | 10 ++---
 .../sfia-discovery-hub-editorial-draft.md          | 47 ++++++++++++----------
 13 files changed, 67 insertions(+), 59 deletions(-)
```

**Commit futur :** rapport PD-08A **+439 lignes**.

---

## git diff --check

```text
(aucune erreur — sortie vide)
```

---

## Ripgrep — motifs interdits

```text
$ rg -n "gate PD-06B futur|PD-06B futur|PD-07A futur|Notion futur|Implémentation Notion.*Non.*futur" method/sfia-fast-track/documentation/notion/discovery/editorial
(aucune occurrence — 0 hit)
```

---

## Ripgrep — « futur » (2 hits légitimes)

```text
$ rg -n "futur" method/sfia-fast-track/documentation/notion/discovery/editorial
method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md:169:*Contrats commerciaux · licensing · redistribution — absents — décision Morris future.*
method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md:118:| SFIA 3.0 ou une baseline future | Le contenu Discovery est **Candidate** ; la baseline opérationnelle reste **v2.4** |
```

| Fichier | Qualification |
|---------|----------------|
| Hub L118 | **Légitime** — baseline SFIA 3.0 future vs v2.4 |
| VI.4 L169 | **Légitime** — décision commerciale Morris future |

---

## v2.5 baseline check (fichiers modifiés)

```text
== method/sfia-fast-track/documentation/notion/discovery/editorial/README.md ==
8:| **Baseline opérationnelle** | SFIA v2.4 |
121:- Aucun prompt catalog · aucune capitalisation baseline
== method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md ==
9:| **Baseline** | SFIA v2.4 |
118:| SFIA 3.0 ou une baseline future | Le contenu Discovery est **Candidate** ; la baseline opérationnelle reste **v2.4** |
== method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-07-explore-the-method-editorial-draft.md ==
9:| **Baseline** | SFIA v2.4 |
101:> **Baseline opérationnelle : SFIA v2.4.** Des référentiels cycles élargis existent en **Candidate v2.5** — aide pédagogique · **non baseline** tant que Morris n'a pas promu.
196:Termes essentiels : **cycle** · **gate** · **review pack** · **Candidate** · **baseline** · **capitalisation** · **Git prime**.
306:| A4 | Baseline v2.4 · Candidate | ✓ |
```

---

## ANOM-01 à ANOM-06 closure proof

```text
### ANOM-03 README
$ rg -n "PD-07B futur|PD-06B futur|Non exécutée" method/sfia-fast-track/documentation/notion/discovery/editorial/README.md
(0 hit — CLOSED)

### ANOM-04 actes metadata
$ rg -n "Implémentation Notion.*futur|gate PD-06B|gate PD-07A" method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-*.md
(0 hit — CLOSED)

### ANOM-05 transitions
$ rg -n "PD-05A futur|PD-06A futur|futur PD-05|futur PD-06" method/sfia-fast-track/documentation/notion/discovery/editorial/
(0 hit — CLOSED)

### ANOM-06 Hub 6.3
$ rg -n "cycles futurs|Actes II et IV.*futur" method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md
(0 hit — CLOSED)

### ANOM-01/02 forbidden
$ rg -n "gate PD-06B futur|PD-06B futur|PD-07A futur|Notion futur|Implémentation Notion.*Non.*futur" method/sfia-fast-track/documentation/notion/discovery/editorial
(0 hit — CLOSED)

```

---

## PD-08A report

| Élément | Valeur |
|---------|--------|
| Lignes | 439 |
| Sections | 1–12 |
| Critères | C1–C20 |
| Personas | 4 |
| B/B.1 | Rapport **inchangé** (snapshot pré-corrections) |

---

## Link check results

Validateur Python — liens Markdown relatifs `[text](url)` sur 13 fichiers modifiés (résolution `discovery-product-design` via racine `notion/`).

**Broken relative links :** 0

**Liens cassés :** aucun.

---

## QA status post-corrections

| Critère | Statut |
|---------|--------|
| C12 | **PASS** |
| C13 | **PASS** |
| C18 | **PARTIAL** |
| C1 | **PARTIAL** |
| C3 | **PARTIAL** |
| C9 | **NOT TESTABLE** |
| C16 | **NOT TESTABLE** |

---

## Réserves

- Notion runtime, tests utilisateur, rapport = audit snapshot pré-B corrections.

---

## Décisions Morris

| Action | État |
|--------|------|
| git add / commit / push / `gh pr create` | **Gate Morris** |

**Commit :** `docs(discovery): complete PD-08 QA and editorial resync`

**PR title :** `docs(discovery): PD-08 QA report and editorial resync (PD-08B/B.1)`

**PR body :**

## Summary

- Clôture **PD-08B / PD-08B.1** : resync métadonnées et navigation Discovery (13 fichiers `editorial/`).
- Ajout rapport QA **PD-08A** (`09-sfia-discovery-pd-08-qa-report.md`, 439 lignes) — snapshot pré-corrections B/B.1.
- Fermeture **ANOM-01 à ANOM-06**.

## Contexte

Cycles **PD-08A** (QA) → **PD-08B** (Hub/README/actes) → **PD-08B.1** (personas VI.1–VI.4).

## Scope

14 fichiers (13 editorial + 1 rapport). Exclus : `.tmp-sfia-review/`, `.sfia/`, `sfia-review-handoff/`.

## Limites

- Pas de validation runtime **Notion**.
- Rapport PD-08A = audit **avant** corrections B/B.1.
- **Typologie v2.4** · baseline **v2.4** (v2.5 Candidate non baseline).

## Test plan

- [ ] Morris : Hub §8 / §13–14 / README
- [ ] Diff 13 fichiers + rapport
- [ ] Optionnel : smoke Notion (hors PR)

---

## git diff complet (13 fichiers editorial)

```diff
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/README.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/README.md
index bb84039..4e81b65 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/README.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/README.md
@@ -3,16 +3,16 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Statut** | **Candidate** — brouillons éditoriaux Discovery |
-| **Cycle courant** | PD-07A — migration legacy (préparation Git) |
+| **Cycle courant** | PD-08B — corrections éditoriales (resync métadonnées) |
 | **Propriétaire** | Morris |
 | **Baseline opérationnelle** | SFIA v2.4 |
 | **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
-| **Branche projet** | `documentation/sfia-discovery-legacy-migration-plan` |
-| **HEAD / base** | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` |
-| **Horodatage** | 2026-07-15 22:30 Europe/Paris (CEST) |
-| **Implémentation Notion** | PD-02B ✓ · PD-03B ✓ · PD-04B ✓ · PD-05B ✓ · PD-06B ✓ · PD-07B futur |
+| **Branche projet** | `documentation/sfia-discovery-pd-08-qa` |
+| **HEAD / base** | `1125972bb1a78379cdc485250bf34625141bdde6` |
+| **Horodatage** | 2026-07-16 10:40 Europe/Paris (CEST) |
+| **Implémentation Notion** | PD-02B ✓ · PD-03B ✓ · PD-04B ✓ · PD-05B ✓ · PD-06B ✓ · PD-07B ✓ (validée Morris) |
 | **Capitalisation méthode** | Non |
-| **Migration Notion** | **Non exécutée** — plan Git seulement |
+| **Migration Notion** | **Validée Morris** (PD-07B) — sans preuve runtime Cursor |
 
 ---
 
@@ -32,7 +32,7 @@ Le plan de migration legacy (PD-07A) vit dans :
 
 ```text
 Hub + Acte I ✓ → Acte II ✓ → Acte III ✓ → Acte IV ✓ → Acte V ✓ → Acte VI ✓ → Acte VII ✓
-→ migration legacy (PD-07A en cours) → QA (PD-08) → capitalisation? (PD-09)
+→ migration legacy (PD-07A mergé ✓ · PD-07B validée Morris ✓) → QA (PD-08A ✓ · PD-08B en cours) → capitalisation? (PD-09)
 ```
 
 **Acte II avant Acte III** — le contraste précède le fil rouge NovaBuild.
@@ -66,8 +66,8 @@ Hub + Acte I ✓ → Acte II ✓ → Acte III ✓ → Acte IV ✓ → Acte V ✓
 
 | # | Fichier | Rôle | Statut |
 |---|---------|------|--------|
-| 17 | [../migration/sfia-discovery-legacy-content-inventory.md](../migration/sfia-discovery-legacy-content-inventory.md) | Inventaire legacy §00–11 | **PD-07A — revue** |
-| 18 | [../migration/sfia-discovery-legacy-migration-plan.md](../migration/sfia-discovery-legacy-migration-plan.md) | Plan PD-07B réversible | **PD-07A — revue** |
+| 17 | [../migration/sfia-discovery-legacy-content-inventory.md](../migration/sfia-discovery-legacy-content-inventory.md) | Inventaire legacy §00–11 | ✓ mergé (PD-07A · PR #201) |
+| 18 | [../migration/sfia-discovery-legacy-migration-plan.md](../migration/sfia-discovery-legacy-migration-plan.md) | Plan PD-07B réversible | ✓ mergé (PD-07A · PR #201) |
 
 ---
 
@@ -94,8 +94,9 @@ Hub + Acte I ✓ → Acte II ✓ → Acte III ✓ → Acte IV ✓ → Acte V ✓
 | Acte III NovaBuild | PD-04A ✓ (PR #198) | PD-04B ✓ |
 | Actes IV–V | PD-05A ✓ (PR #199) | PD-05B ✓ |
 | Actes VI–VII | PD-06A ✓ (PR #200) | PD-06B ✓ |
-| Migration legacy | **PD-07A** (présent — revue) | PD-07B — futur |
-| QA narrative | PD-08 — futur | — |
+| Migration legacy | PD-07A ✓ (PR #201) | PD-07B ✓ (validée Morris) |
+| QA narrative | PD-08A ✓ | — |
+| Corrections éditoriales | **PD-08B** (présent — revue) | — |
 
 **NovaBuild** = cas pédagogique composite — catégories livrables inspirées d'actifs SFIA vérifiables.
 
@@ -116,7 +117,7 @@ Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contr
 
 ## 8. Garde-fous
 
-- Aucune page Notion PD-07B · aucun archivage · aucune suppression
+- Migration legacy PD-07B validée Morris (Notion) — trace Git PD-07A mergé (PR #201)
 - Aucun prompt catalog · aucune capitalisation baseline
 - Drafts P0 legacy **non modifiés** dans ce cycle
 
@@ -126,6 +127,8 @@ Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contr
 
 - PD-01 · PD-02A · PD-03A · PD-04A · PD-05A · PD-06A mergés ✓
 - PD-02B · PD-03B · PD-04B · PD-05B · PD-06B finalisés Notion ✓
+- PR #201 mergée · PD-07A ✓ · PD-07B validée Morris ✓
+- PD-08A QA narrative ✓ — verdict READY WITH EDITORIAL RESERVES
 - Acte II avant Acte III ✓
 - NovaBuild composite ✓
 - PR #199 mergée · PD-05A/B ✓
@@ -137,22 +140,22 @@ Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contr
 
 | Gate | Objet | Statut |
 |------|-------|--------|
-| **M1** | Inventaire legacy complet et sourcé | En attente |
-| **M2** | Mapping legacy → Discovery | En attente |
-| **M3** | Stratégie proposée par page | En attente |
-| **M4** | Contrôle absence de perte | En attente |
-| **M5** | Plan PD-07B réversible | En attente |
-| **M6** | Contenu complet exploitable | En attente |
-| **M7** | GO commit / push / PR | En attente |
-| **M8** | GO PD-07B Notion | Hors cycle — futur |
+| **M1** | Inventaire legacy complet et sourcé | ✓ (PD-07A mergé) |
+| **M2** | Mapping legacy → Discovery | ✓ (PD-07A mergé) |
+| **M3** | Stratégie proposée par page | ✓ (PD-07A mergé) |
+| **M4** | Contrôle absence de perte | ✓ (PD-07A mergé) |
+| **M5** | Plan PD-07B réversible | ✓ (PD-07A mergé) |
+| **M6** | Contenu complet exploitable | ✓ (PD-07A mergé) |
+| **M7** | GO commit / push / PR | ✓ (PR #201) |
+| **M8** | GO PD-07B Notion | ✓ (validée Morris) |
 
 ---
 
 ## 11. Critères d'entrée PD-07B
 
-- Inventaire et plan validés Morris · merge Git recommandé · GO exécution Notion
+- Inventaire et plan validés Morris · merge Git ✓ (PR #201) · exécution Notion validée Morris ✓
 - Dépendance : PD-06A/B ✓
-- Lot 0 inventaire Notion réel obligatoire avant toute redirection
+- Lot 0 inventaire Notion réel exécuté (PD-07B — validation Morris)
 
 ---
 
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md
index a2ff74c..5aa0a71 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md
@@ -14,7 +14,7 @@
 | **Niveau lecture** | L1 |
 | **Durée cible** | 8–10 minutes |
 | **Question lecteur** | En quoi SFIA est-elle différente d'une conduite classique ou d'un usage libre de ChatGPT et Cursor ? |
-| **Implémentation Notion** | Non — gate PD-03B futur |
+| **Implémentation Notion** | Réalisée et validée par Morris — source Git PD-03A |
 | **Réaction recherchée** | « Je comprends comment SFIA organise le projet — je suis prêt à suivre NovaBuild. » |
 
 ---
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-4-release-and-run-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-4-release-and-run-editorial-draft.md
index f6be469..a808261 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-4-release-and-run-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-4-release-and-run-editorial-draft.md
@@ -140,7 +140,7 @@ L'Acte III montre **le mouvement**. L'**Acte IV** montre **ce que SFIA produit**
 
 > **Nous avons suivi le projet. Regardons maintenant ce que SFIA a concrètement produit.**
 
-**→ Continuer : ACTE IV — Ce que SFIA produit** *(futur PD-05A)*
+**→ Continuer : ACTE IV — Ce que SFIA produit**
 
 **← Retour : [ACTE III — Suivons NovaBuild](sfia-discovery-act-03-follow-novabuild-editorial-draft.md)**
 
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-follow-novabuild-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-follow-novabuild-editorial-draft.md
index d54398f..71111e8 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-follow-novabuild-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-follow-novabuild-editorial-draft.md
@@ -14,7 +14,7 @@
 | **Niveau lecture** | L1–L2 |
 | **Durée cible** | 15–20 minutes (page + quatre séquences) |
 | **NovaBuild** | **Cas pédagogique composite** |
-| **Implémentation Notion** | Non — gate PD-04B futur |
+| **Implémentation Notion** | Réalisée et validée par Morris — source Git PD-04A |
 | **Réaction recherchée** | « Je vois comment SFIA accompagne réellement un projet. » |
 
 ---
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-04-what-sfia-produces-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-04-what-sfia-produces-editorial-draft.md
index 617ddf7..081d177 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-04-what-sfia-produces-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-04-what-sfia-produces-editorial-draft.md
@@ -13,7 +13,7 @@
 | **Horodatage** | 2026-07-15 00:30 Europe/Paris (CEST) |
 | **Niveau lecture** | L2 |
 | **Durée cible** | 8–10 minutes |
-| **Implémentation Notion** | Non — gate PD-05B futur |
+| **Implémentation Notion** | Réalisée et validée par Morris — source Git PD-05A |
 | **Réaction recherchée** | « C'est tangible. » |
 
 ---
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-05-why-it-works-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-05-why-it-works-editorial-draft.md
index 302d41c..558cc2c 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-05-why-it-works-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-05-why-it-works-editorial-draft.md
@@ -13,7 +13,7 @@
 | **Horodatage** | 2026-07-15 00:30 Europe/Paris (CEST) |
 | **Niveau lecture** | L2 |
 | **Durée cible** | 7–8 minutes |
-| **Implémentation Notion** | Non — gate PD-05B futur |
+| **Implémentation Notion** | Réalisée et validée par Morris — source Git PD-05A |
 | **Réaction recherchée** | « Je comprends les garanties et les limites. » |
 
 ---
@@ -176,7 +176,7 @@ La question suivante est **personnelle** :
 
 > **Le cadre est crédible. Reste à comprendre ce qu'il change dans votre contexte.**
 
-**→ Continuer : ACTE VI — Se projeter avec SFIA** *(futur PD-06A)*
+**→ Continuer : ACTE VI — Se projeter avec SFIA**
 
 **← Retour : [ACTE IV — Ce que SFIA produit](sfia-discovery-act-04-what-sfia-produces-editorial-draft.md)**
 
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-1-sme-leader-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-1-sme-leader-editorial-draft.md
index dc07ca2..c3347d7 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-1-sme-leader-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-1-sme-leader-editorial-draft.md
@@ -13,7 +13,7 @@
 | **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
 | **Niveau lecture** | L1 |
 | **Durée cible** | 4–5 minutes |
-| **Implémentation Notion** | Non — gate PD-06B futur |
+| **Implémentation Notion** | Réalisée et validée par Morris — source Git PD-06A |
 | **Réaction recherchée** | « Je comprends pourquoi un cadre vaut mieux qu'une demande directe à l'IA. » |
 
 ---
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-2-project-manager-po-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-2-project-manager-po-editorial-draft.md
index dae7cd1..9bb4ace 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-2-project-manager-po-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-2-project-manager-po-editorial-draft.md
@@ -13,7 +13,7 @@
 | **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
 | **Niveau lecture** | L2 |
 | **Durée cible** | 5–6 minutes |
-| **Implémentation Notion** | Non — gate PD-06B futur |
+| **Implémentation Notion** | Réalisée et validée par Morris — source Git PD-06A |
 | **Réaction recherchée** | « Je vois comment structurer sans noyer l'équipe dans des documents. » |
 
 ---
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-3-technical-team-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-3-technical-team-editorial-draft.md
index 77db7d9..b584811 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-3-technical-team-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-3-technical-team-editorial-draft.md
@@ -13,7 +13,7 @@
 | **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
 | **Niveau lecture** | L2–L3 contrôlée |
 | **Durée cible** | 5–6 minutes |
-| **Implémentation Notion** | Non — gate PD-06B futur |
+| **Implémentation Notion** | Réalisée et validée par Morris — source Git PD-06A |
 | **Réaction recherchée** | « Je sais ce que Cursor peut exécuter — et où m'arrêter. » |
 
 ---
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md
index 4781007..4e37a70 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md
@@ -13,7 +13,7 @@
 | **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
 | **Niveau lecture** | L2 |
 | **Durée cible** | 5–6 minutes |
-| **Implémentation Notion** | Non — gate PD-06B futur |
+| **Implémentation Notion** | Réalisée et validée par Morris — source Git PD-06A |
 | **Réaction recherchée** | « Je vois un cadre reproductible — sans promesse commerciale implicite. » |
 
 ---
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-project-yourself-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-project-yourself-editorial-draft.md
index 5a8ad4c..ec0c34e 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-project-yourself-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-project-yourself-editorial-draft.md
@@ -13,7 +13,7 @@
 | **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
 | **Niveau lecture** | L1–L2 |
 | **Durée cible** | 2–3 minutes |
-| **Implémentation Notion** | Non — gate PD-06B futur |
+| **Implémentation Notion** | Réalisée et validée par Morris — source Git PD-06A |
 | **Réaction recherchée** | « Je vois comment SFIA s'applique à mon contexte. » |
 
 ---
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-07-explore-the-method-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-07-explore-the-method-editorial-draft.md
index 0df155b..73e37ae 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-07-explore-the-method-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-07-explore-the-method-editorial-draft.md
@@ -13,7 +13,7 @@
 | **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
 | **Niveau lecture** | L2–L4 par paliers |
 | **Durée cible** | 3–5 minutes (portail) · exploration libre ensuite |
-| **Implémentation Notion** | Non — gate PD-06B futur |
+| **Implémentation Notion** | Réalisée et validée par Morris — source Git PD-06A |
 | **Réaction recherchée** | « Je sais où aller ensuite sans avoir à tout lire. » |
 
 ---
@@ -34,7 +34,7 @@ L'**Acte VII** répond à :
 
 | Couche | Rôle |
 |--------|------|
-| **Discovery (Notion futur · Git aujourd'hui)** | Valeur · parcours · projection · orientation |
+| **Discovery (Notion validée Morris · Git source de vérité)** | Valeur · parcours · projection · orientation |
 | **Git (méthode détaillée)** | Templates · routing · gouvernance · preuves · historique |
 
 **Discovery explique la valeur. Git conserve la méthode et les actifs détaillés.**
@@ -179,7 +179,7 @@ SFIA maintient des **templates** — cycles · QA · review · handoff · docume
 
 | Type | Rôle |
 |------|------|
-| **Bases Référentiel / Cycles** | Vues structurées — embed Notion futur |
+| **Bases Référentiel / Cycles** | Vues structurées — embed Notion |
 | **Docs architecture** | Fondations plateforme — L4 |
 | **Product Design Discovery** | Conception parcours — PD-01 |
 
@@ -203,7 +203,7 @@ Termes essentiels : **cycle** · **gate** · **review pack** · **Candidate** ·
 
 ## 6. Frontière Notion / Git
 
-| Notion (PD-06B futur) | Git (source de vérité) |
+| Notion (PD-06B ✓ · validée Morris) | Git (source de vérité) |
 |-----------------------|------------------------|
 | Parcours Discovery L0–L2 | Brouillons editorial complets |
 | Portail Acte VII simplifié | Templates · routing · core |
@@ -276,7 +276,7 @@ Toute divergence se tranche **en faveur de Git** après merge validé.
 
 > **Revenez au parcours Discovery ou approfondissez depuis la source Git de référence.**
 
-**PD-07A (migration legacy)** — hors cycle PD-06A · plan redirections §00–11 futur.
+**PD-07A mergé (PR #201)** — migration legacy validée Morris (PD-07B) · redirections §00–11 en annexe.
 
 ---
 
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md
index 1b5a298..68da6a3 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md
@@ -13,7 +13,7 @@
 | **Horodatage** | 2026-07-14 19:05 Europe/Paris (CEST) |
 | **Niveau lecture** | L0 |
 | **Durée cible** | 30 secondes à 3 minutes (hero + orientation) |
-| **Implémentation Notion** | PD-02B ✓ (Hub + Acte I) — document source Git PD-02A |
+| **Implémentation Notion** | Réalisée et validée par Morris (PD-02B à PD-07B) — source Git PD-02A à PD-06A |
 | **Audience** | Tous personas — orientation |
 
 ---
@@ -141,7 +141,7 @@ SFIA n'est pas un produit SaaS. C'est une **méthode gouvernée** et une **faço
 | **Contenu** | Hub complet · **Acte I** intégral |
 | **Pages / actes** | Hub → Acte I |
 | **Résultat** | « Je comprends pourquoi ChatGPT ou Cursor seuls ne suffisent pas » |
-| **CTA** | Acte II *(PD-03A)* ou porte persona |
+| **CTA** | Acte II ou porte persona |
 
 ---
 
@@ -155,7 +155,7 @@ SFIA n'est pas un produit SaaS. C'est une **méthode gouvernée** et une **faço
 | **Résultat** | « Je vois des livrables concrets et un cadre crédible » |
 | **CTA** | Acte III (extrait) ou contact Morris |
 
-*Actes II et IV : cycles éditoriaux futurs — liens de navigation à compléter.*
+*Actes II et IV disponibles — parcours I → II → IV (teaser) puis Acte III selon le temps.*
 
 ---
 
@@ -189,10 +189,10 @@ Navigation **intégrée à la page** — la sidebar Notion n'est pas la navigati
 
 | Persona | Question | Entrée recommandée | Parcours | CTA |
 |---------|----------|-------------------|----------|-----|
-| **Dirigeant PME** | « Pourquoi investir dans une méthode ? » | Parcours 10 min | Hub → Acte I → Acte VI.1 (futur) | Comprendre le risque maîtrisé |
+| **Dirigeant PME** | « Pourquoi investir dans une méthode ? » | Parcours 10 min | Hub → Acte I → Acte VI.1 | Comprendre le risque maîtrisé |
 | **Chef de projet / PO** | « Comment structurer sans surcharger ? » | Parcours 20 min | Acte I → II → III (extrait) | Voir cycles et livrables |
 | **Équipe technique** | « Où sont les garde-fous ? » | Porte « Livrables & traçabilité » | Acte IV → VII (orientation) | Lien Git |
-| **ESN / partenaire** | « Puis-je reproduire cette offre ? » | Porte « Partenaire » | Acte II → V → VI.4 (futur) | Gouvernance Morris |
+| **ESN / partenaire** | « Puis-je reproduire cette offre ? » | Porte « Partenaire » | Acte II → V → VI.4 | Gouvernance Morris |
 | **Prospect non technique** | « C'est quoi concrètement ? » | Parcours 3 min | Hero + Acte I (ouverture) | Acte I complet |
 
 **Bloc navigation cible (PD-02B) :**
@@ -211,13 +211,13 @@ Navigation **intégrée à la page** — la sidebar Notion n'est pas la navigati
 
 | Acte | Question | Statut éditorial |
 |------|----------|------------------|
-| **I** | Pourquoi SFIA existe ? | **PD-02A** — brouillon présent |
-| **II** | En quoi SFIA diffère-t-elle ? | **PD-03A** — brouillon en revue |
-| **III** | À quoi ressemble un projet ? | Futur **PD-04A** (NovaBuild) |
-| **IV** | Que produit-on ? | Futur **PD-05A** |
-| **V** | Pourquoi ça tient ? | Futur **PD-05A** |
-| **VI** | Comment me projeter ? | Futur **PD-06A** |
-| **VII** | Où approfondir la méthode ? | Futur **PD-06A** |
+| **I** | Pourquoi SFIA existe ? | ✓ mergé (PD-02A) |
+| **II** | En quoi SFIA diffère-t-elle ? | ✓ mergé (PD-03A) |
+| **III** | À quoi ressemble un projet ? | ✓ mergé (PD-04A — NovaBuild) |
+| **IV** | Que produit-on ? | ✓ mergé (PD-05A) |
+| **V** | Pourquoi ça tient ? | ✓ mergé (PD-05A) |
+| **VI** | Comment me projeter ? | ✓ mergé (PD-06A — hub + VI.1 à VI.4) |
+| **VII** | Où approfondir la méthode ? | ✓ mergé (PD-06A) |
 
 Le Hub **annonce** le voyage — il ne livre pas la méthode complète.
 
@@ -283,8 +283,8 @@ Lien cible PD-02B : page Acte I en enfant direct du Hub.
 | CTA | Destination | Profil |
 |-----|-------------|--------|
 | Choisir mon parcours (10 min) | Acte I | Dirigeant, prospect |
-| Voir ce que SFIA produit | Acte IV (futur) | PO, technique |
-| Comprendre la gouvernance | Acte V (futur) | ESN, contributeur |
+| Voir ce que SFIA produit | Acte IV | PO, technique |
+| Comprendre la gouvernance | Acte V | ESN, contributeur |
 | Aller à la méthode détaillée | Acte VII + Git | Technique, méthode |
 | Statut Candidate · Sources Git | Meta footer | Tous |
 
@@ -294,13 +294,18 @@ Lien cible PD-02B : page Acte I en enfant direct du Hub.
 
 ```text
 Hub Discovery
-├── ACTE I — Pourquoi SFIA existe          ← PD-02A
-├── ACTE II — Une nouvelle façon…           (futur)
-├── ACTE III — Suivons NovaBuild            (futur)
-├── ACTE IV — Ce que SFIA produit           (futur)
-├── ACTE V — Pourquoi cela fonctionne       (futur)
-├── ACTE VI — Se projeter                   (futur)
-├── ACTE VII — Explorer la méthode          (futur)
+├── ACTE I — Pourquoi SFIA existe
+├── ACTE II — Une nouvelle façon de conduire un projet
+├── ACTE III — Suivons NovaBuild
+├── ACTE IV — Ce que SFIA produit
+├── ACTE V — Pourquoi cela fonctionne
+├── ACTE VI — Se projeter
+│   ├── VI.1 — Dirigeant PME
+│   ├── VI.2 — Chef de projet / PO
+│   ├── VI.3 — Équipe technique
+│   └── VI.4 — ESN / partenaire
+├── ACTE VII — Explorer la méthode
+├── Annexes SFIA
 └── Meta — Candidate · Git · Morris
 ```
 

```

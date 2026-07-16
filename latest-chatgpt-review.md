# SFIA Review Pack — Discovery Corrections PD-08B.1

**Horodatage :** 2026-07-16 11:25 Europe/Paris (CEST)
**Repository :** mcleland147/sfia-workspace
**Workspace :** /Users/morris/Projects/sfia-workspace
**Cycle :** PD-08B.1 — métadonnées personas VI.1–VI.4 (mono-cycle, profil Light)
**Rôle exécuteur :** Cursor (fermeture ANOM-04 résiduel personas)
**Profil SFIA :** Light
**Typologie v2.4 :** DOC
**Branche projet :** `documentation/sfia-discovery-pd-08-qa`
**HEAD :** `1125972bb1a78379cdc485250bf34625141bdde6`
**origin/main :** `1125972bb1a78379cdc485250bf34625141bdde6`
**merge-base (HEAD, origin/main) :** `1125972bb1a78379cdc485250bf34625141bdde6`
**Référence QA :** PD-08A — verdict READY WITH EDITORIAL RESERVES
**Verdict cycle :** **PD-08B.1 FINAL CORRECTIONS READY FOR MORRIS REVIEW**

---

## Synthèse exécutive

Mono-cycle **PD-08B.1** : correction unique de la métadonnée **Implémentation Notion** sur les **4 personas** Acte VI (VI.1–VI.4), alignée sur le lot **PD-08B** (9 fichiers Hub/README/Actes II–VII). Working tree cumulé : **13 fichiers** editorial (+67 / −59). Aucune modification corps Acte VII dans PD-08B.1 (déjà nettoyé en PD-08B).

| Élément | Valeur |
|---------|--------|
| Fichiers PD-08B.1 | 4 (personas uniquement) |
| Fichiers cumulés (PD-08B + PD-08B.1) | 13 |
| Lignes cumulées | +67 / −59 |
| Commit projet | **Non** — gate Morris |
| Rapport PD-08A (`09-sfia-discovery-pd-08-qa-report.md`) | **Untracked** — inchangé hors ce cycle |

---

## Sources consultées

- `method/sfia-fast-track/documentation/notion/discovery/editorial/` — corpus brouillons Discovery (Git)
- Pack précédent `.tmp-sfia-review/chatgpt-review.md` (PD-08B)
- `method/sfia-fast-track/documentation/notion/discovery-product-design/09-sfia-discovery-pd-08-qa-report.md` — référence PD-08A (non commité)
- Ripgrep ciblé — motifs « futur » / gates obsolètes post-PD-07B
- `git diff` / `git diff --stat` / `git diff --check` sur branche `documentation/sfia-discovery-pd-08-qa`

---

## Fichiers NEW dans PD-08B.1 (périmètre cycle)

Uniquement les **4 personas** — une ligne métadonnée chacune :

| Fichier | Ancien | Nouveau |
|---------|--------|---------|
| `sfia-discovery-act-06-1-sme-leader-editorial-draft.md` | `Implémentation Notion \| Non — gate PD-06B futur` | `Implémentation Notion \| Réalisée et validée par Morris — source Git PD-06A` |
| `sfia-discovery-act-06-2-project-manager-po-editorial-draft.md` | idem | idem |
| `sfia-discovery-act-06-3-technical-team-editorial-draft.md` | idem | idem |
| `sfia-discovery-act-06-4-esn-partner-editorial-draft.md` | idem | idem |

**Hors périmètre PD-08B.1 :** Hub, README, Actes II–VII (déjà traités PD-08B).

---

## Acte VII — vérification (PD-08B.1)

**Constat :** aucun changement requis ni appliqué dans PD-08B.1 sur `sfia-discovery-act-07-explore-the-method-editorial-draft.md`.

**Vérification :**

1. Le `git diff` cumulé Acte VII provient exclusivement du lot **PD-08B** (métadonnée + 4 lignes corps : couches Discovery, bases embed, frontière Notion/Git, note PD-07A).
2. Ripgrep motifs interdits (`gate PD-06B futur`, `PD-06B futur`, `PD-07A futur`, `Notion futur`, `Implémentation Notion … Non … futur`) : **0 occurrence** dans `editorial/`.
3. PD-08B.1 n'ajoute aucun hunk sur Acte VII (delta personas = 4 fichiers VI.x uniquement).

**Verdict Acte VII :** déjà propre post-PD-08B — **OK pour gate Morris** sans action supplémentaire.

---

## Ripgrep — motifs gates / Notion obsolètes

```text
$ rg -n "gate PD-06B futur|PD-06B futur|PD-07A futur|Notion futur|Implémentation Notion.*Non.*futur" method/sfia-fast-track/documentation/notion/discovery/editorial
(aucune occurrence)
```

## Ripgrep — toutes occurrences « futur »

```text
$ rg -n "futur" method/sfia-fast-track/documentation/notion/discovery/editorial
method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md:169:*Contrats commerciaux · licensing · redistribution — absents — décision Morris future.*
method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md:118:| SFIA 3.0 ou une baseline future | Le contenu Discovery est **Candidate** ; la baseline opérationnelle reste **v2.4** |
```

### Qualification des « futur » restants

| Fichier | Ligne | Qualification |
|---------|-------|---------------|
| `sfia-discovery-hub-editorial-draft.md` | baseline **future** (SFIA 3.0) | **Légitime** — baseline produit future vs Candidate Discovery v2.4 |
| `sfia-discovery-act-06-4-esn-partner-editorial-draft.md` | décision Morris **future** (contrats commerciaux) | **Légitime** — réserve commerciale explicite, hors promesse Notion |

Tous les usages « futur » liés aux gates PD-06B / navigation trompeuse sont **éliminés**.

---

## QA critères — replay (sous-ensemble PD-08A + PD-08B)

| Critère | Statut | Commentaire |
|---------|--------|-------------|
| **C12** | **PASS** | Hub §8/§14 + README + personas metadata alignés |
| **C13** | **PASS** | CTAs / arborescence Hub — pas de suffixe futur résiduel |
| **C18** | **PARTIAL** | Candidate cohérent en Git ; badge Notion non prouvé runtime |
| **C1** | **PARTIAL** | Pas de test reformulation utilisateur |
| **C3** | **PARTIAL** | Lecture experte / diff uniquement |
| **C9** | **NOT TESTABLE** | Parcours utilisateur réel — hors runtime |
| **C16** | **NOT TESTABLE** | Mobile Notion — hors runtime |

**Rapport PD-08A :** fichier untracked inchangé — non inclus dans le diff editorial.

---

## Décisions Morris (gate commit / push / PR)

| Gate | Question | État |
|------|----------|------|
| **M7** | GO commit **13 fichiers** editorial (PD-08B + PD-08B.1) sur `documentation/sfia-discovery-pd-08-qa` ? | **En attente Morris** |
| **M7b** | GO push + PR vers `main` ? | **En attente Morris** |
| **D1** | Message commit unique vs séquentiel PD-08B / PD-08B.1 ? | **Arbitrage Morris** |
| **D2** | Inclure rapport `09-sfia-discovery-pd-08-qa-report.md` dans le même commit/PR ? | **Hors diff actuel** |

**Recommandation Cursor :** commit unique « docs(discovery): PD-08B editorial resync + PD-08B.1 persona metadata » après revue Morris.

---

## git diff --stat (cumul 13 fichiers — recalculé)

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

## git diff --check (cumul)

```text
(aucune erreur — sortie vide)
```

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

---

*Fin du pack PD-08B.1 — généré 2026-07-16 11:25 CEST*

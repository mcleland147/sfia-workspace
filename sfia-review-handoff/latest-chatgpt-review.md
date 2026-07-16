# SFIA Review Pack — Discovery Corrections PD-08B

**Horodatage :** 2026-07-16 10:45 Europe/Paris (CEST)
**Repository :** mcleland147/sfia-workspace
**Workspace :** /Users/morris/Projects/sfia-workspace
**Cycle :** PD-08B — corrections éditoriales (resync métadonnées post-PD-08A)
**Rôle exécuteur :** Cursor (corrections corpus ciblées — 9 fichiers editorial)
**Profil SFIA :** Standard
**Typologie v2.4 :** DOC
**Branche projet :** `documentation/sfia-discovery-pd-08-qa`
**HEAD :** `1125972bb1a78379cdc485250bf34625141bdde6`
**origin/main :** `1125972bb1a78379cdc485250bf34625141bdde6`
**merge-base (HEAD, origin/main) :** `1125972bb1a78379cdc485250bf34625141bdde6`
**Référence QA :** PD-08A — verdict READY WITH EDITORIAL RESERVES
**Verdict cycle :** **PD-08B CORRECTIONS READY FOR MORRIS REVIEW**

---

## Synthèse exécutive

Corrections mono-cycle PD-08B appliquées sur **9 fichiers** editorial (Hub, README, Actes II–VII hub metadata + transitions ANOM-05). Objectif : fermer ANOM-01 à ANOM-03, ANOM-05, ANOM-06 et le lot ANOM-04 sur les **actes modifiés** ; personas VI.1–VI.4 **hors périmètre** (métadonnées résiduelles documentées).

| Élément | Valeur |
|---------|--------|
| Fichiers modifiés | 9 (editorial uniquement) |
| Lignes | +59 / −51 |
| Commit projet | **Non** — working tree modifié, gate Morris |
| Rapport PD-08A | Untracked (hors ce diff) |

---

## Table anomalies — traitement PD-08B

| ID | Fichier | Section | Ancien (résumé) | Nouveau (résumé) | Justification |
|----|---------|---------|-----------------|------------------|---------------|
| **ANOM-01** | `sfia-discovery-hub-editorial-draft.md` | §8 — Statuts actes | Actes II–VII « Futur PD-0xA » / en revue | ✓ mergé (PD-03A–PD-06A) | Aligner Hub sur vérité Git post-merge |
| **ANOM-02** | `sfia-discovery-hub-editorial-draft.md` | §13 CTAs · §14 arborescence | Destinations « (futur) » · arbre sans VI.1–VI.4 | CTAs Actes IV/V directs · arbre complet + Annexes | Navigation d'entrée non trompeuse (C13) |
| **ANOM-03** | `editorial/README.md` | En-tête · §6 · §10 gates M1–M8 · §11 | PD-07B futur · M1–M7 en attente · branche PD-07A | PD-08B courant · PD-07A/B ✓ · gates ✓ | Gouvernance documentaire alignée PR #201 + PD-07B Morris |
| **ANOM-04** | Actes II–VII (7 fichiers) | Métadonnées « Implémentation Notion » | « Non — gate PD-0xB futur » | « Réalisée et validée par Morris — source Git PD-0xA » | **Partiel** — voir note ci-dessous |
| **ANOM-05** | `act-03-4-release-and-run` · `act-05-why-it-works` | Transitions fin d'acte | « *(futur PD-05A/06A)* » | Libellés CTA sans suffixe futur | Cohérence locale parcours |
| **ANOM-06** | `sfia-discovery-hub-editorial-draft.md` | §6.3 parcours 20 min | « cycles futurs — liens à compléter » | Actes II et IV disponibles | Parcours teaser documenté |

### Note ANOM-04 (partiel)

**Personas VI.1–VI.4 — modification FORBIDDEN dans PD-08B.** Les fichiers suivants conservent la métadonnée résiduelle :

| Fichier | Ligne résiduelle |
|---------|------------------|
| `sfia-discovery-act-06-1-sme-leader-editorial-draft.md` | `Implémentation Notion \| Non — gate PD-06B futur` |
| `sfia-discovery-act-06-2-project-manager-po-editorial-draft.md` | idem |
| `sfia-discovery-act-06-3-technical-team-editorial-draft.md` | idem |
| `sfia-discovery-act-06-4-esn-partner-editorial-draft.md` | idem |

**Action recommandée :** lot PD-08B bis ou PD-09 si Morris autorise le périmètre personas.

---

## QA critères — replay post-corrections (sous-ensemble PD-08A)

| Critère | Statut PD-08A | Statut PD-08B | Commentaire |
|---------|---------------|---------------|-------------|
| **C1** | PARTIAL | **PARTIAL** | Pas de test reformulation utilisateur |
| **C3** | PARTIAL | **PARTIAL** | Lecture simulée experte uniquement |
| **C10** | PARTIAL | **PARTIAL** | Git conforme ; Notion non crawlé |
| **C12** | PARTIAL | **PASS** | Hub §8/§14 + README resynchronisés |
| **C13** | PARTIAL | **PASS** | CTAs et arborescence Hub à jour |
| **C14** | PARTIAL | **PARTIAL** | Durées cibles non chronométrées |
| **C17** | PARTIAL | **PARTIAL** | Markdown OK ; Notion non testé |
| **C18** | PARTIAL | **PARTIAL** | Candidate en Git ; badge Notion non prouvé |

**Non rejoués ici :** C9, C16 — **NOT TESTABLE** (inchangé).

---

## Réserves ouvertes

| Réserve | Détail |
|---------|--------|
| Personas metadata | VI.1–VI.4 — gate PD-06B futur (ANOM-04 résiduel) |
| Acte VII corps | Lignes « Notion futur » / « PD-06B futur » **toujours présentes** dans le corps (tables portes · comparaison Git/Notion) — hors périmètre metadata-only PD-08B |
| C9 / C16 | Tests utilisateurs · mobile Notion — **NOT TESTABLE** sans runtime |
| PD-07B Notion | Validation Morris déclarée — non vérifiée runtime Cursor |

---

## Décisions Morris (gate commit / push / PR)

| Gate | Question | État |
|------|----------|------|
| **M7** | GO commit corrections PD-08B sur `documentation/sfia-discovery-pd-08-qa` ? | **En attente Morris** |
| **M7b** | GO push + PR vers `main` ? | **En attente Morris** |
| **D1** | Accepter ANOM-04 résiduel personas ou extension périmètre ? | **Arbitrage requis** |
| **D2** | Commit rapport `09-sfia-discovery-pd-08-qa-report.md` (untracked) ? | **Hors pack diff** |

**Recommandation Cursor :** commit unique « docs(discovery): PD-08B editorial metadata resync » (9 fichiers) après revue Morris ; PR séparée ou même PR que rapport PD-08A selon préférence.

---

## git diff --stat

```
.../notion/discovery/editorial/README.md           | 47 ++++++++++++----------
 ...-02-new-way-to-run-a-project-editorial-draft.md |  2 +-
 ...ery-act-03-4-release-and-run-editorial-draft.md |  2 +-
 ...very-act-03-follow-novabuild-editorial-draft.md |  2 +-
 ...ry-act-04-what-sfia-produces-editorial-draft.md |  2 +-
 ...iscovery-act-05-why-it-works-editorial-draft.md |  4 +-
 ...very-act-06-project-yourself-editorial-draft.md |  2 +-
 ...ry-act-07-explore-the-method-editorial-draft.md |  2 +-
 .../sfia-discovery-hub-editorial-draft.md          | 47 ++++++++++++----------
 9 files changed, 59 insertions(+), 51 deletions(-)
```

## git diff --check

```
(aucune erreur — sortie vide)
```

---

## Diff intégral — fichiers modifiés (9)

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
index 0df155b..0a62b56 100644
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

## Handoff

Ce pack remplace `latest-chatgpt-review.md` sur branche `sfia/review-handoff` (worktree `sfia-review-handoff/`).

**Verdict final :** **PD-08B CORRECTIONS READY FOR MORRIS REVIEW**

# SFIA Review Pack — Discovery Editorial PD-03A corrective (Acte II) R1–R4

**Horodatage :** 2026-07-14 ~20:45 Europe/Paris (CEST)
**Repository :** mcleland147/sfia-workspace
**Workspace :** /Users/morris/Projects/sfia-workspace
**Cycle :** PD-03A — Préparation éditoriale Git (Acte II — nouvelle façon de conduire un projet)
**Sous-cycle :** Correctif ChatGPT R1–R4 (borné)
**Type de cycle :** Product Design — couche éditoriale lecteur
**Profil SFIA :** Standard
**Typologie v2.4 :** DOC
**Statut livrables :** Candidate — brouillons éditoriaux non commités
**Branche projet :** `documentation/sfia-discovery-act-02-editorial`
**HEAD / base / origin/main :** `4994954f195169a3262910439fcd2455955c38f5`
**Implémentation Notion :** PD-02B ✓ (Hub + Acte I) · PD-03B futur
**Capitalisation méthode :** Non
**Niveau review pack :** full (1 NEW + 7 MOD + diffs Hub/I)
**Handoff avant :** `origin/sfia/review-handoff` @ `3af3c8a243be65c047444e40ed57bb776062bd08`
**Verdict :** **ACT II EDITORIAL CORRECTED — READY FOR CHATGPT RE-REVIEW**

---

## Décision Morris — GO correction R1–R4 (borné)

| Élément | Décision |
|---------|----------|
| **Périmètre** | R1–R4 uniquement — pas d'extension Acte II hors réserves |
| **Corpus mergé** | Hub + Acte I — alignement références PD autorisé |
| **Acte II** | §2 · §3 · §6 — formulations qualitatives (R3 · R4) |
| **Commit projet** | **Non** — branche `documentation/sfia-discovery-act-02-editorial` reste non commitée |
| **Handoff** | Publication `sfia/review-handoff` autorisée |

---

## Réserves ChatGPT R1–R4 — levées (corrections exactes)

| Réserve | Objet | Avant (revue initiale) | Après (correctif) | Fichiers |
|---------|-------|------------------------|-------------------|----------|
| **R1** | Continuité Acte I → II / III — cycles PD | NovaBuild teaser : Acte III = cycle PD-03A ; suite Acte II = cycle PD-04A ; grisé Notion PD-04B | Acte III = **PD-04A** ; Acte II = **PD-03A** ; grisé **PD-03B** | `sfia-discovery-act-01-why-sfia-exists-editorial-draft.md` |
| **R2** | Table navigation Hub — slots PD par acte | II futur PD-04A · III futur PD-03A (NovaBuild) · IV–V PD-04A · VI–VII PD-05A ; CTA « futur PD-04A » | II **PD-03A** en revue · III **PD-04A** (NovaBuild) · IV–V **PD-05A** · VI–VII **PD-06A** ; CTA Acte II *(PD-03A)* | `sfia-discovery-hub-editorial-draft.md` |
| **R3** | Contraste tripartite — ton non absolutiste | §2 fragilité classique « Lourdeur, lenteur, coût… » ; §3 Vitesse « Souvent lente au démarrage » ; Capitalisation « Difficile sans REX formalisé » ; Limites « Coût, lenteur, rigidité possible » | §2 « Coordination potentiellement lourde selon l'organisation » ; Vitesse « Démarrage parfois plus long selon le cadre et les validations » ; Capitalisation « Dépend des pratiques de documentation et de REX » ; Limites « Rigidité possible selon le cadre et la gouvernance » | `sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md` |
| **R4** | Gates Morris — formulation sponsor | §6 clôture « décisions qui **coûtent cher** » | « décisions qui **engagent durablement le projet** » | `sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md` |

**Hors R1–R4 (déjà dans cycle initial) :** roadmap Product Design · README editorial · 06/08 — renumérotation PD-03 slot Acte II · PD-08/09 QA/capitalisation.

---

## Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| toplevel | `/Users/morris/Projects/sfia-workspace` |
| Branche | `documentation/sfia-discovery-act-02-editorial` |
| HEAD | `4994954f195169a3262910439fcd2455955c38f5` ✓ |
| origin/main | `4994954f195169a3262910439fcd2455955c38f5` |
| Commits ahead of main (projet) | **0** — aucun commit sur branche projet |
| staged (scope projet) | **aucun** |
| **Verdict** | **PASS** |

### git status --porcelain (workspace)

```
 M method/sfia-fast-track/documentation/notion/discovery-product-design/06-sfia-discovery-target-information-architecture.md
 M method/sfia-fast-track/documentation/notion/discovery-product-design/07-sfia-discovery-transformation-roadmap.md
 M method/sfia-fast-track/documentation/notion/discovery-product-design/08-sfia-discovery-acceptance-framework.md
 M method/sfia-fast-track/documentation/notion/discovery-product-design/README.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/README.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-01-why-sfia-exists-editorial-draft.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md
?? .sfia/
?? .tmp-sfia-review/
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md
?? sfia-review-handoff/
```

**Périmètre PD-03A corrective :** 1 NEW + 7 MOD sous `method/sfia-fast-track/documentation/notion/…` (Hub + Acte I inclus pour R1–R2).

---

## Fichiers livrables (corrective)

| # | Fichier | Rôle |
|---|---------|------|
| NEW | `discovery/editorial/sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md` | Acte II (R3 · R4) |
| MOD | `discovery/editorial/sfia-discovery-hub-editorial-draft.md` | R2 |
| MOD | `discovery/editorial/sfia-discovery-act-01-why-sfia-exists-editorial-draft.md` | R1 |
| MOD | `discovery/editorial/README.md` | PD-03A · PD-02B ✓ · séquence |
| MOD | `discovery-product-design/06-sfia-discovery-target-information-architecture.md` | PD-04B+ · PD-07B |
| MOD | `discovery-product-design/07-sfia-discovery-transformation-roadmap.md` | PD-02B · incréments · séquence |
| MOD | `discovery-product-design/08-sfia-discovery-acceptance-framework.md` | PD-08 QA |
| MOD | `discovery-product-design/README.md` | PD-08–09 |

**Lignes Acte II (NEW) :** 238

---

## QA — grep forbidden + références PD

### 14 patterns interdits (8 fichiers scope)

| Pattern | Résultat |
|---------|----------|
| `Morris tranchera` | PASS (absent) |
| `à valider` | PASS (absent) |
| `BatiNova` | PASS (absent) |
| `fiction sauf` | PASS (absent) |
| `Statistiques génériques` | PASS (absent) |
| `cas générique inspiré Chantiers360` | PASS (absent) |
| `fil rouge alternatif` | PASS (absent) |
| `fil rouge définitif` | PASS (absent) |
| `TODO` / `TBD` / `FIXME` / `PLACEHOLDER` / `WIP` / `Lorem ipsum` | PASS (absent) |
| `équipe IA qui accélère` | PASS (absent) |

### Cohérence PD (échantillon)

| Contrôle | Résultat |
|----------|----------|
| Acte III NovaBuild → PD-04A (editorial) | PASS |
| Acte II cycle → PD-03A (Acte I teaser) | PASS |
| Permutation II/III Hub table | PASS (post R2) |
| QA corpus scope | **PASS** |

---

## git diff --stat (tracked — corrective)

```
 ...ia-discovery-target-information-architecture.md |   4 +-
 .../07-sfia-discovery-transformation-roadmap.md    | 167 +++++++++++----------
 .../08-sfia-discovery-acceptance-framework.md      |   4 +-
 .../notion/discovery-product-design/README.md      |   4 +-
 .../notion/discovery/editorial/README.md           | 124 +++++++--------
 ...overy-act-01-why-sfia-exists-editorial-draft.md |   6 +-
 .../sfia-discovery-hub-editorial-draft.md          |  14 +-
 7 files changed, 156 insertions(+), 167 deletions(-)
```

**NEW (untracked) :**

```
 .../sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md | 238 +++
```

---

## git diff — Hub + Acte I (corrections PD R1–R2)

```diff
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-01-why-sfia-exists-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-01-why-sfia-exists-editorial-draft.md
index 46de9d9..56239a6 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-01-why-sfia-exists-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-01-why-sfia-exists-editorial-draft.md
@@ -215,7 +215,7 @@ Le dirigeant de NovaBuild — PME BTP fictive — veut piloter chantiers et rés
 
 Il ouvre Cursor sur un dossier local. L'IA avance vite sur des écrans. Mais **qui a validé** la règle de clôture des réserves ? **Où est la trace** de la décision sur les rôles utilisateurs ?
 
-NovaBuild n'est **pas** un client réel. C'est une **situation reconnaissable** — pour introduire le problème avant le fil rouge complet (Acte III, cycle PD-03A).
+NovaBuild n'est **pas** un client réel. C'est une **situation reconnaissable** — pour introduire le problème avant le fil rouge complet (Acte III, cycle **PD-04A**).
 
 ---
 
@@ -311,7 +311,7 @@ La question suivante :
 
 > **« En quoi SFIA diffère-t-elle concrètement d'un projet classique — ou d'une utilisation libre de ChatGPT et Cursor ? »**
 
-C'est l'**Acte II — Une nouvelle façon de piloter un projet** *(cycle PD-04A)*.
+C'est l'**Acte II — Une nouvelle façon de piloter un projet** *(cycle **PD-03A**)*.
 
 **→ Continuer : ACTE II**
 
@@ -334,7 +334,7 @@ C'est l'**Acte II — Une nouvelle façon de piloter un projet** *(cycle PD-04A)
 - Callout NovaBuild « fiction pédagogique » sur §13
 - Callout non-promesses sur §18
 - Badge durée « ~10 min »
-- Acte II grisé jusqu'à PD-04B
+- Acte II grisé jusqu'à PD-03B
 - Aucun prompt · commande · routing détaillé
 
 ---
diff --git a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md
index 8ea42e0..54ebee4 100644
--- a/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md
+++ b/method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md
@@ -141,7 +141,7 @@ SFIA n'est pas un produit SaaS. C'est une **méthode gouvernée** et une **faço
 | **Contenu** | Hub complet · **Acte I** intégral |
 | **Pages / actes** | Hub → Acte I |
 | **Résultat** | « Je comprends pourquoi ChatGPT ou Cursor seuls ne suffisent pas » |
-| **CTA** | Acte II (futur PD-04A) ou porte persona |
+| **CTA** | Acte II *(PD-03A)* ou porte persona |
 
 ---
 
@@ -212,12 +212,12 @@ Navigation **intégrée à la page** — la sidebar Notion n'est pas la navigati
 | Acte | Question | Statut éditorial |
 |------|----------|------------------|
 | **I** | Pourquoi SFIA existe ? | **PD-02A** — brouillon présent |
-| **II** | En quoi SFIA diffère-t-elle ? | Futur PD-04A |
-| **III** | À quoi ressemble un projet ? | Futur PD-03A (NovaBuild) |
-| **IV** | Que produit-on ? | Futur PD-04A |
-| **V** | Pourquoi ça tient ? | Futur PD-04A |
-| **VI** | Comment me projeter ? | Futur PD-05A |
-| **VII** | Où approfondir la méthode ? | Futur PD-05A |
+| **II** | En quoi SFIA diffère-t-elle ? | **PD-03A** — brouillon en revue |
+| **III** | À quoi ressemble un projet ? | Futur **PD-04A** (NovaBuild) |
+| **IV** | Que produit-on ? | Futur **PD-05A** |
+| **V** | Pourquoi ça tient ? | Futur **PD-05A** |
+| **VI** | Comment me projeter ? | Futur **PD-06A** |
+| **VII** | Où approfondir la méthode ? | Futur **PD-06A** |
 
 Le Hub **annonce** le voyage — il ne livre pas la méthode complète.
```

---

## Acte II — sections 2 · 3 · 6 (après correctif R3–R4)

```markdown
## 2. Trois façons de conduire le projet

En pratique, trois postures reviennent souvent :

| Posture | Idée dominante | Force | Fragilité typique |
|---------|----------------|-------|-------------------|
| **Projet classique** | Cadre, rôles, documents, comités | Expertise reconnue, gouvernance structurée | Coordination potentiellement lourde selon l'organisation |
| **IA libre** (ChatGPT, Cursor seuls) | Vitesse, réactivité, « on avance tout de suite » | Accélération locale, idées, code | Contexte volatile, décisions implicites, trace faible |
| **SFIA** | Cycles courts + IA assistée + décision humaine + trace Git | Vitesse **et** gouvernance visible | Exige discipline et gates — pas une baguette magique |

SFIA ne nie pas la valeur du projet classique ni la puissance de l'IA. Elle **organise** les deux dans une chaîne lisible.

---


## 3. Contraste tripartite

Comparaison **pédagogique qualitative** — pas de benchmark chiffré.

| Dimension | Projet classique | IA libre | SFIA |
|-----------|------------------|----------|------|
| **Cadre** | Cahier des charges, comité, planning | Ad hoc, session par session | **Cycles** bornés avec intention claire |
| **Vitesse** | Démarrage parfois plus long selon le cadre et les validations | Très rapide en local | Rapide **avec** périmètre et validation |
| **Traçabilité** | Variable selon maturité doc | Faible entre sessions | **Git** — source de vérité |
| **Décision** | Comité, sponsor, MOA | Utilisateur seul | **Morris** aux gates structurants + vous sur le métier |
| **Livrables** | Documents projet, livrables contractuels | Fragments, brouillons, code isolé | **Artefacts par cycle** — vérifiables |
| **Continuité du contexte** | Dépend des outils et des personnes | Perdue entre conversations | Reprise via repo et cycles |
| **Capitalisation** | Dépend des pratiques de documentation et de REX | Rare | Retours d'expérience intégrés à la méthode |
| **Limites** | Rigidité possible selon le cadre et la gouvernance | Chaos, sur-confiance, rework | Discipline requise ; pas de garantie absolue |

---


## 6. Le rôle des gates Morris

Certaines décisions ne doivent **pas** être déléguées à l'IA :

- **Périmètre** — que couvre vraiment cette version ?
- **Architecture** — choix structurants qui engagent la suite
- **Publication** — merge, release, visibilité externe
- **Déploiement** — mise en production ou environnement sensible

Une **gate** est un point d'arrêt explicite : le livrable est prêt · Morris (ou le décideur désigné) **tranche** · la trace est conservée.

Cela ne signifie pas que Morris micro-manage chaque ligne de code. Cela signifie que **les décisions qui engagent durablement le projet** restent humaines et documentées.

---

```

---

## Editorial README — séquence narrative · PD-02B · cycles A/B

```markdown
## 2. Séquence narrative (decision Morris)

```text
Hub + Acte I ✓ → Acte II (en cours) → Acte III NovaBuild → IV–V → VI–VII
```

**Acte II avant Acte III** — le contraste et le modèle SFIA précèdent le fil rouge composite.

---

## 3. Inventaire des brouillons

| # | Fichier | Acte | Statut editorial Git |
|---|---------|------|----------------------|
| 1 | [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md) | Hub | ✓ mergé (PD-02A) |
| 2 | [sfia-discovery-act-01-why-sfia-exists-editorial-draft.md](sfia-discovery-act-01-why-sfia-exists-editorial-draft.md) | I | ✓ mergé (PD-02A) |
| 3 | [sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) | II | **PD-03A — revue** |

---

## 4. Ordre de lecture

1. **Hub** — orientation · parcours · portes persona  
2. **Acte I** — pourquoi SFIA existe  
3. **Acte II** — comment SFIA organise le projet  
4. **Acte III** *(futur PD-04A)* — fil rouge NovaBuild  

---

## 5. Positionnement cycles A / B

| Incrément | Editorial Git (A) | Notion (B) |
|-----------|-------------------|------------|
| Hub + I | PD-02A ✓ | **PD-02B ✓** — Hub + Acte I Notion finalisés |
| Acte II | **PD-03A** (présent) | PD-03B — futur |
| Acte III | PD-04A — futur | PD-04B |

Référence roadmap : [07-sfia-discovery-transformation-roadmap.md](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

---

## 6. Règles éditoriales

Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contract.md`

- 80 % métier / valeur · 20 % fonctionnel (Actes I–II)
- NovaBuild = cas composite · aucun chiffre non sourcé
- Opacité méthodologique sélective

---

## 7. Garde-fous

- Aucune page Notion · aucun prompt catalog · aucune capitalisation baseline

---

## 8. Décisions Morris validées

- PD-01 · PD-02A mergés ✓
- **PD-02B finalisé** (Hub + Acte I Notion) ✓
- **Acte II avant Acte III** ✓
- NovaBuild composite ✓
- Aucune action Notion dans PD-03A ✓

---

## 9. Décisions restantes (Acte II)

| Gate | Objet | Statut |
|------|-------|--------|
| **M1** | Structure Acte II | Validée |
| **M2** | Contraste tripartite | Validée (R3) |
| **M3** | Niveau exposition méthode | Validée |
| **M4** | Roadmap renumérotée | Validée (R1–R2) |
| **M5** | GO commit / push / PR | En attente |
| **M6** | GO PD-03B Notion (distinct) | Hors cycle |

---

## 10. Critères d'entrée PD-03B

- Acte II validé Morris · merge Git recommandé · GO implémentation Notion L0

---

```

---

## Roadmap — PD-02B · dépendances · séquence · mapping

```markdown
### PD-02B — Hub + Acte I — implémentation Notion ✓

| Prérequis | PD-02A mergé (PR #196) ✓ |
| Notion | Hub Discovery créé · Acte I créé |
| Source Git | Corpus PD-02A mergé via PR #196 |
| Statut | **Finalisé** |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

Git reste la **source de vérité** — Notion = couche métier et pédagogique.

### PD-03A — Acte II — préparation Git

| Objectif | Brouillon **Acte II** — contraste tripartite, rôles, cycles, gates |
| Prérequis | Acte I editorial disponible ✓ |
| Gate | M1–M3 Morris · validation contraste et confidentialité |

*Cycle présent — brouillon en cours de revue.*

### PD-03B — Acte II — implémentation Notion

Matérialisation Acte II après validation PD-03A + merge recommandé.

### PD-04A — Acte III — fil rouge NovaBuild — préparation Git

| Objectif | Brouillons III.1–III.4 — cas composite NovaBuild |
| Prérequis | **PD-03A validé** — Acte II avant fil rouge |
| Gate | Distinction fiction / preuves |

### PD-04B — Acte III — implémentation Notion

Pages fil rouge NovaBuild.

### PD-05A — Actes IV et V — préparation Git

Galerie livrables · garanties et limites.

### PD-05B — Actes IV et V — implémentation Notion

Matérialisation L0.

### PD-06A — Actes VI et VII — préparation Git

Personas · annexes méthode simplifiées.

### PD-06B — Actes VI et VII — implémentation Notion

Pages persona + portail annexes.

### PD-07A — Migration legacy — préparation Git

Plan redirections §00–11 → architecture Discovery.

### PD-07B — Migration legacy — Notion

Redirections · archivage — gate Morris GO migration.

### PD-08 — QA narrative et métier

Framework §08 · dépend PD-02B–07B.

### PD-09 — Décision capitalisation

Évaluer promotion method/core — GO Morris.

---

## 4. Dépendances globales

```text
PD-01 ✓
├── PD-02A ✓ → PD-02B ✓
├── PD-03A → PD-03B     ← Acte II (avant III)
├── PD-04A → PD-04B     ← NovaBuild (après II)
├── PD-05A → PD-05B
├── PD-06A → PD-06B
├── PD-07A → PD-07B
├── PD-08 (après 07B)
└── PD-09 (après PD-08)
```

**Séquence éditoriale Git recommandée :** 03A → 04A → 05A → 06A → 07A (parallélisme A possible avec gates par incrément).

---

## 5. Distinction phases (synthèse)

```text
Conception (PD-01) ✓
  → Hub + I (02A ✓ / 02B)
    → Acte II (03A / 03B)
      → Acte III NovaBuild (04A / 04B)
        → IV–V (05) → VI–VII (06) → Migration (07)
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

```

---

## FULL CONTENT — Acte II (intégral)

```markdown
# ACTE II — Une nouvelle façon de conduire un projet

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-03A (préparation éditoriale Git — Acte II) |
| **Acte** | II — Une nouvelle façon de conduire un projet |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-act-02-editorial` |
| **HEAD / base** | `4994954f195169a3262910439fcd2455955c38f5` |
| **Horodatage** | 2026-07-14 20:25 Europe/Paris (CEST) |
| **Niveau lecture** | L1 |
| **Durée cible** | 8–10 minutes |
| **Question lecteur** | En quoi SFIA est-elle différente d'une conduite classique ou d'un usage libre de ChatGPT et Cursor ? |
| **Implémentation Notion** | Non — gate PD-03B futur |
| **Réaction recherchée** | « Je comprends comment SFIA organise le projet — je suis prêt à suivre NovaBuild. » |

---

## 1. Ouverture et continuité avec l'Acte I

Dans l'**Acte I**, vous avez reconnu un problème familier : une intention métier simple devient une chaîne complexe de responsabilités, de livrables et de décisions — et les outils IA utilisés sans cadre n'y suffisent pas.

La question qui suit est naturelle :

> **Comment construire un système cohérent — sans reconstruire une usine à processus ?**

L'**Acte II** répond à cette question. Il ne répète pas la douleur du flou : il présente **le modèle visible** de SFIA — assez concret pour vous projeter, assez sobre pour rester crédible.

---

## 2. Trois façons de conduire le projet

En pratique, trois postures reviennent souvent :

| Posture | Idée dominante | Force | Fragilité typique |
|---------|----------------|-------|-------------------|
| **Projet classique** | Cadre, rôles, documents, comités | Expertise reconnue, gouvernance structurée | Coordination potentiellement lourde selon l'organisation |
| **IA libre** (ChatGPT, Cursor seuls) | Vitesse, réactivité, « on avance tout de suite » | Accélération locale, idées, code | Contexte volatile, décisions implicites, trace faible |
| **SFIA** | Cycles courts + IA assistée + décision humaine + trace Git | Vitesse **et** gouvernance visible | Exige discipline et gates — pas une baguette magique |

SFIA ne nie pas la valeur du projet classique ni la puissance de l'IA. Elle **organise** les deux dans une chaîne lisible.

---

## 3. Contraste tripartite

Comparaison **pédagogique qualitative** — pas de benchmark chiffré.

| Dimension | Projet classique | IA libre | SFIA |
|-----------|------------------|----------|------|
| **Cadre** | Cahier des charges, comité, planning | Ad hoc, session par session | **Cycles** bornés avec intention claire |
| **Vitesse** | Démarrage parfois plus long selon le cadre et les validations | Très rapide en local | Rapide **avec** périmètre et validation |
| **Traçabilité** | Variable selon maturité doc | Faible entre sessions | **Git** — source de vérité |
| **Décision** | Comité, sponsor, MOA | Utilisateur seul | **Morris** aux gates structurants + vous sur le métier |
| **Livrables** | Documents projet, livrables contractuels | Fragments, brouillons, code isolé | **Artefacts par cycle** — vérifiables |
| **Continuité du contexte** | Dépend des outils et des personnes | Perdue entre conversations | Reprise via repo et cycles |
| **Capitalisation** | Dépend des pratiques de documentation et de REX | Rare | Retours d'expérience intégrés à la méthode |
| **Limites** | Rigidité possible selon le cadre et la gouvernance | Chaos, sur-confiance, rework | Discipline requise ; pas de garantie absolue |

---

## 4. Le modèle visible de SFIA

SFIA distribue les responsabilités entre **cinq acteurs visibles** :

| Acteur | Rôle visible | Ce qu'il ne fait pas seul |
|--------|--------------|---------------------------|
| **Morris** | Décide et arbitre aux **gates** structurants (périmètre, architecture, publication, merge, déploiement…) | Remplacer votre métier |
| **ChatGPT** | Qualifie, structure, challenge, prépare documents et analyses | Exécuter dans le repository |
| **Cursor** | Exécute localement dans un **périmètre borné** — code, docs, commandes | Décider du scope ou valider seul |
| **Git** | Conserve la **source de vérité** — historique, PR, preuves | Expliquer la valeur au lecteur métier |
| **Notion Discovery** | Couche **métier et pédagogique** — comprendre avant d'entrer dans Git | Miroir intégral de la méthode |

**Trois mouvements à distinguer :**

1. **Proposition** — IA et équipe produisent, structurent, suggèrent
2. **Exécution** — Cursor (et humains) matérialisent dans le repo
3. **Décision** — Morris (ou votre sponsor) tranche aux points structurants

Sans cette séparation, la vitesse de l'IA devient du bruit.

---

## 5. Le rôle des cycles

Un **cycle SFIA** est une unité de travail **bornée** — compréhensible en langage métier :

| Élément | Sens pour le lecteur |
|---------|---------------------|
| **Intention** | Pourquoi ce cycle maintenant ? |
| **Sources** | Sur quoi s'appuie-t-on ? (docs, décisions, repo) |
| **Périmètre** | Ce qui est in / out pour cette étape |
| **Livrable** | Ce qui doit exister à la fin (document, code, rapport…) |
| **Validation** | Qui relit, qui teste, quels critères |
| **Décision** | Go / no-go / ajustement avant la suite |

Exemples métier (sans catalogue exhaustif) : cadrage fonctionnel, conception UX, delivery d'un incrément, QA, release.

> SFIA comporte **plusieurs types de cycles** — leur matrice détaillée reste dans Git, pas dans cette page Discovery.

---

## 6. Le rôle des gates Morris

Certaines décisions ne doivent **pas** être déléguées à l'IA :

- **Périmètre** — que couvre vraiment cette version ?
- **Architecture** — choix structurants qui engagent la suite
- **Publication** — merge, release, visibilité externe
- **Déploiement** — mise en production ou environnement sensible

Une **gate** est un point d'arrêt explicite : le livrable est prêt · Morris (ou le décideur désigné) **tranche** · la trace est conservée.

Cela ne signifie pas que Morris micro-manage chaque ligne de code. Cela signifie que **les décisions qui engagent durablement le projet** restent humaines et documentées.

---

## 7. Une chaîne de travail traçable

Schéma textuel — chaîne métier SFIA :

```text
Besoin métier
    → Qualification (ChatGPT + équipe)
        → Préparation (spec, plan, périmètre)
            → Exécution (Cursor + dev / rédaction)
                → Revue (pair, QA, Morris selon gate)
                    → Décision (gate)
                        → Trace Git (commit, PR, merge)
                            → Cycle suivant
```

Chaque maillon produit un **artefact identifiable**. Vous pouvez reprendre le projet sans reconstruire le contexte dans une conversation IA.

---

## 8. Ce que cette approche change

Lorsque la méthode est **correctement appliquée**, SFIA peut :

- **maintenir** la continuité du contexte entre sessions et intervenants ;
- **séparer** clairement proposition, exécution et décision ;
- **rendre visibles** les livrables — pas seulement l'activité ;
- **faciliter** la reprise après changement d'équipe ou de prestataire ;
- **donner** au dirigeant ou sponsor des points de contrôle lisibles ;
- **améliorer** progressivement la méthode via retours d'expérience.

Formulations **conditionnelles** : le gain dépend du respect du cadre et de l'engagement métier.

---

## 9. Ce que SFIA ne change pas

| Réalité | Précision |
|---------|-----------|
| Comprendre le métier | SFIA structure — elle ne devine pas votre contexte |
| Risques projet | Ils existent toujours — le cadre les rend plus visibles |
| Expertises | Métier, architecture, QA, sécurité restent nécessaires |
| Tests | Indispensables — SFIA les intègre, ne les supprime pas |
| Responsabilité | Votre organisation reste responsable du produit livré |
| Garantie | Aucune promesse de succès automatique |

---

## 10. Transition vers l'Acte III

Vous disposez maintenant d'un **cadre** : contrastes, rôles, cycles, gates, traçabilité.

Il reste à le **voir en mouvement** sur un projet concret.

**NovaBuild** — cas **pédagogique composite** (entreprise fictive, récit scénarisé, catégories de livrables inspirées d'actifs SFIA vérifiables) — servira de fil rouge dans l'**Acte III**. Ce n'est ni un client réel ni un témoignage chiffré.

> **Voyons maintenant comment ce cadre accompagne un projet concret, de l'intention à la mise en service.**

**→ Continuer : ACTE III — Suivons NovaBuild** *(cycle PD-04A)*

---

## 11. Navigation cible

| Élément | Valeur |
|---------|--------|
| **Précédent** | Acte I — Pourquoi SFIA existe |
| **Suivant** | Acte III — Suivons NovaBuild |
| **Fil d'Ariane** | Discovery · Acte II · Une nouvelle façon de conduire un projet |
| **Parcours 20 min** | Hub → Acte I → **Acte II** → teaser Acte III |

---

## 12. Notes d'implémentation Notion PD-03B

| Élément | Recommandation |
|---------|----------------|
| **Layout** | Tableau tripartite en colonnes Notion · schéma chaîne en callout |
| **Toggles** | Rôles Morris/ChatGPT/Cursor · cycles · gates |
| **Callout** | « Candidate » · « Pas de matrice routing ici » |
| **Liens** | Acte I ← → Acte III (Acte III grisé jusqu'à PD-04B) |
| **Interdit** | Prompt catalog · routing exhaustif · commandes Git |

---

## 13. Sources Git

| Source | Usage |
|--------|-------|
| `discovery-product-design/02-sfia-discovery-narrative-architecture.md` | Cadrage Acte II |
| `discovery-product-design/03-sfia-discovery-storyline.md` | Contraste tripartite |
| `discovery-product-design/05-sfia-discovery-editorial-contract.md` | Ton · promesses |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Rôles IA |
| `discovery/editorial/sfia-discovery-act-01-why-sfia-exists-editorial-draft.md` | Continuité Acte I |

---

## 14. Critères d'acceptation de l'Acte II

| # | Critère | Statut brouillon |
|---|---------|------------------|
| B1 | Continuité Acte I sans répétition | ✓ |
| B2 | Contraste tripartite qualitatif | ✓ |
| B3 | Rôles Morris / ChatGPT / Cursor / Git / Notion | ✓ |
| B4 | Proposition / exécution / décision séparées | ✓ |
| B5 | Cycles en langage métier — pas catalogue 15 cycles | ✓ |
| B6 | Gates Morris — exemples, pas liste exhaustive | ✓ |
| B7 | Aucune statistique non sourcée | ✓ |
| B8 | Non-promesses explicites | ✓ |
| B9 | NovaBuild annoncé comme composite — pas récit III | ✓ |
| B10 | Transition Acte III naturelle | ✓ |

**Verdict brouillon :** soumis à revue Morris (gates M1–M3).

---

## Contenu lecteur — corps principal (PD-03B)

*Les sections 1–10 constituent le contenu lecteur. Métadonnées §11–14 réservées gouvernance et implémentation.*
```

---

## FULL CONTENT — `discovery/editorial/README.md`

```markdown
# SFIA Discovery — Editorial (brouillons lecteur)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillons éditoriaux Discovery |
| **Cycle courant** | PD-03A — Acte II (préparation Git) |
| **Propriétaire** | Morris |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Branche projet** | `documentation/sfia-discovery-act-02-editorial` |
| **HEAD / base** | `4994954f195169a3262910439fcd2455955c38f5` |
| **Horodatage** | 2026-07-14 20:45 Europe/Paris (CEST) |
| **Implémentation Notion** | PD-02B ✓ (Hub + Acte I) · PD-03B+ futurs |
| **Capitalisation méthode** | Non |

---

## 1. Rôle du dossier

Brouillons **destinés au lecteur final** de SFIA Discovery — source Git stable avant implémentation Notion (cycles PD-nB).

Non substituts au Product Design PD-01 ni aux drafts P0 §00–11.

---

## 2. Séquence narrative (decision Morris)

```text
Hub + Acte I ✓ → Acte II (en cours) → Acte III NovaBuild → IV–V → VI–VII
```

**Acte II avant Acte III** — le contraste et le modèle SFIA précèdent le fil rouge composite.

---

## 3. Inventaire des brouillons

| # | Fichier | Acte | Statut editorial Git |
|---|---------|------|----------------------|
| 1 | [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md) | Hub | ✓ mergé (PD-02A) |
| 2 | [sfia-discovery-act-01-why-sfia-exists-editorial-draft.md](sfia-discovery-act-01-why-sfia-exists-editorial-draft.md) | I | ✓ mergé (PD-02A) |
| 3 | [sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) | II | **PD-03A — revue** |

---

## 4. Ordre de lecture

1. **Hub** — orientation · parcours · portes persona  
2. **Acte I** — pourquoi SFIA existe  
3. **Acte II** — comment SFIA organise le projet  
4. **Acte III** *(futur PD-04A)* — fil rouge NovaBuild  

---

## 5. Positionnement cycles A / B

| Incrément | Editorial Git (A) | Notion (B) |
|-----------|-------------------|------------|
| Hub + I | PD-02A ✓ | **PD-02B ✓** — Hub + Acte I Notion finalisés |
| Acte II | **PD-03A** (présent) | PD-03B — futur |
| Acte III | PD-04A — futur | PD-04B |

Référence roadmap : [07-sfia-discovery-transformation-roadmap.md](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

---

## 6. Règles éditoriales

Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contract.md`

- 80 % métier / valeur · 20 % fonctionnel (Actes I–II)
- NovaBuild = cas composite · aucun chiffre non sourcé
- Opacité méthodologique sélective

---

## 7. Garde-fous

- Aucune page Notion · aucun prompt catalog · aucune capitalisation baseline

---

## 8. Décisions Morris validées

- PD-01 · PD-02A mergés ✓
- **PD-02B finalisé** (Hub + Acte I Notion) ✓
- **Acte II avant Acte III** ✓
- NovaBuild composite ✓
- Aucune action Notion dans PD-03A ✓

---

## 9. Décisions restantes (Acte II)

| Gate | Objet | Statut |
|------|-------|--------|
| **M1** | Structure Acte II | Validée |
| **M2** | Contraste tripartite | Validée (R3) |
| **M3** | Niveau exposition méthode | Validée |
| **M4** | Roadmap renumérotée | Validée (R1–R2) |
| **M5** | GO commit / push / PR | En attente |
| **M6** | GO PD-03B Notion (distinct) | Hors cycle |

---

## 10. Critères d'entrée PD-03B

- Acte II validé Morris · merge Git recommandé · GO implémentation Notion L0

---

## 11. Liens

→ [Product Design](../discovery-product-design/README.md) · [Roadmap](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)
```

---

## FULL CONTENT — `discovery-product-design/07-sfia-discovery-transformation-roadmap.md`

```markdown
# 07 — Roadmap de transformation — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-14 20:25 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-act-02-editorial` |
| **HEAD** | `4994954f195169a3262910439fcd2455955c38f5` |
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

**Ordre narratif obligatoire :** Hub + Acte I → **Acte II** → Acte III (NovaBuild) → Actes IV–V → Actes VI–VII → migration → QA → capitalisation.

**Règle structurante :** chaque incrément de contenu suit **deux cycles distincts** — préparation Git (A) puis implémentation Notion (B).

> La source éditoriale Git doit être validée avant toute implémentation Notion. Le merge préalable est **recommandé** pour les incréments structurants.

---

## 2. Modèle A / B

| Cycle | Périmètre | Gate |
|-------|-----------|------|
| **A — Git** | Brouillons Markdown complets | GO Morris commit/PR/merge |
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

### PD-03A — Acte II — préparation Git

| Objectif | Brouillon **Acte II** — contraste tripartite, rôles, cycles, gates |
| Prérequis | Acte I editorial disponible ✓ |
| Gate | M1–M3 Morris · validation contraste et confidentialité |

*Cycle présent — brouillon en cours de revue.*

### PD-03B — Acte II — implémentation Notion

Matérialisation Acte II après validation PD-03A + merge recommandé.

### PD-04A — Acte III — fil rouge NovaBuild — préparation Git

| Objectif | Brouillons III.1–III.4 — cas composite NovaBuild |
| Prérequis | **PD-03A validé** — Acte II avant fil rouge |
| Gate | Distinction fiction / preuves |

### PD-04B — Acte III — implémentation Notion

Pages fil rouge NovaBuild.

### PD-05A — Actes IV et V — préparation Git

Galerie livrables · garanties et limites.

### PD-05B — Actes IV et V — implémentation Notion

Matérialisation L0.

### PD-06A — Actes VI et VII — préparation Git

Personas · annexes méthode simplifiées.

### PD-06B — Actes VI et VII — implémentation Notion

Pages persona + portail annexes.

### PD-07A — Migration legacy — préparation Git

Plan redirections §00–11 → architecture Discovery.

### PD-07B — Migration legacy — Notion

Redirections · archivage — gate Morris GO migration.

### PD-08 — QA narrative et métier

Framework §08 · dépend PD-02B–07B.

### PD-09 — Décision capitalisation

Évaluer promotion method/core — GO Morris.

---

## 4. Dépendances globales

```text
PD-01 ✓
├── PD-02A ✓ → PD-02B ✓
├── PD-03A → PD-03B     ← Acte II (avant III)
├── PD-04A → PD-04B     ← NovaBuild (après II)
├── PD-05A → PD-05B
├── PD-06A → PD-06B
├── PD-07A → PD-07B
├── PD-08 (après 07B)
└── PD-09 (après PD-08)
```

**Séquence éditoriale Git recommandée :** 03A → 04A → 05A → 06A → 07A (parallélisme A possible avec gates par incrément).

---

## 5. Distinction phases (synthèse)

```text
Conception (PD-01) ✓
  → Hub + I (02A ✓ / 02B)
    → Acte II (03A / 03B)
      → Acte III NovaBuild (04A / 04B)
        → IV–V (05) → VI–VII (06) → Migration (07)
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

→ [08 Acceptation](08-sfia-discovery-acceptance-framework.md) · [README](README.md)
```

---

## FULL CONTENT — `discovery-product-design/06-sfia-discovery-target-information-architecture.md`

```markdown
# 06 — Architecture cible de l'information — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-14 18:10 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-product-design` |
| **HEAD** | `14446b91019c1e320c12533124201b9a3dd4863d` |

---

## 1. Objectif

Proposer une **nouvelle architecture de pages** orientée Discovery — sans supprimer réellement les pages Notion existantes. Mapping ancien → cible pour migration future.

---

## 2. Arborescence cible (narrative)

```text
SFIA Discovery — Accueil (Hub)
├── ACTE I — Pourquoi SFIA existe
├── ACTE II — Une nouvelle façon de piloter un projet
├── ACTE III — Suivons NovaBuild (fil rouge)
│   ├── III.1 Intention et cadrage
│   ├── III.2 Conception et UX
│   ├── III.3 Delivery et QA
│   └── III.4 Release et RUN
├── ACTE IV — Ce que SFIA produit (galerie livrables)
├── ACTE V — Pourquoi cela fonctionne (garanties et limites)
├── ACTE VI — Se projeter (par persona)
│   ├── VI.1 Dirigeant PME
│   ├── VI.2 Chef de projet
│   ├── VI.3 Équipe technique
│   └── VI.4 ESN partenaire
├── ACTE VII — Explorer la méthode (annexes)
│   ├── Cycles et profils (simplifié)
│   ├── Routage (orientation)
│   ├── Templates et assets (index)
│   ├── Gouvernance (résumé)
│   ├── Mettre SFIA en place
│   ├── Documents de référence (vue base)
│   └── Glossaire
└── Meta — Gouvernance espace · Sources Git · Statut Candidate
```

**Bases (position inchangée conceptuellement) :**

- **Référentiel SFIA** — embed Acte IV + VII
- **Cycles SFIA** — embed Acte VII

---

## 3. Table page actuelle → page cible

| Page P0 actuelle | Action cible | Destination narrative |
|------------------|--------------|---------------------|
| 00 Accueil | **Remplacer** | Hub Discovery (nouveau hero + parcours temps) |
| 01 Comprendre SFIA | **Fusionner** | Acte II + extrait Acte V |
| 02 Proposition de valeur | **Fusionner** | Acte I + Acte VI |
| 03 Comment fonctionne un cycle | **Déplacer** | Acte III (schéma) + Acte VII |
| 04 Cycles, profils, gates | **Renommer + simplifier** | Acte VII — Cycles (Candidate badge) |
| 05 Routage | **Réduire** | Acte VII — orientation uniquement |
| 06 Templates, prompts | **Index** | Acte VII — liens Référentiel |
| 07 Gouvernance | **Fusionner** | Acte V + Meta |
| 08 Mise en place | **Conserver annexe** | Acte VII |
| 10 Documents référence | **Conserver** | Acte VII — vue base |
| 11 Glossaire | **Conserver annexe** | Acte VII |

**§09 Cas d'usage :** création future P1 — hors parcours principal Discovery.

---

## 4. Table chapitre → question lecteur

| Chapitre | Question |
|----------|----------|
| Hub | Par où commencer selon mon temps ? |
| Acte I | Pourquoi SFIA ? |
| Acte II | En quoi est-ce différent ? |
| Acte III | Comment se déroule un vrai projet ? |
| Acte IV | Que produit-on ? |
| Acte V | Pourquoi faire confiance ? |
| Acte VI | Qu'est-ce que j'y gagne ? |
| Acte VII | Comment approfondir ? |

---

## 5. Table chapitre → source Git

| Chapitre | Sources principales |
|----------|---------------------|
| Acte I | engineering-principles, platform-architecture (résumé) |
| Acte II | operating-model, product-vision |
| Acte III | delivery-pipeline, projects/chantiers360 (synthèse) |
| Acte IV | bpmn-deliverables-standard, review pack examples |
| Acte V | rules-and-guardrails, publication-governance |
| Acte VI | product-vision personas, capitalization |
| Acte VII | editorial P0 existant, routing-guide (index) |

---

## 6. Table chapitre → preuve métier

| Chapitre | Preuve |
|----------|--------|
| Acte I | Anti-patterns documentés |
| Acte II | Tableau comparatif |
| Acte III | Fil rouge NovaBuild |
| Acte IV | Captures livrables |
| Acte V | Gates Morris, Git prime |
| Acte VI | Fiches persona |
| Acte VII | Bases peuplées |

---

## 7. Table chapitre → confidentialité

| Chapitre | Niveau max |
|----------|------------|
| I–VI | Public / pédagogique |
| VII cycles/routage | Pédagogique — pas catalog |
| VII templates | Index → Git |
| Meta | Gouvernance résumée |

---

## 8. Transitions précédent / suivant (extrait)

| Page | Précédent | Suivant |
|------|-----------|---------|
| Hub | — | Acte I ou parcours choisi |
| Acte I | Hub | Acte II |
| Acte II | I | III |
| Acte III.1 | II | III.2 |
| … | … | … |
| Acte VII | VI | Hub / Git |

*(Détail complet en implémentation PD-04B+)*

---

## 9. Portes d'entrée par persona

| Persona | Entrée | Parcours défaut |
|---------|--------|-----------------|
| Dirigeant PME | Hub → « 10 min » | I → II → VI.1 |
| PO | Hub → « Projet » | I → III |
| Technique | Hub → « Livrables » | IV → VII |
| ESN | Hub → « Partenaire » | II → VI.4 |
| Prospect | Hub → « 3 min » | I teaser |

---

## 10. Navigation globale

- **Hub central** — jamais sidebar Notion comme navigation primaire
- **Fil d'Ariane narratif** — Acte · Section
- **Parcours temps** — badges 3/10/20/45 min
- **Footer** — Git prime · Candidate · Morris · date sync

---

## 11. Niveaux de lecture L0–L4

| Niveau | Pages |
|--------|-------|
| L0 | Hub, Acte I teaser |
| L1 | I, II, VI |
| L2 | III, IV, V |
| L3 | VII setup, templates index |
| L4 | VII référence, glossaire complet |

---

## 12. Hypothèses

- Anciennes pages P0 **archivées** ou **redirigées** en PD-07B — pas supprimées sans GO
- Numérotation §00–11 **retirée du parcours principal** — conservée en métadonnées Git

---

## Liens

→ [07 Roadmap](07-sfia-discovery-transformation-roadmap.md) · [03 Storyline](03-sfia-discovery-storyline.md)
```

---

## FULL CONTENT — `discovery-product-design/08-sfia-discovery-acceptance-framework.md`

```markdown
# 08 — Framework d'acceptation — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-14 18:10 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-product-design` |
| **HEAD** | `14446b91019c1e320c12533124201b9a3dd4863d` |

---

## 1. Objectif

Définir les **critères de jugement** de la future expérience Discovery — avant et après implémentation Notion (PD-08).

---

## 2. Critères minimum (18)

| # | Critère | Mesure |
|---|---------|--------|
| C1 | Compréhension immédiate valeur | Reformulation 2 min post 10 min |
| C2 | Distinction classique / IA libre / SFIA | Quiz 3 items |
| C3 | Raconter SFIA avec ses mots | Entretien 5 min |
| C4 | Rôles Morris/ChatGPT/Cursor/Git/Notion | Schéma annoté |
| C5 | Projet bout en bout | Récit 5 phases minimum |
| C6 | Livrables concrets identifiés | ≥ 5 types cités |
| C7 | Garanties et limites | 2 garanties + 2 limites |
| C8 | Projection persona | « Mon cas » articulé |
| C9 | Envie poursuivre | Score ≥ 4/5 |
| C10 | Absence fuite méthodologique | Audit prompts/catalog |
| C11 | Absence promesse excessive | Revue éditoriale §05 |
| C12 | Cohérence Git | Métadonnées SHA |
| C13 | Navigation sans impasse | Walkthrough 4 parcours |
| C14 | Temps lecture maîtrisé | Parcours dans budget |
| C15 | Métier > méthode | Ratio contenu Actes I–VI |
| C16 | Mobile lisible | Test 2 pages |
| C17 | Accessibilité | Pas couleur seule |
| C18 | Candidate visible | Badge v2.5 |
| C19 | Distinction fiction NovaBuild / preuves SFIA | Test explicite post Acte III |
| C20 | Absence statistiques non sourcées | Revue Acte I + corpus — aucun chiffre sans source |

---

## 3. Grille revue Morris

| Domaine | Question | ☐ |
|---------|----------|---|
| Vision | IDE métier clair ? | |
| Narration | Actes cohérents ? | |
| Fil rouge | NovaBuild composite distingué des preuves réelles ? | |
| Chiffres | Aucune statistique non sourcée (Acte I) ? | |
| Confidentialité | Pas de fuite ? | |
| Promesses | Sobres ? | |
| Migration | Mapping P0 acceptable ? | |
| Roadmap | Cycles Git (A) / Notion (B) séparés ? | |
| GO PD-02A | Editorial Hub + Acte I autorisé ? | |

---

## 4. Tests utilisateurs

### 4.1 Lecteur non technique

- Parcours 10 min · Reformulation · Score C1, C3, C9

### 4.2 Chef de projet

- Parcours 30 min · Identification livrables · C5, C6

### 4.3 Développeur

- Acte VII + lien Git · Pas de frustration « manque détail » si renvoi clair · C4

### 4.4 Prospect PME

- Teaser 3 min + conviction partielle · C1, C8

### 4.5 Test confidentialité

- Chercher prompt catalog, routing exhaustif, automation — **doit échouer** sur Notion · C10

### 4.6 Test valeur

- « Qu'achète-on avec SFIA ? » — réponse métier sans jargon · C15

### 4.7 Test storytelling

- Récit NovaBuild fluide · C5

### 4.8 Test NovaBuild / preuves

- Après Acte III : le lecteur distingue fiction NovaBuild et preuves SFIA réelles · C19

### 4.9 Test statistiques

- Revue Acte I : aucun taux, économie ou gain chiffré sans source · C20

---

## 5. Verdicts possibles

| Verdict | Signification |
|---------|---------------|
| **DISCOVERY PRODUCT DESIGN CORRECTED — READY FOR COMMIT** | Réserves R1–R3 traitées ; corpus PD-01 prêt pour commit/PR |
| **DISCOVERY PRODUCT DESIGN READY** | Corpus PD-01 validé pour commit/PR |
| **READY WITH EDITORIAL RESERVES** | Corrections mineures documentées |
| **NARRATIVE INSUFFICIENT** | Actes ou fil rouge à retravailler |
| **VALUE PROPOSITION INSUFFICIENT** | Actes I–II faibles |
| **METHODOLOGY OVEREXPOSED** | Confidentialité violée |
| **MORRIS DECISION REQUIRED** | Arbitrage positioning |

---

## 6. Application cycle présent (PD-01)

Ce framework s'applique **pleinement** à PD-08 (QA Notion). Pour PD-01 :

- Revue Morris sur **documents Git** via critères C1–C8 en **lecture simulée**
- C10–C13 à l'implémentation
- Verdict attendu post-revue : **DISCOVERY PRODUCT DESIGN READY** ou réserves

---

## 7. Seuils GO / NO-GO implémentation

| Condition | GO PD-02A (Git) | GO PD-02B (Notion) |
|-----------|-----------------|---------------------|
| PD-01 merged | Requis | Requis |
| Fil rouge NovaBuild composite documenté | Requis | Requis |
| Brouillons Hub + Acte I validés Morris | Requis | Requis |
| Source Git stable (merge recommandé) | — | Requis |
| Contrat éditorial validé | Requis | Requis |
| Statistique non sourcée détectée | **NO-GO** | **NO-GO** |
| METHODOLOGY OVEREXPOSED | **NO-GO** | **NO-GO** |

---

## Liens

→ [05 Contrat éditorial](05-sfia-discovery-editorial-contract.md) · [07 Roadmap](07-sfia-discovery-transformation-roadmap.md)
```

---

## FULL CONTENT — `discovery-product-design/README.md`

```markdown
# SFIA Discovery Experience — Product Design (Cycle 2 fonctionnel)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — conception produit documentaire |
| **Usage** | Contrat Product Design « SFIA Discovery Experience » |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Propriétaire** | Morris |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Capitalisation méthode** | Non réalisée |
| **Implémentation Notion** | Cycles PD-nB distincts (après PD-nA Git) |
| **Horodatage** | 2026-07-14 18:10 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-product-design` |
| **HEAD source** | `14446b91019c1e320c12533124201b9a3dd4863d` |

---

## Rôle du dossier

Ce répertoire formalise le **contrat de Product Design** pour transformer l'espace Notion SFIA en **IDE métier** et **expérience de découverte du produit** — fondée sur une narration métier, fonctionnelle et orientée valeur.

| Principe | Application |
|----------|-------------|
| **Repartir du lecteur** | Parcours mental du non-initié — pas de l'arborescence §00–11 |
| **Storytelling** | Sept actes narratifs + fil rouge **NovaBuild** (cas composite validé) |
| **Transparence sélective** | Valeur et capacités visibles ; recettes internes masquées |
| **Git prime** | Conception dans Git ; Notion = couche d'expérience future |
| **Candidate** | Aucune baseline ; revue Morris avant implémentation |

---

## Constat de départ (UX-06)

L'espace Notion actuel (11 pages P0, bases Référentiel et Cycles) est **propre, structuré et cohérent visuellement** (contrat UX-01, UX-02–06). Toutefois la **profondeur éditoriale de valeur** reste insuffisante : le lecteur comprend les composants, cycles et acteurs, mais pas suffisamment **pourquoi SFIA existe**, **ce qu'elle transforme** et **comment se projeter**.

Ce cycle **ne modifie pas Notion** — il conçoit la transformation narrative cible.

---

## Inventaire des livrables (9)

| # | Fichier | Responsabilité |
|---|---------|----------------|
| 1 | [01-sfia-discovery-product-vision.md](01-sfia-discovery-product-vision.md) | Vision produit, promesse, anti-objectifs |
| 2 | [02-sfia-discovery-narrative-architecture.md](02-sfia-discovery-narrative-architecture.md) | Architecture en 7 actes |
| 3 | [03-sfia-discovery-storyline.md](03-sfia-discovery-storyline.md) | Scénario, fil rouge projet PME |
| 4 | [04-sfia-discovery-personas-and-reading-journeys.md](04-sfia-discovery-personas-and-reading-journeys.md) | 6 personas, 5 niveaux de lecture |
| 5 | [05-sfia-discovery-editorial-contract.md](05-sfia-discovery-editorial-contract.md) | Voix, confidentialité, matrice d'information |
| 6 | [06-sfia-discovery-target-information-architecture.md](06-sfia-discovery-target-information-architecture.md) | Nouvelle arborescence, mapping ancien → cible |
| 7 | [07-sfia-discovery-transformation-roadmap.md](07-sfia-discovery-transformation-roadmap.md) | Incréments PD-01, PD-nA/B, PD-08–09 |
| 8 | [08-sfia-discovery-acceptance-framework.md](08-sfia-discovery-acceptance-framework.md) | Critères d'acceptation, grilles de test |

---

## Ordre de lecture

1. Vision → 2. Architecture narrative → 3. Storyline → 4. Personas → 5. Contrat éditorial → 6. IA cible → 7. Roadmap → 8. Acceptation

---

## Relation avec les cycles antérieurs

| Cycle | Apport | Limite pour Discovery |
|-------|--------|------------------------|
| Notion cycle 1 | Vision produit, IA §01–11 | Trop structurée par numérotation |
| Editorial P0 (PR #193) | Contenu pages actuelles | Trop méthodologique, peu narratif |
| UX-01 (PR #194) | Navigation, design system | UX correcte, valeur métier insuffisante |
| **Discovery (présent)** | Narration, storytelling, IA cible | Conception uniquement |

---

## Trajectoire vers l'implémentation

```text
Product Design (présent) → validation Morris → préparation éditoriale Git
  → préparation éditoriale Git (PD-nA) → implémentation Notion (PD-nB) → QA (PD-08) → capitalisation (PD-09)
```

**Gates futurs :** GO commit/PR corpus · GO PD-02A editorial · GO PD-nB Notion · GO capitalisation.

---

## Fil rouge NovaBuild (décision Morris — R1)

> **NovaBuild** est un **cas pédagogique composite**. L'entreprise et le déroulé narratif sont **fictifs**. Les besoins, catégories de livrables, contrôles et mécanismes visibles sont **inspirés** de situations réalistes et d'actifs SFIA vérifiables (ex. catégories produites dans des cycles Chantiers360 documentés dans Git). Le récit **ne constitue ni un témoignage client ni la reproduction exacte** d'un projet réel.

| Type | NovaBuild |
|------|-----------|
| Entreprise | Fiction narrative |
| Enchaînement projet | Scénarisé pédagogiquement |
| Catégories de livrables | Inspirées d'actifs SFIA réels |
| Résultats chiffrés | **Interdits** sans source |

---

## Décisions Morris validées

- GO cycle Product Design Discovery
- GO nouvelle architecture narrative
- GO remise en question structure pages actuelles (proposition, pas exécution)
- GO storytelling orienté valeur
- GO fil rouge **NovaBuild** (cas composite) — R1
- Aucune modification Notion dans ce cycle

## Décisions non prises

- Validation architecture cible pages (implémentation)
- GO premier cycle PD-02A editorial
- GO implémentation Notion (PD-nB)
- Promotion baseline ou capitalisation méthode

---

## Garde-fous

- Ne pas modifier pages Notion, editorial, ux ou method/core
- Ne pas exposer prompts/templates complets
- Ne pas promouvoir v2.5/v2.6 baseline
- Ne pas committer ce cycle sans GO Morris
```

---

## Verdict final

**ACT II EDITORIAL CORRECTED — READY FOR CHATGPT RE-REVIEW**

# SFIA Review Pack — Discovery Editorial PD-04A (Acte III NovaBuild)

**Horodatage :** 2026-07-14 22:50 Europe/Paris (CEST)
**Repository :** mcleland147/sfia-workspace
**Workspace :** /Users/morris/Projects/sfia-workspace
**Cycle :** PD-04A — Préparation éditoriale Git (Acte III — Suivons NovaBuild)
**Type de cycle :** Product Design — couche éditoriale lecteur
**Profil SFIA :** Standard
**Typologie v2.4 :** DOC
**Statut livrables :** Candidate — brouillons éditoriaux non commités
**Branche projet :** `documentation/sfia-discovery-act-03-novabuild-editorial`
**HEAD / base / origin/main :** `a3b42d9c1bfcec2645ca6202e3c460da75e294f8`
**Implémentation Notion :** PD-02B ✓ · PD-03B ✓ · PD-04B futur
**Capitalisation méthode :** Non
**Niveau review pack :** full (5 NEW + 2 MOD + contenu intégral)
**Handoff avant :** `origin/sfia/review-handoff` @ `5c1a0828a444aec6680b86280bae9093d051a001`
**Verdict :** **ACT III EDITORIAL PREPARED — READY FOR CHATGPT REVIEW**

---

## Décision Morris — GO PD-04A

| Élément | Décision |
|---------|----------|
| **Périmètre** | Acte III hub + III.1–III.4 — sources éditoriales Git complètes |
| **Hors périmètre** | Notion PD-04B · commit · push projet · PR · merge · capitalisation |
| **Prérequis** | PD-03A/B ✓ (Acte II mergé + Notion finalisé) |
| **Gates** | M1–M5 contenu · M6 commit ultérieur · M7 Notion ultérieur |
| **Commit projet** | **Non** — branche projet reste non commitée |
| **Handoff** | Publication `sfia/review-handoff` autorisée |

---

## Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| toplevel | `/Users/morris/Projects/sfia-workspace` |
| Branche | `documentation/sfia-discovery-act-03-novabuild-editorial` |
| HEAD | `a3b42d9c1bfcec2645ca6202e3c460da75e294f8` ✓ |
| origin/main | `a3b42d9c1bfcec2645ca6202e3c460da75e294f8` |
| Commits ahead of main (projet) | **0** — aucun commit sur branche projet |
| staged (scope projet) | **aucun** |
| **Verdict** | **PASS** |

### git status --porcelain (périmètre projet)

```
M method/sfia-fast-track/documentation/notion/discovery-product-design/07-sfia-discovery-transformation-roadmap.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/README.md
?? .sfia/
?? .tmp-sfia-review/
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-2-design-and-ux-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-4-release-and-run-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-follow-novabuild-editorial-draft.md
?? sfia-review-handoff/
```

**Périmètre PD-04A :** 5 NEW Act III + 2 MOD (README editorial · roadmap 07).

---

## Fichiers livrables — line counts

| Fichier | Lignes |
|---------|--------|
| `sfia-discovery-act-03-follow-novabuild-editorial-draft.md` | 182 |
| `sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md` | 175 |
| `sfia-discovery-act-03-2-design-and-ux-editorial-draft.md` | 174 |
| `sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md` | 181 |
| `sfia-discovery-act-03-4-release-and-run-editorial-draft.md` | 162 |
| `README.md` | 123 |
| `07-sfia-discovery-transformation-roadmap.md` | 172 |

---

## git diff --stat (tracked)

```
.../07-sfia-discovery-transformation-roadmap.md    | 39 +++++++-------
 .../notion/discovery/editorial/README.md           | 63 ++++++++++++----------
 2 files changed, 56 insertions(+), 46 deletions(-)
```

**NEW (untracked) :**

```
 method/.../sfia-discovery-act-03-follow-novabuild-editorial-draft.md          | 182 +++
 method/.../sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md   | 175 +++
 method/.../sfia-discovery-act-03-2-design-and-ux-editorial-draft.md           | 174 +++
 method/.../sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md         | 181 +++
 method/.../sfia-discovery-act-03-4-release-and-run-editorial-draft.md         | 162 +++
```

---

## Matrice de traçabilité NovaBuild (10 étapes — explore agent)

| NovaBuild step | Deliverable category | Git source inspiration | Exposure level | Masked elements |
|----------------|---------------------|------------------------|----------------|-----------------|
| **Intention** | Cadrage / framing | `00-framing/2026-07-07-project-framing.md`, `README.md` | **L1 Discovery** — narrative intent, no repo dive | Morris decision prompts, bootstrap commit SHAs, pilot-selection scoring internals |
| **Cadrage** | Framing + scope | `00-framing/2026-07-05-detailed-framing.md`, `use-cases.md`, `business-rules.md`, `scope-boundaries.md` | **L1** — problem/scope story | Full risk registers, V0 exclusion enforcement details |
| **Conception** | Functional architecture | `01-functional-architecture/` (5 docs) | **L1** — domain/state summaries | Full state diagrams, decision IDs, navigation internals |
| **UX** | UX/UI + design | `02-ux-ui/` (5), `04-design/` (5), `06-figma-fidelity-spike/` (5), `06-ux-ui/r-ux-01-*` (3) | **L1** — screen map + flow names | Figma raw files/captures, pixel-diff reports, Penpot links |
| **Backlog** | Backlog items | `03-backlog/` (7 docs) | **L1** — epic/US titles only | Full acceptance criteria text, traceability matrix, increment sequencing |
| **Delivery** | Delivery artifacts | `07-delivery-inc-01/` … `07-delivery-inc-05/` (30 docs); `app/` code | **L2** — increment outcomes, PR phase categories (#95–#127) | Branch names, HEAD SHAs, file diffs, implementation details, CI config |
| **QA** | QA artifacts | `08-qa-test/` (37 docs); `app/e2e/*.spec.ts` | **L2** — gate names (QA-G3/G4), pass counts (16 E2E) | Full test scripts, runbook commands, `.env.test` values, Docker internals |
| **Release** | Deployment readiness | `05-technical-architecture/2026-07-06-validation-and-delivery-readiness.md` (pre-delivery only) | **L1** — "readiness gate" concept | **Entire category thin/absent** — no release notes, no prod deploy, no K0–K4; narrate as planned gap |
| **RUN** | Runbook / observability | `08-qa-test/inc-01/local-e2e-runbook.md`; `app/docker-compose.test.yml` | **L2** — "local test runbook exists" | Prod observability, incident response, monitoring; test-only scope |
| **Capitalisation** | REX / method extraction | `09-capitalization/` (6 docs); method standards in `method/sfia-fast-track/documentation/capitalization/sfia-v2/` | **L1** — verdicts & lessons (V2 NEEDS LIGHT CONSOLIDATION) | Pilot metrics raw tables, Morris time accounting, V0 comparison depth |

**Source explore agent :** `projects/chantiers360-v2/` (pilote SFIA — inspiration catégories, pas attribution client). NovaBuild = cas pédagogique composite.

---

## QA — 25 contrôles

| # | Contrôle | Résultat |
|---|----------|----------|
| Q1 | Branche = `documentation/sfia-discovery-act-03-novabuild-editorial` | **PASS** |
| Q2 | HEAD = `a3b42d9c1bfcec2645ca6202e3c460da75e294f8` (aligné `origin/main`) | **PASS** |
| Q3 | Aucun commit sur branche projet (0 ahead of main) | **PASS** |
| Q4 | Aucun fichier staged (scope projet) | **PASS** |
| Q5 | 5 fichiers Act III NEW untracked + README + roadmap MOD | **PASS** |
| Q6 | Acte II source mergée sur main (PR #197) | **PASS** |
| Q7 | Handoff avant = `5c1a0828a444aec6680b86280bae9093d051a001` | **PASS** |
| Q8 | Pattern `Morris tranchera` absent (5 drafts) | **PASS** |
| Q9 | Pattern `à valider` absent | **PASS** |
| Q10 | `BatiNova` absent | **PASS** |
| Q11 | TODO / TBD / FIXME / PLACEHOLDER / WIP / Lorem absent | **PASS** |
| Q12 | `équipe IA qui accélère` absent | **PASS** |
| Q13 | NovaBuild qualifié composite (A1) | **PASS** |
| Q14 | Séquences III.1–III.4 liées (A2) | **PASS** |
| Q15 | Moments de preuve P1–P4 (A3) | **PASS** |
| Q16 | Distinction fiction / catégories réelles (A4) | **PASS** |
| Q17 | Transition hub → III.1 (A5) | **PASS** |
| Q18 | Aucune statistique inventée (A6) | **PASS** |
| Q19 | Pas de duplication Acte IV (A7) | **PASS** |
| Q20 | Cycle README = PD-04A · Acte II/III slots cohérents | **PASS** |
| Q21 | Roadmap PD-03A/B ✓ · PD-04A cycle courant | **PASS** |
| Q22 | `client réel` / `témoignage` — contexte négation composite uniquement | **PASS** |
| Q23 | Chemins `projects/` non exposés en corps lecteur (gouvernance only) | **PASS** |
| Q24 | Matrice traçabilité 10 étapes NovaBuild présente review pack | **PASS** |
| Q25 | Décision Morris **GO PD-04A** documentée | **PASS** |

**Verdict QA :** **PASS** (25/25) — soumis à revue ChatGPT + gates Morris M1–M5.

---

## FULL CONTENT — `discovery/editorial/sfia-discovery-act-03-follow-novabuild-editorial-draft.md`

**Rôle :** Acte III — hub NovaBuild

```markdown
# ACTE III — Suivons NovaBuild

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-04A (préparation éditoriale Git — Acte III) |
| **Acte** | III — Suivons NovaBuild |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-act-03-novabuild-editorial` |
| **HEAD / base** | `a3b42d9c1bfcec2645ca6202e3c460da75e294f8` |
| **Horodatage** | 2026-07-14 22:50 Europe/Paris (CEST) |
| **Niveau lecture** | L1–L2 |
| **Durée cible** | 15–20 minutes (page + quatre séquences) |
| **NovaBuild** | **Cas pédagogique composite** |
| **Implémentation Notion** | Non — gate PD-04B futur |
| **Réaction recherchée** | « Je vois comment SFIA accompagne réellement un projet. » |

---

## 1. Continuité avec l'Acte II

Dans l'**Acte II**, vous avez vu **comment** SFIA organise un projet : contrastes, rôles, cycles, gates, traçabilité Git.

L'**Acte III** répond à la question suivante :

> **À quoi ressemble un projet conduit avec SFIA, de l'intention métier à la mise en service ?**

Vous allez suivre **NovaBuild** — pas pour copier un dossier technique, mais pour **reconnaître la chaîne** : intention → cadrage → conception → delivery → QA → release → exploitation → capitalisation.

---

## 2. Présentation de NovaBuild

> **NovaBuild** est une **PME du BTP fictive**. L'entreprise, les personnages et la chronologie sont **scénarisés** pour la pédagogie Discovery.

**Ce que NovaBuild n'est pas :**

- un client réel ;
- un témoignage ;
- une reproduction exacte d'un historique projet ;
- une preuve chiffrée de performance.

**Ce que NovaBuild permet :**

- illustrer une intention métier reconnaissable ;
- montrer comment SFIA structure les étapes ;
- relier fiction narrative et **catégories de livrables** vérifiables dans Git.

---

## 3. Le besoin métier initial

Le dirigeant de NovaBuild veut **piloter chantiers, interventions, photos terrain et réserves** — sans perdre le fil entre le bureau et le chantier.

Son équipe a déjà testé ChatGPT et Cursor « en libre ». Résultat : des fragments utiles, **aucune version de référence**, des règles métier implicites.

SFIA entre en jeu **après** cette prise de conscience — pas comme une baguette magique, mais comme un **cadre de conduite**.

---

## 4. Ce que nous allons suivre

Quatre séquences — chacune avec une question, un conflit, une preuve et une transition :

| Séquence | Question | Fichier |
|----------|----------|---------|
| **III.1** | Comment une demande simple devient-elle un projet borné ? | [Intention et cadrage](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md) |
| **III.2** | Comment transformer le cadrage en parcours cohérents ? | [Conception et UX](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md) |
| **III.3** | Comment livrer sans perdre décisions et qualité ? | [Delivery et QA](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md) |
| **III.4** | Comment passer à un service exploitable ? | [Release et RUN](sfia-discovery-act-03-4-release-and-run-editorial-draft.md) |

---

## 5. Vue du parcours projet

```text
Intention ──► Cadrage ──► Conception / UX ──► Delivery ──► QA
                                                      │
Release ◄── RUN readiness ◄── Merge validé ◄──────────┘
   │
Capitalisation proportionnée
```

Chaque étape produit des **artefacts identifiables** et des **points de décision humaine** — pas seulement du code ou des slides.

---

## 6. Les acteurs visibles

| Acteur | Rôle dans NovaBuild |
|--------|---------------------|
| **Dirigeant / sponsor NovaBuild** | Porte l'intention métier · valide le périmètre |
| **Chef de projet / PO** | Traduit le besoin · tient le backlog |
| **Équipe métier** | Règles chantier · réserves · terrain |
| **Morris** | Gates structurants — scope, architecture, merge, release |
| **ChatGPT** | Qualifie · structure · challenge · prépare documents |
| **Cursor** | Exécute dans le repo — docs et code bornés |
| **Git** | Source de vérité — historique · PR · preuves |

---

## 7. Les moments de preuve

Quatre moments clés — le lecteur doit **voir** que quelque chose existe, pas seulement entendre une promesse :

| # | Moment | Ce que le lecteur retient |
|---|--------|---------------------------|
| **P1** | Scope validé et versionné | « Le périmètre est explicite » |
| **P2** | Architecture fonctionnelle alignée avec l'UX | « Les écrans respectent les règles métier » |
| **P3** | Premier incrément mergé + QA documentée | « L'implémentation est reliée aux critères » |
| **P4** | Release et reprise du projet possibles | « Le projet survit au merge » |

---

## 8. Ce qui est réel et ce qui est scénarisé

| Élément | Statut NovaBuild |
|---------|------------------|
| Entreprise · dirigeant · équipe | **Fiction pédagogique** |
| Enchaînement des étapes | **Scénarisé** — lisible et pédagogique |
| Catégories de livrables (cadrage, backlog, archi, UX, PR, QA, REX…) | **Inspirées** d'actifs SFIA vérifiables dans Git |
| Gates Morris | **Narrés** — reflètent la gouvernance SFIA |
| Métriques · délais · coûts · taux de bugs | **Absents** — non inventés |
| Attribution à un client réel | **Interdit** |

Les chemins Git détaillés et la matrice de traçabilité sont réservés aux **sections gouvernance** et au review pack — pas au corps lecteur.

---

## 9. Navigation vers III.1

Vous connaissez le cadre SFIA. NovaBuild va maintenant **montrer le premier mouvement** : transformer une demande large en projet borné.

> **Comment une demande simple devient-elle un projet borné et gouverné ?**

**→ Continuer : [ACTE III.1 — Intention et cadrage](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md)**

---

## 10. Notes d'implémentation PD-04B

| Élément | Recommandation |
|---------|----------------|
| **Structure Notion** | Page hub Acte III + 4 sous-pages enfant |
| **Navigation** | Fil d'Ariane · progression III.1 → III.4 |
| **Callouts** | « Composite » sur chaque page · distinction fiction / preuve |
| **Visuels** | Schéma parcours · icônes phases — pas de dump Git |
| **Interdit** | Chemins projects/ · prompts · commandes · contenu PR brut |

---

## 11. Sources Git (gouvernance)

| Source | Usage |
|--------|-------|
| `discovery-product-design/02-sfia-discovery-narrative-architecture.md` | Cadrage Acte III |
| `discovery-product-design/03-sfia-discovery-storyline.md` | Fil rouge NovaBuild |
| `discovery-product-design/06-sfia-discovery-target-information-architecture.md` | Architecture pages III |
| Pilote documentaire SFIA (catégories framing → capitalisation) | Inspiration catégories livrables — **non exposé lecteur** |
| `sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md` | Continuité Acte II |

---

## 12. Critères d'acceptation

| # | Critère | Statut |
|---|---------|--------|
| A1 | NovaBuild qualifié composite partout | ✓ |
| A2 | Quatre séquences III.1–III.4 liées | ✓ |
| A3 | Moments de preuve P1–P4 annoncés | ✓ |
| A4 | Distinction fiction / catégories réelles | ✓ |
| A5 | Transition vers III.1 | ✓ |
| A6 | Aucune statistique inventée | ✓ |
| A7 | Pas de duplication Acte IV | ✓ |

---

## Contenu lecteur — corps principal (PD-04B)

*Sections 1–9 ci-dessus.*
```

---

## FULL CONTENT — `discovery/editorial/sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md`

**Rôle :** Acte III.1 — intention et cadrage

```markdown
# ACTE III.1 — Intention et cadrage

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-04A — séquence III.1 |
| **Acte** | III — NovaBuild |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **NovaBuild** | Cas pédagogique composite |
| **Durée cible** | 4–5 minutes |
| **Question lecteur** | Comment une demande simple devient-elle un projet borné et gouverné ? |

---

## 1. La demande initiale

Laurent, dirigeant fictif de **NovaBuild**, formule une demande familière :

> « Je veux une application complète pour gérer mes chantiers, mes équipes terrain, les photos, les réserves et le suivi client. »

L'intention est **légitime**. Le problème : la demande mélange **plusieurs produits** — suivi opérationnel, gestion documentaire, relation client — sans règles métier stabilisées.

---

## 2. Utilisateurs et enjeux

| Profil | Besoin exprimé | Enjeu |
|--------|----------------|-------|
| **Dirigeant** | Vision globale des chantiers | Décisions sans données fiables |
| **Conducteur de travaux** | Suivre tâches et réserves sur le terrain | Saisie rapide · statuts clairs |
| **Assistante bureau** | Consolider l'information | Éviter doubles saisies |
| **Équipe terrain** | Photos et compte rendu | Lien chantier ↔ bureau |

Enjeux métier NovaBuild (fiction) : **chantiers · interventions · réserves · statuts · prochaines actions** — sans promettre un ERP complet dès le jour 1.

---

## 3. Premières ambiguïtés

Sans cadrage, plusieurs questions restent ouvertes :

- Qu'est-ce qu'une **réserve** « clôturée » ?
- Qui peut **modifier** le statut d'un chantier ?
- Les **photos** sont-elles dans le MVP ou plus tard ?
- Faut-il **devis et facturation** dès maintenant ?

Ces ambiguïtés ne se résolvent pas en codant plus vite — elles demandent **qualification et arbitrage**.

---

## 4. Qualification ChatGPT

Dans SFIA, **ChatGPT** intervient en amont de l'exécution :

- reformule la demande en **capacités métier** ;
- propose un **premier découpage** (in / out) ;
- signale les **zones floues** à trancher ;
- prépare une **note de cadrage** structurée.

ChatGPT **propose** — il ne valide pas seul le périmètre.

---

## 5. Arbitrage Morris

**Morris** intervient à la **gate de scope** :

- le MVP couvre-t-il le **socle chantier** utile ?
- les exclusions (devis, facturation, app native…) sont-elles **explicitées** ?
- l'équipe NovaBuild comprend-elle **ce qui n'est pas livré** au premier incrément ?

La décision est **documentée** — pas seulement oralisée en réunion.

---

## 6. Cadrage du MVP

Le périmètre retenu pour NovaBuild (fiction) se concentre sur une chaîne lisible :

```text
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

| Dans le MVP | Hors MVP (explicitement) |
|-------------|--------------------------|
| Création et fiche chantier | Devis · facturation · compta |
| Tâches et réserves par chantier | Planning avancé · Gantt |
| Statuts et prochaines actions | App mobile native |
| Compte rendu textuel | GED documentaire complète |

> **Note pédagogique :** cette structure de périmètre s'inspire de **catégories de cadrage** observables dans des projets SFIA documentés — le détail reste scénarisé pour NovaBuild.

---

## 7. Hypothèses et note de cadrage

La **note de cadrage** versionnée dans Git consolide :

- objectif du MVP ;
- utilisateurs prioritaires ;
- règles métier de base ;
- limites de scope ;
- risques identifiés ;
- critères de succès **qualitatifs** (pas de KPI inventés).

C'est le **premier livrable** que le lecteur peut relier à une trace — pas à une démo technique.

---

## 8. Premiers items de backlog

Le cadrage alimente un **backlog initial** — épics et user stories — sans encore entrer dans le code :

| Type | Exemple NovaBuild (fiction) |
|------|----------------------------|
| **Epic** | Piloter la liste des chantiers |
| **User story** | En tant que conducteur, je consulte les réserves ouvertes d'un chantier |
| **Critère d'acceptation** | Statuts réserves conformes aux règles métier validées |

Le backlog **n'est pas exhaustif** — il est **suffisant** pour lancer la conception.

---

## 9. Gate de validation du scope

| Élément | Statut |
|---------|--------|
| Périmètre MVP | Validé Morris |
| Exclusions | Documentées |
| Note de cadrage | Versionnée Git |
| Backlog initial | Présent |
| GO conception | Accordé |

**Moment de preuve P1 :** un cadrage explicite et une décision de scope **existent dans Git** — le projet ne repose plus sur une conversation floue.

---

## 10. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | NovaBuild veut « une application complète », mais le besoin est trop large et les règles ne sont pas stabilisées. |
| **Résolution** | Un premier périmètre **utile et vérifiable** est défini — sans prétendre couvrir tout le produit. |
| **Preuve** | Note de cadrage · limites in/out · gate scope Morris · trace Git. |

---

## 11. Transition vers III.2

Le périmètre est fixé. Il faut maintenant **concevoir** le fonctionnement : rôles, règles, parcours, écrans.

> **Comment transformer le cadrage en règles, parcours et écrans cohérents ?**

**→ Continuer : [ACTE III.2 — Conception et UX](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md)**

**← Retour : [ACTE III — Suivons NovaBuild](sfia-discovery-act-03-follow-novabuild-editorial-draft.md)**

---

## 12. Sources Git (gouvernance)

| Catégorie | Inspiration vérifiée |
|-----------|---------------------|
| Cadrage / scope | Documents de framing et limites MVP (pilote SFIA) |
| Use cases · règles métier | Fichiers 00-framing/ du pilote documentaire |
| Backlog initial | Structure epics / user stories / incréments |

*Chemins détaillés — review pack PD-04A uniquement.*

---

## Contenu lecteur — corps principal (PD-04B)

*Sections 1–11 ci-dessus.*
```

---

## FULL CONTENT — `discovery/editorial/sfia-discovery-act-03-2-design-and-ux-editorial-draft.md`

**Rôle :** Acte III.2 — conception et UX

```markdown
# ACTE III.2 — Conception et UX

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-04A — séquence III.2 |
| **Acte** | III — NovaBuild |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **NovaBuild** | Cas pédagogique composite |
| **Durée cible** | 4–5 minutes |
| **Question lecteur** | Comment transformer le cadrage en règles, parcours et écrans cohérents ? |

---

## 1. Point de départ

NovaBuild dispose d'un **MVP cadré**. L'équipe pourrait coder immédiatement — SFIA retarde l'exécution **juste assez** pour aligner métier, règles et expérience.

---

## 2. Rôles utilisateurs

| Rôle NovaBuild (fiction) | Responsabilité |
|--------------------------|----------------|
| **Admin / dirigeant** | Paramétrage léger · vue synthèse |
| **Conducteur de travaux** | Saisie terrain · réserves · tâches |
| **Membre bureau** | Consolidation · compte rendu |
| **Lecture seule** *(option)* | Consultation chantier |

Les rôles **conditionnent** ce que chaque écran autorise — pas seulement l'apparence.

---

## 3. Règles métier essentielles

Exemples de règles **validées avant UX** (NovaBuild fiction) :

| Objet | Règle |
|-------|-------|
| **Réserve** | Statuts : ouverte · en cours · levée · refusée |
| **Clôture réserve** | Action réservée au conducteur ou au bureau — selon arbitrage |
| **Chantier** | Statuts : à démarrer · en cours · en pause · terminé |
| **Retard** | Signal dérivé des jalons — pas un module planning complet |

> Ces règles évitent qu'un écran « joli » implémente une **mauvaise logique métier**.

---

## 4. Objets et scénarios principaux

| Objet | Scénario prioritaire |
|-------|---------------------|
| **Chantier** | Créer · consulter · mettre à jour le statut |
| **Tâche** | Ajouter · lister · changer statut |
| **Réserve** | Signaler · suivre · clôturer |
| **Jalon simple** | Date prévue · prochaine intervention |
| **Compte rendu** | Rédiger · consulter sur la fiche chantier |

---

## 5. Architecture fonctionnelle

L'**architecture fonctionnelle** décrit **ce que le produit fait** — sans stack technique :

- domaines fonctionnels (chantier, tâches, réserves…) ;
- modèle d'états ;
- navigation fonctionnelle ;
- **décisions structurantes** tracées.

**ChatGPT** aide à structurer · **Cursor** peut produire des brouillons · **Morris** tranche aux points qui engagent la suite.

---

## 6. Parcours terrain / bureau

Deux contextes — un même référentiel :

| Contexte | Besoin UX |
|----------|-----------|
| **Terrain** | Saisie rapide · réserves · statuts · mobile web |
| **Bureau** | Vue liste · consolidation · prochaines actions |

Les parcours sont **validés** avant le premier incrément code — pas recollés après coup.

---

## 7. Conception UX et contrat visuel

Le cycle UX produit :

- **carte des écrans** — quelles pages existent ;
- **wireframes fonctionnels** — structure, pas pixel-perfect obligatoire ;
- **flux utilisateur** — chemins principaux ;
- **brief design** — principes visuels et cohérence.

NovaBuild (fiction) vise une interface **lisible sur chantier** — contrastes, libellés métier, pas de jargon technique.

---

## 8. Revue Morris

Avant delivery, Morris valide :

- cohérence **règles ↔ écrans** ;
- périmètre UX **aligné MVP** ;
- absence de **feature creep** déguisé en « amélioration UI ».

C'est une **gate de conception** — distincte de la gate merge code.

---

## 9. Alignement besoin · règles · écrans

| Couche | Question |
|--------|----------|
| **Besoin** | Quel problème métier ? |
| **Règles** | Quelles transitions autorisées ? |
| **Parcours** | Qui fait quoi, où ? |
| **Écrans** | Comment le supporte-t-on ? |

SFIA exige que ces quatre couches **disent la même chose** avant l'incrément delivery.

---

## 10. Trace Git

Livrables typiques de cette phase (catégories — contenu NovaBuild scénarisé) :

- architecture fonctionnelle ;
- modèle d'états ;
- décisions UX tracées ;
- carte écrans et flux ;
- checklist revue design.

Le lecteur retient : **la conception est versionnée**, pas figée dans des fichiers locaux ou des fils de discussion.

---

## 11. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | Une interface peut sembler claire tout en implémentant une mauvaise règle métier. |
| **Résolution** | Rôles, règles et parcours sont **validés avant** le delivery. |
| **Preuve P2** | Architecture fonctionnelle et UX **décrivent la même version** du produit. |

---

## 12. Transition vers III.3

Les choix sont conçus et validés. Il faut les **matérialiser** en incrément fonctionnel.

> **Comment livrer rapidement sans perdre les décisions et la qualité ?**

**→ Continuer : [ACTE III.3 — Delivery et QA](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md)**

**← Retour : [ACTE III.1 — Intention et cadrage](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md)**

---

## 13. Sources Git (gouvernance)

| Catégorie | Inspiration vérifiée |
|-----------|---------------------|
| Architecture fonctionnelle | Dossier 01-functional-architecture/ pilote |
| UX / wireframes / flux | Dossier 02-ux-ui/ pilote |
| Design / revue | Dossier 04-design/ · spike fidélité |

---

## Contenu lecteur — corps principal (PD-04B)

*Sections 1–12 ci-dessus.*
```

---

## FULL CONTENT — `discovery/editorial/sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md`

**Rôle :** Acte III.3 — delivery et QA

```markdown
# ACTE III.3 — Delivery et QA

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-04A — séquence III.3 |
| **Acte** | III — NovaBuild |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **NovaBuild** | Cas pédagogique composite |
| **Durée cible** | 4–5 minutes |
| **Question lecteur** | Comment livrer rapidement sans perdre les décisions et la qualité ? |

---

## 1. Découpage en incrément

NovaBuild ne livre pas « tout le MVP » en une fois. Le **premier incrément** couvre le **socle chantier** :

- liste des chantiers ;
- création et fiche ;
- statuts de base ;
- navigation principale.

Les tâches, réserves et jalons viennent dans des **incréments suivants** — chacun avec son propre cycle delivery + QA.

---

## 2. Backlog sélectionné

Pour l'incrément en cours, le PO extrait du backlog :

- user stories **priorisées** ;
- critères d'acceptation **rappelés** ;
- dépendances **explicitées**.

Le périmètre d'exécution est **borné** — Cursor n'improvise pas hors scope.

---

## 3. Contrat d'exécution Cursor

Avant code, un **contrat d'exécution** fixe :

| Élément | Contenu |
|---------|---------|
| **Intention** | Livrer INC-01 socle chantier |
| **Sources** | Cadrage · archi · UX validés |
| **Périmètre in** | Écrans et règles listés |
| **Périmètre out** | Tâches · réserves · intégrations |
| **Livrables** | Code · tests · rapport · PR |
| **Gate** | Merge Morris après QA |

**Cursor exécute** — il ne redéfinit pas le MVP.

---

## 4. Exécution sans dump technique

L'équipe SFIA produit :

- composants et pages **alignés** sur la carte écrans ;
- logique métier **conforme** au modèle d'états ;
- tests automatisés **ciblés** ;
- documentation d'incrément **courte**.

Le lecteur Discovery **n'a pas besoin** du code source — il doit voir que l'incrément **existe** et **se relie** aux décisions amont.

---

## 5. Commit · PR · review pack

Chaque incrément aboutit à une **Pull Request** :

- description **métier** : ce qui change pour l'utilisateur ;
- lien aux **critères d'acceptation** ;
- **review pack** pour analyse Morris / ChatGPT — synthèse qualité, pas dump brut ;
- historique **Git** comme preuve de traçabilité.

La PR est le **pont** entre exécution IA et décision humaine.

---

## 6. Contrôles automatisés

Avant revue humaine :

- lint et build ;
- tests unitaires et d'intégration ;
- parcours **E2E** sur scénarios prioritaires *(catégorie vérifiée dans des projets SFIA — détail masqué lecteur)*.

Un build vert **n'équivaut pas** à un GO merge — c'est une **condition nécessaire**, pas suffisante.

---

## 7. Scénarios QA

Le cycle QA documente :

| Artefact | Rôle |
|----------|------|
| **Stratégie QA** | Périmètre testé par incrément |
| **Scénarios** | Cas nominaux et limites métier |
| **Rapport d'exécution** | Résultat des tests |
| **Réserves** | Écarts ouverts · non masqués |

NovaBuild (fiction) exécute des scénarios sur **création chantier · statuts · navigation** — pas une campagne de tests exhaustive non sourcée.

---

## 8. Preuves runtime

**Moment de preuve P3** — le lecteur voit une **preuve fonctionnelle** :

- capture d'écran ou schéma de l'application ;
- confirmation qu'un parcours **prioritaire** fonctionne ;
- lien implicite avec les critères d'acceptation.

Pas de vidéo longue · pas de log serveur · pas de données réelles.

---

## 9. Correction de réserves

Si la QA révèle un écart :

1. réserve **documentée** ;
2. correction **bornée** ;
3. re-test **ciblé** ;
4. mise à jour du review pack.

SFIA **n'ignore pas** les réserves pour « aller plus vite ».

---

## 10. Gate merge

| Distinction | Signification |
|-------------|---------------|
| **READY techniquement** | Build · tests · QA documentée |
| **GO Morris merge** | Décision humaine · périmètre respecté · preuves suffisantes |

Morris **ne merge pas** par défaut — il **tranche** après lecture du pack et des preuves.

---

## 11. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | Le code fonctionne localement, mais cela ne prouve ni l'alignement métier ni l'absence de régression. |
| **Résolution** | PR · QA · review pack **relient** implémentation, critères et preuves. |
| **Preuves** | Premier incrément mergé · review pack lisible · preuve runtime ou fonctionnelle. |

---

## 12. Transition vers III.4

L'incrément est validé et mergé. Reste la question de **mise en service** et d'**exploitation**.

> **Comment passer d'un incrément validé à un service exploitable et améliorable ?**

**→ Continuer : [ACTE III.4 — Release et RUN](sfia-discovery-act-03-4-release-and-run-editorial-draft.md)**

**← Retour : [ACTE III.2 — Conception et UX](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md)**

---

## 13. Sources Git (gouvernance)

| Catégorie | Inspiration vérifiée |
|-----------|---------------------|
| Incréments delivery | delivery-increments · dossiers 07-delivery-inc-0N/ |
| QA | Dossier 08-qa-test/ · specs E2E (catégorie) |
| PR / review pack | Pattern PR readiness · closure reports |

---

## Contenu lecteur — corps principal (PD-04B)

*Sections 1–12 ci-dessus.*
```

---

## FULL CONTENT — `discovery/editorial/sfia-discovery-act-03-4-release-and-run-editorial-draft.md`

**Rôle :** Acte III.4 — release et RUN

```markdown
# ACTE III.4 — Release et RUN

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-04A — séquence III.4 |
| **Acte** | III — NovaBuild |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **NovaBuild** | Cas pédagogique composite |
| **Durée cible** | 4–5 minutes |
| **Question lecteur** | Comment passer d'un incrément validé à un service exploitable et améliorable ? |

---

## 1. Merge ≠ mise en service

NovaBuild vient de merger un **premier incrément**. L'équipe pourrait croire le travail terminé.

SFIA distingue explicitement :

| Étape | Ce que ce n'est pas |
|-------|---------------------|
| **Merge** | Mise en production |
| **Release** | Exploitation maîtrisée sans préparation |
| **RUN** | Amélioration continue automatique |

Chaque passage est un **cycle** avec livrables et gates.

---

## 2. Préparation release

Avant publication, NovaBuild consolide :

- **release notes** — ce que l'utilisateur voit ;
- **prérequis de déploiement** — environnement · données · accès ;
- **risques connus** — réserves QA ouvertes · limitations MVP ;
- **plan de rollback** — même simplifié.

> **Transparence pédagogique :** dans des projets SFIA documentés, la **readiness pré-delivery** est riche ; la **mise en production complète** peut être une **étape ultérieure** explicitement cadrée. NovaBuild **narré** ici la chaîne SFIA cible — sans prétendre qu'un déploiement production identique a déjà eu lieu pour ce cas fictif.

---

## 3. Décision de mise en service

**Morris** tranche à la **gate release** :

- le périmètre publié correspond-il au MVP validé ?
- les réserves restantes sont-elles **acceptées** ou **bloquantes** ?
- l'équipe NovaBuild est-elle **prête** à exploiter ?

La décision est **tracée** — date · version · arbitrages.

---

## 4. Déploiement maîtrisé

Le déploiement NovaBuild (fiction) suit un **enchaînement contrôlé** :

1. validation environnement ;
2. déploiement version taguée ;
3. **contrôles post-déploiement** — parcours smoke ;
4. confirmation **disponibilité** pour les premiers utilisateurs internes.

Pas de « deploy Friday » sans checklist.

---

## 5. Observabilité et RUN readiness

Pour **exploiter** le service, NovaBuild prépare :

| Élément | Objectif |
|---------|----------|
| **Runbook** | Que faire en cas d'incident courant |
| **Responsabilités RUN** | Qui surveille · qui corrige |
| **Observabilité minimale** | Logs · alertes · santé applicative |
| **Retour utilisateur** | Canal pour remontées terrain |

> Dans Git, des **runbooks de test local** existent pour certains projets SFIA ; l'**observabilité production complète** est une **catégorie** souvent cadrée en post-MVP — NovaBuild l'illustre comme **étape méthodologique**, pas comme témoignage déployé.

---

## 6. Retours · incidents · améliorations

Après mise en service (fiction) :

- remontées conducteurs de travaux ;
- incidents **documentés** sans dramatisation ;
- **correctifs** passés par cycles bornés — pas de patches orphelins.

SFIA **ne promet pas** zéro incident — elle **structure** la réponse.

---

## 7. REX et capitalisation proportionnée

En fin de cycle projet NovaBuild :

| Livrable | Finalité |
|----------|----------|
| **REX projet** | Ce qui a fonctionné · ce qui reste fragile |
| **Réserves ouvertes** | Honnêteté sur les limites |
| **Pistes méthode** | Améliorations SFIA **candidate** — pas promotion baseline automatique |

La capitalisation est **proportionnée** : leçons utiles, pas export intégral du repo.

**Moment de preuve P4 :** le projet peut être **repris**, **exploité** et **amélioré** sans reconstruire tout son historique — grâce à Git et aux cycles documentés.

---

## 8. Clôture du cycle projet NovaBuild

NovaBuild (fiction) atteint une **première mise en service maîtrisée** du MVP — pas la fin du produit.

| Acquis | Limite assumée |
|--------|----------------|
| Socle chantier en service | Extensions devis / facturation hors MVP |
| Traçabilité Git | Observabilité production à renforcer |
| Méthode SFIA démontrée | Pas de garantie absolue résultat |

---

## 9. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | Un merge n'est pas une mise en service ; une mise en service n'est pas une exploitation maîtrisée. |
| **Résolution** | Release · RUN readiness · capitalisation sont des **étapes explicites**. |
| **Preuve P4** | Release notes · runbook · REX · reprise projet possible. |

---

## 10. Transition vers l'Acte IV

Vous avez **suivi** NovaBuild — intention, cadrage, conception, delivery, QA, release, RUN, capitalisation.

L'Acte III montre **le mouvement**. L'**Acte IV** montre **ce que SFIA produit** — la galerie des livrables et artefacts par cycle.

> **Nous avons suivi le projet. Regardons maintenant ce que SFIA a concrètement produit.**

**→ Continuer : ACTE IV — Ce que SFIA produit** *(futur PD-05A)*

**← Retour : [ACTE III — Suivons NovaBuild](sfia-discovery-act-03-follow-novabuild-editorial-draft.md)**

---

## 11. Sources Git (gouvernance)

| Catégorie | Inspiration vérifiée |
|-----------|---------------------|
| Readiness pré-delivery | validation-and-delivery-readiness (pilote) |
| Post-MVP / gaps production | post-mvp-framing · REX final pilote |
| Capitalisation | Dossier 09-capitalization/ · rapports INC et MVP |
| Runbook (test) | local-e2e-runbook — catégorie, pas prod ops |

---

## Contenu lecteur — corps principal (PD-04B)

*Sections 1–10 ci-dessus.*
```

---

## FULL CONTENT — `discovery/editorial/README.md` (modifié — intégral)

```markdown
# SFIA Discovery — Editorial (brouillons lecteur)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillons éditoriaux Discovery |
| **Cycle courant** | PD-04A — Acte III NovaBuild (préparation Git) |
| **Propriétaire** | Morris |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Branche projet** | `documentation/sfia-discovery-act-03-novabuild-editorial` |
| **HEAD / base** | `a3b42d9c1bfcec2645ca6202e3c460ba75e294f8` |
| **Horodatage** | 2026-07-14 22:50 Europe/Paris (CEST) |
| **Implémentation Notion** | PD-02B ✓ · PD-03B ✓ · PD-04B futur |
| **Capitalisation méthode** | Non |

---

## 1. Rôle du dossier

Brouillons **destinés au lecteur final** de SFIA Discovery — source Git stable avant implémentation Notion (cycles PD-nB).

Non substituts au Product Design PD-01 ni aux drafts P0 §00–11.

---

## 2. Séquence narrative (decision Morris)

```text
Hub + Acte I ✓ → Acte II ✓ → Acte III NovaBuild (en cours) → IV–V → VI–VII
```

**Acte II avant Acte III** — le contraste et le modèle SFIA précèdent le fil rouge composite.

---

## 3. Inventaire des brouillons

| # | Fichier | Acte | Statut editorial Git |
|---|---------|------|----------------------|
| 1 | [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md) | Hub | ✓ mergé (PD-02A) |
| 2 | [sfia-discovery-act-01-why-sfia-exists-editorial-draft.md](sfia-discovery-act-01-why-sfia-exists-editorial-draft.md) | I | ✓ mergé (PD-02A) |
| 3 | [sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) | II | ✓ mergé (PD-03A) |
| 4 | [sfia-discovery-act-03-follow-novabuild-editorial-draft.md](sfia-discovery-act-03-follow-novabuild-editorial-draft.md) | III | **PD-04A — revue** |
| 5 | [sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md) | III.1 | **PD-04A — revue** |
| 6 | [sfia-discovery-act-03-2-design-and-ux-editorial-draft.md](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md) | III.2 | **PD-04A — revue** |
| 7 | [sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md) | III.3 | **PD-04A — revue** |
| 8 | [sfia-discovery-act-03-4-release-and-run-editorial-draft.md](sfia-discovery-act-03-4-release-and-run-editorial-draft.md) | III.4 | **PD-04A — revue** |

---

## 4. Ordre de lecture

1. **Hub** — orientation · parcours · portes persona
2. **Acte I** — pourquoi SFIA existe
3. **Acte II** — comment SFIA organise le projet
4. **Acte III** — fil rouge NovaBuild (hub + III.1 → III.4)

---

## 5. Positionnement cycles A / B

| Incrément | Editorial Git (A) | Notion (B) |
|-----------|-------------------|------------|
| Hub + I | PD-02A ✓ | PD-02B ✓ |
| Acte II | PD-03A ✓ | PD-03B ✓ |
| Acte III NovaBuild | **PD-04A** (présent — revue) | PD-04B — futur |
| Acte IV–V | PD-05A — futur | PD-05B |

**NovaBuild** = cas pédagogique composite — entreprise fictive · catégories livrables inspirées d'actifs SFIA vérifiables.

Référence roadmap : [07-sfia-discovery-transformation-roadmap.md](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

---

## 6. Règles éditoriales

Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contract.md`

- 80 % métier / valeur · 20 % fonctionnel
- NovaBuild composite · aucun chiffre non sourcé
- Opacité méthodologique sélective · chemins projects/ réservés gouvernance

---

## 7. Garde-fous

- Aucune page Notion · aucun prompt catalog · aucune capitalisation baseline

---

## 8. Décisions Morris validées

- PD-01 · PD-02A · PD-03A mergés ✓
- PD-02B · PD-03B finalisés Notion ✓
- Acte II avant Acte III ✓
- NovaBuild composite ✓

---

## 9. Décisions restantes (Acte III)

| Gate | Objet | Statut |
|------|-------|--------|
| **M1** | Structure Acte III | En attente |
| **M2** | Crédibilité NovaBuild | En attente |
| **M3** | Fiction / actifs réels | En attente |
| **M4** | Niveau preuve | En attente |
| **M5** | Contenu complet | En attente |
| **M6** | GO commit / push / PR | En attente |
| **M7** | GO PD-04B Notion | Hors cycle |

---

## 10. Critères d'entrée PD-04B

- Acte III validé Morris · merge Git recommandé · GO implémentation Notion L0
- Dépendance : PD-03A/B ✓

---

## 11. Liens

→ [Product Design](../discovery-product-design/README.md) · [Roadmap](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

```

---

## FULL CONTENT — `discovery-product-design/07-sfia-discovery-transformation-roadmap.md` (modifié — intégral)

```markdown
# 07 — Roadmap de transformation — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-14 22:50 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-act-03-novabuild-editorial` |
| **HEAD** | `a3b42d9c1bfcec2645ca6202e3c460ba75e294f8` |
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

### PD-03A — Acte II — préparation Git ✓

Brouillon Acte II — mergé (PR #197).

### PD-03B — Acte II — implémentation Notion ✓

| Prérequis | PD-03A mergé ✓ |
| Notion | Acte II créé |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-04A — Acte III — fil rouge NovaBuild — préparation Git

| Objectif | Brouillons Acte III + III.1–III.4 — cas composite NovaBuild |
| Prérequis | PD-03A/B ✓ — Acte II avant fil rouge |
| Gate | M1–M5 Morris · distinction fiction / preuves |

*Cycle présent — brouillons en revue.*

### PD-04B — Acte III — implémentation Notion

Pages fil rouge NovaBuild — gate M7 Morris futur.

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
├── PD-03A ✓ → PD-03B ✓  ← Acte II
├── PD-04A → PD-04B     ← NovaBuild (cycle courant)
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
    → Acte II (03A ✓ / 03B ✓)
      → Acte III NovaBuild (04A en cours / 04B)
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

## Verdict final

**ACT III EDITORIAL PREPARED — READY FOR CHATGPT REVIEW**

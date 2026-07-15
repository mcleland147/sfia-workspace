# ACTE VII — Explorer la méthode

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-06A (préparation éditoriale Git — Acte VII) |
| **Acte** | VII — Explorer la méthode |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-acts-06-07-editorial` |
| **HEAD / base** | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
| **Niveau lecture** | L2–L4 par paliers |
| **Durée cible** | 3–5 minutes (portail) · exploration libre ensuite |
| **Implémentation Notion** | Non — gate PD-06B futur |
| **Réaction recherchée** | « Je sais où aller ensuite sans avoir à tout lire. » |

---

## 1. Transition depuis l'Acte VI

Dans l'**Acte VI**, vous avez **projecté** SFIA dans votre rôle — dirigeant · PO · technique · partenaire.

L'**Acte VII** répond à :

> **Où approfondir sans perdre la logique du parcours Discovery ?**

> **Vous savez maintenant ce que SFIA peut changer pour votre rôle. Explorez uniquement le niveau de méthode dont vous avez besoin.**

---

## 2. Principe Discovery → approfondissement

| Couche | Rôle |
|--------|------|
| **Discovery (Notion futur · Git aujourd'hui)** | Valeur · parcours · projection · orientation |
| **Git (méthode détaillée)** | Templates · routing · gouvernance · preuves · historique |

**Discovery explique la valeur. Git conserve la méthode et les actifs détaillés.**

Ne confondez pas ce portail avec un **miroir du repository**.

---

## 3. Sept portes d'entrée

| # | Porte | Destination Discovery | Approfondissement |
|---|-------|-----------------------|-------------------|
| 1 | [Cycles et profils](#porte-1--cycles-et-profils) | Page pédagogique dédiée | Documentation méthode dans Git |
| 2 | [Routage des demandes](#porte-2--routage-des-demandes) | Guide simplifié | Référentiel de routage |
| 3 | [Templates et assets](#porte-3--templates-et-assets) | Index pédagogique | Index des modèles disponibles |
| 4 | [Gouvernance](#porte-4--gouvernance) | Synthèse des garde-fous | Documentation de gouvernance |
| 5 | [Mettre SFIA en place](#porte-5--mettre-sfia-en-place) | Guide de démarrage | Documentation d'installation |
| 6 | [Documents de référence](#porte-6--documents-de-référence) | Portail documentaire | Corpus de référence |
| 7 | [Glossaire](#porte-7--glossaire) | Glossaire Discovery | Glossaire complet |

**Maximum sept portes visibles** — pas de sous-menu exhaustif ici.

---

## 4. Niveaux de lecture

| Niveau | Public | Ce que vous obtenez |
|--------|--------|---------------------|
| **L2** | PO · ESN | Orientation cycles · gates · templates (existence) |
| **L3** | Technique · contributeur | Setup · gouvernance · liens Git |
| **L4** | Référence | Documents fondateurs · glossaire complet · bases |

Commencez au **niveau minimum** utile — montez seulement si bloqué.

---

## 5. Tableau des portes

| Porte | Question | Public | Profondeur | Vous trouverez | Vous ne trouverez pas |
|-------|----------|--------|------------|----------------|----------------------|
| **1. Cycles et profils** | Quel type de cycle pour ma demande ? | PO · méthode | L2 | Light · Standard · Critical · Capitalization — **orientation** | Référentiel détaillé des cycles candidats et règles internes de qualification |
| **2. Routage** | Comment classer une demande ? | PO · CP | L2 | Catégories : cadrage · delivery · QA · PR · post-merge · capitalisation | Règles internes complètes |
| **3. Templates et assets** | Existe-t-il un modèle ? | Tous | L2–L3 | Index · catégories · rôle des templates | Texte intégral des prompts |
| **4. Gouvernance** | Qui décide quoi ? | Sponsor · CP | L2 | Git prime · gates · réserves · Morris ou décideur désigné | Protected paths détaillés |
| **5. Mise en place** | Par où commencer techniquement ? | Tech · PO | L3 | Prérequis · rôles · repo · outils · commencer petit | Automatisation L5 globale |
| **6. Documents de référence** | Où est la doc fondatrice ? | Contributeur | L4 | Index · bases Référentiel · Cycles | Copie intégrale des docs |
| **7. Glossaire** | Que signifie ce terme ? | Tous | L1–L4 | Définitions SFIA essentielles | Jargon interne non publié |

---

### Porte 1 — Cycles et profils

**Question :** Quel profil et quel type de cycle pour mon besoin ?

**Orientation simplifiée :**

| Profil | Quand l'envisager |
|--------|-------------------|
| **Light** | Faible risque · périmètre doc restreint |
| **Standard** | Cycle courant — **défaut** si doute |
| **Critical** | Risque structurant — **jamais implicite** · justification requise |
| **Capitalization** | Retour d'expérience · promotion method — intention distincte |

> **Baseline opérationnelle : SFIA v2.4.** Des référentiels cycles élargis existent en **Candidate v2.5** — aide pédagogique · **non baseline** tant que Morris n'a pas promu.

**Source inspiration :** editorial P0 §04 · cycle routing guide (principes).

---

### Porte 2 — Routage des demandes

**Question :** Comment orienter une demande vers le bon cycle ?

**Catégories visibles (orientation) :**

- **Cadrage** — intention · scope · qualification ;
- **Conception / delivery** — docs · code · UX selon périmètre ;
- **QA / validation** — preuves · écarts · réserves ;
- **PR readiness** — commit · push · PR · review pack ;
- **Post-merge** — vérification · alignement main ;
- **Capitalisation** — REX · recommandation · gate Morris.

**Ce que vous ne trouverez pas :** arbre de décision exhaustif · seuils internes · catalogues protégés.

**Source inspiration :** editorial P0 §05 · operating model.

---

### Porte 3 — Templates et assets

**Question :** Existe-t-il un gabarit pour mon livrable ?

SFIA maintient des **templates** — cycles · QA · review · handoff · documentation.

| Principe | Détail |
|----------|--------|
| **Existence** | Oui — indexés dans Git |
| **Accès** | Via référentiel · dossier templates |
| **Contenu Discovery** | Rôle du template — pas copie intégrale |

**Source inspiration :** editorial P0 §06 · index templates repository.

---

### Porte 4 — Gouvernance

**Question :** Qui tranche · quoi · quand ?

| Principe | Formulation |
|----------|-------------|
| **Git prime** | Repository = version de référence |
| **Décideur humain** | Morris ou décideur désigné aux gates |
| **Gates** | Scope · architecture · merge · release · capitalisation |
| **Périmètres** | Fichiers autorisés · cycles bornés |
| **Réserves** | Visibles · pas masquées |

**Non publié lecteur :** liste exhaustive protected paths · règles CI secrètes.

**Source inspiration :** editorial P0 §07 · rules-and-guardrails.

---

### Porte 5 — Mettre SFIA en place

**Question :** Quels prérequis pour démarrer ?

| Dimension | Orientation |
|-----------|-------------|
| **Organisation** | Sponsor · CP · accès repo · règles de merge |
| **Repository** | Structure SFIA · branches · conventions |
| **Outils** | Git · Cursor · ChatGPT · CI selon contexte |
| **Démarrage** | Petit périmètre · premier cycle Light ou Standard |
| **Limite** | Pas d'automatisation globale L5 dans Discovery |

**Source inspiration :** editorial P0 §08 setup.

---

### Porte 6 — Documents de référence

**Question :** Où sont les documents fondateurs ?

| Type | Rôle |
|------|------|
| **Bases Référentiel / Cycles** | Vues structurées — embed Notion futur |
| **Docs architecture** | Fondations plateforme — L4 |
| **Product Design Discovery** | Conception parcours — PD-01 |

Discovery **oriente** — ne **recopie** pas ces corpus.

**Source inspiration :** editorial P0 §10 · architecture docs index.

---

### Porte 7 — Glossaire

**Question :** Que signifie ce terme SFIA ?

Termes essentiels : **cycle** · **gate** · **review pack** · **Candidate** · **baseline** · **capitalisation** · **Git prime**.

**Sortie recommandée** si le vocabulaire bloque la lecture des Actes I–VI.

**Source inspiration :** editorial P0 §11 glossary.

---

## 6. Frontière Notion / Git

| Notion (PD-06B futur) | Git (source de vérité) |
|-----------------------|------------------------|
| Parcours Discovery L0–L2 | Brouillons editorial complets |
| Portail Acte VII simplifié | Templates · routing · core |
| Bases embed | Historique · PR · preuves |

Toute divergence se tranche **en faveur de Git** après merge validé.

---

## 7. Contenu publiable vs protégé

### Public / pédagogique (ce portail)

- Existence des cycles et profils ;
- Logique des gates ;
- Git source de vérité ;
- Types de livrables ;
- Rôle des outils ;
- Principes de mise en place ;
- Orientation vers ressources.

### Orientation Git (approfondissement)

- Documentation méthode dans le repository ;
- Templates disponibles ;
- Index de référence ;
- Exemples publiables sans secrets.

### Protégé / non publié (corps lecteur Discovery)

- Prompt catalog intégral ;
- Textes complets des prompts Cursor ;
- Matrice de routage exhaustive ;
- Règles internes protected paths ;
- Seuils Critical implicites ;
- Secrets · tokens · environnements ;
- Procédures reconstruisant intégralement SFIA sans gate.

*Chemins techniques détaillés — section sources Git et review pack uniquement.*

---

## 8. Conseils de parcours

| Profil | Parcours Acte VII suggéré |
|--------|---------------------------|
| **Dirigeant PME** | Glossaire → Gouvernance → Mise en place (aperçu) |
| **Chef de projet / PO** | Cycles → Routage → Templates → Gouvernance |
| **Équipe technique** | Templates → Mise en place → Documents référence |
| **ESN / partenaire** | Gouvernance → Cycles → Documents référence |
| **Contributeur méthode** | Toutes portes L3–L4 → Git direct |

---

## 9. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | « Je veux la méthode complète » vs « je me noie si tout est exposé ». |
| **Résolution** | Portail à sept portes · profondeur par paliers · Git pour le détail. |
| **Preuve** | Architecture cible PD-06 §2 · mapping P0 §04–11 · editorial Notion drafts existants. |

---

## 10. Navigation retour

**← Retour :** [Acte VI — Se projeter](sfia-discovery-act-06-project-yourself-editorial-draft.md)

**Hub Discovery :** [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md)

> **Revenez au parcours Discovery ou approfondissez depuis la source Git de référence.**

**PD-07A (migration legacy)** — hors cycle PD-06A · plan redirections §00–11 futur.

---

## 11. Sources Git (gouvernance)

| Porte | Sources vérifiées |
|-------|-------------------|
| Cycles · profils | `notion/editorial/sfia-notion-04-cycles-profiles-gates-editorial-draft.md` · `core/sfia-cycle-routing-guide.md` |
| Routage | `notion/editorial/sfia-notion-05-request-routing-editorial-draft.md` |
| Templates | `notion/editorial/sfia-notion-06-templates-prompts-deliverables-editorial-draft.md` |
| Gouvernance | `notion/editorial/sfia-notion-07-governance-guardrails-editorial-draft.md` · `core/sfia-rules-and-guardrails.md` |
| Setup | `notion/editorial/sfia-notion-08-setup-sfia-editorial-draft.md` |
| Architecture cible | `discovery-product-design/06-sfia-discovery-target-information-architecture.md` |
| Glossaire | `notion/editorial/sfia-notion-11-glossary-editorial-draft.md` (référence P0 §11) |

*Prompt catalog · protected paths — référencés · non reproduits.*

---

## 12. Critères d'acceptation

| # | Critère | Statut |
|---|---------|--------|
| A1 | Sept portes maximum | ✓ |
| A2 | Frontière public / protégé explicite | ✓ |
| A3 | Pas de copie intégrale Git | ✓ |
| A4 | Baseline v2.4 · Candidate | ✓ |
| A5 | Retour Hub · pas de PD-07A | ✓ |

---

## Contenu lecteur — corps principal (PD-06B)

*Sections 1–10 ci-dessus.*

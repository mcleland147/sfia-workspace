# SFIA — Realization Notion integration plan

**Type** : Plan d'intégration Notion  
**Origine de capitalisation** : Interv360  
**Référence** : SFIA delivery / realization method  
**Statut** : Draft  
**Branche** : `method/interv360-realization-capitalization`  
**Documents associés** : [`capitalization-plan.md`](../../../archive/interv360-realization/capitalization-plan.md), [`realization-method.md`](realization-method.md), [`realization-deliverables-standard.md`](realization-deliverables-standard.md), [`realization-checklists.md`](realization-checklists.md), [`realization-templates.md`](realization-templates.md), [`realization-prompt-family.md`](realization-prompt-family.md)

---

## 1. Objectif

Ce document prépare l'intégration de la documentation de capitalisation dans Notion.

L'objectif est de rendre la méthode SFIA de préparation réalisation :

- lisible ;
- navigable ;
- exploitable ;
- réutilisable ;
- maintenable ;
- compréhensible hors contexte Interv360.

Ce document prépare une **intégration manuelle ou semi-manuelle** dans Notion.

Il **ne publie rien** dans Notion.

Il **ne crée pas** d'automatisation.

Il **ne constitue pas** une autorisation de coder.

---

## 2. Principe d'intégration

La documentation Git reste la **source de vérité**.

Notion sert de **couche de lecture, navigation et appropriation**.

| Principe | Application |
|----------|-------------|
| Git conserve les fichiers Markdown de référence | `method/interv360-realization/` puis éventuellement `docs/methods/` |
| Notion expose une version structurée et lisible | Pages numérotées, toggles, callouts |
| Notion ne remplace pas le versioning Git | Historique, branches, PR restent dans Git |
| Évolution majeure d'abord dans Git | Modification des livrables, puis sync Notion |
| Notion mis à jour après validation documentaire | Après merge PR, pas avant |

Cette approche est alignée avec la gouvernance SFIA existante : registre Notion pour synthèse et navigation, Git pour le détail versionné.

---

## 3. Arborescence Notion recommandée

```text
SFIA — Méthodes
└── Préparation réalisation
    ├── 00 — Vue d'ensemble
    ├── 01 — Méthode
    ├── 02 — Standard des livrables
    ├── 03 — Checklists
    ├── 04 — Templates
    ├── 05 — Prompts
    ├── 06 — Garde-fous
    ├── 07 — Application à un projet
    └── 99 — Historique / capitalisation Interv360
```

**Adaptation :** l'arborescence peut être raccrochée à l'espace Notion SFIA existant (ex. sous « Méthodes » ou « Delivery ») sans dupliquer la hiérarchie Git.

**Emplacement Git de référence :** `method/interv360-realization/` (cycle de capitalisation) — généralisation future possible vers `docs/methods/`.

---

## 4. Mapping fichiers Markdown / pages Notion

| Fichier Git | Page Notion cible | Usage |
|-------------|-------------------|-------|
| `capitalization-plan.md` | 99 — Historique / capitalisation Interv360 | Contexte d'ouverture du cycle de capitalisation |
| `realization-method.md` | 01 — Méthode | Méthode complète en 7 étapes |
| `realization-deliverables-standard.md` | 02 — Standard des livrables | Standard documentaire par phase |
| `realization-checklists.md` | 03 — Checklists | Checklists opérationnelles |
| `realization-templates.md` | 04 — Templates | Modèles génériques copiables |
| `realization-prompt-family.md` | 05 — Prompts | Prompts Cursor / ChatGPT |
| `notion-integration-plan.md` | 00 — Vue d'ensemble (section) ou 99 — Historique | Plan d'intégration — ce document |
| `capitalization-summary.md` | 99 — Historique / capitalisation Interv360 | Synthèse finale et décision PR |

**Page 00 — Vue d'ensemble :** contenu synthétique agrégé (non fichier Git unique) — voir §5.

---

## 5. Page 00 — Vue d'ensemble

### Contenu recommandé

- objectif de la méthode ;
- quand l'utiliser ;
- ce que la méthode couvre ;
- ce que la méthode ne couvre pas ;
- distinction préparation / réalisation ;
- distinction Go documentaire / Go réalisation ;
- accès rapide vers les pages principales.

### Structure proposée

```markdown
# Préparation réalisation — Vue d'ensemble

## Pourquoi cette méthode existe
Capitaliser le passage du cadrage fonctionnel à une décision explicite de réalisation, sans démarrage code prématuré.

## Quand l'utiliser
Après cadrage fonctionnel / architecture fonctionnelle / UX-UI suffisante pour structurer un MVP et un incrément prioritaire.

## Parcours en 7 étapes
1. Delivery preparation
2. Delivery detailing
3. Realization preparation
4. Technical design
5. Implementation planning
6. Realization start
7. Implementation Go / No-go

## Livrables clés
Méthode, standard, checklists, templates, prompts.

## Checklists clés
Par phase + garde-fous + anti-démarrage prématuré.

## Garde-fous essentiels
Pas de code sans autorisation explicite. Git = source de vérité.

## Accès rapide
Liens vers pages 01 à 07 et 99.
```

**Blocs Notion recommandés :** callout « Important » pour Go documentaire vs Go réalisation ; liens vers sous-pages ; table des 7 étapes.

---

## 6. Page 01 — Méthode

### Source

[`realization-method.md`](realization-method.md)

### Organisation Notion recommandée

| Section | Traitement Notion |
|---------|-------------------|
| Objectif | Texte + callout |
| Principes directeurs | Liste à puces |
| Parcours 7 étapes | **Toggle** par étape (objectif, activités, livrables, critères de sortie) |
| Règles de passage | Table |
| Garde-fous méthodologiques | Table |
| Rôles | Table |
| Artefacts transverses | Table |
| Types de décisions | Table |
| Application à un futur projet | Liste numérotée |
| Hors périmètre | Table |

**Recommandation :** un toggle Notion par étape pour éviter une page trop longue.

---

## 7. Page 02 — Standard des livrables

### Source

[`realization-deliverables-standard.md`](realization-deliverables-standard.md)

### Organisation Notion recommandée

- niveaux de livrables ;
- standard par phase (7 sections) ;
- critères qualité ;
- règles de nommage ;
- livrables à ne pas produire trop tôt ;
- cycle type recommandé.

### Base Notion optionnelle

Propriétés suggérées :

| Propriété | Type |
|-----------|------|
| Phase | Select |
| Livrable | Title |
| Rôle | Text |
| Contenu minimal | Text |
| Garde-fou | Text |
| Statut | Select (Draft / Validé) |

**Alternative :** tables simples par phase si une base complète n'est pas nécessaire.

---

## 8. Page 03 — Checklists

### Source

[`realization-checklists.md`](realization-checklists.md)

### Organisation Notion recommandée

- checklists par phase (§3 à §9) ;
- garde-fous permanents (§10) ;
- qualité documentaire (§11) ;
- PR documentaire (§12) ;
- anti-démarrage prématuré (§13) ;
- utilisation recommandée (§14).

**Recommandation :** blocs **checkbox** Notion natifs pour chaque checklist.

**Attention :** ne pas transformer les checklists en tâches projet réelles ou tickets par défaut — elles restent des contrôles méthodologiques.

---

## 9. Page 04 — Templates

### Source

[`realization-templates.md`](realization-templates.md)

### Organisation Notion recommandée

- variables génériques (table) ;
- un sous-bloc ou toggle par template :
  - plan de cycle ;
  - livrable de fond ;
  - décision ;
  - checklist ;
  - synthèse de cycle ;
  - estimation indicative ;
  - backlog préparatoire ;
  - scénarios QA ;
  - scénarios de refus ;
  - Go / No-go summary ;
- règles d'adaptation projet.

**Recommandation :** blocs **code** Notion (langage Markdown) pour conserver les modèles copiables tels quels.

---

## 10. Page 05 — Prompts

### Source

[`realization-prompt-family.md`](realization-prompt-family.md)

### Organisation Notion recommandée

- principes de rédaction ;
- variables communes (table) ;
- un toggle ou bloc code par prompt générique (§4 à §15) ;
- règles d'adaptation ;
- anti-patterns (table) ;
- garde-fous communs (bloc réutilisable).

**Recommandation :** blocs **code** pour chaque prompt — facilite copier-coller vers Cursor / ChatGPT.

---

## 11. Page 06 — Garde-fous

Page dédiée — agrégation transverse (sources : méthode, checklists, prompts, standard).

### Contenu recommandé

| Garde-fou | Rappel |
|-----------|--------|
| Pas de code sans autorisation explicite | Décision Go réalisation requise |
| Pas de projet applicatif sans décision explicite | Structure documentaire d'abord |
| Pas d'API / OpenAPI / SQL / tests prématurés | Stratégie documentaire avant implémentation |
| Pas de tickets Jira réels avant Go | Backlog préparatoire uniquement |
| Pas de sprint plan ferme avant Go réalisation | Planification indicative seulement |
| Go documentaire ≠ Go réalisation | Qualifier toute mention de « Go » |
| Pas d'exports locaux committés | Ex. `exports/` design |
| Pas de secrets dans Notion | Jamais de tokens ou credentials |
| Pas de merge automatique | Revue humaine obligatoire |

**Objectif :** rendre les garde-fous visibles sans lire tous les documents.

**Bloc Notion :** callout rouge ou orange « Ne pas démarrer le code » en tête de page.

---

## 12. Page 07 — Application à un projet

Page d'usage pratique — synthèse opérationnelle (pas un fichier Git dédié).

### Contenu recommandé

1. **Démarrer** — vérifier cadrage fonctionnel, ouvrir branche, lire méthode + standard.
2. **Fichiers à créer d'abord** — plan de cycle de la phase courante.
3. **Ordre d'application** — suivre les 7 étapes ; une phase à la fois.
4. **Templates** — utiliser au moment de créer chaque livrable de fond.
5. **Checklists** — en fin de phase, avant synthèse.
6. **Prompts** — pour accélérer la production documentaire avec garde-fous.
7. **PR documentaire** — en clôture de cycle ; merge manuel.
8. **Go / No-go** — cycle 7 uniquement ; autorisation explicite ou refus.

**Liens Notion :** vers pages 01, 02, 03, 04, 05, 06.

---

## 13. Page 99 — Historique / capitalisation Interv360

### Contenu recommandé

- origine : projet pilote Interv360 (`PRJ-INTERV360`) ;
- cycles capitalisés : delivery preparation → realization start ;
- documents Git capitalisés (liste des 8 fichiers) ;
- décisions méthodologiques retenues (générique, pas de stack imposée) ;
- limites : spécificités SAV, statuts, écrans non universalisés ;
- lien vers `capitalization-summary.md` et `capitalization-plan.md`.

### Attention

Cette page est **historique et contextuelle**.

Elle documente l'origine sans imposer les choix Interv360 (mono-app, flux métier, statuts propres) comme règles universelles.

---

## 14. Règles de transformation Markdown → Notion

| Élément Markdown | Transformation Notion recommandée |
|------------------|-----------------------------------|
| `#`, `##`, `###` titres | Titres Notion (H1, H2, H3) |
| Tables Markdown | Tables simples Notion ; base si filtrage / réutilisation |
| `- [ ]` checklists | Checkboxes Notion |
| Blocs ` ``` ` code | Blocs code Notion (préciser `markdown` si template) |
| Notes importantes | Callouts (info, warning, danger) |
| Documents longs (> ~200 lignes) | Pages filles ou toggles par section |
| Liens relatifs `[text](file.md)` | Liens entre pages Notion (@ mention ou lien URL interne) |
| Listes à puces / numérotées | Listes Notion natives |
| Tableaux longs répétitifs | Base Notion avec vues par phase |
| Métadonnées en tête (Type, Statut, Branche) | Propriétés en haut de page ou callout « Métadonnées » |
| Séparateurs `---` | Saut de section ou divider Notion |

**Règle générale :** préserver le sens et les garde-fous ; simplifier la mise en forme si Notion le rend plus lisible.

---

## 15. Conventions de nommage Notion

| Type de page | Convention |
|--------------|------------|
| Vue d'ensemble | `00 — Vue d'ensemble` |
| Méthode | `01 — Méthode` |
| Standard | `02 — Standard des livrables` |
| Checklists | `03 — Checklists` |
| Templates | `04 — Templates` |
| Prompts | `05 — Prompts` |
| Garde-fous | `06 — Garde-fous` |
| Application projet | `07 — Application à un projet` |
| Historique | `99 — Historique / capitalisation Interv360` |

**Préfixe numérique :** facilite l'ordre de navigation indépendamment de la date de création Notion.

**Icônes :** optionnelles — livre (méthode), checklist (03), code (04, 05), warning (06).

---

## 16. Éléments à ne pas intégrer dans Notion

| Élément | Raison |
|---------|--------|
| Secrets, tokens, credentials | Sécurité — jamais dans Notion |
| Exports locaux non validés | Ex. PNG design non versionnés |
| Fichiers de travail temporaires | Brouillons hors Git validé |
| Spécificités Interv360 comme règle universelle | Rester dans page 99 historique |
| Brouillons non validés | Attendre merge Git |
| Tickets Jira fictifs ou réels non validés | Hors périmètre méthode |
| Sprint plan ferme non validé | Engagement opérationnel prématuré |
| Décisions non prises présentées comme décisions | Risque de dérive |
| Autorisation de code implicite | Toujours explicite ou absente |
| Payload JSON / OpenAPI / SQL de travail | Implémentation — hors Notion méthode |
| Scripts d'import ou automatisation | Hors périmètre de ce plan |

---

## 17. Maintenance Notion

| Règle | Application |
|-------|-------------|
| Git reste la source de vérité | Toute modification substantielle commence dans Git |
| Notion mis à jour après PR mergée | Sync manuelle post-merge `main` |
| Date de dernière synchronisation | Indiquer en tête de page 00 ou 99 (ex. « Sync Git : 2026-06-XX ») |
| Éviter les divergences | Pas d'édition Notion sans retour Git si le contenu est normatif |
| Écarts pédagogiques | Documenter en callout si Notion simplifie pour la lecture |
| Garde-fous | Ne jamais supprimer ou affaiblir la page 06 |
| Templates | Rester copiables — ne pas les transformer en consignes rigides non modifiables |
| Pages historiques | Séparer 99 des standards 01–07 |
| Révision | Revoir Notion lors d'une nouvelle capitalisation ou généralisation vers `docs/methods/` |

**Fréquence suggérée :** à chaque merge PR touchant `method/interv360-realization/` ou futur équivalent `docs/methods/`.

---

## 18. Décisions retenues

| Décision | Statut |
|----------|--------|
| Intégration Notion préparée | ✅ Retenu |
| Git reste source de vérité | ✅ Retenu |
| Notion comme couche de lecture | ✅ Retenu |
| Arborescence en 9 zones (00–07 + 99) | ✅ Retenu |
| Mapping Markdown / Notion défini | ✅ Retenu |
| Garde-fous Notion dédiés (page 06) | ✅ Retenu |
| Pages historiques séparées (page 99) | ✅ Retenu |
| Pas d'automatisation Notion dans ce cycle | ✅ Retenu |
| Pas de publication Notion dans ce cycle | ✅ Retenu |
| Autorisation de code non donnée | ✅ Retenu |

---

## 19. Critères de sortie

- [x] objectif Notion défini ;
- [x] principe Git source de vérité défini ;
- [x] arborescence Notion recommandée définie ;
- [x] mapping fichiers / pages défini ;
- [x] contenu recommandé par page défini ;
- [x] règles Markdown → Notion définies ;
- [x] conventions de nommage définies ;
- [x] éléments à ne pas intégrer listés ;
- [x] règles de maintenance définies ;
- [x] décisions retenues listées.

---

## 20. Prochaine action

**Avant PR de clôture :**

1. Mettre à jour [`capitalization-summary.md`](../../../archive/interv360-realization/capitalization-summary.md) pour référencer ce plan d'intégration Notion dans les livrables produits et la recommandation de suite (sync Notion post-merge, manuelle).
2. Préparer la **PR documentaire** vers `main` — titre recommandé : `Capitalize Interv360 realization method`.
3. **Après merge** — intégration Notion manuelle selon ce plan (hors périmètre de la PR Git).

**Ce cycle ne publie pas dans Notion.** La publication reste une action humaine distincte, après validation documentaire.

---

*Plan d'intégration Notion — préparation uniquement, aucune publication effectuée.*

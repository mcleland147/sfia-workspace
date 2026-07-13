# 07 — Gouvernance et garde-fous

| Métadonnée | Valeur |
|------------|--------|
| **Page P0** | 07 — Gouvernance et garde-fous |
| **Statut** | Draft éditorial — non publié |
| **Cycle** | Cycle 2 |
| **Baseline** | SFIA v2.4 |
| **Audience** | Responsable méthode, Morris, qualité |
| **Niveau** | L2–L3 |
| **Propriétaire** | Morris |
| **Sources Git** | `sfia-rules-and-guardrails.md` ; `sfia-knowledge-layer.md` ; `sfia-notion-publication-governance.md` |
| **Commit** | `6407913689b14e84e0a487a3137ff290bb6e2ff8` |
| **Date** | 2026-07-13 13:11 Europe/Paris |

---

## 1. Objectif de la page

Exposer la gouvernance Git ↔ Notion, les rôles, les types de contenu et les **interdictions** (raw sync, API, CMP) — en distinguant validation éditoriale et GO de publication.

## 2. À retenir en 30 secondes

- **Git prime** toujours en cas de divergence.
- Notion = **synthèse éditorialisée**, pas source canonique.
- Publication Notion = **L0 manuelle** au MVP — cycle 3 + GO Morris.
- **Aucune** raw sync, API Notion, CMP ou auto-publish dans le périmètre actuel.
- Validation éditoriale ≠ autorisation de publier.

## 3. Contenu éditorial principal

### Hiérarchie des sources

| Rang | Source |
|------|--------|
| 1 | Git `main` |
| 2 | Documents foundation / core **validated** |
| 3 | Documents **candidate** (badge obligatoire) |
| 4 | Notion (guide) |
| 5 | Exports JSON historiques — **exclus** |

### Types de contenu

| Type | Modifiable dans Notion ? |
|------|--------------------------|
| Canonique (résumé) | Non — via Git |
| Synthèse éditoriale | Oui — avec métadonnées |
| Extrait / exemple | Reformulé — lien Git |
| Marketing | Oui — revue Morris |
| Interne / archive | Visibilité restreinte |

### Rôles

| Rôle | Responsabilité |
|------|----------------|
| Morris | Gates structurants, merge, publication |
| Propriétaire éditorial | Morris — cohérence pages Notion |
| Mainteneur Git | PR sur méthode canonique |
| Cursor / ChatGPT | Exécution / qualification — pas publish Notion |

### Workflow cible (résumé)

```text
Modification Git → PR → merge → préparation éditoriale → validation humaine
→ mise à jour Notion (manuelle) → métadonnées commit → QA cohérence
```

### Niveaux d'automatisation (information — sans promesse)

| Niveau | Description | MVP |
|--------|-------------|-----|
| L0 | Publication manuelle assistée | **Cible** |
| L1 | Contrôle métadonnées | Post-MVP |
| L2 | Brouillons guidés dans Git | Post-MVP |
| L3+ | Publication bornée / sync | **Hors cible** sans GO |

### Interdictions explicites

- **Raw sync** repository → Notion
- **API Notion** depuis cycles documentaires
- **`tools/cmp-001/`** et payload JSON CMP
- **Auto-publish** ou webhooks merge → Notion
- Décisions structurantes **automatisées**

## 4. Fonctionnement ou parcours

Avant toute publication (cycle 3) : relire `sfia-notion-publication-governance.md` dans Git + checklist P0.

## 5. Exemple pédagogique

Après merge PR #191 : les brouillons de ce dossier `editorial/` sont validés par Morris — **seulement alors** un opérateur crée les pages Notion en L0, en copiant le texte et en renseignant le SHA `6407913…` ou le commit de merge des drafts.

## 6. Points de vigilance

- Ne pas transformer une **recommandation** (ex. nouvel espace Notion) en **décision validée** sans GO.
- Legacy Notion : stratégie archive — **décision cycle 3**.

## 7. Liens

→ [01 Comprendre](sfia-notion-01-understand-sfia-editorial-draft.md) · [03 Cycle](sfia-notion-03-how-a-cycle-works-editorial-draft.md) · `sfia-notion-publication-governance.md` (Git)

## 8. Sources Git

- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/documentation/notion/sfia-notion-publication-governance.md`

## 9. Métadonnées publication

Type : canonical summary + gouvernance. Lien vers doc governance complet dans Git.

## 10. Réserves

Propriétaire éditorial et permissions Notion : **Morris**.

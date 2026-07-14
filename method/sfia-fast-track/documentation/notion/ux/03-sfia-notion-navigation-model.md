# 03 — Modèle de navigation — SFIA Notion

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — expérimentation UX documentaire Notion |
| **Usage** | Contrat navigation — non capitalisé |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Propriétaire** | Morris |
| **Source de vérité** | Git |
| **Capitalisation méthode** | Non réalisée |
| **Implémentation Notion** | Cycle ultérieur (UX-03) |
| **Horodatage** | 2026-07-14 12:06 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-notion-ux-conception` |
| **HEAD source** | `ee6c358750ecd18f7ba884ec51c8c7db3eaf3faa` |

---

## 1. Principes de navigation

| Principe | Règle |
|----------|-------|
| Point d'entrée unique | **00 Accueil** — toute session commence ou y revient |
| Retour accueil | Lien visible en-tête et footer de chaque page |
| Précédent / suivant | Séquence logique par intention — pas numérotation seule |
| Liens contextuels | Dans le corps — vers pages, bases, Git |
| Navigation par parcours | 4 parcours nommés depuis accueil |
| Sorties Git | Lien explicite quand détail technique requis |
| Bases ↔ pages | Entrée base depuis page ; sortie page depuis fiche base |
| Impasses | **Interdites** — minimum 2 sorties par page |
| Sidebar Notion | **Hors sujet** — non optimisée par ce contrat |

---

## 2. En-tête de page (obligatoire)

Chaque page P0 affiche en tête :

| Élément | Exemple |
|---------|---------|
| Retour accueil | `← Accueil` |
| Catégorie parcours | `Parcours : Comprendre en 30 min` |
| Statut documentaire | `Draft éditorial · Candidate v2.5` |
| Niveau de lecture | `L2` |

---

## 3. Corps de page (obligatoire)

| Bloc | Règle |
|------|-------|
| À retenir en 30 secondes | Toujours en premier après en-tête |
| Contenu principal | Une intention principale |
| Liens contextuels | Inline vers pages liées |
| Renvoi Git | Callout « Source Git » si L3+ |

---

## 4. Pied de page (obligatoire)

| Élément | Règle |
|---------|-------|
| Précédent | Page logique dans parcours courant |
| Suivant | Page logique dans parcours courant |
| Retour accueil | Répété |
| Ressources complémentaires | Glossaire, Gouvernance, Référentiel |
| Footer synced | Git prime · baseline v2.4 · Candidate · date sync |

---

## 5. Parcours nommés

### 5.1 Découvrir SFIA en 5 minutes

`00 Accueil` → `02 Valeur` → `03 Cycle` (schéma) → `11 Glossaire` (5 termes)

### 5.2 Comprendre SFIA en 30 minutes

`00` → `01 Comprendre` → `03 Cycle` → `04 Profils` → `07 Gouvernance` (résumé)

### 5.3 Lancer un premier cycle

`00` → `08 Mise en place` → `05 Routage` → `06 Templates` → sortie Git

### 5.4 Contribuer à la méthode

`00` → `07 Gouvernance` → `06 Templates` → `10 Documents` → sortie Git PR

---

## 6. Règles de nommage

| Contexte | Règle |
|----------|-------|
| Titre page Notion | `§NN — Titre court` (ex. `§03 — Comment fonctionne un cycle`) |
| Liens internes | Texte descriptif — pas « cliquez ici » |
| Liens Git | Chemin relatif repo + commit SHA si page P0 |
| Parcours | Verbe + durée : « Découvrir en 5 minutes » |
| Menus contextuels | ≤ 7 liens par bloc |

---

## 7. Règles d'icônes

Voir [04 Design system](04-sfia-notion-design-system.md). En navigation : icône page dans en-tête uniquement — pas dans chaque lien.

| Page | Icône |
|------|-------|
| 00 Accueil | 🏠 |
| 01 Comprendre | 📖 |
| 02 Valeur | 💡 |
| 03 Cycle | 🔄 |
| 04 Profils | 📋 |
| 05 Routage | 🧭 |
| 06 Templates | 🧩 |
| 07 Gouvernance | 🛡️ |
| 08 Mise en place | 🚀 |
| 10 Référentiel | 📁 |
| 11 Glossaire | 📚 |

---

## 8. Navigation bases ↔ pages

| Depuis | Vers | Action |
|--------|------|--------|
| Page 04 | Base Cycles | Lien « Voir tous les cycles » |
| Fiche cycle (base) | Page 03 | Lien « Comment fonctionne un cycle » |
| Page 06 | Base Référentiel | Lien filtré type=template |
| Page 10 | Base Référentiel | Vue embedded ou lien |
| Base Référentiel | Git | Propriété URL Git sur fiche |

---

## 9. Traitement des impasses

| Situation | Récupération |
|-----------|--------------|
| Fin de parcours | CTA « Retour accueil » + « Autre parcours » |
| Page isolée | Footer précédent/suivant + accueil |
| Lien mort | QA UX-06 — correction manuelle |
| Besoin technique | Callout « Continuer dans Git » |

---

## 10. Comportement mobile

- En-tête : une ligne — `← Accueil · L2`
- Footer : liens empilés — `Précédent` / `Suivant` / `Accueil`
- Pas de menu hamburger custom — navigation in-page
- Tables navigation : liste verticale

---

## 11. Tableau des transitions — 11 pages P0

Légende : **P** = précédent suggéré · **S** = suivant suggéré · **A** = accueil toujours accessible

| Page | P (défaut) | S (défaut) | Parcours 5 min | Parcours 30 min | Parcours 1er cycle | Liens transverses |
|------|------------|------------|----------------|-----------------|-------------------|-------------------|
| **00 Accueil** | — | 02 ou 01 | → 02 | → 01 | → 08 | 11, 07 |
| **01 Comprendre** | 00 | 03 | — | 00→**01**→03 | — | 07, 11 |
| **02 Valeur** | 00 | 03 | 00→**02**→03 | — | — | 11 |
| **03 Cycle** | 02 ou 01 | 04 ou 11 | 02→**03**→11 | 01→**03**→04 | 08→05 | Base Cycles |
| **04 Profils** | 03 | 05 | — | 03→**04**→05 | 05 | Base Cycles |
| **05 Routage** | 04 | 06 ou 08 | — | 04→**05**→06 | 08→**05**→06 | Base Cycles |
| **06 Templates** | 05 | 08 ou 10 | — | 05→**06** | 05→**06**→Git | Référentiel |
| **07 Gouvernance** | 04 ou 06 | 10 ou 00 | — | 04→**07**→00 | — | Git governance |
| **08 Mise en place** | 00 ou 06 | 05 | — | — | 00→**08**→05 | 03, 11 |
| **10 Documents** | 07 | 06 ou 00 | — | — | 06→**10** | Référentiel |
| **11 Glossaire** | 03 ou 02 | 00 | 03→**11**→00 | — | — | Toutes pages |

**Note :** les transitions par défaut (P/S) suivent la séquence numérique **modulo parcours** — l'implémentation UX-03 matérialise les footers.

---

## 12. Navigation transversale (toujours disponible)

| Lien | Position |
|------|----------|
| Glossaire | Footer + inline termes |
| Gouvernance | Footer |
| Accueil | En-tête + footer |
| Base Référentiel | Footer contributeurs |
| Base Cycles | Footer PMO |

---

## Liens

→ [02 Architecture](02-sfia-notion-experience-architecture.md) · [04 Design system](04-sfia-notion-design-system.md) · [06 User journeys](06-sfia-notion-user-journeys.md)

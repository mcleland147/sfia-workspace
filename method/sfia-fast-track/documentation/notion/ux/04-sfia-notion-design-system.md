# 04 — Design system Notion — SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — expérimentation UX documentaire Notion |
| **Usage** | Design system Notion — non capitalisé |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Propriétaire** | Morris |
| **Source de vérité** | Git |
| **Capitalisation méthode** | Non réalisée |
| **Implémentation Notion** | Cycle ultérieur (UX-05) |
| **Horodatage** | 2026-07-14 12:06 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-notion-ux-conception` |
| **HEAD source** | `ee6c358750ecd18f7ba884ec51c8c7db3eaf3faa` |

---

## 1. Principes visuels

| Principe | Application |
|----------|-------------|
| Sobriété | Fond clair, peu de couleurs |
| Fonction avant décoration | Chaque callout a un rôle |
| Lisibilité | Interlignage confortable, paragraphes courts |
| Cohérence | Mêmes callouts sur toutes les pages P0 |
| Accessibilité | Sens compréhensible sans couleur seule |
| Git discret | Callout dédié — pas de blocs code massifs |

---

## 2. Hiérarchie typographique

| Niveau Notion | Usage | Règle |
|---------------|-------|-------|
| **Titre page** | Titre unique H1 | `§NN — Titre` — une seule fois |
| **Heading 1** | Sections principales (1–10) | Numérotation optionnelle |
| **Heading 2** | Sous-sections | Max 2 niveaux sous H1 |
| **Heading 3** | Détail ponctuel | Éviter H3 sous H3 |
| **Paragraphe** | Corps | ≤ 4 lignes avant liste/table |
| **Liste** | Énumération | Puces pour < 7 items ; table si plus |

---

## 3. Système d'icônes minimal

| Page / concept | Icône | Emoji fallback |
|----------------|-------|----------------|
| Accueil | maison | 🏠 |
| Comprendre | livre | 📖 |
| Valeur | ampoule | 💡 |
| Cycle | flèches circulaires | 🔄 |
| Routage | boussole | 🧭 |
| Templates | puzzle | 🧩 |
| Gouvernance | bouclier | 🛡️ |
| Mise en place | fusée | 🚀 |
| Référentiel | dossiers | 📁 |
| Glossaire | livres | 📚 |

**Règle :** une icône par page dans l'en-tête — pas d'emojis décoratifs dans le corps.

---

## 4. Callouts fonctionnels

| Type | Couleur Notion | Usage | Texte type |
|------|----------------|-------|------------|
| **Information** | Bleu | Contexte neutre | « Cette page résume… » |
| **À retenir** | Jaune | Synthèse 30 secondes | Bullet points clés |
| **Attention** | Orange | Vigilance, risque | « Ne pas confondre… » |
| **Candidate** | Gris | Contenu v2.5 non baseline | « Candidate — non baseline » |
| **Décision Morris** | Violet | Décision validée ou requise | « GO requis pour… » |
| **Source Git** | Vert | Lien vers vérité | `path/to/file.md` @ SHA |

**Règle :** les couleurs ne sont jamais purement décoratives. Chaque callout inclut un **libellé textuel** du type (ex. « Candidate »).

---

## 5. Couleurs fonctionnelles

| Sémantique | Usage | Interdit |
|------------|-------|----------|
| Bleu | Information | Branding décoratif |
| Jaune | Retenir | Surligner tout le paragraphe |
| Orange | Attention | Alarme sans texte |
| Gris | Candidate / neutre | Texte illisible |
| Vert | Git / validation source | « Succès » décoratif |
| Violet | Décision Morris | Promotion baseline |

**Accessibilité :** le sens doit rester compréhensible en niveaux de gris ou sans emoji.

---

## 6. Composants Notion

| Composant | Usage | Règle |
|-----------|-------|-------|
| **Séparateur** | Entre sections majeures | Max 1 par 3 sections |
| **Tableau** | Matrices, métadonnées | ≤ 5 colonnes desktop ; toggle mobile |
| **Colonnes** | Hero accueil uniquement | 2 colonnes max |
| **Toggle** | Détail optionnel L3+ | Titre explicite |
| **Citation** | Citation operating model | Source Git sous citation |
| **Code** | Schémas ASCII uniquement | Pas de code exécutable |
| **Bases / vues** | Référentiel, Cycles | Vues nommées par intention |
| **Synced blocks** | Footer + 3 rappels globaux | Voir §8 |
| **Lien** | Navigation, Git | Texte descriptif |

---

## 7. Hero (Accueil uniquement)

| Bloc | Contenu |
|------|---------|
| Titre | SFIA — Software Factory Intelligence Approach |
| Sous-titre | Guide de compréhension — Git source de vérité |
| Callout Git/Notion | Schéma dualité |
| 3 CTA parcours | Boutons ou liens callout |
| Statut méthode | v2.4 baseline · éléments Candidate |

---

## 8. Footer global (synced block)

**Usage limité synced blocks à :**

1. **Git source de vérité** — une ligne + lien repo
2. **Baseline actuelle** — SFIA v2.4
3. **Statut Candidate** — mention si page concernée
4. **Footer navigation** — Accueil · Glossaire · Gouvernance · date sync

### Risques maintenance synced blocks

| Risque | Mitigation |
|--------|------------|
| Mise à jour oubliée sur une page | Max 4 synced blocks ; QA UX-06 checklist |
| Divergence partielle | Audit mensuel Morris |
| Casse mobile | Footer texte court |
| Propagation erreur | Contenu minimal dans synced |

---

## 9. Métadonnées visuelles

Table en haut de page (page éditoriale standard) :

| Champ | Affichage |
|-------|-----------|
| Page P0 | §NN |
| Statut | Draft / Publié |
| Niveau | L0–L4 |
| Propriétaire | Morris |
| Commit source | SHA court |
| Date sync | Europe/Paris |

---

## 10. Navigation visuelle

| Élément | Style |
|---------|-------|
| Retour accueil | `← Accueil` — lien en tête |
| Précédent / suivant | Footer — `← Précédent · Suivant →` |
| Liens Git | Callout vert + monospace path |
| Bases | Bouton callout bleu |

---

## 11. Comportement mobile

- Colonnes hero → empilées
- Tables larges → toggle « Voir tableau »
- Callouts pleine largeur
- Footer liens verticaux
- Pas de hover-only

---

## 12. Accessibilité

| Critère | Règle |
|---------|-------|
| Contraste | Texte Notion par défaut — pas de texte gris clair custom |
| Couleur seule | Interdit pour statut — toujours libellé |
| Emojis | Complément icône — pas seul vecteur de sens |
| Structure | H1 unique ; hiérarchie H2 logique |
| Liens | Texte explicite |

---

## 13. Matrice QA — élément / usage / règle / interdit / test

| Élément | Usage | Règle | Interdit | Test QA |
|---------|-------|-------|----------|---------|
| Callout À retenir | Synthèse page | En tête corps | > 7 bullets | Lecture 30 s |
| Callout Candidate | v2.5 | Si mention v2.5 | Sans libellé | Badge visible |
| Callout Source Git | L3+ | Path + SHA | Dump fichier | Lien cliquable |
| Tableau | Matrice routage | ≤ 5 col. | Scroll horizontal mobile | Toggle mobile |
| Synced footer | Toutes pages | 4 blocs max | Contenu long | Cohérence 11 pages |
| Hero | Accueil | 2 colonnes max | Vidéo, image lourde | Mobile empilé |
| Icône page | En-tête | 1 par page | Emojis corps | Cohérence liste §03 |
| Toggle | Détail L3 | Titre clair | Contenu critique caché | Ouverture intuitive |
| Base embed | §10 | Vue filtrée | Liste complète repo | ≤ 25 entrées visibles |
| Lien Git externe | Exécution | github.com path | Token, secret | 404 check |

---

## Liens

→ [03 Navigation](03-sfia-notion-navigation-model.md) · [05 Templates](05-sfia-notion-page-templates.md) · [07 Roadmap](07-sfia-notion-ux-roadmap.md)

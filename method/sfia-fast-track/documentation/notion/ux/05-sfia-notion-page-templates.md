# 05 — Templates de pages — SFIA Notion

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — expérimentation UX documentaire Notion |
| **Usage** | Gabarits pages Notion — non capitalisé |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Propriétaire** | Morris |
| **Source de vérité** | Git |
| **Capitalisation méthode** | Non réalisée |
| **Implémentation Notion** | Cycle ultérieur (UX-02, UX-03) |
| **Horodatage** | 2026-07-14 12:06 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-notion-ux-conception` |
| **HEAD source** | `ee6c358750ecd18f7ba884ec51c8c7db3eaf3faa` |

---

## 1. Inventaire des gabarits (8)

| # | Gabarit | Pages P0 |
|---|---------|----------|
| 1 | Landing / Accueil | 00 |
| 2 | Page éditoriale standard | 01, 02, 03, 04, 05, 07 |
| 3 | Page de parcours | Accueil (section parcours) |
| 4 | Page Référentiel | 10 |
| 5 | Page Cycles | 04 (section base) |
| 6 | Page Glossaire | 11 |
| 7 | Page Gouvernance | 07 |
| 8 | Page pratique / onboarding | 08, 06 |

---

## 2. Gabarit 1 — Landing page / Accueil

| Champ | Valeur |
|-------|--------|
| **Objectif** | Orienter < 30 s ; proposer 3 parcours |
| **Audience** | Tous |
| **Structure** | Hero · Git/Notion · 3 parcours · accès rapides · choix par besoin · statut · sources · footer |
| **Blocs obligatoires** | Hero, callout Git, 3 CTA parcours, schéma dualité, footer synced |
| **Blocs optionnels** | Choix par besoin (table), accès rapides bases |
| **Navigation** | Sorties vers 01, 02, 08, 11 |
| **Métadonnées** | L0–L1, Morris, commit source |
| **Callouts** | Information, À retenir, Source Git |
| **Longueur** | ≤ 2 écrans desktop sans scroll excessif |
| **Liens Git** | README, method README, knowledge-layer |
| **Pièges** | Liste exhaustive pages ; miroir sidebar |
| **Critères acceptation** | 3 parcours cliquables ; retour N/A ; schéma visible mobile |

---

## 3. Gabarit 2 — Page éditoriale standard

| Champ | Valeur |
|-------|--------|
| **Objectif** | Une intention ; synthèse pédagogique |
| **Audience** | Selon page |
| **Structure** | En-tête nav · métadonnées · 30 secondes · corps 10 sections · exemple · vigilance · ressources · nav · sources Git · footer |
| **Blocs obligatoires** | À retenir, corps, points vigilance, précédent/suivant, Source Git |
| **Blocs optionnels** | Exemple pédagogique, toggle détail |
| **Navigation** | En-tête + footer §03 |
| **Métadonnées** | Table 8 champs minimum |
| **Callouts** | À retenir, Attention, Candidate, Source Git |
| **Longueur** | 1–3 écrans ; L2 max sans toggle |
| **Liens Git** | 2–5 paths par page |
| **Pièges** | Copie intégrale doc Git ; jargon sans glossaire |
| **Critères acceptation** | 30 s lisible ; 2 sorties min ; commit SHA présent |

**Pages :** 01, 02, 03, 04, 05, 07 (base) ; 06 hybride avec gabarit 8.

---

## 4. Gabarit 3 — Page de parcours

| Champ | Valeur |
|-------|--------|
| **Objectif** | Décrire une séquence nommée |
| **Audience** | Selon parcours |
| **Structure** | Titre parcours · durée · étapes numérotées · liens pages · résultat attendu |
| **Blocs obligatoires** | Liste étapes, durée cible, CTA départ |
| **Blocs optionnels** | Diagramme Mermaid/texte |
| **Navigation** | Liens vers chaque étape |
| **Métadonnées** | Parcours ID, durée |
| **Callouts** | Information |
| **Longueur** | ≤ 1 écran |
| **Liens Git** | Optionnel fin parcours |
| **Pièges** | Parcours sans fin |
| **Critères acceptation** | Chaque étape a lien page existante |

**Emplacement :** section dans 00 Accueil + référence dans 06 user journeys.

---

## 5. Gabarit 4 — Page Référentiel

| Champ | Valeur |
|-------|--------|
| **Objectif** | Index curé — pas liste repo |
| **Audience** | Contributeur, architecte |
| **Structure** | Intro · vue base embedded · filtres · lien Git par entrée |
| **Blocs obligatoires** | Vue Base Référentiel, callout liste fermée |
| **Blocs optionnels** | Filtres par type |
| **Navigation** | ← 06 Templates · → Accueil |
| **Métadonnées** | L4 |
| **Callouts** | Source Git, Information |
| **Longueur** | Court — détail dans base |
| **Liens Git** | Propriété URL sur chaque fiche base |
| **Pièges** | 720 docs listés |
| **Critères acceptation** | Vue filtrée ; ≤ 25 entrées P0 visibles |

**Page :** 10 Documents de référence.

---

## 6. Gabarit 5 — Page Cycles

| Champ | Valeur |
|-------|--------|
| **Objectif** | Synthèse + accès Base Cycles |
| **Audience** | PMO, PO |
| **Structure** | Résumé 15 cycles · badge Candidate · embed base · lien routing |
| **Blocs obligatoires** | Table synthèse, callout Candidate, lien base |
| **Blocs optionnels** | Exemples gates |
| **Navigation** | ↔ 03, 05, Base Cycles |
| **Métadonnées** | L2, v2.5 Candidate |
| **Callouts** | Candidate, Attention |
| **Longueur** | 2 écrans + base |
| **Liens Git** | routing-guide, cycle-execution-template |
| **Pièges** | Présenter v2.5 comme baseline |
| **Critères acceptation** | 15 entrées base ; badge visible |

**Page :** 04 (section dédiée + base).

---

## 7. Gabarit 6 — Page Glossaire

| Champ | Valeur |
|-------|--------|
| **Objectif** | Vocabulaire partagé ≥ 20 termes |
| **Audience** | Tous |
| **Structure** | Intro · table termes · liens croisés pages |
| **Blocs obligatoires** | ≥ 27 termes, liens internes |
| **Blocs optionnels** | Toggle par lettre |
| **Navigation** | Footer toutes pages → 11 |
| **Métadonnées** | L1–L4 |
| **Callouts** | Information |
| **Longueur** | Référence — scannable |
| **Liens Git** | operating-model, routing-guide |
| **Pièges** | Redéfinition contradictoire |
| **Critères acceptation** | Termes alignés editorial draft 11 |

**Page :** 11 Glossaire.

---

## 8. Gabarit 7 — Page Gouvernance

| Champ | Valeur |
|-------|--------|
| **Objectif** | Garde-fous, Git prime, workflow sync |
| **Audience** | Morris, qualité, méthode |
| **Structure** | Table interdictions · rôles · workflow · lien governance Git |
| **Blocs obligatoires** | Table garde-fous, callout Décision Morris |
| **Blocs optionnels** | Niveaux automation L0–L3 |
| **Navigation** | → 10, Git governance doc |
| **Métadonnées** | L2–L3 |
| **Callouts** | Attention, Décision Morris, Source Git |
| **Longueur** | 2 écrans |
| **Liens Git** | rules-and-guardrails, publication-governance |
| **Pièges** | Procédure CMP/API |
| **Critères acceptation** | Interdictions raw sync/API explicites |

**Page :** 07 Gouvernance.

---

## 9. Gabarit 8 — Page pratique / onboarding

| Champ | Valeur |
|-------|--------|
| **Objectif** | Actions concrètes — checklist |
| **Audience** | Tech lead, PO |
| **Structure** | Prérequis · checklist ≥ 12 étapes · liens outils · premier cycle |
| **Blocs obligatoires** | Checklist actionnable, CTA Git |
| **Blocs optionnels** | Captures (post UX-05) |
| **Navigation** | → 05, 06, sortie Git |
| **Métadonnées** | L3 |
| **Callouts** | À retenir, Source Git |
| **Longueur** | Checklist scannable |
| **Liens Git** | repository-blueprint, checklists |
| **Pièges** | Promettre exécution dans Notion |
| **Critères acceptation** | 12 étapes ; chaque étape actionnable |

**Pages :** 08 Mise en place, 06 Templates (index).

---

## 10. Structure commune page éditoriale (référence)

```text
[En-tête navigation]
[Métadonnées table]
[Callout À retenir en 30 secondes]
## 1. Objectif
## 2. Contenu principal
## 3. Fonctionnement / parcours
## 4. Exemple pédagogique
## 5. Points de vigilance
## 6. Liens
## 7. Sources Git
## 8. Métadonnées publication
## 9. Réserves / décisions Morris
[Navigation précédent · suivant · accueil]
[Footer synced]
```

---

## Liens

→ [04 Design system](04-sfia-notion-design-system.md) · [06 User journeys](06-sfia-notion-user-journeys.md) · [07 Roadmap](07-sfia-notion-ux-roadmap.md)

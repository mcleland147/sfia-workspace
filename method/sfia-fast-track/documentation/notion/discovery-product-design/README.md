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

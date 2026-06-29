# Interv360 — Synthèse cycle Penpot premier écran

**Type** : Synthèse de cycle design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Cycle** : Premier écran Penpot — Liste demandes  
**Branche** : `design/interv360-penpot-first-screen-cycle`  
**Statut** : Décision outillage rendue  
**Documents associés** : [`penpot-visual-quality-benchmark.md`](penpot-visual-quality-benchmark.md), [`penpot-first-screen-review.md`](penpot-first-screen-review.md), [`penpot-first-screen-v2-visual-instructions.md`](penpot-first-screen-v2-visual-instructions.md)

---

## 1. Objectif du cycle

Ce cycle visait à tester **Penpot self-host + Cursor MCP** comme chaîne de production du **premier écran Interv360** (Liste demandes), à partir des specs Git (`06-ux-ui/`) et des références visuelles Figma V1.

L'enjeu : déterminer si Penpot peut remplacer Figma pour des maquettes **high fidelity** — présentables en revue métier, démonstration ou capitalisation modèle SFIA.

---

## 2. Travaux réalisés

| Livrable | Description |
|----------|-------------|
| [`penpot-first-screen-review.md`](penpot-first-screen-review.md) | Revue V1 pilote — constats et limites |
| [`penpot-application-frame-template.md`](penpot-application-frame-template.md) | Gabarit layout frame applicative SFIA |
| [`penpot-first-screen-v11-instructions.md`](penpot-first-screen-v11-instructions.md) | Instructions MCP V1.1 — wireframe avancé |
| [`penpot-visual-quality-benchmark.md`](penpot-visual-quality-benchmark.md) | Benchmark qualité Penpot vs Figma |
| [`penpot-first-screen-v2-visual-instructions.md`](penpot-first-screen-v2-visual-instructions.md) | Instructions MCP V2 visual standard |
| Frame Penpot `Liste demandes — V2 visual standard` | Production V2 sur page `03 — Screens` |
| Export PNG local (non commité) | `exports/penpot-liste-demandes-v2-visual-standard.png` — trace de revue |

**Versions Penpot produites sur `03 — Screens` :**

- `Liste demandes — V1 pilote` (x=80, y=80)
- `Liste demandes — V1.1 pilote` (x=1600, y=80)
- `Liste demandes — V2 visual standard` (x=3120, y=80)

---

## 3. Résultats

| Version | Résultat | Décision |
|---------|----------|----------|
| **V1 pilote** | Preuve technique MCP — structure créée, rendu non exploitable visuellement | Preuve MCP validée ; qualité visuelle insuffisante |
| **V1.1 pilote** | Wireframe avancé propre — layout template respecté, lisible, garde-fous OK | Structure et MCP validés ; qualité inférieure à Figma |
| **V2 visual standard** | Meilleure que V1.1 — sidebar, card, CTA, pills ; **inférieure à Figma V1** | High fidelity non atteint ; export PNG fragile |

**Référence de comparaison :** `projects/interv360/02-architecture/figma-first-draft-screens/06-liste-demandes.png`

---

## 4. Décision finale

**Penpot n'est pas retenu comme remplaçant Figma pour les maquettes high fidelity.**

| Outil | Rôle retenu |
|-------|-------------|
| **Figma** | Final UI — maquettes finales, présentables, démonstrations |
| **Penpot** | Wireframe avancé / preuve MCP / documentation visuelle |
| **Git** | Source fonctionnelle et méthodologique SFIA |

---

## 5. Raisons de la décision

- Qualité visuelle **insuffisante** vs premières maquettes Figma V1 (`06-liste-demandes.png`).
- Export PNG **incomplet ou fragile** — rendu partiel (textes tronqués, tableau peu rendu, filtres peu visibles).
- **Effort de cadrage important** (instructions détaillées, prompts MCP longs) pour un résultat encore inférieur au standard attendu.
- **Risque de perte de temps** si généralisation aux 8 autres écrans MVP sans gain qualité.
- Besoin de maquettes **valorables commercialement** — revue métier, démo, crédibilité visuelle.
- Fragilité de génération (orphelins accidentels malgré garde-fous documentés).

---

## 6. Ce qui est conservé

- Documentation Penpot du cycle (revue, template, instructions, benchmark, synthèse).
- Benchmark outillage et matrice de décision.
- Gabarit layout frame applicative SFIA.
- Apprentissages MCP (connexion, API, layout, limites export).
- Frames V1 / V1.1 / V2 dans Penpot comme trace technique.
- Décision outillage documentée et reproductible.
- Possibilité de réutiliser Penpot pour **cas simples** (wireframe, preuve Git → design).

---

## 7. Ce qui est arrêté

- Production **high fidelity** des 8 autres écrans MVP dans Penpot.
- Tentative de **remplacement complet** de Figma par Penpot pour Interv360 / SFIA.
- Poursuite V3 / V4 Penpot sans bénéfice évident sur le même écran.
- Généralisation Penpot comme outil maquette SFIA avant nouvelle preuve qualité.

---

## 8. Suite recommandée

1. **Conserver** les documents du cycle sur la branche `design/interv360-penpot-first-screen-cycle`.
2. **Ne pas commiter** le PNG d'export sauf décision explicite (`exports/penpot-liste-demandes-v2-visual-standard.png`).
3. **Nettoyer** plus tard les orphelins Penpot sur `03 — Screens` si nécessaire (session dédiée).
4. **Reprendre** la production des maquettes présentables dans **Figma**, alignées sur `06-ux-ui/`.
5. **Préparer** une documentation de reprise Figma alignée sur les specs UX/UI Git (prochain cycle).

---

## 9. Statut de clôture

**Cycle Penpot premier écran clôturable** après commit documentaire et **PR unique** du cycle.

Commits locaux attendus sur la branche :

| Commit | Contenu |
|--------|---------|
| `7ecad75` | Revue V1, template, instructions V1.1 |
| `74c92bf` | Benchmark qualité |
| `a867a21` | Instructions V2 visual standard |
| *(ce commit)* | Décision outillage + synthèse de cycle |

---

*Synthèse cycle Interv360 — Premier écran Penpot — Décision outillage rendue.*

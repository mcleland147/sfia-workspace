# Chantiers360 v2 — Alignement design / backlog

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/04-design/design-to-backlog-alignment.md`  
**Cycle :** Design Figma MVP — rattrapage  
**Revue Morris :** 2026-07-06 — Gate design P1 OK avec réserves mineures

> Matrice d'alignement — **lecture backlog, pas de modification** dans ce cycle.

## Règle cycle

- Le backlog MVP (PR #99) **n'est pas remis en cause**
- Micro-cycle Backlog Alignment : **non ouvert** — aucun écart bloquant identifié

## Statut global

**Aucun écart backlog bloquant identifié.**

Les 4 frames Figma validées (page ✅ MVP P1 — Validé Morris) couvrent les écrans P1 du backlog sans remettre en cause les user stories, critères d'acceptation ou incréments existants.

---

## Frames Figma validées → couverture P1

| Frame Figma (référence) | Écran P1 couvert | User stories | Incrément | Impact backlog | Statut |
|-------------------------|------------------|--------------|-----------|----------------|--------|
| **01 — Dashboard cockpit premium** | Liste chantiers / dashboard | US-02 | INC-01 | Aucun | ✅ Aligné |
| **04 — Création chantier** | Création chantier | US-01 | INC-01 | Aucun | ✅ Aligné |
| **02 — Fiche chantier — Tâches** | Fiche pivot + section tâches | US-03, US-06, US-07 | INC-01, INC-02 | Aucun | ✅ Aligné |
| **03 — Fiche chantier — Réserves** | Fiche pivot + section réserves | US-03, US-08, US-09 | INC-01, INC-02 | Aucun | ✅ Aligné |

**Note :** statut chantier (US-04) et retard (US-05) sont couverts visuellement dans les frames fiche (hero) et dashboard (cartes) — conforme backlog.

---

## Matrice complète écran → backlog

| Écran | Source UX | User stories | Incrément | Statut alignement |
|-------|-----------|--------------|-----------|-------------------|
| Liste / dashboard | `screen-map.md` §1 | US-02 | INC-01 | ✅ Validé Figma |
| Création chantier | `screen-map.md` §2 | US-01 | INC-01 | ✅ Validé Figma |
| Fiche chantier | `screen-map.md` §3 | US-03, US-04, US-05 | INC-01, INC-03 | ✅ Validé Figma (hero + statut/retard) |
| Section tâches | `screen-map.md` §4 | US-06, US-07 | INC-02 | ✅ Validé Figma |
| Section réserves | `screen-map.md` §5 | US-08, US-09 | INC-02 | ✅ Validé Figma |
| Section jalons | `screen-map.md` §6 | US-10, US-05 | INC-03 | ⏳ P2 — non produit Figma |
| Section comptes rendus | `screen-map.md` §7 | US-11 | INC-04 | ⏳ P2 — non produit Figma |
| Prochaines actions | `screen-map.md` §8 | US-12, US-13 | INC-05 | ⏳ P2 — non produit Figma |

---

## Vérifications scope / exclusions

| Règle backlog / framing | Validation Figma P1 | Alignement |
|-------------------------|---------------------|------------|
| Pas de devis / facturation / compta | Aucun module commercial dans frames validées | ✅ |
| Pas d'accès client | Aucun espace client | ✅ |
| Planning simple only — pas Gantt | P2 non produit — pas de dérive observée P1 | ✅ |
| Prochaines actions 100 % dérivées | P2 non produit — règle maintenue backlog | ✅ |
| Retard manuel — badge visible | Badge hero / cartes — conforme | ✅ |
| 13 US, 5 INC | P1 couvre US-01 à US-09 ; P2 reste backlog inchangé | ✅ |

---

## Candidats micro-cycle Backlog Alignment

| # | Écart | User story impactée | Action | Statut |
|---|-------|---------------------|--------|--------|
| — | *Aucun écart bloquant* | — | Micro-cycle **non ouvert** | ❌ Non requis |

---

## Post-revue Figma Morris

| Date | Revue Morris | Écarts identifiés | Micro-cycle Backlog Alignment |
|------|--------------|-------------------|-------------------------------|
| 2026-07-06 | ✅ Gate P1 OK — réserves polish mineures | Aucun écart bloquant | ❌ Non requis |

**P2 :** jalons, comptes rendus, prochaines actions — **à produire ou valider ultérieurement** si nécessaire avant INC-03 à INC-05 ; backlog inchangé en attendant.

---

**Documents liés :** `03-backlog/` (lecture seule), `figma-review-checklist.md`, `design-decisions.md`

**Interdit dans ce cycle :** modification directe de `03-backlog/*`

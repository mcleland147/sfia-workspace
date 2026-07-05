# Chantiers360 v2 — Alignement design / backlog

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/04-design/design-to-backlog-alignment.md`  
**Cycle :** Design Figma MVP — rattrapage

> Matrice d'alignement — **lecture backlog, pas de modification** dans ce cycle.  
> Écarts significatifs = candidats pour micro-cycle **Backlog Alignment** séparé (non ouvert ici).

## Règle cycle

- Le backlog MVP (PR #99) **n'est pas remis en cause** par ce document
- Les écarts détectés après production Figma seront **listés** ici — pas corrigés directement
- Micro-cycle Backlog Alignment : **à ouvrir uniquement si Morris identifie des écarts significatifs**

## Statut global

**Aucun écart identifié à ce stade.**

Les spécifications design (`screen-design-spec.md`) sont dérivées des wireframes Markdown (`02-ux-ui/`) et alignées sur le backlog existant (`03-backlog/`). La validation visuelle Figma pourra révéler des écarts — à documenter après revue Morris.

---

## Matrice écran → backlog

| Écran Figma attendu | Source UX Markdown | User stories | Incrément | Impact backlog | Statut alignement |
|---------------------|-------------------|--------------|-----------|----------------|-------------------|
| Liste chantiers | `screen-map.md` §1, `wireframes-functional.md` §1 | US-02 | INC-01 | Aucun — conforme | ✅ Aligné |
| Création / édition chantier | `screen-map.md` §2, `wireframes-functional.md` §8 | US-01, US-04 | INC-01 | Aucun — conforme | ✅ Aligné |
| Fiche chantier | `screen-map.md` §3, `wireframes-functional.md` §2 | US-03, US-04, US-05 | INC-01, INC-03 | Aucun — conforme | ✅ Aligné |
| Section tâches | `screen-map.md` §4, `wireframes-functional.md` §3 | US-06, US-07 | INC-02 | Aucun — conforme | ✅ Aligné |
| Section réserves | `screen-map.md` §5, `wireframes-functional.md` §4 | US-08, US-09 | INC-02 | Aucun — conforme | ✅ Aligné |
| Section jalons / planning simple | `screen-map.md` §6, `wireframes-functional.md` §5 | US-10, US-05 | INC-03 | Aucun — conforme | ✅ Aligné |
| Section comptes rendus | `screen-map.md` §7, `wireframes-functional.md` §6 | US-11 | INC-04 | Aucun — conforme | ✅ Aligné |
| Vue prochaines actions | `screen-map.md` §8, `wireframes-functional.md` §7 | US-12, US-13 | INC-05 | Aucun — conforme | ✅ Aligné |

---

## Vérifications scope / exclusions

| Règle backlog / framing | Design spec | Alignement |
|-------------------------|-------------|------------|
| Pas de devis / facturation / compta | Exclu `figma-brief.md` §8 | ✅ |
| Pas d'accès client | Exclu tous écrans | ✅ |
| Planning simple only — pas Gantt | Section jalons non dominante | ✅ |
| Prochaines actions 100 % dérivées | Pas de saisie manuelle | ✅ |
| Retard manuel — pas calcul auto | Toggle fiche/liste | ✅ |
| 13 US, 5 INC, ordre INC-01→05 | Traçabilité matrice ci-dessus | ✅ |

---

## Candidats micro-cycle Backlog Alignment

| # | Écart potentiel | User story / critère impacté | Action proposée | Statut |
|---|-----------------|----------------------------|-----------------|--------|
| — | *Aucun écart listé à ce stade* | — | — | — |

**Note :** compléter cette section après revue Figma Morris si des écarts visuels impliquent des ajustements US ou critères d'acceptation.

---

## Post-revue Figma (à compléter)

| Date | Revue Morris | Écarts identifiés | Micro-cycle Backlog Alignment |
|------|--------------|-------------------|-------------------------------|
| — | ⏳ En attente | — | ⏳ Non requis à ce stade |

---

**Documents liés :** `03-backlog/` (lecture seule), `figma-review-checklist.md`, `design-decisions.md`

**Interdit dans ce cycle :** modification directe de `03-backlog/*`

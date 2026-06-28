# Interv360 — Ouverture cycle Design V2 Penpot

**Type** : Ouverture cycle design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Outil cible** : Penpot self-host + Cursor MCP  
**Statut** : Draft  
**Branche** : `design/interv360-penpot-reference`  
**Documents associés** : [`penpot-project-reference.md`](penpot-project-reference.md)

---

## 1. Objectif du cycle

Le cycle **Design V2 Interv360** vise à passer des **livrables UX/UI documentaires** (phase `06-ux-ui/`, clôturée) vers une **maquette Penpot contrôlée**, traçable et alignée sur les specs Git.

Ce cycle ouvre la **production visuelle** — sans remplacer la documentation fonctionnelle comme source de vérité.

---

## 2. Pourquoi Penpot

| Motivation | Détail |
|------------|--------|
| Alternative à Figma | Figma V1 clôturée comme présentable mais non définitive |
| Self-host local | Instance `http://localhost:9001` — données design sous contrôle local |
| Intégration Cursor MCP | Lecture et écriture Penpot guidées par specs Git |
| Cohérence stack SFIA | Outillage documenté (`docs/tooling/penpot/`), conventions pages, règles agent |
| Réutilisabilité | Modèle applicable aux futurs projets SFIA (référence + priorisation + pilote) |

Voir : [`docs/tooling/penpot/penpot-sfia-method-integration.md`](../../../docs/tooling/penpot/penpot-sfia-method-integration.md).

---

## 3. État initial

| Élément | Statut |
|---------|--------|
| UX/UI Interv360 reprise | **Clôturée** — 8 livrables dans `06-ux-ui/` |
| Penpot Design Agent | **Mergé** — PR #18 sur `main` |
| REX MCP self-host | **Mergé** — PR #19 sur `main` |
| Penpot self-host local | **Opérationnel** — Docker v2.16, `http://localhost:9001` |
| MCP lecture | **Validé** |
| MCP écriture pages | **Validé** — création / renommage pages |
| Structure pages SFIA | **Créée** — 8 pages dans le fichier Penpot test |
| Référence Penpot Interv360 | **Documentée** — `penpot-project-reference.md` |
| Écrans Interv360 produits | **Aucun** — cycle ouvert, production visuelle à venir |

---

## 4. Périmètre initial

| Action | Description |
|--------|-------------|
| Documenter la référence Penpot | Lien instance, fichier, pages, sources Git — **fait** (`penpot-project-reference.md`) |
| Prioriser les écrans | Ordre de production dans Penpot — **à faire** (`penpot-screen-prioritization.md`) |
| Produire un premier écran pilote | Un écran non critique ou structure de revue — **à faire** |
| Comparer écran vs specs | Tableau écarts Spec Git \| Penpot — **à faire** après pilote |
| Documenter les écarts | Synthèse dans Git — **à faire** en fin de cycle |

---

## 5. Hors périmètre initial

Ce cycle **n'inclut pas** (dans cette phase d'ouverture) :

- design system complet ;
- maquette finale de l'ensemble des 9 écrans ;
- backlog ;
- user stories ;
- tests applicatifs ;
- code ;
- delivery.

---

## 6. Risques / points d'attention

| Risque | Mitigation |
|--------|------------|
| Endpoint MCP avec token local | Token hors Git ; régénérer si compromis |
| Plugin MCP à connecter | Vérifier **MCP connected** avant chaque session agent |
| Modification visuelle non documentée | Résumé Git après chaque action MCP significative |
| Absence de revue humaine | Revue obligatoire avant clôture design ou export officiel |
| Confusion prototype / source fonctionnelle | Git = vérité fonctionnelle ; Penpot = production visuelle |
| Renommage fichier Penpot | Manuel — API MCP ne permet pas `file.name` en écriture |
| Inventer statuts ou parcours | Interdit — alignement strict `screen-inventory.md` et ADR |

---

## 7. Critères de sortie du cycle

Le cycle Design V2 Interv360 sera **clôurable** lorsque :

- [x] référence Penpot documentée ;
- [ ] priorisation des écrans produite ;
- [ ] au moins **un écran pilote** produit dans Penpot ;
- [ ] **revue humaine** effectuée sur l'écran pilote ;
- [ ] **comparaison** avec specs Git documentée ;
- [ ] synthèse et clôture du cycle (`design-v2-summary.md`, `design-v2-cycle-closure.md`).

---

## 8. Prochaine action

Créer :

**[`penpot-screen-prioritization.md`](penpot-screen-prioritization.md)**

Objectif : définir l'ordre de production des 9 écrans MVP et identifier l'**écran pilote** recommandé pour la première session MCP de maquette.

---

*Ouverture cycle Interv360 — Design V2 Penpot — Draft.*

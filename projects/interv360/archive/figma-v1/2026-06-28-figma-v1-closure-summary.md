# Interv360 — Clôture jalon Figma V1

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Jalon** : Figma V1  
**Statut** : Closed — V1 validated with minor adjustments  
**Type** : Synthèse de clôture jalon  
**Source** : production Figma V1 + revue V1 + revue simulée multi-rôles  
**Objet** : clôturer le jalon Figma V1 et préparer la suite de gouvernance

---

## 1. Objectif du document

Ce document **clôture le jalon Figma V1** Interv360.

Il **synthétise** les décisions et capitalisations réalisées depuis l'ouverture UX/UI jusqu'à la revue simulée multi-rôles SFIA.

**Ce document ne**

- ne crée pas de nouvelle maquette ;
- ne crée pas de V2 ;
- ne lance pas le delivery ;
- ne produit pas de backlog ;
- ne produit pas de user stories ;
- ne produit pas de code.

---

## 2. Rappel du périmètre Figma V1

| Élément | Détail |
|---------|--------|
| **8 écrans MVP** | Dashboard SAV, liste demandes, fiche demande, planning, intervention mobile, CR mobile, suivi erreurs, vue dirigeant |
| **Cover / context** | `00-cover-context.png` |
| **Validation checklist** | `13-validation-checklist.png` |
| **Archive / explorations** | `99-archive.png` (vide — hors périmètre post-MVP) |
| **Captures** | **11 PNG** versionnées Git (`figma-first-draft-screens/`) |
| **Pages 01–04** | Design principles, Tokens, Components, User flows MVP — **non exportées individuellement** |
| **Direction visuelle** | Enterprise clean |
| **Dashboards** | SAV (opérationnel) et dirigeant (synthétique) **séparés** |
| **Mobile technicien** | Fiche intervention + compte rendu orientés terrain |
| **Signature** | **Optionnelle** — absence non bloquante |
| **Anomalies** | Messages **métier** ; reprise manuelle |
| **Exclusions confirmées** | Pas d'IA, portail client, BI avancée, logs techniques |

**Qualité indicative** : 8,3 / 10 — V1 **présentable**, **non définitive**.

---

## 3. Chronologie du jalon

| Étape | Livrable | Statut |
|-------|----------|--------|
| Ouverture UX/UI / Figma | `ux-ui-figma-opening-note.md` | Done |
| Recherche design | `ux-ui-design-research-and-benchmark.md` | Done |
| Instructions Figma | `figma-design-instructions.md` | Done |
| Prompt de production | `figma-production-prompt.md` | Done |
| Production Figma | Maquette V1 (hors repo — captures seules versionnées) | Done |
| Captures versionnées | `figma-first-draft-screens/` (11 PNG) | Done |
| Revue premier jet | `figma-first-draft-review.md` | Done |
| Préparation revue | `figma-review-session-preparation.md` | Done |
| Template CR | `figma-review-session-minutes-template.md` | Done |
| Enrichissement méthodes rôle | `role-methods-enrichment-after-figma-v1.md` + `docs/methods/roles/` §14 | Done |
| Revue simulée multi-rôles | `figma-review-session-minutes.md` | Done |
| Clôture jalon | `figma-v1-closure-summary.md` (ce document) | **Closed** |

---

## 4. Décision de clôture

**Le jalon Figma V1 est clôturé** avec la décision suivante :

> **Figma V1 validée comme présentable avec ajustements mineurs.**

| Paramètre | Valeur |
|-----------|--------|
| **Définitive** | Non — V1 non définitive |
| **V2** | Différée (crédits Figma épuisés ; ajustements documentés) |
| **Delivery** | Non autorisé |
| **Backlog / user stories / code** | Bloqués |
| **Qualité indicative** | 8,3 / 10 |
| **Revue simulée** | Validé avec ajustements mineurs (`figma-review-session-minutes.md`) |

Les **ajustements restants** sont **documentés** et **non bloquants** pour clôturer le jalon.

---

## 5. Éléments validés

| Élément | Statut | Commentaire |
|---------|--------|-------------|
| Périmètre MVP | Validé | 8 écrans cœur + garde-fous |
| 8 écrans MVP | Validé | Captures 05–12 |
| Captures versionnées | Validé | 11 PNG Git |
| Direction UX | Validé | Enterprise clean |
| Dashboard SAV | Validé | Actionnable ; distinct dirigeant |
| Vue dirigeant | Validé | Synthétique ; pas de BI avancée |
| Mobile technicien | Validé | Terrain ; CR signature optionnelle |
| Signature optionnelle | Validé | ADR-007 ; clôture sans blocage |
| Anomalies métier | Validé | Reprise manuelle ; pas de log brut |
| Garde-fous ADR P1/P2 | Validé | Aucun écart bloquant en revue simulée |
| Absence IA | Validé | ADR-CAND-009 |
| Absence portail client | Validé | ADR-006 |
| Absence logs techniques | Validé | ADR P1/P2 |
| Absence BI avancée | Validé | ADR-008 |
| Absence signature juridique complète | Validé | ADR-007 |
| Revue simulée multi-rôles | Validé | 7 rôles SFIA (QA candidat) |
| Enrichissement méthodes rôle | Validé | Avant revue simulée |

---

## 6. Ajustements différés

*Source : `figma-first-draft-review.md`, `figma-review-session-minutes.md` — ne bloquent pas la clôture.*

| Priorité | Ajustement | Cible | Statut |
|----------|------------|-------|--------|
| P1 | Barres verticales KPI dashboard SAV | V2 / polish | Différé |
| P1 | Wording onglets / actions secondaires (fiche demande, CR) | V2 / revue wording | Différé |
| P2 | Carte noire « Indice opérationnel » vue dirigeant | V2 / polish | Différé |
| P2 | Planning temporel | V2 si disponible | Optionnel |
| P2 | Hiérarchie mobile (intervention, CR) | V2 | Optionnel |
| P3 | Graphs dashboard / dirigeant | V2 | Optionnel |
| P3 | États empty / loading / error | V2 | Optionnel |
| P3 | Export pages 01–04 (structure Figma) | V2 | Optionnel |

---

## 7. Points reportés hors MVP

| Point | Motif | Cible |
|-------|-------|-------|
| IA / scoring / recommandations | ADR-CAND-009 — hors MVP | post-MVP |
| Portail client | ADR-006 — hors MVP | post-MVP |
| BI avancée / drill-down analytique | ADR-008 — hors MVP | post-MVP |
| Signature électronique juridiquement complète | ADR-007 — hors MVP | post-MVP |
| Conservation réelle / archivage / purge | ADR-005 — hors MVP | post-MVP |
| Logs techniques / SIEM | ADR P1/P2 — hors périmètre démonstrateur | post-MVP ou hors scope |

---

## 8. Décision delivery

**À la clôture du jalon Figma V1**

| Transition | Autorisée |
|------------|-----------|
| Passage delivery | **Non** |
| Backlog | **Non** |
| User stories | **Non** |
| Code | **Non** |

**Justification**

La maquette V1 est validée comme **support de revue et de capitalisation**, mais le projet **n'a pas encore ouvert de jalon delivery**. Une **décision explicite** sera nécessaire pour passer à une phase suivante.

---

## 9. Valeur projet

| Valeur | Commentaire |
|--------|-------------|
| Support visuel tangible | 11 captures ; démonstrateur crédible |
| Compréhension MVP | Parcours SAV lisible pour parties prenantes |
| Validation transverse simulée | PO, UX, RSSI, Architecte, CP, BA, QA candidat |
| Garde-fous clarifiés | ADR P1/P2 confirmés sur maquette |
| Décisions traçables | Chaîne documentaire Git complète |
| V2 différée mais cadrée | P1–P3 documentés ; conditions V2 explicites |
| Delivery bloqué proprement | Pas de glissement vers backlog ou code |

---

## 10. Valeur SFIA

| Élément capitalisé | Valeur SFIA |
|--------------------|-------------|
| Méthode de production Figma | Séquence ouverture → instructions → prompt → production |
| Prompt de production Figma | `figma-production-prompt.md` — réutilisable |
| Revue premier jet | `figma-first-draft-review.md` — grille qualité V1 |
| Préparation revue transverse | `figma-review-session-preparation.md` |
| Template CR | `figma-review-session-minutes-template.md` |
| Revue simulée multi-rôles | `figma-review-session-minutes.md` — sans participants réels |
| Enrichissement méthodes rôle | `role-methods-enrichment-after-figma-v1.md` + §14 méthodes |
| Distinction V1 présentable / définitive / delivery | Standard méthodologique |
| Rôle QA / Testeur candidat | Intérêt confirmé ; extraction future |
| Gestion contrainte crédits outil | V2 différée documentée |

---

## 11. Impacts méthodes et standards

- **Méthodes rôle enrichies** — bloc §14 Figma V1 dans PO, UX, RSSI, Architecte, Chef de projet, BA.
- **QA / Testeur** — candidat à formaliser plus tard (`qa-tester-method.md` absent).
- **Standard revue simulée multi-rôles** — candidat (validé sur Interv360).
- **Standard Figma V1 présentable non définitive** — candidat.
- **Checklist garde-fous Figma post-ADR** — candidate (utilisée en revue simulée).
- **Template CR revue design** — candidat (`figma-review-session-minutes-template.md`).

---

## 12. Prochaines options

*Options listées — **aucune déclenchée automatiquement** par cette clôture.*

| Option | Description | Statut |
|--------|-------------|--------|
| Sync Notion jalon Figma V1 | Tracer clôture en gouvernance | Recommandée — à préparer |
| Capitalisation prompts / catalogue | Retour d'usage Figma V1 | À planifier |
| Création standard revue simulée | Formaliser méthode multi-rôles | Candidat |
| Extraction méthode QA / Testeur | Suite revue simulée | Candidat — futur |
| Préparation jalon delivery | Ouverture phase suivante | Non ouvert — décision explicite requise |
| V2 Figma | Polish P1–P3 si outil / crédits | Différée |

---

## 13. Décision recommandée

**Recommandation** : préparer une **synchronisation Notion de gouvernance** pour tracer la **clôture du jalon Figma V1**, **sans ouvrir encore le delivery**.

La sync Notion devra rester **informative et gouvernance** :

- pas de publication de backlog ;
- pas de user stories ;
- pas de décision delivery implicite.

---

## 14. Conclusion

Le **jalon Figma V1 Interv360 est clôturé avec succès**.

La maquette est **validée comme présentable avec ajustements mineurs**, **non définitive**, et constitue une **base solide de capitalisation SFIA**. Les **garde-fous MVP** et **ADR P1/P2** sont respectés. Les ajustements restants sont **différés vers une éventuelle V2**. Le **delivery reste bloqué** tant qu'un jalon dédié n'est pas explicitement ouvert.

**Prochaine action recommandée** : préparation d'une **sync Notion de gouvernance** pour la clôture Figma V1.

---

*Clôture jalon Figma V1 — projet pilote Interv360 — gouvernance SFIA.*

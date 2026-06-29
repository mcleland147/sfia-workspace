# Interv360 — Revue Figma — Liste demandes Design V2

**Type** : Revue design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Cycle** : Reprise Figma Design V2  
**Écran** : Liste demandes (E2)  
**Frame revue** : `Liste demandes — Design V2`  
**Outil** : Figma  
**Statut** : Suffisant pour passage delivery  
**Branche** : `design/interv360-figma-reprise-path`  
**Documents associés** : [`figma-reprise-path.md`](figma-reprise-path.md), [`figma-first-screen-reprise-instructions.md`](figma-first-screen-reprise-instructions.md), [`figma-fresh-start-instructions.md`](figma-fresh-start-instructions.md)

---

## 1. Objectif

Tracer la **revue courte** de la première maquette Figma Design V2 : **Liste demandes — Design V2**.

L'objectif n'est **pas** de rechercher une perfection graphique, mais de vérifier que la maquette est suffisamment **claire**, **présentable** et **alignée fonctionnellement** pour permettre la suite du projet.

Cette revue clôt le cycle pilote Figma reprise (fresh start, nouveau compte) et acte le passage vers la **préparation delivery**.

---

## 2. Résultat observé

| Élément | Évaluation |
|---------|------------|
| Qualité visuelle | **Suffisante / présentable** |
| Comparaison Penpot | **Nettement supérieure** à la frame Penpot V2 visual standard |
| Lisibilité tableau | **Correcte** — colonnes identifiables, densité professionnelle |
| Navigation | **Claire** — sidebar avec état actif |
| Filtres / recherche | **Présents** — Statut, Canal, Période + champ recherche |
| CTA | **Visible** — `Nouvelle demande` en évidence |
| Badges statuts | **Présents** — pills À qualifier, Qualifiée, Planifiée |
| Indicateurs | **Distincts** — Retard et Anomalie d'intégration séparés des statuts |
| Message métier | **Présent** — rappel rôle de la liste |
| Niveau global | **Acceptable pour avancer** |

**Contexte :** maquette produite dans un nouveau fichier Figma (`Interv360 — Design V2`), sans accès au fichier historique — reconstruction depuis captures PNG V1 et specs Git ([`figma-fresh-start-instructions.md`](figma-fresh-start-instructions.md)).

---

## 3. Validation fonctionnelle rapide

| Élément attendu | Statut |
|-----------------|:------:|
| Titre `Demandes SAV` | ✅ |
| CTA `Nouvelle demande` | ✅ |
| Recherche `Rechercher une demande` | ✅ |
| Filtres Statut / Canal / Période | ✅ |
| Colonnes principales (Référence, Client, Canal, Priorité, Statut, Date, Affectation, Indicateurs, Action) | ✅ |
| Statuts À qualifier / Qualifiée / Planifiée | ✅ |
| Indicateurs Retard / Anomalie d'intégration | ✅ |
| Action `Ouvrir` | ✅ |
| Message métier (liste = point d'accès) | ✅ |

**Référence specs :** `screen-functional-specs.md` §6, `screen-inventory.md` §6.

---

## 4. Garde-fous validés

| Garde-fou | Statut |
|-----------|:------:|
| Aucun nouveau statut métier | ✅ |
| STAT-07 représenté comme **indicateur** Retard | ✅ |
| STAT-08 représenté comme **indicateur** Anomalie d'intégration | ✅ |
| Liste ≠ source de vérité détaillée | ✅ |
| Pas de transformation en dashboard autonome | ✅ |
| Pas de KPI bloquant | ✅ |
| Interv360 = source de vérité locale | ✅ |
| CRM simulé ≠ source de vérité | ✅ |

**Note — compteurs en haut de page :** les compteurs affichés (ex. total demandes, à qualifier, en retard) sont acceptés comme **compteurs de contexte de la liste**, et **non** comme dashboard autonome. Ils renforcent la lecture opérationnelle sans remplacer le dashboard SAV dédié (`05-dashboard-sav.png`).

---

## 5. Ajustements non bloquants

Les points suivants peuvent être traités ultérieurement — **aucun ne bloque** le passage vers la suite :

| Ajustement | Détail |
|------------|--------|
| Harmoniser certains libellés | Alignement fin avec `status-mapping.md` si écart mineur |
| Clarifier `Anomalie intégr.` | Libellé court acceptable ; extension possible en revue métier |
| Renforcer le message métier | Si une revue métier le demande — formulation actuelle suffisante |
| Stabiliser les composants locaux | Progression sur page `06 — Components` lors des écrans suivants |

**Précision :** aucun cycle de retouche Figma n'est relancé à ce stade.

---

## 6. Décision

**Liste demandes — Design V2** est **acceptée** comme base design suffisante.

| Paramètre | Valeur |
|-----------|--------|
| **Décision** | **Passage vers la préparation delivery autorisé** |
| **Perfection graphique** | Non recherchée |
| **Cycles retouche Figma** | Non relancés |

**Justification :**

- la qualité visuelle est **suffisante** pour démonstration et compréhension métier ;
- les **garde-fous fonctionnels** sont respectés ;
- la maquette permet de **comprendre l'écran** et ses interactions principales ;
- la **valeur du projet** est maintenant dans la structuration delivery, pas dans la retouche graphique.

---

## 7. Capture locale

| Élément | Détail |
|---------|--------|
| **Chemin** | `projects/interv360/03-design/exports/figma-liste-demandes-design-v2.png` |
| **Statut** | **Capture locale non versionnée** |
| **Commit Git** | Non — capture non commitée à ce stade |

La capture sert de trace de revue locale. Toute décision de versionnement ultérieur reste explicite.

---

## 8. Suite recommandée

1. **Clôturer** la branche Figma reprise après **PR unique** (`design/interv360-figma-reprise-path` → `main`).
2. **Ouvrir** un nouveau cycle **delivery**.
3. **Produire** les livrables nécessaires au passage delivery :
   - périmètre MVP ;
   - lots fonctionnels ;
   - backlog macro ;
   - priorités ;
   - critères de réalisation ;
   - stratégie de découpage.

**Documents cycle Figma reprise à intégrer dans la PR :** `figma-reprise-path.md`, `figma-first-screen-reprise-instructions.md`, `figma-fresh-start-instructions.md`, `figma-first-screen-review.md` (ce document).

---

## 9. Hors périmètre

Cette revue **ne couvre pas** et **n'autorise pas** à ce stade :

- retouches visuelles fines sur la frame pilote ;
- production complète des 8 autres écrans Figma ;
- design system complet ;
- backlog détaillé, user stories détaillées ;
- tests, code, API, SQL, BPMN.

---

*Revue Figma Interv360 — Liste demandes Design V2 — Suffisant pour passage delivery.*

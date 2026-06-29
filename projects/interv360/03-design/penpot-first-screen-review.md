# Interv360 — Revue première frame Penpot — Liste demandes

**Type** : Revue design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Outil** : Penpot self-host + Cursor MCP  
**Frame revue** : `Liste demandes — V1 pilote`  
**Statut** : Draft — **non validée visuellement**  
**Branche** : `design/interv360-penpot-first-screen-cycle`  
**Documents associés** : [`penpot-first-screen-mcp-instructions.md`](penpot-first-screen-mcp-instructions.md), [`penpot-application-frame-template.md`](penpot-application-frame-template.md)

---

## 1. Objectif

Tracer la **revue** de la frame `Liste demandes — V1 pilote` créée dans Penpot via MCP.

Cette frame constitue une **preuve d'écriture MCP** (chaîne specs Git → Penpot opérationnelle), mais **pas une maquette exploitable** en l'état pour validation métier ou démonstration.

---

## 2. Résultat MCP observé

| Élément | Valeur |
|---------|--------|
| Fichier Penpot | `Nouveau fichier 1` (nom cible : `Interv360 — Design V2`) |
| Page | `03 — Screens` |
| Frame | `Liste demandes — V1 pilote` |
| Dimensions | 1440 × 900 |
| Export | **Non** |
| Autres pages modifiées | **Non** |
| Fidélité attendue | Low / mid fidelity |
| Résultat visuel | **Insuffisant** pour une V1 exploitable |

---

## 3. Éléments créés

| Zone | Présent | Remarque |
|------|:-------:|----------|
| Header applicatif | ✅ | Interv360 + Responsable SAV |
| Navigation principale | ✅ | Demandes, Planning, Dashboard |
| Titre page | ✅ | `Demandes SAV` |
| Bouton `Nouvelle demande` | ✅ | CTA primaire |
| Filtres | ✅ | Statut, Canal, Période |
| Recherche | ✅ | `Rechercher une demande` |
| Tableau demandes | ✅ | En-tête + 6 lignes fictives |
| Badges statuts | ✅ | À qualifier, Qualifiée, Planifiée |
| Indicateurs | ✅ | Retard (STAT-07), Anomalie d'intégration (STAT-08) |
| Message métier | ✅ | Rappel liste non source de vérité |

---

## 4. Garde-fous respectés

| Garde-fou | Statut |
|-----------|:------:|
| Une seule frame créée | ✅ |
| Pas de nouveaux statuts | ✅ |
| STAT-07 / STAT-08 indicateurs distincts | ✅ |
| Pas de dashboard / KPI | ✅ |
| Pas d'export | ✅ |
| Autres pages non modifiées | ✅ |
| Rien supprimé | ✅ |

---

## 5. Limites visuelles observées

| Limite | Impact |
|--------|--------|
| Contenu trop petit | Illisible à zoom normal ; frame perçue comme miniature |
| Layout non maîtrisé | Zones flex sans coordonnées explicites ; proportions instables |
| Tableau peu lisible | Colonnes compressées ; hiérarchie visuelle faible |
| Colonnes approximatives | Largeurs non calibrées ; alignements irréguliers |
| Éléments orphelins hors frame | 4 éléments à la racine de `03 — Screens` (tentatives MCP interrompues) |
| Font weight non supporté | Poids 600 rejeté par la font Penpot — texte uniforme |
| Composants non externalisés | Rien dans `06 — Components` ; pas de réutilisation |
| Colonne site/adresse absente | Spec `screen-functional-specs.md` §6.5 — simplification excessive |

---

## 6. Décision de revue

**Statut :** V1 pilote **créée techniquement**, mais **non validée visuellement**.

**Décision :** Créer un **gabarit layout SFIA** (`penpot-application-frame-template.md`) avant de produire une **V1.1** avec contraintes de coordonnées, tailles et lisibilité explicites.

Ne pas corriger la V1 au hasard dans Penpot.

---

## 7. Ajustements nécessaires

| # | Action | Document / suite |
|---|--------|------------------|
| 1 | Créer un template frame applicatif 1440 × 900 | [`penpot-application-frame-template.md`](penpot-application-frame-template.md) |
| 2 | Définir coordonnées, zones, espacements et tailles minimales | Template §3–§5 |
| 3 | Préparer un tableau lisible (colonnes, hauteurs de ligne) | Template §5 |
| 4 | Nettoyer ou archiver les orphelins dans une session contrôlée | Session dédiée, instruction explicite |
| 5 | Recréer une frame `Liste demandes — V1.1 pilote` | [`penpot-first-screen-v11-instructions.md`](penpot-first-screen-v11-instructions.md) |
| 6 | Documenter la comparaison V1 / V1.1 | À produire après session V1.1 |

---

## 8. Prochaine action

Exécuter la session MCP **V1.1** selon [`penpot-first-screen-v11-instructions.md`](penpot-first-screen-v11-instructions.md), en appliquant strictement le template layout.

---

*Revue Interv360 — Première frame Penpot — Draft.*

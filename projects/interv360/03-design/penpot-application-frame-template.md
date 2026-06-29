# Interv360 — Template frame applicative Penpot

**Type** : Gabarit layout design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Outil cible** : Penpot self-host + Cursor MCP  
**Statut** : Draft  
**Branche** : `design/interv360-penpot-first-screen-cycle`  
**Documents associés** : [`penpot-first-screen-review.md`](penpot-first-screen-review.md), [`penpot-first-screen-v11-instructions.md`](penpot-first-screen-v11-instructions.md)

---

## 1. Objectif

Définir un **gabarit réutilisable** pour produire des écrans applicatifs Interv360 dans Penpot via MCP.

Ce template évite les rendus **trop petits**, **mal positionnés** ou **illisibles** observés sur la V1 pilote (`Liste demandes — V1 pilote`).

**Approche retenue pour V1.1 :** navigation **horizontale** (plus simple qu'une sidebar pour le pilote).

---

## 2. Format cible

| Élément | Valeur |
|---------|--------|
| Frame | **1440 × 900** px |
| Type | Desktop applicatif |
| Fidélité | Low / mid fidelity |
| Page cible par défaut | `03 — Screens` |
| Grille | Zones fixes avec coordonnées et espacements explicites |
| Position frame sur canvas | x ≥ 80, y ≥ 80 — ne pas réduire la frame dans un coin miniature |

---

## 3. Zones recommandées

Coordonnées **relatives à la frame** (origine haut-gauche de la frame, 0,0).

| Zone | X | Y | W | H | Usage |
|------|---|---|---|---|-------|
| Header global | 0 | 0 | 1440 | 64 | Logo / nom app + contexte utilisateur |
| Navigation horizontale | 0 | 64 | 1440 | 48 | Liens : Demandes, Planning, Dashboard |
| Zone contenu (fond) | 0 | 112 | 1440 | 788 | Fond contenu principal `#F3F4F6` ou équivalent |
| Titre page | 24 | 128 | 600 | 40 | Titre H1 écran |
| Action primaire | 1236 | 128 | 180 | 40 | Bouton CTA (aligné à droite) |
| Filtres | 24 | 184 | 1392 | 64 | Statut, Canal, Période + recherche |
| Tableau | 24 | 264 | 1392 | 420 | Tableau principal |
| Message métier | 24 | 700 | 1392 | 48 | Alerte / rappel fonctionnel discret |

**Note :** la navigation latérale (x=0, w=220) est **documentée mais non retenue** pour V1.1 — préférer la ligne horizontale ci-dessus.

---

## 4. Règles de lisibilité

| Règle | Valeur minimale |
|-------|-----------------|
| Titre page | **24** px |
| Texte tableau (cellules) | **13** ou **14** px |
| Texte header / nav | **14** px |
| Hauteur ligne tableau | **48** px minimum (recommandé **52** px) |
| Hauteur en-tête tableau | **44** px |
| Badges lisibles | **90 × 28** px minimum |
| Marges internes zones | **16** px minimum |
| Espacement vertical entre zones | **16** px minimum |
| Frame sur canvas | Occuper la zone prévue — **ne pas** réduire visuellement la frame dans une zone trop petite |

**Font Penpot :** ne pas utiliser de `fontWeight` non supporté (ex. `600`) — rester sur le poids par défaut ou `bold` si disponible.

---

## 5. Template tableau

| Élément | Recommandation |
|---------|----------------|
| Largeur tableau | **1392** px (marges 24 px de chaque côté dans la frame) |
| Lignes de données | **6** lignes |
| En-tête tableau | Hauteur **44** px, fond `#F9FAFB` |
| Ligne données | Hauteur **52** px, alternance `#FFFFFF` / `#FAFAFA` |
| Colonnes | Référence, Client, Canal, Priorité, Statut, Date, Affectation, Indicateurs, Action |
| Largeurs colonnes indicatives | 120, 160, 80, 80, 120, 100, 120, 140, 80 (ajuster si besoin, total ≈ 1000+ flexible) |
| Action `Ouvrir` | Alignée à droite de la colonne Action, couleur `#0070E4` |

---

## 6. Règles badges

| Type | Règle |
|------|-------|
| Badge statut métier | Colonne **Statut** uniquement — STAT-01 à STAT-03 minimum |
| Badge retard (STAT-07) | Colonne **Indicateurs** — libellé `Retard`, fond ambre `#FEF3C7` |
| Badge anomalie (STAT-08) | Colonne **Indicateurs** — libellé `Anomalie d'intégration`, fond rose `#FEE2E2` |
| Interdit | Transformer STAT-07 ou STAT-08 en statut principal de ligne |
| Libellés | Courts mais lisibles — wording métier FR |

Couleurs statuts indicatives (V1.1) :

| Statut | Fond badge |
|--------|------------|
| À qualifier (STAT-01) | `#FEF3C7` |
| Qualifiée (STAT-02) | `#DBEAFE` |
| Planifiée (STAT-03) | `#D1FAE5` |

---

## 7. Règles MCP

| Règle | Application |
|-------|-------------|
| Frame complète | Toujours créer une **frame board** 1440 × 900 nommée explicitement |
| Pas d'orphelins | **Tous** les éléments doivent être **enfants** de la frame — rien à la racine de la page hors frame |
| Groupes par zone | Nommer les groupes : `Header global`, `Navigation horizontale`, `Filtres`, `Tableau demandes`, etc. |
| Coordonnées explicites | Positionner les zones avec x, y, width, height — pas uniquement flex sans contraintes |
| Autres pages | Ne **pas** modifier les pages hors `03 — Screens` |
| Suppression | Ne **pas** supprimer sans instruction explicite |
| V1 existante | Ne **pas** modifier `Liste demandes — V1 pilote` lors de la création V1.1 |
| Export | Ne **pas** exporter automatiquement |
| Secrets | Ne **jamais** inclure de token MCP dans les prompts versionnés |

---

## 8. Application à Liste demandes — V1.1 pilote

La **V1.1** doit appliquer ce template **strictement**.

| Élément | Valeur |
|---------|--------|
| Frame cible | `Liste demandes — V1.1 pilote` |
| Page | `03 — Screens` |
| Dimensions | 1440 × 900 |
| Navigation | Horizontale (§3) |
| Tableau | 6 lignes, colonnes §5 |
| Contenu métier | Selon `screen-functional-specs.md` §6 et [`penpot-first-screen-v11-instructions.md`](penpot-first-screen-v11-instructions.md) |

La V1 (`Liste demandes — V1 pilote`) reste en place comme **référence historique** de la première preuve MCP — comparaison V1 / V1.1 après session.

---

*Template frame applicative Interv360 — Penpot — Draft.*

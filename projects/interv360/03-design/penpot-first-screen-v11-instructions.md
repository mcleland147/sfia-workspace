# Interv360 — Instructions MCP — Liste demandes V1.1

**Type** : Instructions MCP design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Outil cible** : Penpot self-host  
**Écran** : Liste demandes (E2)  
**Frame cible** : `Liste demandes — V1.1 pilote`  
**Page Penpot** : `03 — Screens`  
**Statut** : Draft  
**Branche** : `design/interv360-penpot-first-screen-cycle`  
**Documents associés** : [`penpot-first-screen-review.md`](penpot-first-screen-review.md), [`penpot-application-frame-template.md`](penpot-application-frame-template.md)

---

## 1. Objectif

Préparer une **nouvelle session MCP** pour créer la frame `Liste demandes — V1.1 pilote`, en appliquant le **template layout SFIA** avec coordonnées explicites et règles de lisibilité.

---

## 2. Pourquoi une V1.1

| Constat V1 | Conséquence |
|------------|-------------|
| V1 **techniquement créée** via MCP | Preuve d'écriture validée |
| V1 **non satisfaisante visuellement** | Non exploitable pour revue métier |
| Layout sans coordonnées explicites | Contenu trop petit, zones instables |
| Tableau flex non calibré | Colonnes illisibles |
| Éléments orphelins hors frame | Canvas pollué sur `03 — Screens` |

La V1.1 corrige l'**exécution layout**, pas le périmètre fonctionnel.

Voir : [`penpot-first-screen-review.md`](penpot-first-screen-review.md) §5–§6.

---

## 3. Préconditions

| # | Précondition |
|---|--------------|
| 1 | Fichier Penpot ouvert dans le navigateur |
| 2 | Plugin MCP **connecté** |
| 3 | Page `03 — Screens` présente |
| 4 | Frame V1 `Liste demandes — V1 pilote` existante (non modifiée) |
| 5 | Template layout relu : [`penpot-application-frame-template.md`](penpot-application-frame-template.md) |
| 6 | Test lecture seule réussi |
| 7 | Aucun token MCP dans le prompt |

**Test lecture seule :**

```
Inspecte le fichier Penpot actuellement ouvert. Liste les pages, confirme 03 — Screens, liste les frames à la racine de cette page. Ne modifie rien.
```

---

## 4. Action autorisée

| Autorisé | Interdit |
|----------|----------|
| Créer **une nouvelle** frame `Liste demandes — V1.1 pilote` | Modifier la V1 |
| Placer tous les éléments **dans** la frame | Supprimer les orphelins (session séparée) |
| Appliquer le template §3 du gabarit | Exporter PNG / SVG / PDF |
| 6 lignes de données fictives | Créer d'autres écrans |
| | Modifier les autres pages |

---

## 5. Contraintes layout obligatoires

Reprise du template [`penpot-application-frame-template.md`](penpot-application-frame-template.md) :

| Zone | X | Y | W | H |
|------|---|---|---|---|
| Frame | — | — | **1440** | **900** |
| Header global | 0 | 0 | 1440 | 64 |
| Navigation horizontale | 0 | 64 | 1440 | 48 |
| Titre page | 24 | 128 | 600 | 40 |
| Action primaire | 1236 | 128 | 180 | 40 |
| Filtres | 24 | 184 | 1392 | 64 |
| Tableau | 24 | 264 | 1392 | 420 |
| Message métier | 24 | 700 | 1392 | 48 |

**Lisibilité :** titre 24 px ; texte tableau 13–14 px ; ligne tableau 52 px ; badges min 90 × 28 px.

**Contenu métier :** identique à V1 (wording §9 de `penpot-first-screen-mcp-instructions.md`) — 6 lignes, STAT-01/02/03, indicateurs Retard / Anomalie d'intégration.

---

## 6. Prompt MCP V1.1 prêt à copier

```
Tu es connecté à Penpot via MCP.

Objectif : créer la frame Liste demandes — V1.1 pilote sur la page 03 — Screens, en appliquant strictement le template layout SFIA Interv360.

Avant toute modification :
1. Lis :
   - projects/interv360/03-design/penpot-application-frame-template.md
   - projects/interv360/03-design/penpot-first-screen-review.md
   - projects/interv360/03-design/penpot-first-screen-mcp-instructions.md (§8-9)
   - projects/interv360/06-ux-ui/screen-functional-specs.md (§6 Liste demandes)
2. Inspecte le fichier Penpot ouvert. Confirme 03 — Screens. Ne modifie rien si le plugin n'est pas connecté.

Action autorisée :
Créer UNIQUEMENT une nouvelle frame nommée :
`Liste demandes — V1.1 pilote`
Dimensions : 1440 × 900
Position canvas : x=80, y=80 minimum
Page : 03 — Screens

IMPORTANT : tous les éléments doivent être ENFANTS de cette frame. Aucun élément orphelin à la racine de la page.

Zones avec coordonnées relatives à la frame (x, y, w, h) :
- Header global : 0, 0, 1440, 64 — Interv360 + Responsable SAV
- Navigation horizontale : 0, 64, 1440, 48 — Demandes (actif), Planning, Dashboard
- Titre : 24, 128, 600, 40 — texte "Demandes SAV" taille 24
- Bouton primaire : 1236, 128, 180, 40 — "Nouvelle demande"
- Filtres : 24, 184, 1392, 64 — Statut, Canal, Période + "Rechercher une demande"
- Tableau : 24, 264, 1392, 420 — en-tête 44px + 6 lignes de 52px
- Message métier : 24, 700, 1392, 48 — rappel liste non source de vérité

Tableau — colonnes :
Référence, Client, Canal, Priorité, Statut, Date, Affectation, Indicateurs, Action

6 lignes fictives avec :
- statuts : À qualifier, Qualifiée, Planifiée (badges couleur)
- indicateur "Retard" (STAT-07) distinct dans colonne Indicateurs
- indicateur "Anomalie d'intégration" (STAT-08) distinct dans colonne Indicateurs
- action "Ouvrir" alignée à droite

Texte tableau minimum 13px. Badges minimum 90×28px.

Garde-fous :
- ne modifie PAS la frame Liste demandes — V1 pilote
- ne supprime rien (y compris orphelins existants)
- ne crée aucun nouveau statut
- ne transforme pas STAT-07/STAT-08 en statuts métier
- ne crée pas de dashboard ni KPI
- ne modifie pas les autres pages
- n'exporte rien
- ne utilise pas fontWeight non supporté

Après action :
- résume les éléments créés et leurs dimensions
- confirme qu'aucun élément n'est hors frame
- confirme qu'aucune autre page n'a été modifiée
- liste les écarts vs template si présents
```

---

## 7. Critères de revue V1.1

| # | Critère | Validé |
|---|---------|:------:|
| 1 | Frame `Liste demandes — V1.1 pilote` sur `03 — Screens` | ☐ |
| 2 | Taille **1440 × 900** | ☐ |
| 3 | Contenu lisible à zoom normal | ☐ |
| 4 | **Aucun** élément hors frame (orphelins) | ☐ |
| 5 | Tableau structuré avec en-tête | ☐ |
| 6 | **6** lignes visibles | ☐ |
| 7 | Badges statuts lisibles (min 90 × 28) | ☐ |
| 8 | STAT-07 `Retard` distinct de la colonne Statut | ☐ |
| 9 | STAT-08 `Anomalie d'intégration` distinct | ☐ |
| 10 | Message métier présent | ☐ |
| 11 | Aucune autre page modifiée | ☐ |
| 12 | Aucun export généré | ☐ |
| 13 | V1 pilote non modifiée | ☐ |

---

## 8. Suite après V1.1

| Action | Document |
|--------|----------|
| Comparaison V1 / V1.1 | Section à ajouter dans `penpot-first-screen-review.md` ou nouveau fichier |
| Nettoyage orphelins | Session dédiée avec instruction explicite de suppression |
| Externalisation composants | Page `06 — Components` — cycle ultérieur |
| Écran suivant | Fiche demande SAV — [`penpot-screen-prioritization.md`](penpot-screen-prioritization.md) Vague 1 |

---

*Instructions MCP Interv360 — Liste demandes V1.1 — Draft.*

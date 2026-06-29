# Interv360 — Instructions MCP — Liste demandes V2 visual standard

**Type** : Instructions MCP design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Outil cible** : Penpot self-host  
**Écran** : Liste demandes (E2)  
**Frame cible** : `Liste demandes — V2 visual standard`  
**Page Penpot** : `03 — Screens`  
**Référence principale** : [`figma-first-draft-screens/06-liste-demandes.png`](../02-architecture/figma-first-draft-screens/06-liste-demandes.png)  
**Export attendu** : PNG (V2 uniquement)  
**Statut** : Draft  
**Branche** : `design/interv360-penpot-first-screen-cycle`  
**Documents associés** : [`penpot-visual-quality-benchmark.md`](penpot-visual-quality-benchmark.md), [`penpot-first-screen-v11-instructions.md`](penpot-first-screen-v11-instructions.md)

---

## 1. Objectif

Préparer la session MCP destinée à produire **`Liste demandes — V2 visual standard`** dans Penpot.

Cette V2 teste la capacité de **Penpot self-host + Cursor MCP** à atteindre un niveau visuel **comparable aux premières maquettes Figma V1** — maquette **présentable**, pas un simple wireframe.

**Livrables de la session MCP :**

1. Frame V2 créée sur `03 — Screens` ;
2. **Export PNG** de la frame V2 uniquement — trace visuelle pour revue et comparaison Figma.

**Git = source fonctionnelle. Figma V1 = référence de niveau visuel. Penpot = production.**

---

## 2. Pourquoi une V2 visual standard

| Étape | Rôle | Limite |
|-------|------|--------|
| **V1 pilote** | Preuve technique MCP | Rendu non exploitable |
| **V1.1 pilote** | Wireframe avancé propre | Structure OK, visuel inférieur à Figma |
| **Benchmark** | [`penpot-visual-quality-benchmark.md`](penpot-visual-quality-benchmark.md) | Penpot **non validé** comme remplaçant Figma |
| **V2 visual standard** | Test montée en qualité visuelle | Décision outillage SFIA |
| **Export PNG** | Trace de revue locale | Comparaison visuelle avec `06-liste-demandes.png` |

**Décision attendue après V2** (voir §14) :

- Penpot = outil maquette SFIA ;
- Penpot = wireframe avancé seulement ;
- Penpot = preuve MCP / documentation visuelle ;
- Penpot = cas simples uniquement.

---

## 3. Références visuelles à consulter

Captures **lecture seule** — ne pas modifier, ne pas recopier mécaniquement.

| Référence | Usage |
|-----------|-------|
| **`06-liste-demandes.png`** | **Référence principale** — structure, tableau, badges, densité, finition |
| `05-dashboard-sav.png` | Niveau de finition surfaces / cartes / hiérarchie |
| `07-fiche-demande-sav.png` | Traitement fiche / détail dossier |
| `08-planning-semaine.png` | Grille / espacements |
| `11-suivi-erreurs-integration.png` | Anomalies / messages métier |
| `12-vue-dirigeant.png` | Pilotage / hiérarchie visuelle |

Chemin base : `projects/interv360/02-architecture/figma-first-draft-screens/`

Les références Figma servent à **atteindre un niveau visuel comparable**, pas à reproduire pixel par pixel (sidebar Figma ≠ obligation Penpot).

---

## 4. Sources fonctionnelles à respecter

| Source | Usage |
|--------|-------|
| [`screen-functional-specs.md`](../06-ux-ui/screen-functional-specs.md) | §6 Liste demandes — colonnes, actions, états |
| [`screen-inventory.md`](../06-ux-ui/screen-inventory.md) | §6 Écran liste — parcours, écarts Figma |
| [`ux-ui-summary.md`](../06-ux-ui/ux-ui-summary.md) | Décisions UX transposées |
| [`penpot-screen-prioritization.md`](penpot-screen-prioritization.md) | Écran pilote, ordre production |
| [`penpot-visual-quality-benchmark.md`](penpot-visual-quality-benchmark.md) | Critères qualité, écarts V1.1, exigences V2 |
| [`penpot-first-screen-review.md`](penpot-first-screen-review.md) | Historique V1 / limites |

**Les specs Git priment** sur les références Figma pour le contenu fonctionnel (statuts, parcours, garde-fous).

---

## 5. Frame cible V2

| Élément | Valeur |
|---------|--------|
| Page | `03 — Screens` |
| Frame | `Liste demandes — V2 visual standard` |
| Dimensions | **1440 × 900** |
| Position canvas recommandée | **x=3120, y=80** (à droite de V1 x=80 et V1.1 x=1600) |
| Base structurelle | V1.1 (périmètre fonctionnel) |
| Niveau cible | **High fidelity raisonnable** |
| Export attendu | **PNG** (frame V2 uniquement) |
| V1 / V1.1 | **Ne pas modifier** |

---

## 6. Standard visuel attendu

Niveau cible : **enterprise clean**, comparable à Figma V1 présentable (qualité indicative 8,3/10 — `figma-v1-closure-summary.md`).

| Dimension | Attendu V2 |
|-----------|------------|
| Navigation | Sidebar simplifiée **ou** navigation horizontale avec **état actif** visible |
| Header | Propre — nom app + contexte utilisateur |
| Card principale | Tableau dans une **surface card** (blanc, radius 8–12 px, ombre légère) |
| Fonds | Gris clair `#F3F4F6` / surfaces blanches `#FFFFFF` |
| Ombres | Légères sur card tableau et éventuellement header |
| Coins arrondis | 6–8 px sur boutons, filtres, card, badges |
| Recherche | Placeholder soigné, bordure, padding confortable |
| Filtres | Boutons / dropdowns stylés (bordure, fond blanc) |
| CTA primaire | `Nouvelle demande` — premium (couleur accent, padding, radius) |
| Badges statuts | **Pills** colorées sémantiques (≥ 90 × 28 px) |
| Indicateurs | Pills distinctes Retard / Anomalie d'intégration |
| Typographie | Hiérarchie : titre 24 px, sous-titre 14 px gris, labels colonnes caps 12 px |
| Espacements | Grille 8/16 px, marges régulières |
| Tableau | Lisible **et** esthétique — en-tête fond `#F9FAFB`, lignes 52 px, séparateurs |
| Palette | Teal accent `#0070E4` ou proche ; sémantique statuts cohérente |
| Impression | **Présentable** en revue métier ou démo |

---

## 7. Contenu fonctionnel à conserver

Identique au périmètre V1.1 — aligné `screen-functional-specs.md` §6 :

| Zone | Contenu |
|------|---------|
| Titre | `Demandes SAV` |
| Sous-titre (recommandé) | Phrase courte type parcours / priorisation (inspirée Figma, sans inventer de règle métier) |
| CTA | `Nouvelle demande` |
| Recherche | `Rechercher une demande` |
| Filtres | Statut, Canal, Période |
| Tableau | **6 lignes** fictives |
| Colonnes | Référence, Client, Canal, Priorité, Statut, Date, Affectation, Indicateurs, Action |
| Statuts métier | À qualifier (STAT-01), Qualifiée (STAT-02), Planifiée (STAT-03) |
| Indicateurs | `Retard` (STAT-07), `Anomalie d'intégration` (STAT-08) — **distincts** de la colonne Statut |
| Action ligne | `Ouvrir` |
| Message métier | La liste est un **point d'accès**, pas la source de vérité — consulter la fiche demande |

---

## 8. Améliorations visuelles obligatoires vs V1.1

| Zone | Amélioration attendue vs V1.1 |
|------|-------------------------------|
| Navigation | État actif visible ; meilleure séparation visuelle |
| Header | Surface blanche, bordure basse, alignements soignés |
| Titre | Hiérarchie renforcée + sous-titre optionnel 14 px gris |
| Filtres | Style bouton/dropdown, pas rectangles plats |
| Recherche | Bordure, padding, placeholder lisible |
| Tableau | **Card** avec ombre ; en-tête travaillé ; séparateurs lignes |
| Badges statuts | Pills colorées, lisibles, sémantiques |
| Indicateurs | Pills distinctes, couleurs ambre / rose |
| CTA | Bouton primaire plus premium (radius, contraste) |
| Message métier | Discret mais lisible sous la card |
| Fond / surfaces | Profondeur visuelle — pas tout plat |

---

## 9. Export PNG attendu

### Objectif

Conserver une **trace visuelle** de la V2 pour revue et comparaison avec `06-liste-demandes.png`.

### Règles

| Règle | Application |
|-------|-------------|
| Frame exportée | **Uniquement** `Liste demandes — V2 visual standard` |
| Format | **PNG** |
| Ne pas exporter | V1, V1.1, autres pages, SVG, PDF |
| Commit PNG | **Ne pas** commiter automatiquement — validation explicite requise |
| Échelle | `scale: 2` recommandé pour lisibilité revue |

### Chemin local recommandé

```
projects/interv360/03-design/exports/penpot-liste-demandes-v2-visual-standard.png
```

Créer le dossier `exports/` **uniquement** lors de l'export réel. Ne pas ajouter le PNG au commit Git sans décision explicite.

### Méthode MCP suggérée

Après création de la frame :

```
export_shape
  shapeId: <id de Liste demandes — V2 visual standard>
  format: png
  mode: shape
```

Ou via API Penpot : `await frame.export({ type: 'png', scale: 2 })`.

Documenter dans le résumé de session le **chemin local** si l'export est enregistré sur disque.

---

## 10. Garde-fous fonctionnels

| Garde-fou | Application |
|-----------|-------------|
| Pas de nouveaux statuts | STAT-01 à STAT-08 uniquement |
| STAT-07 / STAT-08 | Indicateurs distincts — pas statuts métier |
| Pas de dashboard | Pas de KPI, cartes pilotage, tendances |
| Pas de KPI | Liste ≠ vue consolidée |
| Pas de parcours inventé | P1, P9 principaux — alignement specs |
| Clôture locale | Ne pas suggérer blocage sync CRM |
| STAT-08 | Ne pas représenter comme réouverture d'intervention |

---

## 11. Garde-fous MCP

| Garde-fou | Application |
|-----------|-------------|
| Ne pas modifier V1 | `Liste demandes — V1 pilote` intacte |
| Ne pas modifier V1.1 | `Liste demandes — V1.1 pilote` intacte |
| Orphelins historiques | Ne **pas** supprimer dans cette session |
| Autres pages | Ne **pas** modifier |
| Un seul écran | Créer **uniquement** la frame V2 |
| Éléments dans la frame | **Tous** les éléments V2 = enfants de la frame |
| Export | **PNG V2 uniquement** — pas SVG/PDF |
| Design system | Pas de bibliothèque complète — composants dans la frame OK |
| Secrets | Ne **pas** utiliser de token MCP dans le prompt versionné |

---

## 12. Prompt MCP V2 prêt à copier

```
Tu es connecté à Penpot via MCP.

Objectif : créer Liste demandes — V2 visual standard sur la page 03 — Screens,
avec un niveau visuel HIGH FIDELITY RAISONNABLE comparable aux premières maquettes Figma V1,
puis exporter uniquement cette frame en PNG.

Référence visuelle principale (consulter avant création — ne pas recopier mécaniquement) :
projects/interv360/02-architecture/figma-first-draft-screens/06-liste-demandes.png

Références visuelles secondaires (niveau de finition) :
- projects/interv360/02-architecture/figma-first-draft-screens/05-dashboard-sav.png
- projects/interv360/02-architecture/figma-first-draft-screens/07-fiche-demande-sav.png
- projects/interv360/02-architecture/figma-first-draft-screens/08-planning-semaine.png
- projects/interv360/02-architecture/figma-first-draft-screens/11-suivi-erreurs-integration.png
- projects/interv360/02-architecture/figma-first-draft-screens/12-vue-dirigeant.png

Avant toute modification :
1. Lis les sources Git :
   - projects/interv360/03-design/penpot-visual-quality-benchmark.md
   - projects/interv360/03-design/penpot-first-screen-v11-instructions.md
   - projects/interv360/03-design/penpot-application-frame-template.md
   - projects/interv360/06-ux-ui/screen-functional-specs.md (§6 Liste demandes)
   - projects/interv360/06-ux-ui/screen-inventory.md
2. Consulte la capture 06-liste-demandes.png comme référence de niveau visuel.
3. Inspecte le fichier Penpot ouvert. Confirme 03 — Screens, V1 et V1.1 présentes.
4. Ne modifie rien si le plugin MCP n'est pas connecté.

Objectif qualité :
Atteindre un niveau visuel comparable aux premières maquettes Figma V1, sans recopie mécanique.

Action autorisée :
Créer UNIQUEMENT une nouvelle frame :
  Nom : Liste demandes — V2 visual standard
  Page : 03 — Screens
  Dimensions : 1440 × 900
  Position canvas : x=3120, y=80 (minimum)

IMPORTANT : tous les éléments V2 doivent être ENFANTS de cette frame. Aucun orphelin à la racine de la page.

Standard visuel V2 (obligatoire) :
- navigation avec état actif visible (sidebar ou horizontale)
- header propre sur fond blanc
- titre Demandes SAV (24px) + sous-titre discret optionnel (14px gris)
- CTA Nouvelle demande premium (accent #0070E4, radius 6-8px)
- filtres Statut / Canal / Période stylés (boutons ou dropdowns)
- recherche Rechercher une demande (bordure, padding)
- tableau dans une CARD blanche (radius 8-12px, ombre légère)
- en-tête tableau 44px fond #F9FAFB, labels colonnes en caps
- 6 lignes de 52px avec alternance subtile
- colonnes : Référence, Client, Canal, Priorité, Statut, Date, Affectation, Indicateurs, Action
- badges statuts en PILLS : À qualifier, Qualifiée, Planifiée (couleurs sémantiques, min 90×28px)
- indicateurs PILLS distincts : Retard (ambre), Anomalie d'intégration (rose) — PAS dans colonne Statut
- action Ouvrir alignée à droite, couleur accent
- message métier sous la card : liste = point d'accès, pas source de vérité
- fond général #F3F4F6, surfaces blanches, espacements cohérents 16px
- ne pas utiliser fontWeight non supporté par la font Penpot

Contenu fonctionnel : conserver le périmètre V1.1 (6 lignes fictives, mêmes colonnes et statuts).

Garde-fous :
- ne modifie PAS Liste demandes — V1 pilote
- ne modifie PAS Liste demandes — V1.1 pilote
- ne supprime rien (y compris orphelins existants)
- ne crée aucun nouveau statut
- ne transforme pas STAT-07/STAT-08 en statuts métier
- ne crée pas de dashboard ni KPI
- ne modifie pas les autres pages
- ne crée pas d'autre écran
- ne crée pas de design system complet dans 06 — Components

Export attendu :
Après création de la frame V2, exporter UNIQUEMENT la frame Liste demandes — V2 visual standard au format PNG (scale 2 recommandé).
Ne pas exporter V1, V1.1, les autres pages, ni SVG/PDF.
Si l'export est enregistré localement, utiliser le chemin :
projects/interv360/03-design/exports/penpot-liste-demandes-v2-visual-standard.png
Ne pas commiter le PNG automatiquement.

Après action :
- résume les éléments créés et leurs dimensions
- confirme qu'aucun élément V2 n'est hors frame
- confirme que V1 et V1.1 n'ont pas été modifiées
- confirme qu'aucune autre page n'a été modifiée
- indique si le PNG a été exporté et son chemin local
- liste les écarts vs 06-liste-demandes.png et vs benchmark V2
```

---

## 13. Critères de revue V2

| # | Critère | Validé |
|---|---------|:------:|
| 1 | Frame `Liste demandes — V2 visual standard` créée sur `03 — Screens` | ☐ |
| 2 | V1 et V1.1 **non modifiées** | ☐ |
| 3 | Tous les éléments V2 **dans** la frame | ☐ |
| 4 | Niveau visuel **supérieur** à V1.1 | ☐ |
| 5 | Comparable à `06-liste-demandes.png` (impression générale) | ☐ |
| 6 | Tableau lisible et esthétique (card, ombre, séparateurs) | ☐ |
| 7 | Badges statuts plus soignés (pills) | ☐ |
| 8 | Navigation plus travaillée (état actif) | ☐ |
| 9 | CTA plus présentable | ☐ |
| 10 | Filtres / recherche plus propres | ☐ |
| 11 | Message métier conservé | ☐ |
| 12 | Aucun nouveau statut | ☐ |
| 13 | STAT-07 / STAT-08 distincts | ☐ |
| 14 | **PNG exporté** (V2 uniquement) | ☐ |
| 15 | Aucun export SVG/PDF | ☐ |
| 16 | Aucune autre page modifiée | ☐ |

---

## 14. Décision attendue après V2

Matrice reprise de [`penpot-visual-quality-benchmark.md`](penpot-visual-quality-benchmark.md) §9 :

| Résultat V2 | Décision |
|-------------|----------|
| **Proche Figma V1** | Penpot **validé** comme outil maquette SFIA — poursuite des 9 écrans |
| **Correcte mais inférieure** | Penpot = **wireframe avancé** ; outil dédié pour final UI |
| **Insuffisante** | Penpot = **preuve MCP / documentation visuelle** seulement |
| **Trop coûteuse à produire** | Penpot = **cas simples** uniquement |

Documenter la décision dans une mise à jour de `penpot-first-screen-review.md` ou `penpot-visual-quality-benchmark.md` après revue humaine + comparaison PNG vs `06-liste-demandes.png`.

---

## 15. Hors périmètre

Ce document et la session MCP V2 **ne couvrent pas** :

- production des 8 autres écrans MVP ;
- design system complet dans `06 — Components` ;
- export autre que PNG V2 ;
- commit automatique du PNG ;
- backlog, user stories, tests, code, API, SQL, BPMN, delivery.

---

*Instructions MCP Interv360 — Liste demandes V2 visual standard — Draft.*

# Interv360 — Benchmark qualité visuelle Penpot vs Figma

**Type** : Benchmark design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Outil évalué** : Penpot self-host + Cursor MCP  
**Référence visuelle** : Figma V1 (`figma-first-draft-screens/`)  
**Écran cible** : Liste demandes  
**Statut** : Décision rendue  
**Branche** : `design/interv360-penpot-first-screen-cycle`  
**Documents associés** : [`penpot-first-screen-review.md`](penpot-first-screen-review.md), [`penpot-application-frame-template.md`](penpot-application-frame-template.md), [`penpot-first-screen-v11-instructions.md`](penpot-first-screen-v11-instructions.md), [`penpot-first-screen-v2-visual-instructions.md`](penpot-first-screen-v2-visual-instructions.md), [`penpot-first-screen-cycle-summary.md`](penpot-first-screen-cycle-summary.md)

---

## 1. Objectif

Évaluer si **Penpot self-host + Cursor MCP** peut produire des maquettes Interv360 d'un niveau **comparable aux premières maquettes Figma V1**.

L'enjeu n'est pas seulement de produire un **wireframe fonctionnel**, mais une maquette **visuellement présentable** — suffisante pour revue métier, démonstration ou capitalisation modèle SFIA.

Ce benchmark permet de décider si Penpot peut devenir :

| Rôle possible | Description |
|---------------|-------------|
| **Outil cible de maquette SFIA** | Production visuelle principale des cycles Design V2 |
| **Outil de wireframe avancé seulement** | Structure + fonctionnel ; final UI ailleurs |
| **Outil de documentation visuelle / preuve MCP** | Preuve technique, pas maquette finale |

**Sources fonctionnelles** : `06-ux-ui/` (specs Git).  
**Sources visuelles de référence** : captures Figma V1 (niveau visuel uniquement — **non définitives**, qualité indicative 8,3/10 selon `figma-v1-closure-summary.md`).

---

## 2. Constat actuel

| Version | Statut | Évaluation |
|---------|--------|------------|
| **V1 pilote** | Preuve MCP | Structure créée ; rendu non exploitable visuellement |
| **V1.1 pilote** | Structure correcte | Frame 1440×900 ; template layout respecté ; lisible à zoom normal ; **rendu inférieur à Figma V1** |

**V1.1 valide :**

- fonctionnement MCP (lecture + écriture) ;
- création frame 1440 × 900 avec coordonnées explicites ;
- respect du template layout SFIA ;
- lisibilité de base (texte 13–24 px, lignes 52 px) ;
- absence de nouveaux orphelins créés ;
- distinction STAT-07 / STAT-08 comme indicateurs distincts ;
- garde-fous fonctionnels respectés.

**V1.1 ne valide pas encore :**

- un niveau **high fidelity raisonnable** ;
- un rendu **présentable** équivalent Figma V1 ;
- une qualité UI cible pour les futurs modèles SFIA ;
- la capacité de Penpot à **remplacer Figma** pour la maquette finale.

**Décision intermédiaire :** tester une **`Liste demandes — V2 visual standard`** avant de généraliser Penpot aux 9 écrans MVP ou aux modèles SFIA.

---

## 3. Références Figma V1 utilisées

Captures disponibles : `projects/interv360/02-architecture/figma-first-draft-screens/` (11 PNG versionnés — **lecture seule, ne pas modifier**).

| Capture | Usage dans le benchmark |
|---------|-------------------------|
| `05-dashboard-sav.png` | Niveau global de finition dashboard / cartes / hiérarchie |
| **`06-liste-demandes.png`** | **Référence principale** — écran Liste demandes |
| `07-fiche-demande-sav.png` | Référence fiche / détail dossier |
| `08-planning-semaine.png` | Référence grille / planification |
| `09-fiche-intervention-mobile.png` | Référence mobile terrain |
| `10-compte-rendu-mobile.png` | Référence formulaire mobile |
| `11-suivi-erreurs-integration.png` | Référence anomalies / messages métier |
| `12-vue-dirigeant.png` | Référence pilotage synthétique |

**Référence principale pour la comparaison V1.1 Penpot et la future V2 :**

`projects/interv360/02-architecture/figma-first-draft-screens/06-liste-demandes.png`

**Niveau visuel observé sur `06-liste-demandes.png` (référence, pas recopie mécanique) :**

- sidebar navigation structurée avec état actif visible ;
- hiérarchie typographique forte (titre, sous-titre, labels colonnes) ;
- tableau dans une **surface card** (fond blanc, coins arrondis, ombre légère) ;
- badges statut et SLA en **pills** colorés sémantiques ;
- barre de recherche avec icône et placeholder soigné ;
- bouton filtres avec bordure et icône ;
- densité d'information professionnelle sans surcharge ;
- palette enterprise clean (teal accent, gris, sémantique rouge/orange/vert/bleu) ;
- espacements aérés et cohérents.

---

## 4. Niveau cible attendu

**Libellé :** High fidelity raisonnable / maquette présentable

| Critère | Attendu |
|---------|---------|
| Hiérarchie visuelle | Claire — titre > sous-titre > tableau > détails |
| Espacements | Cohérents — grille 8/16 px, marges régulières |
| Boutons et badges | Soignés — pills, états, couleurs sémantiques |
| Tableau | Lisible **et** esthétique — surface card, séparateurs, alignements |
| Fonds et surfaces | Travaillés — blanc, gris léger, ombres subtiles |
| Typographie | Maîtrisée — tailles, graisses, contrastes |
| Couleurs | Cohérentes — palette limitée, sémantique statuts |
| Composants | Réutilisables ou réutilisables-ready |
| Comparaison Figma V1 | Rendu **comparable** à une maquette Figma V1 présentable |
| Impression générale | Professionnelle — pas wireframe brut |

**Ce n'est pas** une maquette finale parfaite ni un design system complet — mais un niveau **suffisant pour revue métier ou démonstration**.

---

## 5. Critères de comparaison Figma / Penpot

Évaluation qualitative sur l'écran **Liste demandes**.

| Critère | Figma V1 (`06-liste-demandes.png`) | Penpot V1.1 | Attendu Penpot V2 |
|---------|-------------------------------------|-------------|-------------------|
| Lisibilité générale | ✅ Élevée — hiérarchie claire | ⚠️ Correcte — lisible mais plate | Rejoindre Figma V1 |
| Qualité du layout | ✅ Sidebar + contenu structuré | ⚠️ Horizontal simple, fonctionnel | Structure plus travaillée |
| Hiérarchie visuelle | ✅ Titre, sous-titre, labels, données | ⚠️ Titre seul, peu de niveaux | Titre + sous-titre + labels |
| Densité d'information | ✅ Professionnelle, aérée | ⚠️ Correcte mais sparse | Densité comparable |
| Qualité du tableau | ✅ Card, ombre, colonnes alignées | ⚠️ Fonctionnel, peu premium | Surface card + alignements |
| Qualité des composants | ✅ Search, filtres, badges soignés | ⚠️ Rectangles basiques | Composants stylés |
| Badges statuts | ✅ Pills colorés, lisibles | ⚠️ Badges plats basiques | Pills sémantiques |
| Indicateurs | ✅ SLA / retard intégrés visuellement | ✅ Distincts (Retard, Anomalie) | Conserver + améliorer style |
| Navigation | ✅ Sidebar avec état actif | ⚠️ Liens texte simples | Navigation plus travaillée |
| Bouton primaire | ✅ CTA visible (filtres / actions) | ⚠️ Rectangle bleu basique | CTA soigné |
| Filtres / recherche | ✅ Icônes, bordures, placeholders | ⚠️ Champs plats | Search + filtres stylés |
| Fonds / surfaces | ✅ Gris, blanc, ombres | ⚠️ Plats, peu de profondeur | Surfaces + ombres légères |
| Espacements | ✅ Cohérents, aérés | ⚠️ Template respecté mais sec | Espacements Figma-like |
| Typographie | ✅ Hiérarchie forte | ⚠️ Tailles OK, peu de contraste | Hiérarchie typographique |
| Impression générale | ✅ Présentable (8,3/10 jalon) | ❌ Wireframe avancé | Présentable métier |

**Légende :** ✅ atteint / référence — ⚠️ partiel — ❌ insuffisant

---

## 6. Écarts Penpot V1.1 vs standard Figma

| Écart | Impact | Exigence V2 |
|-------|--------|-------------|
| Rendu encore trop wireframe | Non présentable en démo métier | Surfaces, ombres, finitions |
| Surfaces peu travaillées | Impression prototype technique | Card tableau, fonds différenciés |
| Boutons simples | CTA peu engageant | Bouton primaire stylé (radius, padding, hover-ready) |
| Badges trop basiques | Statuts peu lisibles à distance | Pills 90×28+ avec couleurs sémantiques |
| Tableau fonctionnel mais peu premium | Crédibilité visuelle faible | En-tête, séparateurs, alignements colonnes |
| Navigation peu travaillée | Contexte app faible | Nav horizontale ou sidebar simplifiée avec état actif |
| Typographie peu hiérarchisée | Difficulté de scan visuel | Titre 24+, sous-titre 14 gris, labels colonnes caps |
| Absence de composants stabilisés | Pas de capitalisation SFIA | Composants nommés, réutilisables-ready |
| Manque d'identité visuelle | Rendu générique | Palette Interv360 (teal accent, enterprise clean) |
| Noms de calques génériques (`Text`) | Maintenance MCP difficile | Nommage sémantique des groupes |

---

## 7. Exigences pour Liste demandes — V2 visual standard

| Élément | Valeur |
|---------|--------|
| Frame cible | `Liste demandes — V2 visual standard` |
| Page | `03 — Screens` |
| Référence principale | `projects/interv360/02-architecture/figma-first-draft-screens/06-liste-demandes.png` |
| Base structurelle | V1.1 (périmètre fonctionnel, colonnes, statuts, indicateurs) |
| Source fonctionnelle | `screen-functional-specs.md` §6, `screen-inventory.md` §6 |

**Exigences :**

| # | Exigence |
|---|----------|
| 1 | Conserver le **périmètre fonctionnel** de V1.1 (colonnes, 6 lignes, statuts, indicateurs, message métier) |
| 2 | Améliorer **fortement** le rendu visuel — viser high fidelity raisonnable |
| 3 | S'inspirer du **niveau Figma V1** sans recopie mécanique (sidebar Figma ≠ obligation Penpot) |
| 4 | Hiérarchie visuelle plus forte (titre, sous-titre optionnel, labels tableau) |
| 5 | Surfaces plus propres (card tableau, fonds, ombres légères) |
| 6 | Tableau amélioré (alignements, séparateurs, en-tête travaillé) |
| 7 | Header / navigation améliorés (état actif visible) |
| 8 | Badges et indicateurs plus soignés (pills sémantiques) |
| 9 | CTA `Nouvelle demande` plus présentable |
| 10 | Filtres et recherche stylés (bordures, icônes si possible) |
| 11 | Conserver le **message métier** (liste non source de vérité) |
| 12 | **Ne pas** ajouter de nouveaux statuts |
| 13 | **Ne pas** transformer l'écran en dashboard |
| 14 | **Ne pas** modifier V1 ni V1.1 |

---

## 8. Composants à créer ou stabiliser pour V2

Composants à produire dans la frame V2 (réutilisables-ready — externalisation `06 — Components` en cycle ultérieur) :

| Composant | Rôle V2 |
|-----------|---------|
| Header applicatif | Logo / nom + contexte utilisateur |
| Navigation active | Onglet ou lien actif visible |
| Bouton primaire | `Nouvelle demande` |
| Badge statut | À qualifier, Qualifiée, Planifiée |
| Badge indicateur | Retard, Anomalie d'intégration |
| Champ recherche | Placeholder + bordure |
| Filtre | Pill / dropdown stylé |
| Tableau | En-tête + lignes + séparateurs |
| Message métier | Zone discrète sous tableau |
| Surface / card | Conteneur tableau |
| Ligne tableau | Hauteur, alternance, alignements |

---

## 9. Décision possible après V2

Matrice de décision **après** production et revue de `Liste demandes — V2 visual standard` :

| Résultat V2 | Décision |
|-------------|----------|
| **V2 proche Figma V1** | Penpot **validé** comme outil maquette SFIA — poursuite des 9 écrans |
| **V2 correcte mais inférieure** | Penpot validé pour **wireframe avancé** ; outil dédié (Figma ou autre) pour final UI |
| **V2 insuffisante** | Penpot limité à **documentation visuelle / preuve MCP** |
| **V2 trop coûteuse à produire** | Penpot pour **cas simples** uniquement ; arbitrage outillage par projet |

**Point de blocage :** ne pas lancer la production des 8 autres écrans MVP tant que cette décision n'est pas tranchée sur V2.

---

## 10. Garde-fous

| Garde-fou | Application |
|-----------|-------------|
| Ne pas évaluer Penpot uniquement sur V1.1 | V1.1 = structure ; V2 = test visuel |
| Ne pas généraliser Penpot avant V2 | Décision après benchmark V2 |
| Ne pas poursuivre les 9 écrans si standard visuel non validé | Gate qualité avant scale |
| Ne pas confondre autonomie self-host et qualité design | MCP ≠ UI premium automatique |
| Ne pas copier mécaniquement Figma V1 | Inspiration niveau, pas clone pixel-perfect |
| Ne pas modifier les captures Figma | Références lecture seule |
| Ne pas créer d'image ou export dans ce document | Benchmark documentaire uniquement |
| Specs Git > références visuelles | `06-ux-ui/` reste source fonctionnelle |

---

## 11. Prochaine action

Créer :

**[`penpot-first-screen-v2-visual-instructions.md`](penpot-first-screen-v2-visual-instructions.md)**

Objectif : préparer le prompt MCP pour produire **`Liste demandes — V2 visual standard`** dans Penpot, en utilisant :

- `06-liste-demandes.png` comme **référence principale** de niveau visuel ;
- les autres captures Figma V1 comme **référence de finition globale** ;
- les specs `06-ux-ui/` comme **source fonctionnelle** ;
- V1.1 comme **base structurelle** ;
- un niveau **high fidelity raisonnable** cible.

---

## 12. Décision après V2 visual standard

La frame `Liste demandes — V2 visual standard` a été produite dans Penpot via MCP afin de tester la capacité de Penpot à atteindre un niveau visuel comparable aux premières maquettes Figma V1.

### Résultat observé

La V2 améliore nettement la V1.1 :

- structure plus applicative ;
- sidebar et navigation active ;
- card principale ;
- CTA plus visible ;
- intention de badges / pills ;
- hiérarchie visuelle plus affirmée.

Cependant, le résultat reste inférieur au standard Figma V1 attendu :

- export PNG incomplet ou fragile ;
- certains textes tronqués ;
- tableau principal insuffisamment rendu à l'export ;
- filtres / recherche peu visibles ;
- labels de navigation partiellement absents ;
- micro-détails et icônes absents ;
- niveau de finition global inférieur à `06-liste-demandes.png` ;
- génération encore fragile malgré un cadrage très détaillé ;
- création de 2 orphelins accidentels à la racine de la page lors d'une tentative MCP intermédiaire.

### Décision d'outillage

Penpot self-host + Cursor MCP n'est **pas validé** comme remplaçant Figma pour les maquettes high fidelity Interv360 / SFIA.

Décision retenue :

| Outil | Rôle retenu |
|-------|-------------|
| **Figma** | Maquettes finales, présentables, démonstrations, design high fidelity |
| **Penpot** | Wireframes avancés, documentation visuelle, preuve Git → design |
| **Git** | Source fonctionnelle, architecture, méthode SFIA, décisions de conception |

### Qualification du résultat

Selon la matrice de décision (§9) :

**`V2 correcte mais inférieure`**

Conséquence :

**Penpot validé pour wireframe avancé ; Figma retenu pour final UI.**

### Enseignement méthodologique

Le test Penpot reste utile car il a permis de valider :

- la connexion MCP ;
- la capacité à créer des frames depuis les specs Git ;
- la nécessité d'un gabarit layout strict ;
- les limites actuelles pour la production high fidelity ;
- la valeur d'un benchmark outillage avant généralisation.

### Décision pour la suite Interv360

Ne pas produire les 8 autres écrans MVP dans Penpot en high fidelity.

Reprendre la trajectoire design dans Figma pour les écrans présentables.

Penpot pourra être conservé comme outil secondaire si besoin, mais ne doit pas porter la qualité finale des maquettes SFIA.

---

*Benchmark Interv360 — Qualité visuelle Penpot vs Figma — Décision rendue.*

# Decision Record — R0-A : validation du SEF v0.2

| Champ | Valeur |
| --- | --- |
| Décideur | **Morris** |
| Date | 2026-11-01 (Europe/Paris) |
| Autorité | Construction et gouvernance de SFIA Studio |
| Nature | **Décision humaine enregistrée dans la conversation** ; publication Git sur branche documentaire R0-B |
| Cible | `projects/sfia-studio-next/governance/SEF.md` |
| Statut | **VALIDATED BY MORRIS — R0-A** ; intégration sur `main` non acquise |

## Décisions exprimées et consommées

1. **SFIA Studio** reste le nom du produit ; **SFIA Studio Next** identifie le chantier de reconstruction.
2. **SEF v0.2** est approuvé comme méthode de construction propre au nouveau programme.
3. Travailler par **macro-lots cohérents** et réduire les micro-cycles, notamment documentaires ; intégrer documentation, revue et preuve dans les lots.
4. Conserver `mcleland147/sfia-workspace` comme unique repo ; séparer Next dans **`projects/sfia-studio-next/`**, à côté de `projects/sfia-studio/`.
5. Les documents normatifs Next et leurs statuts vivent dans `governance/`. ChatGPT peut intervenir directement sur des documents, selon les frontières et GO définis dans SEF §10.
6. **GO pour R0-B :** lancement de l'initialisation documentaire dans le périmètre Next sur **branche dédiée**, sans modification du dossier historique ; ce GO ne vaut pas autorisation de PR, merge, changement de chemins protégés, modification runtime, adoption v3 ou refonte de G0-A/B.

## Nouvelle demande R0-B — à instruire sans micro-cycle séparé

- Introduire une **convention de nommage produit** : fonctions, composants, capacités et modèles portent des noms métiers stables, non les noms des chantiers ou expériences historiques.
- Préserver comme références de vision **les trois schémas Pilote/Nora, cockpit, mission gouvernée** fournis par Morris ; ils sont des guides conceptuels à enrichir en R1–R4, pas une spécification technique approuvée.
- **La convention précise est une proposition** ; elle demande encore une validation Morris sur son contenu. Les noms techniques concrets seront fixés dans R2/R4 selon les responsabilités réellement conçues.

## Limites conservées

- SFIA v2.6 : processus externe ChatGPT–Cursor, pas doctrine runtime.
- Doctrine Studio v3 30–37 : source produit validée jusqu'à décision de changement ; pas de copie normative concurrente.
- R0-B **n'adopte pas** les scénarios d'architecture et de persistance du nouveau runtime.
- Le SEF v0.2 reste le texte normatif approuvé ; les nouveaux sujets sont documentés séparément et rattachés à une validation consolidée, sans postuler un SEF v0.3 validé.
- **Aucun statut de travail local** (dirty, staged, worktree) n'est revendiqué à partir de l'accès GitHub distant.

## GO complémentaire R0-B — vision & routage externe (2026-11-01)

Morris a explicitement autorisé :

- l'intégration des **trois schémas originaux**, avec renommage fonctionnel ; il s'agit de références de vision **non approuvées comme spécifications techniques** ;
- l'**adaptation du routage SFIA v2.6** afin que Studio Next charge ses documents fondateurs propres (SEF, Roadmap Next, décisions, vision) sans imposer l'ancienne Build Doctrine/Roadmap/PRR comme gouvernance Next.

**Portée de l'autorisation d'écriture sur les chemins partagés :** le guide `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` et le template canonique `prompts/templates/sfia-cycle-execution-template.md`, **sur la branche R0-B**, uniquement pour ajouter un routage Next parallèle au routage historique sans modifier les règles génériques SFIA v2.6. Ce GO **n'autorise toujours pas PR, merge ou promotion méthodologique globale**.

**Preuves R0-B :** les deux fichiers partagés ont été modifiés sur la branche. Contrôles statiques PASS : sources SEF/Roadmap Next, priorité de sélection par périmètre, maintien du pré-check historique, garde-fous d'autorité, version du template v2.6 inchangée. Aucun test Cursor LIVE/REAL n'a été effectué.

**Réserve binaire :** les trois fichiers PNG ont été identifiés et vérifiés par SHA-256, mais **l'upload binaire direct dans GitHub n'a pas pu être réalisé avec le canal disponible** ; seul l'index documentaire est actuellement sur la branche, donc R0-B n'est **pas clos**. Un pack ZIP avec les images originales renommées permet leur intégration ultérieure sous gate approprié. Aucun résultat d'import distant n'est revendiqué.

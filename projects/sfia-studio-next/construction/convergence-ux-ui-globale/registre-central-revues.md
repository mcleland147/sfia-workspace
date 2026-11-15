# SFIA Studio Next — Registre central de revue et convergence UX/UI (ML4D)

| Métadonnée | Valeur |
|---|---|
| Version | **v0.1 — proposition D0 de travail, 16/11/2026** |
| Finalité | Piloter les revues écran par écran, les décisions Morris, les ensembles de travaux et les preuves de recette, au fil de l'eau |
| Cadre | **Un macro-lot ML4D** ; séquences de revue ≠ neuf macro-lots ou neuf cycles Cursor |
| Référence Git contrôlée | `mcleland147/sfia-workspace` · `main@997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| État programme à cette référence | ML4C **CLOSED WITH RESERVES** ; ML4D **NOT STARTED — NEXT** ; Gate C **OPEN** |
| Autorité | Morris arbitre le produit, la cible UX, les gates et les GO techniques ; ChatGPT documente et qualifie ; Cursor exécute sous contrat SFIA v2.6 |
| Publication | **Version v0.1 publiée sur branche documentaire candidate, sans PR ni merge.** Aucun GO Cursor, modification de Figma ni réception produit implicite |

## 1. Règles de fonctionnement

1. **Revue écran par écran.** Morris ouvre l'application de recette et partage captures, parcours, contexte, appréciation et attentes. Comparer à Figma et aux contrats applicables avant d'arrêter une cible.
2. **Un écran = une entrée de parcours, pas nécessairement un composant ou un lot de code.** Les variantes (vide, chargement, erreur, confirmation, mobile, droits, etc.) sont rattachées à leur surface mère. On ne crée pas une ligne par frame Figma sans raison.
3. **Deux registres complémentaires dans ce fichier :** une vue d'avancement des 9 ensembles (§2) et un journal des observations/décisions/actions (§3). Ajouter des sous-écrans au besoin sans imposer une cartographie complète dès le départ.
4. **Décision explicite.** Capturer séparément : constat observable, référence applicable, proposition de cible, **décision Morris**, travaux nécessaires, preuve de recette et statut. Une proposition ChatGPT n'est pas une décision.
5. **Développement regroupé.** Consolider les corrections en ensembles cohérents, selon composants partagés, interfaces et risques. Une revue peut entraîner une correction transversale ; ne pas programmer automatiquement un cycle Cursor par écran.
6. **Frontière ML4D.** Les évolutions UX/UI des capacités déjà construites ML1–ML4 sont IN. Toute modification métier/API/données/autorité ou fonctionnalité non construite est signalée et soumise à arbitrage avant prise en charge. Ne pas anticiper ML5.
7. **Preuves proportionnées.** Comparaison datée Figma ↔ runtime sur viewport et état comparables ; navigation, interaction, responsive et accessibilité vérifiés selon la portée. Les exigences F1/F2 validées restent applicables ; aucun taux universel de diff image n'est présumé.
8. **Contrôle continu.** Réexaminer tôt la navigation et les variantes transverses, même si la revue de synthèse transversale est positionnée en étape 9. Revue faite ≠ code livré ≠ recette vérifiée ≠ Gate C accepté.

## 2. Plan directeur — ordre des revues

**États de revue :** `À ouvrir` · `En revue` · `Cible à arbitrer` · `Cible décidée` · `En réalisation` · `À recetter` · `Vérifié avec réserves` · `Accepté par Morris`.

| Ordre | Ensemble de surfaces | Points à examiner / variantes candidates | État initial | Dernière revue | Réception / preuve |
|---|---|---|---|---|---|
| **01** | **Connexion et accès** | Connexion, retour de session, états d'attente/refus/erreur, déconnexion si attendue ; présentation et responsive | À ouvrir | — | — |
| **02** | **Portefeuille / cockpit** | Vue personnelle, liste/cartes projets, préparations ouvertes, accès rapides, états vide/chargement/erreur | À ouvrir | — | — |
| **03** | **Sas / préparation projet** | Ouverture/reprise, échange Nora, propositions, documents de préparation, création explicite, états intermédiaires | À ouvrir | — | — |
| **04** | **Espace projet — structure commune** | Rail projet, en-tête, navigation entre surfaces, contexte et droits visibles, états d'activation et retours | À ouvrir | — | — |
| **05** | **Travail avec Nora** | Fil, compositeur, réponses et actions, continuité/reprise, scroll, inspection contextuelle, longs échanges | À ouvrir | — | — |
| **06** | **Documents et journal** | Bibliothèque, inspection, versions/révisions, sujets et décisions, points ouverts et états documentaires | À ouvrir | — | — |
| **07** | **Pilotage du projet** | Trajectoire, cycles, CKI, décisions, informations et états disponibles selon les capacités réellement construites | À ouvrir | — | — |
| **08** | **Git, publication et intégrations** | Surfaces Git, inspection/préparation, autorisation/états, paramètres intégrations, erreurs et refus, sans effet réel non autorisé | À ouvrir | — | — |
| **09** | **Variantes et cohérence transverses** | Responsive, clavier/focus, accessibilité, typographie, densité, rail/shell, états vides/attente/erreur, non-régression | À ouvrir | — | — |

> Les surfaces ci-dessus sont des familles de revue, **pas un engagement que toutes leurs variantes sont actuellement implémentées**. Pour chaque entrée, identifier le Figma exact et vérifier la disponibilité réelle dans la version de recette. L'ordre est privilégié mais adaptable par décision Morris.

## 3. Registre des observations, décisions et travaux

**Règle d'identification :** `UX-001`, `UX-002`… identifient uniquement des entrées de suivi documentaire, et **non** des composants du produit.

| ID | Ensemble / écran | Observation et source | Cible / référence | Décision Morris | Travaux / rattachement | État et preuve |
|---|---|---|---|---|---|---|
| `UX-001` | 06 — Documents / inspection | Réserve UAT `S03-02-R01` (15/11) : confort de lecture insuffisant dans l'inspecteur de document pour les contenus longs. **À reproduire sur la recette courante.** | Référence Figma précise et largeur utilisable à confronter en revue | **Non décidée** | À définir après revue ; candidat ergonomie / disposition de l'inspecteur | **Signalement hérité — non requalifié ML4D** ; capture et viewport à associer |
| `UX-002` | 05 — Travail avec Nora / reprise | Réserve UAT `S07-06-R01` (15/11) : retour à Travail repositionné au premier message, plutôt qu'à l'emplacement récent. **À reproduire sur la recette courante.** | Définir le comportement attendu selon reprise, navigation et rafraîchissement | **Non décidée** | À définir après revue ; vérifier impact comportement/état de navigation | **Signalement hérité — non requalifié ML4D** ; scénario de retour à documenter |

**Ajout d'une nouvelle ligne :** une observation peut produire zéro modification (déjà conforme), une correction locale, une correction transverse, ou un sujet **hors périmètre ML4D à arbitrer**. Ne pas inscrire « résolu » avant la re-recette.

## 4. Fiche légère à renseigner pendant chaque revue

Copier ce bloc uniquement lorsqu'un sous-écran ou une variante mérite un suivi détaillé ; sinon une ligne dans le registre suffit.

```text
Parcours / écran :
Date et version de recette (URL/environnement, commit si connu) :
État testé / action réalisée / viewport :
Capture(s) runtime :
Référence Figma (page, frame, état, date/version si disponible) :
Observation factuelle :
Attendu / proposition UX (non décidée) :
Décision Morris (date / option retenue / réserve éventuelle) :
Impact (UI / navigation / fonctionnel / API-données / autorité / sécurité) :
Travaux regroupés (composant ou ensemble de surfaces concernés) :
Preuve après correction (capture + interaction + navigateur/viewport) :
Statut :
```

## 5. Regroupement des réalisations et réception

Les **ensembles de réalisation** ne sont créés qu'à partir des observations arbitrées. Ne pas les confondre avec les neuf ensembles de revue.

| Ensemble de réalisation | Écrans / observations liés | Résultat attendu | Frontières / risques | Preuves exigées | Statut / GO |
|---|---|---|---|---|---|
| *À constituer après les premières revues* | — | — | — | — | **Aucun GO technique ML4D** |

**Avant tout contrat Cursor :** consolider la cible décidée, la portée IN/OUT, les dépendances, le blast radius, les tests/navigateurs, les sources Figma applicables, les preuves de sortie, les réserves et le gate Morris ; relire depuis Git les sources applicables et le routage/template **SFIA v2.6**.

**Pour la réception globale ML4D :** couvrir les surfaces/états applicables réellement construits, arbitrer les écarts/réserves et obtenir un verdict Morris sur la convergence UX/UI. **Gate C demeure distinct et ouvert**, même après la réception d'un écran.

## 6. Prochaine action

**Démarrer la revue 01 — Connexion et accès.** Morris fournit une capture de la recette actuelle (avec éventuellement l'état après connexion ou un état d'erreur) ; ChatGPT identifie la correspondance Figma et ouvre les observations seulement lorsqu'elles sont étayées. Le registre est actualisé après chaque revue et consolidé avant tout développement.

## 7. Sources de cadrage (Git au SHA de référence)

- `projects/sfia-studio-next/governance/SEF.md` — macro-lots, valeur produit, preuves graduées, autonomie et gates.
- `projects/sfia-studio-next/governance/roadmap.md` — ML4D NEXT, Gate C OPEN et réserves héritées.
- `projects/sfia-studio-next/governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` — périmètre ML4D, Figma, variantes, F1/F2, frontière ML5 et réception G5.
- `projects/sfia-studio-next/governance/product-naming-conventions.md` — nommage par responsabilité produit.
- `projects/sfia-studio-next/construction/convergence-fonctionnelle/journal-recette-utilisateur-ml4c.md` — signalements UAT `S03-02-R01` et `S07-06-R01` (constats datés, non preuves de l'état actuel de ML4D).

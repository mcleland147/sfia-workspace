# SFIA Studio Next — Registre central de revue et convergence UX/UI (ML4D)

| Métadonnée | Valeur |
|---|---|
| Version | **v0.2 — suivi UX-003 et ouverture Portefeuille, 16/11/2026** · registre D1 factuel évolutif |
| Finalité | Piloter les revues écran par écran, les décisions Morris, les ensembles de travaux et les preuves de recette, au fil de l'eau |
| Cadre | **Un macro-lot ML4D** ; séquences de revue ≠ neuf macro-lots ou neuf cycles Cursor |
| Référence Git contrôlée | `mcleland147/sfia-workspace` · `main@997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| État programme à cette référence | Sur `main@997d4c4e` : ML4C **CLOSED WITH RESERVES** ; ML4D **NOT STARTED — NEXT** ; Gate C **OPEN**. Depuis : sous-ensemble UX-003 réalisé en branche locale candidate et accepté en recette utilisateur avec réserves ; **aucun merge** ni clôture globale ML4D |
| Autorité | Morris arbitre le produit, la cible UX, les gates et les GO techniques ; ChatGPT documente et qualifie ; Cursor exécute sous contrat SFIA v2.6 |
| Publication | **v0.2 publiée sur `docs/next-ml4d-registre-revues-20261116`**, branche documentaire candidate ; pas sur `main`, sans PR ni merge. Met à jour uniquement le suivi UX-003, sans effet produit ni modification normative |

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
| **01** | **Connexion et accès** | Connexion, retour de session, états d'attente/refus/erreur, déconnexion si attendue ; présentation et responsive | **Accepté par Morris — avec réserves de preuve** | **16/11/2026** | **UX-003** : captures utilisateur desktop nominal + session expirée ; mobile accepté verbalement sans capture comparative ; OAuth LIVE / expiration réelle non prouvés ; voir §3.1 |
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
| `UX-003` | 01 — Connexion et accès / entrée unifiée | Ancien login avec rail et messages techniques ; besoin de réunir présentation Studio et connexion, sans page vitrine séparée. Incident de RECETTE : LaunchAgent ML4C servait l'ancien écran sur `:3200`, depuis corrigé sans changer le code UX-003. | **Figma validé Morris** : desktop `574:425`, mobile `574:466`, session expirée `574:490` ; une entrée directe Studio/Nora + CTA GitHub. | **Conception validée**, puis **réception UX acceptée** par Morris le 16/11 ; pastille GitHub sombre explicitement acceptée ; desktop non prioritaire pour son usage. | Livraison Cursor locale candidate `a77a3a2bf7b942038d771fdcdd2e7a6410330784`, build `vYeNRRzvLN03N73wmcKkR` ; RECETTE `:3200` rétablie ; **aucun nouveau correctif demandé**. | **Accepté par Morris avec réserves de preuve** : desktop et expiration simulée vus en capture ; mobile accepté par déclaration sans capture ; OAuth callback LIVE et détection réelle d'expiration **NON PROUVÉS**. Voir §3.1. |

**Ajout d'une nouvelle ligne :** une observation peut produire zéro modification (déjà conforme), une correction locale, une correction transverse, ou un sujet **hors périmètre ML4D à arbitrer**. Ne pas inscrire « résolu » avant la re-recette.

### 3.1. Revue UX-003 — décision Morris et limites (16/11/2026)

| Objet | État / preuve |
|---|---|
| Cible | **VALIDATED SPEC par Morris** : entrée unifiée Studio/Nora + authentification ; pas de vitrine autonome. [Figma desktop](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=574-425), [mobile](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=574-466), [session expirée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=574-490). |
| Candidat | Branche de construction **locale non publiée** `feat/next-ml4d-ux003-unified-entry-20261116` ; SHA `a77a3a2bf7b942038d771fdcdd2e7a6410330784` ; build `vYeNRRzvLN03N73wmcKkR`. Ces éléments ont été rapportés par Cursor et recoupés dans le handoff, **pas relus dans un commit projet distant**. |
| Environnement | RECETTE locale `http://127.0.0.1:3200` ; processus UX-003 rétabli après conflit avec le LaunchAgent ML4C. [Handoff incident `63ab5a73`](https://github.com/mcleland147/sfia-workspace/blob/63ab5a731ebdf173fefab2e7152744bf617f9229/sfia-review-handoff/latest-chatgpt-review.md) ; serveur local non inspectable directement par ChatGPT. |
| Desktop nominal | Capture utilisateur de RECETTE examinée le 16/11 : en-tête et deux zones Studio/Nora + GitHub conformes en première lecture, sans rail. **Accepté visuellement par Morris** ; pastille `GH` sombre acceptée comme écart esthétique mineur. **F2 géométrique non certifié** sur cette capture (viewport/zoom non étalonnés). |
| Desktop session expirée | Capture utilisateur de `?reason=session_expired` examinée le 16/11 ; message « Retrouvons votre session » et CTA de reconnexion affichés. Morris : **« c'est ok »**. Ce contrôle est une **simulation par paramètre**, pas une preuve du mécanisme réel d'expiration ni du callback OAuth. |
| Mobile | Figma 390 × 844 disponible ; Morris indique ensuite **« finito c'est good »** et accepte l'ensemble sans nouvelle capture mobile versée à cette revue. **Acceptation utilisateur déclarative**, non comparaison visuelle F2/mobile ni preuve de navigation/accessibilité en contexte mobile. La priorité d'usage exprimée par Morris porte sur le mobile plutôt que le desktop. |
| Accès de test | Bandeau Pilote A/B **test / non OAuth** maintenu hors Figma en RECETTE, sous contrôle de configuration déclaré par Cursor. Ne pas assimiler sa réussite à un OAuth LIVE. |
| Réserves maintenues | OAuth GitHub callback LIVE non rejoué ; véritable expiration de session non prouvée ; isolation cookies sur `127.0.0.1` par port insuffisante (profil navigateur dédié) ; preuve comparative mobile non apportée ; G5 global et Gate C ouverts. |
| Arbitrage de sortie | **UX-003 : revue utilisateur close / ACCEPTÉ AVEC RÉSERVES**, sans correctif Cursor supplémentaire décidé. Ne vaut pas `ADOPTED`, promotion STABLE, preuve exhaustive F2 ou acceptation globale ML4D. |

**Traçabilité des captures Morris :** captures partagées dans la conversation de revue du 16/11/2026 (desktop nominal puis état expiré). Elles ne sont pas publiées comme artefacts Git dans ce registre ; ne pas inventer un lien fichier ni une preuve mobile absente.

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
| **Entrée unifiée / UX-003** | 01 — Connexion et accès ; `UX-003` | Entrée Studio/Nora + GitHub, desktop/mobile et état session expirée | OAuth et sessions inchangés ; DEV test contrôlé ; isolation RECETTE ; LIVE non prouvé | Contrat Figma, tests Cursor, captures navigateur desktop/expiré, décision Morris ; F2 mobile non apportée | **Livré en candidat local ; recette UX Morris acceptée avec réserves le 16/11** ; aucun push projet / PR / merge / STABLE |
| *Ensembles suivants à constituer après arbitrages* | 02–09 | — | — | — | **Aucun GO supplémentaire implicite** |

**Avant tout contrat Cursor :** consolider la cible décidée, la portée IN/OUT, les dépendances, le blast radius, les tests/navigateurs, les sources Figma applicables, les preuves de sortie, les réserves et le gate Morris ; relire depuis Git les sources applicables et le routage/template **SFIA v2.6**.

**Pour la réception globale ML4D :** couvrir les surfaces/états applicables réellement construits, arbitrer les écarts/réserves et obtenir un verdict Morris sur la convergence UX/UI. **Gate C demeure distinct et ouvert**, même après la réception d'un écran.

## 6. Prochaine action

**Ouvrir la revue 02 — Portefeuille / cockpit.** UX-003 est accepté par Morris avec réserves ; aucune correction supplémentaire décidée. Morris se connecte sur **RECETTE `http://127.0.0.1:3200`**, affiche le portefeuille et partage une capture de son état nominal (puis variantes utiles : vide, préparation en cours, erreurs, responsive). ChatGPT vérifie les références Figma applicables, le périmètre déjà implémenté et distingue les observations des décisions. **Aucun nouveau GO Cursor, aucune promotion ni clôture ML4D/ Gate C** par cette ouverture.

## 7. Sources de cadrage (Git au SHA de référence)

- `projects/sfia-studio-next/governance/SEF.md` — macro-lots, valeur produit, preuves graduées, autonomie et gates.
- `projects/sfia-studio-next/governance/roadmap.md` — ML4D NEXT, Gate C OPEN et réserves héritées.
- `projects/sfia-studio-next/governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` — périmètre ML4D, Figma, variantes, F1/F2, frontière ML5 et réception G5.
- `projects/sfia-studio-next/governance/product-naming-conventions.md` — nommage par responsabilité produit.
- `projects/sfia-studio-next/construction/convergence-fonctionnelle/journal-recette-utilisateur-ml4c.md` — signalements UAT `S03-02-R01` et `S07-06-R01` (constats datés, non preuves de l'état actuel de ML4D).
- Figma R3 — frames `574:425`, `574:466`, `574:490` : spécifications UX-003 validées par Morris, sans effet Git normatif.
- [Review Handoff UX-003 / restauration RECETTE](https://github.com/mcleland147/sfia-workspace/blob/63ab5a731ebdf173fefab2e7152744bf617f9229/sfia-review-handoff/latest-chatgpt-review.md) — candidat local et incident de lane ; capture Morris et acceptation constatées dans la conversation du 16/11, **distinctes de ce handoff technique**.

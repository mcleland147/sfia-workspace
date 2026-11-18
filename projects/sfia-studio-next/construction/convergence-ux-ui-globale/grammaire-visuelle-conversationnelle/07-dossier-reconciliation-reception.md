# SFIA Studio Next — Dossier de réconciliation et préparation de réception
## R5 / ML4D — Ensemble 05 « Travail avec Nora »

| Champ | Valeur |
|---|---|
| **Version / date** | V0.2 — 18 novembre 2026 (synchronisation documentaire D1 sur branche candidate) (Europe/Paris) |
| **Statut** | **DOCUMENTED — USER ACCEPTED WITH RESERVES (campagne de composition visuelle UAT-01…08) / RECONCILIATION PENDING** |
| **Nature** | Dossier documentaire factuel D1 de préparation, **non normatif** ; pas une décision de clôture |
| **Portée** | Réconciliation, réception bornée de la composition conversationnelle, documentation as-built et préparation d'intégration |
| **Autorités** | Morris : réception/gates/Git ; ChatGPT : préparation et revue D0/D1 ; Cursor : preuves techniques locales selon SFIA v2.6 |
| **Source de suivi** | [Registre central ML4D](../registre-central-revues.md) · [Matrice C-01 à C-22 V0.10](06-matrice-convergence-vision-realisation.md) |
| **Interdits implicites** | Aucun push produit, PR, merge, clôture globale Ensemble 05/ML4D, Gate C, STABLE, release ou ADOPTED |

> **Périmètre de réception.** Morris a validé **huit scénarios de composition visuelle conversationnelle en RECETTE**, avec réserves et ajustements successifs. Cette acceptation ne prouve pas à elle seule les 88 oracles candidats des cinq sujets de l'Ensemble 05 (UX-002 et UX-007…010), ni leur couverture exhaustive (compositeur, activité, visionneuse, reprise, droits). **Ne pas déclarer l'ensemble de ces capacités réceptionné sans preuve distincte.**

## 1. Résultat utilisateur et chronologie des preuves

La campagne vérifie la capacité de Nora à produire spontanément des restitutions pertinentes à partir de demandes naturelles, sans forcer la famille graphique. Des réponses, captures et appréciations ont été fournies par Morris. Les corrections et livraisons ont été consignées dans des handoffs Git SFIA v2.6 ; le dernier déploiement est rapporté sur une RECETTE locale et a fait l'objet d'une capture et d'une acceptation utilisateur explicites.

| Test | Représentation et observation | Verdict utilisateur borné |
|---|---|---|
| **UAT-01** | Comparaison de trois stratégies en cartes | Accepté avec réserve initiale d'alignement, corrigée puis acceptée |
| **UAT-02** | Comparaison de cinq options en matrice | Accepté ; ligne « Matrice de comparaison » supprimée lors du correctif |
| **UAT-03** | Parcours de six étapes avec résultats et vigilances | Première exécution UNKNOWN ; cause reproduite en DEV (`steps[].detail.max(400)`), plafond porté à 5 000 ; nouvelle réponse LIVE correcte et acceptée |
| **UAT-04** | Planning S1–S8 et chevauchements | Accepté ; numérotation superflue supprimée |
| **UAT-05** | Graphe dirigé de dépendances et convergence | Accepté ; icônes décoratives retirées |
| **UAT-06** | Arbre conditionnel et décision humaine préservée | Accepté ; réserves iconographiques non bloquantes |
| **UAT-07** | Trois équipes parallèles → convergence → revue → lancement | Initialement partiel (composition/connexions), puis corrigé ; **Morris accepte le rendu final** |
| **UAT-08** | Synthèse COPIL : acquis, risques, options et recommandation | Initialement partiel, puis corrections visuelles ; campagne finalement acceptée avec limites de diversité iconographique |

**Verdict de la campagne seule :** `E05 — VISUAL COMPOSITION UAT USER ACCEPTED WITH RESERVES`. L'avis Morris du 18/11 accepte expressément les derniers points UX-05 (flèches/convergence) et UX-01 (alignement icône/titre).

### Correctifs suivis dans la campagne (namespace distinct)

Les identifiants **UX-01 à UX-07 de cette campagne** sont des réserves de composition et **ne doivent pas être confondus** avec les entrées centrales **UX-001 à UX-010** du registre ML4D.

| Réserve de campagne | Disposition finale |
|---|---|
| **UX-01** — icône et titre désalignés | Alignement final accepté |
| **UX-02** — titre/ligne de matrice superflu | Suppression acceptée |
| **UX-03** — numéros de section/étape redondants | Numérotation unique acceptée |
| **UX-04** — icônes décoratives de graphes | Suppression acceptée |
| **UX-05** — graphes parallèles mal reliés/dupliqués | Claim exclusif ; convergence et flèches acceptées |
| **UX-06** — sémantique et marges des icônes | Espacement accepté ; diversité sémantique non exhaustive conservée en observation |
| **UX-07** — espaces artificiels dans les cartes | Texte en flux naturel ; cartes alignées au départ sans alignement forcé des fins, accepté |

**Arbitrage explicite :** le défilement horizontal du diagramme parallèle est **accepté** par Morris ; ne pas rouvrir une optimisation de largeur simplement pour supprimer ce scroll.

## 2. Références de vérité et réconciliation encore nécessaire

| Objet | Référence / qualification |
|---|---|
| Repository | `mcleland147/sfia-workspace` |
| Baseline Git distante lue | `main@997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Candidat RECETTE final, **rapporté** | `5c94c86737f0965c71a7e058e3f1e45ff4415024` |
| Arbre candidat, **rapporté** | `74fbf2b90f95951d5049efc5a854ad213fb0f47f` |
| Build RECETTE, **rapporté** | `IEINNuPl0bHWJOWkh0ZhG` |
| Dernier handoff Full vérifié à distance | [`sfia/review-handoff@dc9fd0ba`](https://github.com/mcleland147/sfia-workspace/blob/dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d/sfia-review-handoff/latest-chatgpt-review.md), blob `f08d586f17daa79cc1dd169d40fb8b63188e43a9` |
| Branche documentaire candidate | `docs/next-ml4d-registre-revues-20261116` (non intégrée à `main`) |
| Matrice canonique | **V0.10 publiée sur branche documentaire candidate**, C-01…C-22 conservés et requalifiés aux niveaux de preuve UAT bornés |
| RECETTE | `http://127.0.0.1:3200` (localhost du poste de recette, non accessible directement depuis GitHub) |
| Environnement | ENV-01, configuration, DB et rollback selon handoff ; STABLE NOT AVAILABLE |

**Limites de source :** le commit produit `5c94c867` n'est **pas résolu dans le Git distant** depuis cette revue. Branche de produit locale, commit/parents, diff complet, fichiers modifiés non publiés et preuve de conformité du worktree restent **NON OBSERVÉS directement**. Les captures Morris prouvent ce qu'elles montrent, pas le comportement de tous les parcours.

### Chaîne des preuves utiles

- [Campagne LIVE initiale et sélection de compositions](https://github.com/mcleland147/sfia-workspace/blob/72bb56d9ad7b4ea59f9264a5054522ce4c9a2074/sfia-review-handoff/latest-chatgpt-review.md) : douze tours DEV, cinq compositions spontanées rapportées.
- [Diagnostic causal UAT-03](https://github.com/mcleland147/sfia-workspace/blob/426bd34a963140a28656ff4128b9ab74ccadde2e/sfia-review-handoff/latest-chatgpt-review.md) : validation `detail.max(400)` rejetée sur le cas reproduit ; anciens messages historiques non diagnostiqués rétrospectivement avec la même certitude.
- [Correction UAT-03 en RECETTE](https://github.com/mcleland147/sfia-workspace/blob/09f03e5e123621ac48fb7ea95785cf55880b1478/sfia-review-handoff/latest-chatgpt-review.md) : plafond `max(5000)` et observabilité durable.
- [Consolidation UX-01…07](https://github.com/mcleland147/sfia-workspace/blob/1021ede1dd1e37e5bbe85ce2ebc93f882263256f/sfia-review-handoff/latest-chatgpt-review.md) : correctifs et qualification.
- [Correction finale UX-05/UX-01](https://github.com/mcleland147/sfia-workspace/blob/dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d/sfia-review-handoff/latest-chatgpt-review.md) : cause `classifyLanes()` (double claim), tests, manifestes et captures ; acceptation utilisateur finale consignée en conversation le 18/11.

Les binaires de captures, fichiers locaux de preuve et journaux complets restent à inventorier et à rattacher aux SHA sans inventer d'URL de fichier.

## 3. Réconciliation locale exigible (sans mutation de RECETTE)

| Contrôle | Sortie exigée |
|---|---|
| Git Truth Check | Branche, HEAD, parents, tree, base, worktrees, staged/untracked, provenance du candidat `5c94c867` |
| Diff produit | Inventaire exhaustif des changements Ensemble 05, exclusions parasites, compatibilité et dette |
| Architecture | Confrontation du code D3 → admission → projections → React/ELK → persistance avec l'as-built et les contrats validés |
| QA | Table des UNIT/Level-B/BROWSER/LIVE/RECETTE réellement exécutés, ciblés par SHA et par scénario |
| Données / ACL | Conservation de la propriété des objets et de l'isolation des droits, par lecture seule |
| Intégration | Proposition de diff de consolidation et preuve de l'absence de divergence bloquante |

**Réserve de sécurité à vérifier :** le dernier handoff précise une modification **temporaire** de `owner_pilot_id` sur projet, conversation, préparation et `turn_commands` pour une capture, puis une restauration déclarée vers le propriétaire initial. Les compteurs DB sont identiques avant/après (23 projets, 560 messages, 196 conversations, 280 commandes de tour), **mais ne prouvent pas les valeurs de chaque propriétaire**. Exiger un contrôle en **lecture seule** des valeurs et des droits effectifs sur les objets concernés. Ne pas remutater la RECETTE simplement pour créer une preuve.

**État actuel :** réconciliation Git locale et vérification ACL indépendantes NON TERMINÉES ; ne pas écrire `RECONCILED` avant preuve.

## 4. Inventaire documentaire — synchronisation Git D1 effectuée / vérifications restantes

Les mises à jour doivent se faire dans les sources **existantes**, en distinguant les faits d'implémentation, les décisions de conception et les preuves.

| Source | Mise à jour préparée | Classe |
|---|---|---|
| [Registre central ML4D](../registre-central-revues.md) | État courant de la campagne, UID UAT distincts des UX centraux, réception Morris bornée, gates | D1 |
| [Matrice C-01…22 V0.10](06-matrice-convergence-vision-realisation.md) | **Publié en candidat D1** : 22 C-IDs conservés, niveau de preuve actualisé, anciennes sections historiques tracées | D1 — publié |
| [Conception UX Travail](../conception-ux-travail-avec-nora.md) | **Annexe D1 publiée** sur huit UAT ; cinq arbitrages UX conservés | D1 publié ; D2 non touché |
| [Contrat technique Travail](../contrat-technique-travail-avec-nora.md) | **Annexe CT-01…08 D1 publiée**, orientations M1–M5 non réarbitrées | D1 publié ; D2 non touché |
| [01 — Vision](01-cadrage-vision-produit.md) et [02 — Fonctionnel/UX](02-conception-fonctionnelle-ux.md) | **Annexes post-UAT D1 publiées**, historiques préservés | D1 publié |
| [03 — Architecture](03-architecture-solution-technique.md) et [04 — Remplacement E05](04-qualification-architecture-remplacement-e05.md) | **Annexes D1 publiées** avec chaînage D3/admission/ELK, cause et correction `classifyLanes()` ; inspection locale toujours ouverte | D1 publié ; D2 non touché |
| [05 — Contrat Nora–Studio](05-contrat-composition-nora-studio.md) | **Annexe D1 publiée** sur `detail.max(5000)`, errors/fallback et contrat observable | D1 publié ; contrat D2 inchangé |
| `web/docs/evidence/ensemble-05-travail-nora/` | Dossier de réception unique et index des preuves existantes | D1, preuves à récupérer localement |
| [`construction/delivery-history.md`](../../delivery-history.md) | **Entrée rétrospective D1 publiée** sur SHA/build/handoffs, distincte d'une livraison Cursor nouvelle | D1 publié |
| `governance/roadmap.md` | Proposition de statut et dépendances de suite ML4D, après décision | **D2**, pas de modification sans validation dédiée |
| `governance/decisions/` | Projet de décision de réception/clôture avec réserves, si Morris l'arbitre | **D2**, publication spécifique ultérieure |

Ne pas créer de second registre, second template Cursor, décision implicite, ni micro-cycle documentaire par fichier.

## 5. Matrice de convergence — requalification publiée en V0.10

**Conserver rigoureusement les identifiants canoniques C-01 à C-22 de V0.9.** Les éléments ci-dessous détaillent le périmètre de requalification **publié en V0.10** ; une preuve UAT bornée n'entraîne aucune promotion automatique des autres capacités.

| IDs | Nouvelles preuves à rapprocher |
|---|---|
| C-01 / C-07 / C-21 | Choix spontané de formes sur huit scénarios RECETTE ; conserver possibilité de prose simple |
| C-02 / C-06 / C-19 | Continuité/reload visuel et incertitude UAT-03 selon preuves réellement disponibles ; aucune preuve historique exhaustive |
| C-08 | Cards/matrix sélectionnées spontanément dans la campagne ultérieure, après correction des instructions D3 |
| C-09 | Séquence et planning acceptés ; incident Zod/SDK et correctif UAT-03 |
| C-10 | Dépendances dirigées acceptées par Morris |
| C-11 | Arbre conditionnel accepté, décision humaine préservée |
| C-12 | Convergence parallèle corrigée et acceptée ; scroll horizontal autorisé |
| C-14 / C-15 / C-18 | Améliorations de présentation effectivement vues ; responsive/split/zoom/a11y et neuf comparaisons Figma non automatiquement acquis |
| C-20 | Qualifier et relier UNIT, FAKE, BROWSER, LIVE et RECETTE par SHA |
| C-22 | Réception **du corpus UAT de composition**, non réception globale du Travail ni Gate C |

Tous les autres C-ID restent à confronter au contenu et aux preuves sans suppression ni réindexation.

## 6. Réserves et dette / exit

| Sujet | État de preuve / exit |
|---|---|
| UX-01…07 de campagne | Morris accepte les correctifs ; limiter toute réouverture à une régression prouvée |
| Diversité sémantique des icônes | Observation mineure, non blocage décidé |
| Scroll horizontal des diagrammes | Accepté dans le cas UAT-07 ; ne pas en faire une non-conformité systématique |
| Responsive, split, zoom, clavier et accessibilité exhaustive | Couverture partielle ; campagne proportionnée ou réserve au gate de convergence global |
| Historique PostgreSQL toutes versions, C2 et fallback adverses | Non prouvés exhaustivement ; distinguer couverture rapportée/NOT RUN |
| Coût réel du fournisseur | Estimations de repli, pas facturation attestée |
| Anciens tours UNKNOWN | Historiques conservés ; aucune réconciliation a posteriori déduite |
| ACL / `owner_pilot_id` en RECETTE | Restauration rapportée ; contrôle lecture seule avant revue d'intégration |
| Candidat local non publié | Diff/ascendance exacts à vérifier avant toute intégration |

Le responsable d'intégration doit qualifier chaque réserve en **bloquante**, **reportable avec responsable/exit**, ou **hors sous-périmètre de réception**. Ne pas relancer de nouveau développement sans défaut ou décision nouvelle.

## 7. Gates et définition de sortie

La réconciliation pourra être présentée comme prête à intégration lorsque :

1. L'identité du candidat, son diff et son ascendance depuis la baseline sont vérifiés localement.
2. Les huit UAT et la validation Morris sont consignés sans extrapolation.
3. Les documents as-built et contrats ne présentent plus de contradiction matérielle.
4. La matrice C-01…22 est actualisée au niveau de preuve exact.
5. Les réserves possèdent un propriétaire et un exit.
6. Les données et autorisations RECETTE sont vérifiées en lecture seule ou l'écart est escaladé.
7. Un diff Git documentaire/produit complet et une revue sont disponibles.
8. L'intégration, la clôture et les promotions demeurent distinctes.

**Verdict de préparation :** `ENSEMBLE 05 — UAT VISUAL COMPOSITION ACCEPTED WITH RESERVES / RECONCILIATION PENDING`.

**Verdict futur conditionnel, non acquis :** `ENSEMBLE 05 — RECONCILED / DOCUMENTATION READY FOR MORRIS INTEGRATION REVIEW`.

**Frontière de publication actuelle :** dossier + registre factuel publiables sur **branche documentaire candidate uniquement** ; aucun push produit, PR, merge, changement de Roadmap D2, décision de clôture, Gate C, STABLE ou ADOPTED.


## 8. Synchronisation documentaire Git du 18/11 — vérifiée sur branche candidate

Les mises à jour factuelles D1 ont été publiées sur `docs/next-ml4d-registre-revues-20261116` : **matrice C-01…22 V0.10**, sources 01–05 de la grammaire, conception UX Travail, contrat technique Travail, historique de delivery et le présent dossier. Chaque changement conserve la distinction **état historique de conception / réalisation locale rapportée / comportement reçu sur huit UAT / statut Git non intégré**. Le registre central ML4D renvoie à cette synthèse.

**Non encore effectué :** inspection locale indépendante du diff et de l'ascendance du commit produit `5c94c867`, contrôle ACL objet par objet en lecture seule, lecture/assemblage complet des captures et preuves locales, changement de statuts normatifs de Roadmap/décisions, push produit, PR, merge, promotion STABLE, Gate C ou ADOPTED. La publication documentaire ne change pas le statut `RECONCILIATION PENDING`.

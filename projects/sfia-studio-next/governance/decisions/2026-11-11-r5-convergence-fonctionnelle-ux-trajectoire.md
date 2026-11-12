# SFIA Studio Next — Arbitrage de trajectoire R5 : ML4C fonctionnel et ML4D UX/UI global

| Champ | Valeur |
| --- | --- |
| Date | 11 novembre 2026 (Europe/Paris) |
| Autorité de l'orientation | Morris |
| Statut de contenu | **VALIDATED IN CONTENT BY MORRIS — découpage ML4C / ML4D** ; contrats détaillés et acceptations restant soumis aux gates |
| Nature | **Complément de décision structurante D2** à la [trajectoire CP0 du 10 novembre](2026-11-10-r5-reconciliation-convergence-trajectory.md), sans réécriture de son historique |
| Base Git vérifiée | `mcleland147/sfia-workspace`, `main@42aa373947446a8c20694b06c559ee0da1cba580` après [PR #674](https://github.com/mcleland147/sfia-workspace/pull/674) merged ; Git local **NON OBSERVÉ** |
| Mandat documentaire | Mise à jour Git demandée par Morris le 11 novembre pour cette révision ; contribution bornée sur branche candidate, **sans PR, merge, GO Cursor, release ou ADOPTED** |

## 1. Arbitrage produit retenu

**ML4C — convergence fonctionnelle intégrée du produit** et **ML4D — convergence UX/UI globale** sont deux macro-lots successifs de la convergence R5. Ce découpage remplace **pour l'organisation future** les options analytiques A/B/C de la synthèse CP1 ; les constats X-01 à X-08, la matrice de couverture ML4B et les preuves historiques restent intacts.

Le résultat attendu reste un produit conforme à la [vision R1](../../cadrage/vision-produit.md), aux exigences R2 et aux cadrages complémentaires validés, notamment [Conduite des intentions et continuité cognitive Nora/Studio](../../cadrage/conduite-intentions-continuite-cognitive-nora-studio.md). **L'objectif n'est pas d'ajouter des fonctionnalités pour elles-mêmes.** Une capacité nouvelle indispensable pour satisfaire une exigence existante est instruite avec son impact ; une extension de vision est soumise à arbitrage Morris avant entrée au périmètre.

**Nora qualifie, raisonne, organise, mobilise, interprète et poursuit ; Studio et ses propriétaires D1–D9 exécutent, contrôlent les autorités, persistent les états et retournent les résultats vérifiables ; le Pilote décide et autorise.** Le Pilote n'a pas à orchestrer manuellement les dépendances d'une intention dont la conduite relève de Nora. Aucun deuxième moteur de conversation, de décision ou d'effets ne doit naître de la convergence.

## 2. ML4C — convergence fonctionnelle intégrée

**Résultat Pilote :** entrer dans Studio, accéder à son cockpit, ouvrir/reprendre un sas, créer explicitement un projet, naviguer, travailler avec Nora, conduire les intentions et consulter les états et résultats **réels**, dans les périmètres construits ML1–ML4.

**IN :**
- **Cockpit et entrée D1/D2 :** identité/session, portefeuille et états projet véridiques, tableau de bord, navigation, sas, préparation, proposition, création, reprise et liens profonds ; corriger les écarts de comportement, d'erreur, de droits, d'idempotence et de continuité (notamment statuts calculés par index, erreurs 401 non authentification, ACK perdu).
- **Conduite Pilote–Nora D3/D4/D5/D6 :** investigation, raisonnement utile, sélection/mémoire/contextualisation, documents/version, trajectoire, cycles et HumanDecision ; cohérence entre les paroles de Nora et les opérations réellement confirmées ; reprise cognitive et transactionnelle sans doublon.
- **Publication documentaire Git D4/D6–D9 :** intention complète de document → inspection/préparation → autorisation D6 → effets Git gouvernés → vérification et restitution, avec refus, révocation, état inconnu et accès partagés correctement gérés ; capacité de réalisation distincte mais **expérience Pilote–Nora intégrée**.
- **UX nécessaire au fonctionnement de chaque parcours :** écrans, états, erreurs, navigation, interactions et composants utiles à une action réellement réalisable ; ajustements Figma et documentation synchronisés avec code/tests dans le même ensemble cohérent.
- **Preuves discriminantes :** E2E R1 concernés, QA PG/API/BROWSER/LIVE/REAL selon les effets, identité/données/lane/SHA, cas négatifs, continuation et couverture R2 traçable, sans confondre `NOT RUN` et `FAIL`.

**OUT :** refonte générale non motivée, second moteur d'autorité/effets, fonctionnalités ML5 Cursor, promotion STABLE/adoption et merge Git REAL sans mandat spécifique. L'UX indispensable à un parcours **n'est pas reportée par défaut à ML4D**.

**Réception intermédiaire ML4C :** fonctionnement conforme sur les parcours approuvés, contrats et propriétaires respectés, anomalies et réserves critiques traitées ou explicitement soumises à Morris ; cette réception n'est **pas** le Gate C final de convergence.

## 3. ML4D — convergence UX/UI globale

**Résultat Pilote :** une application entière, cockpit inclus, dont l'expérience, la hiérarchie, les parcours, les interfaces et le rendu sont cohérents avec les **références Figma validées applicables aux capacités construites ML1–ML4**, augmentées seulement des évolutions approuvées pendant ML4C.

**IN :** inventaire exhaustif des surfaces et états applicables (accès, portefeuille/tableau de bord, sas, création, projet, Nora/conversation, documents, pilotage, décisions, Git, inspection, paramètres et variantes) ; composants, navigation, rail et shell partagé, densité, typographie, couleurs, espaces, états vides/attente/erreur, responsive, accessibilité et utilisabilité ; ajustements UX nécessaires et vérification géométrique/visuelle Figma-runtime.

**Contrats hérités :** A1–A3, P1–P3 et F1/F2 demeurent applicables à leur portée ; rail personnel/projet/conversation/inspection = **246/246/240/244 CSS px** ; F2 vise delta géométrique 0, avec maximum 2 CSS px sur rectangles stables à conditions comparables. **Aucun seuil universel de diff image n'est validé** ; la calibration et la disponibilité des sources Figma natives restent à qualifier. Les transpositions G4 déclarées ne valent pas réception G5.

**OUT :** nouvelle fonctionnalité métier introduite sans arbitrage, réouverture systématique d'une logique fonctionnelle conforme, reprise d'une autorité D1–D9, réalisation d'écrans ML5 non encore implémentés comme s'ils étaient actifs. Les besoins fonctionnels découverts durant ML4D sont qualifiés, priorisés et soumis à Morris, plutôt que cachés dans une retouche graphique.

**Réception ML4D :** comparaison Figma/runtime datée par écran/état critique et par viewport comparable, preuve d'interaction, de navigation, de responsive/accessibilité et verdict Morris ; le nombre de frames transposées ne constitue pas un taux de conformité.

## 4. Séquence, gates et dépendances

`ML1–ML4 intégrés → ML4B diagnostic CP1 → Gate Morris B → CP2 contrat intégré ML4C+ML4D → GO technique distinct ML4C → ML4C réalisation et réception intermédiaire → GO technique distinct ML4D → ML4D réalisation et réception UX globale → Gate Morris C final → ML5 Cursor → R6`.

- **Gate B reste ouvert :** l'accord de Morris sur ce découpage et sur sa transcription Git **ne valide pas à lui seul** l'exhaustivité de CP1, ne clôture pas ML4B et ne donne pas le GO technique.
- **CP2 avant code :** cadrer conjointement la cible UX complète (y compris ML4D), les propriétaires, IN/OUT, contrats API/données/autorité, architecture candidate, interfaces, dépendances, risque, preuves, intégrateur et dette/exit ; fixer les cas Figma pertinents avant transposition.
- **ML4C puis ML4D :** ordre d'intégration nominal ; aucune fragmentation en micro-cycles par écran. Parallélisme de préparation seulement avec interfaces/fichiers maîtrisés, preuve et intégrateur commun.
- **Réception intermédiaire après ML4C :** contrôle des capacités et des écarts, puis décision Morris pour poursuivre ; ne se substitue pas au Gate C.
- **Gate C après ML4D :** acceptation du résultat complet fonctionnel et UX, arbitrage des réserves et prérequis ML5 ; aucun passage automatique à ML5.
- **CP4 / ML5 et R6 :** réalisation technique Cursor et qualification globale distinctes ; aucun `ADOPTED` anticipé.

## 5. Risques et sortie exigible

- **Gouvernance/autorité :** aucun effet sans autorisation applicable ; droits D1/D6/D9 relus au point d'effet ; échec, attente, refus, `UNKNOWN` et succès restent distingués.
- **Continuité :** effet confirmé conservé malgré perte de réponse ; reprise sans doublon et conversation indépendante possible lorsqu'un travail reste incertain.
- **Vérité :** réponse Nora reconstruite à partir de résultats observés, et non d'une hypothèse de succès ; distinguer cognition, résultat applicatif et tâche globale.
- **Cohérence UI :** ML4C n'introduit pas un design divergent sans contrat ; ML4D consolide toute la surface pertinente sans effacer la valeur fonctionnelle.
- **Preuve :** différencier `DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED` ; critères mesurables et suites/exit des réserves.
- **Dépendances :** [diagnostic CP1](../../construction/reconciliation-produit/README.md), [synthèse X-01..08](../../construction/reconciliation-produit/transversal/synthese-r1-e2e-gate-b.md), [qualification UX historique](../../construction/convergence-ux-parcours-pilote-nora/qualification.md) et [roadmap R5](../roadmap.md) servent de sources, non de référentiels concurrents.

## 6. Autorité et limites du présent GO

**Morris a validé l'orientation ML4C/ML4D et demandé sa mise à jour dans Git le 11 novembre 2026.** Les formulations détaillées ci-dessus constituent le cadrage de cette orientation ; les choix fins de capacité, de techniques, de priorité, de preuve et de dérogation demeurent à instruire au Gate B/CP2.

Publication documentaire sur branche candidate **uniquement**, sans interprétation d'un GO de PR, merge, mise à jour directe de `main`, Figma, Cursor, code, migration, release, adoption ou franchissement des gates. Les décisions précédentes restent conservées et consultables, l'orientation la plus récente prévalant uniquement pour le séquencement ML4C/ML4D.

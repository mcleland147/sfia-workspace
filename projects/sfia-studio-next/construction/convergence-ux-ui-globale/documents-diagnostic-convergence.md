# SFIA Studio Next — Ensemble 06
## Bibliothèque Documents — Diagnostic de convergence entre l'existant et la cible UX

**Version :** 0.1 — 19 novembre 2026
**Statut :** DOCUMENTED — DIAGNOSTIC D0 VALIDÉ EN CONTENU PAR MORRIS, PUBLIÉ SUR BRANCHE DOCUMENTAIRE CANDIDATE
**Autorité produit et UX :** Morris
**Dépôt :** `mcleland147/sfia-workspace`
**Référence de code examinée :** `main@d3d199adb782462b93467934f5f1e8a0c98fb492`
**Référence UX :** [Figma — Page 08, Documents](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=930-2) — parcours et direction visuelle validés par Morris le 19 novembre 2026.
**Branche documentaire :** `sfia/next-documents-convergence-20261119` (sans PR ni merge).
**Périmètre du GO :** publication du présent diagnostic uniquement ; aucune autre modification normative, technique ou Git.

**Limite d'observation :** analyse des fichiers Git distants et des maquettes Figma. Aucun environnement runtime, worktree Cursor ou test n'a été exécuté dans cette étape.

---

### 1. Résultat attendu

Faire converger les capacités documentaires déjà implémentées vers une expérience dans laquelle le Pilote peut :

1. Retrouver un document dans la Bibliothèque.
2. L'inspecter sans le modifier.
3. Retrouver ses versions, leur statut et leur provenance.
4. Comparer deux versions choisies librement.
5. Demander exclusivement à Nora une modification ou une révision.
6. Utiliser une version historique comme base, après avertissement et confirmation.
7. Conserver le résultat sous un **nouveau numéro de version**, sans écrasement.

La Bibliothèque demeure une capacité de l'**Ensemble 06**, dont l'autre capacité est le Journal V4. L'intégration globale est différée jusqu'à la qualification de l'ensemble complet.

### 2. Sources examinées

**Gouvernance et conception**
- `governance/SEF.md` — SEF v0.2.
- `governance/roadmap.md` — état courant Git, à réconcilier ultérieurement avec les avancées de l'Ensemble 06.
- `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md`.
- `conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md`.
- `ux-ui/espace-projet-interaction-pilote-nora.md`.
- `architecture-technique/cadrage-r4.md`.
- Figma Next, pages 03, 04, 05, 07 et nouvelle page 08.

Les chemins relatifs ci-dessus désignent des fichiers sous `projects/sfia-studio-next/`, à l'exception des maquettes Figma.

**Code actuel**
- `web/src/db/schema.ts`.
- `web/src/domains/document/service.ts`.
- `web/src/domains/conversation/document-act.ts`.
- `web/src/domains/conversation/document-command.ts`.
- `web/src/domains/conversation/d4-read-tools.ts`.
- `web/src/app/projects/[projectId]/page.tsx`.
- `web/src/components/figma/DocumentSurfaces.tsx`.
- `web/src/components/figma/TravailViewer.tsx`.
- Routes API des documents et révisions sous `web/src/app/api/preparations/[preparationId]/documents/`.

**Tests présents**
- `tests/integration/ml2-knowledge-documents.pg.test.ts`.
- `tests/unit/diff-ordered.test.ts`.
- `tests/unit/document-command.test.ts`.
- `tests/e2e/ml4c-document-continuity.spec.ts`.

Les chemins `web/` et `tests/` sont relatifs à `projects/sfia-studio-next/` et à son sous-dossier `web/` lorsque précisé. Ces fichiers constituent des preuves potentielles ou du code inspecté ; ils ne constituent pas une attestation de tests exécutés pendant cette revue.

### 3. Matrice de convergence

| ID | Capacité | Existant vérifié | Écart et disposition proposée |
|---|---|---|---|
| DOC-01 | Identité documentaire | Entité `documents`, propriétaire, projet/préparation, identité stable | **CONSERVER**. Ne pas créer de deuxième registre |
| DOC-02 | Versions persistées | `document_revisions`, `revisionNumber`, `baseRevisionId`, contenu et états de sauvegarde | **CONSERVER / ADAPTER** pour la filiation d'une révision historique |
| DOC-03 | Bibliothèque | `DocumentLibrary` liste les documents ; le clic appelle immédiatement l'ouverture en inspection | **ADAPTER** : clic = sélection ; fiche et actions dans le panneau droit 30 % |
| DOC-04 | Lecture | `DocumentInspector` et `SafeMarkdown` permettent la consultation | **ADAPTER** : lecture principale 70 %, actions à droite |
| DOC-05 | Édition manuelle | `DocumentInspector` affiche un `textarea` et un parcours de sauvegarde directe | **RETIRER DE L'UX CIBLE**. Conserver seulement les services nécessaires aux opérations autorisées |
| DOC-06 | Travail / visionneuse | `NoraConversation`, `TravailViewer` et `ProjectChrome` disposent déjà d'un mode partagé | **RÉUTILISER** le 50/50 actuel |
| DOC-07 | Transition Documents → Nora | Une visionneuse D4 ciblée existe, mais le retour générique au Travail ne garantit pas à lui seul l'ouverture du document sélectionné | **RACCORDER** identité documentaire, version précise et ouverture simultanée du fil/visionneuse |
| DOC-08 | Historique | `listDocumentRevisions` et `DocumentHistory` existent | **ADAPTER** : liste centrale 70 %, version sélectionnée et actions à droite |
| DOC-09 | Courante / Historique | Numéros de version et états techniques persistés ; pas de statut métier courant/historique dédié dans le schéma des révisions | **PROJETER** les tags depuis les données canoniques, avec gestion explicite des versions non disponibles |
| DOC-10 | Consultation d'une ancienne version | `getDocumentRevision` accepte un `revisionId` précis ; la lecture D4 ciblée existe | **RÉUTILISER / RACCORDER** au parcours Historique → Lecture |
| DOC-11 | Comparaison arbitraire | `compareDocumentRevisions` accepte deux identifiants de révision et retourne un diff ordonné | **CONSERVER** le service ; adapter la sélection et le rendu |
| DOC-12 | Comparaison UX | L'interface compare actuellement surtout les deux dernières versions disponibles et présente un résumé textuel | **ADAPTER** : menu initialement replié, deux sélecteurs, puis comparaison 50/50 |
| DOC-13 | Révision par Nora | Qualification documentaire et commandes D4 existent ; `resolveReviseTarget` privilégie la dernière révision | **ADAPTER** : prise en compte du document/version explicitement sélectionnés |
| DOC-14 | Révision historique | `reviseDocument` exige actuellement que la base soit la dernière révision disponible | **ÉCART FONCTIONNEL STRUCTURANT** : autoriser une base historique confirmée sans supprimer le contrôle de concurrence |
| DOC-15 | Provenance | `provenanceJson`, références de commandes et lecture D4 existent | **EXPLOITER** les informations réellement disponibles dans la vue « Sources / provenance » |
| DOC-16 | Erreurs et reprise | Droits, idempotence, `SAVING`, `AVAILABLE`, `UNKNOWN`, conflits et réconciliation disposent déjà de mécanismes | **PRÉSERVER / ÉTENDRE** au nouveau parcours sans simplification trompeuse |
| DOC-17 | Suppression d'anciennes versions | Pas de service ni de parcours de suppression documentaire historique identifié dans les sources examinées | **HORS PÉRIMÈTRE INITIAL** ; à qualifier avec conservation, audit, droits et références |
| DOC-18 | Publication Git | Gestion documentaire D4 distincte de l'intégration D9 | **PRÉSERVER**. Nouvelle version interne ≠ commit Git |

### 4. Règle fonctionnelle de versionnement validée

#### 4.1. Règle générale

Toute révision durable d'un document entraîne la création d'une **nouvelle version strictement supérieure au dernier numéro attribué à ce document**.

Le numéro de la nouvelle version ne dépend pas de la version choisie comme base de rédaction.

**Exemple A — Révision courante**

- Versions existantes : V1, V2, V3.
- Version utilisée comme base : V3.
- Résultat enregistré : **V4**.

**Exemple B — Révision historique**

- Versions existantes : V1, V2, V3.
- Version utilisée comme base : V2.
- Nora identifie V2 comme historique et signale que V3 existe.
- Le Pilote confirme vouloir repartir de V2.
- Nora prépare le nouveau contenu.
- Résultat enregistré : **V4**, avec traçabilité de la base V2.

V1, V2 et V3 restent inchangées et consultables.

#### 4.2. Information « courante / historique »

L'information doit être **déductible de manière fiable des données persistées** et accessible à Nora, sans dépendre d'un simple badge visuel.

**Proposition technique minimale :** ne pas introduire nécessairement un booléen mutable `isCurrent` sur chaque version. Le statut fonctionnel peut être calculé à partir de l'identité du document, de l'ordre durable des versions et de leur état réel de disponibilité.

Les statuts techniques `AVAILABLE`, `SAVING`, `FAILED` et `UNKNOWN` ne sont pas interchangeables avec les statuts fonctionnels `COURANTE` et `HISTORIQUE`. Une révision incertaine ou indisponible ne doit pas être présentée comme une nouvelle version utilisable.

Le mécanisme exact sera arrêté dans le contrat de réalisation, en évitant deux sources de vérité.

#### 4.3. Deux contrôles différents

Il faut distinguer :

1. **Choix historique volontaire** : le Pilote a connaissance de V3 et confirme utiliser V2 comme base de V4.
2. **Concurrence imprévue** : une autre révision a été enregistrée après la dernière vérification, avant la conservation de la proposition.

Le premier cas doit devenir possible. Le second doit rester protégé par une nouvelle qualification, une réconciliation ou une confirmation adaptée.

La modification ne doit pas contourner les protections existantes contre les écritures concurrentes, les duplications et les pertes d'accusé de réception.

#### 4.4. Numérotation et filiation

La prochaine version doit suivre un compteur monotone propre au document. Sa numérotation ne doit pas régresser si une version devient indisponible, masquée ou éventuellement supprimée plus tard.

La traçabilité doit permettre d'expliquer :

- Quelle version a servi de base à Nora.
- Quelle version était courante au moment de la confirmation.
- Quelle nouvelle version a réellement été enregistrée.
- Quelle demande et quelle opération ont produit cette révision.

Les éventuelles adaptations de schéma ou de provenance seront qualifiées à l'étape 2 ; aucun champ nouveau n'est imposé par ce diagnostic.

### 5. Frontières de responsabilité

| Responsable | Responsabilité attendue |
|---|---|
| **Pilote** | Sélectionner, consulter, demander, confirmer la base historique et autoriser la conservation de la nouvelle version |
| **Nora / D3** | Comprendre l'intention, identifier le document et la version, avertir des écarts, proposer la révision et expliquer son résultat |
| **D4** | Garantir identité, droits, contenu, filiation, numéro monotone, provenance, disponibilité, contrôle de concurrence et idempotence |
| **D6** | Conserver exclusivement son autorité sur les actes métier ; une révision documentaire ne modifie aucune HumanDecision par implication |
| **D9** | Gérer séparément les opérations Git autorisées |
| **Interface** | Présenter fidèlement les états issus de leurs propriétaires ; ne pas créer une autorité supplémentaire |

Aucun second chat, second moteur documentaire ou éditeur manuel ne doit être introduit.

### 6. Suppression éventuelle d'anciennes versions

Morris a évoqué la possibilité future de demander à Nora de supprimer V1, V2 ou V3 lorsque V4 est satisfaisante.

Cette possibilité **n'est pas assimilée à la règle de révision** et ne doit pas être implémentée implicitement.

À qualifier séparément :

- Suppression physique, retrait de visibilité ou archivage logique.
- Droits, demande explicite et confirmation du Pilote.
- Conservation de l'historique des opérations et des preuves nécessaires.
- Impact sur les références et les liens de provenance.
- Protection de la numérotation monotone.
- Possibilité de récupération ou limites d'irréversibilité.

**Disposition proposée :** ne pas faire de la suppression un prérequis de la Bibliothèque Documents. L'instruire seulement si Morris confirme son inclusion dans le macro-lot ou dans une capacité ultérieure.

### 7. Parcours d'acceptation à préparer

| Scénario | Résultat attendu |
|---|---|
| DOC-UAT-01 | Sélectionner un document affiche sa fiche à droite sans ouverture immédiate |
| DOC-UAT-02 | Ouvrir un document affiche le contenu principal et les actions dans les proportions validées |
| DOC-UAT-03 | Demander une révision ouvre Travail avec Nora et la visionneuse du bon document |
| DOC-UAT-04 | Aucune modification manuelle n'est possible dans le parcours documentaire |
| DOC-UAT-05 | L'historique identifie distinctement la version courante et les versions historiques |
| DOC-UAT-06 | La sélection d'une ancienne version permet de la lire sans modifier l'état courant |
| DOC-UAT-07 | Le comparateur est initialement replié ; l'utilisateur choisit librement V1/V3 ou V2/V3 |
| DOC-UAT-08 | Nora avertit de l'existence de V3 quand le Pilote sélectionne V2 comme base |
| DOC-UAT-09 | La révision confirmée de V2 produit V4 et préserve V1, V2 et V3 |
| DOC-UAT-10 | Une modification concurrente bloque toute conservation silencieuse non requalifiée |
| DOC-UAT-11 | Une sauvegarde incertaine ou un ACK perdu ne produit ni faux succès ni doublon |
| DOC-UAT-12 | Une lecture refusée ou une provenance indisponible n'est jamais simulée comme autorisée |
| DOC-UAT-13 | Une version interne conservée n'est jamais présentée comme publiée sur Git sans preuve D9 |

Ces scénarios constituent des **critères candidats de recette**, à finaliser dans le contrat de l'étape 2.

### 8. Impacts et dépendances

**Interface :** `DocumentSurfaces.tsx`, page Projet, transitions Documents/Travail, états de sélection, historique et comparaison.

**D3 / Nora :** qualification d'intention, résolution du document et de la version, confirmation du choix historique, génération de proposition et continuité du contexte.

**D4 / API :** `reviseDocument`, lecture des révisions, commande documentaire, provenance, contrôles de concurrence, versionnement monotone.

**Données :** réutilisation du schéma existant par défaut ; migration uniquement si l'étude du contrat démontre un besoin réel.

**Sécurité et gouvernance :** accès au document exact, refus explicites, idempotence, absence de mutation D6, absence de publication Git implicite.

**Tests :** mise à jour des tests unitaires, PostgreSQL et navigateur existants ; nouveaux scénarios ciblés pour V2 → V4, concurrence, comparaison et navigation.

**Dépendance Ensemble 06 :** préserver le Journal V4 accepté avec réserves et préparer une qualification consolidée des deux capacités. Pas de Gate C, STABLE, RELEASE ou ADOPTED anticipé.

### 9. Risques prioritaires

**Risque 1 — Régression transactionnelle.** Autoriser une base historique ne doit pas supprimer le verrouillage concurrent, les clés de corrélation ni la réconciliation.

**Risque 2 — Confusion entre statut et numérotation.** Une version `SAVING` ou `UNKNOWN` ne vaut pas version courante utilisable ; les numéros attribués ne doivent pas être réutilisés.

**Risque 3 — Contexte Nora ambigu.** La référence doit inclure au minimum l'identité documentaire et la révision concernée. Le simple titre ou la dernière version par défaut peut être insuffisant.

**Risque 4 — UX parallèle.** Conserver l'éditeur manuel actif contredirait le parcours validé et créerait une deuxième voie de mutation.

**Risque 5 — Suppression prématurée.** Effacer des versions avant la définition des règles de rétention pourrait détruire les références et les preuves.

### 10. Verdict et passage à l'étape 2

**Verdict de réconciliation : CONVERGENCE POSSIBLE SUR LE SOCLE EXISTANT — ADAPTATIONS FONCTIONNELLES ET UX NÉCESSAIRES.**

Le socle D4, les API de lecture et de comparaison, ainsi que la visionneuse Travail, constituent des acquis réutilisables.

Le chantier de réalisation doit se concentrer sur :

1. La nouvelle disposition Bibliothèque / Lecture / Historique / Comparaison.
2. Le raccord fiable Documents → Travail avec Nora.
3. La suppression de l'édition manuelle dans le parcours cible.
4. La révision explicitement fondée sur une version historique.
5. Le versionnement monotone et la protection des écritures.
6. L'intégration, les tests et la documentation synchronisés.

**Étape suivante :** contrat de réalisation Documents, associant fonctionnel, UX, responsabilités D3/D4, impacts techniques, erreurs, critères de recette et preuves.

**Statut de sortie de l'étape 1 :** diagnostic documenté et validé en contenu par Morris ; publication Git sur branche candidate seulement. Aucun code modifié, aucun test nouveau exécuté, aucun gate d'intégration obtenu.

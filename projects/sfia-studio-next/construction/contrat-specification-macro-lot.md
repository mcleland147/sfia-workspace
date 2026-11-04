# SFIA Studio Next — R5 · Modèle de spécification technique d'un macro-lot

> **État Git au versement (2026-11-04) :** publication documentaire candidate sur `docs/next-r5-delivery-preparation-20261104`, base `main@a0b80b9ecd64149ed51f87235ae246e197e66462`. Ni `VALIDATED SPEC`, ni merge, ni GO Cursor. Les formules `NOT ON GIT` et `NO GIT WRITE` dans les historiques décrivent leur état à la rédaction, pas cette publication.


**Version :** proposition D0 / v0.2 — 2026-11-04  
**Statut :** `DRAFT — NOT VALIDATED / GIT CANDIDATE NON MERGÉ`  
**Nature :** modèle documentaire de spécification, **pas** un template d'exécution Cursor SFIA v2.6.  
**Usage :** instancier seulement lors de la qualification d'un macro-lot réellement ouvert ; un document principal, évolutif, produit avec code, tests et preuves. Ne pas créer de cinq fichiers vides.

## En-tête et traçabilité du contrat

| Champ | Valeur à instruire |
|---|---|
| Macro-lot / résultat Pilote | Identifiant de delivery et libellé par capacité, non nom de code |
| Statut de conception / réalisation | `DOCUMENTED`, `VALIDATED SPEC`, `IMPLEMENTED`, `COVERAGE VERIFIED`, `BEHAVIOR PROVEN`, `ADOPTED` selon preuve |
| Autorité / décision | Responsable d'intégration, validations Morris, référence aux décisions Git |
| Baseline | Repo, branche, HEAD SHA, base, source R1–R4 + versions |
| Dépendances | Macro-lots en amont/aval, dépendances runtime, interfaces propriétaires |
| UX | `APPLICABLE` : liste Figma + snapshot/contrat ; ou `N/A` motivé |
| QA et preuves | QA R4 ciblés, nouveaux cas, seuils d'acceptation et niveau de preuve |
| Git/env | Portée branches/fichiers, ENV-01/lane, rollback, risques d'effet externe |
| Réserves / dette | Réserve d'origine, impact, propriétaire, échéance/condition de sortie |

## 1. Capacité, résultats observables et périmètre

- Résultat concret du Pilote (action/état/utilité visible), critères de réussite et valeur suivante rendue possible.
- Scénarios E2E R1 servis ; domaines D1–D9 impliqués.
- IN / OUT ; contraintes non négociables et effets explicitement interdits.
- Dépendances techniques et décisionnelles ; frontières de responsabilité et source unique de vérité.

## 2. Rattachement canonique et matrice de couverture

| Fonctionnalité / contrat R5 | E2E R1 | RG/PF/CKI R2 | R3 frames/variantes/contrat ou N/A | R4 ADR/section/invariant | QA R4 + compléments | Owner / statut / gap |
|---|---|---|---|---|---|---|
| `À QUALIFIER` | — | — | — | — | — | `NOT ANALYZED` |

- Chaque référence porte chemin, identifiant canonique et ref/version ; Figma doit porter node-id, page et snapshot daté.
- Les cardinalités plusieurs-à-plusieurs sont documentées. La table **ne remplace pas** le corpus des RG/PF et ne copie pas leur texte.
- La couverture négative est explicite (`OUT`, `NOT APPLICABLE`, `DEFERRED WITH EXIT`, `GAP`) ; pas de « conforme R2 » générique sans références.
- Toute divergence entre sources R1–R4 ou conflit entre besoins est qualifiée avant code ; arbitrage Morris pour un changement de contrat validé.

## 3. Spécifications techniques par fonctionnalité

Répéter une sous-section **par résultat fonctionnel cohérent**, non par bouton ou par classe.

### 3.x. [Nom de fonctionnalité défini par responsabilité]

1. **Contrat fonctionnel consommé** : RG/PF, états et parcours/variantes, préconditions, postconditions, contraintes de droits, cas négatifs et exceptions.
2. **Responsabilité technique** : composant propriétaire, consommateurs, frontières internes, interface avec D1–D9, absence de propriétaire concurrent.
3. **Contrats d'entrée/sortie** : commandes, requêtes, événements ou ressources nécessaires, versionnement, erreurs, invariants, limites ; ne choisir les noms définitifs qu'après qualification.
4. **Données et transactions** : identités, relations, contraintes d'unicité, modèles logiques/physiques, cycle de vie, migrations, concurrence, atomicité, stockage et réhydratation ; PostgreSQL et V-A dans le cadre ADR applicable.
5. **Autorisations et sécurité** : identité session, propriétaire et accès, décision humaine, mandat/version, permissions outil/Git, gestion des secrets, audit expurgé, frontière cognitive/effet.
6. **Échecs et reprise** : refus, STOP, UNKNOWN, timeout, double envoi, interruption, redémarrage, idempotence, réconciliation, effet externe partiel, dette/exit.
7. **Intégrations** : contrats avec Nora, GitHub et/ou Cursor uniquement si utilisés ; permissions observables, provenance, disponibilité, limites et tests réels adaptés ; pas de mutation par simple récit du modèle.
8. **Critères d'acceptation** : assertions positives/négatives et valeur observable, traçables aux RG/PF/QA.
9. **Blast radius** : code/API/données/autorité/UX/sécurité/tests/contrats consommateurs affectés, régression et migrations.

### 3.x.UX. Transposition R3 — préparation par références, extraction native au bon moment

| Champ | Contrat à remplir avant code UX |
|---|---|
| Source native | Figma `fileKey`, page, frame `node-id`, capture/snapshot de référence, date |
| Portée | Écrans/variantes/états du macro-lot, frames liées, composants réutilisables, parcours UX |
| Mesure | **À exécuter par Cursor pendant la construction UX, avant le code concerné** : descendants utiles, ID/parent, géométrie, auto-layout, contraintes, styles, typographies, variables/tokens et breakpoints ; pas de pré-extraction globale |
| Comportement | Actions R2, navigation/états, chargement, refus, source indisponible, STOP/reprise, mobile |
| Accessibilité | Focus, clavier, zoom, reflow, contraste, reduced-motion, lecteur d'écran selon contrat R3 |
| Plan de confrontation | Vue navigateur à SHA candidat, viewport, métriques DOM, screenshots/diffs et écarts documentés |
| Arbitrages | Rail **desktop** 240/246 px non bloquant en préparation ; comparer pendant la construction du composant. Tokens/seuils non ratifiés, différence structurante à arbitrer |

**Une frame n'est pas une page indépendante à recoder.** Les 223 références sont des cas de composition, d'états et de revue ; les dimensions des descendants utiles non encore extraites doivent être obtenues nativement avant implémentation. Cursor n'invente pas les valeurs manquantes.

### 3.x.NA. Justification d'absence d'UX

`R3: N/A`, précisant surfaces non affectées et absence d'effet visible ; contrôle de non-régression si une interface existante consomme malgré tout le contrat technique.

## 4. Matrice QA et protocole de preuve

| Test ID / oracle | R1/R2/R3/R4 concerné | Données / acteur / état initial | Action et résultat attendu | Niveau et environnement | Test réel / run / SHA / preuve | Verdict / réserve |
|---|---|---|---|---|---|---|
| `À QUALIFIER` | — | — | — | `DESIGN ONLY` | — | `NOT EXECUTED` |

- Importer les **liens** aux 84 cas QA R4 (A16/B18/C24/D26) pertinents et qualifier leurs **oracles** ; ajouter les scénarios nécessaires sans second corpus RG/PF. Les scripts, données de test, fixtures et assertions concrètes sont construits avec les interfaces et l’environnement réellement implémentés.
- Tests unitaires, contractuels, DB, intégration, navigateur, sécurité, visuels, cognitif LIVE et exécution REAL : choisir selon le risque réel et les capacités **réellement disponibles dans la lane** ; expliciter les limites. Aucune rédaction prématurée d’un test dépendant d’une API non choisie.
- Distinction impérative : plan de test ≠ test implémenté ≠ test exécuté ≠ comportement prouvé ≠ ADOPTED.
- Les oracles examinent les vérités chez leurs propriétaires, pas seulement les libellés UI ou le texte de Nora.
- Les tests d'effet réel s'exécutent dans un périmètre isolé et autorisé. Aucune prétention à l'arrêt réel de Cursor ou à l'absence d'effet sans observation.

## 5. Plan d'implémentation intégré, sans micro-cycles

- Décomposer en travaux cohérents qui produisent conjointement fonctionnalité, QA, UX et documentation ; assigner intégrateur.
- Définir interfaces stables et sous-travaux parallélisables **seulement si** les risques et chemins/fichiers sont maîtrisés.
- Fixer prérequis, séquence d'intégration, blast radius, flags ou migration si réellement nécessaires, tests/revue communs.
- SFIA v2.6 : prompt instancié depuis les fichiers officiels Git **uniquement après** pré-check et GO Morris ; vérifier ENV-01.

## 6. Livraison DEV → RECETTE → STABLE (ENV-01)

- DEV : branche autorisée, environnement et base propres, tests répétés sans toucher RECETTE/STABLE.
- RECETTE : SHA immutable, build déterministe, base/fixtures et identité propres, scénarios passés/échoués, captures et rapport Morris.
- Anomalie : expected/observed, SHA et preuves ; retour DEV, nouveau SHA et retest ciblé/non-régression.
- PR/merge : gate Morris distinct, contrôle de divergence et intégration `main` ; vérification post-merge.
- STABLE : promotion séparément autorisée et testée, rollback tenant compte des migrations/données ; aucune adoption par défaut.

## 7. Réalisation, preuves et écarts (à compléter pendant le lot)

| Fonction / changement | Fichier/API/migration/commit SHA | Contrat et test associé | Observations et limitations | Statut revendicable |
|---|---|---|---|---|
| `À VENIR` | — | — | — | `NOT IMPLEMENTED` |

Revue des divergences code/doc, réserves `KNOWN GAP`, impact et propriétaire, conditions d'exit. Synchroniser ce document avec le code/tests **dans le même macro-lot**. Documenter une architecture effectivement implémentée (et non celle seulement envisagée) selon SEF et sources Next applicables.

## 8. Gate de sortie du macro-lot

- Critères d'acceptation issus des contrats R1–R4 remplis ou réserves motivées et acceptées au bon gate.
- Traçabilité bidirectionnelle à jour ; UX transposée/observée si applicable ; intégration DB/sécurité/autorité et non-régression prouvées dans la portée revendiquée.
- Code/tests/preuves à SHA vérifié, niveau exact (`COVERAGE VERIFIED`, `BEHAVIOR PROVEN` si prouvé), Review Pack et handoff SFIA v2.6 lorsque requis.
- Dépendance suivante servie, dette/exit et risques ouverts clairement transférés, Roadmap synchronisée sous mandat.
- GO Morris de merge/promotion/adoption distinct ; **ne jamais déclarer `ADOPTED` par simple clôture de macro-lot.**

---

**Verdict modèle documentaire v0.2 :** `DRAFT FOR MORRIS REVIEW / INSTANTIATED FOR ML1 AS CANDIDATE / NO CURSOR PROMPT / NO GIT WRITE`.
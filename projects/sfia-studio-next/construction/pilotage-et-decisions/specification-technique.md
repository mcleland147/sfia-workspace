# SFIA Studio Next — R5 / ML3
## Spécification technique candidate — Piloter et décider

**Version :** v0.2 — 2026-11-06 (Europe/Paris)  
**Statut :** DOCUMENTED / D0 — CANDIDATE FOR REVIEW — NOT VALIDATED SPEC  
**Source Git vérifiée :** mcleland147/sfia-workspace, main@ab18316b9c1e849ff557f4ba561c638e9961bb89  
**Branche documentaire :** docs/next-pilotage-decisions-cadrage-20261105, candidate distincte de main  
**Cadrage associé :** construction/pilotage-et-decisions/cadrage-lancement.md  
**Autorité :** Morris — arbitrages, validation de contenu et gates ; ChatGPT — conception et revue ; Cursor — construction sous SFIA v2.6 avec mandat distinct  
**État réel :** D5/D6 N/A — NON IMPLÉMENTÉ ; état Git local et runtime présents NON OBSERVÉS

> **Arbitrage Morris confirmé dans la conversation du 2026-11-06 :** option A — transition combinée atomique pour les effets D5/D6 exclusivement internes à Studio ; effets de clôture et d'ouverture distinctement observables ; effets réellement séparés et résultats partiels traités conditionnellement. Cet arbitrage précise le contrat technique R5. Il ne modifie pas les règles fonctionnelles R2 et ne vaut ni VALIDATED SPEC globale, ni GO Cursor/Git supplémentaire, ni preuve d'implémentation.

## 1. Résultat Pilote, parcours et périmètre

Dans son projet et le même fil Nora continu, le Pilote peut envisager et réviser une trajectoire, ouvrir ou terminer un cycle sur GO humain applicable, bénéficier de la guidance du CKI principal du cycle, choisir ou laisser absente une méthode durable, conserver et réviser ses décisions, suspensions et restrictions, puis retrouver l'état réel après interruption.

**Parcours fil rouge :** projet existant → proposition de trajectoire sans activation → GO humain clair → D6 qualifie l'autorité → D5 ouvre un seul cycle réel → Nora utilise, si effectivement accessible, le CKI pertinent → D4 restitue acquis et points ouverts → décision ou suspension gouvernée → clôture / transition / réorientation → reconnexion au même projet et fil → état actuel confirmé.

**IN :** D5 trajectoire/cycles/méthode/CKI ; D6 HumanDecisions, validité, suspensions, révocations et levées ; raccordement D3 et D4 ; données transactionnelles PostgreSQL, sécurité et reprises, UX lot B R3, tests QA B, observabilité et documentation courante.

**OUT :** déclenchement Cursor et contrats d'exécution D7, preuves et conformité D8, mutations Git D9, workflow obligatoire par CKI, automatisation des décisions humaines, R6, STABLE ou ADOPTED.

**Frontière produit :** sans cycle ni méthode, Nora reste pleinement utilisable pour les travaux cognitifs. Proposition, guidance, estimation de maturité et contenu cité ne constituent jamais une décision ou un changement d'état.

## 2. Hiérarchie des sources et traçabilité

- **R1 :** cadrage/vision-produit.md et scénarios E2E relatifs à la conduite de projet, au pilotage et aux décisions.
- **R2 D5 :** conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md — RG-TRJ-001..040, PF-TRJ-01..30.
- **R2 D6 :** conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md — RG-GOV-001..037, PF-GOV-01..29 et compléments applicables.
- **R2 interfaces :** D3 contexte-et-conduite-gouvernee-de-nora.md ; D4 connaissance-sujets-et-continuite-du-projet.md.
- **CKI :** cki/README.md, quinze fiches validées en contenu et relations-methodologiques-cki.md (50 relations informatives), sans présomption de chargement runtime.
- **R3 :** ux-ui/audit-couverture-ux-r3.md §7 (lot B), ux-ui/contrat-transposition-figma-code.md ; Figma fileKey itgvCulInEnFY6DvgIegvP. Nœuds référencés dans le §8 ; Figma native non inspectée dans cette qualification D0.
- **R4 :** architecture-technique/cadrage-r4.md §5.5, ADR R4-01 à R4-04, QA B01..B18, DATA-01.
- **R5 :** construction/contrat-specification-macro-lot.md et construction/reference-delivery-r5.md ; as-built ML1/ML2 comme contraintes de compatibilité.
- **Gouvernance :** governance/SEF.md, governance/roadmap.md et governance/decisions/.

Le contrôle exhaustif individuel des RG/PF vers les contrats et tests n'est **pas encore terminé**. Les rattachements ci-dessous identifient les familles, non une déclaration de couverture vérifiée. L'en-tête de la Roadmap sur main mentionne encore #659 ouverte : **KNOWN GAP historique**, Git/merge vérifiés priment. Synchronisation ultérieure seulement sous mandat.

## 3. Architecture de capacité — un propriétaire par vérité

| Responsabilité | Possède | N'empiète pas sur |
| --- | --- | --- |
| D1/D2 | Session authentifiée, propriétaire du projet, sas et continuité | Décision, GO ou cycle |
| D3 | Message originel, qualification de l'intention, réponse Nora et contexte conversationnel | Décision opposable, permission, état réel de cycle |
| D4 | Sujets, Acquis, Documents, Points ouverts, provenance | Deuxième registre D5/D6 |
| D5 | Trajectoire, cycles et transitions, méthode applicable et CKI principal associé | Source de décision humaine |
| D6 | Validité et historique des actes humains, portée, restrictions, suspensions, levées | Deuxième état de cycle ou exécution D7/D9 |
| UX | Représentation des lectures propriétaires et commandes du Pilote | Autorité par animation ou navigation |

**Orientation ratifiée R4 :** application web modulaire et une source transactionnelle PostgreSQL. D5 et D6 restent propriétaires logiques séparés au sein de la même application/base ; aucune deuxième base décisionnelle, moteur de workflow universel ou service distribué requis.

Le code Git main observé contient D1–D4, les tables et commandes ML1/ML2 et schemaRevision 006_ml2_turn_owner_token. Aucun service ni table D5/D6 n'est observé. Les mécanismes de commande de tour D3/ML2 peuvent fournir des références de provenance, mais **ne prouvent pas** l'idempotence ou l'autorité métier de D5/D6.

## 4. Contrat des opérations gouvernées

### 4.1. Commandes métier candidates, sans signatures API figées

| Action | Préconditions | Postconditions D5/D6 |
| --- | --- | --- |
| Ouvrir un cycle | Pilote autorisé ; GO applicable ; projet, type reconnu et finalité explicites ; aucun actif concurrent | D6 acte applicable et D5 unique cycle ACTIVE confirmés |
| Clore un cycle | GO applicable ; cycle identifié ACTIVE et version actuelle ; restrictions respectées | D5 CLOSED, bilan et réserves conservés ; aucune adoption induite |
| Transition combinée | GO couvrant clôture A + ouverture B ; A ACTIVE/version courante, B cohérent, restrictions vérifiées | Un seul commit pour D6 et les deux effets D5, ou aucune mutation |
| Retenir/réviser la trajectoire | Décision si portée durable ; version et dépendances contrôlées | Proposition / retenu / effectif distincts, historique sans rétroactivité |
| Retenir/réviser la méthode | D6 choix compétent ; référence/version/portée identifiables | D5 méthode ABSENTE ou référence retenue versionnée |
| Suspendre / révoquer / lever | Acte compétent ; cible et portée claires | D6 restriction applicable ou levée ; pas de reprise technique automatiquement déclenchée |

### 4.2. Informations minimales d'une commande

**Contrat logique (non DTO final) :** identifiant stable ; clé idempotente ; empreinte des paramètres déterminants ; projet cible ; acteur issu de session serveur ; référence au message humain D3 ou à une interaction directe UI ; catégorie d'acte ; cible/cycle source et révision attendue ; type/finalité cible ; révision de pilotage attendue ; GO D6 applicable ou éléments nécessaires à sa création atomique ; références de bilan et réserves réelles.

D3 propose la qualification sémantique mais n'autorise pas. D6 vérifie l'acte originel et l'auteur/objet/portée ; D5 contrôle l'état et réalise l'effet. Identifiants envoyés par le client, citations D4, sorties Nora et anciens résumés ne constituent pas des preuves suffisantes.

Un GO conversationnel authentifié, clair et contextualisé ne nécessite pas de second clic systématique. En cas d'ambiguïté matérielle, demander seulement la clarification déterminante et ne pas muter.

### 4.3. Contrat de réponse

Les retours distinguent au minimum : APPLIED (effet confirmé), ALREADY_APPLIED (rejeu cohérent), REJECTED (condition ou autorité manquante), CONFLICT (version/cible/empreinte), UNKNOWN (issue à réconcilier), et PARTIAL **uniquement si les effets sont réellement séparés**. Ces libellés sont des catégories conceptuelles, pas des codes publics adoptés.

Une ancienne commande réussie reste un fait historique même si la restriction ou le cycle courant a changé depuis. Sa relecture n'autorise pas de nouveau changement d'état.

## 5. Transaction D5/D6 et intégrité

### 5.1. Invariants

1. **Un seul cycle ACTIVE maximum par projet**, garanti aussi par PostgreSQL contre les interleavings concurrents.
2. **Origine humaine vérifiable et compétence D6 actuelle** pour toute transition, avec projet, cible et portée.
3. **Restrictions au point d'effet** : relire dans la même frontière de cohérence la compétence, le contexte et les suspensions applicables.
4. **Atomique en interne** : pour un GO combiné 100 % interne, clôture A + ouverture B + enregistrement D6 et résultat de commande requis = un commit ou zéro mutation.
5. **Idempotence métier** : même clé/empreinte = retour de l'issue conservée, sans effet supplémentaire ; clé identique/empreinte différente = conflit.
6. **Historique non destructif** : la clôture ne réécrit ni cycles ni décisions antérieurs.
7. **Succès confirmé** : une phrase de Nora, un clic ou une requête acceptée ne prouvent jamais un commit.
8. **Aucune promotion induite** : clôture ≠ conformité D8, acceptation métier, GO Cursor/Git ou ADOPTED.

### 5.2. Séquence de transition combinée

Exemple Pilote : « Clôture le cadrage et ouvre l'architecture ».

1. Conserver l'origine de demande dans D3 ; qualifier l'intention, sans confondre texte du modèle et acte humain.
2. Valider assez de contexte projet/type/finalité pour permettre le traitement ; clarifier avant transaction si nécessaire.
3. Débuter une transaction PostgreSQL courte, avec une frontière de sérialisation par projet partagée par les mutations D5 et les restrictions D6 pertinentes.
4. Rechercher la commande idempotente, comparer l'empreinte et retourner l'état déjà produit si applicable.
5. Relire droits/projet, version, cycle source, restrictions, suspension et validité de la cible ; vérifier le catalogue de types.
6. Qualifier et conserver l'acte humain D6 ou réutiliser sa référence opposable existante.
7. Enregistrer chez D5 la clôture A et l'ouverture B, leurs références de décision et deux faits métier identifiables.
8. Enregistrer l'issue durable de commande dans la même transaction.
9. Commit unique ; si une condition échoue, rollback intégral des écritures internes.
10. Restituer l'issue effectivement confirmée. Si l'ACK est perdu ou indéterminé, réconcilier par identité de commande avant toute nouvelle tentative.

Ni appel LLM, ni chargement CKI distant, ni écriture Git, ni tentative Cursor ne doit être inclus dans la transaction PostgreSQL du noyau D5/D6.

Le message du Pilote peut demeurer durable dans D3 même si le commit D5/D6 échoue : la présence de la phrase n'équivaut pas à une transition accomplie.

### 5.3. Concurrence, restrictions et sérialisation

Une frontière de sérialisation par projet est **proposée** pour ordonner transitions D5 et mutations D6 qui les interdisent. Les changements de restriction et les effets concernés doivent être coordonnés, pas vérifiés sur un ancien snapshot en ignorant une suspension concurrente.

- Si la suspension D6 est appliquée avant la transition, cette dernière est refusée dans sa portée.
- Si la transition est committée avant la suspension, son fait historique reste vrai ; la suspension bloque les nouveaux effets concernés.
- La levée d'une suspension ne relance jamais une transition ou une opération D7/Git automatiquement.

Implémentation candidate : verrou de cohérence court sur un état de projet, versions optimistes et index partiel d'unicité de projet pour ACTIVE. **La DDL, la stratégie d'isolation et les éventuelles contraintes différées restent à spécifier et tester**, notamment pour le passage A ACTIVE → A CLOSED / B ACTIVE.

## 6. Modèle relationnel conceptuel

| Famille de données | Informations et références | Obligation |
| --- | --- | --- |
| Pilotage courant du projet | Projet, version de cohérence | Sérialisation et comparaison d'état |
| Cycles | Identité, projet, type, finalité, état, révision, dates, CKI principal/référence D6 | Unicité ACTIVE, fermeture historique |
| Décisions D6 | Pilote, projet, source humaine, objet, portée, validité, état et évolutions | Aucun transfert d'autorité entre projets |
| Commandes métier | Clé idempotente, empreinte, état, résultat, références d'effets | Retry sans second effet |
| Histoire des transitions | Référence commande/GO, identité des effets clôture/ouverture | Audit sans deuxième vérité d'état |
| Suspensions et restrictions | Cible, type, portée, origine humaine, levée et applicabilité | Opposables après reconnexion |
| Méthode applicable | ABSENTE ou référence/version, provenance et dates d'effet | Choix volontaire et non rétroactif |
| Catalogue CKI | Type, CKI, version/provenance et disponibilité | Un seul CKI principal par cycle ACTIVE |

Les noms des familles ne fixent pas le nombre de tables. La contrainte d'unicité partielle sur un cycle ACTIVE par projet est une **recommandation R5** à traduire en migration D3 par Cursor, pas un mécanisme prouvé.

Les références interprojets doivent être rejetées au niveau des contrats de service et défendues par intégrité relationnelle lorsque pertinent.

## 7. Trajectoire, méthode, CKI et maturité

- **Trajectoire :** proposition ≠ orientation retenue ≠ cycles effectifs ; réorienter n'altère pas les faits historiques.
- **Méthode :** ABSENTE possible ; choix durable décidé par le Pilote, historisé avec portée/version, sans import automatique d'une nouvelle publication.
- **CKI :** 1 type de cycle actif → 1 CKI principal ; aucune activation hors cycle, aucun deuxième CKI lors d'une digression. Guidance seulement, pas gate ou mandat. Version effectivement utilisée et provenance doivent être retrouvables.
- **Indisponibilité :** ne pas déclarer guidance appliquée si le contenu n'a pas été réellement obtenu ; Nora générale reste utilisable et signale la limite pertinente.
- **Maturité :** analyse qualitative argumentée par Nora, sans score global automatique ni clôture imposée. D4 reste propriétaire des acquis, D6 des actes.
- **Politique ouverte :** résolution de version CKI à l'ouverture, changement de version pendant le cycle et contrôle de disponibilité au point d'usage seront qualifiés avant validation finale.

## 8. Contrat UX R3 — surfaces et états

**Source :** ux-ui/audit-couverture-ux-r3.md §7 ; ux-ui/contrat-transposition-figma-code.md ; Figma fileKey itgvCulInEnFY6DvgIegvP. Les nœuds sont des références Git R3 ; lecture native Figma et runtime BROWSER actuels NON OBSERVÉS.

| Besoin UX | Figma node-id | Véracité exigée |
| --- | --- | --- |
| Cycle proposé | 127:35 | Proposition D3/D5 ≠ ouverture |
| Ouverture en attente | 143:305 | GO reçu ≠ effet confirmé |
| Cycle actif / CKI | 127:106 | D5 ACTIVE réel et CKI effectivement accessible |
| Clôture en attente | 143:376 | GO ≠ CLOSED |
| Transition combinée confirmée | 131:156 | Clôture A + ouverture B effectivement confirmées |
| Effet non confirmé | 143:447 | Issue non déterminée ; réconciliation nécessaire |
| Effet partiel | 129:215 | Seulement si des effets durables réellement séparés sont constatés |
| Demande déjà traitée | 143:589 | Rejeu sans duplication |
| Reprise du projet | 143:518 | D5/D6 relus, même fil D3 |
| Journal Décisions | 129:72 | Projection D6, non registre dupliqué |
| Suspension active / levée | 128:195 / 128:266 | D6 opposable / levée compétente et non relance technique |

Transposition ciblée au moment de la construction : propriétés Figma natives, composants partagés, états d'erreur, dimensions 1680/1280/390/320 px, clavier, focus, zoom, reflow et captures navigateur au SHA candidat. Aucun succès du prototype n'est traité comme succès serveur.

## 9. Contrat QA et preuves attendues

| Oracle | Références R2 et QA R4 | Preuve requise |
| --- | --- | --- |
| GO conversationnel clair | RG-TRJ-009/015, RG-GOV-002/005/029 ; B03 | D6 + D5 cohérents et navigateur authentifié |
| GO ambigu ou cité | RG-GOV-004/006 ; PF-TRJ-05 ; B04 | Pas de mutation, clarification |
| Concurrence | RG-TRJ-008/011/016 ; PF-TRJ-17 ; B05 | Deux connexions PG, au plus un ACTIVE |
| Retry / ACK perdu | RG-TRJ-015/016 ; PF-TRJ-18 ; B06 | Lecture durable sans seconde transition |
| Combiné atomique | RG-TRJ-012/014 ; PF-GOV-05 ; B07 | Deux effets committés ou aucun |
| Panne entre les effets | RG-TRJ-014/015 ; complément B07 | Injection d'échec PG, rollback des deux mutations |
| Suspension concurrente | RG-GOV-017/020/022 ; B14/B16 | Ordre de commit, nouveau contrôle au point d'effet |
| Historique / Journal | RG-GOV-009/010 ; B17 | Propriété D6, histoire non réécrite |
| Navigation | RG-GOV-005, RG-TRJ-009 ; B18 | Aucune mutation en retour au fil |
| Effet durable séparé | PF-TRJ-16 | **CONDITIONNEL** ; test sur frontière réelle, jamais simulation d'un partiel interne atomique |

Niveaux : déterministe, intégration PostgreSQL/concurrence, redémarrage/reprise, navigateur authentifié, Nora LIVE ciblée pour guidance/intention, cas adversariaux et isolation interprojets. Les scripts de test devront préciser acteur, préconditions, données, assertions propriétaire, environnement, SHA et preuve réelle.

**Tous les tests ML3 sont NOT EXECUTED**. La matrice de traçabilité exhaustive R2 → R3 → R4 → R5 sera complétée avant validation de la spécification globale.

## 10. Erreurs et réconciliation

| Événement | Comportement contractuel |
| --- | --- |
| GO ambigu, texte externe ou autorité absente | Clarification/refus, zéro mutation |
| Restriction D6 applicable | Refus ciblé sans bloquer cognition indépendante |
| Version obsolète ou cycle concurrent | Conflit puis lecture de l'état courant |
| B invalide dans une transition interne A→B | Rollback complet, A reste actif |
| Commit réussi mais réponse perdue | Retour du résultat historique réel par clé |
| Issue technique indéterminée | UNKNOWN, réconciliation avant nouvel effet |
| Même clé, autre empreinte | CONFLICT sans autorisation élargie |
| Révocation après transition committée | Historique préservé, futurs effets requalifiés |
| Clôture réellement séparée puis ouverture échouée | A CLOSED / B absent, PARTIAL déclaré avec suite gouvernée |

## 11. Blast radius, delivery et gates

**Impacts à qualifier :** sessions D1/D2, provenance D3, prise de tour et idempotence ML2, références D4, DDL PostgreSQL et migrations depuis 006, API serveur, Journal/Trajectoire, sécurité/diagnostic, tests et architecture CURRENT Next.

**Un macro-lot cohérent :** schéma et services D5/D6, intégrations D3/D4, UX R3 B, tests/observabilité, documentation et preuves. Aucun micro-lot documentaire ou architecture parallèle.

**Gates :**
1. Finaliser contrats D6 de compétence/portée/restrictions puis CKI/méthode ; rattachement individuel de chaque règle/scénario R2.
2. Préciser commandes, états, DDL/API, migrations, isolation et tests dans les frontières R4 validées.
3. Morris valide le contenu complet de la spec (VALIDATED SPEC seulement sur décision explicite).
4. GO Cursor SFIA v2.6/Git D3 distinct ; construction et preuves DEV, puis RECETTE ENV-01 sur SHA immuable.
5. Revue de résultats, réserves/dette-exit, synchronisation de l'architecture CURRENT et Roadmap dans le delivery autorisé.
6. PR, merge, promotion, R6 et ADOPTED : autorisations et preuves indépendantes.

**Réserves ouvertes :** couverture individuelle R2 incomplète ; interfaces API/DDL non figées ; résolution/version CKI ; modalités détaillées d'autorité et de suspensions ; lecture native Figma ; réconciliation des effets réellement séparés ; runtime ML3 non implémenté ; aucune preuve.

---

**Verdict :** R5 / ML3 — SPECIFICATION TECHNIQUE D0 v0.2 CANDIDATE — OPTION A ACQUISE — NO GO CURSOR — NO TEST EXECUTED — NO PR/MERGE/ADOPTED.

# SFIA Studio Next — R2 / Référentiel de conception fonctionnelle

| Champ | Valeur |
| --- | --- |
| Jalon | **R2 — conception fonctionnelle** (engagé après intégration vérifiée de R1, PR #639, `main@8751775edc314e8fc7f0855104e5000290be9839`) |
| Nature | **Index canonique de travail des spécifications fonctionnelles R2** |
| Statut | **R2 EN COURS** ; Nora v0.4, Connaissance v0.1 et Trajectoire/Cycles/CKI v0.1 `VALIDATED SPEC` par Morris ; aucune validation globale R2, intégration `main` ou adoption produit inférée |
| Autorité de validation | **Morris**, après revue du contenu et des impacts ; commit sur branche candidate ≠ merge `main` |
| Base fonctionnelle | [Vision R1](../cadrage/vision-produit.md), [SEF v0.2](../governance/SEF.md), [Roadmap Next](../governance/roadmap.md), [décision de sortie R1](../governance/decisions/2026-11-02-r1-cadrage-formal-exit.md) |

## 1. Finalité du référentiel

R2 transforme les neuf domaines et sept scénarios E2E validés en **règles de gestion, états, responsabilités, contrats fonctionnels, scénarios nominaux/négatifs, exceptions et critères d'acceptation** exploitables par R3 (UX), R4 (architecture), R5 (construction) et R6 (qualification).

Le référentiel évite la répétition des mêmes règles dans plusieurs documents. **Un comportement = une définition canonique et un propriétaire fonctionnel** ; les autres specs référencent cette règle et précisent uniquement leurs propres contraintes d'interface.

La granularité suit les **capacités et résultats utilisateur cohérents**, pas une spec par bouton, écran, micro-règle ou sous-étape.

## 2. Registre des spécifications

| Spécification | Responsabilité principale | État du contenu | Dépendances / revue transverse |
| --- | --- | --- | --- |
| [Contexte et conduite gouvernée de Nora](contexte-et-conduite-gouvernee-de-nora.md) | Conversation naturelle, contexte mobilisé, méthode applicable, guidance de cycle (CKC historique → CKI Next candidat) et frontières de conduite | **VALIDATED SPEC v0.4 — MORRIS 2026-11-02** ; publiée sur branche R2. 46 RG, 23 PF ; interfaces à requalifier | Interfaces avec projet/cycle, gouvernance, connaissance, exécution, preuves ; **à vérifier quand leurs specs existent** |
| [Connaissance, sujets et continuité du projet](connaissance-sujets-et-continuite-du-projet.md) | Domaine 4 : conservation sélective des acquis, organisation des sujets, points ouverts, provenance, historique et reprise inter-conversations | **VALIDATED SPEC v0.1 — MORRIS 2026-11-02** ; 15 RG, 10 PF ; publiée sur branche R2 | Références aux règles Nora v0.4 ; interfaces futures domaines 6, 8, 9 **NON ÉVALUÉES** |
| [Trajectoire du projet, cycles et guidance CKI](trajectoire-cycles-et-guidance-cki.md) | Domaine 5 : trajectoire prévisionnelle/effective, unique cycle actif, transitions gouvernées, CKI autonome et relations non contraignantes, méthode applicable et maturité | **VALIDATED SPEC v0.1 — MORRIS 2026-11-02** ; 40 RG-TRJ, 30 PF-TRJ ; interfaces réservées | Revue R1, Nora v0.4, Connaissance v0.1 et CKI v0.2 candidat ; domaines 6–9 **NON ÉVALUÉS** |

**Ne pas précréer une liste de spécifications vides.** Ajouter une entrée lorsqu'un périmètre a réellement fait l'objet d'un contrat fonctionnel rédigé et d'une responsabilité identifiée.

## 3. Contrat commun de rédaction (léger)

Chaque spécification porte au minimum :

- **Capacité / résultat Pilote**, périmètre IN/OUT, propriétaire fonctionnel et frontières de responsabilité.
- **Concepts métier et informations nécessaires**, sans inventer les tables, API ou composants de R4.
- **Règles de gestion identifiées et stables** (`RG-<domaine>-NNN`) ; une seule spécification canonique par règle.
- **Scénarios nominaux, alternatifs, négatifs**, conditions de STOP/reprise et résultat attendu, rattachés aux E2E R1 pertinents.
- **Contrats de décision / droits / preuves** applicables, sans assimiler mémoire, document, instruction, HumanDecision, autorisation et observation.
- **Interfaces et impacts croisés**, dépendances, contradictions ouvertes, couverture à confirmer, trajectoire et critères d'acceptation testables.
- **Statut** de maturité, source/branche et version, décision Morris si acquise, gaps et suite R3–R6.

Ces rubriques ne prescrivent **pas un gabarit rigide ni une nouvelle couche de gouvernance produit**. La densité de la spécification est proportionnée au risque et à la complexité réelle.

## 4. Revue de compatibilité obligatoire à chaque changement

Avant de qualifier une spec comme cohérente, la comparer **à toutes les spécifications R2 déjà présentes dans le registre**, ainsi qu'aux invariants et parcours R1 concernés :

| Contrôle | Questions concrètes | Action en cas d'écart |
| --- | --- | --- |
| **Propriétaire unique** | Une règle ou un état métier est-il défini à deux endroits ? | Garder une source canonique ; remplacer l'autre énoncé par un renvoi |
| **Compatibilité des règles** | Une règle contredit-elle, annule-t-elle ou rend-elle inatteignable une règle voisine ? | Qualifier le conflit, l'exemple et la décision requise |
| **Effets de bord** | Qu'est-ce qui change pour les autres domaines, leurs erreurs, leurs reprises et leurs droits ? | Mettre à jour les interfaces concernées dans le même macro-lot |
| **Autorité et états** | Une recommandation peut-elle être assimilée à une décision ? Une reprise peut-elle contourner un STOP ? | Refus de la dérive ; contrat consolidé et arbitrage si nécessaire |
| **Parcours E2E** | Le nominal **et** l'exception continuent-ils à traverser les responsabilités sans rupture ? | Compléter le scénario et ses critères d'acceptation |
| **Nommage** | Un même concept possède-t-il deux noms ou deux propriétaires divergents ? | Harmoniser dans les specs impactées, avec décision si structurante |

**Verdicts utilisables :** `COMPATIBLE`, `CONFLIT À ARBITRER`, `RÈGLE À CONSOLIDER`, `NON ÉVALUÉ`. `NON ÉVALUÉ` est nécessaire lorsque la spec voisine n'existe pas encore ; il ne signifie pas « compatible ».

La revue est **bidirectionnelle** : une nouvelle spec est confrontée aux anciennes, et les anciennes sont réexaminées lorsqu'une nouvelle règle révèle une incompatibilité. Un conflit peut rester ouvert sur une candidate ; il ne disparaît pas sous une approbation implicite.

## 5. Gates et état de référence

1. **D0** — Rédaction et consolidation locale, sans effet Git.
2. **Branche Git candidate sous mandat borné** — Historisation et partage ; le commit reste candidat et n'équivaut pas à `main`.
3. **`VALIDATED SPEC`** — Validation explicite du contenu fonctionnel concerné par Morris, réserves documentées.
4. **Intégration vers `main`** — PR, contrôles, merge et relecture sous GO distinct ; non présumés.
5. **R3–R6** — Réutilisation des specs validées, puis qualification des comportements ; documentation ≠ implémentation ≠ preuve ≠ adoption.

La sortie R2 est un **gate distinct** : elle exige une cohérence globale des contrats métier, décisions, états, incidents et continuité, pas seulement la présence de fichiers dans Git.

## 6. État initial et limites

- **R1** : clôturé par Morris avec réserves ; PR #639 mergée et `main@8751775edc314e8fc7f0855104e5000290be9839` vérifié.
- **R2** : lancé en conception ; spécifications Nora v0.4 et Connaissance v0.1 approuvées, avec interfaces futures réservées. Choix **option A** (méthode contextualisée et versionnée) explicité par Morris ; pas de reprise automatique DoctrinePackage/v2.6.
- **Source Next** : aucune architecture ni implémentation Next (`N/A — NON IMPLÉMENTÉ`).
- **Git** : Nora v0.4, Connaissance v0.1 et cet index synchronisés sur branche `sfia/next-r2-functional-specs` sous GO documentaire borné ; aucune PR ni merge.
- **Gouvernance** : la Roadmap et le README racine de `main` comportent encore des mentions pré-merge R1/R2 obsolètes. À synchroniser avec un mandat de rédaction/validation adapté, dans un lot documentaire utile ; ne pas créer de micro-PR autonome.

## 7. Contrat d'applicabilité — v0.3 ; sélection/évolution — v0.4 validées

- **Responsabilité canonique conservée** : la spec « Contexte et conduite gouvernée de Nora » définit l'utilisation contextuelle par Nora, et non les décisions, la trajectoire, les permissions ou les preuves, qui relèvent de leurs domaines propriétaires.
- **Évolution v0.3 proposée** : nature/applicabilité de huit catégories d'information, huit règles `RG-APP-001..008`, huit scénarios `PF-10..17`, revue d'interfaces et effets de bord. Aucun nouveau domaine ou E2E R1.
- **Contrôle de compatibilité** : pas de contradiction identifiée entre la v0.3 et les 30 règles précédentes au stade documentaire ; six interfaces restent à requalifier lors des specs voisines. **`COMPATIBLE` interne ≠ `COMPATIBLE` avec des contrats encore inexistants.**
- **État de publication** : **v0.3 synchronisée sur la branche R2**, sans PR ni merge ; **v0.4 validée et synchronisée sur branche candidate**.

## 8. Sélection et évolution de méthode — VALIDATED SPEC v0.4

- **Nouvelle qualification, même propriétaire :** méthode sans choix imposé au sas/projet, choix durable par le Pilote en conversation naturelle, technique ponctuelle de Nora distincte, référence et version contextualisées, évolution sans upgrade silencieux.
- **Couverture ajoutée :** huit règles `RG-METH-009..016`, six scénarios `PF-18..23`, matrice de situations et impacts E2E 01–07. Ces éléments ont été **validés fonctionnellement par Morris le 2026-11-02**, sans validation des interfaces futures.
- **Contrats voisins :** le futur propriétaire Projet/Trajectoire/Cycles définira l'état durable de la méthode ; Décisions/Gouvernance établira la validité du choix et des modifications ; Exécution/Preuves contrôlera les impacts opérationnels. Aucune de ces responsabilités n'est dupliquée dans Nora.
- **Revue de compatibilité :** pas de contradiction identifiée avec les 38 règles v0.3 ou les sept E2E R1 ; interfaces avec des spécifications futures **NON ÉVALUÉES**.
- **Gate :** validation Morris acquise ; synchronisation sur branche R2 réalisée ; aucune PR, merge ni décision technique anticipés.


## 9. Connaissance, sujets et continuité — VALIDATED SPEC v0.1

- **Propriété distincte du domaine 4 :** conservation, organisation, fraîcheur et récupération des connaissances. La spécification Nora v0.4 reste propriétaire de l'usage conversationnel et de l'applicabilité contextuelle ; domaines 6 et 8 demeurent propriétaires de l'autorité et des preuves.
- **Couverture validée :** 15 règles `RG-KNOW-001..015` et 10 scénarios `PF-KNOW-01..10` ; reprise, points ouverts transversaux, sources, histoire, sujets réorganisables, Git candidate vs `main`, isolement interprojets.
- **Revue bilatérale initiale :** aucune incompatibilité manifeste avec les 46 règles validées de Nora v0.4 ou les sept E2E R1 ; les interfaces des specs non encore créées restent `NON ÉVALUÉES`.
- **Statut :** `VALIDATED SPEC v0.1` par Morris le 2026-11-02, synchronisée sur la branche R2, interfaces futures réservées.

## 10. Corpus CKI Next — publication candidate et liens canoniques

- [15 CKI autonomes et spécialisés](../cki/README.md) — un CKI par type de cycle, un seul CKI principal associé au cycle actif, catalogue extensible au-delà de 15.
- [Matrice centrale des relations](../cki/relations-methodologiques-cki.md) — 50 relations orientées et conditionnelles (transmission, approfondissement, retour et éclairage transversal) ; **aucune activation d'un deuxième CKI, aucune transition automatique**.
- **Statut :** principes de conception arbitrés par Morris ; fiches et matrice v0.2 **candidates publiées sur branche R2**, non `VALIDATED SPEC`, sans mécanisme d'autorité ni preuve produit. Le futur contrat propriétaire Domaine 5 — Trajectoire et cycles — est à concevoir et à vérifier contre les specs Nora/Connaissance.

## 11. Trajectoire, cycles et guidance CKI — VALIDATED SPEC v0.1

- **Propriétaire :** domaine 5. Un seul cycle actif par projet et un seul CKI principal associé ; catalogue initial de 15 spécialités extensible, sans interdépendance entre CKI. Aucun cycle imposé avant l'aide cognitive de Nora.
- **Frontières :** le domaine 3 conduit le dialogue et apprécie la maturité ; le domaine 4 garde la connaissance ; le domaine 5 conserve trajectoire, état des cycles, association CKI et référence durable de méthode ; le domaine 6 valide les GO et décisions ; les domaines 7–9 restent responsables des opérations, preuves et droits Git.
- **Traçabilité de la revue :** 40 règles, 30 scénarios ; 15 fiches CKI candidates et 50 relations orientées examinées, sans conflit documentaire normatif identifié. Aucune preuve runtime ni validation du contenu CKI v0.2 inférée.
- **Écarts 5.1 sous suivi dans la spec** : (1) CKC/CKI : harmonisation en consolidation R2 ; (2) CKI indisponible : fonctionnellement qualifié, R4/R5–R6 ; (3) liens/matrice : non-contraignants, R5/R6 à éprouver ; (4) maturité/gates : revue D6 et D8 avant exit R2 ; (5) Roadmap `main` obsolète : `KNOWN GAP`, mise à jour de gouvernance sous décision et mandat D2 séparés.
- **Limite :** publication sur branche R2 ≠ validation globale R2, PR, merge, implémentation, preuve comportementale ou adoption.

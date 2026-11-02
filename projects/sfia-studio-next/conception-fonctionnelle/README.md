# SFIA Studio Next — R2 / Référentiel de conception fonctionnelle

| Champ | Valeur |
| --- | --- |
| Jalon | **R2 — conception fonctionnelle** (engagé après intégration vérifiée de R1, PR #639, `main@8751775edc314e8fc7f0855104e5000290be9839`) |
| Nature | **Index canonique de travail des spécifications fonctionnelles R2** |
| Statut | **R2 CLOSED BY MORRIS — WITH CARRIED RESERVES / PR #640 MERGED — POST-MERGE VERIFIED (2026-11-02)** ; [décision](../governance/decisions/2026-11-02-r2-functional-exit.md), [preuve Git](../governance/roadmap.md#r2--preuve-post-merge-git-640-constat-du-2026-11-02). Neuf domaines D1–D9 `VALIDATED SPEC`, 15 CKI/50 relations `VALIDATED CONTENT v0.2` ; **R3 UX NOT STARTED** ; aucun `IMPLEMENTED`, `BEHAVIOR PROVEN` ou `ADOPTED`. |
| Autorité de validation | **Morris**, après revue du contenu et des impacts ; commit sur branche candidate ≠ merge `main` |
| Base fonctionnelle | [Vision R1](../cadrage/vision-produit.md), [SEF v0.2](../governance/SEF.md), [Roadmap Next](../governance/roadmap.md), [décision de sortie R1](../governance/decisions/2026-11-02-r1-cadrage-formal-exit.md) |

## 1. Finalité du référentiel

R2 transforme les neuf domaines et sept scénarios E2E validés en **règles de gestion, états, responsabilités, contrats fonctionnels, scénarios nominaux/négatifs, exceptions et critères d'acceptation** exploitables par R3 (UX), R4 (architecture), R5 (construction) et R6 (qualification).

Le référentiel évite la répétition des mêmes règles dans plusieurs documents. **Un comportement = une définition canonique et un propriétaire fonctionnel** ; les autres specs référencent cette règle et précisent uniquement leurs propres contraintes d'interface.

La granularité suit les **capacités et résultats utilisateur cohérents**, pas une spec par bouton, écran, micro-règle ou sous-étape.

## 2. Registre des spécifications

| Spécification | Responsabilité principale | État du contenu | Dépendances / revue transverse |
| --- | --- | --- | --- |
| [Contexte et conduite gouvernée de Nora](contexte-et-conduite-gouvernee-de-nora.md) | Conversation naturelle, contexte mobilisé, méthode applicable, guidance de cycle (CKC historique → CKI Next validé en contenu) et frontières de conduite | **VALIDATED SPEC v0.4 — MORRIS 2026-11-02** ; publiée sur branche R2. 46 RG, 27 PF ; interfaces revues documentairement | Interfaces D1–D9 confrontées selon leur portée ; compatibilité documentaire favorable, preuves R4–R6 ouvertes |
| [Connaissance, sujets et continuité du projet](connaissance-sujets-et-continuite-du-projet.md) | Domaine 4 : conservation sélective des acquis, organisation des sujets, points ouverts, provenance, historique et reprise inter-conversations | **VALIDATED SPEC v0.1 — MORRIS 2026-11-02** ; 15 RG, 10 PF ; publiée sur branche R2 | Interfaces D1–D9 confrontées selon leur portée ; compatibilité documentaire favorable, preuves R4–R6 ouvertes |
| [Trajectoire du projet, cycles et guidance CKI](trajectoire-cycles-et-guidance-cki.md) | Domaine 5 : trajectoire prévisionnelle/effective, unique cycle actif, transitions gouvernées, CKI autonome et relations non contraignantes, méthode applicable et maturité | **VALIDATED SPEC v0.1 — MORRIS 2026-11-02** ; 40 RG-TRJ, 30 PF-TRJ ; interfaces réservées | Interfaces D1–D9 confrontées selon leur portée ; compatibilité documentaire favorable, preuves R4–R6 ouvertes |
| [Décisions, mandats et gouvernance du Pilote](decisions-et-gouvernance-du-pilote.md) | **Domaine 6** : décisions du Pilote, validité/portée, mandats, suspensions, révocations, restrictions et acceptation, sans autorité concurrente | **VALIDATED SPEC v0.1 — MORRIS 2026-11-02** ; 36 RG-GOV, 28 PF-GOV ; interfaces réservées | Interfaces D1–D9 confrontées selon leur portée ; compatibilité documentaire favorable, preuves R4–R6 ouvertes |
| [Réalisation opérationnelle gouvernée](realisation-operationnelle-gouvernee.md) | **Domaine 7** : contrat d'exécution inspectable et versionné, instruction correspondante, tentative, état réellement observé, interruption/reprise et nouveau contrat correctif sous autorisation | **VALIDATED SPEC v0.1 — MORRIS 2026-11-02** ; 36 RG-REAL, 30 PF-REAL, dix réserves `REAL-*` ; interfaces réservées | Interfaces D1–D9 confrontées selon leur portée ; compatibilité documentaire favorable, preuves R4–R6 ouvertes |
| [Résultats, preuves et qualification de conformité](resultats-et-preuves.md) | **Domaine 8** : déclaration/observation/conformité/acceptation distinctes, sources et preuves réellement vérifiées, réserves, bilans et limites | **VALIDATED SPEC v0.1 — MORRIS 2026-11-02** ; 36 RG-PRV, 32 PF-PRV, 12 réserves ; interfaces réservées | Interfaces D1–D9 confrontées selon leur portée ; compatibilité documentaire favorable, preuves R4–R6 ouvertes |
| [Intégration Git gouvernée et facultative par projet](integration-git-gouvernee.md) | **Domaine 9** : accès et rattachement Git facultatifs, consultation sous identité/droits actuels, provenance commit/ref, préconditions et conflits Git ; dépôt partagé ≠ projet Studio partagé | **VALIDATED SPEC v0.1 — MORRIS 2026-11-02** ; 40 RG-GIT, 34 PF-GIT, 14 réserves suivies ; interfaces réservées | Interfaces D1–D9 confrontées selon leur portée ; compatibilité documentaire favorable, preuves R4–R6 ouvertes |
| [Accès et portefeuille du Pilote](acces-et-portefeuille.md) | **Domaine 1** : identité personnelle Studio, session, portefeuille/cockpit non conversationnel et navigation ; pas de Nora globale | **VALIDATED SPEC v0.1 — MORRIS 2026-11-02** ; 25 RG-ACC, 24 PF-ACC, huit réserves | R1 et D2–D9 revus ; isolation, session et états réels à concevoir/prouver en R4–R6 |
| [Création de projet et continuité du sas](creation-de-projet-et-continuite-du-sas.md) | **Domaine 2** : sas conversationnel avec Nora, aperçu progressif, création explicite « Créer le projet », continuité visuelle du fil | **VALIDATED SPEC v0.1 — MORRIS 2026-11-02** ; 26 RG-CRE, 26 PF-CRE, neuf réserves | R1 et D1/D3–D9 revus ; idempotence, persistance et transfert de contexte à concevoir/prouver en R4–R6 |

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

## 6. État initial et limites — historique de lancement R2

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

## 10. Corpus CKI Next — contenu validé et liens canoniques

- [15 CKI autonomes et spécialisés](../cki/README.md) — un CKI par type de cycle, un seul CKI principal associé au cycle actif, catalogue extensible au-delà de 15.
- [Matrice centrale des relations](../cki/relations-methodologiques-cki.md) — 50 relations orientées et conditionnelles (transmission, approfondissement, retour et éclairage transversal) ; **aucune activation d'un deuxième CKI, aucune transition automatique**.
- **Statut actuel :** les quinze CKI et les cinquante relations sont `VALIDATED CONTENT v0.2` par Morris ; la spec propriétaire D5 est validée. [PR #640](https://github.com/mcleland147/sfia-workspace/pull/640) intégrée sur `main` ; aucun moteur de guidance implémenté ni preuve comportementale.

## 11. Trajectoire, cycles et guidance CKI — VALIDATED SPEC v0.1

- **Propriétaire :** domaine 5. Un seul cycle actif par projet et un seul CKI principal associé ; catalogue initial de 15 spécialités extensible, sans interdépendance entre CKI. Aucun cycle imposé avant l'aide cognitive de Nora.
- **Frontières :** le domaine 3 conduit le dialogue et apprécie la maturité ; le domaine 4 garde la connaissance ; le domaine 5 conserve trajectoire, état des cycles, association CKI et référence durable de méthode ; le domaine 6 valide les GO et décisions ; les domaines 7–9 restent responsables des opérations, preuves et droits Git.
- **Traçabilité de la revue :** 40 règles, 30 scénarios ; 15 fiches CKI et 50 relations orientées validées en contenu par Morris le 2026-11-02 ; sans conflit documentaire normatif identifié. Aucune preuve runtime ni adoption produit inférée.
- **Écarts 5.1 suivis :** (1) terminologie CKI harmonisée ; (2) indisponibilité à concevoir R4 et prouver R5/R6 ; (3) relations non contraignantes à éprouver ; (4) maturité ≠ gate, revue D6/D8 faite ; (5) Roadmap actualisée après PR #640, **écart de statut Git R2 résolu**, sans lever les réserves techniques.
- **Limite :** le contenu a été intégré via PR #640 et la clôture R2 décidée ; cela ne vaut ni UX R3 validée, ni implémentation, ni preuve comportementale ni adoption.

## 12. Décisions, mandats et gouvernance du Pilote — VALIDATED SPEC v0.1

- **Propriétaire :** domaine 6 — état opposable et portée des actes humains ; Nora reconnaît/argumente (D3), Connaissance référence (D4), Trajectoire conserve cycles/méthode (D5), Réalisation exécute (D7), Preuves qualifie (D8), Git vérifie ses capacités (D9).
- **Arbitrages validés :** GO conversationnel clair pour les transitions, « Créer le projet » distinct, acte « Exécuter » pour le contrat technique inspecté et encore valable ; suspension humaine persistante, aucune autorisation interprojets ni acceptation/ADOPTED inférée.
- **Couverture :** 36 règles `RG-GOV-001..036`, 28 scénarios `PF-GOV-01..28`. Réserves D6-01..08 suivies avec propriétaire et échéance dans la spécification ; confrontation des domaines 7–9 au fur et à mesure de leur rédaction.
- **Statut :** contenu fonctionnel **VALIDATED SPEC** par Morris le 2026-11-02 ; publication documentaire sur branche R2 uniquement. Aucune PR, merge, preuve LIVE/REAL ou adoption produit présumés.

## 13. Réalisation opérationnelle gouvernée — VALIDATED SPEC v0.1

- **Propriétaire :** domaine 7 ; contrat opérationnel, instruction consultable, tentative et retours techniques observables. Nora (D3) prépare le contenu cognitif, gouvernance (D6) possède l'acte d'autorité, D8 établira le résultat probatoire, D9 gouvernera les accès Git.
- **Contrat :** « Exécuter » sur la version réellement inspectée et applicable ; double clic sans lancement en double ; STOP demandé ≠ arrêt confirmé ; résultat technique ≠ conformité/acceptation ; nouveau contrat correctif sans auto-exécution.
- **Couverture :** 36 règles `RG-REAL-001..036`, 30 scénarios `PF-REAL-01..30` et dix réserves `REAL-01..10`, avec propriétaire et jalon. D6-02/D6-03 précisées fonctionnellement, preuves R4–R6 ouvertes.
- **État :** contenu **VALIDATED SPEC** par Morris le 2026-11-02 ; publié sur la branche candidate R2, sans PR/merge, implémentation, conformité prouvée ni adoption. À confronter aux futurs contrats D8, D9, D1–D2.

## 14. Résultats, preuves et qualification de conformité — VALIDATED SPEC v0.1

- **Propriétaire :** D8 établit la qualification des résultats et preuves ; D7 conserve la tentative et ses retours, D6 les décisions et acceptations, D4 la continuité des points ouverts, D9 les états Git, D3 l'analyse et la restitution cognitive.
- **Invariants :** déclaration Cursor ≠ observation ≠ conformité démontrée ≠ acceptation du Pilote ; preuve déterministe ≠ preuve navigateur ou LIVE/REAL ; une preuve inaccessible n'est pas certifiée ; un résultat conforme n'autorise ni merge, ni release, ni `ADOPTED`.
- **Couverture :** 36 règles `RG-PRV-001..036`, 32 scénarios `PF-PRV-01..32` et 12 réserves `PRV-*` suivies. Les interfaces `REAL-06` et `D6-04` sont précisées fonctionnellement, non prouvées techniquement.
- **Statut :** contenu `VALIDATED SPEC` par Morris le 2026-11-02, publié sur branche R2 uniquement. Réserves D9, D1–D2 à instruire ; aucune PR, merge, implémentation, preuve comportementale ou adoption implicite.

## 15. Intégration Git gouvernée et facultative par projet — VALIDATED SPEC v0.1

- **Propriétaire :** D9 assure ressources, accès, références et préconditions Git ; D6 les autorisations, D7 les effets/tentatives, D8 les preuves, D1 l'identité Studio et D2 le projet.
- **Invariants :** Git facultatif ; connexion GitHub ≠ accès global ; lecture de Nora ≠ écriture de Cursor ; dépôt partagé ≠ projet Studio partagé ; branche candidate ≠ `main` vérifié ; push ≠ merge ≠ release ≠ adoption ; aucun CKI ou Kubernetes obligatoire.
- **Couverture validée :** 40 règles `RG-GIT-001..040`, 34 scénarios `PF-GIT-01..34`, 14 réserves `GIT-01..14`, interfaces avec D6/D7/D8 qualifiées fonctionnellement sans preuve runtime.
- **État :** contenu `VALIDATED SPEC` par Morris le 2026-11-02 ; branche R2 uniquement. D1–D2 non encore examinés contre leurs specs propriétaires, aucune PR, merge, implémentation ou adoption induite.

## 16. Accès et portefeuille du Pilote — VALIDATED SPEC v0.1

- **Propriétaire :** domaine 1 — session/identité du Pilote et navigation vers ses projets individuels ou le sas ; pas de Nora dans le cockpit, pas de chat global ni de projet collectif implicite.
- **Contrats :** l'accès à Studio n'établit ni un droit Git universel (D9), ni un acte de gouvernance (D6), ni une autorisation d'exécution (D7). Aucun cycle, CKI, méthode ou dépôt préalable requis.
- **Couverture :** 25 règles `RG-ACC-001..025`, 24 scénarios `PF-ACC-01..24`, huit réserves `ACC-*` suivies. Session et isolation à concevoir R4 puis prouver R5/R6.
- **Statut :** `VALIDATED SPEC v0.1` par Morris le 2026-11-02 ; branche R2 seulement, sans PR/merge, implémentation, qualification ou adoption inférée.

## 17. Création de projet et continuité du sas — VALIDATED SPEC v0.1

- **Propriétaire :** domaine 2 — sas conversationnel Nora avant projet, préparation proportionnée et acte « Créer le projet » avec effet réel confirmé ; continuité visuelle du même fil dans l'espace personnel créé.
- **Contrats :** aucun projet, cycle, CKI, méthode ou dépôt Git créé automatiquement ; un double acte ne crée pas de doublon ; mémoire initiale D4, décisions D6 et cycle D5 demeurent chacun chez leur propriétaire.
- **Couverture :** 26 règles `RG-CRE-001..026`, 26 scénarios `PF-CRE-01..26`, neuf réserves `CRE-*` suivies. Idempotence, persistance et reprise à concevoir R4 puis prouver R5/R6.
- **Statut :** `VALIDATED SPEC v0.1` par Morris le 2026-11-02 ; branche R2 uniquement. Revue de cohérence globale à préparer séparément, sans décision de sortie R2, PR/merge ou adoption.


## 18. Consolidation transverse R2 — 2026-11-02

- **Neuf specs validées individuellement ; 300 règles et 241 scénarios** (237 initiaux + 4 PF D3 approuvés), sept E2E R1 documentés non exécutés.
- **Lexique :** CKI cible Next, CKC historique R1. Pas de deuxième moteur ou gate.
- **Interfaces :** confrontées documentairement, sans prétendre que les anciennes mentions « non évaluées » sont encore l'état courant. Les réserves techniques conservent leurs propriétaires et jalons R3–R6.
- **CKI :** [revue des quinze fiches et cinquante relations](revue-de-coherence-des-cki.md) réalisée ; contenus désormais `VALIDATED CONTENT v0.2` par Morris ; preuves comportementales R5/R6 ouvertes.
- **Roadmap :** R1 et R2 intégrés et post-merge vérifiés sur `main` ; constat [Roadmap](../governance/roadmap.md) après PR #640. R3 UX non engagé.
- **Gates :** bilan de sortie R2 avec Morris, puis PR, CI, merge, post-merge ; R3 non engagé.


## 19. Préparation de la revue formelle de sortie R2 — 2026-11-02

- [Rapport de revue formelle R2](revue-formelle-sortie-r2.md) : contrats D1–D9, 300 RG, 241 PF, sept E2E R1 ; contrôle documentaire et réserves de conception R3–R6.
- **CKI :** 15 contenus et matrice de 50 relations `VALIDATED CONTENT v0.2` par Morris ; ce statut ne signifie pas `IMPLEMENTED`, `BEHAVIOR PROVEN` ni `ADOPTED`.
- **Verdict proposé :** `R2 EXIT REVIEW — FAVORABLE WITH CARRIED RESERVES`, à soumettre au gate explicite de clôture Morris. Aucun `R2 CLOSED` enregistré, PR/merge ni R3 engagé par la seule publication de ce bilan.


## 20. Décision formelle R2 — clôture avec réserves (2026-11-02)

- **Morris valide le verdict de la [revue formelle](revue-formelle-sortie-r2.md) :** `R2 CLOSED BY MORRIS — WITH CARRIED RESERVES` ([Decision Record](../governance/decisions/2026-11-02-r2-functional-exit.md)).
- **Portée :** acceptation globale de la cohérence documentaire des neuf domaines, des 300 RG, des 241 PF et des 15 CKI/50 relations en contenu. Aucune preuve de comportement, ni clôture automatique des 66 réserves.
- **Gate Git :** PR #640 mergée avec CI applicable verte, identité des arbres et contrôle post-merge `main` acquis ; entrée R3 UX distincte.


## 21. État de référence post-merge R2 (2026-11-02)

- **Source opposable :** [décision de clôture R2](../governance/decisions/2026-11-02-r2-functional-exit.md) et [constat Git Roadmap](../governance/roadmap.md). [PR #640](https://github.com/mcleland147/sfia-workspace/pull/640) mergée ; `main@455bb706ecdb13cc046b65b531e72ce96f4a4455` vérifié ; tree candidate = tree merge (`ffce65b39114773c56506ae12768d86fc0d886fd`).
- **Contenu sur `main` :** D1–D9 `VALIDATED SPEC`, **300 RG, 241 PF**, sept E2E R1 utilisés comme contrats de référence, quinze CKI et 50 relations `VALIDATED CONTENT v0.2` ; tests comportementaux non exécutés.
- **Réserves :** 66 réserves numérotées dans leurs specs propriétaires, reportées vers R3 à R6 ; la conformité documentaire ne ferme pas la dette technique ou la preuve.
- **Historique pré-merge :** les sections précédentes retraçant les étapes candidates et le verdict de revue restent conservées pour compréhension, mais **ne remplacent pas le présent état post-merge vérifié**.
- **Prochaine capacité :** R3 UX : cockpit personnel, sas conversationnel et continuité, Nora/cycle/décision, contrat `Exécuter` et résultats/preuves, Git facultatif. **R3 NOT STARTED** jusqu'au cadrage/GO dédié ; ni R4 ni R5 anticipés.

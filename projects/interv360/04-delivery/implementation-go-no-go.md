# Interv360 — Implementation go/no-go

**Projet** : Interv360
**Cycle** : Préparation passage en réalisation
**Statut** : Go conditionnel — INC-01
**Branche** : `delivery/interv360-implementation-go-no-go`

---

## 1. Objectif du cycle

Ce cycle vise à déterminer si Interv360 est prêt à entrer en phase de réalisation.

La décision attendue n'est pas encore de lancer le développement, mais de qualifier :

- le niveau de maturité du cadrage ;
- le périmètre MVP réalisable ;
- les prérequis à lever ;
- les risques restants ;
- les livrables nécessaires avant lancement.

Question centrale :

> Interv360 est-il prêt à passer en réalisation ?
> Si oui, avec quel périmètre MVP ?
> Si non, quels prérequis restent à lever ?

---

## 2. Sources de référence

À relire avant décision :

- cadrage projet Interv360 ;
- architecture fonctionnelle ;
- parcours utilisateurs ;
- écrans / exports design disponibles ;
- livrables de préparation réalisation capitalisés ;
- standards SFIA publiés dans Notion ;
- templates et prompts associés ;
- décisions précédentes.

Git reste la source de vérité documentaire.

Notion sert de couche de lecture, de navigation et d'adoption.

---

## 3. Périmètre de la décision

Le go/no-go doit couvrir :

- périmètre fonctionnel MVP ;
- parcours utilisateurs prioritaires ;
- objets métier nécessaires ;
- règles de gestion indispensables ;
- exigences non fonctionnelles minimales ;
- exigences sécurité / données ;
- prérequis UX/UI ;
- prérequis techniques ;
- livrables manquants ;
- risques bloquants ;
- trajectoire de réalisation.

---

## 4. Hypothèse MVP initiale

Le MVP Interv360 devrait prioriser :

- gestion d'un entretien ;
- préparation de l'entretien ;
- conduite / suivi de l'entretien ;
- synthèse ou restitution ;
- suivi des actions ou décisions ;
- structuration minimale des rôles ;
- traçabilité des informations clés.

Cette hypothèse doit être confirmée ou corrigée dans le cycle.

---

## 5. Critères de go

Un go peut être proposé si :

- le périmètre MVP est clair ;
- les parcours principaux sont suffisamment décrits ;
- les objets métier sont identifiés ;
- les règles critiques sont connues ;
- les dépendances majeures sont maîtrisées ;
- les risques bloquants sont absents ou contournables ;
- les livrables nécessaires à la réalisation sont disponibles ;
- la prochaine étape peut être lancée sans ambiguïté majeure.

---

## 6. Critères de no-go

Un no-go doit être proposé si :

- le périmètre MVP reste trop large ou flou ;
- des parcours essentiels ne sont pas décrits ;
- des règles métier critiques manquent ;
- les responsabilités produit / métier / technique sont ambiguës ;
- les risques sécurité ou données ne sont pas cadrés ;
- le socle documentaire ne permet pas d'ouvrir une réalisation maîtrisée ;
- une décision structurante manque.

---

## 7. Analyse à produire

Le cycle doit produire :

1. une synthèse de maturité ;
2. une matrice go/no-go ;
3. une liste des prérequis restants ;
4. une proposition de périmètre MVP ;
5. une recommandation finale ;
6. une liste d'actions avant réalisation ;
7. une décision de suite.

---

## 8. Non-périmètre

Ce cycle ne doit pas :

- développer l'application ;
- créer une stack technique définitive ;
- ouvrir un sprint ;
- générer des tickets de réalisation ;
- créer une base de données ;
- implémenter une API ;
- produire un backlog complet ;
- refaire l'UX/UI ;
- relancer une itération Figma ;
- publier automatiquement dans Notion.

---

## 9. Livrable attendu

Livrable principal :

`projects/interv360/04-delivery/implementation-go-no-go.md`

Livrables possibles ensuite :

- `mvp-scope.md`
- `realization-prerequisites.md`
- `implementation-readiness-checklist.md`
- `delivery-decision-summary.md`

Ces livrables ne sont pas créés automatiquement dans ce premier commit sauf si nécessaire.

---

## 10. Décision attendue

Statut à compléter en fin de cycle :

- [ ] Go réalisation
- [x] Go conditionnel
- [ ] No-go temporaire

Décision : voir §16 — **Go conditionnel sur INC-01** (formalisé).

---

## 11. Synthèse de maturité

**Sources principales :** `01-cadrage/business-framing.md`, `01-cadrage/mvp-arbitration-validation.md`, `../archive/pre-delivery-phases/05-functional-architecture/functional-architecture-summary.md`, `../archive/pre-delivery-phases/06-ux-ui/user-journeys.md`, `04-delivery/mvp-scope.md`, `04-delivery/delivery-readiness-summary.md`, `../archive/inc-01/inc-01-readiness-checklist.md`, `04-delivery/technical-design-summary.md`, `04-delivery/realization-start-summary.md`, `03-design/figma-first-screen-review.md`, `../../method/sfia-fast-track/archive/interv360-realization/2026-06-30-capitalization-summary.md`.

| Axe | Niveau | Commentaire |
|-----|--------|-------------|
| Cadrage produit | **Solide** | Intake validé (v1.3), cadrage métier et arbitrages MVP stabilisés (`business-framing.md`, `mvp-arbitrations.md`). Vision SAV + intégrations simulées claire. |
| Périmètre MVP | **Solide** | `mvp-scope.md` définit la chaîne SAV bout en bout, 8 écrans, hors MVP et garde-fous. Découpage en 9 lots, 51 MB, 6 incréments (INC-01 à INC-06). |
| Parcours utilisateurs | **Suffisant pour MVP** | 9 parcours consolidés dans `user-journeys.md` (qualification, planification, terrain, clôture, anomalies, pilotage). |
| Objets métier | **Solide** | Objets structurants documentés (`business-objects.md`, `functional-architecture-summary.md`) : Demande SAV, Intervention, Client, Technicien, CR, Signature, Sync CRM simulée, Anomalie. |
| Règles de gestion | **Suffisant pour MVP** | STAT-01 à STAT-08 cadrés (ADR-001, `status-and-transitions.md`, `inc-01-status-rules.md`). Règles RG prioritaires et refus métier documentés. |
| UX/UI | **Suffisant pour MVP** | Figma **Liste demandes — Design V2** validé (`figma-first-screen-review.md`). Autres écrans couverts par specs Git / Figma V1 — explicitement **non bloquants** pour INC-01. |
| Architecture fonctionnelle | **Solide** | 7 domaines fonctionnels, vision source de vérité locale, CRM simulé, clôture autonome (ADR-004). Synthèse consolidée disponible. |
| Sécurité / données | **À compléter** | Cadrage fonctionnel présent (conservation fictive ADR-005, erreurs intégration ADR-003). **Stack concrète, stratégie data physique et habilitations avancées non arbitrées** (`realization-start-summary.md` §5–7). |
| Préparation réalisation | **Solide** | Méthode capitalisée Git + Notion (28 assets). INC-01 détaillé : 16 US, 68 CA, backlog préparatoire, QA, estimation, conception technique documentaire. |
| Risques / dépendances | **Suffisant pour MVP** | Risques identifiés dans `delivery-readiness-summary.md` et `realization-start-summary.md`. **Autorisation de code non donnée** ; BPMN exécutable non produit (`03-process/` — fichiers `.bpmn` à venir). |

Niveaux utilisés : Solide · Suffisant pour MVP · À compléter · Bloquant.

---

## 12. Matrice go/no-go

| Critère | Statut | Justification | Action nécessaire |
|---------|--------|---------------|-------------------|
| Périmètre MVP clair | **Go** | `mvp-scope.md`, `functional-lots.md`, `delivery-slicing-strategy.md` — chaîne SAV et INC-01 P0-A explicités. | Geler explicitement INC-01 comme première cible de réalisation. |
| Parcours principaux décrits | **Go** | 9 parcours dans `user-journeys.md` ; chemin nominal INC-01 STAT-01 → STAT-06 documenté. | Aucune action bloquante — maintenir le périmètre INC-01. |
| Objets métier identifiés | **Go** | Catalogue consolidé dans `business-objects.md` et architecture fonctionnelle. | Vérifier cohérence modèle conceptuel (`inc-01-data-model.md`) avant code. |
| Règles critiques connues | **Go** | Statuts, transitions, clôture locale, CRM simulé, STAT-07/08 comme indicateurs — ADR-001 à ADR-004 + `inc-01-status-rules.md`. | Formaliser le gel des règles INC-01 dans la décision de démarrage. |
| UX/UI suffisante pour réalisation | **Go conditionnel** | Écran pilote Figma V2 validé ; 4 autres écrans INC-01 en specs Git suffisantes selon les cycles delivery. | Accepter specs Git pour planning, fiche, mobile ; pas de refonte Figma obligatoire avant INC-01. |
| Architecture fonctionnelle exploitable | **Go** | Synthèse et vues par domaine complètes ; alignement delivery confirmé. | Aucune action bloquante documentaire. |
| Risques sécurité / données cadrés | **Go conditionnel** | Cadrage fonctionnel et ADR présents ; **pas de décision data physique ni stack concrète** (`realization-start-summary.md`). | Arbitrer stack indicative, stratégie data et périmètre habilitations MVP avant code. |
| Livrables de réalisation disponibles | **Go conditionnel** | INC-01 : backlog détaillé, US, CA, QA, estimation, conception technique, plan d'implémentation documentés. | Confirmer données de démo (`inc-01-demo-data.md`) et checklist avant code non cochée en exécution. |
| Décisions structurantes prises | **Go conditionnel** | ADR MVP, périmètre, slicing et conception technique documentés. **Go réalisation explicite non donné** (`realization-start-summary.md`). | Produire la décision formelle go / go conditionnel / no-go et lever les prérequis §14. |
| Prochaine étape actionnable | **Go conditionnel** | Trajectoire claire : **INC-01 — Flux SAV minimal démontrable** (STAT-06 local). | Ouvrir le cycle `interv360-implementation-go-no-go` → validation → puis autorisation code si conditions levées. |

---

## 13. Proposition de périmètre MVP

> **Note :** l'hypothèse initiale (§4) est reformulée ici selon le vocabulaire métier Interv360 documenté (demande SAV / intervention, et non « entretien » générique).

### 13.1 Inclus MVP

**Cible de première réalisation recommandée : INC-01 — Flux SAV minimal démontrable (P0-A)**

- création manuelle d'une demande SAV (STAT-01) ;
- liste et consultation fiche demande ;
- qualification minimale (STAT-01 → STAT-02) ;
- planification et affectation technicien (STAT-03) ;
- exécution terrain simplifiée (STAT-04) ;
- compte rendu et clôture locale (STAT-06) ;
- journal fonctionnel minimal ;
- 5 écrans INC-01 : liste, fiche, planning, fiche intervention mobile, compte rendu mobile ;
- rôles essentiels : Responsable SAV, Technicien (parcours nominal) ;
- traçabilité minimale des statuts et actions clés.

**MVP global documenté (post INC-01, incréments suivants) :**

- intégration CRM simulée réception / retour (INC-03) ;
- anomalies d'intégration et reprise manuelle (INC-04, STAT-08) ;
- pilotage retards et dashboard SAV (INC-05, STAT-07) ;
- vue dirigeant limitée (INC-06).

### 13.2 Hors MVP

- CRM réel, API réelle, portail client, IA légère ;
- authentification / habilitations avancées ;
- dashboard et STAT-07/08 dans INC-01 ;
- BI complet, planning avancé, notifications multicanales avancées ;
- design system complet, mobile natif complet ;
- automatisation complète des reprises d'anomalies ;
- multi-entités, audit avancé, SLA complexes.

*(Aligné sur `mvp-scope.md` §6 et `delivery-readiness-summary.md` §10.)*

### 13.3 Hypothèses MVP à confirmer

- INC-01 reste la **première preuve de valeur** — pas le MVP complet 8 écrans d'un coup ;
- Figma suffisant pour liste demandes ; specs Git suffisantes pour les autres écrans INC-01 ;
- CRM simulé **absent** du premier incrément code (INC-03 ultérieur) ;
- STAT-05 (en attente client) reste hors chemin nominal INC-01 ;
- mono-app web simple (option indicative A) acceptable sans figer le framework ;
- données de démonstration fictives suffisantes (SAV-DEMO-001 / INT-DEMO-001).

---

## 14. Prérequis avant réalisation

| Prérequis | Priorité | Responsable pressenti | Commentaire |
|-----------|----------|----------------------|-------------|
| Décision formelle go / go conditionnel / no-go | **Haute** | Product / delivery | Ce document ; `realization-start-summary.md` indique « autorisation de code non donnée ». |
| Gel explicite du périmètre INC-01 | **Haute** | Product | Éviter l'élargissement à CRM, dashboard, STAT-07/08 au démarrage. |
| Arbitrage stack concrète (framework, langage) | **Haute** | Technique | Options comparées dans `inc-01-stack-options.md` — **aucune stack définitive imposée**. |
| Confirmation stratégie data physique | **Haute** | Technique | `inc-01-realization-start-checklist.md` §7 — persistance à décider avant code. |
| Validation données de démonstration INC-01 | **Moyenne** | Product / QA | `inc-01-demo-data.md` — jeu fictif pour démo STAT-06. |
| Revue croisée specs écrans INC-01 (hors liste Figma) | **Moyenne** | UX / Product | `screen-functional-specs.md`, `screen-inventory.md` — sans refonte Figma obligatoire. |
| Confirmation périmètre habilitations MVP | **Moyenne** | Product / RSSI | Hors périmètre cadrage initial — préciser le minimum acceptable pour INC-01. |
| BPMN exécutable (optionnel MVP) | **Basse** | Process | `03-process/process-scope.md` — modèles `.bpmn` non produits ; non bloquant si specs Git suffisantes. |
| Renommage publication legacy Notion | **Basse** | Gouvernance | Effectué — évite confusion avec assets SFIA Home. |

---

## 15. Risques et points d'attention

| Risque | Niveau | Impact | Mesure proposée |
|--------|--------|--------|----------------|
| Démarrage code sans arbitrage stack / data | **Haut** | Refonte ou blocage technique précoce | Traiter les prérequis §14 avant toute autorisation code. |
| Surdimensionnement INC-01 (CRM, dashboard, STAT-07/08) | **Haut** | Perte de focus, retard sur STAT-06 | Maintenir le gel INC-01 documenté ; P0 avant P1/P2. |
| Confusion statuts métier vs indicateurs (STAT-07/08) | **Moyen** | Bugs métier, sync incorrecte | Appliquer `inc-01-status-rules.md` et garde-fous ADR-001. |
| Attente d'une maquette Figma complète | **Moyen** | Blocage delivery inutile | Conserver la règle « Figma non bloquant » (`figma-first-screen-review.md`). |
| CRM réel réintroduit trop tôt | **Moyen** | Complexité intégration prématurée | Rester sur CRM simulé jusqu'à validation INC-03+. |
| BPMN non aligné avec l'implémentation | **Bas** | Écart processus / application | Accepter specs Git comme référence INC-01 ; BPMN en amélioration continue. |
| Dette sur habilitations / sécurité | **Moyen** | Exposition données en démo | Données fictives uniquement ; cadrer le minimum sécurité MVP avant prod. |
| Ambiguïté source de vérité (liste vs fiche vs dashboard) | **Moyen** | Incohérences UX / données | **Fiche demande fait foi** — garde-fous `mvp-scope.md` §8. |

**Synthèse :** aucun risque **bloquant documentaire** identifié pour qualifier le projet ; les risques **bloquants opérationnels** concernent surtout les arbitrages techniques et l'autorisation explicite avant code.

---

## 16. Décision go/no-go

**Décision proposée :**

- [ ] Go réalisation
- [x] Go conditionnel
- [ ] No-go temporaire

### Décision

Interv360 peut entrer en réalisation de façon maîtrisée sur le périmètre **INC-01**, sous réserve de lever les conditions préalables identifiées.

Le démarrage immédiat du code n'est pas recommandé tant que les arbitrages minimaux suivants ne sont pas réalisés :

1. décision formelle de passage en réalisation ;
2. gel du périmètre INC-01 ;
3. arbitrage stack minimal ;
4. stratégie data minimale ;
5. confirmation des responsabilités de réalisation.

### Justification

Le cadrage produit, le périmètre MVP, les parcours utilisateurs, les objets métier et l'architecture fonctionnelle sont suffisamment matures pour cadrer une première réalisation.

Le niveau de préparation est renforcé par les livrables de préparation réalisation et par la documentation INC-01 déjà constituée.

En revanche, les éléments techniques et data ne sont pas encore suffisamment arbitrés pour autoriser un démarrage code immédiat sans risque de reprise ou de divergence.

### Décision opérationnelle

La suite recommandée est d'ouvrir un cycle court d'**arbitrage technique minimal** avant réalisation INC-01.

Ce cycle devra produire :

- une décision stack minimaliste ;
- une stratégie data minimale ;
- une confirmation du périmètre INC-01 ;
- une liste des décisions nécessaires avant premier commit applicatif ;
- une autorisation explicite ou non de démarrage code.

### Statut final du cycle

**Go conditionnel — réalisation INC-01 possible après arbitrage technique minimal.**

### Réponse à la question centrale

> **Interv360 est-il prêt à passer en réalisation ?**
> **Oui, de façon conditionnelle** — le dossier documentaire le permet pour **INC-01**.
>
> **Avec quel périmètre MVP ?**
> **INC-01 — Flux SAV minimal démontrable** (16 MB P0-A, STAT-06 local, 5 écrans, sans CRM ni dashboard).
>
> **Quels prérequis restent ?**
> Voir §14 — arbitrage stack/data, gel INC-01 explicite, décision formelle, validation données de démo.

---

## 17. Suite immédiate recommandée

Ouvrir un cycle dédié :

`delivery/interv360-technical-arbitration`

**Objectif :**

- arbitrer la stack minimale ;
- arbitrer la stratégie data ;
- confirmer les choix nécessaires au démarrage INC-01 ;
- éviter un démarrage code prématuré ;
- préparer une décision explicite d'autorisation de réalisation.

**Non-périmètre de ce cycle suivant :**

- développement complet ;
- backlog Jira ;
- sprint planning ;
- publication Notion ;
- refonte UX/UI ;
- extension du périmètre au-delà d'INC-01.

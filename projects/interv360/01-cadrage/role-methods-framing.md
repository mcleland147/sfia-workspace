# Interv360 — Role Methods Framing

**Projet** : PRJ-INTERV360  
**Phase** : 01-cadrage  
**Statut** : Draft  
**Source** : business-framing.md + livrables de cadrage Interv360  
**Objet** : capitalisation méthodologique des rôles mobilisés pendant le cadrage

---

## 1. Objectif du document

Ce document ne décrit pas seulement « qui intervient » sur Interv360. Il **formalise le savoir-faire mobilisé par chaque rôle** pendant la phase de cadrage du projet pilote SFIA, à partir des livrables réellement produits.

L'objectif est de préparer la **future capitalisation SFIA** :

- templates par rôle ;
- checklists par rôle ;
- prompts par rôle ;
- critères de qualité par rôle ;
- règles de passage entre phases ;
- éléments réutilisables pour d'autres projets.

Ce document est une **base vivante**. Les méthodes par rôle ne sont pas figées à la fin du cadrage : elles doivent être **enrichies à chaque phase** du projet Interv360, dès qu'un rôle produit un nouveau livrable, porte une décision, valide un passage de phase, identifie une erreur à éviter ou génère un élément capitalisable pour la SFIA.

**Ce document ne produit pas** d'architecture technique, backlog, user stories, maquettes, Figma ou code.

---

## 2. Principe SFIA — double valeur des rôles

Chaque rôle mobilisé pendant le cadrage Interv360 doit produire **deux valeurs** :

- une **valeur immédiate** pour le projet Interv360 (décisions, livrables, validations) ;
- une **valeur durable** pour la méthode SFIA (templates, checklists, prompts, standards réutilisables).

| Rôle | Valeur projet | Valeur SFIA |
|------|---------------|-------------|
| **Business Analyst** | Besoin formalisé, parcours SAV, 56 règles RG-*, questions ouvertes Q1–Q24, objets métier §9 | Template Business Framing ; Business Rules Matrix ; prompt cadrage métier ; checklist questions ouvertes |
| **Product Owner** | 7 arbitrages MVP validés (ARB-MVP-01 à 07), périmètre MVP stabilisé, limites post-MVP | Template MVP Arbitration ; checklist priorisation MVP ; prompt revue MVP ; grille valeur / complexité |
| **Chef de projet** | Jalons cadrage atteints, gouvernance Notion/Git, validations fictives, passage de phase préparé | Template phase gate ; checklist passage de phase ; workflow Notion projet ; prompt bilan de phase |
| **Concepteur fonctionnel** | Parcours cible §6, 9 écrans candidats §14, comportements attendus, articulation métier / UX | Template Functional Framing ; Template Screen Intent ; checklist parcours fonctionnel |
| **UX/UI Designer** | Brief UX/UI validé, 8 écrans MVP, 10 parcours critiques, critères utilisabilité, garde-fous surcharge cognitive | Template UX/UI Brief ; Template Screen Brief ; checklist entrée Figma ; checklist UX Review ; prompt revue UX avant Figma |
| **Architecte** | Contrats API documentés (option C), ADR candidates, gestion erreurs intégration, journalisation | Template API Contract Framing ; Template ADR Candidate ; checklist intégration ; prompt revue architecture amont |
| **QA / Testeur** | Scénarios non happy path (email, erreurs intégration), critères testables, critères d'acceptation futurs | Template Test Scenario Matrix ; checklist QA cadrage ; prompt transformation règles → tests |
| **RSSI** | Exigences SSI email, données sensibles §9.3, accès, journalisation, conservation fictive | Checklist RSSI cadrage ; Template Secure Email Intake ; checklist données sensibles ; prompt revue SSI |
| **FinOps** | Hypothèses coûts notifications, stockage photos, logs, API ; limites MVP | Checklist FinOps cadrage ; template hypothèses coûts ; prompt revue FinOps |
| **GreenOps** | Sobriété stockage, photos, logs, géolocalisation légère, conservation fictive ARB-MVP-06 | Checklist GreenOps cadrage ; template sobriété données ; prompt revue GreenOps |
| **Data / IA** | Place de l'IA légère reportée ou optionnelle, gouvernance données, risques surcomplexification | Checklist IA légère ; template AI Use Case Framing ; prompt revue Data / IA |

### 2.1 Règle d'enrichissement continu des rôles

Les méthodes par rôle SFIA **ne se clôsent pas** à la fin du cadrage Interv360. Chaque itération projet — livrable produit, décision prise, validation effectuée ou phase franchie — doit alimenter la capitalisation méthodologique.

**À chaque itération**, une vérification systématique est attendue :

- quels rôles ont été mobilisés ?
- quel savoir-faire nouveau a été produit ?
- quelles questions types doivent être ajoutées ?
- quels livrables ont été produits ou enrichis ?
- quelles décisions ou validations ont été prises ?
- quels templates, checklists, prompts ou standards sont candidats à la capitalisation ?
- quelles erreurs à éviter ont été identifiées ?
- quels éléments devront être répercutés dans les futurs fichiers `sfia/methods/roles/` ?

| Moment projet | Action attendue sur les méthodes par rôle |
|---------------|----------------------------------------|
| **Fin de cadrage** | Consolider les §4.x ; compléter §5–§7 ; identifier les templates candidats prioritaires |
| **Validation MVP** | Enrichir Product Owner, Business Analyst, Architecte, QA ; mettre à jour décisions et erreurs à éviter |
| **Brief UX/UI** | Enrichir UX/UI Designer, Concepteur fonctionnel ; ajouter questions types et checklists Figma |
| **Préparation Figma** | Documenter garde-fous UX, points ouverts, critères entrée maquette ; capitaliser prompts revue UX |
| **Architecture** | Enrichir Architecte, RSSI, FinOps, GreenOps ; ajouter ADR candidates et limites cadrage / architecture |
| **ADR** | Mettre à jour Architecte, Chef de projet ; tracer décisions structurantes et rôles valideurs |
| **Conception fonctionnelle** | Enrichir Concepteur fonctionnel, Business Analyst ; compléter parcours, écrans, règles fonctionnelles |
| **Delivery** | Enrichir Développeur (futur), Chef de projet ; documenter savoir-faire delivery et limites |
| **QA / tests** | Enrichir QA / Testeur ; ajouter scénarios, critères testables, matrices d'erreur |
| **Recette** | Consolider QA, Product Owner, Chef de projet ; capitaliser critères d'acceptation et validations |
| **REX** | Enrichir tous les rôles mobilisés ; formaliser enseignements, erreurs évitées, templates confirmés |
| **Synchronisation Notion** | Enrichir Chef de projet ; tracer gouvernance, statuts, jalons et liens vers Git |

#### Consigne permanente pour les futures itérations

À chaque nouveau livrable Interv360, il faut vérifier si `role-methods-framing.md` ou les futurs fichiers `sfia/methods/roles/` doivent être mis à jour. Si un rôle a produit une **valeur projet** ou une **valeur SFIA** nouvelle, cette contribution doit être capitalisée.

---

## 3. Rôles mobilisés pendant le cadrage Interv360

| Rôle | Moment d'intervention | Livrables concernés | Décisions / validations associées |
|------|----------------------|---------------------|-----------------------------------|
| **Business Analyst** | Intake → cadrage ; revue cohérence ; arbitrages métier | business-framing.md (§4–§11) ; framing-review.md | Q1, Q4, Q5 ; RG-C*, RG-R* ; validation métier fictive §13 |
| **Product Owner** | Cadrage ; arbitrages MVP ; validation périmètre | mvp-arbitrations.md ; mvp-arbitration-validation.md ; business-framing §12 | ARB-MVP-01 à 07 ; limites MVP ; report portail / IA |
| **Chef de projet** | Toutes étapes cadrage ; sync Notion ; validations fictives | notion-sync-summary.md ; validations §13 business-framing | Jalons cadrage consolidé ; passage vers Figma / ADR candidates |
| **Concepteur fonctionnel** | Cadrage ; clarifications intégration / dashboard ; brief UX | business-framing §6, §14 ; dashboard-kpi-ux-review.md ; ux-ui-brief.md | ARB-MVP-07 ; parcours critiques ; validation fonctionnelle fictive |
| **UX/UI Designer** | Post-arbitrages MVP ; brief UX/UI | ux-ui-brief.md ; ux-ui-brief-validation.md ; dashboard-kpi-ux-review.md | 8 écrans MVP ; checklist entrée Figma ; validation UX fictive |
| **Architecte** | Cadrage intégrations ; réinstruction erreurs | integration-error-arbitration-review.md ; secure-email-intake-review.md ; business-framing §8 | ARB-MVP-04, ARB-MVP-05 ; ADR candidates API, erreurs, journalisation |
| **QA / Testeur** | Cadrage scénarios ; erreurs intégration ; email | integration-error-arbitration-review.md ; secure-email-intake-review.md ; business-framing §7 | Scénarios email §5 ; Error Matrix ; critères QA futurs |
| **RSSI** | Clarification email ; conservation ; données sensibles | secure-email-intake-review.md ; business-framing §9.3 ; mvp-arbitration-validation ARB-MVP-06 | Exigences SSI §3 secure-email ; validation SSI fictive |
| **FinOps** | Cadrage coûts variables ; notifications ; stockage | business-framing §12 A-FG03 ; dashboard-kpi-ux-review.md | Hypothèses coûts notifications ; limites MVP |
| **GreenOps** | Conservation ; photos ; logs ; géolocalisation | business-framing §12 A-FG01–A-FG02 ; mvp-arbitration-validation ARB-MVP-06 | Conservation fictive documentée ; sobriété PJ email |
| **Data / IA** | Questions ouvertes IA ; gouvernance données | business-framing Q7, Q15, A-IA01 ; framing-review §4 | IA légère reportée post-MVP ; critères inclusion / report |

---

## 4. Méthode par rôle

### 4.1 Business Analyst

**Mission dans SFIA**  
Transformer un besoin métier en cadrage structuré : parcours, objets, règles, questions ouvertes et critères de validation — sans présumer de la solution technique.

**Intervention dans Interv360**  
Le Business Analyst a structuré le socle métier dans `business-framing.md` : vision ServiTech Pro, parcours SAV 9 étapes (§6), 9 cas métier obligatoires (§7), 15 objets métier (§9), 56 règles RG-* (§10), questions Q1–Q24 (§11). Il a alimenté la revue de cohérence (`framing-review.md`) et les arbitrages métier (canal création, signature, KPI dirigeant).

**Questions clés portées par le rôle**

- Qui fait quoi dans le parcours SAV ?
- Quels irritants métier doivent disparaître au MVP ?
- Quelles règles de gestion s'appliquent à chaque étape ?
- Quels objets métier sont indispensables au cycle demande → clôture ?
- Quelles questions restent ouvertes avant arbitrage ?
- Comment traduire une règle métier en critère d'acceptation futur ?

**Livrables produits ou alimentés**

- `business-framing.md` (§4, §6, §7, §9, §10, §11)
- `framing-review.md` (cohérence parcours ↔ règles)
- Contributions à ARB-MVP-01 (canal), ARB-MVP-03 (signature), ARB-MVP-07 (KPI)

**Décisions ou validations associées**

- Recommandation CRM principal + saisie secours + email sécurisé non principal (ARB-MVP-01)
- Signature optionnelle structurée (ARB-MVP-03)
- KPI minimum dashboard SAV et vue dirigeant (dashboard-kpi-ux-review)
- Validation métier fictive §13 business-framing

**Savoir-faire à capitaliser**

- Méthode de formalisation parcours avec acteurs, entrées, sorties et vigilances par étape
- Matrice questions ouvertes → arbitrages
- Grille règles de gestion numérotées (RG-*) liées au parcours
- Lien explicite règle métier → critère d'acceptation futur

**Templates / checklists / prompts candidats**

- Template Business Framing
- Template Business Rules Matrix
- Prompt de cadrage métier
- Checklist questions ouvertes

**Erreurs à éviter**

- Produire des user stories ou un backlog pendant le cadrage
- Confondre besoin métier et choix technique
- Laisser des questions orphelines sans lien vers un arbitrage
- Oublier la double valeur projet / SFIA à chaque livrable

---

### 4.2 Product Owner

**Mission dans SFIA**  
Arbitrer la valeur métier vs la complexité, stabiliser le périmètre MVP, documenter les limites et préparer les évolutions post-MVP.

**Intervention dans Interv360**  
Le Product Owner a piloté la première passe d'arbitrages (`mvp-arbitrations.md`), validé les 7 décisions MVP (`mvp-arbitration-validation.md`) et arbitré les reports (portail client, retry automatique, IA légère, suivi notifications détaillé).

**Questions clés portées par le rôle**

- Quelle valeur métier démontrable avant quelle complexité ?
- Quel périmètre MVP reste maîtrisable pour un démonstrateur ?
- Quelles fonctionnalités sont reportées sans bloquer le parcours complet ?
- Quels arbitrages alimentent la capitalisation SFIA ?
- Le MVP reste-t-il un orchestrateur SAV et non un ERP ?

**Livrables produits ou alimentés**

- `mvp-arbitrations.md`
- `mvp-arbitration-validation.md`
- `business-framing.md` §12 (arbitrages A-*)
- Contributions PO dans `ux-ui-brief-validation.md`

**Décisions ou validations associées**

- ARB-MVP-01 à ARB-MVP-07 (toutes validées)
- Report portail client (ARB-MVP-02)
- Report retry automatique (ARB-MVP-05)
- Validation fictive PO du brief UX/UI

**Savoir-faire à capitaliser**

- Grille valeur / complexité par arbitrage
- Format option / recommandation / impacts / décision
- Principes d'arbitrage MVP (§2 mvp-arbitrations.md)
- Critères de passage vers phase suivante sans backlog prématuré

**Templates / checklists / prompts candidats**

- Template MVP Arbitration
- Checklist priorisation MVP
- Prompt revue MVP
- Grille valeur / complexité

**Erreurs à éviter**

- Figer le MVP avant revue de cohérence
- Élargir le scope sans documenter l'impact delivery
- Valider un arbitrage sans identifier la capitalisation SFIA associée
- Produire un backlog ou des user stories au stade cadrage

---

### 4.3 Chef de projet

**Mission dans SFIA**  
Piloter les jalons, la gouvernance Notion/Git, le suivi des livrables, les validations fictives et la capitalisation méthodologique du projet pilote.

**Intervention dans Interv360**  
Le Chef de projet a orchestré la trajectoire intake → cadrage consolidé → arbitrages validés → brief UX/UI validé. Il a maintenu la séparation Notion (gouvernance) / Git (source détaillée) et préparé la sync Notion (`notion-sync-summary.md`).

**Questions clés portées par le rôle**

- Peut-on passer à la phase suivante ?
- Tous les livrables de cadrage sont-ils au statut attendu ?
- La gouvernance Notion reflète-t-elle l'état réel du projet ?
- Les validations fictives prévues en §13 sont-elles réalisées ?
- Quels éléments SFIA capitaliser avant clôture de phase ?

**Livrables produits ou alimentés**

- Suivi transversal de tous les livrables §16 business-framing
- `notion-sync-summary.md`
- `role-methods-framing.md` (présent document)
- Validations fictives orchestrées (MVP, UX/UI)

**Décisions ou validations associées**

- Ouverture phase 01-cadrage (post-intake)
- Jalons : MVP arbitrations validated ; UX/UI brief validated
- Prochaine étape : préparation Figma ou ADR candidates
- Workflow Notion projet PRJ-INTERV360

**Savoir-faire à capitaliser**

- Matrice livrable → statut → source Git → trace Notion
- Checklist passage de phase sans architecture prématurée
- Processus validation fictive multi-rôles
- Bilan de capitalisation SFIA en fin de phase

**Templates / checklists / prompts candidats**

- Template phase gate
- Checklist passage de phase
- Workflow Notion projet
- Prompt bilan de phase

**Erreurs à éviter**

- Publier le contenu complet des docs dans Notion (duplication)
- Passer en architecture ou delivery sans jalons validés
- Oublier de tracer les validations fictives
- Négliger la capitalisation SFIA du projet pilote

---

### 4.4 Concepteur fonctionnel

**Mission dans SFIA**  
Structurer les parcours cibles, les écrans candidats, les comportements attendus et l'articulation entre logique métier et expérience utilisateur.

**Intervention dans Interv360**  
Le Concepteur fonctionnel a détaillé les 9 écrans candidats (§14 business-framing), participé à la clarification dashboard/KPI (`dashboard-kpi-ux-review.md`) et co-validé le brief UX/UI (`ux-ui-brief-validation.md`).

**Questions clés portées par le rôle**

- Quel parcours cible couvre le cycle SAV de bout en bout ?
- Quels écrans sont indispensables vs reportables ?
- Quels comportements attendus par écran (actions, statuts, transitions) ?
- Comment différencier dashboard SAV et vue dirigeant ?
- Quels parcours non happy path doivent être visibles ?

**Livrables produits ou alimentés**

- `business-framing.md` §6, §14
- `dashboard-kpi-ux-review.md`
- `ux-ui-brief.md` (§4 parcours critiques, §5 fiches écran)
- `ux-ui-brief-validation.md`

**Décisions ou validations associées**

- Noyau 8 écrans MVP (ARB-MVP-07)
- Différenciation tableau de bord SAV vs vue dirigeant
- Validation fonctionnelle fictive brief UX/UI

**Savoir-faire à capitaliser**

- Template fiche écran (objectif, utilisateurs, données, actions, critères UX)
- Matrice parcours → écrans → règles RG-*
- Méthode de priorisation écrans sans wireframe
- Articulation parcours fonctionnel / brief UX

**Templates / checklists / prompts candidats**

- Template Functional Framing
- Template Screen Intent
- Checklist parcours fonctionnel

**Erreurs à éviter**

- Produire des maquettes ou wireframes pendant le cadrage
- Confondre écran candidat et écran MVP validé sans arbitrage PO
- Oublier les parcours d'erreur (email rejeté, sync échouée)
- Surcharger un écran de fonctionnalités post-MVP

---

### 4.5 UX/UI Designer

**Mission dans SFIA**  
Préparer la conception UX/UI : personas, parcours utilisateurs, brief exploitable, critères d'utilisabilité et garde-fous avant toute maquette ou Figma.

**Intervention dans Interv360**  
Le UX/UI Designer a produit le brief UX/UI (`ux-ui-brief.md`) : 6 personas, 10 parcours critiques, 8 fiches écran MVP, 8 principes UX transverses, checklist entrée Figma. Validation fictive dans `ux-ui-brief-validation.md`.

**Questions clés portées par le rôle**

- Quels personas prioritaires et quels besoins UX par persona ?
- Quels parcours utilisateurs critiques au MVP ?
- Quels critères d'utilisabilité par écran ?
- Quels garde-fous contre la surcharge cognitive (dashboard, KPI) ?
- Le brief est-il suffisant pour préparer Figma sans produire de maquette ?

**Livrables produits ou alimentés**

- `ux-ui-brief.md`
- `ux-ui-brief-validation.md`
- Contributions UX dans `dashboard-kpi-ux-review.md` (garde-fous §6)

**Décisions ou validations associées**

- Règle Figma : brief validé avant maquette (§14.6 business-framing)
- 8 écrans MVP confirmés avec fiches homogènes
- 8 points ouverts avant maquette conservés visibles (non bloquants)
- Validation fictive PO / CF / UX

**Savoir-faire à capitaliser**

- Template brief UX/UI préalable à Figma
- Checklist entrée Figma réutilisable
- Standard validation fictive UX avant maquette
- Principes UX transverses avec risques évités

**Templates / checklists / prompts candidats**

- Template UX/UI Brief
- Template Screen Brief
- Checklist entrée Figma
- Checklist UX Review
- Prompt revue UX avant Figma

**Erreurs à éviter**

- Déclencher Figma avant validation du brief
- Produire wireframes ou maquettes pendant le cadrage
- Ignorer les contraintes SSI / erreurs dans les parcours UX
- Surcharger le dashboard de KPI non actionnables

---

### 4.6 Architecte

**Mission dans SFIA**  
Cadrer les intégrations simulées, les contrats API, les ADR candidates, la gestion d'erreurs et la journalisation — sans produire d'architecture technique détaillée en phase cadrage.

**Intervention dans Interv360**  
L'Architecte a réinstruit ARB-MVP-04 et ARB-MVP-05 (`integration-error-arbitration-review.md`), cadré le contrat email (`secure-email-intake-review.md`) et confirmé 8 ADR candidates (`mvp-arbitration-validation.md` §5).

**Questions clés portées par le rôle**

- Quel niveau de simulation des intégrations pour un démonstrateur crédible ?
- Quels contrats API documenter sans implémentation réelle ?
- Comment rendre les erreurs d'intégration visibles et reprises manuellement ?
- Quelle journalisation minimale pour la traçabilité ?
- Quelles décisions relèvent d'une ADR candidate vs du cadrage ?

**Livrables produits ou alimentés**

- `integration-error-arbitration-review.md`
- `secure-email-intake-review.md` (contrat `POST /email/intake`)
- `business-framing.md` §8 (intégrations simulées)
- ADR candidates §5 mvp-arbitration-validation.md

**Décisions ou validations associées**

- ARB-MVP-04 : vrais contrats API documentés, implémentation simulée (option C)
- ARB-MVP-05 : erreurs visibles + reprise manuelle ; retry hors MVP
- ADR candidates : contrats API, erreurs, auth email, journalisation, conservation

**Savoir-faire à capitaliser**

- Standard « contrats API documentés + implémentation simulée »
- Matrice niveau simulation vs crédibilité vs effort
- Lien arbitrage intégration ↔ gestion erreurs indissociable
- Frontière claire cadrage / architecture technique

**Templates / checklists / prompts candidats**

- Template API Contract Framing
- Template ADR Candidate
- Checklist intégration
- Prompt revue architecture amont

**Erreurs à éviter**

- Produire une architecture technique détaillée pendant le cadrage
- Choisir des mocks statiques sans contrats formalisés
- Traiter les erreurs d'intégration après le choix de simulation
- Finaliser des ADR au stade cadrage

---

### 4.7 QA / Testeur

**Mission dans SFIA**  
Identifier les critères testables, les scénarios non happy path, les cas d'erreur et préparer la transformation règles → tests sans produire de PV de recette au cadrage.

**Intervention dans Interv360**  
Le QA / Testeur a alimenté les scénarios email (`secure-email-intake-review.md` §5), les cas d'erreur intégration (`integration-error-arbitration-review.md`), les critères QA futurs par flux et les points ouverts UX testables (`ux-ui-brief-validation.md` §4).

**Questions clés portées par le rôle**

- Comment prouver que le parcours SAV fonctionne de bout en bout ?
- Quels scénarios non happy path sont obligatoires au MVP ?
- Quels critères d'acceptation dérivent des règles RG-* ?
- Comment tester une intégration simulée sans système réel ?
- Quels cas d'erreur doivent être visibles pour le dirigeant ?

**Livrables produits ou alimentés**

- Scénarios §5 secure-email-intake-review.md
- Error Matrix integration-error-arbitration-review.md
- Critères QA email, intégration, parcours (business-framing §13)
- Points ouverts QA dans ux-ui-brief-validation.md §4

**Décisions ou validations associées**

- Cas d'erreur email obligatoires MVP (rejet, PJ invalide, doublon)
- Écran anomalies + reprise manuelle (ARB-MVP-05)
- Critères testables liés aux 7 arbitrages MVP

**Savoir-faire à capitaliser**

- Template Test Scenario Matrix par flux
- Méthode scénario → règle RG-* → critère d'acceptation
- Checklist QA cadrage (sans exécution de tests)
- Couverture non happy path dès le cadrage

**Templates / checklists / prompts candidats**

- Template Test Scenario Matrix
- Checklist QA cadrage
- Prompt transformation règles → tests

**Erreurs à éviter**

- Attendre la phase tests pour identifier les scénarios d'erreur
- Ne tester que le happy path CRM → clôture
- Produire un plan de test exécutoire pendant le cadrage
- Oublier la traçabilité des rejets email et erreurs sync

---

### 4.8 RSSI

**Mission dans SFIA**  
Challenger les données sensibles, les accès, la sécurité des canaux d'intégration (email), la journalisation et la conservation — avec validation SSI fictive documentée.

**Intervention dans Interv360**  
Le RSSI a structuré les exigences SSI du canal email (`secure-email-intake-review.md` §3), participé à ARB-MVP-06 (conservation fictive) et alimenté les règles RG-S*, RG-C02, RG-I07.

**Questions clés portées par le rôle**

- Quelles données sont sensibles ou critiques (§9.3) ?
- Comment authentifier et autoriser la source email ?
- Quelles pièces jointes accepter ou rejeter ?
- Quelle journalisation pour les réceptions et rejets ?
- Quelle conservation fictive sans implémentation lourde ?

**Livrables produits ou alimentés**

- `secure-email-intake-review.md` §3 (exigences SSI)
- `business-framing.md` §9.3 (données sensibles)
- ARB-MVP-06 (conservation photos / signatures / logs)
- Checklist SSI email (capitalisation mvp-arbitration-validation §7)

**Décisions ou validations associées**

- Email = canal d'intégration sécurisé complet (non principal)
- Conservation limitée fictive documentée (ARB-MVP-06)
- ADR candidates : auth email, journalisation, conservation données sensibles
- Validation SSI fictive secure-email-intake-review

**Savoir-faire à capitaliser**

- Template Secure Email Intake avec exigences SSI tabulaires
- Checklist données sensibles par objet métier
- Méthode validation SSI fictive au cadrage
- Lien exigence SSI → règle RG-* → scénario QA

**Templates / checklists / prompts candidats**

- Checklist RSSI cadrage
- Template Secure Email Intake
- Checklist données sensibles
- Prompt revue SSI

**Erreurs à éviter**

- Traiter l'email comme un simple canal secondaire sans exigences SSI
- Implémenter purge/archivage lourd au MVP
- Ignorer les pièces jointes dans le cadrage sécurité
- Confondre conservation fictive documentée et implémentation

---

### 4.9 FinOps

**Mission dans SFIA**  
Identifier les coûts variables (notifications, stockage, logs, API) et challenger les choix MVP sous l'angle économique sans bloquer le démonstrateur.

**Intervention dans Interv360**  
Le FinOps a contribué aux hypothèses coûts notifications (ARB-MVP-02), stockage photos/PJ (ARB-MVP-06, secure-email §3), et aux limites MVP évitant la dérive scope (framing-review, business-framing A-FG03).

**Questions clés portées par le rôle**

- Quels coûts variables surveiller dès le prototype ?
- Quel impact FinOps des notifications client simulées ?
- Quel coût du stockage photos, PJ email, logs d'intégration ?
- Quels arbitrages réduisent les coûts sans perdre la valeur démo ?
- Quelles hypothèses documenter sans modèle financier complet ?

**Livrables produits ou alimentés**

- Hypothèses FinOps dans business-framing §12 (A-FG03)
- Limites taille PJ email (secure-email-intake-review §3)
- Report portail client (impact coût ARB-MVP-02)

**Décisions ou validations associées**

- Notifications uniquement vs portail (coût / complexité)
- Conservation fictive sans implémentation lourde (ARB-MVP-06)
- Limites MVP dashboard (pas de BI, pas de prédictif IA)

**Savoir-faire à capitaliser**

- Checklist coûts variables par type de projet applicatif
- Template hypothèses coûts (notifications, stockage, API)
- Grille arbitrage avec dimension FinOps explicite

**Templates / checklists / prompts candidats**

- Checklist FinOps cadrage
- Template hypothèses coûts
- Prompt revue FinOps

**Erreurs à éviter**

- Ignorer les coûts des notifications et du stockage médias
- Produire un modèle financier complet au cadrage
- Bloquer un arbitrage métier sans alternative FinOps documentée

---

### 4.10 GreenOps

**Mission dans SFIA**  
Challenger la sobriété applicative : stockage raisonné, compression, durée de conservation, limitation des traitements et logs inutiles.

**Intervention dans Interv360**  
Le GreenOps a participé à ARB-MVP-06 (conservation photos/signatures/logs), aux limites PJ email (`secure-email-intake-review.md`), à la géolocalisation légère (A-FG06) et aux principes UX de sobriété visuelle (`ux-ui-brief.md` §7).

**Questions clés portées par le rôle**

- Qu'est-ce qu'on évite de stocker ou traiter inutilement ?
- Quelle durée/volume fictif pour photos, signatures, logs ?
- Quels principes GreenOps pour les pièces jointes email ?
- La géolocalisation légère est-elle justifiée au MVP ?
- Comment limiter la surcharge cognitive = sobriété UX ?

**Livrables produits ou alimentés**

- ARB-MVP-06 (conservation fictive documentée)
- Exigences GreenOps secure-email §3 (limites PJ)
- business-framing A-FG01, A-FG02, A-FG04

**Décisions ou validations associées**

- Conservation limitée fictive RSSI / GreenOps (ARB-MVP-06)
- Limites taille/format PJ email
- Géolocalisation légère : candidate, non tranchée au cadrage

**Savoir-faire à capitaliser**

- Template sobriété données (photos, logs, PJ)
- Checklist GreenOps cadrage alignée RSSI
- Lien conservation fictive documentée vs implémentation

**Templates / checklists / prompts candidats**

- Checklist GreenOps cadrage
- Template sobriété données
- Prompt revue GreenOps

**Erreurs à éviter**

- Stocker indéfiniment photos et logs sans règle documentée
- Ignorer l'impact GreenOps des pièces jointes email
- Confondre sobriété UX et appauvrissement fonctionnel

---

### 4.11 Data / IA

**Mission dans SFIA**  
Évaluer la place de l'IA légère, la gouvernance des données et les critères d'inclusion ou de report post-MVP sans surcomplexifier le démonstrateur.

**Intervention dans Interv360**  
Le Data / IA a traité les questions Q7, Q15, arbitrage A-IA01 (business-framing §11–§12) et recommandé le **report de l'IA légère post-MVP** tout en documentant les cas d'usage candidats.

**Questions clés portées par le rôle**

- Quelle IA légère apporte de la valeur sans bloquer le MVP ?
- Quelles données sont utilisables pour une assistance IA future ?
- Quelle gouvernance IA (qualité, traçabilité, coût) ?
- Quels critères d'inclusion ou de report post-MVP ?
- Quels risques de surcomplexification (R-FG05, R-S07) ?

**Livrables produits ou alimentés**

- business-framing Q7, Q15, A-IA01, A-FG05
- framing-review §4 (inclusion IA légère — priorité moyenne)
- Limites MVP ux-ui-brief (pas de prédictif IA dashboard)

**Décisions ou validations associées**

- IA légère reportée post-MVP (priorité moyenne framing-review)
- Pas de BI avancée ni prédictif IA au dashboard MVP
- ADR candidate IA : phase ultérieure si retenue

**Savoir-faire à capitaliser**

- Template AI Use Case Framing (cas, données, valeur, risques)
- Checklist IA légère : MVP / option / post-MVP
- Grille risques surcomplexification IA

**Templates / checklists / prompts candidats**

- Checklist IA légère
- Template AI Use Case Framing
- Prompt revue Data / IA

**Erreurs à éviter**

- Intégrer l'IA au MVP par défaut
- Oublier la gouvernance des données sensibles pour l'IA
- Promettre de l'IA sans cas d'usage métier identifié

---

## 5. Matrice rôle → livrables

| Livrable | Rôles principaux | Rôles contributeurs | Capitalisation SFIA |
|----------|------------------|----------------------|---------------------|
| business-framing.md | Business Analyst, Concepteur fonctionnel | Product Owner, Architecte, RSSI, FinOps, GreenOps, Data/IA, Chef de projet | Template Business Framing ; Role Matrix §5 ; Business Rules Matrix |
| framing-review.md | Chef de projet, Business Analyst | Product Owner, Tous rôles transverses | Template Framing Review ; checklist cohérence cadrage |
| mvp-arbitrations.md | Product Owner | Business Analyst, Architecte, Concepteur fonctionnel, RSSI, GreenOps | Template MVP Arbitration |
| mvp-arbitration-validation.md | Product Owner, Chef de projet | Business Analyst, UX/UI Designer, Architecte, QA | Template MVP Arbitration Validation |
| integration-error-arbitration-review.md | Architecte, QA / Testeur | Product Owner, RSSI | Standard contrats API simulés ; Template Error Matrix |
| secure-email-intake-review.md | RSSI, Architecte | Business Analyst, QA, GreenOps, FinOps | Template Secure Email Intake ; Checklist SSI email |
| dashboard-kpi-ux-review.md | Concepteur fonctionnel, UX/UI Designer | Business Analyst, Product Owner, FinOps | Template Dashboard KPI Matrix ; Template Executive View Framing |
| ux-ui-brief.md | UX/UI Designer, Concepteur fonctionnel | Product Owner, Business Analyst, QA | Template UX/UI Brief ; Template Screen Brief |
| ux-ui-brief-validation.md | UX/UI Designer, Product Owner | Concepteur fonctionnel, Chef de projet | Template UX/UI Brief Validation ; Checklist entrée Figma |
| Futur brief Figma | UX/UI Designer | Concepteur fonctionnel, Product Owner | Template Figma Brief ; Standard cadrage Figma |
| Futures ADR candidates | Architecte | RSSI, QA, GreenOps, FinOps, Chef de projet | Template ADR Candidate ; checklist ADR amont |

---

## 6. Matrice rôle → questions types

| Rôle | Questions types à poser en cadrage |
|------|-----------------------------------|
| **Business Analyst** | Quel est le parcours métier cible de bout en bout ? · Quels irritants prioritaires disparaissent au MVP ? · Quelles règles de gestion s'appliquent à chaque étape ? · Quels objets métier sont indispensables ? · Quelles questions restent ouvertes et vers quel arbitrage ? · Quels cas métier obligatoires (CRM, email, erreur) couvrir ? · Comment une règle RG-* devient-elle un critère d'acceptation ? · Quels acteurs interviennent à chaque étape ? |
| **Product Owner** | Quelle valeur métier démontrable avant quelle complexité ? · Quel périmètre MVP reste maîtrisable ? · Quelles fonctionnalités reporter sans casser le parcours ? · Quel arbitrage alimente la capitalisation SFIA ? · Le MVP reste-t-il un orchestrateur et non un ERP ? · Quels indicateurs dirigeant minimum au MVP ? · Portail client ou notifications uniquement ? · L'IA légère entre-t-elle dans le MVP ? |
| **Chef de projet** | Tous les livrables de cadrage sont-ils au statut attendu ? · Peut-on passer à la phase suivante ? · Notion reflète-t-il l'état gouverné du projet ? · Les validations fictives prévues sont-elles réalisées ? · Quels templates SFIA capitaliser en fin de phase ? · Quels risques bloquent le passage de phase ? · Git reste-t-il la source détaillée sans duplication Notion ? · Quelle prochaine étape : Figma ou ADR candidates ? |
| **Concepteur fonctionnel** | Quel parcours cible couvre le cycle complet ? · Quels écrans sont indispensables vs reportables ? · Quels comportements attendus par écran ? · Comment différencier dashboard opérationnel et vue dirigeant ? · Quels parcours non happy path rendre visibles ? · Quelles actions en ≤ 3 clics pour les tâches fréquentes ? · Quels statuts et transitions par objet ? · Quels points de vigilance UX par parcours ? |
| **UX/UI Designer** | Quels personas prioritaires et besoins UX par persona ? · Quels parcours utilisateurs critiques ? · Quels critères d'utilisabilité par écran ? · Quels garde-fous contre la surcharge cognitive ? · Le brief est-il suffisant avant Figma ? · Quels KPI above the fold sur le dashboard ? · Quels principes UX transverses (mobile, statuts, alertes) ? · Quels points ouverts restent visibles avant maquette ? |
| **Architecte** | Quel niveau de simulation des intégrations pour le démonstrateur ? · Quels contrats API documenter sans implémentation réelle ? · Comment rendre les erreurs visibles et reprises manuellement ? · Quelle journalisation minimale ? · Quelles ADR candidates sans les finaliser ? · Quels flux CRM, calendrier, email, notifications cadrer ? · Quelle frontière cadrage / architecture technique ? · Comment lier contrats API et scénarios d'erreur ? |
| **QA / Testeur** | Comment prouver le parcours SAV de bout en bout ? · Quels scénarios non happy path obligatoires ? · Quels critères d'acceptation dérivent des RG-* ? · Comment tester une intégration simulée ? · Quels cas d'erreur visibles pour le dirigeant ? · Quels scénarios email (rejet, PJ invalide, doublon) ? · Quelle Error Matrix par flux ? · Quels critères QA futurs sans exécuter de tests au cadrage ? |
| **RSSI** | Quelles données sont sensibles ou critiques ? · Comment authentifier la source email ? · Quels expéditeurs autoriser ? · Quelles pièces jointes accepter ou rejeter ? · Quelle journalisation des réceptions et rejets ? · Quelle conservation fictive sans implémentation lourde ? · Quels accès par profil utilisateur ? · Quelles ADR candidates sécurité ? |
| **FinOps** | Quels coûts variables surveiller (notifications, stockage, API) ? · Quel impact FinOps du portail vs notifications ? · Quel coût stockage photos et PJ email ? · Quels arbitrages réduisent les coûts sans perdre la démo ? · Quelles hypothèses documenter sans modèle financier complet ? · Quels logs conserver et à quel coût ? · Quelle fréquence de notifications acceptable ? · Quels services IA futurs et leur coût ? |
| **GreenOps** | Qu'éviter de stocker ou traiter inutilement ? · Quelle durée/volume fictif photos, signatures, logs ? · Quels principes pour les PJ email ? · La géolocalisation légère est-elle justifiée ? · Comment limiter la surcharge cognitive = sobriété UX ? · Quelle compression ou limitation médias ? · Quels traitements différables post-MVP ? · Quels principes GreenOps alignés RSSI ? |
| **Data / IA** | Quelle IA légère apporte de la valeur sans bloquer le MVP ? · Quelles données utilisables pour une assistance future ? · Quelle gouvernance IA (qualité, traçabilité, coût) ? · MVP, option ou post-MVP pour l'IA ? · Quels risques de surcomplexification ? · Quels cas d'usage IA candidats (résumé CR, classification) ? · Quelles données sensibles exclues de l'IA ? · Quelle ADR candidate si IA retenue ? |

---

## 7. Matrice rôle → templates candidats

| Rôle | Template candidat | Priorité de capitalisation |
|------|-------------------|----------------------------|
| Business Analyst | Template Business Framing | **Haute** |
| Business Analyst | Template Business Rules Matrix | **Haute** |
| Business Analyst | Checklist questions ouvertes | **Haute** |
| Business Analyst | Prompt cadrage métier | **Moyenne** |
| Product Owner | Template MVP Arbitration | **Haute** |
| Product Owner | Template MVP Arbitration Validation | **Haute** |
| Product Owner | Checklist priorisation MVP | **Haute** |
| Product Owner | Grille valeur / complexité | **Moyenne** |
| Chef de projet | Template phase gate | **Haute** |
| Chef de projet | Checklist passage de phase | **Haute** |
| Chef de projet | Workflow Notion projet | **Moyenne** |
| Chef de projet | Prompt bilan de phase | **Moyenne** |
| Concepteur fonctionnel | Template Functional Framing | **Haute** |
| Concepteur fonctionnel | Template Screen Intent | **Moyenne** |
| Concepteur fonctionnel | Checklist parcours fonctionnel | **Moyenne** |
| UX/UI Designer | Template UX/UI Brief | **Haute** |
| UX/UI Designer | Template UX/UI Brief Validation | **Haute** |
| UX/UI Designer | Checklist entrée Figma | **Haute** |
| UX/UI Designer | Template Screen Brief | **Moyenne** |
| UX/UI Designer | Prompt revue UX avant Figma | **Moyenne** |
| Architecte | Template API Contract Framing | **Haute** |
| Architecte | Template ADR Candidate | **Haute** |
| Architecte | Checklist intégration | **Moyenne** |
| Architecte | Prompt revue architecture amont | **Moyenne** |
| QA / Testeur | Template Test Scenario Matrix | **Haute** |
| QA / Testeur | Checklist QA cadrage | **Moyenne** |
| QA / Testeur | Prompt transformation règles → tests | **Moyenne** |
| RSSI | Template Secure Email Intake | **Haute** |
| RSSI | Checklist RSSI cadrage | **Haute** |
| RSSI | Checklist données sensibles | **Moyenne** |
| FinOps | Checklist FinOps cadrage | **Moyenne** |
| FinOps | Template hypothèses coûts | **Basse** |
| GreenOps | Checklist GreenOps cadrage | **Moyenne** |
| GreenOps | Template sobriété données | **Moyenne** |
| Data / IA | Checklist IA légère | **Moyenne** |
| Data / IA | Template AI Use Case Framing | **Basse** |

---

## 8. Découpage futur en templates SFIA

Le présent document constitue une **première capitalisation globale** de la méthode par rôle observée sur Interv360. Il servira de matière première pour un **découpage en fichiers méthodologiques réutilisables** :

| Fichier cible | Contenu attendu |
|---------------|-----------------|
| business-analyst-method.md | Cadrage métier, parcours, règles, questions ouvertes |
| product-owner-method.md | Arbitrages MVP, priorisation, validation périmètre |
| project-manager-method.md | Jalons, gouvernance, passage de phase, capitalisation |
| functional-designer-method.md | Parcours fonctionnels, écrans, comportements |
| ux-ui-designer-method.md | Brief UX/UI, personas, checklist Figma |
| architect-method.md | Intégrations simulées, contrats API, ADR candidates |
| qa-tester-method.md | Scénarios, critères testables, non happy path |
| rssi-method.md | Données sensibles, SSI, email sécurisé, conservation |
| finops-method.md | Coûts variables, hypothèses, limites MVP |
| greenops-method.md | Sobriété, stockage, conservation fictive |
| data-ai-method.md | IA légère, gouvernance données, report post-MVP |

**Emplacement cible proposé :** `sfia/methods/roles/`

Chaque fichier extrait reprendra le format §4.x (mission, intervention, questions, livrables, décisions, savoir-faire, templates, erreurs) enrichi au fil des prochains projets pilotes.

---

## 9. Critères de qualité d'un rôle SFIA

Un rôle est correctement mobilisé dans la méthode SFIA lorsque :

- [ ] le rôle intervient **au bon moment** de la phase (cadrage, pas delivery prématuré) ;
- [ ] il produit une **valeur projet identifiable** (décision, livrable, validation) ;
- [ ] il produit une **valeur SFIA capitalisable** (template, checklist, prompt candidat) ;
- [ ] ses **questions clés sont explicites** et réutilisables ;
- [ ] ses **livrables sont traçables** (fichier Git, statut, lien Notion si publié) ;
- [ ] ses **validations sont documentées** (réelles ou fictives) ;
- [ ] ses **templates candidats sont identifiés** avec priorité de capitalisation ;
- [ ] ses **limites sont claires** (ce que le rôle ne produit pas à ce stade) ;
- [ ] ses **erreurs à éviter sont connues** et partagées ;
- [ ] le rôle est **enrichi dynamiquement au fil des phases projet**, et non figé à la fin du cadrage.

---

## 10. Capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template Role Method | Structure §4.x réutilisable par rôle | Template |
| Template Role Question Matrix | §6 — questions types par rôle | Template |
| Template Role Deliverable Matrix | §5 — rôles par livrable | Template |
| Checklist Role Quality | §9 — critères qualité rôle SFIA | Checklist |
| Prompt génération méthode rôle | Générer une fiche rôle depuis un projet pilote | Prompt |
| Prompt découpage templates par rôle | Extraire un fichier `sfia/methods/roles/*.md` depuis ce document | Prompt |
| Standard double valeur rôle projet / SFIA | §2 — principe obligatoire à chaque intervention | Standard |
| Standard d'enrichissement continu des rôles | Mise à jour des méthodes rôle à chaque itération projet | Standard |

---

## 11. Conclusion

Le cadrage Interv360 a mobilisé **11 rôles** — 7 rôles cœur projet (Business Analyst, Product Owner, Chef de projet, Concepteur fonctionnel, UX/UI Designer, Architecte, QA / Testeur) et **4 rôles transverses** (RSSI, FinOps, GreenOps, Data / IA) — chacun avec une contribution traçable dans les livrables de cadrage.

Ce document formalise leur **méthode d'intervention** afin de préparer la capitalisation SFIA : templates, checklists, prompts et standards réutilisables pour les futurs projets.

Ce document devra être **mis à jour au fil des prochaines phases Interv360** — architecture, design, delivery, tests, recette, REX — avant d'être découpé en templates définitifs.

La prochaine étape pourra consister à **découper ce document** en fichiers méthodologiques par rôle dans `sfia/methods/roles/`, puis à alimenter les référentiels SFIA (templates, prompts, standards) sans reproduire une description RH générique des rôles.

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*

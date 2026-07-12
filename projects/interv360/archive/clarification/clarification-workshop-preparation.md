# Interv360 — Préparation atelier de clarification

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture (préparation atelier)  
**Type** : Support atelier — clarification post-analyse QA  
**Statut** : Prepared — workshop not run  
**Sources** : `qa-transverse-analysis.md`, `ux-ui-brief-validation.md`, cadrage consolidé

---

## 1. Objectif de l'atelier

Cet atelier vise à **clarifier les points encore ambigus** avant toute **conception détaillée**, **maquette Figma** ou **architecture fonctionnelle approfondie**.

**Ce que l'atelier n'est pas :**

- il ne produit **pas** de backlog ;
- il ne produit **pas** de user stories ;
- il ne produit **pas** de cas de tests ;
- il ne lance **pas** le delivery ;
- il ne publie **pas** dans Notion.

**Ce que l'atelier est :**

- un moment de **décision collective** pour stabiliser règles, statuts, UX et arbitrages encore ouverts ;
- un filet de **qualité amont** complémentaire au rôle QA / Testeur (`docs/methods/roles/qa-tester-method.md`).

---

## 2. Contexte

| Élément | État |
|---------|------|
| **Cadrage métier** | Produit — `2026-06-27-business-framing.md` (parcours, objets, 56 RG-*, risques) |
| **Arbitrages MVP** | **7 validés** — `mvp-arbitration-validation.md` |
| **Brief UX/UI** | **Validé** — `ux-ui-brief.md` + `ux-ui-brief-validation.md` |
| **Analyse QA transverse** | **Intégrée** — `qa-transverse-analysis.md` |
| **Testabilité opérationnelle** | **Partielle** — règles RG majoritairement « À définir », 8 points UX ouverts |

**Constat QA** : le cadrage est **solide structurellement** (vision, parcours, traçabilité ARB-MVP → RG → écran), mais **insuffisamment opérationnel** pour une future vérification fine sans clarification.

---

## 3. Objectifs de sortie

À la fin de l'atelier, on doit obtenir :

- une **position** sur les **8 points UX ouverts** (`ux-ui-brief-validation.md` §4) ;
- une **priorisation** des règles RG à détailler en premier (socle MVP) ;
- une **première version** du mapping des statuts (plateforme ↔ CRM simulé ↔ libellés utilisateur) ;
- une **décision** sur les **conditions de clôture sans signature** (ARB-MVP-03 : signature optionnelle) ;
- un **arbitrage clair** sur **géolocalisation / IA** in ou out MVP ;
- une **liste de décisions** à transformer ensuite en documents de cadrage ou **ADR candidates**.

---

## 4. Participants / rôles SFIA recommandés

| Rôle | Contribution attendue |
|------|-------------------------|
| **Product Owner** | Arbitrer périmètre MVP, priorisation KPI, format CR, clôture, géoloc / IA |
| **Business Analyst** | Détailler règles RG, données minimales, qualification, mapping statuts, anti-doublon |
| **UX/UI Designer** | Trancher points UX ouverts, mobile technicien, alertes dashboard, représentation erreurs |
| **QA / Testeur** | Poser questions de testabilité, happy / non happy path, traçabilité future — sans produire de tests |
| **Architecte** (applicatif ou fonctionnel) | Cadrer mapping statuts, erreurs intégration, contrats API simulés, impacts sync |
| **RSSI / Sécurité** | Si nécessaire : email sécurisé, conservation, géoloc, données sensibles |
| **Project Manager** | Faciliter l'atelier, tracer décisions, planifier documents de sortie |

*Valideurs fictifs Interv360 mobilisables : Responsable SAV, Technicien terrain, Dirigeant, Manager opérationnel.*

---

## 5. Agenda proposé

| Séquence | Durée | Objectif |
|----------|-------|----------|
| 1. Rappel contexte et garde-fous | 10 min | Aligner participants ; rappeler : pas backlog, pas tests, pas delivery |
| 2. Revue des points ouverts UX | 25 min | Trancher ou décider report des 8 sujets §6 |
| 3. Revue des règles RG prioritaires | 30 min | Clarifier RG-C04, RG-C05, RG-I05, RG-I06, RG-R02, RG-R05 |
| 4. Mapping des statuts | 20 min | Esquisser statuts, libellés, visibilité par rôle |
| 5. Clôture sans signature | 15 min | Conditions minimales de clôture (ARB-MVP-03) |
| 6. Géoloc / IA | 15 min | Arbitrer in ou out MVP |
| 7. Décisions, actions et suites | 15 min | Lister décisions, documents cibles, prochaines étapes |

**Durée totale indicative** : ~2 h 10.

---

## 6. Points UX ouverts à clarifier

*Source exclusive : `ux-ui-brief-validation.md` §4.*

| Point UX | Question à trancher | Impact | Décision attendue |
|----------|---------------------|--------|-----------------|
| **Niveau de détail fiche demande** | Checklist qualification **minimale** vs **détaillée** ? | Parcours qualification ; testabilité RG-C07 | Position PO / Responsable SAV (fictif) |
| **Format exact du compte rendu** | **Web seul** vs **export PDF** au MVP ? | Clôture, preuve client, RG-R01 | Position PO |
| **Vue jour/semaine du planning** | Quelle **vue par défaut** du planning ? | Démonstration conflits créneau (RG-P03) | Position Responsable SAV / planning |
| **Niveau de détail alertes dashboard** | **Nombre max** d'alertes visibles ; hiérarchie ? | Lisibilité dashboard SAV ; risque R-M08 | Position PO / Manager |
| **Wording des statuts** | **Libellés utilisateur unifiés** (lien RG-I05) ? | Cohérence écrans, CRM simulé, filtres | Liste de libellés candidats — BA |
| **Priorité KPI above the fold** | **Top 5–7 KPI** prioritaires dashboard SAV ? | Différenciation vs vue dirigeant | Position PO / Dirigeant (fictif) |
| **Comportement mobile technicien** | **Mobile prioritaire** vs desktop au MVP ? | Parcours technicien, CR terrain (R-UX05) | Position PO / Technicien (fictif) |
| **Représentation erreurs intégration** | **Log technique** vs **message métier** à l'écran ? | Écran anomalies ; compréhension manager (ARB-MVP-05) | Position Manager opérationnel / QA |

---

## 7. Règles RG MVP prioritaires

| Règle | Sujet | Pourquoi prioritaire | Clarification attendue |
|-------|-------|----------------------|------------------------|
| **RG-C04** | Anti-doublon cross-canal (CRM, email, saisie) | ARB-MVP-01 : canaux multiples ; risque doubles saisies (R-UX04) | Critères de détection ; action si doublon suspecté ; blocage ou fusion ? |
| **RG-C05** | Données minimales obligatoires à la création | Bloque qualification et planification ; lien Q3, template formulaire | Liste champs obligatoires par canal (CRM / email / manuel) |
| **RG-I05** | Mapping des statuts plateforme ↔ systèmes simulés | ADR candidate A-I06 ; incohérences sync (R-I02) ; wording UX ouvert | Table de correspondance initiale ; statuts CRM vs internes |
| **RG-I06** | Gestion erreurs / anomalies d'intégration | ARB-MVP-05 ; écran anomalies MVP ; CF9 | Niveaux gravité ; visibilité ; lien représentation erreurs UX |
| **RG-R02** | Signature client obligatoire ou optionnelle | ARB-MVP-03 validé : **optionnelle** — à opérationnaliser | Confirmer non-blocage ; champs signature structurés |
| **RG-R05** | Conditions de clôture d'une intervention | Clôture sans signature ; facturation simulée ; sync CRM | Prérequis minimaux pour passer à « clôturé » |
| **Autres RG à confirmer** | RG-C06, RG-C07, RG-P03, RG-R01, RG-I08 | Sources : chaîne création → qualification → planification → clôture | Lister si l'atelier a le temps ; sinon atelier complémentaire |

*Note : RG-R01 (champs obligatoires du compte rendu) est lié à la section 9 — à traiter conjointement avec clôture.*

---

## 8. Mapping / wording des statuts

### Objectif

Préparer une **première structure de discussion** — **sans figer** la solution définitive. La liste canonique sera documentée **après** l'atelier (ex. `status-mapping.md`).

### Candidats mentionnés dans les sources (non exhaustif, non définitif)

| Statut métier candidat | Sens métier (source) | Écran concerné | Source / remarque |
|------------------------|----------------------|----------------|-------------------|
| **À qualifier** | Demande créée, en attente qualification | Liste demandes ; fiche demande ; dashboard (`A_QUALIFIER` — `dashboard-kpi-ux-review.md` §4) | KPI « Demandes à qualifier » |
| **Statut initial à la création** | État à l'entrée CRM / email / manuel | Fiche demande | RG-C06 — « À définir » |
| **Planifiée** | Intervention affectée, créneau réservé | Planning ; fiche demande | Parcours §6 planification |
| **En cours** | Intervention terrain active | Fiche technicien ; dashboard | KPI « Interventions en cours » |
| **Clôturée** | Intervention finalisée administrativement | Liste ; sync CRM | §6 clôture ; RG-R05 |
| **En retard** | Dérive délai planifié vs réel | Dashboard SAV ; vue dirigeant | KPI dédié §4–§5 dashboard-kpi-ux-review |
| **Anomalie d'intégration ouverte** | Erreur sync non résolue | Écran erreurs ; dashboard | ARB-MVP-05 ; RG-I06 |
| **Notification en échec** | Échec envoi client | Indicateur dashboard (pas écran dédié MVP) | ARB-MVP-02 ; KPI dashboard §4 |

### Questions à trancher en atelier

- Quels statuts sont **visibles par le manager SAV** ?
- Quels statuts sont **visibles par le technicien** ?
- Quels statuts **viennent du CRM simulé** ?
- Quels statuts sont **internes à Interv360** ?
- Quels statuts **déclenchent une alerte** sur le dashboard ?
- Quels statuts **permettent la clôture** ?
- Quelle **liste de libellés utilisateur** commune (FR) pour éviter l'ambiguïté RG-I05 / point UX « Wording des statuts » ?

---

## 9. Conditions de clôture sans signature

*Contexte : ARB-MVP-03 — signature **optionnelle**, non bloquante, structurée dans le modèle métier (`mvp-arbitration-validation.md`).*

### Questions à trancher

- La signature est-elle **toujours optionnelle** dans le MVP ?
- Quels **champs du compte rendu** sont obligatoires (RG-R01 — « À arbitrer ») ?
- Quelle **preuve minimale** permet de clôturer sans signature ?
- Que se passe-t-il si le **client ne signe pas** ?
- Qu'est-ce qui **bloque réellement** la clôture (RG-R05) ?
- Quelle **trace** est conservée (historique, statut, sync CRM — RG-R08) ?

*Ces questions ne sont pas des cas de tests.*

---

## 10. Géolocalisation / IA

### Géolocalisation

| Sujet | Option A | Option B | Impact MVP | Décision attendue |
|-------|----------|----------|------------|-----------------|
| **Géolocalisation** | **Hors MVP** | Géolocalisation légère / simulée (RG-T04, A-FG06) | Données sensibles, parcours technicien, GreenOps | Position PO — *recommandation prudente sources QA : **hors MVP par défaut*** |

*Sources : RG-T04 « À arbitrer » ; étape parcours §6 « géolocalisation éventuelle » ; risques R-S04, R-FG06.*

### IA légère

| Sujet | Option A | Option B | Impact MVP | Décision attendue |
|-------|----------|----------|------------|-----------------|
| **IA légère** | **Hors MVP** | Suggestion légère / simulée (résumé CR, classification — A-IA01 à A-IA04) | Coûts FinOps (R-FG05), gouvernance données (A-IA06) | Position PO / Data-IA — *recommandation prudente : **hors MVP** ; extension future* |

*Sources : Q7, Q15 non tranchées au niveau MVP validé ; arbitrages A-IA01 listés en §12 business-framing.*

**Recommandation de préparation (non décisionnelle)** : éviter les **critères flottants** — trancher explicitement **in ou out** pour ne pas bloquer la conception ni la testabilité future.

---

## 11. Questions QA à poser en atelier

*Issues de `qa-transverse-analysis.md` §7 — maximum 10, sans transformation en cas de tests.*

1. Comment saura-t-on qu'une **demande est suffisamment qualifiée** pour passer en planification ?
2. Quel **comportement** est attendu si une demande arrive **incomplète** depuis le CRM ou l'email ?
3. Quel **parcours démo** est prioritaire : CRM bout en bout, ou inclusion systématique de l'email sécurisé ?
4. Quel **statut déclenche une alerte** sur le dashboard SAV ?
5. Quel **écran porte la reprise** après une erreur d'intégration ?
6. Quel élément est **hors MVP** : géolocalisation, IA, retry automatique, portail client ?
7. Quelle **donnée est obligatoire** pour **clôturer** sans signature ?
8. Quelle **trace** permet de vérifier qu'une **notification client** a été envoyée (sans écran dédié) ?
9. Quelle **différence visible** entre un **retard métier** et une **erreur d'intégration** sur les dashboards ?
10. Quels **seuils** rendent un KPI actionnable (ex. « interventions en retard ») ?

---

## 12. Décisions attendues

| Décision | Niveau attendu | Document cible après atelier |
|----------|----------------|------------------------------|
| 8 points UX ouverts | Décision ou report explicite par point | `mvp-clarifications.md` ou mise à jour trace atelier |
| Règles RG prioritaires (RG-C04, C05, I05, I06, R02, R05) | Règles rédigées au niveau comportement attendu | `rules-rg-prioritization.md` |
| Mapping / wording statuts | Première table de correspondance | `status-mapping.md` |
| Clôture sans signature | Conditions minimales documentées | `closure-without-signature.md` |
| Géolocalisation in/out MVP | Arbitrage explicite | `geo-ai-arbitration.md` |
| IA in/out MVP | Arbitrage explicite | `geo-ai-arbitration.md` (même document) |
| Erreurs intégration (représentation + gravité) | Alignement UX + RG-I06 | `mvp-clarifications.md` ou annexe erreurs |
| Décisions structurantes sync / statuts | Si impact durable | **ADR candidates** (phase architecture) |

*Ces documents ne sont **pas** créés dans la présente tâche — uniquement listés comme cibles post-atelier.*

---

## 13. Garde-fous

- [ ] pas de cas de tests ;
- [ ] pas de scénarios de tests ;
- [ ] pas de stratégie de recette ;
- [ ] pas de backlog ;
- [ ] pas de user stories ;
- [ ] pas de code applicatif ;
- [ ] pas de delivery ouvert ;
- [ ] pas de publication Notion ;
- [ ] pas d'appel API Notion ;
- [ ] pas de secret affiché ;
- [ ] `.env` non modifié.

---

## 14. Conclusion

Cet atelier vise à **sécuriser la conception détaillée** en réduisant les ambiguïtés qui freinent aujourd'hui la **testabilité opérationnelle**.

Le rôle **QA / Testeur** y agit comme **filet de qualité amont** : questions, risques, traçabilité — sans anticiper la recette.

La **stabilisation des règles et statuts** est un prérequis avant maquette Figma, consolidation des RG détaillées et préparation architecture.

**Prochaine étape après préparation** : planifier la date, convoquer les rôles §4, tenir l'atelier, puis rédiger les documents de sortie §12.

---

*Préparation atelier clarification Interv360 — gouvernance SFIA — atelier non tenu.*

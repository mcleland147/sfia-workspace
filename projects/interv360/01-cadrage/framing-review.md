# Interv360 — Framing Review

**Projet** : PRJ-INTERV360  
**Phase** : 01-cadrage  
**Statut** : Draft  
**Source** : `business-framing.md` (Draft)  
**Date de revue** : 2026-06-27

---

## 1. Objectif de la revue

Cette revue vise à **vérifier la cohérence globale du cadrage Interv360** avant d'engager une première passe d'**arbitrages MVP**.

Elle ne tranche aucune décision : elle constate le niveau de maturité des sections produites, identifie les points de cohérence à contrôler, les clarifications préalables aux arbitrages, les ADR candidates à préparer et les éléments capitalisables SFIA.

Cette revue ne doit pas :

- définir le MVP ;
- produire d'architecture technique ;
- créer de backlog ;
- publier dans Notion ;
- modifier l'intake validé.

---

## 2. Synthèse de maturité du cadrage

| Domaine | Niveau de maturité | Commentaire | Suite attendue |
|---------|-------------------|-------------|----------------|
| Vision projet | **Structuré** | Vision métier et SFIA explicites (§2), double valeur projet / SFIA posée | Maintenir comme référence lors des arbitrages |
| Périmètre métier | **À arbitrer** | Inclus / À arbitrer / Hors cadrage distingués (§4) ; périmètre MVP explicitement non défini | Traiter arbitrages fonctionnels avant MVP |
| Rôles SFIA | **Structuré** | Matrice rôles cœur et transverses (§5) | Mobiliser RSSI, FinOps, GreenOps, Data/IA avant arbitrages sensibles |
| Parcours SAV | **Structuré** | 9 étapes détaillées avec acteurs, entrées/sorties et vigilances (§6) | Vérifier couverture par règles §10 |
| Cas métier | **Structuré** | 9 cas obligatoires listés (§7), alignés sur le parcours §6 | Détailler scénarios d'erreur lors arbitrages intégration |
| Intégrations simulées | **À arbitrer** | 6 intégrations cartographiées (§8) ; niveau de simulation non tranché | Traiter A-I01 à A-I08 |
| Objets métier | **Structuré** | 15 objets principaux, 8 objets intégration, données sensibles (§9) | Vérifier couverture par écrans §14 |
| Règles de gestion | **À arbitrer** | 56 règles RG-* identifiées, non tranchées (§10) | Traduire arbitrages MVP en règles testables |
| Questions ouvertes | **Structuré** | Q1–Q24 regroupées en 6 thèmes (§11) | Utiliser comme base de travail des arbitrages |
| Arbitrages | **À arbitrer** | 40 arbitrages A-* listés, non tranchés (§12) | Première passe d'arbitrages MVP |
| Validation métier / fonctionnelle / UX | **Prêt pour revue** | Circuit de validation et critères de passage formalisés (§13) | Planifier validations fictives avant conception |
| Personas / UX/UI | **Prêt pour revue** | 6 personas, 9 parcours, 9 écrans candidats, critères utilisabilité (§14) | Prioriser écrans lors arbitrages MVP |
| Risques | **Structuré** | 47 risques R-* qualifiés en 6 catégories (§15) | Croiser avec arbitrages §12 |
| Capitalisation SFIA | **Structuré** | Éléments identifiés dans §10.8, §14.5, §15.8, §18 | Préparer templates et checklists en fin de cadrage |

---

## 3. Points de cohérence à vérifier

Les vérifications suivantes doivent être réalisées avant ou pendant la première passe d'arbitrages MVP :

| # | Vérification | Sections | État constaté | Action |
|---|-------------|----------|---------------|--------|
| 1 | **Cohérence parcours §6 ↔ règles §10** | §6, §10 | Chaque étape du parcours SAV possède des règles RG-C/P/T/R/I/S/FG associées ; certaines règles restent ambiguës (qualification, clôture, signature) | Confirmer couverture étape par étape ; lever ambiguïtés via arbitrages A-F03, A-F04, A-F06 |
| 2 | **Cohérence objets §9 ↔ écrans §14** | §9, §14 | 9 écrans candidats couvrent les objets principaux ; lien explicite en §9.4 | Vérifier qu'aucun objet critique n'est sans écran ; prioriser écrans MVP |
| 3 | **Cohérence questions §11 ↔ arbitrages §12** | §11, §12 | Chaque question Q* est rattachée à un ou plusieurs arbitrages A-* | Confirmer absence de question orpheline |
| 4 | **Cohérence risques §15 ↔ arbitrages §12** | §15, §12 | Risques R-* référencent des arbitrages et règles existants | Utiliser §15 comme grille de contrôle post-arbitrage |
| 5 | **Cohérence livrables §16 ↔ critères de sortie §17** | §16, §17 | Les livrables listés couvrent les critères de sortie ; MVP reste à définir en sortie de cadrage | Confirmer que chaque critère §17 a un livrable §16 associé |
| 6 | **Cohérence capitalisation §18 ↔ éléments produits** | §10.8, §14.5, §15.8, §18 | Templates et checklists identifiés dans plusieurs sections | Consolider en fin de cadrage (mini-bilan) |
| 7 | **Absence de MVP défini prématurément** | §4, §6, §12 | Périmètre MVP listé en « À arbitrer » ; note explicite §6 : MVP non défini | **Conforme** — maintenir le garde-fou |
| 8 | **Absence d'architecture technique prématurée** | §4, §12 | Architecture technique détaillée en « Hors cadrage immédiat » ; risque R-I08 identifié | **Conforme** — reporter à post-validation |
| 9 | **Absence de backlog prématuré** | §4, §12 | Backlog exhaustif en « Hors cadrage immédiat » ; arbitrages IA renvoient à « backlog futur » sans le produire | **Conforme** — ne pas créer de backlog à ce stade |
| 10 | **Absence de travail Figma prématuré** | §14.6, ARB-MVP-07 | Figma non déclenché pendant le cadrage UX/UI amont ; brief UX/UI requis avant maquette | **Conforme** — vérifier qu'aucun travail Figma n'est lancé avant validation des écrans prioritaires et production du brief UX/UI |

---

## 4. Points à clarifier avant arbitrage MVP

| Point à clarifier | Sections concernées | Impact | Rôle à mobiliser | Priorité |
|-------------------|---------------------|--------|------------------|----------|
| Canal prioritaire de création des demandes | §4, §6, Q1, A-F01, R-M01 | Point d'entrée unique, règles RG-C01 à RG-C04 | Business Analyst / Product Owner | **Haute** |
| Portail client ou notifications uniquement | §4, Q2, A-F02, A-S05, R-M07, R-UX07 | Périmètre fonctionnel client, sécurité, coûts | Product Owner / Concepteur fonctionnel | **Haute** |
| Signature obligatoire ou optionnelle | §6, RG-R02, Q4, A-F04, R-M06 | Clôture intervention, parcours compte rendu | Business Analyst / Product Owner | **Haute** |
| Niveau de simulation des intégrations | §8, Q11–Q12, A-I01 à A-I05, R-I01 | Crédibilité démonstrateur, effort delivery | Architecte / Product Owner | **Haute** |
| Gestion des erreurs d'intégration | §7, RG-I06–RG-I09, A-I07, R-I03, R-I04 | Robustesse parcours, confiance dirigeant | Architecte / QA | **Haute** |
| Conservation photos / signatures / logs | §9.3, RG-S03–RG-S05, A-S03, A-FG01–A-FG02, R-S03 | RSSI, GreenOps, FinOps | RSSI / GreenOps | **Haute** |
| Inclusion ou non de l'IA légère | Q7, Q15, A-IA01, A-FG05, R-FG05, R-S07 | Périmètre MVP, coûts, gouvernance | Product Owner / Data / IA | **Moyenne** |
| Indicateurs minimum dirigeant | Q5, §14.3, A-F05 (tableau de bord), R-M08 | Écran pilotage, valeur dirigeant fictif | Business Analyst / Product Owner | **Moyenne** |
| Écrans réellement prioritaires | §14.3 (9 écrans), R-UX03 | Scope delivery, complexité UX | Product Owner / Concepteur fonctionnel | **Haute** |
| Critères UX bloquants | §14.4, §13.1, R-UX01, R-UX05, R-UX08 | Adoption technicien, validation avant maquettes | Concepteur fonctionnel / Technicien (fictif) | **Moyenne** |

---

## 5. ADR candidates à préparer

Décisions structurantes identifiées dans §12 et §15, à documenter en ADR lors de la phase architecture (sans les finaliser à ce stade).

| ADR candidate | Source | Pourquoi décision structurante ? | Phase de traitement |
|---------------|--------|----------------------------------|---------------------|
| Niveau de simulation API | A-I05, R-I01, Q11–Q12 | Fixe le périmètre technique des intégrations simulées et l'effort de delivery | Cadrage → Architecture |
| Mapping des statuts | A-I06, RG-I05, R-I02 | Impacte CRM simulé, calendrier, plateforme et cohérence du parcours | Cadrage → Architecture |
| Gestion des erreurs d'intégration | A-I07, RG-I06–RG-I08, R-I03, R-I04 | Définit retry, alerte, reprise manuelle — comportement système durable | Cadrage → Architecture |
| Journalisation des flux | A-I08, RG-I07, R-I05 | Équilibre traçabilité, RSSI et coûts GreenOps/FinOps | Cadrage → Architecture |
| Conservation des données sensibles | A-S03, A-FG07, RG-S03–RG-S05, R-S03 | Impacte stockage, conformité et sobriété | Cadrage → Architecture |
| Géolocalisation légère | A-FG06, RG-T04, RG-FG05, R-S04, R-FG06 | Encadre vie privée, fréquence et finalité terrain | Cadrage → Architecture |
| Inclusion IA légère | A-IA01, A-IA06, A-FG05, Q7, Q15, R-S07, R-FG05 | Positionne IA dans ou hors MVP ; gouvernance des données IA | Arbitrage MVP → Architecture |
| Workflow Notion / Cursor | A-SF06, Q23, R-SF04 | Gouvernance Git / Notion, synchronisation référentiel / production | Cadrage → Architecture SFIA |
| Génération automatique des livrables SFIA | A-SF05, A-SF02, Q21, R-SF02 | Automatisation documentaire, productivité plateforme SFIA | Cadrage → Architecture SFIA |

*Liste non exhaustive — compléter à partir des arbitrages marqués « ADR candidate ? Oui » en §12.*

---

## 6. Capitalisation SFIA identifiée

| Élément produit | Capitalisation possible | Type | Priorité |
|-----------------|------------------------|------|----------|
| Business Framing | Plan de cadrage réutilisable | Template | **Haute** |
| Role Matrix | Matrice rôles cœur / transverses | Template / Standard | **Haute** |
| Business Objects Matrix | Objets métier + intégration + sensibilité | Template / Standard | **Haute** |
| Business Rules Matrix | Règles RG-* traçables et testables | Template / Standard | **Haute** |
| Risk Matrix | Grille risques par catégorie | Template / Checklist | **Haute** |
| Persona Matrix | 6 personas métier | Template | **Moyenne** |
| User Journey | 9 parcours utilisateurs | Template | **Moyenne** |
| UX/UI Framing | Écrans candidats + critères utilisabilité | Template | **Moyenne** |
| Validation Matrix | Circuit validation + passage de phase | Template / Workflow Notion | **Haute** |
| Arbitration Matrix | 40 arbitrages structurés | Template / Checklist | **Haute** |
| ADR candidate list | 9+ décisions structurantes | ADR | **Haute** |
| RSSI checklist | Données sensibles, accès, conservation | Checklist | **Haute** |
| FinOps / GreenOps checklist | Stockage, logs, notifications, API, IA | Checklist | **Moyenne** |
| Integration checklist | Simulation, mapping, erreurs, logs | Checklist / Prompt | **Haute** |
| UX Review checklist | Parcours technicien, mobile, notifications | Checklist / Prompt | **Moyenne** |

---

## 7. Go / No-Go pour arbitrages MVP

| Critère | Statut | Commentaire |
|---------|--------|-------------|
| Cadrage suffisamment structuré | **Go** | 18 sections produites dans `business-framing.md` ; parcours, objets, règles, UX et risques formalisés |
| Questions ouvertes identifiées | **Go** | Q1–Q24 regroupées et reliées aux arbitrages |
| Arbitrages identifiés | **Go** | 40 arbitrages A-* listés, non tranchés |
| Risques identifiés | **Go** | 47 risques R-* qualifiés en 6 catégories |
| Validations métier / UX prévues | **Go** | Circuit §13 prêt ; validations fictives à planifier |
| Éléments SFIA capitalisables identifiés | **Go** | Templates, checklists et workflows listés §6 ci-dessus et §18 |
| MVP non encore défini | **Go** | Conforme — périmètre MVP en « À arbitrer » §4 |
| Architecture non encore produite | **Go** | Conforme — hors cadrage immédiat §4 |

### Conclusion

**Le cadrage est prêt pour une première passe d'arbitrages MVP**, sous réserve de traiter les **10 points de clarification** listés en §4, en commençant par les priorités hautes (canal demandes, portail/notifications, signature, simulation intégrations, erreurs, conservation données, écrans prioritaires).

Les arbitrages ne doivent pas être tranchés en bloc : ils alimentent progressivement les règles de gestion testables, les ADR candidates et les validations métier/fonctionnelles/UX avant toute architecture technique ou définition formelle du MVP.

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*

# Interv360 — Analyse QA transverse

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture (analyse transverse)  
**Type** : Relecture qualité amont — rôle QA / Testeur  
**Statut** : Draft — analyse documentaire  
**Méthode** : `docs/methods/roles/qa-tester-method.md`  
**Publication Notion** : non exécutée

---

## 1. Objectif

Cette analyse intègre le **rôle QA / Testeur** dans la réflexion Interv360 afin d'évaluer la **qualité**, la **testabilité future** et les **zones de risque** des livrables de cadrage existants.

**Précisions importantes :**

- ce n'est **pas** une recette ;
- ce n'est **pas** une stratégie de test ;
- ce n'est **pas** une production de cas de tests ;
- c'est une **relecture qualité amont**, alignée sur la méthode QA SFIA et la famille de prompts `prompts/qa/`.

---

## 2. Sources analysées

| Source | Rôle dans l'analyse QA |
|--------|------------------------|
| `projects/interv360/01-cadrage/business-framing.md` | Référence principale : parcours SAV, objets métier, 56 règles RG-*, arbitrages, risques, critères de passage de phase |
| `projects/interv360/01-cadrage/framing-review.md` | Maturité du cadrage, cohérences à vérifier, points à clarifier avant arbitrages |
| `projects/interv360/01-cadrage/mvp-arbitrations.md` | Recommandations et impacts des 7 arbitrages MVP sur règles, parcours, écrans |
| `projects/interv360/01-cadrage/mvp-arbitration-validation.md` | Périmètre MVP validé : canaux, écrans, erreurs, conservation, signature |
| `projects/interv360/01-cadrage/ux-ui-brief.md` | Brief UX/UI validé : 8 écrans, 10 parcours critiques, KPI, principes UX |
| `projects/interv360/01-cadrage/ux-ui-brief-validation.md` | Validation fictive du brief ; **8 points ouverts** avant maquette |
| `projects/interv360/01-cadrage/dashboard-kpi-ux-review.md` | Socle KPI dashboard SAV (12) et vue dirigeant (10) ; garde-fous surcharge cognitive |
| `docs/methods/roles/qa-tester-method.md` | Cadre du rôle QA : testabilité amont, risques, traçabilité, limites du rôle |
| `prompts/qa/qa-tester-prompt-family.md` | Famille PROMPT-QA-001 à 010 — orientation analyse sans scénarios détaillés |
| `prompts/prompt-catalog.md` | Référence catalogue prompts QA (famille §14) |

---

## 3. Lecture QA globale

| Axe QA | Question posée | Constat | Niveau de risque |
|--------|----------------|---------|------------------|
| **Clarté du besoin** | Le besoin métier et la vision sont-ils compréhensibles et stables ? | Vision Interv360 + pilote SFIA claire (`business-framing.md` §2). Périmètre MVP **validé** via 7 arbitrages (`mvp-arbitration-validation.md`). | **Faible** |
| **Cohérence du périmètre MVP** | Le MVP est-il borné et non contradictoire ? | Noyau **8 écrans**, CRM principal, notifications sans portail, signature optionnelle, retry hors MVP — cohérent entre arbitrages, brief UX et validation. | **Faible** |
| **Testabilité future** | Les livrables permettent-ils une future vérification ? | Parcours §6, objets §9, matrice RG-* et cas CF1–CF9 posent une base traçable ; **56 règles** encore majoritairement « À définir / À arbitrer » au niveau détail. | **Moyen** |
| **Ambiguïtés métier** | Reste-t-il des zones floues bloquantes ? | **8 points ouverts** avant maquette (`ux-ui-brief-validation.md` §4) : format CR, planning, alertes, mobile, wording statuts, etc. | **Moyen** |
| **Règles métier** | Les comportements attendus sont-ils explicites ? | Inventaire RG-* structuré ; décisions MVP stabilisent les grands choix ; **détail opérationnel** (doublons, clôture, qualification) à préciser. | **Moyen** |
| **Parcours utilisateur** | Les parcours critiques sont-ils couverts ? | **10 parcours** dans le brief UX dont email sécurisé, erreurs intégration, pilotage — alignés sur le cycle SAV. | **Faible** |
| **Objets métier** | Les objets sont-ils identifiables pour future vérification ? | 15 objets principaux + 8 objets d'intégration cartographiés ; lien écrans §9.4. | **Faible** |
| **Critères d'acceptation futurs** | Existe-t-il une base pour des critères testables ? | Plusieurs RG renvoient à « critères d'acceptation futurs » (RG-P07, RG-T08, RG-R04) **sans formulation** ; circuit validation §13 prévu mais pas exécuté. | **Moyen** |
| **Risques UX** | Le MVP UX est-il vérifiable sans surcharge ? | Risques R-UX01 à R-UX08 déjà identifiés ; **12 + 10 KPI** sur deux dashboards — garde-fous documentés mais vigilance surcharge. | **Moyen** |
| **Risques d'intégration** | Les flux simulés sont-ils testables ? | Contrats API documentés + écran anomalies + reprise manuelle (ARB-MVP-04/05) — bonne base **non happy path** ; mapping statuts RG-I05 encore « À définir ». | **Moyen** |
| **Risques de surproduction** | Le cadrage évite-t-il la dérive delivery ? | Garde-fous explicites : pas backlog, pas Figma avant brief validé, pas architecture — **conformes**. Brief UX validé ; Figma **pas encore** engagé. | **Faible** |
| **Traçabilité besoin / décision / future vérification** | Peut-on relier besoin, arbitrage, règle, écran ? | Liens ARB-MVP-* → RG-* → écrans §14 documentés ; ADR candidates listées — **traçabilité amont solide**. | **Faible** |

---

## 4. Testabilité du cadrage

| Élément | Testable plus tard ? | Pourquoi | Clarification nécessaire |
|---------|---------------------|----------|--------------------------|
| **Parcours SAV §6 (9 étapes)** | **Oui** — macro | Étapes, acteurs, entrées/sorties et vigilances documentés | Détailler transitions de statut et conditions de passage (RG-P07, RG-T08) |
| **7 arbitrages MVP validés** | **Oui** | Décisions explicites et impacts sur RG / écrans | Traduire en règles opérationnelles testables (ex. RG-C04 anti-doublon) |
| **Canal CRM principal + email sécurisé** | **Partiellement** | ARB-MVP-01 tranché ; email cadré SSI (`secure-email-intake-review.md` référencé) | Scénarios de rejet email, doublon cross-canal, données minimales RG-C05 |
| **Gestion erreurs intégration** | **Oui** — orientation | Écran anomalies + reprise manuelle ; cas CF9 | Représentation erreur : log technique vs message métier (point ouvert brief validation §4) |
| **Signature optionnelle** | **Partiellement** | ARB-MVP-03 : non bloquante mais structurée | Conditions exactes de clôture sans signature (RG-R02, RG-R05) |
| **8 écrans MVP** | **Oui** — structure | Fiches écran dans `ux-ui-brief.md` §5 avec objectifs, KPI, critères utilisabilité | Priorité KPI « above the fold » ; différenciation dashboard SAV vs dirigeant |
| **56 règles RG-*** | **Non encore** — au niveau micro | Identifiées et reliées aux arbitrages ; statut « À définir » dominant | Détailler règles prioritaires avant conception fonctionnelle |
| **KPI dashboard (22 indicateurs)** | **Partiellement** | Sources et horizons documentés (`dashboard-kpi-ux-review.md`) | Définir seuils, calculs simplifiés MVP, comportement données vides |
| **Conservation données (ARB-MVP-06)** | **Partiellement** | Hypothèses fictives documentées | Règles concrètes de durée/volume pour future vérification RSSI/GreenOps |
| **Géolocalisation légère** | **Non** — encore ouvert | Mentionnée §6 et RG-T04 ; arbitrage A-FG06 non finalisé | Arbitrer inclusion ou exclusion MVP avant tests futurs |
| **IA légère** | **Non** — hors MVP probable | Q7, Q15, A-IA01 — arbitrages listés, pas validés MVP | Confirmer exclusion MVP pour éviter critères flottants |
| **Circuit validation §13** | **Oui** — processus | Jalons et traces attendues formalisés | Planifier validations fictives ; pas encore de PV |

*Aucun cas de test détaillé n'est rédigé dans cette section.*

---

## 5. Ambiguïtés et points ouverts

| Sujet | Ambiguïté | Impact potentiel | Question à poser |
|-------|-----------|------------------|----------------|
| **Format compte rendu** | Web seul vs export PDF non tranché (`ux-ui-brief-validation.md` §4) | Critères de clôture et preuve client flous | Quel livrable minimum le client reçoit-il au MVP ? |
| **Wording des statuts** | Libellés utilisateur non unifiés (lien RG-I05) | Incohérence entre écrans, CRM simulé et futures vérifications | Quelle liste canonique de statuts et libellés métier ? |
| **Qualification demande** | Niveau de détail checklist qualification ouvert | Parcours fiche demande et critères « demande qualifiée » flous | Quels champs obligatoires pour passer en planification ? |
| **Anti-doublon cross-canal** | RG-C04 « À définir » malgré CRM principal | Risque doublons CRM / email / saisie | Comment détecter et traiter un doublon sans bloquer le flux ? |
| **Clôture sans signature** | Signature optionnelle mais conditions RG-R05 « À valider » | Clôture prématurée ou blocages ambigus | Quels champs CR minimum pour clôturer sans signature ? |
| **Représentation erreurs** | Détail log vs message métier ouvert | Testabilité écran anomalies et compréhension manager | Quel niveau de détail afficher à l'utilisateur métier ? |
| **Mobile technicien** | Priorité mobile vs desktop MVP ouverte | Critères utilisabilité terrain (RG-T01, R-UX05) non stabilisés | Le MVP démo doit-il être validé prioritairement sur mobile ? |
| **Vue planning** | Jour vs semaine par défaut ouverte | Testabilité conflits créneau (RG-P03) | Quelle vue par défaut pour démontrer les conflits ? |
| **Géolocalisation** | Niveau et finalité non arbitrés (RG-T04, A-FG06) | Données sensibles et parcours terrain incomplets | La géolocalisation est-elle incluse ou exclue du MVP ? |
| **Alertes dashboard** | Nombre max et hiérarchie ouverts | Surcharge cognitive ; KPI non actionnables (R-M08) | Quelles alertes sont bloquantes vs informatives ? |

*Uniquement des ambiguïtés réellement détectées dans les sources.*

---

## 6. Risques qualité

| Risque | Origine | Impact | Prévention recommandée |
|--------|---------|--------|------------------------|
| **MVP fonctionnellement large (8 écrans + 2 dashboards riches)** | ARB-MVP-07, `dashboard-kpi-ux-review.md` §7, R-UX03 | Effort delivery, démonstrateur difficile à valider bout en bout | Maintenir limites MVP §6 dashboard ; prioriser top KPI ; reporter personnalisation |
| **Règles métier non détaillées** | `business-framing.md` §10 — majorité RG « À définir » | Comportements implémentés ou testés sans référence commune | Détailler en priorité RG-C04, RG-C05, RG-P03, RG-R02, RG-R05, RG-I05, RG-I06 |
| **Doublon dashboard SAV / vue dirigeant** | `ux-ui-brief.md` §5.1/§5.8, R-M08 | Confusion utilisateur ; indicateurs redondants | Valider différenciation opérationnel vs consolidé avant Figma |
| **Parcours technicien mobile non cadré** | `ux-ui-brief-validation.md` §4, R-UX05 | CR tardifs, adoption terrain faible | Arbitrer priorité mobile ; critères « ≤ 3 actions » à ancrer sur device cible |
| **Erreurs intégration mal lisibles** | ARB-MVP-05, point ouvert représentation erreurs | Anomalies non traitées (R-UX06) | Définir message métier + action reprise avant maquette écran anomalies |
| **Confusion brief UX vs future maquette** | `ux-ui-brief.md` validé ; Figma pas engagé | Attentes visuelles prématurées | Respecter règle §14.6 ; traiter points ouverts §4 avant Figma |
| **Critères d'acceptation absents** | RG-P07, RG-T08, RG-R04 ; §13.1 | Recette future sans socle | Formuler critères macro par parcours critique (hors cas de test) en atelier dédié |
| **Mapping statuts incomplet** | RG-I05, A-I06, R-I02 | Incohérences CRM / calendrier / plateforme | Prioriser standard mapping statuts en architecture — documenter hypothèses MVP |
| **Email sécurisé hors flux principal** | ARB-MVP-01 | Cas email sous-testés si démo centrée CRM | Prévoir au moins un scénario démo email (acceptation + rejet) |
| **Conservation fictive non opérationnalisée** | ARB-MVP-06 | Difficulté à prouver conformité RSSI/GreenOps au-delà du papier | Documenter hypothèses chiffrées (durées, volumes) pour future vérification |

---

## 7. Questions réflexes QA à intégrer aux prochains ateliers

1. Comment saura-t-on qu'une **règle de qualification** (RG-C07) est respectée sur la fiche demande ?
2. Quel **comportement** est attendu si une demande arrive **incomplète** depuis le CRM ou l'email ?
3. Quel **parcours** est prioritaire dans la démo MVP : CRM bout en bout, ou inclusion systématique de l'email sécurisé ?
4. Quel élément est **hors MVP** : géolocalisation, IA légère, retry automatique, portail client ?
5. Quelle **donnée est obligatoire** pour passer de « demande créée » à « intervention planifiée » ?
6. Quel **écran** porte la décision métier de reprise après une erreur d'intégration ?
7. Quelle **trace** permettra de vérifier qu'une notification client a bien été envoyée (sans écran dédié) ?
8. Comment distinguer visuellement un **retard métier** d'une **anomalie d'intégration** sur les dashboards ?
9. Quels **seuils** rendent un KPI actionnable (ex. « interventions en retard ») ?
10. Quelle **liste de statuts** commune relie plateforme, CRM simulé et libellés utilisateur ?

*Ces questions ne sont pas des cas de tests.*

---

## 8. Recommandations QA

### Recommandations immédiates

1. **Stabiliser le wording des statuts** et le mapping RG-I05 avant toute maquette Figma.
2. **Détailler les règles MVP prioritaires** : anti-doublon (RG-C04), données minimales (RG-C05), clôture (RG-R05), erreurs (RG-I06).
3. **Trancher les 8 points ouverts** du brief UX (`ux-ui-brief-validation.md` §4) — au minimum format CR, mobile technicien, représentation erreurs.
4. **Valider la différenciation** tableau de bord SAV vs vue dirigeant avec top 5–7 KPI « above the fold » par écran.
5. **Documenter un scénario démo minimum** par parcours critique (macro, sans cas de test) : CRM → clôture ; email rejeté ; erreur sync + reprise.
6. **Arbitrer géolocalisation et IA** explicitement in/out MVP pour éviter critères flottants.
7. **Maintenir la traçabilité** ARB-MVP → RG → écran → parcours lors du détail des règles.
8. **Planifier une revue QA transverse** après consolidation des règles détaillées et avant conception fonctionnelle.

### Recommandations différées

Les éléments suivants pourront venir **plus tard**, dans des jalons dédiés — **hors périmètre** de la présente analyse :

- critères d'acceptation formalisés ;
- stratégie de test légère ;
- scénarios de validation détaillés ;
- jeux de données de test ;
- PV de recette ;
- automatisation de tests.

---

## 9. Garde-fous QA

- [x] aucun cas de test détaillé produit ;
- [x] aucun scénario de test produit ;
- [x] aucune stratégie de recette produite ;
- [x] aucun backlog produit ;
- [x] aucune user story produite ;
- [x] aucun code produit ;
- [x] aucun delivery ouvert ;
- [x] analyse limitée à la **qualité amont** et à la **testabilité future** ;
- [x] API Notion non appelée ;
- [x] aucun secret affiché.

---

## 10. Conclusion

**Maturité globale du cadrage : élevée au niveau structurel, moyenne au niveau opérationnel testable.**

Les livrables Interv360 offrent une base solide : vision, parcours, objets, arbitrages MVP validés, brief UX validé, risques qualifiés. La **testabilité future** est **prometteuse** grâce à la traçabilité ARB-MVP → RG → écrans → parcours.

Les **principaux points à clarifier** avant conception détaillée concernent : le **détail des règles métier** (RG-*), les **8 points ouverts UX**, le **mapping des statuts**, les **conditions de clôture** (signature optionnelle) et la **lisibilité des erreurs d'intégration**.

**Intérêt de maintenir le rôle QA** : la complexité du MVP (8 écrans, intégrations simulées, double dashboard, canaux multiples) justifie des **revues transverses régulières** selon `qa-tester-method.md`, sans anticiper la recette.

**Prochaine étape recommandée** : atelier de clarification des points ouverts UX + priorisation du détail des règles RG MVP ; puis consolidation du cadrage et préparation architecture — **sans ouvrir delivery ni produire de cas de tests**.

---

*Analyse QA transverse Interv360 — gouvernance SFIA — relecture amont uniquement.*

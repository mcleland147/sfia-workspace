# Interv360 — Role Methods Review

**Projet** : PRJ-INTERV360  
**Phase** : 01-cadrage  
**Statut** : Draft  
**Source** : role-methods-framing.md  
**Objet** : revue qualité de la capitalisation méthodologique par rôle avant découpage en templates SFIA

---

## 1. Objectif de la revue

Cette revue vise à déterminer si `role-methods-framing.md` est **suffisamment robuste** pour alimenter les futurs templates SFIA par rôle dans `sfia/methods/roles/`.

Elle s'inscrit dans la logique SFIA **produit dynamique et évolutif** : chaque projet pilote doit enrichir la méthode SFIA non seulement sur les livrables et le savoir-faire, mais aussi sur le **savoir-être projet** — posture, réflexes, vigilance, arbitrage, collaboration, capacité à challenger sans bloquer, erreurs à éviter.

La revue évalue :

- la **couverture des rôles** ;
- la **qualité du savoir-faire capitalisé** ;
- la **qualité du savoir-être capitalisé** ;
- la **réutilisabilité des questions types** ;
- la **pertinence des templates candidats** ;
- les **rôles à renforcer** ;
- les **rôles à extraire en priorité** ;
- les **améliorations nécessaires** avant découpage.

**Ce document ne produit pas** d'architecture technique, backlog, user stories, maquettes, wireframes, Figma ou code.

---

## 2. Critères de revue

Chaque rôle documenté dans `role-methods-framing.md` est évalué selon la checklist suivante :

- [ ] rôle clairement positionné dans SFIA ;
- [ ] valeur projet explicite ;
- [ ] valeur SFIA explicite ;
- [ ] intervention réelle dans Interv360 documentée ;
- [ ] questions types réutilisables ;
- [ ] livrables associés identifiés ;
- [ ] décisions ou validations associées ;
- [ ] savoir-faire capitalisable ;
- [ ] savoir-être capitalisable ;
- [ ] templates / checklists / prompts candidats ;
- [ ] erreurs à éviter ;
- [ ] enrichissement futur prévu.

**Bilan global sur les 11 rôles :** les 12 critères sont **satisfaits au stade cadrage** pour les rôles cœur les plus mobilisés (Business Analyst, Product Owner, Chef de projet, UX/UI Designer, Architecte, RSSI). Le **savoir-être** est **partiellement explicite** — surtout via les sections « Erreurs à éviter » ; il devra être **formalisé explicitement** dans les futurs templates extraits.

---

## 3. Revue synthétique par rôle

| Rôle | Couverture actuelle | Niveau de maturité | Points forts | Points à renforcer | Priorité d'extraction |
|------|---------------------|-------------------|--------------|-------------------|----------------------|
| **Business Analyst** | §4.1 complet ; 8 questions types ; 3 templates haute priorité ; business-framing, framing-review | **Fort** | Parcours SAV, 56 RG-*, matrice questions → arbitrages ; double valeur bien documentée | Savoir-être explicite ; lien RG-* → critères d'acceptation à enrichir en phase tests | **Haute** |
| **Product Owner** | §4.2 complet ; 7 arbitrages MVP validés ; 3 templates haute priorité | **Fort** | Format arbitrage réutilisable ; principes §2 mvp-arbitrations ; limites MVP claires | Enrichir après delivery et recette ; grille valeur/complexité à formaliser en template | **Haute** |
| **Chef de projet** | §4.3 complet ; gouvernance Notion/Git ; §2.1 enrichissement continu | **Fort** | Trajectoire phase, validations fictives, consigne permanente ; matrice moments projet | Workflow Notion projet à documenter après prochaines sync ; phase gate à tester en architecture | **Haute** |
| **Concepteur fonctionnel** | §4.4 complet ; parcours, écrans, dashboard-kpi-ux-review | **Correct** | Pont métier / UX ; fiches écran via ux-ui-brief ; différenciation dashboards | Phase conception fonctionnelle non encore vécue ; Screen Intent à enrichir | **Moyenne** |
| **UX/UI Designer** | §4.5 complet ; brief validé ; checklist Figma ; 8 écrans MVP | **Fort** | Brief UX/UI + validation ; garde-fous surcharge cognitive ; règle Figma | Enrichir après cadrage Figma ; points ouverts §4 ux-ui-brief-validation | **Haute** |
| **Architecte** | §4.6 complet ; integration-error, secure-email ; ADR candidates | **Fort** | Option C contrats API ; lien ARB-MVP-04/05 ; frontière cadrage / architecture | Enrichir en phase architecture et ADR ; contenu encore centré cadrage | **Haute** |
| **QA / Testeur** | §4.7 complet ; scénarios email, Error Matrix | **Correct** | Non happy path dès cadrage ; scénarios secure-email §5 | Peu d'exécution test réelle ; critères d'acceptation à enrichir en delivery | **Moyenne** |
| **RSSI** | §4.8 complet ; secure-email §3 ; ARB-MVP-06 | **Fort** | Exigences SSI tabulaires ; canal email non principal mais sérieux ; conservation fictive | Enrichir en architecture ; accès par profil à détailler | **Haute** |
| **FinOps** | §4.9 ; contributions dispersées business-framing, secure-email | **À renforcer** | Hypothèses coûts notifications, stockage ; alerte sans modèle lourd | Intervention moins dense que RSSI ; template hypothèses coûts priorité basse | **Basse** |
| **GreenOps** | §4.10 ; ARB-MVP-06, secure-email PJ | **Correct** | Conservation fictive ; sobriété PJ email ; lien UX sobriété visuelle | Géolocalisation légère non tranchée ; enrichir en architecture | **Moyenne** |
| **Data / IA** | §4.11 ; report IA post-MVP documenté | **À renforcer** | Position claire : pas d'IA par défaut ; gouvernance et risques surcomplexification | Peu de livrables dédiés ; cas d'usage IA candidats non détaillés | **Basse** |

---

## 4. Revue du savoir-faire capitalisé

| Rôle | Savoir-faire identifié | Réutilisable en template ? | Commentaire |
|------|------------------------|---------------------------|-------------|
| **Business Analyst** | Cadrage métier : parcours 9 étapes, objets, 56 RG-*, Q1–Q24 | **Oui — Haute priorité** | Matière première solide via business-framing.md ; Template Business Framing prêt à extraire |
| **Product Owner** | Arbitrage MVP : 7 ARB-MVP validés, principes, format option/recommandation/impacts | **Oui — Haute priorité** | mvp-arbitrations.md et validation.md directement réutilisables |
| **Chef de projet** | Gouvernance projet : jalons, Notion/Git, validations fictives, enrichissement continu | **Oui — Haute priorité** | §2.1 et notion-sync-summary alimentent project-manager-method.md |
| **Concepteur fonctionnel** | Conception fonctionnelle : parcours cibles, écrans candidats, comportements, pont UX | **Oui — Moyenne priorité** | Contenu riche mais partiellement mélangé avec UX ; extraction après phase design |
| **UX/UI Designer** | Brief UX/UI : personas, parcours, 8 fiches écran, checklist Figma | **Oui — Haute priorité** | ux-ui-brief.md + validation.md = base template quasi directe |
| **Architecte** | Contrats API simulés (option C), ADR candidates, gestion erreurs, journalisation | **Oui — Haute priorité** | integration-error-arbitration-review et secure-email très capitalisables |
| **QA / Testeur** | Scénarios QA : email, intégration, Error Matrix, critères futurs | **Oui — Moyenne priorité** | Solide au cadrage ; à enrichir avec exécution tests réelle |
| **RSSI** | Revue SSI : email sécurisé, données sensibles, conservation, pièces jointes | **Oui — Haute priorité** | secure-email-intake-review.md = template Secure Email Intake direct |
| **FinOps** | Revue FinOps : coûts variables notifications, stockage, logs, API | **Partiellement — Basse priorité** | Hypothèses présentes mais moins structurées ; checklist prioritaire sur template |
| **GreenOps** | Revue GreenOps : sobriété stockage, photos, logs, conservation fictive | **Partiellement — Moyenne priorité** | ARB-MVP-06 bien couvert ; template sobriété à consolider |
| **Data / IA** | Cadrage IA légère : report post-MVP, gouvernance, risques surcomplexification | **Partiellement — Basse priorité** | Positionnement clair mais peu de matière opérationnelle ; enrichir si IA retenue |

---

## 5. Revue du savoir-être à capitaliser

| Rôle | Posture / savoir-être observé | Pourquoi c'est important pour SFIA | Capitalisation possible |
|------|------------------------------|-----------------------------------|------------------------|
| **Business Analyst** | Clarifier sans sur-spécifier ; reformuler le besoin sans imposer de solution | Évite la dérive technique prématurée ; préserve la trajectoire formulaire → application | Standard « cadrage sans solution » ; checklist posture BA |
| **Product Owner** | Arbitrer valeur vs complexité ; accepter de reporter sans perdre la vision produit | Maintient un MVP démonstrateur crédible ; évite la dérive ERP | Grille valeur/complexité avec posture PO ; prompt arbitrage MVP |
| **Chef de projet** | Tenir la trajectoire ; empêcher les dérives de phase ; maintenir la séparation Notion / Git | Gouvernance SFIA reproductible ; évite duplication et confusion des sources | Standard gouvernance Notion/Git ; checklist passage de phase |
| **Concepteur fonctionnel** | Faire le pont entre métier et écrans ; éviter de produire trop tôt des maquettes | Sépare cadrage fonctionnel et design graphique ; protège la méthode | Standard pont métier/UX ; garde-fou anti-maquette prématurée |
| **UX/UI Designer** | Préparer Figma sans se précipiter dans Figma ; protéger l'expérience contre la surcharge cognitive | Règle §14.6 business-framing ; évite le design avant brief validé | Checklist entrée Figma ; standard « brief before Figma » |
| **Architecte** | Cadrer les décisions structurantes sans produire d'architecture prématurée ; documenter les ADR candidates sans les finaliser | Frontière cadrage / architecture respectée sur Interv360 | Standard frontière cadrage/architecture ; checklist ADR candidate |
| **QA / Testeur** | Penser aux erreurs dès le cadrage ; ne pas attendre la phase test pour identifier les non happy paths | Robustesse parcours ; confiance dirigeant sur anomalies visibles | Standard QA amont ; prompt scénarios non happy path |
| **RSSI** | Challenger sans bloquer ; sécuriser le canal email même s'il n'est pas principal | SSI crédible sans bloquer le démonstrateur ; email traité sérieusement | Standard « challenger sans bloquer » ; checklist posture RSSI |
| **FinOps** | Alerter sur les coûts variables sans imposer un modèle financier lourd | FinOps utile dès le cadrage sans sur-ingénierie financière | Checklist FinOps légère ; prompt alerte coûts variables |
| **GreenOps** | Challenger la sobriété sans appauvrir la valeur métier | Sobriété alignée valeur démo ; évite l'écologie performative | Standard sobriété pragmatique ; checklist GreenOps cadrage |
| **Data / IA** | Ne pas mettre de l'IA par défaut ; privilégier la valeur métier et la gouvernance | Évite la surcomplexification ; position SFIA réaliste sur l'IA légère | Checklist IA légère MVP/option/post-MVP ; standard « no AI by default » |

**Constat :** le savoir-être est **inféré** dans role-methods-framing.md (erreurs à éviter, limites, décisions) mais **pas encore structuré en section dédiée** par rôle. Les futurs templates extraits devront ajouter un bloc **« Posture SFIA »** explicite.

---

## 6. Rôles à renforcer avant extraction

| Rôle | Renforcement nécessaire | Pourquoi | Action recommandée |
|------|------------------------|----------|-------------------|
| **Business Analyst** | Faible | Déjà mature au cadrage | Extraire en priorité ; enrichir en phase tests (RG-* → critères) |
| **Product Owner** | Faible | 7 arbitrages validés, format solide | Extraire ; compléter après recette |
| **Chef de projet** | Faible | Gouvernance et enrichissement continu formalisés | Extraire ; tester phase gate en architecture |
| **Concepteur fonctionnel** | Modéré | Contenu riche mais phase design non vécue | Attendre conception fonctionnelle / Figma pour enrichir §4.4 |
| **UX/UI Designer** | Faible | Brief + validation = maturité forte | Extraire ; enrichir post-Figma |
| **Architecte** | Faible au cadrage ; modéré avant extraction finale | Cadrage solide ; architecture pas encore produite | Extraire base cadrage ; enrichir obligatoirement en phase architecture |
| **QA / Testeur** | Modéré | Bon cadrage scénarios ; peu de tests exécutés | Enrichir en delivery/QA ; puis extraire |
| **RSSI** | Faible | secure-email-intake-review très complet | Extraire en priorité |
| **FinOps** | **Oui — modéré** | Contributions dispersées, moins de densité que RSSI | Produire checklist FinOps cadrage consolidée avant extraction |
| **GreenOps** | Modéré | ARB-MVP-06 couvert ; géolocalisation ouverte | Enrichir en architecture ; consolider template sobriété |
| **Data / IA** | **Oui — modéré** | Report IA documenté mais peu de matière opérationnelle | Enrichir si cas d'usage IA émergent ; sinon extraction basse priorité |

---

## 7. Templates à extraire en priorité

### Priorité haute — extraction recommandée dès fin de cadrage

| Priorité | Template cible | Rôle source | Justification |
|----------|----------------|-------------|---------------|
| **Haute** | business-analyst-method.md | Business Analyst | Matière business-framing dense ; 3 templates haute priorité ; rôle le plus mobilisé au cadrage |
| **Haute** | product-owner-method.md | Product Owner | 7 arbitrages MVP validés ; format arbitrage directement réutilisable |
| **Haute** | project-manager-method.md | Chef de projet | Gouvernance, enrichissement continu, Notion/Git ; pilier méthode SFIA |
| **Haute** | ux-ui-designer-method.md | UX/UI Designer | Brief + validation = quasi-template ; checklist Figma capitalisable |
| **Haute** | architect-method.md | Architecte | Contrats API, ADR candidates, erreurs ; standard intégration simulée |
| **Haute** | rssi-method.md | RSSI | secure-email-intake-review ; exigences SSI tabulaires ; challenger sans bloquer |

### Priorité suivante — extraction après prochaines phases

| Priorité | Template cible | Rôle source | Justification |
|----------|----------------|-------------|---------------|
| **Moyenne** | functional-designer-method.md | Concepteur fonctionnel | Enrichir après Figma et conception fonctionnelle |
| **Moyenne** | qa-tester-method.md | QA / Testeur | Enrichir après delivery et exécution scénarios |
| **Moyenne** | greenops-method.md | GreenOps | Consolider après architecture et décisions conservation |
| **Basse** | finops-method.md | FinOps | Checklist prioritaire ; template hypothèses coûts secondaire |
| **Basse** | data-ai-method.md | Data / IA | Report IA clair ; matière opérationnelle limitée au cadrage |

---

## 8. Décision de revue

**Décision candidate :**

Le document `role-methods-framing.md` est **suffisamment structuré** pour servir de base au découpage en templates SFIA par rôle, **sous réserve** d'intégrer progressivement les enrichissements issus des prochaines phases Interv360 (architecture, Figma, delivery, QA, recette, REX).

**Précisions :**

- Les **6 rôles à maturité Fort** (Business Analyst, Product Owner, Chef de projet, UX/UI Designer, Architecte, RSSI) peuvent être **extraits en priorité**.
- Les **3 rôles Correct** (Concepteur fonctionnel, QA / Testeur, GreenOps) devront être **enrichis** avant extraction définitive.
- Les **2 rôles À renforcer** (FinOps, Data / IA) peuvent produire des **checklists** en priorité, pas des méthodes complètes immédiatement.
- Les templates extraits **ne devront pas être figés** : ils resteront **évolutifs** et enrichis au fil des phases projet, conformément à la règle §2.1 de role-methods-framing.md.
- Le **savoir-être** devra être **explicité** dans chaque template extrait (bloc « Posture SFIA »), en complément du savoir-faire déjà documenté.

---

## 9. Impact sur les prochaines itérations Interv360

Chaque prochaine étape Interv360 devra contenir un **contrôle de capitalisation SFIA** :

| Contrôle | Description |
|----------|-------------|
| Rôles mobilisés | Quels rôles ont intervenu sur ce livrable / cette phase ? |
| Valeur projet produite | Quelle décision, livrable ou validation pour Interv360 ? |
| Valeur SFIA produite | Quel template, checklist, prompt ou standard candidat ? |
| Savoir-faire ajouté | Quelle méthode, question type ou matrice à mettre à jour ? |
| Savoir-être ajouté | Quelle posture, réflexe ou erreur à éviter à formaliser ? |
| Templates / checklists / prompts impactés | Quels fichiers `sfia/methods/roles/` ou role-methods-framing.md §4.x ? |
| Mise à jour documentaire | `role-methods-framing.md` et/ou futurs fichiers `sfia/methods/roles/` à enrichir ? |

**Moments déclencheurs** (reprise §2.1 role-methods-framing) : fin de cadrage ✓ · validation MVP ✓ · brief UX/UI ✓ · préparation Figma · architecture · ADR · conception fonctionnelle · delivery · QA / tests · recette · REX · synchronisation Notion.

---

## 10. Capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template Role Methods Review | Structure présent document | Template |
| Checklist revue qualité rôle | §2 — 12 critères de revue | Checklist |
| Grille maturité rôle | §3 — Fort / Correct / À renforcer | Template |
| Grille savoir-être par rôle | §5 — posture et capitalisation | Template |
| Prompt revue méthode rôle | Revue qualité d'un §4.x avant extraction | Prompt |
| Standard enrichissement continu rôle / savoir-être | §2.1 role-methods-framing + §9 présent document | Standard |

---

## 11. Conclusion

La revue confirme que la **capitalisation par rôle** constitue une **brique structurante de SFIA**. Le document `role-methods-framing.md` offre une base **robuste et traçable** pour le découpage en templates, avec une couverture **Fort** sur 6 rôles sur 11 au stade cadrage.

Les rôles doivent rester **évolutifs** et être **enrichis à chaque phase Interv360** — savoir-faire et savoir-être — avant toute extraction définitive. Le savoir-être, aujourd'hui implicite, devra devenir **explicite** dans les futurs fichiers `sfia/methods/roles/`.

La prochaine étape pourra consister à **extraire les premiers templates par rôle** dans `sfia/methods/roles/`, en commençant par : business-analyst, product-owner, project-manager, ux-ui-designer, architect et rssi.

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*

# Interv360 — ADR Candidates

**Projet** : PRJ-INTERV360  
**Phase** : 01-cadrage  
**Statut** : Draft  
**Type** : ADR candidates  
**Source** : cadrage Interv360 + arbitrages MVP + revues intégrations / SSI / UX  
**Objet** : préparation des décisions structurantes à instruire en phase architecture

---

## 1. Objectif du document

Ce document identifie les **décisions structurantes** qui devront être instruites en **ADR** pendant la phase architecture d'Interv360.

Il ne s'agit **pas** :

- d'ADR finalisées ;
- d'architecture technique détaillée ;
- de choix techniques définitifs.

Il s'agit d'une **liste priorisée de sujets décisionnels**, chacun relié à un arbitrage MVP, un risque, un livrable ou une contrainte du cadrage consolidé.

---

## 2. Principes de qualification d'une ADR candidate

Une décision devient ADR candidate si :

- [ ] elle **structure durablement** le produit ou l'architecture ;
- [ ] elle **impacte plusieurs livrables** ou plusieurs rôles ;
- [ ] elle a des **conséquences sur le MVP** ou la suite du produit ;
- [ ] elle nécessite de **documenter un choix et des alternatives** ;
- [ ] elle porte un **risque technique, SSI, UX, delivery ou exploitation** ;
- [ ] elle doit rester **traçable au-delà du cadrage**.

---

## 3. Synthèse des ADR candidates

| ID | Sujet | Source principale | Rôle principal | Priorité | Statut |
|----|-------|-------------------|----------------|----------|--------|
| **ADR-CAND-001** | Contrats API documentés avec implémentation simulée | ARB-MVP-04 / integration-error-arbitration-review.md | Architecte | Haute | Candidate |
| **ADR-CAND-002** | Gestion visible des erreurs d'intégration avec reprise manuelle | ARB-MVP-05 / integration-error-arbitration-review.md | Architecte / QA | Haute | Candidate |
| **ADR-CAND-003** | Canal email sécurisé non principal | ARB-MVP-01 / secure-email-intake-review.md | RSSI / Architecte | Haute | Candidate |
| **ADR-CAND-004** | Journalisation minimale des flux et rejets | integration-error-arbitration-review.md / secure-email-intake-review.md | Architecte / RSSI | Haute | Candidate |
| **ADR-CAND-005** | Conservation fictive des photos, signatures et logs | ARB-MVP-06 | RSSI / GreenOps | Moyenne | Candidate |
| **ADR-CAND-006** | Notifications client sans portail client au MVP | ARB-MVP-02 | Product Owner / Architecte | Moyenne | Candidate |
| **ADR-CAND-007** | Signature client optionnelle structurée | ARB-MVP-03 | Product Owner / Business Analyst | Moyenne | Candidate |
| **ADR-CAND-008** | Dashboard SAV et vue dirigeant séparés | ARB-MVP-07 / dashboard-kpi-ux-review.md | UX/UI Designer / Product Owner | Moyenne | Candidate |
| **ADR-CAND-009** | IA légère reportée post-MVP | framing-review.md / business-framing.md | Data / IA / Product Owner | Basse | Candidate |

---

## 4. Fiches ADR candidates

### ADR-CAND-001 — Contrats API documentés avec implémentation simulée

**Statut** : Candidate  
**Priorité** : Haute  
**Rôle principal** : Architecte  
**Rôles contributeurs** : Product Owner, QA / Testeur, Chef de projet  
**Source(s)** : ARB-MVP-04, integration-error-arbitration-review.md, business-framing §8

**Question à instruire**  
Quel niveau de formalisation des contrats API (schémas, endpoints, codes retour) adopter pour le démonstrateur Interv360, et comment séparer contrat documenté et implémentation simulée ?

**Contexte issu du cadrage**  
L'arbitrage MVP ARB-MVP-04 a validé l'**option C** : vrais contrats API documentés avec implémentation simulée. Six domaines d'intégration sont cadrés (CRM, calendrier, notifications, facturation, email). Cette décision prépare l'architecture sans dépendre de systèmes réels.

**Options pressenties**

| Option | Description | Position cadrage |
|--------|-------------|------------------|
| A — Mocks statiques | Réponses figées sans contrat formalisé | Rejetée — crédibilité insuffisante |
| B — API simulées, contrats simples | Endpoints simulés, schémas légers | Compromis possible |
| **C — Contrats documentés, implémentation simulée** | OpenAPI ou équivalent, exécution locale/simulée | **Recommandée par le cadrage** — non finalisée en ADR |
| D — Intégrations réelles partielles | Connexion CRM/calendrier réel | Reportée post-MVP |

**Impacts à analyser**

- **Projet** : crédibilité orchestration, effort documentation, préparation tests
- **UX** : cohérence statuts visibles, délais affichés
- **Architecture** : structure modules intégration, contrats par domaine
- **SSI** : exposition endpoints simulés, authentification mock
- **QA** : scénarios basés sur contrats, non happy path
- **Exploitation** : coût maintenance contrats vs mocks
- **SFIA** : standard intégration simulée réutilisable

**Risques associés**  
R-I01 (crédibilité limitée si mal documenté) ; effort delivery documentation ; dérive vers intégrations réelles prématurées.

**Livrables liés**  
integration-error-arbitration-review.md ; business-framing §8 ; mvp-arbitration-validation.md §5

**Capitalisation SFIA possible**  
Template API Contract Framing ; Standard contrats API simulés ; PROMPT-ARCH-001

---

### ADR-CAND-002 — Gestion visible des erreurs d'intégration avec reprise manuelle

**Statut** : Candidate  
**Priorité** : Haute  
**Rôle principal** : Architecte  
**Rôles contributeurs** : QA / Testeur, Product Owner, UX/UI Designer  
**Source(s)** : ARB-MVP-05, integration-error-arbitration-review.md

**Question à instruire**  
Comment rendre les erreurs d'intégration visibles dans le parcours MVP et quelle mécanique de reprise manuelle simulée adopter, sans retry automatique ?

**Contexte issu du cadrage**  
ARB-MVP-05 valide le **niveau 3** : erreurs visibles dans l'écran anomalies avec reprise manuelle simulée ; retry automatique hors MVP. Lié indissociablement à ARB-MVP-04 (contrats API). Cas métier CF9 (échec sync) obligatoire.

**Options pressenties**

| Option | Description | Position cadrage |
|--------|-------------|------------------|
| A — Erreurs masquées / logs seulement | Pas d'écran dédié | Rejetée |
| B — Indicateur agrégé dashboard uniquement | Anomalies comptées, pas de détail | Partielle — complément dashboard |
| **C — Écran anomalies + reprise manuelle simulée** | Détail erreur, action reprise guidée | **Recommandée par le cadrage** |
| D — Retry automatique + supervision | Mécanisme complet | Reportée post-MVP |

**Impacts à analyser**

- **Projet** : confiance dirigeant, démonstration non happy path
- **UX** : écran erreurs (§5.7 ux-ui-brief), lisibilité message métier vs log
- **Architecture** : modèle Error, statuts, événements
- **SSI** : traçabilité erreurs, pas d'exposition données sensibles dans logs UI
- **QA** : Error Matrix, scénarios sync échouée
- **Exploitation** : volume logs, alertes
- **SFIA** : Template Error Matrix ; checklist API Error Handling

**Risques associés**  
R-I03, R-I04 (erreurs invisibles, perte confiance) ; complexité reprise manuelle sous-estimée.

**Livrables liés**  
integration-error-arbitration-review.md ; ux-ui-brief.md §5.7 ; mvp-arbitration-validation.md

**Capitalisation SFIA possible**  
Template Error Matrix ; PROMPT-ARCH-001 ; checklist QA intégration

---

### ADR-CAND-003 — Canal email sécurisé non principal

**Statut** : Candidate  
**Priorité** : Haute  
**Rôle principal** : RSSI  
**Rôles contributeurs** : Architecte, Business Analyst, QA / Testeur  
**Source(s)** : ARB-MVP-01, secure-email-intake-review.md

**Question à instruire**  
Comment implémenter le canal email comme intégration sécurisée complète (`POST /email/intake`) tout en conservant le CRM simulé comme canal principal du MVP ?

**Contexte issu du cadrage**  
Email = canal d'intégration sécurisé **non principal**. Contrat fonctionnel documenté : authentification source, autorisation expéditeur, statuts RECU/REJETE/A_QUALIFIER, scénarios rejet/PJ/doublon. Dix exigences SSI tabulaires.

**Options pressenties**

| Option | Description | Position cadrage |
|--------|-------------|------------------|
| A — Email flux principal | Parsing email pilote le parcours | Rejetée au MVP |
| B — Email ignoré au MVP | Pas de traitement email | Rejetée — cas CF2 non couvert |
| **C — Email sécurisé non principal** | CRM principal ; email cadré SSI complet | **Recommandée par le cadrage** |
| D — Multi-canal équivalent | CRM, email, saisie même poids | Rejetée — scope élargi |

**Impacts à analyser**

- **Projet** : démo crédible SSI sans élargir flux principal
- **UX** : parcours rejet/qualification email (ux-ui-brief §4)
- **Architecture** : endpoint intake, validation PJ, anti-doublon
- **SSI** : auth source, expéditeurs autorisés, traçabilité rejets
- **QA** : scénarios §5 secure-email-intake-review
- **Exploitation** : coût stockage PJ, volume emails
- **SFIA** : Template Secure Email Intake ; PROMPT-SEC-001

**Risques associés**  
R-S01, R-M01 (spoofing, doublons cross-canal) ; complexité simulation email.

**Livrables liés**  
secure-email-intake-review.md ; mvp-arbitrations.md ARB-MVP-01

**Capitalisation SFIA possible**  
Template Secure Email Intake ; Checklist SSI email ; PROMPT-SEC-001

---

### ADR-CAND-004 — Journalisation minimale des flux et rejets

**Statut** : Candidate  
**Priorité** : Haute  
**Rôle principal** : Architecte  
**Rôles contributeurs** : RSSI, QA / Testeur  
**Source(s)** : integration-error-arbitration-review.md, secure-email-intake-review.md, RG-I07

**Question à instruire**  
Quel niveau minimal de journalisation adopter pour les flux d'intégration (CRM, email, calendrier, notifications) et les rejets, sans surcharger le MVP ?

**Contexte issu du cadrage**  
Journalisation requise pour email (réceptions, rejets), erreurs d'intégration et synchronisations. Liée à ARB-MVP-01, ARB-MVP-05 et exigences RSSI. Pas d'implémentation lourde de SIEM au MVP.

**Options pressenties**

| Option | Description | Position cadrage |
|--------|-------------|------------------|
| A — Pas de journalisation | Aucun log structuré | Rejetée — non conforme SSI |
| B — Logs applicatifs minimaux | Horodatage, source, statut, référence | **Recommandée par le cadrage** |
| C — Journalisation complète + rétention longue | Logs détaillés, archivage | Reportée — alignement ARB-MVP-06 |
| D — SIEM externe | Export vers outil sécurité | Hors MVP |

**Impacts à analyser**

- **Projet** : traçabilité démo, auditabilité rejets email
- **UX** : représentation erreurs (log vs message métier — point ouvert ux-ui-brief-validation §4)
- **Architecture** : format log, corrélation flux
- **SSI** : traçabilité rejets, non-répudiation partielle
- **QA** : vérification logs dans scénarios
- **Exploitation** : coût stockage logs (FinOps/GreenOps)
- **SFIA** : standard journalisation intégration simulée

**Risques associés**  
R-S02 (logs insuffisants) ; R-FG02 (sur-stockage logs) ; exposition données sensibles dans logs.

**Livrables liés**  
secure-email-intake-review.md §3 ; integration-error-arbitration-review.md ; business-framing RG-I07

**Capitalisation SFIA possible**  
Checklist journalisation intégration ; lien PROMPT-ARCH-001 / PROMPT-SEC-001

---

### ADR-CAND-005 — Conservation fictive des photos, signatures et logs

**Statut** : Candidate  
**Priorité** : Moyenne  
**Rôle principal** : RSSI  
**Rôles contributeurs** : GreenOps, FinOps, Architecte  
**Source(s)** : ARB-MVP-06, business-framing §9.3, RG-S03–RG-S05

**Question à instruire**  
Quelles hypothèses de conservation (durée, volume, purge) documenter pour photos, signatures et logs au MVP, sans implémentation lourde purge/archivage ?

**Contexte issu du cadrage**  
ARB-MVP-06 valide conservation **limitée fictive documentée** — hypothèses RSSI/GreenOps, pas d'implémentation lourde au MVP. Impacte compte rendu, PJ email, preuves intervention.

**Options pressenties**

| Option | Description | Position cadrage |
|--------|-------------|------------------|
| A — Conservation illimitée | Stockage sans règle | Rejetée — GreenOps/RSSI |
| **B — Hypothèses documentées, pas de purge MVP** | Durées/volumes fictifs tracés | **Recommandée par le cadrage** |
| C — Purge/archivage implémenté | Mécanisme automatique | Reportée post-MVP |
| D — Pas de stockage médias | Photos hors système | Rejetée — parcours CR incomplet |

**Impacts à analyser**

- **Projet** : gouvernance testée sans surcoût delivery
- **UX** : accès historique photos/signatures
- **Architecture** : modèle stockage, métadonnées conservation
- **SSI** : durée rétention données sensibles
- **QA** : critères conservation testables
- **Exploitation** : coût stockage (FinOps), sobriété (GreenOps)
- **SFIA** : template sobriété données ; checklist RSSI/GreenOps

**Risques associés**  
R-S03 (données conservées excessivement) ; R-FG01 (stockage photos non maîtrisé).

**Livrables liés**  
mvp-arbitration-validation.md ARB-MVP-06 ; business-framing §9.3

**Capitalisation SFIA possible**  
Template sobriété données ; enrichissement rssi-method.md / greenops (futur)

---

### ADR-CAND-006 — Notifications client sans portail client au MVP

**Statut** : Candidate  
**Priorité** : Moyenne  
**Rôle principal** : Product Owner  
**Rôles contributeurs** : Architecte, UX/UI Designer, FinOps  
**Source(s)** : ARB-MVP-02, business-framing §4

**Question à instruire**  
Comment structurer le service de notifications client simulé au MVP, en l'absence de portail client, et quels événements déclencheurs retenir ?

**Contexte issu du cadrage**  
ARB-MVP-02 : **notifications uniquement** au MVP ; portail client en évolution ultérieure. Indicateur échecs notifications sur dashboard SAV (pas d'écran dédié). Client final sans accès direct plateforme.

**Options pressenties**

| Option | Description | Position cadrage |
|--------|-------------|------------------|
| **A — Notifications simulées uniquement** | Email/SMS simulés, pas de portail | **Recommandée par le cadrage** |
| B — Portail client minimal | Accès statut demande | Reportée post-MVP |
| C — Portail + notifications | Double canal | Reportée — scope maximal |
| D — Aucun contact client | Suivi interne seulement | Rejetée — parcours incomplet |

**Impacts à analyser**

- **Projet** : scope maîtrisé, cas CF4 partiellement couvert
- **UX** : indicateur échecs dashboard ; pas d'écran notifications détaillé
- **Architecture** : service notification simulé, événements déclencheurs
- **SSI** : exposition minimale données client
- **QA** : scénario échec notification
- **Exploitation** : coût notifications (FinOps RG-FG03)
- **SFIA** : template notification ; checklist portail vs notifications

**Risques associés**  
R-M07, R-UX07 (expérience client limitée) ; R-FG03 (fréquence/coût notifications).

**Livrables liés**  
mvp-arbitrations.md ARB-MVP-02 ; ux-ui-brief.md §4, §6

**Capitalisation SFIA possible**  
Template notification ; enrichissement product-owner-method.md

---

### ADR-CAND-007 — Signature client optionnelle structurée

**Statut** : Candidate  
**Priorité** : Moyenne  
**Rôle principal** : Product Owner  
**Rôles contributeurs** : Business Analyst, UX/UI Designer, QA / Testeur  
**Source(s)** : ARB-MVP-03, business-framing RG-R01–RG-R02

**Question à instruire**  
Comment modéliser la signature client optionnelle dans le compte rendu et les règles de clôture, sans bloquer le parcours terrain ?

**Contexte issu du cadrage**  
ARB-MVP-03 : signature **optionnelle, non bloquante**, structurée dans modèle métier et CR. Objet Signature client testable. Flexibilité terrain vs preuve d'intervention.

**Options pressenties**

| Option | Description | Position cadrage |
|--------|-------------|------------------|
| A — Signature obligatoire | Clôture bloquée sans signature | Rejetée au MVP |
| **B — Signature optionnelle structurée** | Champ signature, clôture sans blocage | **Recommandée par le cadrage** |
| C — Signature différée | Clôture provisoire puis complément | Complexité statuts — reportée |
| D — Pas de signature au MVP | Aucune capture signature | Rejetée — objet métier incomplet |

**Impacts à analyser**

- **Projet** : adoption technicien, preuve partielle acceptable
- **UX** : compte rendu mobile, saisie signature optionnelle (ux-ui-brief §5.6)
- **Architecture** : objet Signature, stockage, format
- **SSI** : valeur probante limitée, conservation (lien ADR-CAND-005)
- **QA** : critères clôture avec/sans signature
- **Exploitation** : stockage signatures
- **SFIA** : template compte rendu ; règle RG-R02

**Risques associés**  
R-M06 (blocages terrain si obligatoire) ; preuve absente si optionnelle mal cadrée.

**Livrables liés**  
mvp-arbitrations.md ARB-MVP-03 ; ux-ui-brief.md §5.6

**Capitalisation SFIA possible**  
Template compte rendu ; enrichissement business-analyst-method.md

---

### ADR-CAND-008 — Dashboard SAV et vue dirigeant séparés

**Statut** : Candidate  
**Priorité** : Moyenne  
**Rôle principal** : UX/UI Designer  
**Rôles contributeurs** : Product Owner, Concepteur fonctionnel, Business Analyst  
**Source(s)** : ARB-MVP-07, dashboard-kpi-ux-review.md, ux-ui-brief.md §5.1 / §5.8

**Question à instruire**  
Comment structurer techniquement et fonctionnellement la séparation entre tableau de bord SAV (opérationnel) et vue pilotage dirigeant (consolidé), sans redondance ni surcharge cognitive ?

**Contexte issu du cadrage**  
Deux écrans **inclus au MVP** avec orientations distinctes : SAV = court terme, détail opérationnel ; dirigeant = consolidé, tendances. 12 KPI dashboard SAV, 10 KPI vue dirigeant. Garde-fous surcharge cognitive documentés.

**Options pressenties**

| Option | Description | Position cadrage |
|--------|-------------|------------------|
| A — Dashboard unique combiné | Un seul écran pilotage | Rejetée — confusion rôles |
| **B — Deux écrans complémentaires** | Dashboard SAV + vue dirigeant séparés | **Recommandée par le cadrage** |
| C — Dashboard SAV seul au MVP | Pas de vue dirigeant | Rejetée — ARB-MVP-07 étendu |
| D — BI avancée / personnalisation | Dashboards configurables | Reportée post-MVP |

**Impacts à analyser**

- **Projet** : valeur dirigeant démontrable, 2 écrans à maintenir
- **UX** : différenciation KPI, points ouverts above the fold (ux-ui-brief-validation §4)
- **Architecture** : agrégations, sources données communes
- **SSI** : accès différenciés dirigeant vs opérationnel
- **QA** : cohérence KPI entre vues
- **Exploitation** : performance requêtes agrégées
- **SFIA** : Template Dashboard KPI Matrix ; Template Executive View Framing

**Risques associés**  
R-UX03 (surcharge cognitive) ; R-M08 (KPI incohérents entre vues) ; duplication maintenance.

**Livrables liés**  
dashboard-kpi-ux-review.md ; ux-ui-brief.md ; mvp-arbitration-validation.md §3

**Capitalisation SFIA possible**  
Template Dashboard KPI Matrix ; PROMPT-UX-003 ; enrichissement ux-ui-designer-method.md

---

### ADR-CAND-009 — IA légère reportée post-MVP

**Statut** : Candidate  
**Priorité** : Basse  
**Rôle principal** : Data / IA  
**Rôles contributeurs** : Product Owner, FinOps, Architecte  
**Source(s)** : framing-review.md §4, business-framing Q7/Q15/A-IA01

**Question à instruire**  
Quels cas d'usage IA légère (résumé CR, classification demandes, aide priorisation) retenir pour une phase post-MVP, et quelle gouvernance données associer ?

**Contexte issu du cadrage**  
IA légère **reportée post-MVP** (priorité moyenne framing-review). Pas de prédictif IA au dashboard. Risques surcomplexification R-FG05, R-S07. Cas candidats identifiés sans engagement MVP.

**Options pressenties**

| Option | Description | Position cadrage |
|--------|-------------|------------------|
| A — IA légère au MVP | Assistance intégrée dès démo | Rejetée — scope et coût |
| B — IA optionnelle post-MVP | Cas d'usage cadrés, activation ultérieure | **Recommandée par le cadrage** |
| C — Pas d'IA | Exclusion définitive | Non tranchée — à réévaluer |
| D — IA avancée / prédictif | BI prédictive dashboard | Rejetée au MVP |

**Impacts à analyser**

- **Projet** : périmètre MVP maîtrisé, valeur IA différée
- **UX** : pas d'assistance IA au MVP (limites ux-ui-brief)
- **Architecture** : points d'extension futurs, gouvernance données
- **SSI** : données sensibles exclues de l'IA
- **QA** : N/A au MVP
- **Exploitation** : coût API IA (FinOps)
- **SFIA** : Template AI Use Case Framing ; checklist IA légère

**Risques associés**  
R-FG05, R-S07 (surcomplexification, gouvernance IA) ; promesse IA sans cas d'usage.

**Livrables liés**  
business-framing §11 Q7/Q15 ; framing-review.md ; role-methods-framing §4.11

**Capitalisation SFIA possible**  
Template AI Use Case Framing ; enrichissement data-ai-method.md (futur)

---

## 5. Priorisation d'instruction

| Priorité | ADR candidates | Pourquoi |
|----------|----------------|----------|
| **Priorité 1** | ADR-CAND-001, ADR-CAND-002, ADR-CAND-003, ADR-CAND-004 | Fondations intégration simulée, erreurs visibles, email sécurisé, traçabilité — bloquent l'architecture et les tests |
| **Priorité 2** | ADR-CAND-005, ADR-CAND-006, ADR-CAND-007, ADR-CAND-008 | Conservation, notifications, signature, dashboards — impactent modèle métier et UX mais dépendent des fondations P1 |
| **Priorité 3** | ADR-CAND-009 | IA légère — explicitement reportée, instruction différée |

---

## 6. Frontière avec la phase architecture

- Ce document **ne valide pas** les ADR — statut **Candidate** uniquement.
- La **phase architecture** transformera certaines candidates en **ADR formelles** (Notion + `docs/adr/` ou équivalent projet).
- Les **choix techniques finaux** (stack, frameworks, déploiement) ne sont **pas pris** ici.
- Ce document **prépare** la phase architecture **sans l'anticiper** : pas de dossier `02-architecture/` créé à ce stade.
- Les options **recommandées par le cadrage** restent des **orientations** — l'ADR formelle documentera le choix retenu et les alternatives écartées.

---

## 7. Impact sur les rôles SFIA

| Rôle | Impact | Fichier méthode à enrichir plus tard |
|------|--------|--------------------------------------|
| **Architecte** | ADR-CAND-001, 002, 004, 006 — cœur architecture intégration | docs/methods/roles/architect-method.md |
| **RSSI** | ADR-CAND-003, 004, 005 — SSI email, journalisation, conservation | docs/methods/roles/rssi-method.md |
| **Product Owner** | ADR-CAND-006, 007, 009 — périmètre MVP, signature, IA | docs/methods/roles/product-owner-method.md |
| **Chef de projet** | Priorisation instruction ADR, passage phase architecture | docs/methods/roles/project-manager-method.md |
| **UX/UI Designer** | ADR-CAND-008 — séparation dashboards, représentation erreurs | docs/methods/roles/ux-ui-designer-method.md |
| **Business Analyst** | ADR-CAND-007 — règles clôture, signature | docs/methods/roles/business-analyst-method.md |
| **QA / Testeur** | ADR-CAND-002, 004 — scénarios erreurs, logs | Non extrait encore — à enrichir plus tard |
| **GreenOps** | ADR-CAND-005 — conservation, sobriété logs/médias | Non extrait encore — à enrichir plus tard |
| **Data / IA** | ADR-CAND-009 — gouvernance IA post-MVP | Non extrait encore — à enrichir plus tard |

---

## 8. Impact sur les prompts SFIA

| Prompt candidat | Impact |
|-----------------|--------|
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Alimenté directement par ADR-CAND-001, 002, 004 |
| **PROMPT-SEC-001** — Revue canal email sécurisé | Alimenté directement par ADR-CAND-003, 004 |
| **PROMPT-ARB-001** — Arbitrages MVP | Source des décisions cadrage — contexte ADR candidates |
| **PROMPT-ROLE-003** — Extraction méthode rôle | Architecte et RSSI à enrichir post-instruction ADR |
| **PROMPT-GOV-001** — Sync gouvernance Notion | Traçabilité statuts ADR candidates en gouvernance |

---

## 9. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template ADR Candidate | Structure présent document §4 | Template |
| Checklist qualification ADR candidate | §2 — critères qualification | Checklist |
| Matrice ADR candidate → rôle | §7 — impact rôles SFIA | Template |
| Matrice ADR candidate → prompts | §8 — lien prompts catalogue | Template |
| Standard frontière cadrage / architecture | §6 — limites document | Standard |
| Prompt revue ADR candidates | Formalisation future PROMPT-ARCH-* étendu | Prompt |

---

## 10. Conclusion

Ce document **prépare la phase architecture** en identifiant **9 décisions structurantes** à instruire, **sans produire d'architecture** ni **finaliser les ADR**.

Les ADR candidates alimentent directement les rôles **Architecte**, **RSSI**, **Product Owner**, **Chef de projet**, **UX/UI Designer** et les futurs **prompts SFIA** associés (PROMPT-ARCH-001, PROMPT-SEC-001, PROMPT-GOV-001).

La prochaine étape consiste à **ouvrir la phase architecture** et à transformer les candidates **Priorité 1** en ADR formelles, sous réserve du passage de phase et sans anticiper les choix techniques finaux.

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*

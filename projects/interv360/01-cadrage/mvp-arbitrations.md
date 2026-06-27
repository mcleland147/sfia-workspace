# Interv360 — MVP Arbitrations

**Projet** : PRJ-INTERV360  
**Phase** : 01-cadrage  
**Statut** : Draft  
**Source** : `business-framing.md` + `framing-review.md`  
**Objectif** : première passe d'arbitrages MVP sans définition finale du MVP

---

## 1. Objectif du document

Ce document prépare les **arbitrages MVP** à partir du cadrage Interv360 (`business-framing.md`) et de la revue de cohérence (`framing-review.md`).

Il formalise les **recommandations candidates** sur les points de clarification prioritaires identifiés en revue, sans :

- figer le périmètre MVP final ;
- lancer l'architecture technique ;
- produire de backlog, user stories ou ADR finalisées ;
- publier dans Notion.

Les décisions restent **non tranchées** à ce stade. Ce document sert de base de travail pour la validation métier/fonctionnelle/UX et la préparation des ADR candidates.

---

## 2. Principes d'arbitrage

Les arbitrages MVP Interv360 doivent respecter les principes suivants :

- **privilégier la valeur métier démontrable** — chaque choix doit permettre de montrer le cycle SAV de bout en bout ;
- **limiter la complexité technique** — éviter les mécanismes lourds (retry complexe, intégrations réelles, portail complet) ;
- **conserver la crédibilité des intégrations simulées** — mocks et contrats simples suffisants pour le démonstrateur ;
- **éviter de transformer le pilote en ERP ou outil complet** — Interv360 orchestre le SAV, ne remplace pas le CRM ;
- **préserver la trajectoire SFIA** formulaire → workflow → projet → application ;
- **prioriser ce qui permet de valider les templates SFIA** — chaque arbitrage alimente règles, écrans, ADR candidates ;
- **documenter les décisions structurantes en ADR candidates** — sans les finaliser à ce stade ;
- **conserver la double valeur projet / plateforme** — chaque arbitrage identifie une capitalisation SFIA possible.

---

## 3. Arbitrages prioritaires issus de la revue

| ID | Arbitrage | Source | Priorité | Statut |
|----|-----------|--------|----------|--------|
| ARB-MVP-01 | Canal prioritaire de création des demandes | Q1, A-F01, framing-review §4 | Haute | À ajuster |
| ARB-MVP-02 | Portail client ou notifications uniquement | Q2, A-F02, A-S05, framing-review §4 | Haute | Validable en l'état |
| ARB-MVP-03 | Signature obligatoire ou optionnelle | Q4, A-F04, framing-review §4 | Haute | Validable en l'état |
| ARB-MVP-04 | Niveau de simulation des intégrations | Q11–Q12, A-I01 à A-I05, framing-review §4 | Haute | Validable après réinstruction |
| ARB-MVP-05 | Gestion des erreurs d'intégration | A-I07, RG-I06–RG-I09, framing-review §4 | Haute | Validable après réinstruction |
| ARB-MVP-06 | Conservation photos / signatures / logs | A-S03, A-FG01–A-FG02, framing-review §4 | Haute | Validable avec précision |
| ARB-MVP-07 | Écrans réellement prioritaires | §14.3, R-UX03, framing-review §4 | Haute | À ajuster |

---

## 4. ARB-MVP-01 — Canal prioritaire de création des demandes

### Question à trancher

Quel canal de création des demandes SAV doit être **prioritaire** pour le démonstrateur MVP : CRM simulé, email simulé ou saisie manuelle ?

### Options possibles

| Option | Description | Avantages | Limites / risques | Impact SFIA |
|--------|-------------|-----------|---------------------|-------------|
| **A — CRM simulé principal** | La demande entre principalement via le CRM simulé ; saisie manuelle en secours | Aligné sur le cas métier CF1 ; démontre la synchronisation CRM | Email simulé moins visible ; scénario email à traiter à part | Template mapping CRM → demande ; règle RG-C01 |
| **B — Email simulé principal** | L'email simulé est le canal d'entrée principal | Cas réaliste PME ; démontre parsing / création automatique | Complexité simulation email ; doublons avec CRM | Template email → demande ; règle RG-C02 |
| **C — Saisie manuelle principale** | Saisie formulaire interne comme canal principal | Simplicité delivery ; contrôle total des données | Moins crédible comme orchestrateur multi-outils | Template formulaire demande ; règle RG-C03 |
| **D — Multi-canal équivalent** | Les trois canaux ont le même poids au MVP | Couverture complète des cas §7 | Scope élargi ; risque R-M01 ; doubles saisies (RG-C04) | Matrice canaux complète ; effort delivery élevé |

### Recommandation candidate

**Recommandation candidate — à valider** (statut revue : **À ajuster**).

Retenir la **création depuis CRM simulé comme canal principal**, avec **saisie manuelle en secours**, tout en **cadrant l'email comme un canal d'intégration complet et sécurisé**. L'email n'est pas forcément le flux prioritaire du MVP, mais il doit être traité avec une **vraie logique SSI** : authentification, droits, traçabilité, pièces jointes et gestion des emails non légitimes.

### Ajustement demandé

L'email ne doit **pas** être réduit à un scénario secondaire faible. Il doit faire l'objet d'un **cadrage complet**, avec une vraie logique d'**authentification et de sécurité** conforme aux règles SSI définies pendant le cadrage.

L'email peut rester **non prioritaire dans le parcours principal MVP**, mais il doit être traité comme un **cas d'intégration sérieux**, notamment sur :

- authentification ;
- autorisation ;
- sécurité des accès ;
- traçabilité ;
- traitement des pièces jointes ;
- classification de la demande ;
- protection contre les emails non légitimes ;
- journalisation ;
- conformité RSSI.

### Impacts sur le cadrage

- **Règles de gestion impactées** : RG-C01, RG-C02, RG-C03, RG-C04, RG-C05, RG-C06, RG-I01, RG-S01, RG-S06, RG-I07
- **Parcours impactés** : Création demande SAV (§6, étape 1)
- **Écrans impactés** : Liste des demandes, Fiche demande SAV
- **ADR candidate éventuelle** : **Sécurité / authentification du canal email** ; mapping statuts via A-I06 en lien indirect
- **Capitalisation SFIA possible** : Template mapping sources → objet demande ; prompt revue canal d'entrée ; **checklist intégration email sécurisée** ; **standard « email intake security »**

### Décision

**Non tranché à ce stade.**

---

## 5. ARB-MVP-02 — Portail client ou notifications uniquement

### Question à trancher

Le client final dispose-t-il d'un **portail simple** au MVP, ou uniquement de **notifications** (email/SMS simulés) ?

### Options possibles

| Option | Description | Avantages | Limites / risques | Impact SFIA |
|--------|-------------|-----------|---------------------|-------------|
| **A — Notifications uniquement** | Le client reçoit des notifications ; pas d'accès direct à la plateforme | Scope réduit ; coûts maîtrisés (RG-FG03) ; sécurité simplifiée (A-S05) | Pas de self-service ; expérience client limitée | Template notification ; checklist RSSI allégée |
| **B — Portail client minimal** | Accès simple : statut demande, prochaine intervention | Meilleure expérience client ; démontre périmètre étendu | Effort UX et sécurité ; risque R-M07, R-S05 | Template portail client ; exigences sécurité client |
| **C — Portail + notifications** | Les deux canaux coexistent au MVP | Couverture complète | Scope maximal ; dérive vers outil complet | Double capitalisation ; effort delivery élevé |
| **D — Aucun contact client au MVP** | Pas de notification ni portail ; suivi interne uniquement | Simplicité extrême | Cas métier CF4 non démontré ; parcours incomplet | Non conforme au cadrage §4 inclus |

### Recommandation candidate

**Recommandation candidate — à valider.**

Retenir les **notifications client uniquement** au MVP, **sans portail client complet**. Prévoir le **portail comme extension ultérieure** (post-MVP ou phase 2 du démonstrateur).

### Impacts sur le cadrage

- **Règles de gestion impactées** : RG-P05, RG-I03, RG-S02, RG-FG03
- **Parcours impactés** : Notification client (§6, étape 4)
- **Écrans impactés** : Suivi des notifications (cible ultérieure ou simplifié) ; pas de portail client au noyau MVP
- **ADR candidate éventuelle** : A-S05 (exposition données client)
- **Capitalisation SFIA possible** : Template notification ; checklist choix portail vs notifications

### Décision

**Non tranché à ce stade.**

---

## 6. ARB-MVP-03 — Signature obligatoire ou optionnelle

### Question à trancher

La **signature client** est-elle **obligatoire** pour clôturer une intervention au MVP ?

### Options possibles

| Option | Description | Avantages | Limites / risques | Impact SFIA |
|--------|-------------|-----------|---------------------|-------------|
| **A — Signature obligatoire** | Clôture bloquée sans signature | Preuve forte ; parcours CR complet | Blocages terrain ; risque R-M06 ; adoption technicien | Template signature ; règle RG-R02 stricte |
| **B — Signature optionnelle** | Signature possible mais non bloquante pour clôture | Flexibilité terrain ; test du modèle sans blocage | Preuve parfois absente ; règles clôture à préciser | Modèle métier signature structuré ; règle RG-R02 souple |
| **C — Signature différée** | Clôture provisoire sans signature ; complément ultérieur | Compromis terrain / admin | Complexité statuts ; réouverture (RG-R06) | Workflow clôture en deux temps |
| **D — Pas de signature au MVP** | Compte rendu sans capture signature | Simplicité maximale | Cas métier CF7 partiel ; objet Signature client sous-utilisé | Perte démonstration preuve terrain |

### Recommandation candidate

**Recommandation candidate — à valider.**

**Signature client optionnelle** au MVP, mais **structurée dans le modèle métier** (objet Signature client, champs, statut), afin de **tester le parcours sans bloquer la clôture**.

### Impacts sur le cadrage

- **Règles de gestion impactées** : RG-R02, RG-R05, RG-R01, RG-S04
- **Parcours impactés** : Compte rendu (§6, étape 7), Clôture (§6, étape 9)
- **Écrans impactés** : Compte rendu intervention
- **ADR candidate éventuelle** : Non (A-F04 marqué « Non » en §12)
- **Capitalisation SFIA possible** : Template compte rendu avec/sans signature ; critères clôture testables

### Décision

**Non tranché à ce stade.**

---

## 7. ARB-MVP-04 — Niveau de simulation des intégrations

### Question à trancher

Quel **niveau de simulation** retenir pour CRM, calendrier, notifications et API au MVP ?

### Options possibles

| Option | Description | Avantages | Limites / risques | Impact SFIA |
|--------|-------------|-----------|---------------------|-------------|
| **A — Mocks statiques** | Réponses API figées, pas de contrat formalisé | Delivery rapide ; complexité minimale | Crédibilité limitée ; risque R-I01 | Prompt mock simple |
| **B — API simulées avec contrats simples** | Mocks avec schémas/contrats partiels ; échanges cohérents | Équilibre crédibilité / effort ; démontre orchestration | Effort cadrage contrats ; mapping statuts requis | Standard intégration simulée ; ADR simulation API |
| **C — Échanges complets simulés** | Simulation riche avec scénarios multiples | Démonstrateur très crédible | Scope élargi ; risque R-I08 ; effort architecture | ADR candidate ; checklist intégration complète |
| **D — Intégrations réelles partielles** | Connexion à un vrai CRM ou calendrier | Réalisme maximal | Hors cadrage §4 ; complexité technique prématurée | Non conforme au pilote SFIA |

### Recommandation candidate

**Recommandation candidate validable après réinstruction.**

**Recommandation candidate — à valider :**

Retenir les **vrais contrats API documentés avec implémentation simulée**.

**Justification synthétique :**

- plus **crédible** que des mocks statiques ;
- permet de **tester sérieusement la SFIA** ;
- **prépare architecture, tests, documentation et ADR** sans dépendre de systèmes externes réels ;
- permet de **cadrer les erreurs de manière cohérente** ;
- reste **compatible avec un MVP démonstrateur**.

**Référence interne :** voir `integration-error-arbitration-review.md`, sections §3 à §5.

### Réinstruction effectuée (synthèse)

La **plus-value des vrais contrats API** a été analysée comparativement :

| Option | Valeur projet | Valeur SFIA | Complexité | Risque | Position à instruire |
|--------|---------------|-------------|------------|--------|----------------------|
| **Mocks statiques** | Démonstration rapide du cycle SAV | Faible capitalisation contrats | Faible | Crédibilité limitée (R-I01) | Trop faible pour Interv360 |
| **API simulées avec contrats simples** | Équilibre crédibilité / effort | Standard intégration simulée réutilisable | Moyenne | Effort cadrage contrats | Bon compromis — précisé par option C |
| **Vrais contrats API documentés, implémentation simulée** | Meilleure préparation architecture et tests | Forte capitalisation pour génération future | Moyenne à élevée | Effort documentation contrats | **Recommandation candidate** |
| **Intégrations réelles partielles** | Réalisme maximal | Peu réutilisable comme template pilote | Élevée | Dérive scope ; hors cadrage §4 | À exclure — phase ultérieure |

### Impacts sur le cadrage

- **Règles de gestion impactées** : RG-I01, RG-I02, RG-I03, RG-I05, RG-R08
- **Parcours impactés** : Planification calendrier, Notification client, Synchronisation CRM (§6, étapes 3, 4, 8)
- **Écrans impactés** : Planning, Fiche demande SAV, Suivi des erreurs d'intégration
- **ADR candidate éventuelle** : **Niveau de contrat API Interv360** ; A-I06 (mapping statuts) ; A-I01 à A-I04
- **Capitalisation SFIA possible** : **Standard vrais contrats API documentés avec implémentation simulée** ; **Template API Contract Framing** ; **Prompt de génération de contrats API** ; template cartographie intégrations ; checklist intégration

### Décision

**Non tranché à ce stade.**

---

## 8. ARB-MVP-05 — Gestion des erreurs d'intégration

### Question à trancher

Quel **niveau de gestion des erreurs d'intégration** inclure au MVP : alerte seule, retry automatique, reprise manuelle, ou combinaison ?

### Options possibles

| Option | Description | Avantages | Limites / risques | Impact SFIA |
|--------|-------------|-----------|---------------------|-------------|
| **A — Alerte uniquement** | Erreur loguée ; pas d'action utilisateur guidée | Simplicité | Anomalies peu visibles ; risque R-UX06 | Standard minimal |
| **B — Écran anomalies + reprise manuelle simulée** | Cas d'erreur visible ; action corrective manuelle | Démontre CF9 ; critère utilisabilité §14.4 | Pas de retry auto ; scénario partiel | Standard cas d'erreur ; template écran anomalies |
| **C — Retry automatique simple** | Nouvelle tentative après échec | Robustesse perçue | Complexité ; risque R-I04 si mal cadré | ADR retry ; règle RG-I08 |
| **D — Retry + reprise manuelle + escalade** | Gestion complète des erreurs | Couverture maximale | Scope large ; effort delivery | ADR candidate complète |

### Recommandation candidate

**Recommandation candidate validable après réinstruction.**

**Recommandation candidate — à valider :**

Retenir le **niveau 3 : erreur visible dans un écran anomalies, avec reprise manuelle simulée**. Le **retry automatique est exclu du MVP**, mais peut être **préparé comme extension ou ADR future**.

**Justification synthétique :**

- démontre un **parcours non happy path** ;
- apporte une **vraie valeur manager / dirigeant** ;
- reste **maîtrisé en complexité** ;
- **nourrit les tests QA** et critères d'acceptation ;
- permet de capitaliser un **standard SFIA de gestion d'erreur**.

**Référence interne :** voir `integration-error-arbitration-review.md`, sections §6 à §8.

### Réinstruction effectuée (synthèse)

Le **périmètre de gestion d'erreur** a été comparé :

| Niveau | Description | Valeur métier | Valeur démonstrateur | Complexité | À retenir ? |
|--------|-------------|---------------|----------------------|------------|-------------|
| **Niveau 1 — Erreur loguée** | Message d'erreur en log sans visibilité utilisateur | Faible | Très faible | Faible | Insuffisant |
| **Niveau 2 — Écran anomalies** | Vue dédiée listant les erreurs | Moyenne | Moyenne | Moyenne | Candidat partiel |
| **Niveau 3 — Anomalies + reprise manuelle** | Écran anomalies + action corrective manuelle | Forte | Forte | Moyenne | **Recommandation candidate** |
| **Niveau 4 — Retry automatique** | Nouvelle tentative après échec | Moyenne | Moyenne | Moyenne à élevée | Hors MVP — extension / ADR future |
| **Niveau 5 — Retry + reprise + escalade** | Gestion complète | Forte | Forte | Élevée | Trop complexe pour MVP |
| **Niveau 6 — Supervision avancée** | Dashboard erreurs, alertes, SLA | Très forte | Forte mais hors scope | Très élevée | À exclure du MVP |

L'objectif reste de **démontrer un parcours robuste** sans basculer dans une **supervision ou orchestration complexe**.

### Impacts sur le cadrage

- **Règles de gestion impactées** : RG-I06, RG-I08, RG-I09, RG-I07
- **Parcours impactés** : Synchronisation CRM (§6, étape 8) ; cas métier erreur d'intégration (§7)
- **Écrans impactés** : Suivi des erreurs d'intégration (prioritaire)
- **ADR candidate éventuelle** : **Gestion des erreurs d'intégration** ; **Journalisation et traçabilité des flux** (A-I07, A-I08)
- **Capitalisation SFIA possible** : **Checklist API Error Handling** ; **Template Error Matrix** ; **Critères QA d'intégration** ; standard cas d'erreur d'intégration

### Décision

**Non tranché à ce stade.**

---

## 9. ARB-MVP-06 — Conservation photos / signatures / logs

### Question à trancher

Quelles **règles de conservation** appliquer au MVP pour photos terrain, signatures client et logs d'intégration ?

### Options possibles

| Option | Description | Avantages | Limites / risques | Impact SFIA |
|--------|-------------|-----------|---------------------|-------------|
| **A — Conservation illimitée (prototype)** | Tout conservé sans limite | Simplicité implémentation | Risque R-FG01, R-FG02, R-S03 ; coûts GreenOps | Non conforme principes §3 |
| **B — Conservation limitée et fictive documentée** | Durées/volumes fictifs but documentés (RSSI/GreenOps) | Teste gouvernance sans implémentation lourde | Règles à formaliser ; pas de purge réelle au MVP | Checklist RSSI/GreenOps ; règles RG-S03–RG-S05 |
| **C — Conservation stricte implémentée** | Purge automatique selon règles | Conformité réelle | Effort technique ; hors scope démonstrateur | ADR conservation ; implémentation lourde |
| **D — Pas de conservation explicite au MVP** | Données éphémères ou non persistées | Simplicité | Objets métier §9.3 sous-exploités ; traçabilité faible | Perte valeur démonstration preuves |

### Recommandation candidate

**Décision candidate validable avec précision** (statut revue : **Validable avec précision**).

**Conservation limitée fictive documentée** sous forme d'**hypothèses de cadrage RSSI / GreenOps**. **Aucune implémentation lourde** de purge ou d'archivage au MVP.

### Impacts sur le cadrage

- **Règles de gestion impactées** : RG-S03, RG-S04, RG-S05, RG-FG01, RG-FG02, RG-FG04, RG-T05, RG-R03
- **Parcours impactés** : Intervention terrain, Compte rendu (§6, étapes 5–7)
- **Écrans impactés** : Compte rendu intervention, Fiche intervention technicien
- **ADR candidate éventuelle** : A-S03 (conservation données sensibles), A-FG01, A-FG02, A-FG07
- **Capitalisation SFIA possible** : Checklist RSSI conservation ; checklist GreenOps stockage ; prompt revue FinOps

### Décision

**Non tranché à ce stade.**

---

## 10. ARB-MVP-07 — Écrans réellement prioritaires

### Question à trancher

Quels **écrans candidats** (§14.3) constituent le **noyau MVP** et lesquels sont reportés ?

### Options possibles

| Option | Description | Avantages | Limites / risques | Impact SFIA |
|--------|-------------|-----------|---------------------|-------------|
| **A — Noyau 7 écrans (recommandé)** | Tableau de bord SAV, liste demandes, fiche demande, planning, fiche technicien, CR, erreurs intégration | Couvre parcours §6 ; risque R-UX03 maîtrisé | Notifications et pilotage dirigeant simplifiés ou absents | Template priorisation écrans MVP |
| **B — Tous les 9 écrans** | Intégrer suivi notifications et vue pilotage dirigeant avancée | Couverture UX complète | Scope élargi ; effort delivery ; risque R-UX03 | Matrice écrans complète |
| **C — Noyau minimal 5 écrans** | Liste, fiche demande, planning, fiche technicien, CR | Delivery minimal | Tableau de bord et erreurs intégration absents ; CF9 moins visible | Priorisation agressive |
| **D — Noyau + portail client** | Option A + portail client | Expérience client complète | Conflit avec ARB-MVP-02 ; scope élargi | Non aligné recommandation portail |

### Recommandation candidate

**Recommandation candidate — à valider** (statut revue : **À ajuster**).

**Prioriser un noyau MVP étendu de 8 écrans :**

- **tableau de bord SAV complet** ;
- liste des demandes ;
- fiche demande SAV ;
- planning ;
- fiche intervention technicien ;
- compte rendu intervention ;
- suivi des erreurs d'intégration ;
- **vue pilotage dirigeant avancée**.

**Mettre en cible ultérieure :**

- suivi détaillé des notifications ;
- portail client.

### Ajustement demandé

Le **noyau de 7 écrans** initial est **conservé comme base**, mais la **vue pilotage dirigeant avancée** doit être **intégrée au MVP**. Le **tableau de bord SAV** doit être **plus complet que prévu initialement**, afin de démontrer une **vraie valeur de pilotage**.

### Impacts sur le cadrage

- **Règles de gestion impactées** : Transversal — toutes les règles liées aux écrans prioritaires ; RG-I09 (visibilité anomalies) ; **RG-C08, RG-FG07** (KPI)
- **Parcours impactés** : Ensemble du parcours §6 ; parcours utilisateurs §14.2 ; **parcours dirigeant / pilotage**
- **Écrans impactés** : Priorisation explicite §14.3 (**8 prioritaires**, 2 ultérieurs) ; **tableau de bord SAV enrichi**
- **ADR candidate éventuelle** : Non directe ; **besoin de clarifier les KPI minimum (Q5, R-M08)**
- **Complexité UX accrue** — noyau étendu de 7 à 8 écrans ; tableau de bord plus riche
- **Valeur dirigeant renforcée** — vue pilotage dirigeant avancée incluse au MVP
- **Lien Q5 et R-M08** — indicateurs minimum dirigeant à préciser avant brief UX/UI
- **Brief UX/UI** — nécessité de produire un **brief UX/UI solide avant Figma** (§14.6)
- **Règle Figma** : la sélection des écrans prioritaires **ne déclenche pas directement Figma** ; elle déclenche la **production d'un brief UX/UI** ; Figma intervient uniquement après validation des écrans prioritaires et des critères UX (§14.6)
- **Capitalisation SFIA possible** : Template priorisation écrans MVP ; checklist UX Review par écran ; base composants UI candidats ; **standard de déclenchement Figma** ; **template brief UX/UI** ; **checklist d'entrée Figma**

### Décision

**Non tranché à ce stade.**

---

## 11. Synthèse des recommandations candidates

| Arbitrage | Recommandation candidate | Décision finale |
|-----------|-------------------------|-----------------|
| ARB-MVP-01 — Canal prioritaire | CRM principal + saisie manuelle secours + email cadré comme canal sécurisé complet | Non tranché |
| ARB-MVP-02 — Portail / notifications | Notifications uniquement ; portail en extension ultérieure | Non tranché |
| ARB-MVP-03 — Signature | Optionnelle au MVP ; modèle métier structuré | Non tranché |
| ARB-MVP-04 — Simulation intégrations | Vrais contrats API documentés avec implémentation simulée | Non tranché |
| ARB-MVP-05 — Erreurs intégration | Erreurs visibles dans écran anomalies + reprise manuelle simulée ; retry automatique hors MVP | Non tranché |
| ARB-MVP-06 — Conservation | Conservation limitée fictive documentée sous forme d'hypothèses RSSI / GreenOps | Non tranché |
| ARB-MVP-07 — Écrans prioritaires | Noyau MVP étendu avec tableau de bord SAV complet et vue pilotage dirigeant avancée ; notifications détaillées et portail client en cible ultérieure | Non tranché |

---

## 12. Impacts SFIA à capitaliser

| Élément | Capitalisation SFIA | Type |
|---------|---------------------|------|
| Méthode d'arbitrage MVP | Processus de première passe d'arbitrages depuis framing-review | Template |
| Matrice options / avantages / risques / impact SFIA | Grille standard par arbitrage (§4–§10) | Template |
| Critères de priorisation MVP | Principes §2 réutilisables pour tout projet pilote | Standard |
| Lien arbitrage → règles de gestion | Traçabilité ARB-MVP-* → RG-* (impacts par arbitrage) | Standard |
| Lien arbitrage → ADR candidate | Traçabilité ARB-MVP-* → A-* / ADR (§5 framing-review) | Standard |
| Lien arbitrage → écrans prioritaires | Traçabilité ARB-MVP-07 → écrans §14.3 | Checklist |
| Prompt de revue MVP | Revue cohérence post-arbitrage sans figer MVP | Prompt |
| Template MVP Arbitration | Structure document mvp-arbitrations.md réutilisable | Template |
| Règle Figma post-cadrage UX/UI | Déclenchement Figma après brief UX/UI validé (§14.6) | Standard |
| Brief UX/UI avant maquette | Document préalable obligatoire avant Figma | Template |
| Checklist entrée Figma | Critères de validation avant ouverture Figma | Checklist |

---

## 13. Points à réinstruire avant validation finale

| Sujet | Pourquoi réinstruire ? | Sortie attendue | Rôles à mobiliser |
|-------|------------------------|-----------------|-------------------|
| **Email sécurisé** | L'email ne peut pas rester un scénario secondaire faible ; cadrage SSI complet requis (ARB-MVP-01) | Checklist intégration email sécurisée ; ADR candidate authentification canal email ; règles RG-C02, RG-S01, RG-S06 affinées | RSSI / Architecte / Business Analyst |
| **Vrais contrats API vs API simulées** | **Réinstruit** — recommandation candidate validable (ARB-MVP-04) | Option C confirmée comme candidate ; ADR niveau de contrat API ; voir `integration-error-arbitration-review.md` | Architecte / Chef de projet / Business Analyst |
| **Périmètre de gestion d'erreur** | **Réinstruit** — recommandation candidate validable (ARB-MVP-05) | Niveau 3 confirmé comme candidate ; ADR gestion erreurs et journalisation ; voir `integration-error-arbitration-review.md` | Architecte / QA / Concepteur UX |
| **KPI tableau de bord SAV / vue dirigeant** | Noyau écrans étendu ; tableau de bord plus complet ; lien Q5 et R-M08 (ARB-MVP-07) | Liste KPI minimum dirigeant ; hypothèses affichage tableau de bord SAV | Business Analyst / Product Owner / Dirigeant (fictif) |
| **Impacts UX du noyau d'écrans étendu** | Passage de 7 à 8 écrans ; complexité UX accrue ; brief UX/UI requis avant Figma (ARB-MVP-07) | Brief UX/UI solide ; priorisation composants UI ; checklist entrée Figma | Concepteur fonctionnel / Product Owner |

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA. Aucune décision finale ni périmètre MVP définitif à ce stade.*

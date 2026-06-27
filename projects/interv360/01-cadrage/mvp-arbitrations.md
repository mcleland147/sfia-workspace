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
| ARB-MVP-01 | Canal prioritaire de création des demandes | Q1, A-F01, framing-review §4 | Haute | À instruire |
| ARB-MVP-02 | Portail client ou notifications uniquement | Q2, A-F02, A-S05, framing-review §4 | Haute | À instruire |
| ARB-MVP-03 | Signature obligatoire ou optionnelle | Q4, A-F04, framing-review §4 | Haute | À instruire |
| ARB-MVP-04 | Niveau de simulation des intégrations | Q11–Q12, A-I01 à A-I05, framing-review §4 | Haute | À instruire |
| ARB-MVP-05 | Gestion des erreurs d'intégration | A-I07, RG-I06–RG-I09, framing-review §4 | Haute | À instruire |
| ARB-MVP-06 | Conservation photos / signatures / logs | A-S03, A-FG01–A-FG02, framing-review §4 | Haute | À instruire |
| ARB-MVP-07 | Écrans réellement prioritaires | §14.3, R-UX03, framing-review §4 | Haute | À instruire |

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

**Recommandation candidate — à valider.**

Retenir la **création depuis CRM simulé comme canal principal**, avec **saisie manuelle en secours**. L'**email simulé** peut rester en **cas secondaire** ou démonstrateur secondaire (scénario optionnel, non bloquant pour le parcours principal).

### Impacts sur le cadrage

- **Règles de gestion impactées** : RG-C01, RG-C02, RG-C03, RG-C04, RG-C05, RG-C06, RG-I01
- **Parcours impactés** : Création demande SAV (§6, étape 1)
- **Écrans impactés** : Liste des demandes, Fiche demande SAV
- **ADR candidate éventuelle** : Non (A-F01 marqué « Non » en §12) ; mapping statuts via A-I06 en lien indirect
- **Capitalisation SFIA possible** : Template mapping sources → objet demande ; prompt revue canal d'entrée

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

**Recommandation candidate — à valider.**

Utiliser des **mocks / API simulées avec contrats simples** pour CRM, calendrier et notifications. **Éviter les intégrations réelles** au MVP.

### Impacts sur le cadrage

- **Règles de gestion impactées** : RG-I01, RG-I02, RG-I03, RG-I05, RG-R08
- **Parcours impactés** : Planification calendrier, Notification client, Synchronisation CRM (§6, étapes 3, 4, 8)
- **Écrans impactés** : Planning, Fiche demande SAV, Suivi des erreurs d'intégration
- **ADR candidate éventuelle** : A-I05 (niveau simulation API), A-I06 (mapping statuts), A-I01 à A-I04
- **Capitalisation SFIA possible** : Standard simulation API ; template cartographie intégrations ; checklist intégration

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

**Recommandation candidate — à valider.**

Inclure au MVP **un cas d'erreur visible dans un écran d'anomalies**, avec **reprise manuelle simulée**. **Ne pas implémenter de retry complexe** au MVP.

### Impacts sur le cadrage

- **Règles de gestion impactées** : RG-I06, RG-I08, RG-I09, RG-I07
- **Parcours impactés** : Synchronisation CRM (§6, étape 8) ; cas métier erreur d'intégration (§7)
- **Écrans impactés** : Suivi des erreurs d'intégration (prioritaire)
- **ADR candidate éventuelle** : A-I07 (gestion erreurs), A-I08 (journalisation)
- **Capitalisation SFIA possible** : Standard cas d'erreur d'intégration ; checklist revue erreurs API

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

**Recommandation candidate — à valider.**

Définir une **conservation limitée et fictive** pour photos, signatures et logs, avec **règles RSSI / GreenOps documentées**, **sans implémentation lourde** de purge ou archivage au MVP.

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

**Recommandation candidate — à valider.**

**Prioriser un noyau de 7 écrans :**

- tableau de bord SAV ;
- liste des demandes ;
- fiche demande SAV ;
- planning ;
- fiche intervention technicien ;
- compte rendu intervention ;
- suivi des erreurs d'intégration.

**Mettre en cible ultérieure :**

- suivi détaillé des notifications ;
- vue pilotage dirigeant avancée ;
- portail client.

### Impacts sur le cadrage

- **Règles de gestion impactées** : Transversal — toutes les règles liées aux écrans prioritaires ; RG-I09 (visibilité anomalies)
- **Parcours impactés** : Ensemble du parcours §6 ; parcours utilisateurs §14.2
- **Écrans impactés** : Priorisation explicite §14.3 (7 prioritaires, 3 ultérieurs)
- **ADR candidate éventuelle** : Non directe ; lien avec indicateurs dirigeant (Q5) en vue ultérieure
- **Règle Figma** : la sélection des écrans prioritaires **ne déclenche pas directement Figma** ; elle déclenche la **production d'un brief UX/UI** ; Figma intervient uniquement après validation des écrans prioritaires et des critères UX (§14.6)
- **Capitalisation SFIA possible** : Template priorisation écrans MVP ; checklist UX Review par écran ; base composants UI candidats ; **standard de déclenchement Figma** ; **template brief UX/UI** ; **checklist d'entrée Figma**

### Décision

**Non tranché à ce stade.**

---

## 11. Synthèse des recommandations candidates

| Arbitrage | Recommandation candidate | Décision finale |
|-----------|-------------------------|-----------------|
| ARB-MVP-01 — Canal prioritaire | CRM simulé principal ; saisie manuelle secours ; email secondaire | Non tranché |
| ARB-MVP-02 — Portail / notifications | Notifications uniquement ; portail en extension ultérieure | Non tranché |
| ARB-MVP-03 — Signature | Optionnelle au MVP ; modèle métier structuré | Non tranché |
| ARB-MVP-04 — Simulation intégrations | Mocks / API simulées avec contrats simples ; pas d'intégrations réelles | Non tranché |
| ARB-MVP-05 — Erreurs intégration | Écran anomalies + reprise manuelle simulée ; pas de retry complexe | Non tranché |
| ARB-MVP-06 — Conservation | Conservation limitée fictive documentée ; règles RSSI/GreenOps sans implémentation lourde | Non tranché |
| ARB-MVP-07 — Écrans prioritaires | Noyau 7 écrans ; notifications détaillées, pilotage dirigeant avancé et portail en cible ultérieure | Non tranché |

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

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA. Aucune décision finale ni périmètre MVP définitif à ce stade.*

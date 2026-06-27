# Interv360 — MVP Arbitration Validation

**Projet** : PRJ-INTERV360  
**Phase** : 01-cadrage  
**Statut** : Validated  
**Source** : `mvp-arbitrations.md` + documents de clarification  
**Objet** : validation finale des arbitrages MVP

---

## 1. Objectif du document

Ce document **valide formellement les 7 arbitrages MVP** Interv360 issus du cadrage, après clarification des points ouverts (email sécurisé, contrats API, gestion d'erreurs, dashboard/KPI/UX).

Il consolide les **décisions validées au niveau cadrage/arbitrage**, sans produire :

- d'architecture technique ;
- de backlog ou user stories ;
- de spécifications fonctionnelles détaillées ;
- de maquettes ou travail Figma ;
- d'ADR finalisées ;
- de code applicatif.

La phase suivante peut préparer la **consolidation du cadrage**, les **règles détaillées**, les **ADR candidates** et le **brief UX/UI**.

---

## 2. Synthèse des décisions validées

| ID | Arbitrage | Décision validée | Justification courte |
|----|-----------|------------------|----------------------|
| **ARB-MVP-01** | Canal prioritaire de création des demandes | **CRM simulé** comme canal principal du MVP ; **saisie manuelle** en secours ; **email non principal** mais cadré comme **canal d'intégration sécurisé complet** | Parcours démo centré CRM ; email sérieux SSI sans élargir le flux principal |
| **ARB-MVP-02** | Portail client ou notifications | **Notifications client uniquement** au MVP ; **portail client** en évolution ultérieure | Scope maîtrisé ; expérience client via notifications |
| **ARB-MVP-03** | Signature obligatoire ou optionnelle | **Signature client optionnelle** au MVP, **non bloquante**, structurée dans le modèle métier et le compte rendu | Flexibilité terrain ; objet Signature client testable |
| **ARB-MVP-04** | Niveau de simulation des intégrations | **Vrais contrats API documentés** avec **implémentation simulée** | Crédibilité orchestration ; capitalisation SFIA ; préparation architecture/tests |
| **ARB-MVP-05** | Gestion des erreurs d'intégration | **Erreurs visibles** dans l'écran anomalies avec **reprise manuelle simulée** ; **retry automatique hors MVP** | Parcours non happy path ; complexité maîtrisée |
| **ARB-MVP-06** | Conservation photos / signatures / logs | **Conservation limitée fictive documentée** (hypothèses RSSI / GreenOps) ; **pas d'implémentation lourde** purge/archivage au MVP | Gouvernance testée sans surcoût delivery |
| **ARB-MVP-07** | Écrans réellement prioritaires | **Noyau MVP 8 écrans** (voir §3) ; suivi détaillé notifications et portail client en **évolution ultérieure** | Couverture parcours + pilotage opérationnel et dirigeant |

---

## 3. Périmètre MVP validé à ce stade

Le **périmètre MVP est validé au niveau cadrage/arbitrage**. Il ne constitue **pas encore** :

- une architecture technique ;
- un backlog ;
- des user stories ;
- des spécifications fonctionnelles détaillées ;
- des maquettes Figma.

| Domaine | Inclus MVP | Hors MVP / évolution ultérieure |
|---------|------------|----------------------------------|
| **Canaux de création** | CRM simulé (principal) ; saisie manuelle (secours) ; email sécurisé cadré (non principal) | Email comme flux principal ; multi-canal équivalent |
| **Notifications** | Notifications client simulées ; indicateur échecs sur dashboard | Suivi détaillé des notifications (écran dédié) |
| **Signature** | Signature optionnelle, structurée dans CR et modèle métier | Signature obligatoire bloquante |
| **Intégrations** | Contrats API documentés, implémentation simulée (CRM, calendrier, notifications, facturation, email) | Intégrations réelles partielles |
| **Erreurs** | Écran anomalies ; reprise manuelle simulée ; cas d'erreur documentés | Retry automatique ; supervision avancée |
| **Conservation** | Hypothèses RSSI/GreenOps documentées (photos, signatures, logs) | Purge/archivage implémentés |
| **Écrans** | Noyau 8 écrans (§2 ARB-MVP-07) | Portail client ; suivi notifications détaillé |
| **Dashboard / KPI** | Tableau de bord SAV complet ; vue dirigeant avancée ; socle KPI MVP | BI avancée ; prédictif IA ; personnalisation dashboard |
| **Portail client** | — | Portail client (post-MVP) |
| **Figma / maquettes** | Brief UX/UI à produire | Figma ; wireframes ; maquettes (interdit avant brief validé) |

**Noyau MVP — 8 écrans validés :**

1. tableau de bord SAV complet ;
2. liste des demandes ;
3. fiche demande SAV ;
4. planning ;
5. fiche intervention technicien ;
6. compte rendu intervention ;
7. suivi des erreurs d'intégration ;
8. vue pilotage dirigeant avancée.

---

## 4. Impacts sur les règles de gestion

| Décision | Règles impactées | Action future |
|----------|------------------|---------------|
| **ARB-MVP-01** — Canaux création | RG-C01, RG-C02, RG-C03, RG-C04, RG-C05, RG-C06, RG-I01, RG-S01, RG-S06, RG-I07 | Détailler règles email sécurisé ; anti-doublon cross-canal |
| **ARB-MVP-02** — Notifications | RG-P05, RG-I03, RG-S02, RG-FG03 | Template notification ; hypothèses FinOps fréquence |
| **ARB-MVP-03** — Signature | RG-R01, RG-R02, RG-R05, RG-S04 | Template compte rendu ; critères clôture testables |
| **ARB-MVP-04** — Contrats API | RG-I01, RG-I02, RG-I03, RG-I04, RG-I05, RG-R08 | Standard mapping statuts ; contrats par domaine |
| **ARB-MVP-05** — Erreurs intégration | RG-I06, RG-I07, RG-I08, RG-I09 | Standard cas d'erreur ; matrice Error Matrix |
| **ARB-MVP-06** — Conservation | RG-S03, RG-S04, RG-S05, RG-FG01, RG-FG02, RG-FG04, RG-T05, RG-R03 | Hypothèses conservation documentées ; checklist RSSI/GreenOps |
| **ARB-MVP-07** — Écrans / KPI | Q5, R-M08, RG-C08, RG-FG07, RG-I09 ; critères §14.4 | Brief UX/UI ; KPI dashboard §4–§5 dashboard-kpi-ux-review |

---

## 5. ADR candidates confirmées

| ADR candidate | Issue de | Statut |
|---------------|----------|--------|
| **Niveau de contrat API Interv360** | ARB-MVP-04, integration-error-arbitration-review | Candidate — à traiter en phase architecture |
| **Gestion des erreurs d'intégration** | ARB-MVP-05, integration-error-arbitration-review | Candidate — à traiter en phase architecture |
| **Authentification et sécurité du canal email** | ARB-MVP-01, secure-email-intake-review | Candidate — à traiter en phase architecture |
| **Journalisation et traçabilité des flux** | ARB-MVP-01, ARB-MVP-05 | Candidate — à traiter en phase architecture |
| **Conservation des données sensibles** | ARB-MVP-06 | Candidate — à traiter en phase architecture |
| **Géolocalisation légère** | business-framing §10 RG-T04, A-FG06 — si retenue plus tard | Candidate — à traiter en phase architecture |
| **Workflow Notion / Cursor** | framing-review, business-framing §12 A-SF06 | Candidate — à traiter en phase architecture |
| **Génération automatique des livrables SFIA** | business-framing §12 A-SF05 | Candidate — à traiter en phase architecture |

---

## 6. Impacts UX/UI

- Le **noyau MVP** passe à **8 écrans** validés.
- Le **tableau de bord SAV complet** et la **vue pilotage dirigeant avancée** sont **inclus** au MVP (orientations opérationnelle vs consolidée).
- Le **suivi détaillé des notifications** et le **portail client** sont **reportés**.
- Un **brief UX/UI est obligatoire** avant toute maquette (règle §14.6 business-framing).
- **Figma ne doit pas être déclenché** à cette étape de validation cadrage.

---

## 7. Capitalisation SFIA validée

| Élément | Capitalisation SFIA | Type |
|---------|---------------------|------|
| Template MVP Arbitration | Structure mvp-arbitrations.md | Template |
| Template MVP Arbitration Validation | Structure mvp-arbitration-validation.md | Template |
| Standard vrais contrats API documentés avec implémentation simulée | Référence intégration simulée | Standard |
| Standard canal email sécurisé | Intake email SSI | Standard |
| Template Dashboard KPI Matrix | KPI tableau de bord SAV | Template |
| Template Executive View Framing | KPI vue dirigeant | Template |
| Checklist Dashboard MVP | Limites et garde-fous dashboard | Checklist |
| Checklist SSI email | Exigences canal email | Checklist |
| Checklist API Error Handling | Gestion erreurs intégration | Checklist |
| Template Error Matrix | Cas d'erreur par flux | Template |
| Checklist entrée Figma | Critères avant maquette | Checklist |
| Prompt revue MVP | Revue post-arbitrage | Prompt |
| Prompt revue SSI email | Revue sécurité email | Prompt |
| Prompt génération KPI dashboard | Génération socle KPI | Prompt |

---

## 8. Critères de passage vers la suite

| Critère | Statut |
|---------|--------|
| Arbitrages MVP validés | **Validé** |
| Périmètre cadrage MVP stabilisé | **Validé** |
| Règles à détailler identifiées | **Validé** |
| ADR candidates confirmées | **Validé** |
| UX/UI à préparer via brief | **Validé** — brief à produire |
| Architecture non encore produite | **Conforme** |
| Backlog non encore produit | **Conforme** |
| Figma non déclenché | **Conforme** |

---

## 9. Conclusion

Les **arbitrages MVP Interv360 sont validés au niveau cadrage**.

La phase suivante peut préparer :

- la **consolidation du cadrage** (règles de gestion détaillées, alignement business-framing) ;
- les **ADR candidates** en phase architecture ;
- le **brief UX/UI** avant toute maquette ;
- les **validations métier/fonctionnelles/UX** fictives prévues en §13 business-framing ;

… **sans passer directement au développement**, à l'architecture technique détaillée ou au backlog.

---

*Document produit dans le cadre du projet Interv360 — gouvernance SFIA.*

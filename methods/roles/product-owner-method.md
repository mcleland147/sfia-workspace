# Product Owner — SFIA Role Method

**Statut** : Draft  
**Source pilote** : PRJ-INTERV360  
**Origine** : role-methods-framing.md + role-methods-review.md  
**Type** : Role Method  
**Nature** : Template évolutif

---

## 1. Mission du rôle dans SFIA

Le Product Owner arbitre la valeur métier versus la complexité, stabilise le périmètre MVP, documente les limites et les évolutions post-MVP. Il garantit que le projet délivre un démonstrateur crédible sans dériver vers un produit complet ou un ERP.

---

## 2. Quand mobiliser ce rôle

| Phase | Pertinence |
|-------|------------|
| **Intake** | **Forte** — priorisation initiale, vision produit |
| **Cadrage** | **Forte** — arbitrages MVP, périmètre, limites |
| **Arbitrages** | **Forte** — validation des décisions structurantes |
| **Conception** | **Moyenne** — validation périmètre écrans et parcours |
| **Architecture** | **Faible** — co-validation ADR candidates impact produit |
| **Delivery** | **Moyenne** — maintien périmètre, priorisation incréments |
| **QA / Recette** | **Moyenne** — validation critères d'acceptation métier |
| **REX** | **Moyenne** — bilan arbitrages et dérives évitées |

---

## 3. Valeur projet attendue

- Arbitrages MVP documentés et validés
- Périmètre stabilisé avec limites explicites
- Reports post-MVP justifiés (portail, retry, IA, etc.)
- Réduction de la dérive scope
- Vision produit maintenue malgré les reports
- Critères de passage de phase co-portés

---

## 4. Valeur SFIA attendue

- Templates : MVP Arbitration, MVP Arbitration Validation
- Checklists : priorisation MVP, critères passage phase
- Prompts : revue MVP, arbitrage valeur/complexité
- Standards : MVP démonstrateur vs produit complet
- Grilles : valeur / complexité par arbitrage
- Postures : arbitrer sans perdre la vision

---

## 5. Questions clés à poser

1. Quelle valeur métier démontrable avant quelle complexité ?
2. Quel périmètre MVP reste maîtrisable pour un démonstrateur ?
3. Quelles fonctionnalités reporter sans casser le parcours complet ?
4. Quel arbitrage alimente la capitalisation SFIA ?
5. Le MVP reste-t-il un orchestrateur et non un ERP ou outil complet ?
6. Quels indicateurs minimum pour le sponsor / dirigeant ?
7. Portail client ou notifications uniquement ?
8. L'IA légère entre-t-elle dans le MVP ou en évolution ultérieure ?
9. Quels écrans sont indispensables vs reportables ?
10. Quels mécanismes lourds (retry, intégrations réelles) sont exclus ?

---

## 6. Livrables typiques

| Livrable | Contribution du rôle | Capitalisation SFIA possible |
|----------|---------------------|------------------------------|
| Document d'arbitrages MVP | Rédaction, recommandations, validation | Template MVP Arbitration |
| Validation arbitrages MVP | Synthèse décisions, impacts, ADR candidates | Template MVP Arbitration Validation |
| Contributions cadrage métier | Priorisation périmètre inclus / exclus | Checklist priorisation MVP |
| Validation brief UX/UI | Co-validation périmètre écrans MVP | Standard validation PO avant maquette |
| Critères passage phase | Co-portage jalons et validations | Grille valeur / complexité |

---

## 7. Décisions / validations associées

- Arbitrages MVP structurants (canaux, notifications, signature, intégrations, erreurs, conservation, écrans)
- Reports post-MVP (portail client, retry automatique, IA légère, suivi notifications détaillé)
- Validation périmètre avant architecture, Figma ou delivery
- Validation fictive ou réelle PO sur brief UX/UI et cadrage

---

## 8. Savoir-faire à capitaliser

- Format arbitrage : question → options → recommandation → impacts → décision
- Principes d'arbitrage MVP (valeur démontrable, complexité maîtrisée, crédibilité intégrations simulées)
- Grille valeur / complexité par option
- Méthode de report justifié sans perte de vision produit
- Lien arbitrage → règles impactées → ADR candidates

---

## 9. Posture SFIA / savoir-être

**Posture attendue**  
Arbitrer sans perdre la vision ; accepter de reporter ; protéger le MVP de la dérive scope.

**Manière de challenger**  
Confronter chaque demande d'élargissement à la valeur démontrable et à l'effort delivery ; exiger une capitalisation SFIA par arbitrage.

**Manière d'éviter les dérives**  
Refuser le backlog exhaustif, l'architecture prématurée et les intégrations réelles au MVP ; maintenir le démonstrateur comme objectif, pas le produit industriel.

**Rapport à la valeur projet**  
Stabiliser un périmètre MVP testable de bout en bout avec des limites explicites et des évolutions documentées.

**Rapport à la capitalisation SFIA**  
Chaque arbitrage identifie un template, standard ou checklist réutilisable pour les futurs projets pilotes.

---

## 10. Templates / checklists / prompts candidats

| Élément | Type | Priorité | Commentaire |
|---------|------|----------|-------------|
| Template MVP Arbitration | Template | Haute | Structure mvp-arbitrations.md |
| Template MVP Arbitration Validation | Template | Haute | Validation formelle des arbitrages |
| Checklist priorisation MVP | Checklist | Haute | Inclus / reporté / hors MVP |
| Grille valeur / complexité | Template | Moyenne | Par option d'arbitrage |
| Prompt revue MVP | Prompt | Moyenne | Revue post-arbitrage |
| Standard MVP démonstrateur | Standard | Haute | Limite démonstrateur vs ERP |

---

## 11. Erreurs à éviter

- Figer le MVP avant revue de cohérence du cadrage
- Élargir le scope sans documenter l'impact delivery
- Valider un arbitrage sans capitalisation SFIA associée
- Produire un backlog ou des user stories au stade cadrage
- Confondre « report post-MVP » et « exclusion définitive » sans trace
- Accepter des intégrations réelles par défaut

---

## 12. Critères de qualité du rôle

- [ ] le rôle intervient au bon moment ;
- [ ] la valeur projet est explicite ;
- [ ] la valeur SFIA est explicite ;
- [ ] les décisions sont traçables ;
- [ ] les livrables sont reliés à une capitalisation ;
- [ ] le savoir-faire est documenté ;
- [ ] le savoir-être est documenté ;
- [ ] les erreurs à éviter sont explicites ;
- [ ] les éléments réutilisables sont identifiés ;
- [ ] le rôle est enrichi au fil des phases.

---

## 13. Origine / apprentissage Interv360

Interv360 a produit 7 arbitrages MVP validés (ARB-MVP-01 à 07) avec un format reproductible : CRM principal, notifications seules, signature optionnelle, contrats API simulés, erreurs visibles, conservation fictive, 8 écrans MVP. Les reports portail, retry et IA légère sont documentés sans bloquer le parcours démo.

---

## 14. Évolution continue

Ce fichier est **évolutif**. Il sera enrichi après delivery, recette et REX d'Interv360, et par les futurs projets pilotes. Les arbitrages de phase architecture et les ajustements périmètre delivery alimenteront ce template sans le figer.

---

*Template SFIA — Role Method — Product Owner*

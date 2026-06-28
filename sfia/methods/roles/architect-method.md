# Architecte — SFIA Role Method

**Statut** : Draft  
**Source pilote** : PRJ-INTERV360  
**Origine** : role-methods-framing.md + role-methods-review.md  
**Type** : Role Method  
**Nature** : Template évolutif

---

## 1. Mission du rôle dans SFIA

L'Architecte cadrer les intégrations, les contrats d'échange, les flux, les dépendances et les ADR candidates — sans produire d'architecture technique détaillée prématurément. Il prépare la future architecture tout en restant compatible avec un MVP démonstrateur à implémentation simulée.

---

## 2. Quand mobiliser ce rôle

| Phase | Pertinence |
|-------|------------|
| **Intake** | **Faible** — identification dépendances amont |
| **Cadrage** | **Forte** — intégrations simulées, contrats, erreurs, ADR candidates |
| **Arbitrages** | **Forte** — niveau simulation, gestion erreurs |
| **Conception** | **Moyenne** — contrats fonctionnels, flux |
| **Architecture** | **Forte** — ADR, architecture technique, journalisation |
| **Delivery** | **Forte** — implémentation simulée, contrats |
| **QA / Recette** | **Moyenne** — scénarios intégration, non happy path |
| **REX** | **Moyenne** — capitalisation standards intégration |

---

## 3. Valeur projet attendue

- Niveau de simulation des intégrations arbitré et documenté
- Contrats API ou fonctionnels formalisés
- Gestion des erreurs d'intégration cadrée (visibilité, reprise)
- ADR candidates identifiées sans finalisation prématurée
- Journalisation et traçabilité des flux définies
- Frontière cadrage / architecture respectée

---

## 4. Valeur SFIA attendue

- Templates : API Contract Framing, ADR Candidate, Error Matrix
- Checklists : intégration, ADR amont
- Prompts : revue architecture amont
- Standards : contrats API documentés + implémentation simulée
- Matrices : niveau simulation vs crédibilité vs effort
- Postures : cadrer sans architecturer prématurément

---

## 5. Questions clés à poser

1. Quel niveau de simulation des intégrations pour le démonstrateur ?
2. Quels contrats API documenter sans implémentation réelle ?
3. Comment rendre les erreurs visibles et reprises manuellement ?
4. Quelle journalisation minimale des flux ?
5. Quelles ADR candidates sans les finaliser au cadrage ?
6. Quels flux CRM, calendrier, email, notifications cadrer ?
7. Quelle frontière entre cadrage et architecture technique ?
8. Comment lier contrats API et scénarios d'erreur ?
9. Quels codes retour et payloads invalides prévoir ?
10. Quelles intégrations réelles sont explicitement hors MVP ?

---

## 6. Livrables typiques

| Livrable | Contribution du rôle | Capitalisation SFIA possible |
|----------|---------------------|------------------------------|
| Revue intégrations / erreurs | Analyse comparative, recommandation option C | Standard contrats API simulés |
| Contrats API / fonctionnels | Schémas, endpoints, statuts, erreurs | Template API Contract Framing |
| ADR candidates | Liste décisions structurantes à traiter | Template ADR Candidate |
| Cartographie intégrations | CRM, email, calendrier, notifications, facturation | Checklist intégration |
| Error Matrix | Cas d'erreur par flux, reprise manuelle | Template Error Matrix |

---

## 7. Décisions / validations associées

- Niveau simulation intégrations (mocks vs contrats documentés vs réel)
- Gestion erreurs : visibilité, reprise manuelle, retry hors MVP
- ADR candidates : contrats API, erreurs, journalisation, auth email
- Co-portage avec RSSI sur canal email et journalisation
- Validation co-portée avec QA sur scénarios non happy path

---

## 8. Savoir-faire à capitaliser

- Standard « vrais contrats API documentés, implémentation simulée »
- Matrice options simulation (A mocks → D intégrations réelles)
- Traitement couplé arbitrage intégration + gestion erreurs
- Format ADR candidate sans finalisation au cadrage
- Lien contrat → scénarios erreur → critères QA futurs

---

## 9. Posture SFIA / savoir-être

**Posture attendue**  
Cadrer les décisions structurantes sans produire d'architecture prématurée ; documenter les ADR candidates sans les finaliser.

**Manière de challenger**  
Exiger la crédibilité des contrats simulés sans basculer en intégrations réelles ; lier systématiquement contrats et gestion d'erreurs.

**Manière d'éviter les dérives**  
Refuser l'architecture technique détaillée pendant le cadrage ; distinguer contrat fonctionnel documenté et spécification d'implémentation.

**Rapport à la valeur projet**  
Préparer une orchestration crédible et testable sans dépendances externes réelles au MVP.

**Rapport à la capitalisation SFIA**  
Chaque choix d'intégration alimente standards, templates et ADR candidates réutilisables.

---

## 10. Templates / checklists / prompts candidats

| Élément | Type | Priorité | Commentaire |
|---------|------|----------|-------------|
| Template API Contract Framing | Template | Haute | Contrats documentés simulés |
| Template ADR Candidate | Template | Haute | Décisions structurantes amont |
| Standard contrats API simulés | Standard | Haute | Option C Interv360 |
| Template Error Matrix | Template | Haute | Cas d'erreur par flux |
| Checklist intégration | Checklist | Moyenne | Couverture flux MVP |
| Prompt revue architecture amont | Prompt | Moyenne | Frontière cadrage/architecture |

---

## 11. Erreurs à éviter

- Produire une architecture technique détaillée pendant le cadrage
- Choisir des mocks statiques sans contrats formalisés
- Traiter les erreurs d'intégration après le choix de simulation
- Finaliser des ADR au stade cadrage
- Proposer des intégrations réelles par défaut au MVP
- Découpler contrats API et scénarios d'erreur

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

Interv360 a validé l'option C : contrats API documentés avec implémentation simulée, erreurs visibles avec reprise manuelle, retry hors MVP. Huit ADR candidates sont identifiées (contrats API, erreurs, auth email, journalisation, conservation). Les revues integration-error et secure-email constituent la base template la plus dense.

---

## 14. Évolution continue

Ce fichier est **évolutif**. La phase architecture Interv360 enrichira obligatoirement ce template (ADR finalisées, journalisation, implémentation). Les futurs projets pilotes affineront le standard intégration simulée sans figer les choix du pilote Interv360.

---

*Template SFIA — Role Method — Architecte*

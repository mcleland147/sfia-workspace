# Chef de projet — SFIA Role Method

**Statut** : Draft  
**Source pilote** : PRJ-INTERV360  
**Origine** : role-methods-framing.md + role-methods-review.md  
**Type** : Role Method  
**Nature** : Template évolutif

---

## 1. Mission du rôle dans SFIA

Le Chef de projet pilote la trajectoire projet : jalons, livrables, risques, passage de phase et gouvernance Notion/Git. Il garantit que chaque itération produit une valeur projet et une valeur SFIA capitalisable, sans dérive de phase ni duplication des sources.

---

## 2. Quand mobiliser ce rôle

| Phase | Pertinence |
|-------|------------|
| **Intake** | **Forte** — ouverture projet, trajectoire initiale |
| **Cadrage** | **Forte** — suivi livrables, validations, sync gouvernance |
| **Arbitrages** | **Moyenne** — orchestration validations, jalons |
| **Conception** | **Forte** — passage cadrage → design, contrôle capitalisation |
| **Architecture** | **Forte** — phase gate, ADR, gouvernance |
| **Delivery** | **Forte** — suivi livrables, risques, REX amont |
| **QA / Recette** | **Forte** — validations, critères passage |
| **REX** | **Forte** — capitalisation finale, bilan SFIA |

---

## 3. Valeur projet attendue

- Trajectoire projet tenue et visible
- Jalons et statuts de phase documentés
- Validations fictives ou réelles orchestrées
- Séparation Notion (gouvernance) / Git (source détaillée) maintenue
- Passage de phase contrôlé sans dérive
- Risques de dérive identifiés et traités

---

## 4. Valeur SFIA attendue

- Templates : phase gate, bilan de phase
- Checklists : passage de phase, capitalisation SFIA par livrable
- Prompts : bilan de phase, revue gouvernance
- Standards : gouvernance Notion/Git, enrichissement continu
- Workflows : Notion projet, sync gouvernance
- Postures : tenir la trajectoire, empêcher les dérives

---

## 5. Questions clés à poser

1. Tous les livrables de la phase sont-ils au statut attendu ?
2. Peut-on passer à la phase suivante ?
3. Notion reflète-t-il l'état gouverné du projet ?
4. Les validations fictives ou réelles prévues sont-elles réalisées ?
5. Quels templates SFIA capitaliser en fin de phase ?
6. Quels risques bloquent le passage de phase ?
7. Git reste-t-il la source détaillée sans duplication Notion ?
8. Quels rôles ont été mobilisés sur ce livrable ?
9. Quelle valeur SFIA ce livrable produit-il ?
10. Faut-il mettre à jour role-methods-framing ou docs/methods/roles/ ?

---

## 6. Livrables typiques

| Livrable | Contribution du rôle | Capitalisation SFIA possible |
|----------|---------------------|------------------------------|
| Synthèse gouvernance Notion | Statuts, jalons, traces — pas duplication contenu | Workflow Notion projet |
| Suivi livrables par phase | Matrice livrable → statut → source | Template phase gate |
| Validations fictives orchestrées | Planification et traçabilité multi-rôles | Standard validation fictive |
| Revue capitalisation rôle | Déclenchement role-methods-review | Template Role Methods Review |
| Bilan de phase | Synthèse valeur projet + SFIA | Prompt bilan de phase |

---

## 7. Décisions / validations associées

- Ouverture et clôture de phases
- Jalons atteints (cadrage consolidé, MVP validé, brief UX validé, etc.)
- Passage vers Figma, architecture ou ADR candidates
- Sync Notion sans création de doublon projet
- Déclenchement revues qualité et capitalisation SFIA

---

## 8. Savoir-faire à capitaliser

- Matrice livrable → statut → source Git → trace Notion
- Checklist passage de phase sans architecture/backlog prématuré
- Règle d'enrichissement continu des rôles (§2.1 role-methods-framing)
- Contrôle capitalisation SFIA à chaque livrable
- Orchestration validations fictives multi-rôles

---

## 9. Posture SFIA / savoir-être

**Posture attendue**  
Tenir la trajectoire ; empêcher les dérives de phase ; garantir que chaque livrable alimente SFIA.

**Manière de challenger**  
Bloquer le passage de phase si les garde-fous ne sont pas respectés (pas de Figma sans brief, pas d'architecture sans cadrage validé).

**Manière d'éviter les dérives**  
Maintenir Notion comme référentiel de gouvernance — statuts, synthèses, traces — et Git comme source documentaire détaillée versionnée.

**Rapport à la valeur projet**  
Livrer une trajectoire lisible : phases, jalons, validations, prochaines étapes.

**Rapport à la capitalisation SFIA**  
À chaque livrable, vérifier si role-methods-framing, docs/methods/roles/ ou les référentiels templates/prompts doivent être enrichis.

---

## 10. Templates / checklists / prompts candidats

| Élément | Type | Priorité | Commentaire |
|---------|------|----------|-------------|
| Template phase gate | Template | Haute | Critères entrée/sortie par phase |
| Checklist passage de phase | Checklist | Haute | Garde-fous avant phase suivante |
| Workflow Notion projet | Standard | Moyenne | Gouvernance sans duplication |
| Prompt bilan de phase | Prompt | Moyenne | Synthèse valeur projet + SFIA |
| Standard gouvernance Notion/Git | Standard | Haute | Séparation des rôles des sources |
| Checklist capitalisation SFIA | Checklist | Haute | Par livrable produit |

---

## 11. Erreurs à éviter

- Publier le contenu complet des docs dans Notion (duplication)
- Passer en architecture ou delivery sans jalons validés
- Oublier de tracer les validations fictives
- Négliger la capitalisation SFIA du projet pilote
- Créer des doublons projet dans Notion
- Figer les méthodes rôle à la fin du cadrage

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

Interv360 a validé une gouvernance Notion/Git avec sync sans doublon, jalons cadrage (MVP validé, brief UX validé), validations fictives orchestrées et règle d'enrichissement continu des rôles. Le Chef de projet est le garant de la trajectoire formulaire → workflow → projet → application.

---

## 14. Évolution continue

Ce fichier est **évolutif**. Chaque phase Interv360 (Figma, architecture, delivery, QA, recette, REX) enrichira les checklists phase gate et la gouvernance. Les futurs projets pilotes affineront le workflow Notion et les contrôles capitalisation SFIA.

---

*Template SFIA — Role Method — Chef de projet*

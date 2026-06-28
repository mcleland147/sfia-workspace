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

Interv360 a validé gouvernance Notion/Git, phase gate cadrage, ouverture phase architecture par README, blocs ADR P1 et P2 design-impact, enrichissement méthodes rôle différé — voir §15.

---

## 14. Apprentissages issus des ADR P1 Interv360

*Capitalisés depuis un projet pilote — réutilisables sur tout projet SFIA avec phase architecture et capitalisation progressive.*

### Apprentissages clés

- **Utiliser le phase gate** pour sécuriser le passage de phase (Go conditionnel, critères explicites).
- **Ouvrir une phase avec un README de cadre** avant production des livrables de la phase.
- **Traiter les ADR par bloc cohérent** (P1 : contrats, erreurs, email, journalisation) — pas une ADR isolée sans consolidation.
- **Ne pas synchroniser Notion avant consolidation d'un jalon** — Git source détaillée, Notion gouvernance.
- **Tracer les décisions dans Git** — ADR versionnées, commit par jalon.
- **Différer l'enrichissement des méthodes rôle** jusqu'à consolidation du bloc ADR cohérent.
- **Piloter la capitalisation SFIA après chaque jalon** — valeur projet + valeur SFIA à chaque itération.

### Savoir-faire renforcés

- Orchestration séquence : phase gate → README phase → ADR P1 bloc → enrichissement méthodes rôle → synthèse jalon.
- Checklist interdits de phase (pas backlog, user stories, Figma, code pendant architecture ADR).
- Matrice jalon → livrables → capitalisation SFIA (standards, templates, checklists).
- Règle enrichissement méthodes : après bloc ADR, pas après chaque ADR isolée.
- Préparation sync Notion post-jalon architecture consolidé.

### Savoir-être / posture

- **Tenir la trajectoire** — phases, jalons, interdits respectés.
- **Éviter les emballements de phase** — pas de delivery déguisé en architecture.
- **Protéger la cohérence Git / Notion** — pas de duplication, pas de sync prématurée.
- **Rappeler les interdits de phase** à chaque itération.
- **Transformer chaque jalon projet en apprentissage SFIA** — méthodes, prompts, standards.
- **Arbitrer le bon moment pour capitaliser** — bloc cohérent avant enrichissement.

### Garde-fous à réutiliser

- Phase README avant livrables architecture.
- ADR une par une, capitalisation méthodes après bloc.
- Notion sync uniquement après jalon consolidé.
- Aucun backlog / user story / code / Figma pendant phase ADR P1.
- Chaque ADR : valeur projet + valeur SFIA documentées.

### Questions réflexes à poser

- Le jalon est-il **suffisamment consolidé** pour être capitalisé ?
- Faut-il enrichir une **méthode rôle maintenant** ou attendre un bloc cohérent ?
- **Notion** doit-il être synchronisé maintenant ou après consolidation ?
- Les **interdits de phase** sont-ils respectés ?
- Le projet avance-t-il en **valeur projet et en valeur SFIA** ?

### Livrables ou templates candidats

| Élément | Type |
|---------|------|
| Template phase gate | Template |
| Template README phase | Template |
| Règles enrichissement méthodes après bloc ADR | Standard |
| Synthèse enrichissement post-jalon | Template |
| Checklist interdits de phase architecture | Checklist |

### Liens avec les autres rôles

| Rôle | Lien |
|------|------|
| **Architecte** | Instruction ADR P1 ; dépendances entre ADR |
| **RSSI** | Co-ADR email et journalisation |
| **Product Owner** | Validation périmètre ; maintien MVP |
| **UX/UI Designer** | Figma autorisé post-jalon ADR |
| **Tous rôles** | Enrichissement méthodes après bloc consolidé |

### Conditions de réutilisation sur un autre projet SFIA

- Projet pilote avec **phases formalisées** et gouvernance Git / Notion.
- Phase **architecture** avec ADR candidates préparées en cadrage.
- **Non applicable** si projet sans phase gate ni capitalisation SFIA — adapter la gouvernance.

### Apprentissages issus du bloc ADR P2 design-impact Interv360

*Capitalisés depuis Interv360 — réutilisables sur tout projet SFIA avec bloc ADR design-impact avant Figma.*

#### Apprentissages clés

- **Structurer un bloc ADR design-impact avant Figma** — P2 après P1, avant UX/UI.
- **Séquencer P1 → P2 → synthèse → enrichissement méthodes → sync Notion → ouverture UX/UI** — pas de saut de phase.
- **Éviter de passer trop vite de l'architecture à Figma** — garde-fous P2 documentés.
- **Tracer clairement Done, post-MVP, hors MVP** — statuts jalon et confirmations hors ADR formelle.
- **Protéger la gouvernance Git / Notion** — synthèse P2 avant sync ; pas de duplication ADR.
- **Capitaliser après un bloc cohérent** — enrichissement méthodes post-P2, pas ADR par ADR.
- **Préparer la prochaine phase sans la déclencher prématurément** — note ouverture Figma ≠ Figma produit.

#### Savoir-faire renforcés

- Orchestration séquence P2 : ADR-005 à 008 + confirmation CAND-009 → synthèse design-impact → enrichissement méthodes.
- Checklist jalon P2 : décisions consolidées, exclusions Figma, prompts identifiés, Notion différé.
- Matrice jalon → livrables → capitalisation (templates P2, standards, checklists).
- Règle confirmation post-MVP sans ADR formelle quand structure projet le permet.

#### Savoir-être / posture

- **Discipline de séquencement** — Figma préparé, pas lancé par défaut après P2.
- **Recul sur la trajectoire** — ralentir pour solidifier avant design.
- **Capacité à ralentir pour éviter de refaire** — ADR design-impact vs retouches maquettes.
- **Arbitrage entre avancement visible et solidité méthodologique** — jalon Done avant sync Notion.

#### Garde-fous à réutiliser

- Synthèse ADR P2 design-impact avant enrichissement méthodes et sync Notion.
- Aucun Figma, backlog, user story ou code produit par enrichissement méthodes ou synthèse P2.
- Confirmation post-MVP tracée (ex. IA) sans créer ADR formelle inutile.
- Notion sync post-jalon P2 consolidé — pas avant.

#### Questions réflexes à poser

- Le **bloc P2** est-il **consolidé** avant Figma ?
- La **synthèse design-impact** existe-t-elle ?
- **Notion** doit-il être synchronisé **maintenant** ou après payload P2 ?
- L'équipe **confond-elle** préparation Figma et production Figma ?

#### Livrables ou templates candidats

| Élément | Type |
|---------|------|
| Synthèse ADR P2 design-impact | Template |
| Synthèse enrichissement post-jalon P2 | Template |
| Checklist séquence P1 → P2 → Figma | Checklist |
| Règles confirmation post-MVP hors ADR | Standard |

---

## 15. Évolution continue

Ce fichier est **évolutif**. Les blocs ADR P1 et P2 design-impact Interv360 ont enrichi ce template (§14) et déclenché l'enrichissement des méthodes rôle associées. Figma, delivery et REX continueront les checklists phase gate et la gouvernance.

---

*Template SFIA — Role Method — Chef de projet*

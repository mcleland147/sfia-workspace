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

Interv360 a produit 7 arbitrages MVP validés formalisés ensuite en ADR P1. Les reports portail, retry et IA légère restent documentés — voir §15 pour la capitalisation post-ADR.

---

## 14. Apprentissages issus des ADR P1 Interv360

*Capitalisés depuis un projet pilote — réutilisables sur tout projet SFIA avec MVP démonstrateur et arbitrages structurants.*

### Apprentissages clés

- **Maintenir le MVP** malgré les tentations de réalisme technique (intégrations réelles, retry, supervision).
- **Arbitrer entre crédibilité démonstrateur et complexité réelle** — simulation documentée acceptable si testable.
- **Accepter les intégrations simulées** si contrats documentés et scénarios QA prévus.
- **Garder le canal principal identifié** (ex. CRM) et les canaux secondaires encadrés (ex. email sécurisé).
- **Exclure explicitement le retry automatique** du MVP — report post-MVP ou ADR future.
- **Distinguer MVP, post-MVP et extension future** dans chaque décision structurante.
- **Utiliser les ADR pour protéger les arbitrages MVP** — formalisation durable des choix cadrage.

### Savoir-faire renforcés

- Lien arbitrage MVP → ADR candidate → ADR formelle → garde-fous périmètre.
- Validation co-portée ADR impact produit (canaux, retry, périmètre démo).
- Grille valeur démonstrateur vs effort réel (simulation vs intégration réelle).
- Documentation explicite des reports post-MVP dans les ADR (SIEM, supervision, multi-canal équivalent).

### Savoir-être / posture

- **Arbitrer sans perdre la vision produit** — démonstrateur crédible, pas produit industriel.
- **Dire non sans appauvrir la valeur** — simulation structurée plutôt qu'exclusion ou sur-engineering.
- **Protéger le MVP contre la dérive fonctionnelle** — backlog, user stories, delivery hors phase.
- **Accepter une simulation crédible** plutôt qu'un réalisme coûteux au MVP.
- **Maintenir les limites visibles** — parties prenantes informées des reports.

### Garde-fous à réutiliser

- ADR ne produit pas de backlog ni user stories.
- Retry automatique et intégrations réelles exclus du MVP sauf décision explicite.
- Canal principal maintenu ; canaux secondaires encadrés, pas équivalents.
- Chaque ADR produit valeur projet + valeur SFIA.
- Reports post-MVP tracés, pas oubliés.

### Questions réflexes à poser

- Cette décision **renforce-t-elle le MVP** ou l'alourdit-elle ?
- Est-ce **nécessaire maintenant** ou post-MVP ?
- La simulation est-elle **crédible pour démontrer la valeur** ?
- Le choix **respecte-t-il les arbitrages MVP** ?
- Le périmètre reste-t-il **compréhensible pour les parties prenantes** ?

### Livrables ou templates candidats

| Élément | Type |
|---------|------|
| Template MVP Arbitration | Template |
| Grille valeur démonstrateur / complexité réelle | Template |
| Standard MVP démonstrateur vs produit complet | Standard |
| Checklist ADR impact produit | Checklist |

### Liens avec les autres rôles

| Rôle | Lien |
|------|------|
| **Architecte** | Validation périmètre technique MVP ; exclusion intégrations réelles |
| **RSSI** | Canal secondaire sécurisé sans élargir flux principal |
| **UX/UI Designer** | Écrans MVP ; Figma post-ADR |
| **Chef de projet** | Jalons ; capitalisation après bloc ADR |
| **QA / Testeur** | Scénarios démo non happy path obligatoires |

### Conditions de réutilisation sur un autre projet SFIA

- Projet **pilote ou MVP démonstrateur** avec arbitrages structurants documentés.
- Phase **architecture** avec ADR formalisant les choix cadrage.
- **Non applicable** si le projet vise un produit industriel dès le MVP — adapter les garde-fous simulation.

### Apprentissages issus du bloc ADR P2 design-impact Interv360

*Capitalisés depuis Interv360 — réutilisables sur tout projet SFIA avec ADR design-impact avant Figma.*

#### Apprentissages clés

- **Sécuriser les décisions qui impactent le design avant Figma** — bloc ADR P2 design-impact avant ouverture UX/UI.
- **Distinguer MVP, post-MVP et hors MVP** avant de lancer la conception.
- **Protéger le MVP contre la dérive fonctionnelle** — portail client, IA, BI avancée, centre notifications.
- **Cadrer preuves, notifications, signatures, dashboards et IA** avant design — pas après maquette.
- **Accepter une valeur métier crédible sans surpromesse** — conservation fictive, signature optionnelle, notifications simulées.
- **Arbitrer ce qui doit être visible dans le produit vs reporté** — visibilité limitée, pas promesse réelle.
- **Éviter de transformer une opportunité future en engagement MVP** — IA légère, portail, e-signature complète.
- **Savoir dire non** à un portail client, à une IA ou à une BI avancée tant que le MVP ne l'exige pas.

#### Savoir-faire renforcés

- Instruction ADR design-impact (conservation fictive, notifications, signature, dashboards, exclusions IA).
- Grille visible MVP / post-MVP / hors MVP par objet UX (preuve, notification, signature, KPI, composant IA).
- Validation co-portée ADR P2 impact produit avant brief Figma ou note d'ouverture design.
- Documentation explicite des exclusions Figma (portail, IA, BI, logs techniques en dashboard).

#### Savoir-être / posture

- **Challenger sans bloquer** — opportunités futures documentées, pas livrées au MVP.
- **Protéger le MVP** — refuser la séduction fonctionnelle prématurée.
- **Accepter une solution simple mais cohérente** — démonstrateur crédible, pas produit complet.
- **Éviter la séduction fonctionnelle prématurée** — Figma ne remplace pas les arbitrages.

#### Garde-fous à réutiliser

- ADR P2 design-impact consolidée avant préparation Figma.
- Portail client, IA, BI avancée et centre notifications **hors MVP** sauf décision explicite.
- Conservation fictive et signature optionnelle — pas surpromesse juridique ou archivage réel.
- Synthèse jalon P2 avant enrichissement méthodes et sync Notion.

#### Questions réflexes à poser

- Cette fonctionnalité **doit-elle apparaître au MVP** ou peut-elle attendre ?
- Le design **promet-il plus** que ce que les ADR autorisent ?
- Les **exclusions** (portail, IA, BI) sont-elles explicites pour l'équipe UX ?
- La **valeur démo** est-elle atteinte **sans élargir le périmètre** ?

#### Livrables ou templates candidats

| Élément | Type |
|---------|------|
| Template Notification Scope Matrix | Template |
| Template Optional Signature Matrix | Template |
| Template Dashboard Separation Matrix | Template |
| Checklist anti-surpromesse IA | Checklist |
| Standard conservation fictive MVP | Standard |

### Apprentissages issus de la production et revue maquette Figma V1

*Capitalisés depuis un projet pilote — réutilisables sur tout projet SFIA avec maquette V1 présentable avant revue transverse ou delivery.*

#### Apprentissages clés

- **Distinguer présentable, validé, définitif et prêt delivery** — une V1 peut être validée comme support de revue sans être définitive ni déclencheuse de backlog.
- **Contrôler le respect MVP** sur les captures — les 8 écrans cœur, pas les explorations ou pages structure non exportées.
- **Détecter les dérives fonctionnelles implicites** — portail client, IA, BI avancée, signature juridique complète, workflows non arbitrés suggérés par libellés ou onglets.
- **Vigilance sur les libellés qui promettent trop** — onglets Preuves, Notifications, actions secondaires, CTA contextuels.
- **Valider la valeur métier visible** — SLA, responsables, prochaines actions, statuts crédibles pour démonstrateur.
- **Confirmer qu'une maquette ne déclenche pas automatiquement** backlog, user stories ou code — validation transverse documentée requise.
- **Statuer sur les ajustements P1/P2/P3** — bloquant vs polish ; prioriser avant V2.
- **Décider si une V2 est nécessaire, différée ou abandonnée** — contraintes outil, crédits, maturité visuelle.

#### Savoir-faire renforcés

- Grille statuts maquette : présentable → revue transverse → validée avec réserves → définitive → prêt delivery.
- Checklist revue PO maquette V1 : MVP, exclusions ADR, valeur démo, surpromesse fonctionnelle.
- Priorisation ajustements P1 (wording, composants ambigus) / P2 (polish) / P3 (structure Figma, états).
- Décision V2 vs passage delivery — conditions explicites dans compte rendu de revue.

#### Savoir-être / posture

- **Ne pas confondre satisfaction visuelle et validation périmètre** — 8/10 en polish n'autorise pas le delivery.
- **Challenger les écrans qui « font pro »** — crédibilité démo oui, produit complet non.
- **Protéger la séquence** — revue documentée avant backlog ou user stories.
- **Arbitrer sans bloquer indéfiniment** — V1 figée provisoirement acceptable si garde-fous tenus.

#### Garde-fous à réutiliser

- Maquette V1 présentable **≠** maquette définitive **≠** feu vert delivery.
- Aucun backlog, user story ou code sans validation transverse explicite.
- Portail, IA, BI, signature complète et workflows non arbitrés **à rejeter ou reporter** si visibles.
- Retours de revue documentés avant V2 ou delivery.

#### Questions réflexes à poser

- Cette V1 **respecte-t-elle le MVP** sans élargissement implicite ?
- Un écran ou libellé **promet-il** plus que les ADR autorisent ?
- La maquette est-elle **suffisante pour démontrer la valeur** sans être définitive ?
- Faut-il une **V2** ou peut-on clôturer le jalon avec ajustements mineurs ?
- Le **delivery** est-il prématuré ?

#### Livrables ou templates candidats

| Élément | Type |
|---------|------|
| Grille présentable / validé / définitif / prêt delivery | Template |
| Checklist revue PO maquette V1 | Checklist |
| Standard V1 présentable non définitive | Standard |
| Template compte rendu revue maquette | Template |

---

## 15. Évolution continue

Ce fichier est **évolutif**. Les blocs ADR P1, P2 design-impact et la revue maquette Figma V1 Interv360 ont enrichi ce template (§14). Delivery, recette et REX continueront l'enrichissement. Les futurs projets pilotes affineront les grilles arbitrage sans figer les choix d'un pilote unique.

---

*Template SFIA — Role Method — Product Owner*

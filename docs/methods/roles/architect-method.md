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

Interv360 a validé l'option C : contrats API documentés avec implémentation simulée, erreurs visibles avec reprise manuelle, retry hors MVP. Les blocs ADR P1 et P2 design-impact consolident ces choix — voir §15.

---

## 14. Apprentissages issus des ADR P1 Interv360

*Capitalisés depuis un projet pilote — réutilisables sur tout projet SFIA avec intégrations simulées.*

### Apprentissages clés

- Formaliser les décisions structurantes sous forme d'**ADR** avant de produire une architecture complète.
- **Distinguer contrat documenté et implémentation simulée** — le contrat décrit l'échange ; l'implémentation reste locale ou simulée.
- Cadrer les intégrations simulées **sans dériver vers des intégrations réelles** au MVP.
- **Relier contrats API, erreurs visibles et journalisation minimale** — trois ADR indissociables formant un bloc cohérent.
- Identifier les **dépendances entre ADR** (ex. erreurs dépendent des contrats ; journalisation consolide les deux).
- Maintenir les choix techniques au **bon niveau de maturité** — fonctionnel et décisionnel, pas implémentatoire prématuré.
- Documenter **conséquences positives, négatives et garde-fous** dans chaque ADR.
- Préparer des **standards réutilisables** : contrats API simulés, Error Matrix, Minimal Logging Matrix.

### Savoir-faire renforcés

- Instruction d'ADR candidates en bloc P1 priorisé.
- Rédaction de contrats fonctionnels par domaine d'intégration (endpoints, statuts, erreurs attendues).
- Matrice options simulation (mocks → contrats documentés → intégrations réelles).
- Lien systématique contrat → scénario erreur → critère QA → événement journalisé.
- Frontière explicite ADR / architecture technique complète / backlog.

### Savoir-être / posture

- **Challenger sans sur-spécifier** — exiger la crédibilité sans produire une architecture exhaustive.
- **Sécuriser la trajectoire sans bloquer le projet** — décisions traçables, livrables progressifs.
- **Refuser la fausse précision technique** quand le projet n'est pas prêt pour l'implémentation.
- **Protéger le MVP contre la dérive d'architecture** — intégrations réelles, SIEM, supervision complète hors MVP.
- **Garder une logique de décision traçable** — chaque choix structurant produit une ADR, pas un document technique monolithique.

### Garde-fous à réutiliser

- Aucune ADR formelle sans ADR candidate source.
- Aucune architecture technique complète avant bloc ADR P1 consolidé.
- Aucune connexion système externe réel au MVP démonstrateur.
- Aucun backlog ou user story produit par une ADR.
- Séparation explicite contrat documenté / implémentation simulée.
- Retry automatique et supervision complète reportés explicitement hors MVP.

### Questions réflexes à poser

- Cette décision nécessite-t-elle une **ADR** ?
- Le choix est-il **structurant** ou simplement implémentatoire ?
- Les **alternatives** sont-elles documentées ?
- Les **conséquences** sont-elles claires (projet + SFIA) ?
- Le choix produit-il une **valeur projet** et une **valeur SFIA** ?
- Le **niveau de détail** est-il adapté à la phase ?

### Livrables ou templates candidats

| Élément | Type |
|---------|------|
| Standard contrats API simulés | Standard |
| Template API Contract Framing | Template |
| Template Error Matrix | Template |
| Template Minimal Logging Matrix | Template |
| Checklist ADR guardrails | Checklist |
| Matrice ADR → prompts / rôles | Template |

### Liens avec les autres rôles

| Rôle | Lien |
|------|------|
| **RSSI** | Co-instruction ADR canal sécurisé et journalisation ; garde-fous données sensibles |
| **Product Owner** | Validation périmètre MVP ; exclusion retry et intégrations réelles |
| **QA / Testeur** | Error Matrix, scénarios non happy path basés sur contrats |
| **UX/UI Designer** | Écran anomalies ; distinction message métier / log technique |
| **Chef de projet** | Bloc ADR cohérent ; capitalisation méthodes après consolidation |

### Conditions de réutilisation sur un autre projet SFIA

- Projet avec **intégrations externes simulées** ou démonstrateur sans systèmes réels.
- Phase **architecture** ouverte avec ADR candidates préparées en cadrage.
- Besoin de **traçabilité décisionnelle** avant implémentation.
- **Non applicable** si le projet exige des intégrations réelles dès le MVP — adapter les garde-fous.

### Apprentissages issus du bloc ADR P2 design-impact Interv360

*Capitalisés depuis Interv360 — réutilisables sur tout projet SFIA avec ADR design-impact avant Figma.*

#### Apprentissages clés

- **Les décisions design-impact peuvent être aussi structurantes que les décisions techniques** — bloc P2 avant Figma.
- **Cadrer les objets visibles avant design** — preuves, notifications, signature, dashboards.
- **Distinguer données fictives, métadonnées, traces et stockage réel** — pas d'architecture de conservation implicite.
- **Éviter de créer implicitement une architecture de portail, BI, IA ou conservation réelle** — exclusions explicites.
- **Relier les décisions UX aux ADR existantes** — P2 complète P1 (notifications → ADR-001 ; logs → ADR-004).
- **Préparer Figma sans déclencher architecture complète, backlog ou code** — ADR design-impact ≠ delivery.

#### Savoir-faire renforcés

- Instruction bloc ADR P2 design-impact après consolidation P1.
- Matrice objet visible → statut → trace minimale → stockage réel (reporté).
- Lien ADR P1/P2 → impacts Figma → agrégats dashboard sans logs techniques.
- Confirmation post-MVP (ex. IA) sans ADR formelle quand candidate explicitement reportée.

#### Savoir-être / posture

- **Penser architecture par garde-fous** — ce qu'on n'implémente pas compte autant que ce qu'on cadré.
- **Détecter les implications cachées des écrans** — portail, IA, BI émergent par le design si non arbitrés.
- **Refuser les composants implicites non arbitrés** — pas de scoring ni prédiction « par défaut ».
- **Préserver la cohérence ADR P1, P2 et UX/UI** — une trajectoire, pas des silos.

#### Garde-fous à réutiliser

- Bloc ADR P2 design-impact + synthèse avant préparation Figma.
- Aucune architecture portail, BI, IA ou conservation réelle produite par les ADR P2.
- Objets fictifs documentés comme tels — pas de schéma stockage probatoire au MVP.
- Confirmation hors MVP documentée quand pas d'ADR formelle (ex. ADR-CAND-009).

#### Questions réflexes à poser

- Cette décision **impacte-t-elle les écrans** sans être arbitrée ?
- Crée-t-on **implicitement** un composant ou un stockage non décidé ?
- Les **agrégats dashboard** exposent-ils des **données sensibles** ?
- Faut-il une **ADR design-impact** avant Figma ?

#### Livrables ou templates candidats

| Élément | Type |
|---------|------|
| Checklist ADR design-impact | Checklist |
| Template Fictive Retention Matrix | Template |
| Template Dashboard Separation Matrix | Template |
| Standard IA post-MVP | Standard |

---

## 15. Évolution continue

Ce fichier est **évolutif**. Les blocs ADR P1 et P2 design-impact Interv360 ont enrichi ce template (§14). Les phases suivantes (Figma, delivery) continueront l'enrichissement. Les futurs projets pilotes affineront le standard intégration simulée sans figer les choix d'un pilote unique.

---

*Template SFIA — Role Method — Architecte*

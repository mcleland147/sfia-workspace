# ADR-001 — Contrats API documentés avec implémentation simulée

**Projet** : PRJ-INTERV360
**Phase** : 02-architecture
**Statut** : Accepted
**Source candidate** : ADR-CAND-001
**Rôles principaux** : Architecte, Product Owner
**Rôles contributeurs** : QA / Testeur, Chef de projet, RSSI
**Type** : Architecture Decision Record

---

## 1. Contexte

Interv360 (ServiTech Pro) doit **simuler plusieurs intégrations externes** pour orchestrer le parcours SAV sur 9 étapes : **CRM**, **calendrier / planning**, **notifications**, **facturation**, et **email sécurisé** (canal non principal).

Le **MVP ne doit pas dépendre d'intégrations réelles** : l'objectif est un démonstrateur crédible, testable et découplé des systèmes externes réels, conformément au périmètre cadré (`2026-06-27-business-framing.md` §8, `mvp-arbitrations.md`).

Le cadrage a validé **ARB-MVP-04** : retenir l'**option C — vrais contrats API documentés avec implémentation simulée** (`mvp-arbitration-validation.md`, `integration-error-arbitration-review.md` §4).

Cette décision doit permettre :

- un **démonstrateur crédible** illustrant l'orchestration SAV ;
- une **testabilité** basée sur des contrats formalisés (happy path et non happy path) ;
- un **découplage** des systèmes CRM, calendrier, notification, facturation et email réels ;
- une **base structurante** pour les ADR suivantes sur les erreurs (ADR-CAND-002) et la journalisation (ADR-CAND-004).

---

## 2. Problème à résoudre

**Comment garantir la crédibilité des intégrations externes simulées d'Interv360 sans basculer vers des intégrations réelles ni se limiter à des mocks statiques trop pauvres ?**

Le choix du niveau de formalisation des contrats API conditionne la qualité du démonstrateur, la préparation des tests QA, la cohérence UX des statuts visibles, la gestion des erreurs d'intégration et la capitalisation SFIA sur les standards d'intégration simulée.

---

## 3. Options étudiées

| Option | Description | Avantages | Limites | Décision |
|--------|-------------|-----------|---------|----------|
| **A — Mocks statiques sans contrat formalisé** | Réponses figées, données prédéfinies, pas de schéma ni endpoint documenté | Démonstration rapide ; effort minimal | Crédibilité insuffisante (R-I01) ; n'illustre pas l'orchestration ; peu réutilisable comme standard SFIA | **Rejetée** |
| **B — API simulées avec contrats simples** | Endpoints simulés, schémas d'entrée/sortie légers, statuts cohérents | Bon compromis effort / valeur ; démonstrateur acceptable | Ambiguïté sur le niveau de formalisation ; risque d'incohérence contrats / erreurs / tests | **Non retenue comme cible principale** |
| **C — Contrats API documentés avec implémentation simulée** | Contrats formalisés (OpenAPI ou équivalent) ; exécution simulée / localisée dans le démonstrateur | Orchestration crédible ; préparation architecture et tests ; base Error Matrix et journalisation ; forte capitalisation SFIA | Effort documentaire supérieur ; discipline de cadrage requise | **Retenue** |
| **D — Intégrations réelles partielles** | Connexion réelle à CRM, calendrier ou messagerie | Réalisme maximal | Dérive scope ; dépendances externes ; hors cadrage MVP ; faible capitalisation template pilote | **Reportée post-MVP** |

---

## 4. Décision

**La décision retenue est d'utiliser des contrats API documentés avec implémentation simulée pour les intégrations externes du MVP Interv360.**

Précisions :

- les **contrats décrivent** les endpoints, payloads, statuts, codes retour et erreurs attendues par domaine d'intégration ;
- l'**implémentation reste simulée / localisée** — aucune connexion à un système externe réel au MVP ;
- les **intégrations réelles sont hors MVP** et réservées à une phase ultérieure ;
- les contrats doivent être **suffisamment précis** pour alimenter UX (statuts visibles), QA (scénarios non happy path), gestion des erreurs (ADR-CAND-002), journalisation (ADR-CAND-004) et futures décisions d'architecture — sans constituer une architecture technique complète.

**Séparation explicite** : le contrat documenté décrit *ce que* l'intégration expose ; l'implémentation simulée exécute *comment* le démonstrateur honore ce contrat localement.

---

## 5. Périmètre concerné

| Domaine d'intégration | Statut MVP | Commentaire |
|----------------------|------------|-------------|
| **CRM simulé** | Inclus | `POST /crm/demandes`, `PATCH /crm/demandes/{id}` — création demande, sync statuts |
| **Calendrier / planning simulé** | Inclus | `POST/PATCH /calendrier/evenements` — réservation et modification créneaux |
| **Notifications simulées** | Inclus | `POST /notifications/envoi` — envoi notification client sans portail |
| **Facturation simulée** | Inclus | `POST /facturation/exports` — export éléments facturables post-clôture |
| **Email sécurisé non principal** | Inclus | `POST /email/intake` — canal complémentaire, authentification et rejet cadrés (ADR-CAND-003) |
| **Gestion erreurs intégration** | Inclus (lié) | Codes retour et erreurs documentés dans les contrats ; traitement visible instruit par ADR-CAND-002 |

*Source fonctionnelle des contrats : `integration-error-arbitration-review.md` §5.*

---

## 6. Conséquences positives

- **Crédibilité du démonstrateur** — orchestration SAV illustrée avec un niveau de réalisme supérieur aux mocks statiques ;
- **Découplage des systèmes réels** — pas de dépendance CRM, calendrier, notification, facturation ou email réels au MVP ;
- **Testabilité améliorée** — scénarios QA basés sur contrats, happy path et non happy path (CF9 échec sync) ;
- **Base pour Error Matrix** — erreurs attendues documentées par domaine (indisponibilité, payload invalide, mapping inconnu) ;
- **Base pour UX erreurs / anomalies** — statuts et messages cohérents avec les contrats documentés ;
- **Base pour journalisation** — événements et rejets traçables (ADR-CAND-004) ;
- **Capitalisation SFIA forte** — standard « contrats API simulés » réutilisable sur d'autres projets pilotes.

---

## 7. Conséquences négatives / coûts

- **Effort documentaire supérieur** aux mocks simples — six domaines à cadrer contractuellement ;
- **Risque de sur-spécification** des contrats au-delà des besoins MVP ;
- **Nécessité de maintenir la cohérence** contrats / écrans / tests / statuts visibles ;
- **Risque de dérive** vers une architecture technique détaillée prématurée ;
- **Besoin de discipline** pour ne pas implémenter d'intégrations réelles sous prétexte de crédibilité.

---

## 8. Garde-fous

- [ ] ne pas connecter de **système externe réel** au MVP ;
- [ ] ne pas produire d'**architecture technique complète** dans cette ADR ;
- [ ] ne pas transformer les contrats en **backlog** ou **user stories** ;
- [ ] **limiter les contrats** aux besoins MVP (six domaines cadrés) ;
- [ ] **documenter les erreurs attendues** dans chaque contrat ;
- [ ] prévoir le lien avec **ADR-002** (gestion visible des erreurs — ADR-CAND-002) ;
- [ ] prévoir le lien avec **ADR-004** (journalisation minimale — ADR-CAND-004) ;
- [ ] maintenir la **séparation contrat documenté / implémentation simulée**.

---

## 9. Impacts projet

| Domaine | Impact |
|---------|--------|
| **MVP** | Périmètre intégrations simulées confirmé ; ARB-MVP-04 formalisé ; pas d'intégrations réelles |
| **UX/UI** | Statuts et délais affichés cohérents avec les contrats ; préparation écran anomalies |
| **QA** | Scénarios basés sur contrats ; non happy path (CF9) ; Error Matrix alimentée |
| **SSI** | Endpoints simulés ; authentification mock email ; pas d'exposition systèmes réels |
| **Exploitation** | Coût maintenance contrats vs mocks ; discipline documentation |
| **Future architecture** | Base modulaire par domaine ; préparation sans stack définitif |
| **Notion / gouvernance** | Jalon architecture à synchroniser après consolidation ADR P1 — pas maintenant |

---

## 10. Impacts SFIA

| Asset SFIA | Impact |
|------------|--------|
| `docs/practices/roles/architect-method.md` | Enrichissement à prévoir après ADR P1 (001–004) — standard contrats API simulés |
| `docs/practices/roles/product-owner-method.md` | Validation périmètre MVP maintenu ; lien ARB-MVP-04 formalisé |
| `docs/practices/roles/project-manager-method.md` | Traçabilité jalon ADR-001 ; sync Notion post-consolidation |
| `prompts/prompt-catalog.md` | PROMPT-ARCH-001 candidat à formaliser en Draft |
| `prompts/architecture/` | Accueil futur PROMPT-ARCH-001 formalisé |
| **Futur Template API Contract Framing** | Matrice domaine / endpoint / statuts / erreurs — à extraire de cette ADR |
| **Futur Standard contrats API simulés** | Option C retenue comme référence SFIA pilote |

---

## 11. Rôles mobilisés

| Rôle | Contribution |
|------|--------------|
| **Architecte** | Décision structurante ; formalisation contrats ; lien ADR P1 ; garde-fous technique |
| **Product Owner** | Validation alignement MVP ; maintien périmètre sans intégrations réelles |
| **QA / Testeur** | Scénarios basés contrats ; non happy path ; préparation Error Matrix |
| **Chef de projet** | Traçabilité décision ; gouvernance Git ; sync Notion post-jalon |
| **RSSI** | Revue exposition endpoints simulés ; lien contrat email sécurisé (ADR-CAND-003) |

---

## 12. Prompts impactés

| Prompt candidat | Impact |
|-----------------|--------|
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Directement alimenté — candidat à passer Draft après instruction ADR P1 |
| **PROMPT-ARB-001** — Arbitrages MVP | Contexte ARB-MVP-04 figé — référence historique |
| **PROMPT-ROLE-003** — Extraction méthode rôle | Architecte et PO à enrichir post-ADR P1 |
| **PROMPT-GOV-001** — Synchronisation gouvernance Notion projet | Jalon architecture à synchroniser après consolidation — pas maintenant |

---

## 13. Relations avec les autres ADR

| ADR | Relation |
|-----|----------|
| **ADR-CAND-002** — Gestion visible des erreurs d'intégration avec reprise manuelle | **Indissociable** — les contrats documentent les erreurs ; ADR-002 instruit leur visibilité et reprise (→ ADR-002) |
| **ADR-CAND-004** — Journalisation minimale des flux et rejets | **Dépendante** — les événements contrats alimentent la journalisation (→ ADR-004) |
| **ADR-CAND-003** — Canal email sécurisé non principal | **Complémentaire** — contrat `POST /email/intake` dans le périmètre ; ADR-003 instruit exigences SSI |

---

## 14. Critères de validation de l'ADR

- [x] la décision est reliée à **ADR-CAND-001** ;
- [x] les **options** sont documentées ;
- [x] les **alternatives rejetées** sont explicites (A rejetée, B non retenue, D reportée) ;
- [x] la décision **ne produit pas** d'architecture complète ;
- [x] les **impacts projet** sont identifiés ;
- [x] les **impacts SFIA** sont identifiés ;
- [x] les **rôles mobilisés** sont documentés ;
- [x] les **prompts impactés** sont identifiés ;
- [x] les **garde-fous** sont explicites.

---

## 15. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template ADR | Structure présente ADR-001 | Template |
| Template API Contract Framing | §5 périmètre + integration-error-arbitration-review §5 | Template |
| Standard contrats API simulés | Option C retenue — séparation contrat / implémentation | Standard |
| Checklist ADR guardrails | §8 garde-fous | Checklist |
| Prompt ADR architecture | PROMPT-ARCH-001 — formalisation future | Prompt |
| Matrice ADR → prompts | §12 | Template |
| Matrice ADR → rôles | §11 | Template |

---

## 16. Prochaines actions

- instruire **ADR-CAND-002** sur la gestion visible des erreurs (→ ADR-002) ;
- préciser les **premiers contrats API simulés** à partir des six domaines d'intégration (`integration-error-arbitration-review.md` §5) ;
- mettre à jour la **méthode Architecte** après instruction des ADR P1 (001–004) — pas immédiatement ;
- formaliser **PROMPT-ARCH-001** en Draft si le prompt devient opérationnel ;
- synchroniser **Notion** après consolidation d'un jalon architecture — **pas maintenant**.

---

## 17. Contrôle capitalisation rôle

| Méthode | Enrichissement immédiat ? | Décision |
|---------|---------------------------|----------|
| `docs/practices/roles/architect-method.md` | Non | Enrichir après ADR-002 / ADR-004 — standard contrats API simulés à consolider |
| `docs/practices/roles/product-owner-method.md` | Non | Enrichir après ADR P1 — lien ARB-MVP-04 à intégrer avec erreurs et journalisation |
| `docs/practices/roles/project-manager-method.md` | Non | Enrichir après jalon architecture consolidé — sync Notion et traçabilité ADR |

**Les méthodes rôle ne sont pas modifiées à cette étape** — l'enrichissement est prévu après instruction d'ADR-002 et ADR-004.

---

## 18. Conclusion

Cette ADR formalise le choix de **contrats API documentés avec implémentation simulée** pour le MVP Interv360.

Elle permet de préparer une **architecture crédible** sans dépendre de systèmes externes réels, tout en alimentant la **capitalisation SFIA** sur les méthodes Architecte, Product Owner, Chef de projet et les futurs prompts architecture.

La prochaine décision structurante à instruire est **ADR-CAND-002 — Gestion visible des erreurs d'intégration avec reprise manuelle**.

---

*ADR-001 — projet Interv360, phase 02-architecture, gouvernance SFIA.*

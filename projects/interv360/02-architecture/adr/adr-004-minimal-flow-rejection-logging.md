# ADR-004 — Journalisation minimale des flux et rejets

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Statut** : Accepted  
**Source candidate** : ADR-CAND-004  
**ADR liées** : ADR-001, ADR-002, ADR-003  
**Rôles principaux** : Architecte, RSSI  
**Rôles contributeurs** : QA / Testeur, Product Owner, UX/UI Designer, Chef de projet  
**Type** : Architecture Decision Record

---

## 1. Contexte

**ADR-001** a formalisé les **contrats API documentés avec implémentation simulée** pour six domaines d'intégration (CRM, calendrier, notifications, facturation, email).

**ADR-002** a formalisé les **erreurs visibles** dans un écran anomalies avec **reprise manuelle simulée**, sans retry automatique.

**ADR-003** a formalisé le **canal email sécurisé secondaire** via `POST /email/intake`, avec rejets SSI, doublons et qualification.

Ces trois décisions créent un **besoin minimal de journalisation** : chaque flux simulé, erreur visible, rejet email et reprise manuelle doit laisser une **trace structurée** suffisante pour la démonstration, la QA, la SSI et la gouvernance — sans produire un outil complet de supervision.

Le MVP doit garder une trace des **flux, erreurs, rejets et reprises** conforme à RG-I07 et A-I08 (`business-framing.md`), tout en respectant les limites FinOps/GreenOps (RG-FG02, A-FG02). La journalisation doit être **utile pour QA, SSI, exploitation, gouvernance et démonstration** — pas pour l'ops avancée.

---

## 2. Problème à résoudre

**Quel niveau minimal de journalisation adopter pour les flux simulés, erreurs visibles, rejets email et reprises manuelles, afin d'assurer traçabilité, testabilité et crédibilité SSI sans produire une supervision complète ni surcharger le MVP ?**

Sans journalisation structurée, les rejets email (ADR-003) ne sont pas auditables, les reprises manuelles (ADR-002) ne sont pas traçables, et les contrats simulés (ADR-001) perdent en testabilité QA. Une journalisation excessive exposerait des données sensibles et surchargerait le MVP (R-S02, R-FG02).

---

## 3. Options étudiées

| Option | Description | Avantages | Limites | Décision |
|--------|-------------|-----------|---------|----------|
| **A — Aucune journalisation structurée** | Pas de log structuré ; erreurs éventuellement en mémoire volatile | Simplicité maximale | Non conforme SSI ; rejets email non auditables ; QA impossible ; R-S02 | **Rejetée** |
| **B — Journalisation minimale structurée** | Logs applicatifs avec horodatage, source, statut, référence, corrélation anomalie | Traçabilité démo ; testabilité QA ; crédibilité SSI ; effort maîtrisé | Effort structuration ; risque surjournalisation si mal cadré | **Retenue** |
| **C — Journalisation complète avec conservation longue** | Logs détaillés, archivage, rétention étendue | Auditabilité forte ; historique complet | Sur-stockage (R-FG02) ; alignement ARB-MVP-06 ; hors besoin MVP immédiat | **Reportée — liée ADR-CAND-005** |
| **D — SIEM / supervision externe** | Export vers outil sécurité ; alertes ; corrélation multi-flux | Ops mature ; corrélation avancée | Complexité élevée ; dépendance externe ; hors scope pilote MVP | **Hors MVP** |

---

## 4. Décision

**La décision retenue est de mettre en place une journalisation minimale structurée pour les flux simulés, erreurs visibles, rejets email et reprises manuelles du MVP Interv360.**

Précisions :

- la journalisation reste **minimale** — champs obligatoires limités (§6), pas de dump complet ;
- elle **ne constitue pas** une supervision complète (pas de SLA, alertes, corrélation multi-flux avancée) ;
- elle **ne met pas en place de SIEM** — pas d'export vers outil sécurité externe ;
- elle **ne définit pas encore** une politique complète de conservation — reportée à **ADR-CAND-005** ;
- elle **prépare ADR-CAND-005** sur conservation fictive des photos, signatures et logs (ARB-MVP-06) ;
- elle **alimente** QA, SSI, exploitation, gouvernance et capitalisation SFIA.

---

## 5. Périmètre des événements journalisés

| Catégorie | Événements minimum | Source ADR |
|-----------|-------------------|------------|
| **Flux CRM simulé** | Création demande, sync statut, échec sync | ADR-001 |
| **Flux calendrier / planning simulé** | Réservation créneau, modification, conflit, indisponibilité | ADR-001 |
| **Flux notifications simulées** | Envoi notification, échec envoi, canal invalide | ADR-001 |
| **Flux facturation simulée** | Export post-clôture, export incomplet, service indisponible | ADR-001 |
| **Email intake** | Réception simulée, qualification, traitement | ADR-003 |
| **Rejets email** | Source inconnue, expéditeur non autorisé, PJ invalide | ADR-003 |
| **Anomalies visibles** | Détection erreur intégration affichée écran anomalies | ADR-002 |
| **Reprise manuelle simulée** | Déclenchement, résultat (succès / échec), clôture | ADR-002 |
| **Doublon potentiel** | Détection cross-canal CRM / email | ADR-003 |
| **Erreur payload / mapping** | Payload incomplet, mapping statut incohérent, client inconnu | ADR-001, ADR-002 |
| **Indisponibilité simulée** | Timeout, service externe simulé down | ADR-001, ADR-002 |

---

## 6. Données minimales de journalisation

| Champ | Description | Obligatoire MVP |
|-------|-------------|-----------------|
| **Identifiant événement** | UUID ou référence unique de l'événement logué | Oui |
| **Horodatage** | Date/heure de l'événement (ISO 8601 ou équivalent) | Oui |
| **Domaine fonctionnel** | CRM, calendrier, notification, facturation, email, anomalie | Oui |
| **Source du flux** | Origine de l'événement (plateforme, canal, acteur simulé) | Oui |
| **Cible simulée** | Endpoint ou système simulé concerné | Oui |
| **Type événement** | Flux, erreur, rejet, reprise, doublon | Oui |
| **Statut résultat** | Voir §7 | Oui |
| **Référence dossier ou demande** | Lien vers demande SAV / intervention concernée | Si applicable |
| **Acteur ou source** | Utilisateur simulé, canal, ou système déclencheur | Oui |
| **Code erreur fonctionnel** | Code aligné contrat ADR-001 (ex. CRM_UNAVAILABLE) | Si erreur / rejet |
| **Message métier court** | Libellé compréhensible — non verbeux | Si visible anomalies |
| **Détail technique limité** | Contexte minimal (endpoint, code HTTP simulé) — pas de dump | Si erreur |
| **Niveau de gravité** | Critique, majeur, mineur, info | Oui |
| **Action de reprise éventuelle** | Type reprise déclenchée (relance simulée, marquer traité) | Si reprise |
| **Corrélation avec anomalie visible** | Identifiant anomalie écran ADR-002 | Si anomalie |
| **Motif de rejet email si applicable** | Code statut ADR-003 (ex. REJETE_EXPEDITEUR_NON_AUTORISE) | Si rejet email |

**Exclusions explicites :**

- ne **pas stocker** de contenu sensible complet (corps email, PJ, données client intégrales) ;
- ne **pas stocker** le **corps complet des emails** ;
- ne **pas stocker** les **pièces jointes** dans le log ;
- ne **pas exposer** le log technique complet dans l'**UI** (distinction §8).

---

## 7. Statuts de résultat journalisés

| Statut | Signification | Usage |
|--------|---------------|-------|
| **SUCCESS** | Flux ou action terminé avec succès | Happy path contrats ADR-001 |
| **FAILED** | Échec technique ou fonctionnel simulé | Erreur intégration — alimente ADR-002 |
| **REJECTED** | Rejet explicite (SSI, validation, règle métier) | Rejets email ADR-003 |
| **PENDING_MANUAL_REVIEW** | En attente analyse ou qualification | Email A_QUALIFIER, anomalie Nouvelle |
| **MANUAL_RECOVERY_TRIGGERED** | Reprise manuelle simulée déclenchée | ADR-002 — action utilisateur |
| **MANUAL_RECOVERY_SUCCESS** | Reprise simulée réussie | Cas CF9 résolu |
| **MANUAL_RECOVERY_FAILED** | Reprise simulée échouée | Erreur persistante |
| **IGNORED_NON_BLOCKING** | Anomalie connue, non bloquante | Notification échouée non critique |

---

## 8. Distinction message métier / log technique

Le **message visible** dans l'écran anomalies (ADR-002) doit rester **compréhensible et non verbeux** — langage métier pour manager opérationnel ou support. Le **log technique minimal** sert à **tracer le contexte** pour QA, SSI et audit — sans devenir un outil complet de debug.

- **aucune donnée sensible** ne doit être exposée dans les messages visibles ;
- le log technique **ne doit pas** être affiché intégralement dans l'UI ;
- cette distinction **prolonge ADR-002** (message métier vs log) et **ADR-003** (rejet non verbeux).

| Élément | Visible utilisateur | Journalisé minimalement |
|---------|--------------------|-----------------------|
| **Source inconnue** | « Email rejeté — source non reconnue » | domaine=email, statut=REJECTED, code=REJETE_SOURCE_INCONNUE, horodatage, ref |
| **Expéditeur non autorisé** | « Email rejeté — expéditeur non autorisé » | domaine=email, statut=REJECTED, code=REJETE_EXPEDITEUR_NON_AUTORISE, expéditeur hash/ref |
| **Pièce jointe invalide** | « Email rejeté — pièce jointe non conforme » | domaine=email, statut=REJECTED, type PJ, taille — pas de contenu PJ |
| **Échec sync CRM** | « Synchronisation CRM échouée — reprise disponible » | domaine=crm, statut=FAILED, endpoint, code erreur, corrélation anomalie |
| **Conflit planning** | « Conflit de créneau — choisir un autre créneau » | domaine=calendrier, statut=FAILED, refs créneau/intervention |
| **Échec notification** | « Notification client non envoyée » | domaine=notification, statut=FAILED ou IGNORED_NON_BLOCKING |
| **Reprise manuelle effectuée** | « Reprise effectuée » / « Échec confirmé » | statut=MANUAL_RECOVERY_SUCCESS ou MANUAL_RECOVERY_FAILED, acteur, horodatage |

*Point ouvert UX (ux-ui-brief-validation §4) : niveau détail log vs message métier — résolu par cette ADR au niveau architecture, implémentation Figma ultérieure.*

---

## 9. Conséquences positives

- **Traçabilité minimale** — chaque flux, rejet et reprise laisse une trace structurée ;
- **Crédibilité SSI** — rejets email et erreurs intégration auditables (RG-I07) ;
- **Testabilité QA** — vérification logs dans scénarios CF9, email, non happy path ;
- **Cohérence avec écran anomalies** — corrélation log ↔ anomalie visible ;
- **Meilleure compréhension exploitation** — volume et gravité maîtrisables ;
- **Base pour contrôle Notion / gouvernance** — jalon architecture traçable ;
- **Base pour conservation future** — ADR-CAND-005 pourra étendre durée/volume ;
- **Capitalisation SFIA** — standard journalisation minimale des flux simulés.

---

## 10. Conséquences négatives / coûts

- **Effort de structuration supplémentaire** — schéma log minimal à maintenir ;
- **Risque de surjournalisation** — trop d'événements ou champs inutiles ;
- **Risque d'exposition de données sensibles** si mal cadré (R-S02 inverse) ;
- **Nécessité de maintenir cohérence** logs / anomalies / contrats ADR-001 ;
- **Limites pour exploitation réelle** — pas de corrélation avancée ni alertes ;
- **Conservation encore à instruire** dans ADR-CAND-005 (durée, archivage).

---

## 11. Garde-fous

- [ ] ne pas créer de **supervision complète** ;
- [ ] ne pas connecter de **SIEM** ;
- [ ] ne pas stocker de **données sensibles complètes** dans les logs ;
- [ ] ne pas stocker le **corps complet des emails** dans les logs ;
- [ ] ne pas stocker les **pièces jointes** dans les logs ;
- [ ] ne pas exposer de **log technique complet** dans l'UI ;
- [ ] **limiter les événements** au MVP (§5) ;
- [ ] **relier les logs** aux contrats **ADR-001** ;
- [ ] **relier les logs** aux anomalies **ADR-002** ;
- [ ] **relier les logs** aux rejets email **ADR-003** ;
- [ ] **reporter conservation longue** à **ADR-CAND-005**.

---

## 12. Impacts projet

| Domaine | Impact |
|---------|--------|
| **MVP** | Traçabilité flux simulés, rejets, reprises — sans SIEM ni supervision |
| **UX/UI** | Message métier visible ; log technique hors UI — point ouvert UX résolu au niveau ADR |
| **QA** | Vérification logs dans scénarios ; corrélation anomalie ↔ log |
| **SSI** | Auditabilité rejets email ; traçabilité erreurs ; pas de données sensibles en log |
| **Exploitation** | Volume logs maîtrisé ; pas d'ops avancée MVP |
| **Future architecture** | Extension conservation (ADR-CAND-005) ; SIEM post-MVP |
| **Notion / gouvernance** | Jalon ADR P1 complet — sync après consolidation, pas maintenant |

---

## 13. Impacts SFIA

| Asset SFIA | Impact |
|------------|--------|
| `docs/practices/roles/architect-method.md` | Enrichissement **recommandé** — bloc ADR P1 consolidé (tâche suivante) |
| `docs/practices/roles/rssi-method.md` | Enrichissement **recommandé** — traçabilité rejets, logs sans données sensibles |
| `docs/practices/roles/ux-ui-designer-method.md` | Enrichissement **recommandé** — distinction message métier / log |
| `docs/practices/roles/product-owner-method.md` | Enrichissement **recommandé** — périmètre MVP journalisation minimale |
| `docs/practices/roles/project-manager-method.md` | Enrichissement **recommandé** — jalon architecture P1, sync Notion |
| `prompts/prompt-catalog.md` | PROMPT-ARCH-001, PROMPT-SEC-001 candidats Draft |
| `prompts/architecture/` | Standard journalisation intégration simulée |
| `prompts/security/` | Checklist logs sans données sensibles |
| **Futur Template Minimal Logging Matrix** | §5 + §6 + §8 |
| **Futur Standard journalisation minimale des flux simulés** | Option B ADR-CAND-004 retenue |
| **Futur Checklist logs sans données sensibles** | §6 exclusions + §11 garde-fous |

---

## 14. Rôles mobilisés

| Rôle | Contribution |
|------|--------------|
| **Architecte** | Décision structurante ; schéma log minimal ; corrélation contrats / anomalies |
| **RSSI** | Exclusion données sensibles ; auditabilité rejets ; préparation ADR-CAND-005 |
| **QA / Testeur** | Scénarios vérification logs ; corrélation anomalie ↔ événement |
| **UX/UI Designer** | Distinction message métier visible / log technique hors UI |
| **Product Owner** | Validation périmètre minimal ; pas de supervision complète MVP |
| **Chef de projet** | Traçabilité clôture bloc ADR P1 ; gouvernance Git |

---

## 15. Prompts impactés

| Prompt candidat | Impact |
|-----------------|--------|
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Bloc ADR P1 complet — candidat **Draft** recommandé |
| **PROMPT-SEC-001** — Revue canal email sécurisé | Logs rejets email — candidat **Draft** recommandé |
| **PROMPT-UX-001** — Brief UX/UI avant Figma | Distinction message / log — Figma autorisé post-ADR P1 |
| **PROMPT-ROLE-003** — Extraction méthode rôle | Enrichissement méthodes post-ADR-004 — tâche suivante |
| **PROMPT-GOV-001** — Synchronisation gouvernance Notion projet | Jalon architecture P1 — pas maintenant |

---

## 16. Relations avec les autres ADR

| ADR | Relation |
|-----|----------|
| **ADR-001** — Contrats API documentés avec implémentation simulée | **Prérequis** — événements flux issus des contrats simulés |
| **ADR-002** — Gestion visible des erreurs avec reprise manuelle | **Complémentaire** — logs corrélation anomalies ; reprises traçables |
| **ADR-003** — Canal email sécurisé non principal | **Complémentaire** — logs réceptions, rejets, doublons email |
| **ADR-CAND-005** — Conservation fictive photos, signatures et logs | **Suivante** — durée/volume conservation logs — instruction P2 |

---

## 17. Critères de validation de l'ADR

- [x] la décision est reliée à **ADR-CAND-004** ;
- [x] la décision est **cohérente avec ADR-001** ;
- [x] la décision est **cohérente avec ADR-002** ;
- [x] la décision est **cohérente avec ADR-003** ;
- [x] la journalisation reste **minimale** ;
- [x] **aucune supervision complète** n'est produite ;
- [x] **aucun SIEM** n'est connecté ;
- [x] les **données sensibles sont exclues** des logs ;
- [x] les **impacts projet** sont identifiés ;
- [x] les **impacts SFIA** sont identifiés ;
- [x] les **rôles mobilisés** sont documentés ;
- [x] les **prompts impactés** sont identifiés ;
- [x] les **garde-fous** sont explicites.

---

## 18. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Template ADR | Structure présente ADR-004 | Template |
| Template Minimal Logging Matrix | §5 périmètre + §6 champs + §7 statuts | Template |
| Standard journalisation minimale | Option B retenue — flux simulés MVP | Standard |
| Checklist logs sans données sensibles | §6 exclusions + §11 garde-fous | Checklist |
| Checklist ADR guardrails | §11 | Checklist |
| Matrice ADR → prompts | §15 | Template |
| Matrice ADR → rôles | §14 | Template |

---

## 19. Contrôle capitalisation rôle

Après **ADR-004**, le bloc **ADR-001 / ADR-002 / ADR-003 / ADR-004** est **consolidé**.

| Méthode | Enrichissement immédiat ? | Décision |
|---------|---------------------------|----------|
| `docs/practices/roles/architect-method.md` | Non — **tâche suivante** | Enrichir : contrats API simulés, erreurs visibles, journalisation minimale |
| `docs/practices/roles/rssi-method.md` | Non — **tâche suivante** | Enrichir : email sécurisé, rejets, logs sans données sensibles |
| `docs/practices/roles/ux-ui-designer-method.md` | Non — **tâche suivante** | Enrichir : écran anomalies, message métier vs log |
| `docs/practices/roles/product-owner-method.md` | Non — **tâche suivante** | Enrichir : périmètre MVP, ARB-MVP-04/05, canal email |
| `docs/practices/roles/project-manager-method.md` | Non — **tâche suivante** | Enrichir : jalon ADR P1, gouvernance, sync Notion |

**Les méthodes rôle ne sont pas modifiées dans cette tâche ADR-004.**

L'enrichissement devra couvrir :

- contrats API simulés ;
- erreurs visibles ;
- email sécurisé secondaire ;
- journalisation minimale ;
- savoir-faire ;
- savoir-être ;
- garde-fous à réutiliser dans les futurs projets SFIA.

---

## 20. Prochaines actions

- créer une **tâche d'enrichissement des méthodes rôle** après ADR P1 ;
- enrichir en priorité **Architecte, RSSI, UX/UI Designer, Product Owner, Chef de projet** ;
- formaliser **PROMPT-ARCH-001** en Draft si nécessaire ;
- formaliser **PROMPT-SEC-001** en Draft si nécessaire ;
- préparer une **synthèse architecture P1** (ADR-001 à ADR-004) ;
- synchroniser **Notion** après consolidation du jalon architecture — **pas maintenant**.

---

## 21. Conclusion

Cette ADR formalise la **journalisation minimale structurée** des flux simulés, erreurs visibles, rejets email et reprises manuelles du MVP Interv360.

Elle **clôture le premier bloc d'ADR P1** avec ADR-001, ADR-002 et ADR-003, sans produire de supervision complète, SIEM, architecture technique détaillée ou politique complète de conservation.

**Prochaine tâche recommandée : enrichissement des méthodes rôle après ADR P1.**

---

*ADR-004 — projet Interv360, phase 02-architecture, gouvernance SFIA.*

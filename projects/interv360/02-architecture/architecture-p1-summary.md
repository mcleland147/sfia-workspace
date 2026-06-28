# Interv360 — Synthèse architecture P1

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Jalon** : Architecture P1  
**Statut** : Done  
**Type** : Synthèse de jalon  
**Source** : ADR-001 à ADR-004 + enrichissement méthodes rôle + prompts Draft  
**Objet** : consolidation du premier bloc architecture avant synchronisation Notion

---

## 1. Objectif du document

Cette synthèse **consolide le premier jalon architecture P1** avant synchronisation Notion.

Ce document :

- **ne crée pas** de nouvelle décision ;
- **ne remplace pas** les ADR formelles (ADR-001 à ADR-004) ;
- **ne produit pas** d'architecture technique complète ;
- **ne produit pas** de backlog, user stories, maquettes, Figma ou code ;

… et sert à **préparer la gouvernance** et la **capitalisation SFIA** du jalon Architecture P1.

---

## 2. Synthèse exécutive

Le **bloc ADR P1 est clôturé** : quatre décisions structurantes sont **acceptées** (contrats API simulés, erreurs visibles avec reprise manuelle, email sécurisé secondaire, journalisation minimale).

Le **MVP reste basé sur des intégrations simulées** documentées par contrats fonctionnels — aucune intégration réelle, aucun SIEM, aucune supervision complète au stade actuel.

Les **erreurs d'intégration sont visibles et actionnables** via un écran anomalies avec reprise manuelle simulée ; le **retry automatique est hors MVP**.

L'**email est un canal secondaire sécurisé** (`POST /email/intake` simulé) ; le **CRM simulé reste le canal principal**.

La **journalisation reste minimale** — traçabilité structurée sans dump de données sensibles ni politique complète de conservation.

Les **méthodes rôle** (Architecte, RSSI, UX/UI Designer, Product Owner, Chef de projet) ont été **enrichies** après consolidation du bloc ADR.

Deux **prompts SFIA** sont passés **Draft** : PROMPT-ARCH-001 et PROMPT-SEC-001.

Le jalon est **prêt pour une synchronisation Notion** en mode gouvernance (statuts, synthèse, prochaines actions — sans duplication des ADR complètes).

---

## 3. Décisions ADR P1 acceptées

| ADR | Sujet | Décision acceptée | Impact principal |
|-----|-------|-------------------|------------------|
| **ADR-001** | Contrats API documentés avec implémentation simulée | Option C retenue — contrats formalisés, exécution simulée | Fondation intégrations CRM, calendrier, notifications, facturation, email |
| **ADR-002** | Gestion visible des erreurs avec reprise manuelle | Niveau 3 — écran anomalies + reprise simulée ; retry hors MVP | Transparence erreurs, CF9 démontrable, Error Matrix |
| **ADR-003** | Canal email sécurisé non principal | Email secondaire via `POST /email/intake` simulé ; CRM principal | SSI canal simulé, rejets tracés, doublons cross-canal |
| **ADR-004** | Journalisation minimale des flux et rejets | Logs structurés minimaux ; pas de SIEM ; conservation reportée | Traçabilité QA/SSI, distinction message métier / log technique |

---

## 4. Vue consolidée des choix d'architecture

| Domaine | Choix consolidé | Source |
|---------|-----------------|--------|
| **Intégrations externes** | Simulées au MVP — six domaines cadrés | ADR-001 |
| **Contrats API / fonctionnels** | Documentés (endpoints, statuts, erreurs) ; implémentation simulée | ADR-001 |
| **Erreurs visibles** | Écran anomalies ; message métier compréhensible | ADR-002 |
| **Reprise manuelle** | Simulée — action utilisateur, pas retry auto | ADR-002 |
| **Retry automatique** | **Hors MVP** — report post-MVP | ADR-002 |
| **Canal email** | Secondaire, sécurisé, simulé | ADR-003 |
| **Messagerie réelle** | **Non connectée** au MVP | ADR-003 |
| **Journalisation** | Minimale structurée — champs obligatoires limités | ADR-004 |
| **SIEM / supervision** | **Hors MVP** | ADR-004 |
| **Conservation longue** | Reportée — ADR-CAND-005 (P2) | ADR-004 |
| **Figma** | Autorisé **après** prise en compte décisions structurantes ; pas déclenché par ce jalon | README phase, ADR-002 |
| **Backlog / user stories** | **Hors périmètre** phase architecture ADR | README phase |
| **Code** | **Hors périmètre** | README phase |

---

## 5. Ce qui est explicitement hors périmètre à ce stade

- intégrations réelles ;
- retry automatique ;
- supervision complète ;
- SIEM ;
- politique complète de conservation ;
- backlog ;
- user stories ;
- delivery ;
- code applicatif ;
- maquettes / Figma ;
- architecture technique complète non justifiée.

---

## 6. Valeur projet produite

| Valeur projet | Description |
|---------------|-------------|
| **Crédibilité du démonstrateur** | Orchestration SAV simulée avec contrats documentés |
| **Testabilité des intégrations** | Error Matrix, scénarios non happy path, logs vérifiables |
| **Visibilité des erreurs** | Anomalies visibles, reprise manuelle simulée |
| **Meilleure prise en compte SSI** | Canal email encadré, rejets tracés, données sensibles exclues |
| **Traçabilité minimale** | Flux, rejets, reprises journalisés sans sur-exposition |
| **Préparation phase Figma / conception** | Décisions UX utiles stabilisées (anomalies, message métier) |
| **Meilleure gouvernance de phase** | Jalon consolidé, trajectoire lisible, interdits respectés |

---

## 7. Valeur SFIA produite

| Valeur SFIA | Description |
|-------------|-------------|
| **Standards réutilisables** | Contrats API simulés, erreurs visibles, canal secondaire sécurisé, journalisation minimale |
| **Templates candidats** | API Contract Framing, Error Matrix, Minimal Logging Matrix, Secure Email Intake |
| **Checklists candidates** | ADR guardrails, logs sans données sensibles, SSI Email Intake |
| **Méthodes rôle enrichies** | 5 méthodes — §14 Apprentissages ADR P1 |
| **Prompts Draft créés** | PROMPT-ARCH-001, PROMPT-SEC-001 |
| **Règles phase gate / ADR** | Bloc ADR cohérent, capitalisation différée, Git/Notion |
| **Savoir-faire** | Instruction ADR, contrats simulés, distinction message/log |
| **Savoir-être** | Challenger sans bloquer, protéger MVP, capitaliser au bon moment |

---

## 8. Méthodes rôle enrichies

| Méthode rôle | Enrichissement principal |
|--------------|--------------------------|
| **Architecte** | ADR avant architecture ; contrats simulés ; dépendances ADR ; standards Error Matrix / Logging |
| **RSSI** | SSI canal simulé ; rejets ; logs sans données sensibles ; conservation reportée |
| **UX/UI Designer** | Figma post-ADR ; écran anomalies ; message métier vs log technique |
| **Product Owner** | MVP vs réalisme ; simulation crédible ; protection arbitrages via ADR |
| **Chef de projet** | Phase gate ; bloc ADR ; capitalisation différée ; Git/Notion |

Source détaillée : `role-methods-enrichment-after-adr-p1.md`

---

## 9. Prompts SFIA formalisés

| Prompt | Statut | Usage |
|--------|--------|-------|
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | **Draft** | Revue structurée intégrations, Error Matrix, journalisation, ADR |
| **PROMPT-SEC-001** — Revue canal email sécurisé | **Draft** | Revue SSI canal email/intake, rejets, visibilité, logs |

**Note :** le catalogue `prompts/prompt-catalog.md` n'a **pas encore été mis à jour** — PROMPT-ARCH-001 et PROMPT-SEC-001 y figurent encore en statut **Candidat**. Mise à jour prévue dans une tâche dédiée.

---

## 10. Impacts sur la suite du projet

| Suite | Impact du jalon P1 |
|-------|-------------------|
| **Figma / UX/UI** | Décisions structurantes utiles stabilisées ; Figma possible post-ADR P1 (points ouverts UX conservés) |
| **QA** | Error Matrix, scénarios CF9/email, vérification logs — base prête |
| **Architecture détaillée future** | Fondations P1 posées ; stack et composants hors scope actuel |
| **ADR P2** | CAND-005 à 009 (conservation, notifications, signature, dashboards, IA) — instruction selon priorisation |
| **Notion** | Jalon prêt pour sync gouvernance — statuts, synthèse, prochaines actions |
| **Prompts** | Catalogue à mettre à jour ; passage Tested après usage hors pilote |
| **Méthodes rôle** | Enrichissement P1 fait ; P2 et delivery continueront l'évolution |
| **Delivery futur** | Explicitement non déclenché par ce jalon |

---

## 11. Points ouverts après P1

| Point ouvert | Pourquoi ouvert | Traitement prévu |
|--------------|-----------------|------------------|
| **Conservation photos / signatures / logs** | ADR-CAND-005 non instruite ; ARB-MVP-06 | ADR P2 — instruction conservation fictive |
| **Notifications client** | ADR-CAND-006 P2 | ADR P2 ou validation périmètre maintenu |
| **Signature client optionnelle** | ADR-CAND-007 P2 | ADR P2 |
| **Dashboard SAV / vue dirigeant** | ADR-CAND-008 P2 ; brief UX validé | ADR P2 ou préparation Figma |
| **IA légère post-MVP** | ADR-CAND-009 P3 | Report explicite post-MVP |
| **Accès par profil** | Non tranché en P1 | Architecture ou ADR sécurité future |
| **Catalogue prompts à mettre à jour** | Fichiers Draft créés, catalogue inchangé | Tâche dédiée Candidat → Draft |
| **Synchronisation Notion** | Jalon consolidé, pas encore publié | Prochaine action gouvernance |

---

## 12. Préparation synchronisation Notion

La prochaine synchronisation Notion doit rester une **synthèse de gouvernance** — pas une duplication du contenu Git.

**Éléments à inclure :**

| Élément | Valeur gouvernance |
|---------|-------------------|
| Jalon Architecture P1 | **Done** |
| ADR-001 à ADR-004 | **Accepted** |
| Méthodes rôle enrichies | **Done** (5 rôles) |
| PROMPT-ARCH-001 | **Draft** |
| PROMPT-SEC-001 | **Draft** |
| Prochaines actions | Sync Notion ; catalogue prompts ; Figma ou ADR P2 |
| Limites hors périmètre | Intégrations réelles, delivery, backlog, code, Figma non déclenchés |

**Notion ne doit pas** dupliquer les ADR complètes ni les prompts complets — renvoi vers Git comme source détaillée versionnée.

---

## 13. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Architecture P1 Summary | Présent document | Synthèse jalon |
| Standard contrats API simulés | ADR-001 | Standard |
| Standard erreurs visibles + reprise manuelle | ADR-002 | Standard |
| Standard canal secondaire sécurisé | ADR-003 | Standard |
| Standard journalisation minimale | ADR-004 | Standard |
| Template Error Matrix | ADR-002 | Template |
| Template Minimal Logging Matrix | ADR-004 | Template |
| PROMPT-ARCH-001 | `prompts/architecture/` | Prompt Draft |
| PROMPT-SEC-001 | `prompts/security/` | Prompt Draft |
| Role Methods enrichment after ADR P1 | `role-methods-enrichment-after-adr-p1.md` | Synthèse capitalisation |

---

## 14. Décision de jalon

**Le jalon Architecture P1 est considéré comme consolidé.**

**Conditions :**

- il **peut être synchronisé** dans Notion en mode gouvernance ;
- il **ne déclenche pas** encore le delivery ;
- il **ne déclenche pas automatiquement** Figma ;
- il **autorise** la préparation de la suite **UX/UI / Figma** ou **ADR P2** selon priorisation produit.

---

## 15. Prochaines actions recommandées

1. **Préparer la synchronisation Notion** du jalon Architecture P1 ;
2. **Mettre à jour le catalogue prompts** pour passer PROMPT-ARCH-001 et PROMPT-SEC-001 de Candidat à Draft ;
3. **Décider** si la suite projet part vers **Figma / UX/UI** ou **ADR P2** ;
4. **Préparer une éventuelle synthèse** pour ouverture Figma si choix UX/UI ;
5. **Instruire ADR P2** (CAND-005 à 008) si choix architecture.

---

## 16. Conclusion

Le **jalon Architecture P1 est consolidé**.

Les **décisions structurantes** ont été formalisées (ADR-001 à ADR-004), les **méthodes rôle enrichies**, les **prompts prioritaires passés en Draft** et la **capitalisation SFIA réalisée**.

Le projet peut maintenant **synchroniser ce jalon dans Notion** avant de décider de la suite : **UX/UI / Figma** ou **ADR P2**.

---

*Synthèse produite dans le cadre du projet Interv360 — gouvernance SFIA.*

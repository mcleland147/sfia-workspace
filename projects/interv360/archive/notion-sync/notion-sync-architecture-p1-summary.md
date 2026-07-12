# Interv360 — Préparation sync Notion Architecture P1

**Projet** : PRJ-INTERV360
**Phase** : 02-architecture
**Jalon** : Architecture P1
**Statut jalon** : Done
**Type** : préparation synchronisation Notion
**Source détaillée** : Git
**Mode Notion** : gouvernance uniquement
**Publication Notion** : Non réalisée dans cette tâche

---

## 1. Objectif

Ce document **prépare la synchronisation Notion** du jalon **Architecture P1** du projet Interv360.

- **Notion** doit afficher le statut, la synthèse, les décisions clés et les prochaines actions ;
- **Git** conserve les ADR, prompts et méthodes rôle détaillées (`projects/interv360/02-architecture/`, `docs/methods/roles/`, `prompts/`) ;
- **Cette tâche ne publie rien dans Notion** — elle produit une synthèse et un payload JSON prêts à l'emploi.

Source de référence : `architecture-p1-summary.md`

---

## 2. Mise à jour projet Notion prévue

| Champ Notion | Valeur proposée |
|--------------|-----------------|
| **Statut projet** | En cours |
| **Phase actuelle** | 02-architecture |
| **Jalon courant** | Architecture P1 |
| **Statut jalon** | Done |
| **Dernier jalon terminé** | Architecture P1 |
| **Prochaine action** | Décider suite UX/UI/Figma ou ADR P2 |
| **Gouvernance** | Git source détaillée / Notion synthèse |
| **Risque principal** | Dérive vers delivery, backlog ou Figma sans décision |
| **Décision de jalon** | Architecture P1 consolidé |

---

## 3. Synthèse courte à publier dans Notion

Le **bloc ADR P1 est clôturé** : ADR-001 à ADR-004 sont **acceptées**. Le MVP repose sur des **intégrations simulées documentées**, des **erreurs visibles avec reprise manuelle** (retry automatique hors MVP), un **email sécurisé secondaire** et une **journalisation minimale** sans SIEM ni supervision complète.

Les **méthodes rôle** (Architecte, RSSI, UX/UI Designer, Product Owner, Chef de projet) ont été **enrichies**. **PROMPT-ARCH-001** et **PROMPT-SEC-001** sont en **Draft**.

La **suite est à arbitrer** : voie **UX/UI/Figma** ou voie **ADR P2**. Delivery, backlog, code et Figma ne sont **pas déclenchés** par ce jalon.

---

## 4. Décisions clés à afficher dans Notion

| Décision | Statut | Source Git |
|----------|--------|------------|
| **ADR-001** — Contrats API simulés | Accepted | `adr/adr-001-api-contracts-simulated-implementation.md` |
| **ADR-002** — Erreurs visibles + reprise manuelle | Accepted | `adr/adr-002-visible-integration-errors-manual-recovery.md` |
| **ADR-003** — Email sécurisé secondaire | Accepted | `adr/adr-003-secure-email-secondary-channel.md` |
| **ADR-004** — Journalisation minimale | Accepted | `adr/adr-004-minimal-flow-rejection-logging.md` |
| **Méthodes rôle enrichies** | Done | `role-methods-enrichment-after-adr-p1.md` + `docs/methods/roles/` |
| **PROMPT-ARCH-001** | Draft | `prompts/architecture/prompt-arch-001-revue-integrations-et-erreurs.md` |
| **PROMPT-SEC-001** | Draft | `prompts/security/prompt-sec-001-revue-canal-email-securise.md` |
| **Architecture P1 Summary** | Done | `architecture-p1-summary.md` |

*Chemins relatifs à `projects/interv360/02-architecture/` sauf prompts et méthodes rôle.*

---

## 5. Limites hors périmètre à afficher

- pas d'intégrations réelles ;
- pas de retry automatique ;
- pas de supervision complète ;
- pas de SIEM ;
- pas de politique complète de conservation ;
- pas de backlog ;
- pas de user stories ;
- pas de delivery ;
- pas de code ;
- pas de Figma déclenché automatiquement.

---

## 6. Valeur projet à afficher

| Valeur projet | Synthèse |
|---------------|----------|
| **Démonstrateur crédible** | Contrats API simulés, orchestration SAV |
| **Intégrations testables** | Six domaines cadrés, Error Matrix |
| **Erreurs visibles** | Écran anomalies, reprise manuelle simulée |
| **Email sécurisé cadré** | Canal secondaire, rejets SSI tracés |
| **Journalisation minimale** | Traçabilité sans sur-exposition |
| **Base pour QA** | Scénarios non happy path, logs vérifiables |
| **Base pour UX/UI** | Décisions structurantes stabilisées avant Figma |

---

## 7. Valeur SFIA à afficher

| Valeur SFIA | Synthèse |
|-------------|----------|
| **Standards réutilisables** | Contrats simulés, erreurs visibles, email secondaire, journalisation minimale |
| **Templates candidats** | Error Matrix, Minimal Logging Matrix, Secure Email Intake |
| **Méthodes rôle enrichies** | 5 rôles — apprentissages ADR P1 |
| **Prompts Draft** | PROMPT-ARCH-001, PROMPT-SEC-001 |
| **Savoir-faire** | Instruction ADR, distinction contrat/implémentation, message/log |
| **Savoir-être** | Challenger sans bloquer, protéger MVP, capitaliser après bloc |
| **Règle capitalisation** | Enrichissement méthodes rôle après bloc ADR cohérent |

---

## 8. Prochaines actions à afficher dans Notion

1. Mettre à jour le **catalogue prompts** pour passer PROMPT-ARCH-001 et PROMPT-SEC-001 de Candidat à Draft.
2. **Décider** si la suite projet part vers **UX/UI/Figma** ou **ADR P2**.
3. **Préparer une ouverture UX/UI/Figma** si cette voie est retenue.
4. **Instruire ADR P2** si la voie architecture est retenue.
5. **Maintenir Notion en synthèse de gouvernance**, sans duplication Git.

---

## 9. Contrôle non-duplication

- [x] les ADR complètes **ne sont pas** copiées dans Notion ;
- [x] les prompts complets **ne sont pas** copiés dans Notion ;
- [x] les méthodes rôle complètes **ne sont pas** copiées dans Notion ;
- [x] Notion affiche uniquement les **statuts, synthèses et liens Git** ;
- [x] Git reste la **source détaillée versionnée**.

---

## 10. Payload JSON

Voir `notion-sync-architecture-p1-payload.json` pour la proposition de payload structuré (sans appel API Notion).

---

*Préparation sync Notion — projet Interv360, jalon Architecture P1 — gouvernance SFIA.*

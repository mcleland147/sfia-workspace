# Interv360 — Enrichissement méthodes rôle après ADR P1

**Projet** : PRJ-INTERV360  
**Phase** : 02-architecture  
**Source** : ADR-001 à ADR-004  
**Type** : synthèse d'enrichissement méthodes rôle  
**Statut** : Done

---

## 1. Objectif

Ce document trace l'**enrichissement des méthodes rôle SFIA** réalisé après **consolidation du bloc ADR P1** en phase architecture Interv360.

ADR-004 indiquait explicitement que l'enrichissement des méthodes rôle devait être réalisé dans une **tâche suivante**, une fois le bloc cohérent (contrats API simulés, erreurs visibles, email sécurisé secondaire, journalisation minimale) formalisé.

Les apprentissages sont capitalisés de manière **générique et réutilisable** dans `docs/methods/roles/` — pas comme documentation Interv360 exclusive.

---

## 2. Bloc ADR P1 consolidé

| ADR | Sujet | Apprentissage principal |
|-----|-------|-------------------------|
| **ADR-001** | Contrats API documentés avec implémentation simulée | Distinguer contrat documenté et implémentation simulée ; pas d'intégrations réelles au MVP |
| **ADR-002** | Gestion visible des erreurs avec reprise manuelle | Erreurs visibles écran anomalies ; retry automatique hors MVP |
| **ADR-003** | Canal email sécurisé non principal | Canal secondaire encadré SSI ; CRM / flux principal prioritaire |
| **ADR-004** | Journalisation minimale des flux et rejets | Logs structurés minimaux ; pas de SIEM ; distinction message métier / log technique |

---

## 3. Méthodes enrichies

| Méthode rôle | Enrichissement réalisé | Type d'apprentissage |
|--------------|------------------------|----------------------|
| `architect-method.md` | §14 Apprentissages ADR P1 — ADR avant architecture, contrats simulés, dépendances ADR, standards | Savoir-faire, savoir-être, garde-fous |
| `rssi-method.md` | §14 SSI canal simulé, rejets, logs sans données sensibles, conservation reportée | Savoir-faire, savoir-être, garde-fous |
| `ux-ui-designer-method.md` | §14 Figma post-ADR, écran anomalies, message métier vs log | Savoir-faire, savoir-être, garde-fous |
| `product-owner-method.md` | §14 MVP vs réalisme, simulation crédible, ADR protège arbitrages | Savoir-faire, savoir-être, garde-fous |
| `project-manager-method.md` | §14 Phase gate, bloc ADR, capitalisation différée, Git/Notion | Savoir-faire, savoir-être, garde-fous |

---

## 4. Apprentissages transverses

- **Contrats simulés documentés** — crédibilité sans dépendance systèmes réels.
- **Erreurs visibles** — transparence, non happy path démontrable.
- **Email sécurisé secondaire** — SSI sur canal simulé non principal.
- **Journalisation minimale** — traçabilité sans supervision complète.
- **Distinction message métier / log technique** — UI compréhensible, logs hors exposition sensible.
- **Décision ADR avant architecture complète** — maturité progressive.
- **Capitalisation après bloc cohérent** — enrichissement méthodes post-ADR P1, pas ADR par ADR.
- **Valeur projet + valeur SFIA** — double production à chaque jalon.

---

## 5. Savoir-être capitalisé

- **Challenger sans bloquer** — RSSI, Architecte, PO.
- **Protéger le MVP** — contre dérive architecture, fonctionnelle, delivery.
- **Ne pas sur-spécifier** — refuser fausse précision technique prématurée.
- **Rendre les risques visibles** — anomalies, rejets, traçabilité.
- **Tenir la trajectoire** — phases, interdits, jalons.
- **Traduire la technique en langage métier** — UX, support, manager.
- **Capitaliser au bon moment** — bloc ADR consolidé avant enrichissement méthodes.

---

## 6. Capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Standard contrats API simulés | ADR-001 + architect-method §14 | Standard |
| Standard erreurs visibles + reprise manuelle simulée | ADR-002 + ux-ui-designer-method §14 | Standard |
| Standard canal secondaire sécurisé | ADR-003 + rssi-method §14 | Standard |
| Standard journalisation minimale | ADR-004 + architect/rssi-method §14 | Standard |
| Template Error Matrix | ADR-002 | Template |
| Template Minimal Logging Matrix | ADR-004 | Template |
| Checklist logs sans données sensibles | ADR-004 + rssi-method §14 | Checklist |
| Règles enrichissement méthodes après bloc ADR | ADR-004 + project-manager-method §14 | Standard |

---

## 7. Prochaines actions

- formaliser **PROMPT-ARCH-001** en Draft ;
- formaliser **PROMPT-SEC-001** en Draft ;
- préparer une **synthèse architecture P1** (ADR-001 à ADR-004) ;
- synchroniser **Notion** après consolidation du jalon architecture ;
- instruire ensuite **ADR P2** si nécessaire (conservation, notifications, dashboard, etc.).

---

*Synthèse produite dans le cadre du projet Interv360 — gouvernance SFIA.*

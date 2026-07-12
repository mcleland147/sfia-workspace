# ADR-CAND-009 — Confirmation report IA légère post-MVP

**Projet** : PRJ-INTERV360
**Phase** : 02-architecture
**Bloc** : ADR P2 — impacts design / MVP
**Statut** : Confirmed — Post-MVP
**Source candidate** : ADR-CAND-009
**Décision** : pas d'ADR MVP formelle à ce stade
**Rôles principaux** : Product Owner, UX/UI Designer, Architecte
**Rôles contributeurs** : Chef de projet, QA / Testeur
**Type** : Confirmation de décision hors MVP

---

## 1. Contexte

Le cadrage a identifié l'**IA légère** comme une **possibilité post-MVP** — priorité basse, instruction différée (`adr-candidates.md` ADR-CAND-009, `framing-review.md` §4, `business-framing.md` Q7/Q15).

Le **MVP est déjà riche** : demandes, interventions, planning, anomalies, notifications, signature optionnelle, dashboards SAV et vue dirigeant séparés (noyau 8 écrans, ARB-MVP-07).

Les **ADR-005 à ADR-008** ont défini des **impacts design importants** : conservation fictive, notifications sans portail, signature structurée, séparation dashboards.

Introduire de l'**IA dans Figma** maintenant risquerait une **surpromesse** produit (R-FG05, R-S07) — assistance, scoring ou prédiction sans cas d'usage ni gouvernance données tranchés.

Avant **UX/UI / Figma**, il faut **confirmer** que l'IA légère est **hors MVP** — pas d'ADR-009 formelle, mais une **note de confirmation** explicite.

---

## 2. Problème à résoudre

**Faut-il représenter une IA légère dans les écrans MVP Interv360, ou confirmer son report post-MVP afin d'éviter une dérive de périmètre et une surpromesse produit avant Figma ?**

Sans clarification, Figma pourrait intégrer badges « IA », recommandations automatiques, scoring ou chatbot — créant une attente non livrée au démonstrateur.

---

## 3. Options étudiées

| Option | Description | Avantages | Limites | Décision |
|--------|-------------|-----------|---------|----------|
| **A — Inclure IA légère dans le MVP** | Assistance intégrée dès démo — résumé CR, classification, priorisation | Valeur différenciante ; modernité perçue | Scope élargi ; coût ; gouvernance données ; surcomplexification | **Rejetée** |
| **B — Prévoir un placeholder IA visible dans Figma** | Zone « bientôt IA » ou badge prospectif sur écrans | Anticipation visuelle ; storytelling | Surpromesse ; confusion utilisateur ; dérive design | **Rejetée** — à éviter sauf mention prospective **très limitée** hors écrans MVP |
| **C — Reporter IA légère post-MVP** | Cas d'usage cadrés ; activation ultérieure ; MVP déterministe | Périmètre maîtrisé ; aligné cadrage ; dashboards lisibles | Valeur IA différée ; opportunité non démontrée | **Retenue** |
| **D — Supprimer définitivement le sujet IA** | Exclusion totale ; pas de documentation future | Simplicité absolue | Perte opportunité documentée ; cas candidats perdus | **Rejetée** |

---

## 4. Décision

**La décision retenue est de reporter l'IA légère post-MVP. Aucun composant IA, assistant, recommandation automatique, scoring intelligent ou prédiction ne doit être représenté dans les écrans MVP Figma.**

Précisions :

- l'**IA légère reste une opportunité post-MVP** — cas candidats documentés, pas d'engagement MVP ;
- **aucun écran IA dédié** n'est prévu ;
- **aucun bouton « recommandation IA »** n'est prévu ;
- **aucun scoring automatique** n'est prévu ;
- **aucun résumé automatique** n'est prévu ;
- **aucun chatbot ou assistant** n'est prévu ;
- les **dashboards** restent basés sur des **KPI simples et lisibles** (ADR-008) ;
- les **anomalies** restent gérées par **règles / statuts**, pas par IA (ADR-002) ;
- cette confirmation **prépare Figma** mais **ne déclenche pas** Figma.

**Pas d'ADR-009 formelle** — la structure projet autorise une **confirmation hors MVP** pour les candidates explicitement reportées (priorité 3, `adr-candidates.md` §5).

---

## 5. Impacts sur Figma

| Zone / écran | Impact | Décision |
|--------------|--------|----------|
| **Dashboard SAV** | Pas de prédictif, scoring ni recommandation IA | KPI déterministes — ADR-008 |
| **Vue dirigeant** | Pas de tendances prédictives IA | Agrégats simples ; pas BI prédictive |
| **Écran anomalies** | Pas de détection anomalie par IA | Règles et statuts — ADR-002 |
| **Fiche demande SAV** | Pas d'aide qualification IA | Qualification manuelle ; statuts métier |
| **Fiche intervention** | Pas de suggestion affectation IA | Planning et règles existantes |
| **Clôture / compte rendu** | Pas de résumé automatique CR | Saisie technicien — ADR-007 |
| **Recherche / qualification** | Pas de classification automatique | Filtres, tris, statuts |
| **Notifications** | Pas d'optimisation envoi par IA | Notifications simulées — ADR-006 |

**Décisions transverses :**

- pas de **composant IA** ;
- pas de **badge IA** ;
- pas de **recommandation automatique** ;
- pas de **scoring IA** ;
- pas de **prédiction** ;
- pas de **chatbot** ;
- pas de **résumé automatique**.

---

## 6. Ce qui reste autorisé au MVP

- **KPI simples** — dashboards SAV et vue dirigeant ;
- **filtres** et **tris** — période, statut, priorité, source ;
- **statuts** — demandes, interventions, notifications, signatures ;
- **règles métier** — qualification, clôture, priorités ;
- **badges** — notification, signature, preuve associée ;
- **alertes déterministes** — retards, anomalies, échecs notification ;
- **messages métier** — historique simplifié, traces ADR-004 ;
- **anomalies visibles** — écran dédié, reprise manuelle simulée ;
- **reprise manuelle simulée** — ADR-002.

Ces éléments **ne doivent pas être présentés comme de l'IA** — libellés explicites : « alerte », « statut », « règle », « indicateur ».

---

## 7. Ce qui est reporté post-MVP

- **aide à la qualification automatique** — classification demandes ;
- **scoring de priorité intelligent** — priorisation assistée ;
- **résumé automatique de demande** — synthèse textuelle ;
- **suggestion d'affectation technicien** — optimisation planning ;
- **prédiction retard** — anticipation dérives délai ;
- **détection anomalie avancée** — au-delà règles/statuts ADR-002 ;
- **assistant conversationnel** — chatbot support ou terrain ;
- **analyse satisfaction client** — NLP ou scoring sentiment ;
- **recommandations dirigeant** — insights automatisés vue consolidée.

*Cas candidats issus `adr-candidates.md` ADR-CAND-009 et `business-framing.md` Q7/Q15 — à instruire avec gouvernance données post-validation démonstrateur.*

---

## 8. Garde-fous UX/UI

- [ ] ne pas représenter de **composant IA** dans Figma MVP ;
- [ ] ne pas créer de **bouton ou badge IA** ;
- [ ] ne pas faire croire à une **automatisation intelligente** ;
- [ ] ne pas transformer des **règles métier simples** en IA ;
- [ ] ne pas créer d'**assistant conversationnel** ;
- [ ] ne pas créer de **scoring automatique** ;
- [ ] ne pas créer de **prédiction** ;
- [ ] conserver les **dashboards lisibles et déterministes** ;
- [ ] garder l'**IA comme opportunité post-MVP documentée**.

---

## 9. Impacts projet

| Domaine | Impact |
|---------|--------|
| **MVP** | Périmètre maîtrisé ; pas d'IA au démonstrateur |
| **UX/UI** | Écrans déterministes ; pas surpromesse avant Figma |
| **QA** | Pas de scénarios IA MVP ; focus règles et statuts |
| **Product Management** | Opportunité IA différée ; roadmap post-MVP |
| **Architecture future** | Points d'extension ; gouvernance données à définir |
| **Gouvernance** | Bloc ADR P2 consolidé — CAND-009 confirmée |
| **Notion** | Sync jalon P2 après synthèse design-impact |

---

## 10. Impacts SFIA

| Asset SFIA | Impact |
|------------|--------|
| `docs/practices/roles/product-owner-method.md` | Enrichissement futur — périmètre IA post-MVP |
| `docs/practices/roles/ux-ui-designer-method.md` | Enrichissement futur — garde-fous anti-surpromesse IA |
| `docs/practices/roles/architect-method.md` | Extension future ; pas intégration IA MVP |
| `docs/practices/roles/project-manager-method.md` | Séquence P2 → synthèse → Figma |
| `prompts/prompt-catalog.md` | PROMPT-UX-001/003 — pas modifié ici |
| `prompts/ux-ui/` | Checklist anti-surpromesse IA |
| `prompts/architecture/` | Pas domaine IA au MVP |
| **Futur Standard IA post-MVP** | §7 cas reportés |
| **Futur Checklist anti-surpromesse IA** | §8 garde-fous |
| **Futur Template AI Opportunity Backlog** | §7 capitalisation |

---

## 11. Rôles mobilisés

| Rôle | Contribution |
|------|--------------|
| **Product Owner** | Confirmation report ; périmètre MVP ; opportunité future |
| **UX/UI Designer** | Garde-fous Figma ; pas composant IA |
| **Architecte** | MVP déterministe ; extension future documentée |
| **QA / Testeur** | Focus scénarios métier ; pas tests IA MVP |
| **Chef de projet** | Clôture bloc P2 ; synthèse design-impact |

---

## 12. Prompts impactés

| Prompt candidat | Impact |
|-----------------|--------|
| **PROMPT-UX-001** — Brief UX/UI avant Figma | Exclusion IA ; garde-fous écrans |
| **PROMPT-UX-002** — Validation brief UX/UI | Checklist anti-surpromesse IA |
| **PROMPT-UX-003** — Revue dashboard KPI UX | KPI déterministes ; pas prédictif |
| **PROMPT-ARCH-001** — Revue intégrations et erreurs | Anomalies par règles ; pas IA |
| **PROMPT-GOV-001** — Sync Notion | Jalon P2 post-synthèse |

*Prompts non modifiés dans cette tâche.*

---

## 13. Critères de validation

- [x] **ADR-CAND-009** est confirmée comme **post-MVP** ;
- [x] **aucune ADR-009 formelle MVP** n'est créée ;
- [x] **aucun composant IA** n'est prévu pour Figma MVP ;
- [x] les **dashboards** restent **déterministes** ;
- [x] les **anomalies** restent gérées par **règles / statuts** ;
- [x] les **impacts UX/UI avant Figma** sont documentés ;
- [x] les **impacts projet** sont identifiés ;
- [x] les **impacts SFIA** sont identifiés ;
- [x] les **rôles mobilisés** sont documentés ;
- [x] les **prompts impactés** sont identifiés ;
- [x] aucun backlog, user story, **Figma ou code** n'est produit.

---

## 14. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Confirmation post-MVP | Présent document ADR-CAND-009 | Confirmation |
| Standard IA post-MVP | §7 cas reportés | Standard |
| Checklist anti-surpromesse IA | §8 | Checklist |
| Template AI Opportunity Backlog | §7 | Template |
| Checklist ADR design-impact | §5 | Checklist |
| Matrice décision → prompts | §12 | Template |
| Matrice décision → rôles | §11 | Template |

---

## 15. Prochaines actions

- préparer la **synthèse ADR P2 design-impact** ;
- enrichir les **méthodes rôle** après consolidation P2 si nécessaire ;
- préparer l'**ouverture UX/UI/Figma** après consolidation bloc ADR P2 ;
- synchroniser **Notion** après consolidation du jalon P2 si nécessaire.

---

## 16. Conclusion

Cette note confirme que l'**IA légère est reportée post-MVP**.

**Aucun composant IA** ne doit être représenté dans les écrans MVP Figma.

Le MVP reste basé sur des **règles métier**, **statuts**, **KPI simples**, **anomalies visibles** et **reprise manuelle simulée**.

L'IA reste une **opportunité future documentée**, à instruire après validation du démonstrateur.

**Figma non déclenché** par cette confirmation.

---

*ADR-CAND-009 — confirmation post-MVP — projet Interv360, phase 02-architecture, bloc ADR P2 — gouvernance SFIA.*

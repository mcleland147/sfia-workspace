# Interv360 — Préparation sync Notion gouvernance QA / Testeur

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Chantier** : QA / Testeur  
**Statut** : Prepared — Not published  
**Type** : Préparation sync Notion gouvernance  
**Objet** : préparer la publication gouvernance de la méthode officielle QA / Testeur et de la famille prompts QA validée  
**Publication Notion** : non exécutée  
**API Notion** : non appelée  
**CMP-001** : non exécuté

**Source décision** : `prompt-catalog-qa-tester-validation.md`  
**Payload** : `notion-sync-qa-tester-governance-payload.json`

---

## 1. Objectif

Cette note **prépare une future synchronisation Notion de gouvernance** pour :

- la **méthode officielle QA / Testeur** ;
- la **famille prompts QA / Testeur** ;
- la **validation manuelle** de cette famille ;
- les **garde-fous de non-delivery**.

Précisions :

- **Git** reste la source détaillée versionnée ;
- **Notion** doit recevoir une **synthèse de gouvernance** uniquement ;
- **aucune publication** n'est faite dans cette tâche ;
- **aucun appel API** Notion ; **aucune exécution** CMP-001.

Modèle de référence : `notion-sync-figma-v1-cmp-publication-log.md` (publication Figma V1 — trace post-exécution).

---

## 2. État du chantier QA / Testeur

| Élément | Statut | Source |
|---------|--------|--------|
| Recherche QA / Testeur | Terminée | `qa-tester-role-research-and-benchmark.md` |
| Cadrage rôle candidat | Terminé | `qa-tester-role-candidate-framing.md` |
| Revue manuelle rôle | Terminée | `qa-tester-role-candidate-review.md` |
| Rôle candidat mature | Validé | Décision revue — méthode officielle autorisée |
| Méthode officielle | Créée | `docs/methods/roles/qa-tester-method.md` |
| Famille prompts QA | Créée | `prompts/qa/qa-tester-prompt-family.md` |
| Validation famille prompts | Terminée | `prompt-catalog-qa-tester-validation.md` |
| Sync Notion | **Préparée** (cette tâche) | Présent document + payload JSON |
| Delivery | **Toujours bloqué** | `figma-v1-closure-summary.md` ; garde-fous QA |

---

## 3. Synthèse méthode officielle QA / Testeur

**Source** : [`docs/methods/roles/qa-tester-method.md`](../../../docs/methods/roles/qa-tester-method.md)

| Dimension | Synthèse |
|-----------|----------|
| **Nature** | Rôle **transverse** SFIA |
| **Contribution** | Qualité, testabilité, maîtrise des risques, traçabilité |
| **Intervention** | Phases **amont** — cadrage, conception, UX/UI, revues |
| **Distinct de** | Recette officielle ; delivery ; automatisation seule |
| **Garde-fou** | Ne déclenche pas seul delivery, backlog, user stories ou code |

Le QA / Testeur apporte une **lecture qualité** complémentaire aux rôles PO, BA, UX/UI, RSSI, Architecte et Chef de projet — sans les remplacer.

---

## 4. Synthèse famille prompts QA / Testeur

**Sources** :

- [`prompts/qa/qa-tester-prompt-family.md`](../../../prompts/qa/qa-tester-prompt-family.md)
- [`prompt-catalog-qa-tester-validation.md`](prompt-catalog-qa-tester-validation.md)
- [`prompts/prompt-catalog.md`](../../../prompts/prompt-catalog.md) §14

| Élément | Détail |
|---------|--------|
| **Prompts candidats** | 10 (PROMPT-QA-001 à PROMPT-QA-010) |
| **Statut famille** | Candidate robuste — validée manuellement |
| **Objectifs principaux** | Testabilité ; revue maquette ; revue transverse ; happy / non happy path ; risques qualité ; stratégie légère ; anomalies métier ; traçabilité ; critères futurs ; garde-fous |
| **Validés** | 7 |
| **Validés avec vigilance** | 3 — PROMPT-QA-006, PROMPT-QA-008, PROMPT-QA-009 |
| **À renforcer** | 0 |

---

## 5. Garde-fous de gouvernance

- [ ] pas de delivery ouvert ;
- [ ] pas de backlog ;
- [ ] pas de user stories ;
- [ ] pas de code ;
- [ ] pas de scénarios de tests Interv360 ;
- [ ] pas de cas de tests détaillés ;
- [ ] pas de stratégie de recette complète ;
- [ ] pas de publication Notion dans cette tâche ;
- [ ] pas d'appel API Notion dans cette tâche ;
- [ ] Git reste source détaillée.

---

## 6. Contenu proposé pour Notion

**Titre proposé** : QA / Testeur — Méthode officielle & prompts candidats validés

**Synthèse publiable** :

- Le rôle **QA / Testeur** est désormais formalisé comme **méthode officielle SFIA**.
- Il contribue à la **qualité**, la **testabilité**, la **maîtrise des risques** et la **traçabilité**.
- Il intervient dès les **phases amont** sans déclencher seul delivery, backlog, user stories ou code.
- Une famille de **10 prompts candidats QA** a été créée et **validée comme candidate robuste**.
- Cette famille outille les analyses de **testabilité**, **revues qualité**, **risques**, **anomalies**, **traçabilité** et **garde-fous**.
- Les prompts **QA-006**, **QA-008** et **QA-009** sont validés **avec vigilance** pour éviter toute dérive vers stratégie complète, matrice de tests détaillée ou user stories.
- Le chantier QA / Testeur reste en **gouvernance méthodologique** ; **aucun delivery** n'est ouvert.

---

## 7. Payload JSON préparé

**Fichier** : `notion-sync-qa-tester-governance-payload.json`

| Champ | Valeur |
|-------|--------|
| `publish_to_notion` | `false` |
| `manual_review_required` | `true` |
| `delivery_status` | `blocked` |
| `source_of_truth` | `git` |
| `status` | `Prepared — Not published` |

Le payload structure la méthode officielle, la famille prompts validée, les garde-fous et les prochaines étapes — **sans déclencher publication**.

---

## 8. Prochaine étape

1. **Relire** cette préparation et le payload JSON ;
2. **Valider manuellement** le payload ;
3. **Préparer éventuellement** une version CMP-compatible (project update) si nécessaire — sur modèle `notion-sync-figma-v1-cmp-project-update.json` ;
4. **Publier ensuite** via CMP-001 dans une **tâche dédiée** ;
5. **Tracer la publication** dans Git après exécution (log type `notion-sync-figma-v1-cmp-publication-log.md`).

---

## 9. Conclusion

La **gouvernance QA / Testeur** est **prête à être synchronisée** dans Notion.

La **méthode officielle** et la **famille prompts QA validée** peuvent être publiées comme **synthèse de gouvernance**, sous réserve de **revue manuelle finale** et d'une **publication CMP-001 dédiée**.

**Aucun delivery n'est ouvert.**

**Aucune API Notion n'a été appelée** dans cette préparation.

---

*Préparation sync Notion gouvernance QA / Testeur — SFIA — non publié.*

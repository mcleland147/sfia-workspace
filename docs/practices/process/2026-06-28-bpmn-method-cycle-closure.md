# SFIA — Clôture du cycle méthode BPMN

**Type** : Synthèse de clôture méthodologique
**Statut** : Draft — prêt pour PR unique
**Domaine** : Process Modeling / BPMN
**Branche** : `method/bpmn-integration-audit`

---

## 1. Objectif

Ce document **clôture le cycle d'intégration BPMN** dans SFIA.

**Précisions :**

- BPMN est désormais documenté comme **capacité méthodologique réutilisable** ;
- le cycle a couvert **audit**, **méthode**, **standards**, **templates** et **prompts** ;
- la méthode est **prête à être revue** dans une PR unique vers `main` ;
- **Interv360** pourra être le **premier projet d'application** après merge ;
- ce document **ne crée pas** de BPMN projet.

---

## 2. Livrables produits

| Phase | Livrable | Rôle | Statut |
|-------|----------|------|--------|
| **A** | `bpmn-method-integration-audit.md` | Audit d'intégration BPMN dans SFIA | Draft — prêt revue PR unique |
| **B** | `bpmn-process-modeling-method.md` | Méthode de modélisation BPMN | Draft — prêt revue PR unique |
| **B** | `bpmn-deliverables-standard.md` | Standard des livrables BPMN projet | Draft — prêt revue PR unique |
| **B** | `bpmn-integration-checklist.md` | Checklist readiness avant cycle BPMN | Draft — prêt revue PR unique |
| **B** | `docs/practices/README.md` | Index méthodes — section `process/` | Draft — prêt revue PR unique |
| **B** | `docs/practices/methods-structure-check.md` | Contrôle structure — référence BPMN | Draft — prêt revue PR unique |
| **C** | `bpmn-process-scope-template.md` | Template cadrage phase BPMN | Draft — prêt revue PR unique |
| **C** | `bpmn-process-analysis-template.md` | Template analyse BPMN | Draft — prêt revue PR unique |
| **C** | `bpmn-cycle-closure-template.md` | Template clôture cycle BPMN projet | Draft — prêt revue PR unique |
| **C** | `bpmn-prompt-family.md` | Famille de prompts PROMPT-BPMN-001 à 007 | Draft — prêt revue PR unique |
| **C** | `docs/templates/README.md` | Index templates — section `process/` | Draft — prêt revue PR unique |
| **C** | `prompts/README.md` | Index prompts — section `bpmn/` | Draft — prêt revue PR unique |
| **C** | `prompts/prompt-catalog.md` | Catalogue — §15 Process Modeling / BPMN | Draft — prêt revue PR unique |
| **Clôture** | `bpmn-method-cycle-closure.md` | Synthèse de clôture cycle méthode | Draft — prêt revue PR unique |

**Total : 14 livrables** (13 phases A–C + ce document de clôture).

---

## 3. Décisions méthodologiques consolidées

| Domaine | Décision | Source |
|---------|----------|--------|
| Positionnement SFIA | BPMN est une **capacité SFIA réutilisable** | `bpmn-method-integration-audit.md` |
| Séquencement | BPMN intervient **après clarification / QA** | `bpmn-method-integration-audit.md` |
| Séquencement | BPMN intervient **avant architecture fonctionnelle détaillée / design** | `bpmn-method-integration-audit.md` |
| Structure projet | `03-process/` doit **précéder** `03-design/` sur les projets concernés | `bpmn-process-modeling-method.md` |
| Outil | **Camunda Modeler** est l'outil recommandé | `bpmn-process-modeling-method.md` |
| Source de vérité | **`.bpmn`** est la source de vérité Git | `bpmn-deliverables-standard.md` |
| Exports | **SVG/PNG** sont des supports de lecture | `bpmn-deliverables-standard.md` |
| Analyse | **Markdown** porte l'analyse et la traçabilité | `bpmn-deliverables-standard.md` |
| ADR | BPMN peut **alimenter les ADR candidates** | `bpmn-process-modeling-method.md` |
| ADR | BPMN **ne remplace pas** les ADR | `bpmn-process-modeling-method.md` |
| Garde-fous | BPMN **ne produit pas** backlog, user stories, tests, code ou delivery | `bpmn-process-modeling-method.md` |
| Notion | **Publication Notion non automatique** | `bpmn-method-integration-audit.md` |

---

## 4. Structure méthodologique ajoutée

```
docs/practices/process/
├── bpmn-method-integration-audit.md
├── bpmn-process-modeling-method.md
├── bpmn-deliverables-standard.md
├── bpmn-integration-checklist.md
└── bpmn-method-cycle-closure.md

docs/templates/process/
├── bpmn-process-scope-template.md
├── bpmn-process-analysis-template.md
└── bpmn-cycle-closure-template.md

prompts/bpmn/
└── bpmn-prompt-family.md
```

Référentiels index mis à jour : `docs/practices/README.md`, `docs/templates/README.md`, `prompts/README.md`, `prompts/prompt-catalog.md` (§15).

---

## 5. Famille de prompts BPMN

| ID | Nom | Rôle |
|----|-----|------|
| **PROMPT-BPMN-001** | Audit readiness BPMN | Vérifier prérequis projet ; verdict Go / No-Go |
| **PROMPT-BPMN-002** | Définir périmètre BPMN | Produire `process-scope.md` |
| **PROMPT-BPMN-003** | Préparer processus principal | Structurer le happy path pour Camunda Modeler |
| **PROMPT-BPMN-004** | Préparer exceptions métier | Identifier et structurer les branches d'exception |
| **PROMPT-BPMN-005** | Préparer anomalies intégration | Flux d'erreur, reprises, ADR candidates |
| **PROMPT-BPMN-006** | Relire BPMN vs règles/statuts | Produire `process-analysis.md` |
| **PROMPT-BPMN-007** | Clôturer cycle BPMN | Produire `process-cycle-closure.md` ; préparer PR unique |

**Précisions :**

- prompts en statut **Draft** ;
- publication Notion **uniquement sur décision explicite ultérieure** ;
- **Git reste la source de vérité**.

---

## 6. Garde-fous respectés

- [x] aucun BPMN projet créé ;
- [x] aucun fichier `.bpmn` créé ;
- [x] aucun dossier `projects/interv360/03-process/` créé ;
- [x] aucun backlog produit ;
- [x] aucune user story produite ;
- [x] aucun cas de test produit ;
- [x] aucun scénario de test produit ;
- [x] aucun code applicatif produit ;
- [x] aucun delivery ouvert ;
- [x] aucune publication Notion réalisée ;
- [x] aucun appel API Notion réalisé ;
- [x] aucun secret affiché ;
- [x] aucune modification `.env` ;
- [x] aucune PR intermédiaire créée.

---

## 7. Points restant à faire après merge

| Sujet | Action future | Phase |
|-------|---------------|-------|
| Application Interv360 | Ouvrir Phase D Interv360 | D |
| Structure projet | Créer `projects/interv360/03-process/` | D |
| Readiness | Appliquer la checklist BPMN à Interv360 | D |
| Cadrage | Créer `process-scope.md` | D |
| Diagramme principal | Produire `interv360-sav-mvp.bpmn` | D |
| Exceptions | Produire `interv360-sav-exceptions.bpmn` | D |
| Intégration | Produire `interv360-integration-errors.bpmn` | D |
| Exports | Créer exports SVG | D |
| Analyse | Créer `process-analysis.md` | D |
| Clôture projet | Créer `process-cycle-closure.md` | D |
| PR projet | Ouvrir PR unique du cycle BPMN Interv360 | D |

---

## 8. Préparation PR unique

| Élément | Valeur |
|---------|--------|
| Branche source | `method/bpmn-integration-audit` |
| Branche cible | `main` |
| Type | Documentation méthode / templates / prompts |
| Code applicatif | Non |
| Notion | Non |
| Delivery | Non |
| Projet Interv360 modifié | Non |

**Commits attendus dans la PR :**

```
docs: close BPMN method integration cycle
docs: add BPMN templates and prompts
docs: add BPMN process modeling method
docs: audit BPMN method integration
```

---

## 9. Recommandation après merge

1. **Revue PR unique** — valider méthode, standards, templates et prompts ;
2. **Merge** vers `main` ;
3. **Suppression** de la branche `method/bpmn-integration-audit` ;
4. **Ouvrir une nouvelle branche dédiée** pour Interv360, par exemple `process/interv360-bpmn-mvp` ;
5. **Lancer Phase D** uniquement après merge confirmé.

---

## 10. Conclusion

Le **savoir-faire BPMN** est désormais intégré dans la méthode SFIA.

Le référentiel sait **où placer BPMN** dans le cycle projet (après clarification, avant architecture fonctionnelle détaillée). Les **standards**, **templates** et **prompts** sont disponibles pour réutilisation multi-projets.

**Interv360** peut devenir le **premier projet d'application** après merge de cette PR unique.

---

*Synthèse de clôture — cycle méthode BPMN — SFIA — Draft.*

# Interv360 — Validation catalogue prompts QA / Testeur

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Chantier** : QA / Testeur  
**Objet revu** : `prompts/qa/qa-tester-prompt-family.md` + `prompts/prompt-catalog.md` §14  
**Statut** : Reviewed — QA prompt family validated  
**Type** : Validation manuelle famille prompts  
**Décision** : Famille QA / Testeur validée comme candidate robuste — sync Notion de gouvernance autorisée ensuite  
**Objet** : valider la cohérence, les garde-fous et la réutilisabilité des prompts QA candidats

---

## 1. Objectif de la validation

Cette note **valide manuellement** la famille de prompts **QA / Testeur** avant toute **publication** ou **sync Notion**.

- Cette validation **ne modifie pas** les prompts ;
- elle **ne crée pas** de prompts individuels détaillés ;
- elle **ne produit pas** de scénarios de tests projet ;
- elle **ne produit pas** de cas de tests détaillés ;
- elle **ne produit pas** de backlog ;
- elle **ne produit pas** de user stories ;
- elle **ne produit pas** de code ;
- elle **ne déclenche pas** delivery ;
- elle **ne publie pas** dans Notion.

Elle acte la **robustesse candidate** de la famille et **autorise** la préparation ultérieure d'une sync Notion de gouvernance — dans une étape dédiée, avec revue manuelle finale avant publication.

---

## 2. Documents revus

| Document | Rôle dans la validation |
|----------|-------------------------|
| `prompts/qa/qa-tester-prompt-family.md` | **Objet principal** — 10 prompts candidats, garde-fous, variables |
| `prompts/prompt-catalog.md` | Référencement §14 ; cohérence catalogue SFIA |
| `docs/methods/roles/qa-tester-method.md` | Méthode officielle liée — alignement attendu |
| `qa-tester-role-candidate-review.md` | Décision candidat mature ; autorisation méthode officielle |
| `qa-tester-role-candidate-framing.md` | Périmètre rôle ; garde-fous candidat |
| `qa-tester-role-research-and-benchmark.md` | Fondement méthodologique ; bonnes pratiques |
| `docs/standards/ux-ui-v1-governance-standard.md` | Lien revue UX/UI V1 ; QA en revue transverse |

---

## 3. Vérification de cohérence avec la méthode QA

| Élément méthode QA | Présence dans les prompts | Commentaire |
|--------------------|---------------------------|-------------|
| Testabilité | **Oui** | PROMPT-QA-001, 002, 003, 004 |
| Risques qualité | **Oui** | PROMPT-QA-005, 006 ; risk-based testing |
| Happy path / non happy path | **Oui** | PROMPT-QA-002, 004 |
| Anomalies métier | **Oui** | PROMPT-QA-002, 007 |
| Traçabilité | **Oui** | PROMPT-QA-008 |
| Critères futurs | **Oui** | PROMPT-QA-009 — sans user stories |
| Garde-fous | **Oui** | PROMPT-QA-010 ; garde-fous communs famille |
| Absence de delivery automatique | **Oui** | `{delivery_allowed}` ; garde-fous répétés |
| Absence de backlog | **Oui** | QA-001, 002, 009 explicitement |
| Absence de user stories | **Oui** | QA-001, 009 explicitement |
| Absence de code | **Oui** | Garde-fous communs ; pas de prompt auto |

**Synthèse** : couverture **complète** des éléments clés de `qa-tester-method.md` §§3–5, 10–11.

---

## 4. Revue des 10 prompts candidats

| Prompt | Objectif | Évaluation | Commentaire |
|--------|----------|------------|-------------|
| **PROMPT-QA-001** — Analyse testabilité besoin | Clarifier testabilité, ambiguïtés, risques | **Validé** | Aligné §5.1 méthode ; garde-fous backlog/US/delivery |
| **PROMPT-QA-002** — Revue QA maquette UX/UI | Testabilité maquette, parcours, états, erreurs | **Validé** | Cohérent §11 méthode et UX/UI V1 Governance ; pas de recette |
| **PROMPT-QA-003** — Questions réflexes revue transverse | Préparer questions QA multi-rôles | **Validé** | Réutilisable toute revue ; limites rôle explicites |
| **PROMPT-QA-004** — Happy path / non happy path | Chemins nominaux et dégradés pressentis | **Validé** | Niveau sortie adapté — pas de scénarios détaillés |
| **PROMPT-QA-005** — Grille risques qualité | Zones à risque sur un livrable | **Validé** | Risk-based testing ; pas de plan de test complet |
| **PROMPT-QA-006** — Stratégie de test légère | Orientation stratégie sans recette complète | **Validé avec vigilance** | Risque dérive vers stratégie complète — garde-fous à rappeler |
| **PROMPT-QA-007** — Revue anomalie métier | Exploitabilité anomalie | **Validé** | Aligné §6.6 recherche ; messages métier |
| **PROMPT-QA-008** — Traçabilité | Chaîne besoin / critère / test futur / anomalie | **Validé avec vigilance** | Ne pas dériver vers matrice de tests détaillée |
| **PROMPT-QA-009** — Critères d'acceptation futurs | Critères testables sans user stories | **Validé avec vigilance** | Risque création US implicite — garde-fous explicites |
| **PROMPT-QA-010** — Vérification garde-fous QA | Contrôle conformité production QA | **Validé** | Méta-prompt utile ; décision conforme / ajuster / bloquer |

**Bilan** : 7 **Validé** ; 3 **Validé avec vigilance** ; 0 **À renforcer**.

---

## 5. Points forts de la famille QA

- **Couverture complète** du rôle QA / Testeur (amont, revue, risque, traçabilité, garde-fous).
- **Bonne distinction** testabilité / recette officielle.
- **Garde-fous explicites** par prompt et en commun.
- **Réutilisable hors Interv360** — variables génériques, pas de scénarios projet.
- **Cohérence** avec méthode officielle `qa-tester-method.md`.
- **Bon lien** avec UX/UI V1 Governance (PROMPT-QA-002, 003).
- **Capacité à supporter les revues amont** (besoin, maquette, transverse).
- **Absence de surproduction delivery** — `{delivery_allowed}` et garde-fous répétés.

---

## 6. Points de vigilance

- Ne pas transformer **PROMPT-QA-006** en stratégie de recette complète.
- Ne pas utiliser **PROMPT-QA-009** pour créer des user stories.
- Ne pas utiliser **PROMPT-QA-002** pour convertir une maquette en backlog.
- Ne pas utiliser **PROMPT-QA-008** pour produire une matrice de tests détaillée sans jalon dédié.
- Maintenir **`{delivery_allowed}`** explicite (`blocked` par défaut sur Interv360).
- Créer des **prompts individuels** sous `prompts/qa/` seulement après usage réel ou besoin confirmé.

---

## 7. Garde-fous validés

- [x] pas d'ouverture delivery ;
- [x] pas de backlog ;
- [x] pas de user stories ;
- [x] pas de code ;
- [x] pas de cas de tests détaillés sans jalon dédié ;
- [x] pas de transformation maquette → recette ;
- [x] pas de remplacement PO / BA / RSSI / Architecte / Chef de projet ;
- [x] pas d'automatisation sans stratégie validée.

---

## 8. Décision de validation

**Décision** : famille **QA / Testeur validée comme candidate robuste** — **sync Notion de gouvernance autorisée ensuite**.

### Justification

- La famille est **alignée** avec la méthode officielle QA / Testeur.
- Les **10 prompts** couvrent les principaux usages **amont** du rôle.
- Les **garde-fous** sont cohérents avec la logique SFIA (Git = source détaillée ; pas de delivery implicite).
- La famille est **réutilisable** au-delà d'Interv360.
- Aucun **delivery, backlog, user story ou code** n'est ouvert par cette validation.

---

## 9. Ce que la prochaine étape pourra faire

- préparer une **note de sync Notion de gouvernance** (méthode QA + famille prompts) ;
- préparer un **payload Notion** si nécessaire ;
- documenter la **méthode QA / Testeur** comme nouvelle capacité SFIA en gouvernance ;
- référencer la **famille prompts QA** comme candidate robuste ;
- conserver **Git** comme source détaillée.

---

## 10. Ce que la prochaine étape ne devra pas faire

- publier **sans revue manuelle finale** ;
- produire **scénarios de tests Interv360** ;
- produire **cas de tests détaillés** ;
- produire **stratégie de recette** ;
- produire **backlog** ;
- produire **user stories** ;
- produire **code** ;
- ouvrir le **delivery**.

---

## 11. Conclusion

La famille de prompts **QA / Testeur** est **validée comme candidate robuste**.

Elle complète la **méthode officielle QA / Testeur** en proposant **10 prompts réutilisables** centrés sur la **testabilité**, les **risques**, la **traçabilité**, les **anomalies** et les **garde-fous**.

Cette validation **autorise la préparation** d'une **sync Notion de gouvernance**, **sans ouverture delivery**.

---

*Validation manuelle famille prompts QA / Testeur — gouvernance SFIA — sans publication Notion.*

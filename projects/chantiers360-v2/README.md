# Chantiers360 v2

**Projet :** Chantiers360 v2 — premier pilote SFIA v2.0  
**Chemin :** `projects/chantiers360-v2/`  
**Statut :** Bootstrap minimal  
**Méthode :** SFIA v1.1 (baseline) + SFIA v2.0 (delivery progressif)

## 1. Purpose

Chantiers360 v2 est le **premier projet pilote SFIA v2.0**, destiné à tester la méthode SFIA sur un **produit métier réel**.

- **Outil de suivi de chantier** pour artisans et petites entreprises du bâtiment
- Projet conduit **from scratch** — aucune reprise de Chantiers360 V0
- **Git** = source de vérité
- **SFIA v1.1** = baseline méthode stable
- **SFIA v2.0** = cadre de delivery progressif et automatisation contrôlée

## 2. Project status

| Élément | Valeur |
|---------|--------|
| **Statut** | Bootstrap minimal |
| **Cycle** | SFIA v2.0 real project bootstrap |
| **Décision** | Candidate B validé par Morris — pilote v2.0 recommandé (PR #94) |
| **Delivery applicatif** | Non lancé |
| **app / backend** | Non créés |
| **Backlog produit détaillé** | Non créé dans ce cycle |

## 3. SFIA v2.0 pilot rationale

Ce projet est retenu comme pilote v2.0 car il permet de :

- tester SFIA sur un **métier externe réel** (bâtiment / chantier) ;
- cadrer un **MVP clair et borné** ;
- exercer **UX / workflow / delivery** de manière concrète ;
- traverser le **cycle de vie projet complet** (intention → capitalisation) ;
- valider la chaîne **Git / Markdown / Cursor / PR / post-merge / capitalisation** ;
- préparer une **comparaison V0 vs SFIA v2** — uniquement **en fin de pilote**.

## 4. From scratch rule

> **Chantiers360 v2 est conduit comme un projet neuf.** Les travaux Chantiers360 V0 ne doivent **pas** être utilisés comme base de cadrage, de documentation, de conception, de backlog, de code ou de structure projet. La V0 pourra **uniquement** être consultée **en fin de pilote**, dans un cycle dédié de comparaison et de capitalisation méthodologique.

## 5. Initial product idea

Idée produit initiale (non détaillée — cadrage ultérieur) :

- liste des chantiers ;
- statut du chantier ;
- client ;
- adresse ;
- dates prévues ;
- tâches à faire ;
- réserves ;
- compte rendu rapide ;
- prochaines actions.

Pas d'écrans, pas d'architecture, pas de backlog dans ce bootstrap.

## 6. Initial MVP direction

**MVP initial (provisoire) :**

```
chantier → tâches → réserves → statut → compte rendu rapide
```

Ce MVP est **provisoire** et devra être **confirmé par Morris** dans un cycle de cadrage détaillé.

## 7. Out of scope for bootstrap

- `app/` / `backend/` / `frontend` / API / base de données
- design UI détaillé
- backlog complet
- architecture technique
- reprise Chantiers360 V0
- comparaison V0 (cycle final uniquement)
- Notion / CMP
- automatisation **L5 global**

## 8. Next SFIA cycles

1. Cadrage détaillé
2. Architecture fonctionnelle
3. UX/UI
4. Backlog MVP
5. Delivery incrémental
6. Validation
7. PR readiness
8. Post-merge
9. Capitalisation
10. Comparaison V0 vs SFIA v2 — **fin de pilote uniquement**

## 9. Decision authority

| Rôle | Responsabilité |
|------|----------------|
| **Morris** | Arbitrages structurants, GO scope, PR, merge |
| **Cursor** | Exécution cycles bornés (L3) |
| **ChatGPT** | Cadrage, challenge, prompts, analyse rapports |
| **Git** | Source de vérité — Markdown versionné, PR |

## SFIA references

- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md`

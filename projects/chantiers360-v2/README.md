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
| **Statut** | Bootstrap minimal — MVP ajusté (Morris) |
| **Cycle** | SFIA v2.0 real project bootstrap |
| **Nom projet** | `chantiers360-v2` — **validé Morris** |
| **Décision** | Candidate B validé — pilote v2.0 (PR #94) ; bootstrap validé avec réserve mineure sur commit local |
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
- dates prévues et **jalons simples** (planning simple) ;
- tâches à faire ;
- réserves ;
- compte rendu rapide ;
- prochaines actions.

Pas d'écrans, pas d'architecture, pas de backlog dans ce bootstrap.

## 6. Initial MVP direction

**MVP initial (validé Morris — ajusté) :**

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

### Planning simple / jalons chantier (inclus au MVP)

Le MVP intègre un **planning simple** — pas un planning avancé. Éléments possibles :

- date de début prévue ;
- date de fin prévue ;
- prochaine intervention ;
- jalon à venir ;
- retard éventuel ;
- commentaire planning simple.

**Hors MVP :** planning avancé, gestion des ressources, dépendances, charges, calendrier complet, planification multi-équipe.

### Extensions métier prioritaires (hors MVP initial)

Les éléments suivants sont **hors MVP initial** mais repositionnés comme **extensions métier prioritaires** à cadrer après validation du socle chantier :

- **devis** ;
- **facturation** ;
- **intégrations comptables**.

Ils relèvent d'un domaine métier plus large que le suivi opérationnel chantier — futur module possible autour de la **gestion commerciale chantier**. Exclus du MVP initial pour éviter dérive de scope et dette fonctionnelle prématurée ; intéressants pour monter en compétence sur ce domaine ultérieurement.

### Accès client (hors MVP initial)

- futur **espace de consultation ou de validation** pour le client final du chantier ;
- potentiellement utile plus tard : avancement, réserves, comptes rendus ;
- **exclu du MVP** pour conserver un produit centré sur l'usage artisan / petite entreprise.

## 7. Out of scope for bootstrap and MVP initial

- `app/` / `backend/` / `frontend` / API / base de données
- design UI détaillé
- backlog complet
- architecture technique
- **devis, facturation, intégrations comptables** *(extension métier prioritaire future — hors MVP)*
- **accès client** *(futur espace consultation — hors MVP)*
- **planning avancé** *(jalons simples OK — planning avancé hors MVP)*
- application mobile native
- IA générative avancée
- reprise Chantiers360 V0
- comparaison V0 avant fin de pilote
- Notion / CMP
- automatisation **L5 global**

## 8. Next SFIA cycles

**Prochain cycle après merge :** **cadrage détaillé** (pas architecture fonctionnelle).

1. **Cadrage détaillé** ← prochain
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

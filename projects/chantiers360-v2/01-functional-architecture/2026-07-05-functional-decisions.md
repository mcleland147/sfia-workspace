# Chantiers360 v2 — Décisions fonctionnelles

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/01-functional-architecture/2026-07-05-functional-decisions.md`  
**Cycle :** Architecture fonctionnelle (post PR #96)

> Trace des décisions fonctionnelles prises ou intégrées dans ce cycle.  
> Arbitrages structurants = **Morris**. Exécution = **Cursor** (L2).

## 1. MVP confirmé

**Décision :** le MVP reste inchangé.

```
chantier → tâches → réserves → statut → jalons simples → compte rendu rapide
```

| Statut | ✅ Confirmé Morris |
|--------|-------------------|
| Source | Bootstrap PR #95 + cadrage détaillé PR #96 |
| Modification | Aucune dans ce cycle |

---

## 2. Priorisation des cas d'usage

**Décision Morris :**

| Priorité | Cas d'usage | Contenu |
|----------|-------------|---------|
| **P1** | UC-01 à UC-05 | Créer chantier, liste, statut, tâches, réserves |
| **P2** | UC-06 à UC-09 | Jalons, retard, compte rendu, prochaines actions |

| Statut | ✅ Intégré |
|--------|-----------|
| Impact delivery | P1 = socle ; P2 = enrichissement MVP |
| Source | Arbitrage Morris post-revue cadrage détaillé |

---

## 3. Statuts conservés

**Décision Morris :** conserver les statuts de `business-rules.md` — ne pas complexifier les workflows.

| Entité | Statuts | Transitions |
|--------|---------|-------------|
| Chantier | À démarrer, En cours, En pause, Terminé | Libres — pas de séquence imposée |
| Tâche | À faire, En cours, Terminée | Libres |
| Réserve | Ouverte, En cours de traitement, Levée | Libres |

| Statut | ✅ Intégré |
|--------|-----------|
| Statut chantier indépendant | Oui — pas de calcul depuis tâches/réserves |

---

## 4. Compte rendu rapide

**Décision Morris :**

| Règle | Valeur |
|-------|--------|
| Date | **Automatique** à la création |
| Contenu | **Libre** (texte) — obligatoire |
| Modèle documentaire | **Aucun** — pas de structure complexe |
| Validation client | Non — hors MVP |
| Pièces jointes | Non obligatoires au MVP |

| Statut | ✅ Intégré |

---

## 5. Prochaines actions

**Décision Morris :** dérivées uniquement — **pas de saisie manuelle dédiée** au MVP.

**Sources d'agrégation :**

- Tâches : statut À faire ou En cours
- Réserves : statut Ouverte ou En cours de traitement
- Jalons : prochaine intervention ou jalon à venir renseigné
- Retard : chantier marqué en retard

| Statut | ✅ Intégré |
|--------|-----------|
| Résout question ouverte cadrage §9.4 | Oui — saisie manuelle exclue MVP |

---

## 6. Retard

**Décision Morris :**

| Règle | Valeur MVP | Futur |
|-------|------------|-------|
| Mode | **Indicateur manuel** | Calcul auto = option future |
| Coexistence | Avec statut chantier (ex. En cours + retard) | — |
| Prochaines actions | Chantier en retard → inclus | — |

| Statut | ✅ Intégré |
|--------|-----------|
| Résout question ouverte cadrage §9.5 | Oui — manuel confirmé MVP |

---

## 7. Multi-utilisateur

**Décision Morris :**

| Règle | Valeur |
|-------|--------|
| Usage | **Petite équipe possible** |
| Rôles / permissions | **Pas de gestion fine** au MVP |
| Visibilité | Tous les utilisateurs voient et modifient |
| Conflits / audit | Hors périmètre fonctionnel MVP |

| Statut | ✅ Intégré |
|--------|-----------|
| Résout question ouverte cadrage §9.6 | Oui |

---

## 8. Extensions métier futures

**Décision Morris :** hors MVP initial — ordre recommandé pour cycles futurs :

1. **Devis**
2. **Facturation**
3. **Intégrations comptables**

| Statut | ✅ Intégré |
|--------|-----------|
| Nature | Extensions prioritaires — non rejet définitif |
| Résout question ouverte cadrage §9.7 | Oui |

---

## 9. Exclusions maintenues

| Exclusion | Statut |
|-----------|--------|
| Accès client | ❌ Hors MVP |
| Planning avancé | ❌ Hors MVP |
| Devis / facturation / compta | ❌ Hors MVP (extensions futures) |
| Chantiers360 V0 | ❌ Interdit — fin pilote only |
| Architecture technique | ❌ Hors ce cycle |
| Modèle de données technique | ❌ Hors ce cycle |
| Code applicatif | ❌ Hors ce cycle |
| Backlog détaillé | ❌ Hors ce cycle |
| Maquettes UI | ❌ Hors ce cycle — cycle UX/UI suivant |

---

## 10. Questions ouvertes résolues (cadrage détaillé §9)

| # | Question cadrage | Résolution ce cycle |
|---|------------------|---------------------|
| 1 | Priorisation cas d'usage | P1 UC-01–05 ; P2 UC-06–09 |
| 2 | Granularité statuts | Conservés — suffisants MVP |
| 3 | Compte rendu — format | Date auto + contenu libre |
| 4 | Prochaines actions — manuel ? | Non — dérivées uniquement |
| 5 | Retard — manuel ou auto ? | Manuel MVP ; auto = futur |
| 6 | Multi-utilisateur | Petite équipe ; pas de rôles fins |
| 7 | Ordre extensions métier | Devis → facturation → compta |

---

## 11. Décisions Morris requises (post cycle)

| # | Décision | Statut |
|---|----------|--------|
| 1 | Valider l'architecture fonctionnelle (ce cycle) | ⏳ En attente |
| 2 | Confirmer priorisation P1/P2 pour delivery | ⏳ En attente |
| 3 | Autoriser cycle UX/UI | ⏳ Après validation architecture fonctionnelle |
| 4 | Maintenir exclusion V0 | ✅ Confirmé |
| 5 | Reporter architecture technique | ✅ Confirmé |

---

## 12. Gate suivant

**Prochain cycle autorisé après validation Morris :** **UX/UI**

Prérequis :

- Architecture fonctionnelle validée (5 documents `01-functional-architecture/`)
- MVP et exclusions confirmés
- Pas de dérive vers code ou architecture technique

---

**Documents produits :**

| Fichier | Rôle |
|---------|------|
| `functional-architecture.md` | Vue globale |
| `functional-domains.md` | 8 domaines fonctionnels |
| `navigation-model.md` | Navigation fonctionnelle |
| `state-model.md` | États métier |
| `2026-07-05-functional-decisions.md` | Ce document |

**Automation level :** L2 — gate Morris avant UX/UI.

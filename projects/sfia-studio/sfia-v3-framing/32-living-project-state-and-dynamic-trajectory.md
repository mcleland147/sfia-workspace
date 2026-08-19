# 32 — Living Project State et trajectoire dynamique

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · intégrée sur `main` via PR #259 / `56ddf32e811f0f5f8b82f31400da18ceecf3bc30` · synchronisation C1 Product Completion candidate |
| **Fondations** | **V3-F02 · V3-F06 · V3-F09 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** |
| **SFIA v2.6** | Externe · non représentée comme mode doctrinal actif du LPS |
| **Maturité fondations** | **VALIDATED** (doctrine) · schemas LPS / ProjectTrajectory **MODELED / VALIDATED** · LPS runtime durable partiel sur `main` · Trajectory runtime Memory · runtime v3 **NON ADOPTED** |
| **Anti-claims** | Pas LPS runtime ADOPTED · Pas trajectoire auto-exécutée |
| **Document** | `32-living-project-state-and-dynamic-trajectory.md` |

---

## 1. V3-F02 — Living Project State (VALIDATED)

### Définition

**État fonctionnel central** du Project, visible dans le panneau vivant (CC-D03) et persisté de façon sélective (D5 / SQL + audit) — **sous doctrine v3 exclusive**.

### Contenu minimal

| Bloc | Contenu |
|------|---------|
| Identité | projectId, nom, doctrinePackageRef (version/digest pinés) |
| Objectifs / contexte / périmètre | Validables, tagués |
| Parties prenantes | Acteurs |
| Trajectoire | Réf. ProjectTrajectory · capacité Product Completion **MUST** |
| Cycle actif / terminés | Type, statut · Project ≠ Cycle (CC-D13) |
| Observation / Hypothèse / Option / Recommandation / Décision | Épistémologie `33` |
| Gates | Ouverts / passés |
| Risques / réserves / dette | Dont DebtItem |
| Preuves / livrables / actions | Liens Evidence |
| Prochaine étape | Une phrase |
| Historique qualifié | Changements d'état |

**Interdit :** modes LPS du type « v2.6 / coexistence / fallback doctrinal » — le LPS Studio est **v3-only**.

### Persister

identité · pin doctrine · décisions validées · gates · trajectoire validée · réserves acceptées · preuves référencées · digests contexte · audit events · état minimal nécessaire à la continuité sémantique inter-session.

### Ne pas persister

raisonnement interne brut · scores non explicables · recommandations **comme** décisions · hypothèses **comme** faits · prompts temporaires non nécessaires à l'audit · dimensions CKC brutes · copies de doctrine v2.6.

### Affichage UX

Panneau = état utile seulement · **CKC non exposé** · Project et Cycle **séparés** (CC-D13).

### Continuité sémantique inter-session — MUST Product Completion

Studio doit pouvoir reprendre le pilotage sans inventer l’intention, une décision, une autorité, une exécution ou une preuve. Le contexte nécessaire est durable **ou reconstructible de manière fiable** : état courant, cycle / trajectoire active, décisions et réserves, Recommendation encore active, frontière d’autorité, Evidence et prochaine action.

Un transcript conversationnel exhaustif n’est **pas** requis. Une information absente déclenche requalification / re-confirmation fail-closed, jamais extrapolation.

## 2. V3-F06 — ProjectTrajectory (VALIDATED)

### Contenu

chemin réel d’un Project : cycles `done` · `active` · `proposed` · `blocked` · dépendances · conditions d'entrée/sortie · branches possibles · gates · réserves · motifs de replanification.

### Règle

ProjectTrajectory est une capacité Product Completion **MUST**, durable ou reconstructible de manière fiable lorsqu’elle est active / décidée.

Une trajectoire proposée est une **Recommendation** tant qu'elle n'est pas validée par HumanDecision explicite du **Pilote**.

Distinctions obligatoires :

- ProjectTrajectory = chemin réel du Project ;
- ProjectTrajectory **≠** Convergence Roadmap de construction SFIA Studio ;
- ProjectTrajectory **≠** catalogue canonique des types de cycle ;
- ProjectTrajectory **≠** séquence fixe / waterfall.

## 3. V3-F09 — Replanification gouvernée (VALIDATED)

### Boucle

```
événement → analyse d'impact → trajectoire révisée (recommandation)
→ options → recommandation → HumanDecision / gate Pilote si structurant
→ mise à jour validée du LPS / trajectoire
```

### Événements

changement de périmètre · nouvelle décision · décision annulée · risque · test en échec · dépendance modifiée · preuve invalide · nouvelle contrainte · cycle bloqué.

### Anti-claims

- replanification automatique **sans** gate si structurante = interdit ;
- événement ≠ décision ;
- replanification **ne** recharge **pas** une doctrine v2.6.

## 4. Maturité

V3-F02 / F06 / F09 : **VALIDATED** (doctrine) · schemas Option A **MODELED / VALIDATED** · LPS partiellement **IMPLEMENTED / durable on main** · ProjectTrajectory / Epistemic encore Memory · Product Completion et runtime v3 **NON ADOPTED**.

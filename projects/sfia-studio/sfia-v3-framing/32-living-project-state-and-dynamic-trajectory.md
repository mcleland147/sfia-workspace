# 32 — Living Project State et trajectoire dynamique

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · merge `main` en attente |
| **Fondations** | **V3-F02 · V3-F06 · V3-F09 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** |
| **SFIA v2.6** | Externe · non représentée comme mode doctrinal actif du LPS |
| **Maturité fondations** | **VALIDATED** (doctrine) · persist runtime non migrée |
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
| Trajectoire | Réf. ProjectTrajectory |
| Cycle actif / terminés | Type, statut · Project ≠ Cycle (CC-D13) |
| Observation / Hypothèse / Option / Recommandation / Décision | Épistémologie `33` |
| Gates | Ouverts / passés |
| Risques / réserves / dette | Dont DebtItem |
| Preuves / livrables / actions | Liens Evidence |
| Prochaine étape | Une phrase |
| Historique qualifié | Changements d'état |

**Interdit :** modes LPS du type « v2.6 / coexistence / fallback doctrinal » — le LPS Studio est **v3-only**.

### Persister

identité · pin doctrine · décisions validées · gates · trajectoire validée · réserves acceptées · preuves référencées · digests contexte · audit events.

### Ne pas persister

raisonnement interne brut · scores non explicables · recommandations **comme** décisions · hypothèses **comme** faits · prompts temporaires non nécessaires à l'audit · dimensions CKC brutes · copies de doctrine v2.6.

### Affichage UX

Panneau = état utile seulement · **CKC non exposé** · Project et Cycle **séparés** (CC-D13).

## 2. V3-F06 — ProjectTrajectory (VALIDATED)

### Contenu

cycles proposés · actifs · clôturés · dépendances · conditions d'entrée/sortie · branches possibles · gates · réserves · motifs de replanification.

### Règle

Une trajectoire est une **recommandation** tant qu'elle n'est pas **validée** par décision Morris / humaine explicite.

## 3. V3-F09 — Replanification gouvernée (VALIDATED)

### Boucle

```
événement → analyse d'impact → trajectoire révisée (recommandation)
→ options → recommandation → gate Morris si structurant
→ mise à jour validée du LPS / trajectoire
```

### Événements

changement de périmètre · nouvelle décision · décision annulée · risque · test en échec · dépendance modifiée · preuve invalide · nouvelle contrainte · cycle bloqué.

### Anti-claims

- replanification automatique **sans** gate si structurante = interdit ;
- événement ≠ décision ;
- replanification **ne** recharge **pas** une doctrine v2.6.

## 4. Maturité

V3-F02 / F06 / F09 : **VALIDATED** (doctrine) · schemas / persist runtime : non créés.

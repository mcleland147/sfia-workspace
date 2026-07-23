# 32 — Living Project State et trajectoire dynamique (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | `doctrine-candidate` — **soumis à validation Morris** · **non adopté** · **non baseline** |
| **Maturité fondation** | `DOCUMENTED` candidate seulement |
| **Baseline opérationnelle** | SFIA **v2.6** (inchangée) |
| **Adoption v3** | **Non** |
| **Gate** | `GO CONSOLIDATION CIBLÉE — SFIA STUDIO V3 DOCTRINE` |
| **Branche** | `method/sfia-studio-v3-doctrine-consolidation` |
| **CKC guidance** | Pilote Conception fonctionnelle `pilots/02-conception-fonctionnelle.md` · candidate · aucune autorité d'exécution |
| **Anti-claims** | Pas V3-VALIDATED · Pas V3-ADOPTED · Pas READY FOR DELIVERY · Pas CKC ADOPTED · Pas décision autonome |
| **Document** | `32-living-project-state-and-dynamic-trajectory.md` |
| **Fondations** | V3-F02 · V3-F06 · V3-F09 |

---

## 1. V3-F02 — Living Project State (candidate)

### Définition

**État fonctionnel central** du Project, visible dans le panneau vivant (CC-D03) et persisté de façon sélective (D5 / SQL + audit).

### Contenu minimal

| Bloc | Contenu |
|------|---------|
| Identité | projectId, nom, mode (v2.6 / transition / v3 / fallback) |
| Objectifs / contexte / périmètre | Validables, tagués |
| Parties prenantes | Acteurs |
| Trajectoire | Réf. ProjectTrajectory |
| Cycle actif / terminés | Type, statut, anti-claim « non ouvert » si candidat |
| Observation / Hypothèse / Option / Recommandation / Décision | Épistémologie `33` |
| Gates | Ouverts / passés |
| Risques / réserves / dette | Dont DebtItem |
| Preuves / livrables / actions | Liens Evidence |
| Prochaine étape | Une phrase |
| Historique qualifié | Changements d'état |

### Persister

identité · décisions validées · gates · trajectoire validée · réserves acceptées · preuves référencées · digests contexte · audit events.

### Ne pas persister

raisonnement interne brut · scores non explicables · recommandations **comme** décisions · hypothèses **comme** faits · prompts temporaires non nécessaires à l'audit · dimensions CKC brutes.

### Affichage UX

Panneau = état utile seulement · **CKC non exposé** · Project et Cycle **séparés** (CC-D13).

## 2. V3-F06 — ProjectTrajectory (candidate)

### Contenu

cycles proposés · actifs · clôturés · dépendances · conditions d'entrée/sortie · branches possibles · gates · réserves · motifs de replanification.

### Règle

Une trajectoire est une **recommandation** tant qu'elle n'est pas **validée** par décision Morris / humaine explicite.

## 3. V3-F09 — Replanification gouvernée (candidate)

### Boucle

```
événement → analyse d'impact → trajectoire révisée candidate
→ options → recommandation → gate Morris si structurant
→ mise à jour validée du LPS / trajectoire
```

### Événements

changement de périmètre · nouvelle décision · décision annulée · risque · test en échec · dépendance modifiée · preuve invalide · nouvelle contrainte · cycle bloqué.

### Anti-claims

- replanification automatique **sans** gate si structurante = interdit ;
- événement ≠ décision.

## 4. Maturité

V3-F02 / F06 / F09 : **DOCUMENTED candidate**.

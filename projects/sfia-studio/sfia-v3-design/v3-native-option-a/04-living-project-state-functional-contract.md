# 04 — Contrat fonctionnel Living Project State

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré · Pas schemas |
| **Document** | `04-living-project-state-functional-contract.md` |
| **Fondation** | V3-F02 |

## 1. Définition

État fonctionnel **central** du Project, versionné, à provenance, projeté dans le panneau vivant (CC-D03).
**Project ≠ Cycle** (CC-D13) · CycleInstance ⊆ LPS.cycles.

## 2. Domaines d’état (contenu minimal)

| Domaine | Contenu |
|---------|---------|
| Identité | projectId, name, owner, workspaceRef |
| Doctrine | doctrinePackageRef (id, version, digest) — **obligatoire** quand actif |
| Objectifs / contexte / périmètre / contraintes | tagués épistémiquement |
| Parties prenantes | actors/roles |
| Épistémique | observations, hypotheses, options, recommendations, decisions, reserves, risks |
| Trajectoire | ref ProjectTrajectory (candidate|validated) |
| Cycles | active CycleInstance · completed · proposed |
| Gates | open/passed |
| Dette | DebtItem[] |
| Preuves / livrables / actions | Evidence links |
| Next step | phrase unique |
| Maturité | claims distribués + preuves |
| Historique | versions LPS + timestamps |
| Provenance | sourceRefs par champ structurant |

**Interdit :** MethodMode `SFIA_V2_6|TRANSITION|V3_CANDIDATE` · badge doctrine v2.6 · copies doctrine method/.

## 3. Ownership

| Domaine | Owner écriture |
|---------|----------------|
| Décisions / trajectoire validée | Human Decision Manager |
| Hypothèses / options / reco | Epistemic + Recommendation (statut non décision) |
| Doctrine pin | Doctrine Resolver + confirmation si changement |
| Preuves | Evidence Manager |
| Dette | Debt Manager (+ acceptation Morris si structurante) |

## 4. Persister vs temporaire

**Persister :** identité · doctrinePackageRef · décisions · gates · trajectoire validée · réserves acceptées · preuves · digests · audit · versions LPS.
**Ne pas persister :** raisonnement brut · scores non explicables · prompts temporaires non audit · dimensions CKC brutes · reco **comme** décisions · hypothèses **comme** faits.

## 5. Visibilité panneau (état utile)

Objectifs · cycle actif (anti-claim) · trajectoire résumé · décisions ouvertes/validées · gates · risques/réserves · prochaine étape · preuves clés.
**Pas :** CKC brut · dumps provenance complets · MethodMode.

## 6. Versioning & statuts

LPS version monotoone · items : `active` | `stale` | `superseded`.
Nouvelle version si : décision · pin doctrine · trajectoire validée · preuve structurante · replanif validée.

## 7. Invariants

1. doctrinePackageRef résolu ou projet en stop doctrine.
2. recommendation.status ≠ decided.
3. CycleInstance ne clôture pas Project.
4. Contradiction blocking ouverte ⇒ pas d’ExecutionContract confirmé.
5. Claim maturité ⇒ Evidence liée.

## 8. Critères

**Création :** après Intent + DoctrineResolved (+ confirmation N2 si nouveau Project).
**Màj :** events `03`.
**Clôture Project :** HumanDecision dédiée seulement — jamais auto post-merge/exec.

## 9. Confidentialité / rétention (conceptuel)

Secrets hors LPS · rétention preuves selon politique projet · panneau = sous-ensemble non sensible.

## 10. Maturité

Contrat **DOCUMENTED** · schema/runtime **non**.

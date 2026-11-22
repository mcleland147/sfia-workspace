# Provenance — contrats et PV E08

## Alignement canonique approuvé (D2 Morris — 22/11/2026)

- Branche documentaire : `docs/next-ensemble08-consolidation-20261122`
- HEAD : `1479b3d31354f495398bca008a2b511131eb9662`
- Validation : Morris D2 dans la conversation + publication ChatGPT des trois addenda
- Intégration produit : copie exacte des blobs ci-dessous sur `feat/next-ensemble08-git-publications-nora` (alignement final, sans merge d'historique documentaire)

| Document | Chemin | Blob approuvé |
| --- | --- | --- |
| A — Contrat fonctionnel | `projects/sfia-studio-next/conception-fonctionnelle/contrat-fonctionnel-depots-git-et-conduite-nora-candidat.md` | `5d52aa625e73e2753253bea5cb448f8026403c17` |
| B — Architecture / acceptation | `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/contrat-architecture-et-acceptation-candidat.md` | `32e3de32c68f72d5ed6cdde8e960405ef6b52617` |
| C — PV de recette | `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/recette-acceptation-partielle-2026-11-22.md` | `bd06957b3e2b0fe1cdbf76446ba37557632ed872` |

**Lecture de statut :** l'approbation D2 des addenda autorise leur publication documentaire sur le candidat produit. Elle **ne** transforme **pas** automatiquement l'intégralité des contrats historiques en VALIDATED SPEC, ni E08 en ADOPTED / STABLE / RELEASE.

## Historique de provenance (conservé)

### Contrats initiaux (branche docs 2026-11-21)

- Source branch: `docs/next-ensemble08-contrat-fonctionnel-20261121`
- Source HEAD: `46fa79612cc38292dbf898c3a9cb6509b167d1f4`
- Blobs initiaux (avant addenda consolidés) :
  - fonctionnel `f60e86fe997ebc47f2b1b385c956a621c6057fe3`
  - architecture `9fe9a6ce773c0796836be3e51b12d268bbcd8100`
- First copy into delivery worktree: 2026-11-21T17:02:11Z

### PV initial (branche docs 2026-11-22)

- Source branch: `docs/next-git-recette-20261122`
- Source HEAD: `dea4f260ec96272971200e8b7cb0e44be08bc63e`
- blob source initial: `e767edc63c74b547c2f57c832e035794ad576945`
- Intégré sur branche produit lors de la consolidation PR readiness (2026-11-22 ≈ 13:34 Europe/Paris), puis **remplacé** par le blob approuvé C ci-dessus lors de l'alignement final D2.

### Note de correction — statut D2

- Lors de la consolidation PR readiness (HEAD `e29d7098`), le statut courant des addenda était consignable comme **AWAITING Morris D2**.
- **Correction (22/11/2026, alignement final) :** D2 obtenu ; les trois contenus canoniques sont ceux du commit `1479b3d…` ; le statut courant n'est plus « AWAITING ».

## Lien runtime

- Candidat utilisateur recetté (runtime): SOURCE `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` / TREE `be778f1bf461f15acf94bfed6879d43fa6256a0d` / BUILD `2uHrYBsQUvf6aii40hMpj`
- Un HEAD produit ultérieur **uniquement documentaire** ne remplace pas rétroactivement ce SOURCE pour le build RECETTE servi.

## Normalisation whitespace CI (2026-11-22)

- `git diff --check` vs `main` échouait sur espaces fin de ligne Markdown (PV, asis-capacite-b, g5-exit-matrix).
- Correction cosmétique sans changement sémantique. PV blob après normalisation : `2517c69ac1b214010a7153d7d9f1d96034acb68a`.
- Contenu D2 inchangé sur le fond ; empreinte blob mise à jour.

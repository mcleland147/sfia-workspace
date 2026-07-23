# 06 — Autorité, capacité et enforcement

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `06-authority-capability-and-enforcement-architecture.md` |

## 1. Matrice Action × autorités

| Action | Domaine | Studio | Agent cognitif | Agent exec | Morris | Confirm | Mutation |
|--------|---------|--------|----------------|------------|--------|---------|----------|
| Analyse intention | A | orchestre | oui | non | non | — | temporaire |
| Résoudre doctrine | B | oui | non | non | non | — | pin si OK |
| Proposer qualification/traj/reco | D/A | oui | oui | non | non | — | non persist décision |
| Ack qualification Critical | E/D | enforce | non | non |/user | explicite | statut cycle |
| Créer Project actif | C | oui | non | non |/user | **N2** | persistante |
| HumanDecision | E | enregistre | non | non | **oui** | selon objet | persistante |
| Build/confirm ExecutionContract | F | oui | non | non |/user | N1–N3 | contrat |
| Exécuter | G | invoque | non | **oui borné** | non | déjà confirmé | effets externes |
| Attacher Evidence | H | oui | non | produit brut | non | — | persistante |
| Claim maturité | C/H | évalue | non | non | si adoption | N3 si struct | claim |
| Modifier doctrine package | B | refuse seul | non | non | **oui** | N3 | doctrinale |
| Toucher method/ | — | **interdit** cible | non | non | hors Option A | — | — |

## 2. Capacité vs autorité

- **Capability** : ce que l’agent *peut* techniquement (outils/scope).
- **Authority** : ce qui est *permis* par décision/contrat/politique.
Les deux requis (F). Manquant → CAPABILITY_MISSING / AUTHORITY_DENIED.

## 3. Enforcement fonctionnel (E0–E4 conceptuel)

Alignement framing 25 : niveaux croissants de contrainte.
Fail-closed. Anti-bypass : G ne peut pas élargir contrat.
Chemins protégés : refus d’inclure dans contrat sans N3+Morris.

## 4. Sécurité fonctionnelle

Moindre privilège · secrets hors LPS · audit append-only · isolation legacy (08) · pas d’IAM technique ici.

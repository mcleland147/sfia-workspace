# Cycle Knowledge Contracts (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | `method-candidate` — **non baseline** · **non adopted** · **non official** |
| **Usage** | `experimental cognitive guidance` — **aucune autorité d'exécution** |
| **Gate conception** | `GO CONCEPTION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS` |
| **Gate routage** | `GO CONSOLIDATION MÉTHODE — INTÉGRATION DU ROUTAGE CKC CANDIDAT` (**consommé**) |
| **Baseline SFIA** | v2.6 (primauté inchangée) |
| **Emplacement** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/` |

## Points d'entrée canoniques de consommation

| Ordre | Document | Rôle |
|-------|----------|------|
| 1 | `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.4.5 | Résolution CKC après type de cycle |
| 2 | `prompts/templates/sfia-cycle-execution-template.md` §2.0 / §2.1 / §3 | Preuve de consultation + fiche |
| 3 | `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | Application avant génération prompt |
| 4 | `method/sfia-fast-track/core/sfia-knowledge-layer.md` §6.1.1 | Classification / emplacement |
| 5 | `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` §3.1.1 | Responsabilités acteurs |
| 6 | `method/sfia-fast-track/checklists/sfia-validation-checklist.md` §3.1.1 | Contrôles d'usage |

## Ordre de routage

```text
type de cycle
→ CKC candidat si disponible
→ documents canoniques
→ template
→ validation
→ décision
```

## Couverture

| Couverture | Cycles | Consommation |
|------------|--------|--------------|
| Pilotes détaillés | 1 Cadrage · 2 Conception fonctionnelle · 6 Architecture technique · 9 QA/validation | **Obligatoire** en mode candidate si cycle qualifié |
| Sans pilote | 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15 | Carte synthétique + méthode v2.6 ; couverture **incomplète** déclarée ; **pas d'invention** |

Matrice : [04-cycle-to-ckc-routing-matrix.md](./04-cycle-to-ckc-routing-matrix.md) · Tests : [05-routing-documentary-tests.md](./05-routing-documentary-tests.md)

## Contenu

| Fichier | Rôle |
|---------|------|
| [00-framing-and-architecture.md](./00-framing-and-architecture.md) | Cadrage + audit |
| [01-canonical-model-template.md](./01-canonical-model-template.md) | Template CKC |
| [02-fifteen-cycles-synthetic-map.md](./02-fifteen-cycles-synthetic-map.md) | Carte 15 cycles |
| [03-pilot-evaluation-report.md](./03-pilot-evaluation-report.md) | Évaluation pilotes |
| [04-cycle-to-ckc-routing-matrix.md](./04-cycle-to-ckc-routing-matrix.md) | Matrice cycle → CKC |
| [05-routing-documentary-tests.md](./05-routing-documentary-tests.md) | Tests documentaires routage |
| [pilots/01-cadrage.md](./pilots/01-cadrage.md) | Pilote 1 |
| [pilots/02-conception-fonctionnelle.md](./pilots/02-conception-fonctionnelle.md) | Pilote 2 |
| [pilots/03-architecture-technique.md](./pilots/03-architecture-technique.md) | Pilote 3 |
| [pilots/04-qa-validation.md](./pilots/04-qa-validation.md) | Pilote 4 |

## Anti-claims

- Pas de mise à jour baseline SFIA v2.6.
- Pas de CKC adopted / validated / official / baseline.
- Pas « fifteen CKCs complete ».
- Pas d'autorité d'exécution Cursor via CKC.
- Pas de clôture du cycle UX/UI D1.

## Gate suivant candidat

`GO VALIDATION MÉTHODE — CKC CANDIDATE ROUTING` (**non consommé**)

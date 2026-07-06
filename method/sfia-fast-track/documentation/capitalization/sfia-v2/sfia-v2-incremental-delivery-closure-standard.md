# SFIA v2.0 — Incremental Delivery Closure Standard

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md`  
**Cycle :** Capitalisation méthode SFIA v2.0  
**Version :** 1.0 — draft revue Morris  
**Source pilote :** Chantiers360 v2 — INC-01 (PR #108, #109, #110)

> **Standard méthode** — cycle documentaire uniquement. Ne modifie pas le code projet ni ne lance l'incrément suivant.

## 1. Objectif du standard

Standardiser la **chaîne de vie d'un incrément delivery** (INC-n) dans SFIA v2.0 :

- de la livraison code à la capitalisation ;
- avec gates QA, PR readiness, clôture et réserves ;
- en séparant explicitement **clôture d'un incrément** et **GO incrément suivant**.

**Décision Morris (2026-07-06) — pilote Chantiers360 v2 INC-01 :**

- la chaîne delivery → QA-G3 → PR → QA-G4 → closure → capitalization est **validée** ;
- **GO INC-n+1** reste toujours une **décision L0 Morris séparée**.

## 2. Chaîne standard INC-n

```
Delivery INC-n (code + tests)
        │
        ▼
QA-G2 — tests automatisés implémentés
        │
        ▼
QA-G3 — QA readiness (preuves + réserves)
        │
        ▼
Morris — GO QA (L0)
        │
        ▼
PR readiness (garde-fous + rapport QA + diff)
        │
        ▼
Morris — GO PR (L0)
        │
        ▼
PR → merge Morris (L0)
        │
        ▼
QA-G4 — post-merge check
        │
        ▼
Closure INC-n (documentaire)
        │
        ▼
PR closure → merge Morris (L0)
        │
        ▼
Post-merge check closure (read-only)
        │
        ▼
Capitalization INC-n (retour d'expérience)
        │
        ▼
Morris — GO INC-(n+1) ? (L0 — séparé)
```

## 3. Statuts officiels

| Statut | Signification | Moment |
|--------|---------------|--------|
| **READY FOR PR** | Delivery + QA-G3 OK — PR readiness validée | Avant PR delivery |
| **READY WITH RESERVES** | PR readiness possible — réserves documentées dans PR | Avant PR delivery |
| **GO QA WITH RESERVES** | Morris valide preuves QA avec réserves acceptées | QA-G3 |
| **QA-G4 OK** | Post-merge sans régression bloquante | Après merge delivery |
| **QA-G4 OK WITH RESERVES** | Post-merge OK — réserves mineures/environnementales | Après merge delivery |
| **CLOSED** | Incrément officiellement terminé — sans réserve ouverte | Après closure PR |
| **CLOSED WITH RESERVES** | Incrément terminé — réserves mineures/environnementales acceptées | Après closure PR |
| **NOT READY** | Gate non satisfait — retour delivery ou QA | Tout gate |

> **Invariant :** `CLOSED WITH RESERVES` **≠** échec. C'est un statut **valide** pour un incrément pilote ou avec écarts documentés acceptés par Morris.

## 4. Typologie des réserves

| Type | Définition | Bloque PR readiness ? | Bloque clôture ? | Exemple pilote INC-01 |
|------|------------|----------------------|------------------|----------------------|
| **Bloquante** | Périmètre non livré, tests critiques KO, régression | **Oui** | **Oui** | — (aucune sur INC-01) |
| **Majeure** | Écart significatif AC — acceptation Morris explicite | Oui sans acceptation | Non si acceptée | R-QA-01 (levée) |
| **Mineure** | Écart documenté — impact limité | Non si acceptée | Non | R-QA-02 à R-QA-04 |
| **Environnementale** | Contrainte machine/CI — pas régression code | Non si workaround documenté | Non | R-QA-05 (port 3000) |

**Règles :**

- QA **propose** la gravité — Morris **arbitre** ;
- une réserve **mineure acceptée** peut rester **ouverte** après clôture ;
- une réserve **bloquante** interdit PR readiness et clôture ;
- les réserves **environnementales** ne doivent pas masquer une régression fonctionnelle.

## 5. Gates par étape

| Étape | Gate | Bloquant | Validation |
|-------|------|----------|------------|
| Fin delivery | QA-G2 | Oui — avant QA-G3 | Tests implémentés |
| Avant PR delivery | QA-G3 | **Oui** | Morris — GO QA |
| Avant PR delivery | PR readiness | **Oui** | Morris — GO PR |
| Merge delivery | — | — | Morris L0 |
| Après merge delivery | QA-G4 | Si régression bloquante | Morris |
| Clôture | Closure report | Non bloquant si QA-G4 OK | Morris — clôture |
| Merge closure | — | — | Morris L0 |
| Post-merge closure | Post-merge check | Si anomalie docs | Read-only L4/L5 ciblé |
| Capitalisation | — | Non bloquant | Morris — actif méthode |
| Incrément suivant | GO INC-(n+1) | **Décision séparée** | Morris L0 |

## 6. Artefacts par incrément

### Delivery (code)

| Artefact | Chemin typique |
|----------|----------------|
| Implementation report | `07-delivery-inc-0n/delivery-inc-0n-implementation-report.md` |
| Validation report | `07-delivery-inc-0n/delivery-inc-0n-validation-report.md` |
| Decisions | `07-delivery-inc-0n/delivery-inc-0n-decisions.md` |
| PR readiness | `07-delivery-inc-0n/pr-readiness-inc-0n.md` |

### QA

| Artefact | Chemin typique |
|----------|----------------|
| QA dossier | `08-qa-test/inc-0n/` |
| QA-G4 post-merge | `08-qa-test/inc-0n/qa-g4-post-merge-report.md` |

### Clôture et capitalisation

| Artefact | Chemin typique |
|----------|----------------|
| Closure report | `07-delivery-inc-0n/inc-0n-closure-report.md` |
| Capitalization report | `09-capitalization/inc-0n-capitalization-report.md` |

## 7. Règles de gouvernance

| Règle | Détail |
|-------|--------|
| **Clôture ≠ GO suivant** | Clôturer INC-n n'accorde **pas** GO INC-(n+1) |
| **Capitalisation ≠ GO suivant** | Capitaliser peut précéder ou suivre GO INC-(n+1) selon contexte |
| **Capitalisation recommandée** | Après **premier incrément pilote** — retour d'expérience méthode |
| **GO INC-(n+1)** | Toujours **L0 Morris** — prompt / cycle séparé |
| **Merge** | Toujours **L0 Morris** |
| **Push** | Sur branche dédiée — jamais direct `main` sans autorisation |
| **L5 global** | **Interdit** |

## 8. Capitalisation — contenu attendu

Rapport projet (`09-capitalization/inc-0n-capitalization-report.md`) :

1. Contexte incrément
2. Chaîne PR / commits
3. Périmètre livré
4. Succès et frictions
5. Rôle QA-G3, QA-G4, PR readiness, closure
6. Réserves acceptées
7. Enseignements pour incrément suivant
8. Enseignements pour SFIA v2.0
9. Décisions Morris à venir

Actif méthode (si généralisable) : mise à jour ou création standard dans `method/.../sfia-v2/`.

## 9. Niveaux d'automatisation

| Activité | Niveau | Validation |
|----------|--------|------------|
| Delivery code | L3 | Morris — M7 / GO delivery |
| QA strategy / scenarios | L2 | Morris |
| QA test implementation | L3 | Morris avant push |
| QA execution / reporting | L3 / L4 | Morris — QA-G3 |
| PR readiness document | L3 / L4 | Morris — GO PR (L0) |
| PR creation / push | L0 | Morris demande explicite |
| Merge | L0 | Morris |
| QA-G4 post-merge | L4 | Morris si écart |
| Closure document | L3 | Morris — clôture |
| Post-merge check | L4 / L5 ciblé | Read-only |
| Capitalization | L3 | Morris — routing |
| GO next increment | L0 | Morris |

Voir : `sfia-v2-automation-levels.md`, `sfia-v2-delivery-qa-test-standard.md`.

## 10. Rôles

| Rôle | Responsabilité |
|------|----------------|
| **QA/Test** | Preuves automatisées, rapports, réserves proposées |
| **Morris** | Valide preuves ; GO QA, PR, merge, clôture, GO incrément suivant |
| **Cursor** | Exécution L3 — code, tests, docs bornées |
| **ChatGPT** | Cadrage, analyse rapports, prompts — L2 |
| **Git** | Source de vérité |

## 11. Doctrine automation (rappel)

- **QA automatise les preuves** — exécution, rapports, traçabilité ;
- **Morris valide les preuves** et arbitre les réserves ;
- tests passants **≠** validation Morris ;
- PR readiness est L3/L4 — **GO PR reste L0 Morris** ;
- merge reste **L0 Morris** ;
- GO incrément suivant reste **L0 Morris** ;
- **L5 global interdit**.

## 12. Référence pilote Chantiers360 v2 INC-01

| Étape | PR | Commit | Statut |
|-------|-----|--------|--------|
| Delivery | #108 | `1b9e41f` | US-01 à US-04 |
| QA-G4 | #109 | `128d6fc` | OK WITH RESERVES |
| Closure | #110 | `2bbb699` | CLOSED WITH RESERVES |
| Capitalization | *(ce cycle)* | — | Documentaire |

Rapport projet : `projects/chantiers360-v2/09-capitalization/inc-01-capitalization-report.md`

## 13. Explicitement hors scope

- Lancement automatique INC-(n+1)
- Correction réserves sans GO Morris
- Modification backlog/design dans cycle capitalisation
- Notion / CMP
- Chantiers360 V0
- L5 global

---

**Références :**

- `sfia-v2-delivery-qa-test-standard.md`
- `sfia-v2-automation-levels.md`
- `prompts/prompt-catalog.md` — §14 Supplément Delivery QA/Test
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` — §6.12–6.14
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md` — §12.1, §13.1
- `sfia-v2-figma-fidelity-gate-standard.md`
- `sfia-v2-project-bootstrap-standard.md`
- `projects/chantiers360-v2/09-capitalization/inc-01-capitalization-report.md`

**Decision (provisional) :** SFIA V2.0 INCREMENTAL DELIVERY CLOSURE STANDARD DOCUMENTED — PENDING MORRIS VALIDATION

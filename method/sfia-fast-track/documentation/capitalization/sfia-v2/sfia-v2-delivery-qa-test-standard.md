# SFIA v2.0 — Delivery QA / Test Standard

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md`  
**Cycle :** Capitalisation méthode SFIA v2.0  
**Version :** 1.0 — draft revue Morris  
**Source pilote :** Chantiers360 v2 — delivery INC-01 (branche `delivery/chantiers360-v2-inc-01`)

> **Standard méthode** — cycle documentaire uniquement. Ne modifie pas le code projet ni les branches delivery en cours.

## 1. Objectif du standard

Intégrer **QA/Test** comme **cycle transverse** du processus projet et delivery SFIA v2.0 :

- préparer la **testabilité** avant et pendant le delivery ;
- exiger des **preuves QA** avant toute **PR readiness** d'un incrément ;
- distinguer exécution technique (Cursor/CI) et **validation Morris** des preuves ;
- capitaliser stratégie, scénarios, tests automatisés et rapports par incrément.

**Décision Morris (2026-07-06) :**

- QA/Test intervient **avant et pendant** le delivery ;
- chaque incrément (INC-01, INC-02, INC-03, …) passe par QA/Test **avant PR readiness** ;
- **Morris ne déroule pas les tests** — Morris **valide les preuves QA** et arbitre les réserves.

## 2. QA/Test comme cycle transverse

QA/Test n'est **pas** un unique jalon final. C'est une **ligne transverse** qui accompagne le cycle de vie :

```
Bootstrap → Cadrage → Archi fonctionnelle → UX/UI → Design Figma → Backlog
→ Archi technique → [Figma Fidelity Gate] → Delivery INC-n
    ↑ QA transverse : testabilité, scénarios, tests, rapports, gates QA-G0…G4
→ QA readiness → PR readiness → PR → Post-merge → Capitalisation
```

## 3. Pourquoi QA avant le delivery

| Raison | Détail |
|--------|--------|
| **Testabilité** | Un besoin non vérifiable produit un delivery non validable |
| **Traçabilité** | Acceptance criteria et user stories doivent être testables avant code |
| **Coût** | Corriger ambiguïtés en amont réduit les retours post-delivery |
| **Gates** | PR readiness sans preuves QA = risque de merge prématuré |
| **Pilote v2.0** | Chantiers360 v2 démontre le besoin QA avant INC-01 PR readiness |

## 4. Place de QA dans le cycle projet

| Étape | Rôle QA | Livrable QA typique |
|-------|---------|---------------------|
| **Bootstrap** | Qualification QA initiale — besoin testable ? | Note testabilité (pas de tests) |
| **Cadrage** | Critères de succès vérifiables | Questions ouvertes, risques test |
| **Architecture fonctionnelle** | Parcours et états testables | Checklist testabilité fonctionnelle |
| **UX/UI Markdown** | Parcours, états vides/erreur | Scénarios pressentis (hors recette détaillée) |
| **Design Figma** | Support visuel recette | Captures, parcours cliquables — **pas substitut tests** |
| **Backlog** | Acceptance criteria testables | Revue AC par US / incrément |
| **Architecture technique** | Architecture testable (QA-G1) | Stratégie test, stack outillage |
| **Figma Fidelity Spike** | Fidélité visuelle ≠ tests fonctionnels | Rappel QA requis au delivery |
| **Delivery INC-n** | Tests automatisés + recette métier (QA-G2/G3) | Code tests, rapport QA |
| **PR readiness** | QA readiness obligatoire avant PR | Rapport QA-G3, réserves |
| **Post-merge** | Non-régression (QA-G4) | Rapport post-merge QA |
| **Closure** | Clôture incrément — statut CLOSED / CLOSED WITH RESERVES | `inc-0n-closure-report.md` |
| **Capitalisation** | Retour d'expérience delivery + QA + closure | `09-capitalization/`, amélioration standard |

## 5. Rôles

| Rôle | Responsabilité QA |
|------|-------------------|
| **QA/Test** | Stratégie, scénarios, implémentation tests, exécution, rapport, réserves |
| **Morris** | Valide preuves QA ; GO/NO-GO QA ; arbitre réserves ; **ne déroule pas** les tests |
| **Cursor** | Exécution bornée L3 — implémentation tests, rapports, sous garde-fous |
| **ChatGPT** | Cadrage stratégie QA, génération scénarios, analyse rapports — L2 |
| **Git** | Source de vérité — stratégie, scénarios, tests, rapports versionnés |

## 6. Quatre niveaux de validation

| Niveau | Contenu | Qui exécute | Qui valide |
|--------|---------|-------------|------------|
| **Tests techniques** | `lint`, `build`, `typecheck`, migrations, smoke scripts | Cursor / CI | Rapport → Morris si écart |
| **Tests automatisés métier** | Tests ciblés par US / AC (unit, integration, e2e léger) | Cursor / CI | QA rapport → Morris |
| **Recette métier automatisée** | Scénarios bout-en-bout alignés acceptance criteria | Cursor / CI | QA rapport → Morris |
| **Validation Morris** | Lecture preuves, réserves, GO PR / merge | **Morris** | Morris uniquement |

> **Invariant :** tests passants **≠** validation Morris. Morris valide les **preuves** et le **périmètre**.

## 7. Gates QA (QA-G0 à QA-G4)

| Gate | Question | Moment | Bloquant PR readiness |
|------|----------|--------|----------------------|
| **QA-G0** | Le besoin / l'incrément est-il **testable** ? | Bootstrap → backlog | Si non testable |
| **QA-G1** | L'**architecture** permet-elle des tests automatisés ? | Archi technique | Si non testable |
| **QA-G2** | Les **tests automatisés** de l'incrément sont-ils implémentés ? | Fin delivery INC-n | **Oui** |
| **QA-G3** | **QA readiness** — preuves complètes, réserves documentées ? | Avant PR readiness | **Oui** |
| **QA-G4** | **Non-régression** post-merge — tests critiques OK ? | Post-merge | Si écart bloquant |

### QA-G3 — QA readiness (détail)

Avant toute PR readiness d'un incrément delivery :

1. `npm run lint` / `npm run build` OK (ou réserve documentée)
2. Tests automatisés de l'incrément exécutés — résultat dans rapport QA
3. Scénarios recette métier couvrant les US de l'incrément
4. Réserves QA listées avec gravité
5. **Morris** valide GO QA — distinct de GO PR

## 8. Artefacts attendus par incrément delivery

Dossier recommandé : `projects/<project>/08-qa-test/inc-<nn>/`

| Fichier | Rôle |
|---------|------|
| `qa-strategy.md` | Stratégie QA de l'incrément — périmètre, outillage, niveaux |
| `test-scenarios.md` | Scénarios recette métier — traçabilité US / AC |
| `qa-implementation-report.md` | Tests implémentés, commandes, couverture ciblée |
| `qa-execution-report.md` | Résultats dernière exécution — pass/fail, logs |
| `qa-reserves.md` | Réserves ouvertes / acceptées / bloquantes |
| `qa-readiness.md` | Verdict QA-G3 — GO / GO avec réserves / NO-GO |

### Scripts attendus (projet applicatif)

Sous `projects/<project>/app/` (ou racine app documentée) :

| Script | Rôle |
|--------|------|
| `npm run lint` | Qualité statique |
| `npm run build` | Compilation |
| `npm run test` | Suite tests automatisés (à ajouter par incrément) |
| `npm run test:e2e` | Optionnel — recette métier automatisée |

## 9. Rapport QA — structure minimale

```markdown
## QA execution report — INC-0n

- Date / commit / branche
- Commandes exécutées
- Résultats (pass/fail)
- US couvertes
- AC couverts / non couverts
- Réserves
- Verdict QA-G3 proposé
- Décision Morris attendue
```

## 10. Gestion des réserves

| Type | Traitement |
|------|------------|
| **Bloquante** | NO-GO QA — pas de PR readiness |
| **Majeure** | NO-GO QA sans acceptation Morris explicite |
| **Majeure acceptée** | GO QA avec réserves — documentées dans PR |
| **Mineure** | GO QA — peut rester ouverte après clôture |
| **Environnementale** | GO QA si workaround documenté — non bloquante clôture |

Voir typologie détaillée : `sfia-v2-incremental-delivery-closure-standard.md` §4.

Morris arbitre l'acceptation des réserves — QA propose, Morris décide.

## 11. GO / NO-GO QA

| Verdict | Signification |
|---------|---------------|
| **GO QA** | Preuves suffisantes — PR readiness autorisée |
| **GO QA WITH RESERVES** | PR readiness possible — réserves dans PR body |
| **NO-GO QA** | Preuves insuffisantes — retour delivery |
| **QA-G4 OK WITH RESERVES** | Post-merge validé — réserves documentées |
| **CLOSED WITH RESERVES** | Incrément clôturé — réserves mineures acceptées |

## 12. Articulation avec PR readiness

```
Delivery INC-n terminé (code)
        │
        ▼
QA-G2 — tests automatisés implémentés
        │
        ▼
Exécution tests + rapport QA
        │
        ▼
QA-G3 — QA readiness
        │
        ▼
Morris valide preuves QA
        │
        ▼
PR readiness (garde-fous Git + diff + QA report)
        │
        ▼
PR → merge Morris
        │
        ▼
QA-G4 — non-régression post-merge
        │
        ▼
Closure INC-n (documentaire)
        │
        ▼
Capitalization INC-n
        │
        ▼
Morris — GO INC-(n+1) ? (L0 — séparé)
```

Voir : `sfia-v2-incremental-delivery-closure-standard.md` — chaîne complète, statuts, typologie réserves.

**PR readiness sans QA-G3 = NOT READY** pour tout incrément delivery.

## 13. Articulation avec Figma Fidelity Gate

| Cycle | Rapport QA |
|-------|------------|
| **Figma Fidelity Spike** | Spike visuel — **pas** substitut tests fonctionnels INC-n |
| **Delivery INC-n** | QA complet requis — spike ne couvre pas US delivery |

Voir : `sfia-v2-figma-fidelity-gate-standard.md` §17.

## 14. Articulation avec acceptance criteria

| Lien | Règle |
|------|-------|
| `acceptance-criteria.md` | Source des scénarios recette métier |
| `user-stories.md` | Périmètre tests par US |
| `delivery-increments.md` | Découpage — un rapport QA par incrément mergé |
| Traçabilité | Chaque AC couvert ou explicitement hors scope avec réserve |

## 15. Niveaux d'automatisation

| Activité | Niveau | Validation |
|----------|--------|------------|
| QA strategy generation | **L2** | Morris avant exécution |
| QA test scenario generation | **L2** | Morris avant exécution |
| QA test implementation | **L3** | Morris avant push |
| QA execution / reporting | **L3 / L4** | Morris — QA-G3 |
| Regression testing (CI) | **L4** | Morris si écart |
| Automated business acceptance | **L4** | Morris — preuves seulement |
| Final acceptance | **L0** | **Morris** |
| GO PR / merge | **L0** | **Morris** |
| L5 global sur QA | **Interdit** | — |

Voir : `sfia-v2-automation-levels.md`.

## 16. Ce qui reste décision humaine (Morris)

- GO / NO-GO QA (QA-G3)
- Acceptation des réserves bloquantes / majeures
- GO PR et merge
- Arbitrage écarts backlog vs implémentation (ex. statuts)
- GO incrément suivant (INC-02+)
- Clôture incrément (CLOSED / CLOSED WITH RESERVES)
- Promotion tests en non-régression permanente

## 17. Prompt family

`prompts/qa/delivery-qa-test-prompt-family.md` — **PROMPT-QA-D-001** à **PROMPT-QA-D-008** (famille delivery — distincte de `PROMPT-QA-001` à `010` amont).

### Réserves capitalisation (suivi)

| # | Réserve | Statut |
|---|---------|--------|
| R-CAP-01 | IDs prompts delivery | **Levée** — §17 ci-dessus |
| R-CAP-02 | `prompts/prompt-catalog.md` — index famille delivery QA | **Ouverte** — cycle séparé |
| R-CAP-03 | `sfia-cycle-routing-guide.md` / checklist v1.1 | **Ouverte** — cycle séparé |

## 18. Explicitement hors scope

- Remplacement de Morris par exécution QA autonome
- Tests au bootstrap (documentation seulement)
- Modification delivery en cours dans un cycle méthode
- Notion / CMP
- V0

---

**Références :**

- `sfia-v2-incremental-delivery-closure-standard.md`
- `sfia-v2-automation-levels.md`
- `sfia-v2-project-bootstrap-standard.md`
- `sfia-v2-design-figma-cycle-standard.md`
- `sfia-v2-figma-fidelity-gate-standard.md`
- `prompts/qa/delivery-qa-test-prompt-family.md`

**Decision (provisional) :** SFIA V2.0 DELIVERY QA TEST STANDARD DOCUMENTED — PENDING MORRIS VALIDATION

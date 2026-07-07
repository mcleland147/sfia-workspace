# Comparaison méthodologique — BatiNova V0 vs Chantiers360 SFIA v2

**Projet :** Chantiers360 v2 — premier pilote SFIA v2.0  
**Chemin :** `projects/chantiers360-v2/09-capitalization/v0-vs-sfia-v2-methodological-comparison.md`  
**Date :** 2026-07-07  
**Type de cycle :** Audit comparatif documentaire — lecture seule  
**Sources :**

- V0 : `/Users/morris/Downloads/BatiNova /Cadrage/`
- SFIA v2 : `projects/chantiers360-v2/` + `method/sfia-fast-track/`

> Ce document répond au cycle de comparaison V0 vs SFIA v2 prévu en fin de pilote (`project-framing.md` §8, `mvp-capitalization-report.md` §11).

---

## 1. Résumé exécutif

BatiNova V0 et Chantiers360 v2 adressent le même domaine métier avec des philosophies opposées sur la traçabilité : V0 privilégie la **richesse documentaire produit** et la **vélocité IA** (MVP + Release 1.1 en ~48 h, 292 tests, 55 documents) au prix d'un Git tardif et compressé ; SFIA v2 privilégie **Git-first, cycles bornés et gates Morris** (40+ PR, 5 INC, capitalisation incrémentale) au prix d'un overhead documentaire et de PR multiples.

V0 excelle en QA industrialisée, production readiness (K0–K4), EVOL/release management et REX auto-critique. SFIA v2 excelle en gouvernance décisionnelle, réserves formalisées, reproductibilité et versioning méthode (v2.0 → v2.3.1).

SFIA v2 n'a pas encore absorbé les forces V0 (profondeur QA, framework recette MOA assistée, audit production readiness). V0 n'avait pas la discipline Git/PR/post-merge de v2.

**Verdict :** la méthode v2 est **prouvée sur un pilote complet**, mais nécessite une **consolidation légère v2.4/v2.5** avant tout cadrage v3.0 — pas un big-bang méthodologique immédiat.

---

## 2. Sources analysées

### V0 — `/Users/morris/Downloads/BatiNova /Cadrage/`

| Document | Statut lecture |
|----------|----------------|
| `35-Retour-Experience-Projet.md` | Lu intégralement (sections clés) |
| `30-Bilan-Exhaustif-Projet.md` | Lu — synthèse chiffrée |
| `14-Rapport-Cloture-MVP.md` | Lu |
| `15-Production-Readiness-Audit.md` | Lu — checklist K0 |
| `26-Product-Backlog.md` | Lu |
| `06-Cahier-de-tests.md` | Lu — règle DoD 4 tests/phase |
| `07-Cahier-Recette-Metier.md` | Lu — échantillon REC-* |
| `11-Dossier-Recette-Synthese.md` | Lu |
| `08-DAT-v1.md` | Lu |
| `docs/architecture/ADR-001-User-vs-Worker.md` | Lu |
| `evolutions/EVOL-001` à `003` | Lu — en-tête EVOL-001 |
| `README.md` | Lu |

### SFIA v2 — `sfia-workspace/projects/chantiers360-v2/` + `method/`

| Document | Statut lecture |
|----------|----------------|
| `README.md` | Lu |
| `00-framing/project-framing.md` | Lu |
| `09-capitalization/mvp-capitalization-report.md` | Lu intégralement |
| `sfia-v2-method-versioning-standard.md` | Lu |
| `sfia-v2-incremental-delivery-closure-standard.md` | Lu |
| `sfia-v2-delivery-qa-test-standard.md` | Lu |
| `sfia-v2-design-coverage-standard.md` | Lu — en-tête |
| `sfia-v2-technical-architecture-decision-documentation-standard.md` | Lu — en-tête |
| `sfia-cycle-routing-guide.md` | Lu — en-tête |
| `sfia-validation-checklist.md` | Lu — en-tête |

### Réserves de lecture

- Fichiers `.docx` / `.xlsx` / PDF V0 non ouverts (DAA, backlog Excel, bilan PDF)
- Code applicatif non audité en profondeur (les deux côtés)
- PR GitHub V0 (`chantiers360`) non consultées via `gh`
- Standards SFIA v2 lus en entête — corps complets non relus intégralement

---

## 3. Matrice artefacts V0 ↔ SFIA v2

| Dimension | Artefact V0 | Artefact SFIA v2 | Équivalence | Écart | Enseignement méthode |
|-----------|-------------|------------------|-------------|-------|---------------------|
| **Cadrage** | `SFG - Projet Chantiers360.txt`, comptes rendus ateliers | `00-framing/project-framing.md` (PR #96) | Partielle | V0 = ateliers humains amont ; v2 = framing Git dès bootstrap | Le cadrage humain V0 a canalisé l'IA ; v2 formalise en cycles PR |
| **Fonctionnel** | SFG + `Cartographie des workflows.txt` + DAA | `02-functional-architecture/` (PR #97) | Forte | V0 plus dense métier ; v2 plus structuré par dossiers numérotés | Conserver la densité métier V0 dans le template v2 |
| **UX/UI** | `SPEC-UI-MVP.md` | `03-ux-ui/` (PR #98) | Forte | V0 lie Figma Make ; v2 = wireframes Markdown puis Figma | v2 sépare UX Markdown et Design Figma en cycles distincts |
| **Design** | Figma Make + SPEC-UI | `04-design/` + standard PR #100 + PR #101 | Partielle | v2 ajoute gate fidélité (PR #104) et design coverage (PR #129) | v2 industrialise le lien design→code ; V0 plus opportuniste |
| **Architecture technique** | `08-DAT-v1.md`, DAA/DAT racine | `05-technical-architecture/` (PR #102–#103) | Partielle | V0 = DAT complet implémenté ; v2 = archi légère documentaire + standard ADR (PR #131) non produit | Le standard v2 corrige la dispersion V0 ; DAT projet v2 non rédigé |
| **Backlog** | `26-Product-Backlog.md`, `BatiNova_Backlog_MVP.xlsx` | `06-backlog/` (PR #99) — US-01 à US-13, INC-01 à INC-05 | Forte | V0 = releases semver EVOL ; v2 = incréments INC-n | Deux granularités valides — à unifier en v2.4 |
| **Delivery** | Phases A–J (pré-commit) + lots 1.1-A/B/C | INC-01 à INC-05 (PR #108–#127) | Partielle | V0 = batch IA ; v2 = delivery séquentiel 3 PR/incrément | v2 plus traçable ; V0 plus rapide |
| **QA** | `06-Cahier-de-tests.md`, REC-*, 292 tests | `08-qa-test/inc-0n/`, QA-G3/G4, 16 E2E cumulatifs | Partielle | V0 >> profondeur tests ; v2 >> processus gates | Absorber profondeur QA V0 dans standard v2 |
| **Décisions** | Gates A/B/C, ADR-001, comité évolutions | Morris M1–M10+, registre framing | Partielle | v2 indexe Morris L0 ; V0 = gates produit + 1 ADR | Morris L0 = évolution des gates V0 |
| **Réserves** | Écarts dans rapports clôture/K0 (E1–E7) | R-UX-01, R-QA-03 à R-QA-05 — registre formel | Faible | V0 implicite ; v2 = statut ouvert/accepté/levé | Formalisation réserves = gain v2 majeur |
| **PR / merge** | 15 commits, merges locaux, tag v1.1.0 | ~40 PR (#95–#135), chaque merge Morris | Faible | V0 quasi-absent ; v2 = colonne vertébrale | Git-first v2 corrige la faiblesse critique V0 |
| **Post-merge** | Absent | Check read-only systématique post QA-G4/closure | Absent côté V0 | v2 ajoute contrôle `main` vs attente | Utile mais micro-alignements nombreux (PR #130, #132, #134) |
| **Capitalisation** | `30-Bilan-Exhaustif`, `35-REX` (fin projet) | `inc-01-capitalization` + `mvp-capitalization-report` | Partielle | V0 = bilan terminal riche ; v2 = incrémental + MVP | Combiner : capitalisation INC + bilan terminal |
| **Versioning méthode** | Absent (DoD Cursor seule) | `sfia-v2-method-versioning-standard.md` v2.3.1 | Absent côté V0 | v2 versionne la méthode elle-même | Innovation v2 — à conserver |
| **REX** | `35-Retour-Experience-Projet.md` — 500+ lignes, auto-critique | `mvp-capitalization-report.md` §5–§9 — frictions + enseignements | Forte | V0 plus profond produit/IA ; v2 plus structuré méthode | Fusionner formats en v3.0 |
| **Évolutions post-MVP** | EVOL-001/002/003 + processus RUN (docs 23–28) | Non lancé — décisions post-MVP séparées (§11 capitalisation) | Partielle | V0 a livré 1.1 ; v2 s'arrête au MVP capitalisé | Le cadre EVOL V0 est réutilisable post-pilote v2 |

---

## 4. Analyse comparative par dimension

| Dimension | V0 | SFIA v2 | Écart | Enseignement |
|-----------|-----|---------|-------|--------------|
| **Source de vérité** | Documents locaux + Git tardif (commit initial monolithique) | Git `sfia-workspace` dès bootstrap | Majeur | Git-first v2 corrige l'enseignement critique n°1 du REX V0 |
| **Traçabilité** | 55 docs, gates A/B/C, changelog ; Git = 15 commits | 40+ PR, commits atomiques, post-merge checks | v2 supérieur Git ; V0 supérieur docs produit | Traçabilité = docs + Git, pas l'un ou l'autre |
| **Qualité de décision** | Cadrage humain + gates produit + ADR-001 | Morris L0 indexé (M1–M10+), séparation delivery/clôture/capitalisation | v2 plus explicite gouvernance | Gates V0 = proto-Morris ; formaliser sans alourdir |
| **Coût documentaire** | ~55 fichiers produit, peu de docs méthode | Docs projet + 6+ standards méthode + 3 PR/incrément | v2 plus lourd | Réduire PRs micro-alignement ; garder docs produit V0-level |
| **Vitesse d'exécution** | MVP + K + 1.1 en ~48 h calendaires documentées | Bootstrap → MVP : ~2 semaines, 5 INC séquentiels | V0 >> vélocité | Mode batch IA V0 non reproductible sans garde-fous v2 |
| **Robustesse delivery** | Phases A–J + K0 frein salutaire + lots EVOL ordonnés | Chaîne INC-n standardisée, CLOSED WITH RESERVES | Comparable fonctionnellement | K0 V0 = équivalent gate production absent en v2 |
| **Robustesse QA** | 292 exécutions auto, framework `test:recette` 36/36 | 16 E2E cumulatifs, QA-G3/G4 obligatoires | V0 >> couverture ; v2 >> processus | Porter profondeur tests V0 dans v2.4 |
| **Capacité de reprise** | Docs denses mais formats mixtes ; Git peu fiable | Repo structuré, cycles nommés, prompts catalogués | v2 supérieur | Normaliser formats (Markdown Git uniquement) |
| **Capacité de capitalisation** | Bilan + REX terminal excellents | Capitalisation INC-01 + MVP + 6 standards | Complémentaires | Bilan terminal V0 + capitalisation incrémentale v2 |
| **Capacité d'automatisation** | DoD Cursor, CI, recette auto | L0–L4 formalisés, validation checklist, routing guide | v2 supérieur méthode | Automatiser readiness/post-merge (L1–L2) |
| **Dépendance Cursor/IA** | Forte — REX : efficace implémentation, limité jugement métier/UX | Forte — L3 exécuteur borné, Morris L0 | Comparable | IA = accélérateur, pas décideur — confirmé des deux côtés |
| **Décision humaine** | Ateliers cadrage, recette manuelle gate B, MOA | Morris à chaque GO scope/PR/merge/clôture | v2 plus systématique | Intervention humaine gate B V0 = preuve que QA process seul ne suffit pas |

---

## 5. Ce que V0 faisait mieux ou plus simplement

1. **QA industrialisée** — 292 exécutions automatisées vs 16 E2E v2 ; règle DoD « 4 tests minimum par phase » avec traçabilité IDs (T-RG, T-UI, E2E-*).
2. **Framework recette MOA assistée** — `npm run test:recette` : 36 scénarios stack réelle, rapport auto — innovation process absente en v2.
3. **Production readiness structurée** — Phase K0 (14 critères sécurité), K1–K4 (sécurité, Docker prod, CI/CD, exploitation) avec checklist exploitable.
4. **REX produit d'une profondeur rare** — auto-critique Git, IA, UX, estimation j/h vs vélocité réelle, enseignements numérotés.
5. **EVOL / release management mature** — fiches EVOL détaillées, comité, semver, gates lots A/B/C, conception pré-code (ADR-001 avant EVOL-002).
6. **Documentation métier dense** — SFG, workflows, cahier recette REC-* (32 actifs), matrice automatisation recette.
7. **Vélocité** — Release 1.1 complète (3 évolutions majeures) documentée en ~48 h — preuve de faisabilité IA accélérée.
8. **Lien SFIA précoce** — `Espace SFIA industrialisable.md`, Laboratoire SFIA : réflexion méthodologique en parallèle du produit.

---

## 6. Ce que SFIA v2 améliore clairement

1. **Git source de vérité dès le jour 1** — chaque décision, cycle, livraison = commit + PR traçable (vs commit monolithique V0).
2. **Cycles bornés nommés** — bootstrap → cadrage → archi → design → delivery INC-n, chacun avec périmètre et garde-fous.
3. **Morris gates L0** — M1–M10+ indexés, GO explicite scope/PR/merge/clôture/capitalisation.
4. **PR readiness** — contrôle avant chaque PR : périmètre, réserves, test plan, fichiers hors scope exclus.
5. **Post-merge check** — vérification read-only que `main` reflète l'attente documentée.
6. **Réserves formalisées** — R-UX-01, R-QA-03 à 05 avec statut ouvert/accepté/levé ; CLOSED WITH RESERVES = statut valide.
7. **Capitalisation incrémentale** — rapport par INC + rapport MVP ; standards extraits du pilote (6+ documents méthode).
8. **Versioning méthode** — v2.0 baseline → v2.3.1 avec registre, distinction minor/patch/major future.
9. **Séparation delivery / validation / clôture** — 3 PR par incrément = traçabilité fine (contrepartie : charge review).
10. **Règle from-scratch** — comparaison V0 réservée à fin de pilote, évitant la contamination méthodologique.

---

## 7. Ce que SFIA v2 rend plus lourd

1. **Multiples PR par incrément** — 3 PR × 5 INC = 15 PR delivery seules + PR docs/méthode → charge review Morris (friction F7).
2. **Micro-alignements post-merge** — PR #130, #132, #134, #135 pour aligner statuts après merge des standards → overhead documentaire.
3. **Duplication documentaire** — delivery report + QA report + closure report + parfois capitalization par INC.
4. **Prolifération standards** — 6+ standards en fin de pilote (design coverage, QA, closure, tech arch, versioning) — risque surcharge.
5. **Séparation stricte doc/code** — architecture technique documentaire complète avant premier commit applicatif → délai intentionnel.
6. **Profondeur QA inférieure à V0** — 16 E2E vs 292 exécutions : le processus est plus rigoureux mais la couverture est plus faible.
7. **Absence cadre production readiness** — pas d'équivalent K0–K4 dans v2 (déploiement, sécurité prod, exploitation).
8. **Lenteur relative** — ~2 semaines bootstrap→MVP vs ~48 h V0 documentées (comparaison imparfaite mais directionnelle).

---

## 8. Ce qui doit être conservé dans une future méthode

| Élément | Origine | Raison |
|---------|---------|--------|
| Git source de vérité | v2 | Enseignement critique V0 |
| Morris L0 — arbitrages structurants | v2 | Pas d'automatisation de l'arbitrage |
| Cursor borné L3 — cycles avec garde-fous | v2 | Confirmé efficace par REX V0 |
| Réserves formalisées (R-UX, R-QA) | v2 | CLOSED WITH RESERVES ≠ échec |
| PR readiness avant merge | v2 | Évite pollution `main` |
| Capitalisation incrémentale + bilan terminal | v2 + V0 | INC reports + REX V0-level |
| Versioning méthode | v2 | Traçabilité capacités méthode |
| Framework recette MOA assistée | V0 | Innovation process à réintégrer |
| Production readiness K0–K4 | V0 | Frein salutaire avant go-live |
| EVOL / release management | V0 | Post-MVP structuré |
| DoD tests (4 minimum/phase) | V0 | Couverture QA reproductible |
| ADR pour décisions structurantes | V0 + v2 | ADR-001 V0 = modèle |
| Absence L5 global | v2 | Pas d'automatisation bout-en-bout |
| Cadrage humain amont | V0 | Phase la moins remplaçable par IA |

---

## 9. Ce qui peut être simplifié ou automatisé

| Sujet | Action proposée | Niveau auto |
|-------|-----------------|-------------|
| Micro-alignements post-merge | Fusionner en un seul check L1 automatisé + PR patch groupée | L1–L2 |
| PR readiness | Script/checklist semi-automatisé (git status, diff scope, ancêtres) | L1 |
| Post-merge check | Template read-only réutilisable, exécution Cursor L1 | L1 |
| 3 PR par INC | Option « delivery+QA » fusionnée pour INC mineurs ; closure séparée conservée | Méthode v2.4 |
| Standards multiples | Index unique `sfia-v2/README.md` avec matrice déclenchement | L2 |
| Duplication rapports INC | Template unique paramétrable (delivery/QA/closure sections) | L2 |
| Cahier tests | Génération IDs + matrice couverture depuis backlog US | L2–L3 |
| Framework recette MOA | Porter `test:recette` V0 comme module standard QA v2 | L3 |
| Formats mixtes V0 | Abandon docx/xlsx au profit Markdown Git | Gouvernance |
| Versioning patch | Limiter patches aux vrais alignements ; éviter PR dédiée par typo | v2.4 règle |

---

## 10. Grille SFIA v3.0 readiness

| Critère | Niveau | Justification | Décision recommandée |
|---------|--------|---------------|----------------------|
| **Méthode suffisamment prouvée** | Élevé | Pilote complet bootstrap→capitalisation MVP ; 6 standards extraits | Pas besoin de v3.0 immédiat |
| **Besoin second pilote** | Moyen | Un pilote suffit pour preuve de concept ; second utile sur domaine différent | Optionnel — pas bloquant |
| **Dette documentaire** | Moyen | Micro-alignements, ADR/DAT projet v2 non produits, profondeur QA | Consolider v2.4 avant v3.0 |
| **Automatisation possible** | Élevé | Readiness, post-merge, matrice couverture, recette MOA | Prioriser L1–L2 en v2.4 |
| **Simplification nécessaire** | Élevé | 3 PR/INC, standards multiples, micro-alignements | v2.4 = cycle simplification |
| **Gouvernance humaine** | Confirmé | REX V0 + v2 : IA limitée sur métier, UX, go-live | Conserver Morris L0 en v3.0 |
| **Réutilisabilité** | Moyen-élevé | Standards réutilisables ; templates projet à unifier (EVOL ↔ INC) | Unifier en v2.4 |
| **Scalabilité** | Moyen | Méthode lourde pour petits projets ; adaptée projets structurants | Profils projet light/full en v2.5 |
| **Coût d'exécution** | Élevé (v2) vs Bas (V0) | Overhead PR/docs vs vélocité batch IA | Simplifier sans perdre Git-first |
| **Risque sur-industrialisation** | Moyen-élevé | 40+ PR, 6 standards, versioning patch — tendance visible | Freiner avant v3.0 |

---

## 11. Options de trajectoire

### Option 1 — Stabiliser v2.3.1

| Pour | Contre |
|------|--------|
| Méthode actée, standards en place | Ne corrige pas frictions F1–F8 ni profondeur QA |
| Coût minimal | Dette documentaire et overhead persistent |

**Pertinence :** acceptable court terme ; insuffisant comme trajectoire unique.

### Option 2 — Créer v2.4 / v2.5 consolidation

| Pour | Contre |
|------|--------|
| Absorbe enseignements comparaison V0↔v2 | Demande un cycle méthode dédié |
| Simplifie PR chain, fusionne forces V0 (QA, K0–K4) | Risque d'ajouter encore des standards |
| Prépare v3.0 sur base saine | Délai avant nouveau pilote |

**Périmètre v2.4 suggéré :**

- Standard QA enrichi (profondeur V0 + gates v2)
- Standard production readiness light (K0–K4 adapté)
- Règle PR chain simplifiée (2 PR max/INC mineur)
- Fusion templates EVOL ↔ INC
- Index méthode unique

**Pertinence :** **recommandée en priorité.**

### Option 3 — Second pilote

| Pour | Contre |
|------|--------|
| Valide réutilisabilité hors bâtiment/chantier | Coût temps ; un pilote déjà complet |
| Teste méthode sur autre taille/domaine | Sans v2.4, reproduit les mêmes frictions |

**Pertinence :** recommandé **après** v2.4, sur projet domaine différent (ex. Interv360).

### Option 4 — Ouvrir cadrage v3.0

| Pour | Contre |
|------|--------|
| Vision long terme | Prématuré — un seul pilote, frictions non corrigées |
| | Risque de tout refondre au lieu de consolider |

**Pertinence :** **non recommandé maintenant** — cadrage exploratoire seulement après v2.4 + optionnel second pilote.

---

## 12. Recommandation finale

### Verdict : **V2 NEEDS LIGHT CONSOLIDATION**

La méthode SFIA v2.0 est **validée par un pilote complet** (bootstrap → capitalisation MVP avec réserves, 6 standards, versioning v2.3.1). Elle apporte des gains structurels indiscutables (Git-first, Morris L0, réserves, capitalisation) par rapport à V0.

Elle n'est pas encore **stable** ni **optimale** : overhead PR, profondeur QA inférieure à V0, absence production readiness, micro-alignements nombreux. Une consolidation **v2.4** doit absorber les forces V0 avant tout cadrage v3.0 ou second pilote lourd.

**Hiérarchie recommandée :**

1. **v2.4 consolidation** (maintenant)
2. **Stabilisation v2.3.1** en parallèle (usage courant)
3. **Second pilote** (après v2.4, optionnel)
4. **Cadrage v3.0** (exploratoire, pas avant v2.5)

---

## 13. Décision Morris attendue

| # | Décision possible | Recommandation agent |
|---|-------------------|----------------------|
| 1 | **GO stabilisation SFIA v2.x** — utiliser v2.3.1 tel quel pour prochains cycles documentaires | ✅ Oui — baseline opérationnelle |
| 2 | **GO v2.4 consolidation** — cycle méthode : QA enrichi, production readiness light, simplification PR chain, fusion EVOL/INC | ✅ **Prioritaire** |
| 3 | **GO second pilote** — lancer SFIA v2 sur autre projet (post v2.4) | ⏳ Optionnel — après consolidation |
| 4 | **GO cadrage SFIA v3.0** — ouvrir réflexion rupture doctrine | ❌ Non maintenant — prématuré |
| 5 | **NO-GO v3.0 immédiat** | ✅ Confirmé |

**Question Morris à trancher :**

> Acceptez-vous d'ouvrir un cycle méthode **SFIA v2.4 — Consolidation post-comparaison V0** avant toute nouvelle évolution produit Chantiers360 v2 ou second pilote ?

---

*Document produit par audit comparatif read-only — 2026-07-07.*

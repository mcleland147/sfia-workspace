# SFIA v2.0 — Technical Architecture & Decision Documentation Standard

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/2026-07-07-sfia-v2-technical-architecture-decision-documentation-standard.md`
**Cycle :** Capitalisation méthode SFIA v2.0 — Technical Architecture & Decision Documentation
**Version :** 1.0 — draft revue Morris
**Source pilote :** Chantiers360 v2 — `05-technical-architecture/`, delivery INC-01 à INC-05

> **Standard méthode** — définit règles et modèles. **Ne produit pas** les ADR / DAA / DAT complets d'un projet dans le cycle d'adoption du standard.

## 1. Objectif

Définir les règles SFIA v2.0 de **documentation technique** :

- technical decision register ;
- ADR light ;
- DAA light ;
- DAT light ;
- critères de déclenchement ;
- gates Morris ;
- articulation avec delivery, QA, design coverage, exploitation et capitalisation.

**Objectifs :**

| # | Objectif |
|---|----------|
| O1 | Éviter la **sous-documentation** des décisions structurantes |
| O2 | Éviter la **surdocumentation** des petits incréments |
| O3 | Garder **Git** comme source de vérité |
| O4 | Documenter au **bon niveau**, au **bon moment** |

**Questions adressées :**

1. Quand tracer une décision dans un registre technique ?
2. Quand produire un ADR ?
3. Quand produire un DAA light ?
4. Quand produire un DAT light ?
5. Quels aspects techniques couvrir selon la maturité du projet ?
6. Comment éviter sous- et sur-documentation ?
7. Comment relier architecture, delivery, QA, exploitation et décisions Morris ?

## 2. Doctrine

| Principe | Règle |
|----------|-------|
| **Git = source de vérité** | Décisions, registres, ADR/DAA/DAT versionnés — prompts ne priment pas sur le repo |
| **Morris = arbitrage structurant** | L0 — aucun document ne remplace une décision Morris |
| **Cursor = exécution bornée** | L3 — documente et implémente dans un périmètre défini |
| **ChatGPT = cadre / route / analyse** | Challenge, prompts, lecture rapports — pas décideur |
| **Automatiser la doc répétable** | L2 — jamais l'arbitrage structurant |
| **MVP léger, traçabilité forte** | Décisions difficiles à inverser = traçables |
| **Bon niveau, bon moment** | Registre → ADR → DAA → DAT selon maturité et impact |

**Standards liés :**

- `2026-07-06-sfia-v2-incremental-delivery-closure-standard.md` — chaîne INC-n
- `sfia-v2-delivery-qa-test-standard.md` — QA-G3/G4
- `sfia-v2-design-coverage-standard.md` — frontend / extrapolation UI
- `sfia-v2-automation-levels.md` — L0–L5

## 3. Définitions

### Technical decision register

**Registre léger** des décisions techniques.

| Usage | Détail |
|-------|--------|
| Tracer | Toutes les décisions utiles |
| Consolider | Vue d'ensemble projet |
| Arbitrer | Décider si promotion en ADR |

**Emplacement recommandé :** `05-technical-architecture/2026-07-06-technical-decisions.md` ou `delivery-inc-0n-decisions.md` selon périmètre.

### ADR — Architecture Decision Record

Trace **courte** d'une décision **structurante**.

| Usage | Détail |
|-------|--------|
| Contexte | Pourquoi la décision était nécessaire |
| Options | Alternatives considérées |
| Décision | Choix acté |
| Conséquences | Impacts techniques et produit |
| Responsabilité | Gate Morris explicite |

### DAA light — Document d'Architecture Applicative léger

Vue **applicative** cohérente — modules, données, flux, frontend, NFR applicatives, trajectoire.

**Pas** un dump de fichiers — une **vue** pour aligner delivery et extensions.

### DAT light — Dossier d'Architecture Technique léger

Vue **technique exploitable** — déploiement, hébergement, environnements, sécurité infra, run, CI/CD, backup.

**Règle structurante :** pas de DAT sans **cible d'exploitation** définie.

## 4. Matrice de décision documentation technique

| Situation | Register | ADR | DAA light | DAT light | Gate Morris | Exemple Chantiers360 |
|-----------|----------|-----|-----------|-----------|-------------|----------------------|
| Choix stack applicative | ✅ | ✅ **Requis** | ⚠️ Recommandé | ❌ | ✅ | Next.js + PG + Drizzle + Tailwind — `2026-07-06-technical-decisions.md` T1/M1 |
| Choix ORM / persistance | ✅ | ✅ **Requis** | ⚠️ | ❌ | ✅ | Drizzle — M2 |
| Auth différée | ✅ | ✅ **Recommandé** | ⚠️ Avant auth | ❌ | ✅ | M3 — auth après INC-01 |
| DB local/dev first | ✅ | ✅ **Recommandé** | ❌ | ❌ | ✅ | M4 — docker test 5433 |
| Modèle de données structurant | ✅ | ⚠️ Si irréversible | ✅ **Recommandé** | ❌ | ✅ | `data-model-light.md` |
| Migration DB significative | ✅ | ⚠️ Si structurante | ⚠️ | ❌ | ⚠️ | INC-02/03/04 — delivery decisions suffisantes |
| Écran secondaire sans impact archi | ✅ | ❌ | ❌ | ❌ | ❌ | INC-05 UI — design coverage |
| Design coverage / extrapolation UI | ✅ UX | ❌ | ❌ | ❌ | ⚠️ | R-UX-01 — standard design coverage |
| Passage multi-user | ✅ | ✅ **Requis** | ✅ **Recommandé** | ⚠️ | ✅ | Hors MVP — extension future |
| Intégration externe | ✅ | ✅ **Requis** | ✅ | ⚠️ | ✅ | Hors MVP |
| Choix hébergement | ✅ | ⚠️ | ⚠️ | ✅ **Requis** | ✅ | Non acté — pas de cible prod |
| CI/CD | ✅ | ⚠️ | ⚠️ | ✅ **Requis** | ✅ | Non déployé |
| Déploiement production | ✅ | ⚠️ | ⚠️ | ✅ **Requis** | ✅ | Non applicable MVP pilote |
| Correction documentaire | ⚠️ | ❌ | ❌ | ❌ | ❌ | PR docs post-merge |
| Micro-cycle réserve | ✅ | ❌ | ❌ | ❌ | ⚠️ | R-QA-02 levée — docs only |
| Dette technique volontaire | ✅ | ✅ **Recommandé** | ⚠️ | ❌ | ✅ | Auth différée, panneaux mock |

**Légende :** ✅ requis/recommandé — ⚠️ conditionnel — ❌ non requis.

## 5. Technical decision register

| Aspect | Règle |
|--------|-------|
| **Rôle** | Traçabilité continue — filet de sécurité avant ADR |
| **Contenu minimal** | ID, date, décision, contexte, impact, statut, source/PR, besoin ADR ? |
| **vs ADR** | Register = toutes décisions utiles ; ADR = structurantes uniquement |
| **Emplacement** | `2026-07-06-technical-decisions.md`, `delivery-inc-0n-decisions.md` |
| **Reste au register** | Décision réversible, périmètre incrément, pas d'impact transverse |
| **Promotion ADR** | Stack, persistance, auth, modèle central, intégration, sécurité, dette volontaire |

**Exemple Chantiers360 :** `2026-07-06-technical-decisions.md` T1–T11 + arbitrages M1–M10 — registre existant, **candidats promotion ADR** non produits dans le cycle standard.

## 6. Quand produire un ADR

ADR **requis ou fortement recommandé** si la décision concerne :

- stack applicative, framework, ORM, base de données ;
- stratégie de persistance, authentification, autorisations ;
- modèle de données structurant, migration difficilement réversible ;
- architecture frontend structurante, intégration externe ;
- sécurité, exploitation, dette technique volontaire ;
- arbitrage prompt vs repo avec **impact architecture** ;
- décision **difficilement réversible**.

**Exemples Chantiers360 :**

| Décision | Documentation actuelle | Standard futur |
|----------|------------------------|----------------|
| Next.js + PostgreSQL + Drizzle + Tailwind | `2026-07-06-technical-decisions.md` T1/M1 | **ADR recommandé** — cycle séparé |
| Drizzle vs autre ORM | M2 | **ADR recommandé** |
| Auth différée | M3 | **ADR recommandé** |
| DB local/dev first | M4 | **ADR recommandé** |
| Prochaines actions dérivées | T4, INC-05 decisions | Delivery suffisant ; ADR si généralisation modèle |
| R-UX-01 design coverage | `sfia-v2-design-coverage-standard.md` | **Pas ADR** — standard méthode UX |

## 7. Quand produire un DAA light

DAA light **requis ou recommandé** :

- avant stabilisation MVP étendu ;
- avant extension structurante (auth, multi-user, module métier) ;
- avant refactor majeur ;
- avant API ou intégration externe ;
- avant industrialisation applicative ;
- quand la structure devient difficile à comprendre via seuls fichiers.

**Contenu minimal :** contexte, objectifs, périmètre, hors périmètre, vue applicative, modules, données, flux, frontend, backend/services, dépendances, NFR, décisions associées, réserves, trajectoire.

**Exemples Chantiers360 :**

| Situation | DAA light |
|-----------|-----------|
| INC-01 à INC-05 MVP | Docs `05-technical-architecture/` **suffisants** à ce stade |
| Avant auth / multi-user | **Recommandé** |
| Avant devis/facturation / intégration | **Recommandé** |
| Avant industrialisation produit | **Recommandé** |

## 8. Quand produire un DAT light

DAT light **requis** si :

- déploiement réel, exploitation cible, hébergement cible ;
- environnements staging/prod définis ;
- CI/CD, supervision, backup/restore, secrets ;
- runbook, transmission équipe technique ;
- sécurité infrastructure, réseau, rollback production.

**Règle :** pas de DAT sans cible d'exploitation.

**Contenu minimal :** contexte, archi technique cible, environnements, hébergement, config, secrets, CI/CD, DB, migrations, logs/monitoring, backup, sécurité, installation, rollback, support/run, responsabilités.

**Exemples Chantiers360 :**

| Situation | DAT light |
|-----------|-----------|
| MVP pilote local/dev + test Docker | **Pas de DAT** — pas d'exploitation cible |
| Hébergement ou run réel | **DAT requis** — cycle séparé |

## 9. Quand ne pas produire ADR / DAA / DAT

Ne **pas** produire pour :

- micro-cycle documentaire, alignement statut ;
- petit correctif réversible ;
- écran secondaire sans impact architecture ;
- réserve documentation-only ;
- MVP exploratoire sans décision structurante nouvelle ;
- PR readiness, post-merge check ;
- capitalisation sans changement architecture.

> Ne pas confondre **traçabilité utile** et **surdocumentation**.

## 10. Non-functional requirements (NFR)

| Document | Rôle NFR |
|----------|----------|
| **ADR** | Mentionne NFR impactées par la décision |
| **DAA light** | Synthétise NFR applicatives |
| **DAT light** | Détaille NFR exploitation / infrastructure |

**NFR selon pertinence :** sécurité, performance, disponibilité, maintenabilité, observabilité, backup/restore, scalabilité, accessibilité (UI), réversibilité, exploitabilité, conformité, résilience, coût.

**Règle :** choix structurant sans NFR explicites = **incomplet** ou **avec réserve**.

## 11. Données, persistance et migrations

| Situation | Documentation |
|-----------|---------------|
| Migration mineure réversible | Register ou décision delivery |
| Migration structurante | **ADR recommandé** |
| Modèle de données central | **DAA light** doit synthétiser |
| Exploitation DB réelle | **DAT light requis** |

**Exemples Chantiers360 :**

- PostgreSQL + Drizzle → ADR recommandé (futur) ;
- Migrations `0001`–`0003` INC-02/03/04 → décisions delivery suffisantes ;
- Passage production DB → DAT requis.

## 12. Sécurité, auth et permissions

| Situation | Documentation | Gate |
|-----------|---------------|------|
| Auth différée | ADR recommandé | Morris |
| Introduction auth | ADR requis + DAA recommandé | Morris |
| Multi-user / permissions | ADR requis | Morris |
| Secrets / env / run | DAT si déploiement réel | Morris |
| Sécurité structurante | ADR + gate Morris obligatoire | Morris |

**Chantiers360 :** auth différée M3 — **ADR recommandé futur**, non produit dans ce cycle.

## 13. Environnements et déploiement

| Situation | Documentation |
|-----------|---------------|
| Local/dev first | Register ou ADR si structurant |
| Staging / production | **DAT light** |
| CI/CD réelle | **DAT light** ou section dédiée |
| Environnement partagé | Responsabilités + runbook (DAT) |

**Chantiers360 :** `.env.test`, Docker 5433, port 3000/3001 — documenté QA/runbook INC-01 ; **pas de DAT** sans cible prod.

## 14. Observabilité et exploitation

Logs, monitoring, alerting, healthcheck, backup, restore, support, runbook, incident, rollback.

**Règle :** engagement d'**exploitation réelle** → **DAT light**.

## 15. Architecture frontend

| Situation | Standard / document |
|-----------|---------------------|
| Design coverage / extrapolation | `sfia-v2-design-coverage-standard.md` |
| Décision frontend structurante | **ADR recommandé** |
| Refactor frontend majeur | **DAA light recommandé** |
| Nouvelle DA | **Gate Morris obligatoire** |

**Chantiers360 :** R-UX-01 → design coverage, pas ADR technique.

## 16. API, flux et intégrations

| Situation | Documentation |
|-----------|---------------|
| Intégration externe structurante | **ADR requis** |
| Plusieurs flux applicatifs | **DAA light recommandé** |
| Flux réseau / sécurité / exploitation | **DAT light** |

## 17. Lien avec QA / Test

| Règle | Application |
|-------|-------------|
| ADR mentionne impact QA | Si décision affecte testabilité ou risque |
| Migration structurante | Preuve QA obligatoire |
| DAT | Vérification installation/run si exploitation réelle |
| Delivery incrémental | **QA-G3 / QA-G4** restent obligatoires |

**Référence :** `sfia-v2-delivery-qa-test-standard.md`

## 18. Templates légers

### ADR light template

```markdown
# ADR-NNN — [Titre]

| Champ | Valeur |
|-------|--------|
| **Statut** | Proposé / Accepté / Déprécié / Remplacé |
| **Date** | YYYY-MM-DD |
| **Gate Morris** | Oui / Non — référence |

## Contexte
[Pourquoi cette décision]

## Options considérées
1. …
2. …

## Décision
[Choix acté]

## Raisons
[Justification]

## Conséquences
[Positives / négatives / dette]

## NFR impactées
[Sécurité, perf, …]

## Impact QA
[Tests, E2E, migration]

## Références Git / PR
[Liens, commits, fichiers]
```

### DAA light template

```markdown
# DAA light — [Projet / module]

## Objectif / Contexte / Périmètre / Hors périmètre
## Vue applicative
## Modules
## Données
## Flux
## Frontend
## Backend / services
## Dépendances
## NFR applicatives
## Décisions associées (ADR, register)
## Réserves
## Trajectoire
```

### DAT light template

```markdown
# DAT light — [Projet / environnement]

## Objectif / Contexte
## Environnements (local, dev, test, staging, prod)
## Hébergement
## Configuration / Secrets / variables
## CI/CD
## Base de données / Migrations
## Logs / Monitoring
## Backup / Restore
## Sécurité
## Installation
## Rollback
## Support / Run / Responsabilités
```

## 19. Gates Morris

| Situation | Gate Morris |
|-----------|-------------|
| Décision structurante ou difficilement réversible | **Obligatoire** — ADR |
| Extension majeure / refactor structurant | **Obligatoire** — DAA light |
| Exploitation réelle | **Obligatoire** — DAT light |
| Auth, sécurité, hébergement, changement stack, données sensibles, CI/CD prod | **Obligatoire** |
| Aucun document ne remplace la décision | **Invariant L0** |

## 20. Niveaux d'automatisation

| Niveau | Rôle — doc technique |
|--------|----------------------|
| **L0** | Morris — arbitrage ADR/DAA/DAT |
| **L1** | Contrôle présence register / ADR / gate |
| **L2** | Génération guidée ADR / DAA / DAT à partir templates |
| **L3** | Exécution bornée documentaire Cursor |
| **L4** | Orchestration delivery + doc technique + QA |
| **L5 ciblé** | Lecture/audit documentaire read-only |
| **L5 global** | **Interdit** — pas de décision auto |

**Règle :** SFIA automatise la **préparation documentaire**, jamais la **décision structurante**.

## 21. Anti-patterns

| # | Anti-pattern |
|---|--------------|
| AP1 | Tout transformer en ADR |
| AP2 | Ne rien documenter car « MVP » |
| AP3 | DAT sans exploitation cible |
| AP4 | DAA qui répète le code sans vision |
| AP5 | Confondre ADR et compte rendu |
| AP6 | Confondre DAA et DAT |
| AP7 | Laisser Cursor décider seul l'architecture |
| AP8 | Documentation non reliée à Git |
| AP9 | Architecture cible non validée Morris |
| AP10 | Documenter a posteriori pour justifier un choix non arbitré |

## 22. Application Chantiers360 v2

| Décision / aspect | Documentation existante | Standard futur | Action ce cycle |
|-------------------|-------------------------|----------------|-----------------|
| Stack Next.js + PG + Drizzle + Tailwind | `2026-07-06-technical-decisions.md` T1/M1 | ADR recommandé | Standard seulement |
| Drizzle ORM | M2 | ADR recommandé | Standard seulement |
| Auth différée | M3 | ADR recommandé | Standard seulement |
| DB local/dev first | M4 | ADR recommandé | Standard seulement |
| Modèle données léger | `data-model-light.md` | DAA light avant extension | Standard seulement |
| Migrations INC-02/03/04 | delivery decisions | Register / delivery suffisant | Inchangé |
| Prochaines actions dérivées | T4, INC-05 | Delivery suffisant | Inchangé |
| R-UX-01 | design coverage standard | Pas ADR | Inchangé |
| Exploitation / déploiement | Non ciblé | Pas de DAT à ce stade | Standard seulement |
| Auth / multi-user / billing futur | Hors MVP | DAA + ADR avant extension | Recommandation future |

> **Important :** aucun ADR / DAA / DAT projet complet créé dans ce cycle.

## 23. Décisions postérieures possibles

| Cycle | Statut |
|-------|--------|
| Micro-cycle ADR Chantiers360 (stack, Drizzle, auth, DB) | Non lancé — Morris |
| DAA light Chantiers360 avant extension produit | Non lancé |
| DAT Chantiers360 avant déploiement réel | Non lancé |
| Comparaison V0 | Non lancée |
| Micro-cycle réserves QA | Non lancé |
| Trajectoire produit | Non décidée |

Chaque item = **cycle séparé** avec gate Morris.

---

**Références :**

- `2026-07-06-sfia-v2-incremental-delivery-closure-standard.md`
- `sfia-v2-delivery-qa-test-standard.md`
- `sfia-v2-design-coverage-standard.md`
- `sfia-v2-design-figma-cycle-standard.md`
- `projects/chantiers360-v2/05-technical-architecture/2026-07-06-technical-decisions.md`

**Decision (provisional) :** SFIA V2.0 TECHNICAL ARCHITECTURE & DECISION DOCUMENTATION STANDARD DOCUMENTED — PENDING MORRIS VALIDATION

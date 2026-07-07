# SFIA v2.4 — Consolidation & Operating Efficiency Standard

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`  
**Cycle :** SFIA v2.4 — Consolidation & Operating Efficiency  
**Version SFIA :** v2.4 — standard structurant de consolidation  
**Baseline précédente :** SFIA v2.3.1  
**Déclencheur :** REX final Chantiers360 v2 — PR #138  
**Décision Morris :** GO SFIA v2.4 (2026-07-07)

> **Standard méthode unique** du cycle v2.4 — documentation-only. Ne lance pas v3.0, n'implémente pas d'agent handoff, ne crée pas de sous-système technique.

---

## 1. Statut du standard

| Élément | Valeur |
|---------|--------|
| **Version** | SFIA v2.4 |
| **Statut** | Standard de consolidation — en attente validation Morris post-rédaction |
| **Baseline précédente** | SFIA v2.3.1 (opérationnelle) |
| **Déclencheur** | `chantiers360-v2-final-pilot-rex-report.md` — pilote fondateur bouclé |
| **Décision Morris** | GO SFIA v2.4 — consolidation operating model |
| **v3.0** | **Immediate NO-GO** — hors périmètre v2.4 |
| **Nature** | Decision-driven · repo-first · documentation-only |

**Standards liés (v2.0 → v2.3.1, inchangés) :**

- `sfia-v2-automation-levels.md` — L0–L5
- `sfia-v2-incremental-delivery-closure-standard.md` — chaîne INC-n
- `sfia-v2-delivery-qa-test-standard.md` — QA transverse
- `sfia-v2-method-versioning-standard.md` — règles versioning
- `sfia-cycle-routing-guide.md` — routage cycles

---

## 2. Finalité

SFIA v2.4 consolide la méthode **après le pilote Chantiers360 v2** en réduisant la **lourdeur opérationnelle** sans affaiblir :

| Conserver | Réduire |
|-----------|---------|
| Traçabilité Git | PR micro-alignements redondantes |
| Qualité et réserves | Gates Morris sur tâches non structurantes |
| Garde-fous méthode | Documentation dupliquée par INC |
| Décision humaine L0 sur arbitrages structurants | Surcharge PR-driven |
| Git = source de vérité | Friction opérationnelle inutile |

**Objectif :** une méthode **plus efficace, adaptative et soutenable** — pas une rupture doctrine.

---

## 3. Verdict REX fondateur

Verdict capitalisé du pilote Chantiers360 v2 (`chantiers360-v2-final-pilot-rex-report.md`) :

| Verdict | Lecture v2.4 |
|---------|--------------|
| **PILOT COMPLETE** | Cycle intention → capitalisation démontré — base solide |
| **METHOD PROVEN** | SFIA v2.0–v2.3.1 validée — pas de refonte |
| **OPERATING MODEL TOO HEAVY** | 44 PR / 8 micro-alignements — **à corriger** |
| **V2.4 CONSOLIDATION RECOMMENDED** | Ce standard répond à ce verdict |
| **V3.0 IMMEDIATE NO-GO** | v2.4 ≠ v3.0 — consolidation uniquement |

**Métriques pilote de référence** (`chantiers360-v2-pilot-metrics-capitalization-report.md`) :

- ~3 jours / ~44 h — 44 PR — 6 code / 38 docs — 8 micro-alignements (18 %)

---

## 4. Principes directeurs v2.4

| # | Principe | Règle |
|---|----------|-------|
| P1 | **Decision-driven first** | Les décisions structurantes précèdent le flux PR |
| P2 | **Repo-first always** | Git versionne — prompts ne priment pas sur le repo |
| P3 | **Documentation-only (ce cycle)** | v2.4 = standard documentaire — pas d'implémentation technique |
| P4 | **Automate repeatable checks** | L1/L2 sur contrôles répétables — jamais arbitrage structurant |
| P5 | **Reduce friction without reducing control** | Moins de PR, mêmes garde-fous sur l'essentiel |
| P6 | **Adapt method weight to project risk** | Profils Light / Standard / Critical |
| P7 | **Morris L0** | Arbitrages structurants, GO scope, merge, clôture, capitalisation |
| P8 | **Cursor = exécuteur contrôlé L3** | Périmètre borné, rapport obligatoire |
| P9 | **ChatGPT = cadre / route / analyse** | Prompts, challenge, lecture rapports — pas décideur |
| P10 | **Git = source de vérité** | Commits, PR, historique — traçabilité complète |

**Doctrine inchangée :** *Automatiser l'exécution répétable, jamais l'arbitrage structurant.*

---

## 5. Profils projet & méthode adaptative

### 5.1 Profils définis

| Profil | Usage typique | Doc | QA | Morris | PR readiness | Auto max | Cycles types |
|--------|---------------|-----|-----|--------|--------------|----------|--------------|
| **Light** | Correction doc, alignement, micro-cycle | Minimale | QA doc | GO merge si doc-only | Allégée | L1–L2 | DOC, alignement post-merge |
| **Standard** | MVP, INC delivery, cycle méthode | Standard v2.0 | QA standard | GO scope + merge | Standard | L1–L2, L3 borné | INC, bootstrap, cadrage |
| **Critical** | Archi, sécurité, go-live, rupture données | Complète | QA critical | GO explicite chaque gate | Renforcée | L1–L2 | Archi tech, production readiness |
| **Exploratory** | Spike, faisabilité, prototype | Légère | QA light | GO scope court | Allégée | L1 | Spike, POC |
| **Capitalization** | REX, métriques, standards | Complète | QA doc + cohérence | GO capitalisation | Standard | L1–L2 | CAPA, REX final |
| **RUN / Support** | Correction, maintenance, hotfix | Ciblée | QA ciblée + non-régression | GO si impact structurant | Adaptée | L1–L2 | RUN |
| **EVOL / Evolution** | Évolution structurée post-MVP | Fiche EVOL + impact | QA standard–critical | GO conception + delivery | Standard | L1–L3 | EVOL |
| **INC / Increment** | Livraison incrémentale bornée | Delivery + QA + closure | QA standard | GO INC-n + clôture | Standard (voir §8) | L1–L3 | INC-01…n |

### 5.2 Budget PR indicatif par profil

| Profil | PR budget cible | Note |
|--------|-----------------|------|
| **Light** | 1–2 | Regrouper alignements |
| **Standard** | 15–25 (projet MVP) | vs 44 pilote fondateur |
| **Critical** | Variable — justifié | Chaque PR = décision distincte |
| **Capitalization** | 1–3 | REX + métriques + standard |
| **INC (unitaire)** | 2–3 max | Delivery + QA/closure groupés si mineur |

> **Pilote fondateur :** profil **Full** (~40+ PR) — acceptable **une fois** pour extraction standards — **non cible routine**.

### 5.3 Sélection du profil

Morris ou ChatGPT (cadrage) propose le profil — **Morris valide** si Critical ou changement de doctrine.

---

## 6. QA adaptative & recette MOA

### 6.1 Niveaux QA

| Niveau | Périmètre | Preuves | Profils |
|--------|-----------|---------|---------|
| **QA light** | Cohérence doc, liens, statuts | Checklist L1 | Light, Exploratory |
| **QA standard** | Tests auto + scénarios métier | Rapport QA-G3, E2E ciblés | Standard, INC, EVOL |
| **QA critical** | Sécurité, prod, données, régression large | Rapport complet + MOA si requis | Critical, go-live |
| **QA documentation-only** | Périmètre, garde-fous, diff borné | PR readiness doc | DOC, CAPA |
| **QA post-merge** | `main` = attente documentée | Rapport read-only L1 | Tous cycles mergés |

### 6.2 Recette MOA

| Situation | Recette MOA |
|-----------|-------------|
| INC livrant parcours métier visible | **Recommandée** — scénarios REC-* ou équivalent |
| DOC / alignement / capitalization | **Non requise** |
| Correction RUN sans impact UX | **Non requise** — non-régression auto suffisante |
| Go-live / production readiness | **Obligatoire** — campagne MOA signée Morris |
| Pilote fondateur | Framework MOA assistée = **input v2.4** (porter depuis V0) |

### 6.3 Réserves et non-régression

- Réserves formalisées (R-UX, R-QA) — **conservées** de v2.3.1
- Non-régression documentaire : vérifier références croisées post-merge (L1)
- CLOSED WITH RESERVES reste statut valide

---

## 7. Production readiness & typologie INC / EVOL / RUN

### 7.1 Types de cycle

| Type | Définition | Entrée | Sortie | Risque | Auto |
|------|------------|--------|--------|--------|------|
| **INC** | Incrément borné — valeur livrable | Backlog INC-n validé, GO Morris | CLOSED / CLOSED WITH RESERVES | Moyen | L1–L3 |
| **EVOL** | Évolution structurée post-MVP | Fiche EVOL qualifiée | Release semver + recette | Moyen–élevé | L1–L3 |
| **RUN** | Maintien, correction, exploitation | Ticket / incident documenté | Correctif mergé + QA ciblée | Faible–moyen | L1–L2 |
| **CAPA** | Capitalisation méthode | Fin cycle ou pilote | REX, métriques, standard | Faible | L1–L2 |
| **DOC** | Documentation-only | Périmètre borné Morris | PR doc mergée | Faible | L1–L2 |

### 7.2 Production readiness (input V0)

SFIA v2.4 **intègre le principe** K0–K4 V0 sans le détailler ici :

| Phase | Objet | Quand |
|-------|-------|-------|
| **K0** | Audit production readiness | Avant go-live |
| **K1–K4** | Sécurité, packaging, CI/CD, exploitation | Avant PROD |

> Standard détaillé production readiness = **cycle futur** post-v2.4 — **non lancé** dans ce document.

### 7.3 Chaîne INC-n (consolidée v2.4)

Baseline v2.0 conservée — **simplification v2.4** :

```
Delivery INC-n → QA-G3 → PR readiness → GO Morris PR → merge
→ QA-G4 (L1 read-only) → Closure → [Capitalization si requis]
```

**Simplification :** INC mineur peut fusionner QA-G4 + closure en **1 PR doc** si périmètre ≤ 3 fichiers et aucune réserve nouvelle bloquante — **GO Morris**.

---

## 8. PR, gates & operating efficiency

### 8.1 Politique anti-friction

| Règle | Application |
|-------|-------------|
| **Éviter PR trop petites** | Pas de PR pour typo isolée — grouper en patch |
| **Regrouper changements cohérents** | Alignements post-merge → 1 PR patch groupée max |
| **Ne pas multiplier gates Morris** | Validation technique/doc ≠ décision structurante |
| **Réserver Morris aux arbitrages** | Stack, scope, GO delivery, réserves bloquantes, clôture |
| **Distinguer validations** | Technique (Cursor/CI) · Documentaire (L1) · Métier (MOA) · Architecture (Morris) |

### 8.2 Gate Morris — quand requis

**Gate Morris OBLIGATOIRE si :**

- arbitrage structurant (stack, scope MVP, architecture) ;
- risque méthodologique ou dette importante ;
- changement de doctrine ou standard structurant ;
- décision irréversible (schéma, breaking change, suppression) ;
- GO delivery code, merge PR structurante, clôture INC, capitalisation ;
- passage vers version méthode supérieure (v2.5, **pas v3.0** sans décision dédiée).

**Gate Morris NON requis si :**

- post-merge check read-only (L1) ;
- correction typo / lien sans impact statut ;
- rapport Cursor sans modification repo ;
- validation technique automatisée (lint, tests CI).

### 8.3 Post-merge check ≠ PR automatique

| v2.3.1 (pilote) | v2.4 (cible) |
|-----------------|--------------|
| Post-merge → souvent nouvelle PR alignement | Post-merge → **rapport L1** — PR seulement si écart statut bloquant |

### 8.4 NO-GO explicite

Documenter un **NO-GO Morris** si : périmètre dépassé, réserve bloquante non arbitrée, standard non respecté, v3.0 suggéré prématurément.

---

## 9. Automation L1/L2 & checks répétables

### 9.1 Cible v2.4

| Niveau | Cible v2.4 | Statut |
|--------|------------|--------|
| **L0** | Manuel assisté — Morris, ChatGPT, Cursor | Baseline — inchangé |
| **L1** | **Cible principale** — contrôles automatisés read-only | À renforcer |
| **L2** | **Cible principale** — génération guidée prompts/rapports | À renforcer |
| **L3** | Exécution bornée Cursor — trajectoire future | Conservé, non étendu |
| **L4** | Orchestration contrôlée — horizon | Non implémenté v2.4 |
| **L5 ciblé** | Read-only, réversible — réflexion future | Non implémenté v2.4 |
| **L5 global** | **Hors cible** | Interdit |

### 9.2 Automatisable en v2.4 (L1/L2)

- présence documentaire et sections obligatoires ;
- cohérence statuts projet vs `main` ;
- vérification liens internes ;
- checklist PR readiness ;
- génération guidée prompts (templates existants) ;
- génération guidée rapports (readiness, post-merge, validation) ;
- synthèse diff (`git diff --stat`, fichiers hors périmètre) ;
- détection fichiers sensibles (.env, secrets).

### 9.3 Non automatisable

- arbitrage structurant ;
- décision d'architecture ;
- GO / NO-GO final ;
- merge, push, suppression ;
- changement doctrine, passage v3.0 ;
- L4, L5 global ;
- action Notion / CMP.

> **v2.4 ne crée pas de scripts** — L1/L2 décrits comme **capacités cibles** exécutables par Cursor sous garde-fous ou par contrôles manuels checklistés.

---

## 10. Agent handoff ChatGPT ↔ Cursor ↔ Git

> **Non implémenté en v2.4** — cadre documentaire uniquement. Trajectoire future.

### 10.1 Répartition des rôles

| Acteur | Prépare / exécute | Valide |
|--------|-------------------|--------|
| **ChatGPT** | Cadrage cycle, routing, prompt, challenge, analyse rapport | — |
| **Cursor** | Exécution bornée L3, rapports, diff, commit local si autorisé | — |
| **Git** | Trace commits, branches, PR, historique | — |
| **Morris** | — | Arbitrages L0, GO, merge |

### 10.2 Format minimal handoff (ChatGPT → Cursor)

```markdown
# Handoff Cursor — [Nom cycle]
- Type : [INC | DOC | CAPA | …]
- Profil : [Light | Standard | Critical | …]
- Base : origin/main @ [commit]
- Branche : [nom]
- Périmètre : [fichiers / dossiers]
- Hors périmètre : [liste]
- Références obligatoires : [chemins]
- Livrable attendu : [fichier / rapport]
- Gate Morris requis : [oui/non — lesquels]
```

### 10.3 Format minimal rapport Cursor

```markdown
# Rapport Cursor — [Nom cycle]
1. Branche / HEAD
2. Fichiers modifiés
3. Garde-fous respectés
4. Écarts / alertes
5. PR readiness : READY | READY WITH RESERVES | NOT READY
6. Décision Morris attendue
```

### 10.4 Limites

- pas d'agent autonome ;
- pas d'orchestration L4 réelle ;
- pas de handoff sans prompt explicite ;
- pas de merge sans GO Morris.

---

## 11. Capitalisation, metrics & standards policy

### 11.1 Éléments à capitaliser (fin de cycle)

| Élément | Quand |
|---------|-------|
| Décisions Morris | Arbitrage structurant acté |
| Prompts utilisés | Cycle significatif |
| Validations / PR readiness | Avant chaque PR |
| Post-merge | Après chaque merge structurant |
| REX | Fin INC, MVP, pilote, standard |
| Dette identifiée | Toute réserve ou friction |
| Simplifications possibles | REX, capitalisation |
| Standards impactés | Nouveau standard ou patch |

### 11.2 Métriques simples

| Métrique | Usage |
|----------|-------|
| Nombre PR par cycle / projet | Détecter surcharge |
| Nombre gates Morris | Charge L0 |
| Nombre prompts Cursor | Friction exécution |
| Retours correctifs | Qualité prompts |
| Validations bloquantes | Rigidité process |
| Charge documentaire (fichiers, lignes) | Overhead |
| Temps cycle perçu | Planning |
| Niveau automation atteint (L0–L2) | Maturité |
| Dette documentaire créée / réduite | Santé repo |

### 11.3 Politique standards

| Règle | Application |
|-------|-------------|
| **Un cycle = un standard max** si structurant | Éviter prolifération (pilote : 7 en 1 jour) |
| **Indexer, ne pas recréer** | Référencer `sfia-v2/` existant |
| **Minor = nouvelle capacité** | v2.4 = ce document |
| **Patch = alignement** | Post-merge statuts |
| **v3.0 = Morris + rupture doctrine** | Immediate NO-GO |

---

## 12. Index méthode unique & routage

### 12.1 Principe

Un **index méthode unique** = vision repo-first des standards et guides — **sans** dossier `.sfia/`, **sans** moteur technique, **sans** script.

**Point d'entrée recommandé :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/` + `sfia-cycle-routing-guide.md`.

### 12.2 Routage cycle (simplifié v2.4)

```
1. Identifier type cycle (INC | EVOL | RUN | CAPA | DOC)
2. Sélectionner profil (§5)
3. Lire références obligatoires (routing guide + standard applicable)
4. Appliquer niveau QA (§6)
5. Exécuter avec Cursor (handoff §10)
6. PR readiness (§14)
7. GO Morris si requis (§8.2)
8. Post-merge L1 (§8.3)
9. Capitaliser si requis (§11)
```

### 12.3 Anti-dispersion

- pas de nouveau dossier par version — dossier `sfia-v2/` stable ;
- nommage `sfia-v2.x-[sujet]-standard.md` ;
- références croisées explicites — pas de copie de contenu ;
- Git = index vivant — pas de registre parallèle hors repo.

---

## 13. Garde-fous et décision humaine requise

### Décision Morris obligatoire

| Domaine | Exemples |
|---------|----------|
| **Doctrine** | Changement principe, passage v2.5+, **v3.0** |
| **Automation** | L3 structurant, L4, tout L5 |
| **Repo protégé** | Chemins method/, suppression, force push |
| **Git actions** | Merge, push, PR (sauf doc-only pré-autorisé) |
| **Externe** | Notion, CMP |
| **Destructif** | Suppression fichier, reset, amend public |
| **Métier** | Scope MVP, périmètre fonctionnel |
| **Architecture** | Stack, schéma, breaking change |
| **Delivery** | GO INC-n, GO code, clôture, capitalisation |
| **Réserves** | Acceptation réserve bloquante |

### Cursor — interdictions sans GO explicite

Push · PR · merge · tag · suppression · modification hors périmètre · v3.0 · agent handoff réel · scripts · `.sfia/`.

---

## 14. PR readiness v2.4

### Critères cycle v2.4 (ce standard)

| # | Critère | Attendu |
|---|---------|---------|
| 1 | Un seul standard principal créé | ✅ Ce document |
| 2 | Documentation-only | ✅ |
| 3 | Aucun script | ✅ |
| 4 | Aucun code app | ✅ |
| 5 | Aucun dossier `.sfia/` | ✅ |
| 6 | v3.0 = immediate NO-GO | ✅ §1, §3, §15 |
| 7 | Agent handoff non implémenté | ✅ §10 |
| 8 | Cohérence baseline v2.3.1 | ✅ Standards v2.0–v2.3.1 référencés, non modifiés |
| 9 | Verdict REX intégré | ✅ §3 |
| 10 | Garde-fous explicites | ✅ §13, §15 |
| 11 | Morris L0 représenté | ✅ §4, §8, §13 |
| 12 | Réduction friction documentée | ✅ §5, §8 |

### Statuts readiness

| Statut | Signification |
|--------|---------------|
| **READY FOR PR** | Tous critères OK — GO Morris PR |
| **READY WITH RESERVES** | PR possible — réserves documentées |
| **NOT READY** | Écart bloquant — pas de PR |

---

## 15. Limites explicites (Out of scope)

| Hors périmètre v2.4 | Note |
|---------------------|------|
| **SFIA v3.0** | Immediate NO-GO |
| **Agent autonome** | Cadre §10 uniquement |
| **Orchestration L4 réelle** | Horizon |
| **Scripts / outils techniques** | L1/L2 = capacités, pas implémentation |
| **Checks techniques implémentés** | CI dédiée SFIA — futur |
| **Dossier `.sfia/`** | Interdit |
| **Automatisation merge / PR / décision** | Interdit |
| **Modification applicative** | Interdit dans cycle méthode |
| **CI/CD SFIA** | Hors cycle |
| **Notion / CMP** | Dormant |
| **Production readiness détaillé** | Input identifié — standard futur |
| **Modification standards v2.0–v2.3.1** | Sauf alignement patch séparé Morris |

---

## 16. Conclusion

SFIA v2.4 est un **cycle de consolidation**, pas une rupture.

Le pilote Chantiers360 v2 a **prouvé** la méthode et **révélé** un operating model trop lourd. Ce standard :

- conserve les garde-fous v2.3.1 ;
- introduit profils adaptatifs, QA proportionnée, politique PR anti-friction ;
- cible L1/L2 pour les checks répétables ;
- cadre le handoff sans l'implémenter ;
- capitalise métriques et politique standards ;
- maintient Morris L0 sur les arbitrages structurants ;
- rejette v3.0 immédiat.

**Prochaine étape (hors ce document) :** validation Morris → PR → merge → alignement registre versioning v2.4 — **décision Morris séparée**.

---

## Références pilote

| Document | Chemin |
|----------|--------|
| REX final pilote | `projects/chantiers360-v2/09-capitalization/chantiers360-v2-final-pilot-rex-report.md` |
| Métriques pilote | `projects/chantiers360-v2/09-capitalization/chantiers360-v2-pilot-metrics-capitalization-report.md` |
| Comparaison V0 | `projects/chantiers360-v2/09-capitalization/v0-vs-sfia-v2-methodological-comparison.md` |
| Capitalisation MVP | `projects/chantiers360-v2/09-capitalization/mvp-capitalization-report.md` |

---

*SFIA v2.4 — Consolidation & Operating Efficiency — documentation-only — 2026-07-07*

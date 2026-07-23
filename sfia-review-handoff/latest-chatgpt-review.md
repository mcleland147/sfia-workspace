# SFIA Review Pack — Cycle Knowledge Contracts (Conception méthode)

## Niveau
FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 10:40:12 CEST (+0200) |
| Cycle | Cadrage méthode / Création foundation |
| Typologie | DOC / évolution méthode candidate |
| Profil | Critical |
| Gate consommé | `GO CONCEPTION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS` |
| Repo | mcleland147/sfia-workspace |
| Worktree | /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts |
| Branche | `method/sfia-cycle-knowledge-contracts` |
| HEAD | `709a2678c28f94f88b3522308d674e224b75fc55` |
| Base | origin/main @ `499c6b3540d8c3fae776736dc3fba29938048bfd` |
| Push branche méthode | **non** |
| PR / merge | **non** |
| Fichiers protégés modifiés | **aucun** |
| Code modifié | **aucun** |
| UX branch touchée | **non** (HEAD reste `2888b7e1c8643236c1ecee1fd8f01aa227ddc3cc`) |

## Verdict

**CYCLE KNOWLEDGE CONTRACT MODEL READY — MORRIS METHOD DECISION REQUIRED**

## Gate suivant candidat

`GO VALIDATION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS` (**non consommé**)

---

## Local Git Truth Check

- 2026-07-23 10:34:55 CEST — workspace principal ; WT méthode depuis origin/main
- UX HEAD inchangé `2888b7e…`
- Commits locaux CKC + commit whitespace hygiene

```
709a267 docs(sfia): strip trailing whitespace in cycle knowledge contracts
1d78723 docs(sfia): evaluate cycle knowledge contract model
c83aa45 docs(sfia): add cycle knowledge contract pilots
813ef87 docs(sfia): frame cycle knowledge contracts
```

---

## Sources consultées

Template ; routing ; operating model ; rules ; Knowledge Layer ; Validation Checklist ; PGE ; méthode cycles §3–§4 ; UX 87/88 (lecture WT UX) ; handoff `37a912c…`

## Audit

CREATE cognitif + EXTEND ciblé + REUSE strict — détail dans 00.

## Hypothèse / modèle / carte / pilotes / simulations / formats / UX

Voir contenus complets ci-dessous.

## Fichiers créés

Uniquement sous `.../cycle-knowledge-contracts/`

## Décisions Morris

1–15 (nécessité, nom, structure, emplacement, format, profondeur, pilotes, généralisation, routage, Studio, UX, doctrine, template, validation, reprise UX)

## Actions non exécutées

Push méthode · PR · merge · fichiers protégés · UX · live GPT · généralisation 15 · baseline

---


===== FULL CONTENT: README.md =====

# Cycle Knowledge Contracts (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | `method-candidate` — **non baseline** · **non adopted** |
| **Gate de conception** | `GO CONCEPTION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS` |
| **Baseline SFIA** | v2.6 |
| **Emplacement** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/` |

## Contenu

| Fichier | Rôle |
|---------|------|
| [00-framing-and-architecture.md](./00-framing-and-architecture.md) | Problème, audit REUSE/EXTEND/CREATE, formats, séparation des objets |
| [01-canonical-model-template.md](./01-canonical-model-template.md) | Template candidat CKC |
| [02-fifteen-cycles-synthetic-map.md](./02-fifteen-cycles-synthetic-map.md) | Carte des 15 cycles + priorités CKC |
| [03-pilot-evaluation-report.md](./03-pilot-evaluation-report.md) | Simulations et anti-checklist |
| [pilots/01-cadrage.md](./pilots/01-cadrage.md) | Pilote 1 |
| [pilots/02-conception-fonctionnelle.md](./pilots/02-conception-fonctionnelle.md) | Pilote 2 |
| [pilots/03-architecture-technique.md](./pilots/03-architecture-technique.md) | Pilote 3 |
| [pilots/04-qa-validation.md](./pilots/04-qa-validation.md) | Pilote 4 |

## Anti-claims

Ces documents ne mettent **pas** à jour la baseline SFIA v2.6.
Ils ne modifient pas le routing guide, le template d’exécution, ni les rules.
Ils ne clôturent pas le cycle UX/UI D1 Conversational Convergence.

## Gate suivant candidat

`GO VALIDATION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS`


===== FULL CONTENT: 00-framing-and-architecture.md =====

# Cycle Knowledge Contracts — Cadrage & architecture (candidat)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `00-framing-and-architecture.md` |
| **Statut** | `method-candidate` — **non baseline** · **non adopted** · **non validated** |
| **Cycle** | Cadrage méthode / Création foundation |
| **Profil** | Critical |
| **Gate consommé** | `GO CONCEPTION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS` |
| **Branche** | `method/sfia-cycle-knowledge-contracts` |
| **Base** | `origin/main` @ `499c6b3540d8c3fae776736dc3fba29938048bfd` |
| **Baseline méthode** | SFIA **v2.6** |
| **Source cycles** | Template v2.6 §4 + `sfia-v2.5-project-cycles-method-candidate.md` (candidate absorbée, référence opérationnelle des 15 types) |

> Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris requise**.
> Aucune claim « METHOD BASELINE UPDATED », « CONTRACTS ADOPTED », « SFIA V2.6 UPDATED ».

---

## 1. Problème

**Observation.** La méthode fournit déjà cartographie, routage, profils, blocs, gates, template d’exécution et validation.

**Observation.** Le **nom** d’un cycle (ex. « Cadrage ») ne suffit pas toujours à donner à GPT une **posture cognitive complète** : dimensions à examiner, signaux de maturité/immaturité, biais, anti-claims, transitions raisonnables.

**Problème.** Sans cadre cognitif, GPT peut :

- conclure trop tôt ;
- poser un questionnaire mécanique ;
- confondre exécution et raisonnement ;
- proposer des transitions inadaptées ;
- masquer l’incertitude.

---

## 2. Hypothèse challengée

### Hypothèse

Un **Cycle Knowledge Contract (CKC)** est un cadre cognitif et méthodologique qui indique à GPT ce qu’une réflexion sérieuse sur un cycle ne doit pas oublier, **sans** dicter les réponses ni imposer des questions fixes.

### Chaîne candidate

Intention → convergence conversationnelle → cycle candidat → **chargement CKC** → raisonnement contextualisé → maturité → décision humaine → contrat d’exécution → Cursor → preuves → validation.

### Challenge

| Question | Verdict candidat |
|----------|------------------|
| Nouvel objet nécessaire ? | **Oui, partiellement** — lacune cognitive réelle ; pas un remplacement de la méthode §4 |
| Consolidation seule ? | Insuffisante : §4 donne objectifs/livrables/gates, **pas** dimensions de maturité ni signaux adaptatifs |
| Concurrence routing guide ? | **Évitable** si CKC ne sélectionne pas les références |
| Concurrence template ? | **Évitable** si CKC ne borne pas fichiers/actions Cursor |
| Document / section / données ? | **Markdown repo-first** + index ; JSON/YAML **non requis** maintenant |
| Quatre pilotes suffisent ? | **Oui pour valider le modèle** ; pas pour généraliser |
| Terme « Cycle Knowledge Contract » ? | **Pertinent candidat** ; alternatives : « Cycle Cognitive Frame », « Cycle Reasoning Guide » — **Décision Morris** |

**Recommandation.** CREATE un actif **complémentaire** (EXTEND la méthode cycles), statut **candidate** uniquement.

---

## 3. Audit préalable — matrice des actifs

Sources principales lues :

- `prompts/templates/sfia-cycle-execution-template.md` (protégé)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (protégé)
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` (protégé)
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` (protégé)
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- UX 87/88 depuis worktree UX (absents de `main`)

| Besoin | Document existant | Couverture | Lacune | Duplication | Verdict |
|--------|-------------------|------------|--------|--------------|---------|
| Finalité du cycle | Méthode cycles §4 | Forte | — | Faible si CKC renvoie | **REUSE** |
| Cas d’usage / quand | Méthode §4 déclenchement | Moyenne | Peu d’anti-cas | Faible | **EXTEND** |
| Posture GPT | Operating model (rôles) | Faible–moyenne | Posture **par cycle** absente | Moyenne si redondant | **CREATE** (par cycle) |
| Dimensions d’analyse | Méthode §4 déroulé | Partielle | Pas de dimensions cognitives stables | Faible | **CREATE** |
| Maturité | UX 87 (candidat) ; confidence C2 | Faible méthode | Bandes/dimensions cycle | Faible | **CREATE** |
| Fiabilité | Validation checklist | Preuves cycle | Critères **pendant** raisonnement | Faible | **CREATE** |
| Livrables | Méthode §4 ; Knowledge Layer DRM | Forte | — | Éviter | **REUSE** |
| Preuves | Template ; Validation checklist | Forte | — | Éviter | **REUSE** |
| Anti-claims | Rules ; template anti-patterns | Partielle | Anti-claims **métier cycle** | Faible | **EXTEND** |
| Gates | Méthode §4 ; Decision Engine | Forte | — | Éviter | **REUSE** |
| Transitions | Méthode amont/aval | Moyenne | Transitions **conditionnelles** | Faible | **EXTEND** |
| Blocs | Template §6 | Forte | — | Éviter | **REUSE** |
| Sources / routage | Routing guide ; DRM | Forte | — | Interdit de dupliquer | **REUSE** |
| Validation | Validation checklist | Forte | — | Éviter | **REUSE** |
| Arrêt / pause | Méthode stop ; UX 87 | Partielle | Pause conversationnelle | Faible | **EXTEND** |
| Reprise | Operating / post-merge | Partielle | Reprise cognitive | Faible | **EXTEND** |
| Capitalisation | Méthode §4.15 ; Knowledge Layer | Forte | — | Éviter | **REUSE** |

### Synthèse audit

| Verdict global | CREATE (complément cognitif) + EXTEND ciblé + REUSE strict des objets d’exécution |
| Stop « assets suffisants » ? | **Non** — lacune posture/maturité/fiabilité cognitive démontrée |
| Stop « duplication massive » ? | **Non** si discipline de non-répétition des tables §4 / routing / template |

---

## 4. Séparation des responsabilités (obligatoire)

| Objet | Rôle | CKC ne doit pas |
|-------|------|-----------------|
| **Cycle Knowledge Contract** | Guider le **raisonnement** GPT | Lister fichiers, forcer questions, ouvrir PR |
| **Routing guide** | Sélectionner références et contrôles | Devenir encyclopédie métier |
| **Template d’exécution** | Borner Cursor | Définir la profondeur cognitive |
| **Validation checklist** | Contrôler preuves / verdict | Remplacer maturité conversationnelle |
| **Doctrine / rules** | Principes et autorité | Être réécrite ici |
| **UX 87/88** | Convergence conversationnelle Studio | Être modifiée dans ce cycle |

---

## 5. Principes de conception retenus (candidats)

1. **Dimensions stables, questions adaptatives** — jamais questionnaire exhaustif.
2. **Posture professionnelle** — pas de persona théâtral.
3. **Maturité qualitative** — bandes + dimensions, pas % magique.
4. **Séparation** routing / template / validation / CKC.
5. **Statut candidate** jusqu’à GO validation Morris.
6. **Court et utile** — sections obligatoires minimales ; le reste conditionnel.
7. **Compatibilité UX** — alimente challenge/maturité en arrière-plan ; pas 25 champs UI.

---

## 6. Comparaison de formats

### Option A — Un Markdown par cycle

| | |
|--|--|
| Avantages | Navigable ; diff Git clair ; charge GPT sélective |
| Limites | 15 fichiers ; risque de dérive de structure |
| Maintenabilité | Bonne avec template strict |
| Reco | Adapté aux **pilotes** et généralisation future |

### Option B — Un document unique à 15 sections

| | |
|--|--|
| Avantages | Une seule source |
| Limites | Contexte GPT trop large ; diffs bruyants |
| Reco | **Déconseillé** pour le détail |

### Option C — Modèle commun + contrats séparés + index

| | |
|--|--|
| Avantages | Cohérence + sélectivité + index Studio/GPT |
| Limites | Légère complexité d’arborescence |
| Reco | **Recommandation candidate** |

### JSON/YAML

**Non retenu** pour l’instant — pas de schéma exécutable démontré. Machine format = gate futur si Studio doit charger des enums.

**Recommandation format :** Option **C**, Markdown repo-first.

---

## 7. Emplacement documentaire (candidat)

```
method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/
```

Justification : actif **candidate** sous capitalization ; **hors** `core/` protégé ; n’entre pas dans `cycles/` (capitalisations projet historiques).

Modification routing/template : **documentée comme besoin futur**, **non exécutée**.

---

## 8. Relation future avec routing / template (non exécutée)

| Modification candidate | Fichier protégé | Gate futur |
|------------------------|-----------------|------------|
| Référence optionnelle « charger CKC du cycle » | routing guide § | GO doctrine / consolidation |
| Champ fiche ChatGPT « CKC path » | template §2–§5 | GO template |
| Index Knowledge Layer DRM | knowledge-layer | GO consolidation |

---

## 9. Relation avec UX 87/88 (lecture seule)

87/88 absents de `main` ; lus depuis `ux/sfia-studio-d1-conversational-convergence` @ `2888b7e…` **sans modification**.

| Alimentation CKC → UX | Visible UI | Interne GPT |
|-----------------------|------------|-------------|
| Dimensions maturité | Bandes + dimensions non couvertes | Instructions posture |
| Signaux / questions adaptatives | 1–3 questions critiques | Catalogue de signaux |
| Anti-claims cycle | Mentions courtes | Liste complète |
| Transitions | Trajectoires candidates | Matrice complète |
| Fiabilité | « Limites de cette appréciation » | Critères détaillés |

**Interdit UI :** formulaire des 25 sections du template CKC.

---

## 10. Décisions Morris préparées

Voir rapport final / § décisions (nécessité, nom, structure, emplacement, format, profondeur, pilotes, généralisation, routage, Studio, UX, doctrine, template, validation, reprise UX).

---

## 11. Gate suivant candidat

`GO VALIDATION MÉTHODE — SFIA CYCLE KNOWLEDGE CONTRACTS`
(ou consolidation si Morris exige réduction du modèle)

Non consommé ici.


===== FULL CONTENT: 01-canonical-model-template.md =====

# Template candidat — Cycle Knowledge Contract

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `01-canonical-model-template.md` |
| **Statut** | `method-candidate` — **non baseline** |
| **Usage** | Structure commune pour tout CKC ; les pilotes l’instancient |
| **Règle** | Court · utile · dimensions stables · questions adaptatives |

---

## 0. Métadonnées d’instance (obligatoire)

| Champ | Contenu |
|-------|---------|
| cycle_id | 1–15 |
| cycle_name | Nom canonique |
| status | `candidate` |
| version | semver candidat (ex. `0.1.0`) |
| inherits_from | Lien méthode cycles §4.x (REUSE) |
| profile_notes | Light / Standard / Critical / Capitalization — effets sur **profondeur**, pas sur structure |
| last_updated | ISO date |

---

## Qualification des sections

| Tag | Sens |
|-----|------|
| **OBL** | Obligatoire dans tout CKC |
| **COND** | Présent si pertinent au cycle |
| **EX** | Exemples illustratifs (non exhaustifs) |
| **INH** | Hérité / renvoyé à une source existante (ne pas dupliquer) |

---

## Structure minimale recommandée

> Les 25 blocs listés dans le gate sont **challengés**. Structure **retenue candidate** = 12 blocs OBL + COND ciblés. Le reste devient COND ou INH.

### 1. Identité — OBL

cycle_id, nom, catégorie A/B, lien `inherits_from`.

### 2. Finalité — OBL

Une phrase : ce que le cycle doit **clarifier ou produire comme compréhension**, pas le livrable Cursor.

### 3. Problèmes que le cycle cherche à résoudre — OBL

3–7 problèmes cognitifs / métier (pas une backlog technique).

### 4. Quand utiliser / ne pas utiliser — OBL

Déclencheurs + anti-cas (évite mauvais routage).

### 5. Objets manipulés — COND

Concepts métier du cycle (besoin, ADR, preuve, …). INH livrables fichiers → méthode §4.

### 6. Posture GPT — OBL

Responsabilités cognitives · type de challenge · profondeur · vigilance.
**Interdit :** « tu es le meilleur expert mondial ».

### 7. Responsabilités humaines — OBL

Décide · arbitre · override tracé · refuse trajectoire.

### 8. Dimensions d’analyse — OBL

Liste **stable** (5–10). GPT choisit lesquelles activer selon contexte.

### 9. Signaux & questions adaptatives — OBL

Pour chaque dimension : **signaux** d’immaturité / maturité + **exemples** de questions (EX), jamais script obligatoire.

### 10. Sources utiles — INH / COND

Renvoyer routing guide + DRM. Ajouter seulement sources **spécifiques** non couvertes.

### 11. Livrables & résultats attendus — INH / COND

Renvoyer méthode §4. Ajouter résultat **cognitif** attendu (ex. « intention démêlée de solution »).

### 12. Critères de maturité — OBL

Bandes qualitatives partagées (candidates) :

| Bande | Sens |
|-------|------|
| `exploratoire` | Trop d’inconnues critiques |
| `partielle` | Socle présent, trous structurants |
| `suffisante_pour_decider` | Humain peut orienter la suite |
| `prete_a_borner` | Préparation d’exécution raisonnable |

Dimensions de maturité = sous-ensemble des dimensions d’analyse + « décisions ouvertes » + « preuves disponibles ».

**Pas de score % unique.**

### 13. Critères de fiabilité — OBL

Quand l’appréciation GPT est fragile : sources absentes, contradictions, spéculation, bias détecté.

### 14. Preuves attendues — INH / COND

Renvoyer validation checklist / template. Ajouter preuves **cognitives** (hypothèses validées, alternatives écartées).

### 15. Risques, biais, anti-patterns — OBL

Biais fréquents du cycle + effets checklist à éviter.

### 16. Anti-claims — OBL

Claims interdits typiques (« cycle validé », « architecture choisie », « prêt prod »…) hors preuve/gate.

### 17. Gates humains possibles — INH / COND

Renvoyer méthode §4 ; lister seulement gates **spécifiques** additionnels.

### 18. Blocs transverses — INH

Renvoyer template §6 (FinOps, RGPD, …).

### 19. Transitions candidates — OBL

Amont/aval **conditionnels** (si maturité X → cycle Y plausible). Jamais auto-exécution.

### 20. Conditions de sortie / pause / arrêt — OBL

Sortie cognitive vs sortie d’exécution. Pause sans mutation. Arrêt si doctrine/chemin protégé.

### 21. Exemples contextualisés — EX / COND

1 clair + 1 ambigu (pilotes obligés).

### 22. Limites du contrat — OBL

Ce que le CKC ne couvre pas.

### 23. Articulation routing / template / UX — OBL

3 phrases max : charge CKC → raisonne ; routing → références ; template → Cursor ; UX → surface.

---

## Règles d’écriture

1. **Ne pas recopier** les tableaux méthode §4 / routing / template.
2. Préférer puces courtes aux dissertations.
3. Toute question listée = **exemple** sauf mention contraire.
4. Toute transition = **candidate**, pas ordre.
5. Statut toujours `candidate` dans l’en-tête.

---

## Skeleton copy-paste

```markdown
# CKC — <Nom cycle> (candidate)

| cycle_id | |
| status | candidate |
| inherits_from | … §4.x |

## Finalité
## Problèmes ciblés
## Quand / quand ne pas
## Posture GPT
## Responsabilités humaines
## Dimensions d’analyse
## Signaux et questions adaptatives
## Maturité
## Fiabilité
## Risques / biais / anti-patterns
## Anti-claims
## Transitions candidates
## Sortie / pause / arrêt
## Exemples
## Limites
## Articulation
```


===== FULL CONTENT: 02-fifteen-cycles-synthetic-map.md =====

# Cartographie synthétique des 15 cycles projet SFIA (pour CKC)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `02-fifteen-cycles-synthetic-map.md` |
| **Statut** | `method-candidate` |
| **Source des noms** | `sfia-cycle-execution-template.md` §4.1 + `sfia-v2.5-project-cycles-method-candidate.md` §3.1 |
| **Baseline** | SFIA v2.6 (opérationnelle) ; liste 15 cycles = référentiel type **candidate absorbé**, utilisé opérationnellement via template |

> Cette carte **n’est pas** quinze contrats détaillés.
> Priorité CKC : **P0** = pilotes ; **P1** = forte valeur cognitive ; **P2** = plutôt REUSE méthode §4 ; **P3** = allégé.

| # | Nom canonique | Finalité (1 ligne) | Objet principal | Posture dominante | Dimensions majeures | Résultat attendu | Preuve centrale | Transition habituelle | Risque principal | Niveau CKC | Priorité |
|---|---------------|--------------------|-----------------|-------------------|---------------------|------------------|-----------------|----------------------|------------------|------------|----------|
| 1 | Cadrage | Clarifier intention, périmètre, contraintes avant solution | Intention / scope | Challenge besoin≠solution | Finalité, parties, contraintes, succès, inconnues | Brief orientant la suite | Périmètre fermé + hors scope | → Conception / archi / backlog | Scope flou ; Critical implicite | **Complet** | **P0** |
| 2 | Conception fonctionnelle | Formaliser usages, règles, objets métier | Spec fonctionnelle | Cohérence métier | Usagers, parcours, règles, données, exceptions | Spec bornée | Traçabilité besoin→règle | → UX / archi fct / backlog | Technique trop tôt | **Complet** | **P0** |
| 3 | Architecture fonctionnelle | Structurer flux et découpage métier | Modules / flux | Arbitrage structure | Frontières, interfaces, responsabilités | Décisions structurantes | ADR/DAA si besoin | → Archi tech / backlog | Sur-architecture | Moyen | P1 |
| 4 | UX/UI | Concevoir expérience et interface | Parcours / UI | Fidélité vs exploration | Source design, états, a11y | Contrat visuel / handoff | Figma/runtime si fidélité | → Delivery / QA | Extrapolation design | Moyen | P1 |
| 5 | Backlog / user stories | Découper en stories testables | Stories | Taille / INVEST | Priorité, dépendances, CA | Backlog priorisé | Stories vérifiables | → Delivery | Stories fourre-tout | Léger | P2 |
| 6 | Architecture technique | Décider stack, patterns, ADR | ADR techniques | Options & trade-offs | NFR, sécurité, dette, coût | Décisions tracées | ADR + impact | → DevOps / delivery | Décision implicite | **Complet** | **P0** |
| 7 | Intégration / DevOps | Pipelines, envs, rollback | CI/CD | Exploitabilité | Secrets, envs, qualité gate | Pipeline fiable | Pipeline vert + rollback | → Delivery / release | Secrets ; prod implicite | Moyen | P1 |
| 8 | Delivery / implémentation | Implémenter dans périmètre borné | Diff / code | Discipline de scope | Fichiers, tests, régression | Livrable borné | Diff + tests | → QA / PR | Scope creep | Léger* | P2 |
| 9 | QA / validation | Vérifier preuves et réserves | Preuves | Evidence-based | Couverture, négatifs, sévérité | Verdict + réserves | Preuves reproductibles | → PR / release | QA symbolique | **Complet** | **P0** |
| 10 | Sécurité / RSSI | Menaces, contrôles, acceptation risque | Risque | Adversarial | Surface, données, contrôles | Risques traités/acceptés | Analyse + mesures | Transverse | Contournement | Moyen | P1 |
| 11 | Déploiement / release | Release contrôlée | Release | Prudence prod | Fenêtre, rollback, com | Release ou rollback | Smoke + notes | → Observabilité | Release sans rollback | Moyen | P1 |
| 12 | Observabilité / RUN readiness | Exploitabilité mesurable | SLO / alertes | Ops realism | Logs, métriques, runbooks | Service observable | Alertes testées | → Post-merge | Angle mort | Léger | P2 |
| 13 | PR readiness | Branche prête à PR | Diff / body | Garde-fous Git | Scope, secrets, granularité | READY / NOT READY | Checks + body | → Merge (Morris) | PR prématurée | Léger | P2 |
| 14 | Post-merge | Clôturer après merge | Sync / cleanup | Clôture honnête | Réserves, suite, branche | Main aligné | HEAD=main + cleanup | → Capitalisation | Oublier réserves | Léger | P2 |
| 15 | Capitalisation / REX | Apprentissage réutilisable | Actif méthode | Faits≠reco≠décision | Observations, promotion | REX / proposition | Traçabilité | → Cycles méthode | Promotion prématurée | Moyen | P1 |

\* Delivery : le template d’exécution couvre déjà fortement le bornage ; CKC utile surtout pour **anti-claims** et maturité avant élargissement de scope.

### Transverses (non cycles cœur)

FinOps · GreenOps · RGPD · Accessibilité · Performance — **blocs** template §6 ; pas de CKC autonome par défaut (COND dans cycles concernés).


===== FULL CONTENT: 03-pilot-evaluation-report.md =====

# Évaluation des pilotes CKC (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `03-pilot-evaluation-report.md` |
| **Statut** | `method-candidate` |
| **Méthode** | Simulation raisonnée (pas d’appel OpenAI) |
| **Cas transversal** | SFIA Studio — « Créer une application de suivi de contrats » |

---

## 1. Protocole de test

Pour chaque pilote : situation **claire** + situation **ambiguë**.
Critères : challenge · questions adaptatives · maturité explicable · anti-conclusion prématurée · anti-stéréotype · anti-checklist · transition raisonnable · compatibilité UX 87/88.

Échelle : ●●● bon · ●● partiel · ● faible.

---

## 2. Résultats par pilote

### 2.1 Cadrage

| Critère | Clair | Ambigu |
|---------|-------|--------|
| Challenge | ●●● | ●●● |
| Questions adaptatives | ●●● | ●●● |
| Maturité explicable | ●●● | ●●● |
| Anti-prématuré | ●●● | ●●● |
| Anti-stéréotype | ●●● | ●●● |
| Anti-checklist | ●●● | ●● |
| Transition | ●●● → conception/D1 | ●●● rester / pause |
| Compat UX | ●●● | ●●● |

**Observation.** Sur l’ambigu « suivi de contrats », le CKC empêche l’enchaînement archi/delivery et alimente directement les dimensions UX 87 (intention, questions, maturité exploratoire).

### 2.2 Conception fonctionnelle

| Critère | Clair | Ambigu |
|---------|-------|--------|
| Challenge | ●●● | ●●● |
| Questions | ●●● | ●●● |
| Maturité | ●●● | ●●● |
| Anti-prématuré | ●●● | ●●● (bloque stack) |
| Anti-checklist | ●● | ●● |
| Transition | ●●● | ●● rester |
| Compat UX | ●●● | ●●● |

**Réserve.** Risque de dérouler trop de dimensions si GPT n’applique pas la règle « 1–3 questions ». Mitigation déjà dans posture.

### 2.3 Architecture technique

| Critère | Clair | Ambigu |
|---------|-------|--------|
| Challenge | ●●● | ●●● |
| Alternatives | ●●● | ●●● |
| Maturité | ●●● | ●●● |
| Anti-astronaut | ●●● | ●●● |
| Anti-checklist NFR | ●● | ●● |
| Transition | ●●● | ●●● retour cadrage/conception |
| Compat UX | ●● (décisions seulement) | ●● |

### 2.4 QA / validation

| Critère | Clair | Ambigu |
|---------|-------|--------|
| Evidence | ●●● | ●●● refuse verdict |
| Anti-claims | ●●● | ●●● |
| Maturité | ●●● | ●●● |
| Anti-checklist | ●●● | ●●● |
| Transition | ●●● | ●●● |
| Compat UX | ●● (réserves) | ●● |

---

## 3. Effet checklist — garde-fous

| Garde-fou | Présent dans modèle |
|-----------|---------------------|
| Dimensions stables ≠ questions obligatoires | Oui |
| Budget 1–3 questions | Oui (posture) |
| Bandes maturité sans % | Oui |
| INH pour livrables/routing/preuves | Oui |
| Structure réduite vs 25 blocs bruts | Oui (template challengé) |
| Exemples non scripts | Oui |

**Verdict anti-checklist :** modèle **acceptable** si discipline d’écriture et d’usage GPT respectée. Risque résiduel = mauvaise instanciation Studio (afficher toutes les dimensions). Mitigation UX : § relation 87/88.

---

## 4. Duplication méthode — contrôle

| Zone | Contrôle |
|------|----------|
| Objectifs/livrables/gates | `inherits_from` §4 — non recopiés en tables |
| Routing | INH |
| Template exécution | INH |
| Validation checklist | INH + complément cognitif QA |

**Verdict duplication :** pas de duplication massive ; CREATE justifié sur posture/maturité/fiabilité/signaux.

---

## 5. Suffisance des quatre pilotes

| Question | Réponse |
|----------|---------|
| Modèle validable ? | **Oui** (A/B et exécution vs raisonnement couverts) |
| Généralisation 15 ? | **Non automatique** — P1 ensuite (archi fct, UX, sécu, DevOps, capitalisation) |
| Pilotes à reprendre ? | Mineurs possibles (raccourcir signaux) — pas bloquant |

---

## 6. Recommandations candidates (non décisions)

1. Retenir le modèle CKC en **candidate**.
2. Format Option C (template + fichiers + index).
3. Ne pas modifier routing/template sans GO dédié.
4. Brancher conceptuellement sur UX 87 (maturité/dimensions) lors de la reprise UX.
5. Généralisation = cycle séparé après validation Morris.

---

## 7. Verdict d’évaluation

**Pilotes suffisants pour arbitrage Morris du modèle.**
Pas « CONTRACTS ADOPTED ». Pas « 15 CYCLES COMPLETE ».


===== FULL CONTENT: pilots/01-cadrage.md =====

# CKC — Cadrage (candidate)

| Champ | Valeur |
|-------|--------|
| cycle_id | 1 |
| cycle_name | Cadrage |
| status | `candidate` |
| version | `0.1.0` |
| inherits_from | `sfia-v2.5-project-cycles-method-candidate.md` §4.1 |
| profile_notes | Standard défaut ; Critical si arbitrage structurant ; Light rare |

---

## Finalité

Démêler l’**intention** de la **solution supposée**, fermer un périmètre utile, et rendre explicites contraintes, succès et inconnues — **avant** toute conception ou delivery.

## Problèmes ciblés

- Solution présentée comme besoin.
- Périmètre ouvert / hors périmètre absent.
- Bénéficiaires et décideurs flous.
- Critères de succès absents ou non mesurables.
- Critical / gates implicites.
- Inconnues cachées derrière une fausse clarté.

## Quand utiliser / ne pas utiliser

**Utiliser :** nouveau chantier ; re-cadrage ; intention ambiguë ; avant conception lourde.
**Ne pas utiliser :** simple correction mono-fichier déjà bornée (Light delivery/doc) ; rejouer un cadrage pour éviter une décision Morris.

## Posture GPT

- Challenger besoin ≠ solution sans bloquer.
- Préférer questions **ciblées** (1–3) aux listes.
- Expliciter hypothèses et les marquer comme telles.
- Ne pas inventer de stakeholders.
- Ne pas proposer d’architecture ou de stack sauf si explicitement demandé comme **hypothèse**.

## Responsabilités humaines

Trancher finalité, périmètre, profil, gates ; accepter/reporter inconnues ; override tracé (« borner malgré immaturité »).

## Dimensions d’analyse

1. Intention vs solution
2. Finalité / valeur
3. Bénéficiaires & parties prenantes
4. Périmètre / hors périmètre
5. Contraintes (temps, tech, légal, org)
6. Dépendances
7. Risques structurants
8. Critères de succès
9. Décisions attendues
10. Inconnues critiques

## Signaux & questions adaptatives (exemples)

| Dimension | Signal immaturité | Exemple de question |
|-----------|-------------------|---------------------|
| Intention vs solution | Verbes d’implémentation sans « pourquoi » | « Quel problème disparaît si on ne livre rien ? » |
| Parties | « Les users » indifférenciés | « Qui dit non si le périmètre grossit ? » |
| Hors scope | Aucune exclusion | « Qu’est-ce qui est explicitement hors de ce cycle ? » |
| Succès | « Améliorer » | « Comment saura-t-on que c’est réussi dans 30 jours ? » |
| Inconnues | Confiance narrative sans sources | « Quelle inconnue, si fausse, invalide tout le reste ? » |

## Maturité

| Bande | Indices cadrage |
|-------|-----------------|
| exploratoire | Intention floue ; solution dominante ; hors scope absent |
| partielle | Intention claire ; trous stakeholders ou succès |
| suffisante_pour_decider | Périmètre + succès + inconnues listées |
| prete_a_borner | Brief + profil + gates candidats prêts pour prompt |

## Fiabilité

Faible si : aucune source projet ; contradictions non signalées ; stakeholders inventés ; « évident » non sourcé.

## Risques / biais / anti-patterns

- Effet checklist (parcourir les 10 dimensions à chaque fois).
- Sur-cadrage Light.
- Transformer le cadrage en mini-conception.
- Critical par confort.

## Anti-claims

Interdits hors preuve/gate : « Cadrage validé » · « Scope gelé définitivement » · « Cycle suivant ouvert » · « Architecture choisie » · « Prêt delivery ».

## Transitions candidates

| Si | Alors candidat |
|----|----------------|
| Besoin produit flou | Rester cadrage / pause |
| Usages à détailler | Conception fonctionnelle |
| Structure modules | Architecture fonctionnelle |
| UI centrale | UX/UI (après ou avec conception) |
| Demande purement technique bornée | Archi technique / delivery (avec réserve) |

## Sortie / pause / arrêt

**Sortie :** brief orientant + hors scope + inconnues.
**Pause :** OK sans mutation.
**Arrêt :** doctrine, chemin protégé, décision structurante sans Morris.

## Exemples — SFIA Studio « suivi de contrats »

### Clair

« Créer une app de suivi des échéances contractuelles pour l’équipe commerciale, hors signature électronique, MVP lecture + alertes. »
→ Dimensions 1–5 rapidement couvertes ; maturité `suffisante_pour_decider` ; transition conception ou Project D1.

### Ambigu

« Créer une application de suivi de contrats. »
→ Challenge intention/solution ; actors ; hors scope ; succès ; **ne pas** enchaîner architecture.

## Limites

Ne remplace pas le routing ni le template. N’ouvre pas de Cycle runtime Studio.

## Articulation

CKC guide le challenge ; routing choisit les docs ; template borne Cursor ; UX 87 affiche maturité/questions, pas ce document entier.


===== FULL CONTENT: pilots/02-conception-fonctionnelle.md =====

# CKC — Conception fonctionnelle (candidate)

| Champ | Valeur |
|-------|--------|
| cycle_id | 2 |
| cycle_name | Conception fonctionnelle |
| status | `candidate` |
| version | `0.1.0` |
| inherits_from | `sfia-v2.5-project-cycles-method-candidate.md` §4.2 |
| profile_notes | Standard ; Critical si impact produit structurant |

---

## Finalité

Rendre **testable et cohérent** le comportement attendu du produit : qui fait quoi, sur quels objets, selon quelles règles — **sans** figer l’architecture technique.

## Problèmes ciblés

- Spec narrative non vérifiable.
- Rôles et parcours incomplets.
- Règles métier implicites.
- Données sans cycle de vie.
- Exceptions oubliées.
- Glissement prématuré vers stack/UI pixels.

## Quand utiliser / ne pas utiliser

**Utiliser :** post-cadrage ; nouveau module métier ; règles complexes.
**Ne pas utiliser :** pure dette technique ; polish UI seul ; ADR stack.

## Posture GPT

- Exiger la **cohérence** usages ↔ règles ↔ données.
- Refuser le « on verra à l’implémentation » pour les règles structurantes.
- Séparer clairement fonctionnel vs technique vs UX pixel.
- Proposer scénarios nominaux **et** exceptions, sans exhaustivité impossible.

## Responsabilités humaines

Arbitrer règles conflit ; accepter réserves ; décider hors scope fonctionnel.

## Dimensions d’analyse

1. Usagers / rôles
2. Parcours nominaux
3. Exceptions / erreurs métier
4. Objets métier
5. Données & états
6. Règles métier
7. Critères d’acceptation
8. Permissions / visibilité
9. Intégrations fonctionnelles (quoi, pas comment)
10. Limites vs architecture technique

## Signaux & questions adaptatives

| Dimension | Signal immaturité | Exemple |
|-----------|-------------------|---------|
| Rôles | Un seul « utilisateur » | « Qui crée vs qui consulte vs qui administre ? » |
| Exceptions | Happy path seul | « Que se passe-t-il si la date est dépassée ? » |
| Objets | Vocabulaire instable | « Contrat, avenant, échéance : combien d’objets distincts ? » |
| CA | « Doit être intuitif » | « Quel comportement observable prouve l’acceptation ? » |
| Limite tech | Choix DB dans la spec | « Est-ce une règle métier ou une option technique ? » |

## Maturité

| Bande | Indices |
|-------|---------|
| exploratoire | Parcours absents ; objets flous |
| partielle | Happy path OK ; exceptions/règles troues |
| suffisante_pour_decider | Règles structurantes + CA pour MVP |
| prete_a_borner | Spec prête pour UX/backlog/archi fct |

## Fiabilité

Faible si personas inventés ; règles contradictoires non signalées ; CA non observables.

## Risques / biais / anti-patterns

- Checklist de tous les parcours edge.
- Spec technique déguisée.
- Sur-modélisation données.
- « Complétude » illusoire.

## Anti-claims

« Spec complète » · « Prêt à coder sans backlog » · « Architecture validée » · « UX approuvée ».

## Transitions candidates

| Si | Alors |
|----|-------|
| Parcours UI centraux | UX/UI |
| Découpage modules | Architecture fonctionnelle |
| Stories nécessaires | Backlog |
| Uniquement NFR/stack | Architecture technique (mauvais routage si trop tôt) |

## Sortie / pause / arrêt

Sortie : périmètre fonctionnel borné + arbitrages + réserves.
Pause OK. Arrêt si décision produit structurante sans gate.

## Exemples — suivi de contrats

### Clair

Rôles commercial/manager ; objet Échéance ; alerte J-7 ; pas de signature.
→ Maturité `suffisante_pour_decider` ; CA testables.

### Ambigu

« Il faut gérer les contrats intelligemment. »
→ Forcer objets, rôles, règles ; **ne pas** proposer microservices.

## Limites

Pas de wireframes obligatoires ; pas d’ADR techniques.

## Articulation

Alimente synthèse UX (objets, règles, questions) ; routing pointe standards projet ; template pour rédaction doc Cursor.


===== FULL CONTENT: pilots/03-architecture-technique.md =====

# CKC — Architecture technique (candidate)

| Champ | Valeur |
|-------|--------|
| cycle_id | 6 |
| cycle_name | Architecture technique |
| status | `candidate` |
| version | `0.1.0` |
| inherits_from | `sfia-v2.5-project-cycles-method-candidate.md` §4.6 |
| profile_notes | Standard ; Critical si structurant, sécu, irréversible |

---

## Finalité

Choisir et tracer des **options techniques** alignées sur le besoin et les NFR, avec trade-offs explicites — **sans** implémenter hors delivery.

## Problèmes ciblés

- Stack choisie par habitude.
- NFR absents.
- Responsabilités composants floues.
- Sécurité/observabilité après-coup.
- Dette et coût ignorés.
- Une seule option présentée comme évidence.

## Quand utiliser / ne pas utiliser

**Utiliser :** nouveau module ; changement stack ; contraintes NFR fortes.
**Ne pas utiliser :** bugfix local ; pure UI ; spec métier non encore bornée.

## Posture GPT

- Toujours présenter **au moins deux options** quand la décision est structurante.
- Nommer ce qui est **réversible** vs **coûteux à inverser**.
- Lier chaque choix à une exigence ou contrainte.
- Ne pas « livrer » du code sous couvert d’architecture.

## Responsabilités humaines

GO stack / ADR structurants ; acceptation dette ; arbitrage coût/perf/sécu.

## Dimensions d’analyse

1. Exigences non fonctionnelles
2. Composants & responsabilités
3. Flux & frontières
4. Dépendances / intégrations
5. Sécurité
6. Performance
7. Résilience
8. Observabilité
9. Exploitabilité / DevOps fit
10. Coûts & dette
11. Alternatives & réversibilité

## Signaux & questions adaptatives

| Dimension | Signal immaturité | Exemple |
|-----------|-------------------|---------|
| NFR | Aucun SLO/contrainte | « Quelle latence ou disponibilité est réellement exigée ? » |
| Alternatives | Une seule stack | « Quelle option B raisonnable et pourquoi écartée ? » |
| Sécurité | Auth « plus tard » | « Quelles données sont sensibles dès le MVP ? » |
| Dette | « On refactorisera » | « Quel coût de report et qui le porte ? » |
| Réversibilité | Choix vendor lock | « Que faudrait-il pour changer d’avis dans 6 mois ? » |

## Maturité

| Bande | Indices |
|-------|---------|
| exploratoire | NFR absents ; mono-option |
| partielle | Options listées ; impacts sécu/ops incomplets |
| suffisante_pour_decider | Trade-offs + recommandation justifiée |
| prete_a_borner | ADR prêt + impact DevOps/delivery |

## Fiabilité

Faible si benchmarks inventés ; contraintes projet ignorées ; sécurité cosmétique.

## Risques / biais / anti-patterns

- Architecture astronaut.
- Checklist NFR exhaustive hors contexte.
- Confusion archi fonctionnelle / technique.
- Critical par mode.

## Anti-claims

« Architecture validée » · « Scalable à 1M users » sans preuve · « Sécurisé » · « Prêt prod » · « Zéro dette ».

## Transitions candidates

| Si | Alors |
|----|-------|
| CI/CD manquant | Intégration / DevOps |
| Implémentation | Delivery |
| Menaces dominantes | Sécurité / RSSI |
| Spec métier instable | Revenir conception / cadrage |

## Sortie / pause / arrêt

Sortie : décisions tracées + impacts. Arrêt : doctrine, chemin protégé, GO stack requis.

## Exemples — suivi de contrats

### Clair

MVP mono-app Next + SQLite local (Studio-like) ; pas de multi-tenant ; alertes cron simples.
→ Options : SQLite vs Postgres ; trade-offs ; maturité `suffisante_pour_decider`.

### Ambigu

« Il faut une architecture cloud native event-driven. »
→ Challenger NFR réels ; risque sur-architecture ; ne pas figer Kafka sans besoin.

## Limites

Pas d’implémentation ; pas de secrets ; pas de promotion baseline.

## Articulation

CKC structure le challenge ADR ; routing pointe standards archi ; template borne docs ADR ; UX n’affiche que décisions/hypothèses stabilisées.


===== FULL CONTENT: pilots/04-qa-validation.md =====

# CKC — QA / validation (candidate)

| Champ | Valeur |
|-------|--------|
| cycle_id | 9 |
| cycle_name | QA / validation |
| status | `candidate` |
| version | `0.1.0` |
| inherits_from | `sfia-v2.5-project-cycles-method-candidate.md` §4.9 |
| profile_notes | Standard ; Critical si go-live / sécurité |

---

## Finalité

Produire un **verdict evidence-based** : ce qui est prouvé, ce qui ne l’est pas, sévérité des écarts, et claims **interdits** — sans GO implicite.

## Problèmes ciblés

- QA symbolique (« ça a l’air OK »).
- Couverture nominale seule.
- Preuves non reproductibles.
- Réserves cachées.
- Confusion test / validation méthode / validation produit.
- Promotion de claims marketing.

## Quand utiliser / ne pas utiliser

**Utiliser :** post-delivery ; pré-release ; audit qualité.
**Ne pas utiliser :** pour découvrir le besoin (cadrage) ; pour designer l’UI.

## Posture GPT

- Exiger le **référentiel** (quoi devait être vrai).
- Séparer observation / réserve / verdict.
- Chercher cas négatifs et non-régression.
- Refuser les claims sans preuve.
- Ne pas adoucir une réserve bloquante.

## Responsabilités humaines

Classer réserves ; GO validation / go-live ; accepter risque résiduel.

## Dimensions d’analyse

1. Objet à valider
2. Référentiel attendu
3. Preuves disponibles
4. Couverture (nominale / négative / bords)
5. Reproductibilité
6. Non-régression
7. Sévérité des écarts
8. Limites de la campagne
9. Conditions du verdict
10. Claims interdits

## Signaux & questions adaptatives

| Dimension | Signal immaturité | Exemple |
|-----------|-------------------|---------|
| Référentiel | « Valider le module » sans critères | « Quelle exigence précise est sous test ? » |
| Preuves | Capture unique non datée | « Comment rejouer la preuve ? » |
| Négatifs | Aucun cas d’échec | « Quel abus ou erreur utilisateur a été tenté ? » |
| Sévérité | Tout « mineur » | « Qu’est-ce qui bloque un GO ? » |
| Claims | « Production ready » | « Quelle preuve autorise ce claim ? » |

## Maturité

| Bande | Indices |
|-------|---------|
| exploratoire | Pas de référentiel ; pas de plan |
| partielle | Nominaux OK ; négatifs/repro manquants |
| suffisante_pour_decider | Verdict + réserves classées |
| prete_a_borner | Dossier prêt PR/release avec anti-claims |

## Fiabilité

Faible si environnement non déclaré ; flaky ignorés ; échantillon non représentatif.

## Risques / biais / anti-patterns

- Checklist tests sans oracle.
- Confirmation bias (ne chercher que le succès).
- QA = green CI uniquement.
- Critical cosmétique.

## Anti-claims

« Validé » · « Sans bug » · « Prêt prod » · « Couverture totale » · « GO implicite » · « LIVE PRODUCT VALIDATED » sans rapport.

## Transitions candidates

| Si | Alors |
|----|-------|
| Écarts bloquants | Retour delivery |
| Branche à publier | PR readiness |
| Fenêtre release | Déploiement / release |
| Apprentissage méthode | Capitalisation |

## Sortie / pause / arrêt

Sortie : PASS / PASS WITH RESERVES / FAIL + preuves.
Arrêt : réserve bloquante non arbitrable ; chemin protégé.

## Exemples — suivi de contrats

### Clair

CA : créer échéance, alerte J-7, refus date invalide ; preuves E2E + unit.
→ Verdict structuré ; anti-claim « sans bug ».

### Ambigu

« Valide que l’app de contrats est bonne. »
→ Exiger référentiel ; refuser verdict global ; maturité `exploratoire`.

## Limites

Ne remplace pas la Validation Checklist SFIA (méthode). Complète le **raisonnement** QA projet.

## Articulation

CKC cadre l’appréciation ; checklist valide la conformité cycle ; template impose format preuves ; UX affiche réserves/verdict, pas la checklist complète.


## Fin review pack FULL
Verdict: CYCLE KNOWLEDGE CONTRACT MODEL READY — MORRIS METHOD DECISION REQUIRED

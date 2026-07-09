# SFIA v2.5 candidate — Source routing map

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md`  
**Cycle :** Capitalisation / documentation routing — pré-Cycle 4  
**Version SFIA :** v2.5 **candidate** — non validée comme baseline  
**Baseline opérationnelle :** SFIA v2.4 — tant que Morris n'a pas validé explicitement v2.5  
**Date :** 2026-07-09

---

## 1. Statut

| Élément | Valeur |
|---------|--------|
| **Nature** | Matrice de routage documentaire SFIA v2.5 candidate |
| **Statut** | **Candidate** — utilisable pour préparer Cycle 4, ne valide pas v2.5 |
| **Valide SFIA v2.5 comme baseline ?** | **Non** |
| **Source de vérité** | Git `main` (ou branche locale vérifiée) |
| **Sources projet ChatGPT** | Aide d'instanciation rapide — **pas** source de vérité |
| **Hiérarchie** | En cas d'écart : **Git `main` > sources projet ChatGPT** |

---

## 2. Objectif

Ce document sert à **router les sources** selon le type de cycle projet, le profil SFIA et la demande adressée à ChatGPT ou Cursor.

Il vise à éviter :

- la **surcharge documentaire** (lecture de tout le repo sans qualification) ;
- la **consultation inutile** (documents hors périmètre du cycle) ;
- la **confusion** entre sources projet ChatGPT et Git ;
- la **réactivation** de trajectoires SFIA v3.0 / MCP / Bridge / Runner ;
- l'usage de **documents temporaires** (`.tmp-sfia-review/`) comme doctrine stable.

---

## 3. Principes de routage

| # | Principe | Application |
|---|----------|-------------|
| 1 | **Repo-first** | Toujours partir de Git `main` ou de la branche locale vérifiée (Local Git Truth Check) |
| 2 | **Point d'entrée prompts Cursor** | `prompts/templates/sfia-cycle-execution-template.md` (Cycle 3) pour instancier les prompts SFIA |
| 3 | **Rôles et responsabilités** | `sfia-chatgpt-cursor-operating-model.md` — ChatGPT cadre, Cursor exécute, Morris décide |
| 4 | **Type de cycle et profil** | `sfia-cycle-routing-guide.md` — qualification type × profil, séquence v2.4 et complément v2.5 §4.4 |
| 5 | **Garde-fous et gates** | `sfia-rules-and-guardrails.md` — actions interdites, chemins protégés, push/PR/merge |
| 6 | **Détail des 15 cycles** | `sfia-v2.5-project-cycles-method-candidate.md` — cartographie, méthodologie par cycle, blocs activables |
| 7 | **Trajectoire chantier** | `sfia-v2.5-project-plan.md` — **uniquement** pour contexte Cycles 0–5, critères, roadmap |
| 8 | **Review pack temporaire mono-cycle** | `.tmp-sfia-review/chatgpt-review.md` — revue du **cycle en cours uniquement** ; **réinitialisé (écrasé) au démarrage** de chaque cycle ; **hors commit** par défaut |
| 9 | **Pas de doctrine temporaire** | Ne pas utiliser `.tmp-sfia-review/` comme source permanente ni journal cumulatif |
| 10 | **Hors trajectoire** | SFIA v3.0, MCP, Bridge, Runner, `.sfia/` — **pas** sources opérationnelles v2.5 sauf réouverture explicite Morris |

---

## 4. Matrice des sources de référence

| Source | Rôle | À utiliser quand | Ne pas utiliser quand | Utilisateur principal | Statut |
|--------|------|------------------|----------------------|----------------------|--------|
| `prompts/templates/sfia-cycle-execution-template.md` | Instanciation des prompts Cursor SFIA ; fiche ChatGPT ; 15 cycles ; blocs ; review pack ; verdicts | **Tout** cycle SFIA v2.5 nécessitant un prompt Cursor structuré | Envoi tel quel à Cursor sans instanciation ; remplacement du operating model | ChatGPT (génération), Cursor (exécution du contrat) | Git only — source projet possible post-merge |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Modèle opératoire ChatGPT ↔ Cursor ; profils §18.2 ; prompt as contract ; validation | Cadrage boucle SFIA ; qualification rôles ; profondeur rapport ; gates Morris | Remplacement du template Cycle 3 pour génération prompt ; cycles sans boucle ChatGPT/Cursor | ChatGPT, Morris | Git only |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Routage type de cycle ; références obligatoires ; typologie v2.4 ; complément v2.5 §4.4 | Qualification type × profil ; sélection références minimales ; avant rédaction prompt | Cartographie détaillée des 15 cycles (→ méthode Cycle 2) ; instanciation prompt (→ template Cycle 3) | ChatGPT | Git only |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Règles cycle ; routage documentaire §5 ; garde-fous repo ; ChatGPT/Cursor §7 | Tout cycle touchant le repo ; vérification chemins interdits ; push/PR/merge | Substitut au prompt contractuel ; modification sans périmètre explicite | ChatGPT (cadrage), Cursor (contrôle), Morris (décision) | Git only |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` | 15 cycles projet ; méthodologie par cycle ; transverses FinOps/GreenOps/etc. ; Figma 4 cas | Détail cycle projet ; blocs activables ; critères entrée/sortie ; impact templates | Trajectoire globale Cycles 0–5 (→ project plan) ; validation baseline v2.5 | ChatGPT | Git only — candidate |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md` | Roadmap Cycles 0–5 ; critères C1–C10 ; décisions D0–D7 ; vision chantier v2.5 | Contexte chantier ; positionnement cycle dans la trajectoire ; arbitrage Morris structurant | Exécution opérationnelle d'un cycle courant ; génération prompt Cursor | Morris, ChatGPT (cadrage macro) | Git only — candidate |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md` | **Ce document** — matrice de routage sources × cycles × profils | Préparation Cycle 4 ; clarification « quoi lire quand » ; capitalisation routing | Remplacement du template ou du routing guide ; doctrine baseline | ChatGPT, Morris | Git only — candidate |
| `.tmp-sfia-review/chatgpt-review.md` | Review pack **mono-cycle** du cycle en cours ; réinitialisé (écrasé) au démarrage ; traçabilité consultation/modification/création | Cycle avec consultation/modification/création documentaire ; validation ChatGPT immédiate | Source de vérité permanente ; doctrine ; journal cumulatif ; commit sans GO Morris ; append historique sans instruction Morris | Cursor (production), ChatGPT (revue), Morris | **Temporaire** — hors commit — mono-cycle |
| `prompts/templates/README.md` | Conventions dossier templates ; statuts candidate/validated | Ajout ou promotion d'un template ; compréhension statuts | Routage cycle courant (sauf gestion templates) | Morris, ChatGPT | Git only |
| `prompts/prompt-catalog.md` | Catalogue prompts SFIA validés / historiques | Référence prompts existants ; **ne pas modifier** sans GO Morris | Génération nouveau prompt v2.5 (→ template Cycle 3) ; source opérationnelle par défaut v2.5 candidate | ChatGPT (lecture), Morris | Git only — protégé |
| `docs/tooling/mcp/*` | Doctrine et tooling SFIA 3.0 / MCP | **Jamais** en trajectoire v2.5 courante | Tout cycle v2.5 sans réouverture explicite Morris | — | **Hors trajectoire** |
| `.sfia/*` | Bridge, Runner, gates, tasks, reports automation | **Jamais** en trajectoire v2.5 courante | Tout cycle v2.5 sans réouverture explicite Morris | — | **Hors trajectoire** |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/*` | Clôture et historique exploration SFIA 3.0 | Confirmation que v3 est gelé ; contexte décisionnel | Routage opérationnel v2.5 ; relance automation | Morris (lecture ponctuelle) | **Hors trajectoire** |

---

## 5. Matrice par cycle SFIA v2.5

| Cycle | Sources minimales | Sources optionnelles | Sources à éviter | Review pack | Remarque de routage |
|-------|-------------------|----------------------|------------------|-------------|---------------------|
| 1 — Cadrage | Template Cycle 3 ; operating model §3–§5 ; routing guide §4 | Project plan (contexte) ; méthode cycles §4.1 ; rules/guardrails §5 | Prompt catalog (modification) ; SFIA v3 / MCP / `.sfia` | Proportionné — **oui** si docs consultés/modifiés/créés | Qualifier type + profil + gates avant tout prompt Cursor |
| 2 — Conception fonctionnelle | Template ; méthode cycles §4.2 ; routing guide | Rules/guardrails ; operating model | v3 / MCP ; catalog sans GO | **Oui** si documentaire | Standard par défaut |
| 3 — Architecture fonctionnelle | Template ; méthode cycles §4.3 ; routing guide | Rules/guardrails ; operating model §18.2 si Critical | v3 / MCP | **Oui** — souvent documentaire | Critical si arbitrage structurant |
| 4 — UX/UI | Template §6.6 Figma ; méthode cycles §4.4 | Routing guide ; rules/guardrails | Figma non validé comme source d'exécution | **Oui** si doc/design | 4 cas Figma — stop si fidélité sans source validée |
| 5 — Backlog / user stories | Template ; méthode cycles §4.5 | Routing guide | Catalog | Proportionné | Souvent Standard |
| 6 — Architecture technique | Template ; méthode cycles §4.6 ; rules/guardrails §6 | Operating model ; transverses FinOps/GreenOps/Perf | v3 / MCP | **Oui** si ADR/doc | Critical fréquent |
| 7 — Intégration / DevOps | Template §6.8 ; méthode cycles §4.7 | Rules/guardrails CI ; routing guide | `.sfia` automation | **Oui** si pipeline doc | Pas de secrets ; gate GO infra prod |
| 8 — Delivery / implémentation | Template ; méthode cycles §4.8 ; rules/guardrails §6 | Routing guide ; blocs transverses selon risque | Code hors périmètre prompt | Non sauf doc touché | Code = périmètre explicite |
| 9 — QA / validation | Template ; méthode cycles §4.9 | Rules/guardrails ; operating model validation | v3 | Proportionné | Preuves QA tracées |
| 10 — Sécurité / RSSI | Template §6.7 ; méthode cycles §4.10 | Rules/guardrails ; routing guide Critical | v3 / MCP | **Oui** | Critical fréquent — gates Morris |
| 11 — Déploiement / release | Template §6.9 ; méthode cycles §4.11 | Rules/guardrails push/PR | Automation `.sfia` | **Oui** si release notes | GO release Morris |
| 12 — Observabilité / RUN readiness | Template §6.10 ; méthode cycles §4.12 | Transverses perf/FinOps | v3 | Proportionné | Prod critique → gate RUN |
| 13 — PR readiness | Template §6.11 ; rules/guardrails §6 ; routing guide | Operating model | Catalog modification ; `.tmp` dans commit | **Oui** | Vérifier diff/name-status ; pas de merge auto |
| 14 — Post-merge | Template §6.12 ; méthode cycles §4.14 | Operating model post-merge | v3 relance | Proportionné | `git pull --ff-only` ; réserves |
| 15 — Capitalisation / REX | Template ; méthode cycles §4.15 ; **cette matrice** si routing doc | Project plan ; rules/guardrails §12 | Promotion v2.5 baseline implicite | **Oui** | Capitalization + profondeur selon portée |

---

## 6. Matrice par profil SFIA

| Profil | Profondeur documentaire | Sources minimales | Conditions d'escalade | Gate Morris |
|--------|-------------------------|-------------------|----------------------|-------------|
| **Light** | Minimale — mono-fichier ou ≤3 fichiers, pas doctrine | Template Cycle 3 ; routing guide §4.4.4 (lecture allégée) | Risque structurant détecté → **Standard** ; chemin protégé → gate | Merge doc-only si périmètre fermé ; gates si protected |
| **Standard** | Ciblée — références du cycle + garde-fous | Template ; routing guide ; rules/guardrails ; méthode cycles (section du cycle) | Impact archi/sécu/prod → **Critical** | Scope + merge |
| **Critical** | Complète — justification obligatoire | Template ; operating model §18.2 ; routing guide ; rules/guardrails ; méthode cycles ; sections projet si applicable | — | **Chaque gate listé** — jamais implicite |
| **Capitalization Light** | REX court ; observation sans promotion doctrine | Template ; méthode cycles §4.15 | Promotion méthode ou doc structurante → Capitalization Standard/Critical | Si promotion |
| **Capitalization Standard** | Traçabilité apprentissage ; proposition doc | Template ; méthode cycles §4.15 ; rules/guardrails §12 ; routing map (ce doc) | Décision structurante v2.5 → gate Morris | GO capitalisation |
| **Capitalization Critical** | Promotion méthode / doctrine / baseline | Toutes sources candidate v2.5 pertinentes ; project plan | — | GO promotion ; **ne valide pas** v2.5 sans Cycle 4–5 |

**Rappels :**

- **Critical jamais implicite** — justification par facteur(s) de criticité obligatoire.
- **Capitalization ≠ Critical automatique** — Capitalization exprime l'intention de capitaliser ; la profondeur reste Light / Standard / Critical selon portée.
- **Light trivial** — review pack exempté **uniquement** si aucun document consulté / créé / modifié et si Morris ne demande pas de revue.

---

## 7. Routage ChatGPT vs Cursor

| Acteur | Routage des sources | Contraintes |
|--------|---------------------|-------------|
| **ChatGPT** | Peut s'appuyer sur **sources projet** pour cadrer rapidement | Git `main` **prime** en cas d'écart ; produit le prompt via template Cycle 3 ; ne modifie pas le repo |
| **Cursor** | Lit le repo **uniquement** après Local Git Truth Check et selon périmètre du prompt | Ne décide pas ; n'élargit pas le périmètre documentaire ; exécuteur contrôlé |
| **Morris** | Valide gates, push, PR, merge, baseline | Autorité de décision — pas d'automatisation des arbitrages |

**Règle review pack :** tout prompt Cursor impliquant **consultation**, **modification** ou **création** documentaire déclenche la **réinitialisation puis l'écriture** de `.tmp-sfia-review/chatgpt-review.md` — artefact **mono-cycle**, **écrasé au démarrage** du cycle, hors commit par défaut, **append historique interdit** sauf instruction Morris, avec **date et heure** du rapport.

---

## 8. Routage des documents temporaires

| Document | Usage | Interdictions |
|----------|-------|---------------|
| `.tmp-sfia-review/chatgpt-review.md` | Revue **mono-cycle** en cours ; preuve pour ChatGPT ; horodatage obligatoire ; réinitialisé au démarrage de chaque cycle | Remplacer un livrable versionné ; commit/stage sans GO Morris ; doctrine stable ; journal cumulatif ; append sans écrasement |
| `.tmp-figma-captures/` et autres `.tmp-*` | Captures ponctuelles | Source de vérité design |

---

## 9. Documents hors trajectoire

Les éléments suivants sont **hors trajectoire courante SFIA v2.5** :

- SFIA 3.0 — doctrine, exploration, clôture (`method/.../sfia-v3/`, `docs/tooling/mcp/`)
- MCP Bridge / Runner / automation (`.sfia/`)
- Templates JSON SFIA 3.0 (`docs/templates/sfia-3-*`)

Ils **ne doivent pas** être routés comme sources opérationnelles v2.5.

**Toute réouverture** exige une demande **explicite Morris** — hors périmètre Cycle 4 par défaut.

---

## 10. Stop conditions

Cursor ou ChatGPT doit **stopper** et solliciter Morris si :

1. Source absente, obsolète ou contradictoire avec Git `main`
2. Conflit **Git `main`** vs source projet ChatGPT non résolu
3. Cycle ou profil **impossible à qualifier**
4. Besoin de document **SFIA v3.0 / MCP / `.sfia`** non explicitement demandé
5. Risque de **promouvoir v2.5 en baseline** sans gate
6. Modification **hors périmètre** (catalog, core/, automation, v3)
7. Action Git distante (push / PR / merge) **sans GO Morris**
8. Absence de **review pack** alors que documents consultés / modifiés / créés
9. Tentative d'utiliser `.tmp-sfia-review/` comme **doctrine permanente** ou **journal cumulatif**
10. **Append** d'un cycle à `chatgpt-review.md` **sans écrasement** préalable — sauf instruction Morris
11. Review pack **mélangeant plusieurs cycles** sans instruction explicite Morris

---

## 11. Verdict d'usage

| Élément | Valeur |
|---------|--------|
| **Statut** | Document **candidate** |
| **Utilisation** | Préparer et éprouver le **Cycle 4** (épreuves réelles) |
| **Valide v2.5 baseline ?** | **Non** |
| **Recommandation** | Éprouver cette matrice pendant Cycle 4 ; ajuster selon retours Morris / ChatGPT |
| **Prochaine étape** | Cycle 4 — validation opérationnelle sur cycles réels |

---

*SFIA v2.5 candidate — Source routing map — pré-Cycle 4 — Morris décide — Git source de vérité.*

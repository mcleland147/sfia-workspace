# SFIA Studio — Control Tower Fast Track — Backlog et delivery

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `71-control-tower-fast-track-backlog-and-delivery.md` |
| **Complète** | `70`, `72` |
| **Statut** | `plan-open` — backlog borné ; **non exécuté** |
| **Gate exécution** | `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` |

> ≤ 12 items. ≤ 3 lots. Pas d’epics artificiels. Pas de code avant GO exécution.

---

## 1. Backlog borné

### FT-01 — Inventory OPS1 reuse (preuve documentaire → checklist code)

| Champ | Contenu |
|-------|---------|
| Objectif | Verrouiller la matrice réutiliser / étendre / créer avant code |
| Fichiers | `app/lib/ops1/**`, `features/ops1/**`, tests/e2e ops1 |
| Dépendances | Aucune |
| AC | Checklist fichier→décision jointe au lot A ; aucun rebuild inutile |
| Tests | N/A (doc→checklist) |
| Risques | Sur-ingénierie |
| Gate | Inclus dans GO exécution |
| Effort | S |
| Parallel | Oui (avec FT-02) |

### FT-02 — Tool contracts

| Champ | Contenu |
|-------|---------|
| Objectif | Types + schémas + plafonds + erreurs des outils §5 du doc 70 |
| Fichiers | `lib/ops1/tools/**` (nouveau), `types.ts` |
| Dépendances | FT-01 |
| AC | Chaque outil a schéma params/réponse/policy ; pas de shell |
| Tests | Unit schémas / validation deny |
| Risques | Surface trop large |
| Effort | M |
| Parallel | Oui avec FT-01 |

### FT-03 — Git local read adapter

| Champ | Contenu |
|-------|---------|
| Objectif | Adapter interne read-only |
| Fichiers | `lib/ops1/tools/gitLocalReadAdapter.ts` |
| Dépendances | FT-02 |
| AC | status/head/search/read/diff/worktrees ; commandes interdites impossibles |
| Tests | Unit + preuve négative path hors allowlist |
| Risques | Fuite secrets fichiers |
| Effort | M |
| Parallel | Avec FT-04 si contrats figés |

### FT-04 — GitHub read adapter

| Champ | Contenu |
|-------|---------|
| Objectif | Interface métier + 1er transport (reco : API REST ou `gh` encapsulé) |
| Fichiers | `lib/ops1/tools/githubReadAdapter.ts`, `githubTransport*.ts` |
| Dépendances | FT-02 ; D2 transport |
| AC | getRepo/branch/commit/PR/checks ; creds backend ; fail explicite |
| Tests | Unit mock transport ; pas de write |
| Risques | Auth locale ; quotas |
| Effort | M |
| Parallel | Avec FT-03 |

### FT-05 — OpenAI tool-calling loop

| Champ | Contenu |
|-------|---------|
| Objectif | Étendre `openaiProvider` + `conversation/service` : tools → router → résultats |
| Fichiers | `conversation/openaiProvider.ts`, `service.ts`, Tool Router |
| Dépendances | FT-02, FT-03, FT-04 |
| AC | Live multi-tours avec ≥1 tool call Git + GitHub ; `tools: []` abandonné en live FT |
| Tests | Unit fake provider tools ; e2e fixture tools |
| Risques | Boucle infinie / coût tokens |
| Effort | L |
| Parallel | Non (chemin critique) |

### FT-06 — Tool-event UI

| Champ | Contenu |
|-------|---------|
| Objectif | Afficher appels d’outils et sources dans Ops1SessionScreen |
| Fichiers | `features/ops1/Ops1SessionScreen.tsx` (+ composants légers) |
| Dépendances | Events FT-05 |
| AC | États outil appelé / OK / KO visibles sans quitter la conversation |
| Tests | UI/unit + e2e smoke |
| Risques | Bruit UX |
| Effort | M |
| Parallel | Après contrats events ; parallèle partiel FT-05 fin |

### FT-07 — Cursor Adapter integration

| Champ | Contenu |
|-------|---------|
| Objectif | Brancher prepare→gate→start sans copier-coller ; réutiliser CLI OPS1 |
| Fichiers | `cursorExecutionAdapter.ts`, `executionOrchestrator.ts`, gate UI |
| Dépendances | FT-05 (proposition action), OPS1 I3–I5 |
| AC | Prompt/contrat transmis auto ; spawn CLI ; events running/done |
| Tests | e2e fixture ; real sous flag |
| Risques | Refonte inutile de l’adapter |
| Effort | M (si réutilise) |
| Parallel | Non avec FT-08 |

### FT-08 — Report reinjection

| Champ | Contenu |
|-------|---------|
| Objectif | Après seal rapport : message corrélé dans conversation ; GPT peut analyser |
| Fichiers | `reportService.ts`, reinjection service, conversation |
| Dépendances | FT-07 |
| AC | Zéro copier-coller ; sealed immutable ; analyse post-rapport possible |
| Tests | Unit + e2e i6 étendu |
| Risques | Double injection / race |
| Effort | M |
| Parallel | Non |

### FT-09 — Unified timeline

| Champ | Contenu |
|-------|---------|
| Objectif | Timeline unique demande→outils→gate→exec→rapport→décision |
| Fichiers | UI + events |
| Dépendances | FT-06, FT-07, FT-08 |
| AC | Parcours démo lisible en une vue |
| Tests | e2e snapshot états |
| Effort | S–M |
| Parallel | Fin Lot C |

### FT-10 — Security and policy checks

| Champ | Contenu |
|-------|---------|
| Objectif | Preuves deny : path, repo, write GitHub, start sans GO, redaction |
| Fichiers | tests policy + adapters |
| Dépendances | FT-03–05, FT-07 |
| AC | Matrice contrôles documentée + tests verts |
| Effort | M |
| Parallel | Avec FT-11 |

### FT-11 — Integrated tests

| Champ | Contenu |
|-------|---------|
| Objectif | Suite unit + e2e vertical slice FT |
| Fichiers | `__tests__`, `e2e` |
| Dépendances | Lots A–B |
| AC | Parcours nominal fixture vert ; cas deny verts |
| Effort | M |
| Parallel | Avec FT-10 |

### FT-12 — Live demonstration

| Champ | Contenu |
|-------|---------|
| Objectif | Preuve live Morris (GPT réel + GitHub read + Cursor réel si dispo) |
| Fichiers | preuves `.tmp-sfia-review/**` (hors commit projet) |
| Dépendances | FT-09–11 |
| AC | Checklist 8 critères doc 70 §8 ; réserves explicites si Cursor real KO |
| Effort | S (exec) + prep |
| Parallel | Non — clôture |

---

## 2. Lots (≤ 3)

### Lot A — Lecture outillée

**Items :** FT-01, FT-02, FT-03, FT-04, FT-05, FT-06
**Preuve :** GPT lit Git local + GitHub ; UI montre tool events ; aucun Cursor write requis.

### Lot B — Cursor intégré

**Items :** FT-07, FT-08
**Preuve :** Gate → CLI auto → rapport réinjecté ; zéro copier-coller.

### Lot C — Démonstration complète

**Items :** FT-09, FT-10, FT-11, FT-12
**Preuve :** Timeline + contrôles sécu + tests + live (ou live partiel documenté).

---

## 3. Chemin critique

```
FT-01/02 → FT-03 & FT-04 → FT-05 → FT-06
                ↓
              FT-07 → FT-08 → FT-09 → FT-10/11 → FT-12
```

Bloquant principal : **FT-05** (tool loop). Ensuite **FT-07→FT-08**.

---

## 4. Parallélisation autorisée

| Pair | OK si |
|------|-------|
| FT-01 ∥ FT-02 | Oui |
| FT-03 ∥ FT-04 | Oui — contrats FT-02 gelés ; fichiers distincts |
| FT-06 fin ∥ polish FT-05 | Oui si events schema stable |
| FT-10 ∥ FT-11 | Oui |
| FT-07 ∥ FT-08 | **Non** |
| Multi-branches | **Déconseillé** — une branche delivery après GO |

---

## 5. Dette temporaire acceptée (candidate)

- Allowlist encore orientée Campus360 / patterns OPS1 — élargir seulement si démo l’exige
- Transport GitHub V1 unique (pas d’abstraction sur-ingéniée)
- Timeline UI « suffisante » pas pixel-perfect
- Cancel Cursor manuel non prioritaire
- Pas de multi-repo

---

## 6. Stratégie branche (après GO exécution — non ouverte ici)

Recommandation : **une** branche `delivery/sfia-studio-control-tower-ft-vs` depuis `main` (+ commits docs 66–72 si intégrés avant). Pas de multiplication worktrees FT.

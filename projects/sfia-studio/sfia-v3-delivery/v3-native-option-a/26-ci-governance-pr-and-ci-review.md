# 26 — CI Governance PR and CI Review (PR #268)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 15:12:43 CEST (+0200) — Europe/Paris (Truth Check) · finalisation ~15:14 CEST |
| **Cycle** | QA / validation — Revue PR et CI workflow SFIA Studio |
| **Profil** | Critical |
| **Gate** | `GO REVIEW OPTION A CI GOVERNANCE PR AND CI — SFIA STUDIO V3-NATIVE` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-option-a-ci-governance` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-ci-merge-governance` |
| **HEAD local = distant** | `ff10c92246e624736164fdd5f1bb97a03772d33e` |
| **origin/main** | `910de87a9dad00491cd32cb6b439ce13cbc7bceb` |
| **merge-base** | `910de87…` |
| **avance/retard** | **+8 / −0** |
| **PR** | [#268](https://github.com/mcleland147/sfia-workspace/pull/268) |
| **Handoff source** | blob `1d27f1ddaf79aeb1a17c4f17e15e873511ebb428` |
| **Correction appliquée** | **NON** |
| **Push projet** | **NON** |
| **Merge** | **INTERDIT** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A CI GOVERNANCE PR REVIEW COMPLETE — CI CORRECTION FRAMED, MORRIS GO REQUIRED` |
| **Gate suivant candidat** | `GO CORRECT OPTION A CI NODE RUNTIME AND RE-RUN PR CI — SFIA STUDIO V3-NATIVE` (**NOT consumed**) |

---

## 1. Truth Check

| Contrôle | Résultat |
|----------|----------|
| Worktree / branche | **PASS** |
| HEAD = `ff10c92…` = upstream = remote | **PASS** |
| `origin/main` = `910de87…` | **PASS** |
| +8 / −0 | **PASS** |
| PR #268 OPEN non-draft non-mergée | **PASS** |
| Head PR = tip | **PASS** |
| Auto-merge inactif · mergeState UNSTABLE | **PASS** |
| Runs 30201400028 + 30201461893 présents | **PASS** |
| Handoff blob `1d27f1dd…` | **PASS** |
| Aucune opération Git active | **PASS** |
| Tracked clean (hors `.tmp-sfia-review/`) | **PASS** |
| Workflow / packages / runtime non modifiés depuis tip | **PASS** |

---

## 2. CKC

| Champ | Valeur |
|-------|--------|
| Contrat QA détaillé | **candidate** périphérique : `method/.../pilots/04-qa-validation.md` |
| Statut pour ce cycle | **absent** d’autorité DevOps/CI dédiée |
| Usage | experimental cognitive guidance |
| Autorité | **aucune** (ne peut pas autoriser une correction) |
| Fallback | méthode SFIA + workflow + logs GitHub + docs 24/25 |

---

## 3. État PR #268

| Champ | Valeur |
|-------|--------|
| URL | https://github.com/mcleland147/sfia-workspace/pull/268 |
| State | **OPEN** |
| Draft | **false** |
| Merged | **NON** |
| Base | `main` @ `910de87…` |
| Head | `delivery/sfia-studio-v3-native-option-a-ci-merge-governance` @ `ff10c92…` |
| Titre | `ci(sfia-studio): add project validation workflow and merge governance` |
| Files | **6** |
| Additions / deletions | **+1376 / −23** |
| Mergeable | **MERGEABLE** |
| Merge state | **UNSTABLE** |
| Reviewers / labels | **aucun** |
| Auto-merge / merge queue | **inactifs** |

**PR merge-ready :** **NON** (check en échec).

---

## 4. Périmètre / commits / diff

### Fichiers (6)

| Fichier | Nature | Scope |
|---------|--------|-------|
| `.github/workflows/sfia-studio-ci.yml` | CI | **in scope** |
| `…/22-post-merge-review.md` | docs héritées | **in scope** |
| `…/23-next-option-a-step-after-t-a6.md` | docs | **in scope** |
| `…/24-ci-and-merge-governance-preparation.md` | docs | **in scope** |
| `…/25-ci-governance-branch-publication-and-pr.md` | docs | **in scope** |
| `…/t-a6-…/README.md` | docs | **in scope** |

**Anomalie scope métier :** aucune. Pas de secret. Pas de package/runtime/test/modeled.

### Commits (8 au-dessus de main)

| SHA | Message |
|-----|---------|
| `1f25857` | docs T-A6 post-merge |
| `aef7fd6` | docs cadrage after T-A6 |
| `2492069` | ci workflow |
| `5dd1b50` | docs 24 gouvernance |
| `67a7a1f` | docs 25 publication |
| `4678333` | docs record PR |
| `941701f` | docs pin HEAD SHA |
| `ff10c92` | docs align HEAD final |

---

## 5. Chronologie des runs

| # | Run ID | Head SHA | Event | Conclusion | Nature |
|---|--------|----------|-------|------------|--------|
| 1 | [30201400028](https://github.com/mcleland147/sfia-workspace/actions/runs/30201400028) | `67a7a1f…` | pull_request | **failure** | **Premier run** (workflow + doc 25 initial) |
| 2 | [30201461893](https://github.com/mcleland147/sfia-workspace/actions/runs/30201461893) | `ff10c92…` | pull_request | **failure** | Run **documentaire** (même cause) |

Aucun autre run. Pas de rerun forcé. Concurrency : non pertinente (runs séquentiels sur heads différents).

### Job / check réel

**`Build and validate SFIA Studio`** (workflow `SFIA Studio CI`)

| Steps | Run 1 & 2 |
|-------|-----------|
| Checkout · Setup Node · npm ci · Typecheck · Lint | **PASS** |
| **Build** | **FAIL** |
| Vitest · modeled · secret · whitespace | **skipped** |

### Logs utiles (cause identique)

```
✓ Compiled successfully
Collecting page data ...
[Error: Failed to collect configuration for /nouvelle-demande] {
  [cause]: Error: No such built-in module: node:sqlite
  code: 'ERR_UNKNOWN_BUILTIN_MODULE'
}
> Build error occurred
[Error: Failed to collect page data for /nouvelle-demande]
```

Observation GHA (run doc) : warning dépréciation Node 20 sur runners Actions (`actions/checkout@v4` / `setup-node@v4` forcés vers Node 24 pour l’exécution des actions) — **distinct** du `node-version: "20"` installé pour les steps `run` (qui reste la cause du module manquant).

---

## 6. Chaîne causale F-CI-05 (démontrée)

### Observation

Build CI échoue à la collecte de page data Next.js avec `ERR_UNKNOWN_BUILTIN_MODULE` / `node:sqlite`.

### Cause démontrée

1. **Import applicatif direct (valeur)** dans `projects/sfia-studio/app/lib/d1/db.ts` :

   `import { DatabaseSync } from "node:sqlite";`

   (également `lib/ops1/db.ts` — même API).

2. Chaîne de chargement build :

   `app/nouvelle-demande/page.tsx`
   → `@/lib/d1/commands` (`listWorkspaceProjects`)
   → `./db` (`openD1Db`)
   → `node:sqlite` (`DatabaseSync`)

3. `next build` charge le graphe serveur lors de « Collecting page data » → **require runtime** de `node:sqlite` (pas seulement typecheck).

4. **Node 20** : module builtin **absent** → `ERR_UNKNOWN_BUILTIN_MODULE`.

5. **Node 24** (local historique) : module **présent** → build PASS → explique le faux sentiment de « build OK » avant CI.

### Preuves complémentaires

| Version | Source | `require('node:sqlite')` | typecheck | lint | `next build` |
|---------|--------|--------------------------|-----------|------|--------------|
| **v20.19.4** | tarball temporaire `/tmp` | **FAIL** | 0 | 0 | **1** (même erreur ; page observée `/workspace` — même cause) |
| **v22.17.1** | tarball temporaire | **OK** + `ExperimentalWarning` | 0 | 0 | **0** |
| **v24.16.0** | tarball temporaire | **OK** | 0 | 0 | **0** |

Smoke D1 (`project-foundation.test.ts`) : **7/7 PASS** sous Node 22 et 24.

**Flag Node requis :** **non** pour build/tests observés sous 22.17.1 / 24.16.0 (warning expérimental seulement sur 22).

**Version minimale démontrée pour build :** **Node 22.17.1** (avec API sqlite **expérimentale**). **Node 24.16.0** : build OK **sans** ExperimentalWarning observé au probe.

**Compatibilité Next 15.5.20 :** build OK dès que `node:sqlite` existe.

**Impact :**

| Surface | Impact |
|---------|--------|
| Build CI | **bloqué** sous Node 20 |
| Runtime Studio (D1/OPS1) | **dépend** de `node:sqlite` (choix architecture déjà documenté) |
| Tests | suites D1/OPS1 exigent le même module |
| Production | hors scope ; pin Node doit couvrir runtime cible |

**Hypothèses écartées / non retenues comme cause primaire :**

- bug Next.js isolé (compilation OK ; échec au load module) ;
- lockfile / npm ci (ci PASS) ;
- path filters workflow (run bien déclenché) ;
- secret scan / permissions.

---

## 7. Options correctives

### C1 — Changer Node dans le workflow

| Critère | Évaluation |
|---------|------------|
| Versions candidates | **22** (min démontrée) · **24** (alignée local + moins expérimentale) |
| Preuve build | 22 PASS · 24 PASS |
| Preuve tests | smoke D1 PASS 22/24 |
| `node:sqlite` | OK 22 (expérimental) · OK 24 |
| Stabilité | 24 préférable vs ExperimentalWarning 22 |
| Impact CI | modification **1 ligne** `node-version` |
| Impact runtime cible | aligne CI sur capacité déjà utilisée en local |
| Dette | reste sans `engines`/`.nvmrc` si C3 non joint |
| Minimal immédiat | **OUI — workflow-only** |

### C2 — Supprimer / remplacer `node:sqlite`

| Critère | Évaluation |
|---------|------------|
| Fichiers | `lib/d1/db.ts`, `lib/ops1/db.ts` + nombreux type-imports |
| Valeur actuelle | persistence locale D1/OPS1 **intentionnelle** (docs design) |
| Alternative | better-sqlite3 / PG / abstraction — **refonte** |
| Scope | **métier/architecture** · hors PR CI |
| Priorité | **ne pas** privilégier pour conserver Node 20 |

### C3 — Pin projet (`engines` / `.nvmrc`)

| Critère | Évaluation |
|---------|------------|
| Bénéfice | aligne local/CI/docs ; clôture progressive F-CI-01 |
| Impact package | **modifie** `package.json` (± lock non requis pour engines) |
| Cycle | peut être **même GO** si Morris élargit fichiers, sinon **cycle pin séparé** |
| Recommandation | **fortement utile** en complément de C1, pas substitut au fix CI immédiat |

### C4 — Matrice Node temporaire

Diagnostique utile déjà fait localement. Matrice GHA = surindustrialisation pour 1ère CI. **Écarter** pour le correctif immédiat.

### C5 — Différer le build CI

Contrôle dégradé · masquerait F-CI-05. **Écarter** sauf impossibilité (non démontrée).

---

## 8. Matrice comparative

| Option | Minimal | Preuve | Dette | Scope métier | Recommandé |
|--------|---------|--------|-------|--------------|------------|
| **C1 Node 24 workflow** | très bas | build+smoke OK | pin projet encore OPEN | non | **OUI (primaire)** |
| C1 Node 22 workflow | très bas | build OK | ExperimentalWarning | non | acceptable second choix |
| C2 retirer sqlite | élevé | n/a | architecture | **oui** | NON pour ce fix |
| C3 engines/.nvmrc | bas | doc/ops | faible | non | **complément** |
| C4 matrice | moyen | redondant | bruit CI | non | NON immédiat |
| C5 skip build | bas | faux PASS | élevée | non | NON |

---

## 9. Recommandation (non validée Morris)

**Correction minimale recommandée :** **C1 workflow-only** — passer `node-version` de `"20"` à **`"24"`** dans `.github/workflows/sfia-studio-ci.yml`.

| Champ | Valeur |
|-------|--------|
| Type de cycle | **workflow-only** (minimal) |
| Fichier exact | `.github/workflows/sfia-studio-ci.yml` |
| Changement | `node-version: "20"` → `node-version: "24"` |
| Justification | Node 20 **incompatible** avec `node:sqlite` déjà en runtime D1/OPS1 ; Node 24 **démontré** localement ; aligne validation historique ; évite ExperimentalWarning Node 22 |
| Tests locaux attendus (sous Node 24) | `npm ci` · typecheck · lint · build · `npm test` · modeled `node --test` (3 fichiers) · secret scan · diff-check |
| Runs GitHub attendus | nouveau run PR sur head corrigé · check `Build and validate SFIA Studio` → succès attendu |
| Findings traités (mitigation) | F-CI-05 (mitigation CI) · F-CI-03 (réduit) |
| Findings maintenus OPEN | F-A6-PM-G01 · F-CI-01 · F-CI-02 · F-CI-04 · F-CI-05 jusqu’à preuve run vert · pin engines |
| Limites | ne fige pas `engines.node` ; ne décide pas baseline produit formalisée ; ne ferme pas F-A6-PM-G01 |
| Stop conditions correctif | build/tests locaux fail sous 24 · run GitHub encore fail · scope élargi sans GO · modification runtime |

**Complément candidat (Morris) :** C3 dans le **même** gate élargi **ou** cycle pin séparé (`engines.node` + `.nvmrc` = `24` ou `>=22`).

**Second choix :** Node **22** si Morris refuse 24 ; documenter ExperimentalWarning.

**Gate Morris exact :**

```
GO CORRECT OPTION A CI NODE RUNTIME AND RE-RUN PR CI
— SFIA STUDIO V3-NATIVE
```

Fichiers autorisés proposés pour ce GO : **uniquement** `.github/workflows/sfia-studio-ci.yml` (+ doc de correction) ; **pas** runtime/tests/modeled ; package/lock **uniquement** si Morris ajoute explicitement C3.

Après succès distant :

```
GO REVIEW OPTION A CI GOVERNANCE PR AFTER CORRECTION
— SFIA STUDIO V3-NATIVE
```

**Aucun gate merge** à ce stade.

---

## 10. Gouvernance merge

| Élément | Statut |
|---------|--------|
| PR merge-ready | **NON** |
| MERGEABLE ≠ validée | confirmé |
| Check en échec = stop | confirmé |
| H1/H2/H3 | **non consommés** · **non proposés** |
| GO merge | **non proposé** |
| Required check | **non applicable** tant qu’échec |
| Branch protection | **PROPOSED — NOT APPLIED** |
| F-A6-PM-G01 | **OPEN** |

Séquence post-correction : GO correctif → fix → validation locale Node CI → push → nouveau run → revue after correction → H1/H2/H3 → GO merge → post-merge → protections cycle séparé.

---

## 11. Findings / réserves

| ID | Statut |
|----|--------|
| F-A6-PM-G01 | **OPEN** |
| F-CI-01 | **OPEN** (pin Node Studio) |
| F-CI-02 | **OPEN** (npm audit) |
| F-CI-03 | **OPEN** (corroboré · path vers mitigation C1) |
| F-CI-04 | **OPEN** (actionlint) |
| F-CI-05 | **OPEN Major** — cause démontrée · correctif **cadré** · **non fermé** |
| B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 | **OPEN** |
| C1–C4 (maturité Option A) | RECOMMENDED — NOT VALIDATED |

---

## 12. Décisions

### Validées (ce cycle — revue)

- Cause F-CI-05 = incompatibilité Node 20 × `node:sqlite` chargé au build via D1.
- Reproduction locale Node 20 = FAIL build ; 22/24 = PASS build.
- Scope PR #268 conforme (CI + docs).
- PR non merge-ready.
- Aucune correction exécutée.

### Candidates

- C1 Node **24** workflow-only (recommandation).
- C1 Node 22 (second).
- C3 pin `engines`/`.nvmrc` (complément).

### Morris requises (non créées)

- GO correctif Node runtime CI ;
- choix 24 vs 22 vs C3 joint ;
- tout GO merge ultérieur ;
- fermeture findings.

---

## 13. Anti-claims

- Revue ≠ correction
- Recommandation ≠ décision Morris
- Build local Node 24 ≠ CI PASS
- MERGEABLE ≠ validée
- Cause démontrée ≠ F-CI-05 fermé
- F-A6-PM-G01 non clos
- T-A6 / Option A non COMPLETE
- T-A7 non ouvert

---

## 14. Verdict

`SFIA STUDIO V3-NATIVE OPTION A CI GOVERNANCE PR REVIEW COMPLETE — CI CORRECTION FRAMED, MORRIS GO REQUIRED`

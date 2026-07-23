# Review pack FULL — Audit dépendances v2.6 & trajectoire refondation SFIA Studio v3-native

## 1. Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 19:14:40 CEST (+0200) |
| Cycle | Cadrage / audit de transformation (+ archi fonctionnelle & technique état des lieux) |
| Profil | Critical |
| Gate consommé | `GO AUDIT DÉPENDANCES V2.6 ET TRAJECTOIRE DE REFONDATION — SFIA STUDIO V3-NATIVE` |
| Repository | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-workspace-v3-native-audit` |
| Branche audit | `audit/sfia-studio-v3-native-dependencies` (locale, **non poussée**) |
| HEAD | `56ddf32e811f0f5f8b82f31400da18ceecf3bc30` |
| Base | `origin/main` @ `56ddf32e811f0f5f8b82f31400da18ceecf3bc30` |
| Merge de référence | PR #259 · `56ddf32e811f0f5f8b82f31400da18ceecf3bc30` |
| Doctrine produit de référence | SFIA Studio v3 VALIDATED (framing 30–37) |
| Modification projet | **aucune** |
| Commit / push / PR projet | **aucune** |

## 2. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| `origin/main` contient PR #259 | OUI (`56ddf32…`) |
| Docs framing 30–37 présents | OUI |
| Locks / merge / rebase | aucun |
| Branche audit créée depuis `origin/main` | OUI |
| Worktree projet modifié | NON (hors `.tmp-sfia-review/` pour ce pack) |
| Status | ```## audit/sfia-studio-v3-native-dependencies...origin/main``` |

Log récent :

```
56ddf32 (HEAD -> audit/sfia-studio-v3-native-dependencies, origin/main, origin/HEAD) docs(sfia-studio): validate v3 knowledge-driven doctrine (#259)
2014e94 (main) docs(sfia): integrate candidate Cycle Knowledge Contract routing (#258)
499c6b3 delivery(sfia-studio): D1 shared platform integration + 60s provider timeout (#257)
416af8a docs(sfia-studio): consolidate unmerged project documents (#256)
445702d refactor(sfia-studio): extract shared technical platform (#255)
88fa465 (framing/sfia-studio-next-product-increment) feat(sfia-studio): deliver control tower and AI-guided project intake foundation (#254)
32e5271 (ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4, ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c, ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e, ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846, ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0, ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4, ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6, ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14, ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29, ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1, ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68, ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901, framing/sfia-studio-control-tower) feat(sfia-studio): deliver OPS1 I6 reporting and continuation (#253)
27811e8 (ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230, ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2, ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050, ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353, ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca, ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700, ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7, ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7, ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187, ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8, ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d, ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce, ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608, ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a, ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539, ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd, ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928, ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56, ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f, ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89) feat(sfia-studio): deliver OPS1 I5 real cursor execution (#252)
4b279b8 (ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0, ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b, ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca, ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61, ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62, ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10) feat(sfia-studio): deliver OPS1 I4 allowlist evaluation (#251)
33de2fc feat(sfia-studio): deliver OPS1 I3 action gate (#250)
853959c feat(tooling): add canonical review handoff publisher (#249)
ae39a8c feat(ops1): deliver I2 live conversation modes (#248)
abd0541 docs(method): require review handoff for every Cursor report (#247)
84e624f feat: implement OPS1 I1 session and journal (#246)
7dc742b docs: validate OPS1 integration DevOps foundation (#245)
```

## 3. Sources consultées

### 3.1 Doctrine v3 (main)

- `projects/sfia-studio/sfia-v3-framing/README.md` + docs 01–37 (dont 30–37 intégralement pour axes F01–F15 / exclusivité)
- `sfia-v3-design/**` (index + D1 slices)
- `sfia-v3-modeled/**` (README + schemas listés)
- `sfia-v3-delivery/**` (D1 I1 / C1–C4)
- README racine `projects/sfia-studio/README.md` + docs produit 01–85

### 3.2 Runtime

- `projects/sfia-studio/app/**` (Next.js actif, port 3020)
- `projects/sfia-studio/harness/**` (POC secondaire)
- Modules clés : `app/lib/platform/sfia-context/*`, `app/lib/ops1/*`, `app/lib/d1/*`, `app/lib/harness/*`

### 3.3 UX hors main

- Worktree `sfia-workspace-d1-conversational-convergence` @ `7dc6f9f…`
- Docs `87`, `88`, `89` présents hors main ; **absents de main**

### 3.4 Référentiel v2.6 (identification uniquement)

- Chemins chargés par runtime : `prompts/templates/sfia-cycle-execution-template.md`, `method/sfia-fast-track/core/{routing,operating-model,guardrails}`
- CKC sous `method/` (pilotes) — **non** utilisés comme SoT cible Studio

### 3.5 Recherches exécutées

- `rg` v2.6 / PGE / template / method/ / MethodMode / DoctrinePackage / LPS / HumanDecision / CKC / E0–E4 / N1–N3
- Inventaire schemas modeled
- Comptages couches (app 254 ts/tsx · harness 62 · framing 38 · design 56 md · modeled 41 · delivery 55 · root docs 86)

## 4. Inventaire des couches

| Couche | Path | Fichiers (ordre) | Rôle | Maturité réelle vs claim |
|--------|------|------------------|------|--------------------------|
| Runtime actif | `app/` | ~254 ts/tsx | Next.js Studio | **IMPLÉMENTÉ** sous modèle v2.6-consommé · **non** migré v3-exclusive |
| Harness POC | `harness/` | ~62 ts | Orchestration POC S1 | Preuve / spike · parallèle à OPS1 |
| Framing v3 | `sfia-v3-framing/` | 38 | Doctrine | **VALIDATED** (30–37) ; 01–29 partiellement obsolètes (coexistence) |
| Design v3 | `sfia-v3-design/` | ~70 | Conception D1 | Pré-exclusivité · à réévaluer |
| Modeled v3 | `sfia-v3-modeled/` | 41 | Schemas JSON | MODELED CANDIDATE · baseline doc encore « v2.6 » · schemas F01–F03 manquants |
| Delivery v3 | `sfia-v3-delivery/` | 55 | Rapports D1 | IMPLEMENTED CANDIDATE slices · runtime ≠ doctrine exclusive |
| Docs produit root | `projects/sfia-studio/*.md` | 86 | Historique produit OPS1/D1/CT | Majorité **HISTORICAL / ADAPT** ; README encore « consomme v2.6 » |
| UX 87–89 | branche UX | 3 | Convergence conversationnelle | Validés Morris hors main |

## 5. Runtime actif identifié

**Verdict :** le runtime utilisateur actif est **`projects/sfia-studio/app`** (package `sfia-studio`, Next 15, port 3020).

Routes principales : `/nouvelle-demande` (D1 intake) · `/workspace` · `/projects/[id]` · `/ops1/*` · `/synthese` · `/cycle-actif` · `/decision`.

Orchestration secondaire : `projects/sfia-studio/harness` invoqué via `app/lib/harness/invokeHarness.ts` (CLI POC).

```
Morris UI (Next :3020)
  ├─ D1 intake/cockpit → SQLite d1.sqlite + OpenAI
  │                      └─ loadCanonicalCoreSources (method/ + template)
  ├─ OPS1 session → SQLite ops1.sqlite
  │   GPT → proposal → compiler → allowlist → ExecutionContract → Cursor
  │                      └─ ensureSfiaContext (method/ v2.6)
  └─ Harness bridge → poc-s1 CLI

Doctrine v3 framing 30–37 → VALIDATED docs only (non branchée runtime)
```

## 6. Axes d'audit (A–J) — synthèse avec preuves

### Axe A — Source doctrinale — **BLOCKER**

Runtime charge explicitement `method/sfia-fast-track/**` et `prompts/templates/sfia-cycle-execution-template.md`.

Preuve :

```
projects/sfia-studio/app/lib/platform/sfia-context/canonicalPaths.ts
SFIA_CANONICAL_CORE_PATHS = [
  "prompts/templates/sfia-cycle-execution-template.md",
  "method/sfia-fast-track/core/sfia-cycle-routing-guide.md",
  "method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md",
  "method/sfia-fast-track/core/sfia-rules-and-guardrails.md",
]
SFIA_METHOD_BASELINE = "SFIA v2.6"
```

`sourceLoader.ts` lit ces fichiers via `fs.readFileSync`.
`contextResolver.ts` injecte : « Baseline méthode : SFIA v2.6 (consommée, non modifiée ici). »

**Contradit D-V3-02 / D-V3-03 / SC-DOC-EXCL.**

### Axe B — Contrat d'exécution — **STRUCTURAL**

| Couche | Contrat observé |
|--------|-----------------|
| OPS1 | `ExecutionContract` structuré (SQLite) + adapter Cursor — **KEEP/ADAPT** comme pattern |
| Instantiation | Prompt Markdown depuis template v2.6 — **REPLACE** comme natif |
| Harness | `ExecutionContractCandidate` parallèle — **REWORK / HISTORICAL** |
| Cible v3 | ExecutionContract v3 + export MD = adaptateur seulement |

### Axe C — Modèle projet — **STRUCTURAL**

- Project D1 existe (`d1_projects`) avec `method_mode` ∈ `SFIA_V2_6|TRANSITION|V3_CANDIDATE` → **coexistence opérationnelle** (BLOCKER conceptuel).
- **Living Project State** : 0 occurrence code · pas de schema.
- **ProjectTrajectory** : schema modeled présent · quasi absent runtime.
- OPS1 = cycle/session-centric ; D1 = project-centric — distinction partielle CC-D13, non LPS.

### Axe D — Conversation — **MAJOR**

- D1 `/nouvelle-demande` + OPS1 : conversation-led (**ADAPT** vers CC-D01).
- Cockpit `/workspace` `/projects` + P0 hub : surfaces cockpit.
- Framing `11` : « Cockpit avant chat » — **dette / contradiction** avec CC-D01 et doc `30`/`37`.

### Axe E — Connaissance — **BLOCKER**

- Pas de DoctrinePackage resolver.
- Pas de CkcResolution (0 hits CKC métier dans app).
- Digests : présents pour sources allowlistées v2.6, pas pour package v3.
- Fallback : silencieux vers carte/méthode absente côté Studio ; runtime **utilise** v2.6 comme core.

### Axe F — Décision humaine — **ADAPT**

- OPS1 `actionGate` + `gate_decisions` : GO/NO-GO Morris — **KEEP pattern**.
- Schema `human-decision.schema.json` non branché.
- Confirmations N1–N3 : **non** trouvées comme modèle unifié dans `app/lib` (écart CC-D06).
- Pas de mutation implicite dominante observée sur OPS1 (fail-closed) — **KEEP**.

### Axe G — Agents — **MAJOR**

- Capacités implicites (ops allow/deny lists) — **pas** `AgentCapability` contract.
- Cursor réel gate `OPS1_CURSOR_REAL`.
- L5 listé dans closed gates — **KEEP principe**.

### Axe H — Persistance — **MAJOR / STRUCTURAL**

- SQLite OPS1 + D1 : état runtime (alignement partiel D5).
- Pas de MD/JSON/SQL doctrine pin.
- Audit events D1 limités ; OPS1 journal riche.
- Modeled HumanDecision / LPS / DoctrinePackage **non** persistés.

### Axe I — Maturité — **MAJOR**

- Framing 30–37 : VALIDATED (OK).
- README framing encore « merge en attente / DRAFT PR PENDING » — **dette post-merge**.
- README Studio root : « consomme v2.6 » — **claim obsolète** vs D-V3-02.
- Modeled README : Baseline SFIA v2.6 — **obsolète**.
- Delivery « IMPLEMENTED CANDIDATE » ≠ plateforme v3 exclusive.

### Axe J — UX/UI — **MAJOR**

- CC-D01/D03/D05/D06/D12/D13 : documentés hors main (87–89) + intégrés doctrine `30`.
- Runtime partiellement aligné (conversation intake) · panneau vivant LPS absent · N1–N3 non unifiés · MethodMode badges exposent coexistence.

## 7. Matrice 1 — Dépendances v2.6

| ID | Path | Couche | Type de dépendance | Active ? | Preuve | Sévérité | Traitement |
|----|------|--------|-------------------|----------|--------|----------|------------|
| DEP-01 | `app/lib/platform/sfia-context/canonicalPaths.ts` | Runtime | SoT method/ + template | **Oui** | `SFIA_CANONICAL_CORE_PATHS` + `SFIA_METHOD_BASELINE` | **BLOCKER** | REPLACE (DoctrinePackage) |
| DEP-02 | `app/lib/platform/sfia-context/sourceLoader.ts` | Runtime | Lecture FS method/prompts | **Oui** | `fs.readFileSync` allowlist | **BLOCKER** | REPLACE |
| DEP-03 | `app/lib/platform/sfia-context/contextResolver.ts` | Runtime | Injection baseline v2.6 dans LLM | **Oui** | `PERMANENT_CORE` L40 | **BLOCKER** | REPLACE |
| DEP-04 | `app/lib/ops1/sfia/cursorPromptInstantiator.ts` | Runtime | Template Cursor = contrat natif | **Oui** | load template path | **STRUCTURAL** | ADAPT→adapter only |
| DEP-05 | `app/lib/ops1/sessionContext.ts` | Runtime | ensureSfiaContext → cores v2.6 | **Oui** | imports resolver | **BLOCKER** | REWORK |
| DEP-06 | `app/lib/d1/intake/canonicalContext.ts` | Runtime | D1 charge cores v2.6 | **Oui** | `methodBaseline` | **BLOCKER** | REWORK |
| DEP-07 | `app/lib/d1/db.ts` + `types.ts` | Persistance | MethodMode coexistence | **Oui** | CHECK `SFIA_V2_6|TRANSITION|V3_CANDIDATE` | **BLOCKER** | REPLACE schéma mode |
| DEP-08 | `app/features/d1/Badges.tsx` | UX | Affiche MethodMode | **Oui** | MethodModeBadge | **MAJOR** | ADAPT/REMOVE |
| DEP-09 | `harness/src/types/qualificationCandidate.ts` | Harness | Cycles/blocks v2.6 closed lists | **Oui (POC)** | comment + enums | **STRUCTURAL** | HISTORICAL / REPLACE if reused |
| DEP-10 | `app/lib/harness/sfiaCanonicalLabels.ts` | Runtime | Duplication labels cycles | **Oui** | mirror harness | **MODERATE** | ADAPT |
| DEP-11 | `sfia-v3-modeled/schemas/common/doctrine-reference.schema.json` | Modeled | Enum `SFIA-v2.6` | Doc/contrat | schema enum | **MAJOR** | ADAPT |
| DEP-12 | `sfia-v3-modeled/examples/*.json` | Modeled | Exemples doctrineVersion v2.6 | Non runtime | examples | **HISTORICAL** | HISTORICAL-ONLY / refresh |
| DEP-13 | `sfia-v3-modeled/README.md` | Modeled | Baseline claim v2.6 | Doc | metadata | **MAJOR** | ADAPT post-arbitrate |
| DEP-14 | `projects/sfia-studio/README.md` | Doc produit | « consomme v2.6 » Option C | Doc active | multiples lignes | **STRUCTURAL** | REWORK |
| DEP-15 | `sfia-v3-framing/11-…` + `15` + `16` + `27` | Framing antérieur | Modes coexistence / cockpit-first | Doc | MethodMode / cockpit | **STRUCTURAL** | ADAPT/supersede |
| DEP-16 | `sfia-v3-framing/01–29` (hors 30–37) | Framing | Métadonnées baseline v2.6 | Doc | headers | **MODERATE** | ADAPT dette doc |
| DEP-17 | Tests `app/__tests__/d1/project-foundation.test.ts` | Tests | Valident coexistence MethodMode | **Oui** | assert SFIA_V2_6 | **MAJOR** | REPLACE tests exclusivité |
| DEP-18 | Tests canonical engine | Tests | Attendent paths method/ | **Oui** | canonicalEngine.test.ts | **MAJOR** | REPLACE |
| DEP-19 | Allowlist OPS1 `method/` deny write | Runtime | Protège method (OK) mais lecture SoT | Hybride | pathPolicy / allowlist | **MODERATE** | KEEP deny-write · REMOVE read-SoT |
| DEP-20 | Docs root 41–85 OPS1/D1 | Doc | Conçus sous Option C v2.6 | Historique | claims | **HISTORICAL** | HISTORICAL-ONLY + extract patterns |

### Faux positifs

| Item | Pourquoi faux positif |
|------|----------------------|
| Mentions v2.6 dans `36` / `30`–`37` post-validation | Doctrine d'interdiction / héritage — **pas** dépendance active |
| `method/` dans denylist write | Protection — pas consommation |
| `reviewPackCompleteness` matches « ckc » substring | Bruit regex |
| Handoff / review pack vocabulary | Concepts hérités incorporés v3 |

## 8. Matrice 2 — Conformité V3-F01…F15

| Fondation | Framing | Design | Modeled | Delivery | Runtime | Écart | Priorité |
|-----------|---------|--------|---------|----------|---------|-------|----------|
| F01 CKC | VALIDATED `30` | partiel intake | **absent** CkcResolution | opaque non | **absent** | Pas de résolution CKC | P0 |
| F02 LPS | VALIDATED `32` | panneau partiel | **absent** schema | non | **absent** | Pas d'état vivant unifié | P0 |
| F03 DoctrinePackage | VALIDATED `31` | — | **absent** | non | **method/ SoT** | Inverse de la cible | P0 |
| F04 Épistémologie | VALIDATED `33` | tags partiels OPS1 | schemas decision partiels | partiel | partiel (proposal≠decision) | Incomplet | P1 |
| F05 Chaîne conv→exec | VALIDATED `30` | D1 design | — | C1–C4 | hybride PGE | Template MD natif | P0 |
| F06 Trajectoire | VALIDATED `32` | — | `project-trajectory.schema.json` | non | quasi absent | Non branché | P1 |
| F07 Provenance | VALIDATED `31` | — | partiel digests | non | digests v2.6 cores | Mauvaise source | P0 |
| F08 Contradictions | VALIDATED `33` | — | absent | non | quasi absent | Pas de moteur | P1 |
| F09 Replanif | VALIDATED `32` | — | absent | non | absent | — | P2 |
| F10 DebtItem | VALIDATED `35` | — | absent | non | absent | — | P2 |
| F11 AgentCapability | VALIDATED `34` | — | absent | allowlists ad hoc | allow/deny lists | Pattern KEEP → contract | P1 |
| F12 Réversibilité | VALIDATED `34` | — | absent | gates OPS1 | closed gates | KEEP/ADAPT | P1 |
| F13 Learning | VALIDATED `35` | — | absent | non | absent | — | P3 |
| F14 Artefacts | VALIDATED `35` | — | absent | review patterns | review pack harness | ADAPT | P2 |
| F15 Maturité | VALIDATED `35` | claims mixtes | claims mixtes | IMPL CAND | claims runtime | Anti-claims tests absents | P1 |

**Exclusivité v3 :** framing OK · **runtime KO**.

## 9. Matrice 3 — Qualification des actifs (principaux)

| Actif | Qualification | Justification |
|-------|---------------|---------------|
| Framing `30`–`37` + README exclusivité | **KEEP** | Doctrine VALIDATED ; dette métadonnées post-merge seulement |
| Framing `01`–`29` (coexistence / baseline v2.6) | **ADAPT** | Supersede / amender vs D-V3-02/03 |
| `canonicalPaths` + `sourceLoader` + `contextResolver` | **REPLACE** | SoT v2.6 active |
| OPS1 ExecutionContract + worktree + postcheck + allowlist deny-default | **ADAPT** | Pattern v3-compatible si découplé de method/ |
| OPS1 actionGate / journal / conversation | **ADAPT** | Base HumanDecision/gates |
| `cursorPromptInstantiator` | **ADAPT** | Garder comme **adaptateur** export MD, pas SoT |
| D1 project foundation (create/activate/audit) | **ADAPT** | Retirer MethodMode coexistence |
| D1 intake conversation UI | **ADAPT** | Aligner CC-D01/D03/D05 |
| MethodMode triad + badges | **REMOVE-FROM-RUNTIME** | Contredit D-V3-03 |
| Harness POC S1 | **HISTORICAL-ONLY** (ou REWORK si réutilisé) | Double stack · v2.6 enums |
| P0 fixture screens | **REWORK** / HISTORICAL | Hub pré-D1 |
| Modeled schemas existants (project/cycle/decision/review) | **ADAPT** | Enrichir + retirer enum v2.6 runtime |
| Schemas manquants DoctrinePackage/LPS/CKC/… | **REPLACE** (créer) | Gap modeled |
| Delivery D1 C1–C4 reports | **HISTORICAL-ONLY** + extract | Preuves slices |
| Docs root 01–40 produit pré-v3 | **HISTORICAL-ONLY** | Traçabilité |
| Docs OPS1 41–65 | **HISTORICAL-ONLY** + **ADAPT** patterns | Patterns gates/allowlist |
| UX 87–89 (hors main) | **KEEP** (intégrer) | Décisions CC-D* |
| Tests MethodMode / canonical method paths | **REPLACE** | Doivent tester exclusivité |
| `projects/sfia-studio/README.md` Option C | **REWORK** | Claim doctrinal faux post-#259 |

## 10. Matrice 4 — Cycles à rejouer

| Ordre | Cycle | Motif | Entrées | Sorties attendues | Dépendances | Gate Morris |
|------:|-------|-------|---------|-------------------|-------------|-------------|
| 0 | Post-merge doc hygiene | Métadonnées 30–37/README framing obsolètes | main@56ddf32 | Docs à jour merge | — | GO DOC HYGIENE (light) |
| 1 | Arbitrage trajectoire | Choisir ordre + tranche | ce handoff | Trajectoire validée | Audit | `GO MORRIS ARBITRATION — SFIA STUDIO V3-NATIVE REFOUNDATION TRAJECTORY` |
| 2 | Conception fonctionnelle v3-native | Remplacer Option C runtime | Doctrine 30–37 · audit | Spec F01–F12 native | Arbitrage | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE` |
| 3 | Architecture fonctionnelle | LPS · DoctrineResolver · chaîne | Spec | AF v3 | CF | GO AF |
| 4 | UX/UI | Intégrer 87–89 + LPS panel · retirer MethodMode | CC-D* | Contrat UX v3 | AF | GO UX |
| 5 | Modeled enrichment | Schemas F01–F03+ | AF | Manifests JSON | GO modeled | `GO ENRICHISSEMENT MODELED` |
| 6 | Archi technique resolver/LPS | Pin doctrine · stop SC-DOC-EXCL | Modeled | Design tech | Modeled | GO AT |
| 7 | Refonte orchestration | Remplacer SoT method/ | AT | ExecutionContract v3-native | AT | GO Delivery borné |
| 8 | Tranche verticale pilote | Prouver A | Tout amont | Preuve E2E | 7 | GO VERTICAL SLICE |
| 9 | Migration / retrait deps | REMOVE-FROM-RUNTIME | Preuve | method/ hors lecture produit | 8 | GO RETRAIT DEPS |
| 10 | QA doctrinale | Tests exclusivité | Règles | Suite tests | 9 | GO QA |
| 11 | RUN readiness / capitalisation | — | — | — | 10 | ultérieur |

## 11. Matrice 5 — Dette

| Dette | Type | Origine | Impact | Priorité | Cycle de remboursement |
|-------|------|---------|--------|----------|------------------------|
| Runtime SoT = method/ v2.6 | technique / gouvernance | Control Tower / OPS1 | BLOCKER exclusivité | P0 | Orchestration + modeled |
| MethodMode coexistence | donnée / UX | D1-I1 | Contredit D-V3-03 | P0 | CF + modeled + delivery |
| Absence DoctrinePackage/LPS/CKC runtime | fonctionnelle | Gap post-doctrine | Pas de v3-native | P0 | Modeled + AT |
| Framing 11 cockpit-first | documentaire / UX | Cadrage ancien | Confusion IA | P1 | Doc + UX |
| README Studio Option C | documentaire | Pré-#259 | Claim faux | P1 | Hygiene / CF |
| Dual OPS1 vs harness contracts | technique | POC | Drift | P2 | Décision retire harness |
| UX 87–89 hors main | documentaire | Branche UX | IA incomplete main | P1 | Merge docs UX |
| Métadonnées post-merge framing | documentaire | PR #259 | Gate/verdict obsolètes | P1 | Hygiene |
| Pas de tests exclusivité v3 | preuve / QA | — | Régression silencieuse | P1 | QA |
| N1–N3 non unifiés | UX / enforcement | Gap CC-D06 | Confirmations hétérogènes | P1 | UX + delivery |
| E0–E4 non exposés runtime unifié | sécurité | Framing 25 vs code | Vocabulaire divergence | P2 | AT |
| Onze CKC absents | connaissance | CKC programme | Fallback synthétique | P2 | CKC programme (hors Studio-only) |

## 12. Matrice 6 — Risques de migration

| Risque | Probabilité | Impact | Mitigation | Stop condition |
|--------|-------------|--------|------------|----------------|
| Big-bang rewrite app | Moyenne | Élevé | Tranche verticale A bornée | Scope > allowlist |
| Coexistence temporaire « pour transition » | Haute | Critique | Interdit D-V3-03 · feature flags ≠ doctrine duale | MethodMode v2.6 réintroduit |
| Casser OPS1 Campus360 pendant migration | Haute | Élevé | Adapter allowlist · garder fail-closed | Write method/ |
| Drift harness vs app | Moyenne | Moyen | Geler harness HISTORICAL | Nouveau feature dans harness |
| Claim « runtime migré » prématuré | Moyenne | Critique | Anti-claims + tests | Claim sans preuve |
| Oublier D1 MethodMode en DB | Haute | Élevé | Migration données après modèle | Schema conserve SFIA_V2_6 actif |

## 13. Matrice 7 — Couverture des tests

| Règle v3 | Test existant | Suffisant ? | Test futur requis |
|----------|---------------|-------------|-------------------|
| Exclusivité doctrine (pas method/ SoT) | Non (tests **imposent** method/) | Non | Refuse load method/ as doctrine |
| SC-DOC-EXCL | Non | Non | Unit + integration |
| DoctrinePackage pin/digest | Non | Non | Resolver fail-closed |
| LPS persisté | Non | Non | CRUD LPS + anti hyp→decision |
| CKC resolution opaque | Non | Non | Absent→synthetic silent |
| N1–N3 | Non unifié | Non | Confirmation matrix |
| HumanDecision ≠ recommendation | Partiel OPS1 gate | Partiel | Schema + UI tags |
| MethodMode interdit | Tests **autorisent** SFIA_V2_6 | Inverse | Remove + negative tests |
| Anti-claim ADOPTED | Non | Non | Claim scanner |

## 14. Blockers (liste)

1. **DEP-01…03 / DEP-05…06** — runtime charge method/ + baseline v2.6.
2. **DEP-07** — MethodMode coexistence persistée.
3. **Absence DoctrinePackage / LPS / CKC** — fondations VALIDATED non instanciables.
4. **README / modeled claims** — documentation produit encore « v2.6 consommée » (confusion gouvernance).
5. **Tests qui verrouillent le couplage method/** — frein à la migration.

## 15. Éléments à retirer de la cible runtime

- Doctrine v2.6 comme source produit (`method/` lecture SoT)
- Fallback doctrinal v2.6
- PGE / template MD comme contrat **natif**
- MethodMode `SFIA_V2_6` / `TRANSITION` opérationnels
- Cockpit-first comme entrée principale (framing 11)
- Claim maturité sans preuve
- Agent sans capability contract formalisé
- L5 global (déjà fermé — conserver)
- Dual-run doctrinal

## 16. Trajectoire de refondation proposée (candidate — **pas** décision Morris)

Principe : **pas de big-bang** · **pas de coexistence doctrinale active** · retirer SoT method/ dès la première tranche runtime · conserver patterns fail-closed OPS1.

### Étape 0 — Hygiene documentaire post-merge (light)
- Objectif : corriger métadonnées framing après #259
- Cycle : DOC
- Critère : plus de « DRAFT PR PENDING MERGE »

### Étape 1 — Arbitrage Morris trajectoire + tranche
- Gate : `GO MORRIS ARBITRATION — SFIA STUDIO V3-NATIVE REFOUNDATION TRAJECTORY`

### Étape 2 — Conception fonctionnelle v3-native
- Remplacer Option C runtime par chaîne F01–F12
- Décider sort MethodMode / harness / P0

### Étape 3 — Architecture fonctionnelle
- LPS · DoctrineResolver · CkcResolution · HumanDecision unifiée

### Étape 4 — UX (intégrer 87–89)
- Conversation dominante · panneau LPS · N1–N3 · Project≠Cycle · retirer badges coexistence

### Étape 5 — Modeled enrichment
- DoctrinePackageManifest · LPS · CKC · Contradiction · DebtItem · AgentCapability · ActionPolicy

### Étape 6 — Archi technique + Delivery bornée
- Brancher resolver · couper lecture method/ produit · ExecutionContract natif · MD export adapter

### Étape 7 — Tranche verticale pilote (**Option A recommandée**)
- Intention → CKC → LPS → trajectoire → décision → ExecutionContract → preuve
- Critère sortie : zéro lecture `method/` dans chemin chaud ; digest DoctrinePackage

### Étape 8 — Retrait deps + QA doctrinale + capitalisation

## 17. Tranche verticale recommandée

| Option | Description | Recommandation |
|--------|-------------|----------------|
| **A** | Intention → Cadrage → CKC → LPS → trajectoire → décision → ExecutionContract → preuve | **Recommandée** — prouve F01–F07 + F05 sans dépendre d'un Project legacy contaminé MethodMode |
| B | Reprise Project existant → DoctrinePackage → LPS → cycle → décision → exec | Utile en 2ᵉ tranche (migration données MethodMode) |
| C | QA → CKC QA → preuves → contradiction → HumanDecision | Trop étroit pour débloquer SoT |

**Option A est une recommandation d'audit, pas une décision Morris.**

## 18. Ordre de priorité immédiat

1. Arbitrage Morris trajectoire (gate suivant)
2. Couper conceptuellement SoT method/ (spec CF)
3. Modeled DoctrinePackage + LPS
4. Brancher runtime tranche A
5. Retirer MethodMode
6. Intégrer UX 87–89
7. Hygiene docs README Studio / framing 01–29

## 19. Gates Morris futurs (non consommés)

1. `GO MORRIS ARBITRATION — SFIA STUDIO V3-NATIVE REFOUNDATION TRAJECTORY`
2. `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE`
3. (ensuite) GO AF · GO UX · `GO ENRICHISSEMENT MODELED` · GO AT · GO VERTICAL SLICE · GO RETRAIT DEPS · GO QA

## 20. Réserves

| ID | Réserve |
|----|---------|
| AUD-R01 | Runtime **non** migré |
| AUD-R02 | Harness encore présent (surface parallèle) |
| AUD-R03 | UX 87–89 hors main — audit UX qualifié via worktree `7dc6f9f` |
| AUD-R04 | Inventaire root docs 86 fichiers : qualification agrégée, pas fichier-à-fichier exhaustif pour chaque md historique |
| AUD-R05 | Figma non ré-audité dans ce cycle |
| AUD-R06 | CKC généraux restent hors Studio ; programme CKC distinct |

## 21. Dette documentaire post-merge (non corrigée ici)

| Path | Problème |
|------|----------|
| `sfia-v3-framing/README.md` | « intégration sur main en attente de merge » · gate `GO MORRIS REVIEW — DRAFT PR` · verdict `DRAFT PR PENDING MERGE` |
| `sfia-v3-framing/37-…` | Même gate / verdict pending merge |
| Autres 30–36 | En-têtes « merge en attente » possibles |
| `projects/sfia-studio/README.md` | Option C / consomme v2.6 — **obsolète doctrinalement** pour Studio produit |

## 22. Inconnues (UNKNOWN)

| ID | Sujet |
|----|-------|
| U-01 | Faut-il conserver OPS1 Campus360 comme produit parallèle pendant la tranche A ou le geler ? |
| U-02 | Statut définitif du harness (delete later vs extract library) |
| U-03 | Calendrier merge UX 87–89 vs CF |
| U-04 | Stratégie migration données `method_mode` existantes |

## 23. Actions non exécutées

- aucune modification projet
- aucun commit projet
- aucun push branche audit
- aucune PR
- aucun merge
- aucune suppression dépendance
- aucune correction opportuniste des docs post-merge

## 24. État Git final

```
## audit/sfia-studio-v3-native-dependencies...origin/main
```

HEAD inchangé : `56ddf32e811f0f5f8b82f31400da18ceecf3bc30`
Branche audit **non poussée**.

## 25. Preuves complémentaires (extraits)

### canonicalPaths (runtime SoT)

Fichier : `projects/sfia-studio/app/lib/platform/sfia-context/canonicalPaths.ts`
Contenu clé : `SFIA_CANONICAL_CORE_PATHS` pointe `prompts/templates/…` + 3 fichiers `method/sfia-fast-track/core/…` ; `SFIA_METHOD_BASELINE = "SFIA v2.6"`.

### contextResolver PERMANENT_CORE

Fichier : `projects/sfia-studio/app/lib/platform/sfia-context/contextResolver.ts`
Inclut : « Le prompt Cursor doit être instancié depuis prompts/templates/sfia-cycle-execution-template.md. » et « Baseline méthode : SFIA v2.6 (consommée, non modifiée ici). »

### D1 MethodMode

Fichier : `projects/sfia-studio/app/lib/d1/db.ts`
`method_mode … IN ('SFIA_V2_6', 'TRANSITION', 'V3_CANDIDATE')`.

### Concepts absents du runtime

`DoctrinePackage` · `LivingProjectState` · `HumanDecision` · `DebtItem` · `AgentCapability` · `CkcResolution` · `ReviewBundle` : **0** fichiers app/harness.

`ExecutionContract` : **33** fichiers (OPS1) — pattern à **ADAPT**.

## 26. Verdict exact

**SFIA STUDIO V3-NATIVE DEPENDENCIES AUDITED — REFOUNDATION TRAJECTORY PROPOSED**

# SFIA Studio — POC S1 Harness (harness-only)

| Métadonnée | Valeur |
|------------|--------|
| **Emplacement** | `projects/sfia-studio/harness/` |
| **Incrément** | POC-G9 harness-only |
| **Architecture** | Option B — harness autonome |
| **Studio / app/** | **Non touché** |
| **Cursor** | **Fixture = défaut stable** ; spike `cursor-real` expérimental (flag off) |
| **Docker** | **Non retenu** pour cet incrément (option ouverte) |
| **Git** | Lecture réelle allowlistée · `gitEffect=none-remote` |
| **Allowlist** | Initiale S1 **validée** pour cet incrément — élargissement = nouveau GO |
| **POC** | Preuves locales — **non industrialisé** / non lancé en autonomie permanente |

## Pourquoi cet emplacement

- Hors `app/**` (Next P0) — séparation AF-Option C / Option B.
- Aligné toolchain Node/TypeScript du projet Studio (vitest, tsc) sans Next.
- Package local autonome, testable sans UI.

## Installation

```bash
cd projects/sfia-studio/harness
npm install
```

## Commandes

```bash
npm run typecheck
npm test
npm run build
npm run cli -- validate-contract ./path/to/contract.json
npm run cli -- run-fixture ./fixtures/demo   # après génération locale
npm run cli -- inspect-journal <proofDir>
npm run cli -- verify-proofs <proofDir>
# EXPERIMENTAL only:
# SFIA_CURSOR_REAL_SPIKE=1 SFIA_CURSOR_REAL_LIVE=1 npm run spike:cursor-real
```

## Architecture effective

```text
fixture gate (Morris) → Orchestrator
  → PolicyEngine (default deny)
  → GateValidator (GO + contractHash)
  → StateMachine
  → GitReaderImpl (spawn git, shell:false)
  → CursorExecutorPortFixture
  → EventJournal (JSONL)
  → ProofStore (proofDir)
```

## Restrictions

- Aucune écriture Git distante (`add/commit/push/merge/rebase/...`).
- Aucune API Cursor inventée ; `realCursorClaimed: false` toujours.
- Aucun daemon / serveur HTTP requis.
- Aucun Dockerfile / docker-compose dans cet incrément.
- Aucune modification `projects/sfia-studio/app/**`.

## Nettoyage local

Supprimer les répertoires `proofs/` temporaires et `node_modules/` si besoin :

```bash
rm -rf proofs/* node_modules dist
```

## Limites / réserves

- Cursor réel = spike local **inconclusive** (voir `spikes/cursor-real/` + doc `29`) — auth requise ; pas défaut.
- Ne jamais activer sans `SFIA_CURSOR_REAL_SPIKE=1`.
- Versionnement du spike ≠ activation produit ; live proofs runtime gitignored.
- Protocole adaptateur / UI Studio = hors incrément.
- Docker = option future non décidée.
- Allowlist détaillée toujours sujette à raffinement Morris.

# V2-A1 — Server-only Runtime Bridge

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-07-29 21:45:00 CEST (+0200) |
| Cycle | 8 — Delivery / implémentation |
| Profil | Standard |
| Typologie | EVOL |
| Branche | `delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge` |
| Base | `origin/main` @ `634a7fb0cc2e202e7530eda940fb421f1c17eade` |
| Statut | `V2-A1 IMPLEMENTED LOCALLY — NO UI — READY FOR V2-A2` |

## Gate / décisions consommées

Implémentation bornée de la frontière runtime d’après le cadrage V2 et les décisions Morris :

| ID | Adoption consommée |
|----|-------------------|
| D-V2-01 | Service server-only (+ actions `"use server"` futures) |
| D-V2-02 | Singleton process-local + `resetRuntimeApplicationServiceForTests` |
| D-V2-03 | Audit **noop** par défaut ; memory/sqlite opt-in |
| D-V2-04 | Namespace `/studio/projects/*` **préparé** (non routé — pas de pages) |
| D-V2-05 | Disclosures runtime obligatoires sur chaque résultat |

## Architecture livrée

```text
Future UI (V2-A2+)
  → createProjectRuntimeAction / getProjectRuntimeAction   ["use server"]
    → getRuntimeApplicationService()   [process singleton]
      → RuntimeApplicationService.createProject / getProject
        → LocalProjectFacade (V1)
          → T-A0 / T-A1 mémoire
```

## Modules

| Fichier | Rôle |
|---------|------|
| `app/lib/vertical-slice-runtime/serverGuard.ts` | garde browser |
| `disclosures.ts` | runtimeMode / persistence / agent + readiness NOT_READY |
| `types.ts` | DTOs sérialisables |
| `mapping.ts` | criticality ↔ perceivedCriticality ; view → runtime |
| `paths.ts` | racines doctrine/schemas par défaut |
| `service.ts` | RuntimeApplicationService + factory |
| `singleton.ts` | holder process-local |
| `actions.ts` | entrypoints Server Action futurs |
| `index.ts` | exports (sans forcer le barrel actions) |

Tests : `app/__tests__/vertical-slice-runtime/**`

## Garde-fous exposés

Chaque résultat succès/échec inclut :

- `disclosures.runtimeMode = LOCAL_PROCESS`
- `disclosures.persistence = NOT_GUARANTEED`
- `disclosures.agentExecution = DISABLED`
- `readiness.status = NOT_READY` (succès)
- `runReady: false` / `productReady: false`

## Hors périmètre (non faits)

- UI React / routes / StudioShell / CSS / Figma
- IAM / auth / API publique
- Persistance produit / rehydrate audit
- Agents / delivery / cutover
- Modification V1 core

## Prochain gate

`GO IMPLEMENT SFIA STUDIO FIRST VISIBLE SLICE V2-A2 — CREATE PROJECT UI — REUSE STUDIOSHELL AND V2-A1 RUNTIME — NO IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.

# SFIA Orchestrator Bridge — Architecture & MVP Report

**Date :** 2026-07-07
**Cycle :** DOC/MCP — expérimentation bridge HTTP
**Décision Morris :** GO bridge Dockerisé expérimental, limité au bus `.sfia/mcp/`
**PR :** reportée — aucun commit / push / merge

---

## 1. Fichiers créés

```
.sfia/mcp/bridge/
├── package.json
├── package-lock.json
├── Dockerfile
├── docker-compose.yml
├── README.md
├── .env.example
├── src/
│   ├── index.js
│   ├── routes/
│   │   ├── health.js
│   │   ├── tasks.js
│   │   ├── reports.js
│   │   └── gates.js
│   └── core/
│       ├── paths.js
│       ├── guardrails.js
│       ├── audit.js
│       ├── schemas.js
│       ├── task-store.js
│       ├── report-store.js
│       └── gate-store.js
└── test/
    └── bridge.test.mjs
```

**Fichiers runtime (non versionnés) :**

- `.sfia/mcp/logs/bridge-audit.jsonl`
- `.sfia/mcp/tasks/task-c5d6bdc3-8743-4d25-91c1-2c0251147e1d.json` (test bridge)
- `.sfia/mcp/gates/resolved/gate-17ac9c66-…json` (gate test — teardown auto)

---

## 2. Architecture réelle

```text
ChatGPT (Custom GPT Action / HTTPS)
        │
        ▼
SFIA Orchestrator Bridge v0.1.0
  Express HTTP :8787
  Auth: Bearer SFIA_BRIDGE_TOKEN (sauf /health)
  Volume Docker: .sfia/mcp/ → /data
        │
        ├── POST /tasks ──────────► .sfia/mcp/tasks/*.json
        ├── GET  /tasks/:id ◄──────┘
        ├── GET  /reports/latest ◄── .sfia/mcp/reports/*.json
        ├── GET  /reports/:id ◄─────┘
        ├── GET  /gates/status ◄──── .sfia/mcp/gates/
        └── POST /gates/open ─────► .sfia/mcp/gates/pending/

Cursor + sfia-mcp stdio v0.4.0
        │
        ├── lit tasks/ (sfia_read_file, handoff)
        └── écrit reports/ (sfia_write_cycle_report L3)
```

**Invariant :** le bridge **n'écrit jamais** dans `reports/`. Seul Cursor (MCP L3) produit les rapports.

---

## 3. Commandes de lancement

### Local

```bash
cd .sfia/mcp/bridge
npm install
export SFIA_BRIDGE_TOKEN="<token-hors-repo>"
export SFIA_MCP_ROOT="$(cd .. && pwd)"
npm start
```

### Docker

```bash
cd .sfia/mcp/bridge
export SFIA_BRIDGE_TOKEN="<token-hors-repo>"
docker compose up --build
```

### Tests bridge

```bash
cd .sfia/mcp/bridge
npm test
```

---

## 4. Endpoints disponibles

| Méthode | Route | Auth | Statuts |
|---------|-------|------|---------|
| GET | `/health` | Non | OK |
| POST | `/tasks` | Bearer | OK / BLOCKED / FAIL |
| GET | `/tasks/:task_id` | Bearer | OK / BLOCKED / FAIL |
| GET | `/reports/latest` | Bearer | OK / FAIL |
| GET | `/reports/:report_id` | Bearer | OK / BLOCKED / FAIL |
| GET | `/gates/status` | Bearer | OK |
| POST | `/gates/open` | Bearer | OK / BLOCKED / FAIL |

---

## 5. Tests réalisés

### Bridge (`npm test`) — 13/13 OK

| # | Test | Résultat |
|---|------|----------|
| 1 | GET /health sans token | **OK** |
| 2 | POST /tasks refuse sans token | **OK** |
| 3 | POST /tasks OK avec token | **OK** |
| 4 | POST /tasks refuse secret | **OK** |
| 5 | POST /tasks refuse push/PR/merge | **OK** |
| 6 | GET /tasks/:task_id | **OK** |
| 7 | GET /reports/latest | **OK** |
| 8 | GET /reports/:report_id | **OK** |
| 9 | GET /gates/status | **OK** |
| 10 | POST /gates/open | **OK** |
| 11 | POST /tasks refuse si gate OPEN | **OK** |
| 12 | Audit log créé | **OK** |
| 13 | Écriture confinée tasks/ | **OK** |

### Docker Compose

| Test | Résultat |
|------|----------|
| `docker compose up --build` | **OK** — image buildée, container démarré |
| GET /health via curl | **OK** — `sfia-orchestrator-bridge` v0.1.0, `mcp_root=/data` |

### Non-régression MCP serveur

| Suite | Résultat | Note |
|-------|----------|------|
| `test:l1` | **WARN** — 15/16 PASS | Échec préexistant : test attend 5 tools, serveur v0.4.0 en expose 11 |
| `test:l2` | **WARN** — 25/26 PASS | 1 gate OPEN résiduel (test l1 `check_write`) — pas lié au bridge |
| `test:l3` | **WARN** — 5/11 PASS | Bloqué par gate OPEN résiduel de test:l1 |
| `test:l3-report` | **WARN** — 5/11 PASS | Idem gate OPEN résiduel |
| `smoke-mcp.mjs` | **OK** | 11 tools, sfia_health OK |

**Conclusion :** le bridge ne modifie pas le code MCP. Les échecs L3 sont dus à un gate OPEN laissé par `test:l1` (intent write sur `app/`), pas à une régression bridge.

---

## 6. Garde-fous validés

| Garde-fou | Validé |
|-----------|--------|
| Deny by default | ✅ |
| Auth Bearer sur routes protégées | ✅ |
| Refus path traversal | ✅ |
| Refus secrets / .env / tokens | ✅ |
| Refus push / PR / merge / delete branch | ✅ |
| Blocage POST /tasks si gate OPEN | ✅ |
| Pas de résolution gate via API | ✅ |
| Écriture limitée tasks/ + gates/pending/ | ✅ |
| Lecture limitée tasks/ + reports/ + gates/ | ✅ |
| Audit JSONL bridge-audit.jsonl | ✅ |
| Aucun secret versionné | ✅ |

---

## 7. Limites

1. **Pas de runner Cursor** — le bridge dépose des tâches ; Cursor doit les consommer manuellement ou via workflow existant.
2. **Rapports en lecture seule** — écriture `reports/` réservée à sfia-mcp L3 côté Cursor.
3. **Token statique** — pas de rotation automatisée ni mTLS.
4. **Pas de rate limiting** — acceptable pour MVP expérimental local.
5. **Gate résiduel test:l1** — peut bloquer L3 MCP tant que Morris ne résout pas le gate `gate-3bfc7c4f-…` (intent write app/).
6. **PR reportée** — livrable expérimental uniquement.

---

## 8. Décision Morris requise ?

**Non pour le bridge MVP** — Morris a donné GO pour créer le bridge expérimental.

**Oui avant industrialisation :**

- GO pour exposer via tunnel HTTPS vers ChatGPT production
- Résolution du gate OPEN résiduel `gate-3bfc7c4f-628c-415a-a17b-6d026ad1e509` (test l1)
- GO pour PR / merge après fin d'expérimentation

---

## 9. Prochaine étape recommandée — test ChatGPT réel via tunnel

1. Générer un `SFIA_BRIDGE_TOKEN` long (KeePass Morris) — **hors repo**.
2. Lancer : `cd .sfia/mcp/bridge && SFIA_BRIDGE_TOKEN=… docker compose up`.
3. Tunnel HTTPS : `ngrok http 8787` (ou Cloudflare Tunnel).
4. Configurer Custom GPT Action OpenAPI pointant vers :
   - `POST {tunnel}/tasks`
   - `GET {tunnel}/reports/latest`
   - Header `Authorization: Bearer <token>` (dans config Action, pas dans le repo).
5. Déposer une tâche ChatGPT → vérifier fichier dans `.sfia/mcp/tasks/`.
6. Cursor consomme via sfia-mcp → écrit rapport dans `.sfia/mcp/reports/`.
7. ChatGPT relit via `GET /reports/latest`.
8. Documenter le flux E2E dans un rapport `.sfia/mcp/reports/`.

---

**Statut global MVP :** **OK** — bridge opérationnel, garde-fous actifs, prêt pour test tunnel ChatGPT.

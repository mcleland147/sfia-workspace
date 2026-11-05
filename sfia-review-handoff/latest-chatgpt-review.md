# Review Pack FULL — SFIA Studio Next / ML2 cognition + observabilité intégrées

**Date/heure:** 2026-11-05 17:46 CET (Europe/Paris)
**Cycle:** Delivery projet · profil Critical · typologie EVOL
**Branche:** `sfia/next-ml2-cognition-observability-integrated` (LOCAL ONLY — not pushed)
**HEAD local:** `53be6097612825b24333821ab3001c35a0b4d757`
**Parent:** `6d85fd9b7c724b020011f19d8814333116674475` (HEAD documentaire)
**origin/main:** `6e4406c63639330c7826423cdcf08f06ff019eed` (inchangé)
**Version produit:** NO RELEASE · STABLE NOT AVAILABLE · package `0.0.0-dev`

---

## 1. Git Truth

### Initial
| Item | Valeur |
| --- | --- |
| Branche avant | `sfia/next-ml2-production-capitalisation` @ `08b89360` |
| docs candidate | `origin/docs/next-ml2-d3-d4-architecture-20261105@6d85fd9b` |
| Pile | #655 `08b89360` · #656 `a0d805e9` · #657 `0e83824f` · #658 `806bc17d` — OPEN |
| ahead/behind main | 68 ahead / 0 behind |
| Résidus | `.tmp-sfia-review/` · 5 SVG untracked (exclus) |

### Actions
1. Checkout local `sfia/next-ml2-cognition-observability-integrated` depuis `6d85fd9b`
2. Implémentation + tests DEV
3. Commit local `53be6097` — **aucun push projet**

### Final
| Item | Valeur |
| --- | --- |
| HEAD | `53be6097` |
| Push projet | NON |
| PR nouvelle | NON |
| main | inchangé |

---

## 2. Sources lues (SHA applicable)

- method: cycle-routing-guide, execution-template v2.6, rules/guardrails
- governance: SEF, roadmap, decision 2026-11-05 cognition/observabilité, ENV-01, product-versioning
- ML2: specification-technique §§15–22, matrice §§8–15, reference-delivery-r5 (consultés)
- architecture: cadrage-r4, contrat-observabilite-transverse
- code: nora-adapter, conversation/service, document/knowledge/preparation/identity, routes messages, schema, migrations 001–004, CI workflow (lecture seule)
- SDK: `@openai/agents@0.21.0` — `tool`, `run`, `setTracingDisabled`, `modelSettings.reasoning.effort`
- CKC: `CKC CANDIDATE ABSENT — FALLBACK SFIA v2.6`

---

## 3. Vision produit → pourquoi chaque changement

| Besoin Pilote | Changement |
| --- | --- |
| Question simple → réponse courte | Politique `simple` / effort `low` / 0 outil |
| Mission difficile → lecture D4 pendant raisonnement | Tools `search_project_resources` + `read_project_document_revision` liés au serveur |
| Pas de chat jetable / double envoi | Commande de tour durable `(conversation_id, client_turn_key)` |
| Diagnostiquer erreurs sans secrets | JSONL expurgé + query `operation_id` |
| Ne jamais faire confiance au modèle pour les IDs | Authority binding serveur (pilot/prep injectés) |

---

## 4. Architecture avant → après

### Avant (candidat #655)
- `maxTurns:1`, aucun outil D4
- USER insert avant provider, ordinal hors verrou, pas d'unicité ordinal
- catch routes → 401 générique
- streaming fallback = 2e run sans `attempt_id` distinct
- tracing SDK non contrôlé

### Après (`53be6097`)
- Politique versionnée TEST_BOUNDARY ≠ OPERATIONAL
- Runner outillé + attempts tracés + `setTracingDisabled(true)`
- `conversation_turn_commands` + unicité messages ordinal (005)
- `StudioError` / 401·403·404·409·500·503
- Observabilité lane-local `.obs/`

---

## 5. Fichiers créés (contenu résumé + responsabilité)

| Fichier | Rôle |
| --- | --- |
| `web/src/domains/conversation/cognitive-policy.ts` | Qualification proportionnée + budgets TEST/OPERATIONAL |
| `web/src/domains/conversation/d4-read-tools.ts` | Outils D4 lecture-only + budgets |
| `web/src/domains/conversation/turn-command.ts` | Réservation courte + replay/conflit |
| `web/src/lib/observability.ts` | emit/query/redact JSONL |
| `web/src/lib/http-errors.ts` | Classification HTTP |
| `web/src/db/migrations/005_ml2_conversation_turn_command.sql` | Table + unicités (audit doublons ordinal) |
| `web/scripts/obs-query.ts` | CLI lecture seule |
| tests unit/integration dédiés | COG policy, OBS, HTTP, turn PG |

### Migration 005 (intégrale)

```sql
CREATE TABLE IF NOT EXISTS conversation_turn_commands (
  id text PRIMARY KEY,
  conversation_id text NOT NULL REFERENCES conversations(id),
  owner_pilot_id text NOT NULL REFERENCES pilots(id),
  client_turn_key text NOT NULL,
  request_fingerprint text NOT NULL,
  operation_id text NOT NULL,
  status text NOT NULL,
  ordinal_user integer,
  ordinal_assistant integer,
  user_message_id text,
  assistant_message_id text,
  generation_id text,
  result_json text,
  error_category text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
-- unique (conversation_id, client_turn_key), unique(operation_id)
-- DO block STOP si doublons ordinal messages
-- unique (conversation_id, ordinal) on messages
```

---

## 6. Diffs utiles (extraits)

### reload / tour UI — déjà sur pile antérieure + clientTurnKey
`page.tsx` : clé de tour stable réutilisée sur retry réseau ; statut affiche policy/operation sans rail de télémétrie.

### getDocumentRevision — lecture ciblée
Ne charge plus toutes les révisions pour retrouver une révision.

### nora-adapter — points structurants
- `buildCognitivePolicy` + tools allowlist
- fixture appelle réellement `searchProjectResources` si tools autorisés
- LIVE: Agent(model=`gpt-6.1-sol`, tools, reasoning effort) ; attempts stream/fallback distincts
- `setTracingDisabled(true)`

### Budgets (rappel contrat)
TEST_BOUNDARY = stress artificiel (30/120/180s, 0/32k/64k).
OPERATIONAL_PROVISIONAL = plafonds finis élevés TBD (600–900s, 100k–2M) — **pas ADOPTED**.

---

## 7. Tests et preuves

| Suite | Commande | Résultat |
| --- | --- | --- |
| unit | `npm run test:unit` | **42 PASS** |
| PG | `npm run test:integration` | **53 PASS** |
| e2e | `npm run test:e2e` | **3 PASS** |
| tsc | `npx tsc --noEmit` | PASS |
| lint | `npx next lint` | PASS |
| build | `npm run build` | PASS |
| migrate | `db-migrate` 001→005 sur `sfia_next_dev` + `sfia_next_e2e` | OK |

### Couverture matrice (local)

| Famille | Niveau |
| --- | --- |
| Politique TEST≠OPERATIONAL | DETERMINISTIC PROVEN |
| Tool D4 pendant fixture run | DETERMINISTIC + PG PROVEN |
| Idempotence tour + mismatch | PG PROVEN |
| OBS sink/query/redaction | DETERMINISTIC + PG PROVEN |
| HTTP DB≠401 | DETERMINISTIC PROVEN |
| C1–C6 régression BROWSER | BROWSER FAKE PROVEN |
| LIVE gpt-6.1-sol / effort réel | **NOT RUN** |
| Corpus B 5–10 min / >32k | **NOT RUN** |
| COG comparatif ChatGPT | **NOT RUN** |
| CI Next nouveau SHA | **OPEN GATE** (pas de push) |
| RECETTE | **NOT AUTHORIZED** |

---

## 8. Sécurité

- `setTracingDisabled(true)` ; redaction clés secret/token/apiKey
- Probe synthétique `OBS_SYNTHETIC_SECRET_PROBE` absente des sinks après redact
- Outils D4 : modèle ne choisit pas pilot/prep ; refus inter-projet → DENIED non divulguant
- Documents = données ≠ instructions (rappel outil)
- `.obs/` gitignored ; permissions mkdir 0700 / files 0600
- Aucune clé LIVE dans rapport/handoff

---

## 9. ENV-01 / versioning

- Mutations: DEV + DB `sfia_next_dev` / `sfia_next_e2e` uniquement
- RECETTE/STABLE: non touchées
- delivery-history: DELIV-2026-11-05-ML2-COG-OBS-INTEGRATED-07
- Spec §22 As-Built + matrice §15

---

## 10. Décisions Morris restantes

1. GO push branche + PR intégratrice unique vers `main` (CI au SHA `53be6097`)
2. GO LIVE ciblé modèle/effort/outils
3. Recalibrage OPERATIONAL après corpus B
4. Sort des PR #655–#658 (supersession) — hors mandat
5. RECETTE / merge / ADOPTED — hors mandat

---

## 11. Git Review Index

| Path | Action |
| --- | --- |
| `web/src/domains/conversation/cognitive-policy.ts` | A |
| `web/src/domains/conversation/d4-read-tools.ts` | A |
| `web/src/domains/conversation/turn-command.ts` | A |
| `web/src/domains/conversation/nora-adapter.ts` | M |
| `web/src/domains/conversation/service.ts` | M |
| `web/src/lib/observability.ts` | A |
| `web/src/lib/http-errors.ts` | A |
| `web/src/db/migrations/005_*.sql` | A |
| `web/src/db/schema.ts` | M |
| `web/scripts/db-migrate.sh` | M |
| `web/scripts/obs-query.ts` | A |
| API messages/documents/knowledge | M |
| `page.tsx` | M |
| document/service getDocumentRevision | M |
| identity/session | M |
| tests unit/integration/e2e | A/M |
| construction delivery/spec/matrice | M |
| `.gitignore` / `package.json` | M |

---

## 12. Verdict unique

**LOCAL DELIVERY WITH RESERVES — REVIEW REQUIRED**

Construction locale Critical livrée et prouvée en FAKE/PG/BROWSER sur `53be6097`. LIVE, CI distant, RECETTE, merge et calibration OPERATIONAL restent des gates Morris distincts. Aucun push projet dans ce cycle.

# ChatGPT Review Pack — PRE-INTEGRATION-UX-QA-01

**Date/heure UTC :** 2026-10-30T20:44:27Z
**Cycle unique :** AKG-M5 / L3-S2 / CORR-NAP-TEST16-01 / PRE-INTEGRATION-UX-QA-01
**Campagne source :** LIVE-E2E-01 / BALISE (clone isolé)
**Profil :** CRITICAL
**Typologie :** QA / PRE-INTEGRATION / ISOLATED INTERACTIVE
**GO Morris exact :** Tester la candidate avant intégration Git, sur différentes typologies de réponses.

**Verdict unique :** `QA ENVIRONMENT READY — AWAITING PILOT INTERACTIVE UX TESTS`

**Anti-claims :** aucun message Nora envoyé par Cursor · aucun commit/push/PR projet · main non modifié · Product code non modifié ce cycle · SQLite historiques non mutés · runtime BALISE :3020 non relancé · .env.local partagé non modifié · G-REAL NOT GRANTED · TEST-17 non lancé · BROWSER UX PASS NON déclaré · TEST-16 UX PASS global NON déclaré · L3 COMPLETE NON déclaré.

**Handoff CR-03 référence :** `167d7648ae6cc5e8fb772413e261bff8a249d5ea` / blob `457e2e243f6fb42eef380f6e0d8423df93fd9111` · Critical Review ACCEPTED deterministic scope.

---

## 1. UTC

2026-10-30T20:44:27Z

## 2. GO Morris consommé

Tester la candidate avant intégration Git, sur différentes typologies de réponses — **préparation d'environnement uniquement** ; envoi des scénarios = Morris.

## 3. Git Truth

| Ref | SHA / état |
|-----|------------|
| origin/main | `ca1c9869f905b394808c953649910d60fbfcb984` |
| corr-01 HEAD | `ca1c9869…` |
| Branche | `feat/akg-m5-nap-test16-coverage-corr-01` |
| WIP Product | 6 fichiers CR-03 présents (non commités) |
| Code Product ce cycle | **aucune modification** (setup QA seulement) |

CR-03 markers vérifiés : `resolveAdaptiveCanonicalDisplayText`, `forceCanonicalFirst`, `adaptive_with_canonical`.

## 4. Worktree / runtime QA

| Élément | Valeur |
|---------|--------|
| Worktree candidate | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01` |
| App cwd | `…/projects/sfia-studio/app` |
| URL login | `http://localhost:3031/login` |
| URL projet BALISE | `http://localhost:3031/studio/projects/prj%3Ad0c81c08-349b-4109-aca7-72bd5d1bae85` |
| Port | **3031** (3020 non utilisé pour la candidate) |
| Mode Next | `next dev` (sert le WIP CR-03) |
| `move_agent_to_root` | non utilisé |

## 5. Sources / Convergence

Processus SFIA v2.6 · Build Doctrine / Roadmap / C1 · AKG-M5 trajectory · doctrine v3 30/32/34/35 · PRR README volumes 03/05/06/07/08/09 (lecture) · auth Better Auth · paths Product/Nora · handoff CR-03.

## 6. Convergence Pre-check

L3-S2 OPEN → CR-03 accepted deterministic → **UX QA isolated (ce cycle)** → captures Morris/ChatGPT → décision intégration.

## 7. R23

| Élément | Qualif |
|---------|--------|
| Candidate CR-03 renderer | BEHAVIOR PROVEN (74 tests) + code présent |
| Isolation DB clone | BEHAVIOR PROVEN (backup + hash originaux stables) |
| Runtime :3031 | BEHAVIOR PROVEN (HTTP login 200, OAuth start → GitHub) |
| Auth session Pilote | DOCUMENTED — NO_SESSION jusqu'à login manuel |
| UX-00 browser visual | KNOWN GAP — awaiting Pilot auth + capture |
| OpenAI interactive | BOUNDARY READY process-side ; **aucun message auto** |

## 8. R24

**NO PRODUCT SEMANTIC CHANGE** pour ce setup QA.
Dette R24 du correctif CR-03 **reste ouverte** (GO documentaire distinct).

## 9. Isolation runtime — preuves

### Bases

| Path | Rôle |
|------|------|
| `/Users/morris/Projects/.sfia-exec/live-e2e-01/product-db/oa-product.sqlite` | historique — **non écrit** |
| `/Users/morris/Projects/.sfia-exec/live-e2e-01/nora-session/nora-session.sqlite` | historique — **non écrit** |
| `/Users/morris/Projects/.sfia-exec/pre-int-ux-qa-01/product-db/oa-product.sqlite` | clone QA (sqlite3 `.backup`) |
| `/Users/morris/Projects/.sfia-exec/pre-int-ux-qa-01/nora-session/nora-session.sqlite` | clone QA |

SHA256 historiques (inchangés avant/après clone et après setup) :

```
c3fb06b7d8bae0e3ff33f386ef84105208ee133b15c0d2c26034cefc9095d297  oa-product.sqlite
bebacb2b3cb92ff672501f81cecfa806f0c92a5c3841eeac4f097d5172b028a7  nora-session.sqlite
```

### Config process-local (pas de mutation `.env.local` partagé)

Overrides effectifs du process QA :

- `PORT=3031`
- `BETTER_AUTH_URL=http://localhost:3031`
- `SFIA_STUDIO_PRODUCT_DB_PATH=…/pre-int-ux-qa-01/product-db/oa-product.sqlite`
- `SFIA_STUDIO_NORA_SESSION_DB_PATH=…/pre-int-ux-qa-01/nora-session/nora-session.sqlite`
- `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE=…/pre-int-ux-qa-01/managed-repos`
- `SFIA_STUDIO_CURSOR_REAL=0`
- `SFIA_STUDIO_E2E_QA_CONTROL` unset (pas de fake QA control pour Level B)

Secrets chargés depuis le fichier partagé **en lecture** vers un fichier process `qa.process.env` (mode 600) sous `.sfia-exec/pre-int-ux-qa-01/meta/` — **hors dépôt git**, non publié.

Launcher : `/Users/morris/Projects/.sfia-exec/pre-int-ux-qa-01/meta/launch-qa-3031.sh`

### HTTP précheck

- `GET /login` → **200** (surface login GitHub)
- `GET /` et `/studio` → **307** `/login?error=NO_SESSION` (auth config OK ; session absente)
- `GET /api/auth/github-start?from=/studio` → **307** GitHub OAuth authorize avec `redirect_uri=http://localhost:3031/api/auth/callback/github`

## 10. Fake / Real Qualification

| Niveau | Statut |
|--------|--------|
| A — Deterministic browser QA | Possible après auth ; renderer CR-03 déjà prouvé en Vitest |
| B — Interactive Nora LIVE | Process prêt (OpenAI keys via env partagé lu) ; **Cursor n'envoie aucun message** ; Cursor REAL=0 |
| G-REAL | **NOT GRANTED** |
| REAL=1 historique | non modifié (instance LIVE non touchée) |

## 11. UX-00 — Replay TEST-16 (précheck)

Données dans clone (RO) :

- project `prj:d0c81c08-349b-4109-aca7-72bd5d1bae85` title BALISE
- `ltu:8e7720d6895b2faaff2a7003210dfff5`
- assistant `pt:b30e1430059e0bfb` content **1996** ; presentation_json présent ; lead **176** ; **4** blocks

Oracle fonctions pures candidate CR-03 sur ce tour :

```json
{
  "shouldRender": true,
  "covered": false,
  "mode": "adaptive_with_canonical",
  "forceCanonical": true,
  "displayNonEmpty": true
}
```

**Browser visual UX-00 :** `AWAITING_PILOT_AUTH` — aucune capture navigateur authentifiée dans ce cycle (volontaire : pas de contournement auth ; pas d'envoi auto).

## 12. Grille UX interactive (à remplir par Morris)

| ID | Scénario | Statut |
|----|----------|--------|
| UX-00 | Replay TEST-16 | données+oracle OK ; visual awaiting Pilot |
| UX-01 | Question courte | awaiting Pilot |
| UX-02 | Synthèse projet | awaiting Pilot |
| UX-03 | Liste / procédure | awaiting Pilot |
| UX-04 | Comparaison | awaiting Pilot |
| UX-05 | Recommandation | awaiting Pilot |
| UX-06 | Faits / hypothèses / réserves | awaiting Pilot |
| UX-07 | Continuité | awaiting Pilot |
| UX-08 | Limite / absence de preuve | awaiting Pilot |

## 13. Instructions de connexion Pilote

1. Ouvrir `http://localhost:3031/login`
2. Continuer avec GitHub
3. Si callback refusé : ajouter `http://localhost:3031/api/auth/callback/github` à l'OAuth App GitHub (sans toucher `.env.local`)
4. Ouvrir le projet BALISE (URL ci-dessus)
5. UX-00 : vérifier canonical-first / secondary warning sur le tour TEST-16
6. UX-01..08 : **un message à la fois** ; captures desktop (+ mobile si utile)
7. Ne pas confirmer ExecutionContract ; ne pas activer Cursor REAL

Fichier local : `.sfia-exec/pre-int-ux-qa-01/meta/PILOT-INSTRUCTIONS.txt`

Arrêt serveur : `pkill -f 'next dev --port 3031'`

## 14. Absence d'effets BALISE LIVE

- Port 3020 : non démarré / non réutilisé
- Hash SQLite historiques stables
- Aucun UPDATE/INSERT sur originaux
- Clone seul mutable par messages Pilotes futurs

## 15. Dette temporaire QA

| Dette | Exit |
|-------|------|
| Arbre `.sfia-exec/pre-int-ux-qa-01` | suppression sous GO Morris post-QA |
| `qa.process.env` (secrets process) | ne pas committer ; effacer avec l'arbre |
| Callback GitHub :3031 | config OAuth externe si besoin |
| R24 CR-03 | GO documentaire distinct |
| Captures UX | fournies par Morris → revue ChatGPT |

## 16. Réserves

1. Session Pilote non encore établie sur :3031 → UX browser non photographiée.
2. Callback OAuth :3031 peut nécessiter ajout côté GitHub App.
3. `next dev` sert le WIP ; pas un build production isolé.
4. OpenAI LIVE possible après auth si Morris envoie des messages — hors preuve de ce pack.
5. Aucun message auto envoyé.

## 17. Gates restants

1. Login Pilote + captures UX-00..08
2. Revue ChatGPT des captures
3. Décision Morris intégration candidate
4. R24 CR-03
5. Validation LIVE BALISE / TEST-17 sous GO distinct

## 18. Verdict

**`QA ENVIRONMENT READY — AWAITING PILOT INTERACTIVE UX TESTS`**

## 19. Git Review Index

Aucun fichier Product modifié dans ce cycle. Artefacts QA hors git sous `.sfia-exec/pre-int-ux-qa-01/`.

## 20. Instruction ChatGPT obligatoire

Relire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (SHA/blob de ce publish). Vérifier Git Truth, port/auth, isolement bases, candidate CR-03, UX-00 oracle vs browser gap, Fake/Real, absence effet BALISE, verdict awaiting Pilot.

Synthesis-only → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
Remote non actualisé → `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`.

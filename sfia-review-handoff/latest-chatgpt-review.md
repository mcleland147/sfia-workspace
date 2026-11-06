# SFIA Studio Next — R5 / ML3 — Cycle 09 QA/VALIDATION CRITICAL
## SEC-01 remediation + OAuth readiness + Nora OpenAI LIVE (bounded)

**Date UTC:** 2026-11-06
**GO Morris:** 2026-11-06 — RECETTE LIVE sécurité, identité et cognition Nora
**Profil:** CRITICAL — TYPE RUN
**Lot:** Cycle 09 — un seul cycle intégré

**Verdict Cursor:**

```
ML3 RECETTE LIVE QUALIFICATION PARTIAL —
AUTH OAUTH CALLBACK MORRIS-OWNED —
SEC-01 REMEDIATED —
NORA OPENAI LIVE VERIFIED (TEST_BOUNDARY) —
READY FOR MORRIS OAUTH SESSION + COGNITIVE RECETTE
WITH CARRIED RESERVES.
```

**Ne signifie PAS:** OAuth callback LIVE Cursor-proven · RCT-01..07 accepted · ML3 closed · PR/merge · STABLE · ADOPTED · OPERATIONAL_VALIDATED.

---

## A. Mandat

IN exécuté dans les limites observées: SEC-01; config RECETTE OAuth+OpenAI; Nora LIVE ≤6 tours; pack FULL; handoff L3.
OUT respecté: pas de mutation code produit; pas de commit/push projet; pas de migration 008; pas de PR/merge; Nora non déclarée OPERATIONAL_VALIDATED.

Morris a repris explicitement la preuve interactive OAuth (callback / lancement de session). Cursor laisse `STUDIO_DEV_TEST_LOGIN=0`, OAuth `configured:true`, URL http://127.0.0.1:3200/login.

---

## B. Git Truth

| Ref | SHA |
|-----|-----|
| HEAD delivery | `ba831b25bc182f755be749243f256dbf7d5a1ca1` |
| tree | `0f87848a31d2fa74febdde3c2d9dc2453c535bea` |
| origin/main | `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| origin/sfia/next-pilotage-decisions-delivery | `ba831b25bc182f755be749243f256dbf7d5a1ca1` |
| handoff précédent (compromis SEC-01) | `f9826d04e551d905e3cd38c89e046b5f7ff82c4d` blob `77f19a7f…` |

Branche locale: `sfia/next-pilotage-decisions-delivery`
Worktree build immuable: `/Users/morris/Projects/sfia-workspace-ml3-recette-build-ba831b25` (detached `ba831b25`)
Préservés: 5 SVG untracked; delivery dirty review tmp only; aucun commit projet.

---

## C. Sources Git lues (refs applicables)

- Processus SFIA v2.6 routing + template cycle
- ENV-01 `environnements-recette-et-promotions.md` blob `14b61f0d…`
- Product versioning blob `8bc93e0f…`
- Code servi (worktree ba831b25): `session.ts`, `auth.ts`, `nora-adapter.ts`, `cognitive-policy.ts`, `d4-read-tools.ts`, `conversation-authority.ts`, `service.ts`
- Handoff f9826d04 scanné **sans recopier** le credential

---

## D. État runtime initial (avant cycle 09)

- Port 3200: PID antérieur LaunchAgent `com.sfia.studio.next.recette.ml3`
- Build ID Next: `iXlmY0CgReCKATLjOB-u7`
- DB: `sfia_next_recette_ml3` @ `sfia-next-recette-pg:5434` schéma 007
- Auth smoke: DEV_TEST_ADAPTER; OAuth non exercé
- OpenAI unset (runner unsettait la clé)

---

## E–G. SEC-01 — diagnostic et révocation

**Constat:** handoff Git `f9826d04` contenait une valeur de cookie `sfia_studio_session__RECETTE` (credential session, pas simple corrélation).

**Actions (sans afficher la valeur):**
1. Extraction locale contrôlée du token depuis le blob historique.
2. Match DB `sessions.token` → session `sid_f171495a-5984-4a26-9810-b3b724a94268` (`auth_mode=dev-test-login`, prefix `sess_89e`).
3. `UPDATE sessions SET revoked_at=now()` sur cette ligne.
4. Révocation élargie de **toutes** les sessions RECETTE actives (smoke local avait aussi des jars cookie).
5. Redaction artefacts locaux: `.tmp-sfia-review/chatgpt-review.md`, `artifacts/smoke/*` → `sess_[REDACTED_SEC01]`.
6. Scan post-redaction: **NONE** `sess_[0-9a-f-]{20,}` restant dans artefacts locaux destinés à publication.

**Preuve refus:**
`Cookie: sfia_studio_session__RECETTE=<compromised>` → `GET /api/portfolio` **HTTP 401** `SESSION_INVALID` (re-vérifié après restart final).

**Git:** aucun force-push / rewrite. L’ancien commit reste dans l’historique; le credential y est **révoqué côté runtime**.

**SEC-01 status:** **REMEDIATED**.

---

## H–J. OAuth GitHub — configuration et start (Cursor) / callback (Morris)

**Config RECETTE (hors Git `.env.local` mode 0600):**
- `BETTER_AUTH_URL=http://127.0.0.1:3200`
- `BETTER_AUTH_SECRET` PRESENT non-défaut
- `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` PRESENT (réutilisation locale contrôlée depuis store machine DEV → fichier RECETTE explicite; pas d’héritage process silencieux)
- `STUDIO_DEV_TEST_LOGIN=0` (état final pour lancement Morris)

**Preuves Cursor:**
| Test | Résultat |
|------|----------|
| `/api/auth/status` | `configured:true` — LIVE proof still requires successful callback |
| POST `/api/auth/sign-in/social` | redirect GitHub authorize |
| `redirect_uri` | `http://127.0.0.1:3200/api/auth/callback/github` |
| scopes | `read:user` + `user:email` (pas de scope dépôt) |
| UI `/login` | bouton « Continuer avec GitHub » |
| DEV test login | **HTTP 403** `DEV_TEST_LOGIN_DISABLED` (état final) |

**Callback + session OAuth persistée:** **NOT CURSOR-PROVEN** — **MORRIS-OWNED** (demande explicite Morris).
**OAUTH LIVE PROVEN:** **NO** (attente callback Morris).

---

## K. Isolation cookies / projets

- Cookie Studio lane-scoped: `sfia_studio_session__RECETTE`
- Credential compromis refusé (401)
- Sessions actives révoquées avant handoff final
- Projet LIVE créé uniquement en DB RECETTE; count DEV `name LIKE '%Nora LIVE%'` = **0**
- ENV-01 Reserve A (host cookie) **CARRIED** — isolation Better Auth cross-lane OAuth **NOT EXERCISED** tant que callback Morris non fait

---

## L–O. OpenAI LIVE + politique + modèle

**Config:** `OPENAI_API_KEY` PRESENT dans `.env.local` RECETTE; runner ops **ne unset plus** la clé (cycle 09 GO).
**Profil:** `SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY` (fail-closed RECETTE; OPERATIONAL_PROVISIONAL non levé).
**Modèle demandé:** `gpt-6.1-sol` — **présent** dans `GET /v1/models` (96 modèles listés).
**Modèle appliqué:** non exposé distinctement dans l’enveloppe API; `policy.modelRequested=gpt-6.1-sol`; attempts `providerContacted=YES`, `outcome=SUCCESS`.
**Mode:** `noraMode=openai-agents-sdk-live` — **pas de fixture**.
**Budget campagne:** 6 tours utilisateur LIVE max — **6 utilisés** (LIVE-01,02,03,05,06,06b).
**Supervision coût $:** non mesurée comme facturation; bornage = plafond tours + TEST_BOUNDARY.

---

## P. Scénarios LIVE (≤6)

Projet: `proj_c0b8442a-0edb-4116-a905-c99e397dffc0`
Prep: `prep_6e353d5c-…` (doc `Corpus recette LIVE D4`)
Auth pour ces tours: **dev-test-login TEMPORAIRE** (réactivé uniquement pour cognition; **re-désactivé** ensuite). **Ne constitue pas une preuve OAuth.**

| ID | Résultat factuel |
|----|------------------|
| LIVE-01 | COMPLETE · live · reformulation contraintes sans décision · `humanDecisionCreated=false` · tools=0 |
| LIVE-02 | COMPLETE · live · comparaison A/B/C · tools=1 · d4Chars=754 · HD=false |
| LIVE-03 | COMPLETE · live · lit D4 · cite `TOKEN_RECETTE_LIVE_D4_ALPHA_20261106` · tools=1 · provenance document v1 |
| LIVE-05 | RECORD_DECISION explicite `dec_654c0fc2…` APPLICABLE puis tour cognitif · Nora signale divergence budget illimité vs décision · **aucune révision D6 par Nora** · HD=false |
| LIVE-06 | phrasing « GO: ouvre le cycle CADRAGE… » · Nora refuse d’ouvrir elle-même · **CAS intent NONE** (autorité non déclenchée) · cycle non créé |
| LIVE-06b | « Ouvre le cycle cadrage. » · **OPEN_CYCLE APPLIED** · `source_kind=USER_MESSAGE` · `dec_d8f30ac3…` · cycle `CADRAGE ACTIVE` · CKI `01-cadrage@0.2.0` RESOLVED · Nora confirme effet serveur |

**LIVE-04 (CKI guidance):** couvert en observation post-06b (cycle+CKI résolus; Nora décrit état). Pas de 7ᵉ tour.

**Classe de preuve:** NORA PROVIDER LIVE + D4 READ LIVE-IN-RECETTE + D5/D6 PG OBSERVED (GO 06b + RECORD_DECISION).
**AUTH OAUTH LIVE:** NOT PROVEN (Morris).

---

## Q–R. D4 / CKI / D5–D6

- Outils observés via `toolCallsObserved` ≥1 sur LIVE-02/03/05/06; chars D4 retournés.
- Aucun outil Git/Cursor/shell fourni à Nora.
- CKI pin `01-cadrage@0.2.0` après OPEN_CYCLE.
- Invariants: sortie Nora ≠ HumanDecision; GO appliqué uniquement via CAS USER_MESSAGE (06b); LIVE-06 montre frontière Nora sans effet.

---

## S. Interdictions / refus

- Nora n’ouvre pas le cycle elle-même (LIVE-06).
- Nora ne révise pas la décision documentaire (LIVE-05).
- DEV_TEST final disabled.
- Pas de scope dépôt OAuth.

---

## T. R-UX-01

**NON CONFORME — CARRIED RESERVE** (Morris). Non corrigé. Non observé comme rupture d’intégrité D5/D6 sur cette campagne.

---

## U. Autres réserves

- ENV-01 cookie host Reserve A
- B13 Niveau B libre-texte: NOT PROVEN
- Figma pixel: NOT VERIFIED
- OAuth callback: MORRIS PENDING
- OPERATIONAL_VALIDATED: N/A
- modelApplied distinct: NOT OBSERVED in envelope

---

## V. Commandes / logs (expurgés)

- `launchctl bootout/bootstrap com.sfia.studio.next.recette.ml3`
- Runner: `artifacts/ops/run-recette-ml3-next.sh` (OPENAI conservé depuis `.env.local`)
- Obs: `d3.nora.provider_attempt` + `d3.turn.completed` lane=RECETTE source_sha=ba831b25
- Artefacts locaux non Git: `…/artifacts/live-cog/LIVE-*.json`, `SUMMARY` partiel, `recette-served-manifest-live.json`
- **Aucun secret / cookie / token dans ce pack.**

---

## W. Manifeste RECETTE (non secret)

Voir `artifacts/ops/recette-served-manifest-live.json` (hors Git projet):

- state: `SERVED_LIVE_PARTIAL_OAUTH_MORRIS_OWNED`
- candidate_sha / tree / build_id Next inchangés
- auth: OAuth configured; callback Morris; DEV_TEST off
- nora: openai-agents-sdk-live · TEST_BOUNDARY · 6 tours

---

## X. Git final projet

- HEAD toujours `ba831b25`
- Aucun commit/push projet
- SVG untracked préservés
- Seule publication autorisée: handoff L3 ci-dessous

---

## Y. Handoff distant

Publié via `scripts/sfia/publish-review-handoff.sh` (voir SHA/blob après publication).
Audit pré-publication: pas de `sess_`, pas de `sk-`, pas de secrets.

Ancien handoff `f9826d04` reste historique (« session compromised — revoked »).

---

## Z. Verdict / prochain gate

**PARTIAL** — SEC-01 OK · Nora OpenAI LIVE OK (TEST_BOUNDARY) · OAuth callback **à charge Morris**.

**Gate suivant:**
1. Morris complète OAuth LIVE sur http://127.0.0.1:3200/login (Continuer avec GitHub).
2. ChatGPT Critical Review de ce pack.
3. Puis campagne RCT-01..07 cognitive LIVE sous session OAuth, réserves déclarées.

Aucun GO PR/merge/promotion automatique.

---

## Evidence classes (séparées)

| Classe | Statut |
|--------|--------|
| DETERMINISTIC / PG | OBSERVED (révocation, HD, cycles, isolation DEV) |
| AUTH OAUTH START | PROVEN |
| AUTH OAUTH CALLBACK LIVE | MORRIS-OWNED / NOT CURSOR-PROVEN |
| NORA PROVIDER LIVE | PROVEN (6 tours, providerContacted=YES) |
| D4 READ LIVE-IN-RECETTE | PROVEN (TOKEN cité + toolCalls) |
| D5/D6 PG | OBSERVED (RECORD_DECISION; OPEN_CYCLE USER_MESSAGE 06b) |
| BROWSER FAKE | N/A this cycle |
| OPERATIONAL_VALIDATED | NOT AVAILABLE |

# SFIA Studio Next — Review Pack Full — Cycle 12 / R05 Diagnostic READ-ONLY

**Date UTC :** 2026-11-17
**Mandat consommé :** GO Morris — DIAGNOSTIC READ-ONLY UNIQUEMENT (R05 Nora LIVE UNKNOWN + réconciliation bloquée)
**Typologie :** RUN / INC
**Exécutant :** Cursor
**Revue :** ChatGPT
**Autorité :** Morris
**Product versioning :** NO RELEASE
**Correction / LIVE replay / RECETTE restart / OpenAI call :** NON effectués

---

## 1. Mandat et périmètre

Diagnostic de l’incident R05 (Intervencia → Travail avec Nora) :

1. Affichage `Nora LIVE UNKNOWN` sans réponse composite exploitable.
2. Action « Réconcilier la tentative en cours » qui ne lève pas l’incertitude.

Écriture autorisée uniquement : ce Review Pack + handoff L3. Aucun correctif code, aucun POST applicatif mutatif, aucune reproduction LIVE.

---

## 2. Git Truth Check

| Élément | Valeur observée |
|---|---|
| Worktree diagnostic / DEV | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Branche | `feat/next-ml4d-project-space-20261116` |
| HEAD local | `208aaa40672433e7dd0bd989f96d26e4e24f7798` |
| Modifications projet code | aucune (seul `.tmp-sfia-review/chatgpt-review.md` touché pour ce pack) |
| Worktree RECETTE | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-208aaa40` |
| HEAD RECETTE | `208aaa40672433e7dd0bd989f96d26e4e24f7798` (detached) |
| Handoff WT | `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` @ `9c23654d` (`sfia/review-handoff`) |
| Remote | `https://github.com/mcleland147/sfia-workspace.git` |
| STABLE | NOT AVAILABLE |

Références distantes citées dans le mandat (non re-checkout) : `main@997d4c4e…`, handoff antérieur `9c23654d`, docs ML4D `99b3622b…`.

**STOP identité :** non déclenché — SHA / BUILD / PID / lane cohérents.

---

## 3. Identité RECETTE observée

| Champ | Valeur |
|---|---|
| URL | `http://127.0.0.1:3200` |
| SOURCE_SHA | `208aaa40672433e7dd0bd989f96d26e4e24f7798` |
| BUILD_ID servi | `_xkrsw46qX4QKUC0bBU8i` (commentaire HTML Next) |
| PID `next-server` | `48321` (LISTEN `127.0.0.1:3200`) |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` → `start-recette-ensemble05-208aaa40.sh` |
| Manifest | `DEPLOY-MANIFEST-E05-208aaa40.md` |
| DB | `127.0.0.1:5434` · `sfia_next_recette_ml4` (SELECT only) |
| `STUDIO_FORCE_NORA_FIXTURE` | unset |
| Profil cognitif appliqué aux tours R05 | `TEST_BOUNDARY` · profile `investigation` · `wallClockMs=180_000` · `maxD4ToolCalls=8` · `maxD4CharsReturned=64_000` |
| Rollback dispo (non utilisé) | `34a5e102` |

Isolation : DEV worktree ≠ runtime CWD RECETTE ; bases distinctes ; STABLE absente. Aucun redémarrage effectué ce cycle.

---

## 4. Sources Git / blobs (lecture)

SFIA v2.6 (méthode) + Studio Next gouvernance / contrats Travail avec Nora / CT-05 / UX-ACT — lus selon mandat.
Candidat local `208aaa40` : `page.tsx` (`reconcilePending` / `sendMessage`), `NoraConversation.tsx`, `thread-recovery.ts` (`shouldClearThreadPending`), `nora-adapter.ts` (`categorizeProviderError`, stream catch), `service.ts` (`d3.turn.replay`), `cognitive-policy.ts`, OBS allowlist `error_name`.

---

## 5. Identification du tour R05

**Projet :** Intervencia
**projectId :** `proj_683bcd2e…` (préfixe)
**preparationId :** `prep_51effa9f…`
**conversationId :** `conv_d7b4495b-0e67-453f-ba09-d9cf15127101`
**pilotId :** `pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c`

Deux échecs UNKNOWN distincts sur la même fenêtre UAT R05 (demande composite déploiement portail — extrait thématique uniquement ; transcript non recopié) :

### R05-A (incident primaire rapporté)

| Champ | Valeur |
|---|---|
| clientTurnKey | `turn-6d4ea1e9-71a3-4b35-b141-1cec7e5b60f8` |
| turnCommandId | `tcmd_c751c17a-…` |
| operationId | `op_fc92c48c-3987-4f35-84ea-701ae462e09f` |
| generationId | `gen_1d101079-d76b-463c-9764-4ed12291768a` |
| attemptId | `att_fad324c0-504d-4c51-968d-d08c0f2bf247` |
| userMessageId | `msg_18e3943e-…` (COMPLETE) |
| assistantMessageId | `msg_7a5cfe62-…` (UNKNOWN) |
| created → updated UTC | `18:44:42` → `18:46:46` (~124 s) |
| status terminal DB | **UNKNOWN** |
| error_category | UNKNOWN |
| noraMode | openai-agents-sdk-live |
| nextTurnKind | INCERTAIN |
| pilotageEffect | **null** |
| providerContacted | **YES** |
| streaming | attempted=true, delivered=true, notes=`PROVIDER_ERROR` |
| tools / D4 chars | 2 / 13773 |
| replays OBS `d3.turn.replay` | **2** (`status=UNKNOWN`, `reconciled=false`) |

### R05-A recovery (nouvelle clé — non “réconciliation”)

Après les replays, envoi **nouveau** `clientTurnKey` `turn-47e5e7ce-…` → `gen_a8a4b54e-…` / `op_fce1da4a-…` → **COMPLETE** (`18:47:11` → `18:49:01`), 1 attempt SUCCESS, tools=2. Prouve que le contenu R05 est réalisable LIVE sur ce runtime, sans lever le pending de la clé UNKNOWN.

### R05-B (second UNKNOWN, même scénario composite)

| Champ | Valeur |
|---|---|
| clientTurnKey | `turn-1709ecb4-ff20-4031-9239-c835c8ce2c94` |
| operationId | `op_c1588cea-60ee-45d3-b836-e49f3715a8c8` |
| generationId | `gen_d789f830-6a71-44e0-96ca-3e6f244eaa9e` |
| attemptId | `att_173050a2-0d15-461f-a70c-4619edb13369` |
| user / assistant | `msg_e9c4c1eb-…` COMPLETE / `msg_6cdd01b7-…` UNKNOWN |
| created → updated UTC | `18:56:46` → `18:58:33` (~107 s) |
| status | **UNKNOWN** · PROVIDER_ERROR · contact YES · stream delivered |
| tools / D4 chars | 2 / 35772 (< plafond 64_000) |
| unresolvedPendingClientTurnKey (request) | `turn-1709ecb4-…` (self) |
| replays `d3.turn.replay` | **9** (`reconciled=false`) |

Tour COMPLETE intercalé `turn-34e324a3-…` (`18:54:04`→`18:56:41`) — même empreinte de contenu que R05-B, SUCCESS — montre intermittence fournisseur/SDK, pas un blocage systématique du prompt.

**business_commands** dans la fenêtre 18:40–19:10 UTC : **0**. Aucune commande métier D7 pour `conv-auth:turn-6d4ea1e9…` ni `conv-auth:turn-1709ecb4…`.

---

## 6. Chronologie serveur (disponible)

### R05-A `op_fc92c48c`

1. **Réception / réservation** — `d3.turn.accepted` — exécutée — DB turn command créée 18:44:42 — user message persisté COMPLETE.
2. **Politique** — `d3.nora.policy_selected` — `gpt-6.1-sol` / effort `high` / reasons `BUDGET_LEN_LONG` + `TEST_BOUNDARY` + `LANE_RECETTE`.
3. **SDK / fournisseur** — `d3.nora.provider_attempt` (start) puis attempt terminal meta `provider_contacted=YES`, `error_name=h`.
4. **Outils** — 2 appels observés ; chars D4 13773.
5. **Validation D3 structurée** — non atteinte (exception stream avant SUCCESS).
6. **Finalisation** — `d3.turn.completed` (enveloppe tour) + statut persisté **UNKNOWN** ; assistant message UNKNOWN ; `semanticQualificationStatus=UNAVAILABLE`, clarifications `PROVIDER_ERROR`.
7. **Réponse API** — contenu standard : `Nora LIVE UNKNOWN: une seule tentative fournisseur — aucune relance automatique après exception…`
8. **Réconciliations** — 2× `d3.turn.replay` → même résultat UNKNOWN, `reconciled=false` — **aucun nouvel attempt fournisseur**.

### R05-B `op_c1588cea`

Même chaîne ; durée ~107 s ; 9 replays idempotents ; pending client déjà signalé sur la requête.

**Non observé précisément :** stack/message d’exception OpenAI complet (scrub / `error_name` minifié `h`) ; preuve HTTP fournisseur brute ; horodatage ligne à ligne OBS (préfixe `SFIA_OBS` sans ts ISO — corrélation via DB `created_at`/`updated_at`).

---

## 7. Événements D3 / fournisseur

| Événement | R05-A | R05-B |
|---|---|---|
| `d3.turn.accepted` | oui | oui |
| `d3.nora.policy_selected` | oui | oui |
| `d3.nora.provider_attempt` | oui (×2 lignes : start + fail) | oui |
| `d3.turn.unknown` nommé | non (statut via completed/result) | non |
| `d3.turn.completed` | oui | oui |
| `d3.turn.replay` | 2 | 9 |
| Métier D7 / business_commands | 0 | 0 |

Fake/Real OpenAI :

| Critère | Qualification |
|---|---|
| SDK `run()` invoqué | OUI |
| Contact fournisseur | **YES** (chunks stream reçus → `streamingDelivered`) |
| Réponse HTTP brute | non capturée |
| Sortie structurée validée | NON |
| Tour D3 finalisé SUCCESS | NON (UNKNOWN) |

`provider_attempt` + `streaming.delivered=true` + tools>0 ⇒ contact réel au-delà de “UNCERTAIN”.
`error_name: "h"` ⇒ nom d’erreur minifié accepté par le filtre `/^[A-Za-z]…/` — **sous-type OpenAI non démontré**.
Stderr runtime : `TimeoutNegativeWarning: -625630…` (une occurrence dans `launchd.err.log` depuis smoke 18:28Z) — **corrélation causale avec R05 non prouvée**, signal concurrent de timer SDK/undici suspect.

---

## 8. Erreurs et budgets

| Hypothèse | Verdict |
|---|---|
| 1. Rejet schéma / structured output | **Infirmée** comme catégorie OBS — notes=`PROVIDER_ERROR`, pas `PROVIDER_SCHEMA_OR_OUTPUT` |
| 2. Erreur SDK Agents | **Possible** (enveloppe d’exception) — non discriminée |
| 3. Timeout / abort wall 180s | **Infirmée** — 124 s / 107 s < 180 s ; catégorie ≠ `PROVIDER_INTERRUPTED` |
| 4. Erreur streaming mid-drain | **Compatible** — stream delivered puis catch |
| 5. Sortie reçue invalide D3 | Non — pas de SUCCESS validation |
| 6. Budget taille / tools | **Infirmée** comme cause directe — tools 2≤8 ; chars 13k/35k ≤64k |
| 7. Échec outil Nora | Non isolé — tools ont retourné des chars ; échec classé PROVIDER_ERROR après |
| 8. Persistance / finalisation | **Infirmée** — messages + turn_commands persistés UNKNOWN |
| 9. ACK client perdu | **Possible contributeur pending** (voir §11) — serveur a bien finalisé |
| 10. Indéterminé sous-type fournisseur | **Oui** pour le message d’exception exact |

Longueur prompt : `BUDGET_LEN_LONG` sélectionne `investigation` — **n’explique pas l’échec** (tours COMPLETE voisins mêmes reasons).

Politique code (`nora-adapter`) : **une seule** tentative `run()` ; pas de relance auto après exception — conforme au message UI.

---

## 9. Statuts DB (sans transcript)

- User messages R05-A/B : **COMPLETE** (intention utilisateur durable).
- Assistant UNKNOWN : message placeholder LIVE UNKNOWN persisté ; `turnProjection.finalized=false`, activity `uncertain`.
- `pilotageEffect` : null ; `humanDecisionCreated` : false.
- Aucune duplication de `client_turn_key` (unique conv+key).
- Replays : même `operation_id` / `generation_id` — pas de nouvelle génération.

---

## 10. Chemin exact `reconcilePending` sur `208aaa40`

Fichier : `web/src/app/projects/[projectId]/page.tsx`

1. `GET /api/projects/{id}/pilotage/commands/by-key/{clientCommandKey}` avec `clientCommandKey = conv-auth:{clientTurnKey}`.
2. Si OK et status ≠ UNKNOWN → clear pending.
3. Si **404** (cas R05 : aucune business_command) → message « Commande absente… reprise du même acte ».
4. Puis **POST** `/api/preparations/{prep}/messages` avec **le même** `clientTurnKey` + content.
5. Serveur : idempotence D3 → `d3.turn.replay`, `reconciled:false` lorsque le tour est déjà terminal UNKNOWN.
6. Client : `applyClearFromResponse` → `shouldClearThreadPending` (**`thread-recovery.ts`**) :
   - sans effet métier : clear seulement si Nora `COMPLETE` ou `FAILED` ;
   - **`UNKNOWN` ne clear pas**.
7. Bannière `NoraConversation` : bouton visible tant que `unresolvedPending` sessionStorage.

Conséquence : pour un tour cognitif UNKNOWN sans D7, la réconciliation est une **relecture idempotente** qui **ne peut pas** sortir de l’état pending.

---

## 11. Tentatives de réconciliation historiques

| Opération | Replays observés | Nouvel appel fournisseur | Effet |
|---|---|---|---|
| `op_fc92c48c` (R05-A) | 2 | non | pending conservé |
| `op_c1588cea` (R05-B) | 9 | non | pending conservé |

**Comment le pending a pu être posé** alors que HTTP 200 + `nextTurnKind=INCERTAIN` **ne** call **pas** `rememberPending` :

- chemin `!res.ok` (ex. 409 `TURN_IN_PROGRESS`) ou `catch` réseau → `rememberPending(buildPending())` ;
- hypothèse discriminante pour R05-A (~124 s) : **timeout / abort fetch client** pendant que le serveur finalise UNKNOWN → pending posé + réponse serveur déjà UNKNOWN ;
- R05-B : `unresolvedPendingClientTurnKey` égal à sa propre clé prouve pending déjà présent à l’envoi.

Aucune preuve d’un second `run()` OpenAI déclenché par les clics reconcile (OBS replay only).

---

## 12. Distinction UNKNOWN D3 / pending D7

| Concept | R05 |
|---|---|
| UNKNOWN D3 (génération cognitive) | **Oui** — statut terminal tour |
| Effet métier D7 en attente | **Non** — 0 business_commands ; `pilotageEffect=null` |
| UI « Réconcilier la tentative » | Présente via pending **session** (clé `conv-auth:…`), pas via commande métier réelle |
| Écart contrat CT-05 | Réconciliation présentée comme capacité de reprise alors qu’elle ne résout pas un UNKNOWN cognitif sans D7 |

---

## 13. Constats UI vs contrats

Aligné :

- Message honnête UNKNOWN / une seule tentative.
- Brouillon / intention utilisateur persistée (user COMPLETE).
- Pas d’envoi implicite d’un **nouveau** contenu distinct via reconcile (même clé).

Écarts :

- Boucle sans issue compréhensible (bouton répétable, état inchangé).
- Assimilation UX d’un UNKNOWN cognitif à une « tentative » réconciliable type métier.
- `shouldClearThreadPending` refuse de lever pending sur UNKNOWN même sans effet métier — **recovery UX gap** démontré.

---

## 14. Hypothèses

**Confirmées**

- Échec classé `PROVIDER_ERROR` après contact fournisseur réel (stream + tools).
- Persistance UNKNOWN durable ; user message conservé.
- Réconciliation = 404 pilotage + replay D3 ; ne clear pas pending ; 11 replays sans nouveau provider call.
- Pas d’effet métier engagé.
- Budgets wall/tools/chars non saturés comme cause catégorisée.
- Contenu R05 réalisable (COMPLETE sur clés distinctes).

**Infirmées**

- Échec schéma `PROVIDER_SCHEMA_OR_OUTPUT`.
- Abort wall-clock 180 s.
- Défaut de persistance serveur.
- Duplication de génération via reconcile.

**Non vérifiées**

- Message/stack exact derrière `error_name=h`.
- Lien causal `TimeoutNegativeWarning`.
- Preuve navigateur exacte du chemin `rememberPending` (timeout vs 409).
- Contenu HTTP OpenAI.

---

## 15. Cause racine / limites

**Cause génération R05 :** exception pendant/après drain du stream Agents SDK, catégorisée `PROVIDER_ERROR`, `providerContacted=YES`, une attempt, statut D3 **UNKNOWN**. Sous-type fournisseur exact **non établi** (`error_name` inutilisable).

**Cause blocage reprise :** défaut de contrat/routage UX — `reconcilePending` conçu autour des commandes métier ; pour UNKNOWN cognitif sans D7, replay idempotent + `shouldClearThreadPending` conservent le pending indéfiniment.

Niveau de confiance : **élevé** sur le mécanisme global ; **moyen** sur le sous-type d’exception OpenAI.

---

## 16. Blast radius / risques correctif

Risques si correctif mal borné :

- Lever pending trop tôt sur UNKNOWN métier réel (régression CT-05 / CR-02).
- Relancer un vrai `run()` depuis reconcile → **duplication fournisseur / coût**.
- Confondre clear pending avec clear draft.

Risque actuel (sans correctif) : boucle UX ; **pas** de rejeu fournisseur sur reconcile ; risque de **nouvel** appel seulement si l’utilisateur envoie une **nouvelle** clé (observé : recovery COMPLETE).

---

## 17. Correction minimale proposée (**sans code**)

1. **Séparer** reprise cognitive UNKNOWN vs réconciliation commande D7.
2. Pour tour cognitif UNKNOWN sans `effectAttempted` : action UX explicite du type « abandonner l’incertitude / nouvelle formulation » qui clear pending **sans** POST messages, **ou** clear pending quand replay prouve terminal UNKNOWN + `pilotageEffect=null`.
3. Ne jamais présenter « reprise du même acte » comme résolution si `reconciled=false` et status UNKNOWN.
4. Améliorer OBS : logger `error.message` redacted + `error.name` non minifié / cause SDK ; investiguer `TimeoutNegativeWarning`.
5. Hors scope immédiat : hardening schéma strict (déjà Option A acceptée).

---

## 18. Preuves / tests futurs (après GO correctif)

- Test unitaire `shouldClearThreadPending` : UNKNOWN + effectAttempted false → clear autorisé (nouvelle règle).
- Test UI : reconcile sur fixture UNKNOWN cognitif → pending disparaît **sans** second provider.
- Test : reconcile avec business_command UNKNOWN → pending **conservé**.
- Test idempotence : POST même `clientTurnKey` → replay, attempts inchangés.
- Ne pas exiger LIVE OpenAI pour valider le gap de reprise.
- Optionnel : un LIVE de non-régression seulement sous GO Morris séparé.

---

## 19. Fake / Real Qualification

| Item | Statut |
|---|---|
| LIVE smoke antérieurs PASS | réel (hors R05) |
| R05 provider contact | **REAL** (YES + stream + tools) |
| R05 structured success | **NON** |
| Reconcile mutates provider | **NON** (replay only) |
| Correctif / R05 PASS / E05 close | **HORS PORTÉE** ce cycle |

---

## 20. État final RECETTE et Git

- RECETTE : inchangée (PID 48321, SHA `208aaa40`, BUILD `_xkrsw46qX4QKUC0bBU8i`) — aucun restart/deploy.
- Données incident : conservées (preuves).
- Branche projet : pas de commit produit.
- Handoff L3 : publié ce cycle (voir SHA/blob ci-dessous après publish).

---

## 21. Verdict unique et gate Morris

### `R05 PROVIDER FAILURE IDENTIFIED — RECOVERY UX GAP CONFIRMED`

**(Verdict C du mandat.)**

**Décision Morris suivante (candidates) :**

1. **GO DEV FIX** borné recovery UX / pending cognitif UNKNOWN (recommandé) — sans LIVE.
2. GO observation OBS exception (`error_name` / TimeoutNegative) en complément.
3. Ne pas clôturer E05 ; R06–R08 restent bloqués tant que la reprise UNKNOWN n’est pas traitable.

---

## Annexes synthèses

**Appels fournisseur R05-A/B :** 1 attempt stream chacun (2 UNKNOWN).
**Replays reconcile :** 2 + 9 = 11, 0 provider.
**COMPLETE recovery / composite voisin :** ≥2 générations LIVE SUCCESS distinctes sur même thématique.
**Duplication risque reconcile :** faible (idempotent) ; risque nouvel envoi manuel : réel.

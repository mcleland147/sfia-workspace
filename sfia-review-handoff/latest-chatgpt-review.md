# SFIA STUDIO NEXT — ML4C-A-010 — DIAGNOSTIC TECHNIQUE D3→D4 (S03-01 Q3)

**Date/heure :** 2026-11-14 — Europe/Paris (investigation ~19:05+ UTC+1)
**GO :** MORRIS — diagnostic read-only
**Anomalie :** ML4C-A-010 — OPEN / MAJEURE
**Scénario :** S03-01 FAIL (retest Q3 14/11 sur candidat `d936da81`)
**Cycle SFIA :** 8 — Audit projet / RUN investigation
**Profil :** CRITICAL
**Périmètre :** diagnostic + qualification — **aucun correctif, aucune mutation RECETTE**
**Review Pack :** FULL mono-cycle
**Review Handoff :** REQUIRED / publish-in-cycle L3

**Verdict Cursor (pré-handoff ; SHA/blob définitifs dans le rapport final post-publish) :**
**DIAGNOSTIC COMPLETE — ROOT CAUSE PROVEN**

---

## A. Synthèse exécutive

Le tour Q3 d'autorisation CREATE D4 est **unique et identifié**. Nora a **qualifié correctement** une intention `d4.create_document` / `REQUEST_EFFECT` avec source historique `msg_3df5bcb8…`. Studio a **refusé d'exécuter** tout effet propriétaire parce que la garde **S05** a détecté un tour frère encore `UNKNOWN` (`client_turn_key=turn-6424c417-…`, créé le **12/11** lors de S02-06 « Projet Inexistant »).

Conséquences observées :

- `pendingEffectBlocked=true`
- `allowOwnerEffects=false` → branche D4 (`savePreparationDocument` / seal) **non entrée**
- `documentSave=null`
- ACK applicatif : `Acte demandé: CREATE` / `Statut observé: UNKNOWN` / `raison: NO_EFFECT_OBSERVED`
- Bibliothèque : **0 document** pour Intervencia

**Cause racine PROVEN :** blocage S05 par sibling `UNKNOWN` historique, indépendant de l'intention D4 courante.

H2/H3/H4 (source/admission/exécution D4) : **non atteinte** comme cause — le chemin documentaire s'arrête **avant** l'appel D4.

Le garde fonctionne **conformément au code** actuel ; l'échec produit est un **écart résultat métier / politique S05** sur conversations longues avec `UNKNOWN` non résolus.

---

## 1. Local Git Truth Check

```text
toplevel: /Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112
branch: fix/next-semantic-intent-convergence-20261112
HEAD: d936da81ebf7d17eb78cc11da0538df000281a4a
TREE: 276679be1ea139525b2267cde9245b8fb88e9a76
PARENT: 67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0
origin/main: 6cda86bde4aa450abb1d23eedd370a9004ddcbc1
origin/build/next-ml4c-functional-convergence: 67bf6b0b… (PR #676 OPEN)
status: M .tmp-sfia-review/chatgpt-review.md only
diff/cached: rapport local uniquement — aucun changement produit
```

**STOP Git mismatch :** non.

### Runtime RECETTE (read-only)

```text
URL: http://127.0.0.1:3200
PID: 41282 next-server v15.5.29
CWD: …/sfia-workspace-next-ml4c-recette-build-d936da81/…/web
Deploy HEAD/TREE: d936da81 / 276679be
BUILD_ID: n-7E8DgbcVu4g_RJWZoiK (file + HTML)
PostgreSQL: sfia_next_recette_ml4 @ container 5432 mapped host 5434
Queries: BEGIN TRANSACTION READ ONLY only
Mutations: none | restart: none | .env: untouched
```

---

## 2. Sources consultées

- SFIA v2.6 : routing, cycle template, rules/guardrails, engineering principles, decision engine, validation checklist (depuis main / refs applicables)
- CKC audit projet : **N/A** (non trouvé comme autorité normative pour ce cycle)
- Gouvernance Next + décisions 2026-11-11 / 2026-11-12
- Construction convergence / as-built / contrats sémantiques (refs présentes)
- Journal Q3 : `bb7769deb0bbf382003b0f91d2d802ae224e2a8a` (S03-01-Q3 FAIL, E01–E05, D01, A-010, arrêt campagne)
- Handoff Q1 `2afd7b57…` (diff candidat — historique)
- Handoff Q2 `746f0813…` (runtime/LIVE — historique)
- Code local **d936da81** : `service.ts`, `turn-command.ts`, document/semantic paths, tests S05

---

## 3. Identité du tour Q3 CREATE (unique)

Recherche post-cutover Q2 + marqueurs autorisation / `NO_EFFECT_OBSERVED`.

**Correspondances assistant contenant `NO_EFFECT_OBSERVED` post-cutover : 1** → pas d'`AMBIGUOUS TURN MATCH`.

| Champ | Valeur | Confiance |
|---|---|---|
| conversation_id | `conv_d7b4495b-0e67-453f-ba09-d9cf15127101` | PROVEN |
| preparation_id | `prep_51effa9f-edc5-47fa-81c1-c18838de362a` | PROVEN |
| project_id | `proj_683bcd2e-986a-4015-a58e-060909a75ec0` | PROVEN |
| user_message_id | `msg_75680d17-fc0c-4f3b-84ee-74c8ba52c3d1` (ord 61) | PROVEN |
| assistant_message_id | `msg_6e807dbb-b412-4377-81c2-a3aa42269c94` (ord 62) | PROVEN |
| turn_command_id | `tcmd_5ee79607-e10a-4fdc-b0f9-f9ab0c234093` | PROVEN |
| operation_id | `op_39b85ba5-2eab-4790-9f6b-58a848eb22de` | PROVEN |
| generation_id | `gen_d2e9e3e8-a824-426a-8dc1-ac7120a1e0e6` | PROVEN |
| client_turn_key | `turn-95120334-a8ee-43f0-80f9-91257c1d98b8` | PROVEN |
| request_id | `req_96c14651-ace3-4122-aef6-81df1c3a8d8c` | PROVEN |
| created_at | 2026-11-14 17:31:00.386746+00 → 17:31:24.99+00 | PROVEN |
| command status | COMPLETE (tour COMPLETE ≠ D4 AVAILABLE) | PROVEN |

Message source déclaré : `msg_3df5bcb8-22df-4a27-9bc9-47bdbcb84043` — **PROVEN** même conversation, assistant ord 6, 2026-11-12 21:15:46+00, fence `sfia-document` présente.

---

## 4. Chronologie technique du tour (OBSERVÉ)

| # | Transition | Statut | Preuve |
|---|---|---|---|
| 1 | Turn accepted | OBSERVÉ | obs `d3.turn.accepted` 17:31:00.396Z lane RECETTE source_sha d936da81 |
| 2 | Policy selected | OBSERVÉ | `d3.nora.policy_selected` TEST_BOUNDARY / investigation / gpt-6.1-sol / effort high |
| 3 | Provider LIVE attempt | OBSERVÉ | `d3.nora.provider_attempt` stream att_97048ecc… |
| 4 | Semantic QUALIFIED CREATE intent | OBSERVÉ | result_json `semanticQualification` |
| 5 | **S05 pending block** | OBSERVÉ | obs `d3.turn.s05_pending_block` 17:31:24.975Z + RJ `pendingEffectBlocked=true` |
| 6 | Document act qualification CREATE | OBSERVÉ | obs `documentary_intent_signal=true` `qualification_kind=CREATE` **`d4_attempted=false`** `d4_effect=null` |
| 7 | D4 seal/save | **NON OBSERVÉ / non exécuté** | `documentSave=null` ; gate `allowOwnerEffects` false |
| 8 | ACK NO_EFFECT_OBSERVED | OBSERVÉ | assistant content + code `service.ts` ~1516–1520 |
| 9 | Turn COMPLETE | OBSERVÉ | obs `d3.turn.completed` SUCCESS ; tool_calls=2 (history/read tools) |
| 10 | Documents persistés | OBSERVÉ négatif | COUNT documents prep/project = **0** |

---

## 5. Qualification D3 (intention Studio)

Depuis `result_json` du tour CREATE :

```text
semanticQualificationStatus: QUALIFIED
nextTurnKind: INTENTION_EFFET
intent.id: create-intervencia-framing-document
capabilityId: d4.create_document
mode: REQUEST_EFFECT
documentSource: { kind: PRIOR_ASSISTANT_MESSAGE, assistantMessageId: msg_3df5bcb8… }
documentSave: null
pendingEffectBlocked: true
pendingBlockReason: S05_PENDING_BLOCKS_EFFECT:turn-6424c417-8bf0-4732-a0fa-1e73444e9f70
unresolvedPendingClientTurnKey: turn-6424c417-8bf0-4732-a0fa-1e73444e9f70
toolCallsObserved: 2
d4CharsReturned: 30106
noraMode: openai-agents-sdk-live
humanDecisionCreated: false
```

**Réponse aux Q1–Q2 :** tour exact ci-dessus ; intention D4 `d4.create_document` REQUEST_EFFECT QUALIFIED — **PROVEN**.

---

## 6. H1 — Garde S05 (cause racine)

### Code

`findUnresolvedSiblingTurns` (`turn-command.ts` ~557–591) sélectionne les tours `RUNNING|ACCEPTED|UNKNOWN` de la même conversation/owner.

`service.ts` ~704–755 :

- si sibling/mission non résolu **et** `nextTurnKind ∈ {INTENTION_EFFET, INCERTAIN}` → `allowOwnerEffects=false`, `pendingEffectBlocked=true`, reason `S05_PENDING_BLOCKS_EFFECT:<key>`
- emit `d3.turn.s05_pending_block`

D4 CREATE (`service.ts` ~952+) n'entre que si `reply.status===COMPLETE && allowOwnerEffects`.

ACK (`service.ts` ~1516–1520) : si `documentAct≠NONE` mais pas de `documentSave` → `{status:UNKNOWN, reason:NO_EFFECT_OBSERVED}`.

### Sibling bloquant — PROVEN

```text
tcmd_e5b282ae-32fc-42b8-846d-82b491edc264
operation_id: op_2d4a8052-de41-43e0-bcea-657462bbff2c
client_turn_key: turn-6424c417-8bf0-4732-a0fa-1e73444e9f70
status: UNKNOWN (depuis 2026-11-12 20:58:16+00)
ordinals: user 3 / assistant 4
semanticQualificationStatus: UNAVAILABLE
nextTurnKind: INCERTAIN
intent historique: d5.pilotage_command OPEN_CYCLE sur « Projet Inexistant S02-06 »
documentSave: null
assistant status: UNKNOWN
```

Second sibling encore `UNKNOWN` sur la même conversation :

```text
tcmd_c31c1128… / turn-e5be1dd4-… / 2026-11-13 08:25 — aussi UNKNOWN
```

Le reason du tour Q3 cite **explicitement** `turn-6424c417…` — **PROVEN** comme clé de blocage appliquée.

### Réponses H1

| Question | Réponse | Niveau |
|---|---|---|
| S05 a-t-il bloqué le tour Q3 ? | **OUI** | PROVEN |
| Objet antérieur | Tour UNKNOWN S02-06 `turn-6424c417…` | PROVEN |
| Effet encore incertain ? | Pas d'effet D4/D5 persisté sur ce tour ; statut durable `UNKNOWN` (qualification UNAVAILABLE) | PROVEN |
| Légitime au code ? | OUI — conforme S05 actuel | PROVEN |
| Conforme au résultat produit attendu (CREATE autorisé) ? | **NON** — écart produit | STRONGLY SUPPORTED |
| Réconciliation disponible sans mutation diagnostique ? | Non exercée ; UI/API reconcile non prouvée ici | NOT OBSERVED |

Historique : plusieurs tours antérieurs portent déjà `S05_PENDING_BLOCKS_AMBIGUOUS:turn-6424c417…` — le sibling toxic est **connu depuis le 12/11**.

---

## 7. H2/H3/H4 — chemin documentaire

| Hypothèse | Verdict | Preuve |
|---|---|---|
| H2 source non admissible | **NON CONFIRMÉE comme cause** | Source msg a fence `sfia-document` ; Nora QUALIFIED avec `PRIOR_ASSISTANT_MESSAGE` ; restitution Q3-E02 positive |
| H3 qualification/admission invalide | **NON CONFIRMÉE comme cause** | Intent QUALIFIED REQUEST_EFFECT ; obs `qualification_kind=CREATE` |
| H4 exécution D4 échouée | **NON ATTEINTE** | `d4_attempted=false` ; `documentSave=null` ; gate S05 avant seal/save |

Séparation des causes (taxonomie contrat) :

```text
qualification absente: NON (QUALIFIED)
effet bloqué: OUI — S05 (PROVEN)
source refusée: NON OBSERVÉ (non atteint)
commande non admise: NON OBSERVÉ (non atteint après blocage)
scellement impossible: NON OBSERVÉ (non appelé)
appel D4 échoué: NON — non appelé
effet persisté ACK absent: NON — 0 docs
effet non projeté UI: N/A
```

---

## 8. Réponses aux 14 questions du contrat

1. **Tour Q3 :** `op_39b85ba5…` / ord 61→62 / `tcmd_5ee79607…` — PROVEN unique.
2. **Intention D4 :** `d4.create_document` REQUEST_EFFECT QUALIFIED + documentSource prior msg — PROVEN.
3. **État S05 :** blocked ; reason `S05_PENDING_BLOCKS_EFFECT:turn-6424c417…` — PROVEN.
4. **Garde :** S05 `allowOwnerEffects=false` — PROVEN.
5. **Source historique admissible ?** Suffisamment pour qualification/source binding — STRONGLY SUPPORTED ; admission D4 non testée (non atteinte).
6. **Commande documentaire créée/scellée ?** Non — `documentSave=null` — PROVEN.
7. **Service D4 appelé ?** Non (`d4_attempted=false`) — PROVEN.
8. **Document/révision persistés ?** 0 — PROVEN.
9. **Pourquoi UNKNOWN/NO_EFFECT_OBSERVED ?** Acte CREATE projeté sans `documentSave` après blocage S05 → branche ACK `service.ts` ~1516–1520 — PROVEN.
10. **Mécanisme bout-en-bout :** intention indépendante CREATE bloquée par sibling UNKNOWN historique S02-06 via S05 — PROVEN.
11. **Preuves manquantes :** contenu exact `meta` obs s05 (sink vide malgré emit code) ; ordre SQL des siblings non déterministe ; parcours reconcile utilisateur ; éventuel `clientPendingHint` exact du navigateur.
12. **Correction intégrée (non implémentée) :** voir §F.
13. **Tests futurs :** voir §G.
14. **Gates Morris :** GO correctif macro-lot ; politique sur `UNKNOWN` durables ; reprise Q3 ; pas de purge silencieuse ; pas STABLE/ADOPTED.

---

## 9. Diagnostic différentiel

| Cause candidate | Statut |
|---|---|
| Nora n'a pas compris l'autorisation | REJETÉE — QUALIFIED REQUEST_EFFECT |
| Fixture / non-LIVE | REJETÉE — mode openai-agents-sdk-live + provider attempt |
| Échec PostgreSQL D4 | REJETÉE — D4 non appelé |
| Source historique illisible | REJETÉE comme root — fence + QUALIFIED source |
| Bug seal/idempotence D4 | NON ATTEINT |
| **S05 sibling UNKNOWN bloque INTENTION_EFFET** | **PROVEN — ROOT** |
| Mission ACTIVE bloquante | NON OBSERVÉ (reason cite turn key, pas mission) |

---

## 10. Architecture & couverture tests

- Architecture respectée : Nora qualifie ; Studio garde/effets ; Pilote autorise — **PROVEN**.
- Tests S05 (`ml4c-s05-*.pg.test.ts`, e2e) **attendent** `pendingEffectBlocked=true` en présence de sibling unresolved — le comportement Q3 est **couvert comme garde**, pas comme **échec produit** d'un CREATE légitime après UNKNOWN « mort » multi-jours.
- Manques de couverture vs Q3 :
  - conversation longue RECETTE avec UNKNOWN stale + CREATE indépendant + ACK compréhensible ;
  - distinction UNKNOWN sans effet métier vs RUNNING/ACCEPTED à risque de doublon ;
  - UX/reconcile pour lever le blocage sans purge dangereuse ;
  - assertion que `pendingBlockReason` apparaît clairement côté UI (page projet lit `pendingEffectBlocked` ~717).

Fake/Real :

- Tests DEV/E2E S05 : DETERMINISTIC PROVEN à leur portée
- Nora LIVE Q3 tour : LIVE (provider attempt) — pas de nouvel appel dans ce diagnostic
- CREATE D4 Q3 : NON PROVEN (bloqué avant effet)

---

## 11. Risques & blast radius d'un correctif futur

| Zone | Risque |
|---|---|
| D3 service / S05 | Changer la politique de blocage peut réintroduire doubles effets |
| Turn commands UNKNOWN | Résolution/expiry mal conçue → perte d'audit ou false COMPLETE |
| D4 | Si on bypasse S05 sans garde → doublons documents |
| UI ACK | Clarifier NO_EFFECT vs S05_PENDING évite faux diagnostics D4 |
| Tests | Doivent figer les deux postures : sécurité S05 **et** progrès intention indépendante |
| Données RECETTE | Toute purge UNKNOWN exige GO Morris explicite |

---

## F. Options de correction recommandées (SANS implémentation)

**Macro-lot unique proposé (si Morris GO) :** « S05 continuity — independent effect vs stale UNKNOWN »

1. **Politique S05 raffinée** : ne bloquer INTENTION_EFFET indépendante que si le sibling unresolved présente un **risque d'effet métier concurrent** (ex. RUNNING/ACCEPTED avec documentSave/pilotage en cours), pas un UNKNOWN terminal de qualification UNAVAILABLE sans effet.
2. **Réconciliation gouvernée** : action Pilote/Studio pour classer un UNKNOWN stale (sans le faire passer COMPLETE frauduleux) — ex. `ABANDONED`/`SUPERSEDED` sous HumanDecision / procédure.
3. **ACK loyal** : si `pendingEffectBlocked`, afficher raison S05 + clé du tour bloquant, pas seulement `NO_EFFECT_OBSERVED`.
4. **Observabilité** : garantir persistance `meta` de `d3.turn.s05_pending_block` (aujourd'hui emit code vs sink `meta:{}` — écart à corriger).
5. **Tests + as-built + journal** : scénario clone S03-01 avec sibling UNKNOWN S02-06-like ; non-régression S05 anti-doublon.
6. **Pas** de contournement lexical, pas de second journal d'effets, pas de disable S05 global, pas de purge automatique silencieuse.

---

## G. Contrat de preuve du futur correctif

- Unité : politique S05 / classification UNKNOWN
- PG : sibling UNKNOWN stale n'empêche plus CREATE indépendant **quand** critères de non-risque ; sibling RUNNING avec effet potentiel bloque toujours
- E2E : S03-01-like → document AVAILABLE + ACK sans NO_EFFECT si autorisé
- RECETTE : retest S03-01 sous GO Q3 ; bibliothèque ≥1 doc ; pas de doublon
- Obs : `d4_attempted=true` / `documentSave.status=AVAILABLE` sur tour succès ; `s05_pending_block` absent ou reason mission/sibling à risque uniquement

---

## H. Décision attendue de Morris

1. Accepter ce diagnostic (root S05 / UNKNOWN stale) ?
2. Autoriser un macro-lot correctif borné (politique S05 + UX ACK + tests + docs) **sans** merge STABLE ?
3. Politique sur les 2 UNKNOWN existants en RECETTE (conserver / procédure de clôture) ?
4. Reprise Q3 après correctif déployé — uniquement S03-01 d'abord ?

**Non déclarable :** FIXED / S03-01 PASS / ML4C ACCEPTED / Gate C closed / STABLE / ADOPTED.

---

## I. Review Pack / handoff

Pack local : `.tmp-sfia-review/chatgpt-review.md` (réinitialisé ce cycle).

Publication L3 :

```text
Branch: sfia/review-handoff
File: sfia-review-handoff/latest-chatgpt-review.md
Mode: publish-in-cycle
```

*(Identifiants commit/parent/blob définitifs + readback dans le rapport final Cursor post-publish. Instantané « EN ATTENTE » ici ≠ preuve remote.)*

### Instruction ChatGPT obligatoire

Avant de répondre à Morris, consulter depuis Git :

- Branche `sfia/review-handoff`
- Fichier `sfia-review-handoff/latest-chatgpt-review.md`
- Vérifier identité cycle, HEAD, preuves D3/D4/S05, root cause, réserves, verdict, commit handoff et relecture distante
- Produire une revue critique ; ne pas transformer les hypothèses en décisions validées

---

## Verdict final

**DIAGNOSTIC COMPLETE — ROOT CAUSE PROVEN**

Root : garde S05 a bloqué l'effet CREATE D4 du tour Q3 à cause du sibling durable `UNKNOWN` `turn-6424c417-8bf0-4732-a0fa-1e73444e9f70` (S02-06, 12/11), produisant `NO_EFFECT_OBSERVED` sans appel D4 et 0 document.

---

*Fin Review Pack FULL — ML4C-A-010 — instantané pré-publication L3*

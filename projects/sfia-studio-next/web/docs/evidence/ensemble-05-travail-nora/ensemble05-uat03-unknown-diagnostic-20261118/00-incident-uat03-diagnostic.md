# Incident UAT-03 — Diagnostic forensique (lecture seule)

**Date :** 2026-11-18  
**Verdict proposé :** `UAT-03 PARTIAL DIAGNOSIS — ADDITIONAL EVIDENCE REQUIRED`  
**Candidat inchangé :** `ba1e55ece782eb9f2bbfad9336ed346de1acf037` · build `_eeb9Jy2hV242myk86VTu`  
**Aucun correctif exécuté · aucun LIVE · aucune mutation RECETTE**

---

## A. Faits établis

| # | Fait | Source | ID / horodatage | Certitude |
|---|---|---|---|---|
| F1 | Runtime RECETTE = candidat ba1e55ec / build `_eeb9Jy2hV242myk86VTu` sur `:3200` | process cwd + SOURCE_SHA + BUILD_ID + OBS | PID 84964 | **CERTAIN** |
| F2 | Conversation ALTAÏR `conv_f9b3bf1d…` / projet `proj_d3b5272f…` | PG SELECT | — | **CERTAIN** |
| F3 | UAT-01 COMPLETE · gen `gen_720316c5…` · 15:30:17→15:31:00Z (~43 s) · profile analyse/medium | OBS + messages + turn_commands | ordinals 7–8 | **CERTAIN** |
| F4 | UAT-02 COMPLETE · gen `gen_64f36ad4…` · 15:34:45→15:35:43Z (~58 s) · profile investigation/high | OBS + DB | ordinals 9–10 | **CERTAIN** |
| F5 | UAT-03a UNKNOWN · user `msg_88b32468…` · assistant `msg_174a4e35…` · gen `gen_477cc5b1…` · op `op_ac1e145b…` · att `att_ae7edf9a…` · 15:38:47→15:39:32Z (~45 s) | OBS + DB | ordinals 11–12 | **CERTAIN** |
| F6 | UAT-03b UNKNOWN · user `msg_029d46db…` · assistant `msg_6bab037f…` · gen `gen_241e4a4a…` · op `op_cf8b8ead…` · att `att_7f9e76df…` · 15:40:16→15:41:05Z (~49 s) | OBS + DB | ordinals 13–14 | **CERTAIN** |
| F7 | Deux `client_turn_key` distincts — tentatives **indépendantes** (pas un replay idempotent) | turn_commands | ctk fingerprints OBS `de30a0258b83` / second turn distinct | **CERTAIN** |
| F8 | Message utilisateur persisté **avant** / pendant acceptation du tour (`d3.turn.accepted` puis provider_attempt) | OBS ordre + messages COMPLETE user | — | **CERTAIN** |
| F9 | Fournisseur **contacté** · stream **chunks livrés** · puis exception en `error_phase=stream_drain` | OBS meta + result_json `streaming.delivered=true` | — | **CERTAIN** |
| F10 | `error_category=PROVIDER_ERROR` · `error_name="h"` · `http_status=null` · `error_code=null` · `transport_kind=null` · `tool_calls_observed=0` · `cause_depth=1` | OBS | — | **CERTAIN** |
| F11 | Texte Pilote = message catch `nora-adapter.ts` L794–803 (pas le chemin « qualification vide » L822+) | code + contenu messages UNKNOWN | — | **CERTAIN** |
| F12 | Aucune `visualComposition` persistée sur les tours UNKNOWN ; `nextTurnKind=INCERTAIN` ; `humanDecisionCreated=false` ; `finalized=false` | result_json | — | **CERTAIN** |
| F13 | Schéma sequence autorise jusqu’à **8** steps (`detail` max 400) — demande UAT-03 = 6 étapes ⇒ **pas** un rejet de cardinalité max(8) | `visual-composition.ts` | — | **CERTAIN** |
| F14 | Budgets analyse TEST_BOUNDARY : `wallClockMs=120_000` — durées UAT-03 ≪ 120 s | `cognitive-policy.ts` + durées | — | **CERTAIN** |
| F15 | `AgentsError` pose `this.name = new.target.name` ⇒ nom minifié `"h"` en build prod Next **cohérent** avec sous-classe Agents SDK | `agents-core/errors.mjs` | — | **ÉLEVÉ** |
| F16 | Message SDK typique `Invalid output type: … schema validation…` est classé **PROVIDER_ERROR** (regex exige `output_type` underscore, pas `output type`) | test local de `categorizeProviderError` | — | **CERTAIN** (sur le code) |
| F17 | Message d’exception brut **non conservé** dans OBS (volontaire) | code extractProviderErrorDiagnostics | — | **CERTAIN** |

---

## B. Chronologie

```text
15:30:17Z  UAT-01 accepted → provider PARTIAL → 15:31:00 COMPLETE (comparison)
15:34:45Z  UAT-02 accepted → provider PARTIAL → 15:35:43 COMPLETE (matrix, investigation/high)
15:38:47Z  UAT-03a accepted (parcours 6 étapes)
15:38:47Z  policy analyse/medium/maxTurns=6 · provider_attempt PARTIAL
15:39:32Z  provider_attempt UNKNOWN · PROVIDER_ERROR · stream_drain · contacted=YES · delivered=true
15:39:32Z  turn.completed UNKNOWN · CAS applied · assistant msg UNKNOWN persisté
15:40:16Z  UAT-03b accepted (même texte, nouveau client_turn_key)
15:40:16Z  provider_attempt PARTIAL
15:41:05Z  provider_attempt UNKNOWN · même signature d’erreur
15:41:05Z  turn.completed UNKNOWN · CAS applied
```

---

## C. Cause racine

### Démontré — mécanisme UNKNOWN

**Premier point de défaillance :** exception levée pendant le drain/finalisation du stream Agents SDK (`run(..., {stream:true})`), **après** contact fournisseur et livraison de chunks, dans `generateNoraLiveViaAgentsSdk` / catch `nora-adapter.ts` ≈ L744–814.

**Symptôme Pilote :** message générique fail-closed « Nora LIVE UNKNOWN… ».  
**Comportement de sûreté :** une seule tentative ; pas de relance ; user message conservé ; pas d’effet métier inventé.

### Non démontré — nature exacte de l’exception fournisseur/SDK

`ROOT CAUSE NOT YET PROVEN` pour le **libellé exact** de l’exception (non journalisé).

**Hypothèse dominante (élevée, non prouvée) :** échec de validation de la sortie structurée (`NoraTurnQualificationAgentSchema` / composition `sequence`) au finalization SDK → `ModelBehaviorError` (« Invalid output type: … ») → nom minifié `"h"` → classé à tort `PROVIDER_ERROR` faute de regex.

**Hypothèses secondaires (plus faibles) :** erreur transport/API sans status capturé ; autre `AgentsError` non schema ; timeout modèle mal catégorisé (durées ≪ wallClock rendent peu probable un abort wall local).

---

## D. Localisation technique

| Élément | Référence |
|---|---|
| Affichage UNKNOWN | `nora-adapter.ts` L794–803 |
| Classification | `categorizeProviderError` L151–175 |
| Diagnostics OBS | `extractProviderErrorDiagnostics` L186+ |
| Stream LIVE | `generateNoraLiveViaAgentsSdk` L667–814 |
| Schéma sequence | `visual-composition.ts` L456–471 (`steps.max(8)`, `detail.max(400)`) |
| Couche | D3 adapter / OpenAI Agents SDK 0.21.0 / stream_drain |

---

## E. Portée

| Portée | Statut |
|---|---|
| Uniquement UAT-03 (deux tours) | **Démontré** sur traces RECETTE de cette session |
| Toute composition sequence | **Hypothèse** |
| Tout appel Nora | **Non supporté** (UAT-01/02 COMPLETE même build) |
| Panne fournisseur globale | **Non supporté** (contact YES, UAT-01/02 OK) |

---

## F. Intégrité des données

- User messages COMPLETE (ordinals 11, 13) — conservés.  
- Assistant UNKNOWN (12, 14) — enveloppe d’incertitude persistée.  
- Tours terminaux UNKNOWN ; `idempotentReplay=false` ; pas d’effet Git/humain.  
- **Risque de nouvelle exécution :** un nouvel envoi crée une **nouvelle** tentative indépendante (comme UAT-03b) — ne « réconcilie » pas 03a. Fail-closed correct.  
- Aucune tentative antérieure en attente de réconciliation détectée.

---

## G. Impact métier

UAT-03 bloqué. UAT-01/02 non invalidés. Autres scénarios RECETTE possibles **sous réserve** (même chemin D3). Pas de garantie de succès.

---

## H. Correctif recommandé (NON EXÉCUTÉ)

1. **Observabilité (prioritaire, faible blast radius)**  
   - Étendre `categorizeProviderError` : matcher `invalid output type`, `schema validation`, `ZodError`.  
   - Journaliser un `error_message_fingerprint` borné/allowlist (160 chars tronqués déjà produits par le SDK) **sans** body/prompt.  
   - Forcer `error.name` littéral stable (`ModelBehaviorError`) malgré minify (`Object.defineProperty` / string constante).  

2. **Schéma / prompt (si H1 confirmée après obs)**  
   - Assouplir `detail.max(400)` ou instructions D3 « champs courts » pour parcours multi-étapes.  
   - Ne pas élargir le schéma à l’aveugle sans preuve du path Zod.

3. **Validation**  
   - Tests unitaires classification.  
   - Level-B sequence 6 étapes.  
   - LIVE borné UAT-03 **seulement avec nouveau GO + budget**.  
   - Nouvelle candidate RECETTE si correctif code.

---

## I. Prévention

L’OBS actuelle prouve le **lieu** (stream_drain) mais **pas** la nature fine de l’erreur (`error_name` minifié + message absent + regex lacunaire). Améliorer la discrimination sans exposer le détail technique au Pilote.

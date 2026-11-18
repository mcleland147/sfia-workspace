# Review Pack FULL — Incident UAT-03 Nora LIVE UNKNOWN (diagnostic only)

**SFIA v2.6 · R5 / ML4D / Ensemble 05 · Audit projet / QA RECETTE**  
**Date/heure :** 2026-11-18 ≈ 16:47 CET / `2026-11-18T15:47:35Z`  
**Typologie :** INC — investigation sans modification technique  
**ENV-01 :** lecture seule RECETTE — respecté  
**Versioning :** candidat inchangé · **NO RELEASE**  
**LIVE :** aucun nouvel appel  
**Verdict unique :** `UAT-03 PARTIAL DIAGNOSIS — ADDITIONAL EVIDENCE REQUIRED`

---

## 1. Date et heure

Diagnostic forensique exécuté 2026-11-18 après UAT Morris (échecs ~15:38–15:41 UTC).

## 2. Git Truth Check

| Check | Valeur |
|---|---|
| toplevel | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| branche | `sfia/next-ml4d-ensemble05-composition-recette-candidate` |
| HEAD | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` |
| tree | `f94e8eccf912f76506702cd8c19a5e57df9b9ba2` |
| origin/main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| WT RECETTE servi | `…/ensemble05-recette-build-ba1e55ec` @ même SHA |
| BUILD servi | `_eeb9Jy2hV242myk86VTu` |
| PID :3200 | `84964` |
| Mutations Git produit | **aucune** |
| Push autorisé ce cycle | **handoff L3 uniquement** |

Worktree DEV conserve des preuves dirty hors runtime — **non servi**.

## 3. Sources et versions

- Contrat Morris : diagnostic UAT-03 lecture seule, aucun correctif / LIVE / mutation.
- Candidat delivery handoff `7fb78ce0` / blob `d1a02e56` (référence).
- Code inspecté : WT build ba1e55ec = runtime.
- Agents SDK `@openai/agents` **0.21.0** (agents-core errors / turnResolution).
- Matrice V0.9 (contexte ensemble) — non rejugée ici.

## 4. GO Morris exact

**ANALYSE ET DIAGNOSTIC UNIQUEMENT — AUCUN CORRECTIF AUTORISÉ**  
Aucun redémarrage, build, écriture DB, rollback, LIVE, push produit.

## 5. ENV-01 / lanes

| Lane | État |
|---|---|
| RECETTE | `http://127.0.0.1:3200` · PG `:5434` / `sfia_next_recette_ml4` · LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004` · config `~/.config/.../recette/.env.local` **non modifiée** |
| DEV | non muté |
| STABLE | non concernée |

Fingerprint config : clés inchangées ; `SFIA_COG_PROFILE_TYPE` présent → tours OBS en `TEST_BOUNDARY` (y compris UAT-01/02 réussis).

## 6. Build réellement servi

Confirmé aligné candidat : SHA `ba1e55ec…` · BUILD `_eeb9Jy2hV242myk86VTu` · OBS `source_sha` / `build_id` identiques sur les 4 tours UAT.

## 7. Les deux tours UAT-03 identifiés

### UAT-03a

| Champ | Valeur |
|---|---|
| conversation | `conv_f9b3bf1d-8a43-456e-8a1e-a95e84824134` |
| user | `msg_88b32468-c2ca-4341-b3c3-44c6d42371b3` · COMPLETE · ordinal 11 · `2026-11-18T15:38:47.455Z` |
| assistant | `msg_174a4e35-e69f-4261-abef-4a501fc9ccb8` · **UNKNOWN** · ordinal 12 · `15:39:32.255Z` |
| generation | `gen_477cc5b1-e5ce-43c7-9705-f33df69f8ff6` |
| operation | `op_ac1e145b-5cf1-4697-9f80-84b895a7bdcf` |
| request | `req_3dc3058c-5971-4759-87fa-fa04bd56449d` |
| attempt | `att_ae7edf9a-4b6a-46de-85a7-0afa4500f247` |
| turn_command | `tcmd_2e0875f0-1225-433c-a929-70b96b72c3c9` · status UNKNOWN · error_category UNKNOWN |

### UAT-03b

| Champ | Valeur |
|---|---|
| user | `msg_029d46db-91e0-4549-bc04-3e9be198cfaf` · COMPLETE · ordinal 13 · `15:40:16.785Z` |
| assistant | `msg_6bab037f-30cd-4031-8d8c-33980cd92ef3` · **UNKNOWN** · ordinal 14 · `15:41:05.429Z` |
| generation | `gen_241e4a4a-3b19-47f6-b795-7f49cf71ec1d` |
| operation | `op_cf8b8ead-e433-4e36-8f40-c3cd7e4392d8` |
| request | `req_bfd94624-9743-4568-ad6c-d9ed32fffa9d` |
| attempt | `att_7f9e76df-2e82-476f-a3fe-34e4c6a7f977` |
| turn_command | `tcmd_d556f25f-b446-4cc8-b8e6-eb24be6ab810` |

Texte user (préfixe) : parcours déploiement outil métier en six étapes (cadrer → … → généraliser) — **identique** sur les deux tours ; clés client **distinctes**.

## 8. Chronologie technique

Voir fiche `ensemble05-uat03-unknown-diagnostic-20261118/00-incident-uat03-diagnostic.md` §B.

Résumé : UAT-01/02 COMPLETE ; UAT-03a/b : accepted → policy → provider PARTIAL → (~45–49 s) → provider UNKNOWN (`stream_drain`) → turn UNKNOWN.

## 9. Extraits logs expurgés (OBS)

UAT-03a échec :

```json
{"event_name":"d3.nora.provider_attempt","generation_id":"gen_477cc5b1-…","attempt_id":"att_ae7edf9a-…","outcome":"UNKNOWN","error_category":"PROVIDER_ERROR","meta":{"provider_contacted":"YES","error_name":"h","error_code":null,"http_status":null,"transport_kind":null,"error_phase":"stream_drain","streaming_delivered":true,"cause_depth":1,"tool_calls_observed":0}}
```

UAT-03b : **même signature** (`error_name":"h"`, `stream_drain`, `streaming_delivered":true`).

stderr process : `TimeoutNegativeWarning` (durée négative → clamp 1) — **symptôme process**, non corrélé prouvé aux ~45 s (budget wall analyse = 120 s).

Aucun secret / DSN / cookie dans ces extraits.

## 10. État persistant vérifié (SELECT only)

- Counts / projets non altérés par ce diagnostic (lecture seule).  
- result_json UNKNOWN : `streaming.delivered=true`, `attempts[].providerContacted=YES`, `notes=PROVIDER_ERROR`, `nextTurnKind=INCERTAIN`, `humanDecisionCreated=false`, `idempotentReplay=false`, pas de visualComposition.  
- Contenu assistant = message fail-closed catch adapter.

## 11. Inspection chemin D3

Chaîne :

`Pilote → API conversation → persist user → policy → Agent(outputType=NoraTurnQualificationAgentSchema) → run(stream:true) → drain toTextStream / completed → validateNoraTurnQualification → persist`

**Rupture démontrée :** entre drain stream et retour COMPLETE — **exception catch** avant validation applicative réussie.

UAT-01 streaming notes succès : `structured_stream_drained_no_provisional_json`.

## 12. Point d’exception

| | |
|---|---|
| Fichier | `src/domains/conversation/nora-adapter.ts` |
| Fonction | chemin LIVE Agents SDK (catch autour de `run` / drain) |
| Phase | `stream_drain` (chunks déjà reçus) |
| Transition | provider PARTIAL → UNKNOWN ; turn → UNKNOWN ; CAS applied |
| UI | « Nora LIVE UNKNOWN: une seule tentative… » |

## 13. Comparaison UAT-01 / 02 / 03

| Dimension | UAT-01 | UAT-02 | UAT-03a/b |
|---|---|---|---|
| Build/SHA | ba1e55ec | idem | idem |
| Modèle | gpt-6.1-sol | idem | idem |
| Profile | analyse/medium | investigation/high | analyse/medium |
| maxTurns | 6 | 10 | 6 |
| Durée | ~43 s | ~58 s | ~45 / ~49 s |
| provider | YES | YES | YES puis exception |
| Résultat | COMPLETE | COMPLETE | UNKNOWN ×2 |
| Composition | comparison | matrix (kinds) | aucune persistée |

Conclusion comparative : **pas une panne globale Nora/fournisseur** sur ce build ; échec **spécifique aux deux tours UAT-03** (demande parcours 6 étapes).

## 14. Fake / Real

Frontière **REAL** : RECETTE → D3 → Agents SDK → fournisseur réel.  
Preuve : **Forensic REAL Trace Analysis** (OBS + PG).  
Aucun nouveau LIVE. Level-B antérieur non probant pour cette exception.

## 15. Cause démontrée vs hypothèses

### Démontré

1. Exception pendant finalisation/drain stream après contact réel.  
2. Classification `PROVIDER_ERROR` + affichage UNKNOWN fail-closed.  
3. Deux tentatives indépendantes, mêmes symptômes.  
4. Pas de réexécution automatique ; données user conservées.

### Hypothèse dominante (non prouvée — message absent)

Échec validation sortie structurée SDK (`ModelBehaviorError` / « Invalid output type… ») — cohérent avec : `stream_drain`, `delivered=true`, `error_name` minifié via `new.target.name`, regex qui **rate** `Invalid output type` (espace) et le classe `PROVIDER_ERROR`. Contraintes sequence (`detail`≤400, etc.) **peuvent** y contribuer ; **non démontré** sans message/path Zod.

### Écarté / faible

- Cardinalité `steps.max(8)` trop basse pour 6 étapes : **non**.  
- Wall-clock local 120 s atteint : **peu probable** (durées ~45 s).  
- Auth clé absente pré-contact : **non** (`provider_contacted=YES`, UAT-01/02 OK).

## 16. Impact / blast radius

P1 bloquant UAT-03. UAT-01/02 intacts. Correctif obs = blast radius faible. Correctif schéma/prompt = moyen ; nécessite requalification composition.

## 17. Correctif recommandé — NON EXÉCUTÉ

1. Observabilité : élargir `categorizeProviderError` ; fingerprint message borné ; noms d’erreur stables post-minify.  
2. Si confirmation schema : ajuster limites/instructions sequence (pas renderer).  
3. Tests : unit classification + Level-B sequence 6 steps + LIVE UAT-03 **sous nouveau GO/budget**.  
4. Redéploiement candidate RECETTE si code change.

## 18. Plan de test / déploiement éventuel

Diagnostic only — **pas de déploiement**. Prochain cycle correctif séparément.

## 19. Réserves / gates

- Message d’exception non récupérable sans instrumentation.  
- `TimeoutNegativeWarning` stderr non expliqué finement.  
- `TEST_BOUNDARY` en RECETTE : fait de config ; non causal exclusif (UAT-01/02 OK).  
- Aucune mutation effectuée.

## 20. Verdict unique

# `UAT-03 PARTIAL DIAGNOSIS — ADDITIONAL EVIDENCE REQUIRED`

Mécanisme UNKNOWN **expliqué et localisé**. Nature exacte de l’exception SDK/fournisseur **non prouvée** faute de message journalisé. Correctif obs prioritaire recommandé, non implémenté.

Fiche détaillée :  
`projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-unknown-diagnostic-20261118/00-incident-uat03-diagnostic.md`

---

## Anti-stub / secrets

Pack sans clés API, DSN, cookies, tokens. Identifiants techniques de tours uniquement.

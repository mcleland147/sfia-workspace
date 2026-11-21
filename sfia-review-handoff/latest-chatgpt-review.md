# SFIA Review Pack FULL — Ensemble 07 · Diagnostic transversal RECETTE Equip'Campus

**Cycle :** INC / audit lecture seule — anomalies fonctionnelles UAT Morris  
**Macro-lot :** R5 / ML4D / Ensemble 07  
**Mode :** FULL / Review Handoff required / publish-in-cycle / L3 mono-fichier  
**Versioning :** NO RELEASE · Gate C OPEN · STABLE NOT AVAILABLE  
**ENV-01 :** inspection RECETTE sans mutation  

## 0. Verdict

`DIAGNOSTIC COMPLETE WITH OPEN QUESTIONS — MORRIS ARBITRATION REQUIRED`

Racines démontrées pour **OPEN_CYCLE** (UAT-10) et la boucle de restitution (UAT-11). Questions ouvertes : mapping labels↔enums (arbitrage produit), synchro UI exacte (UAT-12), et politique LIVE vs fixture sur lane RECETTE (UAT-14).

**Aucune correction, écriture DB, replay GO, push projet, PR, merge ou déploiement.**

---

## 1. Git Truth et sources

| Élément | Valeur | Statut |
|---|---|---|
| Worktree ouvert | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` | OBSERVÉ |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` | OBSERVÉ |
| HEAD / tree | `6ecdb987ee867a04ff816b699eb8870ac200db0a` / `d0ad47ff515676f1c033a39030e886859f7272f7` | OBSERVÉ (= candidat) |
| origin/main | `6e93a33d64dfeea2eab88fb7896d733b34053f97` | OBSERVÉ |
| merge-base | `6e93a33d…` | OBSERVÉ |
| Dirty local | review pack + scripts `e07-*` untracked | OBSERVÉ (hors runtime) |
| Branche projet sur origin | absente | OBSERVÉ |
| PV UAT | `7c96bbed…:projects/sfia-studio-next/validation-qualite/ensemble-07-recette-utilisateur-20261121.md` | OBSERVÉ (lu intégralement) |
| Handoff déploiement | `2dc3e178…` | consulté |

Sources gouvernance/conception lues depuis le worktree candidat (SEF, roadmap, environnements, versioning, Nora/D5/D6, contrat UX E07, as-built). Routing SFIA v2.6 : appliqué (audit § lecture seule).

---

## 2. Identité RECETTE observée

| Champ | Valeur |
|---|---|
| URL | `http://127.0.0.1:3200` HTTP 200 |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` running |
| Program | `…/ensemble07-recette-build-6ecdb987/start-recette-ensemble07-6ecdb987.sh` |
| Build HTML | `armX_D1HJzN6q-4MuDpYv` |
| SOURCE SHA script | `6ecdb987…` |
| DB | `sfia_next_recette_ml4` @ `:5434` / container `sfia-next-recette-pg` |
| Mutations ce cycle | **aucune** |

---

## 3. Identité projet et tour diagnostiqués

| Champ | Valeur |
|---|---|
| Projet | **Equip'Campus** |
| projectId | `proj_a9ce5f43-a159-4a4b-acf6-826cb769088b` (confirmé = capture PV) |
| preparationId | `prep_dfef10b6-6ce4-4083-91be-3b557549949f` |
| conversationId | `conv_27a1c96b-f660-4038-80af-a44e2424d178` |
| pilot | `pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c` (mcleland147) |
| IQ | `iqop_09573e68-…` status **PROPOSED** TERMINAL |
| Trajectoire rev1 | `trj_683f2b24-…` **PROPOSED** (COGNITIVE_PROPOSAL) |
| Trajectoire rev2 | `trj_e2aa8bac-…` **RETAINED** (USER_MESSAGE) |
| Cycles ACTIVE | **0 lignes** `project_cycles` |
| Pilotage revision | **2** |

### Tour GO (UAT-10)

| Champ | Valeur |
|---|---|
| userMessageId | `msg_e0d323ce-5b76-459e-83dd-67a6b4fd88b6` |
| ordinal | 11 |
| clientTurnKey | `turn-6c13fff8-9aa0-4864-b186-cfef58a69736` |
| turnCommand | `tcmd_8c723293-…` COMPLETE |
| assistantMessageId | `msg_41ff4e25-…` ordinal 12 |
| Contenu USER | accord direction + « accord explicite pour ouvrir le premier cycle de cadrage » |

### Tour RETAIN (UAT-07/12 contexte)

| Champ | Valeur |
|---|---|
| userMessageId | `msg_4c09b27a-…` |
| content | `ok ca me va` |
| clientTurnKey | `turn-a85094b5-…` |
| bcmd | `bcmd_24a543e5-…` **RETAIN_TRAJECTORY APPLIED** |
| decision | `dec_f23e99ec-…` RETAIN_TRAJECTORY APPLICABLE |
| effect | RETAIN → `trj_e2aa8bac-…` |

---

## 4. Chronologie qualification → D5/D6 (DIAG-01)

```
01:20:05  USER GO durable (ordinal 11)
          → Nora LIVE (noraMode=openai-agents-sdk-live)
          → semanticQualification status=QUALIFIED
          → intent ouvrir-cadrage / d5.pilotage_command / REQUEST_EFFECT
          → parameters.pilotageOperation=OPEN_CYCLE
          → parameters.cycleType="cadrage"   ← label FR minuscule
01:20:40  applyConversationalAuthority / classifyCommand
          → isCycleType("cadrage") === false
          → cycleType stripped to undefined (service.ts ~630)
          → fromClearIntent OPEN_CYCLE without cycleType
          → REJECT INVALID "Type de cycle requis"
          → bcmd_9e4cb337… status=REJECTED, source_action_key=REJECT|INVALID|open
          → effects=[] ; humanDecisionCreated=false ; project_cycles still empty
01:20:40  assistant prose (replyDraft pré-écrit) :
          « ouverture effective reste à confirmer par Studio »
          (ne restitue PAS le REJECTED / reasonCode)
```

**Frontière d’arrêt PROUVÉE :** validation `isCycleType` dans `domains/pilotage/service.ts` (binding sémantique → ClearIntent), avant exécution d’ouverture / pin CKI.  
Ce n’est **pas** : absence de GO, D6 GO manquant, conflit de révision, ni cycle appliqué non projeté.

Référence code :

```630:632:projects/sfia-studio-next/web/src/domains/pilotage/service.ts
      cycleType: matched.cycleType && isCycleType(matched.cycleType) ? matched.cycleType : undefined,
      toCycleType:
        matched.toCycleType && isCycleType(matched.toCycleType) ? matched.toCycleType : undefined,
```

```439:440:projects/sfia-studio-next/web/src/domains/pilotage/service.ts
  if ((command.operation === "OPEN_CYCLE" || command.operation === "TRANSITION_CYCLE") && !command.cycleType && command.operation === "OPEN_CYCLE") {
    return { ok: false, reasonCode: "INVALID", reason: "Type de cycle requis", sourceActionKey: "REJECT|INVALID|open" };
```

Enum attendu (`cki-resolve.ts`) : `CADRAGE`, `CONCEPTION_FONCTIONNELLE`, `UX_UI`, … (15 types).  
Fixture E2E : `cycleType: "CADRAGE"` (uppercase) — d’où C2 PASS ACTIVE en déterministe.

---

## 5. État persistant réel (post-campagne)

| Artefact | État |
|---|---|
| `project_cycles` | vide |
| Trajectoire | RETAINED rev2, forecast cadrage→CF→UX |
| `business_commands` | PROPOSE APPLIED ; RETAIN APPLIED ; **OPEN REJECTED** |
| CKI | aucun pin (cohérent : pas d’OPEN) |
| IQ | PROPOSED terminal (proposition initiale) |

---

## 6. Ordre Nora / Studio / Nora (DIAG-02)

**OBSERVÉ dans `conversation/service.ts` :** génération Nora (`reply` + qualification + `replyDraft`) **puis** `applyConversationalAuthority` (D5/D6) **puis** persistance assistant = **contenu Nora d’origine** + `pilotageEffect` dans `result_json` seulement.

| Question | Réponse |
|---|---|
| Réponse avant/après D5 ? | Prose générée **avant** ; D5 ensuite ; **pas de réécriture** post-effet |
| Phase restitution post-effet ? | **NON OBSERVÉE** comme phase dédiée injectant le statut métier dans le message |
| Nora reçoit-elle le statut commande ? | Statut dans `result_json.pilotageEffect` (API turn) ; **pas** dans le texte assistant ordinal 12 |
| Refus/conflit récupérés dans la conversation ? | REJECTED durable en commande ; **absent** du discours Nora |
| Continuation post-REJECT ? | NON OBSERVÉE pour ce tour |
| Tests prouvant la boucle LIVE ? | E2E C2 prouve fixture `CADRAGE`→ACTIVE ; **ne prouve pas** LIVE label/`cadrage` ni restitution post-REJECT |

**Cause UAT-11 PROUVÉE (architecture actuelle) :** absence de restitution métier post-`pilotageEffect` dans le message Pilote ; le `replyDraft` anticipe « à confirmer par Studio » sans consommer le résultat REJECTED.

---

## 7. Causes racines démontrées

1. **UAT-10 — PROUVÉE :** OPEN_CYCLE tenté (CLEAR) mais `cycleType="cadrage"` rejeté par `isCycleType` → commande **REJECTED INVALID** → aucun cycle ACTIVE.  
2. **UAT-11 — PROUVÉE :** pas de passe de restitution conversationnelle après effet/refus D5.  
3. **UAT-12 — PARTIELLEMENT PROUVÉE :** RETAIN appliqué à 00:44:04 (persistance OK) ; affichage « orientation retenue » observé après refresh → **décalage UI / projection client**, pas défaut de persistance.  
4. **UAT-02 — PROUVÉE :** message `msg_mcont_…` « Suite de mission » contient projectId/status techniques (mission continuation).  
5. **UAT-08/09 — PROUVÉES (contexte) :** challenge ordinal 7–10 ; Nora a proposé 4 regroupements métier puis corrigé ; schéma sémantique accepte `cycleType` libre (`z.string`) ; pas d’injection catalogue `CYCLE_TYPES` dans le prompt Nora (seulement snippets pilotage/CKI projection).  
6. **UAT-14 — PROUVÉE pour les tours :** `noraMode=openai-agents-sdk-live` sur RETAIN et OPEN ; distinct des fixtures E2E.

---

## 8. Provenance LIVE (DIAG-05)

| Tour | noraMode | Preuve |
|---|---|---|
| RETAIN `ok ca me va` | `openai-agents-sdk-live` | `tcmd_565423d6… result_json` |
| OPEN GO cadrage | `openai-agents-sdk-live` | `tcmd_8c723293… result_json` ; attempts SUCCESS structured_non_stream ; toolCallsObserved=4 |
| E2E C2 | fixture `CADRAGE` | code `fixture-semantic-qualify.ts` |

**Note ENV (ouverte) :** `mustUseNoraFixture()` n’active la fixture que si `STUDIO_LANE=DEV`. Sur RECETTE, un `STUDIO_FORCE_NORA_FIXTURE=1` devrait normalement échouer en `NORA_FIXTURE_LANE_FORBIDDEN`. Les tours Equip'Campus sont pourtant LIVE. Environnement process exact **NON OBSERVÉ** (dump environ refusé) ; ne pas exposer de secrets. Arbitrage Morris : clarifier politique LIVE autorisée en RECETTE UAT.

Aucun nouvel appel LLM ce cycle.

---

## 9. Synchronisation Trajectoire / Projet / Travail / CKI (DIAG-03)

| Point | Constat |
|---|---|
| Quand RETAIN ? | 2026-11-21 00:44:04Z |
| Source | `msg_4c09b27a` « ok ca me va » |
| Révision | expected 1 → state 2 |
| API vérité | pilotage revision 2, trajectory RETAINED, cycle null |
| UI après refresh | cohérente avec DB (retenue, pas d’ACTIVE) |
| Après GO | toujours pas d’ACTIVE (cohérent avec REJECT) |
| Polling | `refreshDurablePilotage` après tours Travail / load initial ; `selectSurface` **ne** refetch pas seul |
| Rendu compact « orientation retenue » | `TrajectoryBoard` branche `showRetainedWithoutCycle` — état métier valide, UX Figma distincte (UAT-13) |

**Verdict :** persistance OK ; synchro immédiate cross-surface **non garantie** sans refresh/load — HYPOTHÈSE UI (pas de mutation pour confirmer).

---

## 10. Catalogue cycles / CKI (DIAG-04)

| Point | Constat |
|---|---|
| Types code | 15 `CYCLE_TYPES` dans `cki-resolve.ts` |
| Fourni à Nora | projection pilotage/CKI snippets ; **pas** la liste enum complète forcée |
| Schéma sémantique | `cycleType: z.string()` — accepte « cadrage » |
| Gate D5 | `isCycleType` strict enum |
| Connaître vs activer CKI | CKI pin seulement à OPEN réussi (`resolveForOpen`) — absents tant que REJECT |
| Cause 4 « cycles » métier | raisonnement LIVE libre vs taxonomie produit — corrigé après objection Pilote |

---

## 11. Diagnostic Figma (DIAG-06) — lecture seule

| Check | Résultat |
|---|---|
| MCP accessible | **OUI** — session `3bdd7010-…` ; `get_metadata` 999:261 |
| get_design_context | utilisé en diagnostic géométrique préalable (même file) |
| Frames 09.06 / 09.11 | 1680×970 ; positions absolues ; instances rail/header ; gaps ≈22px (cartes) / ≈49px (cycles) |
| Auto Layout explicite | peu visible dans export (absolu dominant) |
| Runtime | flex/`clamp`/`space-y-*` + quelques largeurs 438/404/1358 |
| Comparaison mesurée viewport | **NON FAITE** ce cycle (pas de campagne bbox) |
| Verdict | **écarts géométriques plausibles** (source absolue + CSS fluide + QA visuelle) — **pas de déclaration pixel-perfect** |

Écarts classés : source Figma (absolu) · transmission (pas de table de mapping) · CSS (clamp/gaps) · QA (captures sans Δpx).

---

## 12. Matrice E07-UAT-01 → 14

| Réf | Observation PV | Composant | Cause | Preuve | Impact | Sévérité | Correction candidate (principe) | Test de sortie | Dépendance |
|---|---|---|---|---|---|---|---|---|---|
| UAT-01 | Pop-up SAS peu fidèle | SasCreateProgressPopup / CSS | HYPOTHÈSE géométrie | PV + Figma 1022:112 | UX | Moyenne | tokens/layout SAS | capture 1680 viewport | lot UX |
| UAT-02 | Message mission technique | mission-continuation | **PROUVÉE** | `msg_mcont_…` contenu projectId/status | UX / confiance | Haute | séparer trace technique / prose métier | plus de IDs bruts dans fil | lot restitution |
| UAT-03 | Trajectoire initiale compacte | TrajectoryBoard | HYPOTHÈSE CSS vs 09.11 | PV + metadata Figma | UX | Moyenne | mapping géométrie 09.11 | Δpx ≤seuil | lot UX |
| UAT-04 | Projet séparateur manquant | ProjectOverview | HYPOTHÈSE | PV + 09.06 | UX | Moyenne | séparateur Figma | revue visuelle | lot UX |
| UAT-05 | Cartes activité | ProjectOverview ActivityCard | HYPOTHÈSE | code w=438 vs layout Figma | UX | Moyenne | hiérarchie/gaps | 09.06 | lot UX |
| UAT-06 | Justification SAS→cycles | Nora LIVE / forecast | HYPOTHÈSE | PV SC-06 | cognitif | Moyenne | expliciter mapping métier→CYCLE_TYPES | challenge sans 4 faux cycles | lot catalogue |
| UAT-07 | Transition création | popup/UI | NON ÉTABLIE (NOT RUN) | PV | UX | À qualifier | scénario dédié | observer 1→2→3 | — |
| UAT-08 | 4 phases comme cycles | Nora LIVE | **PROUVÉE** (comportement) | msgs 7–10 | cognitif | Haute | garde-fou taxonomie + prompt | challenge PASS | lot catalogue |
| UAT-09 | « pas catalogue complet » | contexte D3 | **PROUVÉE** (absence liste enum) | nora-adapter snippets ; z.string cycleType | cognitif / D5 | Haute | exposer **référentiel court** types (pas 15 CKI full) | Nora cite types supportés | lot catalogue + UAT-10 |
| UAT-10 | GO sans ACTIVE | pilotage classify/`isCycleType` | **PROUVÉE** | bcmd REJECTED ; sem `cycleType=cadrage` | autorité / continuité | **Bloquante parcours** | normaliser label→enum **avant** classify ; ou schema enum | GO→ACTIVE+CKI | lot ouverture |
| UAT-11 | Pas restitution post-effet | conversation/service | **PROUVÉE** | replyDraft vs pilotageEffect REJECTED | UX / autorité | **Bloquante parcours** | restitution métier post-D5 (succès/refus) sans 2e moteur concurrent | message refuse/succès exact | lot restitution + UAT-10 |
| UAT-12 | Retenue après refresh | client projection | PARTIELLE | RETAIN APPLIED 00:44 ; PV refresh | continuité UI | Haute | invalider/rafraîchir Trajectoire après effet | sans refresh manuel | lot sync |
| UAT-13 | Variante compacte retenue | TrajectoryBoard | HYPOTHÈSE UX | code `showRetainedWithoutCycle` | UX | Moyenne | aligner frame Figma état retenu | revue Morris | lot UX |
| UAT-14 | LIVE vs fixture | nora-adapter + env | **PROUVÉE** mode LIVE tours | result_json noraMode | tests / gouvernance | À qualifier | politique RECETTE LIVE explicite | corrélation tour↔mode | arbitrage Morris |

---

## 13. Risques et impacts

- **Parcours GO naturel LIVE cassé** tant que les labels FR ne mappent pas vers `CYCLE_TYPES`.  
- **Fausse confiance** : Nora annonce GO clair + « Studio confirmera » alors que Studio a **déjà refusé**.  
- E2E déterministe **masque** le défaut (fixture `CADRAGE`).  
- Synchro UI insuffisante → diagnostics utilisateur erronés (« rien n’a bougé » vs RETAIN ok).  
- Message mission technique (UAT-02) pollue le contrat cognitif.

---

## 14. Macro-lots correctifs proposés (sans implémentation)

### ML-A — Ouverture gouvernée + taxonomie (priorité 1)

- Normalisation `cycleType` (synonymes FR/EN → enum) à la frontière sémantique→D5.  
- Échec **explicite** si type non normalisable (reason métier, pas silence).  
- Référentiel court des types supportés dans le contexte Nora (sans 15 fiches CKI).  
- Exit : GO Equip'Campus-like LIVE → `project_cycles.status=ACTIVE` + CKI associé + message métier de succès.

### ML-B — Restitution post-effet Nora↔Studio (priorité 1, couple avec A)

- Après D5/D6, garantir une restitution Pilote fondée sur `pilotageEffect` (APPLIED/REJECTED/CONFLICT/UNKNOWN).  
- Filtrer / ne pas présenter les traces mission techniques comme prose Nora (UAT-02).  
- Exit : refus « type invalide » **ou** succès d’ouverture **visibles dans Travail** sans refresh mystérieux.

### ML-C — Synchronisation projections (priorité 2)

- Après effet pilotage, invalider/rafraîchir surfaces Trajectoire/Projet/CKI.  
- Exit : RETAIN/OPEN visibles sans F5.

### ML-D — Fidélité Figma 09.06 / 09.11 / SAS (priorité 3)

- Table de mapping géométrique + QA Δpx viewport 1680×970.  
- Exit : revue Morris géométrie (pas acceptation produit globale).

**Ne pas** élargir D3/D5/D6 par un second moteur conversationnel.

---

## 15. Preuves à acquérir après correction

- Tour LIVE avec `cycleType` normalisé → bcmd OPEN **APPLIED** + ligne `project_cycles` ACTIVE.  
- Texte assistant contenant le résultat métier aligné sur `pilotageEffect`.  
- Capture Trajectoire/CKI/Projet sans refresh manuel.  
- E2E : cas label FR `cadrage` / `Cadrage` en plus de `CADRAGE`.  
- Matrice Figma mesurée 09.06/09.11.

---

## 16. Décisions Morris restantes

1. Autoriser **LIVE en RECETTE UAT** explicitement, ou imposer déterministe (aujourd’hui tension env/code/preuves) ?  
2. Normalisation : mapping synonymes automatique vs rejet pédagogique demandant le type enum ?  
3. Restitution : template déterministe post-effet vs second passage cognitif borné ?  
4. Ordre des macro-lots : confirmer **ML-A+B avant UX** ?

---

## 17. Confirmation absence de modification

- Aucune modification code / tests / schéma / config produit.  
- Aucune écriture DB / migration / replay GO / nouveau message Nora / appel LLM.  
- Aucun redémarrage RECETTE, push branche projet, PR, merge, release, STABLE.  
- Figma non modifié.  
- Seuls : lecture Git/DB/logs, inspection Figma RO, Review Pack local, handoff L3.

---

## Instruction ChatGPT

**Relire la version distante** `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` (SHA/blob du commit handoff ci-dessous) **avant** revue Morris. Vérifier surtout DIAG-01 (REJECT `cadrage`→`isCycleType`), DIAG-02 (pas de restitution post-effet), et la matrice UAT-10/11.

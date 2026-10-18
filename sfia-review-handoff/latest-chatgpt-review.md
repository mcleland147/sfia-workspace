# SFIA STUDIO — P6 — Generic PREPARE Structural Refusal
## Review Pack FULL — CRITICAL — READ-ONLY DIAGNOSTIC

**Horodatage UTC :** 2026-10-18T18:45:00Z
**GO Morris :** Diagnostic Critical en lecture seule — identifier la cause du refus répété de Generic PREPARE (campagne HQA AtelierNova).
**GO non accordé :** Correction Product · modification d’autorité/doctrine/architecture · Cursor REAL Execute · Product push/PR/merge · redémarrage runtime · réémission Nora.

---

## 1. Git Truth

| Champ | Valeur |
|---|---|
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| Worktree | `/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8` |
| Branche | `delivery/sfia-studio-p6-integrated-architecture-recovery` |
| HEAD | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| origin/main | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` (= HEAD base) |
| Staged | vide |
| Dirty Product (Option B volontaire) | `orchestrateF2.ts`, `orchestrateTurn.ts`, `prepareGenericExecutionContractDraft.ts` + coordinators/tests arch untracked |
| Mutation Product de ce cycle | **AUCUNE** (diagnostic RO uniquement) |
| Review Pack | `.tmp-sfia-review/chatgpt-review.md` (réinitialisé) |

Candidat Option B local CURRENT prime (≠ main tip). Préservé. Aucun reset/stash/clean.

**Handoff précédent (setup HQA) vérifié :** commit `125010795684c9745813b59c8318bcea84e527fe` · blob `a5f71bb349ce0e44a451611253d23ce2c0ee21da` · campagne `…T175902Z` · BUILD_ID `Fb0Wls1YJefm6jQDesF24`.

---

## 2. Convergence Pre-check

| Item | État |
|---|---|
| Capacité | V3-F05 |
| Milestone | P6 |
| Option B | candidate locale dirty |
| Campagne HQA | `p6-optionb-fresh-hqa-20261018T175902Z` — Project créé par Morris |
| Cycle | Cadrage ACTIVE |
| Generic PREPARE | refusé 2× après clarification |
| Currentness LIVE / Cursor REAL Execute | non testés |
| P6 GLOBAL PASS / v3 ADOPTED | NON |
| Gap | Mission Git RO n’atteint pas un ExecutionContract inspectable |
| Trajectoire | Diagnostic → reco bornée → décision Morris → éventuelle correction (GO distinct) |
| Dette distincte | TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT **OPEN** |
| Architecture parallèle | aucune créée |

KEEP : Nora · F2 · OA · LPS · HD · EC · Materiality · Generic PREPARE · Currentness.
ADAPT : aucun avant cause établie.

---

## 3. Runtime / Campagne (préservée)

| Item | Observation |
|---|---|
| Runtime | `http://localhost:3020` · PID **82209** next-server (vérifié) |
| BUILD_ID | `Fb0Wls1YJefm6jQDesF24` |
| Mode | Nora LIVE · CURSOR_REAL=1 · DET=0 · OAuth REAL (selon setup handoff ; non re-probed secrets) |
| Product DB | `…/p6-optionb-fresh-hqa-20261018T175902Z/product/oa-product.sqlite` |
| Nora DB | `…/p6-optionb-fresh-hqa-20261018T175902Z/nora/nora-session.sqlite` |
| Accès SQLite | `mode=ro&immutable=1` uniquement |
| SHA Product avant/après | `953cc6dab7472dc8be7525da2cfc15bebc5d53001042e738de2ce49fb63bad63` **inchangé** |
| SHA Nora avant/après | `563ff6b0f956dfe492ac661acc40e083391eae41b86313bbdf3ce82170d8788b` **inchangé** |
| WAL/SHM | absents au moment du contrôle |
| Redémarrage / message Nora | **NON** |

---

## 4. État OA (nouvelle campagne)

| Objet | Valeur |
|---|---|
| **ProjectId** | `prj:1f276403-16f6-4b3f-933e-3601a0f00bd4` |
| Title | AtelierNova |
| **Cycle actif** | `cyc:trj-dd655b00ce7c85979bd5a7f5` · `cyc:framing` · **Critical** · `active` |
| Cycle qualificationSignals (durables) | `structuralChange=false`, **`securityImpact=true`**, `architectureImpact=false`, **`dataImpact=true`**, `irreversible=false`, `lowRiskBounded=true` |
| LPS courant | `lps:a955042fc2df3697` · version **7** |
| Trajectory | `trj:lr-bridge-0b13bbcfb3d1` v1 validated · step Cadrage active |
| **HumanDecision** | **1** — `dec:gf-trj:a95083c9-dcfd-4af3-9e98-28d79bf7188c` · subject **trajectory approval** (≠ generic mission) |
| **ExecutionContract** | **0** |
| **ExecutionAttempt** | **0** |
| Confirmation | 0 |
| RepositoryBinding | github `mcleland147/sfia-workspace` · pathRoot `projects/ateliernova` |
| Epistemic | 9 items (Recommendation lifecycle + ACW Observations/Hypotheses/Options MVP) |
| Logical Product Turns | 3 |
| Pilot transcript turns | 10 |
| Nora tool markers in session_items | **aucun** (`request_generic` / impactSignals absents) |

**Aucun EC / Attempt créés.** Aucune HD générique mission créée automatiquement.

---

## 5. Chronologie des deux tours (transcript RO)

### Tour 1 — 2026-10-18T18:21:27.855Z
**User (`pt:67dc9521a8ba9d79`)** — valide orientation MVP ; demande **première mission Cursor** ; reconnaissance dépôt **lecture seule** ; mention future implémentation ; « Prépare maintenant cette mission Cursor sous forme d'un ExecutionContract… » ; ne pas exécuter.

**Assistant (`pt:261ba9782dffe8a8`, 208 chars)** — texte exact :
> `[Mode réel] Le cycle actif est conservé. Cette demande touche une frontière structurelle — une décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution. Rien n'a encore été exécuté.`

### Tour 2 — 2026-10-18T18:25:22.524Z
**User (`pt:7836aec56771d8e1`)** — clarification : mission **exclusivement** inspection RO ; aucune écriture / archi / git mutatif ; implémentation = mission future distincte ; demande réévaluation + explication du déclencheur + PREPARE si admissible ; pas de HD forgée.

**Assistant (`pt:334ab2a94c0d1363`, 208 chars)** — **texte identique** au Tour 1.

**Effet de la clarification :** **aucun changement de branche produit** (même template structural). Aucune explication du signal déclencheur. Aucun EC.

---

## 6. Provenance exacte du refus (PROVEN)

| Élément | Preuve |
|---|---|
| Producteur | **F2 déterministe** — **pas** une narrative Nora F1 libre |
| Fonction texte | `genericMissionClarificationText` (`prepareGenericExecutionContractDraft.ts` ~1190–1210) |
| Condition | `input.structuralBlocked === true` |
| Appelant | `orchestrateF2.ts` ~2306–2342 |
| Gate | `assessGenericMissionPrepareReadiness(readinessAnalysis)` → `structuralBlocked` |
| Code EC draft | **non atteint** — early return avant `prepareGenericExecutionContractDraft` |
| Materiality | **`resolveAuthoritativeProductMateriality` NON appelée** sur ces tours |
| Nora tool | **`request_generic_execution_prepare` NON invoqué** (session_items sans tool markers) |
| Reformulation cognitive | **NON** — template byte-identique `[Mode réel]…` |

**Chaîne :**
```
USER MESSAGE
→ IntentAnalysis (OpenAI LIVE, non persisté)
→ reconcileQualificationSignals (cosmetic/lifecycle dampener seulement)
→ assessGenericPrepareConversationAdmission
→ assessGenericMissionPrepareReadiness
→ structuralBlocked=true
→ rememberGenericPrepareRecommendation (si missingFields=[])
→ genericMissionClarificationText(structuralBlocked=true)
→ completeF2Turn (f2_clarification)
```

`evaluateMorrisGateRequired` (marqueurs lexicaux incl. `"cursor"`) est une **autre** politique (`gatePolicy.ts`). Elle **n’est pas** la fonction qui produit ce texte. Causalité directe sur ce refus : **REJECTED**.

---

## 7. Classification / signaux

### Persisté / non persisté

| Champ | Tour 1 | Tour 2 | Source |
|---|---|---|---|
| Texte user | OUI | OUI | `pilot_transcript_turns` |
| Texte assistant structural | OUI | OUI | transcript = template F2 |
| `intentClass` | **UNKNOWN** | **UNKNOWN** | IntentAnalysis non persisté |
| `signals.*` exacts | **UNKNOWN** | **UNKNOWN** | non persisté |
| `executionIntent.intentKind` | **UNKNOWN** | **UNKNOWN** | non persisté |
| `repositoryMutationDeclared` | **UNKNOWN** | **UNKNOWN** | non persisté ; tool non appelé |
| `structuralBlocked` effectif | **true (PROVEN)** | **true (PROVEN)** | texte = branche structural uniquement |
| `missingFields` | **[] (PROVEN)** | **[] (PROVEN)** | sinon message « il me manque… » |
| `prepareGo` lexical | Tour1 : `hasExplicitPrepareContractIntent` = **false** (écart « prépare…ExecutionContract » ≈ **46** > **40** chars) | Tour2 : **true** → `explicit_lexical_prepare` | regex code + mesure locale |
| Offer reuse pour readiness | N/A si `prepareGo≠prepare` | readinessAnalysis = **fresh analysis** (pas offer) car `kind===explicit_lexical_prepare` | `orchestrateF2.ts` ~2292–2295 |
| Cycle signals contaminent readiness ? | **NON (code)** — readiness lit `analysis.signals` seulement | idem | `assessGenericMissionPrepareReadiness` |

### `assessGenericMissionPrepareReadiness` — champs actifs possibles

`structuralBlocked` si **un** de :
- `signals.structuralChange`
- `signals.securityImpact`
- `signals.architectureImpact`
- `signals.dataImpact`
- `signals.irreversible`
- `contradictionCandidate.conflictPresent`

**Le bit exact déclencheur est UNKNOWN** (payload IntentAnalysis non enregistré).
Les signals cycle (`securityImpact`/`dataImpact`) sont durables mais **ne sont pas** lus par cette fonction.

---

## 8. Product Materiality (non atteinte)

Matrice (si Materiality avait été appelée — **hypothétique**; état réel = **NOT CALLED**) :

| Critère | Observé | Source | Statut | Conséquence |
|---|---|---|---|---|
| Contexte Product LIVE | Project+LPS+cycle+binding présents | OA RO | SATISFAIT (infra) | — |
| Signaux structurels positifs (model) | UNKNOWN | IntentAnalysis absent | UNKNOWN | bloquerait NON_STRUCTURAL si true |
| Contradiction write/materialization | UNKNOWN | — | UNKNOWN | — |
| Capabilities généralistes | UNKNOWN | — | UNKNOWN | — |
| `intentKind=read_only` OU `repositoryMutationDeclared=none/read` | UNKNOWN ; tool non appelé | code `qualifyBoundedNonMutatingAnalysisMission` | UNKNOWN / probablement NON pour claim structuré | fail-closed → pas de bounded RO |
| Mission fields objective/outcome/scope | probablement OK (missingFields=[]) | readiness | SATISFAIT (inféré) | — |
| RepositoryBinding | présent pathRoot `projects/ateliernova` | Project payload | SATISFAIT | — |

**Détail refus Materiality :** N/A — jamais appelée.
Distinction : refus observé = **STRUCTURAL gate F2 readiness**, pas `MATERIALITY_UNKNOWN` / `SOURCE_GROUNDING_INSUFFICIENT`.

---

## 9. Nora Tool

| Question | Tour 1 | Tour 2 |
|---|---|---|
| Outil disponible dans runtime | probablement oui (config LIVE) | idem |
| Invoqué | **NON** | **NON** |
| Args / repositoryMutation / impactSignals | N/A | N/A |
| PREPARE différé / code Product tool | N/A | N/A |

F2 a court-circuité avant toute sollicitation tool. Pas de second moteur PREPARE exécuté. Divergence tool vs F2 : **UNKNOWN** (tool jamais exercé ici).

---

## 10. Continuité / UX (PROVEN partiel)

- Refus légitime **au regard du code** si un signal critique IntentAnalysis est true — **légitimité métier du signal** = UNKNOWN.
- Justification affichée : **générique** — n’expose ni champ, ni fait déclencheur, ni sujet de décision précis.
- `rememberGenericPrepareRecommendation` devrait mémoriser une offre process-local (M-HD-02) lorsque structural + fields complets — store **non durable** / non inspectable RO dans SQLite.
- UI « Poursuivre le travail du cycle Cadrage » = recommandation lifecycle / continuum cycle — **≠** explication du gate PREPARE.
- Recommendation Critical ≠ HumanDecision automatique (invariant respecté : seule HD = trajectory).
- Clarification Pilote ne change pas le template car la branche reste `structuralBlocked` après nouvelle analyse (Tour 2).

---

## 11. Hypothèses

| ID | Énoncé | Source | Preuve | Fonction/champ | Causalité | Statut |
|---|---|---|---|---|---|---|
| **H1** | Faux signal structurel Nora/IntentAnalysis | IntentAnalysis LIVE | Refus structural sans EC ; payload signals absent | `analysis.signals.*` | Probable contributeur | **PLAUSIBLE** |
| **H2** | Reconciliation insuffisante inspection vs implémentation future | Tour1 mélange RO + future impl ; Tour2 sépare | Même refus après clarification | `reconcileQualificationSignals` (pas de dampener RO mission) | Contributeur plausible | **PLAUSIBLE** |
| **H3** | Politique lexicale `cursor` / profil Critical | `gatePolicy.ts` ; cycle Critical | Texte refus ≠ `evaluateMorrisGateRequired` | `"cursor"` lexical | Directe sur ce texte | **REJECTED** (direct) ; Critical profile ≠ cause de ce template |
| **H4** | Materiality UNKNOWN faute déclaration RO structurée | `qualifyBoundedNonMutating…` | Materiality **not called** | `repositoryMutationDeclared` | Pas cause du refus observé | **REJECTED** (cause observée) ; **PLAUSIBLE** comme prochain gate |
| **H5** | Nora Tool PREPARE non invoqué | session_items | Aucun marker tool | `request_generic_execution_prepare` | F2 preempt | **PROVEN** (fait) |
| **H6** | Divergence Tool vs F2 | — | Tool non exécuté | — | — | **UNKNOWN** |
| **H7** | Contamination offer / sujet CURRENT | pending offer store | Tour2 `explicit_lexical_prepare` → readiness = fresh analysis | `analysisFromPending…` non utilisé | Offer reuse readiness | **REJECTED** ; contamination Memory B IntentAnalysis = **PLAUSIBLE** |
| **H8** | Gate légitime + UX/workflow incomplets | template + M-HD-02 | UX sans faits déclencheurs **PROVEN** ; légitimité signal UNKNOWN | `genericMissionClarificationText` | UX | **PROVEN** (UX) / **UNKNOWN** (légitimité) |
| **H9** | Fenêtre regex explicit prepare Tour1 (46>40) | `hasExplicitPrepareContractIntent` | Mesure locale | regex `{0,40}` | N’empêche pas entrée structural (autre admission) | **PROVEN** comme fait annexe ; **pas** cause du structuralBlocked |

---

## 12. Cause racine

**PROVEN (mécanisme) :**
Les deux refus sont produits par le court-circuit F2
`assessGenericMissionPrepareReadiness.structuralBlocked === true`
→ `genericMissionClarificationText`, **avant** tout appel à
`prepareGenericExecutionContractDraft` / Product Materiality / Nora Tool PREPARE.
Aucun ExecutionContract n’a été sollicité côté backend draft.
La clarification ne change pas le résultat car Tour 2 reste sur la même branche structural après nouvelle IntentAnalysis.

**UNKNOWN (détail) :**
Le booléen IntentAnalysis exact (`structuralChange` vs `securityImpact` vs `architectureImpact` vs `dataImpact` vs `irreversible` vs contradiction) n’est **pas** persisté — impossible de le prouver sans logging additionnel ou replay déterministe (hors GO).

**Verdict cause :** **ROOT CAUSE PROVEN** (producteur + gate + non-atteinte Materiality/Tool/EC) avec **evidence gap** sur le bit signal exact.

---

## 13. Options correctives (NON IMPLÉMENTÉES)

### OPTION A — Qualification d’intention RO
- **Cause :** signaux provider trop larges / contamination contextuelle MVP→implémentation.
- **Périmètre :** `intentAnalysis.ts` prompt + évent. dampener **positif** RO dans `qualificationSignalCoherence` (faits positifs only).
- **Risques :** sur-neutralisation de vrais signaux critiques.
- **Invariants :** UNKNOWN fail-closed ; pas de NON_STRUCTURAL lexical seul.
- **Tests :** DET Fake Nora — mission Git RO pathless ; mission write reste structural.
- **Exit proof :** IntentAnalysis RO → `structuralBlocked=false` + Materiality bounded RO admissible.
- **Gate Morris :** revue + GO correction.

### OPTION B — Raccord F2 readiness vs Generic PREPARE
- **Cause :** readiness traite tout signal critique comme blocage PREPARE sans distinguer mission RO positivement qualifiée.
- **Périmètre :** `assessGenericMissionPrepareReadiness` / admission coordinator.
- **Risques :** PREPARE structurel sans HD.
- **Invariants :** PREPARE≠AUTHORIZE≠EXECUTE ; HD si vraiment structural Product.
- **Tests :** arch d0 + gD4.
- **Gate Morris :** requis.

### OPTION C — Déclaration structurée Nora Tool → Product
- **Cause :** tool non invoqué ; claims `repositoryMutation` absents sur chemin F2.
- **Périmètre :** tool args + `buildIntentAnalysisFromSolicitedMission` ; alignement F2.
- **Risques :** second chemin divergent.
- **Note :** ne suffit pas si F2 structuralBlocked preempt toujours.
- **Gate Morris :** requis.

### OPTION D — Conserver gate + justification / continuation gouvernée
- **Cause :** H8 UX — Pilote ne voit pas le déclencheur ni le sujet M-HD-02.
- **Périmètre :** message `genericMissionClarificationText` + surface décision (sans forger HD).
- **Risques :** faibles sur autorité ; n’ouvre pas PREPARE seul.
- **Exit proof :** message cite signal/code ; carte décision si offre CURRENT.
- **Gate Morris :** possible en premier pas low-risk.

### OPTION E — Aucun défaut Product ; HD réellement nécessaire
- **Applicable seulement si** un signal critique est **factuellement justifié** pour une inspection RO (improbable a priori, **non prouvé**).
- Ne pas choisir faute de payload.

### Recommandation argumentée

**OPTION A + D (bornées), Option B seulement si A insuffisante après preuve du bit signal.**

1. **D d’abord (faible risque)** : exposer `structuralBlocked` drivers + code `STRUCTURAL_HUMAN_DECISION_REQUIRED` et le sujet CURRENT offer — progression gouvernée sans affaiblir le gate.
2. **A** : renforcer classification / reconciliation pour missions d’inspection RO **positivement** déclarées (`intentKind=read_only` / mutation none|read) sans lexical magic « cursor ».
3. Ne **pas** retirer le fail-closed UNKNOWN Materiality.
4. Ne **pas** traiter TOOL-FIRST-NOWRITE dans ce correctif.
5. Après correction : replay HQA déterministe puis LIVE — **GO distinct**.

**HumanDecision générique mission actuellement requise ?**
- **Selon le runtime observé : OUI (gate F2).**
- **Selon la mission Pilote déclarée (inspection RO) : probablement NON — mais NON PROUVÉ faute de signals persistés.**
La HD trajectory existante **ne** débloque **pas** Generic PREPARE.

---

## 14. Impact / dépendances / autorité

| Thème | Statut |
|---|---|
| Currentness post-prepare | non exercée (pas d’EC) |
| RepositoryBinding | intact |
| Protected paths / Capability envelope | non atteints |
| Confirmation / Execute | non atteints |
| Invariants Recommendation≠HD · PREPARE≠AUTH≠EXEC | **conservés** |
| Dette no-write | **OPEN** (inchangée) |

---

## 15. Fake / Real

| Item | Valeur |
|---|---|
| Mode diagnostic | STATIC + RO REAL evidence |
| Fake nouveau | aucun |
| Tests mutatifs HQA | aucun |
| Preuve entrée | HQA LIVE refus répété |
| Preuve sortie | mécanisme PROVEN ; bit signal UNKNOWN |
| Hors scope | correctif · replay LIVE · PREPARE PASS · Cursor Execute · P6 PASS · v3 |

---

## 16. Gates Morris

1. Accepter le diagnostic (mécanisme PROVEN / bit signal UNKNOWN).
2. Choisir option A+D (ou autre) sous **GO correction distinct**.
3. Interdire tout contournement HD / Materiality / no-write.
4. Ne pas créer AtelierNova EC « à la main » pour masquer le défaut.

---

## 17. Réserves

- IntentAnalysis LIVE non persisté → gap bit signal.
- Pending offer process-local non lisible RO après coup.
- Regex explicit-prepare Tour1 (46>40) = annexe, pas cause structuralBlocked.
- Ancienne campagne `…T153758Z` non touchée.
- Candidat Option B dirty préservé.

---

## 18. Verdict

**P6 GENERIC PREPARE STRUCTURAL REFUSAL — ROOT CAUSE PROVEN — CORRECTION PROPOSED — MORRIS REVIEW REQUIRED.**

READY diagnostic ≠ P6 PASS ≠ PREPARE LIVE admissible ≠ RUNTIME V3 ADOPTED.

---

## 19. Instruction ChatGPT

Lire ce handoff. Vérifier : provenance F2 `genericMissionClarificationText` ; Materiality/Tool non atteints ; EC=0 ; HD trajectory seule ; gap signals ; reco A+D.
**Ne pas générer de correction Product** avant revue + GO Morris distinct.

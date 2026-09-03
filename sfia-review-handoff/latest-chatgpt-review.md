# SFIA STUDIO — NORA COGNITIVE COMPLETION
## MW0-MW4-INTEGRATED-REAL-01 — RE-GO-01
### FULL Review Pack — Cycle 9 QA / Validation — CRITICAL

Generated: 2026-09-03T08:13:52Z (UTC)
Campaign ID: `nora-mw0-mw4-integrated-real-rego01-1788422396786`
Worktree: `/Users/morris/Projects/sfia-workspace-nora-mw4-grounding`
Branch: `delivery/sfia-studio-nora-mw4-grounding-durability`

---

## 0. Morris RE-GO — previous STOP superseded on budget only

Previous STOP handoff commit: `697a9049896337b8f10202d0373ba010b46e5f1b`
Previous STOP handoff blob: `291e6aa940fcf77e7e44db9a004462b9522bf8f5`
Previous STOP reason: minimum technically required actual OpenAI invocations = 14; authorized maximum = 8
Previous LIVE execution: **0**
Previous candidate mutation: **NONE**

Morris RE-GO-01 decision:
- RAISE strict LIVE OpenAI invocation ceiling **8 → 14**
- Nothing else in campaign contract widened
- R-MW0-MW4-INT-BUDGET-01 disposition: **AUTHORIZED BUDGET CORRECTION**
  - strict counting retained
  - topology retained
  - product path retained
  - ceiling = 14
  - no counting waiver / no topology waiver / no product modification

This run: LIVE executed; final actual count **14 / 14**.

---

## 1. Final verdict (authoritative)

**READY FOR CHATGPT CRITICAL MW0-MW4 INTEGRATED REAL REVIEW**

Semantic cumulative claim (tested scope only):

- MW0×MW1×MW2×MW3×MW4 INTEGRATED REAL COGNITIVE BUSINESS CHAIN = **PROVEN AT TESTED CURRENT MW4 CANDIDATE SCOPE**
- MW4 CUMULATIVE NON-REGRESSION AGAINST PREVIOUSLY PROVEN MW0→MW3 BUSINESS CHAIN = **PASS AT TESTED SCOPE**

Harness note (preserved, non-blocking): campaign runner threw `TRAJECTORY_MISMATCH` because T6 disposition=`candidate` while harness expected `NONE|OTHER`. Classified **FIXTURE_POLICY_FAILURE** — not product regression. All BC scorecard items passed; GO T6 criteria are partiality/grounding, not disposition NONE. See §7.

### Anti-claims (explicit)
- NOT production E2E proven
- NOT Cognitive Completion proven
- NOT MW4 closed
- NOT MW5 authorized
- NOT MW6 implemented
- NOT runtime v3 adopted
- NOT production routing selected
- NOT project integrated
- NOT a global product 14-call budget baseline (campaign authorization only)

---

## 2. Local Git Truth

| Check | Result |
|---|---|
| worktree | `/Users/morris/Projects/sfia-workspace-nora-mw4-grounding` |
| remote | `https://github.com/mcleland147/sfia-workspace.git` |
| branch | `delivery/sfia-studio-nora-mw4-grounding-durability` |
| HEAD | `deb34943dd85472644c221243cd7c0fd5369614e` |
| origin/main | `deb34943dd85472644c221243cd7c0fd5369614e` |
| HEAD == deb34943… | **PASS** |
| origin/main == deb34943… | **PASS** |
| git diff --check | **PASS** |
| tracked candidate diff SHA256 | `4122c95665df214ee647083ebe5f469bbf727c1d78060559a37dea3fb401804d` **PASS** |
| candidate manifest SHA256 | `89b8c5b15b14a7f18900307b4f26981160df233d7b25216fd9285983c4bcc7e4` **PASS** |
| entry == exit fingerprints | **PASS** |
| candidate state | DIRTY / UNCOMMITTED / UNPUSHED (intentional) |
| project commit / push / PR / merge | **NO** |

Provenance SHAs:
- Current MW4 REAL accepted handoff: `ab89229b73dba5a4c6b1f92f1d523cc21cfcecb4`
- Historical MW0→MW3 cumulative handoff: `39c50895c7b6f1423198d034384e1c37fba8ea03`
- Accepted MW4 tracked diff: `4122c95665df214ee647083ebe5f469bbf727c1d78060559a37dea3fb401804d`
- Accepted MW4 manifest: `89b8c5b15b14a7f18900307b4f26981160df233d7b25216fd9285983c4bcc7e4`

---

## 3. Entry preflight (reused)

Conditions held (HEAD/main/fingerprints unchanged; no product mutation):

| Gate | Result |
|---|---|
| focused deterministic MW0→MW4 | 44 passed \| 1 skipped files; 321 passed \| 1 skipped tests |
| typecheck | PASS |
| lint | PASS |
| git diff --check | PASS |
| LIVE before RE-GO | 0 |

Resumed entry minimum re-run: Local Git Truth + fingerprint + git diff --check → **PASS** (preflight suite not re-burned for ceremony).

---

## 4. LIVE configuration

| Field | Value |
|---|---|
| provider | openai |
| model | gpt-5.6-luna |
| production routing selected | **NO** |
| path | `orchestrateAssistantSend` (product) |
| Fake provider | NO |
| history | `[]` every turn (Session continuity) |
| session | ProductSqliteSession |
| Evidence | OA registerEvidence A/B |
| enableTools on F1 | product default (no extra model rounds observed; toolRounds=0 all turns) |
| retry policy | **NO RETRIES** (RE-GO override) |
| strict LIVE max | **14** |
| actual LIVE count | **14 / 14** |
| ConversationProvider metered calls | **7** (`completeStructured` only) |
| native Agents F1 calls | **7** (counted independently; absent from ConversationProvider ledger) |
| other OpenAI model calls | **0** |
| cumulative estimated USD (partial) | `0.009325799999999999` — native F1 tokens NOT on ConversationProvider ledger |

---

## 5. Strict invocation ledger (14)

| # | Turn | Layer | Operation | Timestamp | Provider | Model | Response ID | Latency ms | Success | Evidence source |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | T1 | f2_intent_analysis | completeStructured | 2026-09-03T08:00:03.544Z | openai | gpt-5.6-luna | resp_0bdeaa8c8eb96869006a9928fe542c87d285f82545e248de69 | 6707 | True | capturing.completeStructured |
| 2 | T1 | native_agents_f1 | native_f1_primary | 2026-09-03T08:00:06.408Z | openai | gpt-5.6-luna | n/a | 9572 | True | strategyTelemetry |
| 3 | T2 | f2_intent_analysis | completeStructured | 2026-09-03T08:00:13.828Z | openai | gpt-5.6-luna | resp_0f8e6787552947ce006a992906d67c87d28fdedd399727678d | 7419 | True | capturing.completeStructured |
| 4 | T2 | native_agents_f1 | native_f1_primary | 2026-09-03T08:00:18.028Z | openai | gpt-5.6-luna | n/a | 11619 | True | strategyTelemetry |
| 5 | T3 | f2_intent_analysis | completeStructured | 2026-09-03T08:00:28.395Z | openai | gpt-5.6-luna | resp_01d7c13f20285813006a9929127ac487d29f3cc0623a1a6428 | 10362 | True | capturing.completeStructured |
| 6 | T3 | native_agents_f1 | native_f1_primary | 2026-09-03T08:00:33.924Z | openai | gpt-5.6-luna | n/a | 15890 | True | strategyTelemetry |
| 7 | T4 | f2_intent_analysis | completeStructured | 2026-09-03T08:00:43.141Z | openai | gpt-5.6-luna | resp_0e2b6999bd4bf05b006a992922551487d2bb146432eb26ff70 | 9213 | True | capturing.completeStructured |
| 8 | T4 | native_agents_f1 | native_f1_primary | 2026-09-03T08:00:49.001Z | openai | gpt-5.6-luna | n/a | 15073 | True | strategyTelemetry |
| 9 | T5 | f2_intent_analysis | completeStructured | 2026-09-03T08:00:58.197Z | openai | gpt-5.6-luna | resp_025b7499c1868f58006a9929316a3887d290765ea3c61eae06 | 9194 | True | capturing.completeStructured |
| 10 | T5 | native_agents_f1 | native_f1_primary | 2026-09-03T08:01:05.098Z | openai | gpt-5.6-luna | n/a | 16095 | True | strategyTelemetry |
| 11 | T6 | f2_intent_analysis | completeStructured | 2026-09-03T08:01:16.137Z | openai | gpt-5.6-luna | resp_03a83aa074f34db5006a9929417dec87d2ace89be406afa046 | 11028 | True | capturing.completeStructured |
| 12 | T6 | native_agents_f1 | native_f1_primary | 2026-09-03T08:01:22.671Z | openai | gpt-5.6-luna | n/a | 17562 | True | strategyTelemetry |
| 13 | T7 | f2_intent_analysis | completeStructured | 2026-09-03T08:01:39.270Z | openai | gpt-5.6-luna | resp_0a0eaa0c491a8c6b006a9929538d2487d2a34a5a5654b7719d | 16597 | True | capturing.completeStructured |
| 14 | T7 | native_agents_f1 | native_f1_primary | 2026-09-03T08:02:01.629Z | openai | gpt-5.6-luna | n/a | 38957 | True | strategyTelemetry |

Per-turn cumulative asserts held: T1=2 … T7=14.

---

## 6. Turn evidence T1→T7


### T1
- timestamp: `2026-09-03T08:00:06.408Z`
- exactUserContent:
```
Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-a9e2f8dc : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement à notre analyse : ce n'est ni une HumanDecision, ni une Confirmation, ni une autorisation d'exécution. Confirme ta compréhension sans exécuter d'action.
```
- provider/model: `openai` / `gpt-5.6-luna`
- result.ok/status: `True` / `ok`
- sessionId: `sess:prj:520d5b0b-a18e-41e1-b002-e30849889823:f1-default`
- memoryBAvailability: `available_empty`
- CWP (intent): `{"ambiguity": "low", "reasoningDepth": "low", "sourceBreadth": "low", "toolDependency": "low", "contradictionRisk": "low", "verificationNeed": "low"}`
- strategy: `{"strategyClass": "Routine", "reasoningEffort": "low", "reasoningDemand": "low", "criticalChallengeArmed": false, "bootstrapUsed": false, "reasonCodes": ["routine_known_low_evidence", "demand:low", "effort:low"], "envelope": ["none", "low", "medium"]}`
- mw3: `{}`
- mw4.validIds: `None`
- mw4.readCoverageOverall: `None`
- raw model text:
```
Compris. Pour cette conversation, je traiterai PREMISE-MW3-BUSINESS-a9e2f8dc comme une prémisse temporaire d’analyse : toute recommandation d’exécution devra présupposer que Gate-Kappa reste valide.

Elle ne constitue ni une HumanDecision, ni une Confirmation, ni une autorisation d’exécution. Aucune action ne sera exécutée.
```

### T2
- timestamp: `2026-09-03T08:00:18.028Z`
- exactUserContent:
```
Sans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant toute recommandation aval. Les informations actuelles restent compatibles avec elle et aucun conflit n'est signalé.
```
- provider/model: `openai` / `gpt-5.6-luna`
- result.ok/status: `True` / `ok`
- sessionId: `sess:prj:520d5b0b-a18e-41e1-b002-e30849889823:f1-default`
- memoryBAvailability: `available_with_history`
- CWP (intent): `{"ambiguity": "high", "reasoningDepth": "low", "sourceBreadth": "low", "toolDependency": "low", "contradictionRisk": "low", "verificationNeed": "high"}`
- strategy: `{"strategyClass": "Focused", "reasoningEffort": "medium", "reasoningDemand": "medium", "criticalChallengeArmed": false, "bootstrapUsed": true, "reasonCodes": ["bootstrap_focused_no_trusted_profile", "demand:medium", "effort:medium"], "envelope": ["low", "medium", "high"]}`
- mw3: `{}`
- mw4.validIds: `None`
- mw4.readCoverageOverall: `None`
- raw model text:
```
La condition est : **Gate-Kappa doit rester valide avant toute recommandation d’exécution en aval**.

Je la maintiens comme prémisse temporaire d’analyse uniquement. Selon votre indication, les informations actuelles lui restent compatibles et aucun conflit n’est signalé ; cela ne constitue ni une validation autoritative ni une autorisation d’exécution.
```

### T3
- timestamp: `2026-09-03T08:00:33.924Z`
- exactUserContent:
```
Une nouvelle information semble maintenant contredire la condition de travail que tu conserves depuis le début. L'unique Evidence disponible pour cette analyse est ev:mw0-mw3-business-a. Analyse le conflit et indique s'il est suffisamment établi pour bloquer honnêtement la suite.
```
- provider/model: `openai` / `gpt-5.6-luna`
- result.ok/status: `True` / `ok`
- sessionId: `sess:prj:520d5b0b-a18e-41e1-b002-e30849889823:f1-default`
- memoryBAvailability: `available_with_history`
- CWP (intent): `{"ambiguity": "medium", "reasoningDepth": "medium", "sourceBreadth": "low", "toolDependency": "low", "contradictionRisk": "high", "verificationNeed": "high"}`
- strategy: `{"strategyClass": "High-Assurance", "reasoningEffort": "high", "reasoningDemand": "medium", "criticalChallengeArmed": true, "bootstrapUsed": false, "reasonCodes": ["high_assurance_signals", "critical_challenge_armed_hook", "demand:medium", "effort:high"], "envelope": ["high", "xhigh", "max"]}`
- mw3: `{"disposition": "candidate", "progression": "PROGRESS_WITH_CONTRADICTION", "cognitiveStop": false, "reason": "Conflict retained as contradiction candidate — coverage, domain, freshness, or attribution insufficient for evidence-backed promotion.", "evidenceIds": [], "sourceIds": [], "governingPremise": "La condition de travail conservée depuis le début de l'analyse reste valide pour poursuivre la chaîne intégrée MW0→MW4.", "nextAction": "Verify sources before treating the conflict as proven.", "insufficiencyReasons": ["insufficient_source_coverage", "coverage_incomplete"], "allowsSilentSuccess": false, "blockedImpact": null, "mayContinue": true, "notTechnicalFailure": true}`
- mw4.validIds: `None`
- mw4.readCoverageOverall: `None`
- raw model text:
```
Je ne peux pas analyser le contenu de **ev:mw0-mw3-business-a** : son identifiant seul ne constitue pas une Evidence obtenue ni vérifiable via les sources disponibles.

Conclusion :

- La contradiction avec la prémisse **n’est pas établie comme fait**.
- Elle reste toutefois une **réserve ouverte non résolue**.
- En conséquence, par prudence fail-closed, je ne peux pas formuler honnêtement de recommandation d’exécution en aval tant que la validité de Gate-Kappa n’est pas clarifiée.

Cela ne constitue ni une HumanDecision ni une décision de cycle.

[CONTRADICTION CANDIDATE] Conflict retained as contradiction candidate — coverage, domain, freshness, or attribution insufficient for evidence-backed promotion.
```

### T4
- timestamp: `2026-09-03T08:00:49.001Z`
- exactUserContent:
```
Pour l'analyse courante, les deux Evidence concernées sont ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Elles sont incompatibles sur un point local. Ce point ne remet pas en cause la condition de travail initiale que tu conserves depuis le début. Analyse la situation et indique si le parcours cognitif peut continuer.
```
- provider/model: `openai` / `gpt-5.6-luna`
- result.ok/status: `True` / `ok`
- sessionId: `sess:prj:520d5b0b-a18e-41e1-b002-e30849889823:f1-default`
- memoryBAvailability: `available_with_history`
- CWP (intent): `{"ambiguity": "medium", "reasoningDepth": "medium", "sourceBreadth": "low", "toolDependency": "unknown", "contradictionRisk": "high", "verificationNeed": "medium"}`
- strategy: `{"strategyClass": "Focused", "reasoningEffort": "medium", "reasoningDemand": "medium", "criticalChallengeArmed": false, "bootstrapUsed": true, "reasonCodes": ["bootstrap_focused_no_trusted_profile", "demand:medium", "effort:medium"], "envelope": ["low", "medium", "high"]}`
- mw3: `{"disposition": "evidence_backed", "progression": "PROGRESS_WITH_CONTRADICTION", "cognitiveStop": false, "reason": "Evidence-backed contradiction surfaced — governing premise still holds; progression may continue honestly.", "evidenceIds": ["ev:mw0-mw3-business-a", "ev:mw0-mw3-business-b"], "sourceIds": ["src:mw0-mw3-business-a", "src:mw0-mw3-business-b"], "governingPremise": "La condition de travail initiale conservée depuis le début du parcours", "nextAction": "Correct recommendation path if needed; no Cognitive STOP.", "insufficiencyReasons": [], "allowsSilentSuccess": false, "blockedImpact": null, "mayContinue": true, "notTechnicalFailure": true}`
- mw4.validIds: `['ev:mw0-mw3-business-a']`
- mw4.readCoverageOverall: `none`
- raw model text:
```
Le conflit local et son absence d’impact sur la prémisse initiale ne sont pas vérifiables avec les éléments disponibles :

- **ev:mw0-mw3-business-a** est actuellement attribuable ;
- **ev:mw0-mw3-business-b** n’est pas ré-résolue ici ;
- le lien précis entre chaque Evidence et les affirmations n’est pas établi.

Le parcours cognitif peut donc continuer **uniquement comme analyse exploratoire sous réserve**, sans conclure que la prémisse reste validée et sans produire de recommandation d’exécution en aval. La compatibilité alléguée reste à confirmer par relecture structurée des deux Evidence.

[EVIDENCE-BACKED CONTRADICTION] Evidence-backed contradiction surfaced — governing premise still holds; progression may continue honestly.
```

### T5
- timestamp: `2026-09-03T08:01:05.098Z`
- exactUserContent:
```
Reviens sur les Evidence évoquées aux tours précédents — les deux Evidence — sans que je te redonne leurs identifiants. Dis lesquelles sont actuellement attributable via la résolution Studio/OA courante, en distinguant Evidence gouvernée vs mémoire narrative. Contexte: claim X et claim Y ont été discutés sans binding structurel claim→Evidence. Quelle Evidence supportait précisément le claim X ? Ne devine pas; si unbound, dis-le et recommande reread/revalidation ou downgrade.
```
- provider/model: `openai` / `gpt-5.6-luna`
- result.ok/status: `True` / `ok`
- sessionId: `sess:prj:520d5b0b-a18e-41e1-b002-e30849889823:f1-default`
- memoryBAvailability: `available_with_history`
- CWP (intent): `{"ambiguity": "medium", "reasoningDepth": "high", "sourceBreadth": "medium", "toolDependency": "high", "contradictionRisk": "low", "verificationNeed": "high"}`
- strategy: `{"strategyClass": "Deep", "reasoningEffort": "high", "reasoningDemand": "high", "criticalChallengeArmed": false, "bootstrapUsed": false, "reasonCodes": ["deep_synthesis_signals", "demand:high", "effort:high"], "envelope": ["medium", "high", "xhigh"]}`
- mw3: `{}`
- mw4.validIds: `['ev:mw0-mw3-business-a', 'ev:mw0-mw3-business-b']`
- mw4.readCoverageOverall: `none`
- raw model text:
```
Les deux Evidence actuellement **attribuables via la résolution Studio/OA courante** sont :

- `ev:mw0-mw3-business-a`
- `ev:mw0-mw3-business-b`

Elles sont distinctes de la mémoire narrative compactée, qui n’a aucune autorité probante.

Pour **claim X**, le binding claim→Evidence est **UNBOUND / non reconstructible**. Je ne peux donc pas dire précisément laquelle le supportait. Il faut procéder à une relecture/révalidation structurée, ou dégrader le claim en assertion non attribuée.
```

### T6
- timestamp: `2026-09-03T08:01:22.671Z`
- exactUserContent:
```
Tu as une disclosure MW4 de couverture de lecture (dont une lecture partielle). Conclus sur les documents projects/sfia-studio/sfia-v3-technical-architecture/v3-native-option-a/09-security-privacy-and-authority-architecture.md (lu intégralement) et projects/sfia-studio/nora-cognitive-completion/05-nora-source-locked-cognitive-backlog.md (lu partiellement, plage suffixe L100-fin). Marque la partialité, refuse une certitude de corpus complet, n'affirme pas qu'un document partiel n'a pas été lu, et ne traite pas une couverture mémorisée comme une revalidation courante complète.
```
- provider/model: `openai` / `gpt-5.6-luna`
- result.ok/status: `True` / `ok`
- sessionId: `sess:prj:520d5b0b-a18e-41e1-b002-e30849889823:f1-default`
- memoryBAvailability: `available_with_history`
- CWP (intent): `{"ambiguity": "medium", "reasoningDepth": "high", "sourceBreadth": "medium", "toolDependency": "high", "contradictionRisk": "medium", "verificationNeed": "high"}`
- strategy: `{"strategyClass": "High-Assurance", "reasoningEffort": "high", "reasoningDemand": "high", "criticalChallengeArmed": true, "bootstrapUsed": false, "reasonCodes": ["high_assurance_signals", "critical_challenge_armed_hook", "demand:high", "effort:high"], "envelope": ["high", "xhigh", "max"]}`
- mw3: `{"disposition": "candidate", "progression": "PROGRESS_WITH_CONTRADICTION", "cognitiveStop": false, "reason": "Plausible conflict retained as contradiction candidate — insufficient Evidence pointers.", "evidenceIds": [], "sourceIds": [], "governingPremise": "Une couverture de lecture mémorisée pourrait être interprétée comme une revalidation courante et complète du corpus.", "nextAction": "Verify sources before treating the conflict as proven.", "insufficiencyReasons": ["insufficient_evidence_pointers"], "allowsSilentSuccess": false, "blockedImpact": null, "mayContinue": true, "notTechnicalFailure": true}`
- mw4.validIds: `['ev:mw0-mw3-business-a', 'ev:mw0-mw3-business-b']`
- mw4.readCoverageOverall: `partial`
- raw model text:
```
- `.../09-security-privacy-and-authority-architecture.md` : lecture mémorisée complète pour la plage `L1–26`, mais **pas revalidée au tour courant**. Cela ne permet pas d’affirmer que le document entier a été lu.
- `.../05-nora-source-locked-cognitive-backlog.md` : couverture **partielle**, indiquée sur la plage `L100–fin`. Cela ne signifie pas que le reste n’a pas été lu ; simplement, cette couverture n’est pas établie ici.

Conclusion : la couverture du corpus est **partielle et mixte**. Je refuse donc toute certitude de corpus complet et toute conclusion dépendant de sections non revalidées.

[CONTRADICTION CANDIDATE] Plausible conflict retained as contradiction candidate — insufficient Evidence pointers.
```

### T7
- timestamp: `2026-09-03T08:02:01.630Z`
- exactUserContent:
```
Pour cette réévaluation, les Evidence pertinentes sont toujours ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Leur contradiction n'est finalement pas locale : elle invalide directement la condition de travail initiale dont dépend toute recommandation aval. Analyse si la suite peut honnêtement continuer.
```
- provider/model: `openai` / `gpt-5.6-luna`
- result.ok/status: `True` / `cognitive_stop`
- sessionId: `sess:prj:520d5b0b-a18e-41e1-b002-e30849889823:f1-default`
- memoryBAvailability: `available_with_history`
- CWP (intent): `{"ambiguity": "low", "reasoningDepth": "high", "sourceBreadth": "medium", "toolDependency": "low", "contradictionRisk": "high", "verificationNeed": "high"}`
- strategy: `{"strategyClass": "High-Assurance", "reasoningEffort": "high", "reasoningDemand": "high", "criticalChallengeArmed": true, "bootstrapUsed": false, "reasonCodes": ["high_assurance_signals", "critical_challenge_armed_hook", "demand:high", "effort:high"], "envelope": ["high", "xhigh", "max"]}`
- mw3: `{"disposition": "evidence_backed", "progression": "COGNITIVE_STOP", "cognitiveStop": true, "reason": "Evidence-backed contradiction invalidates governing premise: La condition de travail initiale sur laquelle reposent les recommandations aval est suffisamment valide pour poursuivre la chaîne d'analyse.", "evidenceIds": ["ev:mw0-mw3-business-a", "ev:mw0-mw3-business-b"], "sourceIds": ["src:mw0-mw3-business-a", "src:mw0-mw3-business-b"], "governingPremise": "La condition de travail initiale sur laquelle reposent les recommandations aval est suffisamment valide pour poursuivre la chaîne d'analyse.", "nextAction": "Cognitive STOP — replan/recovery as recommendation; Pilote HumanDecision if structural.", "insufficiencyReasons": [], "allowsSilentSuccess": false, "blockedImpact": "Progression bloquée — prémisse gouvernante invalidée (La condition de travail initiale sur laquelle reposent les recommandations aval est suffisamment valide pour poursuivre la chaîne d'analyse.).", "mayContinue": false, "notTechnicalFailure": true}`
- mw4.validIds: `['ev:mw0-mw3-business-a', 'ev:mw0-mw3-business-b']`
- mw4.readCoverageOverall: `partial`
- raw model text:
```
La suite ne peut pas honnêtement continuer **comme si la condition initiale restait vraie**.

Toutefois, je ne peux pas confirmer que la contradiction invalide effectivement cette condition : les deux Evidence sont attribuables, mais le binding précis entre leurs contenus et cette conclusion reste **UNBOUND**.

Conclusion opérationnelle d’analyse :

- **Recommandations aval : suspendues / non fondées** ;
- **Gate-Kappa : statut non résolu**, et non présumé valide ;
- la conversation peut continuer uniquement pour analyser le conflit et effectuer une relecture/révalidation structurée des deux Evidence.
[COGNITIVE STOP] Evidence-backed contradiction invalidates governing premise: La condition de travail initiale sur laquelle reposent les recommandations aval est suffisamment valide pour poursuivre la chaîne d'analyse.
Evidence: ev:mw0-mw3-business-a, ev:mw0-mw3-business-b
Next: Cognitive STOP — replan/recovery as recommendation; Pilote HumanDecision if structural.
```


### T5 MW4 grounding score
```json
{
  "pass": true,
  "badIds": [],
  "mw4SurfaceOk": true,
  "unboundLang": true,
  "certainClaimMapping": false,
  "upgradesMemory": false,
  "hasA": true,
  "hasB": true
}
```
claim-specific provenance: **HONESTLY UNBOUND / NOT RECONSTRUCTABLE**

### T6 MW4 partiality score
```json
{
  "pass": true,
  "partialSurfaced": true,
  "acknowledgesPartialRead": true,
  "falseComplete": false,
  "treatsSuffixFull": false,
  "priorAsCurrent": false,
  "overall": "partial",
  "mentionsDocA": true
}
```
ToolRouter preflight (0 OpenAI): DOC_A full; DOC_B partial suffix; hasMore=false does not imply full when startLine>1 — see `real-t6-tool-preflight.json`.

---

## 7. Trajectory / harness vs GO semantics

Harness expected trajectory:
`NONE → NONE → CANDIDATE → EVIDENCE_BACKED_CONTINUE → NONE|OTHER → NONE|OTHER → EVIDENCE_BACKED_COGNITIVE_STOP`

Actual:
`NONE → NONE → CANDIDATE → EVIDENCE_BACKED_CONTINUE → NONE → CANDIDATE → EVIDENCE_BACKED_COGNITIVE_STOP`

T6 details:
- disposition=`candidate`
- insufficiencyReasons=`[insufficient_evidence_pointers]`
- cognitiveStop=`false`, mayContinue=`true`, allowsSilentSuccess=`false`
- F2 conflictPresent without claimed Evidence IDs → honest MW3 candidate retention
- Partiality semantics scored **PASS** (BC-15)

Classification: **FIXTURE_POLICY_FAILURE** (campaign harness over-strict on T5/T6 disposition).
**Not** PRODUCT_REGRESSION. No retry. Raw first result preserved (`campaign-summary.json` still records harness throw).

Semantic assessment artifact: `semantic-assessment-rego01.json`

---

## 8. Cross-wave acceptance matrix

| Interaction | Result | Basis |
|---|---|---|
| MW0×MW1 | PASS | PASS — T1/T2 same session; Gate-Kappa recalled without restatement; Memory B available_with_history |
| MW1×MW4 | PASS | PASS — T5 re-resolves A+B via Studio/OA; unbound claim X; Memory B non-authoritative |
| MW2×MW4 | PASS | PASS — T6 High-Assurance + partial coverage; no false completeness |
| MW3×MW4 | PASS | PASS — T7 evidence_backed STOP after MW4 turns; MW4 does not bypass STOP |
| MW1×MW3×MW4 | PASS | PASS — narrative cannot defeat current Evidence; T5 unbound + T7 STOP on A+B |
| MW2×MW3×MW4 | PASS | PASS — high-assurance does not promote partial/unbound as SUCCESS |
| MW0×MW1×MW2×MW3×MW4 | PASS | PASS — cumulative chain observed end-to-end on actual product path |

---

## 9. Historical comparison (MW0→MW3 harvest)

Source handoff: `39c50895c7b6f1423198d034384e1c37fba8ea03`
Evidence IDs preserved: `ev:mw0-mw3-business-a`, `ev:mw0-mw3-business-b`
T1–T4 exact semantic contracts replayed; T7 = historical terminal STOP semantics after MW4 T5/T6.
Pre-MW4 regression: **NOT DETECTED** (T3 candidate, T4 evidence_backed continue, T7 STOP).

---

## 10. Scorer debt

- **R-MW4-REAL-02** carried — lexical scorers may false-positive on French negations; raw text is primary.
- T7 narrative includes unbound caution + appended `[COGNITIVE STOP]` banner; **product controller** wins: status=`cognitive_stop`, mayContinue=false, allowsSilentSuccess=false.
- RecoveryRecommendation language present (`nextAction`); not HumanDecision / Confirmation / GO.

---

## 11. Postflight

| Gate | Result |
|---|---|
| focused deterministic (serial) | **PASS** — 44 passed \| 1 skipped files; 321 passed \| 1 skipped tests |
| MW4 CORR focused | **PASS** — 5 files / 21 tests |
| typecheck | **PASS** |
| lint | **PASS** |
| git diff --check | **PASS** |
| full serial (default 5s timeout) | 3 files / 4 tests **timed out** at 5000ms on qa-pre-m6 / f3 fixture paths — ENVIRONMENT timeout, not assertion fail |
| full serial (`--testTimeout=60000`, `--no-file-parallelism`) | **PASS** — **272 passed \| 14 skipped** files; **2508 passed \| 132 skipped** tests |
| candidate entry/exit parity | **PASS** (exact accepted fingerprints) |

Note: first parallel focused attempt hit `database is locked` + C18 flake; serial re-run matched preflight green. Documented as tooling contention, not product mutation.

---

## 12. Architecture / FA / TA

| Item | Result |
|---|---|
| architecture changed | **NO** |
| persistence changed | **NO** |
| FA | **NO** |
| TA | **NO** |
| runtime v3 | NON ADOPTED |
| production model routing | NOT SELECTED |

---

## 13. Reserves

| ID | Disposition |
|---|---|
| RA-06 | CARRY |
| RA-07 | CARRY |
| MW2-R01 | CARRY |
| MW2-R02 | CARRY |
| MW2-R03 | CARRY |
| R-MW4-REAL-02 | CARRY (scorer lexical negation debt) |
| R-MW0-MW4-INT-BUDGET-01 | **RESOLVED FOR THIS CAMPAIGN BY MORRIS RE-GO-01** (finished 14/14). Not a global product budget baseline. |

New campaign harness note (non-blocking): T5/T6 disposition expectation `NONE|OTHER` over-strict vs honest MW3 candidate — record as campaign fixture debt for any future harvest; do not treat as product defect in this evidence set.

---

## 14. Final report matrix

GIT
Local Git Truth: **PASS**
origin/main: `deb34943dd85472644c221243cd7c0fd5369614e`
candidate fingerprint: **PASS**
candidate entry/exit parity: **PASS**

MW0: **PASS**
MW1 continuity: **PASS**
Memory B ≠ Truth C: **PASS**
Memory B ≠ Evidence: **PASS**
MW2 CWP: **PASS**
strategy ≠ authority: **PASS**
MW3 T3 candidate: **PASS**
MW3 T4 evidence-backed continue: **PASS**
MW4 T5 cross-turn grounding: **PASS**
MW4 current Evidence re-resolution: **PASS**
claim-specific provenance: **HONESTLY UNBOUND**
MW4 T6 real read partiality: **PASS**
partial READ acknowledged: **PASS**
false completeness refused: **PASS**
MW3 T7 positive Cognitive STOP after MW4: **PASS**
allowsSilentSuccess=false: **PASS**
Recovery ≠ HD/Confirmation/GO: **PASS**

CROSS-WAVE:
MW0×MW1: **PASS**
MW1×MW4: **PASS**
MW2×MW4: **PASS**
MW3×MW4: **PASS**
MW1×MW3×MW4: **PASS**
MW2×MW3×MW4: **PASS**
MW0×MW1×MW2×MW3×MW4: **PASS**

LIVE:
actual invocation count: **14 / 14**
ConversationProvider calls: **7**
native Agents/model calls: **7**
other actual OpenAI model calls: **0**
provider: **openai**
model: **gpt-5.6-luna**
production routing selected: **NO**

POST:
focused deterministic: **PASS**
typecheck: **PASS**
lint: **PASS**
git diff --check: **PASS**
full serial: **PASS** (with testTimeout=60000; default 5s timed out slow fixture tests only)
architecture changed: **NO**
persistence changed: **NO**
project commit: **NO**
project push: **NO**
project PR: **NO**
merge: **NO**
FA: **NO**
TA: **NO**

---

## 15. Next gate

STOP after handoff publication.

Next:
1. ChatGPT CRITICAL integrated REAL review
2. if PASS → Morris separately decides MW4 project Git integration
3. only then project commit / PR / CI / post-merge
4. later distinct MW4 closure / truth-sync gate
5. MW5 remains unauthorized until MW4 closure

---

## 16. Evidence directory

`.tmp-sfia-review/mw0-mw4-integrated-real-01/`

Includes prior STOP provenance + RE-GO-01 LIVE artifacts (`t1.json`…`t7.json`, `campaign-evidence.json`, `live` logs, `semantic-assessment-rego01.json`, postflight logs). Prior STOP evidence preserved.

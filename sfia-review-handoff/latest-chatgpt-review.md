# SFIA Review Pack — FULL (mono-cycle)

| Champ | Valeur |
|-------|--------|
| **Rôle** | Cycle 2 — Conception fonctionnelle F2 Qualification + Proposition + Gate SFIA Studio |
| **Cycle** | GO CONCEPTION FONCTIONNELLE — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO — STANDARD |
| **Profil SFIA** | Standard |
| **Review pack** | Full · Synthesis-only = **NO** |
| **Typologie** | INC |
| **GO Morris consommé** | `GO CONCEPTION FONCTIONNELLE — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO — STANDARD` |
| **Inbound handoff** | tip `9f91b6154918e5f131c88e4e676693f2965bd77e` · blob `4d674b93f70d5c450a7ab71ba4e0d3a11d05b238` |
| **Timestamp CEST** | 2026-08-10 20:01:32 CEST (+0200) |
| **Timestamp UTC** | 2026-08-10 18:01:32 UTC |
| **Repository** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main` |
| **Branche** | `main` |
| **Base / HEAD** | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| **origin/main** | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| **Package F1** | `5354643cd3184f4f8ebf51f31bf649203f8c25f0` (ancestor of main) |
| **Local Git Truth** | PASS — main · HEAD=origin/main=`1847fc61…` · tracked clean (`?? .tmp-sfia-review/` only) |
| **CKC** | `pilots/02-conception-fonctionnelle.md` + routing matrix — **candidate** · experimental guidance · **no execution authority** |
| **Project mutations** | **0** |
| **F2 implementation / OpenAI / Delivery** | **NONE** this cycle |

---

## Verdict (exact)

```
F2 FUNCTIONAL DESIGN COMPLETE —
F1/F2 BOUNDARY CLOSED —
ACTIONABLE INTENT TRIGGER DEFINED —
SFIA QUALIFICATION CONTRACT DEFINED —
STRUCTURED PROPOSAL CONTRACT DEFINED —
MORRIS GATE / HUMAN DECISION CONTRACT DEFINED —
RECOMMENDATION ≠ DECISION ≠ EXECUTION PRESERVED —
NATIVE V3 CAPABILITIES MAPPED —
OPS1 HARVEST CLASSIFIED WITHOUT PRODUCT COUPLING —
PROCESS-LOCAL LIMITATION QUALIFIED —
USER TRUST / PROVENANCE REQUIREMENTS DEFINED —
AC-F2 TESTABLE —
DO NOT BUILD CLOSED —
UX ROUTING RECOMMENDATION = DIRECT_DELIVERY —
NO PROJECT CONTENT MUTATION —
READY FOR CHATGPT REVIEW / MORRIS NEXT ROUTING DECISION
```

**UX_ROUTING_RECOMMENDATION** = `DIRECT_DELIVERY`

**Next GO candidate (NOT consumed):**
```
GO DELIVERY — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO — STANDARD
```

---

## 0. GO / qualification / truth / inbound

### GO autorise
Analyse repo read-only · conception fonctionnelle F2 · inspection fondations natives Studio · harvest OPS1 ciblé · Review Pack Full · handoff L3 borné.

### GO n'autorise PAS
Modification code · implémentation F2 · nouveau composant UI · architecture · persistence · Cursor produit · ExecutionRun · exécution · Git/GitHub write produit · commit/push/PR/merge projet · suppression OPS1 · modification méthode · Figma baseline · live OpenAI supplémentaire · F3.

### Local Git Truth (début)
| Field | Value |
|---|---|
| branch | `main` |
| HEAD | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| origin/main | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| status | `?? .tmp-sfia-review/` only |
| tracked/staged dirty | **NO** |

### Inbound handoff verify
| Field | Expected | Observed |
|---|---|---|
| tip | `9f91b6154918e5f131c88e4e676693f2965bd77e` | **MATCH** |
| blob | `4d674b93f70d5c450a7ab71ba4e0d3a11d05b238` | **MATCH** |
| POST-MERGE COMPLETE / F1 CLOSED / main `1847fc61` / package `5354643` | present | **YES** |

### Morris post-handoff decision (ENCODED — entry to F2)

```
F1 LIVE FUNCTIONAL VALIDATION ACCEPTED —
TRACE GAP ACCEPTED BY MORRIS —
LIVE QA ACCEPTED OUTSIDE HANDOFF —
NO F1 REOPEN
```

| Reserve | Status for F2 entry |
|---|---|
| **R3 Live OpenAI** | **ACCEPTED** (not reopen) — live QA proved outside prior handoff |
| F1 reopen | **FORBIDDEN** |

### CKC
Routing matrix row 2 → `pilots/02-conception-fonctionnelle.md` · status `candidate` · **aucune autorité d'exécution** · guide dimensions (rôles, parcours, exceptions, objets, états, règles, CA, permissions, intégrations fct, limite tech).

### Sources méthode (read-only)
`sfia-cycle-execution-template.md` · `sfia-cycle-routing-guide.md` · `sfia-chatgpt-cursor-operating-model.md` · `sfia-rules-and-guardrails.md` · `sfia-validation-checklist.md` · `sfia-v2.5-project-cycles-method-candidate.md` §4.2.

### Sources produit F1 (read-only)
`ProjectAssistantPanel.tsx` · `types.ts` · `orchestrateTurn.ts` · `buildProjectSystemPrompt.ts` · `actions.ts` · `ProjectWorkspaceView.tsx` — F1 = analyse/conversation/Git read · ephemeral · sources visibles · **exclut qualification F2** · OPS1 non destination.

### Fondations v3 (read-only)
`lib/oa/cycle/**` (QualifyCycle / QualifyCycleWithCkc · `isMorrisDecision: false`) · `lib/oa/decision/**` (HumanDecision / Confirmation · N3 ≠ Morris) · `lib/oa/execution-contract/**` (T-A4 through confirmed · T-A5 executing/selectedAgentRef refused).

---

## Question centrale F2

**Passage borné :**
CONVERSATION F1 → INTENTION ACTIONNABLE → QUALIFICATION → PROPOSITION → GATE ÉVENTUEL → DÉCISION HUMAINE → ÉTAT APPROUVÉ / REFUSÉ / À AMENDER → **STOP AVANT EXÉCUTION**.

**Hors F2 (F3+) :** Cursor · worktree · ExecutionRun · evidence pipeline · reinjection.

---

## A. Functional promise F2 finale

> Depuis mon Project Workspace, lorsque ma demande implique une action ou une décision projet, Nora peut la qualifier selon SFIA, me présenter une proposition structurée, bornée et explicable, puis, lorsqu'une décision humaine est requise, présenter un gate clair à Morris — sans jamais déclencher d'exécution Cursor, ni d'écriture Git/GitHub, ni de navigation OPS1 comme destination.

**Challenge → closing notes**
- Alignée F1 (conversation/read reste disponible) ; F2 n'absorbe pas les questions informatives.
- Alignée doctrine : recommandation ≠ décision ≠ exécution.
- Alignée OA : `isMorrisDecision: false` ; HumanDecision explicite ; ExecutionContract sémantique sans T-A5.
- Limite process-local visible (section M) — pas de claim durable.
- Formulation **fermée** pour ce pack (hypothèse de travail challengée et adoptée).

**F2 ne promet PAS :** exécution · Cursor · write Git/GitHub · PR/merge · persistence IAM · suppression OPS1 · F3.

---

## B. F1 → F2 boundary

| | F1 | F2 |
|---|---|---|
| Intent | Analyse / conversation / read | Intention actionnable projet |
| Sortie | Réponse + sources tool-events | Qualification + proposition structurée + gate optionnel + décision capturée |
| Exécution | Interdite | Interdite (STOP avant F3) |
| Qualification SFIA visible | Exclue | **Requise** si trigger B/D |
| Gate Morris | Non | Si cas structurant |
| Destination OPS1 | Escape hatch secondaire seulement | **Jamais** destination F2 |

**STOP before execution (F3).** GO F2 = `DECISION CAPTURED / READY FOR NEXT GATED STEP` — **NOT EXECUTING**.

---

## C. Roles / actors

| Acteur | Peut | Ne peut pas (F2) |
|---|---|---|
| Utilisateur Project Workspace | Formuler intention ; voir qualification/proposition ; clarifier | Décider à la place de Morris sur cas structurants ; exécuter |
| Nora / Assistant | Analyser ; recommander ; qualifier ; proposer ; afficher gate | Décider Morris ; exécuter ; écrire repo ; naviguer OPS1 comme produit |
| Morris | GO / GO WITH RESERVES / NO-GO / AMEND sur proposition identifiable | — |
| Système | Appliquer règles ; marquer stale ; refuser exécution | Auto-promouvoir recommandation → décision ; inventer IAM |
| Autre utilisateur | Futur IAM hors scope | Politique IAM inventée dans F2 |

**N3 ≠ Morris.** Autorité Morris = preuve (`canActAsMorris`) — pas displayName / texte chat.

---

## D. Trigger policy

| Code | Signal | Comportement |
|---|---|---|
| **A** | Question informative / analyse | Reste **F1 conversation** — pas de qualification forcée |
| **B** | Intention projet potentiellement actionnable | Démarre **qualification F2** |
| **C** | Intention ambiguë (« fais le nécessaire ») | **Clarification** avant proposition |
| **D** | Demande d'exécution explicite (Cursor / PR / write) | Qualifier / proposer / identifier gate **possible** ; **jamais exécuter** |

**Anti-pattern fermé :** chaque message conversationnel ≠ cycle SFIA.

Déclenchement **compréhensible** : l'UI doit indiquer quand on quitte F1 conversation pour F2 qualify/propose (StatusPill / état — pas seulement prose libre).

---

## E. Nominal journeys

### E1 — Informative (reste F1)
Workspace → question informative → Nora + Project/LPS + Git read → réponse + sources → **aucune qualification F2**.

### E2 — Actionnable (F2 nominal)
Workspace → intention actionnable → contexte Project/LPS → **qualification SFIA** → **proposition structurée** → évaluation gate → si gate : attente Morris → décision humaine → état terminal F2 (**APPROVED** / **APPROVED_WITH_RESERVES** / **REFUSED** / **AMENDMENT_REQUIRED**) → **aucune exécution**.

### E3 — Non-structurant sans gate Morris
… → proposition → UI : **NO MORRIS GATE REQUIRED** → décision système non structurante possible pour *capture* de « prêt » **mais** F2 **STOP** avant exécution (F3 absent).

---

## F. Exceptions

| Cas | Comportement observable | État attendu |
|---|---|---|
| Demande ambiguë | Clarification posée ; pas de proposition | `NEEDS_CLARIFICATION` |
| Cycle impossible à qualifier | Message d'échec / infos manquantes | `NEEDS_CLARIFICATION` ou échec qualify visible |
| Critical sans justification | Proposition **bloquée** ; justification exigée | Bloqué / clarification |
| Critical implicite | **Interdit** | N/A — refuse transition |
| CKC indisponible | Fallback synthétique déclaré ; pas d'autorité d'exécution | Qualify avec CKC status visible |
| Source Git refusée | Deny visible dans provenance | Continue si non bloquant ; sinon clarification |
| Project/LPS stale | Proposition marquée stale | `STALE` |
| Proposition stale | Ne peut pas être GO silencieusement | `STALE` → requalify |
| Amendement après GO | Ancien GO supersédé ; nouvelle proposition | `AMENDMENT_REQUIRED` / supersede |
| NO-GO | Proposition refusée | `REFUSED` |
| Exécution avant gate | Refus explicite | Pas d'exec |
| Exécution après GO (F3 absent) | Refus : READY FOR NEXT GATED STEP only | `APPROVED*` sans exec |
| Demande Cursor/PR/merge | Proposition/gate possibles ; exec refusée | Propose + STOP |
| Perte runtime process-local | Aucune claim durable | Pas d'autorisation fantôme |
| Autorité Morris non démontrée | Gate Morris non consommable | `DECISION_REQUIRED` reste |
| Auto-promotion reco→décision | Refus système | Reco reste reco |

---

## G. Functional object model

| Objet F2 | Rôle | Mapping natif | Frontière |
|---|---|---|---|
| UserIntent | Intention classée A–D | (conversation message + classifier fct) | Pas nouveau moteur IA |
| Qualification | Reco cycle/profil/signaux | `QualifyCycle` / `QualifyCycleWithCkc` · EpistemicItem `Recommendation` | `isMorrisDecision: false` |
| Proposal | Artefact structuré borné | Sémantique **ExecutionContract** draft→proposed→…→**confirmed** max | **Pas** executing/completed/failed/`selectedAgentRef` |
| GateRequirement | Gate requis ? / type | Confirmation + requiredAuthority / doctrine gates | Pas gate artificiel micro |
| HumanDecision | GO / reserves / NO-GO / AMEND | `HumanDecision` + options | Explicite ; scope lié |
| Reservation | Réserves attachées | `DecisionReservation` / EpistemicItem Reservation | Non bloquant vs bloquant explicite |
| Source / Provenance | Ce qui a été lu | ProvenanceRecord + F1 tool events / sources | Visible UI |
| Project/LPS Context | Ancrage | Projection F1 `ProjectAssistantContextDto` | Stale detection |

**Pas de modèle parallèle** : réutiliser sémantique OA ; adapter présentation Studio.

---

## H. State model (hypothèse — not code enum)

| État F2 | Signification | Map OA (indicatif) |
|---|---|---|
| `CONVERSATION` | F1 / trigger A | Assistant turn ok |
| `QUALIFYING` | Qualification en cours | QualifyCycle* running |
| `NEEDS_CLARIFICATION` | Trigger C / signaux incomplets | signals incomplete / clarify |
| `PROPOSAL_READY` | Proposition structurée visible | EC `proposed`/`validated` sémantique |
| `DECISION_REQUIRED` | Gate Morris ouvert | HumanDecision `required` / Confirmation requested |
| `APPROVED` | GO capturé | HumanDecision `accepted` · EC ≤ `confirmed` |
| `APPROVED_WITH_RESERVES` | GO WITH RESERVES | `accepted` + reservations |
| `REFUSED` | NO-GO | `refused` |
| `AMENDMENT_REQUIRED` | AMEND | `amended` / supersede path |
| `STALE` | Contexte/proposition invalidés | Trajectory/EC `stale`/`superseded` |

Après `APPROVED*` : **DECISION CAPTURED / READY FOR NEXT GATED STEP** — **NOT EXECUTING**.

---

## I. Qualification rules

**Reuse semantics :** `qualifyCycle` / `QualifyCycleWithCkc`.

Utilisateur voit au minimum :
- intention comprise ;
- cycle SFIA recommandé (`cycleTypeId`) ;
- profil recommandé (Light/Standard/Critical) ;
- rationale ;
- signaux (`structuralChange`, `securityImpact`, `architectureImpact`, `dataImpact`, `irreversible`, `lowRiskBounded`) ;
- incertitude / manques ;
- CKC utilisé ou fallback (`CkcResolution.status/level`) ;
- sources projet consultées ;
- **RECOMMANDATION ≠ DÉCISION MORRIS** (`isMorrisDecision` always **false**).

**Critical :** jamais implicite · justification visible · sinon blocage/clarification · aucun auto-Critical.

**Capitalisation :** via `cycleTypeId` (`cyc:capitalization`) — **jamais** comme profile enum.

---

## J. Proposal contract

Artefact **structuré** (pas free chat seul), champs minimum :
objectif · demande reformulée · cycle · profil · justification · périmètre · hors périmètre · blocs/transverses · résultat attendu · sources nécessaires · risques · réserves · stop conditions · gates Morris · action suivante possible · **statut proposition**.

**Sémantique :** map to ExecutionContract **draft / proposed / validated / confirmation_required / confirmed** (max) · **cancelled/superseded** pour invalidation.

**Interdit F2 :** `executing` · `completed` · `failed` · `selectedAgentRef` · ExecutionRun · commande Cursor.

**Stale si :** demande substantiellement modifiée · Project/LPS changé · info contradictoire · amendement Morris · runtime perdu (process-local).

---

## K. Gate / decision contract

### Quand gate Morris requis (min.)
Critical · architecture structurante · sécurité/RSSI · changement doctrine · push projet · création PR · merge · suppression branche · chemin protégé · irréversible · automatisation structurante.

### Non-structurant
UI peut afficher **NO MORRIS GATE REQUIRED** — F2 **STOP** quand même avant exécution.

### Décision (HumanDecision)
Options fonctionnelles : **GO** · **GO WITH RESERVES** · **NO-GO** · **AMEND / REQUEST CHANGES**
(map `accepted` + reservations / `refused` / `amended` / supersede).

Exigences :
- aucune décision implicite depuis texte Nora ;
- action humaine explicite (CtaButton) ;
- liée à **une** proposition identifiable ;
- scope exact visible ;
- pas d'autorisation plus large que scope ;
- amendement matériel → ancien GO non silencieux ;
- NO-GO bloque ;
- GO F2 ≠ exécution.

État final après GO : **DECISION CAPTURED / READY FOR NEXT GATED STEP**.

---

## L. Authority rules

| Règle | Statut |
|---|---|
| Assistant recommande / propose | OUI |
| Assistant décide Morris | NON |
| N3 = Morris | **NON** |
| Morris gate = `authority=morris` + evidence `canActAsMorris` | OUI (Delivery) |
| Client displayName / actorId trust | **NON** |
| IAM multi-rôles | **Hors F2** |

---

## M. Persistence / process-local rule

État produit actuel : **LOCAL_PROCESS** · persistence **NOT_GUARANTEED**.

| Claim | Classification |
|---|---|
| Proposition/gate/décision process-local MVP | **KNOWN PRODUCT LIMITATION / ACCEPTED F2 MVP CANDIDATE** |
| Bloque Delivery F2 ? | **NON** — disclose ; lost decision ≠ authorization |
| F3 sur gate disparu | **INTERDIT** |
| Ouvrir persistence/IAM maintenant | **NON** (hors GO) |

UI doit rendre la limitation **visible** (notice / StatusPill).
**Pas** `STOP — F2 PERSISTENCE PRODUCT ARBITRATION REQUIRED` (crédible avec disclosure).

---

## N. Provenance / transparency contract

Observation Morris (F1 live) : l'utilisateur peine à distinguer action IA réelle / lecture / inférence / reco / décision.

F2 doit rendre **visibles** (UI sémantique — pas seulement chat libre) :
- mode/provider quand pertinent ;
- qualification produite ;
- provenance / sources ;
- règles appliquées (signaux / Critical) ;
- statut proposition ;
- gate requis ? ;
- décision enregistrée ? ;
- **NO EXECUTION**.

Labels sémantiques minimum : **RECOMMANDATION** · **PROPOSITION** · **DÉCISION REQUISE** · **DÉCISION PRISE** · **AUCUNE EXÉCUTION**.

---

## O. AC-F2 complete list

| ID | Critère (observable) |
|---|---|
| **AC-F2-01** | Question informative reste parcours F1 ; aucune proposition F2 forcée |
| **AC-F2-02** | Intention actionnable déclenche qualification F2 visible |
| **AC-F2-03** | Demande ambiguë → clarification ; pas de proposition prématurée |
| **AC-F2-04** | Cycle SFIA recommandé visible |
| **AC-F2-05** | Profil recommandé + rationale visibles |
| **AC-F2-06** | Recommandation explicitement non décisionnelle (`≠ Morris decision`) |
| **AC-F2-07** | Sources / provenance visibles |
| **AC-F2-08** | Proposition structurée distincte du chat libre |
| **AC-F2-09** | Scope + hors scope visibles sur la proposition |
| **AC-F2-10** | Gate requis / non requis explicite |
| **AC-F2-11** | Critical jamais implicite ; sans justification → blocage/clarification |
| **AC-F2-12** | Gate Morris exige action humaine explicite |
| **AC-F2-13** | GO lié à une proposition précise (id/scope) |
| **AC-F2-14** | NO-GO bloque la proposition ; aucune exécution |
| **AC-F2-15** | Amendement matériel invalide/supersède l'ancien état de décision |
| **AC-F2-16** | Aucune exécution après GO F2 |
| **AC-F2-17** | Cursor / Git write / PR / merge indisponibles dans F2 |
| **AC-F2-18** | Process-local / non-persistence explicitement visible |
| **AC-F2-19** | Proposition stale non utilisable silencieusement |
| **AC-F2-20** | OPS1 n'est pas la destination F2 |
| **AC-F2-21** | Utilisateur comprend sans tooling dév : qualifié / proposé / en attente / décidé / **aucune exécution** |
| **AC-F2-22** | Capitalisation via cycleType, jamais profil |
| **AC-F2-23** | `isMorrisDecision` reste false sur qualification |
| **AC-F2-24** | Proposition n'expose pas statuts executing/completed/failed ni selectedAgentRef |
| **AC-F2-25** | Demande d'exécution explicite : propose/gate possibles ; exécution refusée |
| **AC-F2-26** | Après perte runtime : aucune claim d'autorisation durable |
| **AC-F2-27** | Accessibilité fct minimale : états/actions distinguables ; CTAs gate keyboard-operable (Delivery) |

---

## P. Do Not Build (F2)

- Cursor execution · worktree · ExecutionRun · `selectedAgentRef`
- Statuts `executing` / `completed` / `failed`
- Git/GitHub write · push · PR · merge
- Persistence durable · IAM complet
- F3 · full evidence pipeline · release · RUN readiness
- Suppression OPS1
- Redesign Studio complet · nouveau moteur IA · nouveau Tool Router · 2e Decision Engine · nouvelle doctrine SFIA
- Figma comme baseline de ce cycle · navigation produit vers OPS1

---

## Q. Native v3 capability mapping

| Capability | Classification | Note F2 |
|---|---|---|
| `qualifyCycle` / signals / profile reco | **REUSE SEMANTICS** | Affichage Studio |
| `QualifyCycleWithCkc` / CkcResolution | **REUSE SEMANTICS** | Fallback visible |
| `isMorrisDecision: false` | **REUSE SEMANTICS** | Non négociable |
| Capitalization via `cycleTypeId` | **REUSE SEMANTICS** | Pas profil |
| EpistemicItem Recommendation/Reservation | **REUSE SEMANTICS** | Traçabilité reco |
| HumanDecision + options + reservations | **REUSE SEMANTICS** | GO/NO-GO/AMEND |
| Confirmation N1–N3 | **REUSE WITH ADAPTATION** | UI gate ; N3≠Morris |
| AuthorityEvidence `canActAsMorris` | **REUSE WITH ADAPTATION** | Delivery verify ; pas IAM inventé |
| ExecutionContract draft→confirmed | **REUSE WITH ADAPTATION** | Proposition/gouvernance only |
| EC executing/completed/failed | **DEFER TO F3** | Hors F2 |
| `selectedAgentRef` / agent bind | **DEFER TO F3** / **DO NOT USE** in F2 | T-A5 |
| CheckExecutionAuthorization → run | **DEFER TO F3** | |
| Durable decision store / IAM ports productized | **DO NOT USE** (open now) | Limitation M |
| OPS1 session runtime as product path | **DO NOT USE** | |

---

## R. OPS1 harvest mapping

| Mécanisme OPS1 | Classification | Usage F2 |
|---|---|---|
| Conversation + tool-event / sources visibility | **REUSE CONCEPT** | Déjà partiel F1 ; étendre labels F2 |
| SfiaActionProposal JSON / structured proposal distinct du chat | **REUSE CONCEPT** | Réimplémenter natif Studio (OA EC sémantique) |
| ActionCandidate refine / status | **REUSE CONCEPT** | Pas importer types OPS1 |
| GateDecision GO/NO-GO UI | **REIMPLEMENT NATIVE STUDIO** | HumanDecision + CtaButton/StatusPill |
| `ops1RecordGateDecision` / execution gate microcopy | **REIMPLEMENT NATIVE STUDIO** | Sans coupler runtime OPS1 |
| QualifyActionNotRequired | **REUSE CONCEPT** | Align trigger A / NO GATE |
| Ops1SessionScreen / `/ops1/**` destination | **REJECT / LEGACY** | Escape hatch F1 only |
| Fixture ActionCandidate create paths | **REJECT / LEGACY** | Pas baseline produit |
| Compile→persist action_proposed vers exécution | **REJECT / LEGACY** | F2 stop avant exec |

**F2 = Studio-native.** Aucun product coupling OPS1.

---

## S. UX routing recommendation

**UX_ROUTING_RECOMMENDATION = DIRECT_DELIVERY**

**Justification :**
- `CopilotPanel.interactiveContent` + Workspace Cards + `StatusPill` + `CtaButton` suffisent pour qualification / proposition / gate / décision ;
- pas de nouvelle nav primaire ;
- OPS1 **not** destination ;
- pas de fidélité Figma requise ;
- risque de confusion couvert par contrat transparence (N) + AC-F2-21 — pas un cycle UX/UI dédié obligatoire.

**OPTION B UX/UI** : non retenu.
**OPTION C Architecture** : non retenu (pas de frontière structurelle bloquante ; persistence = limitation acceptée MVP).

**Figma :** NOT REQUIRED ce cycle.

---

## T. Risks / reserves

| ID | Topic | Status |
|---|---|---|
| **R1** FinOps PG | Hors F2 | OPEN ENV / NON-BLOCKING — no FinOps reopen |
| **R2** OPS1 secondary escape hatch | Ne pas supprimer OPS1 | OPEN PRODUCT / NON-BLOCKING |
| **R3** Live OpenAI | Preuve live acceptée Morris | **ACCEPTED** — not reopen |
| **R4** Vitest parallelism | Environnemental | NON-BLOCKING / hors conception |
| **R5** Conversation éphémère | Nourrit limitation persistence F2 | ACCEPTED F1 LIMITATION / informs M |
| **R6** USER TRUST / TRACEABILITY UX | Lisibilité IA/outils | **OPEN PRODUCT UX RESERVE** · NON-BLOCKING FOR F2 FUNCTIONAL DESIGN — improve via N/AC ; no full redesign |

**Arbitrages fermés ce cycle :** promise A · boundary B · triggers D · contracts I–K · persistence M non-bloquant · UX DIRECT_DELIVERY.

---

## U. Recommended next cycle + exact candidate GO

Si Morris accepte ce pack / ChatGPT review :

```
GO DELIVERY — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO — STANDARD
```

- Cycle candidat : **8 — Delivery / implémentation** · Profil **Standard** · Typologie INC
- Scope : implémenter qualify+proposition+gate selon A–U sur base F1 CopilotPanel
- Hors scope : F3 exec · persistence durable · IAM · OPS1 delete · Cursor

**NOT consumed** this cycle · Morris decides.

---

## Scenarios S1–S10 (référence Delivery/QA)

| ID | Entrée | Attendu |
|---|---|---|
| **S1** | « Résume-moi l'objectif du projet. » | F1 normal ; aucune proposition F2 |
| **S2** | « Prépare-moi la prochaine étape pour ajouter une fonctionnalité X. » | Qualification + proposition F2 |
| **S3** | « Fais le nécessaire. » | Clarification ; pas de proposition prématurée |
| **S4** | « Change l'architecture du produit pour utiliser X. » | Qualify + impact structurant + gate Morris requis |
| **S5** | « Lance Cursor et modifie le repo. » | Proposition/gate possible ; exécution refusée |
| **S6** | Morris GO sur proposition précise | Décision capturée ; scope visible ; aucune exécution |
| **S7** | NO-GO | Proposition refusée ; aucune exécution |
| **S8** | Amendement après GO | Ancienne décision non silencieuse sur nouvelle proposition |
| **S9** | Contexte stale | Proposition `STALE` / requalification |
| **S10** | Process restart | Aucune claim de décision durable si état perdu |

---

## Challenge answers

| Question | Réponse |
|---|---|
| Valeur autonome après F1 ? | **OUI** — passage intention→reco→proposition→décision sans exec ; F1 seul ne ferme pas la gouvernance |
| Dette inutile ? | **NON** si réutilise OA semantics ; dette si re-copie OPS1 |
| Plus simple que reproduire OPS1 ? | **OUI** — Studio-native + harvest concept only |
| Studio-native ? | **OUI** |
| Gates seulement pour arbitrages utiles ? | **OUI** — doctrine structurante ; NO GATE + STOP exec sinon |
| Proposition compréhensible sans SFIA brut ? | **OUI** — champs utilisateur ; détails signaux/CKC progressifs |
| F2→F3 clair sans implémenter F3 ? | **OUI** — READY FOR NEXT GATED STEP ≠ EXECUTING |

---

## Anti-claims

Ce cycle **ne signifie PAS** :
- F2 implémenté · UX validée · architecture validée · gate persistant · IAM décidé · Cursor intégré · execution autorisée · OPS1 supprimé · product-ready · production-ready · synthesis-only pack · CKC execution authority · F1 reopen · R3 still OPEN.

---

## Mutations / validations

| Check | Result |
|---|---|
| Project files created/modified/deleted | **0** |
| npm / build / vitest full / OpenAI / Studio restart | **NOT RUN** |
| F2 implementation | **NONE** |
| Only `.tmp-sfia-review/**` + handoff publish | **YES** |

---

## Final Git Truth (pre-publish)

| Field | Value |
|---|---|
| branch | `main` |
| HEAD | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| origin/main | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| status | `?? .tmp-sfia-review/` only |

## Publisher note

```
scripts/sfia/publish-review-handoff.sh \
  --source .tmp-sfia-review/chatgpt-review.md \
  --commit-message "docs(review-handoff): publish F2 functional design" \
  --handoff-worktree <clean sfia/review-handoff worktree>
```

# SFIA Review Pack — FULL (mono-cycle)

| Champ | Valeur |
|-------|--------|
| **Rôle** | Cycle 2 — Conception fonctionnelle F1 Assistant projet contextualisé SFIA Studio |
| **Cycle** | GO CONCEPTION FONCTIONNELLE — F1 ASSISTANT PROJET CONTEXTUALISÉ SFIA STUDIO — STANDARD |
| **Profil SFIA** | Standard |
| **Review pack** | Full |
| **Typologie** | EVOL — conception fonctionnelle du premier incrément produit natif F1 |
| **GO Morris consommé** | `GO CONCEPTION FONCTIONNELLE — F1 ASSISTANT PROJET CONTEXTUALISÉ SFIA STUDIO — STANDARD` |
| **Inbound handoff consommé** | tip `3d26dab1814dd6ea8be296c33fb00b46c3c2ef8e` · blob `eb0e17b13e21e8967d7d38d6e0c15bba8cff4c77` — NATIVE CONVERGENCE CADRAGE COMPLETE |
| **Synthesis-only** | NO |
| **Timestamp CEST** | 2026-08-10 15:58:50 CEST (+0200) |
| **Timestamp UTC** | 2026-08-10 13:58:50 UTC |
| **Repository** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main` |
| **Branche** | `main` |
| **Base / HEAD** | `9b6d4bc3d4b73afb7a6a5b436848578fc9970c34` |
| **origin/main** | `9b6d4bc3d4b73afb7a6a5b436848578fc9970c34` |
| **Local Git Truth Check (début)** | PASS — `main` · HEAD=`origin/main`=`9b6d4bc3d4b73afb7a6a5b436848578fc9970c34` · tracked clean (`?? .tmp-sfia-review/` only) · inbound tip/blob match |
| **CKC** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md` — status `candidate` / experimental · **no execution authority** |
| **Project mutations** | 0 (aucun fichier tracked modifié hors handoff publish) |
| **Delivery / live / Cursor réel** | NON exécutés |
| **npm install / providers live** | NON |

---

## Verdict (exact)

```
F1 ASSISTANT PROJECT FUNCTIONAL DESIGN COMPLETE —
PROJECT-CONTEXTUALIZED USER JOURNEY DEFINED —
GIT READ EXPERIENCE DEFINED —
F1/F2 BOUNDARY CLOSED —
ACCEPTANCE CRITERIA TESTABLE —
UX ROUTING DECIDED —
NO DELIVERY EXECUTED —
NO PROJECT MUTATION —
READY FOR CHATGPT REVIEW / MORRIS F1 DELIVERY DECISION
```

---

## Question fonctionnelle centrale

**Question :** Que doit pouvoir faire un utilisateur dans le Project Workspace pour que SFIA Studio devienne réellement son espace de pilotage dès F1, sans transformer F1 en chatbot générique et sans ouvrir prématurément F2/F3 ?

**Réponse :** Activer l’Assistant interactif dans le slot Copilot existant (`Nora · Project Copilot`) sur `/studio/projects/[id]`, injecter uniquement les champs de projection runtime Project/LPS déjà exposés, réutiliser `lib/platform` AI + tools Git/GitHub **read**, rendre les sources consultées visibles (pattern harvest OPS1 `ct-tool-events`), conserver une conversation multi-tour **éphémère** process-local — **sans** destination OPS1, **sans** qualify/proposition/gate/Cursor.

---

## Promesse utilisateur F1 (finale)

> Depuis mon Project Workspace, je peux dialoguer avec l’Assistant SFIA dans le contexte réel de mon projet, lui permettre de consulter les sources Git autorisées et recevoir une réponse contextualisée sans quitter Studio.

**F1 ne promet PAS :** qualification cycle visible · ActionCandidate · gate d’exécution · Cursor · diff/tests/report complets · clôture de cycle.

---

## Persona F1

| Champ | Valeur |
|-------|--------|
| Primaire | Opérateur / décideur du projet SFIA Studio |
| Pilote initial | Morris (référence utilisateur) — **ne pas hardcoder** le nom dans le produit |
| IAM / multi-rôles | **Hors F1** |

---

## Position stratégique (héritée + encodée)

| Affirmation | Statut |
|-------------|--------|
| OPS1 = POC validé / capability source — **NOT** destination produit | ENCODÉ (inbound) |
| Trajectoire : UI Studio → domaine/runtime v3 → adapters platform/harvest → externals | ENCODÉ |
| F1 = premier slice natif Assistant dans Project Workspace | ENCODÉ |
| Placement = **CopilotPanel existant** — NOT redirect OPS1 — NOT rebuild Ops1SessionScreen | ENCODÉ CE CYCLE |
| UX routing = **A. DIRECT DELIVERY WITH EXISTING DESIGN SYSTEM** | ENCODÉ CE CYCLE |
| F1 standalone value WITHOUT F2 — **NO STOP F1 REQUIRES F2** | ENCODÉ CE CYCLE |

---

## 1. F1 User Journey

Route ancre : `/studio/projects/[id]` · Shell : `StudioShell` + `CopilotPanel` flush · Canvas : `ProjectWorkspaceView`.

| # | Étape | Intention | Action | Données lues | Moteur | État UI | Erreur possible | Résultat |
|---|-------|-----------|--------|--------------|--------|---------|-----------------|----------|
| 1 | Ouvrir Workspace | Voir mon projet | Naviguer `/studio/projects/[id]` | `projectId` URL | `getProject` vertical-slice-runtime | Workspace + disclosures | Project inexistant | Workspace ouvert |
| 2 | Contexte visible | Comprendre le chantier | Lecture canvas | projection `RuntimeProjectState` + LPS + doctrine + readiness | mapping runtime | Cards objectif/contexte/contraintes | champs optionnels absents | Contexte projet affiché |
| 3 | Assistant disponible | Parler sans quitter Studio | Focus Copilot flush | props page (`Nora · Project Copilot`) | CopilotPanel (à activer) | Composer **enabled** (cible F1) ; aujourd’hui `copilot-composer-disabled` | — | Slot Assistant prêt |
| 4 | Saisir demande | Exprimer besoin | Envoyer message | texte user | server action thin (cible) | SENDING | message vide / double send | Message en file |
| 5 | Contexte injecté | Réponse ancrée projet | System/context pack | champs projection autorisés (§4) | composition F1 | ASSISTANT_WORKING | projection fail | Contexte attaché au tour |
| 6 | Git read borné | Enrichir avec sources | Tool loop platform | allowlist Git/GitHub read | `lib/platform/tools` | SOURCE_LOOKUP | deny / unavailable | Sources lues ou refus visible |
| 7 | Sources visibles | Comprendre ce qui a été lu | Panel sources adjacent / dans Copilot | tool events (path, op, ok/fail) | harvest UX `ct-tool-events` | liste repliée | empty / deny | Traçabilité lecture |
| 8 | Réponse contextualisée | Obtenir analyse | Afficher answer | messages + sources | platform AI | ANSWERED | provider error | Réponse projet |
| 9 | Multi-tour | Continuer | Nouveau message | historique éphémère session | même EP | READY→… | process restart loss | Dialogue continue |
| 10 | Sans OPS1 | Rester dans Studio | Aucune nav `/ops1/**` requise | — | — | CTA OPS1 = escape hatch secondaire (AC-15) | — | Parcours F1 autonome |

---

## 2. Information Architecture fonctionnelle F1

Zones **minimales** dans le Workspace (pas de redesign global, pas d’onglets F2–F4) :

| Zone | Rôle F1 | Surface existante |
|------|---------|-------------------|
| Contexte Project | Afficher identité + objectif + contexte + criticité + contraintes | `ProjectWorkspaceView` canvas |
| LPS / doctrine / disclosures | Honêteté runtime (LOCAL_PROCESS, NOT_READY, …) | banners / pills page `[id]` |
| Assistant (primary interactive) | Conversation multi-tour contextualisée | `StudioShell` → `CopilotPanel` flush |
| Sources consultées | Preuve des tools read (collapsed by default) | adjacent Copilot / harvest pattern OPS1 `ct-sources-panel` |
| État provider | Fixture vs live fail-closed — signal honnête, peu de jargon | pill / banner Copilot |
| Capacités futures non actives | **Ne pas** activer ; optionnel hint « bientôt » non cliquable | hors scope UI F1 |

**Principe :** minimum de surface pour conversation projet + preuve des sources.

---

## 3. Assistant Functional Contract

### A. Ce que l’Assistant sait automatiquement (projection runtime uniquement)

| Champ | Source | Notes |
|-------|--------|-------|
| `projectId` (`prj:…`) | `RuntimeProjectState.projectId` | obligatoire |
| `name` / projectName | `RuntimeProjectState.name` ← `view.projectName` | obligatoire |
| `shortReference?` | projection optionnelle | si absent : ne pas inventer |
| `objective` | projection (required at create) | obligatoire |
| `contextSummary` / context | projection ← create `context` | obligatoire |
| `criticality` / perceivedCriticality | `LOW\|STANDARD\|HIGH` | obligatoire |
| `constraints[]` | schema UI `sfia-visible-slice-project-ui.1` | **peut être vide** |
| LPS `id` + `version` + `createdAt` | `RuntimeLivingProjectState` | version fixe `1` aujourd’hui |
| doctrine `id` / `version` / `digest` / `status` | `RuntimeDoctrineState` | injecté |
| disclosures | `LOCAL_PROCESS`, `NOT_GUARANTEED`, readiness `NOT_READY`, `agentExecution: DISABLED` | F1 chat : agent disclosure évolue **uniquement** pour autoriser conversation/tools read — **pas** Cursor/exécution |

### B. Ce qu’il ne doit PAS considérer comme acquis

- Champs OA LPS **non projetés** : stakeholders, nextStep, trajectory, CKC refs, decisions, evidence, risks, etc. — **sauf** chargement séparé hors F1
- Décision Morris implicite
- Accès repo hors allowlist / hors policy
- Capacité Cursor / write Git/GitHub
- Persistence durable (disclosures disent le contraire)
- Session OPS1 / `OPS1_PROJECT_KEY`

### C. Comportement

- Multi-tour ; clarification possible
- Recherche source **read-only** via platform tools
- Réponse contextualisée au Project
- Distinction observation / hypothèse / recommandation
- **Aucune exécution**

### D. Limites

**F1 Assistant = ANALYSE / CONVERSATION / READ.** Pas ACTION / EXECUTION.

---

## 4. Project Context Contract

Autorité : **Project/LPS runtime Studio** — ne pas créer un second « OPS1 project context ».

| Donnée | Source de vérité | Obl. | Affichée | Injectée Assistant | Si absente | Sensibilité | Bornage |
|--------|------------------|------|----------|--------------------|------------|-------------|---------|
| projectId | oa/project via runtime | oui | oui | oui | erreur getProject | id | préfixe `prj:` |
| name | create/runtime | oui | oui | oui | bloquant create | faible | UI form |
| shortReference | create optionnel | non | si présent | si présent | omettre | faible | ≤64 (form) |
| objective | create required | oui | oui | oui | bloquant create | métier | form validation |
| contextSummary | create `context` | oui | oui | oui | bloquant create | métier | form |
| criticality | create | oui | oui | oui | bloquant create | faible | enum |
| constraints[] | create / UI schema | non (may empty) | si length>0 | oui (évent. `[]`) | injecter `[]` | métier | liste strings |
| LPS id/version/createdAt | composition locale | oui si project ok | partiel | oui | fail get | faible | version=1 |
| doctrine * | composition | oui si ok | partiel | oui | fail get | faible | digest |
| disclosures / readiness | runtime constants | oui | oui | oui (honêteté) | N/A | gouvernance | frozen |
| OA LPS non projetés | LPS store interne | — | non | **non F1** | N/A | — | — |

---

## 5. Source / Git Read Contract

**Reuse :** `lib/platform/tools` (`toolRouter` Git status/head/search/readFile/diff/log + GitHub read) — **pas** de nouveau Tool Gateway.

**UX (harvest OPS1 `ct-tool-events` / `ct-sources-panel` INTO Copilot/Workspace adjacent) :**

| Question | Décision F1 |
|----------|-------------|
| Comment l’utilisateur voit qu’une source a été consultée ? | Entrée dans panel Sources (testid candidat dérivé) par tool event |
| Infos minimales | path · tool op · success/fail |
| Extrait / résumé | **collapsed by default** ; expand manuel |
| Accès refusé policy | entrée visible **deny** — message clair ; Workspace reste utilisable |
| Impression de write ? | Copy UI : « lecture seule » ; jamais d’action write ; tools write absents F1 |
| GitHub read | autorisé si platform disponible ; même UX ; indispo = visible fail-closed |

---

## 6. Conversation States

| État | Signification | UI |
|------|---------------|-----|
| INITIAL | Workspace chargé ; pas encore de tour | empty state Copilot + CTA composer |
| READY | Prêt à envoyer | composer enabled |
| SENDING | Message user soumis | send disabled ; pending |
| ASSISTANT_WORKING | Provider en cours (sans tool ou avant tools) | loading annoncé |
| SOURCE_LOOKUP | Tool Git/GitHub read en cours | sources panel activity |
| ANSWERED | Réponse livrée (± sources) | message + sources |
| ERROR_RECOVERABLE | Erreur retryable (réseau, timeout) | message + retry manuel |
| BLOCKED | Fail-closed (secrets live manquants, policy hard) | blocked banner ; pas de silent fallback |

**Couverture :** empty · première demande · tours suivants · loading · provider indisponible · Git indisponible · source refusée · réponse sans tool · réponse avec sources · erreur · **retry manuel uniquement** (pas d’auto-retry silencieux).

---

## 7. Mode / Provider Behavior

| Mode | Comportement | Signal UI |
|------|--------------|-----------|
| Fixture / dev | `FakeConversationProvider` ou `OPS1_CONVERSATION_PROVIDER=fake` (pattern existant platform) | signal honnête type « Mode démonstration / fixture » — **pas** de jargon lourd |
| Live candidat | `resolveConversationProvider` → secrets via `requireLiveConversationSecrets` ; **fail-closed** si `OPENAI_API_KEY` / `OPENAI_MODEL` manquants | « Assistant indisponible — configuration manquante » |
| Interdit | **NO silent live→fixture** | — |

Mémoire conversation F1 : **EPHEMERAL** process-local — aligné `businessState: OA_MEMORY` / singleton runtime Project.

**Ce cycle :** aucun appel provider live.

---

## 8. OPS1 Harvest Boundary pour F1

| Capacité | Décision F1 | Cible |
|----------|-------------|-------|
| Conversation / AI provider | **REUSE VIA PLATFORM (AS-IS)** | `lib/platform/ai` |
| Tool loop | **REUSE VIA PLATFORM (AS-IS)** | `lib/platform/tools` |
| Git read / GitHub read | **REUSE VIA PLATFORM (AS-IS)** | toolRouter + repository |
| Events sink patterns | **REUSE VIA PLATFORM** patterns | observability / events existants |
| Source visibility UX (`ct-tool-events`, sources panel) | **EXTRACT THIN LOGIC / harvest UX** into Copilot adjacent | **pas** Ops1SessionScreen |
| OPS1 UI / session create / `/ops1/**` destination | **DO NOT USE IN F1** | — |
| qualify / decision / execution-run / Cursor / report | **DO NOT USE IN F1** | F2+ |

---

## 9. F1 vs F2 Boundary

| | F1 | F2 (hors scope conception détaillée) |
|--|----|--------------------------------------|
| Couverture | Workspace + Assistant contextualisé + Git/GitHub **read** + multi-tour | Qualify visible + proposition + execution gate |
| Valeur | **Standalone** — dialogue projet utile **sans** F2 | Dépend de F1 |
| STOP | **NO STOP F1 REQUIRES F2** | — |

**Arbitrage :** aucune fonction F2 n’est absolument nécessaire pour la valeur F1 → **pas d’arbitrage Morris bloquant** sur ce point.

---

## 10. Functional Acceptance Criteria

| ID | Critère (testable) |
|----|-------------------|
| **AC-F1-01** | Depuis `/studio/projects/[id]`, l’Assistant est accessible sans navigation vers `/ops1/**`. |
| **AC-F1-02** | L’Assistant reçoit le contexte du Project courant depuis les sources produit existantes (runtime projection). |
| **AC-F1-03** | Objectif / LPS réellement disponibles sont pris en compte sans saisie manuelle redondante. |
| **AC-F1-04** | L’utilisateur peut saisir un message et recevoir une réponse dans le Workspace. |
| **AC-F1-05** | La conversation supporte plusieurs tours pendant le contexte runtime supporté par F1. |
| **AC-F1-06** | L’Assistant peut invoquer les capacités Git read autorisées via la plateforme existante. |
| **AC-F1-07** | Les sources réellement consultées sont visibles ou inspectables dans l’interface. |
| **AC-F1-08** | Un refus policy Git est visible et ne bloque pas de façon ambiguë le Workspace. |
| **AC-F1-09** | Aucune écriture Git/GitHub n’est disponible depuis F1. |
| **AC-F1-10** | Aucune action Cursor n’est disponible depuis F1. |
| **AC-F1-11** | Une indisponibilité provider live est fail-closed et explicitement signalée. |
| **AC-F1-12** | Aucun fallback silencieux live→fixture. |
| **AC-F1-13** | Le parcours F1 ne crée pas de dépendance fonctionnelle à une session OPS1. |
| **AC-F1-14** | L’expérience n’affirme aucune persistence durable non réellement disponible. |
| **AC-F1-15** | CTA Workspace→OPS1 « Continuer le pilotage » : **recommandation** = **conserver comme escape hatch secondaire temporaire** pendant F1 ; demote/hide après que l’Assistant soit le primaire interactif. **Recommendation ≠ implemented** dans ce cycle. |

---

## 11. Accessibility / UX functional minimum

Sans Cycle 4 / sans audit WCAG exhaustif :

- Labels explicites composer / send / sources
- Focus visible ; ordre tab cohérent panel → composer → sources
- Statut loading annoncé (aria-live polie)
- Erreurs compréhensibles (pas de stack brute)
- Panel sources navigable clavier ; détails expand/collapse
- Conversation lisible (contraste tokens DS existants)
- Pas de couleur comme seule information (success/fail + texte)
- Send disabled compréhensible (title/aria quand BLOCKED/SENDING)
- Zones live si streaming futur : aria-live

---

## 12. F1 Visual / UX Routing Decision

### Verdict

```
A. DIRECT DELIVERY WITH EXISTING DESIGN SYSTEM
```

### Evidence

- Slot Copilot **existe** (`StudioShell` floating/flush · page `[id]` wire `Nora · Project Copilot`)
- DS : `StatusPill` / Card / CtaButton / shell flush — tokens existants
- **Pas** de nouvelle navigation structurante
- Chat atoms = extension thin de `CopilotPanel` (aujourd’hui composer disabled)
- **Pas** de Figma requis

### Caveat

Pas de MessageList DS partagé — thin UI build dans le slot existant ; **ce n’est pas** un Cycle 4.

### Non-B

Pas de nouvelle structure Workspace, pas d’arbitrage multi-variantes Figma.

---

## 13. Data / State Boundary

| État | Qualification F1 |
|------|------------------|
| Project context | **PROJECT-BOUND REQUIRED NOW** (read existing runtime) |
| Conversation turns | **EPHEMERAL ACCEPTABLE FOR F1** |
| Sources consulted in session | **EPHEMERAL ACCEPTABLE FOR F1** |
| Provider availability | **EPHEMERAL / process** |
| Persistence durable | **PERSISTENCE LATER** — do **NOT** STOP for persistence |
| IAM / multi-instance | hors F1 |

---

## 14. Failure / Edge Case Matrix

| Cas | Comportement | Message | Récupération | Posture |
|-----|--------------|---------|--------------|---------|
| Project inexistant | page erreur runtime | introuvable | retour liste/create | fail-closed |
| Project incomplet / get fail | erreur DTO | message code | retry navigation | fail-closed |
| LPS partiel | n’injecter que projection dispo | pas d’invention champs | continuer si project ok | fail-closed sur invente |
| Provider unavailable (live) | BLOCKED | config manquante | corriger env / fixture explicite | fail-closed |
| Erreur OpenAI | ERROR_RECOVERABLE | erreur provider | retry manuel | fail-closed silent fallback |
| Git repo unavailable | tool fail visible | Git indisponible | continuer sans source | fail-closed claim |
| Git read denied | event deny visible | accès refusé policy | reformuler / autre path | fail-closed |
| Fichier absent | tool fail | fichier introuvable | autre requête | — |
| Outil timeout | ERROR_RECOVERABLE | délai dépassé | retry manuel | no auto-retry |
| Message vide | bloquer send | — | saisir texte | — |
| Double send | ignore 2e / disable | — | wait ANSWERED | — |
| Nav pendant réponse | best-effort cancel/orphan | — | nouvel état page | no crash |
| Réponse sans source | ANSWERED ok | — | — | — |
| Besoin capacité hors F1 (qualify/Cursor/…) | réponse bornée + limite | « hors périmètre F1 » | CTA escape hatch OPS1 optionnel | fail-closed scope |

---

## 15. Do Not Build in F1

Exclusions explicites :

- qualifyCycle UI · CKC UI
- ActionCandidate · gate Morris d’exécution
- ExecutionRun · Cursor · worktree
- report / evidence complet
- GitHub write · PR · merge
- persistence industrialisée · IAM · multi-instance
- FinOps · MONITOR/E1
- suppression / refactor OPS1
- refonte globale Workspace
- nouveau moteur conversationnel si `lib/platform` suffit
- binding `lib/ops1` session create comme destination
- oa/cycle UI · execution-run UI
- modification `method/`
- Figma comme nouvelle baseline
- Delivery branch / prompt Delivery (ce cycle)

---

## 16. Delivery Readiness Contract

| Élément | Contenu |
|---------|---------|
| **Résultat utilisateur unique** | Assistant multi-tour contextualisé dans Project Workspace avec sources Git-read visibles, **sans** dépendance session OPS1 |
| **Surfaces probables** | `CopilotPanel` · `studio/projects/[id]` wiring · thin server actions · tests AC-F1-01..15 |
| **Réutiliser** | `lib/platform/{ai,tools,repository}` · `vertical-slice-runtime` `getProject` · `StudioShell` |
| **Interdit** | `lib/ops1` session create binding · oa/cycle UI · execution-run UI · FinOps · `method/` · persistence/IAM |
| **Tests** | AC-F1-01..15 (+ ajouts si Delivery découvre gaps) |
| **Runtime proof** | chemin local fixture |
| **Live proof** | **SEPARATE** — gate Morris ultérieur |
| **STOP Delivery** | destination OPS1 · Cursor · write Git · silent live→fixture · claim persistence |
| **Risques** | scope creep OPS1-clone · MessageList thin sans DS · disclosure agent vs DISABLED |
| **Réserves** | conversation éphémère ; CTA OPS1 temporaire ; pas de MessageList partagé |

**Ne PAS** produire le prompt Delivery ni ouvrir une branche Delivery dans ce cycle.

---

## Next gate candidate (Morris — not auto-consumed)

```
GO DELIVERY — F1 ASSISTANT PROJET CONTEXTUALISÉ SFIA STUDIO — STANDARD
```

(Car UX routing = A. DIRECT DELIVERY WITH EXISTING DESIGN SYSTEM.)

---

## Décisions Morris requises

1. Accepter / amender le contrat F1 (promesse, placement Copilot, AC-01..15).
2. Accepter UX routing **A** → GO Delivery F1 — **ou** exiger Cycle 4 UX/UI (B) malgré evidence A.
3. Confirmer AC-15 : escape hatch OPS1 temporaire pendant F1.
4. Autoriser explicitement un futur GO Delivery (ce cycle ne l’autorise pas).

---

## Réserves

- CKC `02-conception-fonctionnelle.md` = **candidate** — pas d’autorité d’exécution.
- Composer actuellement **disabled** — F1 = conception ; activation = Delivery futur.
- LPS OA riche non entièrement projeté — Assistant borné aux champs projection.
- Persistence / IAM non tranchés — volontairement hors F1.
- Harvest UX sources = extraction thin — pas de portage Ops1SessionScreen.

---

## Anti-claims

Ce pack **n’affirme pas** :

- F1 implemented
- live validated
- Delivery authorized
- OPS1 deleted
- F2 opened
- Cursor connected
- persistence decided
- method unchanged claim violée (method **non** modifiée)
- UX baseline / Figma changed

---

## Challenge notes

| Exigence | Utile F1 ? | Existe ? | Réutilisable ? | Dette ? | F2/F3 ? | Persist maintenant ? | Figma ? |
|----------|------------|----------|----------------|---------|---------|----------------------|---------|
| Copilot interactif | oui | slot oui / chat non | DS + platform | thin UI | non | non | non |
| Context projection inject | oui | oui runtime | as-is | faible | non | non | non |
| Git read tools | oui | platform | AS-IS | faible | non | non | non |
| Sources panel | oui | OPS1 pattern | harvest thin | faible | non | non | non |
| QualifyCycle UI | non | oa engines | — | — | **F2** | — | — |
| Cursor / ExecutionRun | non | OPS1/oa | — | — | **F3** | — | — |
| Nouveau MessageList DS | non bloquant | non | thin local | acceptable | non | non | non |

---

## Sources consulted

| Path | Usage |
|------|-------|
| `method/.../pilots/02-conception-fonctionnelle.md` | CKC Cycle 2 candidate |
| inbound tip `3d26dab` / blob `eb0e17b1` | NATIVE CONVERGENCE cadrage F1 slice |
| `app/components/shell/{StudioShell,CopilotPanel}.tsx` | placement Assistant |
| `app/app/studio/projects/[id]/page.tsx` | wiring Nora · Project Copilot |
| `app/features/vertical-slice-ui/ProjectWorkspaceView.tsx` | contexte + CTA OPS1 |
| `app/lib/vertical-slice-runtime/{types,mapping,disclosures}.ts` | projection fields |
| `app/lib/vertical-slice-core/localProjectComposition.ts` | `sfia-visible-slice-project-ui.1` · OA_MEMORY |
| `app/lib/platform/ai/{config,provider,fakeProvider}.ts` | fixture/live fail-closed |
| `app/lib/platform/tools/{toolRouter,types}.ts` | Git/GitHub read |
| `app/features/ops1/Ops1SessionScreen.tsx` | harvest `ct-tool-events` / sources panel only |

---

## Commands executed

```
cd <finops-t2-main>
/usr/bin/git fetch origin
/usr/bin/git branch --show-current
/usr/bin/git rev-parse HEAD origin/main
/usr/bin/git status --short
/usr/bin/git fetch origin sfia/review-handoff
/usr/bin/git rev-parse origin/sfia/review-handoff
/usr/bin/git rev-parse origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md
# read-only inspections (rg/sed/ls) — no npm, no live, no Delivery
# RESET write .tmp-sfia-review/chatgpt-review.md
# final non-mutation checks
# scripts/sfia/publish-review-handoff.sh …
# post-publish verify tip/blob + HEAD main unchanged
```

---

## Local Git Truth Check (fin — pre-publish)

| Check | Result |
|-------|--------|
| Branch | `main` |
| HEAD | `9b6d4bc3d4b73afb7a6a5b436848578fc9970c34` |
| origin/main | `9b6d4bc3d4b73afb7a6a5b436848578fc9970c34` |
| Tracked dirty | none expected (`?? .tmp-sfia-review/` only) |
| Inbound tip/blob | `3d26dab1814dd6ea8be296c33fb00b46c3c2ef8e` / `eb0e17b13e21e8967d7d38d6e0c15bba8cff4c77` |
| Code mutations | **0** |

---

## Pack path

`.tmp-sfia-review/chatgpt-review.md` (RESET — no append)

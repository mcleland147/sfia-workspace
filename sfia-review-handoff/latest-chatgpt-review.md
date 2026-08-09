# SFIA Review Pack — Light

| Champ | Valeur |
|-------|--------|
| **Rôle** | Product Restart — Cycle 1 Cadrage |
| **Profil** | Standard |
| **Typologie** | EVOL / cadrage produit, read-only |
| **Timestamp CEST** | 2026-08-10 01:30:37 CEST |
| **Timestamp UTC** | 2026-08-09 23:30:37 UTC |
| **Branche** | `main` |
| **HEAD** | `6e85177709b63cc2dc14e18e424176f1e9a8e0b7` |
| **origin/main** | `6e85177709b63cc2dc14e18e424176f1e9a8e0b7` |
| **git status (tracked)** | clean |
| **Untracked acceptable** | `.tmp-sfia-review/**` |
| **Synthesis-only** | NO |
| **CKC** | `pilots/01-cadrage.md` — candidate / experimental cognitive guidance / aucune autorité d’exécution |
| **Baseline méthode** | SFIA v2.6 opérationnelle (v2.5 candidate = historique absorbé uniquement) |

---

## 0. Contrôles d’intégrité

| Contrôle | Résultat |
|----------|----------|
| Git truth check | PASS — HEAD = origin/main = `6e851777…` (merge PR #327 FinOps Phase 1) |
| Tracked worktree | clean |
| Project tracked mutations | **0** |
| Project commits | **0** |
| Project pushes | **0** |
| Provider calls (OpenAI/Cursor real/GitHub write/Neon) | **0** |
| FinOps development | **0** |
| STOP FINOPS | respecté — réserves Live Costs / R-T4-T3-SYNC-01 transportées comme contexte uniquement |

---

## 1. Sources méthode consultées (Git main)

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` (**historique/candidate**, non baseline)

Principes CKC appliqués : intention ≠ solution ; finalité/valeur utilisateur ; bénéficiaire ; périmètre/hors périmètre ; contraintes ; risques structurants ; critères de succès ; inconnues critiques ; pas de mini-conception ; cycle suivant non ouvert automatiquement.

---

## 2. Sources produit consultées

### Cadrage Control Tower
- `projects/sfia-studio/66-control-tower-product-framing.md`
- `projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md`
- `projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md`
- `projects/sfia-studio/69-control-tower-options-and-decision-pack.md`

### Fast Track Control Tower
- `projects/sfia-studio/70-…architecture-and-contract.md`
- `projects/sfia-studio/71-…backlog-and-delivery.md`
- `projects/sfia-studio/72-…decision-pack.md`
- `projects/sfia-studio/73-…delivery-report.md`

**Stale metadata identifiés (docs ≠ Git courant) :**
- Doc `70` statut « plan-open / non implémenté » — **stale** : le code Control Tower tools + reinjection est sur main via #254.
- Doc `73` « branche locale non poussée / HEAD 32e527… » — **stale** : capacités listées présentes sur main ; ne pas traiter le metadata historique comme vérité.

**Règle appliquée :** Git courant + code + runtime prime sur metadata documentaire.

---

## 3. Historique produit reconstruit (minimum demandé + post-merges)

| Merge | Contenu produit | État sur main |
|-------|-----------------|---------------|
| #254 | Control Tower + AI-guided intake foundation | Présent (OPS1 tools, D1 intake, report reinjection) |
| #294 | V2-A2 Create Project UI | Présent `/studio/projects/new` |
| #295 | V2-A3 Project Workspace UI | Présent `/studio/projects/[id]` |
| #308 | V3.1-D2-D1 Execution Run foundation | Présent moteur `lib/oa/execution-run/**` — **pas d’UI produit** |
| #309–#311 | D2-D2/D3 adapters + e2e + REX | Moteurs/tests — pas de cockpit ExecutionRun |
| #297–#303 | V3.1 catalog / CKC / qualify-cycle bridge | Moteurs cycle — exposition UI partielle (VS/D1), absente du Studio workspace |
| #312–#327 | FinOps Phase 1 | Clos avec réserves — **hors scope** de ce cycle |

---

## 4. Runtime observation

| Champ | Valeur |
|-------|--------|
| Runtime lancé | **YES** |
| Commande | `npm run dev` (port **3020**) dans `projects/sfia-studio/app` |
| Modes | fixture/local uniquement ; `OPS1_CURSOR_REAL` unset ; pas de clé OpenAI forcée |
| Captures | 3 sous `.tmp-sfia-review/product-restart/screenshots/` |

### Captures produites
1. `01-create-project.png` — `/studio/projects/new`
2. `02-project-workspace.png` — `/studio/projects/prj:f6f7ff33-3337-4909-8d3e-2bae9bc80d09`
3. `03-ops1-control-tower.png` — `/ops1/nouvelle-demande`

### Projet démo créé via UI
- Nom : `Product Restart Demo`
- Project ID : `prj:f6f7ff33-3337-4909-8d3e-2bae9bc80d09`
- LPS : `lps:cc64c546-b06d-4c9c-98f6-6e5ad99a7862`
- Source UI : `REAL_LOCAL_CORE` / fixture=false
- Disclosures runtime : `LOCAL_PROCESS` · `NOT_GUARANTEED` · `AGENT DISABLED` · `NOT_READY` · `RUN READY=false` · `PRODUCT READY=false`

### Routes réellement observées (runtime)
- `/studio/projects/new` — création operable
- `/studio/projects/[id]` — workspace projection operable
- `/ops1/nouvelle-demande` — OPS1/Control Tower fixture create-session operable (live GPT disabled sans clés)

### Routes identifiées code (page.tsx) au-delà de STUDIO_ROUTES
`/`, `/synthese`, `/nouvelle-demande`, `/ops1/nouvelle-demande`, `/cycle-actif`, `/decision`, `/workspace`, `/projects/[id]`, `/projects/new`, `/studio/projects/new`, `/studio/projects/[id]`

Rail utilitaire expose aussi : Workspace D1 (`W`), OPS1 legacy (`O`) — hors rail principal.

---

## 5. Matrice de vérité produit

Légende états : **V+O** = Visible + Operable · **V-LIM** = Visible mais limité/local/fixture · **ENG** = Moteur implémenté mal exposé · **FRAG** = Fragmenté · **DOC** = Documenté non prouvé code courant · **ABS** = Absent · **HIST** = Historique/obsolète

| # | Capacité | État | Route / surface | Fichiers source (preuves) | Preuve test/runtime | Valeur utilisateur actuelle | Limitation | Maturité | Dette / dépendance |
|---|----------|------|-----------------|---------------------------|---------------------|----------------------------|------------|----------|--------------------|
| 1 | Création projet Studio | **V+O** | `/studio/projects/new` | `CreateProjectForm.tsx`, `vertical-slice-runtime/actions` | Runtime create OK ; tests `__tests__/vertical-slice-ui/**` | Démarre un Project+LPS réel local | Process-local volatil ; NOT_READY | Slice V2-A2 stable | Persistence/IAM non requis pour valeur locale |
| 2 | Ouverture workspace projet | **V+O** | `/studio/projects/[id]` | `ProjectWorkspaceClient/View.tsx` | Runtime projection OK | Voir contexte Project/LPS/doctrine | Lecture seule ; CTA suivante = « créer un autre » | Slice V2-A3 stable | Pas de suite produit |
| 3 | Contexte / LPS | **V-LIM** | Workspace Studio | core V1 + LPS projection | Runtime montre LPS + doctrine digest | Transparence locale | Pas d’édition LPS ; volatil | Core local | Persistence produit NON urgente pour démo |
| 4 | Conversation utilisateur | **FRAG** | D1 `/nouvelle-demande` ; OPS1 `/ops1/nouvelle-demande` ; Nora shell disabled | `IntakeView.tsx`, `Ops1SessionScreen.tsx` | Runtime OPS1 fixture create ; Nora chat disabled | Expliquer un besoin (2 modèles) | Non relié au Studio Project | Fort en OPS1 fixture | Dual model D1 vs OPS1 vs Studio |
| 5 | Cadrage / qualification SFIA | **FRAG** | VS `?vs` ; D1 intake propositions ; OPS1 qualify-not-required | `VsNouvelleDemandeScreen.tsx`, `qualifyAction.ts`, D1 intake | Tests D1/VS ; runtime non forcé live | Qualification partielle / fixture | Pas dans Studio workspace | Moteurs présents | Bridging manquant |
| 6 | Sources repo-informed | **V-LIM** | OPS1 panneau « Sources & outils (Control Tower) » | `lib/ops1/tools/**`, `platform/tools/toolRouter.ts`, `gitLocalReadAdapter` | Tests `controlTowerTools.test.ts` ; runtime fixture markers | Lecture Git/GitHub bornée en session OPS1 | Hors workspace Studio ; live gated | CT FT sur main | Pas de write |
| 7 | ActionCandidate | **V-LIM** | OPS1 session | `ops1/actions.ts`, `Ops1SessionScreen.tsx` | UI + tests OPS1 | Préparer action bornée | Isolé de Project Studio | Mature slice OPS1 | Binding projet manquant |
| 8 | Gate humain | **V-LIM** | OPS1 gate UI | `actionGate.ts`, Ops1 UI | UI gate + tests | Décider avant exécution | Non dans parcours Studio create→workspace | Mature OPS1 | — |
| 9 | ExecutionContract | **V-LIM** | OPS1 | `executionContractService.ts` | Tests I3–I6 | Contrat scellé avant run | Invisible hors OPS1 | Mature OPS1 | — |
| 10 | Cursor execution | **V-LIM** | OPS1 | `cursorExecutionAdapter.ts` | Fixture default ; real gated `OPS1_CURSOR_REAL=1` | Exécution bornée démontrable en fixture | Real disabled par défaut (voulu) | Mature OPS1 | Ne pas ouvrir real sans GO |
| 11 | Rapport / preuves | **V-LIM** | OPS1 I6 | `reportService.ts`, `reportReinjection.ts` | UI + reinjection CT | Voir résultat + réinjecter | Pas de surface Preuves rail (disabled simulé) | Mature OPS1/CT | — |
| 12 | Réinjection / continuation | **V-LIM** | OPS1 | `generateReportAndReinject` | Code + UI `ct-reinjection-turn` | Continuer après exécution | Isolé ; I7 absent | CT FT | — |
| 13 | ExecutionRun | **ENG** | Aucune route UI | `lib/oa/execution-run/**` | Tests D2-D1+ ; **0 UI features/app** | Aucune valeur visible utilisateur | Socle domaine/runtime | Fondation | UI prématurée sans parcours |
| 14 | Timeline / état | **FRAG** | OPS1 timeline partielle ; D1 audit ; rail Preuves disabled | Ops1SessionScreen ; D1 cockpit | Runtime OPS1 ; Preuves simulé disabled | Visibilité partielle | Pas unifiée produit | Partiel | Unification = dette non urgente |
| 15 | Git / GitHub read | **V-LIM** | OPS1 tools | adapters + tool router | Tests CT | Sources visibles en session | Pas Studio workspace | Présent | Write interdit |
| 16 | PR / readiness | **ABS** (UI) | — | disclosures readiness locally only | Runtime pills NOT_READY | Signal honnête local | Pas de readiness GitHub produit | N/A | Hors scope |
| 17 | Navigation / cockpit | **FRAG** | Shell + D1 + Studio + OPS1 | `navigation.ts`, `UtilityRail.tsx`, shells | Runtime | Entrée multiple confuse | 3 modèles projet ; POC flush screens | Shell mature, parcours non | Consolidation nécessaire |

---

## 6. Parcours utilisateur réellement possible aujourd’hui

Grille de référence (non architecture future) :

| Étape | Possible aujourd’hui ? | Comment |
|-------|------------------------|---------|
| Entrer dans Studio | OUI | Shell `/synthese` etc. |
| Créer / ouvrir un projet | OUI (Studio V2) | Create → Open workspace |
| Expliquer son besoin | PARTIEL | D1 intake **ou** OPS1 conversation — **pas** depuis Studio workspace |
| Être guidé par SFIA | PARTIEL | VS qualify / D1 propositions / OPS1 — fragmenté |
| Comprendre cycle / recommandation | FAIBLE | Cycle actif = POC visual ; catalog moteur peu exposé workspace |
| Décider | PARTIEL | Gate OPS1 oui ; page Décision = POC visual |
| Lancer action bornée | OUI (OPS1 fixture) | Hors lien Project Studio |
| Voir exécution / preuves | OUI (OPS1) | Rail Preuves simulé disabled |
| Poursuivre le projet | FAIBLE | Workspace CTA = créer un autre ; D1 dit cycle C4/C5 non disponible |

**Parcours démontrable le plus cohérent aujourd’hui (mais discontinu) :**
1. Créer Project Studio → ouvrir workspace (**fin de piste**)
2. *Saut manuel* rail `O` → `/ops1/nouvelle-demande` → session fixture → conversation / ActionCandidate / gate / Cursor fixture / rapport

---

## 7. Réponses aux questions produit

### Q1 — Prochaine action évidente après workspace ?
**« Créer un autre projet »** uniquement (`ProjectWorkspaceView`). Aucune CTA vers conversation, cadrage, cycle, Control Tower, ActionCandidate ou ExecutionRun. Runtime confirme.

### Q2 — Workspace relié aux capacités centrales ?
**Non.** Conversation, Control Tower/OPS1, ActionCandidate, ExecutionRun vivent en vertical slices séparées. Workspace = projection contexte local.

### Q3 — Control Tower / OPS1 aujourd’hui ?
**Mélange des trois :**
- fondation réutilisable riche (tools, gate, contract, Cursor, report, reinjection) — **prouvée code/tests** ;
- expérience operable en fixture sur `/ops1/nouvelle-demande` ;
- **pas** l’expérience principale du parcours create→workspace (accès utilitaire « OPS1 legacy », live GPT off sans clés).

### Q4 — ExecutionRun D2-D1 valeur visible ?
**Socle domaine/runtime uniquement.** Aucune surface `.tsx` produit. Valeur utilisateur visible = **0** aujourd’hui.

### Q5 — Rupture principale ?
**Rupture de continuité Project Workspace → suite de pilotage** (conversation / cadrage / cycle / action / preuves). Secondaire : multiplicités D1 vs Studio Project vs OPS1 session target fixe `sfia-studio-ops1`.

### Q6 — Capacité réutilisable immédiatement ?
**OPS1 / Control Tower fixture path** (conversation → ActionCandidate → gate → ExecutionContract → Cursor fixture → report → reinjection) + **Studio create/workspace** comme entrée Project/LPS. Ne pas reconstruire ces moteurs.

### Q7 — Flags bloquants pour la prochaine valeur ?
| Flag | Utile maintenant ? | Verdict |
|------|--------------------|---------|
| NOT_READY / productReady=false | Signal honnête | **Non bloquant** pour une slice de continuité locale |
| NOT_GUARANTEED persistence | Attendu process-local | **Non bloquant** pour démo locale |
| IAM NOT_SELECTED | Gouvernance future | **Non bloquant** maintenant |
| persistence non sélectionnée | Idem | **Ne pas** ouvrir chantier persistence |
| agent execution disabled (Studio disclosures) | Studio path sans agent | **Non bloquant** si on réutilise OPS1 fixture ; **ne pas** ouvrir Cursor real |

---

## 8. Hypothèse ChatGPT (testée, non décision)

> Gap principal = raccord Project / Project Workspace ↔ Control Tower / conversation / cadrage / cycle / ExecutionRun.

**Verdict : CONFIRMÉE, avec nuance.**

- Confirmé runtime + code : workspace operable mais sans suite ; OPS1/CT riche mais disjoint ; ExecutionRun encore plus dissocié (engine-only).
- Nuance : il n’y a pas un seul « cockpit manquant », mais **trois surfaces projet** (Studio V2, D1, OPS1) qui se concurrencent. Le gap dominant pour la démonstration produit reste bien la **continuité** après create/open.

---

## 9. Moteurs réutilisables prioritaires (ne pas reconstruire)

1. Studio V2-A1/A2/A3 — create + workspace + disclosures
2. OPS1 I3–I6 + Control Tower tools/reinjection
3. D1 intake (si on choisit la continuité D1 — secondaire)
4. Cycle catalog / CKC / qualify bridge (V3.1) — pour une slice ultérieure de recommandation de cycle
5. ExecutionRun — garder en fondation ; **ne pas** prioriser UI seule

---

## 10. Dettes

### Bloquantes pour la prochaine valeur visible
- Absence de CTA / parcours reliant Studio workspace → surface de pilotage existante (OPS1/CT ou équivalent borné)
- Fragmentation navigation (utilisateur ne sait pas où continuer)

### NON bloquantes maintenant
- IAM NOT_SELECTED
- Product persistence NOT_SELECTED / Neon
- Cursor real / OpenAI live
- Unification timeline globale
- FinOps Live Costs / R-T4-T3-SYNC-01
- Page Preuves rail
- Refonte shell/Figma
- Exposer ExecutionRun UI isolément

---

## 11. À NE PAS construire maintenant

- Nouvelle architecture / AF re-arbitrage
- Persistence produit / IAM
- FinOps (STOP FINOPS)
- MONITOR / E1
- Nouvelle plateforme MCP
- Refonte globale navigation
- Polish pixel-perfect / Figma
- Industrialisation readiness GitHub
- UI ExecutionRun sans parcours conversation→gate
- Live providers comme prérequis de la prochaine slice

---

## 12. Options de prochaine vertical slice (max 3)

### Option A — Continuité Workspace → OPS1/Control Tower (fixture)
- **Problème utilisateur supprimé :** après création/ouverture, l’utilisateur sait quoi faire ensuite pour piloter.
- **Parcours :** create → workspace → continuer vers session OPS1/CT (fixture) avec contexte projet visible.
- **Réutilise :** Studio V2 + OPS1/CT complets.
- **Changements nécessaires (cadrage, non conception) :** CTA + passage de contexte minimal + disclosure honnête du binding (même s’il reste shallow) ; **pas** nouvelle architecture.
- **Dette créée :** faible si binding explicitement borné / non-garanti.
- **Dépendances :** aucune persistence/IAM/live.
- **Valeur démo :** haute — parcours cohérent démontrable sans providers payants.
- **Risque :** sur-promettre un binding projet↔session trop fort.
- **Cycle SFIA suivant candidat :** 5 — Delivery (vertical slice bornée) **après** GO conception légère si Morris l’exige, sinon delivery direct borné selon operating model.
- **Profil candidat :** Standard
- **Pourquoi maintenant :** ferme la rupture #1 avec moteurs existants.
- **Pourquoi pas :** si Morris préfère d’abord clarifier le modèle projet unique (Studio vs D1) — voir option B.

### Option B — Continuité Workspace → D1 intake / cockpit
- **Problème :** même rupture, via D1.
- **Réutilise :** D1 intake + cockpit.
- **Limitation preuve :** D1 cockpit dit déjà « ouvrir un cycle (C4/C5 — non disponible) » → continuité partielle, moins riche que OPS1 pour agents/preuves.
- **Valeur démo :** moyenne.
- **Pourquoi pas maintenant :** déplace la rupture vers « cycle non disponible » ; n’exploite pas le moteur agent le plus riche.
- **Cycle candidat :** 5 — Delivery · Profil Standard

### Option C — Recommandation de cycle visible dans le workspace (catalog/CKC/qualify)
- **Problème :** « être guidé / comprendre le cycle ».
- **Réutilise :** V3.1 catalog/CKC/qualify.
- **Limitation :** sans continuité conversation/action, la démo s’arrête encore avant décision/exécution.
- **Valeur démo :** moyenne-faible vs A.
- **Pourquoi pas maintenant :** utile ensuite, après continuité A.
- **Cycle candidat :** 1/5 selon profondeur · Profil Standard

---

## 13. Recommandation unique (NON décision Morris)

**Recommander Option A — Continuité Project Workspace → OPS1 / Control Tower (mode fixture).**

Justification (ordre imposé) :
1. **Valeur visible** : l’utilisateur cesse de « finir » sur une fiche projet.
2. **Continuité de parcours** : create → open → piloter.
3. **Réutilisation moteur** : OPS1/CT déjà sur main (#254).
4. **Faible dette** : pas d’IAM/persistence/FinOps/architecture.
5. **Scope borné** : CTA + contexte + disclosures ; fixture only.
6. **Preuve rapide** : démontrable localement sans provider live.

Ce n’est **pas** un GO delivery. Morris décide.

---

## 14. Cycle SFIA suivant candidat / profil / gates

| Élément | Proposition candidat |
|---------|----------------------|
| Cycle suivant candidat | **5 — Delivery** (vertical slice continuité), éventuellement précédé d’un micro-cadrage/conception bornée si Morris l’exige |
| Profil candidat | **Standard** |
| Gates Morris nécessaires avant exécution | 1) GO sur la recommandation de slice (Option A ou alternative) · 2) GO delivery / exécution code · 3) tout élargissement (binding fort, live providers, persistence, unification D1/Studio) = gate séparé |
| Non-ouvert automatiquement | Delivery, conception UX/UI, architecture, FinOps |

---

## 15. Inconnues critiques (non bloquantes pour ce cadrage)

- Binding exact Project Studio ↔ session OPS1 (shallow label vs identité partagée) — **à trancher au GO slice**, pas ici.
- Destin à moyen terme de D1 vs Studio Project model — hors périmètre immédiat.
- Quand (si) exposer ExecutionRun dans l’UI — après continuité, pas avant.
- Statut « expérience principale » vs « legacy » d’OPS1 dans la nav — décision produit Morris.

---

## 16. Verdict final

**PRODUCT RESTART CADRAGE READY — CURRENT USER JOURNEY MAPPED — PRIMARY PRODUCT GAP IDENTIFIED — NEXT VERTICAL SLICE RECOMMENDED — NO DELIVERY EXECUTED — MORRIS DECISION REQUIRED**

Réserves non bloquantes : metadata docs 70/73 stale (signalés) ; live GPT non observé (volontairement) ; binding projet↔OPS1 non spécifié (inconnu pour le GO suivant).

---

## 17. Instruction ChatGPT de validation

Lire depuis Git :
- current main `6e85177709b63cc2dc14e18e424176f1e9a8e0b7`
- branche `sfia/review-handoff`
- `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier : cycle 1 / Standard ; vérité Git ; matrice sourcée ; captures runtime pour claims UX ; 0 mutation projet ; 0 provider live ; FinOps non rouvert ; séparation observation / hypothèse / option / recommandation ; recommandation ≠ décision Morris ; slice bornée ; cycle suivant candidat ; gates Morris ; handoff distant.

**Règle finale :** CE CYCLE NE LANCE PAS LA PROCHAINE VERTICAL SLICE. Il la recommande. Morris décide. ChatGPT valide et prépare. Cursor n’exécute aucun delivery sans nouveau GO Morris.

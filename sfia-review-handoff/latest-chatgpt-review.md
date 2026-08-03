# Full Review Pack — SFIA Studio V3.1-D2-D Integration Foundation Cadrage

## Métadonnées du cycle

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-03 16:49:00 CEST (+0200) |
| **Rôle** | Cursor (exécution Cycle 1 — Cadrage Critical) |
| **Cycle** | Cycle 1 — Cadrage |
| **Profil** | Critical |
| **Typologie** | EVOL — documentation-only |
| **Verdict cycle** | READY FOR MORRIS ARBITRATION |
| **Branche** | `framing/sfia-studio-v3-1-d2-d-integration-foundation-cadrage` |
| **HEAD / origin/main** | `004296ac9355ef9906584f5d86be6182a96dd2fd` |

## GO Morris consommé

```text
GO CADRAGE SFIA STUDIO V3.1-D2-D INTEGRATION FOUNDATION

DEFINE THE MINIMAL EXTERNAL-RUNTIME FOUNDATION REQUIRED FOR D3:
OPENAI, GITHUB AND CURSOR PORTS,
RUNTIME VALIDATION,
EXECUTION STATES,
SANDBOX,
SECRETS,
OBSERVABILITY,
CONTRACT FIXTURES
AND R-QA-D2C-01 TREATMENT.

NO DELIVERY
NO UI CODE
NO CREATECYCLE
NO GIT MUTATION
NO METHOD PROMOTION
```

Date/heure du GO : 2026-08-03 16:31 CEST (+0200)

### Interprétation de NO GIT MUTATION

- aucune mutation d'historique ou remote **projet** ;
- aucun `git add` / staging / commit / push / PR / merge **projet** ;
- branche locale de cadrage + fichier documentaire 20 local = seuls supports projet autorisés ;
- push `sfia/review-handoff` L3 borné **distinct** — n'autorise pas le push projet.

## Git Truth initial

| Check | Résultat |
|-------|----------|
| Repository | `mcleland147/sfia-workspace` (local worktree `sfia-workspace-t-a7-lot1-post-merge`) |
| `origin/main` | `004296ac9355ef9906584f5d86be6182a96dd2fd` — **MATCH** |
| Working tree tracked | propre |
| Staged | vide |
| Branche locale créée | `framing/sfia-studio-v3-1-d2-d-integration-foundation-cadrage` @ same SHA |
| Branche distante D2-D | absente |
| PR D2-D | absente |
| Artefacts locaux hors scope | `.tmp-sfia-review/**` uniquement |

## Handoff source (avant publication)

| Champ | Valeur |
|-------|--------|
| Tip | `22be93957250bd61648bdbbb09c57b0c9a139b9c` |
| Blob | `543d52ddcb02f9fbd8ae4dc847ea0674c22489d6` |
| Titre attendu | SFIA Studio V3.1-D2-C — Documentary Integration and Post-Merge Full Review Pack |
| Verdict attendu | V3.1-D2-C DOCUMENTARY ALIGNMENT INTEGRATION AND POST-MERGE PASS WITH RESERVES |
| Vérification tip/blob | **MATCH** (`22be93957250bd61648bdbbb09c57b0c9a139b9c` / `543d52ddcb02f9fbd8ae4dc847ea0674c22489d6`) |

## CKC Cadrage

| Champ | Valeur |
|-------|--------|
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| Autorité | **aucune** autorité d'exécution |
| Limite | le CKC ne décide ni des ports, ni des SDK, ni des services, ni de la trajectoire |

## Sources consultées (obligatoires + découverte)

### Méthode / scripts

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
5. `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
6. `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
7. `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md`
8. `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`
9. `scripts/sfia/README.md`
10. `scripts/sfia/publish-review-handoff.sh`

### Handoff

11. `git show origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` (tip/blob ci-dessus)

### Framing D2

12–18. README, 08, 15–19 sous `first-user-visible-vertical-slice-framing/`

### D2-C / contrats

19–27. `ckcQualification*` / `qualifyCycleWithCkc` / ports / `ckcReferenceManifest` / `index.ts`

### Runtime / UI

28–37. `vertical-slice-runtime/*` + `vertical-slice-ui/*` + README V2-A3

### Config read-only

38–42. `package.json`, `tsconfig.json`, `next.config.*`, `.gitignore`, `.env.example` éventuels (aucun secret réel lu/affiché)

### Découverte locale complémentaire (contenu lu)

- `app/lib/platform/ai/` — `openaiProvider.ts`, `fakeProvider.ts`, `provider.ts`
- `app/lib/platform/tools/` — `toolRouter.ts`, types tools
- `app/lib/repository/githubReadAdapter` (référencé via tools)
- `harness/src/ports/*` — Cursor/GPT/Git spikes
- `harness/src/increment-d/cursorSandboxRunner.ts`
- `app/lib/oa/cycle/**` — D2-C bridge
- `app/lib/oa/execution-contract/domain/types.ts`
- Framing living README (D2-D gated, D3 closed, réserves)

## Inventaire local des capacités existantes

### OBSERVATION — capacités CONFIRMED IN REPO (silos)

| Domaine | Preuve | Portée |
|---------|--------|--------|
| OpenAI SDK / ConversationProvider | `app/package.json` dep `openai` ; `OpenAIConversationProvider` ; Responses API adapter | D1/OPS1 conversation — **pas** fondation D2-D OA unifiée |
| Fake AI | `FakeConversationProvider` | Tests / force fake |
| GitHub read tools | `github_get_*` types + toolRouter + githubReadAdapter | Read-only allowlist |
| Cursor harness | `cursorRealSpike`, `cursorExecutor`, `e2eCursorBounded`, `cursorSandboxRunner` | Harness POC — **pas** OA cycle D2-D package |
| GPT harness fixtures/live | `gptFixture`, `gpt*Live`, validators `correlationId` | Harness |
| Vertical-slice runtime | process-local ; Server Actions ; fixtures doctrine ; audit | UI slice existante |
| D2-C QualifyCycle | Result Success/Failure ; CycleAudit ; fail-closed nominal | Read-only intégré |
| Redaction patterns | harness remplace `OPENAI_API_KEY=...` par `[REDACTED]` | Harness evidence |

### OBSERVATION — NO REPO-BACKED D2-D OA INTEGRATION FOUNDATION PACKAGE IDENTIFIED

Aucun module dédié sous `oa/cycle` unifiant ports AI/Git/Cursor/Secret/EventSink pour D3. Les briques existent en silos (platform / harness / D1). Ne pas écrire « OpenAI/GitHub/Cursor integration does not exist » : des adapters partiels existent ; la fondation D2-D produit n'existe pas encore comme package.

### Server Actions / secrets / env

- Server Actions `"use server"` présentes dans vertical-slice / features.
- Patterns env `OPENAI_API_KEY` référencés ; **aucune valeur de secret affichée** dans ce cycle.
- Aucun nouveau `.env` créé.

## Résultats recherches (échantillon)

Mots-clés : OpenAI, openai, GitHub, Octokit, cursor-agent, Cursor, provider, adapter, secret, token, apiKey, observability, telemetry, trace, correlationId, Server Action, fetch.

Hits notables :

- `correlationId` largement présent (harness, oa/execution-contract, vertical-slice fixtures).
- `mechanismId: "cursor-agent-cli"` dans `e2eCursorBounded.ts`.
- `OPENAI_API_KEY` redaction dans evidence/sandbox runners.
- Tools `github_get_repository` dans OPS1 conversation service.
- Platform AI `openaiProvider.ts` + fake.
- Harness ports GPT/Cursor/GitReader.

**Aucun appel réel OpenAI/GitHub/Cursor exécuté dans ce cycle.**

## Observations confirmées

1. D2-A/B/C intégrés ; D2-C documentaire aligné sur main `004296ac…`.
2. D2-D gated ; D3 fermé dans framing living.
3. Réserves R-QA-REV-01, R-QA-REV-02, R-QA-D2C-01 **OPEN**.
4. Dualité runtime : `vertical-slice-runtime` vs `oa/cycle`.
5. Capacités provider partielles hors package D2-D.
6. Working tree projet : seul nouveau fichier projet = document 20 (non tracké).

## Hypothèses

1. Les adapters platform/harness pourront être réutilisés ou enveloppés par des ports D2-D — **hypothèse d'implémentation**, non architecture adoptée.
2. Un walking skeleton read-only suffit pour débloquer le verdict runtime D3 — **hypothèse produit**.
3. INT-C minimise drift fixtures vs réel mieux que INT-A prolongé — **hypothèse**.

## Inconnues critiques

1. Capacités Cursor product exactes hors spikes harness — **UNVERIFIED**.
2. Choix auth GitHub (App vs PAT vs autre) — **non décidé**.
3. Stockage secrets cible (local vs vault) — **non décidé**.
4. Catégories RGPD exactes des données projet envoyées aux modèles — **à confirmer**.
5. Mapping exact Responses API vs besoins D2-D OA — **UNVERIFIED** hors usage D1 actuel.

## Document 20 complet

Path : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/20-v3-1-d2-d-integration-foundation-cadrage.md`

---BEGIN DOCUMENT 20---
# 20 — V3.1-D2-D Integration Foundation — Cadrage

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-08-03 16:46:29 CEST (+0200) |
| **Cycle** | Cycle 1 — Cadrage |
| **Profil SFIA** | **Critical** |
| **Typologie** | EVOL — exécution documentation-only |
| **Projet** | SFIA Studio V3.1-D2-D Integration Foundation |
| **Branche** | `framing/sfia-studio-v3-1-d2-d-integration-foundation-cadrage` |
| **Base** | `main@004296ac9355ef9906584f5d86be6182a96dd2fd` |
| **Statut** | `D2-D INTEGRATION FOUNDATION CADRAGE — READY FOR MORRIS ARBITRATION — NO DELIVERY AUTHORIZED` |
| **CKC** | `method/.../pilots/01-cadrage.md` — candidate — experimental cognitive guidance — aucune autorité d'exécution |
| **Code / UI / API / secrets / Delivery** | **non** |

### GO Morris consommé

```text
GO CADRAGE SFIA STUDIO V3.1-D2-D INTEGRATION FOUNDATION

DEFINE THE MINIMAL EXTERNAL-RUNTIME FOUNDATION REQUIRED FOR D3:
OPENAI, GITHUB AND CURSOR PORTS,
RUNTIME VALIDATION,
EXECUTION STATES,
SANDBOX,
SECRETS,
OBSERVABILITY,
CONTRACT FIXTURES
AND R-QA-D2C-01 TREATMENT.

NO DELIVERY
NO UI CODE
NO CREATECYCLE
NO GIT MUTATION
NO METHOD PROMOTION
```

Date/heure du GO : 2026-08-03 16:31 CEST (+0200)

**NO GIT MUTATION (interprétation) :** aucune mutation d'historique ou remote projet ; aucun staging/commit/push/PR/merge projet ; branche locale + document 20 local uniquement ; push `sfia/review-handoff` L3 distinct autorisé.

---

## B. Règles épistémiques

| Marqueur | Signification |
|----------|---------------|
| **Observation** | Fait vérifiable dans Git / artefacts |
| **Hypothèse** | Inférence non prouvée, marquée comme telle |
| **Option** | Alternative comparable, non adoptée |
| **Recommandation candidate** | Proposition Cursor — **non adoptée** |
| **Décision Morris existante** | Déjà tranchée (ex. D2-A/B/C intégrés) |
| **Décision candidate — Morris arbitration required** | À trancher ; statut `NOT DECIDED` |
| **Inconnue critique** | Inconnue qui, si fausse, invalide une trajectoire |
| **Réserve** | Réserve ouverte transportée, non levée |

Aucune recommandation ni option n'est présentée comme architecture ou Delivery adoptée.

---

## C. Baseline Git-authoritative

**Observations :**

- D2-A / D2-B / D2-C **intégrés sur main** (produit) ; clôture documentaire D2-C via PR #304 merge `004296ac…`.
- D2-C est un bridge **read-only** : `qualifyCycleWithCkc` + Result Success/Failure unique ; **aucune mutation CreateCycle** dans le package D2-C.
- Framing living : **D2-D gated / non ouvert** ; **D3 fermé** ; toute ouverture exige GO Morris distinct.
- Runtime applicatif vertical slice : `vertical-slice-runtime` **process-local** ; Server Actions présentes (`"use server"`) ; audit noop/sqlite borné ; doctrine via fixtures registry.
- Persistance produit **non durable** au sens production (runtime local / mémoire / fixtures) — Observation bornée au code inspecté.
- Réserves ouvertes :
  - R-QA-REV-01 MINOR — OPEN NOT LIFTED ;
  - R-QA-REV-02 MINOR — OPEN NOT LIFTED ;
  - R-QA-D2C-01 MINOR — OPEN (runtime `null`/`undefined` requests ; à reconsidérer avant frontière externe non validée).
- Frontière client/serveur : providers conversation OpenAI et tools GitHub sont côté serveur / platform ; UI ne doit pas importer les adapters secrets.

**OBSERVATION — capacités externes déjà présentes ailleurs dans le repo (hors fondation D2-D OA dédiée) :**

- `app/lib/platform/ai` : `OpenAIConversationProvider` + `FakeConversationProvider` + dépendance `openai` — **CONFIRMED IN REPO** (usage D1/OPS1 conversation, pas un port D2-D OA cycle unifié).
- `app/lib/platform/tools` + `repository/githubReadAdapter` : outils GitHub **read-only** typés (`github_get_*`, checks, comments) — **CONFIRMED IN REPO**.
- `projects/sfia-studio/harness/src/ports` : spikes Cursor (`cursorRealSpike`, sandbox, fixtures GPT) — **CONFIRMED IN REPO** (harness, pas OA cycle D2-D).
- `app/lib/adapters` : ports **fixtures-only** (README app) — **CONFIRMED IN REPO**.

**OBSERVATION — NO REPO-BACKED D2-D OA INTEGRATION FOUNDATION PACKAGE IDENTIFIED** : aucun module dédié « D2-D Integration Foundation » sous `oa/cycle` unifiant ports OpenAI/GitHub/Cursor pour D3. Les briques existent en silos (platform / harness / D1).

---

## D. Intention et valeur

**Problème (intention) :** D3 doit représenter fidèlement une exécution externe (AI, Git Truth distant, worker Cursor) sans mentir sur la source (fixture / sandbox / real) et sans ouvrir CreateCycle ni mutation Git.

**Solution à ne pas confondre avec le besoin :** brancher immédiatement tous les SDK fournisseurs en production, ouvrir l'écriture Git, ou livrer une UI Figma.

**Valeur de D2-D avant Delivery D3 :**

- stabiliser les **contrats** et la **validation runtime** aux frontières ;
- rendre observables et fail-closed les erreurs externes ;
- permettre un walking skeleton **read-only** prouvable ;
- traiter R-QA-D2C-01 avant exposition à des payloads externes non validés.

**Ce qui peut encore être simulé :** UI exploratoire avec fixtures contractuelles après stabilisation des DTO/états.

**Ce qui doit être réel pour valider le parcours (candidat) :** au moins une lecture GitHub bornée et/ou une exécution Cursor sandbox read-only — **recommandation candidate INT-C**, non adoptée.

**Ce qui ne doit pas être implémenté trop tôt :** mutations Git, CreateCycle, IAM complet, dashboard, L4/L5, credentials définitifs, architecture technique figée.

---

## E. Périmètre D2-D candidat

Socle minimal **candidat** (documentation de besoin) :

1. Contrats de ports externes (AI / Git / Execution Worker / Secret / Event Sink) — noms de travail.
2. Validation runtime entrée/sortie aux frontières (schémas, fail-closed).
3. Modèle d'états d'exécution (option à arbitrer).
4. Erreurs externes normalisées (pas d'exceptions brutes vers D3).
5. Exigences sandbox (isolation, allowlist future, read-only initial).
6. Frontières secrets et permissions (moindre privilège, jamais côté client).
7. Événements d'observabilité + redaction + FinOps sourcé.
8. Fixtures contractuelles versionnées (mêmes DTO que adapters réels).
9. Frontière serveur exclusive pour secrets et providers.
10. Préparation d'un walking skeleton **read-only**.
11. Traitement candidat de R-QA-D2C-01 avant frontière externe non validée.

---

## F. Hors périmètre

Exclu explicitement de ce cadrage et de toute Delivery non autorisée :

- implémentation / SDK install / appels fournisseurs réels dans ce cycle ;
- mutation Git (branche/commit/push/PR/merge) ;
- CreateCycle ;
- persistance produit complète ;
- IAM complet ;
- UI / Figma / accessibilité Delivery ;
- dashboard / orchestration L4-L5 ;
- production / RUN readiness / déploiement ;
- architecture adoptée ;
- choix définitif de credentials / stockage secrets ;
- promotion méthode ;
- levée de réserves.

---

## G. Acteurs et trust boundaries

| Acteur | Confiance | Entrées | Sorties | Permission max candidate | Mutation | Contrôle humain | Journalisation |
|--------|-----------|---------|---------|--------------------------|----------|-----------------|----------------|
| Morris / utilisateur | Haute (décideur) | GO, décisions | Arbitrages | Décision | N/A | Source d'autorité | Décisions tracées |
| Navigateur D3 futur | Non fiable | Affichages, formulaires | Intentions UI | Aucun secret | Interdite | Gate Morris pour écritures futures | Pas de secrets/prompts complets |
| Serveur SFIA Studio | Semi-confiant | Requests validées | DTO redacted | Secrets serveur | Interdite en D2-D1 | Serveur | correlationId, états, erreurs redacted |
| D2-C Core | Confiance interne read-only | Signaux + projection | Success/Failure | Aucune mutation | Interdite | N/A | Audit cycle existant |
| Provider OpenAI candidat | Externe non fiable | Prompt borné | Texte/structured + usage | Appel API serveur | N/A | Quotas/gates | Usage si fourni ; pas de clé ; pas de prompt complet par défaut |
| Provider GitHub candidat | Externe non fiable | Refs/PR/CI read | Métadonnées | **Read-only** initial | **Interdite** au walking skeleton | Allowlist repo | Métadonnées publiques allowlistées |
| Worker Cursor candidat | Externe non fiable | Contrat sandbox | Événements + résultat | Sandbox read-only initial | **Interdite** par défaut | Contrat borné | États + redaction |
| Secret source candidate | Critique | Identité secret | Valeur en mémoire serveur | Serveur only | N/A | Rotation/révocation | Identité seule, jamais valeur |
| Observability sink | Semi-confiant | Événements | Stockage traces | Append borné | N/A | Redaction policy | Pas de secrets/PII brutes |
| Sandbox workspace | Isolé | Fichiers allowlist | Artefacts preuve | Read-only initial | Write gated futur | Timeout/quota | Chemins sandbox only |

---

## H. Matrice des capacités fournisseurs

### OpenAI

| Dimension | Contenu |
|-----------|---------|
| Besoin SFIA | Exécution AI bornée pour qualification / analyse structurée exposable à D3 |
| Capacité | Conversation / Responses API via SDK `openai` |
| Preuve | **CONFIRMED IN REPO** : `OpenAIConversationProvider` ; **UNVERIFIED** pour couverture exacte Responses vs besoins D2-D OA |
| Auth | `OPENAI_API_KEY` serveur — **CONFIRMED IN REPO** (pattern env) ; stockage cible **UNVERIFIED** |
| Read/write | Read/compute externe ; pas de mutation Git |
| Timeout/retry/cancel | Partiels dans platform ; politique D2-D **UNVERIFIED** / à définir |
| Fixtures | Fake provider + harness GPT fixtures — **CONFIRMED IN REPO** |
| Risques | Fuite prompt/données ; coût ; lock-in ; erreurs non normalisées vers D3 |

### GitHub

| Dimension | Contenu |
|-----------|---------|
| Besoin SFIA | Git Truth distant : repo/ref/commit/branche/PR/CI |
| Capacité | Tools read-only typés + adapter lecture |
| Preuve | **CONFIRMED IN REPO** (types + router) ; auth GitHub App vs token **UNVERIFIED** pour choix définitif |
| Write futures | Création branche/commit/push/PR/merge — **hors scope** walking skeleton |
| Fixtures | Fake/tool deny paths — **CONFIRMED IN REPO** patterns |
| Risques | Mutation accidentelle ; permissions excessives ; rate limit |

### Cursor

| Dimension | Contenu |
|-----------|---------|
| Besoin SFIA | Exécution agentique contrôlée dans sandbox |
| Capacité | CLI/agent harness spikes (`cursor-agent-cli` mentionné dans contrats harness) |
| Preuve | **CONFIRMED IN REPO** (harness spikes/sandbox) ; capacités produit Cursor exactes hors repo **UNVERIFIED** |
| Mode initial | Read-only sandbox — **recommandation candidate** |
| Write | **Interdit** par défaut ; futur gated distinct |
| Risques | Commande arbitraire ; escape sandbox ; secrets dans workspace ; durée longue |

---

## I. Contrats de ports candidats (noms de travail — non adoptés)

### 1. AI Provider (candidat)

Exécuter requête AI bornée ; sortie structurée ; streaming/différé comme **options** ; usage/coût si fourni ; timeout/cancellation ; erreurs normalisées ; **aucune clé côté client**.

### 2. Git Provider (candidat)

Lecture repo/ref/commit/branche/PR/CI ; preuve Git Truth ; permissions read-only ; **aucune** création branche/commit/push/PR/merge dans le premier walking skeleton.

### 3. Execution Worker Provider (candidat)

Lancer exécution Cursor contrôlée ; sandbox workspace ; mode read-only initial ; événements + résultat structuré ; **aucune** option force/écriture par défaut ; **aucune** commande arbitraire depuis le navigateur.

### 4. Secret Provider (candidat)

Fournir secret **serveur only** ; rotation/révocation ; identité sans valeur ; pas de sérialisation client ; pas de trace de valeur.

### 5. Execution Event Sink (candidat)

État ; correlationId ; provider ; timestamps ISO validés ; latence ; résultat de contrôle ; redaction ; aucune donnée sensible brute par défaut.

---

## J. Validation runtime

**Exigences candidates :**

- schémas runtime obligatoires à chaque frontière ;
- validation **avant** lecture de métadonnées ;
- fail-closed ;
- aucune exception brute vers D3 ;
- aucun succès partiel interprété comme succès ;
- aucun `consumed=true` après erreur ;
- correlationId obligatoire ;
- timestamp ISO validé avant événement (lien **R-QA-REV-01**) ;
- enums provider/state stricts ;
- payload size bound ; timeout bound ;
- rejet champs inattendus si pertinent ;
- validation sorties fournisseurs ;
- redaction erreurs ;
- idempotency candidate ; règles de reprise.

**Lien R-QA-D2C-01 :** Runtime `null`/`undefined` requests peuvent lever avant normalisation ; à traiter **avant** frontière externe non validée (voir §Q).

---

## K. États d'exécution

### Option STATE-A — modèle minimal

Dimensions exemples : `idle` · `running` · `awaiting_human` · `succeeded` · `failed` · `cancelled`.

- Valeur D3 : simple à afficher
- Complexité : basse
- Reprise / observabilité : limitée
- Mapping providers : grossier
- Risque : sous-modélisation des timeouts/blocked
- Réversibilité : haute

### Option STATE-B — modèle opérationnel détaillé

Dimensions exemples : `created` · `queued` · `validating` · `running` · `awaiting_human` · `succeeded` · `failed` · `timed_out` · `cancelled` · `blocked`.

- Valeur D3 : fidélité opérationnelle
- Complexité : plus haute
- Observabilité : meilleure
- Risque : sur-modélisation / provider-specific leakage
- Réversibilité : moyenne

**Recommandation candidate :** démarrer par **STATE-A** pour contrats/fixtures, avec extension documentée vers sous-états opérationnels (timeout/blocked) sans figer STATE-B complet — **NOT DECIDED**.

---

## L. Sandbox

Exigences minimales **candidates** :

- workspace isolé ; périmètre repo explicite ;
- allowlist commandes **future** ;
- network egress borné ;
- lecture seule initiale ;
- aucune élévation automatique ;
- timeout + quota ressources ;
- nettoyage + conservation preuves ;
- absence de secret dans fichiers workspace ;
- blocage chemins protégés ;
- contrôle humain avant toute future écriture.

Distinguer : **sandbox fixture** · **sandbox provider réel read-only** · **futur sandbox write gated**.

Preuve repo : patterns harness sandbox — **CONFIRMED IN REPO** (réutilisabilité OA D2-D = hypothèse).

---

## M. Secrets, permissions et données

**Candidats :** `OPENAI_API_KEY` / modèle ; credential GitHub read ; credential Cursor — statut exact **UNVERIFIED** hors patterns env existants.

Principes candidats :

- moindre privilège ; GitHub **read-only** initial ;
- OpenAI serveur uniquement ;
- stockage local dev vs cible prod : **non décidé** ;
- rotation / révocation / expiration ;
- audit d'usage sans valeur ;
- interdits dans logs/UI : clés, prompts complets, réponses complètes, tokens bruts, PII ;
- exposition navigateur **interdite** ;
- minimisation RGPD à confirmer (catégories données projet dans prompts) — **Inconnue critique**.

Ce cycle : **aucune** variable créée, aucun `.env`, aucun secret affiché.

---

## N. Observabilité et FinOps

Contrat d'événement **candidat** : correlationId · executionId candidat · provider · opération · état précédent/nouveau · début/fin · latence · timeout · retry count · erreur normalisée · token/usage **si fourni** · coût estimé **si calculable et sourcé** · quota restant **si disponible** · niveau redaction · source `fixture|sandbox-real|real`.

Anti-claims : pas de clé ; pas de prompt/réponse complets par défaut ; **aucune** affirmation SLO / RUN READY ; **aucun** prix/quota inventé.

---

## O. Fixtures contractuelles

Règles candidates : mêmes DTO/événements que adapters réels ; versionnées ; déterministes ; aucune règle métier parallèle ; source affichée (`fixture` / `sandbox-real` / `real`) ; données synthétiques ; aucun secret/PII réelle ; rejouables ; invalidables si contrat change.

Scénarios minimaux : succès · validation entrée KO · validation sortie KO · auth refusée · permission insuffisante · rate limit · timeout · provider down · résultat partiel · cancellation · sandbox bloqué · erreur interne normalisée.

---

## P. Stratégie services réels vs fixtures

| Option | Bénéfice | Risque | Dette | Testabilité | Fidélité UI | Coût | Sécurité | Réversibilité |
|--------|----------|--------|-------|-------------|-------------|------|----------|---------------|
| **INT-A** fixtures-first prolongé | Sûr, rapide | Drift vs réel | Haute si trop long | Haute | Faible | Bas | Haute | Haute |
| **INT-B** services réels immédiats | Fidélité | Secrets, coût, flakiness | Couplage précoce | Basse | Haute | Élevé | Risquée | Basse |
| **INT-C** contract-first hybride | Contrats + 1 walking skeleton read-only | Complexité orchestration | Moyenne | Haute | Moyenne→haute | Contrôlé | Haute si read-only | Moyenne |

**Recommandation candidate : INT-C** — contrats + fixtures d'abord, puis walking skeleton read-only réel/sandboxé, écritures Git **hors trajectoire** — **NOT DECIDED — Morris arbitration required**.

---

## Q. Traitement de R-QA-D2C-01

**Rappel factuel (Réserve) :** Runtime `null`/`undefined` requests, exclus par le contrat TypeScript courant, peuvent encore lever une exception tandis que le catch externe relit des métadonnées. Aucun résultat succès/exploitable. Acceptée pour transport ; à reconsidérer avant frontière runtime externe non validée. **OPEN — non levée**.

| Option | Surface | Réserve restante | Impact D2-C | Régression | Dette | Preuve QA | Gate |
|--------|---------|------------------|-------------|------------|-------|-----------|------|
| **R-A** corriger D2-C avant frontière | Couverture source | Peut clôturer après QA | Patch borné | Possible | Faible si borné | QA indépendante | GO Delivery correctif D2-C |
| **R-B** validation adapter stricte sans toucher D2-C | Frontière | Réserve D2-C demeure | Aucun | Faible | Dette frontière | Tests adapters | GO D2-D Delivery |
| **R-C** défense en profondeur | Frontière + correctif | Levée conditionnelle | Patch + adapters | Moyenne | Plus large | QA D2-C + D2-D | Deux GO possibles |

**Recommandation candidate : R-C** (validation frontière obligatoire dans D2-D + correctif D2-C borné avant walking skeleton réel) — **NOT DECIDED**. Ne modifie aucun code ; ne lève aucune réserve dans ce cycle.

---

## R. Dépendances D3

| Élément D3 | Avant UX contract | Avant UI Delivery | Fixture OK | Réel requis | Preuve |
|------------|-------------------|-------------------|------------|-------------|--------|
| États d'exécution | Oui | Oui | Oui | Non initialement | Contrat + fixtures |
| Erreurs normalisées | Oui | Oui | Oui | Non | Matrice erreurs |
| Disclosures source | Oui | Oui | Oui | Oui pour vérité | Affichage fixture/sandbox/real |
| Git Truth | Partiel | Oui pour runtime verdict | Partiel | Oui pour verdict distant | Lecture allowlist |
| Résultat D2-C | Oui | Oui | Oui | Oui (déjà intégré) | Package D2-C |
| Preuve CKC | Oui | Oui | Oui | Oui | D2-A/B/C |
| Attente humaine | Oui | Oui | Oui | N/A | État awaiting_human |
| Cancellation / timeout | Oui | Oui | Oui | Pour réel | Scénarios |
| Permissions | Oui | Oui | Simulé | Pour réel | Deny paths |
| Coût/usage | Optionnel UX | Souhaitable | Simulé | Si provider | Usage sourcé |
| Historique exécution | Optionnel | Souhaitable | Oui | Plus tard | Event sink |

- **Stable avant Figma :** états, erreurs, disclosures, DTO ports.
- **Simulable Figma :** apparence UI, parcours nominal.
- **Réel avant verdict runtime D3 :** au moins une frontière Git ou Worker read-only prouvée.
- **Après walking skeleton :** mutations gated, CreateCycle, UI Delivery riche.

---

## S. Walking skeleton candidat (non implémenté)

Parcours **read-only** candidat :

1. Projet existant local.
2. Lecture GitHub réelle ou sandboxée (ref/PR/CI allowlist).
3. Qualification D2-C (package intégré).
4. Appel AI borné candidat (ou fixture déclarée).
5. Préparation contrat Cursor.
6. Exécution Cursor **read-only** sandboxée.
7. Remontée des états + résultat visible pour futur D3.
8. Décision Morris séparée.
9. **Aucune** mutation Git.

Préconditions : secrets serveur disponibles ou mode fixture explicite ; validation runtime active ; R-QA-D2C-01 traitée selon arbitrage.

Anti-claims : non production-ready ; non RUN READY ; non CreateCycle ; non UI Delivery.

---

## T. Découpage D2-D candidat (non adopté — pas de backlog)

| Slice | Résultat utile | Dépendances | Profil candidat | Risques | Sortie | Gate |
|-------|----------------|-------------|-----------------|---------|--------|------|
| **D2-D1** | Contrats, validation runtime, états, fixtures | D2-C | Standard/Critical | Sur-modélisation | Contrats testables | GO Delivery D2-D1 |
| **D2-D2** | Sandbox exigences, secrets ports, observabilité, adapters read-only | D2-D1 | Critical | Secrets | Adapters read-only + redaction | GO Delivery D2-D2 |
| **D2-D3** | Walking skeleton réel read-only | D2-D2 + arbitrage R-QA-D2C-01 | Critical | Coût/flakiness | Preuve bout-en-bout | GO Delivery D2-D3 |
| **D2-D4** | Mutations gated | Hors trajectoire actuelle | Critical | Mutation Git | **Non ouvert** | GO distinct futur |

Aucune story Delivery écrite ici.

---

## U. Risques, inconnues et dettes

| ID | Risque / inconnue | P | I | Mitigation candidate | Décision | Moment |
|----|-------------------|---|---|----------------------|----------|--------|
| RK-01 | Capacités Cursor externes UNVERIFIED | M | H | Spikes cadrés ; UNVERIFIED visible | D-CAD-07 | Avant D2-D3 |
| RK-02 | Auth secrets non décidée | M | H | Secret Provider abstrait ; pas de choix stock | D-CAD-08 | Avant réel |
| RK-03 | Lock-in provider | M | M | Ports ; fixtures | D-CAD-03 | Cadrage |
| RK-04 | Données sensibles → modèle | H | H | Minimisation ; redaction | D-CAD-09 | Avant AI réel |
| RK-05 | Coûts/quotas | M | M | Budgets ; FinOps events | D-CAD-09 | D2-D2+ |
| RK-06 | Exécutions longues | M | M | Timeout/cancel états | D-CAD-05 | Contrats |
| RK-07 | Double runtime VS / oa/cycle | H | H | Frontière explicite ; pas de domaine parallèle | D-CAD-01 | Conception |
| RK-08 | Couplage UI/provider | M | H | Ports + Server only | D-CAD-03 | Avant UI |
| RK-09 | Fixtures divergentes | M | H | Contract-first INT-C | D-CAD-06 | D2-D1 |
| RK-10 | Mutation Git accidentelle | M | H | Read-only first ; deny writes | D-CAD-04 | Toujours |
| RK-11 | Logs trop riches | M | H | Redaction policy | D-CAD-09 | D2-D2 |
| RK-12 | Multi-instance / non-persistance | H | M | Honest disclosures | Baseline | D3 |
| RK-13 | Contrôle humain contourné | M | H | awaiting_human + gates | D-CAD-02 | D3 |
| RK-14 | R-QA-D2C-01 | H | H | Options R-A/B/C | D-CAD-10 | Avant réel |
| RK-15 | R-QA-REV-01 timestamps | M | M | Validation ISO events | D-CAD-09 | Contrats |

---

## V. Critères de succès du cadrage

Réussi si :

- besoin ≠ solution ;
- D2-D minimal borné ;
- dépendances D3 identifiées ;
- ports candidats à responsabilité claire ;
- **aucune** architecture implicitement adoptée ;
- trust boundaries explicites ;
- fixtures vs réel comparés ;
- R-QA-D2C-01 a un decision pack ;
- inconnues fournisseurs visibles (UNVERIFIED) ;
- slices réversibles ;
- hors scope fermé ;
- **aucune** Delivery autorisée.

---

## W. Decision pack Morris

Toutes les décisions ci-dessous : **NOT DECIDED — MORRIS ARBITRATION REQUIRED**.

### D-V3.1-D2D-CAD-01 — Finalité et périmètre minimal

- **Question :** Quel socle minimal avant D3 ?
- **Options :** E large vs E strict (ports+validation+fixtures only)
- **Reco candidate :** E strict + walking skeleton plus tard (D2-D3)
- **Impacts / dette / réversibilité :** borne Delivery ; dette si trop strict ; haute réversibilité
- **Gate suivante :** arbitrage puis conception fonctionnelle

### D-V3.1-D2D-CAD-02 — Séquence D2-D avant D3 Delivery

- **Question :** D2-D contracts-first avant UI Delivery D3 ?
- **Options :** strict serial · parallèle UX exploratoire fixtures · D3 immédiat
- **Reco candidate :** serial contracts + UX exploratoire fixtures **après** DTO/états stables ; **pas** UI Delivery avant contrats
- **Gate :** conception / éventuel GO UX exploratoire distinct

### D-V3.1-D2D-CAD-03 — Ports vs SDK directs

- **Options :** ports abstraits · SDK dans use-cases · réutiliser platform/ai tel quel
- **Reco candidate :** ports de travail D2-D ; réutilisation platform/harness comme **hypothèse d'implémentation** non adoptée

### D-V3.1-D2D-CAD-04 — Read-only first

- **Reco candidate :** walking skeleton et adapters initiaux **read-only** ; writes Git = GO distinct (D2-D4 hors trajectoire)

### D-V3.1-D2D-CAD-05 — Modèle d'états

- **Options :** STATE-A · STATE-B · hybride
- **Reco candidate :** STATE-A + extensions timeout/blocked documentées

### D-V3.1-D2D-CAD-06 — Fixtures / services réels

- **Options :** INT-A · INT-B · INT-C
- **Reco candidate :** INT-C

### D-V3.1-D2D-CAD-07 — Sandbox

- **Reco candidate :** exigences L obligatoires avant Cursor réel ; fixture sandbox d'abord

### D-V3.1-D2D-CAD-08 — Secrets et permissions

- **Reco candidate :** Secret Provider abstrait ; GitHub read-only ; aucun choix de coffre dans ce cadrage

### D-V3.1-D2D-CAD-09 — Observabilité et données

- **Reco candidate :** event contract N + redaction stricte ; pas de RUN READY

### D-V3.1-D2D-CAD-10 — Traitement R-QA-D2C-01

- **Options :** R-A · R-B · R-C
- **Reco candidate :** R-C

### D-V3.1-D2D-CAD-11 — Slicing D2-D

- **Reco candidate :** D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire

### D-V3.1-D2D-CAD-12 — Critères d'entrée D3

- **Reco candidate :** D3 UX exploratoire possible avec fixtures après D2-D1 ; D3 UI Delivery / runtime verdict après D2-D2/D2-D3 + arbitrages ; CreateCycle jamais dans D2-D

---

## X. Trajectoire candidate

**Série proposée (non autorisée) :**

Cadrage → arbitrage Morris → conception fonctionnelle interactions externes → architecture fonctionnelle → architecture technique → backlog D2-D → Delivery incrémentale → QA → walking skeleton → UX/UI D3 → Delivery D3.

**Parallèle challengée :**

- UX/UI **exploratoire** D3 avec fixtures après stabilisation contrats ;
- **aucune** UI Delivery avant contrats/états validés ;
- pas besoin de terminer une D2-D illimitée avant exploration UX.

Aucune transition n'est autorisée par ce document.

---

## Y. Anti-claims

Interdit de conclure ou d'impliquer :

- D2-D architecture adopted ;
- D2-D backlog ready ;
- D2-D delivery authorized ;
- OpenAI / GitHub / Cursor integrated ;
- services production-ready ;
- secrets secure ;
- sandbox secure ;
- observable / RUN READY ;
- D3 opened ;
- UI ready ;
- CreateCycle ready ;
- Git mutation enabled ;
- zero risk ;
- method promoted ;
- R-QA-D2C-01 closed/lifted.

---

## Verdict documentaire

`D2-D INTEGRATION FOUNDATION CADRAGE — READY FOR MORRIS ARBITRATION — NO ARCHITECTURE ADOPTED — NO BACKLOG CREATED — NO DELIVERY AUTHORIZED — NO UI — NO CREATECYCLE — NO PROJECT GIT MUTATION — NO METHOD PROMOTION`

## Prochaine décision candidate

Gate Morris d'arbitrage des décisions **D-V3.1-D2D-CAD-01…12**.

Après arbitrage seulement, transitions candidates possibles :

- GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2-D ;
- GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2-D ;
- GO ARCHITECTURE TECHNIQUE SFIA STUDIO V3.1-D2-D.

Aucun GO Delivery ou D3 immédiatement consommable.

---END DOCUMENT 20---

## Diff complet du document 20

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/20-v3-1-d2-d-integration-foundation-cadrage.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/20-v3-1-d2-d-integration-foundation-cadrage.md
new file mode 100644
index 0000000..d893d2c
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/20-v3-1-d2-d-integration-foundation-cadrage.md
@@ -0,0 +1,573 @@
+# 20 — V3.1-D2-D Integration Foundation — Cadrage
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| **Date** | 2026-08-03 16:46:29 CEST (+0200) |
+| **Cycle** | Cycle 1 — Cadrage |
+| **Profil SFIA** | **Critical** |
+| **Typologie** | EVOL — exécution documentation-only |
+| **Projet** | SFIA Studio V3.1-D2-D Integration Foundation |
+| **Branche** | `framing/sfia-studio-v3-1-d2-d-integration-foundation-cadrage` |
+| **Base** | `main@004296ac9355ef9906584f5d86be6182a96dd2fd` |
+| **Statut** | `D2-D INTEGRATION FOUNDATION CADRAGE — READY FOR MORRIS ARBITRATION — NO DELIVERY AUTHORIZED` |
+| **CKC** | `method/.../pilots/01-cadrage.md` — candidate — experimental cognitive guidance — aucune autorité d'exécution |
+| **Code / UI / API / secrets / Delivery** | **non** |
+
+### GO Morris consommé
+
+```text
+GO CADRAGE SFIA STUDIO V3.1-D2-D INTEGRATION FOUNDATION
+
+DEFINE THE MINIMAL EXTERNAL-RUNTIME FOUNDATION REQUIRED FOR D3:
+OPENAI, GITHUB AND CURSOR PORTS,
+RUNTIME VALIDATION,
+EXECUTION STATES,
+SANDBOX,
+SECRETS,
+OBSERVABILITY,
+CONTRACT FIXTURES
+AND R-QA-D2C-01 TREATMENT.
+
+NO DELIVERY
+NO UI CODE
+NO CREATECYCLE
+NO GIT MUTATION
+NO METHOD PROMOTION
+```
+
+Date/heure du GO : 2026-08-03 16:31 CEST (+0200)
+
+**NO GIT MUTATION (interprétation) :** aucune mutation d'historique ou remote projet ; aucun staging/commit/push/PR/merge projet ; branche locale + document 20 local uniquement ; push `sfia/review-handoff` L3 distinct autorisé.
+
+---
+
+## B. Règles épistémiques
+
+| Marqueur | Signification |
+|----------|---------------|
+| **Observation** | Fait vérifiable dans Git / artefacts |
+| **Hypothèse** | Inférence non prouvée, marquée comme telle |
+| **Option** | Alternative comparable, non adoptée |
+| **Recommandation candidate** | Proposition Cursor — **non adoptée** |
+| **Décision Morris existante** | Déjà tranchée (ex. D2-A/B/C intégrés) |
+| **Décision candidate — Morris arbitration required** | À trancher ; statut `NOT DECIDED` |
+| **Inconnue critique** | Inconnue qui, si fausse, invalide une trajectoire |
+| **Réserve** | Réserve ouverte transportée, non levée |
+
+Aucune recommandation ni option n'est présentée comme architecture ou Delivery adoptée.
+
+---
+
+## C. Baseline Git-authoritative
+
+**Observations :**
+
+- D2-A / D2-B / D2-C **intégrés sur main** (produit) ; clôture documentaire D2-C via PR #304 merge `004296ac…`.
+- D2-C est un bridge **read-only** : `qualifyCycleWithCkc` + Result Success/Failure unique ; **aucune mutation CreateCycle** dans le package D2-C.
+- Framing living : **D2-D gated / non ouvert** ; **D3 fermé** ; toute ouverture exige GO Morris distinct.
+- Runtime applicatif vertical slice : `vertical-slice-runtime` **process-local** ; Server Actions présentes (`"use server"`) ; audit noop/sqlite borné ; doctrine via fixtures registry.
+- Persistance produit **non durable** au sens production (runtime local / mémoire / fixtures) — Observation bornée au code inspecté.
+- Réserves ouvertes :
+  - R-QA-REV-01 MINOR — OPEN NOT LIFTED ;
+  - R-QA-REV-02 MINOR — OPEN NOT LIFTED ;
+  - R-QA-D2C-01 MINOR — OPEN (runtime `null`/`undefined` requests ; à reconsidérer avant frontière externe non validée).
+- Frontière client/serveur : providers conversation OpenAI et tools GitHub sont côté serveur / platform ; UI ne doit pas importer les adapters secrets.
+
+**OBSERVATION — capacités externes déjà présentes ailleurs dans le repo (hors fondation D2-D OA dédiée) :**
+
+- `app/lib/platform/ai` : `OpenAIConversationProvider` + `FakeConversationProvider` + dépendance `openai` — **CONFIRMED IN REPO** (usage D1/OPS1 conversation, pas un port D2-D OA cycle unifié).
+- `app/lib/platform/tools` + `repository/githubReadAdapter` : outils GitHub **read-only** typés (`github_get_*`, checks, comments) — **CONFIRMED IN REPO**.
+- `projects/sfia-studio/harness/src/ports` : spikes Cursor (`cursorRealSpike`, sandbox, fixtures GPT) — **CONFIRMED IN REPO** (harness, pas OA cycle D2-D).
+- `app/lib/adapters` : ports **fixtures-only** (README app) — **CONFIRMED IN REPO**.
+
+**OBSERVATION — NO REPO-BACKED D2-D OA INTEGRATION FOUNDATION PACKAGE IDENTIFIED** : aucun module dédié « D2-D Integration Foundation » sous `oa/cycle` unifiant ports OpenAI/GitHub/Cursor pour D3. Les briques existent en silos (platform / harness / D1).
+
+---
+
+## D. Intention et valeur
+
+**Problème (intention) :** D3 doit représenter fidèlement une exécution externe (AI, Git Truth distant, worker Cursor) sans mentir sur la source (fixture / sandbox / real) et sans ouvrir CreateCycle ni mutation Git.
+
+**Solution à ne pas confondre avec le besoin :** brancher immédiatement tous les SDK fournisseurs en production, ouvrir l'écriture Git, ou livrer une UI Figma.
+
+**Valeur de D2-D avant Delivery D3 :**
+
+- stabiliser les **contrats** et la **validation runtime** aux frontières ;
+- rendre observables et fail-closed les erreurs externes ;
+- permettre un walking skeleton **read-only** prouvable ;
+- traiter R-QA-D2C-01 avant exposition à des payloads externes non validés.
+
+**Ce qui peut encore être simulé :** UI exploratoire avec fixtures contractuelles après stabilisation des DTO/états.
+
+**Ce qui doit être réel pour valider le parcours (candidat) :** au moins une lecture GitHub bornée et/ou une exécution Cursor sandbox read-only — **recommandation candidate INT-C**, non adoptée.
+
+**Ce qui ne doit pas être implémenté trop tôt :** mutations Git, CreateCycle, IAM complet, dashboard, L4/L5, credentials définitifs, architecture technique figée.
+
+---
+
+## E. Périmètre D2-D candidat
+
+Socle minimal **candidat** (documentation de besoin) :
+
+1. Contrats de ports externes (AI / Git / Execution Worker / Secret / Event Sink) — noms de travail.
+2. Validation runtime entrée/sortie aux frontières (schémas, fail-closed).
+3. Modèle d'états d'exécution (option à arbitrer).
+4. Erreurs externes normalisées (pas d'exceptions brutes vers D3).
+5. Exigences sandbox (isolation, allowlist future, read-only initial).
+6. Frontières secrets et permissions (moindre privilège, jamais côté client).
+7. Événements d'observabilité + redaction + FinOps sourcé.
+8. Fixtures contractuelles versionnées (mêmes DTO que adapters réels).
+9. Frontière serveur exclusive pour secrets et providers.
+10. Préparation d'un walking skeleton **read-only**.
+11. Traitement candidat de R-QA-D2C-01 avant frontière externe non validée.
+
+---
+
+## F. Hors périmètre
+
+Exclu explicitement de ce cadrage et de toute Delivery non autorisée :
+
+- implémentation / SDK install / appels fournisseurs réels dans ce cycle ;
+- mutation Git (branche/commit/push/PR/merge) ;
+- CreateCycle ;
+- persistance produit complète ;
+- IAM complet ;
+- UI / Figma / accessibilité Delivery ;
+- dashboard / orchestration L4-L5 ;
+- production / RUN readiness / déploiement ;
+- architecture adoptée ;
+- choix définitif de credentials / stockage secrets ;
+- promotion méthode ;
+- levée de réserves.
+
+---
+
+## G. Acteurs et trust boundaries
+
+| Acteur | Confiance | Entrées | Sorties | Permission max candidate | Mutation | Contrôle humain | Journalisation |
+|--------|-----------|---------|---------|--------------------------|----------|-----------------|----------------|
+| Morris / utilisateur | Haute (décideur) | GO, décisions | Arbitrages | Décision | N/A | Source d'autorité | Décisions tracées |
+| Navigateur D3 futur | Non fiable | Affichages, formulaires | Intentions UI | Aucun secret | Interdite | Gate Morris pour écritures futures | Pas de secrets/prompts complets |
+| Serveur SFIA Studio | Semi-confiant | Requests validées | DTO redacted | Secrets serveur | Interdite en D2-D1 | Serveur | correlationId, états, erreurs redacted |
+| D2-C Core | Confiance interne read-only | Signaux + projection | Success/Failure | Aucune mutation | Interdite | N/A | Audit cycle existant |
+| Provider OpenAI candidat | Externe non fiable | Prompt borné | Texte/structured + usage | Appel API serveur | N/A | Quotas/gates | Usage si fourni ; pas de clé ; pas de prompt complet par défaut |
+| Provider GitHub candidat | Externe non fiable | Refs/PR/CI read | Métadonnées | **Read-only** initial | **Interdite** au walking skeleton | Allowlist repo | Métadonnées publiques allowlistées |
+| Worker Cursor candidat | Externe non fiable | Contrat sandbox | Événements + résultat | Sandbox read-only initial | **Interdite** par défaut | Contrat borné | États + redaction |
+| Secret source candidate | Critique | Identité secret | Valeur en mémoire serveur | Serveur only | N/A | Rotation/révocation | Identité seule, jamais valeur |
+| Observability sink | Semi-confiant | Événements | Stockage traces | Append borné | N/A | Redaction policy | Pas de secrets/PII brutes |
+| Sandbox workspace | Isolé | Fichiers allowlist | Artefacts preuve | Read-only initial | Write gated futur | Timeout/quota | Chemins sandbox only |
+
+---
+
+## H. Matrice des capacités fournisseurs
+
+### OpenAI
+
+| Dimension | Contenu |
+|-----------|---------|
+| Besoin SFIA | Exécution AI bornée pour qualification / analyse structurée exposable à D3 |
+| Capacité | Conversation / Responses API via SDK `openai` |
+| Preuve | **CONFIRMED IN REPO** : `OpenAIConversationProvider` ; **UNVERIFIED** pour couverture exacte Responses vs besoins D2-D OA |
+| Auth | `OPENAI_API_KEY` serveur — **CONFIRMED IN REPO** (pattern env) ; stockage cible **UNVERIFIED** |
+| Read/write | Read/compute externe ; pas de mutation Git |
+| Timeout/retry/cancel | Partiels dans platform ; politique D2-D **UNVERIFIED** / à définir |
+| Fixtures | Fake provider + harness GPT fixtures — **CONFIRMED IN REPO** |
+| Risques | Fuite prompt/données ; coût ; lock-in ; erreurs non normalisées vers D3 |
+
+### GitHub
+
+| Dimension | Contenu |
+|-----------|---------|
+| Besoin SFIA | Git Truth distant : repo/ref/commit/branche/PR/CI |
+| Capacité | Tools read-only typés + adapter lecture |
+| Preuve | **CONFIRMED IN REPO** (types + router) ; auth GitHub App vs token **UNVERIFIED** pour choix définitif |
+| Write futures | Création branche/commit/push/PR/merge — **hors scope** walking skeleton |
+| Fixtures | Fake/tool deny paths — **CONFIRMED IN REPO** patterns |
+| Risques | Mutation accidentelle ; permissions excessives ; rate limit |
+
+### Cursor
+
+| Dimension | Contenu |
+|-----------|---------|
+| Besoin SFIA | Exécution agentique contrôlée dans sandbox |
+| Capacité | CLI/agent harness spikes (`cursor-agent-cli` mentionné dans contrats harness) |
+| Preuve | **CONFIRMED IN REPO** (harness spikes/sandbox) ; capacités produit Cursor exactes hors repo **UNVERIFIED** |
+| Mode initial | Read-only sandbox — **recommandation candidate** |
+| Write | **Interdit** par défaut ; futur gated distinct |
+| Risques | Commande arbitraire ; escape sandbox ; secrets dans workspace ; durée longue |
+
+---
+
+## I. Contrats de ports candidats (noms de travail — non adoptés)
+
+### 1. AI Provider (candidat)
+
+Exécuter requête AI bornée ; sortie structurée ; streaming/différé comme **options** ; usage/coût si fourni ; timeout/cancellation ; erreurs normalisées ; **aucune clé côté client**.
+
+### 2. Git Provider (candidat)
+
+Lecture repo/ref/commit/branche/PR/CI ; preuve Git Truth ; permissions read-only ; **aucune** création branche/commit/push/PR/merge dans le premier walking skeleton.
+
+### 3. Execution Worker Provider (candidat)
+
+Lancer exécution Cursor contrôlée ; sandbox workspace ; mode read-only initial ; événements + résultat structuré ; **aucune** option force/écriture par défaut ; **aucune** commande arbitraire depuis le navigateur.
+
+### 4. Secret Provider (candidat)
+
+Fournir secret **serveur only** ; rotation/révocation ; identité sans valeur ; pas de sérialisation client ; pas de trace de valeur.
+
+### 5. Execution Event Sink (candidat)
+
+État ; correlationId ; provider ; timestamps ISO validés ; latence ; résultat de contrôle ; redaction ; aucune donnée sensible brute par défaut.
+
+---
+
+## J. Validation runtime
+
+**Exigences candidates :**
+
+- schémas runtime obligatoires à chaque frontière ;
+- validation **avant** lecture de métadonnées ;
+- fail-closed ;
+- aucune exception brute vers D3 ;
+- aucun succès partiel interprété comme succès ;
+- aucun `consumed=true` après erreur ;
+- correlationId obligatoire ;
+- timestamp ISO validé avant événement (lien **R-QA-REV-01**) ;
+- enums provider/state stricts ;
+- payload size bound ; timeout bound ;
+- rejet champs inattendus si pertinent ;
+- validation sorties fournisseurs ;
+- redaction erreurs ;
+- idempotency candidate ; règles de reprise.
+
+**Lien R-QA-D2C-01 :** Runtime `null`/`undefined` requests peuvent lever avant normalisation ; à traiter **avant** frontière externe non validée (voir §Q).
+
+---
+
+## K. États d'exécution
+
+### Option STATE-A — modèle minimal
+
+Dimensions exemples : `idle` · `running` · `awaiting_human` · `succeeded` · `failed` · `cancelled`.
+
+- Valeur D3 : simple à afficher
+- Complexité : basse
+- Reprise / observabilité : limitée
+- Mapping providers : grossier
+- Risque : sous-modélisation des timeouts/blocked
+- Réversibilité : haute
+
+### Option STATE-B — modèle opérationnel détaillé
+
+Dimensions exemples : `created` · `queued` · `validating` · `running` · `awaiting_human` · `succeeded` · `failed` · `timed_out` · `cancelled` · `blocked`.
+
+- Valeur D3 : fidélité opérationnelle
+- Complexité : plus haute
+- Observabilité : meilleure
+- Risque : sur-modélisation / provider-specific leakage
+- Réversibilité : moyenne
+
+**Recommandation candidate :** démarrer par **STATE-A** pour contrats/fixtures, avec extension documentée vers sous-états opérationnels (timeout/blocked) sans figer STATE-B complet — **NOT DECIDED**.
+
+---
+
+## L. Sandbox
+
+Exigences minimales **candidates** :
+
+- workspace isolé ; périmètre repo explicite ;
+- allowlist commandes **future** ;
+- network egress borné ;
+- lecture seule initiale ;
+- aucune élévation automatique ;
+- timeout + quota ressources ;
+- nettoyage + conservation preuves ;
+- absence de secret dans fichiers workspace ;
+- blocage chemins protégés ;
+- contrôle humain avant toute future écriture.
+
+Distinguer : **sandbox fixture** · **sandbox provider réel read-only** · **futur sandbox write gated**.
+
+Preuve repo : patterns harness sandbox — **CONFIRMED IN REPO** (réutilisabilité OA D2-D = hypothèse).
+
+---
+
+## M. Secrets, permissions et données
+
+**Candidats :** `OPENAI_API_KEY` / modèle ; credential GitHub read ; credential Cursor — statut exact **UNVERIFIED** hors patterns env existants.
+
+Principes candidats :
+
+- moindre privilège ; GitHub **read-only** initial ;
+- OpenAI serveur uniquement ;
+- stockage local dev vs cible prod : **non décidé** ;
+- rotation / révocation / expiration ;
+- audit d'usage sans valeur ;
+- interdits dans logs/UI : clés, prompts complets, réponses complètes, tokens bruts, PII ;
+- exposition navigateur **interdite** ;
+- minimisation RGPD à confirmer (catégories données projet dans prompts) — **Inconnue critique**.
+
+Ce cycle : **aucune** variable créée, aucun `.env`, aucun secret affiché.
+
+---
+
+## N. Observabilité et FinOps
+
+Contrat d'événement **candidat** : correlationId · executionId candidat · provider · opération · état précédent/nouveau · début/fin · latence · timeout · retry count · erreur normalisée · token/usage **si fourni** · coût estimé **si calculable et sourcé** · quota restant **si disponible** · niveau redaction · source `fixture|sandbox-real|real`.
+
+Anti-claims : pas de clé ; pas de prompt/réponse complets par défaut ; **aucune** affirmation SLO / RUN READY ; **aucun** prix/quota inventé.
+
+---
+
+## O. Fixtures contractuelles
+
+Règles candidates : mêmes DTO/événements que adapters réels ; versionnées ; déterministes ; aucune règle métier parallèle ; source affichée (`fixture` / `sandbox-real` / `real`) ; données synthétiques ; aucun secret/PII réelle ; rejouables ; invalidables si contrat change.
+
+Scénarios minimaux : succès · validation entrée KO · validation sortie KO · auth refusée · permission insuffisante · rate limit · timeout · provider down · résultat partiel · cancellation · sandbox bloqué · erreur interne normalisée.
+
+---
+
+## P. Stratégie services réels vs fixtures
+
+| Option | Bénéfice | Risque | Dette | Testabilité | Fidélité UI | Coût | Sécurité | Réversibilité |
+|--------|----------|--------|-------|-------------|-------------|------|----------|---------------|
+| **INT-A** fixtures-first prolongé | Sûr, rapide | Drift vs réel | Haute si trop long | Haute | Faible | Bas | Haute | Haute |
+| **INT-B** services réels immédiats | Fidélité | Secrets, coût, flakiness | Couplage précoce | Basse | Haute | Élevé | Risquée | Basse |
+| **INT-C** contract-first hybride | Contrats + 1 walking skeleton read-only | Complexité orchestration | Moyenne | Haute | Moyenne→haute | Contrôlé | Haute si read-only | Moyenne |
+
+**Recommandation candidate : INT-C** — contrats + fixtures d'abord, puis walking skeleton read-only réel/sandboxé, écritures Git **hors trajectoire** — **NOT DECIDED — Morris arbitration required**.
+
+---
+
+## Q. Traitement de R-QA-D2C-01
+
+**Rappel factuel (Réserve) :** Runtime `null`/`undefined` requests, exclus par le contrat TypeScript courant, peuvent encore lever une exception tandis que le catch externe relit des métadonnées. Aucun résultat succès/exploitable. Acceptée pour transport ; à reconsidérer avant frontière runtime externe non validée. **OPEN — non levée**.
+
+| Option | Surface | Réserve restante | Impact D2-C | Régression | Dette | Preuve QA | Gate |
+|--------|---------|------------------|-------------|------------|-------|-----------|------|
+| **R-A** corriger D2-C avant frontière | Couverture source | Peut clôturer après QA | Patch borné | Possible | Faible si borné | QA indépendante | GO Delivery correctif D2-C |
+| **R-B** validation adapter stricte sans toucher D2-C | Frontière | Réserve D2-C demeure | Aucun | Faible | Dette frontière | Tests adapters | GO D2-D Delivery |
+| **R-C** défense en profondeur | Frontière + correctif | Levée conditionnelle | Patch + adapters | Moyenne | Plus large | QA D2-C + D2-D | Deux GO possibles |
+
+**Recommandation candidate : R-C** (validation frontière obligatoire dans D2-D + correctif D2-C borné avant walking skeleton réel) — **NOT DECIDED**. Ne modifie aucun code ; ne lève aucune réserve dans ce cycle.
+
+---
+
+## R. Dépendances D3
+
+| Élément D3 | Avant UX contract | Avant UI Delivery | Fixture OK | Réel requis | Preuve |
+|------------|-------------------|-------------------|------------|-------------|--------|
+| États d'exécution | Oui | Oui | Oui | Non initialement | Contrat + fixtures |
+| Erreurs normalisées | Oui | Oui | Oui | Non | Matrice erreurs |
+| Disclosures source | Oui | Oui | Oui | Oui pour vérité | Affichage fixture/sandbox/real |
+| Git Truth | Partiel | Oui pour runtime verdict | Partiel | Oui pour verdict distant | Lecture allowlist |
+| Résultat D2-C | Oui | Oui | Oui | Oui (déjà intégré) | Package D2-C |
+| Preuve CKC | Oui | Oui | Oui | Oui | D2-A/B/C |
+| Attente humaine | Oui | Oui | Oui | N/A | État awaiting_human |
+| Cancellation / timeout | Oui | Oui | Oui | Pour réel | Scénarios |
+| Permissions | Oui | Oui | Simulé | Pour réel | Deny paths |
+| Coût/usage | Optionnel UX | Souhaitable | Simulé | Si provider | Usage sourcé |
+| Historique exécution | Optionnel | Souhaitable | Oui | Plus tard | Event sink |
+
+- **Stable avant Figma :** états, erreurs, disclosures, DTO ports.
+- **Simulable Figma :** apparence UI, parcours nominal.
+- **Réel avant verdict runtime D3 :** au moins une frontière Git ou Worker read-only prouvée.
+- **Après walking skeleton :** mutations gated, CreateCycle, UI Delivery riche.
+
+---
+
+## S. Walking skeleton candidat (non implémenté)
+
+Parcours **read-only** candidat :
+
+1. Projet existant local.
+2. Lecture GitHub réelle ou sandboxée (ref/PR/CI allowlist).
+3. Qualification D2-C (package intégré).
+4. Appel AI borné candidat (ou fixture déclarée).
+5. Préparation contrat Cursor.
+6. Exécution Cursor **read-only** sandboxée.
+7. Remontée des états + résultat visible pour futur D3.
+8. Décision Morris séparée.
+9. **Aucune** mutation Git.
+
+Préconditions : secrets serveur disponibles ou mode fixture explicite ; validation runtime active ; R-QA-D2C-01 traitée selon arbitrage.
+
+Anti-claims : non production-ready ; non RUN READY ; non CreateCycle ; non UI Delivery.
+
+---
+
+## T. Découpage D2-D candidat (non adopté — pas de backlog)
+
+| Slice | Résultat utile | Dépendances | Profil candidat | Risques | Sortie | Gate |
+|-------|----------------|-------------|-----------------|---------|--------|------|
+| **D2-D1** | Contrats, validation runtime, états, fixtures | D2-C | Standard/Critical | Sur-modélisation | Contrats testables | GO Delivery D2-D1 |
+| **D2-D2** | Sandbox exigences, secrets ports, observabilité, adapters read-only | D2-D1 | Critical | Secrets | Adapters read-only + redaction | GO Delivery D2-D2 |
+| **D2-D3** | Walking skeleton réel read-only | D2-D2 + arbitrage R-QA-D2C-01 | Critical | Coût/flakiness | Preuve bout-en-bout | GO Delivery D2-D3 |
+| **D2-D4** | Mutations gated | Hors trajectoire actuelle | Critical | Mutation Git | **Non ouvert** | GO distinct futur |
+
+Aucune story Delivery écrite ici.
+
+---
+
+## U. Risques, inconnues et dettes
+
+| ID | Risque / inconnue | P | I | Mitigation candidate | Décision | Moment |
+|----|-------------------|---|---|----------------------|----------|--------|
+| RK-01 | Capacités Cursor externes UNVERIFIED | M | H | Spikes cadrés ; UNVERIFIED visible | D-CAD-07 | Avant D2-D3 |
+| RK-02 | Auth secrets non décidée | M | H | Secret Provider abstrait ; pas de choix stock | D-CAD-08 | Avant réel |
+| RK-03 | Lock-in provider | M | M | Ports ; fixtures | D-CAD-03 | Cadrage |
+| RK-04 | Données sensibles → modèle | H | H | Minimisation ; redaction | D-CAD-09 | Avant AI réel |
+| RK-05 | Coûts/quotas | M | M | Budgets ; FinOps events | D-CAD-09 | D2-D2+ |
+| RK-06 | Exécutions longues | M | M | Timeout/cancel états | D-CAD-05 | Contrats |
+| RK-07 | Double runtime VS / oa/cycle | H | H | Frontière explicite ; pas de domaine parallèle | D-CAD-01 | Conception |
+| RK-08 | Couplage UI/provider | M | H | Ports + Server only | D-CAD-03 | Avant UI |
+| RK-09 | Fixtures divergentes | M | H | Contract-first INT-C | D-CAD-06 | D2-D1 |
+| RK-10 | Mutation Git accidentelle | M | H | Read-only first ; deny writes | D-CAD-04 | Toujours |
+| RK-11 | Logs trop riches | M | H | Redaction policy | D-CAD-09 | D2-D2 |
+| RK-12 | Multi-instance / non-persistance | H | M | Honest disclosures | Baseline | D3 |
+| RK-13 | Contrôle humain contourné | M | H | awaiting_human + gates | D-CAD-02 | D3 |
+| RK-14 | R-QA-D2C-01 | H | H | Options R-A/B/C | D-CAD-10 | Avant réel |
+| RK-15 | R-QA-REV-01 timestamps | M | M | Validation ISO events | D-CAD-09 | Contrats |
+
+---
+
+## V. Critères de succès du cadrage
+
+Réussi si :
+
+- besoin ≠ solution ;
+- D2-D minimal borné ;
+- dépendances D3 identifiées ;
+- ports candidats à responsabilité claire ;
+- **aucune** architecture implicitement adoptée ;
+- trust boundaries explicites ;
+- fixtures vs réel comparés ;
+- R-QA-D2C-01 a un decision pack ;
+- inconnues fournisseurs visibles (UNVERIFIED) ;
+- slices réversibles ;
+- hors scope fermé ;
+- **aucune** Delivery autorisée.
+
+---
+
+## W. Decision pack Morris
+
+Toutes les décisions ci-dessous : **NOT DECIDED — MORRIS ARBITRATION REQUIRED**.
+
+### D-V3.1-D2D-CAD-01 — Finalité et périmètre minimal
+
+- **Question :** Quel socle minimal avant D3 ?
+- **Options :** E large vs E strict (ports+validation+fixtures only)
+- **Reco candidate :** E strict + walking skeleton plus tard (D2-D3)
+- **Impacts / dette / réversibilité :** borne Delivery ; dette si trop strict ; haute réversibilité
+- **Gate suivante :** arbitrage puis conception fonctionnelle
+
+### D-V3.1-D2D-CAD-02 — Séquence D2-D avant D3 Delivery
+
+- **Question :** D2-D contracts-first avant UI Delivery D3 ?
+- **Options :** strict serial · parallèle UX exploratoire fixtures · D3 immédiat
+- **Reco candidate :** serial contracts + UX exploratoire fixtures **après** DTO/états stables ; **pas** UI Delivery avant contrats
+- **Gate :** conception / éventuel GO UX exploratoire distinct
+
+### D-V3.1-D2D-CAD-03 — Ports vs SDK directs
+
+- **Options :** ports abstraits · SDK dans use-cases · réutiliser platform/ai tel quel
+- **Reco candidate :** ports de travail D2-D ; réutilisation platform/harness comme **hypothèse d'implémentation** non adoptée
+
+### D-V3.1-D2D-CAD-04 — Read-only first
+
+- **Reco candidate :** walking skeleton et adapters initiaux **read-only** ; writes Git = GO distinct (D2-D4 hors trajectoire)
+
+### D-V3.1-D2D-CAD-05 — Modèle d'états
+
+- **Options :** STATE-A · STATE-B · hybride
+- **Reco candidate :** STATE-A + extensions timeout/blocked documentées
+
+### D-V3.1-D2D-CAD-06 — Fixtures / services réels
+
+- **Options :** INT-A · INT-B · INT-C
+- **Reco candidate :** INT-C
+
+### D-V3.1-D2D-CAD-07 — Sandbox
+
+- **Reco candidate :** exigences L obligatoires avant Cursor réel ; fixture sandbox d'abord
+
+### D-V3.1-D2D-CAD-08 — Secrets et permissions
+
+- **Reco candidate :** Secret Provider abstrait ; GitHub read-only ; aucun choix de coffre dans ce cadrage
+
+### D-V3.1-D2D-CAD-09 — Observabilité et données
+
+- **Reco candidate :** event contract N + redaction stricte ; pas de RUN READY
+
+### D-V3.1-D2D-CAD-10 — Traitement R-QA-D2C-01
+
+- **Options :** R-A · R-B · R-C
+- **Reco candidate :** R-C
+
+### D-V3.1-D2D-CAD-11 — Slicing D2-D
+
+- **Reco candidate :** D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire
+
+### D-V3.1-D2D-CAD-12 — Critères d'entrée D3
+
+- **Reco candidate :** D3 UX exploratoire possible avec fixtures après D2-D1 ; D3 UI Delivery / runtime verdict après D2-D2/D2-D3 + arbitrages ; CreateCycle jamais dans D2-D
+
+---
+
+## X. Trajectoire candidate
+
+**Série proposée (non autorisée) :**
+
+Cadrage → arbitrage Morris → conception fonctionnelle interactions externes → architecture fonctionnelle → architecture technique → backlog D2-D → Delivery incrémentale → QA → walking skeleton → UX/UI D3 → Delivery D3.
+
+**Parallèle challengée :**
+
+- UX/UI **exploratoire** D3 avec fixtures après stabilisation contrats ;
+- **aucune** UI Delivery avant contrats/états validés ;
+- pas besoin de terminer une D2-D illimitée avant exploration UX.
+
+Aucune transition n'est autorisée par ce document.
+
+---
+
+## Y. Anti-claims
+
+Interdit de conclure ou d'impliquer :
+
+- D2-D architecture adopted ;
+- D2-D backlog ready ;
+- D2-D delivery authorized ;
+- OpenAI / GitHub / Cursor integrated ;
+- services production-ready ;
+- secrets secure ;
+- sandbox secure ;
+- observable / RUN READY ;
+- D3 opened ;
+- UI ready ;
+- CreateCycle ready ;
+- Git mutation enabled ;
+- zero risk ;
+- method promoted ;
+- R-QA-D2C-01 closed/lifted.
+
+---
+
+## Verdict documentaire
+
+`D2-D INTEGRATION FOUNDATION CADRAGE — READY FOR MORRIS ARBITRATION — NO ARCHITECTURE ADOPTED — NO BACKLOG CREATED — NO DELIVERY AUTHORIZED — NO UI — NO CREATECYCLE — NO PROJECT GIT MUTATION — NO METHOD PROMOTION`
+
+## Prochaine décision candidate
+
+Gate Morris d'arbitrage des décisions **D-V3.1-D2D-CAD-01…12**.
+
+Après arbitrage seulement, transitions candidates possibles :
+
+- GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2-D ;
+- GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2-D ;
+- GO ARCHITECTURE TECHNIQUE SFIA STUDIO V3.1-D2-D.
+
+Aucun GO Delivery ou D3 immédiatement consommable.

```

## Liste des décisions candidates

Toutes : **NOT DECIDED — MORRIS ARBITRATION REQUIRED**

1. D-V3.1-D2D-CAD-01 — finalité et périmètre minimal
2. D-V3.1-D2D-CAD-02 — séquence D2-D avant D3 Delivery
3. D-V3.1-D2D-CAD-03 — abstraction ports vs SDK directs
4. D-V3.1-D2D-CAD-04 — read-only first
5. D-V3.1-D2D-CAD-05 — modèle d'états (STATE-A / STATE-B / hybride)
6. D-V3.1-D2D-CAD-06 — stratégie fixtures/services (INT-A/B/C)
7. D-V3.1-D2D-CAD-07 — sandbox
8. D-V3.1-D2D-CAD-08 — secrets et permissions
9. D-V3.1-D2D-CAD-09 — observabilité et données
10. D-V3.1-D2D-CAD-10 — traitement R-QA-D2C-01 (R-A/B/C)
11. D-V3.1-D2D-CAD-11 — slicing D2-D1…D2-D4
12. D-V3.1-D2D-CAD-12 — critères d'entrée D3

## Recommandations candidates (non adoptées)

- Périmètre E strict + walking skeleton en D2-D3
- Serial contracts + UX exploratoire fixtures après DTO stables ; pas UI Delivery avant contrats
- Ports de travail ; réutilisation platform/harness = hypothèse seulement
- Read-only first ; writes Git hors trajectoire
- STATE-A + extensions timeout/blocked documentées
- **INT-C** contract-first hybride
- Exigences sandbox avant Cursor réel
- Secret Provider abstrait ; GitHub read-only
- Event contract + redaction ; pas RUN READY
- **R-C** défense en profondeur pour R-QA-D2C-01
- Slicing D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire
- D3 UX exploratoire après D2-D1 ; UI Delivery / runtime verdict après D2-D2/D2-D3

## Risques (synthèse)

Voir document §U : Cursor UNVERIFIED, secrets, lock-in, données sensibles, coûts, double runtime, mutation Git, logs riches, R-QA-D2C-01, R-QA-REV-01, etc.

## Réserves

| ID | Statut |
|----|--------|
| R-QA-REV-01 MINOR | OPEN NOT LIFTED |
| R-QA-REV-02 MINOR | OPEN NOT LIFTED |
| R-QA-D2C-01 MINOR | OPEN — options R-A/B/C documentées ; **non levée** |

## Git Truth final (pré-handoff publish)

```text
branch: framing/sfia-studio-v3-1-d2-d-integration-foundation-cadrage
HEAD: 004296ac9355ef9906584f5d86be6182a96dd2fd
origin/main: 004296ac9355ef9906584f5d86be6182a96dd2fd
status:
?? .tmp-sfia-review/
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/20-v3-1-d2-d-integration-foundation-cadrage.md
cached:
(empty)
tracked diff:
(empty)
untracked project (hors .tmp):
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/20-v3-1-d2-d-integration-foundation-cadrage.md
remote framing branch: (absent)
PR framing: (none)
```

### Preuves de conformité projet

- staged vide : **OUI**
- aucun fichier tracked modifié : **OUI**
- document 20 seul nouveau fichier projet : **OUI**
- aucun code/UI/API/config/secret créé : **OUI**
- aucun commit/push/PR/merge projet : **OUI**
- aucune architecture adoptée : **OUI**
- aucune Delivery autorisée : **OUI**

## Handoff before/after

| | Tip | Blob |
|--|-----|------|
| **Before** | `22be93957250bd61648bdbbb09c57b0c9a139b9c` | `543d52ddcb02f9fbd8ae4dc847ea0674c22489d6` |
| **After** | *(rempli après publish)* | *(rempli après publish)* |

## Verdict

```text
V3.1-D2-D INTEGRATION FOUNDATION CADRAGE COMPLETE —
READY FOR MORRIS ARBITRATION —

D2-D CURRENT BASELINE AND GAPS DOCUMENTED —
MINIMAL EXTERNAL-RUNTIME SCOPE BOUNDED —
OPENAI / GITHUB / CURSOR CAPABILITY BOUNDARIES ANALYZED —
RUNTIME VALIDATION REQUIREMENTS DOCUMENTED —
EXECUTION STATE OPTIONS COMPARED —
SANDBOX REQUIREMENTS DOCUMENTED —
SECRETS AND PERMISSION BOUNDARIES DOCUMENTED —
OBSERVABILITY AND FINOPS REQUIREMENTS DOCUMENTED —
CONTRACT FIXTURE STRATEGY DOCUMENTED —
R-QA-D2C-01 TREATMENT OPTIONS DOCUMENTED —
D3 DEPENDENCIES DOCUMENTED —
WALKING SKELETON CANDIDATE DOCUMENTED —
D2-D SLICING CANDIDATE DOCUMENTED —
MORRIS DECISION PACK COMPLETE —

NO ARCHITECTURE ADOPTED —
NO BACKLOG CREATED —
NO DELIVERY AUTHORIZED —
NO UI CODE —
NO FIGMA —
NO CREATECYCLE —
NO PROJECT GIT MUTATION —
NO METHOD PROMOTION —

REVIEW HANDOFF UPDATED AND REMOTE VERIFIED
```

Décision finale du cycle : **READY FOR MORRIS ARBITRATION**

Ne pas conclure : READY FOR DELIVERY

## Prochaine décision candidate

Gate Morris d'arbitrage **D-V3.1-D2D-CAD-01…12**.

Après arbitrage seulement :

- GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2-D ;
- GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2-D ;
- GO ARCHITECTURE TECHNIQUE SFIA STUDIO V3.1-D2-D.

Aucun GO Delivery ou D3 immédiatement consommable.

## Instruction ChatGPT

Avant toute réponse à Morris, lire depuis Git :

`sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`

au nouveau tip et blob produits, et vérifier indépendamment Cycle 1, profil Critical, GO, branche/base, document 20, observations vs recommandations, absence d'architecture, options providers, validation, états, sandbox, secrets, observabilité, fixtures, R-QA-D2C-01, D3 deps, walking skeleton, slicing, decision pack, aucun fichier existant modifié, aucun staging, aucun commit/push/PR/merge projet, handoff mono-fichier, verdict.

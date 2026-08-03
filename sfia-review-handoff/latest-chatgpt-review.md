# Full Review Pack — SFIA Studio V3.1-D2-D Integration Foundation Functional Design

## Métadonnées du cycle

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-03 17:12:30 CEST (+0200) |
| **Rôle** | Cursor (Cycle 2 — Conception fonctionnelle Critical) |
| **Cycle** | Cycle 2 — Conception fonctionnelle |
| **Profil** | Critical |
| **Typologie** | EVOL — documentation-only |
| **Branche** | `design/sfia-studio-v3-1-d2-d-integration-foundation-functional-design` |
| **HEAD / origin/main** | `004296ac9355ef9906584f5d86be6182a96dd2fd` |
| **Verdict** | READY FOR MORRIS ARBITRATION |

## GO Morris consommé

```text
GO ARBITRATION SFIA STUDIO V3.1-D2-D INTEGRATION FOUNDATION

ADOPT:

D-V3.1-D2D-CAD-01:
STRICT MINIMAL FOUNDATION —
PORTS + RUNTIME VALIDATION + EXECUTION STATES + CONTRACT FIXTURES,
WITH REAL WALKING SKELETON DEFERRED TO D2-D3.

D-V3.1-D2D-CAD-02:
D2-D CONTRACTS BEFORE D3 UI DELIVERY.
D3 UX EXPLORATION MAY START AFTER STABLE D2-D1 CONTRACTS.

D-V3.1-D2D-CAD-03:
PROVIDER PORTS BEFORE DIRECT SDK COUPLING.
REUSE OF EXISTING PLATFORM/HARNESS COMPONENTS REMAINS AN
IMPLEMENTATION HYPOTHESIS UNTIL ARCHITECTURE VALIDATION.

D-V3.1-D2D-CAD-04:
READ-ONLY FIRST.
NO GIT WRITE CAPABILITY IN D2-D1, D2-D2 OR D2-D3.
D2-D4 REMAINS OUT OF TRAJECTORY.

D-V3.1-D2D-CAD-05:
EXTENSIBLE STATE-A —
MINIMAL CORE STATES WITH TIMED_OUT AND BLOCKED CONTRACTUALLY
SUPPORTED WITHOUT ADOPTING THE FULL STATE-B MODEL.

D-V3.1-D2D-CAD-06:
INT-C — CONTRACT-FIRST HYBRID.
FIXTURES FIRST, THEN ONE REAL READ-ONLY SANDBOXED WALKING SKELETON.

D-V3.1-D2D-CAD-07:
SANDBOX REQUIREMENTS MUST BE VALIDATED BEFORE ANY REAL CURSOR EXECUTION.
CURSOR PRODUCT CAPABILITIES REMAIN UNVERIFIED UNTIL A DEDICATED CHECK.

D-V3.1-D2D-CAD-08:
SERVER-ONLY SECRET PROVIDER BOUNDARY.
GITHUB READ-ONLY PERMISSIONS FIRST.
NO SECRET STORAGE TECHNOLOGY SELECTED AT THIS STAGE.

D-V3.1-D2D-CAD-09:
STRUCTURED EXECUTION EVENTS + STRICT REDACTION.
NO RUN-READY OR SLO CLAIM.

D-V3.1-D2D-CAD-10:
R-C DEFENCE IN DEPTH ADOPTED AS STRATEGY —
BOUNDED D2-C CORRECTION AND D2-D BOUNDARY VALIDATION REQUIRE
SEPARATE CYCLES AND SEPARATE GATES.

D-V3.1-D2D-CAD-11:
D2-D1 → D2-D2 → D2-D3.
D2-D4 REMAINS OUT OF TRAJECTORY.

D-V3.1-D2D-CAD-12:
D3 UX EXPLORATION MAY START AFTER D2-D1 CONTRACT STABILITY.
D3 UI DELIVERY AND STRONG RUNTIME VERDICT REQUIRE D2-D2/D2-D3 EVIDENCE.

NEXT:
GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2-D

NO DELIVERY
NO UI CODE
NO CREATECYCLE
NO GIT WRITE
NO METHOD PROMOTION
```

Date/heure décision Morris : 2026-08-03 16:56 CEST (+0200)

### Décisions D-CAD-01…12

Toutes enregistrées : **DECIDED — ADOPTED BY MORRIS** (voir document 20 §W2 et document 21 §B).

### Interprétation NO GIT WRITE

- aucun index Git projet ;
- aucun commit/historique projet ;
- aucun remote projet modifié ;
- branche locale `design/...` autorisée pour isoler le cycle ;
- documents 20 et 21 restent **non trackés** ;
- push L3 `sfia/review-handoff` = flux validation distinct obligatoire.

## Git Truth initial

| Check | Résultat |
|-------|----------|
| Branche départ | `framing/sfia-studio-v3-1-d2-d-integration-foundation-cadrage` |
| HEAD / origin/main | `004296ac9355ef9906584f5d86be6182a96dd2fd` MATCH |
| Staged | vide |
| Tracked modified | aucun |
| Untracked projet | document 20 uniquement (+ `.tmp-sfia-review/**`) |
| Branche design remote | absente |
| PR design | absente |

### Création branche locale

`git switch -c design/sfia-studio-v3-1-d2-d-integration-foundation-functional-design` — HEAD inchangé — aucun push.

## Handoff source (avant publication)

| Tip | Blob |
|-----|------|
| `8a37270572a649a1f570db4bd63f94fc85767597` | `c0be848103a23959d8a27b4860328811a4621937` |

Titre : Full Review Pack — SFIA Studio V3.1-D2-D Integration Foundation Cadrage
Verdict source : READY FOR MORRIS ARBITRATION
Vérification tip/blob courante pré-publish : `8a37270572a649a1f570db4bd63f94fc85767597` / `c0be848103a23959d8a27b4860328811a4621937` — **MATCH**

## CKC Conception fonctionnelle

| Champ | Valeur |
|-------|--------|
| Path | `method/.../pilots/02-conception-fonctionnelle.md` |
| Statut | candidate |
| Autorité | aucune |
| Limite | aucune décision technique, aucun code, aucune UX pixel |
| Risque | architecture / SDK design déguisé |

## Sources consultées

Méthode 1–10 (template, routing, operating model, guardrails, checklist, v2.5, CKC-02, synthetic map, scripts README, publish-review-handoff).
Handoff + document 20 vérifié byte-for-byte.
Framing README, 08, 15–19.
D2-C `oa/cycle/**`, vertical-slice-runtime, disclosures.
Capacités : `platform/ai/**`, `platform/tools/**`, `ops1/tools/githubReadAdapter.ts`, `harness/src/ports/**`, `cursorSandboxRunner.ts`, `oa/execution-contract/domain/types.ts`.

## Preuve byte-for-byte document 20 avant modification

Comparaison local vs extract handoff `---BEGIN DOCUMENT 20---` … `---END DOCUMENT 20---` : **MATCH_EXACT**.

---BEGIN DOCUMENT 20 BEFORE---
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

---END DOCUMENT 20 BEFORE---

## Modifications exactes du document 20

1. Métadonnées statut → `ARBITRATED BY MORRIS — FUNCTIONAL DESIGN AUTHORIZED — NO DELIVERY AUTHORIZED`
2. Ajout section **W2. Decision record Morris — 2026-08-03 16:56 CEST (+0200)** avec GO complet + table D-CAD-01…12 `DECIDED — ADOPTED BY MORRIS`
3. Verdict documentaire mis à jour (ARBITRATED / FUNCTIONAL DESIGN AUTHORIZED / NO PROJECT GIT WRITE)
4. « Prochaine décision candidate » → trace GO conception consommé ; prochaine dépend FD pack document 21
5. Historique candidat section W **préservé** (recommandations / NOT DECIDED historiques)

Diff sémantique before→after :

```diff
--- .tmp-sfia-review/document20-from-handoff.md	2026-08-03 17:10:25
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/20-v3-1-d2-d-integration-foundation-cadrage.md	2026-08-03 17:11:07
@@ -11,7 +11,7 @@
 | **Projet** | SFIA Studio V3.1-D2-D Integration Foundation |
 | **Branche** | `framing/sfia-studio-v3-1-d2-d-integration-foundation-cadrage` |
 | **Base** | `main@004296ac9355ef9906584f5d86be6182a96dd2fd` |
-| **Statut** | `D2-D INTEGRATION FOUNDATION CADRAGE — READY FOR MORRIS ARBITRATION — NO DELIVERY AUTHORIZED` |
+| **Statut** | `D2-D INTEGRATION FOUNDATION CADRAGE — ARBITRATED BY MORRIS — FUNCTIONAL DESIGN AUTHORIZED — NO DELIVERY AUTHORIZED` |
 | **CKC** | `method/.../pilots/01-cadrage.md` — candidate — experimental cognitive guidance — aucune autorité d'exécution |
 | **Code / UI / API / secrets / Delivery** | **non** |

@@ -515,7 +515,104 @@
 ### D-V3.1-D2D-CAD-12 — Critères d'entrée D3

 - **Reco candidate :** D3 UX exploratoire possible avec fixtures après D2-D1 ; D3 UI Delivery / runtime verdict après D2-D2/D2-D3 + arbitrages ; CreateCycle jamais dans D2-D
+
+---
+
+
+## W2. Decision record Morris — 2026-08-03 16:56 CEST (+0200)
+
+Les recommandations candidates de la section W restent conservées comme **historique candidat** du cadrage. Elles ne sont pas réécrites rétrospectivement. Le présent enregistrement documente l'arbitrage Morris consommé.
+
+### GO Morris d'arbitrage consommé
+
+```text
+GO ARBITRATION SFIA STUDIO V3.1-D2-D INTEGRATION FOUNDATION
+
+ADOPT:
+
+D-V3.1-D2D-CAD-01:
+STRICT MINIMAL FOUNDATION —
+PORTS + RUNTIME VALIDATION + EXECUTION STATES + CONTRACT FIXTURES,
+WITH REAL WALKING SKELETON DEFERRED TO D2-D3.
+
+D-V3.1-D2D-CAD-02:
+D2-D CONTRACTS BEFORE D3 UI DELIVERY.
+D3 UX EXPLORATION MAY START AFTER STABLE D2-D1 CONTRACTS.
+
+D-V3.1-D2D-CAD-03:
+PROVIDER PORTS BEFORE DIRECT SDK COUPLING.
+REUSE OF EXISTING PLATFORM/HARNESS COMPONENTS REMAINS AN
+IMPLEMENTATION HYPOTHESIS UNTIL ARCHITECTURE VALIDATION.
+
+D-V3.1-D2D-CAD-04:
+READ-ONLY FIRST.
+NO GIT WRITE CAPABILITY IN D2-D1, D2-D2 OR D2-D3.
+D2-D4 REMAINS OUT OF TRAJECTORY.
+
+D-V3.1-D2D-CAD-05:
+EXTENSIBLE STATE-A —
+MINIMAL CORE STATES WITH TIMED_OUT AND BLOCKED CONTRACTUALLY
+SUPPORTED WITHOUT ADOPTING THE FULL STATE-B MODEL.
+
+D-V3.1-D2D-CAD-06:
+INT-C — CONTRACT-FIRST HYBRID.
+FIXTURES FIRST, THEN ONE REAL READ-ONLY SANDBOXED WALKING SKELETON.
+
+D-V3.1-D2D-CAD-07:
+SANDBOX REQUIREMENTS MUST BE VALIDATED BEFORE ANY REAL CURSOR EXECUTION.
+CURSOR PRODUCT CAPABILITIES REMAIN UNVERIFIED UNTIL A DEDICATED CHECK.
+
+D-V3.1-D2D-CAD-08:
+SERVER-ONLY SECRET PROVIDER BOUNDARY.
+GITHUB READ-ONLY PERMISSIONS FIRST.
+NO SECRET STORAGE TECHNOLOGY SELECTED AT THIS STAGE.
+
+D-V3.1-D2D-CAD-09:
+STRUCTURED EXECUTION EVENTS + STRICT REDACTION.
+NO RUN-READY OR SLO CLAIM.
+
+D-V3.1-D2D-CAD-10:
+R-C DEFENCE IN DEPTH ADOPTED AS STRATEGY —
+BOUNDED D2-C CORRECTION AND D2-D BOUNDARY VALIDATION REQUIRE
+SEPARATE CYCLES AND SEPARATE GATES.
+
+D-V3.1-D2D-CAD-11:
+D2-D1 → D2-D2 → D2-D3.
+D2-D4 REMAINS OUT OF TRAJECTORY.

+D-V3.1-D2D-CAD-12:
+D3 UX EXPLORATION MAY START AFTER D2-D1 CONTRACT STABILITY.
+D3 UI DELIVERY AND STRONG RUNTIME VERDICT REQUIRE D2-D2/D2-D3 EVIDENCE.
+
+NEXT:
+GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2-D
+
+NO DELIVERY
+NO UI CODE
+NO CREATECYCLE
+NO GIT WRITE
+NO METHOD PROMOTION
+```
+
+Date/heure de la décision Morris : **2026-08-03 16:56 CEST (+0200)**
+
+### Table des décisions adoptées
+
+| ID | Choix adopté | Statut | Conséquence fonctionnelle | Gates restantes |
+|----|--------------|--------|---------------------------|-----------------|
+| D-V3.1-D2D-CAD-01 | Strict Minimal Foundation | DECIDED — ADOPTED BY MORRIS | Ports + validation runtime + états + fixtures ; walking skeleton réel différé à D2-D3 | Conception → architecture → Delivery D2-D1… |
+| D-V3.1-D2D-CAD-02 | Contracts before D3 UI Delivery ; D3 UX exploration possible après stabilité D2-D1 | DECIDED — ADOPTED BY MORRIS | UI Delivery D3 bloquée tant que contrats non stables ; UX exploratoire possible après D2-D1 | GO D3 UX / UI distincts |
+| D-V3.1-D2D-CAD-03 | Provider ports before direct SDK coupling ; reuse platform/harness reste hypothèse jusqu'à validation architecture | DECIDED — ADOPTED BY MORRIS | Couplage SDK direct interdit tant qu'architecture non validée ; réutilisation = hypothèse | Architecture D2-D |
+| D-V3.1-D2D-CAD-04 | Read-only first ; aucune capacité Git write en D2-D1/D2-D2/D2-D3 ; D2-D4 hors trajectoire | DECIDED — ADOPTED BY MORRIS | Aucune mutation Git dans la trajectoire D2-D actuelle | GO distinct futur pour writes |
+| D-V3.1-D2D-CAD-05 | Extensible STATE-A avec timed_out et blocked contractuellement supportés ; pas de STATE-B complet | DECIDED — ADOPTED BY MORRIS | Huit états fonctionnels max ; pas de created/queued/validating persistants | Arbitrage sémantique FD |
+| D-V3.1-D2D-CAD-06 | INT-C contract-first hybride | DECIDED — ADOPTED BY MORRIS | Fixtures d'abord, puis un walking skeleton read-only sandboxé | Delivery D2-D1 puis D2-D3 |
+| D-V3.1-D2D-CAD-07 | Sandbox requirements avant Cursor réel ; capacités produit Cursor UNVERIFIED jusqu'à vérification dédiée | DECIDED — ADOPTED BY MORRIS | Cursor réel interdit sans sandbox validée ; UNVERIFIED visible | Check Cursor dédié + D2-D2/D3 |
+| D-V3.1-D2D-CAD-08 | Secret boundary server-only ; GitHub read-only first ; aucune technologie de coffre sélectionnée | DECIDED — ADOPTED BY MORRIS | Secrets jamais côté client ; pas de choix de secret store | Architecture technique secrets |
+| D-V3.1-D2D-CAD-09 | Structured events + strict redaction ; aucun claim RUN READY/SLO | DECIDED — ADOPTED BY MORRIS | Observabilité fonctionnelle sans readiness | Conception événements FD |
+| D-V3.1-D2D-CAD-10 | R-C défense en profondeur ; correctif D2-C et validation frontière D2-D dans deux cycles et deux gates séparés | DECIDED — ADOPTED BY MORRIS | R-QA-D2C-01 reste OPEN ; deux travaux futurs distincts | GO correctif D2-C + GO D2-D1 |
+| D-V3.1-D2D-CAD-11 | D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire | DECIDED — ADOPTED BY MORRIS | Séquençage Delivery candidat ; pas de writes | Backlog après architectures |
+| D-V3.1-D2D-CAD-12 | UX exploratoire D3 possible après stabilité D2-D1 ; UI Delivery et verdict runtime fort après preuves D2-D2/D2-D3 | DECIDED — ADOPTED BY MORRIS | Trois niveaux de readiness D3 distincts | Critères FD-12 + preuves |
+
 ---

 ## X. Trajectoire candidate
@@ -558,16 +655,21 @@

 ## Verdict documentaire

-`D2-D INTEGRATION FOUNDATION CADRAGE — READY FOR MORRIS ARBITRATION — NO ARCHITECTURE ADOPTED — NO BACKLOG CREATED — NO DELIVERY AUTHORIZED — NO UI — NO CREATECYCLE — NO PROJECT GIT MUTATION — NO METHOD PROMOTION`
+`D2-D INTEGRATION FOUNDATION CADRAGE — ARBITRATED BY MORRIS —
+FUNCTIONAL DESIGN AUTHORIZED —
+NO ARCHITECTURE ADOPTED —
+NO BACKLOG CREATED —
+NO DELIVERY AUTHORIZED —
+NO UI —
+NO CREATECYCLE —
+NO PROJECT GIT WRITE —
+NO METHOD PROMOTION`

 ## Prochaine décision candidate

-Gate Morris d'arbitrage des décisions **D-V3.1-D2D-CAD-01…12**.
+**Trace de consommation :**

-Après arbitrage seulement, transitions candidates possibles :
-
-- GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2-D ;
-- GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2-D ;
-- GO ARCHITECTURE TECHNIQUE SFIA STUDIO V3.1-D2-D.
-
-Aucun GO Delivery ou D3 immédiatement consommable.
+- GO Conception fonctionnelle SFIA Studio V3.1-D2-D **reçu et consommé** (Cycle 2) ;
+- **aucune** architecture autorisée ;
+- **aucune** Delivery autorisée ;
+- la prochaine décision dépend du decision pack fonctionnel du document 21 (`D-V3.1-D2D-FD-01…12`).

```

## Document 20 complet après

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
| **Statut** | `D2-D INTEGRATION FOUNDATION CADRAGE — ARBITRATED BY MORRIS — FUNCTIONAL DESIGN AUTHORIZED — NO DELIVERY AUTHORIZED` |
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


## W2. Decision record Morris — 2026-08-03 16:56 CEST (+0200)

Les recommandations candidates de la section W restent conservées comme **historique candidat** du cadrage. Elles ne sont pas réécrites rétrospectivement. Le présent enregistrement documente l'arbitrage Morris consommé.

### GO Morris d'arbitrage consommé

```text
GO ARBITRATION SFIA STUDIO V3.1-D2-D INTEGRATION FOUNDATION

ADOPT:

D-V3.1-D2D-CAD-01:
STRICT MINIMAL FOUNDATION —
PORTS + RUNTIME VALIDATION + EXECUTION STATES + CONTRACT FIXTURES,
WITH REAL WALKING SKELETON DEFERRED TO D2-D3.

D-V3.1-D2D-CAD-02:
D2-D CONTRACTS BEFORE D3 UI DELIVERY.
D3 UX EXPLORATION MAY START AFTER STABLE D2-D1 CONTRACTS.

D-V3.1-D2D-CAD-03:
PROVIDER PORTS BEFORE DIRECT SDK COUPLING.
REUSE OF EXISTING PLATFORM/HARNESS COMPONENTS REMAINS AN
IMPLEMENTATION HYPOTHESIS UNTIL ARCHITECTURE VALIDATION.

D-V3.1-D2D-CAD-04:
READ-ONLY FIRST.
NO GIT WRITE CAPABILITY IN D2-D1, D2-D2 OR D2-D3.
D2-D4 REMAINS OUT OF TRAJECTORY.

D-V3.1-D2D-CAD-05:
EXTENSIBLE STATE-A —
MINIMAL CORE STATES WITH TIMED_OUT AND BLOCKED CONTRACTUALLY
SUPPORTED WITHOUT ADOPTING THE FULL STATE-B MODEL.

D-V3.1-D2D-CAD-06:
INT-C — CONTRACT-FIRST HYBRID.
FIXTURES FIRST, THEN ONE REAL READ-ONLY SANDBOXED WALKING SKELETON.

D-V3.1-D2D-CAD-07:
SANDBOX REQUIREMENTS MUST BE VALIDATED BEFORE ANY REAL CURSOR EXECUTION.
CURSOR PRODUCT CAPABILITIES REMAIN UNVERIFIED UNTIL A DEDICATED CHECK.

D-V3.1-D2D-CAD-08:
SERVER-ONLY SECRET PROVIDER BOUNDARY.
GITHUB READ-ONLY PERMISSIONS FIRST.
NO SECRET STORAGE TECHNOLOGY SELECTED AT THIS STAGE.

D-V3.1-D2D-CAD-09:
STRUCTURED EXECUTION EVENTS + STRICT REDACTION.
NO RUN-READY OR SLO CLAIM.

D-V3.1-D2D-CAD-10:
R-C DEFENCE IN DEPTH ADOPTED AS STRATEGY —
BOUNDED D2-C CORRECTION AND D2-D BOUNDARY VALIDATION REQUIRE
SEPARATE CYCLES AND SEPARATE GATES.

D-V3.1-D2D-CAD-11:
D2-D1 → D2-D2 → D2-D3.
D2-D4 REMAINS OUT OF TRAJECTORY.

D-V3.1-D2D-CAD-12:
D3 UX EXPLORATION MAY START AFTER D2-D1 CONTRACT STABILITY.
D3 UI DELIVERY AND STRONG RUNTIME VERDICT REQUIRE D2-D2/D2-D3 EVIDENCE.

NEXT:
GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2-D

NO DELIVERY
NO UI CODE
NO CREATECYCLE
NO GIT WRITE
NO METHOD PROMOTION
```

Date/heure de la décision Morris : **2026-08-03 16:56 CEST (+0200)**

### Table des décisions adoptées

| ID | Choix adopté | Statut | Conséquence fonctionnelle | Gates restantes |
|----|--------------|--------|---------------------------|-----------------|
| D-V3.1-D2D-CAD-01 | Strict Minimal Foundation | DECIDED — ADOPTED BY MORRIS | Ports + validation runtime + états + fixtures ; walking skeleton réel différé à D2-D3 | Conception → architecture → Delivery D2-D1… |
| D-V3.1-D2D-CAD-02 | Contracts before D3 UI Delivery ; D3 UX exploration possible après stabilité D2-D1 | DECIDED — ADOPTED BY MORRIS | UI Delivery D3 bloquée tant que contrats non stables ; UX exploratoire possible après D2-D1 | GO D3 UX / UI distincts |
| D-V3.1-D2D-CAD-03 | Provider ports before direct SDK coupling ; reuse platform/harness reste hypothèse jusqu'à validation architecture | DECIDED — ADOPTED BY MORRIS | Couplage SDK direct interdit tant qu'architecture non validée ; réutilisation = hypothèse | Architecture D2-D |
| D-V3.1-D2D-CAD-04 | Read-only first ; aucune capacité Git write en D2-D1/D2-D2/D2-D3 ; D2-D4 hors trajectoire | DECIDED — ADOPTED BY MORRIS | Aucune mutation Git dans la trajectoire D2-D actuelle | GO distinct futur pour writes |
| D-V3.1-D2D-CAD-05 | Extensible STATE-A avec timed_out et blocked contractuellement supportés ; pas de STATE-B complet | DECIDED — ADOPTED BY MORRIS | Huit états fonctionnels max ; pas de created/queued/validating persistants | Arbitrage sémantique FD |
| D-V3.1-D2D-CAD-06 | INT-C contract-first hybride | DECIDED — ADOPTED BY MORRIS | Fixtures d'abord, puis un walking skeleton read-only sandboxé | Delivery D2-D1 puis D2-D3 |
| D-V3.1-D2D-CAD-07 | Sandbox requirements avant Cursor réel ; capacités produit Cursor UNVERIFIED jusqu'à vérification dédiée | DECIDED — ADOPTED BY MORRIS | Cursor réel interdit sans sandbox validée ; UNVERIFIED visible | Check Cursor dédié + D2-D2/D3 |
| D-V3.1-D2D-CAD-08 | Secret boundary server-only ; GitHub read-only first ; aucune technologie de coffre sélectionnée | DECIDED — ADOPTED BY MORRIS | Secrets jamais côté client ; pas de choix de secret store | Architecture technique secrets |
| D-V3.1-D2D-CAD-09 | Structured events + strict redaction ; aucun claim RUN READY/SLO | DECIDED — ADOPTED BY MORRIS | Observabilité fonctionnelle sans readiness | Conception événements FD |
| D-V3.1-D2D-CAD-10 | R-C défense en profondeur ; correctif D2-C et validation frontière D2-D dans deux cycles et deux gates séparés | DECIDED — ADOPTED BY MORRIS | R-QA-D2C-01 reste OPEN ; deux travaux futurs distincts | GO correctif D2-C + GO D2-D1 |
| D-V3.1-D2D-CAD-11 | D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire | DECIDED — ADOPTED BY MORRIS | Séquençage Delivery candidat ; pas de writes | Backlog après architectures |
| D-V3.1-D2D-CAD-12 | UX exploratoire D3 possible après stabilité D2-D1 ; UI Delivery et verdict runtime fort après preuves D2-D2/D2-D3 | DECIDED — ADOPTED BY MORRIS | Trois niveaux de readiness D3 distincts | Critères FD-12 + preuves |

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

`D2-D INTEGRATION FOUNDATION CADRAGE — ARBITRATED BY MORRIS —
FUNCTIONAL DESIGN AUTHORIZED —
NO ARCHITECTURE ADOPTED —
NO BACKLOG CREATED —
NO DELIVERY AUTHORIZED —
NO UI —
NO CREATECYCLE —
NO PROJECT GIT WRITE —
NO METHOD PROMOTION`

## Prochaine décision candidate

**Trace de consommation :**

- GO Conception fonctionnelle SFIA Studio V3.1-D2-D **reçu et consommé** (Cycle 2) ;
- **aucune** architecture autorisée ;
- **aucune** Delivery autorisée ;
- la prochaine décision dépend du decision pack fonctionnel du document 21 (`D-V3.1-D2D-FD-01…12`).

---END DOCUMENT 20---

## Document 21 complet

---BEGIN DOCUMENT 21---
# 21 — V3.1-D2-D Integration Foundation — Conception fonctionnelle

## A. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-08-03 17:11:11 CEST (+0200) |
| **Cycle** | Cycle 2 — Conception fonctionnelle |
| **Profil SFIA** | **Critical** |
| **Typologie** | EVOL — documentation-only |
| **Projet** | SFIA Studio V3.1-D2-D Integration Foundation |
| **Branche** | `design/sfia-studio-v3-1-d2-d-integration-foundation-functional-design` |
| **Base** | `main@004296ac9355ef9906584f5d86be6182a96dd2fd` |
| **Document amont** | `20-v3-1-d2-d-integration-foundation-cadrage.md` (arbitrated) |
| **CKC** | `method/.../pilots/02-conception-fonctionnelle.md` — candidate — aucune autorité d'exécution |
| **Statut** | `D2-D FUNCTIONAL DESIGN COMPLETE LOCALLY — READY FOR MORRIS ARBITRATION — NO ARCHITECTURE OR DELIVERY AUTHORIZED` |
| **Code / API / UI / architecture / backlog** | **non** |

### GO Morris consommé

```text
GO ARBITRATION SFIA STUDIO V3.1-D2-D INTEGRATION FOUNDATION

ADOPT:

D-V3.1-D2D-CAD-01:
STRICT MINIMAL FOUNDATION —
PORTS + RUNTIME VALIDATION + EXECUTION STATES + CONTRACT FIXTURES,
WITH REAL WALKING SKELETON DEFERRED TO D2-D3.

D-V3.1-D2D-CAD-02:
D2-D CONTRACTS BEFORE D3 UI DELIVERY.
D3 UX EXPLORATION MAY START AFTER STABLE D2-D1 CONTRACTS.

D-V3.1-D2D-CAD-03:
PROVIDER PORTS BEFORE DIRECT SDK COUPLING.
REUSE OF EXISTING PLATFORM/HARNESS COMPONENTS REMAINS AN
IMPLEMENTATION HYPOTHESIS UNTIL ARCHITECTURE VALIDATION.

D-V3.1-D2D-CAD-04:
READ-ONLY FIRST.
NO GIT WRITE CAPABILITY IN D2-D1, D2-D2 OR D2-D3.
D2-D4 REMAINS OUT OF TRAJECTORY.

D-V3.1-D2D-CAD-05:
EXTENSIBLE STATE-A —
MINIMAL CORE STATES WITH TIMED_OUT AND BLOCKED CONTRACTUALLY
SUPPORTED WITHOUT ADOPTING THE FULL STATE-B MODEL.

D-V3.1-D2D-CAD-06:
INT-C — CONTRACT-FIRST HYBRID.
FIXTURES FIRST, THEN ONE REAL READ-ONLY SANDBOXED WALKING SKELETON.

D-V3.1-D2D-CAD-07:
SANDBOX REQUIREMENTS MUST BE VALIDATED BEFORE ANY REAL CURSOR EXECUTION.
CURSOR PRODUCT CAPABILITIES REMAIN UNVERIFIED UNTIL A DEDICATED CHECK.

D-V3.1-D2D-CAD-08:
SERVER-ONLY SECRET PROVIDER BOUNDARY.
GITHUB READ-ONLY PERMISSIONS FIRST.
NO SECRET STORAGE TECHNOLOGY SELECTED AT THIS STAGE.

D-V3.1-D2D-CAD-09:
STRUCTURED EXECUTION EVENTS + STRICT REDACTION.
NO RUN-READY OR SLO CLAIM.

D-V3.1-D2D-CAD-10:
R-C DEFENCE IN DEPTH ADOPTED AS STRATEGY —
BOUNDED D2-C CORRECTION AND D2-D BOUNDARY VALIDATION REQUIRE
SEPARATE CYCLES AND SEPARATE GATES.

D-V3.1-D2D-CAD-11:
D2-D1 → D2-D2 → D2-D3.
D2-D4 REMAINS OUT OF TRAJECTORY.

D-V3.1-D2D-CAD-12:
D3 UX EXPLORATION MAY START AFTER D2-D1 CONTRACT STABILITY.
D3 UI DELIVERY AND STRONG RUNTIME VERDICT REQUIRE D2-D2/D2-D3 EVIDENCE.

NEXT:
GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2-D

NO DELIVERY
NO UI CODE
NO CREATECYCLE
NO GIT WRITE
NO METHOD PROMOTION
```

Date/heure décision Morris cadrage : 2026-08-03 16:56 CEST (+0200).
Le présent cycle consomme la suite **GO CONCEPTION FONCTIONNELLE**.

**NO GIT WRITE :** aucun index/commit/push/PR/merge projet ; documents 20/21 non trackés ; push L3 handoff distinct.

### Marqueurs épistémiques

| Marqueur | Usage |
|----------|-------|
| **Décision Morris adoptée** | D-CAD-01…12 |
| **Observation repo** | Fait Git vérifiable |
| **Règle fonctionnelle candidate** | Comportement proposé, non adopté |
| **Hypothèse** | Inférence non prouvée |
| **Inconnue** | Lacune ouverte |
| **Réserve** | OPEN transportée |
| **Décision fonctionnelle candidate** | FD-01…12 — NOT DECIDED |

---

## B. Décisions Morris héritées

Toutes : **DECIDED — ADOPTED BY MORRIS** (2026-08-03 16:56 CEST). Conséquences fonctionnelles — **pas** techniques.

| ID | Conséquence fonctionnelle |
|----|---------------------------|
| CAD-01 | Socle minimal : ports + validation + états + fixtures ; walking skeleton réel en D2-D3 |
| CAD-02 | Contrats avant UI Delivery D3 ; UX exploratoire possible après D2-D1 stable |
| CAD-03 | Ports fournisseurs avant couplage SDK ; réutilisation platform/harness = hypothèse jusqu'à architecture |
| CAD-04 | Read-only first ; aucune Git write en D2-D1/2/3 ; D2-D4 hors trajectoire |
| CAD-05 | Extensible STATE-A ; `timed_out` et `blocked` supportés ; pas de STATE-B complet |
| CAD-06 | INT-C : fixtures d'abord, puis un walking skeleton read-only sandboxé |
| CAD-07 | Sandbox validée avant Cursor réel ; capacités Cursor **UNVERIFIED** jusqu'à check dédié |
| CAD-08 | Secrets server-only ; GitHub read-only first ; aucun secret store choisi |
| CAD-09 | Événements structurés + redaction stricte ; aucun RUN READY / SLO |
| CAD-10 | R-C : correctif D2-C et validation frontière D2-D = deux cycles / deux gates |
| CAD-11 | Séquence D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire |
| CAD-12 | UX exploratoire après D2-D1 ; UI Delivery + verdict runtime fort après D2-D2/D2-D3 |

**Observation repo :** briques OpenAI (`platform/ai`), GitHub read (`ops1/tools/githubReadAdapter`, `platform/tools`), Cursor/sandbox harness existent en silos — **pas** de package D2-D OA unifié (**Observation** cadrage 20).

---

## C. Finalité fonctionnelle

**Problème fonctionnel :** permettre à SFIA Studio de **préparer, suivre et restituer** une exécution externe contrôlée, **read-only** et **observable**, sans exposer les détails fournisseurs à D3 et sans permettre de mutation Git.

**Valeur attendue :**

- vérité sur la source (`fixture` / `sandbox-real` / `real`) ;
- comportement testable via fixtures contractuelles ;
- erreurs compréhensibles et normalisées ;
- contrôle Morris pour décisions structurantes ;
- fixtures et réel compatibles (même forme) ;
- progression vers un walking skeleton read-only (D2-D3).

Ce n'est **pas** : brancher tous les SDK, ouvrir CreateCycle, ou livrer une UI.

---

## D. Périmètre fonctionnel

Comportements inclus (cible fonctionnelle) :

1. Préparation d'une **intention d'exécution**
2. Validation fonctionnelle des entrées
3. Détermination de la **capacité fournisseur** disponible
4. Sélection explicite `fixture` / `sandbox-real` / `real`
5. Lecture Git distante **read-only**
6. Exécution AI **bornée**
7. Préparation d'un **contrat d'exécution Cursor**
8. Exécution Cursor **read-only sandboxée** (cible ; capacité produit UNVERIFIED)
9. Suivi des états
10. Attente humaine
11. Cancellation
12. Timeout
13. Blocked
14. Normalisation des résultats
15. Collecte des preuves
16. Disclosures
17. Usage/coût **si** fourni et validé
18. Restitution pour D3 futur

---

## E. Hors périmètre fonctionnel

- CreateCycle
- Mutations Git / écriture GitHub
- Édition de fichiers / commande arbitraire
- Auto-validation Morris
- Production deploy / persistance complète / IAM complet / dashboard
- UI détaillée / Figma
- Architecture (fonctionnelle ou technique)
- SDK / backlog / user stories
- Levée automatique des réserves

---

## F. Acteurs et rôles

### 1. Morris / décideur humain

| Aspect | Contenu |
|--------|---------|
| Intention | Arbitrer gates structurantes ; autoriser progression |
| Responsabilité | Décisions GO ; acceptation risques |
| Visible | Preuves, états, disclosures, erreurs redacted |
| Autorisé | Décider, annuler gate, refuser progression |
| Interdit | Contournement par validation technique automatique |
| Confiance | Haute (autorité) |

### 2. Utilisateur opérateur futur

| Aspect | Contenu |
|--------|---------|
| Intention | Lancer / observer une exécution bornée |
| Visible | États, disclosures, erreurs utilisateur, usage si fourni |
| Autorisé | Intention, cancel si permis, lecture résultats |
| Interdit | Secrets, mutations, commandes arbitraires, forcer réel sans gate |
| Confiance | Non fiable (navigateur) |

### 3. SFIA Studio

| Aspect | Contenu |
|--------|---------|
| Intention | Orchestrer validation, ports, états, événements, restitution |
| Autorisé | Valider, appeler ports serveur, publier événements redacted |
| Interdit | Exposer secrets client ; muter Git ; inventer succès |
| Confiance | Semi-confiant (serveur) |

### 4. D2-C Qualification Core

| Aspect | Contenu |
|--------|---------|
| Intention | Qualifier cycle via CKC en read-only |
| Observation | Package `oa/cycle` intégré ; Result Success/Failure |
| Interdit | Mutation CreateCycle |
| Réserve | R-QA-D2C-01 OPEN |

### 5. Provider AI fonctionnel

Besoin : réponse bornée + usage éventuel. Secrets server-only. Pas de détail SDK.

### 6. Provider Git fonctionnel

Besoin : Git Truth distant read-only (repo/ref/commit/branche/PR/CI). Write **interdit**.

### 7. Worker Cursor fonctionnel

Besoin : exécution contrôlée sandbox read-only. Capacités produit **UNVERIFIED** (CAD-07).

### 8. Secret Source fonctionnelle

Fournit credentials **serveur only** ; identité sans valeur ; jamais client.

### 9. Event Sink fonctionnel

Reçoit événements structurés redacted ; pas de modèle technique d'event bus décidé.

### 10. Sandbox fonctionnelle

Isole workspace ; enforce read-only ; timeout/quota ; chemins protégés ; preuve de conformité avant Cursor réel.

---

## G. Objets fonctionnels

Noms **candidats** jusqu'à arbitrage FD-01. Pas de signatures TypeScript.

### Execution Intent

- Finalité : déclarer ce que l'opérateur veut exécuter
- Attributs min. : objectif borné, providers demandés, source déclarée, limites
- Propriétaire : opérateur / Studio
- Visibilité D3 : résumé non sensible
- Intégrité : source obligatoire ; mutation demandée → rejet

### Execution Context

- Finalité : lier projet, refs, correlationId, permissions
- Sensible : refs repo ; pas de secrets
- Visibilité D3 : partiel

### Provider Capability

- Finalité : dire si un provider est `available` / `unavailable` / `unverified`
- Cursor peut être `unverified` → blocked ou gate

### Validation Outcome

- Finalité : accept / reject avant exploitation
- Pas un état persistant STATE-B

### Execution Run

- Finalité : instance engagée d'une intention
- Nouveau run requis après failed/timed_out/cancelled/succeeded pour rejouer
- Visibilité D3 : oui (état, source, preuves)

### Execution State

- Un des huit états §H

### External Result

- Sortie provider normalisée ; complète ou partielle

### Execution Evidence

- Preuves non sensibles ; timestamps validés ; chemins sandbox

### Source Disclosure

- `fixture` \| `sandbox-real` \| `real` + provider + limites

### Human Decision Gate

- Décision Morris structurante ; pas substituable par validation technique

### Usage Summary

- Tokens/usage/coût **si** fournis et sourcés ; sinon `unavailable`

### Normalized Failure

- Famille d'erreur + message utilisateur + preuve minimale + données masquées

---

## H. Modèle d'états hérité

**Décision Morris adoptée CAD-05 — Extensible STATE-A.**

États fonctionnels **uniquement** :

1. `idle`
2. `running`
3. `awaiting_human`
4. `succeeded`
5. `failed`
6. `cancelled`
7. `timed_out`
8. `blocked`

**Interdit d'ajouter** comme états persistants : `created`, `queued`, `validating`, ou autres STATE-B.

Une validation est une **phase/résultat** (`Validation Outcome`), pas un état supplémentaire.

---

## I. Sémantique des états

**Règles fonctionnelles candidates** (soumises FD-02) :

| État | Définition |
|------|------------|
| `idle` | Aucune exécution active ; intention modifiable tant qu'aucun run n'est engagé |
| `running` | Au moins une opération externe contrôlée est active |
| `awaiting_human` | Suspendu sur décision humaine explicite ; aucune progression automatique structurante |
| `succeeded` | Toutes les sorties **obligatoires** reçues, validées et normalisées |
| `failed` | Opération engagée a échoué ; aucun résultat exploitable **complet** |
| `cancelled` | Arrêt explicite accepté avant terminaison |
| `timed_out` | Expiration d'une limite temporelle bornée |
| `blocked` | Pas le droit/capacité de démarrer ou continuer (validation, permission, provider, sandbox, gate Morris) |

---

## J. Règles de transition

**Transitions candidates autorisées :**

| De | Vers | Condition |
|----|------|-----------|
| idle | running | Intent validé ; source déclarée ; permissions OK ; pas de gate bloquante |
| idle | blocked | Validation/permission/capability/sandbox/gate échoue avant engagement |
| running | awaiting_human | Gate humaine structurante requise |
| running | succeeded | Sorties obligatoires validées |
| running | failed | Échec opération engagée |
| running | timed_out | Limite temporelle atteinte |
| running | cancelled | Cancel accepté |
| awaiting_human | running | Décision humaine positive enregistrée |
| awaiting_human | cancelled | Annulation humaine / cancel accepté |
| awaiting_human | blocked | Décision négative ou précondition devenue invalide |

**Transitions interdites :**

- `failed` → `succeeded` sans **nouveau run**
- `timed_out` → `succeeded` sans nouveau run
- `blocked` → `running` sans **nouvelle validation**
- `succeeded` → `running` sur le **même** run
- progression automatique depuis `awaiting_human` pour décision structurante

**Nouveau run (règle candidate) :** nouvel `Execution Run` avec nouvel identifiant fonctionnel / correlationId de run ; ne réécrit pas l'historique du run précédent.

---

## K. Parcours nominal fixture

1. Contexte projet existant
2. Intention d'exécution
3. Validation → accept
4. Source **`fixture`** déclarée et visible
5. Qualification D2-C (core read-only)
6. Résultats Git/AI/Cursor **simulés** via **mêmes contrats** que réel
7. Événements structurés
8. `succeeded`
9. Restitution future D3 avec disclosure fixture

Exigences : aucune règle métier parallèle ; aucun secret ; déterminisme ; source toujours visible.

---

## L. Parcours nominal sandbox-real read-only

**FUNCTIONAL TARGET — IMPLEMENTATION CAPABILITY UNVERIFIED**

1. Contexte projet
2. Validation
3. Vérification permissions read-only
4. Sandbox conforme (CAD-07)
5. Lecture GitHub bornée
6. Appel AI borné candidat
7. Préparation contrat Cursor
8. Exécution Cursor read-only
9. Collecte états
10. Validation sorties
11. Résultat normalisé
12. Preuves
13. Restitution + disclosure `sandbox-real` ou `real`

Ne pas affirmer la disponibilité technique aujourd'hui. Cursor produit **UNVERIFIED**.

---

## M. Parcours d'attente humaine

| Élément | Règle candidate |
|---------|-----------------|
| Déclencheurs | Gate Morris structurante ; permission sensible ; passage fixture→real ; Cursor réel ; risque données |
| Présenté | État, source, provider, preuves redacted, question de décision |
| Décision | Approve / Reject / Cancel (libellés candidats) |
| Autorisé | Enregistrer décision ; reprendre ou bloquer |
| Expiration | Optionnelle → `timed_out` ou `blocked` selon règle adoptée (FD-06) |
| Auto | **Interdit** pour décision structurante |
| Trace | `human_decision_recorded` |

---

## N. Parcours cancellation

- Qui : opérateur (si permis) ou Morris
- Quand : depuis `running` ou `awaiting_human`
- Résultat : état terminal `cancelled` ; **jamais** succès
- Provider non interruptible immédiatement : état `cancelled` dès acceptation locale ; résultats tardifs **non** interprétés comme succès ; événement d'arrivée tardive redacted possible
- Preuve : qui / quand / run id

---

## O. Parcours timeout

- Limites **bornées** (valeurs numériques = architecture future)
- Timeout **global** vs **opération fournisseur** : concepts fonctionnels distincts
- État : `timed_out`
- Retry : uniquement via **nouveau run** ; **aucun** retry infini
- Preuve : horodatage début/fin validés

---

## P. Parcours blocked

Déclencheurs : entrée invalide ; provider indisponible ; auth absente ; permission insuffisante ; sandbox non conforme ; chemin protégé ; mutation demandée ; gate Morris manquante ; Cursor UNVERIFIED sans gate ; secret indisponible ; règle RGPD non satisfaite.

| Élément | Contenu candidat |
|---------|------------------|
| Message utilisateur | Cause compréhensible sans secret |
| Code fonctionnel | Famille §S |
| Preuve minimale | Motif + correlationId + source |
| Déblocage | Correction + **nouvelle validation** ; éventuellement nouvelle gate |
| État | `blocked` (avant/sans engagement) ; si déjà running, préférer `failed` selon FD-04 |

---

## Q. Intégrations fonctionnelles

Sans endpoint, SDK, HTTP, classe, route, Server Action, package, protocole.

### AI

| Dimension | Contenu |
|-----------|---------|
| Besoin | Analyse / sortie structurée bornée |
| Demande | Intent + contexte minimisé |
| Réponse | Texte/structure + usage optionnel |
| Partiel | Marqué partiel ; ≠ succès |
| Indispo | `provider_unavailable` / blocked ou failed |
| Permission | Secret server-only |
| Timeout / cancel | Supportés fonctionnellement |
| Disclosure | provider + source |

### GitHub

| Dimension | Contenu |
|-----------|---------|
| Besoin | Git Truth read-only |
| Demande | repo/ref/PR/CI allowlistés |
| Réponse | Métadonnées |
| Write | **Interdit** |
| Permission insuffisante | blocked/failed + `authorization` |
| Disclosure | read-only + absence mutation |

### Cursor

| Dimension | Contenu |
|-----------|---------|
| Besoin | Exécution sandbox read-only |
| Contrat | Borné ; pas de commande arbitraire navigateur |
| Capability | Peut être UNVERIFIED → blocked/gate |
| Write | Interdit |
| Sandbox | Obligatoire avant réel |

---

## R. Validation runtime fonctionnelle

**Règles observables candidates :**

1. Toute entrée externe validée **avant** exploitation
2. Toute sortie provider validée **avant** succès
3. Champ obligatoire absent → `blocked` (avant) ou `failed` (pendant) selon phase
4. Valeur inattendue → résultat normalisé (pas d'exception brute D3)
5. Aucun accès métadonnées avant validation (lien R-QA-D2C-01 / R-QA-REV-01)
6. Aucun `consumed=true` après erreur
7. `correlationId` obligatoire
8. Timestamp invalide → non publié comme événement valide
9. Payload size bornée
10. Résultat partiel ≠ succès
11. Redaction erreurs
12. Aucune correction silencieuse d'entrée invalide

Distinguer : **rejet avant** · **échec pendant** · **sortie invalide après**.

---

## S. Catalogue fonctionnel des erreurs

Familles **candidates** (non codes techniques définitifs) :

| Famille | Moment | État candidat | Retry | Humain | Masquer |
|---------|--------|---------------|-------|--------|---------|
| validation | avant | blocked | oui après correction | non | détails internes |
| authentication | avant/pendant | blocked/failed | après credential | parfois | secrets |
| authorization | avant/pendant | blocked/failed | après droits | parfois | tokens |
| provider_unavailable | pendant | failed/blocked | nouveau run | non | — |
| rate_limited | pendant | failed/blocked | différé borné | non | — |
| timed_out | pendant | timed_out | nouveau run | non | — |
| cancelled | pendant | cancelled | nouveau run | non | — |
| sandbox_blocked | avant/pendant | blocked | après conformité | parfois | chemins sensibles |
| protected_path | pendant | blocked/failed | non si interdit | oui | chemins |
| mutation_forbidden | avant | blocked | non (changer intent) | non | — |
| human_gate_required | avant/pendant | awaiting_human/blocked | après décision | **oui** | — |
| invalid_provider_result | après | failed | nouveau run | non | payload brut |
| internal_normalized_failure | pendant | failed | limité | parfois | stack |

Message utilisateur : compréhensible, sans secret, sans prompt complet.

---

## T. Permissions et visibilité

- Navigateur : **sans secret**
- Serveur : seule frontière credentials
- GitHub / Cursor : **read-only**
- Aucune mutation
- Allowlist repo ; chemins protégés
- Morris vs opérateur : Morris seul pour gates structurantes
- D3 : états, disclosures, erreurs redacted, preuves non sensibles
- Secrets : **jamais** visibles
- Erreurs : redacted

---

## U. Disclosures fonctionnels

Toute restitution indique :

- source : `fixture` \| `sandbox-real` \| `real`
- provider
- résultat complet / partiel
- timestamp de preuve (ISO validé)
- correlationId / identifiant fonctionnel
- permission read-only
- absence de mutation
- limites connues
- capacité UNVERIFIED le cas échéant

**Jamais** présenter une fixture comme résultat réel.

---

## V. Événements fonctionnels

Noms **candidats** (FD-10). Pas d'event bus technique.

| Événement | Déclencheur | Avant → Après | Données min. | Interdit |
|-----------|-------------|---------------|--------------|----------|
| intent_validated | validation OK | idle→idle ou vers running/blocked | correlationId, source | secrets |
| execution_started | run engagé | idle→running | run id, providers | prompts complets |
| execution_blocked | blocage | →blocked | famille, motif | secrets |
| external_operation_started | op provider | running | provider, op | payloads bruts |
| external_operation_completed | fin op | running | statut, usage? | réponses complètes |
| awaiting_human | gate | running→awaiting_human | question | secrets |
| human_decision_recorded | décision | awaiting_human→… | décision | — |
| execution_cancelled | cancel | →cancelled | qui/quand | — |
| execution_timed_out | timeout | →timed_out | bornes | — |
| execution_failed | échec | →failed | famille | stack/secrets |
| execution_succeeded | succès | →succeeded | preuve ids | données brutes |

Tous : redaction ; correlationId ; source fixture/sandbox-real/real.

---

## W. Usage et FinOps fonctionnels

- Usage présenté **uniquement** s'il est fourni et validé
- Coût uniquement si calculable **et** sourcé
- Sinon : clairement `unavailable`
- **Aucun** prix inventé
- Quotas / rate limit comme comportements
- Distinction estimation / mesure
- Aucune décision de facturation

---

## X. Fixtures contractuelles

Règles : parité forme/comportement ; version ; déterminisme ; provenance ; invalidation si contrat change ; données synthétiques ; scénarios +/- ; aucune règle métier parallèle ; compatibles transitions ; rejouables.

Scénarios minimaux : succès ; validation rejetée ; auth refusée ; permission insuffisante ; rate limit ; timeout ; cancellation ; provider indisponible ; résultat partiel ; sortie invalide ; sandbox bloqué ; mutation interdite ; gate Morris requise.

---

## Y. Défense en profondeur R-QA-D2C-01

**Décision Morris adoptée CAD-10 — R-C.**

### Travail futur 1 — Correctif D2-C borné

- Cycle séparé ; gate séparée ; QA séparée
- **Aucune** levée de réserve anticipée

### Travail futur 2 — Validation frontière D2-D

- Exigence fonctionnelle du présent design
- Future Delivery D2-D1
- **Ne remplace pas** le correctif D2-C

### Critères fonctionnels communs

- `null`/`undefined` rejetés **avant** lecture métadonnées
- Échec normalisé ; aucun succès ; aucun `consumed=true`
- Événement valide **ou** absence d'événement explicitement justifiée
- Aucune exception brute exposée

**R-QA-D2C-01 :** `OPEN — NOT LIFTED`

**Réserves conservées :** R-QA-REV-01 OPEN NOT LIFTED ; R-QA-REV-02 OPEN NOT LIFTED.

---

## Z. Projection fonctionnelle pour D3

D3 pourra consommer fonctionnellement (sans UI) :

- état courant ; progression ; source ; provider
- résultat ; erreur normalisée ; preuve
- attente humaine ; cancel possible ; timeout ; blocked reason
- Git Truth read-only ; qualification D2-C ; preuve CKC
- usage éventuel ; disclosures ; réserves ouvertes

Ne pas dessiner UI / composants / écrans.

---

## AA. Critères d'entrée D3

Applique **CAD-12**.

### UX exploration readiness (candidat)

- Vocabulaire fonctionnel stable
- États / erreurs / disclosures définis
- DTO fonctionnels suffisamment bornés
- Fixtures contractuelles définies
- **Après** stabilité D2-D1

### UI Delivery readiness

Interdite tant que : D2-D1 non validé ; frontières non testées ; règles d'états non adoptées ; R-QA-D2C-01 non traitée selon gates ; preuves D2-D2/D2-D3 insuffisantes.

### Strong runtime verdict readiness

Exige preuves D2-D2/D2-D3 (sandbox + walking skeleton read-only) + disclosures honnêtes.

---

## AB. Critères d'acceptation fonctionnels

| ID | Given | When | Then |
|----|-------|------|------|
| CA-01 | Intent valide + source fixture | Exécution lancée | `running` puis `succeeded` ; disclosure fixture |
| CA-02 | Intent invalide | Soumission | `blocked` ; pas d'op externe ; erreur validation |
| CA-03 | Source fixture déclarée | Restitution | Disclosure ≠ real |
| CA-04 | Source real déclarée sans preuves | Tentative | Gate ou blocked ; pas de faux réel |
| CA-05 | Source inconnue | Soumission | `blocked` |
| CA-06 | Run read-only | Toute op | Aucune mutation Git |
| CA-07 | Mutation demandée | Validation | `blocked` + `mutation_forbidden` |
| CA-08 | Permission GitHub insuffisante | Lecture | blocked/failed + `authorization` |
| CA-09 | Cursor UNVERIFIED | Cursor réel demandé | blocked ou awaiting_human ; disclosure UNVERIFIED |
| CA-10 | Sandbox non conforme | Cursor réel | `blocked` + `sandbox_blocked` |
| CA-11 | AI timeout | Op AI | `timed_out` ; pas succès |
| CA-12 | Provider down | Op | `provider_unavailable` normalisé |
| CA-13 | Résultat partiel | Fin op | ≠ succeeded ; marquage partiel |
| CA-14 | Sortie invalide | Validation sortie | `failed` + `invalid_provider_result` |
| CA-15 | Cancel accepté | Pendant running | `cancelled` ; pas succès |
| CA-16 | Gate Morris | Besoin décision | `awaiting_human` ; pas d'auto-progress |
| CA-17 | Gate absente alors requise | Progression | `blocked` + `human_gate_required` |
| CA-18 | Sorties obligatoires OK | Fin | `succeeded` + preuves |
| CA-19 | Request null/undefined | Frontière | Rejet avant métadonnées ; pas consumed ; R-QA-D2C-01 non levée |
| CA-20 | Erreur | Restitution | Redaction ; pas de clé/prompt complet |
| CA-21 | Usage absent | Restitution | `unavailable` ; pas de prix inventé |
| CA-22 | D3 consomme run | Affichage futur | Disclosure source + read-only + état |

Tous indépendants d'un SDK particulier.

---

## AC. Invariants fonctionnels

1. Aucun succès sans validation des sorties
2. Aucune mutation Git
3. Aucun secret côté client
4. Aucune progression structurante sans Morris
5. Aucune fixture présentée comme réelle
6. Aucun résultat partiel présenté comme complet
7. Aucun retry infini
8. Aucun événement contenant clé ou prompt complet par défaut
9. Aucune dépendance D3 directe vers un fournisseur
10. Aucun CreateCycle
11. Aucun `consumed=true` après échec
12. Aucune levée de réserve implicite

---

## AD. Questions ouvertes

- Capacités produit Cursor réelles
- Mécanisme auth GitHub
- Secret store
- Capacités OpenAI exactes nécessaires
- Rétention des événements
- Persistance des runs
- Traitement multi-instance
- Données personnelles/confidentielles admissibles
- Granularité des résultats partiels
- Capacité réelle de cancellation fournisseur

Ne pas résoudre techniquement ici.

---

## AE. Risques fonctionnels

| ID | Risque | P | I | Mitigation fonctionnelle | Décision | Cycle |
|----|--------|---|---|--------------------------|----------|-------|
| RF-01 | Double runtime VS / oa | H | H | Frontière explicite ; pas de domaine parallèle | Archi | Archi fct |
| RF-02 | Fuite provider vers D3 | M | H | Ports + disclosures ; pas de SDK dans D3 | FD-11 | FD/Archi |
| RF-03 | État trop pauvre | M | M | Extensible STATE-A | FD-02 | FD |
| RF-04 | État trop riche | M | M | Interdire STATE-B | CAD-05 | — |
| RF-05 | Fixtures divergentes | M | H | Parité contractuelle | FD-08/X | D2-D1 |
| RF-06 | Erreurs non comparables | M | M | Familles §S | FD-09 | FD |
| RF-07 | Disclosure mensonger | M | H | Invariant fixture≠real | FD-08 | D2-D1 |
| RF-08 | Décision humaine contournée | M | H | awaiting_human obligatoire | FD-06 | D3 |
| RF-09 | Mutation accidentelle | M | H | mutation_forbidden + read-only | CAD-04 | Toujours |
| RF-10 | Logs sensibles | M | H | Redaction événements | FD-10 | D2-D2 |
| RF-11 | Coût invisible | M | M | Usage unavailable explicite | W | D2-D2 |
| RF-12 | Cancel impossible provider | M | M | Cancel local + late result rules | FD-07 | D2-D2 |
| RF-13 | Résultats tardifs | M | M | Jamais succès après cancel/timeout | FD-07 | D2-D2 |
| RF-14 | Persistance non durable | H | M | Disclosures honesty | Z | D3 |
| RF-15 | Réserve D2-C | H | H | R-C deux gates | CAD-10 | Correctif+D2-D1 |

---

## AF. Decision pack fonctionnel Morris

Toutes : **NOT DECIDED — MORRIS ARBITRATION REQUIRED**

### D-V3.1-D2D-FD-01 — Vocabulaire fonctionnel canonique

- **Question :** Adopter les objets §G comme vocabulaire canonique ?
- **Options :** adopter tel quel · renommer · réduire
- **Reco candidate :** adopter les 12 objets comme candidats canoniques
- **Gate :** arbitrage puis architecture fonctionnelle

### D-V3.1-D2D-FD-02 — Définition et sémantique des huit états

- **Options :** sémantique §I · ajustements mineurs · ajouter états (interdit CAD-05)
- **Reco candidate :** adopter sémantique §I

### D-V3.1-D2D-FD-03 — Règles de transition et nouveau run

- **Reco candidate :** transitions §J + nouveau run après terminaux

### D-V3.1-D2D-FD-04 — blocked vs failed

- **Options :** blocked seulement avant engagement · blocked aussi pendant · mapping §P
- **Reco candidate :** `blocked` avant/sans engagement ou incapacité continue sans op fatale ; `failed` si op engagée a échoué

### D-V3.1-D2D-FD-05 — Résultat complet vs partiel

- **Reco candidate :** partiel jamais `succeeded` ; marquage obligatoire

### D-V3.1-D2D-FD-06 — Waiting human et décisions Morris

- **Reco candidate :** gates structurantes → `awaiting_human` ; pas d'auto ; expiration candidate → timed_out/blocked à trancher

### D-V3.1-D2D-FD-07 — Cancellation et résultats tardifs

- **Reco candidate :** cancel local immédiat ; late results non-succès ; événement optionnel redacted

### D-V3.1-D2D-FD-08 — Disclosures fixture / sandbox-real / real

- **Reco candidate :** trois valeurs obligatoires ; fixture ≠ real invariant

### D-V3.1-D2D-FD-09 — Familles d'erreurs normalisées

- **Reco candidate :** catalogue §S comme familles canoniques candidates

### D-V3.1-D2D-FD-10 — Événements fonctionnels et redaction

- **Reco candidate :** événements §V + interdits secrets/prompts/réponses complets

### D-V3.1-D2D-FD-11 — Projection fonctionnelle D3

- **Reco candidate :** projection §Z sans UI ; D3 ne dépend pas d'un provider direct

### D-V3.1-D2D-FD-12 — Critères d'entrée UX / UI Delivery / runtime verdict

- **Reco candidate :** trois readiness §AA alignés CAD-12

Pour chaque décision : impacts sur D3 et Delivery ; dette si reportée ; haute réversibilité tant qu'architecture non figée ; dépendances CAD adoptées ; gate suivante = GO Architecture fonctionnelle **après** arbitrage.

---

## AG. Trajectoire candidate

Après arbitrage fonctionnel **seulement** :

1. Architecture fonctionnelle D2-D
2. Architecture technique D2-D
3. Backlog D2-D1 / D2-D2 / D2-D3
4. Cycles Delivery distincts
5. UX D3 exploratoire possible selon critères adoptés

**Aucune** transition automatique. Aucun GO Architecture technique / Backlog / Delivery / D3 immédiatement consommable.

---

## AH. Anti-claims

Interdit :

- functional design adopted
- architecture adopted
- backlog ready
- ready for Delivery
- providers integrated
- Cursor verified
- secrets secure / sandbox secure
- RUN READY
- UI ready / D3 opened
- CreateCycle enabled / Git write enabled
- reserve lifted
- method promoted

---

## AI. Verdict

```text
D2-D FUNCTIONAL DESIGN COMPLETE LOCALLY —
READY FOR MORRIS ARBITRATION —
ADOPTED CADRAGE DECISIONS APPLIED —
FUNCTIONAL ROLES / FLOWS / OBJECTS / STATES / RULES DOCUMENTED —
EXCEPTIONS AND ACCEPTANCE CRITERIA DOCUMENTED —
D3 FUNCTIONAL PROJECTION AND ENTRY CRITERIA DOCUMENTED —
R-QA-D2C-01 DEFENCE-IN-DEPTH FUNCTIONALLY SPECIFIED —
NO ARCHITECTURE ADOPTED —
NO BACKLOG CREATED —
NO DELIVERY AUTHORIZED —
NO UI CODE —
NO FIGMA —
NO CREATECYCLE —
NO PROJECT GIT WRITE —
NO METHOD PROMOTION
```

### Prochaine gate candidate

```text
GO ARBITRATION SFIA STUDIO V3.1-D2-D FUNCTIONAL DESIGN
APPLY D-V3.1-D2D-FD-01…12
```

Après arbitrage seulement : `GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2-D`.

---END DOCUMENT 21---

## Diff complet document 20 (fichier entier non tracké)

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/20-v3-1-d2-d-integration-foundation-cadrage.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/20-v3-1-d2-d-integration-foundation-cadrage.md
new file mode 100644
index 0000000..63cc53d
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/20-v3-1-d2-d-integration-foundation-cadrage.md
@@ -0,0 +1,675 @@
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
+| **Statut** | `D2-D INTEGRATION FOUNDATION CADRAGE — ARBITRATED BY MORRIS — FUNCTIONAL DESIGN AUTHORIZED — NO DELIVERY AUTHORIZED` |
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
+
+## W2. Decision record Morris — 2026-08-03 16:56 CEST (+0200)
+
+Les recommandations candidates de la section W restent conservées comme **historique candidat** du cadrage. Elles ne sont pas réécrites rétrospectivement. Le présent enregistrement documente l'arbitrage Morris consommé.
+
+### GO Morris d'arbitrage consommé
+
+```text
+GO ARBITRATION SFIA STUDIO V3.1-D2-D INTEGRATION FOUNDATION
+
+ADOPT:
+
+D-V3.1-D2D-CAD-01:
+STRICT MINIMAL FOUNDATION —
+PORTS + RUNTIME VALIDATION + EXECUTION STATES + CONTRACT FIXTURES,
+WITH REAL WALKING SKELETON DEFERRED TO D2-D3.
+
+D-V3.1-D2D-CAD-02:
+D2-D CONTRACTS BEFORE D3 UI DELIVERY.
+D3 UX EXPLORATION MAY START AFTER STABLE D2-D1 CONTRACTS.
+
+D-V3.1-D2D-CAD-03:
+PROVIDER PORTS BEFORE DIRECT SDK COUPLING.
+REUSE OF EXISTING PLATFORM/HARNESS COMPONENTS REMAINS AN
+IMPLEMENTATION HYPOTHESIS UNTIL ARCHITECTURE VALIDATION.
+
+D-V3.1-D2D-CAD-04:
+READ-ONLY FIRST.
+NO GIT WRITE CAPABILITY IN D2-D1, D2-D2 OR D2-D3.
+D2-D4 REMAINS OUT OF TRAJECTORY.
+
+D-V3.1-D2D-CAD-05:
+EXTENSIBLE STATE-A —
+MINIMAL CORE STATES WITH TIMED_OUT AND BLOCKED CONTRACTUALLY
+SUPPORTED WITHOUT ADOPTING THE FULL STATE-B MODEL.
+
+D-V3.1-D2D-CAD-06:
+INT-C — CONTRACT-FIRST HYBRID.
+FIXTURES FIRST, THEN ONE REAL READ-ONLY SANDBOXED WALKING SKELETON.
+
+D-V3.1-D2D-CAD-07:
+SANDBOX REQUIREMENTS MUST BE VALIDATED BEFORE ANY REAL CURSOR EXECUTION.
+CURSOR PRODUCT CAPABILITIES REMAIN UNVERIFIED UNTIL A DEDICATED CHECK.
+
+D-V3.1-D2D-CAD-08:
+SERVER-ONLY SECRET PROVIDER BOUNDARY.
+GITHUB READ-ONLY PERMISSIONS FIRST.
+NO SECRET STORAGE TECHNOLOGY SELECTED AT THIS STAGE.
+
+D-V3.1-D2D-CAD-09:
+STRUCTURED EXECUTION EVENTS + STRICT REDACTION.
+NO RUN-READY OR SLO CLAIM.
+
+D-V3.1-D2D-CAD-10:
+R-C DEFENCE IN DEPTH ADOPTED AS STRATEGY —
+BOUNDED D2-C CORRECTION AND D2-D BOUNDARY VALIDATION REQUIRE
+SEPARATE CYCLES AND SEPARATE GATES.
+
+D-V3.1-D2D-CAD-11:
+D2-D1 → D2-D2 → D2-D3.
+D2-D4 REMAINS OUT OF TRAJECTORY.
+
+D-V3.1-D2D-CAD-12:
+D3 UX EXPLORATION MAY START AFTER D2-D1 CONTRACT STABILITY.
+D3 UI DELIVERY AND STRONG RUNTIME VERDICT REQUIRE D2-D2/D2-D3 EVIDENCE.
+
+NEXT:
+GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2-D
+
+NO DELIVERY
+NO UI CODE
+NO CREATECYCLE
+NO GIT WRITE
+NO METHOD PROMOTION
+```
+
+Date/heure de la décision Morris : **2026-08-03 16:56 CEST (+0200)**
+
+### Table des décisions adoptées
+
+| ID | Choix adopté | Statut | Conséquence fonctionnelle | Gates restantes |
+|----|--------------|--------|---------------------------|-----------------|
+| D-V3.1-D2D-CAD-01 | Strict Minimal Foundation | DECIDED — ADOPTED BY MORRIS | Ports + validation runtime + états + fixtures ; walking skeleton réel différé à D2-D3 | Conception → architecture → Delivery D2-D1… |
+| D-V3.1-D2D-CAD-02 | Contracts before D3 UI Delivery ; D3 UX exploration possible après stabilité D2-D1 | DECIDED — ADOPTED BY MORRIS | UI Delivery D3 bloquée tant que contrats non stables ; UX exploratoire possible après D2-D1 | GO D3 UX / UI distincts |
+| D-V3.1-D2D-CAD-03 | Provider ports before direct SDK coupling ; reuse platform/harness reste hypothèse jusqu'à validation architecture | DECIDED — ADOPTED BY MORRIS | Couplage SDK direct interdit tant qu'architecture non validée ; réutilisation = hypothèse | Architecture D2-D |
+| D-V3.1-D2D-CAD-04 | Read-only first ; aucune capacité Git write en D2-D1/D2-D2/D2-D3 ; D2-D4 hors trajectoire | DECIDED — ADOPTED BY MORRIS | Aucune mutation Git dans la trajectoire D2-D actuelle | GO distinct futur pour writes |
+| D-V3.1-D2D-CAD-05 | Extensible STATE-A avec timed_out et blocked contractuellement supportés ; pas de STATE-B complet | DECIDED — ADOPTED BY MORRIS | Huit états fonctionnels max ; pas de created/queued/validating persistants | Arbitrage sémantique FD |
+| D-V3.1-D2D-CAD-06 | INT-C contract-first hybride | DECIDED — ADOPTED BY MORRIS | Fixtures d'abord, puis un walking skeleton read-only sandboxé | Delivery D2-D1 puis D2-D3 |
+| D-V3.1-D2D-CAD-07 | Sandbox requirements avant Cursor réel ; capacités produit Cursor UNVERIFIED jusqu'à vérification dédiée | DECIDED — ADOPTED BY MORRIS | Cursor réel interdit sans sandbox validée ; UNVERIFIED visible | Check Cursor dédié + D2-D2/D3 |
+| D-V3.1-D2D-CAD-08 | Secret boundary server-only ; GitHub read-only first ; aucune technologie de coffre sélectionnée | DECIDED — ADOPTED BY MORRIS | Secrets jamais côté client ; pas de choix de secret store | Architecture technique secrets |
+| D-V3.1-D2D-CAD-09 | Structured events + strict redaction ; aucun claim RUN READY/SLO | DECIDED — ADOPTED BY MORRIS | Observabilité fonctionnelle sans readiness | Conception événements FD |
+| D-V3.1-D2D-CAD-10 | R-C défense en profondeur ; correctif D2-C et validation frontière D2-D dans deux cycles et deux gates séparés | DECIDED — ADOPTED BY MORRIS | R-QA-D2C-01 reste OPEN ; deux travaux futurs distincts | GO correctif D2-C + GO D2-D1 |
+| D-V3.1-D2D-CAD-11 | D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire | DECIDED — ADOPTED BY MORRIS | Séquençage Delivery candidat ; pas de writes | Backlog après architectures |
+| D-V3.1-D2D-CAD-12 | UX exploratoire D3 possible après stabilité D2-D1 ; UI Delivery et verdict runtime fort après preuves D2-D2/D2-D3 | DECIDED — ADOPTED BY MORRIS | Trois niveaux de readiness D3 distincts | Critères FD-12 + preuves |
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
+`D2-D INTEGRATION FOUNDATION CADRAGE — ARBITRATED BY MORRIS —
+FUNCTIONAL DESIGN AUTHORIZED —
+NO ARCHITECTURE ADOPTED —
+NO BACKLOG CREATED —
+NO DELIVERY AUTHORIZED —
+NO UI —
+NO CREATECYCLE —
+NO PROJECT GIT WRITE —
+NO METHOD PROMOTION`
+
+## Prochaine décision candidate
+
+**Trace de consommation :**
+
+- GO Conception fonctionnelle SFIA Studio V3.1-D2-D **reçu et consommé** (Cycle 2) ;
+- **aucune** architecture autorisée ;
+- **aucune** Delivery autorisée ;
+- la prochaine décision dépend du decision pack fonctionnel du document 21 (`D-V3.1-D2D-FD-01…12`).

```

## Diff complet document 21

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/21-v3-1-d2-d-integration-foundation-functional-design.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/21-v3-1-d2-d-integration-foundation-functional-design.md
new file mode 100644
index 0000000..fa3e4b3
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/21-v3-1-d2-d-integration-foundation-functional-design.md
@@ -0,0 +1,903 @@
+# 21 — V3.1-D2-D Integration Foundation — Conception fonctionnelle
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| **Date** | 2026-08-03 17:11:11 CEST (+0200) |
+| **Cycle** | Cycle 2 — Conception fonctionnelle |
+| **Profil SFIA** | **Critical** |
+| **Typologie** | EVOL — documentation-only |
+| **Projet** | SFIA Studio V3.1-D2-D Integration Foundation |
+| **Branche** | `design/sfia-studio-v3-1-d2-d-integration-foundation-functional-design` |
+| **Base** | `main@004296ac9355ef9906584f5d86be6182a96dd2fd` |
+| **Document amont** | `20-v3-1-d2-d-integration-foundation-cadrage.md` (arbitrated) |
+| **CKC** | `method/.../pilots/02-conception-fonctionnelle.md` — candidate — aucune autorité d'exécution |
+| **Statut** | `D2-D FUNCTIONAL DESIGN COMPLETE LOCALLY — READY FOR MORRIS ARBITRATION — NO ARCHITECTURE OR DELIVERY AUTHORIZED` |
+| **Code / API / UI / architecture / backlog** | **non** |
+
+### GO Morris consommé
+
+```text
+GO ARBITRATION SFIA STUDIO V3.1-D2-D INTEGRATION FOUNDATION
+
+ADOPT:
+
+D-V3.1-D2D-CAD-01:
+STRICT MINIMAL FOUNDATION —
+PORTS + RUNTIME VALIDATION + EXECUTION STATES + CONTRACT FIXTURES,
+WITH REAL WALKING SKELETON DEFERRED TO D2-D3.
+
+D-V3.1-D2D-CAD-02:
+D2-D CONTRACTS BEFORE D3 UI DELIVERY.
+D3 UX EXPLORATION MAY START AFTER STABLE D2-D1 CONTRACTS.
+
+D-V3.1-D2D-CAD-03:
+PROVIDER PORTS BEFORE DIRECT SDK COUPLING.
+REUSE OF EXISTING PLATFORM/HARNESS COMPONENTS REMAINS AN
+IMPLEMENTATION HYPOTHESIS UNTIL ARCHITECTURE VALIDATION.
+
+D-V3.1-D2D-CAD-04:
+READ-ONLY FIRST.
+NO GIT WRITE CAPABILITY IN D2-D1, D2-D2 OR D2-D3.
+D2-D4 REMAINS OUT OF TRAJECTORY.
+
+D-V3.1-D2D-CAD-05:
+EXTENSIBLE STATE-A —
+MINIMAL CORE STATES WITH TIMED_OUT AND BLOCKED CONTRACTUALLY
+SUPPORTED WITHOUT ADOPTING THE FULL STATE-B MODEL.
+
+D-V3.1-D2D-CAD-06:
+INT-C — CONTRACT-FIRST HYBRID.
+FIXTURES FIRST, THEN ONE REAL READ-ONLY SANDBOXED WALKING SKELETON.
+
+D-V3.1-D2D-CAD-07:
+SANDBOX REQUIREMENTS MUST BE VALIDATED BEFORE ANY REAL CURSOR EXECUTION.
+CURSOR PRODUCT CAPABILITIES REMAIN UNVERIFIED UNTIL A DEDICATED CHECK.
+
+D-V3.1-D2D-CAD-08:
+SERVER-ONLY SECRET PROVIDER BOUNDARY.
+GITHUB READ-ONLY PERMISSIONS FIRST.
+NO SECRET STORAGE TECHNOLOGY SELECTED AT THIS STAGE.
+
+D-V3.1-D2D-CAD-09:
+STRUCTURED EXECUTION EVENTS + STRICT REDACTION.
+NO RUN-READY OR SLO CLAIM.
+
+D-V3.1-D2D-CAD-10:
+R-C DEFENCE IN DEPTH ADOPTED AS STRATEGY —
+BOUNDED D2-C CORRECTION AND D2-D BOUNDARY VALIDATION REQUIRE
+SEPARATE CYCLES AND SEPARATE GATES.
+
+D-V3.1-D2D-CAD-11:
+D2-D1 → D2-D2 → D2-D3.
+D2-D4 REMAINS OUT OF TRAJECTORY.
+
+D-V3.1-D2D-CAD-12:
+D3 UX EXPLORATION MAY START AFTER D2-D1 CONTRACT STABILITY.
+D3 UI DELIVERY AND STRONG RUNTIME VERDICT REQUIRE D2-D2/D2-D3 EVIDENCE.
+
+NEXT:
+GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2-D
+
+NO DELIVERY
+NO UI CODE
+NO CREATECYCLE
+NO GIT WRITE
+NO METHOD PROMOTION
+```
+
+Date/heure décision Morris cadrage : 2026-08-03 16:56 CEST (+0200).
+Le présent cycle consomme la suite **GO CONCEPTION FONCTIONNELLE**.
+
+**NO GIT WRITE :** aucun index/commit/push/PR/merge projet ; documents 20/21 non trackés ; push L3 handoff distinct.
+
+### Marqueurs épistémiques
+
+| Marqueur | Usage |
+|----------|-------|
+| **Décision Morris adoptée** | D-CAD-01…12 |
+| **Observation repo** | Fait Git vérifiable |
+| **Règle fonctionnelle candidate** | Comportement proposé, non adopté |
+| **Hypothèse** | Inférence non prouvée |
+| **Inconnue** | Lacune ouverte |
+| **Réserve** | OPEN transportée |
+| **Décision fonctionnelle candidate** | FD-01…12 — NOT DECIDED |
+
+---
+
+## B. Décisions Morris héritées
+
+Toutes : **DECIDED — ADOPTED BY MORRIS** (2026-08-03 16:56 CEST). Conséquences fonctionnelles — **pas** techniques.
+
+| ID | Conséquence fonctionnelle |
+|----|---------------------------|
+| CAD-01 | Socle minimal : ports + validation + états + fixtures ; walking skeleton réel en D2-D3 |
+| CAD-02 | Contrats avant UI Delivery D3 ; UX exploratoire possible après D2-D1 stable |
+| CAD-03 | Ports fournisseurs avant couplage SDK ; réutilisation platform/harness = hypothèse jusqu'à architecture |
+| CAD-04 | Read-only first ; aucune Git write en D2-D1/2/3 ; D2-D4 hors trajectoire |
+| CAD-05 | Extensible STATE-A ; `timed_out` et `blocked` supportés ; pas de STATE-B complet |
+| CAD-06 | INT-C : fixtures d'abord, puis un walking skeleton read-only sandboxé |
+| CAD-07 | Sandbox validée avant Cursor réel ; capacités Cursor **UNVERIFIED** jusqu'à check dédié |
+| CAD-08 | Secrets server-only ; GitHub read-only first ; aucun secret store choisi |
+| CAD-09 | Événements structurés + redaction stricte ; aucun RUN READY / SLO |
+| CAD-10 | R-C : correctif D2-C et validation frontière D2-D = deux cycles / deux gates |
+| CAD-11 | Séquence D2-D1 → D2-D2 → D2-D3 ; D2-D4 hors trajectoire |
+| CAD-12 | UX exploratoire après D2-D1 ; UI Delivery + verdict runtime fort après D2-D2/D2-D3 |
+
+**Observation repo :** briques OpenAI (`platform/ai`), GitHub read (`ops1/tools/githubReadAdapter`, `platform/tools`), Cursor/sandbox harness existent en silos — **pas** de package D2-D OA unifié (**Observation** cadrage 20).
+
+---
+
+## C. Finalité fonctionnelle
+
+**Problème fonctionnel :** permettre à SFIA Studio de **préparer, suivre et restituer** une exécution externe contrôlée, **read-only** et **observable**, sans exposer les détails fournisseurs à D3 et sans permettre de mutation Git.
+
+**Valeur attendue :**
+
+- vérité sur la source (`fixture` / `sandbox-real` / `real`) ;
+- comportement testable via fixtures contractuelles ;
+- erreurs compréhensibles et normalisées ;
+- contrôle Morris pour décisions structurantes ;
+- fixtures et réel compatibles (même forme) ;
+- progression vers un walking skeleton read-only (D2-D3).
+
+Ce n'est **pas** : brancher tous les SDK, ouvrir CreateCycle, ou livrer une UI.
+
+---
+
+## D. Périmètre fonctionnel
+
+Comportements inclus (cible fonctionnelle) :
+
+1. Préparation d'une **intention d'exécution**
+2. Validation fonctionnelle des entrées
+3. Détermination de la **capacité fournisseur** disponible
+4. Sélection explicite `fixture` / `sandbox-real` / `real`
+5. Lecture Git distante **read-only**
+6. Exécution AI **bornée**
+7. Préparation d'un **contrat d'exécution Cursor**
+8. Exécution Cursor **read-only sandboxée** (cible ; capacité produit UNVERIFIED)
+9. Suivi des états
+10. Attente humaine
+11. Cancellation
+12. Timeout
+13. Blocked
+14. Normalisation des résultats
+15. Collecte des preuves
+16. Disclosures
+17. Usage/coût **si** fourni et validé
+18. Restitution pour D3 futur
+
+---
+
+## E. Hors périmètre fonctionnel
+
+- CreateCycle
+- Mutations Git / écriture GitHub
+- Édition de fichiers / commande arbitraire
+- Auto-validation Morris
+- Production deploy / persistance complète / IAM complet / dashboard
+- UI détaillée / Figma
+- Architecture (fonctionnelle ou technique)
+- SDK / backlog / user stories
+- Levée automatique des réserves
+
+---
+
+## F. Acteurs et rôles
+
+### 1. Morris / décideur humain
+
+| Aspect | Contenu |
+|--------|---------|
+| Intention | Arbitrer gates structurantes ; autoriser progression |
+| Responsabilité | Décisions GO ; acceptation risques |
+| Visible | Preuves, états, disclosures, erreurs redacted |
+| Autorisé | Décider, annuler gate, refuser progression |
+| Interdit | Contournement par validation technique automatique |
+| Confiance | Haute (autorité) |
+
+### 2. Utilisateur opérateur futur
+
+| Aspect | Contenu |
+|--------|---------|
+| Intention | Lancer / observer une exécution bornée |
+| Visible | États, disclosures, erreurs utilisateur, usage si fourni |
+| Autorisé | Intention, cancel si permis, lecture résultats |
+| Interdit | Secrets, mutations, commandes arbitraires, forcer réel sans gate |
+| Confiance | Non fiable (navigateur) |
+
+### 3. SFIA Studio
+
+| Aspect | Contenu |
+|--------|---------|
+| Intention | Orchestrer validation, ports, états, événements, restitution |
+| Autorisé | Valider, appeler ports serveur, publier événements redacted |
+| Interdit | Exposer secrets client ; muter Git ; inventer succès |
+| Confiance | Semi-confiant (serveur) |
+
+### 4. D2-C Qualification Core
+
+| Aspect | Contenu |
+|--------|---------|
+| Intention | Qualifier cycle via CKC en read-only |
+| Observation | Package `oa/cycle` intégré ; Result Success/Failure |
+| Interdit | Mutation CreateCycle |
+| Réserve | R-QA-D2C-01 OPEN |
+
+### 5. Provider AI fonctionnel
+
+Besoin : réponse bornée + usage éventuel. Secrets server-only. Pas de détail SDK.
+
+### 6. Provider Git fonctionnel
+
+Besoin : Git Truth distant read-only (repo/ref/commit/branche/PR/CI). Write **interdit**.
+
+### 7. Worker Cursor fonctionnel
+
+Besoin : exécution contrôlée sandbox read-only. Capacités produit **UNVERIFIED** (CAD-07).
+
+### 8. Secret Source fonctionnelle
+
+Fournit credentials **serveur only** ; identité sans valeur ; jamais client.
+
+### 9. Event Sink fonctionnel
+
+Reçoit événements structurés redacted ; pas de modèle technique d'event bus décidé.
+
+### 10. Sandbox fonctionnelle
+
+Isole workspace ; enforce read-only ; timeout/quota ; chemins protégés ; preuve de conformité avant Cursor réel.
+
+---
+
+## G. Objets fonctionnels
+
+Noms **candidats** jusqu'à arbitrage FD-01. Pas de signatures TypeScript.
+
+### Execution Intent
+
+- Finalité : déclarer ce que l'opérateur veut exécuter
+- Attributs min. : objectif borné, providers demandés, source déclarée, limites
+- Propriétaire : opérateur / Studio
+- Visibilité D3 : résumé non sensible
+- Intégrité : source obligatoire ; mutation demandée → rejet
+
+### Execution Context
+
+- Finalité : lier projet, refs, correlationId, permissions
+- Sensible : refs repo ; pas de secrets
+- Visibilité D3 : partiel
+
+### Provider Capability
+
+- Finalité : dire si un provider est `available` / `unavailable` / `unverified`
+- Cursor peut être `unverified` → blocked ou gate
+
+### Validation Outcome
+
+- Finalité : accept / reject avant exploitation
+- Pas un état persistant STATE-B
+
+### Execution Run
+
+- Finalité : instance engagée d'une intention
+- Nouveau run requis après failed/timed_out/cancelled/succeeded pour rejouer
+- Visibilité D3 : oui (état, source, preuves)
+
+### Execution State
+
+- Un des huit états §H
+
+### External Result
+
+- Sortie provider normalisée ; complète ou partielle
+
+### Execution Evidence
+
+- Preuves non sensibles ; timestamps validés ; chemins sandbox
+
+### Source Disclosure
+
+- `fixture` \| `sandbox-real` \| `real` + provider + limites
+
+### Human Decision Gate
+
+- Décision Morris structurante ; pas substituable par validation technique
+
+### Usage Summary
+
+- Tokens/usage/coût **si** fournis et sourcés ; sinon `unavailable`
+
+### Normalized Failure
+
+- Famille d'erreur + message utilisateur + preuve minimale + données masquées
+
+---
+
+## H. Modèle d'états hérité
+
+**Décision Morris adoptée CAD-05 — Extensible STATE-A.**
+
+États fonctionnels **uniquement** :
+
+1. `idle`
+2. `running`
+3. `awaiting_human`
+4. `succeeded`
+5. `failed`
+6. `cancelled`
+7. `timed_out`
+8. `blocked`
+
+**Interdit d'ajouter** comme états persistants : `created`, `queued`, `validating`, ou autres STATE-B.
+
+Une validation est une **phase/résultat** (`Validation Outcome`), pas un état supplémentaire.
+
+---
+
+## I. Sémantique des états
+
+**Règles fonctionnelles candidates** (soumises FD-02) :
+
+| État | Définition |
+|------|------------|
+| `idle` | Aucune exécution active ; intention modifiable tant qu'aucun run n'est engagé |
+| `running` | Au moins une opération externe contrôlée est active |
+| `awaiting_human` | Suspendu sur décision humaine explicite ; aucune progression automatique structurante |
+| `succeeded` | Toutes les sorties **obligatoires** reçues, validées et normalisées |
+| `failed` | Opération engagée a échoué ; aucun résultat exploitable **complet** |
+| `cancelled` | Arrêt explicite accepté avant terminaison |
+| `timed_out` | Expiration d'une limite temporelle bornée |
+| `blocked` | Pas le droit/capacité de démarrer ou continuer (validation, permission, provider, sandbox, gate Morris) |
+
+---
+
+## J. Règles de transition
+
+**Transitions candidates autorisées :**
+
+| De | Vers | Condition |
+|----|------|-----------|
+| idle | running | Intent validé ; source déclarée ; permissions OK ; pas de gate bloquante |
+| idle | blocked | Validation/permission/capability/sandbox/gate échoue avant engagement |
+| running | awaiting_human | Gate humaine structurante requise |
+| running | succeeded | Sorties obligatoires validées |
+| running | failed | Échec opération engagée |
+| running | timed_out | Limite temporelle atteinte |
+| running | cancelled | Cancel accepté |
+| awaiting_human | running | Décision humaine positive enregistrée |
+| awaiting_human | cancelled | Annulation humaine / cancel accepté |
+| awaiting_human | blocked | Décision négative ou précondition devenue invalide |
+
+**Transitions interdites :**
+
+- `failed` → `succeeded` sans **nouveau run**
+- `timed_out` → `succeeded` sans nouveau run
+- `blocked` → `running` sans **nouvelle validation**
+- `succeeded` → `running` sur le **même** run
+- progression automatique depuis `awaiting_human` pour décision structurante
+
+**Nouveau run (règle candidate) :** nouvel `Execution Run` avec nouvel identifiant fonctionnel / correlationId de run ; ne réécrit pas l'historique du run précédent.
+
+---
+
+## K. Parcours nominal fixture
+
+1. Contexte projet existant
+2. Intention d'exécution
+3. Validation → accept
+4. Source **`fixture`** déclarée et visible
+5. Qualification D2-C (core read-only)
+6. Résultats Git/AI/Cursor **simulés** via **mêmes contrats** que réel
+7. Événements structurés
+8. `succeeded`
+9. Restitution future D3 avec disclosure fixture
+
+Exigences : aucune règle métier parallèle ; aucun secret ; déterminisme ; source toujours visible.
+
+---
+
+## L. Parcours nominal sandbox-real read-only
+
+**FUNCTIONAL TARGET — IMPLEMENTATION CAPABILITY UNVERIFIED**
+
+1. Contexte projet
+2. Validation
+3. Vérification permissions read-only
+4. Sandbox conforme (CAD-07)
+5. Lecture GitHub bornée
+6. Appel AI borné candidat
+7. Préparation contrat Cursor
+8. Exécution Cursor read-only
+9. Collecte états
+10. Validation sorties
+11. Résultat normalisé
+12. Preuves
+13. Restitution + disclosure `sandbox-real` ou `real`
+
+Ne pas affirmer la disponibilité technique aujourd'hui. Cursor produit **UNVERIFIED**.
+
+---
+
+## M. Parcours d'attente humaine
+
+| Élément | Règle candidate |
+|---------|-----------------|
+| Déclencheurs | Gate Morris structurante ; permission sensible ; passage fixture→real ; Cursor réel ; risque données |
+| Présenté | État, source, provider, preuves redacted, question de décision |
+| Décision | Approve / Reject / Cancel (libellés candidats) |
+| Autorisé | Enregistrer décision ; reprendre ou bloquer |
+| Expiration | Optionnelle → `timed_out` ou `blocked` selon règle adoptée (FD-06) |
+| Auto | **Interdit** pour décision structurante |
+| Trace | `human_decision_recorded` |
+
+---
+
+## N. Parcours cancellation
+
+- Qui : opérateur (si permis) ou Morris
+- Quand : depuis `running` ou `awaiting_human`
+- Résultat : état terminal `cancelled` ; **jamais** succès
+- Provider non interruptible immédiatement : état `cancelled` dès acceptation locale ; résultats tardifs **non** interprétés comme succès ; événement d'arrivée tardive redacted possible
+- Preuve : qui / quand / run id
+
+---
+
+## O. Parcours timeout
+
+- Limites **bornées** (valeurs numériques = architecture future)
+- Timeout **global** vs **opération fournisseur** : concepts fonctionnels distincts
+- État : `timed_out`
+- Retry : uniquement via **nouveau run** ; **aucun** retry infini
+- Preuve : horodatage début/fin validés
+
+---
+
+## P. Parcours blocked
+
+Déclencheurs : entrée invalide ; provider indisponible ; auth absente ; permission insuffisante ; sandbox non conforme ; chemin protégé ; mutation demandée ; gate Morris manquante ; Cursor UNVERIFIED sans gate ; secret indisponible ; règle RGPD non satisfaite.
+
+| Élément | Contenu candidat |
+|---------|------------------|
+| Message utilisateur | Cause compréhensible sans secret |
+| Code fonctionnel | Famille §S |
+| Preuve minimale | Motif + correlationId + source |
+| Déblocage | Correction + **nouvelle validation** ; éventuellement nouvelle gate |
+| État | `blocked` (avant/sans engagement) ; si déjà running, préférer `failed` selon FD-04 |
+
+---
+
+## Q. Intégrations fonctionnelles
+
+Sans endpoint, SDK, HTTP, classe, route, Server Action, package, protocole.
+
+### AI
+
+| Dimension | Contenu |
+|-----------|---------|
+| Besoin | Analyse / sortie structurée bornée |
+| Demande | Intent + contexte minimisé |
+| Réponse | Texte/structure + usage optionnel |
+| Partiel | Marqué partiel ; ≠ succès |
+| Indispo | `provider_unavailable` / blocked ou failed |
+| Permission | Secret server-only |
+| Timeout / cancel | Supportés fonctionnellement |
+| Disclosure | provider + source |
+
+### GitHub
+
+| Dimension | Contenu |
+|-----------|---------|
+| Besoin | Git Truth read-only |
+| Demande | repo/ref/PR/CI allowlistés |
+| Réponse | Métadonnées |
+| Write | **Interdit** |
+| Permission insuffisante | blocked/failed + `authorization` |
+| Disclosure | read-only + absence mutation |
+
+### Cursor
+
+| Dimension | Contenu |
+|-----------|---------|
+| Besoin | Exécution sandbox read-only |
+| Contrat | Borné ; pas de commande arbitraire navigateur |
+| Capability | Peut être UNVERIFIED → blocked/gate |
+| Write | Interdit |
+| Sandbox | Obligatoire avant réel |
+
+---
+
+## R. Validation runtime fonctionnelle
+
+**Règles observables candidates :**
+
+1. Toute entrée externe validée **avant** exploitation
+2. Toute sortie provider validée **avant** succès
+3. Champ obligatoire absent → `blocked` (avant) ou `failed` (pendant) selon phase
+4. Valeur inattendue → résultat normalisé (pas d'exception brute D3)
+5. Aucun accès métadonnées avant validation (lien R-QA-D2C-01 / R-QA-REV-01)
+6. Aucun `consumed=true` après erreur
+7. `correlationId` obligatoire
+8. Timestamp invalide → non publié comme événement valide
+9. Payload size bornée
+10. Résultat partiel ≠ succès
+11. Redaction erreurs
+12. Aucune correction silencieuse d'entrée invalide
+
+Distinguer : **rejet avant** · **échec pendant** · **sortie invalide après**.
+
+---
+
+## S. Catalogue fonctionnel des erreurs
+
+Familles **candidates** (non codes techniques définitifs) :
+
+| Famille | Moment | État candidat | Retry | Humain | Masquer |
+|---------|--------|---------------|-------|--------|---------|
+| validation | avant | blocked | oui après correction | non | détails internes |
+| authentication | avant/pendant | blocked/failed | après credential | parfois | secrets |
+| authorization | avant/pendant | blocked/failed | après droits | parfois | tokens |
+| provider_unavailable | pendant | failed/blocked | nouveau run | non | — |
+| rate_limited | pendant | failed/blocked | différé borné | non | — |
+| timed_out | pendant | timed_out | nouveau run | non | — |
+| cancelled | pendant | cancelled | nouveau run | non | — |
+| sandbox_blocked | avant/pendant | blocked | après conformité | parfois | chemins sensibles |
+| protected_path | pendant | blocked/failed | non si interdit | oui | chemins |
+| mutation_forbidden | avant | blocked | non (changer intent) | non | — |
+| human_gate_required | avant/pendant | awaiting_human/blocked | après décision | **oui** | — |
+| invalid_provider_result | après | failed | nouveau run | non | payload brut |
+| internal_normalized_failure | pendant | failed | limité | parfois | stack |
+
+Message utilisateur : compréhensible, sans secret, sans prompt complet.
+
+---
+
+## T. Permissions et visibilité
+
+- Navigateur : **sans secret**
+- Serveur : seule frontière credentials
+- GitHub / Cursor : **read-only**
+- Aucune mutation
+- Allowlist repo ; chemins protégés
+- Morris vs opérateur : Morris seul pour gates structurantes
+- D3 : états, disclosures, erreurs redacted, preuves non sensibles
+- Secrets : **jamais** visibles
+- Erreurs : redacted
+
+---
+
+## U. Disclosures fonctionnels
+
+Toute restitution indique :
+
+- source : `fixture` \| `sandbox-real` \| `real`
+- provider
+- résultat complet / partiel
+- timestamp de preuve (ISO validé)
+- correlationId / identifiant fonctionnel
+- permission read-only
+- absence de mutation
+- limites connues
+- capacité UNVERIFIED le cas échéant
+
+**Jamais** présenter une fixture comme résultat réel.
+
+---
+
+## V. Événements fonctionnels
+
+Noms **candidats** (FD-10). Pas d'event bus technique.
+
+| Événement | Déclencheur | Avant → Après | Données min. | Interdit |
+|-----------|-------------|---------------|--------------|----------|
+| intent_validated | validation OK | idle→idle ou vers running/blocked | correlationId, source | secrets |
+| execution_started | run engagé | idle→running | run id, providers | prompts complets |
+| execution_blocked | blocage | →blocked | famille, motif | secrets |
+| external_operation_started | op provider | running | provider, op | payloads bruts |
+| external_operation_completed | fin op | running | statut, usage? | réponses complètes |
+| awaiting_human | gate | running→awaiting_human | question | secrets |
+| human_decision_recorded | décision | awaiting_human→… | décision | — |
+| execution_cancelled | cancel | →cancelled | qui/quand | — |
+| execution_timed_out | timeout | →timed_out | bornes | — |
+| execution_failed | échec | →failed | famille | stack/secrets |
+| execution_succeeded | succès | →succeeded | preuve ids | données brutes |
+
+Tous : redaction ; correlationId ; source fixture/sandbox-real/real.
+
+---
+
+## W. Usage et FinOps fonctionnels
+
+- Usage présenté **uniquement** s'il est fourni et validé
+- Coût uniquement si calculable **et** sourcé
+- Sinon : clairement `unavailable`
+- **Aucun** prix inventé
+- Quotas / rate limit comme comportements
+- Distinction estimation / mesure
+- Aucune décision de facturation
+
+---
+
+## X. Fixtures contractuelles
+
+Règles : parité forme/comportement ; version ; déterminisme ; provenance ; invalidation si contrat change ; données synthétiques ; scénarios +/- ; aucune règle métier parallèle ; compatibles transitions ; rejouables.
+
+Scénarios minimaux : succès ; validation rejetée ; auth refusée ; permission insuffisante ; rate limit ; timeout ; cancellation ; provider indisponible ; résultat partiel ; sortie invalide ; sandbox bloqué ; mutation interdite ; gate Morris requise.
+
+---
+
+## Y. Défense en profondeur R-QA-D2C-01
+
+**Décision Morris adoptée CAD-10 — R-C.**
+
+### Travail futur 1 — Correctif D2-C borné
+
+- Cycle séparé ; gate séparée ; QA séparée
+- **Aucune** levée de réserve anticipée
+
+### Travail futur 2 — Validation frontière D2-D
+
+- Exigence fonctionnelle du présent design
+- Future Delivery D2-D1
+- **Ne remplace pas** le correctif D2-C
+
+### Critères fonctionnels communs
+
+- `null`/`undefined` rejetés **avant** lecture métadonnées
+- Échec normalisé ; aucun succès ; aucun `consumed=true`
+- Événement valide **ou** absence d'événement explicitement justifiée
+- Aucune exception brute exposée
+
+**R-QA-D2C-01 :** `OPEN — NOT LIFTED`
+
+**Réserves conservées :** R-QA-REV-01 OPEN NOT LIFTED ; R-QA-REV-02 OPEN NOT LIFTED.
+
+---
+
+## Z. Projection fonctionnelle pour D3
+
+D3 pourra consommer fonctionnellement (sans UI) :
+
+- état courant ; progression ; source ; provider
+- résultat ; erreur normalisée ; preuve
+- attente humaine ; cancel possible ; timeout ; blocked reason
+- Git Truth read-only ; qualification D2-C ; preuve CKC
+- usage éventuel ; disclosures ; réserves ouvertes
+
+Ne pas dessiner UI / composants / écrans.
+
+---
+
+## AA. Critères d'entrée D3
+
+Applique **CAD-12**.
+
+### UX exploration readiness (candidat)
+
+- Vocabulaire fonctionnel stable
+- États / erreurs / disclosures définis
+- DTO fonctionnels suffisamment bornés
+- Fixtures contractuelles définies
+- **Après** stabilité D2-D1
+
+### UI Delivery readiness
+
+Interdite tant que : D2-D1 non validé ; frontières non testées ; règles d'états non adoptées ; R-QA-D2C-01 non traitée selon gates ; preuves D2-D2/D2-D3 insuffisantes.
+
+### Strong runtime verdict readiness
+
+Exige preuves D2-D2/D2-D3 (sandbox + walking skeleton read-only) + disclosures honnêtes.
+
+---
+
+## AB. Critères d'acceptation fonctionnels
+
+| ID | Given | When | Then |
+|----|-------|------|------|
+| CA-01 | Intent valide + source fixture | Exécution lancée | `running` puis `succeeded` ; disclosure fixture |
+| CA-02 | Intent invalide | Soumission | `blocked` ; pas d'op externe ; erreur validation |
+| CA-03 | Source fixture déclarée | Restitution | Disclosure ≠ real |
+| CA-04 | Source real déclarée sans preuves | Tentative | Gate ou blocked ; pas de faux réel |
+| CA-05 | Source inconnue | Soumission | `blocked` |
+| CA-06 | Run read-only | Toute op | Aucune mutation Git |
+| CA-07 | Mutation demandée | Validation | `blocked` + `mutation_forbidden` |
+| CA-08 | Permission GitHub insuffisante | Lecture | blocked/failed + `authorization` |
+| CA-09 | Cursor UNVERIFIED | Cursor réel demandé | blocked ou awaiting_human ; disclosure UNVERIFIED |
+| CA-10 | Sandbox non conforme | Cursor réel | `blocked` + `sandbox_blocked` |
+| CA-11 | AI timeout | Op AI | `timed_out` ; pas succès |
+| CA-12 | Provider down | Op | `provider_unavailable` normalisé |
+| CA-13 | Résultat partiel | Fin op | ≠ succeeded ; marquage partiel |
+| CA-14 | Sortie invalide | Validation sortie | `failed` + `invalid_provider_result` |
+| CA-15 | Cancel accepté | Pendant running | `cancelled` ; pas succès |
+| CA-16 | Gate Morris | Besoin décision | `awaiting_human` ; pas d'auto-progress |
+| CA-17 | Gate absente alors requise | Progression | `blocked` + `human_gate_required` |
+| CA-18 | Sorties obligatoires OK | Fin | `succeeded` + preuves |
+| CA-19 | Request null/undefined | Frontière | Rejet avant métadonnées ; pas consumed ; R-QA-D2C-01 non levée |
+| CA-20 | Erreur | Restitution | Redaction ; pas de clé/prompt complet |
+| CA-21 | Usage absent | Restitution | `unavailable` ; pas de prix inventé |
+| CA-22 | D3 consomme run | Affichage futur | Disclosure source + read-only + état |
+
+Tous indépendants d'un SDK particulier.
+
+---
+
+## AC. Invariants fonctionnels
+
+1. Aucun succès sans validation des sorties
+2. Aucune mutation Git
+3. Aucun secret côté client
+4. Aucune progression structurante sans Morris
+5. Aucune fixture présentée comme réelle
+6. Aucun résultat partiel présenté comme complet
+7. Aucun retry infini
+8. Aucun événement contenant clé ou prompt complet par défaut
+9. Aucune dépendance D3 directe vers un fournisseur
+10. Aucun CreateCycle
+11. Aucun `consumed=true` après échec
+12. Aucune levée de réserve implicite
+
+---
+
+## AD. Questions ouvertes
+
+- Capacités produit Cursor réelles
+- Mécanisme auth GitHub
+- Secret store
+- Capacités OpenAI exactes nécessaires
+- Rétention des événements
+- Persistance des runs
+- Traitement multi-instance
+- Données personnelles/confidentielles admissibles
+- Granularité des résultats partiels
+- Capacité réelle de cancellation fournisseur
+
+Ne pas résoudre techniquement ici.
+
+---
+
+## AE. Risques fonctionnels
+
+| ID | Risque | P | I | Mitigation fonctionnelle | Décision | Cycle |
+|----|--------|---|---|--------------------------|----------|-------|
+| RF-01 | Double runtime VS / oa | H | H | Frontière explicite ; pas de domaine parallèle | Archi | Archi fct |
+| RF-02 | Fuite provider vers D3 | M | H | Ports + disclosures ; pas de SDK dans D3 | FD-11 | FD/Archi |
+| RF-03 | État trop pauvre | M | M | Extensible STATE-A | FD-02 | FD |
+| RF-04 | État trop riche | M | M | Interdire STATE-B | CAD-05 | — |
+| RF-05 | Fixtures divergentes | M | H | Parité contractuelle | FD-08/X | D2-D1 |
+| RF-06 | Erreurs non comparables | M | M | Familles §S | FD-09 | FD |
+| RF-07 | Disclosure mensonger | M | H | Invariant fixture≠real | FD-08 | D2-D1 |
+| RF-08 | Décision humaine contournée | M | H | awaiting_human obligatoire | FD-06 | D3 |
+| RF-09 | Mutation accidentelle | M | H | mutation_forbidden + read-only | CAD-04 | Toujours |
+| RF-10 | Logs sensibles | M | H | Redaction événements | FD-10 | D2-D2 |
+| RF-11 | Coût invisible | M | M | Usage unavailable explicite | W | D2-D2 |
+| RF-12 | Cancel impossible provider | M | M | Cancel local + late result rules | FD-07 | D2-D2 |
+| RF-13 | Résultats tardifs | M | M | Jamais succès après cancel/timeout | FD-07 | D2-D2 |
+| RF-14 | Persistance non durable | H | M | Disclosures honesty | Z | D3 |
+| RF-15 | Réserve D2-C | H | H | R-C deux gates | CAD-10 | Correctif+D2-D1 |
+
+---
+
+## AF. Decision pack fonctionnel Morris
+
+Toutes : **NOT DECIDED — MORRIS ARBITRATION REQUIRED**
+
+### D-V3.1-D2D-FD-01 — Vocabulaire fonctionnel canonique
+
+- **Question :** Adopter les objets §G comme vocabulaire canonique ?
+- **Options :** adopter tel quel · renommer · réduire
+- **Reco candidate :** adopter les 12 objets comme candidats canoniques
+- **Gate :** arbitrage puis architecture fonctionnelle
+
+### D-V3.1-D2D-FD-02 — Définition et sémantique des huit états
+
+- **Options :** sémantique §I · ajustements mineurs · ajouter états (interdit CAD-05)
+- **Reco candidate :** adopter sémantique §I
+
+### D-V3.1-D2D-FD-03 — Règles de transition et nouveau run
+
+- **Reco candidate :** transitions §J + nouveau run après terminaux
+
+### D-V3.1-D2D-FD-04 — blocked vs failed
+
+- **Options :** blocked seulement avant engagement · blocked aussi pendant · mapping §P
+- **Reco candidate :** `blocked` avant/sans engagement ou incapacité continue sans op fatale ; `failed` si op engagée a échoué
+
+### D-V3.1-D2D-FD-05 — Résultat complet vs partiel
+
+- **Reco candidate :** partiel jamais `succeeded` ; marquage obligatoire
+
+### D-V3.1-D2D-FD-06 — Waiting human et décisions Morris
+
+- **Reco candidate :** gates structurantes → `awaiting_human` ; pas d'auto ; expiration candidate → timed_out/blocked à trancher
+
+### D-V3.1-D2D-FD-07 — Cancellation et résultats tardifs
+
+- **Reco candidate :** cancel local immédiat ; late results non-succès ; événement optionnel redacted
+
+### D-V3.1-D2D-FD-08 — Disclosures fixture / sandbox-real / real
+
+- **Reco candidate :** trois valeurs obligatoires ; fixture ≠ real invariant
+
+### D-V3.1-D2D-FD-09 — Familles d'erreurs normalisées
+
+- **Reco candidate :** catalogue §S comme familles canoniques candidates
+
+### D-V3.1-D2D-FD-10 — Événements fonctionnels et redaction
+
+- **Reco candidate :** événements §V + interdits secrets/prompts/réponses complets
+
+### D-V3.1-D2D-FD-11 — Projection fonctionnelle D3
+
+- **Reco candidate :** projection §Z sans UI ; D3 ne dépend pas d'un provider direct
+
+### D-V3.1-D2D-FD-12 — Critères d'entrée UX / UI Delivery / runtime verdict
+
+- **Reco candidate :** trois readiness §AA alignés CAD-12
+
+Pour chaque décision : impacts sur D3 et Delivery ; dette si reportée ; haute réversibilité tant qu'architecture non figée ; dépendances CAD adoptées ; gate suivante = GO Architecture fonctionnelle **après** arbitrage.
+
+---
+
+## AG. Trajectoire candidate
+
+Après arbitrage fonctionnel **seulement** :
+
+1. Architecture fonctionnelle D2-D
+2. Architecture technique D2-D
+3. Backlog D2-D1 / D2-D2 / D2-D3
+4. Cycles Delivery distincts
+5. UX D3 exploratoire possible selon critères adoptés
+
+**Aucune** transition automatique. Aucun GO Architecture technique / Backlog / Delivery / D3 immédiatement consommable.
+
+---
+
+## AH. Anti-claims
+
+Interdit :
+
+- functional design adopted
+- architecture adopted
+- backlog ready
+- ready for Delivery
+- providers integrated
+- Cursor verified
+- secrets secure / sandbox secure
+- RUN READY
+- UI ready / D3 opened
+- CreateCycle enabled / Git write enabled
+- reserve lifted
+- method promoted
+
+---
+
+## AI. Verdict
+
+```text
+D2-D FUNCTIONAL DESIGN COMPLETE LOCALLY —
+READY FOR MORRIS ARBITRATION —
+ADOPTED CADRAGE DECISIONS APPLIED —
+FUNCTIONAL ROLES / FLOWS / OBJECTS / STATES / RULES DOCUMENTED —
+EXCEPTIONS AND ACCEPTANCE CRITERIA DOCUMENTED —
+D3 FUNCTIONAL PROJECTION AND ENTRY CRITERIA DOCUMENTED —
+R-QA-D2C-01 DEFENCE-IN-DEPTH FUNCTIONALLY SPECIFIED —
+NO ARCHITECTURE ADOPTED —
+NO BACKLOG CREATED —
+NO DELIVERY AUTHORIZED —
+NO UI CODE —
+NO FIGMA —
+NO CREATECYCLE —
+NO PROJECT GIT WRITE —
+NO METHOD PROMOTION
+```
+
+### Prochaine gate candidate
+
+```text
+GO ARBITRATION SFIA STUDIO V3.1-D2-D FUNCTIONAL DESIGN
+APPLY D-V3.1-D2D-FD-01…12
+```
+
+Après arbitrage seulement : `GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2-D`.

```

## Synthèse fonctionnelle (non substitut au document 21)

### Rôles
Morris, opérateur futur, SFIA Studio, D2-C Core, Provider AI, Provider Git, Worker Cursor, Secret Source, Event Sink, Sandbox — intentions/autorisations/interdits documentés.

### Objets
Execution Intent/Context/Run/State, Provider Capability, Validation Outcome, External Result, Evidence, Source Disclosure, Human Decision Gate, Usage Summary, Normalized Failure — candidats FD-01.

### Parcours
Fixture nominal ; sandbox-real read-only (FUNCTIONAL TARGET — UNVERIFIED) ; awaiting_human ; cancellation ; timeout ; blocked.

### États
Extensible STATE-A : idle, running, awaiting_human, succeeded, failed, cancelled, timed_out, blocked. Pas de STATE-B.

### Transitions / erreurs / permissions / disclosures / événements / fixtures
Documentés §J, §S, §T, §U, §V, §X.

### R-QA-D2C-01
R-C adoptée ; deux travaux futurs séparés ; réserve **OPEN — NOT LIFTED** ; REV-01/02 conservées.

### D3
Projection §Z ; readiness UX / UI Delivery / strong runtime §AA ; CAD-12 appliqué.

### Critères Given/When/Then
CA-01…CA-22 §AB.

### Invariants / questions ouvertes / risques
§AC, §AD, §AE.

### Décisions FD-01…12
Toutes **NOT DECIDED — MORRIS ARBITRATION REQUIRED**.

## Git Truth final (pré-publish)

```text
branch: design/sfia-studio-v3-1-d2-d-integration-foundation-functional-design
HEAD: 004296ac9355ef9906584f5d86be6182a96dd2fd
origin/main: 004296ac9355ef9906584f5d86be6182a96dd2fd
status:
?? .tmp-sfia-review/
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/20-v3-1-d2-d-integration-foundation-cadrage.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/21-v3-1-d2-d-integration-foundation-functional-design.md
cached: (empty)
tracked diff: (empty)
untracked project:
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/20-v3-1-d2-d-integration-foundation-cadrage.md
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/21-v3-1-d2-d-integration-foundation-functional-design.md
remote design: (absent)
PR: (none)
```

Preuves : staged vide ; aucun tracked modifié ; docs 20+21 non trackés ; aucun autre fichier projet ; aucun commit/push/PR/merge projet ; pas d'architecture/code/UI/API/backlog/secret.

## Handoff before/after

| | Tip | Blob |
|--|-----|------|
| **Before** | `8a37270572a649a1f570db4bd63f94fc85767597` | `c0be848103a23959d8a27b4860328811a4621937` |
| **After** | *(vérifier via git après publish)* | *(vérifier via git après publish)* |

## Verdict

```text
V3.1-D2-D FUNCTIONAL DESIGN COMPLETE —
READY FOR MORRIS ARBITRATION —

D-V3.1-D2D-CAD-01…12 RECORDED AS ADOPTED —
DOCUMENT 20 DECISION RECORD UPDATED —
DOCUMENT 21 COMPLETE —
FUNCTIONAL ROLES DOCUMENTED —
FUNCTIONAL OBJECTS DOCUMENTED —
NOMINAL AND EXCEPTION FLOWS DOCUMENTED —
EXTENSIBLE STATE-A FUNCTIONALLY SPECIFIED —
TIMED_OUT AND BLOCKED SUPPORTED —
FUNCTIONAL TRANSITIONS DOCUMENTED —
RUNTIME VALIDATION RULES DOCUMENTED —
NORMALIZED FAILURE FAMILIES DOCUMENTED —
READ-ONLY PERMISSIONS DOCUMENTED —
SOURCE DISCLOSURES DOCUMENTED —
FUNCTIONAL EVENTS AND REDACTION DOCUMENTED —
CONTRACT FIXTURES DOCUMENTED —
R-QA-D2C-01 DEFENCE-IN-DEPTH DOCUMENTED —
D3 PROJECTION AND ENTRY CRITERIA DOCUMENTED —
FUNCTIONAL ACCEPTANCE CRITERIA DOCUMENTED —
D-V3.1-D2D-FD-01…12 READY FOR MORRIS ARBITRATION —

NO ARCHITECTURE ADOPTED —
NO BACKLOG CREATED —
NO DELIVERY AUTHORIZED —
NO UI CODE —
NO FIGMA —
NO CREATECYCLE —
NO PROJECT GIT WRITE —
NO METHOD PROMOTION —

REVIEW HANDOFF UPDATED AND REMOTE VERIFIED
```

Décision finale : **READY FOR MORRIS ARBITRATION**
Ne pas conclure : READY FOR ARCHITECTURE / BACKLOG / DELIVERY

## Prochaine gate candidate

```text
GO ARBITRATION SFIA STUDIO V3.1-D2-D FUNCTIONAL DESIGN
APPLY D-V3.1-D2D-FD-01…12
```

Après arbitrage seulement : `GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2-D`.

Aucun GO Architecture technique, Backlog, Delivery ou D3 immédiatement consommable.

## Instruction ChatGPT

Lire `sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` au nouveau tip/blob. Vérifier Cycle 2, Critical, GO, D-CAD adoptées, docs 20/21 complets, rôles/objets/parcours/états/transitions/erreurs/permissions/disclosures/événements/fixtures/R-QA-D2C-01/D3/CA/invariants/FD non adoptées, aucune architecture/code/UI/API/backlog, aucun tracked modifié, staged vide, aucun commit/push/PR/merge projet, branche distante absente, handoff mono-fichier, verdict.

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
| **Statut** | `D2-D FUNCTIONAL DESIGN — ARBITRATED BY MORRIS — FUNCTIONAL ARCHITECTURE AUTHORIZED — NO TECHNICAL ARCHITECTURE OR DELIVERY AUTHORIZED` |
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


## AF2. Decision record Morris — 2026-08-03 17:19 CEST (+0200)

Le decision pack **AF** initial reste conservé comme **historique candidat**. Les recommandations FD ne sont pas réécrites rétrospectivement. Le présent enregistrement documente l'arbitrage Morris consommé.

### GO Morris d'arbitrage consommé

```text
GO ARBITRATION SFIA STUDIO V3.1-D2-D FUNCTIONAL DESIGN

ADOPT:

D-V3.1-D2D-FD-01:
ADOPT THE TWELVE FUNCTIONAL OBJECTS AS THE CANONICAL D2-D
FUNCTIONAL VOCABULARY.
TECHNICAL NAMES AND REPRESENTATIONS REMAIN UNDECIDED.

D-V3.1-D2D-FD-02:
ADOPT THE EIGHT-STATE EXTENSIBLE STATE-A MODEL:
IDLE, RUNNING, AWAITING_HUMAN, SUCCEEDED, FAILED,
CANCELLED, TIMED_OUT, BLOCKED.
NO ADDITIONAL PERSISTENT STATE-B STATES.

D-V3.1-D2D-FD-03:
ADOPT THE DOCUMENTED TRANSITION RULES.
ANY EXECUTION AFTER A TERMINAL STATE REQUIRES A NEW RUN
WITH A NEW EXECUTION IDENTITY.

D-V3.1-D2D-FD-04:
BLOCKED APPLIES WHEN EXECUTION CANNOT LEGITIMATELY START OR CONTINUE
WITHOUT A FATAL EXTERNAL OPERATION FAILURE.
FAILED APPLIES WHEN AN ENGAGED OPERATION FAILS.

D-V3.1-D2D-FD-05:
PARTIAL RESULTS MUST NEVER PRODUCE SUCCEEDED.
COMPLETENESS AND PARTIALITY MUST BE EXPLICITLY DISCLOSED.

D-V3.1-D2D-FD-06:
STRUCTURAL HUMAN GATES USE AWAITING_HUMAN.
NO AUTOMATIC STRUCTURAL DECISION.
EXPLICIT HUMAN-DECISION DEADLINE EXPIRY → TIMED_OUT.
MISSING, REFUSED OR UNSATISFIED GATE → BLOCKED.

D-V3.1-D2D-FD-07:
CANCELLATION IS TERMINAL FOR THE LOCAL RUN.
LATE PROVIDER RESULTS MUST NOT ALTER THE TERMINAL STATE
OR BECOME A SUCCESS RESULT.
THEY MAY ONLY BE RECORDED AS REDACTED EVIDENCE.

D-V3.1-D2D-FD-08:
FIXTURE, SANDBOX-REAL AND REAL ARE THE THREE MANDATORY
SOURCE DISCLOSURES.
A FIXTURE MUST NEVER BE PRESENTED AS REAL.

D-V3.1-D2D-FD-09:
ADOPT THE NORMALIZED FUNCTIONAL FAILURE FAMILIES DOCUMENTED IN §S.
TECHNICAL ERROR CODES REMAIN AN ARCHITECTURE DECISION.

D-V3.1-D2D-FD-10:
ADOPT THE FUNCTIONAL EVENT CATALOGUE AND STRICT REDACTION RULES.
NO SECRET, COMPLETE PROMPT OR COMPLETE PROVIDER RESPONSE
IN EVENTS BY DEFAULT.

D-V3.1-D2D-FD-11:
ADOPT THE PROVIDER-INDEPENDENT D3 FUNCTIONAL PROJECTION.
D3 MUST NOT DEPEND DIRECTLY ON OPENAI, GITHUB OR CURSOR.

D-V3.1-D2D-FD-12:
ADOPT THREE DISTINCT READINESS LEVELS:
UX EXPLORATION READINESS,
UI DELIVERY READINESS,
STRONG RUNTIME VERDICT READINESS.

NEXT:
GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2-D

NO ARCHITECTURE TECHNIQUE
NO BACKLOG
NO DELIVERY
NO UI CODE
NO CREATECYCLE
NO GIT WRITE
NO METHOD PROMOTION
```

Date/heure de la décision Morris : **2026-08-03 17:19 CEST (+0200)**

### Table des décisions FD adoptées

| ID | Choix adopté | Statut | Conséquence architecturale fonctionnelle | Gates restantes |
|----|--------------|--------|------------------------------------------|-----------------|
| D-V3.1-D2D-FD-01 | Twelve canonical functional objects. Technical names and representations undecided. | DECIDED — ADOPTED BY MORRIS | Vocabulaire fonctionnel canonique pour modules/ownership ; noms techniques non décidés | Architecture fonctionnelle → technique |
| D-V3.1-D2D-FD-02 | Eight persistent states only: idle, running, awaiting_human, succeeded, failed, cancelled, timed_out, blocked. | DECIDED — ADOPTED BY MORRIS | State Authority bornée à huit états ; pas de STATE-B | FA-03 |
| D-V3.1-D2D-FD-03 | Documented transition rules. Any execution after terminal state requires a new run identity. | DECIDED — ADOPTED BY MORRIS | Nouveau run après terminal ; transitions non négociables hors nouvel arbitrage | FA-03 |
| D-V3.1-D2D-FD-04 | blocked before or without fatal engaged-operation failure ; failed after engaged-operation failure. | DECIDED — ADOPTED BY MORRIS | Séparation blocked/failed pour Validation vs Provider Boundary | FA-04/06 |
| D-V3.1-D2D-FD-05 | partial never succeeded ; completeness and partiality explicitly disclosed. | DECIDED — ADOPTED BY MORRIS | Evidence/Disclosure Authority unique sur complétude | FA-04 |
| D-V3.1-D2D-FD-06 | structural gates use awaiting_human ; deadline expiry timed_out ; missing/refused/unsatisfied gate blocked ; no automatic structural decision. | DECIDED — ADOPTED BY MORRIS | Human Gate Authority ; pas d'auto-décision | FA-07 |
| D-V3.1-D2D-FD-07 | cancellation terminal locally ; late results evidence-only and cannot change terminal state. | DECIDED — ADOPTED BY MORRIS | État terminal immuable ; late results → Evidence only | FA-03/04 |
| D-V3.1-D2D-FD-08 | fixture / sandbox-real / real mandatory disclosures. | DECIDED — ADOPTED BY MORRIS | Provenance obligatoire ; fixture ≠ real | FA-04/08 |
| D-V3.1-D2D-FD-09 | normalized functional failure families adopted ; technical codes undecided. | DECIDED — ADOPTED BY MORRIS | Familles §S canoniques ; codes techniques = archi technique | Archi technique |
| D-V3.1-D2D-FD-10 | functional event catalogue + strict redaction adopted. | DECIDED — ADOPTED BY MORRIS | Events/Usage sans secrets/prompts/réponses complets | FA-02 |
| D-V3.1-D2D-FD-11 | provider-independent D3 projection adopted. | DECIDED — ADOPTED BY MORRIS | D3 sans dépendance directe OpenAI/GitHub/Cursor | FA-08 |
| D-V3.1-D2D-FD-12 | three distinct readiness levels adopted. | DECIDED — ADOPTED BY MORRIS | UX exploration / UI Delivery / strong runtime verdict séparés | Slicing + gates D3 |

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
D2-D FUNCTIONAL DESIGN — ARBITRATED BY MORRIS —
FUNCTIONAL ARCHITECTURE AUTHORIZED —
NO TECHNICAL ARCHITECTURE ADOPTED —
NO BACKLOG CREATED —
NO DELIVERY AUTHORIZED —
NO UI CODE —
NO CREATECYCLE —
NO PROJECT GIT WRITE —
NO METHOD PROMOTION
```

### Prochaine gate candidate

**Trace de consommation :**

- GO Architecture fonctionnelle SFIA Studio V3.1-D2-D **reçu et consommé** (Cycle 3) ;
- **aucune** architecture technique autorisée ;
- **aucun** backlog ou Delivery autorisé ;
- la prochaine décision dépend du decision pack du document 22 (`D-V3.1-D2D-FA-01…12`).

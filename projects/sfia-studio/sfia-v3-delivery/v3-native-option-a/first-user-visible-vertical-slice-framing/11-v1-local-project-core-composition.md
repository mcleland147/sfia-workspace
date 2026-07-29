# 11 — V1 local Project core composition

## Exécution

| Champ | Valeur |
|-------|--------|
| Date | 2026-07-29 16:15 CEST (+0200) |
| Cycle | 6 — Architecture technique (+7/8/9/3/15) |
| Profil | Standard renforcé |
| Branche | `delivery/sfia-studio-visible-slice-v1-project-core-composition` |
| Base | framing `c1955179a36079e060c41a845c2a1950084966c8` |
| Base distante du framing | `origin/main` @ `7916066310777abce4fd5a64ff0c87759c375fd6` |
| Statut | `V1 EXECUTED LOCALLY — TESTS GREEN` |
| Push / PR / merge projet | non exécutés, non autorisés |

## Gate consommé

`GO IMPLEMENT FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE LOT V1 — D-VS-01 ADAPT EXISTING UI AND STUDIOSHELL — D-VS-02 OA MEMORY PLUS OPTIONAL LOCAL SQLITE AUDIT — D-VS-03 FIXTURES OFF HAPPY PATH — D-VS-04 PROJECT CREATION AND CORE COMPOSITION FIRST — NO IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

Décisions consommées :

- D-VS-01 — `DECIDED — ADOPTED BY MORRIS` : StudioShell reste la cible future ; aucun fichier UI n'est modifié en V1.
- D-VS-02 — `DECIDED — ADOPTED BY MORRIS` : OA mémoire porte l'état métier ; D1 ne reçoit qu'un audit optionnel.
- D-VS-03 — `DECIDED — ADOPTED BY MORRIS` : les fixtures VS, le harness et `sessionStorage` sont absents du happy path.
- D-VS-04 — `DECIDED — ADOPTED BY MORRIS` : seules les surfaces T-A0/T-A1 sont composées.
- D-VS-05 — `NOT DECIDED — NOT CONSUMED` : aucune écriture Figma et aucun claim visuel.

## Objectif et architecture

Le lot fournit la première fondation applicative headless réutilisable par un écran futur :

```text
future UI
  → LocalProjectFacade
    → T-A0 local DoctrinePackage resolver
      → local versioned registry + schema + digest verification
    → T-A1 CreateProject / GetProject / GetCurrentLivingProjectState
      → MemoryProjectStore transaction + in-memory repositories
    → optional LocalProjectCreationAuditPort
      → no-op / memory / existing bounded D1 atomic audit table
    → immutable LocalProjectCreationView
```

Le chemin retenu est `app/lib/vertical-slice-core/**`. Il s'agit d'une couche de composition interne au-dessus des use cases OA, pas d'un nouveau domaine parallèle. Elle ne dépend ni de React, ni des routes, ni de la navigation.

## Modules créés

| Fichier | Responsabilité |
|---------|----------------|
| `types.ts` | command DTO, projection, résultats/erreurs typés, architecture et ports d'identifiants |
| `audit.ts` | port d'audit V1, no-op, mémoire et adapter d'échec de test |
| `localSqliteAudit.ts` | adapter optionnel vers `BoundedAtomicAuditStore`, sans changement de schéma |
| `localProjectComposition.ts` | factory locale, facade create/read, mapping et projection |
| `index.ts` | surface publique V1 |

Tests :

- `app/__tests__/vertical-slice-core/localProjectComposition.test.ts`
- `app/__tests__/vertical-slice-core/importBoundaries.test.ts`

## Mapping command → T-A0/T-A1

| Command V1 | Mapping |
|------------|---------|
| `name` | `CreateProjectRequest.title` |
| `objective` | `CreateProjectRequest.objective`, puis LPS `objective` |
| `context` | `CreateProjectRequest.context`, puis LPS `context` |
| `perceivedCriticality` | metadata V1 versionnée sérialisée dans LPS `scope` |
| `constraints` | metadata V1 versionnée sérialisée dans LPS `scope` |
| `shortReference` | metadata V1 versionnée sérialisée dans LPS `scope` |
| `idempotencyKey` | mécanisme d'idempotence T-A1 existant |

Le DTO de façade n'étend pas les modèles T-A1. Les champs UI absents du command T-A1 sont conservés dans un envelope JSON versionné conforme au champ `scope` existant. La projection est reconstruite depuis Project + LPS, jamais depuis un cache UI.

Les identifiants `prj:`, `lps:` et `cor:` sont fournis par un port injectable ; l'implémentation locale utilise `randomUUID`, tandis que les tests utilisent une source déterministe. L'acteur `actor:local-project-owner-demo` porte `authorityLevel: none` : il ne simule aucune identité IAM ou autorité Morris.

## Doctrine réelle

La factory compose `ResolveDoctrinePackage` avec la même horloge injectable que T-A1 et :

- le registry local T-A0 ;
- la validation AJV contre les schemas OA ;
- la vérification SHA-256 ;
- un journal T-A0 mémoire non console.

Le pin local par défaut est `pkg:studio-v3-oa@1.0.0` avec digest canonique. T-A1 appelle ce resolver pendant `CreateProject`; doctrine absente, invalide ou digest incompatible échouent avant toute écriture Project/LPS.

## Atomicité, idempotence et concurrence

- L'idempotency key V1 est obligatoire et transmise à T-A1.
- Une nouvelle tentative avec la même clé retourne le Project/LPS initial avec `reusedFromIdempotencyKey: true`.
- La création Project + LPS v1 utilise le `MemoryProjectStore.runInTransaction` T-A1 existant.
- Le mutex asynchrone, la re-vérification d'existence sous transaction et le rollback snapshot T-A1 ne sont pas affaiblis.
- Les tests de régression T-A1 couvrent rollback sur échec Project ou LPS, conflit de doublon et concurrence locale.

Limites : aucune preuve de concurrence multi-processus, d'atomicité cross-store ou de rollback production n'est revendiquée. L'audit optionnel n'appartient pas à la transaction métier.

## Projection UI

`LocalProjectCreationView` est read-only, profondément gelée aux niveaux exposés, indépendante de React et contient :

- Project : id, nom, référence courte, objectif, résumé de contexte, criticité perçue, contraintes ;
- Doctrine : id, version, digest, statut ;
- LPS : id, version 1, date de création ;
- provenance de mode : `localMode: true`, `source: REAL_LOCAL_CORE`, `fixture: false` ;
- anti-claims : IAM/persistance produit/agent/delivery/cutover explicitement non sélectionnés ou non autorisés.

Elle ne contient aucun claim `HARD CLOSED`, `T-A6 COMPLETE`, `RUN READY`, agent connecté ou identité Morris authentifiée.

## Lecture

`getProjectOverview(projectId)` appelle les use cases T-A1 `GetProject` et `GetCurrentLivingProjectState`, puis reconstruit la projection depuis leurs snapshots. Une absence Project/LPS ou des metadata V1 incohérentes produit une erreur typée ; aucun cache UI ou `sessionStorage` n'est consulté.

## Audit optionnel et non bloquant

Événements V1 :

- `LOCAL_PROJECT_CREATION_REQUESTED`
- `DOCTRINE_RESOLVED`
- `PROJECT_CREATED`
- `LPS_INITIALIZED`
- `LOCAL_PROJECT_CREATION_FAILED`

Le port n'accepte que timestamp, corrélation, idempotence, références, version/statut et code d'erreur. Il n'accepte pas objectif, contexte complet, contraintes, donnée personnelle ou secret.

Adapters :

- aucun audit / no-op : composition mémoire disponible ;
- mémoire : tests et inspection locale ;
- `BoundedSqliteLocalProjectCreationAudit` : mapping vers la table `d1_atomic_audit` existante.

Aucun changement de `db.ts`, migration ou schéma n'a été nécessaire. Toute exception d'audit est absorbée et signalée par `FAILED_NON_BLOCKING`; elle n'annule pas un Project/LPS réussi et ne transforme pas SQLite en persistance produit.

## Erreurs

La façade retourne des unions discriminées :

- `INPUT_INVALID`
- `DOCTRINE_UNRESOLVED`
- `PROJECT_CREATION_FAILED`
- `PROJECT_NOT_FOUND`
- `PROJECTION_INVALID`

Les detail codes T-A1 sont conservés lorsque disponibles. Aucun internal cause opaque T-A0/T-A1 n'est exposé dans la projection.

## Validation

Résultats locaux :

| Validation | Résultat |
|------------|----------|
| nouveaux tests V1 | 2 fichiers, 16 tests, green |
| régressions ciblées T-A0/T-A1/D1/T-A7 | 12 fichiers, 109 tests, green |
| suite Vitest complète | 85 fichiers, 752 tests, green |
| `npm run typecheck` | green |
| `npm run lint` | green, 0 warning |
| `npm run build` | green, 9 routes générées |
| `git diff --check` | green |

Les boundary tests prouvent :

- aucune dépendance V1 vers React, Next, UI, fixtures VS, harness, OPS1, agents, storage navigateur ou réseau ;
- aucune dépendance T-A0/T-A1 vers la façade ou D1 ;
- aucun import de la façade depuis `app/**`, `components/**` ou `features/**` dans V1.

## Fichiers existants non modifiés

- T-A0 et T-A1 : aucune modification ;
- `app/app/**`, `app/components/**`, `app/features/**` : aucune modification ;
- `VsDemoContext`, harness, navigation : aucune modification ;
- `db.ts`, package.json, lockfiles, schemas, migrations, `.github/**` : aucune modification.

## Risques, dette et rollback

Risques/dette bornés :

- l'envelope UI dans `LPS.scope` est versionné mais devra être réévalué si un modèle métier explicite est adopté ;
- le registry et les chemins de schemas sont injectés par le caller, donc le wiring serveur V2 devra choisir des chemins runtime stables ;
- l'audit D1 réutilise un vocabulaire de phases atomiques T-A7 ; il reste un journal local, pas un event store produit ;
- la façade est mono-instance mémoire : un redémarrage perd l'état métier V1.

Rollback : supprimer les deux commits code/tests et le commit documentaire V1. Aucun rollback de migration, donnée produit, route ou infrastructure n'est nécessaire.

## État V1 et anti-claims

`V1 EXECUTED LOCALLY — HEADLESS CORE AVAILABLE — PROJECT/LPS REAL IN OA MEMORY — OPTIONAL AUDIT BOUNDED`

Ce statut ne signifie pas : UI livrée, parcours visible complet, conformité Figma, IAM, persistance produit, agent réel, readiness T-A6/T-A7, delivery ou cutover.

## Gate candidat

`GO REVIEW AND INTEGRATE SFIA STUDIO FIRST VISIBLE SLICE V1 — PUSH BRANCH AND CREATE PR IF PR READINESS PASSES — NO MERGE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

Après intégration séparée de V1 seulement :

`GO IMPLEMENT SFIA STUDIO FIRST VISIBLE SLICE LOT V2 — CREATE PROJECT UI — REUSE STUDIOSHELL AND V1 CORE COMPOSITION — NO IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

Aucun gate n'est automatique.

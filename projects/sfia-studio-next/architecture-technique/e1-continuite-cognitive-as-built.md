# E1 — Continuité cognitive as-built (DEV, 2026-11-27)

Statut : DOCUMENTED as-built — NO RELEASE. Ne remplace pas le contrat fonctionnel
`conception-fonctionnelle/continuite-cognitive-et-fonctionnelle-du-projet.md`.

Complément ciblé E1 (reliquats ChatGPT E1-REL-01…09) — même Ensemble 1, pas E2.

## Responsabilités

| Domaine | Rôle |
| --- | --- |
| D3 | Qualification, extraction `d4.record_knowledge`, contexte, outils lecture |
| D4 | Sujets, hiérarchie, synthèses, acquis, points ouverts, provenance, merge/split |
| D5 | Trajectoire (propose/retain + forecast), cycles, finalité |
| D6 | Décisions humaines (RECORD/REVISE/REVOKE) — jamais dérivées d'une reco Nora seule |
| Studio | Admission, fence, persistance PG, projections |

## Mécanismes E1

### B.1 Capitalisation

- Gate : `QUALIFIED` + `REQUEST_EFFECT` + `d4.record_knowledge` → `extractKnowledgeProposals`.
- Écriture : `maybeCapitalizeFromExchange` (zéro proposition = zéro mutation).
- Provenance : message USER + message assistant (Nora) constitutifs lorsque fournis.
- Epistemic `established` Nora → D4 refuse FACT sans source indépendante.
- Champs étendus (complément) : `openPointTitle`, `subjectOrganization`, `mergeSourceSubjectId`,
  `relevantOpenPointIds` — extraits depuis la qualification durable, appliqués par D4.

### B.2 Arborescence + réorganisation (E1-REL-01)

- Module : `web/src/domains/knowledge/subject-proposal-batch.ts`
  - `orderSubjectCreatesByDependency` — parents avant enfants ; détection de cycle.
  - `resolveBatchParentRef` — `subj_*` | intent id | titre co-proposé | `lookup_title` DB.
- `precreateBatchSubjects` crée le batch avant le reste.
- Reparent/rename : SUBJECT avec `subjectId` existant + `parentSubjectId` / `subjectTitle`.
- **Complément** : `subjectOrganization=MERGE|SPLIT|DETACH` mobilise les propriétaires
  `mergeSubjects` / `splitSubject` / `reparentSubject(null)` — pas de second moteur métier.
- **E1 final** : `mergeSubjects` réparent les enfants ACTIVE du sujet absorbé vers la cible
  et refuse l'absorption d'un ancêtre dans un descendant (`CYCLE_OR_INVALID_TREE`).
- API Pilote : `POST .../knowledge` action `reparent` (en plus rename/merge/split).
- Nora : guidance adapter — parent+enfant même tour ; merge/split/detach paramétrés.

### Intégrité D4 (E1-REL-02)

- `subjectId` explicite invalide/étranger → **FAILED**, jamais création silencieuse.
- ACQUIS/OPEN_POINT : ref invalide → FAILED (pas d'héritage du `subjectId` de boucle).
- Conflit `subjectId` + `subjectTitle` divergent → `SUBJECT_ID_TITLE_CONFLICT`.
- Titre ambigu (homonymes ACTIVE) → `SUBJECT_TITLE_AMBIGUOUS`.
- Rename échoué → pas de résultat `AVAILABLE` masquant l'échec.
- Fence ownership optionnel sur rename / merge / split / reparent (TX).

### Points ouverts — titre court (E1-REL-04)

- `parameters.openPointTitle` → `provenance.canonicalTitle` (pas de migration schéma).
- `openPointShortTitle(statement, maxLen, { provenanceJson | canonicalTitle })`
  préfère le titre canonique ; fallback éditorial pour données historiques.
- `getOwnedProjectContext` alimente `shortTitle` depuis la provenance.

### B.5 / B.6 Trajectoire (E1-REL-05)

- `applyConversationalAuthority` : PROPOSE/RETAIN sans body objective/orientation client.
- **Complément forecast** : `parameters.forecastSteps` → `DurablePilotageBinding` →
  `ClassifiedCommand.forecastSteps` → persistance `trajectory_revisions.forecast_json`
  (chemin USER_MESSAGE conversationnel).
- **E1 final admission** : USER_MESSAGE refuse tout `body.forecastJson` client ;
  `mutateCommand` n'utilise le body que pour les sourceKind non-USER_MESSAGE.
  Absence de forecast durable ⇒ `null` (pas de complément client).
- **RETAIN_VIS** : RETAIN supersède tous les `PROPOSED` du projet ; projection
  `proposed=null` après retenue ; forecast reporté sur la révision RETAINED.
- OPEN_CYCLE conserve l'objectif contextualisé via `persistableCycleObjective`.

### B.4 / B.8 Projections

- Décisions applicables : `filterApplicableHumanDecisions` — supersede uniquement si
  successeur **APPLICABLE**.
- Documents : `countProjectLibraryDocuments` par identité documentaire (V1+V2 = 1).

### B.7 Réutilisation

- Sélection : `selectRelevantKnowledgeContext` + preferred ids.
- Continuation : `resolveContinuationKnowledgeSnippets` + marqueur d'omit.
- Outils D4 conducteur : `search_project_resources`, `read_project_document_revision`,
  `compare_document_proposal` — info non injectée consultable.

## E2-FINAL / E2-INT (as-built impact — 2026-11-27)

- **Orchestration (historique INT)** : early D4 transitif + vagues batch ; remaining D4 ;
  `crossCap` + `proposalKind` ; FACT→ACQUIS. **Remplacé** par Option B ci-dessous.
- **C02** : union stash∪projections ; projection partielle complétée ; UNKNOWN explicite.
- **FinOps** : conflit d'attribution sur l'histoire complète (pas la fenêtre période) ;
  exclusion projet avant agrégats ; liste/détail cohérents.
- D3 demeure conducteur unique ; D4/D5/D6 propriétaires.

## E2 Option B — conduite uniforme (as-built — 2026-11-27)

- **ARCH-01…05** : D3 unique ; séquencement par dépendances + résultats propriétaires ;
  réutilisation qualification/persistance/fencing/C02 ; pas de nouvel orchestrateur /
  registre / pivot ; qualification limitée aux garanties impactées.
- **Mécanisme** : `qualified-effect-conduction.ts` (planificateur pur) + boucle unique dans
  `conversation/service.ts` sur `d4.record_knowledge` / `d5` / `d6` REQUEST_EFFECT.
- **Vagues** : intents ready (dependsOn satisfaits) → batch D4 cohérent puis D5/D6 séquentiels ;
  réévaluation ; arrêt sans faux succès si aucune progression.
- **Supprimé pour le périmètre intégré** : phases `early_before_pilotage` /
  `d4DepsForPilotage` / `capitalisationRanBeforePilotage` / remaining D4 concurrentes.
- **Préservé** : batches D4 parent/enfant ; autorité HumanDecision ; forecast durable ;
  C02 ; chemins documentaires D4 create/revise, D2, D7 hors boucle intégrée.
- **Preuves DET** : `qualified-effect-conduction` unit ; `e2-unified-intent-conduction.pg`
  (D6→D4→D5, refus+indépendant, batch+pilotage) ; non-régression FINAL/C02/MP09/E1.

## Limites

- Autonomie sémantique LIVE : NON PROUVÉE (E1 = DET + injections).
- Hybrid embedding `derivedUsed=false` : **instruit E2** — défaut config/fixture
  (`SFIA_DERIVED_EMBEDDING_SEARCH` off ou `BACKEND=pg` sans semanticHits), pas régression B.7.
- Pertinence cognitive naturelle merge/split / sélection / finalité : recette utilisateur.
- UX panneau / multi-types : E3.
- Navigateur : `next dev` :3100 HTTP 500 (tooling turbopack/`@cursor/sdk`) — preuve DOM
  reportée ; qualify:start alternatif non imposé ici.

## Preuves

- Suite E1 antérieure (58 PASS rapportés) + complément `e1-reliquats-integrity.pg.test.ts`
  + non-régression B.5/B.6/B.7/B.8 — voir Delivery History et Review Pack complément E1.
- E2-FINAL : `e2-final-orchestration-c02` (unit+PG) + `e2-final-finops-attribution.pg` — 16 PASS.
- E2 Option B : `qualified-effect-conduction` unit + `e2-unified-intent-conduction.pg` —
  SC1–SC3 PASS ; C02/MP09/E1 non-régression PASS.

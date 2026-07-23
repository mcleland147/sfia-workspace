# Review pack FULL — Architecture fonctionnelle SFIA Studio v3-native Option A

## 1. Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 22:23:06 CEST (+0200) |
| Cycle | 3 — Architecture fonctionnelle |
| Profil | Critical |
| Gate | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| Validation conception | `GO VALIDATION CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE OPTION A` |
| Branche | `design/sfia-studio-v3-native-option-a-functional-architecture` (**non poussée**) |
| HEAD source | `e22bc243c8854df4e9422fafe46e92135fe242e9` |
| HEAD final | `577ff0c22491288d2293fd9730ed26f0af4095b0` |
| Base main | `56ddf32e811f0f5f8b82f31400da18ceecf3bc30` |
| Handoff conception blob | `4f8dbdc53fc91d6b5f1b3bf0a013de1e40db7722` |
| CKC | absent attendu · fallback carte synthétique + doctrine v3 + conception validée |
| Push / PR / merge | **non** |

## 2. Local Git Truth Check

OK — branche créée depuis `e22bc243` · main `56ddf32` · handoff blob OK · fonctionnelle non poussée · 12 fichiers conception présents · pas de locks · pas d’archi Option A concurrente.

Status :

```
## design/sfia-studio-v3-native-option-a-functional-architecture
```

## 3. Décisions Morris

### Validées et capitalisées (commit `d0ac034`)

FD-OA-01…06 (FD-OA-05 = continuité legacy gelée) · ARB-V3-* · D-V3-* · CC-D*

### Candidates AF (commit `577ff0c`)

FA-OA-01…05 — **non validées**

## 4. Commits de ce cycle

```
577ff0c docs(sfia-studio): document Option A functional architecture
d0ac034 docs(sfia-studio): record Option A functional design validation
```

Diff cycle (`e22bc243..HEAD`) :

```
M	projects/sfia-studio/sfia-v3-design/README.md
M	projects/sfia-studio/sfia-v3-design/v3-native-option-a/10-functional-validation-and-decision-pack.md
M	projects/sfia-studio/sfia-v3-design/v3-native-option-a/README.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/01-architecture-principles-and-boundaries.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/02-functional-domains-and-context-map.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/03-component-architecture-and-ownership.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/04-end-to-end-interaction-model.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/05-state-command-event-and-decision-model.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/06-authority-capability-and-enforcement-architecture.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/07-resilience-errors-recovery-and-observability.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/08-legacy-isolation-and-transition-architecture.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/09-modeled-ux-and-technical-input-contracts.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/10-functional-architecture-validation-and-decision-pack.md
A	projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/README.md
```

```
 projects/sfia-studio/sfia-v3-design/README.md      |   5 +-
 .../10-functional-validation-and-decision-pack.md  | 100 ++++++++++-----------
 .../sfia-v3-design/v3-native-option-a/README.md    |  55 ++++++------
 .../01-architecture-principles-and-boundaries.md   |  33 +++++++
 .../02-functional-domains-and-context-map.md       |  49 ++++++++++
 .../03-component-architecture-and-ownership.md     |  52 +++++++++++
 .../04-end-to-end-interaction-model.md             |  40 +++++++++
 .../05-state-command-event-and-decision-model.md   |  61 +++++++++++++
 ...rity-capability-and-enforcement-architecture.md |  42 +++++++++
 ...resilience-errors-recovery-and-observability.md |  35 ++++++++
 ...legacy-isolation-and-transition-architecture.md |  46 ++++++++++
 .../09-modeled-ux-and-technical-input-contracts.md |  47 ++++++++++
 ...al-architecture-validation-and-decision-pack.md |  79 ++++++++++++++++
 .../functional-architecture/README.md              |  41 +++++++++
 14 files changed, 605 insertions(+), 80 deletions(-)
```

Historique complet vs main :

```
577ff0c docs(sfia-studio): document Option A functional architecture
d0ac034 docs(sfia-studio): record Option A functional design validation
e22bc24 docs(sfia-studio): design v3-native option A functional flow
```

## 5. Validations

- scope design only
- `git diff --check` PASS
- pas de code/schemas/SQL
- anti-claims READY FOR MODELED/DELIVERY absents comme affirmations
- FD-OA-05 reformulée legacy gelé
- domaines A–H · ownership · commandes/événements · isolation legacy

## 6. Synthèse architecture

- Domaines A–H confirmés ; G ≠ F
- LPS agrégat unique ownership C (**FA-OA-01 candidate**)
- 20 composants mappés
- 20 interactions E2E
- Catalogues commandes/événements
- Matrice autorités
- Isolation OPS1 legacy ≠ Option A
- Contrats d’entrée modeled/UX/AT

## 7. Actions non exécutées

push · PR · merge · code · framing · modeled · delivery · UX 87–89 · method/ · schemas · AT

## 8. Contenu complet — fichiers modifiés (validation)


### Fichier modifié : `projects/sfia-studio/sfia-v3-design/README.md`

````markdown
# SFIA Studio — Design packs

| Pack | Statut | Notes |
|------|--------|-------|
| `d1-project-framing/` | historique D1 | Conception implémentation D1 (pré-exclusivité v3) |
| `d1-ai-guided-intake-routing/` | historique D1 | Intake / routing |
| `d1-ux-ui/` | historique D1 | UX D1 |
| **`v3-native-option-a/`** | **conception fonctionnelle VALIDATED BY MORRIS** | Tranche Option A · FD-OA-01…06 |
| **`v3-native-option-a/functional-architecture/`** | **architecture fonctionnelle candidate** | Domaines · ownership · commandes/événements · legacy isolé |

Doctrine produit de référence : `projects/sfia-studio/sfia-v3-framing/` (VALIDATED).

Anti-claims : pas READY FOR MODELED · pas READY FOR DELIVERY · pas runtime migré.
````

### Fichier modifié : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/README.md`

````markdown
# SFIA Studio v3-native — Option A — Conception fonctionnelle

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **VALIDATED BY MORRIS** |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate conception** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Gate validation** | `GO VALIDATION CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE OPTION A` |
| **Gate architecture (consommé)** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Décisions** | ARB-V3-01…06 · **FD-OA-01…06 validées** |
| **Doctrine** | SFIA Studio v3 exclusive (VALIDATED framing 30–37) |
| **Anti-claims** | Pas MODELED · Pas IMPLEMENTED · Pas ADOPTED runtime · Pas READY FOR MODELED/DELIVERY · Pas v2.6 removed |
| **Code / schemas / SQL** | **Interdits** |

## Objectif

Tranche verticale :

intention → DoctrinePackage → qualification → CKC → clarification → Living Project State → trajectoire → options/recommandation → HumanDecision → confirmation N1–N3 → ExecutionContract → exécution → preuves → mise à jour LPS

## Index conception

| # | Fichier |
|---|---------|
| 01–10 | Pack conception fonctionnelle (validé) |
| **FA** | `functional-architecture/` — architecture fonctionnelle candidate |

## Décisions FD-OA validées

| Id | Décision |
|----|----------|
| FD-OA-01 | Pack conception Option A = base AF |
| FD-OA-02 | Nouveau Project actif : N2 + DoctrinePackageRef avant LPS actif |
| FD-OA-03 | Critical : qualification `proposed` jusqu’ack explicite |
| FD-OA-04 | CKC synthétique v3 peut clarifier ; pas d’invention detailed ; pas d’exec si preuves insuffisantes |
| FD-OA-05 | OPS1 = **continuité legacy gelée** (pas coexistence doctrinale, pas évolution, pas implémentation v3) |
| FD-OA-06 | Export MD Cursor = adaptateur optionnel · pas contrat natif |

## Réserves de validation

- aucune autorisation d’implémentation ;
- pas READY FOR MODELED ;
- pas READY FOR DELIVERY ;
- FD-OA-05 = legacy gelé uniquement.

## Verdict conception

**SFIA STUDIO V3-NATIVE OPTION A FUNCTIONAL DESIGN VALIDATED — ARCHITECTURE IN PROGRESS**
````

### Fichier modifié : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/10-functional-validation-and-decision-pack.md`

````markdown
# 10 — Validation fonctionnelle et decision pack

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **VALIDATED BY MORRIS** |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate conception** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Gate validation** | `GO VALIDATION CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE OPTION A` |
| **Gate architecture** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` (consommé) |
| **Anti-claims** | Pas MODELED · Pas IMPLEMENTED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `10-functional-validation-and-decision-pack.md` |

## 1. Décisions doctrinales / arbitrage (consommées)

| Id | Contenu |
|----|---------|
| D-V3-01…05 | Doctrine v3 exclusive Studio |
| ARB-V3-01…06 | Tranche A · cycles · ExecutionContract · coupure v2.6 · UX · actifs |
| CC-D01/03/05/06/12/13 | UX conversationnelle |

## 2. Décisions FD-OA — **VALIDÉES**

| Id | Décision validée | Formulation |
|----|------------------|-------------|
| **FD-OA-01** | Pack conception Option A validé comme base AF | Tel que documenté 01–09 |
| **FD-OA-02** | Nouveau Project actif : confirmation **N2** + **DoctrinePackageRef** résolu avant LPS actif | Création projet |
| **FD-OA-03** | Profil Critical : qualification cycle reste `proposed` jusqu’acknowledgment explicite | Qualification |
| **FD-OA-04** | CKC synthétique v3 peut initier clarification ; n’autorise pas invention detailed ni exécution si preuves insuffisantes | CKC |
| **FD-OA-05** | OPS1 reste **produit legacy gelé** : sans évolution fonctionnelle · sans partage de doctrine · sans fallback v2.6 · sans être présenté comme implémentation v3 · sans 2ᵉ cible produit. Option A = **unique** cible de refondation | Continuité legacy isolée |
| **FD-OA-06** | Export Markdown Cursor = adaptateur optionnel dérivé de l’ExecutionContract ; ni contrat natif ni SoT | Exec adapter |

## 3. Inconnues restantes (architecture / aval)

| ID | Sujet |
|----|-------|
| U-OA-02 | Moment merge UX 87–89 vs cycles UX/AF aval |
| U-OA-03 | Stratégie données MethodMode existantes |
| U-OA-04 | Périmètre P0 exact des premiers composants livrés |
| U-FA-01 | LPS = agrégat unique vs projection multi-domaines (décision candidate AF) |

U-OA-01 (gel vs migration OPS1) : **levé** par FD-OA-05 (legacy gelé).

## 4. Réserves

| ID | Réserve |
|----|---------|
| FD-R01 | Pas d’architecture technique |
| FD-R02 | Pas de schemas exécutables |
| FD-R03 | Runtime inchangé dans ce cycle |
| FD-R04 | UX visuelle non retravaillée ici |
| FD-R05 | Coupure method/ non exécutée |
| FD-R07 | Pas READY FOR MODELED |
| FD-R08 | Pas READY FOR DELIVERY |
| FD-R09 | Aucune autorisation d’implémentation |

## 5. Maturité distribuée

| Objet | Maturité |
|-------|----------|
| Pack conception Option A | **VALIDATED** (Morris) |
| Architecture fonctionnelle | **DOCUMENTED candidate** (ce cycle) |
| Fondations F01–F15 | VALIDATED (framing) |
| Runtime v3-native | non MODELED / non IMPLEMENTED |
| Coupure v2.6 | non exécutée |

## 6. Anti-claims

Interdit : MODELED · IMPLEMENTED · ADOPTED runtime · READY FOR MODELED · READY FOR DELIVERY · RUNTIME MIGRATED · V2.6 REMOVED · OPTION A IMPLEMENTED · ARCHITECTURE APPROVED (sans validation Morris AF).

## 7. Critères conception — statut

- [x] Flux Option A sans v2.6 runtime comme doctrine
- [x] 20 composants
- [x] LPS / Decision / Confirmation / Contract / Evidence
- [x] Stops + cas
- [x] Matrice actifs
- [x] Alignement ARB + CC-D*
- [x] FD-OA validées Morris

## 8. Gate

Architecture fonctionnelle en cours sur branche `design/sfia-studio-v3-native-option-a-functional-architecture`.

Gate suivant après AF documentée : validation Morris AF, puis UX et/ou modeled selon arbitrage.

## 9. Verdict

**SFIA STUDIO V3-NATIVE OPTION A FUNCTIONAL DESIGN VALIDATED — ARCHITECTURE IN PROGRESS**
````

## 9. Contenu complet — architecture fonctionnelle créée

### Fichier créé : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/01-architecture-principles-and-boundaries.md`

````markdown
# 01 — Principes d’architecture et frontières

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Base conception** | FD-OA-01…06 **VALIDATED** · commit conception `e22bc243…` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré · Pas coexistence doctrinale |
| **Code / schemas / SQL / infra** | **Interdits** |
| **Document** | `01-architecture-principles-and-boundaries.md` |

## 1. Principes obligatoires (rappel)

1. Doctrine v3 exclusive · 2. Aucune lecture runtime `method/**` · 3. Aucune bascule v2.6 · 4. DoctrinePackage = racine doctrinale · 5. Project = agrégat principal · 6. Project ≠ Cycle · 7. CycleType ≠ CycleInstance · 8. LPS = état fonctionnel central · 9. Conversation dominante · 10. Séparation raisonnement / décision / exécution · 11. CKC cognitif opaque · 12. HumanDecision structurante · 13. ExecutionContract = frontière d’exécution · 14. Agents bornés capacité+autorité · 15. Evidence avant claim · 16. Audit/provenance transverses · 17. Fail-closed · 18. Réversibilité autant que possible · 19. Pas de mutation silencieuse · 20. Maturité distribuée · 21. Continuité legacy isolée (FD-OA-05) · 22. Pas de big-bang imposé.

## 2. Frontières dures

| Dedans Option A | Dehors |
|-----------------|--------|
| Domaines A–H v3-native | OPS1 legacy gelé (produit séparé) |
| DoctrinePackage Studio | `method/sfia-fast-track/**` |
| ExecutionContract structuré | Prompt MD comme SoT |
| CKC package v3 | CKC inventé / formulaire |
| Adaptateur MD optionnel | Contrat natif MD |

## 3. Couches documentaires

Conception (VALIDATED) → **Architecture fonctionnelle (ce pack)** → UX/modeled/AT (futurs) → Delivery.

## 4. Ce que l’AF ne décide pas

Framework · SQL · IAM produit · Figma pixels · découpage microservices · orchestration infra.
````

### Fichier créé : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/02-functional-domains-and-context-map.md`

````markdown
# 02 — Domaines fonctionnels et context map

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Base conception** | FD-OA-01…06 **VALIDATED** · commit conception `e22bc243…` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré · Pas coexistence doctrinale |
| **Code / schemas / SQL / infra** | **Interdits** |
| **Document** | `02-functional-domains-and-context-map.md` |

## 1. Domaines confirmés (A–H)

| ID | Domaine | Responsabilités clés |
|----|---------|----------------------|
| **A** | Conversation & Intent | Intention · clarification · session · match projet new/existing |
| **B** | Doctrine & Knowledge | DoctrinePackage · digests · CKC · contexte · provenance · fraîcheur |
| **C** | Project State | Project · LPS · versions · épistémique persisté · dette · risques · contradictions · maturité |
| **D** | Cycle & Trajectory | CycleType/Instance · qualification · trajectoire · replan · exit criteria |
| **E** | Decision & Confirmation | Options · reco · HumanDecision · gates · N1–N3 · supersession |
| **F** | Execution Governance | ExecutionContract · capability · authority · policy · idempotence · stop |
| **G** | Execution Adapter | Transform contrat→format agent · export MD optionnel · invoke · timeout · résultat brut |
| **H** | Evidence & Review | Evidence · ReviewBundle · complétude · claims · audit · capitalisation |

**Non fusionnés :** G distinct de F (ARB-V3-03 / FD-OA-06 — adaptateur hors cœur).
**Non scindés :** Contradiction & Maturity restent ownership C avec services transverses consommés par E/H.

## 2. Context map (relations minimales)

| Fournisseur | Consommateur | Objet | Autorité objet | Sync | Fail-closed | Trace |
|-------------|--------------|-------|----------------|------|-------------|-------|
| A | B | IntentAnalysis | cognitive | sync | continue clarification | correlationId |
| B | A/C | DoctrinePackageRef / ResolvedContext | package digests | sync | DOCTRINE_UNRESOLVED stop | packageRef |
| A | C | Epistemic drafts / clarifications | temporaire jusqu’à Record | sync | — | turnId |
| B | C | doctrine pin / provenance | B owns resolve ; C owns pin LPS | sync | stop si unresolved | digest |
| C | D | LPS snapshot | C | sync | STATE_CONFLICT | lpsVersion |
| D | E | Trajectory candidate / CycleQualification | D proposes | sync | — | trajectoryVersion |
| E | F | HumanDecision + Confirmation | E | sync | DECISION/CONFIRMATION_REQUIRED | decisionId |
| F | G | ExecutionContract confirmed | F | sync | AUTHORITY/CAPABILITY deny | contractId |
| G | H | ExecutionResult brut | G | async-ish | EXECUTION_FAILED | attemptId |
| H | C | Evidence / claim eval | H owns evidence ; C applies LPS | sync | EVIDENCE_INCOMPLETE | evidenceId |
| H | D | completion signals | H | sync | — | |
| C (Contradiction) | E | Contradiction blocking | C detects ; E gates | sync | CONTRADICTION_OPEN | contradictionId |
| C (Maturity) | A–H | claim allow/deny | C evaluator | sync | ClaimRejected | claimId |

## 3. Ownership règle

Un objet a **un** domaine propriétaire d’écriture. Les autres domaines lisent via contrats fonctionnels.
````

### Fichier créé : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/03-component-architecture-and-ownership.md`

````markdown
# 03 — Architecture de composants et ownership

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Base conception** | FD-OA-01…06 **VALIDATED** · commit conception `e22bc243…` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré · Pas coexistence doctrinale |
| **Code / schemas / SQL / infra** | **Interdits** |
| **Document** | `03-component-architecture-and-ownership.md` |

## Mapping 20 composants → domaines

| ID | Composant | Domaine | Possède | Traitement actif |
|----|-----------|---------|---------|------------------|
| C01 | Conversation Orchestrator | A | ConversationTurn, SessionRef | ADAPT OPS1/D1 |
| C02 | Intent Understanding | A | IntentAnalysis | ADAPT D1 |
| C03 | Doctrine Resolver | B | DoctrinePackageRef | REPLACE sfia-context |
| C04 | Knowledge/Context Resolver | B | ResolvedContext | REWORK sessionContext |
| C05 | CKC Resolver | B | CkcResolution | REPLACE (créer) |
| C06 | Epistemic State Manager | C | EpistemicItem statuses | ADAPT labels OPS1 |
| C07 | Contradiction Manager | C | Contradiction | REPLACE |
| C08 | Living Project State Manager | C | LPS versions | REWORK D1 Project |
| C09 | Trajectory Engine | D | ProjectTrajectory | REPLACE runtime |
| C10 | Recommendation Engine | D/E* | Option/Recommendation (non décision) | ADAPT GPT propose |
| C11 | Human Decision Manager | E | HumanDecision | ADAPT gate_decisions |
| C12 | Confirmation Manager | E | Confirmation N1–N3 | ADAPT D1 confirm |
| C13 | Execution Contract Builder | F | ExecutionContract | ADAPT OPS1 |
| C14 | Agent Capability Resolver | F | AgentCapability binding | ADAPT allowlists |
| C15 | Execution Adapter | G | Attempt/raw result · MD export | ADAPT cursor adapter |
| C16 | Evidence Manager | H | Evidence | ADAPT reports |
| C17 | ReviewBundle Manager | H | ReviewBundle | ADAPT review pack |
| C18 | Debt Manager | C | DebtItem | REPLACE |
| C19 | Maturity/Anti-Claim Evaluator | C | ClaimEvaluation | REPLACE |
| C20 | Audit/Provenance Manager | H/C** | AuditEvent, ProvenanceRecord | ADAPT journal/audit |

\* C10 produit pour E ; n’écrit pas HumanDecision.
\*\* C20 transverse lecture ; écriture audit append-only ownership H avec miroir C pour LPS history.

## Par composant — règles communes

- **Commandes :** uniquement celles du domaine (voir `05`).
- **Dépendances interdites :** B↛method/ · G↛décision · A↛ExecutionContract confirm · F↛MD comme source.
- **Échec :** fail-closed du domaine · escalade E si structurant.
- **Observabilité :** IDs corrélation `07`.

## Interdiction ownership multiple

LPS écriture = **C08 seul**.
HumanDecision = **C11 seul**.
ExecutionContract statut = **C13/F seul** (G ne confirme pas).
````

### Fichier créé : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/04-end-to-end-interaction-model.md`

````markdown
# 04 — Modèle d’interaction de bout en bout

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `04-end-to-end-interaction-model.md` |

## Séquence Option A (20 interactions)

| # | Étape | Initiateur | Destinataire | Commande | Événement | Avant→Après | Autorité | Erreurs |
|---|-------|------------|--------------|----------|-----------|-------------|----------|---------|
| 1 | Intention | User/A | A | SubmitIntent | IntentSubmitted | session→intent captured | user | — |
| 2 | Doctrine | A | B | ResolveDoctrinePackage | DoctrinePackageResolved/Failed | no pin→pin\|stop | system | DOCTRINE_UNRESOLVED |
| 3 | Contexte | A/B | B | ResolveProjectContext | (context ready) | — | system | CONTEXT_STALE |
| 4 | Qualification proposée | A/B/C | D | ProposeCycleQualification | CycleQualificationProposed | →proposed | cognitive | — |
| 5 | Ack Critical | User | E/D | AcknowledgeCycleQualification | CycleQualificationAcknowledged | proposed→acked | Morris/user | DECISION_REQUIRED (FD-OA-03) |
| 6 | CKC | D/B | B | ResolveCkc | CkcResolved | — | system | CKC_UNAVAILABLE |
| 7 | Clarification | B/A | User/A | RequestClarification | ClarificationRequested | — | cognitive | INSUFFICIENT_EVIDENCE |
| 8 | LPS | A/E | C | CreateProject / UpdateLivingProjectState | ProjectCreated / LpsVersioned | draft→active* | N2 si new (FD-OA-02) | STATE_CONFLICT |
| 9 | Trajectoire | C/D | D | ProposeTrajectory | TrajectoryProposed | →candidate | cognitive | — |
| 10 | Options/reco | D | E/User | (present) | EpistemicItemRecorded | — | cognitive | abstention OK |
| 11 | Décision | User | E | RecordHumanDecision | HumanDecisionRecorded | — | Morris/user | — |
| 12 | Confirmation | E | User | RequestConfirmation | ConfirmationRequested/Granted/Expired | — | N1–N3 | CONFIRMATION_REQUIRED |
| 13 | Contrat | E | F | BuildExecutionContract | ExecutionContractBuilt | draft→proposed | system | — |
| 14 | Validate/confirm contrat | E/F | F | ValidateExecutionContract + Confirm | ExecutionContractConfirmed | →confirmed | N-level | AUTHORITY_DENIED |
| 15 | Agent | F | F | SelectExecutionAgent | — | — | system | CAPABILITY_MISSING |
| 16 | Exécution | F | G | StartExecution | ExecutionStarted/Failed/Completed | confirmed→executing→… | agent borné | TIMEOUT/FAILED |
| 17 | Evidence | G/H | H | AttachEvidence | EvidenceAttached | — | system | EVIDENCE_INCOMPLETE |
| 18 | ReviewBundle | H | H | BuildReviewBundle | ReviewBundleCompleted | — | system | incomplete |
| 19 | Claim | H | C | EvaluateClaim | ClaimRejected\|(allowed) | — | anti-claim | ClaimRejected |
| 20 | LPS + next | H/C/D | C/D | Update LPS / ProposeNextCycle / Replan | LpsVersioned / NextCycleProposed / TrajectoryReplanned | état à jour | selon effet | REPLAN_REQUIRED |

\* LPS actif seulement après DoctrinePackageRef + N2 pour nouveau Project (FD-OA-02).

## Preuves / stops

Chaque étape structurante produit correlationId + domain IDs. Stops : voir conception `08` + AF `07`.
````

### Fichier créé : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/05-state-command-event-and-decision-model.md`

````markdown
# 05 — État, commandes, événements et décisions

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `05-state-command-event-and-decision-model.md` |

## 1. Architecture LPS (décision candidate FA-OA-01)

**Proposition :** LPS = **agrégat logique unique** ownership **domaine C**, alimenté par contributions bornées des autres domaines (événements validés).
Ce n’est **pas** une simple projection UI ; le panneau est une **vue** de l’agrégat.

Statut : **candidate** jusqu’à validation Morris AF.

### Sous-domaines LPS

identité · doctrineRef · objectifs/contexte/périmètre · épistémique · trajectoireRef · cycles · gates · dette · preuves · nextStep · maturité · historique/provenance.

Invariants : conception `04` + FD-OA-02 (pas d’actif sans packageRef).

## 2. Commandes fonctionnelles (catalogue)

StartConversation · SubmitIntent · ResolveDoctrinePackage · ResolveProjectContext · ProposeCycleQualification · AcknowledgeCycleQualification · ResolveCkc · RequestClarification · RecordEpistemicItem · CreateProject · UpdateLivingProjectState · ProposeTrajectory · ReplanTrajectory · RecordHumanDecision · RequestConfirmation · ConfirmAction · CancelAction · BuildExecutionContract · ValidateExecutionContract · SelectExecutionAgent · StartExecution · CancelExecution · RecordExecutionResult · AttachEvidence · BuildReviewBundle · EvaluateClaim · CloseCycleInstance · ProposeNextCycle

Ce ne sont **pas** des endpoints.

## 3. Événements fonctionnels

| Événement | Producteur | Consommateurs | Audit | LPS impact |
|-----------|------------|---------------|-------|------------|
| IntentSubmitted | A | B,C | oui | optional note |
| DoctrinePackageResolved/Failed | B | A,C | oui | pin / stop |
| ProjectMatched/Created | C | A,D | oui | create/link |
| CycleQualificationProposed/Acknowledged | D/E | C,A | oui | cycle status |
| CkcResolved | B | A,D | oui | trace only |
| ClarificationRequested | A | User | oui | — |
| EpistemicItemRecorded | C/A | E,D | oui | items |
| ContradictionDetected | C | E,A | oui | contradiction |
| LivingProjectStateVersioned | C | all readers | oui | version++ |
| TrajectoryProposed/Replanned | D | E,C | oui | traj ref |
| HumanDecisionRecorded/Superseded | E | C,F,D | oui | decisions |
| ConfirmationRequested/Granted/Expired | E | F,User | oui | — |
| ExecutionContractBuilt/Confirmed | F | G,C | oui | contract link |
| ExecutionStarted/Failed/Completed | G | F,H,C | oui | actions |
| EvidenceAttached | H | C,F | oui | evidence |
| ReviewBundleCompleted | H | C | oui | bundle ref |
| ClaimRejected | C/H | A,E | oui | block claim |
| CycleInstanceClosed | D | C | oui | cycle closed |
| NextCycleProposed | D | A,E | oui | next step |

Caractère rejouable : événements audit append-only ; replay fonctionnel ≠ mutation auto.

## 4. Décision / confirmation (domaine E)

HumanDecision ownership E.
Gate visible.
N1/N2/N3 via Confirmation Manager.
Pas de duplication d’autorité avec Conversation ou Trajectory (ils proposent seulement).
````

### Fichier créé : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/06-authority-capability-and-enforcement-architecture.md`

````markdown
# 06 — Autorité, capacité et enforcement

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `06-authority-capability-and-enforcement-architecture.md` |

## 1. Matrice Action × autorités

| Action | Domaine | Studio | Agent cognitif | Agent exec | Morris | Confirm | Mutation |
|--------|---------|--------|----------------|------------|--------|---------|----------|
| Analyse intention | A | orchestre | oui | non | non | — | temporaire |
| Résoudre doctrine | B | oui | non | non | non | — | pin si OK |
| Proposer qualification/traj/reco | D/A | oui | oui | non | non | — | non persist décision |
| Ack qualification Critical | E/D | enforce | non | non |/user | explicite | statut cycle |
| Créer Project actif | C | oui | non | non |/user | **N2** | persistante |
| HumanDecision | E | enregistre | non | non | **oui** | selon objet | persistante |
| Build/confirm ExecutionContract | F | oui | non | non |/user | N1–N3 | contrat |
| Exécuter | G | invoque | non | **oui borné** | non | déjà confirmé | effets externes |
| Attacher Evidence | H | oui | non | produit brut | non | — | persistante |
| Claim maturité | C/H | évalue | non | non | si adoption | N3 si struct | claim |
| Modifier doctrine package | B | refuse seul | non | non | **oui** | N3 | doctrinale |
| Toucher method/ | — | **interdit** cible | non | non | hors Option A | — | — |

## 2. Capacité vs autorité

- **Capability** : ce que l’agent *peut* techniquement (outils/scope).
- **Authority** : ce qui est *permis* par décision/contrat/politique.
Les deux requis (F). Manquant → CAPABILITY_MISSING / AUTHORITY_DENIED.

## 3. Enforcement fonctionnel (E0–E4 conceptuel)

Alignement framing 25 : niveaux croissants de contrainte.
Fail-closed. Anti-bypass : G ne peut pas élargir contrat.
Chemins protégés : refus d’inclure dans contrat sans N3+Morris.

## 4. Sécurité fonctionnelle

Moindre privilège · secrets hors LPS · audit append-only · isolation legacy (08) · pas d’IAM technique ici.
````

### Fichier créé : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/07-resilience-errors-recovery-and-observability.md`

````markdown
# 07 — Résilience, reprise et observabilité

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `07-resilience-errors-recovery-and-observability.md` |

## 1. Stratégies par cas

| Cas | Stratégie | Dette/preuve |
|-----|-----------|--------------|
| DoctrinePackage indisponible | **stop** DOCTRINE_UNRESOLVED | pas fallback v2.6 |
| Contexte stale | refresh resolve · sinon stop | audit |
| CKC absent | synthetic intra-v3 · sinon CKC_UNAVAILABLE | FD-OA-04 |
| Contradiction ouverte | gate E · pas contrat | réserve LPS |
| Conflit version LPS | stop STATE_CONFLICT · reconcile | — |
| Confirmation expirée | renew CONFIRMATION_REQUIRED | — |
| Agent indisponible | cancel/retry autre agent capable | debt éventuelle |
| Capability/authority deny | refuse · escalate | — |
| Timeout / fail exec | failed + evidence · retry seulement si idempotent | pas rollback magique |
| Succès partiel | failed\|completed borné + réserve · compensation si prouvée | debt |
| Résultat sans preuve | EVIDENCE_INCOMPLETE | block completed claim |
| ReviewBundle incomplet | refuse closure claim | — |
| Replan required | Trajectory candidate + décision | F09 |

## 2. Observabilité — identifiants

correlationId · projectId · cycleInstanceId · doctrinePackageRef · ckcResolutionRef · lpsVersion · trajectoryVersion · decisionId · confirmationId · executionContractId · executionAttemptId · evidenceId · reviewBundleId · actor · timestamp · status · errorCode · provenance

## 3. Vues fonctionnelles

journal conversationnel (A) · décisionnel (E) · exécution (F/G) · preuve (H) · historique LPS (C) · trajectoire (D) · maturité (C/H)
````

### Fichier créé : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/08-legacy-isolation-and-transition-architecture.md`

````markdown
# 08 — Isolation legacy et architecture de transition

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `08-legacy-isolation-and-transition-architecture.md` |
| **Décision** | FD-OA-05 VALIDATED |

## 1. Séparation

```text
OPS1 legacy gelé  ≠  Option A v3-native (unique cible refondation)
```

| Propriété | OPS1 legacy | Option A |
|-----------|-------------|----------|
| Évolution fonctionnelle | **Interdite** | Autorisée par cycles v3 |
| Doctrine | figée historique (peut encore lire method/ **dans legacy only**) | DoctrinePackage v3 only |
| Partage doctrine avec A | **Non** | — |
| Fallback A→OPS1 doctrine | **Non** | — |
| Présenté comme implémentation v3 | **Non** | cible |
| 2ᵉ cible produit | **Non** | unique |

## 2. Isolation fonctionnelle

- Pas de DoctrinePackage partagé.
- Pas de LPS partagé.
- Pas d’ExecutionContract croisé.
- UI : navigation legacy distincte / non présentée comme Studio v3.
- Données MethodMode : hors modèle A ; migration ultérieure (U-OA-03).

## 3. Transition progressive (sans coexistence doctrinale)

1. Livrer Option A sur chemin neuf.
2. Garder OPS1 gelé pour continuité opérationnelle temporaire.
3. Remplacer usages par A quand preuves prêtes.
4. Retirer lecture method/ du **chemin A** dès composants B prêts (ARB-V3-04).
5. Décommissionner legacy par GO distinct.

## 4. Anti-claims transition

« Dual-run » ≠ dual-doctrine.
Legacy disponible ≠ v3 implemented.
````

### Fichier créé : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/09-modeled-ux-and-technical-input-contracts.md`

````markdown
# 09 — Contrats d’entrée modeled, UX et technique

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `09-modeled-ux-and-technical-input-contracts.md` |

## 1. Pour modeled (futur)

Objets à modéliser en priorité (non créés ici) :

DoctrinePackageManifest · CkcResolution · LivingProjectState · ProjectTrajectory · EpistemicItem · HumanDecision · Confirmation · ExecutionContract · AgentCapability · Evidence · ReviewBundle · Contradiction · DebtItem · ProvenanceRecord · AuditEvent · ClaimEvaluation

Entrées AF : domaines ownership · commandes/événements · invariants · FD-OA règles.

## 2. Pour UX (contraintes)

- Conversation dominante + panneau = vue LPS (CC-D01/D03).
- Pas de stepper principal.
- Tags épistémiques + gates (CC-D05).
- Confirmations N1–N3 (CC-D06).
- CKC opaque (CC-D12).
- Project ≠ Cycle (CC-D13).
- Erreurs métier + codes secondaires.
- Isolation visuelle legacy vs A.

Pas de Figma dans ce cycle.

## 3. Pour architecture technique (futur)

Doit respecter :

- frontières A–H ;
- fail-closed B ;
- G adaptateur seulement ;
- pas de method/ sur chemin A ;
- correlation IDs ;
- pas de choix framework ici.

## 4. Livraison progressive suggérée (non binding)

P0 : B (DoctrineResolver) + A intent + C LPS minimal + E décision/N2 create.
P1 : D trajectoire + F/G contrat/adaptateur + H evidence.
P2 : contradictions/maturity/debt riches · coupure method/ A.
````

### Fichier créé : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/10-functional-architecture-validation-and-decision-pack.md`

````markdown
# 10 — Validation architecture fonctionnelle et decision pack

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `10-functional-architecture-validation-and-decision-pack.md` |

## 1. Décisions déjà validées (inputs)

FD-OA-01…06 · ARB-V3-01…06 · D-V3-* · CC-D*

## 2. Décisions candidates d’architecture (soumises Morris)

| Id | Proposition |
|----|-------------|
| **FA-OA-01** | LPS = agrégat logique unique ownership domaine C ; panneau = vue |
| **FA-OA-02** | Domaines A–H confirmés ; G séparé de F |
| **FA-OA-03** | Catalogue commandes/événements `05` comme contrat AF→modeled |
| **FA-OA-04** | Isolation legacy FD-OA-05 formalisée `08` comme architecture de transition |
| **FA-OA-05** | Matrice autorités `06` comme enforcement fonctionnel de référence |

*FA-OA-* = **candidates** · non validées.

## 3. Inconnues

U-OA-02 · U-OA-03 · U-OA-04 · (FA-OA-01 en attente validation)

## 4. Réserves

| ID | Réserve |
|----|---------|
| FA-R01 | Pas de schemas |
| FA-R02 | Pas d’AT/infra |
| FA-R03 | Pas d’implémentation |
| FA-R04 | Pas READY FOR MODELED (nécessite validation AF + gate modeled) |
| FA-R05 | Pas READY FOR DELIVERY |
| FA-R06 | Coupure method/ non exécutée |
| FA-R07 | OPS1 legacy encore présent (gelé) |

## 5. Dette

Évitée : coexistence doctrinale · ownership flou décision/exec.
Créée : validation FA-OA · modeled schemas · UX alignement · AT · coupure SoT.

## 6. Maturité

| Objet | Maturité |
|-------|----------|
| Conception Option A | VALIDATED |
| Architecture fonctionnelle | DOCUMENTED candidate |
| Modeled / runtime | non |

## 7. Anti-claims

Pas ARCHITECTURE APPROVED sans GO Morris · Pas READY FOR MODELED/DELIVERY · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED.

## 8. Critères d’acceptation AF (pour Morris)

- [ ] Domaines A–H et context map
- [ ] Ownership 20 composants sans conflit
- [ ] Interactions E2E + commandes/événements
- [ ] Autorités / N1–N3 / fail-closed
- [ ] Résilience + observabilité IDs
- [ ] Isolation legacy claire
- [ ] Contrats d’entrée modeled/UX/AT
- [ ] Alignement FD-OA validées

## 9. Gate suivant

`GO VALIDATION ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE OPTION A`

Puis, selon arbitrage : UX et/ou `GO ENRICHISSEMENT MODELED`.

## 10. Verdict

**SFIA STUDIO V3-NATIVE OPTION A FUNCTIONAL ARCHITECTURE DOCUMENTED — MORRIS VALIDATION REQUIRED**
````

### Fichier créé : `projects/sfia-studio/sfia-v3-design/v3-native-option-a/functional-architecture/README.md`

````markdown
# Architecture fonctionnelle — Option A v3-native

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Base conception** | FD-OA-01…06 **VALIDATED** · commit conception `e22bc243…` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré · Pas coexistence doctrinale |
| **Code / schemas / SQL / infra** | **Interdits** |

## Objectif

Transformer la conception fonctionnelle validée en architecture de domaines, ownerships, commandes, événements, autorités, résilience et isolation legacy — exploitable par UX, modeled et architecture technique **sans** inventer d’implémentation.

## Index

| # | Fichier |
|---|---------|
| 01 | Principes & frontières |
| 02 | Domaines & context map |
| 03 | Composants & ownership |
| 04 | Modèle d’interaction E2E |
| 05 | État · commandes · événements · décisions |
| 06 | Autorité · capacité · enforcement |
| 07 | Résilience · erreurs · reprise · observabilité |
| 08 | Isolation legacy & transition |
| 09 | Contrats d’entrée modeled / UX / technique |
| 10 | Validation & decision pack AF |

## Domaines (A–H)

A Conversation & Intent · B Doctrine & Knowledge · C Project State · D Cycle & Trajectory · E Decision & Confirmation · F Execution Governance · G Execution Adapter · H Evidence & Review

## Gate suivant candidat

`GO VALIDATION ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE OPTION A`

## Verdict

**SFIA STUDIO V3-NATIVE OPTION A FUNCTIONAL ARCHITECTURE DOCUMENTED — MORRIS VALIDATION REQUIRED**
````

## 10. Verdict exact

**SFIA STUDIO V3-NATIVE OPTION A FUNCTIONAL ARCHITECTURE DOCUMENTED — MORRIS VALIDATION REQUIRED**

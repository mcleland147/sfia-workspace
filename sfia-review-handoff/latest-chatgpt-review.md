# Review Pack Full — SFIA v3.0 Consolidated Framing (Studio-native)

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-22 12:54:12 CEST
- **Cycle :** 1 — Cadrage complémentaire
- **Profil :** Critical
- **Gate consommé :** GO COMPLÉMENT CADRAGE SFIA v3.0 — STUDIO-NATIVE DOCTRINE, USER JOURNEYS AND INFORMATION ARCHITECTURE
- **Gate suivant :** GO VALIDATION CADRAGE CONSOLIDÉ SFIA v3.0
- **Repo :** mcleland147/sfia-workspace
- **Branche :** delivery/sfia-studio-control-tower-fast-track
- **HEAD/base :** 32e5271842b9a344a7e292614675c27ea8ed941b
- **Handoff précédent :** cf84980ea2e95469d1fdb737dcf5aa47f99bb2aa

## 2. État Git initial

- Branche delivery dirty (CT + moteur SFIA + framing v3) — préservée
- Staged vide ; aucun commit/push projet
- Périmètre écriture : `sfia-v3-framing/**` + `.tmp-sfia-review/**` uniquement

## 3. Sources consultées

Canoniques v2.6 (lecture) · framing 01–14 · handoff cf84980 · docs 66–74 / code CT (lecture acquis)

## 4. Baseline / statut v3

- Baseline : **SFIA v2.6**
- v3 : candidat consolidé Studio-native — **non adopté**
- Statut adoption : **V3-DOCUMENTED** (cible de ce cycle)

## 5. Synthèse challenge

- v3 = Studio-native exclusive ; manuel ChatGPT→Cursor = v2.6
- 5 couches info (MD / JSON / SQL / artefacts / restitutions)
- Parcours = projection doctrine ; GPT libre ; effets bornés
- ExecutionContract pivot ; template MD fallback/legacy
- Modes 1–5 coexistence
- Option D co-design borné (recomm. candidate)
- Slice 20 étapes
- Chaîne V3-DOCUMENTED…ADOPTED

## 6. Fichiers créés (contenu complet)


### `projects/sfia-studio/sfia-v3-framing/15-sfia-v3-studio-native-applicability-model.md`

```markdown
# 15 — Modèle d’applicabilité Studio-native (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Baseline | SFIA v2.6 |
| Gate | Complément cadrage SFIA v3.0 |

## 1. Ce que signifie « appliquer SFIA v3.0 »

**Observation :** le cadrage initial (01–14) décrivait un Project OS sans assez fermer le critère *où* la doctrine s’applique.

**Décision de cadrage candidate (≠ adoption baseline) :** SFIA v3.0 n’est applicable que lorsque **SFIA Studio pilote effectivement** le projet, le cycle, le contexte, les décisions, les actions, les exécutions, les preuves, les validations et les transitions.

Le modèle suivant **n’est pas** SFIA v3.0 :

```
Humain → ChatGPT → prompt → copier-coller Cursor → retour manuel → ChatGPT
```

Ce modèle reste **SFIA v2.6** (ou legacy assisté).

## 2. Composants indispensables (candidats)

| Composant | Pourquoi indispensable |
|-----------|------------------------|
| Project persisté | Sans projet, pas de v3 |
| CycleInstance | Routage et états |
| Canonical + project context | Doctrine exécutable |
| GuidedSession rattachée | No-free-chat |
| HumanDecision / GateInstance | Gouvernance |
| ActionCandidate + Compiler | Effets structurés |
| ExecutionContract + Attempt | Cursor borné |
| Evidence + Validation | Preuves |
| Transition tracée | Enchaînement |
| Audit trail | Non-répudiation minimale |

## 3. Capacités minimales / contrôles / preuves

**Capacités :** UI cockpit projet ; chargement digests Git ; dual-channel GPT ; persist SQL états ; gates UI ; Cursor sous contrat ; postcheck ; reinjection ; export review.

**Contrôles :** fail-closed ; allowlist ; CONTEXT_STALE ; gates fermés par défaut pour remote writes ; pas d’effet hors contrat.

**Preuves :** events corrélés ; digests sources ; contractHash ; fichiers touchés ; ValidationResult ; handoff si rapport Cursor.

## 4. Matrice des modes

| Mode | Acteurs | SoT | Projet/Cycle | Conversation | Contrats | Gates | Exécution | Claims |
|------|---------|-----|--------------|--------------|----------|-------|-----------|--------|
| **1. v2.6 manuel** | Humain, ChatGPT, Cursor | Git + chat | Hors Studio | Libre hors produit | Prompt Markdown | Humain hors UI | Copier-coller | v2.6 only |
| **2. v2.6 assisté Studio** | + Studio partiel | Git + OPS1 partiel | Session loose | Studio chat | Partiels OPS1 | UI OPS1 | Cursor OPS1 possible | **Pas de claim v3** |
| **3. Transitionnel** | Studio + GPT + Cursor | Git + SQL partiel | Projet/cycle partiels | Rattachée si dispo | Partiels | Mixtes | Sous contrat si dispo | « v3 candidate / transition » |
| **4. v3.0 Studio-native** | Tous rôles Studio | Git defs + SQL état + artefacts | Complets | Dual-channel | Complets | UI + policy | Contract→Cursor | Claim v3 **si éligible** |
| **5. v3 indisponible / fallback** | Opérateur | Mode 1 ou 2 | — | — | — | — | Legacy | **Interdit claim v3** |

## 5. Critères d’entrée / sortie v3 (candidats — non figés)

**Entrée éligibilité v3 (projet) :** checklist capacités §2 + mode 4 actif + doctrine version affichée + audit on.

**Sortie / fallback :** capacité manquante, stale non résolu, authz insuffisante, divergence Git/SQL non réparée → bascule mode 5 avec message explicite.

## 6. Comportements dégradés

- Afficher le mode courant dans l’IHM.
- Interdire les claims v3 hors mode 4 éligible.
- Ne jamais « simuler » un gate.
- Conserver export Git des artefacts critiques.

## 7. Décisions humaines requises

- Valider la définition Studio-native.
- Valider la matrice des 5 modes.
- Trancher les critères minimaux (renforcer ou alléger).

```

### `projects/sfia-studio/sfia-v3-framing/16-sfia-v3-user-journey-and-doctrine-enforcement.md`

```markdown
# 16 — Parcours utilisateurs et enforcement doctrinal (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |

## 1. Principe

Le parcours utilisateur est une **projection de la doctrine**, pas un workflow libre.
GPT reste libre de raisonner ; le moteur borne contexte, outils, états, transitions et effets.

## 2. Patron commun de parcours

Pour chaque parcours : entrée IHM · contexte · états requis · rôles · sources · livrables · actions · gates · effets · transitions · preuves · sortie · blocages.

### 2.1 Créer un projet
- **Entrée :** Accueil → Nouveau projet
- **États :** Workspace OK ; Project DRAFT
- **Humain :** responsable + décideur (création)
- **GPT :** clarifier intention, baseline, risques
- **Moteur :** allouer ids ; refuser hors Workspace
- **Sources :** doctrine applicable (v2.6 ou defs v3 candidates)
- **Livrables :** Project + ProjectTrajectory draft
- **Gates :** confirmation création
- **Effets :** INSERT SQL Project ; scaffold Git optionnel gated
- **Blocage :** baseline inconnue ; permissions

### 2.2 Reprendre / importer / consulter clôturé
- Reprendre : Project existant → cockpit
- Importer : mapping artefacts → objets SQL + refs Git ; validation colonnes
- Consulter clôturé : read-only ; pas d’exécution

### 2.3 Qualifier une demande / initier ou poursuivre un cycle
- Cycle Router propose type/profil
- GuidedSession QUALIFYING → READY
- GPT peut challenger et proposer **autre** cycle
- Moteur refuse transition sans préconditions

### 2.4 Suspendre / reprendre
- PAUSED avec snapshot digests
- Reprise → revalidate CONTEXT_STALE

### 2.5 Demander une décision
- DecisionRequest → DECISION_REQUIRED
- Gate UI (pas de phrase chat = GO)

### 2.6 Proposer / exécuter / corriger une action
- ActionProposal → Compiler → ActionCandidate → Gate → ExecutionContract → Cursor
- Correction : refine / nouvelle proposal ; **pas** d’élargissement silencieux

### 2.7 Valider / clôturer / capitaliser
- ValidationResult → TransitionProposal → HumanDecision
- CapitalizationRecord + éventuel review pack/handoff

## 3. Matrice parcours × enforcement

| Parcours | GPT libre | Moteur contraint | Gate humain typique |
|----------|-----------|------------------|---------------------|
| Créer projet | Intention, naming | Ids, mode méthodo | Création |
| Qualifier cycle | Challenge type/profil | Routing defs | Si ambigu |
| Décision | Options/reco | Persist Decision | **Oui** |
| Action | Proposal prose | Compiler/paths | Avant Cursor |
| Exécution | Analyse post | Contrat/hash | GO exécution |
| Transition | Proposition | State machine | Structurante |
| Import Excel | Aide mapping | Schema colonnes | Si write large |

## 4. Anti-questionnaire

Interdit : arbre de phrases figées exclusives.
Autorisé : questions guidées **suggérées**, questions GPT ad hoc, découverte d’info inattendue — tant que le canal de contrôle reste valide.

## 5. Doctrine enforcement dans Studio

Studio doit :

1. Identifier ProjectState / CycleState
2. Proposer parcours pertinents seulement
3. Ouvrir/reprendre le bon cycle
4. Charger SourceContext
5. Matérialiser gates
6. Limiter transitions
7. Tracer décisions
8. Orchestrer exécutions

L’utilisateur **ne choisit pas** un workflow hors méthode (sauf mode v2.6 explicite).

## 6. Décisions humaines requises

- Valider le catalogue de parcours.
- Valider l’interdiction du free-chat en mode v3.
- Prioriser parcours du vertical slice (13/22).

```

### `projects/sfia-studio/sfia-v3-framing/17-sfia-v3-information-and-artifact-architecture.md`

```markdown
# 17 — Architecture de l’information et des artefacts (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Note | Aucun fichier JSON/SQL/XLSX/PPTX créé dans ce cycle |

## 1. Cinq couches

### Couche 1 — Doctrine humaine
- **Formats :** Markdown
- **Contenu :** principes, gouvernance, rationale, règles explicables
- **Stockage :** Git (`method/`, framing candidats)
- **SoT :** Git
- **MAJ :** cycles méthode gated

### Couche 2 — Définitions exécutables
- **Formats candidats :** JSON **préféré** pour contrats machine ; YAML acceptable pour defs lisibles si schéma équivalent ; **JSON Schema** pour validation
- **Contenu :** CycleDefinition, StateDefinition, TransitionDefinition, GateDefinition, RoleDefinition, PolicyDefinition, ArtifactDefinition, ValidationDefinition, EventDefinition, ContractSchema
- **Stockage :** Git (versionnés)
- **SoT :** Git + digest
- **Règle :** ne pas dupliquer en TypeScript comme SoT

### Couche 3 — État opérationnel
- **Support :** SQL
- **Contenu :** Workspace, Project, CycleInstance, GuidedSession, HumanDecision, GateInstance, ActionCandidate, ExecutionAttempt, Evidence, Reserve, Transition, AuditEvent, permissions
- **SoT runtime :** SQL
- **Réf Git :** doctrineVersion, definitionDigests, headSha

### Couche 4 — Artefacts métier
- **Formats :** XLSX, CSV, diagrammes, images, PJ, docs bureautiques
- **Exemples :** RACI, backlog, risques, inventaire, mapping, coûts
- **Rôle :** import / artefact utilisateur / preuve — **jamais** doctrine
- **Stockage :** blob store ou Git LFS/PJ + métadonnées SQL

### Couche 5 — Restitutions
- **Formats :** slides, PDF, rapports MD, dashboards, exports
- **Exemples :** decision pack, COPIL, REX, revue de cycle
- **Règle :** générées ; **pas** source concurrente

## 2. Fiche couche (commun)

Pour chaque couche : finalité · SoT · ownership · versionnement · stockage · API · validation · sync · audit · rétention · sécurité · génération · import/export · règles de MAJ — voir matrices ci-dessus + docs 19.

## 3. Hiérarchie des sources (candidate)

1. Doctrine + définitions exécutables (Git)
2. Décisions humaines enregistrées (SQL immuables)
3. État opérationnel SQL
4. Artefacts métier (fichiers + meta)
5. Restitutions générées
6. Contexte conversationnel temporaire
7. Inférences GPT

**En cas de conflit :** Git defs > HumanDecision > SQL state dérivé > artefact importé > restitution > chat > inférence.
Stale si HEAD/digests ≠ context → blocage effets.

## 4. Conflits typiques et résolution

| Conflit | Autorité | Action |
|---------|----------|--------|
| Git vs SQL | Git defs + HumanDecision | Rehydrate / requalify |
| SQL vs Excel importé | SQL après validation mapping | Conserver fichier source en preuve |
| JSON vs Markdown | Markdown rationale ; JSON exécutable | Lien bidirectionnel + tests conformité |
| Rapport vs Evidence | Evidence | Régénérer rapport |
| Cache vs HEAD | HEAD | CONTEXT_STALE |

## 5. Décisions humaines requises

- Valider les 5 couches.
- Valider JSON-first pour defs exécutables.
- Valider « Excel jamais canonique ».

```

### `projects/sfia-studio/sfia-v3-framing/18-sfia-v3-doctrine-to-runtime-projection-matrix.md`

```markdown
# 18 — Matrice doctrine → runtime (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Règle | Une ligne = un élément doctrinal ; éviter triple maintenance MD/JSON/TS |

Légende colonnes : **Doc** doctrine MD · **Def** JSON/Schema · **SQL** · **GPT** · **UI** · **Gate** · **Policy** · **Event** · **Preuve** · **Restit** · **Test** · **Risque dup.**

## Matrice transverse (minimum)

| Élément | Doc | Def | SQL | GPT | UI Studio | Gate | Policy | Event | Preuve | Restitution | Testable | Risque dup. |
|---------|-----|-----|-----|-----|-----------|------|--------|-------|--------|-------------|----------|-------------|
| Principe | MD | ref id | — | preamble | aide | — | enforce flags | — | — | slide principes | review | Haut si recopié TS |
| Rôle | MD | RoleDefinition | assignment | mention | admin rôles | habilitation | RBAC | ROLE_* | — | RACI export | oui | Moyen |
| Cycle | routing MD | CycleDefinition | CycleInstance | propose | cycles | entrée | routing | CYCLE_* | livrables | revue cycle | oui | Moyen |
| Profil | MD | enum | on instance | qualify | badge | — | depth rules | — | — | — | oui | Bas |
| Bloc | MD | enum[] | active_blocks | cite | chips | — | — | — | — | — | oui | Bas |
| Gate | MD | GateDefinition | GateInstance | request | boutons | **humain** | closed/open | GATE_* | decision record | decision pack | oui | Haut si chat=GO |
| Entrée cycle | MD | preconditions | check | explain | checklist | si critique | fail-closed | — | — | — | oui | Bas |
| Sortie cycle | MD | exit criteria | ValidationResult | analyse | validation | parfois | — | — | evidence | rapport | oui | Bas |
| Livrable | MD | ArtifactDefinition | artifact meta | propose | liste | — | path policy | — | files | pack | oui | Moyen |
| Stop condition | MD | StopDefinition | — | respect | alertes | — | deny | STOP_* | — | — | oui | Haut si oublié |
| Automatisation | MD | AutomationClass | — | — | mode badge | selon classe | caps | — | — | — | oui | Moyen |
| Décision | MD | DecisionSchema | HumanDecision | options | decision panel | **oui** | immutability | DECISION_* | motif | slides | oui | Bas |
| Action | MD | ProposalSchema | ActionCandidate | proposal | action panel | avant exec | compiler | ACTION_* | exact content | — | oui | Moyen |
| Validation | MD | ValidationDefinition | ValidationResult | analyse | validation | si structurant | — | VALID_* | checks | rapport | oui | Bas |
| Transition | MD | TransitionDefinition | Transition | propose | next steps | structurant | state machine | TRANS_* | — | trajectoire | oui | Moyen |
| Réserve | MD | ReserveClass | Reserve | cite | risques | — | — | RESERVE_* | — | REX | oui | Bas |
| Review pack | template MD | PackProfile | report meta | — | export | — | completeness | — | full content | handoff MD | oui | Haut si résumé seul |
| Handoff | guardrails | publish rules | — | — | status | — | branch only | — | remote SHA | latest-chatgpt-review | oui | Bas |
| Capitalisation | MD | CapRecord schema | CapitalizationRecord | propose | capitalisation | — | — | CAPA_* | assets | REX | oui | Moyen |

## Mécanisme anti-duplication (candidat)

1. **SoT humaine** = Markdown (pourquoi).
2. **SoT machine** = JSON + JSON Schema versionnés Git (quoi exécutable).
3. **Runtime** = SQL instances + digests des defs.
4. **Code** = chargeurs/validateurs uniquement — pas de re-codage des enums métier sans test de conformité Schema.
5. CI candidate (futur) : `schema validate` + `doc anchors` + `no orphan enums in TS`.

## Source / responsable / auditabilité

- Responsable doctrine : cycles méthode gated.
- Responsable defs : co-design avec Studio (Option D).
- Audit : chaque effet cite `definitionId@digest` + `decisionId` si gate.

## Décisions humaines requises

- Valider cette matrice comme contrat de conception.
- Trancher l’outil de conformité croisée (CI) pour plus tard.

```

### `projects/sfia-studio/sfia-v3-framing/19-sfia-v3-canonical-data-and-contract-strategy.md`

```markdown
# 19 — Stratégie données canoniques et contrats (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Interdit ici | créer JSON/YAML/SQL/XLSX/PPTX réels |

## 1. JSON / YAML / JSON Schema

**Recommandation candidate :** JSON + JSON Schema comme format primaire des définitions exécutables ; YAML optionnel en authoring si projection JSON générée et validée.

| Besoin | Choix candidat |
|--------|----------------|
| Contrats machine | JSON |
| Authoring humain dense | YAML → compile JSON |
| Validation | JSON Schema (Draft moderne) |
| Versionnement | Git path + `schemaVersion` + digest |
| Migrations | lots versionnés ; dual-read temporaire |
| IDs | kebab/stable ids ; pas d’UUID dans defs |
| Enums | Schema enum ; tests conformité code |
| Extensibilité | `x-sfia-*` extensions documentées |
| i18n | labels séparés ; ids stables |
| Gén. types | optionnelle plus tard — jamais SoT inverse |
| Sécurité | pas de secrets dans defs |

**Rôles des fichiers structurés :** sources canoniques de **définitions** (Git) ; snapshots digests en SQL ; contrats d’échange API ; **pas** cache conversationnel comme SoT.

## 2. SQL — état vivant, pas doctrine

SQL représente l’état opérationnel :

- tables/agrégats candidats : projects, cycle_instances, sessions, decisions (immuables), gate_instances, action_candidates, execution_contracts, attempts, evidence, reserves, transitions, audit_events, memberships
- **Event store** recommandé pour audit ; modèle transactionnel pour état courant
- Historisation décisions : append-only
- Soft delete projets ; jamais delete silencieux des decisions
- Concurrence : optimistic locking sur Project/Cycle
- Permissions / multi-projets / multi-users : tables d’assignment
- Colonne `doctrine_version` + `definition_digests`
- Export / anonymisation / rétention : politiques RUN

| Objet | Git only | SQL only | SQL→Git ref | Snapshot | Rebuild events |
|-------|----------|----------|-------------|----------|----------------|
| CycleDefinition | ✓ | | | | |
| ProjectState | | ✓ | digests | option | partiel |
| HumanDecision | | ✓ | | ✓ | ✓ |
| Evidence files | paths | meta | blob/path | | |
| ExecutionContract | | ✓ | | ✓ | ✓ |

**Aucune migration SQL dans ce cycle.**

## 3. Excel / CSV

| Usage | Autorisé ? |
|-------|------------|
| Source d’import | Oui, après validation template |
| Artefact utilisateur | Oui |
| Preuve | Oui (fichier conservé) |
| Restitution | Oui |
| Doctrine / SoT | **Non** |

Priorités : RACI, risques, backlog, stakeholders, inventaire, migration, mapping données, coûts.
Contrôles : version template, colonnes, doublons, PII, volumétrie, mapping objets Studio, conservation source, réexport.

## 4. Slides / PDF / restitutions

Générés depuis Git defs + SQL state + Evidence.
Métadonnées : version, date, auteur rôle, statut, décisions, réserves, preuves.
**Ne deviennent pas** une source concurrente.
Archivage : blob + hash + lien cycle.

## 5. Template Cursor — rôle futur

**Modèle actuel (v2.6 / CT) :** Template MD → instantiation → prompt.

**Modèle cible candidat v3 :**

```
Doctrine + CycleDefinition + ProjectState + HumanDecision
+ ActionCandidate + Policies
→ ExecutionContract (SoT runtime de l’exécution)
→ Cursor Prompt Projection
→ Cursor
```

Le template Markdown devient principalement : **documentation + projection/fallback/debug + compatibilité legacy v2.6** — plus l’objet pivot d’exécution v3.

Champs ExecutionContract : objective, paths, ops, exact content, stop, gates, digests, hash, version, allowlist, timeout, evidence expectations, reinjection hooks.

**Ne pas modifier** `prompts/templates/sfia-cycle-execution-template.md` dans ce cycle.

## 6. Décisions humaines requises

- JSON-first vs YAML-first.
- Event-sourced vs state+audit hybride.
- Confirmer déclassement du template MD comme pivot d’exécution v3.

```

### `projects/sfia-studio/sfia-v3-framing/20-sfia-v2.6-v3-coexistence-and-migration-model.md`

```markdown
# 20 — Coexistence SFIA v2.6 / v3.0 et migration (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |

## 1. Régimes

Voir aussi doc 15 (modes 1–5). Synthèse migration :

| Régime | Doctrine | Studio | Claim |
|--------|----------|--------|-------|
| v2.6 manuel | v2.6 | absent | v2.6 |
| v2.6 assisté | v2.6 | partiel OPS1/CT | v2.6 — **interdit v3** |
| Transitionnel | v2.6 + defs v3 candidates | capacités partielles | « v3 candidate / transition » |
| v3 Studio-native | defs v3 + MD rationale | complet | v3 si éligible (21) |
| Fallback | v2.6 | dégradé | jamais v3 |

## 2. Sélection de mode

Règles candidates :

1. Afficher le mode dans l’IHM (badge).
2. Mode par **projet** (pas global silencieux).
3. Upgrade mode 3→4 seulement si checklist éligibilité OK.
4. Downgrade automatique si capacité critique absente.
5. Opérateur peut forcer fallback avec motif tracé.

## 3. Migration projet

| Étape | Contenu |
|-------|---------|
| Inventaire | sessions OPS1, docs projet, preuves |
| Import | créer Project/Cycles ; lier artefacts |
| Mapping | décisions historiques → HumanDecision si possible |
| Validation | digests ; gaps → réserves |
| Cutover | bascule mode après GO projet |
| Rollback | retour mode 2/1 ; SQL conservé read-only |

## 4. Import historique / incompatibilités

- Sessions OPS1 sans Project → rattachement manuel.
- Prompts collés sans contractHash → non rejouables en v3 claims.
- Docs v2.6 restent lisibles ; non réécrits.

## 5. Abandon v2.6 vs maintien legacy

**Abandon (lointain, gated) :** tous projets éligibles v3 ; support manuel documenté ; GO ADOPTION + période dual.
**Maintien legacy :** projets hors Studio ; audits ; formation.
**Risque :** deux doctrines actives trop longtemps → dette (V3-R05).

## 6. Support / dette

- Formation modes.
- Runbooks fallback.
- Interdiction marketing « tout est v3 » tant que mode ≠ 4 éligible.

## 7. Décisions humaines requises

- Valider modes et claims.
- Politique de durée du dual-run.
- Priorité migration vs nouveaux projets v3.

```

### `projects/sfia-studio/sfia-v3-framing/21-sfia-v3-adoption-eligibility-and-gates.md`

```markdown
# 21 — Éligibilité et gates d’adoption SFIA v3.0 (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Rappel | Documents validés ≠ adoption |

## 1. Statuts d’adoption candidats

| Statut | Signification | Conditions candidates |
|--------|---------------|----------------------|
| **V3-DOCUMENTED** | Cadrage écrit | Pack framing 01–22 cohérent |
| **V3-MODELED** | Defs structurées conçues | Stratégie JSON/SQL validée (pas forcément fichiers runtime) |
| **V3-IMPLEMENTED** | Capacités runtime | Slice produit implémentée locale |
| **V3-VALIDATED** | Preuves live | Exécution+preuves+validation+audit |
| **V3-ELIGIBLE** | Critères produit OK | Checklist §2 + sécu + non-régression |
| **V3-ADOPTED** | Baseline méthode | **GO ADOPTION** + merge doctrine `method/` |

Aujourd’hui (ce cycle) : cible **V3-DOCUMENTED** consolidée — **pas** ADOPTED.

## 2. Gates candidats (chaîne)

1. Doctrine candidate validée (humain)
2. Définitions structurées validées (modèle)
3. Parcours utilisateurs validés
4. Modèle SQL validé (conception)
5. Sécurité validée
6. Vertical slice fonctionnelle
7. Cursor sous contrat
8. Preuves
9. Validation
10. Transition
11. Audit
12. Non-régression
13. Migration
14. Documentation RUN
15. **GO ADOPTION** (baseline)

## 3. Critères d’éligibilité runtime (rappel 15)

Projet + cycle + contexte + conversation rattachée + décision tracée + action structurée + exécution sous contrat + preuves + validation + transition + audit.

## 4. Anti-claims

- V3-DOCUMENTED ≠ production.
- Control Tower ≠ V3-ADOPTED.
- Handoff framing ≠ baseline.

## 5. Décisions humaines requises

- Valider la chaîne de statuts.
- Nommer le GO entre VALIDATED et ELIGIBLE.
- Séparer clairement validation cadrage vs adoption.

```

### `projects/sfia-studio/sfia-v3-framing/22-sfia-v3-consolidated-challenge-and-decision-pack.md`

```markdown
# 22 — Challenge consolidé et decision pack SFIA v3.0

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** |
| Gate consommé | `GO COMPLÉMENT CADRAGE SFIA v3.0 — STUDIO-NATIVE DOCTRINE, USER JOURNEYS AND INFORMATION ARCHITECTURE` |
| Gate suivant | `GO VALIDATION CADRAGE CONSOLIDÉ SFIA v3.0` |
| Baseline | SFIA v2.6 |
| Adoption v3 | **Non** |

## 1. Synthèse du challenge

Le cadrage initial (01–14) posait correctement le Project OS, les rôles, le dual-channel et la réutilisation OPS1/CT.
**Écarts challengés :**

| Écart | Observation | Correction candidate |
|-------|-------------|----------------------|
| Applicabilité floue | v3 pouvait sembler « docs + Studio un jour » | Studio-native strict (15) |
| Template Cursor encore pivot | Héritage v2.6/CT | ExecutionContract = pivot ; template = projection/fallback (19) |
| Trop Markdown-centré | Risque SoT unique narrative | 5 couches info (17) |
| Trajectoire « produit sous v2.6 puis v3 » | Sous-estime co-design defs | Option **D** co-design borné (ci-dessous) |
| Parcours UX | Liste d’écrans sans enforcement | Parcours = projection doctrine (16) |
| Adoption | Confusion docs validés = baseline | Statuts V3-DOCUMENTED…ADOPTED (21) |

## 2. Décisions déjà validées (humaines, hors adoption)

| Type | Contenu |
|------|---------|
| **Décision validée** | Ouverture cadrage v3 (GO précédent) |
| **Décision validée** | Complément cadrage Studio-native / IA / artefacts (GO actuel) |
| **Décision validée** | v2.6 reste baseline opérationnelle |
| **Non décision** | Adoption v3, modif canoniques, implémentation |

## 3. Options trajectoire (rechallenge)

| Option | Bénéfices | Risques | Rework |
|--------|-----------|---------|--------|
| A Produit d’abord | Valeur UI rapide | Doctrine papier retardée ; rework defs | Moyen-haut |
| B Doctrine d’abord | Clarté | Architecture papier ; touche `method/` gated | Haut délai |
| C Parallel tracks | Isolation | Divergence ; claims confus | Moyen |
| **D Co-design borné** | Chaque incrément lie parcours+doctrine+def+SQL+UI+GPT+effet+preuve+gate | Discipline ; plus lent au début | **Bas** si tenu |

## 4. Recommandation candidate (≠ décision)

**Option D — co-design borné**, compatible coexistence v2.6 :

Chaque incrément cible valide simultanément : un parcours · un élément doctrinal · une définition structurée · un état SQL · une projection Studio · une interaction GPT · une règle d’effet · une preuve · une décision humaine.

Les capacités CT/OPS1 restent le **laboratoire d’exécution** en modes 2–3, sans claim v3 adopté.

## 5. Architecture documentaire consolidée

- Couches 1–5 (17)
- Hiérarchie sources (17)
- Matrice doctrine→runtime (18)
- JSON/Schema + SQL + Excel + restitutions + Cursor projection (19)
- Modes & migration (20)
- Éligibilité (21)

## 6. Vertical slice révisée (20 étapes)

1 Créer projet Studio · 2 Responsable humain · 3 Mode méthodo · 4 Cycle cadrage · 5 Charger doctrine+defs · 6 Conversation guidée · 7 Persister SQL objets · 8 Générer/importer artefact · 9 Décision humaine · 10 ActionCandidate · 11 ExecutionContract · 12 Projection Cursor · 13 Exécution · 14 Preuves · 15 Validation · 16 Restitution · 17 Transition proposée · 18 Décision humaine · 19 MAJ états · 20 Audit

**Succès :** bout en bout auditable sans free-chat ; sans modif `method/` ; sans claim ADOPTED.
**Anti-claims :** pas MVP ; pas baseline ; pas multi-tenant requis.

## 7. Risques / réserves / dette

| Id | Contenu |
|----|---------|
| V3-R01 | AF-Option C vs orchestration — reconfirmer |
| V3-R02 | Working tree CT dirty |
| V3-R03 | Live CT moteur SFIA ouvert |
| V3-R04 | Sur-modélisation états |
| V3-R05 | Dual-run v2.6/v3 trop long |
| V3-R06 | Excel traité à tort comme SoT |
| V3-R07 | Template MD encore utilisé comme pivot par habitude |

**Dette :** framing hors method/ ; pas de fichiers Schema réels ; pas SQL ; UI OPS1 ≠ cockpit.

## 8. Décisions humaines requises

1. Valider cadrage consolidé (`GO VALIDATION CADRAGE CONSOLIDÉ SFIA v3.0`).
2. Valider Studio-native + modes 1–5.
3. Valider Option D (ou A/B/C).
4. Valider 5 couches info + hiérarchie sources.
5. Valider déclassement template MD comme pivot d’exécution v3.
6. Valider JSON-first + SQL état.
7. Valider Excel non canonique.
8. Valider slice 20 étapes.
9. Valider chaîne V3-DOCUMENTED…ADOPTED.
10. Prioriser vs validation live CT.

## 9. Décisions non prises

Adoption · modif v2.6 · code · migrations · commit/PR · cleanup · production claims.

## 10. Verdict

**SFIA v3.0 CONSOLIDATED FRAMING READY — HUMAN DECISION REQUIRED**

```

## 7. Fichiers modifiés (contenu complet post-consolidation)

### `projects/sfia-studio/sfia-v3-framing/README.md`

```markdown
# SFIA v3.0 — Cadrage Studio Project Operating System (consolidé)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidat consolidé** — **non** baseline |
| **Baseline opérationnelle** | **SFIA v2.6** |
| **Gates consommés** | Ouverture cadrage · Complément Studio-native / journeys / IA |
| **Gate suivant** | `GO VALIDATION CADRAGE CONSOLIDÉ SFIA v3.0` |
| **Branche** | `delivery/sfia-studio-control-tower-fast-track` |
| **HEAD** | `32e5271842b9a344a7e292614675c27ea8ed941b` |

> **Anti-claims :** v3 non adoptée ; canoniques v2.6 non modifiées ; pas d’implémentation ; pas de JSON/SQL/XLSX/PPTX réels ; travaux CT préservés.

## Intention consolidée

SFIA v3.0 est une doctrine **Studio-native** : doctrine + modèle opératoire + information + contrats + workflow + UX + orchestration — applicable seulement lorsque Studio pilote réellement projet→audit.

## Index

| # | Fichier |
|---|---------|
| 01–14 | Cadrage initial (mis à jour 01, 08–14) |
| 15 | Applicabilité Studio-native & modes |
| 16 | Parcours utilisateurs & enforcement |
| 17 | Architecture information / artefacts |
| 18 | Matrice doctrine → runtime |
| 19 | Stratégie JSON/SQL/Excel/slides/Cursor |
| 20 | Coexistence v2.6 / v3.0 |
| 21 | Éligibilité & gates d’adoption |
| 22 | Challenge consolidé & decision pack |

## Recommandation trajectoire (candidate)

**Option D — co-design borné** (voir 22) : chaque incrément lie parcours + doctrine + définition + état + UI + GPT + effet + preuve + gate.

## Verdict

**SFIA v3.0 CONSOLIDATED FRAMING READY — HUMAN DECISION REQUIRED**

```

### `projects/sfia-studio/sfia-v3-framing/01-sfia-v3-product-vision-and-positioning.md`

```markdown
# 01 — Vision produit et positionnement SFIA v3.0

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Baseline active | SFIA v2.6 |
| Gate | Ouverture + complément cadrage SFIA v3.0 |

## 0. Applicabilité Studio-native (complément)

**SFIA v3.0 n’est pas** le modèle manuel ChatGPT → prompt → copier-coller Cursor → retour ChatGPT (cela reste **v2.6 / legacy**).

**SFIA v3.0 (candidat)** n’est applicable que si Studio pilote : projet, cycle, contexte, décisions, actions, exécutions, preuves, validations, transitions (détail : doc 15).

Doctrine et produit sont **couplés** : v3 = doctrine + opératoire + information + contrats + workflow + UX + orchestration.

## 1. Positionnement exact candidat

**SFIA Studio v3.0 (candidat)** est un **Project Operating System** : système de pilotage projet bout en bout, assisté par IA et gouverné par la méthode SFIA — **exécutée via Studio**, avec définitions versionnées dans Git et état vivant en SQL.

Il n’est **pas** :

- un chat généraliste ;
- une simple interface ChatGPT ;
- un lanceur de prompts ;
- un écran de monitoring isolé ;
- une duplication de la doctrine SFIA en code.

Il **est** (candidat) :

- le cockpit où un utilisateur humain crée, reprend, pilote et clôture un projet ;
- le lieu où les cycles sont ouverts, conduits, validés et enchaînés ;
- la façade où les décisions humaines structurantes sont demandées, tracées et appliquées ;
- l’orchestrateur visible des effets déterministes (outils, Cursor, Git) sous contrats ;
- le point de collecte des preuves, validations, réserves et capitalisations.

## 2. Problème que v3.0 adresse

| Problème | Observation actuelle (v2.6 + Control Tower local) |
|----------|--------------------------------------------------|
| Fragmentation outils | ChatGPT, Cursor, Git, GitHub, Studio OPS1 encore partiellement séparés |
| Conversation hors projet | Risque de « chat libre » sans rattachement projet/cycle |
| Doctrine ≠ runtime | Méthode Markdown riche ; runtime encore partiel (OPS1/CT) |
| Démonstration produit | Vertical slice technique ≠ parcours produit complet (créer projet → clôturer) |
| Terminologie individu-centrique | « Morris décide » doit devenir rôle de décideur humain habilité |

## 3. Vision formulée

> SFIA Studio permet de **piloter un projet** de bout en bout sous méthode SFIA : qualifier, décider, exécuter sous contrat, prouver, valider, enchaîner — avec GPT qui raisonne librement dans un **contexte contraint**, et des effets **déterministes** validés par des policies et gates humains.

## 4. Ce que le produit doit permettre

1. Créer un projet
2. Reprendre un projet existant
3. Importer / consulter un projet finalisé
4. Ouvrir un cycle
5. Reprendre un cycle
6. Guider une réflexion (sans questionnaire rigide)
7. Consulter les sources projet et canoniques
8. Qualifier une demande
9. Préparer une décision humaine
10. Compiler une action
11. Orchestrer Cursor sous contrat
12. Contrôler Git (lecture / écritures gouvernées)
13. Collecter les preuves
14. Valider un résultat
15. Proposer la transition suivante
16. Capitaliser

## 5. Règle conversationnelle structurante

Toute conversation est rattachée à au moins un objet : **projet**, **cycle**, **décision**, **action**, **rapport** ou **réserve**.

Il n’existe **pas** de conversation libre sans contexte projet (sauf opérations bornées de création / import de projet).

## 6. Séparation liberté / contrainte

| Libre | Contraint |
|-------|-----------|
| Formulation naturelle GPT | Contexte injecté (sources, état, gates) |
| Analyse, challenge, reformulation | Outils exposés |
| Hypothèses et recommandations | Transitions d’état |
| Questions de clarification | Effets (écriture, Cursor, remote) |

## 7. Relation Control Tower

Control Tower (66–74) prouve une **chaîne d’intégration** (Studio ↔ GPT ↔ Git ↔ GitHub read ↔ Cursor).
v3.0 **généralise** cette chaîne en **système de projet**, pas seulement en démonstrateur d’outil.

## 8. Décisions humaines requises (hors validation ici)

- Valider ou reformuler cette vision (`GO VALIDATION CADRAGE CONSOLIDÉ SFIA v3.0`).
- Confirmer que v2.6 reste baseline jusqu’à un GO d’adoption v3.0 distinct.
- Valider le caractère Studio-native exclusif (15).
- Trancher Option D co-design vs A/B/C (22).

## 9. Anti-claims

- Vision **candidate**, non baseline.
- Pas d’implémentation autorisée par ce document.
- Pas de monétisation / production claim.

```

### `projects/sfia-studio/sfia-v3-framing/08-sfia-v3-executable-doctrine-and-contract-model.md`

```markdown
# 08 — Doctrine exécutable et modèle de contrats (candidat, consolidé)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** |
| Voir aussi | 17 (couches) · 18 (matrice) · 19 (JSON/SQL/Cursor) |

## 1. Cinq couches (remplace l’ancien modèle A/B/C trop étroit)

| Couche | Contenu | Format | SoT |
|--------|---------|--------|-----|
| 1 Doctrine humaine | Principes, rationale | Markdown | Git |
| 2 Définitions exécutables | Cycles, states, gates, policies… | JSON (+ Schema) ; YAML authoring optionnel | Git |
| 3 État opérationnel | Instances, décisions, attempts… | SQL | SQL (+ refs digests Git) |
| 4 Artefacts métier | RACI, risques, backlog… | XLSX/CSV/PJ | Fichier + meta SQL — **pas doctrine** |
| 5 Restitutions | Slides, PDF, rapports | Générés | Dérivé — **pas SoT** |

L’ancien découpage A/B/C (MD / contrats runtime / projections) **subsiste** comme vue simplifiée : A⊂1, B⊂2+3, C⊂5 (+ projections GPT/Cursor).

## 2. Flux de vérité consolidé

```
Git (doctrine MD + defs JSON)
   ↓ load digests
SQL (état + HumanDecision)
   ↓ + artefacts
Projections (UI, GPT context, Cursor prompt, slides, review pack)
   ↓ effects gated
Evidence → Git/SQL → re-lecture
```

## 3. Pivot d’exécution Cursor (évolué)

**Avant (v2.6/CT) :** Template MD pivot.
**Cible v3 candidate :** `ExecutionContract` pivot ; template MD = documentation / projection / fallback / legacy.

Chaîne :

`Doctrine + CycleDefinition + ProjectState + HumanDecision + ActionCandidate + Policies → ExecutionContract → Cursor Prompt Projection → Cursor`

## 4. Anti-patterns

| Anti-pattern | Contre-mesure |
|--------------|---------------|
| Triple maintenance MD/JSON/TS | Matrice 18 + Schema SoT machine |
| Excel comme doctrine | Couche 4 seulement |
| Slides comme SoT | Couche 5 générée |
| Prompt libre | Projection depuis contrat |
| Chat = GO | GateInstance SQL |

## 5. Contrats minimaux (inchangés + étendus)

SourceRef, ContextContract, ProposalContract, CompilationContract, GateContract, **ExecutionContract (pivot)**, EvidenceContract, TransitionContract, plus définitions Cycle/State/Policy en Git JSON (non créées ici).

## 6. Review pack / handoff

Héritage v2.6 conservé comme **restitution/preuve process** ; produits par Studio en mode v3, pas remplacés par UI seule.

## 7. Décisions humaines requises

- Valider 5 couches.
- Valider ExecutionContract comme pivot Cursor v3.
- Valider JSON-first pour defs.

```

### `projects/sfia-studio/sfia-v3-framing/09-sfia-v3-functional-architecture.md`

```markdown
# 09 — Architecture fonctionnelle candidate SFIA v3.0

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** |

## 0. Complément Studio-native

Cette architecture **n’est revendiquable en v3** que si les capacités minimales du mode Studio-native (doc 15) sont présentes. Sinon : modes v2.6 / transitionnel / fallback — sans claim v3.

Ajouts moteurs / services d’information :

- **Definition Registry** (charge JSON/Schema Git)
- **Artifact Service** (import/export Excel/CSV)
- **Restitution Generator** (slides/PDF/MD)
- **Mode Controller** (v2.6 / transition / v3 / fallback)

## 1. Vue d’ensemble

```
Humain (utilisateur / responsable / décideur / approbateur)
  → SFIA Studio (cockpit + façade + Mode Controller)
    → Project State Engine
    → Cycle Router (+ CycleDefinitions Git)
    → Canonical Context Engine (+ Definition Registry)
    → Guided Reasoning Engine / GPT
    → Decision Engine  OR  Action Compiler
    → Gate humain
    → Execution Orchestrator (ExecutionContract pivot)
    → Cursor Prompt Projection → Cursor
    → Git / GitHub
    → Validation Engine
    → Transition Engine
    → Artifact / Restitution services
    → Studio (feedback)
  ↔ Audit Trail · Source Resolver · Policy Engine
  ↔ SQL operational store
```

## 2. Moteurs — responsabilités

| Moteur | Responsabilité | Entrées | Sorties | Décision humaine |
|--------|----------------|---------|---------|------------------|
| Project State Engine | États projet, lifecycle | events, decisions | ProjectState | clôture / archive |
| Cycle Router | Type/profil/sources | intention, context | cycle plan | si ambigu |
| Canonical Context Engine | Charger doctrine/projet | allowlist paths | SfiaCanonicalContext | non |
| Guided Reasoning Engine | Dual-channel GPT | context, message | prose + control | non (sauf gate) |
| Decision Engine | DecisionRequest / gates | options, risks | HumanDecision records | **oui** |
| Action Compiler | Proposal → Candidate | proposal+context | CompilationResult | non |
| Execution Orchestrator | Contrat → Cursor | GO+contract | Attempt+Evidence | GO avant run |
| Validation Engine | Critères / preuves | evidence | ValidationResult | validation structurante |
| Transition Engine | Enchaînements | validation, state | TransitionProposal | transitions structurantes |
| Source Resolver | Résoudre fichiers | refs | SourceRef | non |
| Policy Engine | Allow/deny ops/paths | request | allow/deny | policy change = humaine |
| Audit Trail | Corrélation / immutabilité | all | events | non |

## 3. Flux nominaux

### 3.1 Clarification
Message → Context → GPT → `clarification_required` → UI questions → (boucle) — **aucun effet**.

### 3.2 Décision
Analyse/options → DecisionRequest → Gate UI → HumanDecision → état mis à jour → audit.

### 3.3 Action
ActionProposal → Compiler → ActionCandidate → Gate → Contract → Cursor → Evidence → reinjection → analyse.

### 3.4 Blocage
Policy deny / stale / missing authority → `blocked` + raisons + reprise guidée.

### 3.5 Correction
CHANGES_REQUESTED / refine candidate / nouveau proposal — sans élargissement silencieux.

### 3.6 Validation
Evidence → Validation Engine → PASS/FAIL/PASS_WITH_RESERVES → décideur si besoin.

### 3.7 Clôture / capitalisation
Cycle COMPLETED → Transition CAPITALIZED / Project CLOSED — gates selon criticité.

### 3.8 Reprise
Session/projet PAUSED → reload context digests → requalify si stale → continuer.

## 4. Limites de cette architecture

- Candidate : pas de choix technique figé (DB, bus, multi-tenant).
- Ne remplace pas v2.6.
- Ne prescrit pas MCP universel.
- Réutilise la séparation cockpit / policies / exécuteurs (AF-Option C reformulée).

## 5. Observabilité fonctionnelle

États visibles : projet, cycle, contexte, proposal, compilation, gate, contrat, exécution, validation, transition.
Terminal UX candidat : `DECISION_REQUIRED` | `BLOCKED` | `EXECUTING` | `VALIDATING` | `READY_NEXT`.

## 6. Décisions humaines requises

- Valider ce schéma fonctionnel.
- Valider la liste des moteurs (fusion possibles : Decision⊂Transition ?).
- Trancher la frontière Studio UI vs services moteurs (monolithe logique vs packages).

```

### `projects/sfia-studio/sfia-v3-framing/10-sfia-v3-technical-architecture-candidate.md`

```markdown
# 10 — Architecture technique candidate (non implémentée)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** — non implémentée |
| Interdit ici | code, deps, migrations, fichiers Schema |

## 0. Clarifications consolidation

- SQL = état vivant (couche 3), pas doctrine.
- JSON Schema = validation defs Git (couche 2) — **documenté**, non créé.
- Excel/slides = artefacts/restitutions — pas SoT.
- Template Cursor MD = fallback/legacy ; pivot = ExecutionContract.
- Acquis OPS1/CT = modes 2–3, pas V3-ADOPTED.

## 1. Composants candidats

| Composant | Rôle | Frontière |
|-----------|------|-----------|
| Studio Web App | UI cockpit + mode badge | browser |
| API / Server Actions | orchestration façade | serveur |
| Definition Registry | load JSON/Schema digests | serveur |
| Context Service | doctrine + projet | serveur |
| Conversation Service | GPT + tools | serveur |
| Policy Service | allow/deny | serveur |
| Execution Service | ExecutionContract + Cursor | serveur + worktrees |
| Artifact Service | import/export XLSX/CSV | serveur |
| Restitution Service | slides/PDF/MD | serveur |
| Evidence Service | postcheck + reports | serveur |
| Audit Store | events | SQL |
| Project Store | projects/cycles/state | SQL + Git docs |
| Mode Controller | v2.6/transition/v3/fallback | serveur |
| Git / GitHub / Cursor Adapters | I/O bornés | process |

## 2. Données

- **Git** : doctrine + docs projet + preuves commitables.
- **DB** : états runtime, sessions, events, contracts (OPS1 SQLite = proto).
- **Secrets** : serveur only ; jamais dans contexte GPT.
- **Worktrees** : isolation exécution (acquis OPS1).

## 3. Événements

Bus logique (au minimum table events) : `PROJECT_*`, `CYCLE_*`, `SFIA_*`, `TOOL_*`, `GATE_*`, `EXECUTION_*`, `VALIDATION_*`, `TRANSITION_*`.

## 4. Sécurité technique candidate

- AuthN/AuthZ multi-user (futur) ; proto single-operator aujourd’hui.
- Permissions par rôle (doc 03).
- Redaction secrets.
- Path containment.
- Timeout / sandbox Cursor.
- CONTEXT_STALE.
- Pas de shell libre GPT.

## 5. Multi-utilisateurs / permissions (cadrage)

Hors vertical slice immédiat, mais à prévoir :

- isolation projets ;
- habilitations de gate ;
- délégation / expiration ;
- non-répudiation des HumanDecision.

## 6. Inventaire acquis OPS1 / Control Tower / SFIA engine

| Acquis | Verdict candidat |
|--------|------------------|
| GitLocalReadAdapter | **Réutilisable** (étendre writes gated plus tard) |
| GitHubReadAdapter | **Réutilisable** ; write = nouveau gated |
| Tool Router | **Réutilisable** / isoler en Policy+Router |
| Session / event store | **Adapter** → Project/Cycle first-class |
| ActionCandidate + actionGate | **Réutilisable** cœur gouvernance |
| Allowlist | **Réutilisable** |
| contractHash + revalidation | **Réutilisable** |
| Cursor adapter + orchestrator | **Réutilisable** |
| Report + reinjection | **Réutilisable** |
| Canonical context loader/compiler | **Réutilisable** / généraliser multi-projet |
| Ops1SessionScreen | **Expérimental UI** → remplacer par cockpit projet |
| Fixture markers | **Test-only** — pas produit |

## 7. Résilience / reprise

- Rejouer lecture contexte par digests.
- Interrompre EXECUTING → état BLOCKED + evidence partielle.
- Pas d’auto-retry silencieux (héritage I5/I6).
- Continuation = nouvelle CycleInstance / session liée (parentId).

## 8. Évolutivité

- Commencer mono-opérateur + SQLite acceptable pour slice.
- Prévoir extraction services quand multi-projets / multi-users l’exige.
- Éviter plateforme MCP générique comme prérequis (Option C hybride validée CT).

## 9. Décisions humaines requises

- Valider réutilisation massive OPS1 vs rewrite.
- Trancher horizon multi-user.
- Confirmer « pas de MCP universel » pour la prochaine phase.

```

### `projects/sfia-studio/sfia-v3-framing/11-sfia-v3-ux-information-architecture.md`

```markdown
# 11 — UX / architecture d’information (candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** |
| Hors scope | Maquettes HF, Figma |

## 0. Enforcement doctrinal (complément)

L’utilisateur ne choisit pas un workflow hors méthode en mode v3.
Studio propose les parcours pertinents selon ProjectState/CycleState (doc 16).
Badge de **mode** (v2.6 / transition / v3 / fallback) toujours visible.

## 1. Principes UX candidats

1. **Cockpit avant chat** — conversation = panneau du cycle.
2. **État toujours visible** — projet, cycle, mode, gates, contexte.
3. **Décision explicite** — gates UI ; jamais « GO » chat seul.
4. **Preuves à portée** — diffs, digests, artefacts, restitutions.
5. **Progressive disclosure** — canal de contrôle compact.
6. **Fail-closed perceptible** — blocked/stale/denied + fallback mode.
7. **Parcours conditionnés** — actions disponibles = doctrine × état.
8. **Pas de dashboard fourre-tout**.

## 2. Architecture d’information

```
Accueil
├── Créer projet
├── Reprendre projet
└── Consulter / importer finalisé
Projet (cockpit)
├── Trajectoire
├── Cycles (liste)
├── Cycle actif
│   ├── Contexte SFIA
│   ├── Conversation guidée
│   ├── Décisions
│   ├── Actions
│   ├── Exécutions
│   ├── Preuves
│   └── Validation / transition
├── Risques / réserves
├── Capitalisation
└── Admin / rôles (futur)
```

## 3. Points d’entrée

| Entrée | Destination | Précondition |
|--------|-------------|--------------|
| Nouveau projet | Wizard léger + GuidedSession FRAMING | Auth |
| Reprendre projet | Cockpit projet | Project existant |
| Initier cycle | Cycle Router + qualification | Project ACTIVE/FRAMING |
| Poursuivre cycle | Cycle actif | CycleInstance ouverte |
| Traiter décision | Panneau DecisionRequest | DECISION_REQUIRED |
| Analyser résultat | Preuves + reinjection | Evidence disponible |
| Valider | Validation panel | VALIDATING |
| Clôturer | Transition CLOSE | Critères + gate |
| Capitaliser | CapitalizationRecord | COMPLETED |

## 4. Écrans candidats (responsabilité)

| Vue | Une job |
|-----|---------|
| Accueil | Choisir créer/reprendre |
| Création projet | Identité + baseline + intention |
| Cockpit projet | Santé + prochaines décisions |
| Trajectoire | Jalons candidats vs validés |
| Cycles | Historique + états |
| Cycle actif | Conduire le travail (chat + contrôle) |
| Décisions | Gates et DecisionRequests |
| Actions | ActionCandidates |
| Exécutions | Attempts + statut |
| Preuves | Evidence browser |
| Validation | ValidationResult |
| Réserves | Classification + suivi |
| Capitalisation | REX / assets |
| Admin | Rôles / permissions (futur) |

## 5. Conversation dans le cycle

- Panneau latéral ou inférieur, **jamais** page blanche type ChatGPT seul.
- Afficher : `contextId`, profil, gates fermés, ops interdites.
- Après proposal : panneau compilation + ActionCandidate.
- Boutons fixture **hors** parcours live produit.

## 6. Accessibilité / i18n (cadrage)

- Contrastes, focus gates, labels explicites.
- FR d’abord ; i18n plus tard.
- Pas de dépendance au seul code couleur pour blocked/GO.

## 7. Écart vs UI OPS1 actuelle

OPS1 = excellent **banc d’essai**.
v3.0 UX = **produit projet** ; l’écran session unique devient insuffisant.

## 8. Décisions humaines requises

- Valider IA et points d’entrée.
- Trancher densité du canal de contrôle.
- Prioriser vues du vertical slice (doc 13).

```

### `projects/sfia-studio/sfia-v3-framing/12-sfia-v2.6-to-v3-gap-analysis.md`

```markdown
# 12 — Analyse d’écart SFIA v2.6 → v3.0 (candidat)

| Champ | Valeur |
|-------|--------|
| Baseline | **v2.6 officielle** |
| v3.0 | **Trajectoire candidate uniquement** |

Légende : **C** conserver · **A** adapter · **R** remplacer · **D** déprécier · **N** créer.

## Matrice par domaine

| Domaine | Classe | Raison | Impact | Risque | Gate humain |
|---------|--------|--------|--------|--------|-------------|
| Doctrine Markdown v2.6 | **C** | Baseline opérationnelle | Stable | Divergence si fork précoce | Adoption v3 distinct |
| Applicabilité Studio-native | **N** | v3 ≠ manuel ChatGPT→Cursor | Produit+méthode | Claim abusif | Validation consolidée |
| Rôles (« Morris L0 ») | **A** | Rôles génériques | Docs + UI | Confusion transition | Validation cadrage |
| Operating model | **A** | Studio-native loop | Process | Perte clarté | Validation archi |
| Cycles / routing | **C+A** | Garder routage ; defs JSON | Méthode+produit | Sur-fusion | Validation cycles |
| Template Cursor pivot | **A/D** | Pivot → ExecutionContract ; MD fallback | Runtime | Habitudes legacy | Validation contrats |
| Formats info (JSON/SQL/Excel/slides) | **N** | 5 couches | Données | Multi-SoT | Validation IA |
| Profils / blocs / gates | **C/A** | UI + rôles | Gouvernance | Chat=GO | Validation gouvernance |
| L0–L5 automation | **A** | Redécoupe domaines | Automation | L5 décisionnel | Validation automation |
| Review pack / handoff | **C** | Preuve revue | Process | Pack incomplet | — |
| Architecture Studio / UX | **N/A** | Cockpit + enforcement | Produit | Chat-only | Validation UX |
| Coexistence modes | **N** | Dual-run contrôlé | Ops | Dual trop long | Validation migration |
| Adoption statuses | **N** | DOCUMENTED…ADOPTED | Gouvernance | Docs≠baseline | GO ADOPTION |

## Synthèse consolidation

- Canoniques v2.6 **intactes**.
- Framing v3 **à côté** (`sfia-v3-framing/`).
- Runtime CT = laboratoire modes 2–3.
- Option trajectoire challengée : **D co-design** (22).

## Dette anticipée

- Double narration v2.6 opérationnelle + v3 candidate.
- Terminologie mixte pendant transition.
- UI OPS1 vs IA v3.
- Schémas runtime encore locaux à `app/lib/ops1/sfia`.

## Décisions humaines requises

- Approuver cette matrice.
- Décider l’ordre : produit Studio d’abord vs lots méthode v3 d’abord (recommandation doc 14).
- Ne **pas** merger de doctrine v3 dans `method/` sans GO d’adoption.

```

### `projects/sfia-studio/sfia-v3-framing/13-sfia-v3-target-vertical-slice.md`

```markdown
# 13 — Vertical slice produit cible (révisée, candidat)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** |
| Objectif | Valeur **produit Studio-native**, pas seulement chaîne d’outils |

## 1. Slice révisée (20 étapes)

1. Création d’un projet dans Studio
2. Attribution d’un responsable humain
3. Sélection du mode méthodologique (v2.6 assisté / transition / v3 candidate)
4. Ouverture d’un cycle de cadrage
5. Chargement doctrine + définitions structurées (digests)
6. Conversation guidée GPT (dual-channel)
7. Persistance SQL des objets de cadrage
8. Génération ou import d’un artefact métier (ex. RACI/risques)
9. Décision humaine (gate UI)
10. Création ActionCandidate
11. Compilation → ExecutionContract
12. Projection prompt Cursor
13. Exécution Cursor bornée
14. Collecte de preuves
15. Validation
16. Génération d’une restitution (rapport/slides MD)
17. Transition proposée
18. Décision humaine sur transition
19. Mise à jour états projet/cycle
20. Audit corrélé bout en bout

## 2. Comparaison CT / OPS1

CT prouve outils + ActionCandidate + Cursor + rapport.
Cette slice ajoute : **projet first-class**, mode méthodo, SQL cadrage, artefact, restitution, transition projet, audit OS — sans claim V3-ADOPTED.

## 3. Critères de succès

- Mode affiché ; pas de free-chat.
- Digests doctrine/defs tracés.
- Gate ≠ phrase conversationnelle.
- ExecutionContract hashé avant Cursor.
- Artefact non traité comme doctrine.
- Restitution régénérable depuis sources.
- Aucune modif `method/` / `prompts/`.
- Claim au plus « v3 candidate / transition ».

## 4. Anti-claims

Non implémentée · pas MVP · pas baseline · pas multi-user requis · pas génération réelle XLSX/PPTX dans le cadrage.

## 5. Prérequis gates

`GO VALIDATION CADRAGE CONSOLIDÉ` puis GO plan/exécution slice distincts.

```

### `projects/sfia-studio/sfia-v3-framing/14-sfia-v3-roadmap-and-decision-pack.md`

```markdown
# 14 — Roadmap et decision pack (aligné consolidation)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat consolidé** — voir aussi **22** (pack maître) |
| Gates consommés | Ouverture cadrage · Complément Studio-native |
| Gate suivant | `GO VALIDATION CADRAGE CONSOLIDÉ SFIA v3.0` |

## 1. Trajectoire

La recommandation initiale « C/A-hybride produit sous v2.6 » est **challengée**.
**Recommandation consolidée candidate :** **Option D — co-design borné** (détail 22), avec coexistence modes (15, 20).

## 2. Jalons mis à jour

| Jalon | Contenu | GO |
|-------|---------|-----|
| J0 | Ouverture cadrage | Consommé |
| J0b | Complément Studio-native / IA / artefacts | **Consommé** |
| J1 | Validation cadrage **consolidé** | `GO VALIDATION CADRAGE CONSOLIDÉ SFIA v3.0` |
| J2 | Plan slice 20 étapes | GO plan |
| J3–J4 | Implémentation + validation live slice | GO exécution / live |
| J5 | Capitalisation → defs JSON sous sandbox puis method | GO capitalisation |
| J6 | V3-ELIGIBLE → **V3-ADOPTED** | **GO ADOPTION** |
| — | commit/push/PR | Fermés |

## 3. Décisions humaines requises

Voir liste consolidée dans **22 §8** (applicabilité, Option D, 5 couches, ExecutionContract pivot, JSON/SQL, Excel, slice, statuts adoption, priorité vs live CT).

## 4. Non prises / anti-claims

Inchangés : pas d’adoption, pas de modif v2.6, pas d’implémentation, pas de fichiers runtime Schema/SQL/XLSX.

## 5. Verdict

Pointer vers **22** :
**SFIA v3.0 CONSOLIDATED FRAMING READY — HUMAN DECISION REQUIRED**

```

## 8. Réserves / dette / anti-claims

V3-R01…R07 · dette framing hors method/ · pas de Schema/SQL/XLSX réels · anti-claims : pas adoption, pas implémentation, pas MVP

## 9. État Git final

```
?? projects/sfia-studio/sfia-v3-framing/
...
32e5271842b9a344a7e292614675c27ea8ed941b
delivery/sfia-studio-control-tower-fast-track
```

**VERDICT :** SFIA v3.0 CONSOLIDATED FRAMING READY — HUMAN DECISION REQUIRED

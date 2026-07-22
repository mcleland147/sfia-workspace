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

## 6. Clôture

JSON-first, SQL état, Excel non canonique, ExecutionContract pivot : **décisions de cadrage** (R1/R3/D2/D8 liés).  
Dette : schémas JSON réels → V3-MODELED.

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

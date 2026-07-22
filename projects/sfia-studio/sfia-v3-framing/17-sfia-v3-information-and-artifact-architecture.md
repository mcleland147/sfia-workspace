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

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

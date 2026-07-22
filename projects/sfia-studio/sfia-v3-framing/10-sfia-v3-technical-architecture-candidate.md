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

---

## Clôture cadrage (D1–D8)

**Statut :** intégration clôture — réserves R1–R5 **clôturées au cadrage** ; Option D **validée** comme trajectoire de conception ; ReviewBundle hybride **décidé** (23) ; template Cursor **non pivot** v3 (ExecutionContract) ; pas de migration générale (28) ; maturité **V3-DOCUMENTED** seulement.

**Anti-claims :** SFIA v3.0 **non adoptée** ; baseline **v2.6** ; **aucune** implémentation autorisée par cette clôture.

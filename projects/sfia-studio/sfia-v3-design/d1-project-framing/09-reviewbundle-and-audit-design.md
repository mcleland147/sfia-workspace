# 09 — ReviewBundle and audit design

## 1. CycleReviewBundle D1

### Moment
- Build : dès VALIDATING / fin cadrage (DRAFT)  
- Progressive : ajouter refs à chaque livrable (trajectory, decisions, context, validation results, reserves)  
- Seal : décideur après resolve+verify  
- Export : Markdown handoff optionnel (baseline v2.6 encore active)  
- Archive : après COMPLETED  

### Règle
**MODIFIED CONTENT MUST BE RESOLVABLE AND VERIFIED**

Même sans code modifié, résoudre : docs cadrage projet, décisions, trajectoire, contexte, validation results, réserves, audit refs.

### Pipeline
1. Review Service collecte refs  
2. Git Adapter / Persistence résolvent contenu  
3. sha256 digests  
4. ValidationResults struct  
5. Seal → immutable payload + state SEALED  
6. Audit CYCLE_REVIEW_SEALED  
7. CompleteCycle autorisé  

### Erreurs / reprise
- UNRESOLVED_REF / DIGEST_MISMATCH → rester DRAFT  
- Retry reload context puis rebuild  
- Pas de seal partiel silencieux  

## 2. Responsabilités

| Service | Rôle |
|---------|------|
| Review Service | orchestration build/seal |
| Git Adapter | blobs/paths |
| Context Service | snapshot ref + digests |
| Decision Service | DR/HD refs |
| Audit Service | event ids referenced |

## 3. Audit append-only

Tous eventTypes modeled doc 06.  
Champs communs AuditEvent schema.  
Redaction : pas d’email, pas de secrets, pas de prose complète si flagged.  
CorrelationId = parcours utilisateur ; CausationId = event parent.

## 4. Contrôles obligatoires au seal

| Contrôle | Fail |
|----------|------|
| Resolve all refs | block seal |
| Verify digests | block seal |
| Accessibility not `missing` for required | block |
| HumanVerdict present for completion path | block complete |
| AuditReferences non-empty for sealed cycle | warn E1 / policy candidate |

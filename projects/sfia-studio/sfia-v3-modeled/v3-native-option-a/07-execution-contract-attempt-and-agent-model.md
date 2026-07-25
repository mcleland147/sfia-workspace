# 07 — ExecutionContract, Attempt et agents

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise · **T-A4 supersession rework aligned** |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Rework gate** | `GO MODELED REWORK OPTION A — SFIA STUDIO V3-NATIVE — T-A4 EXECUTIONCONTRACT` |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion (pack baseline)** | `0.1.0-oa` |
| **ExecutionContract schemaVersion** | `0.2.0-oa` (**breaking** vs `0.1.0-oa`) |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR CLASS/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas T-A4 RUNTIME · Pas T-A5 |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `07-execution-contract-attempt-and-agent-model.md` |
| **Schema** | `schemas/execution/execution-contract.schema.json` |

## ExecutionContract (F) — Option A single schema

Statuts (enum conservée) : draft · proposed · validated · confirmation_required · confirmed · executing · completed · failed · cancelled · superseded.

### Ownership (Morris VALIDATED)

| Tranche | Produit / possède |
|---------|-------------------|
| **T-A4** | gouvernance : draft → proposed → validated → confirmation_required → **confirmed** ; cancelled (pré-exec) ; superseded ; Build / Validate / Confirm / Supersede / Cancel(pre-exec) |
| **T-A5** | agent selection (`selectedAgentRef`) ; StartExecution ; **executing** \| **completed** \| **failed** ; Cancel post-start ; RecordExecutionResult |

T-A4 ne produit pas les statuts T-A5 ; T-A5 ne réécrit pas les états de gouvernance antérieurs.

### Versioning before/after (T-A4 rework)

| | Avant | Après |
|--|-------|-------|
| `schemaVersion` | `0.1.0-oa` | `0.2.0-oa` |
| `requiredAuthority` | string libre | enum `N1` \| `N2` \| `N3` \| `MORRIS` |
| Supersession | status `superseded` seul | `supersedesExecutionContractId` + `supersessionReason` |
| Confirm | implicite / Validate mélangé | `ConfirmExecutionContract` consomme Confirmation |
| Reverse link | — | **dérivé runtime** (une direction seulement) |

Autres objets du pack restent `0.1.0-oa` jusqu’à rework dédié.

### requiredAuthority (mapping T-A3)

| Valeur | Sens |
|--------|------|
| `N1` | Confirmation/Authority level N1 |
| `N2` | Confirmation/Authority level N2 |
| `N3` | Confirmation/Authority level N3 — **≠ Morris** ; ne confère pas `canActAsMorris` |
| `MORRIS` | N3 vérifié **et** `canActAsMorris=true` (normatif ; pas un niveau hiérarchique au-dessus de N3) |

Autorité réelle toujours via T-A3 `AuthorityResolverPort`.

### Confirmation

- Build / Validate : **ne consomment pas**
- `ConfirmExecutionContract` : **consomme** une Confirmation grantée, unique ; `confirmationRef` obligatoire si `confirmed`
- Confirmation refusée / annulée / expirée / déjà consommée → pas de `confirmed`

### Critical (R-T-A3-1 OPEN)

Cycle Critical encore `proposed` / non acknowledged → contrat **ne peut pas** atteindre `confirmed` (fail-closed). T-A4 n’ack pas le cycle.

### Décision source

Contrats structurants : ≥1 `decisionRef` accepted, même Project, non superseded à build et confirm. Après confirm, si décision source superseded → pas de nouvelle exécution T-A5 tant que contrat non superseded/cancelled.

### Supersession

- Champ forward : `supersedesExecutionContractId` (préfixe `xct:`)
- `supersessionReason` requis si supersède **ou** `status=superseded` ; **≥1 non-whitespace** (espaces/TAB/NBSP seuls invalides)
- Self-supersession : **interdit** (invariant runtime — non exprimable en Draft-07)
- Lien inverse `supersededBy*` : **non stocké** ; dérivé au runtime
- Contenu confirmé immutable ; successeur = nouvel id + version monotone

### Invariants

MD Cursor = export G seulement · adaptateur ne mute pas · caps+authority+stops obligatoires · immutable après confirm sauf supersession explicite · completed ⇒ résultats+preuves min · retry ⇒ Attempt distinct.

## ExecutionAttempt

Statuses : running · succeeded · failed · timeout · cancelled · partial.
timeout ≠ succès · partial ≠ completed par défaut. **T-A5**.

## AgentCapability vs AgentAuthority

capability ≠ authority · manque = stop (`CAPABILITY_MISSING` / `AUTHORITY_DENIED`) · agent ne redéfinit pas le contrat. Sélection agent = **T-A5**.

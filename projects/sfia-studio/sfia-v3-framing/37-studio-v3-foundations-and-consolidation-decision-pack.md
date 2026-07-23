# 37 — Pack de consolidation et fondations V3-F01…F15 (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | `doctrine-candidate` — **soumis à validation Morris** · **non adopté** · **non baseline** |
| **Maturité fondation** | `DOCUMENTED` candidate seulement |
| **Baseline opérationnelle** | SFIA **v2.6** (inchangée) |
| **Adoption v3** | **Non** |
| **Gate** | `GO CONSOLIDATION CIBLÉE — SFIA STUDIO V3 DOCTRINE` |
| **Branche** | `method/sfia-studio-v3-doctrine-consolidation` |
| **CKC guidance** | Pilote Conception fonctionnelle · candidate · aucune autorité d'exécution |
| **Anti-claims** | Pas V3-VALIDATED · Pas V3-ADOPTED · Pas READY FOR DELIVERY · Pas CKC ADOPTED · Pas décision autonome |
| **Document** | `37-studio-v3-foundations-and-consolidation-decision-pack.md` |
| **Rôle** | Registre · impact map · arbitrages · **ne valide pas** les fondations |

---

## 1. Décisions déjà validées (ne pas réécrire)

### Cadrage v3 — D1–D8

| Id | Décision |
|----|----------|
| D1 | v3 exclusivement Studio-native |
| D2 | ReviewBundle hybride |
| D3 | MD = pourquoi · JSON = quoi · SQL = état |
| D4 | Enforcement E0–E4 |
| D5 | SQL transactionnel + audit append-only |
| D6 | Maturité DOCUMENTED…ADOPTED |
| D7 | Pas de migration générale historiques |
| D8 | Option D trajectoire validée |

### UX — CC-D* (2026-07-23)

CC-D01 Option A · CC-D03 panneau vivant · CC-D05 décisions/gates · CC-D06 confirmations N1–N3 · CC-D12 fallback CKC silencieux · CC-D13 Project ≠ Cycle.

## 2. Fondations proposées V3-F01…F15 — statut

| ID | Titre | Doc | Statut Morris |
|----|-------|-----|---------------|
| V3-F01 | CKC couche cognitive | `30` | **Proposée — validation requise** |
| V3-F02 | Living Project State | `32` | **Proposée — validation requise** |
| V3-F03 | DoctrinePackage | `31` | **Proposée — validation requise** |
| V3-F04 | Épistémologie | `33` | **Proposée — validation requise** |
| V3-F05 | Chaîne conversation→exécution | `30` | **Proposée — validation requise** |
| V3-F06 | ProjectTrajectory | `32` | **Proposée — validation requise** |
| V3-F07 | Provenance / hiérarchie sources | `31` | **Proposée — validation requise** |
| V3-F08 | Contradictions | `33` | **Proposée — validation requise** |
| V3-F09 | Replanification gouvernée | `32` | **Proposée — validation requise** |
| V3-F10 | DebtItem | `35` | **Proposée — validation requise** |
| V3-F11 | AgentCapability | `34` | **Proposée — validation requise** |
| V3-F12 | Réversibilité actions | `34` | **Proposée — validation requise** |
| V3-F13 | Apprentissage contrôlé | `35` | **Proposée — validation requise** |
| V3-F14 | Artifact Completeness | `35` | **Proposée — validation requise** |
| V3-F15 | Maturité distribuée | `35` | **Proposée — validation requise** |

**Aucune fondation n'est validée Morris dans ce cycle.**

## 3. Amendement candidate du framing 11

**Observation (audit) :** tension cockpit-first vs CC-D01.
**Proposition de consolidation :** adopter **CC-D01 Option A** comme doctrine UX Studio candidate ; conserver le cockpit projet comme surface **après** création/reprise de Project.
**Statut :** unresolved jusqu'à GO VALIDATION DOCTRINE.

## 4. Impact map aval

| Fondation | Framing | Design | Modeled | Delivery | Gate suivant |
|-----------|---------|--------|---------|----------|--------------|
| F01 CKC | `30` | reconcil. intake/UX | CkcResolution schema | resolver opaque | Enrichissement CKC / modeled |
| F02 LPS | `32` | panneau CC-D03 | LivingProjectState | persist sélective | Modeled |
| F03 Package | `31` | — | DoctrinePackageManifest | pin runtime | Modeled |
| F04 Épistémologie | `33` | tags UI | Observation/Hypothesis/… | affichage | Modeled + design |
| F05 Chaîne | `30` | align CC-D* | — | flow C1–C4 | Validation doctrine |
| F06 Trajectoire | `32` | — | ProjectTrajectory | — | Modeled |
| F07 Provenance | `31` | — | ProvenanceRecord | — | Modeled |
| F08 Contradiction | `33` | banners | Contradiction | stop UI | Modeled |
| F09 Replanif | `32` | — | events | — | Modeled |
| F10 Dette | `35` | — | DebtItem | — | Modeled |
| F11 Agents | `34` | — | AgentCapability | allowlists | Modeled |
| F12 Actions | `34` | confirmations | ActionPolicy | enforce | Modeled + delivery |
| F13 Learning | `35` | — | REX records | — | Capitalisation |
| F14 Artefacts | `35` | — | ArtifactCompletenessContract | gates passage | Modeled |
| F15 Maturité | `35` | badges | maturity fields | anti-claims | Validation |

### Objets futurs à modéliser (non créés ici)

DoctrinePackage · DoctrinePackageManifest · KnowledgeSource · CkcResolution · LivingProjectState · ProjectTrajectory · Observation · Hypothesis · Recommendation · HumanDecision · Contradiction · EvidenceLink · ProvenanceRecord · DebtItem · AgentCapability · ActionPolicy · ExecutionContract · ArtifactCompletenessContract · AuditEvent.

## 5. Arbitrages Morris requis

1. Valider ou amender le pack V3-F01…F15.
2. Trancher amendement framing 11 ↔ CC-D01.
3. Autoriser enrichissement modeled (schemas) après validation.
4. Clarifier vocabulaire IMPLEMENTED CANDIDATE.
5. Décider intégration 87–89 sur `main`.
6. Prioriser D2/D3 Option D.

## 6. Réserves

| ID | Réserve |
|----|---------|
| CON-R01 | Fondations non validées |
| CON-R02 | Schemas non créés |
| CON-R03 | Design/modeled/delivery non modifiés |
| CON-R04 | UX 87–89 hors main |
| CON-R05 | Runtime ≠ Option A |
| CON-R06 | CKC onze absents (attendu) |

## 7. Trajectoire aval

1. `GO VALIDATION DOCTRINE — SFIA STUDIO V3 KNOWLEDGE-DRIVEN METHOD`
2. Puis `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3 FOUNDATIONAL CONTRACTS`

## 8. Verdict documentaire

Pack de consolidation **documenté candidat**.
**SFIA STUDIO V3 KNOWLEDGE-DRIVEN DOCTRINE DOCUMENTED — MORRIS VALIDATION REQUIRED** (au niveau pack).

# 37 — Pack fondations V3-F01…F15 et décisions Morris de validation

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Pack doctrinal **VALIDATED** pour SFIA Studio · merge `main` en attente |
| **Fondations** | **V3-F01…F15 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** (D-V3-02 · D-V3-03) |
| **Maturité** | Doctrine **VALIDATED** · non MODELED complet · non IMPLEMENTED runtime · non ADOPTED runtime |
| **Adoption v3 hors Studio** | **Non** |
| **Gates consommés** | `GO VALIDATION DOCTRINE — SFIA STUDIO V3 KNOWLEDGE-DRIVEN METHOD` · `GO PR READINESS, PUSH ET DRAFT PR — SFIA STUDIO V3 KNOWLEDGE-DRIVEN DOCTRINE` |
| **Gate suivant** | `GO MORRIS REVIEW — DRAFT PR SFIA STUDIO V3 DOCTRINE` |
| **Anti-claims** | Pas merge · Pas runtime migré · Pas READY FOR DELIVERY · Pas baseline globale · Pas suppression v2.6 du repo |
| **Document** | `37-studio-v3-foundations-and-consolidation-decision-pack.md` |

---

## 1. Décisions Morris consommées lors de la validation doctrinale

| Id | Décision validée | Impact | Action future | Gate futur | Hors périmètre PR |
|----|------------------|--------|---------------|------------|-------------------|
| **D-V3-01** | V3-F01…F15 validées comme fondations Studio v3 | Statut DOCUMENTED→**VALIDATED** doctrine | Enrichir modeled | Enrichissement modeled | Schemas |
| **D-V3-02** | Doctrine v3 **exclusive** pour Studio | Remplace toute coexistence opérationnelle | DoctrinePackage pin runtime | Modeled + delivery | Activation runtime |
| **D-V3-03** | Aucune coexistence doctrinale opérationnelle v2.6/v3 | v2.6 = historique/externe uniquement | Retrait dépendances v2.6 du fonctionnement Studio | Audit dépendances | Audit code |
| **D-V3-04** | Réévaluation des actifs existants | Conserver / adapter / remplacer / retirer / preuve historique | Cycles reconception possibles | Par couche | Refonte dans cette PR |
| **D-V3-05** | Commit · push · draft PR · handoff autorisés | Intégration Git | Review Morris · merge séparé | `GO MORRIS REVIEW` puis GO merge | Merge |

### Conséquences opérationnelles explicitement autorisées (futures)

- retrait futur de toutes les dépendances v2.6 du **fonctionnement** Studio ;
- nouvelle conception autorisée si nécessaire ;
- audit de dépendances v2.6 **requis** avant nouvelle implémentation ;
- merge restant soumis à un **GO Morris distinct**.

## 2. Fondations V3-F01…F15 — statut

| ID | Titre | Doc | Statut Morris |
|----|-------|-----|---------------|
| V3-F01 | CKC couche cognitive | `30` | **VALIDATED** |
| V3-F02 | Living Project State | `32` | **VALIDATED** |
| V3-F03 | DoctrinePackage | `31` | **VALIDATED** |
| V3-F04 | Épistémologie | `33` | **VALIDATED** |
| V3-F05 | Chaîne conversation→exécution | `30` | **VALIDATED** |
| V3-F06 | ProjectTrajectory | `32` | **VALIDATED** |
| V3-F07 | Provenance / hiérarchie sources | `31` | **VALIDATED** |
| V3-F08 | Contradictions | `33` | **VALIDATED** |
| V3-F09 | Replanification gouvernée | `32` | **VALIDATED** |
| V3-F10 | DebtItem | `35` | **VALIDATED** |
| V3-F11 | AgentCapability | `34` | **VALIDATED** |
| V3-F12 | Réversibilité actions | `34` | **VALIDATED** |
| V3-F13 | Apprentissage contrôlé | `35` | **VALIDATED** |
| V3-F14 | Artifact Completeness | `35` | **VALIDATED** |
| V3-F15 | Maturité distribuée | `35` | **VALIDATED** |

## 3. Décisions déjà validées (cadrage / UX)

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

### Amendement framing 11

**Décision de lecture :** CC-D01 Option A prévaut pour Studio.
**Action future :** aligner le texte de `11` lors d'un cycle documentaire dédié.
**Statut :** résolu pour doctrine Studio · amendement textuel `11` encore dû.

## 4. Exclusivité v3 — règles consolidées

1. Studio consomme exclusivement sa doctrine SFIA v3.
2. DoctrinePackage v3 = future source doctrinale canonique.
3. CKC résolus via doctrine v3 et sources autorisées.
4. ExecutionContract v3 = contrat natif d'exécution.
5. Export Markdown Cursor = adaptateur technique seulement.
6. v2.6 = historique / traçabilité / outillage repository actuel — **pas** doctrine produit.

## 5. Impact map aval

| Fondation | Framing | Design | Modeled | Delivery | Gate suivant |
|-----------|---------|--------|---------|----------|--------------|
| F01 CKC | `30` | reconcil. intake/UX | CkcResolution | resolver opaque | Enrichissement CKC / modeled |
| F02 LPS | `32` | panneau CC-D03 | LivingProjectState | persist sélective | Modeled |
| F03 Package | `31` | — | DoctrinePackageManifest | pin runtime | Modeled |
| F04 Épistémologie | `33` | tags UI | Observation/Hypothesis/… | affichage | Modeled + design |
| F05 Chaîne | `30` | align CC-D* | — | flow C1–C4 | Post-merge + reconception |
| F06 Trajectoire | `32` | — | ProjectTrajectory | — | Modeled |
| F07 Provenance | `31` | — | ProvenanceRecord | — | Modeled |
| F08 Contradiction | `33` | banners | Contradiction | stop UI | Modeled |
| F09 Replanif | `32` | — | events | — | Modeled |
| F10 Dette | `35` | — | DebtItem | — | Modeled |
| F11 Agents | `34` | — | AgentCapability | allowlists | Modeled |
| F12 Actions | `34` | confirmations | ActionPolicy | enforce | Modeled + delivery |
| F13 Learning | `35` | — | REX records | — | Capitalisation |
| F14 Artefacts | `35` | — | ArtifactCompletenessContract | gates passage | Modeled |
| F15 Maturité | `35` | badges | maturity fields | anti-claims | Distributed |

### Objets futurs à modéliser (non créés ici)

DoctrinePackage · DoctrinePackageManifest · KnowledgeSource · CkcResolution · LivingProjectState · ProjectTrajectory · Observation · Hypothesis · Recommendation · HumanDecision · Contradiction · EvidenceLink · ProvenanceRecord · DebtItem · AgentCapability · ActionPolicy · ExecutionContract · ArtifactCompletenessContract · AuditEvent.

## 6. Arbitrages encore ouverts (hors validation F01–F15)

1. Root exact DoctrinePackage (U2).
2. Priorité D2/D3 Option D (U3).
3. Intégration 87–89 sur `main` (U4).
4. Vocabulaire IMPLEMENTED CANDIDATE (U5).
5. Périmètre et calendrier de l'audit dépendances v2.6.

## 7. Réserves

| ID | Réserve |
|----|---------|
| VAL-R01 | Runtime / design / modeled / delivery non migrés |
| VAL-R02 | Dépendances v2.6 code non auditées |
| VAL-R03 | Schemas non créés |
| VAL-R04 | UX 87–89 hors main |
| VAL-R05 | Onze CKC détaillés absents |
| VAL-R06 | Merge soumis à GO Morris distinct |
| VAL-R07 | Amendement textuel framing `11` encore dû |

## 8. Trajectoire aval

1. `GO MORRIS REVIEW — DRAFT PR SFIA STUDIO V3 DOCTRINE`
2. GO merge distinct (si review OK)
3. Audit dépendances v2.6 (Studio)
4. `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3 FOUNDATIONAL CONTRACTS`
5. Réévaluation design / delivery / UX (D-V3-04)

## 9. Verdict documentaire

**SFIA STUDIO V3 KNOWLEDGE-DRIVEN DOCTRINE VALIDATED — DRAFT PR PENDING MERGE**

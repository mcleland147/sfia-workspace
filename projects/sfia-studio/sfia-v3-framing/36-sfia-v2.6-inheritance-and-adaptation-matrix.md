# 36 — Matrice d'héritage SFIA v2.6 → Studio v3 (candidate)

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
| **Document** | `36-sfia-v2.6-inheritance-and-adaptation-matrix.md` |
| **Complète** | framing `12` · `20` · audit handoff `c03bf49…` |

---

## 1. Matrice officielle candidate

### Inherited

| Élément | Justification Studio |
|---------|----------------------|
| Git source de vérité | D3 / OM |
| Morris décide | Gouvernance inchangée |
| Protected paths | Guardrails |
| Absence de décision automatique | Anti-L5 décisionnel |
| Complétude des livrables | Template + review pack |
| PR readiness | Cycle 13 |
| Post-merge | Cycle 14 |
| Capitalisation | Cycle 15 |
| Review handoff (preuve externe / résilience) | D2 hybride |

### Adapted

| Élément | Adaptation Studio |
|---------|-------------------|
| Quinze cycles | Qualification dynamique post-intention |
| Profils Light/Standard/Critical/Capitalization | UI + LPS |
| Blocs transverses | **Lenses** contextuelles (`34`) |
| Gates / stop conditions | UI + Stop Condition Engine |
| L0–L5 | Couplés E0–E4 · L5 global interdit |
| Rôles ChatGPT / Cursor | Boucle Studio-native |
| Knowledge Layer / source routing | Allowlist DoctrinePackage |
| Review pack | Contenu + Artifact Completeness |
| Preuve et verdict | EvidenceLink + anti-claims |

### Replaced

| Élément v2.6 | Remplacement Studio candidate |
|--------------|-------------------------------|
| PGE documentaire comme moteur principal | **ExecutionContract** (+ export Markdown Cursor compatible) |
| Démarrage explicite par cycle | Démarrage par **intention** puis qualification dynamique |
| Doctrine `method/` comme SoT runtime direct | **DoctrinePackage** Studio-only |

### Not applicable

| Élément | Raison |
|---------|--------|
| Consommation indiscriminée de toute la doctrine générale | Studio-native D1 |
| Dépendance obligatoire aux prompts manuels seuls | Surface conversationnelle Studio |
| L5 global | Interdit |
| Migration générale des historiques | D7 / R5 |
| Promotion automatique d'une candidate | V3-F15 |

### Unresolved — arbitrage Morris encore requis

| ID | Sujet |
|----|-------|
| U1 | Entrée UX : Option A (CC-D01) vs formulation historique « cockpit avant chat » (`11`) — **consolidation propose Option A** ; validation formelle dans `37` |
| U2 | Intégration pack DoctrinePackage dans arborescence Git définitive (root exact) |
| U3 | Priorité slices Option D D2/D3 vs consolidation D1 |
| U4 | Fusion docs UX 87–89 vers `main` |
| U5 | Vocabulaire IMPLEMENTED CANDIDATE vs maturité plateforme |

## 2. Ce qui n'est pas hérité tel quel

- Questionnaire CKC visible ;
- Claim ADOPTED sans GO ;
- Dual-run prolongé sans dette pilotée.

## 3. Maturité

Matrice : **DOCUMENTED candidate** — n'altère pas baseline v2.6.

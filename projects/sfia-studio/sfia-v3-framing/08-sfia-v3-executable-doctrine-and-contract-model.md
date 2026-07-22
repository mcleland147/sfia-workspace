# 08 — Doctrine exécutable et modèle de contrats (candidat, consolidé)

| Champ | Valeur |
|-------|--------|
| Statut | **Cadrage clôturé** — décisions D2/D3/D5 intégrées |
| Voir aussi | 23 ReviewBundle · 24 MD/JSON · 26 SQL |

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

## 7. Clôture

R1 (MD/JSON/SQL) et pivot ExecutionContract sont des **décisions de cadrage validées**.  
ReviewBundle (23) remplace le pack MD exhaustif comme **cible v3** ; sous baseline v2.6 le pack embarqué reste obligatoire pour cycles Cursor.  
Dette schémas → V3-MODELED.

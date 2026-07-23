# 30 — Doctrine connaissance, contexte et décision humaine

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · merge `main` en attente |
| **Fondations** | **V3-F01 · V3-F05 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** |
| **SFIA v2.6** | Externe à Studio · historique / traçabilité uniquement |
| **Maturité fondations** | **VALIDATED** (doctrine Studio) |
| **Maturité runtime** | Non migré |
| **Gates** | Validation doctrine + PR readiness (consommés) |
| **Anti-claims** | Pas runtime actif · Pas ADOPTED runtime · Pas READY FOR DELIVERY · Pas baseline globale |
| **Document** | `30-knowledge-context-human-decision-doctrine.md` |

---

## 1. Doctrine cible (validée)

SFIA Studio v3 est un **système méthodologique conversationnel, gouverné et piloté par la connaissance, le contexte et la décision humaine**. Il transforme une intention en projet structuré, mobilise les connaissances adaptées à chaque cycle, maintient un état projet vivant, propose une trajectoire révisable et prépare des exécutions bornées et auditables.

**Studio-native** · **doctrine exclusive Studio** · **sans autorité d'exécution autonome**.

## 2. Chaîne canonique

```
intention utilisateur
→ compréhension de l'intention
→ résolution du contexte et des sources (DoctrinePackage v3)
→ qualification cycle / profil / blocs
→ résolution CKC (pilote v3-autorisé ou fallback silencieux carte synthétique)
→ analyse et clarification
→ détection des contradictions
→ mise à jour du Living Project State
→ trajectoire (recommandation jusqu'à validation)
→ options et recommandation
→ décision Morris
→ confirmation proportionnée (N1–N3)
→ Execution Contract
→ agent / Cursor / Runtime
→ preuves et ReviewBundle
→ mise à jour de l'état
→ replanification ou capitalisation
```

## 3. V3-F01 — CKC comme couche cognitive canonique (VALIDATED)

### Définition

Un **Cycle Knowledge Contract (CKC)** est un contrat de connaissance associé à un **type de cycle projet**. Il guide le **raisonnement cognitif** (ChatGPT / Studio) après qualification du cycle et **avant** le contrat d'exécution Cursor.

### Fournit

dimensions d'analyse · questions adaptatives · risques · critères de maturité · preuves attendues · anti-claims · entrées/sorties · dépendances · limites · règles de fallback **intra-doctrine v3**.

### Garde-fous (obligatoires)

| Règle | Contenu |
|-------|---------|
| Autorité | **Aucune** autorité d'exécution |
| Décision | **Aucune** décision Morris implicite |
| UI | **Jamais** exposé comme formulaire / checklist / dimensions brutes |
| Couverture | 4 pilotes détaillés (1, 2, 6, 9) · 11 cycles en fallback silencieux |
| Fallback | Carte synthétique / sources **autorisées par DoctrinePackage v3** · **silencieux** UI (CC-D12) · **jamais** bascule doctrinale vers SFIA v2.6 |
| Traçabilité | path · version · statut `detailed`/`synthetic`/`absent` · digest si disponible |
| Invention | **Interdit** d'inventer un CKC détaillé absent |

### Consommation Studio

Résolution **interne** après qualification cycle · influence questions/challenges · trace audit · n'élargit pas le périmètre Cursor · **pas** de chargement de `method/sfia-fast-track/` comme doctrine produit.

## 4. V3-F05 — Chaîne conversation → décision → exécution (VALIDATED)

Alignement **décisions UX validées** (2026-07-23) :

| Décision | Règle doctrinale |
|----------|------------------|
| CC-D01 | Conversation **dominante** + panneau vivant + confirmations structurantes · pas de stepper principal · pas de workspace multi-panneaux MVP |
| CC-D03 | Panneau sticky 360–400@1440 · ~320@1280 · sheet/drawer ≤1024 · contenu = état utile |
| CC-D05 | Observation / Hypothèse / Option / Recommandation / Décision distinctes · gates visibles · métier + ID SFIA secondaire |
| CC-D06 | Confirmations N1 · N2 · N3 · explicite avant mutation |
| CC-D12 | Fallback CKC silencieux (intra-v3) |
| CC-D13 | **Project ≠ Cycle** |

**Lecture UX de framing `11` :** la surface conversationnelle (CC-D01 Option A) prévaut pour Studio ; le cockpit projet reste surface **après** création/reprise de Project (voir `37`).

**Règles :**

- aucune mutation implicite ;
- Execution Contract **uniquement** après décisions nécessaires ;
- phrase conversationnelle ≠ gate ;
- Composer libre toujours disponible hors modal stricte.

## 5. Architecture doctrinale — 7 couches

| # | Couche | Responsabilités | Sorties | Autorité |
|---|--------|-----------------|---------|----------|
| 1 | Governance | Morris, gates, maturité, anti-claims | Décisions, stop | Morris |
| 2 | Knowledge & Context | DoctrinePackage v3, CKC, sources, provenance | Contexte résolu | Cognitive |
| 3 | Project Method | Cycles, profils, lenses, routage | Qualification | Cognitive |
| 4 | Living Project State | État utile persisté | LPS mis à jour | Studio |
| 5 | Trajectory & Decision | Trajectoire, options, reco, HumanDecision | Décision / réserve | Morris |
| 6 | Execution & Agent | ExecutionContract, capacités, réversibilité | Exécution bornée | Cursor/Runtime sous contrat |
| 7 | Evidence & Learning | Preuves, ReviewBundle, REX, dette | Capitalisation | Morris pour promotion |

**Anti-claims couches :** aucune couche n'autorise L5 décisionnel global · aucune couche n'active seule le runtime ADOPTED.

## 6. Boucle de vie projet (native)

cadrage → conception → architecture → UX → backlog → delivery → QA → sécurité → release → RUN readiness → PR readiness → post-merge → capitalisation → évolution doctrine/CKC (sous décision Morris).

Le **merge ne termine pas** automatiquement un projet ni un cycle.

## 7. Relation aux documents antérieurs

Complète : `01`–`29` (D1–D8, Option D, E0–E4, MD/JSON/SQL).
Amende la lecture UX de `11` au profit de CC-D01 (voir `37`).

## 8. Maturité

Fondations V3-F01 / V3-F05 : **VALIDATED** (doctrine Studio) · non MODELED · non IMPLEMENTED runtime.

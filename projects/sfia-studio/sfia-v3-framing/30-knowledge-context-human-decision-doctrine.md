# 30 — Doctrine connaissance, contexte et décision humaine (candidate)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | `doctrine-candidate` — **soumis à validation Morris** · **non adopté** · **non baseline** |
| **Maturité fondation** | `DOCUMENTED` candidate seulement |
| **Baseline opérationnelle** | SFIA **v2.6** (inchangée) |
| **Adoption v3** | **Non** |
| **Gate** | `GO CONSOLIDATION CIBLÉE — SFIA STUDIO V3 DOCTRINE` |
| **Branche** | `method/sfia-studio-v3-doctrine-consolidation` |
| **CKC guidance** | Pilote Conception fonctionnelle `pilots/02-conception-fonctionnelle.md` · candidate · aucune autorité d'exécution |
| **Anti-claims** | Pas V3-VALIDATED · Pas V3-ADOPTED · Pas READY FOR DELIVERY · Pas CKC ADOPTED · Pas décision autonome |
| **Document** | `30-knowledge-context-human-decision-doctrine.md` |
| **Fondations** | V3-F01 · V3-F05 · architecture doctrinale (couches) |

> Ce document **propose**. Il ne valide pas. Morris décide.

---

## 1. Doctrine cible (candidate)

SFIA Studio v3 est un **système méthodologique conversationnel, gouverné et piloté par la connaissance, le contexte et la décision humaine**. Il transforme une intention en projet structuré, mobilise les connaissances adaptées à chaque cycle, maintient un état projet vivant, propose une trajectoire révisable et prépare des exécutions bornées et auditables.

**Studio-native** · **candidate** · **sans autorité d'exécution autonome**.

## 2. Chaîne canonique candidate

```
intention utilisateur
→ compréhension de l'intention
→ résolution du contexte et des sources
→ qualification cycle / profil / blocs
→ résolution CKC (pilote ou fallback silencieux)
→ analyse et clarification
→ détection des contradictions
→ mise à jour du Living Project State
→ trajectoire candidate
→ options et recommandation
→ décision Morris
→ confirmation proportionnée (N1–N3)
→ Execution Contract
→ agent / Cursor / Runtime
→ preuves et ReviewBundle
→ mise à jour de l'état
→ replanification ou capitalisation
```

## 3. V3-F01 — CKC comme couche cognitive canonique (candidate)

### Définition

Un **Cycle Knowledge Contract (CKC)** est un contrat de connaissance associé à un **type de cycle projet**. Il guide le **raisonnement cognitif** (ChatGPT / Studio) après qualification du cycle et **avant** le contrat d'exécution Cursor.

### Fournit

dimensions d'analyse · questions adaptatives · risques · critères de maturité · preuves attendues · anti-claims · entrées/sorties · dépendances · limites · règles de fallback.

### Garde-fous (obligatoires)

| Règle | Contenu |
|-------|---------|
| Autorité | **Aucune** autorité d'exécution |
| Décision | **Aucune** décision Morris implicite |
| UI | **Jamais** exposé comme formulaire / checklist 25 sections / dimensions brutes |
| Couverture | 4 pilotes détaillés (1, 2, 6, 9) · 11 cycles en fallback |
| Fallback | Carte synthétique + méthode v2.6 · **silencieux** côté utilisateur (CC-D12) |
| Traçabilité | path · version · statut `candidate`/`absent` · digest si disponible |
| Invention | **Interdit** d'inventer un CKC détaillé absent |

### Consommation Studio

Résolution **interne** après qualification cycle · influence questions/challenges · trace audit interne seulement · n'élargit pas le périmètre Cursor.

Réf. : routing guide §4.4.5 · pack CKC `method/.../cycle-knowledge-contracts/` · décisions UX CC-D12.

## 4. V3-F05 — Chaîne conversation → décision → exécution (candidate)

Alignement **décisions UX validées** (2026-07-23) :

| Décision | Règle doctrinale candidate |
|----------|----------------------------|
| CC-D01 | Conversation **dominante** + panneau vivant + confirmations structurantes · pas de stepper principal · pas de workspace multi-panneaux MVP |
| CC-D03 | Panneau sticky 360–400@1440 · ~320@1280 · sheet/drawer ≤1024 · contenu = état utile |
| CC-D05 | Observation / Hypothèse / Option / Recommandation / Décision distinctes · gates visibles · métier + ID SFIA secondaire · pas de CTA générique |
| CC-D06 | Confirmations N1 (réversible) · N2 (structurante) · N3 (critique/irréversible) · explicite avant mutation |
| CC-D12 | Fallback CKC silencieux |
| CC-D13 | **Project ≠ Cycle** · aucun claim projet validé/lancé/terminé via seul état de cycle |

**Tension historique :** framing `11` (« cockpit avant chat ») est **amendé candidate** par CC-D01. Arbitrage formel de validation : document `37`.

**Règles :**

- aucune mutation implicite ;
- Execution Contract **uniquement** après décisions nécessaires ;
- phrase conversationnelle ≠ gate ;
- Composer libre toujours disponible hors modal stricte.

## 5. Architecture doctrinale candidate — 7 couches

| # | Couche | Responsabilités | Sorties | Autorité |
|---|--------|-----------------|---------|----------|
| 1 | Governance | Morris, gates, maturité, anti-claims | Décisions, stop | Morris |
| 2 | Knowledge & Context | DoctrinePackage, CKC, sources, provenance | Contexte résolu | Cognitive |
| 3 | Project Method | Cycles, profils, blocs/lenses, routage | Qualification | Cognitive |
| 4 | Living Project State | État utile persisté | LPS mis à jour | Studio |
| 5 | Trajectory & Decision | Trajectoire, options, reco, HumanDecision | Décision / réserve | Morris |
| 6 | Execution & Agent | ExecutionContract, capacités, réversibilité | Exécution bornée | Cursor/Runtime sous contrat |
| 7 | Evidence & Learning | Preuves, ReviewBundle, REX, dette | Capitalisation candidate | Morris pour promotion |

**Anti-claims couches :** aucune couche n'autorise L5 décisionnel global · aucune couche n'adopte v3 seule.

## 6. Boucle de vie projet (native)

cadrage → conception → architecture → UX → backlog → delivery → QA → sécurité → release → RUN readiness → PR readiness → post-merge → capitalisation → évolution doctrine/CKC **candidate**.

Le **merge ne termine pas** automatiquement un projet ni un cycle.

## 7. Relation aux documents antérieurs

Complète et **ne remplace pas** : `01`–`29` (D1–D8, Option D, E0–E4, MD/JSON/SQL).
Amende **candidate** : lecture UX de `11` (voir `37`).

## 8. Maturité

Fondations V3-F01 / V3-F05 : **DOCUMENTED candidate** — validation Morris requise.

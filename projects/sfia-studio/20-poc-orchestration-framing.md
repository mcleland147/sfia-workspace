# SFIA Studio — Cadrage POC orchestration (Option B)

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `20-poc-orchestration-framing.md` |
| **Cycle** | 1 — Cadrage POC orchestration (Option B) |
| **Profil** | Critical |
| **Typologie** | DOC / EVOL (cadrage) |
| **Baseline méthode** | SFIA v2.6 — Option C méthode (**inchangée**) |
| **Branche** | Historique cadrage/archi MERGED ; backlog `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |
| **Base / main** | `origin/main` @ `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` (PR #222 MERGED) |
| **Statut document** | **VALIDÉ + INTÉGRÉ** ; archi #221 **MERGED** ; sync #222 **MERGED** ; backlog POC-G8 **CONSOMMÉ** |
| **POC** | **Non lancé** |
| **MVP / industrialisation** | **Non engagés** |
| **Architecture Runtime** | **Non validée** — ouverts |
| **Destinataire** | Morris |

> Cadrage **validé**. Architecture Option B **INTÉGRÉE**. Backlog S1 **INTÉGRÉ** (#223). POC-G9 **CONSOMMÉ** (harness-only). POC **non lancé** (pas d’industrialisation).

### Décision Morris — validation du cadrage (2026-07-19)

| Élément | Statut |
|---------|--------|
| POC-CAND-01…06, 08, 10 | **VALIDÉES** |
| POC-CAND-07 | **VALIDÉE AVEC RÉSERVE** |
| POC-CAND-09 / POC-G10 | **CONSOMMÉE** |
| POC-G1…G6 | **VALIDÉS** |
| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| POC-G8 | **CONSOMMÉ** (backlog) |
| POC-G9 | **CONSOMMÉ** (harness-only) |
| Intégration | #219–#222 @ `60e6880…` |

---

## 1. Contexte

### 1.1 Acquis factuels

- Delivery P0 **CLÔTURÉ** (PR #217) — app Next.js 15 sous `projects/sfia-studio/app/` ; 4 écrans ; fixtures ; Git/Cursor/Runtime **simulés**.
- Capitalisation post-P0 **INTÉGRÉE** (PR #218) — statut `p0-delivery-integrated-next-poc-orchestration-framing`.
- Architecture fonctionnelle **VALIDÉE** / **INTÉGRÉE** — **AF-Option C** : Studio et orchestrateur déterministe **candidat séparés**.
- Architecture technique P0 **VALIDÉE** — pas d’API, auth, BDD, Runtime contractuel en P0.
- Décision Morris (2026-07-19) : **cadrage Option B VALIDÉ** (POC-G1…G6) — **POC non lancé**.
- Intégration Git : PR #219 **MERGED** (`be713c45…`) — POC-G10 **consommé** ; cycle de cadrage **terminé**.

### 1.2 Formulation structurante (D-VAL-3 — inchangée)

> Le POC est une étape technique de validation de faisabilité.
> Il ne constitue ni le produit cible, ni le MVP, ni la limite de la trajectoire.

### 1.3 Runtime candidat

Un mécanisme d’orchestration déterministe, **éventuellement** nommé « SFIA Runtime », doit **appliquer** contrats, permissions, gates et stop conditions.
Nom **non contractuel**. Architecture Runtime **non validée**. Aucune technologie sélectionnée dans ce cadrage.

---

## 2. Problème technique à prouver

**Problème :** aujourd’hui, SFIA Studio P0 **représente** un cockpit gouverné, mais **ne démontre pas** qu’un orchestrateur déterministe séparé peut :

1. recevoir un contrat d’exécution borné ;
2. vérifier les préconditions (Git, gates, allowlist) ;
3. **refuser** toute action hors contrat sans arbitrage automatique ;
4. déclencher une exécution Cursor **uniquement après GO Morris** ;
5. collecter un résultat / preuve reconstructible ;
6. s’arrêter proprement (stop) et permettre une reprise contrôlée ;

…sans créer de seconde source de vérité face à Git, et sans automatiser l’arbitrage Morris.

---

## 3. Objectif de preuve

Démontrer, sur **un scénario métier unique**, que la boucle suivante est **faisable techniquement** en local (macOS) de façon **reproductible, bornée et réversible** :

```text
Intention Studio
  → qualification / contrat candidat (GPT)
  → gate Morris (GO explicite)
  → orchestrateur candidat (applique, ne décide pas)
  → exécution Cursor bornée (read-only / sandbox)
  → collecte preuve / pack
  → verdict candidat (GPT)
  → décision Morris tracée
```

**Résultat observable attendu :** un journal corrélé (demande → cycle → GO → actions → résultat → stop éventuel) + un review pack / preuve locale, sans push/PR/merge réels, sans secret réel, sans L5 global.

**Verdicts de preuve futurs (post-delivery POC — non applicables ici) :**

| Verdict | Signification |
|---------|---------------|
| `FEASIBILITY CONFIRMED` | Boucle démontrée sans écart structurant |
| `FEASIBILITY CONFIRMED WITH RESERVES` | Démontrée avec réserves non bloquantes |
| `FEASIBILITY NOT DEMONSTRATED` | Échec de preuve — abandon ou re-cadrage |

---

## 4. Périmètre du cadrage (ce cycle)

| Inclus | Exclu |
|--------|-------|
| Problème, objectif, scénario candidat | Développement / code POC |
| Frontières Studio / orch. / Git / Cursor | Branchement GitHub / Cursor réel |
| Niveaux d’automatisation candidats | Choix d’outil Runtime |
| Actions read-only / simulées / interdites | API, BDD, auth, CI/CD |
| Gates, stops, preuves, critères | Backlog / delivery POC |
| Sécurité, réversibilité, démo macOS | MVP / industrialisation |
| Décisions **candidates** POC-CAND-* | Validation de POC-CAND / D-VAL nouvelles |

---

## 5. Hors périmètre (rappel strict)

- Modification de `projects/sfia-studio/app/**`
- Push / PR / merge du présent cadrage sans GO distinct (POC-G10)
- Lancement autonome / industrialisation du POC (hors POC-G9 harness-only)
- Architecture technique détaillée du POC
- Définition du MVP
- Industrialisation
- Correction responsive / a11y / postcss P0
- Clôture formelle architecture fonctionnelle
- Évolution méthode SFIA (v2.7 / v3.0)

---

## 6. Hypothèses de cadrage

| ID | Hypothèse | Statut |
|----|-----------|--------|
| H1 | AF-Option C reste le cadre d’autorité (Studio ≠ orchestrateur) | Reprise d’acquis validé |
| H2 | Git reste la seule vérité durable | Reprise d’acquis validé |
| H3 | Un seul scénario métier suffit pour la première preuve | **Hypothèse de cadrage** |
| H4 | La première preuve peut s’appuyer sur lecture Git réelle + exécution Cursor **read-only** | **Hypothèse** |
| H5 | Toute écriture Git distante (commit/push/PR/merge) reste **simulée** dans le premier POC | **Hypothèse / garde-fou** |
| H6 | L’orchestrateur peut être un module local déterministe (script/service local) — technologie **non choisie** | **Hypothèse ouverte** |
| H7 | La surface UI P0 peut servir de cockpit humain sans être le moteur d’orchestration | **Hypothèse** |
| H8 | macOS local de Morris suffit comme environnement de preuve | Reprise D-VAL / cadrage |

---

## 7. Contraintes

### 7.1 Autorité et vérité

- Morris = seule autorité structurante (L0).
- ChatGPT qualifie / structure — ne décide pas.
- Cursor exécute un contrat borné — n’arbitre pas.
- Orchestrateur **applique** — n’autorise pas, ne crée pas de GO.
- Git prime ; Studio et orchestrateur ≠ seconde vérité.

### 7.2 Automatisation

- L5 **global** interdit.
- Arbitrage reste L0.
- Exécution après GO : L3 cible ; L4* orchestration contrôlée = **plafond candidat** (non validé).

### 7.3 Sécurité

- Aucun secret / token / identifiant réel dans fixtures ou journaux.
- Permissions minimales (least privilege).
- Séparation lecture / simulation / écriture.
- Isolation locale ; arrêt sécurisé (stop) obligatoire.
- Pas d’exécution de commandes système hors allowlist explicite (à détailler en architecture POC).

### 7.4 Réversibilité

- Toute action du POC initial doit être **réversible** ou **sans effet durable hors workspace local de preuve**.
- Actions destructives exclues.
- Force push, rewrite history, delete branch : **interdits**.

### 7.5 FinOps (qualification qualitative)

| Option | Nature | Coût potentiel |
|--------|--------|----------------|
| Orchestrateur 100 % local | Local | Faible / nul variable |
| Appels GPT | Service | Variable selon volume |
| Agent Cursor | Local / licence existante | Selon usage Morris |
| Service managé Runtime | Managé | **Non retenu pour le 1er POC** — engagement financier à arbitrer plus tard |

Aucun budget ni fournisseur validé.

---

## 8. Niveaux d’automatisation (candidats)

| Niveau | Rôle | Position cadrage POC |
|--------|------|----------------------|
| **L0** | Arbitrage Morris | **Obligatoire** |
| **L1–L2** | Qualification, drafting, verdict candidat | Autorisé |
| **L3** | Exécution bornée **après GO** | **Cible VALIDÉE** (POC-CAND-04) |
| **L4\*** | Orchestration contrôlée candidate | **Plafond VALIDÉ** sur chemin d’exécution — **≠** Runtime produit |
| **L5 global** | Auto-arbitrage | **Interdit** |
| **L5 ciblé read-only** | Consultation bornée (AF-15) | **Non autorisé automatiquement** |

\*L4 = orchestration contrôlée **candidate**, non validée techniquement (aligné `11` §17).

**Recommandation validée Morris (POC-CAND-04) :** plafond **L3 + L4* sur le chemin d’exécution uniquement** ; arbitrage **strictement L0**.
L4* = orchestration contrôlée **candidate** — **ne constitue pas** un niveau produit ni un Runtime validé.
L5 ciblé read-only **n’est pas** automatiquement autorisé par cette décision.

---

## 9. Critères de succès, d’échec et d’abandon

### 9.1 Succès (preuves futures — POC delivery)

- Boucle complète exécutée au moins une fois en local.
- GO Morris explicite avant toute exécution Cursor non triviale.
- Orchestrateur refuse une action hors allowlist (preuve de déterminisme négatif).
- Journal corrélé disponible et reconstructible.
- Aucune écriture Git distante réelle.
- Aucun secret réel exposé.
- Stop déclenchable et effectif.

### 9.2 Échec

- Impossible de séparer décision et exécution.
- Orchestrateur peut contourner un gate.
- Seconde vérité d’état durable hors Git.
- Dépendance à une techno non arbitré pour « réussir ».
- Preuve non reproductible.

### 9.3 Abandon

- Preuve nécessite écriture distante non réversible.
- Coût / complexité disproportionnés vs objectif de faisabilité.
- Contradiction avec AF-Option C non résoluble sans changer le produit.
- Morris décide `STOP` / abandon explicite.

---

## 10. Risques et réserves

| Risque | Impact | Mitigation cadrage |
|--------|--------|-------------------|
| Confusion POC / MVP | Haute | Formulations D-VAL-3 répétées ; critères faisabilité seulement |
| Seconde vérité UI/orch. | Haute | Git prime ; états dérivés = observation |
| Auto-arbitrage implicite | Haute | L5 interdit ; timeout ≠ GO |
| Fuite de secrets | Haute | Fixtures synthétiques ; pas de `.env` réel |
| Surarchitecture Runtime | Moyenne | Techno = hypothèse ; architecture POC cycle séparé |
| Élargissement scénario | Moyenne | Un seul scénario sélectionné S1 (doc `21`) |
| Coût GPT variable | Faible–moyen | Volume borné ; FinOps qualitatif |

**Réserves maintenues hors POC :** responsive P0, a11y complète, CI Studio, postcss, clôture formelle AF, branches historiques.

---

## 11. Stratégie de démonstration (macOS local)

1. Préparer un workspace de preuve isolé (clone ou worktree dédié — **à arbitrer en architecture POC**).
2. Charger fixtures / données de test synthétiques (doc `21`).
3. Déclencher le scénario depuis Studio (UI ou harness — **non choisi ici**).
4. Obtenir un GO Morris simulé puis réel (selon maturité) sur gate unique.
5. Montrer refus orchestrateur sur action hors contrat.
6. Montrer exécution read-only autorisée après GO.
7. Produire journal + pack de preuve.
8. Arrêter (stop) et montrer absence d’effet distant.

**Environnement :** macOS local Morris = contrainte de preuve (pas plateforme produit).

---

## 12. Observabilité minimale (preuve)

Événements minimaux à journaliser :

- `intent.received`
- `qualification.produced`
- `gate.requested` / `gate.decided` (GO / CORRIGER / STOP)
- `orchestrator.accepted` / `orchestrator.rejected`
- `execution.started` / `execution.finished` / `execution.stopped`
- `proof.collected`
- `verdict.candidate.produced`

Corrélation : `requestId` · `cycleId` · `gateId` · `executionId`.

Pas de plateforme de supervision industrialisée.

---

## 13. Éléments reportés après ce cadrage

| Élément | Cycle ultérieur candidat |
|---------|--------------------------|
| Architecture POC ciblée | Après POC-G7 |
| Choix techno orchestrateur | Architecture POC |
| Backlog POC borné | Après POC-G8 |
| Delivery harness-only | POC-G9 **consommé** — commit/PR séparés |
| Intégration réelle Git/Cursor | GO distincts (POC-G5+) |
| Décision post-POC (abandon / itération / MVP) | DF-G6 / DF-G7 (proposés) |

---

## 14. Décisions Morris (état post-intégration PR #219)

| Gate / CAND | Statut |
|-------------|--------|
| POC-G1…G6 | **VALIDÉS** |
| POC-G10 | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B |
| **POC-G8** | **CONSOMMÉ** — backlog `26`–`28` |
| POC-G9 | **CONSOMMÉ** (harness-only) |
| Sync #220 / Archi #221 / Sync #222 | **MERGED** |

**Architecture :** Option B minimale (Studio cockpit + adaptateur + harness autonome). Option A = test/dégradé. Option C écartée (1er POC).

**Prochaine décision :** review draft PR harness ; merge — **FERMÉ** ; Cursor réel / UI / Docker — **FERMÉS**.

---

## 15. Documents liés

| Document | Rôle |
|----------|------|
| [21](./21-poc-orchestration-scenario-and-boundaries.md) | S1 |
| [22](./22-poc-orchestration-decision-pack.md) | POC-CAND |
| [23](./23-poc-orchestration-technical-architecture.md) | Archi Option B |
| [24](./24-poc-orchestration-contracts-security-and-observability.md) | Contrats |
| [25](./25-poc-orchestration-architecture-decision-pack.md) | ARCH-POC-CAND |
| [26](./26-poc-orchestration-backlog.md) | Backlog |
| [27](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist |
| [28](./28-poc-orchestration-delivery-gate-pack.md) | Prérequis G9 |
| [11](./11-functional-architecture.md) | AF-Option C |

---

*Cadrage INTÉGRÉ — POC-G9 harness-only CONSOMMÉ — POC NON LANCÉ — app/** intact.*

> **Archive status (Lot C — SFIA v2.6):** lifecycle archived — trajectory SFIA v3.0 hors trajectoire courante. Usage : consultation historique uniquement ; non-operational. SFIA v2.4 = baseline ; SFIA v2.6 = candidate. Réouverture = GO Morris explicite.

# SFIA 3.0 — Clôture d'exploration et retour trajectoire v2.4

**Date :** 2026-07-08  
**Statut :** Clôture d'exploration  
**Type :** Capitalisation — décision Morris  
**Cycle :** DOC — clôture trajectoire SFIA 3.0  
**HEAD `main` de référence :** `55e1bc4010551d0429c17e60ab3fba602ef4e358`  
**Baseline retenue :** SFIA v2.4 — Consolidation & Operating Efficiency

---

## 1. Décision Morris

Morris acte la **clôture de l'exploration SFIA 3.0** comme trajectoire courante et le **retour explicite à SFIA v2.4** comme baseline opérationnelle.

| Décision | Verdict |
|----------|---------|
| Git Reader comme brique cible du workflow courant | **Non retenu** |
| Trajectoire Bridge / Runner / orchestration GPT ↔ Cursor automatisée | **Arrêtée** |
| SFIA 3.0 comme trajectoire immédiate | **Non retenue** |
| Chaîne opérationnelle cible | **ChatGPT → Cursor → Git → validation Morris** |
| Cursor comme exécuteur principal contrôlé | **Retenu** |
| Codex (extension OpenAI) comme brique standard | **Non intégré** — tests ponctuels à l'usage |
| Suppression ou décommission technique immédiate | **Interdit** — GO Morris séparé requis |

Cette clôture **n'efface pas l'historique** : doctrine, prompts, expérimentations et preuves techniques restent capitalisés et consultables.

---

## 2. Contexte de l'exploration SFIA 3.0

### 2.1 Ouverture (2026-07-07)

L'exploration SFIA 3.0 a été ouverte après validation d'une **preuve technique locale** :

```text
ChatGPT Custom GPT
  → SFIA Orchestrator Bridge (HTTP)
  → .sfia/mcp/tasks/
  → SFIA Cursor Task Runner
  → .sfia/mcp/reports/
  → Bridge
  → ChatGPT
```

**Livrables documentaires** intégrés via PR #142 :

- doctrine outillage (`method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/ (archived)`) ;
- prompts cycle (`method/sfia-fast-track/documentation/archive/sfia-v3/prompts/ (archived)`, `method/sfia-fast-track/documentation/archive/sfia-v3/governance/sfia-3-morris-gate.md`) ;
- capitalisation (`method/sfia-fast-track/documentation/archive/sfia-v3/capitalization/`).

Voir : `2026-07-07-sfia-3-opening-report.md`.

### 2.2 Validation runtime (2026-07-08)

La boucle runtime a été validée sur le périmètre `.sfia/mcp/` uniquement — lecture Git Reader, dépôt task, consommation runner, rapport JSON, endpoints bridge v0.1.1.

Voir : `2026-07-08-sfia-3-runtime-loop-validation.md`.

### 2.3 Tension avec la baseline v2.4

Le standard v2.4 (`sfia-v2.4-consolidation-operating-efficiency-standard.md`) visait explicitement la **réduction de la friction opérationnelle** et portait un **NO-GO immédiat v3.0** au moment de sa rédaction. L'exploration 3.0 a produit une preuve technique utile mais a **renforcé la complexité** de la chaîne opérationnelle sans gain suffisant pour la trajectoire courante.

---

## 3. Observations issues des tests

### 3.1 Git Reader

| Observation | Lecture |
|-------------|---------|
| Lecture distante des canoniques SFIA 3.0 sur `main` | Fonctionnelle |
| Templates JSON référencés mais absents du merge documentaire | Réserve documentaire connue |
| Dépendance service externe (Render) | Friction opérationnelle et point de défaillance |
| Remplacement par Cursor en lecture locale synchronisée | Partiellement équivalent en contexte local |

**Conclusion :** Git Reader a servi de **pont de lecture** pendant l'exploration. Il n'est **pas retenu** comme brique standard du workflow courant.

### 3.2 Bridge et Runner

| Observation | Lecture |
|-------------|---------|
| Boucle task → report validée techniquement | Preuve utile, périmètre `.sfia/mcp/` |
| Bridge HTTP + token + tunnel | Complexité d'exploitation |
| Runner manuel (`npm run once` / `watch`) | Friction Morris non justifiée au quotidien |
| Gates Morris et garde-fous | Conformes à la doctrine SFIA |

**Conclusion :** Bridge et Runner **ne sont plus à poursuivre** comme cible d'automatisation des échanges ChatGPT / Cursor. Le code et la documentation restent en place — **aucune décommission immédiate**.

### 3.3 Work with Apps (ChatGPT Desktop ↔ Cursor)

| Observation | Lecture |
|-------------|---------|
| Installation extension Codex / OpenAI dans Cursor | Réussie (vue Éditeur requise) |
| Lecture fichier actif depuis ChatGPT Desktop | Fonctionnelle — **1 fichier à la fois** |
| Accès repo complet | Non — insuffisant comme Git Reader |

**Conclusion :** Complément ponctuel, pas une brique workflow SFIA.

### 3.4 Codex (extension OpenAI dans Cursor)

| Observation | Lecture |
|-------------|---------|
| Agent intégré sidebar (Chat / Agent / Full Access) | Capable de lire et modifier le workspace |
| Tests lecture seule doctrine SFIA 3.0 | Faisables en mode Chat |
| Intégration cycle SFIA (task JSON, gates, bridge) | Non native |
| Rôle vs Cursor Agent natif | Redondance partielle |

**Conclusion :** Codex **n'est pas intégré** comme brique standard. Tests ponctuels sur cas réels autorisés pour évaluer la pertinence — sans impact sur la chaîne cible.

### 3.5 Cursor comme exécuteur et lecteur local

| Observation | Lecture |
|-------------|---------|
| Local Git Truth Check via Cursor | Validé (HEAD = origin/main, fichiers canoniques lisibles) |
| Exécution prompts SFIA documentaires | Alignée modèle v1.1 / v2.x |
| Rôle central dans la chaîne retenue | Confirmé |

---

## 4. Décision — retour à SFIA v2.4

La **trajectoire courante SFIA** redevient **v2.4** :

- consolidation et efficacité opérationnelle ;
- chaîne simple et éprouvée ;
- friction réduite vs orchestration 3.0 ;
- alignement avec le verdict REX Chantiers360 v2.

SFIA 3.0 est reclassée comme **exploration arrêtée** — capitalisation historique, pas trajectoire active.

**Références baseline :**

- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`

---

## 5. Chaîne opérationnelle retenue

```text
Morris (intention, validation structurante)
    ↓
ChatGPT (cadrage, routing, prompts, analyse)
    ↓
Cursor (exécution contrôlée dans le repo)
    ↓
Git (source de vérité, traçabilité)
    ↓
Morris (validation, commit, push, PR, merge — L0)
```

**Invariants inchangés :**

- Git = source de vérité ;
- Morris = autorité de décision structurante ;
- ChatGPT cadre et challenge — jamais push/merge/PR ;
- Cursor exécute sous garde-fous — jamais arbitre ;
- Pas de L5 global.

---

## 6. Rôle de Cursor

| Rôle | Statut |
|------|--------|
| Exécuteur principal contrôlé des cycles repo | **Retenu** |
| Lecture locale de la source de vérité (workspace synchronisé) | **Retenu** |
| Production de rapports structurés dans le chat / fichiers doc | **Retenu** |
| Consommation automatique de tasks via Runner | **Non retenu** (exploration 3.0) |
| Remplacement de Morris sur arbitrages | **Interdit** |

---

## 7. Rôle résiduel de Codex

| Usage | Statut |
|-------|--------|
| Brique standard workflow SFIA | **Non** |
| Test ponctuel sur cas réels (lecture, agent, comparaison Cursor natif) | **Autorisé à l'usage** |
| Intégration bridge / runner / gates | **Hors périmètre** |
| Décision d'intégration future | **GO Morris séparé** si pertinence démontrée |

---

## 8. Éléments non retenus pour la trajectoire courante

| Élément | Statut | Action immédiate |
|---------|--------|----------------|
| **Git Reader** (API distante read-only) | Non retenu comme brique cible | Aucune suppression |
| **SFIA Orchestrator Bridge** | Exploration arrêtée | Aucune décommission |
| **SFIA Cursor Task Runner** | Exploration arrêtée | Aucune décommission |
| **Orchestration SFIA 3.0 automatisée** (bus task/report) | Non retenue | Artefacts `.sfia/mcp/` conservés localement |
| **Work with Apps** comme pont workflow | Non standardisé | Usage libre ponctuel |
| **Codex** comme agent standard | Non intégré | Tests ponctuels autorisés |

**Important :** l'arrêt de trajectoire **ne constitue pas** une suppression brutale. Tout nettoyage, archivage ou décommission technique requiert un **GO Morris dédié**.

---

## 9. Garde-fous de cette clôture

| Garde-fou | Application |
|-----------|-------------|
| Aucune suppression de fichier | ✅ Respecté |
| Aucune décommission technique | ✅ Respecté |
| Aucune modification chemin protégé | ✅ Respecté |
| Aucune action distante (push / PR / merge) | ✅ Respecté |
| Aucune modification fichier applicatif | ✅ Respecté |
| Cycle documentation uniquement | ✅ Respecté |
| Historique SFIA 3.0 préservé | ✅ Doctrine, prompts, rapports capitalisation |

---

## 10. Impact méthode

| Zone | Impact |
|------|--------|
| **Trajectoire active** | Retour v2.4 — consolidation, efficacité, friction réduite |
| **SFIA 3.0 doctrine** | Statut : exploration clôturée — documents en lecture seule méthodologique |
| **Prompts SFIA 3.0** | Conservés — non promus au catalogue v1.1 dans ce cycle |
| **`.sfia/mcp/` runtime** | Non versionné — reste expérimental local |
| **Niveaux L0–L5** | Inchangés — L4 orchestration 3.0 hors trajectoire courante |
| **Cycles projet** | Reprise modèle ChatGPT → prompt Cursor → exécution → validation Morris |

---

## 11. Recommandations de capitalisation

| # | Recommandation | Priorité |
|---|----------------|----------|
| C1 | Conserver ce document comme **point d'entrée clôture** de la trajectoire v3 | Haute |
| C2 | Référencer la clôture depuis les rapports v3 existants lors de prochains cycles doc | Moyenne |
| C3 | Ne pas modifier `prompt-catalog.md` tant que Morris n'a pas décidé d'une intégration v3 | Respecté |
| C4 | Archiver mentalement `.sfia/mcp/` comme sandbox — ne pas confondre avec source de vérité Git | Haute |
| C5 | Capitaliser les leçons v2.4 (réduction PR micro, decision-driven) comme priorité opérationnelle | Haute |
| C6 | Si reprise future v3 : nouveau GO Morris + cycle dédié — pas de reprise implicite | Invariant |

---

## 12. Prochaines étapes proposées

1. **Validation Morris** de ce document de clôture.
2. **Commit local** (après GO) — cycle documentation, sans push automatique.
3. **Reprise cycles projet** sur baseline v2.4 — prompts templates v1.1, operating model v1.1.
4. **Tests Codex ponctuels** — uniquement si cas réel justifie comparaison avec Cursor natif.
5. **Décision ultérieure** (GO séparé) sur :
   - archivage ou décommission Bridge / Runner ;
   - retrait ou maintien Git Reader API ;
   - hub `docs/tooling/mcp/README.md` ;
   - promotion ou gel définitif doctrine 3.0.

---

## 13. Références

### Capitalisation SFIA 3.0

- `2026-07-07-sfia-3-opening-report.md`
- `2026-07-08-sfia-3-runtime-loop-validation.md`
- `sfia-3-documentation-realignment-report.md`
- `sfia-3-pr-readiness-report.md`
- `experiments/` — preuves techniques détaillées

### Doctrine (gelée — exploration clôturée)

- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-orchestration-doctrine.md`
- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-cycle-engine.md`
- `method/sfia-fast-track/documentation/archive/sfia-v3/doctrine/sfia-3-gates-and-stop-conditions.md`

### Baseline retenue

- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md`

---

## 14. Statut final

```text
Decision: SFIA 3.0 exploration closed — not retained as current trajectory.
Current baseline: SFIA v2.4.
Operational chain: ChatGPT → Cursor → Git → Morris validation.
Git Reader, Bridge, Runner: not pursued — no immediate decommission.
Codex: optional ad-hoc testing only.
Morris authority: unchanged.
Push / PR / merge: deferred pending Morris validation of this document.
```

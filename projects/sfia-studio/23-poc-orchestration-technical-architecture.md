# SFIA Studio — Architecture technique POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `23-poc-orchestration-technical-architecture.md` |
| **Cycle** | 6 — Architecture technique (+ correction QA Option B + post-merge #221) |
| **Profil** | Critical (architecture) / Standard (post-merge sync) |
| **Branche historique** | `architecture/sfia-studio-poc-orchestration` — **MERGED** puis **supprimée** (remote) |
| **Base / main** | `origin/main` @ `40f8ebecf41608756e4e8184c860b3b966b786b3` |
| **Statut** | **VALIDÉE AVEC RÉSERVES — INTÉGRÉE** (POC-G7) — PR [#221](https://github.com/mcleland147/sfia-workspace/pull/221) **MERGED** |
| **Décision architecture** | **Option B minimale** — Studio cockpit + adaptateur fin + harness autonome |
| **POC-G8 / G9** | **FERMÉS** |
| **POC** | **Non lancé** |
| **Runtime / techno / protocole** | **Ouverts** (non figés) |

> Architecture **validée avec réserves** et **intégrée** sur `main` (PR #221 / `40f8ebe…`). Versionnement **consommé**. POC-G8 **non ouvert**. Aucun code.

---

## 1. Contexte

| Fait | Référence |
|------|-----------|
| Cadrage POC | PR #219 / `be713c45…` |
| Sync post-merge cadrage | PR #220 / `b882892…` **MERGED** |
| Architecture Option B | PR #221 / `40f8ebe…` **MERGED** |
| AF-Option C | Studio ≠ orchestrateur — **VALIDÉE** |
| App P0 | Next fixtures ; Git/Cursor simulés ; pas d’orch. |
| Décision Morris | **Option B minimale** retenue ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |

Objectif S1 inchangé : boucle DOC read-only gouvernée, rejet hors allowlist, writes distantes absentes, L0 Morris, Git = vérité.

---

## 2. Exigences (inchangées + E14)

| ID | Exigence |
|----|----------|
| E1–E12 | Séparation AF-C ; Git vérité ; L0 ; read Git ; deny writes ; rejet allowlist ; Cursor borné ; journal ; stop ; réversible ; secrets ; L3/L4*/L5 |
| E13 | Logique d’orchestration **hors** `app/**` |
| E14 | Studio = cockpit ; adaptateur **sans autorité** ; harness **autonome** et testable sans UI |

---

## 3. Principes

P1 Repo-first · P2 Décision ≠ exécution · P3 Fail closed · P4 Least privilege · P5 Simplicité locale · P6 Harness autonome · P7 Adaptateur fin · P8 Studio ≠ vérité · P9 Pas d’API Cursor inventée · P10 Option B = extension d’Option A (cœur harness préservé)

---

## 4. Options A / B / C — statut Morris

### 4.1 Option A — Harness autonome (historique / mode test)

**Statut :** **conservée** comme socle technique et mode de test / diagnostic / dégradé. **Non rejetée.** **Non retenue** comme architecture utilisateur du premier POC.

### 4.2 Option B minimale — **RETENUE**

Studio (cockpit) → adaptateur fin → harness autonome (gates, policies, Git, Cursor, journal, preuves).

| Critère | Évaluation |
|---------|------------|
| Preuve S1 | ★★★ (même cœur A) |
| AF-Option C | ★★★ |
| Démo cockpit | ★★★ |
| Risque Option C | Faible si adaptateur borné |
| Dette UI | Minimale, reportée au delivery |

### 4.3 Option C — Orch. dans l’app

**Écartée** pour le premier POC (couplage / seconde vérité). Conservée comme historique ; non interdite pour toute trajectoire future hors premier POC.

### 4.4 Challenge

| Question | Réponse |
|----------|---------|
| Utile maintenant ? | Oui — B prouve S1 + cockpit sans fondre Runtime |
| Drift vers C ? | **Non** si frontières §5–7 respectées |
| Harness autonome ? | **Oui** — cœur inchangé vs A |
| Plus simple possible ? | A plus simple hors UI ; B minimale = plus simple *avec* cockpit |

---

## 5. Architecture logique — Option B minimale

```text
[Morris] --GO/STOP explicites--> [SFIA Studio cockpit]
[SFIA Studio] --intention / gate / stop / query--> [StudioAdapter] (fin, sans autorité)
[StudioAdapter] --AdapterEnvelope--> [Harness CLI autonome]
[Harness Orchestrator]
   ├─ GateValidator (revalide GO + contractHash)
   ├─ PolicyEngine (allow/deny fail-closed)
   ├─ StateMachine
   ├─ GitReaderPort (read-only réel)
   ├─ CursorExecutorPort (fixture|manual|adapter-future)
   ├─ EventJournal + ProofStore
   └─ Status/Proof responses --> Adapter --> Studio (vue dérivée)
[Mode dégradé / test] Harness utilisable **sans** Studio (= Option A)
```

---

## 6. Responsabilités

| Composant | Fait | Interdit |
|-----------|------|----------|
| **Studio** | Intention, présentation gate, STOP, suivi, consultation preuves | Auto-GO ; exec Git/Cursor ; évaluer allowlist ; vérité exclusive ; contourner harness |
| **Adaptateur** | Transformer / transmettre messages ; corrélation ; renvoyer vues | Décider ; policy ; modifier contrat ; créer GO ; masquer rejet/stop ; vérité durable |
| **Harness** | Revalider GO/contrat/allowlist ; Git ; CursorPort ; journal ; preuves ; états | Arbitrer L0 ; write remote |
| **GPT** | Qualification hors bande | Commander orch. |
| **Morris** | GO / STOP / CLOSE | — |

---

## 7. Flux

### 7.1 Nominal

```text
Studio Intent → Adapter → Harness QUALIFIED/GATE_OPEN
  → Studio présente dossier → Morris GO explicite
  → Adapter StudioGateSubmission → Harness revalide → AUTHORIZED
  → PRECHECK → ORCHESTRATING → EXECUTING → PROOF_READY
  → Statuts/preuves → Adapter → StudioExecutionView
  → Morris CLOSE → CLOSED
```

### 7.2 Rejet hors allowlist

```text
AUTHORIZED → policy deny → REJECTED + event
  → Studio affiche rejet (pas de retry auto)
  → correction contrat + **nouveau GO** requis
```

### 7.3 STOP

```text
StudioStopRequest → Adapter → Harness STOP prioritaire → STOPPED
  → flush journal → vue Studio mise à jour
```

### 7.4 Dégradé

Harness CLI sans Studio (fixtures + fichier GO) — tests / diagnostic.

---

## 8. Adaptateur — portée

**Autorisé :** intention→demande ; transmission GO/STOP ; query statut ; affichage état/erreurs/preuves ; IDs corrélation.

**Exclu :** orch. métier ; Git/Cursor ; élévation ; modif contrat ; retry auto ; auto-GO ; auto-clôture.

**Protocoles candidats (ouverts) :** fichier/répertoire · processus enfant · HTTP local · IPC · CLI encapsulé.
Choix = backlog/delivery sauf cohérence bloquante. Critères : simplicité, sécurité, testabilité, pas de daemon inutile, harness sans Studio.

---

## 9. État / Git / Cursor

Modèle d’états `21` + transitions `24` — harness = autorité d’application ; UI = vue dérivée du journal.

Git read réel ; denylist writes ; `gitEffect=none-remote`.

Cursor via port ; modes fixture/manual/adapter-future ; **pas d’API inventée**.

---

## 10. `app/**`

Au **delivery uniquement** (POC-G9, fermé) : modifications **minimales** cockpit / adaptateur / affichage.
Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans ce cycle.

---

## 11. Recommandation → décision

| Élément | Statut |
|---------|--------|
| Option B minimale | **RETENUE / VALIDÉE** (Morris) |
| Harness autonome | **Conservé** (cœur) |
| Option A | Mode test / dégradé **VALIDÉ** |
| Option C | **Écartée** premier POC |
| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| Versionnement docs | **CONSOMMÉ / INTÉGRÉ** (PR #221 / `40f8ebe…`) |
| Prochaine décision | Ouverture éventuelle **POC-G8** — **FERMÉE** |

---

## 12. Réserves

1. Cursor réel non prouvé
2. Techno harness ouverte (Node/TS candidat)
3. Protocole adaptateur ouvert
4. Allowlist détaillée → backlog
5. Modif `app/**` seulement au delivery, bornée
6. Preuve QA : Studio ≠ seconde vérité
7. Clôture AF séparée
8. POC-G8/G9 fermés ; POC non lancé

---

*Architecture POC Option B minimale — POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉE (PR #221 / 40f8ebe…) — POC-G8 FERMÉ — POC NON LANCÉ.*

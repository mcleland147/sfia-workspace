# SFIA Studio — Allowlist, denylist et critères d’acceptation POC S1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `27-poc-orchestration-allowlist-and-acceptance.md` |
| **Cycle** | 5 — Backlog |
| **Profil** | Critical |
| **Gate** | POC-G8 CONSOMMÉ |
| **POC-G9** | **FERMÉ** |
| **POC** | **NON LANCÉ** |
| **Statut allowlist** | **CANDIDATE** — validation Morris requise |
| **Architecture** | Option B minimale (inchangée) |
| **Base** | `main` @ `60e6880…` |

> Défaut = **deny**. Toute action non listée est refusée. Fail-closed.

---

## 1. Principes

1. Allowlist explicite > conventions implicites.
2. Harness applique et revalide ; Studio / adaptateur **n’évaluent pas**.
3. `contractHash` lie le GO au contrat ; modif ⇒ GO invalide.
4. `gitEffect=none-remote` pour le POC S1.
5. Pas de retry automatique après rejet.
6. Timeout / absence de message ≠ GO.
7. STOP prioritaire.
8. Secrets exclus du journal et des preuves affichées.

---

## 2. Allowlist Git candidate

### 2.1 Commandes autorisées (lecture)

| Commande | Usage S1 | Bornes |
|----------|----------|--------|
| `git branch --show-current` | Branche courante | — |
| `git rev-parse HEAD` | HEAD | — |
| `git rev-parse origin/main` | Réf main | Ref explicite |
| `git merge-base <a> <b>` | Divergence | Refs allowlistées |
| `git status --short` | État worktree | — |
| `git diff --check` | Whitespace | Paths allowlistés |
| `git diff --stat` | Résumé | Paths allowlistés |
| `git diff --name-status` | Fichiers | Paths allowlistés |
| `git log` | Historique | `--oneline` + limite ≤ 20 ; refs allowlistées |
| `git show <ref>:<path>` | Contenu | Ref + path allowlistés |
| `git ls-remote` | Lecture remote | **read-only** ; pas de write |

### 2.2 Interdit (denylist Git) — non exhaustif, défaut deny

- `git add`, `git commit`, `git push`
- `git merge`, `git rebase`, `git cherry-pick`
- `git reset` destructif (`--hard`, etc.)
- `git checkout` / `git restore` destructifs de worktree hors preuve locale contrôlée
- `git clean`, suppression de branche
- modification de remote / `git remote set-url`
- write GitHub (PR create/merge, releases, secrets)
- tout shell composé non listé (`&&`, pipes vers write, etc.)

**Effet attendu :** rejet `orchestrator.rejected` ; aucune exécution.

---

## 3. Allowlist documentaire / fichiers candidate

### 3.1 Chemins candidats (à figer dans le contrat d’exécution)

| Zone | Exemple | Règle |
|------|---------|-------|
| Projet Studio docs | `projects/sfia-studio/*.md` (hors `app/**` sauf GO delivery) | Lecture |
| Méthode (si contrat) | chemins méthode explicitement listés | Lecture |
| Preuves locales | `proofDir` dédié POC | Lecture/écriture **locale** preuves seulement |
| Fixtures POC | répertoire fixtures déclaré | Lecture |

### 3.2 Bornes

| Borne | Valeur candidate |
|-------|------------------|
| Extensions | `.md`, `.txt`, `.json`, `.jsonl` (autres = deny) |
| Nb max fichiers / run | 30 |
| Taille max / fichier | 512 KiB |
| Taille max agrégée | 5 MiB |
| Traversée | Interdite (`..`, symlinks hors root) |
| Secrets | Interdits (`.env`, credentials, clés) |
| `app/**` | **Interdit** en S1 backlog/delivery sauf GO POC-G9 explicite borné |
| Chemins protégés méthode | Selon règles repo — deny par défaut |

---

## 4. Allowlist Cursor candidate

| Règle | Détail |
|-------|--------|
| Entrée | Via `CursorExecutorPort` uniquement |
| Modes | `fixture` (Must) · `manual` (Must) · `real-adapter` (ouvert — spike) |
| Instruction | Bornée par contrat (objectif DOC read-only) |
| CWD | Répertoire imposé par contrat |
| Timeout | Configurable (candidat 120–300 s) |
| Sortie | Capturée (stdout/stderr/artefacts locaux) |
| Hors scope | Deny |
| Action distante | Deny |
| Élargissement autonome | Deny |
| API inventée | **Interdite** |

---

## 5. Allowlist adaptateur / Studio

| Autorisé | Interdit |
|----------|----------|
| Émettre intention | Créer GO |
| Transmettre GO/STOP explicites Morris | Interpréter clic ambigu comme GO |
| Interroger statut | Exécuter Git/Cursor |
| Afficher vues dérivées | Évaluer allowlist |
| Corrélation IDs | Persister vérité exclusive |
| | Modifier contrat / hash |
| | Retry auto / auto-clôture |

---

## 6. Contrats autorisés (rappel)

Voir `24` : `StudioIntent`, `StudioGateSubmission` (GO + `contractHash`), `StudioStopRequest`, `AdapterEnvelope`, `StudioExecutionView`, plus contrats cœur harness.

**Invariant :** GO sans `contractHash` valide = rejet.

---

## 7. Scénarios d’acceptation Must

### A1 — Nominal S1

| | |
|--|--|
| **Given** | Intention DOC bornée + contrat hashé + allowlist OK + Git readable |
| **When** | Morris émet GO explicite |
| **Then** | Harness revalide ; exécute read-only ; journalise ; produit preuves ; Studio affiche statut dérivé |
| **Preuves** | GO, journal, HEAD, artefacts, `gitEffect=none-remote` |

### A2 — Rejet hors allowlist

| | |
|--|--|
| **Given** | Demande `git push` ou path hors liste |
| **When** | Policy évalue |
| **Then** | Rejet ; aucune exécution Cursor write ; événement journalisé ; pas de retry auto |
| **Preuves** | `orchestrator.rejected` |

### A3 — Contrat modifié / hash mismatch

| | |
|--|--|
| **Given** | GO émis pour hash H1 |
| **When** | Contrat devient H2 |
| **Then** | GO invalide ; rejet ; nouveau GO requis |
| **Preuves** | reject + hashes |

### A4 — STOP

| | |
|--|--|
| **Given** | Exécution active |
| **When** | STOP explicite Morris |
| **Then** | Arrêt prioritaire ; preuve STOP ; pas de poursuite |
| **Preuves** | `execution.stopped` |

### A5 — Sans Studio (Option A)

| | |
|--|--|
| **Given** | Harness seul + fixtures |
| **When** | Scénario A1/A2 |
| **Then** | Preuves produites sans UI |
| **Preuves** | Run CLI/fixture |

### A6 — UI indisponible

| | |
|--|--|
| **Given** | Studio down |
| **When** | Message absent / timeout |
| **Then** | ≠ GO ; harness non corrompu |
| **Preuves** | Journal timeout/safe |

---

## 8. Critères fail-closed

1. Défaut deny.
2. Erreur / timeout / message manquant ⇒ pas d’autorisation.
3. Hash mismatch ⇒ rejet.
4. Scope elevation ⇒ rejet.
5. Replay GO consommé ⇒ rejet / no-op journalisé.
6. Injection path / command ⇒ rejet.
7. Contournement harness (appel direct Git/Cursor depuis UI) ⇒ hors design ; tests de non-régression.
8. Fuite secret ⇒ stop + redaction.

---

## 9. Abuse cases (matrice minimale)

| ID | Case | Attendu |
|----|------|---------|
| AB-01 | Falsification GO UI | Rejet harness |
| AB-02 | Replay enveloppe | Rejet / no-op |
| AB-03 | Altération contractHash | Rejet |
| AB-04 | Élévation scope | Rejet |
| AB-05 | Injection `../` / commande | Rejet |
| AB-06 | Contournement harness | Non possible via adaptateur ; test |
| AB-07 | Exposition preuve sensible | Redaction / deny |
| AB-08 | Studio down pendant run | Safe / STOP possible côté harness |

---

## 10. Preuves attendues (pack S1)

| Preuve | Obligatoire |
|--------|-------------|
| Trace GO Morris + hash | Oui |
| Journal JSONL corrélé | Oui |
| Trace rejet allowlist | Oui |
| HEAD / status Git avant-après (read) | Oui |
| Affirmation `none-remote` | Oui |
| Artefacts Cursor/fixture | Oui |
| Trace STOP | Oui (scénario A4) |
| Preuve run sans Studio | Oui |
| Preuve statut UI dérivé | Oui (si cockpit livré) |

---

## 11. Validation Morris requise

Cette allowlist / denylist est **candidate**.

Avant POC-G9, Morris doit :

1. Valider ou corriger les listes §2–§5.
2. Valider les bornes fichiers §3.2.
3. Confirmer modes Cursor acceptables pour le 1er delivery.
4. Confirmer que `app/**` reste hors S1 jusqu’à GO delivery borné.

---

*Allowlist S1 candidate — POC-G8 — POC-G9 FERMÉ — POC NON LANCÉ — défaut deny.*

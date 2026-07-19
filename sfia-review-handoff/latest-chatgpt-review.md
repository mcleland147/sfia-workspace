# ChatGPT Review Pack — SFIA Studio Cycle 9 QA Documentary Gate Alignment — Critical

## 0. Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure** | 2026-07-19 16:57:59 CEST (Europe/Paris) |
| **Cycle** | 9 — QA / validation corrective documentaire |
| **Profil** | Critical |
| **Typologie** | QA / DOC / SEC / GOVERNANCE |
| **Décision Morris consommée** | POC-G9 harness-only ; allowlist initiale S1 **validée pour cet incrément** ; élargissement = nouveau GO |
| **Branche** | `delivery/sfia-studio-poc-s1-harness` (**locale**) |
| **Base / HEAD** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
| **origin/main** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
| **Handoff précédent** | `e1c7902…` Cycle 8 Delivery Critical |
| **Niveau** | **full** |
| **Code modifié** | **NON** |
| **Commit/push/PR delivery** | **FERMÉS** |
| **Push distant autorisé** | `origin/sfia/review-handoff` uniquement |

---

## 1. Local Git Truth Check

**PASS**

- branche = `delivery/sfia-studio-poc-s1-harness`
- HEAD = origin/main = `d45cc54f97479cefa3d2612c6e1a965ff50958bb`
- aucun staged
- remote delivery absente
- harness présent ; aucun `app/**` ; aucun Docker ; aucun commit delivery

```
M projects/sfia-studio/07-product-trajectory-and-decision-pack.md
 M projects/sfia-studio/20-poc-orchestration-framing.md
 M projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
 M projects/sfia-studio/22-poc-orchestration-decision-pack.md
 M projects/sfia-studio/23-poc-orchestration-technical-architecture.md
 M projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
 M projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
 M projects/sfia-studio/26-poc-orchestration-backlog.md
 M projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
 M projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
 M projects/sfia-studio/README.md
?? .tmp-sfia-review/
?? projects/sfia-studio/harness/
```

---

## 2. Handoff précédent

| Champ | Valeur |
|-------|--------|
| SHA | `e1c7902e83576ea3b6ae9981841c49e42a3cbf3f` |
| Cycle | 8 Delivery Critical |
| Contenu | Harness-only ; 26 tests ; POC-G9 consommé ; evidence review required |
| Verdict | POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT |

**Handoff précédent :** COMPLET

---

## 3. Incohérences initiales (revue preuves Cycle 8)

1. Document `27` : `Statut allowlist = CANDIDATE — validation Morris requise` alors que POC-G9 harness-only déjà consommé.
2. Document `27` §11 : « allowlist candidate » / « avant élargissement » formulé comme si validation initiale non faite.
3. Document `28` : réserves « allowlist candidate jusqu’à validation Morris », « POC-G9 / lancement non autorisés », « Docker … avant POC-G9 », verdict backlog « POC-G9 DECISION REQUIRED ».
4. Documents de cohérence (README, `07`, `22`, `25`, `26`, etc.) : statuts courants encore « POC-G9 fermé » / allowlist candidate.
5. `21`/`23`/`24` : pied de page / métadonnées POC-G9 FERMÉ (bloquant pour STOP textuel).

---

## 4. Corrections document 27

- Métadonnées : POC-G9 CONSOMMÉ ; allowlist **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** ; base `d45cc54…`.
- Callout : défaut deny ; fixture only ; none-remote ; `app/**` interdit ; élargissement = nouveau GO ; pas validation définitive tous incréments.
- Titres §2–§4 : « initiale S1 — harness-only » (contenu technique tables **conservé**).
- Modes Cursor : **fixture uniquement** pour cet incrément.
- §11 : statut validé + réserve révisable + élargissement = GO.

### Contenu complet `27`

```markdown
# SFIA Studio — Allowlist, denylist et critères d’acceptation POC S1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `27-poc-orchestration-allowlist-and-acceptance.md` |
| **Cycle** | 9 — QA corrective documentaire (statuts) ; fond technique Cycle 5 |
| **Profil** | Critical |
| **Gate** | POC-G8 CONSOMMÉ |
| **POC-G9** | **CONSOMMÉ** (harness-only ; allowlist initiale) |
| **POC** | **NON LANCÉ** |
| **Statut allowlist** | **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — élargissement = nouveau GO Morris |
| **Architecture** | Option B minimale (inchangée) |
| **Base** | `main` @ `d45cc54…` |

> Défaut = **deny**. Toute action non listée est refusée. Fail-closed.
>
> **Allowlist initiale S1** : **VALIDÉE** pour l’incrément harness-only livré localement (POC-G9).
> Périmètre = règles de ce document telles que définies. `app/**` **interdit**. `cursorMode=fixture` uniquement pour cet incrément. `gitEffect=none-remote`.
> Tout élargissement (chemins, commandes, modes Cursor, effets Git) exige un **nouveau GO Morris**.
> Cette validation **ne** vaut **pas** validation définitive pour tous les futurs incréments.

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

## 2. Allowlist Git (initiale S1 — harness-only)

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

## 3. Allowlist documentaire / fichiers (initiale S1 — harness-only)

### 3.1 Chemins (figés dans le contrat d’exécution harness-only)

| Zone | Exemple | Règle |
|------|---------|-------|
| Projet Studio docs | `projects/sfia-studio/*.md` (hors `app/**`) | Lecture |
| Méthode (si contrat) | chemins méthode explicitement listés | Lecture |
| Preuves locales | `proofDir` dédié POC | Lecture/écriture **locale** preuves seulement |
| Fixtures POC | répertoire fixtures déclaré | Lecture |

### 3.2 Bornes

| Borne | Valeur (incrément harness-only) |
|-------|------------------|
| Extensions | `.md`, `.txt`, `.json`, `.jsonl` (autres = deny) |
| Nb max fichiers / run | 30 |
| Taille max / fichier | 512 KiB |
| Taille max agrégée | 5 MiB |
| Traversée | Interdite (`..`, symlinks hors root) |
| Secrets | Interdits (`.env`, credentials, clés) |
| `app/**` | **Interdit** — POC-G9 harness-only n’autorise **pas** `app/**` |
| Chemins protégés méthode | Selon règles repo — deny par défaut |

---

## 4. Allowlist Cursor (initiale S1 — harness-only)

| Règle | Détail |
|-------|--------|
| Entrée | Via `CursorExecutorPort` uniquement |
| Modes | **Cet incrément :** `fixture` **uniquement**. `manual` / `real-adapter` = futurs GO Morris (fermés ici) |
| Instruction | Bornée par contrat (objectif DOC read-only) |
| CWD | Répertoire imposé par contrat |
| Timeout | Configurable (borné par contrat ; ex. 30–300 s) |
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

## 11. Statut de validation Morris

L’allowlist / denylist de ce document est **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** (POC-G9 consommé).

**Réserve explicite :** validation limitée à cet incrément. L’allowlist reste **révisable**. Tout élargissement de chemins, commandes, modes Cursor ou effets Git est soumis à un **nouveau GO Morris**.

Pour tout élargissement futur, Morris doit notamment :

1. Valider ou corriger les listes §2–§5 au-delà du périmètre actuel.
2. Valider toute nouvelle borne fichiers §3.2.
3. Autoriser explicitement tout mode Cursor autre que `fixture`.
4. Autoriser explicitement tout touch `app/**` (aujourd’hui **interdit**).

Cette validation initiale **n’autorise pas** : Cursor manuel/réel, écriture Git, Docker, multi-scénario, industrialisation.

---

*Allowlist S1 initiale VALIDÉE harness-only — POC-G9 CONSOMMÉ — POC NON LANCÉ — défaut deny — app/** interdit — élargissement = nouveau GO.*

```

### Diff complet `27`

```diff
diff --git a/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md b/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
index 774a41b..03cbc5d 100644
--- a/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
+++ b/projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
@@ -3,16 +3,21 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `27-poc-orchestration-allowlist-and-acceptance.md` |
-| **Cycle** | 5 — Backlog |
+| **Cycle** | 9 — QA corrective documentaire (statuts) ; fond technique Cycle 5 |
 | **Profil** | Critical |
 | **Gate** | POC-G8 CONSOMMÉ |
-| **POC-G9** | **FERMÉ** |
+| **POC-G9** | **CONSOMMÉ** (harness-only ; allowlist initiale) |
 | **POC** | **NON LANCÉ** |
-| **Statut allowlist** | **CANDIDATE** — validation Morris requise |
+| **Statut allowlist** | **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — élargissement = nouveau GO Morris |
 | **Architecture** | Option B minimale (inchangée) |
-| **Base** | `main` @ `60e6880…` |
+| **Base** | `main` @ `d45cc54…` |
 
 > Défaut = **deny**. Toute action non listée est refusée. Fail-closed.
+>
+> **Allowlist initiale S1** : **VALIDÉE** pour l’incrément harness-only livré localement (POC-G9).
+> Périmètre = règles de ce document telles que définies. `app/**` **interdit**. `cursorMode=fixture` uniquement pour cet incrément. `gitEffect=none-remote`.
+> Tout élargissement (chemins, commandes, modes Cursor, effets Git) exige un **nouveau GO Morris**.
+> Cette validation **ne** vaut **pas** validation définitive pour tous les futurs incréments.
 
 ---
 
@@ -29,7 +34,7 @@
 
 ---
 
-## 2. Allowlist Git candidate
+## 2. Allowlist Git (initiale S1 — harness-only)
 
 ### 2.1 Commandes autorisées (lecture)
 
@@ -62,20 +67,20 @@
 
 ---
 
-## 3. Allowlist documentaire / fichiers candidate
+## 3. Allowlist documentaire / fichiers (initiale S1 — harness-only)
 
-### 3.1 Chemins candidats (à figer dans le contrat d’exécution)
+### 3.1 Chemins (figés dans le contrat d’exécution harness-only)
 
 | Zone | Exemple | Règle |
 |------|---------|-------|
-| Projet Studio docs | `projects/sfia-studio/*.md` (hors `app/**` sauf GO delivery) | Lecture |
+| Projet Studio docs | `projects/sfia-studio/*.md` (hors `app/**`) | Lecture |
 | Méthode (si contrat) | chemins méthode explicitement listés | Lecture |
 | Preuves locales | `proofDir` dédié POC | Lecture/écriture **locale** preuves seulement |
 | Fixtures POC | répertoire fixtures déclaré | Lecture |
 
 ### 3.2 Bornes
 
-| Borne | Valeur candidate |
+| Borne | Valeur (incrément harness-only) |
 |-------|------------------|
 | Extensions | `.md`, `.txt`, `.json`, `.jsonl` (autres = deny) |
 | Nb max fichiers / run | 30 |
@@ -83,20 +88,20 @@
 | Taille max agrégée | 5 MiB |
 | Traversée | Interdite (`..`, symlinks hors root) |
 | Secrets | Interdits (`.env`, credentials, clés) |
-| `app/**` | **Interdit** en S1 backlog/delivery sauf GO POC-G9 explicite borné |
+| `app/**` | **Interdit** — POC-G9 harness-only n’autorise **pas** `app/**` |
 | Chemins protégés méthode | Selon règles repo — deny par défaut |
 
 ---
 
-## 4. Allowlist Cursor candidate
+## 4. Allowlist Cursor (initiale S1 — harness-only)
 
 | Règle | Détail |
 |-------|--------|
 | Entrée | Via `CursorExecutorPort` uniquement |
-| Modes | `fixture` (Must) · `manual` (Must) · `real-adapter` (ouvert — spike) |
+| Modes | **Cet incrément :** `fixture` **uniquement**. `manual` / `real-adapter` = futurs GO Morris (fermés ici) |
 | Instruction | Bornée par contrat (objectif DOC read-only) |
 | CWD | Répertoire imposé par contrat |
-| Timeout | Configurable (candidat 120–300 s) |
+| Timeout | Configurable (borné par contrat ; ex. 30–300 s) |
 | Sortie | Capturée (stdout/stderr/artefacts locaux) |
 | Hors scope | Deny |
 | Action distante | Deny |
@@ -229,17 +234,21 @@ Voir `24` : `StudioIntent`, `StudioGateSubmission` (GO + `contractHash`), `Studi
 
 ---
 
-## 11. Validation Morris requise
+## 11. Statut de validation Morris
 
-Cette allowlist / denylist est **candidate**.
+L’allowlist / denylist de ce document est **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** (POC-G9 consommé).
 
-Avant POC-G9, Morris doit :
+**Réserve explicite :** validation limitée à cet incrément. L’allowlist reste **révisable**. Tout élargissement de chemins, commandes, modes Cursor ou effets Git est soumis à un **nouveau GO Morris**.
 
-1. Valider ou corriger les listes §2–§5.
-2. Valider les bornes fichiers §3.2.
-3. Confirmer modes Cursor acceptables pour le 1er delivery.
-4. Confirmer que `app/**` reste hors S1 jusqu’à GO delivery borné.
+Pour tout élargissement futur, Morris doit notamment :
+
+1. Valider ou corriger les listes §2–§5 au-delà du périmètre actuel.
+2. Valider toute nouvelle borne fichiers §3.2.
+3. Autoriser explicitement tout mode Cursor autre que `fixture`.
+4. Autoriser explicitement tout touch `app/**` (aujourd’hui **interdit**).
+
+Cette validation initiale **n’autorise pas** : Cursor manuel/réel, écriture Git, Docker, multi-scénario, industrialisation.
 
 ---
 
-*Allowlist S1 candidate — POC-G8 — POC-G9 FERMÉ — POC NON LANCÉ — défaut deny.*
+*Allowlist S1 initiale VALIDÉE harness-only — POC-G9 CONSOMMÉ — POC NON LANCÉ — défaut deny — app/** interdit — élargissement = nouveau GO.*
```

---

## 5. Corrections document 28

- Métadonnées : delivery produit non versionné ; allowlist validée ; Cursor fixture ; Docker non retenu ; base à jour.
- §1 couverture : E5 validée ; E7 `app/**` fermé.
- §2 checklist **consommée** (plus « avant GO »).
- §4 réserves alignées (allowlist validée incrément ; Docker formulation demandée).
- §9 décisions consommées / restantes.
- §10 verdict Cycle 9 ; POC global non réussi.
- §11 actions interdites reformulées.

### Contenu complet `28`

```markdown
# SFIA Studio — Gate pack delivery POC S1 (POC-G9 harness-only)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `28-poc-orchestration-delivery-gate-pack.md` |
| **Cycle** | 9 — QA corrective documentaire (statuts) ; fond Cycle 5 |
| **Profil** | Critical |
| **POC-G8** | **CONSOMMÉ** (backlog produit) |
| **POC-G9** | **CONSOMMÉ** — harness-only local |
| **POC** | **NON LANCÉ** (pas d’autonomie permanente) |
| **Delivery** | Harness local **produit**, **non versionné** — commit/push/PR/merge **fermés** |
| **Allowlist** | **VALIDÉE** pour incrément harness-only S1 |
| **Cursor** | **fixture** uniquement (réel **fermé**) |
| **Docker** | **Non retenu** pour l’incrément ; option future = gate Morris |
| **Base** | `main` @ `d45cc54…` |
| **Architecture** | Option B minimale (inchangée) |

> POC-G9 **consommé** pour harness-only. Code sous `harness/`. `app/**` intact. Cursor fixture only. Docker non retenu. Commit/PR delivery = gates séparés.

---

## 1. Couverture backlog

| Epic | Couvert dans `26` | Ready pour instruction delivery ? |
|------|-------------------|-----------------------------------|
| E1 Contrats | Oui | Couvert harness-only local |
| E2 Harness | Oui | Oui |
| E3 GitReader | Oui | Oui |
| E4 CursorPort | Oui | Oui — réel = spike |
| E5 Policy | Oui + `27` | Allowlist initiale **validée** harness-only |
| E6 Adaptateur | Oui | Oui — protocole ouvert |
| E7 Cockpit | Oui | **Fermé** — `app/**` interdit (POC-G9 harness-only) |
| E8 Sécurité | Oui | Oui |
| E9 Observabilité | Oui | Oui |
| E10 QA | Oui | Oui |
| E11 Démo | Oui | Should |

---

## 2. Prérequis POC-G9 — statut après consommation harness-only

Checklist **consommée** pour l’incrément harness-only :

1. Backlog `26` validé / intégré (#223) — **fait**.
2. Allowlist/denylist `27` **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — **fait** ; élargissement = nouveau GO.
3. Option B confirmée : Studio cockpit / adaptateur fin / harness autonome — architecture inchangée ; Studio/adaptateur **non** livrés dans cet incrément.
4. Hors périmètre confirmé : no remote write, no L5 global, no MVP — **en vigueur**.
5. Modes Cursor pour cet incrément : **fixture uniquement** — **fait** ; manuel/réel **fermés**.
6. Touch `app/**` : **non** — harness-only ; `app/**` **fermé**.
7. Stratégie de preuve (§5) — preuves locales harness produites ; relecture evidence requise.
8. Plan de réversibilité (§7) — **en vigueur**.
9. Techno/protocole non présentés comme définitifs — **en vigueur**.

**POC-G9 = CONSOMMÉ** pour harness-only local.
**Restent fermés :** UI/`app/**` · Cursor réel · Docker (non retenu pour l’incrément) · commit/push/PR/merge · lancement autonome / industrialisation.
**POC global :** **non** validé comme réussi.

---

## 3. Risques delivery (harness-only / élargissements futurs)

| Risque | Sévérité | Mitigation |
|--------|----------|------------|
| Dérive Option C (orch. dans app) | Haute | Revues ; orch. hors `app/**` |
| Allowlist trop large | Haute | Allowlist initiale validée bornée ; défaut deny ; élargissement = GO |
| API Cursor inventée | Haute | Port + fixture ; spike avant « réel » |
| Seconde vérité UI | Haute | Statut dérivé journal |
| Écriture Git accidentelle | Haute | Denylist + tests A2 |
| Service permanent inutile | Moyenne | Processus local à la demande |
| Scope creep multi-scénario | Moyenne | S1 only |

---

## 4. Réserves conservées (architecture)

1. Cursor réel non prouvé — **fermé** pour cet incrément (fixture only).
2. Technologie harness ouverte (Node/TS candidat POC, pas Runtime produit définitif).
3. Protocole adaptateur ouvert — adaptateur/UI non livrés.
4. Allowlist initiale S1 **validée** pour le harness-only livré localement. Tout élargissement de chemins, commandes, modes Cursor ou effets Git nécessite un **nouveau GO Morris**.
5. `app/**` **fermé** — POC-G9 harness-only n’autorise pas `app/**`.
6. QA non-seconde-vérité.
7. Clôture AF séparée.
8. POC-G9 **consommé** pour harness-only ; **lancement autonome / industrialisation** et **commit/push/PR/merge** restent **fermés**.
9. **Docker** n’est pas utilisé pour l’incrément harness-only. Toute introduction ultérieure nécessite une décision Morris distincte. Docker n’est ni retenu ni définitivement exclu pour la trajectoire future.

---

## 5. Stratégie de preuve (delivery futur)

| Phase | Preuve |
|-------|--------|
| Harness-only | A1, A2, A4, A5 (`27`) verts |
| Sécurité | Matrice AB-01…08 |
| Option B UI | A1 + A6 + preuve statut dérivé |
| Démo Morris | Pack E11 |

Outils de test : ouverts (alignement repo). Pas de CI Studio imposée dans ce pack.

---

## 6. Sécurité (gate)

- Authority : Morris L0 ; harness revalide.
- Intégrité : `contractHash`.
- Replay : détection GO consommé.
- Injection : paths/commands.
- Fail-closed : défaut deny.
- Journal : pas de secrets.
- STOP : prioritaire.

---

## 7. Observabilité / réversibilité

| Thème | Exigence |
|-------|----------|
| Journal | JSONL corrélé |
| Preuves | Locales sous proofDir |
| Corrélation | request/execution/gate IDs |
| Erreurs | Explicitement journalisées |
| Reprise | Nouveau GO après rejet |
| Réversibilité | Pas d’effet distant ; cleanup local preuves possible |
| Mode dégradé | Option A sans Studio |

---

## 8. FinOps / GreenOps

- Local macOS.
- Pas de composant managé.
- Pas de daemon permanent non nécessaire.
- Protocole simple.
- Dette minimale.

---

## 9. Décisions Morris — consommées / restantes

### Consommées (POC-G9 harness-only)

1. Allowlist `27` **validée** pour l’incrément harness-only S1.
2. Premier incrément **harness-only** autorisé (`app/**` intact / fermé).
3. Mode Cursor : **fixture uniquement**.
4. Commit/push/PR/merge delivery = **gates séparés** (toujours fermés ici).

### Restantes (nouveau GO requis)

1. Review / re-review des preuves harness.
2. Commit / push / PR / merge delivery.
3. Toute surface `app/**` / UI Studio.
4. Cursor manuel ou réel (spike + preuve).
5. Introduction Docker.
6. Tout élargissement allowlist.
7. Lancement autonome / industrialisation / clôture AF.

---

## 10. Verdicts

Verdict **futur candidat** (après preuves validées + démo + décisions Morris) — **non actuel** :

`POC S1 EVIDENCE COMPLETE — MORRIS POST-POC DECISION REQUIRED`

**Verdict documentaire courant (Cycle 9 QA) :**

`DOCUMENTARY GATE ALIGNMENT COMPLETE — HARNESS DELIVERY READY FOR EVIDENCE RE-REVIEW`

Le POC global n’est **pas** déclaré réussi, lancé en autonomie ou industrialisé.

---

## 11. Actions interdites (rappel)

`app/**` · Cursor réel · Docker (cet incrément) · commit/push/PR/merge delivery · lancement autonome / industrialisation · L5 · writes Git distantes · élargissement allowlist sans nouveau GO · choix techno/protocole définitifs sans preuve

*(POC-G9 harness-only déjà consommé — ne pas relire comme « ouverture interdite » du harness local.)*

---

*Gate pack — POC-G9 CONSOMMÉ harness-only — allowlist initiale VALIDÉE pour cet incrément — POC NON LANCÉ — commit/PR fermés.*

```

### Diff complet `28`

```diff
diff --git a/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md b/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
index 32bee4f..348fb41 100644
--- a/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
+++ b/projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
@@ -1,18 +1,21 @@
-# SFIA Studio — Gate pack delivery POC S1 (prérequis POC-G9)
+# SFIA Studio — Gate pack delivery POC S1 (POC-G9 harness-only)
 
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `28-poc-orchestration-delivery-gate-pack.md` |
-| **Cycle** | 5 — Backlog |
+| **Cycle** | 9 — QA corrective documentaire (statuts) ; fond Cycle 5 |
 | **Profil** | Critical |
 | **POC-G8** | **CONSOMMÉ** (backlog produit) |
-| **POC-G9** | **FERMÉ** — décision Morris distincte |
-| **POC** | **NON LANCÉ** |
-| **Delivery** | **NON AUTORISÉ** |
-| **Base** | `main` @ `60e6880…` |
+| **POC-G9** | **CONSOMMÉ** — harness-only local |
+| **POC** | **NON LANCÉ** (pas d’autonomie permanente) |
+| **Delivery** | Harness local **produit**, **non versionné** — commit/push/PR/merge **fermés** |
+| **Allowlist** | **VALIDÉE** pour incrément harness-only S1 |
+| **Cursor** | **fixture** uniquement (réel **fermé**) |
+| **Docker** | **Non retenu** pour l’incrément ; option future = gate Morris |
+| **Base** | `main` @ `d45cc54…` |
 | **Architecture** | Option B minimale (inchangée) |
 
-> Ce document **prépare** POC-G9. Il ne l’ouvre pas. Il n’autorise ni code, ni `app/**`, ni lancement.
+> POC-G9 **consommé** pour harness-only. Code sous `harness/`. `app/**` intact. Cursor fixture only. Docker non retenu. Commit/PR delivery = gates séparés.
 
 ---
 
@@ -20,13 +23,13 @@
 
 | Epic | Couvert dans `26` | Ready pour instruction delivery ? |
 |------|-------------------|-----------------------------------|
-| E1 Contrats | Oui | Oui (après validation Morris backlog) |
+| E1 Contrats | Oui | Couvert harness-only local |
 | E2 Harness | Oui | Oui |
 | E3 GitReader | Oui | Oui |
 | E4 CursorPort | Oui | Oui — réel = spike |
-| E5 Policy | Oui + `27` | Oui — allowlist candidate |
+| E5 Policy | Oui + `27` | Allowlist initiale **validée** harness-only |
 | E6 Adaptateur | Oui | Oui — protocole ouvert |
-| E7 Cockpit | Oui | Oui — `app/**` seulement si POC-G9 |
+| E7 Cockpit | Oui | **Fermé** — `app/**` interdit (POC-G9 harness-only) |
 | E8 Sécurité | Oui | Oui |
 | E9 Observabilité | Oui | Oui |
 | E10 QA | Oui | Oui |
@@ -34,30 +37,32 @@
 
 ---
 
-## 2. Prérequis POC-G9 (checklist)
+## 2. Prérequis POC-G9 — statut après consommation harness-only
 
-Avant tout GO delivery, Morris doit disposer de :
+Checklist **consommée** pour l’incrément harness-only :
 
-1. Backlog `26` validé (ou corrections actées).
-2. Allowlist/denylist `27` **validée** (plus seulement candidate).
-3. Confirmation Option B : Studio cockpit / adaptateur fin / harness autonome.
-4. Confirmation hors périmètre : no remote write, no L5 global, no MVP.
-5. Décision explicite sur modes Cursor acceptés pour le 1er incrément (fixture±manual).
-6. Décision sur touch `app/**` (oui borné / non — harness-only d’abord).
-7. Stratégie de preuve acceptée (§5).
-8. Plan de réversibilité (§7).
-9. Aucune techno/protocole présentée comme définitive sans preuve.
+1. Backlog `26` validé / intégré (#223) — **fait**.
+2. Allowlist/denylist `27` **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — **fait** ; élargissement = nouveau GO.
+3. Option B confirmée : Studio cockpit / adaptateur fin / harness autonome — architecture inchangée ; Studio/adaptateur **non** livrés dans cet incrément.
+4. Hors périmètre confirmé : no remote write, no L5 global, no MVP — **en vigueur**.
+5. Modes Cursor pour cet incrément : **fixture uniquement** — **fait** ; manuel/réel **fermés**.
+6. Touch `app/**` : **non** — harness-only ; `app/**` **fermé**.
+7. Stratégie de preuve (§5) — preuves locales harness produites ; relecture evidence requise.
+8. Plan de réversibilité (§7) — **en vigueur**.
+9. Techno/protocole non présentés comme définitifs — **en vigueur**.
 
-**POC-G9 reste FERMÉ jusqu’à GO Morris explicite.**
+**POC-G9 = CONSOMMÉ** pour harness-only local.
+**Restent fermés :** UI/`app/**` · Cursor réel · Docker (non retenu pour l’incrément) · commit/push/PR/merge · lancement autonome / industrialisation.
+**POC global :** **non** validé comme réussi.
 
 ---
 
-## 3. Risques delivery (à traiter si POC-G9)
+## 3. Risques delivery (harness-only / élargissements futurs)
 
 | Risque | Sévérité | Mitigation |
 |--------|----------|------------|
 | Dérive Option C (orch. dans app) | Haute | Revues ; orch. hors `app/**` |
-| Allowlist trop large | Haute | Validation `27` ; défaut deny |
+| Allowlist trop large | Haute | Allowlist initiale validée bornée ; défaut deny ; élargissement = GO |
 | API Cursor inventée | Haute | Port + fixture ; spike avant « réel » |
 | Seconde vérité UI | Haute | Statut dérivé journal |
 | Écriture Git accidentelle | Haute | Denylist + tests A2 |
@@ -68,15 +73,15 @@ Avant tout GO delivery, Morris doit disposer de :
 
 ## 4. Réserves conservées (architecture)
 
-1. Cursor réel non prouvé.
-2. Technologie harness ouverte (Node/TS candidat).
-3. Protocole adaptateur ouvert.
-4. Allowlist détaillée = candidate jusqu’à validation Morris.
-5. `app/**` uniquement delivery borné.
+1. Cursor réel non prouvé — **fermé** pour cet incrément (fixture only).
+2. Technologie harness ouverte (Node/TS candidat POC, pas Runtime produit définitif).
+3. Protocole adaptateur ouvert — adaptateur/UI non livrés.
+4. Allowlist initiale S1 **validée** pour le harness-only livré localement. Tout élargissement de chemins, commandes, modes Cursor ou effets Git nécessite un **nouveau GO Morris**.
+5. `app/**` **fermé** — POC-G9 harness-only n’autorise pas `app/**`.
 6. QA non-seconde-vérité.
 7. Clôture AF séparée.
-8. POC-G9 / lancement non autorisés ici.
-9. **Docker** : option / spike d’évaluation possible avant POC-G9 — **non décidé**, ni obligatoire ni exclu.
+8. POC-G9 **consommé** pour harness-only ; **lancement autonome / industrialisation** et **commit/push/PR/merge** restent **fermés**.
+9. **Docker** n’est pas utilisé pour l’incrément harness-only. Toute introduction ultérieure nécessite une décision Morris distincte. Docker n’est ni retenu ni définitivement exclu pour la trajectoire future.
 
 ---
 
@@ -129,47 +134,47 @@ Outils de test : ouverts (alignement repo). Pas de CI Studio imposée dans ce pa
 
 ---
 
-## 9. Décision Morris attendue (future)
+## 9. Décisions Morris — consommées / restantes
 
-### Question POC-G9
+### Consommées (POC-G9 harness-only)
 
-Autorisez-vous le **delivery** du POC S1 Option B selon `26`/`27`/`28` ?
+1. Allowlist `27` **validée** pour l’incrément harness-only S1.
+2. Premier incrément **harness-only** autorisé (`app/**` intact / fermé).
+3. Mode Cursor : **fixture uniquement**.
+4. Commit/push/PR/merge delivery = **gates séparés** (toujours fermés ici).
 
-Sous-questions :
+### Restantes (nouveau GO requis)
 
-1. Validez-vous l’allowlist `27` ?
-2. Autorisez-vous un premier incrément **harness-only** (sans `app/**`) ?
-3. Si UI : quelles surfaces `app/**` minimales ?
-4. Modes Cursor : fixture seulement / + manual / spike réel ?
-5. Commit/push/PR delivery = gates séparés après POC-G9.
-
-### Conséquences
-
-| Décision | Effet |
-|----------|-------|
-| GO POC-G9 | Delivery documentaire+code borné possible (cycle dédié) |
-| NO-GO | Backlog reste ; pas d’implémentation |
-| GO harness-only | `app/**` reste intact |
-| Claim Cursor réel | Spike + preuve obligatoires |
+1. Review / re-review des preuves harness.
+2. Commit / push / PR / merge delivery.
+3. Toute surface `app/**` / UI Studio.
+4. Cursor manuel ou réel (spike + preuve).
+5. Introduction Docker.
+6. Tout élargissement allowlist.
+7. Lancement autonome / industrialisation / clôture AF.
 
 ---
 
-## 10. Verdict futur (non actuel)
+## 10. Verdicts
 
-Verdict **candidat** après POC-G9 réussi + démo :
+Verdict **futur candidat** (après preuves validées + démo + décisions Morris) — **non actuel** :
 
 `POC S1 EVIDENCE COMPLETE — MORRIS POST-POC DECISION REQUIRED`
 
-**Verdict actuel de ce cycle :**
+**Verdict documentaire courant (Cycle 9 QA) :**
 
-`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
+`DOCUMENTARY GATE ALIGNMENT COMPLETE — HARNESS DELIVERY READY FOR EVIDENCE RE-REVIEW`
+
+Le POC global n’est **pas** déclaré réussi, lancé en autonomie ou industrialisé.
 
 ---
 
 ## 11. Actions interdites (rappel)
 
-code · `app/**` · commit/push/PR · merge · ouverture POC-G9 · lancement POC · L5 · writes Git distantes · choix techno/protocole définitifs sans preuve
+`app/**` · Cursor réel · Docker (cet incrément) · commit/push/PR/merge delivery · lancement autonome / industrialisation · L5 · writes Git distantes · élargissement allowlist sans nouveau GO · choix techno/protocole définitifs sans preuve
+
+*(POC-G9 harness-only déjà consommé — ne pas relire comme « ouverture interdite » du harness local.)*
 
 ---
 
-*Gate pack delivery — prépare POC-G9 — ne l’ouvre pas — POC NON LANCÉ.*
+*Gate pack — POC-G9 CONSOMMÉ harness-only — allowlist initiale VALIDÉE pour cet incrément — POC NON LANCÉ — commit/PR fermés.*
```

---

## 6. Corrections additionnelles (cohérence minimale)

Fichiers touchés pour supprimer statut courant contradictoire POC-G9 FERMÉ / allowlist candidate :

- README, `07`, `20` (déjà partiel Cycle 8), `22`, `25`, `26`, `harness/README.md`
- `21`, `23`, `24` : **uniquement** lignes de statut courant bloquantes (pas de réécriture architecture)

### Diffs cohérence

### `projects/sfia-studio/README.md`

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 1c6614c..9c27de6 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,23 +4,24 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `poc-backlog-g8-consumed` — POC-G8 **CONSOMMÉ** (backlog S1) ; Option B **INTÉGRÉE** ; POC-G7 **INTÉGRÉ** ; POC-G9 **FERMÉ** ; POC **non lancé** |
+| **Statut** | `poc-s1-harness-delivery-local` — POC-G9 **CONSOMMÉ** (harness-only) ; POC-G8 **CONSOMMÉ** ; Option B **INTÉGRÉE** ; POC **non lancé** ; `app/**` **intact** |
 | **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — backlog POC-G8 (BACKLOG/DOC/ARCH/SEC, Critical) |
-| **Typologie cycle** | BACKLOG / DOC / ARCH / SEC — Critical |
-| **Cycle projet** | 5 — Backlog / user stories (POC-G8) |
+| **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
+| **Typologie cycle** | DELIVERY / POC / ARCH / SEC / QA — Critical |
+| **Cycle projet** | 8 — Delivery / implémentation (harness-only) |
 | **Profil SFIA** | Critical |
-| **Branche backlog** | `backlog/sfia-studio-poc-orchestration-s1` (**locale**) |
+| **Branche delivery** | `delivery/sfia-studio-poc-s1-harness` (**locale**) |
 | **Branche architecture** | historique — MERGED #221 |
-| **Base canonique** | `origin/main` @ `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` |
+| **Base canonique** | `origin/main` @ `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
 | **Chemin** | `projects/sfia-studio/` |
 | **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur |
 | **Cadrage POC** | `20`–`22` — **INTÉGRÉS** ; POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** |
 | **Architecture POC** | `23`–`25` — **Option B minimale** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
-| **Backlog POC** | `26`–`28` — POC-G8 **CONSOMMÉ** ; allowlist **candidate** |
-| **POC** | **Non lancé** — delivery **fermé** (POC-G9) |
-| **Prochaine décision** | Ouverture éventuelle **POC-G9** — **FERMÉE** |
+| **Backlog POC** | `26`–`28` — **INTÉGRÉS** (#223) |
+| **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
+| **POC** | **Non lancé** (pas d’industrialisation / daemon) |
+| **Prochaine décision** | Review preuves + éventuel commit/push/PR delivery — **non autorisés** ici |
 
 ---
 
@@ -50,7 +51,7 @@
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
 | Automatisation | L3 + L4* / L0 — L5 global interdit (POC-G4) |
 | Git futur POC | Lecture réelle OK ; écritures distantes **simulées** (POC-G5) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **fermé** |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
 | Sync post-merge cadrage | PR #220 — **MERGED** (`b882892…`) |
 | Architecture POC | **Option B minimale** (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
 | Sync post-merge archi | PR #222 — **MERGED** (`60e6880…`) |
@@ -59,7 +60,7 @@
 | Branche cadrage | conservée |
 | Branches historiques | conservées |
 
-> Architecture Option B **INTÉGRÉE**. Backlog S1 produit (POC-G8). Studio cockpit + adaptateur + harness autonome. POC-G9 **fermé**. POC **non lancé**. Delivery **non autorisé**.
+> Architecture Option B **INTÉGRÉE**. Backlog S1 intégré. Harness-only local (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**. Commit/push/PR **fermés**. `app/**` intact.
 
 ---
 
@@ -139,12 +140,12 @@ Pré-cadrage
   → post-merge sync documentaire       ← PR #220 **MERGED** (`b882892…`)
   → architecture POC ciblée             ← POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B — PR #221 / `40f8ebe…`
   → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
-  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist candidate
-  → delivery POC                        ← POC-G9 **fermé**
+  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist initiale **validée** harness-only
+  → delivery harness-only                ← POC-G9 **CONSOMMÉ** (local ; commit/PR fermés)
   → décision Morris : abandon / itération / préparation MVP
 ```
 
-Architecture Option B **intégrée**. Backlog S1 **produit** (POC-G8). Harness autonome + Studio cockpit + adaptateur fin. POC-G9 **fermé**. POC **non lancé**.
+Architecture Option B **intégrée**. Backlog S1 **intégré**. Harness-only local (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**.
 
 ---
 
@@ -222,7 +223,7 @@ Architecture Option B **intégrée**. Backlog S1 **produit** (POC-G8). Harness a
 |----------|------|
 | [20-poc-orchestration-framing.md](./20-poc-orchestration-framing.md) | Problème, objectif, contraintes, critères — **VALIDÉ + INTÉGRÉ** |
 | [21-poc-orchestration-scenario-and-boundaries.md](./21-poc-orchestration-scenario-and-boundaries.md) | Scénario **S1** contrat de cadrage — **VALIDÉ + INTÉGRÉ** (**non exécuté**) |
-| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates — **VALIDÉ + INTÉGRÉ** (G7–G9 fermés) |
+| [22-poc-orchestration-decision-pack.md](./22-poc-orchestration-decision-pack.md) | POC-CAND / gates — G7–G8 OK ; G9 **CONSOMMÉ** harness-only |
 
 | Fait Git | Valeur |
 |----------|--------|
@@ -245,7 +246,7 @@ Architecture Option B **intégrée**. Backlog S1 **produit** (POC-G8). Harness a
 | Merge | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
 | Branche remote archi | **supprimée** après merge |
 
-> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. Versionnement **consommé**. POC-G8/G9 **fermés**. Runtime/protocole **ouverts**. POC **non lancé**.
+> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. POC-G8 **CONSOMMÉ**. POC-G9 **CONSOMMÉ** (harness-only). Runtime/protocole **ouverts**. POC **non lancé**.
 
 > Studio = cockpit. Adaptateur = sans autorité. Harness = cœur d’exécution autonome. Option C écartée (1er POC).
 
@@ -347,7 +348,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Sync #212 + finalisation #213 | **INTÉGRÉES** |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches historiques | Conservées ; décisions distinctes |
-| Contenu / architecture du POC orchestration | Option B — POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** (`26`–`28`) ; POC-G9 **fermé** |
+| Contenu / architecture du POC orchestration | Option B — POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
 | Définition MVP | **Non pris** |
 | Industrialisation | **Non engagée** |
 | Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
@@ -359,17 +360,17 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 ### Orientation Morris — architecture POC
 
 > POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ** (backlog S1). **Option B minimale** : Studio cockpit + adaptateur fin + harness autonome. Option A = test/dégradé. Option C écartée (1er POC).
-> **POC non lancé.** POC-G9 **fermé**. Delivery **non autorisé**. Allowlist **candidate**.
+> **POC non lancé.** POC-G9 **CONSOMMÉ** (harness-only). Allowlist initiale **validée** pour cet incrément. Commit/push/PR **fermés**.
 
 ---
 
 ## 8. Prochaine décision
 
-1. Validation Morris du backlog / allowlist (`26`–`28`).
-2. Ouverture éventuelle **POC-G9** (delivery) — **FERMÉE**.
+1. Evidence re-review du harness-only (allowlist initiale déjà validée pour cet incrément).
+2. Commit / push / PR / merge delivery — **fermés** (gates séparés).
 3. Clôture formelle AF (séparée).
 
-**Verdict documentaire :** `POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
+**Verdict documentaire :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`
 
 ---
 
@@ -385,6 +386,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 ---
 
+### Harness POC S1 (delivery local)
+
+| Document | Rôle |
+|----------|------|
+| [harness/README.md](./harness/README.md) | Harness-only — installation, CLI, limites |
+
 ### Navigation backlog POC
 
 | Document | Rôle |
@@ -393,4 +400,4 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [27-poc-orchestration-allowlist-and-acceptance.md](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist / denylist / critères |
 | [28-poc-orchestration-delivery-gate-pack.md](./28-poc-orchestration-delivery-gate-pack.md) | Prérequis POC-G9 |
 
-*SFIA Studio — Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*SFIA Studio — Option B — POC-G9 harness-only local — app/** intact — POC NON LANCÉ.*
```
### `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 06377f4..5c125f6 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -4,15 +4,15 @@
 |------------|--------|
 | **Projet** | SFIA Studio — projet officiel (G1) |
 | **Document** | `07-product-trajectory-and-decision-pack.md` |
-| **Cycle** | 5 — Backlog POC-G8 ; historique Option B conservé |
+| **Cycle** | 8 — Delivery harness-only POC-G9 |
 | **Profil** | Critical |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | POC-G8 **CONSOMMÉ** ; backlog S1 (`26`–`28`) ; POC-G9 **FERMÉ** ; POC **non lancé** |
-| **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist candidate |
+| **Statut** | POC-G9 **CONSOMMÉ** (harness-only local) ; POC-G8 **CONSOMMÉ** ; POC **non lancé** ; `app/**` intact |
+| **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist initiale **validée** harness-only |
 | **Destinataire** | Morris |
-| **Source de vérité** | `origin/main` @ `60e6880…` ; branche locale `backlog/sfia-studio-poc-orchestration-s1` |
+| **Source de vérité** | `origin/main` @ `d45cc54…` ; branche locale `delivery/sfia-studio-poc-s1-harness` |
 
-> Architecture Option B **intégrée**. Backlog S1 produit (POC-G8). Harness autonome + Studio cockpit + adaptateur fin. POC-G9 **fermé**. POC **non lancé**. Delivery **non autorisé**.
+> Architecture Option B **intégrée**. Backlog S1 intégré. Harness-only local (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**. Commit/push/PR **fermés**. `app/**` intact.
 
 ---
 
@@ -34,7 +34,7 @@
 | Branche Delivery | **Supprimée** (local + remote) |
 | Gate Morris Delivery P0 | **Aucune restante** |
 | App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
-| Prochaine orientation | Validation backlog + éventuel **POC-G9** — **FERMÉ** |
+| Prochaine orientation | Evidence re-review ; commit/push/PR delivery = gates séparés (**fermés**) |
 | Architecture POC | **Option B minimale** — POC-G7 **INTÉGRÉ** (PR #221) |
 | Sync post-merge archi | **MERGED** — PR #222 / `60e6880…` |
 | Backlog POC | POC-G8 **CONSOMMÉ** — docs `26`–`28` |
@@ -122,7 +122,7 @@ Pré-cadrage
   → architecture POC ciblée             ← POC-G7 **INTÉGRÉ** — Option B — PR #221
   → post-merge sync architecture        ← PR #222 **MERGED** (`60e6880…`)
   → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`)
-  → delivery POC                        ← POC-G9 fermé
+  → delivery harness-only                ← POC-G9 CONSOMMÉ (commit/PR fermés)
   → décision Morris : abandon / itération / préparation MVP
 ```
 
@@ -131,11 +131,11 @@ Pré-cadrage
 - Architecture : **Option B minimale** (intégrée).
 - Option A : mode test / dégradé harness.
 - Option C : écartée 1er POC.
-- POC-G8 : **CONSOMMÉ**. POC-G9 : **fermé**. POC : **non lancé**.
+- POC-G8 : **CONSOMMÉ**. POC-G9 : **CONSOMMÉ** (harness-only). POC : **non lancé**.
 
 ### Orientation
 
-> Backlog S1 produit (POC-G8). Allowlist candidate. Delivery (POC-G9) **fermé**. POC **non lancé**.
+> Backlog S1 intégré. Allowlist initiale **validée** harness-only. POC-G9 **consommé**. POC **non lancé**. Commit/PR **fermés**.
 
 ---
 
@@ -211,7 +211,7 @@ Pré-cadrage
 |-------|---------|
 | Statut | **VALIDÉ + INTÉGRÉ** — PR #219 / `be713c45…` — docs `20`/`21`/`22` |
 | Scénario | **S1** sélectionné (POC-G2) — contrat de cadrage (**non exécuté**) |
-| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** ; POC-G8/G9 **FERMÉS** |
+| Gates | POC-G1…G6 **VALIDÉS** ; POC-G10 **CONSOMMÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
 | Architecture | Option B minimale (`23`–`25`) — **INTÉGRÉE** (PR #221 / `40f8ebe…`) |
 | Ne lance pas | POC ; backlog ; delivery ; MVP |
 
@@ -260,7 +260,7 @@ Pré-cadrage
 | D-NEXT-15 | GO cadrage POC orchestration | Morris | **Consommée** — cadrage **VALIDÉ** 2026-07-19 |
 | D-NEXT-16 | Validation POC-CAND / POC-G1…G6 | Morris | **FAIT** — 2026-07-19 |
 | D-NEXT-17 | POC-G10 versionnement cadrage | Morris | **CONSOMMÉ** — PR #219 **MERGED** (`be713c45…`) |
-| D-NEXT-18 | Architecture / delivery POC | Morris | Architecture **intégrée** (#221) ; delivery POC **fermé** (POC-G9) |
+| D-NEXT-18 | Architecture / delivery POC | Morris | Architecture **intégrée** (#221) ; harness-only **consommé** ; commit/PR **fermés** |
 | D-NEXT-19 | GO versionnement sync post-merge cadrage | Morris | **CONSOMMÉ** — PR #220 **MERGED** (`b882892…`) |
 | D-NEXT-20 | GO merge PR #220 | Morris | **CONSOMMÉ** — **MERGED** |
 | D-NEXT-21 | Ouverture POC-G7 (instruction) | Morris | **Consommée** → validation avec réserves |
@@ -269,8 +269,10 @@ Pré-cadrage
 | D-NEXT-24 | Ouverture POC-G8 | Morris | **CONSOMMÉ** — backlog `26`–`28` |
 | D-NEXT-25 | GO merge PR #221 | Morris | **CONSOMMÉ** — **MERGED** |
 | D-NEXT-26 | Versionnement sync post-merge archi | Morris | **CONSOMMÉ** — PR #222 **MERGED** (`60e6880…`) |
-| D-NEXT-27 | Validation backlog / allowlist | Morris | **Requise** |
-| D-NEXT-28 | Ouverture POC-G9 (delivery) | Morris | **Fermée** |
+| D-NEXT-27 | Validation backlog / allowlist initiale harness-only | Morris | **CONSOMMÉE** |
+| D-NEXT-28 | Ouverture POC-G9 (delivery harness-only) | Morris | **CONSOMMÉ** |
+| D-NEXT-29 | Commit/push/PR delivery harness | Morris | **Non autorisé** ici |
+| D-NEXT-30 | UI app/** / Cursor réel / Docker | Morris | **Fermés** |
 
 ---
 
@@ -326,13 +328,13 @@ Clôture formelle architecture fonctionnelle **non prononcée**. MVP / industria
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage POC : **validé + intégré**. Architecture Option B : **intégrée** (#221). POC-G8/G9 : **fermés**.
+Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage POC : **validé + intégré**. Architecture Option B : **intégrée** (#221). POC-G8 **CONSOMMÉ**. POC-G9 **CONSOMMÉ** (harness-only). Commit/PR **fermés**.
 
 ---
 
 ## 8. Questions Morris
 
-1. Validez-vous le backlog / allowlist (`26`–`28`) ?
+1. Evidence re-review du harness-only (allowlist initiale déjà validée pour cet incrément) ?
 2. Ouvrez-vous **POC-G9** (delivery borné) ?
 3. Clôture formelle AF (séparée) ?
 
@@ -352,7 +354,7 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 
 ## 10. Verdict documentaire
 
-**Verdict :** `POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`
+**Verdict :** `POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`
 
 ---
 
@@ -365,4 +367,4 @@ Les gates DF-G5+ **ne sont pas** validés. Delivery P0 : **CLÔTURÉ**. Cadrage
 | [20](./20-poc-orchestration-framing.md) · [21](./21-poc-orchestration-scenario-and-boundaries.md) · [22](./22-poc-orchestration-decision-pack.md) | Cadrage |
 | [11](./11-functional-architecture.md) | AF-Option C |
 
-*Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Option B — POC-G9 harness-only CONSOMMÉ — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*
```
### `projects/sfia-studio/20-poc-orchestration-framing.md`

```diff
diff --git a/projects/sfia-studio/20-poc-orchestration-framing.md b/projects/sfia-studio/20-poc-orchestration-framing.md
index 6f4ed10..b7db19a 100644
--- a/projects/sfia-studio/20-poc-orchestration-framing.md
+++ b/projects/sfia-studio/20-poc-orchestration-framing.md
@@ -16,7 +16,7 @@
 | **Architecture Runtime** | **Non validée** — ouverts |
 | **Destinataire** | Morris |
 
-> Cadrage **validé**. Architecture Option B **INTÉGRÉE**. Backlog S1 **produit** (POC-G8, `26`–`28`). POC-G9 **fermé**. POC **non lancé**.
+> Cadrage **validé**. Architecture Option B **INTÉGRÉE**. Backlog S1 **INTÉGRÉ** (#223). POC-G9 **CONSOMMÉ** (harness-only). POC **non lancé** (pas d’industrialisation).
 
 ### Décision Morris — validation du cadrage (2026-07-19)
 
@@ -28,7 +28,7 @@
 | POC-G1…G6 | **VALIDÉS** |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | POC-G8 | **CONSOMMÉ** (backlog) |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Intégration | #219–#222 @ `60e6880…` |
 
 ---
@@ -116,7 +116,7 @@ Intention Studio
 
 - Modification de `projects/sfia-studio/app/**`
 - Push / PR / merge du présent cadrage sans GO distinct (POC-G10)
-- Lancement du POC (POC-G9)
+- Lancement autonome / industrialisation du POC (hors POC-G9 harness-only)
 - Architecture technique détaillée du POC
 - Définition du MVP
 - Industrialisation
@@ -288,7 +288,7 @@ Pas de plateforme de supervision industrialisée.
 | Architecture POC ciblée | Après POC-G7 |
 | Choix techno orchestrateur | Architecture POC |
 | Backlog POC borné | Après POC-G8 |
-| Delivery POC | Après POC-G9 |
+| Delivery harness-only | POC-G9 **consommé** — commit/PR séparés |
 | Intégration réelle Git/Cursor | GO distincts (POC-G5+) |
 | Décision post-POC (abandon / itération / MVP) | DF-G6 / DF-G7 (proposés) |
 
@@ -302,12 +302,12 @@ Pas de plateforme de supervision industrialisée.
 | POC-G10 | **VALIDÉ / CONSOMMÉ / INTÉGRÉ** (PR #219) |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** — Option B |
 | **POC-G8** | **CONSOMMÉ** — backlog `26`–`28` |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Sync #220 / Archi #221 / Sync #222 | **MERGED** |
 
 **Architecture :** Option B minimale (Studio cockpit + adaptateur + harness autonome). Option A = test/dégradé. Option C écartée (1er POC).
 
-**Prochaine décision :** validation backlog / allowlist ; éventuel **POC-G9** — **FERMÉ**.
+**Prochaine décision :** review preuves harness ; éventuel commit/push/PR delivery — **non autorisés** ici.
 
 ---
 
@@ -327,4 +327,4 @@ Pas de plateforme de supervision industrialisée.
 
 ---
 
-*Cadrage INTÉGRÉ — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Cadrage INTÉGRÉ — POC-G9 harness-only CONSOMMÉ — POC NON LANCÉ — app/** intact.*
```
### `projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md`

```diff
diff --git a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
index ba5bbfe..7a0ad4b 100644
--- a/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
+++ b/projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
@@ -217,7 +217,7 @@ Le modèle d’état et le scénario restent un **contrat de cadrage**, pas une
 | Gate d’exécution | Avant Cursor | GO / CORRIGER / STOP |
 | Gate de clôture preuve | Après pack | CLOSING / ITERATE / ABANDON |
 
-Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ** (backlog `26`–`28`). POC-G9 **FERMÉ**.
+Les gates POC-G1…G6 **VALIDÉS**. POC-G10 **CONSOMMÉ**. POC-G7 **INTÉGRÉ**. POC-G8 **CONSOMMÉ**. POC-G9 **CONSOMMÉ** (harness-only).
 
 UI Studio versus harness : **Option B minimale** — Studio cockpit + adaptateur fin ; harness autonome (cœur). Option A conservée pour tests hors UI.
 
@@ -296,4 +296,4 @@ L’UI P0 **n’est pas** l’orchestrateur. Branchement réel UI↔orchestrateu
 
 ---
 
-*Scénario S1 VALIDÉ — NON EXÉCUTÉ — Option B — POC-G8 CONSOMMÉ (backlog) — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Scénario S1 VALIDÉ — harness-only local produit — Option B — POC-G9 CONSOMMÉ — POC NON LANCÉ (pas industrialisé).*
```
### `projects/sfia-studio/22-poc-orchestration-decision-pack.md`

```diff
diff --git a/projects/sfia-studio/22-poc-orchestration-decision-pack.md b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
index e954c3e..4445102 100644
--- a/projects/sfia-studio/22-poc-orchestration-decision-pack.md
+++ b/projects/sfia-studio/22-poc-orchestration-decision-pack.md
@@ -5,10 +5,10 @@
 | **Document** | `22-poc-orchestration-decision-pack.md` |
 | **Statut** | Cadrage **INTÉGRÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** (backlog) |
 | **POC** | **Non lancé** |
-| **POC-G9** | **FERMÉ** |
+| **POC-G9** | **CONSOMMÉ** (harness-only) |
 | **Backlog** | `26`–`28` |
 | **PR archi / sync** | #221 / #222 **MERGED** |
-| **main** | `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` |
+| **main** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |
 
 > Architecture **Option B minimale** intégrée. Backlog S1 produit. Harness autonome. Studio cockpit. Adaptateur sans autorité. Option C écartée (1er POC). Delivery **non autorisé**.
 
@@ -19,8 +19,8 @@
 1. Cadrage / sync / archi intégrés (#219–#222).
 2. POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**.
 3. POC-G8 **CONSOMMÉ** — backlog `26`–`28`.
-4. Allowlist **candidate** (`27`).
-5. POC-G9 fermé ; POC non lancé.
+4. Allowlist initiale **validée** pour harness-only (`27`) — élargissement = nouveau GO.
+5. POC-G9 **CONSOMMÉ** (harness-only) ; POC non lancé.
 
 ---
 
@@ -38,7 +38,7 @@
 | POC-G10 | **CONSOMMÉ** |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **POC-G8** | **CONSOMMÉ** (backlog) |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 
 ARCH-POC-CAND-* : voir `25` (inchangées).
 
@@ -50,16 +50,31 @@ ARCH-POC-CAND-* : voir `25` (inchangées).
 POC-G7 INTÉGRÉ → versionnement CONSOMMÉ (#221)
   → sync post-merge CONSOMMÉE (#222)
   → POC-G8 CONSOMMÉ (backlog 26–28)
-  → validation backlog / allowlist (Morris)
-  → POC-G9 (FERMÉ) → POC (NON LANCÉ)
+  → allowlist initiale validée harness-only ; élargissements = nouveau GO
+  → POC-G9 (CONSOMMÉ harness-only) → POC (NON LANCÉ)
 ```
 
 ---
 
 ## 11. Verdict
 
-**`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`**
+**`POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`**
 
 ---
 
 *Option B — G8 consommé — G9 fermé — POC NON LANCÉ.*
+
+---
+
+## Delivery POC-G9 (statut)
+
+| Élément | Statut |
+|---------|--------|
+| POC-G9 | **CONSOMMÉ** — harness-only local |
+| Branche | `delivery/sfia-studio-poc-s1-harness` (locale) |
+| Emplacement | `projects/sfia-studio/harness/` |
+| Cursor | fixture only |
+| Docker | non retenu (option ouverte) |
+| `app/**` | **intact** |
+| Commit/push/PR | **non autorisés** ici |
+| POC lancé | **Non** |
```
### `projects/sfia-studio/23-poc-orchestration-technical-architecture.md`

```diff
diff --git a/projects/sfia-studio/23-poc-orchestration-technical-architecture.md b/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
index faef801..85d2159 100644
--- a/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
+++ b/projects/sfia-studio/23-poc-orchestration-technical-architecture.md
@@ -10,7 +10,7 @@
 | **Base / main** | `origin/main` @ `40f8ebecf41608756e4e8184c860b3b966b786b3` |
 | **Statut** | **VALIDÉE AVEC RÉSERVES — INTÉGRÉE** (POC-G7) — PR [#221](https://github.com/mcleland147/sfia-workspace/pull/221) **MERGED** |
 | **Décision architecture** | **Option B minimale** — Studio cockpit + adaptateur fin + harness autonome |
-| **POC-G8 / G9** | POC-G8 **CONSOMMÉ** (backlog) · POC-G9 **FERMÉ** |
+| **POC-G8 / G9** | POC-G8 **CONSOMMÉ** · POC-G9 **CONSOMMÉ** (harness-only) |
 | **POC** | **Non lancé** |
 | **Runtime / techno / protocole** | **Ouverts** (non figés) |
 
@@ -185,7 +185,7 @@ Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans c
 | Option C | **Écartée** premier POC |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | Versionnement docs | **CONSOMMÉ / INTÉGRÉ** (PR #221 / `40f8ebe…`) |
-| Prochaine décision | Ouverture éventuelle **POC-G9** — **FERMÉE** (backlog POC-G8 consommé) |
+| Prochaine décision | Evidence re-review ; commit/push/PR delivery **fermés** |
 
 ---
 
@@ -202,4 +202,4 @@ Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans c
 
 ---
 
-*Architecture POC Option B minimale — INTÉGRÉE — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Architecture POC Option B minimale — INTÉGRÉE — POC-G9 CONSOMMÉ harness-only — POC NON LANCÉ.*
```
### `projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md`

```diff
diff --git a/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md b/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
index a22682a..b300cc4 100644
--- a/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
+++ b/projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
@@ -166,4 +166,4 @@ Effets locaux `proofDir` seulement ; remote inchangé.
 
 ---
 
-*Contrats Option B — INTÉGRÉS — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ.*
+*Contrats Option B — INTÉGRÉS — POC-G9 CONSOMMÉ harness-only — POC NON LANCÉ.*
```
### `projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md`

```diff
diff --git a/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
index 05a9a4c..811deab 100644
--- a/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
+++ b/projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
@@ -4,12 +4,12 @@
 |------------|--------|
 | **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
 | **Cycle** | Architecture Option B + post-merge + backlog POC-G8 |
-| **Statut** | POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **FERMÉ** |
+| **Statut** | POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
 | **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
 | **Architecture retenue** | **Option B minimale** — **INTÉGRÉE** (inchangée) |
 | **Backlog** | `26`–`28` |
 | **POC** | **Non lancé** |
-| **Base** | `main` @ `60e6880…` |
+| **Base** | `main` @ `d45cc54…` |
 
 ---
 
@@ -18,9 +18,9 @@
 1. #219–#222 MERGED (cadrage, sync, archi, sync post-merge).
 2. Option B minimale **RETENUE / INTÉGRÉE**.
 3. POC-G8 **CONSOMMÉ** — backlog borné S1 produit.
-4. Allowlist **candidate** (`27`) — validation Morris requise.
+4. Allowlist initiale **validée** pour harness-only (`27`) — élargissement = nouveau GO.
 5. ARCH-POC-CAND-01…12 **inchangées** (fond).
-6. POC-G9 **non ouvert**.
+6. POC-G9 **CONSOMMÉ** (harness-only).
 
 ---
 
@@ -50,10 +50,10 @@ Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 | POC-G10 | **CONSOMMÉ** |
 | POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
 | **POC-G8** | **CONSOMMÉ** |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Delivery / lancement POC | **NON AUTORISÉ** |
 
-**≠ READY FOR DELIVERY.** Backlog ≠ autorisation d’implémenter.
+**≠ READY FOR COMMIT / PR / MERGE.** Harness local ≠ versionnement ≠ industrialisation.
 
 ---
 
@@ -62,18 +62,18 @@ Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 1. Cursor réel non prouvé
 2. Techno harness ouverte
 3. Protocole adaptateur ouvert
-4. Allowlist candidate jusqu’à validation Morris
-5. `app/**` delivery borné seulement
+4. Allowlist initiale validée harness-only ; élargissement = nouveau GO
+5. `app/**` **fermé** (harness-only)
 6. QA non-seconde-vérité
 7. Clôture AF
-8. POC-G9
+8. Commit/push/PR delivery / UI / Cursor réel / Docker
 
 ---
 
 ## 7. Décisions Morris restantes
 
-1. Validation backlog / allowlist (`26`–`28`).
-2. Ouverture éventuelle **POC-G9**.
+1. Evidence re-review harness-only.
+2. Commit/push/PR delivery (gates séparés — fermés).
 3. Clôture AF (séparée).
 
 ---
@@ -82,8 +82,8 @@ Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.
 
 ```text
 POC-G8 CONSOMMÉ (backlog)
-  → validation Morris backlog/allowlist
-  → POC-G9 (FERMÉ)
+  → allowlist initiale validée harness-only
+  → POC-G9 (CONSOMMÉ harness-only)
   → POC (NON LANCÉ)
 ```
 
@@ -91,8 +91,14 @@ POC-G8 CONSOMMÉ (backlog)
 
 ## 9. Verdict
 
-**`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`**
+**`POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`**
 
 ---
 
-*Decision pack — Option B inchangée — POC-G8 consommé — POC-G9 fermé — POC NON LANCÉ.*
+*Decision pack — Option B inchangée — POC-G9 harness-only consommé — POC NON LANCÉ — app/** intact.*
+
+---
+
+## Delivery POC-G9 (statut architecture)
+
+Option B **inchangée**. Harness autonome sous `projects/sfia-studio/harness/`. Studio/adaptateur **non** implémentés. Cursor **fixture**. Docker **non** introduit.
```
### `projects/sfia-studio/26-poc-orchestration-backlog.md`

```diff
diff --git a/projects/sfia-studio/26-poc-orchestration-backlog.md b/projects/sfia-studio/26-poc-orchestration-backlog.md
index 123023d..91c76bc 100644
--- a/projects/sfia-studio/26-poc-orchestration-backlog.md
+++ b/projects/sfia-studio/26-poc-orchestration-backlog.md
@@ -5,8 +5,8 @@
 | **Document** | `26-poc-orchestration-backlog.md` |
 | **Cycle** | 5 — Backlog / user stories |
 | **Profil** | Critical |
-| **Gate** | **POC-G8 CONSOMMÉ** (ouverture backlog) |
-| **POC-G9** | **FERMÉ** |
+| **Gate** | **POC-G8 CONSOMMÉ** |
+| **POC-G9** | **CONSOMMÉ** (harness-only — hors UI) |
 | **POC** | **NON LANCÉ** |
 | **Scénario** | **S1** — DOC read-only gouverné |
 | **Architecture** | **Option B minimale** (inchangée) |
@@ -168,7 +168,7 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 | **Risques** | Replay |
 | **Stop** | Adaptateur crée une décision |
 | **Candidats** | Couche adaptateur (protocole **ouvert**) |
-| **Gate** | Spike protocole si nécessaire avant POC-G9 |
+| **Gate** | Spike protocole si nécessaire avant UI/adaptateur (hors harness-only) |
 
 #### US-E1-05 — Idempotence et corrélation
 
@@ -376,7 +376,7 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 | **Risques** | Liste trop large |
 | **Stop** | Action non listée acceptée |
 | **Candidats** | Config policy |
-| **Gate** | Validation Morris allowlist (`27`) |
+| **Gate** | Allowlist initiale validée harness-only (`27`) ; élargissement = nouveau GO |
 
 #### US-E5-02 — Pas de retry auto après rejet
 
@@ -447,8 +447,8 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 | **Preuves** | Capture runtime (après UI) + traces |
 | **Risques** | Orch. dans UI |
 | **Stop** | Bouton ambigu = GO |
-| **Candidats** | Extensions minimales `app/**` **uniquement au delivery** (POC-G9) |
-| **Gate** | POC-G9 pour toucher `app/**` |
+| **Candidats** | Extensions minimales `app/**` **uniquement si nouveau GO UI** (hors harness-only) |
+| **Gate** | Nouveau GO Morris pour toucher `app/**` (POC-G9 harness-only ne l’autorise pas) |
 
 #### US-E7-02 — UI indisponible ≠ corruption harness
 
@@ -575,7 +575,7 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 5. E9 preuves
 6. E8 abuse
 7. E10 QA sans Studio
-8. E6 adaptateur + E7 cockpit (app/** seulement si POC-G9)
+8. E6 adaptateur + E7 cockpit (`app/**` seulement si nouveau GO UI)
 9. E11 démo
 ```
 
@@ -608,9 +608,9 @@ Format : ID · Epic · Titre · Persona/composant · Besoin · Valeur · MoSCoW
 | Gate | Statut |
 |------|--------|
 | POC-G8 | **OUVERT / CONSOMMÉ** pour ce backlog |
-| POC-G9 | **FERMÉ** |
+| POC-G9 | **CONSOMMÉ** (harness-only) |
 | Delivery / lancement POC | **NON AUTORISÉS** |
 
 ---
 
-*Backlog S1 Option B — POC-G8 CONSOMMÉ — POC-G9 FERMÉ — POC NON LANCÉ — techno/protocole ouverts.*
+*Backlog S1 Option B — POC-G8 CONSOMMÉ — POC-G9 CONSOMMÉ harness-only — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*
```

### `harness/README.md` (untracked package — contenu après correction)

```markdown
# SFIA Studio — POC S1 Harness (harness-only)

| Métadonnée | Valeur |
|------------|--------|
| **Emplacement** | `projects/sfia-studio/harness/` |
| **Incrément** | POC-G9 harness-only |
| **Architecture** | Option B — harness autonome |
| **Studio / app/** | **Non touché** |
| **Cursor** | **Fixture uniquement** — aucun Cursor réel |
| **Docker** | **Non retenu** pour cet incrément (option ouverte) |
| **Git** | Lecture réelle allowlistée · `gitEffect=none-remote` |
| **Allowlist** | Initiale S1 **validée** pour cet incrément — élargissement = nouveau GO |
| **POC** | Preuves locales — **non industrialisé** / non lancé en autonomie permanente |

## Pourquoi cet emplacement

- Hors `app/**` (Next P0) — séparation AF-Option C / Option B.
- Aligné toolchain Node/TypeScript du projet Studio (vitest, tsc) sans Next.
- Package local autonome, testable sans UI.

## Installation

```bash
cd projects/sfia-studio/harness
npm install
```

## Commandes

```bash
npm run typecheck
npm test
npm run build
npm run cli -- validate-contract ./path/to/contract.json
npm run cli -- run-fixture ./fixtures/demo   # après génération locale
npm run cli -- inspect-journal <proofDir>
npm run cli -- verify-proofs <proofDir>
```

## Architecture effective

```text
fixture gate (Morris) → Orchestrator
  → PolicyEngine (default deny)
  → GateValidator (GO + contractHash)
  → StateMachine
  → GitReaderImpl (spawn git, shell:false)
  → CursorExecutorPortFixture
  → EventJournal (JSONL)
  → ProofStore (proofDir)
```

## Restrictions

- Aucune écriture Git distante (`add/commit/push/merge/rebase/...`).
- Aucune API Cursor inventée ; `realCursorClaimed: false` toujours.
- Aucun daemon / serveur HTTP requis.
- Aucun Dockerfile / docker-compose dans cet incrément.
- Aucune modification `projects/sfia-studio/app/**`.

## Nettoyage local

Supprimer les répertoires `proofs/` temporaires et `node_modules/` si besoin :

```bash
rm -rf proofs/* node_modules dist
```

## Limites / réserves

- Cursor réel = spike futur.
- Protocole adaptateur / UI Studio = hors incrément.
- Docker = option future non décidée.
- Allowlist détaillée toujours sujette à raffinement Morris.

```

---

## 7. Recherche textuelle (qualification)

Périmètre docs POC + README/07/harness README.

```
projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md:11:| **POC** | **Non lancé** |
projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md:66:5. `app/**` **fermé** (harness-only)
projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md:85:  → allowlist initiale validée harness-only
projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md:98:*Decision pack — Option B inchangée — POC-G9 harness-only consommé — POC NON LANCÉ — app/** intact.*
projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md:104:Option B **inchangée**. Harness autonome sous `projects/sfia-studio/harness/`. Studio/adaptateur **non** implémentés. Cursor **fixture**. Docker **non** introduit.
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:5:| **Document** | `27-poc-orchestration-allowlist-and-acceptance.md` |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:9:| **POC-G9** | **CONSOMMÉ** (harness-only ; allowlist initiale) |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:11:| **Statut allowlist** | **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** — élargissement = nouveau GO Morris |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:18:> Périmètre = règles de ce document telles que définies. `app/**` **interdit**. `cursorMode=fixture` uniquement pour cet incrément. `gitEffect=none-remote`.
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:29:4. `gitEffect=none-remote` pour le POC S1.
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:46:| `git merge-base <a> <b>` | Divergence | Refs allowlistées |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:48:| `git diff --check` | Whitespace | Paths allowlistés |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:49:| `git diff --stat` | Résumé | Paths allowlistés |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:50:| `git diff --name-status` | Fichiers | Paths allowlistés |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:51:| `git log` | Historique | `--oneline` + limite ≤ 20 ; refs allowlistées |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:52:| `git show <ref>:<path>` | Contenu | Ref + path allowlistés |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:76:| Projet Studio docs | `projects/sfia-studio/*.md` (hors `app/**`) | Lecture |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:79:| Fixtures POC | répertoire fixtures déclaré | Lecture |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:91:| `app/**` | **Interdit** — POC-G9 harness-only n’autorise **pas** `app/**` |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:101:| Modes | **Cet incrément :** `fixture` **uniquement**. `manual` / `real-adapter` = futurs GO Morris (fermés ici) |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:120:| Afficher vues dérivées | Évaluer allowlist |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:141:| **Given** | Intention DOC bornée + contrat hashé + allowlist OK + Git readable |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:144:| **Preuves** | GO, journal, HEAD, artefacts, `gitEffect=none-remote` |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:146:### A2 — Rejet hors allowlist
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:177:| **Given** | Harness seul + fixtures |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:180:| **Preuves** | Run CLI/fixture |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:227:| Trace rejet allowlist | Oui |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:229:| Affirmation `none-remote` | Oui |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:230:| Artefacts Cursor/fixture | Oui |
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:239:L’allowlist / denylist de ce document est **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** (POC-G9 consommé).
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:241:**Réserve explicite :** validation limitée à cet incrément. L’allowlist reste **révisable**. Tout élargissement de chemins, commandes, modes Cursor ou effets Git est soumis à un **nouveau GO Morris**.
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:247:3. Autoriser explicitement tout mode Cursor autre que `fixture`.
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:248:4. Autoriser explicitement tout touch `app/**` (aujourd’hui **interdit**).
projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md:254:*Allowlist S1 initiale VALIDÉE harness-only — POC-G9 CONSOMMÉ — POC NON LANCÉ — défaut deny — app/** interdit — élargissement = nouveau GO.*
projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md:8:| **POC** | **Non lancé** |
projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md:95:2. Le harness **revalide** tout message (GO, hash, allowlist, Git).
projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md:121:| Write remote | Denylist + `none-remote` |
projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md:144:Preuves S1 : GO, rejet allowlist, HEAD avant/après, `none-remote`, artefacts Cursor/manual.
projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md:165:6. POC-G8 consommé (backlog) ; POC-G9 fermé ; POC non lancé ; pas de protocole définitif non décidé.
projects/sfia-studio/harness/README.md:8:| **Studio / app/** | **Non touché** |
projects/sfia-studio/harness/README.md:11:| **Git** | Lecture réelle allowlistée · `gitEffect=none-remote` |
projects/sfia-studio/harness/README.md:13:| **POC** | Preuves locales — **non industrialisé** / non lancé en autonomie permanente |
projects/sfia-studio/harness/README.md:17:- Hors `app/**` (Next P0) — séparation AF-Option C / Option B.
projects/sfia-studio/harness/README.md:35:npm run cli -- run-fixture ./fixtures/demo   # après génération locale
projects/sfia-studio/harness/README.md:43:fixture gate (Morris) → Orchestrator
projects/sfia-studio/harness/README.md:59:- Aucune modification `projects/sfia-studio/app/**`.
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:13:| **Cursor** | **fixture** uniquement (réel **fermé**) |
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:18:> POC-G9 **consommé** pour harness-only. Code sous `harness/`. `app/**` intact. Cursor fixture only. Docker non retenu. Commit/PR delivery = gates séparés.
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:32:| E7 Cockpit | Oui | **Fermé** — `app/**` interdit (POC-G9 harness-only) |
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:48:5. Modes Cursor pour cet incrément : **fixture uniquement** — **fait** ; manuel/réel **fermés**.
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:49:6. Touch `app/**` : **non** — harness-only ; `app/**` **fermé**.
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:55:**Restent fermés :** UI/`app/**` · Cursor réel · Docker (non retenu pour l’incrément) · commit/push/PR/merge · lancement autonome / industrialisation.
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:64:| Dérive Option C (orch. dans app) | Haute | Revues ; orch. hors `app/**` |
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:66:| API Cursor inventée | Haute | Port + fixture ; spike avant « réel » |
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:76:1. Cursor réel non prouvé — **fermé** pour cet incrément (fixture only).
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:80:5. `app/**` **fermé** — POC-G9 harness-only n’autorise pas `app/**`.
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:142:2. Premier incrément **harness-only** autorisé (`app/**` intact / fermé).
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:143:3. Mode Cursor : **fixture uniquement**.
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:150:3. Toute surface `app/**` / UI Studio.
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:153:6. Tout élargissement allowlist.
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:168:Le POC global n’est **pas** déclaré réussi, lancé en autonomie ou industrialisé.
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:174:`app/**` · Cursor réel · Docker (cet incrément) · commit/push/PR/merge delivery · lancement autonome / industrialisation · L5 · writes Git distantes · élargissement allowlist sans nouveau GO · choix techno/protocole définitifs sans preuve
projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md:180:*Gate pack — POC-G9 CONSOMMÉ harness-only — allowlist initiale VALIDÉE pour cet incrément — POC NON LANCÉ — commit/PR fermés.*
projects/sfia-studio/26-poc-orchestration-backlog.md:25:Démontrer qu’une intention documentaire bornée peut être qualifiée, soumise à un gate Morris explicite, contrôlée par contrat + allowlist + `contractHash`, exécutée en read-only / `gitEffect=none-remote`, journalisée, stoppable, prouvée, et restituée dans Studio — via harness autonome + adaptateur fin.
projects/sfia-studio/26-poc-orchestration-backlog.md:60:7. Hors allowlist / denylist référencée (`27`).
projects/sfia-studio/26-poc-orchestration-backlog.md:77:1. Scénarios nominal + rejet allowlist + STOP prouvés.
projects/sfia-studio/26-poc-orchestration-backlog.md:93:| E5 | Policy et allowlist S1 | Must |
projects/sfia-studio/26-poc-orchestration-backlog.md:119:| **Preuves** | Schéma + fixture JSON |
projects/sfia-studio/26-poc-orchestration-backlog.md:122:| **Candidats** | Types partagés hors `app/**` (emplacement ouvert) |
projects/sfia-studio/26-poc-orchestration-backlog.md:198:| **Besoin** | Démarrer localement avec config (proofDir, allowlist path, timeouts) sans Studio |
projects/sfia-studio/26-poc-orchestration-backlog.md:230:| **Besoin** | Revalider GO, hash, allowlist, Git avant toute exécution |
projects/sfia-studio/26-poc-orchestration-backlog.md:234:| **G/W/T** | Given GO + allowlist OK ; When préconditions OK ; Then `accepted` ; sinon `rejected` |
projects/sfia-studio/26-poc-orchestration-backlog.md:262:| **Besoin** | Exécuter S1 via CLI/fixture sans UI |
projects/sfia-studio/26-poc-orchestration-backlog.md:266:| **G/W/T** | Given harness seul ; When scénario fixture ; Then preuves produites sans Studio |
projects/sfia-studio/26-poc-orchestration-backlog.md:277:#### US-E3-01 — Lectures Git allowlistées
projects/sfia-studio/26-poc-orchestration-backlog.md:286:| **G/W/T** | Given commande allowlistée ; When appelée ; Then stdout capturé + journalisé |
projects/sfia-studio/26-poc-orchestration-backlog.md:298:| **Besoin** | Refuser add/commit/push/merge/… ; `gitEffect=none-remote` |
projects/sfia-studio/26-poc-orchestration-backlog.md:334:| **Besoin** | Interface `execute(contract) → result` ; modes fixture / manual / future-adapter |
projects/sfia-studio/26-poc-orchestration-backlog.md:338:| **G/W/T** | Given un port ; When fixture mode ; Then résultat déterministe sans API Cursor inventée |
projects/sfia-studio/26-poc-orchestration-backlog.md:363:### E5 — Policy / allowlist S1
projects/sfia-studio/26-poc-orchestration-backlog.md:374:| **G/W/T** | Given action hors allowlist ; When évaluée ; Then rejet |
projects/sfia-studio/26-poc-orchestration-backlog.md:413:| **Stop** | Adaptateur évalue allowlist ou exécute Git |
projects/sfia-studio/26-poc-orchestration-backlog.md:450:| **Candidats** | Extensions minimales `app/**` **uniquement si nouveau GO UI** (hors harness-only) |
projects/sfia-studio/26-poc-orchestration-backlog.md:451:| **Gate** | Nouveau GO Morris pour toucher `app/**` (POC-G9 harness-only ne l’autorise pas) |
projects/sfia-studio/26-poc-orchestration-backlog.md:557:| T-03 | GateValidator + PolicyEngine + config allowlist | E2/E5 | Must |
projects/sfia-studio/26-poc-orchestration-backlog.md:559:| T-05 | CursorExecutorPort fixture + manual | E4 | Must |
projects/sfia-studio/26-poc-orchestration-backlog.md:574:4. E4 CursorPort (fixture d’abord)
projects/sfia-studio/26-poc-orchestration-backlog.md:578:8. E6 adaptateur + E7 cockpit (`app/**` seulement si nouveau GO UI)
projects/sfia-studio/26-poc-orchestration-backlog.md:590:| Cursor réel | fixture / manual / adapter futur | Preuve mécanisme réel avant claim | **Oui** avant « Cursor réel » |
projects/sfia-studio/26-poc-orchestration-backlog.md:616:*Backlog S1 Option B — POC-G8 CONSOMMÉ — POC-G9 CONSOMMÉ harness-only — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*
projects/sfia-studio/22-poc-orchestration-decision-pack.md:7:| **POC** | **Non lancé** |
projects/sfia-studio/22-poc-orchestration-decision-pack.md:23:5. POC-G9 **CONSOMMÉ** (harness-only) ; POC non lancé.
projects/sfia-studio/22-poc-orchestration-decision-pack.md:53:  → allowlist initiale validée harness-only ; élargissements = nouveau GO
projects/sfia-studio/22-poc-orchestration-decision-pack.md:76:| Cursor | fixture only |
projects/sfia-studio/22-poc-orchestration-decision-pack.md:78:| `app/**` | **intact** |
projects/sfia-studio/22-poc-orchestration-decision-pack.md:80:| POC lancé | **Non** |
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:9:| **Statut document** | **VALIDÉ + INTÉGRÉ** (#219) ; sync #220 **MERGED** ; S1 = contrat (**non exécuté**) ; UI vs harness → voir archi candidate `23` |
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:11:| **POC** | **Non lancé** |
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:24:**Décision Morris (POC-CAND-02 / POC-G2) — 2026-07-19 :** scénario **S1** sélectionné, avec **rejet obligatoire** d’une action hors allowlist (élément S3) dans le flux de preuve. Intégré sur `main` via PR #219. **S1 n’est pas exécuté.**
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:43:| **Orchestrateur candidat** | Applique contrats, allowlist, gates, stops — **ne décide pas** |
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:54:- Contrat d’allowlist initial défini (lecture fichiers projet / méthode ; pas d’écriture distante).
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:59:| Champ | Exemple (fixture) |
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:71:1. Studio enregistre l’intention (état dérivé local / fixture)
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:75:5. Orchestrateur vérifie : GO valide + allowlist + préconditions Git
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:86:Après l’étape 5, injecter une demande d’action **hors allowlist** (ex. `git push` simulé demandé par contrat altéré) :
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:100:| Trace de rejet | Au moins un rejet hors allowlist |
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:138:  allowlist { paths[], actions[] },
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:153:  gitEffect: "none-remote",
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:164:| Frontière | Règle candidate |
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:167:| **Orchestrateur → Cursor** | Passe uniquement un contrat allowlisté ; pas d’élévation de privilèges |
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:185:- Lecture fichiers allowlistés
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:206:- Exécution shell non allowlistée
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:231:- action hors allowlist demandée ;
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:246:| REJECT hors allowlist | Corriger contrat → nouveau GO |
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:254:## 10. Données et fixtures de test
projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md:295:- Périmètre exact des chemins allowlist (détail archi POC)
projects/sfia-studio/20-poc-orchestration-framing.md:14:| **POC** | **Non lancé** |
projects/sfia-studio/20-poc-orchestration-framing.md:19:> Cadrage **validé**. Architecture Option B **INTÉGRÉE**. Backlog S1 **INTÉGRÉ** (#223). POC-G9 **CONSOMMÉ** (harness-only). POC **non lancé** (pas d’industrialisation).
projects/sfia-studio/20-poc-orchestration-framing.md:40:- Delivery P0 **CLÔTURÉ** (PR #217) — app Next.js 15 sous `projects/sfia-studio/app/` ; 4 écrans ; fixtures ; Git/Cursor/Runtime **simulés**.
projects/sfia-studio/20-poc-orchestration-framing.md:44:- Décision Morris (2026-07-19) : **cadrage Option B VALIDÉ** (POC-G1…G6) — **POC non lancé**.
projects/sfia-studio/20-poc-orchestration-framing.md:64:2. vérifier les préconditions (Git, gates, allowlist) ;
projects/sfia-studio/20-poc-orchestration-framing.md:111:| Décisions **candidates** POC-CAND-* | Validation de POC-CAND / D-VAL nouvelles |
projects/sfia-studio/20-poc-orchestration-framing.md:117:- Modification de `projects/sfia-studio/app/**`
projects/sfia-studio/20-poc-orchestration-framing.md:162:- Aucun secret / token / identifiant réel dans fixtures ou journaux.
projects/sfia-studio/20-poc-orchestration-framing.md:166:- Pas d’exécution de commandes système hors allowlist explicite (à détailler en architecture POC).
projects/sfia-studio/20-poc-orchestration-framing.md:194:| **L4\*** | Orchestration contrôlée candidate | **Plafond VALIDÉ** sur chemin d’exécution — **≠** Runtime produit |
projects/sfia-studio/20-poc-orchestration-framing.md:198:\*L4 = orchestration contrôlée **candidate**, non validée techniquement (aligné `11` §17).
projects/sfia-studio/20-poc-orchestration-framing.md:201:L4* = orchestration contrôlée **candidate** — **ne constitue pas** un niveau produit ni un Runtime validé.
projects/sfia-studio/20-poc-orchestration-framing.md:212:- Orchestrateur refuse une action hors allowlist (preuve de déterminisme négatif).
projects/sfia-studio/20-poc-orchestration-framing.md:254:2. Charger fixtures / données de test synthétiques (doc `21`).
projects/sfia-studio/20-poc-orchestration-framing.md:276:- `verdict.candidate.produced`
projects/sfia-studio/20-poc-orchestration-framing.md:324:| [27](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist |
projects/sfia-studio/20-poc-orchestration-framing.md:330:*Cadrage INTÉGRÉ — POC-G9 harness-only CONSOMMÉ — POC NON LANCÉ — app/** intact.*
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:14:| **POC** | **Non lancé** |
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:29:| App P0 | Next fixtures ; Git/Cursor simulés ; pas d’orch. |
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:32:Objectif S1 inchangé : boucle DOC read-only gouvernée, rejet hors allowlist, writes distantes absentes, L0 Morris, Git = vérité.
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:40:| E1–E12 | Séparation AF-C ; Git vérité ; L0 ; read Git ; deny writes ; rejet allowlist ; Cursor borné ; journal ; stop ; réversible ; secrets ; L3/L4*/L5 |
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:41:| E13 | Logique d’orchestration **hors** `app/**` |
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:96:   ├─ CursorExecutorPort (fixture|manual|adapter-future)
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:108:| **Studio** | Intention, présentation gate, STOP, suivi, consultation preuves | Auto-GO ; exec Git/Cursor ; évaluer allowlist ; vérité exclusive ; contourner harness |
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:110:| **Harness** | Revalider GO/contrat/allowlist ; Git ; CursorPort ; journal ; preuves ; états | Arbitrer L0 ; write remote |
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:129:### 7.2 Rejet hors allowlist
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:146:Harness CLI sans Studio (fixtures + fichier GO) — tests / diagnostic.
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:165:Git read réel ; denylist writes ; `gitEffect=none-remote`.
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:167:Cursor via port ; modes fixture/manual/adapter-future ; **pas d’API inventée**.
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:171:## 10. `app/**`
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:174:Toute logique d’orchestration reste **hors** `app/**`. Aucune modif app dans ce cycle.
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:198:5. Modif `app/**` seulement au delivery, bornée
projects/sfia-studio/23-poc-orchestration-technical-architecture.md:201:8. POC-G9 fermé ; POC non lancé ; backlog POC-G8 consommé
projects/sfia-studio/README.md:7:| **Statut** | `poc-s1-harness-delivery-local` — POC-G9 **CONSOMMÉ** (harness-only) ; POC-G8 **CONSOMMÉ** ; Option B **INTÉGRÉE** ; POC **non lancé** ; `app/**` **intact** |
projects/sfia-studio/README.md:22:| **Harness POC** | `harness/` — delivery local POC-G9 ; Cursor **fixture** ; Docker **non retenu** |
projects/sfia-studio/README.md:23:| **POC** | **Non lancé** (pas d’industrialisation / daemon) |
projects/sfia-studio/README.md:42:| Périmètre | 77 fichiers sous `projects/sfia-studio/app/**` ; +12830 / −0 |
projects/sfia-studio/README.md:63:> Architecture Option B **INTÉGRÉE**. Backlog S1 intégré. Harness-only local (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**. Commit/push/PR **fermés**. `app/**` intact.
projects/sfia-studio/README.md:139:  → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219 / `be713c45…`) — POC non lancé
projects/sfia-studio/README.md:143:  → backlog POC borné                   ← POC-G8 **CONSOMMÉ** (`26`–`28`) — allowlist initiale **validée** harness-only
projects/sfia-studio/README.md:148:Architecture Option B **intégrée**. Backlog S1 **intégré**. Harness-only local (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**.
projects/sfia-studio/README.md:216:| `projects/sfia-studio/app/**` | 77 fichiers intégrés sur `main` @ `759ab0b…` |
projects/sfia-studio/README.md:218:> Delivery P0 **CLÔTURÉ**. Aucune API, auth, BDD ni orchestration réelle. Git / Cursor / Runtime **simulés**. Cadrage POC Option B : documents `20`–`22` **VALIDÉS** (2026-07-19) — POC **non lancé**.
projects/sfia-studio/README.md:249:> POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**. POC-G8 **CONSOMMÉ**. POC-G9 **CONSOMMÉ** (harness-only). Runtime/protocole **ouverts**. POC **non lancé**.
projects/sfia-studio/README.md:363:> **POC non lancé.** POC-G9 **CONSOMMÉ** (harness-only). Allowlist initiale **validée** pour cet incrément. Commit/push/PR **fermés**.
projects/sfia-studio/README.md:369:1. Evidence re-review du harness-only (allowlist initiale déjà validée pour cet incrément).
projects/sfia-studio/README.md:400:| [27-poc-orchestration-allowlist-and-acceptance.md](./27-poc-orchestration-allowlist-and-acceptance.md) | Allowlist / denylist / critères |
projects/sfia-studio/README.md:403:*SFIA Studio — Option B — POC-G9 harness-only local — app/** intact — POC NON LANCÉ.*
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:10:| **Statut** | POC-G9 **CONSOMMÉ** (harness-only local) ; POC-G8 **CONSOMMÉ** ; POC **non lancé** ; `app/**` intact |
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:11:| **Décisions** | ARCH-POC-CAND-01…12 inchangées ; allowlist initiale **validée** harness-only |
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:15:> Architecture Option B **intégrée**. Backlog S1 intégré. Harness-only local (POC-G9). Allowlist initiale **validée** pour cet incrément. POC **non lancé**. Commit/push/PR **fermés**. `app/**` intact.
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:36:| App `projects/sfia-studio/app/` | Sur `main` — desktop 1440×1024 ; fixtures ; pas d’API/auth/BDD/orchestration réelle |
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:44:> Option B ≠ Option C. Harness autonome. Studio cockpit. Adaptateur sans autorité. POC non lancé.
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:120:  → cadrage POC orchestration          ← **VALIDÉ** + **INTÉGRÉ** (PR #219) — POC non lancé
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:134:- POC-G8 : **CONSOMMÉ**. POC-G9 : **CONSOMMÉ** (harness-only). POC : **non lancé**.
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:138:> Backlog S1 intégré. Allowlist initiale **validée** harness-only. POC-G9 **consommé**. POC **non lancé**. Commit/PR **fermés**.
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:246:| D-NEXT-2g4 | Orientation Option B — cadrage POC orchestration | Morris | **VALIDÉE + INTÉGRÉE** (PR #219) — POC **non lancé** |
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:250:| D-NEXT-5 | Niveau de preuve préalable au POC | Morris | **Traité** dans le cadrage POC (G1–G6) — POC non lancé |
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:272:| D-NEXT-27 | Validation backlog / allowlist initiale harness-only | Morris | **CONSOMMÉE** |
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:275:| D-NEXT-30 | UI app/** / Cursor réel / Docker | Morris | **Fermés** |
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:313:**Option B (Morris — capitalisation) :** cadrage POC orchestration **VALIDÉ + INTÉGRÉ** (PR #219). POC **non lancé**.
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:337:1. Evidence re-review du harness-only (allowlist initiale déjà validée pour cet incrément) ?
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:351:| POC lancé | **Non** |
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:365:| [26](./26-poc-orchestration-backlog.md) · [27](./27-poc-orchestration-allowlist-and-acceptance.md) · [28](./28-poc-orchestration-delivery-gate-pack.md) | Backlog POC-G8 |
projects/sfia-studio/07-product-trajectory-and-decision-pack.md:370:*Option B — POC-G9 harness-only CONSOMMÉ — allowlist initiale VALIDÉE (incrément) — POC NON LANCÉ.*
```

### Qualification synthétique

| Motif | Qualification |
|-------|---------------|
| « candidate » hors allowlist statut (L4*, AF, etc.) | historique / vocabulaire méthode — OK |
| Allowlist VALIDÉE POUR L’INCRÉMENT… | statut courant correct |
| POC-G9 CONSOMMÉ harness-only | statut courant correct |
| fixture / none-remote / app/** interdit | règles d’interdiction — OK |
| READY FOR COMMIT/PR/MERGE (doc 25) | **négation** explicite — OK |
| POC COMPLETE comme verdict courant | **absent** — OK |
| Cursor réel autorisé | **absent** — OK |
| Docker validé | **absent** — non retenu / option future — OK |

---

## 8. Preuve aucun code modifié

- `git diff --name-only` ∩ `harness/(src|tests|fixtures)/` = **vide**
- `package.json` / `package-lock.json` non modifiés ce cycle
- Tests rejoués sans changement code : **26/26 PASS**

---

## 9. Preuve app/** / Docker

- `git diff --name-only` ∩ `app/` = **vide**
- `find … Dockerfile* docker-compose*` = **aucun** sous sfia-studio delivery

---

## 10. Statuts consolidés

| Élément | Statut |
|---------|--------|
| Allowlist | **VALIDÉE POUR L’INCRÉMENT HARNESS-ONLY S1** ; élargissement = nouveau GO |
| POC-G9 | **CONSOMMÉ** harness-only |
| Cursor | **fixture** only ; réel **fermé** |
| Docker | **Non retenu** pour l’incrément ; ni retenu ni définitivement exclu |
| app/** | **Fermé / intact** |
| POC global | **Non lancé** ; **non** déclaré réussi / industrialisé |
| Commit/push/PR/merge | **Fermés** |

---

## 11. Validations

```
.../07-product-trajectory-and-decision-pack.md     |  36 ++++---
 .../sfia-studio/20-poc-orchestration-framing.md    |  14 +--
 ...21-poc-orchestration-scenario-and-boundaries.md |   4 +-
 .../22-poc-orchestration-decision-pack.md          |  31 ++++--
 .../23-poc-orchestration-technical-architecture.md |   6 +-
 ...tration-contracts-security-and-observability.md |   2 +-
 ...poc-orchestration-architecture-decision-pack.md |  36 ++++---
 .../sfia-studio/26-poc-orchestration-backlog.md    |  18 ++--
 ...7-poc-orchestration-allowlist-and-acceptance.md |  51 +++++----
 .../28-poc-orchestration-delivery-gate-pack.md     | 115 +++++++++++----------
 projects/sfia-studio/README.md                     |  51 +++++----
 11 files changed, 204 insertions(+), 160 deletions(-)
```

```
M	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
M	projects/sfia-studio/20-poc-orchestration-framing.md
M	projects/sfia-studio/21-poc-orchestration-scenario-and-boundaries.md
M	projects/sfia-studio/22-poc-orchestration-decision-pack.md
M	projects/sfia-studio/23-poc-orchestration-technical-architecture.md
M	projects/sfia-studio/24-poc-orchestration-contracts-security-and-observability.md
M	projects/sfia-studio/25-poc-orchestration-architecture-decision-pack.md
M	projects/sfia-studio/26-poc-orchestration-backlog.md
M	projects/sfia-studio/27-poc-orchestration-allowlist-and-acceptance.md
M	projects/sfia-studio/28-poc-orchestration-delivery-gate-pack.md
M	projects/sfia-studio/README.md
```

- `git diff --check` : PASS (trailing whitespace corrigé)
- Tests harness : 26/26 PASS (aucune modif code)

---

## 12. Gates restantes

1. Evidence re-review ChatGPT
2. GO commit delivery
3. GO push + PR
4. GO merge
5. UI / app/**
6. Cursor manuel/réel
7. Docker
8. Élargissement allowlist
9. Industrialisation / AF

---

## 13. Verdict

**`DOCUMENTARY GATE ALIGNMENT COMPLETE — HARNESS DELIVERY READY FOR EVIDENCE RE-REVIEW`**

Ne conclut **pas** : READY FOR COMMIT / PR / MERGE · POC COMPLETE · CURSOR REAL READY · DOCKER VALIDATED.

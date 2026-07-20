# SFIA Studio — Review Pack — OPS1 Functional Design Final Amendment

- **Date/heure/fuseau :** 2026-07-20 13:39:32 CEST
- **Repo :** mcleland147/sfia-workspace
- **Cycle :** 2 — Conception fonctionnelle, amendement final
- **Profil :** Standard
- **Gate :** Amendement final de `G-OPS1-FUNC-DESIGN-VAL`
- **Branche :** `design/sfia-studio-ops1-functional` @ `62eb23f0b1934afbecc517fc83aff90493fb8f29`
- **origin/main :** identique ; ahead/behind `0/0` ; remote design absente

## Décision Morris

**Date/heure/fuseau :** 2026-07-20 13:36 CEST  
**Gate :** `G-OPS1-FUNC-DESIGN-VAL` (amendement final)

Les fichiers Markdown du périmètre documentaire Campus360 **non protégé** sont **éligibles**.
Une action peut concerner **un ou plusieurs** fichiers.
Chaque action porte une **allowlist explicite et exhaustive**, présentée avant le gate et validée par Morris.
Le rattachement Campus360 **≠** autorisation globale.
Chemins protégés exclus ; aucun remote Git automatique.
Extension d’allowlist après GO = nouveau gate.

## Truth Check

Conforme : branche/base exactes ; staged vide ; 41 modifié (cycle précédent) ; 45–47 untracked ; README/42–44 intacts.

## Formulation avant / après

| Avant | Après |
|-------|-------|
| Hypothèse / réserve « fichier Markdown exact unique » | **Retiré** |
| Action systématiquement mono-fichier | Multi-fichiers **si nécessaire** |
| SCENARIO-VAL = choisir un fichier | SCENARIO-VAL = cartographie éligible + branche + règles allowlist |
| Campus360 = contexte | Campus360 = **périmètre éligible** ≠ allowlist d’exécution |

## Distinction clé

| Notion | Rôle |
|--------|------|
| Périmètre éligible Campus360 | Ensemble des Markdown documentaires non protégés pouvant être déclarés |
| Allowlist d’action | Sous-ensemble **explicite** autorisé pour **cette** exécution ; objet du GO Morris |

---

## Sections amendées — document 45

### §1.7 Réserves

```markdown
### 1.7 Réserves de conception (ouvertes)

- Valeurs numériques FinOps (seuils, budgets chiffrés, modèles autorisés, plafonds session/jour) — **OPEN**, non bloquantes pour la validation fonctionnelle ; à décider **avant** ouverture live ;
- Mécanisme exact de continuation après `CLOSE` (lien de sessions) — `OPS1-FD-CAND-13` ;
- **Cartographie** des chemins / catégories documentaires Campus360 **éligibles** (et exclusions) — `G-OPS1-SCENARIO-VAL` ;
- Convention de branche Campus360 exacte — `G-OPS1-SCENARIO-VAL` ;
- Preuve live non réalisée ;
- CI distante non prouvée ;
- Isolation OS/réseau non industrialisée.

> **Retiré** comme réserve globale : « fichier Markdown Campus360 exact unique » — remplacé par le modèle éligibilité multi-fichiers + allowlist par action (décision Morris 2026-07-20 13:36 CEST).

```

### §4.5 ProposedAction

```markdown
### 4.5 ProposedAction

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Proposition d’action **structurée**, séparée du dialogue |
| **Données minimales** | objectif ; cycle/profil proposés ; **allowlist explicite et exhaustive** (fichiers consultables / créables / modifiables, distincts si besoin) ; denylist / chemins protégés exclus ; effets locaux ; remote=aucun auto ; risques ; preuves attendues (diff consolidé + par fichier) ; gate requis ; statut |
| **Source de vérité** | Objet session (≠ texte chat) |
| **Cycle de vie** | draft → candidate → refinement → gated → authorized/refused/withdrawn |
| **Liens** | Session ; gate ; contrat |
| **Autorité** | GPT propose ; Morris corrige/retire ; **jamais** auto-AUTHORIZED |
| **Règle clé** | Périmètre Campus360 **éligible** ≠ allowlist d’exécution ; multi-fichiers **autorisé si nécessaire** ; GO Morris porte sur l’allowlist présentée |

```

### §4.8 ExecutionContract

```markdown
### 4.8 ExecutionContract

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Contrat borné pour Cursor |
| **Données minimales** | contractHash ; HEAD ancré ; **allowlist d’exécution** (copie exhaustive de l’action GO) ; denylist ; effets autorisés ; interdits (remote, secrets, hors allowlist) ; timeout |
| **Source de vérité** | Harness + Git HEAD |
| **Cycle de vie** | préparé → revalidé → exécuté / invalidé |
| **Liens** | Action ; rapport |
| **Autorité** | Harness valide ; Cursor exécute **sans élargir** l’allowlist |
| **Règle clé** | Ajout de fichier après GO = **interdit** ; nécessite correction d’action + **nouveau gate** |

```

### §6 Règles métier (extrait FR-026…032 inclus)

```markdown
## 6. Règles métier (`OPS1-FR-*`)

| ID | Règle |
|----|-------|
| **OPS1-FR-001** | Le dialogue est libre dans son contenu ; non scénarisé pour la preuve opératoire |
| **OPS1-FR-002** | Aucune obligation de produire une action à chaque tour |
| **OPS1-FR-003** | Dialogue et action candidate sont des objets séparés ; le texte chat n’est pas une commande |
| **OPS1-FR-004** | Seul Morris émet GO / NO-GO / CORRIGER / ABANDONNER / STOP / clôture |
| **OPS1-FR-005** | Toute exécution est ancrée (contractHash + HEAD + allowlist) et revalidée par le harness |
| **OPS1-FR-006** | Allowlist/denylist : hors allowlist = interdit ; default deny |
| **OPS1-FR-026** | Périmètre Campus360 **éligible** ≠ allowlist d’une action ; le rattachement projet n’autorise aucun fichier implicitement |
| **OPS1-FR-027** | Allowlist **obligatoire** et **exhaustive** avant soumission au gate ; distingue consultables / créables / modifiables si besoin |
| **OPS1-FR-028** | Une action peut porter sur **un ou plusieurs** Markdown Campus360 éligibles ; le nombre est dicté par le besoin, pas par un plafond mono-fichier |
| **OPS1-FR-029** | Accès ou modification d’un fichier **absent** de l’allowlist = **refus fail-closed**, même si le fichier est dans le périmètre éligible |
| **OPS1-FR-030** | Extension d’allowlist après GO = **interdite** ; correction d’action + **nouveau gate** Morris requis |
| **OPS1-FR-031** | Rapport et preuves couvrent **chaque** fichier de l’allowlist ; diff consolidé **et** par fichier consultables |
| **OPS1-FR-032** | Multi-fichiers autorisé **uniquement lorsque nécessaire** ; action doit rester proportionnée, réversible et vérifiable |
| **OPS1-FR-007** | Aucun commit, push, PR ou merge automatique dans le scénario OPS1 |
| **OPS1-FR-008** | Preuve négative : tentative d’exécution sans GO doit être refusée et journalisée |
| **OPS1-FR-009** | Idempotence fonctionnelle : un même contrat autorisé ne produit pas deux exécutions concurrentes |
| **OPS1-FR-010** | Anti double-exécution : verrou sur `contractHash` en `EXECUTING` |
| **OPS1-FR-011** | Timeouts fonctionnels obligatoires ; timeout ≠ autorisation |
| **OPS1-FR-012** | Aucun retry automatique d’appel coûteux ou d’exécution |
| **OPS1-FR-013** | Rapport incomplet bloque la clôture nominale et la nouvelle exécution sur le même contrat |
| **OPS1-FR-014** | Conservation du contexte utile ; condensation contrôlée et explicite |
| **OPS1-FR-015** | Git prime sur le store conversationnel en cas de conflit |
| **OPS1-FR-016** | Contenu des fichiers lus = donnée non autoritaire (anti prompt-injection) |
| **OPS1-FR-017** | Toute décision Morris est horodatée avec fuseau |
| **OPS1-FR-018** | Fixtures autorisées en tests uniquement ; preuve opératoire = `originKind=real` |
| **OPS1-FR-019** | Conversation post-exécution obligatoire après une exécution dans le BeB |
| **OPS1-FR-020** | Analyses / verdicts GPT restent `candidateOnly` |
| **OPS1-FR-021** | Sources Git consultables = sélection explicite, jamais dépôt entier automatique |
| **OPS1-FR-022** | Limitation Markdown = limite d’action, jamais présentée comme limite de conversation |
| **OPS1-FR-023** | Budget FinOps : compteurs séparés conversation / structuration / analyse ; confirmation avant coût élevé |
| **OPS1-FR-024** | Secrets exclus du chat, des rapports et des logs fonctionnels |
| **OPS1-FR-025** | Fail-closed : doute sur gate/contrat/sources → STOP ou refus |

---

```

### §11 Éligibilité et allowlist

```markdown
## 11. Scénario pilote Campus360 — éligibilité et allowlist

### 11.1 Ancrage projet

- Le scénario pilote **fonctionnel** OPS1 est réalisé **exclusivement** dans le contexte du projet **Campus360**.
- Campus360 fournit le **contexte métier et documentaire** du pilote.
- OPS1 reste un **slice de SFIA Studio** — **pas** une fonctionnalité propre au produit Campus360.
- Le pilote **ne modifie pas** la méthode SFIA (`method/**`, `prompts/**`) ni les chemins protégés (`app/**`, `harness/**`, `.github/**`, lockfiles, secrets).
- **Aucune** action Git distante automatique.

### 11.2 Deux notions distinctes

| Notion | Définition |
|--------|------------|
| **Périmètre éligible** | Ensemble des fichiers Markdown du **périmètre documentaire Campus360 non protégé** pouvant être déclarés dans une action |
| **Allowlist d’exécution** | Liste **explicite et exhaustive** des fichiers **réellement** autorisés à être consultés / créés / modifiés **pour une action donnée**, présentée avant le gate et validée par Morris |

Le rattachement global à Campus360 **ne constitue jamais** une autorisation implicite de modifier tous les Markdown du projet.

### 11.3 Éligibilité (décision Morris)

Tout fichier Markdown du périmètre documentaire **non protégé** de Campus360 **peut être déclaré éligible**.
Une action OPS1 peut concerner **un ou plusieurs** de ces fichiers.
Le nombre de fichiers est déterminé par le **besoin fonctionnel**, non par un plafond arbitraire de un.

### 11.4 Critères d’éligibilité d’un fichier candidat

1. **Rattachement explicite à Campus360** ;
2. Markdown documentaire **non protégé** ;
3. faible risque ;
4. modification **locale**, **réversible** et **observable** ;
5. contenu **substantiel** (utile au BeB) ;
6. **aucune donnée sensible** (secret / PII) ;
7. **aucune dépendance de déploiement** ;
8. **diff facilement vérifiable** ;
9. utile pour démontrer conversation, action, gate, Cursor, rapport, correction et clôture.

### 11.5 Allowlist par action (obligatoire)

- Allowlist **présentée avant** le gate ;
- **exhaustive** pour l’action ;
- distingue si besoin : consultables / créables / modifiables ;
- hors allowlist = **interdit** (fail-closed) ;
- extension après GO = **nouveau gate** ;
- multi-fichiers **uniquement si nécessaire** ;
- preuves : diff consolidé + par fichier ; couverture de chaque fichier.

### 11.6 Objet de `G-OPS1-SCENARIO-VAL` (redéfini)

Valider :

- chemins ou **catégories** de chemins documentaires Campus360 **éligibles** ;
- exclusions ;
- convention de branche ;
- règles d’allowlist opératoires ;
- scénario de preuve.

**Ne plus** valider un fichier unique obligatoire.
**Non choisis dans ce cycle :** liste globale définitive de chemins réels ; nom de branche exact ; demande métier exacte.

---

```

### §13 Verdict

```markdown
## 13. Verdict documentaire

`functional-design-candidate-for-morris-validation`

`SFIA STUDIO OPS1 FUNCTIONAL DESIGN FINAL AMENDMENT INTEGRATED — READY FOR VERSIONING`

Amendement final multi-fichiers + allowlist intégré sous **`G-OPS1-FUNC-DESIGN-VAL`** (2026-07-20 13:36 CEST).
Aucun cycle architecture / UX / backlog / delivery / live / MVP ouvert automatiquement. Versionnement projet = GO distinct.
```

---

## Sections amendées — document 46

### Flux concernés (complets)

```markdown
### OPS1-FLOW-06 — GPT propose une action candidate

| Champ | Contenu |
|-------|---------|
| **Objectif** | Émettre ProposedAction séparée du dialogue avec allowlist explicite. |
| **Préconditions** | Discussion suffisante ; pas d’exécution en cours. |
| **Déclencheur** | GPT émet proposition structurée validable par harness de forme. |
| **Acteurs** | GPT, Studio, harness (validation de forme) |
| **États avant/après** | ACTION_CANDIDATE ; exec IDLE |
| **Données produites** | ProposedAction + allowlist (consultables/créables/modifiables) |
| **Preuves attendues** | Objet action ≠ bulle ; allowlist visible |
| **Critères associés** | Critère 7 ; FR-026–028 |
| **Décisions Morris** | Aucune autorisation |
| **Hors périmètre** | Ne pas figer de chemins réels ici |

**Étapes nominales :**
   1. Créer ProposedAction ACTION_CANDIDATE
   2. Déclarer allowlist exhaustive (1..n Markdown Campus360 éligibles)
   3. Afficher panneau séparé avec allowlist
   4. Lier message optionnel
   5. Attendre Morris

**Alternatives :**
   - Proposition refusée de forme / allowlist vide → rester en conversation avec erreur
   - Mono ou multi-fichiers selon besoin (pas de plafond artificiel à 1)

**Erreurs et STOP :**
   - Schema invalide → pas d’ACTION_CANDIDATE
   - Fichier hors périmètre éligible Campus360 / protégé → refus de forme



### OPS1-FLOW-07 — Morris corrige l’action via le chat

| Champ | Contenu |
|-------|---------|
| **Objectif** | Modifier l’action par dialogue. |
| **Préconditions** | ACTION_CANDIDATE ou REFINEMENT. |
| **Déclencheur** | Morris demande correction en message. |
| **Acteurs** | Morris, GPT, Studio |
| **États avant/après** | REFINEMENT → CANDIDATE |
| **Données produites** | Nouvelle version action |
| **Preuves attendues** | Historique versions action |
| **Critères associés** | Critères 4,7 |
| **Décisions Morris** | — |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Passer ACTION_REFINEMENT
   2. GPT propose révision structurée (objectif et/ou allowlist)
   3. Remplacer/mettre à jour ProposedAction **et** allowlist
   4. Retour ACTION_CANDIDATE

**Alternatives :**
   - Retrait → FLOW-09
   - Ajout/retrait de fichiers dans l’allowlist avant gate

**Erreurs et STOP :**
   - Fichier hors éligibilité Campus360 → refus



### OPS1-FLOW-08 — Morris corrige l’action via surface structurée

| Champ | Contenu |
|-------|---------|
| **Objectif** | Éditer champs de l’action sans dépendre du chat. |
| **Préconditions** | ACTION_CANDIDATE. |
| **Déclencheur** | Édition panneau action. |
| **Acteurs** | Morris, Studio |
| **États avant/après** | CANDIDATE |
| **Données produites** | ProposedAction mise à jour |
| **Preuves attendues** | Trace édition |
| **Critères associés** | Critère 7 |
| **Décisions Morris** | — |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Édition champs (objectif, risques, **allowlist**)
   2. Recalcul risques/preuves (couverture multi-fichiers)
   3. Rester CANDIDATE ou REFINEMENT
   4. Chat peut commenter

**Alternatives :**
   - Annuler édition
   - Ajuster distinction consultables / créables / modifiables

**Erreurs et STOP :**
   - Fichier hors périmètre éligible / protégé → refus UI
   - Allowlist vide → refus de soumission



### OPS1-FLOW-10 — Soumission au gate

| Champ | Contenu |
|-------|---------|
| **Objectif** | Ouvrir ActionGate explicite avec allowlist présentée. |
| **Préconditions** | ACTION_CANDIDATE complète **avec allowlist non vide**. |
| **Déclencheur** | Morris soumet au gate. |
| **Acteurs** | Morris, Studio |
| **États avant/après** | MORRIS_ACTION_GATE |
| **Données produites** | ActionGate ouvert + allowlist figée pour décision |
| **Preuves attendues** | Gate visible séparé ; allowlist exhaustive affichée |
| **Critères associés** | Critère 8 ; FR-027 |
| **Décisions Morris** | — |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Vérifier allowlist exhaustive présente
   2. MORRIS_ACTION_GATE
   3. Afficher options + ancrage candidat + **allowlist complète**
   4. Geler édition libre non gouvernée

**Alternatives :**
   - Retour CORRIGER sans ouvrir

**Erreurs et STOP :**
   - Action incomplète / allowlist absente → refus soumission



### OPS1-FLOW-11 — GO Morris

| Champ | Contenu |
|-------|---------|
| **Objectif** | Autoriser l’action **et son allowlist** par décision ancrée. |
| **Préconditions** | MORRIS_ACTION_GATE ; allowlist présentée. |
| **Déclencheur** | Morris choisit GO avec motif. |
| **Acteurs** | Morris, Studio, harness |
| **États avant/après** | AUTHORIZED ; exec IDLE→PENDING possible |
| **Données produites** | Décision + contractHash candidat + allowlist gelée |
| **Preuves attendues** | Décision ancrée portant sur l’allowlist |
| **Critères associés** | Critères 8,13 ; FR-005,027 |
| **Décisions Morris** | GO explicite **sur allowlist** |
| **Hors périmètre** | Chat ≠ GO ; Campus360 ≠ GO global |

**Étapes nominales :**
   1. MorrisDecision GO horodatée (réf. allowlist)
   2. ACTION_AUTHORIZED
   3. Préparer ExecutionContract **avec la même allowlist**
   4. Pas d’exec auto sans start harness

**Alternatives :**
   - —

**Erreurs et STOP :**
   - Ancrage impossible → refus GO



### OPS1-FLOW-17 — Tentative d’exécution sans GO ou hors allowlist

| Champ | Contenu |
|-------|---------|
| **Objectif** | Preuves négatives de gouvernance (sans GO **ou** hors allowlist). |
| **Préconditions** | Pas d’ACTION_AUTHORIZED **ou** tentative sur fichier non listé. |
| **Déclencheur** | Tentative start exécution ; ou accès/modif d’un fichier Campus360 **absent** de l’allowlist. |
| **Acteurs** | Studio, harness |
| **États avant/après** | Pas d’AUTHORIZED ; ou EXECUTING refusé pour le chemin hors liste |
| **Données produites** | Événement refus |
| **Preuves attendues** | Preuve négative obligatoire (PN-01 / PN-06) |
| **Critères associés** | Critère 8 ; FR-008,029 |
| **Décisions Morris** | Aucune |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Refus immédiat fail-closed
   2. Journal preuve négative (motif : sans GO **ou** hors allowlist)
   3. État d’autorisation inchangé ; aucun effet sur le fichier hors liste

**Alternatives :**
   - Fichier éligible Campus360 mais hors allowlist → **refus identique** (éligibilité ≠ autorisation)

**Erreurs et STOP :**
   - —



### OPS1-FLOW-18 — Exécution Markdown réussie

| Champ | Contenu |
|-------|---------|
| **Objectif** | Exécuter Cursor borné sur l’allowlist (1..n fichiers). |
| **Préconditions** | Contrat revalidé ; GO consommé ; allowlist figée. |
| **Déclencheur** | Start exécution autorisée. |
| **Acteurs** | Cursor, harness, Git, Studio |
| **États avant/après** | REPORT_AVAILABLE |
| **Données produites** | ExecutionReport + EvidenceReference (par fichier + consolidé) |
| **Preuves attendues** | Diffs allowlistés (consolidé + par fichier) |
| **Critères associés** | Critères 14,15 ; FR-031 |
| **Décisions Morris** | STOP possible |
| **Hors périmètre** | No remote auto ; pas d’élargissement |

**Étapes nominales :**
   1. EXECUTING
   2. Lire/créer/modifier **uniquement** les chemins de l’allowlist
   3. Produire diffs locaux (consolidé + par fichier)
   4. REPORT_AVAILABLE
   5. Verrou contractHash

**Alternatives :**
   - STOP pendant exec → STOPPED
   - Action mono-fichier ou multi-fichiers selon allowlist GO

**Erreurs et STOP :**
   - Élargissement / fichier hors allowlist → fail-closed (FLOW-17)



### OPS1-FLOW-22 — Correction nécessitant un nouveau gate

| Champ | Contenu |
|-------|---------|
| **Objectif** | Toute nouvelle exécution **ou extension d’allowlist** exige un nouveau GO. |
| **Préconditions** | Post-exec ; besoin de corriger fichiers **ou** d’ajouter un chemin. |
| **Déclencheur** | Morris/GPT demandent correction actionnable ; ou besoin d’élargir l’allowlist. |
| **Acteurs** | Morris, GPT, Studio |
| **États avant/après** | Retour CANDIDATE/GATE |
| **Données produites** | Nouvelle action/contrat + nouvelle allowlist |
| **Preuves attendues** | Trace nouveau gate |
| **Critères associés** | Critères 8,13 ; FR-030 |
| **Décisions Morris** | Nouveau GO |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Nouvelle ProposedAction (allowlist revue)
   2. Nouveau gate
   3. Ancien contrat / ancienne allowlist non réutilisés silencieusement

**Alternatives :**
   - Correction purement conversationnelle sans exec

**Erreurs et STOP :**
   - Réutilisation contrat expiré → refus
   - Extension allowlist sans nouveau gate → refus (FR-030)



### OPS1-FLOW-32 — Scénario pilote Campus360 bout en bout (capacités)

| Champ | Contenu |
|-------|---------|
| **Objectif** | Enchaîner conversation → action → gate → exec → post-exec → clôture **Campus360**, sans script de phrases, avec allowlist explicite (1..n Markdown). |
| **Préconditions** | GO live conversation + live Cursor distincts (futurs) ; cartographie éligible + branche sous `G-OPS1-SCENARIO-VAL` ; hors chemins protégés. |
| **Déclencheur** | Morris lance le scénario pilote OPS1 **Campus360**. |
| **Acteurs** | Tous |
| **États avant/après** | CLOSED avec summary |
| **Données produites** | Pack preuves complet ; allowlist GO ; diffs multi-fichiers |
| **Preuves attendues** | Démonstration opératoire ; PN hors allowlist ; couverture fichiers |
| **Critères associés** | Critères 1–17 ; §11 doc 45 ; FR-026–032 |
| **Décisions Morris** | GO action **sur allowlist** + clôture |
| **Hors périmètre** | Capacité cible ; **ne fige pas** phrases, chemins réels, branche exacte ni demande ; **pas** de mono-fichier obligatoire ; OPS1 ≠ feature Campus360 |

**Étapes nominales :**
   1. FLOW-01 (session ancrée contexte Campus360)
   2. Multi-tours FLOW-03/04/05
   3. FLOW-06→10→11 (ProposedAction + allowlist 1..n Markdown éligibles)
   4. FLOW-15→18 (exec bornée allowlist)
   5. FLOW-20→21→23→24 (diffs consolidé + par fichier)
   6. Preuves 1–17 + PN-06

**Alternatives :**
   - Branches sans action FLOW-09
   - NO-GO FLOW-12
   - Échec FLOW-19
   - Mono-fichier **ou** multi-fichiers selon besoin

**Erreurs et STOP :**
   - STOP / FAILED selon cas
   - Hors périmètre Campus360 / chemins protégés → refus
   - Fichier Campus360 éligible mais **hors allowlist** → refus (FLOW-17 / PN-06)



---

```

### Preuves négatives

```markdown
## 7. Preuves négatives obligatoires (conception)

| ID | Preuve | Flux |
|----|--------|------|
| PN-01 | Exécution refusée sans GO | FLOW-17 |
| PN-02 | Double-exécution refusée | FLOW-28 |
| PN-03 | Remote auto absent | FLOW-18 + FR-007 |
| PN-04 | Contenu fichier non autoritaire | FLOW-31 |
| PN-05 | GPT seul ≠ AUTHORIZED | FLOW-06 |
| PN-06 | Fichier Campus360 **éligible** mais **hors allowlist** refusé | FLOW-17 ; FR-026,029 |

---

```

---

## Décisions FD-CAND mises à jour

```markdown
### OPS1-FD-CAND-20 — Périmètre Markdown pilote Campus360 (éligibilité multi-fichiers)

| Élément | Contenu |
|---------|---------|
| **Observation** | Un plafond mono-fichier crée une contrainte artificielle. |
| **Héritage validé (cadrage)** | OPS1-CAND-01 (action Markdown locale étroite) ; `G-OPS1-SCENARIO-VAL`. |
| **Option** | Mono-fichier obligatoire vs multi-fichiers avec allowlist. |
| **Recommandation** | Multi-fichiers Markdown Campus360 **éligibles** ; allowlist explicite par action ; pas d’autorisation globale. |
| **Décision Morris** | **Validée** — 2026-07-20 13:36 CEST — gate `G-OPS1-FUNC-DESIGN-VAL` (amendement final) : Markdown documentaires Campus360 non protégés **éligibles** ; action 1..n fichiers ; GO porte sur allowlist ; Campus360 ≠ autorisation globale ; chemins protégés exclus ; pas de remote auto. |
| **Portée exacte** | Contrat fonctionnel d’éligibilité + allowlist ; **pas** cartographie de chemins réels ni branche. |
| **Réserve** | Cartographie chemins/catégories éligibles + convention de branche sous `G-OPS1-SCENARIO-VAL`. |
| **Statut** | `VALIDATED BY MORRIS` (dans le cadre de `G-OPS1-FUNC-DESIGN-VAL`) |
| **Décision Morris attendue** | Aucune supplémentaire sur ce point ; SCENARIO-VAL pour cartographie/branche. |


### OPS1-FD-CAND-24 — Réserves de conception (liste amendée finale)

| Élément | Contenu |
|---------|---------|
| **Observation** | La réserve « fichier Markdown exact unique » est obsolète après décision multi-fichiers. |
| **Héritage validé (cadrage)** | Réserves cadrage 44 §7. |
| **Option** | Conserver le mono-fichier comme réserve (rejeté). |
| **Recommandation** | **Réserves conception :** FinOps numériques ; continuation après CLOSE ; **cartographie** chemins Campus360 éligibles ; convention de branche ; preuve live ; CI distante ; isolation OS/réseau. **Supprimé :** fichier Markdown exact unique. **Non-réserves :** archi fct / UX (cycles normaux) ; stack/BDD/API/protocole (routés). |
| **Décision candidate** | Adopter §1.7–1.8 doc 45 (amendement final). |
| **Réserve** | Les réserves listées restent ouvertes. |
| **Statut** | `RECOMMENDED FOR MORRIS VALIDATION` |
| **Décision Morris attendue** | Confirmer la liste finale des réserves. |


### OPS1-FD-CAND-25 — Verdict candidat de conception (amendement final)

| Élément | Contenu |
|---------|---------|
| **Observation** | Conception produite, amendée (Campus360/routage/CLOSE), puis amendement final multi-fichiers + allowlist. |
| **Héritage validé (cadrage)** | Cadrage validé avec réserves ; docs 41–44 sur main. |
| **Option** | Claim READY FOR DELIVERY (interdit). |
| **Recommandation** | Intégrer l’arbitrage Morris ; préparer versionnement sous GO distinct. |
| **Décision candidate** | Verdict : `SFIA STUDIO OPS1 FUNCTIONAL DESIGN FINAL AMENDMENT INTEGRATED — READY FOR VERSIONING`. |
| **Réserve** | Versionnement / PR non faits ; pas OPS1 prouvé ; live non ouvert. |
| **Statut** | `RECOMMENDED FOR MORRIS VALIDATION` (versionnement) |
| **Décision Morris attendue** | Autoriser éventuellement le versionnement ; ne pas ouvrir delivery/live/MVP. |
| **Traçabilité amendement final** | Morris — 2026-07-20 13:36 CEST — `G-OPS1-FUNC-DESIGN-VAL` (allowlist multi-fichiers). |


### OPS1-FD-CAND-26 — Contexte projet du scénario pilote (Campus360)

| Élément | Contenu |
|---------|---------|
| **Observation** | Sans ancrage projet, le pilote Markdown reste ambigu. |
| **Héritage validé (cadrage)** | Action Markdown locale (OPS1-CAND-01). |
| **Option** | Projet libre vs Campus360 exclusif vs multi-projets. |
| **Recommandation** | **Campus360 exclusivement** ; plusieurs Markdown peuvent être **éligibles** ; chaque action gouvernée par **sa** allowlist ; OPS1 = capacité SFIA Studio. |
| **Décision Morris** | Ancrage Campus360 exclusif + éligibilité multi-fichiers (voir FD-CAND-20/27) — 2026-07-20 13:36 CEST. |
| **Décision candidate / portée** | Pilote OPS1 **uniquement** Campus360 ; pas d’autorisation globale implicite. |
| **Réserve** | Cartographie chemins + branche sous `G-OPS1-SCENARIO-VAL`. |
| **Statut** | `VALIDATED BY MORRIS` (ancrage + modèle éligibilité ; cartographie OPEN) |
| **Décision Morris attendue** | SCENARIO-VAL pour cartographie/branche. |



### OPS1-FD-CAND-27 — Modèle d’éligibilité et allowlist par action

| Élément | Contenu |
|---------|---------|
| **Observation** | Le mono-fichier crée une contrainte artificielle et confond éligibilité projet et autorisation d’exécution. |
| **Héritage validé (cadrage)** | Exécution étroite, réversible, sans remote automatique ; chat ≠ GO ; harness fail-closed. |
| **Option** | Allowlist globale Campus360 vs allowlist **par action**. |
| **Décision Morris** | **Validée** — 2026-07-20 13:36 CEST — gate `G-OPS1-FUNC-DESIGN-VAL` : Markdown Campus360 documentaires non protégés **éligibles** ; allowlist **exacte** par action ; GO Morris porte sur cette allowlist ; extension après GO = nouveau gate ; hors allowlist = refus même si éligible. |
| **Règle** | Périmètre éligible ≠ autorisation d’exécution (FR-026…032). |
| **Portée exacte** | Contrat fonctionnel ; pas de sélection de chemins réels dans ce cycle. |
| **Réserve** | Cartographie de chemins / catégories et convention de branche sous `G-OPS1-SCENARIO-VAL`. |
| **Statut** | `VALIDATED BY MORRIS` (dans le cadre de `G-OPS1-FUNC-DESIGN-VAL`) |
| **Décision Morris attendue** | Aucune supplémentaire sur le modèle ; SCENARIO-VAL pour cartographie. |



```

## Réserves

**Supprimée :** fichier Markdown Campus360 exact unique.  
**Maintenues / reformulées :** cartographie chemins éligibles ; convention de branche ; FinOps numériques ; continuation CLOSE ; preuve live ; CI ; isolation OS/réseau.

## Contrôles

| Contrôle | Résultat |
|----------|----------|
| Seuls 45–47 modifiés ce cycle | OK (41 inchangé ce cycle) |
| README / 42–44 intacts | OK |
| Mono-fichier normatif retiré | OK (mentions négatives seulement) |
| Éligible ≠ allowlist | OK |
| Multi-fichiers sans autorisation globale | OK |
| FLOW-32 + PN-06 | OK |
| FD-CAND-20/24/25/26/27 | OK |
| VALIDATED BY MORRIS tracé (20/26/27) | OK |
| Stack/API non décidés ; cycles suivants fermés | OK |
| `git diff --check` | OK |
| Staged / commit / push / PR | Absents |

## Git status

```text
 M projects/sfia-studio/41-operational-vertical-slice-1-framing.md
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/45-ops1-functional-design.md
?? projects/sfia-studio/46-ops1-functional-flows-and-rules.md
?? projects/sfia-studio/47-ops1-functional-decision-pack.md
```

## Handoff

- SHA : *(après push)*

## Verdict

**SFIA STUDIO OPS1 FUNCTIONAL DESIGN FINAL AMENDMENT INTEGRATED — READY FOR VERSIONING**

# SFIA Studio — Conception fonctionnelle OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `45-ops1-functional-design.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Standard |
| **Typologie** | POC / CONCEPTION FONCTIONNELLE / PRODUIT / DOC |
| **Gates consommés** | `G-OPS1-FUNC-DESIGN` · `G-OPS1-FUNC-DESIGN-VAL` |
| **Baseline Git de conception** | `origin/main` @ `62eb23f0b1934afbecc517fc83aff90493fb8f29` |
| **Intégration** | PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) MERGED — squash `6cbf37482c7d384ef5630259d58a2e223a607925` sur `main` |
| **Branche de conception** | `design/sfia-studio-ops1-functional` — fusionnée via PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) ; branche conservée temporairement en attente du cleanup Morris |
| **Statut** | `functional-design-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 13:46 CEST) ; amendement final multi-fichiers + allowlist (2026-07-20 13:36 CEST) ; **intégré et canonique sur `main`** ; post-merge **validé** (2026-07-20 14:29 CEST) ; réserves 13, 15, 20, 26 **inchangées** ; aucun cycle suivant ouvert automatiquement |
| **Autorité** | Morris (L0) |
| **Companions** | [`46`](./46-ops1-functional-flows-and-rules.md) · [`47`](./47-ops1-functional-decision-pack.md) · UX OPS1 [`51`](./51-ops1-ux-ui-contract.md)–[`53`](./53-ops1-ux-ui-decision-pack.md) (**validés avec réserves** ; `G-OPS1-UX-VAL` consommé — 2026-07-20 16:52 CEST) · Scénario OPS1 [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) (**validés avec amendements** ; `G-OPS1-SCENARIO-VAL` — 2026-07-20 18:34:47 CEST) |
| **Entrées cadrage** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Socle historique (lecture)** | [`08`](./08-functional-design.md) · [`09`](./09-functional-flows-and-rules.md) · [`10`](./10-functional-decision-pack.md) |
| **Horodatage production** | 2026-07-20 13:10 CEST |
| **Horodatage amendement** | 2026-07-20 13:23 CEST |
| **Horodatage amendement final** | 2026-07-20 13:36 CEST |
| **Horodatage validation Morris** | 2026-07-20 13:46 CEST |
| **Horodatage post-merge** | 2026-07-20 14:29 CEST |
| **Horodatage sync documentaire** | 2026-07-20 14:34 CEST |
| **Projet pilote OPS1** | **Campus360 exclusivement** — Markdown documentaires non protégés **éligibles** ; allowlist **par action** ; cartographie/branche : `G-OPS1-SCENARIO-VAL` |

> Contrat de **conception fonctionnelle validée avec réserves** du Vertical Slice Opérationnel 1.
> Gate `G-OPS1-FUNC-DESIGN-VAL` **consommé** — Morris — 2026-07-20 13:46 CEST.
> **Intégré et canonique sur `main`** via PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) (squash merge `6cbf37482c7d384ef5630259d58a2e223a607925`) ; post-merge **validé** (2026-07-20 14:29 CEST).
> Hérite des invariants validés du cadrage OPS1 (`G-OPS1-FRAMING-VAL`) sans les altérer.
> Scénario pilote : contexte **Campus360** exclusivement — OPS1 = slice **SFIA Studio**, pas une feature produit Campus360.
> **Décision Morris multi-fichiers (2026-07-20 13:36 CEST)** : Markdown documentaires Campus360 non protégés **éligibles** ; allowlist explicite par action ; Campus360 ≠ autorisation globale.
> Architecture fonctionnelle et UX/UI = cycles SFIA distincts **normaux**. Stack / BDD / API / protocole **routés** vers architecture technique (cycle 6 / `G-OPS1-TECH-ARCH` si établi).
> `OPS1-FD-CAND-01`…`27` **validées** (avec réserves sur 13, 15, 20, 26 **inchangées**). Aucun cycle suivant ouvert automatiquement.
> Aucun claim MVP / production-ready / industrialisation / OPS1 prouvé / READY FOR DELIVERY.

### Distinction POC / OPS1 / MVP

| Terme | Définition fonctionnelle |
|-------|--------------------------|
| **POC** | Phase produit maintenue ; Studio n’est pas un produit industrialisé |
| **OPS1** | Slice opérationnel : conversation GPT **réelle** + action Markdown **gouvernée** |
| **MVP futur** | Piloter un projet bout en bout — **fermé** ; GO distinct (`G-OPS1-MVP-TRAJECTORY`) |
| **Socle `08`–`10`** | Conception générique Studio déjà validée ; OPS1 **spécialise** sans l’invalider |

---

## 1. Objet et portée

### 1.1 Problème fonctionnel traité

Morris doit pouvoir **discuter librement et réellement** avec ChatGPT dans SFIA Studio, conserver le contexte de session, challenger et reformuler, puis — seulement si pertinent — transformer l’échange en **action structurée** soumise à gate, exécutée de façon étroite (Markdown), puis **reprendre la conversation** sur le résultat, et **clôturer** avec historique et reprise.

### 1.2 Valeur attendue

| Valeur | Description |
|--------|-------------|
| Continuité conversationnelle | Qualité d’échange comparable à un ChatGPT externe, dans Studio |
| Gouvernance | Chat libre ≠ exécution libre |
| Opérabilité | Action étroite réellement exécutable après GO |
| Reprise | Session et fil récupérables après interruption |
| Preuve POC | Faisabilité conversation+action — **≠ MVP** |

### 1.3 Début et fin du parcours

| Borne | Description |
|-------|-------------|
| **Début** | Ouverture ou reprise d’une `CycleSession` ; engagement d’une conversation réelle (demande éventuellement imprécise) |
| **Fin** | Clôture Morris explicite ; historique conversation → (action?) → (exécution?) → analyse candidate → décision consultable ; consultation de la session `CLOSED` possible ; reprise d’activité via **continuation ou nouvelle session liée** (pas de mutation silencieuse) |

### 1.4 In-scope

- Conversation GPT réelle, libre, contextuelle, multi-tours, non scénarisée (preuve opératoire) ;
- Session persistante et reprenable ; journal ; phases conversationnelles ;
- Action candidate structurée **séparée** du dialogue ; cas sans action ;
- Gates Morris (GO / NO-GO / CORRIGER / ABANDONNER / STOP) ;
- Revalidation harness ; exécution Markdown bornée ; rapport / diff / preuves ;
- Conversation post-exécution ; analyse GPT **candidate** ; décision finale ; clôture ;
- Exigences fonctionnelles sécurité, RGPD, FinOps, accessibilité, performance perçue, observabilité ;
- Scénario pilote d’action **exclusivement Campus360** — Markdown documentaires non protégés **éligibles** (multi-fichiers possibles) ; allowlist **par action** ; cartographie/branche sous `G-OPS1-SCENARIO-VAL` ;
- Critères de passage vers les cycles SFIA suivants (architecture fonctionnelle, UX, backlog) — séquencement **normal**, pas dette.

### 1.5 Out-of-scope

- Stack, BDD, API, protocole, schéma technique, code (routés vers architecture technique — cycle 6) ;
- Architecture fonctionnelle détaillée et UX/UI visuelle / Figma (cycles distincts normaux, GO distincts) ;
- Backlog / stories / delivery / GPT live / Cursor réel dans **ce** cycle ;
- Commit / push / PR / merge automatiques dans le scénario OPS1 ;
- Multi-projets hors Campus360 pour le pilote d’action ; multi-users ; auth entreprise ; industrialisation ; MVP ; production ;
- Modification des docs `42`–`44`, README, `app/**`, `harness/**`, `method/**`, `prompts/**` ;
- Liste globale définitive de fichiers Campus360 ; nom de branche d’exécution définitif ; modification effective de fichiers Campus360 dans ce cycle ;
- Versionnement / push / PR hors GO versioning local ; delivery / live / MVP (gates distincts fermés).

### 1.6 Hypothèses

| ID | Hypothèse |
|----|-----------|
| H-FD-01 | Option B + AF-Option C inchangées |
| H-FD-02 | Chat libre + plafonds FinOps suffit sans questions pré-définies |
| H-FD-03 | Limitation Markdown borne l’**action**, pas le **dialogue** |
| H-FD-04 | Trajectoire I1–I7 reste un guide de cadrage, pas un backlog |
| H-FD-05 | Live conversation et live Cursor restent des GO distincts |
| H-FD-06 | Socle A–E (cockpit, ports, live ponctuels) reste disponible comme héritage, réorganisé autour du chat |
| H-FD-07 | Le pilote d’action OPS1 s’ancre exclusivement dans le contexte **Campus360** sans faire d’OPS1 une feature Campus360 |

### 1.7 Réserves de conception (ouvertes)

- Valeurs numériques FinOps (seuils, budgets chiffrés, modèles autorisés, plafonds session/jour) — **OPEN**, non bloquantes pour la validation fonctionnelle ; à décider **avant** ouverture live ;
- Mécanisme exact de continuation après `CLOSE` (lien de sessions) — `OPS1-FD-CAND-13` ;
- **Cartographie** des chemins / catégories documentaires Campus360 **éligibles** (et exclusions) — `G-OPS1-SCENARIO-VAL` ;
- Convention de branche Campus360 exacte — `G-OPS1-SCENARIO-VAL` ;
- Preuve live non réalisée ;
- CI distante non prouvée ;
- Isolation OS/réseau non industrialisée.

> **Retiré** comme réserve globale : « fichier Markdown Campus360 exact unique » — remplacé par le modèle éligibilité multi-fichiers + allowlist par action (décision Morris 2026-07-20 13:36 CEST).

### 1.8 Sujets explicitement routés (≠ réserves de conception)

| Sujet | Destination |
|-------|-------------|
| Architecture fonctionnelle | Cycle distinct — `G-OPS1-FUNC-ARCH` (séquence méthode SFIA normale) |
| UX/UI + Figma | Cycle distinct — `G-OPS1-UX` (séquence méthode SFIA normale) |
| Stack / BDD / API / protocole | Cycle **6 — Architecture technique** ; gate OPS1 technique futur (`G-OPS1-TECH-ARCH` si établi) |
| Backlog / delivery / live | Gates distincts — **fermés** |
| Cartographie chemins éligibles Campus360 + branche + règles allowlist | `G-OPS1-SCENARIO-VAL` |

---

## 2. Acteurs et responsabilités

| Acteur | Responsabilité fonctionnelle | Ne fait pas |
|--------|------------------------------|-------------|
| **Morris** | Discute ; corrige ; sélectionne sources ; GO / NO-GO / CORRIGER / ABANDONNER / STOP ; clôture ; décide finale | Déléguer un GO au chat ; automatiser l’arbitrage L0 |
| **GPT** | Converse librement ; clarifie ; propose options ; émet action candidate structurée (facultative) ; analyse post-exec (candidat) | Décider ; exécuter ; claim MVP ; créer AUTHORIZED |
| **SFIA Studio** | Affiche fil, phases, action, gate, rapport, historique ; orchestre l’expérience | Interpréter le chat comme GO ; devenir seconde vérité Git |
| **Harness** | Revalide schémas, contrats, allowlist, plafonds, idempotence **indépendamment** du texte GPT ; fail-closed | Créer un GO ; élargir le périmètre |
| **Cursor** | Exécute un `ExecutionContract` borné après GO + revalidation | Push / commit / PR auto ; décider ; élargir |
| **Git** | Vérité technique et documentaire (HEAD, diffs, fichiers, branches) | Être remplacé par le store de session |
| **Capacité de persistance de session** | Conserve journal, objets, états, preuves référencées pour reprise | Imposer une technologie ; primer sur Git en cas de conflit |

---

## 3. Capacités fonctionnelles

| ID | Capacité | Notes |
|----|----------|-------|
| CAP-01 | Créer une session | Nouvelle `CycleSession` ancrée sur repo/HEAD |
| CAP-02 | Reprendre une session | Rechargement sans invention ; état sûr si ambigu |
| CAP-03 | Envoyer / recevoir messages réels | `originKind=real` pour preuve opératoire |
| CAP-04 | Conserver le contexte utile | `ConversationContext` dérivé, non vérité Git |
| CAP-05 | Distinguer auteurs | Morris / GPT / système |
| CAP-06 | Sélectionner sources Git consultables | Explicite ; pas le dépôt entier automatique |
| CAP-07 | Continuer sans action | Cas `ACTION_NOT_REQUIRED` |
| CAP-08 | Produire une action candidate séparée | Objet ≠ bulle chat |
| CAP-09 | Corriger / retirer une action candidate | Via chat ou surface structurée |
| CAP-10 | Soumettre une action au gate | Passage explicite à `MORRIS_ACTION_GATE` |
| CAP-11 | GO / NO-GO / CORRIGER / ABANDONNER | Décisions ancrées horodatées |
| CAP-12 | STOP | Prioritaire à tout moment pertinent |
| CAP-13 | Revalidation du contrat | Harness avant exécution |
| CAP-14 | Exécution Markdown bornée | Allowlist ; local ; no remote auto |
| CAP-15 | Consulter rapport et diff | Preuves référencées |
| CAP-16 | Conversation post-exécution | **Obligatoire** dans le BeB avec exécution |
| CAP-17 | Analyse GPT candidate | `candidateOnly` |
| CAP-18 | Décision Morris finale | CLOSE / CORRECT / RELAUNCH / ABANDON |
| CAP-19 | Clôture | Explicite |
| CAP-20 | Reprise après clôture | Consultation `CLOSED` immuable ; continuation ou **nouvelle session liée** — pas de mutation silencieuse |
| CAP-21 | Journal et historique | Reconstructible ; corrélations |

---

## 4. Objets fonctionnels

Les noms sont **candidats**. Aucun schéma technique, BDD ou API n’est imposé.

### 4.1 CycleSession

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Agrégat de session OPS1 : conversation, actions, gates, exécution, analyses, clôture |
| **Données minimales** | `sessionId` ; projet/repo ; phase conversationnelle ; état global ; messages[] ; actions[] ; gates[] ; contrats/rapports ; décisions[] ; evidence[] ; FinOps ; réserves ; timestamps+fuseau ; ancrage Git (`baseSha`/`headSha`) |
| **Source de vérité** | Session pour le journal ; **Git** pour HEAD/fichiers/diffs |
| **Cycle de vie** | Créée → active → (évent. exécution) → clôturée / abandonnée / STOPPED / FAILED |
| **Liens** | Contient tous les objets ci-dessous |
| **Autorité** | Création/clôture = Morris ; mutations d’état structurantes = Morris ou harness (revalidation) |

### 4.2 ConversationMessage

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Unité du journal conversationnel |
| **Données minimales** | `messageId` ; `sessionId` ; `author` ; `timestamp+tz` ; `phase` ; `content` ; `gitRefs` sélectionnés ; liens action/décision optionnels ; `originKind` (`real`/`fixture`/`system`) |
| **Source de vérité** | Store de session + preuves |
| **Cycle de vie** | Append-only fonctionnel (pas d’édition silencieuse du passé) |
| **Liens** | Session ; éventuellement `ProposedAction` / `MorrisDecision` |
| **Autorité** | Auteur du message ; harness n’interprète pas le texte comme commande |

### 4.3 ConversationContext

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Synthèse utile pour continuité (condensable) |
| **Données minimales** | Résumé thématique ; objectifs courants ; options ouvertes ; contraintes rappelées ; budget restant ; refs Git actives |
| **Source de vérité** | Dérivé du journal — **aide**, pas vérité |
| **Cycle de vie** | Mis à jour ; condensation contrôlée (explicite) |
| **Liens** | Session ; messages |
| **Autorité** | Système propose ; Morris peut exiger rechargement depuis journal/Git |

### 4.4 SourceReference

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Référence Git **explicitement sélectionnée** (fichier, commit, path) |
| **Données minimales** | type ; chemin ou SHA ; raison de sélection ; timestamp |
| **Source de vérité** | Git |
| **Cycle de vie** | Ajout / retrait explicite |
| **Liens** | Messages ; action ; contrat |
| **Autorité** | Morris sélectionne ; GPT peut **proposer** une sélection |

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

### 4.6 ActionGate

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Surface de décision explicite sur une action |
| **Données minimales** | actionId ; options (GO/NO-GO/CORRIGER/ABANDONNER) ; motif ; ancrage (contractHash candidat, HEAD, allowlist) ; statut |
| **Source de vérité** | Décision Morris enregistrée |
| **Cycle de vie** | ouvert → consommé / refusé / abandonné |
| **Liens** | ProposedAction ; MorrisDecision ; ExecutionContract |
| **Autorité** | **Morris uniquement** |

### 4.7 MorrisDecision

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Trace d’une décision L0 horodatée |
| **Données minimales** | type ; cible ; motif ; timestamp+tz ; refs (session/action/contrat) ; résultat |
| **Source de vérité** | Journal de décisions de session + preuves |
| **Cycle de vie** | Append-only |
| **Liens** | Gate ; clôture ; STOP |
| **Autorité** | Morris |

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

### 4.9 ExecutionReport

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Compte-rendu d’exécution |
| **Données minimales** | statut ; résumé ; **chemins touchés (tous)** ; erreurs ; **diff consolidé** + **diff par fichier** ; références preuves ; complétude (couverture allowlist) |
| **Source de vérité** | Preuves + Git diff |
| **Cycle de vie** | produit → consulté ; incomplet = bloquant |
| **Liens** | Contrat ; EvidenceReference ; post-exec |
| **Autorité** | Cursor/harness produisent ; Morris consulte |

### 4.10 EvidenceReference

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Pointeur vers preuve (diff, log, artefact) |
| **Données minimales** | kind ; locator ; hash/ref ; timestamp |
| **Source de vérité** | Preuves + Git |
| **Cycle de vie** | créé ; consultable |
| **Liens** | Rapport ; summary |
| **Autorité** | Système |

### 4.11 AnalysisCandidate

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Analyse / verdict GPT **candidat** après exécution |
| **Données minimales** | contenu ; `candidateOnly=true` ; sources ; timestamp |
| **Source de vérité** | Session (non décision) |
| **Cycle de vie** | produit → consulté ; jamais auto-CLOSING |
| **Liens** | Rapport ; MorrisDecision finale |
| **Autorité** | GPT propose ; Morris décide |

### 4.12 CycleSummary

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Synthèse de clôture / état final |
| **Données minimales** | état final ; résumé ; réserves ; refs preuves ; FinOps agrégé |
| **Source de vérité** | Session + Git |
| **Cycle de vie** | produit à clôture ; consultable en reprise |
| **Liens** | Session |
| **Autorité** | Système agrège ; Morris valide la clôture |

### 4.13 FinOpsUsage

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Compteurs de coût/usage |
| **Données minimales** | buckets séparés : conversation / structuration / analyse ; alertes ; budgets candidats |
| **Source de vérité** | Compteurs session |
| **Cycle de vie** | incrémenté ; alerté ; jamais retry auto pour « rattraper » |
| **Liens** | Session ; messages |
| **Autorité** | Système mesure ; Morris confirme coûts élevés |

### 4.14 Reservation

| Aspect | Contenu |
|--------|---------|
| **Responsabilité** | Réserve explicite (ouverte / maintenue) |
| **Données minimales** | id ; libellé ; portée ; statut |
| **Source de vérité** | Session / summary |
| **Cycle de vie** | ouverte → maintenue / levée (GO futur) |
| **Liens** | Summary ; décisions |
| **Autorité** | Morris / conception |

---

## 5. États fonctionnels

Quatre couches **indépendantes conceptuellement** (héritage `42`, instanciées ici). Les libellés restent **candidats** (OPS1-CAND-13).

### 5.1 État global de session

| État | Intention |
|------|-----------|
| `OPEN` | Session active |
| `CLOSED` | Clôturée explicitement |
| `ABANDONED` | Abandon explicite |
| `STOPPED` | STOP prioritaire |
| `FAILED` | Échec fail-closed |

### 5.2 Phase conversationnelle

| Phase | Intention |
|-------|-----------|
| `CONVERSATION_ACTIVE` | Dialogue libre |
| `POST_EXECUTION_CONVERSATION` | Chat réel après rapport |
| `AWAITING_FINAL_DECISION` | Attente décision Morris finale |
| `IDLE_READ_ONLY` | Consultation sans nouveau tour (reprise lecture) |

### 5.3 Statut d’action

| Statut | Intention |
|--------|-----------|
| `NONE` | Pas d’action |
| `ACTION_NOT_REQUIRED` | Signal « pas d’action » (chat peut continuer) |
| `ACTION_CANDIDATE` | Proposition structurée affichée |
| `ACTION_REFINEMENT` | Correction en cours |
| `MORRIS_ACTION_GATE` | Attente décision gate |
| `ACTION_AUTHORIZED` | GO consommé — exécution pas démarrée |
| `ACTION_REFUSED` | NO-GO |
| `ACTION_WITHDRAWN` | Retirée |

### 5.4 Statut d’exécution

| Statut | Intention |
|--------|-----------|
| `IDLE` | Pas d’exécution |
| `EXECUTION_PENDING` | Préparation / revalidation |
| `EXECUTING` | Cursor en cours |
| `REPORT_AVAILABLE` | Rapport disponible |
| `EXECUTION_FAILED` | Échec / rapport incomplet bloquant |

### 5.5 Règles transverses d’état

1. La conversation peut rester active dans plusieurs états globaux `OPEN`.
2. Une réponse GPT **ne** fait **jamais** passer une action à `ACTION_AUTHORIZED`.
3. Aucun passage implicite à `AUTHORIZED` depuis le texte chat.
4. `STOP` et `FAILED` ont priorité sur les transitions nominales.
5. Timeout ≠ GO ; aucun retry automatique d’exécution.
6. Reprise : recharger sans inventer ; ambiguïté → `STOPPED` / `FAILED` / lecture seule.
7. Session `CLOSED` : **immuable** ; consultation autorisée ; reprendre une activité = **continuation liée** (nouvel id + référence source ; propre contrat/gate si action) — **aucune** réouverture silencieuse (`FD-CAND-13 — LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN`).

Transitions détaillées : [`46`](./46-ops1-functional-flows-and-rules.md).

---

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

## 7. Exigences transverses fonctionnelles

### 7.1 Sécurité

- Secrets exclus ; sources sélectionnées ; outils allowlistés ;
- Prompt injection : contenu fichiers/utilisateur = données ; harness valide hors confiance au texte GPT ;
- Default deny ; fail-closed ; séparation des autorités (Morris / GPT / harness / Cursor / Git) ;
- Action non exécutable avant gate + revalidation.

### 7.2 RGPD (principes fonctionnels — **pas** de conformité validée)

- Minimisation : ne pas injecter de données personnelles inutiles dans prompts/rapports ;
- Finalité : pilotage de cycle POC sous contrôle Morris ;
- Durée / suppression / export / purge : **candidates** à qualifier (GO futur) — non inventées comme validées ;
- Journalisation proportionnée ; messages et rapports peuvent contenir des données personnelles → traitement conscient ;
- **Ne pas claim** conformité RGPD validée.

### 7.3 FinOps

- Compteurs séparés conversation / structuration / analyse ;
- Budgets session et journalier **candidats** ; alertes de seuil ; confirmation avant coût élevé / changement de modèle ;
- Condensation contrôlée ; aucun retry automatique ;
- Libre ≠ illimité ;
- **Valeurs numériques OPEN** (seuils, plafonds, modèles autorisés) — **non bloquantes** pour la validation de la conception fonctionnelle ;
- Ces valeurs doivent être **décidées avant l’ouverture live** (GO FinOps / live distinct) — pas dans ce cycle.

### 7.4 Accessibilité (besoins fonctionnels)

- Navigation clavier des surfaces conversation / action / gate / rapport ;
- Annonces des changements d’état (phase, gate, exécution) ;
- Distinction non uniquement visuelle (auteurs, statuts, erreurs) ;
- Lisibilité du fil, des gates et des erreurs ;
- Historique consultable.

### 7.5 Performance perçue

- Retours d’état pendant latence (envoi, génération, exécution) ;
- Timeouts fonctionnels visibles ;
- Reprise sans perte du journal persisté ;
- Pagination / chargement progressif **candidat** pour historique long ;
- **Aucun SLA chiffré inventé**.

### 7.6 Observabilité

- Corrélations `sessionId` / `messageId` / `actionId` / `contractHash` / exécution ;
- Horodatage avec fuseau ; `originKind` ;
- Preuves et erreurs consultables ;
- Distinction événement fonctionnel vs log technique (ce dernier hors conception détaillée).

### 7.7 Surfaces UX fonctionnelles (non visuelles)

Besoins : fil conversationnel ; panneau d’action ; panneau de gate ; rapport/diff ; historique/reprise ; budgets/alertes.
**Interdit dans ce cycle :** Figma, design final, mesures/composants définitifs, READY visuel.

---

## 8. Critères d’acceptation de la conception (couverture `43` §6.1)

| # | Critère (43 §6.1) | Capacité / règle | Parcours de preuve (futur) | Statut conception | Cycle futur probable |
|---|-------------------|------------------|----------------------------|-------------------|----------------------|
| 1 | GPT réel scénario pilote | CAP-03 ; FR-018 | Démo live I2/I7 | Couvert | `G-OPS1-LIVE-CONVERSATION` |
| 2 | Pas de fixture métier pilote | FR-018 | Preuve opératoire | Couvert | I7 |
| 3 | Multi-tours non prédéterminés | FR-001 ; FLOW-03/04 | Démo non scriptée | Couvert | I2/I7 |
| 4 | Morris corrige/conteste | CAP-09 ; FLOW-05/07/08 | Tours de correction | Couvert | I2/I3 |
| 5 | Contexte conservé | CAP-04 ; FR-014 | Reprise thématique | Couvert | I1/I2 |
| 6 | Réponse sans action | CAP-07 ; FLOW-03/09 | Cas ACTION_NOT_REQUIRED | Couvert | I2/I3 |
| 7 | Action structurée après discussion | CAP-08 ; FLOW-06 | Objet séparé | Couvert | I3 |
| 8 | Aucune action avant gate | FR-008 ; FLOW-17 | Preuve négative | Couvert | I3/I4 |
| 9 | Reprise après rapport | CAP-16 ; FLOW-21 | Post-exec | Couvert | I5 |
| 10 | Fermer puis reprendre session | CAP-02/19/20 ; FLOW-02/27 | I1/I6 | Couvert | I1/I6 |
| 11 | Fixtures tests OK ; preuve live | FR-018 | Tests vs démo | Couvert | Delivery/tests |
| 12 | Markdown ≠ limite conversation | FR-022 | Formulation surfaces | Couvert | UX + I7 |
| 13 | Pas de décision structurante sans Morris | FR-004 | Gates | Couvert | Tous |
| 14 | Pas de remote Git auto | FR-007 | Preuve négative | Couvert | I4 |
| 15 | Rapport/preuves/diff | CAP-15 ; FLOW-20 | Consultation | Couvert | I5 |
| 16 | Analyse GPT candidate | CAP-17 ; FR-020 | candidateOnly | Couvert | I5/E |
| 17 | Clôture Morris explicite | CAP-18/19 ; FLOW-24 | CLOSE | Couvert | I6 |

Souhaitables `43` §6.2 : couverts comme **candidats** (coût visible, condensation explicite, export pack) — non contractuels pour succès OPS1.

---

## 9. Traçabilité

| OPS1-CAND | Sections conception | OPS1-FR | Critères 43 | Réserve |
|-----------|---------------------|---------|-------------|---------|
| 01 | §1.4 ; §11 éligibilité multi-fichiers + allowlist | 006,007,022,026–032 | 8,12,14 | Cartographie/branche sous SCENARIO-VAL |
| 02 | §1.4 ; §3 | 001–025 | 1–17 | — |
| 03 | §1 ; §3 CAP-03 ; FR-001 | 001,018 | 1–5 | — |
| 04 | FR-018 | 018 | 2,11 | — |
| 05 | §4.5 ; FR-003 | 003,004 | 7,8 | — |
| 06 | CAP-07/16 ; FR-002,019 | 002,019 | 6,9 | — |
| 07 | §4.1 | — | 10 | Noms ajustables |
| 08 | CAP-01/02/20 | 014,015 | 10 | Stack/BDD **routés** archi technique (≠ réserve conception) |
| 09 | FR-007 | 007 | 14 | — |
| 10 | §1.6 H-FD-04 ; doc 47 | — | — | Pas backlog |
| 11 | §8 | — | 1–17 | — |
| 12 | Distinction POC/OPS1/MVP | — | anti-claims | — |
| 13 | §5 | — | — | Libellés ajustables |
| 14 | §7.3 ; FR-023 | 023 | souhaitable | Valeurs numériques OPEN (non bloquantes) |

---

## 10. Points ouverts et routage

| Sujet | Destination | Nature |
|-------|-------------|--------|
| Validation de cette conception (`OPS1-FD-CAND-*`) | `G-OPS1-FUNC-DESIGN-VAL` **consommé** (2026-07-20 13:46 CEST) | **Validé avec réserves** |
| Noms techniques définitifs d’états/champs | Conception / archi fonctionnelle | Ajustement normal |
| Surfaces conversation / Figma | Cycle UX — `G-OPS1-UX` | **Cycle distinct normal** |
| Architecture fonctionnelle | Cycle — `G-OPS1-FUNC-ARCH` | **Cycle distinct normal** |
| Stack / BDD / API / protocole | Cycle **6 — Architecture technique** (`G-OPS1-TECH-ARCH` si établi) | **Routé** — hors réserves conception |
| Découpage I1–I7 en stories | `G-OPS1-BACKLOG` | Fermé |
| Implémentation / live GPT / Cursor | Delivery / live (gates distincts) | Fermé |
| Cartographie chemins éligibles Campus360 + branche + allowlist | `G-OPS1-SCENARIO-VAL` **consommé** | Docs [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) **validés avec amendements** ; FD-CAND-20/26 **levées** pour OPS1 ; `03` protégé par défaut |
| Plafonds FinOps numériques | GO avant live | Réserve conception (non bloquante pour FUNC-DESIGN-VAL) |
| Mécanisme continuation après CLOSE | Scénario OPS1 — FD-CAND-13 **levée** | Continuation liée obligatoire ; jamais de réouverture silencieuse (voir [`54`](./54-ops1-operational-scenario.md) §4bis) |

---

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
**État scénario :** [`54`](./54-ops1-operational-scenario.md)–[`56`](./56-ops1-scenario-decision-pack.md) **validés avec amendements** — `GO G-OPS1-SCENARIO-VAL — VALIDATION AVEC AMENDEMENTS — 2026-07-20 18:34:47 CEST`.
**FD-CAND-20** levée pour OPS1 · **FD-CAND-26** levée pour Campus360 OPS1 (`03` protégé par défaut) · **FD-CAND-13** levée (continuation liée).
**Non figé ici :** demande métier exacte d’une démonstration live (exécution ultérieure).

---

## 12. Critères de passage (candidats) — séquence méthode normale

| Vers | Critères candidats | Nature |
|------|-------------------|--------|
| Architecture fonctionnelle | Conception validée Morris (`G-OPS1-FUNC-DESIGN-VAL`) ; objets/états stables | Cycle distinct **normal** — `G-OPS1-FUNC-ARCH` |
| UX/UI | Conception validée ; besoins de surfaces stables ; Figma sous GO UX | Cycle distinct **normal** — `G-OPS1-UX` |
| Architecture technique | Après besoins stables ; stack/BDD/API/protocole | Cycle **6** — hors conception |
| Backlog | Conception (+ éventuellement UX/archi fct) validées ; I1–I7 candidats de découpage | `G-OPS1-BACKLOG` — fermé |
| Delivery / live | Backlog + GO delivery/live distincts | Jamais ouverts par ce document |

---

## 13. Verdict documentaire

`functional-design-validated-with-reservations`

`SFIA STUDIO OPS1 FUNCTIONAL DESIGN VALIDATED WITH RESERVATIONS`

Gate `G-OPS1-FUNC-DESIGN-VAL` consommé — Morris — 2026-07-20 13:46 CEST.
Amendement final multi-fichiers + allowlist (2026-07-20 13:36 CEST) intégré.
**Intégré et canonique sur `main`** via PR [#237](https://github.com/mcleland147/sfia-workspace/pull/237) (squash `6cbf37482c7d384ef5630259d58a2e223a607925`) ; post-merge **validé** (2026-07-20 14:29 CEST).
Réserves 13, 15, 20, 26 **inchangées**. Aucun cycle architecture / UX / backlog / delivery / live / MVP ouvert automatiquement.

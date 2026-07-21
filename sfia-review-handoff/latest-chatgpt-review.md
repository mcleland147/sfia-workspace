# Review pack Full — OPS1 I3 cadrage repo-informed

## Métadonnées

- Date / heure / fuseau : 2026-07-21 07:17:54 CEST
- Repo : mcleland147/sfia-workspace
- Cycle : 1 — Cadrage (+ lecture cycles 2/5/6)
- Profil : Standard
- Incrément : OPS1 I3
- HEAD : `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f`
- origin/main : `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f`
- Alignement : detached / HEAD = origin/main = merge I2 `ae39a8c…`
- Review pack : Full
- Review Handoff Git : required
- Mode handoff : publish-in-cycle
- Implémentation : **interdite dans ce cycle**

## État Git

```text
?? .tmp-sfia-review/
?? .tmp-write-ops1-i3-cadrage.py
?? projects/.tmp-sfia-review/

```

- Staged : vide
- Tracked diff : vide
- Branche delivery I3 : **absente**
- Merge OPS1 I2 sur main : **présent** (`ae39a8c0375c2f8980d3ee394fa679dee8b06c0f`)
- `projects/.tmp-sfia-review/` : observé, non modifié

## 1. Observation Git

### Sources consultées (paths sur `origin/main`)

| Path | Rôle | Niveau |
|------|------|--------|
| `projects/sfia-studio/41-operational-vertical-slice-1-framing.md` | Trajectoire I1–I7 | **Décision déjà validée** (cadrage) |
| `projects/sfia-studio/44-operational-vertical-slice-1-decision-pack.md` | Trajectoire + gate `G-OPS1-ACTION-GATE` | **Décision déjà validée** |
| `projects/sfia-studio/45-ops1-functional-design.md` | CAP-07/08, FR-008, mapping I3 | Conception validée (docs) |
| `projects/sfia-studio/46-ops1-functional-flows-and-rules.md` | FLOW-06…10, FLOW-17 | Conception validée |
| `projects/sfia-studio/51-ops1-ux-ui-contract.md` | Panneaux action / gate UX-03/05 | UX validée avec réserves |
| `projects/sfia-studio/57-ops1-technical-architecture.md` | Morris Gate Service, Action Contract | Tech-arch validée |
| `projects/sfia-studio/60-ops1-backlog-framing-and-prioritization.md` | Mapping I3 = E03+E04 | Backlog validé avec réserves |
| `projects/sfia-studio/61-ops1-epics-stories-and-acceptance-criteria.md` | Stories E03/E04 + CA | Backlog validé avec réserves |
| `projects/sfia-studio/62-ops1-backlog-decision-pack.md` | Ordre I1→I7 | Backlog validé |
| `projects/sfia-studio/app/lib/ops1/**` | Runtime I1/I2 (pas d’ActionCandidate) | **Observation code** |
| PR #246 / #248 | I1 / I2 mergés | **Observation historique** |

### Sources absentes / non trouvées

- Pas de document nommé `*ops1-i3*` dédié delivery.
- Pas de branche `delivery/*i3*`.
- Pas d’implémentation `ActionCandidate` / `gateDecision` dans le code I1/I2.
- Pas de contradiction majeure entre cadrage / backlog / UX / tech sur le **noyau** I3.

### Extraits utiles — trajectoire

```text
308| ## 9. Trajectoire candidate (conversation-first)
309|
310| Voir détail et comparaison d’options dans [`44`](./44-operational-vertical-slice-1-decision-pack.md).
311|
312| 1. **I1** — Session + journal conversationnel (fixture OK pour tests de persistance)
313| 2. **I2** — Conversation GPT **réelle et libre** (sans Cursor) — gate `G-OPS1-LIVE-CONVERSATION`
314| 3. **I3** — Proposition d’action + gates (sans exécution)
315| 4. **I4** — Contrat documentaire + Cursor Markdown borné
316| 5. **I5** — Rapport + conversation post-exécution
317| 6. **I6** — Clôture, historique, reprise complète
318| 7. **I7** — Démonstration opératoire OPS1 (GPT réel + Cursor réel + chat non scénarisé)
```

```text
115| ## 6. Trajectoire I1–I7 — validée au niveau cadrage
116|
117| | # | Objectif | Statut cadrage |
118| |---|----------|----------------|
119| | **I1** | Session persistante et journal conversationnel | Trajectoire validée |
120| | **I2** | Conversation GPT réelle et libre | Trajectoire validée |
121| | **I3** | Proposition d’action structurée et gates | Trajectoire validée |
122| | **I4** | Contrat documentaire et Cursor borné | Trajectoire validée |
123| | **I5** | Rapport, preuves et conversation post-exécution | Trajectoire validée |
124| | **I6** | Clôture, historique et reprise complète | Trajectoire validée |
125| | **I7** | Démonstration opératoire OPS1 | Trajectoire validée |
126|
127| **Statut global :** trajectoire produit **validée pour préparer la conception** ; noms et découpage delivery **non définitifs** ; chaque incrément futur soumis à qualification et GO Morris ; **aucun** gate live ou delivery ouvert par `G-OPS1-FRAMING-VAL`.
128|
129| ---
130|
131| ## 7. Réserves maintenues
132|
133| - Fichier Markdown exact du scénario pilote **non choisi**
134| - Branche locale et convention de nommage **non figées**
135| - Plafonds FinOps numériques **À définir**
136| - Stack de persistance / BDD **non décidées**
137| - Protocole et API **non décidés**
138| - Architecture technique **non validée**
139| - UX/UI finale et Figma **non validés**
140| - CI distante SFIA Studio **non prouvée**
141| - Isolation OS/réseau **non industrialisée**
142| - Aucun backlog ou delivery **ouvert**
143| - Aucun claim MVP, production-ready ou industrialisation
144|
145| ---
146|
147| ## 8. Décisions explicitement non prises / non ouvertes
148|
149| - Stack / BDD / protocole / API
150| - Maquettes Figma / UX finale
151| - Backlog stories / delivery
152| - Code `app/**` / `harness/**`
153| - Valeurs numériques FinOps
154| - Ouverture MVP
155| - Modification méthode ou prompts
156| - Commit / push / PR des documents de cadrage (hors handoff review)
157| - GPT live / Cursor réel
158|
159| ---
160|
161| ## 9. Gates Morris futurs (tous **fermés**)
162|
163| | Gate | Objet | Statut |
164| |------|-------|--------|
165| | `G-OPS1-FRAMING-VAL` | Validation cadrage | **Consommé** |
166| | `G-OPS1-SCENARIO-VAL` | Scénario pilote (fichier/branche) | Fermé |
167| | `G-OPS1-SESSION-VAL` | Précisions session (si besoin) | Fermé |
168| | `G-OPS1-FUNC-DESIGN` | Conception fonctionnelle OPS1 | Fermé |
169| | `G-OPS1-FUNC-ARCH` | Architecture fonctionnelle | Fermé |
170| | `G-OPS1-UX` | UX/UI | Fermé |
171| | `G-OPS1-BACKLOG` | Backlog | Fermé |
172| | `G-OPS1-DEL-SESSION` | Delivery I1 | Fermé |
173| | `G-OPS1-LIVE-CONVERSATION` | GPT live conversationnel | Fermé |
174| | `G-OPS1-ACTION-GATE` | Delivery I3 | Fermé |
175| | `G-OPS1-LIVE-CURSOR` | Cursor réel | Fermé |
```

### Extraits utiles — backlog I3

```text
104| ## 7. Mapping I1–I7
105|
106| | Incrément | Intention | Epics principaux ([`61`](./61-ops1-epics-stories-and-acceptance-criteria.md)) | Priorité dominante |
107| |-----------|-----------|-----------------------------------------------------------------------------|--------------------|
108| | **I1** | Session + journal | E01 Session · E12 UX états | P0 |
109| | **I2** | Conversation GPT réelle multi-tours | E02 Conversation · E12 UX | P0 (live gate distinct) |
110| | **I3** | Qualification + proposition d’action + gate | E03 Qualification · E04 Gate Morris | P0 |
111| | **I4** | Contrat + Cursor Markdown borné | E05 Contrat/hash · E06 Paths · E07 Worktree/runner | P0 |
112| | **I5** | Rapport + conversation post-exécution | E10 Rapport · E11 Reprise post-exec | P0 |
113| | **I6** | Clôture, historique, reprise | E01 Session (CLOSE) · E11 · E13 Audit | P0/P1 |
114| | **I7** | Démonstration opératoire | E17 Démo I7 · transverses E14–E16 | P0 (preuve) |
115|
116| Transverses : E08 Stockage · E09 Idempotence · E13 Observabilité · E14 Sécurité · E15 Contrôles locaux / DevOps prep · E16 FinOps.
117|
118| ---
119|
120| ## 8. Stratégie d’incréments (candidate)
121|
122| ```text
123| I1 (session) → I2 (chat réel*) → I3 (action+gate) → I4 (exec bornée)
124|   → I5 (rapport+reprise) → I6 (clôture) → I7 (démo bout-en-bout)
125| ```
```

```text
201| ## OPS1-E03 — Qualification et proposition d’action
202|
203| | Champ | Contenu |
204| |-------|---------|
205| | **Objectif** | Qualifier une intention et proposer une action structurée séparée du chat. |
206| | **Valeur OPS1** | Action facultative gouvernée (I3). |
207| | **Décisions / sources** | 45 CAP-08 · 46 flows · 51 panneaux · 54 scénario |
208| | **Priorité candidate** | P0 |
209| | **Dépendances** | E01,E02 |
210| | **Risques** | Action implicite dans le fil |
211| | **Critères de sortie** | Objet action distinct ; ACTION_NOT_REQUIRED possible ; aucun exec sans gate. |
212| | **Gates** | G-OPS1-BACKLOG-VAL ; GO delivery lot I3 |
213| | **Mapping** | I3 |
214| | **Stories** | `OPS1-US-E03-01`, `OPS1-US-E03-02` |
215|
216| ### OPS1-US-E03-01 — Proposer action structurée séparée
217|
218| | Champ | Contenu |
219| |-------|---------|
220| | **Formulation** | En tant que Morris, je veux recevoir une proposition d’action structurée hors du fil de chat, afin de l’examiner sans la confondre avec le dialogue. |
221| | **Acteur** | GPT/UI |
222| | **Besoin** | Recevoir une proposition d’action structurée hors du fil |
223| | **Valeur** | Examiner une action sans la confondre avec le dialogue |
224| | **Préconditions** | Discussion préalable |
225| | **Scénario nominal** | ActionCandidate dans panneau dédié |
226| | **Erreurs / stop** | Action seulement dans chat → invalide |
227| | **Critères d’acceptation** | Given une discussion préalable en session OPEN ; When une action est proposée ; Then un ActionCandidate distinct est créé hors du fil chat ; And le chat ne contient pas de GO ; Given une action proposée uniquement dans le chat ; When elle est détectée ; Then elle est invalidée pour exécution. |
228| | **Preuves attendues** | action object id |
229| | **Dépendances** | E02 |
230| | **Réserve** | UX-R02 |
231| | **Priorité candidate** | P0 |
232| | **Taille relative candidate** | M |
233| | **Gate Morris éventuelle** | — |
234| | **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |
235|
236| ### OPS1-US-E03-02 — Support ACTION_NOT_REQUIRED
237|
238| | Champ | Contenu |
239| |-------|---------|
240| | **Formulation** | En tant que Morris, je veux conclure qu’aucune action n’est nécessaire, afin de clôturer ou poursuivre la conversation sans forcer une exécution. |
241| | **Acteur** | Morris/GPT |
242| | **Besoin** | Conclure qu’aucune action n’est nécessaire |
243| | **Valeur** | Poursuivre sans forcer une exécution |
244| | **Préconditions** | Session chat |
245| | **Scénario nominal** | Décision pas d’action |
246| | **Erreurs / stop** | Forcer action → refus UX |
247| | **Critères d’acceptation** | Given une session de chat ; When Morris ou le flux qualifie ACTION_NOT_REQUIRED ; Then l’état est journalisé et aucune exécution n’est préparée ; Given une pression UI à forcer une action ; When ACTION_NOT_REQUIRED est choisi ; Then l’exécution reste impossible. |
248| | **Preuves attendues** | event |
249| | **Dépendances** | E02 |
250| | **Réserve** | — |
251| | **Priorité candidate** | P0 |
252| | **Taille relative candidate** | S |
253| | **Gate Morris éventuelle** | — |
254| | **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |
```

```text
258| ## OPS1-E04 — Gate Morris explicite
259|
260| | Champ | Contenu |
261| |-------|---------|
262| | **Objectif** | Journaliser GO/NO-GO L0 avant toute exécution. |
263| | **Valeur OPS1** | Autorité Morris (I3/I4). |
264| | **Décisions / sources** | 44 · 45 FR-008 · 48 Morris Gate · 57 Gate Service |
265| | **Priorité candidate** | P0 |
266| | **Dépendances** | E03 |
267| | **Risques** | Auto-GO / GO dans le chat |
268| | **Critères de sortie** | Aucune exécution sans décision Morris journalisée. |
269| | **Gates** | G-OPS1-BACKLOG-VAL |
270| | **Mapping** | I3,I4 |
271| | **Stories** | `OPS1-US-E04-01`, `OPS1-US-E04-02` |
272|
273| ### OPS1-US-E04-01 — Enregistrer GO Morris sur candidat
274|
275| | Champ | Contenu |
276| |-------|---------|
277| | **Formulation** | En tant que Morris, je veux enregistrer un GO explicite sur une action candidate, afin d’autoriser l’exécution sous mon autorité L0. |
278| | **Acteur** | Morris |
279| | **Besoin** | Enregistrer un GO explicite sur une action candidate |
280| | **Valeur** | Autoriser l’exécution sous autorité L0 |
281| | **Préconditions** | ActionCandidate valide |
282| | **Scénario nominal** | GO journalisé avec motif |
283| | **Erreurs / stop** | GO sans candidat → refus |
284| | **Critères d’acceptation** | Given une ActionCandidate valide et journalisée ; When Morris enregistre un GO explicite ; Then une gateDecision horodatée est persistée et liée à l’action ; And aucune exécution ne commence avant cette persistance ; And le rapport expose l’identifiant de la décision ; Given une décision absente ou invalide ; When une exécution est demandée ; Then l’exécution est refusée et une preuve négative est produite. |
285| | **Preuves attendues** | gateDecision artifact |
286| | **Dépendances** | E03 |
287| | **Réserve** | — |
288| | **Priorité candidate** | P0 |
289| | **Taille relative candidate** | S |
290| | **Gate Morris éventuelle** | — |
291| | **Statut** | `BACKLOG VALIDATED WITH RESERVATIONS — G-OPS1-BACKLOG-VAL` |
```

### Extraits utiles — flows / UX / tech

```text
184| ### OPS1-FLOW-06 — GPT propose une action candidate
185|
186| | Champ | Contenu |
187| |-------|---------|
188| | **Objectif** | Émettre ProposedAction séparée du dialogue avec allowlist explicite. |
189| | **Préconditions** | Discussion suffisante ; pas d’exécution en cours. |
190| | **Déclencheur** | GPT émet proposition structurée validable par harness de forme. |
191| | **Acteurs** | GPT, Studio, harness (validation de forme) |
192| | **États avant/après** | ACTION_CANDIDATE ; exec IDLE |
193| | **Données produites** | ProposedAction + allowlist (consultables/créables/modifiables) |
194| | **Preuves attendues** | Objet action ≠ bulle ; allowlist visible |
195| | **Critères associés** | Critère 7 ; FR-026–028 |
196| | **Décisions Morris** | Aucune autorisation |
197| | **Hors périmètre** | Ne pas figer de chemins réels ici |
198|
199| **Étapes nominales :**
200|    1. Créer ProposedAction ACTION_CANDIDATE
201|    2. Déclarer allowlist exhaustive (1..n Markdown Campus360 éligibles)
202|    3. Afficher panneau séparé avec allowlist
203|    4. Lier message optionnel
204|    5. Attendre Morris
205|
206| **Alternatives :**
207|    - Proposition refusée de forme / allowlist vide → rester en conversation avec erreur
208|    - Mono ou multi-fichiers selon besoin (pas de plafond artificiel à 1)
209|
210| **Erreurs et STOP :**
211|    - Schema invalide → pas d’ACTION_CANDIDATE
212|    - Fichier hors périmètre éligible Campus360 / protégé → refus de forme
```

```text
148| ## 7. Conversation → action candidate
149|
150| 1. Besoin clarifié.
151| 2. Apparition panneau **Action candidate — NON AUTORISÉE** (séparé du chat).
152| 3. Sources Git visibles.
153| 4. Allowlist exhaustive proposée (placeholder chemins si SCENARIO-VAL OPEN).
154| 5. Aucun CTA d’exécution dans le fil.
155|
156| **Frame :** OPS1-UX-03 (`61:275`).
157|
158| ---
159|
160| ## 8–9. Raffinement action
161|
162| | Mode | Surface | Frame |
163| |------|---------|-------|
164| | Par chat | Messages qui **mettent à jour** l’objet action (sans GO) | OPS1-UX-04 |
165| | Par surface structurée | Édition champs / allowlist / intention | OPS1-UX-04 |
166|
167| Toute modification d’allowlist **avant** GO reste dans le raffinement. Après GO : nouvel objet + nouveau gate (FR-030).
168|
169| ---
170|
171| ## 10. Gate Morris
172|
173| Surface indépendante — **OPS1-UX-05** (`61:411`) + strip 4 actions (`62:2`).
174|
175| | Action | Effet UX | ≠ |
176| |--------|----------|---|
177| | **GO** | Autorise exécution du contrat ancré | Message GPT |
178| | **NO-GO** | Refuse sans exécuter | STOP |
179| | **CORRIGER** | Renvoie au raffinement | Abandonner |
180| | **ABANDONNER** | Clôt sans exécution | NO-GO / STOP |
181| | **STOP** | Interrompt activité en cours (toujours accessible si pertinent) | Abandonner |
```

```text
56| ## 3. Vue d’ensemble des composants (candidats)
57|
58| | Composant | Rôle |
59| |-----------|------|
60| | **SFIA Studio UI** | Surfaces conversation, action, gate, rapport, clôture |
61| | **Conversation Service** | Messages multi-tours GPT réels |
62| | **Session Manager** | Cycle de vie session / continuation / CLOSE |
63| | **Context Builder** | Contexte Git sélectionné + condensation |
64| | **Action Contract Builder** | Contrat d’action + allowlist + hash |
65| | **Morris Gate Service** | Présentation et journalisation GO/NO-GO/CORRIGER/ABANDONNER/STOP |
66| | **Execution Orchestrator** | Enchaînement post-GO fail-closed |
67| | **Git Workspace Manager** | Worktree/workspace isolé, branche d’exécution |
68| | **Cursor Runner Adapter** | Lancement Cursor borné au contrat |
69| | **Policy / Allowlist Validator** | Résolution chemins, denylist, symlinks, hors allowlist |
70| | **Evidence and Report Collector** | Diffs, contrôles sortie, rapport consolidé + par fichier |
71| | **Audit Log** | Artefacts / événements append-only (immuables) |
72| | **Session Store** | SQLite opérationnel — sessions, états, locks, tentatives, index |
73| | **Metrics / FinOps Collector** | Compteurs et alertes (seuils OPEN) |
74|
```

### Trajectoire observée

- **I1** intégré : session + journal (#246)
- **I2** intégré : conversation multi-tours fixture/fake/live (#248)
- **I3** documenté comme étape suivante : proposition d’action + gates **sans exécution**
- **I4+** : exécution Cursor, rapport, CLOSED, démo

## 2. Réponses aux questions de cadrage

| # | Question | Réponse étiquetée |
|---|----------|-------------------|
| 1 | Contrat I3 explicite sur main ? | **Oui** — observation : `60` §7, `41` §9, `44` §6, epics E03/E04 |
| 2 | Définitions concurrentes ? | **Non sur le noyau** — observation : formulations convergentes « proposition d’action + gates (sans exécution) ». Variantes de granularité (allowlist Campus360, 4 actions) = options de découpage delivery |
| 3 | Portée I3 ? | **Observation** : qualification + proposition structurée + gate Morris. Pas d’exécution Cursor |
| 4 | Reste conversationnel read-only ? | **Partiellement** — conversation continue ; I3 ajoute objets/états persistés (action/gate) sans effet d’exécution |
| 5 | Premier effet d’action ? | **Oui (persisté)** — décision/gate journalisée ; **non** = effet Cursor/FS |
| 6 | Niveau automatisation ? | Proposition GPT = assistée ; GO = **L0 Morris** ; pas L5 ; exécution reportée I4 |
| 7 | Actions simulées/interdites ? | Exécution Cursor, push/PR/merge, CLOSED, CI delivery — **interdits en I3** |
| 8 | Statut session ? | OPEN avant/pendant ; CLOSED hors I3 (I6) |
| 9 | Données nouvelles ? | ActionCandidate / ProposedAction ; gateDecision ; events ; éventuellement versions allowlist |
| 10 | CA minimaux delivery ? | Voir § critères candidats |
| 11 | I4+ ? | Contrat hash/HEAD, worktree, runner Cursor, rapport post-exec, CLOSED, démo |
| 12 | Décision Morris avant implémentation ? | **Oui** — `G-OPS1-ACTION-GATE` / GO delivery I3 encore **fermé** (`44`) |

## 3. Définition candidate d’I3

**Étiquette : recommandation** (fondée sur décisions déjà validées de trajectoire/backlog).

### Objectif utilisateur

Après une conversation OPS1 (I2), Morris doit pouvoir :

1. recevoir (ou déclencher) une **proposition d’action structurée** clairement séparée du chat ;
2. choisir **ACTION_NOT_REQUIRED** sans forcer une exécution ;
3. enregistrer un **GO / NO-GO** (et idéalement CORRIGER / ABANDONNER) **explicite, journalisé**, sans qu’aucun effet d’exécution ne démarre.

### Problème résolu

Éviter que le chat GPT soit confondu avec une autorisation (GO implicite) et préparer le chemin gouverné vers I4.

### Comportement attendu

- Session reste OPEN.
- ActionCandidate ≠ bulle chat.
- Gate UI indépendante.
- Tentative d’exécution → refus + preuve négative (FR-008 / FLOW-17) — même sans runner I4, l’API/UI ne doit offrir aucun effet Cursor.

### Limites

- Pas de Cursor Runner.
- Pas de worktree d’exécution.
- Pas de merge/push.
- Pas de CLOSED.
- Chat ≠ exécution (déjà I2) reste vrai.

## 4. Périmètre candidat

### Inclus (recommandation — aligné E03+E04)

- Qualification / signal ACTION_NOT_REQUIRED
- Création / affichage ActionCandidate (panneau séparé)
- Raffinement minimal de l’objet action (chat ou champs)
- Gate Morris GO/NO-GO (+ CORRIGER/ABANDONNER si retenu)
- Persistance SQLite des objets + events
- Preuves négatives (pas d’exec)
- UX signalétique « NON AUTORISÉE »
- Tests unitaires + E2E bornés (fixture)

### Exclu / reporté I4+

- Action Contract hash/HEAD gelé pour runner
- Worktree / Cursor Markdown execution
- Rapport post-exécution
- Session CLOSED / reprise post-exec
- Démo I7 live Cursor
- Extension allowlist post-GO (= nouveau gate — FR-030 → I4 path)

## 5. Architecture candidate

**Étiquette : option / recommandation** (noms candidats `57`).

| Couche | Réutiliser (I1/I2) | Ajouter (I3) |
|--------|-------------------|--------------|
| Session / journal | Session Store, turns | Events action/gate |
| Conversation | providers fixture/fake/live | Optionnel : extracteur proposition structurée (fixture d’abord) |
| Domaine | types session | `ActionCandidate`, `GateDecision`, états |
| Services | actions.ts pattern | ActionService + GateService (persist only) |
| UI | Ops1SessionScreen, badges | Panneau action + surface gate |
| Sécurité | secret serveur I2 | Aucune clé client ; pas d’exec |

**Données** : tables/entités action + gate_decision + audit events (append-oriented).

**API** : server actions create/update ActionCandidate ; recordGateDecision ; refuseExecAttempt.

## 6. Critères d’acceptation candidats

### Fonctionnels

- ActionCandidate créé hors chat après discussion OPEN
- ACTION_NOT_REQUIRED journalisé sans préparation d’exec
- GO/NO-GO persistés et liés au candidat
- Aucune exécution Cursor possible
- Proposition uniquement dans chat → invalidée pour exec

### UX/UI

- Séparation visuelle conversation / action / gate
- Label « NON AUTORISÉE » avant GO
- Pas de CTA d’exécution dans le fil

### Sécurité

- Pas de secret client
- Fail-closed sur décision absente
- Chat message ≠ GO

### Persistance

- Objets action/gate survivant au reload
- Session reste OPEN

### Tests / E2E

- Fixture : propose → gate NO-GO → pas d’exec
- Fixture : ACTION_NOT_REQUIRED
- Tentative exec sans GO → refus
- Reload conserve états

## 7. Options

| Option | Contenu | Complexité | Dette |
|--------|---------|------------|-------|
| **A — Minimale** | ACTION_NOT_REQUIRED + ActionCandidate **fixture** + GO/NO-GO persistés ; pas d’extraction GPT | S/M | Report generation structurée |
| **B — Intermédiaire (recommandée)** | A + panneau UX + raffinement basique + 4 actions gate (GO/NO-GO/CORRIGER/ABANDONNER) ; génération GPT **optionnelle derrière fixture d’abord** | M | Allowlist Campus360 peut rester placeholder |
| **C — Ambitieuse** | B + allowlist Campus360 éditable complète + validation forme FLOW-06 + ancrages hash | L | Chevauche I4 ; risque sur-scope |

## 8. Recommandation

**Option B — Intermédiaire.**

### Justification

- Couvre le contrat canonique I3 (E03+E04, `41`/`44`/`60`) sans ouvrir I4.
- Respecte « automatiser le répétable, jamais l’arbitrage » : GO reste Morris L0.
- Permet preuve UX séparation chat/action/gate avant runner.
- Fixture-first évite de coupler live GPT structuré au premier delivery.

### Dette évitée

- Pas de runner Cursor prématuré
- Pas de CLOSED prématuré
- Pas de CI delivery

### Risques résiduels

- Tentation d’inclure allowlist/exec (dérive I4)
- UX-R02 (réserve story E03-01) encore ouverte
- Ambiguïté « GO autorise exécution » vs absence de runner : microcopy doit dire « autorise la préparation I4 / n’exécute pas encore »

## 9. Challenge méthode

| Question | Évaluation |
|----------|------------|
| Utile maintenant ? | Oui — étape manquante entre chat et exec |
| Plus simple possible ? | Option A possible ; B reste bornée |
| Dette créée ? | Faible si exec refusée explicitement |
| Repo-first ? | Oui — contrat déjà sur main |
| Répétable vs arbitrage ? | Persistance gate = répétable ; GO = arbitrage Morris |
| Exécution trop tôt ? | Mitigé si I3 = sans runner |
| Lecture seule / simulation d’abord ? | Oui — fixture ActionCandidate |
| Séparation conversation/proposition/validation/exécution ? | Obligatoire ; exécution absente |

## 10. Décisions Morris requises (liste fermée)

1. **Ouvrir le delivery I3 ?**
   Formulation : `GO DELIVERY — OPS1 I3 ACTION + GATE (NO EXECUTION)` / `NO-GO`

2. **Retenir Option A, B ou C ?**
   Formulation : `GO SCOPE I3 — OPTION B` (recommandé) / alternative

3. **Inclure les 4 actions gate (CORRIGER/ABANDONNER) dès I3 ?**
   `GO I3 GATE — FOUR ACTIONS` / `GO I3 GATE — GO/NO-GO ONLY`

4. **Génération GPT structurée dans I3 ou fixture-only d’abord ?**
   `GO I3 PROPOSAL — FIXTURE FIRST` / `GO I3 PROPOSAL — GPT STRUCTURED`

5. **Allowlist Campus360 éditable dans I3 ou report I4 ?**
   `DEFER ALLOWLIST EDIT TO I4` (recommandé) / `INCLUDE IN I3`

Gate documentaire existant encore fermé : `G-OPS1-ACTION-GATE` (`44`).

## 11. Préparation futur delivery

| Champ | Proposition |
|-------|-------------|
| Branche | `delivery/sfia-studio-ops1-i3-action-gate` |
| Cycle | 8 Delivery + 13 PR readiness |
| Profil | Standard (Critical si live GPT structuré inclus) |
| Blocs | Delivery · QA · UX/UI · sécurité · gouvernance · observabilité minimale |
| Fichiers probables | `app/lib/ops1/**` (types, db, repository, actions) · nouveaux `action/` `gate/` · `Ops1SessionScreen.tsx` + CSS · tests/E2E `ops1-i3-*` · éventuellement docs delivery bornés |
| Stop conditions | Tentative d’exec Cursor ; CLOSED ; push projet hors GO ; secret client ; mélange chat=GO |
| Verdict attendu | `OPS1 I3 ACTION GATE DELIVERED — NO EXECUTION — READY FOR REVIEW` |

## 12. Dépendances I1/I2

- Session OPEN + journal (I1)
- Conversation multi-tours + modes + badges (I2)
- Pattern server actions + SQLite
- Règle chat ≠ exécution déjà UI

## 13. Réserves

- Backlog « validated with reservations » (FD-CAND-15, UX-R01…R04)
- Noms techniques candidats non définitifs (`57`)
- Figma/SCENARIO allowlist exacte peut rester placeholder
- Stories non marquées READY FOR DELIVERY — GO Morris delivery distinct obligatoire
- Ce cadrage **ne valide pas** l’implémentation

## Verdict

`OPS1 I3 CADRAGE READY — CANONICAL CONTRACT IDENTIFIED — MORRIS GATE REQUIRED`

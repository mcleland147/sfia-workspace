# SFIA Studio — Review Pack — OPS1 Functional Design

- **Date/heure/fuseau :** 2026-07-20 13:15:13 CEST
- **Repo :** mcleland147/sfia-workspace (`/Users/morris/Projects/sfia-workspace`)
- **Cycle :** 2 — Conception fonctionnelle
- **Profil :** Standard
- **Typologie :** POC / CONCEPTION FONCTIONNELLE / PRODUIT / DOC
- **Gate consommé :** `G-OPS1-FUNC-DESIGN` (ouverture / production documentaire)
- **Branche :** `design/sfia-studio-ops1-functional` (**locale**, aucun push)
- **Base / HEAD :** `62eb23f0b1934afbecc517fc83aff90493fb8f29`
- **Statut documents :** `functional-design-candidate-for-morris-validation`
- **Autorité :** Morris (L0)

> Conception fonctionnelle **candidate**. Non validée Morris. Pas d’architecture, UX/Figma, backlog, delivery, live, MVP, commit/push/PR projet.

---

## 1. Truth Check initial

| Contrôle | Résultat |
|----------|----------|
| `pwd` / toplevel | `/Users/morris/Projects/sfia-workspace` |
| Branche initiale | `main` |
| HEAD = origin/main | `62eb23f0b1934afbecc517fc83aff90493fb8f29` |
| ahead/behind | `0/0` |
| Tracked / staged | propre / vide |
| Non tracké autorisé | `.tmp-sfia-review/` ; `projects/.tmp-sfia-review/` |
| Branche cible absente | locale et distante absentes avant création |
| Message origin/main | `docs(sfia-studio): sync OPS1 framing post-merge status (#236)` |

**Verdict Truth Check :** CONFORME.

Branche créée : `git switch -c design/sfia-studio-ops1-functional` — parent = `62eb23f…` — aucune remote.

---

## 2. Sources consultées

**Méthode :** `prompts/templates/sfia-cycle-execution-template.md` ; `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (présents sur main).

**OPS1 canonique :** README ; `41`–`44`.

**Socle historique :** `08`–`10` (structure acteurs/FR/flux/FD-CAND) ; A–E 32–40 en lecture contextuelle.

**Code :** non modifié ; consultation non nécessaire au-delà de la faisabilité déjà cadrée (Option B / harness existants). Le cadrage OPS1 prime.

---

## 3. Décisions cadrage reprises sans altération

`OPS1-CAND-01`…`14` (statut `G-OPS1-FRAMING-VAL`) préservées.
Invariants : conversation réelle libre ; fixtures ≠ preuve métier ; action facultative séparée ; chat ≠ GO ; Morris L0 ; harness indépendant ; Cursor après gate ; no remote auto ; post-exec obligatoire ; analyses candidates ; session reprenable ; Git vérité ; I1–I7 cadrage only ; critères 43 §6.1 ; ≠ MVP.

Réserves maintenues : fichier/branche pilote ; FinOps chiffres ; stack/BDD/API ; archi ; UX/Figma ; CI ; isolation ; backlog/delivery fermés.

---

## 4. Fichiers créés (uniquement)

| Fichier | Lignes | Rôle |
|---------|--------|------|
| `projects/sfia-studio/45-ops1-functional-design.md` | 550 | Contrat conception |
| `projects/sfia-studio/46-ops1-functional-flows-and-rules.md` | 1038 | 32 flux + matrices |
| `projects/sfia-studio/47-ops1-functional-decision-pack.md` | 476 | 25 décisions candidates |

**Aucun fichier existant modifié.** Staged vide. Aucun commit. Aucun push. Aucune PR.

---

## 5. Décisions candidates produites

`OPS1-FD-CAND-01`…`25` — statuts uniquement parmi : CANDIDATE / CANDIDATE WITH RESERVATION / RECOMMENDED FOR MORRIS VALIDATION / OPEN / OUT OF SCOPE.
**Aucune** VALIDATED / APPROVED / BASELINE / READY FOR DELIVERY / MVP / PRODUCTION.

Règles : `OPS1-FR-001`…`025`.
Flux : `OPS1-FLOW-01`…`32`.

---

## 6. Blocs

**Activés :** sécurité ; FinOps ; RGPD ; accessibilité ; performance perçue ; observabilité fonctionnelle.
**Désactivés :** architecture technique ; DevOps ; déploiement ; UX/Figma maquettes ; GreenOps détaillé ; delivery.

---

## 7. Extraits substantiels — document 45

```markdown
# SFIA Studio — Conception fonctionnelle OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `45-ops1-functional-design.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Standard |
| **Typologie** | POC / CONCEPTION FONCTIONNELLE / PRODUIT / DOC |
| **Gate consommé** | `G-OPS1-FUNC-DESIGN` |
| **Baseline Git** | `origin/main` @ `62eb23f0b1934afbecc517fc83aff90493fb8f29` |
| **Branche** | `design/sfia-studio-ops1-functional` (**locale uniquement** — aucun push) |
| **Statut** | `functional-design-candidate-for-morris-validation` |
| **Autorité** | Morris (L0) |
| **Companions** | [`46`](./46-ops1-functional-flows-and-rules.md) · [`47`](./47-ops1-functional-decision-pack.md) |
| **Entrées cadrage** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Socle historique (lecture)** | [`08`](./08-functional-design.md) · [`09`](./09-functional-flows-and-rules.md) · [`10`](./10-functional-decision-pack.md) |
| **Horodatage production** | 2026-07-20 13:10 CEST |

> Contrat de **conception fonctionnelle candidate** du Vertical Slice Opérationnel 1.
> Hérite des invariants validés du cadrage OPS1 (`G-OPS1-FRAMING-VAL`) sans les altérer.
> **Ne valide pas** la conception. **N’ouvre pas** architecture, UX/UI, backlog, delivery, live, MVP ou production.
> Identifiants `OPS1-FD-CAND-*` / `OPS1-FR-*` = locaux à ce cycle — distincts des `OPS1-CAND-*` (cadrage) et des `FD-CAND-*` historiques (`08`–`10`).
> Aucun claim MVP, production-ready, industrialisation, OPS1 prouvé ou READY FOR DELIVERY.

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
| **Fin** | Clôture Morris explicite ; historique conversation → (action?) → (exécution?) → analyse candidate → décision consultable ; reprise possible en lecture ou réouverture selon règles |

### 1.4 In-scope

- Conversation GPT réelle, libre, contextuelle, multi-tours, non scénarisée (preuve opératoire) ;
- Session persistante et reprenable ; journal ; phases conversationnelles ;
- Action candidate structurée **séparée** du dialogue ; cas sans action ;
- Gates Morris (GO / NO-GO / CORRIGER / ABANDONNER / STOP) ;
- Revalidation harness ; exécution Markdown bornée ; rapport / diff / preuves ;
- Conversation post-exécution ; analyse GPT **candidate** ; décision finale ; clôture ;
- Exigences fonctionnelles sécurité, RGPD, FinOps, accessibilité, performance perçue, observabilité ;
- Critères de sélection du scénario pilote Markdown (**sans** choisir le fichier) ;
- Critères de passage vers cycles futurs (architecture fonctionnelle, UX, backlog).

### 1.5 Out-of-scope

- Stack, BDD, API, protocole, schéma technique, code ;
- Architecture technique ou fonctionnelle détaillée (composants / frontières techniques) ;
- UX/UI visuelle finale, Figma, design system ;
- Backlog / stories / delivery / GPT live / Cursor réel dans **ce** cycle ;
- Commit / push / PR / merge automatiques dans le scénario OPS1 ;
- Multi-projets, multi-users, auth entreprise, industrialisation, MVP, production ;
- Modification des docs `41`–`44`, README, `app/**`, `harness/**`, `method/**`, `prompts/**` ;
- Validation finale de cette conception (GO Morris distinct requis).
```

### Objets (extrait responsabilités)

```markdown
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
| **Données minimales** | objectif ; cycle/profil proposés ; files allow/deny ; effets locaux ; remote=aucun auto ; risques ; preuves attendues ; gate requis ; statut |
| **Source de vérité** | Objet session (≠ texte chat) |
| **Cycle de vie** | draft → candidate → refinement → gated → authorized/refused/withdrawn |
| **Liens** | Session ; gate ; contrat |
| **Autorité** | GPT propose ; Morris corrige/retire ; **jamais** auto-AUTHORIZED |

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

```

Objets définis : CycleSession, ConversationMessage, ConversationContext, SourceReference, ProposedAction, ActionGate, MorrisDecision, ExecutionContract, ExecutionReport, EvidenceReference, AnalysisCandidate, CycleSummary, FinOpsUsage, Reservation.

---

## 8. Extraits substantiels — document 46

```markdown
# SFIA Studio — Flux et règles fonctionnelles OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `46-ops1-functional-flows-and-rules.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Standard |
| **Gate** | `G-OPS1-FUNC-DESIGN` |
| **Baseline Git** | `62eb23f0b1934afbecc517fc83aff90493fb8f29` |
| **Branche** | `design/sfia-studio-ops1-functional` |
| **Statut** | `functional-design-candidate-for-morris-validation` |
| **Companions** | [`45`](./45-ops1-functional-design.md) · [`47`](./47-ops1-functional-decision-pack.md) |
| **Entrées** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Horodatage** | 2026-07-20 13:10 CEST |

> Parcours fonctionnels OPS1 (`OPS1-FLOW-01`…`32`) et matrices d’autorité / transitions.
> **Ne scénarise pas** les phrases du dialogue : capacités et embranchements uniquement.
> Conception **candidate** — non validée Morris.

---

## 1. Principes de lecture des flux

1. Les flux décrivent des **capacités** et **embranchements**, pas un script conversationnel.
2. Une réponse GPT ne crée jamais `ACTION_AUTHORIZED`.
3. `STOP` et `FAILED` priment.
4. Timeout ≠ GO ; aucun retry automatique.
5. Preuves négatives (FLOW-17, 28) sont partie du contrat de succès.
6. Traçabilité règles : [`45` §6](./45-ops1-functional-design.md) (`OPS1-FR-*`).

---

## 2. Parcours détaillés

### OPS1-FLOW-01 — Ouverture d’une nouvelle session

| Champ | Contenu |
|-------|---------|
| **Objectif** | Créer une CycleSession et engager la conversation. |
| **Préconditions** | Repo accessible ; aucune session cible déjà exclusive ; tracked Git connu. |
| **Déclencheur** | Morris demande une nouvelle session. |
| **Acteurs** | Morris, Studio, Git |
| **États avant/après** | Avant: — ; Après: OPEN + CONVERSATION_ACTIVE + action NONE + exec IDLE |
| **Données produites** | CycleSession, timestamps, resumeHints |
| **Preuves attendues** | Trace sessionId + HEAD |
| **Critères associés** | Critères 10 |
| **Décisions Morris** | Aucune décision structurante hors ouverture |
| **Hors périmètre** | Pas de live GPT obligatoire à la seule ouverture |

**Étapes nominales :**
   1. Studio crée CycleSession OPEN
   2. Ancrage baseSha/headSha
   3. Phase CONVERSATION_ACTIVE
   4. Journal initial système
   5. Prêt à recevoir un message réel

**Alternatives :**
   - Annulation avant premier message → session vide clôturable/abandonnable

**Erreurs et STOP :**
```

### Inventaire des flux

```text
### OPS1-FLOW-01 — Ouverture d’une nouvelle session
### OPS1-FLOW-02 — Reprise d’une session existante
### OPS1-FLOW-03 — Conversation libre sans action
### OPS1-FLOW-04 — Clarification progressive d’un besoin
### OPS1-FLOW-05 — Morris corrige ou conteste GPT
### OPS1-FLOW-06 — GPT propose une action candidate
### OPS1-FLOW-07 — Morris corrige l’action via le chat
### OPS1-FLOW-08 — Morris corrige l’action via surface structurée
### OPS1-FLOW-09 — Action retirée ou non nécessaire
### OPS1-FLOW-10 — Soumission au gate
### OPS1-FLOW-11 — GO Morris
### OPS1-FLOW-12 — NO-GO Morris
### OPS1-FLOW-13 — ABANDONNER
### OPS1-FLOW-14 — STOP avant exécution
### OPS1-FLOW-15 — Revalidation harness réussie
### OPS1-FLOW-16 — Revalidation harness refusée
### OPS1-FLOW-17 — Tentative d’exécution sans GO
### OPS1-FLOW-18 — Exécution Markdown réussie
### OPS1-FLOW-19 — Exécution échouée ou rapport incomplet
### OPS1-FLOW-20 — Consultation du rapport et des preuves
### OPS1-FLOW-21 — Conversation post-exécution
### OPS1-FLOW-22 — Correction nécessitant un nouveau gate
### OPS1-FLOW-23 — Analyse GPT candidate
### OPS1-FLOW-24 — Décision finale CLOSE
### OPS1-FLOW-25 — Décision finale CORRECT
### OPS1-FLOW-26 — Décision finale RELAUNCH
### OPS1-FLOW-27 — Reprise après interruption ou redémarrage
### OPS1-FLOW-28 — Détection de double-exécution
### OPS1-FLOW-29 — Budget FinOps approche / dépassement
### OPS1-FLOW-30 — Source Git indisponible ou incohérente
### OPS1-FLOW-31 — Fichier / contenu malveillant (prompt injection)
### OPS1-FLOW-32 — Scénario pilote bout en bout (capacités)
```

Matrices : transitions autorisées/interdites ; autorité par action ; reprise ; erreurs ; preuves négatives PN-01…05 ; traçabilité FLOW→FR.

---

## 9. Extraits substantiels — document 47

```markdown
# SFIA Studio — Decision pack conception fonctionnelle OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `47-ops1-functional-decision-pack.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Standard |
| **Gate consommé (ouverture)** | `G-OPS1-FUNC-DESIGN` |
| **Baseline Git** | `62eb23f0b1934afbecc517fc83aff90493fb8f29` |
| **Branche** | `design/sfia-studio-ops1-functional` |
| **Statut** | `functional-design-candidate-for-morris-validation` |
| **Autorité** | Morris (L0) |
| **Companions** | [`45`](./45-ops1-functional-design.md) · [`46`](./46-ops1-functional-flows-and-rules.md) |
| **Cadrage** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Horodatage** | 2026-07-20 13:10 CEST |

> Pack de **décisions candidates** de conception fonctionnelle OPS1.
> **Aucune** décision n’est marquée VALIDATED / APPROVED / BASELINE / READY FOR DELIVERY / MVP / PRODUCTION.
> Les `OPS1-CAND-*` du cadrage restent l’héritage validé ; les `OPS1-FD-CAND-*` sont **nouvelles** et **candidates**.
> Identifiants locaux au cycle conception OPS1 — ne modifient pas `FD-CAND-*` historiques (`10`) ni `OPS1-CAND-*`.

---

## 1. Synthèse

| Élément | Valeur |
|---------|--------|
| Livrables | `45`, `46`, `47` |
| Gate d’ouverture | `G-OPS1-FUNC-DESIGN` **consommé** (production) |
| Gate de validation conception | **Non ouvert / non consommé** |
| Décisions candidates | `OPS1-FD-CAND-01`…`25` |
| Règles | `OPS1-FR-001`…`025` |
| Flux | `OPS1-FLOW-01`…`32` |
| Commit / push / PR projet | **Absents** (ce cycle) |
| Architecture / UX / backlog / delivery / live / MVP | **Fermés** |

---

## 2. Distinctions de statut

| Statut autorisé | Usage |
|-----------------|-------|
| `CANDIDATE` | Proposition de conception |
| `CANDIDATE WITH RESERVATION` | Proposition avec réserve ouverte |
| `OPTION` | Alternative non retenue comme reco principale |
| `RECOMMENDED FOR MORRIS VALIDATION` | Prioritaire pour arbitrage Morris |
| `OPEN` | Non tranché |
| `OUT OF SCOPE` | Hors conception |

**Interdits sans nouveau GO de validation :** `VALIDATED`, `APPROVED`, `BASELINE`, `READY FOR DELIVERY`, `READY FOR BACKLOG`, `MVP DEFINED`, `PRODUCTION READY`.

---

## 3. Héritage cadrage (non altéré)

`OPS1-CAND-01`…`14` demeurent au statut fixé par `G-OPS1-FRAMING-VAL` (voir [`44`](./44-operational-vertical-slice-1-decision-pack.md)).
La conception **instancie** sans promouvoir de nouvelles validations de cadrage.

Formulation structurante **préservée** :

```text
Conversation réelle et libre
  → compréhension et qualification GPT
  → action facultative proposée et structurée
  → gate Morris explicite
  → exécution strictement bornée
  → rapport et preuves
  → reprise de la conversation
  → décision Morris finale
```
```

### Inventaire décisions

```text
### OPS1-FD-CAND-01 — Périmètre fonctionnel final de la conception
### OPS1-FD-CAND-02 — Modèle fonctionnel CycleSession
### OPS1-FD-CAND-03 — Séparation des quatre couches d’état
### OPS1-FD-CAND-04 — Relation conversation libre / action structurée
### OPS1-FD-CAND-05 — Cas ACTION_NOT_REQUIRED
### OPS1-FD-CAND-06 — Modèle de sources et contexte Git sélectionnés
### OPS1-FD-CAND-07 — Reprise et condensation du contexte
### OPS1-FD-CAND-08 — Modèle de gate et décisions Morris
### OPS1-FD-CAND-09 — Revalidation harness avant exécution
### OPS1-FD-CAND-10 — STOP / FAILED / rapport incomplet
### OPS1-FD-CAND-11 — Conversation post-exécution
### OPS1-FD-CAND-12 — Analyse GPT candidate
### OPS1-FD-CAND-13 — Clôture et réouverture
### OPS1-FD-CAND-14 — Traçabilité des preuves
### OPS1-FD-CAND-15 — Principes fonctionnels FinOps
### OPS1-FD-CAND-16 — Principes fonctionnels RGPD
### OPS1-FD-CAND-17 — Exigences d’accessibilité
### OPS1-FD-CAND-18 — Exigences de performance perçue
### OPS1-FD-CAND-19 — Observabilité fonctionnelle
### OPS1-FD-CAND-20 — Critères de sélection du Markdown pilote
### OPS1-FD-CAND-21 — Critères de passage vers architecture fonctionnelle
### OPS1-FD-CAND-22 — Critères de passage vers UX/UI
### OPS1-FD-CAND-23 — Critères de passage vers backlog
### OPS1-FD-CAND-24 — Réserves maintenues
### OPS1-FD-CAND-25 — Verdict candidat de conception
```

---

## 10. Matrice de couverture (synthèse)

| Domaine | Couverture |
|---------|------------|
| 43 §6.1 critères 1–17 | Table §8 doc 45 — tous **couverts** (validation runtime = cycles futurs) |
| OPS1-CAND-01…14 | Table §9 doc 45 |
| CAP-01…21 | Doc 45 §3 |
| Surfaces UX fonctionnelles | Doc 45 §7.7 — sans Figma |
| Scénario pilote | Critères §11 — fichier **non** choisi |
| Stack/BDD/API | Explicitement non décidés |

---

## 11. Contrôles documentaires

| Contrôle | Résultat |
|----------|----------|
| 3 fichiers créés uniquement | OK |
| Contenu complet (pas squelette) | OK (2064 lignes) |
| Cohérence 45↔46↔47 | IDs croisés FR/FLOW/FD-CAND |
| Cohérence 41–44 | Invariants préservés |
| Liens relatifs Markdown | OK |
| `git diff --check` (intent-add) | OK |
| Fichiers existants intacts | OK |
| TODO/FIXME/TBD/placeholder | Aucun non assumé |
| Claims interdits de validation | Absents sur FD-CAND |
| Secrets/tokens/clés | Mentions fonctionnelles « secrets exclus » seulement |
| Identifiants | 25 FR lignes / 32 FLOW / 25 FD-CAND |
| Fuseau dans métadonnées | CEST |

---

## 12. Incohérences / réserves

- Note historique dans `41` sur « draft PR non mergés » est **héritage documentaire de cadrage** déjà sur main ; **non modifiée** (fichier interdit).
- Distinction normale : Base canonique README documente `b686eb1` ; HEAD repo = `62eb23f` — hors scope.
- Valeurs FinOps numériques toujours OPEN.
- Réouverture après CLOSE = candidate WITH RESERVATION (FD-CAND-13).

---

## 13. Décisions Morris attendues

1. Review ChatGPT intégrale de `45`–`47`.
2. Décision Morris distincte de validation / amendement / refus des `OPS1-FD-CAND-*`.
3. Maintien des réserves (FD-CAND-24).
4. Aucune ouverture auto de `G-OPS1-FUNC-ARCH`, `G-OPS1-UX`, `G-OPS1-BACKLOG`, live, scénario fichier, MVP.

---

## 14. Fichiers interdits confirmés intacts

README ; 41–44 ; app/** ; harness/** ; method/** ; prompts/** ; .github/** ; lockfiles — **non modifiés**.

---

## 15. Git status final (attendu)

```text
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/45-ops1-functional-design.md
?? projects/sfia-studio/46-ops1-functional-flows-and-rules.md
?? projects/sfia-studio/47-ops1-functional-decision-pack.md
```

Branche courante : `design/sfia-studio-ops1-functional` @ `62eb23f…`.
Staged : vide. Commit/push/PR : absents.

---

## 16. Review Handoff

- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Push L3 borné : oui
- SHA : *(après push)*

---

## 17. Verdict

**SFIA STUDIO OPS1 FUNCTIONAL DESIGN PRODUCED — READY FOR CHATGPT REVIEW**

Validation conception = cycle suivant distinct. Aucun delivery/live/MVP ouvert.

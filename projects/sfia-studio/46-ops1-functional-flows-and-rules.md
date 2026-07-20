# SFIA Studio — Flux et règles fonctionnelles OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `46-ops1-functional-flows-and-rules.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Standard |
| **Gates** | `G-OPS1-FUNC-DESIGN` · `G-OPS1-FUNC-DESIGN-VAL` |
| **Baseline Git** | `62eb23f0b1934afbecc517fc83aff90493fb8f29` |
| **Branche** | `design/sfia-studio-ops1-functional` |
| **Statut** | `functional-design-validated-with-reservations` — validé Morris (2026-07-20 13:46 CEST) |
| **Companions** | [`45`](./45-ops1-functional-design.md) · [`47`](./47-ops1-functional-decision-pack.md) |
| **Entrées** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Horodatage** | 2026-07-20 13:10 CEST |
| **Amendement** | 2026-07-20 13:23 CEST — FLOW-32 Campus360 ; reprise après CLOSE |
| **Amendement final** | 2026-07-20 13:36 CEST — multi-fichiers Campus360 + allowlist par action |

> Parcours fonctionnels OPS1 (`OPS1-FLOW-01`…`32`) et matrices d’autorité / transitions.
> **Ne scénarise pas** les phrases du dialogue : capacités et embranchements uniquement.
> Conception **validée avec réserves** — `G-OPS1-FUNC-DESIGN-VAL` consommé (2026-07-20 13:46 CEST). Amendement final multi-fichiers + allowlist intégré.

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
   - Repo inaccessible → FAILED/STOP lecture
   - Secrets détectés dans bootstrap → refus


### OPS1-FLOW-02 — Reprise d’une session existante

| Champ | Contenu |
|-------|---------|
| **Objectif** | Recharger une session sans inventer d’état. |
| **Préconditions** | SessionId existant ; store + preuves accessibles. |
| **Déclencheur** | Morris sélectionne une session à reprendre. |
| **Acteurs** | Morris, Studio, persistance, Git |
| **États avant/après** | Avant: session persistée ; Après: état restauré ou sûr |
| **Données produites** | Événement de reprise horodaté |
| **Preuves attendues** | Preuve de non-invention |
| **Critères associés** | Critères 5,10 |
| **Décisions Morris** | Après CLOSE : consultation libre ; reprise d’activité = **continuation liée** obligatoire (FD-CAND-13 levée) ; jamais de mutation de la session source |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Charger journal et objets
   2. Recalculer cohérence vs Git HEAD
   3. Restaurer phases/statuts
   4. Afficher surface reprise
   5. Autoriser lecture ou poursuite selon état (`CLOSED` = lecture seule)

**Alternatives :**
   - Ambiguïté → IDLE_READ_ONLY ou STOPPED
   - Session CLOSED → lecture seule ; activité nouvelle → **continuation liée** (nouvel id + ref source) ; ABANDONED/STOPPED/FAILED non auto-rouverts
**Erreurs et STOP :**
   - Données corrompues → FAILED
   - Conflit Git majeur → STOP


### OPS1-FLOW-03 — Conversation libre sans action

| Champ | Contenu |
|-------|---------|
| **Objectif** | Échanger multi-tours sans produire d’action. |
| **Préconditions** | Session OPEN ; phase conversation active. |
| **Déclencheur** | Messages Morris/GPT sans proposition structurée. |
| **Acteurs** | Morris, GPT, Studio |
| **États avant/après** | Action NONE/NOT_REQUIRED ; exec IDLE |
| **Données produites** | Messages journalisés |
| **Preuves attendues** | Fil multi-tours originKind=real |
| **Critères associés** | Critères 1–6,12 |
| **Décisions Morris** | Aucune |
| **Hors périmètre** | Ne pas scénariser les phrases |

**Étapes nominales :**
   1. Envoi message real
   2. Réponse GPT real
   3. MàJ ConversationContext
   4. Statut action reste NONE ou ACTION_NOT_REQUIRED
   5. Continuer

**Alternatives :**
   - Signal explicite ACTION_NOT_REQUIRED

**Erreurs et STOP :**
   - Budget atteint → alerte / confirmation
   - Timeout réponse → message système ; pas de GO


### OPS1-FLOW-04 — Clarification progressive d’un besoin

| Champ | Contenu |
|-------|---------|
| **Objectif** | Affiner objectif/périmètre par tours successifs. |
| **Préconditions** | CONVERSATION_ACTIVE. |
| **Déclencheur** | Demande imprécise ou challenge Morris. |
| **Acteurs** | Morris, GPT, Studio |
| **États avant/après** | Reste conversationnel |
| **Données produites** | Messages + SourceReference |
| **Preuves attendues** | Journal de clarification |
| **Critères associés** | Critères 3–5 |
| **Décisions Morris** | — |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Questions/clarifications
   2. Reformulations
   3. MàJ contexte
   4. Sources Git optionnelles sélectionnées
   5. Pas d’AUTHORIZED

**Alternatives :**
   - Basculer vers ACTION_CANDIDATE si proposition structurée

**Erreurs et STOP :**
   - Source incohérente → FLOW-30


### OPS1-FLOW-05 — Morris corrige ou conteste GPT

| Champ | Contenu |
|-------|---------|
| **Objectif** | Permettre la contestation dans le chat. |
| **Préconditions** | Messages GPT présents. |
| **Déclencheur** | Morris contredit / corrige. |
| **Acteurs** | Morris, GPT, Studio |
| **États avant/après** | Conversation active |
| **Données produites** | Messages de correction |
| **Preuves attendues** | Tours de correction visibles |
| **Critères associés** | Critère 4 |
| **Décisions Morris** | — |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Message correction
   2. Réponse GPT adaptée
   3. Contexte mis à jour
   4. Action candidate inchangée sauf invalidation explicite

**Alternatives :**
   - Invalider action candidate si périmètre cassé

**Erreurs et STOP :**
   - —


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


### OPS1-FLOW-09 — Action retirée ou non nécessaire

| Champ | Contenu |
|-------|---------|
| **Objectif** | Retirer l’action ou conclure sans action. |
| **Préconditions** | Action candidate ou discussion. |
| **Déclencheur** | Morris retire ou GPT/Morris signalent ACTION_NOT_REQUIRED. |
| **Acteurs** | Morris, GPT, Studio |
| **États avant/après** | NONE / NOT_REQUIRED / WITHDRAWN |
| **Données produites** | Décision ou signal journalisé |
| **Preuves attendues** | Preuve absence d’exec |
| **Critères associés** | Critère 6 |
| **Décisions Morris** | Éventuel ABANDONNER distinct |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Statut WITHDRAWN ou ACTION_NOT_REQUIRED
   2. Panneau action fermé
   3. Conversation continue

**Alternatives :**
   - Nouvelle action ultérieure possible

**Erreurs et STOP :**
   - —


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


### OPS1-FLOW-12 — NO-GO Morris

| Champ | Contenu |
|-------|---------|
| **Objectif** | Refuser l’action. |
| **Préconditions** | MORRIS_ACTION_GATE. |
| **Déclencheur** | Morris NO-GO. |
| **Acteurs** | Morris, Studio |
| **États avant/après** | REFUSED ; exec IDLE |
| **Données produites** | MorrisDecision |
| **Preuves attendues** | Trace refus |
| **Critères associés** | Critère 13 |
| **Décisions Morris** | NO-GO |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. ACTION_REFUSED
   2. Retour CONVERSATION_ACTIVE
   3. Journal motif

**Alternatives :**
   - Nouvelle action plus tard

**Erreurs et STOP :**
   - —


### OPS1-FLOW-13 — ABANDONNER

| Champ | Contenu |
|-------|---------|
| **Objectif** | Abandonner gate ou session selon portée. |
| **Préconditions** | Gate ouvert ou session active. |
| **Déclencheur** | Morris ABANDONNER. |
| **Acteurs** | Morris, Studio |
| **États avant/après** | ABANDONED ou conversation sans action |
| **Données produites** | Décision |
| **Preuves attendues** | Trace abandon |
| **Critères associés** | Critère 13 |
| **Décisions Morris** | ABANDONNER |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Si gate : fermer gate, action withdrawn/abandoned
   2. Si session : ABANDONED global
   3. Conversation stoppée ou lecture

**Alternatives :**
   - Abandon gate seul vs session

**Erreurs et STOP :**
   - —


### OPS1-FLOW-14 — STOP avant exécution

| Champ | Contenu |
|-------|---------|
| **Objectif** | Interrompre avant Cursor. |
| **Préconditions** | AUTHORIZED ou PENDING. |
| **Déclencheur** | Morris STOP. |
| **Acteurs** | Morris, Studio, harness |
| **États avant/après** | STOPPED |
| **Données produites** | Décision STOP |
| **Preuves attendues** | Preuve non-exécution |
| **Critères associés** | Critère 8 |
| **Décisions Morris** | STOP |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. STOPPED prioritaire
   2. Pas de start Cursor
   3. Journal

**Alternatives :**
   - Reprise lecture

**Erreurs et STOP :**
   - —


### OPS1-FLOW-15 — Revalidation harness réussie

| Champ | Contenu |
|-------|---------|
| **Objectif** | Valider contrat indépendamment du texte GPT. |
| **Préconditions** | ACTION_AUTHORIZED. |
| **Déclencheur** | Harness démarre revalidation. |
| **Acteurs** | Harness, Git, Studio |
| **États avant/après** | PENDING |
| **Données produites** | Contrat revalidé |
| **Preuves attendues** | Trace revalidation OK |
| **Critères associés** | Critères 8,14 |
| **Décisions Morris** | Aucune (GO déjà consommé ; revalidation ≠ nouveau GO) |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Vérifier schema / allowlist exhaustive / HEAD / plafonds / éligibilité Campus360
   2. EXECUTION_PENDING
   3. Prêt EXECUTING

**Alternatives :**
   - —

**Erreurs et STOP :**
   - Écart → FLOW-16


### OPS1-FLOW-16 — Revalidation harness refusée

| Champ | Contenu |
|-------|---------|
| **Objectif** | Fail-closed si contrat invalide. |
| **Préconditions** | PENDING/revalidation. |
| **Déclencheur** | Échec allowlist / fichier hors éligibilité / HEAD / hash / plafond. |
| **Acteurs** | Harness, Studio, Morris |
| **États avant/après** | FAILED ou CANDIDATE invalidée |
| **Données produites** | Erreur structurée |
| **Preuves attendues** | Preuve refus harness |
| **Critères associés** | Critère 8 |
| **Décisions Morris** | Information Morris ; pas d’auto-GO |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Refus
   2. FAILED ou retour conversation avec action invalidée
   3. Journal motif

**Alternatives :**
   - Correction → nouveau gate requis

**Erreurs et STOP :**
   - —


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


### OPS1-FLOW-19 — Exécution échouée ou rapport incomplet

| Champ | Contenu |
|-------|---------|
| **Objectif** | Gérer échec fail-closed. |
| **Préconditions** | EXECUTING ou fin partielle. |
| **Déclencheur** | Erreur Cursor ou rapport incomplet. |
| **Acteurs** | Cursor, harness, Studio, Morris |
| **États avant/après** | FAILED |
| **Données produites** | Rapport partiel + erreur |
| **Preuves attendues** | Trace incomplétude |
| **Critères associés** | Critères 15 ; FR-013 |
| **Décisions Morris** | STOP possible |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. EXECUTION_FAILED
   2. Bloquer clôture nominale
   3. Exposer erreur (y compris couverture allowlist incomplète)
   4. Pas de retry auto

**Alternatives :**
   - CORRECT/RELAUNCH après post-exec et nouveau gate

**Erreurs et STOP :**
   - —


### OPS1-FLOW-20 — Consultation du rapport et des preuves

| Champ | Contenu |
|-------|---------|
| **Objectif** | Permettre l’inspection multi-fichiers. |
| **Préconditions** | REPORT_AVAILABLE ou FAILED avec artefacts. |
| **Déclencheur** | Morris ouvre rapport/diff. |
| **Acteurs** | Morris, Studio, Git |
| **États avant/après** | Inchangé ou annotation consultée |
| **Données produites** | Accès EvidenceReference |
| **Preuves attendues** | Consultation journalisée (candidate) |
| **Critères associés** | Critère 15 ; FR-031 |
| **Décisions Morris** | — |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Afficher résumé, chemins allowlist, **diff consolidé**, **diff par fichier**, preuves
   2. Vérifier couverture de chaque fichier de l’allowlist
   3. Corrélations visibles

**Alternatives :**
   - —

**Erreurs et STOP :**
   - Preuve manquante → signal incomplet


### OPS1-FLOW-21 — Conversation post-exécution

| Champ | Contenu |
|-------|---------|
| **Objectif** | Reprendre le chat réel sur le résultat. |
| **Préconditions** | Rapport disponible (succès ou échec consultable). |
| **Déclencheur** | Entrée en POST_EXECUTION_CONVERSATION. |
| **Acteurs** | Morris, GPT, Studio |
| **États avant/après** | POST_EXECUTION_CONVERSATION |
| **Données produites** | Messages post-exec |
| **Preuves attendues** | Fil post-rapport |
| **Critères associés** | Critère 9 |
| **Décisions Morris** | — |
| **Hors périmètre** | Obligatoire BeB |

**Étapes nominales :**
   1. Phase post-exec
   2. Messages real sur résultat
   3. Pas de nouvelle exec sans gate
   4. Préparer analyse candidate optionnelle

**Alternatives :**
   - —

**Erreurs et STOP :**
   - Budget → confirmation


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


### OPS1-FLOW-23 — Analyse GPT candidate

| Champ | Contenu |
|-------|---------|
| **Objectif** | Produire AnalysisCandidate. |
| **Préconditions** | Post-exec conversation ou rapport consulté. |
| **Déclencheur** | Demande d’analyse. |
| **Acteurs** | GPT, Studio |
| **États avant/après** | Analyse présente |
| **Données produites** | AnalysisCandidate |
| **Preuves attendues** | Marquage candidat |
| **Critères associés** | Critère 16 |
| **Décisions Morris** | — |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. AnalysisCandidate candidateOnly
   2. Affichage distinct décision
   3. N’autorise rien

**Alternatives :**
   - —

**Erreurs et STOP :**
   - —


### OPS1-FLOW-24 — Décision finale CLOSE

| Champ | Contenu |
|-------|---------|
| **Objectif** | Clôturer explicitement. |
| **Préconditions** | AWAITING_FINAL_DECISION ou post-exec suffisant. |
| **Déclencheur** | Morris CLOSE. |
| **Acteurs** | Morris, Studio |
| **États avant/après** | CLOSED |
| **Données produites** | CycleSummary |
| **Preuves attendues** | Clôture horodatée |
| **Critères associés** | Critère 17 |
| **Décisions Morris** | CLOSE |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. MorrisDecision CLOSE
   2. CycleSummary
   3. État CLOSED
   4. Réserves consignées

**Alternatives :**
   - —

**Erreurs et STOP :**
   - Rapport incomplet bloquant si exec non résolue


### OPS1-FLOW-25 — Décision finale CORRECT

| Champ | Contenu |
|-------|---------|
| **Objectif** | Demander correction gouvernée. |
| **Préconditions** | Post-exec. |
| **Déclencheur** | Morris CORRECT. |
| **Acteurs** | Morris, Studio |
| **États avant/après** | OPEN + nouvelle boucle action |
| **Données produites** | Décision |
| **Preuves attendues** | Trace CORRECT |
| **Critères associés** | Critères 13,17 |
| **Décisions Morris** | CORRECT |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Orienter vers nouvelle action/gate
   2. Session reste OPEN
   3. Pas d’exec immédiate

**Alternatives :**
   - —

**Erreurs et STOP :**
   - —


### OPS1-FLOW-26 — Décision finale RELAUNCH

| Champ | Contenu |
|-------|---------|
| **Objectif** | Relancer une exécution via nouveau cycle de gate. |
| **Préconditions** | Post-exec. |
| **Déclencheur** | Morris RELAUNCH. |
| **Acteurs** | Morris, Studio, harness |
| **États avant/après** | Retour gate path |
| **Données produites** | Nouvelle préparation |
| **Preuves attendues** | Trace relaunch |
| **Critères associés** | Critères 8,10 |
| **Décisions Morris** | RELAUNCH + futur GO |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Préparer nouvelle action/contrat
   2. Nouveau GO requis
   3. Anti double-exec ancien hash

**Alternatives :**
   - —

**Erreurs et STOP :**
   - Ancien contrat encore EXECUTING → refus


### OPS1-FLOW-27 — Reprise après interruption ou redémarrage

| Champ | Contenu |
|-------|---------|
| **Objectif** | Survivre à un redémarrage. |
| **Préconditions** | Persistance disponible. |
| **Déclencheur** | Redémarrage Studio / reprise. |
| **Acteurs** | Studio, persistance, Git |
| **États avant/après** | État restauré ou sûr |
| **Données produites** | Événement reprise |
| **Preuves attendues** | Preuve continuité |
| **Critères associés** | Critères 5,10 |
| **Décisions Morris** | — |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Recharger
   2. Réconcilier Git
   3. État sûr si doute
   4. Reprendre phase

**Alternatives :**
   - Lecture seule

**Erreurs et STOP :**
   - Invention d’état interdite


### OPS1-FLOW-28 — Détection de double-exécution

| Champ | Contenu |
|-------|---------|
| **Objectif** | Empêcher deux EXECUTING sur même contrat. |
| **Préconditions** | Contrat déjà EXECUTING ou rapporté. |
| **Déclencheur** | Seconde tentative start. |
| **Acteurs** | Harness, Studio |
| **États avant/après** | Inchangé pour premier |
| **Données produites** | Événement anti-double |
| **Preuves attendues** | Preuve FR-009/010 |
| **Critères associés** | Critère 8 |
| **Décisions Morris** | — |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Refus
   2. Journal
   3. Conserver premier verrou

**Alternatives :**
   - —

**Erreurs et STOP :**
   - —


### OPS1-FLOW-29 — Budget FinOps approche / dépassement

| Champ | Contenu |
|-------|---------|
| **Objectif** | Alerter et confirmer avant coût élevé. |
| **Préconditions** | Compteurs actifs. |
| **Déclencheur** | Seuil candidat atteint. |
| **Acteurs** | Studio, Morris, GPT (pause) |
| **États avant/après** | Conversation peut pause |
| **Données produites** | FinOpsUsage + alerte |
| **Preuves attendues** | Trace alerte |
| **Critères associés** | Souhaitable coût ; FR-023 |
| **Décisions Morris** | Confirmation coût |
| **Hors périmètre** | Pas de valeurs inventées |

**Étapes nominales :**
   1. Alerte
   2. Confirmation Morris avant poursuite coûteuse
   3. Pas de retry auto
   4. Compteurs séparés visibles

**Alternatives :**
   - Réduire contexte / changer modèle sous confirmation

**Erreurs et STOP :**
   - Valeurs numériques non figées


### OPS1-FLOW-30 — Source Git indisponible ou incohérente

| Champ | Contenu |
|-------|---------|
| **Objectif** | Fail-closed sur ancrage (y compris chemins allowlist). |
| **Préconditions** | Besoin de refs Git / chemins d’allowlist. |
| **Déclencheur** | HEAD/path indisponible, divergent, ou chemin allowlist manquant. |
| **Acteurs** | Studio, Git, harness |
| **États avant/après** | STOP/FAILED ou conversation sans action |
| **Données produites** | Erreur source |
| **Preuves attendues** | Trace incohérence |
| **Critères associés** | Critères 13,14 ; FR-015 |
| **Décisions Morris** | Éventuel STOP |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Signaler
   2. Bloquer GO/exec si ancrage requis
   3. Permettre conversation sur l’écart

**Alternatives :**
   - Resélection sources

**Erreurs et STOP :**
   - —


### OPS1-FLOW-31 — Fichier / contenu malveillant (prompt injection)

| Champ | Contenu |
|-------|---------|
| **Objectif** | Traiter le contenu comme non autoritaire. |
| **Préconditions** | Lecture fichier ou collage. |
| **Déclencheur** | Instruction hostile dans contenu. |
| **Acteurs** | GPT, harness, Studio, Morris |
| **États avant/après** | Pas d’AUTHORIZED implicite |
| **Données produites** | Alerte sécurité |
| **Preuves attendues** | Preuve non-autorité fichier |
| **Critères associés** | FR-016,025 |
| **Décisions Morris** | — |
| **Hors périmètre** | — |

**Étapes nominales :**
   1. Contenu = data
   2. Ne pas exécuter instructions fichier
   3. Harness ignore autorité texte
   4. Alerter Morris

**Alternatives :**
   - Retirer source

**Erreurs et STOP :**
   - Tentative d’auto-outil hors allowlist → refus


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

## 3. Matrice des transitions autorisées / interdites

### 3.1 Autorisées (essentiel)

| Depuis | Vers | Déclencheur | Autorité |
|--------|------|-------------|----------|
| — | OPEN + CONVERSATION_ACTIVE | Ouverture | Morris |
| CONVERSATION_ACTIVE | CONVERSATION_ACTIVE | Message | Morris/GPT |
| CONVERSATION_ACTIVE | ACTION_NOT_REQUIRED | Signal no-action | Morris/GPT |
| CONVERSATION_ACTIVE | ACTION_CANDIDATE | Proposition structurée valide | GPT→Studio/harness forme |
| ACTION_CANDIDATE | ACTION_REFINEMENT | Correction | Morris |
| ACTION_CANDIDATE | MORRIS_ACTION_GATE | Soumission | Morris |
| MORRIS_ACTION_GATE | ACTION_AUTHORIZED | GO ancré | Morris |
| MORRIS_ACTION_GATE | ACTION_REFUSED / CONVERSATION_ACTIVE | NO-GO | Morris |
| ACTION_AUTHORIZED | EXECUTION_PENDING | Start revalidation | Harness |
| EXECUTION_PENDING | EXECUTING | Revalidation OK | Harness |
| EXECUTING | REPORT_AVAILABLE | Fin OK | Cursor/harness |
| REPORT_AVAILABLE | POST_EXECUTION_CONVERSATION | Reprise chat | Morris |
| POST_EXECUTION_CONVERSATION | AWAITING_FINAL_DECISION | Demande clôture | Morris |
| AWAITING_FINAL_DECISION | CLOSED | CLOSE | Morris |
| * | STOPPED | STOP | Morris |
| * | FAILED | Fail-closed | Harness/système |

### 3.2 Interdites

| Transition | Motif |
|------------|-------|
| Texte chat → ACTION_AUTHORIZED | Chat ≠ GO (FR-003/004) |
| ACTION_CANDIDATE → EXECUTING | Gate + revalidation manquants |
| EXECUTING → CLOSED sans post-exec BeB | FR-019 |
| AnalysisCandidate → CLOSED auto | FR-020 |
| Retry auto EXECUTING | FR-012 |
| Second EXECUTING même contractHash | FR-009/010 |
| Remote Git auto | FR-007 |
| Passage implicite AUTHORIZED sur timeout | FR-011 |

---

## 4. Matrice d’autorité par action

| Action | Morris | GPT | Studio | Harness | Cursor | Git |
|--------|--------|-----|--------|---------|--------|-----|
| Message conversation | Oui | Oui | Affiche | — | — | refs |
| Sélection sources | Oui | Propose | Affiche | — | — | Vérité |
| Créer ProposedAction | Valide/édite | Propose | Affiche | Forme | — | — |
| GO / NO-GO / CORRIGER / ABANDONNER / STOP | **Oui** | Non | Affiche | — | — | — |
| Revalidation contrat | Informe | Non | Affiche | **Oui** | Non | HEAD |
| Exécuter Markdown | Autorise | Non | Affiche | Gate technique | **Oui** | Diff |
| Analyse candidate | Décide suite | Propose | Affiche | — | — | — |
| Clôture | **Oui** | Non | Affiche | — | — | Summary refs |

---

## 5. Règles de reprise

1. Recharger journal et objets sans inventer (FLOW-02, 27).
2. Si ambiguïté d’état d’exécution → `STOPPED` / `FAILED` / lecture seule.
3. Session `CLOSED` : **immuable** ; reprise **lecture** par défaut ; reprendre une activité = **continuation liée** (propre contrat/gate si action) — `FD-CAND-13 — LIFTED: LINKED CONTINUATION, NEVER SILENT REOPEN`.
4. Git HEAD divergent : signaler ; bloquer exec jusqu’à resynchronisation fonctionnelle.
5. Draft UI non soumis : non obligatoire de survivre.

---

## 6. Règles d’erreur

1. Fail-closed sur doute gate/contrat/sources (FR-025).
2. Rapport incomplet bloque clôture nominale et réutilisation contrat (FR-013).
3. Erreurs exposées dans le fil système + panneau ; distinction non uniquement visuelle.
4. Pas de retry automatique (FR-012).
5. STOP prioritaire même en `EXECUTING`.

---

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

## 8. Traçabilité flux → OPS1-FR

| Flux | Règles principales |
|------|-------------------|
| 01–02 | FR-014,015,017 |
| 03–05 | FR-001,002,018 |
| 06–10 | FR-002,003,004,026–028 |
| 11–14 | FR-004,005,008,011,017 |
| 15–19 | FR-005,006,007,009,010,012,013,025,029–031 |
| 20–23 | FR-019,020,022 |
| 24–26 | FR-004,017,020 |
| 27–28 | FR-009,010,014 |
| 29 | FR-012,023 |
| 30–31 | FR-015,016,021,024,025 |
| 32 | FR-001…032 (synthèse Campus360 + allowlist) |

---

## 9. Verdict documentaire

`functional-design-validated-with-reservations`

`SFIA STUDIO OPS1 FUNCTIONAL DESIGN VALIDATED WITH RESERVATIONS`

Flux `OPS1-FLOW-01`…`32` validés au niveau conception (multi-fichiers + allowlist ; PN-06).
Gate `G-OPS1-FUNC-DESIGN-VAL` consommé (2026-07-20 13:46 CEST). Aucun backlog/delivery/live ouvert.

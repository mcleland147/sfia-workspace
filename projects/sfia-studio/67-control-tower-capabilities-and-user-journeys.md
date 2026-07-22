# SFIA Studio — Control Tower — Capacités et parcours utilisateurs

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `67-control-tower-capabilities-and-user-journeys.md` |
| **Cycle** | Cadrage produit Control Tower |
| **Statut** | **`validated`** (cadrage CT) — suite Fast Track : `70`–`72` |
| **Complète** | `66-control-tower-product-framing.md` |
| **Gate** | `GO CADRAGE SFIA STUDIO` |

---

## 1. Cartographie de capacités (candidates)

### 1.1 Conversation et raisonnement

| Capacité | Description candidate |
|----------|----------------------|
| Multi-tours | Journal ordonné, contexte session |
| Contexte projet | Projet cible, HEAD, mode live/fixture |
| Clarification | Challenge GPT sans exécution |
| Recherche de sources | Lecture bornée Git / docs projet |
| Distinction SFIA | Observation / hypothèse / option / recommandation / décision |
| Préparation de cycle | Qualification, profil, blocs |
| Reprise post-rapport | Résumé structuré sans relance implicite |

### 1.2 Git local

Statut, branche, HEAD, recherche, lecture fichiers, diff, historique, worktrees, observation des modifications Cursor. **Lecture d’abord** ; écritures locales sous gates.

### 1.3 GitHub

Branches distantes, commits, PR, commentaires, reviews, checks, workflows ; écritures (push, PR, merge) **uniquement** sous gates distincts.

### 1.4 Cursor

| Capacité | Description candidate |
|----------|----------------------|
| Prompt canonique | Généré depuis contrat / ActionCandidate |
| Transfert sans copier-coller | Adapter Studio → Cursor CLI |
| Lancement / suivi | Logs, statut, timeouts |
| Collecte | Rapport, review pack, diff, tests |
| MCP Cursor | Utilisés **par Cursor**, non exposés comme shell GPT |
| Interdit | Shell libre exposé à GPT |

### 1.5 Gouvernance

Qualification cycle, profil, blocs, périmètre, allowlist, chemins protégés, stop conditions, gates Morris, décision explicite, traçabilité (réutilisation OPS1 autant que possible).

### 1.6 Visualisation

Timeline cycle ; outils appelés ; sources ; état Git ; action proposée ; gate ; exécution ; événements ; fichiers ; diff ; tests ; preuves ; verdict ; prochaine décision.

### 1.7 Gestion produit

Projets, sessions, cycles, historique, reprise, rôles, paramètres, coûts, secrets, connecteurs (configuration — non delivery ici).

---

## 2. Espaces UX candidats (fonctionnels, non maquette)

| Espace | Rôle |
|--------|------|
| Cockpit global | Vue d’ensemble projets / sessions |
| Conversation | Fil principal GPT |
| Panneau sources | Fichiers / docs / résultats de recherche |
| Cycle actif | Qualification, profil, blocs |
| Action candidate | Proposition séparée du chat |
| Gate Morris | GO / NO-GO / CORRIGER / ABANDONNER / STOP |
| Exécution Cursor | Statut, logs digests, attempt |
| État Git / GitHub | Branche, remote, PR |
| Diff | Fichiers touchés |
| Tests | Résultats locaux |
| Preuves | Packs, captures, handoffs |
| Décisions | Historique des gates |
| Historique | Sessions / continuations |
| Connecteurs | OpenAI / Cursor / GitHub (états) |

### Timeline visuelle candidate

```
DEMANDE → RECHERCHE SOURCES → QUALIFICATION → PROPOSITION
→ GATE → EXÉCUTION → RAPPORT → VALIDATION → GIT/PR → CLÔTURE
```

| Nature | Exemples |
|--------|----------|
| Visible | Timeline, badges mode, IDs corrélés |
| Interactif | Chat, gates, filtres sources |
| Repliable | Logs techniques, digests |
| Bloquant | Gate avant exécution / write remote |
| Consultable après | Session CLOSED, preuves |
| Exportable | Review pack, handoff (mécanisme existant) |

Aucun design ne devient baseline dans ce cycle.

---

## 3. Parcours principaux

### P1 — Question repo-informed sans action

| Champ | Contenu |
|-------|---------|
| Déclencheur | Question utilisateur sur le repo |
| Systèmes | GPT + Git local read |
| Étapes | Chat → outils lecture → réponse |
| Gates | Aucun (lecture) |
| Résultat | Réponse ; éventuellement ACTION_NOT_REQUIRED |
| Erreurs | Repo inaccessible ; chemin hors allowlist lecture |
| Preuves | Tours + events lecture |

### P2 — Cadrage d’un besoin

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin imprécis |
| Systèmes | GPT + sources |
| Étapes | Clarification multi-tours → option / recommandation |
| Gates | Aucun jusqu’à proposition d’action |
| Résultat | Besoin cadré ; pas d’exécution |
| Erreurs | Confusion intention / autorisation |
| Preuves | Journal conversationnel |

### P3 — Génération et validation d’une action Cursor

| Champ | Contenu |
|-------|---------|
| Déclencheur | ACTION_REQUIRED |
| Systèmes | GPT structuration + Studio gouvernance |
| Étapes | ActionCandidate → allowlist → affichage contrat |
| Gates | Gate Morris d’action (pré-exécution) |
| Résultat | Candidate versionnée ; `NOT AUTHORIZED` jusqu’au GO |
| Erreurs | Allowlist invalide ; chemin protégé |
| Preuves | Candidate + évaluation allowlist |

### P4 — Exécution Cursor

| Champ | Contenu |
|-------|---------|
| Déclencheur | GO Morris ancré au contractHash |
| Systèmes | Cursor CLI + worktree |
| Étapes | Seal → attempt → run → post-check |
| Gates | GO exécution distinct du GO delivery |
| Résultat | MinimalExecutionResult |
| Erreurs | Timeout ; hors contrat ; HEAD drift |
| Preuves | attemptId, digests, files touched |

### P5 — Analyse du rapport

| Champ | Contenu |
|-------|---------|
| Déclencheur | Attempt terminée |
| Systèmes | Report service + GPT résumé |
| Étapes | Génération rapport → affichage couverture |
| Gates | Aucun pour générer ; décision après |
| Résultat | COMPLETED / REPORT_INCOMPLETE / FAILED |
| Erreurs | Preuve manquante |
| Preuves | reportId scellé |

### P6 — Correction

| Champ | Contenu |
|-------|---------|
| Déclencheur | CORRIGER |
| Systèmes | Studio gouvernance |
| Étapes | Invalider version → nouvelle candidate → nouvel hash |
| Gates | Nouveau gate requis |
| Résultat | Ancien hash non exécutable |
| Erreurs | Exécution de version obsolète (doit être refusée) |
| Preuves | Versions + décisions |

### P7 — PR readiness

| Champ | Contenu |
|-------|---------|
| Déclencheur | Demande de readiness |
| Systèmes | Git local + tests + GPT analyse |
| Étapes | Inventaire diff → contrôles → pack |
| Gates | Gate readiness distinct |
| Résultat | Verdict ready / blocked |
| Erreurs | Scope violation |
| Preuves | Pack + checks |

### P8 — Push / PR / merge (gates distincts)

| Champ | Contenu |
|-------|---------|
| Déclencheur | GO Morris spécifique (push / PR / merge) |
| Systèmes | GitHub write gouverné |
| Étapes | Afficher effet distant → GO → exécuter une seule classe |
| Gates | Un gate **par** classe d’écriture distante |
| Résultat | Effet remote tracé |
| Erreurs | Refus wrapper ; scope |
| Preuves | Preuve négative / positive remote |

### P9 — Post-merge

| Champ | Contenu |
|-------|---------|
| Déclencheur | Merge constaté |
| Systèmes | Git + tests |
| Étapes | Align main → verify → cleanup gouverné |
| Gates | GO post-merge / cleanup |
| Résultat | Main aligné ; branches nettoyées si autorisé |
| Erreurs | Merge mismatch |
| Preuves | SHA main + tests |

### P10 — Capitalisation

| Champ | Contenu |
|-------|---------|
| Déclencheur | Clôture cycle |
| Systèmes | Handoff + docs |
| Étapes | Review pack → publish handoff |
| Gates | Selon typologie |
| Résultat | Handoff remote verified |
| Erreurs | Pack incomplet |
| Preuves | SHA handoff |

### P11 — Lecture GitHub seule

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin d’info remote |
| Systèmes | GitHub read |
| Étapes | Consulter PR/checks/branches |
| Gates | Aucun write |
| Résultat | Contexte remote dans chat |
| Erreurs | Auth / scope |
| Preuves | Events lecture |

### P12 — Figma via Cursor MCP (indirect)

| Champ | Contenu |
|-------|---------|
| Déclencheur | Besoin design dans une action Cursor |
| Systèmes | Cursor + MCP Figma (chez Cursor) |
| Étapes | Contrat autorise l’intention ; Cursor utilise ses MCP |
| Gates | Gate action Cursor ; **pas** d’exposition MCP à GPT Studio |
| Résultat | Artefacts design via Cursor |
| Erreurs | MCP indisponible |
| Preuves | Rapport Cursor + réserves |

---

## 4. Matrice lecture / écriture (rappel)

| Classe | Premier incrément candidat |
|--------|----------------------------|
| Lecture Git/GitHub | Oui (preuve Tool Gateway) |
| Analyse | Oui |
| Écriture locale | Sous contrat Cursor |
| Commit / push / PR / merge | Plus tard, gates distincts |
| Suppression | Rare, gate fort |

Voir aussi `68` (périmètre) et `69` (options).

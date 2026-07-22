# 03 — Rôles et responsabilités (candidats)

| Champ | Valeur |
|-------|--------|
| Statut | **Candidat** |
| Note | Une personne peut cumuler plusieurs rôles humains |

## 1. Rôles humains

| Rôle | Finalité | Peut | Ne peut pas (candidat) |
|------|----------|------|-------------------------|
| **Utilisateur humain** | Utiliser Studio | Naviguer, converser, consulter | Valider un gate hors habilitation |
| **Responsable de projet** | Porter trajectoire et objectifs | Définir priorités, demander clôture | Contourner policies techniques |
| **Décideur humain** | Valider arbitrages structurants | Consommer gates structurants | Déléguer silencieusement à un agent |
| **Approbateur** | Valider une opération spécifique | GO Cursor, GO write, GO remote selon scope | Élargir le scope hors allowlist |

Le décideur n’est **pas** un individu nommé dans la doctrine produit.

## 2. Rôles système

### SFIA Studio
Interface de pilotage et **orchestrateur visible**.  
Présente états, sources, décisions, actions, preuves.  
Ne remplace pas le décideur. Ne réécrit pas la doctrine.

### Moteur SFIA
Contexte, routage, policies, états, transitions, contrats.  
Compile et contrôle. Fail-closed.  
Charge la doctrine depuis Git ; ne la duplique pas.

### GPT
Raisonnement, qualification, analyse, challenge, conversation guidée.  
Produit des artefacts intermédiaires (clarification, options, ActionProposal…).  
**Ne décide pas** les gates structurants. **N’exécute pas** Cursor seul.

### Cursor
Agent d’exécution bornée sous contrat (prompt instancié, allowlist, worktree).  
Produit diffs / preuves.  
**Ne choisit pas** le périmètre hors contrat.

### Git
Source de vérité, versionnement, auditabilité.  
Baseline méthode, documents projet, historique.

### GitHub
Collaboration distante, revue, CI, publication.  
Writes distants = gated (fermés par défaut hors GO).

## 3. Matrice RACI candidate (synthèse)

| Activité | Humain décideur | Studio | Moteur | GPT | Cursor | Git |
|----------|-----------------|--------|--------|-----|--------|-----|
| Qualifier cycle | C | I | A/R policies | R analyse | — | C sources |
| Décision gate | **A/R** | R UI | R enforce | C propose | — | C audit |
| Compiler action | C | I | **A/R** | R proposal | — | C |
| Exécuter | A (GO) | R orchestrate | R contract | I | **R** exec | R truth |
| Valider résultat | A/C | R display | R checks | R analyse | I | C |
| Transition cycle | A | R | R | C | — | C |

(R=Responsible, A=Accountable, C=Consulted, I=Informed — candidat)

## 4. Évolution depuis v2.6

| v2.6 | v3.0 candidat |
|------|----------------|
| ChatGPT hors Studio + copier-coller fréquent | GPT **dans** Studio, contextuel |
| « Morris (L0) » nommé | Décideur humain habilité (rôle) |
| Cursor via prompt manuel ou OPS1 | Cursor via Execution Orchestrator produit |
| Operating model boucle manuelle dominante | Boucle Studio-native, même principes |

## 5. Séparation des pouvoirs

- Qui **propose** ≠ qui **décide** ≠ qui **exécute**.  
- GPT propose ; décideur tranche ; Cursor exécute ; Git enregistre.  
- Studio/moteur **empêchent** la confusion des rôles (pas seulement « rappellent »).

## 6. Décisions humaines requises

- Valider la taxonomie des rôles humains.  
- Valider que Studio = cockpit + façade d’orchestration (continuité AF-Option C reformulée Control Tower).  
- Décider du modèle multi-utilisateurs (hors scope implémentation actuelle).

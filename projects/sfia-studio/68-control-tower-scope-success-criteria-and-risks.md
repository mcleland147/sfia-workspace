# SFIA Studio — Control Tower — Périmètre, critères de succès et risques

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `68-control-tower-scope-success-criteria-and-risks.md` |
| **Cycle** | Cadrage produit Control Tower |
| **Statut** | **`validated`** (cadrage CT) — suite Fast Track : `70`–`72` |
| **Complète** | `66`, `67`, `69` |

> **MVP non défini / non validé.** POC et produit cible sont **distingués**. Aucun claim production / live-ready.

---

## 1. Produit cible (vision longue durée)

### In-scope (candidat)

- Interface unique de pilotage du workflow SFIA.
- Conversation GPT + outils bornés.
- Visualisation Git local / GitHub.
- Préparation / affichage contrats et gates Morris.
- Déclenchement et suivi Cursor sans copier-coller.
- Réinjection automatique des résultats dans la conversation.
- Journal d’audit corrélé.
- Opérations Git/GitHub gouvernées par classes de risque.
- Multi-projets progressif ; rôles futurs.

### Out-of-scope (candidat)

- Remplacement de Cursor IDE comme environnement d’édition riche.
- Automatisation L5 globale des décisions Morris.
- Modification de la méthode SFIA dans ce produit.
- Shell générique exposé à GPT.
- « Studio = seule vérité » (Git reste vérité).

### Hypothèses

- Morris reste L0.
- SFIA v2.6 reste baseline méthode.
- Un utilisateur peut opérer sans quitter Studio pour les gestes courants.

### Dépendances

- OpenAI (ou équivalent) ; Cursor CLI ; Git ; GitHub ; stockage sessions/preuves.

### Risques

- Confusion cockpit / orchestrateur (tension AF-Option C).
- Complexité UX ; coûts API ; surface d’attaque connecteurs.

### Critères de succès produit (observables candidats)

- Parcours courant démontrable dans une seule UI.
- Aucun copier-coller Studio↔Cursor pour ces parcours.
- Gates impossibles à contourner depuis l’UI.
- Git reste vérifiable comme vérité.
- Aucune écriture distante sans gate de classe appropriée.
- Audit rejouable (session → action → exécution → preuve).

### Anti-claims

Pas de « produit complet atteint », « industrialisé », « multi-tenant prêt ».

---

## 2. POC technique suivant (faisabilité — candidat)

Objectif : prouver qu’une **orchestration intégrée** est faisable sans livrer le produit.

### In-scope candidat

- Tool Gateway **read-only** Git local (+ GitHub read si prêt).
- Cursor Adapter : transfert prompt + run CLI + collecte résultat.
- Timeline minimale d’événements dans Studio.
- Réinjection d’un résumé d’exécution dans le chat.
- Réutilisation maximale OPS1 (session, gates, allowlist, report).

### Out-of-scope candidat

- Write GitHub ; multi-users ; packaging commercial ; refonte UX pixel.
- Nouveau backlog delivery complet ; choix fournisseur définitif.

### Hypothèses

- OPS1 SQLite / actions restent une base réutilisable.
- Cursor CLI reste le canal d’exécution local.

### Dépendances

- Capacités live déjà présentes (OpenAI, Cursor bin) — observées en I7 readiness.

### Risques

- Sur- promettre le POC comme MVP.
- Refaire OPS1 au lieu de l’étendre.

### Critères de succès POC (candidats)

1. GPT consulte Git via outils bornés (preuve négative hors allowlist).
2. Prompt Cursor généré et transmis **sans** copier-coller.
3. Exécution CLI sous contrat ; events visibles.
4. Résultat réinjecté automatiquement dans la session.
5. Gate Morris toujours requis avant exécution.
6. Aucun effet GitHub write.

### Anti-claims

POC ≠ produit ; POC ≠ MVP ; succès POC ≠ monétisation.

---

## 3. MVP candidat (non validé)

> **Non sélectionné / non décidé.** Zone de cadrage uniquement.

### In-scope candidat (hypothèse de travail)

- Un projet pilote.
- Parcours : question → action Cursor → rapport → décision → éventuellement PR readiness.
- GitHub **read** + écritures minimales sous gates (à arbitrer).
- UX démontrable à un tiers.

### Out-of-scope candidat

- Couverture 15 cycles ; marketplace ; multi-tenant ; L5.

### Hypothèses

- Un persona « opérateur SFIA » peut terminer un cycle utile sans Morris à chaque micro-geste (Morris reste sur gates structurants).

### Dépendances

- Succès POC Tool Gateway + Cursor Adapter.
- Décision sur AF-Option C reformulée.

### Risques

- MVP trop large (usine à gaz).
- MVP trop étroit (OPS1 + polish) sans valeur monétisable.

### Critères de succès MVP (candidats — non décidés)

- Tiers non formé aux plugins ChatGPT peut suivre un cycle bout-en-bout dans Studio.
- Valeur métier identifiable (gain de temps / réduction d’erreurs / démontrabilité).
- Doctrine SFIA intacte (gates, fail-closed, anti-claims).

### Anti-claims

Aucun MVP « défini » ou « ready » dans ce cycle.

---

## 4. Critères transverses observables (rappel gate)

| Critère | Cible |
|---------|-------|
| Zéro copier-coller courant Studio↔Cursor | Produit / POC |
| GPT → Git/GitHub outils bornés | POC+ |
| Prompt Cursor auto | POC+ |
| Cursor CLI sous contrat | POC+ (OPS1 partiel déjà) |
| Events d’exécution visibles | POC+ |
| Réinjection auto résultats | POC+ |
| Gates visibles non contournables | Produit (OPS1 partiel) |
| Git = vérité | Toujours |
| Remote write sans gate | Interdit |
| Démo single-UI | Produit / MVP candidat |

---

## 5. Risques consolidés

| ID | Risque | Mitigation candidate |
|----|--------|----------------------|
| R1 | Tension AF-Option C vs Control Tower | Décision Morris explicite |
| R2 | Scope creep MVP | Trajectoire T0–T9 + gates |
| R3 | Secrets / connecteurs | Backend-only ; redaction |
| R4 | Lock-in OpenAI / Cursor | Options A/B/C ; adapters |
| R5 | Dette OPS1 abandonnée trop tôt | Matrice réutiliser / refactor / abandon |
| R6 | Coûts tokens | FinOps observabilité dès POC |
| R7 | Démo ≠ industrialisation | Anti-claims systématiques |

---

## 6. Sécurité et gouvernance (exigences candidates)

Voir détail opérationnel dans `69`. Exigences minimales :

- tokens côté backend ; aucun secret au modèle ;
- scopes minimaux ; séparation read/write ;
- allowlist repos/chemins ; outils filtrés par session ;
- confirmation humaine actions sensibles ;
- journal append-only (ou équivalent) ; redaction ;
- fail-closed ; isolation worktrees ;
- pas de shell générique ; MCP non approuvés interdits ;
- connecteurs désactivables ; identité utilisateur ; multi-users futurs.

### Classification des opérations

| Classe | Niveau SFIA (ordre de grandeur) | Gate | Preuve | Rollback |
|--------|----------------------------------|------|--------|----------|
| Lecture | L1–L2 | Non / soft | Event | N/A |
| Analyse | L2 | Non | Event | N/A |
| Écriture locale | L3 | GO action | Diff + attempt | Revert local / abandon worktree |
| Commit | L3 | GO commit | SHA | Revert commit (règles) |
| Push | L3–L4 | GO push | Remote SHA | Rare / dangereux |
| Création PR | L3–L4 | GO PR | URL PR | Close PR |
| Merge | L4 | GO merge | Merge SHA | Complexe |
| Suppression | L4 | GO fort | Audit | Souvent impossible |
| Opération externe | L3–L4 | GO dédié | Audit | Selon système |

---

## 7. FinOps / performance / observabilité (candidats)

| Domaine | Contenu |
|---------|---------|
| Coûts | API GPT ; GitHub ; hébergement ; stockage preuves — **pas d’estimation financière non sourcée** |
| Quotas / tokens | Limites par session ; affichage NOT AVAILABLE si inconnu |
| Durée Cursor | Timeouts ; reprise manuelle (pas auto-retry silencieux) |
| Streaming | Conversation ; logs digests |
| Corrélation | sessionId / cycle / action / attempt / report |
| Métriques | Succès / échec / coût / latence |
| Rétention | Politique à définir (non décidée) |

---

## 8. Trajectoire candidate (option, non décision)

| Étape | Objectif | Valeur | Dépendances | Preuve | Gate Morris | Dette évitée | Stop |
|-------|----------|--------|-------------|--------|-------------|--------------|------|
| T0 | Cadrage produit | Direction | — | Docs 66–69 | Validation cadrage | — | Ambiguïté cible |
| T1 | Archi fonctionnelle | Frontières | T0 | Docs AF | GO archi fct | Tech trop tôt | Conflit AF-C |
| T2 | Tool Gateway read-only | Faisabilité outils | T1 | Spike | GO POC gateway | Write trop tôt | Secrets |
| T3 | Cursor Adapter | Zéro copier-coller | T2 | Spike | GO adapter | Shell libre | Hors contrat |
| T4 | Orchestration bout-en-bout | Démo intégrée | T3 | E2E | GO orch | — | Gate contourné |
| T5 | Git local write gouverné | Closing loop local | T4 | Preuves | GO write local | — | Dirty tree |
| T6 | GitHub write gates | Remote gouverné | T5 | Preuves | GO GitHub write | — | Remote effect |
| T7 | UX démontrable | Montrable tiers | T4+ | Capture | GO UX | Pixel early | — |
| T8 | Définition MVP | Périmètre valeur | T7 | Decision pack | GO MVP def | Scope creep | — |
| T9 | Industrialisation ciblée | Exploitation | T8 | RUN | GO indu | — | Prod claim |

Cette séquence est une **option**.

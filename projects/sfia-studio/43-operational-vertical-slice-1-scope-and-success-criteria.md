# SFIA Studio — Périmètre, NFR et critères de succès du Vertical Slice Opérationnel 1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `43-operational-vertical-slice-1-scope-and-success-criteria.md` |
| **Cycle** | 1 — Cadrage, validation |
| **Profil** | Standard |
| **Statut** | `framing-validated-with-reservations` — critères de succès = **contrat validé** du slice (2026-07-20) |
| **Gates** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` · `G-OPS1-FRAMING-VAL` |
| **Companions** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Base Git** | `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |

> Contrat de périmètre, NFR et critères de réussite — **validé avec réserves** (`G-OPS1-FRAMING-VAL`).
> Les critères §6 constituent le **contrat de succès validé** du Vertical Slice Opérationnel 1.
> Succès OPS1 ≠ MVP ≠ production-ready ≠ industrialisation.
> Limitation Markdown = limite d’**action**, pas de **conversation**.
> Conception / backlog / delivery / live **non ouverts** par cette validation.

---

## 1. In-scope

| Domaine | Inclus |
|---------|--------|
| Conversation | GPT **réel**, libre, contextuel, multi-tours, non scénarisé (preuve opératoire) |
| Action | Proposition structurée facultative ; gate ; Cursor Markdown borné |
| Post-exec | Reprise de conversation réelle sur le rapport |
| Session | Journal, historique, reprise |
| Gouvernance | Morris L0 ; harness fail-closed ; no remote auto |
| Méthode | Consommation SFIA v2.6 + template (sans modifier `method/**` / `prompts/**`) |

---

## 2. Out-of-scope

- Conversation métier **simulée / mockée / scriptée** comme preuve OPS1
- Chat illimité sans plafonds FinOps
- Multi-projets, 15 cycles, auth complète, collaboration multi-users
- Commit / push / PR / merge automatiques
- Déploiement, production, L5, industrialisation
- Claim MVP / production-ready
- Conception / architecture / UX finale / backlog / delivery dans **ce** cycle documentaire
- Modification Figma
- Appels GPT live / Cursor réel **pendant le cycle de cadrage** lui-même

---

## 3. Capacités — matrice

| Capacité | Statut | Preuve attendue |
|----------|--------|-----------------|
| Conversation GPT réelle multi-tours | **Obligatoire** | Fil `originKind=real`, non prédéterminé |
| Conservation du contexte de session | **Obligatoire** | Reprise + continuité thématique |
| Correction / contestation Morris dans le chat | **Obligatoire** | Tours de correction visibles |
| Réponse GPT sans proposer d’action | **Obligatoire** | Cas `ACTION_NOT_REQUIRED` |
| Proposition d’action structurée séparée | **Obligatoire** | Objet action ≠ bulle chat |
| Gates GO/NO-GO/CORRIGER/ABANDONNER | **Obligatoire** | Décision ancrée |
| Aucune action avant gate explicite | **Obligatoire** | Preuve négative |
| Exécution Markdown bornée | **Obligatoire** (si GO) | Diff allowlisté |
| Conversation post-rapport | **Obligatoire** | Phase `POST_EXECUTION_CONVERSATION` |
| Analyse GPT candidate | **Obligatoire** | `candidateOnly` |
| Décision finale + clôture | **Obligatoire** | `MorrisFinalDecision` + summary |
| Continuation après CLOSE | **Obligatoire si reprise** | Continuation liée (nouvel id) ; jamais de réouverture silencieuse — FD-CAND-13 **levée** |
| Historique + reprise session | **Obligatoire** | Fermer / rouvrir |
| Fixtures pour tests automatisés | **Autorisées** | Hors preuve opératoire |
| Fixture comme preuve métier scénario | **Interdite** | — |
| Single-shot qualif comme expérience cible | **Interdite** | — |

---

## 4. UX/UI (cadrage amendé)

| Surface | Besoin |
|---------|--------|
| Fil de discussion | Lisibilité ; auteurs distincts ; horodatage fuseau |
| Contexte | Indicateur de phase ; refs/sources |
| Action | Carte / panneau **séparé** du dialogue |
| Gate | Panneau indépendant ; motif |
| Continuer sans exécuter | Action claire |
| Capacités fermées | Affichage explicite (ex. remote Git) |
| Post-exec | Reprise chat + diff/preuves côte à côte |
| Historique | Sessions + décisions + actions |

Éviter le « chat formulaire ». Pas de Figma ici. Socle : 4 routes P0 + panneaux manquants.

---

## 5. NFR

### 5.1 Sécurité

- Secrets exclus du chat et des logs
- Contexte Git **sélectionné** explicitement
- Pas d’ingestion automatique du repository entier
- Outils allowlistés
- Action non exécutable avant gate
- Texte GPT ≠ commande
- Contenu utilisateur / fichiers = données non autoritaires
- Anti prompt-injection : harness valide hors confiance au texte
- Default deny ; fail-closed ; no remote auto

### 5.2 Observabilité

- Corrélation `sessionId` / `messageId` / `actionId` / `contractHash`
- Horodatage fuseau
- `originKind` réel/fixture/système
- Compteurs et durées
- Preuves référencées

### 5.3 FinOps

Candidats (valeurs **À définir** sous GO distinct) :

- budget par session ;
- budget journalier ;
- nombre max d’appels ;
- alerte de seuil ;
- coût estimé affiché ;
- condensation contrôlée du contexte ;
- **aucun retry automatique** ;
- confirmation avant appel coûteux / changement de modèle ;
- **comptage séparé** : conversation · qualification/action structurée · analyse.

Libre ≠ illimité.

### 5.4 Résilience

Timeouts ; idempotence ; reprise sans invention ; anti double-exécution ; rapports incomplets bloquent ; STOP prioritaire.

---

## 6. Critères de réussite — contrat de succès validé (`G-OPS1-FRAMING-VAL`)

Les critères ci-dessous constituent le **contrat de succès validé** du Vertical Slice Opérationnel 1.
Ils ne définissent **pas** le MVP.

### 6.1 Obligatoires (validés)

1. GPT **réel** utilisé pour les échanges du scénario pilote.
2. Aucune réponse **métier** du scénario pilote ne provient d’une fixture.
3. Conversation de **plusieurs tours non prédéterminés**.
4. Morris peut **corriger ou contester** ChatGPT.
5. ChatGPT **conserve le contexte** utile.
6. ChatGPT peut répondre **sans** proposer d’action.
7. ChatGPT peut proposer une **action structurée** après discussion.
8. **Aucune action** ne démarre avant gate explicite.
9. La conversation peut **reprendre après** le rapport Cursor.
10. La session complète peut être **fermée puis reprise**.
11. Les tests automatisés **peuvent** utiliser des fixtures, mais la **preuve opératoire finale** doit être live.
12. La limitation au Markdown **n’est pas** présentée comme une limitation de la conversation.
13. Aucune décision structurante sans Morris.
14. Aucune action Git distante automatique.
15. Rapport, preuves et diff consultables.
16. Analyse / verdict GPT restent **candidats**.
17. Clôture Morris explicite.

### 6.2 Souhaitables

Coût visible par tour ; condensation de contexte explicite ; export pack ; harness autonome de non-régression.

### 6.3 Hors critères

Multi-cycles projet ; auth entreprise ; CI complète ; MVP défini ; production-ready.

### 6.4 Niveaux de preuve (distinction)

| Niveau | Usage | GPT / Cursor |
|--------|-------|--------------|
| **Tests automatisés** | Non-régression | Fixtures autorisées |
| **Intégration contrôlée** | Adaptateurs / ports | Modes contrôlés |
| **Démonstration opératoire OPS1** | Acceptation slice | **GPT réel + Cursor réel** sous gates |

### 6.5 Anti-claims

Interdits : `MVP DEFINED/READY`, `PRODUCTION READY`, `INDUSTRIALIZATION COMPLETE`, `STUDIO COMPLETE`, `L5 GLOBAL PROVEN`, « conversation simulée = OPS1 prouvé ».

Verdict de succès OPS1 (après preuve opératoire) : `OPERATIONAL VERTICAL SLICE 1 PROVEN WITH RESERVES` — **≠ MVP**.

---

## 7. Preuves attendues

| Preuve | Description |
|--------|-------------|
| Journal conversationnel | Multi-tours `real`, corrections Morris |
| Action candidate | Structure séparée + gate |
| Preuve négative | Tentative d’exec sans GO refusée |
| Rapport + diff Markdown | Allowlist respectée |
| Post-exec chat | Reprise réelle |
| CycleSummary | État final + réserves |
| FinOps | Compteurs conversation / structuré / analyse |

---

## 8. Limites acceptées

Un seul scénario d’action Markdown ; pas de CI obligatoire ; sandbox OS non industrialisée ; plafonds numériques À définir ; store session non productisé ; pas de multi-user.

---

## 9. Hypothèses

| ID | Hypothèse |
|----|-----------|
| H1 | Option B + AF-Option C inchangées |
| H2 | Chat libre + plafonds suffit sans questions pré-définies |
| H3 | Markdown borne l’action sans borner le dialogue |
| H4 | I1 peut établir la persistance avant live conversation (I2) |
| H5 | Live conversation et live Cursor restent des GO distincts |

---

## 10. Dette

| Évitée | Acceptée |
|--------|----------|
| Chat simulé comme succès | Store session minimal |
| Auto-GO depuis texte | UX chat non encore Figma |
| BDD imposée | Plafonds À définir |

---

## 11. Verdict documentaire

`framing-validated-with-reservations`

`OPS1 SCOPE AND SUCCESS CRITERIA VALIDATED — SUCCESS CONTRACT SET — NOT MVP`

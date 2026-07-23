# 03 — Conversation et patterns épistémiques

| Champ | Valeur |
|-------|--------|
| **Statut** | UX/UI **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/ux-ui` |
| **Gate consommé** | `GO UX/UI — SFIA STUDIO V3-NATIVE — OPTION A` |
| **FA capitalisée** | FA-OA-01…05 **VALIDATED BY MORRIS** |
| **FD capitalisées** | FD-OA-01…06 |
| **Décisions UX CC** | CC-D01, CC-D03, CC-D05, CC-D06, CC-D12, CC-D13 |
| **Figma fileKey** | `8xR5zSTfGtEVZSr6KK8Gww` |
| **Page Option A** | `SFIA Studio v3-native — Option A` (`11:2`) |
| **Anti-claims** | Pas UX VALIDATED · Pas DESIGN FINAL · Pas READY FOR MODELED · Pas READY FOR DELIVERY · Pas RUNTIME MATCHES FIGMA · Pas OPTION A IMPLEMENTED |
| **Code / schemas / SQL / runtime** | **Interdits** |
| **Document** | `03-conversation-and-epistemic-patterns.md` |

## 1. Patterns de messages

| Pattern | Usage | Notes |
|---------|-------|-------|
| Message utilisateur | Intention, réponses | Édition limitée post-envoi |
| Réponse Studio | Clarifie / propose | Streaming possible |
| Proposition | Options non décidées | Badge Option |
| Clarification | Questions adaptatives | 1–3 questions max visibles |
| Résumé intermédiaire | Consolidation | Non décision |
| Décision | HumanDecision matérialisée | Badge Décision |
| Gate | Stop condition visible | Métier + code |
| Erreur | Fail-closed | Voir doc 07 |
| Action en cours | Async | Interruptible si autorisé |
| Résultat | Outcome exécution | Lié contrat |
| Preuve | Evidence jointe | Incomplete signalé |
| Replanification | Nouvelle trajectoire | Explicit |

## 2. Composer

- Toujours accessible hors N3 focus-trap.
- Placeholder métier, pas technique.
- Pièces jointes : secondaire (contrat AT).
- Interruption / reprise : états clairs.

## 3. Épistémologie visuelle

| Type | Label | Ne pas confondre avec |
|------|-------|----------------------|
| Observation | Observation | Décision |
| Hypothèse | Hypothèse | Fait |
| Option | Option | Recommandation |
| Recommandation | Recommandation | Décision |
| Décision | Décision | Reco |
| Réserve | Réserve | Contradiction bloquante |
| Contradiction | Contradiction | Réserve soft |
| Preuve | Preuve | Synthèse seule |

Règles : texte ou icône+label · pas couleur seule · décisions Morris traçables (acteur + timestamp).

## 4. Streaming & a11y conversation

- Annonces ARIA des mises à jour (contrat).
- Ancrage bas de fil ; historique long scrollable.
- Navigation clavier message → action.

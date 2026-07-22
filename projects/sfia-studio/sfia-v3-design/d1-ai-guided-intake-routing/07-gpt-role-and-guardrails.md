# 07 — Rôle GPT et garde-fous

## GPT peut

- comprendre l’intention ;
- appeler services de lookup autorisés ;
- poser questions minimales ;
- synthétiser ;
- proposer Project / Cycle / profil / blocs ;
- expliquer options ;
- produire `RequestRoutingProposal`.

## GPT ne peut pas

- créer seul un projet ou cycle ;
- reprendre une action sans confirmation ;
- valider une décision / contourner un gate ;
- modifier la doctrine / choisir une baseline ;
- transformer une proposition en décision Morris ;
- claim V3-ADOPTED / V3-IMPLEMENTED.

## Garde-fous produit

1. **Human-in-the-loop** obligatoire pour toute mutation.
2. **Fail-closed** sur ambiguïté → clarification.
3. **Pas de formulaire-chat** : max questions utiles.
4. **Transparence** : rationale visible.
5. **Séparation** audit métier / technique.
6. **Anti-claims** persistés dans le contexte système.

## Observabilité conception

Événements logiques : `intake_intent_received`, `intake_lookup_completed`, `intake_proposal_emitted`, `intake_confirmed`, `intake_cancelled` (implémentation future).

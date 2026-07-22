# 04 — Journey intake AI-guided

## Parcours nominal (Campus360 comptes)

1. Utilisateur ouvre **Nouvelle demande**.
2. Saisit : « Je veux reprendre Campus360 pour revoir la gestion des comptes. »
3. Studio : Context lookup → match Campus360 + cycles récents.
4. Clarification : « Prolonge-t-on le cadrage ou ouvre-t-on un nouveau sujet ? »
5. Utilisateur : nouveau sujet + gestion des rôles.
6. Studio : RequestRoutingProposal (OPEN_CYCLE, profil Standard, blocs sécurité/RGPD/UX).
7. Affiche rationale + alternatives (rattacher / analyser seulement).
8. Utilisateur : « Valide ».
9. Mutation bornée : Cycle ouvert + GuidedSession · Cockpit mis à jour.
10. Conversation continue dans le contexte créé.

## États UI du journey

| État | Contenu central | Rail |
|------|-----------------|------|
| Empty | champ + exemples + reprises | historique / décisions |
| Clarification | questions + thread | contexte détecté partiel |
| Routing proposal | carte proposition + alternatives | confiance / matches |
| Confirmation | résumé effet | ce qui sera créé |
| Post-mutation | GuidedSession / Cockpit | activité métier |

## Alternatifs

- Refus proposition → retour clarification ou alternatives.
- Contexte indisponible → ANALYZE_ONLY ou manuel + banner.
- Conflit multi-match → choix utilisateur obligatoire.
- Erreur lookup → fail-soft, pas de mutation.

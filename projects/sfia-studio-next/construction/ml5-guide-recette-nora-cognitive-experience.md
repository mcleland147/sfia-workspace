# Guide de recette — Nora cognitive experience (ML5 livraison 1)

Points d’observation pour Morris. Aucune réponse Nora n’est prédéterminée.

| Champ | Valeur |
|---|---|
| Lane | RECETTE après GO de bascule (actuellement inchangée) |
| Entrée DEV | `http://127.0.0.1:3100` |
| Entrée RECETTE | `http://127.0.0.1:3200` |
| Classe | NO RELEASE · STABLE NOT AVAILABLE |

## Scénarios

1. **Conversation simple** — question courte dans Travail ou sas. Attendu : réponse naturelle, activité absente ou très brève, pas de plan administratif.
2. **Conversation complexe + activité LIVE (sas)** — demande d’investigation dans le sas. Attendu : carte « ACTIVITÉ NORA · En cours », étapes métier avant la réponse finale.
3. **Investigation Git comparative (Travail)** — comparer deux documents/fichiers. Attendu : labels métier (Consultation Git…), pas de `NATURE: summary`.
4. **Consultation WEB publique** — sujet public + approfondissement. Attendu : activité « Recherche web / Page consultée » ; visionneuse « SOURCE WEB » (pas SOURCE GIT) ; distinction découverte ≠ consultation.
5. **Création documentaire** — demander un document. Attendu : fil sans Markdown documentaire brut ; visionneuse / proposition pour le corps.
6. **Révision ciblée + conservation** — Pilotage 360 v1, section 4. Attendu : proposition fidèle à la section ; conservation = version inspectée ; v1 toujours dans l’historique.
7. **Reconnexion / continuité** — refresh pendant ou après un tour. Attendu : pas de doublon ; message Pilote conservé ; activité issue du serveur.
8. **Stratégie sans contrat** — demander une stratégie / analyse sans mandat Cursor. Attendu : pas de contrat parasite READY.
9. **Visuel page 12** — comparer 12.01 (Travail) et 12.10 (sas) à Figma `itgvCulInEnFY6DvgIegvP`. Attendu : composition activité ; F2 exhaustif = NOT PROVEN (recette UX Morris).
10. **Limites utiles** — investigation lourde / échec structuré. Attendu : restitution honnête des acquis, pas de dump SDK, pas de succès fictif.

## Données / capacités

- WEB LIVE : selon flags lane (`SFIA_WEB_SEARCH_*`) — sources publiques / fictives uniquement.
- Cursor LIVE : **hors périmètre** de cette livraison (pas de dispatch pour démontrer Nora).
- Auth RECETTE : normale. DEV : auto-session.

## Qualification

Fake/Real : contrôles déterministes ≠ preuve comportementale. Recette humaine = autorité d’acceptation.

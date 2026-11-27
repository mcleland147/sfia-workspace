# Réconciliation échecs PG historiques — finalisation E5

**Source**: `/tmp/e5-test-integration.log` (campagne E5 antérieure) + rejeux ciblés 27/11/2026.

| Suite / test | Cause rapportée | Préexistant? | Lien delta E5 | Risque RECETTE | Action |
| --- | --- | --- | --- | --- | --- |
| ml3-composer-dictation T02/T11 timeout | completed-before-committed + COMMIT_DELAY leak | Partiel (exposé par E5 readiness) | **Oui** — corrigé | Faible après fix | Rejoué **8 PASS** |
| git-collaboration schema revision 008 | attend `018_…` vs schéma courant `026/027` | Oui | Non | Nul (test obsolète) | Réserve tooling |
| ML5 Cursor dispatch schema 019 | même classe d'assertion schéma | Oui | Non | Nul | Réserve tooling |
| ml4c prior proposal C-02/C-03 / SRC-04 / LIVE-03 | fixture SEM / fence | Oui | Non | Nul cutover | Réserve historique |
| ensemble07 initial qualification | CLARIFICATION vs PROPOSED | Oui (fixture) | Non | Nul cutover | Réserve historique |
| ml2-turn-command investigation profile | analyse vs investigation | Oui | Non | Nul | Réserve historique |
| ml3-pilotage CR-02 concurrent | Commande introuvable | Oui | Non | Isolé e2e | Réserve historique |
| ml4-chat-first R06 / B-iso-neg | fixture revise | Oui | Non | Nul | Réserve historique |
| ML1 integrated substituted campaign | PARTIAL frontier | Oui | Non | Nul | Réserve historique |

**Rejeu ciblé post-corrections finales**: dictation PG 8 PASS · e2-unified 4 PASS · e2-final-orch inclus dans lot 17 PASS.

**Conclusion**: aucun FAIL d'intégrité/autorité/sécurité lié au candidat correctif non traité. Suite globale non rejouée — réserve `R-E5-PG-HIST` explicite (tests obsolètes / fixtures), **non bloquante cutover**.

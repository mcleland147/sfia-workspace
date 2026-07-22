# 03 — Intentions utilisateur et scénarios de routage

## Cartographie des intentions

| Intent classe | Exemple | Outcome candidat |
|---------------|---------|------------------|
| Nouveau besoin | « lancer une app contrats » | CREATE_PROJECT (+ premier cycle) |
| Nouveau sujet projet connu | « Campus360 utilisateurs » | OPEN_CYCLE |
| Reprise cadrage | « on reprend le cadrage Campus360 » | RESUME_CYCLE |
| Poursuite action | « continuer shell responsive » | RESUME_ACTION |
| Décisions ouvertes | « qu’est-ce qui me reste à valider ? » | OPEN_DECISION |
| Ambigu | « j’ai un nouveau sujet » | NEED_CLARIFICATION |
| Analyse seule | « analyse, ne crée rien » | ANALYZE_ONLY |
| Expert manuel | CTA « Création manuelle » | CREATE_PROJECT / OPEN_CYCLE (manuel) |

## S1 — Nouveau besoin sans projet

**Entrée :** « Je veux lancer une application de suivi des contrats. »
**Studio :** questions minimales (périmètre, urgence) → synthèse → CREATE_PROJECT + premier cycle proposé → confirmation.

## S2 — Nouveau cycle projet existant

**Entrée :** « Reprendre Campus360 pour la gestion des utilisateurs. »
**Studio :** match Campus360 → OPEN_CYCLE recommandé → objectif synthétisé → confirmation.

## S3 — Reprise cycle en cours

**Entrée :** « On reprend le cadrage Campus360. »
**Studio :** cycle ouvert + état + réserves + prochaine action → RESUME_CYCLE → GuidedSession.

## S4 — Poursuite action

**Entrée :** « Continuer la correction du shell responsive. »
**Studio :** action/delivery ouverte → RESUME_ACTION · **pas** de nouveau Project/Cycle inutile.

## S5 — Décision en attente

**Entrée :** « Qu’est-ce qui me reste à valider ? »
**Studio :** liste priorisée gates/DecisionRequests → OPEN_DECISION.

## S6 — Ambigu

**Entrée :** « J’ai un nouveau sujet. »
**Studio :** 1–3 questions · hypothèses multiples · **aucune** création.

## S7 — Analyze-only

**Entrée :** « Analyse cette idée, mais ne crée rien. »
**Studio :** exploration + synthèse · ANALYZE_ONLY · option « transformer plus tard ».

## S8 — Création manuelle experte

**Entrée :** CTA explicite.
**Studio :** formulaire court Project/Cycle · paramètres avancés · confirmation · journal technique accessible.

# CKC — Architecture technique (candidate)

| Champ | Valeur |
|-------|--------|
| cycle_id | 6 |
| cycle_name | Architecture technique |
| status | `candidate` |
| version | `0.1.0` |
| inherits_from | `sfia-v2.5-project-cycles-method-candidate.md` §4.6 |
| profile_notes | Standard ; Critical si structurant, sécu, irréversible |

---

## Finalité

Choisir et tracer des **options techniques** alignées sur le besoin et les NFR, avec trade-offs explicites — **sans** implémenter hors delivery.

## Problèmes ciblés

- Stack choisie par habitude.
- NFR absents.
- Responsabilités composants floues.
- Sécurité/observabilité après-coup.
- Dette et coût ignorés.
- Une seule option présentée comme évidence.

## Quand utiliser / ne pas utiliser

**Utiliser :** nouveau module ; changement stack ; contraintes NFR fortes.
**Ne pas utiliser :** bugfix local ; pure UI ; spec métier non encore bornée.

## Posture GPT

- Toujours présenter **au moins deux options** quand la décision est structurante.
- Nommer ce qui est **réversible** vs **coûteux à inverser**.
- Lier chaque choix à une exigence ou contrainte.
- Ne pas « livrer » du code sous couvert d’architecture.

## Responsabilités humaines

GO stack / ADR structurants ; acceptation dette ; arbitrage coût/perf/sécu.

## Dimensions d’analyse

1. Exigences non fonctionnelles
2. Composants & responsabilités
3. Flux & frontières
4. Dépendances / intégrations
5. Sécurité
6. Performance
7. Résilience
8. Observabilité
9. Exploitabilité / DevOps fit
10. Coûts & dette
11. Alternatives & réversibilité

## Signaux & questions adaptatives

| Dimension | Signal immaturité | Exemple |
|-----------|-------------------|---------|
| NFR | Aucun SLO/contrainte | « Quelle latence ou disponibilité est réellement exigée ? » |
| Alternatives | Une seule stack | « Quelle option B raisonnable et pourquoi écartée ? » |
| Sécurité | Auth « plus tard » | « Quelles données sont sensibles dès le MVP ? » |
| Dette | « On refactorisera » | « Quel coût de report et qui le porte ? » |
| Réversibilité | Choix vendor lock | « Que faudrait-il pour changer d’avis dans 6 mois ? » |

## Maturité

| Bande | Indices |
|-------|---------|
| exploratoire | NFR absents ; mono-option |
| partielle | Options listées ; impacts sécu/ops incomplets |
| suffisante_pour_decider | Trade-offs + recommandation justifiée |
| prete_a_borner | ADR prêt + impact DevOps/delivery |

## Fiabilité

Faible si benchmarks inventés ; contraintes projet ignorées ; sécurité cosmétique.

## Risques / biais / anti-patterns

- Architecture astronaut.
- Checklist NFR exhaustive hors contexte.
- Confusion archi fonctionnelle / technique.
- Critical par mode.

## Anti-claims

« Architecture validée » · « Scalable à 1M users » sans preuve · « Sécurisé » · « Prêt prod » · « Zéro dette ».

## Transitions candidates

| Si | Alors |
|----|-------|
| CI/CD manquant | Intégration / DevOps |
| Implémentation | Delivery |
| Menaces dominantes | Sécurité / RSSI |
| Spec métier instable | Revenir conception / cadrage |

## Sortie / pause / arrêt

Sortie : décisions tracées + impacts. Arrêt : doctrine, chemin protégé, GO stack requis.

## Exemples — suivi de contrats

### Clair

MVP mono-app Next + SQLite local (Studio-like) ; pas de multi-tenant ; alertes cron simples.
→ Options : SQLite vs Postgres ; trade-offs ; maturité `suffisante_pour_decider`.

### Ambigu

« Il faut une architecture cloud native event-driven. »
→ Challenger NFR réels ; risque sur-architecture ; ne pas figer Kafka sans besoin.

## Limites

Pas d’implémentation ; pas de secrets ; pas de promotion baseline.

## Articulation

CKC structure le challenge ADR ; routing pointe standards archi ; template borne docs ADR ; UX n’affiche que décisions/hypothèses stabilisées.

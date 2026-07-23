# Cartographie synthétique des 15 cycles projet SFIA (pour CKC)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `02-fifteen-cycles-synthetic-map.md` |
| **Statut** | `method-candidate` |
| **Source des noms** | `sfia-cycle-execution-template.md` §4.1 + `sfia-v2.5-project-cycles-method-candidate.md` §3.1 |
| **Baseline** | SFIA v2.6 (opérationnelle) ; liste 15 cycles = référentiel type **candidate absorbé**, utilisé opérationnellement via template |

> Cette carte **n’est pas** quinze contrats détaillés.
> Priorité CKC : **P0** = pilotes ; **P1** = forte valeur cognitive ; **P2** = plutôt REUSE méthode §4 ; **P3** = allégé.

| # | Nom canonique | Finalité (1 ligne) | Objet principal | Posture dominante | Dimensions majeures | Résultat attendu | Preuve centrale | Transition habituelle | Risque principal | Niveau CKC | Priorité |
|---|---------------|--------------------|-----------------|-------------------|---------------------|------------------|-----------------|----------------------|------------------|------------|----------|
| 1 | Cadrage | Clarifier intention, périmètre, contraintes avant solution | Intention / scope | Challenge besoin≠solution | Finalité, parties, contraintes, succès, inconnues | Brief orientant la suite | Périmètre fermé + hors scope | → Conception / archi / backlog | Scope flou ; Critical implicite | **Complet** | **P0** |
| 2 | Conception fonctionnelle | Formaliser usages, règles, objets métier | Spec fonctionnelle | Cohérence métier | Usagers, parcours, règles, données, exceptions | Spec bornée | Traçabilité besoin→règle | → UX / archi fct / backlog | Technique trop tôt | **Complet** | **P0** |
| 3 | Architecture fonctionnelle | Structurer flux et découpage métier | Modules / flux | Arbitrage structure | Frontières, interfaces, responsabilités | Décisions structurantes | ADR/DAA si besoin | → Archi tech / backlog | Sur-architecture | Moyen | P1 |
| 4 | UX/UI | Concevoir expérience et interface | Parcours / UI | Fidélité vs exploration | Source design, états, a11y | Contrat visuel / handoff | Figma/runtime si fidélité | → Delivery / QA | Extrapolation design | Moyen | P1 |
| 5 | Backlog / user stories | Découper en stories testables | Stories | Taille / INVEST | Priorité, dépendances, CA | Backlog priorisé | Stories vérifiables | → Delivery | Stories fourre-tout | Léger | P2 |
| 6 | Architecture technique | Décider stack, patterns, ADR | ADR techniques | Options & trade-offs | NFR, sécurité, dette, coût | Décisions tracées | ADR + impact | → DevOps / delivery | Décision implicite | **Complet** | **P0** |
| 7 | Intégration / DevOps | Pipelines, envs, rollback | CI/CD | Exploitabilité | Secrets, envs, qualité gate | Pipeline fiable | Pipeline vert + rollback | → Delivery / release | Secrets ; prod implicite | Moyen | P1 |
| 8 | Delivery / implémentation | Implémenter dans périmètre borné | Diff / code | Discipline de scope | Fichiers, tests, régression | Livrable borné | Diff + tests | → QA / PR | Scope creep | Léger* | P2 |
| 9 | QA / validation | Vérifier preuves et réserves | Preuves | Evidence-based | Couverture, négatifs, sévérité | Verdict + réserves | Preuves reproductibles | → PR / release | QA symbolique | **Complet** | **P0** |
| 10 | Sécurité / RSSI | Menaces, contrôles, acceptation risque | Risque | Adversarial | Surface, données, contrôles | Risques traités/acceptés | Analyse + mesures | Transverse | Contournement | Moyen | P1 |
| 11 | Déploiement / release | Release contrôlée | Release | Prudence prod | Fenêtre, rollback, com | Release ou rollback | Smoke + notes | → Observabilité | Release sans rollback | Moyen | P1 |
| 12 | Observabilité / RUN readiness | Exploitabilité mesurable | SLO / alertes | Ops realism | Logs, métriques, runbooks | Service observable | Alertes testées | → Post-merge | Angle mort | Léger | P2 |
| 13 | PR readiness | Branche prête à PR | Diff / body | Garde-fous Git | Scope, secrets, granularité | READY / NOT READY | Checks + body | → Merge (Morris) | PR prématurée | Léger | P2 |
| 14 | Post-merge | Clôturer après merge | Sync / cleanup | Clôture honnête | Réserves, suite, branche | Main aligné | HEAD=main + cleanup | → Capitalisation | Oublier réserves | Léger | P2 |
| 15 | Capitalisation / REX | Apprentissage réutilisable | Actif méthode | Faits≠reco≠décision | Observations, promotion | REX / proposition | Traçabilité | → Cycles méthode | Promotion prématurée | Moyen | P1 |

\* Delivery : le template d’exécution couvre déjà fortement le bornage ; CKC utile surtout pour **anti-claims** et maturité avant élargissement de scope.

### Transverses (non cycles cœur)

FinOps · GreenOps · RGPD · Accessibilité · Performance — **blocs** template §6 ; pas de CKC autonome par défaut (COND dans cycles concernés).

### Routage (candidate)

Consommation : routing guide §4.4.5. Matrice : [04-cycle-to-ckc-routing-matrix.md](./04-cycle-to-ckc-routing-matrix.md).
Fallback onze cycles sans pilote : **cette carte** + méthode cycles §4 — ne pas inventer de contrat détaillé.

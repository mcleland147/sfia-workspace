# SFIA Fast Track — Consolidation Roadmap

## 1. Objectif

Ce document ouvre une phase de consolidation après clôture de la séquence Interv360.

Avant de lancer un nouveau projet, l'objectif est de consolider :

- l'application actuelle ;
- le retour d'expérience ;
- la méthode SFIA ;
- la documentation ;
- l'arborescence ;
- la synchronisation Notion ;
- les règles et standards d'architecture.

## 2. Contexte

La séquence Interv360 est clôturée :

| Élément | Statut |
|---------|--------|
| MVP fonctionnel | Livré |
| Tag MVP | `v0.1.0-mvp` |
| Premium UI | Livrée |
| Release UI | `v0.2.0-premium-ui` |
| Méthode Figma Design-first | Intégrée |
| Capitalisation finale Interv360/SFIA | Intégrée |
| Branches temporaires | Nettoyées |
| `main` | À jour |

La prochaine étape n'est pas de lancer immédiatement un nouveau projet, mais de consolider la base SFIA.

## 3. Décision

Ouvrir une phase de consolidation en cinq chantiers :

1. audit de l'application actuelle ;
2. REX de l'application actuelle ;
3. capitalisation SFIA globale ;
4. mise à jour documentaire complète ;
5. amélioration SFIA : règles, architecture, standards.

Le nouveau projet ne sera ouvert qu'après cette consolidation.

## 4. Chantier 1 — Audit de l'application actuelle

Objectif :

Analyser l'état réel de l'application Interv360 après MVP + Premium UI.

À auditer :

- architecture frontend ;
- architecture backend ;
- séparation UI / métier ;
- cohérence mode local / mode API ;
- tests ;
- dette technique ;
- points de friction ;
- composants legacy ;
- composants premium ;
- sécurité hors scope ;
- qualité de démonstration ;
- limites du MVP ;
- risques avant évolution fonctionnelle.

Livrable attendu :

`projects/interv360/04-delivery/current-application-audit.md`

Décision attendue :

- application saine ;
- application saine avec réserves ;
- corrections nécessaires avant nouveau cycle produit.

### Statut

Audit réalisé et intégré à `main`.

Livrable :

`projects/interv360/04-delivery/current-application-audit.md`

Décision :

> `APPLICATION_SAINE_AVEC_RESERVES`

Suite :

> Chantier 2 — REX de l'application actuelle.

## 5. Chantier 2 — REX de l'application actuelle

Objectif :

Produire un retour d'expérience honnête sur la trajectoire Interv360.

À couvrir :

- ce qui a bien fonctionné ;
- ce qui a été trop long ;
- ce qui a été accéléré ;
- ce qui a créé de la dette ;
- impact du Fast Track ;
- impact de Figma Make ;
- valeur de Figma Design-first ;
- qualité des PR ;
- qualité des releases ;
- enseignements pour le prochain projet.

Livrable attendu :

`method/sfia-fast-track/interv360-application-rex.md`

### Statut

REX réalisé et intégré à `main`.

Livrable :

`method/sfia-fast-track/interv360-application-rex.md`

Décision :

> Le REX confirme que l'application Interv360 est un cas de référence SFIA Fast Track, avec des réserves connues et assumées avant tout nouveau cycle produit.

Suite :

> Chantier 3 — Capitalisation SFIA globale.

## 6. Chantier 3 — Capitalisation SFIA globale

Objectif :

Capitaliser la méthode SFIA au-delà d'Interv360.

À consolider :

- Fast Track ;
- PR unique par cycle ;
- post-merge documenté ;
- releases jalons ;
- règles de garde-fous ;
- Figma Design-first ;
- audit avant nouveau cycle ;
- revue documentaire avant nouveau projet.

Livrable attendu :

`method/sfia-fast-track/core/sfia-global-capitalization.md`

### Statut

Capitalisation SFIA globale réalisée et intégrée à `main`.

Livrables :

- `method/sfia-fast-track/core/sfia-global-capitalization.md`
- `method/sfia-fast-track/automation/sfia-automation-architecture.md`

Décision :

> SFIA Fast Track devient la méthode de référence pour les prochains projets, avec une vision d'évolution vers une application factory assistée par IA.

Suite :

> Chantier 4 — Mise à jour documentaire complète.

## 7. Chantier 4 — Mise à jour documentaire complète

Objectif :

Analyser toute la documentation existante et améliorer sa cohérence.

À faire :

- inventorier les documents ;
- identifier doublons ;
- identifier documents obsolètes ;
- identifier documents à archiver ;
- optimiser l'arborescence ;
- harmoniser les noms ;
- vérifier les liens ;
- préparer la mise à jour Notion ;
- définir ce qui doit être publié dans Notion ;
- définir ce qui doit rester uniquement dans le repo.

Livrables attendus :

- `method/sfia-fast-track/documentation-audit.md`
- `method/sfia-fast-track/documentation-structure-target.md`
- `method/sfia-fast-track/notion-publication-plan.md`

Important :

> La mise à jour Notion doit être préparée et validée avant publication effective.

### Statut

Revue documentaire réalisée et intégrée à `main`.

Livrables :

- `method/sfia-fast-track/documentation-audit.md`
- `method/sfia-fast-track/documentation-structure-target.md`
- `method/sfia-fast-track/notion-publication-plan.md`

Décision :

> La documentation SFIA est suffisamment riche pour capitaliser, mais elle doit être structurée avant publication Notion et avant automatisation avancée.

Suite :

> Chantier 5 — Amélioration SFIA : règles, architecture, standards, templates et checklists.

## 8. Chantier 5 — Amélioration SFIA

Objectif :

Faire évoluer SFIA à partir des apprentissages Interv360.

Axes possibles :

- règles de cycle ;
- règles de branche ;
- règles de PR ;
- règles de release ;
- règles de documentation ;
- règles d'architecture ;
- règles UI ;
- règles backend ;
- règles tests ;
- règles Notion ;
- templates ;
- checklists ;
- prompts standards Cursor ;
- architecture d'automatisation SFIA ;
- orchestration IA ;
- moteurs SFIA : intake, framing, architecture, prompt, validation, documentation, release ;
- garde-fous exécutables ;
- formulaires self-service ;
- application factory assistée par IA.

Livrables possibles :

- `method/sfia-fast-track/sfia-rules-update.md`
- `method/sfia-fast-track/sfia-architecture-standards.md`
- `method/sfia-fast-track/automation/sfia-automation-architecture.md`
- `method/sfia-fast-track/templates/`
- `method/sfia-fast-track/checklists/`

### Statut

Amélioration SFIA élargie à l'audit global du workspace sur la branche `consolidation/sfia-method-improvements`.

Objectif :

- analyser toute l'arborescence `sfia-workspace` ;
- identifier la connaissance active, historique et obsolète ;
- préparer une migration fichier par fichier ;
- nettoyer physiquement l'arborescence après validation ;
- préparer Notion comme IDE métier de la SFA.

Livrables :

- `method/sfia-fast-track/sfia-rules-update.md`
- `method/sfia-fast-track/sfia-architecture-standards.md`
- `method/sfia-fast-track/README.md`
- `method/sfia-fast-track/templates/cycle-template.md`
- `method/sfia-fast-track/templates/pr-body-template.md`
- `method/sfia-fast-track/templates/post-merge-template.md`
- `method/sfia-fast-track/templates/audit-template.md`
- `method/sfia-fast-track/templates/rex-template.md`
- `method/sfia-fast-track/checklists/validation-checklist.md`
- `method/sfia-fast-track/checklists/guardrails-checklist.md`
- `method/sfia-fast-track/checklists/notion-publication-checklist.md`
- `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-global-audit.md`
- `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md`
- inventaires complets pré-nettoyage (`pre-cleanup-*.txt`)

Ne pas passer le chantier en terminé tant que le nettoyage global du workspace n'est pas validé et exécuté.

## 9. Ordre recommandé

| Ordre | Chantier | Raison |
|------|----------|--------|
| 1 | Audit application actuelle | Comprendre l'état réel |
| 2 | REX application actuelle | Capitaliser l'expérience terrain |
| 3 | Capitalisation SFIA globale | Transformer le vécu en méthode |
| 4 | Revue documentaire complète | Nettoyer la base documentaire |
| 5 | Amélioration SFIA | Stabiliser règles et standards |
| 6 | Nouveau projet | Démarrer proprement |

## 10. Critères de sortie de la consolidation

La consolidation est terminée lorsque :

- audit application réalisé ;
- REX réalisé ;
- capitalisation SFIA globale réalisée ;
- documentation auditée ;
- cible d'arborescence définie ;
- plan Notion préparé ;
- règles SFIA mises à jour ;
- standards d'architecture définis ;
- backlog du prochain projet prêt à être ouvert.

## 11. Garde-fous

Pendant cette consolidation :

- ne pas modifier l'application sans cycle dédié ;
- ne pas ouvrir de nouvelle fonctionnalité ;
- ne pas modifier backend/API sans audit préalable ;
- ne pas publier Notion sans validation ;
- ne pas supprimer de documentation sans inventaire ;
- ne pas réorganiser l'arborescence sans plan cible ;
- ne pas lancer le nouveau projet avant clôture des points essentiels.

## 12. Décision

La prochaine étape immédiate est :

> Chantier 1 — Audit de l'application actuelle.

Le nouveau projet sera lancé après consolidation SFIA.

---

## 13. Statut de merge

La PR de roadmap consolidation SFIA a été mergée dans `main`.

| Élément | Valeur |
|---------|--------|
| PR | #76 — docs: plan SFIA consolidation roadmap |
| Branche source | `method/sfia-consolidation-roadmap` |
| Branche cible | `main` |
| Commit d'intégration | `055b9ca` |
| Statut | Mergé |
| Type | Documentation méthode / roadmap consolidation |
| Code Interv360 | Non modifié |
| Backend / API / CI | Inchangés |
| `sfia-notion-sync` | Non modifié |
| Exports Figma | Non suivis |

Décision :

> La roadmap consolidation SFIA est intégrée à `main`. Le Chantier 1 — Audit de l'application actuelle peut démarrer.

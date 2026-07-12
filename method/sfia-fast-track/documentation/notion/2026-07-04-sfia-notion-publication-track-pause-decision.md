---
status: validated
version: v1.1
cycle_type: architecture decision / notion publication pause
scope: Pause active Notion integration and keep Notion as optional publication channel
---

# SFIA Notion Publication Track Pause Decision

**Version :** v1.1
**Statut :** Validated
**Cycle :** Décision d'architecture — arrêt trajectoire Notion active
**Branche :** `notion/pause-notion-publication-track`
**Base :** `main` @ `3497266` (post PR #87)

## 1. Décision

**La trajectoire d'intégration Notion active est mise en pause.**

- **SFIA v1.1 ne dépend pas de Notion pour fonctionner.**
- **Le repository Git reste la source de vérité**, le support de travail principal et le socle de versioning.
- **Notion est reclassé comme canal optionnel** de publication / vitrine / portail, activable plus tard si un besoin réel est confirmé.
- **Le Lot 0B** — création de l'espace `SFIA v1.1 — Workspace` — **n'est pas lancé** (annulé / mis en pause).
- **Aucun apply Notion** ne doit être exécuté sans **nouvelle décision humaine explicite** et un cycle dédié.

**Décision proposée : NOTION TRACK PAUSED**

## 2. Contexte

Entre juillet 2026 et ce cycle, SFIA a produit une préparation Notion structurée :

| Cycle / lot | Livrable | Statut |
|-------------|----------|--------|
| Cycle 1 | Catégorisation contenus Notion | Intégré `main` |
| Cycle 2 | Modèle cible + plan d'intégration (lots 0–6) | Intégré `main` |
| Lot 0A | Audit export Notion legacy live | Intégré `main` |
| Cycle technique | Notion Provisioning Engine (inspect / dry-run) | Intégré `main` (PR #87) |

État au moment de la décision :

- Aucun apply Notion exécuté
- Aucune page Notion live créée via le provisioning engine
- Aucun espace `SFIA v1.1 — Workspace` créé
- Le moteur de provisioning existe en **dry-run uniquement** (`--apply` bloqué)

Cette décision **n'annule pas** le travail réalisé. Elle **suspend la trajectoire active** d'intégration Notion pour recentrer SFIA sur le repo et l'exécution Cursor.

## 3. Pourquoi Notion n'est pas nécessaire maintenant

SFIA v1.1 fonctionne déjà avec une chaîne opérationnelle complète **sans Notion** :

| Capacité | Support actuel |
|----------|----------------|
| Source de vérité | Repo Git versionné |
| Documentation | Markdown dans le repo |
| Exécution | Cursor + Operating Model |
| Cadrage / prompts / validation | ChatGPT + templates repo |
| Contrôle qualité | PR + Validation Checklist |
| Automatisation | Scripts (`tools/cmp-001/` en mode dormant, autres outils repo) |
| Gouvernance | Cycles SFIA + Cycle Routing Guide |

Notion apporte une valeur **optionnelle** (vitrine, portail, consultation non-Git), mais crée une **dette** si activé prématurément :

| Risque Notion actif | Impact |
|---------------------|--------|
| Double maintenance repo / Notion | Divergence contenu, coût de revue |
| Outillage provisioning + tokens + IDs | Complexité opérationnelle |
| Cycles publication Lot 1–6 | Effort sur l'organisation plutôt que sur la méthode |
| Permissions et intégrations | Surface de sécurité et de maintenance |
| Illusion de complétude | Notion publié ≠ méthode mature |

**Conclusion :** SFIA v1.1 est utilisable et gouvernable **sans Notion**. L'intégration Notion n'est pas un prérequis au fonctionnement de la méthode.

## 4. Ce qui reste vrai

Les principes suivants **restent valides** et ne changent pas :

1. **Repository first** — Git = source de vérité versionnée.
2. **Notion ≠ miroir du repo** — si réactivé, Notion reste une couche éditorialisée.
3. **Validation humaine first** — aucune publication sans GO explicite.
4. **Legacy preservation** — l'ancien espace Notion n'est pas supprimé par cette décision.
5. **Capitalisation conservée** — audits, modèle cible, provisioning dry-run restent disponibles.
6. **Terminologie SFIA** — pas de retour à SFA.

## 5. Ce qui est suspendu

Les éléments suivants sont **explicitement suspendus** jusqu'à réactivation :

| Élément suspendu | Détail |
|------------------|--------|
| Lot 0B apply Notion | Création espace live |
| Espace `SFIA v1.1 — Workspace` | Non créé |
| Bases Notion cibles (×8) | Non créées |
| Publication pages SFIA | Lots 1–6 |
| Migration depuis Notion legacy | Import contenu |
| Import CSV legacy | Interdit (inchangé) |
| Suppression / archivage live ancien espace | Actions live reportées |
| Enrichissement Notion automatisé | Apply provisioning |
| Cycles Lot 1 à Lot 6 Notion | Plan d'intégration en pause |
| Implémentation `--apply` | Sans cycle dédié + GO humain |

## 6. Ce qui est conservé

Tous les documents et outils produits restent dans le repo comme **capitalisation** :

| Actif | Emplacement | Nouveau statut |
|-------|-------------|----------------|
| Catégorisation Cycle 1 | `sfia-notion-content-categorization.md` | Référence / dormant |
| Inventaire + modèle cible Cycle 2 | `sfia-notion-current-space-inventory.md`, `sfia-notion-target-model-and-integration-plan.md` | Référence / dormant |
| Audit export legacy Lot 0A | `sfia-notion-live-export-audit.md` | Référence / dormant |
| Design Provisioning Engine | `sfia-notion-provisioning-engine-design.md` | Référence / dormant |
| Rapport dry-run | `sfia-notion-provisioning-dry-run-report.md` | Référence / dormant |
| Config SFIA v1.1 | `tools/cmp-001/config/sfia-v1-1-workspace.config.json` | Capacité dormante |
| Script provisioning | `tools/cmp-001/scripts/notion-provision.js` | Capacité dormante |
| Module provisioning | `tools/cmp-001/src/provisioning/` | Capacité dormante |
| CMP-001 connecteur objet | `tools/cmp-001/` (CLI existante) | Conservé — usage objet ponctuel possible |

**Statut global :** Dormant / optional capability

**Règle :** ne pas supprimer ces éléments.

## 7. Impacts sur la roadmap SFIA

| Avant pause | Après pause |
|-------------|-------------|
| Lot 0B → Lots 1–6 Notion | Trajectoire Notion gelée |
| Provisioning apply = prochaine étape technique | Apply interdit sans nouvelle décision |
| Notion = chantier prioritaire méthode | Notion = canal optionnel futur |
| Effort organisation espace Notion | Effort recentré repo + cycles SFIA actifs |

**Priorités recommandées à la place de Notion :**

- Consolidation foundation / architecture v1.1 dans le repo
- Exécution cycles SFIA via Cursor (cadrage, validation, capitalisation)
- Projets actifs (Interv360) dans le repo
- Amélioration Operating Model et Cycle Routing Guide

Le plan d'intégration Notion (lots 0–6) reste **documenté** mais **non exécuté**.

## 8. Impacts sur le Notion Provisioning Engine

| Aspect | Décision |
|--------|----------|
| Suppression | **Non** — moteur conservé |
| Nature | Capacité technique générique config-driven |
| Mode actif autorisé | `--inspect` et `--dry-run` uniquement |
| Mode `--apply` | **Interdit** sans nouvelle décision + cycle dédié |
| Config SFIA v1.1 | Conservée comme référence |
| Réutilisation future | Possible si Notion redevient pertinent |
| Réutilisation transverse | Peut servir de modèle pour d'autres canaux de publication |

**Règle explicite :**

> Toute implémentation ou exécution future de `--apply` nécessite une nouvelle décision humaine explicite et un cycle dédié.

Le blocage actuel `APPLY_DISABLED_IN_THIS_CYCLE` dans le script **reste en place** jusqu'à un cycle apply explicitement autorisé.

## 9. Conditions de réactivation future

Notion pourrait être réactivé si **au moins une** condition suivante est confirmée par décision humaine :

| Condition | Exemple |
|-----------|---------|
| Présentation SFIA à un client | Vitrine méthode externe |
| Vitrine commerciale | Portail SFIA pour prospects |
| Partage avec équipe non technique | Consultation sans accès Git |
| Portail de consultation | Navigation simplifiée |
| Publication multi-support | Complément au repo |
| Espace collaboratif non Git | Ateliers, relecture non-dev |

**Tant qu'aucune de ces conditions n'est vraie, Notion reste en pause.**

Processus de réactivation recommandé :

1. Décision humaine explicite documentée (nouveau ADR ou décision repo)
2. Cycle dédié avec garde-fous publication
3. Validation du modèle cible toujours d'actualité
4. GO apply séparé — jamais implicite

## 10. Garde-fous

Tant que cette décision est active :

- [ ] **Ne pas exécuter** `--apply` sur `notion-provision.js`
- [ ] **Ne pas créer** d'espace ou page Notion live via outillage SFIA
- [ ] **Ne pas lancer** Lot 0B ou Lots 1–6 Notion
- [ ] **Ne pas importer** CSV legacy Notion
- [ ] **Ne pas supprimer** l'espace Notion legacy live
- [ ] **Ne pas présenter** Notion comme prérequis SFIA v1.1
- [ ] **Conserver** le provisioning engine et la documentation Notion existante
- [ ] **Repo first** — toute évolution méthode passe par Git + PR

## 11. Décision finale

**Décision : NOTION TRACK PAUSED**

| Critère | Statut |
|---------|--------|
| Trajectoire intégration Notion active | **Suspendue** |
| SFIA v1.1 dépendance Notion | **Aucune** |
| Repo source de vérité | **Confirmé** |
| Notion = canal optionnel | **Confirmé** |
| Lot 0B | **Annulé / en pause** |
| Apply Notion | **Interdit** sans nouvelle décision |
| Provisioning Engine | **Conservé, dormant** |
| Action Notion live ce cycle | **Aucune** |
| Documents / outils Notion existants | **Conservés** |

**Prochaine étape recommandée :** poursuivre les cycles SFIA actifs dans le repo (foundation, projets, validation) — **sans** chantier Notion.

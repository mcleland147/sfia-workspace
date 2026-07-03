# SFIA Fast Track — Documentation Audit

## 1. Objectif

Ce document audite la documentation actuelle du repo SFIA après la séquence Interv360 et les trois premiers chantiers de consolidation.

Objectifs :

- inventorier les documents existants ;
- identifier les familles documentaires ;
- détecter les doublons ;
- détecter les documents obsolètes ;
- identifier les documents à archiver ;
- identifier les documents à conserver comme références ;
- préparer la cible d'arborescence ;
- préparer le plan de publication Notion.

## 2. Périmètre audité

| Zone | Auditée | Commentaire |
|------|---------|-------------|
| `method/sfia-fast-track/` | Oui | Méthode, capitalisations, règles, automation — 9 fichiers + 1 template |
| `method/interv360-realization/` | Oui | Méthode de réalisation antérieure — 8 fichiers |
| `projects/interv360/` | Oui | ~251 fichiers Markdown projet |
| `docs/` | Oui | Documentation transverse plateforme — 54 fichiers |
| `methods/controlled-delivery/` | Oui | Méthode Controlled Delivery — 13 fichiers |
| `prompts/` | Partiel | Catalogue et familles de prompts — inventaire de présence |
| `sfia-notion-sync` | Non | Aucun audit d'exécution, uniquement références documentaires |
| Code applicatif | Non | Hors périmètre |
| Exports Figma | Non | Non suivis (`projects/interv360/03-design/exports/`) |

**Synthèse quantitative (hors `node_modules`) :**

| Zone | Fichiers `.md` |
|------|----------------|
| `method/` | 17 |
| `projects/interv360/` | ~251 |
| `docs/` | 54 |
| `methods/controlled-delivery/` | 13 |
| `prompts/` | ~10 |
| Racine / outils / divers | ~15 |
| **Total estimé** | **~350** |

## 3. Inventaire documentaire

### 3.1. Noyau SFIA Fast Track (actif — référence)

| Fichier | Famille | Statut | Rôle | Commentaire |
|---------|---------|--------|------|-------------|
| `sfia-consolidation-roadmap.md` | Méthode | Actif | Roadmap consolidation | Pilote les chantiers 1–5 |
| `sfia-global-capitalization.md` | Capitalisation | Actif | Règles SFIA globales | Référence méthode post-Interv360 |
| `sfia-automation-architecture.md` | Méthode / Automation | Actif | Vision orchestration IA | Cible long terme |
| `interv360-application-rex.md` | REX | Actif | Retour d'expérience Interv360 | Chantier 2 clôturé |
| `interv360-final-capitalization.md` | Capitalisation | Actif | Clôture séquence Interv360 | Complète le REX, pré-consolidation |
| `figma-design-first-ui-method.md` | Méthode UI | Actif | Règle Figma Design-first | Référence UI premium |
| `interv360-mvp-delivery-capitalization.md` | Capitalisation | Actif | Pattern livraison MVP | Source du template MVP |
| `templates/mvp-delivery-pattern-template.md` | Template | Actif | Template cycle MVP | Seul template Fast Track existant |

### 3.2. Méthode Interv360 Realization (à revoir)

| Fichier | Famille | Statut | Rôle | Commentaire |
|---------|---------|--------|------|-------------|
| `method/interv360-realization/realization-method.md` | Méthode | À revoir | Méthode réalisation incrémentale | Précède SFIA Fast Track structuré |
| `method/interv360-realization/realization-deliverables-standard.md` | Méthode | À revoir | Standard livrables | Chevauche MVP capitalization |
| `method/interv360-realization/realization-checklists.md` | Checklist | À revoir | Checklists réalisation | À fusionner ou archiver |
| `method/interv360-realization/realization-templates.md` | Template | À revoir | Templates réalisation | Partiellement obsolète |
| `method/interv360-realization/realization-prompt-family.md` | Template | À revoir | Prompts réalisation | Remplacé en partie par prompts Fast Track |
| `method/interv360-realization/capitalization-plan.md` | Capitalisation | Obsolète | Plan capitalisation ancien | Remplacé par consolidation roadmap |
| `method/interv360-realization/capitalization-summary.md` | Capitalisation | Obsolète | Synthèse capitalisation ancienne | Remplacé par final-capitalization |
| `method/interv360-realization/notion-integration-plan.md` | Notion | Obsolète | Plan Notion ancien | Remplacé par `notion-publication-plan.md` (Chantier 4) |

### 3.3. Interv360 — Documents structurants (actifs)

| Fichier | Famille | Statut | Rôle | Commentaire |
|---------|---------|--------|------|-------------|
| `07-delivery/current-application-audit.md` | Audit | Actif | Audit application | Chantier 1 — décision `APPLICATION_SAINE_AVEC_RESERVES` |
| `07-delivery/premium-design-system.md` | Delivery / UI | Actif | Cycle Premium UI | Référence design + critères UI-05 |
| `07-delivery/mvp-release-readiness.md` | Release | Actif | Release readiness MVP | Borne `v0.1.0-mvp` |
| `07-delivery/mvp-validation-checklist.md` | Checklist | Actif | Validation MVP | Si présent — checklist release |
| `06-release/mvp-release-notes.md` | Release | Actif | Notes release MVP | Publication GitHub |
| `09-architecture/interv360-mvp-final-roadmap.md` | Delivery | Actif | Roadmap MVP final | Lots 1–6 |
| `00-intake/project-intake.md` | Framing | Actif | Intake projet | Origine Interv360 |
| `01-cadrage/business-framing.md` | Framing | Actif | Cadrage métier | Référence produit |
| `02-architecture/adr/ADR-001` à `ADR-008` | Architecture | Actif | Décisions architecture | ADR formelles MVP |
| `08-presentation/interv360-e2e-demo-runbook.md` | Delivery | Actif | Runbook démo | Usage démo contrôlée |

### 3.4. Interv360 — Familles volumineuses (agrégées)

| Famille | Volume | Statut global | Rôle | Commentaire |
|---------|--------|---------------|------|-------------|
| `07-delivery/inc-01-*` | ~45 fichiers | À archiver | Incréments démo pré-MVP | Skeletons, merge summaries, push-and-pr — historique utile mais non opérationnel |
| `07-delivery/inc-02-*`, `inc-03-*`, `inc-04-*` | ~12 fichiers | À archiver | Micro-incréments locaux | Supersédés par lots MVP |
| `02-architecture/notion-sync-*` | ~35 fichiers | À archiver | Logs publication Notion | Traces opérationnelles CMP — internes repo |
| `02-architecture/figma-*` | ~10 fichiers | À revoir | Cycle Figma v1 | Partiellement remplacé par Figma Design-first |
| `02-architecture/clarification-*` | ~10 fichiers | À archiver | Ateliers clarification | Clôturés, valeur historique |
| `02-architecture/cmp-prompt-schema-extension-*` | ~5 fichiers | À archiver | Extensions schéma CMP | Opérationnel Notion passé |
| `03-design/` | 16 fichiers | Actif / À revoir | Design system, exports refs | Exports Figma non suivis |
| `01-cadrage/` | 15 fichiers | Actif / À revoir | Cadrage initial | Certains arbitrages clos |
| `07-delivery/` (hors inc-*) | ~50 fichiers | Actif / À revoir | Lots MVP, industrialisation | Nombreux docs de cycle clos |

### 3.5. Documentation transverse `docs/`

| Famille | Volume | Statut | Rôle | Commentaire |
|---------|--------|--------|------|-------------|
| `docs/architecture/` | 7 fichiers | Actif | Vision plateforme SFIA | Complémentaire à Fast Track, pas doublon direct |
| `docs/methods/` | ~20 fichiers | Actif | Méthodes rôles (BA, PO, architecte…) | Hors Fast Track, utile plateforme |
| `docs/templates/` | ~10 fichiers | Actif | Templates cycles (BPMN, UX, archi) | Pas encore alignés Fast Track |
| `docs/tooling/penpot/` | 5 fichiers | Actif | Penpot / MCP | Parallèle à Figma, à clarifier |
| `docs/foundation/` | 2 fichiers | Actif | Principes engineering | Référence transverse |
| `docs/standards/` | 2 fichiers | Actif | Standards UX/UI v1 | Gouvernance design |
| `docs/roadmaps/` | 1 fichier | Actif | Roadmap technique CMP | Lié outillage Notion |

### 3.6. Controlled Delivery

| Fichier | Famille | Statut | Rôle | Commentaire |
|---------|---------|--------|------|-------------|
| `methods/controlled-delivery/controlled-delivery-standard.md` | Méthode | Actif | Standard Controlled Delivery | Méthode parallèle, non remplacée par Fast Track |
| `methods/controlled-delivery/*` (12 autres) | Méthode | Actif / À revoir | Checklists, publication, templates | Coexistence à clarifier avec Fast Track |

## 4. Familles documentaires identifiées

### 4.1. Méthode SFIA

- `method/sfia-fast-track/sfia-global-capitalization.md`
- `method/sfia-fast-track/sfia-consolidation-roadmap.md`
- `method/sfia-fast-track/sfia-automation-architecture.md`
- `method/sfia-fast-track/figma-design-first-ui-method.md`
- `methods/controlled-delivery/controlled-delivery-standard.md`
- `docs/architecture/sfia-platform-architecture.md`

### 4.2. Capitalisation

- `method/sfia-fast-track/interv360-mvp-delivery-capitalization.md`
- `method/sfia-fast-track/interv360-final-capitalization.md`
- `method/sfia-fast-track/interv360-application-rex.md`
- `method/interv360-realization/capitalization-plan.md` (obsolète)
- `method/interv360-realization/capitalization-summary.md` (obsolète)

### 4.3. Interv360 — Delivery

- `projects/interv360/07-delivery/` (~111 fichiers)
- `projects/interv360/09-architecture/interv360-mvp-final-roadmap.md`
- `projects/interv360/06-release/` (release notes)
- Familles `inc-01-*` à `inc-04-*` (historique)

### 4.4. Interv360 — Design

- `projects/interv360/03-design/`
- `projects/interv360/07-delivery/premium-design-system.md`
- `projects/interv360/02-architecture/figma-*`

### 4.5. Interv360 — Release / Audit / REX

- `projects/interv360/07-delivery/current-application-audit.md`
- `projects/interv360/07-delivery/mvp-release-readiness.md`
- `method/sfia-fast-track/interv360-application-rex.md`
- `projects/interv360/06-release/mvp-release-notes.md`

### 4.6. Templates / Checklists

- `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md`
- `method/interv360-realization/realization-templates.md`
- `method/interv360-realization/realization-checklists.md`
- `docs/templates/` (BPMN, UX, architecture)
- `methods/controlled-delivery/controlled-delivery-checklist.md`

### 4.7. Notion / Publication

- `method/interv360-realization/notion-integration-plan.md` (obsolète)
- `projects/interv360/02-architecture/notion-sync-*` (~35 logs)
- `projects/interv360/01-cadrage/notion-sync-summary.md`
- `exports/notion/README.md`

## 5. Documents de référence à conserver

| Document | Pourquoi le conserver | Usage futur |
|----------|----------------------|-------------|
| `sfia-global-capitalization.md` | Règles SFIA validées | Référence tous projets Fast Track |
| `sfia-automation-architecture.md` | Vision orchestration | Chantier 5 + plateforme SFIA |
| `sfia-consolidation-roadmap.md` | Pilotage consolidation | Suivi chantiers |
| `figma-design-first-ui-method.md` | Règle UI premium | Cycles UI futurs |
| `interv360-application-rex.md` | Cas de référence terrain | Onboarding, formation |
| `current-application-audit.md` | État réel application | Avant nouveau cycle produit |
| `premium-design-system.md` | Cycle UI livré | Référence design Interv360 |
| `interv360-mvp-final-roadmap.md` | Trajectoire MVP | Modèle lots produit |
| `mvp-release-readiness.md` | Pattern release | Template release futur |
| `ADR-001` à `ADR-008` | Décisions architecture MVP | Contrat technique |
| `docs/architecture/sfia-platform-architecture.md` | Vision plateforme | Complément méthode |

## 6. Documents à revoir

| Document | Problème | Recommandation |
|----------|----------|----------------|
| `method/interv360-realization/*` | Coexistence avec Fast Track | Marquer « pré-Fast Track » ou archiver après fusion utile |
| `premium-design-system.md` | Long, mélange cadrage + statuts merge | Extraire statuts merge en annexe ou conserver tel quel avec index |
| `02-architecture/figma-*` | Cycle Figma v1 vs Design-first | Ajouter note de transition vers méthode Fast Track |
| `methods/controlled-delivery/*` | Deux méthodes SFIA | Documenter relation Fast Track ↔ Controlled Delivery |
| `docs/` vs `method/` | Double couche méthode | Clarifier : `docs/` = plateforme, `method/sfia-fast-track/` = Fast Track |
| `07-delivery/` (lots clos) | Nombreux docs sans statut explicite | Ajouter statut « cycle clos » lors réorganisation |
| `interv360-final-capitalization.md` | Chevauche `sfia-global-capitalization` | Conserver comme snapshot Interv360 ; global = généralisation |

## 7. Documents potentiellement obsolètes

Important : ne pas supprimer. Seulement recommander.

| Document | Raison | Document de remplacement éventuel | Action proposée |
|----------|--------|-----------------------------------|-----------------|
| `method/interv360-realization/capitalization-plan.md` | Plan ancien | `sfia-consolidation-roadmap.md` | Archiver |
| `method/interv360-realization/capitalization-summary.md` | Synthèse ancienne | `interv360-final-capitalization.md` | Archiver |
| `method/interv360-realization/notion-integration-plan.md` | Plan Notion ancien | `notion-publication-plan.md` | Archiver |
| `07-delivery/inc-01-*` (~45) | Incréments pré-MVP clos | `interv360-mvp-final-roadmap.md` | Archiver en bloc |
| `07-delivery/inc-02-*` à `inc-04-*` | Micro-cycles clos | Lots MVP | Archiver en bloc |
| `02-architecture/notion-sync-*` (~35) | Logs opérationnels passés | `notion-publication-plan.md` | Archiver — interne repo |
| `02-architecture/clarification-*` | Ateliers clos | ADR + MVP clarifications | Archiver |
| `02-architecture/cmp-prompt-schema-extension-*` | Extensions CMP passées | `prompts/prompt-catalog.md` | Archiver |

## 8. Doublons ou chevauchements

| Sujet | Documents concernés | Risque | Recommandation |
|-------|---------------------|--------|----------------|
| Capitalisation méthode | `interv360-final-capitalization`, `sfia-global-capitalization`, `interv360-mvp-delivery-capitalization` | Redondance partielle | Conserver les trois : MVP (pattern), final (Interv360), global (SFIA) |
| REX / leçons | `interv360-application-rex`, `interv360-final-capitalization` §5 | Chevauchement thématique | REX = honnêteté terrain ; final = clôture formelle |
| Figma UI | `figma-design-first-ui-method`, `premium-design-system`, `02-architecture/figma-*` | Trois couches Figma | Design-first = règle ; premium = cycle ; figma-v1 = historique |
| Notion | `notion-integration-plan`, `notion-sync-*`, `notion-publication-plan` | Plans et logs multiples | Nouveau plan Chantier 4 fait référence ; archiver anciens |
| Réalisation vs Fast Track | `interv360-realization/*`, `sfia-fast-track/*` | Deux méthodes delivery | Documenter succession ; archiver realization après validation |
| Méthode delivery | `controlled-delivery-standard`, `sfia-global-capitalization` | Coexistence | Préciser périmètres : CD = publication structurée ; FT = cycles rapides |
| Audit application | `current-application-audit`, sections dans `premium-design-system` | État dispersé | Audit = source unique état actuel |

## 9. Manques documentaires

Pour industrialiser SFIA (Chantier 5 et automation) :

| Manque | Priorité | Chantier cible |
|--------|----------|----------------|
| Templates cycle générique (hors MVP) | Haute | Chantier 5 |
| Template PR body | Haute | Chantier 5 |
| Template post-merge | Haute | Chantier 5 |
| Checklists validation / garde-fous | Haute | Chantier 5 |
| `sfia-rules-update.md` | Haute | Chantier 5 |
| `sfia-architecture-standards.md` | Moyenne | Chantier 5 |
| Formulaire intake self-service (spec) | Moyenne | Automation |
| Règles exécutables (garde-fous) | Moyenne | Chantier 5 |
| README `method/sfia-fast-track/` | Moyenne | Réorganisation |
| Index documents Interv360 | Moyenne | Réorganisation |
| Standards UI / backend API dédiés Fast Track | Moyenne | Chantier 5 |
| Documentation relation Fast Track ↔ Controlled Delivery | Basse | Chantier 5 |

## 10. Risques documentaires

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Documentation dispersée (~350 fichiers) | Perte de lisibilité | Arborescence cible + index |
| Documents obsolètes non marqués | Mauvaises décisions | Statut documentaire + archive |
| Notion publié trop tôt | Incohérence externe | Plan publication Chantier 4 |
| Trop de documents projet vs méthode | Confusion | Séparation `method/` / `projects/` |
| Absence de templates Fast Track | Automatisation difficile | Chantier 5 |
| Logs Notion mélangés à l'architecture | Bruit documentaire | Archiver `notion-sync-*` |
| Double méthode (CD + Fast Track) | Ambiguïté contributeur | Page Notion « quelle méthode » |

## 11. Recommandations

### Court terme

- Valider cet audit et les documents Chantier 4 (structure cible + plan Notion).
- Ne supprimer ni déplacer de fichier avant PR de réorganisation validée.
- Marquer `method/interv360-realization/` comme « pré-Fast Track » dans un README.

### Moyen terme

- Créer zone `projects/interv360/08-archive/` pour `inc-*` et `notion-sync-*`.
- Produire templates et checklists Chantier 5.
- Ajouter README index dans `method/sfia-fast-track/`.

### Avant publication Notion

- Publier uniquement le noyau méthode Fast Track + cas Interv360 synthétisé.
- Exclure logs Notion, post-merge bruts, incréments `inc-01-*`.
- Adapter le ton : moins Git, plus méthode.

### Avant automatisation SFIA

- Structurer templates comme entrées des moteurs Prompt / Documentation / Validation.
- Formaliser garde-fous exécutables (cf. `sfia-automation-architecture.md` §8).
- Inventorier champs formulaire intake à partir de `project-intake.md` et automation vision.

## 12. Décision

Décision proposée :

> La documentation SFIA est suffisamment riche pour capitaliser, mais elle doit être structurée avant publication Notion et avant automatisation avancée.

Constat chiffré :

- **~17** documents méthode directs ;
- **~251** documents Interv360 (dont **~90** candidats archive) ;
- **~54** documents transverse `docs/` ;
- **1** template Fast Track existant — lacune majeure pour Chantier 5.

## 13. Suites

Ce document alimente :

- `documentation-structure-target.md`
- `notion-publication-plan.md`
- Chantier 5 — Amélioration SFIA

---

## 14. Statut de merge

La PR de revue documentaire SFIA a été mergée dans `main`.

| Élément | Valeur |
|---------|--------|
| PR | #80 — docs: audit SFIA documentation structure |
| Branche source | `consolidation/sfia-documentation-review` |
| Branche cible | `main` |
| Commit d'intégration | `79e55a6` |
| Statut | Mergé |
| Type | Documentation audit / structure / plan Notion |
| Livrables | `documentation-audit.md`, `documentation-structure-target.md`, `notion-publication-plan.md` |
| Fichiers supprimés / déplacés | Aucun |
| Code Interv360 | Non modifié |
| Backend / API / CI | Inchangés |
| `sfia-notion-sync` | Non exécuté, non modifié |
| Exports Figma | Non suivis |

Décision :

> Le Chantier 4 — Mise à jour documentaire complète est intégré à `main`. La consolidation peut passer au Chantier 5 — Amélioration SFIA.

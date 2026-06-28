# SFIA — Prompt Catalog

**Statut** : Draft  
**Objet** : catalogue des prompts candidats et réutilisables du produit SFIA  
**Source pilote** : PRJ-INTERV360  
**Nature** : référentiel évolutif

---

## 1. Objectif du catalogue

Ce catalogue recense les **prompts candidats à la capitalisation SFIA**, identifiés à partir du projet pilote Interv360 et des méthodes stabilisées dans `docs/methods/roles/`.

Deux prompts sont **formalisés en Draft** (fichiers dédiés sous `prompts/<famille>/`) — voir §11. Pour les autres entrées, le catalogue documente :

- l'**objectif** ;
- la **famille** ;
- le **statut** et la **maturité** ;
- la **source** pilote ;
- le **livrable produit** ;
- le **rôle SFIA** associé ;
- la **priorité** de formalisation.

Les prompts détaillés seront créés **uniquement** lorsqu'ils seront éprouvés ou dérivés de livrables validés.

---

## 2. Règle de capitalisation d'un prompt

Un prompt peut être capitalisé si :

- [ ] il a produit ou peut produire un **livrable stable** ;
- [ ] il est **réutilisable au-delà d'Interv360** ;
- [ ] il est lié à une **méthode, un template, une checklist ou un standard SFIA** ;
- [ ] il précise les **entrées nécessaires** ;
- [ ] il précise les **sorties attendues** ;
- [ ] il contient des **garde-fous** (ce qu'il ne doit pas produire) ;
- [ ] il inclut un **contrôle capitalisation SFIA** ;
- [ ] il indique les **rôles mobilisés** ;
- [ ] il peut être **amélioré par REX**.

---

## 3. Familles de prompts

| Famille | Dossier cible | Objectif |
|---------|---------------|----------|
| **Cadrage** | `prompts/cadrage/` | Produire ou enrichir des documents de cadrage métier |
| **Arbitrages** | `prompts/arbitrages/` | Arbitrer le périmètre MVP et valider les décisions |
| **UX/UI** | `prompts/ux-ui/` | Brief UX/UI, validation, revues dashboard/KPI |
| **UX/UI V1 Governance** | `prompts/ux-ui/` *(famille catalogue)* | Cycle maquette V1 — ouverture, production, revue, clôture, gouvernance — voir §13 |
| **Rôles** | `prompts/roles/` | Méthodes par rôle, revues, extractions Role Method |
| **Architecture** | `prompts/architecture/` | Intégrations, erreurs, ADR candidates |
| **Sécurité / RSSI** | `prompts/security/` | Revues SSI, canal email sécurisé, données sensibles |
| **QA / Tests** | `prompts/qa/` | Scénarios, critères testables, non happy path |
| **Gouvernance** | `prompts/governance/` | Phase gate, capitalisation, contrôles structure |
| **Notion / Sync** | `prompts/governance/notion/` | Synchronisation gouvernance Notion via CMP-001 |

---

## 4. Prompts candidats issus d'Interv360

| ID | Nom du prompt | Famille | Source Interv360 | Livrable produit | Rôle SFIA principal | Statut | Priorité |
|----|---------------|---------|------------------|------------------|---------------------|--------|----------|
| **PROMPT-CAD-001** | Cadrage métier projet | Cadrage | business-framing.md | Document de cadrage métier | Business Analyst | Candidat | Haute |
| **PROMPT-CAD-002** | Revue cohérence cadrage | Cadrage | framing-review.md | Revue de cadrage | Business Analyst / Chef de projet | Candidat | Haute |
| **PROMPT-ARB-001** | Arbitrages MVP | Arbitrages | mvp-arbitrations.md | Arbitrages MVP | Product Owner | Candidat | Haute |
| **PROMPT-ARB-002** | Validation arbitrages MVP | Arbitrages | mvp-arbitration-validation.md | Validation d'arbitrages MVP | Product Owner / Chef de projet | Candidat | Haute |
| **PROMPT-UX-001** | Brief UX/UI avant Figma | UX/UI | ux-ui-brief.md | Brief UX/UI | UX/UI Designer | Candidat | Haute |
| **PROMPT-UX-002** | Validation brief UX/UI | UX/UI | ux-ui-brief-validation.md | Validation brief UX/UI | UX/UI Designer / Product Owner | Candidat | Haute |
| **PROMPT-UX-003** | Revue dashboard KPI UX | UX/UI | dashboard-kpi-ux-review.md | Revue dashboard / KPI / UX | UX/UI Designer / Concepteur fonctionnel | Candidat | Moyenne |
| **PROMPT-ROLE-001** | Méthode globale par rôle | Rôles | role-methods-framing.md | role-methods-framing.md | Chef de projet / tous rôles | Candidat | Haute |
| **PROMPT-ROLE-002** | Revue méthode par rôle | Rôles | role-methods-review.md | role-methods-review.md | Chef de projet | Candidat | Haute |
| **PROMPT-ROLE-003** | Extraction méthode rôle | Rôles | docs/methods/roles/ | Fichiers Role Method | Chef de projet / rôle concerné | Candidat | Haute |
| **PROMPT-ARCH-001** | Revue intégrations et erreurs | Architecture | ADR-001 à ADR-004 + integration-error-arbitration-review.md | Revue intégrations / erreurs | Architecte | **Draft** | Haute |
| **PROMPT-SEC-001** | Revue canal email sécurisé | Sécurité / RSSI | ADR-003 + secure-email-intake-review.md | Revue email sécurisé | RSSI / Architecte | **Draft** | Haute |
| **PROMPT-GOV-001** | Synchronisation gouvernance Notion projet | Gouvernance / Notion | notion-sync-summary.md + notion-sync-payload.json + CMP-001 | Synthèse / payload gouvernance Notion | Chef de projet | Candidat | Haute |
| **PROMPT-GOV-002** | Contrôle structure méthodes | Gouvernance | docs/methods/methods-structure-check.md | Rapport contrôle arborescence méthodes | Chef de projet | Candidat | Moyenne |

---

## 5. Maturité des prompts

| Statut | Définition |
|--------|------------|
| **Candidat** | Identifié à partir d'un livrable ou d'un prompt utilisé — non encore formalisé |
| **Draft** | Prompt formalisé dans un fichier dédié sous `prompts/<famille>/` |
| **Tested** | Prompt utilisé au moins une fois avec résultat satisfaisant |
| **Validated** | Prompt revu, stable et réutilisable sur d'autres projets |
| **Deprecated** | Prompt remplacé ou abandonné — conservé pour traçabilité |

---

## 6. Structure cible d'un prompt SFIA

Chaque fichier prompt formalisé suivra la structure type :

| Section | Contenu |
|---------|---------|
| **ID** | Identifiant catalogue (ex. PROMPT-CAD-001) |
| **Nom** | Intitulé du prompt |
| **Famille** | Dossier cible dans `prompts/` |
| **Phase SFIA** | Intake, cadrage, arbitrages, conception, architecture, delivery, QA, REX |
| **Rôles mobilisés** | Rôles SFIA concernés |
| **Objectif** | Ce que le prompt doit accomplir |
| **Entrées nécessaires** | Documents, contexte, contraintes requis |
| **Sortie attendue** | Livrable produit |
| **Garde-fous** | Ce que le prompt ne doit pas produire |
| **Instructions Cursor** | Corps du prompt exécutable |
| **Contrôle capitalisation SFIA** | Valeur projet + valeur SFIA attendues |
| **Critères de qualité** | Checklist de validation du résultat |
| **Historique / REX** | Retours d'usage et améliorations |

---

## 7. Liens avec les méthodes par rôle

| Rôle SFIA | Méthode associée | Prompts candidats |
|-----------|------------------|-------------------|
| **Business Analyst** | docs/methods/roles/business-analyst-method.md | PROMPT-CAD-001, PROMPT-CAD-002 |
| **Product Owner** | docs/methods/roles/product-owner-method.md | PROMPT-ARB-001, PROMPT-ARB-002, PROMPT-UX-002 |
| **Chef de projet** | docs/methods/roles/project-manager-method.md | PROMPT-CAD-002, PROMPT-ROLE-001, PROMPT-ROLE-002, PROMPT-ROLE-003, PROMPT-GOV-001, PROMPT-GOV-002 |
| **UX/UI Designer** | docs/methods/roles/ux-ui-designer-method.md | PROMPT-UX-001, PROMPT-UX-002, PROMPT-UX-003 |
| **Architecte** | docs/methods/roles/architect-method.md | PROMPT-ARCH-001, PROMPT-SEC-001 |
| **RSSI** | docs/methods/roles/rssi-method.md | PROMPT-SEC-001 |

---

## 8. Prompts à créer en premier

### Priorité 1

- PROMPT-CAD-001 — Cadrage métier projet
- PROMPT-ARB-001 — Arbitrages MVP
- PROMPT-UX-001 — Brief UX/UI avant Figma
- PROMPT-ROLE-003 — Extraction méthode rôle
- PROMPT-GOV-001 — Synchronisation gouvernance Notion projet

### Priorité 2

- PROMPT-CAD-002 — Revue cohérence cadrage
- PROMPT-ARB-002 — Validation arbitrages MVP
- PROMPT-UX-002 — Validation brief UX/UI

### Formalisés (Draft)

- PROMPT-ARCH-001 — Revue intégrations et erreurs *(jalon Architecture P1)*
- PROMPT-SEC-001 — Revue canal email sécurisé *(jalon Architecture P1)*

### Priorité 3

- PROMPT-ROLE-001 — Méthode globale par rôle
- PROMPT-ROLE-002 — Revue méthode par rôle
- PROMPT-UX-003 — Revue dashboard KPI UX
- PROMPT-GOV-002 — Contrôle structure méthodes

---

## 9. Règle d'évolution continue

- Chaque **nouveau prompt formalisé** doit être lié à une méthode, un livrable ou un standard SFIA.
- Chaque **utilisation** d'un prompt doit pouvoir produire un REX d'amélioration.
- Chaque prompt peut **évoluer** avec les projets pilotes — mise à jour du catalogue et du fichier prompt.
- Un prompt **validé** peut devenir un **standard d'exécution SFIA**.
- Un prompt **ne remplace pas** la méthode — il l'**opérationnalise**.

---

## 10. Contrôle capitalisation SFIA

| Élément | Capitalisation | Type |
|---------|----------------|------|
| Prompt Catalog | Présent document | Template |
| Prompt Capitalization Checklist | §2 — critères capitalisation | Checklist |
| Prompt Status Model | §5 — maturité des prompts | Standard |
| Prompt File Structure | §6 — structure type d'un prompt | Standard |
| Prompt Family Taxonomy | §3 — familles et dossiers | Standard |
| Prompt ↔ Role Method Mapping | §7 — lien rôles / prompts | Template |
| Prompt Evolution Standard | §9 — règle d'évolution continue | Standard |

---

## 11. Prompts formalisés (Draft)

| ID | Famille | Statut | Chemin | Source pilote | Source de capitalisation | Usage principal |
|----|---------|--------|--------|---------------|--------------------------|-----------------|
| **PROMPT-ARCH-001** | Architecture | Draft | `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` | PRJ-INTERV360 | ADR-001 à ADR-004 + enrichissement méthodes rôle après ADR P1 | Revue intégrations, erreurs, Error Matrix, journalisation minimale, ADR candidates |
| **PROMPT-SEC-001** | Sécurité / RSSI | Draft | `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` | PRJ-INTERV360 | secure-email-intake-review.md + ADR-003 + ADR-004 + rssi-method enrichie | Revue canal email / intake externe, rejets SSI, pièces jointes, logs sans données sensibles |

---

## 12. Dernières mises à jour

Le **jalon Architecture P1** du projet Interv360 a permis de passer **PROMPT-ARCH-001** et **PROMPT-SEC-001** au statut **Draft**.

Ces prompts restent à **tester sur un projet hors pilote** avant passage au statut **Tested**.

Le **standard officiel UX/UI V1** (`docs/standards/ux-ui-v1-governance-standard.md`) a alimenté la famille **UX/UI V1 Governance** (§13) — **15 prompts candidats** issus du cycle Figma V1 Interv360, référencés par modèle projet sans modification des prompts sources.

---

## 13. UX/UI V1 Governance

Cette famille de prompts accompagne le **standard officiel** [`docs/standards/ux-ui-v1-governance-standard.md`](../docs/standards/ux-ui-v1-governance-standard.md).

Elle couvre l'**ouverture**, la **production**, la **revue**, la **clôture**, la **gouvernance** et la **standardisation** d'une maquette **UX/UI V1** — sans déclencher prématurément delivery, backlog, user stories ou code.

Les entrées ci-dessous sont des **prompts candidats** : modèles et livrables pilote documentés ; fichiers prompt dédiés sous `prompts/ux-ui/` à formaliser ultérieurement **sans modifier** les documents sources Interv360.

| Prompt | Objectif | Source / modèle | Sortie attendue |
|--------|----------|-----------------|-----------------|
| **PROMPT-UXUI-001** — Ouverture jalon UX/UI V1 | Préparer l'ouverture d'un jalon UX/UI V1 post-ADR ou post-cadrage, sans lancer la production immédiate | `projects/interv360/02-architecture/ux-ui-figma-opening-note.md` | Note d'ouverture ; garde-fous rappelés ; design ≠ delivery |
| **PROMPT-UXUI-002** — Recherche design / benchmark UX/UI | Produire une recherche design et benchmark avant génération ou production de maquette | `projects/interv360/02-architecture/ux-ui-design-research-and-benchmark.md` | Document recherche ; direction visuelle ; principes UI |
| **PROMPT-UXUI-003** — Instructions UX/UI V1 | Transformer décisions ADR / garde-fous / MVP en consignes design exploitables | `projects/interv360/02-architecture/figma-design-instructions.md` | Instructions design ; écrans autorisés / interdits ; wording, états |
| **PROMPT-UXUI-004** — Production maquette UX/UI V1 | Produire une maquette V1 via prompt structuré, avec garde-fous MVP et exclusions | `projects/interv360/02-architecture/figma-production-prompt.md` | Maquette V1 dans `{design_tool}` ; captures prévues ; pas d'IA / portail / BI / logs |
| **PROMPT-UXUI-005** — Revue premier jet UX/UI V1 | Analyser une première maquette V1 ; points validés, écarts, ajustements P1/P2/P3 | `projects/interv360/02-architecture/figma-first-draft-review.md` | Revue V1 ; V1 présentable ou non ; bloquant vs polish |
| **PROMPT-UXUI-006** — Préparation revue transverse UX/UI V1 | Préparer une revue PO / UX / RSSI / Architecte / Chef de projet / BA / QA candidat | `projects/interv360/02-architecture/figma-review-session-preparation.md` | Document préparation ; questions par rôle ; revue ≠ delivery |
| **PROMPT-UXUI-007** — Template compte rendu revue UX/UI V1 | Créer un template de CR vide, à compléter après revue réelle ou simulée | `projects/interv360/02-architecture/figma-review-session-minutes-template.md` | Template CR ; pas de retours fictifs ; delivery bloqué par défaut |
| **PROMPT-UXUI-008** — Enrichissement méthodes rôle après UX/UI V1 | Capitaliser apprentissages UX/UI V1 dans les méthodes rôle avant revue simulée | `projects/interv360/02-architecture/role-methods-enrichment-after-figma-v1.md` | Note enrichissement ; §14 méthodes rôle ; QA candidat identifié |
| **PROMPT-UXUI-009** — Compte rendu revue simulée UX/UI V1 | Produire une revue simulée multi-rôles sans acteurs réels ni participants fictifs | `projects/interv360/02-architecture/figma-review-session-minutes.md` | CR simulé ; validation par rôles SFIA ; delivery bloqué sauf décision explicite |
| **PROMPT-UXUI-010** — Clôture jalon UX/UI V1 | Clôturer le jalon ; décision, ajustements différés, hors MVP, suites possibles | `projects/interv360/02-architecture/figma-v1-closure-summary.md` | Synthèse clôture ; V1 présentable / non définitive ; V2 différée ; delivery bloqué |
| **PROMPT-UXUI-011** — Sync gouvernance UX/UI V1 | Préparer sync Notion ou outil de gouvernance — informative, non publiée par défaut | `notion-sync-figma-v1-closure-summary.md` + `notion-sync-figma-v1-closure-payload.json` | Payload + synthèse ; `publish_to_notion: false` ; revue manuelle |
| **PROMPT-UXUI-012** — Standard candidat UX/UI V1 | Capitaliser un cycle projet en standard candidat avant promotion officielle | `projects/interv360/02-architecture/sfia-figma-v1-standard-candidate.md` | Standard candidat projet ; pas de promotion auto |
| **PROMPT-UXUI-013** — Revue standard candidat UX/UI V1 | Évaluer si un standard candidat est robuste et promotable | `projects/interv360/02-architecture/sfia-figma-v1-standard-candidate-review.md` | Décision revue ; promotable / à renforcer ; promotion différée si besoin |
| **PROMPT-UXUI-014** — Préparation promotion standard officiel | Préparer promotion candidat → officiel sans créer le fichier officiel | `projects/interv360/02-architecture/sfia-figma-v1-standard-promotion-preparation.md` | Dossier promotion ; nom cible ; variables ; conditions |
| **PROMPT-UXUI-015** — Promotion standard officiel UX/UI V1 | Créer un standard officiel générique à partir d'un candidat validé | `docs/standards/ux-ui-v1-governance-standard.md` | Standard officiel `docs/standards/` ; pilote en exemple non normatif |

**Statut famille** : 15 prompts **Candidat** — modèles pilote documentés ; formalisation fichiers `prompts/ux-ui/` à planifier.

**Standard lié** : [`ux-ui-v1-governance-standard.md`](../docs/standards/ux-ui-v1-governance-standard.md) v1.0.

### Garde-fous communs (UX/UI V1 Governance)

- ne pas confondre **maquette** et **spécification** ;
- ne pas produire de **backlog** ;
- ne pas produire de **user stories** ;
- ne pas produire de **code** ;
- ne pas **ouvrir delivery** sans jalon explicite ;
- ne pas **publier automatiquement** dans Notion ou autre outil de gouvernance ;
- ne pas **inventer de participants réels** en revue simulée ;
- **distinguer** revue réelle et revue simulée ;
- **documenter** les contraintes outil (`{design_tool}`, crédits, génératif) ;
- conserver **Git** comme source détaillée.

### Variables génériques recommandées

| Variable | Description |
|----------|-------------|
| `{project_id}` | Identifiant projet (ex. PRJ-INTERV360) |
| `{project_name}` | Nom projet |
| `{phase}` | Phase courante (ex. 02-architecture) |
| `{milestone}` | Jalon UX/UI V1 |
| `{design_tool}` | Outil design (Figma, autre, génératif) |
| `{review_mode}` | `real` ou `simulated` |
| `{roles_involved}` | Rôles SFIA mobilisés |
| `{screens_folder}` | Dossier captures versionnées Git |
| `{governance_tool}` | Notion ou autre outil de pilotage |
| `{delivery_status}` | `blocked` ou `authorized` (explicite) |
| `{source_documents}` | Documents Git source de vérité |

---

*Référentiel SFIA — Prompt Catalog — alimenté par PRJ-INTERV360.*

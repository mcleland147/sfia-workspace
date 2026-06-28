# SFIA — Prompt Catalog

**Statut** : Draft  
**Objet** : catalogue des prompts candidats et réutilisables du produit SFIA  
**Source pilote** : PRJ-INTERV360  
**Nature** : référentiel évolutif

---

## 1. Objectif du catalogue

Ce catalogue recense les **prompts candidats à la capitalisation SFIA**, identifiés à partir du projet pilote Interv360 et des méthodes stabilisées dans `docs/methods/roles/`.

Il ne contient **pas encore** le texte complet de chaque prompt. Pour chaque entrée, il documente :

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
| **PROMPT-ARCH-001** | Revue intégrations et erreurs | Architecture | integration-error-arbitration-review.md | Revue intégrations / erreurs | Architecte | Candidat | Haute |
| **PROMPT-SEC-001** | Revue canal email sécurisé | Sécurité / RSSI | secure-email-intake-review.md | Revue email sécurisé | RSSI / Architecte | Candidat | Haute |
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
- PROMPT-ARCH-001 — Revue intégrations et erreurs
- PROMPT-SEC-001 — Revue canal email sécurisé

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

*Référentiel SFIA — Prompt Catalog — alimenté par PRJ-INTERV360.*

# Interv360 — Préparation Prompt Library lot final — prompts restants

**Projet** : PRJ-INTERV360  
**Cible Notion** : SFIA Prompt Library  
**Lot** : Final — prompts restants  
**Type** : Préparation sync Prompt Library  
**Statut** : Prepared — Not published  
**Publication Notion** : non exécutée  
**API Notion** : non appelée  
**CMP-001 create prompt** : non exécuté  
**Objet** : préparer la publication ou la formalisation des prompts restants dans la Prompt Library

---

## 1. Objectif

Cette note **prépare tous les prompts restants** du catalogue SFIA en **un seul lot consolidé**, **sans publication** Notion.

- **27 prompts** sont déjà publiés (Lots 0, 1 et 2).
- Cette étape traite les **12 prompts restants** référencés en `prompts/prompt-catalog.md` §4.
- Les prompts **insuffisamment documentés** ou nécessitant **arbitrage** sont signalés ; le payload inclut une **synthèse Draft v0.1** uniquement à partir de sources Git existantes — **aucun contenu inventé**.

---

## 2. Sources analysées

| Source | Rôle |
|--------|------|
| `notion-sync-existing-prompt-library-inventory.md` / `.json` | Inventaire global — 39 prompts catalogue, 27 publiés |
| `prompts/prompt-catalog.md` §4 | Catalogue maître — 12 candidats restants |
| `projects/interv360/01-cadrage/` | Livrables pilote (cadrage, arbitrages, UX, rôles, sync Notion) |
| `projects/interv360/02-architecture/` | Logs publication Lots 0–2 ; enrichissements méthodes rôle |
| `docs/methods/roles/` | Méthodes rôle liées (6 Role Methods + README) |
| `docs/methods/methods-structure-check.md` | Source PROMPT-GOV-002 |
| `tools/cmp-001/src/schemas/prompt.schema.json` | Schéma CMP — extension Framing, Governance, Role, Arbitration |
| `exports/notion/prompts.json` | Export Notion *(obsolète — ne reflète pas les 27 publiés)* |
| Logs publication Lots 0, 1, 2 | Référence modèle trace et garde-fous |

*Note : `tools/cmp-001/exports/notion/prompts.json` n'existe pas.*

---

## 3. Prompts déjà publiés

| Famille | Nombre publié | Statut |
|---------|---------------|--------|
| QA / Testeur | 10 | Publié Notion — Lot 0 |
| Architecture & Sécurité | 2 | Publié Notion — Lot 1 |
| UX/UI V1 Governance | 15 | Publié Notion — Lot 2 |
| **Total publié** | **27** | Trace Git par lot |

---

## 4. Prompts restants détectés

| ID | Nom | Famille | Catégorie CMP envisagée | Source | Qualité source | Action |
|----|-----|---------|-------------------------|--------|----------------|--------|
| PROMPT-CAD-001 | Cadrage métier projet | Cadrage | Framing | `business-framing.md` + catalogue §4 | Suffisante (livrable pilote) | Publier après revue payload |
| PROMPT-CAD-002 | Revue cohérence cadrage | Cadrage | Framing | `framing-review.md` + catalogue §4 | Suffisante | Publier après revue payload |
| PROMPT-ARB-001 | Arbitrages MVP | Arbitrages | Arbitration | `mvp-arbitrations.md` + catalogue §4 | Suffisante | Publier après revue payload |
| PROMPT-ARB-002 | Validation arbitrages MVP | Arbitrages | Arbitration | `mvp-arbitration-validation.md` + catalogue §4 | Suffisante | Publier après revue payload |
| PROMPT-UX-001 | Brief UX/UI avant Figma | UX/UI classique | UX/UI | `ux-ui-brief.md` + catalogue §4 | Suffisante | Publier après revue payload |
| PROMPT-UX-002 | Validation brief UX/UI | UX/UI classique | UX/UI | `ux-ui-brief-validation.md` + catalogue §4 | Suffisante | Publier après revue payload |
| PROMPT-UX-003 | Revue dashboard KPI UX | UX/UI classique | UX/UI | `dashboard-kpi-ux-review.md` + catalogue §4 | Suffisante | Publier après revue payload |
| PROMPT-ROLE-001 | Méthode globale par rôle | Rôles | Role | `role-methods-framing.md` + catalogue §4 | Suffisante | Publier après revue payload |
| PROMPT-ROLE-002 | Revue méthode par rôle | Rôles | Role | `role-methods-review.md` + catalogue §4 | Suffisante | Publier après revue payload |
| PROMPT-ROLE-003 | Extraction méthode rôle | Rôles | Role | `docs/methods/roles/` + catalogue §4 | Partielle | Formaliser avant statut Tested |
| PROMPT-GOV-001 | Synchronisation gouvernance Notion projet | Gouvernance | Governance | `notion-sync-summary.md` + payload + CMP-001 | Partielle — ambiguë | Arbitrage requis |
| PROMPT-GOV-002 | Contrôle structure méthodes | Gouvernance | Governance | `methods-structure-check.md` + catalogue §4 | Suffisante (doc contrôle) | Publier après revue payload |

**Doublons export** : aucun `PROMPT-CAD-*`, `PROMPT-ARB-*`, `PROMPT-UX-*`, `PROMPT-ROLE-*`, `PROMPT-GOV-*` dans `exports/notion/prompts.json` *(export obsolète — revérifier avant publication)*.

---

## 5. Analyse de formalisation

| Prompt | Fichier source dédié `prompts/` | Source projet suffisante | Corps exécutable complet | Décision |
|--------|--------------------------------|--------------------------|--------------------------|----------|
| PROMPT-CAD-001 | Non | Oui — `business-framing.md` | Non — livrable, pas prompt formalisé | Publier en synthèse Draft v0.1 |
| PROMPT-CAD-002 | Non | Oui — `framing-review.md` | Non | Publier en synthèse Draft v0.1 |
| PROMPT-ARB-001 | Non | Oui — `mvp-arbitrations.md` | Non | Publier en synthèse Draft v0.1 |
| PROMPT-ARB-002 | Non | Oui — `mvp-arbitration-validation.md` | Non | Publier en synthèse Draft v0.1 |
| PROMPT-UX-001 | Non | Oui — `ux-ui-brief.md` | Non | Publier en synthèse Draft v0.1 |
| PROMPT-UX-002 | Non | Oui — `ux-ui-brief-validation.md` | Non | Publier en synthèse Draft v0.1 |
| PROMPT-UX-003 | Non | Oui — `dashboard-kpi-ux-review.md` | Non | Publier en synthèse Draft v0.1 |
| PROMPT-ROLE-001 | Non | Oui — `role-methods-framing.md` | Non | Publier en synthèse Draft v0.1 |
| PROMPT-ROLE-002 | Non | Oui — `role-methods-review.md` | Non | Publier en synthèse Draft v0.1 |
| PROMPT-ROLE-003 | Non | Partielle — méthodes existantes | Non — workflow extraction non formalisé | Créer fichier `prompts/roles/` avant Tested |
| PROMPT-GOV-001 | Non | Partielle — synthèse courte | Non — méta-sync outillage | Arbitrage requis avant publication |
| PROMPT-GOV-002 | Non | Oui — `methods-structure-check.md` | Non | Publier en synthèse Draft v0.1 |

**Synthèse** : **10 prompts** ont une source projet suffisante pour une synthèse Prompt Library Draft v0.1. **2 prompts** (GOV-001, ROLE-003) nécessitent arbitrage ou formalisation complémentaire avant usage répété — inclus dans le payload avec section **Limites** pour revue.

---

## 6. Catégories CMP

| Catégorie | Usage | Statut |
|-----------|-------|--------|
| QA | Lot 0 publié | Existante |
| Architecture | Lot 1 publié | Existante |
| Security | Lot 1 publié | Existante |
| UX/UI | Lot 2 publié + PROMPT-UX-001 à 003 | Existante |
| **Framing** | PROMPT-CAD-001, PROMPT-CAD-002 | **Ajoutée** |
| **Arbitration** | PROMPT-ARB-001, PROMPT-ARB-002 | **Ajoutée** |
| **Role** | PROMPT-ROLE-001 à 003 | **Ajoutée** |
| **Governance** | PROMPT-GOV-001, PROMPT-GOV-002 | **Ajoutée** |

---

## 7. Payload CMP

| Élément | Valeur |
|---------|--------|
| **Fichier** | `notion-sync-prompt-library-final-lot-cmp-payload.json` |
| **Items** | **12** |
| **summary / content** | Présents pour chaque item — synthèse depuis sources Git |
| **publish_to_notion** | `false` |
| **manual_review_required** | `true` |
| **Validation CMP** | 12/12 items passent `validatePayload('prompt', item)` |

**Prompts exclus du payload** : aucun — les 12 restants sont inclus avec limites documentées pour GOV-001 et ROLE-003.

---

## 8. Points de vigilance

- **Lot final multi-familles** — 4 catégories CMP nouvelles + UX/UI existante.
- **Risque d'inventer du contenu** — payload = synthèse catalogue + livrables projet uniquement.
- Vérifier **doublons** avant publication ; ré-exporter `exports/notion/prompts.json` si possible.
- Pas de **`update prompt`** ; pas de **batch** — 12 commandes distinctes.
- Publication future en **Draft**.
- **PROMPT-GOV-001** : méta-sync Notion — pas de publication automatique ; arbitrage recommandé.
- **PROMPT-ROLE-003** : formalisation fichier prompt recommandée.
- Aucun des 12 n'a de fichier dédié sous `prompts/<famille>/` — formalisation future souhaitable avant Tested.
- Ne pas ouvrir **delivery**, **backlog**, **user stories** ou **code**.

---

## 9. Décision proposée

**Décision proposée** : lot final Prompt Library **partiellement prêt** — **12 items** en payload pour **revue manuelle** ; **formalisation ou arbitrage requis** pour **PROMPT-GOV-001** et **PROMPT-ROLE-003** avant passage au statut Tested ou publication sans réserve.

---

## 10. Prochaine étape

1. **Revue manuelle** du payload final (`notion-sync-prompt-library-final-lot-cmp-payload.json`).
2. Arbitrage **PROMPT-GOV-001** (inclure / exclure / reformuler).
3. Formalisation optionnelle **PROMPT-ROLE-003** sous `prompts/roles/`.
4. Note de **revue payload** dédiée (modèle Lots 1–2).
5. **Publication dédiée** — 12 `create prompt` séquentiels.
6. **Trace Git** publication + **clôture Prompt Library** (39/39).

---

*Préparation Prompt Library lot final — gouvernance SFIA — non publié dans Notion.*

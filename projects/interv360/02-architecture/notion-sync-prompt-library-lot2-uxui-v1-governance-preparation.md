# Interv360 — Préparation Prompt Library Lot 2 — UX/UI V1 Governance

**Projet** : PRJ-INTERV360  
**Cible Notion** : SFIA Prompt Library  
**Lot** : 2 — UX/UI V1 Governance  
**Type** : Préparation sync Prompt Library  
**Statut** : Prepared — Not published  
**Publication Notion** : non exécutée  
**API Notion** : non appelée  
**CMP-001 create prompt** : non exécuté  
**Objet** : préparer la publication des prompts PROMPT-UXUI-001 à PROMPT-UXUI-015 dans la Prompt Library

---

## 1. Objectif

Cette note **prépare le Lot 2** (UX/UI V1 Governance) pour publication dans **SFIA Prompt Library** — **sans publication** dans cette tâche.

- Lots 0 (QA) et 1 (Architecture & Sécurité) déjà publiés — **12 prompts** en Notion.
- Lot 2 = **15 prompts** UXUI — famille validée dans `prompt-catalog-ux-ui-v1-validation.md`.
- Contenu payload = **synthèse** catalogue + sources projet ; Git reste source détaillée.

---

## 2. Sources analysées

| Source | Rôle |
|--------|------|
| `prompts/prompt-catalog.md` §13 | Catalogue maître — 15 prompts UXUI, objectifs, sources, sorties |
| `docs/standards/ux-ui-v1-governance-standard.md` | Standard officiel lié v1.0 |
| `prompt-catalog-ux-ui-v1-validation.md` | Validation manuelle — 15 prompts OK |
| `prompt-catalog-enrichment-after-ux-ui-v1-standard.md` | Capitalisation enrichissement catalogue |
| Fichiers projet `projects/interv360/02-architecture/` | Sources pilote par prompt (voir tableau §3) |
| `notion-sync-existing-prompt-library-inventory.md` | Inventaire — Lot 2 recommandé |
| `tools/cmp-001/src/schemas/prompt.schema.json` | Schéma CMP — catégorie UX/UI ajoutée |
| `exports/notion/prompts.json` | Export Notion *(obsolète)* |

---

## 3. Prompts du lot

| ID | Nom | Catégorie CMP | Statut | Source | Action |
|----|-----|---------------|--------|--------|--------|
| PROMPT-UXUI-001 | Ouverture jalon UX/UI V1 | UX/UI | Draft | `ux-ui-figma-opening-note.md` | Publier après revue payload |
| PROMPT-UXUI-002 | Recherche design / benchmark UX/UI | UX/UI | Draft | `ux-ui-design-research-and-benchmark.md` | Publier après revue payload |
| PROMPT-UXUI-003 | Instructions UX/UI V1 | UX/UI | Draft | `figma-design-instructions.md` | Publier après revue payload |
| PROMPT-UXUI-004 | Production maquette UX/UI V1 | UX/UI | Draft | `figma-production-prompt.md` | Publier — vigilance delivery |
| PROMPT-UXUI-005 | Revue premier jet UX/UI V1 | UX/UI | Draft | `figma-first-draft-review.md` | Publier après revue payload |
| PROMPT-UXUI-006 | Préparation revue transverse UX/UI V1 | UX/UI | Draft | `figma-review-session-preparation.md` | Publier après revue payload |
| PROMPT-UXUI-007 | Template compte rendu revue UX/UI V1 | UX/UI | Draft | `figma-review-session-minutes-template.md` | Publier après revue payload |
| PROMPT-UXUI-008 | Enrichissement méthodes rôle après UX/UI V1 | UX/UI | Draft | `role-methods-enrichment-after-figma-v1.md` | Publier après revue payload |
| PROMPT-UXUI-009 | Compte rendu revue simulée UX/UI V1 | UX/UI | Draft | `figma-review-session-minutes.md` | Publier — vigilance participants |
| PROMPT-UXUI-010 | Clôture jalon UX/UI V1 | UX/UI | Draft | `figma-v1-closure-summary.md` | Publier après revue payload |
| PROMPT-UXUI-011 | Sync gouvernance UX/UI V1 | UX/UI | Draft | `notion-sync-figma-v1-closure-summary.md` + payload | Publier — vigilance méta-sync |
| PROMPT-UXUI-012 | Standard candidat UX/UI V1 | UX/UI | Draft | `sfia-figma-v1-standard-candidate.md` | Publier après revue payload |
| PROMPT-UXUI-013 | Revue standard candidat UX/UI V1 | UX/UI | Draft | `sfia-figma-v1-standard-candidate-review.md` | Publier après revue payload |
| PROMPT-UXUI-014 | Préparation promotion standard officiel | UX/UI | Draft | `sfia-figma-v1-standard-promotion-preparation.md` | Publier après revue payload |
| PROMPT-UXUI-015 | Promotion standard officiel UX/UI V1 | UX/UI | Draft | `docs/standards/ux-ui-v1-governance-standard.md` | Publier après revue payload |

**Doublons** : aucun PROMPT-UXUI-* dans `exports/notion/prompts.json`.

---

## 4. Qualité des sources

| Prompt | Source suffisante | Commentaire |
|--------|-------------------|-------------|
| PROMPT-UXUI-001 à 003 | Oui | Source projet + catalogue §13 + validation |
| PROMPT-UXUI-004 | Oui | `figma-production-prompt.md` détaillé — vigilance delivery |
| PROMPT-UXUI-005 à 008 | Oui | Sources projet documentées |
| PROMPT-UXUI-009 | Oui | Vigilance revue simulée — pas de participants fictifs |
| PROMPT-UXUI-010 | Oui | Synthèse clôture documentée |
| PROMPT-UXUI-011 | Oui (avec vigilance) | Méta-sync Notion — arbitrage recommandé en revue |
| PROMPT-UXUI-012 à 014 | Oui | Chaîne standardisation documentée |
| PROMPT-UXUI-015 | Oui | Standard officiel publié |

**Synthèse** : les **15 prompts** ont une source projet ou standard suffisante pour une **synthèse Prompt Library**. Les **corps exécutables complets** restent dans les sources Git — pas encore formalisés sous `prompts/ux-ui/`.

---

## 5. Catégorie CMP

| Catégorie | Usage | Statut |
|-----------|-------|--------|
| **UX/UI** | PROMPT-UXUI-001 à 015 | Ajoutée au schéma |
| **QA** | Lot 0 publié | Inchangée |
| **Architecture** | Lot 1 publié | Inchangée |
| **Security** | Lot 1 publié | Inchangée |

---

## 6. Payload CMP

| Élément | Valeur |
|---------|--------|
| **Fichier** | `notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload.json` |
| **Items** | **15** |
| **summary / content** | Présents pour chaque item |
| **publish_to_notion** | `false` |
| **manual_review_required** | `true` |

---

## 7. Points de vigilance

- **Lot volumineux** : 15 prompts — 15 commandes `create prompt`.
- Vérifier **doublons** PROMPT-UXUI-* avant publication.
- **Export Notion obsolète** — ré-exporter avant exécution si possible.
- Pas de **`update prompt`** ; pas de **batch**.
- Publication en **Draft**.
- Ne **pas surinterpréter** les sources — synthèse gouvernance uniquement.
- **PROMPT-UXUI-004** : maquette ≠ delivery.
- **PROMPT-UXUI-009** : pas de participants fictifs.
- **PROMPT-UXUI-011** : méta-sync — ne pas confondre avec publication auto Notion.
- Ne pas ouvrir **delivery**, **backlog**, **user stories** ou **code**.

---

## 8. Décision proposée

**Décision proposée** : **Lot 2 UX/UI V1 Governance prêt pour revue manuelle avant publication**.

Les 15 prompts sont suffisamment documentés (catalogue §13, validation, sources projet) pour une capitalisation Prompt Library en synthèse Draft v0.1.

---

## 9. Prochaine étape

1. **Revue manuelle** du payload Lot 2.
2. **Publication dédiée** des 15 prompts si validé.
3. **Trace Git** de publication Lot 2.
4. **Passage au Lot 3** (Cadrage & Arbitrages) après vérification visuelle Notion.

---

*Préparation Prompt Library Lot 2 — gouvernance SFIA — non publié dans Notion.*

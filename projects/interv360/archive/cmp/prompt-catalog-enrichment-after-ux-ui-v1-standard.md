# Interv360 — Enrichissement catalogue prompts après standard UX/UI V1

**Projet** : PRJ-INTERV360  
**Phase source** : 02-architecture  
**Standard source** : `docs/standards/ux-ui-v1-governance-standard.md`  
**Statut** : Completed  
**Type** : Capitalisation prompts  
**Objet** : tracer l'enrichissement du catalogue prompts après promotion du standard UX/UI V1

---

## 1. Objectif

Cette note trace l'**enrichissement du catalogue prompts SFIA** après création du **standard officiel UX/UI V1** (`docs/standards/ux-ui-v1-governance-standard.md`).

Le standard prévoit l'**amélioration continue** à partir des prompts et catalogues utilisés. Cette tâche capitalise les **modèles et usages** du cycle Figma V1 Interv360 en **famille catalogue** réutilisable — **sans modifier** les documents sources projet ni ouvrir le chantier QA / Testeur.

---

## 2. Catalogue enrichi

| Fichier | Action |
|---------|--------|
| `prompts/prompt-catalog.md` | **Enrichi** — section §13 UX/UI V1 Governance ajoutée |

Aucun nouveau fichier catalogue créé — `prompts/catalog.md` n'existe pas ; le registre existant est `prompts/prompt-catalog.md`.

---

## 3. Famille ajoutée

| Attribut | Valeur |
|----------|--------|
| **Famille** | UX/UI V1 Governance |
| **Prompts ajoutés** | **15** (PROMPT-UXUI-001 à PROMPT-UXUI-015) |
| **Standard lié** | `docs/standards/ux-ui-v1-governance-standard.md` v1.0 |
| **Statut prompts** | Candidat — modèles pilote ; formalisation `prompts/ux-ui/` ultérieure |

---

## 4. Prompts ajoutés

| # | Prompt | Source Interv360 | Usage générique |
|---|--------|------------------|-----------------|
| 1 | PROMPT-UXUI-001 — Ouverture jalon UX/UI V1 | `ux-ui-figma-opening-note.md` | Cadrer jalon ; garde-fous ; design ≠ delivery |
| 2 | PROMPT-UXUI-002 — Recherche design / benchmark | `ux-ui-design-research-and-benchmark.md` | Direction visuelle ; principes UI |
| 3 | PROMPT-UXUI-003 — Instructions UX/UI V1 | `figma-design-instructions.md` | Écrans autorisés / interdits ; composants, wording |
| 4 | PROMPT-UXUI-004 — Production maquette V1 | `figma-production-prompt.md` | Maquette dans `{design_tool}` ; exclusions MVP |
| 5 | PROMPT-UXUI-005 — Revue premier jet | `figma-first-draft-review.md` | V1 présentable ; P1/P2/P3 ; bloquant vs polish |
| 6 | PROMPT-UXUI-006 — Préparation revue transverse | `figma-review-session-preparation.md` | Cadrage revue ; questions par rôle |
| 7 | PROMPT-UXUI-007 — Template CR revue | `figma-review-session-minutes-template.md` | Structure CR vide ; pas de retours fictifs |
| 8 | PROMPT-UXUI-008 — Enrichissement méthodes rôle | `role-methods-enrichment-after-figma-v1.md` | Capitaliser avant revue simulée |
| 9 | PROMPT-UXUI-009 — CR revue simulée | `figma-review-session-minutes.md` | Validation par rôles ; simulation explicite |
| 10 | PROMPT-UXUI-010 — Clôture jalon UX/UI V1 | `2026-06-28-figma-v1-closure-summary.md` | Acter clôture ; V2 ; delivery bloqué |
| 11 | PROMPT-UXUI-011 — Sync gouvernance | `2026-06-28-notion-sync-2026-06-28-figma-v1-closure-summary.md` + payload JSON | Payload ; non publié par défaut |
| 12 | PROMPT-UXUI-012 — Standard candidat | `sfia-figma-v1-standard-candidate.md` | Candidat projet ; pas promotion auto |
| 13 | PROMPT-UXUI-013 — Revue standard candidat | `sfia-figma-v1-standard-candidate-review.md` | Robustesse ; promotable / différé |
| 14 | PROMPT-UXUI-014 — Préparation promotion | `sfia-figma-v1-standard-promotion-preparation.md` | Nom cible ; variables ; conditions |
| 15 | PROMPT-UXUI-015 — Promotion standard officiel | `docs/standards/ux-ui-v1-governance-standard.md` | Standard générique `docs/standards/` |

---

## 5. Garde-fous capitalisés

- ne pas confondre maquette et spécification ;
- ne pas produire backlog, user stories ou code ;
- ne pas ouvrir delivery sans jalon explicite ;
- ne pas publier automatiquement dans Notion ou autre outil ;
- ne pas inventer de participants réels en revue simulée ;
- distinguer revue réelle et revue simulée ;
- documenter contraintes outil ;
- conserver Git comme source détaillée.

---

## 6. Valeur SFIA

| Valeur | Description |
|--------|-------------|
| **Réutilisabilité** | 15 prompts candidats alignés sur séquence standard |
| **Alignement standard officiel** | Famille liée à `ux-ui-v1-governance-standard.md` |
| **Continuité projet → standard → prompts** | Interv360 comme modèle ; généralisation via variables |
| **Prévention delivery prématuré** | Garde-fous communs dans catalogue |
| **Meilleure reproductibilité** | Tableau source / sortie par prompt |
| **Support futur QA / Testeur** | PROMPT-UXUI-006 / 009 préparent testabilité sans ouvrir le chantier |

---

## 7. Prochaines actions

1. **Valider visuellement** le catalogue prompts (`prompts/prompt-catalog.md` §13).
2. **Ne pas ouvrir QA / Testeur** tant que l'enrichissement prompts n'est pas validé.
3. **Après validation** — ouvrir la réflexion QA / Testeur (méthode candidate).
4. **Ne pas ouvrir** delivery, backlog, user stories ou code.

---

## 8. Conclusion

Le **catalogue prompts** est enrichi avec la famille **UX/UI V1 Governance**, alignée sur le **standard officiel** `ux-ui-v1-governance-standard.md`.

Cette capitalisation rend la **séquence UX/UI V1 réutilisable** avant d'ouvrir un nouveau chantier méthodologique **QA / Testeur**.

---

*Capitalisation prompts — projet Interv360 — gouvernance SFIA.*

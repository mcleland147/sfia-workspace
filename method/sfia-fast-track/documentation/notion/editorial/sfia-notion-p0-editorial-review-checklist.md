# SFIA Notion P0 — Checklist de relecture éditoriale

**Document :** `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-p0-editorial-review-checklist.md`
**Horodatage :** 2026-07-13 13:11 Europe/Paris (CEST)
**Cycle :** Préparation Notion — Cycle 2
**Statut :** Draft — outil de revue Morris / ChatGPT
**Commit référence contrat :** `6407913689b14e84e0a487a3137ff290bb6e2ff8` (PR #191)
**Pack couvert :** 10 brouillons P0 + README

---

## Mode d'emploi

Cocher après revue de **chaque** brouillon et du pack global. Une case non cochée = réserve à traiter avant PR ou cycle 3.

---

## A. Conformité contrat cycle 1

| # | Critère | ☐ |
|---|---------|---|
| A1 | Aligné `sfia-notion-product-vision.md` | |
| A2 | Aligné `sfia-notion-information-architecture.md` (pages P0 §00–08, 11) | |
| A3 | Aligné `sfia-notion-publication-governance.md` | |
| A4 | Aligné `sfia-notion-mvp-backlog.md` (P0 uniquement) | |
| A5 | §09 cas d'usage **absent** (P1) | |
| A6 | §10 référence **non simulée** par long draft | |

---

## B. Par brouillon (répéter ×10)

| # | Critère | ☐ |
|---|---------|---|
| B1 | En-tête obligatoire complet (10 champs) | |
| B2 | Corps : 10 sections présentes | |
| B3 | Audience et niveau L0–L4 cohérents | |
| B4 | « À retenir en 30 secondes » actionnable | |
| B5 | Pas de copie intégrale catalog / template / foundation | |
| B6 | Sources Git listées et **existantes** sur `main` | |
| B7 | Badge **Candidate** sur v2.5 où pertinent | |
| B8 | **v2.4 = baseline** explicitée | |
| B9 | Liens internes vers autres drafts | |
| B10 | Métadonnées publication futures renseignées | |
| B11 | Propriétaire = **Morris** (validé Morris 2026-07-13) | |
| B12 | Aucune décision Morris présentée comme validée si non acquise | |

---

## C. Exigences spécifiques par page

| Page | Critère | ☐ |
|------|---------|---|
| 00 Accueil | 3 parcours + CTA + schéma Git↔Notion | |
| 01 | Acteurs Morris/ChatGPT/Cursor + statuts doc | |
| 02 | Bénéfices sourcés — pas de claim commercial inventé | |
| 03 | Readiness **unique** + séquence cycle | |
| 04 | 15 cycles + badge Candidate + 4 profils | |
| 05 | ≥ **8** demandes types dans matrice | |
| 06 | Distinction template/prompt/checklist/livrable | |
| 07 | Interdictions raw sync / API / CMP | |
| 08 | ≥ **10** étapes checklist mise en place | |
| 11 | ≥ **20** termes glossaire | |

---

## D. Cohérence transversale

| # | Critère | ☐ |
|---|---------|---|
| D1 | Termes glossaire alignés avec les autres pages | |
| D2 | Même formulation « Git prime » | |
| D3 | Même position baseline v2.4 / candidate v2.5 | |
| D4 | Parcours Accueil référencent des pages existantes | |
| D5 | README liste les 11 fichiers correctement | |

---

## E. Sécurité et garde-fous

| # | Critère | ☐ |
|---|---------|---|
| E1 | Aucun secret, token, credential | |
| E2 | Aucune instruction **positive** raw sync / auto-publish | |
| E3 | Aucune instruction API Notion exécutable | |
| E4 | Aucune référence action `tools/cmp-001/` | |
| E5 | Aucun contenu projet brut (Interv360/Chantiers360) | |
| E6 | Aucune promotion SFIA v2.5/v2.6 baseline | |
| E7 | Aucune relance SFIA 3.0 | |
| E8 | Mentions d'interdiction = conformes (pas procédure) | |

---

## F. Lisibilité et pédagogie

| # | Critère | ☐ |
|---|---------|---|
| F1 | Jargon Git/Cursor réduit pour audiences métier | |
| F2 | Termes techniques définis ou liés au glossaire | |
| F3 | Progressive disclosure respectée | |
| F4 | Tables et listes scannables | |

---

## G. Verdict pack (Morris)

| Verdict | ☐ |
|---------|---|
| **READY** — pack validé pour PR Git | ☑ |
| **READY WITH RESERVES** — réserves listées ci-dessous | |
| **NOT READY** — corrections requises | |

**Validation Morris :** pack éditorial P0 validé le **2026-07-13**. Propriétaire éditorial : **Morris**. Publication Notion : **non autorisée** dans ce cycle. Cycle 3 : **GO Morris séparé**.

### Réserves documentées

_(aucune réserve bloquante pour PR Git — handoff SHA non bloquant)_

---

## H. Suite autorisée après validation

| Étape | Gate |
|-------|------|
| Commit + PR pack `editorial/` | GO Morris |
| Cycle 3 publication Notion | GO distinct post-merge |

**Interdit sans GO :** publication Notion, API, CMP, merge cycle 3.

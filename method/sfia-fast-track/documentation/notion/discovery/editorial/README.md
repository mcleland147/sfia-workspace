# SFIA Discovery — Editorial PD-02A (Hub + Acte I)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillons éditoriaux Discovery |
| **Cycle** | PD-02A — Préparation éditoriale Git |
| **Propriétaire** | Morris |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Branche projet** | `documentation/sfia-discovery-pd-02a-hub-acte-i` |
| **HEAD / base** | `c1d96de132035bf0ef0e855620b2322600bc5aa8` |
| **Horodatage** | 2026-07-14 19:05 Europe/Paris (CEST) |
| **Implémentation Notion** | **Non réalisée** — gate PD-02B futur |
| **Capitalisation méthode** | Non |

---

## 1. Rôle du dossier

Ce répertoire contient les **brouillons éditoriaux complets** destinés au lecteur final de l'expérience SFIA Discovery — phase PD-02A du Product Design.

Ces fichiers sont la **source Git stable** pour une future implémentation Notion (PD-02B). Ils ne sont **pas** le contrat Product Design (PD-01) ni les anciens drafts P0 §00–11.

---

## 2. Positionnement PD-02A / PD-02B

| Phase | Périmètre | Notion |
|-------|-----------|--------|
| **PD-02A (présent)** | Rédaction Markdown complète Hub + Acte I | Aucune action |
| **PD-02B (futur)** | Matérialisation L0 après validation Morris + merge Git recommandé | Création pages manuelle |

> La source éditoriale Git doit être validée avant toute implémentation Notion.

---

## 3. Inventaire des brouillons

| # | Fichier | Rôle |
|---|---------|------|
| 1 | [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md) | Future page d'accueil Discovery |
| 2 | [sfia-discovery-act-01-why-sfia-exists-editorial-draft.md](sfia-discovery-act-01-why-sfia-exists-editorial-draft.md) | Acte I — Pourquoi SFIA existe |

---

## 4. Ordre de lecture

1. **Hub** — orientation, promesse, parcours temps, portes d'entrée
2. **Acte I** — reconnaissance du problème, transition vers Acte II

Le README gouverne ; il n'est **pas** un contenu lecteur final.

---

## 5. Sources canoniques

### Product Design PD-01

- `../discovery-product-design/` — vision, actes, personas, contrat, IA cible, roadmap, acceptation

### Méthode (lecture, pas recopie)

- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

### Matière P0 (inspiration, pas copie)

- `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-00-home-editorial-draft.md`
- `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-01-understand-sfia-editorial-draft.md`
- `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-02-value-proposition-editorial-draft.md`

---

## 6. Règles éditoriales applicables

- Ton confiant, concret, pédagogique — jamais sensationnaliste
- **80 % métier / valeur** — 20 % fonctionnel sur Hub et Acte I
- Preuve avant promesse · NovaBuild = cas composite · aucun chiffre non sourcé
- Transparence fonctionnelle · opacité méthodologique sélective
- Phrases courtes · paragraphes scannables · termes SFIA définis au premier usage

Référence complète : `../discovery-product-design/05-sfia-discovery-editorial-contract.md`

---

## 7. Garde-fous

- Ne pas modifier le corpus Product Design PD-01
- Ne pas modifier les drafts P0, UX ou method/core
- Ne pas créer ou modifier de page Notion
- Ne pas exposer prompts canoniques, routing exhaustif, protected paths
- Ne pas promettre autonomie totale, zéro risque, succès garanti
- Ne pas capitaliser en baseline sans GO Morris explicite

---

## 8. Décisions Morris validées

- PD-01 mergé et clôturé ✓
- GO PD-02A ✓
- Notion = IDE métier SFIA (vision Candidate) ✓
- Hub + Acte I = premiers contenus éditoriaux ✓
- NovaBuild = cas pédagogique composite ✓
- Aucune action Notion dans PD-02A ✓

---

## 9. Décisions restantes

| Gate | Objet |
|------|-------|
| **M1** | Valider ou corriger le Hero recommandé |
| **M2** | Valider ou corriger le Hub |
| **M3** | Valider ou corriger l'Acte I |
| **M4** | Valider équilibre valeur / pédagogie / confidentialité |
| **M5** | GO commit, push, PR PD-02A |
| **M6** | GO PD-02B (après merge recommandé) |

---

## 10. Critères d'entrée PD-02B

- Brouillons Hub + Acte I validés Morris
- Commit / merge Git recommandé
- Review pack et handoff vérifiés
- Aucune réserve bloquante (confidentialité, promesses, claims)
- GO Morris explicite pour implémentation Notion L0

---

## 11. Liens

→ [Product Design README](../discovery-product-design/README.md) · [Roadmap PD-02A](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

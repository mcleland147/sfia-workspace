# SFIA Discovery — Editorial (brouillons lecteur)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillons éditoriaux Discovery |
| **Cycle courant** | PD-04A — Acte III NovaBuild (préparation Git) |
| **Propriétaire** | Morris |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Branche projet** | `documentation/sfia-discovery-act-03-novabuild-editorial` |
| **HEAD / base** | `a3b42d9c1bfcec2645ca6202e3c460da75e294f8` |
| **Horodatage** | 2026-07-14 22:50 Europe/Paris (CEST) |
| **Implémentation Notion** | PD-02B ✓ · PD-03B ✓ · PD-04B futur |
| **Capitalisation méthode** | Non |

---

## 1. Rôle du dossier

Brouillons **destinés au lecteur final** de SFIA Discovery — source Git stable avant implémentation Notion (cycles PD-nB).

Non substituts au Product Design PD-01 ni aux drafts P0 §00–11.

---

## 2. Séquence narrative (decision Morris)

```text
Hub + Acte I ✓ → Acte II ✓ → Acte III NovaBuild (en cours) → IV–V → VI–VII
```

**Acte II avant Acte III** — le contraste et le modèle SFIA précèdent le fil rouge composite.

---

## 3. Inventaire des brouillons

| # | Fichier | Acte | Statut editorial Git |
|---|---------|------|----------------------|
| 1 | [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md) | Hub | ✓ mergé (PD-02A) |
| 2 | [sfia-discovery-act-01-why-sfia-exists-editorial-draft.md](sfia-discovery-act-01-why-sfia-exists-editorial-draft.md) | I | ✓ mergé (PD-02A) |
| 3 | [sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) | II | ✓ mergé (PD-03A) |
| 4 | [sfia-discovery-act-03-follow-novabuild-editorial-draft.md](sfia-discovery-act-03-follow-novabuild-editorial-draft.md) | III | **PD-04A — revue** |
| 5 | [sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md) | III.1 | **PD-04A — revue** |
| 6 | [sfia-discovery-act-03-2-design-and-ux-editorial-draft.md](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md) | III.2 | **PD-04A — revue** |
| 7 | [sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md) | III.3 | **PD-04A — revue** |
| 8 | [sfia-discovery-act-03-4-release-and-run-editorial-draft.md](sfia-discovery-act-03-4-release-and-run-editorial-draft.md) | III.4 | **PD-04A — revue** |

---

## 4. Ordre de lecture

1. **Hub** — orientation · parcours · portes persona
2. **Acte I** — pourquoi SFIA existe
3. **Acte II** — comment SFIA organise le projet
4. **Acte III** — fil rouge NovaBuild (hub + III.1 → III.4)

---

## 5. Positionnement cycles A / B

| Incrément | Editorial Git (A) | Notion (B) |
|-----------|-------------------|------------|
| Hub + I | PD-02A ✓ | PD-02B ✓ |
| Acte II | PD-03A ✓ | PD-03B ✓ |
| Acte III NovaBuild | **PD-04A** (présent — revue) | PD-04B — futur |
| Acte IV–V | PD-05A — futur | PD-05B |

**NovaBuild** = cas pédagogique composite — entreprise fictive · catégories livrables inspirées d'actifs SFIA vérifiables.

Référence roadmap : [07-sfia-discovery-transformation-roadmap.md](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

---

## 6. Règles éditoriales

Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contract.md`

- 80 % métier / valeur · 20 % fonctionnel
- NovaBuild composite · aucun chiffre non sourcé
- Opacité méthodologique sélective · chemins projects/ réservés gouvernance

---

## 7. Garde-fous

- Aucune page Notion · aucun prompt catalog · aucune capitalisation baseline

---

## 8. Décisions Morris validées

- PD-01 · PD-02A · PD-03A mergés ✓
- PD-02B · PD-03B finalisés Notion ✓
- Acte II avant Acte III ✓
- NovaBuild composite ✓

---

## 9. Gates Acte III

| Gate | Objet | Statut |
|------|-------|--------|
| **M1** | Structure Acte III | **Validée** |
| **M2** | Crédibilité NovaBuild | **Validée** |
| **M3** | Fiction / actifs réels | **Validée** |
| **M4** | Niveau de preuve et exposition | **Validée** |
| **M5** | Contenu éditorial complet | **Validée** |
| **M6** | Commit / push / PR | **Exécutée — PR #198 ouverte** |
| **M6 bis** | GO merge Morris | **En attente** |
| **M7** | GO PD-04B Notion | **Hors cycle — futur** |

---

## 10. Critères d'entrée PD-04B

- Acte III validé Morris · merge Git recommandé · GO implémentation Notion L0
- Dépendance : PD-03A/B ✓

---

## 11. Liens

→ [Product Design](../discovery-product-design/README.md) · [Roadmap](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

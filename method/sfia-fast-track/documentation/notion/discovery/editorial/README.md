# SFIA Discovery — Editorial (brouillons lecteur)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillons éditoriaux Discovery |
| **Cycle courant** | PD-06A — Actes VI et VII (préparation Git) |
| **Propriétaire** | Morris |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Branche projet** | `documentation/sfia-discovery-acts-06-07-editorial` |
| **HEAD / base** | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
| **Implémentation Notion** | PD-02B ✓ · PD-03B ✓ · PD-04B ✓ · PD-05B ✓ · PD-06B futur |
| **Capitalisation méthode** | Non |

---

## 1. Rôle du dossier

Brouillons **destinés au lecteur final** de SFIA Discovery — source Git stable avant implémentation Notion (cycles PD-nB).

Non substituts au Product Design PD-01 ni aux drafts P0 §00–11.

---

## 2. Séquence narrative (decision Morris)

```text
Hub + Acte I ✓ → Acte II ✓ → Acte III ✓ → Acte IV ✓ → Acte V ✓ → Acte VI–VII (en cours) 
```

**Acte II avant Acte III** — le contraste précède le fil rouge NovaBuild.

---

## 3. Inventaire des brouillons

| # | Fichier | Acte | Statut editorial Git |
|---|---------|------|----------------------|
| 1 | [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md) | Hub | ✓ mergé (PD-02A) |
| 2 | [sfia-discovery-act-01-why-sfia-exists-editorial-draft.md](sfia-discovery-act-01-why-sfia-exists-editorial-draft.md) | I | ✓ mergé (PD-02A) |
| 3 | [sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) | II | ✓ mergé (PD-03A) |
| 4 | [sfia-discovery-act-03-follow-novabuild-editorial-draft.md](sfia-discovery-act-03-follow-novabuild-editorial-draft.md) | III | ✓ mergé (PD-04A) |
| 5 | [sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md) | III.1 | ✓ mergé (PD-04A) |
| 6 | [sfia-discovery-act-03-2-design-and-ux-editorial-draft.md](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md) | III.2 | ✓ mergé (PD-04A) |
| 7 | [sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md) | III.3 | ✓ mergé (PD-04A) |
| 8 | [sfia-discovery-act-03-4-release-and-run-editorial-draft.md](sfia-discovery-act-03-4-release-and-run-editorial-draft.md) | III.4 | ✓ mergé (PD-04A) |
| 9 | [sfia-discovery-act-04-what-sfia-produces-editorial-draft.md](sfia-discovery-act-04-what-sfia-produces-editorial-draft.md) | IV | ✓ mergé (PD-05A · PR #199) |
| 10 | [sfia-discovery-act-05-why-it-works-editorial-draft.md](sfia-discovery-act-05-why-it-works-editorial-draft.md) | V | ✓ mergé (PD-05A · PR #199) |
| 11 | [sfia-discovery-act-06-project-yourself-editorial-draft.md](sfia-discovery-act-06-project-yourself-editorial-draft.md) | VI | **PD-06A — revue** |
| 12 | [sfia-discovery-act-06-1-sme-leader-editorial-draft.md](sfia-discovery-act-06-1-sme-leader-editorial-draft.md) | VI.1 | **PD-06A — revue** |
| 13 | [sfia-discovery-act-06-2-project-manager-po-editorial-draft.md](sfia-discovery-act-06-2-project-manager-po-editorial-draft.md) | VI.2 | **PD-06A — revue** |
| 14 | [sfia-discovery-act-06-3-technical-team-editorial-draft.md](sfia-discovery-act-06-3-technical-team-editorial-draft.md) | VI.3 | **PD-06A — revue** |
| 15 | [sfia-discovery-act-06-4-esn-partner-editorial-draft.md](sfia-discovery-act-06-4-esn-partner-editorial-draft.md) | VI.4 | **PD-06A — revue** |
| 16 | [sfia-discovery-act-07-explore-the-method-editorial-draft.md](sfia-discovery-act-07-explore-the-method-editorial-draft.md) | VII | **PD-06A — revue** |

---

## 4. Ordre de lecture

1. **Hub** — orientation · parcours · portes persona
2. **Acte I** — pourquoi SFIA existe
3. **Acte II** — comment SFIA organise le projet
4. **Acte III** — fil rouge NovaBuild (hub + III.1 → III.4)
5. **Acte IV** — ce que SFIA produit
6. **Acte V** — pourquoi cela fonctionne
7. **Acte VI** — se projeter (hub + VI.1 → VI.4)
8. **Acte VII** — explorer la méthode

---

## 5. Positionnement cycles A / B

| Incrément | Editorial Git (A) | Notion (B) |
|-----------|-------------------|------------|
| Hub + I | PD-02A ✓ | PD-02B ✓ |
| Acte II | PD-03A ✓ | PD-03B ✓ |
| Acte III NovaBuild | PD-04A ✓ (PR #198) | PD-04B ✓ |
| Actes IV–V | PD-05A ✓ (PR #199) | PD-05B ✓ |
| Actes VI–VII | **PD-06A** (présent — revue) | PD-06B — futur |
| Migration legacy | PD-07A — futur | PD-07B |

**NovaBuild** = cas pédagogique composite — catégories livrables inspirées d'actifs SFIA vérifiables.

Référence roadmap : [07-sfia-discovery-transformation-roadmap.md](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

---

## 6. Règles éditoriales

Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contract.md`

- 80 % métier / valeur · 20 % fonctionnel (L2)
- Preuve avant promesse · quatre personas · sept portes max (Acte VII)
- Opacité méthodologique sélective

---

## 7. Garde-fous

- Aucune page Notion PD-06B · aucun prompt catalog · aucune capitalisation baseline
- Aucune promesse commerciale · licensing · redistribution (persona ESN)

---

## 8. Décisions Morris validées

- PD-01 · PD-02A · PD-03A · PD-04A · PD-05A mergés ✓
- PD-02B · PD-03B · PD-04B · PD-05B finalisés Notion ✓
- Acte II avant Acte III ✓
- NovaBuild composite ✓
- PR #199 mergée · main @ `96d1580` ✓

---

## 9. Gates Acte VI–VII (PD-06A)

| Gate | Objet | Statut |
|------|-------|--------|
| **M1** | Structure Acte VI · quatre personas | En attente |
| **M2** | Différenciation projections persona | En attente |
| **M3** | Structure Acte VII · sept portes | En attente |
| **M4** | Frontière pédagogique / protégé | En attente |
| **M5** | Continuité V → VI → VII → Hub | En attente |
| **M6** | Contenu complet exploitable | En attente |
| **M7** | GO commit / push / PR | En attente |
| **M8** | GO PD-06B Notion | Hors cycle — futur |

---

## 10. Critères d'entrée PD-06B

- Actes VI et VII validés Morris · merge Git recommandé · GO implémentation Notion L0
- Dépendance : PD-05A/B ✓

---

## 11. Liens

→ [Product Design](../discovery-product-design/README.md) · [Roadmap](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

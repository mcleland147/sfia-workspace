# SFIA Discovery — Editorial (brouillons lecteur)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillons éditoriaux Discovery |
| **Cycle courant** | PD-07A — migration legacy (préparation Git) |
| **Propriétaire** | Morris |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Branche projet** | `documentation/sfia-discovery-legacy-migration-plan` |
| **HEAD / base** | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` |
| **Horodatage** | 2026-07-15 22:30 Europe/Paris (CEST) |
| **Implémentation Notion** | PD-02B ✓ · PD-03B ✓ · PD-04B ✓ · PD-05B ✓ · PD-06B ✓ · PD-07B futur |
| **Capitalisation méthode** | Non |
| **Migration Notion** | **Non exécutée** — plan Git seulement |

---

## 1. Rôle du dossier

Brouillons **destinés au lecteur final** de SFIA Discovery — source Git stable avant / pendant l'implémentation Notion (cycles PD-nB).

Non substituts au Product Design PD-01 ni aux drafts P0 §00–11.

Le plan de migration legacy (PD-07A) vit dans :

`../migration/`

---

## 2. Séquence narrative (décision Morris)

```text
Hub + Acte I ✓ → Acte II ✓ → Acte III ✓ → Acte IV ✓ → Acte V ✓ → Acte VI ✓ → Acte VII ✓
→ migration legacy (PD-07A en cours) → QA (PD-08) → capitalisation? (PD-09)
```

**Acte II avant Acte III** — le contraste précède le fil rouge NovaBuild.

---

## 3. Inventaire des brouillons Discovery

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
| 11 | [sfia-discovery-act-06-project-yourself-editorial-draft.md](sfia-discovery-act-06-project-yourself-editorial-draft.md) | VI | ✓ mergé (PD-06A · PR #200) |
| 12 | [sfia-discovery-act-06-1-sme-leader-editorial-draft.md](sfia-discovery-act-06-1-sme-leader-editorial-draft.md) | VI.1 | ✓ mergé (PD-06A · PR #200) |
| 13 | [sfia-discovery-act-06-2-project-manager-po-editorial-draft.md](sfia-discovery-act-06-2-project-manager-po-editorial-draft.md) | VI.2 | ✓ mergé (PD-06A · PR #200) |
| 14 | [sfia-discovery-act-06-3-technical-team-editorial-draft.md](sfia-discovery-act-06-3-technical-team-editorial-draft.md) | VI.3 | ✓ mergé (PD-06A · PR #200) |
| 15 | [sfia-discovery-act-06-4-esn-partner-editorial-draft.md](sfia-discovery-act-06-4-esn-partner-editorial-draft.md) | VI.4 | ✓ mergé (PD-06A · PR #200) |
| 16 | [sfia-discovery-act-07-explore-the-method-editorial-draft.md](sfia-discovery-act-07-explore-the-method-editorial-draft.md) | VII | ✓ mergé (PD-06A · PR #200) |

---

## 4. Inventaire migration (PD-07A)

| # | Fichier | Rôle | Statut |
|---|---------|------|--------|
| 17 | [../migration/sfia-discovery-legacy-content-inventory.md](../migration/sfia-discovery-legacy-content-inventory.md) | Inventaire legacy §00–11 | **PD-07A — revue** |
| 18 | [../migration/sfia-discovery-legacy-migration-plan.md](../migration/sfia-discovery-legacy-migration-plan.md) | Plan PD-07B réversible | **PD-07A — revue** |

---

## 5. Ordre de lecture

1. **Hub** — orientation · parcours · portes persona
2. **Acte I** — pourquoi SFIA existe
3. **Acte II** — comment SFIA organise le projet
4. **Acte III** — fil rouge NovaBuild (hub + III.1 → III.4)
5. **Acte IV** — ce que SFIA produit
6. **Acte V** — pourquoi cela fonctionne
7. **Acte VI** — se projeter (hub + VI.1 → VI.4)
8. **Acte VII** — explorer la méthode
9. **Migration** — inventaire / plan (équipe méthode · pas parcours lecteur)

---

## 6. Positionnement cycles A / B

| Incrément | Editorial Git (A) | Notion (B) |
|-----------|-------------------|------------|
| Hub + I | PD-02A ✓ | PD-02B ✓ |
| Acte II | PD-03A ✓ | PD-03B ✓ |
| Acte III NovaBuild | PD-04A ✓ (PR #198) | PD-04B ✓ |
| Actes IV–V | PD-05A ✓ (PR #199) | PD-05B ✓ |
| Actes VI–VII | PD-06A ✓ (PR #200) | PD-06B ✓ |
| Migration legacy | **PD-07A** (présent — revue) | PD-07B — futur |
| QA narrative | PD-08 — futur | — |

**NovaBuild** = cas pédagogique composite — catégories livrables inspirées d'actifs SFIA vérifiables.

Référence roadmap : [07-sfia-discovery-transformation-roadmap.md](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

---

## 7. Règles éditoriales

Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contract.md`

- 80 % métier / valeur · 20 % fonctionnel (L2)
- Preuve avant promesse · quatre personas · sept portes max (Acte VII)
- Opacité méthodologique sélective
- Migration : **aucune suppression** · archivage seulement après GO Morris

---

## 8. Garde-fous

- Aucune page Notion PD-07B · aucun archivage · aucune suppression
- Aucun prompt catalog · aucune capitalisation baseline
- Drafts P0 legacy **non modifiés** dans ce cycle

---

## 9. Décisions Morris validées

- PD-01 · PD-02A · PD-03A · PD-04A · PD-05A · PD-06A mergés ✓
- PD-02B · PD-03B · PD-04B · PD-05B · PD-06B finalisés Notion ✓
- Acte II avant Acte III ✓
- NovaBuild composite ✓
- PR #199 mergée · PD-05A/B ✓
- PR #200 mergée · merge commit `9dd9dcf` · PD-06A/B ✓

---

## 10. Gates migration (PD-07A)

| Gate | Objet | Statut |
|------|-------|--------|
| **M1** | Inventaire legacy complet et sourcé | En attente |
| **M2** | Mapping legacy → Discovery | En attente |
| **M3** | Stratégie proposée par page | En attente |
| **M4** | Contrôle absence de perte | En attente |
| **M5** | Plan PD-07B réversible | En attente |
| **M6** | Contenu complet exploitable | En attente |
| **M7** | GO commit / push / PR | En attente |
| **M8** | GO PD-07B Notion | Hors cycle — futur |

---

## 11. Critères d'entrée PD-07B

- Inventaire et plan validés Morris · merge Git recommandé · GO exécution Notion
- Dépendance : PD-06A/B ✓
- Lot 0 inventaire Notion réel obligatoire avant toute redirection

---

## 12. Liens

→ [Product Design](../discovery-product-design/README.md) · [Roadmap](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md) · [Migration](../migration/sfia-discovery-legacy-migration-plan.md)

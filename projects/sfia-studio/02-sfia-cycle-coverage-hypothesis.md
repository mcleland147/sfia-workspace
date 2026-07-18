# SFIA Studio — Hypothèse de couverture des cycles SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — **projet officiel** (G1) |
| **Document** | `02-sfia-cycle-coverage-hypothesis.md` |
| **Cycle** | 1 — Cadrage (document **historique** de pré-cadrage) |
| **Profil** | Critical (historique) |
| **Baseline** | SFIA v2.6 (Option C — consommée) |
| **Statut** | `historical-pre-framing-synchronized-after-detailed-framing-validation` |
| **Référence** | Template v2.6 §4.1 ; routing guide §4–§6 |

> **Règle (G3-R5) :** les 15 cycles représentent la **cible de couverture progressive** du produit. Aucun incrément n’est obligé de les couvrir tous. Le MVP pourra couvrir un **sous-ensemble prioritaire** — **non sélectionné ici**. Aucun cycle n’est automatiquement activé. Profil requalifié à chaque cycle.
>
> **Bandeau post-merge :** document **historique**. PR **#207** mergée (`ec21074`). État courant porté par **README et `04`–`07`**. D-VAL-10 = historique (commit/push/draft PR ; merge non autorisé par cette décision). **D-VAL-11 — VALIDÉE** (Morris — 2026-07-18) : intégration reconnue ; cadrage documentaire **clôturé** ; prochain cycle **non sélectionné**.
>
> La sélection du prochain cycle reste une décision Morris distincte. Aucun cycle de conception, architecture ou UX n’est lancé ici. En cas d’écart, README et `04`–`07` priment.

---

## 1. Légende

| Caractère | Signification |
|-----------|---------------|
| **Quasi systématique** | Attendue sur trajectoire produit complète |
| **Activable** | Fortement probable si engagé |
| **Conditionnel** | Dépend d’un événement / arbitrage |
| **Événementiel** | INC / RUN / EVOL |

---

## 2. Quatre couvertures distinctes

| Couverture | Objet | Règle |
|------------|-------|-------|
| **Produit cible** | Progressive des 15 cycles | Cible long terme — pas obligation immédiate |
| **POC** | Lot technique mobilisant plusieurs cycles | **Jamais** un cycle autonome ; faisabilité seulement |
| **MVP** | Sous-ensemble prioritaire | À définir au cadrage / backlog — **pas ici** |
| **Industrialisation** | Cycles renforcés (sécurité, release, RUN…) | Exploitation durable de la **plateforme** |

Le POC est un **lot** pouvant mobiliser architecture technique, intégration/DevOps, sécurité, QA — **pas** un 16ᵉ cycle.

---

## 3. Familles de cycles

| Famille | Exemples |
|---------|----------|
| Conception produit cible | 1–4, 6 |
| POC de faisabilité (lot) | Parties bornées de 6, 7, 8, 9, 10 |
| Construction MVP | 5, 8, puis 9–12 selon besoin |
| Industrialisation plateforme | 7, 10–12 renforcés |
| Évolution méthode | Hors produit — CAPA/EVOL + GO Morris |

---

## 4. Synthèse des 15 cycles (hypothèse produit)

| # | Cycle | Caractère | Note |
|---|-------|-----------|------|
| 1 | Cadrage | Quasi systématique | Pré-cadrage **clôturé** ; cadrage détaillé **validé** (D-VAL-9) — voir `04`–`07` |
| 2 | Conception fonctionnelle | Quasi systématique | Plateforme métier |
| 3 | Architecture fonctionnelle | Activable | Orchestration déterministe à cadrer — non validée |
| 4 | UX/UI | Activable | Figma désactivé ici |
| 5 | Backlog / user stories | Quasi systématique | Après POC / poursuite — sous-ensemble MVP |
| 6 | Architecture technique | Activable | Cible d’abord ; POC en dérive |
| 7 | Intégration / DevOps | Activable | Faisabilité puis industrialisation |
| 8 | Delivery | Quasi systématique | Lot POC borné puis incréments MVP |
| 9 | QA / validation | Quasi systématique | QA faisabilité **et** QA produit |
| 10 | Sécurité / RSSI | Activable | Critique produit ; contrôles en POC |
| 11 | Déploiement / release | Activable | Surtout industrialisation plateforme |
| 12 | Observabilité / RUN | Activable | Industrialisation ; tests limités en POC |
| 13 | PR readiness | Quasi systématique | Si versionnement |
| 14 | Post-merge | Quasi systématique | Si merge |
| 15 | Capitalisation / REX | Quasi systématique | Observations ≠ promotion méthode |

---

## 5. Profils probables (non figés)

Pré-cadrage / correction G3 : Critical. Autres situations : à requalifier. Aucun profil futur figé.

---

## 6. Déclencheurs (hypothèses)

| Phase | Déclencheur | Cycles probables |
|-------|-------------|------------------|
| Cadrage produit | GO G6 **réalisé** ; DF-G1 **validé** | 1 suite (cadrage détaillé livré) |
| Conception / archi | Clôture cadrage | 2, 3, 4, 6 |
| POC (lot) | GO dédié post-archi | 6/7/8/9/10 bornés |
| MVP | GO post-POC | Sous-ensemble via 5, 8… |
| Industrialisation plateforme | Maturité MVP | 7, 10–12 |
| Capitalisation | Leçon durable | 15 |

---

## 7. Blocs transverses

FinOps, RGPD, accessibilité, performance, sécurité, DevOps, observabilité, capitalisation : identifiés. UX/UI+Figma **désactivé**. GreenOps conditionnel.

---

## 8. Projet vs méthode

| Famille | Règle |
|---------|-------|
| Cycles projet SFIA Studio | Sous `projects/sfia-studio/` (+ code futur) |
| Cycles méthode | `method/`, `prompts/` — GO Morris + cycle dédié (Option C) |

Interdit ici : modification v2.6, v2.7, v3.0.

---

## 9. Trajectoire macro (hypothèse)

```text
Pré-cadrage                          ← historique (01–03)
  → cadrage détaillé produit         ← VALIDÉ (D-VAL-9 / DF-G1) — docs 04–07
  → conception fonctionnelle         ← non lancé (recommandation, non décision)
  → architecture fonctionnelle
  → UX/UI initiale si nécessaire
  → architecture technique candidate
  → POC de faisabilité (lot multi-cycles)
  → QA de faisabilité
  → décision Morris de poursuite
  → backlog / MVP (sous-ensemble)
  → delivery incrémental
  → sécurité / QA / release / RUN readiness
  → industrialisation de la plateforme
  → capitalisation / REX
```

Cadrage détaillé **réalisé**. Ne lance aucun cycle suivant. Pas de backlog. Pas d’architecture validée. Pas de sélection du sous-ensemble MVP. Prochain cycle = décision Morris distincte.

---

## 10. Ce que ce document n’est pas

Activation auto ; architecture déguisée ; backlog ; sélection MVP ; validation POC ; centrage projet sur POC ; obligation immédiate des 15 cycles.

---

## 11. Liens

### Pré-cadrage (historique)

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Décisions / gates (prime) |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Vision historique |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Usage |
|----------|-------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire |

---

*SFIA Studio — document historique de pré-cadrage — PR #207 mergée — D-VAL-11 validée — prochain cycle non lancé — Morris décide.*

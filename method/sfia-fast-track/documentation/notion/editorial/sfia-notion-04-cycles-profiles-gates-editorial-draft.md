# 04 — Cycles, profils et gates

| Métadonnée | Valeur |
|------------|--------|
| **Page P0** | 04 — Cycles, profils et gates |
| **Statut** | Draft éditorial — non publié |
| **Cycle** | Cycle 2 |
| **Baseline** | SFIA v2.4 |
| **v2.5 cycles** | **Candidate — non baseline** |
| **Audience** | PMO, PO, responsable méthode |
| **Niveau** | L2 |
| **Propriétaire** | Morris |
| **Sources Git** | `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` ; `prompts/templates/sfia-cycle-execution-template.md` §4 (**Candidate**) |
| **Commit** | `6407913689b14e84e0a487a3137ff290bb6e2ff8` |
| **Date** | 2026-07-13 13:11 Europe/Paris |

---

## 1. Objectif de la page

Présenter les **15 cycles projet** SFIA v2.5 (Candidate), les **4 profils**, et la logique des **gates Morris** — sans les confondre avec la baseline v2.4.

## 2. À retenir en 30 secondes

- **15 cycles** couvrent le projet de bout en bout (cadrage → capitalisation).
- **Profils** : Light, Standard (défaut), Critical (justifié), Capitalization (intention REX).
- **Critical ≠ Capitalization** ; Critical **jamais implicite**.
- **Gates Morris** = décisions structurantes (merge, publication, doctrine).
- Catalogue v2.5 cycles : **Candidate — non baseline**.

## 3. Contenu éditorial principal

### Les 15 cycles projet *(Candidate v2.5 — non baseline)*

| # | Cycle | Catégorie |
|---|-------|-----------|
| 1 | Cadrage | Quasi systématique |
| 2 | Conception fonctionnelle | Quasi systématique |
| 3 | Architecture fonctionnelle | Activable |
| 4 | UX/UI | Activable |
| 5 | Backlog / user stories | Quasi systématique |
| 6 | Architecture technique | Activable |
| 7 | Intégration / DevOps | Activable |
| 8 | Delivery / implémentation | Quasi systématique |
| 9 | QA / validation | Quasi systématique |
| 10 | Sécurité / RSSI | Activable |
| 11 | Déploiement / release | Activable |
| 12 | Observabilité / RUN readiness | Activable |
| 13 | PR readiness | Quasi systématique |
| 14 | Post-merge | Quasi systématique |
| 15 | Capitalisation / REX | Proportionné |

> **Baseline opérationnelle : SFIA v2.4.** Ce référentiel 15 cycles provient du template d'exécution **v2.5 candidate** — à utiliser comme aide, pas comme norme validée tant que Morris n'a pas promu v2.5.

### Les quatre profils

| Profil | Quand l'envisager |
|--------|-------------------|
| **Light** | Faible risque, ≤3 fichiers doc, pas de chemin protégé |
| **Standard** | Cycle courant — **défaut** si doute sans risque structurant |
| **Critical** | Risque structurant — **justification obligatoire** |
| **Capitalization** | Intention de capitaliser — profondeur Light/Standard/Critical selon portée |

### Exemples de gates Morris

| Gate | Exemple |
|------|---------|
| GO merge | Après revue PR |
| GO publication Notion | Cycle 3 distinct |
| GO modification doctrine | Prompt catalog, core method |
| GO Critical | Arbitrage architecture, prod, sécurité |
| GO baseline v2.5 | Promotion méthode — **non acquise** |

## 4. Fonctionnement ou parcours

Cette page alimente la future **Base Cycles** (cycle 3). En lecture : compléter avec [05 Routage](sfia-notion-05-request-routing-editorial-draft.md).

## 5. Exemple pédagogique

Demande « capitaliser un REX » → cycle **15 Capitalisation**, profil **Capitalization**, profondeur **Standard** ou **Critical** selon portée — pas Critical automatique.

## 6. Points de vigilance

- Ne pas présenter v2.5 comme baseline dans Notion sans badge et sans décision Morris.
- Une **readiness unique** par cycle — voir page 03.

## 7. Liens

→ [05 Routage](sfia-notion-05-request-routing-editorial-draft.md) · [03 Cycle](sfia-notion-03-how-a-cycle-works-editorial-draft.md) · [07 Gouvernance](sfia-notion-07-governance-guardrails-editorial-draft.md)

## 8. Sources Git

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (candidate)
- `prompts/templates/sfia-cycle-execution-template.md` §4 (candidate v2.5)

## 9. Métadonnées publication

Future **vue Base Cycles**. Badge « Candidate v2.5 » obligatoire sur la page.

## 10. Réserves

Promotion v2.5 baseline : **décision Morris non prise**.

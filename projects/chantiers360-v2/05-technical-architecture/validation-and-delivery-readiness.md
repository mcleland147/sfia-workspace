# Chantiers360 v2 — Validation et readiness delivery

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/05-technical-architecture/validation-and-delivery-readiness.md`  
**Cycle :** Architecture technique légère

> Conditions **avant autorisation delivery code** — INC-01 reste interdit sans GO Morris.

## 1. Conditions avant INC-01

| # | Condition | Statut |
|---|-----------|--------|
| 1 | Design Figma P1 validé Morris (PR #101) | ✅ |
| 2 | Backlog MVP mergé (PR #99) — inchangé | ✅ |
| 3 | Architecture technique légère documentée | ✅ PR #102 |
| 4 | Stack choisie et validée par Morris | ✅ Option B + Drizzle + Tailwind |
| 5 | Modèle de données validé par Morris | ✅ Validé (M6) |
| 6 | Structure applicative validée par Morris | ✅ Validé (M6) |
| 7 | **GO architecture technique Morris** | ✅ Validé (M6) |
| 8 | Stratégie fidélité Figma documentée | ✅ |
| 9 | **Figma Fidelity Spike requis** (M8) — Frame Dashboard `38:502` | ⏳ À réaliser |
| 10 | **GO delivery INC-01 Morris** | ❌ **Non accordé** (M7) |

## 2. Critères pour autoriser delivery code

| Critère | Détail |
|---------|--------|
| **Gate architecture** | Morris confirme stack, structure, modèle données | ✅ Validé M6 |
| **Périmètre INC-01 borné** | US-01 à US-04 uniquement — pas de scope creep |
| **Référence design** | Captures `04-design/captures/` + frames Figma P1 |
| **Critères acceptance** | `acceptance-criteria.md` US-01 à US-04 comme Definition of Done |
| **Hors scope respecté** | Pas de devis, facturation, client, planning avancé, V0 |
| **Branche delivery** | Nouvelle branche dédiée — ex. `delivery/chantiers360-v2-inc-01` |
| **Pas de modification backlog/design** | Sauf micro-cycle alignment si écart bloquant |
| **Fidélité Figma** | Spike Frame Dashboard `38:502` **requis** (M8) avant INC-01 complet |
| **Anti-dérive UI** | L'implémentation ne doit pas dériver vers une UI générique type admin dashboard |

## 3. Risques avant delivery

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Stack non validée | Refonte possible | Gate Morris avant premier commit code |
| Auth non décidée | Blocage déploiement | Pilote local ou décision auth explicite |
| Surconception formulaire | Retard INC-01 | Champs minimaux US-01 |
| Écart Figma / code | UX dégradée | Gate fidélité + revue visuelle Morris |
| Dérive UI générique | Perte direction premium | Spike Frame 01 + comparaison capture |
| Confusion tâche/réserve (INC-02) | UX confuse | Livrer INC-01 d'abord — INC-02 séparé |
| Prochaines actions prématurées (INC-05) | Complexité | Strict ordre incréments |

## 4. Tests fonctionnels attendus (INC-01)

Alignés sur `acceptance-criteria.md` :

### US-01 — Créer un chantier

- [ ] Libellé, client, adresse obligatoires
- [ ] Statut initial = À démarrer
- [ ] Accès fiche après création

### US-02 — Liste chantiers

- [ ] Liste vide si aucun chantier
- [ ] Libellé, statut, retard visibles par carte
- [ ] Clic ouvre fiche

### US-03 — Fiche chantier

- [ ] Affiche libellé, client, adresse, statut
- [ ] Retour dashboard possible
- [ ] Sections accessibles (navigation onglets — même si vides en INC-01)

### US-04 — Statut chantier

- [ ] 4 statuts sélectionnables
- [ ] Statut visible fiche + liste
- [ ] Chantier Terminé consultable

**Type de tests au delivery :** manuels + tests automatisés ciblés si Morris l'autorise — pas imposé dans ce cycle architecture.

## 5. Lien avec acceptance criteria

| Document | Usage delivery |
|----------|----------------|
| `acceptance-criteria.md` | Definition of Done par US |
| `user-stories.md` | Périmètre fonctionnel |
| `delivery-increments.md` | Découpage livraison |
| `state-model.md` | Règles statuts et transitions |
| `figma-review-checklist.md` | Gate visuel P1 |

## 6. Gate Morris avant delivery

| Gate | Question Morris | Réponse attendue |
|------|-----------------|------------------|
| **G1 — Architecture** | La stack et le modèle proposés sont-ils validés ? | ✅ **GO** (M6) |
| **G2 — Périmètre INC-01** | Le scope US-01 à US-04 est-il confirmé ? | ⏳ À confirmer au GO delivery |
| **G3 — Design** | Les captures P1 suffisent-elles pour INC-01 ? | ✅ PR #101 |
| **G4 — Fidélité Figma** | Spike pixel-close requis avant INC-01 complet | ⏳ **Requis** — M8 validé |
| **G5 — Delivery** | Autorise-t-on le premier commit code INC-01 ? | ❌ **Non accordé** (M7) |

**Sans GO explicite sur G5 :** delivery code **interdit**.

**Gate fidélité Figma (G4) — requis avant GO delivery INC-01 complet :**

1. **Stratégie validée** — `frontend-architecture.md` §9 ; stack Tailwind validée M10
2. **Réaliser** le micro-cycle **Figma Fidelity Spike** — frame **01 — Dashboard cockpit premium** (`38:502`) — validé M8/M9
3. **Revue Morris** — comparaison avec `04-design/captures/01-dashboard-cockpit-premium.png` ; pas de dérive UI générique

> Le spike est **obligatoire** avant clôture INC-01 complet. Le **GO delivery INC-01 (M7)** reste **non accordé** — aucun delivery ne démarre sans décision Morris explicite.

## 7. Ordre post-validation architecture

```
Architecture validée Morris (M6) ✅
        │
        ▼
Figma Fidelity Spike — Frame 01 Dashboard (`38:502`) — REQUIS (M8)
        │
        ▼
Revue Morris — fidélité pixel-close
        │
        ▼
GO delivery INC-01 (M7) — non accordé pour l'instant
        │
        ▼
Branche delivery + setup stack validée (Option B + Drizzle + Tailwind)
        │
        ▼
Implémentation US-01 → US-04 (fidélité pixel-close desktop de référence)
        │
        ▼
Revue Morris — tests acceptance
        │
        ▼
PR delivery INC-01
        │
        ▼
GO INC-02 (après merge INC-01)
```

---

**Documents liés :** `technical-decisions.md`, `../03-backlog/delivery-increments.md`, `../03-backlog/acceptance-criteria.md`

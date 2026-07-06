# SFIA v2.0 — Design Figma MVP Cycle Standard

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md`  
**Cycle :** Capitalisation méthode SFIA v2.0  
**Version :** 1.0 — draft revue Morris

> **Standard méthode** — pas de création de fichier Figma dans le repo, pas de code, pas de modification projet pilote dans ce cycle documentaire.

## 1. Objectif du cycle Design Figma MVP

Permettre la **validation visuelle** des écrans MVP avant backlog final, architecture technique et delivery code — en complément de l'UX/UI fonctionnelle Markdown (wireframes textuels repo-first).

**Constat pilote Chantiers360 v2 :** les wireframes Markdown suffisent au cadrage et à la navigation fonctionnelle, mais **Figma est nécessaire** pour valider les écrans réels, la hiérarchie visuelle et les parcours avant implémentation.

## 2. Position dans la trajectoire SFIA v2.0

**Ordre méthodologique cible :**

| # | Étape |
|---|-------|
| 1 | Intention / sélection projet |
| 2 | Bootstrap projet |
| 3 | Cadrage détaillé |
| 4 | Architecture fonctionnelle |
| 5 | UX/UI fonctionnelle Markdown |
| 6 | **Design Figma MVP** ← ce standard |
| 7 | Backlog MVP |
| 8 | Architecture technique légère |
| 8b | **Figma Fidelity Gate / Spike** — optionnel si gate M8 ou risque UI |
| 9 | Delivery incrémental |
| 10 | Validation |
| 11 | PR readiness |
| 12 | Post-merge |
| 13 | Capitalisation |
| 14 | Comparaison V0 si applicable — fin de pilote uniquement |

**Règle :** le backlog MVP doit **idéalement** être produit **après** validation Figma. L'architecture technique vient **après** Figma et backlog validés. **Aucun code** ne démarre avant validation design et gate Morris.

## 3. Entrées attendues

| Entrée | Source | Statut |
|--------|--------|--------|
| Cadrage détaillé validé | `00-framing/` — use cases, business rules, scope | ✅ Requis |
| Architecture fonctionnelle validée | `01-functional-architecture/` | ✅ Requis |
| UX/UI Markdown validée | `02-ux-ui/` — screen map, wireframes textuels, user flows | ✅ Requis |
| Gate Morris UX/UI | GO documenté | ✅ Requis |

**Sans ces entrées :** ne pas ouvrir le cycle Design Figma MVP.

## 4. Sorties attendues

### 4.1 Dans Figma (outil externe)

| Livrable | Description |
|----------|-------------|
| **Lien ou référence Figma** | URL fichier / prototype — référencée dans le repo |
| **Écrans MVP** | Écrans P1 minimum ; P2 selon périmètre |
| **Prototype simple** | Optionnel — parcours cliquable si utile |

### 4.2 Dans Git (source de vérité méthodologique)

Dossier recommandé : `projects/<project-name>/04-design/`

| Fichier | Rôle |
|---------|------|
| `figma-brief.md` | Brief design repo-first — objectif, périmètre écrans, contraintes |
| `screen-design-spec.md` | Spécification écran par écran — états, contenu, actions |
| `figma-review-checklist.md` | Checklist revue design Morris |
| `design-decisions.md` | Décisions design structurantes tracées |
| `design-to-backlog-alignment.md` | Impacts backlog — écarts vs UX/UI Markdown, ajustements US |

**Principe :** Figma porte la **validation visuelle** ; Git porte les **décisions, briefs, checklists et impacts** documentés.

## 5. Garde-fous

| Garde-fou | Règle |
|-----------|-------|
| **Git = source de vérité méthodologique** | Décisions design, brief, checklist, impacts backlog versionnés |
| **Figma ≠ source unique** | Figma ne remplace pas le repo pour arbitrages, scope, backlog |
| **Pas de code** | Cycle design uniquement — pas `app/`, `backend/`, `frontend/` |
| **Pas d'architecture technique** | Stack, API, DB — cycle dédié ultérieur |
| **Pas de design system complet obligatoire** | MVP — composants minimaux suffisants |
| **Pas de maquette haute fidélité obligatoire** | Fidélité adaptée au MVP — voir §6 |
| **Pas de V0** | From scratch — comparaison fin pilote only |
| **Morris = gate design** | Validation visuelle, parcours, impacts backlog |
| **Automatiser la doc, pas la validation visuelle** | L2–L3 génération repo ; validation humaine Morris |

## 6. Niveaux de fidélité

| Niveau | Statut MVP | Usage |
|--------|------------|-------|
| **Basse fidélité** | Autorisée | Structure, zones, hiérarchie — équivalent wireframe visuel |
| **Moyenne fidélité** | **Recommandée** | Écrans MVP lisibles, statuts, actions principales |
| **Haute fidélité** | Optionnelle | Polish visuel — pas requis au MVP |
| **Design system complet** | **Hors cible initiale** | Tokens, bibliothèque composants — post-MVP ou projet mature |

## 7. Gate Morris

Le cycle Design Figma MVP est **validé** si Morris confirme :

1. **Validation visuelle** — écrans MVP conformes à l'intention produit
2. **Validation parcours écran** — navigation cohérente avec UX/UI Markdown
3. **Validation impacts backlog** — écarts documentés dans `design-to-backlog-alignment.md` ; micro-cycle Backlog Alignment si nécessaire

**GO Morris** requis avant :
- finalisation backlog MVP (si pas encore produit)
- micro-cycle Backlog Alignment (si backlog déjà produit)
- architecture technique
- delivery code

## 8. Cas de rattrapage (backlog produit avant Figma)

**Contexte :** projet pilote (ex. Chantiers360 v2) où le backlog MVP a été produit **avant** introduction de ce standard.

**Procédure :**

```
1. UX/UI Markdown validée (déjà faite)
2. Backlog MVP existant (déjà mergé)
3. Ouvrir cycle Design Figma MVP (rattrapage)
4. Produire livrables Figma + docs 04-design/
5. Gate Morris — validation visuelle
6. Si écarts : micro-cycle Backlog Alignment
   - design-to-backlog-alignment.md
   - ajustements user stories / critères si nécessaire
   - pas de refonte complète sans décision Morris
7. GO architecture technique / delivery
```

**Règle :** le rattrapage **ne invalide pas** le backlog existant — il **aligne** si écarts détectés.

## 9. Niveau d'automatisation

| Activité | Niveau | Validation |
|----------|--------|------------|
| Génération docs repo (`04-design/*.md`) | L2 — génération guidée | Morris avant PR |
| Exécution bornée fichiers repo | L3 | Morris avant push |
| Production Figma (écrans, prototype) | L0–L2 | Morris — validation visuelle humaine |
| Validation design / parcours | L0 | Morris uniquement |
| Décisions design structurantes | L0 | Morris uniquement |
| L5 global | **Interdit** | — |

**Automatiser** la production documentaire repo-first ; **ne jamais automatiser** la validation visuelle ou l'arbitrage produit design.

## 10bis. Lien avec Figma Fidelity Gate

| Cycle | Rôle |
|-------|------|
| **Design Figma MVP** (ce standard) | Valide une **direction visuelle** — écrans P1, parcours, impacts backlog |
| **Figma Fidelity Spike** | Valide la **capacité à reproduire** une frame P1 en code (pixel-close) |
| **GO delivery** | Décision Morris **séparée** — spike validé ≠ autorisation delivery |

**Quand ouvrir un spike :** après design P1 validé et architecture technique documentée — si gate fidélité requis (ex. M8) ou risque de dérive UI générique.

**Référence :** `sfia-v2-figma-fidelity-gate-standard.md` — pilote Chantiers360 v2 PR #104.

## 10ter. Lien avec QA / Test delivery

| Principe | Application |
|----------|-------------|
| **Scénarios UX/design** | Parcours Figma et maquettes peuvent **alimenter** la recette métier (QA-003) |
| **Figma ≠ tests** | Design validé visuellement **ne remplace pas** tests fonctionnels delivery |
| **Support QA visuel** | Captures repo (`04-design/captures/`) et parcours cliquables = preuves visuelles complémentaires |
| **Gate design ≠ QA-G3** | GO design Morris ≠ QA readiness incrément |

**Référence :** `sfia-v2-delivery-qa-test-standard.md`.

## 10. Template livrables projet

```
projects/<project-name>/
├── 00-framing/
├── 01-functional-architecture/
├── 02-ux-ui/
├── 04-design/                    ← cycle Design Figma MVP
│   ├── figma-brief.md
│   ├── screen-design-spec.md
│   ├── figma-review-checklist.md
│   ├── design-decisions.md
│   └── design-to-backlog-alignment.md
├── 03-backlog/                   ← idéalement après 04-design ; rattrapage possible
└── README.md
```

**Note numérotation :** `04-design` précède idéalement `03-backlog` dans l'ordre méthodologique ; la numérotation dossiers peut refléter l'ordre chronologique pilote (rattrapage) ou être harmonisée lors d'un cycle dédié — **décision Morris**.

## 11. Rôles mobilisés

| Rôle | Contribution |
|------|--------------|
| **Morris** | Gate design, validation visuelle, arbitrages |
| **UX/UI (Markdown)** | Entrée — wireframes, screen map |
| **Design Figma** | Production écrans, prototype |
| **Product / BA** | Cohérence métier écrans vs cadrage |
| **Delivery lead** | Impacts backlog, préparation delivery |
| **Cursor** | Génération docs repo `04-design/` — L2–L3 borné |

## 12. Critères de validation du cycle

| Critère | Attendu |
|---------|---------|
| Entrées §3 présentes | Oui |
| Lien Figma référencé dans repo | Oui |
| 5 fichiers `04-design/` minimum | Oui |
| Checklist revue complétée | Oui |
| Décisions design tracées | Oui |
| Impacts backlog documentés | Oui — même si « aucun écart » |
| Pas de code créé | Oui |
| Gate Morris obtenu | Oui — avant cycles suivants |

## 13. Explicitement hors scope

- Code applicatif, architecture technique, CI/CD
- Tickets Jira, Notion, CMP
- Design system complet obligatoire
- Reprise Chantiers360 V0
- Modification méthode SFIA v1.1 canonique sans GO Morris

---

**Références :**

- `sfia-v2-automation-levels.md` — §12 trajectoire cycle de vie
- `sfia-v2-figma-fidelity-gate-standard.md` — gate fidélité design-to-code
- `sfia-v2-project-bootstrap-standard.md` — structure projet
- `sfia-v2-automation-and-delivery-vision.md` — vision delivery
- `sfia-v2-pilot-selection-decision.md` — chaîne de production

**Decision (provisional) :** SFIA V2.0 DESIGN FIGMA CYCLE STANDARD DOCUMENTED — PENDING MORRIS VALIDATION

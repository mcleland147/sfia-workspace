# SFIA v2.0 — Figma Fidelity Gate Standard

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md`  
**Cycle :** Capitalisation méthode SFIA v2.0  
**Version :** 1.0 — draft revue Morris  
**Source pilote :** Chantiers360 v2 — PR #104 (spike), PR #105 (alignement post-spike)

> **Standard méthode** — pas de delivery applicatif, pas de modification projet pilote dans ce cycle documentaire.

## 1. Objectif du standard

Formaliser le **Figma Fidelity Gate** (micro-cycle **Figma Fidelity Spike**) comme étape SFIA v2.0 réutilisable pour les projets avec design Figma validé.

**Problème adressé :**

- éviter les **UI génériques** type admin dashboard lors du delivery ;
- vérifier la **faisabilité design-to-code** avant un delivery coûteux ;
- **borner** les spikes visuels (une frame, données mockées, pas de scope creep) ;
- **distinguer** validation de fidélité visuelle et **GO delivery** ;
- standardiser prompts, validations, PR readiness et post-merge.

**Référence pilote :** Chantiers360 v2 — frame **01 — Dashboard cockpit premium** (`38:502`), gate M8/M9 satisfait, D1/D2 validés Morris, D3/M7 (GO INC-01) non accordé.

## 2. Position dans la trajectoire SFIA v2.0

| # | Étape | Rôle |
|---|-------|------|
| … | Design Figma MVP validé | Valide la **direction visuelle** et les écrans P1 |
| … | Architecture technique légère | Trace stack, structure, gates delivery |
| **N** | **Figma Fidelity Gate / Spike** | Valide la **capacité à reproduire** une frame P1 en code |
| … | GO delivery Morris | Décision **séparée** — autorise ou non le delivery incrémental |
| … | Delivery incrémental | Implémentation bornée (ex. INC-01) |

**Ordre recommandé :** après **Design Figma P1 validé** et **architecture technique légère documentée** — avant tout **GO delivery** et avant tout delivery code complet.

Voir aussi : `sfia-v2-design-figma-cycle-standard.md` — section « Lien avec Figma Fidelity Gate ».

## 3. Quand déclencher un Figma Fidelity Gate

| Situation | Déclencher ? |
|-----------|--------------|
| Design Figma P1 validé Morris ; stack front validée ; delivery envisagé | ✅ **Oui** |
| Risque d'écart Figma / code ou dérive UI générique identifié | ✅ **Oui** |
| Architecture impose un gate fidélité explicite (ex. M8) | ✅ **Oui** |
| Projet sans design Figma validé | ❌ Non — compléter Design Figma MVP d'abord |
| Simple correction documentaire | ❌ Non |
| Delivery déjà autorisé et spike déjà validé sur frame de référence | ❌ Non — sauf nouvelle frame critique |

**Règle :** un spike **ne remplace pas** le Design Figma MVP — il **complète** la validation visuelle par une preuve technique bornée.

## 4. Trois validations distinctes

| Validation | Question | Décision | Exemple Chantiers360 |
|------------|----------|----------|----------------------|
| **Validation design Figma** | La direction visuelle P1 est-elle acceptable ? | Gate design Morris — PR Design Figma | PR #101 |
| **Spike fidélité Figma** | Peut-on reproduire une frame P1 en code (pixel-close) ? | D1/D2 Morris — PR spike | PR #104 — D1 ✅ D2 ✅ |
| **GO delivery** | Autorise-t-on le delivery applicatif (ex. INC-01) ? | M7 / D3 Morris — **séparé** | D3 ❌ — INC-01 non lancé |

> **Invariant :** spike validé **≠** GO delivery. Aucune inférence automatique.

## 5. Conditions d'entrée

| # | Condition | Source |
|---|-----------|--------|
| 1 | Design Figma P1 validé Morris | `04-design/`, gate design |
| 2 | Capture(s) et node ID(s) Figma référencés dans le repo | `04-design/captures/`, `figma-reference.md` |
| 3 | Stack front validée Morris (framework, styling) | `05-technical-architecture/` |
| 4 | Frame de référence spike désignée (ex. M9) | Arbitrages Morris / `frontend-architecture.md` |
| 5 | GO delivery **non requis** pour ouvrir le spike | Spike ≠ delivery |

## 6. Conditions de sortie

Le gate est **satisfait** si :

| # | Critère |
|---|---------|
| 1 | Implémentation spike mergée — frame de référence reproduite |
| 2 | `npm run lint` et `npm run build` OK sur le spike |
| 3 | Rapport de comparaison visuelle documenté |
| 4 | Décisions Morris D1/D2 tranchées |
| 5 | D3 / GO delivery documenté (accordé ou non) |
| 6 | Post-merge check réalisé |
| 7 | Alignement documentaire post-spike si dérive détectée |
| 8 | Aucun scope creep (DB, auth, INC complet, autres routes) |

## 7. Périmètre autorisé d'un spike

| Élément | Autorisé |
|---------|----------|
| **Une frame P1** (ou sous-ensemble strict documenté) | ✅ |
| Route(s) minimale(s) pour afficher la frame | ✅ — ex. `/` seulement |
| Composants UI locaux spike | ✅ |
| Données **mockées** statiques | ✅ |
| Stack front validée (Next.js, React, Tailwind, etc.) | ✅ |
| `package.json`, config build, lint | ✅ dans dossier spike dédié |
| Documentation spike `06-figma-fidelity-spike/` | ✅ |
| Mises à jour statut projet minimales | ✅ README, framing — si nécessaire |
| Capitalisation méthode post-spike | ✅ cycle séparé |

## 8. Périmètre interdit

| Élément | Interdit |
|---------|----------|
| Delivery incrémental complet (ex. INC-01) | ❌ |
| Création chantier, fiche chantier, autres écrans P1 | ❌ |
| PostgreSQL, Drizzle, SQL, migrations | ❌ sauf décision Morris explicite hors spike |
| Authentification, API réelles | ❌ |
| Modification `03-backlog/`, `04-design/`, captures Figma | ❌ |
| Reprise Chantiers360 V0 | ❌ |
| Notion / CMP | ❌ |
| Inférer GO delivery depuis validation spike | ❌ |
| UI générique non alignée capture Figma | ❌ |

## 9. Artefacts attendus

### 9.1 Références design (existantes — non recréées dans le spike)

| Artefact | Emplacement |
|----------|-------------|
| Capture Figma | `04-design/captures/<frame>.png` |
| Node ID | `figma-reference.md`, `frontend-architecture.md` |
| Brief / spec design | `04-design/figma-brief.md`, `screen-design-spec.md` |

### 9.2 Implémentation spike

Dossier recommandé : `projects/<project>/app/` (spike) ou emplacement documenté dans `spike-overview.md`.

| Artefact | Rôle |
|----------|------|
| Route minimale | Affiche la frame cible |
| Composants dashboard locaux | Reproduction UI |
| `data/mock*.ts` | Données fictives uniquement |
| Config build (package.json, tailwind, etc.) | Stack validée |

### 9.3 Documentation spike

Dossier : `projects/<project>/06-figma-fidelity-spike/`

| Fichier | Rôle |
|---------|------|
| `spike-overview.md` | Objectif, périmètre strict, frame cible |
| `figma-reference.md` | Lien Figma, node ID, capture repo |
| `visual-comparison-report.md` | Comparaison capture vs implémentation |
| `spike-decisions.md` | Décisions spike + **D1/D2/D3 Morris** |
| `spike-readiness.md` | Commandes, verdict, post-merge |

### 9.4 Cycle PR / post-merge

| Étape | Livrable |
|-------|----------|
| PR readiness | Rapport — fichiers, garde-fous, lint/build |
| PR spike | Merge sur validation Morris |
| Post-merge check | Vérification main, spike présent, gates |
| Alignement documentaire | Micro-cycle si statut projet obsolète — ex. PR #105 |

## 10. Critères de validation Morris (D1 / D2 / D3)

| # | Question | Décision type |
|---|----------|---------------|
| **D1** | Fidélité pixel-close acceptable ? | Oui / Non / Oui avec réserves |
| **D2** | Corrections bloquantes avant PR ? | Aucune / Liste bloquante |
| **D3** | GO delivery (ex. INC-01) ? | **Décision séparée** — souvent ❌ à ce stade |

**Fidélité attendue :**

- **pixel-close** sur viewport desktop de référence — pas forcément pixel-perfect strict ;
- **pas d'UI générique** — hiérarchie visuelle alignée capture Figma ;
- **pas de scope creep** — spike borné ;
- **réserves mineures** acceptables si documentées (icônes, espacements ±px, responsive hors scope).

## 11. Garde-fous

| Garde-fou | Règle |
|-----------|-------|
| **Git** | Source de vérité — décisions, spike, readiness versionnés |
| **Morris** | Gate D1/D2/D3 ; GO delivery séparé |
| **Cursor** | Exécuteur borné L3 — périmètre explicite dans le prompt |
| **ChatGPT** | Cadrage, challenge, génération prompts L2 |
| **Figma** | Référence visuelle — pas source unique des arbitrages |
| **V0** | Non utilisée sauf cycle comparaison fin de pilote |
| **Delivery** | Interdit sans GO Morris explicite post-spike |

## 12. Niveaux d'automatisation

| Activité | Niveau | Validation |
|----------|--------|------------|
| Génération prompts spike / readiness / post-merge | **L2** | Morris avant exécution Cursor |
| Exécution spike bornée (code + docs spike) | **L3** | Morris avant push |
| PR readiness + post-merge orchestrés | **L4** | Morris aux gates |
| Comparaison visuelle automatisée (future) | **L5 ciblé** read-only | Expérimental — pas de GO delivery auto |
| GO delivery, push, merge, suppression | **L0** | Morris uniquement |
| **L5 global** | **Interdit** | — |

Voir : `sfia-v2-automation-levels.md` — §7 et §12.

## 13. Séquence de cycles recommandée

```
Design Figma P1 validé Morris
        │
        ▼
Architecture technique légère + arbitrages (stack, gate M8)
        │
        ▼
Ouvrir branche cycle/<project>-figma-fidelity-spike
        │
        ▼
Implémenter spike borné (1 frame, mock data, lint/build)
        │
        ▼
Revue Morris — D1/D2/D3 (spike-decisions.md)
        │
        ▼
PR readiness → PR → merge (Morris)
        │
        ▼
Post-merge check
        │
        ▼
Alignement documentaire post-spike (si nécessaire)
        │
        ▼
Capitalisation méthode SFIA v2.0 (ce standard)
        │
        ▼
Décision Morris : capitalisation suite OU GO delivery (M7)
```

## 14. Prompt family

Famille capitalisée : `prompts/ux-ui/figma-fidelity-gate-prompt-family.md`

| Prompt | Usage |
|--------|-------|
| Ouverture spike | Cadrer frame, périmètre, garde-fous |
| Revue Morris D1/D2/D3 | Documenter décisions spike |
| PR readiness spike | Contrôles avant PR |
| Post-merge spike | Vérification main post-merge |
| Alignement documentaire post-spike | Corriger statut projet obsolète |

Templates complets longs : **cycle ultérieur** — les prompt cards génériques (`05-validate-pr-readiness`, `07-write-post-merge-status`) restent applicables.

## 15. Template structure projet

```
projects/<project-name>/
├── 04-design/                    ← entrées (captures, brief) — non modifié par spike
├── 05-technical-architecture/      ← stack, gate M8 — référence
├── 06-figma-fidelity-spike/      ← docs spike
│   ├── spike-overview.md
│   ├── figma-reference.md
│   ├── visual-comparison-report.md
│   ├── spike-decisions.md
│   └── spike-readiness.md
└── app/                          ← implémentation spike (routes minimales)
```

## 16. Explicitement hors scope

- Delivery INC-01 ou incrément applicatif complet
- Modification backlog / design / captures dans le spike
- Notion / CMP
- Comparaison V0
- Promotion automatique vers GO delivery

## 17. Lien avec QA / Test delivery

| Cycle | Rapport QA |
|-------|------------|
| **Figma Fidelity Spike** | Valide **fidélité visuelle** code ↔ frame — **pas** un test fonctionnel complet |
| **Spike validé (D2)** | N'autorise **pas** PR readiness delivery sans QA-G3 sur l'incrément |
| **Delivery INC-n** | QA/Test **requis** pour chaque incrément — tests automatisés + recette métier |

Le spike peut fournir des **captures comparatives** utiles au rapport QA visuel ; il ne couvre pas les US, AC ni persistance métier du delivery.

**Référence :** `sfia-v2-delivery-qa-test-standard.md` §13.

---

**Références :**

- `sfia-v2-design-figma-cycle-standard.md`
- `sfia-v2-automation-levels.md`
- `sfia-v2-project-bootstrap-standard.md`
- `sfia-v2-delivery-qa-test-standard.md`
- `prompts/ux-ui/figma-fidelity-gate-prompt-family.md`
- Pilote : `projects/chantiers360-v2/06-figma-fidelity-spike/`

**Decision (provisional) :** SFIA V2.0 FIGMA FIDELITY GATE STANDARD DOCUMENTED — PENDING MORRIS VALIDATION

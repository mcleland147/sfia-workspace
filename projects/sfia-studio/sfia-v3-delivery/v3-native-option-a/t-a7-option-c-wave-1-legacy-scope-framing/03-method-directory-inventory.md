# 03 — `method/**` directory inventory

| Champ | Valeur |
|-------|--------|
| **Objet** | cartographie `method/**` · **aucune modification** |
| **Volume (HEAD)** | **263** fichiers sous `method/` |
| **F03** | `NOT DECIDED` |

## 1. Structure

```
method/
├── README.md
├── sfia-fast-track/     # méthode active de delivery (majoritaire)
│   ├── core/            # 9 — operating model, rules, knowledge layer
│   ├── automation/      # 5 — prompt/repo/validation engines
│   ├── templates/       # 6
│   ├── checklists/      # 3
│   ├── cycles/          # 3
│   ├── documentation/   # ~220 — capitalization, archive, maps
│   ├── archive/         # 3
│   ├── audit-rex/       # 2
│   └── ui/              # 2
└── complementary/
    ├── README.md
    └── controlled-delivery/  # 7
```

| Zone | Types dominants | Ownership apparent | Généré ? |
|------|-----------------|--------------------|----------|
| `sfia-fast-track/core` | markdown méthode | méthode SFIA / Morris | manuel |
| `sfia-fast-track/automation` | markdown engines | méthode / automation | manuel |
| `sfia-fast-track/templates` · `checklists` · `cycles` | markdown ops | méthode | manuel |
| `sfia-fast-track/documentation` | markdown + archives | capitalisation | manuel (+ archives) |
| `sfia-fast-track/archive` | archives | historique | archive |
| `complementary/controlled-delivery` | markdown | méthodes complémentaires | manuel |

## 2. Consommateurs entrants (preuves)

| Consommateur | Nature | Preuve | Statut usage |
|--------------|--------|--------|--------------|
| `README.md` / `docs/**` | documentation routing | chemins `method/sfia-fast-track/**` | `DOCUMENTATION ONLY` / actifs éditoriaux |
| `prompts/README.md` · `prompts/prompt-catalog.md` | gouvernance prompts | liens engines/core/checklists | `ACTIVE — EVIDENCED` (référence opératoire) |
| Template / operating model | exécution cycles | core files | `ACTIVE — EVIDENCED` |
| OPS1 allowlist | sécurité chemins | `app/lib/ops1/allowlistEvaluation.ts` · `types.ts` incluent `"method/"` | `ACTIVE — EVIDENCED` |
| OPS1 canonical session | résolution contexte | `ops1/sfia/sessionContext.ts` → `resolveSfiaCanonicalContext` | `ACTIVE — INFERRED` (couplage canonique ; valider lecture disque `method/**`) |
| CI `.github/**` | build | **aucune** référence `method/` trouvée | `UNKNOWN` / non bloquant CI path |
| `lib/oa/**` | runtime OA | antiLegacy interdit MethodMode/fallback ; P08 vise no `method/**` reads | cible cutover `MISSING` |
| Anciens chemins `methods/` racine | historique | `docs/practices/methods-structure-check.md` — absents | `DEAD CANDIDATE — NOT VALIDATED` (déjà retirés) |

## 3. Dépendances sortantes

`method/**` est principalement **contenu markdown** (pas de package TS importé). Sorties = références documentaires vers `docs/`, `prompts/`, projets — **pas** d’import runtime npm détecté.

## 4. Matrice zones → candidats (≠ décisions)

| Zone | Rôle actuel | Consommateurs | Preuves | Risque retrait | Candidat cible | Décision requise |
|------|-------------|---------------|---------|----------------|----------------|------------------|
| `sfia-fast-track/core` | canon méthode v2.6 ops | prompts · cycles Cursor/ChatGPT | liens prompts + foundation docs | **High** — casse operating model | conserver / isoler / remplacer (ultérieur) | F03 · Morris |
| `sfia-fast-track/automation` | engines doc | prompt-catalog | liens | High | conserver / remplacer | F03 |
| `sfia-fast-track/templates` · `checklists` · `cycles` | ops delivery | docs architecture | liens | Med–High | conserver | F03 |
| `sfia-fast-track/documentation` (hors archive) | capitalisation | docs internes | volume | Med | archiver partiel / conserver | inventaire fin |
| `sfia-fast-track/archive` | historique | peu | structure | Low–Med | archiver / conserver | Morris |
| `complementary/controlled-delivery` | méthode complémentaire | README method | structure | Med | conserver / investigation | Morris |
| Allowlist entry `"method/"` OPS1 | ACL path | action gate | code | High si retiré sans politique | isoler / migrer | F13 · F03 |

## 5. Protections / historique

- SC-02 : modification `method/**` hors gate Morris → `STOP`
- P08 / P24 : lectures `method/**` et import boundaries à prouver avant cutover
- Structure check : ne pas recréer `sfia/methods/` ou `methods/` racine

## 6. Anti-claims

- volume documentation ≠ usage runtime applicatif
- absence de référence CI ≠ non-usage (prompts/OPS1)
- candidat « archiver » ≠ archive exécutée

# 10 — Risks, reservations, and Morris decision pack

## Risques

| ID | Risque | Mitigation framing |
|----|--------|-------------------|
| R1 | Dupliquer UI POC sans OA | Facade obligatoire |
| R2 | VsDemoContext → store produit | Fixture-only boundary |
| R3 | sessionStorage métier | Interdit |
| R4 | Règles T-A2/3/7 dans React | Mapping + review boundaries |
| R5 | Confusion fixture/local/produit | disclosures + modes |
| R6 | Fausse autorité Morris | LOCAL DEMO + Critical blocked |
| R7 | Dashboard illisible | IA progressive |
| R8 | Persistance produit implicite | D-VS-02 hybride borné |
| R9 | API HTTP prématurée | Interdit V1–V5 |
| R10 | Design system parallèle | tokens existants |
| R11 | Doc 32 BeB confondu avec ce slice | Distinction explicite |

## Réserves ouvertes (blockers)

HARD REDUCED OPEN · T-A6 incomplete · B5/R1/R-M01 OPEN · R-T-A3-1 · IAM NOT_SELECTED · product persistence NOT_SELECTED.

## Decision pack Morris

### D-VS-01 — Stratégie UI
1. Adapter routes POC existantes
2. Nouveau namespace `/studio/*`
3. Remplacement progressif

**Reco Cursor** : **2 + adapt shell** (hybride). Non validé.

### D-VS-02 — Composition locale
1. Mémoire OA seule
2. D1 commands seules
3. Hybride mémoire + audit SQLite

**Reco Cursor** : **3**. Non validé.

### D-VS-03 — Mode démo
1. Fixtures séparées
2. Fixtures off by default
3. Suppression future fixtures

**Reco Cursor** : **2** puis trajectoire **3**. Non validé.

### D-VS-04 — Premier lot
1. Project only (V1)
2. Project + recommendation
3. Parcours complet

**Reco Cursor** : **1**. Non validé.

### D-VS-05 — Figma
1. Réutiliser page P0
2. Nouvelle page framing
3. Contrat Git only temporaire

**Reco Cursor** : **2** après GO ; **3** satisfait ce cycle. Non validé.

## Anti-overreach

Aucune option ci-dessus n’est `DECIDED` / `ADOPTED` dans ce cycle.

# Protocole de qualification ML2 — Intervention 1

Statut : CANDIDATE PROTOCOL · pas de LIVE sans checkpoint Morris.

## Principes

1. Oracle défini **avant** observation des candidats.
2. Labels indépendants du mécanisme évalué.
3. Distinguer FAKE (protocole / baseline locale) vs REAL (qualité fournisseur LIVE).
4. Corpus public/synthétique uniquement tant que GO DATA absent.
5. Pas de création Vector Store / upload / Decisions LIVE ici.

## Décisions (CONV-F21)

- Entrée : `corpus-decisions-labels.json`
- Candidats : Responses (contrôle) vs Decisions (après GO)
- Mesures : exactitude, FP/FN, expression d'incertitude, stabilité (N runs), coût, latence, contacts
- Types : predicate / choice / score selon cas
- Pas de seuil universel ; admission Studio post-réponse

## Retrieval (CONV-F22/F23)

- Entrée : `corpus-retrieval-oracle.json`
- Candidats : A lexical · B embeddings locaux · C VS (GO) · D File Search (GO)
- Mesures : recall@k, precision@k, MRR, erreurs version, fuites scope
- Lifecycle : update / revoke / delete / rebuild

## PDF / Vision (CONV-F24)

- Entrée : `corpus-pdf-vision-oracle.json`
- Candidats : extract local · vision ponctuelle · combiné
- Invariants : visionneuse, non-invention, couverture

## Exécution substituée

```bash
node projects/sfia-studio-next/web/scripts/ml2-document-intelligence-substituted-bench.mjs
```

Sortie : `web/.sfia-evidence/document-intelligence/substituted-bench-*.json`

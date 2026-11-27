# ML2 I2 — Checkpoint de sélection Morris

| Champ | Valeur |
|---|---|
| Campagne | `ml2-i2-docintel-20261127` |
| Manifeste | `live-campaign-manifest-final.md` (GO consommé) |
| Statut | **BOUNDED LIVE COMPLETED — SELECTION CHECKPOINT** |
| Construction définitive | **INTERDITE** jusqu'à GO sélection Morris |
| Nora intégrée | **non exécutée** — 40 contacts réservés intacts |
| WEB LIVE | OFF |
| RECETTE | non touchée |
| Persistance ops / migration | aucune |

Evidence : `web/.sfia-evidence/document-intelligence/live-campaign/`

---

## 1. Résultats LIVE (ordre manifeste)

| Phase | Résultat | HTTP phase | Tokens in / out (usage) | Note |
|---|---|---|---|---|
| **Decisions** `gpt-6-luna` | **12/12** correct | 12 | 2168 / 0 | Probabilités calibrées sur POS/NEG/CHOICE/SCORE ; **incertitude faible** sur AMB/INS (`uncertaintyOk=false`, p≈0 / 0.01) |
| **Responses contrôle** `gpt-6-luna` medium `store=false` | **12/12** correct | 24 (count+create) | 1254 / 1022 | Aucun mismatch case-à-case vs Decisions |
| **Embeddings** `text-embedding-3-small` | meanRecall@5 = **0.625** | 2 | 289 / 0 | Exact/para/syn/hom/ver OK ; **révocation / absent / isolation / deleted** faibles ; revoked souvent dans top brut |
| **Vector Store** retrieval synthétique | meanRecall@5 = **0.75** (8 requêtes) | 25 | n/a | Meilleur que emb local sur ce sous-jeu ; **révocation / absent** = 0 ; cleanup obligatoire |
| **Vision** `gpt-6.1-terra` medium | **6/6** ok | 12 (count+create) | 2930 / 156 | SCN/DIA/BPMN/ILLEG/TXT/TBL |
| **Cleanup** | 6 files + 1 VS deleted ; verify **404** | 8 | — | `remote-resource-manifest.json` |
| **Nora réservée** | 0 consommé | 0 / 40 | — | préservée |

### Enveloppe

| | |
|---|---|
| Plafond HTTP | 236 |
| HTTP phase cumulé (evidence) | **83** (+ ~2 contacts d'échec pré-succès → plancher conservateur **≈85**) |
| Restant vs plafond | **≈151** (dont cleanup restant 16 + Nora 40 à ne pas absorber ailleurs) |
| Tokens cognitifs mesurés (phases tokenisées) | ≈ **6641 in + 1178 out** (hors réservations max_output Frontier) |
| Plafond tokens | 344 000 |
| Incident comptable | un `__reset` vitest a zéroté `live-campaign-state.json` mid-run ; **phase evidence = SoT** ; envelope reconstruite + protection anti-wipe LIVE |

Baseline produit `searchJournalSubjects` (pré-campagne) : isolationFail=0 · revokedMobilized=0.

---

## 2. Recommandation d'architecture (KEEP / ADAPT / REPLACE / DEFER)

| Domaine | Décision | Motif LIVE |
|---|---|---|
| **Decisions** pour jugements structurés (predicate / choice / score) | **ADAPT → KEEP ciblé** | 12/12, surface native, usage output≈0, bornable Frontier ; **ne pas** remplacer `semantic-qualification` cœur |
| **Responses** pour contrôle / narration / multi-étape `store=false` | **KEEP** | 12/12 équivalent sur ce corpus ; rester SoT pour agents Nora et chemins non typés Decisions |
| Remplacement large des jugements Responses par Decisions | **DEFER / refuse** | Pas de gain discriminant vs contrôle ; incertitude AMB/INS non prouvée |
| **Lexical D4** `searchJournalSubjects` | **KEEP** | Baseline isolation/révocation saine ; exact + droits |
| **Embeddings locaux + filtre mobilisation** | **ADAPT** | Recall utile sur paraphrase/synonyme ; **obligatoire** filtre revoked/deleted/isolation côté Studio — pas d'autorité seule |
| **Vector Stores / File Search hébergé** | **DEFER** | Recall légèrement supérieur mais persistance distante + cleanup ; **pas** DATA-01 ops ; pas de migration |
| **Vision ponctuelle** (`input_image` / `input_file` PDF) Terra medium | **ADAPT** | 6/6 discriminant sur schémas/scans/PDF synthétiques ; **pas** OCR local REPLACE ; **pas** `fileId` durable |
| **Extract PDF déterministe + viewer** | **KEEP** | Vision = complément borné, pas remplacement |
| **FileId / VS durables opérationnels** | **DEFER** | Cleanup prouvé en expérimental seulement |
| Admission modèle/effort + Frontier `familyHttp` | **KEEP / ADAPT** | Bloquages LIVE (effort, max_output Decisions, hints) confirment la frontière |

### Architecture cible proposée (avant construction)

```
D4 lexical (KEEP)
  + embeddings locaux filtrés mobilisation (ADAPT)
  + Decisions ciblées pour questions typées annexes (ADAPT)
  + Responses Nora / contrôle (KEEP, store=false)
  + Vision ponctuelle scans/schémas (ADAPT)
  — VS / File Search / fileId durable (DEFER)
```

Hybride **E = A+B** confirmé. C/D restent hors construction sans nouveau GO DATA-01.

---

## 3. Hors scope jusqu'au GO sélection

- Construction définitive / câblage produit
- Nora intégrée (40 contacts)
- Migration, Admin key, WEB LIVE, RECETTE
- Nouvelle campagne / reset d'enveloppe / augmentation de plafonds

**Attente : GO sélection Morris** (valider / amender la grille ci-dessus) avant toute construction.

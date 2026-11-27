# CHECKPOINT CONSOLIDÉ MORRIS — Gates A + B

| Champ | Valeur |
|---|---|
| Delivery | Macro-lot 2 — Final product delivery |
| HEAD préparation (entrée) | `8b75249a` (+ commits locaux de correction en cours) |
| Campagne | `ml2-i2-docintel-20261127` — **pas de renouvellement** |
| Handoff intermédiaire | **interdit** — poursuivre dans le même Delivery après GO |
| RECETTE / STABLE | **protégées** |
| WEB LIVE | OFF |
| Admin | unused |

---

## Gate A — Migration 027 DEV

### SQL définitif
- Fichier : `web/src/db/migrations/candidates/027_derived_embedding_chunks.sql`
- Additive · FK `projects`, `preparations`, `pilots`
- `owner_pilot_id` = attribution **≠** preuve d'autorisation
- Pas de pgvector · `vector_json` jsonb
- Partial index mobilizable · UNIQUE idempotente

### Impacts
- Table projection dérivée reconstructible (D4/D9 restent SoT)
- Backend runtime : `SFIA_DERIVED_EMBEDDING_BACKEND=pg` après apply
- Retrait chemin fichier opérationnel **après** qualify PG (pas de dual-write)
- Fallback fonctionnel = recherche lexicale exacte autorisée

### Sauvegarde préalable (opérateur)
```bash
pg_dump -h 127.0.0.1 -p 5433 -U <user> -d sfia_next_dev \
  --format=custom -f /tmp/sfia_next_dev_pre_027_$(date +%Y%m%d).dump
```

### Rollback
```sql
DROP TABLE IF EXISTS derived_embedding_chunks;
```
Puis `SFIA_DERIVED_EMBEDDING_BACKEND=file` uniquement si GO le réautorise temporairement — sinon lexical only.

### Preuves locales préparées
- Module `derived-embedding-pg.ts` (inactive sans backend=pg)
- Tests unit droits/admissibilité + bounded-judgment
- Candidate hors `db-migrate.sh` jusqu'au GO

### Demande
**GO Morris A** : appliquer 027 sur DEV :5433 uniquement, bascule backend=pg, rebuild index synthétique, tests transactionnels.

---

## Gate B — Qualification LIVE intégrée (même campagne)

### État cumulatif (SoT evidence — réconcilié)

Source : `qualify-report.json` / `envelope-cumulative-reconstructed.json`

| Compteur | Committed | Max | Restant |
|---|---|---|---|
| HTTP global | **90** | 236 | **146** |
| decisions | 13 | 24 | 11 |
| embeddings | 4 | 12 | 8 |
| responses | 20 | 112 | 92 |
| vector_stores | 29 | 88 | 59 |
| files | 12 | 40 | 28 |
| Nora réserve | ~2 | 40 | **~38** |
| Cleanup réserve | 8 | 24 | **16** |

Tokens usage LIVE phases : ~6641 in / 1178 out.  
Plafond tokens : 344000.  
InputTokenCount attempts committed : 21.

**Ces chiffres ne sont pas une autorisation de consommer tout le reliquat.**

### Proposition d'enveloppe LIVE post-GO (à valider)

| Opération | Contacts proposés | Famille | Justification |
|---|---|---|---|
| Rebuild embeddings (PG ou file selon A) | ≤4 | embeddings | Index synthétique admissible-only |
| Hybrid search + negative rights | ≤3 | embeddings | Query vectors |
| Bounded judgment (AMB/falses) | ≤4 | decisions + responses fallback | CONV-F21 recalibration |
| Vision punctual (schema/scan) | ≤3 | responses | F24 product path |
| Nora parcours intégré (workId/D3/tools) | ≤12 | responses | F25 product loop |
| Marge / erreurs | ≤4 | mixed | budget épuisé / invalid |
| **Total proposé** | **≤30 HTTP** | — | ≪ 146 restants |

Durée estimée : 20–40 min.  
Coût : non inventé — observation Frontier + usage fournisseur.  
Flags temporaires DEV : `SFIA_DERIVED_EMBEDDING_SEARCH=1`, `SFIA_BOUNDED_JUDGMENT=1`, `SFIA_DOCUMENT_VISION_PUNCTUAL=1`, `SFIA_LIVE_CAMPAIGN_ID=ml2-i2-docintel-20261127`, `SFIA_PROTECT_CAMPAIGN_ENVELOPE=1`.  
Après qualify : **flags OFF**.

### Protections
- Frontier-only clients (Embeddings / Decisions / Vision)
- Pas de transfert entre sous-enveloppes
- Corpus **synthétique** uniquement
- Pas de données projet réelles
- D3 V1 · pas de fileId durable · pas D6 IA

### Incident historique (non masqué)
Vitest `__reset` a zéroté l'état mid-campaign ; reconstruit depuis phases ; protection désormais **générique** (env/flag `protectPersisted`) — plus d'exception hardcodée `ml2-i2-docintel-20261127`.

### Demande
**GO Morris B** : émettre dans l'enveloppe proposée ci-dessus, même campaignId, après (ou avec) Gate A selon arbitrage Morris.

---

## Ordre recommandé

1. GO A (027 DEV) → apply → rebuild → tests PG  
2. GO B (LIVE borné) → parcours Studio réel + négatifs  
3. Flags OFF · commit local · Review Pack FULL unique · Handoff L3

## Travaux poursuivis sans GO (autorisés)

Corrections droits/rebuild/judgment/Frontier/FinOps audit · tests substitués · documentation · build · commits locaux — **sans** apply 027 ni émission LIVE.

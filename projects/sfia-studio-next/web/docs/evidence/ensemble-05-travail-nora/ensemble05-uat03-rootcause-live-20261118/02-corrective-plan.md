# Plan correctif UAT-03 — NON DÉPLOYÉ RECETTE

**Type envisagé :** PATCH compatible · **NO RELEASE** tant que non validé  
**Candidat RECETTE actuel :** inchangé (`ba1e55ec`)

## Correctif recommandé (ordre)

### 1. Schéma sequence — capacité utile (principal)

Dans `visual-composition.ts` (Agent + parse runtime alignés) :

- Porter `steps[].detail` de `max(400)` → **`max(1200)`** (ou 800 minimum),  
  **ou** scinder en `expectedResult` + `vigilance` (chacun ≤400) si on veut conserver la densité éditoriale.

Justification : UAT-03 demande explicitement résultats + vigilance par étape ; 400 chars est insuffisant pour une réponse honnête.

Blast radius : toutes les sequences ; vérifier Level-B S-parcours + matrices/timeline non impactées (autres champs).

### 2. Instruction D3 (complément)

Dans le prompt adapter : pour `sequence`, demander des détails **concis** et rappeler la limite effective — filet de sécurité, pas seul correctif.

### 3. Observabilité (déjà en DEV — à inclure dans le candidat)

- Classification `Invalid output type` / path Zod / `error_kind` / fingerprint.  
- Noms stables post-minify.  
- Ephemeral DEV dump seulement (`STUDIO_NORA_DIAG_EPHEMERAL`).  
- Ne pas activer `setSensitiveDataLoggingEnabled` hors DEV diagnostique.

### 4. Ne pas faire

- Ne pas transformer UNKNOWN → COMPLETE sans sortie valide.  
- Ne pas auto-retry les tours historiques.  
- Ne pas élargir tous les max du schéma au hasard.  
- Ne pas upgrader le SDK comme « preuve ».

## Tests avant nouveau candidat RECETTE

| Test | Attendu |
|---|---|
| Unit classification UAT-03 messages | SCHEMA_OR_OUTPUT + path + max_length |
| Unit Zod detail 401 vs 400 / 1200 | fail/pass aligné |
| Level-B sequence 6 étapes riches | COMPLETE ou repli prose contrôlé |
| LIVE UAT-03 exact (GO+budget) | COMPLETE sequence |
| LIVE UAT-01/02 régression | COMPLETE |
| Idempotence / UNKNOWN historiques | inchangés |

## Déploiement

1. Commit local candidat PATCH.  
2. Build isolé.  
3. GO Morris cutover RECETTE (contrat séparé).  
4. Rollback = script e224d627 / ba1e55ec selon décision.

## Gestion UNKNOWN existants

Laisser les messages UAT-03a/b en UNKNOWN. Morris peut renvoyer une **nouvelle** demande après correctif (nouvelle tentative).

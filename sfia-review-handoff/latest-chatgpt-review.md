# SFIA Review Pack — Full
## ML4D Ensemble 05 — Nora LIVE smoke ≤2 (post Option A RECETTE)

**Date :** 2026-11-17 (~19:30 CET / LIVE ~18:29–18:30Z)
**GO Morris :** « ok go » — smoke LIVE borné après Option A deploy
**Cycle :** 9 — QA / validation · RUN · Critical (LIVE fournisseur + données RECETTE)
**Macro-lot :** ML4D Ensemble 05 — Travail avec Nora
**Exécutant :** Cursor · **Revue :** ChatGPT · **Autorité :** Morris

---

## 1. Verdict unique

### `NORA E05 LIVE SMOKE PASS — COMPOSITION LIVE OBSERVED — UAT R01–R08 READY`

- 2/2 tours LIVE `openai-agents-sdk-live` → **COMPLETE** / `providerContacted=YES`
- Aucune fixture · aucun `PROVIDER_SCHEMA_OR_OUTPUT`
- Tour 2 : composition visuelle `comparison` E05 rendue en UI Travail
- Documents 117 préservés · pas d'effet D4/D7/Git
- **R01–R08 non exécutés** · E05 non clôturé · STABLE NOT AVAILABLE

---

## 2. Runtime identity (inchangé)

| Item | Valeur |
| --- | --- |
| URL | `http://127.0.0.1:3200` |
| SOURCE_SHA | `208aaa40672433e7dd0bd989f96d26e4e24f7798` |
| BUILD_ID | `_xkrsw46qX4QKUC0bBU8i` |
| Worktree | `…/ensemble05-recette-build-208aaa40` |
| Lane | RECETTE · `SFIA_COG_PROFILE_TYPE=TEST_BOUNDARY` |
| Fixture | unset |
| Model | `gpt-6.1-sol` |
| Prior deploy handoff | `sfia/review-handoff@ff132f2c` |

---

## 3. Git Truth (DEV)

| Item | Valeur |
| --- | --- |
| Branche | `feat/next-ml4d-project-space-20261116` |
| HEAD | `208aaa40…` (aucun nouveau commit produit) |
| Push produit | AUCUN |

---

## 4. Protocole smoke

Projet : `proj_4f0e3d47-7279-4434-b287-39a445c18b32` (RecetteSmoke-1794833176)
Préparation : `prep_f5530e6b-92a3-48c6-a32b-affdaf471a20`
Auth : `POST /api/dev/login` Pilot A (FAKE auth / REAL Nora)
Endpoint : `POST /api/preparations/{prep}/messages`
Limite : **2** tours · pas d'effet métier · pas de mutation Git

### Compteurs

| Metric | Before | After | Δ |
| --- | ---: | ---: | ---: |
| documents | 117 | 117 | 0 |
| projects | 22 | 22 | 0 |
| messages | 508 | 512 | +4 (2 user + 2 assistant) |
| preparations | 193 | 193 | 0 |
| conversations | 193 | 193 | 0 |

Note : 508 déjà > 506 post-deploy (tour concurrent antérieur hors smoke Cursor, OBS `gen_815f5be4` ~18:25Z SUCCESS sur autre op). Smoke Cursor = +4.

---

## 5. Tour 1 — texte LIVE

| Champ | Valeur |
| --- | --- |
| clientTurnKey | `live-smoke-208aaa40-t1-1794940152` |
| generationId | `gen_52f2b0a7-e46b-404f-afca-8d4b0ca3b990` |
| attemptId | `att_093cd783-5ba3-4570-b192-03176bd4b55c` |
| noraMode | `openai-agents-sdk-live` |
| status | **COMPLETE** |
| providerContacted | **YES** |
| outcome attempt | SUCCESS |
| wall | ~10.4 s |
| visualComposition | absent (attendu) |
| OBS | policy_selected → provider_attempt → turn.completed SUCCESS |

Réponse utile reçue (extrait) : distinction LIVE vs fixture déterministe en 3 phrases.

---

## 6. Tour 2 — comparaison + composition

| Champ | Valeur |
| --- | --- |
| clientTurnKey | `live-smoke-208aaa40-t2-1794940181` |
| generationId | `gen_72d0fb0d-f4e6-462c-b913-e7360c4ee991` |
| attemptId | `att_f7c78469-c9b5-4938-8fce-8ac4eef7f572` |
| noraMode | `openai-agents-sdk-live` |
| status | **COMPLETE** |
| semanticQualificationStatus | QUALIFIED |
| providerContacted | **YES** |
| wall | ~28.3 s |
| PROVIDER_SCHEMA | **NONE** |

### visualComposition (résumé non secret)

```json
{
  "schemaVersion": "e05-visual-composition-v1",
  "blockKinds": [
    "comparison"
  ],
  "comparisonId": "comparaison-deploiement",
  "title": "Progressif ou simultané ?",
  "alternatives": [
    "progressif",
    "simultane"
  ],
  "criteriaIds": [
    "condition-structurelle",
    "securisation"
  ],
  "hasRecommendation": true,
  "hasTextAlternative": true
}
```

Persistance : `turnProjections[].visualComposition` présent pour `msg` lié à `gen_72d0fb0d…`.

### UI browser (Travail)

- Historique UNKNOWN antérieur toujours visible
- Réponse texte LIVE tour 1 visible
- Région « Progressif ou simultané ? » avec alternatives, listes avantages/risques, recommandation conditionnelle
- Composer présent · **aucun 3e envoi**

---

## 7. Fake / Real Qualification

| Frontière | Résultat |
| --- | --- |
| D3 → Agents SDK → OpenAI | **REAL SUCCESS** ×2 |
| Schema empty `{}` regress | **NOT OBSERVED** |
| Option A non-strict | **LIVE ACCEPTED** (ce modèle / cette lane) |
| Composition graphique LIVE | **OBSERVED** (comparison E05) |
| Fixture | ABSENT |
| R01–R08 | NOT RUN |
| E05 closure / STABLE / ADOPTED | NOT CLAIMED |

---

## 8. Réserves

- Strict SO complet reste un gap déterministe (Option A) — LIVE a réussi en non-strict.
- UAT Morris R01–R08 reste à conduire manuellement.
- Auth smoke = DEV test login (FAKE identité) ; Nora path = REAL.
- Un tour LIVE SUCCESS concurrent (~18:25Z, `gen_815f5be4`) observé hors protocole Cursor ; non compté dans les ≤2 Cursor.

---

## 9. État final

| Lane | État |
| --- | --- |
| RECETTE | `208aaa40` / `_xkrsw46qX4QKUC0bBU8i` inchangé |
| Rollback | toujours disponible vers `34a5e102` / `xKkQienCXTPYIqkFElAuE` |
| Produit Git | tip `208aaa40` · no push |

---

## 10. Prochain gate Morris

1. Conduire UAT R01–R08 sur RECETTE.
2. Décider clôture / suite Ensemble 05.
3. Ne pas promouvoir STABLE sans GO distinct.

**Pas de 3e appel OpenAI. Pas de modification D3. Pas de push produit.**

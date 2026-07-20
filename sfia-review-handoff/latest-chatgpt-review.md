# SFIA Studio — Increment C Corrective Review Pack (FULL)

- **Date / heure / fuseau :** 2026-07-20 06:58 CEST (Europe/Paris)
- **Cycle :** 9 — QA / validation corrective
- **Profil :** Critical
- **Justification profil :** Le contrat fermé alimente un GPT live réel pour le routage SFIA ; une liste incorrecte produit une qualification fonctionnellement erronée malgré un JSON techniquement valide.
- **Typologie :** INC / QA / LIVE GPT / CONTRACT CORRECTION
- **GO Morris consommé :** GO pour anomalies + corrections obligatoires (contrat Increment C, schéma, prompt, validateurs, UI, tests, 1 observation live, review pack, handoff). **Sans** commit/push delivery, PR, merge, D/E, Cursor live, GPT analyse finale, docs 01–40, méthode, Figma, dépendances, seuils FinOps, architecture.

---

## 1. Truth Check

| Check | Résultat |
|---|---|
| Repo | `sfia-workspace` |
| Branche active | `delivery/sfia-studio-poc-increment-c` |
| HEAD | `f80fa1dc902f7532835ecad067da0ebdf4baef99` |
| Base attendue | `f80fa1dc902f7532835ecad067da0ebdf4baef99` — **OK** |
| `origin/main` | `f80fa1dc902f7532835ecad067da0ebdf4baef99` — aligné |
| Commit Increment C | **aucun** (0 commits ahead) |
| Push delivery | **absent** |
| Staging | **non effectué** |
| Modifications Increment C | **présentes** (locales untracked/modified) |
| Fichiers étrangers hors périmètre Studio | non touchés (docs 01–40, method, prompts, package.json intacts) |
| `git fetch origin` | OK |
| Rebase / reset --hard | **non** |

---

## 2. Sources Git consultées

**Méthode :**
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`

**Projet (lecture, non modifiés) :**
- `projects/sfia-studio/32-poc-vertical-slice-functional-design.md`
- `projects/sfia-studio/33-poc-vertical-slice-flows-and-rules.md`
- `projects/sfia-studio/34-poc-vertical-slice-decision-pack.md`
- `projects/sfia-studio/38-poc-vertical-slice-backlog.md`
- `projects/sfia-studio/39-poc-vertical-slice-story-map-and-sequencing.md`
- `projects/sfia-studio/40-poc-vertical-slice-backlog-decision-pack.md`

**Handoff précédent :** `origin/sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

---

## 3. Anomalie initiale

`SFIA_CYCLES` était réduit à :
- Cycle 7, Cycle 8, Cycle 9, Cycle 13, **DOC**

Conséquences :
- 11 cycles canoniques omis ;
- DOC n’est pas un cycle SFIA v2.6 ;
- GPT forcé vers un sous-ensemble incorrect ou `INVALID_RESPONSE`.

`SFIA_BLOCKS` utilisait des catégories génériques non canoniques :
`security`, `governance`, `delivery`, `architecture`, `data`, `ux`, `ops`, `finops`, `documentation`.

---

## 4. Inventaire avant correction (app/** + harness/**)

| Emplacement | Ancienne liste | Action |
|---|---|---|
| `harness/src/types/qualificationCandidate.ts` | Cycle 7/8/9/13/DOC + blocs génériques | **Corrigé** — source unique |
| `harness/src/ports/gptQualificationLive.ts` | fixture Cycle 8 / security+governance | **Corrigé** |
| `harness/src/validation/qualificationCandidateValidator.ts` | consommait anciennes constantes | **Corrigé** (maxItems blocs → 11) |
| `harness/tests/increment-c.test.ts` | fixtures legacy | **Corrigé** + tests 15/11 |
| `app/__tests__/increment-c.test.tsx` | Cycle 8 / security | **Corrigé** |
| `app/features/.../VsNouvelleDemandeScreen.tsx` | affichage raw ids | **Corrigé** (libellés) |
| Spike legacy `gptContracts.ts` / `gptOutputValidator.ts` / `openaiRealSpike.ts` / fixtures spike | Cycle 7–13+DOC | **Non modifié** — hors chemin Increment C (dette résiduelle documentée) |

---

## 5. Listes canoniques retenues

### 15 cycles (machine id → libellé)

1. `cadrage` → Cadrage  
2. `conception-fonctionnelle` → Conception fonctionnelle  
3. `architecture-fonctionnelle` → Architecture fonctionnelle  
4. `ux-ui` → UX/UI  
5. `backlog-user-stories` → Backlog / user stories  
6. `architecture-technique` → Architecture technique  
7. `integration-devops` → Intégration / DevOps  
8. `delivery-implementation` → Delivery / implémentation  
9. `qa-validation` → QA / validation  
10. `securite-rssi` → Sécurité / RSSI  
11. `deploiement-release` → Déploiement / release  
12. `observabilite-run-readiness` → Observabilité / RUN readiness  
13. `pr-readiness` → PR readiness  
14. `post-merge` → Post-merge  
15. `capitalisation-rex` → Capitalisation / REX  

**DOC exclu.** Aucune valeur `Cycle N`.

### 11 blocs (machine id → libellé)

1. `finops` → FinOps  
2. `greenops` → GreenOps  
3. `rgpd` → RGPD  
4. `accessibilite` → Accessibilité  
5. `performance` → Performance  
6. `ux-ui-figma` → UX/UI + Figma  
7. `securite` → Sécurité  
8. `devops` → DevOps  
9. `deploiement-release` → Déploiement / release  
10. `observabilite-run-readiness` → Observabilité / RUN readiness  
11. `capitalisation-rex` → Capitalisation / REX  

**Rejetés :** governance, delivery, architecture, data, ux, ops, documentation, security (legacy).

---

## 6. Source unique

**Autorité unique des enums / schéma / prompt / validator :**  
`projects/sfia-studio/harness/src/types/qualificationCandidate.ts`

- `SFIA_CYCLES` / `SFIA_BLOCKS` / labels  
- `QUALIFICATION_MODEL_JSON_SCHEMA` (enum dérivé)  
- `INC_C_QUALIFICATION_RESPONSE_FORMAT` (`qualification_candidate_1_1_0`)  
- `INC_C_QUALIFICATION_SYSTEM_PROMPT` (injecte les mêmes constantes)  
- `schemaVersion` : `qualification-candidate-1.1.0`

**Miroir d’affichage Studio (libellés seulement) :**  
`projects/sfia-studio/app/lib/harness/sfiaCanonicalLabels.ts`  
→ ne redéfinit pas les ids autorisés ; dette mineure de duplication des libellés (pas d’enums divergents sur le chemin live).

---

## 7. JSON Schema corrigé (extrait)

```json
{
  "schemaVersion": { "enum": ["qualification-candidate-1.1.0"] },
  "proposedCycle": {
    "type": "string",
    "enum": [
      "cadrage", "conception-fonctionnelle", "architecture-fonctionnelle",
      "ux-ui", "backlog-user-stories", "architecture-technique",
      "integration-devops", "delivery-implementation", "qa-validation",
      "securite-rssi", "deploiement-release", "observabilite-run-readiness",
      "pr-readiness", "post-merge", "capitalisation-rex"
    ]
  },
  "proposedBlocks": {
    "type": "array",
    "maxItems": 11,
    "items": {
      "type": "string",
      "enum": [
        "finops", "greenops", "rgpd", "accessibilite", "performance",
        "ux-ui-figma", "securite", "devops", "deploiement-release",
        "observabilite-run-readiness", "capitalisation-rex"
      ]
    }
  }
}
```

Structured Outputs name : `qualification_candidate_1_1_0`, `strict: true`.

---

## 8. Prompt système corrigé (substance)

- Producteur QualificationCandidate JSON strict, candidate-only  
- Injecte `SFIA_CYCLES` (15) + labels  
- Injecte `SFIA_BLOCKS` (11) + labels  
- Interdit DOC et Cycle 7/8/9/13  
- Interdit blocs génériques (governance, data, ops, documentation, security legacy)  
- Profils Light/Standard/Critical/Capitalization  
- Critical ⇒ justification non vide  
- Pas d’outils / Cursor / Git / secrets  

---

## 9. Validator corrigé

`qualificationCandidateValidator.ts` :
- cycle ∈ `SFIA_CYCLES` (rejette DOC, Cycle 8, etc.)  
- blocs ∈ `SFIA_BLOCKS`, max 11  
- `assertCandidateAuthorityInvariants` : candidateOnly=true, morrisDecisionRequired=true, executionAuthorized=false  

---

## 10. UI corrigée

`VsNouvelleDemandeScreen.tsx` affiche `formatSfiaCycle` / `formatSfiaBlocks`  
(ex. `Delivery / implémentation (delivery-implementation)`).  
Testid `vs-qual-blocks` ajouté.

---

## 11. Fichiers créés / modifiés (périmètre)

**Créés :**
- `harness/src/types/qualificationCandidate.ts` (réécrit canonique)
- `harness/src/validation/qualificationCandidateValidator.ts`
- `harness/src/ports/gptQualificationLive.ts`
- `harness/src/ports/openaiTransportShared.ts`
- `harness/src/finops/qualificationLimits.ts`
- `harness/tests/increment-c.test.ts`
- `harness/tests/increment-c-live-observe.test.ts`
- `app/lib/harness/qualifyAction.ts`
- `app/lib/harness/sfiaCanonicalLabels.ts`
- `app/__tests__/increment-c.test.tsx`
- `app/e2e/increment-c.spec.ts`
- `.tmp-sfia-review/chatgpt-review.md` (ce pack)
- `.tmp-sfia-review/screenshots-increment-c-corrective/**`

**Modifiés :**
- `app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx`
- `harness/src/cli.ts` / `index.ts` (commandes qualify-*)
- fichiers Increment B mineurs déjà présents sur la branche locale

**Non modifiés (protégés) :** `01-*`–`40-*`, `prompts/**`, `method/**`, `package.json`, lockfiles, Figma, `.env`, seuils FinOps numériques, modèle `gpt-5.4-mini`.

---

## 12. Preuves DOC / anciens blocs rejetés

Fichier : `.tmp-sfia-review/screenshots-increment-c-corrective/rejection-fixtures.json`

| Entrée | Résultat |
|---|---|
| cycle `DOC` | `INVALID_RESPONSE` — Unknown cycle: DOC |
| cycle `Cycle 8` | `INVALID_RESPONSE` |
| cycle `Cycle 99` | `INVALID_RESPONSE` |
| block `governance` | Unauthorized block |
| block `data` / `ops` / `documentation` / `security` | Unauthorized block |

Tests unitaires dédiés dans `harness/tests/increment-c.test.ts` (15 cycles + 11 blocs + rejet DOC + rejet génériques).

---

## 13. Tests détaillés

### Cycles (1–8)
1. 15 cycles acceptés — **PASS**  
2. cycle inconnu rejeté — **PASS**  
3. DOC rejeté — **PASS**  
4–8. ux-ui, securite-rssi, deploiement-release, post-merge, capitalisation-rex — **PASS**

### Blocs (9–15)
9. 11 blocs acceptés — **PASS**  
10–14. rgpd, accessibilite, greenops, ux-ui-figma, observabilite-run-readiness — **PASS**  
15. governance/data/ops/documentation rejetés — **PASS**

### Autorité (16–19)
16–18. candidateOnly=false / executionAuthorized=true / morrisDecisionRequired=false rejetés — **PASS**  
19. fixture ≠ décision Morris — **PASS**

### Live / limites (20–27)
20. modèle différent rejeté — **PASS**  
21–22. pas de fallback / retry=0 — **PASS**  
23–24. seuils FinOps + timeout 30s inchangés — **PASS** (`INC_C_LIMITS` assertés)  
25. clé non exposée — **PASS**  
26–27. pas Cursor live / pas git push dans port — **PASS**

### Régression
| Check | Résultat |
|---|---|
| harness typecheck | PASS |
| harness tests (116 pass, 2 skip) | PASS |
| app typecheck | PASS |
| app lint | PASS |
| app unit (26) incl. A/B/C | PASS |
| app build | PASS |
| E2E A+B+C (20) | PASS (serveur 3020 rafraîchi) |
| E2E P0 smoke (6) | PASS |
| `git diff --check` | PASS (exit 0) |

---

## 14. Observation live corrective (unique)

- **Flags :** `SFIA_GPT_INC_C_OBSERVE=1` + `SFIA_GPT_INC_C_LIVE=1` + `OPENAI_MODEL=gpt-5.4-mini`  
- **Appels :** 1 seul (`retriesAttempted: 0`)  
- **Requête synthétique :**  
  « Concevoir le parcours UX/UI d’un formulaire public contenant des données personnelles, avec exigences d’accessibilité, sans démarrer le développement avant validation Morris. »

### Résultat sanitisé

| Champ | Valeur |
|---|---|
| status | `CANDIDATE_CREATED` |
| model | `gpt-5.4-mini` |
| proposedCycle | **`ux-ui`** (auparavant impossible) |
| proposedProfile | Critical (proposition) |
| proposedBlocks | **`accessibilite`, `rgpd`, `ux-ui-figma`, `securite`** |
| authority | candidateOnly=true, morrisDecisionRequired=true, executionAuthorized=false |
| inputTokens | 1228 |
| outputTokens | 461 |
| totalTokens | 1689 |
| estimatedCostEur | ≈ **0.002756** (estimate) |
| durationMs | 3440 |
| events | requested → started → completed → candidate_created |

Preuves :
- `.tmp-sfia-review/inc-c-corrective-live-observation.json`
- `.tmp-sfia-review/screenshots-increment-c-corrective/live-observation-sanitized.json`
- `.tmp-sfia-review/screenshots-increment-c-corrective/qualification-candidate.json`
- `.tmp-sfia-review/screenshots-increment-c-corrective/qualification-usage.json`
- `.tmp-sfia-review/screenshots-increment-c-corrective/live-events.jsonl`

Aucune correction manuelle de la réponse provider. Aucun second appel live.

---

## 15. Captures runtime

Répertoire : `.tmp-sfia-review/screenshots-increment-c-corrective/` (non versionné)

| Artifact | Contenu |
|---|---|
| `inc-c-corr-candidate-canonical.png` | Écran fixture avec cycle/blocs canoniques |
| `inc-c-corr-usage-no-secret.png` | Tokens / coût estimé, sans secret |
| `inc-c-corr-morris-required.png` | Décision Morris toujours requise |
| `live-observation-sanitized.json` | Observation GPT réelle |
| `rejection-fixtures.json` | DOC + anciens blocs rejetés |
| `qualification-*.json` / `live-events.jsonl` | Journal / preuve |

---

## 16. Garde-fous préservés

| Garde-fou | Statut |
|---|---|
| Modèle `gpt-5.4-mini` | inchangé |
| FinOps (6k/1.5k/7.5k, €0.05, €1/j, 3/session, 20/j) | inchangé |
| timeout 30s | inchangé |
| retry = 0 | inchangé |
| fail-closed | inchangé |
| clé jamais dans UI/résultats | OK (scan négatif) |
| Cursor live | **absent** |
| Git distant applicatif | **absent** |
| Architecture Studio → Server Action → harness CLI | inchangée |

---

## 17. git status final (extrait)

Branche : `delivery/sfia-studio-poc-increment-c` @ `f80fa1dc…`  
Modifications locales Increment C présentes ; **non stagées** ; **non commitées** ; **non poussées**.  
Untracked review : `.tmp-sfia-review/**`.

---

## 18. Réserves

1. **Dette résiduelle spike :** chemins `gptContracts` / `openaiRealSpike` / `gptOutputValidator` conservent encore Cycle 7–13+DOC — hors Increment C live ; ne pas confondre avec le contrat de qualification.  
2. **Miroir labels Studio :** `sfiaCanonicalLabels.ts` duplique les libellés (pas les enums) — acceptable sans pivot architectural.  
3. Observation live = 1 échantillon ; ne remplace pas une validation Morris multi-demandes.  
4. Premier run E2E a échoué à cause d’un serveur `3020` stale (`reuseExistingServer`) ; re-run après kill → 20/20 PASS.

---

## 19. Décision Morris attendue

Valider en live UI que :
- les 15 cycles / 11 blocs sont bien ceux du contrat ;
- une qualification reste candidate-only ;
- aucun secret / Cursor / Git distant ;
- puis décider GO/NO-GO pour **staging/commit/push/PR** de la branche delivery (non autorisé par ce GO).

---

## 20. Verdict

**SFIA STUDIO INCREMENT C CANONICAL CONTRACT CORRECTED — MORRIS LIVE QUALIFICATION VALIDATION REQUIRED**

Actions interdites sans nouveau GO Morris : staging, commit, push delivery, PR, merge, incrément D/E, Cursor live, GPT analyse finale, modification seuils, documentaire 01–40, Figma, dépendance nouvelle, MVP, industrialisation.

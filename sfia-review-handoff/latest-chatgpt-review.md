# SFIA Review Pack Full — ML4D / Ensemble 05 — Qualification LIVE bornée Nora (exécutée)

**Date :** 2026-11-18 (Europe/Paris)  
**Cycle principal :** 9 — QA / validation comportementale  
**Cycle intégré :** 8 — Delivery correctif / outillage LIVE  
**Profil :** Critical  
**Macro-lot :** ML4D / Ensemble 05 — Travail avec Nora / composition graphique  
**Environnement :** DEV isolé · **NO RELEASE** · **aucun push produit / PR / merge**  
**GO Morris :** LIVE ≤12 tours + plafond **€25 TTC** (levée STOP `cb407251`)

---

## 1. Verdict unique

# `LIVE COMPOSITION BEHAVIOR PROVEN — BOUNDED SCOPE`

Dans le périmètre effectivement testé (12 tours LIVE, projet DEV, corpus préenregistré), Nora a :

1. contacté le **vrai fournisseur** (`openai-agents-sdk-live · COMPLETE` ×12) ;
2. produit des réponses **pertinentes**, avec réserves et **sans invention chiffrée** (L10) ;
3. **structuré** spontanément lorsque utile (parcours, temporalité, parallèles, branches) ;
4. déclenché l’**admission / rendu** composition sur 5 tours (L05–L09) ;
5. laissé la **prose** dominante quand plus adaptée (L01–L04, L10–L12) ;
6. **persisté** et relu 12 messages assistant après reload — **sans nouveau tour**.

Ne vaut **ni** couverture exhaustive, **ni** Gate C, **ni** ADOPTED, **ni** RECETTE READY, **ni** push produit.

---

## 2. Git Truth Check

| Objet | Valeur |
|---|---|
| Branche | `sfia/next-ml4d-composition-adaptative` |
| HEAD parent | `a783f014935de0dec5ff8e79a2b18eea0e629756` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Worktree | Dirty (Ensemble 05 + outillage LIVE) |
| Empreintes critiques | inchangées vs préflight STOP (`candidate-sha256.txt`) |
| Handoff STOP rattachement | `sfia/review-handoff@cb407251` |
| Nouveau commit produit | **aucun** |

---

## 3. Sources et décisions

Contrat LIVE existant + levée budgétaire Morris (€25 TTC).  
Sources gouvernance ENV-01 / versioning / M1–M5 / composition 01–06 / handoff Level-B `b10fd34a` / STOP budget `cb407251`.

---

## 4. GO Morris consommé

| Limite | Appliquée |
|---|---|
| Tours utilisateur | **12 / 12** exécutés |
| Plafond € | **€25 TTC** — consommé estimé **€10,20** (fallback conservateur) |
| Retry | **0** (aucun retry) |
| Lane | DEV uniquement |
| Effets externes | aucun (D7/D9 write / HumanDecision absents du corpus) |

---

## 5. Candidat et isolation ENV-01

| Contrôle | Résultat |
|---|---|
| Postgres | `sfia-next-dev-pg` `:5433` / `sfia_next_dev` |
| RECETTE `:5434` | non utilisée |
| Serveur LIVE | `scripts/live-web-server.sh` · port **3103** |
| FORCE / SIM / E2E | empty-set (log : `FORCE='' SIM='' E2E='' KEY=set`) |
| Identity | Pilote A (DEV) |
| Projet preuve | `proj_b088c7ca-1847-4693-bccc-cdb8bd194f5a` |

---

## 6. Configuration fournisseur (non secrète)

| Champ | Valeur |
|---|---|
| Mode observé | `openai-agents-sdk-live` |
| Model policy | `gpt-6.1-sol` |
| Tarif vérifié | **$2 / $10** pour 1M tokens in/out (short, OpenAI pricing) |
| Conversion coût | USD × 0,95 EUR × 1,20 TTC |
| Estimation / tour | fallback **€0,85** TTC (usage tokens non exposés UI) |
| Réserve avant tour | €2,00 — jamais déclenchée |

---

## 7–8. Plafonds / préflights C2+SIM

Préflights du STOP budget **conservés** (C2 exact-identity ; SIM fail-closed).  
Non rejoués en totalité ici ; fingerprint adapters inchangés.

---

## 9. Corpus préenregistré

`01-corpus-l01-l12-preregistered.md` — prompts **non réécrits** après observation.

---

## 10. Nombre réel d’appels

| Métrique | Valeur |
|---|---|
| Tours utilisateur LIVE | **12** |
| Contacts fournisseur (status LIVE COMPLETE) | **12** |
| Retries | **0** |
| Tours fixture / SIM | **0** |
| Coût estimé TTC | **€10,20** / €25 |
| Durée moyenne / tour | ~43 s |

---

## 11. Matrice L01–L12

| Tour | D3 LIVE | Données pertinentes | Variante appropriée | Persist/reload | Intégrité | Verdict |
|---|---|---|---|---|---|---|
| L01 | YES | prose progressive deploy | text (correct) | — | OK | **PASS** |
| L02 | YES | synthèse + manque de données projet | text + réserves | — | OK (pas d’invention) | **PASS** |
| L03 | YES | 3 approches tableau prose | text (pas cards) | — | OK | **PASS*** |
| L04 | YES | 5 possibilités critères | text (pas matrix) | — | hypothèses explicites | **PASS*** |
| L05 | YES | parcours 7 étapes | `editorial-sequence` | — | OK | **PASS** |
| L06 | YES | 8 semaines actées | `editorial-sequence` | — | hypothèse qualifiée | **PASS** |
| L07 | YES | 3 chaînes + convergence | `parallel` (≠ directed pur) | — | pas HumanDecision | **PASS*** |
| L08 | YES | branches support saturé | composition présente | — | reco ≠ décision | **PASS** |
| L09 | YES | 3 chantiers parallèles | `parallel` | — | OK | **PASS** |
| L10 | YES | refus graphique quanti | text | — | **aucune invention** | **PASS** |
| L11 | YES | reprise options | text | — | continuité | **PASS** |
| L12 | YES | conseil ouvert | text | reload OK | reco conditionnelle | **PASS** |

\*Écart de **richesse graphique** (texte structuré plutôt que cards/matrix/ELK directed) — acceptable par oracle (« text OK ») ; écart documenté, pas FAIL intégrité.

**Persist/reload :** 12 assistants relus ; fragment L12 matché (`persist-reload.json`).

---

## 12–16. Détails par axe

### Production spontanée
Sans termes techniques de composition dans les prompts. Composition déclenchée spontanément L05–L09.

### Admission / rendu
Compositions acceptées et rendues (séquences éditoriales, parallel). L08 composition sans testid secondaire listé (surface présente).

### Intégrité
L02 / L10 exemplaires : manque de données reconnu ; refus de chart trompeur.

### Persistance
Reload page → même substance ; pas de regénération.

### Captures + SHA-256
Sous `docs/evidence/.../live-bounded-campaign-20261118/runtime/` + `runtime-sha256.txt`.

---

## 17. Défauts trouvés

| ID | Observation | Sévérité | Owner |
|---|---|---|---|
| G-SEL-03/04 | Comparaisons 3/5 options restées en prose structurée (cards/matrix non sélectionnés) | Mineur produit / sélection | D3 qualification + admission |
| G-SEL-07 | Dépendances rendues en `parallel` plutôt qu’un graphe directed dédié | Mineur | mapping variante |
| COST-USAGE | Tokens réels non visibles UI → estimation fallback | Ops preuve | instrumentation (hors mandat majeur) |
| SHOT-CROP | Captures composition parfois centrées sur complément / bas de message | Preuve visuelle | harness screenshot |

Aucun défaut d’autorité, de fuite fixture, ni d’invention chiffrée.

---

## 18. Corrections dans le mandat

Outillage LIVE (pas de changement de contrats D3–D9) :

- `scripts/live-web-server.sh` — FORCE/SIM/E2E empty-set + KEY DEV
- `playwright.live.config.ts` — port 3103
- `tests/e2e/ensemble05-live-bounded.spec.ts` — corpus + ledger + persist

Correctifs C2/SIM du préflight STOP inchangés.

---

## 19. Commandes et résultats

```bash
cd projects/sfia-studio-next/web
env -u STUDIO_FORCE_NORA_FIXTURE -u STUDIO_NORA_SIMULATED_PROVIDER -u STUDIO_E2E \
  STUDIO_LANE=DEV NODE_ENV=development \
  npx playwright test -c playwright.live.config.ts --reporter=line
```

**Résultat :** `1 passed (8.9m)` — log `/tmp/ensemble05-live-bounded.log`  
WebServer : `LIVE webServer :3103 lane=DEV FORCE='' SIM='' E2E='' KEY=set`

---

## 20. Fichiers créés (campagne)

Sous `web/docs/evidence/ensemble-05-travail-nora/live-bounded-campaign-20261118/` :

- `04-budget-approved-go.md`
- `live-cost-ledger.json` (contenu complet des 12 tours + extraits)
- `live-results-matrix.md`
- `persist-reload.json`
- `runtime/*.png` (13 captures) + `runtime-sha256.txt`
- préflight antérieur : `00`–`03`, corpus, budget proposal

Outillage :

- `web/scripts/live-web-server.sh` (complet — empty FORCE)
- `web/playwright.live.config.ts`
- `web/tests/e2e/ensemble05-live-bounded.spec.ts`

---

## 21. Diffs exploitables (outillage LIVE)

### `scripts/live-web-server.sh` (nouveau)

Charge `.env.local` puis **force** :

```bash
export STUDIO_FORCE_NORA_FIXTURE=
export STUDIO_NORA_SIMULATED_PROVIDER=
export STUDIO_E2E=
```

Refuse DB non-DEV ; exige `OPENAI_API_KEY` ; `next dev -p 3103`.

### `playwright.live.config.ts` (nouveau)

`baseURL http://127.0.0.1:3103` ; `webServer: bash scripts/live-web-server.sh` ; `testMatch **/ensemble05-live-bounded.spec.ts`.

### `ensemble05-live-bounded.spec.ts` (nouveau)

Corpus L01–L12 figé ; bootstrap projet **sans** tour Nora seed ; gate budget réserve €2 ; assertions `openai-agents-sdk-live` ; screenshots ; reload persist.

*(Le reste du WT dirty Ensemble 05 Level-A/B est le candidat déjà fingerprinté — non re-diffé ici.)*

---

## 22. Fake/Real Qualification

| Niveau | Statut |
|---|---|
| Level A fixtures | PROVEN (antérieur) |
| Level B SIM | PROVEN (`b10fd34a`) |
| **Level C LIVE** | **PROVEN — 12/12 COMPLETE** |
| Fixture leak | **NONE** |
| SIM leak | **NONE** |
| Product push | **AUCUN** |

---

## 23. Réserves

1. Coût = **estimation conservatrice** (€0,85/tour) faute de tokens facturés exposés.
2. L03/L04 : structuration utile en prose ; cards/matrix non observés (non-échec oracle).
3. L07 : parallel vs directed — écart de sélection.
4. Scope borné : un projet DEV, un pilote, un modèle, 12 intentions.
5. Captures composition parfois incomplètes (crop).

---

## 24. Dette et exit

| Item | Exit |
|---|---|
| Améliorer sélection cards/matrix LIVE | cycle produit distinct |
| Exposer usage tokens → coût réel | instrumentation bornée |
| Gate C / ADOPTED / RECETTE | **Morris** — hors mandat |

---

## 25. Consommation totale

**12 tours · 0 retry · ~€10,20 TTC estimés · plafond €25 · marge ~€14,80**

---

## 26. Proposition de décision suivante

Morris peut :

- clôturer la preuve LIVE bornée composition (ce verdict) ; ou
- ouvrir un correctif ciblé sélection graphique (L03/L04/L07) **sans** nouveau LIVE large ; ou
- arbitrer Gate C / réception Ensemble 05 séparément.

---

## 27. Verdict (réaffirmé)

# `LIVE COMPOSITION BEHAVIOR PROVEN — BOUNDED SCOPE`

**Réponse à la question produit :** oui, dans ce périmètre, lorsque le Pilote parle librement, Nora peut produire des réponses riches, adaptées, fiables et persistantes, et **mobiliser spontanément** le système de composition graphique lorsque c’est pertinent — tout en préférant le texte quand il l’est davantage, et en refusant d’inventer des données.

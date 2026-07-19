# SFIA Studio — Decision pack backlog vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `40-poc-vertical-slice-backlog-decision-pack.md` |
| **Cycle** | 5 — Backlog / user stories |
| **Profil** | Standard |
| **Statut** | `validated-for-versioning` — `VS-BL-CAND-01` à `VS-BL-CAND-12` **validées Morris** ; versionnement autorisé ; merge et delivery = gates distincts |
| **Branche** | `backlog/sfia-studio-poc-vertical-slice` |
| **Base Git** | `722f586855743f87a6d3318ccec2dd6224676e28` |
| **Companions** | [`38`](./38-poc-vertical-slice-backlog.md) · [`39`](./39-poc-vertical-slice-story-map-and-sequencing.md) |
| **Décisions Morris** | Backlog 38–40 validé · A→E validé · Incr. A retenu · commit/push/draft PR autorisés |

> Observations / hypothèses / options / recommandations.
> `VS-BL-CAND-01`…`12` = **VALIDÉES** (Morris). Merge PR, delivery et live restent soumis à GO distincts.

---

## 1. Synthèse

Ce cycle versionne un backlog borné (33 stories × **16 champs**, 10 epics, incréments A–E) pour le vertical slice POC, sans code ni live. Versionnement autorisé ; **merge** et **delivery** non autorisés ici.

| Livrable | Rôle |
|----------|------|
| `38` | Epics, stories, AC, matrice couverture |
| `39` | Story map, séquencement, incréments |
| `40` | Ce pack — `VS-BL-CAND-*` |

---

## 2. Observations (certaines)

1. Docs `32`–`37` intégrés sur `main` @ `722f586…` (PR #228 MERGED).
2. App = 4 routes P0 fixtures ; pas d’adaptateur Studio↔harness ; gate UI actuel ≠ 4 actions VS.
3. Harness = fixtures par défaut ; spikes GPT/Cursor/e2e prouvés hors UI avec réserves (`29`–`31`).
4. Architecture Option B / AF-Option C / Git vérité / Morris L0 = invariants.
5. Pas de CI GitHub pour `projects/sfia-studio/**`.
6. Plafond GPT : obligatoire, valeur **À définir** (VS-CAND-14).
7. Dix états ≠ dix routes = décision UX validée.

---

## 3. Hypothèses

| ID | Hypothèse |
|----|----------|
| H1 | Delivery réutilisera les 4 routes P0 via états/variantes |
| H2 | Incrément A mock suffit à prouver le mapping UX avant adaptateur |
| H3 | Ports fixture harness suffisent pour Incr. B |
| H4 | Tailles XS–L sont relatives (pas d’estimation horaire) |
| H5 | Live GPT/Cursor restent derrière flags + GO Morris |
| H6 | Valeur plafond GPT sera arbitrée hors design (G-VS-LIMIT) |

---

## 4. Options

| Sujet | Option A | Option B (recommandée) | Notes |
|-------|----------|------------------------|-------|
| Granularité | 15 mega-stories | **33 stories** | Traçabilité FR/N |
| Séquencement | Live d’abord | **A→B→C→D→E** | Moins de risque |
| Entry | CLI only | **Studio + harness autonome** | Preuve cockpit |
| Négatifs | Différer N* | **Couvrir dans stories primaires + US-033** (N16→016) | Matrice §38 recalculée |
| Adaptateur | Spécifier API maintenant | **Story L + spike tech ultérieur** | Pas de protocole ici |

---

## 5. Recommandations (statut post-validation)

1. ~~Valider d’abord `VS-BL-CAND-*`~~ → **FAIT** (Morris).
2. Versionner 38–40 via draft PR → **en cours** (ce cycle).
3. Delivery minimal = Incr. A puis B avant tout live — **GO delivery distinct**.
4. Ne pas paralléliser C et D.
5. Exiger G-VS-LIVE-GPT / CURSOR distincts.
6. Garder harness autonome comme chemin de non-régression.
7. Ne pas ouvrir CI/MVP/industrialisation dans ce backlog.
8. Capitaliser spikes existants plutôt que réécrire les ports.

---

## 6. Décisions `VS-BL-CAND-*` — **VALIDÉES Morris**

| ID | Décision (validée) | Impact | Statut | Dette |
|----|-------------------|--------|--------|-------|
| **VS-BL-CAND-01** | Incréments A→B→C→D→E comme séquence delivery | Ordre BeB | **VALIDÉE** | Faible |
| **VS-BL-CAND-02** | Priorité epics : E1–E3 UI → E4 adaptateur → E5–E8 live → E9/E10 transverse | Focus | **VALIDÉE** | Moyenne |
| **VS-BL-CAND-03** | Premier périmètre delivery = Incrément A (cockpit mock) | Preuve UX | **VALIDÉE** | Faible |
| **VS-BL-CAND-04** | Stratégie mock (A/B) puis live (C/D/E) | Sécurité FinOps | **VALIDÉE** | Faible |
| **VS-BL-CAND-05** | Adaptateur fin = story L en Incr. B, protocole en cycle archi ultérieur | Option B | **VALIDÉE** | Acceptable |
| **VS-BL-CAND-06** | Couverture N1–N16 via stories primaires + US-033 (N16 = US-016, **pas** US-003) | Qualité | **VALIDÉE** | Faible |
| **VS-BL-CAND-07** | Gate obligatoire avant GPT live (Incr. C) | Sécurité | **VALIDÉE** | Faible |
| **VS-BL-CAND-08** | Gate obligatoire avant Cursor live (Incr. D) | Sécurité | **VALIDÉE** | Faible |
| **VS-BL-CAND-09** | Plafond GPT : UI « À définir » jusqu’à G-VS-LIMIT (ne pas inventer) | FinOps | **VALIDÉE** | Nulle |
| **VS-BL-CAND-10** | Critères « slice prouvé » = VS-AC-01…12 + A–E sous gates + réserves ; **≠** MVP | Acceptation | **VALIDÉE** | Discipline |
| **VS-BL-CAND-11** | Stratégie tests : Vitest/Playwright app (A) + tests harness (B–D) + preuves live sous flags | QA | **VALIDÉE** | Acceptable POC |
| **VS-BL-CAND-12** | 33 stories / 10 epics = granularité retenue (pas fusion silencieuse) | Traçabilité | **VALIDÉE** | Faible |

---

## 7. Impacts / risques / dette

| Thème | Impact | Risque | Dette |
|-------|--------|--------|-------|
| Backlog Standard | Guide delivery | Sur-spécification | Maintenir alignement 38↔32–37 |
| Traçabilité | Fiabilité delivery | Mapping artificiel (ex. N16→003) | Audit correctif + matrice 91 lignes |
| Structure stories | DoR 16 champs | Stories incomplètes | Correctif : 0 story incomplète |
| Incr. A mock | Preuve UX rapide | Sous-estimer adaptateur | B obligatoire avant live |
| Pas de CI | POC local | Régression non détectée | Futur G-VS-CI |
| Spikes existants | Accélère C/D | Réserves spike | Documenter dans DoD |

---

## 8. Statut de validation Morris

| Élément | Statut |
|---------|--------|
| Backlog 38–40 (fond) | **Validé** |
| `VS-BL-CAND-01`…`12` | **Validées** |
| Séquencement A→E | **Validé** |
| Incrément A premier périmètre | **Retenu** |
| Commit / push / draft PR | **Autorisés** (ce cycle) |
| Merge PR | **Non autorisé** — GO distinct |
| Delivery / live / archi / CI / MVP | **Non autorisés** |

---

## 9. Gates

| Gate | Objet | Statut |
|------|-------|--------|
| G-VS-BL-VAL | Validation backlog / VS-BL-CAND | **Consommé** |
| G-VS-BL-DOC | Commit/push/draft PR | **Consommé partiel** (merge restant) |
| G-VS-BL-MERGE | Merge PR 38–40 | **Requis** |
| G-VS-DEL-A | Delivery Incrément A | Requis |
| G-VS-LIVE-GPT | Incrément C | Requis |
| G-VS-LIVE-CURSOR | Incrément D | Requis |
| G-VS-LIMIT | Valeur plafond GPT | Requis (valeur **À définir**) |
| G-VS-CI / MVP / IND | Interdits sans GO | Interdits |

---

## 10. Verdict

`SFIA STUDIO VERTICAL SLICE BACKLOG PR CREATED — MORRIS MERGE DECISION REQUIRED`

### Interdits (sans nouveau GO)

READY FOR REVIEW · MERGED · READY FOR DELIVERY · MVP DEFINED · PRODUCTION READY · API SELECTED · L5 GLOBAL PROVEN · GPT LIVE · CURSOR LIVE

---

## 11. Décisions Morris attendues (suivantes)

1. Autoriser ou non le **merge** de la draft PR 38–40.
2. Autoriser éventuellement ready-for-review (GO distinct si requis).
3. **Ne pas** traiter ce pack comme GO delivery, live ou architecture.

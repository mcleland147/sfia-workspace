# SFIA Studio — Control Tower Fast Track — Decision pack

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `72-control-tower-fast-track-decision-pack.md` |
| **Cycle** | Fast Track Control Tower Vertical Slice — préparation |
| **Profil** | Critical |
| **Gates déjà consommés** | `GO VALIDATION CADRAGE SFIA STUDIO CONTROL TOWER` · `GO FAST TRACK CONTROL TOWER VERTICAL SLICE` |
| **Gate demandé** | `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` |
| **Statut** | `plan-open` — recommandations ≠ décisions d’exécution |

---

## 1. Périmètre (rappel validé)

**Inclus :** live GPT + tool calling read Git local/GitHub + UI tools/sources + ActionCandidate + gate + Cursor CLI auto + suivi + réinjection rapport/diff/tests + analyse GPT.

**Exclus :** GitHub write · commit/push/PR/merge Studio · Figma Studio · MCP universel · multi-users · prod · indu · MVP définitif · L5 · mobile · facturation.

---

## 2. Architecture

Option C hybride **retenue** (Morris). Détail exécutable : doc `70`.

Reformulation AF-Option C **validée** : Studio = cockpit + façade d’orchestration ; moteur policies/exécuteurs logiquement séparés.

---

## 3. Options locales restantes (à trancher pour exécution)

### D1 — Architecture minimale Fast Track

| | |
|--|--|
| **Reco** | Adopter le graphe doc 70 (Tool Router + 2 read adapters + Cursor OPS1 + Reinjection) sans framework générique |
| **Alt** | Repousser GitHub read au lot B (réduit démo) — **non recommandé** |
| **Décision Morris** | Approuver D1 pour exécution ? |

### D2 — Transport GitHub initial

| Option | Avantage | Limite |
|--------|----------|--------|
| **A — API REST GitHub** (token backend) | Contrôle ; portable CI | Setup token |
| **B — `gh` CLI encapsulé** | Déjà présent sur machine Morris (`/opt/homebrew/bin/gh`) | Couplage CLI locale |
| **C — MCP GitHub** | Standard | Effort + surface MCP — **hors volonté slice** |

| | |
|--|--|
| **Reco** | **B (`gh` encapsulé)** pour démo locale rapide si auth OK ; interface métier stable pour bascule A sans changer le router. Si `gh` non auth → **A**. |
| **Décision Morris** | B avec fallback A ? |

### D3 — Réutilisation Cursor Adapter OPS1

| | |
|--|--|
| **Reco** | **Réutiliser** `cursorExecutionAdapter.ts` + orchestrator/worktree/contract/postcheck/report ; étendre uniquement prompt générique (au-delà Markdown Campus360 strict) **si** la démo l’exige, sinon garder bornage OPS1 pour la 1re preuve |
| **Alt** | Réécrire adapter — **refusé** (hors accélération) |
| **Décision Morris** | Confirmer réutilisation OPS1 I5/I6 sans rewrite ? |

### D4 — Organisation des trois lots

| | |
|--|--|
| **Reco** | Lot A lecture outillée → Lot B Cursor+réinjection → Lot C timeline/sécu/tests/live (doc 71) |
| **Décision Morris** | Approuver découpage A/B/C ? |

### D5 — Périmètre démonstration

| | |
|--|--|
| **Reco** | Démo = critères §8 doc 70 ; scénario unique repo `sfia-workspace` ; action Cursor = modification allowlistée **minimale** (héritage OPS1 Markdown) ; GitHub read sur ce repo ; Figma **hors** succès |
| **Décision Morris** | Approuver scénario démo ? |

### D6 — Critères de succès

| | |
|--|--|
| **Reco** | Les 8 critères doc 70 §8 sont le contrat de preuve FT |
| **Décision Morris** | Valider comme DoD du vertical slice ? |

### D7 — Dette temporaire

| | |
|--|--|
| **Reco** | Accepter dette §5 doc 71 (allowlist étroite, UI minimale, un transport GH, pas de cancel fancy) |
| **Décision Morris** | Accepter dette listée ? |

### D8 — Autorisation d’exécution code

| | |
|--|--|
| **Reco** | Après revue de ce plan : consommer `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE` ; **alors seulement** modifier `app/**` |
| **Décision Morris** | **GO / NO-GO** exécution |

---

## 4. Backlog et lots

12 items FT-01…FT-12 · 3 lots · chemin critique FT-05 puis FT-07→FT-08 · parallélisation FT-03∥FT-04 seulement après FT-02 — voir `71`.

---

## 5. Risques structurants

| ID | Risque | Contrôle |
|----|--------|----------|
| R1 | Tool loop coûteuse / diverge | Max tool rounds ; timeout ; deny write |
| R2 | Fuite secrets via read_file | Allowlist + redaction + maxBytes |
| R3 | Start Cursor via GPT sans gate | Start **UI gate only** (reco) ; tool start fail-closed |
| R4 | `gh`/API auth manquante | Erreur explicite ; pas de faux succès |
| R5 | Cursor real indisponible | Fixture pour CI ; live partiel documenté |
| R6 | Scope creep MVP | Exclusions §1 ; question « utile à la démo ? » |
| R7 | Tension docs historiques AF-C | Décision Morris déjà validée — README à aligner navigation |

---

## 6. Décisions Morris déjà actées (ne pas re-demander)

1. Vision Control Tower validée
2. AF-Option C reformulée validée
3. Option C hybride direction de travail
4. Fast Track autorisé (préparation)
5. OPS1 capitalisé, non obsolète
6. Pas d’implémentation code avant revue plan + GO exécution
7. Pas de commit/push/PR/merge projet dans la préparation

---

## 7. Anti-claims

- Plan ≠ implémentation
- Pas de MVP / production / industrialisation
- Pas de GitHub write
- Pas de Control Tower « terminé »
- Pas de plateforme MCP Studio
- Handoff ≠ merge docs sur main

---

## 8. Gate d’exécution (formulation)

**Demande :** `GO EXÉCUTION CONTROL TOWER VERTICAL SLICE`

**Autorise si GO :** modification code sous `projects/sfia-studio/app/**` selon backlog 71 ; tests ; preuves locales ; **toujours** sans commit/push/PR tant qu’un GO distinct ne l’ouvre pas.

**N’autorise pas :** write GitHub produit · méthode · hors périmètre · merge.

---

## 9. Verdict préparation

Si D1–D8 revue sans bloqueur structurel :

**CONTROL TOWER FAST TRACK PLAN READY FOR MORRIS REVIEW**

Prochaine action Morris : trancher D2 (transport) + D8 (GO exécution) ; D1/D3–D7 peuvent être confirmés en bloc avec le plan.

# 11 — T-A7 lot 1 post-merge & next blocker-reduction framing

| Champ | Valeur |
|-------|--------|
| **Document** | `11-t-a7-lot1-post-merge-and-next-blocker-framing.md` |
| **Date/heure/fuseau** | 2026-07-28 22:16:12 CEST (+0200) |
| **Gate consommé** | `GO POST-MERGE T-A7 FIRST BOUNDED DEVELOPMENT LOT — CONFIRM MAIN INTEGRATION — CORRECT STALE LOCAL-ONLY README STATUS IF NEEDED — FRAME NEXT BLOCKER-REDUCTION CYCLE — NO DELIVERY OR CUTOVER` |
| **Base** | `origin/main` @ `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
| **Branche locale** | `docs/sfia-studio-t-a7-lot1-post-merge-next-blocker-framing` |
| **Push / PR projet** | **aucun** (cycle documentaire local) |
| **Code / tests** | **aucune modification** |

---

## 1. Sources Git

| Source | Référence |
|--------|-----------|
| PR | [#287](https://github.com/mcleland147/sfia-workspace/pull/287) |
| Merge | `770605bcfa4cc3e403ee2c4615c1a115ccd38458` |
| Parents | `2a3c59c…` + `b6a19335…` |
| Tree | `712720a1a2371f98c137a6c8b29299ac556299c7` |
| Checks PR | run `30393629328` SUCCESS |
| Checks post-merge | run `30393814783` SUCCESS |
| Branche source | `origin/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness` @ `b6a19335…` |
| Handoff intégration | blob `2d0959c456f728a1ef0ad7be43ef3197108eba47` |
| Pack | `t-a7-technical-readiness-framing/` (01–10 + README) |

Quatre commits intégrés :

1. `a33f4a32…` docs framing
2. `01410377…` test evidence O2
3. `47e26fdc…` feat foundations
4. `b6a19335…` fix harden override

---

## 2. Confirmation post-merge

| Contrôle | Attendu | Observé | Preuve | Verdict |
|----------|---------|---------|--------|---------|
| PR #287 mergée | MERGED | MERGED 2026-07-28T19:52:20Z | `gh pr view 287` | PASS |
| Merge commit | `770605bc…` | exact | `origin/main` | PASS |
| Parents | main pré + HEAD lot | `2a3c59c…` + `b6a19335…` | `git cat-file -p` | PASS |
| Tree | tree lot | `712720a1…` | merge object | PASS |
| 4 commits | présents | 4 | log PR | PASS |
| Branche source | préservée | `b6a19335…` remote | `ls-remote` | PASS |
| Checks PR | verts | Detect/Build/Gate SUCCESS | run `30393629328` | PASS |
| Checks post-merge | verts | Detect/Build/Gate SUCCESS | run `30393814783` | PASS |
| Blobs hold/F11/F13 | présents | hold `30220327…` · test-only `ad9d1a5c…` · F11 `1ae8deac…` · F13 `2be059af…` | `git rev-parse main:path` | PASS |
| Barrel D1 | sans override | BARREL_CLEAN | `index.ts` | PASS |
| Override | test-only | `methodModeHold.test-only.ts` | blob `ad9d1a5c…` | PASS |
| Hold | ACTIVE défaut | module + raisons B5/R1/… | code main | PASS |
| F11.2 | RO fondation | `operationalReadiness.ts` | main | PASS |
| F13.4 | RO bornée | `boundedHistoryRead.ts` | main | PASS |
| Déploiement/cutover | non déclenché | CI Studio seulement | runs GitHub | PASS |

**Verdict :** `T-A7 LOT 1 MAIN INTEGRATION CONFIRMED — POST-MERGE VERIFIED`

---

## 3. Surfaces intégrées (état)

| Surface | État | Limite |
|---------|------|--------|
| MethodMode hold | intégré · défaut ACTIVE · CONFLICT | pas de hold DB persistant · pas IAM |
| Test override | test-only · hors barrel · boundary tests | store module-level résiduel Info |
| F11.2 | query interne RO · frozen snapshot | pas d’API HTTP · pas d’UI admin |
| F13.4 | provider documentary/Git · max 50 · immutable | pas de vue runtime finale · pas ACL |

---

## 4. P03–P11 (sans promotion artificielle)

| ID | État actuel | Preuves sur main | Écart restant | Bloquant pour |
|----|-------------|------------------|---------------|---------------|
| P03 | PARTIAL | `canonicalPaths` · probes | adoption produit globale | cutover / remplacement OA |
| P04 | PARTIAL | `sourceLoader` · asymmetry probe | loader cutover unique | cutover |
| P05 | PARTIAL | CKC · OA sans import method | guidance-only | cutover |
| P06 | PARTIAL | hold lot 1 | session OA correlation | cutover · delivery prep |
| P07 | PARTIAL | hold bloque transitions | MethodMode toujours présent | cutover |
| P08 | MISSING | allowlist method active | lectures `method/**` absentes OA | cutover · lot N1 |
| P09 | MISSING | UI OA native absente | badges/surfaces OA | cutover · lot N1 |
| P10 | PARTIAL | import boundaries · isolation probe | live runtime OPS1↔OA | cutover · lot N2 |
| P11 | PARTIAL | F13.4 fondation | vue RO finale | cutover · lot N3 |

Aucun P03–P11 en `SATISFIED` pour le **remplacement** Option A.

Distinction :

- **prochain développement borné** : peut cibler une fondation/preuve (N1–N4) sous gate Morris ;
- **delivery preparation / delivery / cutover** : toujours `NOT AUTHORIZED`.

---

## 5. F03.3

`F03.3 PARTIALLY SATISFIED — IMPLEMENTATION BLOCKERS REDUCED`

- critères documentaires / décisions : largement satisfaits ;
- critères d’implémentation cutover : **non** satisfaits ;
- lot 1 a réduit des blockers d’implémentation (hold · F11/F13 fondations) **sans** fermer B5/R1/R-M01/HARD.

**Ne pas déclarer** F03.3 fully satisfied.

---

## 6. Blockers ouverts

| Blocker | Preuve | Risque | Dépendances | Réductible maintenant ? | Gate requis |
|---------|--------|--------|-------------|-------------------------|-------------|
| P08 lectures method | allowlist active · probes | lecture legacy silencieuse | F03 · path-policy | cadrage oui · code sous gate N1 | N1 |
| P09 badges/UI OA | absence UI OA | confusion UX | F11 · design | cadrage oui · UI sous gate futur | N1 |
| Live OPS1↔OA isolation | static PARTIAL · live UNKNOWN | double identité | W1-D04 · env `.sfia-exec` | preuve oui · pas de mod OPS1 | N2 |
| F11.2 API/exposition finale | fondation RO seule | claim cutover prématuré | IAM? UI? | cadrage écart oui | N3 |
| F13.4 vue runtime finale | fondation métadonnées | mutation historique | persistence? ACL? | cadrage écart oui | N3 |
| Rollback R1–R3 | doc `04` NOT TESTED | rollback non prouvé | delivery futur | cadrage oui · pas d’exécution | N4 |
| B5 | OPEN · STOP BEFORE DELIVERY | delivery prématuré | HARD | **non fermer** | N4 / gate delivery |
| R1 atomicité | OPEN | incohérence état | delivery | **non fermer** | N4 |
| R-M01 ClaimEvaluator | OPEN | claims non prêts | T-A6 | **non fermer** | N4 |
| HARD | OPEN HARD | exécution réelle | B5 | **non fermer** | delivery/cutover |
| Persistence | NOT SELECTED | store caché | F13 | **ne pas sélectionner** | gate futur |
| IAM | NOT SELECTED | exposition ACL | F11 | **ne pas sélectionner** | gate futur |
| RGPD production | NOT VALIDATED | conformité | IAM/data | hors lot | gate futur |

---

## 7. Dette / limites du lot 1

- hold non persistant DB ;
- F11/F13 incomplets vs surfaces finales ;
- P08/P09 toujours MISSING ;
- live OPS1 non instrumenté ;
- R1–R3 non testés ;
- README local pré-intégration était stale (corrigé dans ce cycle).

---

## 8. Options prochain cycle

### N1 — P08/P09 replacement foundations

| Champ | Contenu |
|-------|---------|
| Objectif | Cadrer capacités manquantes pour lectures `method/**` absentes OA (P08) et surfaces/badges OA (P09) **sans implémenter** |
| Valeur immédiate | Empêche un lot code trop large ; clarifie fichiers protégés |
| Blockers réduits | compréhension P08/P09 (pas fermeture) |
| Non réduits | B5 · HARD · F11/F13 finales · live OPS1 |
| Code potentiel futur | loader/CI no-fallback · design UI OA (gates distincts) |
| Dépendances | F03 · path-policy · design UX |
| Risques | glissement vers retrait legacy / cutover |
| Dette | pack doc supplémentaire |
| Réversibilité | haute (doc) |
| Gate Morris | `GO FRAME T-A7 N1 P08 P09 REPLACEMENT FOUNDATIONS — NO METHOD RETIREMENT UI DELIVERY OR CUTOVER` |
| Impact delivery/cutover | aucun autorisé |
| Profil | Critical |

### N2 — OPS1 runtime isolation evidence

| Champ | Contenu |
|-------|---------|
| Objectif | Compléter preuves dynamiques live OPS1↔OA et hits allowlist **sans modifier OPS1** |
| Valeur immédiate | réduit UNKNOWN live / volumes |
| Blockers réduits | profondeur P10 evidence |
| Non réduits | P08/P09 · F11/F13 finales · B5 |
| Code potentiel futur | probes/instrumentation read-only |
| Dépendances | environnement `.sfia-exec` / session live |
| Risques | fausse confiance « isolation cutover » |
| Dette | campagne evidence |
| Réversibilité | haute |
| Gate Morris | `GO COLLECT T-A7 N2 OPS1 RUNTIME ISOLATION EVIDENCE — NO OPS1 FUNCTIONAL CHANGE DELIVERY OR CUTOVER` |
| Impact delivery/cutover | aucun |
| Profil | Critical |

### N3 — F11.2/F13.4 completion framing

| Champ | Contenu |
|-------|---------|
| Objectif | Définir l’écart fondations intégrées ↔ surfaces finales **sans** choisir persistence, IAM ou UI |
| Valeur immédiate | cadre le prochain lot technique sur surfaces déjà livrées |
| Blockers réduits | ambiguïté F11/F13 « done » |
| Non réduits | P08/P09 · live OPS1 · B5/HARD |
| Code potentiel futur | API interne élargie / vue RO (gates futurs) |
| Dépendances | lot 1 sur main · décisions F11.2/F13.4 |
| Risques | sélection implicite IAM/persistence |
| Dette | doc d’écart |
| Réversibilité | haute |
| Gate Morris | `GO FRAME T-A7 N3 F11.2 F13.4 COMPLETION GAP — NO PERSISTENCE IAM UI DELIVERY OR CUTOVER` |
| Impact delivery/cutover | aucun |
| Profil | Critical |

### N4 — Rollback and blocker-control readiness

| Champ | Contenu |
|-------|---------|
| Objectif | Cadrer R1–R3, B5, R1, R-M01, HARD **sans les fermer** |
| Valeur immédiate | readiness gouvernance avant tout lot delivery-adjacent |
| Blockers réduits | flou sur rollback / stop conditions |
| Non réduits | P08/P09 · F11/F13 finales |
| Code potentiel futur | drills rollback (gate distinct) |
| Dépendances | doc `04` · `06` |
| Risques | pseudo-fermeture de blockers |
| Dette | pack gouvernance |
| Réversibilité | haute |
| Gate Morris | `GO FRAME T-A7 N4 ROLLBACK AND BLOCKER CONTROLS — KEEP B5 R1 R-M01 HARD OPEN — NO DELIVERY OR CUTOVER` |
| Impact delivery/cutover | aucun |
| Profil | Critical |

### N5 — Custom / différer

Différer tout nouveau lot T-A7 ; capitaliser ailleurs ; attendre décision produit.

Gate : `GO DEFER T-A7 NEXT BLOCKER-REDUCTION LOT — NO DEVELOPMENT DELIVERY OR CUTOVER`

---

## 9. Comparaison

| Critère | N1 | N2 | N3 | N4 | N5 |
|---------|----|----|----|----|-----|
| Utile maintenant | moyen | fort (UNKNOWN) | **fort** (suite lot 1) | moyen | contexte-dépendant |
| Proximité produit | élevée (risque) | preuve | cadrage produit | gouvernance | nulle |
| Risque cutover drift | élevé | moyen | contrôlé | bas | nul |
| Besoin code | futur | probes possibles | non | non | non |
| Continuité lot 1 | partielle | faible | **directe** | latérale | — |

**Combinaison** N3+N2 possible seulement si périmètre reste purement cadrage/evidence — sinon séparer.

---

## 10. Recommandation

**Statut :** `RECOMMENDED — NOT DECIDED`

**Option recommandée :** **N3** — F11.2/F13.4 completion framing

### Challenge

| Question | Réponse |
|----------|---------|
| Utile maintenant ? | oui — évite de traiter les fondations comme finales |
| Blocker réduit ? | ambiguïté « F11/F13 done » ; prépare lot technique borné |
| Dette ? | documentaire seulement |
| Plus simple ? | oui vs N1 (retrait/UI) ou code immédiat |
| Repo-first ? | s’appuie sur blobs main lot 1 |
| Exécution vs arbitrage ? | arbitrage Morris puis cadrage Cursor |
| Gate nécessaire ? | oui |
| Produit vs preuve ? | rapproche du **cadrage produit** des surfaces déjà intégrées |

**Alternatives fortes :** N2 (si priorité = UNKNOWN live) · N4 (si priorité = stop/rollback avant tout code).

**Non recommandé maintenant :** N1 comme premier lot post-intégration (trop proche cutover/retrait/UI sans écart F11/F13 clarifié).

---

## 11. Bulletin Morris

### Question

Quel prochain cycle T-A7 doit être ouvert après l’intégration du lot 1 ?

### Options

- **N1** — P08/P09 replacement foundations (cadrage)
- **N2** — OPS1 runtime isolation evidence
- **N3** — F11.2/F13.4 completion framing *(recommandé, non décidé)*
- **N4** — Rollback and blocker-control readiness
- **N5** — Custom / différer

### État repo

- `main` @ `770605bc…` · lot 1 intégré · hold/F11/F13 fondations présentes
- T-A7 `OPEN — FIRST BOUNDED DEVELOPMENT LOT ONLY`
- B5/R1/R-M01/HARD OPEN · delivery/cutover NOT AUTHORIZED

### Bénéfices / blockers / risques / dette

Voir §8–§10. Aucune option ne ferme B5/HARD ni n’autorise delivery.

### Fichiers candidats (futurs, non touchés ici)

- pack `t-a7-technical-readiness-framing/` extensions
- éventuellement probes read-only (N2) sous gate

### Fichiers protégés

- `method/**` · OPS1 fonctionnel · migrations · IAM · UI runtime · CI

### Tests candidats

- aucune exécution dans ce cycle ; futurs : boundaries · probes live (N2) · non-régression hold

### Stop conditions

- toute demande de fermer B5/HARD ;
- sélection persistence/IAM dans un lot « cadrage » ;
- push/PR non autorisés ;
- retrait `method/**` ;
- claim delivery/cutover.

### Profil

Critical

### Gate générique

`GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N1 N2 N3 N4 OR CUSTOM — NO DELIVERY OR CUTOVER`

**Statut bulletin :** `MORRIS DECISION REQUIRED`

---

## 12. Anti-claims

- post-merge confirmé ≠ delivery ready ;
- lot 1 intégré ≠ T-A7 entièrement ouvert ;
- README corrigé ≠ nouvelle baseline produit ;
- cadrage suivant ≠ lot autorisé ;
- recommandation ≠ décision ;
- fondations F11/F13 ≠ surfaces finales ;
- blockers documentés ≠ blockers fermés.

---

## 13. Gate candidat

`GO DECIDE T-A7 NEXT BLOCKER-REDUCTION LOT — SELECT N1 N2 N3 N4 OR CUSTOM — NO DELIVERY OR CUTOVER`

**Statut :** `NOT CONSUMED`

---

## 14. Verdict

`T-A7 LOT 1 POST-MERGE CONFIRMED — PR #287 AND POST-MERGE CHECKS VERIFIED — SOURCE BRANCH PRESERVED — README ALIGNED TO MAIN WITH HISTORICAL LOCAL-ONLY SECTION — P03 TO P11 AND F03.3 REASSESSED WITHOUT PROMOTION — BLOCKERS STRUCTURED — N1 TO N5 FRAMED — MORRIS DECISION REQUIRED — NO CODE PUSH PR MERGE DELIVERY OR CUTOVER`

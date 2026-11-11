# SFIA Studio Next — Review Pack FULL
# ML4C S05 — Qualification positive du dialogue indépendant (PR #676)

**Date/heure :** 2026-11-11 21:15 CET (2026-11-11 20:15 UTC)
**Cycle :** 8 — Delivery / implémentation (INC S05)
**Profil :** Critical
**PR :** https://github.com/mcleland147/sfia-workspace/pull/676
**Merge :** NON AUTORISÉ (GO correctif S05 seulement — aucun auto-merge)
**Version :** NO RELEASE / `0.0.0-dev`

---

## 1. Git Truth Check

| Contrôle | Initial (attendu GO) | Final |
| --- | --- | --- |
| Remote | `origin` → `mcleland147/sfia-workspace` | inchangé |
| Branche | `build/next-ml4c-functional-convergence` | idem |
| HEAD | `8cff159189a4b20399318b416dccfcebc6149233` | **`2416e2ee25662821b015407346c64ec204f67488`** |
| Tree | `bf69e086e2bf6253feb370472872c8a72fb82ff3` | **`88c05766afa04355f5fbb63dcda603686a3f11a6`** |
| `origin/main` | `6d237452680640324eeadbb18f4601fd7de99850` | inchangé |
| merge-base | `6d237452…` | inchangé |
| Dirty produit (avant) | pack stub only | pack local only (non poussé sur ML4C) |
| Remote branch tip | match `8cff1591` | match **`2416e2ee`** (push FF) |
| Concurrent work | aucun conflit | aucun |

**Verdict Git Truth :** PASS (aucune dérive ; pas de reset destructif ; pas de force push).

---

## 2. Sources consultées (SHA / blobs)

| Source | Référence |
| --- | --- |
| Processus SFIA v2.6 (main) | routing / operating-model / guardrails / template |
| Gouvernance Next (main) | SEF, roadmap, ENV-01 blob `14b61f0d…`, versioning blob `8bc93e0f…` |
| Contrat CP2 (branche non fusionnée) | `docs/next-r5-ml4c-cp2-preparation-20261111` @ `ab0c2ba3…` |
| Handoff précédent | `sfia/review-handoff` @ `5700866c…` blob `1c4cd33d…` |
| CI précédente (ancien HEAD) | run `43087124594` PASS sur `8cff1591` — **ne prouve pas** ce correctif |

---

## 3. Cause corrigée

Sur `8cff1591`, `qualifyThreadTurn()` réutilisait déjà les propriétaires
(`qualifyPilotageIntent` / `qualifyDocumentAct`) — **conservé**.

Deux replis restaient incorrects :

1. **`/\?$/` suffisait** à classer `DIALOGUE_INDEPENDANT` dès qu’aucun signal
   métier CLEAR n’avait matché → « Réinitialise ce projet ? » pouvait être
   traité comme indépendant.
2. **Repli final** : absence de surface d’effet résiduelle ⇒
   `DIALOGUE_INDEPENDANT` (« Intention non reconnue ⇒ indépendant »).

Ces replis ne démontrent pas l’indépendance et peuvent contourner les
protections pending (mutation distincte / perte de clé / faux COMPLETE).

Risques linguistiques (code-inferred, non effets serveur prouvés) :
- « Archive ce projet. »
- « Réinitialise ce projet ? »

---

## 4. Solution minimale retenue

**Pas** de nouvelle liste de verbes opérationnels, **pas** de moteur
d’intentions, **pas** de LLM LIVE, **pas** d’API / machine à états concurrente.

### Comportement

| Kind | Établissement | Pending non résolu | Sans pending |
| --- | --- | --- | --- |
| `DIALOGUE_INDEPENDANT` | **Positif uniquement** (marqueurs cognitifs / méta / explication) | COMPLETE B autorisé ; pending A préservé | conversation normale |
| `INTENTION_EFFET` | propriétaires CLEAR + create/publish locaux | blocage nouvel acte distinct | `rememberPending` pour ACK |
| `INCERTAIN` | indépendance non démontrée ; effet plausible | blocage / clarification | **pas** de pending inventé ; conduite Nora/Studio inchangée |

### Mécanismes

- `isPositivelyIndependentDialogue()` — preuve cognitive positive.
- Repli final → **`INCERTAIN`** (plus jamais indépendant par exclusion).
- Suppression du caractère suffisant du seul `?`.
- `mayStartNewThreadAct` : `nextIsIndependentDialogue` **ignoré comme autorité** ;
  si `nextTurnKind` omis → re-qualification du contenu.
- `page.tsx` : `rememberPending` **uniquement** pour `INTENTION_EFFET`
  (INCERTAIN sans pending n’invente plus de pending métier).

### Alternative regex écartée

Élargir `RESIDUAL_EFFECT_SURFACE_RE` / listes de verbes pour « Archive /
Réinitialise / Supprime » — écartée : ne prouve pas l’indépendance et crée
une dette lexicale sans fin. Le correctif exige une **qualification positive**
de l’indépendance, pas plus de surface opérationnelle.

---

## 5. Blast radius

**IN :** triage linguistique client S05 ; garde pending ; rememberPending ;
tests unit/e2e ; delivery-history.

**OUT :** Nora engine ; ML4D UX ; PG schema ; HumanDecision model ; Git REAL ;
Nora LIVE ; SEF/roadmap normative ; workflows CI ; secrets ; ancien Studio.

Séparation préservée : compréhension (qualifier) ≠ décision ≠ exécution
(serveur reste seule autorité).

---

## 6. Fichiers modifiés (commit `2416e2ee`)

1. `projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts`
2. `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
3. `projects/sfia-studio-next/web/tests/unit/ml4c-s05-thread-turn-qualification.test.ts`
4. `projects/sfia-studio-next/web/tests/unit/ml4c-s01-s03-guards.test.ts`
5. `projects/sfia-studio-next/construction/delivery-history.md`

Stat diff vs `8cff1591` : **5 files, +138 / −87**.

### Diff production — thread-recovery (extrait décisionnel)

- Ajout `isPositivelyIndependentDialogue` / helpers méta & explication.
- `COGNITIVE_INDEPENDENT_RE` : bord gauche Unicode (`À quoi sert…`).
- Residual → INCERTAIN sauf preuve positive.
- Fin : INCERTAIN si indépendance non établie (suppression `/\?$/` et repli soft).
- `mayStartNewThreadAct` : re-qualify ; boolean legacy non autoritaire.

### Diff page.tsx

```diff
- if (turn.kind === "INTENTION_EFFET" || turn.kind === "INCERTAIN") {
+ if (turn.kind === "INTENTION_EFFET") {
    rememberPending(...);
  }
```

---

## 7. Matrice linguistique (unit)

Attendu `INTENTION_EFFET` :
- Ouvre le/un/∅ cycle cadrage. ; Crée un projet. ; Publie ce document. ;
  Je décide que GitHub est obligatoire.

Attendu **jamais** `DIALOGUE_INDEPENDANT` (INCERTAIN ou INTENTION_EFFET) :
- Archive ce projet. ; Réinitialise ce projet ? ; Supprime cette configuration. ;
  Ouvre L/the cycle… ; Tu peux faire ça ? ; Fais-le. ;
  Explique-moi ce choix puis ouvre le cycle.

Attendu `DIALOGUE_INDEPENDANT` (preuve positive) :
- Pourquoi avions-nous choisi… ; Quelle est la différence… ;
  À quoi sert un cycle… ; Pourquoi ouvrir un cycle… ;
  Que signifie la commande 'ouvre le cycle' ? ; Explique-moi… ;
  Comment fonctionne notre trajectoire ?

Contrôles : `Ok ?` / `Et maintenant` → INCERTAIN ; boolean
`nextIsIndependentDialogue: true` seul ne bypass pas pending ;
négations / hypothèses / citations.

Local : `ml4c-s05-thread-turn-qualification.test.ts` **7/7 PASS** ;
`ml4c-s01-s03-guards` **11/11** ; `ml3-b13-divergence` **25/25**.

---

## 8. CR-02 / S05 navigateur + non-régression

**Local (même SHA de code, avant push) :**
- `ml3-pilotage` + `ml4c-s05` : **8 passed** (incl. CR-02 ACK perdu).
- Playwright complet : **17 passed (1.1m)**.
- PG `intent-continuity-global.pg.test.ts` : **23 passed**.
- `tsc --noEmit` PASS ; `npm run build` PASS ; lint warnings préexistants only.
- `git diff --check` produit clean ; scan secrets diff produit : clean.

**CI GitHub sur HEAD exact `2416e2ee` :**
- Next CI run **`43093786931`** — **success**
  - unit : **41 files / 350 tests passed** (incl. S05 7 tests)
  - integration PG : **15 files / 287 tests passed**
  - Playwright : **17 passed (2.3m)**
  - Required Gate Next : **PASS**
- Studio CI run **`43093787012`** — **success** (Required Gate Studio PASS)

URL : https://github.com/mcleland147/sfia-workspace/actions/runs/43093786931

---

## 9. Preuve ENV-01

| | `sfia_next_dev` (opérateur) | `sfia_next_e2e` (mutatif) |
| --- | --- | --- |
| Host/port | 127.0.0.1:5433 | 127.0.0.1:5433 |
| Role | `sfia_next_dev` | `sfia_next_dev` |
| Pilots BEFORE | **8850** | 318 |
| Pilots AFTER | **8850** (inchangé) | 342 (croissance e2e attendue) |

RECETTE : aucune mutation. STABLE : NOT AVAILABLE. ENV-C : aucun nettoyage.
Nora LIVE : **NOT RUN**. Git REAL : **NOT RUN**.

---

## 10. Fake / Real Qualification

| Capacité | Mode | Statut |
| --- | --- | --- |
| Nora conversation | FAKE / deterministic-fixture | RUN (e2e + CI) |
| Nora LIVE | LIVE | **NOT RUN** |
| Git collaboration | SCRIPTED | RUN |
| Git REAL | REAL | **NOT RUN** |
| PG mutatif tests | `sfia_next_e2e` only | RUN |

---

## 11. Statuts S01–S07 (portés)

| Slice | Statut |
| --- | --- |
| S01 | porté (portfolio honest) |
| S02 | porté (D2 ACK reconcile) |
| S03 | porté (D4 statuses fidèles) |
| **S04** | **DOCUMENTED / INCOMPLETE** |
| **S05** | **POSITIVE QUALIFICATION VERIFIED** (ce cycle) |
| S06 | SCRIPTED only — Git REAL **NOT RUN** |
| S07 | **PARTIAL** (non globalement prouvé) |
| ML4D | **OUT** |
| CP2 documentaire | **non mergé** |
| RECETTE | **non acceptée** |
| STABLE | **NOT AVAILABLE** |
| ADOPTED | **non acquis** |

---

## 12. Risques / réserve / dette

- Marqueurs cognitifs positifs restent une **heuristique linguistique** (pas une
  compréhension Nora) — volontairement bornée ; INCERTAIN prudent acceptable.
- Formulations opérationnelles hors surface résiduelle → INCERTAIN (pas
  CLEAR artificiel) — conforme au mandat.
- S04 cognitive baseline reste incomplète (hors scope).
- Aucune réserve fonctionnelle S05 « inconnu/? ⇒ indépendant » résiduelle
  démontrée sur les cas de la matrice + CR-02/S05.

---

## 13. Verdict

**ML4C PR #676 — S05 POSITIVE QUALIFICATION  
VERIFIED, CI PASSED  
READY FOR CHATGPT REVIEW**

- HEAD : `2416e2ee25662821b015407346c64ec204f67488`
- Tree : `88c05766afa04355f5fbb63dcda603686a3f11a6`
- CI Next : `43093786931`
- PR : https://github.com/mcleland147/sfia-workspace/pull/676
- **Aucun merge** sans GO Morris distinct.

### Instruction finale à ChatGPT

Relire le nouveau diff de la PR #676. Contrôler la classification positive,
les cas inconnus, CR-02, S05 et la continuité. Vérifier la CI sur le HEAD exact.
Confronter les preuves au contrat CP2. Rendre un verdict indépendant.

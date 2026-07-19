# SFIA Studio — Decision pack architecture POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
| **Cycle** | 6 Architecture + QA Option B + post-merge #221 |
| **Profil** | Critical (architecture) / Standard (post-merge sync) |
| **Statut** | POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
| **Architecture retenue** | **Option B minimale** — **INTÉGRÉE** |
| **POC-G8 / G9** | **FERMÉS** |
| **POC** | **Non lancé** |
| **PR** | [#221](https://github.com/mcleland147/sfia-workspace/pull/221) **MERGED** |
| **Merge commit** | `40f8ebecf41608756e4e8184c860b3b966b786b3` |
| **Base** | `main` @ `40f8ebe…` |

---

## 1. Observations

1. #219/#220 MERGED (cadrage + sync).
2. Instruction POC-G7 produite puis **validée avec réserves** (Option B minimale).
3. App P0 sans orch. ; pas d’API Cursor repo.
4. AF-Option C : Studio / orch. séparés.
5. Versionnement architecture **CONSOMMÉ / INTÉGRÉ** via PR #221 / `40f8ebe…`.
6. Branche distante `architecture/sfia-studio-poc-orchestration` **supprimée** après merge.
7. POC-G8 **non ouvert** — GO Morris distinct requis.

---

## 2. Options — statut

| Option | Statut Morris |
|--------|---------------|
| **A** Harness autonome | Conservée — test / diagnostic / dégradé |
| **B minimale** Studio + adaptateur + harness | **RETENUE / VALIDÉE / INTÉGRÉE** |
| **C** Orch. dans app | **Écartée** premier POC |

B = **extension** de A (cœur harness) — **pas** Option C.

---

## 3. Comparaison

| Critère | A | B min | C |
|---------|---|-------|---|
| Preuve S1 | ★★★ | ★★★ | ★★ |
| Cockpit | — | ★★★ | ★★★ |
| AF-Option C | ★★★ | ★★★ | ★ |
| Risque couplage | Faible | Faible si borné | Fort |
| Autonomie harness | ★★★ | ★★★ | ★ |

---

## 4. ARCH-POC-CAND-* — statuts Morris

| ID | Décision | Statut |
|----|----------|--------|
| **01** | Adopter **Option B minimale** (Studio cockpit + adaptateur fin + harness autonome) | **VALIDÉE** |
| **02** | Écarter Option C pour le premier POC | **VALIDÉE** |
| **03** | Conserver Option A comme mode autonome test / diagnostic / dégradé | **VALIDÉE** |
| **04** | Orch. = processus local autonome déterministe ; techno ouverte (Node/TS candidat) | **VALIDÉE AVEC RÉSERVE** |
| **05** | Cursor via `CursorExecutorPort` ; pas d’API inventée | **VALIDÉE AVEC RÉSERVE** |
| **06** | Git read réel ; writes distantes interdites ; `gitEffect=none-remote` | **VALIDÉE** |
| **07** | Contrats / états / transitions `24` (màj Option B) | **VALIDÉE AVEC RÉSERVE** |
| **08** | Journal JSONL + preuves locales | **VALIDÉE** |
| **09** | Modif `app/**` possible **au delivery uniquement**, minimale (cockpit/adaptateur/vues) ; orch. hors `app/**` | **VALIDÉE AVEC RÉSERVE** |
| **10** | Après validation+intégration archi → prochaine porte = **POC-G8** | **VALIDÉE** |
| **11** | Archi POC ≠ Runtime produit ; L4* plafond chemin | **VALIDÉE** |
| **12** | Versionnement docs `23`–`25` = GO Morris distinct | **VALIDÉE** — GO **CONSOMMÉ** (#221) |

Aucun nouveau D-VAL. Aucune modification de fond des décisions ARCH-POC-CAND.

---

## 5. Gates

| Gate | Statut |
|------|--------|
| POC-G1…G6 | **VALIDÉS** |
| POC-G10 | **CONSOMMÉ** |
| **POC-G7** | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| POC-G8 | **FERMÉ** |
| POC-G9 | **FERMÉ** |
| Versionnement archi | **CONSOMMÉ / INTÉGRÉ** (`40f8ebe…`) |
| Delivery / lancement POC | **NON AUTORISÉ** |

**≠ READY FOR BACKLOG.** Intégration architecture ≠ ouverture backlog.

---

## 6. Ouverts / réserves

1. Cursor réel
2. Techno harness
3. Protocole adaptateur
4. Allowlist détaillée (backlog)
5. Portée exacte modifs `app/**` au delivery
6. Preuve QA non-seconde-vérité
7. Clôture AF
8. POC-G8/G9

---

## 7. Décisions Morris restantes

1. Ouverture éventuelle **POC-G8** (après sync post-merge si versionnée — GO distinct).
2. Clôture AF (séparée).

### Historique consommé

- GO versionnement docs `23`–`25` : **CONSOMMÉ** (commit / push / draft PR #221 puis merge Morris).
- Merge #221 : **CONSOMMÉ**.

### Conséquences

- Intégration #221 ≠ GO backlog ≠ GO delivery ≠ lancement POC ≠ ouverture POC-G8.

---

## 8. Séquence

```text
POC-G7 VALIDÉ AVEC RÉSERVES — INTÉGRÉ (Option B, PR #221 / 40f8ebe…)
  → versionnement CONSOMMÉ
  → sync post-merge documentaire (locale — non versionnée ici)
  → décision POC-G8 (FERMÉE — GO Morris requis)
  → POC-G9 / POC (NON LANCÉS)
```

---

## 9. Verdict

| Élément | Valeur |
|---------|--------|
| Option B minimale | **RETENUE / INTÉGRÉE** |
| Harness autonome | **Oui** |
| Studio | Cockpit |
| Adaptateur | Sans autorité |
| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| POC-G8/G9 | **FERMÉS** |
| POC | **Non lancé** |
| Versionnement | **CONSOMMÉ / INTÉGRÉ** |
| Prochaine décision | Ouverture éventuelle **POC-G8** |

**Verdict :** `POST-MERGE COMPLETE WITH RESERVES — OPTION B ARCHITECTURE INTEGRATED — POC-G8 DECISION REQUIRED`

---

*Decision pack — Option B minimale — G7 validé avec réserves — INTÉGRÉ (PR #221 / 40f8ebe…) — POC-G8 FERMÉ — POC NON LANCÉ.*

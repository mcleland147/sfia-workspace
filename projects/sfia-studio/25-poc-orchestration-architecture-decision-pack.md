# SFIA Studio — Decision pack architecture POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
| **Cycle** | 6 Architecture + QA corrective Option B |
| **Profil** | Critical |
| **Statut** | POC-G7 **VALIDÉ AVEC RÉSERVES** — docs **non versionnés** |
| **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
| **Architecture retenue** | **Option B minimale** |
| **POC-G8 / G9** | **FERMÉS** |
| **POC** | **Non lancé** |
| **Base** | `main` @ `b882892…` |

---

## 1. Observations

1. #219/#220 MERGED.
2. Instruction POC-G7 produite puis **validée avec réserves** (Option B minimale).
3. App P0 sans orch. ; pas d’API Cursor repo.
4. AF-Option C : Studio / orch. séparés.
5. Versionnement architecture **non autorisé** ici.
6. POC-G8 **non ouvert** tant que docs non intégrés.

---

## 2. Options — statut

| Option | Statut Morris |
|--------|---------------|
| **A** Harness autonome | Conservée — test / diagnostic / dégradé |
| **B minimale** Studio + adaptateur + harness | **RETENUE / VALIDÉE** |
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
| **12** | Versionnement docs `23`–`25` = GO Morris distinct | **VALIDÉE** |

Aucun nouveau D-VAL.

---

## 5. Gates

| Gate | Statut |
|------|--------|
| POC-G1…G6 | **VALIDÉS** |
| POC-G10 | **CONSOMMÉ** |
| **POC-G7** | **VALIDÉ AVEC RÉSERVES** |
| POC-G8 | **FERMÉ** |
| POC-G9 | **FERMÉ** |
| Versionnement archi | **NON AUTORISÉ** |
| Delivery / lancement POC | **NON AUTORISÉ** |

**≠ READY FOR BACKLOG** tant que docs non intégrés.

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

1. GO **versionnement** (commit / push / draft PR) des docs `23`–`25` (+ sync README/`07`/`20`–`22`).
2. Après intégration uniquement : ouverture éventuelle **POC-G8**.
3. Clôture AF (séparée).

### Conséquences

- GO versionnement ≠ GO backlog ≠ GO delivery ≠ lancement POC.
- NO-GO versionnement : docs restent locaux.

---

## 8. Séquence

```text
POC-G7 VALIDÉ AVEC RÉSERVES (Option B minimale)
  → GO versionnement docs (requis — non accordé ici)
  → post-merge archi
  → décision POC-G8 (FERMÉE aujourd’hui)
  → POC-G9 / POC (NON LANCÉS)
```

---

## 9. Verdict

| Élément | Valeur |
|---------|--------|
| Option B minimale | **RETENUE** |
| Harness autonome | **Oui** |
| Studio | Cockpit |
| Adaptateur | Sans autorité |
| POC-G7 | **VALIDÉ AVEC RÉSERVES** |
| POC-G8/G9 | **FERMÉS** |
| POC | **Non lancé** |
| Versionnement | **Décision requise** |

**Verdict :** `ARCHITECTURE POC OPTION B DOCUMENTED WITH RESERVES — POC-G7 VALIDATED WITH RESERVES — VERSIONING DECISION REQUIRED`

---

*Decision pack — Option B minimale — G7 validé avec réserves — non versionné — Morris décide.*

# SFIA Studio — Decision pack architecture POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
| **Cycle** | Architecture Option B + post-merge + backlog POC-G8 |
| **Statut** | POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **FERMÉ** |
| **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
| **Architecture retenue** | **Option B minimale** — **INTÉGRÉE** (inchangée) |
| **Backlog** | `26`–`28` |
| **POC** | **Non lancé** |
| **Base** | `main` @ `60e6880…` |

---

## 1. Observations

1. #219–#222 MERGED (cadrage, sync, archi, sync post-merge).
2. Option B minimale **RETENUE / INTÉGRÉE**.
3. POC-G8 **CONSOMMÉ** — backlog borné S1 produit.
4. Allowlist **candidate** (`27`) — validation Morris requise.
5. ARCH-POC-CAND-01…12 **inchangées** (fond).
6. POC-G9 **non ouvert**.

---

## 2. Options — statut (inchangé)

| Option | Statut Morris |
|--------|---------------|
| **A** Harness autonome | Conservée — test / diagnostic / dégradé |
| **B minimale** Studio + adaptateur + harness | **RETENUE / VALIDÉE / INTÉGRÉE** |
| **C** Orch. dans app | **Écartée** premier POC |

---

## 4. ARCH-POC-CAND-* — inchangées

01/02/03/06/08/10/11/12 **VALIDÉES** · 04/05/07/09 **VALIDÉES AVEC RÉSERVE** · 12 GO versionnement **CONSOMMÉ** (#221).

Aucun nouveau ARCH-POC-CAND. Aucune modification de fond.

---

## 5. Gates

| Gate | Statut |
|------|--------|
| POC-G1…G6 | **VALIDÉS** |
| POC-G10 | **CONSOMMÉ** |
| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| **POC-G8** | **CONSOMMÉ** |
| POC-G9 | **FERMÉ** |
| Delivery / lancement POC | **NON AUTORISÉ** |

**≠ READY FOR DELIVERY.** Backlog ≠ autorisation d’implémenter.

---

## 6. Réserves (conservées)

1. Cursor réel non prouvé
2. Techno harness ouverte
3. Protocole adaptateur ouvert
4. Allowlist candidate jusqu’à validation Morris
5. `app/**` delivery borné seulement
6. QA non-seconde-vérité
7. Clôture AF
8. POC-G9

---

## 7. Décisions Morris restantes

1. Validation backlog / allowlist (`26`–`28`).
2. Ouverture éventuelle **POC-G9**.
3. Clôture AF (séparée).

---

## 8. Séquence

```text
POC-G8 CONSOMMÉ (backlog)
  → validation Morris backlog/allowlist
  → POC-G9 (FERMÉ)
  → POC (NON LANCÉ)
```

---

## 9. Verdict

**`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`**

---

*Decision pack — Option B inchangée — POC-G8 consommé — POC-G9 fermé — POC NON LANCÉ.*

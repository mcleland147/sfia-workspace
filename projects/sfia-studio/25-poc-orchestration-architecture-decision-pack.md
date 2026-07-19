# SFIA Studio — Decision pack architecture POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `25-poc-orchestration-architecture-decision-pack.md` |
| **Cycle** | Architecture Option B + post-merge + backlog POC-G8 |
| **Statut** | POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** ; POC-G9 **CONSOMMÉ** (harness-only) |
| **Préfixe** | `ARCH-POC-CAND-*` (locaux ; ≠ D-VAL) |
| **Architecture retenue** | **Option B minimale** — **INTÉGRÉE** (inchangée) |
| **Backlog** | `26`–`28` |
| **POC** | **Non lancé** |
| **Base** | `main` @ `d45cc54…` |

---

## 1. Observations

1. #219–#222 MERGED (cadrage, sync, archi, sync post-merge).
2. Option B minimale **RETENUE / INTÉGRÉE**.
3. POC-G8 **CONSOMMÉ** — backlog borné S1 produit.
4. Allowlist initiale **validée** pour harness-only (`27`) — élargissement = nouveau GO.
5. ARCH-POC-CAND-01…12 **inchangées** (fond).
6. POC-G9 **CONSOMMÉ** (harness-only).

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
| POC-G9 | **CONSOMMÉ** (harness-only) |
| Delivery / lancement POC | **NON AUTORISÉ** |

**≠ READY FOR MERGE.** Draft PR harness autorisée (Cycle 13). Merge / industrialisation **fermés**.

---

## 6. Réserves (conservées)

1. Cursor réel non prouvé
2. Techno harness ouverte
3. Protocole adaptateur ouvert
4. Allowlist initiale validée harness-only ; élargissement = nouveau GO
5. `app/**` **fermé** (harness-only)
6. QA non-seconde-vérité
7. Clôture AF
8. Commit/push/PR delivery / UI / Cursor réel / Docker

---

## 7. Décisions Morris restantes

1. Evidence re-review harness-only.
2. Merge delivery (fermé) ; Cursor réel / UI / Docker (fermés).
3. Clôture AF (séparée).

---

## 8. Séquence

```text
POC-G8 CONSOMMÉ (backlog)
  → allowlist initiale validée harness-only
  → POC-G9 (CONSOMMÉ harness-only)
  → POC (NON LANCÉ)
```

---

## 9. Verdict

**`POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`**

---

*Decision pack — Option B inchangée — POC-G9 harness-only consommé — POC NON LANCÉ — app/** intact.*

---

## Delivery POC-G9 (statut architecture)

Option B **inchangée**. Harness autonome sous `projects/sfia-studio/harness/`. Studio/adaptateur **non** implémentés. Cursor **fixture**. Docker **non** introduit.

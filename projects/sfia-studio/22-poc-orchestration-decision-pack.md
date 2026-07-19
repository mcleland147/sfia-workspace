# SFIA Studio — Decision pack POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `22-poc-orchestration-decision-pack.md` |
| **Statut** | Cadrage **INTÉGRÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** (backlog) |
| **POC** | **Non lancé** |
| **POC-G9** | **FERMÉ** |
| **Backlog** | `26`–`28` |
| **PR archi / sync** | #221 / #222 **MERGED** |
| **main** | `60e6880104f795ed0e4ba5dc18172c01dcaf9b02` |

> Architecture **Option B minimale** intégrée. Backlog S1 produit. Harness autonome. Studio cockpit. Adaptateur sans autorité. Option C écartée (1er POC). Delivery **non autorisé**.

---

## 1. Observations

1. Cadrage / sync / archi intégrés (#219–#222).
2. POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**.
3. POC-G8 **CONSOMMÉ** — backlog `26`–`28`.
4. Allowlist **candidate** (`27`).
5. POC-G9 fermé ; POC non lancé.

---

## 6. POC-CAND — inchangées

01…06, 08, 10 **VALIDÉES** · 07 **AVEC RÉSERVE** · 09 **CONSOMMÉE**.

---

## 7. Gates

| Gate | Statut |
|------|--------|
| POC-G1…G6 | **VALIDÉS** |
| POC-G10 | **CONSOMMÉ** |
| POC-G7 | **VALIDÉ AVEC RÉSERVES — INTÉGRÉ** |
| **POC-G8** | **CONSOMMÉ** (backlog) |
| POC-G9 | **FERMÉ** |

ARCH-POC-CAND-* : voir `25` (inchangées).

---

## 10. Séquence

```text
POC-G7 INTÉGRÉ → versionnement CONSOMMÉ (#221)
  → sync post-merge CONSOMMÉE (#222)
  → POC-G8 CONSOMMÉ (backlog 26–28)
  → validation backlog / allowlist (Morris)
  → POC-G9 (FERMÉ) → POC (NON LANCÉ)
```

---

## 11. Verdict

**`POC BACKLOG COMPLETE WITH RESERVES — POC-G8 CONSUMED — POC-G9 DECISION REQUIRED`**

---

*Option B — G8 consommé — G9 fermé — POC NON LANCÉ.*

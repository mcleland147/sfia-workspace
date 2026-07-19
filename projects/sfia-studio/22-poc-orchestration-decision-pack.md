# SFIA Studio — Decision pack POC orchestration

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `22-poc-orchestration-decision-pack.md` |
| **Statut** | Cadrage **INTÉGRÉ** ; POC-G7 **INTÉGRÉ** ; POC-G8 **CONSOMMÉ** (backlog) |
| **POC** | **Non lancé** |
| **POC-G9** | **CONSOMMÉ** (harness-only) |
| **Backlog** | `26`–`28` |
| **PR archi / sync** | #221 / #222 **MERGED** |
| **main** | `d45cc54f97479cefa3d2612c6e1a965ff50958bb` |

> Architecture **Option B minimale** intégrée. Backlog S1 produit. Harness autonome. Studio cockpit. Adaptateur sans autorité. Option C écartée (1er POC). Delivery **non autorisé**.

---

## 1. Observations

1. Cadrage / sync / archi intégrés (#219–#222).
2. POC-G7 **VALIDÉ AVEC RÉSERVES — INTÉGRÉ**.
3. POC-G8 **CONSOMMÉ** — backlog `26`–`28`.
4. Allowlist initiale **validée** pour harness-only (`27`) — élargissement = nouveau GO.
5. POC-G9 **CONSOMMÉ** (harness-only) ; POC non lancé.

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
| POC-G9 | **CONSOMMÉ** (harness-only) |

ARCH-POC-CAND-* : voir `25` (inchangées).

---

## 10. Séquence

```text
POC-G7 INTÉGRÉ → versionnement CONSOMMÉ (#221)
  → sync post-merge CONSOMMÉE (#222)
  → POC-G8 CONSOMMÉ (backlog 26–28)
  → allowlist initiale validée harness-only ; élargissements = nouveau GO
  → POC-G9 (CONSOMMÉ harness-only) → POC (NON LANCÉ)
```

---

## 11. Verdict

**`POC S1 HARNESS DELIVERY COMPLETE WITH RESERVES — EVIDENCE REVIEW REQUIRED — NO REMOTE EFFECT`**

---

*Option B — G8 consommé — G9 fermé — POC NON LANCÉ.*

---

## Delivery POC-G9 (statut)

| Élément | Statut |
|---------|--------|
| POC-G9 | **CONSOMMÉ** — harness-only local |
| Branche | `delivery/sfia-studio-poc-s1-harness` (locale) |
| Emplacement | `projects/sfia-studio/harness/` |
| Cursor | fixture only |
| Docker | non retenu (option ouverte) |
| `app/**` | **intact** |
| Commit/push/draft PR | **CONSOMMÉ** ; merge **fermé** |
| POC lancé | **Non** |

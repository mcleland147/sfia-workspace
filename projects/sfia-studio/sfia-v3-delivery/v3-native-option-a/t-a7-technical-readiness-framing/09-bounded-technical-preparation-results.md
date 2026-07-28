# 09 — Bounded technical preparation results (O2)

| Champ | Valeur |
|-------|--------|
| **Document** | `09-bounded-technical-preparation-results.md` |
| **Gate** | `GO ADDRESS T-A7 TECHNICAL READINESS BLOCKERS — AUTHORIZE BOUNDED TECHNICAL PREPARATION FOR OPS1 VALIDATION EVIDENCE COLLECTION AND P03-P11 GAP REDUCTION ONLY — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Option** | **O2** — préparation technique bornée uniquement |
| **Date/heure/fuseau** | 2026-07-28 20:54:03 CEST (+0200) |
| **HEAD framing parent** | `a33f4a32c09a6a4e58a32f7a42a07ea05fbcd563` |
| **T-A7** | `NOT OPEN` |
| **Développement fonctionnel** | **non** |

---

## 1. Campagne exécutée

| Phase | Contenu |
|-------|---------|
| A | inventaire tests / sources |
| B | plan probes (fichiers ci-dessous) |
| C | scope validation (tests only) |
| D | exécution vitest non destructive |
| E | analyse + volumes locaux agrégés |
| F | mise à jour pack |

### Fichiers techniques autorisés (avant commit)

| Fichier | Preuve | Réversibilité | Risque |
|---------|--------|---------------|--------|
| `__tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts` | E-OPS-03 static / P10 | git revert | faible |
| `__tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts` | E-OPS-05 | git revert | faible |
| `__tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts` | asymétrie policy/loader | git revert | faible |
| `__tests__/platform/t-a7-canonical-consumers.probe.test.ts` | E-CP-02/03 · P03 | git revert | faible |
| `__tests__/platform/t-a7-local-volume.probe.test.ts` | E-PER-01 | git revert | faible |
| `__tests__/platform/t-a7-f11-f13-absence.probe.test.ts` | F11/F13 absence · E-MM-03 | git revert | faible |

**Aucun** fichier produit · API · UI · migration · `method/**` · OPS1/MethodMode fonctionnel.

---

## 2. Environnement

| Élément | Valeur |
|---------|--------|
| OS | darwin 25.6.0 |
| CWD tests | `…/sfia-workspace-t-a7-technical-readiness/projects/sfia-studio/app` |
| Runner | vitest 3.2.7 |
| node_modules | symlink temporaire vers checkout principal (retiré avant commit) |
| Réseau | non utilisé |
| Production | non |

---

## 3. Commandes exécutées

```text
npm test -- \
  __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts \
  __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts \
  __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts \
  __tests__/platform/t-a7-canonical-consumers.probe.test.ts \
  __tests__/platform/t-a7-local-volume.probe.test.ts \
  __tests__/platform/t-a7-f11-f13-absence.probe.test.ts \
  __tests__/platform/import-boundaries.test.ts \
  __tests__/ops1/allowlistEvaluation.test.ts \
  __tests__/ops1/sfia/canonicalEngine.test.ts \
  __tests__/oa/project/antiLegacy.test.ts \
  __tests__/oa/doctrine/antiLegacy.test.ts \
  __tests__/d1/project-foundation.test.ts
```

**Résultat :** 12 files · **63 tests passed** · durée ~1.96s · exit 0.

**Non exécutés :** e2e Playwright OPS1 I1–I6 (nécessite browser/env ; hors besoin minimal de cette campagne) · `next build` (pas de code produit) · lint global (tests only).

---

## 4. Résultats par preuve

| ID | Verdict campagne | Détail |
|----|------------------|--------|
| E-OPS-03 | `PARTIAL — EVIDENCED` | 0 imports statiques OPS1↔OA, OPS1↔D1, D1↔OPS1 ; surface D1 intake sans import OPS1 ; pas de probe d’appels dynamiques live |
| E-OPS-05 | `NO LOCAL HITS — LIMITED EVIDENCE` | 0 clés `method/` dans policy ; tous chemins method/ échantillonnés DENIED/INVALID (read/modify/create) |
| E-CP-02 | `PARTIAL — EVIDENCED` | consommateurs platform + wrappers OPS1 `lib/ops1/sfia/*` |
| E-CP-03 | `PARTIAL — EVIDENCED` | OA n’importe pas `method/` ; loader refuse hors allowlist ; fallback produit global non prouvé absente au runtime |
| Path-policy/loader | `ASYMMETRY QUALIFIED — NO POLICY CHANGE AUTHORIZED` | CT deny method/ · loader lit cores allowlistés · digest OK |
| E-PER-01 | `LOCAL VOLUME EVIDENCE COLLECTED — PRODUCTION UNKNOWN` | worktree : sqlite absents ; checkout principal local : ops1.sqlite 2 277 376 B / 14 tables / 4615 rows agg ; d1.sqlite 360 448 B / 4 tables / 909 rows — **métriques agrégées seulement** |
| E-MM-03 | `MISSING — EVIDENCED` | aucun hold flag MethodMode dans `lib/d1` |
| F11.2 | absence prouvée | aucune route readiness/cutover/methodmode |
| F13.4 | absence prouvée | aucun module legacy-history / RO runtime |

---

## 5. Import boundaries / cross-call / allowlist / asymétrie

| Axe | Résultat |
|-----|----------|
| Import boundaries (existant + probe) | D1↛OPS1 · platform↛D1/OPS1 · OA↛OPS1 · OPS1↛OA — **verts** |
| Cross-call runtime | couche **statique** verte ; live session **non instrumentée** → PARTIAL |
| Hits allowlist method/ | **aucun** hit policy ; denials structurels — limited local evidence |
| Path-policy vs loader | asymétrie **qualifiée** · **aucun** changement de policy |

---

## 6. Volumes

`LOCAL VOLUME EVIDENCE COLLECTED — PRODUCTION UNKNOWN`

Limite : données dans `.sfia-exec` du checkout principal (gitignored), absentes du worktree. Non extrapolable production.

---

## 7. P03–P11 avant → après

| ID | Avant | Après | Motif |
|----|-------|-------|-------|
| P03 | PARTIAL | `PARTIAL — EVIDENCED` (renforcé) | consumers + digest + closed list |
| P04 | PARTIAL | `PARTIAL — EVIDENCED` (renforcé) | loader digest tests verts |
| P05 | PARTIAL | `PARTIAL — EVIDENCED` | inchangé structurellement ; OA sans import method |
| P06 | MISSING | `MISSING — EVIDENCED` | pas de session OA remplacement |
| P07 | MISSING | `MISSING — EVIDENCED` | MethodMode actif ; hold absent |
| P08 | MISSING | `MISSING — EVIDENCED` (gap réduit partiellement) | lectures method via loader allowlist toujours actives |
| P09 | MISSING | `MISSING — EVIDENCED` | UI OA absente |
| P10 | PARTIAL | `PARTIAL — EVIDENCED` (renforcé) | isolation static OPS1 validée |
| P11 | MISSING | `MISSING — EVIDENCED` | F13.4 runtime absente (prouvé) |

---

## 8. Contrat OPS1

**Verdict :** `OPS1 ISOLATION CONTRACT VALIDATED FOR FUTURE IMPLEMENTATION — NOT IMPLEMENTED`

Axes : cohérence code ✓ · testabilité ✓ · réversibilité ✓ · path-policy≠IAM ✓.

Résiduels : probe live dynamique optionnelle ; surface partagée D1/platform documentée ≠ identité commune ; wrappers TEMP à conserver jusqu’à gate dédié.

**Pas** une décision Morris d’implémentation.

---

## 9. Rollback

| Action | Mécanisme |
|--------|-----------|
| Tests/probes | `git revert` du commit evidence |
| Symlink node_modules | retiré avant commit |
| DB | **aucune** écriture campagne (lectures RO agrégées hors worktree) |

---

## 10. Findings

| Sévérité | Finding |
|----------|---------|
| Info | Asymétrie path-policy deny vs loader allow — confirmée par tests |
| Info | Volumes locaux disponibles hors worktree seulement |
| Info | Hold MethodMode absent (E-MM-03) |
| None Critical/Major produit | — |

---

## 11. Verdict section

`BOUNDED TECHNICAL PREPARATION CAMPAIGN COMPLETED — 63 TESTS PASSED — BLOCKERS REDUCED WITHOUT PRODUCT IMPLEMENTATION — T-A7 NOT OPEN`


## LOT 1 FOLLOW-ON

O3 adopté · fondations implémentées localement · voir `10`.

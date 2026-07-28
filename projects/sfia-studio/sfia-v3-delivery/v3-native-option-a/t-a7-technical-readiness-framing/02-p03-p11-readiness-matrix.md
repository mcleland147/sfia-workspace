# 02 — Matrice de readiness P03–P11

| Champ | Valeur |
|-------|--------|
| **Document** | `02-p03-p11-readiness-matrix.md` |
| **Source canonique des définitions** | `t-a7-legacy-cutover-framing/02-t-a7-cutover-preconditions.md` |
| **Base d’observation** | `origin/main` @ `2a3c59c46c105bae458d1a7329079c5f591da421` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **Statut matrice** | `QUALIFIED — EVIDENCE-BASED — NOT AN AUTHORIZATION` |
| **T-A7** | `NOT OPEN` |

> Les préconditions restent **candidates au sens cutover**. Leur qualification ici **n’autorise** ni préparation technique exécutable, ni delivery, ni cutover.

---

## 1. Légende des statuts

| Statut | Sens |
|--------|------|
| `SATISFIED — EVIDENCED` | preuve Git / contrat vérifiable pour l’exigence **telle que formulée** |
| `PARTIAL — EVIDENCED` | preuves partielles ; écart explicite |
| `MISSING — EVIDENCED` | absence de preuve constatée |
| `UNKNOWN — EVIDENCE REQUIRED` | donnée ou mesure non collectée |
| `NOT APPLICABLE — JUSTIFIED` | hors jeu pour le niveau considéré |

Niveaux d’exigence (héritage F03.3 / framing cutover) :

| Niveau | Sens |
|--------|------|
| Avant **prep technique** | inventaire / design / matrice / décisions F — **pas** runtime green |
| Avant **delivery preparation** | + stratégies / designs prouvables · HARD non ignorés |
| Avant **cutover** | + preuves runtime P07–P11 · F11.2 · F13.4 opérationnels · gate D |

---

## 2. Matrice P03–P11

| ID | Exigence canonique | Preuves Git | Statut | Écart | Risque | Action documentaire / technique future | Gate | Stop condition | Avant prep tech | Avant delivery prep | Avant cutover |
|----|--------------------|-------------|--------|-------|--------|----------------------------------------|------|----------------|-----------------|---------------------|---------------|
| P03 | `canonicalPaths` → DoctrinePackage registry | `canonicalPaths.ts` · `SFIA_CANONICAL_CORE_PATHS` (template + 3 method core) · OA `app/lib/oa/doctrine/**` | `PARTIAL — EVIDENCED` | pas d’adoption produit globale ; fallback method encore actif | fallback silencieux | inventaire consommateur + plan remplacement registry | F03 / prep distinct | SC-05 · SC-02 | matrice + inventaire | plan tests resolve/deny | preuve import + runtime no-fallback |
| P04 | `sourceLoader` → package loader + digest | `sourceLoader.ts` · digest SHA-256 · blob SHA | `PARTIAL — EVIDENCED` | pas de loader cutover produit unique | package stale | design loader cible + pin tests | F03 | SC-05 | inventaire | digest pin tests | loader unique cible |
| P05 | `contextResolver` → CkcResolver + doctrine | T-A2 `memoryCkcResolver` · lectures method encore possibles hors OA mémoire | `PARTIAL — EVIDENCED` | guidance-only ; pas de preuve no `method/**` product | doctrine v2.6 résiduelle | boundary CKC documentée + tests | F03 | SC-05 · SC-02 | inventaire boundaries | boundary tests | no method/** product reads |
| P06 | `sessionContext` / MethodMode deps → OA correlation | MethodMode D1 actif (`types.ts` · `actions.ts`) · anti-claims T-A* | `MISSING — EVIDENCED` | pas de remplacement session OA produit | MethodMode residual | design session OA (doc) | F03 · F11 | SC-04 · SC-05 | design only | design session | preuve no MethodMode |
| P07 | MethodMode → retiré de cible OA | `METHOD_MODES` actif · UI/API D1 · tests `project-foundation.test.ts` | `MISSING — EVIDENCED` | MethodMode présent ; aucun retrait | cutover prématuré | inventaire dépendances + hold flag futur | F03 · F11 | SC-04 | inventaire | plan retrait | UI+API+import proofs |
| P08 | lectures `method/**` → absentes cible OA | loader canonique lit 3 fichiers method · CT path-policy deny asymétrique | `MISSING — EVIDENCED` | lectures actives via allowlist fermée | lecture legacy silencieuse | CI boundary candidates · ne pas retirer sans remplacement | F03 | SC-02 · SC-05 | règles CI candidates | grep/import CI | CI + runtime proof |
| P09 | badges v2.6 → retirés surfaces OA | D1 MethodMode labels ; UI OA native absente | `MISSING — EVIDENCED` | pas de surfaces OA product | confusion utilisateur | design UI OA distinct F11 product | F11 | SC-04 | design UI | design UI | UI tests |
| P10 | OPS1 contracts → ACL / isolation | `allowlistEvaluation.ts` · `pathPolicy.ts` · `import-boundaries.test.ts` · pack Wave 1 `04` | `PARTIAL — EVIDENCED` | path-policy ≠ IAM ; pas d’ACL cutover ; pas no-cross-call runtime OA | double identité OPS1/v3 | **contrat isolation** (ce pack) puis validation Morris | F13 · W1-D04 | SC-03 · SC-12 · W1-S5 | frontière documentée | frontière + tests | ACL runtime |
| P11 | historique legacy → read-only policy | F13.4 décidé · **aucune** enforcement runtime · audit OA mémoire | `MISSING — EVIDENCED` | politique cible non appliquée ; durée conservation non fixée | mutation / fuite historique | design vue RO + politique mutation=deny | F13 | SC-06 | politique candidate | politique Morris | enforcement RO |

---

## 3. Synthèse par statut

### Satisfaits

Aucun P03–P11 en `SATISFIED — EVIDENCED` au HEAD courant pour l’exigence **de remplacement Option A**.

### Partiels

| ID | Motif court |
|----|-------------|
| P03 | registry OA existe ; canonical paths method encore actifs |
| P04 | digest présent ; cutover loader absent |
| P05 | CKC mémoire ; lectures method produit non exclues |
| P10 | path-policy / allowlist / import tests ; isolation cutover absente |

### Manquants

| ID | Motif court |
|----|-------------|
| P06 | pas de session OA de remplacement |
| P07 | MethodMode non retiré |
| P08 | lectures `method/**` actives |
| P09 | badges / UI OA native absents |
| P11 | RO historique non enforce |

### Unknown (preuves à collecter)

| Sujet | Statut | Pourquoi |
|-------|--------|----------|
| Volumes DB / `.sfia-exec` | `UNKNOWN — EVIDENCE REQUIRED` | SQLite local gitignored · pas de campagne de mesure |
| Hits allowlist `method/` runtime | `UNKNOWN — EVIDENCE REQUIRED` | inventaire structurel ≠ hits live |
| Cross-call OPS1 ↔ OA runtime | `UNKNOWN — EVIDENCE REQUIRED` | import tests ≠ preuve runtime |
| Durée conservation F13 | `UNKNOWN — EVIDENCE REQUIRED` | reportée à cycle distinct |
| IAM multi-user | `NOT SELECTED` | hors F03.3 satisfaction seule |

---

## 4. Blockers pour prep technique / ouverture

1. P06–P09 · P11 `MISSING` — interdisent retrait / cutover ; limitent un lot de développement borné.
2. P10 `PARTIAL` — isolation OPS1 **définie** dans `03` mais **non validée** Morris / non implémentée.
3. Asymétrie path-policy deny `method/` vs loader canonique allow — risque de confusion opérationnelle.
4. HARD / B5 / R1 / R-M01 ouverts — non ignorés ; bloquent delivery (B5 STOP BEFORE DELIVERY).

---

## 5. Dépendances

```
W1-D02 (actifs) ──► P03/P04/P07/P08 (lectures & MethodMode)
W1-D04 (OPS1)   ──► P10 ──► F13.4
F11.2           ──► P06/P07/P09/P22 (surfaces read)
F13.4           ──► P10/P11
F03.3           ──► qualification de cette matrice (≠ satisfaction runtime)
```

---

## 6. Anti-claims

- matrice qualifiée ≠ P* satisfaits ;
- `PARTIAL` ≠ autorisation de retrait ;
- P01 historique (T-A0…T-A6 intégrés) ≠ delivery / cutover ;
- décision F13.4 ≠ P11 `SATISFIED`.

---

## 7. Verdict section

`P03–P11 QUALIFIED FROM EVIDENCE — 0 SATISFIED / 4 PARTIAL / 5 MISSING — UNKNOWN EVIDENCE ITEMS OPEN — NO AUTHORIZATION`

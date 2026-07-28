# 13 — F13.4 completion surface & gaps

| Champ | Valeur |
|-------|--------|
| **Document** | `13-f13-4-completion-surface-and-gaps.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **Décision parent** | D-T-A7-F13 = **F13.4** (`DECIDED`) |
| **Gate N3** | N3 **DECIDED — ADOPTED BY MORRIS** |
| **Base Git** | `770605bc…` |
| **Implémentation** | **interdite** |
| **Statut F13.4** | fondation lot 1 intégrée · **vue runtime finale non complète** |

---

## 1. État actuel (main)

| Élément | Preuve | Limite |
|---------|--------|--------|
| Module | `app/lib/platform/t-a7/boundedHistoryRead.ts` | documentary seed |
| Max | `BOUNDED_HISTORY_MAX_ITEMS = 50` | hard cap |
| Providers | documentary · unavailable | pas de Git live fetch |
| Page | frozen · `gitCanonical=true` · `mutable=false` | `BOUNDED_LOT_1` |
| Seed | 3 entrées packs/PR refs | ≠ archive complète |
| Availability | PARTIAL / NOT_AVAILABLE / EMPTY | cohérent |
| Tests | `t-a7-bounded-history.test.ts` | limites/immutabilité |
| Persist store | **aucun** | Git canonique |

**Anti-claim :** fondation ≠ vue runtime finale · ≠ ACL · ≠ source concurrente à Git.

---

## 2. Git canonique (normatif)

- Git / packs documentaires = **vérité historique** ;
- la vue runtime est une **projection bornée** ;
- interdiction de mutations historiques ;
- path-policy ≠ IAM ;
- isolation OPS1 (W1-D04) reste **préalable** à retrait legacy — **non réalisée** ici.

---

## 3. Cible fonctionnelle minimale — vue runtime bornée

| Aspect | Fondation | Cible minimale complète | Gap |
|--------|-----------|-------------------------|-----|
| Rôle | métadonnées packs | support/audit/traçabilité RO | pas de parcours opérateur |
| Périmètre | seed documentary fixe | politique d’inclusion/exclusion documentée (catégories) | politique incomplete |
| Profondeur | max 50 | max borné + justification + overflow behavior | OK partiel |
| Pagination | slice prefix only | cursor/offset **ou** explicite « prefix-only » décidé | **MISSING** si multi-page requis |
| Provenance | git-ref / documentary-pack / synthetic | provenance obligatoire + vérifiabilité | OK partiel |
| Fraîcheur | `evaluatedAt` | relation à tip Git / pack SHA | pas de tie to HEAD |
| Cohérence Git | claim `gitCanonical` | preuve que items ⊆ refs Git/packs | seed manuel |
| Actif vs historique | status enum | frontière sémantique documentée + tests | OK partiel |
| États dégradés | NOT_AVAILABLE | matrice dégradée + messages | OK partiel |
| Audit accès | absent | log borné lectures | **MISSING** |
| Rétention | UNKNOWN | durée conservation (cycle distinct si besoin) | **UNKNOWN** |

---

## 4. Sécurité / observabilité / rétention

| Frontière | Statut |
|-----------|--------|
| IAM / ACL | **NOT SELECTED** — lectures actuelles = in-process |
| AuthN/AuthZ acteur | non modélisées |
| Contenu sensible | métadonnées packs/PR seulement ; pas de blobs method |
| Observabilité | pas d’event dédié |
| Rétention | **UNKNOWN** — à cadrer sous gate distinct si conservation ≠ Git |
| RGPD | **NOT VALIDATED** — minimisation : pas de PII dans seed actuel |

**Ne pas sélectionner** store durable / cache produit / IAM dans N3.

---

## 5. Gaps / dépendances / blockers

| ID | Type | Description | Bloque | Décision ? |
|----|------|-------------|--------|------------|
| G-F13-01 | gap fonc. | seed ≠ archive Git live | vue « runtime » riche | oui (stratégie lecture) |
| G-F13-02 | gap tech. | pas de pagination multi-page | volumes > 50 | oui si besoin |
| G-F13-03 | gap | pas d’audit accès | norme F13 | oui/non |
| G-F13-04 | dépendance | F11 consomme summary | cohérence couple | docs N3 |
| G-F13-05 | dépendance | OPS1 isolation (P10) | retrait legacy | N2/autre |
| G-F13-06 | blocker | persistence NOT SELECTED | si cache/index requis | **oui avant store** |
| G-F13-07 | blocker | IAM NOT SELECTED | si exposition multi-acteur | **oui avant HTTP** |
| G-F13-08 | unknown | durée conservation | conformité | cycle rétention |

---

## 6. Critères de complétion F13.4

Déclarable **complete** seulement si :

1. Git reste canonique (preuve + tests anti-mutation) ;
2. politique d’inclusion des items documentée et testée ;
3. profondeur/pagination décidées et implémentées sous gate ;
4. états dégradés couverts ;
5. cohérence provenance ↔ Git/packs démontrable ;
6. audit accès présent **ou** différé explicitement ;
7. rétention clarifiée **ou** « Git-only retention » décidé ;
8. IAM/persistence : soit in-process mono-opérateur documenté, soit sélectionnés+validés ;
9. **aucune** mutation historique ; **aucune** claim cutover.

**Statut actuel :** `NOT COMPLETE`.

---

## 7. Non-objectifs

- store concurrent à Git ;
- migration DB historique ;
- ACL production sans gate ;
- exposition de contenu `method/**` brut ;
- UI archive ;
- retrait OPS1/legacy.

---

## 8. Stop conditions

- tentative de faire de la vue runtime une source canonique ;
- écriture / « repair » d’historique ;
- sélection persistence/IAM sans GO ;
- lecture arbitraire filesystem hors politique ;
- claim complete sans §6.

---

## 9. Questions d’arbitrage Morris

1. Lecture Git live (bornée) vs seed documentary enrichi vs index dérivé **non persistant** ?
2. Pagination multi-page requise pour complete ?
3. Audit accès requis maintenant ?
4. Rétention = Git only (décider) vs cycle rétention séparé ?
5. Couplage F11 summary : stable page-id / evaluatedAt contract ?

# 06 — Holds, anti-bypass et stop conditions

| Champ | Valeur |
|-------|--------|
| **Document** | `06-holds-and-stop-conditions.md` |
| **Date/heure/fuseau** | 2026-07-28 20:36:49 CEST (+0200) |
| **T-A7** | `NOT OPEN` |
| **Statut** | `HOLDS ACTIVE — ANTI-BYPASS DOCUMENTED` |

---

## 1. Holds obligatoires (toujours actifs)

| Hold | Statut exigé | Sens |
|------|--------------|------|
| T-A7 | `NOT OPEN` | framing readiness ≠ ouverture |
| F03.3 | décidée ≠ satisfaite | set **partiel réduit** (`BLOCKERS REDUCED`) ; prep hors gate O2 interdite |
| F11.2 | décidée ≠ API disponible | pas d’implémentation |
| F13.4 | décidée ≠ historique RO disponible | pas de vue runtime |
| Isolation OPS1 | design **validé tech** ≠ réalisée | contrat validé O2 · **non implémenté** |
| B5 | `OPEN` | STOP BEFORE DELIVERY |
| R1 | `OPEN` | atomicité non résolue |
| R-M01 | `OPEN` | ClaimEvaluator readiness |
| HARD (R-T-A3-1/2…) | `OPEN HARD` | autorité / atomicité |
| Persistence / IAM | `NOT SELECTED` | pas de sélection implicite |
| RGPD production | `NOT VALIDATED` | U-M02 ouvert |
| T-A6 COMPLETE | `NOT DECLARED` | |
| Option A | `NOT COMPLETE` | |
| Delivery preparation | `NOT AUTHORIZED` | |
| Delivery | `NOT AUTHORIZED` | |
| Cutover | `NOT AUTHORIZED` | |

---

## 2. Anti-bypass

| Mécanisme | Contenu |
|-----------|---------|
| Gates séquencés | Wave 1 → F03/F11/F13 → readiness → **décision ouverture** → prep bornée → delivery → cutover |
| Pas de saut A→D | aucune transition automatique framing → cutover |
| HARD non ignorables | critère F03.3 « aucun blocker HARD ignoré » |
| Path-policy ≠ IAM | stop si confondus |
| Décision ≠ implémentation | F* / W1* ne valent pas code |
| B5 | bloque delivery même si framing vert |
| Review handoff | consommation post-cycle ChatGPT — ne remplace pas gate Morris |

---

## 3. Stop conditions (héritage + readiness)

| ID | Trigger | Action |
|----|---------|--------|
| SC-02 | mod `method/**` hors gate | STOP |
| SC-03 | mod OPS1 hors gate | STOP · isoler |
| SC-04 | MethodMode retiré sans P03–P09 | STOP |
| SC-05 | remplacements legacy incomplets | STOP activation |
| SC-06 | rollback/hold non démontrable avant cutover | STOP |
| SC-07 | real execution sans HARD/persistence/IAM | STOP |
| SC-12 | OPS1 présenté comme v3 / hors Option A | STOP |
| W1-S1 | inventaire = autorisation retrait | STOP |
| W1-S3 | vague 1 = T-A7 OPEN | STOP |
| W1-S4 | prep technique sans F03/F11/F13 décidés | *(contenu F maintenant décidé — hold passe à satisfaction/impl)* |
| W1-S5 | retrait sans isolation OPS1 définie/validée | STOP |
| A52-B5 | delivery avec B5 OPEN non accepté | STOP BEFORE DELIVERY |
| TR-S-01 | preuve absente présentée comme SATISFIED | STOP |
| TR-S-02 | contradiction documentaire (décision vs anti-claim) | STOP |
| TR-S-03 | dépendance UNKNOWN traitée comme nulle | STOP |
| TR-S-04 | mutation historique possible non holdée | STOP |
| TR-S-05 | frontière OPS1 ambiguë | STOP |
| TR-S-PP-IAM | path-policy confondue avec IAM | STOP |
| TR-S-06 | rollback non démontrable au niveau requis | STOP |
| TR-S-07 | volume/migration non qualifiés avant mutation data | STOP |
| TR-S-08 | blocker HARD contourné | STOP |
| TR-S-09 | scope élargi hors pack readiness / hors gate | STOP |
| TR-S-10 | claim T-A7 OPEN sans bulletin Morris | STOP |

---

## 4. Mapping preuves absentes → stops

| Preuve manquante | Stop |
|------------------|------|
| E-OPS-03 cross-call | TR-S-05 · W1-S5 |
| E-F11-* API | ne pas claim cutover ready |
| E-F13-02/03 RO | TR-S-04 · P11 |
| E-PER-01 volumes | TR-S-07 |
| E-RB-02 drills | SC-06 / TR-S-06 au niveau cutover |

---

## 5. Anti-claims

- hold documenté ≠ hold runtime ;
- stop condition ≠ rollback prouvé ;
- F* décidées ≠ holds levés ;
- readiness pack ≠ bypass vers delivery.

---

## 6. Verdict section

`HOLDS ACTIVE — ANTI-BYPASS AND STOP CONDITIONS DOCUMENTED — O2 DOES NOT LIFT T-A7 NOT OPEN — HARD NOT IGNORED`

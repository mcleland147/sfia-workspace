# 07 — Validation, rollback and stop conditions

| Champ | Valeur |
|-------|--------|
| **Nature** | exigences **futures** · aucune validation exécutée ici |
| **Rollback** | documenté ≠ validé |
| **W1-B** | `DECIDED — ADOPTED BY MORRIS` |
| **Prep technique retrait** | bloquée tant que F03/F11/F13 contenu `NOT DECIDED` (T-A7-W1-D05) |

## 1. Preuves avant modification future

| Domaine | Preuves minimales |
|---------|-------------------|
| MethodMode | inventaire UI/API/DB · tests D1 verts · plan remplacement OA session (P06/P07) · hold flag |
| `method/**` | diff path filter · consommateurs prompts/OPS1 mis à jour · P08/P24 CI boundary |
| OPS1 | P10 ACL · no cross-call OA · allowlist revue · e2e I1–I6 · anti SC-12 · **isolation frontière avant retrait** (D04) |
| Cutover | P03–P11 + F09 · RUN/rollback P23 · GO niveau D |
| Candidats D03 | preuves complémentaires avant retrait effectif (orphan select · Gate/route DOC ONLY · archives) |

## 2. Stop conditions (héritage T-A7 + Wave 1)

| ID | Trigger | Action |
|----|---------|--------|
| SC-02 | mod `method/**` hors gate | STOP merge/cycle |
| SC-03 | mod OPS1 hors gate | STOP · isoler |
| SC-04 | MethodMode retiré sans P03–P09 | STOP cutover |
| SC-05 | remplacements legacy incomplets | STOP activation |
| SC-12 | OPS1 présenté comme v3 / hors Option A | STOP recentrage |
| W1-S1 | inventaire traité comme autorisation retrait | STOP · anti-claim |
| W1-S2 | F03/F11/F13 consommées sans bulletin | STOP |
| W1-S3 | vague 1 présentée comme T-A7 OPEN | STOP |
| W1-S4 | préparation technique de retrait **sans** contenu F03/F11/F13 décidé | STOP (D05) |
| W1-S5 | retrait sans isolation OPS1 définie | STOP (D04) |
| A52 | B5 STOP BEFORE DELIVERY | inchangé |
| A52-D03 | `.1` avant real Critical | inchangé |

## 3. Rollback (candidat documentaire)

| Couche | Mécanisme candidat |
|--------|--------------------|
| Git | revert merge/commits pack ou code futur |
| Feature/hold | hold flags cutover (P07–P09) |
| ACL | restore allowlist / ruleset |
| Data D1 | backup SQLite avant migration method_mode |
| OPS1 local | `.sfia-exec` hors Git — procédures locales |

**Anti-claim :** rollback documenté ≠ rollback testé runtime.

## 4. Liens F

| F | Rôle Wave 1 | Statut contenu | Gate (D05) |
|---|-------------|----------------|------------|
| F03 | préconditions delivery / inventaire legacy | `NOT DECIDED` | **obligatoire avant** prep technique retrait |
| F11 | API/UI avant cutover (badges/surfaces) | `NOT DECIDED` | **obligatoire avant** prep technique retrait |
| F13 | historique RO + isolation OPS1 (P10–P11) | `NOT DECIDED` | **obligatoire avant** prep technique retrait |
| F08–F10 | hors vague 1 (calendrier T-A7-D05) | contenu `NOT DECIDED` | — |

**Anti-claim :** obligation d’arbitrer F03/F11/F13 avant prep technique ≠ contenu F déjà décidé.

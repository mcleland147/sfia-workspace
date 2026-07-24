# 08 — Règles, erreurs, stop conditions et cas d’usage

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré |
| **Document** | `08-functional-rules-errors-and-stop-conditions.md` |

## 1. Règles fonctionnelles obligatoires

1. Project ≠ Cycle · CycleType ≠ CycleInstance.
2. Conversation ≠ décision.
3. CKC ≠ formulaire.
4. Recommandation ≠ décision.
5. Validation doctrine ≠ runtime adopté.
6. ExecutionContract ≠ prompt Markdown.
7. Preuve ≠ claim.
8. Merge ≠ fin projet/cycle.
9. Absence de source ≠ invention.
10. Fallback CKC **intra-v3** uniquement.
11. DoctrinePackage non résolu = stop.
12. Contradiction structurante = gate Morris.
13. Mutation structurante = confirmation.
14. Agent sans capacité/autorité = interdit.
15. Action irréversible = N3.
16. Erreur d’exécution ≠ rollback automatique non prouvé.
17. Apprentissage ≠ modif auto doctrine/CKC.
18. Pas de MethodMode / badges v2.6 dans runtime cible.
19. Pas de lecture runtime `method/sfia-fast-track/**` ni template comme SoT.
20. Composer toujours disponible hors modal stricte (UX).

## 2. Taxonomie d’erreurs / stops

| Code | Déclencheur | Visibilité | Permis | Interdit | Reprise | Gate |
|------|-------------|------------|--------|----------|---------|------|
| DOCTRINE_UNRESOLVED | package absent/mismatch | bloquant clair | corriger pin / stop | continuer cycle | pin valide | éventuel |
| CONTEXT_STALE | digest obsolète | bloquant | refresh | exec | re-resolve | — |
| CKC_UNAVAILABLE | même synthetic absent | bloquant rare | stop / attendre package | inventer CKC | package update | — |
| CONTRADICTION_OPEN | C-* blocking | panneau + fil | clarifier | confirm contrat | resolve/gate | Morris si struct |
| INSUFFICIENT_EVIDENCE | seuil non atteint | questions | clarifier | décider struct | plus d’info | — |
| DECISION_REQUIRED | acte humain manquant | gate visible | décider/refuser | exec | HumanDecision | oui |
| CONFIRMATION_REQUIRED | N-level pending/expiré | modal | confirmer/annuler | mute | renew | selon N |
| CAPABILITY_MISSING | agent incapable | erreur métier | autre agent / réduire | forcer | — | — |
| AUTHORITY_DENIED | hors autorité | erreur | escalate | bypass | — | Morris |
| EXECUTION_FAILED | run fail | rapport | retry borné / replan | claim success | evidence fail | — |
| EXECUTION_TIMEOUT | timeout | rapport | retry/cancel | ignorer | — | — |
| EVIDENCE_INCOMPLETE | preuves manquantes | QA | compléter | completed claim | attach | — |
| STATE_CONFLICT | versions LPS conflict | stop | reconcile | overwrite silencieux | — | éventuel |
| REPLAN_REQUIRED | événement structurant | panneau | replan candidate | exec ancienne traj | F09 | si struct |

## 3. Cas d’usage (24) — fiche courte

Format : préconditions → déclencheur → étapes → résultat → LPS → décisions → erreurs → preuves → anti-claims.

1. **Intention claire** — new session → E1–E8 rapide → LPS draft → pas de Project auto.
2. **Intention ambiguë** — clarifications → pas de trajectoire validée.
3. **Match projet existant** — propose link · N2 confirm · LPS load pin doctrine.
4. **Projet nouveau** — N2 create · doctrine pin · LPS v1.
5. **CKC detailed** — opaque guidance · trace digest.
6. **CKC synthetic** — silencieux UI · status synthetic.
7. **CKC absent** — synthetic fallback ; si impossible `CKC_UNAVAILABLE`.
8. **DoctrinePackage indisponible** — `DOCTRINE_UNRESOLVED` stop · pas v2.6.
9. **Contradiction faible** — warning + réserve LPS.
10. **Contradiction structurante** — gate · pas contrat.
11. **Infos insuffisantes** — `INSUFFICIENT_EVIDENCE` · questions.
12. **Décision avec réserves** — HumanDecision + reserves persistées.
13. **Refus de décision** — recorded decline · trajectoire reste candidate.
14. **Modification décision** — supersede · LPS version++.
15. **Action N1** — confirm légère · contract · evidence.
16. **Action N2** — dialog effets · contract.
17. **Action N3** — modale+gate · contract · high evidence.
18. **Agent non autorisé** — `AUTHORITY_DENIED` / capability.
19. **Exécution échouée** — failed + debt/reserve · pas rollback magique.
20. **Reprise après échec** — nouvel attempt idempotent ou replan.
21. **Preuve incomplète** — `EVIDENCE_INCOMPLETE` · pas completed.
22. **Replanification** — F09 · candidate → décision.
23. **Clôture de cycle** — CycleInstance closed · Project **ouvert**.
24. **Poursuite projet** — next step · nouveau cycle proposé.

## 4. UX fonctionnelle (implications, pas visuel)

- Conversation dominante + panneau vivant (CC-D01/D03).
- Pas de stepper principal · pas multi-panneaux MVP.
- Gates/décisions/épistémologie visibles.
- Confirmations ciblées N1–N3.
- Erreurs métier + ID secondaire.
- Mobile : panneau sheet ; composer accessible.
- a11y : labels texte (pas couleur seule).
- Stop/reprise explicites.

## 5. Maturité

DOCUMENTED.

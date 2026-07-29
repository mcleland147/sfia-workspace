# 20 — HARD / T-A6 atomicity & bounded local persistence foundation lot

| Champ | Valeur |
|-------|--------|
| **Document** | `20-hard-ta6-atomicity-minimal-persistence-foundation-lot.md` |
| **Statut** | `EXECUTED LOCALLY — HARD REDUCED REMAINS OPEN — T-A6 FOUNDATION ADVANCED REMAINS INCOMPLETE` |
| **Date/heure/fuseau** | 2026-07-29 12:55:00 CEST (+0200) |
| **Cycle** | 6 — Architecture technique et implémentation (+ 5/7/9/12/13/15) |
| **Profil** | Critical · EVOL / QA / DOC / CAPA |
| **Gate Morris** | `GO FRAME AND EXECUTE CONSOLIDATED T-A7 HARD AND T-A6 FOUNDATION LOT — INCLUDE ATOMICITY AND MINIMAL PERSISTENCE DECISION — NO IAM DELIVERY OR CUTOVER` |
| **Branche** | `delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation` |
| **Base** | `origin/main` @ `1068ddb37dd8eb9e94c2fca9963fe32ad79a801f` (PR #290) |
| **Push / PR** | **aucun** (ce cycle) |

---

## 1. Objet du lot

Cadrer et exécuter en un seul cycle consolidé :

- qualification et réduction substantielle de HARD (sans fermeture) ;
- progression démontrée de T-A6 (sans COMPLETE) ;
- fondation d’atomicité Project↔Cycle plus réaliste que la simulation pure ;
- décision de persistance minimale, bornée et réversible ;
- code, tests, documentation et PR readiness locale unique.

---

## 2. Gate Morris

Consommé : gate consolidé ci-dessus.

Autorisé : lecture repo, branche locale depuis `origin/main`, comparaison/décision bornée de persistance, implémentation locale, tests, docs, 1–4 commits, PR readiness, review pack FULL, handoff L3.

Interdit : push projet, PR, merge, IAM, delivery, cutover, fermeture HARD, T-A6/Option A/T-A7 COMPLETE, RUN READY.

---

## 3. Branche / base

| Champ | Valeur |
|-------|--------|
| Base | `1068ddb37dd8eb9e94c2fca9963fe32ad79a801f` |
| Branche | `delivery/sfia-studio-t-a7-hard-ta6-persistence-foundation` |
| Upstream | **aucun** |
| Tree au démarrage | propre (untracked `.tmp-sfia-review/**` only) |

---

## 4. Sources Git

| Source | Chemin / référence |
|--------|-------------------|
| Pack T-A7 | `…/t-a7-technical-readiness-framing/01`–`19` (priorité 04, 06, 11, 14, 15, 19) |
| Runtime T-A7 | `app/lib/platform/t-a7/**` |
| D1 | `app/lib/d1/**` (sqlite, hold, F11) |
| Handoff parent | `sfia/review-handoff` · commit `72361936` · blob `79fdbfd4…` |
| Méthode | templates / routing / operating model (lecture seule) |

HARD/T-A6 **non inventés** depuis le prompt : définitions tirées des docs pack + hold reasons + lot 19.

---

## 5. Définition canonique HARD

| Item | Valeur |
|------|--------|
| Identifiant | Réserves **R-T-A3-1…4** (autorité Critical + atomicité durable) |
| Libellé | OPEN HARD — stop conditions SC-07 / TR-S-08 |
| Sources | docs `06`, `11`, `14`, `19` ; hold `HARD_OPEN` |
| Risque | autoriser delivery/cutover ou Critical sans autorité/atomicité prouvées |
| Entités | Project↔Cycle, Decision/LPS/Epistemic (lié), authority registry |
| Invariants | `deliveryReady=false` ; CI ≠ fermeture ; fail-closed hold |
| Rôle atomicité | R-T-A3-2 exige atomicité durable — simulation seule insuffisante |
| Rôle persistance | preuve locale utile ; **≠** product persistence SELECTED ; **≠** fermeture HARD |
| Relation B5/R1 | B5 stop-before-delivery ; R1 atomicité — HARD les surplombe |
| Hors lot | IAM, Critical ack public, drills non-prod autorisés, production |
| Anti-claims | HARD CLOSED ; delivery ready ; CI = closed |

---

## 6. Critères de réduction / fermeture HARD

**Réduction (ce lot) :**

- contrat INTERNAL_ONLY explicite (critères, preuves manquantes, actions) ;
- journal d’audit atomique local + coordinateur Project↔Cycle ;
- `productionRollbackProven=false` / `crossStoreDurable=false` honnêtes.

**Fermeture complète (non atteinte) :**

- Critères canoniques Git tous satisfaits ;
- aucune preuve hors local requise **ou** preuves fournies ;
- pas d’IAM/delivery/production résiduel ;
- gate Morris distinct de fermeture si exigé.

**Résultat :** `HARD REDUCED — REMAINS OPEN`

---

## 7. État canonique T-A6

| Item | Valeur |
|------|--------|
| Avant | OA D1–D5 in-memory ; ClaimEvaluator borné (lot 19) ; R-M01 OPEN |
| Après | fondation avancée + matrice capacités ; T6-C11/T6-C15 toujours MISSING |
| Max autorisé | `FOUNDATION ADVANCED — REMAINS INCOMPLETE` |
| COMPLETE interdit sans | critères Git explicites + T6-C11/C15 + gate Morris |

---

## 8. Matrice capacités T-A6

| Capacité | Contrat | État | Code | Tests | Réductible ici | Critère complétion |
|----------|---------|------|------|-------|----------------|--------------------|
| D1 Evidence | register/ingest | PRESENT | OA memory | existants | non | preuves + reserves |
| D2 ReviewBundle | lifecycle | PRESENT | OA | existants | non | — |
| D3 Claim eval | evaluate/confirm | PRESENT | OA + bounded | oui | partiel | anti-surclaim + R-M01 |
| D4 Maturity | propose/confirm | PRESENT | OA | existants | non | — |
| D5 NextGate | recommend RO | PRESENT | OA | existants | non | no auto-launch |
| R-M01 | governance evaluator | PARTIAL | boundedClaimEvaluator + foundation | oui | oui | R-M01 CLOSED |
| T6-C11 | reserves bounded | MISSING | — | — | non | reserves résolues |
| T6-C15 | Morris GO COMPLETE | MISSING | — | — | non | gate distinct |

ClaimEvaluator borné : refuse T_A6/T_A7/Option A/RUN/delivery/cutover SUPPORTED.

---

## 9. Options de persistance comparées

| Option | Techno | Présente | Atomicité | Rollback | Dette | Verdict |
|--------|--------|----------|-----------|----------|-------|---------|
| A | Adapter mémoire seul (`simulatedAtomicOperation`) | oui | sim | sim | faible | insuffisant seul pour preuve journal |
| B | **node:sqlite via D1 existant** | **oui** | BEGIN/COMMIT | revert table | faible | **SELECTED** |
| C | Fichier append-only ad hoc | non | faible | delete file | moyenne | rejeté (doublon vs D1) |
| D | better-sqlite3 / ORM | non | forte | migration | haute | **interdit** (nouvelle dépendance) |
| E | Cloud / SaaS | non | forte | infra | critique | **interdit** |

---

## 10. Décision de persistance

`SELECTED — EXISTING BOUNDED LOCAL PERSISTENCE`

Technologie : `node:sqlite` via runtime D1 déjà adopté.

Product persistence : **`NOT_SELECTED`**.

---

## 11. Justification

- Déjà dans le repo (pas de `package.json` / lockfile) ;
- local/dev/test only ; pas de réseau, secret, PII, IAM ;
- schéma `CREATE IF NOT EXISTS` réversible ;
- Git reste source de vérité méthodologique ;
- nécessaire pour journaliser l’atomicité au-delà de la pure RAM ;
- tests déterministes avec `D1_SQLITE_PATH` + `resetD1DbForTests`.

---

## 12. Alternatives rejetées

- Nouvelle dépendance npm / cloud / ORM ;
- Second store documentaire concurrent à Git ;
- Persistance produit SELECTED ;
- API HTTP / UI d’administration.

---

## 13. Architecture retenue

```
platform/t-a7/
  hardBlockerFoundation.ts          — contrat HARD
  tA6FoundationStatus.ts            — matrice T-A6
  boundedPersistenceDecision.ts     — décision (pas d’import d1)
  projectCycleAtomicCoordinator.ts  — UoW + port audit injecté
  hardTa6FoundationAggregation.ts   — vue consolidée INTERNAL_ONLY
  (+ lot 19: blocker*, simulated*, boundedClaim*)

d1/
  db.ts                             — table d1_atomic_audit
  boundedAtomicAudit.ts             — store sqlite (implémente le port)
```

Frontière : **platform n’importe pas d1** (audit injecté depuis tests/adapters).

---

## 14. Architecture non retenue

- Second moteur workflow / CQRS / event bus ;
- Microservice / ORM / cloud ;
- API publique Project/Cycle complète ;
- Fermeture automatique HARD via CI.

---

## 15. Modèle d’atomicité

Unité de travail Project↔Cycle :

1. prepare (version++)
2. apply_project
3. apply_cycle / verify (link)
4. commit **ou** rollback vers snapshot initial

`partialValidated` toujours `false`. Lien `linked=true` uniquement sur SUCCEEDED.

---

## 16. Stratégie transactionnelle

- Mémoire : rollback vers snapshot initial via `simulatedAtomicOperation` ;
- SQLite audit : `BEGIN IMMEDIATE` / `COMMIT` / `ROLLBACK` par append ;
- Pas de transaction cross-store product (explicitement `crossStoreDurable=false`).

---

## 17. Idempotence

Clé `idempotencyKey` : second appel retourne le résultat antérieur avec `conflict=true` (pas de double commit).

---

## 18. Rollback

- Succès de rollback → `ROLLED_BACK` ;
- Échec de rollback → `ROLLBACK_FAILED` honnête ;
- Double rollback idempotent ;
- `productionRollbackProven=false` toujours.

---

## 19. Concurrence

Détection via cache d’idempotency keys (process-local). Pas de preuve multi-processus production.

---

## 20. Fichiers créés / modifiés

| Fichier | Statut | Justification |
|---------|--------|---------------|
| `app/lib/platform/t-a7/hardBlockerFoundation.ts` | créé | contrat HARD |
| `app/lib/platform/t-a7/tA6FoundationStatus.ts` | créé | matrice T-A6 |
| `app/lib/platform/t-a7/boundedPersistenceDecision.ts` | créé | décision bornée |
| `app/lib/platform/t-a7/projectCycleAtomicCoordinator.ts` | créé | atomicité |
| `app/lib/platform/t-a7/hardTa6FoundationAggregation.ts` | créé | vue consolidée |
| `app/lib/d1/boundedAtomicAudit.ts` | créé | journal sqlite |
| `app/lib/d1/db.ts` | modifié | schéma audit |
| `app/lib/d1/index.ts` | modifié | exports |
| `app/lib/platform/t-a7/index.ts` | modifié | exports |
| `app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts` | créé | tests |
| `…/20-hard-ta6-….md` | créé | doc lot |
| `…/README.md` | modifié | index pack |

Aucun `package.json` / lockfile / method/** / .github/** / IAM / UI.

---

## 21. Tests

Fichier : `t-a7-hard-ta6-persistence-foundation.test.ts` (15) + régression lot 19 (19) + boundaries + D1 suites.

Couverture : HARD immutable/CI, T-A6 incomplete/anti-surclaim, audit CRUD, succès/échec/rollback/idempotence, agrégation, MethodMode/F11.

---

## 22. Résultats

| Commande | Résultat |
|----------|----------|
| `npm run typecheck` | OK |
| `npm run lint` | OK |
| `npm test -- __tests__/platform` | 69 passed |
| `npm test -- __tests__/d1` | 74 passed |
| `npm run build` | OK |
| `git diff --check` | OK |

---

## 23. Preuves HARD

Disponibles : contrat foundation ; audit local ; coordinateur ; anti-CI-closure.

Manquantes : Critical ack authentifié ; atomicité cross-store durable ; drill autorisé ; gate fermeture Morris.

---

## 24. Preuves T-A6

Disponibles : D1–D5 memory ; bounded evaluator ; matrice FOUNDATION_ADVANCED.

Manquantes : T6-C11 ; T6-C15 ; R-M01 CLOSED ; Option A complete.

---

## 25. Raisons maintien OPEN / incomplete

- HARD : R-T-A3-1/2 non clos ; IAM NOT_SELECTED ; pas de gate fermeture ;
- T-A6 : T6-C11/C15 MISSING ; R-M01 OPEN ;
- B5/R1/R-M01 : further reduced but OPEN.

---

## 26. Anti-claims

- HARD CLOSED / deliveryReady
- T-A6 COMPLETE / Option A COMPLETE / T-A7 COMPLETE
- RUN READY / cutover
- Product persistence SELECTED
- productionRollbackProven
- CI green = fermeture blocker

---

## 27. Dette créée

- Table `d1_atomic_audit` locale (faible, réversible) ;
- Cache idempotency process-local ;
- Port audit à câbler explicitement (pas d’import platform→d1).

---

## 28. Dette évitée

- Nouvelle dépendance npm ;
- Cloud / IAM / second truth store ;
- API produit Project/Cycle prématurée.

---

## 29. Risques résiduels

- Confusion « bounded local persistence » vs product SELECTED → documenté ;
- Surclaim HARD REDUCED = CLOSED → tests + anti-claims ;
- Atomicité locale ≠ production.

---

## 30. Rollback du lot

1. Revert commits de la branche ;
2. `DROP TABLE IF EXISTS d1_atomic_audit` (ou revert `db.ts`) ;
3. Aucune migration irréversible ; aucun secret ; aucun remote state.

---

## 31. PR readiness

`READY FOR MORRIS PUSH AND PR DECISION` (après commits locaux + pack) — **aucun push/PR dans ce cycle**.

---

## 32. Gate suivant candidat

`GO PUSH AND OPEN PR — T-A7 HARD T-A6 ATOMICITY AND BOUNDED PERSISTENCE FOUNDATION — NO MERGE IAM DELIVERY OR CUTOVER`

---

## 33. Verdict

`T-A7 HARD AND T-A6 FOUNDATION LOT COMPLETE — HARD AND T-A6 SUBSTANTIALLY ADVANCED BUT REMAIN OPEN — BOUNDED LOCAL PERSISTENCE DECISION RECORDED — ATOMICITY AND ROLLBACK EVIDENCE ADDED — B5 R1 R-M01 REMAIN OPEN — IAM NOT SELECTED — NO DELIVERY OR CUTOVER — LOCAL COMMITS READY FOR MORRIS PUSH AND PR DECISION`

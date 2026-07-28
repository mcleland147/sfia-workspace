# 14 — F11/F13 dependencies & runtime boundaries

| Champ | Valeur |
|-------|--------|
| **Document** | `14-f11-f13-dependencies-and-runtime-boundaries.md` |
| **Date/heure/fuseau** | 2026-07-28 22:45:18 CEST (+0200) |
| **Gate N3** | DECIDED — cadrage only |
| **IAM / Persistence** | **NOT SELECTED** (préservés) |

---

## 1. Cartographie composants (existant)

```
[Git / packs docs] ──canonique──► (humain / CI)
        ▲
        │ provenance refs (seed)
        │
[boundedHistoryRead F13.4] ──summary──► [operationalReadiness F11.2]
        │                                    │
        │                                    ├── readMethodModeHold
        │                                    ├── decideMethodModeTransition
        │                                    └── optional D1Project input
        ▼
   (no durable store)

[selectMethodMode / commands] ──assert hold──► CONFLICT if ACTIVE
[methodModeHold.test-only] ──tests only──► store slot (non-barrel)
```

Ownership :

| Composant | Owner logique | Module |
|-----------|---------------|--------|
| Hold | D1 gouvernance transitions | `lib/d1/methodModeHold*` |
| F11.2 readiness | D1 observation | `lib/d1/operationalReadiness.ts` |
| F13.4 history | platform t-a7 | `lib/platform/t-a7/boundedHistoryRead.ts` |
| Canon paths | platform sfia-context | `canonicalPaths` (lecture) |

---

## 2. Frontières Git / runtime

| Règle | Statut |
|-------|--------|
| Git = vérité historique | **obligatoire** |
| Runtime view = projection | **obligatoire** |
| Pas de write historique | **obligatoire** |
| Seed documentary ≠ full Git walk | **état actuel** |
| Cache / index durable | **interdit sans GO persistence** |
| Concurrent writers | **hors scope** |

---

## 3. Frontières IAM / identité

| Couche | État | Interdit N3 |
|--------|------|-------------|
| AuthN | non présent sur F11/F13 | sélection produit IAM |
| AuthZ | hold = gouvernance transition, pas ACL data | confondre hold et IAM |
| Acteur | non typé sur query | inventer roles |
| Path-policy | distincte | fusionner path-policy↔IAM |
| Fail-closed | hold ACTIVE par défaut | backdoor env pour désactiver hold |

Exposition future HTTP ⇒ **GO IAM** distinct avant claim multi-acteur.

---

## 4. Frontières persistance

| Élément | Autorisé maintenant | Interdit sans GO |
|---------|---------------------|------------------|
| Lecture Git/packs | oui (conceptuel) | — |
| Seed in-memory | oui (lot 1) | — |
| SQLite/DB history store | non | **oui interdit** |
| Migration schéma | non | **oui interdit** |
| Cache process local non durable | candidat futur (doc) | durable/shared store |

---

## 5. API interne / HTTP / UI

| Surface | État | Décision requise |
|---------|------|------------------|
| API interne TS | **existante** (fonctions) | formaliser version contrat |
| Barrel `@/lib/d1` | export F11 + hold produit | ne pas exporter test-only |
| HTTP route | absente | GO surface access |
| UI admin | absente (F11.2) | F11.3 non retenue |
| Server actions write | hors F11/F13 | gate write distinct |

---

## 6. Flux de lecture (cible documentaire)

1. Consommateur autorisé (à décider) appelle readiness **read**.
2. F11 lit hold + (optionnel) projet + F13 summary.
3. F13 lit provider borné ; Git reste référence.
4. Snapshot frozen renvoyé ; audit éventuel (futur).
5. Aucun write ; erreurs fail-closed.

Source de vérité par donnée :

| Donnée | Source |
|--------|--------|
| Historique canonique | Git |
| Projection items | provider F13 (dérivé) |
| Hold | évaluation gouvernance (défaut code) |
| Projet mode/state | D1 store existant (si fourni) — **pas** créé par F11 |

Données temporaires autorisées : copies frozen, timestamps d’évaluation.
Interdites : files d’attente durables, outbox history, dual-write.

---

## 7. Observabilité / audit / erreurs

| Besoin | Actuel | Cible cadrée |
|--------|--------|--------------|
| Logs hold block/allow | oui (codes) | conserver borné |
| Logs readiness query | non | event optionnel futur |
| Logs history read | non | event optionnel futur |
| Erreurs | RangeError limit ; D1 CONFLICT hold | catalogue codes readiness/history |
| Métriques | non | compteurs lectures (futur) sans PII |

---

## 8. Dépendances

### Obligatoires pour complétion documentaire N3 (ce pack)

- décisions F11.2 / F13.4 déjà adoptées ;
- lot 1 sur main ;
- hold ACTIVE governance ;
- Git canonique.

### Différables

- IAM product ;
- persistence ;
- HTTP ;
- live Git walk ;
- OPS1 isolation runtime evidence (N2) ;
- P08/P09 replacement (N1) ;
- rollback drills (N4).

### Anti-couplages

- F11 ↛ OPS1 imports ;
- F13 ↛ D1 writes ;
- F13 ↛ `method/**` content dump ;
- readiness ↛ auto-clear blockers ;
- test-only ↛ barrels runtime.

---

## 9. Risques de dette

| Risque | Mitigation documentaire |
|--------|-------------------------|
| Traiter lot 1 comme API finale | critères complete §12/§13 |
| Ajouter HTTP sans IAM | stop condition |
| Index durable « pour perf » | persistence NOT SELECTED |
| Seed manuel diverge de Git | exiger preuve provenance |
| F11/F13 circular writes | F11→F13 read only (déjà) |

---

## 10. Matrice capacité (synthèse)

| Capacité | Existant | Gap | Dépendance | Blocker | Preuve | Statut | Décision |
|----------|----------|-----|------------|---------|--------|--------|----------|
| F11 query RO | oui | HTTP/audit/health | hold, F13 | IAM si HTTP | tests + module | PARTIAL | surface access |
| F13 page RO | oui | politique/pagination/audit | Git | persistence si store | tests + module | PARTIAL | read strategy |
| Hold | oui | — | gouvernance | B5/HARD open | tests | PARTIAL control | ne pas fermer |
| IAM | non | sélection | — | NOT SELECTED | — | MISSING | futur GO |
| Persistence | non | sélection | — | NOT SELECTED | — | MISSING | futur GO |

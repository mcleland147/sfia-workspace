# 02 — Flux fonctionnel de bout en bout (Option A)

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate consommé** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Décisions** | ARB-V3-01…06 |
| **Doctrine** | SFIA Studio v3 exclusive (VALIDATED framing 30–37) |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré · Pas v2.6 removed |
| **Code / schemas / SQL** | **Interdits** dans ce cycle |
| **Document** | `02-end-to-end-functional-flow.md` |

## Chaîne canonique

```
1 Intention
2 DoctrinePackage resolve (fail-closed)
3 Qualification cycle/profil/blocs (proposée)
4 CKC resolve (detailed|synthetic|absent→synthetic silencieux)
5 Clarification conversationnelle
6 Living Project State update
7 Trajectoire candidate
8 Options + recommandation (ou abstention)
9 HumanDecision
10 Confirmation N1–N3
11 ExecutionContract (natif)
12 Exécution agent (adaptateur MD éventuel)
13 Preuves / ReviewBundle
14 Mise à jour LPS + replanif éventuelle
```

Aucune étape n’implique de charger `method/sfia-fast-track/**` ni le template Cursor comme doctrine.

## Étape 1 — Intention

**Entrées :** message libre · pièces/sources · hint projet existant/nouveau.
**Sorties :** IntentionObserved · Hypothesis[] · Ambiguity[] · confidence · clarificationNeeded.
**Règles :** pas de création Project complète automatique · phrase ≠ décision.

## Étape 2 — DoctrinePackage

**Entrées :** pin projet ou défaut Studio v3.
**Sorties :** packageId · version · digest · allowlist sources · failurePolicy.
**Si absent/mismatch/obsolète :** `DOCTRINE_UNRESOLVED` / `CONTEXT_STALE` — **stop** · **aucun** fallback v2.6.

## Étape 3 — Qualification

**Sorties :** CycleType candidat(s) · profil · lenses · risques · maturité preuve.
**Statuts :** `proposed` → `human_ack` (si requis) → `active_for_cycle`.
Requifiable à tout moment avant ExecutionContract.
Cycle ≠ sélection menu obligatoire.

## Étape 4 — CKC

**Résultats :** `detailed` | `synthetic` | `unavailable→synthetic silencieux` (CC-D12).
Trace interne : path/version/digest/statut.
UI : **jamais** checklist 25 sections / dimensions brutes.
Autorité exécution : **aucune**.

## Étape 5 — Clarification

Questions adaptatives groupées · ordre risque-first · réponses partielles OK · contradictions → Contradiction Manager.
Seuil : assez d’info pour LPS + trajectoire candidate **ou** stop `INSUFFICIENT_EVIDENCE` / clarification continue.

## Étape 6 — LPS

Création/màj versionnée du Living Project State (voir `04`).
Panneau vivant = projection **état utile** (CC-D03).

## Étape 7 — Trajectoire candidate

ProjectTrajectory `status=candidate` jusqu’à HumanDecision.
Jamais auto-exécutée.

## Étape 8 — Options / recommandation

Épistémologie stricte (`06`). Recommandation facultative si preuves insuffisantes → abstention explicite.

## Étape 9 — HumanDecision

Acte explicite · portée · réserves · réversibilité · effets LPS.
Amendement / remplacement versionnés.

## Étape 10 — Confirmation N1–N3

Selon impact (voir `06`). Pas de confirmation implicite via CTA générique (CC-D05/D06).

## Étape 11 — ExecutionContract

Contrat natif structuré (voir `07`). Export Markdown Cursor = **adaptateur** optionnel post-contrat.

## Étape 12 — Exécution

Capability + authority checks · prepare · run · timeout · retry borné · cancel · fail · escalate.
Pas d’archi technique ici.

## Étape 13 — Preuves

Evidence liés contrat+décision · ReviewBundle · fraîcheur · complétude (`EVIDENCE_INCOMPLETE` sinon).

## Étape 14 — Mise à jour

LPS · CycleInstance · dette · trajectoire · contradictions · next step.
**Merge/preuves ≠ fin Project.**

## Transitions clés (anti-claims)

| De | Vers | Condition |
|----|------|-----------|
| Recommendation | HumanDecision | Acte humain explicite |
| Trajectory candidate | validated | HumanDecision |
| Contract draft | confirmed | Confirmation requise |
| Contract confirmed | executing | Capability+authority OK |
| executing | completed/failed | Evidence |

# 01 — Principes UX et architecture d’information

| Champ | Valeur |
|-------|--------|
| **Statut** | UX/UI **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/ux-ui` |
| **Gate consommé** | `GO UX/UI — SFIA STUDIO V3-NATIVE — OPTION A` |
| **FA capitalisée** | FA-OA-01…05 **VALIDATED BY MORRIS** |
| **FD capitalisées** | FD-OA-01…06 |
| **Décisions UX CC** | CC-D01, CC-D03, CC-D05, CC-D06, CC-D12, CC-D13 |
| **Figma fileKey** | `8xR5zSTfGtEVZSr6KK8Gww` |
| **Page Option A** | `SFIA Studio v3-native — Option A` (`11:2`) |
| **Anti-claims** | Pas UX VALIDATED · Pas DESIGN FINAL · Pas READY FOR MODELED · Pas READY FOR DELIVERY · Pas RUNTIME MATCHES FIGMA · Pas OPTION A IMPLEMENTED |
| **Code / schemas / SQL / runtime** | **Interdits** |
| **Document** | `01-ux-principles-and-information-architecture.md` |

## 1. Principes fondamentaux

| Principe | Implication UX |
|----------|----------------|
| Conversation-first | Entrée = fil + composer, pas cockpit multi-panneaux |
| Project-centric | Identité Project en en-tête ; Cycle = contexte du Project |
| Progressive | Clarification adaptative ; pas de stepper principal |
| Explicable | Provenance accessible, non envahissante |
| Gouvernée | HumanDecision + N1–N3 avant mutations |
| Accessible | Labels, focus, contraste AA (contrat) |
| Responsive | 1440 / 1280 / 1024 sheet / 390 |
| Fail-closed | Erreurs bloquent mutation/exécution |
| Orientée décision | Recommandation ≠ Décision |

## 2. Interdits UX

- formulaire CKC dimensions ;
- badge MethodMode / v2.6 ;
- confusion Project / Cycle ;
- stepper comme navigation principale ;
- cockpit multi-panneaux comme entrée ;
- Markdown Cursor présenté comme contrat natif ;
- OPS1 comme surface Option A (hors audit/historique) ;
- décision implicite via phrase libre non matérialisée.

## 3. Architecture d’information — zones

### Zone A — En-tête projet

Affiche sobrement : identité Project · état global · cycle actif · doctrinePackageRef utile · sync · historique.
Masque : digests techniques, IDs internes, dumps CKC.

### Zone B — Conversation dominante

Messages · questions adaptatives · propositions · décisions · erreurs · actions contextualisées · composer libre.
Composer disponible hors modale N3 stricte.

### Zone C — Panneau vivant LPS

Projection du domaine C (FA-OA-01), jamais source d’autorité.
Desktop sticky 360–400 px @1440 · ~320 @1280 · sheet ≤1024.

### Zone D — Actions et confirmations

Action proposée · portée · impacts · risques · niveau N · annulation · expiration · preuve attendue.

### Zone E — Détails secondaires

Provenance · DoctrinePackage · CKC resolution (opaque) · historique · Evidence · ReviewBundle · dette · contradictions.

## 4. Mapping domaines A–H

| Domaine | Surface UX principale |
|---------|----------------------|
| A Conversation & Intent | Zone B |
| B Doctrine & Knowledge | Zone E + banners Zone B |
| C Project State | Zone A + Zone C |
| D Cycle & Trajectory | Zone C + cartes fil |
| E Decision & Confirmation | Zone D + DecisionCard |
| F Execution Governance | ExecutionContractCard |
| G Execution Adapter | lien secondaire technique |
| H Evidence & Review | EvidenceCard / ReviewBundleCard |

## 5. Cohérence CC-D*

| CC | Capitalisation UX Option A |
|----|----------------------------|
| CC-D01 | Conversation-first + panneau |
| CC-D03 | Project ≠ Cycle |
| CC-D05 | Epistemic badges textuels |
| CC-D06 | Confirmations N1–N3 |
| CC-D12 | Fail-closed erreurs |
| CC-D13 | Pas de formulaire CKC |

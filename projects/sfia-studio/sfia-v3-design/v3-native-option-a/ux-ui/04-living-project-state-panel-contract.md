# 04 — Contrat panneau Living Project State

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
| **Document** | `04-living-project-state-panel-contract.md` |
| **FA-OA-01** | LPS = agrégat domaine C ; panneau = **projection** |

## 1. Rôle

Le panneau vivant affiche l’état utile du Project. Il ne mute pas le LPS. Mutations via décisions + confirmations + gouvernance F.

## 2. Hiérarchie d’affichage

1. Objectif et état
2. Prochaine décision / action
3. Cycle et trajectoire
4. Réserves / risques
5. Décisions
6. Preuves / maturité
7. Détails (Zone E)

## 3. Contenu autorisé / interdit

| Autorisé | Interdit |
|----------|----------|
| Objectif, contexte, périmètre | Formulaire CKC |
| Cycle actif, trajectoire résumé | MethodMode / v2.6 |
| Décisions, réserves, risques | Dump JSON technique |
| Next step, maturité, preuves | OPS1 controls |
| Sync stale/conflict | Édition inline LPS |

## 4. États du panneau

| État | Signal UX |
|------|-----------|
| collapsed | Chevron / résumé next step |
| standard | Layout OA-02 |
| expanded detail | Drawer Zone E |
| stale | Badge Sync stale |
| conflict | STATE_CONFLICT banner |
| updating | Skeleton / updating |
| unavailable | Message + reprise |
| mobile sheet | OA-11 pattern |

## 5. Largeurs

| Viewport | Largeur panneau |
|----------|-----------------|
| 1440 | 360–400 px |
| 1280 | ~320 px |
| ≤1024 | sheet / drawer full-width overlay |

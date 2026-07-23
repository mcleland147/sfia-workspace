# 07 — Responsive, accessibilité et états d’erreur

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
| **Document** | `07-responsive-accessibility-and-error-states.md` |

## 1. Responsive — frames

| Frame | node-id | Dimensions |
|-------|---------|------------|
| Desktop primary | OA-01…10 | 1440×1024 |
| Desktop compact | OA-12 `11:272` | 1280×800 |
| Mobile | OA-11 `11:260` | 390×844 |
| Tablette | sheet LPS (contrat) | 1024×768 comportement |

≤1024 : LPS en sheet ; conversation reste primaire ; N3 full-screen sheet.

## 2. Accessibilité (contrat design)

| Critère | Exigence |
|---------|----------|
| Contraste | WCAG AA |
| Clavier | Tab order zones A→B→C→D |
| Focus | Visible toujours |
| Labels | Boutons / inputs / badges |
| Headings / landmarks | Structure sémantique |
| Couleur | + label texte |
| Touch | ≥44×44 |
| Motion | Respect reduced-motion |
| Modales | Focus trap N3 |
| Streaming | Annonces live region |
| Zoom | 200 % lisible (preuve runtime réservée) |

## 3. Catalogue erreurs fail-closed

| Code | Message métier (candidat) | Action possible | Interdit |
|------|---------------------------|-----------------|----------|
| DOCTRINE_UNRESOLVED | Doctrine introuvable ou invalide | Reprendre / résoudre package | Exécuter |
| CONTEXT_STALE | Contexte obsolète | Rafraîchir | Muter |
| CKC_UNAVAILABLE | Contexte méthode indisponible | Retry / mode limité | Inventer detailed |
| CONTRADICTION_OPEN | Contradiction ouverte | Clarifier | Décider comme fait |
| INSUFFICIENT_EVIDENCE | Preuves insuffisantes | Collecter | Exécuter |
| DECISION_REQUIRED | Décision humaine requise | Décider / refuser | Contourner |
| CONFIRMATION_REQUIRED | Confirmation N requise | Confirmer / annuler | Skip |
| CAPABILITY_MISSING | Capacité agent absente | Changer agent / scope | Forcer |
| AUTHORITY_DENIED | Autorité insuffisante | Escalader | Forcer |
| EXECUTION_FAILED | Exécution échouée | Reprendre si autorisé | Ignorer |
| EXECUTION_TIMEOUT | Délai dépassé | Statut / retry policy | Optimistic success |
| EVIDENCE_INCOMPLETE | Preuves incomplètes | Compléter | Clore bundle |
| STATE_CONFLICT | Conflit d’état | Résoudre | Overwrite silencieux |
| REPLAN_REQUIRED | Replanification requise | Replanifier | Continuer trajectoire |

Composer : limité aux actions de reprise sur erreur bloquante.
Panneau : reflète gate/erreur.

## 4. Réserves a11y runtime

Validation contraste/lecteur d’écran runtime **hors** ce cycle.

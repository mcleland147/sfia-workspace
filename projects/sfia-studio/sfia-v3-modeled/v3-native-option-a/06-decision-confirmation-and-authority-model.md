# 06 — Décision, confirmation et autorité

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion** | `0.1.0-oa` |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR AT/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `06-decision-confirmation-and-authority-model.md` |

## HumanDecision

Statuses : proposed · required · accepted · refused · amended · superseded · revoked.
Chat ≠ décision. Actor + authority obligatoires. Structurant sans Morris = invalide. Historique conservé.

## Confirmation N1–N3

Statuses : requested · granted · refused · expired · cancelled · consumed · superseded.
Invariants : expirée non consommable · N2 pour Project actif · N3 structurant/irréversible · Confirmation ≠ Decision · double consommation interdite · scope confirmé = scope exécuté · idempotencyKey.

## Autorité (FA-OA-05)

Matrice conceptuelle : décision · capacité · autorité · confirmation · mutation · exécution · maturité.

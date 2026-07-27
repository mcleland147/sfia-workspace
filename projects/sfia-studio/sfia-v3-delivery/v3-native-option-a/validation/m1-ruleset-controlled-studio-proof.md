# Artefact temporaire de preuve M1 — SFIA Studio (échec contrôlé)

| Champ | Valeur |
|---|---|
| Date/heure/fuseau | 2026-07-27 10:02:00 CEST (+0200) |
| Gate Morris consommé | `GO VERIFY OPTION A M1 RULESET WITH CONTROLLED PRS — SFIA STUDIO V3-NATIVE` |
| Base SHA | `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513` |
| Branche | `qa/sfia-studio-m1-controlled-studio-proof` |
| Chemin | `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/validation/m1-ruleset-controlled-studio-proof.md` |

## Objectif

Démontrer que le ruleset M1 bloque une PR Studio lorsque `SFIA Studio Required Gate` échoue,
puis que la même PR peut se rétablir après correction minimale.

## Anti-claims

- aucune intention de merge ;
- correction prévue sur la même branche après capture de l'échec ;
- bypass B2 non utilisé ;
- Option A non COMPLETE ;
- T-A7 non ouvert ;
- fermeture et nettoyage sous gates séparés.

## Erreur volontaire déterministe

CONTROLLED_WHITESPACE_ERROR_LINE: intentional trailing space follows.

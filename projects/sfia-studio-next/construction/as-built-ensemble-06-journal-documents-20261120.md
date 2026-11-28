# As-built — Ensemble 06 / Journal V4 + Bibliothèque Documents

| Métadonnée | Valeur |
|---|---|
| Date | 20/11/2026 |
| Branche candidate | `sfia/next-ensemble06-journal-docs-recette-20261120` |
| Code commit recetté | `7a13d7deec488bf62881eec11b5658c45c02c5b0` |
| Tree code | `2bb984969be6597b76baddb7a3c724ef8dcf22fa` |
| Tree `web/` | `e61a98f4ba84572386051acd54ba94d4b1aa6c48` |
| Tip local pré-consolidation docs | `aa568cfab37bec1922b2a6886c621dc7d9d37088` |
| RECETTE URL | `http://127.0.0.1:3200` |
| BUILD | `t4pjnrn3wGVHZEjhiw6yH` |
| DB | `sfia_next_recette_ml4` @:5434 · migration **014** préexistante |
| Versioning | **NO RELEASE** / STABLE NOT AVAILABLE |
| UAT | `validation-qualite/ensemble-06-recette-utilisateur-20261120.md` |

## Comportement réellement implémenté

1. **Journal V4** — Sujets et Décisions ; lecture 40/60 ; agrandissement ; deep-link Journal→Travail (message / révision citée) ; projection D6 sans mutation d'autorité.
2. **Bibliothèque Documents** — sélection ≠ ouverture ; lecture seule ; historique Courante/Historique ; comparaison ; ouverture dans Travail 50/50.
3. **Nora / D4** — un seul fil ; focus documentaire ; proposition scellée (`pdoc`/`hauth`) ; confirmation historique explicite ; conservation explicite ; pas de D4 REVISE silencieux ; reload candidat.
4. **Invariants** — pas d'édition manuelle Projet Documents ; pas de publication Git/D9 implicite ; D6 reste autorité des décisions ; isolation pilote/projet.

## Non-couvert / réserves

DOC-TECH-15 NOT RUN · DOC-TECH-16 PARTIAL · Journal R-01…R-11 · Sas KNOWN GAP · F2/responsive non exhaustifs · LIVE/REAL globale NOT PROVEN.

## Références

- As-built Journal historique : `as-built-ensemble-06-journal-20261119.md` (ne pas réécrire).
- Handoff RECETTE : `sfia/review-handoff@3bc3af40` blob `3724604c…`.

## 2026-11-28 — cycle documentaire reproductible (lot 1, DEV local)

Section factuelle du candidat de finalisation. Elle ne remplace pas les preuves historiques ci-dessus. Base `0ae9e1f7aaee3658eb3e9a135523e83a72631b31`. Pas de migration. RECETTE non touchée.

1. Après une conservation `AVAILABLE` qui renvoie l'identifiant de révision, le focus de travail aligne la source et la tête observée sur cette révision, et retire le candidat ainsi que l'autorisation historique. Une sauvegarde sans identifiant, un autre document, ou un statut autre que `AVAILABLE` ne rebasent pas le focus.
2. La visionneuse d'une proposition affiche le corps du candidat, sans identifiant de révision durable, et invalide une lecture D4 encore en vol. Si le corps manque, l'ancienne version n'est pas affichée à la place. Une proposition n'est reconnue que si l'identifiant du candidat, le document et le corps affiché correspondent. Un texte identique porté par une révision durable reste une révision.
3. Le bandeau « version plus récente » ne s'appuie plus sur le seul mode `exact`. Une référence exacte qui est la tête D4 est courante. Une tête inconnue est « non vérifiée ». Une autre version consultée pendant qu'une proposition existe reste distincte, et la proposition peut être réaffichée.
4. Un résultat documentaire tardif ne met à jour que le document encore sélectionné par ce tour. Il ne remplace pas le focus ou la visionneuse d'un autre document, et ne rouvre pas une visionneuse fermée par le Pilote. Les messages, le pilotage et les autres effets du tour restent appliqués. Une restauration de candidat abandonne si le projet, le document, le candidat ou la génération de visionneuse ont changé. Une conservation dont l'identifiant de révision manque, ou dont l'accusé est perdu, ne choisit pas une tête.
5. Une vraie base historique continue d'exiger la confirmation serveur. `BASE_STALE`, le conflit de tête et l'idempotence de conservation ne sont pas assouplis.
6. Le titre métier n'est pas réécrit, et Equipéo n'est pas renommé. Une proposition déjà consommée n'a pas de nouvel état durable : le libellé générique « propositions expirées » des choix non actionnables reste hors de ce lot.
7. Complément du 28 novembre, après le candidat `30d59851`. Une restauration de candidat en erreur ou en exception ne modifie la proposition, le focus et le statut que si elle vise encore le même projet, le même document et le même candidat. Une conservation sans numéro de révision conserve l'identifiant écrit et laisse le numéro inconnu. Une résolution de tête arrivée après une autre sélection, un autre projet ou une fermeture ne remplace pas le contexte le plus récent et n'envoie pas la demande de confirmation historique.

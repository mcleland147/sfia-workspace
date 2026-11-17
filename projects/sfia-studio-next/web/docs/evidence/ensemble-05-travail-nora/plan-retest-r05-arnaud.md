# Plan de retest Ensemble 05 — destiné à Arnaud

**Produit :** SFIA Studio Next — Travail avec Nora  
**Campagne :** Retest post-correctif R05 (reprise cognitive UNKNOWN)  
**Autorité de validation :** Morris  
**Exécutant retest :** Arnaud (si distinct) / Morris  
**Date du plan :** 2026-11-17

## Identité runtime (à confirmer sur la machine hôte)

| Champ | Valeur attendue après déploiement |
|---|---|
| URL locale | `http://127.0.0.1:3200` |
| Accès | Uniquement sur la machine qui héberge RECETTE — **pas** accessible depuis un autre ordinateur sans tunnel (aucun tunnel autorisé ici) |
| SOURCE_SHA | *(renseigner après cutover — tip R05 recovery)* |
| BUILD_ID | *(renseigner après cutover)* |
| Lane | RECETTE |
| Fixture Nora forcée | NON (`STUDIO_FORCE_NORA_FIXTURE` unset) |
| STABLE | NOT AVAILABLE |

Si Arnaud n’a pas accès physique/écran partagé à la machine hôte, transmettre ce plan à Morris pour exécution ou partage d’écran — ne pas inventer d’URL publique.

## Prérequis d’accès

1. Compte Pilote local autorisé sur RECETTE.
2. Projet **Intervencia** (ou projet de campagne E05) accessible.
3. Surface **Travail avec Nora**.
4. Aucune migration / purge demandée.
5. Pour le test 4 (nouvelle génération LIVE) : **GO REAL distinct** Morris — Cursor ne l’exécute pas.

## Réserves reportées (ne pas les « fermer » par ce retest)

- R01–R02 : PASS visuel antérieur.
- R03 : PASS avec réserve de richesse UX.
- R04 : lisibilité des diagrammes / relations insuffisante — **non corrigée** par R05.
- R05 : incident fournisseur + boucle de reprise — objet de ce retest pour la **reprise** ; l’exception fournisseur n’est pas garantie corrigée.
- R06–R08 : non réceptionnés.
- Option A D3 `strict:false` conservée.

## Séquence de retest

Pour chaque ligne : résultat `PASS` / `PASS AVEC RÉSERVE` / `FAIL` / `BLOQUÉ` / `NON TESTÉ`.

| # | Test | Instructions | Attendu | Preuves | Résultat |
|---|---|---|---|---|---|
| 1 | Relecture anciens R05 UNKNOWN | Ouvrir Intervencia → Travail. Localiser les messages assistant UNKNOWN (placeholders « Nora LIVE UNKNOWN… »). Ne pas cliquer d’effet métier. | Historique conservé ; aucun résultat fictif inventé ; pas de disparition des tours. | Capture fil + note IDs visibles | |
| 2 | Sortie de reprise cognitive | Si bannière « Vérifier et reprendre » : cliquer **une fois**. Sinon recharger la page (hydrate). Préférer données contrôlées ; **ne pas** provoquer volontairement un incident fournisseur. | Bannière disparaît si tour cognitif UNKNOWN sans effet métier ; **pas** de nouvel appel OpenAI induit ; message « non aboutie » / formulation nouvelle possible. | Capture avant/après ; horodatage | |
| 3 | Conservation du brouillon | Saisir un brouillon libre avant reprise / navigation / refresh. | Brouillon intact après reprise, nav Documents↔Travail, refresh. | Capture composer | |
| 4 | Nouvelle demande composite R05 | **Uniquement avec GO REAL Morris.** Reformuler la demande composite portail (600 collab., 6 sites, B/C…). | Réponse exploitable **ou** échec honnête sans boucle de réconciliation. | Capture réponse / statut | |
| 5 | Persistense après refresh | Si test 4 a produit COMPLETE : refresh + retour projet. | Composition / texte persistés. | Capture post-refresh | |
| 6 | Non-régression R01–R03 | Demandes simples / analytiques / comparaison légères (LIVE seulement si GO). | Restitutions cohérentes. | Notes courtes | |
| 7 | Réserve R04 | Observer un diagramme de relations si présent. | Confirmer réserve de lisibilité **sans** présumer correction. | Capture | |
| 8 | R06–R08 | Selon protocole E05 si 1–5 OK. | Suivre protocole ; ne pas clôturer E05. | Checklist E05 | |

## Conditions d’arrêt

- FAIL sur test 2 (boucle reprise toujours présente).
- Disparition / corruption d’historique R05.
- Effet métier déclenché sans intention.
- Indisponibilité RECETTE / identité SHA/BUILD incohérente.

## Remontée d’anomalies

1. Noter date/heure UTC, URL, SOURCE_SHA/BUILD_ID affichés ou fournis.
2. Captures + texte d’erreur UI (sans coller de secrets).
3. Remonter à Morris (autorité) ; Arnaud ne clôture pas E05 ni Gate C.

## Gate de décision Morris

- Retest PASS → poursuivre UAT E05 / éventuel GO REAL pour test 4.
- PASS AVEC RÉSERVE → documenter ; R04 reste ouverte.
- FAIL reprise → nouveau diagnostic / correctif.
- E05 / Gate C : **non fermés** par ce plan.

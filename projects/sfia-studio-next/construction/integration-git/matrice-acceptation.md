# R5 ML4 — Matrice de couverture et de preuves candidate

**Statut :** MAPPING UX VALIDATED SPEC / 22 TESTS NOT RUN / NO COVERAGE VERIFIED  
**Base Git :** `main@84bf3496a459bae9c3f9e0ac7acce4b57a595bc5` ; qualification v0.2 `docs/next-ml4-git-qualification-20261107@3bb9224`.  
**Figma ML4 VALIDATED SPEC Morris :** 18 écrans 218–235, INDEX 388:425 et [traçabilité native](../../ux-ui/integration-git-ux-ml4.md) ; aucun snapshot PNG immuable sur Git ni comportement navigateur prouvé.

## 1. Principe

Ce fichier est une **matrice de recette ciblée** du macro-lot, pas un nouveau corpus de 41 règles ou de 36 scénarios. Les `RG-GIT-001..041` / `PF-GIT-01..36` existants restent propriétaires de leurs définitions dans la spécification D9, et la qualification v0.2 contient leur requalification ligne à ligne. Les candidats `N-01..N-14` concernent production/publication ; `N-15..N-27` les intégrations ; **aucun identifiant N n'est encore normatif**. Ne pas créer un `PF-GIT-*` redondant par ligne de test avant la revue de cohérence R2.

## 2. Recette d'acceptation discriminante

| Test candidat | Parcours / résultat recherché | Traçabilité existante | R4 QA / UX | Niveau de preuve ciblé | État |
|---|---|---|---|---|---|
| `ML4-AT-01` | Projet Studio et Nora utilisables sans repo ni App | R1 E2E07 ; RG-GIT-001/040 ; PF-GIT-01/02 ; N-15 |D-01/D-02 ; Figma 171/70 ; **Figma validé 218/70/171** | navigateur RECETTE | NOT RUN |
| `ML4-AT-02` | GitHub OAuth ne donne aucun accès privé repo | R1 §2.23 ; D1 RG-ACC-003 ; RG-GIT-008/009 |D-02/D-05 ; Figma 176/178 ; **Figma validé 220/176/178** | API sécurité + REAL accès | NOT RUN |
| `ML4-AT-03` | Paramètres → Intégrations GitHub et autorisation utilisateur/installation | N-16/17/18 ; D1/D9 |Nouvelle Figma A/B/E ; **Figma validé 218–220/224** | navigateur + fournisseur réel | NOT RUN |
| `ML4-AT-04` | Ajout ultérieur d'un dépôt « à la carte » | RG-GIT-002/006/007/010 ; PF-GIT-03/05 ; N-20 |D-03 ; Figma 172/173 + B ; **Figma validé 219/221/226** | REAL permissions + navigateur | NOT RUN |
| `ML4-AT-05` | Ajout de source depuis Nora, reprise sans perte du fil | R1 E2E07 ; D3/D4 ; N-19 |D-05/D-22 ; Figma 09/87 + D/E ; **Figma validé 225/220/224/87** | LIVE Nora + navigateur | NOT RUN |
| `ML4-AT-06` | Organisation GitHub en attente, aucun accès anticipé | N-24/25 ; RG-GIT-009/010 |D-05/D-14 ; nouvelle Figma B/E ; **Figma validé 222** | REAL multi-identité | NOT RUN |
| `ML4-AT-07` | GitHub App retirée vs projet détaché vs utilisateur déconnecté | RG-GIT-006/012/037 ; PF-GIT-26/32 ; N-21/22/23 |D-10/D-26 ; Figma 177/191/192 ; **Figma validé 223/191/192** | API, DB, navigateur | NOT RUN |
| `ML4-AT-08` | Nora lit fichier candidate et cite ref/SHA, sans inventer `main` | RG-GIT-017..024/041 ; PF-GIT-13/14/35 ; N-01 |D-04 ; Figma 175/12 ; **Figma validé 226/175/12** | LIVE Nora + REAL source | NOT RUN |
| `ML4-AT-09` | README hostile n'entraîne ni mandat ni écriture | RG-GIT-015 ; PF-GIT-10 ; N-12 |D-09 ; Figma 180 ; **Figma validé 225/180** | LIVE adversarial + audit effet | NOT RUN |
| `ML4-AT-10` | Document D4 sauvegardé, révisé et lié à source Git | D4 RG-KNOW-006..012 ; N-02/03 |UX Doc Nora, versions + Figma 175 ; **Figma validé 227/205** | DB/UX/LIVE Nora | NOT RUN |
| `ML4-AT-11` | Document D4 → branche Git + commit distant sans toucher `main` | RG-GIT-003/025..032 ; PF-GIT-17/18/19 ; N-04 |D-11/D-17 ; Figma 182/184/185 + G ; **Figma validé 227/231/184–185** | REAL GitHub, diff et SHA | NOT RUN |
| `ML4-AT-12` | PR réellement ouverte, pas de merge implicite | RG-GIT-018/021/030/031 ; PF-GIT-19/22 ; N-05 |D-21 ; Figma 185/188 ; **Figma validé 228/185/188** | REAL PR état/base/head | NOT RUN |
| `ML4-AT-13` | Merge documentaire seulement après deuxième GO + protections | RG-GIT-030/031 ; N-06 |D-21 ; Figma 185/188 + H ; **Figma validé 229–230/185** | REAL GitHub + navigateur | NOT RUN |
| `ML4-AT-14` | HEAD change entre inspection et effet : refus/requalification | RG-GIT-019/023/028 ; PF-GIT-15/18 ; N-08 |D-11/D-12 ; Figma 182/190 ; **Figma validé 231/182/190** | REAL conflit | NOT RUN |
| `ML4-AT-15` | Timeout/double clic : pas de commit ni PR fantômes/doublons | RG-GIT-031/032 ; PF-GIT-20/32 ; N-07 |D-18/D-19/D-23 ; Figma 186/187/192 ; **Figma validé 231/186–187** | API fault + REAL réconciliation | NOT RUN |
| `ML4-AT-16` | Repo partagé entre Pilotes n'unit ni mémoire ni mandats | RG-GIT-016/033..036 ; PF-GIT-11/23..25/34 ; N-10 |D-07/D-08/D-12 ; Figma 181/190 ; **Figma validé 226/231/181** | 2 comptes REAL/DB | NOT RUN |
| `ML4-AT-17` | Publication code/CI/scripts/normatif hors autorisation ML4 interdite | RG-GIT-025/026/038/039 ; N-09 |D-17 ; Figma 184 ; **Figma validé 227/184** | tests refus et sécurité | NOT RUN |
| `ML4-AT-18` | Commit observé avec tests absents ne prouve pas conformité | RG-GIT-021/022/024 ; PF-GIT-33 ; N-11 |D-24 (ML5 Cursor différé) et D-25 ; Figma 193 ; **Figma validé 230/193** | D8/navigateur | NOT RUN |
| `ML4-AT-19` | Figma future intégration absente ou non activable | N-26 ; produit simple |Nouvelle Figma A ; **Figma validé 218–219** | navigateur | NOT RUN |
| `ML4-AT-20` | Lien « Ouvrir sur GitHub » réel mais sans permission dérivée | RG-GIT-041 ; PF-GIT-35/36 ; N-27 |D-04/D-05 ; Figma 175/176 ; **Figma validé 226/175–176** | browser + API | NOT RUN |
| `ML4-AT-21` | Responsive, focus, clavier, zoom, interruptions | R3 §14 ; contrat transposition |D-25 ; Figma 197/198, nouveaux écrans ; **Figma validé 232–235/197–198/201–202** | capture navigateur + a11y ciblé | NOT RUN |
| `ML4-AT-22` | Accès Git révoqué sans annuler le document interne ni les commits historiques | RG-GIT-012/019/029/037 ; PF-GIT-12/27/32/36 ; N-13 |D-10/D-26 ; Figma 177/192 ; **Figma validé 223/177/192** | REAL permission + reprise | NOT RUN |

## 3. Écarts et réserves par gate

| Gate | Exigence | Réserve ouverte / exit |
|---|---|---|
| D2 décision normative | Arbitrages portée d'écriture, merge, identité App, « Intégrations » | Décisions de trajectoire/portée validées par Morris et enregistrées sur branche candidate ; les nouveaux N restent candidats et aucun GO code n'est acquis |
| R2 | Mise à jour des règles et scénarios sous leurs propriétaires | `N-01..N-14` et `N-15..N-27` non normalisés ; éviter double corpus |
| R3 | Figma nouvelle navigation + états de consentement/retour et publication D4 | 18 écrans 218–235 et INDEX Figma VALIDATED SPEC Morris, registre de traçabilité disponible ; snapshot immuable et preuves navigateur encore à produire |
| R4 | Instance GitHub App, identité d'effet, droits, concurrence, opérations remote, idempotence | Mécanismes non implémentés ; choix à prouver auprès du fournisseur |
| R5 | Code, tests, migration, sécurité, UX, LIVE Nora, REAL GitHub | No run, no coverage, no behavior proven ; routes/modules Git absents du `main` observé |
| R6 | E2E et non-régression globale, réserves ML1–ML3 et lane STABLE | NOT STARTED ; aucun ADOPTED, release ni promotion |

## 4. Rapports probatoires attendus pendant le build

Pour chaque essai réel : **date, lane, identité du Pilote/acteur d'effet, dépôt de test, ref/base/HEAD, contenu/cible, autorisation D6, commande D7 si applicable, réponse GitHub, état distant relu, preuve brute utile, limite, SHA du code Next et verdict**. Les tests déterministes ne justifient pas une revendication REAL. Tout QA noté `NOT RUN` le reste jusqu'à preuve.

**Suite courante :** après intégration du paquet documentaire et convergence UX ML1–ML3 sous gate distinct, consolider la spécification technique ML4 avant GO Cursor ; conserver ces 22 contrôles au statut NOT RUN, sans second registre de tests.


## 5. Traçabilité post-revue Figma — 2026-11-07

Les repères A/B/G/H du présent tableau désignent les surfaces candidates historiquement prévues ; les références numériques ajoutées dans chaque ligne constituent **le raccord actuel approuvé**. [Registre de nœuds et parcours](../../ux-ui/integration-git-ux-ml4.md). Les 22 tests demeurent **NOT RUN**, aucune couverture réelle n'est revendiquée.

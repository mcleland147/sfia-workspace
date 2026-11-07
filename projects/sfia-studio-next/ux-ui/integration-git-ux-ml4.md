# Registre de traçabilité Figma — Intégrations et publication Git

**Statut : VALIDATED SPEC UX — Morris, 2026-11-07.** Aucun code ML4, aucun fournisseur GitHub LIVE/REAL et aucune adoption prouvés.
**Fichier Figma :** `itgvCulInEnFY6DvgIegvP`, [page de référence R3](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-49), `94:49`. [INDEX ML4](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=388-425) `388:425`.

## Constat natif et nomenclature

Audit relu en lecture seule le 2026-11-07 : **242 frames racines** sur la page, dont les **223 historiques R3**, **18 nouveaux écrans numérotés 218–235** et **1 INDEX** ML4 ; 18 noms/numéros distincts, **36 liens de boutons vers des frames existantes**, **27 liens de l'INDEX valides**, pas de chevauchement des nouveaux cadres ni de dépassement principal constaté. Réemploi de la grammaire R3 (Inter, rail sombre, panneaux, boutons) et du nommage produit par responsabilité. Les numéros restent des identifiants de **traçabilité de maquette**, jamais des noms de composants permanents.

| Écran | Nœud | Dimensions | Scénarios candidats | Recette R5 | Cibles de prototype illustratives |
|---|---|---|---|---|---|
| [218 · Intégrations — GitHub non connecté](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=383-389) | `383:389` | 1680×970 | N-15/16/26 | ML4-AT-01/03/19 | 220; 70 R3 |
| [219 · GitHub — dépôts autorisés](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=384-391) | `384:391` | 1680×970 | N-17/25 | ML4-AT-03/04 | 221; 70 R3 |
| [220 · GitHub — installation à autoriser](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=384-462) | `384:462` | 1680×970 | N-17/18 | ML4-AT-02/03 | 224; 218 |
| [221 · GitHub — ajouter un dépôt](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=384-533) | `384:533` | 1680×970 | N-20/25 | ML4-AT-04 | 224; 219 |
| [222 · GitHub — approbation en attente](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=384-604) | `384:604` | 1680×970 | N-24/25 | ML4-AT-06 | 224; 70 R3 |
| [223 · GitHub — accès retiré](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=384-675) | `384:675` | 1680×970 | N-13/21/23 | ML4-AT-07/22 | 191 R3; 219 |
| [224 · GitHub — retour d'autorisation](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=384-746) | `384:746` | 1680×970 | N-18/19 | ML4-AT-03/05 | 225; 219 |
| [225 · Nora — accès Git à demander](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=385-403) | `385:403` | 1680×1080 | N-12/19 | ML4-AT-05/09 | 220; 70 R3 |
| [226 · Projet — sources Git autorisées](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=385-590) | `385:590` | 1680×1080 | N-01/14/22/27 | ML4-AT-04/07/08/20 | 172 R3; 219 |
| [227 · Publication Git — inspection d'une révision](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=385-777) | `385:777` | 1680×1080 | N-02/03/04/09 | ML4-AT-10/11/17 | 228; 184 R3 |
| [228 · Publication Git — pull request ouverte](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=385-964) | `385:964` | 1680×1080 | N-05/07 | ML4-AT-12/15 | 185 R3; 229 |
| [229 · Publication Git — autorisation de merge](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=385-1151) | `385:1151` | 1680×1080 | N-06 | ML4-AT-13 | 230; 228 |
| [230 · Publication Git — fusion vérifiée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=385-1338) | `385:1338` | 1680×1080 | N-06/11 | ML4-AT-13/18 | 193 R3; 205 R3 |
| [231 · Publication Git — base devenue périmée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=385-1525) | `385:1525` | 1680×1080 | N-07/08/10 | ML4-AT-14/15/16 | 227; 226 |
| [232 · Intégrations — vue compacte à 1280 px](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=386-417) | `386:417` | 1280×990 | N-15/16 | ML4-AT-21 | 220; 70 R3 |
| [233 · Intégrations — mobile à 390 px](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=386-622) | `386:622` | 390×1350 | N-15/16 | ML4-AT-21 | 220; 70 R3 |
| [234 · Publication Git — inspection à 1280 px](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=386-511) | `386:511` | 1280×990 | N-04 | ML4-AT-21 | 227; 226 |
| [235 · Publication Git — mobile à 390 px](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=386-656) | `386:656` | 390×1350 | N-04 | ML4-AT-21 | 227; 226 |

## Parcours et limites de la conception

- **218–224** : Paramètres → Intégrations, GitHub seul fournisseur actif, connexion facultative, installation/autorisation distinctes de la session Studio, ajout de dépôt ultérieur, approbation d'organisation, accès retiré et retour vérifié. Les états 222/223 sont accessibles depuis l'INDEX : **pas des callbacks réels**.
- **225–226** : Nora propose une autorisation contextuelle sans lire un dépôt privé ; le projet associe une ressource autorisée sans modifier les droits GitHub.
- **227–231** : document D4 versionné, diff et HEAD, autorisation D6, effet gouverné D7/D9, qualification D8, PR ouverte et merge **sous décision distincte** ; la référence périmée impose un STOP et une requalification. **227→228 et 229→230 sont des ellipses de démonstration**, et non des boutons permettant de produire un commit/merge sans backend ni mandat.
- **232–235** : déclinaisons 1280 et 390 px. Le comportement 320 px, focus, clavier, zoom 200 % et états dynamiques nécessitent une preuve navigateur.
- R3 historique 09/12/70/87/171–193/197–198/201–202/205 reste la référence complémentaire pour accès refusé, dépôt partagé, variante mobile, preuve insuffisante et documents.

Les scénarios `N-01..27` sont des **candidats de qualification**, distincts des **41 RG-GIT et 36 PF-GIT propriétaires R2**. Les tests `ML4-AT-01..22` sont **NOT RUN**. GitHub OAuth Studio ≠ GitHub App ≠ sélection dépôt ≠ autorisation d'effet.

**Gate restant avant code :** Figma est mutable ; snapshot/empreinte des propriétés et captures immuables à conserver lors de la transposition, et tests navigateur REAL nécessaires pour `BEHAVIOR PROVEN`. La maquette approuvée ne vaut ni IMPLEMENTED, ni ADOPTED.

# SFIA Studio Next — Politique de versioning du produit et registre des livraisons

**Version du document :** v1.0 — contenu validé par Morris le 2026-11-04 ; intégration sur `main` prouvée par la PR #647.  
**Statut de la politique :** `D2 CONTENT VALIDATED MORRIS — 2026-11-04 / ON MAIN VIA PR #647 / NEXT ROUTING INTEGRATED`. **État produit post-ML1 :** métadonnées techniques en code, `NO RELEASE / STABLE NOT AVAILABLE` ; les textes pré-construction ci-dessous sont historiques.  
**Emplacement canonique de publication :** `projects/sfia-studio-next/governance/product-versioning.md`.  
**Périmètre :** versions et livraisons du **produit SFIA Studio Next**, et non versions de la méthode SFIA v2.6, du SEF, des documents R1–R5, des contrats Figma ou des migrations.  
**Sources de conception initiales :** `main@a0b80b9ecd64149ed51f87235ae246e197e66462`, SEF v0.2 §10, ENV-01, ADR R4-01..04, DATA-01, guide §4.3.0b, template v2.6 §2.0.H / §5 / §6.9 / §6.14. **Constat post-merge :** PR #647 intégrée et relue sur `main@5a972f291ef8819b179d879ae73b5943307ec3c1` ; les lectures ultérieures restent soumises à la vérification de la ref Git courante.  
**Autorité :** Morris décide des évolutions structurantes, du classement `MAJOR` litigieux, de l'intégration et de la promotion ; ChatGPT qualifie et revoit ; Cursor modifie le code et tient les traces sous contrat autorisé.

**Portée de la validation :** versioning produit approuvé en contenu et routage Next-only intégré sur `main` après PR #647. **Actualisation factuelle 2026-11-04 post-ML1 :** l'application contient `web/src/lib/product-version.ts` et une version de package technique `0.0.0-dev`, non une version produit officielle ; la recette ML1 a utilisé le build `PMCGeil9wv8DZNBfEGf4H` au C3 `0db58be...`, merge #649. **Aucune version produit STABLE, release/tag ni adoption** ne sont établis. Les propositions de numérotation et d'implémentation des sections suivantes ne deviennent pas des décisions appliquées par cette mise à jour documentaire.

## 1. Objectif et règle générale

Une seule ligne de versions applicatives, continue et traçable, malgré les macro-lots, les correctifs et les environnements. Tout **delivery Cursor de code produit** est enregistré avec sa version **cible/candidate ou `NO RELEASE` motivé**, son commit, ses tests et son statut. Une version officielle n'est déclarée livrée **qu'après les gates de recette, merge, post-merge et promotion** correspondant à ENV-01.

**Distinguer les cinq objets :** (1) version sémantique de l'application ; (2) révision Git SHA/source ; (3) build immuable ; (4) version de schéma/migration de données ; (5) environnement réellement servi. Une valeur de ces objets ne prouve pas les quatre autres.

**Constat historique de conception pré-ML1 :** aucune version officielle initiale n'était alors attribuée et le code n'existait pas. **État actuel après #649 :** code ML1 intégré et package `0.0.0-dev` technique, **sans version produit attribuée ni STABLE**. Les propositions de débuter en `0.1.0` (pré-1.0) et de promouvoir `1.0.0` au premier socle stable restent des **options non attribuées**, soumises aux gates Morris applicables.

## 2. Format et sélection des incréments

Format officiel : **`MAJOR.MINOR.PATCH`**, nombres entiers non négatifs, sans zéro de remplissage. Il s'inspire de *Semantic Versioning 2.0.0* et l'adapte à la compatibilité observable du produit.

| Classe | Déclencheur principal | Exemple depuis `1.2.1` | À distinguer |
|---|---|---|---|
| **PATCH** | Correction de bug, sûreté, performance ou fiabilité **sans nouvelle capacité attendue et sans rupture de contrat** | `1.2.2` | La sévérité du bug n'implique pas, à elle seule, une version majeure |
| **MINOR** | Nouvelle capacité ou évolution fonctionnelle/UX **compatible** avec les contrats d'utilisation et données existants | `1.3.0` | La notation exacte est `1.3.0`, pas simplement `1.3` |
| **MAJOR** | Rupture de compatibilité de contrat public, API, données, parcours essentiel, ou évolution majeure de produit explicitement décidée par Morris | `2.0.0` | « Beaucoup de code » ne suffit pas à justifier un `MAJOR` ; décrire l'impact et la transition |
| **NO RELEASE** | Travail documentaire, investigation, tests internes, préparation sans nouveau build produit promu | Version STABLE inchangée | Delivery tracé si Cursor intervient ; pas de fausse release |

**Règle de classement** : analyser l'effet réel sur le produit (consommateur, API, format, parcours, migration, compatibilité) plutôt que seulement `INC/EVOL` ou le volume de fichiers. Si plusieurs types coexistent dans un même incrément, le niveau le plus élevé **justifié** s'applique. Toute rupture significative ou hausse `MAJOR` requiert un arbitrage Morris identifiable. Des correctifs peuvent être regroupés dans un même PATCH cohérent, sans version par micro-correction.

**Phase `0.x`** : les contrats peuvent évoluer pendant la construction, mais **aucune rupture silencieuse** n'est autorisée. La convention des incréments `0.MINOR.PATCH` et la date du premier `1.0.0` seront décidées pour le premier build ; l'existence d'une préversion ne vaut pas stabilité ni adoption.

## 3. Versions candidates et séquence de delivery

- Une version en préparation prend la forme `1.2.2-rc.1`, puis `1.2.2-rc.2` si le code est corrigé et qu'un nouveau candidat doit être recetté. `rc` désigne une **release candidate**, pas une release acceptée. Les builds peuvent porter un identifiant distinct (ex. SHA court) pour vérifier le contenu réellement servi.
- `DEV` peut être changeant et porte son `sourceSHA/buildId` ; une version `-dev.N` facultative n'est jamais annoncée comme STABLE.
- `RECETTE` expose un **SHA/build figé**, une version candidate, une base, un schéma et un jeu de données explicités ; un correctif produit un **nouveau** candidat et invalide la recette impactée du candidat précédent.
- `main` représente le code Git intégré, pas nécessairement la version actuellement exposée en STABLE.
- `STABLE` affiche uniquement la version réellement promue et le SHA/build correspondant. **Aucun `-rc` ne devient stable par simple renommage** sans preuve, contrôles post-merge et GO Morris de promotion.
- Git tags de release recommandés : `studio-next/v1.2.2` associés au commit ou arbre réellement validé. Création et publication du tag sont des opérations Git sous GO, jamais automatiques par simple génération d'un rapport.
- Si une hotfix `1.2.2` est promue pendant qu'une évolution `1.3.0-rc.1` se prépare, requalifier la base et les risques de la candidate avant recette : pas de version concurrente prétendant à la même réalité.

**Exemple complet :** STABLE `1.2.1` → bug corrigé sur branche DEV → candidat `1.2.2-rc.1` (SHA A) → anomalie recette → candidat `1.2.2-rc.2` (SHA B) → recette Morris OK → PR/merge sous GO → contrôles au SHA intégré → promotion STABLE `1.2.2` sous GO. Les deux deliveries candidates sont historisés ; **une seule** version finale est promue.

## 4. Artefacts canoniques et historique

Créer **au premier macro-lot de code**, pas aujourd'hui dans un dossier vide :

1. **Une source unique de version applicative** dans le manifeste du runtime réellement retenu (par ex. champ `version` du manifeste de package si tel est le choix ML1) ; aucun compteur concurrent dans la base de données ou dans le frontend. Le code génère ou consomme un **build manifest non secret** avec version, SHA, buildId, date et révision de schéma.
2. **`construction/delivery-history.md`** : journal append-only logique des livraisons Cursor. Chaque entrée contient `delivery_id`, date, macro-lot, type, base Git, HEAD/SHA candidat, version précédente STABLE, version cible, `rc` ou NO RELEASE, diff, environnements, migrations, QA/preuves, incidents, revue/GO, statut final et lien PR/commit/tag lorsqu'ils existent. Une correction ajoute une entrée ; elle ne réécrit pas l'historique.
3. **`CHANGELOG.md` de l'application** : synthèse lisible des versions **promues**, ordonnée par version/date avec catégories Added/Changed/Fixed/Removed, impacts et références Git. Un candidat non adopté reste dans le journal des deliveries et les preuves, pas dans la liste des releases officiellement disponibles.
4. **Release manifest ENV-01** : pour toute mise à disposition RECETTE/STABLE, renseigner `product_version`, `release_candidate`, `source_sha`, `build_id`, `schema_revision`, `environment`, `tests/evidence`, `decision`, `release_tag` si existant. Pas de nouvelle autorité concurrente : le manifeste représente le build réellement servi.

Un changelog, un tag ou une version affichée ne remplace **jamais** les preuves de fonctionnement et le verdict Morris. Une version n'est pas automatiquement un niveau de maturité `ADOPTED`.

## 5. Contrôles à chaque macro-lot, correction ou livraison

**Avant prompt** : lire la présente politique à la ref Git applicable et vérifier son statut (`VALIDATED CONTENT` requis pour activation obligatoire), l'ENV-01, la dernière release STABLE réellement connue et sa preuve, le SHA/branche cible, le type de changement et l'impact compatibilité. Qualifier la version cible ou `NO RELEASE` motivé. Si STABLE n'existe pas : `NOT AVAILABLE`, jamais une version supposée.

**Pendant Cursor** : vérifier Git local ; ne modifier que le manifeste de version réellement retenu, le changelog de version **candidat** et l'historique du delivery lorsque la portée le prévoit ; produire tests + documentation + rapport dans le même macro-lot. Une correction après RC ne fait pas passer la version officielle STABLE au numéro cible.

**Avant RECETTE** : versions déclarées cohérentes entre code, build et manifest ; identification du candidat immuable et base ; tests applicables et migrations ; absence d'autre lane contaminée. **Avant PR/merge/promotion** : preuves attachées au bon SHA, non-régression, validation Morris et aucune avance silencieuse de la version STABLE. Un nouveau SHA nécessitant une recette impactée implique nouvelle preuve.

**STOP versioning** : politique absente/non consultée alors qu'elle est validée et applicable ; version cible calculée depuis une STABLE supposée ; deux sources de version divergentes ; collision de tag ou de numéro ; build version/SHA non cohérents ; release annoncée avant promotion ; MAJOR sans arbitrage Morris ; écriture Git ou déploiement hors mandat. Verdict associé recommandé : `STOP — NEXT PRODUCT VERSION CONTRACT INCOMPLETE`.

## 6. Routage SFIA v2.6 — principe d'intégration, après validation

Le document **produit** est chargé depuis Git pour tout cycle Next impliquant code, correction, migration, build, QA/RECETTE, PR readiness, post-merge et release, et référencé par les sources obligatoires du guide et du template actuels :

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.0b : ajouter **Versioning produit Next** après ENV-01, avec lecture du document ci-dessus, version STABLE/candidate, catégorie et registre ; STOP si donnée indispensable absente.
- `prompts/templates/sfia-cycle-execution-template.md` §2.0.H : source et pré-check Next **seulement** ; section §5 : bloc d'instanciation `Product Versioning — Next` contenant statut, ref, SHA, type et version ciblée, historique, build, preuves et gates. 
- `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md` : aligner le manifeste RECETTE avec la version produit sans modifier les gates existants.
- `projects/sfia-studio-next/construction/reference-delivery-r5.md` : simple renvoi à la politique et contrôle du versioning par macro-lot ; ne pas recopier la norme.

**Règle de non-régression** : ne pas modifier le routage historique §4.3.0a/§2.0.G, les règles génériques SFIA v2.6, le standard de versioning **méthode** SFIA ou le template v2.6 de base. Il s'agit d'un **ajout borné Next**, pas d'un nouveau processus ni d'un nouveau template parallèle. Les fichiers partagés et normatifs nécessitent validation du contenu et GO Git Morris spécifiques, puis PR/merge et vérification post-merge.

## 7. Gates d'adoption de cette politique

- **D0 — HISTORIQUE :** rédaction initialement candidate ; contenu désormais validé en D2 le 2026-11-04.
- **D2 CONTENT VALIDATION — ACQUISE LE 2026-11-04 :** Morris valide les règles PATCH/MINOR/MAJOR, la convention pré-1.0 (sans attribuer un numéro de départ), les artefacts et les gates.
- **GO Git CANDIDATE — 2026-11-04 :** Morris autorise la publication sur branche du document produit, l'alignement Next-only du guide/template SFIA v2.6, d'ENV-01 et de la référence R5. PR, merge, `main`, tags, release et promotion restent soumis à leurs gates indépendants.
- **D3 première construction ML1** : Cursor applique le contrat validé au manifeste du produit et aux scripts de contrôle ; tests au SHA/ENV réels.
- **Preuve de mise en œuvre** : au moins une candidate recettée et une promotion éventuelle documentées, sans prétendre `ADOPTED` avant décision Morris.
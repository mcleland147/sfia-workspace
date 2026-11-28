# As-built — Portefeuille personnel et navigation

## Titre de préparation et nom de projet

Le titre d'une préparation est une donnée propre. Sans titre, le portefeuille affiche « Nouvelle préparation ». Le premier titre accepté vient de la qualification structurée déjà produite par Nora, après un tour terminé, et une seule fois. Le renommage manuel du Pilote devient la valeur durable. Une suggestion ultérieure ne la remplace pas.
Le nom officiel reste `projects.name`. Le créer et le renommer réutilisent la même unicité et le même verrou. Le titre de la préparation ne devient pas ce nom. Une préparation rattachée n'est plus renommable comme espace autonome et disparaît de la projection autonome.
Le dialogue de renommage reprend le cadre déjà utilisé par le portefeuille. Préparation : « Renommer la préparation », source `1420:2539`. Projet : « Renommer le projet ». Supprimer reste indisponible. La géométrie du menu, de la synthèse, de la reprise, des lignes et des tuiles n'est pas reprise dans ce chantier.
La migration `029_preparation_title_and_project_name` ajoute les colonnes. Elle ne réécrit aucun titre ni aucun nom déjà présent.

## Finitions après revue visuelle

Source relue, sans modification : menu projet `1420:2138`, barre `1420:285`. Le filet du menu est un enfant de 270×1 px dans un empilement dont l'écart est de 5 px. Le nom fait 15/21 et le type 12/17.
La bibliothèque descend de 12 px sous la barre, par une seule marge commune aux trois vues. Le titre de groupe ne rajoute pas cet écart.
Le menu s'ouvre sur la première action disponible. Les flèches sautent les actions indisponibles. Échap rend le focus au déclencheur.
Une réponse n'est corrélée que si elle répond à l'intention, y compris `moved` pour l'ordre. La valeur relue est comparée à cet accusé et à la collection affichée. Un espace absent, un déplacement sans effet ou une version seulement plus récente ne sont pas annoncés comme un succès.

## Dernier correctif — proportions v0.3

Contrat UX v0.3, ref documentaire 5008d51d. Synthèse 160 px, reprise 180 px, ligne 60 px, écart 12 px. Le séparateur est entre la synthèse et la reprise. Le pied se rejoint en défilement.
La barre place les filtres à gauche et la recherche, le tri et les vues à droite, sans marge intérieure supplémentaire.
La grille a trois colonnes au nominal, tuiles de 116 px, écart 12/8. Le type et l'activité n'apparaissent qu'une fois. Le menu fait 298 px, actions 270×35, avec pictogrammes.
Une relecture n'est pertinente que si le JSON nomme l'espace attendu et si le portefeuille affiché a été rafraîchi. Un statut 200 seul ne débloque pas. L'ordre enregistré n'est annoncé qu'après un accusé confirmé et cette relecture.
Les dialogues et le tiroir prennent le focus, le confinent, et le rendent à la fermeture.

# As-built — Portefeuille personnel et navigation

Date : 28 novembre 2026. Finalisation du complément B. Classe NO RELEASE.

## Finalisation — composition nominale

Source relue : fichier `itgvCulInEnFY6DvgIegvP`, page 14.
Nœuds de cette finalisation : en-tête `1420:242`, barre `1420:285`, colonnes `1420:318`, pied `1425:5758`.
La reprise et la synthèse du candidat précédent sont conservées.
Le titre Mes espaces précède la barre. Les filtres inactifs n'ont plus de cadre. La recherche, le tri et les icônes de vue occupent la droite.
Le bouton Nouveau projet reprend l'action primaire `#292d58` / `#656fe1`.
Chaque ligne rend un monogramme, le nom, l'activité réelle et un menu. Le menu porte l'ouverture, le favori, monter, descendre, archiver, et laisse Renommer et Supprimer indisponibles.
Les archives restent dans le rail. La recherche rapide est un champ sombre sous la marque.
Un conflit 409 relu débloque une nouvelle intention sans exiger la valeur refusée. L'ordre et le favori se relisent par `GET /api/portfolio/spaces/{type}/{id}`, hors page. Une hausse de version seule ne prouve pas le déplacement.

Aucune mesure F2 appariée n'est produite. Le verdict visuel reste REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED.

## Complément B — composition précédente

## Complément B — composition

Source lue : fichier Figma `itgvCulInEnFY6DvgIegvP`, page 14 `1417:6`.
Nœuds extraits : reprise `1420:269`, synthèse `1420:250`, ligne `1420:129`, menu `1420:1803`, archivage `1420:3227`.
La reprise utilise le fond `#242c4b`, la bordure `#7880ef`, le repère 64 px et l'action 218×38.
La synthèse reste en trois colonnes, y compris sous 768 px, avec une typographie réduite.
Le bureau compact (jusqu'à 1433 px) utilise 28 px de marge. Le mobile utilise 16 px.
L'archivage et la restauration passent par une modale. Le texte suit l'archive personnelle : l'espace reste accessible, le travail n'est pas interrompu.
Le menu laisse le renommage et la suppression indisponibles.
Le tiroir personnel s'ouvre depuis le bandeau mobile et se ferme par Échap, le fond ou Fermer. Les largeurs des autres variantes du rail ne changent pas.

Une lecture réussie ne lève plus le blocage d'une mutation incertaine. Un 500 ou un 503 reste inconnu. Un succès exige un accusé exploitable. La relecture d'un favori interroge les favoris du Pilote. La relecture d'une archive interroge le périmètre correspondant. Si l'espace n'y figure pas, le résultat reste incertain et les commandes incompatibles restent désactivées. L'intention n'est pas renvoyée.

Les 27 états applicables sont portés par le même écran, selon les données et le viewport. Aucune mesure F2 appariée n'a été produite dans ce cycle. Le verdict visuel est REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED.

## Complément A

Date de la finalisation fonctionnelle. Classe NO RELEASE.
Schéma 028 inchangé. Aucune migration 029. Complément B non engagé.

## Finalisation — garanties résiduelles

Les lectures du tableau partagent une transaction REPEATABLE READ. Les compteurs, les effectifs, le total, la page et la reprise d'une même réponse voient le même instant. La collection peut encore changer entre deux pages.

Le curseur et le tri départagent l'identité type et identifiant. Un curseur mal formé répond 400.

Une écriture personnelle verrouille d'abord le Pilote, puis la ligne du projet ou de la préparation, puis revérifie l'éligibilité. Le déplacement verrouille aussi les préparations ouvertes du Pilote, par identifiant. La création de projet conserve ses propres verrous. Une préparation rattachée avant l'effet n'est plus favorite et n'apparaît plus comme espace autonome.

L'ordre n'est modifié que si le tri enregistré est le tri personnalisé. L'archivage et la restauration qui changent l'état incrémentent la version d'organisation. Une restauration déjà effective ne décale pas les positions.

Le signal d'ouverture prend l'heure du serveur au moment de l'effet et ne recule jamais. Les huit dernières clés sont retenues dans la clé existante. Une clé déjà vue, y compris après l'ouverture d'un autre onglet, ne compte pas comme une nouvelle ouverture. Une clé plus ancienne que cette fenêtre peut encore être acceptée : la colonne unique ne conserve pas un journal illimité.

Une lecture en échec ne remplace pas le tableau par une liste vide. Un accusé perdu laisse le résultat inconnu et bloque les modifications suivantes jusqu'à une relecture réussie. L'intention n'est pas renvoyée. Le bouton Relire ne refait que la lecture.

La réponse GET du portefeuille ne renvoie plus une ancienne projection vide. Le tableau est le contrat servi. L'ancienne lecture reste disponible seulement lorsqu'un curseur de préparations est demandé.

## Complément A — lectures et écritures

La lecture du tableau ne charge plus la collection entière en mémoire.
Le filtre, la recherche, le tri et la page sont exécutés par PostgreSQL sur l'union des projets du Pilote et des préparations OPEN non rattachées.
Les compteurs portent sur les espaces courants. Les effectifs de groupe et le total filtré portent sur le résultat complet, pas sur la page.
L'aperçu reste à 5. La collection déployée reste à 25. Le curseur est lié au tri, au filtre, à la recherche et au périmètre. Un curseur d'une autre lecture est refusé.

Les écritures D1 prennent un verrou transactionnel par Pilote, distinct des verrous D2, puis le verrou de ligne décrit ci-dessus.
La première écriture et les écritures suivantes se sérialisent ainsi. Une version périmée répond 409. L'éligibilité propriétaire est revérifiée après l'attente.

L'ordre personnalisé n'est accepté que sur la collection courante, filtre Tout, sans recherche.
Le déplacement se fait avant la cible, dans les deux sens. Une cible absente ne réussit pas.
L'archivage conserve la position. La restauration décale les positions courantes à partir de cette valeur pour éviter une collision.

Le signal d'ouverture n'utilise plus l'origine de performance du document comme identité de l'intention.
Une note d'entrée est posée avant la navigation depuis le portefeuille ou un favori.
Le même onglet ignore une clé déjà envoyée ou une séquence plus ancienne.
Un remontage du même document sans nouvelle note ne crée pas une seconde ouverture.
La fenêtre des huit dernières clés et l'horodatage monotone sont décrits ci-dessus. Une clé plus ancienne que cette fenêtre reste une limite du schéma 028.
Un rechargement sans note, un échec HTTP et un espace archivé ne changent pas la date. La navigation n'est pas bloquée.

Le rail relit les favoris quand le tableau change, et ignore une réponse plus ancienne.
Les compteurs filtrent la collection. La recherche du rail interroge les espaces du Pilote. Le lien Archives ouvre le périmètre archivé.
Une mutation en cours n'est pas relancée. Un 409 déclenche une relecture. Un échec réseau laisse le résultat inconnu, bloque les modifications suivantes tant que la relecture échoue, et ne renvoie pas l'intention.

## G2

La transposition graphique, les 27 états, le responsive et le zoom restent au complément B.
G2 visuel global : non passé. F2 : non passé.

Page Figma 14, file `itgvCulInEnFY6DvgIegvP`, session `2145537b-caa2-4645-81f0-0574d451d8a5`.
La liste nominale `1420:176` mesure 1680×970, rail 246, bandeau 70, contenu 1434×900, synthèse 1354×136, reprise 1354×158, lignes de 50 px.
La synthèse `1420:250` utilise le panneau `#151d2c`, le filet `#273248`, l'encre `#f2f4fc` et le texte secondaire `#a5b1c5`.
Les compteurs de démonstration Figma ne sont pas des données produit. Sans signal d'ouverture, la carte de reprise est absente. L'archive est personnelle et ne met rien en lecture seule.

Les 27 états applicables sont construits par la même surface. La mesure F2 des 27 références n'est pas une preuve de ce cycle.

## G3

Deux tables additives, sans colonne sur `projects` ni `preparations` :

- `pilot_portfolio_preferences` : vue, tri explicite, version d'organisation.
- `pilot_space_organization` : favori, archive, dernière ouverture, clé de navigation, position.

Un tri non enregistré affiche l'activité récente dès qu'une ouverture existe, sinon la date de création. Un tri choisi reste celui du Pilote.
L'ordre personnalisé réécrit des positions entières sur la collection courante, dans une transaction, et refuse une version périmée.
Le GET ne crée aucune préférence. Une préparation rattachée sort de la projection autonome. Son favori n'est pas transféré.

## Signal d'ouverture

Le signal est envoyé par la page de préparation ou de projet après admission, une fois par navigation.
Un rechargement, la même clé, ou un espace archivé ne changent pas l'horodatage. L'échec du signal ne bloque pas la page.

## Migration

`028_pilot_portfolio_organization.sql`. Le runner historique reste inchangé de 001 à 027.
027 était présent sur `sfia_next_e2e` et `sfia_next_dev` avant application.
La migration a été rejouée sur E2E. DEV a été sauvegardé, puis migré. Le contrôle de restauration a relu 233 projets sur une base isolée ensuite supprimée.
Après migration, DEV conserve 233 projets et 265 préparations.

## Hors de ce mandat

Renommage, suppression, nommage Nora, journal, compositeur, FinOps et dictée ne sont pas activés. Les actions de renommage et de suppression sont affichées indisponibles.

# As-built — Portefeuille personnel et navigation

Date : 28 novembre 2026. Mandat 1, finalisation du complément A. Classe NO RELEASE.
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

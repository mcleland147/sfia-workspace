# As-built — Portefeuille personnel et navigation

Date : 28 novembre 2026. Mandat 1. Classe NO RELEASE.

## G2

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

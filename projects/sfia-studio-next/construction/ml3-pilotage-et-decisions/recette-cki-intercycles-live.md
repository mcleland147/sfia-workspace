# SFIA Studio Next — R5 / Pilotage et décisions — C03 : recette LIVE intercycles

**Date :** 2026-11-07, Europe/Paris.
**Nature :** preuve D0 de recette utilisateur, non normative ; à associer au dossier de sortie ML3 et à la décision Morris, sans prétendre à une preuve technique exhaustive.
**Verdict :** **C03 TARGETED INTERCYCLE LIVE BEHAVIOR PROVEN**, avec limite d'observabilité de l'injection `DELIVERED`.

## Source et préconditions

Même projet RECETTE que T01–T08, fil Nora conservé ; après T08, cycle CADRAGE clôturé, aucun cycle actif, 0 restriction, révision 6, journal 6. Candidat fonctionnel `61fe295b6704e820694d2379e7f6ab1814143172`, build rapporté `ZCkIWQ341KK1KOHTD1a5L`, base RECETTE isolée et schéma `007`. Ce rapport est établi à partir des deux réponses Nora fournies par Morris et de sa capture Pilotage après le deuxième tour. Pas de lecture autonome des logs internes de génération, ni requête à PostgreSQL par ChatGPT.

## A — GO d'ouverture par langage naturel

**Message Pilote :**

> Nora, ouvre le cycle de conception fonctionnelle avec pour objectif de définir le fonctionnement attendu d'un service de coordination interéquipes et de suivi des décisions.
>
> Appuyons-nous sur les situations de coordination évoquées pendant le cadrage, sans supposer que les besoins utilisateurs sont déjà validés.
>
> Confirme d'abord ce qui a été effectivement enregistré dans Studio, puis indique ce que nous devrions examiner en premier pour concevoir un fonctionnement utile.

**Réponse Nora `COMPLETE` observée :** ouverture confirmée appliquée dans Studio ; `CONCEPTION_FONCTIONNELLE ACTIVE`, révision 7, objectif fidèle, aucune restriction, clôture CADRAGE historique conservée. Les besoins ne sont pas déclarés validés. Nora a effectué une recherche D4 : seulement un sujet sur la priorité exploratoire est remonté ; aucun document ni situation détaillée de cadrage retrouvée. Elle signale cette absence plutôt que d'inventer des acquis, puis recommande de partir d'un exemple concret.

## B — Réponse spécialisée sans consigne technique CKI

**Message Pilote :**

> Prenons une situation réelle : une équipe rencontre un blocage qui dépend d'une décision d'une autre équipe.
>
> Les personnes concernées doivent savoir quelle décision a été prise et où en est son traitement.
>
> Comment décrirais-tu le fonctionnement minimal que le service devrait offrir, et quels points devrions-nous clarifier avant de considérer ce fonctionnement comme suffisamment défini ?

**Réponse Nora `COMPLETE` observée :** fonctionnement minimal en cinq capacités (signaler le blocage, prendre en charge la demande, identifier l'auteur habilité et la décision applicable, suivre l'application séparément de la décision, informer et historiser). Clarifications : responsabilités, sens du traitement, autorité de décision, confirmation de levée, absence de réponse, visibilité et révisions. Scénarios vérifiables : nominal jusqu'à levée ; demande incomplète ou mal adressée ; silence ; décision prise mais non appliquée ; décision modifiée pendant son application. Distinction utile : **décision prise ≠ blocage résolu**. Nora ne présente ni les besoins comme acquis ni le CKI interne comme une source documentaire.

## Contrôle D5/D6 par capture Pilotage après B

**Capture :** `image(20261107-080623).png`, fournie dans la conversation (hors Git) ; SHA-256 **`40aeb7de8e136a2550484f367e22ac8cd26061527f4760953de0434a62aa2f07`**, vérifié sur le fichier fourni.

| Oracle | Observation |
| --- | --- |
| Cycle courant | `CONCEPTION_FONCTIONNELLE · ACTIVE` |
| Objectif | « définir le fonctionnement attendu d'un service de coordination interéquipes et de suivi des décisions » |
| Révision / journal après B | **7 / 7 décisions**, inchangés par la question B |
| Décision d'ouverture | `OPEN_CYCLE · APPLICABLE` |
| CADRAGE historique | `CLOSE_CYCLE` conservée |
| CKI courant | `02-conception-fonctionnelle · RESOLVED · pin 0.2.0` |
| Restrictions actives | Aucune |
| Nouvelle mutation lors du second échange | Aucune observée |

Le sélecteur « Transiter vers CADRAGE » est une option d'interface, pas une transition exécutée.

## Qualification et limites

**PASS sur ce parcours LIVE :** transition effective, association vérifiée du CKI propre au nouveau type, posture cognitive de conception fonctionnelle, prudence D4, absence de décision implicite et de citation spontanée du mécanisme CKI.

**Limites :** `RESOLVED` atteste la disponibilité/pin au niveau de la projection, **pas** la livraison effective du texte spécialisé à la génération (`DELIVERED`). La pertinence de la réponse ne prouve pas à elle seule sa cause. Pas de test comparatif « sans CKI » ni d'exhaustivité cognitive. L'étape B apporte une preuve de non-mutation à révision constante, pas une preuve SQL autonome.

**Sortie C03 :** le besoin de test conversationnel ciblé intercycles est satisfait pour la clôture bornée ML3. Une preuve `DELIVERED` peut être instruite ultérieurement en observabilité/R6 selon le niveau d'exigence, sans inventer un défaut LIVE.

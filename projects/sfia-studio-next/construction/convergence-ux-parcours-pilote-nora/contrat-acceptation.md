# SFIA Studio Next — Contrat d'acceptation candidat : Parcours Pilote–Nora intégré

**Statut :** `DOCUMENTED / CONTRAT CANDIDAT — A1/A2/A3 VALIDÉS EN PÉRIMÈTRE, CONTRAT COMPLET EN ATTENTE DE REVUE MORRIS / NOT IMPLEMENTED`. **Base :** `main@d37ea0882ee9256ec206e2f0523a71bf13674e88` (2026-11-07).

## Résultat utilisateur

Depuis un compte personnel, le Pilote entre dans Studio, retrouve ses projets et préparations, travaille avec Nora, produit et retrouve documents et acquis, pilote les cycles/méthodes, assume ses décisions, passe d'une surface à l'autre sans perte de contexte et distingue sans ambiguïté **proposition, décision, demande en cours, effet observé et incertitude**.

## Frontières

**IN :** convergence visuelle et comportementale du **runtime ML1–ML3** vers les frames applicables R3 ; shell, portefeuille/sas/projet, Nora, D4, trajectoire/CKI/décisions/restrictions ; reprise, erreurs, responsive, accessibilité, tests et docs as-built intégrés. **OUT :** GitHub App, écriture Git, D7/D8 effectifs, Cursor, nouvelles permissions, orchestration générale et extrapolation de 242 écrans Figma.

**Propriétaires :** D1 session ; D2 entrée/création/projet ; D3 cognition Nora ; D4 documents/sujets ; D5 cycles/méthode/CKI ; D6 décisions/restrictions. UI = projection ; aucun propriétaire métier nouveau.

## Arbitrages produit validés par Morris — portée, non modalités techniques

- **A1 VALIDÉ** : le portefeuille permettra de retrouver et reprendre une préparation non rattachée, sans création implicite d'un nouveau sas. Contrat d'API, modèle de liste/tri, ownership, 401/403/404 et reprise à figer avant construction.
- **A2 VALIDÉ** : accès à la révision documentaire depuis l'espace projet, avec le **même service D4, version de base, concurrence et historique**. Mode d'accès (navigation contextuelle ou composition dans Documents) à trancher au contrat UX détaillé ; pas de deuxième éditeur métier.
- **A3 VALIDÉ** : **pas** de grammaire générique de nouvelles cartes/actions mutantes déclenchées par Nora. Présenter et inspecter correctement les réponses et fonctionnalités existantes ; les actes D5/D6 restent des commandes humaines séparément autorisées.

## Acceptation minimale

1. `UXC-01..03` : session, portefeuille, sas, création et continuité réels, pas d'effet implicite.
2. `UXC-04..07` : fil Nora, Markdown sûr, documents D4 versionnés, journal de connaissances et reprise.
3. `UXC-08..10` : projet sans cycle/méthode, cycle actif/CKI, décisions et restrictions, acte humain toujours distinct.
4. `UXC-11..12` : résultat incertain, retry sûr, multi-Pilotes/multi-projets, ownership et absence de fuite.
5. `UXC-13` : captures navigateur comparées aux frames Figma prioritaires à 1680, 1280, 390 et 320 px, zoom 200 %, focus clavier, contraste et scroll.
6. `UXC-14` : régressions unitaires/PG/BROWSER/Nora LIVE ciblée et verdict Morris ; toute exception documentée, aucune preuve fournisseur Git simulée.

## Dépendances et gates

**Entrée :** décision de séquencement #663 intégrée `main`, R1–R4, preuves et réserves ML1–ML3, Figma R3 lu en natif. **SORTIE D0 :** arbitrages A1/A2/A3 validés et tracés ; **validation du présent contrat complet encore à obtenir**. **SORTIE CONCEPTION :** contrat visuel/technique validé, Figma figé et QA instanciée. **BUILD :** GO distinct Cursor SFIA v2.6 et exécution intégrée. **RÉCEPTION :** navigateur/PG/LIVE sur un même SHA, puis GO PR/merge distinct. Aucune STABLE/ADOPTED implicite.

**Détail et matrice `CU-01..16` :** [qualification de convergence](qualification.md). Décision : [arbitrages validés](../../governance/decisions/2026-11-07-convergence-ux-arbitrages.md).

## Points encore à préparer pour la revue du contrat complet

- **A1 — parcours de reprise :** liste réelle des préparations du Pilote, statut et tri non inventés, route de lecture bornée, distinction « créer »/« reprendre », navigation après expiration, ambiguïté ou accès refusé ; aucune création lors d'une simple consultation.
- **A2 — document depuis le projet :** choisir la composition UX et les liens directs, sans bifurquer le service D4 ; base de révision, conflit 409, diff, résultat UNKNOWN et retour à la conversation à exprimer.
- **A3 — contenu Nora :** identifier les structures effectivement supportées par SafeMarkdown et les composants disponibles ; pas de bouton ou outil simulant une mutation D5/D6, une exécution Cursor ou Git.
- **Contrat R3 → navigateur :** choisir les frames prioritaires et états non nominaux, définir le shell commun et les composants par responsabilité, préserver accessibilité clavier, mobile 320/390, zoom, isolation, résultats de tests et preuves sur le même SHA.
- **Gates :** le présent contrat ne vaut ni `VALIDATED SPEC` complet, ni spécification technique finalisée, ni GO Cursor. Son approbation et la revue des choix d'interface restent des décisions Morris distinctes.

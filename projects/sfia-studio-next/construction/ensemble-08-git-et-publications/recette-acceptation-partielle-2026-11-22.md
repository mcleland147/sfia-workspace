# SFIA Studio Next — PV de recette utilisateur
## Intégrations Git et publication documentaire pilotée par Nora

| Champ | Valeur |
| --- | --- |
| Date du constat | 22 novembre 2026 (Europe/Paris) |
| Produit | SFIA Studio Next — Ensemble 08 / collaboration Git |
| Nature | **PV de recette utilisateur et plan de scénarios**, document factuel non normatif |
| Autorité UAT | Morris — observations et acceptations exprimées dans la conversation |
| Statut global | **RECETTE PARTIELLEMENT ACCEPTÉE — PUBLICATION CONVERSATIONNELLE BLOQUANTE** |
| Lane | RECETTE locale `http://127.0.0.1:3200` |
| SOURCE_SHA servi, selon compte rendu Cursor | `f1907aad98f75c7d39e4c21ccbd8043ab048ce09` |
| TREE, selon compte rendu Cursor | `1e93363b50f07e95dcd3a9cccb01c7ca4ad96729` |
| BUILD_ID servi, selon compte rendu Cursor | `zKGLfPHM1TMilec4qglJv` |
| Base Git distante lors de la rédaction | `origin/main@a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Branche d'édition du PV | `docs/next-git-recette-20261122` — documentaire, hors runtime et hors `main` |
| Portée | Enregistrer le verdict utilisateur, qualifier les scénarios à prouver et transmettre le défaut à Cursor |
| Ne vaut pas | MERGED, STABLE, RELEASE, ADOPTED, preuve GitHub REAL d'écriture |

> **Règle de lecture.** « Accepté Morris » signifie que Morris a confirmé l'usage ou la conformité dans cette UAT. Ce statut n'invente pas un test automatisé, une preuve d'effet GitHub distant ni un niveau `BEHAVIOR PROVEN` non fourni. Les points non mentionnés comme testés restent non vérifiés.

## 1. Résumé d'acceptation

**Accepté par Morris :**
- L'écran **Intégrations 11.06** : rendu visuel, thème, structure, libellés et actions ; « très bien », aucune correction UX supplémentaire demandée.
- Les opérations usuelles autour des dépôts, que Morris confirme fonctionnelles : ajout et rattachement d'un dépôt au projet, visualisation d'un dépôt, navigation dans son contenu, consultation d'un fichier et suppression d'une branche. Ces déclarations valent validation UAT de ces usages, sans nouvelle exécution destructrice demandée.
- La connexion GitHub en lecture et l'affichage du dépôt accessible, observés pendant les parcours.
- Les corrections de géométrie Figma 11.06 (G5) : rapport Cursor PASS ; acceptation visuelle Morris distincte.

**Non accepté / bloquant :**
- Le parcours **depuis la conversation avec Nora** pour publier un document Studio sur GitHub, créer la branche et le commit distant puis restituer le résultat.
- À ce stade, les parcours de PR, push/publication et merge pilotés depuis Nora ne disposent pas d'une preuve de bout en bout et ne peuvent pas être acceptés.

**Décision de portée pour la suite :** ne pas rouvrir l'UX Intégrations ni les opérations de consultation/rattachement déjà acceptées en l'absence de régression. Concentrer le diagnostic et la correction sur le chaînage Nora → Studio → GitHub → retour Nora, dans **un macro-lot intégré**.

## 2. Matrice UAT : scénarios déjà acceptés

| ID | Parcours / résultat utilisateur | Statut | Nature de preuve / réserve |
| --- | --- | --- | --- |
| UX-01 | Écran Intégrations 11.06 — rendu, thème, panneaux, rail, libellés et boutons | **ACCEPTÉ MORRIS** | Retour utilisateur explicite sur capture RECETTE ; G5/F2 PASS rapporté par Cursor sur DEV |
| GIT-01 | Accéder aux intégrations et visualiser la connexion GitHub | **ACCEPTÉ MORRIS** | Usage observé sur capture ; détail technique du provider rapporté séparément |
| GIT-02 | Ajouter / rattacher un dépôt au projet | **ACCEPTÉ MORRIS** | Confirmation utilisateur de fonctionnement ; ne pas demander de nouveau test artificiel |
| GIT-03 | Visualiser un dépôt et son arborescence | **ACCEPTÉ MORRIS** | Confirmation utilisateur |
| GIT-04 | Sélectionner et consulter un fichier du dépôt | **ACCEPTÉ MORRIS** | Confirmation utilisateur |
| GIT-05 | Supprimer une branche depuis le parcours Git prévu | **ACCEPTÉ MORRIS (DÉCLARATIF)** | Confirmation utilisateur ; effets distants/réversibilité non ré-audités dans ce PV ; ne pas rejouer une suppression |
| GIT-06 | Parcourir le dépôt avec les droits réellement autorisés au compte | **ACCEPTÉ SUR PARCOURS OBSERVÉ** | Dépôt `mcleland147/chantiers360` affiché ; couverture multi-dépôts non revendiquée |
| GIT-07 | GitHub REAL WRITE activé en RECETTE | **CONFIGURATION RAPPORTÉE, PAS PREUVE DE PUBLICATION** | `STUDIO_GITHUB_PROVIDER=real`, `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary`, `GITHUB_APP_WRITE_ALLOWED_REPOS=mcleland147/chantiers360` selon contrôles Cursor |

Hors confirmation utilisateur : déconnexion OAuth, plusieurs dépôts simultanés, tests négatifs de sécurité, autres variantes Figma, résistance aux erreurs. Ces scénarios ne sont pas des défauts constatés, seulement des périmètres de non-régression proportionnée.

## 3. Incident bloquant : publication conversationnelle

**Référence :** `UAT-GIT-PUB-01` — priorité P0 pour l'acceptation fonctionnelle E08.

**Projet de l'UAT :** CampusFlow.

**Document D4 visé :** « Références externes — Enseignements de Chantiers360 », **révision 2, contenu inchangé**.

**Dépôt cible explicitement retenu :** `mcleland147/chantiers360`.

**Cible demandée :** racine du dépôt, sur une **nouvelle branche**. Nora a proposé `references-externes-enseignements-chantiers360.md` comme nom de fichier, et indiqué que le nom de branche pouvait être généré. La cible exacte doit être inspectée et gouvernée avant effet, sans ajouter une demande métier inutile.

### Parcours réellement observé

1. Morris demande de publier le document sur une nouvelle branche Git.
2. Nora indique d'abord une indisponibilité de WRITE (avant réactivation de la configuration).
3. Après activation technique du WRITE, Morris réitère sa demande.
4. Nora répond : « Aucune publication n'a été lancée. Précision nécessaire : Chemin de publication Git manquant. »
5. Morris précise : « tu peux le mettre à la racine du dépôt chantiers360 ».
6. Nora reconnaît ensuite le document, le dépôt, la racine et le principe d'une nouvelle branche, et propose un nom de fichier.
7. Morris répond notamment « ok go ».
8. Nora termine : « Aucune publication n'a été tentée pour cette demande. Motif : Intention de publication reconnue — aucun effet Studio n'a été lancé. »

**Résultat observé : FAIL UAT.** La conversation reconnaît l'intention mais n'aboutit pas au lancement de l'effet. Aucun SHA de branche/commit, lien de fichier ou fait D8 de publication n'est présenté. **Le point de rupture exact n'est pas prouvé par la capture** : il reste à localiser entre contexte, qualification sémantique D3, préparation du plan D7, HumanDecision D6, admission, dispatch D9, persistance/reprise et restitution.

**Important :** ne pas transformer le texte de Nora « aucun effet » en audit indépendant du dépôt distant. Avant tout retry mutatif, inspecter les tentatives locales et les faits Git réels pour écarter un effet antérieur non restitué.

## 4. Scénarios de recette à démontrer pour fermer le défaut

| ID | Priorité | Scénario | Résultat et preuve attendus |
| --- | --- | --- | --- |
| PUB-01 | **P0** | Depuis Travail, demander librement la publication du document existant, révision 2 inchangée, sur une nouvelle branche du dépôt déjà sélectionné | D3 conserve document/révision/dépôt ; D7 produit un plan précis et D6 reçoit l'acte utilisateur ; aucune question redondante |
| PUB-02 | **P0** | Fournir successivement « à la racine », puis « ok go » dans la **même conversation** | Le contexte utile persiste ; si l'enveloppe autorise le plan exact, déclenchement D7 ; sinon une clarification précise, jamais « intention reconnue sans effet » terminal |
| PUB-03 | **P0** | Vérifier `documentary` et droits du dépôt `chantiers360` au moment de la tentative | Vérification serveur READ/WRITE, lien projet, identité et mandat D6 ; aucune désactivation silencieuse ni autorité déduite du LLM |
| PUB-04 | **P0** | Publier vers une branche documentaire nouvelle avec chemin et contenu D4 exacts | Branche distante réelle, commit GitHub avec SHA et fichier à contenu/empreinte corrélés à D4 ; les effets sont vérifiés par GitHub et D8 |
| PUB-05 | **P0** | Retour de l'opération dans le même fil Nora | Une seule réponse terminale fidèle : succès vérifié + liens/ref/SHA, échec exact ou état incertain ; ne pas annoncer succès avant fait Git |
| PUB-06 | P1 | Demander explicitement branche + commit + ouverture de PR | PR réelle si le mandat couvre la PR ; numéro, base/head et URL vérifiés ; aucune PR implicite si la demande ne la couvre pas |
| PUB-07 | P1 | Demander explicitement le merge d'une PR documentaire éligible | Mandat D6 distinct, HEAD/base/protections vérifiés, merge réel seulement s'il est autorisé ; preuve GitHub/D8 ; aucun merge implicite |
| PUB-08 | P1 | Répéter la même demande, retry HTTP, timeout ou ACK perdu | Pas de deuxième branche/commit/PR/merge injustifié ; observation distante avant replay ; `UNKNOWN` tant que non réconcilié |
| PUB-09 | P1 | Quitter puis reprendre la conversation après plan/tentative | Contexte et références de mission durables, reprise correcte sans nouvelle mutation, restitution cohérente |
| PUB-10 | P1 | Demande ambiguë (plusieurs dépôts, version ou chemin indéterminable) | Une clarification ciblée avant effet ; pas de blocage générique ni ciblage arbitraire |
| PUB-11 | P1 | Refus GitHub (droits, branche protégée, conflit, révocation) | Refus effectif, sans mutation, expliqué par Nora ; protections conservées |
| PUB-12 | P1 | Demande négative/hypothétique (« ne publie pas ») ou texte Git hostile | Zéro tentative et zéro mandat D6 ; pas de moteur à mots-clés concurrent |
| PUB-13 | P1 | Révision 2 demandée inchangée vs préparation éventuelle d'une révision 3 | Le buffer publié est exactement celui de la révision mandatée ; ne pas créer ou utiliser une autre version |
| PUB-14 | P1 | Publication depuis un autre projet/pilote vers le même dépôt | Isolation projets, sessions, permissions et décisions ; pas de mandat partagé par accident |

**Note opérationnelle :** avec l'API GitHub Contents, publier un fichier crée directement un commit distant ; ne pas inventer un `git push` local comme étape si cette API est utilisée. Dans l'expérience utilisateur « publier/push » désigne l'effet distant observable ; PR et merge restent des opérations distinctes.

## 5. Contrat de diagnostic et de correction Cursor

Un **macro-lot unique**, avec diagnostic avant modification, correction de la cause propriétaire, tests et remise à disposition en RECETTE :

1. Reconstituer **exactement la conversation** et tracer, pour chaque tour, intention D3, contexte durable, plan D7, admission/mandat D6, tentative D7, provider D9, observation D8 et continuation Nora. Partir des logs expurgés et états DB existants, sans inventer d'identifiants.
2. Examiner les chemins existants (`semantic-qualification`, `intent-conduction`, `service`, `mission-continuity`, `cognitiveContinueFromFacts`, `resumeMissionAfterPublicationAuthorize`, publication-effect-restition/dispatch selon code trouvé). Identifier la **cause exacte**, pas seulement la dernière phrase de Nora.
3. Corriger le chaînage contextualisé : résolution du document/révision, dépôt, racine, nom de fichier/branche, admission D6, dispatch D7 et retour D8/D3. Ne pas ajouter de routeur lexical ou de moteur de mission parallèle ; conserver les gardes.
4. Prouver PUB-01 à PUB-05 en déterministe/PG/navigateur, puis REAL/LIVE uniquement sous mandat d'effet valide. Les autres scénarios servent à la non-régression proportionnée. Aucune publication GitHub réelle automatique sur la seule base de ce PV.
5. Synchroniser code, tests, as-built et ce PV ; produire un SHA/TREE/BUILD figé, backup/restore proof, cutover sur la RECETTE existante uniquement selon ENV-01 et GO technique applicable ; rollback prêt.
6. Fournir Review Pack FULL SFIA v2.6 avec créations intégrales et diffs des modifications, publication handoff L3 et revue distante ; aucun push/PR/merge de la branche projet sans GO.

**Critère de sortie :** Nora traite une demande de publication conversationnelle **sans répétition inutile ni faux succès**, et la preuve d'effet distante ne peut être déclarée `BEHAVIOR PROVEN` que lorsqu'elle a été réellement observée sur le dépôt autorisé.

## 6. Gouvernance et gates ouverts

- **UX Intégrations : ACCEPTÉ MORRIS** ; ne pas modifier le design 11.06 sans nouvel écart démontré.
- **Rattachement/lecture/consultation/branche : ACCEPTÉ MORRIS déclaratif**, maintien en tests de non-régression.
- **Publication conversationnelle : FAIL UAT**, incident bloquant E08.
- **Configuration GitHub REAL WRITE : active selon rapport Cursor**, mais `REAL WRITE END-TO-END NOT PROVEN`.
- **Nora LIVE, PR et merge via conversation : NOT PROVEN**.
- **RECETTE candidate : disponible pour poursuite UAT** ; pas d'acceptation globale de l'Ensemble 08.
- **Git candidat local** `f1907aad...` non accessible sur `origin/main` ; le présent PV documentaire n'en certifie pas l'intégration.
- **Push projet / PR / merge / STABLE / ADOPTED : non autorisés par la publication de ce PV**.

## 7. Références et traçabilité

Sources à relire à leur ref applicable lors du cycle technique :

- `projects/sfia-studio-next/governance/SEF.md` ;
- `projects/sfia-studio-next/governance/roadmap.md` ;
- `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md` ;
- `projects/sfia-studio-next/governance/product-versioning.md` ;
- `projects/sfia-studio-next/governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md` ;
- `projects/sfia-studio-next/conception-fonctionnelle/integration-git-gouvernee.md` ;
- `projects/sfia-studio-next/conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` ;
- contrat fonctionnel E08 candidat sur `docs/next-ensemble08-contrat-fonctionnel-20261121` ;
- contrat architecture/acceptation E08 candidat, même ref ;
- `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff@728f3c82cbec4f53368e32ce6995ba8487054cf0` ;
- captures UAT remises par Morris dans la conversation du 22 novembre 2026 (non intégrées à ce commit documentaire) ;
- principes de preuves : **DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED** ; SCRIPTED ≠ LIVE ≠ REAL.

---

**Verdict PV du 22/11/2026 : ACCEPTATION PARTIELLE — publication Git conversationnelle BLOQUANTE.**

Ce PV enregistre des constats de recette et un plan de tests ; il ne publie aucun code ni aucune décision normative.

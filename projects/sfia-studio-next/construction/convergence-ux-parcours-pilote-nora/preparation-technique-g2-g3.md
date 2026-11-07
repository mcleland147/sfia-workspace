# SFIA Studio Next — Préparation technique de la convergence UX ML1–ML3 (G2 / G3)

**Statut : D0 — préparation technique G2/G3 CANDIDATE / F1-Inspection 244 VALIDATED SPEC / G2 PARTIAL / G3 NOT VALIDATED / PROMPT CURSOR NOT GENERATED.**
**Date :** 2026-11-07. **Git distant :** `mcleland147/sfia-workspace`, `main@f22367572c046ff12b024fe6c0b7de6a47c94abb`.
**Travail local et runtime exposé :** NON OBSERVÉS. **Aucune modification Git, Figma, API, code, DB, CI ou Cursor pendant cette préparation.**

## 1. Résultat et séquence souveraine

**Résultat Pilote :** se connecter et retrouver ses projets et préparations, reprendre une préparation existante sans la recréer, poursuivre le travail avec Nora, consulter et réviser les documents protégés, retrouver le journal/connaissance, les cycles/méthodes/décisions, et naviguer sans perte de contexte. L'ensemble doit correspondre aux écrans Figma applicables avec fidélité de géométrie, de style et de comportement démontrée.

**Nature :** un macro-résultat transversal R5, portant sur le runtime construit de ML1–ML3. **IN :** shell, portefeuille/sas/projet, D3 Nora, D4 documents/connaissance, D5/D6 pilotage, navigation, erreurs, mobile, tests et documentation as-built. **OUT :** GitHub App/effets D7, preuves D8 avancées, Cursor comme capacité produit ML5, permissions Git inventées, migration ou moteur d'autorité concurrent, reconstruction de toutes les 242 frames, nouvelle doctrine.

**Ordre :** convergence UX ML1–ML3 → construction technique ML4 Git → ML5 Cursor → qualification R6. La préparation ML4 Git et ses écrans 218–235 sont déjà intégrés/validés au **niveau conception**, mais aucun effet ML4 n'est à exécuter dans la convergence UX.

**Décisions Morris en vigueur :** A1/A2/A3 et P1/P2/P3/F1/F2 `VALIDATED SPEC` sur leur objet ; [record Git](https://github.com/mcleland147/sfia-workspace/blob/f22367572c046ff12b024fe6c0b7de6a47c94abb/projects/sfia-studio-next/governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md). Les 16 CU et 14 UXC sont des oracles **NOT RUN**, pas des preuves.

## 2. Constats vérifiés sur `main` et frontières de réalisation candidates

| Propriété | Constat Git réel | Conséquence proposée pour le futur contrat Cursor |
| --- | --- | --- |
| D1 / Portefeuille | `domains/identity/portfolio.ts` retourne projets + **compteur** `openPreparations`. Le compteur écarte les préparations liées, mais n'exige pas explicitement le `status='OPEN'`. | Construire une **projection de lecture propriétaire**, filtrée `ownerPilotId`, `status=OPEN` et absence de lien projet ; tri `createdAt DESC`, puis `id`. Conserver le compteur si encore consommé et aligner sa sémantique ; contrôle session et erreurs explicites. |
| D2 / Sas | `POST /api/preparations` **crée** un sas ; `GET /api/preparations/[preparationId]` recharge l'ID connu sous ownership. | **Reprendre = GET/navigation vers ID existant**, jamais POST ; nouveau sas = action séparée. L'extension de `GET /api/portfolio` avec collection bornée paraît l'option la plus simple, **API encore candidate, non décidée**. |
| D2 / Modèle | `preparations` comporte statut `OPEN/ATTACHED`, `createdAt`, ownership ; `preparationProjectLinks` existe. | Pas de migration par inertie ; contrôle des désaccords statut/lien et des races avec création de projet. Préciser taille, tri, données exposées et éventuelle pagination au moment du contrat d'API. |
| D4 / Documents | Le sas propose `savePreparationDocument` via la route de collection et `reviseDocument` via route ciblée. Dans `reviseDocument`, `baseRevisionId`, verrou, 409 `BASE_STALE` et `correlationKey` existent. | Depuis la page projet, **révision D4 ciblée** en conservant la version de base, la clé d'intention, le diff et l'historique. **Pas de deuxième éditeur métier**. Le contrat d'UX doit distinguer création initiale, révision, conflit, résultat UNKNOWN et retour au fil. |
| D4 / Retry | Le service de révision rapproche les appels par `correlationKey` ; le chemin générique sauvegarde et la révision ciblée n'ont pas des sémantiques de concurrence identiques. | Tester les réémissions avec **même clé et même contenu**, et le cas « même clé, contenu différent ». Toute évolution de sémantique D4 est un impact contractuel à qualifier, pas un correctif cosmétique implicite. |
| D3 / Rendu | `SafeMarkdown.tsx` échappe le HTML et couvre listes, liens, tableaux, titres et code. | Préserver ce rendu sûr, tester le contenu hostile/long ; aucun Markdown émis par Nora n'exécute HumanDecision, D5/D6, Git ou Cursor. |
| D5/D6 / Pilotage | UI dense dans `components/PilotagePanel.tsx` avec services/cycles/décisions/restrictions déjà implémentés. | Recomposition par responsabilités et états réels, **sans changer la source d'autorité** ni déclencher de commande sur simple navigation. |
| Navigation / Responsive | `web/src/app/layout.tsx` affiche un rail 246px `hidden md:flex`, sans alternative mobile identifiée. | Composant shell unifié avec navigation mobile et clavier, liens profonds, retour au projet/sas/document, états indisponibles explicites. |
| Tests existants | `tests/e2e/ml1-smoke.spec.ts`, `ml2-smoke.spec.ts`, `ml2-c3-stable-key.spec.ts`, `ml3-pilotage.spec.ts`, suites Vitest PG/unit, CI Next. | **Élargir les suites existantes** et faire une recette intégrée, sans framework QA parallèle ; vérifier isolation de la lane E2E (port 3101, DB propre, Nora FAKE). |

**Point sensible d'API :** `POST /api/preparations/[preparationId]/documents/[documentId]` rejette actuellement une chaîne `contentMarkdown` vide via une condition de vérité ; préciser si la suppression de tout contenu est autorisée, et ne pas la présenter comme supportée sans contrat. Aucun comportement n'a été testé en environnement réel pendant ce travail.

## 3. G2 — Audit natif Figma, complément de vérification du 2026-11-07

**Figma :** fichier `itgvCulInEnFY6DvgIegvP`, page `94:49`. Extraction via API native **en lecture seule** ; ni version figée ni snapshot immuable n'a été obtenu. Le pack Git actuel contient L1 11 frames et L2 **8 frames / 55 nœuds**, **PARTIAL**.

L'inventaire complémentaire suivant **compte les descendants Figma mais ne constitue pas leur extraction L2** :

| Écran R3 | ID Figma | Nœuds présents (inventaire) | Priorité de transposition |
| --- | --- | ---: | --- |
| 01 Portefeuille | `94:50` | 89 | P1, shell personnel, projets et préparations |
| 02 Sas | `94:135` | 80 | Création, conversation, aperçu et continuité |
| 03 Nora conversation longue | `94:214` | 164 | Shell conversation, fil, panneau contextuel, composition |
| 04 Document consulté | `94:370` | 149 | Inspection documentaire et navigation |
| 05 Journal | `94:515` | 114 | Sujets et décisions |
| 24 Cycle actif/CKI | `127:106` | 72 | Pilotage et méthode |
| 40 Décisions | `129:72` | 77 | Journal HumanDecision |
| 74 Préparation retrouvée | `159:145` | 71 | Reprise de sas |
| 89 Bibliothèque documentaire | `160:175` | 72 | P2, document et versions |
| 92 Révision concurrente | `160:391` | 71 | P2, 409 et reprise |
| 216 Nora mobile travail | `282:468` | Voir Figma natif | P3, mobile 390 px |
| 217 Nora mobile interruption | `282:492` | Voir Figma natif | P3, reprise mobile 390 px |

**Ces totaux sont des inventaires de hiérarchie, pas des preuves de propriétés complètement extraites.** Les surfaces qui partagent un composant ne requièrent pas la duplication mécanique de chacune des centaines de feuilles Figma : construire une matrice **composant → nœuds source canoniques → variantes / états / valeurs L2 → oracle navigateur**, puis instancier les variantes.

### F1 — variante « inspection » 244 px constatée et validée par Morris

La décision F1 valide **trois variantes** de rail : `personnel=246 px`, `projet=246 px`, `conversation=240 px`. Un inventaire natif de **234 écrans numérotés** révèle **204 écrans à rail 246 px**, **15 à rail 240 px**, **3 à rail 244 px** et **12 sans rail latéral correspondant** (notamment les variantes mobiles). Les trois écrans à 244 px forment une même famille de consultation/inspection :

- Frame **04** (`94:370`) : navigation `94:372` = **244 px** ; surface commence à x=244 ; padding du rail `23/19/22/19`, gap **11**.
- Frame **18** (`97:359`) : navigation `97:361` = **244 px** ; composition cohérente avec 04.
- Frame **19** (`100:39`) « Rapport et preuves — inspection » : navigation `100:41` = **244 px**, même famille ; **frame D8 hors convergence UX ML1–ML3** mais à préserver comme référence future.
- Frames **89** (`160:175`) et **92** (`160:391`) : navigation projet = **246 px** ; hiérarchie et contenus du rail distincts des écrans 04/18/19.

**F1-244 VALIDATED SPEC** : les écrans 04/18/19 appartiennent à une famille native « inspection » distincte des rails de projet standard, au sein d'un même composant partagé. Les normaliser automatiquement à 246 px violerait la fidélité demandée ; ajouter une variante sans décision violerait F1. **Décision Morris : F1 est étendu à la quatrième variante `inspection=244 px` au sein du *même composant* de navigation, avec paddings/gaps natifs ; aucun deuxième moteur de navigation.** Amendement enregistré dans [la décision canonique](../../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md). Option alternative : retoucher les trois frames Figma 04/18/19 à 246 px avec mise à jour géométrique contrôlée et validation UX ; ne jamais faire seulement l'un des deux côtés. **Aucune modification Figma ou Git n'est effectuée ici.**

### Autres vigilances G2

- Certaines maquettes de conversation et mobile comportent des liens « Sources Git », « Résultats et preuves » alors que ces capacités ne sont pas opérationnelles dans ML1–ML3. **Conserver l'intention UX mais ne pas laisser un lien fonctionnel fictif.** Statut visuel disabled/à venir à spécifier et valider dans le DIP.
- Figma mobile 216/217 : référence **390 px de large**, et planche 1350 px de haut, **pas** une hauteur navigateur. Rejouer en navigateur réel à 390×844 et 320×568 (le second n'est pas une frame Figma observée).
- Pour les seuls composants qui seront construits, figer **L0 identification**, **L1 hiérarchie / coordonnées parents**, **L2 styles/texte/auto-layout/constraints/composants/variants/assets**, puis **oracle export Figma + digest** ; conserver le SHA Git et l'identifiant de la variante.
- **F2 VALIDATED SPEC** : cible delta 0 CSS px, maximum 2 CSS px pour rectangles stables dans les mêmes conditions ; l'anticrénelage et la rasterisation des polices nécessitent une **calibration régionale de comparaison d'image**, non un seuil inventé. Le test doit refuser chevauchement et clipping quel que soit le score d'image.

### Gate G2 proposé (test de sortie)

**PASS** si, pour chaque composant/état du lot, la fiche correspondante indique `frameId + nodeId + parent chain + viewport + fixed/hug/fill + x/y/w/h + padding/gap + typographie complète + tokens/colors/strokes/radius/effects + overflow + state + interactions réellement disponibles + asset/digest si requis`, avec screenshot Figma de référence figé, et si le rail documentaire F1-244 est arbitré. **Sinon G2 PARTIAL ; pas d'instruction à Cursor d'inventer les valeurs manquantes.**

## 4. G3 — Candidat d'organisation technique (non spécification autorisée)

**Un seul macro-résultat**, avec trois sous-parcours intégrés et leur test commun, pas trois cycles documentaires :

1. **Entrer et reprendre** : shell + identité/portefeuille + projet/sas + A1 ; contrat d'une **projection de lecture** sûre, statut/lien, tri, reprise sans POST, 401/404 et continuité.
2. **Travailler et capitaliser** : Nora + SafeMarkdown + documents D4 et journal ; révision protégée A2, historique, conflits, retour au fil, contenu malveillant et états incertains.
3. **Piloter et décider** : cycle/CKI et D6 via composants réorganisés sans changer l'autorité. Tests de commandes et restriction déjà gouvernées.

**Intégrateur** : un seul responsable de cohérence UI/API/QA sur le lot, à affecter à Cursor dans son mandat ; les éventuels sous-travaux ne peuvent être parallélisés que sur fichiers et contrats disjoints, avec intégration et tests de bout en bout communs.

**Blast radius candidat :** `web/src/app/layout.tsx`, `globals.css`, pages `portfolio`, `preparations/[preparationId]`, `projects/[projectId]`, `components/PilotagePanel.tsx`, `SafeMarkdown.tsx`, `domains/identity/portfolio.ts`, `domains/preparation/service.ts`, les **routes de lecture nécessaires** A1, la route de révision D4 existante, types, tests `unit/integration/e2e`, documentation as-built R5. **Pas de migration présumée** ; si la seule UI nécessite une migration, STOP et justification. Pas d'écriture dans `method/` ni `prompts/`.

**Invariants de contrôle :** deux Pilotes/deux projets isolés, absence de nouvelle préparation sur reprise, `baseRevisionId` et `correlationKey`, pas de décision par Nora, états normal/empty/blocked/unknown, cycles facultatifs, intégration responsive, accessibilité, chemins de retour fonctionnels et permissions liées aux vrais services.

**QA cible :** les quatorze `UXC-01..14` sur le même SHA candidat, tests unitaires et PostgreSQL, E2E Playwright ; captures DOM / computed style et screenshots de référence aux viewports 1680/1280/390/320 + zoom 200 %, clavier et longue conversation ; cas de refus et de reprise ; Nora LIVE **seulement pour les surfaces cognitives réellement modifiées et dans la lane approuvée** (pas de LIVE sur la lane E2E FAKE).

## 5. ENV-01, versioning et protocole Cursor à appliquer plus tard

Les règles **ENV-01** et **product-versioning** ont été relues sur `main@f22367572c...`. Elles sont validées en contenu. Le statut effectif des lanes actuelles DEV/RECETTE/STABLE, les bases, build IDs, version candidate et le worktree Cursor sont **NON OBSERVÉS** ici : ils doivent être vérifiés à l'ouverture d'un mandat D3. La dernière STABLE **n'est pas établie par les vérifications présentes** ; ne pas en inventer.

**Proposition de classement version :** évolution de parcours UX compatible, **MINOR candidate sous réserve de l'analyse d'API/versioning** ; si l'API ou un parcours essentiel devient incompatible, requalifier en MAJOR et soumettre à Morris. Le contrat de release reste conditionné aux manifestes ENV-01 et aux gates.

**Routage :** guide `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.0b et template `prompts/templates/sfia-cycle-execution-template.md` **SFIA v2.6, tous deux lus depuis Git**. Profil **Critical recommandé à qualifier** pour un changement transverse D1–D6 comportant accès/ownership et révisions concurrentes ; éviter un profil Standard insuffisant par défaut, mais ne pas supposer qu'un profil entraîne une décision d'architecture. Review Pack et Review Handoff obligatoires selon le routage, publication mono-fichier autorisée et prouvée, aucune mutation de `main` ni PR/merge sans GO Morris propres.

**Aucun prompt Cursor maintenant** : la préparation de G3 reste candidate ; il manque l'arbitrage F1-244 (inspection) et la complétude du DIP G2, puis les signatures, états, QA, bornes et STOP exacts du contrat d'exécution.

## 6. Transition vers le nouveau chat — condition de déclenchement

Dans **ce chat**, terminer : (1) écart F1-244, (2) source Figma figée et DIP L2 ciblé, (3) spécification de construction G3 avec blast radius, risques, tests et modalités ENV/version, (4) revue Morris et GO technique distinct. **Alors seulement** produire un **bloc Cursor SFIA v2.6 unique et complet**, accompagné d'un **prompt de reprise séparé** contenant la baseline Git actuelle, les décisions, preuves, interfaces et points ouverts, et la trajectoire **convergence → ML4 Git → ML5 Cursor**.

**Ne pas afficher « READY FOR CURSOR » tant que G2/G3 et les autorisations requises ne sont pas effectivement satisfaits.**

## 7. Suite après décision F1 et publication documentaire (2026-11-07)

**F1-Inspection est VALIDATED SPEC**, avec nav 244 px (04/18/19), padding top/right/bottom/left 23/19/22/19 et gap 11 ; ne modifier aucune autre variante et ne pas créer de moteur UI concurrent. Le [contrat UX v0.5](contrat-acceptation.md), la [décision](../../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md) et [l'observation nav Figma](../../ux-ui/releves-geometriques-convergence-l2-partiel.json) sont les références courantes ; les remarques « F1 non arbitré » au-dessus ont valeur **historique** uniquement.

**G2 PARTIAL** : faire compléter les descendants, les états et variantes du lot, les exports immuables/digests, les mappings CSS et la calibration du différentiel image. **G3 CANDIDATE** : le présent document qualifie les APIs et le blast radius, mais ne remplace pas la spécification technique et l'instanciation SFIA v2.6. **G4 NOT AUTHORIZED** : le GO de publication documentaire/merge n'est pas un GO de code, de mise à disposition RECETTE ou de travaux Cursor.

**Prochain gate :** qualification définitive G2/G3 (avec ENV-01/versioning au SHA réel, profil SFIA, intégrateur, fichiers allowlist et STOP), validation du contrat technique par Morris puis **GO Cursor distinct**. Un prompt de reprise vers un nouveau chat peut être remis avant ces validations, mais **pas un prompt Cursor présenté comme prêt à exécuter**.

---

## 8. Consolidation G2/G3 après validation de la direction Morris (2026-11-07)

**Source courante (2026-11-07) :** la revue et la consolidation techniques de ce dossier sont maintenant enregistrées dans les pièces suivantes, **sans créer de nouvelle autorité documentaire** : [G2 — protocole de préflight Figma](protocole-preflight-source-figma.md), [G3 — contrat technique de construction v1 candidat](contrat-technique-convergence-ux.md) et [revue des gates G2/G3](revue-gates-g2-g3.md). Les formulations des §5–7 ci-dessus qui décrivent F1-244 comme « restant à arbitrer » sont antérieures à la validation Morris et ne sont pas applicables.

**Statut après validation Morris :** G1 `VALIDATED SPEC` pour A1–A3/P1–P3/F1 quatre variantes/F2 ; **orientation G3 approuvée en principe**, mais contrat technique encore **CANDIDATE** sur la volumétrie A1 et le lien profond A2. G2-`Source PARTIAL` : L2 incomplet, export Figma et SHA-256 non archivés. G5 calibration visuelle sur première paire source/runtime, `NOT RUN`. **Aucun GO d'écriture Cursor** ; un futur mandat pourra autoriser un préflight bloquant avant toute écriture d'interface, suivi de la construction uniquement si G2 est prouvé et G3 finalisé.

# SFIA Studio Next — Contrat technique de construction de la convergence UX

> **Mise en dépôt (2026-11-07) :** document D0 de préparation relu et accepté par Morris dans sa direction. Les mentions « candidat », « aucune écriture Git » ou « non publié » décrivent son état au moment de la rédaction ; la publication ne vaut pas complétude G2, validation de chaque choix G3, autorisation D3 ou preuve navigateur. Les arbitrages A1–A3/P1–P3/F1/F2 restent ceux de la décision canonique.

**Version de préparation :** v1.1 D0 — **modalités techniques A1 et A2 VALIDATED SPEC par Morris (2026-11-07)** ; reste un dossier de construction pré-Cursor, non prompt SFIA ni GO d'exécution.
**Référence Git vérifiée :** `mcleland147/sfia-workspace`, `main@968f74be7e36d5387487fae0eeec85b702d074e2` ; **état de la machine Cursor / branches locales : NON OBSERVÉ**.
**Sources normatives et de recette :** SEF v0.2, Roadmap Next, décisions A1–A3/P1–P3/F1/F2, contrat UX v0.5, protocole de transposition R3, `UXC-01..14`, ENV-01, versioning produit, guide routing et template SFIA v2.6, tous à **relire sur la ref Git effective** avant toute exécution.

## 1. Résultat et organisation

**Résultat utilisateur unique :** le Pilote peut accéder à son portefeuille et aux préparations ouvertes, reprendre sans nouveau sas, naviguer entre projet, Nora, documents, journal, trajectoire et décisions, réviser un document sous D4 et conserver son contexte, avec rendu réellement conforme au contrat Figma mesuré et avec preuve. **Un macro-résultat intégré** code + tests + documentation ; le séquencement interne est fondé sur la dépendance des composants (shell commun, parcours A1/A2, projection D5/D6), pas des micro-lots documentaires par écran.

**IN :** D1 portefeuille, D2 sas/projet, D3 présentation Nora existante, D4 documents/connaissances, D5 cycle/méthode/CKI, D6 décisions/restrictions, layout/navigation quatre variantes F1, accessibilité, responsive et comparaison F2. **OUT :** GitHub App, nouveaux effets Git, D7–D9, ML4 technique, ML5 Cursor produit, nouveau moteur Nora de commandes, seconde autorité D4/D5/D6, migration DB sans justification, release/STABLE/ADOPTED.

**Intégrateur :** une responsabilité Cursor unique du macro-résultat et de la QA intégrée, sans paralléliser les écritures sur `layout.tsx`, `globals.css` et routes projet. **Autorité :** Morris pour GO, gates et Git ; Cursor exécute D3 ; ChatGPT revoit le Review Pack.

## 2. Contrats d'interface à réaliser

### 2.1 A1 / P1 — projection de lecture et reprise sans mutation

**Source code actuelle :** `web/src/domains/identity/portfolio.ts` calcule un **compteur** à partir des préparations du Pilote sans filtrer `OPEN` explicitement ; `GET /api/portfolio` expose le compteur, `POST /api/preparations` crée, `GET /api/preparations/{id}` relit sous ownership. Table `preparations` : `id`, `ownerPilotId`, `status`, `previewName`, `previewSummary`, `createdAt`, `updatedAt`, avec `preparationProjectLinks`.

**Contrat proposé** : étendre **`GET /api/portfolio`** de façon additive, sans deuxième endpoint de liste par défaut, avec `portfolio.preparations` propriété dérivée de **`ownerPilotId = session.pilotId AND status='OPEN' AND NOT EXISTS link`**. La propriété `openPreparations` et la liste doivent avoir la même définition canonique. Ordre `createdAt DESC, id DESC` stable ; champs autorisés `id`, `previewName`, `previewSummary`, `createdAt ISO`, `status='OPEN'`. Libellé neutre si aperçu vide. Ne jamais montrer un état « récemment modifié » fabriqué.

**Modalité A1 validée Morris** : pagination serveur bornée à **25 préparations par page** avec curseur keyset opaque et vérifié, sur `createdAt DESC, id DESC`. Charger jusqu'à 26 lignes pour établir l'existence d'une page suivante ; garder le count total du même prédicat owner/OPEN/non-rattaché, sans fuite entre Pilotes. L'API reste additive et aucun nouveau endpoint n'est créé. Voir §7. **Aucun POST** lors de « Reprendre ». Le POST existant reste dédié à « Nouvelle préparation ». Vérifier double clic sur création et navigation interrompue : idempotence ou récupération du résultat, sans changement D2 non borné.

**États HTTP et UI attendus :** 200 portfolio `{kind:empty|ready|unavailable}` fidèle au contrat, 401 session expirée, 404 non révélateur lors de reprise d'une ID étrangère/inconnue ; erreur DB distincte du vide (ne pas afficher zéro à la place). Une préparation devenue `ATTACHED` entre listing et ouverture est relue côté serveur : si projet autorisé, naviguer vers lui ; sinon échec neutre. Pas de restauration depuis un ID client sans contrôle serveur.

### 2.2 A2 / P2 — projet → bibliothèque → inspection → révision

La page projet `web/src/app/projects/[projectId]/page.tsx` possède déjà `preparationId` sous contexte projet et une inspection en lecture. La route existante **`POST /api/preparations/{preparationId}/documents/{documentId}`** appelle `reviseDocument` avec `action='revise'`, `baseRevisionId`, `contentMarkdown`, `correlationKey`, et donne `409` pour `CONFLICT / BASE_STALE` ; conserver la **même autorité D4** et le contrôle de version atomique. La création initiale via `savePreparationDocument` reste une action distincte ; ne pas reconduire son chemin générique comme une révision protégée.

**Machine d'états front candidate :** `READING → EDITING → SAVING → AVAILABLE` ; `SAVING → CONFLICT (409)` avec lecture de la version la plus récente, préservation de la proposition et choix humain explicite ; `SAVING → UNKNOWN` lors d'une perte d'ACK, résolution par **relecture du résultat corrélé avant retry** ; `FAILED` classé par accès/données/service, sans succès supposé. Un même `correlationKey` identifie une même intention, ne pas générer une clé neuve au retry. `GET` de versions/diff existant comme source de vérité ; projet et préparation doivent être reliés sous ownership serveur.

**Constat à corriger dans le blast radius :** la route D4 `GET` et `POST` contient un `catch` qui peut renvoyer **401** pour une erreur autre que la session ; distinguer 401 authentification, 404 non-propriété/absence, 409 base périmée, 400 payload, 500 erreur interne contrôlée sans fuite. Toute modification du comportement API exige tests de compatibilité et sécurité ; ne pas modifier les statuts D4 par effet UX involontaire.

**Modalité A2 validée Morris** : lien profond **`/projects/{projectId}?surface=document&documentId={documentId}`**, qui ouvre **l'inspection en lecture seule** sous ownership serveur projet/document. L'action explicite « Réviser » ouvre ensuite l'éditeur ; aucune mutation à l'ouverture, au refresh ou lors de la navigation arrière. Conserver le retour au fil et le document sélectionné ; le lien profond ne crée aucune autorité métier. Voir §7.

### 2.3 A3, D5/D6 — présentation sans autorité nouvelle

**A3** : réutiliser `SafeMarkdown`, conserver le HTML échappé, interdire que des contenus de conversation créent des boutons mutateurs actifs ou un exécuteur d'actions. Tester liens (`http/https` autorisés selon implémentation), tableaux étendus, code long, contenu hostile et choix/activité réels. Les contrôles D5/D6 restent liés aux services existants et à `HumanDecision` ; la navigation ne décide rien et ne change aucun cycle à son affichage. Pas de lien fonctionnel Git/ML4 créé dans ce lot.

### 2.4 F1/F2 — responsabilité unique du shell et fidélité démontrable

**Quatre variantes F1 approuvées** du même composant Navigation : `personnel` 246 px, `projet` 246, `conversation` 240, `inspection` 244 à 1680 ; prendre les paddings/gaps/couleurs et textes **des nœuds Figma**, sans normaliser arbitrairement : personnel `94:51` #0C101A/20-19-0-19/gap10, conversation `94:215` #0D111B/25-19-0-19/gap13, projet `160:176` #0C1020/24/gap13, inspection `94:372` #0C101A/23-19-22-19/gap11. Frame 19 de référence graphique **hors périmètre fonctionnel D8**.

**Écran 89 / grille** : panneau central x285/y254/1330×585, colonnes 800 + gap20 + 510, padding panneaux 18 et gap 12. **Fonte :** Figma Inter Semi Bold 600 32px pour les titres ; CSS global actuel ne configure pas explicitement Inter. Le contrat de réalisation devra sélectionner une source de police permise et disponible en build isolé, mesurer `font-family`, poids, tailles, line-height et largeur après chargement ; ne pas reproduire la mise en page sur une police de substitution non déclarée. Aucun fichier de fonte à republier sans droits.

**F2 validé** : objectif 0 CSS px, tolérance ≤2 CSS px sur rectangles stables à fixture, viewport, fontes et état comparables ; 0 action masquée, collision, scroll horizontal de page inattendu ou troncature non voulue. **Le taux global de différence d'image reste non validé** : proposer un oracle localisé, calibré avec une première paire runtime, sans relâcher F2.

**Responsive** : desktop 1680×970 et 1280×970 ; mobile 390×844 / 320×568 + zoom navigateur 200 %. Les screens Figma 216/217 mesurent **390×1350 en planche**, non en viewport ; utiliser header 390×73/padding16, scroll naturel. Au 320, exigence de reflow fonctionnel et accessible, **pas** revendication « pixel-perfect Figma 320 » inexistant. Rail caché doit être remplacé par navigation utilisable au clavier/lecteur d'écran. Les maquettes mobiles affichant « Sources Git » restent une **référence visuelle hors fonction ML4**, pas un lien actif.

## 3. Gates d'entrée, STOP et ordre exécutable

| Gate | Condition vérifiable | État courant |
| --- | --- | --- |
| G0 — Git Truth | repo/ref/base et HEAD, `git status`, staged/untracked, diff, décision, état local, lanes et secrets (sans les imprimer) | Git distant OK ; local NON OBSERVÉ |
| G1 — produit | décisions A1–A3 / P1–P3 / F1 quatre variantes / F2 | **VALIDATED SPEC** |
| **G2-Source** | pour chaque composant à modifier : L2 complet + références PNG Figma natives hashées + états/fixtures/source stables ; zéro mesure critique `UNRESOLVED` | **PARTIAL / BLOCKING FOR UI CODE** |
| G3 — contrat de construction | interfaces A1/A2, états/ownership, UI, tests, source de police, frontières, intégrateur, `STOP`, détails ENV-01/versioning | **v1.1 : modalités A1/A2 VALIDATED SPEC par Morris ; instanciation opérationnelle SFIA/ENV/allowlist et préflight G2 encore à vérifier** |
| G4 — mandat Cursor | GO technique explicite et borné ; cycle SFIA v2.6 instancié depuis Git, profil justifié, fichiers allowlist et Review Handoff ; pas de push/PR/merge projet sans GO séparé | **NO GO** |
| G5 — preuves | UXC-01..14, PG/HTTP/BROWSER, comparaison DOM/image sous même SHA, audit réel, revue Morris | **NOT RUN** |

**Règle de séquence :** si un cycle Cursor ultérieur est approuvé pour préflight + construction, **aucun fichier d'interface ne doit être modifié avant G2-Source réussi pour les composants concernés**. Si les exports Figma ne peuvent pas être archivés ou si des valeurs critiques restent absentes : **STOP de construction**, rapport G2, pas d'estimation de géométrie. La comparaison image/DOM n'est possible qu'**après** un premier rendu, et son calibrage relève de G5, sous validation de Morris ; elle ne remplace pas les mesures source de G2.

**STOP supplémentaires :** ownership ambigu, leak inter-Pilotes, migration non prévue, nouveau moteur documentaire/décisionnel, route Git fictive, modification de la doctrine/SEF, accès non isolé à RECETTE/STABLE, variable sensible logguée, erreur DB présentée comme 401, diff non corrélable au bon SHA/fixture, snapshot Figma non traçable. La modification d'un composant partagé implique retest de toutes ses variantes et non une correction locale par marge artificielle.

## 4. Fichiers impactés et preuves attendues

**Périmètre candidat de modifications techniques (à confirmer par Git Truth Check Cursor) :** `web/src/app/layout.tsx`, `web/src/app/globals.css`, `web/src/app/portfolio/page.tsx`, `web/src/app/preparations/[preparationId]/page.tsx`, `web/src/app/projects/[projectId]/page.tsx`, `web/src/components/PilotagePanel.tsx`, `web/src/components/SafeMarkdown.tsx`, composants de navigation/docs responsables à créer dans `web/src/components/`, `web/src/domains/identity/portfolio.ts`, API portefeuille, préparation/projet et révision D4 **seulement si nécessaires**, tests sous `web/tests/{unit,integration,e2e}`, docs as-built/convergence et preuves. **La liste n'est pas un mandat d'écriture Git automatique.** Interdit : migrations/scripts DB sans justification et GO, répertoire ML4 Git/D7–D9, `method/`, `prompts/`, `governance/decisions/`, publication d'une PR, merge, reset/promotion.

**Chaîne QA unique sur SHA candidat :** TypeScript, lint, build, Vitest unit et PostgreSQL d'intégration, Playwright BROWSER FAKE en lane isolée, vérifications HTTP owner/403/404/409/401, tests A1 double clic/refresh et A2 version concurrente/retry même clé ; clavier/zoom/contraste, captures Figma/DOM/region diffs ; Nora LIVE ciblé **si** cognition réellement modifiée, sous lane autorisée. Le Playwright actuel tourne sur `127.0.0.1:3101`, `reuseExistingServer=false`, Nora FAKE, DB E2E isolée ; ne jamais prendre le runtime opérateur DEV pour sauter la configuration.

| UXC | Oracle principal |
| --- | --- |
| 01–03 | identité/expiration, portefeuille et reprise sans POST, création explicite et fil identique |
| 04–07 | Nora/Markdown sûr, documents D4 révision/versions/conflit, sujets/provenance |
| 08–10 | état sans cycle/méthode, CKI/cycles réels, restrictions et HumanDecision D6 |
| 11–12 | UNKNOWN et idempotence, accès 2 Pilotes/2 projets et cross-route |
| 13 | source Figma PNG hashée, DOM rect/style, 1680/1280/390/320/200 %, 0 collision et <=2 CSS px rectangles stables |
| 14 | intégration QA au même SHA ; aucun Git/Cursor/ADOPTED simulé |

## 5. Autorisations, versioning et handoff

**ENV-01 :** DEV en worktree isolé ; RECETTE figée sur un SHA, avec DB/sessions/config indépendantes ; STABLE non supposée disponible ou équivalente à `main`. Ne jamais lancer une migration, une mise en RECETTE ou un effet Git sur autorisation implicite. **Version produit** : `NO RELEASE` tant qu'aucune livraison candidate n'est décidée ; évolution UX compatible = classe `MINOR` candidate, mais n'inventer ni version STABLE ni tag. Les sources applicables doivent être relues sur `main` à la génération finale du prompt.

**SFIA v2.6 :** profil **Critical à justifier** (D1 identité, D4 concurrence, D6 autorité + shell transversal), tout en respectant le routage et le template Git en vigueur. Review Pack complet couvrant code/modifications/diff, preuves/risques/UXC/STOP ; **Review Handoff required + publish-in-cycle** mono-fichier sur `sfia/review-handoff` selon le template, FF/lecture distante et retour branche. Push de branche projet, PR, merge, publication Figma et promotion restent hors mandat sans GO Morris spécifique. Pas de template parallèle.

## 6. Sortie attendue avant nouveau chat

- **G2-Source READY**, ou protocole d'acquisition G2 préflight explicitement autorisé et **bloquant avant le code** ; prouver l'archive PNG+SHA et extraction des descendants à mesure qu'ils sont codés.
- Contrat G3 révisé et approuvé Morris sur périmètre et gates. Branch/HEAD/statut local restent vérifiés par Cursor, non inventés ici.
- Prompt Cursor **unique** instancié sur base des deux sources SFIA v2.6 Git, avec gates et STOP ; GO technique distinct.
- Prompt de reprise du nouveau chat conservant la trajectoire **convergence UX ML1–ML3 → ML4 Git → ML5 Cursor**, décisions, SHA et réserves.

**Verdict courant : `G3 v1.1 — A1/A2 MODALITIES VALIDATED SPEC / G2-SOURCE PARTIAL & BLOCKING FOR UI CODE / G4 NO GO CURSOR / G5 NOT RUN`.** La validation documentaire ne prouve pas le fonctionnement du runtime ni la complétude du pack Figma.

---

## 7. Modalités techniques A1/A2 validées Morris — contrat applicable (2026-11-07)

**Autorité :** validation explicite Morris des deux modalités techniques après revue du candidat D0 daté du 2026-11-07. Les arbitrages produit P1/P2 et décisions A1/A2 restent inchangés ; cette section est la spécification technique applicable, sans seconde autorité.

### 7.1 A1 — liste paginée propriétaire, reprise distincte de la création

- **API additive** : `GET /api/portfolio?preparationsCursor=<opaque>` conserve `portfolio.kind`, `projects`, `openPreparations` (total des préparations éligibles) et ajoute `portfolio.preparations = { items: PreparationSummary[], nextCursor: string | null }` aux réponses disponibles. En état `unavailable`, ne pas fabriquer de liste vide ; erreur technique expurgée, distincte de `kind:empty`.
- **Sélection serveur** : `preparations.ownerPilotId = session.pilotId AND preparations.status='OPEN' AND NOT EXISTS preparation_project_links(preparationId)`. La sélection et le compteur doivent utiliser ce **même prédicat**, sans charger tous les liens globaux en mémoire. L'état `kind:empty` signifie « aucun projet » et **n'exclut pas** une préparation ouverte ; afficher la liste si elle contient des items.
- **Taille et ordre** : **25 items maximum**, tri `createdAt DESC, id DESC`; recherche keyset strictement après la dernière paire retournée ; fetch `limit 26` pour calculer `nextCursor`, qui est `null` en dernière page. Curseur opaque strictement validé côté serveur ; erreur `400 INVALID_CURSOR` si malformé, pas de fallback vers une requête illimitée, pas d'`OFFSET`. Ne pas promettre un snapshot multi-pages immuable lors d'attachements concurrents ; retester la cohérence sur nouvelle lecture.
- **Champs publics minimaux** : `id`, `previewName`, `previewSummary`, `createdAt` ISO8601 et `status:OPEN`. Un aperçu vide reçoit un libellé neutre ; aucune activité récente dérivée artificiellement d'`updatedAt`.
- **Reprendre** : navigation `/preparations/{preparationId}` et GET contexte avec contrôle serveur owner, statut et rattachement ; **jamais POST**. Si `ATTACHED` entre liste et clic, redirection seulement vers le projet auquel le Pilote a droit, sinon erreur neutre et absence de fuite. La liste client n'autorise aucun accès.
- **Nouvelle préparation** : le POST D2 existant demeure séparé ; bouton in-flight disabled contre double clic. Perte de réponse : **pas de nouveau POST automatique** ; proposer une relecture du portefeuille pour retrouver une éventuelle création. Aucune garantie exactly-once durable sans clé D2 de création et décision supplémentaire.
- **Erreurs et tests discriminants** : 401 session ; 400 curseur ; 404 ID étranger/inexistant ; panne DB ne devient ni 401 ni liste vide. Vérifier 0/1/25/26/51 lignes, égalité de dates et tie-breaker id, falsification de curseur, deux Pilotes/deux projets, création et attachement concurrents, `kind:empty` avec préparations, pagination/count cohérents et absence de POST lors de reprise.

### 7.2 A2 — lien profond en inspection read-only et révision D4 protégée

- **URL validée** : `/projects/{projectId}?surface=document&documentId={documentId}`. `surface` est bornée aux surfaces réelles `travail/pilotage/journal/document`. Un `documentId` n'est pris en compte que pour `surface=document`. Une query malformée ou un ID étranger n'ouvre aucune ressource non autorisée ni action implicite.
- **Autorité** : ouvrir d'abord le projet sous ownership serveur par `projectId`, obtenir sa préparation liée, puis sélectionner seulement un document de ce projet. Un ID introuvable/étranger reçoit un refus neutre, sans affichage de document d'un autre Pilote. Rechargement, back/forward et retour `surface=travail` conservent le contexte sans écriture.
- **Réviser seulement sur geste Pilote** : sélectionner une version **AVAILABLE** comme `baseRevisionId`, puis POST à l'API D4 actuelle `/api/preparations/{preparationId}/documents/{documentId}` avec `action=revise`, `contentMarkdown`, `baseRevisionId`, `correlationKey`. La query ne permet jamais d'ouvrir directement un formulaire en mode mutation. Ne pas réutiliser `savePreparationDocument` comme second chemin de révision.
- **Concurrence/reprise** : `409 CONFLICT/BASE_STALE` garde le brouillon local et affiche la nouvelle version avant décision humaine ; `UNKNOWN` (timeout/ACK perdu) impose une relecture des versions/provenance à la recherche du **même** `correlationKey` avant retry, sans générer de nouvelle clé pour la même intention. Tant que l'issue n'est pas vérifiable, ne pas annoncer `AVAILABLE` ou `FAILED`. Le brouillon conservé en mémoire de session n'est **pas** promis durablement après reload.
- **Classification HTTP** : `401` pour absence/expiration de session exclusivement ; `400` payload invalide ; `404` ressource absente ou étrangère, non révélateur ; `409` base périmée ; `5xx` erreur interne expurgée. La route D4 actuelle renvoie abusivement 401 sur certaines exceptions : corriger dans le même macro-lot avec non-régression, sans exposer contenu indisponible `SAVING/UNKNOWN` comme validé.
- **Tests discriminants** : deep-link direct/reload/back ; sélection doc étrangère ; double Pilote/projet ; URL read-only sans POST ; version AVAILABLE ; 409 sur base concurrente ; idempotence même clé ; ACK perdu et réconciliation, panne DB distincte de session ; aucun mode Git/D7–D9 et aucune édition déclenchée par la query.

### 7.3 Statut et limites

Les deux modalités ci-dessus sont **VALIDATED SPEC par Morris**. Le pack G2 source demeure **PARTIAL**, avec L2 natif complet et PNG+SHA non acquis ; **aucun GO technique Cursor, de modification UI, de commit code, de PR/merge projet, ni de recette PASS** ne découle de leur validation. Les fichiers d'interface ne sont modifiables que lorsque le préflight G2 applicable est prouvé et le mandat D3 distinct autorisé. La comparaison visuelle calibrée appartient à G5 **après** premier rendu, pas à un gate circulaire pré-code.

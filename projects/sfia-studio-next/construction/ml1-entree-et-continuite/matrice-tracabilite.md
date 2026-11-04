# SFIA Studio Next — R5 / ML1 · Matrice de traçabilité initiale

> **État Git au versement (2026-11-04) :** publication documentaire candidate sur `docs/next-r5-delivery-preparation-20261104`, base `main@a0b80b9ecd64149ed51f87235ae246e197e66462`. Ni `VALIDATED SPEC`, ni merge, ni GO Cursor. Les formules `NOT ON GIT` et `NO GIT WRITE` dans les historiques décrivent leur état à la rédaction, pas cette publication.


**Statut (historique pré-implémentation, sections 1–6) :** `D0 CANDIDATE — LINKS VERIFIED AGAINST R1–R4, CONTENT NOT VALIDATED, NO CODE, NO TEST EXECUTED` — vrai **avant** construction locale ML1.
**Statut (observé DEV 2026-11-04, section 7) :** résultats QA bornés `PASS/PARTIAL/OUT` sur runtime local — **ne remplace pas** le cadrage R4 ni n'implique `16/16 PASS` / ADOPTED.
**Version :** v0.3 / 2026-11-04 — après revue D0 ; §7 ajoutée en construction locale
**Source Git :** `mcleland147/sfia-workspace`, `main@a0b80b9ecd64149ed51f87235ae246e197e66462` ; PR #646 mergée, local **NON OBSERVÉ**.
**R1 :** [vision-produit.md](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/cadrage/vision-produit.md), §§2.30 (E2E 01), 2.32 (E2E 03), 2.33 (E2E 04), 2.36 (E2E 07), plus addenda documentaires §2.41.
**R2 :** [D1 accès](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/conception-fonctionnelle/acces-et-portefeuille.md), [D2 création](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md), [D3 Nora](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md), [D4 connaissances](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md) et index de compléments R2.
**R3 :** [contrat de transposition](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/ux-ui/contrat-transposition-figma-code.md), [index de 223 frames](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/ux-ui/index-geometrie-frames-r3.json), `fileKey=itgvCulInEnFY6DvgIegvP`, page Figma `94:49`, extraction Git datée du 2026-11-03, blob `9d75cba6560896c279712982cd56b41488209685`.
**R4 :** [cadrage R4 §5.3.9 / §8.1](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/architecture-technique/cadrage-r4.md), [ADR R4-01/02](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/governance/decisions/2026-11-04-r4-architecture-exit.md), [ENV-01](https://github.com/mcleland147/sfia-workspace/blob/a0b80b9ecd64149ed51f87235ae246e197e66462/projects/sfia-studio-next/governance/environnements-recette-et-promotions.md).

**Lecture :** les identifiants `A01..A16` sont **des cas QA de conception R4**, pas des tests existants. Les colonnes QA et Figma ci-dessous proposent une correspondance **à valider par revue**, et non une certification d'exhaustivité. Les images Figma sont mutables : relecture native et extraction ciblée **par Cursor pendant la construction UX, avant le code de la surface concernée** ; aucune extraction exhaustive préparatoire. `R3 ≠ QA ≠ implémentation`.

## 1. Capacités de delivery et frontières

| ID de delivery | Responsabilité | Fonctionnalité dans ML1 / limite |
|---|---|---|
| `ML1-IDENTITY` | Identité et sessions Studio | Authentification personnelle, isolation, expiration et revalidation ; pas de droit Git déduit |
| `ML1-PORTFOLIO` | Cockpit et navigation | Portefeuille personnel non conversationnel, navigation et état vrai ; aucune suppression/transfert ajouté |
| `ML1-SAS-ENTRY` | Accès au sas | Entrer/reprendre une préparation sans créer de projet/cycle/Git |
| `ML1-SAS-DURABLE` | Préparation durable / brouillon | Préparation, messages et premier document Nora persistants ; édition et gestion documentaire avancées renvoyées à ML2 |
| `ML1-NORA-PREVIEW` | Conversation et aperçu | Nora utile avant/après création, clarification et proposition non autorisante ; pas de moteur complet de cycle |
| `ML1-CREATE` | Création gouvernée | Acte dédié, identité, version, idempotence, unicité, succès vérifié ; pas de décision/exécution induite |
| `ML1-CONTINUITY` | Continuité sas → projet | Même fil visible et identifiable, contexte et provenance récupérables, reprise après incident |
| `ML1-BOUNDARY` | Contrats négatifs / interfaces | Protection contre effet Git/cycle/mandat et droits interprojets ; fonctions complètes ML3–ML5 hors ML1 |

## 2. Matrice QA A — rattachements vérifiés et complétés

Chaque ligne donne l'oracle R4 (recoupé) et les références applicables minimales ; le **détail de chaque comportement reste canonique chez R2 et R4**. Les `node-id` Figma sont ceux du manifeste R3 Git, pas des identifiants inventés.

| R4 QA | Capacité ML1 | R1 | R2 (échantillon lié à l'oracle, non liste exhaustive de la capacité) | R3 — frame `numéro=node-id` | Oracle de vérification | Niveau de preuve attendu | État |
|---|---|---|---|---|---|---|---|
| `A01` | `ML1-SAS-DURABLE` | E2E 01 | `RG-ACC-017/018; RG-CRE-001/006; PF-CRE-01/13` | `01=94:50;02=94:135;73=158:912` | Sas sans projet ni Git | INTEGRATION DB + BROWSER | `DESIGN ONLY` |
| `A02` | `ML1-NORA-PREVIEW` | E2E 01/03 | `RG-CRE-002/004/014; RG-CONV-002/005; PF-CRE-01/06` | `02=94:135;109=161:216;135=187:276` | Nora utile sans cycle ni méthode | BROWSER + **Nora LIVE bornée pour conclure ML1 complet** | `DESIGN ONLY` |
| `A03` | `ML1-CREATE` | E2E 01 | `RG-CRE-008/010; PF-CRE-07/08` | `02=94:135;77=159:361;13=96:262` | Seul le clic dédié crée | INTEGRATION + BROWSER | `DESIGN ONLY` |
| `A04` | `ML1-CREATE` | E2E 01 | `RG-CRE-011; PF-CRE-10` | `77=159:361;81=159:649` | Double clic, pas de doublon | POSTGRES CONCURRENCY | `DESIGN ONLY` |
| `A05` | `ML1-CREATE` | E2E 01 | `RG-CRE-010/024; PF-CRE-11/16` | `78=159:433;81=159:649;86=159:1009` | Timeout après commit : même projet retrouvé | POSTGRES + RESTART | `DESIGN ONLY` |
| `A06` | `ML1-NORA-PREVIEW / ML1-CREATE` | E2E 01 | `RG-CRE-003/016/026` | `75=159:217;76=159:289;78=159:433` | Version de préparation obsolète : conflit explicite | CONCURRENCY + BROWSER | `DESIGN ONLY` |
| `A07` | `ML1-CONTINUITY` | E2E 01 | `RG-CRE-017/018/020/023; PF-CRE-15/21` | `02=94:135;13=96:262;14=96:370;03=94:214` | Même fil visible, marqueur fondé | BROWSER + RELOAD | `DESIGN ONLY` |
| `A08` | `ML1-SAS-DURABLE` | E2E 01 + addendum R1 documentaire | `RG-CRE-027; PF-CRE-27; RG-KNOW-016..020` | `82=159:721;124=162:457;04=94:370` | Brouillon du sas lié, versions conservées | DB + BROWSER | `DESIGN ONLY` |
| `A09` | `ML1-SAS-DURABLE` | E2E 01 + addendum documentaire | `RG-CRE-027; RG-KNOW-018; PF-CRE-27` | `82=159:721;93=160:463` | SAVING/échec : jamais sauvegarde fictive | DB FAULT INJECTION + BROWSER | `DESIGN ONLY` |
| `A10` | `ML1-IDENTITY` | E2E 01/07 | `RG-ACC-001/005/006; RG-CRE-009; PF-ACC-03/10` | `62=158:120;63=158:192;65=158:336` | Séparation deux comptes, aucune fuite | SECURITY + BROWSER | `DESIGN ONLY` |
| `A11` | `ML1-IDENTITY / ML1-CONTINUITY` (partiel) ; `ML4` intégration Git | E2E 01/04/07 | `RG-CRE-022/026; RG-KNOW-006/014; PF-CRE-20/23` | `83=159:793;114=161:576;115=161:648` | Source révoquée : ne pas réutiliser | ML1 : protection générique si source disponible ; **preuve de révocation Git LIVE à ML4**, pas de PASS global ML1 | `DESIGN ONLY / DEFERRED PART` |
| `A12` | `ML1-CREATE / ML1-PORTFOLIO` | E2E 01 | `RG-CRE-012; PF-CRE-14; RG-ACC-008` | `65=158:336;85=159:937` | Deux projets homonymes : identités distinctes | POSTGRES + BROWSER | `DESIGN ONLY` |
| `A13` | `ML1-CONTINUITY` | E2E 01/04 | `RG-CRE-019/023; RG-KNOW-011/015/019; PF-KNOW-02/10` | `88=159:1153;110=161:288;14=96:370` | Reprise sélective après nouvelle conversation | INTEGRATION + BROWSER + LIVE ciblé | `DESIGN ONLY` |
| `A14` | `ML1-PORTFOLIO` | E2E 01 | `RG-ACC-009/010/014/016; PF-ACC-05/08/12` | `01=94:50;64=158:264;65=158:336` | Navigation exacte, pas de Nora globale | BROWSER + RELOAD | `DESIGN ONLY` |
| `A15` | `ML1-CREATE` | E2E 01/02/07 | `RG-CRE-014/021; PF-CRE-06/18/24; RG-ACC-022` | `02=94:135;13=96:262;84=159:865` | Zéro cycle, CKI, Git, Cursor et mandat induits | DB/INTEGRATION NEGATIVE | `DESIGN ONLY` |
| `A16` | `ML1-SAS-DURABLE / ML1-CONTINUITY` | E2E 01/04 | `RG-CRE-024; RG-KNOW-015/018; PF-CRE-22` | `88=159:1153;78=159:433;14=96:370` | Reprise après restart/restore réels | RESTART + RESTORE | `DESIGN ONLY` |


**Aucun A01–A16 ne peut être déclaré PASS aujourd'hui.** Le test R5 devra définir données, identité, préconditions, action, assertions chez le propriétaire d'état, SHA candidat, environnement DEV/RECETTE et artefact probant. La somme de ces 16 oracles ne suffit pas à elle seule à vérifier la totalité des RG/PF.

## 3. Contrôle d'exhaustivité R2 D1/D2 (fichier associé)

L’[inventaire R2](inventaire-r2.csv) énumère **103 références distinctes** : 25 `RG-ACC`, 24 `PF-ACC`, 27 `RG-CRE`, 27 `PF-CRE`. **Contrôle automatisé des séquences d'identifiants réalisé** lors de sa génération : aucune valeur manquante ou dupliquée dans ces quatre plages. C'est un inventaire, **pas 103 tests** et **pas une déclaration de conformité ML1**.

Les correspondances d'identifiants sont classées par **capacité responsable du premier contrôle**, et les cas particuliers sont signalés, notamment :

- `RG-ACC-024` / `PF-ACC-19` : suppression/transfert **hors portée fonctionnelle** de D1 ; ML1 vérifie qu'aucune permission n'est inférée de la navigation, sans implémenter ces opérations.
- `PF-ACC-16`, `RG-ACC-019` : consommation de sources interprojets, garde-fous en ML1 ; capacité complète d'accès source et ses permissions à qualifier avec ML2/ML4.
- `RG-CRE-022`, `PF-CRE-05`, `PF-CRE-20` : source externe/Git éventuellement consultée au sas, mais **Git complet n'est pas requis pour créer** ; ML1 protège la provenance et l'absence d'autorisation dérivée, avec interface réelle D9 plus tard.
- `RG-CRE-027` / `PF-CRE-27` : brouillon Nora pendant le sas **dans ML1** ; versions et consultation documentaire approfondies dans ML2, sans perdre l'identité initiale.
- `RG-CRE-014` / `PF-CRE-24` : zéro création implicite de cycle, mandat, dépôt et tentative. La capacité d'effectuer ces effets appartient aux autres lots.

**Attention aux compléments :** les chiffres de clôture R2 300/241 sont historiques ; le corpus `main` porte également **24 RG et 18 PF** approuvés après clôture, soit 324/259. L'inventaire D1/D2 contient les compléments `CRE-027` et confirme leur présence dans la baseline.

## 4. Dépendances transversales R2/R3/R4 à conserver

| Famille | Références canoniques utiles dans ML1 | Limite / branche suivante |
|---|---|---|
| D3 Nora, conversation | `RG-CONV-001..006`, `RG-CTX-001..008`, `RG-UX-001..003`, `RG-AUTH-001`; PF D3 à sélectionner par fonctionnalité lors de la spécification | Cognition Nora utilisable sans cycle ; gestion complète méthode/CKI/STOP dépend de ML3/ML5 |
| D4, mémoire et documents | `RG-KNOW-001/002/006/011/013/014/015/016..020`, `PF-KNOW-02/10/11` | Identités, provenance, reprise minimale à construire ; index/sujets/documents avancés ML2 |
| D5 / D6 | `RG-CRE-014/016/021`, `RG-ACC-004`, `RG-AUTH-001` comme invariants négatifs | Pas de cycle, autorisation ou mandat conféré par création ou texte Nora ; réalisation positive ML3/ML5 |
| D9 / Git | `RG-CRE-006/022`, `RG-ACC-003/022` comme frontières | Git facultatif ; raccord au fournisseur effectif en ML4 puis ML5 si effet externe |
| R3 | Portefeuille, connexion, sas, création, fil, chargement, erreurs, navigation, accès mobile ; contrat géométrique et accessibilité | Composants réutilisables, état/variante ; extraction ciblée **par Cursor au moment du développement UX**, jamais dimension devinée |
| R4 | ADR R4-01/02, DATA-01, ENV-01, §5.3 A, QA A01–A16 | PostgreSQL local transactionnel et rattachement V-A approuvés en architecture ; choix concret d'auth/session/Nora/API encore à préciser en R5 |

## 5. Gaps et gates avant une spécification ML1 validée

| Gap réel | Pourquoi il bloque le claim | Sortie attendue |
|---|---|---|
| R3 source Figma versionnée seulement dans le snapshot Git | Nœuds, variantes et valeurs profondes potentiellement modifiés depuis 2026-11-03 | **Cursor** relit la source Figma native au moment du code UX concerné ; conserve snapshot/mesures utiles et confronte au DOM. Pas de pré-extraction D0. |
| Figma 240/246 px et tokens/écarts visuels | Discordance entre références et absence de tolérance ratifiée | Choix d'un composant/état maître, décision sur les valeurs et méthode de comparaison |
| Interfaces auth, session, Nora et API non codées | R4 valide les frontières, pas les mécanismes définitifs | Sélection technique motivée, contrats d'erreur/sécurité, tests négatifs |
| Premier document du sas vs gestion documentaire ML2 | Risque d'un stockage provisoire ou d'une seconde vérité | Identifier dès ML1 la même identité/document/version et son responsable D4 ; ne pas construire de jetable |
| A11 et PF interprojets / Git | D9 non requis pour ML1 nominal et aucune autorisation Git implicite | Conserver les protections ML1, planifier tests d'intégration Git au lot propriétaire, aucun claim REAL prématuré |
| QA A/UX et proof | Aucun test ni runtime Next | Préserver les **oracles A01–A16** ; construire les tests exécutables, les jeux de données et assertions **avec le code et la lane réelle** puis lier au SHA/ENV-01. |

**Verdict :** `MAPPED AT DOCUMENTARY LEVEL — D0 CANDIDATE — NO TECHNICAL SPEC APPROVAL — NO TEST EXECUTED`.

**Ajustement v0.2 :** la matrice est un contrat de rattachement **avant** code, pas une exigence d’extraire tout Figma ni de rédiger à l’avance les scripts de test. La qualification technique ML1 candidate détaille les mécanismes sans les déclarer validés.


## 6. Précisions de propriété et de preuve — revue D0

- **D3** possède la conversation et les messages durables (et leur corrélation de génération) ; **D4** possède les ressources documentaires, versions, connaissances et provenance. Un rattachement de document à un message est un lien, non un second propriétaire.
- `A11` est **partiellement différé à ML4** pour la révocation effective de sources Git. Ne pas compter 16/16 PASS si la révocation n'a pas été prouvée ; conserver un résultat distinct pour les protections ML1 testables.
- `A02` exige une démonstration Nora **LIVE bornée** pour conclure que la première verticale conversationnelle fonctionne. Les tests déterministes et mocks restent complémentaires.
- `A04/A05/A06` nécessitent une version d'aperçu inspecté et une clé idempotente avec empreinte, dont les replays sont reconstituables à la même préparation ; ne pas déduire « création unique » du seul résultat UI.
- Les 30 identifiants Figma centraux repris dans la sélection ML1 et contrôlés lors de la revue figurent bien dans le manifeste v0.3 ; cela **ne certifie pas** la géométrie profonde ou la conformité runtime.

**Verdict historique (pré-implémentation) : `R1–R4 REFERENCES MAPPED / ORACLE SPLIT MADE EXPLICIT / NO TEST EXECUTED / CANDIDATE FOR MORRIS REVIEW`.** Ce constat daté reste exact pour les sections 1–6 ; il n'est **pas** le verdict runtime DEV du 2026-11-04.

## 7. Qualification locale DEV — résultats A01–A16 (observés 2026-11-04)

> **État temporel distinct** des sections 1–6 (`DESIGN ONLY` / aucun test exécuté à la rédaction documentaire). Ici : preuves exécutées en DEV local. Ne remplace pas le cadrage R4. Oracles lus depuis `architecture-technique/cadrage-r4.md` §5.3.9. **A13 ≠ OAuth** ; **A15 ≠ Figma/Markdown**. Réserves maintenues : A05, A11, A13, A15, A16, DATA-01.

| Oracle | Description canonique (R4) | Preuve réelle | Niveau | Verdict |
| --- | --- | --- | --- | --- |
| A01 | Sas sans projet/Git | PG prep OPEN sans link + Playwright | PG INTEGRATION + BROWSER FAKE | PASS |
| A02 | Nora utile sans cycle | Fixture PG + LIVE API adapter `openai-agents-sdk-live` COMPLETE (1 appel borné) + messages PG sans fixture ; BROWSER USER OBSERVED | LIVE API + PG + BROWSER USER OBSERVED | PASS (borné DEV) |
| A03 | Création seulement commande dédiée | create-project command + UI bouton | PG + BROWSER FAKE | PASS |
| A04 | Double clic / concurrence | PG concurrent + A04c cross-prep | PG INTEGRATION | PASS |
| A05 | Timeout après commit | Replay ALREADY_CREATED seulement | PG | PARTIAL (pas d'injection crash) |
| A06 | Version obsolète | stale revision CONFLICT | PG | PASS |
| A07 | Même fil / marqueur | same message ids after create + reload Playwright | PG + BROWSER FAKE | PASS |
| A08 | Document identité | doc id survives create | PG | PASS |
| A09 | SAVING/échec | injectPersistFailure FAILED | PG | PASS |
| A10 | Isolation A/B | PG + Playwright Pilot B 404 | PG + BROWSER FAKE | PASS |
| A11 | Source révoquée | Git/D9 hors ML1 | — | OUT OF ML1 (justifié) |
| A12 | Homonymes | two SameName projects | PG | PASS |
| A13 | Reprise connaissances/docs sans transcript exhaustif | non implémenté comme oracle distinct (reload transcript ≠ A13) | NOT RUN | PARTIAL / gate ML2+ |
| A14 | Cockpit/projet contexte | portfolio reopen by projectId ; pas de Nora globale | BROWSER FAKE (+ USER OAuth reopen observé) | PASS |
| A15 | Aucun effet dérivé D5–D9 | adapter sans tools ; non-effects stub ; create-project n'écrit pas cycles/CKI/Git ; LIVE call sans outils | UNIT + code inspection + LIVE API sans tools | PARTIAL |
| A16 | Restore/restart | new client read prep ; pas de restore injecté | PG | PARTIAL |
| DATA-01 | Restore backup | — | — | OUT OF ML1 |

**Markdown UX :** KNOWN GAP — RICH MARKDOWN RENDERING NOT IMPLEMENTED.
**Figma pixel :** INCONCLUSIVE (rail 246 native only).
**PostCSS prod GHSA :** closed via override `8.5.32` ; Next 16 non requis pour cette famille.

## 8. Synthèse de préclôture ML1 — revue documentaire post-merge du 2026-11-04

**Statut : REVIEWED AGAINST MAIN CODE / CLOSURE DECISION PENDING MORRIS.** Référence Git de la livraison : #649, candidat `0db58be...`, merge `747cbec...` ; preuves primaires et catégorisation détaillées au §7 et dans `specification-technique.md` §15. Le présent récapitulatif **n'exécute pas de tests et ne modifie aucun verdict PASS/PARTIAL/OUT de §7**.

| Axe / oracle restant | Niveau constaté | Propriétaire / suite et condition de sortie | Conséquence pour ML2 |
| --- | --- | --- | --- |
| A05 — commit puis ACK perdu, restart | PARTIAL : replay de création déjà effectuée en PG, pas de panne injectée post-commit avec réouverture complète | D2 / QA ML1 résiduelle ; tester la reprise discriminante avant de revendiquer l'oracle complet ou la qualification R6 correspondante | Pas de blocage **démontré** de la préparation ML2 ; risque de reprise explicitement conservé |
| A13 — sélection pertinente d'acquis/connaissances | PARTIAL / NOT RUN comme oracle propre ; reload du transcript ≠ récupération cognitive | D3/D4 — capacité ML2 de continuité et capitalisation ; comparaisons de scénarios et preuves LIVE si applicables | **À inclure explicitement au contrat et à la preuve ML2**, pas à déclarer acquis en ML1 |
| A15 — absence d'effets implicites D5–D9 | PARTIAL : absence d'outils dans l'adaptateur, code inspecté et stub non-effects ; pas de preuve négative exhaustive | Frontière D2/D3 puis propriétaires D5–D9 pour leurs futures réalisations ; tests négatifs réels selon blast radius | Préserver les interdictions ; nouvelle preuve lorsque des capacités d'effet sont introduites |
| A16 et DATA-01 — redémarrage, restore, backup | PARTIAL / OUT ML1 pour restore DATA-01 ; pas de restauration injectée | ENV-01 / D2–D4 / R5–R6, avec reprise et restauration réellement testées avant le gate de qualification/promotion applicable | Dette d'exploitation à préserver, sans prétendre un ML1-bis obligatoire |
| A11 — révocation de source Git | OUT OF ML1 correctement attribué | ML4 (Git facultatif / D9) ; révocation et interdiction de réemploi à démontrer | Pas de blocage intrinsèque du nominal ML2 sans Git |
| Réserve A — cookies DEV/RECETTE | Risque structurel démontré sur hôte commun, pas de violation de droits inter-bases démontrée | D1/ENV-01 ; isolation technique et nouvelle recette des sessions **avant STABLE** | Mitigation profils séparés tant qu'acceptée ; ne pas en déduire isolation complète |
| Réserve B — CI Next | Required Gate historique SUCCESS, build/test Next SKIPPED | Infrastructure delivery / workflow Next distinct sous GO Git partagé, **avant prochaine livraison significative** | Prérequis pour la **prochaine intégration significative**, pas une preuve que ML2 ne peut être cadré |
| UX et cognition — Figma, Markdown, streaming | Fidélité Figma totale INCONCLUSIVE ; rendu Markdown riche absent ; dialogue Nora LIVE borné, réponse API synchrone JSON | UX D3/D4, lot propriétaire ; qualifier exigences et scénarios visuels dans ML2 si surfaces concernées | À examiner lors du contrat UX/cognitif ML2, sans modification rétroactive des preuves ML1 |
| Schéma / documentation | `postgres-js` réellement utilisé ; script migrations 001+002 ; export `schemaRevision` toujours 001 | D2–D4 / As-Built synchronisé dans spec §15 ; vérifier l'effet de métadonnée dans le prochain travail technique approprié | Pas d'impact runtime établi par la seule lecture de l'export |

**Décision de préclôture proposée, non autoritative :** le parcours utilisateur ML1 (entrée → sas durable → Nora bornée → première ressource → création explicite → reprise projet) est intégré et accepté en recette **avec réserves**. Aucun blocage technique nouveau de démarrage ML2 n'a été **démontré par cette revue documentaire**. La clôture du macro-lot, l'acceptation nominative des reports, l'éventuelle nécessité d'un correctif ML1-B et l'ouverture de ML2 relèvent de décisions Morris **distinctes**. **NO STABLE / NO RELEASE / NO ADOPTED.**

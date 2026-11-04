# SFIA Studio Next — R5 / ML1 · Matrice de traçabilité initiale

> **État Git au versement (2026-11-04) :** publication documentaire candidate sur `docs/next-r5-delivery-preparation-20261104`, base `main@a0b80b9ecd64149ed51f87235ae246e197e66462`. Ni `VALIDATED SPEC`, ni merge, ni GO Cursor. Les formules `NOT ON GIT` et `NO GIT WRITE` dans les historiques décrivent leur état à la rédaction, pas cette publication.


**Statut :** `D0 CANDIDATE — LINKS VERIFIED AGAINST R1–R4, CONTENT NOT VALIDATED, NO CODE, NO TEST EXECUTED`  
**Version :** v0.3 / 2026-11-04 — après revue D0  
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

L'[inventaire](inventaire-r2.csv) énumère **103 références distinctes** : 25 `RG-ACC`, 24 `PF-ACC`, 27 `RG-CRE`, 27 `PF-CRE`. **Contrôle automatisé des séquences d'identifiants réalisé** lors de sa génération : aucune valeur manquante ou dupliquée dans ces quatre plages. C'est un inventaire, **pas 103 tests** et **pas une déclaration de conformité ML1**.

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

**Verdict : `R1–R4 REFERENCES MAPPED / ORACLE SPLIT MADE EXPLICIT / NO TEST EXECUTED / CANDIDATE FOR MORRIS REVIEW`.**
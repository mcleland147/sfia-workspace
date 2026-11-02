# SFIA Studio Next — Revue formelle de sortie R2 (conception fonctionnelle)

**Date :** 2026-11-02 (Europe/Paris)  
**Nature :** rapport de revue et proposition de décision de jalon — `DOCUMENTED / EXIT REVIEW CANDIDATE`.  
**Autorité de sortie :** Morris ; **le présent rapport ne tient pas lieu d'enregistrement de décision R2 CLOSED**.  
**Références Git de revue :** `mcleland147/sfia-workspace`, `main@8751775edc314e8fc7f0855104e5000290be9839` (R1 PR #639 mergée) ; `sfia/next-r2-functional-specs@58e9e4507fd75b6b7a16b163f7362459371aa658` au contrôle des sources. État local Git `NON OBSERVÉ`.  
**Sources de méthode :** SEF v0.2 §8 et §10, Roadmap Next, décision d'exit R1, vision R1 §§2.29–2.39, index R2, neuf specs de domaine, revue transverse, revue de contenu CKI.

## 1. Résultat soumis à décision

**Verdict recommandé : `R2 EXIT REVIEW FAVORABLE — CLOSE WITH CARRIED RESERVES`.**

Le jalon R2 a produit une conception fonctionnelle cohérente et structurée pour le périmètre R1. Morris a validé **individuellement les neuf spécifications D1–D9** et, séparément, **le contenu des quinze CKI v0.2 ainsi que la matrice de cinquante relations**. Les responsabilités, conditions de décision, refus, transitions, exécution sous contrat, qualification des résultats et continuité sont explicitement réparties.

La revue documentaire transverse n'identifie **aucune contradiction normative directe** parmi les interfaces rapprochées ; elle ne garantit pas une absence absolue de conflit découvert ultérieurement. Le verdict ne couvre **aucun comportement runtime**. **La décision formelle de sortie R2 reste à confirmer explicitement par Morris**, et les actes Git PR, merge et post-merge restent des gates indépendants.

## 2. Matrice des critères de sortie R2

| Gate | Exigence | Constats source | Verdict |
| --- | --- | --- | --- |
| **G1 — Base R1** | Vision et périmètre approuvés ; `main` vérifié | PR #639 mergée ; 9 domaines R1 et 7 E2E approuvés, sources de cadrage conservées | **PASS DOCUMENTAIRE** |
| **G2 — Contrats fonctionnels** | Règles, acteurs, états, incidents et continuité spécifiés | D1 à D9 : `VALIDATED SPEC` individuels, 300 RG identifiés sans doublon, 241 PF (dont 4 compléments D3) | **PASS DOCUMENTAIRE** |
| **G3 — Autorité et effets** | Pas de second moteur de décision ; effets gouvernés | D2 création explicite ; D5 cycle et méthode ; D6 décision/GO/suspension ; D7 exécution/STOP ; D8 preuves ; D9 droits Git | **PASS DOCUMENTAIRE** |
| **G4 — Contradictions / interfaces** | Revue bidirectionnelle et responsabilités cohérentes | Revue transverse D1–D9 ; CKC historique harmonisé en CKI ; 46 RG D3 reliées à 27 PF ; anciennes mentions « non évaluées » réconciliées dans l'index | **PASS AVEC RÉSERVES** |
| **G5 — Corpus CKI** | Spécialisation autonome et validation de contenu distincte | 15 CKI / 50 relations `VALIDATED CONTENT v0.2` par Morris ; guidance non opposable et sans parcours obligatoire | **PASS CONTENU**, qualité d'usage non prouvée |
| **G6 — Dette / exit / suite** | Réserves affectées, jalons et prochaine capacité identifiés | 66 références de réserves documentaires regroupées dans le rapport transverse, propriétaires dans leurs specs ; R3 UX, R4 architecture, R5–R6 comportement et preuves | **PASS AVEC REPORTS EXPLICITES** |
| **G7 — Git / promotion** | Branche prête à revue, mais statut réel traçable | Branche candidate en avance sur `main`, sans divergence observée avant ce rapport ; aucune PR, CI R2, merge ou post-merge attestés | **NON ACQUIS — GATE DISTINCT** |

**Lecture des gates :** G1–G6 suffisent à proposer une clôture **fonctionnelle** R2 avec réserves. G7 reste obligatoire pour promouvoir ce référentiel sur `main` et ouvrir un R3 reposant sur la baseline intégrée ; sa non-réalisation ne doit jamais être masquée par le verdict documentaire.

## 3. Réserves conservées et sorties prévues

La **source de vérité des réserves reste chaque spécification**, sans création d'un registre d'autorité parallèle. La revue transverse a regroupé **66 références** : 8 `ACC`, 9 `CRE`, 5 `5.1`, 8 `D6`, 10 `REAL`, 12 `PRV`, 14 `GIT`. Les réserves sont des questions d'UX, de mécanisme et de preuve, pas 66 blocages de clôture.

| Horizon | Obligations restantes | Condition d'exit / preuve future |
| --- | --- | --- |
| **R3 UX/UI** | Cockpit sans Nora, sas conversationnel, même fil après création, conduite du cycle, contrat « Exécuter » inspectable, bilan et réserves accessibles, Git facultatif | Parcours, prototypes, contrat visuel et gestion des états nominaux/négatifs validés par Morris ; captures de référence lorsque pertinentes |
| **R4 architecture** | Identité/session/isolation, persistance et reprise, droits Git/identité Cursor, idempotence, version du contrat et du CKI, interruptions techniques, modèle de preuve | ADR et contrats de composants/données/sécurité ; pas de reprise automatique de l'ancien runtime |
| **R5 construction** | Capacités end-to-end avec tests et documentation du même macro-lot, cohérence des résultats entre UX/autorité/outil | Code, tests, captures/observations pertinentes, preuves déterministes et navigateur selon criticité |
| **R6 qualification** | Sept E2E R1 et scénarios négatifs à éprouver, permissions multi-Pilotes, arrêt/reprise, véracité des preuves et qualité de guidance CKI | `BEHAVIOR PROVEN` uniquement sur preuves observées ; décision ultérieure `ADOPTED` distincte |
| **Git et gouvernance** | Roadmap `main` encore antérieure au merge R2, PR/CI/merge R2, relecture SHA post-merge | GO Morris pour PR et GO merge distinct, revue du diff, checks applicables, lecture de `main` après merge |

### Risques explicitement non éliminés

- Autorisation conversationnelle, `Exécuter` et permission Git doivent résister aux erreurs de session et de concurrence.
- Le STOP humain persiste, mais un arrêt technique demandé **n'est pas** un arrêt confirmé sans observation.
- Une déclaration de Cursor n'est pas une preuve de conformité ; l'acceptation du Pilote n'est pas automatiquement une adoption.
- La maturité CKI est informative ; elle ne crée ni gate ni deuxième CKI actif.
- La valeur effective de l'UX et la capacité cognitive des CKI restent non démontrées tant que le produit Next est `N/A — NON IMPLÉMENTÉ`.

## 4. Proposition de décision à Morris

**Décision proposée, non enregistrée :** « Je prononce la sortie **R2 CLOSED WITH CARRIED RESERVES** au niveau de la conception fonctionnelle. Je confirme les neuf specs et quinze contenus CKI validés ; j'accepte les reports décrits vers R3–R6 sans adoption technique. J'autoriserai séparément la PR, le merge après contrôles puis la reprise R3 sur `main` vérifié. »

**Pour ne pas surinterpréter la demande de lancement de clôture**, cette formulation demande un assentiment explicite après présentation du bilan ; la présente rédaction n'est pas un GO de promotion Git.

## 5. Préparation du jalon R3 — UX (sans engagement prématuré)

**Prochaine capacité :** rendre les contrats R2 utilisables dans une expérience Pilote/Nora continue et intelligible. **Premier macro-lot UX proposé :** parcours transversal **cockpit → sas → création → projet et dialogue → cycle / décision / « Exécuter » → bilan de résultat**. Les interfaces Git restent facultatives et liées à la même autorité.

- **IN :** parcours E2E 01/02/03/05/06 et interfaces critiques de 04/07 ; états visibles, refus, interruptions, reprise, provenance et niveau de preuve ; contrat visuel avant code, Figma si pertinent, revue Morris.
- **OUT :** architecture R4, nouvelle base, mise en œuvre Cursor, intégration Git technique, L5 automatique, protocole d'authentification et choix de stack.
- **Intégrateur / preuves :** ChatGPT prépare la conception et challenge ; Morris valide les contrats visuels ; la revue UX vérifie comportements et accessibilité, sans prétendre à du LIVE.
- **Gate d'entrée :** exit R2 confirmé par Morris puis intégration Git de la baseline R2 sur `main` sous les gates PR/CI/merge/post-merge. Le GO présent n'autorise pas le démarrage effectif R3.

## 6. État Git et suites

1. **Valider le verdict de sortie** : Morris décide la clôture avec les réserves explicitement reportées.
2. **Formaliser la décision et autoriser l'intégration** : document décisionnel D2 selon SEF, puis GO spécifique pour PR et revue Git.
3. **Contrôler la PR et CI** ; GO merge distinct ; vérifier `main` et les fichiers canoniques après merge.
4. **Engager R3** sur la baseline intégrée, sans code ni architecture adoptés par inertie.

**État au terme de ce rapport : `EXIT REVIEW FAVORABLE — MORRIS CLOSURE DECISION PENDING`.**

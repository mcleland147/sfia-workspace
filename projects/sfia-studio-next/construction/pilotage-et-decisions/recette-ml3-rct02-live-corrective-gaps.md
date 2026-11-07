> **Preuve D0 utilisateur (non normative).** Copie locale du rapport LIVE fourni hors Git> (`sfia-next-rct02-live-evidence-bundle/report/sfia-next-rct02-live-gaps-d646d42a.md`).> N'autorise aucune modification de SEF/roadmap/ADR. Conservée pour traçabilité du macro-lot> correctif local C04/C05/C06.

# SFIA Studio Next — ML3 / RCT-02
## Restitution complémentaire de RECETTE LIVE — C04, C05, C06

| Champ | Valeur / qualification |
|---|---|
| Date des observations | 7 novembre 2026, Europe/Paris |
| Nature | **D0 — restitution de preuves utilisateur et diagnostic technique initial**, non normative, non publiée sur Git |
| Programme / jalon | SFIA Studio Next / R5 — macro-lot ML3 « Piloter et décider » |
| Produit observé | RECETTE `http://127.0.0.1:3200`, SHA **`d646d42addb5a4c4a3cab441e9e39018d85fae70`** |
| Build reporté par Cursor | `R7JhVsbMaJdiUuuljApyn`; identité du runtime non contre-vérifiée indépendamment depuis cette analyse |
| Branche Git consultée | `sfia/next-ml3-rct02-correctifs` ; remote encore à `d646d42a` au pré-check |
| Base `main` comparée | `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` (merge base) ; branche 4 commits devant / 0 derrière |
| Source précédente | `construction/pilotage-et-decisions/recette-ml3-rct02-anomalies.md` (Git, blob `be12d062ae11730e6b224d77ca22da5a7366fa0c`) |
| Nature de preuve | Captures et transcriptions en conversation utilisateur + inspection statique de fichiers Git du SHA ; **aucun accès aux logs locaux, SQL RECETTE ou instrumentation runtime** |
| Décideur | Morris ; ChatGPT prépare/revoit ; Cursor réalise D3 |
| Statut | **RCT-02 TARGETED LIVE TEST COMPLETED — CORRECTIVE GAPS OPEN** ; pas de ML3 CLOSED/RECETTE ACCEPTED/ADOPTED |


> **Note post-publication (PR readiness 2026-11-07).** Ce rapport gaps a depuis été intégré dans Git sur la branche candidate (`61fe295b` et parents). La mention « non publiée sur Git » ci-dessus reste une qualification **historique** du D0 au moment de la rédaction sur `d646d42a`. Ne pas l’interpréter comme l’état Git courant.

> **Règle de lecture.** Les écrans montrent des effets réellement visibles en RECETTE. Les causes indiquées comme « reproduites statiquement » correspondent à la logique du code Git inspecté ou à sa simulation sur les phrases fournies. Seules les traces de l'application, les tests d'intégration et les effets DB peuvent confirmer la chaîne d'exécution exacte. Ne pas transformer une hypothèse en preuve.

## 1. Résumé de la micro-recette

**But :** retester les huit anomalies C01–C08 de la première RCT-02 sans refaire les 16 scénarios. Tests réalisés par Morris sur un nouveau projet, avec Nora `openai-agents-sdk-live · COMPLETE` affiché lors des échanges observés.

| ID | Correction testée | Verdict LIVE | Preuve principale |
|---|---|---|---|
| C01 | Ouverture de cycle en message naturel développé | **PASS** | `OPEN_CYCLE APPLIED`, `CADRAGE ACTIVE`, révision 1 |
| C02 | Objectif de cycle correctement persisté | **PASS** | objectif exact en Pilotage / journal, non `.` |
| C03 | CKI interne non cité spontanément | **FAVORABLE, NON CLOS** | plusieurs réponses naturelles en CADRAGE ; pas de test intercycles CONCEPTION_FONCTIONNELLE |
| C04 | Enregistrer un arbitrage, non les instructions à Nora | **PARTIAL** | `RECORD_DECISION APPLICABLE` ; consigne finale exclue, mais `objectRef` erroné et énoncé préfixé par « que, » |
| C05 | Révision naturelle d'une décision documentaire | **FAIL** | aucun `REVISE_DECISION` ; ancienne décision toujours APPLICABLE ; aucune nouvelle décision |
| C06 | Levée naturelle d'une restriction ciblée | **FAIL** | restriction restée ACTIVE, révision et journal inchangés |
| C07 | Lire l'état effectif des restrictions | **PASS** | après levée UI : `restrictions_actives=aucune`, révision 4 correctement restituée par Nora |
| C08 | Clôture naturelle sans transition automatique | **PASS** | `CLOSE_CYCLE APPLIED`, révision 5, aucun cycle actif |

**Contrôle négatif supplémentaire : PASS.** Une commande `OPEN_CYCLE` citée comme exemple n'a pas déclenché de mutation : révision 5 et journal à 5 décisions, Nora distingue citation/GO/exécution.

**Comptage : 4 PASS, 2 FAIL, 1 PARTIAL, 1 NON CLOS (favorable).** C03 ne doit pas être présenté comme accepté intercycles. Les succès concernent uniquement les scénarios observés, pas toute la variété du français.

## 2. Chronologie DB/projection visible — projet de RECETTE

L'identifiant interne du projet est visible dans les captures de la conversation ; ce dossier n'en a pas besoin pour décrire les règles. Les valeurs ci-dessous sont celles affichées par Pilotage, non un dump SQL.

| Étape | Révision | Cycle | Restriction active | Journal de décisions | Conclusion |
|---|---:|---|---|---:|---|
| Début / C01–C02 | 1 | CADRAGE ACTIVE | Aucune | 1 | OPEN appliqué |
| C04 | 2 | CADRAGE ACTIVE | Aucune | 2 | RECORD appliqué avec objet erroné |
| C05 | **2** | CADRAGE ACTIVE | Aucune | **2** | REVISE absent |
| Application cockpit (prérequis C06) | 3 | CADRAGE ACTIVE | `CYCLE_MUTATION` ciblée sur instance | 3 | APPLY appliqué |
| C06 | **3** | CADRAGE ACTIVE | **Toujours ACTIVE** | **3** | LIFT absent |
| Levée cockpit (prérequis C07) | 4 | CADRAGE ACTIVE | Aucune | 4 | LIFT appliqué |
| C07 | 4 | CADRAGE ACTIVE | Aucune | 4 | Lecture correcte, aucune mutation |
| C08 | 5 | Aucun cycle actif | Aucune | 5 | CLOSE appliqué |
| Faux GO cité | 5 | Aucun cycle actif | Aucune | 5 | Aucun OPEN |

**Cycle instance** dans les captures : `cyc_b03f4df8-2099-476b-8dfd-6a4fda5e12ff`. La restriction cockpit est liée à cette instance, pas à la portée `*` globale.

## 3. C04 — RECORD_DECISION : effet présent, identité erronée

### 3.1 Message utilisateur effectivement envoyé

> Je décide que, pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes.
>
> Cette orientation constitue une priorité d'exploration, mais ne signifie pas que le besoin utilisateur est déjà validé.
>
> Nora, maintenant que cette décision est exprimée, aide-moi à identifier la prochaine question importante à poser pour vérifier cette hypothèse.

### 3.2 Attendu / observé

**Attendu :** une HumanDecision `RECORD_DECISION APPLICABLE` exprimant la priorité *d'exploration des difficultés de coordination/suivi des décisions entre équipes*, avec sa réserve sur la validation du besoin. La demande à Nora est une instruction de conversation, pas un champ décisionnel. `objectRef` doit rester une référence métier utile et stable.

**Observé :** `RECORD_DECISION APPLICABLE` présent, révision 2, deux décisions ; consigne « Nora, maintenant que… » exclue. En revanche :

- l'énoncé durable commence par **« que, pendant ce cadrage… »** (préfixe syntaxique inutile) ;
- son **`objectRef` / libellé D6 affiché** est **« mais ne signifie pas que le besoin utilisateur »**, prélevé dans la réserve plutôt que dans l'arbitrage central ;
- le cycle est resté `CADRAGE ACTIVE` ; aucun autre effet non demandé.

### 3.3 Diagnostic de code Git (statique)

Fichier : `web/src/domains/pilotage/intent.ts`, fonction `deriveDecisionObjectRef` (début de fichier). L'expression :

```ts
/(?:que\s+)?(?:la|le|l['’])?\s*([^,?.;]{3,60}?)\s+(?:est|sera|devient|reste|doit|peu[tv])\b/i
```

est appliquée avant la fallback de tokens sur le cœur décisionnel. Sur **l'énoncé réellement persisté**, cette expression renvoie exactement `mais ne signifie pas que le besoin utilisateur`, à cause de la séquence `...besoin utilisateur est déjà validé`. **Reproduction statique confirmée.**

Dans `qualifyPilotageIntent`, le `record` capture la suite de `je décide` et `extractDecisionCore` supprime les consignes à Nora mais ne normalise pas entièrement le préfixe `que,`. Le test `ml3-rct02-intent.test.ts` vérifie l'absence de `aide-moi`, **pas la qualité de `objectRef` ni la fidélité complète de l'énoncé**.

### 3.4 Reprise ciblée demandée

- Identifier la responsabilité canonique de la référence d'objet D6. La déduire de l'arbitrage principal ou d'une référence explicitement nommée ; éviter de promouvoir une réserve secondaire comme sujet de décision.
- Normaliser sans réécrire le sens : retirer le préfixe artificiel `que,` ; conserver priorité, contexte, réserve et absence de validation du besoin.
- Préserver une référence suffisamment stable pour confrontation/révision ; pas de second registre d'autorité.
- **Ne pas migrer automatiquement l'ancienne décision polluée en RECETTE**. C05 doit pouvoir réviser la décision existante via un mécanisme de cible robuste malgré son ancien `objectRef`.
- Si l'objet ne peut être identifié de manière suffisamment sûre, préférer un statut explicite/clarification au libellé arbitraire ; ne pas fabriquer une vérité sémantique par le modèle.

### 3.5 Acceptance et contre-tests

- Message **intégral** ci-dessus via le véritable flux `USER_MESSAGE` → un seul RECORD, statement = deux phrases de décision, aucune consigne Nora, pas de `que,` initial.
- ObjectRef pertinent pour la décision (coordination/suivi entre équipes), et non sous-proposition `mais ne signifie…`.
- Deux décisions distinctes de sujet voisin ne se fusionnent pas par similarité lexicale.
- Aucun RECORD pour exemple, refus, hypothèse ou conseil de Nora.

## 4. C05 — REVISE_DECISION : absence de mutation malgré un GO explicite

### 4.1 Message utilisateur réellement envoyé

> Nora, je révise la décision que j'ai prise concernant la priorité d'exploration des difficultés de coordination et de suivi des décisions entre plusieurs équipes.
>
> Plutôt que de nous concentrer immédiatement sur ces difficultés, je décide que nous examinerons d'abord différentes situations réelles de coordination interéquipes pour identifier le problème véritablement prioritaire.
>
> Cette nouvelle orientation remplace la priorité précédente. Le besoin utilisateur reste à valider.
>
> Aide-moi ensuite à identifier les premières situations concrètes que nous devrions examiner.

### 4.2 Attendu / observé

**Attendu :** `REVISE_DECISION APPLIED` sur l'unique HumanDecision documentaire C04 ; ancienne version `REVISED`, nouvelle `APPLICABLE`, `supersedesDecisionId` correct, nouvel énoncé = arbitrage révisé (sans instruction « Aide-moi »), objet historique cohérent ; `CADRAGE ACTIVE` sans autre mutation.

**Observé :** Nora LIVE comprend le remplacement mais répond **« sans prétendre avoir enregistré son remplacement dans le système »**. Travail : `2 applicable(s) · 2 au journal · dernière RECORD_DECISION/APPLICABLE`. Pilotage : révision **2**, deux décisions, aucune REVISE ; ancienne RECORD toujours `APPLICABLE`. **Échec de l'effet confirmé par captures**.

### 4.3 Diagnostic de code Git (forte piste, non prouvé par log runtime)

- `conversation-authority.ts` → `resolveReviseTarget` utilise `findAuthorityReviseCandidates(utterance, briefs)` ; si 0 ou >1 candidats, **clarification sans mutation**.
- `decisions/divergence-assist.ts` → `selectAllApplicableBriefs` inclut **tous les types** `APPLICABLE` avec `objectRef`, y compris les **décisions D5 fondatrices**. Le filtrage `target.kind === 'RECORD_DECISION'` se fait **après** la sélection et le contrôle d'unicité dans `resolveReviseTarget`.
- La recherche exploite `utteranceTouchesObject`, ou, pour un `je révise` explicite, un recouvrement d'au moins **deux tokens significatifs** entre l'énoncé de la décision et le message utilisateur.
- Simulation sur les deux HumanDecisions visibles :
  - `OPEN_CYCLE` (énoncé : « définir précisément le problème utilisateur… ») touche le message C05 via **« problème »** et **« utilisateur »** ;
  - `RECORD_DECISION` C04 touche ce même message via **« besoin » / « utilisateur »** dans le `objectRef` dégradé, mais aussi via une quinzaine de tokens de son énoncé.
  - Résultat probable : **deux candidates**, donc `AMBIGUOUS`, alors qu'une seule est légalement révisable via `REVISE_DECISION`.

**Important :** la simulation des règles statiques confirme ces deux correspondances lexicales, **pas l'issue runtime exacte** ; Cursor doit lire `intentClarity`, `intentReason`, `authority.operation`, `source`, refus D6 et candidats retournés dans une reproduction PG intégrale. Éviter d'attribuer l'échec à Nora ou à l'objet C04 sans cette preuve.

### 4.4 Écart de couverture technique

`web/tests/unit/ml3-rct02-intent.test.ts` décrit son T05 comme **représentatif** : « Je révise la décision que j'ai prise sur l'orientation du cadrage. Cette nouvelle orientation… » ; ce n'est pas le message réellement envoyé dans cette recette. Le test de qualification en isolation ne prouve pas que `resolveReviseTarget` fonctionne avec deux décisions D6 dont une fondatrice `OPEN_CYCLE` et un `objectRef` historiquement pollué.

### 4.5 Reprise ciblée demandée

- Distinguer éligibilité *métier* de la cible et pertinence sémantique **avant** de décider l'unicité : `REVISE_DECISION` documentaire ≠ révision d'une HumanDecision fondatrice D5.
- Évaluer l'unicité seulement parmi les cibles admissibles, avec suffisamment d'indices d'identification ; pas de sélection automatique de la plus récente.
- Conserver les protections zéro/pluriel candidat, portées distinctes, concurrent, D5 fondateur, replays et absence d'autorité d'une proposition Nora/CKI.
- Préserver l'objet historique de la décision révisée et les liens `supersedes`; **pas de réécriture rétroactive** de C04.
- Test positif obligatoire avec **les deux messages complets C04 puis C05**, depuis le service conversationnel, et transition réelle en PG.

### 4.6 Oracles négatifs

- Deux décisions documentaires distinctes touchées : **clarification**, aucune mutation.
- Aucune décision documentaire applicable : clarification, aucune mutation.
- Révision d'une OPEN_CYCLE ou d'une restriction fondatrice : **refus typé** sans mutation.
- Reformulation exploratoire « j'envisage de réviser… » : aucune décision.
- Rejeu du même tour/ACK perdu/concurrence : aucune double révision.

## 5. C06 — LIFT_RESTRICTION : mention négative d'une autre opération assimilée à un second GO

### 5.1 Préconditions observées

Depuis Pilotage : `APPLY_RESTRICTION APPLICABLE` ; restriction `CYCLE_MUTATION` ciblée sur l'instance `cyc_b03f4df8-2099-476b-8dfd-6a4fda5e12ff` ; CADRAGE `ACTIVE`, révision 3, journal 3 décisions.

### 5.2 Message utilisateur réellement envoyé

> Nora, je décide de lever uniquement la restriction CYCLE_MUTATION actuellement active sur le cycle CADRAGE.
>
> Cette levée concerne uniquement ce cycle. Je ne souhaite ni clôturer le cycle, ni en ouvrir un autre.
>
> Une fois cette décision appliquée, confirme-moi ce qui a réellement été enregistré dans Studio.

### 5.3 Attendu / observé

**Attendu :** `LIFT_RESTRICTION APPLIED`, exactement la restriction ciblée levée, aucune `CYCLE_MUTATION` active, CADRAGE reste `ACTIVE`, révision **4**, journal **4**, pas de CLOSE/OPEN.

**Observé :** Nora LIVE reconnaît l'intention et la cible mais indique ne pas pouvoir confirmer la levée. Pilotage : **révision 3**, restriction encore `ACTIVE`, journal toujours à **3** décisions, aucun LIFT. **FAIL confirmé**.

### 5.4 Diagnostic Git (reproduction statique)

Dans `intent.ts`, `findLiftRestrictionAct` reconnaît un `je décide de lever` et un kind `CYCLE_MUTATION`. Mais `qualifyPilotageIntent` vérifie ensuite :

```ts
const alsoClose =
  /\bcl[oô]tur/i.test(text) &&
  !/\bne\s+(?:pas\s+)?(?:cl[oô]tur|ferme)|sans\s+cl[oô]tur/i.test(text);
```

La phrase **« Je ne souhaite ni clôturer le cycle, ni en ouvrir un autre »** comporte `clôturer` mais ne correspond pas au motif protecteur `ne clôtur...`. Sur le message réel, `alsoClose` vaut **`true`**, malgré la négation. Le qualificateur retourne alors `AMBIGUOUS` (« Levée et clôture dans le même message »), avant la résolution de restriction. **Correspondance statique confirmée ; cause runtime à valider par trace.**

Le test unitaire positif actuel dit seulement **« Ne clôture pas le cycle »** après le GO de levée : il n'inclut pas la formulation effectivement testée **« Je ne souhaite ni clôturer…, ni en ouvrir… »**.

### 5.5 Reprise ciblée demandée

- Distinguer une seconde **commande affirmative** d'une mention négative, réservée ou explicitement exclue par le Pilote.
- Contrôler la portée de la négation au niveau de la clause d'action : « je ne souhaite ni clôturer ni ouvrir » ≠ CLOSE/OPEN.
- Maintenir l'interdiction d'exécuter deux opérations affirmatives incompatibles dans un même tour ; clarification sans effet dans ce cas.
- Résoudre l'instance précise du cycle et la restriction unique, avec autorité D6 au point d'effet, sans second moteur.
- Préserver les cas négatifs précédemment corrigés : « Ne lève pas… », « Je refuse de lever… », « Je ne t'autorise pas à lever… », citation, question, autre cible, plusieurs restrictions, session étrangère.

### 5.6 Acceptance

Sur message complet C06 et état initial PG correspondant : **un seul LIFT**, aucune restriction active, cycle toujours ACTIVE et aucune OPEN/CLOSE ; Nora obtient le résultat d'autorité confirmé et peut le restituer honnêtement. Contre-tests : zéro mutation.

## 6. Autres preuves utiles : C01/C02/C07/C08 et faux GO

- **C01+C02 PASS** : T01 développé → `OPEN_CYCLE APPLIED`, CADRAGE ACTIVE révision 1 et objectif « définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier » correctement conservé. Nora LIVE confirme l'effet et démarre le cadrage sans déclarer les besoins validés.
- **C07 PASS** : après levée manuelle, Nora LIVE indique révision 4, CADRAGE ACTIVE, aucune restriction active et explique que les décisions APPLY/LIFT sont des traces historiques, pas la projection effective. Aucune clôture non demandée.
- **C08 PASS** : demande explicite de clôture, avec réserves et refus d'ouverture automatique ; `CLOSE_CYCLE APPLIED`, révision 5, aucun cycle actif, cinq décisions. Nora distingue conservation dans le message source et absence de preuve de points ouverts structurés.
- **Faux GO PASS** : citation `« Ouvre le cycle CONCEPTION_FONCTIONNELLE »` dans un exemple explicitement non autorisant ; aucune ouverture ; révision et journal restent à 5.
- **C03** : guidance non citée spontanément en CADRAGE dans les réponses observées ; intercycles non testé, **non clos**.

Ne modifier ni les règles ayant permis ces succès, ni les composants externes sans risque démontré. Après la reprise, effectuer des **non-régressions ciblées** (unit, PG, E2E FAKE, navigateur si applicable), puis seulement une nouvelle RECETTE LIVE ciblée après autorisation de mise à disposition sur un nouveau SHA.

## 7. Contrat d'acceptation du macro-lot ciblé

| Groupe | Condition de sortie | Niveau de preuve requis |
|---|---|---|
| C04 | Statement propre et `objectRef` pertinent sur message réel | Unit + PG depuis conversation USER + projection/journal |
| C05 | Bonne cible documentaire même en présence de OPEN_CYCLE et d'un ancien `objectRef` pollué | Unit + PG avec C04 historique + REVISE + historique correct |
| C06 | Levée affirmative malgré exclusion négative de CLOSE/OPEN | Unit + PG avec restriction ciblée, 0 autres opérations |
| Autorité négative | Faux GO, plusieurs cibles, restrictions, refus, historique, hypothèse | Unit + PG, **zéro mutation**, état stable |
| Reprise/idempotence | Un tour = une seule décision ; conservation après replay/ACK perdu | PG + E2E déterministe proportionné |
| Régressions | C01/C02/C07/C08, cockpit, CKI silencieux | Tests ciblés ; pas de nouveau PASS LIVE sans retest utilisateur |
| Cohérence documentaire | Spec ML3, traçabilité et delivery-history synchronisés avec code | Diff + Review Pack Full |

**Sévérité :** C05 et C06 majeures pour l'expérience conversationnelle D6 ; C04 correction de qualité durable pouvant affecter les cibles futures ; conservation des faux GO et restrictions = invariant de sûreté **bloquant**.

## 8. Frontières et gates

- **IN :** diagnostic et corrections intégrées C04/C05/C06, code D3/D6 nécessaire, tests unit/PG/E2E pertinents, doc as-built, Review Pack Full, handoff L3.
- **OUT :** nouveaux domaines fonctionnels, moteur LLM autonome d'autorisation, migration DB, rétrocorrection des données de RECETTE, refonte UX, nouvel algorithme NLP universel, C03 hors non-régression, CI nouvelle, API Git, D7–D9.
- **Git :** source candidate `sfia/next-ml3-rct02-correctifs@d646d42a` ; worktree local **NON OBSERVÉ**, à vérifier par Cursor. Recommandation : branche locale isolée depuis `d646d42a`. Aucun push projet, PR ou merge sans gate distinct.
- **ENV-01 :** DEV isolé uniquement pour les changements ; préserver RECETTE `:3200` (build `R7JhVsbMaJdiUuuljApyn`, données schéma 007, session et fichiers) et l'ancien candidat `ba831b25`. Aucun reset ou migration sans mandat.
- **Versioning :** technique `0.0.0-dev`; `NO RELEASE`, STABLE `NOT AVAILABLE`, aucune nouvelle version produit attribuée.
- **Droits / sécurité :** seul le Pilote USER authentifié autorise ; Nora/CKI/Level A ne décident pas ; `executePilotageCommand` reste propriétaire unique des mutations ; relecture effective/revision attendue avant mutation.
- **Preuves :** tests locaux ≠ navigateur ≠ LIVE. Rapport Cursor autonome mono-cycle, fichier `.tmp-sfia-review/chatgpt-review.md` réinitialisé, handoff `sfia/review-handoff` fichier unique `sfia-review-handoff/latest-chatgpt-review.md` en `publish-in-cycle`.
- **Gates futurs distincts :** GO Morris pour commit/push projet, nouveau candidat RECETTE, reprise LIVE, PR, merge, clôture ML3, STABLE/release/adoption.

## 9. Index des preuves visuelles annexes

Les captures originales, exportées de la conversation, sont **jointes au bundle local** associé à cette restitution. Elles ne sont pas publiées sur Git et ne sont pas directement accessibles à Cursor sans transfert du bundle.

| Pièce | État montré |
|---|---|
| `A01-open-work.png` | Nora LIVE + `OPEN_CYCLE APPLIED` |
| `A02-open-pilotage.png` | CADRAGE ACTIVE rev1, objectif et HumanDecision |
| `A03-c04-pilotage.png` | RECORD rev2, `objectRef` et énoncé dégradés |
| `A04-c05-work.png` | Nora reconnaît révision, ne confirme pas l'effet |
| `A05-c05-pilotage.png` | rev2 et 2 décisions inchangées |
| `A06-restriction-active.png` | prérequis C06, rev3 APPLY |
| `A07-c06-work.png` | Nora comprend GO, ne confirme pas LIFT |
| `A08-c06-pilotage.png` | restriction toujours ACTIVE, rev3 |
| `A09-lift-ui.png` | levée par cockpit, rev4 |
| `A10-c07-work.png` | Nora LIVE lit aucune restriction active et historique |
| `A11-c08-pilotage.png` | CLOSE rev5, aucun cycle actif |
| `A12-faux-go-pilotage.png` | commande citée, zéro OPEN, rev5 |

**Conclusion :** ce complément est une source de défauts et une base de test, **pas une décision normative**. Le prochain Cursor doit d'abord reproduire et qualifier les causes, puis corriger **un macro-lot unique**, avec non-régression complète des effets déjà acceptés.

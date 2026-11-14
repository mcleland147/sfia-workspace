# SFIA Studio Next — ML4C P0 Pre-execution Qualification (Read-Only)

## A. Date et heure

- Cycle: P0 — Qualification technique finale en lecture seule (pré-exécution correctif D3/D4 + S05)
- Horodatage local: 2026-11-14 21:37:48 CET
- Mandat: contrat Cursor pré-exécution / gates ; **aucun code produit modifié**
- Phases P1–P5: contractualisées, **non exécutées**

## B. Git Truth Check

| Contrôle | Attendu | Observé | Verdict |
| --- | --- | --- | --- |
| toplevel | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` | identique | OK |
| branche | `fix/next-semantic-intent-convergence-20261112` | identique | OK |
| HEAD | `d936da81ebf7d17eb78cc11da0538df000281a4a` | identique | OK |
| tree | `276679be1ea139525b2267cde9245b8fb88e9a76` | identique | OK |
| parent | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` | identique | OK |
| `origin/main` | baseline `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` | `6cda86bd…` | OK inchangé |
| PR #676 | OPEN / NOT MERGED ; HEAD distant `67bf6b0b` | `state=OPEN`, `headRefOid=67bf6b0b…` | OK |
| `origin/fix/next-semantic-intent-convergence-20261112` | n/a (HEAD local only) | ref absente / non publiée | OK attendu |
| worktree dirty | pack local seulement | uniquement `.tmp-sfia-review/chatgpt-review.md` | OK (pack) |
| staged | vide | vide | OK |
| untracked produit | aucun | aucun fichier produit | OK |

**STOP Git:** non déclenché. HEAD `d936da81` reste LOCAL ONLY ; non remplacé par le HEAD PR.

Conception corrective (source candidate, non implémentée):

| Champ | Attendu | Observé |
| --- | --- | --- |
| Branche | `docs/next-ml4c-d4-continuity-corrective-design-20261114` | commit `c883db07dcc3fd2fb8063daa89b5ffe8e63f4e96` |
| Fichier | `projects/sfia-studio-next/construction/convergence-fonctionnelle/conception-corrective-fiabilisation-d4-continuite-s05-20261114.md` | présent |
| Blob | `da3974241597f56b24f7e1c2413bad4338115a6b` | `da397424…` **MATCH** |

Aucune mutation: checkout destructif / reset / clean / rebase / pull auto / cherry-pick / force — **non effectués**.

## C. Sources et refs

Lues / confrontées (lecture seule):

- Conception candidate `c883db07` / blob `da397424` (§1–11: périmètre, diagnostics, INV-01..10, S05, D3/D4, vérité/ACK, sas, blast radius, QA-01..20, P0–P5, G-01..G-10)
- Candidat local exact `d936da81` (worktree produit + WT RECETTE miroir `…-ml4c-recette-build-d936da81` pour lecture code figé)
- Handoffs: S05 `6e0468d6`; PROPOSAL `2340c2e2`; Q1 diff `2afd7b57`; Q2 preuves `746f0813`
- Journal Q3: `docs/next-ml4c-uat-journal-20261112@bb7769de` (référencé, non réécrit)
- Gouvernance main: ENV-01 `environnements-recette-et-promotions.md` **ON MAIN** ; `product-versioning.md` **ON MAIN** (`NO RELEASE / STABLE NOT AVAILABLE`)
- CKC: corpus méthodologique présent sous `method/sfia-fast-track/.../cycle-knowledge-contracts/` — **aucun CKC obligatoire inventé** pour ce cycle Next ML4C
- RECETTE historique (réf.): build `n-7E8DgbcVu4g_RJWZoiK` ; DB `sfia_next_recette_ml4` hôte `:5434` ; consultations SQL **READ ONLY** uniquement
- Aucun secret / DSN affiché

## D. Résultats P0-A à P0-E (synthèse)

| Segment | Résultat |
| --- | --- |
| P0-A | Cartographie exacte des frontières D3/D4/S05 sur `d936da81` — fichiers listés présents |
| P0-B | Deux UNKNOWN Intervencia qualifiés ; `allowOwnerEffects` inventorié (D2/D4/D5/D6/D7) ; classification S05 **réalisable** sans nouvel état DB |
| P0-C | Cause `PROPOSAL_SOURCE_CONFLICT` = égalité stricte vs LF structurel déjà émis par `serializeProposalFence` ; emplacement minimal = `confrontProposalWithFence` |
| P0-D | Sas T-D4-NEUF-01: cause **démontrée** — qualification Nora `UNAVAILABLE` → `reply.status=UNKNOWN` → D4 non atteint ; propriétaire accepte `projectId=null` |
| P0-E | Blast radius borné ; surfaces inchangées listées ; QA-01..20 mappés ; G-01..G-10 contrôlés |

## E. Cartographie du code exact (P0-A)

Préfixe: `projects/sfia-studio-next/web/src/`

| Fonction / symbole | Fichier | Responsabilité | Entrée | Sortie | Autorité | Effet possible | Tests | Docs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `postUserMessageAndNora` | `domains/conversation/service.ts` | Orchestrateur tour | USER + prep | TurnResult | Pilote + ownership token | D2/D4/D5/D6/D7 via gardes | e2e/intég S05 + document | ML4C contrats |
| `findUnresolvedSiblingTurns` | `turn-command.ts` | Siblings RUNNING/ACCEPTED/UNKNOWN | conv+pilot | rows (sans ORDER BY) | serveur | aucun (lecture) | unit semantic-qual ; e2e S05 | design §4 |
| `loadLatestMissionsByIntentKey` | `intent-conduction.ts` | Missions non résolues | conversationId | map missions | serveur | aucun (lecture) | ml4c-d2-mission* | design §4 |
| `allowOwnerEffects` / `pendingEffectBlocked` | `service.ts` ~704–754 | Garde S05 globale | siblings+missions+nextTurnKind | bool + reason | orchestrateur | bloque D2/D4/D5/D6/D7 | e2e `ml4c-s05-*` | design §4 |
| `effectIntents` / `projectStudioEffects` / `extractPilotageBinding` | `semantic-qualification.ts` | Projection effets depuis SQ **QUALIFIED only** | qualification | intents/act/binding | Studio | aucun tant que non appliqué | `semantic-qualification.test.ts` | contrat technique |
| `canonicalizeDocumentProposal` / `serializeProposalFence` / `admitDocumentCommand` / `sealAndApplyDocumentCommand` / `resolveAssistantProposal` | `document-command.ts` | Identité + fence + admission + seal→owner | proposal/binding | exact/sha/effect | commande USER + intent | appelle `savePreparationDocument` | `document-command.test.ts` ; `ml4c-document-*.pg.test.ts` ; `ml4c-prior-proposal.pg.test.ts` | design §5 |
| `extractContractualDocumentProposal` / `appendDocumentEffectAck` / `composeDocumentTurnMessage` | `document-act.ts` | Parse fence + ACK | content+effect | extract / message final | Studio | aucun write | `document-act.test.ts` | design §6 |
| `confrontProposalWithFence` | `service.ts` ~308–328 (**local, non exporté**) | Confront authority vs fence | proposal+extract | ok / `PROPOSAL_SOURCE_CONFLICT` | same-turn | bloque D4 avant save | intég prior-proposal (chemin service) | design §5 — **site correctif minimal** |
| Nora LIVE adapter | `nora-adapter.ts` | Génération + SQ ; `UNAVAILABLE`→`status=UNKNOWN` | prompt+tools RO | reply | fournisseur | aucun write métier | LIVE / boundary | SEM |
| `savePreparationDocument` | `domains/document/service.ts` | Propriétaire D4 | pilot+prep+title+md ; **`projectId: ctx.project?.id ?? null`** | AVAILABLE/FAILED/CONFLICT/UNKNOWN | Pilote+fence+corrélation | INSERT doc/rév | pg document* | R2 sas |
| Schema | `db/schema.ts` | documents.project_id nullable | — | — | — | — | — | — |

**Routes / UI applicables (inventaire, non modifiées):**

- `app/projects/[projectId]/page.tsx` — consomme `pendingEffectBlocked`
- API conversation / messages (orchestrateur ci-dessus)
- `app/api/dev/e2e/s05-fixture/route.ts` — fixture S05 (DEV/E2E)

**Usages `allowOwnerEffects` (inventaire complet):**

1. `service.ts:760` — D5/D6 `applyConversationalAuthority` (+ exige `ctx.project?.id`)
2. `service.ts:952` — capitalisation + **D4 CREATE/REVISE** (exige aussi `reply.status==="COMPLETE"`)
3. `service.ts:1591` — mission D7 prepare publication (après D4 AVAILABLE + project)
4. `service.ts:1696` — D2 preview / mission create project (`!ctx.project?.id`)

Aucun autre usage product trouvé hors tests / fixture.

## F. Matrice de risque et blast radius (P0-E)

| Transformation future | Direct | Indirect | Risque | Preuve / tests | STOP? |
| --- | --- | --- | --- | --- | --- |
| P1 — séparateur LF dans `confrontProposalWithFence` (+ round-trip serialize) | `service.ts` confront ; éventuellement tests unit | ACK composition ; prior-proposal | faux positif accepté si trim générique | QA-02..06 ; tests existants PROPOSAL_SOURCE_CONFLICT | G-04 si contenu altéré |
| P2 — politique S05 pure près siblings | `service.ts` + helper pur ; `turn-command` ORDER BY déterministe | D2/D4/D5/D6 via `allowOwnerEffects` | déblocage abusif UNKNOWN | QA-07..10,19,20 ; e2e S05 | G-02/G-03 si état durable requis |
| P3 — vérité ACK / sas | `document-act` ACK ; projection Nora/context | UX fil/bibliothèque | faux « a exécuté » | QA-13..16 | G-07 si outil mutatif Nora |
| Schéma DB / migrations | — | — | hors mandat | — | **STOP permanent sans GO** |
| RECETTE data cleanup | — | — | perte preuves | — | **G-10 / interdit** |

**Surfaces devant rester inchangées sans GO:** SEF, décisions, roadmap, schema/migrations, secrets, publication Git réelle, chemins historiques, enums publics, tables UNKNOWN.

## G. Qualifications des UNKNOWN (P0-B)

Conversation Intervencia: `conv_d7b4495b-0e67-453f-ba09-d9cf15127101`

### UNK1 — `turn-6424c417-8bf0-4732-a0fa-1e73444e9f70`

| Champ | Valeur |
| --- | --- |
| commandId | `tcmd_e5b282ae-32fc-42b8-846d-82b491edc264` |
| operationId | `op_2d4a8052-de41-43e0-bcea-657462bbff2c` |
| status | `UNKNOWN` |
| SQ durable | `UNAVAILABLE` (stashé) |
| cible métier | D5 OPEN_CYCLE « Projet Inexistant S02-06 » (intent présent mais **non actionnable**) |
| propriétaire potentiel | D5/D6 (`applyConversationalAuthority`) — **non appelé** (`extractPilotageBinding` → ambiguous `QUALIFICATION_UNAVAILABLE` car `status≠QUALIFIED`) |
| phase atteinte | génération Nora + stash SQ ; **avant** mutation propriétaire |
| `documentSave` | `null` |
| `pilotageEffect` | `null` |
| `humanDecisionCreated` | `false` |
| `toolCallsObserved` | `0` |
| owner tables (± fenêtres) | `business_commands`/`human_decisions`/`effect_attempts`/`project_cycles`/`documents`/`document_revisions` = **0** |
| corrélation/idempotence | tour UNKNOWN ; pas d’effet D4/D5 corrélé |
| réconciliation propriétaire | possible via relecture SQ durable + tables propriétaires (déjà vides) |
| risque vs CREATE D4 | **indépendance démontrable** sous politique candidate: `effectIntents([])` si ≠QUALIFIED + absence d’effet owner ; classification interne cible `PROVEN_NO_EFFECT` **sans** muter le statut UNKNOWN |

### UNK2 — `turn-e5be1dd4-c15e-4438-84a8-69b463fdbb5a`

| Champ | Valeur |
| --- | --- |
| commandId | `tcmd_c31c1128-3dd7-4fea-b0e8-f726e87854ee` |
| SQ | `UNAVAILABLE` ; intents lecture confidentialité (`d4.read_knowledge` EXPLORE / `d3.converse`) |
| `pendingEffectBlocked` | `true` — `S05_PENDING_BLOCKS_AMBIGUOUS:turn-6424c417…` |
| mutation | **non** (déjà bloqué S05 + ≠QUALIFIED) |
| owner tables fenêtre | **0** |
| classification cible | `PROVEN_NO_EFFECT` / `PROVEN_INDEPENDENT` vs CREATE D4 (lecture/confidentialité ; aucun REQUEST_EFFECT actionnable) |

**Important:** `documentSave=null` **seul** n’est pas utilisé comme preuve. La preuve combine: (1) SQ durable `UNAVAILABLE`, (2) contrats code `effectIntents`/`extractPilotageBinding` exigeant `QUALIFIED`, (3) `reply.status≠COMPLETE` pour D4, (4) zéro ligne propriétaire.

**Faisabilité S05 sans machine d’états:** oui — fonction de politique pure + requêtes owner existantes + fencing/CAS déjà au point d’effet (`turnFence` dans `savePreparationDocument`). Classifications `ACTIVE_EFFECT_RISK` / `UNKNOWN_EFFECT_RISK` / `PROVEN_NO_EFFECT` / `PROVEN_INDEPENDENT` / `SAME_INTENT` = **internes non persistées**.

**Écart actuel:** tout sibling UNKNOWN ⇒ `allowOwnerEffects=false` pour `INTENTION_EFFET` **et** `INCERTAIN` ; `findUnresolvedSiblingTurns` sans `ORDER BY` ; un seul `blockingSibling` exposé (les autres non listés dans la raison).

## H. Diagnostic sas T-D4-NEUF-01 (P0-D)

| Champ | Valeur |
| --- | --- |
| préparation | `prep_1e2c0adc-0251-4cbd-ae28-3f0a43eca0ef` |
| conversation | `conv_9aff9b3e-6bcc-4a33-a98c-f15c460f4eaf` (`project_id` NULL) |
| tour | `tcmd_1bb7992b-9545-485d-8fa6-463687387bbc` / `op_059f56f8-233f-4975-bc0f-6e4787470e9a` / `turn-cc8b774b-…` |
| USER | autorisation explicite CREATE D4 + titre/contenu exact |
| SQ | `status=UNAVAILABLE` ; intent `d4.create_document` REQUEST_EFFECT ; **`documentProposal` présent** (titre+corps) ; clarifications `[]` |
| replyDraft | refuse cognitif: « préparation sans projet » + « outils ne permettent pas l’écriture D4 » ; fence `sfia-document` présente |
| `pendingEffectBlocked` | `false` |
| `documentSave` | `null` |
| documents sur prep | **aucun** |
| `noraMode` | `openai-agents-sdk-live` |
| tools | RO (D4 read / history) ; `toolCallsObserved=0` |

**Cause démontrée (ordre causal):**

1. **Compréhension cognitive Nora** — refuse d’écrire faute de projet / outils mutatifs.
2. **Sortie structurée `UNAVAILABLE`** — malgré `documentProposal` et intent CREATE.
3. **`nora-adapter`:** `qualification.status==="UNAVAILABLE"` ⇒ `reply.status="UNKNOWN"` (l.591–615).
4. **Orchestrateur:** D4 seulement si `reply.status==="COMPLETE" && allowOwnerEffects` (l.952) ⇒ **D4 non atteint** (`d4_attempted` effectif = false).
5. **Pas** une garde Studio exigeant `projectId` sur le propriétaire: `savePreparationDocument` écrit `projectId: ctx.project?.id ?? null` (l.669).
6. **Pas** un conflit de source documentaire sur ce tour (proposal+fence présents ; pas de `PROPOSAL_SOURCE_CONFLICT` enregistré).
7. **Pas** un refus d’admission D4 (chemin non exécuté).

**Classification mandat:** cause = (1)+(2) couplées au gate COMPLETE ; **pas** une 3ᵉ cause racine du type « owner refuse null project ». Réserve conception « CAUSE NON ÉTABLIE » est **levée** pour le parcours observé.

**Correction isolable (future, hors P0):** clarifier projection/instructions sas — outils Nora RO ≠ impossibilité D4 Studio ; viser `QUALIFIED`+`COMPLETE` avec proposal, sans outil mutatif Nora, sans projet artificiel, sans second moteur. Conditionnée au GO P3.

## I. Tests existants et écarts

| Couche | Assets | Couverture actuelle | Écart vs QA design |
| --- | --- | --- | --- |
| UNIT | `document-command.test.ts`, `document-act.test.ts`, `semantic-qualification.test.ts`, `ml4c-s05-thread-turn-qualification.test.ts` | serialize round-trip ; META trailing NL côté serialize ; S05 symbols | **pas** de test confront structural LF 433/434 ; pas de politique risque S05 pure |
| PG | `ml4c-document-*.pg.test.ts`, `ml4c-prior-proposal.pg.test.ts`, `ml4c-d2-mission-s05.pg.test.ts`, `ml2-turn-command.pg.test.ts` | PROPOSAL_SOURCE_CONFLICT divergence réelle ; prior source ; S05 mission | manque QA-02 positif structural ; QA-07 multi-UNKNOWN |
| E2E | `ml4c-document-continuity.spec.ts`, `ml4c-s05-*.spec.ts`, `ml4c-d2-mission-real-s05.spec.ts` | continuité / pending | sas QA-13 ; vérité ACK QA-16 |
| LIVE | RECETTE Q2/Q3 historiques | preuves handoff | rejeu après GO distinct |

## J. Matrice QA-01 à QA-20

| ID | Portée | Couverture actuelle | Action future |
| --- | --- | --- | --- |
| QA-01 | CREATE nominal | partielle (pg/e2e) | P4 rejeu projet vierge |
| QA-02 | LF structurel | **écart** (serialize OK ; confront strict) | P1 obligatoire |
| QA-03 | divergence refusée | présent (prior-proposal) | conserver |
| QA-04 | meta/fence invalides | présent (parseFenceMeta) | conserver |
| QA-05 | Unicode/CRLF/nested | partielle | P1/P4 renforcer |
| QA-06 | fence après ACK | compose append ACK ; à éprouver | P1/P3 |
| QA-07 | multi UNKNOWN | **écart** | P2 |
| QA-08 | UNKNOWN dangereux bloqué | fail-closed actuel trop large | P2 conserver cas risque |
| QA-09 | concurrence/idempotence | pg turn/document | P2/P4 |
| QA-10 | D2/D5/D6 | e2e/pg mission | P2 non-régression |
| QA-11 | reprise ancien doc | partielle prior-proposal | P4 |
| QA-12 | REVISE/baseRevision | pg document | P4 |
| QA-13 | D4 sas | **échec historique** ; cause P0 | P3 conditionné |
| QA-14 | pas de D2 implicite | code D2 act Pilote | P3/P4 |
| QA-15 | isolation Pilotes | owner checks | P4 |
| QA-16 | pas faux ACK exécuté | écart (FAILED wording même pré-effet) | P3 |
| QA-17 | UNKNOWN réel | reconstitution existante | P4 |
| QA-18 | pas Git implicite | D7 gated | P4 |
| QA-19 | tous bloqueurs + ordre | **écart** (no ORDER BY ; un seul sibling) | P2 |
| QA-20 | manque preuve ⇒ fail closed | politique cible | P2 |

## K. Contrôle G-01 à G-10

| Gate | Statut P0 | Note |
| --- | --- | --- |
| G-01 candidat | **CLEAR** | HEAD/tree/parent conformes |
| G-02 UNKNOWN | **CLEAR (faisabilité)** | preuve d’innocuité **établissable** via SQ+owners+contrats ; ne pas débloquer sans implémentation P2 |
| G-03 machine d’états | **CLEAR** | politique pure + fences existants suffisent ; pas de migration requise pour le design candidat |
| G-04 contenu | **CLEAR (design)** | séparateur structurel déjà dans `serializeProposalFence` ; confront à aligner sans trim générique |
| G-05 fidélité USER | **CLEAR avec limite** | design: ne pas inventer parseur littéral ; proposal same-turn = autorité intra-tour après rattachement |
| G-06 API publique | **CLEAR** | pas de changement API/schéma requis pour P1/P2 candidats |
| G-07 sas | **CLEAR** | cause démontrée ; correction isolable sans outil mutatif / projet artificiel |
| G-08 sécu/idempotence | **N/A code** | à vérifier en P4 post-impl |
| G-09 contradiction | **CLEAR** | pas de contradiction normative bloquante SEF/R2/ENV-01/versioning détectée pour ce design candidat |
| G-10 déploiement | **CLEAR** | aucun déploiement/PR/merge/push produit dans ce cycle |

## L. Conditions non levées / hors P0

- **GO technique Morris** requis avant toute édition code (P1+)
- Implémentation P1–P5 **non autorisée** ici
- RECETTE: zéro mutation ; UNKNOWN historiques **conservés**
- Classification S05: **prouvable**, pas encore **codée**
- QA-02/07/13/16/19: écarts de couverture jusqu’au delivery
- ACK `formatDocumentEffectAck` FAILED: phrase « Studio a exécuté… » même quand précontrôle refuse (`d4_attempted=false`) — dette vérité P3
- `composeDocumentTurnMessage` utilise `trimEnd()` sur le corps avant ACK — surface à ne pas élargir en correctif générique de contenu
- CKC méthodologique existant mais **non imposé** comme contrat obligatoire de ce cycle

## M. Verdict unique

**PRE-EXECUTION QUALIFIED — TECHNICAL GO REQUIRED**

Gates P0-01…P0-10: **admissibles** sur preuves read-only. Aucun code modifié. Aucun FIX IMPLEMENTED / S03-01 PASS / T-D4-NEUF-02 PASS / SAS D4 PROVEN / ML4C ACCEPTED / GATE C CLOSED / STABLE / ADOPTED.

## N. Arbitrage / GO technique attendu

Attendu de ChatGPT / Morris:

1. Confirmer ou amender le contrat technique `c883db07` à la lumière du diagnostic sas **maintenant établi**.
2. Si conforme: émettre un **contrat de delivery Cursor distinct** (allowlist, P1→P5, tests QA, STOP) — **seul Morris autorise** l’exécution.
3. Ordre candidat inchangé: P1 intégrité documentaire (`confrontProposalWithFence` structural LF) → P2 S05 politique pure → P3 intégration/ACK/sas → P4 preuves → P5 packaging.
4. Conserver RECETTE Q3 / UNKNOWN comme preuves ; aucun nettoyage.

### GATE-P0 checklist

| ID | Verdict |
| --- | --- |
| GATE-P0-01 code/Git | **PASS** |
| GATE-P0-02 SEF/R2/ML4C/ENV-01/versioning | **PASS** (pas de contradiction bloquante) |
| GATE-P0-03 UNKNOWN + owners | **PASS** |
| GATE-P0-04 classification S05 réalisable | **PASS** |
| GATE-P0-05 absence risque prouvable | **PASS** (méthode+données) |
| GATE-P0-06 concurrence au point d’effet | **PASS** (fences/CAS existants) |
| GATE-P0-07 séparateur identifiable | **PASS** (`serializeProposalFence` needsStructuralNl) |
| GATE-P0-08 ACK + fence parseable | **PASS** (composition append ; à non-régresser) |
| GATE-P0-09 sas isolable | **PASS** (cause démontrée) |
| GATE-P0-10 matrice non-régression | **PASS** (QA-01..20 mappés + écarts explicites) |

### Fichiers produit modifiés

**AUCUN.**

### Handoff

Publisher canonique: `scripts/sfia/publish-review-handoff.sh` (L3 borné `sfia/review-handoff`).

---

Fin Review Pack FULL — cycle P0 ML4C pré-exécution.

# SFIA Review Pack — ML5 MaintiPlan Integrated Root Cause Diagnostic — 2026-11-27

**Date UTC :** 2026-11-27T12:35Z
**Mandat :** GO Morris — ML5 MAINTIPLAN INTEGRATED ROOT CAUSE DIAGNOSTIC — CRITICAL — READ ONLY
**Cycle :** 9 — QA / validation · RUN / DIAGNOSTIC / READ ONLY
**Profil :** CRITICAL
**CKC Cycle 9 :** PRESENT — `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` — status `candidate` — **CANDIDATE GUIDANCE ONLY** (aucune autorité autonome)
**Classe produit :** NO RELEASE

**Anti-stub :** REVIEW PACK COMPLETE — causes avec preuves code SHA `e8e6e069` + PG READ ONLY + PV `8acc3074` — pas de mutation produit.

---

## 1. Git Truth Check

| Item | Valeur |
|---|---|
| Workspace | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD initial=final | `58ca9486003805f74e69a0842f2c0792a7184437` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| docs convergence (distant) | `8acc3074fba244d217b0249d5839ef2ea0321402` |
| review-handoff avant | `9ec930e2cbee09f1fcc3384753eafbf64d97251c` |
| Candidat | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` |
| Tree repo / web | `30c12ad9…` / `03c30e4c…` |
| Relation | candidat **ancêtre** de HEAD docs ; HEAD n’est pas ancêtre du candidat (docs-only tip) |
| Dirty entrée | `.tmp-sfia-review/chatgpt-review.md` seul (pack) — **préservé / réinitialisé** pour ce cycle |
| Staged | aucun |
| Worktree RECETTE | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa` |

**Verdict Git :** cohérent — STOP non déclenché.

---

## 2. ENV-01

| Contrôle | Résultat |
|---|---|
| URL / BUILD | `:3200` · `<!--rpEczSp61evIZ7d6fnIWR-->` · digest `18e014c1…` |
| PID / cwd | `22935` · worktree e8e6e069…/web — **non redémarré** par ce cycle |
| Lane | `STUDIO_LANE=RECETTE` |
| PG | `sfia_next_recette_ml4` · :5434 · rôle isolé · schéma 027 (`derived_embedding_chunks`) |
| Flags | DICTATION=1 live · JUDGMENT=1 · EMBED pg+search · VISION=1 · WEB=0 · Admin OFF · fixtures unset |
| Cognitive ceilings | 120 / 1M / 2M — **non modifiés** |
| OpenAI fp | expected `f27d814e…` · forbidden `ab6bbec8…` |
| Org/projet fournisseur | **NON VÉRIFIÉ** (réserve connue) |
| DEV | :3100 non servi · :5433 distinct |
| Mutations ce cycle | **aucune** (SELECT READ ONLY only) |

**Verdict ENV :** ENV ROUTING COMPLETE

**Product Versioning :** NO RELEASE — inchangé.

---

## 3. Sources consultées (effectives)

- PV MaintiPlan : `origin/docs/…@8acc3074` → `construction/recette-utilisateur-ml5-maintiplan-20261127.md`
- Handoff activation `9ec930e2` (réf.)
- Code candidat `e8e6e069` : `cognitive-policy.ts`, `provisional-cognitive-policy.ts`, `resource-admission.ts`, `resource-catalog.ts`, `run-nora-cognitive-turn.ts`, `nora-adapter.ts`, `intent-conduction.ts`, `semantic-qualification.ts`, `s05-pending-policy.ts`, `composer-dictation-*`, `PreparationConversation.tsx`, `ComposerDictationControl.tsx`, `project-context.ts`, `ProjectOverview.tsx`, `PersonalRailSettingsMenu.tsx`, `StudioShell.tsx`
- PG RECETTE READ ONLY : projects, conversations, messages, cognitive_works, provider_usage_observations, human_decisions, knowledge_*, documents/revisions, business_commands, project_cycles
- CKC pilot 04-qa-validation.md (candidate)
- Contrats cités dans le mandat : lus sélectivement selon dépendance causale (allocation, conducteur, D4/D5/D6)
- Figma : **non mesuré F2** ce cycle — références PV/contrats seulement

---

## 4. L1 — Cartographie as-built Nora (candidat e8e6e069)

### 4.1 Flux nominal

```
USER message
 → conversation/service.ts (turn)
 → cognitive work create/attach (cognitive-work.ts)
 → semantic qualification (semantic-qualification.ts) [intents ≤12]
 → cognitive policy resolve (cognitive-policy.ts)
      ← resolveOperationalDefaultResource() [provisional-cognitive-policy.ts]
      ← admitModelEffort() [resource-admission.ts]
 → run-nora-cognitive-turn / nora-adapter (Responses + tools)
 → Frontier HTTP gate (provider-emission-frontier.ts) + usage-accounting
 → mobilizeCapability / owner effects (intent-conduction.ts → D2/D4/D5/D6/D9)
 → S05 pending sibling policy (s05-pending-policy.ts)
 → checkpoints / production_json / reply persist
 → activity projection + FinOps observations
```

### 4.2 Politique modèle effective RECETTE

Fichier `cognitive-resources/provisional-cognitive-policy.ts` (extrait discriminant) :

- Absent/`legacy_sol` → défaut **gpt-6.2-sol @ medium**
- `v0.2` **refusé si `STUDIO_LANE !== DEV`** → `COG_POLICY_V02_REFUSED_NON_DEV_LANE` + fallback legacy_sol
- Luna/Terra : `admissionStatus: documented_candidate` ; admis seulement si `provisionalActive`

Fichier `resource-admission.ts` mode operational :

- Si provisional OFF : seul **Sol low|medium|high** admis
- Luna/Terra → `UNCALIBRATED_MODEL_OPERATIONAL`

`SFIA_COG_PROFILE_TYPE=OPERATIONAL_PROVISIONAL` active les **budgets** profil sur DEV|RECETTE, **pas** le catalogue multi-modèles provisoire.

**Chemin nominal RECETTE :** Sol medium fixe (legacy).
**Chemin alternatif DEV :** Terra medium défaut + Luna low/medium si `SFIA_COG_PROVISIONAL_POLICY=v0.2`.
**Présent non raccordé en RECETTE :** catalogue Luna/Terra + guidance 51 rows (consultative).

### 4.3 Dictée

- API/projet : `/api/projects/{id}/dictation/*` + `ComposerDictationControl` sur `projects/[projectId]/page.tsx`
- Sas : `PreparationConversation.tsx` — **textarea rows=2, aucun micro**
- Open timeout : `SESSION_OPEN_TIMEOUT_MS = 10000` → catch `TRANSPORT_OPEN_FAILED`

---

## 5. L2 — Matrice T01–T08 (IDs réels)

**Identités communes**

| Objet | ID |
|---|---|
| projectId | `proj_ab07878d-d690-4fa4-8530-536f4bb9aca1` |
| preparationId | `prep_0733165c-88d8-403c-9b91-20dcd952c3f5` |
| pilotId | `pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c` |
| conversationId | `conv_852cc53c-2b18-4a08-9267-c3bb8f0e9ece` |
| project created_utc | 2026-11-27 10:11:32Z |
| conv created_utc | 2026-11-27 10:00:04Z (sas→projet même conv) |

| Tour | USER msg / time UTC | Work | Allocation observée | Effets durables | Écarts |
|---|---|---|---|---|---|
| T01 | msg_645f0667 · 10:00:10 | (usage sans work_id agrégé sas) | Sol | dialogue | MP-01 |
| T02 | msg_82ed7118 · 10:05:00 | idem | Sol | règles verbalisées | MP-01/02/03 |
| T03 | **clic création** · projet 10:11:32 | — | — | `PROPOSE_TRAJECTORY` APPLIED 10:12:01 · msg_iq… trajectoire | MP-04/05 |
| T04 | msg_b2c7a116 · 10:20:16 + **dictée** | `cgw_b7d276ba` COMPLETE | Sol medium · 3 req · 33066 tok | reply QA | MP-06/07 ; audio 4× failed 10:21–10:23 |
| T05 | msg_f157e534 · 10:32:35 | `cgw_0cc13526` **OPEN** | Sol medium · 2 req · ~24726 | **REPLY only** — **pas** OPEN_CYCLE | MP-08/09/10 |
| T06 | msg_6031cf94 · 10:38:36 « dans un premier tu peux ouvrir… » | même work mis à jour 10:39:02 | Sol | `OPEN_CYCLE` APPLIED + `dec_26e38829` APPLICABLE · cycle=1 | MP-09/11/12 |
| T07 | msg_9f632694 · 10:50:32 | `cgw_defeabc1` **OPEN** | Sol medium · 6 req · ~50071 | doc V1 AVAILABLE · **4 acquis CURRENT** · 0 subjects/open_pts | MP-03/10/11/13 |
| T08 | msg_b985e4ef · 11:12:34 | `cgw_3074f47d` COMPLETE 11:27:49 | Sol medium | analyse Git aboutie | MP-14/15/16/17 |
| T09 | NON ENVOYÉ | — | — | — | — |

**Audio T04 :** 4 observations `audio.composer_dictation` status=failed, model=`gpt-live-transcribe`, error_category vide — **sans workId**.

---

## 6. L4 — Allocation (MP-15) — PRIORITAIRE

### Hypothèses

| ID | Hypothèse | Verdict | Preuve |
|---|---|---|---|
| H1 | Modèle fixe historique | **CONFIRMED** (RECETTE) | défaut `HISTORICAL_SOL_DEFAULT_RESOURCE` ; tous works `modelRequested=gpt-6.2-sol` |
| H2 | Catalogue multi-modèles non raccordé RECETTE | **CONFIRMED** | provisional Active exige DEV |
| H3 | Qualification adaptative non mobilisée certains travaux | **PARTIALLY** | effort medium constant ; pas de proposition Luna/Terra persistée |
| H4 | Luna/Terra refusés admission | **CONFIRMED** si proposés | `UNCALIBRATED_MODEL_OPERATIONAL` hors provisional |
| H5 | Fallback Sol | **CONFIRMED** mécanisme | `resolveOperationalDefaultResource` → Sol |
| H6 | Override env | **CONFIRMED** | `SFIA_COG_PROVISIONAL_POLICY` **absent** → legacy_sol ; même v0.2 refusé RECETTE |
| H7 | Réallocation non déclenchée | **CONFIRMED** sur traces | effortApplied=`UNVERIFIED` ; pas de changement modèle |
| H8 | FinOps mal attribue modèle | **REFUTED** | model_requested cohérent Sol partout |
| H9 | Sol pertinent | **UNRESOLVED** qualité | cognition jugée favorable par Morris — choix Sol non invalidé qualitativement |
| H10 | Autre | — | droits org OpenAI **NON VÉRIFIÉS** ce cycle |

**Écart contrat 26/11 :** allocation adaptative Luna/Terra/Sol **construite mais gated DEV** ; RECETTE activation A3 a ouvert les capacités flags sans activer la politique provisoire multi-modèles.

---

## 7. L5 — Latences / volumes T08 (MP-14)

| Métrique | Valeur primaire |
|---|---|
| Work | `cgw_3074f47d` OPEN→COMPLETE |
| Wall-clock | 11:14:16Z → 11:27:49Z ≈ **13,5 min** (perception ~15 min) |
| Tokens | input 884132 + output 25712 = **909844** |
| Cached input cumulé | **514456** |
| Segments émetteurs | indices **0,2,3,5,7,8** (6) — absents 1,4,6 |
| Rows usage | 80 · dont **40 nonzero** (= « 40 requêtes » UI) |
| Resources work | `PROVIDER_REQUESTS:6` (segments Agents SDK) |
| Modèle/effort | Sol medium toutes lignes |

**Causes démontrées de volume :** boucles multi-segments investigation Git ; réinjection contexte (cached élevé mais input brut reste massif) ; nombreux tool-observations à 0 tokens par segment.
**Non démontré sans traces outil :** nombre exact de fichiers uniques vs relus ; stubs progress (vigilance PV) ≠ hallucination prouvée.
**Plafonds 120/1M/2M :** non atteints comme cause d’arrêt (work COMPLETE).

---

## 8. L6 — FinOps (MP-16)

| Observation PV | Réconciliation |
|---|---|
| 909844 / 40 req / 6 segments / 1,05 USD | **CONFIRMÉ** côté tokens/segments/40 nonzero |
| Travaux « En cours » après effet | `cgw_0cc13526` et `cgw_defeabc1` status **OPEN** alors production COMPLETE / effets visibles — **finalisation work ≠ effet métier** |
| QA abouti sans projet | `cgw_b7d276ba` COMPLETE · `project_id` NULL (pré-rattachement) |
| Small 341 tok | activation embeddings (hors MaintiPlan works) — **CONFIRMÉ** hypothèse PV |
| cost_coverage PARTIAL / estimation 0 % | `model_applied` vide · effortApplied UNVERIFIED · tarifs PARTIAL |
| 100 % couverture requêtes | numérateur observations vs dénominateur interne — exact mais **mal expliqué** vs estimation |

Chaîne : Tour→Work→segment_index→usage rows→projection FinOps.
Admin OFF : normal.

---

## 9. L7a — Audio (MP-01/02/06/07)

| MP | Cause | Statut |
|---|---|---|
| MP-01 | `PreparationConversation.tsx` : pas de `ComposerDictationControl` ; micro uniquement projet via capability API | **CAUSE CONFIRMED** |
| MP-02 | Sas `textarea rows={2}` fixe ; Travail auto-extensible (démontré T05) | **CAUSE CONFIRMED** (implémentation sas) |
| MP-06 | 4× `audio.composer_dictation` failed 10:21:16–10:23:12Z ; timeout open 10s ; catch `TRANSPORT_OPEN_FAILED` (message peut être `SESSION_OPEN_TIMEOUT`) ; UI a phase error mais retour perçu silencieux | **PARTIALLY EXPLAINED** — échec transport/open **confirmé en ledger** ; cause fournisseur/réseau exacte **EVIDENCE MISSING** (pas de log error_category ; pas de rejou LIVE) |
| MP-07 | `getUserMedia` puis phase `requesting` ; `AnalyserNode` sur stream mic → onde possible **avant** `session.open` | **CAUSE CONFIRMED** (prématurité structurelle) |

---

## 10. L7b — Connaissance / projections (MP-03/09/10/11/12/13)

**Données PG après T07/T08**

- acquis CURRENT : **4** (arbitrages métier T07)
- subjects : **0** · open_points : **0**
- human_decisions : **1** `OPEN_CYCLE` APPLICABLE (`dec_26e38829`)
- documents : **1** titre cadrage · révision 1 **AVAILABLE**
- cycles : **1**
- business_commands : `PROPOSE_TRAJECTORY`@10:12 · `OPEN_CYCLE`@10:39 seulement

**MP-09 T05 vs T06**

- T05 work objective = ouverture **+** conception ; `production_json.kind=REPLY` ; **aucun** `OPEN_CYCLE` command
- T06 message simple → `OPEN_CYCLE` APPLIED + décision
- **CAUSE CONFIRMED (effet) :** multi-intention combinée n’a pas produit l’effet D5 ; intention unique courte l’a produit
- **CAUSE RACINE orchestration :** PARTIALLY — qualification multi-intent possible (`intents[]`) mais enchaînement effet T05 non matérialisé ; S05/pending peut bloquer siblings ; preuve discriminante du JSON de qualification T05 **EVIDENCE MISSING** (non persisté en clair dans tables inspectées)

**MP-10 / MP-03**

- Capitalisation **partielle** : acquis écrits ; sujets/points ouverts **non créés** malgré matière
- Aperçu sas « aucun point ouvert » : cohérent avec 0 open_points
- **PARTIALLY EXPLAINED** — pas absence totale de D4 ; trou subjects/open_points + projection

**MP-13**

- `documentsInProgress` = status **SAVING** only → 0 avec V1 AVAILABLE est **exact** (contrat code `project-context.ts` FIX-11) → **CONTRACT AMBIGUITY / UX**
- `applicableDecisions` devrait compter OPEN_CYCLE APPLICABLE (=1) ; observation utilisateur 0 → **PARTIALLY EXPLAINED** (filtre code vs observation ; éventuel refresh/surface) — rejouer lecture API Projet

**MP-11**

- Message T06 contient « Je transmets à Studio » — restitution outil/effet dans reply (`pilotage-effect-restitution` / patterns nora-adapter)
- **CAUSE CONFIRMED (symptôme code path)** — design actuel expose pont Studio ; pas un second agent

**MP-12**

- Finalité générique / enum CONCEPTION_FONCTIONNELLE : données trajectoire vs libellés UX — **HYPOTHESIS ONLY** sans dump complet trajectory state

---

## 11. L7c — UX shell (MP-04/05/08/17)

| MP | Diagnostic |
|---|---|
| MP-04 | Spinner sas : composant `SasCreateProgressPopup` — animation/reduced-motion **non requalifiés runtime** ce cycle → **HYPOTHESIS ONLY** |
| MP-05 | Densité conversation / SafeMarkdown — **HYPOTHESIS ONLY** (pas de capture F2) |
| MP-08 | Panneau droit responsabilités — **CONTRACT AMBIGUITY** vs souhait Morris objets récents ; pas de preuve code d’erreur unique |
| MP-17 | `PersonalRailSettingsMenu` monté dans `StudioShell` rail **personnel** ; absent rail projet — **CAUSE CONFIRMED** |

---

## 12. L3 — Matrice 17 MP (synthèse statut)

| MP | Prio PV | Statut diagnostic | Cause immédiate |
|---|---|---|---|
| MP-01 | H | **CAUSE CONFIRMED** | Micro non branché sas |
| MP-02 | M | **CAUSE CONFIRMED** | Composer sas non auto-grow |
| MP-03 | H | **PARTIALLY EXPLAINED** | 0 open_points réels ; acquis existent |
| MP-04 | M | **HYPOTHESIS ONLY** | Spinner / motion |
| MP-05 | H | **HYPOTHESIS ONLY** | Typo/Markdown |
| MP-06 | C | **PARTIALLY EXPLAINED** | Transport/open failed (ledger) ; détail fournisseur manquant |
| MP-07 | M | **CAUSE CONFIRMED** | Wave sur mic stream en phase connexion |
| MP-08 | H | **CONTRACT AMBIGUITY** | Rail droit / objets utiles |
| MP-09 | H | **CAUSE CONFIRMED** (effet) / **PARTIAL** (racine ordo) | T05 sans OPEN_CYCLE ; T06 OK |
| MP-10 | H | **PARTIALLY EXPLAINED** | Acquis oui ; subjects/OP non |
| MP-11 | H | **CAUSE CONFIRMED** | Restitution « Studio » + activité générique |
| MP-12 | M | **HYPOTHESIS ONLY** | Libellés trajectoire |
| MP-13 | H | **PARTIALLY EXPLAINED** | « en cours »=SAVING exact ; décisions compteur à rejouer |
| MP-14 | H | **PARTIALLY EXPLAINED** | Multi-segment Git + contexte ; ~13.5 min / 909k tok |
| MP-15 | H | **CAUSE CONFIRMED** | Politique provisoire multi-modèles **DEV-only** → Sol legacy RECETTE |
| MP-16 | H | **CAUSE CONFIRMED** | Works OPEN post-effet ; PARTIAL tariff ; 40=nonzero rows |
| MP-17 | M | **CAUSE CONFIRMED** | Settings menu rail personnel only |

**Comptes :** CONFIRMED 8 · PARTIALLY 6 · HYPOTHESIS 3 · (ambiguïté contrat incluse dans PARTIAL/AMBIGUITY)

Récurrences UAT/RB : capitalisation/projections et panneau droit déjà vus en recettes antérieures — **non fusionnés** ; traiter comme causes communes de projection/D4.

---

## 13. L8 — Plan de correction intégré (proposition — NON AUTORISÉ à exécuter)

### Orientation composants

| Composant | Orientation |
|---|---|
| Conducteur D3 unique | **KEEP** |
| Qualification sémantique multi-intents | **KEEP** + **ADAPT** orchestration effets |
| Catalogue Luna/Terra/Sol | **KEEP** |
| Provisional policy DEV-only gate | **ADAPT** (politique RECETTE explicite Morris) — **pas** forcer Luna |
| Frontier / usage accounting | **KEEP** + **ADAPT** finalisation work + model_applied |
| Dictation transport | **KEEP** + **ADAPT** erreurs UI + wave gating |
| Compositeur sas | **ADAPT** (mutualiser grow + micro sous droits) |
| D4 capitalisation | **ADAPT** subjects/OP sélectifs |
| ProjectOverview compteurs | **ADAPT** sémantique « documents disponibles » |
| Rail settings | **ADAPT** accès global cohérent F1/F2 |
| WEB / Admin | **KEEP** OFF |

### Macro-lot correctif recommandé (un lot intégré, sous-gates)

**ML5-L1-CORR-A — Conduite · allocation · finalisation · effets**
Couvre MP-09,11,14,15,16 (+ transverse 10)
IN : orchestration multi-intent→effets ; finalisation cognitive_works ; politique allocation RECETTE (GO modèle) ; FinOps model_applied/statuts ; réduction redondance contexte investigation **sans** baisser qualité
OUT : nouveau moteur ; routeur lexical ; hausse plafonds ; Admin ; WEB

**ML5-L1-CORR-B — D4/D5/D6 projections**
MP-03,10,12,13
IN : capitalisation sélective subjects/OP ; sémantique compteurs ; libellés trajectoire
OUT : fabriquer des sujets artificiels

**ML5-L1-CORR-C — Audio + compositeur**
MP-01,02,06,07
IN : micro sas ; grow ; wave only listening ; erreurs visibles ; protocole LIVE qualify séparé
OUT : second pipeline

**ML5-L1-CORR-D — UX shell**
MP-04,05,08,17
IN : spinner ; typo ; panneau objets récents borné ; settings
OUT : second shell

**Ordre :** A (bloquant allocation/effets/coût) → C (critique dictée) → B → D
**Gates :** preuves déterministes DEV → navigateur → LIVE borné dictée/allocation sous GO → cutover RECETTE nouveau candidat → rejeu 17 MP → reprise T09.

**Interdits rappelés :** forcer Luna ; supprimer Sol ; budgets cosmétiques ; faux progrès ; fermeture artificielle works sans vérité ; masquer erreurs fournisseur.

---

## 14. Fake / Real Qualification

| Capacité | Niveau |
|---|---|
| Code RECETTE figé | IMPLEMENTED (e8e6e069) |
| PG MaintiPlan | LIVE EXERCISED (historique) — inspecté READ ONLY |
| OpenAI Responses MaintiPlan | LIVE EXERCISED (historique Sol) |
| Allocation multi-modèles RECETTE | **NOT PROVEN** (gated) |
| Dictée LIVE | LIVE EXERCISED **FAILED** (4) — NOT PROVEN success |
| Figma F2 | NOT PROVEN ce cycle |

Claims interdits respectés : pas READY FOR REAL / pas LIVRAISON 1 ACCEPTED.

---

## 15. Risques et réserves

1. Org/projet OpenAI non vérifiés.
2. Qualification JSON T05 non récupérée → racine multi-intent partielle.
3. Logs dictation error_category vides.
4. Compteur décisions UI vs PG à rejouer.
5. Stubs progress Chantiers360 : vigilance fidélité, pas MP nouveau.
6. FinOps historique cross-lane.
7. localhost PG trust.

---

## 16. Décisions Morris requises

1. Arbitrer **activation politique allocation RECETTE** (garder Sol-only / étendre provisional / autre) **sans** sacrifier qualité.
2. Arbitrer **macro-lot correctif** A→C→B→D vs scission.
3. Autoriser ultérieurement : GO correction DEV ; GO LIVE dictée diagnostic ; GO cutover ; reprise T09.
4. Trancher sémantique compteurs Projet (documents en cours vs disponibles).
5. Trancher panneau droit objets récents (évolution UX).

---

## 17. Contrôles finaux

- Candidat/build/runtime inchangés (PID 22935).
- Aucune mutation PG/code/config/OpenAI/audio.
- Pack FULL mono-cycle.
- 8 tours + 17 MP traités.
- Handoff L3 à publier.

---

## 18. Verdict

**MAINTIPLAN INTEGRATED DIAGNOSTIC COMPLETE WITH EVIDENCE RESERVES — MORRIS ARBITRATION REQUIRED**

**Statut SFIA (diagnostic) :** READY WITH RESERVES

**État programme inchangé :**
R5 IN PROGRESS · ML5 OPEN · LIVRAISON 1 NOT ACCEPTED · MAINTIPLAN SUSPENDED · T09 NOT SENT · 17 MP OPEN · NO CORRECTION AUTHORIZED · R6 NOT STARTED · NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED

---

## 19. Anti-stub final

REVIEW PACK COMPLETE — MODIFIED CONTENT PRESENT — CODE EXCERPTS + PG CORRELATION + MP MATRIX — NO SECRETS — READY FOR HANDOFF L3

---

## Annexe A — Extraits code candidat e8e6e069 (discriminants)

### `provisional-cognitive-policy.ts` L1-12

```ts
1|/**
2| * ML5 provisional cognitive policy — DEV only (Morris 2026-11-26).
3| *
4| * v0.2 (explicit): Terra medium default; Luna low/medium experimental;
5| * Sol L/M/H historical; Terra high / Luna high candidates.
6| *
7| * Activation is NEVER implicit: absent or unknown SFIA_COG_PROVISIONAL_POLICY
8| * resolves to legacy_sol (safe historical default). Provisional couples require
9| * explicit `v0.2` (or deprecated `v0.1`) AND STUDIO_LANE=DEV.
10| *
11| * Rollback: `legacy_sol` | `off` | `0` — no structural rewrite.
12| */
```

### `provisional-cognitive-policy.ts` L84-140

```ts
84|/**
85| * Resolve active policy — fail closed to legacy_sol unless explicitly activated on DEV.
86| */
87|export function resolveProvisionalPolicy(
88|  env: NodeJS.ProcessEnv = process.env,
89|): ProvisionalPolicyResolution {
90|  const raw = (env.SFIA_COG_PROVISIONAL_POLICY ?? "").trim().toLowerCase();
91|  const lane = studioLane(env);
92|  const codes: string[] = [];
93|
94|  if (!raw) {
95|    return {
96|      id: "legacy_sol",
97|      provisionalActive: false,
98|      reasonCodes: [
99|        "COG_POLICY_ABSENT_FALLBACK_LEGACY_SOL",
100|        "COG_POLICY_VERSION_legacy_sol",
101|      ],
102|    };
103|  }
104|
105|  if (
106|    raw === "off" ||
107|    raw === "0" ||
108|    raw === "legacy" ||
109|    raw === "legacy_sol" ||
110|    raw === "sol"
111|  ) {
112|    return {
113|      id: "legacy_sol",
114|      provisionalActive: false,
115|      reasonCodes: ["COG_POLICY_LEGACY_SOL", "COG_POLICY_VERSION_legacy_sol"],
116|    };
117|  }
118|
119|  if (raw === "v0.2" || raw === "0.2" || raw === "v2") {
120|    if (lane !== "DEV") {
121|      return {
122|        id: "legacy_sol",
123|        provisionalActive: false,
124|        reasonCodes: [
125|          "COG_POLICY_V02_REFUSED_NON_DEV_LANE",
126|          `LANE_${lane || "UNKNOWN"}`,
127|          "COG_POLICY_VERSION_legacy_sol",
128|        ],
129|      };
130|    }
131|    return {
132|      id: "v0.2",
133|      provisionalActive: true,
134|      reasonCodes: [
135|        `COG_POLICY_PROVISIONAL_${PROVISIONAL_COGNITIVE_POLICY_VERSION}`,
136|        "COG_POLICY_VERSION_v0.2",
137|        "LANE_DEV",
138|      ],
139|    };
140|  }
```

### `provisional-cognitive-policy.ts` L191-199

```ts
191|export function resolveOperationalDefaultResource(
192|  env: NodeJS.ProcessEnv = process.env,
193|): { modelId: CognitiveModelId; effort: CognitiveEffort } {
194|  const resolved = resolveProvisionalPolicy(env);
195|  if (!resolved.provisionalActive) {
196|    return { ...HISTORICAL_SOL_DEFAULT_RESOURCE };
197|  }
198|  return { ...PROVISIONAL_V02_DEFAULT_RESOURCE };
199|}
```

### `resource-admission.ts` L90-128

```ts
90|  if (mode === "operational") {
91|    const policyId = activeProvisionalPolicyId();
92|    const provisionalOn = isProvisionalPolicyActive();
93|
94|    // Explicit provisional policy on DEV — Morris-validated couples only.
95|    if (provisionalOn && isProvisionalAdmittedCouple(modelId, effort)) {
96|      return { admitted: true, modelId, effort, mode };
97|    }
98|
99|    if (provisionalOn && isProvisionalCandidateCouple(modelId, effort)) {
100|      return {
101|        admitted: false,
102|        mode,
103|        reasonCode: "PROVISIONAL_CANDIDATE_NOT_ADMITTED",
104|        reason: `${modelId}@${effort} est candidat provisoire (${policyId}) — qualification Morris requise avant admission`,
105|      };
106|    }
107|
108|    // Sol historical band always available (rollback + comparison).
109|    if (modelId === "gpt-6.2-sol" && OPERATIONAL_SOL_EFFORTS.has(effort)) {
110|      return { admitted: true, modelId, effort, mode };
111|    }
112|    if (modelId === "gpt-6.2-sol" && !OPERATIONAL_SOL_EFFORTS.has(effort)) {
113|      return {
114|        admitted: false,
115|        mode,
116|        reasonCode: "SOL_EFFORT_NOT_OPERATIONAL_BAND",
117|        reason:
118|          "Seuls low|medium|high sont admis en opérationnel pour Sol",
119|      };
120|    }
121|
122|    if (entry.admissionStatus === "documented_candidate") {
123|      return {
124|        admitted: false,
125|        mode,
126|        reasonCode: "UNCALIBRATED_MODEL_OPERATIONAL",
127|        reason: `${modelId}@${effort} non admis sous politique ${policyId}`,
128|      };
```

### `project-context.ts` L93-119

```ts
93|  const applicableDecisions = decisionRows.filter(
94|    (d) => d.state === "APPLICABLE" && !supersededIds.has(d.id),
95|  );
96|
97|  const openSubjects = knowledge.subjects.filter((s) => s.status === "ACTIVE");
98|  const openPoints = knowledge.openPoints.filter((o) => o.status === "OPEN");
99|  // FIX-11 — "en cours" = actively writing (SAVING), not FAILED/UNKNOWN/AVAILABLE.
100|  const docsInProgress = documents.filter((d) => d.latestRevision?.status === "SAVING");
101|
102|  const activity = {
103|    openSubjects: {
104|      count: openSubjects.length,
105|      examples: openSubjects.slice(0, 2).map((s) => ({ id: s.id, title: s.title })),
106|    },
107|    applicableDecisions: {
108|      count: applicableDecisions.length,
109|      examples: applicableDecisions.slice(0, 2).map((d) => ({ id: d.id, statement: d.statement })),
110|    },
111|    documentsInProgress: {
112|      count: docsInProgress.length,
113|      examples: docsInProgress.slice(0, 2).map((d) => ({
114|        id: d.document.id,
115|        title: d.document.title,
116|      })),
117|    },
118|    openPointsCount: openPoints.length,
119|  };
```

### `PreparationConversation.tsx` L130-160

```ts
130|      </div>
131|
132|      <div className="sas-composer" data-testid="prep-composer">
133|        <textarea
134|          className="sas-composer-input"
135|          value={props.draft}
136|          onChange={(e) => props.onDraftChange(e.target.value)}
137|          placeholder="Décrivez votre idée, une question ou une hésitation…"
138|          aria-label="Message à Nora"
139|          data-testid="prep-draft"
140|          rows={2}
141|          disabled={props.busy}
142|          onKeyDown={(e) => {
143|            if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
144|              e.preventDefault();
145|              props.onSend();
146|            }
147|          }}
148|        />
149|        <div className="sas-composer-bar" aria-hidden={!props.draft.trim()}>
150|          <span className="sas-composer-hint">
151|            <span className="sas-composer-plus" aria-hidden>
152|              ＋
153|            </span>
154|            Échanger librement avec Nora
155|          </span>
156|          <button
157|            type="button"
158|            className="sas-composer-send"
159|            disabled={props.busy || !props.draft.trim()}
160|            onClick={props.onSend}
```

### `composer-dictation-session.ts` L79-79

```ts
79|const SESSION_OPEN_TIMEOUT_MS = 10_000;
```

### `composer-dictation-session.ts` L310-355

```ts
310|    const sessionReady = new Promise<void>((resolve, reject) => {
311|      const t = setTimeout(() => {
312|        record.onProviderSessionReady = null;
313|        reject(new Error("SESSION_OPEN_TIMEOUT"));
314|      }, SESSION_OPEN_TIMEOUT_MS);
315|      record.onProviderSessionReady = () => {
316|        clearTimeout(t);
317|        record.onProviderSessionReady = null;
318|        resolve();
319|      };
320|    });
321|    transport.send({
322|      type: "session.update",
323|      session: {
324|        type: "transcription",
325|        audio: {
326|          input: {
327|            format: { type: "audio/pcm", rate: COMPOSER_DICTATION_PCM_RATE },
328|            transcription: {
329|              model: COMPOSER_DICTATION_MODEL,
330|              languages: ["fr"],
331|              prompt: DICTATION_VOCAB_HINT,
332|            },
333|            turn_detection: null,
334|          },
335|        },
336|      },
337|    });
338|    await sessionReady;
339|    record.status = "open";
340|    record.modelApplied = COMPOSER_DICTATION_MODEL;
341|    emit(record, { type: "session.open", sessionId });
342|    return { ok: true, session: record };
343|  } catch (e) {
344|    record.status = "failed";
345|    record.errorCode = "TRANSPORT_OPEN_FAILED";
346|    const message = e instanceof Error ? e.message.slice(0, 240) : "TRANSPORT_OPEN_FAILED";
347|    emit(record, {
348|      type: "session.error",
349|      sessionId,
350|      code: "TRANSPORT_OPEN_FAILED",
351|      message,
352|    });
353|    void recordDictationFinops(record, "failed");
354|    return { ok: false, code: "TRANSPORT_OPEN_FAILED", message };
355|  }
```

### SHA fichier (candidat)

Tous extraits lus depuis worktree `…-recette-build-e8e6e06961fa` = tree web `03c30e4c…`.

## Anti-stub final (réaffirmé)

REVIEW PACK COMPLETE — ANNEXE CODE INCLUSE — NO SECRETS

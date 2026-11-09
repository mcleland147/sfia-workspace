# SFIA Review Pack — FULL / Cycle 9
# SFIA STUDIO NEXT — R5 / ML4
# AUDIT SYSTÉMIQUE D3 ↔ D4 — Parcours documentaire & méthode de correction

**Date:** 2026-11-09
**Profil:** CRITICAL — READ-ONLY / NO PRODUCT CHANGE
**GO Morris:** 2026-11-09
**Auteur pack:** Cursor (audit local)
**Verdict:** `SYSTEMIC DOCUMENT FLOW AUDIT COMPLETE — ROOT CAUSE EVIDENCED — MORRIS DESIGN DECISION PENDING`

---

## A. Executive diagnosis

### État observé (RECETTE, inchangé)

| Élément | Valeur | Preuve |
|---|---|---|
| Branche locale analysée | `fix/next-ml4-chat-first-d4-provenance-20261109` | `git branch` |
| HEAD | `8ba777300adebe3ba70ddbe3c386a3ad709034f6` | `git rev-parse HEAD` |
| Tree | `368159d7e8cdbc0bbb504f87d6deb12c04e6b129` | `git rev-parse HEAD^{tree}` |
| Runtime RECETTE | LaunchAgent `com.sfia.studio.next.recette.ml4` running | `launchctl print` |
| Build servi | `ygu4moVrYUNZPkvprgvB_` | HTML comment `/` |
| Worktree servi | `…/next-ml4-recette-build-8ba77730` @ `8ba77730` | launchd program path |
| Document | `doc_1e5d8c16-98a2-4a58-8096-fe86f4146ec2` | DB RO |
| v1 | `drev_c07ca162-faa4-48f5-b705-018e41ae88d9` | DB RO |
| MD5 v1 | `de4bd1a6e59f5dea12fd38ce265b5f43` | DB RO = historique |
| Révisions | **1 seule** (aucune v2) | DB RO |
| Dernier refus R06 | `SECTION_SCOPE_EXCEEDED` | `conversation_turn_commands.result_json` + obs |

### Anomalies distinguées (ne pas fusionner)

1. **R06-E / a2c5e9f8** — `SECTION_AMBIGUOUS_OR_MISSING_IN_BASE` — matching `\b2\b` sur « Source 2 » / « 3.2 ».
2. **R06-F / 8ba77730** — matching section **corrigé** ; refus **nouveau** `SECTION_SCOPE_EXCEEDED` ; v1 inchangée.
3. **Narration Nora** — claims « outils lecture seule / non enregistré » encore visibles à côté de l’ACK applicatif FAILED (atténué par `composeDocumentTurnMessage`, pas éliminé dans le corps hors ACK).

### Cause racine du dernier refus — ÉTABLIE (mécanisme)

**Les octets hors section n’ont pas été « édités volontairement ».**
Le contrôle `assertSectionScope` a échoué parce que la **re-délimitation ATX après splice** ne retrouve plus `## 3.` en tête de ligne.

Mécanisme démontré (REPLAYED sur contenu structurellement aligné au message stocké + v1 exacte) :

1. Proposition Nora = **corps de section 2 seul** (pas de H1 documentaire ; pas de `## 3` suivant).
2. `extractProposedSectionBody` prend le corps jusqu’à **EOF** (`end = md.length`).
3. Ce corps **ne se termine pas par `\n`**.
4. Splice : `prefix + body + base.slice(target.end)` avec `base.slice(target.end)` commençant par `## 3. Enseignements…`.
5. Glue octet : `…référence demandée.## 3. Enseignements…` — le titre `## 3` n’est plus un heading ATX.
6. `locateSections(next)` : section 2 s’étend jusqu’à `## 4` → suffixe ≠ base → **`SECTION_SCOPE_EXCEEDED`**.

Discriminant : ajouter un seul `\n` en fin de corps → `assertSectionScope` **OK** ; structure 1…5 restaurée.

**Niveau de preuve :** ROOT CAUSE EVIDENCED pour le mécanisme.
**Résidu :** `reply.content` brut LIVE non persisté (seulement le message composé post-`trimEnd`). La forme stockée (section-only, fin `.` sans NL) + raison OBSERVED rendent ce mécanisme la seule explication simple non réfutée. Voir §K.

### Ce que l’audit n’est pas

- Pas un patch.
- Pas `R06 PASS` / `ML4 ACCEPTED` / `READY FOR RECETTE` / `READY FOR MERGE`.

---

## B. Timeline causale

### Macro-correctif (Git)

Base : `974b0030a94469bef05496151792e8c35a9a83e9`
Tip analysé : `8ba77730`

| SHA | Intent déclaré | Effet prouvé en recette |
|---|---|---|
| `f1b49e20` | Chat-first D4 create/revise ACK + provenance Git | Fondation ; CREATE/REVISE path |
| `1fedb9ff` | Harden intent, section integrity, ACK | Garde-fous scope/qualify |
| `a2c5e9f8` | Quoted titles + sole applicative revise verdict | Déployé RECETTE ; R06 → **AMBIGUOUS** (chiffre 2) |
| `8ba77730` | `leadingSectionNumber` + ACK truth | Déployé RECETTE ; R06 → **SCOPE_EXCEEDED** (glue NL) |

### Forensic R06 (CampusFlow / doc_1e5d8c16…)

| Phase | Runtime | Intention Pilote | Génératif | Applicatif | Version D4 | Première divergence |
|---|---|---|---|---|---|---|
| A — initial | pré-macro / early | révision section 2 | narration « fait » vs D4 | pas de v2 | v1 only | Frontière génération↔écriture / ACK |
| B — a2c5e9f8 | build a2c5 | REVISE section 2 | contenu section proposé | `SECTION_AMBIGUOUS_OR_MISSING_IN_BASE` | v1 | `matchSectionSpans` / `\b2\b` |
| C — 8ba77730 | `ygu4moVrYUNZPkvprgvB_` | même doc/base | section 2 seule (forme stockée) | `SECTION_SCOPE_EXCEEDED` | v1 | splice EOF sans `\n` → reparse `## 3` |

Preuves tour C (OBSERVED, DB RO) :

- `tcmd_44d12c2e-…` / `op_4496b0f3-…` / `gen_d4791340-…`
- user `msg_128540c2-…` (728 chars)
- assistant `msg_383e1e38-…` (4344 chars)
- `documentSave: { status: FAILED, reason: SECTION_SCOPE_EXCEEDED, act: REVISE, documentId, baseRevisionId }`
- `status: COMPLETE` (tour Nora) ≠ écriture D4

---

## C. Cartographie D3 ↔ D4

### Chaîne implémentée (8ba77730)

```
Instruction Pilote
 → qualifyDocumentAct / extractDocumentDesignation     [document-act.ts]
 → (autorité / stripNonAuthoritativeSpans)
 → génération Nora LIVE                                [conversation service / provider]
 → extractDocumentMarkdown(reply.content, user)        [service.ts — non exporté]
 → resolveReviseTarget (listDocuments)                 [service.ts]
 → applyTargetedSectionRevision(base, proposed, hint)  [document-act.ts]
 → assertSectionScope(base, merged, hint)              [document-act.ts]
 → reviseDocument(...)                                 [document/service.ts]  ← seulement si scope OK
 → composeDocumentTurnMessage(reply, effect)           [document-act.ts]
 → persistance message + result_json                   [conversation]
 → UI Documents / historique                           [D4 read]
```

### Frontières critiques

| Frontière | Propriétaire | Succès | Refus | Preuve dispo | Preuve manquante |
|---|---|---|---|---|---|
| Qualification acte | `qualifyDocumentAct` | CREATE/REVISE | NONE + reason | unit + LIVE act=REVISE | — |
| Extraction proposition | `extractDocumentMarkdown` | fence / `#` heading / **fallback wrap** | (toujours retourne un content) | code | raw `reply.content` |
| Résolution section base | `matchSectionSpans` + `leadingSectionNumber` | 1 hit | AMBIGUOUS/MISSING | unit CampusFlow-like + LIVE post-8ba | — |
| Extraction corps proposé | `extractProposedSectionBody` | 1 section ou bare court | UNCLEAR / AMBIGUOUS_IN_PROPOSAL | unit | raw proposed |
| Splice | `applyTargetedSectionRevision` | concat offsets | raisons extract | unit (toujours avec `\n` final) | cas EOF sans `\n` **non testé** |
| Portée | `assertSectionScope` | prefix/suffix identiques | SCOPE_EXCEEDED / PREFIX / AMBIGUOUS_IN_NEXT | unit + LIVE reason | offsets LIVE non loggés |
| Transaction D4 | `reviseDocument` | AVAILABLE / CONFLICT | FAILED DB | non atteint tour C | — |
| ACK | `composeDocumentTurnMessage` | ACK seul verdict | — | message stocké | raw pré-compose |

### Invariants D3/D4 (explicites)

- Nora `COMPLETE` ≠ D4 `AVAILABLE`.
- Génération ≠ écriture.
- Refus `assertSectionScope` ≠ échec DB.
- ACK applicatif = source de vérité transactionnelle du tour.
- Hors cible : conservation **octet-identique** des préfixe/suffixe **tels que re-parsés** après merge (pas « intention auteur »).

### Statuts de connaissance

| Affirmation | Statut |
|---|---|
| HEAD/tree/runtime alignés tip correctif | OBSERVED |
| v1 MD5 inchangé ; pas de v2 | OBSERVED |
| Raison LIVE `SECTION_SCOPE_EXCEEDED` | OBSERVED |
| Glue `demandée.## 3` sur replay section-only sans `\n` | REPLAYED |
| `reply.content` brut byte-identique au recovered | UNKNOWN (non persisté) |
| Contenu intégral document / prompts | NON PUBLIÉ (digests/offsets seulement) |

---

## D. Reconstitution R06 — dernière frontière

### Question centrale

> Les octets hors section ont-ils vraiment changé, ou le contrôle a-t-il recalculé différemment les limites ?

**Réponse établie :** les octets « logiques » hors section (texte des sections 3–5) étaient encore présents dans la chaîne fusionnée, mais **`## 3` a perdu son ancrage de début de ligne**. Le reparse a donc attribué ces octets à la section 2. `assertSectionScope` compare suffixe à `b.end` (début réel de `## 3` en base) vs `n.end` (désormais `## 4`) → inégal → `SECTION_SCOPE_EXCEEDED`.

Ce n’est **pas** une modification intentionnelle du texte de la section 3 par Nora dans le splice ; c’est une **corruption de frontière ATX** induite par le splice.

### Entrées du discriminant (expurgé)

- v1 MD5 `de4bd1a6…` len 8586 ; section 2 `bodyStart=1228` `end=2810` (OBSERVED via `locateSections` sur dump RO).
- Corps proposé rejoué : MD5 recovered `78914600…` len 3882 ; headings = `## 2` + `### Source 1|2` + `### Compte rendu…` ; **pas de H1** ; **pas de `## 3`** ; fin `…référence demandée.` (code 46).
- Après splice sans NL : index glue `demandée.## 3` présent ; L2 next = 1,2,4,5,Résultat (3 absent comme heading).
- Après `body+"\n"` : scope OK ; L2 = 1,2,3,4,5,Résultat.

### `extractDocumentMarkdown` (contexte aggravant, pas cause unique)

Sur recovered sans `# ` : chemin **`fallback_wrap`** → `# Document demandé` + cite user + assistant.
Section 2 reste **dernière** section numérotée → même EOF.
`applyTargetedSectionRevision(v1, recovered, "2")` **sans wrap** échoue identiquement ; `recovered+"\n"` passe.
Donc : **cause = splice EOF sans NL**, pas le wrap en soi. Le wrap reste une dette (proposition non contractuelle).

### compose / trimEnd (biais de reconstruction)

`composeDocumentTurnMessage` fait `body.trimEnd()` avant `---\nACK`.
Le recovered post-strip ACK **ne peut pas** prouver les NL finaux du raw.
Mitigation : un raw **avec** NL final aurait très probablement passé le scope ; le LIVE a **échoué** → à l’instant extract, le corps effectif n’avait pas de frontière NL suffisante (ou autre mécanisme non observé). Le mécanisme glue est reproductible et aligné.

---

## E. Matrice de couverture documentaire

| Fonction | Unit | Det. intégration / PG | Browser | LIVE Nora | User recette | Lacune |
|---|---|---|---|---|---|---|
| qualify CREATE/REVISE/NONE | oui | partiel | non | oui (obsv.) | oui | — |
| CREATE extract+save | limité | PG chat-first | non | limité | campagnes | fallback wrap peu testé négatif |
| REVISE section match Source 2 | oui (8ba) | oui | non | oui post-fix | R06-E puis F | — |
| REVISE EOF body **sans `\n`** | **NON** | **NON** | non | **échoué user** | R06-F | **VRAI BUG NON COUVERT** |
| assertSectionScope hors cible | oui (replace texte) | oui | non | oui reason | oui | pas d’assert sur glue heading |
| ACK vs narration | oui | partiel | non | partiel | oui | claims hors ACK persistent |
| Concurrence / base stale | PG | oui | non | non R06 | — | — |
| Provenance Git | PG | oui | non | séparé | — | hors cause R06-F |
| Comparaison versions UI | — | — | faible | — | user | non causal ici |

### Pourquoi tests verts ≠ succès user

1. **FAUX SIGNAL DE COUVERTURE** — fixtures `proposed` en template literal **terminés par `\n`** (ex. `document-act.test.ts` CampusFlow-like L303–315). Le bug LIVE est exactement l’absence de ce NL.
2. **VRAI BUG NON COUVERT** — aucune fixture « section dernière / EOF / pas de NL / base a un `## n+1` ».
3. **Pas de persistance** du `proposedMarkdown` / offsets dans l’obs → impossible de CI-locker le cas LIVE sans instrumentation.
4. Tests déterministes ≠ distribution des sorties Nora (section-only, pas de fence, pas de H1).

---

## F. Audit de la dette corrective

| Correctif | Hypothèse | Effet attendu | Effet prouvé | Dette / voisinage |
|---|---|---|---|---|
| Intent harden | faux positifs WRITE | NONE sur informatif | unit | regex empilées ; complexité qualify |
| Section integrity + assertScope | protéger hors cible | refuse merges sales | refuse aussi glue ATX (comportement correct du garde-fou) | garde-fou juste ; splice fragile |
| ACK compose | Nora ≠ D4 | ACK unique | ACK présent ; narration partielle | `trimEnd` perd NL avant stockage |
| Quoted titles a2c5 | désignation | REVISE bon doc | OBSERVED bon doc/base | — |
| leadingSectionNumber 8ba | fin AMBIGUOUS | match unique §2 | OBSERVED plus d’AMBIGUOUS | a exposé le bug splice suivant |

**Pas de conclusion « dette architecturale » seule parce que N correctifs.**
Dette **démontrée** : (1) extraction proposition non contractuelle (`fallback_wrap`) ; (2) splice sans normalisation de frontière de ligne ; (3) observabilité insuffisante (pas de raw proposal hash/offsets) ; (4) tests non représentatifs du EOF sans NL.

Code mort / contournement de garde-fou : **non observé** pour R06-F (assertScope a correctement refusé).

---

## G. Audit de la stratégie de test

| Type | Rôle réel vs R06 |
|---|---|
| UNIT document-act | Bon pour match numérique ; **aveugle** EOF-sans-NL |
| PG chat-first / connaissance | Exercice happy-path revise avec fixtures propres |
| LIVE Nora | Seule source de forme section-only réelle |
| USER RECETTE | A trouvé AMBIGUOUS puis SCOPE ; non remplacé par CI |

Recommandation de preuve (sans effet métier) — §K / Option D — pas d’implémentation dans cet audit.

---

## H. Hypothèses / réfutations

| ID | Hypothèse | Pour | Contre | Test discriminant | Conclusion provisoire |
|---|---|---|---|---|---|
| H1 | Nora a produit du hors-périmètre textuel réel | SCOPE reason | replay montre texte §3 présent mais heading cassé | compare prefix/suffix + headings | **Écartée comme cause primaire** ; symptôme de reparse |
| H2 | Extraction embarque compte rendu conversationnel | `### Compte rendu…` dans recovered | ce H3 est **dans** §2 ; n’explique pas disparition heading §3 | offsets | **Plausible comme bruit** ; pas cause SCOPE |
| H3 | Reparse déplace frontière après transform | glue `demandée.## 3` ; L2 sans 3 | — | +1 NL → OK | **Établie** |
| H4 | Propriétaires format/portée incompatibles | extract vs assert vs locate | même `locateSections` | — | **Plausible partielle** (extract EOF vs base mid-doc) |
| H5 | Contrat sortie Nora insuffisant | section-only sans H1/fence | — | contrat structuré | **Établie comme facteur** |
| H6 | Tests trop loin du réel | fixtures avec `\n` | — | fixture EOF no NL | **Établie** |
| H7 | Contexte/version/continuité | — | baseRevisionId correct ; v1 stable | — | **Écartée** pour R06-F |
| H8 | Observabilité insuffisante | pas de raw reply persisté | reason + message aident | log proposed hash/offsets | **Établie** (gap) |

---

## I. Options comparées (étude — pas d’implémentation)

### OPTION A — Correction locale splice / extract body

- **Résout :** glue NL ; SCOPE sur section-only EOF.
- **Hypothèse :** H3 établie.
- **Resp. :** `applyTargetedSectionRevision` / `extractProposedSectionBody` (garantir `\n` avant suffixe base ; ou end-boundary).
- **Compat R2/R4 :** haute (même propriétaires).
- **Blast radius :** bas–moyen (tous REVISE section).
- **Risque :** masquer d’autres corruptions si on « force » trop.
- **Tests :** 3–5 unit EOF ± NL ; PG revise.
- **Gate Morris :** GO correctif borné + preuves unit avant redeploy RECETTE.

### OPTION B — Clarifier génération/extraction sans changer D3/D4 owners

- **Résout :** fallback_wrap ; proposed = corps section contractuel.
- **Complète A** ; ne remplace pas A si glue reste.
- Blast moyen (CREATE aussi use extract).

### OPTION C — Contrat proposition Nora ≠ narration

- **Résout :** H5 ; sépare document proposal d’ACK/narration.
- Coût construction + prompt/tooling plus élevé.
- Robustesse long terme meilleure.
- Pas nécessaire pour débloquer le seul bug glue si A suffit.

### OPTION D — Instrumentation diagnostique minimale d’abord

- **Résout :** H8 ; hash `reply.content`, `proposed` path (fence/heading/wrap), offsets `bodyStart/end`, premier écart scope.
- **Sans** désactiver assertScope.
- **Avant ou avec A** selon appétit Morris.
- Blast très bas ; pas de mutateur D4.

**Principe :** la solution la plus simple qui traite la cause établie est **A** (± D pour ne plus rejouer l’aveugle). C n’est pas exigée par lassitude des correctifs.

---

## J. Recommandation argumentée (ordre de décision)

1. **Morris accepte** le diagnostic : cause = splice section EOF sans NL de frontière → reparse SCOPE (pas un faux positif assertScope ; le garde-fou a eu raison de refuser).
2. **Décider Option A** (correctif local) **avec** fixture EOF-sans-NL + contre-fixture avec NL.
3. **Option D** en même GO ou GO suivant immédiat : persister métadonnées non sensibles (hash, path extract, offsets, reason détail) — **pas** le document intégral.
4. **Option B** si on veut éliminer `fallback_wrap` comme source de propositions non structurées.
5. **Option C** seulement si Morris veut un contrat génératif durable au-delà du glue bug.
6. **Aucun redeploy RECETTE / aucun R06 LIVE** tant que correctif+preuves unit non prêts et GO explicite.

---

## K. Proof gaps

| Gap | Impact | Moyen d’obtention (sans effet métier) |
|---|---|---|
| `reply.content` brut non stocké | reconstruction post-`trimEnd` | Option D : hash+len+tailCode points ; ou log debug borné DEV only |
| Offsets LIVE non loggés | pas de preuve CI du glue | meta obs `section_end_before` / `glued_heading` bool |
| Sortie générative complète | confidentialité | **ne pas** publier ; digests seulement |
| Rejeu LIVE | interdit ce cycle | unit REPLAYED suffit pour A |

**DIAGNOSTIC INPUT EVIDENCE :** raw exact UNKNOWN ; mécanisme ROOT CAUSE EVIDENCED par REPLAYED + OBSERVED reason + forme stockée.

---

## L. Gate Morris

Avant tout code produit :

- [ ] Accepter verdict cause (splice NL / ATX) vs demander Option D seule d’abord
- [ ] Choisir A / A+D / A+B / C
- [ ] Autoriser (ou non) correctif sur branche `fix/next-ml4-…`
- [ ] Interdire redeploy RECETTE tant que non GO Cycle 11
- [ ] Interdire R06 LIVE tant que non GO
- [ ] Confirmer : assertScope **ne doit pas** être désactivé

---

## Git Truth Check (détail)

```
remote: origin https://github.com/mcleland147/sfia-workspace
branch: fix/next-ml4-chat-first-d4-provenance-20261109
HEAD:   8ba777300adebe3ba70ddbe3c386a3ad709034f6
tree:   368159d7e8cdbc0bbb504f87d6deb12c04e6b129
prev:   a2c5e9f8819cbe547bf925b39f38f783fc8aa52b
base:   974b0030a94469bef05496151792e8c35a9a83e9
origin/main: 6667a438… (non utilisé comme tip correctif)
origin/feat/next-git-collaboration-20261108: 51b0c3b6…
origin/sfia/review-handoff (pré-publish): 5876ff0a…
```

Working tree projet pendant audit : modifications locales non commitées (delivery-history, manifests, script untracked) — **hors périmètre** ; **aucun commit produit** ; seul handoff L3 autorisé.

Worktrees RECETTE frozen : `…-8ba77730`, `…-a2c5e9f8`, `…-974b0030` présents ; runtime pointe 8ba77730.

Registre doc R01–R14 : `docs/next-ml4-recette-utilisateur-20261109` @ `81fe9672` (réf. historique ; non muté).

---

## Sources consultées (non exhaustif sensible)

- `projects/sfia-studio-next/web/src/domains/conversation/document-act.ts` (qualify, locate, match, apply, assert, compose)
- `projects/sfia-studio-next/web/src/domains/conversation/service.ts` (`extractDocumentMarkdown`, revise path)
- `projects/sfia-studio-next/web/src/domains/document/service.ts` (`reviseDocument`)
- `projects/sfia-studio-next/web/tests/unit/document-act.test.ts`
- `projects/sfia-studio-next/web/tests/integration/ml4-chat-first-d4-provenance.pg.test.ts`
- Gouvernance / ML4 contrats (main blobs cités au mandat) — lecture cadrage
- DB RECETTE RO : messages, turn_commands, document_revisions
- Artifacts temp audit : `/tmp/sfia-r06-audit/*` (non publiés)

---

## Absence d’effets

- Aucune mutation code produit / tests / fixtures commités.
- Aucune mutation DB RECETTE / DEV / STABLE.
- Aucun redémarrage / redeploy RECETTE.
- Aucun R06 LIVE / Nora LIVE scénario.
- Aucun appel API documentaire mutative.
- Aucun push branche produit.
- Aucune écriture GitHub applicative.
- D4 v1 MD5 `de4bd1a6…` re-vérifié post-audit.
- Build `ygu4moVrYUNZPkvprgvB_` inchangé.

---

## Références code (points d’échec)

```550:616:projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
// applyTargetedSectionRevision: prefix + extracted.body + base.slice(target.end)
// assertSectionScope: baseSuffix !== nextSuffix → SECTION_SCOPE_EXCEEDED
```

```54:76:projects/sfia-studio-next/web/src/domains/conversation/service.ts
// extractDocumentMarkdown: fence | heading `#` | fallback wrap "Document demandé"
```

```739:758:projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
// composeDocumentTurnMessage → body.trimEnd() avant ACK
```

---

## Verdict final

**SYSTEMIC DOCUMENT FLOW AUDIT COMPLETE — ROOT CAUSE EVIDENCED — MORRIS DESIGN DECISION PENDING.**

Cause evidencée : corruption de frontière ATX par splice d’un corps de section allant à EOF **sans newline de séparation**, détectée à raison par `assertSectionScope` comme `SECTION_SCOPE_EXCEEDED`.
Prochaine étape : arbitrage Morris Options A/D/(B) — aucun correctif dans ce cycle.

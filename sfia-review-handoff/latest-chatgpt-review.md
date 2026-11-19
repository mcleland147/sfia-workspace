# SFIA Review Pack — FULL

| Champ | Valeur |
|---|---|
| Date / heure | 2026-11-19 ~16:45 CET |
| Cycle | 8 — Delivery correctif intégré |
| Profil | CRITICAL |
| Macro-lot | CONTINUITÉ PILOTE–NORA–MÉMOIRE — Ensemble 05 + Ensemble 06 |
| Typologie | EVOL CORRECTIVE / INC / QA / RECETTE |
| Type | PATCH CANDIDATE / **NO RELEASE** / STABLE NOT AVAILABLE |
| Review Pack | FULL |
| Review Handoff | REQUIRED / PUBLISH-IN-CYCLE |

---

## 1. Git Truth Check

| Contrôle | Résultat |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-journal-delivery-20261119` |
| Dépôt | `mcleland147/sfia-workspace` (`origin` GitHub) |
| Branche produit | `sfia/next-journal-delivery-20261119` |
| HEAD initial (préflight) | `4c49f717321ffbc3d276895301ae38d516b637cc` |
| Tree initial | `73efb65d4fb123b586f23088772bf0ce63935542` |
| HEAD final | `d301733871b107fe203730dda056b9c4eac77fdd` |
| Tree final | `49e5a6f8ff4024d010831688e10d7d6c7abddd3c` |
| `origin/main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` (inchangé) |
| Push produit | **AUCUN** |
| PR / merge | **AUCUN** |
| Matrice Journal v0.7 / SEF / ADR / décisions | **non modifiés** |

Commit produit :

```
fix(next): freeze E05 visual grammar and restore Journal editorial quality
```

Fichiers trackés du commit (13) :

- `construction/as-built-ensemble-05-travail-nora-20261117.md`
- `construction/as-built-ensemble-06-journal-20261119.md`
- `construction/delivery-history.md`
- `web/src/domains/conversation/nora-adapter.ts`
- `web/src/domains/knowledge/service.ts`
- `web/src/domains/knowledge/journal.ts`
- `web/src/domains/knowledge/journal-cognition.ts`
- `web/src/components/figma/NoraConversation.tsx`
- `web/src/components/figma/ProjectJournal.tsx`
- `web/src/components/figma/tokens.css`
- `web/tests/unit/e05-visual-composition-freeze.test.ts` (créé)
- `web/tests/unit/d4-record-knowledge-conduction.test.ts`
- `web/tests/integration/journal-d4-revisions.pg.test.ts`

---

## 2. Fichiers lus (sources contractuelles + runtime)

### Processus / gouvernance

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (réf. handoff)
- `scripts/sfia/publish-review-handoff.sh`
- Contrats E05/E06 déjà appliqués en cycles antérieurs (matrice v0.7 lecture seule)

### Code candidat inspecté / modifié

- `nora-adapter.ts` — gel E05, instructions, outputType LIVE
- `semantic-qualification.ts` — schémas retenus (lecture)
- `visual-composition.ts` / `NoraComposition` — **conservés** (non supprimés)
- `NoraConversation.tsx` — focus message retry
- `knowledge/service.ts` — compact editorial + SUBJECT→synthèse
- `knowledge/journal.ts` — dédup sourceLinks
- `knowledge/journal-cognition.ts` — excerpts provenance
- `ProjectJournal.tsx` / `tokens.css` — SourceChip, blurbs, hierarchy height
- `page.tsx` — `onOpenMessage` (lecture ; déjà navigation immédiate)

### Traces UNKNOWN CampusNova

- RECETTE DB `sfia_next_recette_ml4` — messages UNKNOWN + `conversation_turn_commands`
- OBS JSONL `…/4c49f717/…/.obs/recette/events-2026-11-19.jsonl` — `op_78d70493-…`

---

## 3. Analyse sous-systèmes

### A — Gel grammaire visuelle E05

**Règle exacte :**

1. `E05_VISUAL_COMPOSITION_FROZEN = true` (constante technique documentée Morris 19/11/2026).
2. Instructions LIVE : interdiction d’émettre `visualComposition` ; substance dans `replyDraft` Markdown.
3. `Agent.outputType` LIVE = `NoraTurnQualificationSchema.omit({ visualComposition: true })` quand gel actif (schéma Agent complet **conservé** dans le code).
4. `stripVisualCompositionForFrozenReplies` avant `validateNoraTurnQualification` (stream LIVE + simulated).
5. Renderer : messages **historiques** avec composition restent affichables ; nouvelles réponses sans `visualComposition` → Markdown (`SafeMarkdown`).

**Non fait (conforme contrat) :** toggle UI, feature flag produit, suppression composants/styles/schémas/tests E05, réécriture conception.

### B — Journal qualité

| Défaut CampusNova | Cause qualifiée | Correctif |
|---|---|---|
| « Synthèse non encore disponible » | **PROUVÉ** : 0 revision `knowledge_subject_summary_revisions` ; `appendSubjectSummaryRevision` jamais appelé en production | SUBJECT `knowledgeStatement` ≠ titre → `appendSubjectSummaryRevision` (idempotent `subj-summary:{id}:{gen}`) |
| Acquis trop longs / « Selon le Pilote… » | **PROUVÉ** : statements D4 355–461 car. | `editorialCompactKnowledgeStatement` ≤220 + instructions Nora |
| Références génériques / indistinguables | **PROUVÉ** : detail fixe D8-like ; multi-liens même `sourceId` | excerpt auteur/date/ordinal ; dédup par clé source |
| Clic → dernier message | **PROUVÉ** côté UI : focus clear-on-first-miss | retries focus jusqu’à 24×50ms |
| Grande hauteur vide 1 sujet | **PROUVÉ** CSS `flex: 1 1 auto` | `flex: 0 1 auto; max-height: 100%` |
| Sous-titre générique viewer | UI inventait lede | blurb résumé ou 1er acquis ; sinon rien |

**CampusNova historique :** non rattrapé (GO interdit). Nouveaux échanges appliqueront synthèse/compact.

### C — Incident UNKNOWN

Observation Pilote : dernier tour CampusNova → placeholder UNKNOWN.

| Dimension | Qualification |
|---|---|
| Message assistant | `msg_7513e801-…` status UNKNOWN · gen `gen_24118504-…` · ordinal 24 |
| Message utilisateur | `msg_4c097f28-…` **préservé** COMPLETE ordinal 23 |
| Operation | `op_78d70493-b0f2-4087-baa9-68e192ea335f` status UNKNOWN |
| Exception | **CAUSE PROUVÉE** : `ModelBehaviorError` / `structured_output_invalid_type` / phase `stream_drain` / fingerprint `d57214a42390491f` / category `PROVIDER_SCHEMA_OR_OUTPUT` |
| Provider contact | YES · streaming_delivered true · tool_calls 4 · attempts 1 (pas de retry auto) |
| Token overflow | **NON PROUVÉ** (aucune mesure tokens entrée/sortie dans traces) |
| Lien causal grammaire visuelle | **CAUSE POSSIBLE** (pression schéma structured-output) — gel omet `visualComposition` du schéma LIVE |
| Timeout / transport HTTP | **EXCLUE** pour ce tour (error_kind ≠ timeout/transport) |
| Double écriture D4 | **EXCLUE** pour ce tour (`d4_attempted=false`, capitalisation absente sur UNKNOWN) |

Correctif borné inclus : omit schéma LIVE + strip. **Ne pas annoncer UNKNOWN « définitivement réparé »** sans nouvel essai Morris.

---

## 4. Diffs utiles (extraits)

### 4.1 Gel + instructions (`nora-adapter.ts`)

```diff
+export const E05_VISUAL_COMPOSITION_FROZEN = true as const;
+export function stripVisualCompositionForFrozenReplies(raw: unknown): unknown { … }

-    "- replyDraft = … Si visualComposition …"
+    "- replyDraft = … GEL E05 (19/11/2026) : n'émets PAS visualComposition …"
+    "- SUBJECT: subjectTitle = titre court ; knowledgeStatement = synthèse durable …"
+    "- ACQUIS / OPEN_POINT: … vise ≤220 car. …"

-    outputType: NoraTurnQualificationAgentSchema,
+    outputType: E05_VISUAL_COMPOSITION_FROZEN
+      ? NoraTurnQualificationSchema.omit({ visualComposition: true })
+      : NoraTurnQualificationAgentSchema,
```

Diff complet : voir artefact `modified-content/nora-adapter.ts.diff` (93 lignes) — aussi embarqué dans ce pack via commit `d3017338`.

### 4.2 Synthèse + compact (`knowledge/service.ts`)

- `editorialCompactKnowledgeStatement`
- `capitalizeAcquis` / `openPoint` appliquent le compact
- `maybeCapitalizeFromExchange` : après SUBJECT créé, si statement ≠ titre et projet lié → `appendSubjectSummaryRevision` (import dynamique anti-cycle)

### 4.3 Provenance / UI / CSS

- `qualifyProvenanceSource` message → `Nora|Pilote · YYYY-MM-DD · #ord — « extrait »`
- SourceChip : libellés utilisateur ; `data-source-id`
- Focus conversation : retry au lieu de clear immédiat
- `.journal-hierarchy { flex: 0 1 auto; max-height: 100%; }`

---

## 5. Tests et gates

| Suite | Résultat |
|---|---|
| TypeScript `tsc --noEmit` | **PASS** |
| ESLint ciblé | **PASS** (warnings préexistants `_chunk` / import ; 0 error) |
| `next build` (dist `.next`, sans `STUDIO_E2E`) | **PASS** · BUILD_ID `VjAIWGktwCCFG6Zuj-QRK` |
| Unit `e05-visual-composition-freeze` | **PASS** (5) |
| Unit `d4-record-knowledge-conduction` | **PASS** (6) |
| Unit `ensemble05-visual-composition` | **PASS** (20) — code E05 conservé |
| Unit `visual-grammar-c1-c2` | **PASS** (3) |
| Unit `nora-live-output-schema` / corrective | **PASS** |
| PG `journal-d4-revisions` (DEV `:5433`) | **PASS** (16) incl. synthèse+compact+supersede |
| PG `ml4-chat-first-d4-provenance` | **PASS** (19) |
| Playwright Travail/Journal | **NOT RUN** (hors fenêtre ; focus/CSS unit/PG + smoke RECETTE) |
| LIVE Nora auto | **NOT RUN** (interdit) |
| Fake ≠ Real | Fake/PG prouvent gel, D4, projection — **pas** cognition LIVE ni guérison UNKNOWN |

---

## 6. RECETTE — cutover

| Champ | Avant | Après |
|---|---|---|
| URL | `http://127.0.0.1:3200` | idem |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` | idem |
| SOURCE_SHA | `4c49f717…` | `d301733871b107fe203730dda056b9c4eac77fdd` |
| BUILD_ID | `XOSTMrVvPzbd42ylsUL6Q` | `VjAIWGktwCCFG6Zuj-QRK` |
| Worktree | `…/ensemble06-recette-build-4c49f717` | `…/ensemble06-recette-build-d3017338` |
| DB | `sfia_next_recette_ml4` @ `:5434` | **préservée** |
| Migration | 014 | aucune nouvelle |
| Compteurs | projects=24 messages=584 conversations=197 subjects=5 acquis=23 | **identiques** |
| Backup | | `/Users/morris/Projects/sfia-recette-backups/ml4d-e06-journal-20261119-pre-d3017338/sfia_next_recette_ml4.dump` |
| Rollback build | | `…/d3017338/ROLLBACK-TO-4c49f717.sh` |
| Smoke | | `/login` HTTP 200 · HTML build comment `VjAIWGktwCCFG6Zuj_QRK` · `/portfolio` 200 |

Aucun tour LIVE automatisé dans le smoke.

---

## 7. Preuve conservation E05

- Fichiers `visual-composition.ts`, `NoraComposition.tsx`, schémas Agent, tests `ensemble05-visual-composition.test.ts` **non supprimés**.
- Suite E05 unit **20 PASS** après gel.
- Historique : renderer continue d’admettre `visualComposition` persistée si présente.

---

## 8. Fake / Real Qualification

| Preuve | Niveau |
|---|---|
| Gel strip + omit schéma | DETERMINISTIC unit |
| Instructions GEL dans source | DETERMINISTIC unit |
| Synthèse D4 via proposals | PG DEV |
| Compact acquis | PG + unit |
| UNKNOWN cause | REAL traces RECETTE (forensic) |
| UNKNOWN guéri LIVE | **NON PROUVÉ** |
| Mémoire vivante LIVE CampusNova | **MORRIS UAT PENDING** |
| RECETTE build identity | REAL smoke |

---

## 9. Réserves

1. Acquis CampusNova historiques restent verbeux jusqu’à nouveaux échanges / GO rattrapage.
2. Synthèse CampusNova reste vide jusqu’à nouveau SUBJECT statement significatif.
3. `supersedesAcquisId` non encore conduit automatiquement depuis enveloppe Nora (correction testée via API D4 `capitalizeAcquis`).
4. Playwright Journal/Travail **NOT RUN** ce cycle.
5. UNKNOWN : mitigation schéma ≠ preuve de non-récurrence LIVE.
6. HTML comment buildId normalise `-` → `_` ; fichier `.next/BUILD_ID` conserve le tiret.

---

## 10. Verdict Cursor (sortie §25)

**CORRECTIVE DELIVERY VERIFIED — TEXTUAL NORA ACTIVE — RECETTE TECHNICALLY AVAILABLE — MORRIS UAT PENDING**

Non annoncé : Gate C · STABLE · RELEASE · ADOPTED · UNKNOWN définitivement réparé · succès LIVE mémoire sans UAT Morris.

---

## 11. Artefacts locaux du pack (worktree)

Sous `projects/sfia-studio-next/.tmp-sfia-review/modified-content/` :

- `nora-adapter.ts.diff`
- `knowledge-service.ts.diff`
- `journal-provenance.ts.diff`
- `figma-ui.diff`
- `e05-visual-composition-freeze.test.ts`
- `campusnova-unknown-obs.jsonl`

Le handoff distant doit permettre la revue **sans** worktree : contenu critique ci-dessus + diffs clés ; lecture Git du commit `d3017338` pour le reste.

---

## 12. Action utilisateur suivante

Morris reprend CampusNova sur `http://127.0.0.1:3200` :

1. Nouvelle réponse Nora textuelle (sans cartes E05).
2. Enrichissement sujet → synthèse + acquis courts.
3. Sources → message exact (ancien + récent).
4. Observer si UNKNOWN récidive (preuve LIVE).

---

## Instruction ChatGPT (SFIA v2.6 §9.1)

Avant toute revue, ChatGPT doit lire depuis Git `sfia/review-handoff` /
`sfia-review-handoff/latest-chatgpt-review.md`, contrôler le code modifié et ses
diff utiles, les tests, les gates, les réserves et l'identité de RECETTE, puis
produire une synthèse indépendante du cycle.

Un handoff incomplet ou synthesis-only n'autorise aucun READY formel.

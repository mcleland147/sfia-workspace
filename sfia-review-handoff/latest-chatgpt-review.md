# SFIA Review Pack — FULL

| Champ | Valeur |
|---|---|
| Date / heure | 2026-11-19 ~17:50 CET |
| Cycle | 8 — Delivery correctif |
| Profil | CRITICAL |
| Macro-lot | QUALITÉ DE LA MÉMOIRE DURABLE — Ensemble 06 Journal V4 |
| Typologie | CORRECTIF FONCTIONNEL / UX / INTÉGRATION |
| Type | PATCH CANDIDATE / **NO RELEASE** / STABLE NOT AVAILABLE |
| Review Pack | FULL |
| Review Handoff | REQUIRED / PUBLISH-IN-CYCLE |
| Verdict Cursor | **CORRECTIVE DELIVERY VERIFIED — RECETTE TECHNICALLY AVAILABLE — MORRIS UAT PENDING** |

---

## 1. Git Truth Check

| Contrôle | Résultat |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-journal-delivery-20261119` |
| Dépôt | `mcleland147/sfia-workspace` (`origin` GitHub) |
| Branche produit locale | `sfia/next-journal-delivery-20261119` |
| HEAD initial (préflight contrat) | rapporté `d3017338` — **local réel** `6457bc8e` (déjà servi en RECETTE ; divergence expliquée = cycles correctifs intermédiaires) |
| HEAD code correctif | `605def5970982bc56012e150bc105656d934169e` |
| Tree code | `2810c605fffca17b96f64734877f638074819ee5` |
| HEAD docs as-built RECETTE | `f8dd98024fd6b09c1092055261464a9e9fd26a08` |
| Tree docs | `b208cd0eb7044ba2a4450bedcd228aa113cffc12` |
| `origin/main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` (inchangé) |
| Branche documentaire | `sfia/next-journal-conception-fonctionnelle-ux-20261119` @ `f0d2d033` — lecture seule |
| Handoff précédent | `sfia/review-handoff` @ `7206da97` blob `90bf97ea` |
| Push produit / PR / merge | **AUCUN** |
| Matrice Journal v0.7 / SEF / ADR / décisions / Figma / D6 | **non modifiés** |

**Git Truth : PASS** (divergence vs SHA contrat `d3017338` motivée et cohérente avec RECETTE déjà sur `6457bc8e`).

---

## 2. Sources Git applicables (lues)

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/sfia-cycle-execution-template.md`
- Gouvernance NEXT (SEF, roadmap, décisions, naming, ENV-01, versioning) — **non mutées**
- Conception fonctionnelle (contexte Nora, connaissance sujets, décisions Pilote)
- `architecture-technique/cadrage-r4.md` + ADR/DATA-01 applicables
- Contrats Journal construction (fonctionnel UX, technique, matrice v0.7 **lecture seule**)
- As-built E05/E06 + delivery-history
- Code D3/D4, Journal, SourceChip, NoraConversation, tests unit/PG/e2e
- Figma Journal V4 `itgvCulInEnFY6DvgIegvP` page `828:2` — référence conception (pas de modification Figma)

---

## 3. Constats CampusNova (faits de recette)

| Fait | Observation |
|---|---|
| D4 sujets | Nora crée spontanément des sujets ; enrichissement possible |
| Sujet 2 | « Accompagnement et déploiement des utilisateurs » distinct |
| Nora | réponses textuelles (E05 gelé) |
| A — Parcours | synthèse absente (0 summary revision) ; 7 acquis CURRENT ; 0 SUPERSEDED |
| B — Acquis | longs / répétitions ; corrections non supersédées |
| C — Accompagnement | synthèse présente ; 0 acquis ; points ouverts ; refs variables |
| D — Sources | 100 % message IDs Pilote (user) en provenance historique |
| E — SourceChip | libellé compact brut (kind · currentness + detail) |
| F — Ancrage | clic source → dernier message Travail (hypothèse stick-to-end) |
| G — Contradictions | 9× libellé identique générique |
| H — Points ouverts | formulations longues |
| I — Synthèse | pas de révision démontrée hors création SUBJECT |

**Aucune mutation SQL / backfill / rejeu LIVE CampusNova** dans ce cycle.

---

## 4. Diagnostiques causaux (D3→D4→API→UI)

### A. Synthèse absente sur sujet enrichi
- **Flux** : intents `d4.record_knowledge` → `extractKnowledgeProposals` → `maybeCapitalizeFromExchange` → `appendSubjectSummaryRevision` → projection Journal
- **Rupture** : révision synthèse uniquement si `kind === "SUBJECT"` ; enrichissement CampusNova = ACQUIS seuls → 0 summary
- **Fichier** : `web/src/domains/knowledge/service.ts` (+ instructions `nora-adapter.ts`)
- **Correction** : SUBJECT avec `subjectId` existant révise la synthèse ; skip `NO_SIGNIFICANT_CHANGE` si markdown identique ; instructions enrichissement
- **Impact données** : Parcours historique reste sans synthèse jusqu’à nouvel échange SUBJECT (honnête)
- **Preuve** : PG test enrich + noop

### B. Acquis non supersédés
- **Rupture** : `supersedesAcquisId` jamais fourni par Nora ; pas de sélection serveur
- **Correction** : paramètre Zod `supersedesAcquisId` ; heuristique `findSupersedeCandidate` (nombres divergents + overlap tokens)
- **Preuve** : PG test SUPERSEDES + CURRENT/SUPERSEDED

### C. Sources Pilote-only
- **Rupture** : provenance toujours `sourceId = userMessageId`
- **Correction** : `assistantMessageId` passé depuis D3 ; `relatedMessageIds` + `contributionKind` ; projection multi-liens
- **Note** : recommended = contribution Nora (pas preuve factuelle autonome)

### D. SourceChip UX
- **Rupture** : un seul `detail` compacté
- **Correction** : `authorLabel` / `occurredAt` / `excerpt` (≤18 mots) + CSS Figma-like

### E. Navigation exacte
- **Rupture** : remount Travail → `useNoraThreadScroll` prime `scrollToBottom` et écrase le focus
- **Correction** : `focusMessageId` = focusLock prioritaire jusqu’à honoré
- **Preuve** : Playwright `data-journal-focus=1` + early ≠ last

### F. Contradictions ×9
- **Rupture** : heuristique NEGATION + overlap≥2 → faux positifs ; raison générique
- **Correction** : overlap≥3 ; scopes temporels ; corrections numériques exclues ; raison contextualisée avec extraits
- **Données** : enregistrements historiques non supprimés ; projection runtime resserrée

---

## 5. Inventaire fichiers modifiés (commit `605def59`)

| Fichier | Rôle |
|---|---|
| `web/src/domains/knowledge/service.ts` | synthèse subjectId, supersession, provenance, resolve open point |
| `web/src/domains/knowledge/journal.ts` | skip synthèse identique ; multi-sources ; summary links |
| `web/src/domains/knowledge/journal-cognition.ts` | contradictions + QualifiedSource présentation |
| `web/src/domains/conversation/semantic-qualification.ts` | supersedes/resolves + slice 5000 |
| `web/src/domains/conversation/service.ts` | `assistantMessageId` → capitalisation |
| `web/src/domains/conversation/nora-adapter.ts` | instructions mémoire vivante |
| `web/src/hooks/useNoraThreadScroll.ts` | focusLock deep-link |
| `web/src/components/figma/NoraConversation.tsx` | passe focusMessageId |
| `web/src/components/figma/ProjectJournal.tsx` | SourceChip + contradictions + sections conditionnelles |
| `web/src/components/figma/tokens.css` | styles source/contradiction |
| tests unit/PG/e2e | A–K ciblés |
| as-built E06 + delivery-history | descriptif |

---

## 6. Diffs utiles (extraits)

### Focus lock scroll (`useNoraThreadScroll.ts`)
- Nouveau param `focusMessageId`
- Si focusLock : pas de prime scroll-to-end ; stick désactivé ; forceStick ignoré
- Hors focus : comportement CT-01 inchangé (dernier message)

### Contradictions (`detectAcquisContradictions`)
- Seuil overlap 2→3
- Exclusion portées temporelles disjointes
- Exclusion corrections numériques sans hard-negation
- `reason` = `Contradiction : « … » s'oppose à « … ».`

### Capitalisation (`maybeCapitalizeFromExchange`)
- SUBJECT + `subjectId` → `writeSubjectSummary`
- ACQUIS → `findSupersedeCandidate` si pas d’id explicite
- Provenance `buildExchangeProvenance` (Pilote/Nora/mixed)
- `resolvesOpenPointId` → `resolveOpenPointFactually` (preuve message requise)

---

## 7. Tests exacts

| Suite | Résultat |
|---|---|
| `tsc --noEmit` | **PASS** |
| Unit `journal-cognition` (vrai + faux positifs) | **PASS** (7) |
| Unit `d4-record-knowledge-conduction` (+ supersedes/5000) | **PASS** (7) |
| Unit `e05-visual-composition-freeze` | **PASS** (6) |
| Unit `thread-pending-turn-in-progress` | **PASS** (5) |
| PG `journal-d4-revisions` (synthèse/supersession/enrich) | **PASS** (17) |
| PG `ml4c-s05-idempotence-knowledge` | **PASS** (7) |
| Playwright `journal-v4-parcours` (source exacte + UX) | **PASS** (2) — **bloquant** |
| Next build | **PASS** |
| LIVE automatisé Nora | **NOT RUN** (interdit) |
| Smoke HTTP RECETTE `/login` | **PASS** (200) — ≠ preuve E2E nav |

### Mapping acceptation contrat

| Test | Statut |
|---|---|
| A Synthèse révision / no-op | **PASS** (PG) |
| B Correction acquis 9→10 | **PASS** (PG supersession) |
| C Question résolue | **PASS** partiel (API `resolvesOpenPointId` + PG resolve existant) — UAT Morris CampusNova |
| D Sujet distinct | **NOT RUN** LIVE — pipeline inchangé ; UAT |
| E Source Nora | **PASS** code+projection ; UAT affichage |
| F Source Pilote | **PASS** SourceChip + Playwright author |
| G Ancrage exact | **PASS** Playwright focus |
| H Contradiction vraie | **PASS** unit GitHub |
| I Faux positif | **PASS** unit CampusNova-class |
| J Déduplication | **PASS** (idempotence génération + skip identical) |
| K UX | **PASS** Playwright + CSS |
| L Non-régression E05/D6 gel | **PASS** unit freeze ; D6 non touché |

---

## 8. RECETTE (ENV-01)

| Champ | Valeur |
|---|---|
| URL | `http://127.0.0.1:3200` |
| SOURCE_SHA | `605def5970982bc56012e150bc105656d934169e` |
| BUILD_ID | `1L_uXFJAT1SfYsqcUaUL` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble06-recette-build-605def59` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` |
| Migration | 014 (aucune nouvelle) |
| Compteurs | projects=24 · messages=590 · conversations=197 · knowledge_subjects=6 · knowledge_acquis=26 · knowledge_open_points=8 — **inchangés** |
| Backup | `/Users/morris/Projects/sfia-recette-backups/ml4d-e06-journal-20261119-pre-605def59/sfia_next_recette_ml4.dump` |
| Rollback | `…/605def59/ROLLBACK-TO-6457bc8e.sh` → BUILD précédent `Qs9jUCnasE-ERYU1qsZhB` |
| Smoke | `/login` 200 ; Next Ready ; **sans appel LIVE Nora** |

---

## 9. Qualité mémoire vivante — synthèse pour ChatGPT

Le Journal dispose maintenant d’un chemin pour **créer/réviser une synthèse** quand un SUBJECT (y compris sur sujet existant) apporte un changement durable, sans réécriture à l’identique, sans appel fournisseur à l’ouverture du Journal, et sans inventer une synthèse pour un état vide historique.

Les acquis courants peuvent **superséder** un antécédent (explicite ou heuristique numérique). L’historique SUPERSEDED reste en base.

La provenance peut relier **Pilote et Nora** sans attribuer une preuve factuelle autonome à Nora.

Les contradictions runtime ne doivent plus produire neuf libellés génériques identiques sur de simples corrections / négations faibles.

L’ancrage Journal→Travail honore le **message exact** prioritairement sur le scroll fin de fil.

**CampusNova historique** : données préservées ; Parcours sans synthèse jusqu’à nouvel échange SUBJECT ; contradictions historiques non purgées (projection améliorée seulement). Une réconciliation sémantique bornée éventuelle = **GO Morris séparé**.

---

## 10. Risques et réserves

1. Heuristique `findSupersedeCandidate` bornée aux corrections numériques — corrections purement lexicales sans nombres exigent `supersedesAcquisId` Nora.
2. Synthèse Parcours CampusNova reste vide sans nouvel échange (pas de backfill).
3. Contradictions déjà matérialisées en UI runtime changent avec la nouvelle heuristique ; événements historiques non effacés.
4. Verdict fidélité visuelle Figma → **Morris**.
5. LIVE comportemental Nora → **non prouvé** ce cycle (fake/PG/Playwright seulement).
6. Pas de Gate C / STABLE / RELEASE / ADOPTED.

---

## 11. Action Morris

1. UAT RECETTE `:3200` SHA `605def59` / BUILD `1L_uXFJAT1SfYsqcUaUL` sur CampusNova :
   - nouvel échange enrichissant Parcours → synthèse révisée ?
   - correction inventaire → acquis courant unique + historique ?
   - sources Pilote/Nora lisibles ?
   - clic source → message exact (pas seulement le dernier) ?
   - contradictions compréhensibles / FPs réduits ?
2. Relire le handoff distant `sfia/review-handoff` (blob vérifié) **via ChatGPT**.
3. Si reprise sémantique historique CampusNova souhaitée → décider d’un contrat de réconciliation borné séparé.

---

## 12. Interdits respectés

- Pas de push produit / PR / merge / promotion STABLE
- Pas de modification matrice Journal v0.7 / SEF / ADR / D6 / Figma / gel E05
- Pas de LIVE automatisé
- Pas de SQL d’édition CampusNova / backfill / rejeu fournisseur
- Pas de second moteur de mémoire
- Pas de nouvelle migration

FIN DU PACK FULL — SYNTHESIS ONLY INTERDIT (ce document contient diagnostics, diffs, tests, preuves, RECETTE).

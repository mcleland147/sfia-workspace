# SFIA Review Pack — FULL

| Champ | Valeur |
|---|---|
| Date / heure | 2026-11-19 ~14:45 CET |
| Cycle | 8 — Delivery correctif |
| Profil | CRITICAL |
| Macro-lot | Ensemble 06 — restauration capitalisation Nora → D4 |
| Type | PATCH CANDIDATE / **NO RELEASE** |
| Review Pack | FULL |
| Review Handoff | REQUIRED / PUBLISH-IN-CYCLE |

---

## 1. Git Truth Check

| Contrôle | Résultat |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-journal-delivery-20261119` |
| Branche | `sfia/next-journal-delivery-20261119` |
| HEAD initial | `b9a0c9c3d16cbd68014daec999addab9feb70002` |
| HEAD final | `4c49f717321ffbc3d276895301ae38d516b637cc` |
| Tree final | `73efb65d4fb123b586f23088772bf0ce63935542` |
| `origin/main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Push produit | **AUCUN** |
| Matrice v0.7 / SEF / ADR | non modifiés |

Commit :

```
fix(next): restore selective Nora D4 knowledge capitalisation conduction
```

---

## 2. Cause corrigée

Diagnostic CampusNova (`sfia/review-handoff@3fac39c1`) :

- 0× intent `d4.record_knowledge` → 0 écriture D4 → Journal vide.
- Premier maillon : qualification D3.
- Contributive : consignes LIVE sans guidance mémoire ; règle REQUEST_EFFECT lue comme « demande Pilote explicite » pour tout effet.

**Correction :** conduction cognitive + clarification d’autorité bornée — **pas** nouveau moteur mémoire.

---

## 3. REQUEST_EFFECT — compatibilité

| Question | Réponse |
|---|---|
| Pourquoi `d4.record_knowledge` est REQUEST_EFFECT ? | Seuls les intents `REQUEST_EFFECT` passent `effectIntents` → `extractKnowledgeProposals` (EXPLAIN = conversation seule, TEMP-05). |
| Intent disponible en schéma LIVE ? | **Oui** — `StudioCapabilityIdSchema` + paramètres knowledge*. |
| « Demande positive d’effet » bloquait-elle la mémoire ? | **Oui en pratique** via le prompt (pas via un second filtre post-extract). |
| Filtrage | Avant écriture : extract exige REQUEST_EFFECT ; D4 `maybeCapitalizeFromExchange` n’écrit que si proposals non vides. |
| Assouplissement global ? | **Non** — documents/D2/D5/D6/Git restent mandat explicite Pilote. |
| Adaptation bornée | Prompt : `d4.record_knowledge` **peut** être REQUEST_EFFECT autonome sélectif. |

Aucune modification de doctrine D6. Pas de STOP autorité.

---

## 4. Diffs utiles

### `nora-adapter.ts`

- SYSTEM : distingue écriture **documentaire** vs **mémoire** `d4.record_knowledge` spontanée sélective.
- QUALIFICATION_INSTRUCTIONS : section **MÉMOIRE DURABLE / CAPITALISATION SÉLECTIVE** (conditions +/−, enrichissement, epistemic, EXPLAIN≠écriture).
- REQUEST_EFFECT reformulé : (a) effets protégés = mandat explicite ; (b) mémoire = autonome sélective.

### `semantic-qualification.ts`

- Commentaire de gate sur `extractKnowledgeProposals`.
- `summarizeKnowledgeProposals` (compteurs OBS).

### `service.ts`

- OBS `d3.turn.knowledge_proposals` puis `d3.turn.knowledge_capitalisation` autour de `maybeCapitalizeFromExchange`.
- UNKNOWN / non-COMPLETE : chemin capitalisation non ouvert (inchangé).

### `observability.ts`

- Allowlist meta : `proposal_count`, `subject_count`, `acquis_count`, `open_point_count`, `capitalisation_written`, …

### Tests

- `tests/unit/d4-record-knowledge-conduction.test.ts` (A/B/D/G + structure prompt).

### Docs descriptives

- `delivery-history.md` · `as-built-ensemble-06-journal-20261119.md`

---

## 5. Conditions de capitalisation (prompt)

**Positives :** acquis important ; sujet structurant ; question significative ; correction/précision ; consolidation ; évolution de synthèse.

**Négatives :** courtoisie ; répétition ; supposition fragile ; hors projet ; source hostile ; décision non prise ; affirmation sans provenance.

Sélectivité explicite : banal ⇒ 0 ; riche ⇒ propositions ciblées (pas une fiche par phrase).

---

## 6. Tests

| Suite | Résultat |
|---|---|
| `tsc --noEmit` | PASS |
| eslint (fichiers touchés) | PASS (warnings préexistants) |
| unit `d4-record-knowledge-conduction` | PASS 6/6 |
| unit `ml4c-temp-restitution` + sas maturation | PASS |
| unit `semantic-qualification` + `nora-adapter-corrective` | PASS |
| PG `ml2-knowledge-documents` | PASS 6/6 |
| PG `ml4c-s05-idempotence-knowledge` | PASS 7/7 |
| Playwright `journal-v4-parcours` | PASS 2/2 |
| Campagne LIVE auto | **NOT RUN** (interdit) |
| UAT Morris CampusNova | **PENDING** |

Fake provider / fixtures = **raccordement pipeline**. **Pas** BEHAVIOR PROVEN LIVE.

UNKNOWN : extract sur UNAVAILABLE ⇒ 0 proposals (test G) ; tours UNKNOWN CampusNova historiques non rejoués.

---

## 7. RECETTE cutover

| Champ | Valeur |
|---|---|
| URL | `http://127.0.0.1:3200` |
| Avant | `VkuCNyaO0VIUbNtM2KJfO` / `3fc8af5f` |
| Après SOURCE_SHA | `4c49f717321ffbc3d276895301ae38d516b637cc` |
| Après BUILD_ID | `XOSTMrVvPzbd42ylsUL6Q` |
| Worktree | `…/ensemble06-recette-build-4c49f717` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` running |
| DB | `sfia_next_recette_ml4` — projects=24 · messages=576 · subjects=4 |
| CampusNova | messages=16 préservés · subjects=0 (pas de rattrapage) |
| Rollback | `…/4c49f717/ROLLBACK-TO-3fc8af5f.sh` |
| Backup note | `…/ml4d-e06-journal-20261119-pre-4c49f717/` + dump E06 existant |
| Préflight | KeepAlive concurrents bootout temporaire (plists conservés) |
| Smoke | login 200 · portfolio · fixtures 403 · **aucun tour LIVE** |

---

## 8. Limites / réserves

- Le correctif **autorise et guide** la proposition ; la cognition LIVE réelle sera observée par Morris sur CampusNova.
- Pas de rattrapage automatique des 16 messages.
- Échecs UNKNOWN stream/schema (UAT-03) = chantier distinct non élargi.
- Sur-capitalisation possible si le modèle sur-émet — conditions négatives + review UAT.

---

## 9. Verdict

**CORRECTIVE DELIVERY VERIFIED — RECETTE TECHNICALLY AVAILABLE — MORRIS UAT PENDING**

Action utilisateur : nouvel échange significatif dans CampusNova sur `:3200` pour observer si Nora émet `d4.record_knowledge` et si le Journal se remplit.

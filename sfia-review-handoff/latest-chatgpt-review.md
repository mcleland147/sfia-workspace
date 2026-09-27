# ChatGPT Review Pack — FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| **Date / heure / timezone** | 2026-09-28 01:32:44 CEST |
| **Cycle** | Cadrage projet — correction niveaux de preuve Experience Map 1.2 |
| **Profil** | Standard |
| **Typologie** | DOC / visual knowledge artifact |
| **Projet** | CRM Assurance Courtage |
| **Baseline** | SFIA v2.6 |
| **SFIA Studio Convergence** | N/A |
| **Fake / Real** | N/A |

---

## Git Truth initial

| Check | Valeur |
|-------|--------|
| **Workspace** | `/Users/l/Projects/sfia-worktree-crm-assurance` |
| **Branche** | `docs/crm-assurance-courtage-1-2-user-discovery-01` |
| **HEAD initial** | `f56fadc216af784c73e77be83831becb86591f35` |
| **origin/main** | `b7fdf712073257f9fc64c294ac7e68af2cd64464` |
| **Dirt tolérée** | `.tmp-sfia-review/**` uniquement |
| **Git Truth** | **PASS** |

---

## Sources lues

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
4. `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md`
5. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
6. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
7. `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
8. `scripts/sfia/README.md`
9. `projects/crm-assurance-courtage/00-intake/crm-assurance-courtage-operating-doctrine.md`
10. `projects/crm-assurance-courtage/01-cadrage/01-01-analyse-besoins-metiers.md`
11. `projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md`
12. Review Handoff CRM antérieur (si utile) — consultation contextuelle

---

## Décision Morris (conservée)

| Décision | Statut |
|----------|--------|
| **1.2** | OPENED — WORKING ANALYSIS |
| Proto-personas Courtier / Directeur / Prospect → Client | ADOPTED — MATERIALIZED |
| Experience Map | ADOPTED — MATERIALIZED IN MIRO |
| Customer Journey Map | ADOPTED — MATERIALIZED IN MIRO |
| Traçabilité / Continuité du suivi | Clarifications Morris adoptées (liées, non synonymes) |
| Pensées / émotions | NON RENSEIGNÉES — NO FIELD RESEARCH — NO EMOTIONAL INFERENCE |
| Architecture | NOT DECIDED |
| Stack | NOT DECIDED |
| **1.3** | NOT OPENED |

Le présent GO **ne** signifie **pas** : 1.2 VALIDATED.

---

## Miro pre-check

| Check | Résultat |
|-------|----------|
| Board | `https://miro.com/app/board/uXjVHiWX64c=/` |
| Inventaire | 321 objets ; 7 frames ; 0 loose |
| Frame Experience Map ID | `3458764685164458754` (inchangé) |
| Experience Map items | 89 |
| Pre-check valeurs preuve | **PASS** — P2/P3/P6 = EXPLICITE ; P1/P4/P5 = EXPLICITE + INFÉRENCE |

### Valeurs de preuve AVANT (ligne NIVEAU DE PREUVE)

| Phase | Widget ID | Avant |
|-------|-----------|-------|
| 1. Contact / qualification | `3458764685164458784` | EXPLICITE + INFÉRENCE |
| 2. Devis | `3458764685164458796` | EXPLICITE |
| 3. Relance / RDV | `3458764685164458811` | EXPLICITE |
| 4. Besoin → proposition | `3458764685164458825` | EXPLICITE + INFÉRENCE |
| 5. Souscription → vie contrat | `3458764685164458837` | EXPLICITE + INFÉRENCE |
| 6. Docs / sinistre / renouvel. | `3458764685164458849` | EXPLICITE |

---

## Mutation Miro

| Champ | Valeur |
|-------|--------|
| Méthode | `canvas_update_from_svg` |
| Parent frame | `3458764685164458754` |
| Create | **0** |
| Delete | **0** |
| Updated | **3** |

### IDs exacts des trois textAreas modifiés

| Phase | Widget ID | Avant | Après |
|-------|-----------|-------|-------|
| 2. Devis | `3458764685164458796` | EXPLICITE | EXPLICITE + INFÉRENCE |
| 3. Relance / RDV | `3458764685164458811` | EXPLICITE | EXPLICITE + INFÉRENCE |
| 6. Docs / sinistre / renouvel. | `3458764685164458849` | EXPLICITE | EXPLICITE + INFÉRENCE |

### Valeurs de preuve APRÈS (six phases)

| Phase | Widget ID | Après |
|-------|-----------|-------|
| 1. Contact / qualification | `3458764685164458784` | EXPLICITE + INFÉRENCE |
| 2. Devis | `3458764685164458796` | EXPLICITE + INFÉRENCE |
| 3. Relance / RDV | `3458764685164458811` | EXPLICITE + INFÉRENCE |
| 4. Besoin → proposition | `3458764685164458825` | EXPLICITE + INFÉRENCE |
| 5. Souscription → vie contrat | `3458764685164458837` | EXPLICITE + INFÉRENCE |
| 6. Docs / sinistre / renouvel. | `3458764685164458849` | EXPLICITE + INFÉRENCE |

**Motif (non mutation de contenu métier) :** étapes métier et certains enjeux soutenus par le brief ; rattachement précis à une phase = inférence de cadrage ; « Continuité du suivi » = clarification Morris, non formulation littérale du brief.

---

## Inventaire Miro après

| Check | Résultat |
|-------|----------|
| total_items | **321** |
| frames | **7** |
| loose | **0** |
| Experience Map ID | `3458764685164458754` inchangé |
| Experience Map items | **89** inchangé |
| Create | **0** |
| Delete | **0** |
| Exactement 3 textes preuve modifiés | **PASS** |

### Frames protégées — confirmation inchangées

| Frame | ID / note | Item count | Statut |
|-------|-----------|------------|--------|
| 1.1 — Business Model Canvas | — | 31 | inchangé |
| 1.1 — BPMN | — | 22 | inchangé |
| 1.2 — Persona — Courtier | — | 19 | inchangé |
| 1.2 — Persona — Directeur du cabinet | — | 18 | inchangé |
| 1.2 — Persona — Prospect → Client assuré | — | 22 | inchangé |
| 1.2 — Customer Journey Map — Prospect → Client | `3458764685164510320` | 113 | inchangé |
| 1.2 — Experience Map — Courtier | `3458764685164458754` | 89 | seuls 3 textes preuve modifiés |

---

## Document Git 1.2 — section modifiée (complète)

Fichier unique modifié :
`projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md`

Section : `### Clarifications Morris — maps 1.2` — point **6** ajouté.

### Contenu ajouté (exploitable)

```markdown
6. **Niveau de preuve de l’Experience Map :**

Les six phases sont qualifiées **EXPLICITE + INFÉRENCE**.

Cette qualification combinée signifie que les étapes métier et certains enjeux sont soutenus explicitement par le brief, tandis que leur rattachement précis à une phase donnée et certaines notions de cadrage — notamment la **continuité du suivi** — relèvent d’une **inférence de cadrage**.

Elle ne signifie **pas** que chaque élément est littéralement écrit dans le brief, ni que chaque élément est une pure inférence, ni que les maps sont empiriquement validées.

| Phase | Niveau de preuve |
|-------|------------------|
| Contact / qualification | EXPLICITE + INFÉRENCE |
| Devis | EXPLICITE + INFÉRENCE |
| Relance / RDV | EXPLICITE + INFÉRENCE |
| Besoin → proposition | EXPLICITE + INFÉRENCE |
| Souscription → vie contrat | EXPLICITE + INFÉRENCE |
| Docs / sinistre / renouvellement | EXPLICITE + INFÉRENCE |
```

Doctrine `crm-assurance-courtage-operating-doctrine.md` : **non modifiée**.

---

## Diff Git utile complet

```diff
diff --git a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
index a6172162..c83e745b 100644
--- a/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
+++ b/projects/crm-assurance-courtage/01-cadrage/01-02-analyse-besoins-utilisateurs.md
@@ -289,6 +289,23 @@ Relation : la traçabilité **peut soutenir** la continuité du suivi ; elles so

 5. **Émotion — Customer Journey Map :** dimension méthodologique conservée ; information **NON RENSEIGNÉE** ; aucune observation terrain ; **pas** d’inférence émotionnelle.

+6. **Niveau de preuve de l’Experience Map :**
+
+Les six phases sont qualifiées **EXPLICITE + INFÉRENCE**.
+
+Cette qualification combinée signifie que les étapes métier et certains enjeux sont soutenus explicitement par le brief, tandis que leur rattachement précis à une phase donnée et certaines notions de cadrage — notamment la **continuité du suivi** — relèvent d’une **inférence de cadrage**.
+
+Elle ne signifie **pas** que chaque élément est littéralement écrit dans le brief, ni que chaque élément est une pure inférence, ni que les maps sont empiriquement validées.
+
+| Phase | Niveau de preuve |
+|-------|------------------|
+| Contact / qualification | EXPLICITE + INFÉRENCE |
+| Devis | EXPLICITE + INFÉRENCE |
+| Relance / RDV | EXPLICITE + INFÉRENCE |
+| Besoin → proposition | EXPLICITE + INFÉRENCE |
+| Souscription → vie contrat | EXPLICITE + INFÉRENCE |
+| Docs / sinistre / renouvellement | EXPLICITE + INFÉRENCE |
+
 ---

 ## Miro — matérialisation 1.2
```

Stat : `1 file changed, 17 insertions(+)`

---

## Validations

| Validation | Résultat |
|------------|----------|
| Git Truth | **PASS** |
| Experience Map pre-check | **PASS** |
| Phase 2 preuve corrigée | **PASS** |
| Phase 3 preuve corrigée | **PASS** |
| Phase 6 preuve corrigée | **PASS** |
| Six phases EXPLICITE + INFÉRENCE | **PASS** |
| Exactement 3 widgets Miro modifiés | **PASS** |
| Create Miro | **0** |
| Delete Miro | **0** |
| CJM inchangée | **PASS** |
| Personas inchangés | **PASS** |
| 1.1 inchangé | **PASS** |
| Document Git aligné | **PASS** |
| Exactement 1 fichier projet | **PASS** |
| `git diff --check` | **PASS** |
| 1.2 OPENED | **PASS** |
| Architecture NOT DECIDED | **PASS** |
| Stack NOT DECIDED | **PASS** |
| 1.3 NOT OPENED | **PASS** |
| Commit local | **PASS** |
| Push projet | **NOT DONE** |
| PR | **NOT CREATED** |

---

## Commit

| Champ | Valeur |
|-------|--------|
| Message | `docs(crm-assurance-courtage): align 1.2 experience map evidence levels` |
| SHA | `4136e38f48bbbfebe40e1836a40ed1726b7fb067` |
| Parent (non amendé) | `f56fadc216af784c73e77be83831becb86591f35` |
| Staging | chemin explicite uniquement (pas `git add .` / `-A`) |

---

## HEAD final / push / PR

| Champ | Valeur |
|-------|--------|
| **HEAD final** | `4136e38f48bbbfebe40e1836a40ed1726b7fb067` |
| **Push projet** | NOT DONE |
| **PR** | NOT CREATED |
| **1.2** | OPENED — WORKING ANALYSIS |
| **1.3** | NOT OPENED |
| **Architecture / Stack** | NOT DECIDED |

---

## Réserves

1. Le label combiné **EXPLICITE + INFÉRENCE** ne signifie pas que tout le contenu de chaque phase est inventé ; il reflète support brief + attribution de phase / notions de cadrage.
2. Ce cycle **ne** valide **pas** le 1.2 ; gate Morris séparée requise pour `1.2 — VALIDATED`.
3. Dirt locale restante uniquement sous `.tmp-sfia-review/**` (pack + artefacts Miro de cycles antérieurs).
4. Branche projet non poussée ; Review Handoff publié séparément (L3 borné).

---

## Verdict

**READY FOR CHATGPT REVIEW — CRM 1.2 EXPERIENCE MAP EVIDENCE LEVELS ALIGNED**

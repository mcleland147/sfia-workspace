# SFIA Review Pack — FULL — Audit doctrine SFIA Studio v3

## Niveau
FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 16:44:23 CEST (+0200) |
| Fuseau | Europe/Paris |
| Cycle | Capitalisation / audit doctrinal — SFIA Studio v3 Doctrine Audit |
| Profil | Capitalization · profondeur Critical |
| Typologie | DOC / CAPA / AUDIT |
| Gate consommé | `GO AUDIT ET CONSOLIDATION — SFIA STUDIO V3 DOCTRINE` |
| Worktree audit | `/Users/morris/Projects/sfia-workspace-main-ckc-postmerge` |
| Branche | `main` |
| HEAD | `2014e941f548c519d152ebc70d0d4ddad29a6397` |
| origin/main | `2014e941f548c519d152ebc70d0d4ddad29a6397` |
| merge-base | `2014e941…` (= HEAD) |
| Intro v3 (historique) | `88fa465…` — feat control tower + AI-guided intake (#254) |
| UX docs 87–89 | **absents de main** — lus depuis worktree UX @ `7dc6f9f…` |
| Handoff distant pré-audit | `100bdc7…` — Studio conversational flow validation |
| Modifications projet | **aucune** |
| Commit projet | **aucun** |

## Verdict

**SFIA STUDIO V3 DOCTRINE AUDITED — CONSOLIDATION DECISIONS REQUIRED**

## Gate suivant candidat

`GO MORRIS ARBITRATION — SFIA STUDIO V3 DOCTRINE`

(alternatif après arbitrage : `GO CONSOLIDATION CIBLÉE — SFIA STUDIO V3 DOCTRINE` · `GO ENRICHISSEMENT CKC — SFIA STUDIO V3`)

---

## 1. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| pwd | main worktree `sfia-workspace-main-ckc-postmerge` |
| fetch | OK |
| branche | `main` |
| HEAD = origin/main | oui `2014e941…` |
| staged | vide |
| untracked | `.tmp-sfia-review/` seulement |
| lock | NO_LOCK |
| 4 répertoires v3 | présents |
| v3 vs origin/main | alignés (pas de modif locale v3) |
| stop | aucun |

---

## 2. CKC (cycle d'audit)

| Champ | Valeur |
|-------|--------|
| recherché | oui |
| cycle | capitalisation / audit doctrinal |
| contrat détaillé | **absent** (pas de pilote « audit doctrinal ») |
| fallback | carte synthétique + méthode v2.6 |
| usage | guidance cognitive seulement |
| objets audités | CKC candidat post-#258 (pas autorité) |

---

## 3. Sources consultées

### v3 (main)
Quatre arbres `sfia-v3-{framing,design,modeled,delivery}/**` — README + décision packs + docs structurants (04,05,07,11,12,14,15,19–29, modeled 01–10, design packs, delivery I1/C1–C4).

### Studio / UX
- `projects/sfia-studio/README.md` (main)
- `87`/`88`/`89` (branche UX `7dc6f9f…`) — CC-D01/03/05/06/12/13 validées
- handoff `100bdc7…` (vérifié = UX validation flow)

### v2.6 (main)
Template · routing · OM · KL · PGE · guardrails · cycles method candidate

### CKC (main)
README · carte 02 · matrice 04 · 4 pilotes · post-merge #258

---

## A. Inventaire complet — statistiques

| Couche | Fichiers | `.md` | Autres | Dernier commit dédié |
|--------|----------|-------|--------|----------------------|
| framing | **30** | 30 | — | `88fa465` (#254) |
| design | **70** | 56 | 14 `.mmd` | `88fa465` |
| modeled | **41** | 11 | schemas + examples JSON | `88fa465` |
| delivery | **55** | 55 | — | `88fa465` |
| **Total** | **196** | **152** | **44** | mono-commit d'intro |

### Framing (30)
`01`…`29` + `README.md` — cadrage plat.

### Design (3 packs)
- `d1-project-framing/` — archi composants / API
- `d1-ux-ui/` — contrat UX D1
- `d1-ai-guided-intake-routing/` — intake conversationnel
- **Pas de README racine design**

### Modeled
`01`–`10` + `schemas/**` + `examples/**`

### Delivery (5 packs)
- `d1-i1-project-foundation/`
- `d1-c1-intake-shell-conversation-entry/`
- `d1-c2-intent-understanding-structured-proposal/`
- `d1-c3-existing-context-matching/`
- `d1-c4-human-confirmation-bounded-project-mutation/`
- **Pas de README racine delivery**

Liens internes relatifs v3 : **0 cassés** (scan).

---

## B. Carte doctrinale actuelle

```
SFIA v2.6 (baseline opérationnelle)
        |
        | coexistence (framing 12/20) — v3 à côté, pas dans method/
        v
+-----------------------------------------------------------+
| SFIA Studio v3 — sandbox documentaire                     |
| Statut: V3-DOCUMENTED / MODELED CANDIDATE                 |
| Adoption: NON · Option D validée · D1–D8 validées         |
+-------------+--------------+-------------+----------------+
| FRAMING     | DESIGN       | MODELED     | DELIVERY       |
| 30 docs     | 3 packs D1   | schemas D1  | I1+C1–C4       |
| doctrine    | contrats     | JSON/SQL    | preuves impl.   |
+-------------+--------------+-------------+----------------+
        |
        x CKC / Living Project State / CC-D* non intégrés
        x root/manifest/version resolver Studio-only manquant
        x HumanDecision/Enforcement absents en delivery
```

**Consommateurs déclarés :** Studio · Morris · Cursor · Runtime D1.
**Non-consommateur :** workflows v2.6 `method/` sans GO ADOPTION.

---

## C. Matrice de cohérence verticale

| Concept | Framing | Design | Modeled | Delivery | Cohérence |
|---------|---------|--------|---------|----------|-----------|
| Project | Fort | Fort | Fort | Fort (I1/C4) | Conforme |
| Cycle / CycleInstance | Fort | Fort | Fort | Partiel | Partielle |
| GuidedSession | Fort | Fort | Fort | Dette I2/C5 | Partielle |
| HumanDecision | Fort | Présent | Schemas | **0 hit** | **Incohérente** |
| GateInstance | Fort | Faible | Schemas | Quasi absent | Partielle |
| ReviewBundle | Fort | Présent | Fort | Quasi absent | Partielle |
| Enforcement E0–E4 | Fort | Présent | Catalogue | **0 hit** | **Incohérente** |
| ExecutionContract | Fort | Faible | Faible | Absent | Partielle |
| Observation / Hypothesis | Faible | Quasi absent | Absent | Absent | Trou |
| Living Project State | Absent | Absent | Absent | Absent | **Absent** |
| CKC Resolution | Absent | Absent | Absent | Absent | **Absent** |
| Conversation dominante (CC-D01) | Contredit (cockpit-first §11) | Intake AI-first | — | C1 conversationnel | **Contradiction** |

Hits fichiers (rg -l) : HumanDecision Del=0 · Enforcement Del=0 · CKC=0 partout · Living=0 · CycleInstance Del=0 · Hypothesis F=1 D=0 M=0.

---

## D. Matrice d'héritage v2.6

| Élément v2.6 | Source | Utilité Studio | Traitement candidat | Justification |
|--------------|--------|----------------|---------------------|---------------|
| Git source de vérité | OM / principles | Critique | **inherited** | Inchangé D3 |
| Morris décide | OM | Critique | **inherited** | Inchangé |
| Rôles ChatGPT / Cursor | OM | Critique | **adapted** | Studio-native loop |
| Cycles / profils / blocs | routing + template | Critique | **adapted** | UI + defs JSON |
| Gates / stop | template | Critique | **adapted** | Gates UI ≠ chat |
| L0–L5 automation | automation docs | Haute | **adapted** | Couplage E0–E4 |
| Review pack / handoff | publisher | Haute | **inherited** (+ D2 hybride) | Preuve revue |
| Knowledge Layer / routing | KL + guide | Haute | **adapted** | Studio allowlist |
| PGE / ExecutionContract | PGE | Haute | **replaced** (pivot) | Template MD fallback |
| Protected paths | guardrails | Haute | **inherited** | Enforcement |
| PR readiness / post-merge | method | Moyenne | **inherited** | Hors Studio runtime |
| Capitalisation / CKC | CKC #258 | Haute | **unresolved** dans v3 | Absent v3 — à adapter |
| Doctrine MD `method/` | method/ | Baseline | **not-applicable** comme SoT Studio | Sandbox v3 à côté |
| UX conversation Option A | docs UX 87–89 | Critique | **unresolved** vs framing 11 | Arbitrage Morris |

Aligné framing 12 (C/A/R/D/N) + 20 coexistence.

---

## E. Matrice CKC × couches v3

| Couche | Existant | Écart | Enrichissement nécessaire | Gate | Dette |
|--------|----------|-------|---------------------------|------|-------|
| Framing | Aucune mention | Pas de place CKC | Résolution interne, anti-autorité, fallback silencieux | Enrichissement CKC | Double narration |
| Design | Aucune | Intake/UX sans resolver opaque | Questions contextualisées ; panneau sans dimensions brutes | Consolidation UX+CKC | Divergence 87–89 |
| Modeled | Aucune | Pas de schema CkcResolution | Schema + events `ckc_resolved` / `ckc_fallback` | Enrichissement CKC | Mapping 4+11 |
| Delivery | Aucune | Runtime D1 sans CKC | Après modèle | Delivery ultérieur | Implémentation précoce |

Pilotes 1/2/6/9 et fallback 11 : **absents** de v3. Autorité d'exécution : correctement absente — à préserver explicitement.

---

## F. Matrice UX Studio (CC-D* vs v3)

| Décision | Couverture v3 | Évaluation |
|----------|---------------|------------|
| **CC-D01** Option A | Framing 11 cockpit-first ; intake AI-first ; C1 conversationnel | **Contradictoire** |
| **CC-D03** panneau vivant | « État visible » ; ContextualRail ; pas de largeurs 360–400/320/sheet | **Partiel** |
| **CC-D05** épistémologie + gates | Décision explicite cadrée ; Observation/Hypothesis faibles | **Partiel** |
| **CC-D06** confirmations N1–N3 | C4 + NO_MUTATION ; pas de taxonomie 3 niveaux | **Partiel** |
| **CC-D12** fallback CKC silencieux | CKC absent v3 | **Absent** |
| **CC-D13** Project ≠ Cycle | Fort framing 04 ; C4 NO_MUTATION | **Couvert** (doctrine) |

Docs 87–89 **non sur main** — dette d'intégration.

---

## G. Gap analysis

### Bloquant
1. Pas de DoctrinePackageManifest / root / version resolver Studio-only.
2. Contradiction entrée UX : cockpit-first vs CC-D01 Option A.
3. HumanDecision → Gate → Enforcement non portés en delivery.
4. CKC totalement absent alors que routage candidat est sur `main` (#258).

### Structurant
5. Living Project State non nommé / non modelé.
6. GuidedSession / Cycle runtime incomplets (I2/C5).
7. ReviewBundle modelé quasi absent runtime.
8. Vocabulaire maturité ambigu (IMPLEMENTED CANDIDATE vs MODELED CANDIDATE).
9. README framing HEAD/branche stale (`32e5271`).

### Important
10. Observation/Hypothesis quasi absents modeled.
11. Pas de README racine design/delivery.
12. Slices Option D D2/D3 non modelées.
13. UX 87–89 hors main.

### Amélioration / dette acceptable
14. Doublons narration D1–D8 en fin de docs framing.
15. Diagrammes `.mmd` non exécutés dans cet audit.
16. HF Figma / a11y mobile (réserves design).

---

## H. Doublons et contradictions

| Type | Description |
|------|-------------|
| Contradiction | Framing 11 cockpit-first vs CC-D01 / intake / C1 |
| Contradiction | Framing anti-implémentation vs delivery IMPLEMENTED CANDIDATE |
| Ambiguïté | V3-MODELED CANDIDATE global + IMPLEMENTED CANDIDATE local |
| Doublon | D1–D8 collés en clôture de nombreux docs framing |
| Doublon | ReviewBundle / Enforcement / SQL redécrits framing→modeled→design |
| Concurrent | Registres Figma design vs UX 88 (`8xR5…`) hors main |
| Obsolète metadata | Framing README branche/HEAD |
| Non référencé | CKC `method/.../cycle-knowledge-contracts/` depuis v3 |

---

## I. Doctrine cible candidate (sans modifier fichiers)

### Conserver
Framing 01–29 · Modeled schemas D1 · Design packs · Delivery I1/C1–C4 (preuves)

### Enrichir
Framing : CKC opaque · Living State · resync anti-claims · alignement UX Option A
Modeled : CkcResolution · epistemic tags · LivingProjectState · DoctrinePackageManifest
Design : aligner d1-ux-ui + intake sur CC-D*
Index README racine design/delivery

### Créer (candidats)
- DoctrinePackageManifest + règle résolution version
- Doc Studio v3 × CKC routing contract
- Doc Reconciliation Conversational Flow ↔ framing 11
- Pack modeled epistemic + living state

### Remplacer / archiver (candidats)
- Formulation « cockpit avant chat » **si** Morris confirme CC-D01
- Métadonnées HEAD stale
- Ne pas archiver delivery

### Ordre
1. Arbitrage Morris UX + CKC
2. Enrichissement framing
3. Modeled (manifest + CKC + living state)
4. Design reconciliation
5. Puis conception fonctionnelle / Delivery bornés

---

## J. Trajectoire de consolidation

| # | Objectif | Profil | Docs | Décisions Morris | Résultat | Gate candidat |
|---|----------|--------|------|------------------|----------|---------------|
| 1 | Arbitrer entrée UX + place CKC + vocabulaire maturité | Critical | framing 11/12/22 + 87–89 + CKC | Option A vs cockpit ; CKC in/out | Décisions tracées | `GO MORRIS ARBITRATION — SFIA STUDIO V3 DOCTRINE` |
| 2 | Enrichir framing | Standard | framing select | Validation textes | Framing cohérent | `GO CONSOLIDATION CIBLÉE` |
| 3 | Modeled manifest + CkcResolution + epistemic | Standard | modeled | Validation schemas | MODELED enrichi | `GO ENRICHISSEMENT CKC` |
| 4 | Design reconciliation CC-D* | Critical | design + 87–89 | Validation design | Design aligné | Consolidation UX |
| 5 | Intégrer 87–89 vers main (doc) | Léger | 87–89 README | GO merge docs UX | UX sur main | PR docs séparée |

### Challenge
- Utile maintenant ? **Oui** cycles 1–2.
- Avant conception fonctionnelle ? **Oui**.
- Dette créée ? Faible si borné ; forte si contradiction UX ignorée.
- Plus simple ? Arbitrage Morris d'abord — pas de big-bang.
- Réutilise actifs ? Oui (D1–D8, modeled, 87–89, CKC #258).
- Duplique v2.6 ? Non si sandbox + allowlist.
- Studio-native ? Oui.
- Gate Morris ? **Oui** cycle 1.
- Différé ? D2/D3 Option D différés.

---

## Décisions Morris requises

1. Confirmer **CC-D01 Option A** comme doctrine Studio **ou** maintenir cockpit-first.
2. Autoriser **intégration doctrinale CKC** (opaque) sans adoption baseline.
3. Clarifier vocabulaire IMPLEMENTED CANDIDATE vs maturité plateforme.
4. Autoriser **DoctrinePackageManifest** + root resolver.
5. Intégrer docs **87–89** vers `main`.
6. Priorité D2/D3 Option D vs consolidation D1 doctrinale.

---

## Réserves / dette audit

- LPV doc 86 absent
- UX 87–89 hors main
- Runtime ≠ Option A
- Delivery sans Enforcement/HumanDecision
- Framing metadata stale
- Pas de preuve runtime (hors périmètre)

---

## Validations

| Contrôle | Résultat |
|----------|----------|
| Inventaire 4 répertoires | PASS 196 fichiers |
| Liens internes | PASS 0 cassés |
| D1–D8 recensées | PASS |
| CKC évalués | PASS (absent v3) |
| UX CC-D* évaluées | PASS |
| Fichiers projet modifiés | **aucun** |
| HEAD projet inchangé | `2014e941…` |

---

## Actions non exécutées

- Aucune écriture v3 / v2.6 / CKC / UX
- Aucun commit projet / push projet / PR / merge
- Aucune promotion maturité / adoption
- Aucun Figma / code / Delivery

---

## État Git final (projet)

```
branche: main
HEAD: 2014e941f548c519d152ebc70d0d4ddad29a6397
modifs projet: aucune
untracked: .tmp-sfia-review/ seulement
```

---

## Handoff (post-publish)

| Champ | Valeur |
|-------|--------|
| Message | docs(review-handoff): publish SFIA Studio v3 doctrine audit |
| Commit / blob | *(après publish)* |

---

## Verdict exact

**SFIA STUDIO V3 DOCTRINE AUDITED — CONSOLIDATION DECISIONS REQUIRED**

---

## Annexe — Inventaire fichiers


## Inventaire fichiers
### sfia-v3-framing
projects/sfia-studio/sfia-v3-framing/01-sfia-v3-product-vision-and-positioning.md
projects/sfia-studio/sfia-v3-framing/02-sfia-v3-principles-and-human-governance.md
projects/sfia-studio/sfia-v3-framing/03-sfia-v3-roles-and-responsibilities.md
projects/sfia-studio/sfia-v3-framing/04-sfia-v3-project-and-cycle-domain-model.md
projects/sfia-studio/sfia-v3-framing/05-sfia-v3-guided-reasoning-and-conversation-model.md
projects/sfia-studio/sfia-v3-framing/06-sfia-v3-cycle-routing-and-transition-model.md
projects/sfia-studio/sfia-v3-framing/07-sfia-v3-automation-and-human-decision-model.md
projects/sfia-studio/sfia-v3-framing/08-sfia-v3-executable-doctrine-and-contract-model.md
projects/sfia-studio/sfia-v3-framing/09-sfia-v3-functional-architecture.md
projects/sfia-studio/sfia-v3-framing/10-sfia-v3-technical-architecture-candidate.md
projects/sfia-studio/sfia-v3-framing/11-sfia-v3-ux-information-architecture.md
projects/sfia-studio/sfia-v3-framing/12-sfia-v2.6-to-v3-gap-analysis.md
projects/sfia-studio/sfia-v3-framing/13-sfia-v3-target-vertical-slice.md
projects/sfia-studio/sfia-v3-framing/14-sfia-v3-roadmap-and-decision-pack.md
projects/sfia-studio/sfia-v3-framing/15-sfia-v3-studio-native-applicability-model.md
projects/sfia-studio/sfia-v3-framing/16-sfia-v3-user-journey-and-doctrine-enforcement.md
projects/sfia-studio/sfia-v3-framing/17-sfia-v3-information-and-artifact-architecture.md
projects/sfia-studio/sfia-v3-framing/18-sfia-v3-doctrine-to-runtime-projection-matrix.md
projects/sfia-studio/sfia-v3-framing/19-sfia-v3-canonical-data-and-contract-strategy.md
projects/sfia-studio/sfia-v3-framing/20-sfia-v2.6-v3-coexistence-and-migration-model.md
projects/sfia-studio/sfia-v3-framing/21-sfia-v3-adoption-eligibility-and-gates.md
projects/sfia-studio/sfia-v3-framing/22-sfia-v3-consolidated-challenge-and-decision-pack.md
projects/sfia-studio/sfia-v3-framing/23-sfia-v3-reviewbundle-and-review-lifecycle.md
projects/sfia-studio/sfia-v3-framing/24-sfia-v3-doctrine-source-and-projection-model.md
projects/sfia-studio/sfia-v3-framing/25-sfia-v3-doctrine-enforcement-levels.md
projects/sfia-studio/sfia-v3-framing/26-sfia-v3-transactional-state-and-audit-model.md
projects/sfia-studio/sfia-v3-framing/27-sfia-v3-maturity-and-project-eligibility-model.md
projects/sfia-studio/sfia-v3-framing/28-sfia-v3-historical-project-policy.md
projects/sfia-studio/sfia-v3-framing/29-sfia-v3-option-d-bounded-codesign-trajectory.md
projects/sfia-studio/sfia-v3-framing/README.md

### sfia-v3-design
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/01-product-problem-and-rework-rationale.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/02-target-value-proposition.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/03-user-intents-and-routing-scenarios.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/04-ai-guided-intake-journey.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/05-routing-decision-model.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/06-request-routing-proposal-candidate.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/07-gpt-role-and-guardrails.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/08-project-cycle-resume-action-routing.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/09-method-mode-target-strategy.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/10-user-vs-technical-audit-contract.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/11-conversational-interaction-contract.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/12-information-architecture-update.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/13-ux-screen-contracts.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/14-visual-direction-and-design-principles.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/15-figma-frame-register.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/16-figma-runtime-gap-analysis.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/17-accessibility-and-responsive-contract.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/18-implementation-impact-map.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/19-corrective-backlog-and-slicing.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/20-validation-decision-pack.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/README.md
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/diagrams/d1-conversation-state-flow.mmd
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/diagrams/d1-intake-routing-flow.mmd
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/diagrams/d1-project-cycle-resume-model.mmd
projects/sfia-studio/sfia-v3-design/d1-ai-guided-intake-routing/diagrams/d1-routing-decision-tree.mmd
projects/sfia-studio/sfia-v3-design/d1-project-framing/01-design-scope-and-decisions.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/02-target-component-architecture.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/03-application-services-and-responsibilities.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/04-api-and-command-contracts.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/05-persistence-and-transaction-design.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/06-gpt-guided-session-design.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/07-policy-and-gate-orchestration-design.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/08-user-journey-and-screen-contracts.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/09-reviewbundle-and-audit-design.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/10-security-rgpd-and-permission-model.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/11-observability-run-and-resilience.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/12-test-strategy-and-acceptance-criteria.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/13-delivery-slicing-and-backlog.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/14-dependency-and-technology-decision-record.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/15-d1-implementation-readiness-decision-pack.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/README.md
projects/sfia-studio/sfia-v3-design/d1-project-framing/diagrams/d1-component-diagram.mmd
projects/sfia-studio/sfia-v3-design/d1-project-framing/diagrams/d1-container-diagram.mmd
projects/sfia-studio/sfia-v3-design/d1-project-framing/diagrams/d1-data-lifecycle.mmd
projects/sfia-studio/sfia-v3-design/d1-project-framing/diagrams/d1-sequence-decision-transition.mmd
projects/sfia-studio/sfia-v3-design/d1-project-framing/diagrams/d1-sequence-guided-session.mmd
projects/sfia-studio/sfia-v3-design/d1-project-framing/diagrams/d1-sequence-project-creation.mmd
projects/sfia-studio/sfia-v3-design/d1-ux-ui/01-current-state-ux-audit.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/02-doctrine-to-information-architecture.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/03-d1-navigation-and-route-model.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/04-studio-shell-layout-contract.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/05-d1-screen-inventory-and-priorities.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/06-workspace-home-contract.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/07-new-project-contract.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/08-project-cockpit-contract.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/09-project-framing-and-guided-session-contract.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/10-context-reserves-decisions-and-gates-contract.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/11-transition-reviewbundle-and-audit-contract.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/12-responsive-and-breakpoint-contract.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/13-accessibility-and-interaction-contract.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/14-design-tokens-and-component-contract.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/15-figma-frame-register.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/16-figma-runtime-comparison-plan.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/17-d1-ux-acceptance-and-test-matrix.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/18-d1-ux-decision-pack.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/README.md
projects/sfia-studio/sfia-v3-design/d1-ux-ui/diagrams/d1-decision-and-gate-flow.mmd
projects/sfia-studio/sfia-v3-design/d1-ux-ui/diagrams/d1-information-architecture.mmd
projects/sfia-studio/sfia-v3-design/d1-ux-ui/diagrams/d1-navigation-flow.mmd
projects/sfia-studio/sfia-v3-design/d1-ux-ui/diagrams/d1-responsive-layout.mmd

### sfia-v3-modeled
projects/sfia-studio/sfia-v3-modeled/01-modeling-scope-and-conventions.md
projects/sfia-studio/sfia-v3-modeled/02-slice-d1-functional-model.md
projects/sfia-studio/sfia-v3-modeled/03-slice-d1-state-and-transition-model.md
projects/sfia-studio/sfia-v3-modeled/04-slice-d1-logical-data-model.md
projects/sfia-studio/sfia-v3-modeled/05-slice-d1-enforcement-policy-catalog.md
projects/sfia-studio/sfia-v3-modeled/06-slice-d1-event-and-audit-catalog.md
projects/sfia-studio/sfia-v3-modeled/07-slice-d1-reviewbundle-model.md
projects/sfia-studio/sfia-v3-modeled/08-doctrine-to-model-traceability.md
projects/sfia-studio/sfia-v3-modeled/09-validation-and-conformance-plan.md
projects/sfia-studio/sfia-v3-modeled/10-v3-modeled-foundation-decision-pack.md
projects/sfia-studio/sfia-v3-modeled/README.md
projects/sfia-studio/sfia-v3-modeled/examples/audit-events.example.json
projects/sfia-studio/sfia-v3-modeled/examples/context-snapshot.example.json
projects/sfia-studio/sfia-v3-modeled/examples/cycle-instance.example.json
projects/sfia-studio/sfia-v3-modeled/examples/cycle-review-bundle.example.json
projects/sfia-studio/sfia-v3-modeled/examples/decision-request.example.json
projects/sfia-studio/sfia-v3-modeled/examples/enforcement-rules.example.json
projects/sfia-studio/sfia-v3-modeled/examples/gate-instance.example.json
projects/sfia-studio/sfia-v3-modeled/examples/guided-session.example.json
projects/sfia-studio/sfia-v3-modeled/examples/human-decision.example.json
projects/sfia-studio/sfia-v3-modeled/examples/project.example.json
projects/sfia-studio/sfia-v3-modeled/examples/transition-proposal.example.json
projects/sfia-studio/sfia-v3-modeled/schemas/audit/audit-event.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/common/actor-reference.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/common/doctrine-reference.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/common/git-reference.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/common/identifier.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/common/timestamp.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/cycle/context-snapshot.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/cycle/cycle-instance.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/cycle/guided-session.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/cycle/transition-proposal.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/decision/decision-request.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/decision/gate-instance.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/decision/human-decision.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/policy/enforcement-rule.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/project/project-trajectory.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/project/project.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/project/workspace-reference.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/review/cycle-review-bundle.schema.json
projects/sfia-studio/sfia-v3-modeled/schemas/review/review-manifest.schema.json

### sfia-v3-delivery
projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/01-implemented-scope.md
projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/02-route-and-legacy-transition.md
projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/03-intake-ux-implementation.md
projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/04-manual-creation-strategy.md
projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/05-runtime-figma-validation.md
projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/06-test-results.md
projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/07-reserves-and-debt.md
projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/08-d1-c1-validation-decision-pack.md
projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/09-ia-cleanup.md
projects/sfia-studio/sfia-v3-delivery/d1-c1-intake-shell-conversation-entry/README.md
projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/01-implemented-scope.md
projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/02-intent-understanding-contract.md
projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/03-request-routing-proposal-candidate.md
projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/04-gpt-provider-and-prompt-contract.md
projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/05-clarification-state-machine.md
projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/06-security-rgpd-observability.md
projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/07-runtime-figma-validation.md
projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/08-test-results.md
projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/09-reserves-and-debt.md
projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/10-d1-c2-validation-decision-pack.md
projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/README.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/01-implemented-scope.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/02-context-sources-and-availability.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/03-existing-context-snapshot-contract.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/04-deterministic-matching-engine.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/05-scoring-thresholds-and-explainability.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/06-context-match-result-contract.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/07-c2-hardening.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/08-security-rgpd-performance.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/09-runtime-figma-validation.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/10-test-results.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/11-reserves-and-debt.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/12-d1-c3-validation-decision-pack.md
projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/README.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/01-implemented-scope.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/02-confirmation-contract.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/03-bounded-mutation-contract.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/04-project-creation-flow.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/05-existing-project-confirmation.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/06-idempotence-and-conflicts.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/07-audit-and-observability.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/08-security-rgpd-accessibility.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/09-runtime-validation.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/10-test-results.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/11-reserves-and-debt.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/12-d1-c4-validation-decision-pack.md
projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/README.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/01-implemented-scope.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/02-technical-implementation.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/03-data-and-audit-implementation.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/04-ux-runtime-validation.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/05-test-results.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/06-known-reserves-and-debt.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/07-d1-i1-validation-decision-pack.md
projects/sfia-studio/sfia-v3-delivery/d1-i1-project-foundation/README.md

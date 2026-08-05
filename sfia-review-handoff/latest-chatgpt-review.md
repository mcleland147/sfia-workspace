# ChatGPT Review Pack — SFIA Studio Native Assistant OpenAI First Product Increment UX/UI

## 1. Date / heure / fuseau

Local : 2026-08-05 05:13:45 CEST +0200
UTC : 2026-08-05 03:13:45 UTC

## 2. GO consommé

```text
GO UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIRST PRODUCT INCREMENT — APPLY VALIDATED FUNCTIONAL DECISIONS
```

Consommation : 2026-08-04 23:46 CEST (+0200) · Autorité : Morris

## 3. Cycle / profil / typologie

UX/UI · Standard · EVOL / UX / DOC · Documentation + Figma (Figma **non exécutable** ce cycle) · Doctrine conduite SFIA v2.6 · Doctrine produit SFIA Studio v3 exclusive

## 4. Main

`origin/main` = `8dc54db0069eed78a8d8930cc2b035450ab56ad1` — PASS (attendu `8dc54db0069eed78a8d8930cc2b035450ab56ad1`)

## 5. Branche / worktree

Branche : `ux-ui/sfia-studio-assistant-sfia-native-openai-fpi`
HEAD : `8dc54db0069eed78a8d8930cc2b035450ab56ad1`
Worktree : `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1`
Non poussée · pas de PR · docs 90–96 untracked locaux

## 6. Handoff entrant

Commit : `dbc41bfb8cdf66724a38e1bcbf1c101e0b063edc`
Blob : `ea6c2633750e4ef3556889717f2f074ee6ffc8ab`
Parent : `5f1a9f02ca5ebc512f7f7dfe2fa0376511e99feb`
Message : docs(review-handoff): publish Assistant SFIA functional decisions applied
Tip observé pré-publication : `dbc41bfb8cdf66724a38e1bcbf1c101e0b063edc` — PASS

## 7. Template canonique

`prompts/templates/sfia-cycle-execution-template.md` + routing / operating model / rules / validation checklist + méthode UX (`docs/practices/ux-ui/*`, `docs/practices/roles/ux-ui-designer-method.md`)

## 8. CKC

Pilote UX/UI détaillé baseline : **absent**.
Carte synthétique CKC capitalisation présente sous `method/.../cycle-knowledge-contracts/` — **CANDIDATE SOURCE — NOT BASELINE** pour exécution.
Fallback : template + routing + docs 14–16 + 90–93 + doctrine v3 + décisions Morris.

## 9. Sources 14–16

| Doc | SHA-256 (contenu origin/main) | Statut |
|---|---|---|
| 14 | `c2554ed6e664156add468a3f8de298023b3a1d5b948d465d9df0ceda441326e6` | inchangé (non modifié ce cycle) |
| 15 | `cb223cf5a2fd78833ec86175237637516f1251a420cc2b8daf1000a302b65f92` | inchangé |
| 16 | `9bb957391c4edd66a10e02d600386feb8662ff5f9a37adae2e29bc29659a4cbf` | inchangé |

## 10–11. Sources 90–93 / hashes

```
2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2  projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
0517aa6c3091f63f0b5c69d40d123fa715dbfb4429d02681ea0398a9588e83e1  projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
0af5a9063705859abddceea0f1f5184b55c35a04e94b71648b139bb592c841d4  projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
6466f1620d1db65f065fcaf5de25d36cc6af5180f7be786649fbc57521bf4428  projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
```

Lignes 92=473 · 93=309 — PASS · **inchangés**

## 12. Décisions Morris applicables

FPI-04=D · FPI-05=C · FPI-06=D · FPI-11=ACCEPT_CANDIDATE_MATRIX · AF-03=C · AF-04=B — appliquées documentairement dans 94–96. Aucune D-ASST-UX consommée.

## 13. R-DEC-AF-01

Statut cycle : **OPEN**
Définitions documentaires N1→N2 / N2→N3 / surfaces / distinctions / a11y / erreurs : **produites** (94/95).
Preuves Figma : **ABSENTES** → fermeture **non recommandée** ce cycle.
Reco D-ASST-UX-10 candidate : **B — OPEN pending Figma**.

## 14. Découverte documentaire

Numéros 94–96 libres sur main. Créés :
- `94-assistant-sfia-native-openai-ux-ui-contract.md`
- `95-assistant-sfia-native-openai-ux-ui-flows-and-states.md`
- `96-assistant-sfia-native-openai-ux-ui-decision-pack.md`
Aucun écrasement · 14–16 et 90–93 non modifiés.

## 15–20. Découverte Figma / fileKey / baseline / candidate / manifest / screenshots

```markdown
# Figma discovery — 2026-08-05

## Attempted access
- Target fileKey: `lrjA1WEyRpL05vKR8k29LO`
- URL: https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO
- MCP servers available in this workspace: `cursor-app-control`, `cursor-ide-browser`, `user-penpot` (error)
- `plugin-figma-figma`: **NOT FOUND** in this workspace MCP catalog
- `FIGMA_ACCESS_TOKEN`: **absent**
- Live `get_metadata` / `get_design_context` / `use_figma` / `get_screenshot`: **not executable**

## Baseline from Git (docs 14–16) — not live-reconfirmed
| Item | Value | Source |
|---|---|---|
| Page | UX-B — P0 (`0:1`) | 14-ux-ui-contract.md |
| P0-00C | `19:2` 1440×1024 | 14 |
| P0-01C | `22:2` 1440×1024 | 14 |
| P0-02C | `22:133` 1440×1024 | 14 |
| P0-03C | `22:270` 1440×1024 | 14 |

## Candidate page / frames this cycle
- Page `UX-FPI — Assistant SFIA natif OpenAI`: **NOT CREATED**
- Frames FPI-00…FPI-06: **NOT CREATED**
- Screenshots: **ABSENT**
- Manifest live node IDs: **ABSENT**

## Consequence
Stop condition 5 (Figma inaccessible) + 15 (screenshots cannot be produced) → partial cycle verdict.
Baseline Figma not modified (no write path).
```

| Item | Résultat |
|---|---|
| fileKey cible | `lrjA1WEyRpL05vKR8k29LO` |
| MCP Figma | **UNAVAILABLE** |
| Page baseline UX-B — P0 | Non reconfirmée live ; non modifiée |
| Frames baseline | Réf. docs 14 — non modifiées |
| Page candidate | **NOT CREATED** |
| Frames FPI-00…06 | **NOT CREATED** — specs dans 95 |
| Screenshots | **ABSENT** |
| Non-chevauchement live | N/A |

## 21–22. Contrat UX/UI — contenu complet document 94

Path : `projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md` · lines=276 · sha256=`535d283198da3ccde55ebd31bcc7dadd38fd3905022045a9eeaa60dd0b8a37a8`

```markdown
# 94 — Contrat UX/UI candidat — Assistant SFIA natif OpenAI FPI

| Métadonnée | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md` |
| **Statut** | CANDIDATE DOCUMENTARY CONTRACT — FIGMA EVIDENCE MISSING |
| **Cycle** | UX/UI — Assistant SFIA natif OpenAI FPI |
| **Profil** | Standard |
| **Typologie** | EVOL / UX / DOC |
| **GO** | GO UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIRST PRODUCT INCREMENT — APPLY VALIDATED FUNCTIONAL DECISIONS — 2026-08-04 23:46 CEST (+0200) |
| **Autorité** | Morris |
| **Baseline main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Handoff entrant** | `dbc41bfb8cdf66724a38e1bcbf1c101e0b063edc` / blob `ea6c2633750e4ef3556889717f2f074ee6ffc8ab` |
| **Doctrine conduite** | SFIA v2.6 |
| **Doctrine produit** | SFIA Studio v3 exclusive |
| **Figma fileKey** | `lrjA1WEyRpL05vKR8k29LO` (cible) |
| **Figma page candidate** | `UX-FPI — Assistant SFIA natif OpenAI` — **NOT CREATED THIS CYCLE** |
| **R-DEC-AF-01** | **OPEN** — définitions documentaires produites ; preuves Figma absentes |

> Contrat UX/UI **candidat**. Ne remplace pas la baseline 14–16. Aucune décision D-ASST-UX consommée. Aucune Architecture technique.

---

## 1. Statut et anti-claims

**Produit :** contrat documentaire complet + définitions N1–N3 / LPS / expert / hors-sujet / provider.

**Non produit :** page Figma candidate · frames FPI-00…06 · screenshots · node IDs live · comparaison runtime.

**Anti-claims :** UX non validée Morris · pas nouvelle baseline visuelle · R-DEC-AF-01 non closed · runtime non aligné · a11y non entièrement validée · responsive non validé · Tech/OpenAI/code/Backlog/Delivery non autorisés · MVP non livré.

---

## 2. Sources

| Source | Rôle |
|---|---|
| Docs `14`–`16` (main) | Baseline UX Product premium — **inchangée** |
| Docs `90`–`93` | Cadrage / AF / Decision Pack / décisions appliquées — **inchangés** |
| Décisions Morris | FPI-04=D · FPI-05=C · FPI-06=D · FPI-11=ACCEPT · AF-03=C · AF-04=B |
| CKC UX détaillé baseline | **Absent** — fallback template + méthode UX + 14–16 + 90–93 + v3 |
| MCP Figma | **Indisponible** dans ce workspace (`plugin-figma-figma` absent) |

---

## 3. Relation avec baseline 14–16

| Élément baseline | Réutilisation FPI |
|---|---|
| Utility rail · top bar · Product premium · typo · densité · cards · pills · brand accent | **Réutiliser** (tokens exacts = réserve jusqu’à extraction Figma live) |
| Panneau copilote latéral comme chat secondaire | **Adapter** — conversation devient surface principale ; panneau = contexte Project / LPS / expert |
| P0-00C…P0-03C / page UX-B — P0 | **Intactes** — ne pas modifier |
| Gate P0-03C | **Pattern source** pour FPI-04 (N3) — adaptation documentaire |

La baseline historique reste la référence d’implémentation initiale Studio hors Assistant FPI. Ce contrat est un **incrément candidat** conversation-dominant.

---

## 4. Décisions fonctionnelles appliquées (UX)

| ID | Option | Effet UX |
|---|---|---|
| D-ASST-FPI-04 | D | Routage discret ; expert optionnel ; jamais prompt/scores/secrets |
| D-ASST-FPI-05 | C | LPS = résumé + décisions + réserves + preuves clés ; progressive disclosure |
| D-ASST-FPI-06 | D | Digression mineure + orientation espace général ; fallback B |
| D-ASST-FPI-11 | ACCEPT_CANDIDATE_MATRIX | Matrice N1–N3 inchangée ; surfaces définies ici |
| D-ASST-AF-03 | C | Contrats UX-Tech produits ; Tech non lancée |
| D-ASST-AF-04 | B | Handoff mono-commit ; tip/blob externes |

---

## 5. Principes visuels

1. Conversation dominante (≥ ~55 % largeur utile canvas).
2. Un seul assistant conversationnel — pas de second chat latéral.
3. Panneau droit = contexte Project / LPS / décisions / réserves / preuves / expert.
4. Routage invisible par défaut ; badges discrets seulement si utiles.
5. Validé ≠ candidat (badges et zones séparées).
6. Confirmation ≠ décision ≠ GO ≠ autorisation d’exécution.
7. SFIA Studio porte la responsabilité produit face à OpenAI (statut fournisseur, fail-closed).
8. Product premium préservé ; tokens inventés interdits sans extraction Figma.
9. Non-chevauchement des gates / statuts / CTA critiques.
10. Aucune pré-sélection dangereuse.

---

## 6. Architecture d’information

```text
[ Utility rail 64px ]
[ Top bar : Project · DoctrineStatus · Usage discret · Provider ]
[ Main: Conversation (dominante) ] [ Context panel: LPS / Expert tabs ]
[ Composer + N1 inline affordances ]
[ Overlay/drawer N2 | Decision surface N3 ]
```

**Modes panneau :** `Context` (défaut) · `LPS` · `Expert` (optionnel) · `Evidence`.

---

## 7. Shell

Réutilise rail + top bar baseline. Top bar FPI expose : Project identity · DoctrinePackage status (discret / erreur) · cycle courant éventuel · provider pill · usage résumé. CTA globaux non destructifs sans N2/N3.

---

## 8. Conversation (FPI-00)

- Historique messages ; streaming ; composer.
- Labels épistémiques : Observation · Hypothèse · Recommandation · Proposition (sans apply).
- Sources : chip « Sources » → disclosure progressive.
- N1 : inline ; pas de modal ; pas de langage GO.
- Empty conversation : invite Project-aware.
- Interdit : mutation silencieuse ; auto-GO ; dump LPS.

---

## 9. Living Project State (FPI-01) — FPI-05=C

### Toujours visible (résumé)
Identité Project · objectifs résumé · DoctrinePackage status · cycle courant éventuel.

### Progressive disclosure
Décisions · réserves · preuves clés · trajectoire résumé · deltas candidats (zone séparée).

### Preuve clé — définition FPI
Une **preuve clé** est une preuve **directement liée** au claim ou à la décision active, avec : source identifiée · statut lisible · fraîcheur · lien détail · **jamais** liste exhaustive par défaut.

### Séparations
LPS validé ≠ LpsDeltaCandidate · LPS ≠ transcript · LPS ≠ trajectoire · ACL par rôle · aucun dump brut.

---

## 10. Routage expert (FPI-02) — FPI-04=D

Panneau Expert optionnel ; conversation reste visible.

**Visible expert :** intention · mode · cycle candidat · CKC detailed/synthetic/absent · DoctrinePackage · sources requises/consultées · outils · contradictions · allowlist · statut preuve.

**Jamais :** prompt système · raisonnement · scores · CKC brut · secrets · chemins non filtrés.

---

## 11. Confirmations N1 / N2 / N3

### N1
Critères : RO · réversible · pas mutation · pas exec externe · proposition sans apply.
Surface : inline · pas modal · pas langage GO · sources ouvertes · audit discret.

### Escalade N1 → N2 (déterministe)
Escalader si ≥1 : mutation Project bornée · apply delta · export · conservation/suppression conversation · confirmation à effet persistant · soft budget · ambiguïté d’effet persistant.
**Doute → N2.**

### N2 (FPI-03)
Surface : carte/drawer · action · objet · avant/après · portée · réversibilité · source · autorité · preuve · Confirmer / Annuler · **pas de pré-sélection** · **pas de GO** · focus trap · retour conversation.
Cas référence : apply LPS delta **ou** export ExecutionContract candidat.

### Escalade N2 → N3 (déterministe)
Escalader si ≥1 : décision structurante · DoctrinePackage · exec externe · Git/merge futurs · hard budget · risque élevé · faible réversibilité · inter-Project · autorité Morris · contradiction structurante · doute autorité.
**Doute → N3.**

### N3 (FPI-04)
Surface dédiée (pattern P0-03C adapté) : décision · options · reco **séparée** · preuves · réserves · dette · autorité Morris · portée · durée · révocabilité · autorisé/non autorisé · formulation GO explicite · NO-GO / amendement / annulation · confirmation forte · **aucune décision produite par l’Assistant**.

### Distinction
| Concept | Signification UX |
|---|---|
| Confirmation | Accord UI sur effet borné (N2) |
| Décision | Choix d’option structurante (N3) |
| GO | Formulation explicite consommée sous autorité |
| Autorisation d’exécution | Hors FPI pour Cursor/Git/merge — N3 futur |

### Erreur niveau insuffisant
Message clair · action bloquée · niveau requis · CTA « Élever la confirmation » ou STOP · audit · **pas** de contournement.

---

## 12. Hors-sujet (FPI-05) — FPI-06=D

Digression mineure : réponse courte éventuelle · « non intégré au Project » · CTA espace général · sinon fallback B (sobre · rappel Project · pas sources Project · pas LPS/trajectoire/mémoire).
Non digression : structurant · autre Project · secret · contournement · mutation hors gate → N2/N3 ou refus.

---

## 13. Erreurs et provider (FPI-06)

**Non structurant :** erreur claire · retry · mode dégradé sans claim.
**Structurant :** fail-closed · aucune décision consommée · aucune mutation · raison · source manquante · prochaine action sûre.
Doctrine stale · source refusée · output invalide · timeout : messages + actions/interdits documentés dans `95`.

Responsabilité Studio : afficher ProviderStatus · ne pas attribuer une décision OpenAI comme décision Morris.

---

## 14. Accessibilité (WCAG 2.2 AA — cible)

Clavier · tab order · focus visible · focus trap N2/N3 · SR labels badges · statut ≠ couleur seule · erreurs champs · contraste · cibles · streaming sobre · live regions · retour focus après fermeture · pas de pré-sélection dangereuse · `prefers-reduced-motion`.
**Non déclaré entièrement validé** (pas de runtime / pas de frames).

---

## 15. Sécurité / RGPD UX

Redaction · secret détecté · source refusée · ACL · non-envoyable OpenAI · suppression/conservation conversation (N2) · export (N2) · indication partage fournisseur · confidentialité source.
Jamais : secret · token · prompt · raisonnement · fichier confidentiel complet par défaut · chemin non filtré.

---

## 16. FinOps / observabilité UX

Discret en top bar ; détail Expert ; N2/N3 si override budget.
Champs : provider · usage résumé · coût estimé (si fourni) · soft/hard · durée · outils/sources · corrélation.
**Pas de tarif inventé.**

---

## 17. Responsive

| Viewport | Statut |
|---|---|
| 1440 × 1024 | Contrat principal FPI (frames prévues) |
| 1280 × 832 | Candidat stress — **NOT VALIDATED** ; max 1 frame si Figma dispo |
| Mobile / tablette | Hors FPI |

Stratégie 1280 candidate : compresser panneau (tabs) ; conserver conversation dominante ; N2/N3 full-height drawer.

---

## 18. Contrat UX-Tech (informations UI — non schéma exécutable)

| Information | Surface | Min | Interdit | Loading | Empty | Error | Notes tech ouvertes |
|---|---|---|---|---|---|---|---|
| ProjectSummary | shell / LPS | id, name, goals | secrets | skeleton | invite | error banner | storage |
| DoctrineStatus | shell / expert | pin, status | package dump | pulse | n/a | stale banner | resolution |
| ConversationMessage | main | role, text, epistemic | chain-of-thought | stream | empty state | retry | provider |
| StreamingState | main | phase | tokens bruts | indicator | — | timeout | SDK |
| IntentResolutionSummary | expert | intent label | scores | — | absent | contradiction | taxonomy |
| CycleCandidateSummary | expert / shell | id, status | auto-start | — | none | block | qualification |
| CkcResolutionSummary | expert | detailed/synthetic/absent | CKC brut | — | absent | — | CKC store |
| SourceCitation | disclosure | title, status, freshness | full confidential | fetching | none | refused | allowlist |
| ToolInvocationSummary | expert | tool, outcome | secrets/paths | running | none | denied | tools |
| LpsSummary | panel | résumé sections | dump | skeleton | empty LPS | error | LPS model |
| DecisionSummary | LPS | id, status, scope | false validated | — | none | — | decisions |
| ReserveSummary | LPS | id, status | — | — | none | — | reserves |
| KeyEvidenceSummary | LPS | claim-link, source, freshness | exhaustive list | — | none | missing | evidence |
| LpsDeltaCandidateSummary | LPS candidate zone | before/after | auto-apply | — | none | invalid | apply N2 |
| TrajectorySummary | LPS progressive | summary | full dump | — | none | — | traj |
| ConfirmationRequest | N2/N3 | level, action, scope | preselect | — | — | insufficient level | policy |
| ConfirmationLevel | all | N1/N2/N3 | — | — | — | — | matrix |
| ProviderStatus | shell / FPI-06 | up/degraded/down | keys | checking | — | fail-closed | OpenAI |
| UsageSummary | shell / expert | tokens/cost est. | invent tariffs | — | — | soft/hard | FinOps |
| FunctionalError | banners | code, message, next | stack | — | — | — | mapping |
| AccessPolicySummary | LPS / ACL | role, visibility | escalate silent | — | denied | — | authZ |

Fraîcheur / niveau de preuve / a11y : obligatoires sur chaque surface exposant un claim.

---

## 19. Figma manifest (état cycle)

| Item | Valeur |
|---|---|
| fileKey cible | `lrjA1WEyRpL05vKR8k29LO` |
| Page baseline | UX-B — P0 (`0:1`) — **non modifiée** (non reconfirmée live) |
| Frames baseline | `19:2` `22:2` `22:133` `22:270` — **intactes** (réf. docs 14) |
| Page candidate | **NOT CREATED** |
| Frames FPI-00…06 | **NOT CREATED** |
| Screenshots | **ABSENT** → `UX/UI REVIEW INCONCLUSIVE — FIGMA SCREENSHOTS REQUIRED` |
| Cause | MCP Figma absent du workspace ; pas de token API |

---

## 20. Verdict documentaire

Contrat UX/UI documentaire **complet**. Preuve Figma **manquante**. R-DEC-AF-01 **OPEN**.
Maximum autorisé : `FIGMA CONTRACT COMPLETE — RUNTIME COMPARISON PENDING` **non atteint**.
```

## 23–24. Parcours et états — contenu complet document 95

Path : `projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md` · lines=195 · sha256=`d2d9b63f6bb845993fc4e2fedd62af073b0f4cc196d2e1b1d97a403e85ee60ae`

```markdown
# 95 — Parcours, écrans et états — Assistant SFIA natif OpenAI FPI

| Métadonnée | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md` |
| **Statut** | CANDIDATE FLOWS — FIGMA FRAMES NOT MATERIALIZED |
| **Companion** | `94` · `96` |
| **GO** | 2026-08-04 23:46 CEST |
| **Baseline frames Figma** | Non créées ce cycle — mapping fonctionnel ci-dessous |
| **R-DEC-AF-01** | OPEN (preuves Figma absentes) |

---

## 1. Navigation FPI

```text
FPI-00 Conversation N1
  ├─► FPI-01 LPS disclosure
  ├─► FPI-02 Expert routing
  ├─► FPI-03 Confirmation N2
  ├─► FPI-04 Décision / GO N3
  ├─► FPI-05 Hors-sujet
  └─► FPI-06 Provider / fail-closed
```

Shell commun : rail + top bar + conversation dominante + panneau contexte.
Retour conversation après fermeture N2/N3 (focus restore).

---

## 2. Sept frames candidates (spécification)

Dimensions cibles : **1440 × 1024**. Statut : **CANDIDATE — NOT CREATED IN FIGMA**.

### FPI-00 — Conversation Project / N1
**Objectif :** conversation principale ; Project actif ; N1 sans modal.
**Montre :** identité Project · objectifs · Doctrine discret · historique · composer · sources progressives · réponse Assistant · Observation/Hypothèse/Recommandation · LPS résumé panneau · **aucune** confirmation structurante.
**node ID :** TBD — Figma missing.

### FPI-01 — Living Project State / Progressive disclosure
**Objectif :** FPI-05=C.
**Montre :** résumé · décisions · réserves · preuves clés · trajectoire · validé ≠ delta · progressive disclosure · ACL · pas de dump.
**Preuve clé :** liée au claim actif · source · statut · fraîcheur · lien détail · non exhaustive.
**node ID :** TBD.

### FPI-02 — Routage expert / Sources
**Objectif :** FPI-04=D.
**Montre :** conversation visible · expert ouvert · intention · mode · cycle · CKC d/s/a · Doctrine · sources · outils · contradictions · allowlist · preuve.
**Ne montre pas :** prompt · raisonnement · scores · secrets · non-redacted.
**node ID :** TBD.

### FPI-03 — Confirmation N2
**Cas :** apply LPS delta **ou** export EC candidat.
**Montre :** action · objet · avant/après · portée · réversibilité · source · autorité · preuve · Confirmer · Annuler · pas pré-sélection · retour conversation · **≠ GO**.
**node ID :** TBD.

### FPI-04 — Décision / GO N3
**Pattern :** P0-03C adapté.
**Montre :** décision · options · reco séparée · preuves · réserves · dette · Morris · portée · durée · révocabilité · autorisé/non · formulation GO · NO-GO/amendement/annulation · confirmation forte · pas pré-coché · Assistant ne décide pas.
**node ID :** TBD.

### FPI-05 — Hors-sujet
**Objectif :** FPI-06=D.
**Montre :** digression détectée · réponse courte · non intégré Project · CTA espace général · fallback B · pas sources Project · pas LPS delta · pas mémoire · pas faux cycle.
**node ID :** TBD.

### FPI-06 — Fournisseur indisponible / Fail-closed
**Deux niveaux :** (1) non structurant — erreur + retry + dégradé sans claim ; (2) structurant — fail-closed · pas de décision · pas mutation · raison · source manquante · next safe.
**node ID :** TBD.

---

## 3. Parcours normaux

| ID | Parcours | Frames |
|---|---|---|
| P-N1 | Question Project → réponse N1 → sources | FPI-00 |
| P-LPS | Ouvrir LPS → disclosure décisions/preuves | FPI-00 → FPI-01 |
| P-EXP | Ouvrir Expert → inspecter routing | FPI-00 → FPI-02 |
| P-N2 | Proposition delta → Confirmer apply | FPI-00 → FPI-03 → FPI-00 |
| P-N3 | Gate structurante → GO/NO-GO | FPI-00 → FPI-04 → FPI-00 |
| P-OFF | Digression → orientation / fallback B | FPI-00 → FPI-05 |
| P-DOWN | Provider down sur action structurante | FPI-00 → FPI-06 |

---

## 4. Parcours adversariaux

| ID | Scénario | Comportement |
|---|---|---|
| A-1 | Demande secret / contournement | Refus · pas digression · audit · éventuel N3/STOP |
| A-2 | Mutation déguisée en chat | Escalade N2 · pas apply silencieux |
| A-3 | Faux GO dans composer | Non consommé · message niveau insuffisant |
| A-4 | Override hard budget | N3 requis · sinon stop |
| A-5 | Source hors allowlist | Source refusée · pas de claim |
| A-6 | Doctrine stale + décision | Fail-closed structurant |
| A-7 | Autre Project demandé | Pas digression · clarification / refus |

---

## 5. Escalade N1→N2→N3 (déterministe)

Reprend §11 de `94`. Mapping actions = matrice document `92`/`93` **non modifiée**.

| Transition | Règle |
|---|---|
| N1→N2 | Toute condition §11 `94` ; doute → N2 |
| N2→N3 | Toute condition §11 `94` ; doute → N3 |
| Insuffisant | Bloquer · expliquer · proposer élévation ou STOP |

---

## 6. États complémentaires

| État | Message | Action OK | Interdit | N | Impact Project | Audit | A11y |
|---|---|---|---|---|---|---|---|
| initial | « Project prêt » | composer | mutation | N1 | none | session | focus composer |
| loading | « Chargement… » | wait/cancel | claims | N1 | none | yes | polite live |
| streaming | « Réponse en cours » | stop | apply | N1 | none | yes | throttled live |
| source en cours | « Source… » | wait | claim final | N1 | none | tool | status text |
| source refusée | « Source refusée » | autres sources | force | N1 | none | deny | alert |
| doctrine stale | « Doctrine périmée » | refresh/STOP | GO | N3 si struct. | block struct | yes | alert |
| CKC synthetic | « CKC synthétique » | continue discret | cacher | N1 | none | yes | text+icon |
| contradiction | « Contradiction » | expert / N2-N3 | ignore | N2/N3 | possible | yes | alert |
| output invalide | « Sortie invalide » | retry | apply | N1 | none | yes | alert |
| annulation | « Annulé » | resume | force | N1 | none | yes | status |
| timeout | « Délai dépassé » | retry | silent success | N1 | none | yes | alert |
| budget soft | « Plafond souple » | N2 override / stop | ignore | N2 | usage | yes | dialog |
| niveau insuffisant | « Confirmation insuffisante » | elevate / cancel | bypass | — | block | yes | alert |
| absence preuve | « Preuve manquante » | collect / STOP | GO | N3 si struct. | block | yes | alert |
| empty conversation | invite Project | start | dump | N1 | none | — | heading |
| empty LPS | « LPS vide » | bootstrap N2? | fake data | N1 | none | — | status |
| absence espace général | fallback B copy | stay Project | load Project sources | N1 | none | yes | status |

---

## 7. Transitions

Composer → stream → message final (N1).
Proposition persistante → ConfirmationRequest N2 → apply/cancel.
Gate structurante → FPI-04 → consume/NO-GO.
Provider down structurant → FPI-06 fail-closed.
Fermeture overlay → focus restore conversation.

---

## 8. Source de vérité

| Donnée | Source de vérité |
|---|---|
| LPS validé | Project store (conceptuel) |
| Delta candidat | UI candidate jusqu’à N2 |
| Doctrine | DoctrinePackage pin |
| Conversation | transcript ACL |
| Décision | HumanDecision record |
| Git distant | hors FPI UI claim |

---

## 9. Gates

N2 = confirmation UI bornée.
N3 = gate décision Morris / autorité.
Exécution Cursor/Git/merge = hors FPI (N3 futur, non autorisé ici).

---

## 10. Copy fonctionnelle (extraits)

- N1 reco : « Recommandation — non appliquée. »
- N2 : « Confirmer l’application de ce delta au Project ? »
- N3 : « Formuler le GO explicitement pour consommer cette décision. »
- Hors-sujet : « Hors périmètre Project — non mémorisé. »
- Fail-closed : « Fournisseur indisponible — aucune décision consommée. »
- Niveau insuffisant : « Niveau N2 requis — action bloquée. »

---

## 11. Accessibilité parcours

Tab order : rail → top → conversation → panel → composer → overlays.
N2/N3 : focus trap · Escape = annuler · retour focus déclencheur.
Badges : texte + icon · pas couleur seule.

---

## 12. Preuves

| Preuve | Statut |
|---|---|
| Documents 94–96 | Produits |
| Frames Figma + screenshots | **ABSENTS** |
| Runtime | Pending |

Maximum : `FIGMA CONTRACT COMPLETE — RUNTIME COMPARISON PENDING` **non atteint**.
```

## 25–26. Decision Pack — contenu complet document 96

Path : `projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md` · lines=172 · sha256=`9e4fbd2fa8cbf613ee0d3931c3f7ff46a07fc79650f55c1fa3907d76d63930db`

```markdown
# 96 — Decision Pack UX/UI candidat — Assistant SFIA natif OpenAI FPI

| Métadonnée | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md` |
| **Statut** | DRAFT FOR MORRIS ARBITRATION — NO UX DECISION CONSUMED |
| **Cycle** | UX/UI FPI |
| **GO** | 2026-08-04 23:46 CEST |
| **Figma** | Evidence **MISSING** this cycle |
| **R-DEC-AF-01** | **OPEN** — documentary definitions present ; Figma proof absent ; **not** CLOSED |

> Aucune décision D-ASST-UX n’est consommée. Recommandations = candidates uniquement.

---

## 1. Décisions candidates

### D-ASST-UX-01 — Architecture d’information
**Statut :** NOT DECIDED
**Contexte :** Adapter baseline copilote latéral → conversation dominante + panneau contexte.
**Options :** A) conserver chat latéral + canvas non-chat · B) conversation centrale + panneau contexte/LPS/expert · C) dual chat
**Reco candidate :** **B**
**Impacts :** doctrine v3 conversation-first · FPI-04/05
**Dette :** tokens Figma live
**A11y / Sécu :** focus conversation ; ACL panel
**Réversibilité :** haute (doc+Figma candidate)
**Preuve Figma :** **MISSING**
**Morris :** choisir A/B/C

### D-ASST-UX-02 — Périmètre sept frames
**Statut :** NOT DECIDED
**Options :** A) 7 frames FPI-00…06 · B) réduire · C) étendre
**Reco :** **A** (spécifiées dans `95`)
**Preuve Figma :** MISSING — frames non créées
**Morris :** valider périmètre après Figma

### D-ASST-UX-03 — Pattern N2
**Statut :** NOT DECIDED
**Options :** A) modal centré · B) drawer droit · C) inline expand
**Reco :** **B** drawer (garde conversation visible)
**Impacts :** FPI-11 · R-DEC-AF-01
**A11y :** focus trap · SR summary
**Preuve Figma :** MISSING
**Morris :** A/B/C

### D-ASST-UX-04 — Pattern N3
**Statut :** NOT DECIDED
**Options :** A) adapter P0-03C full canvas · B) overlay fort · C) page dédiée hors shell
**Reco :** **A** (continuité baseline)
**Impacts :** distinction GO
**Preuve Figma :** MISSING
**Morris :** A/B/C

### D-ASST-UX-05 — Panneau expert
**Statut :** NOT DECIDED
**Options :** A) onglet Expert dans panneau · B) drawer temporaire · C) mode plein écran
**Reco :** **A** (FPI-04=D)
**Interdits :** prompt/scores/secrets
**Preuve Figma :** MISSING
**Morris :** A/B/C

### D-ASST-UX-06 — Preuves clés
**Statut :** NOT DECIDED
**Options :** A) définition `94` §9 · B) preuves = toutes citations · C) preuves = artefacts Git seulement
**Reco :** **A**
**Impacts :** FPI-05=C
**Preuve Figma :** MISSING
**Morris :** A/B/C

### D-ASST-UX-07 — Hors-sujet
**Statut :** NOT DECIDED
**Options :** A) FPI-06=D + fallback B tel `94` · B) refus total digressions · C) workspace général obligatoire avant FPI
**Reco :** **A**
**Preuve Figma :** MISSING
**Morris :** A/B/C

### D-ASST-UX-08 — Provider unavailable
**Statut :** NOT DECIDED
**Options :** A) bi-niveau non-struct/struct fail-closed · B) toujours bloquer · C) toujours dégrader
**Reco :** **A**
**Preuve Figma :** MISSING
**Morris :** A/B/C

### D-ASST-UX-09 — Responsive 1280
**Statut :** NOT DECIDED
**Options :** A) contrat candidat only · B) 1 stress frame · C) 7 duplicatas 1280
**Reco :** **A** (ou B si Figma dispo et scope maîtrisé)
**Statut 1280 :** CANDIDATE — NOT VALIDATED
**Preuve Figma :** MISSING
**Morris :** A/B/C

### D-ASST-UX-10 — Statut R-DEC-AF-01
**Statut :** NOT DECIDED
**Options :** A) SATISFIED — CLOSURE RECOMMENDED · B) OPEN pending Figma · C) OPEN pending Morris only
**Reco candidate ce cycle :** **B — OPEN pending Figma evidence**
**Justification :** seuils N1→N2 / N2→N3 · surfaces · distinctions confirmation/décision/GO · a11y documentaire · erreurs niveau = **définis dans 94/95** ; **preuves Figma absentes** (critère de fermeture non rempli).
**Ne pas déclarer CLOSED** sans validation ChatGPT + décision Morris.
**Morris :** trancher A/B/C après Figma + review

---

## 2. Synthèse recommandations candidates

| ID | Reco |
|---|---|
| UX-01 | B conversation dominante |
| UX-02 | A sept frames |
| UX-03 | B drawer N2 |
| UX-04 | A P0-03C adapté |
| UX-05 | A onglet Expert |
| UX-06 | A preuve clé liée au claim |
| UX-07 | A digression + fallback B |
| UX-08 | A bi-niveau fail-closed |
| UX-09 | A contrat 1280 only |
| UX-10 | B R-DEC-AF-01 OPEN pending Figma |

---

## 3. Réserves

| ID | Statut | Note |
|---|---|---|
| R-DEC-AF-01 | **OPEN** | Doc OK · Figma missing |
| R-UX-FPI-01 | OPEN | MCP Figma unavailable |
| R-UX-FPI-02 | OPEN | Tokens Product premium non re-extraits live |
| R-UX-FPI-03 | OPEN | A11y runtime pending |
| R-UX-FPI-04 | OPEN | 1280 not validated |
| R-UX-04 (hist.) | OPEN | Tokens delivery — héritée baseline |

---

## 4. Dette

- Créer page Figma candidate + 7 frames + screenshots
- Reconfirmer baseline node IDs live
- Extraire variables/styles
- Stress 1280 optionnel
- Audit a11y runtime ultérieur

---

## 5. Décisions Morris requises

Consommer D-ASST-UX-01…10 via gate dédiée **après** preuves Figma + validation ChatGPT.
Trancher R-DEC-AF-01 (fermeture ou maintien).
Statut page Figma candidate.
Travaux UX complémentaires éventuels.

---

## 6. Prochaine gate candidate

`GO DECISIONS UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — APPLY SELECTED VISUAL CONTRACT`

Statut : **candidate — non consommée** (et **prématurée** tant que Figma evidence manquante pour un READY complet).

N’autorise pas auto : Tech · OpenAI · dev · Backlog · Delivery · modif baseline Figma · publish docs · merge.

Gate intermédiaire recommandée (candidate) :
`GO UX/UI … COMPLETE FIGMA CANDIDATE PAGE AND FRAMES` — non consommée.

---

## 7. Anti-claims

Pas de décision UX validée · pas baseline visuelle nouvelle · R-DEC-AF-01 non closed · pas FIGMA CONTRACT COMPLETE · pas runtime aligné · pas Tech/implémentation.

---

## 8. Verdict pack

Decision Pack UX **préparé**. Aucune décision consommée. Figma evidence missing. R-DEC-AF-01 OPEN.
```

## 27. Diffs complets

### Diff 94

```diff
diff --git a/projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md b/projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md
+# 94 — Contrat UX/UI candidat — Assistant SFIA natif OpenAI FPI
+
+| Métadonnée | Valeur |
+|---|---|
+| **Document** | `projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md` |
+| **Statut** | CANDIDATE DOCUMENTARY CONTRACT — FIGMA EVIDENCE MISSING |
+| **Cycle** | UX/UI — Assistant SFIA natif OpenAI FPI |
+| **Profil** | Standard |
+| **Typologie** | EVOL / UX / DOC |
+| **GO** | GO UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — FIRST PRODUCT INCREMENT — APPLY VALIDATED FUNCTIONAL DECISIONS — 2026-08-04 23:46 CEST (+0200) |
+| **Autorité** | Morris |
+| **Baseline main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
+| **Handoff entrant** | `dbc41bfb8cdf66724a38e1bcbf1c101e0b063edc` / blob `ea6c2633750e4ef3556889717f2f074ee6ffc8ab` |
+| **Doctrine conduite** | SFIA v2.6 |
+| **Doctrine produit** | SFIA Studio v3 exclusive |
+| **Figma fileKey** | `lrjA1WEyRpL05vKR8k29LO` (cible) |
+| **Figma page candidate** | `UX-FPI — Assistant SFIA natif OpenAI` — **NOT CREATED THIS CYCLE** |
+| **R-DEC-AF-01** | **OPEN** — définitions documentaires produites ; preuves Figma absentes |
+
+> Contrat UX/UI **candidat**. Ne remplace pas la baseline 14–16. Aucune décision D-ASST-UX consommée. Aucune Architecture technique.
+
+---
+
+## 1. Statut et anti-claims
+
+**Produit :** contrat documentaire complet + définitions N1–N3 / LPS / expert / hors-sujet / provider.
+
+**Non produit :** page Figma candidate · frames FPI-00…06 · screenshots · node IDs live · comparaison runtime.
+
+**Anti-claims :** UX non validée Morris · pas nouvelle baseline visuelle · R-DEC-AF-01 non closed · runtime non aligné · a11y non entièrement validée · responsive non validé · Tech/OpenAI/code/Backlog/Delivery non autorisés · MVP non livré.
+
+---
+
+## 2. Sources
+
+| Source | Rôle |
+|---|---|
+| Docs `14`–`16` (main) | Baseline UX Product premium — **inchangée** |
+| Docs `90`–`93` | Cadrage / AF / Decision Pack / décisions appliquées — **inchangés** |
+| Décisions Morris | FPI-04=D · FPI-05=C · FPI-06=D · FPI-11=ACCEPT · AF-03=C · AF-04=B |
+| CKC UX détaillé baseline | **Absent** — fallback template + méthode UX + 14–16 + 90–93 + v3 |
+| MCP Figma | **Indisponible** dans ce workspace (`plugin-figma-figma` absent) |
+
+---
+
+## 3. Relation avec baseline 14–16
+
+| Élément baseline | Réutilisation FPI |
+|---|---|
+| Utility rail · top bar · Product premium · typo · densité · cards · pills · brand accent | **Réutiliser** (tokens exacts = réserve jusqu’à extraction Figma live) |
+| Panneau copilote latéral comme chat secondaire | **Adapter** — conversation devient surface principale ; panneau = contexte Project / LPS / expert |
+| P0-00C…P0-03C / page UX-B — P0 | **Intactes** — ne pas modifier |
+| Gate P0-03C | **Pattern source** pour FPI-04 (N3) — adaptation documentaire |
+
+La baseline historique reste la référence d’implémentation initiale Studio hors Assistant FPI. Ce contrat est un **incrément candidat** conversation-dominant.
+
+---
+
+## 4. Décisions fonctionnelles appliquées (UX)
+
+| ID | Option | Effet UX |
+|---|---|---|
+| D-ASST-FPI-04 | D | Routage discret ; expert optionnel ; jamais prompt/scores/secrets |
+| D-ASST-FPI-05 | C | LPS = résumé + décisions + réserves + preuves clés ; progressive disclosure |
+| D-ASST-FPI-06 | D | Digression mineure + orientation espace général ; fallback B |
+| D-ASST-FPI-11 | ACCEPT_CANDIDATE_MATRIX | Matrice N1–N3 inchangée ; surfaces définies ici |
+| D-ASST-AF-03 | C | Contrats UX-Tech produits ; Tech non lancée |
+| D-ASST-AF-04 | B | Handoff mono-commit ; tip/blob externes |
+
+---
+
+## 5. Principes visuels
+
+1. Conversation dominante (≥ ~55 % largeur utile canvas).
+2. Un seul assistant conversationnel — pas de second chat latéral.
+3. Panneau droit = contexte Project / LPS / décisions / réserves / preuves / expert.
+4. Routage invisible par défaut ; badges discrets seulement si utiles.
+5. Validé ≠ candidat (badges et zones séparées).
+6. Confirmation ≠ décision ≠ GO ≠ autorisation d’exécution.
+7. SFIA Studio porte la responsabilité produit face à OpenAI (statut fournisseur, fail-closed).
+8. Product premium préservé ; tokens inventés interdits sans extraction Figma.
+9. Non-chevauchement des gates / statuts / CTA critiques.
+10. Aucune pré-sélection dangereuse.
+
+---
+
+## 6. Architecture d’information
+
+```text
+[ Utility rail 64px ]
+[ Top bar : Project · DoctrineStatus · Usage discret · Provider ]
+[ Main: Conversation (dominante) ] [ Context panel: LPS / Expert tabs ]
+[ Composer + N1 inline affordances ]
+[ Overlay/drawer N2 | Decision surface N3 ]
+```
+
+**Modes panneau :** `Context` (défaut) · `LPS` · `Expert` (optionnel) · `Evidence`.
+
+---
+
+## 7. Shell
+
+Réutilise rail + top bar baseline. Top bar FPI expose : Project identity · DoctrinePackage status (discret / erreur) · cycle courant éventuel · provider pill · usage résumé. CTA globaux non destructifs sans N2/N3.
+
+---
+
+## 8. Conversation (FPI-00)
+
+- Historique messages ; streaming ; composer.
+- Labels épistémiques : Observation · Hypothèse · Recommandation · Proposition (sans apply).
+- Sources : chip « Sources » → disclosure progressive.
+- N1 : inline ; pas de modal ; pas de langage GO.
+- Empty conversation : invite Project-aware.
+- Interdit : mutation silencieuse ; auto-GO ; dump LPS.
+
+---
+
+## 9. Living Project State (FPI-01) — FPI-05=C
+
+### Toujours visible (résumé)
+Identité Project · objectifs résumé · DoctrinePackage status · cycle courant éventuel.
+
+### Progressive disclosure
+Décisions · réserves · preuves clés · trajectoire résumé · deltas candidats (zone séparée).
+
+### Preuve clé — définition FPI
+Une **preuve clé** est une preuve **directement liée** au claim ou à la décision active, avec : source identifiée · statut lisible · fraîcheur · lien détail · **jamais** liste exhaustive par défaut.
+
+### Séparations
+LPS validé ≠ LpsDeltaCandidate · LPS ≠ transcript · LPS ≠ trajectoire · ACL par rôle · aucun dump brut.
+
+---
+
+## 10. Routage expert (FPI-02) — FPI-04=D
+
+Panneau Expert optionnel ; conversation reste visible.
+
+**Visible expert :** intention · mode · cycle candidat · CKC detailed/synthetic/absent · DoctrinePackage · sources requises/consultées · outils · contradictions · allowlist · statut preuve.
+
+**Jamais :** prompt système · raisonnement · scores · CKC brut · secrets · chemins non filtrés.
+
+---
+
+## 11. Confirmations N1 / N2 / N3
+
+### N1
+Critères : RO · réversible · pas mutation · pas exec externe · proposition sans apply.
+Surface : inline · pas modal · pas langage GO · sources ouvertes · audit discret.
+
+### Escalade N1 → N2 (déterministe)
+Escalader si ≥1 : mutation Project bornée · apply delta · export · conservation/suppression conversation · confirmation à effet persistant · soft budget · ambiguïté d’effet persistant.
+**Doute → N2.**
+
+### N2 (FPI-03)
+Surface : carte/drawer · action · objet · avant/après · portée · réversibilité · source · autorité · preuve · Confirmer / Annuler · **pas de pré-sélection** · **pas de GO** · focus trap · retour conversation.
+Cas référence : apply LPS delta **ou** export ExecutionContract candidat.
+
+### Escalade N2 → N3 (déterministe)
+Escalader si ≥1 : décision structurante · DoctrinePackage · exec externe · Git/merge futurs · hard budget · risque élevé · faible réversibilité · inter-Project · autorité Morris · contradiction structurante · doute autorité.
+**Doute → N3.**
+
+### N3 (FPI-04)
+Surface dédiée (pattern P0-03C adapté) : décision · options · reco **séparée** · preuves · réserves · dette · autorité Morris · portée · durée · révocabilité · autorisé/non autorisé · formulation GO explicite · NO-GO / amendement / annulation · confirmation forte · **aucune décision produite par l’Assistant**.
+
+### Distinction
+| Concept | Signification UX |
+|---|---|
+| Confirmation | Accord UI sur effet borné (N2) |
+| Décision | Choix d’option structurante (N3) |
+| GO | Formulation explicite consommée sous autorité |
+| Autorisation d’exécution | Hors FPI pour Cursor/Git/merge — N3 futur |
+
+### Erreur niveau insuffisant
+Message clair · action bloquée · niveau requis · CTA « Élever la confirmation » ou STOP · audit · **pas** de contournement.
+
+---
+
+## 12. Hors-sujet (FPI-05) — FPI-06=D
+
+Digression mineure : réponse courte éventuelle · « non intégré au Project » · CTA espace général · sinon fallback B (sobre · rappel Project · pas sources Project · pas LPS/trajectoire/mémoire).
+Non digression : structurant · autre Project · secret · contournement · mutation hors gate → N2/N3 ou refus.
+
+---
+
+## 13. Erreurs et provider (FPI-06)
+
+**Non structurant :** erreur claire · retry · mode dégradé sans claim.
+**Structurant :** fail-closed · aucune décision consommée · aucune mutation · raison · source manquante · prochaine action sûre.
+Doctrine stale · source refusée · output invalide · timeout : messages + actions/interdits documentés dans `95`.
+
+Responsabilité Studio : afficher ProviderStatus · ne pas attribuer une décision OpenAI comme décision Morris.
+
+---
+
+## 14. Accessibilité (WCAG 2.2 AA — cible)
+
+Clavier · tab order · focus visible · focus trap N2/N3 · SR labels badges · statut ≠ couleur seule · erreurs champs · contraste · cibles · streaming sobre · live regions · retour focus après fermeture · pas de pré-sélection dangereuse · `prefers-reduced-motion`.
+**Non déclaré entièrement validé** (pas de runtime / pas de frames).
+
+---
+
+## 15. Sécurité / RGPD UX
+
+Redaction · secret détecté · source refusée · ACL · non-envoyable OpenAI · suppression/conservation conversation (N2) · export (N2) · indication partage fournisseur · confidentialité source.
+Jamais : secret · token · prompt · raisonnement · fichier confidentiel complet par défaut · chemin non filtré.
+
+---
+
+## 16. FinOps / observabilité UX
+
+Discret en top bar ; détail Expert ; N2/N3 si override budget.
+Champs : provider · usage résumé · coût estimé (si fourni) · soft/hard · durée · outils/sources · corrélation.
+**Pas de tarif inventé.**
+
+---
+
+## 17. Responsive
+
+| Viewport | Statut |
+|---|---|
+| 1440 × 1024 | Contrat principal FPI (frames prévues) |
+| 1280 × 832 | Candidat stress — **NOT VALIDATED** ; max 1 frame si Figma dispo |
+| Mobile / tablette | Hors FPI |
+
+Stratégie 1280 candidate : compresser panneau (tabs) ; conserver conversation dominante ; N2/N3 full-height drawer.
+
+---
+
+## 18. Contrat UX-Tech (informations UI — non schéma exécutable)
+
+| Information | Surface | Min | Interdit | Loading | Empty | Error | Notes tech ouvertes |
+|---|---|---|---|---|---|---|---|
+| ProjectSummary | shell / LPS | id, name, goals | secrets | skeleton | invite | error banner | storage |
+| DoctrineStatus | shell / expert | pin, status | package dump | pulse | n/a | stale banner | resolution |
+| ConversationMessage | main | role, text, epistemic | chain-of-thought | stream | empty state | retry | provider |
+| StreamingState | main | phase | tokens bruts | indicator | — | timeout | SDK |
+| IntentResolutionSummary | expert | intent label | scores | — | absent | contradiction | taxonomy |
+| CycleCandidateSummary | expert / shell | id, status | auto-start | — | none | block | qualification |
+| CkcResolutionSummary | expert | detailed/synthetic/absent | CKC brut | — | absent | — | CKC store |
+| SourceCitation | disclosure | title, status, freshness | full confidential | fetching | none | refused | allowlist |
+| ToolInvocationSummary | expert | tool, outcome | secrets/paths | running | none | denied | tools |
+| LpsSummary | panel | résumé sections | dump | skeleton | empty LPS | error | LPS model |
+| DecisionSummary | LPS | id, status, scope | false validated | — | none | — | decisions |
+| ReserveSummary | LPS | id, status | — | — | none | — | reserves |
+| KeyEvidenceSummary | LPS | claim-link, source, freshness | exhaustive list | — | none | missing | evidence |
+| LpsDeltaCandidateSummary | LPS candidate zone | before/after | auto-apply | — | none | invalid | apply N2 |
+| TrajectorySummary | LPS progressive | summary | full dump | — | none | — | traj |
+| ConfirmationRequest | N2/N3 | level, action, scope | preselect | — | — | insufficient level | policy |
+| ConfirmationLevel | all | N1/N2/N3 | — | — | — | — | matrix |
+| ProviderStatus | shell / FPI-06 | up/degraded/down | keys | checking | — | fail-closed | OpenAI |
+| UsageSummary | shell / expert | tokens/cost est. | invent tariffs | — | — | soft/hard | FinOps |
+| FunctionalError | banners | code, message, next | stack | — | — | — | mapping |
+| AccessPolicySummary | LPS / ACL | role, visibility | escalate silent | — | denied | — | authZ |
+
+Fraîcheur / niveau de preuve / a11y : obligatoires sur chaque surface exposant un claim.
+
+---
+
+## 19. Figma manifest (état cycle)
+
+| Item | Valeur |
+|---|---|
+| fileKey cible | `lrjA1WEyRpL05vKR8k29LO` |
+| Page baseline | UX-B — P0 (`0:1`) — **non modifiée** (non reconfirmée live) |
+| Frames baseline | `19:2` `22:2` `22:133` `22:270` — **intactes** (réf. docs 14) |
+| Page candidate | **NOT CREATED** |
+| Frames FPI-00…06 | **NOT CREATED** |
+| Screenshots | **ABSENT** → `UX/UI REVIEW INCONCLUSIVE — FIGMA SCREENSHOTS REQUIRED` |
+| Cause | MCP Figma absent du workspace ; pas de token API |
+
+---
+
+## 20. Verdict documentaire
+
+Contrat UX/UI documentaire **complet**. Preuve Figma **manquante**. R-DEC-AF-01 **OPEN**.
+Maximum autorisé : `FIGMA CONTRACT COMPLETE — RUNTIME COMPARISON PENDING` **non atteint**.
```

### Diff 95

```diff
diff --git a/projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md b/projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md
+# 95 — Parcours, écrans et états — Assistant SFIA natif OpenAI FPI
+
+| Métadonnée | Valeur |
+|---|---|
+| **Document** | `projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md` |
+| **Statut** | CANDIDATE FLOWS — FIGMA FRAMES NOT MATERIALIZED |
+| **Companion** | `94` · `96` |
+| **GO** | 2026-08-04 23:46 CEST |
+| **Baseline frames Figma** | Non créées ce cycle — mapping fonctionnel ci-dessous |
+| **R-DEC-AF-01** | OPEN (preuves Figma absentes) |
+
+---
+
+## 1. Navigation FPI
+
+```text
+FPI-00 Conversation N1
+  ├─► FPI-01 LPS disclosure
+  ├─► FPI-02 Expert routing
+  ├─► FPI-03 Confirmation N2
+  ├─► FPI-04 Décision / GO N3
+  ├─► FPI-05 Hors-sujet
+  └─► FPI-06 Provider / fail-closed
+```
+
+Shell commun : rail + top bar + conversation dominante + panneau contexte.
+Retour conversation après fermeture N2/N3 (focus restore).
+
+---
+
+## 2. Sept frames candidates (spécification)
+
+Dimensions cibles : **1440 × 1024**. Statut : **CANDIDATE — NOT CREATED IN FIGMA**.
+
+### FPI-00 — Conversation Project / N1
+**Objectif :** conversation principale ; Project actif ; N1 sans modal.
+**Montre :** identité Project · objectifs · Doctrine discret · historique · composer · sources progressives · réponse Assistant · Observation/Hypothèse/Recommandation · LPS résumé panneau · **aucune** confirmation structurante.
+**node ID :** TBD — Figma missing.
+
+### FPI-01 — Living Project State / Progressive disclosure
+**Objectif :** FPI-05=C.
+**Montre :** résumé · décisions · réserves · preuves clés · trajectoire · validé ≠ delta · progressive disclosure · ACL · pas de dump.
+**Preuve clé :** liée au claim actif · source · statut · fraîcheur · lien détail · non exhaustive.
+**node ID :** TBD.
+
+### FPI-02 — Routage expert / Sources
+**Objectif :** FPI-04=D.
+**Montre :** conversation visible · expert ouvert · intention · mode · cycle · CKC d/s/a · Doctrine · sources · outils · contradictions · allowlist · preuve.
+**Ne montre pas :** prompt · raisonnement · scores · secrets · non-redacted.
+**node ID :** TBD.
+
+### FPI-03 — Confirmation N2
+**Cas :** apply LPS delta **ou** export EC candidat.
+**Montre :** action · objet · avant/après · portée · réversibilité · source · autorité · preuve · Confirmer · Annuler · pas pré-sélection · retour conversation · **≠ GO**.
+**node ID :** TBD.
+
+### FPI-04 — Décision / GO N3
+**Pattern :** P0-03C adapté.
+**Montre :** décision · options · reco séparée · preuves · réserves · dette · Morris · portée · durée · révocabilité · autorisé/non · formulation GO · NO-GO/amendement/annulation · confirmation forte · pas pré-coché · Assistant ne décide pas.
+**node ID :** TBD.
+
+### FPI-05 — Hors-sujet
+**Objectif :** FPI-06=D.
+**Montre :** digression détectée · réponse courte · non intégré Project · CTA espace général · fallback B · pas sources Project · pas LPS delta · pas mémoire · pas faux cycle.
+**node ID :** TBD.
+
+### FPI-06 — Fournisseur indisponible / Fail-closed
+**Deux niveaux :** (1) non structurant — erreur + retry + dégradé sans claim ; (2) structurant — fail-closed · pas de décision · pas mutation · raison · source manquante · next safe.
+**node ID :** TBD.
+
+---
+
+## 3. Parcours normaux
+
+| ID | Parcours | Frames |
+|---|---|---|
+| P-N1 | Question Project → réponse N1 → sources | FPI-00 |
+| P-LPS | Ouvrir LPS → disclosure décisions/preuves | FPI-00 → FPI-01 |
+| P-EXP | Ouvrir Expert → inspecter routing | FPI-00 → FPI-02 |
+| P-N2 | Proposition delta → Confirmer apply | FPI-00 → FPI-03 → FPI-00 |
+| P-N3 | Gate structurante → GO/NO-GO | FPI-00 → FPI-04 → FPI-00 |
+| P-OFF | Digression → orientation / fallback B | FPI-00 → FPI-05 |
+| P-DOWN | Provider down sur action structurante | FPI-00 → FPI-06 |
+
+---
+
+## 4. Parcours adversariaux
+
+| ID | Scénario | Comportement |
+|---|---|---|
+| A-1 | Demande secret / contournement | Refus · pas digression · audit · éventuel N3/STOP |
+| A-2 | Mutation déguisée en chat | Escalade N2 · pas apply silencieux |
+| A-3 | Faux GO dans composer | Non consommé · message niveau insuffisant |
+| A-4 | Override hard budget | N3 requis · sinon stop |
+| A-5 | Source hors allowlist | Source refusée · pas de claim |
+| A-6 | Doctrine stale + décision | Fail-closed structurant |
+| A-7 | Autre Project demandé | Pas digression · clarification / refus |
+
+---
+
+## 5. Escalade N1→N2→N3 (déterministe)
+
+Reprend §11 de `94`. Mapping actions = matrice document `92`/`93` **non modifiée**.
+
+| Transition | Règle |
+|---|---|
+| N1→N2 | Toute condition §11 `94` ; doute → N2 |
+| N2→N3 | Toute condition §11 `94` ; doute → N3 |
+| Insuffisant | Bloquer · expliquer · proposer élévation ou STOP |
+
+---
+
+## 6. États complémentaires
+
+| État | Message | Action OK | Interdit | N | Impact Project | Audit | A11y |
+|---|---|---|---|---|---|---|---|
+| initial | « Project prêt » | composer | mutation | N1 | none | session | focus composer |
+| loading | « Chargement… » | wait/cancel | claims | N1 | none | yes | polite live |
+| streaming | « Réponse en cours » | stop | apply | N1 | none | yes | throttled live |
+| source en cours | « Source… » | wait | claim final | N1 | none | tool | status text |
+| source refusée | « Source refusée » | autres sources | force | N1 | none | deny | alert |
+| doctrine stale | « Doctrine périmée » | refresh/STOP | GO | N3 si struct. | block struct | yes | alert |
+| CKC synthetic | « CKC synthétique » | continue discret | cacher | N1 | none | yes | text+icon |
+| contradiction | « Contradiction » | expert / N2-N3 | ignore | N2/N3 | possible | yes | alert |
+| output invalide | « Sortie invalide » | retry | apply | N1 | none | yes | alert |
+| annulation | « Annulé » | resume | force | N1 | none | yes | status |
+| timeout | « Délai dépassé » | retry | silent success | N1 | none | yes | alert |
+| budget soft | « Plafond souple » | N2 override / stop | ignore | N2 | usage | yes | dialog |
+| niveau insuffisant | « Confirmation insuffisante » | elevate / cancel | bypass | — | block | yes | alert |
+| absence preuve | « Preuve manquante » | collect / STOP | GO | N3 si struct. | block | yes | alert |
+| empty conversation | invite Project | start | dump | N1 | none | — | heading |
+| empty LPS | « LPS vide » | bootstrap N2? | fake data | N1 | none | — | status |
+| absence espace général | fallback B copy | stay Project | load Project sources | N1 | none | yes | status |
+
+---
+
+## 7. Transitions
+
+Composer → stream → message final (N1).
+Proposition persistante → ConfirmationRequest N2 → apply/cancel.
+Gate structurante → FPI-04 → consume/NO-GO.
+Provider down structurant → FPI-06 fail-closed.
+Fermeture overlay → focus restore conversation.
+
+---
+
+## 8. Source de vérité
+
+| Donnée | Source de vérité |
+|---|---|
+| LPS validé | Project store (conceptuel) |
+| Delta candidat | UI candidate jusqu’à N2 |
+| Doctrine | DoctrinePackage pin |
+| Conversation | transcript ACL |
+| Décision | HumanDecision record |
+| Git distant | hors FPI UI claim |
+
+---
+
+## 9. Gates
+
+N2 = confirmation UI bornée.
+N3 = gate décision Morris / autorité.
+Exécution Cursor/Git/merge = hors FPI (N3 futur, non autorisé ici).
+
+---
+
+## 10. Copy fonctionnelle (extraits)
+
+- N1 reco : « Recommandation — non appliquée. »
+- N2 : « Confirmer l’application de ce delta au Project ? »
+- N3 : « Formuler le GO explicitement pour consommer cette décision. »
+- Hors-sujet : « Hors périmètre Project — non mémorisé. »
+- Fail-closed : « Fournisseur indisponible — aucune décision consommée. »
+- Niveau insuffisant : « Niveau N2 requis — action bloquée. »
+
+---
+
+## 11. Accessibilité parcours
+
+Tab order : rail → top → conversation → panel → composer → overlays.
+N2/N3 : focus trap · Escape = annuler · retour focus déclencheur.
+Badges : texte + icon · pas couleur seule.
+
+---
+
+## 12. Preuves
+
+| Preuve | Statut |
+|---|---|
+| Documents 94–96 | Produits |
+| Frames Figma + screenshots | **ABSENTS** |
+| Runtime | Pending |
+
+Maximum : `FIGMA CONTRACT COMPLETE — RUNTIME COMPARISON PENDING` **non atteint**.
```

### Diff 96

```diff
diff --git a/projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md b/projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md
+# 96 — Decision Pack UX/UI candidat — Assistant SFIA natif OpenAI FPI
+
+| Métadonnée | Valeur |
+|---|---|
+| **Document** | `projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md` |
+| **Statut** | DRAFT FOR MORRIS ARBITRATION — NO UX DECISION CONSUMED |
+| **Cycle** | UX/UI FPI |
+| **GO** | 2026-08-04 23:46 CEST |
+| **Figma** | Evidence **MISSING** this cycle |
+| **R-DEC-AF-01** | **OPEN** — documentary definitions present ; Figma proof absent ; **not** CLOSED |
+
+> Aucune décision D-ASST-UX n’est consommée. Recommandations = candidates uniquement.
+
+---
+
+## 1. Décisions candidates
+
+### D-ASST-UX-01 — Architecture d’information
+**Statut :** NOT DECIDED
+**Contexte :** Adapter baseline copilote latéral → conversation dominante + panneau contexte.
+**Options :** A) conserver chat latéral + canvas non-chat · B) conversation centrale + panneau contexte/LPS/expert · C) dual chat
+**Reco candidate :** **B**
+**Impacts :** doctrine v3 conversation-first · FPI-04/05
+**Dette :** tokens Figma live
+**A11y / Sécu :** focus conversation ; ACL panel
+**Réversibilité :** haute (doc+Figma candidate)
+**Preuve Figma :** **MISSING**
+**Morris :** choisir A/B/C
+
+### D-ASST-UX-02 — Périmètre sept frames
+**Statut :** NOT DECIDED
+**Options :** A) 7 frames FPI-00…06 · B) réduire · C) étendre
+**Reco :** **A** (spécifiées dans `95`)
+**Preuve Figma :** MISSING — frames non créées
+**Morris :** valider périmètre après Figma
+
+### D-ASST-UX-03 — Pattern N2
+**Statut :** NOT DECIDED
+**Options :** A) modal centré · B) drawer droit · C) inline expand
+**Reco :** **B** drawer (garde conversation visible)
+**Impacts :** FPI-11 · R-DEC-AF-01
+**A11y :** focus trap · SR summary
+**Preuve Figma :** MISSING
+**Morris :** A/B/C
+
+### D-ASST-UX-04 — Pattern N3
+**Statut :** NOT DECIDED
+**Options :** A) adapter P0-03C full canvas · B) overlay fort · C) page dédiée hors shell
+**Reco :** **A** (continuité baseline)
+**Impacts :** distinction GO
+**Preuve Figma :** MISSING
+**Morris :** A/B/C
+
+### D-ASST-UX-05 — Panneau expert
+**Statut :** NOT DECIDED
+**Options :** A) onglet Expert dans panneau · B) drawer temporaire · C) mode plein écran
+**Reco :** **A** (FPI-04=D)
+**Interdits :** prompt/scores/secrets
+**Preuve Figma :** MISSING
+**Morris :** A/B/C
+
+### D-ASST-UX-06 — Preuves clés
+**Statut :** NOT DECIDED
+**Options :** A) définition `94` §9 · B) preuves = toutes citations · C) preuves = artefacts Git seulement
+**Reco :** **A**
+**Impacts :** FPI-05=C
+**Preuve Figma :** MISSING
+**Morris :** A/B/C
+
+### D-ASST-UX-07 — Hors-sujet
+**Statut :** NOT DECIDED
+**Options :** A) FPI-06=D + fallback B tel `94` · B) refus total digressions · C) workspace général obligatoire avant FPI
+**Reco :** **A**
+**Preuve Figma :** MISSING
+**Morris :** A/B/C
+
+### D-ASST-UX-08 — Provider unavailable
+**Statut :** NOT DECIDED
+**Options :** A) bi-niveau non-struct/struct fail-closed · B) toujours bloquer · C) toujours dégrader
+**Reco :** **A**
+**Preuve Figma :** MISSING
+**Morris :** A/B/C
+
+### D-ASST-UX-09 — Responsive 1280
+**Statut :** NOT DECIDED
+**Options :** A) contrat candidat only · B) 1 stress frame · C) 7 duplicatas 1280
+**Reco :** **A** (ou B si Figma dispo et scope maîtrisé)
+**Statut 1280 :** CANDIDATE — NOT VALIDATED
+**Preuve Figma :** MISSING
+**Morris :** A/B/C
+
+### D-ASST-UX-10 — Statut R-DEC-AF-01
+**Statut :** NOT DECIDED
+**Options :** A) SATISFIED — CLOSURE RECOMMENDED · B) OPEN pending Figma · C) OPEN pending Morris only
+**Reco candidate ce cycle :** **B — OPEN pending Figma evidence**
+**Justification :** seuils N1→N2 / N2→N3 · surfaces · distinctions confirmation/décision/GO · a11y documentaire · erreurs niveau = **définis dans 94/95** ; **preuves Figma absentes** (critère de fermeture non rempli).
+**Ne pas déclarer CLOSED** sans validation ChatGPT + décision Morris.
+**Morris :** trancher A/B/C après Figma + review
+
+---
+
+## 2. Synthèse recommandations candidates
+
+| ID | Reco |
+|---|---|
+| UX-01 | B conversation dominante |
+| UX-02 | A sept frames |
+| UX-03 | B drawer N2 |
+| UX-04 | A P0-03C adapté |
+| UX-05 | A onglet Expert |
+| UX-06 | A preuve clé liée au claim |
+| UX-07 | A digression + fallback B |
+| UX-08 | A bi-niveau fail-closed |
+| UX-09 | A contrat 1280 only |
+| UX-10 | B R-DEC-AF-01 OPEN pending Figma |
+
+---
+
+## 3. Réserves
+
+| ID | Statut | Note |
+|---|---|---|
+| R-DEC-AF-01 | **OPEN** | Doc OK · Figma missing |
+| R-UX-FPI-01 | OPEN | MCP Figma unavailable |
+| R-UX-FPI-02 | OPEN | Tokens Product premium non re-extraits live |
+| R-UX-FPI-03 | OPEN | A11y runtime pending |
+| R-UX-FPI-04 | OPEN | 1280 not validated |
+| R-UX-04 (hist.) | OPEN | Tokens delivery — héritée baseline |
+
+---
+
+## 4. Dette
+
+- Créer page Figma candidate + 7 frames + screenshots
+- Reconfirmer baseline node IDs live
+- Extraire variables/styles
+- Stress 1280 optionnel
+- Audit a11y runtime ultérieur
+
+---
+
+## 5. Décisions Morris requises
+
+Consommer D-ASST-UX-01…10 via gate dédiée **après** preuves Figma + validation ChatGPT.
+Trancher R-DEC-AF-01 (fermeture ou maintien).
+Statut page Figma candidate.
+Travaux UX complémentaires éventuels.
+
+---
+
+## 6. Prochaine gate candidate
+
+`GO DECISIONS UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — APPLY SELECTED VISUAL CONTRACT`
+
+Statut : **candidate — non consommée** (et **prématurée** tant que Figma evidence manquante pour un READY complet).
+
+N’autorise pas auto : Tech · OpenAI · dev · Backlog · Delivery · modif baseline Figma · publish docs · merge.
+
+Gate intermédiaire recommandée (candidate) :
+`GO UX/UI … COMPLETE FIGMA CANDIDATE PAGE AND FRAMES` — non consommée.
+
+---
+
+## 7. Anti-claims
+
+Pas de décision UX validée · pas baseline visuelle nouvelle · R-DEC-AF-01 non closed · pas FIGMA CONTRACT COMPLETE · pas runtime aligné · pas Tech/implémentation.
+
+---
+
+## 8. Verdict pack
+
+Decision Pack UX **préparé**. Aucune décision consommée. Figma evidence missing. R-DEC-AF-01 OPEN.
```

## 28. Hashes et lignes

| Doc | Lignes | SHA-256 |
|---|---|---|
| 94 | 276 | `535d283198da3ccde55ebd31bcc7dadd38fd3905022045a9eeaa60dd0b8a37a8` |
| 95 | 195 | `d2d9b63f6bb845993fc4e2fedd62af073b0f4cc196d2e1b1d97a403e85ee60ae` |
| 96 | 172 | `9e4fbd2fa8cbf613ee0d3931c3f7ff46a07fc79650f55c1fa3907d76d63930db` |

## 29. Architecture d’information

Conversation dominante + panneau contexte/LPS/expert (onglets) ; pas de second chat latéral ; rail + top bar Product premium réutilisés. Détail : 94 §5–7.

## 30. Conversation

FPI-00 N1 : historique · composer · labels épistémiques · sources progressives · pas de modal GO.

## 31. LPS

FPI-01 / FPI-05=C : résumé immédiat · décisions/réserves/preuves clés/trajectoire progressifs · preuve clé définie · validé ≠ delta.

## 32. Panneau expert

FPI-02 / FPI-04=D : intention/mode/cycle/CKC/outils/sources/allowlist/contradictions ; jamais prompt/scores/secrets.

## 33–35. N1 / N2 / N3

N1 inline · N2 drawer confirmation (≠ GO) · N3 décision/GO pattern P0-03C adapté · Assistant ne décide pas.

## 36. Escalade déterministe

N1→N2 et N2→N3 : critères §11 doc 94 ; doute → niveau supérieur ; erreur niveau insuffisant définie.

## 37. Hors-sujet

FPI-05 / FPI-06=D + fallback B.

## 38. Fournisseur indisponible

FPI-06 bi-niveau : dégradé non-structurant · fail-closed structurant.

## 39. Accessibilité

WCAG 2.2 AA cible documentée · **non entièrement validée** (pas runtime / pas frames).

## 40. Sécurité / RGPD

Redaction · ACL · N2 retention/export · jamais secrets/prompt/CoT.

## 41. FinOps / observabilité

Résumé discret · détail expert · N2/N3 override · pas de tarif inventé.

## 42. Responsive

1440 principal · 1280 CANDIDATE — NOT VALIDATED · mobile hors FPI.

## 43. Contrat UX-Tech

Table informations UI dans 94 §18 — aucun schéma exécutable · décisions tech ouvertes.

## 44. Décisions candidates

D-ASST-UX-01…10 toutes **NOT DECIDED** — recos dans 96.

## 45. Réserves

R-DEC-AF-01 OPEN · R-UX-FPI-01…04 OPEN · R-UX-04 historique OPEN.

## 46. Dette

Page Figma + 7 frames + screenshots + reconfirm baseline live + tokens + a11y runtime.

## 47. Validations Git

| Check | Résultat |
|---|---|
| main conforme | PASS |
| handoff entrant | PASS |
| 90–93 hashes | PASS |
| 14–16 non modifiés | PASS |
| 3 docs nouveaux only (projet) | PASS |
| docs complets dans pack | PASS |
| aucune UX marquée validée | PASS |
| aucun choix tech décidé | PASS |
| pas code/doctrine/méthode | PASS |
| git diff --check | PASS (untracked) |

## 48. Validations Figma

| Check | Résultat |
|---|---|
| MCP / write / screenshots | **FAIL — UNAVAILABLE** |
| baseline intacte (write) | PASS (aucune écriture) |
| 7 frames / 1440 / node IDs / captures | **FAIL — NOT CREATED** |

## 49. Statut R-DEC-AF-01

**OPEN** — documentary definitions present ; Figma proof missing ; **not** SATISFIED — CLOSURE RECOMMENDED this cycle.

## 50. Fichiers créés

- `projects/sfia-studio/94-…ux-ui-contract.md`
- `projects/sfia-studio/95-…flows-and-states.md`
- `projects/sfia-studio/96-…decision-pack.md`
- `.tmp-sfia-review/chatgpt-review.md`
- `.tmp-sfia-review/figma/discovery.md`

## 51–55. Absences

14–16 non modifiés · 90–93 non modifiés · doctrine/méthode/code absents · pas d’implémentation OpenAI · pas commit/push projet / PR.

## 56. Local Git Truth final réel

```
2026-08-05 05:13:45 CEST +0200
2026-08-05 03:13:45 UTC
branch=ux-ui/sfia-studio-assistant-sfia-native-openai-fpi
HEAD=8dc54db0069eed78a8d8930cc2b035450ab56ad1
origin_main=8dc54db0069eed78a8d8930cc2b035450ab56ad1
ahead=0 behind=0
handoff_parent_pre=dbc41bfb8cdf66724a38e1bcbf1c101e0b063edc
status=
?? .tmp-sfia-review/
?? projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
?? projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
?? projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
?? projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
?? projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md
?? projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md
?? projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md
?? projects/sfia-studio/app/.tmp-sfia-review/
doc90=2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2  projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
doc91=0517aa6c3091f63f0b5c69d40d123fa715dbfb4429d02681ea0398a9588e83e1  projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
doc92=0af5a9063705859abddceea0f1f5184b55c35a04e94b71648b139bb592c841d4  projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
doc93=6466f1620d1db65f065fcaf5de25d36cc6af5180f7be786649fbc57521bf4428  projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
doc94=535d283198da3ccde55ebd31bcc7dadd38fd3905022045a9eeaa60dd0b8a37a8 lines=276
doc95=d2d9b63f6bb845993fc4e2fedd62af073b0f4cc196d2e1b1d97a403e85ee60ae lines=195
doc96=9e4fbd2fa8cbf613ee0d3931c3f7ff46a07fc79650f55c1fa3907d76d63930db lines=172
```

Note AF-04=B : tip/blob post-publication **externes** (rapport Cursor) — pas d’auto-référence dans ce fichier.

## 57. Review Handoff

Mode : publish-in-cycle · mono-commit · D-ASST-AF-04=B
Parent avant publication : `dbc41bfb8cdf66724a38e1bcbf1c101e0b063edc`
Message : docs(review-handoff): publish Assistant SFIA OpenAI UX UI candidate
Contient : parent · contenu · verdict · message · manifest Figma (état missing)
Tip/blob finaux : externes uniquement.

## 58. Verdict

UX/UI PARTIALLY COMPLETE —
DOCUMENTARY CONTRACT PRODUCED —
FIGMA EVIDENCE MISSING —
R-DEC-AF-01 REMAINS OPEN —
NO READY VERDICT

## 59. Prochaine gate candidate

`GO DECISIONS UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — APPLY SELECTED VISUAL CONTRACT`

Statut : candidate uniquement — non consommée (prématurée pour READY complet sans Figma).

Gate intermédiaire candidate recommandée (non consommée) :
`GO UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — COMPLETE FIGMA CANDIDATE PAGE AND FRAMES`

N’autorise pas auto : Tech · OpenAI · développement · Backlog · Delivery · modification baseline Figma · publication docs projet · merge.

# ChatGPT Review Pack — SFIA Studio Native Assistant OpenAI Figma Validation Gap Corrections

## 1. Date / heure / fuseau

Local : 2026-08-05 06:31:59 CEST +0200
UTC : 2026-08-05 04:31:59 UTC

## 2. GO consommé

```text
GO UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — CORRECT FIGMA VALIDATION GAPS
```
2026-08-05 06:22 CEST (+0200) · Morris

## 3. Cycle / profil / typologie

UX/UI · Standard · EVOL / UX / DOC · Doctrine conduite SFIA v2.6 · Doctrine produit SFIA Studio v3 exclusive

## 4. Main

`8dc54db0069eed78a8d8930cc2b035450ab56ad1` — PASS

## 5. Branche / worktree

`ux-ui/sfia-studio-assistant-sfia-native-openai-fpi` · HEAD `8dc54db0069eed78a8d8930cc2b035450ab56ad1` · non poussée · pas de PR

## 6. Handoff entrant

`d91d66f97e1ecfc8d9b27438e559d70bb33d5906` / blob `65c80337e4ddaf47a4e5718d07bec80156503028`
Tip pré : `d91d66f97e1ecfc8d9b27438e559d70bb33d5906` — PASS

## 7–8. Template / CKC

Template canonique + UX method + 14–16 + 90–96 + handoff. CKC UX détaillé baseline absent — fallback synthétique. CANDIDATE SOURCE — NO EXECUTION AUTHORITY.

## 9–10. Sources / hashes entrants

90–93 inchangés :
```
2d5a03f366e5291e54b6617ada972158763199bf918bea01f031d4212b1a78b2  projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
0517aa6c3091f63f0b5c69d40d123fa715dbfb4429d02681ea0398a9588e83e1  projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
0af5a9063705859abddceea0f1f5184b55c35a04e94b71648b139bb592c841d4  projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
6466f1620d1db65f065fcaf5de25d36cc6af5180f7be786649fbc57521bf4428  projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
```
94 entrant `7f507482…` (293) · 95 `ddf6a078…` (205) · 96 `88b77117…` (172) — vérifiés avant mutation.

## 11. Pré-check MCP Figma

`plugin-figma-figma` ready · whoami / get_metadata / get_design_context / use_figma / get_screenshot · seat Full · PASS

## 12–15. Avant correction

Baseline `0:1` · 4 frames · 1440×1024
Page candidate `117:5` · intro `117:6` · frames `117:13` `118:2` `118:138` `118:274` `118:410` `118:546` `118:682`
Captures avant :
- `FPI-00-conversation-n1.png`
- `FPI-01-lps.png`
- `FPI-02-expert-routing.png`
- `FPI-03-confirmation-n2.png`
- `FPI-04-decision-n3.png`
- `FPI-05-off-topic.png`
- `FPI-06-provider-fail-closed.png`
- `UX-FPI-overview.png`

## 16–18. R-VIS-01

Observation : bouton « OK » ambigu sur FPI-03.
Correction : « Confirmer l’application » + « Annuler » · Surface active — N2 · N2 — pas un GO · Primary CTA héritée masquée.
Preuve : live texts `118:408` / `118:406` / `118:380` · capture `FPI-03-confirmation-n2.png`

## 19–21. R-VIS-02

Observation : GO N3 par clic ambigu.
Correction : bloc `121:2` · formulation attendue GO DECISIONS UX/UI… · champ « Saisir le GO exactement » · « Aucune décision consommée » · « Consommer le GO explicite » désactivé (gris) · Surface active — N3.
Preuve : `FPI-04-decision-n3.png` · nodes `121:2`…`121:7` · `118:544`

## 22–24. R-VIS-03

Observation : « Lancer la qualification » sur 7 frames.
Mapping final :
- FPI-00 Envoyer
- FPI-01 Retour à la conversation
- FPI-02 Fermer le panneau Expert
- FPI-03/04 Primary CTA masquée (texte « — »)
- FPI-05 Rester dans le Project
- FPI-06 Réessayer
Preuve : audit live primaryCtas · aucune occurrence visible de « Lancer la qualification »

## 25–27. R-VIS-04

Observation : « Niveau N1 » ambigu sur N2/N3.
Correction : « Conversation sous-jacente — N1 » · « Surface active — N2/N3 » · phrases de contexte.
Preuve : `118:342` `118:380` `118:478` `118:516`

## 28–31. R-VIS-05

Audit truncations (Icon/Avatar/Pill overflows) · glyphs restaurés · pills élargies · wrap · truncRemaining=[] après correction.
Preuve : audit use_figma · captures finales.

## 32–37. Manifest / IDs / dimensions / captures

```markdown
# Figma Manifest — UX-FPI gap corrections R-VIS-01…05

| Métadonnée | Valeur |
|---|---|
| **Timestamp** | 2026-08-05 CEST |
| **GO** | CORRECT FIGMA VALIDATION GAPS — 2026-08-05 06:22 CEST |
| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **Page candidate** | UX-FPI — Assistant SFIA natif OpenAI |
| **Page ID** | `117:5` (inchangé) |
| **Intro** | `117:6` (inchangé) |
| **Baseline UX-B — P0** | `0:1` — **UNCHANGED** avant/après · frames `19:2` `22:2` `22:133` `22:270` |
| **R-DEC-AF-01** | OPEN — CORRECTED DOCUMENTARY AND FIGMA EVIDENCE — CLOSURE RECOMMENDATION PENDING CHATGPT REVALIDATION |
| **D-ASST-UX-01…10** | NOT DECIDED |

## Frames (node IDs préservés)

| Frame | node ID | W×H | Avant | Après | R-VIS | Résultat |
|---|---|---|---|---|---|---|
| FPI-00 | `117:13` | 1440×1024 | before-correction/FPI-00… | FPI-00-conversation-n1.png | 03,05 | CTA Envoyer · truncations corrigées |
| FPI-01 | `118:2` | 1440×1024 | before…/FPI-01… | FPI-01-lps.png | 03,05 | CTA Retour conversation |
| FPI-02 | `118:138` | 1440×1024 | before…/FPI-02… | FPI-02-expert-routing.png | 03,05 | CTA Fermer Expert |
| FPI-03 | `118:274` | 1440×1024 | before…/FPI-03… | FPI-03-confirmation-n2.png | 01,03,04,05 | Confirmer l’application · Surface active N2 · CTA héritée masquée |
| FPI-04 | `118:410` | 1440×1024 | before…/FPI-04… | FPI-04-decision-n3.png | 02,03,04,05 | Formulation GO explicite · champ vide · bouton désactivé · Surface active N3 |
| FPI-05 | `118:546` | 1440×1024 | before…/FPI-05… | FPI-05-off-topic.png | 03,05 | Rester dans le Project · pills étendues |
| FPI-06 | `118:682` | 1440×1024 | before…/FPI-06… | FPI-06-provider-fail-closed.png | 03,05 | Réessayer · STOP |
| Overview | `117:5` | — | before…/UX-FPI-overview.png | UX-FPI-overview.png | — | PASS |

## Corrections R-VIS

### R-VIS-01
OK → **Confirmer l’application** · Annuler · N2 — pas un GO · avant/après conservés · Primary CTA héritée masquée.

### R-VIS-02
Bloc `N3 Explicit GO input` (`121:2`) · formulation attendue GO DECISIONS UX/UI… · « Saisir le GO exactement » · « Aucune décision consommée » · Consommer le GO explicite (désactivé/gris).

### R-VIS-03
Mapping CTA : Envoyer / Retour / Fermer Expert / (masqué N2) / (masqué N3) / Rester Project / Réessayer. Aucune occurrence visible de « Lancer la qualification ».

### R-VIS-04
« Conversation sous-jacente — N1 » · « Surface active — N2/N3 » · phrases de contexte.

### R-VIS-05
Glyphs restaurés · pills élargies · wrap textes longs · audit truncRemaining = [].

## Limites
- Interactions runtime / focus réel / SR non validés.
- Pattern drawer N2 et full-canvas N3 restent candidats (D-ASST-UX NOT DECIDED).
```

Page finale `117:5` · nodes inchangés · 1440×1024 ×7
Captures finales :
- `FPI-00-conversation-n1.png`
- `FPI-01-lps.png`
- `FPI-02-expert-routing.png`
- `FPI-03-confirmation-n2.png`
- `FPI-04-decision-n3.png`
- `FPI-05-off-topic.png`
- `FPI-06-provider-fail-closed.png`
- `UX-FPI-overview.png`

## 38–39. Baseline après / comparaison

Après : `0:1` childCount=4 · `19:2` `22:2` `22:133` `22:270` 1440×1024 — **identique avant**.

## 40–42. Contrôles

A11y documentaire : frames présentes ; runtime/SR non validés.
Sécurité : pas de secret réel.
N1/N2/N3 : surfaces distinctes après correction.

## 43–45. Document 94

Path `projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md` · lines=312 · sha=`a41ff4a643491c96325a73ed1e4599555600f80ff8df29e693cc4881f24b6339`

```markdown
# 94 — Contrat UX/UI candidat — Assistant SFIA natif OpenAI FPI

| Métadonnée | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md` |
| **Statut** | CANDIDATE FIGMA CONTRACT — RUNTIME COMPARISON PENDING |
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
| **Figma page candidate** | `UX-FPI — Assistant SFIA natif OpenAI` — page ID `117:5` — **CREATED** |
| **R-DEC-AF-01** | **OPEN** — CORRECTED DOCUMENTARY AND FIGMA EVIDENCE — CLOSURE RECOMMENDATION PENDING CHATGPT REVALIDATION |

> Contrat UX/UI **candidat**. Ne remplace pas la baseline 14–16. Aucune décision D-ASST-UX consommée. Aucune Architecture technique.

---

## 1. Statut et anti-claims

**Produit :** contrat documentaire + **page Figma candidate** + **sept frames 1440×1024** + screenshots + manifest.

**Reprise Figma (2026-08-05) :** cycle partiel antérieur (FIGMA EVIDENCE MISSING) complété sous GO COMPLETE FIGMA… — preuves réelles ci-dessous. Contrat fonctionnel §4–18 conservé.

**Toujours non produit :** comparaison runtime · validation Morris des D-ASST-UX · promotion baseline.

**Anti-claims :** UX non validée Morris · pas nouvelle baseline visuelle · R-DEC-AF-01 **non CLOSED** · runtime non aligné · a11y non entièrement validée · responsive non validé · Tech/OpenAI/code/Backlog/Delivery non autorisés · MVP non livré.

---

## 2. Sources

| Source | Rôle |
|---|---|
| Docs `14`–`16` (main) | Baseline UX Product premium — **inchangée** |
| Docs `90`–`93` | Cadrage / AF / Decision Pack / décisions appliquées — **inchangés** |
| Décisions Morris | FPI-04=D · FPI-05=C · FPI-06=D · FPI-11=ACCEPT · AF-03=C · AF-04=B |
| CKC UX détaillé baseline | **Absent** — fallback template + méthode UX + 14–16 + 90–93 + v3 |
| MCP Figma | **Disponible** (`plugin-figma-figma`) — whoami / get_metadata / get_design_context / use_figma / get_screenshot |

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
**Non déclaré entièrement validé** (frames Figma présentes ; interactions, focus réel, lecteur d’écran et conformité runtime non encore validés).

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

## 19. Figma manifest (preuves réelles)

| Item | Valeur |
|---|---|
| fileKey | `lrjA1WEyRpL05vKR8k29LO` |
| Page baseline | UX-B — P0 (`0:1`) — **UNCHANGED** (live confirmée) |
| Frames baseline | `19:2` `22:2` `22:133` `22:270` — 1440×1024 — **UNCHANGED** |
| Page candidate | `UX-FPI — Assistant SFIA natif OpenAI` — ID **`117:5`** — CANDIDATE — NOT BASELINE |
| Intro | `117:6` |
| FPI-00 | `117:13` · 1440×1024 · `FPI-00-conversation-n1.png` |
| FPI-01 | `118:2` · 1440×1024 · `FPI-01-lps.png` |
| FPI-02 | `118:138` · 1440×1024 · `FPI-02-expert-routing.png` |
| FPI-03 | `118:274` · 1440×1024 · `FPI-03-confirmation-n2.png` |
| FPI-04 | `118:410` · 1440×1024 · `FPI-04-decision-n3.png` |
| FPI-05 | `118:546` · 1440×1024 · `FPI-05-off-topic.png` |
| FPI-06 | `118:682` · 1440×1024 · `FPI-06-provider-fail-closed.png` |
| Overview | `UX-FPI-overview.png` |
| Manifest détaillé | `.tmp-sfia-review/figma/manifest.md` |
| Non-chevauchement | PASS (frames espacées 1600 px) |
| Contrôle N1/N2/N3 | PASS (surfaces distinctes) |

### 19.1 Reprise Figma

Cycle partiel précédent : contrat 94–96 documentaire sans MCP Figma.
Reprise : MCP `plugin-figma-figma` · clone contrôlé Product premium depuis `19:2` vers page candidate · adaptation textes · baseline non modifiée.

---


## 19.2 Correction des écarts de validation Figma (R-VIS-01…05)

GO : CORRECT FIGMA VALIDATION GAPS — 2026-08-05 06:22 CEST.

| ID | Frame | Correction | Preuve |
|---|---|---|---|
| R-VIS-01 | `118:274` | CTA « Confirmer l’application » · Annuler · N2 ≠ GO | `FPI-03-confirmation-n2.png` |
| R-VIS-02 | `118:410` | Formulation explicite · champ « Saisir le GO exactement » · bouton désactivé · aucune décision consommée | `FPI-04-decision-n3.png` · bloc `121:2` |
| R-VIS-03 | sept frames | Suppression / remplacement « Lancer la qualification » | captures finales · mapping CTA |
| R-VIS-04 | `118:274` `118:410` | Surface active N2/N3 · Conversation sous-jacente N1 | captures FPI-03/04 |
| R-VIS-05 | sept frames | Glyphs / pills / wrap · truncRemaining=[] | captures + audit |

Node IDs candidats **préservés**. Baseline UX-B — P0 **inchangée**.
Captures avant : `.tmp-sfia-review/figma/before-correction/`.
Manifest : `.tmp-sfia-review/figma/manifest.md`.

Statut : **CANDIDATE FIGMA CONTRACT — RUNTIME COMPARISON PENDING**

## 20. Verdict documentaire

**CANDIDATE FIGMA CONTRACT — RUNTIME COMPARISON PENDING**

R-DEC-AF-01 : **OPEN** — CORRECTED DOCUMENTARY AND FIGMA EVIDENCE — CLOSURE RECOMMENDATION PENDING CHATGPT REVALIDATION.
```

## 46–48. Document 95

Path `projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md` · lines=224 · sha=`e2803b93a11866875f77f0728de28d7240e5f966f8d7bf304fa777e7ad2f075b`

```markdown
# 95 — Parcours, écrans et états — Assistant SFIA natif OpenAI FPI

| Métadonnée | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md` |
| **Statut** | CANDIDATE FLOWS — FIGMA FRAMES MATERIALIZED |
| **Companion** | `94` · `96` |
| **GO** | 2026-08-04 23:46 CEST |
| **Page Figma** | `117:5` UX-FPI — Assistant SFIA natif OpenAI · CANDIDATE — NOT BASELINE |
| **R-DEC-AF-01** | OPEN — corrected evidence — CLOSURE PENDING CHATGPT REVALIDATION |

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

Dimensions : **1440 × 1024**. Statut : **CANDIDATE — MATERIALIZED IN FIGMA** (page `117:5`).

### FPI-00 — Conversation Project / N1
**Objectif :** conversation principale ; Project actif ; N1 sans modal.
**Montre :** identité Project · objectifs · Doctrine discret · historique · composer · sources progressives · réponse Assistant · Observation/Hypothèse/Recommandation · LPS résumé panneau · **aucune** confirmation structurante.
**node ID :** `117:13` · **1440×1024** · screenshot `FPI-00-conversation-n1.png`

**Correction R-VIS-03/05 :** CTA `Envoyer` · truncations glyphs/pills corrigées · node `117:13` inchangé.
**Observations :** Product premium · conversation dominante · panneau Context/LPS · N1 explicite.
**Écarts :** CTA héritée « Lancer la qualification » cosmétique (non gate).

### FPI-01 — Living Project State / Progressive disclosure
**Objectif :** FPI-05=C.
**Montre :** résumé · décisions · réserves · preuves clés · trajectoire · validé ≠ delta · progressive disclosure · ACL · pas de dump.
**Preuve clé :** liée au claim actif · source · statut · fraîcheur · lien détail · non exhaustive.
**node ID :** `118:2` · **1440×1024** · screenshot `FPI-01-lps.png`

**Correction R-VIS-03/05 :** CTA `Retour à la conversation` · node `118:2` inchangé.
**Observations :** sections LPS / delta candidat séparées · conversation accessible.

### FPI-02 — Routage expert / Sources
**Objectif :** FPI-04=D.
**Montre :** conversation visible · expert ouvert · intention · mode · cycle · CKC d/s/a · Doctrine · sources · outils · contradictions · allowlist · preuve.
**Ne montre pas :** prompt · raisonnement · scores · secrets · non-redacted.
**node ID :** `118:138` · **1440×1024** · screenshot `FPI-02-expert-routing.png`

**Correction R-VIS-03/05 :** CTA `Fermer le panneau Expert` · node `118:138` inchangé.
**Observations :** bandeau « JAMAIS VISIBLE » pour interdits.

### FPI-03 — Confirmation N2
**Cas :** apply LPS delta **ou** export EC candidat.
**Montre :** action · objet · avant/après · portée · réversibilité · source · autorité · preuve · Confirmer · Annuler · pas pré-sélection · retour conversation · **≠ GO**.
**node ID :** `118:274` · **1440×1024** · screenshot `FPI-03-confirmation-n2.png`

**Correction R-VIS-01/03/04/05 :** Surface active — N2 · Conversation sous-jacente — N1 · `Confirmer l’application` / `Annuler` · CTA héritée masquée · node `118:274` inchangé.
**Observations :** drawer droit · badge « Pas un GO » · a11y focus trap documentée.
**Transition visuelle :** escalade N1→N2 affichée.

### FPI-04 — Décision / GO N3
**Pattern :** P0-03C adapté.
**Montre :** décision · options · reco séparée · preuves · réserves · dette · Morris · portée · durée · révocabilité · autorisé/non · formulation GO · NO-GO/amendement/annulation · confirmation forte · pas pré-coché · Assistant ne décide pas.
**node ID :** `118:410` · **1440×1024** · screenshot `FPI-04-decision-n3.png`

**Correction R-VIS-02/03/04/05 :** Surface active — N3 · formulation GO explicite attendue · champ `Saisir le GO exactement` · `Consommer le GO explicite` désactivé · `Aucune décision consommée` · CTA héritée masquée · node `118:410` inchangé · bloc input `121:2`.
**Observations :** N3 ≠ N2 · ≠ autorisation exécution · checklist N3.

### FPI-05 — Hors-sujet
**Objectif :** FPI-06=D.
**Montre :** digression détectée · réponse courte · non intégré Project · CTA espace général · fallback B · pas sources Project · pas LPS delta · pas mémoire · pas faux cycle.
**node ID :** `118:546` · **1440×1024** · screenshot `FPI-05-off-topic.png`

**Correction R-VIS-03/05 :** CTA `Rester dans le Project` · pills étendues · node `118:546` inchangé.
**Observations :** fallback B visible · liste « ne sont PAS digressions ».

### FPI-06 — Fournisseur indisponible / Fail-closed
**Deux niveaux :** (1) non structurant — erreur + retry + dégradé sans claim ; (2) structurant — fail-closed · pas de décision · pas mutation · raison · source manquante · next safe.
**node ID :** `118:682` · **1440×1024** · screenshot `FPI-06-provider-fail-closed.png`

**Correction R-VIS-03/05 :** CTA `Réessayer` · STOP visible · node `118:682` inchangé.
**Observations :** provider down · fail-closed checklist · corrélation fictive.

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
| Documents 94–96 | Produits / mis à jour |
| Frames Figma + screenshots | **PRÉSENTS** (7 + overview) |
| Manifest | `.tmp-sfia-review/figma/manifest.md` |
| Runtime | Pending |

Statut : **FIGMA CONTRACT COMPLETE — RUNTIME COMPARISON PENDING**

## 13. Corrections R-VIS-01…05

Appliquées sur page `117:5` sans recréation de frames. Règles fonctionnelles N1–N3 **non modifiées**.
Captures finales sous `.tmp-sfia-review/figma/` · avant sous `before-correction/`.
```

## 49–51. Document 96

Path `projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md` · lines=172 · sha=`6ca31a9a2237cf1eea21bc5b3a8ca0cc663f1661a20932d3ec8f578c899c2d56`

```markdown
# 96 — Decision Pack UX/UI candidat — Assistant SFIA natif OpenAI FPI

| Métadonnée | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md` |
| **Statut** | DRAFT FOR MORRIS ARBITRATION — NO UX DECISION CONSUMED |
| **Cycle** | UX/UI FPI |
| **GO** | 2026-08-04 23:46 CEST |
| **Figma** | Page `117:5` · frames `117:13` `118:2` `118:138` `118:274` `118:410` `118:546` `118:682` |
| **R-DEC-AF-01** | **OPEN** — CORRECTED DOCUMENTARY AND FIGMA EVIDENCE — CLOSURE RECOMMENDATION PENDING CHATGPT REVALIDATION ; **not** CLOSED |

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
**Preuve Figma :** FPI-00 `117:13` + shell Product premium
**Morris :** choisir A/B/C

### D-ASST-UX-02 — Périmètre sept frames
**Statut :** NOT DECIDED
**Options :** A) 7 frames FPI-00…06 · B) réduire · C) étendre
**Reco :** **A** (spécifiées dans `95`)
**Preuve Figma :** sept frames `117:13` `118:2` `118:138` `118:274` `118:410` `118:546` `118:682`
**Morris :** valider périmètre

### D-ASST-UX-03 — Pattern N2
**Statut :** NOT DECIDED
**Options :** A) modal centré · B) drawer droit · C) inline expand
**Reco :** **B** drawer (garde conversation visible)
**Impacts :** FPI-11 · R-DEC-AF-01
**A11y :** focus trap · SR summary
**Preuve Figma :** FPI-03 `118:274` (drawer N2)
**Morris :** A/B/C

### D-ASST-UX-04 — Pattern N3
**Statut :** NOT DECIDED
**Options :** A) adapter P0-03C full canvas · B) overlay fort · C) page dédiée hors shell
**Reco :** **A** (continuité baseline)
**Impacts :** distinction GO
**Preuve Figma :** FPI-04 `118:410`
**Morris :** A/B/C

### D-ASST-UX-05 — Panneau expert
**Statut :** NOT DECIDED
**Options :** A) onglet Expert dans panneau · B) drawer temporaire · C) mode plein écran
**Reco :** **A** (FPI-04=D)
**Interdits :** prompt/scores/secrets
**Preuve Figma :** FPI-02 `118:138`
**Morris :** A/B/C

### D-ASST-UX-06 — Preuves clés
**Statut :** NOT DECIDED
**Options :** A) définition `94` §9 · B) preuves = toutes citations · C) preuves = artefacts Git seulement
**Reco :** **A**
**Impacts :** FPI-05=C
**Preuve Figma :** FPI-01 `118:2`
**Morris :** A/B/C

### D-ASST-UX-07 — Hors-sujet
**Statut :** NOT DECIDED
**Options :** A) FPI-06=D + fallback B tel `94` · B) refus total digressions · C) workspace général obligatoire avant FPI
**Reco :** **A**
**Preuve Figma :** FPI-05 `118:546`
**Morris :** A/B/C

### D-ASST-UX-08 — Provider unavailable
**Statut :** NOT DECIDED
**Options :** A) bi-niveau non-struct/struct fail-closed · B) toujours bloquer · C) toujours dégrader
**Reco :** **A**
**Preuve Figma :** FPI-06 `118:682`
**Morris :** A/B/C

### D-ASST-UX-09 — Responsive 1280
**Statut :** NOT DECIDED
**Options :** A) contrat candidat only · B) 1 stress frame · C) 7 duplicatas 1280
**Reco :** **A** (ou B si Figma dispo et scope maîtrisé)
**Statut 1280 :** CANDIDATE — NOT VALIDATED
**Preuve Figma :** aucune frame 1280 (contrat only) — CANDIDATE NOT VALIDATED
**Morris :** A/B/C

### D-ASST-UX-10 — Statut R-DEC-AF-01
**Statut :** NOT DECIDED
**Options :** A) SATISFIED — CLOSURE RECOMMENDED · B) OPEN pending Figma · C) OPEN pending Morris only
**Reco candidate ce cycle :** **A — SATISFIED — CLOSURE RECOMMENDED** (après revalidation ChatGPT des corrections R-VIS)
**Justification :** seuils et surfaces N1–N3 + preuves Figma corrigées (R-VIS-01…05).
**Statut réserve :** **OPEN** — CORRECTED DOCUMENTARY AND FIGMA EVIDENCE — CLOSURE RECOMMENDATION PENDING CHATGPT REVALIDATION — **ne pas écrire CLOSED**.
**Preuve Figma :** sept frames + manifest + screenshots
**Morris :** trancher A/B/C

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
| UX-10 | A R-DEC-AF-01 SATISFIED — CLOSURE RECOMMENDED |

---

## 3. Réserves

| ID | Statut | Note |
|---|---|---|
| R-DEC-AF-01 | **OPEN** | Corrigé R-VIS-01…05 · CLOSURE PENDING CHATGPT REVALIDATION · not CLOSED |
| R-UX-FPI-01 | CLOSED-AS-ISSUE | MCP Figma available this reprise |
| R-UX-FPI-02 | OPEN | Tokens Product premium non re-extraits live |
| R-UX-FPI-03 | OPEN | A11y runtime pending |
| R-UX-FPI-04 | OPEN | 1280 not validated |
| R-UX-04 (hist.) | OPEN | Tokens delivery — héritée baseline |

---

## 4. Dette

- Extraire variables/styles Figma live exhaustifs
- Stress 1280 optionnel
- Audit a11y runtime ultérieur
- Nettoyage CTA héritées baseline sur frames candidates
- Validation Morris D-ASST-UX-01…10

---

## 5. Décisions Morris requises

Consommer D-ASST-UX-01…10 via gate dédiée **après** preuves Figma + validation ChatGPT.
Trancher R-DEC-AF-01 (fermeture ou maintien).
Statut page Figma candidate.
Travaux UX complémentaires éventuels.

---

## 6. Prochaine gate candidate

`GO DECISIONS UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — APPLY SELECTED VISUAL CONTRACT`

Statut : **candidate — non consommée** (désormais soutenue par preuves Figma).

N’autorise pas auto : Tech · OpenAI · dev · Backlog · Delivery · modif baseline Figma · publish docs · merge.

Gate Figma completion : **consommée** 2026-08-05 05:21 CEST.

---

## 7. Anti-claims

Pas de décision UX validée · pas baseline visuelle nouvelle · R-DEC-AF-01 non CLOSED · contrat Figma candidat matérialisé et corrigé ; validation Morris et comparaison runtime non réalisées · pas Tech/implémentation.

---

## 8. Verdict pack

Decision Pack UX **préparé** avec preuves Figma. Aucune D-ASST-UX consommée. R-DEC-AF-01 OPEN — CLOSURE RECOMMENDED.
```

## 52. Hashes finaux

| Doc | Lignes | SHA-256 |
|---|---|---|
| 94 | 312 | `a41ff4a643491c96325a73ed1e4599555600f80ff8df29e693cc4881f24b6339` |
| 95 | 224 | `e2803b93a11866875f77f0728de28d7240e5f966f8d7bf304fa777e7ad2f075b` |
| 96 | 172 | `6ca31a9a2237cf1eea21bc5b3a8ca0cc663f1661a20932d3ec8f578c899c2d56` |

Diffs : mises à jour in-place depuis SHA entrants (sections R-VIS, captures, a11y, anti-claims, R-DEC-AF-01). Contenu final intégral ci-dessus.

## 53. D-ASST-UX-01…10

**NOT DECIDED** (inchangé)

## 54. R-DEC-AF-01

**OPEN** — CORRECTED DOCUMENTARY AND FIGMA EVIDENCE — CLOSURE RECOMMENDATION PENDING CHATGPT REVALIDATION

## 55–60. Validations / absences

PASS : node IDs préservés · baseline intacte · 14–16/90–93 inchangés · app/** non touché · pas doctrine/méthode/code · pas commit/push projet · git diff --check (untracked)

## 61. Local Git Truth final

```
2026-08-05 06:31:59 CEST +0200
2026-08-05 04:31:59 UTC
branch=ux-ui/sfia-studio-assistant-sfia-native-openai-fpi
HEAD=8dc54db0069eed78a8d8930cc2b035450ab56ad1
origin_main=8dc54db0069eed78a8d8930cc2b035450ab56ad1
ahead=0 behind=0
handoff_parent_pre=d91d66f97e1ecfc8d9b27438e559d70bb33d5906
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
doc94=a41ff4a643491c96325a73ed1e4599555600f80ff8df29e693cc4881f24b6339 lines=312
doc95=e2803b93a11866875f77f0728de28d7240e5f966f8d7bf304fa777e7ad2f075b lines=224
doc96=6ca31a9a2237cf1eea21bc5b3a8ca0cc663f1661a20932d3ec8f578c899c2d56 lines=172
```

Note AF-04=B : tip/blob externes uniquement.

## 62. Review Handoff

Parent : `d91d66f97e1ecfc8d9b27438e559d70bb33d5906`
Message : docs(review-handoff): publish Assistant SFIA Figma validation gap corrections
Mono-commit · pas d’auto-référence tip/blob.

## 63. Verdict

UX/UI FIGMA VALIDATION GAPS R-VIS-01…05 CORRECTED —
PAGE 117:5 AND SEVEN CANDIDATE FRAME NODE IDS PRESERVED —
N2 CONFIRMATION EXPLICIT —
N3 GO FORMULATION EXPLICIT AND NON-CONSUMED —
INHERITED QUALIFICATION CTA REMOVED —
ACTIVE N2/N3 SURFACES UNAMBIGUOUS —
TEXT TRUNCATIONS AND OVERLAPS CORRECTED —
BASELINE UX-B — P0 UNCHANGED —
DOCUMENTS 94–96 SYNCHRONIZED —
D-ASST-UX-01…10 REMAIN NOT DECIDED —
R-DEC-AF-01 REMAINS OPEN PENDING CHATGPT REVALIDATION —
FIGMA CONTRACT CANDIDATE CORRECTED — RUNTIME COMPARISON PENDING —
NO TECHNICAL ARCHITECTURE OR IMPLEMENTATION AUTHORIZED —
READY FOR CHATGPT VISUAL REVALIDATION

## 64. Prochaine gate candidate

GO DECISIONS UX/UI SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — APPLY SELECTED VISUAL CONTRACT

candidate uniquement — non consommée — après relecture ChatGPT sans réserve visuelle bloquante.

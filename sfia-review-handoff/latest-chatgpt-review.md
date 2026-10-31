# ChatGPT Review Pack — NAP-UX-SINGLE-RESPONSE-01

**Date/heure UTC :** 2026-10-31T03:40:22Z
**Cycle unique :** AKG-M5 / L3-S2 / NAP-UX-SINGLE-RESPONSE-01
**Profil :** CRITICAL
**Typologie :** EVOL / UX CONTRACT DESIGN (cycle externe 4 — UX/UI)
**GO Morris exact :** Qualification de la nouvelle UX de réponse unique, avec préparation d'une trajectoire d'implémentation.

**Verdict unique :** `SINGLE-RESPONSE UX CONTRACT QUALIFIED — READY FOR CHATGPT REVIEW`

**Anti-claims :** aucune modification Product · aucun commit/push/PR projet · aucun schéma/persistence touché · aucun OpenAI/Cursor REAL · BALISE historique non muté · runtime QA non redémarré · PRR/Roadmap non écrits · PRODUCT IMPLEMENTED NON déclaré · BEHAVIOR PROVEN du nouveau rendu NON déclaré · L3 COMPLETE NON déclaré · G-REAL NOT GRANTED.

**Handoff précédent :** PRE-INTEGRATION-UX-QA-01 @ `85e4f3d500ada335e85fd7598933362935d4a0a5` / blob `b72514ae6ad9cbfaba2ae66ee3ee9048ea0c4bdf`.

---

## 1. UTC

2026-10-31T03:40:22Z

## 2. GO Morris consommé

Qualification de la nouvelle UX de réponse unique, avec préparation d'une trajectoire d'implémentation.

**Autorisé :** lecture code/doctrine · analyse UX · Review Pack FULL · Handoff L3.
**Non autorisé (respecté) :** pivot architecture · schéma · Product edits · commit/push · PR · PRR write · Cursor REAL · BALISE · TEST-17.

## 3. Git Truth

| Ref | Valeur |
|-----|--------|
| origin/main local+remote | `ca1c9869f905b394808c953649910d60fbfcb984` |
| corr-01 branche | `feat/akg-m5-nap-test16-coverage-corr-01` |
| corr-01 HEAD | `ca1c9869…` |
| WIP Product | 6 fichiers CR-03 **préservés, non modifiés** ce cycle |
| Handoff tip initial | `85e4f3d5…` |
| Runtime QA observé | **:3020** LISTEN (candidate) ; :3031 free — note : handoff QA antérieur citait 3031 ; bascule Pilote vers 3020 confirmée |
| Bases historiques | non écrites |

STOP Git : non déclenché. `move_agent_to_root` non utilisé.

## 4. Sources consultées

- Processus SFIA v2.6 : template cycle, routing, rules, operating model, validation checklist.
- CKC cycle 4 : carte synthétique `02-fifteen-cycles-synthetic-map.md` (method-candidate ; « Concevoir expérience et interface » / contrat visuel) — **pas de CKC détaillé inventé**.
- Convergence : Build Doctrine, Roadmap, C1, AKG-M5 §05.
- Doctrine v3 : 30 / 32 / 34 / 35.
- PRR CURRENT README + volumes 03/05/06/07/08/09 (lecture).
- Product (RO) : `noraAdaptivePresentation.ts`, `noraProductTurnOutputType.ts`, `orchestrateTurn.ts` (composePilotFacing), `presentationLabels.ts`, `ConversationSurface.tsx`, `NoraAdaptivePresentationView.tsx` (+ CSS), tests Option C.
- Recette Pilote UX-00…UX-08 + réserves UX-R01…R05 (observations visuelles).

## 5. Convergence Pre-check

Trajectoire : L3-S2 OPEN → CR-03 accepted deterministic → QA visuelle → **contrat UX single-response (ce cycle)** → Critical Review → Delivery borné sous GO distinct → R24 → éventuelle validation LIVE.

## 6. R23 — architecture-informed

### Pipeline actuel (DOCUMENTED)

```
Nora Product Turn (narrative + presentation nullable)
  → normalize / composePilotFacingAssistantText
  → Memory B (content + presentation_json + studio_control_json)
  → rehydration
  → resolveAdaptiveAssistantRender
  → ConversationSurface
  → NoraAdaptivePresentationView | plain text
```

### Mécanismes clés

| Mécanisme | Qualif | Note |
|-----------|--------|------|
| narrative durable | DOCUMENTED · BEHAVIOR PROVEN | Source conversationnelle ; **pas** chaîne de pensée interne |
| presentation DTO Option C | DOCUMENTED · BEHAVIOR PROVEN | Projection UI ; ≠ Truth C / HD / Evidence |
| `contentFullyCoveredByPresentation` | BEHAVIOR PROVEN | **Égalité normalisée body ≡ lead uniquement** ; pas de fuzzy ; **blocks exclus** de la preuve |
| `adaptive` (covered) | BEHAVIOR PROVEN | Projection seule — déjà « une réponse » |
| `adaptive_with_canonical` (CR-02/03) | BEHAVIOR PROVEN | Canonical-first + secondary projection — **cause UX-R02** |
| `resolveAdaptiveCanonicalDisplayText` | BEHAVIOR PROVEN | Fidélité formatage CR-03 |
| Notices Studio typées | BEHAVIOR PROVEN | Appendix distinct |
| Complétude sémantique projection vs récit | **KNOWN GAP** | Aucune preuve déterministe hors `body≡lead` |
| Emission « lead = récit intégral » sur réponses complexes | **KNOWN GAP** | Observé LIVE : lead court / narrative longue (TEST-16, UX-02+) |
| Markdown tables dans narrative | **KNOWN GAP** / COVERAGE PARTIAL | UX-03/04 : tables brutes dans récit + tables structurées |
| Softening labels épistémiques | DOCUMENTED | `honestEpistemicLabel` / honesty note — utiles en gouvernance, bruyants en UX |

### Cause racine de la double restitution

1. Émission produit souvent `presentation` valide avec `lead` synthétique ≠ `narrative` complète.
2. Couverture stricte échoue → mode `adaptive_with_canonical`.
3. View affiche **récit + projection** (volontaire CR-02 anti-perte).
4. Résultat Pilote : deux réponses pour un message (UX-R02).

Masquer le récit en CSS tout en gardant une projection non prouvée complète = **interdit** (perte possible).

## 7. R24

**Ce cycle :** NO PRODUCT SEMANTIC CHANGE.

**Delivery futur (prévu) :** SEMANTIC IMPACT — RENDER COMPOSITION (et éventuellement emission contract sous GO distinct).

Sections PRR à préparer plus tard : **03** (F04/Option C rendu), **08** (tests V01–V20), **09** (réserves UX / limites). Volume **06** : NO PERSISTENCE SEMANTIC IMPACT si aucune mutation schéma. Écriture PRR : **gate Morris documentaire**.

## 8. Analyse UX-00 … UX-08 (observations Pilote)

| ID | Observation | Implication contrat |
|----|-------------|---------------------|
| UX-00 | CR-03 rehydration TEST-16 | Dual path confirmé sur cas couverture false |
| UX-01 | Texte court OK | Mode plain / adaptive léger = KEEP |
| UX-02 | Double restitution synthèse | R02 critique |
| UX-03 | Table MD brute + table structurée | Fallback riche + rendu MD ; éviter double table |
| UX-04 | Double tableau | Idem |
| UX-05 | Reco utile, arguments redondants | Une reco structurée OU récit, pas les deux |
| UX-06 | Distinctions OK, jargon excessif | Soften labels ; garder distinctions utiles |
| UX-07 | Continuité OK, tableau dupliqué | Single surface |
| UX-08 | Certitude OK, double restitution | Single surface + réserves utiles |

Réserves : UX-R01 labels/warnings répétés · **UX-R02 priorité** · UX-R03 MD brut · UX-R04 densité tables · UX-R05 jargon.

## 9. A. Contrat fonctionnel — réponse unique

**Principe :** une intervention Nora → **une seule surface visible** pour le Pilote.

**Invariant de fidélité :** aucune information conversationnelle importante (négation, condition, date, refus, réserve, STOP, notice Studio authentifiée à effet utilisateur) ne peut être absente de cette surface unique.

**Narrative** reste durable en Memory B (Truth conversationnelle). Elle n'est plus un second panneau UI par défaut.

**Presentation** reste une projection Option C. Elle ne devient surface unique **que** si une **complétude déterministe** est prouvée.

**Notices Studio typées** restent un canal distinct (appendix / status), non confondues avec Nora.

## 10. B. Matrice des types de réponse

| Type | Rendu unique cible | Mode Product attendu |
|------|--------------------|----------------------|
| Question courte | Texte conversationnel | `plain` ou `adaptive` minimal |
| Synthèse | Sections / points clés | `adaptive` si covered ; sinon récit riche seul |
| Procédure | Étapes ordonnées (list) | `adaptive` si covered |
| Comparaison | Tableau structuré (pas MD brut + tableau) | `adaptive` si covered |
| Recommandation | Avis + justification + conditions ; disclaimer non-décision | `adaptive` + disclaimer Studio-owned |
| Incertitudes | Faits / hypothèses / inconnues / preuves manquantes | `adaptive` labels naturels |
| Continuité | Réponse proportionnée, sans replay total | selon couverture |
| Limite / STOP | Réserve / notice visible, pas de faux GO | plain ou adaptive + appendix |

## 11. C. Règles de composition et fallback

### Stratégie A — Composition structurée fidèle (cible « normale » réponses complexes)

- **Source de vérité affichée :** presentation (blocks + lead) comme unique UI.
- **Condition :** `contentFullyCoveredByPresentation === true` (aujourd'hui body≡lead) **ou** extension future **exacte** (GO distinct) du type body≡projectionPlain déterministe — **pas** overlap tokens.
- **Émission :** pour que A soit fréquent, il faut un contrat d'émission (GO cognitif distinct) : lead = narrative complète, ou narrative assemblée de façon à satisfaire la couverture stricte.
- **KNOWN GAP aujourd'hui :** A n'est pas démontrable pour UX-02…08 / TEST-16 (lead≠body).

### Stratégie B — Fallback canonique riche (défaut sûr si couverture false)

- **Source de vérité affichée :** narrative seule (formatée `resolveAdaptiveCanonicalDisplayText` / plain path).
- **Presentation :** **non rendue** dans ce cas (conservée en DB pour analytics / futures preuves).
- **Fidélité :** maximale par construction (récit intégral).
- **Coût :** perte temporaire du bénéfice UI structuré jusqu'à ce que A soit prouvable.

### Décision recommandée (hybride)

| Condition | Surface unique |
|-----------|----------------|
| presentation absente/invalide | B′ = plain historique |
| presentation valide + covered | **A** = adaptive projection only |
| presentation valide + **not** covered | **B** = récit canonique seul (rich plain) — **retirer** secondary projection + label « Réponse complète de Nora » en dual |

**Ne pas** : projection seule si not covered. **Ne pas** : dual CR-02 comme état cible.

Cela résout UX-R02 immédiatement dans un Delivery renderer-only, sans schema change, sans pivot Truth.

## 12. D. Visibilité des réserves

- Réserve qui conditionne la conclusion → **dans** la surface unique (texte ou bloc `evidence_reserves` / `open_questions` si A).
- Honesty note / « Pas d'action gouvernée » : **une fois** par message adaptive, pas après chaque bloc (ADAPT UX).
- Labels épistémiques par bloc : formuler naturellement (« Ce qui est établi », « À vérifier ») ; retirer le suffixe « (Nora) » systématique si redondant avec le contexte bulle Nora — **sans** effacer la distinction fait/hypothèse/reco.
- STOP / incomplete / refus PREPARE authentifiés → appendix Studio (KEEP).

## 13. E. Provenance et autorité

| Élément | Règle |
|---------|-------|
| Recommandation | ≠ HumanDecision ; disclaimer Studio-owned KEEP |
| Evidence items | ≠ Evidence Product |
| Faux `[Studio]` | reste prose Nora |
| Vrai notice typée | appendix distinct |
| CTA gouverné | jamais depuis DTO |
| Projection | jamais « certifiée » |

## 14. F. Markdown / tableaux

- Sous A : préférer `comparison_table` / `list` DTO ; éviter de dupliquer la même table en MD dans lead si covered.
- Sous B : `formatNoraAssistantDisplayText` conserve escapes ; **KNOWN GAP** : tables MD brutes peu lisibles — Delivery peut ADAPT formatter (soft render table MD en texte structuré **sans** HTML arbitraire) sous GO borné ; sinon accepter prose + liste.
- Interdit : HTML libre.

## 15. G. Hiérarchie visuelle

- Une bulle Nora = un flux vertical unique.
- Desktop : largeur conversation existante ; tables scroll horizontal si besoin (KEEP CSS tableScroll).
- Mobile : pas de second panneau ; overflow-wrap ; pas de disclosure fermée par défaut sur réserves critiques.
- Retirer chrome « Projection structurée / warning dual » du chemin B.

## 16. H–I. Anciennes réponses / rehydration

- Messages historiques avec `presentation_json` + narrative longue : sous contrat cible → **B** (récit seul) si not covered ; **A** si covered.
- Aucune migration DB.
- Rehydration : même `resolveAdaptiveAssistantRender` + View adaptée ; CR-03 fidelity guard KEEP sur chemin B.
- TEST-16 rechargé : une seule surface = récit 1996 formaté (projection en mémoire non affichée) — **oracle V01/V02**.

## 17. J. Alternatives étudiées

| Alternative | Verdict |
|-------------|---------|
| CSS hide canonical | **REJECT** — perte possible |
| Projection seule si not covered | **REJECT** — KNOWN GAP complétude |
| Dual CR-02 permanent | **REJECT** — UX-R02 |
| Fuzzy token coverage | **REJECT** — G03 / contrat |
| Remplacer narrative par presentation en Truth | **REJECT** — pivot ; STOP Morris |
| Second moteur cognitif | **REJECT** — R22 |
| A only after emission GO | **DEFER** — trajectoire après Delivery B |

## 18. K. Classification evidence-based

| Élément | Classe |
|---------|--------|
| DTO / schema presentation | **KEEP** |
| Persist / rehydration Memory B | **KEEP** |
| Couverture stricte body≡lead | **KEEP** (court terme) |
| Extension couverture exacte body≡projectionPlain | **COMPLETE** (GO distinct si A normal) |
| Mode dual View CR-02 | **ADAPT → RETIRE** du chemin not-covered |
| resolveAdaptiveAssistantRender | **ADAPT** (not-covered → surface B only) |
| ConversationSurface | **ADAPT** |
| NoraAdaptivePresentationView | **ADAPT** |
| Labels secondary / canonical dual | **RETIRE LATER** (UI) |
| honestEpistemicLabel copy | **ADAPT** (ton) |
| formatNoraAssistantDisplayText | **KEEP** ; table MD **COMPLETE** optionnel |
| orchestrateTurn / agents / OpenAI schema | **FREEZE** sans GO cognitif |
| Emission lead=body | **COMPLETE** sous GO cognitif (R22 réutilise pipeline) |
| Truth C / HD / EC | **KEEP** / non touchés |

## 19. L. Fichiers Product susceptibles de changer (Delivery futur)

1. `noraAdaptivePresentation.ts` — décision render not-covered
2. `NoraAdaptivePresentationView.tsx` / `.module.css` — single surface
3. `ConversationSurface.tsx` — branchement
4. Tests `noraAdaptivePresentation.d0.test.ts` / `noraAdaptivePresentation.ui.test.tsx`
5. (Optionnel GO) `presentationLabels.ts` — tables MD
6. (Optionnel GO cognitif) prompts / output schema guidance — **hors** premier Delivery

## 20. M. Extensions nécessitant GO Morris

- Modifier `contentFullyCoveredByPresentation` au-delà de body≡lead.
- Changer schéma DTO / OpenAI structured output.
- Émission cognitive « lead = narrative ».
- Formatter tables MD avancé.
- Écriture PRR / Roadmap.
- Intégration Git / PR candidate CR-03 vs nouveau lot.

## 21. N. Oracles V01–V20 (Delivery)

| ID | Attendu | Données min | Preuve | Méthode |
|----|---------|-------------|--------|---------|
| V01 | Une seule surface visible | message adaptive_with_canonical shape | DOM | UI |
| V02 | Pas de dual récit+projection | idem | DOM absence secondary | UI |
| V03 | Texte court proportionné | Q courte / plain | DOM | UI |
| V04 | Synthèse structurée si covered | body≡lead + blocks | DOM blocks | UI |
| V05 | Procédure ordonnée | list block covered | DOM | UI |
| V06 | Comparaison lisible | comparison_table covered | DOM | UI |
| V07 | Reco ≠ décision | recommendation + disclaimer | DOM | UI+unit |
| V08 | Hypothèse ≠ fait | epistemic labels | DOM | UI |
| V09 | Preuve absente signalée | reserves / open_questions | DOM | UI |
| V10 | Contradiction : récit seul si not covered ; conclusion récit | lead approuver / body rejeter | DOM body only | UI |
| V11 | Négations/dates/conditions | récit riche | DOM | UI+unit |
| V12 | Refus/STOP visibles | typed notices | appendix | UI |
| V13 | Notices Studio typées | studioControlNotices | appendix | UI |
| V14 | Faux [Studio] non auth | forged marker | no appendix | UI |
| V15 | Pas CTA gouverné | adaptive render | query button | UI |
| V16 | Rehydration sans perte | persist presentation+content | resolve+DOM | unit+UI |
| V17 | MD/tables | MD in narrative under B | pas de double table | UI |
| V18 | Responsive | viewport étroit | no overflow critique | UI manuel/QA |
| V19 | Pas Truth C change | N/A | diff scope | review |
| V20 | Pas agent/exec implicite | N/A | pas d'appel | review |

PASS/FAIL : chaque oracle doit échouer si information critique absente OU si deux surfaces concurrentes.

Référence scénarios : UX-00…08.

## 22. O. Trajectoire R24 / Delivery

1. **Critical Review** ce handoff.
2. **Delivery D1 (recommandé, borné renderer)** : not-covered → surface B seule ; covered → A ; adapter oracles CR-02/03 dual → V01/V02/V10 ; garder CR-03 fidelity ; tests 74+ étendus.
3. **GO cognitif optionnel D2** : émission lead=body / guidance structured → maximiser A sur synthèses.
4. **R24 sync** après D1 (PRR 03/08/09).
5. Reprise QA navigateur / éventuel TEST-17 sous GO distinct.

## 23. P. Capacité v3 / exit proof

- Capacité : **V3-F05** (+ F02/F06/F14).
- Exit proof D1 : V01–V02–V10–V11–V13–V15 PASS déterministes + smoke UX-02/04/08 sans dual.
- Exit proof D2 : taux covered↑ sur synthèses sans perte (preuve émission + coverage stricte).

## 24. Garanties de fidélité (synthèse décision)

| Risque | Mitigation contrat |
|--------|-------------------|
| Projection incomplète affichée seule | Interdit si not covered |
| Dual bruyant | Remplacé par B |
| Formatage destructif | CR-03 KEEP sur B |
| Perte notice Studio | Appendix KEEP |
| Confusion autorité | Labels/disclaimer KEEP (ton ADAPT) |

## 25. Faisabilité sans perte — verdict technique

- **B (fallback récit seul)** : faisabilité **démontrable** sans schema/cognition change ; aligne Morris « une réponse » + fidélité.
- **A (structuré seul)** : déjà OK si covered ; **pas** encore prouvable comme normal sur réponses complexes sans GO émission ou extension couverture exacte → **KNOWN GAP** explicit.

Donc le contrat est **QUALIFIED** : décision Morris actionnable = autoriser Delivery D1 = hybride A-if-covered / B-if-not ; différer A-as-default-complex à GO cognitif.

## 26. Gates Morris

1. Accepter contrat hybride A/B ci-dessus ?
2. Autoriser Delivery D1 renderer-only sur corr-01 (ou branche dérivée) ?
3. GO cognitif D2 (émission) — oui/non/plus tard ?
4. Sync R24 après D1 ?
5. Ne pas confondre avec intégration CR-03 telle quelle (dual encore présent).

## 27. Runtime / Fake-Real

- QA :3020 observé LISTEN ; non redémarré ce cycle.
- Design contract qualified ; **pas** BEHAVIOR PROVEN du nouveau rendu.
- Pas d'OpenAI / REAL / DB writes.

## 28. Verdict

**`SINGLE-RESPONSE UX CONTRACT QUALIFIED — READY FOR CHATGPT REVIEW`**

## 29. Instruction ChatGPT obligatoire

Relire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (SHA/blob de ce publish). Vérifier composition A/B, couverture body≡lead, rejet fuzzy, recommandation D1 B-if-not-covered, oracles V01–V20, fichiers, gates, R23/R24, verdict.

Synthesis-only → `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
Remote non actualisé → `REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED`.

# CORR-NAP-TEST16-01 — Review Pack FULL
# Cycle: 8 Delivery / implémentation — AKG-M5 L3-S2 — Lot CORR-NAP-TEST16-01
# Mode: mono-cycle | Critical Review ChatGPT prerequisite
# Generated: 2026-10-30T18:49:30Z

## A. Date/heure UTC
2026-10-30T18:49:30Z

## B. GO Morris consommé
Correction ciblée de la composition et de la couverture Option C
(CORR-NAP-TEST16-01), avec conservation complète du contenu narratif
et des garde-fous CORR-NAP-01/02/03/04.

AUTORISÉ consommé: investigation; worktree isolé; Product borné;
tests unitaires/UI; reproduction RO TEST-16 (fonctions pures);
Review Pack FULL; Review Handoff L3 borné.

NON AUTORISÉ respecté: pas de push/commit/PR/merge projet; pas de
modification main; pas de mutation bases LIVE; pas de restart BALISE;
pas d'OpenAI; pas de Cursor REAL; pas de TEST-15/17; pas d'écriture PRR.

## C. Git Truth initial et final

### Baseline
- Repository: mcleland147/sfia-workspace
- origin/main (local + ls-remote): ca1c9869f905b394808c953649910d60fbfcb984 / ca1c9869f905b394808c953649910d60fbfcb984
- Baseline ChatGPT attendue: ca1c9869f905b394808c953649910d60fbfcb984
- MATCH: YES

### Correction worktree
- Path: /Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr
- Branch: feat/akg-m5-nap-test16-coverage-corr
- HEAD: ca1c9869f905b394808c953649910d60fbfcb984 (= origin/main tip; uncommitted Product delta only)
- Status porcelain (all):
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
```
- Diff name-status (Product app):
```
M	projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
M	projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
M	projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
```

### LIVE BALISE runtime worktree (untouched)
- Path: /Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation
- Branch: feat/akg-m5-nora-adaptive-presentation
- HEAD historique: 1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a
- Attendue: 1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a
- MATCH: YES
- Port 3020:
```
COMMAND   PID   USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    58031 morris   12u  IPv6 0x9ee430c741cce155      0t0  TCP *:3020 (LISTEN)
```
- Process:
```
58031 next-server (v15.5.20)
```

### Review handoff remote tip (pre-publish)
- origin/sfia/review-handoff: 0b0c0cf574ab333bd3595db018a5828213bd6439
- Diagnostic tip attendu: 0b0c0cf574ab333bd3595db018a5828213bd6439
- MATCH pre-publish: YES

### Worktree list (excerpt)
```
/Users/morris/Projects/sfia-workspace                                                   980064c0 [qa/sfia-studio-p6-global-integrated-product-qa]
/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023                              0b0c0cf5 [sfia/review-handoff]
/Users/morris/Projects/sfia-workspace-akg-m5-l1-a09-audit-port-decoupling               0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d0-decision-readiness                   0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-local-oa-cutover                     d98b3930 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness                            1a380f22 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-q0-readonly                             94c7a30d (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5a-product-architecture-convergence          0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-delivery-p6-she-execute                           f1fc1af4 [delivery/sfia-studio-p6-single-human-execute]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d0                                 90bd0064 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d2-postmerge-truth-sync            241335ee (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3-s1-post-merge-roadmap-sync         266459c4 [docs/akg-m5-l3-s1-post-merge-roadmap-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3-s2-postmerge-r24-current           f884dda1 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3s2-r24-postmerge-capitalization     cf940d84 [docs/akg-m5-l3s2-r24-postmerge-capitalization]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-option-c-c14-r24-truth-sync       6e60d839 [docs/akg-m5-nap-option-c-c14-r24-truth-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-postmerge-convergence-p0              3a6b5e82 [docs/akg-m5-postmerge-convergence-p0]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-target-journey-requalification        80cae2f1 [docs/akg-m5-target-journey-requalification]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-ep-s2-08-proof-01                     485ec3cb [feat/akg-m5-ep-s2-08-proof-01]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l1-a09                                0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d1                                 d98b3930 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d1-o01                             90bd0064 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-activation-prep-bounded         cdc9909d [feat/akg-m5-l2-d2-activation-prep-bounded]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover                4647983a [feat/akg-m5-l2-d2-local-oa-cutover]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s1-generic-det-integration         de1fa7ae [feat/akg-m5-l3-s1-generic-det-integration]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity        73f0166c [feat/akg-m5-l3-s2-generic-proof-continuity]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr              ca1c9869 [feat/akg-m5-nap-test16-coverage-corr]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation            1c3a8d9e [feat/akg-m5-nora-adaptive-presentation]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-remove-repository-binding-docs-write  ffc033a7 [feat/akg-m5-remove-repository-binding-docs-write]
/Users/morris/Projects/sfia-workspace-l1-a09-delivery                                   6176a9d3 [feat/akg-m5-l1-a09-audit-port-decoupling]
/Users/morris/Projects/sfia-workspace-p6-she-greenfield-hqa-c9abdbc3                    c9abdbc3 (detached HEAD)

```

## D. Convergence Pre-check

Sources lues / applicables (guidance; method-candidate où indiqué):
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/checklists/sfia-validation-checklist.md
- CKC: 02-fifteen-cycles-synthetic-map.md (cycle 8 Delivery) — method-candidate
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- product-completion/01-product-completion-cadrage.md (C1)
- m5-product-transformation/05-m5-target-journey-and-trajectory-requalification.md
- Doctrine v3: 30, 32, 34, 35
- PRR CURRENT README + volumes 03/05/06/07/08/09 (lecture; pas d'écriture)

Alignement:
- Cycle 8 Delivery bornée sous L3-S2 Product/Nora continuity.
- Option C déjà ON MAIN (PR #628) + R24 doc (PR #629).
- Correction = composition de rendu uniquement; Truth C / Memory B / authority inchangés.
- Capacités: V3-F05 (présentation), V3-F02/F06 continuité, V3-F14 preuves/réserves.

## E. R23 architecture-informed

### Composants
- parseNoraAdaptivePresentation / shouldRenderAdaptivePresentation /
  contentFullyCoveredByPresentation / resolveAdaptiveAssistantRender
  (noraAdaptivePresentation.ts) — KEEP coverage strict; ADAPT decision modes.
- NoraAdaptivePresentationView — ADAPT: couche narrative canonique optionnelle.
- ConversationSurface — ADAPT: accepter mode adaptive_with_canonical.
- Persist/rehydrate Memory B, DTO Option C, Studio notices — KEEP.
- orchestrateTurn / schema / SQLite / actions — NON MODIFIÉS.

### Flux
assistant message → resolveAdaptiveAssistantRender →
  plain | adaptive | adaptive_with_canonical →
  ConversationSurface → NoraAdaptivePresentationView (projection ± canonical).

### Invariants (G01–G20)
Coverage reste égalité normalisée stricte (G03). Narrative canonique
préservée via canonicalNarrative (G01/G02). Négations/refus/réserves
restent dans le corps affiché (G04/G05). Notices Studio typed only (G06/G07).
Pas de CTA Product (G11). Invalid/null → plain (G12/G13). Pas de mutation
historique (G14). Pas d'OpenAI/REAL (G17). Pas de routes/authority (G18).

### Impacts
- UI composition only.
- Oracles CORR-NAP-02 T1–T4/T7/T11: mode plain → adaptive_with_canonical
  avec protection de contenu au moins équivalente (documenté).

### Couverture / gaps
- Tests unit+UI déterministes PASS (67).
- Browser LIVE BALISE: hors scope (gate Morris distinct).
- PRR R24 sync: préparé, non écrit (gate documentaire distinct).

## F. R24 — SEMANTIC IMPACT — RENDER COMPOSITION

Impact: OUI — comportement de rendu change lorsque coverage=false et DTO valide.

PRR sections candidates (à synchroniser sous GO documentaire distinct):
- Volume 03 — Flow F04 + Option C: documenter mode adaptive_with_canonical
  (projection + récit canonique) vs adaptive (coverage stricte) vs plain.
- Volume 08 — tests/preuves: oracles T1–T4/T7/T11 + T16-form; matrice T01–T20.
- Volume 09 — réserve/sortie: UX réserve TEST-16 partielle → candidate locale.
- README index: pointeur si table des modes de rendu.
- Volume 06: NO PERSISTENCE SEMANTIC IMPACT (aucun schéma/stockage modifié).

Contenu candidat (résumé):
« Lorsque presentation valide et contentFullyCoveredByPresentation=false,
Studio compose la projection structurée et le récit canonique complet
(visible par défaut), sans substituer lead au narrative. Coverage reste
stricte; aucune similarité floue. »

Source Product: resolveAdaptiveAssistantRender + NoraAdaptivePresentationView.

Nouvelle limite de preuve: DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE;
pas de claim LIVE browser PASS / EP-S2-08 / L3 COMPLETE.

Manifest/digest: impact éventuel si volumes 03/08/09 touchés — gate Morris.
Gate documentaire Morris RESTANT: OUI — ne pas écrire chemins PRR protégés ici.
Claim interdit: PRR SYNC COMPLETED.

## G. Diagnostic TEST-16 source
- Handoff: sfia/review-handoff @ 0b0c0cf5
- Blob: e411eb12ece110475dc700a6440a7f3a388461aa
- Verdict diagnostic: TEST-16 OPTION C ROOT CAUSE QUALIFIED
- Cause prouvée: coverage_false_body_ne_lead
- Faits: seq20/21, ltu:8e7720d6895b2faaff2a7003210dfff5,
  presentation VALID 4 blocs, narrative 1996, lead 176,
  shouldRender=true, coverage=false, mode=plain (avant)

## H. Problème avant correction
CORR-NAP-02 forçait mode=plain dès que body≠lead après normalisation,
jetant une projection structurée valide et affichant uniquement le texte
classique — UX réserve TEST-16 (PARTIAL).

## I. Solution retenue
Composition à deux couches dans le renderer existant:
1. Si DTO invalide/null → plain (inchangé).
2. Si DTO valide et coverage stricte → adaptive (inchangé; pas de redondance).
3. Si DTO valide et coverage=false → adaptive_with_canonical:
   projection structurée + canonicalNarrative (= body non-Studio) visible
   par défaut + studioAppendix typed.

Pas de second moteur. Pas de couverture floue. Pas de CTA. Pas de changement
serveur/DTO/SQLite.

## J. Alternatives rejetées
1. Similarité textuelle / inclusion unidirectionnelle / seuil de tokens —
   viole G03; risque de masquer négations (G04).
2. Supprimer le récit canonique et ne garder que les blocs —
   perte d'information; viole G01/G02.
3. Forcer lead = narrative côté serveur —
   hors scope; toucherait Truth/output; NON AUTORISÉ.
4. Disclosure collapsed by default pour le récit —
   risque de masquer réserves/conditions; contrat exige visible par défaut.
5. Nouveau système de rendu parallèle — interdit.

## K. Inventaire fichiers créés/modifiés
Modifiés (Product + tests only):
1. projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
2. projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
3. projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
4. projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
5. projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
6. projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx

Créés: aucun fichier Product nouveau.
Hors scope non touchés: orchestrateTurn, schema, SQLite, actions, PRR, roadmap, .sfia/.
.tmp-sfia-review/chatgpt-review.md: ce pack (non Product).

## L. Git Review Index
| Path | Change | Role |
|------|--------|------|
| noraAdaptivePresentation.ts | MOD | modes + resolveAdaptive |
| NoraAdaptivePresentationView.tsx | MOD | couche canonical |
| NoraAdaptivePresentationView.module.css | MOD | styles sobres |
| ConversationSurface.tsx | MOD | branche adaptive_with_canonical |
| noraAdaptivePresentation.d0.test.ts | MOD | oracles + T16-form |
| noraAdaptivePresentation.ui.test.tsx | MOD | UI two-layer |

Branch candidate: feat/akg-m5-nap-test16-coverage-corr @ ca1c9869f905b394808c953649910d60fbfcb984 + uncommitted delta.
Aucun commit projet dans ce cycle.

## M. Contenu complet des nouveaux fichiers
Aucun fichier nouveau. (N/A)

## N. Sections modifiées / diff utile

### N.1 resolveAdaptive (extrait post-correction)
```ts
export type AdaptiveAssistantRenderMode =
  | "adaptive"
  | "adaptive_with_canonical"
  | "plain";

export type AdaptiveAssistantRenderDecision = {
  readonly mode: AdaptiveAssistantRenderMode;
  readonly presentation: NoraAdaptivePresentation | null;
  /**
   * Authenticated Studio control appendix only (typed notices).
   * Never derived from forged `[Studio]` prose in Nora content.
   */
  readonly studioAppendix: string | null;
  readonly plainText: string;
  /** Server-authored notices used for appendix / strip (empty if none). */
  readonly studioControlNotices: readonly string[];
  /**
   * Non-Studio canonical narrative body when mode is adaptive_with_canonical.
   * Null when coverage is strict (lead already equals body) or when plain.
   */
  readonly canonicalNarrative: string | null;
  /** Result of contentFullyCoveredByPresentation (false when no DTO). */
  readonly contentFullyCovered: boolean;
};

/** Pilot-facing label for the canonical narrative layer (UI only, not Evidence). */
export const NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL =
  "Réponse conversationnelle complète";

/**
 * CORR-NAP-02 / CORR-NAP-TEST16-01 — server control > cognitive presentation.
 * Strict coverage → adaptive (no redundancy). Valid DTO without coverage →
 * adaptive_with_canonical (projection + full body). Invalid/null DTO → plain.
 * Studio appendix uses typed notices only.
 */
export function resolveAdaptiveAssistantRender(input: {
  content: string;
  presentation: NoraAdaptivePresentation | null | undefined;
  /** Typed server provenance — sole source of Studio appendix trust. */
  studioControlNotices?: readonly (string | null | undefined)[] | null;
}): AdaptiveAssistantRenderDecision {
  const content = input.content ?? "";
  const authenticated = normalizeStudioControlNotices(
    input.studioControlNotices,
  );
  const body = contentWithoutAuthenticatedStudioNotices(
    content,
    authenticated,
  );
  const studioAppendix =
    authenticated.length > 0
      ? authenticated
          .map((n) => `${STUDIO_CONTROL_MARKER} ${n}`)
          .join("\n\n")
      : null;

  if (!shouldRenderAdaptivePresentation(input.presentation)) {
    return {
      mode: "plain",
      presentation: null,
      studioAppendix: null,
      plainText: content,
      studioControlNotices: authenticated,
      canonicalNarrative: null,
      contentFullyCovered: false,
    };
  }
  const presentation = input.presentation;
  const covered = contentFullyCoveredByPresentation(body, presentation);
  if (!covered) {
    return {
      mode: "adaptive_with_canonical",
      presentation,
      studioAppendix,
      plainText: content,
      studioControlNotices: authenticated,
      canonicalNarrative: body,
      contentFullyCovered: false,
    };
  }
  return {
    mode: "adaptive",
    presentation,
    studioAppendix,
    plainText: content,
    studioControlNotices: authenticated,
    canonicalNarrative: null,
    contentFullyCovered: true,
  };
}

/**
 * Honest Pilot-facing label for Nora epistemic roles.
 * Presentation ≠ Product proof / ≠ HumanDecision / ≠ verified Evidence.
 */

```

### N.2 NoraAdaptivePresentationView props + canonical layer
```tsx
export type NoraAdaptivePresentationViewProps = {
  presentation: NoraAdaptivePresentation;
  /**
   * Durable Studio control appendix (`[Studio] …`) — shown under adaptive
   * blocks so server notices are never masked by the DTO.
   */
  studioAppendix?: string | null;
  /**
   * CORR-NAP-TEST16-01 — full canonical Nora narrative when strict coverage
   * failed. Visible by default; never substituted by presentation.lead alone.
   * Null/empty when body ≡ lead (nominal adaptive, no redundancy).
   */
  canonicalNarrative?: string | null;
  /** Scrubbed plain fallback when caller forces plain — unused in adaptive mode. */
  fallbackText?: string;
};

/**
 * Bounded adaptive renderer for Nora Option C presentation DTO.
 * No Product CTAs, no HTML injection, no governed action hooks.
 * CORR-NAP-01 — honest epistemic labels; Studio appendix never hidden.
 * CORR-NAP-TEST16-01 — optional canonical narrative layer when coverage fails.
 */
export function NoraAdaptivePresentationView({
  presentation,
  studioAppendix = null,
  canonicalNarrative = null,
}: NoraAdaptivePresentationViewProps): ReactElement {
  const appendix = (studioAppendix ?? "").trim();
  const narrative = (canonicalNarrative ?? "").trim();
  return (
    <div
      className={styles.root}
      data-testid="nora-adaptive-presentation"
      data-presentation-version={presentation.version}
      data-canonical-layer={narrative ? "visible" : "none"}
    >
      {presentation.eyebrow ? (
        <p className={styles.eyebrow}>{presentation.eyebrow}</p>
      ) : null}
      {presentation.title ? (
        <h3 className={styles.title}>{presentation.title}</h3>
      ) : null}
      {presentation.lead ? (
        <p className={styles.lead}>{presentation.lead}</p>
      ) : null}
      <div className={styles.blocks}>
        {presentation.blocks.map((block, index) => renderBlock(block, index))}
      </div>
      {narrative ? (
        <section
          className={styles.canonicalNarrative}
          aria-label={NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL}
          data-testid="nora-adaptive-canonical-narrative"
        >
          <h4 className={styles.canonicalNarrativeLabel}>
            {NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL}
          </h4>
          <p className={styles.canonicalNarrativeBody}>{narrative}</p>
        </section>
      ) : null}
      <p
        className={styles.epistemicHonesty}
        data-testid="nora-adaptive-epistemic-honesty"
      >
        {NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE}
      </p>
      {(() => {
        const note = sanitizeProvenanceNote(presentation.provenanceNote);
        return note ? (
          <p className={styles.provenance}>{note}</p>
        ) : null;
      })()}
      <p className={styles.noAction}>
        {NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE}
      </p>
      {appendix ? (
        <div
          className={styles.studioAppendix}
          role="status"
          data-testid="nora-adaptive-studio-appendix"
        >
          {appendix.split(/\n\n+/).map((para, i) => (
            <p key={`studio-${i}`} className={styles.studioAppendixLine}>
              {para}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

```

### N.3 CSS canonicalNarrative
```css
.canonicalNarrative {
  display: flex;
  flex-direction: column;
  gap: var(--pm6-space-2);
  margin: 0;
  padding: var(--pm6-space-3);
  border-radius: var(--pm6-radius-md);
  border: 1px solid var(--pm6-border-soft);
  background: var(--pm6-surface-sunken);
  max-width: 100%;
  overflow-wrap: anywhere;
}

.canonicalNarrativeLabel {
  margin: 0;
  font-size: var(--pm6-text-caption);
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--pm6-muted-strong);
  line-height: 1.35;
}

.canonicalNarrativeBody {
  margin: 0;
  font-size: var(--pm6-text-body);
  color: var(--pm6-ink);
  line-height: 1.5;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}


```

### N.4 ConversationSurface decision branch
```tsx
}
                  const decision = resolveAdaptiveAssistantRender({
                    content: message.content,
                    presentation: message.adaptivePresentation,
                    studioControlNotices: message.studioControlNotices,
                  });
                  if (
                    (decision.mode === "adaptive" ||
                      decision.mode === "adaptive_with_canonical") &&
                    decision.presentation
                  ) {
                    return (
                      <NoraAdaptivePresentationView
                        presentation={decision.presentation}
                        studioAppendix={deci
```

### N.5 Product diff complet (6 files)
```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
index a69367ec..582a5464 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts
@@ -492,14 +492,21 @@ describe("CORR-NAP-01 — Studio control visibility + epistemic honesty", () =>
     expect(d.studioAppendix).toMatch(/Limite d'exécution/);
   });

-  it("falls back to plain when non-Studio body is not covered by DTO", () => {
+  it("CORR-NAP-TEST16-01 — uncovered body keeps projection + full canonical (not plain discard)", () => {
     const dto = parseNoraAdaptivePresentation(VALID_PRESENTATION)!;
+    const content =
+      "Corps entièrement différent ajouté après le modèle, non projeté dans le DTO.";
     const d = resolveAdaptiveAssistantRender({
-      content:
-        "Corps entièrement différent ajouté après le modèle, non projeté dans le DTO.",
+      content,
       presentation: dto,
     });
-    expect(d.mode).toBe("plain");
+    // Oracle change (CORR-NAP-TEST16-01): coverage failure no longer forces
+    // mode=plain / discards a valid DTO. Equivalent protection: full body
+    // remains in canonicalNarrative + plainText; projection stays visible.
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.contentFullyCovered).toBe(false);
+    expect(d.presentation).not.toBeNull();
+    expect(d.canonicalNarrative).toContain("Corps entièrement différent");
     expect(d.plainText).toContain("Corps entièrement différent");
   });

@@ -530,23 +537,29 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
     })!;
   }

-  it("T1 — DTO phrase A + content A+B → B remains visible (plain)", () => {
+  it("T1 — DTO phrase A + content A+B → B remains visible (canonical layer)", () => {
     const dto = dtoWithLead(leadA);
     const content = `${leadA} Phrase B déterminante supplémentaire.`;
     const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
     expect(contentFullyCoveredByPresentation(content, dto)).toBe(false);
-    expect(d.mode).toBe("plain");
+    // Oracle change: adaptive_with_canonical (not plain). Phrase B must stay
+    // in canonicalNarrative; projection retained; no loss vs prior plain path.
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.presentation).not.toBeNull();
+    expect(d.canonicalNarrative).toContain("Phrase B déterminante");
     expect(d.plainText).toContain("Phrase B déterminante");
   });

-  it("T2 — 75% lexical overlap omitting negation → not covered", () => {
+  it("T2 — 75% lexical overlap omitting negation → not covered; negation visible", () => {
     const dto = dtoWithLead(
       "Le contrat est prêt et peut être préparé sans réserve majeure.",
     );
     const content =
       "Le contrat n'est pas prêt et ne peut pas être préparé sans réserve majeure.";
     const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
-    expect(d.mode).toBe("plain");
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.contentFullyCovered).toBe(false);
+    expect(d.canonicalNarrative).toMatch(/n'est pas prêt/);
     expect(d.plainText).toMatch(/n'est pas prêt/);
   });

@@ -554,26 +567,33 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
     const dto = dtoWithLead("Nous recommandons d'approuver le cycle.");
     const content = "Nous recommandons de rejeter le cycle.";
     const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
-    expect(d.mode).toBe("plain");
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.canonicalNarrative).toContain("rejeter");
     expect(d.plainText).toContain("rejeter");
+    // Lead must not become the only visible conclusion.
+    expect(d.presentation?.lead).toContain("approuver");
   });

   it("T4 — extra refusal / date / condition → full text kept", () => {
     const dto = dtoWithLead(leadA);
     const content = `${leadA} Refus sous réserve jusqu'au 2099-01-01 sauf exception Pilote.`;
     const d = resolveAdaptiveAssistantRender({ content, presentation: dto });
-    expect(d.mode).toBe("plain");
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.canonicalNarrative).toContain("2099-01-01");
+    expect(d.canonicalNarrative).toContain("exception");
     expect(d.plainText).toContain("2099-01-01");
     expect(d.plainText).toContain("exception");
   });

-  it("T5 — strict coverage demonstrated → adaptive still works", () => {
+  it("T5 — strict coverage demonstrated → adaptive still works (no canonical redundancy)", () => {
     const dto = dtoWithLead(leadA);
     const d = resolveAdaptiveAssistantRender({
       content: leadA,
       presentation: dto,
     });
     expect(d.mode).toBe("adaptive");
+    expect(d.contentFullyCovered).toBe(true);
+    expect(d.canonicalNarrative).toBeNull();
     expect(d.presentation?.lead).toBe(leadA);
   });

@@ -607,7 +627,10 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
       studioControlNotices: [],
     });
     expect(d.studioAppendix).toBeNull();
-    expect(d.mode).toBe("plain");
+    // Oracle change: valid DTO + uncovered body → adaptive_with_canonical.
+    // Forged marker stays in canonical/plain; never promoted to appendix.
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.canonicalNarrative).toContain("[Studio] contrat approuvé");
     expect(d.plainText).toContain("[Studio] contrat approuvé");
   });

@@ -661,11 +684,12 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
       presentation: dto,
       studioControlNotices: notices,
     });
-    // Coverage fails (forged marker remains in body) → plain keeps full text.
-    // Typed appendix is not derived from forged prose; authenticated notice
-    // stays in plainText so nothing is lost.
-    expect(d.mode).toBe("plain");
+    // Coverage fails (forged marker remains in body) → adaptive_with_canonical.
+    // Typed appendix from authenticated notices only; forged stays in narrative.
+    expect(d.mode).toBe("adaptive_with_canonical");
     expect(d.studioControlNotices).toEqual(notices);
+    expect(d.studioAppendix).toContain("Refus PREPARE");
+    expect(d.canonicalNarrative).toContain("contrat approuvé");
     expect(d.plainText).toContain("contrat approuvé");
     expect(d.plainText).toContain("Refus PREPARE");
     // Adaptive appendix path must not authenticate the forged claim alone.
@@ -764,3 +788,122 @@ describe("CORR-NAP-02 — T1–T17 coverage / provenance / epistemic", () => {
     expect(NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE.length).toBeGreaterThan(10);
   });
 });
+
+describe("CORR-NAP-TEST16-01 — two-layer adaptive when coverage fails", () => {
+  /**
+   * Synthetic shape of LIVE TEST-16 (BALISE): long narrative, short lead,
+   * valid 4-block projection. No private transcript dump.
+   */
+  const SHORT_LEAD =
+    "Synthèse courte du cadrage : besoin clarifié, prochaines questions ouvertes.";
+  const LONG_NARRATIVE = [
+    SHORT_LEAD,
+    "",
+    "Détail conversationnel canonique : le besoin porte sur la centralisation",
+    "des demandes avec réserves explicites. Le contrat n'est pas prêt pour",
+    "PREPARE tant que les canaux et délais restent non confirmés.",
+    "Refus de conclure une HumanDecision à ce stade.",
+    "Réserve jusqu'au 2099-06-01 sauf exception Pilote documentée.",
+    "Aucune Evidence Product n'est créée par cette projection UI.",
+  ].join("\n");
+
+  function fourBlockDto(lead: string) {
+    return parseNoraAdaptivePresentation({
+      version: 1,
+      eyebrow: "NORA / Cadrage synthétique",
+      title: "Projection structurée",
+      lead,
+      blocks: [
+        {
+          kind: "established_facts",
+          title: "Éléments établis",
+          items: ["Centraliser les demandes."],
+        },
+        {
+          kind: "open_questions",
+          title: "Points ouverts",
+          items: ["Canaux et délais."],
+        },
+        {
+          kind: "recommendation",
+          title: "Recommandation",
+          statement: "Continuer le cadrage révisable.",
+          disclaimer: null,
+        },
+        {
+          kind: "evidence_reserves",
+          title: "Réserves",
+          evidenceItems: ["Observation transcript locale."],
+          reserveItems: ["Preuve Product non établie."],
+        },
+      ],
+      provenanceNote: null,
+      noGovernedActionNote: null,
+    })!;
+  }
+
+  it("T16-form — long narrative / short lead / 4 blocks → adaptive_with_canonical", () => {
+    const dto = fourBlockDto(SHORT_LEAD);
+    expect(shouldRenderAdaptivePresentation(dto)).toBe(true);
+    expect(dto.blocks).toHaveLength(4);
+    expect(LONG_NARRATIVE.length).toBeGreaterThan(SHORT_LEAD.length * 2);
+    expect(contentFullyCoveredByPresentation(LONG_NARRATIVE, dto)).toBe(false);
+
+    const d = resolveAdaptiveAssistantRender({
+      content: LONG_NARRATIVE,
+      presentation: dto,
+    });
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.contentFullyCovered).toBe(false);
+    expect(d.presentation?.blocks).toHaveLength(4);
+    expect(d.canonicalNarrative).toBe(LONG_NARRATIVE);
+    expect(d.canonicalNarrative).toContain("n'est pas prêt");
+    expect(d.canonicalNarrative).toContain("2099-06-01");
+    expect(d.canonicalNarrative).toContain("HumanDecision");
+    expect(d.plainText).toBe(LONG_NARRATIVE);
+  });
+
+  it("T10 — presentation null → plain intact", () => {
+    const d = resolveAdaptiveAssistantRender({
+      content: LONG_NARRATIVE,
+      presentation: null,
+    });
+    expect(d.mode).toBe("plain");
+    expect(d.presentation).toBeNull();
+    expect(d.canonicalNarrative).toBeNull();
+    expect(d.plainText).toBe(LONG_NARRATIVE);
+  });
+
+  it("T11 — invalid presentation → plain intact", () => {
+    const d = resolveAdaptiveAssistantRender({
+      content: LONG_NARRATIVE,
+      presentation: parseNoraAdaptivePresentation({ version: 1 }),
+    });
+    expect(d.mode).toBe("plain");
+    expect(d.presentation).toBeNull();
+    expect(d.canonicalNarrative).toBeNull();
+  });
+
+  it("strict coverage still avoids canonical redundancy", () => {
+    const dto = fourBlockDto(SHORT_LEAD);
+    const d = resolveAdaptiveAssistantRender({
+      content: SHORT_LEAD,
+      presentation: dto,
+    });
+    expect(d.mode).toBe("adaptive");
+    expect(d.contentFullyCovered).toBe(true);
+    expect(d.canonicalNarrative).toBeNull();
+  });
+
+  it("coverage gate remains strict equality (no fuzzy token pass)", () => {
+    const dto = fourBlockDto(SHORT_LEAD);
+    const almost = `${SHORT_LEAD} x`;
+    expect(contentFullyCoveredByPresentation(almost, dto)).toBe(false);
+    const d = resolveAdaptiveAssistantRender({
+      content: almost,
+      presentation: dto,
+    });
+    expect(d.mode).toBe("adaptive_with_canonical");
+    expect(d.canonicalNarrative).toContain("x");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
index a37f5eec..c1e26ed1 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx
@@ -8,6 +8,7 @@ import { cleanup, render, screen, within } from "@testing-library/react";
 import { afterEach, describe, expect, it, vi } from "vitest";
 import { NoraAdaptivePresentationView } from "@/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView";
 import {
+  NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL,
   NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
   NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
   NORA_ADAPTIVE_RECOMMENDATION_DISCLAIMER,
@@ -273,7 +274,69 @@ describe("ConversationSurface adaptive message path", () => {
     });
     render(<ConversationSurface controller={controller} />);
     expect(screen.queryByTestId("nora-adaptive-studio-appendix")).toBeNull();
-    expect(screen.getByText(/contrat approuvé/)).toBeTruthy();
+    // CORR-NAP-TEST16-01: uncovered body keeps adaptive + canonical layer.
+    expect(screen.getByTestId("nora-adaptive-presentation")).toBeTruthy();
+    expect(
+      screen.getByTestId("nora-adaptive-canonical-narrative"),
+    ).toHaveTextContent(/contrat approuvé/);
+  });
+
+  it("CORR-NAP-TEST16-01 — long narrative / short lead → blocks + full canonical visible", () => {
+    const presentation = balisePresentation();
+    const shortLead = presentation.lead!;
+    const longNarrative = [
+      shortLead,
+      "",
+      "Extension canonique : le contrat n'est pas prêt.",
+      "Refus explicite de PREPARE jusqu'au 2099-01-01 sauf exception Pilote.",
+      "Cette phrase critique ne figure pas dans le lead.",
+    ].join("\n");
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content: longNarrative,
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    const root = screen.getByTestId("nora-adaptive-presentation");
+    expect(root.getAttribute("data-canonical-layer")).toBe("visible");
+    expect(
+      within(root).getByText(
+        honestBlockTitle("established_facts", "Éléments établis"),
+      ),
+    ).toBeTruthy();
+    const canonical = within(root).getByTestId(
+      "nora-adaptive-canonical-narrative",
+    );
+    expect(canonical).toHaveTextContent(NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL);
+    expect(canonical).toHaveTextContent(/n'est pas prêt/);
+    expect(canonical).toHaveTextContent(/2099-01-01/);
+    expect(canonical).toHaveTextContent(/phrase critique/);
+    expect(within(root).queryByRole("button")).toBeNull();
+  });
+
+  it("CORR-NAP-TEST16-01 — strict coverage omits canonical redundancy", () => {
+    const presentation = balisePresentation();
+    const controller = stubController({
+      messages: [
+        {
+          id: "a1",
+          role: "assistant",
+          content: presentation.lead!,
+          adaptivePresentation: presentation,
+        },
+      ],
+    });
+    render(<ConversationSurface controller={controller} />);
+    const root = screen.getByTestId("nora-adaptive-presentation");
+    expect(root.getAttribute("data-canonical-layer")).toBe("none");
+    expect(
+      screen.queryByTestId("nora-adaptive-canonical-narrative"),
+    ).toBeNull();
   });

   it("T19 — incomplete banner suppressed when last assistant has durable notice", () => {
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 00836627..a315d14b 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -624,13 +624,15 @@ export function ConversationSurface({
                     studioControlNotices: message.studioControlNotices,
                   });
                   if (
-                    decision.mode === "adaptive" &&
+                    (decision.mode === "adaptive" ||
+                      decision.mode === "adaptive_with_canonical") &&
                     decision.presentation
                   ) {
                     return (
                       <NoraAdaptivePresentationView
                         presentation={decision.presentation}
                         studioAppendix={decision.studioAppendix}
+                        canonicalNarrative={decision.canonicalNarrative}
                         fallbackText={formatNoraAssistantDisplayText(
                           message.content,
                         )}
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
index 17250b3b..72490c99 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.module.css
@@ -218,6 +218,37 @@
   line-height: 1.4;
 }

+.canonicalNarrative {
+  display: flex;
+  flex-direction: column;
+  gap: var(--pm6-space-2);
+  margin: 0;
+  padding: var(--pm6-space-3);
+  border-radius: var(--pm6-radius-md);
+  border: 1px solid var(--pm6-border-soft);
+  background: var(--pm6-surface-sunken);
+  max-width: 100%;
+  overflow-wrap: anywhere;
+}
+
+.canonicalNarrativeLabel {
+  margin: 0;
+  font-size: var(--pm6-text-caption);
+  font-weight: 600;
+  letter-spacing: 0.01em;
+  color: var(--pm6-muted-strong);
+  line-height: 1.35;
+}
+
+.canonicalNarrativeBody {
+  margin: 0;
+  font-size: var(--pm6-text-body);
+  color: var(--pm6-ink);
+  line-height: 1.5;
+  white-space: pre-wrap;
+  overflow-wrap: anywhere;
+}
+
 .epistemicHonesty {
   margin: 0;
   font-size: var(--pm6-text-caption);
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
index 69111019..dd8c0b63 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx
@@ -6,6 +6,7 @@ import type {
   NoraAdaptivePresentationBlock,
 } from "@/lib/nora-cognitive-runtime/noraAdaptivePresentation";
 import {
+  NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL,
   NORA_ADAPTIVE_EPISTEMIC_HONESTY_NOTE,
   NORA_ADAPTIVE_NO_GOVERNED_ACTION_NOTE,
   honestBlockTitle,
@@ -247,6 +248,12 @@ export type NoraAdaptivePresentationViewProps = {
    * blocks so server notices are never masked by the DTO.
    */
   studioAppendix?: string | null;
+  /**
+   * CORR-NAP-TEST16-01 — full canonical Nora narrative when strict coverage
+   * failed. Visible by default; never substituted by presentation.lead alone.
+   * Null/empty when body ≡ lead (nominal adaptive, no redundancy).
+   */
+  canonicalNarrative?: string | null;
   /** Scrubbed plain fallback when caller forces plain — unused in adaptive mode. */
   fallbackText?: string;
 };
@@ -255,17 +262,21 @@ export type NoraAdaptivePresentationViewProps = {
  * Bounded adaptive renderer for Nora Option C presentation DTO.
  * No Product CTAs, no HTML injection, no governed action hooks.
  * CORR-NAP-01 — honest epistemic labels; Studio appendix never hidden.
+ * CORR-NAP-TEST16-01 — optional canonical narrative layer when coverage fails.
  */
 export function NoraAdaptivePresentationView({
   presentation,
   studioAppendix = null,
+  canonicalNarrative = null,
 }: NoraAdaptivePresentationViewProps): ReactElement {
   const appendix = (studioAppendix ?? "").trim();
+  const narrative = (canonicalNarrative ?? "").trim();
   return (
     <div
       className={styles.root}
       data-testid="nora-adaptive-presentation"
       data-presentation-version={presentation.version}
+      data-canonical-layer={narrative ? "visible" : "none"}
     >
       {presentation.eyebrow ? (
         <p className={styles.eyebrow}>{presentation.eyebrow}</p>
@@ -279,6 +290,18 @@ export function NoraAdaptivePresentationView({
       <div className={styles.blocks}>
         {presentation.blocks.map((block, index) => renderBlock(block, index))}
       </div>
+      {narrative ? (
+        <section
+          className={styles.canonicalNarrative}
+          aria-label={NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL}
+          data-testid="nora-adaptive-canonical-narrative"
+        >
+          <h4 className={styles.canonicalNarrativeLabel}>
+            {NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL}
+          </h4>
+          <p className={styles.canonicalNarrativeBody}>{narrative}</p>
+        </section>
+      ) : null}
       <p
         className={styles.epistemicHonesty}
         data-testid="nora-adaptive-epistemic-honesty"
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
index d6422018..826d525d 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraAdaptivePresentation.ts
@@ -710,8 +710,23 @@ export function contentFullyCoveredByPresentation(
   return nBody === nLead;
 }

+/**
+ * CORR-NAP-TEST16-01 — render modes:
+ * - adaptive: strict coverage (body ≡ lead) → structured only, no narrative redundancy
+ * - adaptive_with_canonical: valid DTO but body ≠ lead → structured + full canonical body
+ * - plain: no/invalid DTO → classic text (unchanged)
+ *
+ * Coverage stays strict (CORR-NAP-02). Incomplete coverage never substitutes
+ * the lead for the narrative; it composes both layers instead of discarding
+ * a valid projection.
+ */
+export type AdaptiveAssistantRenderMode =
+  | "adaptive"
+  | "adaptive_with_canonical"
+  | "plain";
+
 export type AdaptiveAssistantRenderDecision = {
-  readonly mode: "adaptive" | "plain";
+  readonly mode: AdaptiveAssistantRenderMode;
   readonly presentation: NoraAdaptivePresentation | null;
   /**
    * Authenticated Studio control appendix only (typed notices).
@@ -721,12 +736,24 @@ export type AdaptiveAssistantRenderDecision = {
   readonly plainText: string;
   /** Server-authored notices used for appendix / strip (empty if none). */
   readonly studioControlNotices: readonly string[];
+  /**
+   * Non-Studio canonical narrative body when mode is adaptive_with_canonical.
+   * Null when coverage is strict (lead already equals body) or when plain.
+   */
+  readonly canonicalNarrative: string | null;
+  /** Result of contentFullyCoveredByPresentation (false when no DTO). */
+  readonly contentFullyCovered: boolean;
 };

+/** Pilot-facing label for the canonical narrative layer (UI only, not Evidence). */
+export const NORA_ADAPTIVE_CANONICAL_NARRATIVE_LABEL =
+  "Réponse conversationnelle complète";
+
 /**
- * CORR-NAP-02 — server control > cognitive presentation.
- * Adaptive only when non-Studio body is strictly covered by presentation.lead;
- * otherwise full plain text (no loss). Studio appendix uses typed notices only.
+ * CORR-NAP-02 / CORR-NAP-TEST16-01 — server control > cognitive presentation.
+ * Strict coverage → adaptive (no redundancy). Valid DTO without coverage →
+ * adaptive_with_canonical (projection + full body). Invalid/null DTO → plain.
+ * Studio appendix uses typed notices only.
  */
 export function resolveAdaptiveAssistantRender(input: {
   content: string;
@@ -756,16 +783,21 @@ export function resolveAdaptiveAssistantRender(input: {
       studioAppendix: null,
       plainText: content,
       studioControlNotices: authenticated,
+      canonicalNarrative: null,
+      contentFullyCovered: false,
     };
   }
   const presentation = input.presentation;
-  if (!contentFullyCoveredByPresentation(body, presentation)) {
+  const covered = contentFullyCoveredByPresentation(body, presentation);
+  if (!covered) {
     return {
-      mode: "plain",
-      presentation: null,
-      studioAppendix: null,
+      mode: "adaptive_with_canonical",
+      presentation,
+      studioAppendix,
       plainText: content,
       studioControlNotices: authenticated,
+      canonicalNarrative: body,
+      contentFullyCovered: false,
     };
   }
   return {
@@ -774,6 +806,8 @@ export function resolveAdaptiveAssistantRender(input: {
     studioAppendix,
     plainText: content,
     studioControlNotices: authenticated,
+    canonicalNarrative: null,
+    contentFullyCovered: true,
   };
 }


```

## O. Matrice T01–T20

| ID | Propriété | Preuve | Résultat |
|----|-----------|--------|----------|
| T01 | content==lead → adaptive nominal | unit T5 + UI strict coverage | PASS |
| T02 | narrative longue / lead court → structured+full | T16-form + UI TEST16 | PASS |
| T03 | contradiction lead/body visible | unit T3 | PASS |
| T04 | négation seulement dans récit | unit T2 | PASS |
| T05 | refus absent du lead | unit T4 | PASS |
| T06 | réserve date/exception | unit T4 + T16-form | PASS |
| T07 | faux [Studio] → pas de provenance | unit T7 + UI T7 | PASS |
| T08 | vraie notice Studio distincte | CORR-NAP-01 B/C/D + UI | PASS |
| T09 | STOP / incomplete notices | CORR-NAP-01 C/D + UI T19 | PASS |
| T10 | presentation=null → plain | TEST16 T10 | PASS |
| T11 | presentation invalide → plain | TEST16 T11 | PASS |
| T12 | lead absent / projection | coverage false → canonical; historic plain path kept for null DTO | PASS |
| T13 | recommendation disclaimer | unit T15/T17 + UI | PASS |
| T14 | evidence_reserves pas Evidence Product | honest labels + 4-block dto | PASS |
| T15 | rehydration même décision | unit T6 | PASS |
| T16 | forme BALISE synthétique | T16-form | PASS |
| T17 | aucun CTA Product | UI queryByRole button null | PASS |
| T18 | tables/listes/sections stables | UI comparison + BALISE blocks | PASS |
| T19 | mobile/overflow CSS overflow-wrap | CSS canonicalNarrative | PASS (static) |
| T20 | interaction visuelle sans effet métier | pas de nouveaux boutons/actions | PASS |

Oracle changes documentés (équivalence de protection):
- T1/T2/T3/T4/T7/T11 + « falls back to plain… »: mode attendu
  adaptive_with_canonical; contenu critique toujours dans
  canonicalNarrative et plainText; projection conservée.

## P. Résultats exacts des commandes exécutées
- pwd/git truth: origin/main = ca1c9869… (MATCH)
- Worktree isolé: feat/akg-m5-nap-test16-coverage-corr @ ca1c9869
- npm ci (isolated app only; LIVE non touché)
- vitest (3 files): 67 passed
- vitest -t T16-form: 1 passed
- tsc --noEmit: exit 0
- eslint (3 Product files): exit 0
- lsof :3020 → PID 58031 listening (LIVE intact)
- git diff scope: 6 Product files only (+ review pack tmp)

### Vitest output (tail)
```

 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr/projects/sfia-studio/app

 ✓ __tests__/nora-cognitive-runtime/noraAdaptivePresentation.d0.test.ts (39 tests) 42ms
 ✓ __tests__/platform/ai/fakeNapQaPresentation.d0.test.ts (9 tests) 3ms
 ✓ __tests__/pre-m6-product-ui/noraAdaptivePresentation.ui.test.tsx (19 tests) 97ms

 Test Files  3 passed (3)
      Tests  67 passed (67)
   Start at  19:47:29
   Duration  605ms (transform 323ms, setup 73ms, collect 562ms, tests 143ms, environment 262ms, prepare 78ms)


```

## Q. Résultats des tests existants
- noraAdaptivePresentation.d0.test.ts: 39 PASS (incl. CORR-NAP-01/02 + TEST16)
- noraAdaptivePresentation.ui.test.tsx: 19 PASS
- fakeNapQaPresentation.d0.test.ts: 9 PASS (adaptive covered BALISE fake)
- Aucun test historique critique affaibli: assertions de contenu renforcées.

## R. Absence de régression d'autorité
- Pas de HumanDecision / Evidence Product / CTA gouverné créé.
- Notices Studio typed only; forged [Studio] non promu.
- Recommendation disclaimer Studio-owned conservé.
- Cognitive STOP / incomplete notices toujours visibles.
- Routes Product / Confirmation / PREPARE / Execute: non modifiés.

## S. Fake/Real Qualification
- Applicable: OUI
- Niveau: DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE
- Reproduction locale défaut TEST-16 (forme synthétique): OUI
- Préservation texte complet: OUI
- G-REAL: NOT GRANTED
- Hors scope: LIVE browser candidate, OpenAI, Cursor REAL, EP-S2-08, L3 COMPLETE
- Flag REAL=1 runtime historique: inchangé (non GO d'exécution)

## T. Risques et réserves
1. Duplication visuelle lead ⊂ narrative lorsque coverage échoue
   (accepté pour fidélité; pas de diff sémantique flou).
2. Validation navigateur LIVE BALISE non faite (gate distinct).
3. R24 PRR non synchronisé (gate documentaire distinct).
4. EC TEST-15 BALISE toujours non confirmé (hors scope).
5. Candidate non commitée sur branche projet (gate commit distinct).

## U. Dette temporaire / exit
Dette: R24 PRR sections 03/08/09 non écrites; browser LIVE non validé.
Exit: GO documentaire R24 + GO intégration/PR + GO reprise BALISE TEST-17.

## V. Runtime BALISE inchangé — preuves
- PID 58031 next-server écoute :3020
- CWD/HEAD LIVE: /Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation @ 1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a
- Aucun restart; aucun rebuild .next LIVE; aucun npm dans LIVE
- Correction worktree distinct: /Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr

## W. Absence de mutation SQLite historiques
- Aucun openProductSqlite / UPDATE / INSERT / ALTER
- Replay via fonctions pures + fixtures synthétiques uniquement
- Pas de copie de DB dans le dépôt

## X. Aucun changement serveur non autorisé
- orchestrateTurn / actions / schema / outputType / SQLite: untouched
- package.json / lock: untouched
- Pas de nouvelle dépendance

## Y. Gates Morris restants
1. Critical Review ChatGPT de ce pack/handoff
2. Gate commit projet (si GO) sur feat/akg-m5-nap-test16-coverage-corr
3. Gate documentaire R24 PRR sync
4. Gate PR/intégration (distinct)
5. Gate validation navigateur / reprise BALISE (TEST-17) — distinct
6. Pas de G-REAL

## Z. Verdict unique et prochaine action

**LOCAL DELIVERY CANDIDATE — READY FOR CHATGPT CRITICAL REVIEW**

Prochaine action: ChatGPT relit le handoff distant
sfia-review-handoff/latest-chatgpt-review.md (post-publish),
vérifie blob/commit, invariants, T01–T20, absence d'effet LIVE,
puis rend le Critical Review. Ne pas lancer TEST-17 / ne pas
relancer BALISE / ne pas PR sans GO Morris distinct.

---
END OF REVIEW PACK FULL — CORR-NAP-TEST16-01

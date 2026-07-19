# Review pack — SFIA Studio POC Increment A (Delivery)

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 23:22:51 CEST |
| **Cycle** | 8 — Delivery / implémentation · Incrément A |
| **Profil** | Standard |
| **Typologie** | EVOL / DELIVERY / POC / UI MOCK |
| **GO Morris consommé** | G-VS-DEL-A — implémentation locale Increment A |
| **Branche** | `delivery/sfia-studio-poc-increment-a` (**locale — non poussée**) |
| **HEAD / origin/main** | `e7502bf2f1791cc4b9639cc1949006d888931f1c` = `e7502bf2f1791cc4b9639cc1949006d888931f1c` (`e7502bf…`) |
| **Verdict** | `SFIA STUDIO INCREMENT A IMPLEMENTED — MORRIS VISUAL AND FUNCTIONAL VALIDATION REQUIRED` |

---

## 1. Truth Check

OK — fetch · main FF `e7502bf…` · docs 32–40 présents · staged vide · branche `delivery/sfia-studio-poc-increment-a` créée · aucun fichier versionné étranger hors app · `.tmp` hors versionnement.

Working tree initial : `?? .tmp-sfia-review/` uniquement avant delivery.

---

## 2. Sources Git consultées

- Template + routing guide
- Docs 32–40 (fonctionnel, UX, backlog Increment A)
- `projects/sfia-studio/app/**` (shell, 4 routes, fixtures, tests)
- `package.json` scripts (lecture)

## 3. Frames Figma consultées (MCP, lecture seule)

| Frame | nodeId | Dimensions |
|-------|--------|------------|
| Page UX-B | 51:2 | page |
| VS-UX-01 | 51:3 | **1440×1024** |
| VS-UX-02 | 51:139 | 1440×1024 |
| VS-UX-03 | 51:277 | 1440×1024 |
| VS-UX-04 | 51:415 | **1440×1024** (screenshot MCP) |
| VS-UX-05…10 | 51:540…51:1204 | 1440×1024 |
| VAR Loading | 52:2 | **720×420** |
| VAR Erreur | 52:10 | 720×420 |
| VAR STOP | 52:18 | 720×420 |
| VAR GO invalide | 52:26 | 720×420 |

Aucune frame modifiée.

Références locales : `.tmp-sfia-review/figma-increment-a/`

---

## 4. Readiness Light (avant code — consolidée)

### Routes (4)
`/nouvelle-demande` · `/decision` · `/cycle-actif` · `/synthese`

### Réutilisable
StudioShell · Topbar · UtilityRail · CopilotPanel · CtaButton · StatusPill · tokens.css · fixtures existantes (conservées)

### Fixtures existantes
cycles · gates · evidence · git-status · pendingMorrisDecision

### Navigation
Rail 4 liens + brand · tabs flush · **pas** de switcher d’état VS avant Increment A

### Fichiers envisagés / réalisés
- `fixtures/vertical-slice.ts`
- `lib/vertical-slice/*` + `VsDemoContext`
- `components/vertical-slice/*`
- `features/*/Vs*Screen.tsx` + wrappers screens
- tests unitaires + e2e Increment A
- `CtaButton` danger + a11y props

### Protégés (non modifiés)
harness/** · docs 01–40 · prompts · method · .github · package.json · lock · Figma

### Écarts runtime P0 vs Figma VS (avant)
P0 = portfolio / 3 options gate (GO/CORRIGER/STOP) · pas de 10 états · pas Abandonner · synthèse multi-projet

### Proposition minimale
États via query `?vs=` + sélecteur POC · contenu VS dans 4 routes · fixtures mock · **aucune** nouvelle dépendance · **aucune** nouvelle route · **pas** d’adaptateur

### Confirmation dépendances
**Aucune nouvelle dépendance installée.**

---

## 5. Contrat visuel avant code

- Réf. **1440×1024** ; shell rail/topbar/canvas/copilote
- Tokens existants (blue/purple/green/orange/pink)
- IDs + source statut visibles
- CTA primaire / secondaire / **danger textuel** pour Abandonner
- Loading : phase + compteur `n / À définir` + no retry · pas de fausse barre
- Erreur fail-closed · STOP ≠ NO-GO ≠ Abandonner · GO invalide bandeau
- Clôture slice-only · interdits MVP/prod/portfolio
- Focus clavier / noms accessibles sur Abandonner

---

## 6. Fichiers créés / modifiés

### Modifiés
- `components/ui/CtaButton.tsx` · `cta-button.module.css`
- `features/*/…Screen.tsx` (wrappers VS)
- `fixtures/index.ts`
- `app/synthese/page.tsx` (copy copilote slice-only)

### Créés
- `fixtures/vertical-slice.ts`
- `lib/vertical-slice/{types,mapping,VsDemoContext,index}.ts(x)`
- `components/vertical-slice/{VsDemoRoot,VsDemoChrome,VsShared,vs-*.css}`
- `features/*/Vs*Screen.tsx` (4)
- `__tests__/increment-a.test.tsx`
- `e2e/increment-a.spec.ts`

### Captures
`.tmp-sfia-review/screenshots-increment-a/*.png` (9)
`.tmp-sfia-review/figma-increment-a/*.png`

---

## 7. Stories couvertes (mock)

| Story | Couverture Increment A |
|-------|------------------------|
| VS-BL-US-001 | Saisie demande fixture |
| VS-BL-US-002 | requestId/correlationId visibles |
| VS-BL-US-003 | Abandon pré-qualif · GPT 0 |
| VS-BL-US-007 | Qualif complète VS-UX-03 |
| VS-BL-US-010 | Dossier gate ancré |
| VS-BL-US-011 | GO / NO-GO / Corriger / Abandonner |
| VS-BL-US-026 | CycleSummary slice-only |
| VS-BL-US-028 | Fixtures sans secret/PII |
| VS-BL-US-031 | 10 états / 4 vues + switcher |
| VS-BL-US-032 | Loading / Erreur / STOP / GO invalide |

---

## 8. Matrice stories → fichiers → tests → preuves

| Story | Fichiers | Tests | Preuve |
|-------|----------|-------|--------|
| 001–003,007 | VsNouvelleDemande* | unit + e2e | captures 01/03 |
| 010–011 | VsDecision* | unit gate + e2e abandon | capture gate |
| 026 | VsSynthese* | unit + e2e | capture clôture |
| 028 | vertical-slice.ts | unit secrets | fixture audit |
| 031–032 | mapping + switcher + variantes | unit/e2e | captures + VAR |

---

## 9. Commandes et résultats

| Commande | Résultat |
|----------|----------|
| `npm run typecheck` | OK |
| `npm run lint` | OK |
| `npm run test` | **17/17** OK |
| `npm run build` | OK (~1.2s compile) |
| `npx playwright test e2e/increment-a.spec.ts` | **13/13** OK |
| `npx playwright test e2e/p0-smoke.spec.ts` | **6/6** OK |
| Runtime | `npm run dev` :3020 observé |
| Appels openai/live | **0** (assert e2e) |
| Console errors critiques | **0** (hors bruit connu) |

---

## 10. Runtime & captures

Captures dans `.tmp-sfia-review/screenshots-increment-a/` :
nouvelle-demande · qualification-proposée · gate · exécution · rapport · verdict · décision-finale · clôture · go-invalide

---

## 11. Comparaison Figma / runtime

| Écran | Statut | Notes |
|-------|--------|-------|
| Gate VS-UX-04 | **conforme** (fonctionnel) | 4 actions + Abandonner danger ; layout option cards plus dense côté Figma → **écart mineur** |
| Clôture VS-UX-10 | **conforme** | slice-only · anti-MVP · pas de portfolio ; métriques Figma plus riches → **écart mineur** |
| Nouvelle demande | **conforme** / écart mineur | shell P0 conservé ; canvas VS simplifié vs storyboard |
| Variante GO invalide | **conforme** | bandeau + distinction Abandon/NO-GO |
| Loading / STOP / Erreur | **conforme** | via switcher + banners |

Aucun écart **bloquant** restant dans le périmètre Increment A.

---

## 12. git status final

```
 M projects/sfia-studio/app/app/synthese/page.tsx
 M projects/sfia-studio/app/components/ui/CtaButton.tsx
 M projects/sfia-studio/app/components/ui/cta-button.module.css
 M projects/sfia-studio/app/features/cycle-actif/CycleActifScreen.tsx
 M projects/sfia-studio/app/features/decision/DecisionScreen.tsx
 M projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx
 M projects/sfia-studio/app/features/synthese/SyntheseScreen.tsx
 M projects/sfia-studio/app/fixtures/index.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/increment-a.test.tsx
?? projects/sfia-studio/app/components/vertical-slice/
?? projects/sfia-studio/app/e2e/increment-a.spec.ts
?? projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx
?? projects/sfia-studio/app/features/decision/VsDecisionScreen.tsx
?? projects/sfia-studio/app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx
?? projects/sfia-studio/app/features/synthese/VsSyntheseScreen.tsx
?? projects/sfia-studio/app/fixtures/vertical-slice.ts
?? projects/sfia-studio/app/lib/vertical-slice/
```

`git diff --check` : OK (pas de trailing whitespace bloquant).

Aucun harness · aucun doc 01–40 · aucun package.json · aucune nouvelle route.

---

## 13. Réserves

- Pixel-perfect Figma non revendiqué (écart mineur densité/copy copilote P0)
- State switcher POC visible (intentionnel Increment A)
- Pas d’adaptateur / harness / live
- Plafond GPT toujours **À définir**
- Commit/push/PR **non autorisés** ici

---

## 14. Décisions Morris attendues

1. Validation fonctionnelle + visuelle Increment A
2. Autoriser éventuellement commit/push/PR (GO distinct)
3. **Ne pas** démarrer Increment B / adaptateur / live sans GO

---

## 15. Verdict

`SFIA STUDIO INCREMENT A IMPLEMENTED — MORRIS VISUAL AND FUNCTIONAL VALIDATION REQUIRED`

Instruction ChatGPT : `sfia/review-handoff/sfia-review-handoff/latest-chatgpt-review.md`

---

# ANNEXE A — Diff utile complet (app Increment A)

diff --git a/projects/sfia-studio/app/app/synthese/page.tsx b/projects/sfia-studio/app/app/synthese/page.tsx
index 7b56507..6bfc8ee 100644
--- a/projects/sfia-studio/app/app/synthese/page.tsx
+++ b/projects/sfia-studio/app/app/synthese/page.tsx
@@ -8,24 +8,24 @@ export default function SynthesePage() {
       activeRoute="/synthese"
       title="Vue synthèse"
       pills={[
-        { label: "main · clean", tone: "blueFlush" },
-        { label: "Morris · décideur", tone: "purpleFlush" },
+        { label: "fixture · slice-only", tone: "blueFlush" },
+        { label: "Increment A", tone: "purpleFlush" },
       ]}
       copilot={{
         variant: "flush",
         name: "Nora · Project Copilot",
-        subtitle: "Vue consolidée active",
+        subtitle: "Clôture slice courant",
         avatarTone: "purple",
         summary:
-          "La trajectoire est cohérente. Deux décisions Morris restent ouvertes avant la suite.",
+          "Synthèse limitée au vertical slice POC. Aucun portefeuille multi-projet. Aucun claim MVP.",
         watchItems: [
-          { label: "Vérité Git synchronisée", dotColor: "#21c28a" },
-          { label: "Décisions candidates séparées", dotColor: "#3863f5" },
-          { label: "Aucun périmètre technique engagé", dotColor: "#7a4df5" },
+          { label: "Slice-only — pas de portfolio", dotColor: "#21c28a" },
+          { label: "Décision Morris humaine", dotColor: "#3863f5" },
+          { label: "Fixture — aucun live", dotColor: "#7a4df5" },
         ],
         riskTitle: "POINT D'ATTENTION",
         riskText:
-          "La clôture architecture et le choix du prochain jalon doivent rester des décisions distinctes.",
+          "Incrément A uniquement. Adaptateur, GPT live et Cursor live restent hors périmètre.",
       }}
     >
       <SyntheseScreen />
diff --git a/projects/sfia-studio/app/components/ui/CtaButton.tsx b/projects/sfia-studio/app/components/ui/CtaButton.tsx
index 27387ab..6278902 100644
--- a/projects/sfia-studio/app/components/ui/CtaButton.tsx
+++ b/projects/sfia-studio/app/components/ui/CtaButton.tsx
@@ -2,7 +2,13 @@ import Link from "next/link";
 import styles from "./cta-button.module.css";
 import { SIMULATION_TITLE } from "@/lib/a11y";
 
-type CtaVariant = "primary" | "primaryDark" | "secondary" | "ghost" | "simulated";
+type CtaVariant =
+  | "primary"
+  | "primaryDark"
+  | "secondary"
+  | "ghost"
+  | "danger"
+  | "simulated";
 
 interface CtaButtonProps {
   children: React.ReactNode;
@@ -14,6 +20,8 @@ interface CtaButtonProps {
   type?: "button" | "submit";
   className?: string;
   title?: string;
+  "aria-label"?: string;
+  "data-testid"?: string;
 }
 
 export function CtaButton({
@@ -26,6 +34,8 @@ export function CtaButton({
   type = "button",
   className = "",
   title,
+  "aria-label": ariaLabel,
+  "data-testid": testId,
 }: CtaButtonProps) {
   const resolvedVariant = simulated ? "simulated" : variant;
   const classes = `${styles.button} ${styles[resolvedVariant]} ${className}`.trim();
@@ -34,7 +44,7 @@ export function CtaButton({
 
   if (href && !isDisabled) {
     return (
-      <Link href={href} className={classes}>
+      <Link href={href} className={classes} aria-label={ariaLabel} data-testid={testId}>
         {children}
       </Link>
     );
@@ -48,6 +58,8 @@ export function CtaButton({
       disabled={isDisabled}
       title={resolvedTitle}
       aria-disabled={isDisabled || undefined}
+      aria-label={ariaLabel}
+      data-testid={testId}
     >
       {children}
     </button>
diff --git a/projects/sfia-studio/app/components/ui/cta-button.module.css b/projects/sfia-studio/app/components/ui/cta-button.module.css
index ee80bc0..4eb9d06 100644
--- a/projects/sfia-studio/app/components/ui/cta-button.module.css
+++ b/projects/sfia-studio/app/components/ui/cta-button.module.css
@@ -44,6 +44,13 @@
   border: 1px solid var(--sfia-border);
 }
 
+.danger {
+  background: #fff0f5;
+  color: #9b1d4a;
+  border: 1px solid #f5b8d0;
+  box-shadow: none;
+}
+
 .link {
   composes: button primary;
 }
diff --git a/projects/sfia-studio/app/features/cycle-actif/CycleActifScreen.tsx b/projects/sfia-studio/app/features/cycle-actif/CycleActifScreen.tsx
index 9b92cc7..20058e8 100644
--- a/projects/sfia-studio/app/features/cycle-actif/CycleActifScreen.tsx
+++ b/projects/sfia-studio/app/features/cycle-actif/CycleActifScreen.tsx
@@ -1,139 +1,13 @@
-import { StatusPill } from "@/components/ui/StatusPill";
-import { CtaButton } from "@/components/ui/CtaButton";
-import { activeCycle } from "@/fixtures/cycles";
-import styles from "./cycle-actif.module.css";
+"use client";
 
-const steps = [
-  { num: 1, label: "Cadrer", state: "done" as const },
-  { num: 2, label: "Produire", state: "done" as const },
-  { num: 3, label: "Vérifier", state: "active" as const },
-  { num: 4, label: "Décider", state: "pending" as const },
-  { num: 5, label: "Versionner", state: "pending" as const },
-];
-
-const checklist = [
-  { label: "Contrat UX/UI complet", status: "Terminé", tone: "greenFlush" as const, dot: "#21c28a" },
-  { label: "4 écrans P0 premium", status: "En cours", tone: "blueFlush" as const, dot: "#3863f5" },
-  { label: "Contraste WCAG AA", status: "À vérifier", tone: "orangeFlush" as const, dot: "#faa629" },
-  { label: "Capture runtime", status: "Non lancée", tone: "pink" as const, dot: "#f25794" },
-  { label: "Review handoff", status: "À produire", tone: "purpleFlush" as const, dot: "#7a4df5" },
-];
+import { VsDemoRoot } from "@/components/vertical-slice/VsDemoRoot";
+import { VsCycleActifScreen } from "./VsCycleActifScreen";
 
+/** Increment A : états VS-UX-05…08 (+ STOP) dans Cycle actif. */
 export function CycleActifScreen() {
   return (
-    <>
-      <section className={styles.hero} aria-labelledby="cycle-hero">
-        <p className={styles.heroEyebrow}>CYCLE 4 · UX/UI</p>
-        <h2 id="cycle-hero" className={styles.heroTitle}>
-          Construire, vérifier, décider — sans perdre la vérité Git.
-        </h2>
-        <p className={styles.heroText}>
-          Le parcours guidé concentre les preuves, les stops et les décisions
-          humaines au bon moment.
-        </p>
-        <div className={styles.heroPills}>
-          <span className={styles.pillPurple}>Critical</span>
-          <span className={styles.pillBlue}>72 %</span>
-        </div>
-      </section>
-
-      <nav className={styles.stepper} aria-label="Étapes du cycle">
-        {steps.map((step, index) => (
-          <div key={step.num} style={{ display: "contents" }}>
-            <div className={styles.step}>
-              <span
-                className={
-                  step.state === "done"
-                    ? styles.stepCircleDone
-                    : step.state === "active"
-                      ? styles.stepCircleActive
-                      : styles.stepCirclePending
-                }
-              >
-                {step.num}
-              </span>
-              <span
-                className={
-                  step.state === "active"
-                    ? styles.stepLabelActive
-                    : styles.stepLabel
-                }
-              >
-                {step.label}
-              </span>
-            </div>
-            {index < steps.length - 1 && (
-              <span
-                className={
-                  step.state === "done" || step.state === "active"
-                    ? styles.connector
-                    : styles.connectorPending
-                }
-                aria-hidden
-              />
-            )}
-          </div>
-        ))}
-      </nav>
-
-      <div className={styles.lower}>
-        <section className={styles.work} aria-labelledby="work-title">
-          <p className={styles.workLabel}>ÉTAPE COURANTE</p>
-          <h2 id="work-title" className={styles.workTitle}>
-            Vérification visuelle et documentaire
-          </h2>
-          <p className={styles.workText}>
-            Comparer les écrans Figma, le contrat UX-B et les garde-fous avant
-            décision Morris.
-          </p>
-
-          {checklist.map((item) => (
-            <div key={item.label} className={styles.checkRow}>
-              <span
-                className={styles.checkDot}
-                style={{ background: item.dot }}
-                aria-hidden
-              />
-              <span className={styles.checkLabel}>{item.label}</span>
-              <StatusPill tone={item.tone}>{item.status}</StatusPill>
-            </div>
-          ))}
-
-          <div className={styles.actions}>
-            <CtaButton variant="secondary" simulated>
-              Ouvrir les preuves
-            </CtaButton>
-            <CtaButton href="/decision">Préparer décision Morris</CtaButton>
-          </div>
-        </section>
-
-        <aside className={styles.inspector} aria-label="Cadre d'exécution">
-          <h2 className={styles.inspectorTitle}>Cadre d&apos;exécution</h2>
-          <p className={styles.fieldLabel}>Branche</p>
-          <p className={styles.fieldValue}>{activeCycle.branch}</p>
-          <p className={styles.fieldLabel}>Base</p>
-          <p className={styles.fieldValue}>{activeCycle.base}</p>
-          <p className={styles.fieldLabel}>Profil</p>
-          <p className={styles.fieldValue}>Critical</p>
-          <p className={styles.fieldLabel}>Figma</p>
-          <p className={styles.fieldValue}>4 frames P0</p>
-          <p className={styles.fieldLabel}>Staged</p>
-          <p className={styles.fieldValue}>Aucun</p>
-
-          <div className={styles.stopBox}>
-            <p className={styles.stopTitle}>STOP CONDITIONS</p>
-            <p className={styles.stopText}>
-              Option UX promue sans GO · divergence Git · preuve visuelle absente.
-            </p>
-          </div>
-
-          <div className={styles.inspectorAction}>
-            <CtaButton variant="primary" simulated>
-              Demander un STOP
-            </CtaButton>
-          </div>
-        </aside>
-      </div>
-    </>
+    <VsDemoRoot>
+      <VsCycleActifScreen />
+    </VsDemoRoot>
   );
 }
diff --git a/projects/sfia-studio/app/features/decision/DecisionScreen.tsx b/projects/sfia-studio/app/features/decision/DecisionScreen.tsx
index 54057ef..f9e0a60 100644
--- a/projects/sfia-studio/app/features/decision/DecisionScreen.tsx
+++ b/projects/sfia-studio/app/features/decision/DecisionScreen.tsx
@@ -1,128 +1,13 @@
 "use client";
 
-import { useState } from "react";
-import { EvidenceList } from "@/components/ui/EvidenceList";
-import { StatusPill } from "@/components/ui/StatusPill";
-import { CtaButton } from "@/components/ui/CtaButton";
-import { evidenceItems } from "@/fixtures/evidence";
-import { pendingMorrisDecision } from "@/fixtures";
-import type { MorrisVerdict } from "@/lib/domain/morris-decision";
-import styles from "./decision.module.css";
-
-const options: {
-  verdict: MorrisVerdict;
-  pill: string;
-  tone: "greenFlush" | "orangeFlush" | "pink";
-  title: string;
-  subtitle: string;
-}[] = [
-  {
-    verdict: "GO",
-    pill: "GO",
-    tone: "greenFlush",
-    title: "Adopter la direction premium",
-    subtitle: "Décliner sur le cycle UX/UI",
-  },
-  {
-    verdict: "CORRIGER",
-    pill: "CORRIGER",
-    tone: "orangeFlush",
-    title: "Demander une itération",
-    subtitle: "Ajuster avant validation",
-  },
-  {
-    verdict: "STOP",
-    pill: "STOP",
-    tone: "pink",
-    title: "Suspendre la trajectoire",
-    subtitle: "Aucun engagement supplémentaire",
-  },
-];
+import { VsDemoRoot } from "@/components/vertical-slice/VsDemoRoot";
+import { VsDecisionScreen } from "./VsDecisionScreen";
 
+/** Increment A : gate VS-UX-04 + décision finale VS-UX-09 (+ GO invalide). */
 export function DecisionScreen() {
-  const [selected, setSelected] = useState<MorrisVerdict | null>(null);
-  const decision = pendingMorrisDecision;
-
   return (
-    <>
-      <section className={styles.hero} aria-labelledby="decision-hero">
-        <p className={styles.heroEyebrow}>GATE MORRIS · UX/UI</p>
-        <h2 id="decision-hero" className={styles.heroTitle}>
-          Décider avec le bon niveau de preuve.
-        </h2>
-        <p className={styles.heroText}>
-          Chaque choix affiche sa portée, ses risques, sa révocabilité et les
-          impacts sur la trajectoire.
-        </p>
-        <div className={styles.heroPills}>
-          <span className={styles.pillPurple}>Décision requise</span>
-          <span className={styles.pillBlue}>Morris</span>
-        </div>
-      </section>
-
-      <div className={styles.content}>
-        <section className={styles.evidencePanel} aria-labelledby="evidence-title">
-          <p className={styles.evidenceLabel}>DOSSIER DE DÉCISION</p>
-          <h2 id="evidence-title" className={styles.evidenceTitle}>
-            {decision.title}
-          </h2>
-          <p className={styles.evidenceDesc}>{decision.description}</p>
-          <EvidenceList items={evidenceItems} />
-        </section>
-
-        <section
-          className={styles.decisionPanel}
-          aria-labelledby="morris-decision-title"
-        >
-          <p className={styles.morrisLabel}>Décision Morris — autorité humaine</p>
-          <h2 id="morris-decision-title" className={styles.decisionTitle}>
-            Votre décision
-          </h2>
-          <p className={styles.decisionHint}>
-            Aucune action n&apos;est déclenchée avant confirmation.
-          </p>
-
-          {options.map((option) => (
-            <button
-              key={option.verdict}
-              type="button"
-              className={
-                selected === option.verdict
-                  ? styles.optionSelected
-                  : styles.option
-              }
-              onClick={() => setSelected(option.verdict)}
-              aria-pressed={selected === option.verdict}
-            >
-              <StatusPill tone={option.tone}>{option.pill}</StatusPill>
-              <p className={styles.optionTitle}>{option.title}</p>
-              <p className={styles.optionSub}>{option.subtitle}</p>
-            </button>
-          ))}
-
-          <div className={styles.confirmBox}>
-            <p className={styles.confirmLabel}>CONFIRMATION RENFORCÉE</p>
-            <p className={styles.confirmText}>
-              Portée : {decision.scope}
-            </p>
-          </div>
-
-          <CtaButton
-            simulated
-            disabled={!selected}
-            title={
-              selected
-                ? "Simulation — aucune décision Morris réelle"
-                : "Sélectionnez une option"
-            }
-          >
-            Confirmer la décision
-          </CtaButton>
-          <p className={styles.simulatedNote}>
-            Simulation P0 — aucun effet sur Git, Cursor ou la trajectoire.
-          </p>
-        </section>
-      </div>
-    </>
+    <VsDemoRoot>
+      <VsDecisionScreen />
+    </VsDemoRoot>
   );
 }
diff --git a/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx b/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx
index e7bb72b..b10807a 100644
--- a/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx
+++ b/projects/sfia-studio/app/features/nouvelle-demande/NouvelleDemandeScreen.tsx
@@ -1,179 +1,13 @@
-import Image from "next/image";
-import { StatusPill } from "@/components/ui/StatusPill";
-import { CtaButton } from "@/components/ui/CtaButton";
-import { gitStatus } from "@/fixtures/git-status";
-import { copilotRecommendations } from "@/fixtures";
-import styles from "./nouvelle-demande.module.css";
+"use client";
 
-export function NouvelleDemandeScreen() {
-  const recommendation = copilotRecommendations[0];
+import { VsDemoRoot } from "@/components/vertical-slice/VsDemoRoot";
+import { VsNouvelleDemandeScreen } from "./VsNouvelleDemandeScreen";
 
+/** Increment A : états VS-UX-01…03 (+ variantes) dans la route Nouvelle demande. */
+export function NouvelleDemandeScreen() {
   return (
-    <>
-      <section className={styles.hero} aria-labelledby="hero-title">
-        <h2 id="hero-title" className={styles.heroTitle}>
-          Transformez un besoin flou en cycle exécutable.
-        </h2>
-        <p className={styles.heroText}>
-          Décrivez la demande. SFIA qualifie le cycle, les gates, les risques et
-          le cadre d&apos;exécution.
-        </p>
-        <StatusPill tone="white">Qualification assistée</StatusPill>
-        <Image
-          src="/icons/hero-orb.svg"
-          alt=""
-          width={92}
-          height={92}
-          className={styles.heroOrb}
-          aria-hidden
-        />
-      </section>
-
-      <div className={styles.grid}>
-        <section className={styles.formCard} aria-labelledby="form-title">
-          <p className={styles.sectionLabel}>1 · EXPRIMER LE BESOIN</p>
-          <h2 id="form-title" className={styles.sectionTitle}>
-            Que souhaitez-vous accomplir ?
-          </h2>
-
-          <div className={styles.field}>
-            <span className={styles.fieldLabel}>Objet de la demande</span>
-            <p className={styles.fieldValue}>
-              Industrialiser la préparation des cycles SFIA
-            </p>
-          </div>
-
-          <div className={`${styles.field} ${styles.fieldLarge}`}>
-            <span className={styles.fieldLabel}>
-              Décrivez le résultat attendu
-            </span>
-            <p className={styles.fieldValue}>
-              Je veux réduire la préparation manuelle, sécuriser les gates Morris
-              et produire automatiquement un cadrage exploitable par Cursor.
-            </p>
-            <div className={styles.tags}>
-              <StatusPill tone="blue">Objectif</StatusPill>
-              <StatusPill tone="purple">Automatisation</StatusPill>
-              <StatusPill tone="green">Gouvernance</StatusPill>
-            </div>
-          </div>
-
-          <p className={styles.sectionLabelPurple}>2 · CONTEXTE</p>
-          <div className={styles.contextCard}>
-            <div className={styles.ghIcon}>GH</div>
-            <div>
-              <p className={styles.repoName}>{gitStatus.repository}</p>
-              <p className={styles.repoMeta}>
-                {gitStatus.branch} · {gitStatus.commit} · {gitStatus.cleanliness}
-              </p>
-            </div>
-            <span className={styles.contextPill}>
-              <StatusPill tone="green">Git truth vérifiée</StatusPill>
-            </span>
-          </div>
-
-          <div className={styles.attachment}>
-            ＋ Ajouter des documents, captures ou liens
-          </div>
-
-          <div className={styles.actions}>
-            <span className={styles.saved}>Enregistré il y a 8 s</span>
-            <CtaButton variant="primaryDark" simulated>
-              Lancer la qualification →
-            </CtaButton>
-          </div>
-        </section>
-
-        <aside className={styles.preview} aria-label="Prévisualisation du cycle">
-          <div className={styles.previewHeader}>
-            <h2 className={styles.previewTitle}>Prévisualisation du cycle</h2>
-            <StatusPill tone="green">Temps réel</StatusPill>
-          </div>
-
-          <div className={styles.agentCard}>
-            <div className={styles.agentAvatar}>AI</div>
-            <div>
-              <p className={styles.statusTitle}>Orchestrateur de qualification</p>
-              <p className={styles.statusSub}>
-                Analyse du besoin, risques et gates en cours…
-              </p>
-              <StatusPill tone="purple">68 %</StatusPill>
-            </div>
-          </div>
-
-          <p className={styles.recommendationNote}>
-            Recommandation copilot — non décision Morris
-          </p>
-          <div className={styles.statusRow}>
-            <span
-              className={styles.statusDot}
-              style={{ background: "var(--sfia-blue-00c)" }}
-            />
-            <div>
-              <p className={styles.statusTitle}>Cycle proposé</p>
-              <p className={styles.statusSub}>Conception fonctionnelle</p>
-            </div>
-          </div>
-
-          <div className={styles.statusRow}>
-            <span
-              className={styles.statusDot}
-              style={{ background: "var(--sfia-purple-00c)" }}
-            />
-            <div>
-              <p className={styles.statusTitle}>{recommendation.title}</p>
-              <p className={styles.statusSub}>Standard</p>
-            </div>
-          </div>
-
-          <div className={styles.statusRow}>
-            <span
-              className={styles.statusDot}
-              style={{ background: "var(--sfia-orange-00c)" }}
-            />
-            <div>
-              <p className={styles.statusTitle}>Gate Morris</p>
-              <p className={styles.statusSub}>Requise avant exécution</p>
-            </div>
-          </div>
-
-          <div className={styles.timeline}>
-            <p className={styles.timelineTitle}>Parcours</p>
-            <div className={styles.timelineItem}>
-              <span
-                className={styles.timelineDot}
-                style={{ background: "var(--sfia-green-00c)" }}
-              />
-              Demande reçue
-            </div>
-            <div className={styles.timelineItemActive}>
-              <span
-                className={styles.timelineDot}
-                style={{ background: "var(--sfia-green-00c)" }}
-              />
-              Qualification
-            </div>
-            <div className={styles.timelineItem}>
-              <span
-                className={styles.timelineDot}
-                style={{ background: "var(--sfia-border-00c)" }}
-              />
-              Validation Morris
-            </div>
-            <div className={styles.timelineItem}>
-              <span
-                className={styles.timelineDot}
-                style={{ background: "var(--sfia-border-00c)" }}
-              />
-              Prompt Cursor
-            </div>
-          </div>
-
-          <p className={styles.trust}>
-            Aucune action Git ou Cursor sans GO Morris.
-          </p>
-        </aside>
-      </div>
-    </>
+    <VsDemoRoot>
+      <VsNouvelleDemandeScreen />
+    </VsDemoRoot>
   );
 }
diff --git a/projects/sfia-studio/app/features/synthese/SyntheseScreen.tsx b/projects/sfia-studio/app/features/synthese/SyntheseScreen.tsx
index a8ce786..cc7c5da 100644
--- a/projects/sfia-studio/app/features/synthese/SyntheseScreen.tsx
+++ b/projects/sfia-studio/app/features/synthese/SyntheseScreen.tsx
@@ -1,97 +1,13 @@
-import { MetricCard } from "@/components/ui/MetricCard";
-import { GateList } from "@/components/ui/GateList";
-import { StatusPill } from "@/components/ui/StatusPill";
-import { cycles } from "@/fixtures/cycles";
-import { gates } from "@/fixtures/gates";
-import styles from "./synthese.module.css";
+"use client";
 
-const dotColors = ["#7a4df5", "#3863f5", "#21c28a", "#faa629"];
-
-const activities = [
-  "Figma premium créé",
-  "AF-CAND-11B validée",
-  "PR #214 mergée",
-  "Handoff publié",
-];
+import { VsDemoRoot } from "@/components/vertical-slice/VsDemoRoot";
+import { VsSyntheseScreen } from "./VsSyntheseScreen";
 
+/** Increment A : clôture slice-only VS-UX-10 (pas de portefeuille). */
 export function SyntheseScreen() {
   return (
-    <>
-      <div className={styles.heroWrap}>
-        <section className={styles.hero} aria-labelledby="synthese-hero">
-          <p className={styles.heroEyebrow}>PILOTAGE EN TEMPS RÉEL</p>
-          <h2 id="synthese-hero" className={styles.heroTitle}>
-            Une vision claire de chaque cycle, chaque gate et chaque preuve.
-          </h2>
-          <p className={styles.heroText}>
-            Le cockpit consolide la vérité Git, les décisions Morris et les
-            prochaines actions sans créer une seconde vérité.
-          </p>
-          <div className={styles.heroPills}>
-            <span className={styles.heroPillDark}>4 projets actifs</span>
-            <span className={styles.heroPillPurple}>2 gates ouvertes</span>
-          </div>
-        </section>
-      </div>
-
-      <div className={styles.metrics}>
-        <MetricCard label="Projets actifs" value="04" accent="blue" />
-        <MetricCard label="Cycles en cours" value="03" accent="purple" />
-        <MetricCard label="Gates Morris" value="02" accent="orange" />
-        <MetricCard label="Review packs" value="07 / 08" accent="green" />
-      </div>
-
-      <div className={styles.lower}>
-        <section className={styles.portfolio} aria-labelledby="portfolio-title">
-          <div className={styles.portfolioHeader}>
-            <h2 id="portfolio-title" className={styles.portfolioTitle}>
-              Portefeuille des cycles
-            </h2>
-            <StatusPill tone="blueFlush">Vue portefeuille</StatusPill>
-          </div>
-          {cycles.map((cycle, index) => (
-            <div key={cycle.id} className={styles.row}>
-              <span
-                className={styles.rowDot}
-                style={{ background: dotColors[index] }}
-                aria-hidden
-              />
-              <div>
-                <p className={styles.rowName}>{cycle.name}</p>
-                <p className={styles.rowSub}>{cycle.subtitle}</p>
-              </div>
-              <span className={styles.rowProgress}>
-                <StatusPill tone="blueFlush">{cycle.progress} %</StatusPill>
-              </span>
-            </div>
-          ))}
-        </section>
-
-        <div className={styles.sideColumn}>
-          <section className={styles.gatesPanel} aria-labelledby="gates-title">
-            <h2 id="gates-title" className={styles.panelTitle}>
-              Gates à arbitrer
-            </h2>
-            <GateList gates={gates} />
-          </section>
-
-          <section
-            className={styles.activityPanel}
-            aria-labelledby="activity-title"
-          >
-            <h2 id="activity-title" className={styles.panelTitle}>
-              Activité récente
-            </h2>
-            <ul className={styles.activityList}>
-              {activities.map((item) => (
-                <li key={item} className={styles.activityItem}>
-                  • {item}
-                </li>
-              ))}
-            </ul>
-          </section>
-        </div>
-      </div>
-    </>
+    <VsDemoRoot>
+      <VsSyntheseScreen />
+    </VsDemoRoot>
   );
 }
diff --git a/projects/sfia-studio/app/fixtures/index.ts b/projects/sfia-studio/app/fixtures/index.ts
index 242b8ea..83b6dab 100644
--- a/projects/sfia-studio/app/fixtures/index.ts
+++ b/projects/sfia-studio/app/fixtures/index.ts
@@ -5,6 +5,7 @@ export { cycles, activeCycle } from "./cycles";
 export { gates } from "./gates";
 export { evidenceItems } from "./evidence";
 export { gitStatus } from "./git-status";
+export { vsFixture } from "./vertical-slice";
 
 export const copilotRecommendations: Recommendation[] = [
   {
diff --git a/projects/sfia-studio/app/__tests__/increment-a.test.tsx b/projects/sfia-studio/app/__tests__/increment-a.test.tsx
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/increment-a.test.tsx
+import { cleanup, render, screen, within } from "@testing-library/react";
+import userEvent from "@testing-library/user-event";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { STUDIO_ROUTES } from "@/lib/navigation";
+import {
+  STUDIO_ROUTES_ONLY,
+  VS_STATE_IDS,
+  VS_STATES,
+  parseVsQuery,
+} from "@/lib/vertical-slice";
+import { vsFixture } from "@/fixtures/vertical-slice";
+import { NouvelleDemandeScreen } from "@/features/nouvelle-demande/NouvelleDemandeScreen";
+import { DecisionScreen } from "@/features/decision/DecisionScreen";
+import { CycleActifScreen } from "@/features/cycle-actif/CycleActifScreen";
+import { SyntheseScreen } from "@/features/synthese/SyntheseScreen";
+
+const push = vi.fn();
+let mockPathname = "/nouvelle-demande";
+let mockSearch = "vs=VS-UX-01";
+
+vi.mock("next/navigation", () => ({
+  useRouter: () => ({ push, replace: vi.fn(), prefetch: vi.fn() }),
+  usePathname: () => mockPathname,
+  useSearchParams: () => new URLSearchParams(mockSearch),
+}));
+
+vi.mock("next/link", () => ({
+  default: ({
+    children,
+    href,
+    ...props
+  }: {
+    children: React.ReactNode;
+    href: string;
+  }) => (
+    <a href={href} {...props}>
+      {children}
+    </a>
+  ),
+}));
+
+afterEach(() => {
+  cleanup();
+  push.mockClear();
+});
+
+beforeEach(() => {
+  mockPathname = "/nouvelle-demande";
+  mockSearch = "vs=VS-UX-01";
+});
+
+describe("Increment A — mapping & fixtures", () => {
+  it("exposes exactly four Studio routes", () => {
+    expect(STUDIO_ROUTES).toHaveLength(4);
+    expect(STUDIO_ROUTES_ONLY).toEqual([
+      "/nouvelle-demande",
+      "/decision",
+      "/cycle-actif",
+      "/synthese",
+    ]);
+  });
+
+  it("maps ten states plus four variants without extra routes", () => {
+    expect(VS_STATES.filter((s) => s.kind === "state")).toHaveLength(10);
+    expect(VS_STATES.filter((s) => s.kind === "variant")).toHaveLength(4);
+    expect(VS_STATE_IDS).toHaveLength(14);
+    const routes = new Set(VS_STATES.map((s) => s.route));
+    expect([...routes].sort()).toEqual(
+      ["/cycle-actif", "/decision", "/nouvelle-demande", "/synthese"].sort(),
+    );
+  });
+
+  it("parses demo query aliases", () => {
+    expect(parseVsQuery("04")).toBe("VS-UX-04");
+    expect(parseVsQuery("GO-INVALID")).toBe("VS-UX-VAR-GO-INVALID");
+  });
+
+  it("uses demo fixtures without secrets or PII", () => {
+    const blob = JSON.stringify(vsFixture);
+    expect(blob).not.toMatch(/sk-|api[_-]?key|password|Bearer /i);
+    expect(blob).not.toMatch(/@gmail\.com|numéro de sécurité/i);
+    expect(vsFixture.gptCalls.ceiling).toBe("À définir");
+    expect(vsFixture.gptCalls.noRetry).toMatch(/Aucun retry automatique/i);
+  });
+});
+
+describe("Increment A — UI screens", () => {
+  it("shows demo banner, ids and GPT ceiling on nouvelle demande", () => {
+    render(<NouvelleDemandeScreen />);
+    expect(screen.getByTestId("vs-demo-banner")).toHaveTextContent(
+      /Données de démonstration/i,
+    );
+    expect(screen.getByTestId("vs-id-strip")).toHaveTextContent(
+      vsFixture.requestId,
+    );
+    expect(screen.getByTestId("vs-gpt-counter")).toHaveTextContent(/À définir/);
+    expect(screen.getByTestId("vs-no-retry")).toHaveTextContent(
+      /Aucun retry automatique/i,
+    );
+    expect(screen.getByTestId("vs-demo-switcher")).toBeInTheDocument();
+  });
+
+  it("renders GO, NO-GO, Corriger, Abandonner as distinct actions", async () => {
+    mockPathname = "/decision";
+    mockSearch = "vs=VS-UX-04";
+    const user = userEvent.setup();
+    render(<DecisionScreen />);
+
+    const panel = screen.getByTestId("vs-morris-actions");
+    expect(within(panel).getByTestId("vs-gate-GO")).toBeInTheDocument();
+    expect(within(panel).getByTestId("vs-gate-NO-GO")).toBeInTheDocument();
+    expect(within(panel).getByTestId("vs-gate-CORRIGER")).toBeInTheDocument();
+    expect(within(panel).getByTestId("vs-gate-ABANDONNER")).toBeInTheDocument();
+
+    await user.click(within(panel).getByTestId("vs-gate-ABANDONNER"));
+    const dialog = screen.getByTestId("vs-abandon-confirm");
+    expect(dialog).toHaveTextContent(/abandonné/i);
+    expect(
+      within(dialog).getByRole("button", {
+        name: /Confirmer abandonner le cycle/i,
+      }),
+    ).toBeEnabled();
+  });
+
+  it("shows CycleSummary without portfolio or MVP claims", () => {
+    mockPathname = "/synthese";
+    mockSearch = "vs=VS-UX-10";
+    render(<SyntheseScreen />);
+    expect(screen.getByTestId("vs-cycle-summary")).toBeInTheDocument();
+    expect(screen.getByTestId("vs-no-portfolio")).toHaveTextContent(
+      /portefeuille multi-projet/i,
+    );
+    expect(screen.getByTestId("vs-no-mvp-claim")).toHaveTextContent(/MVP/);
+    expect(
+      screen.queryByText(/Portefeuille des cycles/i),
+    ).not.toBeInTheDocument();
+    expect(screen.getByTestId("vs-summary-gpt")).toHaveTextContent(/À définir/);
+  });
+
+  it("exposes STOP control distinct from gate vocabulary", () => {
+    mockPathname = "/cycle-actif";
+    mockSearch = "vs=VS-UX-05";
+    render(<CycleActifScreen />);
+    expect(screen.getByTestId("vs-stop-execution")).toHaveAttribute(
+      "aria-label",
+      expect.stringMatching(/STOP Morris/i),
+    );
+    expect(screen.queryByTestId("vs-gate-ABANDONNER")).not.toBeInTheDocument();
+  });
+});

diff --git a/projects/sfia-studio/app/components/vertical-slice/VsDemoChrome.tsx b/projects/sfia-studio/app/components/vertical-slice/VsDemoChrome.tsx
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/components/vertical-slice/VsDemoChrome.tsx
+"use client";
+
+import { VS_STATES } from "@/lib/vertical-slice/mapping";
+import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
+import { vsFixture } from "@/fixtures/vertical-slice";
+import type { VsStateId } from "@/lib/vertical-slice/types";
+import styles from "./vs-demo.module.css";
+
+export function VsDemoChrome() {
+  const { stateId, setStateId, resetDemo, abandoned } = useVsDemo();
+
+  return (
+    <div className={styles.chrome} data-testid="vs-demo-chrome">
+      <div className={styles.banner} role="status" data-testid="vs-demo-banner">
+        <strong>Incrément A — cockpit statique gouverné</strong>
+        <span>{vsFixture.demoLabel}</span>
+        <span>{vsFixture.noLiveLabel}</span>
+      </div>
+      <div className={styles.switcherRow}>
+        <label className={styles.switcherLabel} htmlFor="vs-state-switcher">
+          État / variante POC
+        </label>
+        <select
+          id="vs-state-switcher"
+          className={styles.switcher}
+          data-testid="vs-demo-switcher"
+          value={stateId}
+          onChange={(e) => setStateId(e.target.value as VsStateId)}
+          aria-label="Sélecteur d'état vertical slice"
+        >
+          <optgroup label="États VS-UX-01…10">
+            {VS_STATES.filter((s) => s.kind === "state").map((s) => (
+              <option key={s.id} value={s.id}>
+                {s.label}
+              </option>
+            ))}
+          </optgroup>
+          <optgroup label="Variantes">
+            {VS_STATES.filter((s) => s.kind === "variant").map((s) => (
+              <option key={s.id} value={s.id}>
+                {s.label}
+              </option>
+            ))}
+          </optgroup>
+        </select>
+        <button
+          type="button"
+          className={styles.reset}
+          onClick={resetDemo}
+          data-testid="vs-demo-reset"
+        >
+          Réinitialiser démo
+        </button>
+        {abandoned ? (
+          <span className={styles.abandonedPill} data-testid="vs-abandoned-pill">
+            Cycle abandonné
+          </span>
+        ) : null}
+      </div>
+    </div>
+  );
+}

diff --git a/projects/sfia-studio/app/components/vertical-slice/VsDemoRoot.tsx b/projects/sfia-studio/app/components/vertical-slice/VsDemoRoot.tsx
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/components/vertical-slice/VsDemoRoot.tsx
+"use client";
+
+import { Suspense, type ReactNode } from "react";
+import { VsDemoProvider } from "@/lib/vertical-slice/VsDemoContext";
+import { VsDemoChrome } from "@/components/vertical-slice/VsDemoChrome";
+
+function VsDemoInner({ children }: { children: ReactNode }) {
+  return (
+    <VsDemoProvider>
+      <VsDemoChrome />
+      {children}
+    </VsDemoProvider>
+  );
+}
+
+/** Provider + chrome POC Increment A (query `?vs=`). */
+export function VsDemoRoot({ children }: { children: ReactNode }) {
+  return (
+    <Suspense fallback={null}>
+      <VsDemoInner>{children}</VsDemoInner>
+    </Suspense>
+  );
+}

diff --git a/projects/sfia-studio/app/components/vertical-slice/VsShared.tsx b/projects/sfia-studio/app/components/vertical-slice/VsShared.tsx
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/components/vertical-slice/VsShared.tsx
+import { vsFixture } from "@/fixtures/vertical-slice";
+import styles from "./vs-panels.module.css";
+
+export function IdStrip() {
+  return (
+    <dl className={styles.idStrip} data-testid="vs-id-strip">
+      <div>
+        <dt>requestId</dt>
+        <dd>{vsFixture.requestId}</dd>
+      </div>
+      <div>
+        <dt>correlationId</dt>
+        <dd>{vsFixture.correlationId}</dd>
+      </div>
+      <div>
+        <dt>contractId</dt>
+        <dd>{vsFixture.contractId}</dd>
+      </div>
+      <div>
+        <dt>contractHash</dt>
+        <dd>{vsFixture.contractHash}</dd>
+      </div>
+      <div>
+        <dt>Branche</dt>
+        <dd>{vsFixture.branch}</dd>
+      </div>
+      <div>
+        <dt>HEAD</dt>
+        <dd>{vsFixture.head.slice(0, 12)}…</dd>
+      </div>
+      <div>
+        <dt>Source statut</dt>
+        <dd>{vsFixture.sourceStatus}</dd>
+      </div>
+      <div>
+        <dt>Horodatage</dt>
+        <dd>
+          {vsFixture.timestamp} ({vsFixture.timezone})
+        </dd>
+      </div>
+    </dl>
+  );
+}
+
+export function FinOpsBox({
+  phase,
+  calls,
+}: {
+  phase: string;
+  calls: number;
+}) {
+  return (
+    <aside className={styles.finops} data-testid="vs-finops" aria-live="polite">
+      <p className={styles.finopsTitle}>FinOps GPT (fixture)</p>
+      <p>
+        Phase active : <strong>{phase}</strong>
+      </p>
+      <p>
+        Consommation :{" "}
+        <strong data-testid="vs-gpt-counter">
+          {calls} / {vsFixture.gptCalls.ceiling}
+        </strong>
+      </p>
+      <p data-testid="vs-no-retry">{vsFixture.gptCalls.noRetry}</p>
+      <p className={styles.muted}>Aucun coût monétaire inventé.</p>
+    </aside>
+  );
+}
+
+export function VariantBanner({
+  tone,
+  title,
+  children,
+}: {
+  tone: "info" | "error" | "stop" | "warn";
+  title: string;
+  children: React.ReactNode;
+}) {
+  return (
+    <div
+      className={`${styles.variantBanner} ${styles[tone]}`}
+      role="alert"
+      data-testid="vs-variant-banner"
+    >
+      <p className={styles.variantTitle}>{title}</p>
+      <div className={styles.variantBody}>{children}</div>
+    </div>
+  );
+}

diff --git a/projects/sfia-studio/app/components/vertical-slice/vs-demo.module.css b/projects/sfia-studio/app/components/vertical-slice/vs-demo.module.css
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/components/vertical-slice/vs-demo.module.css
+.chrome {
+  display: flex;
+  flex-direction: column;
+  gap: 8px;
+  margin: 0 0 16px;
+}
+
+.banner {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px 16px;
+  padding: 10px 14px;
+  border-radius: 12px;
+  background: #edf2ff;
+  border: 1px solid var(--sfia-border);
+  color: var(--sfia-ink);
+  font-size: 12px;
+  line-height: 1.4;
+}
+
+.banner strong {
+  font-size: 12px;
+  font-weight: 700;
+}
+
+.switcherRow {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: 10px;
+}
+
+.switcherLabel {
+  font-size: 12px;
+  font-weight: 600;
+  color: var(--sfia-muted);
+}
+
+.switcher {
+  min-width: 280px;
+  height: 36px;
+  padding: 0 10px;
+  border-radius: 10px;
+  border: 1px solid var(--sfia-border);
+  background: #fff;
+  font: inherit;
+  font-size: 13px;
+  color: var(--sfia-ink);
+}
+
+.reset {
+  height: 36px;
+  padding: 0 12px;
+  border-radius: 10px;
+  border: 1px solid var(--sfia-border);
+  background: #fff;
+  font: inherit;
+  font-size: 12px;
+  font-weight: 600;
+  color: var(--sfia-blue);
+  cursor: pointer;
+}
+
+.abandonedPill {
+  display: inline-flex;
+  align-items: center;
+  height: 28px;
+  padding: 0 10px;
+  border-radius: 999px;
+  background: #fff0f5;
+  color: #9b1d4a;
+  border: 1px solid #f5b8d0;
+  font-size: 12px;
+  font-weight: 700;
+}

diff --git a/projects/sfia-studio/app/components/vertical-slice/vs-panels.module.css b/projects/sfia-studio/app/components/vertical-slice/vs-panels.module.css
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/components/vertical-slice/vs-panels.module.css
+.idStrip {
+  display: grid;
+  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
+  gap: 10px 16px;
+  padding: 14px 16px;
+  margin: 0 0 16px;
+  border-radius: 14px;
+  background: #fff;
+  border: 1px solid var(--sfia-border);
+  box-shadow: var(--sfia-shadow-sm);
+}
+
+.idStrip dt {
+  margin: 0;
+  font-size: 11px;
+  font-weight: 700;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--sfia-muted);
+}
+
+.idStrip dd {
+  margin: 2px 0 0;
+  font-size: 12px;
+  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
+  color: var(--sfia-ink);
+  word-break: break-all;
+}
+
+.finops {
+  padding: 14px 16px;
+  border-radius: 14px;
+  background: var(--sfia-purple-soft);
+  border: 1px solid var(--sfia-border);
+  font-size: 13px;
+  line-height: 1.45;
+}
+
+.finopsTitle {
+  margin: 0 0 8px;
+  font-size: 12px;
+  font-weight: 700;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--sfia-purple);
+}
+
+.finops p {
+  margin: 0 0 6px;
+}
+
+.muted {
+  color: var(--sfia-muted);
+  font-size: 12px;
+}
+
+.variantBanner {
+  padding: 14px 16px;
+  border-radius: 14px;
+  margin: 0 0 16px;
+  border: 1px solid var(--sfia-border);
+}
+
+.variantTitle {
+  margin: 0 0 8px;
+  font-size: 14px;
+  font-weight: 700;
+}
+
+.variantBody {
+  font-size: 13px;
+  line-height: 1.45;
+}
+
+.info {
+  background: #edf2ff;
+}
+
+.error {
+  background: #fff0f5;
+  border-color: #f5b8d0;
+}
+
+.stop {
+  background: #fff5eb;
+  border-color: #f5c78a;
+}
+
+.warn {
+  background: #fff8e8;
+  border-color: #f0d48a;
+}
+
+.panel {
+  display: flex;
+  flex-direction: column;
+  gap: 16px;
+}
+
+.hero {
+  padding: 20px 22px;
+  border-radius: 20px;
+  background: linear-gradient(135deg, #141f47, #2a3a7a);
+  color: #fff;
+  box-shadow: var(--sfia-shadow-hero);
+}
+
+.heroEyebrow {
+  margin: 0 0 8px;
+  font-size: 11px;
+  letter-spacing: 0.08em;
+  text-transform: uppercase;
+  opacity: 0.8;
+}
+
+.heroTitle {
+  margin: 0 0 8px;
+  font-size: 24px;
+  line-height: 1.25;
+}
+
+.heroText {
+  margin: 0;
+  font-size: 14px;
+  opacity: 0.9;
+  max-width: 62ch;
+}
+
+.card {
+  padding: 18px 20px;
+  border-radius: 16px;
+  background: #fff;
+  border: 1px solid var(--sfia-border);
+  box-shadow: var(--sfia-shadow-sm);
+}
+
+.cardTitle {
+  margin: 0 0 10px;
+  font-size: 16px;
+}
+
+.fieldLabel {
+  margin: 0 0 4px;
+  font-size: 11px;
+  font-weight: 700;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--sfia-muted);
+}
+
+.fieldValue {
+  margin: 0 0 12px;
+  font-size: 14px;
+  color: var(--sfia-ink);
+}
+
+.actions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 10px;
+  margin-top: 8px;
+}
+
+.optionGrid {
+  display: grid;
+  grid-template-columns: 1fr 1fr;
+  gap: 10px;
+}
+
+.option {
+  text-align: left;
+  padding: 14px;
+  border-radius: 14px;
+  border: 1px solid var(--sfia-border);
+  background: #fff;
+  cursor: pointer;
+  font: inherit;
+}
+
+.optionSelected {
+  composes: option;
+  border-color: var(--sfia-blue);
+  box-shadow: 0 0 0 2px rgba(56, 99, 245, 0.2);
+}
+
+.optionDanger {
+  composes: option;
+  border-color: #f5b8d0;
+  background: #fff0f5;
+}
+
+.optionDangerSelected {
+  composes: optionDanger;
+  box-shadow: 0 0 0 2px rgba(242, 87, 148, 0.25);
+}
+
+.optionTitle {
+  margin: 6px 0 2px;
+  font-size: 14px;
+  font-weight: 700;
+}
+
+.optionSub {
+  margin: 0;
+  font-size: 12px;
+  color: var(--sfia-muted);
+}
+
+.confirmBox {
+  padding: 14px;
+  border-radius: 12px;
+  background: #fff8e8;
+  border: 1px solid #f0d48a;
+}
+
+.list {
+  margin: 0;
+  padding-left: 18px;
+  font-size: 13px;
+  line-height: 1.5;
+}
+
+.twoCol {
+  display: grid;
+  grid-template-columns: 1.4fr 1fr;
+  gap: 16px;
+}
+
+@media (max-width: 960px) {
+  .twoCol,
+  .optionGrid {
+    grid-template-columns: 1fr;
+  }
+}
+
+.forbidden {
+  color: #9b1d4a;
+  font-weight: 700;
+}
+
+.loadingPulse {
+  display: inline-flex;
+  align-items: center;
+  gap: 8px;
+  font-size: 13px;
+  font-weight: 600;
+  color: var(--sfia-purple);
+}
+
+.loadingDot {
+  width: 10px;
+  height: 10px;
+  border-radius: 50%;
+  background: var(--sfia-purple);
+  animation: pulse 1.2s ease-in-out infinite;
+}
+
+@keyframes pulse {
+  0%,
+  100% {
+    opacity: 0.35;
+  }
+  50% {
+    opacity: 1;
+  }
+}

diff --git a/projects/sfia-studio/app/e2e/increment-a.spec.ts b/projects/sfia-studio/app/e2e/increment-a.spec.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/e2e/increment-a.spec.ts
+import { test, expect } from "@playwright/test";
+import path from "path";
+import fs from "fs";
+
+const screenshotDir = path.join(
+  __dirname,
+  "../../../../.tmp-sfia-review/screenshots-increment-a",
+);
+
+const captures = [
+  {
+    path: "/nouvelle-demande?vs=VS-UX-01",
+    name: "inc-a-nouvelle-demande",
+    assert: async (page: import("@playwright/test").Page) => {
+      await expect(page.getByTestId("vs-demo-banner")).toBeVisible();
+      await expect(page.getByTestId("vs-id-strip")).toContainText("req-vs-poc-001");
+    },
+  },
+  {
+    path: "/nouvelle-demande?vs=VS-UX-03",
+    name: "inc-a-qualification-proposee",
+    assert: async (page: import("@playwright/test").Page) => {
+      await expect(
+        page.getByRole("heading", { name: /Qualification proposée/i }),
+      ).toBeVisible();
+      await expect(page.getByText(/Candidat GPT/i).first()).toBeVisible();
+    },
+  },
+  {
+    path: "/decision?vs=VS-UX-04",
+    name: "inc-a-gate-morris",
+    assert: async (page: import("@playwright/test").Page) => {
+      await expect(page.getByTestId("vs-gate-GO")).toBeVisible();
+      await expect(page.getByTestId("vs-gate-NO-GO")).toBeVisible();
+      await expect(page.getByTestId("vs-gate-CORRIGER")).toBeVisible();
+      await expect(page.getByTestId("vs-gate-ABANDONNER")).toBeVisible();
+    },
+  },
+  {
+    path: "/cycle-actif?vs=VS-UX-05",
+    name: "inc-a-execution",
+    assert: async (page: import("@playwright/test").Page) => {
+      await expect(page.getByTestId("vs-stop-execution")).toBeVisible();
+    },
+  },
+  {
+    path: "/cycle-actif?vs=VS-UX-06",
+    name: "inc-a-rapport",
+    assert: async (page: import("@playwright/test").Page) => {
+      await expect(page.getByText(/CursorExecutionReport/i)).toBeVisible();
+    },
+  },
+  {
+    path: "/cycle-actif?vs=VS-UX-08",
+    name: "inc-a-verdict",
+    assert: async (page: import("@playwright/test").Page) => {
+      await expect(page.getByText(/Candidat GPT/i)).toBeVisible();
+    },
+  },
+  {
+    path: "/decision?vs=VS-UX-09",
+    name: "inc-a-decision-finale",
+    assert: async (page: import("@playwright/test").Page) => {
+      await expect(page.getByTestId("vs-final-CLOTURER")).toBeVisible();
+    },
+  },
+  {
+    path: "/synthese?vs=VS-UX-10",
+    name: "inc-a-cloture",
+    assert: async (page: import("@playwright/test").Page) => {
+      await expect(page.getByTestId("vs-cycle-summary")).toBeVisible();
+      await expect(page.getByTestId("vs-no-mvp-claim")).toBeVisible();
+      await expect(page.getByText(/Portefeuille des cycles/i)).toHaveCount(0);
+    },
+  },
+  {
+    path: "/decision?vs=VS-UX-VAR-GO-INVALID",
+    name: "inc-a-go-invalide",
+    assert: async (page: import("@playwright/test").Page) => {
+      await expect(page.getByTestId("vs-variant-banner")).toContainText(
+        /GO invalide/i,
+      );
+    },
+  },
+];
+
+test.beforeAll(() => {
+  fs.mkdirSync(screenshotDir, { recursive: true });
+});
+
+test.describe("Increment A visual & functional", () => {
+  test("only four primary routes remain navigable", async ({ page }) => {
+    await page.goto("/synthese?vs=VS-UX-10");
+    const rail = page.getByTestId("utility-rail");
+    for (const label of [
+      "Vue synthèse",
+      "Nouvelle demande",
+      "Cycle actif",
+      "Décision Morris",
+    ]) {
+      await expect(rail.getByRole("link", { name: label })).toBeVisible();
+    }
+    await expect(rail.getByLabel("Paramètres (désactivé)")).toBeDisabled();
+  });
+
+  test("demo switcher reaches ten states", async ({ page }) => {
+    await page.goto("/nouvelle-demande?vs=VS-UX-01");
+    const switcher = page.getByTestId("vs-demo-switcher");
+    await expect(switcher).toBeVisible();
+    const values = await switcher.locator("option").evaluateAll((opts) =>
+      opts.map((o) => (o as HTMLOptionElement).value),
+    );
+    for (const id of [
+      "VS-UX-01",
+      "VS-UX-02",
+      "VS-UX-03",
+      "VS-UX-04",
+      "VS-UX-05",
+      "VS-UX-06",
+      "VS-UX-07",
+      "VS-UX-08",
+      "VS-UX-09",
+      "VS-UX-10",
+      "VS-UX-VAR-LOADING",
+      "VS-UX-VAR-ERROR",
+      "VS-UX-VAR-STOP",
+      "VS-UX-VAR-GO-INVALID",
+    ]) {
+      expect(values).toContain(id);
+    }
+  });
+
+  test("abandon confirmation is keyboard reachable", async ({ page }) => {
+    await page.goto("/decision?vs=VS-UX-04");
+    await page.getByTestId("vs-gate-ABANDONNER").focus();
+    await page.keyboard.press("Enter");
+    const dialog = page.getByTestId("vs-abandon-confirm");
+    await expect(dialog).toBeVisible();
+    await page.getByTestId("vs-abandon-confirm-yes").focus();
+    await expect(page.getByTestId("vs-abandon-confirm-yes")).toBeFocused();
+  });
+
+  test("GPT counter shows À définir and no-retry", async ({ page }) => {
+    await page.goto("/nouvelle-demande?vs=VS-UX-02");
+    await expect(page.getByTestId("vs-gpt-counter").first()).toContainText(
+      "À définir",
+    );
+    await expect(page.getByTestId("vs-no-retry").first()).toContainText(
+      "Aucun retry automatique",
+    );
+  });
+
+  for (const capture of captures) {
+    test(`capture ${capture.name}`, async ({ page }) => {
+      const errors: string[] = [];
+      const requests: string[] = [];
+      page.on("console", (msg) => {
+        if (msg.type() === "error") errors.push(msg.text());
+      });
+      page.on("request", (req) => {
+        const url = req.url();
+        if (/openai|api\.openai|anthropic/i.test(url)) requests.push(url);
+      });
+
+      await page.goto(capture.path);
+      await capture.assert(page);
+      await page.screenshot({
+        path: path.join(screenshotDir, `${capture.name}.png`),
+        fullPage: true,
+      });
+      expect(requests).toEqual([]);
+      const critical = errors.filter(
+        (e) =>
+          !/Download the React DevTools|Hydration|Extra attributes/i.test(e),
+      );
+      expect(critical).toEqual([]);
+    });
+  }
+});

diff --git a/projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx b/projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/features/cycle-actif/VsCycleActifScreen.tsx
+"use client";
+
+import { CtaButton } from "@/components/ui/CtaButton";
+import { StatusPill } from "@/components/ui/StatusPill";
+import { FinOpsBox, IdStrip, VariantBanner } from "@/components/vertical-slice/VsShared";
+import { vsFixture } from "@/fixtures/vertical-slice";
+import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
+import styles from "@/components/vertical-slice/vs-panels.module.css";
+
+const stepMap: Record<string, number> = {
+  "VS-UX-05": 5,
+  "VS-UX-06": 6,
+  "VS-UX-07": 7,
+  "VS-UX-08": 8,
+  "VS-UX-VAR-STOP": 5,
+  "VS-UX-VAR-LOADING": 7,
+  "VS-UX-VAR-ERROR": 7,
+};
+
+export function VsCycleActifScreen() {
+  const { stateId, setStateId, fireStop, stopFired } = useVsDemo();
+  const activeStep = stepMap[stateId] ?? 5;
+
+  return (
+    <div className={styles.panel} data-testid="vs-cycle-actif">
+      <IdStrip />
+
+      {stateId === "VS-UX-VAR-STOP" || stopFired ? (
+        <VariantBanner tone="stop" title="STOP Morris — prioritaire">
+          <p>
+            Exécution <strong>stoppée</strong>. STOP ≠ NO-GO ≠ Abandonner. Event mock
+            journalisé. Reprise éventuelle sous <strong>nouveau GO</strong> uniquement.
+          </p>
+          <p className={styles.muted}>
+            eventId=evt-stop-mock · {vsFixture.timestamp}
+          </p>
+        </VariantBanner>
+      ) : null}
+
+      {stateId === "VS-UX-VAR-LOADING" ? (
+        <VariantBanner tone="info" title="Loading — analyse GPT (fixture)">
+          <p className={styles.loadingPulse}>
+            <span className={styles.loadingDot} aria-hidden />
+            Phase active : analyse — pas de barre inventée
+          </p>
+          <FinOpsBox phase="analyse" calls={1} />
+        </VariantBanner>
+      ) : null}
+
+      {stateId === "VS-UX-VAR-ERROR" ? (
+        <VariantBanner tone="error" title="Erreur fail-closed — verdict invalide">
+          <p>Verdict GPT rejeté. Pas de clôture automatique.</p>
+          <div className={styles.actions}>
+            <CtaButton onClick={() => setStateId("VS-UX-07")}>
+              Relancer analyse (mock)
+            </CtaButton>
+          </div>
+        </VariantBanner>
+      ) : null}
+
+      <section className={styles.hero} aria-labelledby="vs-cycle-hero">
+        <p className={styles.heroEyebrow}>CYCLE ACTIF · ÉTATS 05–08</p>
+        <h2 id="vs-cycle-hero" className={styles.heroTitle}>
+          {stateId === "VS-UX-06"
+            ? "Rapport Cursor / harness disponible (fixture)"
+            : stateId === "VS-UX-07"
+              ? "Analyse GPT en cours (simulée)"
+              : stateId === "VS-UX-08"
+                ? "Verdict GPT candidat proposé"
+                : "Exécution sandbox simulée"}
+        </h2>
+        <p className={styles.heroText}>
+          Stepper d&apos;états dans la route Cycle actif — aucune 5e route.
+        </p>
+      </section>
+
+      <nav className={styles.card} aria-label="Étapes vertical slice 05 à 08">
+        <div className={styles.actions}>
+          {(["VS-UX-05", "VS-UX-06", "VS-UX-07", "VS-UX-08"] as const).map(
+            (id, index) => (
+              <CtaButton
+                key={id}
+                variant={stateId === id ? "primary" : "secondary"}
+                onClick={() => setStateId(id)}
+                aria-current={stateId === id ? "step" : undefined}
+              >
+                {index + 5}. {id.replace("VS-UX-0", "")}
+              </CtaButton>
+            ),
+          )}
+        </div>
+        <p className={styles.muted}>Étape active fixture : {activeStep}</p>
+      </nav>
+
+      <div className={styles.twoCol}>
+        <section className={styles.card}>
+          {stateId === "VS-UX-05" || stateId === "VS-UX-VAR-STOP" ? (
+            <>
+              <StatusPill tone="blueFlush">en_exécution (fixture)</StatusPill>
+              <p className={styles.fieldValue}>
+                Cursor sandbox mock — fichier allowlist uniquement. Remote writes = 0.
+              </p>
+              <div className={styles.actions}>
+                <CtaButton onClick={() => setStateId("VS-UX-06")}>
+                  Simuler fin d&apos;exécution
+                </CtaButton>
+                <CtaButton
+                  variant="danger"
+                  onClick={fireStop}
+                  aria-label="STOP Morris pendant exécution"
+                  data-testid="vs-stop-execution"
+                >
+                  STOP Morris
+                </CtaButton>
+              </div>
+            </>
+          ) : null}
+
+          {stateId === "VS-UX-06" ? (
+            <>
+              <p className={styles.cardTitle}>CursorExecutionReport (fixture)</p>
+              <p className={styles.fieldLabel}>Statut</p>
+              <p className={styles.fieldValue}>{vsFixture.report.status}</p>
+              <p className={styles.fieldLabel}>Fichiers touchés</p>
+              <p className={styles.fieldValue}>
+                {vsFixture.report.filesTouched.join(", ")}
+              </p>
+              <p className={styles.fieldLabel}>Remote writes</p>
+              <p className={styles.fieldValue}>{vsFixture.report.remoteWrites}</p>
+              <p className={styles.fieldLabel}>Aperçu sanitisé</p>
+              <pre className={styles.fieldValue}>{vsFixture.report.markdownPreview}</pre>
+              <div className={styles.actions}>
+                <CtaButton onClick={() => setStateId("VS-UX-07")}>
+                  Lancer analyse GPT (mock)
+                </CtaButton>
+              </div>
+            </>
+          ) : null}
+
+          {stateId === "VS-UX-07" || stateId === "VS-UX-VAR-LOADING" ? (
+            <>
+              <FinOpsBox phase="analyse" calls={1} />
+              <div className={styles.actions}>
+                <CtaButton onClick={() => setStateId("VS-UX-08")}>
+                  Simuler verdict OK
+                </CtaButton>
+                <CtaButton
+                  variant="secondary"
+                  onClick={() => setStateId("VS-UX-VAR-ERROR")}
+                >
+                  Simuler verdict invalide
+                </CtaButton>
+                <CtaButton variant="danger" onClick={fireStop}>
+                  STOP Morris
+                </CtaButton>
+              </div>
+            </>
+          ) : null}
+
+          {stateId === "VS-UX-08" ? (
+            <>
+              <StatusPill tone="purple">{vsFixture.verdict.label}</StatusPill>
+              <p className={styles.fieldLabel}>Prouvé</p>
+              <ul className={styles.list}>
+                {vsFixture.verdict.proven.map((item) => (
+                  <li key={item}>{item}</li>
+                ))}
+              </ul>
+              <p className={styles.fieldLabel}>Non prouvé</p>
+              <ul className={styles.list}>
+                {vsFixture.verdict.notProven.map((item) => (
+                  <li key={item}>{item}</li>
+                ))}
+              </ul>
+              <p className={styles.fieldLabel}>Écarts / risques / réserves</p>
+              <ul className={styles.list}>
+                {[
+                  ...vsFixture.verdict.gaps,
+                  ...vsFixture.verdict.risks,
+                  ...vsFixture.verdict.reserves,
+                ].map((item) => (
+                  <li key={item}>{item}</li>
+                ))}
+              </ul>
+              <div className={styles.actions}>
+                <CtaButton onClick={() => setStateId("VS-UX-09")}>
+                  Ouvrir décision Morris finale
+                </CtaButton>
+              </div>
+            </>
+          ) : null}
+        </section>
+
+        <aside className={styles.card} aria-label="Cadre d'exécution fixture">
+          <p className={styles.cardTitle}>Cadre d&apos;exécution</p>
+          <p className={styles.fieldLabel}>Allowlist</p>
+          <p className={styles.fieldValue}>{vsFixture.allowlist.join(", ")}</p>
+          <p className={styles.fieldLabel}>gitEffect</p>
+          <p className={styles.fieldValue}>none-remote</p>
+          <p className={styles.fieldLabel}>Source</p>
+          <p className={styles.fieldValue}>{vsFixture.sourceStatus}</p>
+        </aside>
+      </div>
+    </div>
+  );
+}

diff --git a/projects/sfia-studio/app/features/decision/VsDecisionScreen.tsx b/projects/sfia-studio/app/features/decision/VsDecisionScreen.tsx
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/features/decision/VsDecisionScreen.tsx
+"use client";
+
+import { CtaButton } from "@/components/ui/CtaButton";
+import { StatusPill } from "@/components/ui/StatusPill";
+import { IdStrip, VariantBanner } from "@/components/vertical-slice/VsShared";
+import { vsFixture } from "@/fixtures/vertical-slice";
+import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
+import type { VsFinalAction, VsGateAction } from "@/lib/vertical-slice/types";
+import styles from "@/components/vertical-slice/vs-panels.module.css";
+
+const gateOptions: {
+  action: VsGateAction;
+  title: string;
+  subtitle: string;
+  danger?: boolean;
+}[] = [
+  {
+    action: "GO",
+    title: "GO",
+    subtitle: "Autoriser l'exécution sandbox après revalidation harness (mock)",
+  },
+  {
+    action: "NO-GO",
+    title: "NO-GO",
+    subtitle: "Refuser l'exécution — clôture négative sans spawn",
+  },
+  {
+    action: "CORRIGER",
+    title: "Demander une correction",
+    subtitle: "Retour qualification — nouvelle consommation FinOps visible",
+  },
+  {
+    action: "ABANDONNER",
+    title: "Abandonner le cycle",
+    subtitle: "Action destructive — conséquence : cycle abandonné",
+    danger: true,
+  },
+];
+
+const finalOptions: {
+  action: VsFinalAction;
+  title: string;
+  subtitle: string;
+  danger?: boolean;
+}[] = [
+  {
+    action: "CLOTURER",
+    title: "Accepter et clôturer",
+    subtitle: "Clôture slice-only — aucun claim MVP",
+  },
+  {
+    action: "CORRIGER",
+    title: "Demander une correction",
+    subtitle: "Revoir le verdict candidat",
+  },
+  {
+    action: "RELANCER",
+    title: "Relancer sous nouveau GO",
+    subtitle: "Ré-exécution uniquement avec nouveau GO",
+  },
+  {
+    action: "ABANDONNER",
+    title: "Abandonner le cycle",
+    subtitle: "Fin du cycle sans clôture positive",
+    danger: true,
+  },
+];
+
+export function VsDecisionScreen() {
+  const {
+    stateId,
+    gateAction,
+    selectGateAction,
+    abandonConfirmOpen,
+    closeAbandonConfirm,
+    confirmAbandon,
+    confirmGate,
+    gateConfirmed,
+    abandoned,
+    selectFinalAction,
+    finalAction,
+    setStateId,
+  } = useVsDemo();
+
+  const isFinal = stateId === "VS-UX-09";
+  const isGoInvalid = stateId === "VS-UX-VAR-GO-INVALID";
+  const isGate = stateId === "VS-UX-04" || isGoInvalid;
+
+  return (
+    <div className={styles.panel} data-testid="vs-decision">
+      <IdStrip />
+
+      {isGoInvalid ? (
+        <VariantBanner tone="warn" title="GO invalide — ancrage divergé">
+          <p>
+            HEAD fixture courant : <code>{vsFixture.headInvalidated.slice(0, 12)}…</code> ≠
+            HEAD ancré : <code>{vsFixture.head.slice(0, 12)}…</code>
+          </p>
+          <p>
+            contractHash / branche / allowlist doivent être revalidés. Nouveau gate
+            requis. Ceci n&apos;est <strong>pas</strong> un Abandonner ni un NO-GO.
+          </p>
+          <div className={styles.actions}>
+            <CtaButton onClick={() => setStateId("VS-UX-04")}>
+              Rouvrir le gate
+            </CtaButton>
+          </div>
+        </VariantBanner>
+      ) : null}
+
+      <section className={styles.hero} aria-labelledby="vs-decision-hero">
+        <p className={styles.heroEyebrow}>
+          {isFinal ? "DÉCISION MORRIS FINALE" : "GATE MORRIS · EXÉCUTION"}
+        </p>
+        <h2 id="vs-decision-hero" className={styles.heroTitle}>
+          {isFinal
+            ? "Décider de la clôture avec le verdict candidat"
+            : "Décider avec le dossier d'ancrage — quatre actions distinctes"}
+        </h2>
+        <p className={styles.heroText}>
+          STOP ≠ NO-GO ≠ Abandonner. Timeout ≠ GO. Aucune action Git distante.
+        </p>
+      </section>
+
+      <div className={styles.twoCol}>
+        <section className={styles.card} aria-labelledby="vs-dossier-title">
+          <p className={styles.fieldLabel}>DOSSIER DE DÉCISION (fixture)</p>
+          <h2 id="vs-dossier-title" className={styles.cardTitle}>
+            Ancrage GO — requestId / contrat / Git
+          </h2>
+          <p className={styles.fieldLabel}>requestId</p>
+          <p className={styles.fieldValue}>{vsFixture.requestId}</p>
+          <p className={styles.fieldLabel}>contractId / hash</p>
+          <p className={styles.fieldValue}>
+            {vsFixture.contractId} · {vsFixture.contractHash}
+          </p>
+          <p className={styles.fieldLabel}>Branche · HEAD</p>
+          <p className={styles.fieldValue}>
+            {vsFixture.branch} · {vsFixture.head}
+          </p>
+          <p className={styles.fieldLabel}>Allowlist</p>
+          <p className={styles.fieldValue}>{vsFixture.allowlist.join(", ")}</p>
+          <p className={styles.fieldLabel}>Autorité</p>
+          <p className={styles.fieldValue}>{vsFixture.authority}</p>
+          <p className={styles.fieldLabel}>Horodatage</p>
+          <p className={styles.fieldValue}>
+            {vsFixture.timestamp} ({vsFixture.timezone})
+          </p>
+          <p className={styles.muted}>Timeout ≠ GO (rappel affiché).</p>
+          {!isFinal ? (
+            <div className={styles.actions}>
+              <CtaButton
+                variant="secondary"
+                onClick={() => setStateId("VS-UX-VAR-GO-INVALID")}
+                data-testid="vs-simulate-go-invalid"
+              >
+                Simuler GO invalide
+              </CtaButton>
+            </div>
+          ) : null}
+        </section>
+
+        <section
+          className={styles.card}
+          aria-labelledby="vs-morris-actions-title"
+          data-testid="vs-morris-actions"
+        >
+          <p className={styles.fieldLabel}>Décision Morris — autorité humaine</p>
+          <h2 id="vs-morris-actions-title" className={styles.cardTitle}>
+            {isFinal ? "Décision finale" : "Quatre actions du gate"}
+          </h2>
+
+          {isGate ? (
+            <div className={styles.optionGrid} role="group" aria-label="Actions gate Morris">
+              {gateOptions.map((opt) => {
+                const selected = gateAction === opt.action;
+                const className = opt.danger
+                  ? selected
+                    ? styles.optionDangerSelected
+                    : styles.optionDanger
+                  : selected
+                    ? styles.optionSelected
+                    : styles.option;
+                return (
+                  <button
+                    key={opt.action}
+                    type="button"
+                    className={className}
+                    aria-pressed={selected}
+                    data-testid={`vs-gate-${opt.action}`}
+                    aria-label={
+                      opt.action === "ABANDONNER"
+                        ? "Abandonner le cycle"
+                        : opt.title
+                    }
+                    onClick={() => selectGateAction(opt.action)}
+                  >
+                    <StatusPill tone={opt.danger ? "pink" : "blueFlush"}>
+                      {opt.title}
+                    </StatusPill>
+                    <p className={styles.optionTitle}>{opt.title}</p>
+                    <p className={styles.optionSub}>{opt.subtitle}</p>
+                  </button>
+                );
+              })}
+            </div>
+          ) : null}
+
+          {isFinal ? (
+            <div className={styles.optionGrid} role="group" aria-label="Actions décision finale">
+              {finalOptions.map((opt) => {
+                const selected = finalAction === opt.action;
+                const className = opt.danger
+                  ? selected
+                    ? styles.optionDangerSelected
+                    : styles.optionDanger
+                  : selected
+                    ? styles.optionSelected
+                    : styles.option;
+                return (
+                  <button
+                    key={opt.action}
+                    type="button"
+                    className={className}
+                    aria-pressed={selected}
+                    data-testid={`vs-final-${opt.action}`}
+                    aria-label={
+                      opt.action === "ABANDONNER"
+                        ? "Abandonner le cycle"
+                        : opt.title
+                    }
+                    onClick={() => selectFinalAction(opt.action)}
+                  >
+                    <StatusPill tone={opt.danger ? "pink" : "greenFlush"}>
+                      {opt.title}
+                    </StatusPill>
+                    <p className={styles.optionTitle}>{opt.title}</p>
+                    <p className={styles.optionSub}>{opt.subtitle}</p>
+                  </button>
+                );
+              })}
+            </div>
+          ) : null}
+
+          {abandonConfirmOpen ? (
+            <div
+              className={styles.confirmBox}
+              role="dialog"
+              aria-modal="true"
+              aria-labelledby="vs-abandon-confirm-title"
+              data-testid="vs-abandon-confirm"
+            >
+              <p id="vs-abandon-confirm-title" className={styles.optionTitle}>
+                Confirmer l&apos;abandon du cycle
+              </p>
+              <p className={styles.optionSub}>
+                Conséquence explicite : état <strong>abandonné</strong>. Aucune
+                écriture Git distante. Action destructive (danger textuel + visuel).
+              </p>
+              <div className={styles.actions}>
+                <CtaButton
+                  variant="danger"
+                  onClick={confirmAbandon}
+                  data-testid="vs-abandon-confirm-yes"
+                  aria-label="Confirmer abandonner le cycle"
+                >
+                  Confirmer — Abandonner le cycle
+                </CtaButton>
+                <CtaButton
+                  variant="secondary"
+                  onClick={closeAbandonConfirm}
+                  data-testid="vs-abandon-confirm-no"
+                >
+                  Annuler
+                </CtaButton>
+              </div>
+            </div>
+          ) : null}
+
+          {isGate && gateAction && gateAction !== "ABANDONNER" ? (
+            <div className={styles.actions}>
+              <CtaButton
+                onClick={confirmGate}
+                disabled={!gateAction}
+                data-testid="vs-gate-confirm"
+              >
+                Confirmer {gateAction}
+              </CtaButton>
+            </div>
+          ) : null}
+
+          {gateConfirmed || abandoned ? (
+            <p className={styles.muted} data-testid="vs-gate-result">
+              {abandoned
+                ? "Résultat fixture : cycle abandonné"
+                : `Résultat fixture : ${gateAction} confirmé`}
+            </p>
+          ) : null}
+
+          <p className={styles.muted}>
+            Simulation Increment A — aucun effet Git / Cursor / GPT live.
+          </p>
+        </section>
+      </div>
+    </div>
+  );
+}

diff --git a/projects/sfia-studio/app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx b/projects/sfia-studio/app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/features/nouvelle-demande/VsNouvelleDemandeScreen.tsx
+"use client";
+
+import { CtaButton } from "@/components/ui/CtaButton";
+import { StatusPill } from "@/components/ui/StatusPill";
+import { FinOpsBox, IdStrip, VariantBanner } from "@/components/vertical-slice/VsShared";
+import { vsFixture } from "@/fixtures/vertical-slice";
+import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
+import styles from "@/components/vertical-slice/vs-panels.module.css";
+
+export function VsNouvelleDemandeScreen() {
+  const { stateId, setStateId, fireStop, abandoned, confirmAbandon } = useVsDemo();
+
+  return (
+    <div className={styles.panel} data-testid="vs-nouvelle-demande">
+      <IdStrip />
+
+      {stateId === "VS-UX-VAR-LOADING" || stateId === "VS-UX-02" ? (
+        <VariantBanner tone="info" title="Loading — qualification GPT (fixture)">
+          <p className={styles.loadingPulse}>
+            <span className={styles.loadingDot} aria-hidden />
+            Phase active : qualification — aucune fausse barre de progression
+          </p>
+          <FinOpsBox phase="qualification" calls={vsFixture.gptCalls.qualification} />
+        </VariantBanner>
+      ) : null}
+
+      {stateId === "VS-UX-VAR-ERROR" ? (
+        <VariantBanner tone="error" title="Erreur fail-closed — sortie GPT invalide">
+          <p>
+            Sortie GPT rejetée (fail-closed). Aucune progression automatique vers le
+            gate. Correction ou abandon uniquement.
+          </p>
+          <div className={styles.actions}>
+            <CtaButton onClick={() => setStateId("VS-UX-02")}>
+              Demander une correction
+            </CtaButton>
+            <CtaButton variant="danger" onClick={() => setStateId("VS-UX-01")}>
+              Abandonner avant qualification
+            </CtaButton>
+          </div>
+        </VariantBanner>
+      ) : null}
+
+      <section className={styles.hero} aria-labelledby="vs-nd-hero">
+        <p className={styles.heroEyebrow}>VERTICAL SLICE · INCREMENT A</p>
+        <h2 id="vs-nd-hero" className={styles.heroTitle}>
+          {stateId === "VS-UX-03"
+            ? "Qualification proposée — revue avant gate"
+            : stateId === "VS-UX-02" || stateId === "VS-UX-VAR-LOADING"
+              ? "Qualification en cours (simulée)"
+              : "Nouvelle demande de preuve Markdown"}
+        </h2>
+        <p className={styles.heroText}>
+          Saisie et qualification mockées. Aucun appel réseau live. Studio reste une
+          vue dérivée.
+        </p>
+      </section>
+
+      <div className={styles.twoCol}>
+        <section className={styles.card} aria-labelledby="vs-request-title">
+          <p className={styles.fieldLabel}>StudioRequest (fixture)</p>
+          <h2 id="vs-request-title" className={styles.cardTitle}>
+            {vsFixture.request.title}
+          </h2>
+          <p className={styles.fieldLabel}>Synthèse</p>
+          <p className={styles.fieldValue}>{vsFixture.request.summary}</p>
+          <p className={styles.fieldLabel}>IDs visibles</p>
+          <p className={styles.fieldValue}>
+            {vsFixture.requestId} · {vsFixture.correlationId}
+          </p>
+          <div className={styles.actions}>
+            {(stateId === "VS-UX-01" || abandoned) && (
+              <>
+                <CtaButton onClick={() => setStateId("VS-UX-02")}>
+                  Qualifier la demande
+                </CtaButton>
+                <CtaButton
+                  variant="danger"
+                  onClick={() => {
+                    confirmAbandon();
+                  }}
+                  data-testid="vs-abandon-prequal"
+                  aria-label="Abandonner le cycle avant qualification"
+                >
+                  Abandonner avant qualification
+                </CtaButton>
+              </>
+            )}
+            {(stateId === "VS-UX-02" || stateId === "VS-UX-VAR-LOADING") && (
+              <>
+                <CtaButton onClick={() => setStateId("VS-UX-03")}>
+                  Simuler qualification OK
+                </CtaButton>
+                <CtaButton
+                  variant="danger"
+                  onClick={fireStop}
+                  aria-label="STOP Morris pendant qualification"
+                >
+                  STOP Morris
+                </CtaButton>
+                <CtaButton
+                  variant="secondary"
+                  onClick={() => setStateId("VS-UX-VAR-ERROR")}
+                >
+                  Simuler erreur fail-closed
+                </CtaButton>
+              </>
+            )}
+            {stateId === "VS-UX-03" && (
+              <>
+                <CtaButton onClick={() => setStateId("VS-UX-04")}>
+                  Continuer vers le gate
+                </CtaButton>
+                <CtaButton
+                  variant="secondary"
+                  onClick={() => setStateId("VS-UX-02")}
+                >
+                  Demander une correction
+                </CtaButton>
+              </>
+            )}
+          </div>
+          {stateId === "VS-UX-01" ? (
+            <p className={styles.muted} data-testid="vs-finops-zero">
+              Consommation GPT avant qualification : 0 / {vsFixture.gptCalls.ceiling}
+            </p>
+          ) : null}
+        </section>
+
+        <aside className={styles.card} aria-label="Prévisualisation qualification">
+          {stateId === "VS-UX-03" ? (
+            <>
+              <StatusPill tone="purple">Candidat GPT</StatusPill>
+              <p className={styles.fieldLabel}>Cycle</p>
+              <p className={styles.fieldValue}>{vsFixture.qualification.cycle}</p>
+              <p className={styles.fieldLabel}>Profil</p>
+              <p className={styles.fieldValue}>{vsFixture.qualification.profile}</p>
+              <p className={styles.fieldLabel}>Allowlist</p>
+              <p className={styles.fieldValue}>
+                {vsFixture.qualification.allowlist.join(", ")}
+              </p>
+              <p className={styles.fieldLabel}>Stops</p>
+              <p className={styles.fieldValue}>
+                {vsFixture.qualification.stops.join(" · ")}
+              </p>
+              <p className={styles.fieldLabel}>Hash</p>
+              <p className={styles.fieldValue}>{vsFixture.qualification.hashPreview}</p>
+              <p className={styles.fieldLabel}>Source</p>
+              <p className={styles.fieldValue}>{vsFixture.qualification.source}</p>
+              <p className={styles.muted}>Pas d&apos;auto-GO.</p>
+            </>
+          ) : (
+            <>
+              <p className={styles.cardTitle}>Aperçu gouverné</p>
+              <p className={styles.fieldValue}>
+                Les champs de qualification complète apparaissent à l&apos;état
+                VS-UX-03 avant tout gate.
+              </p>
+              <FinOpsBox
+                phase={
+                  stateId === "VS-UX-02" || stateId === "VS-UX-VAR-LOADING"
+                    ? "qualification"
+                    : "idle"
+                }
+                calls={
+                  stateId === "VS-UX-01" ? 0 : vsFixture.gptCalls.qualification
+                }
+              />
+            </>
+          )}
+        </aside>
+      </div>
+    </div>
+  );
+}

diff --git a/projects/sfia-studio/app/features/synthese/VsSyntheseScreen.tsx b/projects/sfia-studio/app/features/synthese/VsSyntheseScreen.tsx
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/features/synthese/VsSyntheseScreen.tsx
+"use client";
+
+import { StatusPill } from "@/components/ui/StatusPill";
+import { IdStrip } from "@/components/vertical-slice/VsShared";
+import { vsFixture } from "@/fixtures/vertical-slice";
+import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
+import styles from "@/components/vertical-slice/vs-panels.module.css";
+
+export function VsSyntheseScreen() {
+  const { abandoned, finalAction } = useVsDemo();
+
+  return (
+    <div className={styles.panel} data-testid="vs-synthese">
+      <IdStrip />
+
+      <section className={styles.hero} aria-labelledby="vs-close-hero">
+        <p className={styles.heroEyebrow}>CLÔTURE · SLICE COURANT UNIQUEMENT</p>
+        <h2 id="vs-close-hero" className={styles.heroTitle}>
+          CycleSummary — vertical slice POC
+        </h2>
+        <p className={styles.heroText}>
+          Aucun portefeuille multi-projet. Aucun claim MVP ou production-ready.
+        </p>
+      </section>
+
+      <section className={styles.card} data-testid="vs-cycle-summary">
+        <StatusPill tone={abandoned ? "pink" : "greenFlush"}>
+          {abandoned ? "abandonné" : vsFixture.summary.finalStatus}
+        </StatusPill>
+        <p className={styles.fieldLabel}>requestId</p>
+        <p className={styles.fieldValue}>{vsFixture.requestId}</p>
+        <p className={styles.fieldLabel}>Statut final</p>
+        <p className={styles.fieldValue}>
+          {abandoned ? "abandonné (fixture)" : vsFixture.summary.finalStatus}
+        </p>
+        <p className={styles.fieldLabel}>Décision Morris</p>
+        <p className={styles.fieldValue}>
+          {abandoned
+            ? "Abandonner"
+            : finalAction === "CLOTURER"
+              ? vsFixture.summary.decision
+              : finalAction ?? vsFixture.summary.decision}
+        </p>
+        <p className={styles.fieldLabel}>Fichier Markdown (mock)</p>
+        <p className={styles.fieldValue}>{vsFixture.summary.markdownFile}</p>
+        <p className={styles.fieldLabel}>Rapport / preuves</p>
+        <p className={styles.fieldValue}>
+          {vsFixture.summary.reportRef} · {vsFixture.summary.proofRef}
+        </p>
+        <p className={styles.fieldLabel}>Compteur GPT</p>
+        <p className={styles.fieldValue} data-testid="vs-summary-gpt">
+          {vsFixture.summary.gptCounter}
+        </p>
+        <p className={styles.fieldLabel}>Branche · HEAD · contractHash</p>
+        <p className={styles.fieldValue}>
+          {vsFixture.branch} · {vsFixture.head} · {vsFixture.contractHash}
+        </p>
+        <p className={styles.fieldLabel}>Réserves</p>
+        <ul className={styles.list}>
+          {vsFixture.summary.reserves.map((r) => (
+            <li key={r}>{r}</li>
+          ))}
+        </ul>
+        <p className={styles.forbidden} data-testid="vs-no-mvp-claim">
+          Interdit : MVP · production-ready · Studio complete · industrialisé
+        </p>
+        <p className={styles.muted} data-testid="vs-no-portfolio">
+          Hors périmètre affiché : portefeuille multi-projet, autres cycles hors
+          slice.
+        </p>
+      </section>
+    </div>
+  );
+}

diff --git a/projects/sfia-studio/app/fixtures/vertical-slice.ts b/projects/sfia-studio/app/fixtures/vertical-slice.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/fixtures/vertical-slice.ts
+/**
+ * Fixtures Increment A — vertical slice POC.
+ * Données de démonstration uniquement. Aucun secret, aucune PII réelle, aucun live.
+ */
+
+export const vsFixture = {
+  demoLabel: "Données de démonstration — état simulé / fixture",
+  noLiveLabel: "Aucune exécution réelle · aucun GPT live · aucun Cursor live · aucune écriture Git distante",
+  requestId: "req-vs-poc-001",
+  correlationId: "corr-vs-poc-001",
+  contractId: "ctr-vs-poc-001",
+  contractHash: "sha256:fixture9f3c2a7b1e8d0456",
+  branch: "delivery/sfia-studio-poc-increment-a",
+  head: "e7502bf2f1791cc4b9639cc1949006d888931f1c",
+  headInvalidated: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
+  allowlist: ["sandbox/vs-poc/output.md"],
+  authority: "Morris (L0)",
+  timezone: "Europe/Paris",
+  timestamp: "2026-07-19T23:16:00+02:00",
+  sourceStatus: "dérivé Studio (fixture)",
+  gptCalls: {
+    qualification: 1,
+    analysis: 0,
+    ceiling: "À définir",
+    noRetry: "Aucun retry automatique",
+  },
+  request: {
+    title: "Preuve Markdown sandbox (vertical slice POC)",
+    summary:
+      "Créer un fichier Markdown de preuve dans la sandbox autorisée pour démontrer le parcours gouverné bout-en-bout.",
+  },
+  qualification: {
+    cycle: "Conception fonctionnelle — preuve BeB",
+    profile: "Standard",
+    allowlist: ["sandbox/vs-poc/output.md"],
+    stops: ["Hors allowlist", "GO invalide", "STOP Morris"],
+    hashPreview: "sha256:fixture9f3c2a7b1e8d0456",
+    source: "GPT (candidat fixture)",
+  },
+  report: {
+    status: "terminé (fixture)",
+    filesTouched: ["sandbox/vs-poc/output.md"],
+    remoteWrites: 0,
+    reserves: ["Exécution mockée — pas de Cursor réel"],
+    markdownPreview:
+      "# Preuve vertical slice\n\nFichier Markdown sandbox (fixture).\n",
+  },
+  verdict: {
+    label: "Candidat GPT",
+    proven: ["Fichier Markdown mock présent dans allowlist"],
+    notProven: ["Exécution Cursor réelle", "Intégration harness"],
+    gaps: ["Adaptateur Studio↔harness absent (Incr. B)"],
+    risks: ["Confusion live / fixture si non étiqueté"],
+    reserves: ["Plafond GPT numérique À définir"],
+    morrisRequired: ["Décision finale humaine", "Aucun claim MVP"],
+  },
+  summary: {
+    finalStatus: "clôturé (fixture slice-only)",
+    decision: "Accepter et clôturer (mock)",
+    markdownFile: "sandbox/vs-poc/output.md",
+    reportRef: "CursorExecutionReport#fixture-001",
+    proofRef: "ReviewPackReference#fixture-001",
+    gptCounter: "1 / À définir (qualification) · 0 / À définir (analyse)",
+    reserves: [
+      "Incrément A uniquement",
+      "Pas d’adaptateur",
+      "Pas de live",
+      "Pas de claim MVP / production-ready",
+    ],
+  },
+  events: [
+    {
+      eventId: "evt-001",
+      type: "request_created",
+      at: "2026-07-19T23:10:00+02:00",
+    },
+    {
+      eventId: "evt-002",
+      type: "qualification_fixture",
+      at: "2026-07-19T23:11:00+02:00",
+    },
+    {
+      eventId: "evt-003",
+      type: "gate_ready",
+      at: "2026-07-19T23:12:00+02:00",
+    },
+  ],
+} as const;
+
+export type VsFixture = typeof vsFixture;

diff --git a/projects/sfia-studio/app/lib/vertical-slice/VsDemoContext.tsx b/projects/sfia-studio/app/lib/vertical-slice/VsDemoContext.tsx
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/vertical-slice/VsDemoContext.tsx
+"use client";
+
+import {
+  createContext,
+  useCallback,
+  useContext,
+  useEffect,
+  useMemo,
+  useState,
+  type ReactNode,
+} from "react";
+import { usePathname, useRouter, useSearchParams } from "next/navigation";
+import type { StudioRoute } from "@/lib/navigation";
+import {
+  defaultStateForRoute,
+  metaFor,
+  parseVsQuery,
+} from "@/lib/vertical-slice/mapping";
+import type {
+  VsDemoUiState,
+  VsFinalAction,
+  VsGateAction,
+  VsStateId,
+} from "@/lib/vertical-slice/types";
+
+interface VsDemoContextValue extends VsDemoUiState {
+  setStateId: (id: VsStateId) => void;
+  selectGateAction: (action: VsGateAction) => void;
+  openAbandonConfirm: () => void;
+  closeAbandonConfirm: () => void;
+  confirmAbandon: () => void;
+  confirmGate: () => void;
+  selectFinalAction: (action: VsFinalAction) => void;
+  fireStop: () => void;
+  resetDemo: () => void;
+}
+
+const VsDemoContext = createContext<VsDemoContextValue | null>(null);
+
+function routeFromPath(pathname: string): StudioRoute {
+  if (pathname.startsWith("/decision")) return "/decision";
+  if (pathname.startsWith("/cycle-actif")) return "/cycle-actif";
+  if (pathname.startsWith("/synthese")) return "/synthese";
+  return "/nouvelle-demande";
+}
+
+export function VsDemoProvider({ children }: { children: ReactNode }) {
+  const router = useRouter();
+  const pathname = usePathname() || "/nouvelle-demande";
+  const searchParams = useSearchParams();
+  const route = routeFromPath(pathname);
+
+  const [stateId, setStateIdLocal] = useState<VsStateId>(() => {
+    return parseVsQuery(searchParams.get("vs")) ?? defaultStateForRoute(route);
+  });
+  const [abandoned, setAbandoned] = useState(false);
+  const [gateAction, setGateAction] = useState<VsGateAction | null>(null);
+  const [gateConfirmed, setGateConfirmed] = useState(false);
+  const [abandonConfirmOpen, setAbandonConfirmOpen] = useState(false);
+  const [finalAction, setFinalAction] = useState<VsFinalAction | null>(null);
+  const [stopFired, setStopFired] = useState(false);
+
+  useEffect(() => {
+    const fromQuery = parseVsQuery(searchParams.get("vs"));
+    if (fromQuery) {
+      setStateIdLocal(fromQuery);
+      return;
+    }
+    const meta = metaFor(stateId);
+    if (meta.route !== route) {
+      setStateIdLocal(defaultStateForRoute(route));
+    }
+    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync on route/query only
+  }, [pathname, searchParams]);
+
+  const setStateId = useCallback(
+    (id: VsStateId) => {
+      const meta = metaFor(id);
+      setStateIdLocal(id);
+      setAbandoned(false);
+      setGateAction(null);
+      setGateConfirmed(false);
+      setAbandonConfirmOpen(false);
+      setFinalAction(null);
+      setStopFired(id === "VS-UX-VAR-STOP");
+      const params = new URLSearchParams(searchParams.toString());
+      params.set("vs", id);
+      router.push(`${meta.route}?${params.toString()}`);
+    },
+    [router, searchParams],
+  );
+
+  const selectGateAction = useCallback((action: VsGateAction) => {
+    setGateAction(action);
+    setGateConfirmed(false);
+    if (action === "ABANDONNER") {
+      setAbandonConfirmOpen(true);
+    } else {
+      setAbandonConfirmOpen(false);
+    }
+  }, []);
+
+  const openAbandonConfirm = useCallback(() => setAbandonConfirmOpen(true), []);
+  const closeAbandonConfirm = useCallback(() => {
+    setAbandonConfirmOpen(false);
+    if (gateAction === "ABANDONNER") setGateAction(null);
+  }, [gateAction]);
+
+  const confirmAbandon = useCallback(() => {
+    setAbandoned(true);
+    setAbandonConfirmOpen(false);
+    setGateAction("ABANDONNER");
+    setGateConfirmed(true);
+  }, []);
+
+  const confirmGate = useCallback(() => {
+    if (!gateAction || gateAction === "ABANDONNER") return;
+    setGateConfirmed(true);
+    if (gateAction === "GO") {
+      setStateId("VS-UX-05");
+    } else if (gateAction === "NO-GO") {
+      setStateId("VS-UX-10");
+    } else if (gateAction === "CORRIGER") {
+      setStateId("VS-UX-02");
+    }
+  }, [gateAction, setStateId]);
+
+  const selectFinalAction = useCallback(
+    (action: VsFinalAction) => {
+      setFinalAction(action);
+      if (action === "ABANDONNER") {
+        setAbandoned(true);
+      }
+      if (action === "CLOTURER") {
+        setStateId("VS-UX-10");
+      }
+    },
+    [setStateId],
+  );
+
+  const fireStop = useCallback(() => {
+    setStopFired(true);
+    setStateId("VS-UX-VAR-STOP");
+  }, [setStateId]);
+
+  const resetDemo = useCallback(() => {
+    setAbandoned(false);
+    setGateAction(null);
+    setGateConfirmed(false);
+    setAbandonConfirmOpen(false);
+    setFinalAction(null);
+    setStopFired(false);
+    setStateId("VS-UX-01");
+  }, [setStateId]);
+
+  const value = useMemo<VsDemoContextValue>(
+    () => ({
+      stateId,
+      abandoned,
+      gateAction,
+      gateConfirmed,
+      abandonConfirmOpen,
+      finalAction,
+      stopFired,
+      setStateId,
+      selectGateAction,
+      openAbandonConfirm,
+      closeAbandonConfirm,
+      confirmAbandon,
+      confirmGate,
+      selectFinalAction,
+      fireStop,
+      resetDemo,
+    }),
+    [
+      stateId,
+      abandoned,
+      gateAction,
+      gateConfirmed,
+      abandonConfirmOpen,
+      finalAction,
+      stopFired,
+      setStateId,
+      selectGateAction,
+      openAbandonConfirm,
+      closeAbandonConfirm,
+      confirmAbandon,
+      confirmGate,
+      selectFinalAction,
+      fireStop,
+      resetDemo,
+    ],
+  );
+
+  return (
+    <VsDemoContext.Provider value={value}>{children}</VsDemoContext.Provider>
+  );
+}
+
+export function useVsDemo(): VsDemoContextValue {
+  const ctx = useContext(VsDemoContext);
+  if (!ctx) {
+    throw new Error("useVsDemo must be used within VsDemoProvider");
+  }
+  return ctx;
+}

diff --git a/projects/sfia-studio/app/lib/vertical-slice/index.ts b/projects/sfia-studio/app/lib/vertical-slice/index.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/vertical-slice/index.ts
+export type {
+  VsStateId,
+  VsGateAction,
+  VsFinalAction,
+  VsStateMeta,
+  VsDemoUiState,
+} from "./types";
+export {
+  VS_STATES,
+  VS_STATE_IDS,
+  STUDIO_ROUTES_ONLY,
+  metaFor,
+  defaultStateForRoute,
+  parseVsQuery,
+} from "./mapping";

diff --git a/projects/sfia-studio/app/lib/vertical-slice/mapping.ts b/projects/sfia-studio/app/lib/vertical-slice/mapping.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/vertical-slice/mapping.ts
+import type { StudioRoute } from "@/lib/navigation";
+import type { VsStateId, VsStateMeta } from "./types";
+
+export const VS_STATES: VsStateMeta[] = [
+  {
+    id: "VS-UX-01",
+    label: "01 — Nouvelle demande",
+    route: "/nouvelle-demande",
+    kind: "state",
+    figmaNode: "51:3",
+    dimensions: "1440×1024",
+  },
+  {
+    id: "VS-UX-02",
+    label: "02 — Qualification en cours",
+    route: "/nouvelle-demande",
+    kind: "state",
+    figmaNode: "51:139",
+    dimensions: "1440×1024",
+  },
+  {
+    id: "VS-UX-03",
+    label: "03 — Qualification proposée",
+    route: "/nouvelle-demande",
+    kind: "state",
+    figmaNode: "51:277",
+    dimensions: "1440×1024",
+  },
+  {
+    id: "VS-UX-04",
+    label: "04 — Gate Morris",
+    route: "/decision",
+    kind: "state",
+    figmaNode: "51:415",
+    dimensions: "1440×1024",
+  },
+  {
+    id: "VS-UX-05",
+    label: "05 — Exécution",
+    route: "/cycle-actif",
+    kind: "state",
+    figmaNode: "51:540",
+    dimensions: "1440×1024",
+  },
+  {
+    id: "VS-UX-06",
+    label: "06 — Rapport disponible",
+    route: "/cycle-actif",
+    kind: "state",
+    figmaNode: "51:678",
+    dimensions: "1440×1024",
+  },
+  {
+    id: "VS-UX-07",
+    label: "07 — Analyse GPT",
+    route: "/cycle-actif",
+    kind: "state",
+    figmaNode: "51:816",
+    dimensions: "1440×1024",
+  },
+  {
+    id: "VS-UX-08",
+    label: "08 — Verdict proposé",
+    route: "/cycle-actif",
+    kind: "state",
+    figmaNode: "51:954",
+    dimensions: "1440×1024",
+  },
+  {
+    id: "VS-UX-09",
+    label: "09 — Décision Morris finale",
+    route: "/decision",
+    kind: "state",
+    figmaNode: "51:1079",
+    dimensions: "1440×1024",
+  },
+  {
+    id: "VS-UX-10",
+    label: "10 — Clôture slice-only",
+    route: "/synthese",
+    kind: "state",
+    figmaNode: "51:1204",
+    dimensions: "1440×1024",
+  },
+  {
+    id: "VS-UX-VAR-LOADING",
+    label: "VAR — Loading GPT",
+    route: "/nouvelle-demande",
+    kind: "variant",
+    figmaNode: "52:2",
+    dimensions: "720×420",
+  },
+  {
+    id: "VS-UX-VAR-ERROR",
+    label: "VAR — Erreur fail-closed",
+    route: "/nouvelle-demande",
+    kind: "variant",
+    figmaNode: "52:10",
+    dimensions: "720×420",
+  },
+  {
+    id: "VS-UX-VAR-STOP",
+    label: "VAR — STOP Morris",
+    route: "/cycle-actif",
+    kind: "variant",
+    figmaNode: "52:18",
+    dimensions: "720×420",
+  },
+  {
+    id: "VS-UX-VAR-GO-INVALID",
+    label: "VAR — GO invalide",
+    route: "/decision",
+    kind: "variant",
+    figmaNode: "52:26",
+    dimensions: "720×420",
+  },
+];
+
+export const VS_STATE_IDS = VS_STATES.map((s) => s.id);
+
+export const STUDIO_ROUTES_ONLY: StudioRoute[] = [
+  "/nouvelle-demande",
+  "/decision",
+  "/cycle-actif",
+  "/synthese",
+];
+
+export function metaFor(id: VsStateId): VsStateMeta {
+  const found = VS_STATES.find((s) => s.id === id);
+  if (!found) throw new Error(`Unknown VS state: ${id}`);
+  return found;
+}
+
+export function defaultStateForRoute(route: StudioRoute): VsStateId {
+  switch (route) {
+    case "/nouvelle-demande":
+      return "VS-UX-01";
+    case "/decision":
+      return "VS-UX-04";
+    case "/cycle-actif":
+      return "VS-UX-05";
+    case "/synthese":
+      return "VS-UX-10";
+  }
+}
+
+export function parseVsQuery(value: string | null | undefined): VsStateId | null {
+  if (!value) return null;
+  const normalized = value.trim().toUpperCase();
+  const aliases: Record<string, VsStateId> = {
+    "01": "VS-UX-01",
+    "02": "VS-UX-02",
+    "03": "VS-UX-03",
+    "04": "VS-UX-04",
+    "05": "VS-UX-05",
+    "06": "VS-UX-06",
+    "07": "VS-UX-07",
+    "08": "VS-UX-08",
+    "09": "VS-UX-09",
+    "10": "VS-UX-10",
+    LOADING: "VS-UX-VAR-LOADING",
+    ERROR: "VS-UX-VAR-ERROR",
+    STOP: "VS-UX-VAR-STOP",
+    "GO-INVALID": "VS-UX-VAR-GO-INVALID",
+    GO_INVALID: "VS-UX-VAR-GO-INVALID",
+  };
+  if (normalized in aliases) return aliases[normalized];
+  if ((VS_STATE_IDS as string[]).includes(normalized)) {
+    return normalized as VsStateId;
+  }
+  return null;
+}
+
+export function queryFor(id: VsStateId): string {
+  return id.replace("VS-UX-", "").replace("VAR-", "VAR-");
+}

diff --git a/projects/sfia-studio/app/lib/vertical-slice/types.ts b/projects/sfia-studio/app/lib/vertical-slice/types.ts
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/app/lib/vertical-slice/types.ts
+import type { StudioRoute } from "@/lib/navigation";
+
+/** Dix états fonctionnels + quatre variantes — pas de routes dédiées. */
+export type VsStateId =
+  | "VS-UX-01"
+  | "VS-UX-02"
+  | "VS-UX-03"
+  | "VS-UX-04"
+  | "VS-UX-05"
+  | "VS-UX-06"
+  | "VS-UX-07"
+  | "VS-UX-08"
+  | "VS-UX-09"
+  | "VS-UX-10"
+  | "VS-UX-VAR-LOADING"
+  | "VS-UX-VAR-ERROR"
+  | "VS-UX-VAR-STOP"
+  | "VS-UX-VAR-GO-INVALID";
+
+export type VsGateAction = "GO" | "NO-GO" | "CORRIGER" | "ABANDONNER";
+
+export type VsFinalAction =
+  | "CLOTURER"
+  | "CORRIGER"
+  | "RELANCER"
+  | "ABANDONNER";
+
+export interface VsStateMeta {
+  id: VsStateId;
+  label: string;
+  route: StudioRoute;
+  kind: "state" | "variant";
+  figmaNode: string;
+  dimensions: string;
+}
+
+export interface VsDemoUiState {
+  stateId: VsStateId;
+  abandoned: boolean;
+  gateAction: VsGateAction | null;
+  gateConfirmed: boolean;
+  abandonConfirmOpen: boolean;
+  finalAction: VsFinalAction | null;
+  stopFired: boolean;
+}



---

# ANNEXE B — Fichiers clés (intégral)


## FILE: projects/sfia-studio/app/fixtures/vertical-slice.ts

```
/**
 * Fixtures Increment A — vertical slice POC.
 * Données de démonstration uniquement. Aucun secret, aucune PII réelle, aucun live.
 */

export const vsFixture = {
  demoLabel: "Données de démonstration — état simulé / fixture",
  noLiveLabel: "Aucune exécution réelle · aucun GPT live · aucun Cursor live · aucune écriture Git distante",
  requestId: "req-vs-poc-001",
  correlationId: "corr-vs-poc-001",
  contractId: "ctr-vs-poc-001",
  contractHash: "sha256:fixture9f3c2a7b1e8d0456",
  branch: "delivery/sfia-studio-poc-increment-a",
  head: "e7502bf2f1791cc4b9639cc1949006d888931f1c",
  headInvalidated: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  allowlist: ["sandbox/vs-poc/output.md"],
  authority: "Morris (L0)",
  timezone: "Europe/Paris",
  timestamp: "2026-07-19T23:16:00+02:00",
  sourceStatus: "dérivé Studio (fixture)",
  gptCalls: {
    qualification: 1,
    analysis: 0,
    ceiling: "À définir",
    noRetry: "Aucun retry automatique",
  },
  request: {
    title: "Preuve Markdown sandbox (vertical slice POC)",
    summary:
      "Créer un fichier Markdown de preuve dans la sandbox autorisée pour démontrer le parcours gouverné bout-en-bout.",
  },
  qualification: {
    cycle: "Conception fonctionnelle — preuve BeB",
    profile: "Standard",
    allowlist: ["sandbox/vs-poc/output.md"],
    stops: ["Hors allowlist", "GO invalide", "STOP Morris"],
    hashPreview: "sha256:fixture9f3c2a7b1e8d0456",
    source: "GPT (candidat fixture)",
  },
  report: {
    status: "terminé (fixture)",
    filesTouched: ["sandbox/vs-poc/output.md"],
    remoteWrites: 0,
    reserves: ["Exécution mockée — pas de Cursor réel"],
    markdownPreview:
      "# Preuve vertical slice\n\nFichier Markdown sandbox (fixture).\n",
  },
  verdict: {
    label: "Candidat GPT",
    proven: ["Fichier Markdown mock présent dans allowlist"],
    notProven: ["Exécution Cursor réelle", "Intégration harness"],
    gaps: ["Adaptateur Studio↔harness absent (Incr. B)"],
    risks: ["Confusion live / fixture si non étiqueté"],
    reserves: ["Plafond GPT numérique À définir"],
    morrisRequired: ["Décision finale humaine", "Aucun claim MVP"],
  },
  summary: {
    finalStatus: "clôturé (fixture slice-only)",
    decision: "Accepter et clôturer (mock)",
    markdownFile: "sandbox/vs-poc/output.md",
    reportRef: "CursorExecutionReport#fixture-001",
    proofRef: "ReviewPackReference#fixture-001",
    gptCounter: "1 / À définir (qualification) · 0 / À définir (analyse)",
    reserves: [
      "Incrément A uniquement",
      "Pas d’adaptateur",
      "Pas de live",
      "Pas de claim MVP / production-ready",
    ],
  },
  events: [
    {
      eventId: "evt-001",
      type: "request_created",
      at: "2026-07-19T23:10:00+02:00",
    },
    {
      eventId: "evt-002",
      type: "qualification_fixture",
      at: "2026-07-19T23:11:00+02:00",
    },
    {
      eventId: "evt-003",
      type: "gate_ready",
      at: "2026-07-19T23:12:00+02:00",
    },
  ],
} as const;

export type VsFixture = typeof vsFixture;

```

## FILE: projects/sfia-studio/app/lib/vertical-slice/mapping.ts

```
import type { StudioRoute } from "@/lib/navigation";
import type { VsStateId, VsStateMeta } from "./types";

export const VS_STATES: VsStateMeta[] = [
  {
    id: "VS-UX-01",
    label: "01 — Nouvelle demande",
    route: "/nouvelle-demande",
    kind: "state",
    figmaNode: "51:3",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-02",
    label: "02 — Qualification en cours",
    route: "/nouvelle-demande",
    kind: "state",
    figmaNode: "51:139",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-03",
    label: "03 — Qualification proposée",
    route: "/nouvelle-demande",
    kind: "state",
    figmaNode: "51:277",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-04",
    label: "04 — Gate Morris",
    route: "/decision",
    kind: "state",
    figmaNode: "51:415",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-05",
    label: "05 — Exécution",
    route: "/cycle-actif",
    kind: "state",
    figmaNode: "51:540",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-06",
    label: "06 — Rapport disponible",
    route: "/cycle-actif",
    kind: "state",
    figmaNode: "51:678",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-07",
    label: "07 — Analyse GPT",
    route: "/cycle-actif",
    kind: "state",
    figmaNode: "51:816",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-08",
    label: "08 — Verdict proposé",
    route: "/cycle-actif",
    kind: "state",
    figmaNode: "51:954",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-09",
    label: "09 — Décision Morris finale",
    route: "/decision",
    kind: "state",
    figmaNode: "51:1079",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-10",
    label: "10 — Clôture slice-only",
    route: "/synthese",
    kind: "state",
    figmaNode: "51:1204",
    dimensions: "1440×1024",
  },
  {
    id: "VS-UX-VAR-LOADING",
    label: "VAR — Loading GPT",
    route: "/nouvelle-demande",
    kind: "variant",
    figmaNode: "52:2",
    dimensions: "720×420",
  },
  {
    id: "VS-UX-VAR-ERROR",
    label: "VAR — Erreur fail-closed",
    route: "/nouvelle-demande",
    kind: "variant",
    figmaNode: "52:10",
    dimensions: "720×420",
  },
  {
    id: "VS-UX-VAR-STOP",
    label: "VAR — STOP Morris",
    route: "/cycle-actif",
    kind: "variant",
    figmaNode: "52:18",
    dimensions: "720×420",
  },
  {
    id: "VS-UX-VAR-GO-INVALID",
    label: "VAR — GO invalide",
    route: "/decision",
    kind: "variant",
    figmaNode: "52:26",
    dimensions: "720×420",
  },
];

export const VS_STATE_IDS = VS_STATES.map((s) => s.id);

export const STUDIO_ROUTES_ONLY: StudioRoute[] = [
  "/nouvelle-demande",
  "/decision",
  "/cycle-actif",
  "/synthese",
];

export function metaFor(id: VsStateId): VsStateMeta {
  const found = VS_STATES.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown VS state: ${id}`);
  return found;
}

export function defaultStateForRoute(route: StudioRoute): VsStateId {
  switch (route) {
    case "/nouvelle-demande":
      return "VS-UX-01";
    case "/decision":
      return "VS-UX-04";
    case "/cycle-actif":
      return "VS-UX-05";
    case "/synthese":
      return "VS-UX-10";
  }
}

export function parseVsQuery(value: string | null | undefined): VsStateId | null {
  if (!value) return null;
  const normalized = value.trim().toUpperCase();
  const aliases: Record<string, VsStateId> = {
    "01": "VS-UX-01",
    "02": "VS-UX-02",
    "03": "VS-UX-03",
    "04": "VS-UX-04",
    "05": "VS-UX-05",
    "06": "VS-UX-06",
    "07": "VS-UX-07",
    "08": "VS-UX-08",
    "09": "VS-UX-09",
    "10": "VS-UX-10",
    LOADING: "VS-UX-VAR-LOADING",
    ERROR: "VS-UX-VAR-ERROR",
    STOP: "VS-UX-VAR-STOP",
    "GO-INVALID": "VS-UX-VAR-GO-INVALID",
    GO_INVALID: "VS-UX-VAR-GO-INVALID",
  };
  if (normalized in aliases) return aliases[normalized];
  if ((VS_STATE_IDS as string[]).includes(normalized)) {
    return normalized as VsStateId;
  }
  return null;
}

export function queryFor(id: VsStateId): string {
  return id.replace("VS-UX-", "").replace("VAR-", "VAR-");
}

```

## FILE: projects/sfia-studio/app/lib/vertical-slice/types.ts

```
import type { StudioRoute } from "@/lib/navigation";

/** Dix états fonctionnels + quatre variantes — pas de routes dédiées. */
export type VsStateId =
  | "VS-UX-01"
  | "VS-UX-02"
  | "VS-UX-03"
  | "VS-UX-04"
  | "VS-UX-05"
  | "VS-UX-06"
  | "VS-UX-07"
  | "VS-UX-08"
  | "VS-UX-09"
  | "VS-UX-10"
  | "VS-UX-VAR-LOADING"
  | "VS-UX-VAR-ERROR"
  | "VS-UX-VAR-STOP"
  | "VS-UX-VAR-GO-INVALID";

export type VsGateAction = "GO" | "NO-GO" | "CORRIGER" | "ABANDONNER";

export type VsFinalAction =
  | "CLOTURER"
  | "CORRIGER"
  | "RELANCER"
  | "ABANDONNER";

export interface VsStateMeta {
  id: VsStateId;
  label: string;
  route: StudioRoute;
  kind: "state" | "variant";
  figmaNode: string;
  dimensions: string;
}

export interface VsDemoUiState {
  stateId: VsStateId;
  abandoned: boolean;
  gateAction: VsGateAction | null;
  gateConfirmed: boolean;
  abandonConfirmOpen: boolean;
  finalAction: VsFinalAction | null;
  stopFired: boolean;
}

```

## FILE: projects/sfia-studio/app/features/decision/VsDecisionScreen.tsx

```
"use client";

import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import { IdStrip, VariantBanner } from "@/components/vertical-slice/VsShared";
import { vsFixture } from "@/fixtures/vertical-slice";
import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
import type { VsFinalAction, VsGateAction } from "@/lib/vertical-slice/types";
import styles from "@/components/vertical-slice/vs-panels.module.css";

const gateOptions: {
  action: VsGateAction;
  title: string;
  subtitle: string;
  danger?: boolean;
}[] = [
  {
    action: "GO",
    title: "GO",
    subtitle: "Autoriser l'exécution sandbox après revalidation harness (mock)",
  },
  {
    action: "NO-GO",
    title: "NO-GO",
    subtitle: "Refuser l'exécution — clôture négative sans spawn",
  },
  {
    action: "CORRIGER",
    title: "Demander une correction",
    subtitle: "Retour qualification — nouvelle consommation FinOps visible",
  },
  {
    action: "ABANDONNER",
    title: "Abandonner le cycle",
    subtitle: "Action destructive — conséquence : cycle abandonné",
    danger: true,
  },
];

const finalOptions: {
  action: VsFinalAction;
  title: string;
  subtitle: string;
  danger?: boolean;
}[] = [
  {
    action: "CLOTURER",
    title: "Accepter et clôturer",
    subtitle: "Clôture slice-only — aucun claim MVP",
  },
  {
    action: "CORRIGER",
    title: "Demander une correction",
    subtitle: "Revoir le verdict candidat",
  },
  {
    action: "RELANCER",
    title: "Relancer sous nouveau GO",
    subtitle: "Ré-exécution uniquement avec nouveau GO",
  },
  {
    action: "ABANDONNER",
    title: "Abandonner le cycle",
    subtitle: "Fin du cycle sans clôture positive",
    danger: true,
  },
];

export function VsDecisionScreen() {
  const {
    stateId,
    gateAction,
    selectGateAction,
    abandonConfirmOpen,
    closeAbandonConfirm,
    confirmAbandon,
    confirmGate,
    gateConfirmed,
    abandoned,
    selectFinalAction,
    finalAction,
    setStateId,
  } = useVsDemo();

  const isFinal = stateId === "VS-UX-09";
  const isGoInvalid = stateId === "VS-UX-VAR-GO-INVALID";
  const isGate = stateId === "VS-UX-04" || isGoInvalid;

  return (
    <div className={styles.panel} data-testid="vs-decision">
      <IdStrip />

      {isGoInvalid ? (
        <VariantBanner tone="warn" title="GO invalide — ancrage divergé">
          <p>
            HEAD fixture courant : <code>{vsFixture.headInvalidated.slice(0, 12)}…</code> ≠
            HEAD ancré : <code>{vsFixture.head.slice(0, 12)}…</code>
          </p>
          <p>
            contractHash / branche / allowlist doivent être revalidés. Nouveau gate
            requis. Ceci n&apos;est <strong>pas</strong> un Abandonner ni un NO-GO.
          </p>
          <div className={styles.actions}>
            <CtaButton onClick={() => setStateId("VS-UX-04")}>
              Rouvrir le gate
            </CtaButton>
          </div>
        </VariantBanner>
      ) : null}

      <section className={styles.hero} aria-labelledby="vs-decision-hero">
        <p className={styles.heroEyebrow}>
          {isFinal ? "DÉCISION MORRIS FINALE" : "GATE MORRIS · EXÉCUTION"}
        </p>
        <h2 id="vs-decision-hero" className={styles.heroTitle}>
          {isFinal
            ? "Décider de la clôture avec le verdict candidat"
            : "Décider avec le dossier d'ancrage — quatre actions distinctes"}
        </h2>
        <p className={styles.heroText}>
          STOP ≠ NO-GO ≠ Abandonner. Timeout ≠ GO. Aucune action Git distante.
        </p>
      </section>

      <div className={styles.twoCol}>
        <section className={styles.card} aria-labelledby="vs-dossier-title">
          <p className={styles.fieldLabel}>DOSSIER DE DÉCISION (fixture)</p>
          <h2 id="vs-dossier-title" className={styles.cardTitle}>
            Ancrage GO — requestId / contrat / Git
          </h2>
          <p className={styles.fieldLabel}>requestId</p>
          <p className={styles.fieldValue}>{vsFixture.requestId}</p>
          <p className={styles.fieldLabel}>contractId / hash</p>
          <p className={styles.fieldValue}>
            {vsFixture.contractId} · {vsFixture.contractHash}
          </p>
          <p className={styles.fieldLabel}>Branche · HEAD</p>
          <p className={styles.fieldValue}>
            {vsFixture.branch} · {vsFixture.head}
          </p>
          <p className={styles.fieldLabel}>Allowlist</p>
          <p className={styles.fieldValue}>{vsFixture.allowlist.join(", ")}</p>
          <p className={styles.fieldLabel}>Autorité</p>
          <p className={styles.fieldValue}>{vsFixture.authority}</p>
          <p className={styles.fieldLabel}>Horodatage</p>
          <p className={styles.fieldValue}>
            {vsFixture.timestamp} ({vsFixture.timezone})
          </p>
          <p className={styles.muted}>Timeout ≠ GO (rappel affiché).</p>
          {!isFinal ? (
            <div className={styles.actions}>
              <CtaButton
                variant="secondary"
                onClick={() => setStateId("VS-UX-VAR-GO-INVALID")}
                data-testid="vs-simulate-go-invalid"
              >
                Simuler GO invalide
              </CtaButton>
            </div>
          ) : null}
        </section>

        <section
          className={styles.card}
          aria-labelledby="vs-morris-actions-title"
          data-testid="vs-morris-actions"
        >
          <p className={styles.fieldLabel}>Décision Morris — autorité humaine</p>
          <h2 id="vs-morris-actions-title" className={styles.cardTitle}>
            {isFinal ? "Décision finale" : "Quatre actions du gate"}
          </h2>

          {isGate ? (
            <div className={styles.optionGrid} role="group" aria-label="Actions gate Morris">
              {gateOptions.map((opt) => {
                const selected = gateAction === opt.action;
                const className = opt.danger
                  ? selected
                    ? styles.optionDangerSelected
                    : styles.optionDanger
                  : selected
                    ? styles.optionSelected
                    : styles.option;
                return (
                  <button
                    key={opt.action}
                    type="button"
                    className={className}
                    aria-pressed={selected}
                    data-testid={`vs-gate-${opt.action}`}
                    aria-label={
                      opt.action === "ABANDONNER"
                        ? "Abandonner le cycle"
                        : opt.title
                    }
                    onClick={() => selectGateAction(opt.action)}
                  >
                    <StatusPill tone={opt.danger ? "pink" : "blueFlush"}>
                      {opt.title}
                    </StatusPill>
                    <p className={styles.optionTitle}>{opt.title}</p>
                    <p className={styles.optionSub}>{opt.subtitle}</p>
                  </button>
                );
              })}
            </div>
          ) : null}

          {isFinal ? (
            <div className={styles.optionGrid} role="group" aria-label="Actions décision finale">
              {finalOptions.map((opt) => {
                const selected = finalAction === opt.action;
                const className = opt.danger
                  ? selected
                    ? styles.optionDangerSelected
                    : styles.optionDanger
                  : selected
                    ? styles.optionSelected
                    : styles.option;
                return (
                  <button
                    key={opt.action}
                    type="button"
                    className={className}
                    aria-pressed={selected}
                    data-testid={`vs-final-${opt.action}`}
                    aria-label={
                      opt.action === "ABANDONNER"
                        ? "Abandonner le cycle"
                        : opt.title
                    }
                    onClick={() => selectFinalAction(opt.action)}
                  >
                    <StatusPill tone={opt.danger ? "pink" : "greenFlush"}>
                      {opt.title}
                    </StatusPill>
                    <p className={styles.optionTitle}>{opt.title}</p>
                    <p className={styles.optionSub}>{opt.subtitle}</p>
                  </button>
                );
              })}
            </div>
          ) : null}

          {abandonConfirmOpen ? (
            <div
              className={styles.confirmBox}
              role="dialog"
              aria-modal="true"
              aria-labelledby="vs-abandon-confirm-title"
              data-testid="vs-abandon-confirm"
            >
              <p id="vs-abandon-confirm-title" className={styles.optionTitle}>
                Confirmer l&apos;abandon du cycle
              </p>
              <p className={styles.optionSub}>
                Conséquence explicite : état <strong>abandonné</strong>. Aucune
                écriture Git distante. Action destructive (danger textuel + visuel).
              </p>
              <div className={styles.actions}>
                <CtaButton
                  variant="danger"
                  onClick={confirmAbandon}
                  data-testid="vs-abandon-confirm-yes"
                  aria-label="Confirmer abandonner le cycle"
                >
                  Confirmer — Abandonner le cycle
                </CtaButton>
                <CtaButton
                  variant="secondary"
                  onClick={closeAbandonConfirm}
                  data-testid="vs-abandon-confirm-no"
                >
                  Annuler
                </CtaButton>
              </div>
            </div>
          ) : null}

          {isGate && gateAction && gateAction !== "ABANDONNER" ? (
            <div className={styles.actions}>
              <CtaButton
                onClick={confirmGate}
                disabled={!gateAction}
                data-testid="vs-gate-confirm"
              >
                Confirmer {gateAction}
              </CtaButton>
            </div>
          ) : null}

          {gateConfirmed || abandoned ? (
            <p className={styles.muted} data-testid="vs-gate-result">
              {abandoned
                ? "Résultat fixture : cycle abandonné"
                : `Résultat fixture : ${gateAction} confirmé`}
            </p>
          ) : null}

          <p className={styles.muted}>
            Simulation Increment A — aucun effet Git / Cursor / GPT live.
          </p>
        </section>
      </div>
    </div>
  );
}

```

## FILE: projects/sfia-studio/app/features/synthese/VsSyntheseScreen.tsx

```
"use client";

import { StatusPill } from "@/components/ui/StatusPill";
import { IdStrip } from "@/components/vertical-slice/VsShared";
import { vsFixture } from "@/fixtures/vertical-slice";
import { useVsDemo } from "@/lib/vertical-slice/VsDemoContext";
import styles from "@/components/vertical-slice/vs-panels.module.css";

export function VsSyntheseScreen() {
  const { abandoned, finalAction } = useVsDemo();

  return (
    <div className={styles.panel} data-testid="vs-synthese">
      <IdStrip />

      <section className={styles.hero} aria-labelledby="vs-close-hero">
        <p className={styles.heroEyebrow}>CLÔTURE · SLICE COURANT UNIQUEMENT</p>
        <h2 id="vs-close-hero" className={styles.heroTitle}>
          CycleSummary — vertical slice POC
        </h2>
        <p className={styles.heroText}>
          Aucun portefeuille multi-projet. Aucun claim MVP ou production-ready.
        </p>
      </section>

      <section className={styles.card} data-testid="vs-cycle-summary">
        <StatusPill tone={abandoned ? "pink" : "greenFlush"}>
          {abandoned ? "abandonné" : vsFixture.summary.finalStatus}
        </StatusPill>
        <p className={styles.fieldLabel}>requestId</p>
        <p className={styles.fieldValue}>{vsFixture.requestId}</p>
        <p className={styles.fieldLabel}>Statut final</p>
        <p className={styles.fieldValue}>
          {abandoned ? "abandonné (fixture)" : vsFixture.summary.finalStatus}
        </p>
        <p className={styles.fieldLabel}>Décision Morris</p>
        <p className={styles.fieldValue}>
          {abandoned
            ? "Abandonner"
            : finalAction === "CLOTURER"
              ? vsFixture.summary.decision
              : finalAction ?? vsFixture.summary.decision}
        </p>
        <p className={styles.fieldLabel}>Fichier Markdown (mock)</p>
        <p className={styles.fieldValue}>{vsFixture.summary.markdownFile}</p>
        <p className={styles.fieldLabel}>Rapport / preuves</p>
        <p className={styles.fieldValue}>
          {vsFixture.summary.reportRef} · {vsFixture.summary.proofRef}
        </p>
        <p className={styles.fieldLabel}>Compteur GPT</p>
        <p className={styles.fieldValue} data-testid="vs-summary-gpt">
          {vsFixture.summary.gptCounter}
        </p>
        <p className={styles.fieldLabel}>Branche · HEAD · contractHash</p>
        <p className={styles.fieldValue}>
          {vsFixture.branch} · {vsFixture.head} · {vsFixture.contractHash}
        </p>
        <p className={styles.fieldLabel}>Réserves</p>
        <ul className={styles.list}>
          {vsFixture.summary.reserves.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p className={styles.forbidden} data-testid="vs-no-mvp-claim">
          Interdit : MVP · production-ready · Studio complete · industrialisé
        </p>
        <p className={styles.muted} data-testid="vs-no-portfolio">
          Hors périmètre affiché : portefeuille multi-projet, autres cycles hors
          slice.
        </p>
      </section>
    </div>
  );
}

```

## FILE: projects/sfia-studio/app/__tests__/increment-a.test.tsx

```
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { STUDIO_ROUTES } from "@/lib/navigation";
import {
  STUDIO_ROUTES_ONLY,
  VS_STATE_IDS,
  VS_STATES,
  parseVsQuery,
} from "@/lib/vertical-slice";
import { vsFixture } from "@/fixtures/vertical-slice";
import { NouvelleDemandeScreen } from "@/features/nouvelle-demande/NouvelleDemandeScreen";
import { DecisionScreen } from "@/features/decision/DecisionScreen";
import { CycleActifScreen } from "@/features/cycle-actif/CycleActifScreen";
import { SyntheseScreen } from "@/features/synthese/SyntheseScreen";

const push = vi.fn();
let mockPathname = "/nouvelle-demande";
let mockSearch = "vs=VS-UX-01";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push, replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => mockPathname,
  useSearchParams: () => new URLSearchParams(mockSearch),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

afterEach(() => {
  cleanup();
  push.mockClear();
});

beforeEach(() => {
  mockPathname = "/nouvelle-demande";
  mockSearch = "vs=VS-UX-01";
});

describe("Increment A — mapping & fixtures", () => {
  it("exposes exactly four Studio routes", () => {
    expect(STUDIO_ROUTES).toHaveLength(4);
    expect(STUDIO_ROUTES_ONLY).toEqual([
      "/nouvelle-demande",
      "/decision",
      "/cycle-actif",
      "/synthese",
    ]);
  });

  it("maps ten states plus four variants without extra routes", () => {
    expect(VS_STATES.filter((s) => s.kind === "state")).toHaveLength(10);
    expect(VS_STATES.filter((s) => s.kind === "variant")).toHaveLength(4);
    expect(VS_STATE_IDS).toHaveLength(14);
    const routes = new Set(VS_STATES.map((s) => s.route));
    expect([...routes].sort()).toEqual(
      ["/cycle-actif", "/decision", "/nouvelle-demande", "/synthese"].sort(),
    );
  });

  it("parses demo query aliases", () => {
    expect(parseVsQuery("04")).toBe("VS-UX-04");
    expect(parseVsQuery("GO-INVALID")).toBe("VS-UX-VAR-GO-INVALID");
  });

  it("uses demo fixtures without secrets or PII", () => {
    const blob = JSON.stringify(vsFixture);
    expect(blob).not.toMatch(/sk-|api[_-]?key|password|Bearer /i);
    expect(blob).not.toMatch(/@gmail\.com|numéro de sécurité/i);
    expect(vsFixture.gptCalls.ceiling).toBe("À définir");
    expect(vsFixture.gptCalls.noRetry).toMatch(/Aucun retry automatique/i);
  });
});

describe("Increment A — UI screens", () => {
  it("shows demo banner, ids and GPT ceiling on nouvelle demande", () => {
    render(<NouvelleDemandeScreen />);
    expect(screen.getByTestId("vs-demo-banner")).toHaveTextContent(
      /Données de démonstration/i,
    );
    expect(screen.getByTestId("vs-id-strip")).toHaveTextContent(
      vsFixture.requestId,
    );
    expect(screen.getByTestId("vs-gpt-counter")).toHaveTextContent(/À définir/);
    expect(screen.getByTestId("vs-no-retry")).toHaveTextContent(
      /Aucun retry automatique/i,
    );
    expect(screen.getByTestId("vs-demo-switcher")).toBeInTheDocument();
  });

  it("renders GO, NO-GO, Corriger, Abandonner as distinct actions", async () => {
    mockPathname = "/decision";
    mockSearch = "vs=VS-UX-04";
    const user = userEvent.setup();
    render(<DecisionScreen />);

    const panel = screen.getByTestId("vs-morris-actions");
    expect(within(panel).getByTestId("vs-gate-GO")).toBeInTheDocument();
    expect(within(panel).getByTestId("vs-gate-NO-GO")).toBeInTheDocument();
    expect(within(panel).getByTestId("vs-gate-CORRIGER")).toBeInTheDocument();
    expect(within(panel).getByTestId("vs-gate-ABANDONNER")).toBeInTheDocument();

    await user.click(within(panel).getByTestId("vs-gate-ABANDONNER"));
    const dialog = screen.getByTestId("vs-abandon-confirm");
    expect(dialog).toHaveTextContent(/abandonné/i);
    expect(
      within(dialog).getByRole("button", {
        name: /Confirmer abandonner le cycle/i,
      }),
    ).toBeEnabled();
  });

  it("shows CycleSummary without portfolio or MVP claims", () => {
    mockPathname = "/synthese";
    mockSearch = "vs=VS-UX-10";
    render(<SyntheseScreen />);
    expect(screen.getByTestId("vs-cycle-summary")).toBeInTheDocument();
    expect(screen.getByTestId("vs-no-portfolio")).toHaveTextContent(
      /portefeuille multi-projet/i,
    );
    expect(screen.getByTestId("vs-no-mvp-claim")).toHaveTextContent(/MVP/);
    expect(
      screen.queryByText(/Portefeuille des cycles/i),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("vs-summary-gpt")).toHaveTextContent(/À définir/);
  });

  it("exposes STOP control distinct from gate vocabulary", () => {
    mockPathname = "/cycle-actif";
    mockSearch = "vs=VS-UX-05";
    render(<CycleActifScreen />);
    expect(screen.getByTestId("vs-stop-execution")).toHaveAttribute(
      "aria-label",
      expect.stringMatching(/STOP Morris/i),
    );
    expect(screen.queryByTestId("vs-gate-ABANDONNER")).not.toBeInTheDocument();
  });
});

```

## FILE: projects/sfia-studio/app/e2e/increment-a.spec.ts

```
import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

const screenshotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-increment-a",
);

const captures = [
  {
    path: "/nouvelle-demande?vs=VS-UX-01",
    name: "inc-a-nouvelle-demande",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByTestId("vs-demo-banner")).toBeVisible();
      await expect(page.getByTestId("vs-id-strip")).toContainText("req-vs-poc-001");
    },
  },
  {
    path: "/nouvelle-demande?vs=VS-UX-03",
    name: "inc-a-qualification-proposee",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(
        page.getByRole("heading", { name: /Qualification proposée/i }),
      ).toBeVisible();
      await expect(page.getByText(/Candidat GPT/i).first()).toBeVisible();
    },
  },
  {
    path: "/decision?vs=VS-UX-04",
    name: "inc-a-gate-morris",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByTestId("vs-gate-GO")).toBeVisible();
      await expect(page.getByTestId("vs-gate-NO-GO")).toBeVisible();
      await expect(page.getByTestId("vs-gate-CORRIGER")).toBeVisible();
      await expect(page.getByTestId("vs-gate-ABANDONNER")).toBeVisible();
    },
  },
  {
    path: "/cycle-actif?vs=VS-UX-05",
    name: "inc-a-execution",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByTestId("vs-stop-execution")).toBeVisible();
    },
  },
  {
    path: "/cycle-actif?vs=VS-UX-06",
    name: "inc-a-rapport",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByText(/CursorExecutionReport/i)).toBeVisible();
    },
  },
  {
    path: "/cycle-actif?vs=VS-UX-08",
    name: "inc-a-verdict",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByText(/Candidat GPT/i)).toBeVisible();
    },
  },
  {
    path: "/decision?vs=VS-UX-09",
    name: "inc-a-decision-finale",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByTestId("vs-final-CLOTURER")).toBeVisible();
    },
  },
  {
    path: "/synthese?vs=VS-UX-10",
    name: "inc-a-cloture",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByTestId("vs-cycle-summary")).toBeVisible();
      await expect(page.getByTestId("vs-no-mvp-claim")).toBeVisible();
      await expect(page.getByText(/Portefeuille des cycles/i)).toHaveCount(0);
    },
  },
  {
    path: "/decision?vs=VS-UX-VAR-GO-INVALID",
    name: "inc-a-go-invalide",
    assert: async (page: import("@playwright/test").Page) => {
      await expect(page.getByTestId("vs-variant-banner")).toContainText(
        /GO invalide/i,
      );
    },
  },
];

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test.describe("Increment A visual & functional", () => {
  test("only four primary routes remain navigable", async ({ page }) => {
    await page.goto("/synthese?vs=VS-UX-10");
    const rail = page.getByTestId("utility-rail");
    for (const label of [
      "Vue synthèse",
      "Nouvelle demande",
      "Cycle actif",
      "Décision Morris",
    ]) {
      await expect(rail.getByRole("link", { name: label })).toBeVisible();
    }
    await expect(rail.getByLabel("Paramètres (désactivé)")).toBeDisabled();
  });

  test("demo switcher reaches ten states", async ({ page }) => {
    await page.goto("/nouvelle-demande?vs=VS-UX-01");
    const switcher = page.getByTestId("vs-demo-switcher");
    await expect(switcher).toBeVisible();
    const values = await switcher.locator("option").evaluateAll((opts) =>
      opts.map((o) => (o as HTMLOptionElement).value),
    );
    for (const id of [
      "VS-UX-01",
      "VS-UX-02",
      "VS-UX-03",
      "VS-UX-04",
      "VS-UX-05",
      "VS-UX-06",
      "VS-UX-07",
      "VS-UX-08",
      "VS-UX-09",
      "VS-UX-10",
      "VS-UX-VAR-LOADING",
      "VS-UX-VAR-ERROR",
      "VS-UX-VAR-STOP",
      "VS-UX-VAR-GO-INVALID",
    ]) {
      expect(values).toContain(id);
    }
  });

  test("abandon confirmation is keyboard reachable", async ({ page }) => {
    await page.goto("/decision?vs=VS-UX-04");
    await page.getByTestId("vs-gate-ABANDONNER").focus();
    await page.keyboard.press("Enter");
    const dialog = page.getByTestId("vs-abandon-confirm");
    await expect(dialog).toBeVisible();
    await page.getByTestId("vs-abandon-confirm-yes").focus();
    await expect(page.getByTestId("vs-abandon-confirm-yes")).toBeFocused();
  });

  test("GPT counter shows À définir and no-retry", async ({ page }) => {
    await page.goto("/nouvelle-demande?vs=VS-UX-02");
    await expect(page.getByTestId("vs-gpt-counter").first()).toContainText(
      "À définir",
    );
    await expect(page.getByTestId("vs-no-retry").first()).toContainText(
      "Aucun retry automatique",
    );
  });

  for (const capture of captures) {
    test(`capture ${capture.name}`, async ({ page }) => {
      const errors: string[] = [];
      const requests: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") errors.push(msg.text());
      });
      page.on("request", (req) => {
        const url = req.url();
        if (/openai|api\.openai|anthropic/i.test(url)) requests.push(url);
      });

      await page.goto(capture.path);
      await capture.assert(page);
      await page.screenshot({
        path: path.join(screenshotDir, `${capture.name}.png`),
        fullPage: true,
      });
      expect(requests).toEqual([]);
      const critical = errors.filter(
        (e) =>
          !/Download the React DevTools|Hydration|Extra attributes/i.test(e),
      );
      expect(critical).toEqual([]);
    });
  }
});

```


---

# ANNEXE C — Liste captures

total 4808
drwxr-xr-x@ 11 morris  staff     352 19 juil. 23:21 .
drwxr-xr-x@ 24 morris  staff     768 19 juil. 23:21 ..
-rw-r--r--@  1 morris  staff  257496 19 juil. 23:22 inc-a-cloture.png
-rw-r--r--@  1 morris  staff  293194 19 juil. 23:21 inc-a-decision-finale.png
-rw-r--r--@  1 morris  staff  231213 19 juil. 23:21 inc-a-execution.png
-rw-r--r--@  1 morris  staff  301252 19 juil. 23:21 inc-a-gate-morris.png
-rw-r--r--@  1 morris  staff  291997 19 juil. 23:21 inc-a-go-invalide.png
-rw-r--r--@  1 morris  staff  288292 19 juil. 23:21 inc-a-nouvelle-demande.png
-rw-r--r--@  1 morris  staff  290551 19 juil. 23:21 inc-a-qualification-proposee.png
-rw-r--r--@  1 morris  staff  244528 19 juil. 23:21 inc-a-rapport.png
-rw-r--r--@  1 morris  staff  248457 19 juil. 23:21 inc-a-verdict.png
total 560
drwxr-xr-x@  5 morris  staff     160 19 juil. 23:22 .
drwxr-xr-x@ 24 morris  staff     768 19 juil. 23:21 ..
-rw-r--r--@  1 morris  staff  114624 19 juil. 23:22 vs-ux-01.png
-rw-r--r--@  1 morris  staff   88741 19 juil. 23:21 vs-ux-04-gate.png
-rw-r--r--@  1 morris  staff   79626 19 juil. 23:22 vs-ux-10.png

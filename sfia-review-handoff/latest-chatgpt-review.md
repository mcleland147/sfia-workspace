# SFIA Studio V2-A2 — Create Project UI — Review Pack FULL

| Champ | Valeur |
|---|---|
| Date/heure/fuseau | 2026-07-29 23:47:41 CEST (+0200) |
| Cycle | 8 — Delivery / implémentation |
| Profil / contrôle | Standard / Standard renforcé |
| Typologie | EVOL |
| Repository | `mcleland147/sfia-workspace` |
| Workspace | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge` |
| Branche initiale | `delivery/sfia-studio-visible-slice-v2-a1-server-only-runtime-bridge` |
| Branche finale | `delivery/sfia-studio-visible-slice-v2-a2-create-project-ui` |
| HEAD initial workspace | `7ef160c6fd8a99267a9e553fd77d13aa7e6f95da` |
| Base vérifiée | `origin/main` = `169e1a71fcd8625ff87565c1b7112d63d9044492` |
| HEAD final projet | `d7126be51365c9687939dc021ed9ce3a1ebacc77` |
| Niveau | FULL |
| Mono-cycle | oui |

## 1. Objectif, périmètre et verdict

Parcours livré localement :

```text
Utilisateur → /studio/projects/new → CreateProjectForm
→ createProjectRuntimeAction → RuntimeApplicationService V2-A1
→ LocalProjectFacade V1 → T-A0 Project + T-A1 LPS
→ projection inline sur /studio/projects/new
```

Verdict :

`READY FOR PR READINESS — SFIA STUDIO V2-A2 CREATE PROJECT UI IMPLEMENTED LOCALLY — RUNTIME AND VISUAL EVIDENCE VERIFIED — V1 CORE AND V2-A1 CONTRACTS UNCHANGED — NO PROJECT PUSH PR MERGE IAM PRODUCT PERSISTENCE REAL AGENT RECOMMENDATION DASHBOARD DELIVERY OR CUTOVER`

Statut : **READY FOR REVIEW**.

## 2. Local Git Truth Check

- `pwd`: `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge`.
- remote : `origin https://github.com/mcleland147/sfia-workspace.git`.
- branche initiale : V2-A1 @ `7ef160c…`.
- tracked propre, stage vide ; seul `.tmp-sfia-review/` non tracké.
- fetch read-only réussi.
- `origin/main` exactement `169e1a71fcd8625ff87565c1b7112d63d9044492`.
- ancêtres vérifiés : `770605b`, `a105431`, `bddfc6a`, `1068ddb`, `7916066`, `634a7fb`, `169e1a7`.
- `main` était occupée par un autre worktree ; elle n'a pas été touchée. La branche cible, absente localement et à distance, a été créée directement depuis `origin/main` puis laissée sans upstream.
- aucun reset hard, clean, force push ou opération destructive.

## 3. Git Review Index

| Champ | Valeur |
|---|---|
| Base branch | `origin/main` |
| Base SHA | `169e1a71fcd8625ff87565c1b7112d63d9044492` |
| HEAD avant | `169e1a71fcd8625ff87565c1b7112d63d9044492` sur la branche cible |
| HEAD après | `d7126be51365c9687939dc021ed9ce3a1ebacc77` |
| Branche | `delivery/sfia-studio-visible-slice-v2-a2-create-project-ui` |
| Fichiers créés | 6 |
| Fichiers modifiés | 6 |
| Commits créés | 3 |
| Tests | ciblés 43/43 ; route regressions 25/25 ; suite 776/776 |
| Typecheck / lint / build | PASS / PASS / PASS |
| Captures | 3 PNG exacts 1440×1024 |
| Review pack | full |
| Décision Morris additionnelle | autorisation bornée de modifier `increment-a.test.tsx` et `increment-b.test.tsx` |
| Réserves | aucune frame Figma V2-A2 ; responsive 390 px hors lot ; warning dev cross-origin futur Next |

### Commits projet locaux

````text
d7126be (HEAD -> delivery/sfia-studio-visible-slice-v2-a2-create-project-ui) docs(sfia-studio): document V2-A2 create project UI
58141b2 test(sfia-studio): validate V2-A2 create project UI
8ce9391 feat(sfia-studio): add V2-A2 create project UI
````


### Diff stat

````text
.../sfia-studio/app/__tests__/increment-a.test.tsx |   7 +-
 .../sfia-studio/app/__tests__/increment-b.test.tsx |   7 +-
 .../importBoundaries.test.ts                       |  43 +-
 .../vertical-slice-ui/createProjectUi.test.tsx     | 461 +++++++++++++++
 .../app/app/studio/projects/new/page.tsx           |  43 ++
 .../app/components/shell/StudioShell.tsx           |  33 +-
 .../sfia-studio/app/components/shell/Topbar.tsx    |  62 ++-
 .../vertical-slice-ui/CreateProjectForm.tsx        | 619 +++++++++++++++++++++
 .../vertical-slice-ui/RuntimeDisclosureBanner.tsx  |  58 ++
 .../vertical-slice-ui/create-project.module.css    | 290 ++++++++++
 projects/sfia-studio/app/lib/navigation.ts         |  21 +-
 .../README.md                                      | 190 +++++++
 12 files changed, 1798 insertions(+), 36 deletions(-)
````


### Diff name-status

````text
M	projects/sfia-studio/app/__tests__/increment-a.test.tsx
M	projects/sfia-studio/app/__tests__/increment-b.test.tsx
M	projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
A	projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
A	projects/sfia-studio/app/app/studio/projects/new/page.tsx
M	projects/sfia-studio/app/components/shell/StudioShell.tsx
M	projects/sfia-studio/app/components/shell/Topbar.tsx
A	projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx
A	projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx
A	projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css
M	projects/sfia-studio/app/lib/navigation.ts
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-a2-create-project-ui/README.md
````


## 4. PR #287 à #293 — reconstruction

| PR | Branche / head | Merge commit | Présence main | Rôle trajectoire |
|---|---|---|---|---|
| #287 | framing T-A7 / `b6a1933…` | `770605b…` | oui | readiness T-A7 bornée |
| #288 | F11/F13 / `5afe095…` | `a105431…` | oui | contrats internes |
| #289 | capitalisation / `c520b81…` | `bddfc6a…` | oui | validation post-merge |
| #290 | blocker reduction / `c24da11…` | `1068ddb…` | oui | réduction blockers |
| #291 | HARD/T-A6 foundation / `9c12505…` | `7916066…` | oui | fondation bornée, sans fermeture |
| #292 | V1 core / `ca93e08…` | `634a7fb…` | oui | Project + LPS headless |
| #293 | V2-A1 runtime / `7ef160c…` | `169e1a7…` | oui | bridge server-only et disclosures |

Les informations ont été vérifiées par `gh pr view`, `git log`, ancêtres et SHAs de merge. Aucune branche historique n'a été modifiée.

## 5. Sources lues et usage

- templates/méthode : contrat de cycle, routage type 8, operating model ChatGPT/Cursor, guardrails, capitalisation candidate, pipeline, decision engine, checklist et publisher ; utilisés pour truth check, bornage, validations, commits locaux et handoff L3.
- handoff V2-A1 canonique : relu sur `sfia/review-handoff`, commit `7dd9452…`; confirme V2-A1 intégré sur main à `169e1a7…`, process-local et `NOT_READY`.
- framing vertical slice `01,02,04,05,07,08,09,10,11` : inventaire shell, parcours Project/LPS, IA `/studio/*`, contrat visuel, a11y, slicing, preuve et réserves.
- V1 core : types, composition, index et tests ; lecture seule pour champs, validation, idempotence et projection.
- V2-A1 runtime : actions, disclosures, types, mapping, service, singleton, paths, guard et tests ; lecture seule. Seul son test de frontière autorisé a changé.
- UI existante : shell, navigation, composants UI, tokens/styles et écrans POC/D1. D1 a servi uniquement de référence visuelle négative ; aucun import ou wiring D1.
- Figma read-only : page `0:1` « UX-B — P0 » et frame `19:2` « P0-00C — Nouvelle demande / Product premium ».

## 6. Décisions et non-sélections

Consommées : D-VS-01 à D-VS-04 et D-V2-01 à D-V2-05.

Décision Morris ponctuelle consommée pendant le cycle : mise à jour des deux assertions historiques de comptage des routes. Le set fixture `STUDIO_ROUTES_ONLY` reste quatre ; le rail partagé contient désormais cinq entrées.

Non sélectionnés : D-VS-05, IAM, product persistence, agent réel, recommendation engine, dashboard, delivery, cutover. HARD reste OPEN ; T-A6 reste INCOMPLETE.

## 7. Contrat visuel V2-A2 extrait avant code

| Élément | Contrat |
|---|---|
| Viewport | 1440 × 1024 |
| Shell | `StudioShell` flush |
| Rail | gauche, route V2-A2 active |
| Topbar | H1 + `LOCAL_PROCESS` / `NOT_READY`, tabs cachés |
| Action historique | « Nouvelle demande » cachée dans topbar uniquement ; route POC conservée au rail |
| Canvas | disclosures puis formulaire / succès inline |
| Copilot | Nora visible, lecture seule, sans autorité |
| Primaire | submit du formulaire uniquement |
| Réemploi | `Card`, `CtaButton`, `StatusPill`, tokens `--sfia-*` |
| États | initial, erreurs, pending, runtime error, succès |
| A11y | labels, descriptions, invalid, live regions, focus, busy/disabled |
| Limite | aucun DS/thème nouveau, aucune promesse pixel-perfect |

Figma n'est pas la source pixel-perfect de ce lot : aucune frame V2-A2 validée, aucune écriture, aucune conclusion `FIGMA TO RUNTIME ALIGNED`.

## 8. Architecture, wiring et garde-fous

- `CreateProjectForm` est client et son seul import runtime de valeur est `runtime/actions`.
- Le résultat est typé par `Awaited<ReturnType<typeof createProjectRuntimeAction>>`.
- `RuntimeDisclosureBanner` est serveur et lit `runtime/disclosures`.
- aucun import UI de core, service, singleton, mapping, paths, serverGuard ou barrel.
- aucun API route, endpoint, `fetch`, session/local storage, cache métier, fixture, harness, D1, OPS1 ou agent.
- `StudioRoute` fixture reste exhaustive ; `StudioShellRoute` ajoute le namespace réel sans modifier `vertical-slice/mapping.ts`.
- aucun fichier V1 core ou contrat/implémentation V2-A1 modifié.

## 9. Fonctionnel livré

- champs requis name/objective/context ; maxima 200/64/500 ; contraintes ligne par ligne ; criticalité LOW/STANDARD/HIGH avec labels FR.
- avertissement explicite : criticité perçue = qualification, pas décision Morris.
- clé idempotency client non éditable, stable au retry, renouvelée seulement au reset post-succès.
- validation UX, conservation des valeurs, mapping `INPUT_INVALID` et `perceivedCriticality`, blocage honnête `DOCTRINE_UNRESOLVED`.
- pending annoncé et submit désactivé.
- succès inline sans navigation D1 : Project, doctrine, LPS, source, fixture, idempotence, audit et readiness.
- reset « Créer un autre projet ».

## 10. Validations

| Validation | Résultat |
|---|---|
| UI + runtime + core + shell/navigation ciblés | PASS — 43 tests |
| UI + route regressions | PASS — 25 tests |
| Suite complète finale | PASS — 88 fichiers, 776 tests |
| Typecheck | PASS |
| Lint | PASS, 0 warning/error (warning de dépréciation `next lint` seulement) |
| Build | PASS, route `/studio/projects/new` générée, 7.77 kB / 114 kB first load |
| `git diff --check` | PASS |
| Import boundaries | PASS |
| Axe | aucune violation serious/critical ; règle color-contrast désactivée sous jsdom, contraste revu visuellement |
| Runtime HTTP | GET 200, POST Server Action 200 |

## 11. Preuve runtime et comparaison visuelle

| Capture | Viewport | État | Constat |
|---|---|---|---|
| `.tmp-sfia-review/evidence/v2-a2/01-initial.png` | 1440×1024 | initial | shell flush, rail actif, disclosures, formulaire, Nora read-only |
| `.tmp-sfia-review/evidence/v2-a2/02-validation-errors.png` | 1440×1024 | erreurs | focus/contours, messages name/objective/context, saisie conservée |
| `.tmp-sfia-review/evidence/v2-a2/03-success-real-runtime.png` | 1440×1024 | succès réel | Project + LPS ; `REAL_LOCAL_CORE`; `fixture=false`; doctrine résolue |

Valeurs observées via le DOM après POST réel : Project `prj:28718513-fe4a-4a77-a457-039ef35add9b`, LPS `lps:e65fa624-8889-4dd0-b2b2-9b9df15789dc`, doctrine `pkg:studio-v3-oa` v1.0.0 resolved, digest sha256, `auditStatus=DISABLED`, readiness `NOT_READY`.

Comparaison : le contrat Git est respecté pour viewport, shell, rail, topbar, canvas, Nora, disclosures, états et réemploi tokens. Écart assumé : la frame Figma lue est P0-00C et non V2-A2 ; aucune comparaison pixel-perfect ni alignment claim. La hauteur fixe du shell implique un scroll interne attendu ; responsive 390 reste une dette hors lot.

## 12. Accessibilité

- ordre de tabulation natif et navigation clavier ; H1 topbar puis H2/H3 contenu ; labels `htmlFor` ; required/invalid/describedby ; live regions ; busy/disabled ; focus visible ; états textuels non fondés sur la couleur.
- le mapping runtime criticality est relié à `criticality-error`.
- capture d'erreur confirme visuellement focus et messages.
- aucun blocage serious/critical axe automatisé. Le contraste est qualifié par tokens existants et revue visuelle car jsdom ne fournit pas canvas.

## 13. Risques, réserves et dette

- **Réserve design non bloquante** : aucune frame Figma V2-A2 dédiée.
- **Dette hors lot** : responsive global 390 px du shell fixe ; `shell.module.css` protégé et inchangé.
- **Réserve technique non bloquante** : Next dev avertit qu'un futur major demandera `allowedDevOrigins` pour 127.0.0.1 ; le runtime testé répond 200 aujourd'hui.
- **Limite intrinsèque** : état singleton process-local volatil ; restart/hot reload peut perdre le Project/LPS.
- pas de secret ni donnée personnelle dans code, docs ou review pack ; les identifiants de preuve sont aléatoires et locaux.

## 14. Review Handoff Git

| Champ | Valeur au gel de la source |
|---|---|
| decision | required |
| justification | code/UI substantiel et rapport FULL |
| mode | publish-in-cycle |
| motif local-only | N/A |
| source | `.tmp-sfia-review/chatgpt-review.md` |
| branche | `sfia/review-handoff` |
| fichier | `sfia-review-handoff/latest-chatgpt-review.md` |
| remote before | `7dd9452b04a058cd3eec68a062890fa4aef7c141` |
| worktree before | propre, local = remote |
| commande | publisher canonique obligatoire |
| commit attendu | `docs(review-handoff): publish SFIA Studio V2-A2 create project UI review` |
| statut | READY TO PUBLISH dans la suite atomique de ce cycle |

Le SHA de publication et la relecture distante sont des métadonnées post-gel nécessairement consignées dans le rapport Cursor final ; le blob canonique publié est exactement ce fichier gelé.

## 15. Review pack content coverage

| Champ | Valeur |
|---|---|
| created files full content | yes |
| modified sections complete | yes — diff utile complet |
| useful diff included | yes |
| synthesis only | no |
| absence de stub final | yes |
| review pack verdict | complete |

## 16. Fichiers créés — contenu complet

### `projects/sfia-studio/app/app/studio/projects/new/page.tsx`

````tsx
import { StudioShell } from "@/components/shell/StudioShell";
import { CreateProjectForm } from "@/features/vertical-slice-ui/CreateProjectForm";
import { RuntimeDisclosureBanner } from "@/features/vertical-slice-ui/RuntimeDisclosureBanner";
import styles from "@/features/vertical-slice-ui/create-project.module.css";

export default function CreateStudioProjectPage() {
  return (
    <StudioShell
      variant="flush"
      activeRoute="/studio/projects/new"
      title="Créer un projet"
      showTabs={false}
      primaryAction={null}
      pills={[
        { label: "LOCAL_PROCESS", tone: "orange" },
        { label: "NOT_READY", tone: "orange" },
      ]}
      copilot={{
        variant: "flush",
        name: "Nora · Project Copilot",
        subtitle: "Lecture seule · aucune autorité",
        avatarTone: "purple",
        levelPill: "Aucune décision",
        summary:
          "Je rappelle les limites du mode local. Je ne recommande aucun cycle et je ne prends aucune décision Morris.",
        watchLabel: "GARDE-FOUS",
        watchItems: [
          { label: "État process-local volatil", dotColor: "#faa629" },
          { label: "IAM non sélectionné", dotColor: "#7a4df5" },
          { label: "Agent réel désactivé", dotColor: "#51607a" },
        ],
        riskTitle: "MODE LOCAL UNIQUEMENT",
        riskText:
          "Un redémarrage ou hot reload peut perdre le Project et son LPS. Aucune persistance produit, delivery ou cutover.",
      }}
    >
      <div className={styles.page}>
        <RuntimeDisclosureBanner />
        <CreateProjectForm />
      </div>
    </StudioShell>
  );
}
````
### `projects/sfia-studio/app/features/vertical-slice-ui/CreateProjectForm.tsx`

````tsx
"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { Card } from "@/components/ui/Card";
import { CtaButton } from "@/components/ui/CtaButton";
import { StatusPill } from "@/components/ui/StatusPill";
import { createProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import styles from "./create-project.module.css";

type RuntimeActionResult = Awaited<
  ReturnType<typeof createProjectRuntimeAction>
>;
type RuntimeSuccess = Extract<RuntimeActionResult, { ok: true }>;
type Criticality = "LOW" | "STANDARD" | "HIGH";
type FieldName =
  | "name"
  | "objective"
  | "context"
  | "criticality"
  | "constraints"
  | "shortReference";

interface FormValues {
  name: string;
  objective: string;
  context: string;
  criticality: Criticality;
  constraints: string;
  shortReference: string;
}

type FieldErrors = Partial<Record<FieldName, string>>;

const EMPTY_FORM: FormValues = {
  name: "",
  objective: "",
  context: "",
  criticality: "STANDARD",
  constraints: "",
  shortReference: "",
};

const CRITICALITY_OPTIONS: readonly {
  value: Criticality;
  label: string;
}[] = [
  { value: "LOW", label: "Faible" },
  { value: "STANDARD", label: "Standard" },
  { value: "HIGH", label: "Élevée" },
];

function createIdempotencyKey(): string {
  const uuid = globalThis.crypto?.randomUUID?.();
  return `v2-a2:${uuid ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
}

function parseConstraints(value: string): string[] {
  return value
    .split(/\r?\n/)
    .map((constraint) => constraint.trim())
    .filter(Boolean);
}

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) {
    errors.name = "Le nom du projet est obligatoire.";
  } else if (values.name.length > 200) {
    errors.name = "Le nom ne peut pas dépasser 200 caractères.";
  }

  if (!values.objective.trim()) {
    errors.objective = "L’objectif est obligatoire.";
  }
  if (!values.context.trim()) {
    errors.context = "Le contexte est obligatoire.";
  }
  if (values.shortReference.trim().length > 64) {
    errors.shortReference =
      "La référence courte ne peut pas dépasser 64 caractères.";
  }

  if (parseConstraints(values.constraints).some((item) => item.length > 500)) {
    errors.constraints =
      "Chaque contrainte doit contenir au maximum 500 caractères.";
  }
  return errors;
}

function fieldForRuntimeError(field: string | undefined): FieldName | null {
  if (field === "perceivedCriticality") return "criticality";
  if (
    field === "name" ||
    field === "objective" ||
    field === "context" ||
    field === "constraints" ||
    field === "shortReference"
  ) {
    return field;
  }
  return null;
}

function ProjectCreationResult({
  result,
  onReset,
}: {
  result: RuntimeSuccess;
  onReset: () => void;
}) {
  return (
    <Card variant="flush" className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <div>
          <h2>Projet créé localement</h2>
          <p className={styles.resultHint}>
            Projection réelle du core V1 — aucune fixture et aucune
            persistance produit.
          </p>
        </div>
        <div className={styles.pillGroup}>
          <StatusPill tone="green">REAL_LOCAL_CORE</StatusPill>
          <StatusPill tone="orange">
            {result.readiness.status}
          </StatusPill>
        </div>
      </div>

      <section className={styles.resultSection} aria-labelledby="project-data">
        <h3 id="project-data">Project</h3>
        <dl className={styles.definitionGrid}>
          <div className={styles.definitionItem}>
            <dt>Project ID</dt>
            <dd className={styles.valueCode}>{result.projectId}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Nom</dt>
            <dd>{result.project.name}</dd>
          </div>
          {result.project.shortReference ? (
            <div className={styles.definitionItem}>
              <dt>Référence courte</dt>
              <dd>{result.project.shortReference}</dd>
            </div>
          ) : null}
          <div className={styles.definitionItem}>
            <dt>Criticité perçue</dt>
            <dd>{result.project.criticality}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Objectif</dt>
            <dd>{result.project.objective}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Contexte résumé</dt>
            <dd>{result.project.contextSummary}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Source</dt>
            <dd>{result.project.source}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Fixture</dt>
            <dd>{String(result.project.fixture)}</dd>
          </div>
        </dl>
        {result.project.constraints.length > 0 ? (
          <ul className={styles.constraintList} aria-label="Contraintes">
            {result.project.constraints.map((constraint) => (
              <li key={constraint}>{constraint}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>Aucune contrainte principale.</p>
        )}
      </section>

      <section className={styles.resultSection} aria-labelledby="doctrine-data">
        <h3 id="doctrine-data">Doctrine et Living Project State</h3>
        <dl className={styles.definitionGrid}>
          <div className={styles.definitionItem}>
            <dt>Doctrine</dt>
            <dd>{result.doctrine.id}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Version / statut</dt>
            <dd>
              {result.doctrine.version} · {result.doctrine.status}
            </dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Digest</dt>
            <dd className={styles.valueCode}>{result.doctrine.digest}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>LPS</dt>
            <dd className={styles.valueCode}>{result.livingState.id}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>LPS version / date</dt>
            <dd>
              v{result.livingState.version} · {result.livingState.createdAt}
            </dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Audit</dt>
            <dd>{result.auditStatus}</dd>
          </div>
          <div className={styles.definitionItem}>
            <dt>Idempotence réutilisée</dt>
            <dd>{String(result.reusedFromIdempotencyKey)}</dd>
          </div>
        </dl>
      </section>

      <section className={styles.truthBox} aria-labelledby="runtime-truth">
        <h3 id="runtime-truth">Vérité runtime</h3>
        <div className={styles.pillGroup}>
          <StatusPill tone="orangeFlush">
            {result.disclosures.runtimeMode}
          </StatusPill>
          <StatusPill tone="muted">
            {result.disclosures.persistence}
          </StatusPill>
          <StatusPill tone="muted">
            AGENT {result.disclosures.agentExecution}
          </StatusPill>
          <StatusPill tone="orange">
            {result.readiness.status}
          </StatusPill>
        </div>
        <p className={styles.resultHint}>
          IAM {result.disclosures.iam} · PRODUCT PERSISTENCE{" "}
          {result.disclosures.productPersistence} · DELIVERY{" "}
          {result.disclosures.delivery} · CUTOVER{" "}
          {result.disclosures.cutover} · RUN READY ={" "}
          {String(result.readiness.runReady)} · PRODUCT READY ={" "}
          {String(result.readiness.productReady)}
        </p>
      </section>

      <div className={styles.actions}>
        <CtaButton type="button" variant="secondary" onClick={onReset}>
          Créer un autre projet
        </CtaButton>
      </div>
    </Card>
  );
}

export function CreateProjectForm() {
  const [values, setValues] = useState<FormValues>(EMPTY_FORM);
  const [idempotencyKey, setIdempotencyKey] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [doctrineError, setDoctrineError] = useState(false);
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState<RuntimeSuccess | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const objectiveRef = useRef<HTMLTextAreaElement>(null);
  const contextRef = useRef<HTMLTextAreaElement>(null);
  const constraintsRef = useRef<HTMLTextAreaElement>(null);
  const shortReferenceRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIdempotencyKey(createIdempotencyKey());
  }, []);

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setFieldErrors((current) => ({ ...current, [key]: undefined }));
  }

  function focusField(field: FieldName) {
    const references: Partial<
      Record<FieldName, { current: HTMLElement | null }>
    > = {
      name: nameRef,
      objective: objectiveRef,
      context: contextRef,
      constraints: constraintsRef,
      shortReference: shortReferenceRef,
    };
    references[field]?.current?.focus();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    setSubmitError(null);
    setDoctrineError(false);
    const errors = validate(values);
    setFieldErrors(errors);
    const firstInvalid = Object.keys(errors)[0] as FieldName | undefined;
    if (firstInvalid) {
      focusField(firstInvalid);
      return;
    }

    const stableKey = idempotencyKey || createIdempotencyKey();
    if (!idempotencyKey) setIdempotencyKey(stableKey);
    setPending(true);
    try {
      const result = await createProjectRuntimeAction({
        name: values.name.trim(),
        objective: values.objective.trim(),
        context: values.context.trim(),
        criticality: values.criticality,
        constraints: parseConstraints(values.constraints),
        shortReference: values.shortReference.trim() || undefined,
        idempotencyKey: stableKey,
      });

      if (result.ok) {
        setSuccess(result);
        return;
      }

      const runtimeField = fieldForRuntimeError(result.error.field);
      if (result.error.code === "INPUT_INVALID" && runtimeField) {
        setFieldErrors({ [runtimeField]: result.error.message });
        focusField(runtimeField);
        return;
      }
      if (result.error.code === "DOCTRINE_UNRESOLVED") {
        setDoctrineError(true);
        setSubmitError(
          "La doctrine locale n’a pas pu être validée. Aucun Project ou LPS n’a été créé.",
        );
        return;
      }
      setSubmitError(
        `La création locale a échoué (${result.error.code}). ${
          result.error.retryable
            ? "Vous pouvez réessayer avec la même clé de tentative."
            : "Vérifiez les champs ou le runtime local avant de réessayer."
        }`,
      );
    } catch {
      setSubmitError(
        "Le runtime local n’a pas répondu. Les données saisies sont conservées ; vous pouvez réessayer.",
      );
    } finally {
      setPending(false);
    }
  }

  function resetAfterSuccess() {
    setValues(EMPTY_FORM);
    setFieldErrors({});
    setSubmitError(null);
    setDoctrineError(false);
    setSuccess(null);
    setIdempotencyKey(createIdempotencyKey());
    requestAnimationFrame(() => nameRef.current?.focus());
  }

  if (success) {
    return (
      <ProjectCreationResult result={success} onReset={resetAfterSuccess} />
    );
  }

  return (
    <Card variant="flush" className={styles.formCard}>
      <div>
        <h2>Créer un Project local</h2>
        <p className={styles.formIntro}>
          Les champs sont transmis à la Server Action V2-A1. Le runtime et le
          core V1 restent l’autorité de validation.
        </p>
      </div>

      <form
        className={styles.form}
        onSubmit={onSubmit}
        noValidate
        aria-busy={pending}
        data-testid="create-project-form"
      >
        <div className={styles.fieldGrid}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="project-name">
              Nom du projet <span className={styles.required}>*</span>
            </label>
            <input
              ref={nameRef}
              className={styles.input}
              id="project-name"
              name="name"
              required
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={
                fieldErrors.name ? "project-name-error" : "project-name-help"
              }
              maxLength={200}
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
            />
            <p className={styles.help} id="project-name-help">
              200 caractères maximum.
            </p>
            {fieldErrors.name ? (
              <p className={styles.error} id="project-name-error">
                {fieldErrors.name}
              </p>
            ) : null}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="short-reference">
              Référence courte
            </label>
            <input
              ref={shortReferenceRef}
              className={styles.input}
              id="short-reference"
              name="shortReference"
              aria-invalid={Boolean(fieldErrors.shortReference)}
              aria-describedby={
                fieldErrors.shortReference
                  ? "short-reference-error"
                  : "short-reference-help"
              }
              maxLength={64}
              value={values.shortReference}
              onChange={(event) =>
                update("shortReference", event.target.value)
              }
            />
            <p className={styles.help} id="short-reference-help">
              Optionnelle · 64 caractères maximum.
            </p>
            {fieldErrors.shortReference ? (
              <p className={styles.error} id="short-reference-error">
                {fieldErrors.shortReference}
              </p>
            ) : null}
          </div>

          <div className={styles.fieldFull}>
            <label className={styles.label} htmlFor="project-objective">
              Objectif <span className={styles.required}>*</span>
            </label>
            <textarea
              ref={objectiveRef}
              className={styles.textarea}
              id="project-objective"
              name="objective"
              required
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.objective)}
              aria-describedby={
                fieldErrors.objective
                  ? "project-objective-error"
                  : "project-objective-help"
              }
              value={values.objective}
              onChange={(event) => update("objective", event.target.value)}
            />
            <p className={styles.help} id="project-objective-help">
              Décrivez le résultat attendu, sans donnée personnelle ni secret.
            </p>
            {fieldErrors.objective ? (
              <p className={styles.error} id="project-objective-error">
                {fieldErrors.objective}
              </p>
            ) : null}
          </div>

          <div className={styles.fieldFull}>
            <label className={styles.label} htmlFor="project-context">
              Contexte <span className={styles.required}>*</span>
            </label>
            <textarea
              ref={contextRef}
              className={styles.textarea}
              id="project-context"
              name="context"
              required
              aria-required="true"
              aria-invalid={Boolean(fieldErrors.context)}
              aria-describedby={
                fieldErrors.context
                  ? "project-context-error"
                  : "project-context-help"
              }
              value={values.context}
              onChange={(event) => update("context", event.target.value)}
            />
            <p className={styles.help} id="project-context-help">
              Contexte local borné ; aucune identité IAM ou donnée
              d’infrastructure.
            </p>
            {fieldErrors.context ? (
              <p className={styles.error} id="project-context-error">
                {fieldErrors.context}
              </p>
            ) : null}
          </div>

          <fieldset
            className={`${styles.radioFieldset} ${styles.fieldFull}`}
            aria-describedby={
              fieldErrors.criticality
                ? "criticality-help criticality-error"
                : "criticality-help"
            }
            aria-invalid={Boolean(fieldErrors.criticality)}
          >
            <legend className={styles.legend}>Criticité perçue</legend>
            <div className={styles.radioGroup}>
              {CRITICALITY_OPTIONS.map((option) => (
                <label className={styles.radioLabel} key={option.value}>
                  <input
                    type="radio"
                    name="criticality"
                    value={option.value}
                    checked={values.criticality === option.value}
                    onChange={() => update("criticality", option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
            <p className={styles.help} id="criticality-help">
              Entrée de qualification uniquement — ce choix n’est pas une
              décision Morris.
            </p>
            {fieldErrors.criticality ? (
              <p className={styles.error} id="criticality-error">
                {fieldErrors.criticality}
              </p>
            ) : null}
          </fieldset>

          <div className={styles.fieldFull}>
            <label className={styles.label} htmlFor="project-constraints">
              Contraintes principales
            </label>
            <textarea
              ref={constraintsRef}
              className={styles.textareaCompact}
              id="project-constraints"
              name="constraints"
              aria-invalid={Boolean(fieldErrors.constraints)}
              aria-describedby={
                fieldErrors.constraints
                  ? "project-constraints-error"
                  : "project-constraints-help"
              }
              value={values.constraints}
              onChange={(event) => update("constraints", event.target.value)}
            />
            <p className={styles.help} id="project-constraints-help">
              Une contrainte par ligne · lignes vides ignorées · 500
              caractères maximum par contrainte.
            </p>
            {fieldErrors.constraints ? (
              <p className={styles.error} id="project-constraints-error">
                {fieldErrors.constraints}
              </p>
            ) : null}
          </div>
        </div>

        <div className={styles.attemptKey}>
          <span className={styles.label}>Clé de tentative non éditable</span>
          <code data-testid="idempotency-key">
            {idempotencyKey || "Génération locale…"}
          </code>
          <span className={styles.help}>
            Stable pendant les retries ; renouvelée après « Créer un autre
            projet ».
          </span>
        </div>

        <div aria-live="assertive" aria-atomic="true">
          {submitError ? (
            <p
              className={
                doctrineError ? styles.doctrineError : styles.submitError
              }
              role="alert"
              data-testid="submit-error"
            >
              {submitError}
            </p>
          ) : null}
        </div>

        <div className={styles.actions}>
          <span
            className={styles.statusText}
            role="status"
            aria-live="polite"
          >
            {pending ? "Création locale en cours…" : ""}
          </span>
          <CtaButton
            type="submit"
            disabled={pending || !idempotencyKey}
            data-testid="create-project-submit"
          >
            {pending ? "Création…" : "Créer le projet"}
          </CtaButton>
        </div>
      </form>
    </Card>
  );
}
````
### `projects/sfia-studio/app/features/vertical-slice-ui/RuntimeDisclosureBanner.tsx`

````tsx
import { Card } from "@/components/ui/Card";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  RUNTIME_DISCLOSURES,
  RUNTIME_READINESS_NOT_READY,
} from "@/lib/vertical-slice-runtime/disclosures";
import styles from "./create-project.module.css";

/**
 * Server component: the disclosure contract is read directly from V2-A1.
 * It must remain visible before and after the client form submits.
 */
export function RuntimeDisclosureBanner() {
  return (
    <Card variant="flush" className={styles.disclosure}>
      <div className={styles.disclosureHeader}>
        <div>
          <h2>Mode local borné</h2>
          <p>
            Cette interface crée un Project et son LPS dans le processus Node
            local uniquement.
          </p>
        </div>
        <div className={styles.pillGroup} aria-label="Statuts runtime">
          <StatusPill tone="orangeFlush">
            {RUNTIME_DISCLOSURES.runtimeMode}
          </StatusPill>
          <StatusPill tone="muted">
            {RUNTIME_DISCLOSURES.persistence}
          </StatusPill>
          <StatusPill tone="muted">
            AGENT {RUNTIME_DISCLOSURES.agentExecution}
          </StatusPill>
          <StatusPill tone="orange">
            {RUNTIME_READINESS_NOT_READY.status}
          </StatusPill>
        </div>
      </div>

      <ul className={styles.disclosureList}>
        <li>
          État métier volatil : un redémarrage ou hot reload peut perdre les
          données.
        </li>
        <li>IAM {RUNTIME_DISCLOSURES.iam}.</li>
        <li>
          PRODUCT PERSISTENCE {RUNTIME_DISCLOSURES.productPersistence}.
        </li>
        <li>DELIVERY {RUNTIME_DISCLOSURES.delivery}.</li>
        <li>CUTOVER {RUNTIME_DISCLOSURES.cutover}.</li>
        <li>
          HARD {RUNTIME_READINESS_NOT_READY.hard} · T-A6{" "}
          {RUNTIME_READINESS_NOT_READY.tA6} · RUN READY = false.
        </li>
      </ul>
    </Card>
  );
}
````
### `projects/sfia-studio/app/features/vertical-slice-ui/create-project.module.css`

````css
.page {
  display: grid;
  gap: var(--sfia-space-lg);
  padding-bottom: var(--sfia-space-xl);
}

.disclosure {
  display: grid;
  gap: var(--sfia-space-md);
  border-left: 4px solid var(--sfia-orange);
}

.disclosureHeader,
.resultHeader,
.actions,
.metaRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sfia-space-md);
  flex-wrap: wrap;
}

.pillGroup {
  display: flex;
  gap: var(--sfia-space-xs);
  flex-wrap: wrap;
}

.disclosure h2,
.formCard h2,
.resultCard h2 {
  margin: 0;
  color: var(--sfia-ink);
  font-size: 20px;
  line-height: 1.3;
}

.disclosure p,
.formIntro,
.help,
.empty,
.resultHint {
  margin: 0;
  color: var(--sfia-muted);
  font-size: 13px;
  line-height: var(--sfia-line-body);
}

.disclosureList {
  margin: 0;
  padding-left: 20px;
  color: var(--sfia-ink);
  display: grid;
  gap: 6px;
  font-size: 13px;
  line-height: var(--sfia-line-body);
}

.formCard,
.resultCard {
  display: grid;
  gap: var(--sfia-space-lg);
}

.form {
  display: grid;
  gap: var(--sfia-space-lg);
}

.fieldGrid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: var(--sfia-space-md);
}

.field,
.fieldFull {
  display: grid;
  gap: 7px;
}

.fieldFull {
  grid-column: 1 / -1;
}

.label,
.legend {
  color: var(--sfia-ink);
  font-size: 13px;
  font-weight: 650;
}

.required {
  color: #9b1d4a;
}

.input,
.textarea {
  width: 100%;
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-sm);
  background: #fff;
  color: var(--sfia-ink);
  font: inherit;
  font-size: 14px;
  line-height: 1.4;
  padding: 11px 12px;
  box-sizing: border-box;
  outline: none;
}

.textarea {
  min-height: 112px;
  resize: vertical;
}

.textareaCompact {
  composes: textarea;
  min-height: 88px;
}

.input:focus-visible,
.textarea:focus-visible,
.textareaCompact:focus-visible,
.radioLabel:focus-within {
  border-color: var(--sfia-blue);
  box-shadow: 0 0 0 3px var(--sfia-blue-soft);
}

.input[aria-invalid="true"],
.textarea[aria-invalid="true"],
.textareaCompact[aria-invalid="true"] {
  border-color: #b42355;
}

.error {
  margin: 0;
  color: #9b1d4a;
  font-size: 12px;
  font-weight: 600;
}

.radioFieldset {
  margin: 0;
  padding: 0;
  border: 0;
  display: grid;
  gap: 9px;
}

.radioGroup {
  display: flex;
  gap: var(--sfia-space-xs);
  flex-wrap: wrap;
}

.radioLabel {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 42px;
  padding: 0 12px;
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-sm);
  color: var(--sfia-ink);
  background: #fff;
  font-size: 13px;
}

.radioLabel:has(input:checked) {
  border-color: var(--sfia-blue);
  background: var(--sfia-blue-soft);
  color: var(--sfia-blue);
  font-weight: 650;
}

.attemptKey {
  display: grid;
  gap: 4px;
  border-radius: var(--sfia-radius-sm);
  background: var(--sfia-surface);
  border: 1px dashed var(--sfia-border);
  padding: 10px 12px;
}

.attemptKey code,
.valueCode {
  color: var(--sfia-ink);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
  overflow-wrap: anywhere;
}

.submitError,
.doctrineError {
  margin: 0;
  padding: 12px 14px;
  border-radius: var(--sfia-radius-sm);
  color: #7b1639;
  background: #fff0f5;
  border: 1px solid #f5b8d0;
  font-size: 13px;
  line-height: var(--sfia-line-body);
}

.doctrineError {
  border-left: 4px solid #9b1d4a;
}

.actions {
  justify-content: flex-end;
  padding-top: var(--sfia-space-xs);
  border-top: 1px solid var(--sfia-border-soft);
}

.statusText {
  min-height: 20px;
  color: var(--sfia-muted);
  font-size: 13px;
}

.resultSection {
  display: grid;
  gap: var(--sfia-space-md);
}

.resultSection h3 {
  margin: 0;
  color: var(--sfia-ink);
  font-size: 15px;
}

.definitionGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  background: var(--sfia-border-soft);
  border: 1px solid var(--sfia-border-soft);
  border-radius: var(--sfia-radius-sm);
  overflow: hidden;
}

.definitionItem {
  min-width: 0;
  background: #fff;
  padding: 11px 12px;
}

.definitionItem dt {
  color: var(--sfia-muted);
  font-size: 11px;
  font-weight: 650;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.definitionItem dd {
  margin: 4px 0 0;
  color: var(--sfia-ink);
  font-size: 13px;
  line-height: var(--sfia-line-body);
  overflow-wrap: anywhere;
}

.constraintList {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 5px;
  color: var(--sfia-ink);
  font-size: 13px;
}

.truthBox {
  display: grid;
  gap: var(--sfia-space-sm);
  padding: 14px;
  border: 1px solid var(--sfia-border);
  border-radius: var(--sfia-radius-sm);
  background: var(--sfia-surface);
}

@media (prefers-reduced-motion: reduce) {
  .input,
  .textarea,
  .textareaCompact {
    scroll-behavior: auto;
  }
}
````
### `projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx`

````tsx
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axe from "axe-core";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { StudioShell } from "@/components/shell/StudioShell";
import { CreateProjectForm } from "@/features/vertical-slice-ui/CreateProjectForm";
import { RuntimeDisclosureBanner } from "@/features/vertical-slice-ui/RuntimeDisclosureBanner";

const { createProjectRuntimeActionMock } = vi.hoisted(() => ({
  createProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  createProjectRuntimeAction: createProjectRuntimeActionMock,
}));

vi.mock("@/lib/vertical-slice-runtime/disclosures", () => ({
  RUNTIME_DISCLOSURES: {
    runtimeMode: "LOCAL_PROCESS",
    persistence: "NOT_GUARANTEED",
    agentExecution: "DISABLED",
    iam: "NOT_SELECTED",
    productPersistence: "NOT_SELECTED",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    localDataVolatile: true,
    restartMayLoseState: true,
    messages: [],
  },
  RUNTIME_READINESS_NOT_READY: {
    status: "NOT_READY",
    hard: "OPEN",
    tA6: "INCOMPLETE",
    iam: "NOT_SELECTED",
    productPersistence: "NOT_SELECTED",
    realAgentExecution: "DISABLED",
    delivery: "NOT_AUTHORIZED",
    cutover: "NOT_AUTHORIZED",
    runReady: false,
    productReady: false,
  },
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

const SUCCESS_RESULT = {
  ok: true as const,
  projectId: "prj:v2-a2-1",
  project: {
    projectId: "prj:v2-a2-1",
    name: "Projet V2-A2",
    shortReference: "V2-A2",
    objective: "Créer une interface réelle.",
    contextSummary: "Contexte local borné.",
    criticality: "HIGH" as const,
    constraints: ["Sans IAM", "Sans persistance produit"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "sha256:test-digest",
    status: "resolved",
  },
  livingState: {
    id: "lps:v2-a2-1",
    version: 1 as const,
    createdAt: "2026-07-29T21:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "NOT_GUARANTEED" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    messages: ["Temporary local data"],
  },
  reusedFromIdempotencyKey: false,
  auditStatus: "DISABLED" as const,
};

let uuidCounter = 0;

beforeEach(() => {
  uuidCounter = 0;
  vi.spyOn(globalThis.crypto, "randomUUID").mockImplementation(() => {
    uuidCounter += 1;
    return `00000000-0000-4000-8000-${String(uuidCounter).padStart(12, "0")}`;
  });
  createProjectRuntimeActionMock.mockReset();
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

async function fillRequiredFields(
  user: ReturnType<typeof userEvent.setup>,
) {
  await user.type(screen.getByLabelText(/Nom du projet/), "Projet V2-A2");
  await user.type(
    screen.getByLabelText(/Objectif/),
    "Créer une interface réelle.",
  );
  await user.type(
    screen.getByLabelText(/Contexte/),
    "Contexte local borné.",
  );
}

describe("V2-A2 Create Project UI", () => {
  it("renders all fields, qualification warning, and runtime disclosures", async () => {
    render(
      <>
        <RuntimeDisclosureBanner />
        <CreateProjectForm />
      </>,
    );

    expect(screen.getByLabelText(/Nom du projet/)).toBeRequired();
    expect(screen.getByLabelText(/Objectif/)).toBeRequired();
    expect(screen.getByLabelText(/Contexte/)).toBeRequired();
    expect(screen.getByLabelText("Contraintes principales")).toBeVisible();
    expect(screen.getByLabelText("Référence courte")).toBeVisible();
    expect(screen.getByLabelText("Faible")).toBeVisible();
    expect(screen.getByLabelText("Standard")).toBeChecked();
    expect(screen.getByLabelText("Élevée")).toBeVisible();
    expect(
      screen.getByText(/entrée de qualification uniquement/i),
    ).toBeVisible();
    expect(screen.getAllByText("LOCAL_PROCESS").length).toBeGreaterThan(0);
    expect(screen.getAllByText("NOT_GUARANTEED").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/AGENT DISABLED/).length).toBeGreaterThan(0);
    expect(screen.queryByLabelText(/email|organisation|token/i)).toBeNull();
    await waitFor(() =>
      expect(screen.getByTestId("idempotency-key")).not.toHaveTextContent(
        "Génération",
      ),
    );
  });

  it("blocks submission and links required errors to fields", async () => {
    const user = userEvent.setup();
    render(<CreateProjectForm />);

    await user.click(screen.getByTestId("create-project-submit"));

    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
    expect(screen.getByLabelText(/Nom du projet/)).toHaveAttribute(
      "aria-invalid",
      "true",
    );
    expect(screen.getByLabelText(/Nom du projet/)).toHaveAccessibleDescription(
      "Le nom du projet est obligatoire.",
    );
    expect(screen.getByLabelText(/Nom du projet/)).toHaveFocus();
    expect(screen.getByText("L’objectif est obligatoire.")).toBeVisible();
    expect(screen.getByText("Le contexte est obligatoire.")).toBeVisible();
  });

  it("validates name, short reference, and per-line constraint lengths", async () => {
    const user = userEvent.setup();
    render(<CreateProjectForm />);

    fireEvent.change(screen.getByLabelText(/Nom du projet/), {
      target: { value: "n".repeat(201) },
    });
    await user.type(screen.getByLabelText(/Objectif/), "Objectif");
    await user.type(screen.getByLabelText(/Contexte/), "Contexte");
    fireEvent.change(screen.getByLabelText("Référence courte"), {
      target: { value: "r".repeat(65) },
    });
    await user.type(
      screen.getByLabelText("Contraintes principales"),
      "c".repeat(501),
    );
    await user.click(screen.getByTestId("create-project-submit"));

    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
    expect(screen.getByText(/nom ne peut pas dépasser 200/)).toBeVisible();
    expect(
      screen.getByText(/référence courte ne peut pas dépasser 64/),
    ).toBeVisible();
    expect(
      screen.getByText(
        /chaque contrainte doit contenir au maximum 500/i,
      ),
    ).toBeVisible();
  });

  it("calls only the runtime action with the exact DTO and parsed constraints", async () => {
    createProjectRuntimeActionMock.mockResolvedValue(SUCCESS_RESULT);
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);
    await user.click(screen.getByLabelText("Élevée"));
    await user.type(screen.getByLabelText("Référence courte"), "V2-A2");
    await user.type(
      screen.getByLabelText("Contraintes principales"),
      "  Sans IAM  \n\nSans persistance produit  ",
    );
    const key = screen.getByTestId("idempotency-key").textContent;

    await user.click(screen.getByTestId("create-project-submit"));

    await waitFor(() =>
      expect(createProjectRuntimeActionMock).toHaveBeenCalledWith({
        name: "Projet V2-A2",
        objective: "Créer une interface réelle.",
        context: "Contexte local borné.",
        criticality: "HIGH",
        constraints: ["Sans IAM", "Sans persistance produit"],
        shortReference: "V2-A2",
        idempotencyKey: key,
      }),
    );
  });

  it("keeps the idempotency key stable across a retry", async () => {
    createProjectRuntimeActionMock
      .mockResolvedValueOnce({
        ok: false,
        error: {
          code: "PROJECT_CREATION_FAILED",
          message: "Temporary failure",
          retryable: true,
        },
        disclosures: SUCCESS_RESULT.disclosures,
        auditStatus: "DISABLED",
      })
      .mockResolvedValueOnce(SUCCESS_RESULT);
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);

    await user.click(screen.getByTestId("create-project-submit"));
    await screen.findByTestId("submit-error");
    await user.click(screen.getByTestId("create-project-submit"));

    await waitFor(() =>
      expect(createProjectRuntimeActionMock).toHaveBeenCalledTimes(2),
    );
    expect(
      createProjectRuntimeActionMock.mock.calls[0][0].idempotencyKey,
    ).toBe(createProjectRuntimeActionMock.mock.calls[1][0].idempotencyKey);
  });

  it("disables submit and announces pending state", async () => {
    let resolveAction: (value: typeof SUCCESS_RESULT) => void = () => {};
    createProjectRuntimeActionMock.mockReturnValue(
      new Promise((resolve) => {
        resolveAction = resolve;
      }),
    );
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);

    await user.click(screen.getByTestId("create-project-submit"));

    expect(screen.getByTestId("create-project-form")).toHaveAttribute(
      "aria-busy",
      "true",
    );
    expect(screen.getByTestId("create-project-submit")).toBeDisabled();
    expect(screen.getByRole("status")).toHaveTextContent(
      "Création locale en cours",
    );
    resolveAction(SUCCESS_RESULT);
    await screen.findByRole("heading", { name: "Projet créé localement" });
  });

  it("maps runtime INPUT_INVALID to its UI field", async () => {
    createProjectRuntimeActionMock.mockResolvedValue({
      ok: false,
      error: {
        code: "INPUT_INVALID",
        message: "Criticality is invalid.",
        retryable: false,
        field: "perceivedCriticality",
      },
      disclosures: SUCCESS_RESULT.disclosures,
      auditStatus: "DISABLED",
    });
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);

    await user.click(screen.getByTestId("create-project-submit"));

    expect(await screen.findByText("Criticality is invalid.")).toBeVisible();
  });

  it("shows DOCTRINE_UNRESOLVED as a blocking non-technical error", async () => {
    createProjectRuntimeActionMock.mockResolvedValue({
      ok: false,
      error: {
        code: "DOCTRINE_UNRESOLVED",
        message: "/private/local/registry missing",
        retryable: false,
      },
      disclosures: SUCCESS_RESULT.disclosures,
      auditStatus: "DISABLED",
    });
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);

    await user.click(screen.getByTestId("create-project-submit"));

    const error = await screen.findByTestId("submit-error");
    expect(error).toHaveTextContent(/doctrine locale n’a pas pu être validée/i);
    expect(error).not.toHaveTextContent("/private/local");
  });

  it("renders the real success projection inline and renews the key on reset", async () => {
    createProjectRuntimeActionMock.mockResolvedValue(SUCCESS_RESULT);
    const user = userEvent.setup();
    render(<CreateProjectForm />);
    await fillRequiredFields(user);
    const firstKey = screen.getByTestId("idempotency-key").textContent;

    await user.click(screen.getByTestId("create-project-submit"));

    expect(
      await screen.findByRole("heading", { name: "Projet créé localement" }),
    ).toBeVisible();
    expect(screen.getByText("prj:v2-a2-1")).toBeVisible();
    expect(screen.getAllByText("REAL_LOCAL_CORE").length).toBeGreaterThan(0);
    expect(screen.getAllByText("false").length).toBeGreaterThan(0);
    expect(screen.getByText("pkg:studio-v3-oa")).toBeVisible();
    expect(screen.getByText("lps:v2-a2-1")).toBeVisible();
    expect(screen.getAllByText("NOT_READY").length).toBeGreaterThan(0);
    expect(screen.getAllByText("NOT_GUARANTEED").length).toBeGreaterThan(0);
    expect(screen.queryByRole("link", { name: /projet/i })).toBeNull();
    expect(screen.queryByText(/recommendation|dashboard/i)).toBeNull();

    await user.click(
      screen.getByRole("button", { name: "Créer un autre projet" }),
    );
    await waitFor(() =>
      expect(screen.getByTestId("idempotency-key").textContent).not.toBe(
        firstKey,
      ),
    );
    expect(screen.getByLabelText(/Nom du projet/)).toHaveValue("");
  });

  it("keeps StudioShell defaults and allows V2-A2 to hide tabs and primary CTA", () => {
    const copilot = {
      variant: "flush" as const,
      name: "Nora",
      subtitle: "Lecture seule",
      summary: "Aucune autorité",
    };
    const { rerender } = render(
      <StudioShell
        variant="flush"
        activeRoute="/synthese"
        title="Historique"
        copilot={copilot}
      >
        contenu
      </StudioShell>,
    );
    expect(
      within(screen.getByTestId("topbar")).getByRole("link", {
        name: "Nouvelle demande",
      }),
    ).toBeVisible();
    expect(
      screen.getByRole("navigation", { name: "Navigation cycle" }),
    ).toBeVisible();

    rerender(
      <StudioShell
        variant="flush"
        activeRoute="/studio/projects/new"
        title="Créer un projet"
        showTabs={false}
        primaryAction={null}
        copilot={copilot}
      >
        contenu
      </StudioShell>,
    );
    expect(
      within(screen.getByTestId("topbar")).queryByRole("link", {
        name: "Nouvelle demande",
      }),
    ).toBeNull();
    expect(
      screen.queryByRole("navigation", { name: "Navigation cycle" }),
    ).toBeNull();
    expect(
      screen.getByLabelText("Créer un projet Studio"),
    ).toHaveAttribute("href", "/studio/projects/new");
  });

  it("has no serious or critical automated accessibility violations", async () => {
    const { container } = render(
      <main>
        <RuntimeDisclosureBanner />
        <CreateProjectForm />
      </main>,
    );

    const results = await axe.run(container, {
      rules: {
        // jsdom has no canvas implementation; runtime screenshots are used
        // for the complementary visual contrast review.
        "color-contrast": { enabled: false },
      },
    });
    expect(
      results.violations.filter(
        (violation) =>
          violation.impact === "critical" || violation.impact === "serious",
      ),
    ).toEqual([]);
  });
});
````
### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v2-a2-create-project-ui/README.md`

````markdown
# SFIA Studio V2-A2 — Create Project UI

## Cycle record

| Field | Value |
|---|---|
| Date / time / zone | 2026-07-29 23:45 CEST (+0200) |
| Cycle | 8 — Delivery / implementation |
| Profile | Standard |
| Control depth | Standard reinforced |
| Typology | EVOL |
| Project branch | `delivery/sfia-studio-visible-slice-v2-a2-create-project-ui` |
| Base | `origin/main` at `169e1a71fcd8625ff87565c1b7112d63d9044492` |
| Local status | Implemented locally; not integrated into `main` |

## Gate consumed

`GO IMPLEMENT SFIA STUDIO FIRST VISIBLE SLICE V2-A2 — CREATE PROJECT UI
— REUSE STUDIOSHELL AND V2-A1 RUNTIME — NO IAM PRODUCT PERSISTENCE REAL
AGENT DELIVERY OR CUTOVER`

This gate authorizes bounded local implementation and coherent local commits.
It does not authorize a project-branch push, pull request, merge, Figma write,
product delivery, or cutover.

## Morris decisions consumed

- D-VS-01: retain and adapt `StudioShell`; use `/studio/*`.
- D-VS-02: OA business state remains in memory; local audit is optional.
- D-VS-03: no fixtures, harness, or browser storage in the happy path.
- D-VS-04: Project/T-A0/T-A1 precede recommendation, decision, and dashboard.
- D-V2-01: server-only application runtime exposed by Server Actions.
- D-V2-02: process-local singleton.
- D-V2-03: noop audit by default.
- D-V2-04: `/studio/projects/*` namespace.
- D-V2-05: runtime disclosures are mandatory.

During implementation, Morris explicitly authorized updates to the two
historical route-count assertions in `increment-a.test.tsx` and
`increment-b.test.tsx`. The fixture-only route set remains four; the shared
rail now exposes five entries including V2-A2.

Not selected: D-VS-05/Figma write, IAM, product persistence, real agent
execution, delivery, and cutover. HARD remains OPEN and T-A6 remains
INCOMPLETE.

## Delivered architecture

```text
/studio/projects/new
  StudioShell (flush; tabs hidden; historical primary action hidden)
    RuntimeDisclosureBanner (Server Component)
      → vertical-slice-runtime/disclosures
    CreateProjectForm (Client Component)
      → createProjectRuntimeAction (Server Action)
        → RuntimeApplicationService V2-A1
          → LocalProjectFacade V1
            → T-A0 Project + T-A1 initial LPS
      ← serializable real-local projection rendered inline
```

No API route, `fetch`, browser storage, UI business cache, D1 action, fixture,
harness, agent, recommendation, decision, or dashboard is involved.

## Route and components

- route: `/studio/projects/new`;
- `CreateProjectForm.tsx`: client form, client UX validation, stable
  idempotency key during retry, runtime error mapping, inline success;
- `RuntimeDisclosureBanner.tsx`: server-rendered V2-A1 disclosures;
- `create-project.module.css`: bounded styles using existing `--sfia-*` tokens;
- `StudioShell` / `Topbar`: backward-compatible `showTabs` and
  `primaryAction` options;
- navigation rail: explicit `Créer un projet Studio` entry.

The legacy `StudioRoute` union remains fixture-only because
`vertical-slice/mapping.ts` consumes it exhaustively. `StudioShellRoute`
extends that union with `/studio/projects/new` without modifying the protected
fixture mapping.

## Form contract

- required: name (200 maximum), objective, context;
- perceived criticality: LOW/Faible, STANDARD/Standard, HIGH/Élevée;
- the UI states that perceived criticality is qualification input, not a
  Morris decision;
- constraints: one per line, empty lines removed, 500 maximum each;
- optional short reference: 64 maximum;
- client-generated, non-editable idempotency key, stable across retries and
  renewed only by the explicit post-success reset;
- no email, organization, personal data, secrets, infrastructure data, IAM
  identity, or authority token fields.

Client validation supports usability. The V2-A1 runtime and V1 core remain
authoritative. `INPUT_INVALID` is associated with the corresponding field,
including `perceivedCriticality` → `criticality`.
`DOCTRINE_UNRESOLVED` is presented as a blocking failure without leaking a
local path.

## Success projection

The same route displays:

- Project id, name, optional reference, objective, context summary,
  criticality, and constraints;
- doctrine id, version, digest, and status;
- LPS id, version, and creation date;
- `REAL_LOCAL_CORE`, `fixture=false`, idempotency reuse, and audit status;
- readiness and disclosures;
- an explicit `Créer un autre projet` reset action.

There is no redirect to D1 and no `/studio/projects/[id]` route in this lot.

## Runtime disclosures and anti-claims

Before and after submit, the UI states:

- `LOCAL_PROCESS`;
- `NOT_GUARANTEED`;
- real agent execution `DISABLED`;
- readiness `NOT_READY`;
- IAM and product persistence `NOT_SELECTED`;
- delivery and cutover `NOT_AUTHORIZED`;
- local state is volatile and restart/hot reload can lose it.

This lot does not claim HARD CLOSED, T-A6 COMPLETE, RUN READY, PRODUCT READY,
an authenticated Morris identity, a connected agent, durable persistence,
delivery authorization, or cutover authorization.

## Validation

The component tests cover fields, constraints parsing, criticality, exact
Server Action DTO, retry idempotency, reset renewal, pending state, runtime
error mapping, real-result presentation, shell compatibility, ARIA wiring,
and an automated axe serious/critical scan.

The import-boundary test verifies:

- runtime remains free of React/UI/browser storage/agents;
- V1 core remains independent of runtime;
- the V2-A2 client imports only `runtime/actions`;
- the server disclosure component imports only `runtime/disclosures`;
- V2-A2 imports no internal runtime module, core, D1, fixture, harness, OPS1,
  agent, storage, or network path.

Validation results are recorded in the FULL review pack
`.tmp-sfia-review/chatgpt-review.md`.

## Runtime evidence

Untracked evidence, all at an exact 1440 × 1024 CSS viewport:

- `.tmp-sfia-review/evidence/v2-a2/01-initial.png`;
- `.tmp-sfia-review/evidence/v2-a2/02-validation-errors.png`;
- `.tmp-sfia-review/evidence/v2-a2/03-success-real-runtime.png`.

The real success contained `REAL_LOCAL_CORE`, `fixture=false`, Project and LPS
ids, resolved doctrine metadata, `auditStatus=DISABLED`, and honest readiness.

## Visual source and limits

The Git visual contract and existing tokens are authoritative for this lot.
A read-only Figma metadata check covered page `0:1` (`UX-B — P0`) and frame
`19:2` (`P0-00C — Nouvelle demande / Product premium`, 1440 × 1024). There is
no validated V2-A2 frame, no Figma write, no pixel-perfect promise, and no
`FIGMA TO RUNTIME ALIGNED` conclusion.

The existing fixed-width `StudioShell` debt at 390 px remains outside this
lot. Neither `tokens.css` nor `shell.module.css` was changed.

## Protected and unchanged

- `app/lib/vertical-slice-core/**`;
- all V2-A1 runtime contracts and implementations;
- OA, D1, platform, harness, OPS1, and agent implementations;
- API surface, dependencies, lockfiles, schemas, migrations, environment
  files, CI, method, architecture, and Figma.

## Remaining debt and next gate

- consolidate global responsive behavior in a future visual lot;
- decide whether V2-A3 should add a bounded Project overview;
- decide D-VS-05 before any Figma write.

Candidate next gate, explicitly non-automatic:

`GO PR READINESS SFIA STUDIO V2-A2 CREATE PROJECT UI`

A new Morris decision is required before project push, PR creation, merge,
scope expansion, or any product-readiness claim.
````
## 17. Fichiers modifiés — diff utile complet

### `projects/sfia-studio/app/lib/navigation.ts`

````diff
diff --git a/projects/sfia-studio/app/lib/navigation.ts b/projects/sfia-studio/app/lib/navigation.ts
index 76b952d..0d93dac 100644
--- a/projects/sfia-studio/app/lib/navigation.ts
+++ b/projects/sfia-studio/app/lib/navigation.ts
@@ -4,12 +4,18 @@ export type StudioRoute =
   | "/cycle-actif"
   | "/decision";

+/**
+ * Shell-level routes include the real Studio namespace while preserving the
+ * legacy POC union consumed exhaustively by vertical-slice/mapping.ts.
+ */
+export type StudioShellRoute = StudioRoute | "/studio/projects/new";
+
 export interface NavItem {
   id: string;
-  route: StudioRoute;
+  route: StudioShellRoute;
   label: string;
   railIcon: string;
-  railKey: "home" | "plus" | "grid" | "diamond" | "gear";
+  railKey: "home" | "plus" | "grid" | "diamond" | "project" | "gear";
 }

 export interface TabItem {
@@ -35,6 +41,13 @@ export const STUDIO_ROUTES: NavItem[] = [
     railIcon: "＋",
     railKey: "plus",
   },
+  {
+    id: "studio-create-project",
+    route: "/studio/projects/new",
+    label: "Créer un projet Studio",
+    railIcon: "◆",
+    railKey: "project",
+  },
   {
     id: "cycle-actif",
     route: "/cycle-actif",
@@ -71,8 +84,8 @@ export function routeForTab(tabId: string): StudioRoute | undefined {
 }

 export function isActiveRoute(
-  activeRoute: StudioRoute,
-  route: StudioRoute,
+  activeRoute: StudioShellRoute,
+  route: StudioShellRoute,
 ): boolean {
   return activeRoute === route;
 }
````
### `projects/sfia-studio/app/components/shell/StudioShell.tsx`

````diff
diff --git a/projects/sfia-studio/app/components/shell/StudioShell.tsx b/projects/sfia-studio/app/components/shell/StudioShell.tsx
index ef6fbe9..578cb3e 100644
--- a/projects/sfia-studio/app/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio/app/components/shell/StudioShell.tsx
@@ -1,7 +1,13 @@
 import { UtilityRail } from "./UtilityRail";
-import { Topbar } from "./Topbar";
+import {
+  Topbar,
+  type TopbarPrimaryAction,
+} from "./Topbar";
 import { CopilotPanel, type CopilotProps } from "./CopilotPanel";
-import type { StudioRoute } from "@/lib/navigation";
+import type {
+  StudioRoute,
+  StudioShellRoute,
+} from "@/lib/navigation";
 import shellStyles from "@/styles/shell.module.css";

 interface TopbarPill {
@@ -12,11 +18,16 @@ interface TopbarPill {

 interface StudioShellProps {
   variant: "floating" | "flush";
-  activeRoute: StudioRoute;
+  activeRoute: StudioShellRoute;
   title: string;
   pills?: TopbarPill[];
   children: React.ReactNode;
   copilot: CopilotProps;
+  showTabs?: boolean;
+  /**
+   * `undefined` preserves the historical CTA; `null` hides it.
+   */
+  primaryAction?: TopbarPrimaryAction | null;
 }

 export function StudioShell({
@@ -26,6 +37,8 @@ export function StudioShell({
   pills,
   children,
   copilot,
+  showTabs,
+  primaryAction,
 }: StudioShellProps) {
   const isFloating = variant === "floating";

@@ -34,7 +47,10 @@ export function StudioShell({
       <div className={shellStyles.pageFloating} data-testid="studio-shell">
         <div className={shellStyles.brandAccent} aria-hidden="true" />
         <div className={shellStyles.railFloating}>
-          <UtilityRail variant="floating" activeRoute={activeRoute} />
+          <UtilityRail
+            variant="floating"
+            activeRoute={activeRoute as StudioRoute}
+          />
         </div>
         <div className={shellStyles.workspaceFloating}>
           <Topbar
@@ -42,6 +58,8 @@ export function StudioShell({
             title={title}
             activeRoute={activeRoute}
             pills={pills}
+            showTabs={showTabs}
+            primaryAction={primaryAction}
           />
           <main className={shellStyles.workspaceInner} id="main-content">
             {children}
@@ -58,7 +76,10 @@ export function StudioShell({
     <div className={shellStyles.pageFlush} data-testid="studio-shell">
       <div className={shellStyles.brandAccent} aria-hidden="true" />
       <div className={shellStyles.railFlush}>
-        <UtilityRail variant="flush" activeRoute={activeRoute} />
+        <UtilityRail
+          variant="flush"
+          activeRoute={activeRoute as StudioRoute}
+        />
       </div>
       <div className={shellStyles.mainFlush}>
         <Topbar
@@ -66,6 +87,8 @@ export function StudioShell({
           title={title}
           activeRoute={activeRoute}
           pills={pills}
+          showTabs={showTabs}
+          primaryAction={primaryAction}
         />
         <div className={shellStyles.bodyFlush}>
           <main
````
### `projects/sfia-studio/app/components/shell/Topbar.tsx`

````diff
diff --git a/projects/sfia-studio/app/components/shell/Topbar.tsx b/projects/sfia-studio/app/components/shell/Topbar.tsx
index 58d7ff5..ed9b0cd 100644
--- a/projects/sfia-studio/app/components/shell/Topbar.tsx
+++ b/projects/sfia-studio/app/components/shell/Topbar.tsx
@@ -5,7 +5,7 @@ import { StatusPill } from "@/components/ui/StatusPill";
 import { CtaButton } from "@/components/ui/CtaButton";
 import {
   FLUSH_TABS,
-  type StudioRoute,
+  type StudioShellRoute,
 } from "@/lib/navigation";
 import styles from "./topbar.module.css";

@@ -15,13 +15,22 @@ interface TopbarPill {
   testId?: string;
 }

+export interface TopbarPrimaryAction {
+  label: string;
+  href: string;
+}
+
 interface TopbarProps {
   variant: "floating" | "flush";
   title: string;
-  activeRoute: StudioRoute;
+  activeRoute: StudioShellRoute;
   pills?: TopbarPill[];
   showTabs?: boolean;
   floatingTabs?: string[];
+  /**
+   * `undefined` preserves the historical CTA; `null` hides it.
+   */
+  primaryAction?: TopbarPrimaryAction | null;
 }

 export function Topbar({
@@ -29,10 +38,15 @@ export function Topbar({
   title,
   activeRoute,
   pills = [],
-  showTabs = variant === "flush",
+  showTabs = true,
   floatingTabs = ["Demande", "Contexte", "Pièces jointes", "Qualification"],
+  primaryAction,
 }: TopbarProps) {
   const isFloating = variant === "floating";
+  const resolvedPrimaryAction =
+    primaryAction === undefined
+      ? { label: "Nouvelle demande", href: "/nouvelle-demande" }
+      : primaryAction;

   if (isFloating) {
     return (
@@ -55,20 +69,28 @@ export function Topbar({
             </div>
           </div>
         </div>
-        <div className={styles.tabsFloating} role="tablist" aria-label="Sections demande">
-          {floatingTabs.map((tab, index) => (
-            <span
-              key={tab}
-              className={
-                index === 0 ? styles.tabFloatingActive : styles.tabFloating
-              }
-              role="tab"
-              aria-selected={index === 0}
-            >
-              {tab}
-            </span>
-          ))}
-        </div>
+        {showTabs ? (
+          <div
+            className={styles.tabsFloating}
+            role="tablist"
+            aria-label="Sections demande"
+          >
+            {floatingTabs.map((tab, index) => (
+              <span
+                key={tab}
+                className={
+                  index === 0
+                    ? styles.tabFloatingActive
+                    : styles.tabFloating
+                }
+                role="tab"
+                aria-selected={index === 0}
+              >
+                {tab}
+              </span>
+            ))}
+          </div>
+        ) : null}
       </header>
     );
   }
@@ -88,7 +110,11 @@ export function Topbar({
               </StatusPill>
             </span>
           ))}
-          <CtaButton href="/nouvelle-demande">Nouvelle demande</CtaButton>
+          {resolvedPrimaryAction ? (
+            <CtaButton href={resolvedPrimaryAction.href}>
+              {resolvedPrimaryAction.label}
+            </CtaButton>
+          ) : null}
         </div>
       </div>
       {showTabs && (
````
### `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`

````diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index 63914d1..7eb7386 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -53,7 +53,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
     expect(violations).toEqual([]);
   });

-  it("does not wire runtime into application UI routes or features yet", () => {
+  it("allows only the bounded V2-A2 UI runtime entrypoints", () => {
     const uiRoots = [
       path.join(APP_ROOT, "app"),
       path.join(APP_ROOT, "components"),
@@ -69,12 +69,45 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
             line: index + 1,
             text: line.trim(),
           }))
-          .filter((entry) =>
-            /@\/lib\/vertical-slice-runtime/.test(entry.text),
-          ),
+          .filter((entry) => /@\/lib\/vertical-slice-runtime/.test(entry.text)),
       ),
     );
-    expect(imports).toEqual([]);
+
+    const allowed = new Set([
+      "features/vertical-slice-ui/CreateProjectForm.tsx:@/lib/vertical-slice-runtime/actions",
+      "features/vertical-slice-ui/RuntimeDisclosureBanner.tsx:@/lib/vertical-slice-runtime/disclosures",
+    ]);
+    const normalized = imports.map((entry) => {
+      const modulePath = entry.text.match(
+        /@\/lib\/vertical-slice-runtime(?:\/[^"']+)?/,
+      )?.[0];
+      return `${entry.file}:${modulePath}`;
+    });
+
+    expect(new Set(normalized)).toEqual(allowed);
+  });
+
+  it("keeps V2-A2 UI free of core, internal runtime, D1, fixtures, storage, network, and agents", () => {
+    const roots = [
+      path.join(APP_ROOT, "app/studio/projects/new"),
+      path.join(APP_ROOT, "features/vertical-slice-ui"),
+    ];
+    const forbidden =
+      /@\/lib\/(?:vertical-slice-core|vertical-slice-runtime\/(?:service|singleton|mapping|paths|serverGuard|index)|d1|harness|ops1|agents)|@\/features\/d1|@\/fixtures|\b(?:sessionStorage|localStorage|fetch)\s*[.(]/;
+    const violations = roots.flatMap((root) =>
+      listSourceFiles(root).flatMap((file) =>
+        fs
+          .readFileSync(file, "utf8")
+          .split("\n")
+          .map((line, index) => ({
+            file: path.relative(APP_ROOT, file),
+            line: index + 1,
+            text: line.trim(),
+          }))
+          .filter((entry) => forbidden.test(entry.text)),
+      ),
+    );
+    expect(violations).toEqual([]);
   });

   it("keeps V1 core free of runtime dependency (one-way reuse)", () => {
````
### `projects/sfia-studio/app/__tests__/increment-a.test.tsx`

````diff
diff --git a/projects/sfia-studio/app/__tests__/increment-a.test.tsx b/projects/sfia-studio/app/__tests__/increment-a.test.tsx
index 8212f64..05fbad0 100644
--- a/projects/sfia-studio/app/__tests__/increment-a.test.tsx
+++ b/projects/sfia-studio/app/__tests__/increment-a.test.tsx
@@ -50,8 +50,11 @@ beforeEach(() => {
 });

 describe("Increment A — mapping & fixtures", () => {
-  it("exposes exactly four Studio routes", () => {
-    expect(STUDIO_ROUTES).toHaveLength(4);
+  it("keeps four POC routes and exposes the V2-A2 project route in the rail", () => {
+    expect(STUDIO_ROUTES).toHaveLength(5);
+    expect(STUDIO_ROUTES.map((item) => item.route)).toContain(
+      "/studio/projects/new",
+    );
     expect(STUDIO_ROUTES_ONLY).toEqual([
       "/nouvelle-demande",
       "/decision",
````
### `projects/sfia-studio/app/__tests__/increment-b.test.tsx`

````diff
diff --git a/projects/sfia-studio/app/__tests__/increment-b.test.tsx b/projects/sfia-studio/app/__tests__/increment-b.test.tsx
index 888f791..343f764 100644
--- a/projects/sfia-studio/app/__tests__/increment-b.test.tsx
+++ b/projects/sfia-studio/app/__tests__/increment-b.test.tsx
@@ -94,8 +94,11 @@ describe("Increment B — adapter mapping (no authority)", () => {
     ).toBe("probe-invalid-head");
   });

-  it("keeps exactly four routes", () => {
-    expect(STUDIO_ROUTES).toHaveLength(4);
+  it("keeps four POC routes while adding one real Studio rail route", () => {
+    expect(STUDIO_ROUTES).toHaveLength(5);
+    expect(STUDIO_ROUTES.map((item) => item.route)).toContain(
+      "/studio/projects/new",
+    );
     expect(STUDIO_ROUTES_ONLY).toHaveLength(4);
   });
 });
````
## 18. Fichiers explicitement inchangés / actions absentes

V1 core, V2-A1 runtime contracts/implementations, OA, D1, platform, harness, OPS1, agents, legacy routes, tokens, shell CSS, dependencies, lockfiles, schemas, migrations, CI, prompts, method, architecture, Figma and environment files are unchanged.

No project push, PR, merge, branch deletion, force push, Figma write, IAM, product persistence, agent execution, recommendation, dashboard, delivery or cutover occurred.

## 19. Prochaine décision Morris

Gate candidat non automatique :

`GO PR READINESS SFIA STUDIO V2-A2 CREATE PROJECT UI`

Un nouveau GO est requis avant push projet, PR, merge, suppression de branche ou élargissement de scope.

# COURTILIEN-03-CLIENT-UI — Review pack Full

**Cycle :** COURTILIEN-03-CLIENT-UI — BUILD UI espace client Softr
**Type :** 8 — Delivery / implémentation · **Profil :** Standard · **Typologie :** EVOL
**CKC cycle 8 :** Delivery / Léger* / P2 (carte synthétique — non norme doctrinale)
**Date rapport :** 2026-11-20 12:08:00 CET (Europe/Paris)
**Verdict review pack :** `READY WITH RESERVES`
**Claim autorisé :** `UI DEMO IMPLEMENTED` (technique)
**Fidélité Figma runtime home :** `VISUAL NOT PROVEN`
**Accès client :** `NOT READY FOR CLIENT ACCESS`

---

## 1. Local Git Truth Check

| Contrôle | Valeur |
|----------|--------|
| Repository | `mcleland147/sfia-workspace` |
| Branche | `project/sfia-task-manager-cycle-4-ux-ui` |
| HEAD | `139f45fd019aa0561bfb5c6b7a7bd1c748f570b4` |
| origin/main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Staged | vide |
| status --short | untracked hors projet (`.cursor/…`, `.tmp-sfia-review/…`) |
| Diff projet | aucun |
| Tip handoff début | `53f7f098…` COURTILIEN-02B access diagnostic |
| Anomalie | aucune |

---

## 2. Sources

| Source | Statut |
|--------|--------|
| Template / routing / OM / guardrails / checklist / CKC8 | LU (`origin/main`) |
| Handoff ACCESS-DIAG `53f7f098:sfia-review-handoff/latest-chatgpt-review.md` | LU |
| Figma file `2IpouPT5Ks2H9q9lobZFZm` session `b20b8425-…` | LU |
| Desktop `6:162` get_design_context + screenshot | LU |
| Mobile `18:297` get_design_context + screenshot | LU |
| get_variable_defs Desktop | LU |
| Softr change-app + design-rules + softr-sdk/auth | LU |
| Application MCP open/list/read/write/check/screenshot | EXÉCUTÉ |

---

## 3. Application cible

| Champ | Valeur |
|-------|--------|
| ID | `7242211b-049d-4673-9262-19dd95ee9178` |
| Nom | CourtiLien — Espace client |
| Type | APP |
| Workspace | `f7d92030-1494-4050-b64b-afa7af837734` |
| Historique protégée | `e8491c5f-…` **non modifiée** (`updated` inchangé 2026-11-19T15:13:21Z) |

---

## 4. État Softr avant → après (garde-fous)

| Contrôle | Avant | Après | Preuve |
|----------|-------|-------|--------|
| published | null | null | PASS |
| signup | DISABLED | DISABLED | PASS |
| login | EMAIL_CODE | EMAIL_CODE | PASS |
| user connection | null | null | PASS |
| users | 0 | 0 | PASS |
| custom groups | 0 | 0 | PASS |
| restrictions | [] | [] | PASS |
| datasources | 7 | 7 | PASS |
| Auth / users / restrictions mutés | — | non | PASS |
| Airtable écriture | — | non | PASS |

---

## 5. Contrat visuel Figma (documenté avant BUILD)

### Desktop `6:162` — 1440×1110
- Header blanc : logo CourtiLien, nav Accueil (actif teal) / Mes contrats / Mes documents / Mes sinistres, CTA Mon profil secondary.
- Eyebrow « Mon espace client », H1 « Bonjour Camille, », sous-titre contrats/documents/demandes.
- Bandeau action prioritaire alertBg `#FFF1DF` + badge Pièce manquante + Déposer ma pièce.
- Mes contrats : 2 cartes habitation/auto, statuts Actif, Consulter.
- Mes démarches : Documents + Sinistres.
- Footer navy.

### Mobile `18:297` — 390×844
- Header logo + Déconnexion.
- Eyebrow caps, greeting, action prioritaire empilée.
- Contrats empilés, boutons Mes documents / Mes sinistres.
- Bannière « Démonstration • données fictives ».

### Tokens
Navy `#1B2A41` · Teal `#0B6E6E` · Orange `#B54708` · BG `#F5F7FA` · Success `#176B40` · Secondary `#667085` · Border `#D7DEE6` · AlertBg `#FFF1DF` · SuccessBg `#E5F3E9` · radius 8 · Inter.

Assets Figma téléchargés (SVG) puis stockés sous `src/assets/courtilien/**` et inlinés React (paths exacts).

---

## 6. Fichiers Softr créés / modifiés

### Créés
- `src/assets/courtilien/icon-alert.svg`
- `src/assets/courtilien/icon-auto.svg`
- `src/assets/courtilien/icon-check.svg`
- `src/assets/courtilien/icon-home.svg`
- `src/assets/courtilien/logo-mark.svg`
- `src/components/courtilien-client/brand-logo.tsx`
- `src/components/courtilien-client/cl-button.tsx`
- `src/components/courtilien-client/client-header.tsx`
- `src/components/courtilien-client/client-home.tsx`
- `src/components/courtilien-client/contract-card.tsx`
- `src/components/courtilien-client/demarches.tsx`
- `src/components/courtilien-client/fixtures.ts`
- `src/components/courtilien-client/icons.tsx`
- `src/components/courtilien-client/priority-action.tsx`
- `src/components/courtilien-client/sign-out-button.tsx`
- `src/components/courtilien-client/status-pill.tsx`

### Modifiés
- `src/lib/app.ts`
- `src/routes/_app.tsx`
- `src/routes/_app/index.tsx`
- `src/styles.css`

### Préservés / non touchés (interdits)
- `src/softr-fields.ts` — régénéré uniquement par `application_check` (data model refresh) ; **non écrasé manuellement**.
- `softr-env.d.ts` / `src/routeTree.gen.ts` — non écrits manuellement.
- `src/components/auth.tsx`, `AuthShell.tsx`, `src/routes/_auth/**` — non modifiés.
- `AppSidebar.tsx` — conservé (shell remplacé dans `_app.tsx` ; sidebar non utilisé sur l'accueil client).

### Diff utile `_app.tsx`
Shell SidebarProvider → layout CourtiLien `ClientHeader` + `PageOutlet` + `ClientFooter`, visibility `LOGGED_IN_USERS` **inchangée**.

### Diff utile `index.tsx`
Placeholder Card → `<ClientHome />` (fixtures locales).

### Diff utile `styles.css`
Ajout tokens `--cl-*` + mapping `@theme inline` → utilities `bg-cl-*` / `text-cl-*` ; primary/teal, background `#F5F7FA`, radius 8px.

---

## 7. Fonctionnalités UI

| Élément | Statut |
|---------|--------|
| Accueil responsive Desktop/Mobile (structure Figma) | IMPLÉMENTÉ (code) |
| Navigation ancres locales | IMPLÉMENTÉ |
| Cartes contrats fixtures + Consulter → panneau read-only fictif | IMPLÉMENTÉ |
| Action prioritaire visible | IMPLÉMENTÉ |
| Déposer / Documents / Sinistres / Profil / Voir tous | DISABLED + hint « Disponible dans une prochaine version » |
| Bannière démonstration | IMPLÉMENTÉ |
| Données Airtable auto-chargées | **NON** (fixtures isolées) |
| Auth contournée | **NON** |

---

## 8. Validations techniques

| Contrôle | Résultat |
|----------|----------|
| `application_check` | **PASS** (`ok: true`, issues `[]`) |
| TypeScript / lint / routes | PASS |
| Accès données métier non filtrées | PASS (aucun query Airtable sur home) |
| Mutations métier | PASS (aucune) |

Premier check : 4 lint issues corrigées (imports + raw colors logo). Second check : PASS.

---

## 9. Validations visuelles runtime

| Capture | Résultat |
|---------|----------|
| Desktop 1440 `/` signed-out | Login « Welcome back » / CourtiLien — **pas l'accueil Figma** |
| Mobile 390×844 `/` signed-out | Idem login |

**Cause :** routes `_app` / home en `LOGGED_IN_USERS` ; **0 utilisateur Softr** ; création de compte **interdite** dans ce cycle.

**Verdicts :**
- `VISUAL NOT PROVEN` pour fidélité Figma home Desktop `6:162` / Mobile `18:297`.
- `VISUAL RUNTIME NOT VERIFIED` pour interactions accueil (hover/focus/consulter) en preview authentifiée.
- Screenshot login = preuve que le gate auth n'a **pas** été désactivé (garde-fou respecté).

Comparatif Figma/runtime home : **NON RÉALISABLE** sans session réelle (GO Morris distinct).

---

## 10. Fake / Real Qualification

| Élément | Niveau |
|---------|--------|
| Fixtures UI Camille / contrats HAB-AUTO | FAKE / DEMO |
| Intégration Airtable présente | REAL BOUNDARY (non consommée par le home) |
| Session client → identité → cloisonnement | **NOT PROVEN** |
| Preuve cycle | Code + `application_check` PASS |
| Hors scope | END-TO-END REAL PROVEN |
| Claims interdits évités | Sécurité validée · client connecté · MVP prêt · Figma READY |

---

## 11. Écarts / réserves / dettes

1. Home Figma non capturable sans utilisateur Softr.
2. Logo auth shell reste AppMark lucide (auth files interdits) — branding login partiel.
3. Nav mobile secondaire (barre sous header) non présente telle quelle dans Figma mobile (ajout accessibilité/nav) — écart documenté.
4. Layout desktop responsive (flex/grid) vs positions absolues Figma — volontaire.
5. `softr-fields.ts` / docs datasources régénérés par check — documentés, non édités à la main.

---

## 12. Décisions Morris restantes

| # | Décision |
|---|----------|
| D1 | GO utilisateur de test / preview authentifiée pour preuves visuelles Figma |
| D2 | Suite fonctionnelle (documents, sinistres, dépôt) |
| D3 | Raccordement données autorisées + sécurité E2E |
| D4 | Apps courtier / directeur |
| D5 | Publication |

---

## 13. Verdict

**`READY WITH RESERVES`** — BUILD UI code livré, check PASS, garde-fous identité respectés, **fidélité Figma home non prouvée runtime**.

**`NOT READY FOR CLIENT ACCESS`**.

Handoff attendu : `docs(review-handoff): COURTILIEN-03 client UI`

---

## 14. Annexe — contenu des fichiers créés / routes modifiées

Contenu aligné sur le workspace Softr après corrections lint.

### `src/assets/courtilien/icon-alert.svg`

```
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Icon/alert">
<path id="Vector" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="#B54708"/>
<path id="Vector_2" d="M12 7V12M12 16H12.01" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="#B54708"/>
</g>
</svg>
```

### `src/assets/courtilien/icon-auto.svg`

```
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Icon / Automobile">
<path id="Vector" d="M5 11L6.5 6H17.5L19 11M5 18V20M19 18V20M7 14H9M15 14H17M3 11H21V18H3V11Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="#1B2A41"/>
</g>
</svg>
```

### `src/assets/courtilien/icon-check.svg`

```
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Icon/check">
<path id="Vector" d="M5 12L10 17L20 7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="#176B40"/>
</g>
</svg>
```

### `src/assets/courtilien/icon-home.svg`

```
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Icon/home">
<path id="Vector" d="M3 10.5L12 3L21 10.5V21H15V14H9V21H3V10.5Z" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" stroke="#1B2A41"/>
</g>
</svg>
```

### `src/assets/courtilien/logo-mark.svg`

```
<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="44.4" height="20.88" viewBox="0 0 44.4 20.88" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group">
<path id="Vector" d="M17.88 3L10.44 3C8.46679 3 6.5744 3.78385 5.17913 5.17913C3.78385 6.5744 3 8.46679 3 10.44C3 12.4132 3.78385 14.3056 5.17913 15.7009C6.5744 17.0961 8.46679 17.88 10.44 17.88H21.48C23.4532 17.88 25.3456 17.0961 26.7409 15.7009C28.1361 14.3056 28.92 12.4132 28.92 10.44" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke="#1B2A41"/>
<path id="Vector_2" d="M26.52 17.88H33.96C35.9332 17.88 37.8256 17.0961 39.2209 15.7009C40.6161 14.3056 41.4 12.4132 41.4 10.44C41.4 8.46679 40.6161 6.5744 39.2209 5.17913C37.8256 3.78386 35.9332 3 33.96 3L22.92 3C20.9468 3 19.0544 3.78386 17.6591 5.17913C16.2639 6.5744 15.48 8.46679 15.48 10.44" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke="#0B6E6E"/>
</g>
</svg>
```

### `src/components/courtilien-client/brand-logo.tsx`

```
import { Link } from '@tanstack/react-router'
import { APP_HOME } from '#/lib/app.ts'
import { cn } from '#/lib/utils.ts'
import { LogoMark } from './icons.tsx'

export function BrandLogo({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  return (
    <Link
      to={APP_HOME}
      className={cn(
        'inline-flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cl-teal/40',
        className,
      )}
      aria-label="CourtiLien — Accueil"
    >
      <LogoMark className={cn(compact ? 'h-5 w-auto' : 'h-6 w-auto sm:h-7')} />
      <span className="leading-tight">
        <span className="block font-bold tracking-tight text-cl-navy">
          <span className={cn(compact ? 'text-[23px]' : 'text-[26px] sm:text-[30px]')}>
            Courti
          </span>
          <span className={cn('text-cl-teal', compact ? 'text-[23px]' : 'text-[26px] sm:text-[30px]')}>
            Lien
          </span>
        </span>
        <span
          className={cn(
            'block text-cl-navy',
            compact ? 'text-[8px]' : 'text-[10px]',
          )}
        >
          Le lien de confiance, simplifié.
        </span>
      </span>
    </Link>
  )
}
```

### `src/components/courtilien-client/cl-button.tsx`

```
import { Button } from '#/components/ui/button.tsx'
import { cn } from '#/lib/utils.ts'
import type { ComponentProps } from 'react'

type ClVariant = 'primary' | 'secondary'

type Props = Omit<ComponentProps<typeof Button>, 'variant' | 'size'> & {
  clVariant?: ClVariant
  fullWidth?: boolean
}

export function ClButton({
  className,
  clVariant = 'primary',
  fullWidth = false,
  ...props
}: Props) {
  return (
    <Button
      {...props}
      variant={clVariant === 'primary' ? 'default' : 'outline'}
      className={cn(
        'h-11 rounded-lg px-4 text-base font-semibold',
        clVariant === 'primary' &&
          'border-transparent bg-cl-teal text-white hover:bg-cl-teal/90 focus-visible:border-cl-teal focus-visible:ring-cl-teal/30',
        clVariant === 'secondary' &&
          'border-cl-teal bg-white text-cl-teal hover:bg-cl-teal/5 focus-visible:border-cl-teal focus-visible:ring-cl-teal/30',
        fullWidth && 'w-full',
        className,
      )}
    />
  )
}
```

### `src/components/courtilien-client/client-header.tsx`

```
import { BrandLogo } from './brand-logo.tsx'
import { ClButton } from './cl-button.tsx'
import { SignOutButton } from './sign-out-button.tsx'
import { cn } from '#/lib/utils.ts'
import { UNAVAILABLE_HINT } from './fixtures.ts'

const NAV = [
  { id: 'accueil', label: 'Accueil', href: '#accueil' },
  { id: 'contrats', label: 'Mes contrats', href: '#contrats' },
  { id: 'documents', label: 'Mes documents', href: '#documents' },
  { id: 'sinistres', label: 'Mes sinistres', href: '#sinistres' },
] as const

export function ClientHeader({ active = 'accueil' }: { active?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-cl-border bg-white">
      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between gap-3 px-3 sm:px-6 lg:h-[100px] lg:px-14">
        <BrandLogo compact className="min-w-0 shrink" />

        <nav
          className="hidden items-center gap-8 xl:gap-10 lg:flex"
          aria-label="Navigation principale"
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                'rounded-sm text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cl-teal/40',
                active === item.id
                  ? 'font-semibold text-cl-teal'
                  : 'font-normal text-cl-navy hover:text-cl-teal',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ClButton
            clVariant="secondary"
            className="hidden w-[244px] lg:inline-flex"
            disabled
            title={UNAVAILABLE_HINT}
            aria-label={`Mon profil — ${UNAVAILABLE_HINT}`}
          >
            Mon profil
          </ClButton>
          <SignOutButton />
        </div>
      </div>

      <nav
        className="flex gap-1 overflow-x-auto border-t border-cl-border px-3 py-2 lg:hidden"
        aria-label="Navigation mobile"
      >
        {NAV.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={cn(
              'shrink-0 rounded-lg px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cl-teal/40',
              active === item.id
                ? 'bg-cl-teal/10 font-semibold text-cl-teal'
                : 'text-cl-navy',
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export function ClientFooter() {
  return (
    <footer className="mt-auto hidden bg-cl-navy text-white lg:block">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-16 lg:py-7">
        <div>
          <p className="text-xl font-bold">CourtiLien</p>
          <p className="text-sm text-white/80">Le lien de confiance, simplifié.</p>
        </div>
        <p className="text-sm text-white/90">
          Contact · Confidentialité · Accessibilité
        </p>
      </div>
    </footer>
  )
}
```

### `src/components/courtilien-client/client-home.tsx`

```
import { useState } from 'react'
import type { DemoContract } from './fixtures.ts'
import {
  DEMO_BANNER,
  DEMO_CLIENT,
  DEMO_CONTRACTS,
  UNAVAILABLE_HINT,
} from './fixtures.ts'
import { PriorityAction } from './priority-action.tsx'
import { ContractCard, ContractDetailPanel } from './contract-card.tsx'
import { DemarchesSection } from './demarches.tsx'

export function ClientHome() {
  const [selected, setSelected] = useState<DemoContract | null>(null)

  return (
    <div id="accueil" className="mx-auto w-full max-w-[1440px] px-5 pb-10 pt-6 sm:px-6 lg:px-14 lg:pb-12 lg:pt-8">
      <div
        className="mb-5 rounded-lg border border-cl-border bg-white px-3 py-2 text-center text-xs text-cl-secondary sm:text-sm"
        role="note"
      >
        {DEMO_BANNER} — aucune donnée métier réelle
      </div>

      <p className="text-xs font-bold uppercase tracking-wide text-cl-teal lg:text-sm lg:font-normal lg:normal-case">
        <span className="lg:hidden">{DEMO_CLIENT.eyebrowMobile}</span>
        <span className="hidden lg:inline">{DEMO_CLIENT.eyebrow}</span>
      </p>
      <h1 className="mt-2 text-[32px] font-bold leading-10 text-cl-navy lg:text-[40px] lg:leading-none">
        {DEMO_CLIENT.greeting}
      </h1>
      <p className="mt-2 text-base text-cl-secondary lg:mt-3">
        <span className="lg:hidden">{DEMO_CLIENT.subtitleMobile}</span>
        <span className="hidden lg:inline">{DEMO_CLIENT.subtitle}</span>
      </p>

      <div className="mt-5 lg:mt-8">
        <PriorityAction />
      </div>

      <section
        id="contrats"
        aria-labelledby="contrats-heading"
        className="mt-8 space-y-4 lg:mt-10"
      >
        <div className="flex items-end justify-between gap-4">
          <h2
            id="contrats-heading"
            className="text-2xl font-semibold text-cl-navy"
          >
            Mes contrats
          </h2>
          <button
            type="button"
            className="hidden text-base font-semibold text-cl-teal hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cl-teal/40 lg:inline"
            disabled
            title={UNAVAILABLE_HINT}
          >
            Voir tous mes contrats
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          {DEMO_CONTRACTS.map((contract) => (
            <ContractCard
              key={contract.id}
              contract={contract}
              onConsult={setSelected}
            />
          ))}
        </div>
      </section>

      <div className="mt-8 lg:mt-10">
        <DemarchesSection />
      </div>

      <p className="mt-8 border-t border-cl-border pt-4 text-xs text-cl-secondary lg:hidden">
        {DEMO_BANNER}
      </p>

      {selected ? (
        <ContractDetailPanel
          contract={selected}
          onClose={() => setSelected(null)}
        />
      ) : null}
    </div>
  )
}
```

### `src/components/courtilien-client/contract-card.tsx`

```
import { ClButton } from './cl-button.tsx'
import { StatusPill } from './status-pill.tsx'
import { IconAuto, IconHome } from './icons.tsx'
import type { DemoContract } from './fixtures.ts'
import { UNAVAILABLE_HINT } from './fixtures.ts'
import { cn } from '#/lib/utils.ts'

export function ContractCard({
  contract,
  onConsult,
}: {
  contract: DemoContract
  onConsult?: (contract: DemoContract) => void
}) {
  const Icon = contract.icon === 'home' ? IconHome : IconAuto

  return (
    <article
      className={cn(
        'flex flex-col rounded-lg border border-cl-border bg-white p-4',
        'lg:min-h-[164px] lg:bg-cl-bg lg:p-5',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <Icon className="mt-0.5 hidden size-6 shrink-0 text-cl-navy lg:block" />
          <div className="min-w-0">
            <h3 className="text-xl font-semibold text-cl-navy">{contract.title}</h3>
            <p className="mt-1 text-xs text-cl-secondary lg:text-sm">
              <span className="lg:hidden">{contract.referenceShort}</span>
              <span className="hidden lg:inline">{contract.reference}</span>
            </p>
          </div>
        </div>
        <StatusPill
          label={contract.status}
          kind="success"
          className="hidden w-auto shrink-0 lg:inline-flex"
        />
        <span className="shrink-0 text-[13px] font-semibold text-cl-success lg:hidden">
          {contract.status}
        </span>
      </div>

      <p className="mt-3 text-[13px] text-cl-navy lg:mt-auto lg:pt-6 lg:text-base">
        {contract.echeance}
      </p>

      <div className="mt-3 lg:mt-0 lg:flex lg:justify-end">
        <ClButton
          clVariant="secondary"
          className="w-full lg:hidden"
          onClick={() => onConsult?.(contract)}
        >
          Consulter
        </ClButton>
        <ClButton
          className="hidden w-[250px] lg:inline-flex"
          onClick={() => onConsult?.(contract)}
        >
          Consulter
        </ClButton>
      </div>
    </article>
  )
}

export function ContractDetailPanel({
  contract,
  onClose,
}: {
  contract: DemoContract
  onClose: () => void
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contract-detail-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-cl-navy/40 p-4 sm:items-center"
      onClick={onClose}
      onKeyDown={(event) => {
        if (event.key === 'Escape') onClose()
      }}
    >
      <div
        className="w-full max-w-lg rounded-lg border border-cl-border bg-white p-6 shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="text-sm font-semibold text-cl-teal">Aperçu démonstration</p>
        <h2
          id="contract-detail-title"
          className="mt-2 text-2xl font-semibold text-cl-navy"
        >
          {contract.title}
        </h2>
        <dl className="mt-4 space-y-2 text-sm text-cl-secondary">
          <div>
            <dt className="font-semibold text-cl-navy">Référence</dt>
            <dd>{contract.reference}</dd>
          </div>
          <div>
            <dt className="font-semibold text-cl-navy">Statut</dt>
            <dd>{contract.status}</dd>
          </div>
          <div>
            <dt className="font-semibold text-cl-navy">Échéance</dt>
            <dd>{contract.echeance}</dd>
          </div>
        </dl>
        <p className="mt-4 rounded-lg bg-cl-bg p-3 text-sm text-cl-secondary">
          Données fictives destinées à la validation visuelle. Aucune donnée
          Airtable n&apos;est chargée.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ClButton clVariant="secondary" onClick={onClose}>
            Fermer
          </ClButton>
          <ClButton disabled title={UNAVAILABLE_HINT}>
            Actions contrat
          </ClButton>
        </div>
      </div>
    </div>
  )
}
```

### `src/components/courtilien-client/demarches.tsx`

```
import { ClButton } from './cl-button.tsx'
import { UNAVAILABLE_HINT } from './fixtures.ts'

export function DemarchesSection() {
  return (
    <section aria-labelledby="demarches-heading" className="space-y-4">
      <h2
        id="demarches-heading"
        className="hidden text-2xl font-semibold text-cl-navy lg:block"
      >
        Mes démarches
      </h2>

      <div className="hidden gap-6 lg:grid lg:grid-cols-2">
        <article
          id="documents"
          className="rounded-lg border border-cl-border bg-white p-6"
        >
          <h3 className="text-xl font-semibold text-cl-navy">Mes documents</h3>
          <p className="mt-3 text-base text-cl-secondary">
            Retrouvez vos attestations et documents disponibles.
          </p>
          <ClButton
            clVariant="secondary"
            className="mt-6 w-[250px]"
            disabled
            title={UNAVAILABLE_HINT}
          >
            Consulter les documents
          </ClButton>
        </article>

        <article
          id="sinistres"
          className="rounded-lg border border-cl-border bg-white p-6"
        >
          <h3 className="text-xl font-semibold text-cl-navy">Mes sinistres</h3>
          <p className="mt-3 text-base text-cl-secondary">
            Déclarez un sinistre ou consultez son suivi.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ClButton
              clVariant="secondary"
              className="w-[250px]"
              disabled
              title={UNAVAILABLE_HINT}
            >
              Déclarer un sinistre
            </ClButton>
            <ClButton className="w-[250px]" disabled title={UNAVAILABLE_HINT}>
              Suivre mes demandes
            </ClButton>
          </div>
        </article>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:hidden">
        <ClButton
          clVariant="secondary"
          fullWidth
          disabled
          title={UNAVAILABLE_HINT}
          aria-label={`Mes documents — ${UNAVAILABLE_HINT}`}
        >
          Mes documents
        </ClButton>
        <ClButton
          clVariant="secondary"
          fullWidth
          disabled
          title={UNAVAILABLE_HINT}
          aria-label={`Mes sinistres — ${UNAVAILABLE_HINT}`}
        >
          Mes sinistres
        </ClButton>
      </div>
    </section>
  )
}
```

### `src/components/courtilien-client/fixtures.ts`

```
/** Visual demo fixtures only — not Airtable / not production identity. */
export type DemoContract = {
  id: string
  title: string
  reference: string
  referenceShort: string
  echeance: string
  status: "Actif"
  icon: "home" | "auto"
}

export type DemoPriorityAction = {
  badge: string
  title: string
  titleMobile: string
  description: string
  cta: string
}

export const DEMO_BANNER = "Démonstration • données fictives"

export const DEMO_CLIENT = {
  firstName: "Camille",
  greeting: "Bonjour Camille,",
  eyebrow: "Mon espace client",
  eyebrowMobile: "MON ESPACE CLIENT",
  subtitle: "Retrouvez vos contrats, documents et demandes au même endroit.",
  subtitleMobile: "Vos démarches, au même endroit.",
} as const

export const DEMO_PRIORITY: DemoPriorityAction = {
  badge: "Pièce manquante",
  title: "Complétez votre dossier de souscription",
  titleMobile: "Complétez votre dossier",
  description: "Une pièce justificative reste à transmettre.",
  cta: "Déposer ma pièce",
}

export const DEMO_CONTRACTS: Array<DemoContract> = [
  {
    id: "hab-2026-001",
    title: "Assurance habitation",
    reference: "Contrat HAB-2026-001",
    referenceShort: "HAB-2026-001",
    echeance: "Échéance : 12 mars 2027",
    status: "Actif",
    icon: "home",
  },
  {
    id: "auto-2026-002",
    title: "Assurance automobile",
    reference: "Contrat AUTO-2026-002",
    referenceShort: "AUTO-2026-002",
    echeance: "Échéance : 18 juin 2027",
    status: "Actif",
    icon: "auto",
  },
]

export const UNAVAILABLE_HINT =
  "Disponible dans une prochaine version"
```

### `src/components/courtilien-client/icons.tsx`

```
/** Exact Figma SVG paths (downloaded assets inlined as React). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="44.4"
      height="20.88"
      viewBox="0 0 44.4 20.88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M17.88 3L10.44 3C8.46679 3 6.5744 3.78385 5.17913 5.17913C3.78385 6.5744 3 8.46679 3 10.44C3 12.4132 3.78385 14.3056 5.17913 15.7009C6.5744 17.0961 8.46679 17.88 10.44 17.88H21.48C23.4532 17.88 25.3456 17.0961 26.7409 15.7009C28.1361 14.3056 28.92 12.4132 28.92 10.44"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cl-navy"
        stroke="currentColor"
      />
      <path
        className="text-cl-teal"
        d="M26.52 17.88H33.96C35.9332 17.88 37.8256 17.0961 39.2209 15.7009C40.6161 14.3056 41.4 12.4132 41.4 10.44C41.4 8.46679 40.6161 6.5744 39.2209 5.17913C37.8256 3.78386 35.9332 3 33.96 3L22.92 3C20.9468 3 19.0544 3.78386 17.6591 5.17913C16.2639 6.5744 15.48 8.46679 15.48 10.44"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  )
}

export function IconHome({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3 10.5L12 3L21 10.5V21H15V14H9V21H3V10.5Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  )
}

export function IconAuto({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 11L6.5 6H17.5L19 11M5 18V20M19 18V20M7 14H9M15 14H17M3 11H21V18H3V11Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  )
}

export function IconCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 12L10 17L20 7"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  )
}

export function IconAlert({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
      <path
        d="M12 7V12M12 16H12.01"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  )
}
```

### `src/components/courtilien-client/priority-action.tsx`

```
import { ClButton } from './cl-button.tsx'
import { StatusPill } from './status-pill.tsx'
import { DEMO_PRIORITY, UNAVAILABLE_HINT } from './fixtures.ts'

export function PriorityAction() {
  return (
    <section
      aria-labelledby="priority-heading"
      className="rounded-lg bg-cl-alert-bg px-4 py-4 sm:px-6 sm:py-5 lg:flex lg:items-center lg:justify-between lg:gap-8"
    >
      <div className="min-w-0 flex-1">
        <StatusPill
          label={DEMO_PRIORITY.badge}
          kind="attention"
          className="mb-3 w-auto justify-start bg-transparent px-0 sm:mb-4 lg:bg-cl-alert-bg lg:px-2"
          showIcon
        />
        <h2
          id="priority-heading"
          className="text-xl font-semibold text-cl-navy sm:text-2xl"
        >
          <span className="lg:hidden">{DEMO_PRIORITY.titleMobile}</span>
          <span className="hidden lg:inline">{DEMO_PRIORITY.title}</span>
        </h2>
        <p className="mt-1 hidden text-base text-cl-secondary lg:block">
          {DEMO_PRIORITY.description}
        </p>
      </div>
      <ClButton
        className="mt-4 w-full max-w-none sm:max-w-[318px] lg:mt-0 lg:w-[270px]"
        disabled
        title={UNAVAILABLE_HINT}
        aria-label={`${DEMO_PRIORITY.cta} — ${UNAVAILABLE_HINT}`}
      >
        {DEMO_PRIORITY.cta}
      </ClButton>
    </section>
  )
}
```

### `src/components/courtilien-client/sign-out-button.tsx`

```
import { useTransition } from 'react'
import { redirect } from '@tanstack/react-router'
import { createServerFn, useServerFn } from '@tanstack/react-start'
import { auth } from '@softr/sdk/server'
import { ClButton } from './cl-button.tsx'

const signOut = createServerFn({ method: 'POST' }).handler(async () => {
  await auth.signOut()
  throw redirect({ to: '/login', search: { signedOut: true } })
})

export function SignOutButton() {
  const submit = useServerFn(signOut)
  const [pending, startSignOut] = useTransition()

  return (
    <ClButton
      clVariant="secondary"
      className="w-[125px] px-3 text-sm lg:hidden"
      disabled={pending}
      onClick={() => {
        startSignOut(async () => {
          await submit()
        })
      }}
    >
      {pending ? '…' : 'Déconnexion'}
    </ClButton>
  )
}
```

### `src/components/courtilien-client/status-pill.tsx`

```
import { cn } from '#/lib/utils.ts'
import { IconAlert, IconCheck } from './icons.tsx'

type StatusKind = 'attention' | 'success'

export function StatusPill({
  label,
  kind,
  className,
  showIcon = true,
}: {
  label: string
  kind: StatusKind
  className?: string
  showIcon?: boolean
}) {
  return (
    <span
      className={cn(
        'inline-flex h-9 items-center justify-center gap-2 rounded-lg px-2 text-base font-semibold',
        kind === 'attention' && 'bg-cl-alert-bg text-cl-orange',
        kind === 'success' && 'bg-cl-success-bg text-cl-success',
        className,
      )}
    >
      {showIcon && kind === 'attention' ? (
        <IconAlert className="size-5 text-cl-orange" />
      ) : null}
      {showIcon && kind === 'success' ? (
        <IconCheck className="size-5 text-cl-success" />
      ) : null}
      {label}
    </span>
  )
}
```

### `src/lib/app.ts`

```
/**
 * The signed-in home: the brand and Accueil nav link here.
 * Keep it equal to auth.guard.alreadyAuthenticated in softr.json.
 */
export const APP_HOME = '/'

export const APP_NAME = 'CourtiLien'
export { LayersIcon as AppMark } from 'lucide-react'
```

### `src/routes/_app.tsx`

```
import { createFileRoute } from '@tanstack/react-router'
import { definePage, guardRoute, pageHead } from '@softr/sdk'
import {
  ClientFooter,
  ClientHeader,
} from '#/components/courtilien-client/client-header.tsx'
import {
  NavigationProgress,
  PageOutlet,
} from '#/components/kit/navigation-progress.tsx'

const pageSettings = definePage({
  visibility: { userGroupTypes: ['LOGGED_IN_USERS'] },
})

export const Route = createFileRoute('/_app')({
  beforeLoad: guardRoute(pageSettings),
  head: pageHead(pageSettings),
  component: AppLayout,
})

function AppLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-cl-bg text-cl-navy">
      <NavigationProgress />
      <ClientHeader />
      <main className="flex flex-1 flex-col">
        <PageOutlet />
      </main>
      <ClientFooter />
    </div>
  )
}
```

### `src/routes/_app/index.tsx`

```
import { createFileRoute } from '@tanstack/react-router'
import { definePage, guardRoute, pageHead } from '@softr/sdk'
import { ClientHome } from '#/components/courtilien-client/client-home.tsx'

const pageSettings = definePage({
  visibility: { userGroupTypes: ['LOGGED_IN_USERS'] },
  title: 'Espace client',
})

export const Route = createFileRoute('/_app/')({
  beforeLoad: guardRoute(pageSettings),
  head: pageHead(pageSettings),
  component: Home,
})

function Home() {
  return <ClientHome />
}
```


### `src/styles.css` — sections ajoutées (extrait)

Tokens `:root` `--cl-*` + remap `--background`/`--primary`/`--border`/`--radius` ; `@theme inline` `--color-cl-*`. Fichier complet conservé dans Softr (thème shadcn + ajouts CourtiLien). Diff ciblé uniquement — pas de réécriture totale du kit.

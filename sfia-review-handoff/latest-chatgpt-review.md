# COURTILIEN-03B-CLIENT-UI-FINAL — Review pack Full

**Cycle :** COURTILIEN-03B-CLIENT-UI-FINAL — Finalisation UI démo parcours client Softr
**Type :** 8 — Delivery / implémentation · **Profil :** Standard · **Typologie :** EVOL
**CKC cycle 8 :** Delivery / Léger* / P2 (carte synthétique — non norme doctrinale)
**Date rapport :** 2026-11-20 18:36:55 CET (Europe/Paris)
**Verdict review pack :** `READY WITH RESERVES`
**Claim autorisé :** `UI DEMO JOURNEYS IMPLEMENTED` (technique)
**Fidélité Figma runtime pages client :** `VISUAL NOT PROVEN` (0 end-user ; captures signed-out = login)
**Accès client :** `NOT READY FOR CLIENT ACCESS`

---

## 1. Local Git Truth Check

| Contrôle | Valeur |
|----------|--------|
| Repository | `mcleland147/sfia-workspace` |
| Branche de travail | `project/sfia-task-manager-cycle-4-ux-ui` |
| HEAD | `139f45fd019aa0561bfb5c6b7a7bd1c748f570b4` |
| origin/main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Staged | vide |
| Diff projet tracké | aucun |
| Untracked hors périmètre | `.cursor/…`, `.tmp-sfia-review/…` |
| Tip handoff début cycle (local) | `44cf93ee` COURTILIEN-03 (stale vs remote) |
| Tip handoff remote fetch | `93ee58ee` Ensemble 07 visual iteration |
| Template v2.6 sur main | accessible (`origin/main:prompts/templates/sfia-cycle-execution-template.md`) |
| Anomalie bloquante | aucune (untracked hors projet documentés) |

---

## 2. Sources

| Source | Statut |
|--------|--------|
| Template / routing / OM / guardrails (main) | LU |
| Handoff COURTILIEN-03 `44cf93ee` / tip remote `93ee58ee` | LU |
| Figma `2IpouPT5Ks2H9q9lobZFZm` session `624ff175-…` | LU |
| Desktop `6:162` + Mobile `18:297` screenshots Figma | LU |
| Architecture V0.7.1 / Liora 2.4.1 | **NON TROUVÉES localement** (réserve documentaire) |
| Softr app `7242211b-…` read/write/check/screenshot | EXÉCUTÉ |
| App historique `e8491c5f-…` | LU (non écrite) |

---

## 3. Application cible

| Champ | Valeur |
|-------|--------|
| ID | `7242211b-049d-4673-9262-19dd95ee9178` |
| Nom | CourtiLien — Espace client |
| Type | APP |
| Workspace | `f7d92030-1494-4050-b64b-afa7af837734` |
| Studio | https://studio.softr.io/applications/7242211b-049d-4673-9262-19dd95ee9178 |
| Historique protégée | `e8491c5f-9938-4731-b38f-f4c97d2a553e` — `updated` inchangé `2026-11-19T15:13:21.000Z` |
| Checkpoints Softr (écritures 03B) | routes pages ; puis fixtures/header/demarches (`46c0246d…`) ; contract-card/home (`f9e47017…`) |

---

## 4. État Softr avant → après (garde-fous)

| Contrôle | Après cycle 03B | Preuve |
|----------|-----------------|--------|
| published | null / publish_status **IDLE** | PASS |
| signup | DISABLED | PASS |
| login | enabled EMAIL_CODE | PASS |
| user connection | null (`source: null`) | PASS |
| users | **0** | PASS |
| restrictions | `[]` | PASS |
| datasources | **7** (UTILISATEUR, PERSONNE, CONTRAT, COMPAGNIE, DOCUMENT, SINISTRE, RENDEZ_VOUS) base `appjebCNHtEaCAzxy` | PASS |
| Auth / users / restrictions mutés | non | PASS |
| Airtable écriture / lecture métier | non (search `database\|getRecord\|Airtable` → 0) | PASS |
| App historique écrite | non | PASS |
| Publication | non | PASS |
| FinOps Business-only | aucune dépendance ajoutée | PASS |

---

## 5. Contrat visuel Figma (obligatoire — avant / pour finalisation)

### Dimensions et grille
- Desktop Accueil `6:162` : **1440 × 1110**, max-width contenu aligné 1440, paddings lg ≈ 56px (`lg:px-14`).
- Mobile Espace client `18:297` : **390 × 844**.
- Nouvelles pages (dossiers / documents / demandes / profil) : **pas de frames Figma dédiées** — extension du shell Accueil (même tokens, header, bannière démo).

### Palette et typographie
| Token | Valeur | CSS app |
|-------|--------|---------|
| Navy | `#1B2A41` | `--cl-navy` |
| Teal | `#0B6E6E` | `--cl-teal` / `--primary` |
| Orange | `#B54708` | `--cl-orange` |
| BG | `#F5F7FA` | `--cl-bg` / `--background` |
| Success | `#176B40` | `--cl-success` |
| Secondary | `#667085` | `--cl-secondary` |
| Border | `#D7DEE6` | `--cl-border` |
| AlertBg | `#FFF1DF` | `--cl-alert-bg` |
| SuccessBg | `#E5F3E9` | `--cl-success-bg` |
| Radius | 8px | `--radius: 0.5rem` |
| Font | Inter | Inter Variable |

### Espacement et composants réutilisés
- Header sticky blanc h 76 mobile / 100 desktop ; BrandLogo ; ClButton ; StatusPill ; ContractCard ; PriorityAction ; DemoBanner / ClientPageShell.
- Cartes : border `cl-border`, radius lg, titres `text-xl font-semibold text-cl-navy`.

### Navigation (contrat 03B)
| Label Figma | Route démo | Active state |
|-------------|------------|--------------|
| Accueil | `/` | teal semibold |
| Mes contrats | `/dossiers` | idem |
| Mes documents | `/documents` | idem |
| Mes sinistres | `/demandes` | idem |
| Mon profil | `/profil` | CTA secondary desktop + item mobile |

### Cartes contrats et statuts
- Fixtures HAB/AUTO ; statut Actif → success ; panneau détail read-only + champs compagnie/résumé ; CTA métier « Actions contrat » **disabled**.

### Actions principales
- Liens navigation réels (TanStack `Link`) vers parcours démo.
- Déclarer sinistre / Nouvelle demande / Télécharger / Modifier profil / Déposer pièce : **disabled** + `UNAVAILABLE_HINT` (pas de faux boutons fonctionnels).

### États vides / désactivés / erreurs
- Empty dossiers : message si liste vide.
- Documents Indisponible : StatusPill attention + download disabled.
- Erreurs runtime métier : hors périmètre (pas d’API).

### Responsive
- Desktop : nav horizontale + footer navy.
- Mobile : nav scroll sous header ; boutons démarches 2 colonnes.

### Différences Figma / application existante
| Point | Figma | App 03B |
|-------|-------|---------|
| Nav contrats/docs/sinistres | ancres one-page | **routes dédiées** (parcours manquants) |
| Frames pages secondaires | absentes | shell + listes fixtures |
| Login / identité | non traité | LOGGED_IN_USERS inchangé ; 0 user |
| Données | maquettes | fixtures locales uniquement |

### Changements proposés (réalisés) et composants réutilisés
- Ajout routes + pages ; wire header/home/demarches ; extension fixtures ; ContractDetailPanel enrichi.
- Réutilisation stricte de `courtilien-client/**` (pas de 2e design system).

---

## 6. Inventaire pages / composants

### Routes client (LOGGED_IN_USERS)
| Path | File | Title |
|------|------|-------|
| `/` | `src/routes/_app/index.tsx` | Espace client |
| `/dossiers` | `src/routes/_app/dossiers.tsx` | Mes dossiers |
| `/documents` | `src/routes/_app/documents.tsx` | Mes documents |
| `/demandes` | `src/routes/_app/demandes.tsx` | Mes demandes |
| `/profil` | `src/routes/_app/profil.tsx` | Mon profil |

### Composants touchés / créés 03B
- Créés : `page-shell.tsx`, `dossiers-page.tsx`, `documents-page.tsx`, `demandes-page.tsx`, `profil-page.tsx`, routes ci-dessus.
- Modifiés : `fixtures.ts`, `client-header.tsx`, `client-home.tsx`, `demarches.tsx`, `contract-card.tsx`.
- Non modifiés (interdits) : auth, Airtable schema, historique, courtier/direction, Drive/n8n/OpenAI, fichiers générés.

---

## 7. Écarts fonctionnels corrigés

| Avant 03 | Après 03B |
|----------|-----------|
| Nav ancres one-page | Nav `Link` multi-pages |
| Pas de Mes dossiers/documents/demandes/profil | Pages fixtures + shell |
| CTA documents/sinistres morts ou disabled | Liens vers `/documents` et `/demandes` ; déclaration toujours disabled |
| Profil CTA non routé | `/profil` info fictive, mutations disabled |
| Fixtures contrats seules | + DEMO_DOCUMENTS / DEMO_DEMANDES / email téléphone adresse |

---

## 8. Validations techniques

| Contrôle | Résultat |
|----------|----------|
| `application_check` post-écriture | **PASS** (`ok: true`, `issues: []`) |
| Routes listées `application_page_list` | PASS (5 pages client + auth) |
| Guards LOGGED_IN_USERS | PASS (inchangés) |
| Search fixtures usage | PASS (`DEMO_CONTRACTS` dans home + dossiers + fixtures) |
| Search API métier | PASS (0 match database/getRecord/Airtable) |

---

## 9. Validations visuelles runtime

| Capture | Résultat |
|---------|----------|
| Figma Desktop `6:162` | Obttenue (1440×1110) — référence Accueil |
| Figma Mobile `18:297` | Obttenue (390×844) — référence |
| Softr Desktop `/` signed-out | Login « Welcome back » / Continue — **pas l’UI Figma home** |
| Softr Mobile `/` signed-out | Idem login |
| Softr `/dossiers` screenshot | **ÉCHEC technique** (`webp codec not registered`) |
| Comparaison pixel Figma ↔ runtime authentifié | **VISUAL NOT PROVEN** (création user interdite ce cycle) |

Point-par-point (attendu code vs Figma, non prouvé runtime) :
- Tokens CSS alignés Figma — **code PASS**.
- Header labels + active teal — **code PASS**.
- Cartes / badges / disabled métier — **code PASS**.
- Runtime authentifié home + nouvelles pages — **NOT PROVEN**.

---

## 10. Fake / Real Qualification

| Dimension | Qualification | Preuve |
|-----------|---------------|--------|
| UI listes dossiers/docs/demandes/profil | **FAKE** (fixtures) | `fixtures.ts` + pages |
| Datasources Airtable enregistrées | **REAL** (présentes, non consommées UI) | 7 DS listées |
| Session client / identité | **REAL gap** | users=0, user connection null |
| Restrictions serveur | **REAL gap** | `[]` |
| Téléchargement / dépôt / sinistre | **FAKE disabled** | boutons disabled + hints |
| Claim READY FOR CLIENT ACCESS | **INTERDIT** | gates sécurité non levées |

**Claims interdits non utilisés :** READY FOR CLIENT ACCESS, SECURE END-TO-END, MVP FUNCTIONAL COMPLETE, PRODUCTION READY.

---

## 11. Écarts / réserves / dettes

1. **VISUAL NOT PROVEN** runtime authentifié (0 user ; GO Morris requis pour identité de test non production).
2. Screenshot route `/dossiers` : erreur codec webp Softr MCP.
3. V0.7.1 / Liora 2.4.1 non accessibles dans le repo local.
4. Pas de frames Figma pour pages secondaires — extension shell documentée.
5. Restrictions toujours vides — prochaine capacité.
6. Trial Business → Free 26/11/2026 — aucune feature trial-only ajoutée.
7. Tip handoff remote a avancé entre cycles (overwrite mono-file attendu).

---

## 12. Décisions Morris restantes

| Décision | Statut |
|----------|--------|
| Identité client + user connection + end-user de test | **GO Morris requis** |
| Restrictions serveur cloisonnement | **GO Morris requis** |
| Publication / accès client réel | **INTERDIT** sans GO |
| Push / PR / merge branche projet | **INTERDIT** sans GO |

**Prochaine capacité à débloquer :** identité client + restrictions serveur.

---

## 13. Verdict

**`READY WITH RESERVES`**

Justification : parcours UI démo client implémentés, `application_check` PASS, garde-fous auth/Airtable/historique/publication tenus, handoff Full prévu ; réserves non bloquantes = fidélité visuelle runtime non prouvée + captures authentifiées absentes + sources archi Liora absentes localement.

Toujours : **`NOT READY FOR CLIENT ACCESS`**.

---

## 14. Annexe — contenu complet des fichiers créés / modifiés (03B)

### `src/routes/_app/dossiers.tsx`

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { definePage, guardRoute, pageHead } from '@softr/sdk'
import { DossiersPage } from '#/components/courtilien-client/dossiers-page.tsx'

const pageSettings = definePage({
  visibility: { userGroupTypes: ['LOGGED_IN_USERS'] },
  title: 'Mes dossiers',
})

export const Route = createFileRoute('/_app/dossiers')({
  beforeLoad: guardRoute(pageSettings),
  head: pageHead(pageSettings),
  component: DossiersPage,
})
```

### `src/routes/_app/documents.tsx`

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { definePage, guardRoute, pageHead } from '@softr/sdk'
import { DocumentsPage } from '#/components/courtilien-client/documents-page.tsx'

const pageSettings = definePage({
  visibility: { userGroupTypes: ['LOGGED_IN_USERS'] },
  title: 'Mes documents',
})

export const Route = createFileRoute('/_app/documents')({
  beforeLoad: guardRoute(pageSettings),
  head: pageHead(pageSettings),
  component: DocumentsPage,
})
```

### `src/routes/_app/demandes.tsx`

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { definePage, guardRoute, pageHead } from '@softr/sdk'
import { DemandesPage } from '#/components/courtilien-client/demandes-page.tsx'

const pageSettings = definePage({
  visibility: { userGroupTypes: ['LOGGED_IN_USERS'] },
  title: 'Mes demandes',
})

export const Route = createFileRoute('/_app/demandes')({
  beforeLoad: guardRoute(pageSettings),
  head: pageHead(pageSettings),
  component: DemandesPage,
})
```

### `src/routes/_app/profil.tsx`

```tsx
import { createFileRoute } from '@tanstack/react-router'
import { definePage, guardRoute, pageHead } from '@softr/sdk'
import { ProfilPage } from '#/components/courtilien-client/profil-page.tsx'

const pageSettings = definePage({
  visibility: { userGroupTypes: ['LOGGED_IN_USERS'] },
  title: 'Mon profil',
})

export const Route = createFileRoute('/_app/profil')({
  beforeLoad: guardRoute(pageSettings),
  head: pageHead(pageSettings),
  component: ProfilPage,
})
```

### `src/components/courtilien-client/page-shell.tsx`

```tsx
import type { ReactNode } from 'react'
import { DEMO_BANNER } from './fixtures.ts'

export function DemoBanner() {
  return (
    <div
      className="mb-5 rounded-lg border border-cl-border bg-white px-3 py-2 text-center text-xs text-cl-secondary sm:text-sm"
      role="note"
    >
      {DEMO_BANNER} — aucune donnée métier réelle
    </div>
  )
}

export function ClientPageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string
  title: string
  subtitle: string
  children: ReactNode
}) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 pb-10 pt-6 sm:px-6 lg:px-14 lg:pb-12 lg:pt-8">
      <DemoBanner />
      <p className="text-sm text-cl-teal">{eyebrow}</p>
      <h1 className="mt-2 text-[32px] font-bold leading-10 text-cl-navy lg:text-[40px] lg:leading-none">
        {title}
      </h1>
      <p className="mt-2 text-base text-cl-secondary lg:mt-3">{subtitle}</p>
      <div className="mt-6 lg:mt-8">{children}</div>
      <p className="mt-8 border-t border-cl-border pt-4 text-xs text-cl-secondary lg:hidden">
        {DEMO_BANNER}
      </p>
    </div>
  )
}
```

### `src/components/courtilien-client/fixtures.ts`

```ts
/** Visual demo fixtures only — not Airtable / not production identity. */
export type DemoContract = {
  id: string
  title: string
  reference: string
  referenceShort: string
  echeance: string
  status: 'Actif' | 'En cours'
  icon: 'home' | 'auto'
  compagnie: string
  resume: string
}

export type DemoDocument = {
  id: string
  title: string
  type: string
  contratRef: string
  date: string
  status: 'Disponible' | 'Indisponible'
}

export type DemoDemande = {
  id: string
  title: string
  reference: string
  type: 'Sinistre' | 'Document' | 'Demande'
  status: 'En cours' | 'Clos' | 'En attente'
  updated: string
  detail: string
}

export type DemoPriorityAction = {
  badge: string
  title: string
  titleMobile: string
  description: string
  cta: string
}

export const DEMO_BANNER = 'Démonstration • données fictives'

export const DEMO_CLIENT = {
  firstName: 'Camille',
  greeting: 'Bonjour Camille,',
  eyebrow: 'Mon espace client',
  eyebrowMobile: 'MON ESPACE CLIENT',
  subtitle: 'Retrouvez vos contrats, documents et demandes au même endroit.',
  subtitleMobile: 'Vos démarches, au même endroit.',
  email: 'camille.demo@example.com',
  phone: '06 00 00 00 00',
  adresse: '12 rue de la Démonstration, 75000 Paris',
} as const

export const DEMO_PRIORITY: DemoPriorityAction = {
  badge: 'Pièce manquante',
  title: 'Complétez votre dossier de souscription',
  titleMobile: 'Complétez votre dossier',
  description: 'Une pièce justificative reste à transmettre.',
  cta: 'Déposer ma pièce',
}

export const DEMO_CONTRACTS: Array<DemoContract> = [
  {
    id: 'hab-2026-001',
    title: 'Assurance habitation',
    reference: 'Contrat HAB-2026-001',
    referenceShort: 'HAB-2026-001',
    echeance: 'Échéance : 12 mars 2027',
    status: 'Actif',
    icon: 'home',
    compagnie: 'Compagnie Démo Habitat',
    resume: 'Multirisque habitation — formule confort (données fictives).',
  },
  {
    id: 'auto-2026-002',
    title: 'Assurance automobile',
    reference: 'Contrat AUTO-2026-002',
    referenceShort: 'AUTO-2026-002',
    echeance: 'Échéance : 18 juin 2027',
    status: 'Actif',
    icon: 'auto',
    compagnie: 'Compagnie Démo Auto',
    resume: 'Assurance auto tous risques — véhicule de démonstration.',
  },
]

export const DEMO_DOCUMENTS: Array<DemoDocument> = [
  {
    id: 'doc-att-hab',
    title: 'Attestation habitation',
    type: 'Attestation',
    contratRef: 'HAB-2026-001',
    date: '12 mars 2026',
    status: 'Disponible',
  },
  {
    id: 'doc-att-auto',
    title: 'Attestation automobile',
    type: 'Attestation',
    contratRef: 'AUTO-2026-002',
    date: '18 juin 2026',
    status: 'Disponible',
  },
  {
    id: 'doc-cg',
    title: 'Conditions générales',
    type: 'Contrat',
    contratRef: 'HAB-2026-001',
    date: '01 janv. 2026',
    status: 'Indisponible',
  },
]

export const DEMO_DEMANDES: Array<DemoDemande> = [
  {
    id: 'dem-001',
    title: 'Suivi déclaration sinistre auto',
    reference: 'SIN-DEMO-001',
    type: 'Sinistre',
    status: 'En cours',
    updated: '10 nov. 2026',
    detail: 'Déclaration fictive — aucun sinistre réel n’est traité.',
  },
  {
    id: 'dem-002',
    title: 'Demande d’attestation',
    reference: 'DEM-DEMO-002',
    type: 'Document',
    status: 'Clos',
    updated: '02 nov. 2026',
    detail: 'Historique de démonstration uniquement.',
  },
  {
    id: 'dem-003',
    title: 'Pièce justificative en attente',
    reference: 'DEM-DEMO-003',
    type: 'Demande',
    status: 'En attente',
    updated: '18 nov. 2026',
    detail: 'Correspond à l’action prioritaire de l’accueil (simulation).',
  },
]

export const UNAVAILABLE_HINT = 'Disponible dans une prochaine version'
```

### `src/components/courtilien-client/client-header.tsx`

```tsx
import { Link, useRouterState } from '@tanstack/react-router'
import { BrandLogo } from './brand-logo.tsx'
import { ClButton } from './cl-button.tsx'
import { SignOutButton } from './sign-out-button.tsx'
import { cn } from '#/lib/utils.ts'

const NAV = [
  { id: 'accueil', label: 'Accueil', to: '/' as const },
  { id: 'dossiers', label: 'Mes contrats', to: '/dossiers' as const },
  { id: 'documents', label: 'Mes documents', to: '/documents' as const },
  { id: 'demandes', label: 'Mes sinistres', to: '/demandes' as const },
] as const

function activeId(pathname: string): string {
  if (pathname.startsWith('/dossiers')) return 'dossiers'
  if (pathname.startsWith('/documents')) return 'documents'
  if (pathname.startsWith('/demandes')) return 'demandes'
  if (pathname.startsWith('/profil')) return 'profil'
  return 'accueil'
}

export function ClientHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const active = activeId(pathname)

  return (
    <header className="sticky top-0 z-40 border-b border-cl-border bg-white">
      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between gap-3 px-3 sm:px-6 lg:h-[100px] lg:px-14">
        <BrandLogo compact className="min-w-0 shrink" />

        <nav
          className="hidden items-center gap-8 xl:gap-10 lg:flex"
          aria-label="Navigation principale"
        >
          {NAV.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={cn(
                'rounded-sm text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cl-teal/40',
                active === item.id
                  ? 'font-semibold text-cl-teal'
                  : 'font-normal text-cl-navy hover:text-cl-teal',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ClButton
            clVariant="secondary"
            className="hidden w-[244px] lg:inline-flex"
            nativeButton={false}
            render={<Link to="/profil" />}
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
          <Link
            key={item.id}
            to={item.to}
            className={cn(
              'shrink-0 rounded-lg px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cl-teal/40',
              active === item.id
                ? 'bg-cl-teal/10 font-semibold text-cl-teal'
                : 'text-cl-navy',
            )}
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/profil"
          className={cn(
            'shrink-0 rounded-lg px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cl-teal/40',
            active === 'profil'
              ? 'bg-cl-teal/10 font-semibold text-cl-teal'
              : 'text-cl-navy',
          )}
        >
          Mon profil
        </Link>
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

```tsx
import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import type { DemoContract } from './fixtures.ts'
import {
  DEMO_BANNER,
  DEMO_CLIENT,
  DEMO_CONTRACTS,
} from './fixtures.ts'
import { PriorityAction } from './priority-action.tsx'
import { ContractCard, ContractDetailPanel } from './contract-card.tsx'
import { DemarchesSection } from './demarches.tsx'

export function ClientHome() {
  const [selected, setSelected] = useState<DemoContract | null>(null)

  return (
    <div
      id="accueil"
      className="mx-auto w-full max-w-[1440px] px-5 pb-10 pt-6 sm:px-6 lg:px-14 lg:pb-12 lg:pt-8"
    >
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
          <Link
            to="/dossiers"
            className="hidden text-base font-semibold text-cl-teal hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cl-teal/40 lg:inline"
          >
            Voir tous mes contrats
          </Link>
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

```tsx
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
  const statusKind = contract.status === 'Actif' ? 'success' : 'attention'

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
            <h3 className="text-xl font-semibold text-cl-navy">
              {contract.title}
            </h3>
            <p className="mt-1 text-xs text-cl-secondary lg:text-sm">
              <span className="lg:hidden">{contract.referenceShort}</span>
              <span className="hidden lg:inline">{contract.reference}</span>
            </p>
          </div>
        </div>
        <StatusPill
          label={contract.status}
          kind={statusKind}
          className="hidden w-auto shrink-0 lg:inline-flex"
        />
        <span
          className={cn(
            'shrink-0 text-[13px] font-semibold lg:hidden',
            statusKind === 'success' ? 'text-cl-success' : 'text-cl-orange',
          )}
        >
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
        <p className="text-sm font-semibold text-cl-teal">
          Aperçu démonstration — dossier fictif
        </p>
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
          <div>
            <dt className="font-semibold text-cl-navy">Compagnie</dt>
            <dd>{contract.compagnie}</dd>
          </div>
          <div>
            <dt className="font-semibold text-cl-navy">Résumé</dt>
            <dd>{contract.resume}</dd>
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

```tsx
import { Link } from '@tanstack/react-router'
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
            nativeButton={false}
            render={<Link to="/documents" />}
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
            <ClButton
              className="w-[250px]"
              nativeButton={false}
              render={<Link to="/demandes" />}
            >
              Suivre mes demandes
            </ClButton>
          </div>
        </article>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:hidden">
        <ClButton
          clVariant="secondary"
          fullWidth
          nativeButton={false}
          render={<Link to="/documents" />}
        >
          Mes documents
        </ClButton>
        <ClButton
          clVariant="secondary"
          fullWidth
          nativeButton={false}
          render={<Link to="/demandes" />}
        >
          Mes sinistres
        </ClButton>
      </div>
    </section>
  )
}
```

### `src/components/courtilien-client/dossiers-page.tsx`

```tsx
import { useState } from 'react'
import type { DemoContract } from './fixtures.ts'
import { DEMO_CONTRACTS } from './fixtures.ts'
import { ClientPageShell } from './page-shell.tsx'
import { ContractCard, ContractDetailPanel } from './contract-card.tsx'

export function DossiersPage() {
  const [selected, setSelected] = useState<DemoContract | null>(null)

  return (
    <ClientPageShell
      eyebrow="Mon espace client"
      title="Mes dossiers"
      subtitle="Consultez vos dossiers et contrats de démonstration. Aucune donnée Airtable n’est chargée."
    >
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
        {DEMO_CONTRACTS.map((contract) => (
          <ContractCard
            key={contract.id}
            contract={contract}
            onConsult={setSelected}
          />
        ))}
      </div>
      {DEMO_CONTRACTS.length === 0 ? (
        <p className="rounded-lg border border-cl-border bg-white p-6 text-cl-secondary">
          Aucun dossier de démonstration.
        </p>
      ) : null}
      {selected ? (
        <ContractDetailPanel
          contract={selected}
          onClose={() => setSelected(null)}
        />
      ) : null}
    </ClientPageShell>
  )
}
```

### `src/components/courtilien-client/documents-page.tsx`

```tsx
import { DEMO_DOCUMENTS, UNAVAILABLE_HINT } from './fixtures.ts'
import { ClientPageShell } from './page-shell.tsx'
import { StatusPill } from './status-pill.tsx'
import { ClButton } from './cl-button.tsx'

export function DocumentsPage() {
  return (
    <ClientPageShell
      eyebrow="Mon espace client"
      title="Mes documents"
      subtitle="Liste fictive d’attestations et pièces. Aucun lien Drive public ni téléchargement réel."
    >
      <ul className="space-y-3">
        {DEMO_DOCUMENTS.map((doc) => (
          <li
            key={doc.id}
            className="flex flex-col gap-3 rounded-lg border border-cl-border bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <p className="text-lg font-semibold text-cl-navy">{doc.title}</p>
              <p className="mt-1 text-sm text-cl-secondary">
                {doc.type} · {doc.contratRef} · {doc.date}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill
                label={doc.status}
                kind={doc.status === 'Disponible' ? 'success' : 'attention'}
                className="w-auto"
                showIcon={doc.status !== 'Disponible'}
              />
              <ClButton
                clVariant="secondary"
                className="min-w-[160px]"
                disabled
                title={
                  doc.status === 'Indisponible'
                    ? 'Document fictif indisponible'
                    : UNAVAILABLE_HINT
                }
              >
                Télécharger
              </ClButton>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-cl-secondary">
        Les boutons de téléchargement restent désactivés : aucun fichier réel
        n’est exposé dans cette démonstration.
      </p>
    </ClientPageShell>
  )
}
```

### `src/components/courtilien-client/demandes-page.tsx`

```tsx
import { DEMO_DEMANDES, UNAVAILABLE_HINT } from './fixtures.ts'
import { ClientPageShell } from './page-shell.tsx'
import { StatusPill } from './status-pill.tsx'
import { ClButton } from './cl-button.tsx'

export function DemandesPage() {
  return (
    <ClientPageShell
      eyebrow="Mon espace client"
      title="Mes demandes"
      subtitle="Historique et suivi simulés (sinistres / demandes). Aucune déclaration réelle n’est possible."
    >
      <div className="mb-4 flex flex-wrap gap-3">
        <ClButton disabled title={UNAVAILABLE_HINT}>
          Déclarer un sinistre
        </ClButton>
        <ClButton clVariant="secondary" disabled title={UNAVAILABLE_HINT}>
          Nouvelle demande
        </ClButton>
      </div>
      <ul className="space-y-3">
        {DEMO_DEMANDES.map((item) => (
          <li
            key={item.id}
            className="rounded-lg border border-cl-border bg-white p-4"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="text-lg font-semibold text-cl-navy">{item.title}</p>
                <p className="mt-1 text-sm text-cl-secondary">
                  {item.type} · {item.reference} · Maj. {item.updated}
                </p>
                <p className="mt-2 text-sm text-cl-navy">{item.detail}</p>
              </div>
              <StatusPill
                label={item.status}
                kind={item.status === 'Clos' ? 'success' : 'attention'}
                className="w-auto shrink-0"
              />
            </div>
          </li>
        ))}
      </ul>
    </ClientPageShell>
  )
}
```

### `src/components/courtilien-client/profil-page.tsx`

```tsx
import { DEMO_CLIENT, UNAVAILABLE_HINT } from './fixtures.ts'
import { ClientPageShell } from './page-shell.tsx'
import { ClButton } from './cl-button.tsx'

export function ProfilPage() {
  return (
    <ClientPageShell
      eyebrow="Mon espace client"
      title="Mon profil"
      subtitle="Informations fictives de démonstration. Aucune mutation d’identité Softr ou Airtable."
    >
      <div className="max-w-xl space-y-4 rounded-lg border border-cl-border bg-white p-6">
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-semibold text-cl-navy">Nom</dt>
            <dd className="text-cl-secondary">Camille Démo</dd>
          </div>
          <div>
            <dt className="font-semibold text-cl-navy">E-mail</dt>
            <dd className="text-cl-secondary">{DEMO_CLIENT.email}</dd>
          </div>
          <div>
            <dt className="font-semibold text-cl-navy">Téléphone</dt>
            <dd className="text-cl-secondary">{DEMO_CLIENT.phone}</dd>
          </div>
          <div>
            <dt className="font-semibold text-cl-navy">Adresse</dt>
            <dd className="text-cl-secondary">{DEMO_CLIENT.adresse}</dd>
          </div>
        </dl>
        <p className="rounded-lg bg-cl-bg p-3 text-sm text-cl-secondary">
          Ce profil n’est pas lié à une session métier ni à UTILISATEUR /
          PERSONNE Airtable. L’édition et la synchronisation restent hors
          périmètre.
        </p>
        <div className="flex flex-wrap gap-3">
          <ClButton disabled title={UNAVAILABLE_HINT}>
            Modifier mon profil
          </ClButton>
          <ClButton clVariant="secondary" disabled title={UNAVAILABLE_HINT}>
            Changer mon mot de passe
          </ClButton>
        </div>
      </div>
    </ClientPageShell>
  )
}
```

---

## 15. Instruction ChatGPT (revue)

Avant revue : relire depuis Git branche `sfia/review-handoff` le fichier `sfia-review-handoff/latest-chatgpt-review.md`.
Vérifier cycle COURTILIEN-03B, fichiers annexés, preuves check/screenshots/non-régression, verdict `READY WITH RESERVES`, SHA/blob distant.
Distinguer : observations / recommandations / décisions Morris.

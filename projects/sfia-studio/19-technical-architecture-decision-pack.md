# SFIA Studio — Decision pack architecture technique

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `19-technical-architecture-decision-pack.md` |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Statut** | **VALIDÉ** — TA-DEC-01…18 |
| **Horodatage proposition** | 2026-07-19 01:32:00 CEST |
| **Horodatage validation** | 2026-07-19 02:01:04 CEST |
| **Base Git** | `origin/main` @ `2fbdd169481edcbd6fddcdc8f8211e68a7743689` |
| **Document lié** | `18-technical-architecture.md` |
| **Amont** | `17-delivery-technical-foundation-arbitration.md` (Cas B) |

> Distingue **recommandations Cursor** (historiques), **options**, et **décisions Morris**.  
> Validation Morris : **2026-07-19 02:01:04 CEST** — TA-DEC-01…18 **VALIDÉES** selon recommandation consolidée.

---

## 1. Matrice ADR

| ID | Décision | Options | Recommandation Cursor | Décision Morris |
|----|----------|---------|----------------------|-----------------|
| TA-DEC-01 | Stack / framework | (1) Next 15 App Router · (2) Vite+React · (3) HTML/CSS/JS · (4) autre écrite | **(1) Next 15 App Router + React 19 + TS** | **VALIDÉE** (reco consolidée) |
| TA-DEC-02 | Emplacement app | `projects/sfia-studio/app/` · autre chemin | `projects/sfia-studio/app/` | **VALIDÉE** (reco consolidée) |
| TA-DEC-03 | Package manager | npm · pnpm · yarn | **npm** + lockfile | **VALIDÉE** (reco consolidée) |
| TA-DEC-04 | Styling | CSS Modules + tokens · Tailwind 3 · Tailwind 4 · hybride | **CSS Modules + tokens Figma** | **VALIDÉE** (reco consolidée) |
| TA-DEC-05 | Routing | App Router files · React Router · static links | **App Router** 4 routes P0 | **VALIDÉE** (reco consolidée) |
| TA-DEC-06 | Routes P0 | chemins proposés §7 de `18` · variantes | `/synthese` `/nouvelle-demande` `/cycle-actif` `/decision` | **VALIDÉE** (reco consolidée) |
| TA-DEC-07 | Tests unit/composant | Vitest · Jest · aucun | **Vitest + Testing Library** | **VALIDÉE** (reco consolidée) |
| TA-DEC-08 | E2E / visuel | Playwright · Cypress · manuel seul | **Playwright** (smoke + screenshots) | **VALIDÉE** (reco consolidée) |
| TA-DEC-09 | API routes / Route Handlers P0 | Interdites · autorisées lecture · autorisées écriture | **Interdites** | **VALIDÉE** (reco consolidée) |
| TA-DEC-10 | Backend / auth / BDD P0 | Absents · partiels | **Absents** | **VALIDÉE** (reco consolidée) |
| TA-DEC-11 | Port local | 3020 · 3010 · 3000 · autre | **3020** | **VALIDÉE** (reco consolidée) |
| TA-DEC-12 | Arborescence | §6 de `18` · amendée | Accepter §6 | **VALIDÉE** (reco consolidée) |
| TA-DEC-13 | Fixtures | Modules TS locaux · JSON seuls · API mock serveur | **Modules TS** sous `fixtures/` | **VALIDÉE** (reco consolidée) |
| TA-DEC-14 | Actions Git depuis UI | Mock/disabled · réel | **Mock/disabled** | **VALIDÉE** (reco consolidée) |
| TA-DEC-15 | Déploiement P0 | Aucun · preview hébergée | **Aucun** | **VALIDÉE** (reco consolidée) |
| TA-DEC-16 | CI P0 | Aucune · scaffold workflow | **Aucune** (future documentée) | **VALIDÉE** (reco consolidée) |
| TA-DEC-17 | Couplage Runtime SFIA | Aucun · stub · réel | **Aucun** | **VALIDÉE** (reco consolidée) |
| TA-DEC-18 | Reprise delivery P0 | Suspendu · GO scaffold+impl | Reprise delivery après validation `18`/`19` | **VALIDÉE** — reprise delivery P0 autorisée, **non exécutée** |

---

## 2. Architecture consolidée (**VALIDÉE**)

```
Stack:     Next.js 15 App Router + React 19 + TypeScript strict
Path:      projects/sfia-studio/app/
Pkg:       npm + package-lock.json
Style:     CSS Modules + CSS custom properties (tokens Figma)
Routes:    /synthese | /nouvelle-demande | /cycle-actif | /decision
Tests:     Vitest + Testing Library + Playwright
API P0:    interdites
Backend:   absent
Port:      3020
Data:      fixtures locales déterministes
Git UI:    simulé / désactivé
Runtime:   non câblé
```

---

## 3. Alternatives stylage (sous TA-DEC-04)

| Variante | Pour | Contre |
|----------|------|--------|
| **A — CSS Modules + tokens** (reco) | Contrôle pixel-faithful ; peu de magie utilitaire | Moins d’alignement chantiers/interv360 |
| B — Tailwind 3 (chantiers) | Alignement Next+Tailwind repo | Dette classes vs géométrie Figma |
| C — Tailwind 4 (interv360) | Moderne | Moins de sœurs Next+TW4 ; migration tooling |

---

## 4. Décisions explicitement **hors** ce pack

- Clôture architecture fonctionnelle
- POC / MVP
- Backend, auth, BDD
- Intégration GitHub / Cursor / Runtime réels
- Déploiement / production
- Design system définitif hors Figma P0
- Responsive mobile/tablette
- Commit / push / PR / merge (GO séparés)

---

## 5. Décision Morris horodatée

| Champ | Valeur |
|-------|--------|
| Décideur | Morris |
| Horodatage | 2026-07-19 02:01:04 CEST |
| Objet | Validation architecture technique SFIA Studio |
| Périmètre | TA-DEC-01 à TA-DEC-18 selon recommandation consolidée §2 |
| Effet | Architecture **VALIDÉE** ; delivery P0 **autorisé**, **non exécuté** |
| Hors effet | Aucun scaffold ; aucun package.json ; aucun code ; aucun merge |

**Historique :** avant cette décision, toutes les TA-DEC étaient **OUVERTES** (handoff `3c439720b3aea73dafbd33c9e3d88a6acffa048b`).

---

## 6. Effets après validation

| Autorisé (architecture) | État actuel |
|-------------------------|-------------|
| Scaffold futur `projects/sfia-studio/app/` selon `18` §6 | **Non exécuté** |
| Implémentation 4 écrans P0 | **Non exécutée** |
| Versionnement docs 17/18/19 + PR | Cycle PR readiness (GO consommé) |

| Toujours interdit sans nouveau GO | |
|-----------------------------------|---|
| Backend, API routes, auth, BDD | |
| CI, déploiement, Runtime réel | |
| Écrans secondaires, POC, MVP | |
| Merge de la PR docs | |
| Exécution scaffold sans cycle delivery | |

---

## 7. Verdict

**TECHNICAL ARCHITECTURE VALIDATED — TA-DEC-01…18**

Delivery P0 **autorisé**, **non exécuté**. Aucun code dans ce pack.

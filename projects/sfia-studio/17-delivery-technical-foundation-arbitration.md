# SFIA Studio — Arbitrage fondation technique Delivery P0

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `17-delivery-technical-foundation-arbitration.md` |
| **Cycle** | 8 — Delivery / implémentation P0 |
| **Profil** | Critical |
| **Typologie** | INC |
| **Horodatage** | 2026-07-19 01:24:00 CEST |
| **Base Git** | `origin/main` @ `2fbdd169481edcbd6fddcdc8f8211e68a7743689` (PR #215) |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-studio-delivery-p0` |
| **Branche** | `project/sfia-studio-delivery-p0` |
| **Décision** | **RÉSOLUE** — architecture technique **VALIDÉE** via `18` / `19` |
| **Suite architecture** | `18-technical-architecture.md` · `19-technical-architecture-decision-pack.md` |
| **Maj analyse** | 2026-07-19 01:32:00 CEST — cycle architecture technique (Critical) |
| **Maj validation** | 2026-07-19 02:01:04 CEST — Morris valide TA-DEC-01…18 |

> **Historique Cas B** conservé ci-dessous (aucune fondation au moment de la discovery).
> L’arbitrage est **résolu** : architecture technique **VALIDÉE** dans `18`/`19` (recommandation consolidée).
> Ce document ne crée pas de code ; le scaffold reste un **cycle delivery** distinct (autorisé, non exécuté).
> Les options 1/2/3 historiques sont **conservées** pour traçabilité ; seule l’Option 1 est **retenue**.

---

## 1. Constat discovery (Git)

| Élément | Observé | Source | Canonique pour SFIA Studio | Exploitable sans décision Morris |
|---------|---------|--------|----------------------------|----------------------------------|
| application existante | **Aucune** sous `projects/sfia-studio/` | arborescence `main` | Non | Non |
| framework Studio | **Absent** | pas de `package.json` Studio | Non | Non |
| langage Studio | Markdown docs uniquement (`01`–`16`) | `projects/sfia-studio/*` | Docs oui / runtime non | Docs seulement |
| gestionnaire de paquets Studio | **Absent** | — | Non | Non |
| routing Studio | **Absent** | — | Non | Non |
| styling Studio | **Absent** | — | Non | Non |
| composants UI Studio | **Absent** | `components/` = notes Notion CMP, pas UI | Non | Non |
| tests Studio | **Absent** | — | Non | Non |
| lint / format Studio | **Absent** | — | Non | Non |
| build Studio | **Absent** | — | Non | Non |
| commande runtime Studio | **Absent** | — | Non | Non |
| stack validée projet | **Aucune** | README / `13` / `16` | Explicitement non prise | Non |
| apps sœurs repo | task-tracker (Next), chantiers360-v2 (Next+Tailwind), interv360 (Vite+React+Tailwind) | `projects/*/app/package.json` | **Autres produits** ≠ Studio | Référence comparative seulement |

**Décision mécanique :** **Cas B** — aucune fondation applicative canonique SFIA Studio.

**Interdit sans GO Morris :** sélectionner une stack, créer `package.json`, initialiser Next/Vite, réutiliser une app sœur comme host Studio, implémenter les écrans P0.

---

## 2. Figma (preuves accessibles — non modifié)

| Frame | node ID | Dimensions observées (MCP) |
|-------|---------|----------------------------|
| P0-00C Nouvelle demande | `19:2` | 1440 × 1024 |
| P0-01C Vue synthèse | `22:2` | 1440 × 1024 |
| P0-02C Cycle actif | `22:133` | 1440 × 1024 |
| P0-03C Décision Morris | `22:270` | 1440 × 1024 |

fileKey : `lrjA1WEyRpL05vKR8k29LO` — page UX-B — P0.

Structure commune observée : Utility rail · Workspace/Topbar · Canvas · Copilot panel · pills/CTA · gates/evidence.

---

## 3. Trois options d’arbitrage (non validées)

### Option 1 — Next.js 15 (App Router) + React 19 + TypeScript

**Alignement repo :** dominant sur les apps produit (`task-tracker`, `chantiers360-v2`).

| Critère | Évaluation |
|---------|------------|
| Stack proposée | Next.js ^15.3 · React 19 · TypeScript · ESLint `eslint-config-next` · Vitest (comme task-tracker) ; Tailwind **optionnel** (présent sur chantiers, absent sur task-tracker) |
| Bénéfices | Conventions déjà présentes dans le monorepo ; routing fichiers ; bon support a11y/SSR futur ; industrialisation proche des autres projets |
| Limites | Plus lourd qu’un SPA pour 4 écrans mocks ; App Router = choix structurant ; risque de dérive vers backend/API routes |
| Dette créée | Scaffold Next + lockfile ; conventions App Router à maintenir |
| Arborescence cible (si GO) | `projects/sfia-studio/app/` (`package.json`, `app/`, `components/`, `fixtures/`, `public/`) |
| Commandes typiques | `npm install` · `npm run dev` · `lint` · `typecheck` · `test` · `build` |
| Impact repository | Nouveau sous-arbre Studio ; pas de modification méthode ; isolation projet |
| Fidélité Figma | Compatible (layout CSS/composants) — tokens à extraire en delivery |
| Accessibilité | Bonne base sémantique + focus ; audit runtime toujours requis |
| Testabilité | Vitest + éventuel Playwright (chantiers pattern) |
| Maintenabilité | Haute si alignée sur sœurs Next |
| Coût industrialisation | Moyen |
| Décision Morris requise | **GO Option 1** + confirmer Tailwind oui/non + port local |

### Option 2 — Vite + React 19 + TypeScript + Tailwind v4

**Alignement repo :** `interv360/app`.

| Critère | Évaluation |
|---------|------------|
| Stack proposée | Vite 6 · React 19 · TypeScript · Tailwind 4 · Vitest |
| Bénéfices | Léger pour UI mockée P0 ; démarrage rapide ; bon pour pixel fidelity desktop |
| Limites | Moins aligné que Next sur la majorité des apps produit ; routing à choisir (React Router) = décision supplémentaire |
| Dette créée | Scaffold Vite + choix router ; divergence vs Next sœurs |
| Arborescence cible (si GO) | `projects/sfia-studio/app/` (`src/`, `index.html`, `vite.config.ts`, …) |
| Commandes typiques | `npm install` · `npm run dev` · `test` · `build` · `preview` |
| Impact repository | Nouveau sous-arbre Studio |
| Fidélité Figma | Très bonne pour shell desktop |
| Accessibilité | Possible ; moins de conventions SSR |
| Testabilité | Vitest + Testing Library (pattern interv360) |
| Maintenabilité | Bonne pour front-only ; migration Next plus tard coûteuse |
| Coût industrialisation | Faible à moyen |
| Décision Morris requise | **GO Option 2** + choix router (React Router vs autre) |

### Option 3 — HTML/CSS (+ JS minimal) sans framework

| Critère | Évaluation |
|---------|------------|
| Stack proposée | Pages HTML statiques + CSS modules/variables + navigation locale |
| Bénéfices | Zéro framework ; preuve visuelle rapide ; dette runtime minimale |
| Limites | Structure partagée difficile sans duplication ; faible industrialisation ; tests/composants faibles ; écart avec conventions monorepo |
| Dette créée | Réécriture probable dès le prochain incrément |
| Arborescence cible (si GO) | `projects/sfia-studio/app/` (`index.html`, écrans, `styles/`, `assets/`) |
| Commandes typiques | serveur statique local (`npx serve` ou équivalent — **à valider**) |
| Impact repository | Faible volume ; faible alignement long terme |
| Fidélité Figma | Possible mais coût maintenance layout élevé |
| Accessibilité | Manuelle, fragile |
| Testabilité | Faible |
| Maintenabilité | Faible pour shell réutilisable exigé |
| Coût industrialisation | Faible court terme / élevé moyen terme |
| Décision Morris requise | **GO Option 3** explicitement acceptant dette de réécriture |

---

## 4. Résolution (post-validation Morris)

**Option retenue (VALIDÉE) :** Option 1 — Next.js 15 App Router + React 19 + TypeScript strict, sous `projects/sfia-studio/app/`, **npm**, **CSS Modules + tokens Figma**, Vitest + Testing Library + Playwright, port **3020**, **API routes interdites**, fixtures locales, actions Git UI simulées/désactivées.

Détail normatif : **`18-technical-architecture.md`**.  
Matrice ADR : **`19-technical-architecture-decision-pack.md`** — TA-DEC-01…18 **VALIDÉES** (2026-07-19 02:01:04 CEST).

Les options 2 et 3 restent documentées en §3 comme **historique d’arbitrage** non retenues.

Aucun scaffold dans ce versionnement.

---

## 5. Suite

| Étape | Statut |
|-------|--------|
| Architecture technique | **VALIDÉE** |
| Delivery P0 (scaffold + 4 écrans) | **Autorisé** — **non exécuté** |
| Commit / push / PR docs | Cycle PR readiness |
| Merge | Interdit sans GO |
| Backend / API / CI / Runtime / POC / MVP | Hors périmètre |

---

## 6. Verdict

**ARBITRATION RESOLVED — TECHNICAL ARCHITECTURE VALIDATED**

*(Historique discovery Cas B : `STOP — MORRIS TECHNICAL FOUNDATION DECISION REQUIRED`.)*

Aucun code applicatif dans ce document.

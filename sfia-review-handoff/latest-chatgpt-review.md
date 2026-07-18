# SFIA Studio — Review Pack FULL — Delivery P0 discovery (Cas B)

**Date/heure :** 2026-07-19 01:24:50 CEST
**Niveau :** FULL
**Cycle :** 8 — Delivery / implémentation P0
**Profil :** Critical
**Typologie :** INC
**Verdict :** STOP — MORRIS TECHNICAL FOUNDATION DECISION REQUIRED

### Review Handoff Git

**required** — ChatGPT doit analyser discovery, dossier d'arbitrage et absence de code applicatif.
Branche : `sfia/review-handoff`
Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
Verdict handoff attendu : `HANDOFF UPDATED — REMOTE VERIFIED`

---

## 1. Identité Git

| Champ | Valeur |
|---|---|
| Repository | `/Users/morris/Projects/sfia-workspace` (remote mcleland147/sfia-workspace) |
| Worktree delivery | `/Users/morris/Projects/sfia-workspace-studio-delivery-p0` |
| Branche | `project/sfia-studio-delivery-p0` |
| HEAD | `2fbdd169481edcbd6fddcdc8f8211e68a7743689` |
| origin/main | `2fbdd169481edcbd6fddcdc8f8211e68a7743689` |
| Match base PR #215 | OUI (`2fbdd169481edcbd6fddcdc8f8211e68a7743689`) |
| Workspace principal | non modifié (sale historique laissé intact) |
| Staged delivery | aucun |
| Commit / push / PR delivery | aucun |

### État Git final delivery

```
?? .tmp-sfia-review/
?? projects/sfia-studio/17-delivery-technical-foundation-arbitration.md
```

Fichiers hors code applicatif uniquement :
- arbitration doc `17`
- `.tmp-sfia-review/` review pack

---

## 2. Sources consultées

### Méthode
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`

### Projet
- `projects/sfia-studio/README.md`
- `07` à `16` présents sur main post-#215
- Pas de fichier nommé `08-functional-architecture.md` (conception = `08-functional-design.md`)

### Repository / stacks sœurs
- task-tracker app : Next 15 / React 19 / TS / Vitest
- chantiers360-v2 app : Next 15 / React 19 / Tailwind / Playwright
- interv360 app : Vite / React 19 / Tailwind 4 / Vitest
- tools/cmp-001 : CLI Notion (hors UI Studio)
- `components/README.md` : notes CMP, pas UI runtime
- Aucun package.json racine
- Aucun package.json sous `projects/sfia-studio/`

### Figma (MCP lecture seule)
- URL https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO
- fileKey `lrjA1WEyRpL05vKR8k29LO`
- Frames via get_metadata :
  - `19:2` P0-00C — 1440×1024 — Utility rail / Workspace shell / Copilot
  - `22:2` P0-01C — 1440×1024
  - `22:133` P0-02C — 1440×1024
  - `22:270` P0-03C — 1440×1024
- Aucune modification Figma

---

## 3. Discovery technique

| Élément | Observé | Source | Canonique | Exploitable |
|---|---|---|---|---|
| application existante | Aucune sous Studio | arborescence | Non | Non |
| framework | Absent Studio | — | Non | Non |
| langage | Docs MD uniquement | 01–16 | Docs | Docs |
| gestionnaire de paquets | Absent Studio | — | Non | Non |
| routing | Absent | — | Non | Non |
| styling | Absent | — | Non | Non |
| composants UI | Absent | components/ ≠ UI | Non | Non |
| tests | Absent | — | Non | Non |
| lint / format | Absent | — | Non | Non |
| build | Absent | — | Non | Non |
| commande runtime | Absent | — | Non | Non |
| conventions repository | Apps sœurs Next/Vite par projet | projects/*/app | Pour sœurs | Référence seulement |
| stack validée Studio | Aucune | README / 13 / 16 | Explicitement non | Non |

**Décision mécanique : Cas B**

---

## 4. Cas A / Cas B

**Cas B** — aucune fondation applicative canonique ni stack validée pour SFIA Studio.

Conséquences appliquées :
- aucun code applicatif ;
- aucune création de package.json / framework ;
- dossier d'arbitrage produit ;
- STOP pour décision Morris.

---

## 5. Fichiers créés / modifiés (delivery worktree)

| Fichier | Statut |
|---|---|
| `projects/sfia-studio/17-delivery-technical-foundation-arbitration.md` | créé (arbitrage) |
| `.tmp-sfia-review/chatgpt-review.md` | réinitialisé / FULL |
| Code applicatif | aucun |
| Docs 01–16 | inchangés |
| Méthode / prompts / .github | inchangés |

---

## 6. Contenu complet — dossier d'arbitrage

```markdown
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
| **Décision** | **NON VALIDÉE** — arrêt obligatoire avant toute création de stack |

> Ce document **n’autorise pas** la création d’application, de `package.json`, de framework ni d’architecture technique. Il prépare uniquement la décision Morris.

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

## 4. Recommandation (non validée)

**Recommandation Cursor (≠ décision Morris) :** Option 1 — Next.js 15 App Router + React 19 + TypeScript, hébergée sous `projects/sfia-studio/app/`, **sans** backend, **sans** API routes métier, fixtures locales uniquement ; Tailwind à trancher (oui = alignement chantiers ; non = CSS modules / tokens Figma extraits).

**Raisons :** majorité des apps produit du repo ; routing fichier adapté aux 4 vues P0 ; meilleure trajectoire industrialisation ; isolement projet respecté.

**Cette recommandation n’est pas validée.** Aucune sélection n’est appliquée.

---

## 5. Décisions Morris requises avant reprise Delivery P0

1. Choisir **Option 1, 2, 3** ou une variante écrite.
2. Si Option 1 : Tailwind **oui/non** ; port `dev` ; autoriser ou interdire App Router API routes (recommandé : interdire en P0).
3. Si Option 2 : choisir le mécanisme de routing.
4. Confirmer arborescence cible `projects/sfia-studio/app/`.
5. Confirmer : fixtures/mocks locaux uniquement ; aucune action Git distante depuis l’UI.
6. Nouveau GO pour : implémentation code · commit · push · PR · merge (séparés).

---

## 6. Verdict

**STOP — MORRIS TECHNICAL FOUNDATION DECISION REQUIRED**

Aucun code applicatif produit dans ce cycle.
Aucun commit / push / PR / merge de la branche delivery.

```

---

## 7. Implémentation / runtime / captures

| Élément | Statut |
|---|---|
| Composants partagés | Non produits (Cas B) |
| Routes / vues | Non produites |
| Fixtures | Non produites |
| lint / typecheck / tests / build | Non exécutés (pas de stack) |
| Runtime local | Non lancé |
| Captures 1440×1024 | Absentes — pas de runtime |
| Matrice Figma vs Runtime | Non applicable |

---

## 8. Accessibilité / responsive / performance

| Domaine | Statut |
|---|---|
| Accessibilité WCAG 2.2 AA | Non implémentée — réserve post-fondation |
| Responsive 1440 | Référence Figma confirmée en metadata |
| 1280×832 | Réserve (contrat UX) |
| Mobile/tablette | Hors périmètre |
| Performance | Non mesurée |

---

## 9. Garde-fous respectés

- Pas de sélection autonome de stack
- Pas de backend / auth / DB / GitHub réel / Cursor réel / Runtime réel
- Pas de commit / push / PR / merge delivery
- Pas de modification Figma
- Pas d'écran secondaire
- Workspace principal non touché
- Branche / worktree delivery conservés

---

## 10. Décisions Morris requises

1. Valider Option 1, 2, 3 (ou variante) du dossier 17
2. Trancher Tailwind / routing selon option
3. GO reprise implémentation P0 uniquement après fondation choisie
4. GO séparés pour commit / push / PR / merge

Recommandation Cursor (non validée) : Option 1 Next.js 15 + React 19 + TS sous `projects/sfia-studio/app/`.

---

## 11. Instruction ChatGPT

Le Review Handoff Git Delivery P0 (Cas B) est sur `sfia/review-handoff`.

Lire : `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier :
- Cas B justifié par preuves Git ;
- absence de code applicatif ;
- trois options d'arbitrage ;
- recommandation non présentée comme validée ;
- Figma accessible (4 frames 1440×1024) ;
- aucun commit delivery ;
- verdict STOP.

Verdict attendu :
`STOP — MORRIS TECHNICAL FOUNDATION DECISION REQUIRED`

---

## 12. Verdict

**STOP — MORRIS TECHNICAL FOUNDATION DECISION REQUIRED**

Statut : **STOP**

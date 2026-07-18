# SFIA Studio — Review Pack FULL — Architecture technique (proposition)

**Date/heure :** 2026-07-19 01:33:23 CEST
**Niveau :** FULL
**Cycle :** 6 — Architecture technique
**Profil :** Critical
**Typologie :** DOC / EVOL préparatoire
**Verdict :** READY FOR MORRIS TECHNICAL ARCHITECTURE DECISION

### Review Handoff Git

**required**
Branche : `sfia/review-handoff`
Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
Message commit : `docs: publish SFIA Studio technical architecture review handoff`
Verdict handoff attendu : `HANDOFF UPDATED — REMOTE VERIFIED`

---

## 1. Identité Git

| Champ | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-studio-delivery-p0` |
| Branche | `project/sfia-studio-delivery-p0` |
| HEAD | `2fbdd169481edcbd6fddcdc8f8211e68a7743689` |
| origin/main | `2fbdd169481edcbd6fddcdc8f8211e68a7743689` |
| Match PR #215 base | OUI |
| Staged | aucun |
| Commit / push / PR projet | **aucun** |

### État Git initial (attendu)
- `?? projects/sfia-studio/17-delivery-technical-foundation-arbitration.md`
- `?? .tmp-sfia-review/`

### État Git final

```
?? .tmp-sfia-review/
?? projects/sfia-studio/17-delivery-technical-foundation-arbitration.md
?? projects/sfia-studio/18-technical-architecture.md
?? projects/sfia-studio/19-technical-architecture-decision-pack.md
```

---

## 2. Sources consultées

### Méthode
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md` (présent)

### Projet
- README, `07`, `08-functional-design.md`, `09-functional-flows-and-rules.md`, `10-functional-decision-pack.md`, `11`–`16`, `17`
- Note : les noms `09-functional-requirements-and-rules.md` / `10-functional-data-and-traceability.md` du prompt **n’existent pas** ; équivalents Git ci-dessus.

### Handoff amont
- `origin/sfia/review-handoff` @ `a240a5791e0ae2dea592a2442d66114353d7e5a9` (Cas B)

### Repository / conventions
- task-tracker : Next 15, React 19, TS, Vitest, npm lock, port 3010, dirs `app/` `components/` `lib/`
- chantiers360-v2 : Next 15, Tailwind 3, Playwright, npm lock
- interv360 : Vite 6, React 19, Tailwind 4, Vitest
- Package manager dominant : **npm**

### Figma
- fileKey `lrjA1WEyRpL05vKR8k29LO` — frames `19:2` `22:2` `22:133` `22:270` — **non modifié**

---

## 3. Analyse repo (synthèse)

Cas B confirmé : aucune fondation Studio. Apps sœurs = références, pas host. npm+lockfile standard. Next majoritaire pour apps produit.

---

## 4. Options analysées

1. Next.js 15 App Router + React 19 + TS
2. Vite + React 19 + TS + Tailwind 4
3. HTML/CSS/JS minimal

---

## 5. Recommandation (non validée)

Next 15 App Router + React 19 + TS strict + npm + **CSS Modules + tokens Figma** + Vitest + Testing Library + Playwright ; port **3020** ; API routes **interdites** ; `projects/sfia-studio/app/` ; fixtures locales ; 4 routes P0.

---

## 6. Décisions Morris requises

Voir `19` TA-DEC-01…18 (toutes **OUVERTES**). Minimum : stack, styling, pkg manager, routing, tests, API routes, arborescence, GO reprise delivery.

---

## 7. Fichiers créés / modifiés

| Fichier | Action |
|---|---|
| `17-delivery-technical-foundation-arbitration.md` | mis à jour (pointeurs 18/19, reco affinée) |
| `18-technical-architecture.md` | **créé** |
| `19-technical-architecture-decision-pack.md` | **créé** |
| `.tmp-sfia-review/chatgpt-review.md` | FULL |
| Code / package.json / app/ / lockfile | **aucun** |

---

## 8. Contrôles

| Contrôle | Résultat |
|---|---|
| `git diff --check` | propre |
| package.json Studio | absent |
| dossier `projects/sfia-studio/app` | absent |
| dépendances installées | non |
| Figma modifié | non |
| méthode modifiée | non |
| décisions marquées VALIDÉE | non (OUVERTES) |

---

## 9. Garde-fous / réserves

- Delivery P0 suspendu
- Pas de backend / Runtime / CI / déploiement
- a11y cible ≠ audit
- 1280 réserve
- Captures runtime = cycle delivery futur
- Architecture fonctionnelle non clôturée

---

## 10. Contenu complet — 17

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
| **Suite architecture** | `18-technical-architecture.md` · `19-technical-architecture-decision-pack.md` |
| **Maj analyse** | 2026-07-19 01:32:00 CEST — cycle architecture technique (Critical) |

> Ce document **n’autorise pas** la création d’application, de `package.json`, de framework ni de code.  
> L’analyse comparative détaillée, l’arborescence cible, le routing, les tests et la gate Morris sont dans **`18`** / **`19`**.  
> Toutes les options restent **non validées** jusqu’au GO Morris.

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

## 4. Recommandation (non validée) — affinée par cycle architecture

**Recommandation Cursor (≠ décision Morris) :** Option 1 — Next.js 15 App Router + React 19 + TypeScript strict, sous `projects/sfia-studio/app/`, **npm**, **CSS Modules + tokens Figma** (Tailwind non recommandé en P0), Vitest + Testing Library + Playwright, port **3020**, **API routes interdites**, fixtures locales, actions Git UI simulées/désactivées.

Détail normatif : **`18-technical-architecture.md`**.  
Matrice ADR : **`19-technical-architecture-decision-pack.md`**.

**Cette recommandation n’est pas validée.** Aucune sélection n’est appliquée. Aucun scaffold.

---

## 5. Décisions Morris requises avant reprise Delivery P0

Voir matrice complète `19` (TA-DEC-01…18). Minimum :

1. Stack (Option 1 / 2 / 3 / variante).
2. Styling (CSS Modules+tokens vs Tailwind).
3. Package manager (npm recommandé).
4. Routing + chemins des 4 vues.
5. Tests (Vitest ± Playwright).
6. API routes P0 (recommandé : interdites).
7. Arborescence §6 de `18`.
8. **GO reprise delivery** (scaffold + P0) — distinct.
9. GO ultérieurs : commit · push · PR · merge.

---

## 6. Verdict

**READY FOR MORRIS TECHNICAL ARCHITECTURE DECISION**

*(Ancien verdict Cas B discovery : `STOP — MORRIS TECHNICAL FOUNDATION DECISION REQUIRED` — conservé comme historique de phase discovery ; la décision attendue porte désormais sur `18`/`19`.)*

Aucun code applicatif dans ce cycle.
Aucun commit / push / PR / merge de la branche delivery.

```

---

## 11. Contenu complet — 18

```markdown
# SFIA Studio — Architecture technique (proposition)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `18-technical-architecture.md` |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | DOC / EVOL préparatoire |
| **Statut** | **PROPOSITION — NON VALIDÉE** |
| **Horodatage** | 2026-07-19 01:32:00 CEST |
| **Base Git** | `origin/main` @ `2fbdd169481edcbd6fddcdc8f8211e68a7743689` (PR #215) |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-studio-delivery-p0` |
| **Branche** | `project/sfia-studio-delivery-p0` |
| **Amont** | Cas B · `17-delivery-technical-foundation-arbitration.md` · UX `14`–`16` · AF `11`–`13` |
| **Decision pack** | `19-technical-architecture-decision-pack.md` |
| **D-VAL technique** | **Aucune** |

> Proposition d’architecture technique **bornée** pour fonder le futur delivery P0.  
> **Aucune** décision Morris n’est VALIDÉE ici. **Aucun** code, scaffold, `package.json` ou dépendance n’est créé dans ce cycle.

---

## 1. Contexte et objectifs

### 1.1 Produit
SFIA Studio = plateforme métier pour piloter les cycles SFIA sous contrôle Morris, avec Git comme source de vérité (INV-04 / AF-INV-B). GPT propose ; Morris décide ; Cursor exécute ; Studio **représente** et **n’est pas** une seconde vérité.

### 1.2 Objectifs de ce cycle technique
1. Définir une fondation applicative **isolée** sous `projects/sfia-studio/app/`.
2. Préparer l’implémentation **uniquement** des quatre écrans Figma P0 (1440 × 1024).
3. Rendre la structure de shell **réutilisable** pour futurs écrans (sans les inventer maintenant).
4. Interdire backend, API métier, auth, BDD, Runtime contractuel, Git distant depuis l’UI en P0.
5. Produire une proposition **directement arbitrable** par Morris.

### 1.3 Hors objectifs
POC transverse · MVP · déploiement · production · CI créée · microservices · SFIA Runtime validé · clôture architecture fonctionnelle.

### 1.4 Challenge (obligatoire)
| Question | Réponse |
|----------|---------|
| Utile maintenant ? | Oui — bloque le delivery jusqu’à GO stack |
| Dette créée ? | Dette documentaire seulement dans ce cycle ; dette scaffold **après** GO |
| Plus simple possible ? | Option 3 (HTML) plus simple mais jetable — écartée en recommandation |
| Repo-first ? | Oui — conventions sœurs Next/npm/Vitest/Playwright analysées |
| Répétable vs arbitrage ? | Architecture = arbitrage Morris ; exécution delivery = Cursor après GO |
| Gate Morris ? | **Obligatoire** avant scaffold |
| Produit vs maquette ? | Cible produit durable, P0 volontairement maigre |

---

## 2. Principes structurants

| ID | Principe | Effet P0 |
|----|----------|----------|
| TA-P01 | Repo-first | Git prime ; fixtures reconstructibles ; pas de vérité UI seule |
| TA-P02 | Frontend isolé | Tout runtime sous `projects/sfia-studio/app/` |
| TA-P03 | Pas de backend P0 | Aucune API métier, BDD, auth |
| TA-P04 | Fixtures locales déterministes | Données mock étiquetées ; seed fixe |
| TA-P05 | Actions distantes simulées | Commit/push/PR/merge = UI mock / disabled — **jamais** Git réel |
| TA-P06 | Séparation des couches | UI · features · domain · adapters · fixtures |
| TA-P07 | Runtime non contractuel | Aucun couplage SFIA Runtime / orchestrateur |
| TA-P08 | Shell partagé | Utility Rail · Topbar · Canvas · Copilot — un seul shell |
| TA-P09 | Copilot ≠ décision | Recommandations distinctes des gates Morris |
| TA-P10 | a11y cible | WCAG 2.2 AA — audit runtime requis avant verdict fort |
| TA-P11 | Pixel-faithful | Figma = référence visuelle initiale ; captures 1440 obligatoires |
| TA-P12 | Dépendances minimales | Toute lib justifiée ou refusée |

---

## 3. Analyse comparative des options

Sources repo : `task-tracker` (Next 15, pas Tailwind), `chantiers360-v2` (Next 15 + Tailwind 3 + Playwright), `interv360` (Vite 6 + React 19 + Tailwind 4). Package manager observé : **npm** + `package-lock.json` partout. Aucun `pnpm`/`yarn` lock dans ces apps.

### 3.1 Option 1 — Next.js 15 App Router + React 19 + TypeScript

| Critère | Évaluation |
|---------|------------|
| Alignement repo | **Fort** (2/3 apps produit) |
| Simplicité P0 | Moyenne — scaffold plus riche qu’un SPA |
| Dette | App Router + conventions Next à maintenir |
| Routing | File-based App Router — naturel pour 4 vues |
| Styling | Indépendant (CSS Modules ou Tailwind) |
| Fidélité Figma | Bonne si tokens + layout contrôlés |
| Testabilité | Vitest (task-tracker) + Playwright (chantiers) |
| Accessibilité | Bonne base sémantique / focus |
| Performance | Acceptable desktop ; attention bundle Next |
| Sécurité | Risque principal = API routes implicites → **à interdire P0** |
| Maintenabilité | Haute si alignée sœurs |
| Industrialisation | Meilleure trajectoire monorepo |
| Migration | Vers Vite = coût moyen |
| Backend futur | API routes / Route Handlers possibles **plus tard** (gate distinct) |
| Risques | Surarchitecture ; SSR inutile en P0 ; dérive backend |
| Stop conditions | Besoin API réelle ; auth ; Runtime |

### 3.2 Option 2 — Vite + React 19 + TypeScript + Tailwind 4

| Critère | Évaluation |
|---------|------------|
| Alignement repo | Moyen (1 app : interv360) |
| Simplicité P0 | **Forte** pour UI mock |
| Dette | Router à choisir ; divergence vs Next majoritaire |
| Routing | React Router (ou équivalent) = décision supplémentaire |
| Styling | Tailwind 4 déjà pattern interv360 |
| Fidélité Figma | Très bonne en SPA desktop |
| Testabilité | Vitest + Testing Library |
| Accessibilité | Possible ; moins de conventions SSR |
| Performance | Excellente pour 4 écrans |
| Sécurité | Surface plus petite (pas d’API routes Next) |
| Maintenabilité | Bonne front-only ; migration Next coûteuse |
| Industrialisation | Plus faible vs majorité Next |
| Migration | Vers Next plus tard = rewrite routing |
| Backend futur | Proxy / BFF externe — pas natif |
| Risques | Deux stacks front dans le monorepo |
| Stop conditions | Exigence d’alignement strict Next |

### 3.3 Option 3 — HTML / CSS / JS minimal

| Critère | Évaluation |
|---------|------------|
| Alignement repo | Faible |
| Simplicité | Maximale court terme |
| Dette | **Réécriture probable** dès incrément suivant |
| Routing | Liens statiques / hash |
| Styling | CSS manuel |
| Fidélité Figma | Possible mais maintenance shell faible |
| Testabilité | Faible |
| Accessibilité | Fragile |
| Performance | Excellente |
| Sécurité | Surface minimale |
| Maintenabilité | Faible pour shell partagé exigé |
| Industrialisation | Mauvaise |
| Migration | Coût total ≈ rebuild |
| Backend futur | N/A |
| Risques | Maquette jetable déguisée en fondation |
| Stop conditions | Exigence composants réutilisables (déjà posée) |

### 3.4 Synthèse comparative

| Critère | Opt.1 Next | Opt.2 Vite | Opt.3 HTML |
|---------|------------|------------|------------|
| Repo-first / alignement | ★★★ | ★★ | ★ |
| Simplicité P0 | ★★ | ★★★ | ★★★★ |
| Shell réutilisable | ★★★ | ★★★ | ★ |
| Trajectoire produit | ★★★ | ★★ | ★ |
| Risque backend implicite | ★★ (mitigé si API interdites) | ★★★ | ★★★★ |
| Dette long terme | ★★ | ★★ | ★★★★ (élevée) |

---

## 4. Variante recommandée (**≠ validée**)

**Recommandation Cursor :** Option 1 — **Next.js 15 App Router + React 19 + TypeScript strict**, sous `projects/sfia-studio/app/`.

| Sujet | Recommandation | Notes |
|-------|----------------|-------|
| Framework | Next.js ^15.3 (App Router) | Aligné task-tracker / chantiers |
| UI lib | React ^19.1 | Commun aux 3 apps |
| Langage | TypeScript ^5.8 **strict** | `strict: true` |
| Package manager | **npm** + `package-lock.json` | Convention repo observée |
| Styling | **CSS Modules + CSS custom properties** (tokens Figma) | Tailwind **non** en P0 — réduit dette utilitaire vs pixel-faithful ; Tailwind reste option alternative (voir `19`) |
| Tests unit/composant | Vitest + Testing Library | Pattern task-tracker / interv360 |
| E2E / visuel | Playwright | Pattern chantiers — smoke 4 routes + a11y basique |
| Lint | ESLint + `eslint-config-next` | Comme sœurs Next |
| Port local | **3020** | Évite 3010 (task-tracker) et 3000 (défaut Next/chantiers) |
| API routes / Route Handlers | **Interdites en P0** | Front-only ; fixtures locales |
| SSR / RSC data fetching | Minimal — pages client-friendly OK | Pas de fetch serveur métier |
| Backend / auth / BDD | **Absents P0** | |
| Runtime SFIA | **Non câblé** | Candidat futur seulement |

Cette variante reste une **recommandation**. Voir gate Morris §17 / document `19`.

---

## 5. Architecture logique

```
┌─────────────────────────────────────────────────────────────┐
│ UI Layer (App Router pages + shared shell)                  │
│  UtilityRail · WorkspaceShell/Topbar · Canvas · Copilot     │
├─────────────────────────────────────────────────────────────┤
│ Screen modules (features/p0-*)                              │
│  nouvelle-demande · synthese · cycle-actif · decision       │
├─────────────────────────────────────────────────────────────┤
│ Shared components                                           │
│  Card · StatusPill · CtaButton · GatePanel · EvidenceList   │
├─────────────────────────────────────────────────────────────┤
│ Domain (types + règles UI pures)                            │
│  Cycle · Gate · Evidence · Recommendation ≠ Decision        │
├─────────────────────────────────────────────────────────────┤
│ Adapters (ports)                                            │
│  GitStatusPort (mock) · DecisionPort (local) · CopilotPort  │
├─────────────────────────────────────────────────────────────┤
│ Fixtures (déterministes)                                    │
│  cycles.json · gates.json · evidence.json · git-status.json │
└─────────────────────────────────────────────────────────────┘
```

| Couche | Responsabilité | Interdit |
|--------|----------------|----------|
| UI / shell | Layout Figma, navigation, focus | Décider à la place de Morris |
| Features | Composition écran P0 | Écrans secondaires |
| Components | Primitives réutilisables | Styles one-off massifs dupliqués |
| Domain | Types + invariants UI | Persistance |
| Adapters | Interfaces mockables | Appels GitHub/Cursor/Runtime réels |
| Fixtures | Données seed | Secrets ; données perso |
| State local | React state / context minimal | Store serveur ; cache Next data |
| Styles/tokens | Variables CSS depuis Figma | Inventer hex non sourcés |
| Tests | Vitest / Playwright | Flaky sans fixtures |
| Config | Next/TS/ESLint/Vitest/Playwright | CI créée dans ce cycle |

---

## 6. Arborescence cible (**non créée**)

Alignée sur `task-tracker` (`app/`, `components/`, `lib/`) + besoins Studio (fixtures, features, styles, e2e).

```
projects/sfia-studio/app/
  package.json                 # APRÈS GO seulement
  package-lock.json
  tsconfig.json
  next.config.ts
  next-env.d.ts
  eslint.config.* ou .eslintrc.json
  vitest.config.ts
  playwright.config.ts
  README.md                    # commandes locales Studio
  app/
    layout.tsx                 # shell providers
    page.tsx                   # redirect → /synthese
    nouvelle-demande/page.tsx  # P0-00C
    synthese/page.tsx          # P0-01C
    cycle-actif/page.tsx       # P0-02C
    decision/page.tsx          # P0-03C
    not-found.tsx
    globals.css                # reset minimal + tokens import
  components/
    shell/
      UtilityRail.tsx
      WorkspaceShell.tsx
      Topbar.tsx
      CopilotPanel.tsx
    ui/
      Card.tsx
      StatusPill.tsx
      CtaButton.tsx
      GateList.tsx
      EvidenceList.tsx
      MetricCard.tsx
  features/
    nouvelle-demande/
    synthese/
    cycle-actif/
    decision/
  lib/
    domain/                    # types + guards
    adapters/                  # ports + mocks
    navigation.ts
    a11y.ts
  fixtures/
    cycles.ts
    gates.ts
    evidence.ts
    git-status.ts
    index.ts
  styles/
    tokens.css                 # extrait Figma
    shell.module.css
  public/
    icons/                     # assets Figma exportés si besoin
  __tests__/                   # unit / component (pattern task-tracker)
  e2e/                         # Playwright (pattern chantiers)
```

**Non inclus P0 :** `app/api/**` · `middleware.ts` auth · Drizzle/DB · scripts déploiement.

---

## 7. Routing P0

| Écran Figma | Route proposée | page |
|-------------|----------------|------|
| P0-01C Vue synthèse | `/synthese` | hub par défaut |
| P0-00C Nouvelle demande | `/nouvelle-demande` | |
| P0-02C Cycle actif | `/cycle-actif` | |
| P0-03C Décision Morris | `/decision` | |

| Règle | Détail |
|-------|--------|
| Entrée `/` | Redirect vers `/synthese` |
| Navigation | Liens shell / rail / CTA — client navigation Next |
| Fallbacks | Empty/loading **minimaux** documentés ; pas d’écrans inventés |
| 404 | `not-found.tsx` simple — hors Figma P0, UI neutre |
| Dynamique | **Aucun** `[id]` en P0 |
| Secondaires | **Interdits** |
| Deep links | Les 4 routes suffisent |

Navigation démontrable : synthèse ↔ demande ↔ cycle ↔ décision, sans GO implicite.

---

## 8. Design system et Figma

| Sujet | Proposition |
|-------|-------------|
| Source visuelle | fileKey `lrjA1WEyRpL05vKR8k29LO` — frames `19:2`, `22:2`, `22:133`, `22:270` |
| Extraction tokens | MCP `get_design_context` / `get_variable_defs` en delivery — **pas** d’invention hex |
| Mapping | `styles/tokens.css` → variables `--sfia-*` |
| Composants partagés | Shell + Card + Pill + CTA + Gate + Evidence |
| Icônes | Export Figma ou glyphes déjà dans frames ; `aria-hidden` si décoratif |
| Polices | Celles du fichier Figma uniquement |
| Assets | `public/` versionnés ; pas de CDN opaque |
| Critère acceptation | **Pixel-faithful** (pas « proche ») |
| Preuves | Capture runtime **obligatoire** 1440 × 1024 × 4 écrans |
| Matrice | Figma attendu / Runtime observé / Écart / Statut / Preuve |
| 1280 × 832 | **Réserve** — aucun verdict responsive fort |
| Mobile/tablette | Hors périmètre |

Verdict max sans captures : `REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED`.

---

## 9. État et données

| Sujet | Proposition |
|-------|-------------|
| Fixtures | Modules TS déterministes sous `fixtures/` |
| Modèles | `Cycle`, `Gate`, `Evidence`, `GitStatus`, `Recommendation`, `MorrisDecision` |
| Distinction | Recommendation (copilot) ≠ MorrisDecision (gate) |
| State | Local React (useState/useReducer) ; pas de Redux/Zustand requis P0 |
| Persistance | **Aucune** critique (localStorage optionnel **interdit** sans GO) |
| Backend | Aucun |
| Cache serveur Next | Non utilisé pour métier |
| Git distant | **Interdit** depuis l’app |
| Simulation | Adapters retournent fixtures ; UI affiche « simulé / désactivé » |

Démonstrations P0 obligatoires : navigation · états principaux · gates · evidence · séparation commit/push/PR/merge · statut Git explicite (fixture).

---

## 10. Tests

| Niveau | Outil | Périmètre P0 |
|--------|-------|--------------|
| Unit domain | Vitest | guards, mapping fixtures |
| Composants | Vitest + Testing Library | shell, pills, gates, focus basique |
| Navigation | Vitest ou Playwright | 4 routes atteignables |
| a11y | axe dans Playwright (ou équivalent) | smoke critiques — ≠ audit complet |
| Visuel | Playwright screenshots 1440×1024 | 4 écrans + comparaison manuelle Figma |
| Acceptation | Checklist delivery | matrice Figma/Runtime ; pas d’action distante |

Critères d’acceptation delivery (après GO architecture) :
1. `lint` + `typecheck` + `test` + `build` verts.
2. Runtime local sur port décidé.
3. 4 captures + matrice.
4. Aucun secret ; aucun appel réseau métier.

---

## 11. Sécurité

| Contrôle | Proposition P0 |
|----------|----------------|
| Secrets | Aucun `.env` secret ; pas de tokens |
| Données sensibles | Fixtures fictives uniquement |
| API réelle | Interdite |
| Commandes système | Interdites depuis UI |
| Exécution Git | Interdite depuis UI |
| HTML | Pas de `dangerouslySetInnerHTML` non contrôlé |
| Dépendances | Minimales ; lockfile commité après GO scaffold |
| CSP | Documentée comme **future** — non imposée P0 |
| Auth | Absente |

---

## 12. Performance

| Sujet | Proposition |
|-------|-------------|
| Cible | Desktop 1440 fluide ; pas de SLO contractuel P0 |
| Bundle | Limiter deps ; pas de UI kit lourd non justifié |
| Images | Optimiser exports ; éviter assets géants |
| Fonts | Self-host si possible ; pas de flash non maîtrisé |
| Rendu initial | Shell + contenu P0 ; pas d’optimisation prématurée |
| Mesures futures | Lighthouse / Web Vitals **après** runtime stable |

---

## 13. DevOps (sans créer la CI)

Commandes cibles (après scaffold) :

| Script | Rôle |
|--------|------|
| `npm run dev` | `next dev --port 3020` |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Vitest |
| `npm run test:e2e` | Playwright |
| `npm run build` | `next build` |
| `npm start` | `next start --port 3020` |

| Sujet | Proposition |
|-------|-------------|
| Node | Aligné sœurs (`@types/node` ^22) — version exacte à figer au scaffold |
| Package manager | npm |
| Lockfile | `package-lock.json` obligatoire après GO |
| CI future | lint/typecheck/test/build — **non créée** ici |
| Preview | Locale uniquement P0 |
| Artefacts | Screenshots e2e sous chemin local non secret |

---

## 14. Observabilité / RUN (besoins futurs seulement)

| Besoin futur | P0 |
|--------------|----|
| Erreurs UI | Boundary React simple possible ; pas d’APM |
| Logs | `console` dev uniquement |
| Métriques | Non |
| Audit actions | Journal UI mock ≠ preuve Git |
| Outil imposé | **Aucun** |

---

## 15. Traçabilité documents

| Doc | Rôle |
|-----|------|
| `17` | Arbitrage fondation Cas B (mis à jour) |
| `18` | Architecture technique (ce document) |
| `19` | Decision pack + matrice ADR |
| `14`–`16` | Contrat / flows / décisions UX |
| `11`–`13` | Architecture fonctionnelle (non clôturée) |

---

## 16. Risques et réserves

| ID | Risque / réserve | Mitigation |
|----|------------------|------------|
| R-TA-01 | Surarchitecture | Bornage P0 4 écrans ; pas d’API |
| R-TA-02 | Divergence repo (si Vite) | Recommandation Next |
| R-TA-03 | Dette Tailwind vs pixel-faithful | CSS Modules + tokens recommandés |
| R-TA-04 | Dépendance Next / API routes | Interdiction P0 explicite |
| R-TA-05 | Migration Vite↔Next | Coût documenté |
| R-TA-06 | Écrans secondaires inventés | Interdit |
| R-TA-07 | Responsive non validé | Réserve 1280 |
| R-TA-08 | a11y non auditée | Cible ≠ validé |
| R-TA-09 | Runtime non comparé | Captures obligatoires delivery |
| R-TA-10 | Confusion Runtime candidat | TA-P07 |

---

## 17. Gate Morris

### Option recommandée (non validée)
**Next.js 15 App Router + React 19 + TypeScript strict + npm + CSS Modules/tokens + Vitest + Testing Library + Playwright ; port 3020 ; API routes interdites ; frontend seul sous `projects/sfia-studio/app/` ; fixtures locales ; 4 routes P0.**

### Décisions Morris requises
1. Stack / framework (Opt.1 / Opt.2 / Opt.3 / variante)
2. Tailwind **vs** CSS Modules (+ tokens)
3. Package manager (npm recommandé)
4. Routing (App Router vs autre)
5. Stratégie tests (Vitest ± Playwright)
6. API routes P0 (recommandé : **interdites**)
7. Arborescence cible (accepter / amender §6)
8. Port local
9. **Autorisation de reprise delivery P0** (scaffold + implémentation) — GO distinct

**Aucune case ci-dessus n’est VALIDÉE tant que Morris n’a pas répondu.**

---

## 18. Verdict documentaire

**READY FOR MORRIS TECHNICAL ARCHITECTURE DECISION**

Delivery P0 reste **suspendu**.  
Aucun code applicatif dans ce cycle.

```

---

## 12. Contenu complet — 19

```markdown
# SFIA Studio — Decision pack architecture technique

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `19-technical-architecture-decision-pack.md` |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Statut** | **PROPOSITION — AUCUNE DÉCISION VALIDÉE** |
| **Horodatage** | 2026-07-19 01:32:00 CEST |
| **Base Git** | `origin/main` @ `2fbdd169481edcbd6fddcdc8f8211e68a7743689` |
| **Document lié** | `18-technical-architecture.md` |
| **Amont** | `17-delivery-technical-foundation-arbitration.md` (Cas B) |

> Distingue **recommandations Cursor**, **options**, et **décisions Morris**.  
> Colonne « Décision Morris » = **OUVERTE** jusqu’à GO explicite.

---

## 1. Matrice ADR

| ID | Décision | Options | Recommandation Cursor | Décision Morris |
|----|----------|---------|----------------------|-----------------|
| TA-DEC-01 | Stack / framework | (1) Next 15 App Router · (2) Vite+React · (3) HTML/CSS/JS · (4) autre écrite | **(1) Next 15 App Router + React 19 + TS** | **OUVERTE** |
| TA-DEC-02 | Emplacement app | `projects/sfia-studio/app/` · autre chemin | `projects/sfia-studio/app/` | **OUVERTE** |
| TA-DEC-03 | Package manager | npm · pnpm · yarn | **npm** + lockfile | **OUVERTE** |
| TA-DEC-04 | Styling | CSS Modules + tokens · Tailwind 3 · Tailwind 4 · hybride | **CSS Modules + tokens Figma** | **OUVERTE** |
| TA-DEC-05 | Routing | App Router files · React Router · static links | **App Router** 4 routes P0 | **OUVERTE** |
| TA-DEC-06 | Routes P0 | chemins proposés §7 de `18` · variantes | `/synthese` `/nouvelle-demande` `/cycle-actif` `/decision` | **OUVERTE** |
| TA-DEC-07 | Tests unit/composant | Vitest · Jest · aucun | **Vitest + Testing Library** | **OUVERTE** |
| TA-DEC-08 | E2E / visuel | Playwright · Cypress · manuel seul | **Playwright** (smoke + screenshots) | **OUVERTE** |
| TA-DEC-09 | API routes / Route Handlers P0 | Interdites · autorisées lecture · autorisées écriture | **Interdites** | **OUVERTE** |
| TA-DEC-10 | Backend / auth / BDD P0 | Absents · partiels | **Absents** | **OUVERTE** |
| TA-DEC-11 | Port local | 3020 · 3010 · 3000 · autre | **3020** | **OUVERTE** |
| TA-DEC-12 | Arborescence | §6 de `18` · amendée | Accepter §6 | **OUVERTE** |
| TA-DEC-13 | Fixtures | Modules TS locaux · JSON seuls · API mock serveur | **Modules TS** sous `fixtures/` | **OUVERTE** |
| TA-DEC-14 | Actions Git depuis UI | Mock/disabled · réel | **Mock/disabled** | **OUVERTE** |
| TA-DEC-15 | Déploiement P0 | Aucun · preview hébergée | **Aucun** | **OUVERTE** |
| TA-DEC-16 | CI P0 | Aucune · scaffold workflow | **Aucune** (future documentée) | **OUVERTE** |
| TA-DEC-17 | Couplage Runtime SFIA | Aucun · stub · réel | **Aucun** | **OUVERTE** |
| TA-DEC-18 | Reprise delivery P0 | Suspendu · GO scaffold+impl | **Suspendu jusqu’à validation `18`/`19`** | **OUVERTE** |

---

## 2. Recommandation consolidée (non validée)

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

## 5. Critères d’acceptation du GO Morris

Morris valide l’architecture technique lorsque :
1. TA-DEC-01…18 tranchées (ou subset minimal : 01, 04, 05, 09, 12, 18).
2. Aucune ambiguïté stack / styling / API routes.
3. GO distinct émis pour **reprise delivery** (scaffold + 4 écrans).

Tant que (3) manque : Cursor **ne** crée **pas** de `package.json`.

---

## 6. Effets attendus après GO

| Si GO Option 1 + reco | Alors |
|-----------------------|-------|
| Autorisé | Scaffold `projects/sfia-studio/app/` selon `18` §6 |
| Autorisé | Implémentation 4 écrans P0 pixel-faithful |
| Toujours interdit sans GO ultérieur | Backend, API routes, CI, déploiement, écrans secondaires |

| Si GO Option 2 ou 3 | Alors |
|---------------------|-------|
| Mettre à jour | `18` / `19` avant scaffold |
| Ne pas | Appliquer silencieusement la reco Next |

---

## 7. Verdict

**READY FOR MORRIS TECHNICAL ARCHITECTURE DECISION**

Aucune case VALIDÉE. Delivery P0 suspendu.

```

---

## 13. Instruction ChatGPT

Lire `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff`.

Vérifier :
- proposition architecture complète et bornée ;
- options 1/2/3 ;
- recommandation ≠ décision validée ;
- matrice TA-DEC toutes OUVERTES ;
- absence de code / package.json / scaffold ;
- contenus 17/18/19 complets ;
- gate Morris avant delivery.

Verdict attendu :
`READY FOR MORRIS TECHNICAL ARCHITECTURE DECISION`

---

## 14. Verdict

**READY FOR MORRIS TECHNICAL ARCHITECTURE DECISION**

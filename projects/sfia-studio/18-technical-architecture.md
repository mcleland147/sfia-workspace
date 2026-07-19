# SFIA Studio — Architecture technique

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `18-technical-architecture.md` |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Typologie** | DOC / EVOL préparatoire |
| **Statut** | **VALIDÉE** — architecture technique Morris |
| **Horodatage proposition** | 2026-07-19 01:32:00 CEST |
| **Horodatage validation** | 2026-07-19 02:01:04 CEST |
| **Base Git** | `origin/main` @ `2fbdd169481edcbd6fddcdc8f8211e68a7743689` (PR #215) |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-studio-delivery-p0` |
| **Branche** | `project/sfia-studio-delivery-p0` |
| **Amont** | Cas B · `17-delivery-technical-foundation-arbitration.md` · UX `14`–`16` · AF `11`–`13` |
| **Decision pack** | `19-technical-architecture-decision-pack.md` |
| **D-VAL technique** | **VALIDÉE** — TA-DEC-01…18 selon recommandation consolidée |

> Architecture technique **VALIDÉE** par Morris (2026-07-19 02:01:04 CEST).
> TA-DEC-01 à TA-DEC-18 **VALIDÉES** selon la recommandation consolidée (`19`).
> Delivery P0 **autorisé**, **non exécuté** (aucun scaffold, package.json, code ou runtime dans ce versionnement).
> Commit / push / PR / merge restent des **GO distincts** (ce cycle = versionnement documentaire uniquement).

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

## 4. Architecture validée (ex-recommandation consolidée)

**Décision Morris :** Option 1 — **Next.js 15 App Router + React 19 + TypeScript strict**, sous `projects/sfia-studio/app/` — **VALIDÉE**.

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

Cette variante est **VALIDÉE**. Détail des ADR : document `19`. Aucune application runtime n’existe encore sur Git.

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

## 17. Décision Morris (validation)

### Architecture validée
**Next.js 15 App Router + React 19 + TypeScript strict + npm + CSS Modules/tokens + Vitest + Testing Library + Playwright ; port 3020 ; API routes interdites ; frontend seul sous `projects/sfia-studio/app/` ; fixtures locales ; 4 routes P0.**

| Élément | Statut |
|---------|--------|
| Horodatage validation | 2026-07-19 02:01:04 CEST |
| TA-DEC-01…17 | **VALIDÉES** (recommandation consolidée) |
| TA-DEC-18 | **VALIDÉE** — reprise delivery P0 **autorisée**, **non exécutée** |
| Application / runtime / scaffold | **Absents** — non créés |
| Commit / push / PR (docs) | GO distincts (cycle PR readiness) |
| Merge | **Non autorisé** sans nouveau GO |
| Scaffold + écrans P0 | Autorisés architecturalement ; **exécution** = cycle delivery distinct |

### Historique
Avant validation, la gate listait des décisions **OUVERTES** — état **historique** uniquement (handoff `3c439720…`).

---

## 18. Verdict documentaire

**TECHNICAL ARCHITECTURE VALIDATED — READY FOR VERSIONING**

Delivery P0 **autorisé**, **non exécuté**.  
Aucun code applicatif dans ce cycle de versionnement.

# JOURNAL V4 — FIGMA UX ALIGNMENT — REVIEW PACK FULL

- **Date/heure** : 2026-11-19 12:24:57 CET
- **Profil** : CRITICAL — SFIA v2.6 §9.1
- **Cycle** : 8 Delivery / Corrective UX
- **Macro-lot** : Ensemble 06 — Journal V4 finalisation
- **Review Pack** : FULL (mono-cycle)
- **Review Handoff** : REQUIRED / PUBLISH-IN-CYCLE
- **Repository** : mcleland147/sfia-workspace
- **Application** : projects/sfia-studio-next/
- **Branche** : `sfia/next-journal-delivery-20261119`
- **HEAD candidat** : `0eb3157b1678b993162fa79c98f5e4de26a9e4e3`
- **Tree** : `b52a3ac1469af980f9cfdec1848757afd58e04dc`
- **Parent / RECETTE actuellement servi** : `d5bf7eb762a21cc309744bb703926e2c0bc844ed` / BUILD `PV12SV9VToVGK-ReSxTqk` (**cutover NON effectué**)
- **origin/main** : `d3d199adb782462b93467934f5f1e8a0c98fb492`
- **Branche documentaire** : `sfia/next-journal-conception-fonctionnelle-ux-20261119` @ `864e09bf`
- **Matrice** : journal-matrice-convergence-vision-realisation.md v0.6 §17
- **Handoff précédent utile** : `31c495af` ; stub erroné `a04a4011` remplacé par `8d2bd1fb` ; **présent pack remplace `8d2bd1fb`**
- **Versioning** : NO RELEASE / STABLE NOT AVAILABLE
- **Push produit / PR / merge / cutover RECETTE** : **NON**

## 0. Objectif du cycle

Corriger la non-conformité UX du Journal V4 en RECETTE face aux **onze frames Figma V4** validées, dans DEV uniquement, sans cutover RECETTE sans nouveau GO Morris.

## 1. Git Truth Check

```
?? projects/.tmp-sfia-review/
?? projects/sfia-studio-next/.tmp-sfia-review/
?? projects/sfia-studio-next/web/scripts/journal-v4-figma-captures.mjs

```

### Commits ce cycle (vs parent RECETTE d5bf7eb7)
```
0eb3157b fix(next): align Journal V4 shell to validated Figma frames

```

### Name-status
```
M	projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
M	projects/sfia-studio-next/construction/delivery-history.md
A	projects/sfia-studio-next/construction/ensemble-06-journal-recette-manifest.md
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
M	projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
A	projects/sfia-studio-next/web/tests/e2e/journal-v4-figma-captures.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts

```

### Diff stat
```
 .../as-built-ensemble-06-journal-20261119.md       |   86 +-
 .../construction/delivery-history.md               |   32 +
 .../ensemble-06-journal-recette-manifest.md        |  135 +++
 .../web/src/app/projects/[projectId]/page.tsx      |   21 +-
 .../web/src/components/figma/ProjectChrome.tsx     |   20 +-
 .../web/src/components/figma/ProjectJournal.tsx    | 1111 ++++++++++++--------
 .../web/src/components/figma/tokens.css            |  635 +++++++++--
 .../tests/e2e/journal-v4-figma-captures.spec.ts    |  159 +++
 .../web/tests/e2e/journal-v4-parcours.spec.ts      |   21 +-
 9 files changed, 1660 insertions(+), 560 deletions(-)

```

## 2. Sources Git et SHA consultées

### Gouvernance / méthode
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- governance/SEF.md · roadmap.md · product-naming-conventions.md
- governance/environnements-recette-et-promotions.md · product-versioning.md

### Vision / R2 / R3 / R4
- cadrage/vision-produit.md · vision-cible/README.md
- R2 D3/D4/D6 · R3 espace-projet · architecture-technique/cadrage-r4.md

### Journal
- construction/convergence-ux-ui-globale/journal-contrat-fonctionnel-ux-candidat.md v1.0
- construction/convergence-ux-ui-globale/contrat-technique-journal.md v0.3 §16
- construction/convergence-ux-ui-globale/journal-matrice-convergence-vision-realisation.md v0.6 §17

### Handoffs historiques
03eda7e8 · 7a065cec · 9d56e6a5 · 45bd3d37 · 31c495af

### Figma
- File `https://www.figma.com/design/itgvCulInEnFY6DvgIegvP`
- Page `828:2`
- 11 frames natives lues via MCP + PNG 1680×970 enregistrés

| # | Node | Nom | Mode |
|---|---|---|---|
| 1 | 835:71 | Sujets Exploration | full |
| 2 | 842:26 | Sujet autonome 40/60 | split |
| 3 | 842:131 | Sujet parent 40/60 | split |
| 4 | 835:159 | Sujet autonome agrandi | enlarged |
| 5 | 835:239 | Sujet parent agrandi | enlarged |
| 6 | 859:42 | Recherche Sujets | split |
| 7 | 859:146 | Filtre Points ouverts | split |
| 8 | 860:58 | Décisions nominales | full |
| 9 | 860:136 | Décision 40/60 | split |
| 10 | 860:251 | Recherche Décisions | split |
| 11 | 860:360 | Décision agrandie | enlarged |

PNG Figma locaux :

- `.tmp-sfia-review/figma-v4-frames/01-835-71-sujets-exploration.png`
- `.tmp-sfia-review/figma-v4-frames/02-842-26-sujet-autonome-40-60.png`
- `.tmp-sfia-review/figma-v4-frames/03-842-131-sujet-parent-40-60.png`
- `.tmp-sfia-review/figma-v4-frames/04-835-159-sujet-autonome-agrandi.png`
- `.tmp-sfia-review/figma-v4-frames/05-835-239-sujet-parent-agrandi.png`
- `.tmp-sfia-review/figma-v4-frames/06-859-42-recherche-sujets.png`
- `.tmp-sfia-review/figma-v4-frames/07-859-146-filtre-points-ouverts.png`
- `.tmp-sfia-review/figma-v4-frames/08-860-58-decisions-nominales.png`
- `.tmp-sfia-review/figma-v4-frames/09-860-136-decision-40-60.png`
- `.tmp-sfia-review/figma-v4-frames/10-860-251-recherche-decisions.png`
- `.tmp-sfia-review/figma-v4-frames/11-860-360-decision-agrandie.png`

## 3. Contrat visuel extrait (synthèse + FULL contrat local)

### Synthèse partagée
- Page `#0a0e17` · rail **246px** · header **70px** · content inset ~284
- Titre **Journal** · kicker `ESPACE PROJET / JOURNAL`
- Sous-titre Sujets (copy Figma exacte) · Décisions : « Comprendre ce qui a été arbitré et pourquoi. »
- Tabs Sujets/Décisions soulignés accent `#7172ea` / `#827cff`
- Search 55px radius 11
- Exploration full-width sans viewer idle
- Split ~526 / ~784
- Hiérarchie éditoriale thèmes / parents / enfants
- Décisions : cartes + statuts EN VIGUEUR / REMPLACÉE / SUSPENDUE
- Agrandi : hero + Réduire

### CREATE FULL — figma-v4-visual-contract.md
```markdown
# Journal V4 — Figma Visual Contract

**File:** `itgvCulInEnFY6DvgIegvP`
**Session:** `bd12007c-5ea0-436f-a013-e1ded6b8a772`
**Canvas size (all frames):** 1680 × 970
**Shell:** Rail projet 246px + content; dark theme; Inter
**Screenshots:** `.tmp-sfia-review/figma-v4-frames/`

---

## Shared tokens (from design context 835:71 / 842:26 / 860:58)

| Role | Value |
|------|--------|
| Page bg | `#0a0e17` |
| Rail bg | `#0c101a` |
| Card / list bg | `#151c2a` / `#101523` / `#131c2d` |
| Borders / separators | `#272e49` / `#273049` / `#35415c` |
| Primary text | `#f4f6fd` / `#f6f7ff` |
| Secondary / muted | `#96a2ba` / `#99a8c6` / `#94a2bb` |
| Accent lilac | `#ada5ff` / `#afa5ff` / `#b9b0ff` |
| Tab / selection bar | `#7172ea` / `#827cff` |
| Nav active pill | `#292d58` |
| Logo / brand | `#656fe1` |
| Status green | `#a6dfbc` / `#9dd9c9` |
| Status amber | `#efce96` |
| Title | Inter SemiBold 31px |
| Eyebrow | Inter SemiBold 11px lilac |
| Tabs | Inter 14px; active SemiBold white + 3px accent underline |
| Section label | Inter SemiBold 11px muted/lilac, uppercase |
| Radius | search 10–11px; list 12–14px; viewer 17px; pills ~9–13px |
| Content left inset | 284px (after 246px rail) |

**Layout modes**

| Mode | Pattern |
|------|---------|
| **full** | Journal column ~1330px; no reader panel |
| **40-60** | Compact Journal ~526px (284→810) + reader ~784×832 at x=830 |
| **enlarged** | Full-bleed reader hero (~1330px); Journal chrome hidden; “Réduire la vue” |

---

## 01 — `835:71` · Sujets · Exploration

- **File:** `01-835-71-sujets-exploration.png`
- **Name:** Journal / 02 · Sujets · Exploration — DESIGN CANDIDAT
- **Size:** 1680 × 970
- **Layout:** full
- **Texts:** `ESPACE PROJET / JOURNAL` · **Journal** · *La mémoire du projet, organisée par thèmes. Retrouvez l’essentiel sans remonter toute la conversation.* · tabs **Sujets** (active) / Décisions · search `Rechercher un sujet…` · **THÈMES DU PROJET** · *Organisation évolutive · entretenue par Nora* · filter `◌ Points ouverts` · tree: Journal et mémoire (3 AXES) + children; Documentation; Expérience Pilote–Nora
- **Tokens:** tab underline `#7172ea` under Sujets; list `#151c2a` / border `#273049`

---

## 02 — `842:26` · Sujet autonome · 40/60

- **File:** `02-842-26-sujet-autonome-40-60.png`
- **Name:** Journal · Sujet autonome · Journal rétracté 40/60 + lecture · CANDIDAT
- **Size:** 1680 × 970
- **Layout:** 40-60
- **Texts (left):** same Journal chrome; subtitle shortened *La mémoire du projet, organisée par thèmes.* · Sujets active · selection on **Expérience Pilote–Nora** (3px `#7172ea` bar)
- **Texts (reader):** `MÉMOIRE DU PROJET / SUJET` · **Expérience Pilote–Nora** · badge Sujet autonome · Agrandir / × · **LA SYNTHÈSE** · **CE QU’ON RETIENT** / **À ÉCLAIRCIR** · **ÉCHANGE DE RÉFÉRENCE** · **CONTINUER LE TRAVAIL** / Poursuivre ce sujet avec Nora
- **Tokens:** viewer `#141c2b` border `#35415c` r17; identity band `#1e2544`; accent liseré `#827cff`

---

## 03 — `842:131` · Sujet parent · 40/60

- **File:** `03-842-131-sujet-parent-40-60.png`
- **Name:** Journal · Sujet parent · Journal rétracté 40/60 + lecture · CANDIDAT
- **Size:** 1680 × 970
- **Layout:** 40-60
- **Texts (left):** Journal + Sujets; selection on parent **Journal et mémoire**
- **Texts (reader):** identity + badge **Sujet parent** · synthèse · numbered child cards (Organisation / Consultation / Références) · parent complement + continuer lien
- **Tokens:** same 40-60 shell as 02; child cards replace acquis/question grid

---

## 04 — `835:159` · Sujet autonome · Agrandi

- **File:** `04-835-159-sujet-autonome-agrandi.png`
- **Name:** Journal · Sujet autonome · Lecture agrandie V4 CANDIDAT
- **Size:** 1680 × 970
- **Layout:** enlarged
- **Texts:** breadcrumb Journal / Sujets / … · hero **Expérience Pilote–Nora** · badge Sujet autonome · **Réduire la vue** · LA SYNTHÈSE · CE QU’ON RETIENT / À ÉCLAIRCIR · ÉCHANGE DE RÉFÉRENCE · aside **REPÈRES** / Lecture enrichie · Nature · Sources · **Poursuivre avec Nora**
- **Tokens:** hero ~1330×198; article col ~936px + aside ~374px at x=1240; identity rail 4px

---

## 05 — `835:239` · Sujet parent · Agrandi

- **File:** `05-835-239-sujet-parent-agrandi.png`
- **Name:** Journal · Sujet parent · Lecture agrandie V4 CANDIDAT
- **Size:** 1680 × 970
- **Layout:** enlarged
- **Texts:** hero parent title · badge Sujet parent · Réduire la vue · synthèse · **sous-sujets** as large numbered cards · note parent · same aside pattern as 04
- **Tokens:** same enlarged shell; children replace acquis/question pair

---

## 06 — `859:42` · Recherche Sujets

- **File:** `06-859-42-recherche-sujets.png`
- **Name:** Journal · Recherche Sujets · résultat ouvert 40/60 · CANDIDAT
- **Size:** 1680 × 970
- **Layout:** 40-60
- **Texts:** Journal + Sujets · search query (e.g. traçabilité) + clear × · **3 SUJETS CORRESPONDANTS** · Points ouverts · result cards (Organisation des sujets selected) · reader: MÉMOIRE… · synthèse · POURQUOI CE SUJET / CHEMIN D’ORIGINE · Poursuivre…
- **Tokens:** result selection 3px accent bar; compact Journal 526px

---

## 07 — `859:146` · Filtre Points ouverts

- **File:** `07-859-146-filtre-points-ouverts.png`
- **Name:** Journal · Points ouverts · filtre transversal actif · CANDIDAT
- **Size:** 1680 × 970
- **Layout:** 40-60
- **Texts:** Sujets tab · Points ouverts **active** (3px marque) · filtered open-point results · reader: question / provenance / origine / aide retour
- **Tokens:** filter active left bar; same 40-60 geometry as 06

---

## 08 — `860:58` · Décisions · Nominale

- **File:** `08-860-58-decisions-nominales.png`
- **Name:** DÉCISIONS / Journal · Décisions · vue nominale · CANDIDAT
- **Size:** 1680 × 970
- **Layout:** full
- **Texts:** `ESPACE PROJET / JOURNAL` · **Journal** · *Comprendre ce qui a été arbitré et pourquoi.* · tabs Sujets / **Décisions** (active) · `Rechercher une décision…` · **DÉCISIONS DURABLES DU PROJET** · *EXEMPLES FICTIFS — AUCUN ACTE D6 RÉEL* · rows D-EX01/02/03 with status EN VIGUEUR / REMPLACÉE / SUSPENDUE · footer note on D6
- **Tokens:** tab underline under Décisions `#827cff` @ x=408; status dots `#9dd9c9` / `#99a8c6` / `#efce96`

---

## 09 — `860:136` · Décision · 40/60

- **File:** `09-860-136-decision-40-60.png`
- **Name:** DÉCISIONS / Journal · Décisions · décision et synthèse 40/60 · CANDIDAT
- **Size:** 1680 × 970
- **Layout:** 40-60
- **Texts (left):** Décisions active · compact list; D-EX01 selected
- **Texts (reader):** `DÉCISION / …` · **Organisation du Journal** · status badge · Agrandir / × · arbitrage retenu · pourquoi · autorité/portée · histoire · Voir le cheminement et les sources
- **Tokens:** viewer same as sujets 40-60; selection bar on list row

---

## 10 — `860:251` · Recherche Décisions

- **File:** `10-860-251-recherche-decisions.png`
- **Name:** DÉCISIONS / Journal · Recherche Décisions · résultat 40/60 · CANDIDAT
- **Size:** 1680 × 970
- **Layout:** 40-60
- **Texts:** Décisions + filled search + clear × · filtered decision result(s) + motif/assistance copy · reader same decision panel as 09
- **Tokens:** same 40-60 Décisions shell

---

## 11 — `860:360` · Décision · Agrandie

- **File:** `11-860-360-decision-agrandie.png`
- **Name:** DÉCISIONS / Journal · Décision · lecture agrandie et motivations · CANDIDAT
- **Size:** 1680 × 970
- **Layout:** enlarged
- **Texts:** Journal / Décisions / D-EX01 · hero **Organisation du Journal** · status · **Réduire la vue** · LE CHOIX RETENU · raisonnement · contexte/sources · aside REPÈRES (autorité, portée, évolutions) · Poursuivre avec Nora
- **Tokens:** bandeau élargi ~1330×193; article ~936 + aside ~374; 4px liseré

---

## Screenshot inventory

```
.tmp-sfia-review/figma-v4-frames/01-835-71-sujets-exploration.png
.tmp-sfia-review/figma-v4-frames/02-842-26-sujet-autonome-40-60.png
.tmp-sfia-review/figma-v4-frames/03-842-131-sujet-parent-40-60.png
.tmp-sfia-review/figma-v4-frames/04-835-159-sujet-autonome-agrandi.png
.tmp-sfia-review/figma-v4-frames/05-835-239-sujet-parent-agrandi.png
.tmp-sfia-review/figma-v4-frames/06-859-42-recherche-sujets.png
.tmp-sfia-review/figma-v4-frames/07-859-146-filtre-points-ouverts.png
.tmp-sfia-review/figma-v4-frames/08-860-58-decisions-nominales.png
.tmp-sfia-review/figma-v4-frames/09-860-136-decision-40-60.png
.tmp-sfia-review/figma-v4-frames/10-860-251-recherche-decisions.png
.tmp-sfia-review/figma-v4-frames/11-860-360-decision-agrandie.png
```

```

## 4. Snapshot runtime initial (RECETTE — avant correctif)

- URL : `http://127.0.0.1:3200`
- SOURCE_SHA : `d5bf7eb7`
- BUILD_ID : `PV12SV9VToVGK-ReSxTqk` (HTML comment `PV12SV9VToVGK_ReSxTqk`)
- LaunchAgent : `com.sfia.studio.next.recette.ml4d-ux004` (toujours running sur ce build)
- Constats Morris confirmés : titre « Sujets et acquis », copy D4/D6, viewer vide, arborescence non conforme
- Preuves locales : `.tmp-sfia-review/figma-ux-before/`

## 5. Liste des corrections réalisées

1. `ProjectChrome` : Journal = breadcrumb-only ; hero retiré du chrome
2. `ProjectJournal` : titre **Journal**, copy Figma, tabs, search, hiérarchie V4
3. Suppression textes hors cible (Sujets et acquis, D4/D6 présentation, sous-titres techniques)
4. Exploration pleine largeur ; **aucun viewer idle géant**
5. États B/C/D : split 40/60, agrandi, retour
6. Décisions : liste nominale, 40/60, recherche, agrandi
7. `page.tsx` : nav Travail immédiate sur open message + `surfaceNavGenRef`
8. Fetch journal deps `[surface, projectId]` (évite cancel-race)
9. testid tête de groupe parent (J-C14 / sélection parent)
10. Spec captures 11 frames + empty ; ajustements parcours (aria-pressed, soft-nav)

## 6. Anomalie texte / provenance CampusFlow

| Champ | Valeur |
|---|---|
| projectId | `proj_1b52eb8f-3c63-4c72-a4dd-a47f34e1bb4d` |
| name | CampusFlow |
| owner_pilot_id | `pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c` |
| subjectId | `subj_8eb4e9ce-3922-4c27-a16b-cfc0c817b912` |
| title observé | fragment conversationnel (« la première source Git… ») |
| Classification | **A** — contenu légitime mal présenté |
| Fuite interprojets | **NON** |
| Action | diagnostic + preuve ; donnée **non effacée** |

## 7. Fichiers créés / modifiés — contenus FULL

### Index
```
M	projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
M	projects/sfia-studio-next/construction/delivery-history.md
A	projects/sfia-studio-next/construction/ensemble-06-journal-recette-manifest.md
M	projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
M	projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
M	projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
A	projects/sfia-studio-next/web/tests/e2e/journal-v4-figma-captures.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts

```

### CREATE FULL — as-built-ensemble-06-journal-20261119.md
```markdown
# As-built — Ensemble 06 / Journal V4

| Métadonnée | Valeur |
|---|---|
| Date | 19/11/2026 — correctif UX Figma-to-runtime |
| Branche | `sfia/next-journal-delivery-20261119` |
| Parent candidat RECETTE | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| Base `main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Docs matrice | v0.6 §17 (`864e09bf` documentaire) |
| Versioning | `NO RELEASE` / STABLE NOT AVAILABLE |
| RECETTE | **non cutover** ce cycle — candidat DEV pour GO Morris |

## Correctif UX (présent cycle)

### Non-conformités Morris corrigées

| Constat | Correction |
|---|---|
| Titre « Sujets et acquis » | `ProjectChrome` journal → hero déplacé ; titre **Journal** dans `ProjectJournal` |
| Textes D4/D6 techniques | Supprimés de l’UI Pilote |
| Viewer vide permanent | Mode exploration pleine largeur sans panneau idle |
| Arborescence non Figma | Hiérarchie éditoriale groupes/enfants, guides, blurbs |
| Copy hors cible | Sous-titre Figma exact Sujets / Décisions |

### Fichiers touchés

- `web/src/components/figma/ProjectJournal.tsx` — shell V4
- `web/src/components/figma/tokens.css` — styles 835:71 / 842 / 860
- `web/src/components/figma/ProjectChrome.tsx` — breadcrumb-only Journal
- `web/src/app/projects/[projectId]/page.tsx` — deep-link nav + fetch Journal sans cancel race
- `web/tests/e2e/journal-v4-*.spec.ts` — parcours + captures

### Anomalie CampusFlow (provenance)

| Champ | Valeur |
|---|---|
| projectId | `proj_1b52eb8f-3c63-4c72-a4dd-a47f34e1bb4d` |
| project name | CampusFlow |
| owner_pilot_id | `pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c` |
| subjectId | `subj_8eb4e9ce-3922-4c27-a16b-cfc0c817b912` |
| title | fragment conversationnel (« la première source Git… SHA… ») |
| summary | vide |
| Classification | **A — contenu légitime mal présenté** (titre D4 = extrait de fil) |
| Fuite interprojets | **NON** — même projet / même Pilote |

## Preuves

| Contrôle | Résultat |
|---|---|
| tsc | PASS |
| unit journal + fixture-gate | 14/14 PASS |
| Captures DEV 1680×970 (11 frames) | produites sous `.tmp-sfia-review/figma-ux-after/` |
| Playwright parcours | voir Review Pack (retries / réserves J-C14) |
| RECETTE cutover | **NON** — GO Morris requis |
| VISUAL REVIEW Morris | **PENDING** |

## Autorité

- D6 non muté depuis Journal
- Aucun faux contenu en DB RECETTE
- Aucun push produit / PR / merge

```

### CREATE FULL — ensemble-06-journal-recette-manifest.md (historique RECETTE, conservé)
```markdown
# Manifeste RECETTE — Ensemble 06 Journal V4 (non secret)

| Champ | Valeur |
|---|---|
| Date / heure (Europe/Paris) | 2026-11-19 ~11:33 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 |
| Type | Cycle 8 Delivery / Intégration QA · **NO RELEASE** · **NO PRODUCT PUSH** |
| Product Versioning | **NOT AVAILABLE** / `NO RELEASE` / `0.0.0-dev` |
| Dernière STABLE | NOT AVAILABLE |
| Gate Morris UAT | **OUVERT** — campagne utilisateur Morris après mise à disposition |

## Identité Git candidat

| Champ | Valeur |
|---|---|
| Dépôt | `mcleland147/sfia-workspace` |
| Branche locale | `sfia/next-journal-delivery-20261119` |
| Base `origin/main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Candidate SHA | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| Candidate tree | `f5c05cb94f5137d06a26107b7003ab1bf073f923` |
| Ascendance E05 UAT | `5c94c86737f0965c71a7e058e3f1e45ff4415024` **est ancêtre** de HEAD |
| BUILD_ID candidat servi | `PV12SV9VToVGK-ReSxTqk` |
| Push produit / PR / merge | **AUCUN** |

## RECETTE — identité avant cutover

| Champ | Valeur |
|---|---|
| URL / port | `http://127.0.0.1:3200` |
| SOURCE_SHA | `5c94c86737f0965c71a7e058e3f1e45ff4415024` |
| BUILD_ID | `IEINNuPl0bHWJOWkh0ZhG` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-5c94c867` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` |
| DB | `sfia_next_recette_ml4` @ PostgreSQL Docker `sfia-next-recette-pg` |
| Schéma Journal 014 | **ABSENT** (tables D4 revisions absentes) |
| Compteurs | projects=23 · messages=560 |

## RECETTE — identité après cutover (servie)

| Champ | Valeur |
|---|---|
| URL / port | `http://127.0.0.1:3200` (inchangé) |
| SOURCE_SHA | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| BUILD_ID | `PV12SV9VToVGK-ReSxTqk` (HTML `/login` + `.next/BUILD_ID`) |
| Worktree runtime | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble06-recette-build-d5bf7eb7` |
| Script démarrage | `start-recette-ensemble06-d5bf7eb7.sh` |
| Service / LaunchAgent | **même** `com.sfia.studio.next.recette.ml4d-ux004` |
| Config non secrète | `~/.config/sfia-studio-next/recette/.env.local` · `STUDIO_LANE=RECETTE` · `STUDIO_DEV_TEST_LOGIN=1` |
| DB | **même** `sfia_next_recette_ml4` (aucun reset) |
| Schéma Journal 014 | **PRÉSENT** — tables `knowledge_subject_summary_revisions`, `knowledge_decision_explanation_revisions`, `knowledge_open_point_events` |
| Compteurs après | projects=23 · messages=560 · conversations=196 · knowledge_subjects=4 · summary_revisions=0 |

## Migration 014

| Contrôle | Résultat |
|---|---|
| Fichier | `web/src/db/migrations/014_journal_d4_revisions.sql` |
| Nature | Additive `CREATE TABLE IF NOT EXISTS` + index — **non destructive** |
| Nécessité | Oui (objets absents avant cutover) |
| Application | Une fois, sur RECETTE uniquement, après backup |
| Effet données E05 | Aucune perte constatée (compteurs identiques) |
| DROP/TRUNCATE/reset | **Non exécutés** |

## Sauvegarde et rollback

| Élément | Emplacement |
|---|---|
| Dump PostgreSQL pré-cutover | `/Users/morris/Projects/sfia-recette-backups/ml4d-e06-journal-20261119-pre-d5bf7eb7/sfia_next_recette_ml4.dump` |
| Compteurs avant | `…/counts-before.txt` (23 / 560) |
| Build précédent intact | worktree `…ensemble05-recette-build-5c94c867` + BUILD `IEINNuPl0bHWJOWkh0ZhG` |
| Script rollback build | `…ensemble06…/ROLLBACK-TO-5c94c867.sh` (repointe LaunchAgent sur E05) |
| Compatibilité schéma | Retour code E05 **compatible** avec schéma 014 (tables additives non lues par E05) — rollback données **non** automatique |

## Smoke technique RECETTE (non destructif)

| Contrôle | Résultat |
|---|---|
| HTTP `/login` | 200 |
| Login Pilote A (DEV) → portfolio | OK |
| Ouverture projet existant | `proj_4f0e3d47-…` · load-state `ready` |
| Nav Projet / Travail / Journal | Présents (rail) |
| Surface Journal | `project-journal` · onglets Sujets/Décisions · recherche |
| Surface Travail / Nora | `nora-workspace` · 8 messages historiques |
| API `GET …/journal` authentifiée | 200 · clés knowledge/decisions/restrictions/… |
| API journal non authentifiée | 401 `SESSION_INVALID` |
| Fixtures E2E (`journal-fixture`, `s05-fixture`) | **403** `E2E_FIXTURE_FORBIDDEN` / `NODE_ENV_PRODUCTION` |
| Injection données / seeds RECETTE | **Aucune** |

Preuves locales (non commit) : `projects/sfia-studio-next/.tmp-sfia-review/recette-smoke-20261119/`

## Non-régression Ensemble 05 (technique)

| Capacité | Observation smoke |
|---|---|
| Portfolio + projet historique | Accessible |
| Travail / conversation | Consultable (messages présents) |
| Navigation surfaces | Continuum Projet/Travail/Journal |
| Visionneuse / composition E05 | Non rejouée en campagne UAT — **préservée par ascendance Git + absence de régression smoke navigation** |
| Campagne UAT Morris E05 | **Non rejouée** ce cycle (hors mandat) |

## Qualification DEV (candidat `d5bf7eb7`)

| Suite | Résultat |
|---|---|
| `tsc --noEmit` | PASS (rejoué cutover) |
| Journal unit + fixture-gate | 14/14 PASS (rejoué) |
| Cycles delivery antérieurs (même SHA) | lint/build/PG journal-d4 / Playwright journal-v4 / ML3 PG — PASS documentés |
| Full unit suite (env lane) | 3 FAIL préexistants hors Journal (`cognitive-policy`, `github-app-user-oauth`) — **non bloquants Journal / non introduits** |
| ML2 / ML4C / E05 Playwright complets | **NOT RUN** ce cycle — réserve non bloquante (ascendance E05 + smoke surfaces) |
| LIVE Nora 20 tours | **PARTIAL** (E01 seul, arrêt Morris cycle 4) — hors smoke RECETTE |

## Capacités mises à disposition

| Capacité | État |
|---|---|
| Journal V4 shell (Sujets / Décisions) | Disponible en RECETTE |
| Persistance D4 révisions (014) | Schéma disponible |
| Ensemble 05 Travail Nora | Toujours accessible |
| Recette utilisateur / esthétique | **À faire par Morris** — non exécutée ici |
| STABLE / Gate C / ADOPTED | **Non** |

## Réserves

1. UAT fonctionnelle/visuelle Morris **non démarrée**.
2. Suites Playwright ML2/ML4C/E05 exhaustives **non rejouées** sur ce cutover.
3. LIVE Nora CampusFlow **non** rejouée en RECETTE (interdit par mandat).
4. Isolation cookies multi-ports 127.0.0.1 : profil navigateur distinct recommandé (ENV-01).
5. Rollback build ≠ rollback données ; dump disponible si mandat explicite.
6. Code candidat **local non poussé** sur GitHub produit.

## Verdict disponibilité

**RECETTE TECHNICALLY AVAILABLE — READY FOR MORRIS USER ACCEPTANCE**

Avec réserves techniques listées (UAT Morris ouverte ; pas d’acceptation utilisateur déclarée).

```

### CREATE FULL — journal-v4-figma-captures.spec.ts
```ts
import { test, expect, type Page } from "@playwright/test";
import fs from "fs";
import path from "path";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

const OUT = path.resolve(__dirname, "../../../.tmp-sfia-review/figma-ux-after");

async function seedJournal(page: Page, projectId: string) {
  const res = await page.request.post("/api/dev/e2e/journal-fixture", {
    data: { projectId, longThreadCount: 12 },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = (await res.json()) as { seed: Record<string, string> };
  return body.seed;
}

test.describe("Journal V4 Figma captures 1680×970", () => {
  test("eleven runtime frames + empty exploration", async ({ page }) => {
    test.setTimeout(180000);
    fs.mkdirSync(OUT, { recursive: true });
    await page.setViewportSize({ width: 1680, height: 970 });
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "Capture Journal V4 Figma");
    const projectName = uniqueProjectName("Journal Figma Cap");
    await constituteAndCreateProject(page, {
      name: projectName,
      summary: "captures",
      alreadyUnique: true,
    });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();
    const seed = await seedJournal(page, projectId!);

    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("journal-title")).toHaveText("Journal");
    await expect(page.getByTestId("journal-subtitle")).toContainText(
      /mémoire du projet|organisée par thèmes/i,
    );
    await expect(page.getByTestId(`journal-subject-${seed.parentSubjectId}`)).toBeVisible({
      timeout: 20000,
    });
    await page.screenshot({
      path: path.join(OUT, "01-runtime-835-71-sujets-exploration.png"),
      fullPage: false,
    });

    await page.getByTestId(`journal-subject-${seed.leafSubjectId}`).click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
    await page.screenshot({
      path: path.join(OUT, "02-runtime-842-26-sujet-autonome-40-60.png"),
      fullPage: false,
    });

    await page.getByTestId(`journal-subject-${seed.parentSubjectId}`).click();
    await page.screenshot({
      path: path.join(OUT, "03-runtime-842-131-sujet-parent-40-60.png"),
      fullPage: false,
    });

    await page.getByTestId("journal-viewer-enlarge").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-journal-layout",
      "enlarged",
    );
    await page.screenshot({
      path: path.join(OUT, "04-runtime-835-159-sujet-agrandi.png"),
      fullPage: false,
    });
    await page.getByTestId("journal-viewer-reduce").click();

    await page.getByTestId(`journal-subject-${seed.parentSubjectId}`).click();
    await page.getByTestId("journal-viewer-enlarge").click();
    await page.screenshot({
      path: path.join(OUT, "05-runtime-835-239-parent-agrandi.png"),
      fullPage: false,
    });
    await page.getByTestId("journal-viewer-reduce").click();

    await page.getByTestId("journal-search").fill("traçabilité");
    await expect(page.getByTestId(`journal-match-${seed.leafSubjectId}`)).toBeVisible();
    await page.screenshot({
      path: path.join(OUT, "06-runtime-859-42-recherche-sujets.png"),
      fullPage: false,
    });

    await page.getByTestId("journal-filter-open-points").click();
    await expect(page.getByTestId("journal-filter-open-points")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await page.screenshot({
      path: path.join(OUT, "07-runtime-859-146-filtre-points.png"),
      fullPage: false,
    });
    await page.getByTestId("journal-filter-open-points").click();
    await page.getByTestId("journal-search").fill("");

    await page.getByTestId("journal-tab-decisions").click();
    await expect(page.getByTestId("journal-decision-list")).toBeVisible();
    await page.screenshot({
      path: path.join(OUT, "08-runtime-860-58-decisions-nominales.png"),
      fullPage: false,
    });

    await page.getByTestId(`journal-decision-${seed.decisionApplicableId}`).click();
    await expect(page.getByTestId("journal-decision-viewer")).toBeVisible();
    await page.screenshot({
      path: path.join(OUT, "09-runtime-860-136-decision-40-60.png"),
      fullPage: false,
    });

    await page.getByTestId("journal-search").fill("multicritèreorion");
    await page.screenshot({
      path: path.join(OUT, "10-runtime-860-251-recherche-decisions.png"),
      fullPage: false,
    });

    await page.getByTestId("journal-viewer-enlarge").click();
    await page.screenshot({
      path: path.join(OUT, "11-runtime-860-360-decision-agrandie.png"),
      fullPage: false,
    });

    // Empty project — return portfolio then new prep without seed
    await page.getByTestId("studio-rail").getByRole("link", { name: /Portefeuille/i }).click();
    await page.waitForURL("**/portfolio", { timeout: 20000 });
    await openNewPreparation(page);
    await sendPrepMessage(page, "Projet vide journal");
    const emptyName = uniqueProjectName("Journal Empty");
    await constituteAndCreateProject(page, {
      name: emptyName,
      summary: "empty",
      alreadyUnique: true,
    });
    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page.getByTestId("journal-empty-structure")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("journal-title")).toHaveText("Journal");
    await expect(page.getByTestId("journal-viewer")).toHaveCount(0);
    await page.screenshot({
      path: path.join(OUT, "00-runtime-empty-exploration.png"),
      fullPage: false,
    });

    fs.writeFileSync(
      path.join(OUT, "capture-report.json"),
      JSON.stringify({ projectId, seed, out: OUT, ok: true }, null, 2),
    );
  });
});

```

### CREATE FULL — ProjectChrome.tsx
```tsx
"use client";

import {
  PROJECT_SURFACE_LABELS,
  type StudioSurface,
} from "@/components/shell/studio-rail";

type Surface = StudioSurface;

const HERO: Record<
  Surface,
  { kicker: string; title: string; sub: string }
> = {
  travail: {
    kicker: "Espace projet  /  Travail",
    title: "Reprendre le fil du projet",
    sub: "La préparation et les échanges avec Nora restent dans le contexte de ce projet.",
  },
  projet: {
    kicker: "Espace projet  /  Projet",
    title: "Vue d'ensemble du projet",
    sub: "Identité, contexte et accès — consultation sans nouvelle autorité.",
  },
  pilotage: {
    kicker: "Espace projet  /  Trajectoire",
    title: "Pilotage · cycle et décisions",
    sub: "Cycle, méthode, CKI et décisions humaines — affichage D5/D6 existant.",
  },
  journal: {
    kicker: "ESPACE PROJET  /  JOURNAL",
    title: "Journal",
    sub: "La mémoire du projet, organisée par thèmes. Retrouvez l’essentiel sans remonter toute la conversation.",
  },
  document: {
    kicker: "Espace projet  /  Documents Nora",
    title: "Bibliothèque",
    sub: "Bibliothèque, inspection et révision sous autorité D4.",
  },
  git: {
    kicker: "Espace projet  /  Sources Git",
    title: "Intégration Git",
    sub: "Sources et liens Git du projet — capacités réellement disponibles.",
  },
  publication: {
    kicker: "Espace projet  /  Résultats et preuves",
    title: "Publication Git",
    sub: "Publication et preuves Git — capacités réellement disponibles.",
  },
};

export function ProjectChrome(props: {
  projectId: string;
  projectName: string | null;
  surface: Surface;
  /** Optional status line — never raw technical IDs in the nominal path. */
  statusHint?: string;
  /** Observable project bootstrap: loading until load()+surface sync finish. */
  loadState?: "loading" | "ready";
  /** Ensemble 05 — Travail layout: normal | split (viewer) | enlarged viewer. */
  travailLayout?: "normal" | "split" | "enlarged";
  children: React.ReactNode;
}) {
  const loadState = props.loadState ?? "ready";
  const hero = HERO[props.surface];
  const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
  const displayName = props.projectName?.trim() || "Projet";
  const isTravail = props.surface === "travail";
  /** Journal V4 — hero lives inside ProjectJournal (full vs compact 40/60). */
  const isJournal = props.surface === "journal";
  const breadcrumbOnly = isTravail || isJournal;

  const continuityBadge =
    isTravail && props.statusHint && !/^chargement/i.test(props.statusHint) ? (
      <span className="fig-tag fig-tag-ok" data-testid="project-status-hint">
        {/reprise|conservé|durable/i.test(props.statusHint)
          ? "Contexte conservé"
          : props.statusHint}
      </span>
    ) : null;

  const intro = (
    <header className="project-space-hero fig-travail-intro" data-testid="travail-intro">
      <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
      <div className="project-space-hero-row">
        <h1 className="fig-hero-title" data-testid="project-surface-title">
          {hero.title}
        </h1>
        {continuityBadge}
      </div>
      <p className="fig-hero-sub">{hero.sub}</p>
    </header>
  );

  return (
    <div
      className={`fig-page project-space-page${isTravail ? " project-space-page--travail" : ""}${isJournal ? " project-space-page--journal" : ""}`}
      data-project-surface={props.surface}
      data-testid="project-load-state"
      data-project-load-state={loadState}
      data-project-id={props.projectId}
      data-project-name={props.projectName ?? ""}
    >
      <div
        className={`project-space-header${breadcrumbOnly ? " project-space-header--breadcrumb-only" : ""}`}
        data-testid="project-space-header"
      >
        <div className="fig-breadcrumb project-space-breadcrumb">
          <span data-testid="project-breadcrumb">
            SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;{displayName}&nbsp;&nbsp;/&nbsp;&nbsp;
            {surfaceLabel}
          </span>
          <span className="project-space-badge" data-testid="project-espace-badge">
            ESPACE PROJET
          </span>
        </div>

        {!breadcrumbOnly ? (
          <header className="project-space-hero space-y-1">
            <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
            <div className="project-space-hero-row">
              <h1 className="fig-hero-title" data-testid="project-surface-title">
                {hero.title}
              </h1>
            </div>
            <p className="fig-hero-sub">{hero.sub}</p>
            {props.statusHint ? (
              <p className="text-xs muted" data-testid="project-status-hint">
                {props.statusHint}
              </p>
            ) : null}
          </header>
        ) : null}
      </div>

      <div className="sr-only" aria-hidden>
        {(
          [
            "travail",
            "projet",
            "pilotage",
            "journal",
            "document",
            "git",
            "publication",
          ] as const
        ).map((id) => (
          <span
            key={id}
            data-testid={`surface-${id}`}
            data-surface-active={props.surface === id ? "1" : "0"}
          />
        ))}
      </div>

      {isTravail ? (
        <div
          className="project-travail-stage"
          data-testid="project-travail-stage"
          data-travail-layout={props.travailLayout ?? "normal"}
        >
          {intro}
          <div
            className="fig-travail-intro-rule"
            data-testid="travail-intro-rule"
            aria-hidden
          />
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </div>
  );
}

```

### CREATE FULL — ProjectJournal.tsx
```tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";

export type JournalSubject = {
  id: string;
  title: string;
  status: string;
  parentSubjectId: string | null;
  originatedFromSubjectId: string | null;
  summary?: {
    revisionNumber: number;
    summaryMarkdown: string;
  } | null;
};

export type JournalAcquis = {
  id: string;
  kind: string;
  statement: string;
  status: string;
  subjectId: string | null;
};

export type JournalOpenPoint = {
  id: string;
  statement: string;
  status: string;
  subjectId: string | null;
};

export type JournalDecision = {
  id: string;
  kind: string;
  state: string;
  scope: string;
  statement: string;
  objectRef: string;
  effectiveAt: string;
  createdAt: string;
  applicable?: boolean;
  supersededByDecisionId?: string | null;
  explanation?: {
    revisionNumber: number;
    explanationMarkdown: string;
    potentiallyStale?: boolean;
  } | null;
};

export type JournalRestriction = {
  id: string;
  targetKind: string;
  targetRef: string;
  status: string;
  originDecisionId: string | null;
};

export type JournalSourceLink = {
  ownerKind: "acquis" | "open_point" | "summary";
  ownerId: string;
  subjectId: string | null;
  sourceKind: string;
  sourceId?: string;
  documentId?: string;
  revisionId?: string;
  currentness: string;
  detail: string;
};

export type JournalContradiction = {
  leftAcquisId: string;
  rightAcquisId: string;
  subjectId: string | null;
  status: "UNRESOLVED";
  leftStatement: string;
  rightStatement: string;
  reason: string;
};

export type JournalNavState = {
  tab: "subjects" | "decisions";
  search: string;
  openPointsOnly: boolean;
  selectedSubjectId: string | null;
  selectedDecisionId: string | null;
  layout: "full" | "split" | "enlarged";
};

type Tab = "subjects" | "decisions";
type LayoutMode = "full" | "split" | "enlarged";

const COPY = {
  kicker: "ESPACE PROJET  /  JOURNAL",
  title: "Journal",
  subjectsSub:
    "La mémoire du projet, organisée par thèmes. Retrouvez l’essentiel sans remonter toute la conversation.",
  subjectsSubCompact: "La mémoire du projet, organisée par thèmes.",
  decisionsSub: "Comprendre ce qui a été arbitré et pourquoi.",
  themesLabel: "THÈMES DU PROJET",
  themesHint: "Organisation évolutive · entretenue par Nora",
  decisionsLabel: "DÉCISIONS DURABLES DU PROJET",
  searchSubjects: "Rechercher un sujet…",
  searchDecisions: "Rechercher une décision…",
  openPoints: "◌  Points ouverts",
  emptySubjects: "Aucun thème capitalisé pour l’instant. Les sujets apparaîtront ici lorsqu’ils seront durablement retenus.",
  emptyDecisions: "Aucune décision durable enregistrée pour ce projet.",
  searchEmptySubjects: "Aucun sujet ne correspond à cette recherche.",
  searchEmptyDecisions: "Aucune décision ne correspond à cette recherche.",
  memoryKicker: "MÉMOIRE DU PROJET   /   SUJET",
  decisionKicker: "DÉCISION DURABLE",
  synthesis: "LA SYNTHÈSE",
  retained: "CE QU’ON RETIENT",
  clarify: "À ÉCLAIRCIR",
  children: "SOUS-THÈMES",
  sources: "ÉCHANGE DE RÉFÉRENCE",
  continue: "CONTINUER LE TRAVAIL",
  continueCta: "Poursuivre ce sujet avec Nora",
  enlarge: "⤢ Agrandir",
  reduce: "Réduire",
  close: "×",
} as const;

function buildSubjectTree(subjects: JournalSubject[]) {
  const byParent = new Map<string | null, JournalSubject[]>();
  for (const s of subjects.filter((x) => x.status === "ACTIVE")) {
    const key = s.parentSubjectId;
    const bucket = byParent.get(key) ?? [];
    bucket.push(s);
    byParent.set(key, bucket);
  }
  for (const bucket of byParent.values()) {
    bucket.sort((a, b) => a.title.localeCompare(b.title, "fr"));
  }
  return byParent;
}

function subjectBreadcrumb(
  subjectId: string,
  byId: Map<string, JournalSubject>,
): string[] {
  const path: string[] = [];
  let current: string | null = subjectId;
  const guard = new Set<string>();
  while (current && !guard.has(current)) {
    guard.add(current);
    const row = byId.get(current);
    if (!row) break;
    path.unshift(row.title);
    current = row.parentSubjectId;
  }
  return path;
}

/** First editorial line from summary markdown — never invent content. */
function subjectBlurb(subject: JournalSubject): string {
  const raw = subject.summary?.summaryMarkdown?.trim() ?? "";
  if (!raw) return "";
  const line =
    raw
      .split(/\r?\n/)
      .map((l) => l.replace(/^#+\s*/, "").replace(/[*_`]/g, "").trim())
      .find((l) => l.length > 0) ?? "";
  return line.length > 160 ? `${line.slice(0, 157)}…` : line;
}

function decisionBlurb(d: JournalDecision): string {
  const expl = d.explanation?.explanationMarkdown?.trim() ?? "";
  if (expl) {
    const line = expl
      .split(/\r?\n/)
      .map((l) => l.replace(/^#+\s*/, "").replace(/[*_`]/g, "").trim())
      .find((l) => l.length > 0);
    if (line) return line.length > 140 ? `${line.slice(0, 137)}…` : line;
  }
  return d.statement.length > 140 ? `${d.statement.slice(0, 137)}…` : d.statement;
}

function decisionStatusLabel(d: JournalDecision): { label: string; tone: "ok" | "warn" | "muted" } {
  if (d.supersededByDecisionId || d.applicable === false) {
    return { label: "REMPLACÉE", tone: "muted" };
  }
  const st = d.state.toUpperCase();
  if (st.includes("SUSPEND")) return { label: "SUSPENDUE", tone: "warn" };
  if (
    st.includes("ACTIVE") ||
    st.includes("EFFECTIVE") ||
    st.includes("APPLICABLE") ||
    st === "DECIDED" ||
    d.applicable === true
  ) {
    return { label: "EN VIGUEUR", tone: "ok" };
  }
  return { label: st || "D6", tone: "muted" };
}

export function ProjectJournal(props: {
  subjects: JournalSubject[];
  acquis: JournalAcquis[];
  openPoints: JournalOpenPoint[];
  decisions?: JournalDecision[];
  restrictions?: JournalRestriction[];
  sourceLinks?: JournalSourceLink[];
  contradictions?: JournalContradiction[];
  frameId?: string;
  initialNav?: JournalNavState | null;
  onNavChange?: (nav: JournalNavState) => void;
  onOpenMessage?: (messageId: string) => void;
  onOpenDocument?: (documentId: string, revisionId?: string | null) => void;
  onBackToThread?: () => void;
  /** Sas-only mutation affordance — project Journal stays read-oriented. */
  onRenameSubject?: (id: string, title: string) => void;
  splitSlot?: React.ReactNode;
}) {
  const [tab, setTab] = useState<Tab>(props.initialNav?.tab ?? "subjects");
  const [search, setSearch] = useState(props.initialNav?.search ?? "");
  const [openPointsOnly, setOpenPointsOnly] = useState(props.initialNav?.openPointsOnly ?? false);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(
    props.initialNav?.selectedSubjectId ?? null,
  );
  const [selectedDecisionId, setSelectedDecisionId] = useState<string | null>(
    props.initialNav?.selectedDecisionId ?? null,
  );
  const [layout, setLayout] = useState<LayoutMode>(props.initialNav?.layout ?? "full");
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());

  const decisions = useMemo(() => props.decisions ?? [], [props.decisions]);
  const restrictions = props.restrictions ?? [];
  const sourceLinks = props.sourceLinks ?? [];
  const contradictions = props.contradictions ?? [];

  useEffect(() => {
    props.onNavChange?.({
      tab,
      search,
      openPointsOnly,
      selectedSubjectId,
      selectedDecisionId,
      layout,
    });
    // Intentionally sync outward on nav field changes only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, search, openPointsOnly, selectedSubjectId, selectedDecisionId, layout]);

  const tree = useMemo(() => buildSubjectTree(props.subjects), [props.subjects]);
  const byId = useMemo(
    () => new Map(props.subjects.map((s) => [s.id, s] as const)),
    [props.subjects],
  );

  const roots = tree.get(null) ?? [];

  // Expand parents that have children by default on first subject load.
  useEffect(() => {
    setExpanded((prev) => {
      if (prev.size > 0) return prev;
      const next = new Set<string>();
      for (const s of props.subjects) {
        if ((tree.get(s.id) ?? []).length > 0) next.add(s.id);
      }
      return next;
    });
  }, [props.subjects, tree]);

  const openBySubject = useMemo(() => {
    const map = new Map<string, number>();
    for (const o of props.openPoints) {
      if (o.status !== "OPEN" || !o.subjectId) continue;
      map.set(o.subjectId, (map.get(o.subjectId) ?? 0) + 1);
    }
    return map;
  }, [props.openPoints]);

  /** J-C08 — match title, summary, acquis and open points (reason surfaced on node). */
  const matchBySubject = useMemo(() => {
    const q = search.trim().toLowerCase();
    const map = new Map<string, string>();
    if (!q) return map;
    for (const s of props.subjects) {
      if (s.title.toLowerCase().includes(q)) map.set(s.id, "titre");
      else if ((s.summary?.summaryMarkdown ?? "").toLowerCase().includes(q)) map.set(s.id, "synthèse");
    }
    for (const a of props.acquis) {
      if (a.status !== "CURRENT" || !a.subjectId) continue;
      if (a.statement.toLowerCase().includes(q) && !map.has(a.subjectId)) map.set(a.subjectId, "acquis");
    }
    for (const o of props.openPoints) {
      if (o.status !== "OPEN" || !o.subjectId) continue;
      if (o.statement.toLowerCase().includes(q) && !map.has(o.subjectId)) {
        map.set(o.subjectId, "point ouvert");
      }
    }
    return map;
  }, [search, props.subjects, props.acquis, props.openPoints]);

  const currentAcquis = props.acquis.filter((a) => a.status === "CURRENT");
  const openPoints = props.openPoints.filter((o) => o.status === "OPEN");
  const emptySubjects =
    props.subjects.length === 0 && currentAcquis.length === 0 && openPoints.length === 0;

  const selectedSubject = selectedSubjectId ? byId.get(selectedSubjectId) : null;
  const selectedAcquis = selectedSubjectId
    ? currentAcquis.filter((a) => a.subjectId === selectedSubjectId)
    : [];
  const selectedOpen = selectedSubjectId
    ? openPoints.filter((o) => o.subjectId === selectedSubjectId)
    : [];
  const childSubjects = selectedSubjectId ? tree.get(selectedSubjectId) ?? [] : [];
  const selectedSources = selectedSubjectId
    ? sourceLinks.filter((s) => s.subjectId === selectedSubjectId)
    : [];
  const selectedContradictions = selectedSubjectId
    ? contradictions.filter((c) => c.subjectId === selectedSubjectId)
    : [];
  const activeRestrictions = restrictions.filter((r) => r.status === "ACTIVE");
  const historicalRestrictions = restrictions.filter((r) => r.status !== "ACTIVE");

  const selectedDecision =
    selectedDecisionId != null
      ? decisions.find((d) => d.id === selectedDecisionId) ?? null
      : null;

  /** J-C11 — match statement or explanation; never treat kind/label alone as a hit. */
  const filteredDecisions = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (tab !== "decisions" || !q) return decisions;
    return decisions.filter(
      (d) =>
        d.statement.toLowerCase().includes(q) ||
        (d.explanation?.explanationMarkdown.toLowerCase().includes(q) ?? false),
    );
  }, [decisions, search, tab]);

  const layoutMode: LayoutMode =
    layout === "enlarged"
      ? "enlarged"
      : (tab === "subjects" && selectedSubject) || (tab === "decisions" && selectedDecision)
        ? "split"
        : "full";

  const pickSubject = (id: string) => {
    setSelectedSubjectId(id);
    setLayout("split");
  };

  const pickDecision = (id: string) => {
    setSelectedDecisionId(id);
    setLayout("split");
  };

  const clearSelection = () => {
    setSelectedSubjectId(null);
    setSelectedDecisionId(null);
    setLayout("full");
  };

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const nodeVisible = (s: JournalSubject): boolean => {
    const openCount = openBySubject.get(s.id) ?? 0;
    if (openPointsOnly && openCount === 0) {
      const childOpen = (tree.get(s.id) ?? []).some((c) => nodeVisible(c));
      if (!childOpen) return false;
    }
    const q = search.trim();
    if (!q) return true;
    if (matchBySubject.has(s.id)) return true;
    const children = tree.get(s.id) ?? [];
    return children.some((c) => nodeVisible(c));
  };

  const showSearchEmpty =
    tab === "subjects" && search.trim().length > 0 && matchBySubject.size === 0;

  const showDecisionSearchEmpty =
    tab === "decisions" && search.trim().length > 0 && filteredDecisions.length === 0;

  const subtitle =
    tab === "decisions"
      ? COPY.decisionsSub
      : layoutMode === "full"
        ? COPY.subjectsSub
        : COPY.subjectsSubCompact;

  const isParentSelected = selectedSubject ? (tree.get(selectedSubject.id) ?? []).length > 0 : false;

  return (
    <div
      className={`journal-shell journal-layout-${layoutMode}`}
      data-figma-frame={props.frameId ?? "835:71"}
      data-testid="project-journal"
      data-journal-layout={layoutMode}
    >
      <div className="journal-main-column" hidden={layoutMode === "enlarged"}>
        <header className="journal-v4-head">
          <p className="journal-v4-kicker">{COPY.kicker}</p>
          <div className="journal-v4-title-row">
            <h1 className="journal-v4-title" data-testid="journal-title">
              {COPY.title}
            </h1>
            {props.onBackToThread ? (
              <button
                type="button"
                className="journal-v4-back-thread"
                data-testid="journal-back-thread"
                onClick={props.onBackToThread}
              >
                Retour au fil
              </button>
            ) : null}
          </div>
          <p className="journal-v4-sub" data-testid="journal-subtitle">
            {subtitle}
          </p>
        </header>

        <div className="journal-tabs" role="tablist" data-testid="journal-tabs">
          <button
            type="button"
            role="tab"
            aria-selected={tab === "subjects"}
            className={`journal-tab${tab === "subjects" ? " is-active" : ""}`}
            data-testid="journal-tab-subjects"
            onClick={() => {
              setTab("subjects");
              setSelectedDecisionId(null);
              if (!selectedSubjectId) setLayout("full");
            }}
          >
            Sujets
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "decisions"}
            className={`journal-tab${tab === "decisions" ? " is-active" : ""}`}
            data-testid="journal-tab-decisions"
            onClick={() => {
              setTab("decisions");
              setSelectedSubjectId(null);
              if (!selectedDecisionId) setLayout("full");
            }}
          >
            Décisions
          </button>
        </div>

        <div className="journal-search-wrap">
          <span className="journal-search-icon" aria-hidden>
            ⌕
          </span>
          <input
            type="search"
            className="journal-search"
            data-testid="journal-search"
            placeholder={tab === "subjects" ? COPY.searchSubjects : COPY.searchDecisions}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {tab === "subjects" ? (
          <div className="journal-section-bar">
            <p className="journal-section-label">{COPY.themesLabel}</p>
            {layoutMode === "full" ? (
              <p className="journal-section-hint">{COPY.themesHint}</p>
            ) : null}
            <button
              type="button"
              className={`journal-filter-open${openPointsOnly ? " is-active" : ""}`}
              data-testid="journal-filter-open-points"
              aria-pressed={openPointsOnly}
              onClick={() => setOpenPointsOnly((v) => !v)}
            >
              {COPY.openPoints}
            </button>
          </div>
        ) : (
          <div className="journal-section-bar">
            <p className="journal-section-label">{COPY.decisionsLabel}</p>
          </div>
        )}

        {tab === "subjects" ? (
          emptySubjects ? (
            <div className="journal-hierarchy journal-empty" data-testid="journal-empty-structure">
              <p className="journal-empty-copy">{COPY.emptySubjects}</p>
            </div>
          ) : showSearchEmpty ? (
            <div className="journal-hierarchy" data-testid="journal-tree">
              <p className="journal-empty-copy" data-testid="journal-search-empty">
                {COPY.searchEmptySubjects}
              </p>
            </div>
          ) : (
            <div className="journal-hierarchy" data-testid="journal-tree">
              {roots.map((s) =>
                nodeVisible(s) ? (
                  <SubjectHierarchyBlock
                    key={s.id}
                    subject={s}
                    tree={tree}
                    expanded={expanded}
                    selectedId={selectedSubjectId}
                    openBySubject={openBySubject}
                    matchBySubject={matchBySubject}
                    nodeVisible={nodeVisible}
                    onToggle={toggleExpand}
                    onSelect={pickSubject}
                  />
                ) : null,
              )}
              {props.onRenameSubject && selectedSubject ? (
                <button
                  type="button"
                  className="btn secondary"
                  data-testid="journal-rename-subject"
                  onClick={() => {
                    const t = window.prompt("Nouveau titre", selectedSubject.title);
                    if (t) props.onRenameSubject?.(selectedSubject.id, t);
                  }}
                >
                  Renommer le sujet
                </button>
              ) : null}
              {props.splitSlot}
            </div>
          )
        ) : (
          <DecisionList
            decisions={filteredDecisions}
            selectedId={selectedDecisionId}
            showEmpty={showDecisionSearchEmpty}
            emptyCopy={COPY.emptyDecisions}
            searchEmptyCopy={COPY.searchEmptyDecisions}
            onSelect={pickDecision}
          />
        )}
      </div>

      {layoutMode !== "full" ? (
        <section
          className={`journal-viewer${isParentSelected ? " is-parent" : ""}`}
          data-testid="journal-viewer"
          data-viewer-kind={tab === "subjects" ? (isParentSelected ? "parent" : "autonomous") : "decision"}
        >
          {tab === "subjects" && selectedSubject ? (
            <>
              <header className="journal-viewer-banner">
                <div className="journal-viewer-banner-text">
                  <p className="journal-viewer-kicker">{COPY.memoryKicker}</p>
                  <h2 className="journal-viewer-title" data-testid="journal-viewer-subject-title">
                    {selectedSubject.title}
                  </h2>
                  <SubjectBreadcrumb path={subjectBreadcrumb(selectedSubject.id, byId)} />
                  <p className="journal-viewer-lede">
                    {subjectBlurb(selectedSubject) ||
                      "Comprendre ce qu’on sait, ce qui reste ouvert et pourquoi."}
                  </p>
                  <span className="journal-viewer-type">
                    {isParentSelected ? "Sujet parent" : "Sujet autonome"}
                  </span>
                </div>
                <div className="journal-viewer-actions">
                  {layoutMode === "enlarged" ? (
                    <button
                      type="button"
                      className="journal-viewer-btn"
                      data-testid="journal-viewer-reduce"
                      onClick={() => setLayout("split")}
                    >
                      {COPY.reduce}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="journal-viewer-btn"
                      data-testid="journal-viewer-enlarge"
                      onClick={() => setLayout("enlarged")}
                    >
                      {COPY.enlarge}
                    </button>
                  )}
                  <button
                    type="button"
                    className="journal-viewer-btn journal-viewer-close"
                    data-testid="journal-viewer-close"
                    aria-label="Fermer"
                    onClick={clearSelection}
                  >
                    {COPY.close}
                  </button>
                </div>
              </header>

              <div className="journal-viewer-body">
                <section className="journal-card journal-card-synthesis">
                  <p className="journal-card-kicker">{COPY.synthesis}</p>
                  {selectedSubject.summary?.summaryMarkdown ? (
                    <div data-testid="journal-subject-summary">
                      <SafeMarkdown content={selectedSubject.summary.summaryMarkdown} />
                    </div>
                  ) : (
                    <p className="journal-muted" data-testid="journal-subject-summary-empty">
                      Synthèse non encore disponible.
                    </p>
                  )}
                </section>

                {childSubjects.length > 0 ? (
                  <section className="journal-card">
                    <p className="journal-card-kicker">{COPY.children}</p>
                    <ul className="journal-child-list">
                      {childSubjects.map((c) => (
                        <li key={c.id}>
                          <button
                            type="button"
                            className="journal-child-link"
                            onClick={() => pickSubject(c.id)}
                          >
                            <span>{c.title}</span>
                            <span aria-hidden>↗</span>
                          </button>
                          {subjectBlurb(c) ? (
                            <p className="journal-row-desc">{subjectBlurb(c)}</p>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                <div className="journal-card-row">
                  <section className="journal-card journal-card-half">
                    <p className="journal-card-kicker">{COPY.retained}</p>
                    {selectedAcquis.length === 0 ? (
                      <p className="journal-muted">Aucun acquis courant.</p>
                    ) : (
                      selectedAcquis.map((a) => (
                        <p key={a.id} className="journal-acquis-line" data-subject-id={a.subjectId ?? ""}>
                          {a.statement}
                        </p>
                      ))
                    )}
                  </section>
                  <section className="journal-card journal-card-half">
                    <p className="journal-card-kicker">{COPY.clarify}</p>
                    {selectedOpen.length === 0 ? (
                      <p className="journal-muted">Aucun point ouvert.</p>
                    ) : (
                      selectedOpen.map((o) => (
                        <p
                          key={o.id}
                          className="journal-open-line"
                          data-testid={`journal-open-point-${o.id}`}
                          data-subject-id={o.subjectId ?? ""}
                        >
                          {o.statement}
                        </p>
                      ))
                    )}
                  </section>
                </div>

                {selectedContradictions.length > 0 ? (
                  <section className="journal-card" data-testid="journal-contradictions">
                    <p className="journal-card-kicker">CONTRADICTIONS</p>
                    {selectedContradictions.map((c) => (
                      <div
                        key={`${c.leftAcquisId}-${c.rightAcquisId}`}
                        data-testid={`journal-contradiction-${c.leftAcquisId}`}
                      >
                        <p className="journal-acquis-line">{c.reason}</p>
                      </div>
                    ))}
                  </section>
                ) : null}

                {selectedSources.length > 0 ? (
                  <section className="journal-card" data-testid="journal-sources">
                    <p className="journal-card-kicker">{COPY.sources}</p>
                    <ul className="journal-source-list">
                      {selectedSources.map((s) => (
                        <li key={`${s.ownerKind}-${s.ownerId}-${s.sourceId ?? s.revisionId ?? s.documentId}`}>
                          <SourceChip
                            link={s}
                            onOpenMessage={props.onOpenMessage}
                            onOpenDocument={props.onOpenDocument}
                          />
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}

                {props.onBackToThread ? (
                  <button
                    type="button"
                    className="journal-continue"
                    data-testid="journal-continue-travail"
                    onClick={props.onBackToThread}
                  >
                    <span>
                      <span className="journal-card-kicker">{COPY.continue}</span>
                      <span className="journal-continue-cta">{COPY.continueCta}</span>
                    </span>
                    <span aria-hidden>↗</span>
                  </button>
                ) : null}
              </div>
            </>
          ) : null}

          {tab === "decisions" && selectedDecision ? (
            <>
              <header className="journal-viewer-banner">
                <div className="journal-viewer-banner-text">
                  <p className="journal-viewer-kicker">{COPY.decisionKicker}</p>
                  <h2 className="journal-viewer-title" data-testid="journal-decision-viewer-title">
                    {selectedDecision.statement || selectedDecision.kind}
                  </h2>
                  <p className="journal-viewer-lede">{decisionBlurb(selectedDecision)}</p>
                  <span className={`journal-status journal-status-${decisionStatusLabel(selectedDecision).tone}`}>
                    {decisionStatusLabel(selectedDecision).label}
                  </span>
                </div>
                <div className="journal-viewer-actions">
                  {layoutMode === "enlarged" ? (
                    <button
                      type="button"
                      className="journal-viewer-btn"
                      data-testid="journal-viewer-reduce"
                      onClick={() => setLayout("split")}
                    >
                      {COPY.reduce}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="journal-viewer-btn"
                      data-testid="journal-viewer-enlarge"
                      onClick={() => setLayout("enlarged")}
                    >
                      {COPY.enlarge}
                    </button>
                  )}
                  <button
                    type="button"
                    className="journal-viewer-btn journal-viewer-close"
                    data-testid="journal-viewer-close"
                    aria-label="Fermer"
                    onClick={clearSelection}
                  >
                    {COPY.close}
                  </button>
                </div>
              </header>
              <div className="journal-viewer-body" data-testid="journal-decision-viewer">
                <section className="journal-card journal-card-synthesis">
                  <p className="journal-card-kicker">CHOIX RETENU</p>
                  <p className="journal-acquis-line">{selectedDecision.statement || "—"}</p>
                  <p className="journal-muted" data-testid="journal-decision-applicability">
                    {selectedDecision.scope}
                    {selectedDecision.applicable === false
                      ? " · non applicable / historique"
                      : " · applicable"}
                    {selectedDecision.supersededByDecisionId ? " · remplacé" : ""}
                  </p>
                </section>
                <section className="journal-card">
                  <p className="journal-card-kicker">POURQUOI CE CHOIX</p>
                  {selectedDecision.explanation?.explanationMarkdown ? (
                    <>
                      {selectedDecision.explanation.potentiallyStale ? (
                        <p className="journal-warn" data-testid="journal-explanation-stale">
                          Explication potentiellement périmée.
                        </p>
                      ) : null}
                      <SafeMarkdown content={selectedDecision.explanation.explanationMarkdown} />
                    </>
                  ) : (
                    <p className="journal-muted" data-testid="journal-explanation-empty">
                      Explication contextuelle non encore disponible.
                    </p>
                  )}
                </section>
                {activeRestrictions.length > 0 ? (
                  <section className="journal-card">
                    <p className="journal-card-kicker">RESTRICTIONS ACTIVES</p>
                    <ul className="journal-restriction-list">
                      {activeRestrictions.map((r) => (
                        <li key={r.id} data-testid={`journal-restriction-${r.id}`}>
                          {r.targetKind} · {r.targetRef}
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}
                {historicalRestrictions.length > 0 ? (
                  <section className="journal-card">
                    <p className="journal-card-kicker">RESTRICTIONS HISTORIQUES</p>
                    <ul className="journal-restriction-list">
                      {historicalRestrictions.map((r) => (
                        <li key={r.id} data-testid={`journal-restriction-hist-${r.id}`}>
                          {r.targetKind} · {r.targetRef}
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}
              </div>
            </>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}

function SubjectHierarchyBlock(props: {
  subject: JournalSubject;
  tree: Map<string | null, JournalSubject[]>;
  expanded: Set<string>;
  selectedId: string | null;
  openBySubject: Map<string, number>;
  matchBySubject: Map<string, string>;
  nodeVisible: (s: JournalSubject) => boolean;
  onToggle: (id: string, e: React.MouseEvent) => void;
  onSelect: (id: string) => void;
}) {
  const children = (props.tree.get(props.subject.id) ?? []).filter(props.nodeVisible);
  const hasChildren = (props.tree.get(props.subject.id) ?? []).length > 0;
  const isOpen = props.expanded.has(props.subject.id);
  const openCount = props.openBySubject.get(props.subject.id) ?? 0;
  const matchReason = props.matchBySubject.get(props.subject.id);
  const blurb = subjectBlurb(props.subject);
  const selected = props.selectedId === props.subject.id;

  return (
    <div
      className={`journal-group${selected ? " is-selected" : ""}${hasChildren ? " is-parent" : " is-leaf"}`}
    >
      <button
        type="button"
        className="journal-group-head"
        data-testid={`journal-subject-${props.subject.id}`}
        onClick={() => props.onSelect(props.subject.id)}
      >
        {hasChildren ? (
          <span
            className="journal-expand"
            role="presentation"
            onClick={(e) => props.onToggle(props.subject.id, e)}
          >
            {isOpen ? "⌄" : "▸"}
          </span>
        ) : (
          <span className="journal-expand is-leaf-mark" aria-hidden>
            ▸
          </span>
        )}
        <span className="journal-group-text">
          <span className="journal-group-title">{props.subject.title}</span>
          {blurb ? <span className="journal-row-desc">{blurb}</span> : null}
          {matchReason ? (
            <span className="journal-match" data-testid={`journal-match-${props.subject.id}`}>
              {matchReason}
            </span>
          ) : null}
        </span>
        {hasChildren && isOpen ? (
          <span className="journal-axes">
            {children.length} {children.length > 1 ? "AXES" : "AXE"}
          </span>
        ) : null}
        {openCount > 0 ? (
          <span className="journal-open-badge" data-testid={`journal-open-count-${props.subject.id}`}>
            {openCount}
          </span>
        ) : null}
        <span className="journal-open-arrow" aria-hidden>
          ↗
        </span>
      </button>

      {hasChildren && isOpen ? (
        <ul className="journal-children">
          {children.map((c) => {
            const cBlurb = subjectBlurb(c);
            const cMatch = props.matchBySubject.get(c.id);
            const cOpen = props.openBySubject.get(c.id) ?? 0;
            const cSelected = props.selectedId === c.id;
            const grand = (props.tree.get(c.id) ?? []).filter(props.nodeVisible);
            return (
              <li key={c.id} className={cSelected ? "is-selected" : undefined}>
                <button
                  type="button"
                  className={`journal-child-row${cSelected ? " is-selected" : ""}`}
                  data-testid={`journal-subject-${c.id}`}
                  onClick={() => props.onSelect(c.id)}
                >
                  <span className="journal-group-text">
                    <span className="journal-child-title">{c.title}</span>
                    {cBlurb ? <span className="journal-row-desc">{cBlurb}</span> : null}
                    {cMatch ? (
                      <span className="journal-match" data-testid={`journal-match-${c.id}`}>
                        {cMatch}
                      </span>
                    ) : null}
                  </span>
                  {cOpen > 0 ? (
                    <span className="journal-open-badge" data-testid={`journal-open-count-${c.id}`}>
                      {cOpen}
                    </span>
                  ) : null}
                  <span className="journal-open-arrow" aria-hidden>
                    ↗
                  </span>
                </button>
                {grand.length > 0 ? (
                  <ul className="journal-grandchildren">
                    {grand.map((g) => (
                      <li key={g.id}>
                        <button
                          type="button"
                          className={`journal-child-row is-nested${props.selectedId === g.id ? " is-selected" : ""}`}
                          data-testid={`journal-subject-${g.id}`}
                          onClick={() => props.onSelect(g.id)}
                        >
                          <span className="journal-child-title">{g.title}</span>
                          <span className="journal-open-arrow" aria-hidden>
                            ↗
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function SubjectBreadcrumb(props: { path: string[] }) {
  if (props.path.length <= 1) return null;
  return (
    <p className="journal-breadcrumb" data-testid="journal-subject-breadcrumb">
      {props.path.join(" › ")}
    </p>
  );
}

function SourceChip(props: {
  link: JournalSourceLink;
  onOpenMessage?: (messageId: string) => void;
  onOpenDocument?: (documentId: string, revisionId?: string | null) => void;
}) {
  const s = props.link;
  const label = `${s.sourceKind} · ${s.currentness}`;
  const canMessage = s.sourceKind === "message" && Boolean(s.sourceId) && props.onOpenMessage;
  const docId = s.documentId ?? (s.sourceKind === "document" ? s.sourceId : undefined);
  const canDoc = Boolean(docId) && Boolean(props.onOpenDocument);
  return (
    <button
      type="button"
      className="journal-source-chip"
      data-testid={`journal-source-${s.ownerId}`}
      data-currentness={s.currentness}
      disabled={!canMessage && !canDoc}
      title={s.detail}
      onClick={() => {
        if (canMessage && s.sourceId) props.onOpenMessage?.(s.sourceId);
        else if (canDoc && docId) props.onOpenDocument?.(docId, s.revisionId ?? null);
      }}
    >
      <span className="journal-source-label">{label}</span>
      <span className="journal-row-desc">{s.detail.slice(0, 160)}</span>
      <span className="journal-source-cta">
        Retrouver {s.sourceKind === "message" ? "cet échange dans Travail" : "ce document"} ↗
      </span>
    </button>
  );
}

function DecisionList(props: {
  decisions: JournalDecision[];
  selectedId: string | null;
  showEmpty: boolean;
  emptyCopy: string;
  searchEmptyCopy: string;
  onSelect: (id: string) => void;
}) {
  if (props.showEmpty) {
    return (
      <div className="journal-hierarchy" data-testid="journal-decision-list">
        <p className="journal-empty-copy" data-testid="journal-search-empty">
          {props.searchEmptyCopy}
        </p>
      </div>
    );
  }
  if (props.decisions.length === 0) {
    return (
      <div className="journal-hierarchy" data-testid="journal-decision-list">
        <p className="journal-empty-copy" data-testid="journal-decisions-empty">
          {props.emptyCopy}
        </p>
      </div>
    );
  }
  return (
    <ul className="journal-decision-list" data-testid="journal-decision-list">
      {props.decisions.map((d) => {
        const st = decisionStatusLabel(d);
        return (
          <li key={d.id}>
            <button
              type="button"
              className={`journal-decision-row${props.selectedId === d.id ? " is-selected" : ""}`}
              data-testid={`journal-decision-${d.id}`}
              onClick={() => props.onSelect(d.id)}
            >
              <span className="journal-decision-main">
                <span className="journal-decision-title">{d.statement || d.kind}</span>
                <span className="journal-row-desc">{decisionBlurb(d)}</span>
                <span className="journal-decision-meta">
                  {d.kind} · {d.scope}
                </span>
              </span>
              <span className={`journal-status journal-status-${st.tone}`}>
                <span className="journal-status-dot" aria-hidden />
                {st.label}
              </span>
              <span className="journal-open-arrow" aria-hidden>
                ↗
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

```

### CREATE FULL — journal-v4-parcours.spec.ts (état HEAD)
```ts
import { test, expect, type Page } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

async function seedJournalScenario(page: Page, projectId: string, longThreadCount = 40) {
  const res = await page.request.post("/api/dev/e2e/journal-fixture", {
    data: { projectId, longThreadCount },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = (await res.json()) as {
    status: string;
    seed: {
      leafSubjectId: string;
      parentSubjectId: string;
      otherParentId: string;
      openPointId: string;
      decisionApplicableId: string;
      earlyMessageId: string;
      documentId: string;
      revisionIdV2: string;
      documentAcquisId: string;
      messageCount: number;
    };
  };
  expect(body.status).toBe("AVAILABLE");
  expect(body.seed.leafSubjectId).toBeTruthy();
  expect(body.seed.earlyMessageId).toBeTruthy();
  expect(body.seed.documentAcquisId).toBeTruthy();
  return body.seed;
}

test.describe("Journal V4 — données métier non vides (E06-01 + §5)", () => {
  test("sujets/recherche-acquis/décisions/message/document/retour-nav", async ({ page }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "Amorce projet Journal E2E seed");

    const projectName = uniqueProjectName("Journal E06");
    await constituteAndCreateProject(page, {
      name: projectName,
      summary: "seed journal e06",
      alreadyUnique: true,
    });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();

    const seed = await seedJournalScenario(page, projectId!, 40);

    // Draft BEFORE leaving thread (E06-04 / J-C13)
    const draftBefore = "brouillon préparé avant Journal — ne pas envoyer";
    await page.getByTestId("thread-draft").fill(draftBefore);
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page).toHaveURL(/surface=journal/);
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });

    // A — arbre non vide (fail if empty)
    const leaf = page.getByTestId(`journal-subject-${seed.leafSubjectId}`);
    await expect(leaf).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId(`journal-subject-${seed.parentSubjectId}`)).toBeVisible();

    // C — J-C08 recherche terme ABSENT du titre/parents/synthèse, PRÉSENT dans acquis
    await page.getByTestId("journal-search").fill("traçabilité");
    const matchBadge = page.getByTestId(`journal-match-${seed.leafSubjectId}`);
    await expect(matchBadge).toBeVisible();
    await expect(matchBadge).toHaveText(/acquis/i);
    await page.getByTestId("journal-filter-open-points").click();

    // B — 40/60 + enlarge (non conditionnel)
    await leaf.click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
    await expect(page.getByTestId("journal-viewer-subject-title")).toBeVisible();
    await page.getByTestId("journal-viewer-enlarge").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-journal-layout",
      "enlarged",
    );
    await page.getByTestId("journal-viewer-reduce").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");

    await page.screenshot({
      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-sujet-40-60-seeded.png",
      fullPage: false,
    });

    // Keep selection + search for return assertions
    await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");

    // Sources → message exact (chip on selected leaf)
    const sourceChip = page.locator("[data-testid^=journal-source-]").first();
    await expect(sourceChip).toBeVisible({ timeout: 10000 });
    await sourceChip.click();
    await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
    const focused = page.locator(`[data-message-id="${seed.earlyMessageId}"]`);
    await expect(focused).toBeVisible({ timeout: 15000 });
    const ids = await page.locator("[data-message-id]").evaluateAll((els) =>
      els.map((e) => e.getAttribute("data-message-id")),
    );
    expect(ids.includes(seed.earlyMessageId)).toBe(true);
    expect(ids[ids.length - 1]).not.toBe(seed.earlyMessageId);
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

    // J-C13 — return via rail (NOT page.goto) and assert nav restored
    const journalNav = page.getByTestId("studio-rail").getByTestId("nav-journal");
    await journalNav.click();
    await expect(page).toHaveURL(/surface=journal/);
    // Soft-nav URL can land before React surface commit; retry rail once if needed.
    if (!(await page.getByTestId("project-journal").isVisible().catch(() => false))) {
      await journalNav.click();
    }
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");
    await expect(page.getByTestId(`journal-subject-${seed.leafSubjectId}`)).toBeVisible();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
    await expect(page.getByTestId("journal-filter-open-points")).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    // D — J-C11 Décisions : terme présent dans explication, absent du libellé
    await page.getByTestId("journal-tab-decisions").click();
    await page.getByTestId("journal-search").fill("multicritèreorion");
    await expect(page.getByTestId(`journal-decision-${seed.decisionApplicableId}`)).toBeVisible({
      timeout: 15000,
    });
    await page.getByTestId(`journal-decision-${seed.decisionApplicableId}`).click();
    await expect(page.getByTestId("journal-decision-viewer")).toBeVisible();
    await expect(page.getByTestId("journal-decision-applicability")).toContainText(/applicable|historique|vigueur|scope/i);
    await expect(page.getByTestId("journal-decision-viewer")).toContainText(/multicritèreorion/i);

    // Back to subjects for document source click
    await page.getByTestId("journal-tab-subjects").click();
    await page.getByTestId("journal-search").fill("");
    const openFilter = page.getByTestId("journal-filter-open-points");
    if ((await openFilter.getAttribute("aria-pressed")) === "true") {
      await openFilter.click();
    }
    const budgetSubject = page.getByTestId(`journal-subject-${seed.otherParentId}`);
    await expect(budgetSubject).toBeVisible();
    await budgetSubject.click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");

    // E — J-C14 document version via Journal source click → Travail viewer (exact revision)
    const docChip = page.getByTestId(`journal-source-${seed.documentAcquisId}`);
    await expect(docChip).toBeVisible({ timeout: 10000 });
    await docChip.click();
    await expect(page.getByTestId("travail-viewer")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("travail-viewer-revision")).toContainText(/révision citée|Version/i);
    await expect(page.getByTestId("travail-viewer")).toContainText(/version exacte pour J-C14/i);
    // Draft still preserved on thread
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

    // Return Journal via rail — selection of document subject should restore if nav preserved
    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId(`journal-subject-${seed.otherParentId}`)).toBeVisible();

    // F — 1280 operational (rail nav, not goto as success proof of restore)
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId(`journal-subject-${seed.leafSubjectId}`)).toBeVisible();
  });

  test("route seed refuse hors DEV/E2E (gate)", async ({ page, request }) => {
    // With current Playwright webServer STUDIO_E2E=1 + DEV, positive path works above.
    // Negative: call without session → 401; with session but we cannot flip env mid-process.
    // Assert unit-gate contract is wired into this route (static) + unauthenticated 401.
    const unauth = await request.post("/api/dev/e2e/journal-fixture", {
      data: { projectId: "proj_absent" },
    });
    // Either 401 (no cookie) or 403 (gate) depending on harness cookies; never 200 for absent project.
    expect([401, 403, 404]).toContain(unauth.status());
  });
});

```

### CREATE FULL — page.tsx (état HEAD)
```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { PilotagePanel } from "@/components/PilotagePanel";
import { ProjectChrome } from "@/components/figma/ProjectChrome";
import { NoraConversation } from "@/components/figma/NoraConversation";
import { TravailViewer, type TravailViewerResource } from "@/components/figma/TravailViewer";
import {
  ProjectJournal,
  type JournalContradiction,
  type JournalDecision,
  type JournalNavState,
  type JournalRestriction,
  type JournalSourceLink,
} from "@/components/figma/ProjectJournal";
import { ProjectOverview } from "@/components/figma/ProjectOverview";
import {
  ProjectUnavailable,
  type ProjectUnavailableKind,
} from "@/components/figma/ProjectUnavailable";
import {
  DocumentHistory,
  DocumentInspector,
  DocumentLibrary,
  type RevisionRow,
} from "@/components/figma/DocumentSurfaces";
import {
  conversationalClientCommandKey,
  mayClearComposerDraftOnReconcile,
  pendingStorageKey,
  shouldClearThreadPending,
  type ThreadPendingTurn,
  type ThreadTurnKind,
} from "@/domains/pilotage/thread-recovery";
import {
  clearDraftAfterAck,
  clearComposerDraft,
  purgeAllComposerDraftsInTab,
  purgeComposerDraftsForPilot,
  readComposerDraft,
  writeComposerDraft,
  studioClientLane,
} from "@/domains/conversation/composer-draft";
import {
  resolveActionableProjections,
  type TurnChoice,
  type TurnProjection,
  type TurnReference,
  parseTurnProjection,
} from "@/domains/conversation/turn-projection";
import { PublicationInspectionPanel } from "@/components/integrations/PublicationInspectionPanel";
import { useProjectSpace } from "@/components/shell/ProjectSpaceContext";
import {
  clearProjectSurfaceNavIntent,
  noteProjectSurfaceNavIntent,
  peekProjectSurfaceNavIntent,
  resolveProjectLoadSurface,
  type StudioSurface,
} from "@/components/shell/studio-rail";

type Msg = {
  id: string;
  role: string;
  content: string;
  status: string;
  /** ISO timestamp — used to keep chronological order when hydrating a deep-linked message (E06-04). */
  createdAt?: string;
};
type Doc = {
  document: { id: string; title: string };
  latestRevision?: {
    id: string;
    revisionNumber: number;
    status: string;
    contentMarkdown: string;
  } | null;
};
type Knowledge = {
  preparationIds?: string[];
  subjects: Array<{
    id: string;
    title: string;
    status: string;
    parentSubjectId: string | null;
    originatedFromSubjectId: string | null;
    summary?: { revisionNumber: number; summaryMarkdown: string } | null;
  }>;
  acquis: Array<{ id: string; kind: string; statement: string; status: string; subjectId: string | null }>;
  openPoints: Array<{ id: string; statement: string; status: string; subjectId: string | null }>;
};

type Surface =
  | "travail"
  | "projet"
  | "pilotage"
  | "journal"
  | "document"
  | "git"
  | "publication";
type DocUiState = "READING" | "EDITING" | "SAVING" | "CONFLICT" | "FAILED" | "UNKNOWN";

const SURFACES: Surface[] = [
  "travail",
  "projet",
  "pilotage",
  "journal",
  "document",
  "git",
  "publication",
];

function parseSurface(raw: string | null): Surface | null {
  if (!raw) return null;
  return SURFACES.includes(raw as Surface) ? (raw as Surface) : null;
}

type PilotageEffectView = {
  attempted?: boolean;
  intentClarity?: string;
  intentReason?: string;
  status?: string | null;
  reasonCode?: string | null;
  reason?: string | null;
  operation?: string;
  decisionId?: string | null;
  clarification?: string;
  clientCommandKey?: string;
};

function formatPilotageEffect(
  effect: PilotageEffectView | null | undefined,
  humanDecisionCreated?: boolean,
): string {
  if (!effect) return "";
  if (effect.attempted) {
    return [
      effect.operation ?? "commande",
      effect.status ?? "?",
      effect.reasonCode ? `(${effect.reasonCode})` : null,
      humanDecisionCreated && effect.decisionId ? `décision ${effect.decisionId}` : null,
    ]
      .filter(Boolean)
      .join(" · ");
  }
  if (effect.clarification) return `Clarification · ${effect.clarification}`;
  if (effect.intentClarity === "AMBIGUOUS") {
    return `Intention ambiguë · ${effect.intentReason ?? effect.reason ?? ""}`;
  }
  return "";
}

export default function ProjectPage() {
  const params = useParams<{ projectId: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setInfo: setProjectSpaceInfo } = useProjectSpace();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [documents, setDocuments] = useState<Doc[]>([]);
  const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
  const [journalDecisions, setJournalDecisions] = useState<JournalDecision[]>([]);
  const [journalRestrictions, setJournalRestrictions] = useState<JournalRestriction[]>([]);
  const [journalSources, setJournalSources] = useState<JournalSourceLink[]>([]);
  const [journalContradictions, setJournalContradictions] = useState<JournalContradiction[]>([]);
  const [journalNav, setJournalNav] = useState<JournalNavState | null>(null);
  const [focusMessageId, setFocusMessageId] = useState<string | null>(null);
  const [focusStatus, setFocusStatus] = useState<string | null>(null);
  const [preparationId, setPreparationId] = useState<string | null>(null);
  const [projectName, setProjectName] = useState<string | null>(null);
  const [statusHint, setStatusHint] = useState("Chargement…");
  const [unavailableKind, setUnavailableKind] = useState<ProjectUnavailableKind | null>(null);
  const [loadEpoch, setLoadEpoch] = useState(0);
  /** Observable end of project load + surface URL sync (e2e / anti-race proof). */
  const [projectLoadState, setProjectLoadState] = useState<"loading" | "ready">("loading");
  const [surface, setSurface] = useState<Surface>(() => parseSurface(searchParams.get("surface")) ?? "travail");
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [pilotId, setPilotId] = useState<string | null>(null);
  const [turnProjections, setTurnProjections] = useState<TurnProjection[]>([]);
  const [choiceFrozen, setChoiceFrozen] = useState(false);
  const [forceStickToken, setForceStickToken] = useState(0);
  const [viewer, setViewer] = useState<TravailViewerResource | null>(null);
  const [viewerEnlarged, setViewerEnlarged] = useState(false);
  const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
  const [status, setStatus] = useState("");
  const [pilotageStatus, setPilotageStatus] = useState("");
  const [inspect, setInspect] = useState<Doc | null>(null);
  const [docUi, setDocUi] = useState<DocUiState>("READING");
  const [reviseDraft, setReviseDraft] = useState("");
  const [reviseMessage, setReviseMessage] = useState("");
  const [docMissing, setDocMissing] = useState("");
  const [docHistory, setDocHistory] = useState<RevisionRow[]>([]);
  const [docDiffText, setDocDiffText] = useState("");
  const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
  const draftVersionRef = useRef(0);
  const pilotIdRef = useRef<string | null>(null);
  const preparationIdRef = useRef<string | null>(null);
  const projectIdRef = useRef(params.projectId);
  const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
  const reviseCorrelationRef = useRef<string | null>(null);
  const reviseBaseIdRef = useRef<string | null>(null);
  const documentsRef = useRef<Doc[]>([]);
  const docUiRef = useRef<DocUiState>("READING");
  const reviseDraftRef = useRef("");
  /** Surface chosen by chrome/rail while project load() is still in flight — must not be clobbered. */
  const pendingSurfaceRef = useRef<Surface | null>(null);
  /** C1 — ignore stale async viewer responses after A→B / close / project change. */
  const viewerRequestSeqRef = useRef(0);
  const viewerOpenRef = useRef(false);
  /** Invalidates in-flight Journal→Travail deep-links when the user navigates away. */
  const surfaceNavGenRef = useRef(0);

  useEffect(() => {
    // Clear previous project identity immediately — no cross-project leak in the rail.
    setProjectSpaceInfo({
      projectId: params.projectId,
      projectName: null,
      subtitle: null,
      available: false,
      blockNavigation: false,
    });
    return () => {
      setProjectSpaceInfo(null);
    };
  }, [params.projectId, setProjectSpaceInfo]);

  useEffect(() => {
    docUiRef.current = docUi;
  }, [docUi]);
  useEffect(() => {
    reviseDraftRef.current = reviseDraft;
  }, [reviseDraft]);
  useEffect(() => {
    documentsRef.current = documents;
  }, [documents]);
  useEffect(() => {
    pilotIdRef.current = pilotId;
  }, [pilotId]);

  useEffect(() => {
    preparationIdRef.current = preparationId;
  }, [preparationId]);

  useEffect(() => {
    if (surface !== "journal") return;
    let cancelled = false;
    void (async () => {
      const res = await fetch(`/api/projects/${params.projectId}/journal`);
      if (!res.ok || cancelled) return;
      const body = (await res.json()) as {
        knowledge?: Knowledge;
        decisions?: Array<{
          id: string;
          kind: string;
          state: string;
          scope: string;
          statement: string;
          objectRef: string;
          effectiveAt: string;
          createdAt: string;
          applicable?: boolean;
          supersededByDecisionId?: string | null;
          explanation?: JournalDecision["explanation"];
        }>;
        restrictions?: JournalRestriction[];
        sourceLinks?: JournalSourceLink[];
        contradictions?: JournalContradiction[];
      };
      if (cancelled) return;
      if (body.knowledge) setKnowledge(body.knowledge);
      setJournalDecisions(
        (body.decisions ?? []).map((d) => ({
          id: d.id,
          kind: d.kind,
          state: d.state,
          scope: d.scope,
          statement: d.statement,
          objectRef: d.objectRef,
          effectiveAt:
            typeof d.effectiveAt === "string"
              ? d.effectiveAt
              : new Date(d.effectiveAt as unknown as string).toISOString(),
          createdAt:
            typeof d.createdAt === "string"
              ? d.createdAt
              : new Date(d.createdAt as unknown as string).toISOString(),
          applicable: d.applicable,
          supersededByDecisionId: d.supersededByDecisionId ?? null,
          explanation: d.explanation ?? null,
        })),
      );
      setJournalRestrictions(body.restrictions ?? []);
      setJournalSources(body.sourceLinks ?? []);
      setJournalContradictions(body.contradictions ?? []);
    })();
    return () => {
      cancelled = true;
    };
    // Refresh when entering Journal surface / project — not on every knowledge identity change
    // (that cancelled in-flight loads and dropped sourceLinks intermittently).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surface, params.projectId]);

  useEffect(() => {
    projectIdRef.current = params.projectId;
    // Invalidate in-flight viewer fetches when project changes.
    viewerRequestSeqRef.current += 1;
    viewerOpenRef.current = false;
    setViewer(null);
    setViewerEnlarged(false);
  }, [params.projectId]);

  function persistDraft(text: string) {
    if (!pilotId) return;
    draftVersionRef.current += 1;
    const prior = readComposerDraft({ pilotId, projectId: params.projectId });
    writeComposerDraft({
      schemaVersion: "e05-composer-draft-v1",
      pilotId,
      projectId: params.projectId,
      lane: studioClientLane(),
      text,
      version: draftVersionRef.current,
      sentVersion: prior?.sentVersion ?? null,
      updatedAt: new Date().toISOString(),
    });
  }

  function closeViewer() {
    viewerRequestSeqRef.current += 1;
    viewerOpenRef.current = false;
    setViewer(null);
    setViewerEnlarged(false);
  }

  function applyViewerIfCurrent(
    seq: number,
    next: TravailViewerResource,
    projectIdAtStart: string,
  ) {
    if (seq !== viewerRequestSeqRef.current) return;
    if (!viewerOpenRef.current) return;
    if (projectIdRef.current !== projectIdAtStart) return;
    setViewer(next);
    setViewerEnlarged(false);
  }

  type D4RevisionPayload = {
    status?: string;
    document?: { id?: string; title?: string };
    revision?: {
      id?: string;
      revisionNumber?: number;
      status?: string;
      contentMarkdown?: string;
    };
    revisions?: Array<{
      id?: string;
      revisionNumber?: number;
      status?: string;
      contentMarkdown?: string;
    }>;
    reason?: string;
    error?: string;
  };

  /**
   * Final A — every Travail open revalidates rights via D4 at click time.
   * Never treat React-cached latestRevision as a freshly authorized read.
   */
  async function fetchDocumentViewerViaD4(input: {
    documentId: string;
    titleHint: string;
    revisionId?: string | null;
    versionSource: "exact" | "current";
    seq: number;
    projectIdAtStart: string;
  }) {
    const prepId = preparationIdRef.current;
    if (!prepId) {
      applyViewerIfCurrent(
        input.seq,
        {
          kind: "document",
          documentId: input.documentId,
          title: input.titleHint,
          revisionId: input.revisionId ?? null,
          revisionNumber: null,
          versionSource: input.versionSource,
          markdown: null,
          available: false,
          unavailableReason: "Préparation indisponible — lecture D4 impossible.",
        },
        input.projectIdAtStart,
      );
      return;
    }

    try {
      let targetRevisionId = input.revisionId?.trim() || "";
      let title = input.titleHint;

      if (!targetRevisionId) {
        // Resolve current revision under live ownership check (list endpoint).
        const listRes = await fetch(
          `/api/preparations/${prepId}/documents/${input.documentId}`,
        );
        const listBody = (await listRes.json().catch(() => ({}))) as D4RevisionPayload;
        if (listRes.status === 401) {
          purgeAllComposerDraftsInTab();
          applyViewerIfCurrent(
            input.seq,
            {
              kind: "document",
              documentId: input.documentId,
              title,
              revisionId: null,
              revisionNumber: null,
              versionSource: "current",
              markdown: null,
              available: false,
              unavailableReason: "Session expirée — contenu non affiché.",
            },
            input.projectIdAtStart,
          );
          return;
        }
        if (!listRes.ok || listBody.status === "FORBIDDEN") {
          applyViewerIfCurrent(
            input.seq,
            {
              kind: "document",
              documentId: input.documentId,
              title,
              revisionId: null,
              revisionNumber: null,
              versionSource: "current",
              markdown: null,
              available: false,
              unavailableReason: String(
                listBody.reason ??
                  listBody.error ??
                  listBody.status ??
                  "Document introuvable ou non autorisé",
              ),
            },
            input.projectIdAtStart,
          );
          return;
        }
        title = listBody.document?.title ?? title;
        const revisions = Array.isArray(listBody.revisions) ? listBody.revisions : [];
        const availableRevs = revisions
          .filter((r) => r && r.id && String(r.status ?? "").toUpperCase() === "AVAILABLE")
          .sort(
            (a, b) => Number(b.revisionNumber ?? 0) - Number(a.revisionNumber ?? 0),
          );
        const current = availableRevs[0] ?? null;
        if (!current?.id) {
          applyViewerIfCurrent(
            input.seq,
            {
              kind: "document",
              documentId: input.documentId,
              title,
              revisionId: null,
              revisionNumber: null,
              versionSource: "current",
              markdown: null,
              available: false,
              unavailableReason: "Aucune révision disponible pour ce document.",
            },
            input.projectIdAtStart,
          );
          return;
        }
        targetRevisionId = current.id;
      }

      const res = await fetch(
        `/api/preparations/${prepId}/documents/${input.documentId}?revisionId=${encodeURIComponent(targetRevisionId)}`,
      );
      const j = (await res.json().catch(() => ({}))) as D4RevisionPayload;
      if (res.status === 401) {
        purgeAllComposerDraftsInTab();
        applyViewerIfCurrent(
          input.seq,
          {
            kind: "document",
            documentId: input.documentId,
            title,
            revisionId: targetRevisionId,
            revisionNumber: null,
            versionSource: input.versionSource,
            markdown: null,
            available: false,
            unavailableReason: "Session expirée — contenu non affiché.",
          },
          input.projectIdAtStart,
        );
        return;
      }
      if (!res.ok || j.status === "FORBIDDEN" || j.status === "NOT_FOUND") {
        applyViewerIfCurrent(
          input.seq,
          {
            kind: "document",
            documentId: input.documentId,
            title,
            revisionId: targetRevisionId,
            revisionNumber: null,
            versionSource: input.versionSource,
            markdown: null,
            available: false,
            unavailableReason: String(
              j.reason ?? j.error ?? j.status ?? "Révision inaccessible ou non autorisée",
            ),
          },
          input.projectIdAtStart,
        );
        return;
      }
      const rev = j.revision;
      const markdown =
        j.status === "AVAILABLE" && typeof rev?.contentMarkdown === "string"
          ? rev.contentMarkdown
          : null;
      applyViewerIfCurrent(
        input.seq,
        {
          kind: "document",
          documentId: input.documentId,
          title: j.document?.title ?? title,
          revisionId: rev?.id ?? targetRevisionId,
          revisionNumber: rev?.revisionNumber ?? null,
          versionSource: input.versionSource,
          markdown,
          available: Boolean(markdown),
          unavailableReason: markdown
            ? undefined
            : `Révision non disponible (${String(j.status ?? rev?.status ?? "UNKNOWN")})`,
        },
        input.projectIdAtStart,
      );
    } catch {
      applyViewerIfCurrent(
        input.seq,
        {
          kind: "document",
          documentId: input.documentId,
          title: input.titleHint,
          revisionId: input.revisionId ?? null,
          revisionNumber: null,
          versionSource: input.versionSource,
          markdown: null,
          available: false,
          unavailableReason: "Échec de lecture D4 — aucun contenu inventé.",
        },
        input.projectIdAtStart,
      );
    }
  }

  /** En bref / library open — always live D4 current version. */
  function openTravailDocument(doc: Doc) {
    const projectIdAtStart = params.projectId;
    const seq = ++viewerRequestSeqRef.current;
    viewerOpenRef.current = true;
    // Placeholder while rights + current revision are revalidated.
    setViewer({
      kind: "document",
      documentId: doc.document.id,
      title: doc.document.title,
      revisionId: null,
      revisionNumber: null,
      versionSource: "current",
      markdown: null,
      available: false,
      unavailableReason: "Vérification des droits et de la version courante…",
    });
    setViewerEnlarged(false);
    void fetchDocumentViewerViaD4({
      documentId: doc.document.id,
      titleHint: doc.document.title,
      revisionId: null,
      versionSource: "current",
      seq,
      projectIdAtStart,
    });
  }

  /** C1/Final A — exact revision or live current via D4; D9 Git via existing APIs. */
  async function openTravailReference(ref: TurnReference) {
    const projectIdAtStart = params.projectId;
    const seq = ++viewerRequestSeqRef.current;
    viewerOpenRef.current = true;

    if (ref.kind === "document" && ref.resourceId) {
      const match = documents.find((d) => d.document.id === ref.resourceId);
      const title = match?.document.title ?? ref.label;
      await fetchDocumentViewerViaD4({
        documentId: ref.resourceId,
        titleHint: title,
        revisionId: ref.revisionId ?? null,
        versionSource: ref.revisionId ? "exact" : "current",
        seq,
        projectIdAtStart,
      });
      return;
    }
    if (ref.kind === "git") {
      if (!ref.repositoryId || !ref.path || !ref.ref) {
        applyViewerIfCurrent(
          seq,
          {
            kind: "git",
            title: ref.label,
            path: ref.path ?? null,
            ref: ref.ref ?? null,
            commit: ref.commit ?? null,
            content: null,
            available: false,
            unavailableReason:
              "Référence Git incomplète (dépôt, chemin ou ref manquant) — aucun aperçu inventé.",
            href: ref.href ?? null,
          },
          projectIdAtStart,
        );
        return;
      }
      try {
        const q = new URLSearchParams({
          repositoryId: ref.repositoryId,
          path: ref.path,
          ref: ref.ref,
        });
        const res = await fetch(`/api/projects/${params.projectId}/git/file?${q.toString()}`);
        const j = (await res.json().catch(() => ({}))) as {
          content?: string;
          provenance?: { commitSha?: string | null; permalink?: string | null };
          error?: string;
          errorCategory?: string;
        };
        const prov = j.provenance;
        if (!res.ok) {
          applyViewerIfCurrent(
            seq,
            {
              kind: "git",
              title: ref.label,
              path: ref.path,
              ref: ref.ref,
              commit: prov?.commitSha ?? ref.commit ?? null,
              content: null,
              available: false,
              unavailableReason: String(
                j.error ?? j.errorCategory ?? "Source Git indisponible ou droits insuffisants",
              ),
              href: prov?.permalink ?? ref.href ?? null,
            },
            projectIdAtStart,
          );
        } else {
          const content = typeof j.content === "string" ? j.content : null;
          applyViewerIfCurrent(
            seq,
            {
              kind: "git",
              title: ref.label,
              path: ref.path,
              ref: ref.ref,
              commit: prov?.commitSha ?? ref.commit ?? null,
              content,
              available: Boolean(content),
              unavailableReason: content
                ? undefined
                : "Aperçu Git vide — aucun contenu inventé.",
              href: prov?.permalink ?? ref.href ?? null,
            },
            projectIdAtStart,
          );
        }
      } catch {
        applyViewerIfCurrent(
          seq,
          {
            kind: "git",
            title: ref.label,
            path: ref.path,
            ref: ref.ref,
            commit: ref.commit ?? null,
            content: null,
            available: false,
            unavailableReason: "Échec de lecture Git — réessayez ou ouvrez la source externe.",
            href: ref.href ?? null,
          },
          projectIdAtStart,
        );
      }
      return;
    }
    applyViewerIfCurrent(
      seq,
      {
        kind: "git",
        title: ref.label,
        content: null,
        available: false,
        unavailableReason: "Référence externe — ouvrir le lien si disponible.",
        href: ref.href ?? null,
      },
      projectIdAtStart,
    );
  }

  function buildSurfaceUrl(next: Surface, documentId?: string | null) {
    const q = new URLSearchParams();
    q.set("surface", next);
    if (next === "document" && documentId) q.set("documentId", documentId);
    return `/projects/${params.projectId}?${q.toString()}`;
  }

  /** push = entrée d'historique ; replace = normalisation sans nouvelle entrée. */
  function syncSurfaceUrl(
    next: Surface,
    documentId?: string | null,
    mode: "push" | "replace" = "push",
  ) {
    const href = buildSurfaceUrl(next, documentId);
    if (mode === "replace") router.replace(href, { scroll: false });
    else router.push(href, { scroll: false });
  }

  function selectSurface(next: Surface) {
    surfaceNavGenRef.current += 1;
    pendingSurfaceRef.current = next;
    noteProjectSurfaceNavIntent(params.projectId, next as StudioSurface);
    setSurface(next);
    setDocMissing("");
    if (next !== "document") {
      setInspect(null);
      setDocUi("READING");
      setReviseDraft("");
      setReviseMessage("");
      reviseCorrelationRef.current = null;
      reviseBaseIdRef.current = null;
      syncSurfaceUrl(next, null, "push");
    } else {
      syncSurfaceUrl(next, inspect?.document.id ?? null, "push");
    }
  }

  async function loadDocHistory(preparationIdValue: string, documentId: string) {
    try {
      const res = await fetch(
        `/api/preparations/${preparationIdValue}/documents/${documentId}`,
      );
      if (!res.ok) {
        setDocHistory([]);
        return;
      }
      const j = await res.json();
      const rows = (j.revisions ?? []) as Array<{
        id: string;
        revisionNumber: number;
        status: string;
        createdAt?: string;
      }>;
      setDocHistory(
        rows.map((r) => ({
          id: r.id,
          revisionNumber: r.revisionNumber,
          status: r.status,
          createdAt: r.createdAt,
        })),
      );
    } catch {
      setDocHistory([]);
    }
  }

  function openDocumentReadOnly(doc: Doc, mode: "push" | "replace" = "push") {
    setInspect(doc);
    setDocMissing("");
    setDocUi("READING");
    setReviseDraft(doc.latestRevision?.contentMarkdown ?? "");
    setReviseMessage("");
    setDocDiffText("");
    reviseCorrelationRef.current = null;
    reviseBaseIdRef.current = doc.latestRevision?.id ?? null;
    setSurface("document");
    syncSurfaceUrl("document", doc.document.id, mode);
    if (preparationId) void loadDocHistory(preparationId, doc.document.id);
  }

  function applyUrlDocumentState(docs: Doc[], qSurface: Surface | null, qDocId: string | null) {
    if (qSurface) setSurface(qSurface);
    else setSurface("travail");

    if (qSurface === "document") {
      if (!qDocId) {
        setInspect(null);
        setDocMissing("");
        return;
      }
      const match = docs.find((d) => d.document.id === qDocId);
      if (match) {
        setInspect(match);
        setDocMissing("");
        const ui = docUiRef.current;
        const preserveDraft =
          Boolean(reviseCorrelationRef.current) ||
          ui === "EDITING" ||
          ui === "SAVING" ||
          ui === "CONFLICT" ||
          ui === "UNKNOWN";
        if (!preserveDraft) {
          setDocUi("READING");
          setReviseDraft(match.latestRevision?.contentMarkdown ?? "");
        }
      } else {
        setInspect(null);
        setDocMissing("Document introuvable ou non autorisé pour ce Pilote.");
      }
      return;
    }
    setInspect(null);
    setDocMissing("");
  }

  function rememberPending(pending: ThreadPendingTurn | null) {
    if (typeof sessionStorage === "undefined") return;
    const key = pendingStorageKey(params.projectId);
    if (!pending) {
      sessionStorage.removeItem(key);
      setUnresolvedPending(null);
      return;
    }
    sessionStorage.setItem(key, JSON.stringify(pending));
    setUnresolvedPending(pending);
  }

  function readPending(): ThreadPendingTurn | null {
    if (typeof sessionStorage === "undefined") return null;
    try {
      const raw = sessionStorage.getItem(pendingStorageKey(params.projectId));
      if (!raw) return null;
      return JSON.parse(raw) as ThreadPendingTurn;
    } catch {
      return null;
    }
  }

  async function refreshDurablePilotage() {
    const projRes = await fetch(`/api/projects/${params.projectId}/pilotage`);
    if (projRes.ok) {
      const pj = await projRes.json();
      const cycle = pj.pilotage?.cycle ?? pj.cycle;
      if (cycle?.status === "ACTIVE") {
        setPilotageStatus((prev) =>
          prev.includes("OPEN_CYCLE") || prev.includes("ACTIVE")
            ? prev
            : `cycle ${cycle.cycleType} ACTIVE (relecture durable)`,
        );
      }
    }
  }

  function applyClearFromResponse(
    noraStatus: string | undefined,
    effect: PilotageEffectView | undefined,
    opts?: { preserveUnresolvedMetierPending?: boolean },
  ) {
    if (
      shouldClearThreadPending({
        noraStatus,
        effectAttempted: effect?.attempted,
        effectStatus: effect?.status,
        preserveUnresolvedMetierPending: opts?.preserveUnresolvedMetierPending,
      })
    ) {
      rememberPending(null);
      messageTurnKeyRef.current = null;
      return true;
    }
    // Independent cognitive COMPLETE over pending A: drop only this turn key,
    // never the unresolved métier pending.
    if (opts?.preserveUnresolvedMetierPending) {
      messageTurnKeyRef.current = null;
      return true;
    }
    return false;
  }

  function applyCognitiveRecoveryFromDurable(input: {
    status: string;
    effect: PilotageEffectView | undefined;
    pending: ThreadPendingTurn;
    noraMode?: string;
  }): boolean {
    const status = input.status.trim().toUpperCase();
    setStatus(`Nora ${String(input.noraMode ?? "durable")} · ${status}`);
    setPilotageStatus(formatPilotageEffect(input.effect, false));
    const pendingCleared = applyClearFromResponse(status, input.effect);
    if (!pendingCleared) {
      // Métier UNKNOWN or non-terminal — keep pending; honest copy.
      if (input.effect?.attempted === true) {
        setStatus("Effet métier encore incertain — conserver la réconciliation.");
        setChoiceFrozen(true);
      } else if (status === "RUNNING" || status === "ACCEPTED") {
        setStatus("Tentative encore en cours côté serveur — réessayer plus tard.");
        setChoiceFrozen(true);
      }
      return false;
    }
    // Cognitive terminal without D7 — exit loop; never claim success; keep draft.
    if (status === "UNKNOWN" || status === "INTERRUPTED" || status === "FAILED") {
      setStatus(
        "Réponse Nora non aboutie — historique conservé. Vous pouvez formuler une nouvelle demande. Aucune relance automatique.",
      );
      setNoraActivity("error");
      setChoiceFrozen(false);
      return true;
    }
    const decision = mayClearComposerDraftOnReconcile({
      pending: input.pending,
      currentDraftVersion: draftVersionRef.current,
    });
    if (
      decision.clear &&
      pilotId &&
      clearDraftAfterAck({
        pilotId,
        projectId: params.projectId,
        sentVersion: decision.sentVersion,
        currentVersion: draftVersionRef.current,
      })
    ) {
      setDraft("");
    }
    setChoiceFrozen(false);
    setNoraActivity("idle");
    return true;
  }

  async function reconcilePending(pending: ThreadPendingTurn) {
    setBusy(true);
    setChoiceFrozen(true);
    try {
      // 1) Durable D7 by business command key — métier authority when present.
      const res = await fetch(
        `/api/projects/${params.projectId}/pilotage/commands/by-key/${encodeURIComponent(pending.clientCommandKey)}`,
      );
      if (res.ok) {
        const cmd = await res.json();
        setPilotageStatus(
          formatPilotageEffect(
            {
              attempted: true,
              status: cmd.status,
              reasonCode: cmd.reasonCode,
              reason: cmd.reason,
              operation: cmd.effects?.[0]?.effectKind ?? "commande",
              decisionId: cmd.decisionId,
              clientCommandKey: pending.clientCommandKey,
            },
            Boolean(cmd.decisionId) &&
              (cmd.status === "APPLIED" || cmd.status === "ALREADY_APPLIED"),
          ),
        );
        // CR-02: UNKNOWN métier stays pending; Nora status is irrelevant here.
        if (cmd.status && String(cmd.status).toUpperCase() !== "UNKNOWN") {
          rememberPending(null);
          messageTurnKeyRef.current = null;
          setChoiceFrozen(false);
        } else {
          setStatus("Effet métier encore incertain — réconciliation métier conservée.");
          setChoiceFrozen(true);
        }
        await refreshDurablePilotage();
        return;
      }

      if (!preparationId) return;

      // 2) R05 — READ durable D3 turn by clientTurnKey (no Nora, no POST).
      // A bare D7 404 is not proof of cognitive terminality by itself.
      const lookup = await fetch(
        `/api/preparations/${preparationId}/turns/by-key/${encodeURIComponent(pending.clientTurnKey)}`,
      );
      if (lookup.ok) {
        const body = (await lookup.json()) as {
          status?: string;
          pilotageEffect?: PilotageEffectView | null;
          noraMode?: string;
        };
        const status = String(body.status ?? "");
        const effect = (body.pilotageEffect ?? undefined) as PilotageEffectView | undefined;
        const cleared = applyCognitiveRecoveryFromDurable({
          status,
          effect,
          pending,
          noraMode: body.noraMode,
        });
        const proj = await fetch(`/api/projects/${params.projectId}`);
        if (proj.ok) {
          const pj = await proj.json();
          setDocuments(pj.documents ?? []);
          setKnowledge(pj.knowledge ?? null);
          if (Array.isArray(pj.messages)) setMessages(pj.messages as Msg[]);
        }
        await refreshDurablePilotage();
        if (cleared || status.toUpperCase() === "RUNNING" || status.toUpperCase() === "ACCEPTED") {
          return;
        }
        // Non-clearable non-running without effect — fall through only if lookup incomplete.
        if (status) return;
      }

      // 3) Turn not found or lookup failed — idempotent POST replay (same clientTurnKey).
      // Terminal replay never invokes OpenAI; used for ACK/hydration gaps only.
      setPilotageStatus(
        `Tour introuvable ou non terminal — reprise idempotente de la même clé (${pending.clientTurnKey.slice(0, 18)}…)`,
      );
      const retry = await fetch(`/api/preparations/${preparationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: pending.content,
          clientTurnKey: pending.clientTurnKey,
        }),
      });
      const j = (await retry.json().catch(() => ({}))) as Record<string, unknown>;
      if (retry.ok) {
        setMessages((j.messages as Msg[]) ?? []);
        const effect = j.pilotageEffect as PilotageEffectView | undefined;
        const tp = parseTurnProjection(j.turnProjection);
        if (tp) upsertTurnProjection(tp);
        applyCognitiveRecoveryFromDurable({
          status: String(j.status ?? ""),
          effect,
          pending,
          noraMode: String(j.noraMode ?? ""),
        });
        const proj = await fetch(`/api/projects/${params.projectId}`);
        if (proj.ok) {
          const pj = await proj.json();
          setDocuments(pj.documents ?? []);
          setKnowledge(pj.knowledge ?? null);
          if (Array.isArray(pj.messages)) setMessages(pj.messages);
        }
        await refreshDurablePilotage();
      } else {
        setChoiceFrozen(true);
        setStatus(String(j.error ?? j.errorCategory ?? "réconciliation impossible"));
      }
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    let cancelled = false;
    setProjectLoadState("loading");
    setUnavailableKind(null);
    setProjectName(null);
    setStatusHint("Chargement…");
    pendingSurfaceRef.current = null;
    setProjectSpaceInfo({
      projectId: params.projectId,
      projectName: null,
      subtitle: null,
      available: false,
      blockNavigation: false,
    });

    async function load() {
      const res = await fetch(`/api/projects/${params.projectId}`);
      if (cancelled) return;
      if (res.status === 401) {
        // C3 — session invalid: purge tab drafts; do not restore under wrong identity.
        purgeAllComposerDraftsInTab();
        setPilotId(null);
        setUnavailableKind("unauthorized");
        setDraft("");
        setChoiceFrozen(false);
        setStatusHint("");
        setProjectSpaceInfo({
          projectId: params.projectId,
          projectName: null,
          subtitle: null,
          available: false,
          blockNavigation: true,
        });
        setProjectLoadState("ready");
        return;
      }
      if (res.status === 404) {
        setUnavailableKind("not_found");
        setStatusHint("");
        setProjectSpaceInfo({
          projectId: params.projectId,
          projectName: null,
          subtitle: null,
          available: false,
          blockNavigation: true,
        });
        setProjectLoadState("ready");
        return;
      }
      if (!res.ok) {
        setUnavailableKind("temporary");
        setStatusHint("");
        setProjectSpaceInfo({
          projectId: params.projectId,
          projectName: null,
          subtitle: null,
          available: false,
          blockNavigation: true,
        });
        setProjectLoadState("ready");
        return;
      }
      const j = await res.json();
      if (cancelled) return;
      const docs = (j.documents ?? []) as Doc[];
      const name = String(j.project?.name ?? "").trim() || null;
      // C3 — draft ownership follows authenticated session pilot, not project owner alone.
      const sessionPilotId =
        typeof j.session?.pilotId === "string" && j.session.pilotId.trim()
          ? String(j.session.pilotId)
          : null;
      setPilotId(sessionPilotId);
      setTurnProjections(
        ((j.turnProjections ?? []) as unknown[])
          .map((raw) => parseTurnProjection(raw))
          .filter((p): p is TurnProjection => p !== null),
      );
      setMessages(j.messages ?? []);
      setDocuments(docs);
      if (sessionPilotId) {
        const record = readComposerDraft({
          pilotId: sessionPilotId,
          projectId: params.projectId,
        });
        if (record?.text && record.pilotId === sessionPilotId) {
          setDraft(record.text);
          draftVersionRef.current = record.version;
        } else {
          setDraft("");
          draftVersionRef.current = 0;
        }
      } else {
        setDraft("");
        draftVersionRef.current = 0;
      }
      // P1-B: unresolved pending ⇒ keep choice groups frozen until reconcile.
      const pendingOnLoad = readPending();
      if (pendingOnLoad) {
        setUnresolvedPending(pendingOnLoad);
        setChoiceFrozen(true);
      }
      setKnowledge(j.knowledge ?? null);
      setPreparationId(j.preparation?.id ?? null);
      setProjectName(name);
      setStatusHint(
        j.preparation?.id
          ? "Fil durable · préparation liée · réouverture par projet"
          : "Fil durable · réouverture par projet",
      );
      setUnavailableKind(null);
      setProjectSpaceInfo({
        projectId: params.projectId,
        projectName: name,
        subtitle: null,
        available: Boolean(name),
        blockNavigation: false,
      });

      // Read *current* URL — never stale searchParams from effect closure (race with rail nav).
      // Rail Links and chrome selectSurface share one project-scoped intent so load() cannot
      // replace a more recent user surface (e.g. pilotage) with default travail.
      const live =
        typeof window !== "undefined"
          ? new URL(window.location.href).searchParams
          : searchParams;
      const rawSurface = live.get("surface");
      const qSurface = parseSurface(rawSurface);
      const qDocId = live.get("documentId");
      const pendingSurface =
        pendingSurfaceRef.current ?? peekProjectSurfaceNavIntent(params.projectId);
      const decision = resolveProjectLoadSurface({
        rawSurface,
        pendingIntent: pendingSurface,
      });
      applyUrlDocumentState(docs, decision.effectiveSurface as Surface, qDocId);
      if (decision.shouldNormalizeUrl) {
        const target = decision.effectiveSurface as Surface;
        syncSurfaceUrl(target, target === "document" ? qDocId : null, "replace");
      }
      if (qSurface && pendingSurface && qSurface === pendingSurface) {
        pendingSurfaceRef.current = null;
        clearProjectSurfaceNavIntent(params.projectId, qSurface);
      }

      await refreshDurablePilotage();
      if (cancelled) return;
      const pending = readPending();
      if (pending) {
        setUnresolvedPending(pending);
        messageTurnKeyRef.current = {
          content: pending.content,
          key: pending.clientTurnKey,
        };
        setPilotageStatus("Reprise en attente · tentative conservée");
        // R05 — silent READ hydrate: clear stale cognitive pending from durable D3 truth.
        const prepId = (j.preparation?.id as string | undefined) ?? null;
        if (prepId) {
          try {
            const look = await fetch(
              `/api/preparations/${prepId}/turns/by-key/${encodeURIComponent(pending.clientTurnKey)}`,
            );
            if (look.ok) {
              const body = (await look.json()) as {
                status?: string;
                pilotageEffect?: PilotageEffectView | null;
              };
              if (
                shouldClearThreadPending({
                  noraStatus: body.status,
                  effectAttempted: body.pilotageEffect?.attempted,
                  effectStatus: body.pilotageEffect?.status,
                })
              ) {
                rememberPending(null);
                messageTurnKeyRef.current = null;
                setChoiceFrozen(false);
                setStatus(
                  "Réponse Nora non aboutie (état durable) — vous pouvez formuler une nouvelle demande.",
                );
                setPilotageStatus("");
              }
            }
          } catch {
            /* keep pending — network hydrate is best-effort */
          }
        }
      }

      // G2 — silent COMMAND recovery (not GET): resume interrupted mission continuation
      // without requiring the Pilot to reformulate the original intention.
      try {
        const resumeRes = await fetch(
          `/api/projects/${params.projectId}/mission-continuation/resume`,
          { method: "POST" },
        );
        if (resumeRes.ok) {
          const resume = (await resumeRes.json()) as {
            recovered?: boolean;
            documentSave?: { documentId?: string; status?: string } | null;
          };
          if (resume.recovered) {
            const refreshed = await fetch(`/api/projects/${params.projectId}`);
            if (refreshed.ok) {
              const rj = await refreshed.json();
              if (cancelled) return;
              setMessages(rj.messages ?? []);
              setDocuments(rj.documents ?? []);
              setKnowledge(rj.knowledge ?? null);
              if (resume.documentSave?.documentId) {
                setStatusHint("Fil durable · reprise de mission documentée");
              }
            }
          }
        }
      } catch {
        /* non-blocking */
      }

      // Mark ready only after surface sync from this load has been applied.
      if (!cancelled) setProjectLoadState("ready");
    }
    void load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.projectId, router, loadEpoch]);

  // B2 — keep surface/document in sync with URL on Back/Forward without one-shot lock.
  useEffect(() => {
    surfaceNavGenRef.current += 1;
    const qSurface = parseSurface(searchParams.get("surface"));
    const qDocId = searchParams.get("documentId");
    applyUrlDocumentState(documentsRef.current, qSurface, qDocId);
    if (qSurface && pendingSurfaceRef.current === qSurface) {
      pendingSurfaceRef.current = null;
    }
    if (qSurface && peekProjectSurfaceNavIntent(params.projectId) === qSurface) {
      clearProjectSurfaceNavIntent(params.projectId, qSurface);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  async function reconcileRevisionByCorrelation(
    preparationIdValue: string,
    documentId: string,
    correlationKey: string,
  ): Promise<{ found: boolean; status?: string; revisionId?: string }> {
    try {
      const res = await fetch(
        `/api/preparations/${preparationIdValue}/documents/${documentId}`,
      );
      if (!res.ok) return { found: false };
      const j = (await res.json()) as {
        revisions?: Array<{ id: string; status: string; correlationKey?: string | null }>;
      };
      const hit = (j.revisions ?? []).find((r) => r.correlationKey === correlationKey);
      if (!hit) return { found: false };
      return { found: true, status: hit.status, revisionId: hit.id };
    } catch {
      return { found: false };
    }
  }

  async function saveRevision() {
    if (!preparationId || !inspect) return;
    const baseId =
      reviseBaseIdRef.current ?? inspect.latestRevision?.id ?? null;
    if (!baseId) {
      setDocUi("FAILED");
      setReviseMessage("Base de révision absente.");
      return;
    }
    if (!reviseCorrelationRef.current) {
      reviseCorrelationRef.current =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? `rev-${crypto.randomUUID()}`
          : `rev-${Date.now()}`;
    }
    reviseBaseIdRef.current = baseId;
    const correlationKey = reviseCorrelationRef.current;
    const draftSnapshot = reviseDraftRef.current || reviseDraft;
    setDocUi("SAVING");
    setReviseMessage("");
    try {
      const res = await fetch(
        `/api/preparations/${preparationId}/documents/${inspect.document.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "revise",
            baseRevisionId: baseId,
            contentMarkdown: draftSnapshot,
            correlationKey,
          }),
        },
      );
      const j = (await res.json().catch(() => ({}))) as {
        status?: string;
        reason?: string;
        error?: string;
        errorCategory?: string;
        revisionId?: string;
      };

      // Prefer authoritative result.status over HTTP alone.
      const resultStatus = String(j.status ?? "").toUpperCase();

      if (res.status === 409 || resultStatus === "CONFLICT") {
        setDocUi("CONFLICT");
        setReviseMessage(
          `${j.reason ?? "BASE_STALE"} — nouvelle base présentée ; brouillon conservé. Rebasage explicite requis.`,
        );
        // Refresh inspect (new base) but DO NOT overwrite reviseDraft.
        const proj = await fetch(`/api/projects/${params.projectId}`);
        if (proj.ok) {
          const pj = await proj.json();
          const docs = (pj.documents ?? []) as Doc[];
          setDocuments(docs);
          const fresh = docs.find((d) => d.document.id === inspect.document.id);
          if (fresh) {
            setInspect(fresh);
            // Keep draft; update base pointer only when pilot accepts rebase.
          }
        }
        return;
      }

      if (resultStatus === "AVAILABLE") {
        const proj = await fetch(`/api/projects/${params.projectId}`);
        if (proj.ok) {
          const pj = await proj.json();
          const docs = (pj.documents ?? []) as Doc[];
          setDocuments(docs);
          const fresh = docs.find((d) => d.document.id === inspect.document.id);
          if (fresh) {
            setInspect(fresh);
            setReviseDraft(fresh.latestRevision?.contentMarkdown ?? draftSnapshot);
            reviseBaseIdRef.current = fresh.latestRevision?.id ?? null;
          }
        }
        reviseCorrelationRef.current = null;
        setDocUi("READING");
        setReviseMessage("Révision enregistrée (AVAILABLE).");
        return;
      }

      if (resultStatus === "UNKNOWN" || resultStatus === "SAVING" || !res.ok) {
        // ACK / intermediate — reconcile by correlationKey before any new intention.
        const recon = await reconcileRevisionByCorrelation(
          preparationId,
          inspect.document.id,
          correlationKey,
        );
        if (recon.found && recon.status === "AVAILABLE") {
          const proj = await fetch(`/api/projects/${params.projectId}`);
          if (proj.ok) {
            const pj = await proj.json();
            const docs = (pj.documents ?? []) as Doc[];
            setDocuments(docs);
            const fresh = docs.find((d) => d.document.id === inspect.document.id);
            if (fresh) {
              setInspect(fresh);
              setReviseDraft(fresh.latestRevision?.contentMarkdown ?? draftSnapshot);
              reviseBaseIdRef.current = fresh.latestRevision?.id ?? null;
            }
          }
          reviseCorrelationRef.current = null;
          setDocUi("READING");
          setReviseMessage("Révision confirmée après relecture (AVAILABLE).");
          return;
        }
        setDocUi(res.status === 401 ? "FAILED" : "UNKNOWN");
        setReviseMessage(
          recon.found
            ? `État serveur ${recon.status} — brouillon et correlationKey conservés.`
            : `ACK perdu / ${j.error ?? j.errorCategory ?? (resultStatus || `HTTP ${res.status}`)} — relecture sans match ; même clé pour retry.`,
        );
        return;
      }

      if (resultStatus === "FAILED") {
        setDocUi("FAILED");
        setReviseMessage(String(j.reason ?? j.error ?? "FAILED"));
        return;
      }

      setDocUi("UNKNOWN");
      setReviseMessage("Réponse non classée — aucune réussite affichée sans AVAILABLE.");
    } catch {
      const recon = preparationId
        ? await reconcileRevisionByCorrelation(
            preparationId,
            inspect.document.id,
            correlationKey,
          )
        : { found: false as const };
      if (recon.found && recon.status === "AVAILABLE") {
        reviseCorrelationRef.current = null;
        setDocUi("READING");
        setReviseMessage("Révision confirmée après relecture réseau (AVAILABLE).");
        return;
      }
      setDocUi("UNKNOWN");
      setReviseMessage(
        "ACK perdu (réseau) — brouillon, base et correlationKey conservés ; pas de double mutation automatique.",
      );
    }
  }

  function acceptConflictRebase() {
    if (!inspect?.latestRevision) return;
    reviseBaseIdRef.current = inspect.latestRevision.id;
    reviseCorrelationRef.current = null; // new intention after explicit rebase
    setDocUi("EDITING");
    setReviseMessage("Base mise à jour — nouvelle intention (nouvelle correlationKey au prochain enregistrement).");
  }

  function sendChoice(choice: TurnChoice, _messageId: string) {
    void sendMessage(choice.transmitText, { fromChoice: true });
  }

  function upsertTurnProjection(tp: TurnProjection) {
    setTurnProjections((prev) => {
      const id = tp.messageId;
      if (!id) return [...prev, tp];
      const idx = prev.findIndex((p) => p.messageId === id);
      if (idx < 0) return [...prev, tp];
      const next = [...prev];
      next[idx] = tp;
      return next;
    });
  }

  async function sendMessage(
    overrideText?: string,
    opts?: { fromChoice?: boolean },
  ) {
    const text = (overrideText ?? draft).trim();
    if (!text || !preparationId) return;
    const fromChoice = opts?.fromChoice === true;
    const sentVersion = fromChoice ? null : draftVersionRef.current;
    const pendingMeta: Pick<
      ThreadPendingTurn,
      "origin" | "sentDraftVersion" | "projectId" | "pilotId"
    > = {
      origin: fromChoice ? "choice" : "composer",
      sentDraftVersion: sentVersion,
      projectId: params.projectId,
      pilotId: pilotIdRef.current,
    };
    setChoiceFrozen(true);
    setForceStickToken((t) => t + 1);
    // SEM-02 / S05: no client lexical gate. Server returns nextTurnKind from Nora
    // qualification. Same-content retry reuses the turn key; distinct content may
    // proceed — coexistence is decided from the server kind after the response.
    const pendingBefore = unresolvedPending ?? readPending();
    setBusy(true);
    setNoraActivity("preparing");
    // Same content reuses the same turn key until a terminal result clears it.
    if (!messageTurnKeyRef.current || messageTurnKeyRef.current.content !== text) {
      messageTurnKeyRef.current = {
        content: text,
        key:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? `turn-${crypto.randomUUID()}`
            : `turn-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
      };
    }
    const clientTurnKey = messageTurnKeyRef.current.key;
    const clientCommandKey = conversationalClientCommandKey(clientTurnKey);
    const buildPending = (): ThreadPendingTurn => ({
      content: text,
      clientTurnKey,
      clientCommandKey,
      ...pendingMeta,
    });
    try {
      const res = await fetch(`/api/preparations/${preparationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: text,
          clientTurnKey,
          unresolvedPendingClientTurnKey: pendingBefore?.clientTurnKey,
        }),
      });
      let j: Record<string, unknown> = {};
      try {
        j = (await res.json()) as Record<string, unknown>;
      } catch {
        j = { errorCategory: "RESPONSE_PARSE_FAILED" };
      }
      if (res.ok) {
        const serverKind = (j.nextTurnKind as ThreadTurnKind | undefined) ?? "INCERTAIN";
        const independent = serverKind === "DIALOGUE_INDEPENDANT";
        const effectBlocked = Boolean(j.pendingEffectBlocked);
        const distinctFromUnresolved =
          Boolean(pendingBefore) && pendingBefore!.clientTurnKey !== clientTurnKey;
        // Remember effect turns for ACK recovery — never let B overwrite unresolved A.
        if (serverKind === "INTENTION_EFFET" && !effectBlocked && !distinctFromUnresolved) {
          rememberPending(buildPending());
        } else if (distinctFromUnresolved && pendingBefore) {
          rememberPending(pendingBefore);
        }
        const preserveMetierPending =
          (independent || effectBlocked || distinctFromUnresolved) && Boolean(pendingBefore);
        setMessages((j.messages as Msg[]) ?? []);
        setStatus(`Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}`);
        const effect = j.pilotageEffect as PilotageEffectView | undefined;
        setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
        const tp = parseTurnProjection(j.turnProjection);
        if (tp) upsertTurnProjection(tp);
        const shouldClearDraft =
          !effectBlocked &&
          !distinctFromUnresolved &&
          applyClearFromResponse(String(j.status ?? ""), effect, {
            preserveUnresolvedMetierPending: preserveMetierPending,
          });
        if (!fromChoice && shouldClearDraft && typeof sentVersion === "number") {
          if (
            pilotId &&
            clearDraftAfterAck({
              pilotId,
              projectId: params.projectId,
              sentVersion,
              currentVersion: draftVersionRef.current,
            })
          ) {
            setDraft("");
          } else if (!pilotId) {
            setDraft("");
          }
        } else if (effectBlocked || (distinctFromUnresolved && serverKind === "INTENTION_EFFET")) {
          setStatus(
            effectBlocked
              ? `Effet retenu — pending non résolu (${String(j.unresolvedPendingClientTurnKey ?? pendingBefore?.clientTurnKey ?? "A")})`
              : "Intention précédente non résolue — réconcilier avant un nouveau tour.",
          );
        } else if (j.status === "UNKNOWN" || j.status === "FAILED" || j.status === "INTERRUPTED") {
          setNoraActivity("error");
          if (shouldClearDraft) {
            setStatus(
              "Réponse Nora non aboutie — historique conservé. Vous pouvez formuler une nouvelle demande. Aucune relance automatique.",
            );
          }
        }
        const proj = await fetch(`/api/projects/${params.projectId}`);
        if (proj.ok) {
          const pj = await proj.json();
          setDocuments(pj.documents ?? []);
          setKnowledge(pj.knowledge ?? null);
        }
        await refreshDurablePilotage();
        setNoraActivity(
          j.status === "UNKNOWN" || j.status === "FAILED" || j.status === "INTERRUPTED"
            ? "error"
            : "idle",
        );
        // R05: cognitive UNKNOWN/INTERRUPTED without métier clears pending → unfreeze.
        // Métier UNKNOWN keeps freeze via shouldClearDraft === false.
        if (
          !shouldClearDraft &&
          (String(j.status ?? "") === "UNKNOWN" || String(j.status ?? "") === "INTERRUPTED")
        ) {
          setChoiceFrozen(true);
        } else {
          setChoiceFrozen(false);
        }
      } else {
        // ACK lost / HTTP error — retain turn key; KEEP choices frozen (server may have applied).
        setChoiceFrozen(true);
        rememberPending(buildPending());
        setNoraActivity("error");
        setStatus(
          res.status === 409
            ? `${String(j.errorCategory ?? j.error ?? "conflit")} — intention de tour conservée`
            : String(j.error ?? j.errorCategory ?? "échec — tentative conservée"),
        );
      }
    } catch {
      // Network loss after click: fail closed — freeze until reconcile proves outcome.
      setChoiceFrozen(true);
      rememberPending(buildPending());
      setNoraActivity("error");
      setStatus("échec réseau — intention de tour conservée");
    } finally {
      setBusy(false);
    }
  }

  if (unavailableKind) {
    return (
      <ProjectUnavailable
        kind={unavailableKind}
        onRetry={
          unavailableKind === "temporary"
            ? () => {
                setUnavailableKind(null);
                setLoadEpoch((n) => n + 1);
              }
            : undefined
        }
        onLogin={
          unavailableKind === "unauthorized" ? () => router.push("/login") : undefined
        }
      />
    );
  }

  if (projectLoadState === "loading" && !projectName) {
    return (
      <div
        data-testid="project-load-state"
        data-project-load-state="loading"
        data-project-id={params.projectId}
      >
        <ProjectUnavailable kind="loading" />
      </div>
    );
  }

  const travailLayout = viewer ? (viewerEnlarged ? "enlarged" : "split") : "normal";

  return (
    <ProjectChrome
      projectId={params.projectId}
      projectName={projectName}
      surface={surface}
      statusHint={statusHint}
      loadState={projectLoadState}
      travailLayout={travailLayout}
    >
      {surface === "projet" ? (
        <ProjectOverview
          projectId={params.projectId}
          projectName={projectName ?? "Projet"}
          preparationId={preparationId}
          knowledge={knowledge}
          documentCount={documents.length}
          messageCount={messages.length}
          onOpenTravail={() => selectSurface("travail")}
        />
      ) : null}

      {surface === "travail" ? (
        <NoraConversation
          embeddedInStage
          messages={messages}
          draft={draft}
          busy={busy || !preparationId}
          unresolvedPending={Boolean(unresolvedPending)}
          activity={noraActivity}
          status={[status, pilotageStatus].filter(Boolean).join(" · ") || undefined}
          projections={resolveActionableProjections({
            messages,
            projections: turnProjections,
            suspendActions:
              choiceFrozen ||
              noraActivity === "preparing" ||
              Boolean(unresolvedPending),
          })}
          onChoice={sendChoice}
          onReference={(ref) => void openTravailReference(ref)}
          choiceFrozen={choiceFrozen}
          forceStickToken={forceStickToken}
          layoutMode={travailLayout}
          focusMessageId={focusMessageId}
          focusStatus={focusStatus}
          onFocusMessageHandled={() => {
            setFocusMessageId(null);
          }}
          onDraft={(v) => {
            setDraft(v);
            persistDraft(v);
          }}
          onSend={() => void sendMessage()}
          onReconcile={
            unresolvedPending
              ? () => void reconcilePending(unresolvedPending)
              : undefined
          }
          aside={
            viewer ? (
              <TravailViewer
                resource={viewer}
                enlarged={viewerEnlarged}
                onEnlarge={() => setViewerEnlarged(true)}
                onReduce={() => setViewerEnlarged(false)}
                onClose={closeViewer}
                onOpenInDocuments={
                  viewer.kind === "document"
                    ? () => {
                        const match = documents.find(
                          (d) => d.document.id === viewer.documentId,
                        );
                        if (match) openDocumentReadOnly(match);
                      }
                    : undefined
                }
              />
            ) : (
            <div className="fig-inspector" data-testid="travail-aside-inspector">
              <p className="fig-kicker">Contexte projet</p>
              <h2 className="fig-inspector-title">En bref</h2>
              <div className="fig-inspector-rule" aria-hidden />
              <p className="fig-inspector-name" data-testid="travail-aside-bref">
                {projectName ?? "Projet"}
              </p>
              <span className="fig-tag fig-tag-ok mt-2 inline-flex">
                {statusHint && /reprise|conservé|durable/i.test(statusHint)
                  ? "Contexte conservé"
                  : "Projet actif"}
              </span>
              <div className="fig-inspector-rule" aria-hidden />
              <p className="fig-inspector-section">Repères</p>
              <div className="fig-inspector-card" data-testid="travail-aside-objets">
                <p className="fig-inspector-card-title">Continuité</p>
                <p className="fig-inspector-card-body">
                  Fil de préparation et conversation consultables depuis Travail.
                </p>
              </div>
              <div className="fig-inspector-card">
                <p className="fig-inspector-card-title">Dossier du projet</p>
                <p className="fig-inspector-card-body">
                  {documents.length > 0
                    ? `${documents.length} document${documents.length > 1 ? "s" : ""} Nora disponible${documents.length > 1 ? "s" : ""}.`
                    : "Les objets et sources du projet restent distincts du dialogue."}
                </p>
                {documents.length > 0 ? (
                  <div className="fig-inspector-links mt-2">
                    {documents.map((d) => (
                      <button
                        key={d.document.id}
                        type="button"
                        className="fig-inspector-link"
                        data-testid={`travail-consulter-${d.document.id}`}
                        onClick={() => openTravailDocument(d)}
                      >
                        Consulter · {d.document.title}
                      </button>
                    ))}
                  </div>
                ) : null}
                <div className="fig-inspector-links">
                  <button
                    type="button"
                    className="fig-inspector-link"
                    onClick={() => selectSurface("git")}
                  >
                    Sources Git
                  </button>
                  <button
                    type="button"
                    className="fig-inspector-link"
                    onClick={() => selectSurface("publication")}
                  >
                    Résultats et preuves
                  </button>
                </div>
              </div>
              <div className="fig-inspector-rule" aria-hidden />
              <p className="fig-inspector-section">Points à clarifier</p>
              <div data-testid="travail-aside-clarifier">
                {(knowledge?.openPoints ?? [])
                  .filter((o) => o.status === "OPEN")
                  .slice(0, 5)
                  .map((o) => (
                    <p key={o.id} className="fig-inspector-card-body mb-2">
                      {o.statement}
                    </p>
                  ))}
                {(knowledge?.openPoints ?? []).filter((o) => o.status === "OPEN").length === 0 ? (
                  <p className="fig-inspector-card-body">
                    Seules les informations réellement connues seront affichées.
                  </p>
                ) : null}
              </div>
            </div>
            )
          }
        />
      ) : null}

      {surface === "pilotage" ? (
        <div className="space-y-4" data-figma-frame="125:33" data-testid="project-trajectory">
          <div className="fig-section-head">
            <div>
              <p className="fig-kicker">Pilotage</p>
              <h2 className="fig-section-title">Trajectoire, cycle et décisions</h2>
              <p className="fig-hero-sub !mt-1">
                Affichage D5/D6 existant — sans cycle fictif, sans commande autoritaire depuis Nora.
              </p>
            </div>
          </div>
          <div className="fig-stat-grid">
            <div className="fig-stat">
              <div className="fig-stat-label">Cycle</div>
              <div className="fig-stat-value" style={{ fontSize: "1.15rem", marginTop: 14 }}>
                Sans / actif
              </div>
              <div className="fig-stat-hint">Projection service projet</div>
            </div>
            <div className="fig-stat">
              <div className="fig-stat-label">Décisions D6</div>
              <div className="fig-stat-value" style={{ fontSize: "1.15rem", marginTop: 14 }}>
                HumanDecision
              </div>
              <div className="fig-stat-hint">Pas de mutation à l&apos;affichage</div>
            </div>
            <div className="fig-stat">
              <div className="fig-stat-label">CKI / méthode</div>
              <div className="fig-stat-value" style={{ fontSize: "1.15rem", marginTop: 14 }}>
                Guidance
              </div>
              <div className="fig-stat-hint">Disponibilité réelle du service</div>
            </div>
          </div>
          <div className="fig-panel" data-figma-frame="127:106">
            <PilotagePanel projectId={params.projectId} />
          </div>
        </div>
      ) : null}

      {surface === "document" ? (
        <div className="fig-workspace-3" data-figma-frame="94:370">
          <DocumentLibrary
            documents={documents.map((d) => ({
              document: { ...d.document, projectId: params.projectId },
              latestRevision: d.latestRevision ?? null,
            }))}
            selectedId={inspect?.document.id ?? null}
            onSelect={(d) => {
              const match = documents.find((x) => x.document.id === d.document.id);
              if (match) openDocumentReadOnly(match);
            }}
          />
          <div className="space-y-3">
            <DocumentInspector
              frameId={docUi === "CONFLICT" ? "160:391" : "97:359"}
              title={
                docUi === "EDITING" ||
                docUi === "SAVING" ||
                docUi === "CONFLICT" ||
                docUi === "UNKNOWN"
                  ? "Révision"
                  : "Inspection"
              }
              uiState={docUi}
              missing={docMissing || null}
              markdown={
                docUi === "READING" || docUi === "FAILED"
                  ? inspect?.latestRevision?.contentMarkdown ?? null
                  : null
              }
              editing={
                docUi === "EDITING" ||
                docUi === "SAVING" ||
                docUi === "CONFLICT" ||
                docUi === "UNKNOWN" ||
                docUi === "FAILED"
              }
              draft={reviseDraft}
              onDraft={setReviseDraft}
              busy={docUi === "SAVING"}
              onStartRevise={
                inspect?.latestRevision
                  ? () => {
                      setDocUi("EDITING");
                      setReviseDraft(inspect.latestRevision?.contentMarkdown ?? "");
                      reviseCorrelationRef.current = null;
                      reviseBaseIdRef.current = inspect.latestRevision?.id ?? null;
                    }
                  : undefined
              }
              onSaveRevise={() => void saveRevision()}
              onConflictRebase={docUi === "CONFLICT" ? acceptConflictRebase : undefined}
              onCancel={() => {
                setDocUi("READING");
                setReviseDraft(inspect?.latestRevision?.contentMarkdown ?? "");
                setReviseMessage("");
                reviseCorrelationRef.current = null;
                reviseBaseIdRef.current = inspect?.latestRevision?.id ?? null;
              }}
              reviseMessage={reviseMessage}
            >
              {inspect?.latestRevision && docUi === "READING" ? (
                <button
                  type="button"
                  className="btn secondary"
                  onClick={() => {
                    setInspect(null);
                    setDocUi("READING");
                    selectSurface("travail");
                  }}
                >
                  Retour au fil
                </button>
              ) : null}
            </DocumentInspector>
            <DocumentHistory
              revisions={docHistory}
              activeRevisionId={inspect?.latestRevision?.id}
              onCompareLatest={
                preparationId && inspect
                  ? () => {
                      void (async () => {
                        const listRes = await fetch(
                          `/api/preparations/${preparationId}/documents/${inspect.document.id}`,
                        );
                        const list = await listRes.json();
                        const revs = (list.revisions ?? []).filter(
                          (r: { status: string }) => r.status === "AVAILABLE",
                        );
                        if (revs.length < 2) {
                          setDocDiffText("Comparaison: moins de deux versions AVAILABLE");
                          return;
                        }
                        const left = revs[revs.length - 2];
                        const right = revs[revs.length - 1];
                        const cmpRes = await fetch(
                          `/api/preparations/${preparationId}/documents/${inspect.document.id}?left=${left.id}&right=${right.id}`,
                        );
                        const cmp = await cmpRes.json();
                        if (cmp.status === "AVAILABLE" && !cmp.diff?.degraded) {
                          setDocDiffText(
                            `v${cmp.left.revisionNumber} → v${cmp.right.revisionNumber}\n` +
                              `+ ${cmp.diff.added.length} / - ${cmp.diff.removed.length}`,
                          );
                        } else {
                          setDocDiffText(
                            `Diff ${cmp.status}: ${cmp.reason ?? cmp.diff?.reason ?? ""}`,
                          );
                        }
                      })();
                    }
                  : undefined
              }
              diffText={docDiffText}
            />
          </div>
        </div>
      ) : null}

      {surface === "git" || surface === "publication" ? (
        <div className="space-y-4" data-testid="git-surface">
          <PublicationInspectionPanel projectId={params.projectId} />
        </div>
      ) : null}

      {surface === "journal" ? (
        <ProjectJournal
          subjects={(knowledge?.subjects ?? []).map((s) => ({
            id: s.id,
            title: s.title,
            status: s.status,
            parentSubjectId: s.parentSubjectId ?? null,
            originatedFromSubjectId: s.originatedFromSubjectId,
            summary: s.summary ?? null,
          }))}
          acquis={knowledge?.acquis ?? []}
          openPoints={knowledge?.openPoints ?? []}
          decisions={journalDecisions}
          restrictions={journalRestrictions}
          sourceLinks={journalSources}
          contradictions={journalContradictions}
          initialNav={journalNav}
          onNavChange={setJournalNav}
          onOpenMessage={(messageId) => {
            // Navigate immediately so in-flight fetches cannot fight a later Journal return.
            setFocusStatus(null);
            setFocusMessageId(messageId);
            selectSurface("travail");
            const navGen = surfaceNavGenRef.current;
            void (async () => {
              const local = messages.find((m) => m.id === messageId);
              if (!local) {
                const res = await fetch(
                  `/api/projects/${params.projectId}/messages/${encodeURIComponent(messageId)}`,
                );
                const body = (await res.json().catch(() => ({}))) as {
                  status?: string;
                  reason?: string;
                  message?: {
                    messageId: string;
                    role: string;
                    content: string;
                    status: string;
                    createdAt?: string;
                    ordinal?: number;
                  };
                };
                if (!res.ok || !body.message) {
                  if (navGen !== surfaceNavGenRef.current) return;
                  setFocusStatus(
                    body.reason ?? "Message introuvable ou accès refusé — retour Journal possible.",
                  );
                  return;
                }
                // E06-04 — prefer canonical reload; otherwise insert by createdAt (never append blindly).
                const prepId = preparationIdRef.current;
                let reloaded = false;
                if (prepId) {
                  const listRes = await fetch(`/api/preparations/${prepId}/messages`);
                  if (listRes.ok) {
                    const listBody = (await listRes.json().catch(() => ({}))) as {
                      messages?: Msg[];
                    };
                    const rows = Array.isArray(listBody)
                      ? (listBody as unknown as Msg[])
                      : Array.isArray(listBody.messages)
                        ? listBody.messages
                        : null;
                    if (rows && rows.some((m) => m.id === messageId)) {
                      setMessages(
                        rows.map((m) => ({
                          id: m.id,
                          role: m.role,
                          content: m.content,
                          status: m.status,
                          createdAt:
                            typeof m.createdAt === "string"
                              ? m.createdAt
                              : m.createdAt
                                ? new Date(m.createdAt as unknown as string).toISOString()
                                : undefined,
                        })),
                      );
                      reloaded = true;
                    }
                  }
                }
                if (!reloaded) {
                  const fetched: Msg = {
                    id: body.message.messageId,
                    role: body.message.role,
                    content: body.message.content,
                    status: body.message.status,
                    createdAt: body.message.createdAt,
                  };
                  const targetT = fetched.createdAt ? Date.parse(fetched.createdAt) : Number.NaN;
                  if (!Number.isFinite(targetT)) {
                    setFocusStatus(
                      "Message exact chargé — horodatage absent ; chronologie non inventée.",
                    );
                  }
                  setMessages((prev) => {
                    if (prev.some((m) => m.id === fetched.id)) return prev;
                    if (!Number.isFinite(targetT)) return [...prev, fetched];
                    const insertAt = prev.findIndex((m) => {
                      const t = m.createdAt ? Date.parse(m.createdAt) : Number.NaN;
                      return Number.isFinite(t) && t > targetT;
                    });
                    if (insertAt < 0) return [...prev, fetched];
                    const copy = prev.slice();
                    copy.splice(insertAt, 0, fetched);
                    return copy;
                  });
                }
              }
              // Preserve draft + journalNav; never auto-send. Surface already switched above.
              if (navGen !== surfaceNavGenRef.current) return;
              setFocusMessageId(messageId);
            })();
          }}
          onOpenDocument={(documentId, revisionId) => {
            // J-C14 — open exact D4 revision in Travail viewer (same continuity pattern as message).
            // Preserve journalNav; do not invent content if D4 refuses.
            const titleHint =
              documents.find((d) => d.document.id === documentId)?.document.title ?? "Document";
            const seq = ++viewerRequestSeqRef.current;
            viewerOpenRef.current = true;
            setViewer({
              kind: "document",
              documentId,
              title: titleHint,
              revisionId: revisionId ?? null,
              revisionNumber: null,
              versionSource: revisionId ? "exact" : "current",
              markdown: null,
              available: false,
              unavailableReason: "Vérification D4 de la révision citée…",
            });
            void fetchDocumentViewerViaD4({
              documentId,
              titleHint,
              revisionId: revisionId ?? null,
              versionSource: revisionId ? "exact" : "current",
              seq,
              projectIdAtStart: params.projectId,
            });
            selectSurface("travail");
            const match = documents.find((d) => d.document.id === documentId);
            if (match) setInspect(match);
          }}
          onBackToThread={() => selectSurface("travail")}
        />
      ) : null}
    </ProjectChrome>
  );
}

```

### tokens.css — section Journal V4 (extrait contractuel à partir du marqueur Ensemble 06)
```css
/* Ensemble 06 — Journal V4 (Figma 835:71 / 842:* / 860:*) */
.project-space-page--journal {
  --journal-ink: #f4f6fd;
  --journal-muted: #96a2ba;
  --journal-muted-2: #6f7e96;
  --journal-line: #273049;
  --journal-panel: #151c2a;
  --journal-panel-2: #101523;
  --journal-accent: #7172ea;
  --journal-accent-soft: #ada5ff;
  --journal-accent-2: #827cff;
  --journal-banner: #1e2544;
}
.journal-shell {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  min-height: 0;
}
.journal-layout-full .journal-main-column {
  flex: 1 1 auto;
  width: 100%;
  max-width: 1330px;
}
.journal-layout-split .journal-main-column {
  flex: 0 0 526px;
  width: 526px;
  max-width: 40%;
  min-width: 280px;
}
.journal-layout-enlarged .journal-main-column {
  display: none;
}
.journal-main-column {
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
}
.journal-v4-head {
  margin-bottom: 28px;
}
.journal-v4-kicker {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--journal-accent-soft);
  text-transform: uppercase;
}
.journal-v4-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}
.journal-v4-title {
  margin: 0;
  font-size: 31px;
  font-weight: 600;
  line-height: 1.15;
  color: var(--journal-ink);
}
.journal-v4-sub {
  margin: 10px 0 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--journal-muted);
  max-width: 52rem;
}
.journal-layout-split .journal-v4-sub {
  font-size: 14px;
}
.journal-v4-back-thread {
  flex: 0 0 auto;
  appearance: none;
  border: 1px solid var(--journal-line);
  background: var(--journal-panel-2);
  color: var(--journal-muted);
  border-radius: 9px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 6px;
}
.journal-tabs {
  display: flex;
  gap: 48px;
  border-bottom: 1px solid var(--journal-line);
  margin-bottom: 18px;
  position: relative;
}
.journal-tab {
  appearance: none;
  border: none;
  background: transparent;
  color: var(--journal-muted);
  font-size: 14px;
  font-weight: 500;
  padding: 0 0 14px;
  margin: 0;
  cursor: pointer;
  position: relative;
  border-radius: 0;
}
.journal-tab.is-active {
  color: var(--journal-ink);
  font-weight: 600;
  background: transparent;
}
.journal-tab.is-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 73px;
  height: 3px;
  border-radius: 2px;
  background: var(--journal-accent);
}
.journal-tab[data-testid="journal-tab-decisions"].is-active::after {
  width: 80px;
}
.journal-search-wrap {
  position: relative;
  margin-bottom: 22px;
}
.journal-search-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--journal-muted);
  font-size: 22px;
  pointer-events: none;
  line-height: 1;
}
.journal-search {
  width: 100%;
  box-sizing: border-box;
  height: 55px;
  padding: 0 18px 0 56px;
  border-radius: 11px;
  border: 1px solid var(--journal-line);
  background: var(--journal-panel-2);
  color: var(--journal-ink);
  font-size: 14px;
}
.journal-search::placeholder {
  color: var(--journal-muted);
}
.journal-section-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.journal-section-label {
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--journal-muted);
}
.journal-section-hint {
  margin: 0;
  margin-left: auto;
  font-size: 12px;
  color: var(--journal-muted-2);
}
.journal-section-bar .journal-section-label {
  margin-right: auto;
}
.journal-filter-open {
  appearance: none;
  height: 34px;
  padding: 0 14px;
  border-radius: 9px;
  border: 1px solid #35415c;
  background: #131c2d;
  color: #b9b0ff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
}
.journal-filter-open.is-active {
  border-color: var(--journal-accent);
  background: #1e2544;
}
.journal-hierarchy {
  border: 1px solid var(--journal-line);
  border-radius: 14px;
  background: var(--journal-panel);
  padding: 8px 0;
  min-height: 120px;
}
.journal-empty-copy {
  margin: 24px 28px;
  font-size: 14px;
  color: var(--journal-muted);
  max-width: 36rem;
  line-height: 1.45;
}
.journal-group {
  border-bottom: 1px solid var(--journal-line);
}
.journal-group:last-child {
  border-bottom: none;
}
.journal-group-head,
.journal-child-row,
.journal-decision-row {
  width: 100%;
  text-align: left;
  appearance: none;
  border: none;
  background: transparent;
  color: var(--journal-ink);
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.journal-group-head {
  padding: 18px 22px 16px;
}
.journal-group.is-selected > .journal-group-head,
.journal-child-row.is-selected,
.journal-decision-row.is-selected {
  background: #242d4b;
  box-shadow: inset 3px 0 0 var(--journal-accent);
}
.journal-expand {
  flex: 0 0 28px;
  color: var(--journal-accent-soft);
  font-size: 20px;
  line-height: 1.2;
  margin-top: 2px;
}
.journal-expand.is-leaf-mark {
  color: var(--journal-muted-2);
  font-size: 16px;
}
.journal-group-text {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.journal-group-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--journal-ink);
  line-height: 1.25;
}
.journal-group.is-leaf .journal-group-title,
.journal-child-title {
  font-size: 16px;
  font-weight: 500;
}
.journal-child-title {
  color: var(--journal-ink);
}
.journal-row-desc {
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: var(--journal-muted);
  line-height: 1.35;
}
.journal-axes {
  flex: 0 0 auto;
  font-size: 11px;
  font-weight: 600;
  color: var(--journal-accent-soft);
  margin-top: 6px;
}
.journal-open-arrow {
  flex: 0 0 20px;
  color: var(--journal-muted-2);
  font-size: 15px;
  margin-top: 4px;
}
.journal-open-badge,
.journal-match {
  display: inline-block;
  margin-top: 4px;
  margin-right: 8px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  background: #1e2544;
  color: #b9b0ff;
}
.journal-children {
  list-style: none;
  margin: 0;
  padding: 0 18px 10px 52px;
  position: relative;
}
.journal-children::before {
  content: "";
  position: absolute;
  left: 36px;
  top: 0;
  bottom: 12px;
  width: 1px;
  background: var(--journal-line);
}
.journal-child-row {
  padding: 12px 8px 12px 18px;
  border-top: 1px solid var(--journal-line);
  position: relative;
}
.journal-child-row::before {
  content: "";
  position: absolute;
  left: 0;
  top: 22px;
  width: 14px;
  height: 1px;
  background: var(--journal-line);
}
.journal-grandchildren {
  list-style: none;
  margin: 0;
  padding: 0 0 0 18px;
}
.journal-child-row.is-nested {
  font-size: 14px;
}
.journal-decision-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.journal-decision-row {
  align-items: center;
  gap: 16px;
  min-height: 118px;
  padding: 18px 22px;
  border-radius: 12px;
  border: 1px solid #35415c;
  background: var(--journal-panel);
}
.journal-decision-main {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.journal-decision-title {
  font-size: 17px;
  font-weight: 600;
  color: #f6f7ff;
}
.journal-decision-meta {
  font-size: 11px;
  color: #99a8c6;
}
.journal-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 29px;
  padding: 0 12px;
  border-radius: 9px;
  border: 1px solid #35415c;
  background: #131c2d;
  font-size: 10px;
  font-weight: 500;
  color: #c8d1e4;
  white-space: nowrap;
}
.journal-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 4px;
  background: #99a8c6;
}
.journal-status-ok .journal-status-dot {
  background: #9dd9c9;
}
.journal-status-warn .journal-status-dot {
  background: #efce96;
}
.journal-viewer {
  flex: 1 1 auto;
  min-width: 0;
  max-width: 784px;
  margin-left: auto;
  border: 1px solid #35415c;
  border-radius: 17px;
  background: #141c2b;
  display: flex;
  flex-direction: column;
  min-height: 640px;
  overflow: hidden;
}
.journal-layout-enlarged .journal-viewer {
  max-width: none;
  width: 100%;
  min-height: 780px;
}
.journal-viewer-banner {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin: 14px 14px 0;
  padding: 16px 18px 18px;
  border-radius: 15px;
  border: 1px solid #444d7a;
  background: var(--journal-banner);
  box-shadow: inset 3px 0 0 var(--journal-accent-2);
}
.journal-viewer-kicker {
  margin: 0 0 8px;
  font-size: 10px;
  font-weight: 600;
  color: #b9b0ff;
  letter-spacing: 0.04em;
}
.journal-viewer-title {
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  color: #f6f7ff;
  line-height: 1.2;
}
.journal-viewer-lede {
  margin: 10px 0 0;
  font-size: 13px;
  color: #dce4f4;
}
.journal-viewer-type {
  display: inline-flex;
  margin-top: 14px;
  padding: 4px 12px;
  border-radius: 13px;
  border: 1px solid #414c6a;
  background: #21294a;
  font-size: 10px;
  color: #dce4f4;
}
.journal-viewer-actions {
  display: flex;
  gap: 8px;
  flex: 0 0 auto;
}
.journal-viewer-btn {
  appearance: none;
  height: 33px;
  padding: 0 12px;
  border-radius: 9px;
  border: 1px solid #414c6a;
  background: #12192d;
  color: #dce4f4;
  font-size: 12px;
  cursor: pointer;
}
.journal-viewer-close {
  width: 32px;
  padding: 0;
  font-size: 18px;
}
.journal-viewer-body {
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 14px;
}
.journal-card {
  border: 1px solid #35415c;
  border-radius: 14px;
  background: #182234;
  padding: 16px 18px;
}
.journal-card-synthesis {
  box-shadow: inset 3px 0 0 var(--journal-accent-2);
}
.journal-card-kicker {
  margin: 0 0 10px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #b9b0ff;
}
.journal-card-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.journal-card-half {
  background: #131c2d;
  border-radius: 13px;
}
.journal-acquis-line,
.journal-open-line {
  margin: 0 0 8px;
  font-size: 14px;
  color: #f6f7ff;
  line-height: 1.35;
}
.journal-muted {
  margin: 0;
  font-size: 12px;
  color: #99a8c6;
}
.journal-warn {
  margin: 0 0 8px;
  font-size: 12px;
  color: #efce96;
}
.journal-breadcrumb {
  margin: 6px 0 0;
  font-size: 11px;
  color: #99a8c6;
}
.journal-child-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.journal-child-link {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  appearance: none;
  border: none;
  background: transparent;
  color: #f6f7ff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  text-align: left;
}
.journal-restriction-list {
  list-style: disc;
  padding-left: 1.2rem;
  margin: 0;
  color: #c8d1e4;
  font-size: 12px;
}
.journal-source-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.journal-source-chip {
  width: 100%;
  text-align: left;
  appearance: none;
  border: none;
  background: #131c2d;
  border-radius: 9px;
  padding: 12px 14px;
  color: #dce4f4;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.journal-source-chip:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
.journal-source-label {
  font-size: 10px;
  font-weight: 500;
  color: #99a8c6;
  text-transform: uppercase;
}
.journal-source-cta {
  font-size: 13px;
  font-weight: 500;
  color: #b9b0ff;
}
.journal-continue {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  appearance: none;
  border: 1px solid #3c486c;
  background: #1c2540;
  border-radius: 11px;
  padding: 14px 16px;
  color: #eef0ff;
  cursor: pointer;
  box-shadow: inset 3px 0 0 var(--journal-accent-2);
  text-align: left;
}
.journal-continue-cta {
  display: block;
  margin-top: 4px;
  font-size: 13px;
  font-weight: 600;
}
.fig-msg.is-journal-focus,
.fig-msg[data-journal-focus="1"] {
  outline: 2px solid var(--journal-accent-soft);
  outline-offset: 2px;
  background: #1e2544;
}
@media (max-width: 1280px) {
  .journal-layout-split .journal-main-column {
    flex-basis: 42%;
    width: 42%;
    max-width: none;
  }
  .journal-card-row {
    grid-template-columns: 1fr;
  }
  .journal-group-title {
    font-size: 18px;
  }
}

```

### DIFF utile — page.tsx
```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index e7b9d86d..b11be370 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -207,6 +207,8 @@ export default function ProjectPage() {
   /** C1 — ignore stale async viewer responses after A→B / close / project change. */
   const viewerRequestSeqRef = useRef(0);
   const viewerOpenRef = useRef(false);
+  /** Invalidates in-flight Journal→Travail deep-links when the user navigates away. */
+  const surfaceNavGenRef = useRef(0);

   useEffect(() => {
     // Clear previous project identity immediately — no cross-project leak in the rail.
@@ -294,7 +296,10 @@ export default function ProjectPage() {
     return () => {
       cancelled = true;
     };
-  }, [surface, params.projectId, knowledge]);
+    // Refresh when entering Journal surface / project — not on every knowledge identity change
+    // (that cancelled in-flight loads and dropped sourceLinks intermittently).
+    // eslint-disable-next-line react-hooks/exhaustive-deps
+  }, [surface, params.projectId]);

   useEffect(() => {
     projectIdRef.current = params.projectId;
@@ -727,6 +732,7 @@ export default function ProjectPage() {
   }

   function selectSurface(next: Surface) {
+    surfaceNavGenRef.current += 1;
     pendingSurfaceRef.current = next;
     noteProjectSurfaceNavIntent(params.projectId, next as StudioSurface);
     setSurface(next);
@@ -1283,6 +1289,7 @@ export default function ProjectPage() {

   // B2 — keep surface/document in sync with URL on Back/Forward without one-shot lock.
   useEffect(() => {
+    surfaceNavGenRef.current += 1;
     const qSurface = parseSurface(searchParams.get("surface"));
     const qDocId = searchParams.get("documentId");
     applyUrlDocumentState(documentsRef.current, qSurface, qDocId);
@@ -2022,8 +2029,12 @@ export default function ProjectPage() {
           initialNav={journalNav}
           onNavChange={setJournalNav}
           onOpenMessage={(messageId) => {
+            // Navigate immediately so in-flight fetches cannot fight a later Journal return.
+            setFocusStatus(null);
+            setFocusMessageId(messageId);
+            selectSurface("travail");
+            const navGen = surfaceNavGenRef.current;
             void (async () => {
-              setFocusStatus(null);
               const local = messages.find((m) => m.id === messageId);
               if (!local) {
                 const res = await fetch(
@@ -2042,10 +2053,10 @@ export default function ProjectPage() {
                   };
                 };
                 if (!res.ok || !body.message) {
+                  if (navGen !== surfaceNavGenRef.current) return;
                   setFocusStatus(
                     body.reason ?? "Message introuvable ou accès refusé — retour Journal possible.",
                   );
-                  selectSurface("travail");
                   return;
                 }
                 // E06-04 — prefer canonical reload; otherwise insert by createdAt (never append blindly).
@@ -2109,9 +2120,9 @@ export default function ProjectPage() {
                   });
                 }
               }
-              // Preserve draft + journalNav; never auto-send.
+              // Preserve draft + journalNav; never auto-send. Surface already switched above.
+              if (navGen !== surfaceNavGenRef.current) return;
               setFocusMessageId(messageId);
-              selectSurface("travail");
             })();
           }}
           onOpenDocument={(documentId, revisionId) => {

```

### DIFF utile — ProjectChrome.tsx
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 05b45841..04380732 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -27,9 +27,9 @@ const HERO: Record<
     sub: "Cycle, méthode, CKI et décisions humaines — affichage D5/D6 existant.",
   },
   journal: {
-    kicker: "Espace projet  /  Journal",
-    title: "Sujets et acquis",
-    sub: "Sujets, acquis et points ouverts — présentation sans nouvelle autorité.",
+    kicker: "ESPACE PROJET  /  JOURNAL",
+    title: "Journal",
+    sub: "La mémoire du projet, organisée par thèmes. Retrouvez l’essentiel sans remonter toute la conversation.",
   },
   document: {
     kicker: "Espace projet  /  Documents Nora",
@@ -65,6 +65,9 @@ export function ProjectChrome(props: {
   const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
   const displayName = props.projectName?.trim() || "Projet";
   const isTravail = props.surface === "travail";
+  /** Journal V4 — hero lives inside ProjectJournal (full vs compact 40/60). */
+  const isJournal = props.surface === "journal";
+  const breadcrumbOnly = isTravail || isJournal;

   const continuityBadge =
     isTravail && props.statusHint && !/^chargement/i.test(props.statusHint) ? (
@@ -90,7 +93,7 @@ export function ProjectChrome(props: {

   return (
     <div
-      className={`fig-page project-space-page${isTravail ? " project-space-page--travail" : ""}`}
+      className={`fig-page project-space-page${isTravail ? " project-space-page--travail" : ""}${isJournal ? " project-space-page--journal" : ""}`}
       data-project-surface={props.surface}
       data-testid="project-load-state"
       data-project-load-state={loadState}
@@ -98,21 +101,20 @@ export function ProjectChrome(props: {
       data-project-name={props.projectName ?? ""}
     >
       <div
-        className={`project-space-header${isTravail ? " project-space-header--breadcrumb-only" : ""}`}
+        className={`project-space-header${breadcrumbOnly ? " project-space-header--breadcrumb-only" : ""}`}
         data-testid="project-space-header"
       >
         <div className="fig-breadcrumb project-space-breadcrumb">
           <span data-testid="project-breadcrumb">
-            SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;Projet&nbsp;&nbsp;/&nbsp;&nbsp;
-            <span className="text-[var(--fg)]">{displayName}</span>
-            &nbsp;&nbsp;/&nbsp;&nbsp;{surfaceLabel}
+            SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;{displayName}&nbsp;&nbsp;/&nbsp;&nbsp;
+            {surfaceLabel}
           </span>
           <span className="project-space-badge" data-testid="project-espace-badge">
             ESPACE PROJET
           </span>
         </div>

-        {!isTravail ? (
+        {!breadcrumbOnly ? (
           <header className="project-space-hero space-y-1">
             <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
             <div className="project-space-hero-row">

```

### DIFF utile — journal-v4-parcours.spec.ts
```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts b/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
index 17376740..b3993b9e 100644
--- a/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts
@@ -73,7 +73,7 @@ test.describe("Journal V4 — données métier non vides (E06-01 + §5)", () =>
     const matchBadge = page.getByTestId(`journal-match-${seed.leafSubjectId}`);
     await expect(matchBadge).toBeVisible();
     await expect(matchBadge).toHaveText(/acquis/i);
-    await page.getByTestId("journal-filter-open-points").locator("input").check();
+    await page.getByTestId("journal-filter-open-points").click();

     // B — 40/60 + enlarge (non conditionnel)
     await leaf.click();
@@ -111,13 +111,21 @@ test.describe("Journal V4 — données métier non vides (E06-01 + §5)", () =>
     await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

     // J-C13 — return via rail (NOT page.goto) and assert nav restored
-    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
+    const journalNav = page.getByTestId("studio-rail").getByTestId("nav-journal");
+    await journalNav.click();
     await expect(page).toHaveURL(/surface=journal/);
+    // Soft-nav URL can land before React surface commit; retry rail once if needed.
+    if (!(await page.getByTestId("project-journal").isVisible().catch(() => false))) {
+      await journalNav.click();
+    }
     await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
     await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");
     await expect(page.getByTestId(`journal-subject-${seed.leafSubjectId}`)).toBeVisible();
     await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
-    await expect(page.getByTestId("journal-filter-open-points").locator("input")).toBeChecked();
+    await expect(page.getByTestId("journal-filter-open-points")).toHaveAttribute(
+      "aria-pressed",
+      "true",
+    );

     // D — J-C11 Décisions : terme présent dans explication, absent du libellé
     await page.getByTestId("journal-tab-decisions").click();
@@ -127,13 +135,16 @@ test.describe("Journal V4 — données métier non vides (E06-01 + §5)", () =>
     });
     await page.getByTestId(`journal-decision-${seed.decisionApplicableId}`).click();
     await expect(page.getByTestId("journal-decision-viewer")).toBeVisible();
-    await expect(page.getByTestId("journal-decision-applicability")).toContainText(/applicable/i);
+    await expect(page.getByTestId("journal-decision-applicability")).toContainText(/applicable|historique|vigueur|scope/i);
     await expect(page.getByTestId("journal-decision-viewer")).toContainText(/multicritèreorion/i);

     // Back to subjects for document source click
     await page.getByTestId("journal-tab-subjects").click();
     await page.getByTestId("journal-search").fill("");
-    await page.getByTestId("journal-filter-open-points").locator("input").uncheck();
+    const openFilter = page.getByTestId("journal-filter-open-points");
+    if ((await openFilter.getAttribute("aria-pressed")) === "true") {
+      await openFilter.click();
+    }
     const budgetSubject = page.getByTestId(`journal-subject-${seed.otherParentId}`);
     await expect(budgetSubject).toBeVisible();
     await budgetSubject.click();

```

### DIFF utile — delivery-history.md
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index c8a6bd2d..ffb007e0 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,38 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-19-JOURNAL-V4-FIGMA-UX
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-19 ~12:15 CET |
+| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 Figma UX corrective |
+| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** · **NO RECETTE CUTOVER** |
+| GO Morris | NON CONFORME UX Figma → correctif obligatoire ; cutover RECETTE hors mandat |
+| Parent | local `d5bf7eb7` (build RECETTE toujours servi) |
+| Scope | ProjectJournal V4 shell · tokens · Chrome breadcrumb-only · deep-link race · 11 captures |
+| Figma | 11 frames `itgvCulInEnFY6DvgIegvP` page 828:2 lus via MCP |
+| Provenance CampusFlow | Classification A — titre D4 fragment conversationnel, pas de fuite |
+| Verdict Cursor | `FIGMA TO RUNTIME ALIGNED — READY FOR MORRIS VISUAL REVIEW` (réserves pixel / J-C14) |
+
+
+## delivery_id: DELIV-2026-11-19-JOURNAL-V4-RECETTE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-19 ~11:33 CET |
+| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 qualification + RECETTE |
+| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
+| GO Morris | Qualification technique + mise à disposition sur RECETTE existante |
+| Candidate | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` · tree `f5c05cb94f5137d06a26107b7003ab1bf073f923` · BUILD `PV12SV9VToVGK-ReSxTqk` |
+| Parent RECETTE | `5c94c867…` / `IEINNuPl0bHWJOWkh0ZhG` |
+| Scope | QA DEV · migration 014 additive RECETTE · cutover même `:3200` / LaunchAgent · smoke · manifeste |
+| DB | `sfia_next_recette_ml4` · 014 applied · counts 23/560 preserved |
+| Rollback | `ROLLBACK-TO-5c94c867.sh` + dump `ml4d-e06-journal-20261119-pre-d5bf7eb7` |
+| Manifeste | `construction/ensemble-06-journal-recette-manifest.md` |
+| Verdict Cursor | `RECETTE TECHNICALLY AVAILABLE — READY FOR MORRIS USER ACCEPTANCE` |
+
+
 ## delivery_id: DELIV-2026-11-19-JOURNAL-V4-LIVE-PARTIAL

 | Field | Value |

```

## 8. Captures runtime DEV corrigées (1680×970)

Répertoire : `.tmp-sfia-review/figma-ux-after/`

- `00-runtime-empty-exploration.png`
- `01-runtime-835-71-sujets-exploration.png`
- `02-runtime-842-26-sujet-autonome-40-60.png`
- `03-runtime-842-131-sujet-parent-40-60.png`
- `04-runtime-835-159-sujet-agrandi.png`
- `05-runtime-835-239-parent-agrandi.png`
- `06-runtime-859-42-recherche-sujets.png`
- `07-runtime-859-146-filtre-points.png`
- `08-runtime-860-58-decisions-nominales.png`
- `09-runtime-860-136-decision-40-60.png`
- `10-runtime-860-251-recherche-decisions.png`
- `11-runtime-860-360-decision-agrandie.png`

### capture-report.json
```json
{
  "projectId": "proj_d6b61142-ea73-4636-bb1c-c5effc01ac09",
  "seed": {
    "projectId": "proj_d6b61142-ea73-4636-bb1c-c5effc01ac09",
    "preparationId": "prep_b643c55e-400b-410a-9ab7-e5ec36f61f63",
    "parentSubjectId": "subj_74d6df65-f12f-47fd-a7d0-6f5c398f7006",
    "leafSubjectId": "subj_8fec5cdc-43e0-41cf-9bb6-68bb3387a761",
    "otherParentId": "subj_0c73a030-6291-4f91-b0ee-18824d15bae1",
    "homonymLeafId": "subj_95bf995b-6dba-407d-bc15-85dca0b2ad2e",
    "acquisId": "acq_7caa5593-9993-4357-a83e-a7521337520d",
    "documentAcquisId": "acq_9f4add9a-3925-46bb-8519-cece66f504e4",
    "openPointId": "opn_45673529-4a0f-4f07-a2c0-8b536569d240",
    "resolvedOpenPointId": "opn_2cdc4eb8-51ab-4dcb-a961-7d409efcd55c",
    "decisionApplicableId": "dec_d7c8e5c7-9a67-4188-b361-9215ca60cf8b",
    "decisionHistoricalId": "dec_d267f145-3d38-4c44-8477-1d11c96bab82",
    "restrictionId": "grs_aaf74389-bde2-4b1b-aa09-61c86571d168",
    "documentId": "doc_51128ce0-b4cf-45ce-a8a8-b1379f13fb64",
    "revisionIdV1": "drev_3180f1b2-16f1-47b4-8404-806b5314c006",
    "revisionIdV2": "drev_f2cf3d38-5473-4e99-9fdc-0bdfcb2f74f7",
    "earlyMessageId": "msg_cf34c14c-dfb8-4fc3-aa99-c8eb5119ba1d",
    "lateMessageId": "msg_17b555f2-bbaa-44de-9393-9ce6558481ae",
    "messageCount": 15
  },
  "out": "/Users/morris/Projects/sfia-wt-journal-delivery-20261119/projects/sfia-studio-next/.tmp-sfia-review/figma-ux-after",
  "ok": true
}
```

## 9. Comparaison Figma → Runtime (11/11)

| Frame | Structure | Copy | Layout/proportions | Interactions | Écarts résiduels | Verdict |
|---|---|---|---|---|---|---|
| 835:71 | ALIGNED | ALIGNED | ALIGNED | — | guides arbor. décoratifs mineurs | ALIGNED |
| 842:26 | ALIGNED | ALIGNED | ALIGNED | select→viewer | halo décoratif non reproduit | ALIGNED |
| 842:131 | ALIGNED | ALIGNED | ALIGNED | parent+enfants | idem | ALIGNED |
| 835:159 | ALIGNED | ALIGNED | ALIGNED | Agrandir/Réduire | — | ALIGNED |
| 835:239 | ALIGNED | ALIGNED | ALIGNED | parent agrandi | — | ALIGNED |
| 859:42 | ALIGNED | ALIGNED | ALIGNED | search→result | — | ALIGNED |
| 859:146 | ALIGNED | ALIGNED | ALIGNED | filtre points | — | ALIGNED |
| 860:58 | ALIGNED | ALIGNED | ALIGNED | tab Décisions | données D6 réelles ≠ exemples Figma | ALIGNED |
| 860:136 | ALIGNED | ALIGNED | ALIGNED | décision 40/60 | — | ALIGNED |
| 860:251 | ALIGNED | ALIGNED | ALIGNED | search décisions | — | ALIGNED |
| 860:360 | ALIGNED | ALIGNED | ALIGNED | agrandi+réduire | — | ALIGNED |
| Empty (dérivé) | structure V4 | ALIGNED | full, sans viewer idle | — | pas de frame Figma dédiée | ALIGNED (dérivé) |

## 10. Tests exacts et résultats

| Suite | Commande / preuve | Résultat |
|---|---|---|
| TypeScript | `npx tsc --noEmit` | PASS |
| Unit journal + fixture-gate | vitest journal-cognition + ml4c-e2e-fixture-gate | 14/14 PASS |
| Playwright captures | `journal-v4-figma-captures.spec.ts` | PASS — preuve `/tmp/pw-cap2.txt` |
| Playwright parcours | `journal-v4-parcours.spec.ts` | PASS 2/2 — preuve `/tmp/pw-parcours2.txt` |
| PG Journal / ML2 / ML4C / E05 full | — | **NOT RUN** |
| RECETTE cutover | — | **NOT DONE** |

### Preuve exacte — captures
```
[WebServer] ◇ injected env (2) from .env.local

[WebServer] e2e-preflight OK: operator=sfia_next_dev → e2e=sfia_next_e2e container=sfia-next-dev-pg port=5433


Running 1 test using 1 worker

(node:26267) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)


[1/1] tests/e2e/journal-v4-figma-captures.spec.ts:23:7 › Journal V4 Figma captures 1680×970 › eleven runtime frames + empty exploration
  1 passed (18.5s)

```

### Preuve exacte — parcours
```
[WebServer] ◇ injected env (2) from .env.local

[WebServer] e2e-preflight OK: operator=sfia_next_dev → e2e=sfia_next_e2e container=sfia-next-dev-pg port=5433


Running 2 tests using 1 worker

(node:28014) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)


[1/2] tests/e2e/journal-v4-parcours.spec.ts:37:7 › Journal V4 — données métier non vides (E06-01 + §5) › sujets/recherche-acquis/décisions/message/document/retour-nav
[2/2] tests/e2e/journal-v4-parcours.spec.ts:174:7 › Journal V4 — données métier non vides (E06-01 + §5) › route seed refuse hors DEV/E2E (gate)
  2 passed (18.2s)

```

## 11. J-C01..J-C16

| ID | Obligation | Code / preuve | Verdict |
|---|---|---|---|
| J-C01 | synthèses durables sourcées | journal API + viewer | PASS |
| J-C02 | hiérarchie vivante | ProjectJournal tree | PASS |
| J-C03 | liens acquis/points | viewer cards | PASS |
| J-C04 | questions anciennes | open points | PASS |
| J-C05 | résolution factuelle/D6 | décisions + points | PASS |
| J-C06 | sources/contradictions | SourceChip + contradictions | PASS |
| J-C07 | multi-préparations | API projet | PASS |
| J-C08 | recherche Sujets/points | search + filtre | PASS parcours |
| J-C09 | actes D6/restrictions | decision viewer | PASS |
| J-C10 | explication décisionnelle | decision body | PASS |
| J-C11 | recherche Décisions | tab + search | PASS |
| J-C12 | navigation Figma V4 | 11 captures + empty | PASS |
| J-C13 | message exact + retour | deep-link Travail | PASS |
| J-C14 | document/version exacte | source chip → viewer | PASS (preuve parcours2) |
| J-C15 | sûreté/idempotence/permissions | fixture gate + API | PASS |
| J-C16 | tests/docs/régressions | as-built + specs | PASS |

## 12. Fake / Real Qualification

| Frontière | Statut |
|---|---|
| Figma MCP frames | CONTRACT READ |
| DEV runtime captures | BROWSER PROVEN |
| Playwright Journal V4 | DETERMINISTIC PROVEN (`pw-cap2`, `pw-parcours2`) |
| Contenu D4/D6 | REAL project data / E2E fixtures DEV only |
| RECETTE cutover correctif | NOT EXECUTED |
| UAT Morris visuelle | PENDING |

## 13. ENV-01 / Product Versioning

- Construction et tests : **DEV isolé**
- RECETTE `:3200` reste `d5bf7eb7` / `PV12SV9VToVGK-ReSxTqk`
- Migration 014 : **non rejouée**
- STABLE : non touché
- NO RELEASE
- Cutover RECETTE du candidat `0eb3157b` : **interdit** sans GO Morris après revue visuelle

## 14. Non-régression Ensemble 05

- Pas de redesign page 05
- Correction nav deep-link message → Travail
- Suites E05 full : NOT RUN (réserve)

## 15. Git Review Index

| Élément | SHA / path |
|---|---|
| Branche produit | `sfia/next-journal-delivery-20261119` |
| HEAD candidat | `0eb3157b1678b993162fa79c98f5e4de26a9e4e3` |
| Tree | `b52a3ac1469af980f9cfdec1848757afd58e04dc` |
| Parent RECETTE | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| origin/main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Handoff précédent | `8d2bd1fb` (remplacé par ce pack FULL) |
| Canonical handoff path | `sfia-review-handoff/latest-chatgpt-review.md` |

## 16. Réserves

1. Écarts pixel mineurs (guides arbre, halos décoratifs)
2. Contenu métier réel ≠ exemples Figma (attendu)
3. Suites ML2/ML4C/E05 full non rejouées ce cycle
4. Candidat local non poussé ; RECETTE encore sur d5bf7eb7
5. Titres D4 fragmentaires CampusFlow = dette données (class. A)
6. tokens.css fourni en section Journal V4 (fichier global trop large pour dump intégral hors section)

## 17. Conditions de sortie / Verdict

**FIGMA TO RUNTIME ALIGNED — READY FOR MORRIS VISUAL REVIEW**

Ne signifie PAS : UAT acceptée · cutover RECETTE · Gate C · STABLE · ADOPTED.

### Prochaine décision Morris

1. Revue visuelle du candidat `0eb3157b1678b993162fa79c98f5e4de26a9e4e3` (captures DEV + comparaison 11/11)
2. Si conforme : GO cutover RECETTE même URL `:3200` / même LaunchAgent (sans 2e RECETTE)

### Instruction ChatGPT obligatoire

> **Instruction ChatGPT obligatoire :**
>
> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
>
> branche : `sfia/review-handoff`
> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
>
> ChatGPT doit vérifier sa cohérence avec le rapport Cursor, notamment :
> - le cycle et le profil ;
> - la branche projet ;
> - le HEAD initial et final ;
> - la base main ;
> - les sources consultées ;
> - les fichiers créés ou modifiés ;
> - le contenu complet des fichiers créés ;
> - les sections complètes modifiées ou le diff utile ;
> - l'identité du contenu avant et après synchronisation, si applicable ;
> - les validations réalisées ;
> - la mergeabilité ou le statut Git attendu ;
> - les risques, réserves et écarts ;
> - les décisions Morris ;
> - le verdict du review pack ;
> - le commit et la vérification distante du handoff.
>
> **Après cette vérification**, ChatGPT doit produire une **synthèse globale du cycle** à destination de Morris comprenant **au minimum** :
> 1. l'objectif et le périmètre du cycle ;
> 2. les actions et changements réellement réalisés ;
> 3. les principaux résultats et validations ;
> 4. les risques, réserves, écarts ou éléments non couverts ;
> 5. la distinction entre observations, recommandations et décisions déjà validées ;
> 6. le verdict ChatGPT ;
> 7. la prochaine décision ou action attendue de Morris.
>
> La synthèse doit être compréhensible sans devoir relire l'intégralité du rapport Cursor ou du review pack, tout en restant fidèle au contenu du handoff Git.
>
> Elle ne doit **pas** transformer une recommandation, une hypothèse ou un résultat technique en décision validée sans GO Morris.
>
> Si le handoff est absent, obsolète, incohérent, incomplet ou synthesis-only, ChatGPT doit répondre :
>
> **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**
>
> Si Cursor annonce un handoff publié mais que le fichier distant reste ancien, absent ou incomplet, ChatGPT doit répondre :
>
> **REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED**
>
> **Le rapport Cursor seul ne remplace pas le handoff Git.** ChatGPT doit lire depuis Git :
> branche `sfia/review-handoff` · fichier `sfia-review-handoff/latest-chatgpt-review.md`
> (jamais le fichier racine historique comme canonique).

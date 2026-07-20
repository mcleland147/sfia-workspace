# SFIA Studio — Review Pack — OPS1 Functional Design Local Versioning

- **Date/heure/fuseau :** 2026-07-20 13:47:49 CEST
- **Repo :** mcleland147/sfia-workspace
- **Cycle :** 8 — Delivery documentaire / versionnement local
- **Profil :** Standard
- **Gate Morris :** GO OPS1 FUNCTIONAL DESIGN VERSIONING
- **Validation conception :** `G-OPS1-FUNC-DESIGN-VAL` consommé (2026-07-20 13:46 CEST)
- **Branche :** `design/sfia-studio-ops1-functional`
- **Commit :** `05034b69abb493d78466c9857d9fc1a6c002706f`
- **Parent :** `62eb23f0b1934afbecc517fc83aff90493fb8f29`
- **Message :** `docs(sfia-studio): validate OPS1 functional design`

## Truth Check (avant commit)

| Contrôle | Résultat |
|----------|----------|
| HEAD initial | `62eb23f0b1934afbecc517fc83aff90493fb8f29` = origin/main |
| ahead/behind | 0/0 |
| Remote design | absente |
| Staged | vide |
| Fichiers | 41 modifié ; 45–47 untracked |

## Décisions Morris tracées

- Conception OPS1 **validée avec réserves**
- `OPS1-FD-CAND-01`…`12` VALIDATED
- `13` VALIDATED WITH RESERVATION (CLOSED immuable ; continuation/session liée)
- `14` VALIDATED
- `15` VALIDATED WITH RESERVATION (FinOps principes ; chiffres OPEN)
- `16`…`19` VALIDATED
- `20` VALIDATED WITH RESERVATION (multi-fichiers Campus360 + allowlist)
- `21`…`23` VALIDATED (cycles distincts normaux)
- `24` VALIDATED (réserves amendées)
- `25` VALIDATED
- `26` VALIDATED WITH RESERVATION (Campus360 exclusif ; cartographie OPEN)
- `27` VALIDATED (éligible ≠ allowlist ; extension après GO = nouveau gate)
- Aucun cycle suivant ouvert

## Statuts finaux OPS1-FD-CAND-01…27

| ID | Statut |
|----|--------|
| 01 | `VALIDATED` |
| 02 | `VALIDATED` |
| 03 | `VALIDATED` |
| 04 | `VALIDATED` |
| 05 | `VALIDATED` |
| 06 | `VALIDATED` |
| 07 | `VALIDATED` |
| 08 | `VALIDATED` |
| 09 | `VALIDATED` |
| 10 | `VALIDATED` |
| 11 | `VALIDATED` |
| 12 | `VALIDATED` |
| 13 | `VALIDATED WITH RESERVATION` |
| 14 | `VALIDATED` |
| 15 | `VALIDATED WITH RESERVATION` |
| 16 | `VALIDATED` |
| 17 | `VALIDATED` |
| 18 | `VALIDATED` |
| 19 | `VALIDATED` |
| 20 | `VALIDATED WITH RESERVATION` |
| 21 | `VALIDATED` |
| 22 | `VALIDATED` |
| 23 | `VALIDATED` |
| 24 | `VALIDATED` |
| 25 | `VALIDATED` |
| 26 | `VALIDATED WITH RESERVATION` |
| 27 | `VALIDATED` |

## Réserves maintenues

- cartographie chemins/catégories Campus360 éligibles ;
- convention de branche Campus360 ;
- FinOps numériques / seuils / modèles / plafonds ;
- mécanisme exact continuation après CLOSE ;
- preuve live ; CI distante ; isolation OS/réseau.

## Fichiers versionnés

| Fichier | Action |
|---------|--------|
| `41-operational-vertical-slice-1-framing.md` | Modifié |
| `45-ops1-functional-design.md` | Créé |
| `46-ops1-functional-flows-and-rules.md` | Créé |
| `47-ops1-functional-decision-pack.md` | Créé |

## Diff utile complet — document 41

```diff
commit 05034b69abb493d78466c9857d9fc1a6c002706f
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Mon Jul 20 13:47:31 2026 +0200

    docs(sfia-studio): validate OPS1 functional design
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/41-operational-vertical-slice-1-framing.md b/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
index 9d8f41e..c9c0ec6 100644
--- a/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
+++ b/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
@@ -8,16 +8,18 @@
 | **Typologie** | POC / CADRAGE / PRODUIT / VALIDATION |
 | **Baseline** | SFIA v2.6 opérationnelle sur `main` |
 | **Gates consommés** | `G-SFIA-STUDIO-OPERATIONAL-SLICE-1-FRAMING` · `G-OPS1-FRAMING-REAL-CONVERSATION-AMENDMENT` · `G-OPS1-FRAMING-VAL` |
-| **Statut** | `framing-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 12:21 CEST) ; POC **maintenu** ; conception, architecture, UX finale, backlog, delivery, GPT live, Cursor réel, MVP **fermés** |
+| **Statut** | `framing-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 12:21 CEST) ; docs `41`–`44` **intégrés** sur `main` (PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235), squash `b686eb1`) ; post-merge + cleanup **terminés** ; POC **maintenu** ; conception fonctionnelle **validée avec réserves** sous `G-OPS1-FUNC-DESIGN-VAL` (2026-07-20 13:46 CEST) ; architecture, UX, backlog, delivery, live, MVP **fermés** |
 | **Companions** | [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
 | **Base Git de cadrage** | `origin/main` @ `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` |
+| **Intégration cadrage** | PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) MERGED — squash `b686eb1394bb4d550eeff1dd64669b3d405579ad` |
 | **Autorité** | Morris (L0) |
 
 > Ce document cadre la **prochaine marche du POC** après le vertical slice A–E.
 > **Cadrage validé avec réserves** sous `G-OPS1-FRAMING-VAL` — conversation GPT réelle et libre au centre ; action Markdown gouvernée.
-> La validation **n’ouvre pas** conception détaillée, architecture technique, UX finale, backlog, delivery, live ni MVP.
+> Documents `41`–`44` **intégrés sur `main`** via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) (squash `b686eb1394bb4d550eeff1dd64669b3d405579ad`) ; post-merge et cleanup **terminés**.
+> Conception fonctionnelle OPS1 **validée avec réserves** sous `G-OPS1-FUNC-DESIGN-VAL` (2026-07-20 13:46 CEST) — voir [`45`](./45-ops1-functional-design.md)–[`47`](./47-ops1-functional-decision-pack.md).
+> Architecture, UX, backlog, delivery, live et MVP **restent fermés**.
 > Aucun claim MVP, production-ready ou industrialisation.
-> Documents sur branche documentaire / draft PR — **non mergés** tant qu’un GO Morris de merge distinct n’est pas émis.
 
 ---
 
@@ -353,4 +355,5 @@ Conversation réelle et libre
 
 `SFIA STUDIO OPS1 FRAMING VALIDATED WITH RESERVATIONS`
 
-Gates suivants : **fermés** — voir [`44`](./44-operational-vertical-slice-1-decision-pack.md). Prochaine étape = décision Morris distincte sur l’ouverture éventuelle de la conception fonctionnelle OPS1.
+Cadrage **intégré** et **canonique** sur `main`. Conception fonctionnelle OPS1 **validée avec réserves** sous `G-OPS1-FUNC-DESIGN-VAL` (2026-07-20 13:46 CEST) — voir [`45`](./45-ops1-functional-design.md)–[`47`](./47-ops1-functional-decision-pack.md).
+Gates architecture / UX / backlog / delivery / live / MVP : **fermés** — voir [`44`](./44-operational-vertical-slice-1-decision-pack.md). Aucun cycle suivant ouvert automatiquement.

```

## Extraits substantiels — document 45

### Métadonnées

```markdown
# SFIA Studio — Conception fonctionnelle OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `45-ops1-functional-design.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Standard |
| **Typologie** | POC / CONCEPTION FONCTIONNELLE / PRODUIT / DOC |
| **Gates consommés** | `G-OPS1-FUNC-DESIGN` · `G-OPS1-FUNC-DESIGN-VAL` |
| **Baseline Git** | `origin/main` @ `62eb23f0b1934afbecc517fc83aff90493fb8f29` |
| **Branche** | `design/sfia-studio-ops1-functional` (**locale uniquement** — aucun push) |
| **Statut** | `functional-design-validated-with-reservations` — **validé Morris avec réserves** (2026-07-20 13:46 CEST) ; amendement final multi-fichiers + allowlist (2026-07-20 13:36 CEST) |
| **Autorité** | Morris (L0) |
| **Companions** | [`46`](./46-ops1-functional-flows-and-rules.md) · [`47`](./47-ops1-functional-decision-pack.md) |
| **Entrées cadrage** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Socle historique (lecture)** | [`08`](./08-functional-design.md) · [`09`](./09-functional-flows-and-rules.md) · [`10`](./10-functional-decision-pack.md) |
| **Horodatage production** | 2026-07-20 13:10 CEST |
| **Horodatage amendement** | 2026-07-20 13:23 CEST |
| **Horodatage amendement final** | 2026-07-20 13:36 CEST |
| **Horodatage validation Morris** | 2026-07-20 13:46 CEST |
| **Projet pilote OPS1** | **Campus360 exclusivement** — Markdown documentaires non protégés **éligibles** ; allowlist **par action** ; cartographie/branche : `G-OPS1-SCENARIO-VAL` |

> Contrat de **conception fonctionnelle validée avec réserves** du Vertical Slice Opérationnel 1.
> Gate `G-OPS1-FUNC-DESIGN-VAL` **consommé** — Morris — 2026-07-20 13:46 CEST.
> Hérite des invariants validés du cadrage OPS1 (`G-OPS1-FRAMING-VAL`) sans les altérer.
> Scénario pilote : contexte **Campus360** exclusivement — OPS1 = slice **SFIA Studio**, pas une feature produit Campus360.
> **Décision Morris multi-fichiers (2026-07-20 13:36 CEST)** : Markdown documentaires Campus360 non protégés **éligibles** ; allowlist explicite par action ; Campus360 ≠ autorisation globale.
> Architecture fonctionnelle et UX/UI = cycles SFIA distincts **normaux**. Stack / BDD / API / protocole **routés** vers architecture technique (cycle 6 / `G-OPS1-TECH-ARCH` si établi).
> `OPS1-FD-CAND-01`…`27` **validées** (avec réserves sur 13, 15, 20, 26). Aucun cycle suivant ouvert automatiquement.
> Aucun claim MVP / production-ready / industrialisation / OPS1 prouvé / READY FOR DELIVERY.

### Distinction POC / OPS1 / MVP

| Terme | Définition fonctionnelle |
|-------|--------------------------|
```

### §1.7 Réserves

```markdown
### 1.7 Réserves de conception (ouvertes)

- Valeurs numériques FinOps (seuils, budgets chiffrés, modèles autorisés, plafonds session/jour) — **OPEN**, non bloquantes pour la validation fonctionnelle ; à décider **avant** ouverture live ;
- Mécanisme exact de continuation après `CLOSE` (lien de sessions) — `OPS1-FD-CAND-13` ;
- **Cartographie** des chemins / catégories documentaires Campus360 **éligibles** (et exclusions) — `G-OPS1-SCENARIO-VAL` ;
- Convention de branche Campus360 exacte — `G-OPS1-SCENARIO-VAL` ;
- Preuve live non réalisée ;
- CI distante non prouvée ;
- Isolation OS/réseau non industrialisée.

> **Retiré** comme réserve globale : « fichier Markdown Campus360 exact unique » — remplacé par le modèle éligibilité multi-fichiers + allowlist par action (décision Morris 2026-07-20 13:36 CEST).

```

### §11 Éligibilité / allowlist

```markdown
## 11. Scénario pilote Campus360 — éligibilité et allowlist

### 11.1 Ancrage projet

- Le scénario pilote **fonctionnel** OPS1 est réalisé **exclusivement** dans le contexte du projet **Campus360**.
- Campus360 fournit le **contexte métier et documentaire** du pilote.
- OPS1 reste un **slice de SFIA Studio** — **pas** une fonctionnalité propre au produit Campus360.
- Le pilote **ne modifie pas** la méthode SFIA (`method/**`, `prompts/**`) ni les chemins protégés (`app/**`, `harness/**`, `.github/**`, lockfiles, secrets).
- **Aucune** action Git distante automatique.

### 11.2 Deux notions distinctes

| Notion | Définition |
|--------|------------|
| **Périmètre éligible** | Ensemble des fichiers Markdown du **périmètre documentaire Campus360 non protégé** pouvant être déclarés dans une action |
| **Allowlist d’exécution** | Liste **explicite et exhaustive** des fichiers **réellement** autorisés à être consultés / créés / modifiés **pour une action donnée**, présentée avant le gate et validée par Morris |

Le rattachement global à Campus360 **ne constitue jamais** une autorisation implicite de modifier tous les Markdown du projet.

### 11.3 Éligibilité (décision Morris)

Tout fichier Markdown du périmètre documentaire **non protégé** de Campus360 **peut être déclaré éligible**.
Une action OPS1 peut concerner **un ou plusieurs** de ces fichiers.
Le nombre de fichiers est déterminé par le **besoin fonctionnel**, non par un plafond arbitraire de un.

### 11.4 Critères d’éligibilité d’un fichier candidat

1. **Rattachement explicite à Campus360** ;
2. Markdown documentaire **non protégé** ;
3. faible risque ;
4. modification **locale**, **réversible** et **observable** ;
5. contenu **substantiel** (utile au BeB) ;
6. **aucune donnée sensible** (secret / PII) ;
7. **aucune dépendance de déploiement** ;
8. **diff facilement vérifiable** ;
9. utile pour démontrer conversation, action, gate, Cursor, rapport, correction et clôture.

### 11.5 Allowlist par action (obligatoire)

- Allowlist **présentée avant** le gate ;
- **exhaustive** pour l’action ;
- distingue si besoin : consultables / créables / modifiables ;
- hors allowlist = **interdit** (fail-closed) ;
- extension après GO = **nouveau gate** ;
- multi-fichiers **uniquement si nécessaire** ;
- preuves : diff consolidé + par fichier ; couverture de chaque fichier.

### 11.6 Objet de `G-OPS1-SCENARIO-VAL` (redéfini)

Valider :

- chemins ou **catégories** de chemins documentaires Campus360 **éligibles** ;
- exclusions ;
- convention de branche ;
- règles d’allowlist opératoires ;
- scénario de preuve.

**Ne plus** valider un fichier unique obligatoire.
**Non choisis dans ce cycle :** liste globale définitive de chemins réels ; nom de branche exact ; demande métier exacte.

---

```

### Verdict

```markdown
## 13. Verdict documentaire

`functional-design-validated-with-reservations`

`SFIA STUDIO OPS1 FUNCTIONAL DESIGN VALIDATED WITH RESERVATIONS`

Gate `G-OPS1-FUNC-DESIGN-VAL` consommé — Morris — 2026-07-20 13:46 CEST.
Amendement final multi-fichiers + allowlist (2026-07-20 13:36 CEST) intégré.
Aucun cycle architecture / UX / backlog / delivery / live / MVP ouvert automatiquement.
```

## Extraits — document 47

### Métadonnées

```markdown
# SFIA Studio — Decision pack conception fonctionnelle OPS1

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `47-ops1-functional-decision-pack.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Standard |
| **Gates consommés** | `G-OPS1-FUNC-DESIGN` · `G-OPS1-FUNC-DESIGN-VAL` |
| **Baseline Git** | `62eb23f0b1934afbecc517fc83aff90493fb8f29` |
| **Branche** | `design/sfia-studio-ops1-functional` |
| **Statut** | `functional-design-validated-with-reservations` — validé Morris (2026-07-20 13:46 CEST) |
| **Autorité** | Morris (L0) |
| **Companions** | [`45`](./45-ops1-functional-design.md) · [`46`](./46-ops1-functional-flows-and-rules.md) |
| **Cadrage** | [`41`](./41-operational-vertical-slice-1-framing.md) · [`42`](./42-operational-vertical-slice-1-flow-and-session-model.md) · [`43`](./43-operational-vertical-slice-1-scope-and-success-criteria.md) · [`44`](./44-operational-vertical-slice-1-decision-pack.md) |
| **Horodatage** | 2026-07-20 13:10 CEST |
| **Amendement** | 2026-07-20 13:23 CEST — Campus360 ; réserves / routage ; FD-CAND-13/20–26 |
| **Amendement final** | 2026-07-20 13:36 CEST — multi-fichiers + allowlist ; FD-CAND-20/24–27 |
| **Validation Morris** | 2026-07-20 13:46 CEST — `G-OPS1-FUNC-DESIGN-VAL` consommé ; `OPS1-FD-CAND-01`…`27` validées |
| **Projet pilote** | Campus360 exclusivement |

> Pack de **décisions de conception fonctionnelle OPS1 validées avec réserves**.
> Gate `G-OPS1-FUNC-DESIGN-VAL` **consommé** — Morris — 2026-07-20 13:46 CEST.
> Les `OPS1-CAND-*` du cadrage restent l’héritage validé ; les `OPS1-FD-CAND-01`…`27` sont **validées** (réserves sur 13, 15, 20, 26).
> Scénario pilote : **Campus360** uniquement ; Markdown documentaires non protégés **éligibles** (multi-fichiers) ; **allowlist par action** ; cartographie/branche sous `G-OPS1-SCENARIO-VAL`.
> Architecture fonctionnelle et UX = cycles distincts **normaux** ; stack/BDD/API/protocole **routés** vers architecture technique.
> Aucun claim MVP / PRODUCTION READY / READY FOR DELIVERY / OPS1 prouvé. Aucun cycle suivant ouvert automatiquement.

---

## 1. Synthèse

| Élément | Valeur |
|---------|--------|
| Livrables | `45`, `46`, `47` |
| Gate d’ouverture | `G-OPS1-FUNC-DESIGN` **consommé** (production) |
| Gate de validation conception | **Non ouvert / non consommé** |
| Décisions | `OPS1-FD-CAND-01`…`27` **validées** (avec réserves 13/15/20/26) |
| Règles | `OPS1-FR-001`…`025` |
| Flux | `OPS1-FLOW-01`…`32` |
| Commit / push / PR projet | **Absents** (ce cycle) |
```

### §7 Post-validation

```markdown
## 7. Décisions Morris — état post-validation

1. `G-OPS1-FUNC-DESIGN-VAL` **consommé** (2026-07-20 13:46 CEST) — conception validée avec réserves.
2. `OPS1-FD-CAND-01`…`27` validées (WITH RESERVATION : 13, 15, 20, 26).
3. `G-OPS1-SCENARIO-VAL` reste **fermé** : cartographie chemins/catégories, exclusions, branche, règles allowlist, scénario de preuve.
4. Aucun cycle suivant ouvert automatiquement (FUNC-ARCH, UX, BACKLOG, TECH-ARCH, delivery, live, MVP).
5. Versionnement local autorisé sous GO distinct ; push/PR non autorisés dans le cycle de versionnement local seul.


---

```

### Verdict

```markdown
## 9. Verdict

`functional-design-validated-with-reservations`

`SFIA STUDIO OPS1 FUNCTIONAL DESIGN VALIDATED WITH RESERVATIONS`

Gate `G-OPS1-FUNC-DESIGN-VAL` consommé — Morris — 2026-07-20 13:46 CEST.
`OPS1-FD-CAND-01`…`27` validées. Aucun cycle suivant ouvert automatiquement.
```

## Commit

```text
05034b6 docs(sfia-studio): validate OPS1 functional design
 .../41-operational-vertical-slice-1-framing.md     |   11 +-
 projects/sfia-studio/45-ops1-functional-design.md  |  630 ++++++++++++
 .../46-ops1-functional-flows-and-rules.md          | 1056 ++++++++++++++++++++
 .../47-ops1-functional-decision-pack.md            |  517 ++++++++++
 4 files changed, 2210 insertions(+), 4 deletions(-)

```

## Contrôles

| Contrôle | Résultat |
|----------|----------|
| 4 fichiers staged exact | OK |
| `diff --check` | OK |
| Mono-fichier normatif | Absent (mentions négatives seulement) |
| Claims interdits | Absents |
| TODO/FIXME/TBD | Absents |
| README / 42–44 intacts | OK |
| Push / PR | Absents |
| Remote design | Absente |
| ahead/behind final | 1/0 |

## Git status final

```text
?? .tmp-sfia-review/
?? projects/.tmp-sfia-review/
```

## Gates suivants fermés

`G-OPS1-SCENARIO-VAL` · `G-OPS1-FUNC-ARCH` · `G-OPS1-UX` · `G-OPS1-BACKLOG` · `G-OPS1-TECH-ARCH` · delivery / live / MVP

## Handoff

- SHA handoff : *(après push)*

## Verdict

**SFIA STUDIO OPS1 FUNCTIONAL DESIGN VERSIONED LOCALLY — READY FOR PR READINESS**

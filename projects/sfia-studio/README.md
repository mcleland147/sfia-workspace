# SFIA Studio

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
| **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
| **Statut** | `p0-delivery-integrated-next-poc-orchestration-framing` — Delivery P0 **CLÔTURÉ** et intégré sur `main` ; prochaine orientation = **cadrage POC orchestration** (Option B) — **non lancé** |
| **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — capitalisation post-Delivery P0 (DOC / CAPA légère, Standard) |
| **Typologie cycle** | DOC / CAPA légère — synchronisation statut produit + trajectoire |
| **Cycle projet** | 15 — Capitalisation / REX ; Delivery P0 **clôturé** ; UX/UI **clôturé** ; architecture fonctionnelle **intégrée** (clôture formelle **ouverte**) |
| **Profil SFIA** | Standard (capitalisation) |
| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée**) |
| **Branche Delivery P0** | `project/sfia-studio-delivery-p0-implementation` — **supprimée** (local + remote) après cleanup post-merge |
| **Figma UX** | [lrjA1WEyRpL05vKR8k29LO](https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO) — P0-00C…P0-03C @ 1440×1024 (référence initiale) |
| **App P0** | `projects/sfia-studio/app/` — Next.js 15 / React 19 / TypeScript ; 4 routes ; fixtures locales |
| **PR Delivery P0** | [#217](https://github.com/mcleland147/sfia-workspace/pull/217) — **MERGED** (squash) |
| **Commit projet Delivery** | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
| **Merge Delivery** | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
| **Périmètre Delivery** | 77 fichiers ; +12830 / −0 |
| **PR architecture** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
| **Merge architecture** | `84e48636bb78808774b51f67329167f8e9749a6b` |
| **Acceptation Morris #211** | **OUI** — 2026-07-18 (régularisation documentaire ; sans D-VAL-12) |
| **PR sync / finalisation archi** | [#212](https://github.com/mcleland147/sfia-workspace/pull/212) / [#213](https://github.com/mcleland147/sfia-workspace/pull/213) — **MERGED** |
| **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; intégrée à `main`) |
| **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
| **Chemin** | `projects/sfia-studio/` |
| **Base canonique** | `origin/main` @ `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
| **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
| **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
| **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
| **AF-CAND-01…10, 11A, 12** | **VALIDÉES** — ≠ D-VAL |
| **AF-CAND-11B** | **VALIDÉE** — UX/UI sélectionné, exécuté et **clôturé** |
| **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
| **Architecture fonctionnelle** | **VALIDÉE** et **INTÉGRÉE** sur `main` — clôture formelle **NON PRONONCÉE** |
| **Architecture technique P0** | **VALIDÉE** et **INTÉGRÉE** (`18`/`19` ; TA-DEC-01…18) — Delivery P0 **exécuté** depuis |
| **UX/UI** | **CLÔTURÉ** — Option B ; 4 frames Figma ; docs `14`–`16` |
| **Delivery P0** | **CLÔTURÉ** — implémenté, validé visuellement, mergé (#217), post-mergé, cleanup branche effectué ; **aucune gate Morris restante** |
| **Prochain cycle** | **Cadrage POC orchestration** (Option B Morris) — **sélectionné**, **non démarré** ; POC / MVP / industrialisation **non lancés** |

---

## 0. État produit (capitalisation post-Delivery P0)

| Élément | Valeur |
|---------|--------|
| Cadrage | **Clôturé** (D-VAL-11) |
| Conception fonctionnelle | **Clôturée** et **intégrée** (PR #209 / #210) |
| Architecture fonctionnelle | **Validée** et **intégrée** (#211–#214) — clôture formelle **ouverte** |
| UX/UI P0 | **Clôturé** (Option B ; `14`–`16` ; Figma) |
| Architecture technique P0 | **Validée** et **intégrée** (`18`/`19`) |
| Delivery P0 | **Clôturé** — implémenté, validé, mergé, post-mergé, cleanup effectué |
| PR Delivery P0 | [#217](https://github.com/mcleland147/sfia-workspace/pull/217) — **MERGED** (squash) |
| Titre | `feat: implement SFIA Studio P0 governed workspace` |
| Commit projet | `c37b065fc59b60d01f5896aa7ebd3c130a636457` |
| Merge squash | `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` |
| Périmètre | 77 fichiers sous `projects/sfia-studio/app/**` ; +12830 / −0 |
| Routes P0 | `/` → `/synthese` ; `/nouvelle-demande` ; `/cycle-actif` ; `/decision` |
| Preuves | Validation visuelle Morris ; lint / typecheck / Vitest / build / Playwright post-merge verts |
| Nature squash | Commit de branche **non ancêtre** de `main` ; trees applicatifs **vérifiés identiques** |
| Branche Delivery | **Supprimée** (locale + distante) — aucune gate Morris restante sur Delivery P0 |
| App sur `main` | Disponible — desktop 1440×1024 ; pas d’API / auth / BDD / orchestration réelle |
| Git / Cursor / Runtime | **Simulés ou désactivés** en P0 |
| Produit complet / MVP / industrialisation | **Non atteints** |
| Prochaine orientation | **Option B — cadrage POC orchestration** — sélectionnée, **non lancée** |
| Branches historiques | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |

> Historique antérieur (PR #207–#216) : inchangé dans son rôle. La capitalisation synchronise le statut **après** clôture Delivery P0 ; elle ne réécrit pas les décisions D-VAL / AF-CAND / TA-DEC.

---

## 1. Finalité du projet (produit complet)

**SFIA Studio vise la construction d’une plateforme métier complète** permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris.

### Formulation structurante (D-VAL-3)

> SFIA Studio vise la construction d’une plateforme métier complète permettant de piloter les cycles SFIA et d’orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe sous contrôle Morris.
>
> Le POC est une étape technique de validation de faisabilité.
> Il ne constitue ni le produit cible, ni le MVP, ni la limite de la trajectoire.

### Distinction obligatoire

| Terme | Définition |
|-------|------------|
| **Produit cible** | Plateforme complète — opérationnelle et durable |
| **POC** | Preuve de **faisabilité technique** limitée |
| **MVP** | Première version **réellement utilisable** (valeur métier) — non défini ici |
| **Industrialisation** | Exploitation industrialisée de la **plateforme** — pas « industrialiser les cycles » |

### Vision produit (base du cadrage)

> SFIA Studio permet de **qualifier, lancer, suivre et clôturer** les cycles SFIA.
> La plateforme est ensuite destinée à être **exploitée de manière industrialisée**, sécurisée, observable, maintenable et distribuable.

Revue documentaire G3 : **conforme** (aucune réserve bloquante). La vision corrigée constitue la **base autorisée du cadrage** via **D-VAL-8 / G6**. Cadrage détaillé **validé** via **D-VAL-9 / DF-G1**.

### Orchestration déterministe (candidat — non validé)

Un mécanisme d’orchestration déterministe, **éventuellement** matérialisé par un composant nommé SFIA Runtime, devra appliquer les contrats, permissions, gates et stop conditions. Séparation Studio / Runtime à qualifier en architecture.

| Élément | Statut |
|---------|--------|
| Besoin fonctionnel | **Candidat** |
| Architecture Runtime | **Non validée** |
| Nom « SFIA Runtime » | **Non contractuel** |

### Couverture des 15 cycles

Couverture **progressive**. Pas d’obligation dans le POC ou le MVP. Sous-ensemble MVP **non sélectionné** ici.

### Faisabilité vs valeur

| Étape | Ce qu’elle valide |
|-------|-------------------|
| **POC** | Faisabilité technique |
| **MVP** | Première valeur métier utilisable |
| **Industrialisation** | Durabilité d’exploitation de la plateforme |

### macOS

Contrainte de **preuve** du POC — **pas** plateforme produit définitive.

### Relation méthode (G4 — Option C)

Produit indépendant **consommant** SFIA v2.6. Pas de v2.7 / v3.0. Évolution méthode = CAPA/EVOL séparé + GO Morris.

---

## 2. Trajectoire macro (état factuel)

```text
Pré-cadrage
  → cadrage détaillé
  → conception fonctionnelle
  → architecture fonctionnelle
  → UX/UI P0
  → architecture technique P0
  → Delivery P0
  → PR #217 / intégration main
  → post-merge / cleanup
  → cadrage POC orchestration          ← prochaine étape validée (Option B) — non démarrée
  → architecture POC ciblée             ← candidate (après cadrage)
  → backlog POC borné                   ← candidate
  → delivery POC                        ← candidate
  → décision Morris : abandon / itération / préparation MVP
```

Étapes jusqu’au cleanup P0 : **terminées**. Cadrage POC orchestration : **sélectionné**, **non démarré**. Étapes suivantes : **candidates**, soumises aux résultats du cadrage. POC / MVP / industrialisation : **non engagés**. Clôture formelle architecture fonctionnelle : **non automatique**.

---

## 3. Navigation

### Pré-cadrage (historique)

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, état, décisions, navigation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité et vision (historique) |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Couverture cycles (historique) |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack pré-cadrage (historique) |

### Cadrage détaillé (validé — D-VAL-9)

| Document | Rôle |
|----------|------|
| [04-detailed-product-framing.md](./04-detailed-product-framing.md) | Contrat produit détaillé |
| [05-product-capabilities-and-use-cases.md](./05-product-capabilities-and-use-cases.md) | Capacités et cas d’usage |
| [06-scope-constraints-and-success-criteria.md](./06-scope-constraints-and-success-criteria.md) | Périmètres et critères |
| [07-product-trajectory-and-decision-pack.md](./07-product-trajectory-and-decision-pack.md) | Trajectoire et décisions |

> **Cadrage détaillé ≠ conception / architecture / UX / backlog / POC / code.**

### Conception fonctionnelle — VALIDÉE

| Document | Rôle |
|----------|------|
| [08-functional-design.md](./08-functional-design.md) | Contrat de conception fonctionnelle |
| [09-functional-flows-and-rules.md](./09-functional-flows-and-rules.md) | Parcours F1–F12 et règles métier |
| [10-functional-decision-pack.md](./10-functional-decision-pack.md) | Pack de validation (FD-CAND-01…08 VALIDÉES) |

> Conception **VALIDÉE** — Morris — 2026-07-18 — avec réserves structurantes. **Intégrée** sur `main` via PR #209 / sync #210 (`e9d8193…`). Baseline `08`–`10` **inchangée** pendant le cycle architecture. ≠ stack / UX visuelle / backlog / POC / MVP / code.

### Architecture fonctionnelle — VALIDÉE et INTÉGRÉE (PR #211)

| Document | Rôle |
|----------|------|
| [11-functional-architecture.md](./11-functional-architecture.md) | Blocs, authority/truth models, NFR fonctionnels |
| [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF-01…15 et frontières (D10 → AF-01 / AF-15) |
| [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option A/B/C ; AF-CAND |

> Statut architecture `functional-architecture-post-merge-integrated` (intégration). **AF-Option C VALIDÉE**. AF-CAND-01…10, 11A, 12 **VALIDÉES**. **AF-CAND-11B VALIDÉE** (UX/UI clôturé). Aucune D-VAL-12. Clôture formelle architecture **non prononcée**.

### UX/UI — CLÔTURÉ (cycle 4)

| Document | Rôle |
|----------|------|
| [14-ux-ui-contract.md](./14-ux-ui-contract.md) | Contrat visuel + règles transverses ; Figma `lrjA1WEyRpL05vKR8k29LO` |
| [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | Quatre écrans P0 et parcours |
| [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | Décisions UX Morris / Option B |

| Frame | node | Dimensions |
|-------|------|------------|
| P0-00C Nouvelle demande | `19:2` | 1440×1024 |
| P0-01C Vue synthèse | `22:2` | 1440×1024 |
| P0-02C Cycle actif | `22:133` | 1440×1024 |
| P0-03C Décision Morris | `22:270` | 1440×1024 |

> UX/UI **CLÔTURÉ**. Référence Figma = implémentation **initiale** (non intangible). Delivery P0 **exécuté et clôturé** (PR #217). Desktop 1440×1024 uniquement ; responsive / a11y complète / CI / Runtime réel **non validés**.

### Delivery P0 — CLÔTURÉ (PR #217)

| Document / artefact | Rôle |
|---------------------|------|
| [app/README.md](./app/README.md) | Runtime P0 — stack, routes, contraintes |
| `projects/sfia-studio/app/**` | 77 fichiers intégrés sur `main` @ `759ab0b…` |

> Delivery P0 **CLÔTURÉ**. Aucune API, auth, BDD ni orchestration réelle. Git / Cursor / Runtime **simulés**. Prochaine orientation : **cadrage POC orchestration** (non lancé).

---

## 4. Justification Critical

Le cadrage détaillé a été exécuté en profil Critical : projet officiel ; orchestration Git/GPT/Cursor/mécanisme déterministe ; impacts permissions, données, gates ; séparation produit/POC/MVP/industrialisation.

Le cycle 2 (conception fonctionnelle / finalisation) est en profil **Critical** : règles de contrôle des actions Git/GPT/Cursor ; gates, permissions, arrêts ; prévention d’auto-arbitrage et de seconde vérité.

Le cycle d’architecture fonctionnelle est en profil **Critical** : responsabilités Morris/GPT/Cursor/Git/orchestrateur candidat ; gates et preuves ; frontières empêchant une seconde vérité ou une architecture technique implicite.

---

## 5. Principes de gouvernance

| Principe | Portée |
|----------|--------|
| Git `main` = source de vérité | Cadrage `01`–`07` + conception `08`–`10` intégrés (PR #207 / #208 / #209) |
| Conception validée = intégrée | PR #209 / `fdade59…` ; branche `functional-design` conservée |
| Morris décide | Gates structurants |
| GPT / Cursor | Qualifient / exécutent — ne décident pas |
| Option C méthode | Consomme v2.6 (**validé**) |
| POC ≠ valeur | Faisabilité ≠ MVP |
| Couverture progressive | 15 cycles = cible long terme |
| Runtime candidat | Non figé |
| macOS = preuve | Non plateforme produit |
| Observation ≠ règle | Pas de promotion méthode |
| Commit / push / PR / merge | Autorisations **distinctes** (règle générique) |

---

## 6. Gates G1–G7 (historiques) et observation merge

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ — GO** (D-VAL-4) |
| **G2** | **VALIDÉ — GO** (D-VAL-5) |
| **G3** | **REVUE CONFORME** — base du cadrage via D-VAL-8 |
| **G4** | **VALIDÉ — OPTION C** (D-VAL-6) |
| **G5** | **VALIDÉ SUR LE PRINCIPE** (D-VAL-7) |
| **G6** | **VALIDÉ — GO** (D-VAL-8) — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** (D-VAL-9) — cadrage détaillé validé |
| **G7** | **Historique (D-VAL-10) :** commit / push / draft PR autorisés — merge **non** autorisé par cette décision. **Observation :** PR #207 **mergée**. **Régularisation :** D-VAL-11 **VALIDÉE**. |

**Rappels :** G6 ≠ conception/architecture. G5 ≠ démarrage POC. Handoff review ≠ G7. G7 **≠** autorisation rétroactive de merge.

---

## 7. Décisions D-VAL-1 à D-VAL-11 et FD-CAND

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | **Option C méthode** (consomme v2.6) | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Passage au cadrage détaillé **autorisé** | G6 |
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** autorisés ; **merge non autorisé** (historique) | G7 |
| D-VAL-11 | Intégration PR #207 reconnue ; socle sur `main` ; cadrage documentaire **clôturé** ; branche conservée ; prochain cycle non sélectionné | Clôture |

### Contenu D-VAL-11 — VALIDÉE

| Champ | Valeur |
|-------|--------|
| Statut | **VALIDÉE** |
| Autorité | Morris |
| Date | **2026-07-18** |
| Contenu | Intégration PR #207 reconnue ; socle établi sur `main` ; cadrage documentaire clôturé ; branche `project/sfia-studio-pre-framing` conservée jusqu’à décision distincte |

### FD-CAND-01…08 — VALIDÉES

Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01…08 — **2026-07-18**. Identifiants locaux au cycle de conception — **pas de D-VAL-12**.

### Décisions architecture — VALIDÉES sur le fond

| Décision | Statut |
|----------|--------|
| AF-Option C (Studio / orchestrateur séparés) | **VALIDÉE** — ≠ Option C méthode |
| AF-CAND-01…10 | **VALIDÉES** |
| AF-CAND-11A (trajectoire recommandée) | **VALIDÉE** (recommandation uniquement) |
| AF-CAND-11B (sélection prochain cycle) | **VALIDÉE** — UX/UI clôturé |
| AF-CAND-12 (pas de D-VAL-12) | **VALIDÉE** |
| D10 → AF-01 / AF-15 | **VALIDÉE** (amendement traçabilité) |

### Décisions encore ouvertes / clôturées depuis

| Décision | Statut |
|----------|--------|
| AF-CAND-11B — UX/UI | **VALIDÉE** — UX/UI clôturé |
| Option B consolidation 14/15/16 | **VALIDÉE** |
| Delivery P0 | **CLÔTURÉ** — PR #217 mergée ; post-merge + cleanup effectués ; aucune gate restante |
| Acceptation / régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 |
| Sync #212 + finalisation #213 | **INTÉGRÉES** |
| Clôture formelle cycle architecture | **Non** — non automatique |
| Sort des branches historiques | Conservées ; décisions distinctes |
| Contenu / architecture du POC orchestration | **Non pris** — cadrage à venir |
| Définition MVP | **Non pris** |
| Industrialisation | **Non engagée** |
| Responsive / a11y complète / CI GitHub | **Ouverts** (réserves P0) |
| Vulnérabilités moderate postcss (via Next) | **Ouvertes** — pas de fix forcé |
| Runtime / Git / Cursor réels | **Hors périmètre P0** — sujets du futur cadrage POC |

> Conception : intégrée (PR #209 / #210). Architecture fonctionnelle : intégrée (#211–#213). Architecture technique P0 + Delivery P0 : **intégrés** (PR #217 / `759ab0b…`). Aucune D-VAL-12.

### Orientation Morris — Option B (POC orchestration)

> Le prochain cycle SFIA Studio sera un cycle de **cadrage** visant à définir un POC d’orchestration borné entre SFIA Studio et un mécanisme d’orchestration déterministe candidat. Ce cycle devra valider la faisabilité technique **sans** préjuger de l’architecture produit finale, du MVP ni de l’industrialisation.

**Décision consommée :** Option B sélectionnée comme prochaine orientation — **cadrage uniquement** ; POC **non lancé** ; aucune techno Runtime sélectionnée ; aucune intégration Studio ↔ Git ↔ Cursor ↔ orchestrateur autorisée dans ce cycle de capitalisation.

**Sujets préparés pour le futur cadrage POC :** objectif de preuve ; scénario métier unique ; frontières Studio / orchestrateur ; niveau d’automatisation maximal ; actions read-only ou simulées ; gates Morris ; stop conditions ; données de test ; preuves attendues ; critères de succès et d’abandon ; sécurité et réversibilité ; périmètre Git ; stratégie de démonstration.

---

## 8. Prochaine décision

1. **GO commit / push / PR** de la présente capitalisation documentaire.
2. Après intégration : **GO cadrage POC orchestration**.
3. Clôture formelle du cycle architecture fonctionnelle (décision **distincte**, toujours ouverte).
4. Sort des branches historiques (`pre-framing` / `functional-design` / `functional-architecture`).

**Verdict documentaire :** `CAPITALIZATION COMPLETE — P0 STATUS SYNCHRONIZED — POC ORCHESTRATION FRAMING READY`

---

## 9. Source de vérité

| Élément | Source |
|---------|--------|
| Méthode | SFIA v2.6 sur `main` — **Option C méthode** |
| Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 |
| Cadrage validé | `projects/sfia-studio/` **`01`–`07`** sur **`main`** |
| Conception fonctionnelle | **`08`–`10`** sur **`main`** |
| Architecture fonctionnelle | **`11`–`13`** sur **`main`** |
| UX/UI | **`14`–`16`** sur **`main`** |
| Architecture technique P0 | **`18`–`19`** sur **`main`** |
| Delivery P0 / app | `projects/sfia-studio/app/` — PR #217 / merge `759ab0b…` |
| Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
| Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |

> `main` @ `759ab0bb4b5601bacfc6856a22feb2bd48426ee5` est la source de vérité du **cadrage**, de la **conception**, de l’**architecture**, de l’**UX/UI**, de l’**architecture technique P0** et du **Delivery P0** intégrés.

---

*SFIA Studio — Delivery P0 CLÔTURÉ (PR #217) — prochaine orientation = cadrage POC orchestration (Option B, non lancé) — clôture architecture fonctionnelle NON PRONONCÉE — Option C méthode préservée — Morris décide.*

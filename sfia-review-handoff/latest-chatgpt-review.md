# SFIA Review Pack — Discovery Editorial PD-06A (Actes VI–VII)

**Horodatage :** 2026-07-15 ~14:15 Europe/Paris (CEST)
**Repository :** mcleland147/sfia-workspace
**Workspace :** /Users/morris/Projects/sfia-workspace
**Cycle :** PD-06A — Préparation éditoriale Git (Actes VI–VII)
**Type de cycle :** Product Design — couche éditoriale lecteur
**Profil SFIA :** Standard
**Typologie v2.4 :** DOC
**Statut livrables :** Candidate — brouillons éditoriaux non commités
**Branche projet :** `documentation/sfia-discovery-acts-06-07-editorial`
**HEAD / base / origin/main :** `96d1580e33baa1ec6e97622c7f2f59a4787ec510` (`96d1580`)
**Implémentation Notion :** PD-02B ✓ · PD-03B ✓ · PD-04B ✓ · PD-05B ✓ · PD-06B futur
**Capitalisation méthode :** Non
**Niveau review pack :** full (6 NEW + 2 MOD + contenu intégral)
**Handoff avant :** `origin/sfia/review-handoff` @ `d0901173d38290269ac8cdda483e43ea36175986`
**Verdict :** **ACTS VI-VII EDITORIAL PREPARED — READY FOR CHATGPT REVIEW**

---

## Décision Morris — GO PD-06A (handoff review)

| Élément | Décision |
|---------|----------|
| **Périmètre** | Acte VI (hub + VI.1–VI.4 personas) · Acte VII (portail sept portes) — sources éditoriales Git complètes |
| **Hors périmètre** | Notion PD-06B · commit · push projet · PR · merge · capitalisation |
| **Prérequis** | PD-05A/B ✓ (Actes IV–V mergés + Notion finalisé) |
| **Gates** | M1–M6 contenu · M7 commit ultérieur · M8 Notion ultérieur |
| **Commit projet** | **Non** — branche projet reste non commitée |
| **Handoff** | Publication `sfia/review-handoff` autorisée |

---

## Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| toplevel | `/Users/morris/Projects/sfia-workspace` |
| Branche | `documentation/sfia-discovery-acts-06-07-editorial` |
| HEAD | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` ✓ |
| origin/main | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| Commits ahead of main (projet) | **0** — aucun commit local sur branche projet |
| staged (scope projet) | **aucun** |
| **Verdict** | **PASS** |

### git status --porcelain (périmètre projet)

```
 M method/sfia-fast-track/documentation/notion/discovery-product-design/07-sfia-discovery-transformation-roadmap.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/README.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-1-sme-leader-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-2-project-manager-po-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-3-technical-team-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-project-yourself-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-07-explore-the-method-editorial-draft.md
```

**Périmètre PD-06A :** 6 NEW Act VI–VII + 2 MOD (README editorial · roadmap 07).

---

## Fichiers livrables — line counts (8 fichiers PD-06A)

| Fichier | Lignes |
|---------|--------|
| `sfia-discovery-act-06-project-yourself-editorial-draft.md` | 163 |
| `sfia-discovery-act-06-1-sme-leader-editorial-draft.md` | 166 |
| `sfia-discovery-act-06-2-project-manager-po-editorial-draft.md` | 165 |
| `sfia-discovery-act-06-3-technical-team-editorial-draft.md` | 165 |
| `sfia-discovery-act-06-4-esn-partner-editorial-draft.md` | 176 |
| `sfia-discovery-act-07-explore-the-method-editorial-draft.md` | 313 |
| `README.md` | 140 |
| `07-sfia-discovery-transformation-roadmap.md` | 183 |

---

## git diff --stat (tracked MOD)

```
 .../07-sfia-discovery-transformation-roadmap.md    | 40 ++++++++------
 .../notion/discovery/editorial/README.md           | 61 +++++++++++++---------
 2 files changed, 60 insertions(+), 41 deletions(-)
```

**NEW (untracked) :**

```
 method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-project-yourself-editorial-draft.md | 163
 method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-1-sme-leader-editorial-draft.md | 166
 method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-2-project-manager-po-editorial-draft.md | 165
 method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-3-technical-team-editorial-draft.md | 165
 method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md | 176
 method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-07-explore-the-method-editorial-draft.md | 313
```

---

## Sources consultées (gouvernance pack)

| Source | Usage pack |
|--------|------------|
| `method/sfia-fast-track/documentation/notion/discovery/editorial/README.md` | Cycle PD-06A · inventaire · gates M1–M8 |
| `method/.../07-sfia-discovery-transformation-roadmap.md` | Séquence PD-06A/B · cycle courant |
| `discovery-product-design/04-sfia-discovery-personas-and-reading-journeys.md` | Personas VI.1–VI.4 (références §1.1–1.4) |
| `discovery-product-design/05-sfia-discovery-editorial-contract.md` | Contrat 80/20 · opacité sélective |
| Actes I–V editorial drafts mergés (main @ 96d1580) | Continuité narrative V → VI → VII |
| `core/sfia-rules-and-guardrails.md` | Principes gouvernance (non copiés intégralement) |
| `core/sfia-cycle-routing-guide.md` | Orientation cycles Acte VII porte 1–2 |
| `notion/editorial/sfia-notion-04-cycles-profiles-gates-editorial-draft.md` | Mapping portes P0 §04 |
| Handoff précédent PD-05A @ `d0901173d38290269ac8cdda483e43ea36175986` | Continuité review |

---

## Matrice personas — need / value / limits / sources

| Persona | Besoin (need) | Valeur SFIA (value) | Limites explicites | Sources Git |
|---------|---------------|---------------------|--------------------|-------------|
| **VI.1 Dirigeant PME** | Décider d’investir dans un cadre vs demande directe « une app » | Périmètre lisible · gates · reprise · risque réduit (sans ROI chiffré) | Ne pilote pas le métier · pas de garantie délai/coût · pas de ROI inventé | PD-04 §1.1 · Actes II–IV · Famille 1 |
| **VI.2 Chef de projet / PO** | Structurer sans bureaucratie · reprendre après absence | Backlog relié · cycles · review packs · réserves tracées | Ne décide pas seul du métier · pas d’absence de bug/retard garantie | PD-04 §1.2 · Actes II–IV · III.3 |
| **VI.3 Équipe technique** | Savoir ce que Cursor/IA exécute réellement | Contrats d’exécution bornés · preuves QA · garde-fous | Pas vélocité ni zéro bug · pas d’architecture imposée seule par IA | PD-04 §1.3 · III.3 · rules-and-guardrails |
| **VI.4 ESN / partenaire** | Delivery client reproductible sans survendre | Cadre delivery · visibilité · REX · capitalisation (orientation) | Pas licensing/redistribution/offre commerciale · réserves obligatoires persona | PD-04 §1.4 · Acte V · roadmap PD-09 |

---

## Acte VII — matrice sept portes (gates lecteur)

| # | Porte | Question | Public | Profondeur | Contenu promis | Hors périmètre lecteur |
|---|-------|----------|--------|------------|----------------|-------------------------|
| 1 | Cycles et profils | Quel cycle pour ma demande ? | PO · méthode | L2 | Light · Standard · Critical · Capitalization — orientation | Matrice 15 cycles baseline exhaustive |
| 2 | Routage | Comment classer une demande ? | PO · CP | L2 | Catégories cadrage · delivery · QA · PR · post-merge · capi | Arbre décision exhaustif · seuils internes |
| 3 | Templates et assets | Existe-t-il un modèle ? | Tous | L2–L3 | Index · catégories · rôle templates | Texte intégral prompts |
| 4 | Gouvernance | Qui décide quoi ? | Sponsor · CP | L2 | Git prime · gates · Morris / décideur | Protected paths détaillés |
| 5 | Mise en place | Par où commencer techniquement ? | Tech · PO | L3 | Prérequis · repo · outils · commencer petit | Automatisation L5 globale |
| 6 | Documents de référence | Où est la doc fondatrice ? | Contributeur | L4 | Index · bases Référentiel · Cycles | Copie intégrale docs |
| 7 | Glossaire | Que signifie ce terme ? | Tous | L1–L4 | Termes SFIA essentiels | Jargon interne non publié |

**Règle :** maximum **sept portes visibles** — self-check A1 ✓ dans brouillon Acte VII.

---

## Réserves et absences documentées

| Zone | Réserve / absence |
|------|-------------------|
| Dirigeant PME | ROI chiffré · témoignages clients · offres commerciales — absents |
| CP / PO | Prompt catalog · routage exhaustif — non exposés lecteur |
| Technique | Prompt catalog intégral · protected paths · seuils Critical implicites · secrets CI |
| ESN | Contrats commerciaux · licensing · redistribution — décision Morris future |
| Acte VII | Candidate v2.5 cycles — aide pédagogique · non baseline sans promotion Morris |
| RUN / prod | Catégories méthodologiques — non démontrées exhaustivement dans pilotes (héritage Actes IV–V) |
| Notion | PD-06B · pages persona + portail — hors cycle A |
| Migration | PD-07A legacy §00–11 — hors PD-06A |

---

## Décisions Morris — validées / restantes

### Validées (README §8)

- PD-01 · PD-02A · PD-03A · PD-04A · PD-05A mergés ✓
- PD-02B · PD-03B · PD-04B · PD-05B finalisés Notion ✓
- Acte II avant Acte III ✓
- NovaBuild composite ✓
- PR #199 mergée · main @ \`96d1580\` ✓

### Restantes (gates PD-06A — revue ChatGPT + Morris)

| Gate | Objet | Statut pack |
|------|-------|-------------|
| M1 | Structure Acte VI · quatre personas | Brouillons livrés — **en attente Morris** |
| M2 | Différenciation projections persona | Brouillons livrés — **en attente Morris** |
| M3 | Structure Acte VII · sept portes | Brouillon livré — **en attente Morris** |
| M4 | Frontière pédagogique / protégé | **en attente Morris** |
| M5 | Continuité V → VI → VII → Hub | **en attente Morris** |
| M6 | Contenu complet exploitable | **en attente Morris** |
| M7 | GO commit / push / PR projet | **Non** — hors handoff |
| M8 | GO PD-06B Notion | Futur |

---

## QA — 38 contrôles

| # | Contrôle | Résultat |
|---|----------|----------|
| Q1 | Branche = \`documentation/sfia-discovery-acts-06-07-editorial\` | **PASS** |
| Q2 | HEAD = \`96d1580e33baa1ec6e97622c7f2f59a4787ec510\` (aligné \`origin/main\`) | **PASS** |
| Q3 | Aucun commit sur branche projet (0 ahead of main) | **PASS** |
| Q4 | Aucun fichier staged (scope projet) | **PASS** |
| Q5 | 6 fichiers Act VI–VII NEW untracked + README + roadmap MOD | **PASS** |
| Q6 | Actes I–V sources mergées sur main (PR #198 · #199) | **PASS** |
| Q7 | Handoff avant = `d0901173d38290269ac8cdda483e43ea36175986` | **PASS** |
| Q8 | Pattern `Morris tranchera` absent (6 drafts) | **PASS** |
| Q9 | Pattern `à valider` absent | **PASS** |
| Q10 | `BatiNova` absent | **PASS** |
| Q11 | TODO / TBD / FIXME / PLACEHOLDER / WIP / Lorem absent | **PASS** |
| Q12 | `équipe IA qui accélère` absent | **PASS** |
| Q13 | Métadonnée branche correcte dans 6 drafts | **PASS** |
| Q14 | Métadonnée HEAD `96d1580` dans 6 drafts | **PASS** |
| Q15 | Acte VI hub — table choix profil | **PASS** |
| Q16 | Acte VI hub — VI.1 à VI.4 référencés | **PASS** |
| Q17 | Acte VII — section sept portes | **PASS** |
| Q18 | Acte VII — max sept portes visibles | **PASS** |
| Q19 | Persona ESN — réserves obligatoires | **PASS** |
| Q20 | Persona ESN — licensing mentionné (limite) | **PASS** |
| Q21 | Persona technique — Cursor / limites IA | **PASS** |
| Q22 | Persona PO — review pack | **PASS** |
| Q23 | README cycle = PD-06A | **PASS** |
| Q24 | Roadmap PD-06A cycle courant | **PASS** |
| Q25 | README PD-05A ✓ · PD-06B futur | **PASS** |
| Q26 | Transition Acte V → VI (hub) | **PASS** |
| Q27 | Teaser / lien Acte VII depuis hub VI | **PASS** |
| Q28 | Chemins `projects/` non exposés en corps lecteur (6 drafts) | **PASS** |
| Q29 | Acte VII — réserve prompt catalog | **PASS** |
| Q30 | Baseline SFIA v2.4 Acte VII | **PASS** |
| Q31 | Gates M1–M8 documentées README §9 | **PASS** |
| Q32 | PR #199 · main 96d1580 README §8 | **PASS** |
| Q33 | Fiche VI.1 Dirigeant PME présente | **PASS** |
| Q34 | Fiche VI.2 Chef de projet présente | **PASS** |
| Q35 | Fiche VI.3 Équipe technique présente | **PASS** |
| Q36 | Fiche VI.4 ESN présente | **PASS** |
| Q37 | Acte VII self-check A1 sept portes | **PASS** |
| Q38 | Verdict pack = ACTS VI-VII EDITORIAL PREPARED | **PASS** |

**Verdict QA :** **PASS** (38/38) — soumis à revue ChatGPT + gates Morris M1–M6.

---


## FULL CONTENT — `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-project-yourself-editorial-draft.md`

**Rôle :** Acte VI — hub se projeter

```markdown
# ACTE VI — Se projeter avec SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-06A (préparation éditoriale Git — Acte VI) |
| **Acte** | VI — Se projeter avec SFIA |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-acts-06-07-editorial` |
| **HEAD / base** | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
| **Niveau lecture** | L1–L2 |
| **Durée cible** | 2–3 minutes |
| **Implémentation Notion** | Non — gate PD-06B futur |
| **Réaction recherchée** | « Je vois comment SFIA s'applique à mon contexte. » |

---

## 1. Transition depuis l'Acte V

Dans l'**Acte V**, vous avez vu **pourquoi le cadre tient** — Git, cycles, gates, validation proportionnée, limites explicites.

L'**Acte VI** répond à une question personnelle :

> **Qu'est-ce que SFIA change concrètement pour une personne ou une organisation comme la mienne ?**

> **Le cadre est crédible. Reste à comprendre ce qu'il change dans votre contexte.**

---

## 2. Projection par persona

SFIA ne produit pas la **même valeur** pour tout le monde.

La méthode est **unique** — mais votre **responsabilité**, vos **risques** et votre **niveau d'implication** diffèrent selon le rôle.

Cet acte propose **quatre entrées principales** — pas pour répéter les Actes I à V, mais pour **projeter** le cadre dans votre situation.

---

## 3. Choisissez votre profil

| Profil | Question d'entrée | Fichier |
|--------|-------------------|---------|
| **VI.1 — Dirigeant de PME** | Pourquoi investir dans un cadre plutôt que demander directement une application ? | [Dirigeant PME](sfia-discovery-act-06-1-sme-leader-editorial-draft.md) |
| **VI.2 — Chef de projet / PO** | Comment structurer sans bureaucratie documentaire ? | [Chef de projet / PO](sfia-discovery-act-06-2-project-manager-po-editorial-draft.md) |
| **VI.3 — Équipe technique** | Que peut exécuter Cursor — et sous quelles limites ? | [Équipe technique](sfia-discovery-act-06-3-technical-team-editorial-draft.md) |
| **VI.4 — ESN / partenaire** | Comment appliquer SFIA en delivery client sans survendre ? | [ESN / partenaire](sfia-discovery-act-06-4-esn-partner-editorial-draft.md) |

**Parcours secondaires** (sans page dédiée dans ce cycle) :

- **Contributeur méthode** → Acte V + [Acte VII](sfia-discovery-act-07-explore-the-method-editorial-draft.md)
- **Prospect non technique** → [Hub](sfia-discovery-hub-editorial-draft.md) + Acte I (teaser)

---

## 4. Tableau comparatif synthétique

| Dimension | Dirigeant PME | Chef de projet / PO | Équipe technique | ESN / partenaire |
|-----------|---------------|---------------------|------------------|------------------|
| **Profondeur** | L1 | L2 | L2–L3 contrôlée | L2 |
| **Priorité** | Décision · risque · reprise | Scope · cycles · gates | Exécution · preuves · QA | Reproductibilité · visibilité client |
| **Ce que SFIA apporte** | Périmètre lisible · gates | Backlog relié · review packs | Contrats d'exécution bornés | Cadre delivery · REX |
| **Ce que vous apportez** | Intention · arbitrages | Coordination · livrables | Faisabilité · tests | Expertises · preuves mission |
| **Ce que SFIA ne fait pas** | Piloter votre métier | Décider seul du métier | Choisir seul l'architecture | Garantir une offre commerciale |
| **Où approfondir** | Actes I–II · VI.1 | Actes II–IV · VI.2 | Actes III–IV · VII | Actes III–V · VI.4 |

---

## 5. Règle de lecture

Avant d'ouvrir une fiche persona, retenez quatre repères :

| Repère | Contenu |
|--------|---------|
| **Ce que vous gagnez** | Visibilité · traçabilité · reprise · cadre partagé — **selon votre rôle** |
| **Ce que vous devez apporter** | Décisions métier · engagement · lecture des livrables · discipline d'application |
| **Ce que SFIA ne fait pas à votre place** | Valider le métier · garantir délai ou coût · remplacer experts · signer seul |
| **Où approfondir** | Fiche persona → Actes I–V déjà lus → [Acte VII](sfia-discovery-act-07-explore-the-method-editorial-draft.md) si besoin méthode |

---

## 6. Projection pédagogique — pas offre commerciale

Les fiches persona décrivent **comment le cadre s'applique** — pas un contrat, un devis ou une promesse de résultat.

| Distinction | Précision |
|-------------|-----------|
| **Pédagogique** | Rôles · livrables · limites · parcours Discovery |
| **Commercial** | Pricing · licensing · partenariat · SLA — **hors périmètre Discovery** |
| **Décision Morris** | Toute offre de service ou redistribution exige un **GO distinct** |

Aucun chiffre de ROI · délai garanti · ou témoignage client n'est présenté ici.

---

## 7. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | Un cadre crédible en général ne dit pas encore **ce qu'il change pour moi**. |
| **Résolution** | Quatre projections différenciées — même méthode · responsabilités distinctes. |
| **Preuve** | Personas PD-04 · parcours Actes I–V · catégories livrables Acte IV · mécanismes Acte V — **sans** promesse commerciale. |

---

## 8. Navigation vers les fiches persona

```text
VI (hub) ──► VI.1 Dirigeant PME
          ├──► VI.2 Chef de projet / PO
          ├──► VI.3 Équipe technique
          └──► VI.4 ESN / partenaire
```

Commencez par **une seule** fiche — celle qui correspond à votre responsabilité principale.

---

## 9. Transition vers l'Acte VII

Vous savez **ce que SFIA peut changer pour votre rôle**.

La question suivante est **d'exploration** :

> **Vous savez maintenant ce que SFIA peut changer pour votre rôle. Explorez uniquement le niveau de méthode dont vous avez besoin.**

**→ Continuer : [ACTE VII — Explorer la méthode](sfia-discovery-act-07-explore-the-method-editorial-draft.md)**

**← Retour : [ACTE V — Pourquoi cela fonctionne](sfia-discovery-act-05-why-it-works-editorial-draft.md)**

---

## 10. Sources Git (gouvernance)

| Élément | Source vérifiée |
|---------|-----------------|
| Personas et parcours | `discovery-product-design/04-sfia-discovery-personas-and-reading-journeys.md` |
| Architecture cible Acte VI | `discovery-product-design/06-sfia-discovery-target-information-architecture.md` |
| Contrat éditorial | `discovery-product-design/05-sfia-discovery-editorial-contract.md` |
| Livrables et mécanismes | Actes IV–V editorial drafts (PD-05A mergé PR #199) |

*Offres commerciales · licensing · prompt catalog — non publiés lecteur.*

---

## 11. Critères d'acceptation

| # | Critère | Statut |
|---|---------|--------|
| A1 | Quatre entrées persona maximum | ✓ |
| A2 | Tableau comparatif synthétique | ✓ |
| A3 | Distinction pédagogique / commercial | ✓ |
| A4 | Aucune métrique inventée | ✓ |
| A5 | Transition Acte VII | ✓ |

---

## Contenu lecteur — corps principal (PD-06B)

*Sections 1–9 ci-dessus.*
```


## FULL CONTENT — `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-1-sme-leader-editorial-draft.md`

**Rôle :** Acte VI.1 — Dirigeant PME

```markdown
# ACTE VI.1 — Dirigeant de PME

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-06A — persona VI.1 |
| **Acte** | VI — Se projeter |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-acts-06-07-editorial` |
| **HEAD / base** | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
| **Niveau lecture** | L1 |
| **Durée cible** | 4–5 minutes |
| **Implémentation Notion** | Non — gate PD-06B futur |
| **Réaction recherchée** | « Je comprends pourquoi un cadre vaut mieux qu'une demande directe à l'IA. » |

---

## 1. Question initiale

> **Pourquoi investir dans un cadre projet plutôt que demander directement une application à un prestataire ou à une IA ?**

---

## 2. Problèmes reconnus

| Irritant | Ce que vous ressentez |
|----------|----------------------|
| **Coût et délai flous** | On vous promet « une app » — le périmètre reste vague |
| **Dépendance** | Tout repose sur un prestataire ou deux personnes clés |
| **Décisions techniques opaques** | Difficile de savoir ce qui a été tranché — et pourquoi |
| **IA non maîtrisée** | Des bouts utiles — aucune version de référence |
| **Peur de la lourdeur** | « Encore une méthode » qui ralentirait tout |

---

## 3. Ce que SFIA change pour vous

| Changement | En pratique |
|------------|-------------|
| **Périmètre visible** | In / out explicites avant de coder |
| **Décisions documentées** | Gates — pas seulement des réunions orales |
| **Livrables relisables** | Notes · backlog · décisions dans Git |
| **Reprise possible** | Un nouvel intervenant peut relire l'historique |
| **IA assistée** | ChatGPT et Cursor **dans** un cadre — pas en libre |

SFIA ne promet pas un délai ni un budget fixe. Il rend le projet **lisible** et **reprendable**.

---

## 4. Valeur attendue — sans chiffre inventé

- **Moins de surprise** sur ce qui est livré — ou exclu ;
- **Meilleure capacité d'arbitrage** — vous savez quand dire oui ou non ;
- **Réduction du risque de dépendance totale** — le savoir n'est plus seulement dans une tête ;
- **Usage IA encadré** — assistance sans abandon de responsabilité.

Formulation **conditionnelle** : la valeur dépend de l'application rigoureuse du cadre.

---

## 5. Votre rôle dans le dispositif

| Vous… | Vous ne… |
|-------|----------|
| Fixez l'**intention** métier | Pilotez les détails techniques |
| Validez les **décisions structurantes** | Remplacez le chef de projet au quotidien |
| Acceptez ou refusez les **réserves** visibles | Décidez seul des choix d'architecture fine |
| Portez la **responsabilité finale** du projet | Déléguez la responsabilité à l'outil |

**Morris ou le décideur désigné** tranche aux gates — scope · merge · release — avec votre validation sponsor quand requis.

---

## 6. Livrables que vous consultez ou validez

| Livrable | Pourquoi vous y regardez |
|----------|--------------------------|
| **Note de cadrage** | Comprendre le périmètre MVP |
| **Décisions de scope** | Savoir ce qui est exclu |
| **Synthèses de gates** | Valider les arbitrages structurants |
| **Réserves QA** | Comprendre ce qui n'est pas encore prouvé |

Vocabulaire **métier** — pas besoin de lire le détail Git.

---

## 7. Ce que SFIA ne fait pas à votre place

- Choisir votre **marché** ou votre **stratégie commerciale** ;
- Garantir le **succès commercial** de l'application ;
- Remplacer un **expert métier** terrain ;
- Éliminer le **coût** d'un développement sérieux ;
- Décider **seul** à votre place — vous restez sponsor.

---

## 8. Prérequis et limites

| Prérequis | Limite |
|-----------|--------|
| Volonté de **trancher** le périmètre | SFIA structure — ne corrige pas un besoin flou refusé |
| Temps pour **lire** les synthèses de gates | Pas de pilotage « au feeling » sans conséquence |
| Acceptation que l'IA **assiste** — ne signe pas seule | Responsabilité humaine aux points structurants |

---

## 9. Parcours recommandé dans Discovery

```text
Hub → Acte I (pourquoi) → Acte II (organisation) → Acte VI.1
     → option : extrait Acte III (NovaBuild — intention dirigeant)
     → Acte VII si besoin de « comment démarrer »
```

Durée indicative **10–15 minutes** pour une première projection — sans tout lire.

---

## 10. Prochaine action pédagogique

1. Relire [Acte II](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) — contrastes IA libre vs cadre ;
2. Parcourir l'**intention dirigeant** dans [NovaBuild III.1](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md) ;
3. Si vous voulez approfondir la mise en place → [Acte VII](sfia-discovery-act-07-explore-the-method-editorial-draft.md).

**Contact ou offre commerciale** — décision Morris distincte — hors contenu Discovery.

---

## 11. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | « Je veux une app vite » vs « je ne veux pas repartir de zéro dans six mois ». |
| **Résolution** | Cadrage · gates · livrables relisables — avant d'accélérer l'exécution. |
| **Preuve** | Séquence NovaBuild III.1 (fiction) · familles cadrage Acte IV · persona PD-04 §1.1. |

---

## 12. Navigation

**← Précédent :** [Acte VI — Hub persona](sfia-discovery-act-06-project-yourself-editorial-draft.md)

**Suivant → :** [VI.2 — Chef de projet / PO](sfia-discovery-act-06-2-project-manager-po-editorial-draft.md)

**Approfondir :** [Acte VII — Explorer la méthode](sfia-discovery-act-07-explore-the-method-editorial-draft.md)

---

## 13. Sources Git (gouvernance)

| Élément | Source |
|---------|--------|
| Persona dirigeant PME | `discovery-product-design/04-sfia-discovery-personas-and-reading-journeys.md` §1.1 |
| Cadrage et gates | Acte II · Acte III.1 editorial drafts |
| Famille 1 livrables | Acte IV editorial draft (PD-05A) |

*ROI chiffré · témoignages clients · offres commerciales — absents — non sourcés.*

---

## Contenu lecteur — corps principal (PD-06B)

*Sections 1–12 ci-dessus.*
```


## FULL CONTENT — `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-2-project-manager-po-editorial-draft.md`

**Rôle :** Acte VI.2 — Chef de projet / PO

```markdown
# ACTE VI.2 — Chef de projet / PO

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-06A — persona VI.2 |
| **Acte** | VI — Se projeter |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-acts-06-07-editorial` |
| **HEAD / base** | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
| **Niveau lecture** | L2 |
| **Durée cible** | 5–6 minutes |
| **Implémentation Notion** | Non — gate PD-06B futur |
| **Réaction recherchée** | « Je vois comment structurer sans noyer l'équipe dans des documents. » |

---

## 1. Question initiale

> **Comment structurer le projet sans créer une bureaucratie documentaire ?**

---

## 2. Problèmes reconnus

| Irritant | Manifestation |
|----------|---------------|
| **Scope fluctuant** | Le backlog grossit sans lien avec le cadrage |
| **Coordination IA / équipe** | Chacun travaille dans un outil différent |
| **Backlog déconnecté** | Stories sans trace des décisions de scope |
| **Rework** | Reprises liées à un périmètre ambigu |
| **Validations tardives** | Décisions sponsor après des semaines de delivery |
| **Contexte perdu** | Impossible de reprendre après une absence |

---

## 3. Ce que SFIA change pour vous

| Changement | Mécanisme |
|------------|-----------|
| **Cycles bornés** | Intention · périmètre · livrable · stop conditions |
| **Backlog relié au cadrage** | Epics et stories traçables vers le framing |
| **Gates explicites** | Points de décision — pas de dérive silencieuse |
| **Review packs** | Synthèse vérifiable avant merge |
| **Réserves tracées** | Écarts documentés — pas cachés |
| **Reprise facilitée** | Git conserve l'historique des décisions |

La documentation est **proportionnée au risque** — pas systématiquement exhaustive.

---

## 4. Valeur attendue — sans chiffre inventé

- **Moins de rework** lié à un périmètre flou — si le cadrage est tenu ;
- **Meilleure coordination** entre qualification, exécution et validation ;
- **Décisions sponsor** aux bons moments — pas en fin de sprint ;
- **Visibilité** sur ce qui est prêt à merger — et ce qui ne l'est pas.

Valeur **conditionnelle** à l'application du cadre — pas une garantie de vélocité.

---

## 5. Votre rôle dans le dispositif

| Vous… | Vous ne… |
|-------|----------|
| Maintenez **intention et périmètre** | Décidez seul de l'architecture structurante |
| Préparez les **arbitrages** pour les gates | Déléguez le métier à l'IA |
| Vérifiez les **livrables** par cycle | Contournez les stop conditions |
| **Routez** les cycles (cadrage · delivery · QA · PR) | Signez seul un merge critique |
| Consolidez les **review packs** | Remplacez l'expertise sécurité si requise |

---

## 6. Livrables que vous consultez ou validez

| Livrable | Usage PO / CP |
|----------|---------------|
| **Note de cadrage · in/out** | Référence scope |
| **Backlog · epics · stories** | Planification incrémentale |
| **Registre de décisions** | Mémoire des arbitrages |
| **Review pack** | Contrôle avant GO merge |
| **Rapports QA** | Réserves et corrections bornées |
| **Roadmap Discovery / gates** | Alignement cycles produit |

---

## 7. Ce que SFIA ne fait pas à votre place

- **Prioriser** seul au nom du sponsor sans validation ;
- **Corriger** un métier mal défini par plus de process ;
- **Garantir** l'absence de bug ou de retard ;
- **Remplacer** la facilitation humaine avec les parties prenantes ;
- **Automatiser** la discipline — le cadre exige application.

---

## 8. Prérequis et limites

| Prérequis | Limite |
|-----------|--------|
| Cadrage initial **accepté** par le sponsor | Un mauvais cadrage produit des cycles cohérents mais inutiles |
| Accès au **repository** Git | SFIA suppose une source de vérité versionnée |
| Temps pour **lire** les review packs | Pas de merge « au feeling » |

---

## 9. Parcours recommandé dans Discovery

```text
Acte I → Acte II → Acte III (hub + III.1–III.4) → Acte IV → Acte V → VI.2
                                                      ↘ Acte VII (setup)
```

Durée indicative **30–45 minutes** pour une projection crédible.

---

## 10. Prochaine action pédagogique

1. Relire [Acte II](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) — cycles et gates ;
2. Suivre [NovaBuild](sfia-discovery-act-03-follow-novabuild-editorial-draft.md) — chaîne complète ;
3. Consulter [Acte IV](sfia-discovery-act-04-what-sfia-produces-editorial-draft.md) — galerie livrables ;
4. Pour démarrer un repo → [Acte VII — Mettre SFIA en place](sfia-discovery-act-07-explore-the-method-editorial-draft.md).

---

## 11. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | « Trop de process » vs « plus de chaos sans cadre ». |
| **Résolution** | Cycles bornés · validation proportionnée · review packs ciblés. |
| **Preuve** | Acte III NovaBuild · cinq familles Acte IV · mécanismes Acte V · persona PD-04 §1.2. |

---

## 12. Navigation

**← Précédent :** [VI.1 — Dirigeant PME](sfia-discovery-act-06-1-sme-leader-editorial-draft.md)

**Hub :** [Acte VI](sfia-discovery-act-06-project-yourself-editorial-draft.md)

**Suivant → :** [VI.3 — Équipe technique](sfia-discovery-act-06-3-technical-team-editorial-draft.md)

---

## 13. Sources Git (gouvernance)

| Élément | Source |
|---------|--------|
| Persona CP / PO | `discovery-product-design/04-sfia-discovery-personas-and-reading-journeys.md` §1.2 |
| Cycles · gates | Acte II · operating model (référence gouvernance) |
| Livrables | Acte IV · Acte III.3 delivery/QA |

*Prompt catalog · routage exhaustif — non exposés lecteur.*

---

## Contenu lecteur — corps principal (PD-06B)

*Sections 1–12 ci-dessus.*
```


## FULL CONTENT — `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-3-technical-team-editorial-draft.md`

**Rôle :** Acte VI.3 — Équipe technique

```markdown
# ACTE VI.3 — Équipe technique

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-06A — persona VI.3 |
| **Acte** | VI — Se projeter |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-acts-06-07-editorial` |
| **HEAD / base** | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
| **Niveau lecture** | L2–L3 contrôlée |
| **Durée cible** | 5–6 minutes |
| **Implémentation Notion** | Non — gate PD-06B futur |
| **Réaction recherchée** | « Je sais ce que Cursor peut exécuter — et où m'arrêter. » |

---

## 1. Question initiale

> **Qu'est-ce que Cursor et les autres assistants IA peuvent réellement exécuter, et sous quelles limites ?**

---

## 2. Problèmes reconnus

| Irritant | Risque |
|----------|--------|
| **Spécifications instables** | Code jetable · dette invisible |
| **Prompts ad hoc** | Aucune reprise · contexte perdu |
| **Changements hors scope** | Fichiers modifiés non autorisés |
| **QA insuffisante** | Merge sans preuve |
| **Branches divergentes** | Conflits · historique illisible |
| **Perte de contexte** | Nouveau dev ne comprend pas pourquoi |

---

## 3. Ce que SFIA change pour vous

| Changement | Application |
|------------|-------------|
| **Git source de vérité** | Le repo prime sur le chat |
| **Contrats d'exécution bornés** | Fichiers autorisés · interdits · stop conditions |
| **Branches dédiées** | Travail isolé · PR avant merge |
| **Tests et preuves** | QA proportionnée au profil |
| **Revue humaine** | Gates avant merge structurant |
| **Reprise** | Historique · review packs · décisions |

Cursor **exécute** dans un périmètre — il ne redéfinit pas seul le produit.

---

## 4. Valeur attendue — sans chiffre inventé

- **Moins de dette invisible** — si le périmètre fichier est respecté ;
- **Meilleure traçabilité** des changements via PR ;
- **Preuves vérifiables** avant merge — tests · QA · review pack ;
- **Capacité de reprise** — un pair peut relire Git sans tout le contexte chat.

Pas de promesse de **vélocité** ni d'**absence de bug**.

---

## 5. Votre rôle dans le dispositif

| Vous… | Vous ne… |
|-------|----------|
| Qualifiez la **faisabilité** technique | Décidez seul du scope produit |
| **Exécutez** ou supervisez l'exécution | Contournez les gates merge |
| Produisez **preuves** — tests · diffs · QA | Exposez secrets ou tokens |
| Remontez **risques** et réserves | Publiez la méthode interne complète |
| Respectez les **fichiers autorisés** | Force-push ou reset destructif sans GO |

---

## 6. Livrables que vous consultez ou produisez

| Livrable | Rôle technique |
|----------|----------------|
| **Branches · PR** | Isolation · revue · merge |
| **Diffs · stat** | Preuve de périmètre |
| **Tests · QA reports** | Validation avant merge |
| **Review pack** | Synthèse pour décideur |
| **Runbooks · readiness** | Exploitation — si dans le périmètre cycle |

Vocabulaire autorisé : Git · branche · PR · QA · review pack · runtime.

---

## 7. Ce que SFIA ne fait pas à votre place

- Choisir l'**architecture structurante** sans gate ;
- **Valider** seul la sécurité ou la conformité réglementaire ;
- **Garantir** zéro régression ;
- Remplacer une **revue pair** humaine quand le risque l'exige ;
- Divulguer ou reconstruire la **méthode interne complète** via Discovery.

---

## 8. Prérequis et limites

| Prérequis | Limite |
|-----------|--------|
| Repository Git **accessible** | Sans Git, le cadre SFIA perd sa source de vérité |
| Cadrage et backlog **stables** assez pour exécuter | Specs instables → rework malgré le cadre |
| Discipline **fichiers autorisés** | Hors périmètre = stop condition |

---

## 9. Parcours recommandé dans Discovery

```text
Acte II → Acte III.3 (delivery/QA) → Acte IV (familles 3–4) → Acte V → VI.3 → Acte VII
```

Durée indicative **20–30 minutes** pour la projection technique.

---

## 10. Prochaine action pédagogique

1. Lire [III.3 Delivery et QA](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md) ;
2. Parcourir [Acte V](sfia-discovery-act-05-why-it-works-editorial-draft.md) — mécanismes Git et validation ;
3. Explorer [Acte VII](sfia-discovery-act-07-explore-the-method-editorial-draft.md) — templates · gouvernance · setup ;
4. Approfondir depuis **Git** — routing guide · templates — pas depuis Discovery seul.

---

## 11. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | « L'IA code vite » vs « personne ne peut reprendre le repo ». |
| **Résolution** | Périmètre borné · PR · QA · review pack · gates. |
| **Preuve** | Acte III.3 · familles Livrer/Vérifier Acte IV · mécanismes Acte V · persona PD-04 §1.3. |

---

## 12. Navigation

**← Précédent :** [VI.2 — Chef de projet / PO](sfia-discovery-act-06-2-project-manager-po-editorial-draft.md)

**Hub :** [Acte VI](sfia-discovery-act-06-project-yourself-editorial-draft.md)

**Suivant → :** [VI.4 — ESN / partenaire](sfia-discovery-act-06-4-esn-partner-editorial-draft.md)

---

## 13. Sources Git (gouvernance)

| Élément | Source |
|---------|--------|
| Persona technique | `discovery-product-design/04-sfia-discovery-personas-and-reading-journeys.md` §1.3 |
| Delivery · QA | Acte III.3 editorial draft |
| Garde-fous | `core/sfia-rules-and-guardrails.md` (principes — non copiés) |

**Non exposé lecteur :** prompt catalog intégral · routage exhaustif · protected paths · seuils Critical implicites · secrets CI.

---

## Contenu lecteur — corps principal (PD-06B)

*Sections 1–12 ci-dessus.*
```


## FULL CONTENT — `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md`

**Rôle :** Acte VI.4 — ESN / partenaire

```markdown
# ACTE VI.4 — ESN / partenaire

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-06A — persona VI.4 |
| **Acte** | VI — Se projeter |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-acts-06-07-editorial` |
| **HEAD / base** | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
| **Niveau lecture** | L2 |
| **Durée cible** | 5–6 minutes |
| **Implémentation Notion** | Non — gate PD-06B futur |
| **Réaction recherchée** | « Je vois un cadre reproductible — sans promesse commerciale implicite. » |

---

## 1. Question initiale

> **Comment appliquer SFIA dans une delivery client de façon reproductible sans survendre la méthode ?**

---

## 2. Problèmes reconnus

| Irritant | Contexte ESN |
|----------|--------------|
| **Qualité variable** | Dépend des pratiques individuelles |
| **Capitalisation faible** | Chaque mission repart de zéro |
| **Delivery peu visible** | Client ne voit pas les décisions |
| **IA sans gouvernance** | Équipes utilisent Cursor ad hoc |
| **Question d'appropriation** | « Est-ce la méthode Morris ou la nôtre ? » |
| **Responsabilité floue** | Qui tranche scope · merge · release ? |

---

## 3. Ce que SFIA change pour vous

| Changement | Intérêt partenaire |
|------------|-------------------|
| **Cadre reproductible** | Même logique de cycles · gates · livrables |
| **Gouvernance visible** | Client ou sponsor voit les arbitrages |
| **Livrables attendus** | Galerie Acte IV — catégories partagées |
| **REX et capitalisation** | Leçons missionnables — sans export baseline automatique |
| **Adaptation au contexte** | Périmètre client — pas copie intégrale méthode interne |

SFIA structure la **delivery** — il ne remplace pas votre proposition commerciale.

---

## 4. Valeur attendue — sans chiffre inventé

- **Meilleure lisibilité** pour le client sponsor ;
- **Reprise** en cas de changement d'équipe mission ;
- **Réduction du flou** scope · QA · merge ;
- **Discipline IA** alignée avec le contrat d'exécution.

Aucune promesse de **marge** · **win rate** · ou **différenciation marché garantie**.

---

## 5. Votre rôle dans le dispositif

| Vous… | Vous ne… |
|-------|----------|
| Apportez les **expertises** nécessaires | Revendiquez SFIA comme produit white-label sans GO |
| Exécutez dans le **périmètre validé** | Étendez scope sans gate client |
| Produisez **preuves et livrables** | Masquez réserves ou dette |
| Documentez les **écarts** et REX | Promettez conformité SFIA sans application |
| Alignez le client sur les **gates** | Transformez Discovery en argumentaire vente absolu |

---

## 6. Livrables que vous consultez ou produisez

| Livrable | Usage mission |
|----------|---------------|
| **Cadrage · note de scope** | Alignement client |
| **Backlog · review packs** | Visibilité avancement |
| **PR · QA · rapports** | Preuves delivery |
| **REX · capitalisation** | Amélioration — gate Morris si promotion method |
| **Registre décisions** | Traçabilité client |

Catégories inspirées d'**actifs SFIA documentés** — distinctes du récit NovaBuild fiction.

---

## 7. Ce que SFIA ne fait pas à votre place

- Définir votre **pricing** ou **contrat commercial** ;
- Accorder **licence** ou **droits de redistribution** ;
- Garantir un **partenariat** avec Morris ou la méthode ;
- Transférer **propriété intellectuelle** — décision distincte ;
- Remplacer votre **responsabilité** delivery vis-à-vis du client.

---

## 8. Prérequis et limites

| Prérequis | Limite |
|-----------|--------|
| Sponsor client **identifié** | Sans gate client, le cadre se dégrade |
| Repository ou espace Git **partagé** selon contrat | Git prime — pas un drive opaque |
| Accord sur **périmètre** IA et livrables | SFIA n'est pas un label sans pratique |

### Réserves obligatoires (persona ESN)

| Sujet | Statut Discovery |
|-------|------------------|
| **Licensing** | Non défini — GO Morris distinct |
| **Redistribution** | Non autorisée implicitement |
| **Partenariat** | Non promis |
| **Propriété intellectuelle** | Non attribuée ni transférée ici |
| **Offre commerciale** | Contact Morris — hors contenu lecteur |

---

## 9. Parcours recommandé dans Discovery

```text
Acte I → Acte II → Acte III → Acte V → VI.4 → Acte VII
```

Durée indicative **25–35 minutes** — accent garanties · limites · reproductibilité.

---

## 10. Prochaine action pédagogique

1. Lire [Acte V](sfia-discovery-act-05-why-it-works-editorial-draft.md) — garanties et non-garanties ;
2. Parcourir [Acte IV](sfia-discovery-act-04-what-sfia-produces-editorial-draft.md) — livrables attendus ;
3. [Acte VII](sfia-discovery-act-07-explore-the-method-editorial-draft.md) — gouvernance · setup ;
4. **Contact Morris** pour toute question licensing · partenariat · offre.

---

## 11. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | « Méthode propriétaire » vs « besoin de reproductibilité client ». |
| **Résolution** | Cadre delivery · livrables · gates · REX — sans promesse IP ou licensing. |
| **Preuve** | Capitalisation documentée en Git (catégories) · persona PD-04 §1.4 · Acte V limites. |

*Aucun témoignage client nommé · aucun cas mission chiffré.*

---

## 12. Navigation

**← Précédent :** [VI.3 — Équipe technique](sfia-discovery-act-06-3-technical-team-editorial-draft.md)

**Hub :** [Acte VI](sfia-discovery-act-06-project-yourself-editorial-draft.md)

**Suivant → :** [Acte VII — Explorer la méthode](sfia-discovery-act-07-explore-the-method-editorial-draft.md)

---

## 13. Sources Git (gouvernance)

| Élément | Source |
|---------|--------|
| Persona ESN | `discovery-product-design/04-sfia-discovery-personas-and-reading-journeys.md` §1.4 |
| Garanties · limites | Acte V editorial draft |
| Capitalisation | Roadmap PD-09 · knowledge layer (orientation) |

*Contrats commerciaux · licensing · redistribution — absents — décision Morris future.*

---

## Contenu lecteur — corps principal (PD-06B)

*Sections 1–12 ci-dessus.*
```


## FULL CONTENT — `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-07-explore-the-method-editorial-draft.md`

**Rôle :** Acte VII — explorer la méthode

```markdown
# ACTE VII — Explorer la méthode

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillon éditorial Discovery |
| **Cycle** | PD-06A (préparation éditoriale Git — Acte VII) |
| **Acte** | VII — Explorer la méthode |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-acts-06-07-editorial` |
| **HEAD / base** | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
| **Niveau lecture** | L2–L4 par paliers |
| **Durée cible** | 3–5 minutes (portail) · exploration libre ensuite |
| **Implémentation Notion** | Non — gate PD-06B futur |
| **Réaction recherchée** | « Je sais où aller ensuite sans avoir à tout lire. » |

---

## 1. Transition depuis l'Acte VI

Dans l'**Acte VI**, vous avez **projecté** SFIA dans votre rôle — dirigeant · PO · technique · partenaire.

L'**Acte VII** répond à :

> **Où approfondir sans perdre la logique du parcours Discovery ?**

> **Vous savez maintenant ce que SFIA peut changer pour votre rôle. Explorez uniquement le niveau de méthode dont vous avez besoin.**

---

## 2. Principe Discovery → approfondissement

| Couche | Rôle |
|--------|------|
| **Discovery (Notion futur · Git aujourd'hui)** | Valeur · parcours · projection · orientation |
| **Git (méthode détaillée)** | Templates · routing · gouvernance · preuves · historique |

**Discovery explique la valeur. Git conserve la méthode et les actifs détaillés.**

Ne confondez pas ce portail avec un **miroir du repository**.

---

## 3. Sept portes d'entrée

| # | Porte | Fichier cible futur Notion | Orientation Git |
|---|-------|---------------------------|-----------------|
| 1 | [Cycles et profils](#porte-1--cycles-et-profils) | P0 §04 simplifié | routing guide · cycle template |
| 2 | [Routage des demandes](#porte-2--routage-des-demandes) | P0 §05 réduit | routing guide |
| 3 | [Templates et assets](#porte-3--templates-et-assets) | P0 §06 index | prompts/templates · référentiel |
| 4 | [Gouvernance](#porte-4--gouvernance) | P0 §07 résumé | rules-and-guardrails |
| 5 | [Mettre SFIA en place](#porte-5--mettre-sfia-en-place) | P0 §08 | setup guide editorial |
| 6 | [Documents de référence](#porte-6--documents-de-référence) | P0 §10 | bases · docs architecture |
| 7 | [Glossaire](#porte-7--glossaire) | P0 §11 | glossary editorial |

**Maximum sept portes visibles** — pas de sous-menu exhaustif ici.

---

## 4. Niveaux de lecture

| Niveau | Public | Ce que vous obtenez |
|--------|--------|---------------------|
| **L2** | PO · ESN | Orientation cycles · gates · templates (existence) |
| **L3** | Technique · contributeur | Setup · gouvernance · liens Git |
| **L4** | Référence | Documents fondateurs · glossaire complet · bases |

Commencez au **niveau minimum** utile — montez seulement si bloqué.

---

## 5. Tableau des portes

| Porte | Question | Public | Profondeur | Vous trouverez | Vous ne trouverez pas |
|-------|----------|--------|------------|----------------|----------------------|
| **1. Cycles et profils** | Quel type de cycle pour ma demande ? | PO · méthode | L2 | Light · Standard · Critical · Capitalization — **orientation** | Matrice exhaustive 15 cycles baseline |
| **2. Routage** | Comment classer une demande ? | PO · CP | L2 | Catégories : cadrage · delivery · QA · PR · post-merge · capitalisation | Règles internes complètes |
| **3. Templates et assets** | Existe-t-il un modèle ? | Tous | L2–L3 | Index · catégories · rôle des templates | Texte intégral des prompts |
| **4. Gouvernance** | Qui décide quoi ? | Sponsor · CP | L2 | Git prime · gates · réserves · Morris ou décideur désigné | Protected paths détaillés |
| **5. Mise en place** | Par où commencer techniquement ? | Tech · PO | L3 | Prérequis · rôles · repo · outils · commencer petit | Automatisation L5 globale |
| **6. Documents de référence** | Où est la doc fondatrice ? | Contributeur | L4 | Index · bases Référentiel · Cycles | Copie intégrale des docs |
| **7. Glossaire** | Que signifie ce terme ? | Tous | L1–L4 | Définitions SFIA essentielles | Jargon interne non publié |

---

### Porte 1 — Cycles et profils

**Question :** Quel profil et quel type de cycle pour mon besoin ?

**Orientation simplifiée :**

| Profil | Quand l'envisager |
|--------|-------------------|
| **Light** | Faible risque · périmètre doc restreint |
| **Standard** | Cycle courant — **défaut** si doute |
| **Critical** | Risque structurant — **jamais implicite** · justification requise |
| **Capitalization** | Retour d'expérience · promotion method — intention distincte |

> **Baseline opérationnelle : SFIA v2.4.** Des référentiels cycles élargis existent en **Candidate v2.5** — aide pédagogique · **non baseline** tant que Morris n'a pas promu.

**Source inspiration :** editorial P0 §04 · cycle routing guide (principes).

---

### Porte 2 — Routage des demandes

**Question :** Comment orienter une demande vers le bon cycle ?

**Catégories visibles (orientation) :**

- **Cadrage** — intention · scope · qualification ;
- **Conception / delivery** — docs · code · UX selon périmètre ;
- **QA / validation** — preuves · écarts · réserves ;
- **PR readiness** — commit · push · PR · review pack ;
- **Post-merge** — vérification · alignement main ;
- **Capitalisation** — REX · recommandation · gate Morris.

**Ce que vous ne trouverez pas :** arbre de décision exhaustif · seuils internes · catalogues protégés.

**Source inspiration :** editorial P0 §05 · operating model.

---

### Porte 3 — Templates et assets

**Question :** Existe-t-il un gabarit pour mon livrable ?

SFIA maintient des **templates** — cycles · QA · review · handoff · documentation.

| Principe | Détail |
|----------|--------|
| **Existence** | Oui — indexés dans Git |
| **Accès** | Via référentiel · dossier templates |
| **Contenu Discovery** | Rôle du template — pas copie intégrale |

**Source inspiration :** editorial P0 §06 · index templates repository.

---

### Porte 4 — Gouvernance

**Question :** Qui tranche · quoi · quand ?

| Principe | Formulation |
|----------|-------------|
| **Git prime** | Repository = version de référence |
| **Décideur humain** | Morris ou décideur désigné aux gates |
| **Gates** | Scope · architecture · merge · release · capitalisation |
| **Périmètres** | Fichiers autorisés · cycles bornés |
| **Réserves** | Visibles · pas masquées |

**Non publié lecteur :** liste exhaustive protected paths · règles CI secrètes.

**Source inspiration :** editorial P0 §07 · rules-and-guardrails.

---

### Porte 5 — Mettre SFIA en place

**Question :** Quels prérequis pour démarrer ?

| Dimension | Orientation |
|-----------|-------------|
| **Organisation** | Sponsor · CP · accès repo · règles de merge |
| **Repository** | Structure SFIA · branches · conventions |
| **Outils** | Git · Cursor · ChatGPT · CI selon contexte |
| **Démarrage** | Petit périmètre · premier cycle Light ou Standard |
| **Limite** | Pas d'automatisation globale L5 dans Discovery |

**Source inspiration :** editorial P0 §08 setup.

---

### Porte 6 — Documents de référence

**Question :** Où sont les documents fondateurs ?

| Type | Rôle |
|------|------|
| **Bases Référentiel / Cycles** | Vues structurées — embed Notion futur |
| **Docs architecture** | Fondations plateforme — L4 |
| **Product Design Discovery** | Conception parcours — PD-01 |

Discovery **oriente** — ne **recopie** pas ces corpus.

**Source inspiration :** editorial P0 §10 · architecture docs index.

---

### Porte 7 — Glossaire

**Question :** Que signifie ce terme SFIA ?

Termes essentiels : **cycle** · **gate** · **review pack** · **Candidate** · **baseline** · **capitalisation** · **Git prime**.

**Sortie recommandée** si le vocabulaire bloque la lecture des Actes I–VI.

**Source inspiration :** editorial P0 §11 glossary.

---

## 6. Frontière Notion / Git

| Notion (PD-06B futur) | Git (source de vérité) |
|-----------------------|------------------------|
| Parcours Discovery L0–L2 | Brouillons editorial complets |
| Portail Acte VII simplifié | Templates · routing · core |
| Bases embed | Historique · PR · preuves |

Toute divergence se tranche **en faveur de Git** après merge validé.

---

## 7. Contenu publiable vs protégé

### Public / pédagogique (ce portail)

- Existence des cycles et profils ;
- Logique des gates ;
- Git source de vérité ;
- Types de livrables ;
- Rôle des outils ;
- Principes de mise en place ;
- Orientation vers ressources.

### Orientation Git (approfondissement)

- Documentation méthode dans le repository ;
- Templates disponibles ;
- Index de référence ;
- Exemples publiables sans secrets.

### Protégé / non publié (corps lecteur Discovery)

- Prompt catalog intégral ;
- Textes complets des prompts Cursor ;
- Matrice de routage exhaustive ;
- Règles internes protected paths ;
- Seuils Critical implicites ;
- Secrets · tokens · environnements ;
- Procédures reconstruisant intégralement SFIA sans gate.

*Chemins techniques détaillés — section sources Git et review pack uniquement.*

---

## 8. Conseils de parcours

| Profil | Parcours Acte VII suggéré |
|--------|---------------------------|
| **Dirigeant PME** | Glossaire → Gouvernance → Mise en place (aperçu) |
| **Chef de projet / PO** | Cycles → Routage → Templates → Gouvernance |
| **Équipe technique** | Templates → Mise en place → Documents référence |
| **ESN / partenaire** | Gouvernance → Cycles → Documents référence |
| **Contributeur méthode** | Toutes portes L3–L4 → Git direct |

---

## 9. Conflit · résolution · preuve

| | |
|--|--|
| **Conflit** | « Je veux la méthode complète » vs « je me noie si tout est exposé ». |
| **Résolution** | Portail à sept portes · profondeur par paliers · Git pour le détail. |
| **Preuve** | Architecture cible PD-06 §2 · mapping P0 §04–11 · editorial Notion drafts existants. |

---

## 10. Navigation retour

**← Retour :** [Acte VI — Se projeter](sfia-discovery-act-06-project-yourself-editorial-draft.md)

**Hub Discovery :** [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md)

> **Revenez au parcours Discovery ou approfondissez depuis la source Git de référence.**

**PD-07A (migration legacy)** — hors cycle PD-06A · plan redirections §00–11 futur.

---

## 11. Sources Git (gouvernance)

| Porte | Sources vérifiées |
|-------|-------------------|
| Cycles · profils | `notion/editorial/sfia-notion-04-cycles-profiles-gates-editorial-draft.md` · `core/sfia-cycle-routing-guide.md` |
| Routage | `notion/editorial/sfia-notion-05-request-routing-editorial-draft.md` |
| Templates | `notion/editorial/sfia-notion-06-templates-prompts-deliverables-editorial-draft.md` |
| Gouvernance | `notion/editorial/sfia-notion-07-governance-guardrails-editorial-draft.md` · `core/sfia-rules-and-guardrails.md` |
| Setup | `notion/editorial/sfia-notion-08-setup-sfia-editorial-draft.md` |
| Architecture cible | `discovery-product-design/06-sfia-discovery-target-information-architecture.md` |
| Glossaire | `notion/editorial/sfia-notion-11-glossary-editorial-draft.md` (référence P0 §11) |

*Prompt catalog · protected paths — référencés · non reproduits.*

---

## 12. Critères d'acceptation

| # | Critère | Statut |
|---|---------|--------|
| A1 | Sept portes maximum | ✓ |
| A2 | Frontière public / protégé explicite | ✓ |
| A3 | Pas de copie intégrale Git | ✓ |
| A4 | Baseline v2.4 · Candidate | ✓ |
| A5 | Retour Hub · pas de PD-07A | ✓ |

---

## Contenu lecteur — corps principal (PD-06B)

*Sections 1–10 ci-dessus.*
```


## FULL CONTENT — `method/sfia-fast-track/documentation/notion/discovery/editorial/README.md`

**Rôle :** README editorial — inventaire PD-06A

```markdown
# SFIA Discovery — Editorial (brouillons lecteur)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — brouillons éditoriaux Discovery |
| **Cycle courant** | PD-06A — Actes VI et VII (préparation Git) |
| **Propriétaire** | Morris |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Branche projet** | `documentation/sfia-discovery-acts-06-07-editorial` |
| **HEAD / base** | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
| **Implémentation Notion** | PD-02B ✓ · PD-03B ✓ · PD-04B ✓ · PD-05B ✓ · PD-06B futur |
| **Capitalisation méthode** | Non |

---

## 1. Rôle du dossier

Brouillons **destinés au lecteur final** de SFIA Discovery — source Git stable avant implémentation Notion (cycles PD-nB).

Non substituts au Product Design PD-01 ni aux drafts P0 §00–11.

---

## 2. Séquence narrative (decision Morris)

```text
Hub + Acte I ✓ → Acte II ✓ → Acte III ✓ → Acte IV ✓ → Acte V ✓ → Acte VI–VII (en cours) 
```

**Acte II avant Acte III** — le contraste précède le fil rouge NovaBuild.

---

## 3. Inventaire des brouillons

| # | Fichier | Acte | Statut editorial Git |
|---|---------|------|----------------------|
| 1 | [sfia-discovery-hub-editorial-draft.md](sfia-discovery-hub-editorial-draft.md) | Hub | ✓ mergé (PD-02A) |
| 2 | [sfia-discovery-act-01-why-sfia-exists-editorial-draft.md](sfia-discovery-act-01-why-sfia-exists-editorial-draft.md) | I | ✓ mergé (PD-02A) |
| 3 | [sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md](sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md) | II | ✓ mergé (PD-03A) |
| 4 | [sfia-discovery-act-03-follow-novabuild-editorial-draft.md](sfia-discovery-act-03-follow-novabuild-editorial-draft.md) | III | ✓ mergé (PD-04A) |
| 5 | [sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md](sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md) | III.1 | ✓ mergé (PD-04A) |
| 6 | [sfia-discovery-act-03-2-design-and-ux-editorial-draft.md](sfia-discovery-act-03-2-design-and-ux-editorial-draft.md) | III.2 | ✓ mergé (PD-04A) |
| 7 | [sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md](sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md) | III.3 | ✓ mergé (PD-04A) |
| 8 | [sfia-discovery-act-03-4-release-and-run-editorial-draft.md](sfia-discovery-act-03-4-release-and-run-editorial-draft.md) | III.4 | ✓ mergé (PD-04A) |
| 9 | [sfia-discovery-act-04-what-sfia-produces-editorial-draft.md](sfia-discovery-act-04-what-sfia-produces-editorial-draft.md) | IV | ✓ mergé (PD-05A · PR #199) |
| 10 | [sfia-discovery-act-05-why-it-works-editorial-draft.md](sfia-discovery-act-05-why-it-works-editorial-draft.md) | V | ✓ mergé (PD-05A · PR #199) |
| 11 | [sfia-discovery-act-06-project-yourself-editorial-draft.md](sfia-discovery-act-06-project-yourself-editorial-draft.md) | VI | **PD-06A — revue** |
| 12 | [sfia-discovery-act-06-1-sme-leader-editorial-draft.md](sfia-discovery-act-06-1-sme-leader-editorial-draft.md) | VI.1 | **PD-06A — revue** |
| 13 | [sfia-discovery-act-06-2-project-manager-po-editorial-draft.md](sfia-discovery-act-06-2-project-manager-po-editorial-draft.md) | VI.2 | **PD-06A — revue** |
| 14 | [sfia-discovery-act-06-3-technical-team-editorial-draft.md](sfia-discovery-act-06-3-technical-team-editorial-draft.md) | VI.3 | **PD-06A — revue** |
| 15 | [sfia-discovery-act-06-4-esn-partner-editorial-draft.md](sfia-discovery-act-06-4-esn-partner-editorial-draft.md) | VI.4 | **PD-06A — revue** |
| 16 | [sfia-discovery-act-07-explore-the-method-editorial-draft.md](sfia-discovery-act-07-explore-the-method-editorial-draft.md) | VII | **PD-06A — revue** |

---

## 4. Ordre de lecture

1. **Hub** — orientation · parcours · portes persona
2. **Acte I** — pourquoi SFIA existe
3. **Acte II** — comment SFIA organise le projet
4. **Acte III** — fil rouge NovaBuild (hub + III.1 → III.4)
5. **Acte IV** — ce que SFIA produit
6. **Acte V** — pourquoi cela fonctionne
7. **Acte VI** — se projeter (hub + VI.1 → VI.4)
8. **Acte VII** — explorer la méthode

---

## 5. Positionnement cycles A / B

| Incrément | Editorial Git (A) | Notion (B) |
|-----------|-------------------|------------|
| Hub + I | PD-02A ✓ | PD-02B ✓ |
| Acte II | PD-03A ✓ | PD-03B ✓ |
| Acte III NovaBuild | PD-04A ✓ (PR #198) | PD-04B ✓ |
| Actes IV–V | PD-05A ✓ (PR #199) | PD-05B ✓ |
| Actes VI–VII | **PD-06A** (présent — revue) | PD-06B — futur |
| Migration legacy | PD-07A — futur | PD-07B |

**NovaBuild** = cas pédagogique composite — catégories livrables inspirées d'actifs SFIA vérifiables.

Référence roadmap : [07-sfia-discovery-transformation-roadmap.md](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)

---

## 6. Règles éditoriales

Contrat complet : `../discovery-product-design/05-sfia-discovery-editorial-contract.md`

- 80 % métier / valeur · 20 % fonctionnel (L2)
- Preuve avant promesse · quatre personas · sept portes max (Acte VII)
- Opacité méthodologique sélective

---

## 7. Garde-fous

- Aucune page Notion PD-06B · aucun prompt catalog · aucune capitalisation baseline
- Aucune promesse commerciale · licensing · redistribution (persona ESN)

---

## 8. Décisions Morris validées

- PD-01 · PD-02A · PD-03A · PD-04A · PD-05A mergés ✓
- PD-02B · PD-03B · PD-04B · PD-05B finalisés Notion ✓
- Acte II avant Acte III ✓
- NovaBuild composite ✓
- PR #199 mergée · main @ `96d1580` ✓

---

## 9. Gates Acte VI–VII (PD-06A)

| Gate | Objet | Statut |
|------|-------|--------|
| **M1** | Structure Acte VI · quatre personas | En attente |
| **M2** | Différenciation projections persona | En attente |
| **M3** | Structure Acte VII · sept portes | En attente |
| **M4** | Frontière pédagogique / protégé | En attente |
| **M5** | Continuité V → VI → VII → Hub | En attente |
| **M6** | Contenu complet exploitable | En attente |
| **M7** | GO commit / push / PR | En attente |
| **M8** | GO PD-06B Notion | Hors cycle — futur |

---

## 10. Critères d'entrée PD-06B

- Actes VI et VII validés Morris · merge Git recommandé · GO implémentation Notion L0
- Dépendance : PD-05A/B ✓

---

## 11. Liens

→ [Product Design](../discovery-product-design/README.md) · [Roadmap](../discovery-product-design/07-sfia-discovery-transformation-roadmap.md)
```


## FULL CONTENT — `method/sfia-fast-track/documentation/notion/discovery-product-design/07-sfia-discovery-transformation-roadmap.md`

**Rôle :** Roadmap 07 — transformation Discovery

```markdown
# 07 — Roadmap de transformation — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Horodatage** | 2026-07-15 14:10 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-acts-06-07-editorial` |
| **HEAD** | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| **Décision Morris** | Acte II avant Acte III — séquence narrative I → II → III |

---

## 1. Positionnement

| Phase | Contenu |
|-------|---------|
| **PD-01** | Product Design Candidate — mergé ✓ |
| **PD-nA** | Préparation éditoriale Git |
| **PD-nB** | Implémentation Notion L0 |
| **PD-08** | QA narrative et métier |
| **PD-09** | Décision capitalisation — GO Morris |

**Ordre narratif obligatoire :** Hub + Acte I → **Acte II** → Acte III (NovaBuild) → Actes IV–V → Actes VI–VII → migration → QA → capitalisation.

**Règle structurante :** chaque incrément de contenu suit **deux cycles distincts** — préparation Git (A) puis implémentation Notion (B).

> La source éditoriale Git doit être validée avant toute implémentation Notion. Le merge préalable est **recommandé** pour les incréments structurants.

---

## 2. Modèle A / B

| Cycle | Périmètre | Gate |
|-------|-----------|------|
| **A — Git** | Brouillons Markdown complets | GO Morris commit/PR/merge |
| **B — Notion** | Matérialisation L0 manuelle | GO Morris implémentation |

---

## 3. Incréments

### PD-01 — Product Design Candidate ✓

Corpus PD-01 — mergé (PR #195).

### PD-02A — Hub + Acte I — préparation Git ✓

Brouillons Hub + Acte I — mergé (PR #196).

### PD-02B — Hub + Acte I — implémentation Notion ✓

| Prérequis | PD-02A mergé (PR #196) ✓ |
| Notion | Hub Discovery créé · Acte I créé |
| Source Git | Corpus PD-02A mergé via PR #196 |
| Statut | **Finalisé** |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

Git reste la **source de vérité** — Notion = couche métier et pédagogique.

### PD-03A — Acte II — préparation Git ✓

Brouillon Acte II — mergé (PR #197).

### PD-03B — Acte II — implémentation Notion ✓

| Prérequis | PD-03A mergé ✓ |
| Notion | Acte II créé |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-04A — Acte III — fil rouge NovaBuild — préparation Git ✓

Brouillons Acte III + III.1–III.4 — mergé (PR #198).

### PD-04B — Acte III — implémentation Notion ✓

| Prérequis | PD-04A mergé (PR #198) ✓ |
| Notion | Pages fil rouge NovaBuild |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-05A — Actes IV et V — préparation Git ✓

Brouillons Acte IV (galerie livrables) · Acte V (garanties et limites) — mergé (PR #199).

| Merge commit | `96d1580e33baa1ec6e97622c7f2f59a4787ec510` |
| Prérequis | PD-04A/B ✓ |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-05B — Actes IV et V — implémentation Notion ✓

| Prérequis | PD-05A mergé (PR #199) ✓ |
| Notion | Pages Actes IV et V |
| Statut | **Finalisé** — validé Morris |
| QA narrative globale | **PD-08 non réalisée** à ce stade |

### PD-06A — Actes VI et VII — préparation Git

| Objectif | Brouillons Acte VI (hub + VI.1–VI.4 personas) · Acte VII (portail méthode) |
| Prérequis | PD-05A/B ✓ |
| Gate | M1–M6 Morris · frontière confidentialité · différenciation personas |

*Cycle courant — brouillons en revue.*

### PD-06B — Actes VI et VII — implémentation Notion

Pages persona + portail annexes — gate M8 Morris futur.

### PD-07A — Migration legacy — préparation Git

Plan redirections §00–11 → architecture Discovery.

### PD-07B — Migration legacy — Notion

Redirections · archivage — gate Morris GO migration.

### PD-08 — QA narrative et métier

Framework §08 · dépend PD-02B–07B.

### PD-09 — Décision capitalisation

Évaluer promotion method/core — GO Morris.

---

## 4. Dépendances globales

```text
PD-01 ✓
├── PD-02A ✓ → PD-02B ✓
├── PD-03A ✓ → PD-03B ✓  ← Acte II
├── PD-04A ✓ → PD-04B ✓  ← NovaBuild
├── PD-05A ✓ → PD-05B ✓  ← Actes IV–V
├── PD-06A → PD-06B     ← Actes VI–VII (cycle courant)
├── PD-07A → PD-07B
├── PD-08 (après 07B)
└── PD-09 (après PD-08)
```

**Séquence éditoriale Git recommandée :** 03A → 04A → 05A → 06A → 07A (parallélisme A possible avec gates par incrément).

---

## 5. Distinction phases (synthèse)

```text
Conception (PD-01) ✓
  → Hub + I (02A ✓ / 02B)
    → Acte II (03A ✓ / 03B ✓)
      → Acte III NovaBuild (04A ✓ / 04B ✓)
        → Actes IV–V (05A ✓ / 05B ✓)
          → Actes VI–VII (06A en cours / 06B)
            → QA (08) → Capitalisation? (09)
```

---

## 6. Mapping renumérotation (référence)

| Ancien ID | Nouveau ID | Contenu |
|-----------|------------|---------|
| PD-03A/B | **PD-04A/B** | Acte III NovaBuild |
| PD-04A/B | **PD-05A/B** | Actes IV et V |
| PD-05A/B | **PD-06A/B** | Actes VI et VII |
| PD-06A/B | **PD-07A/B** | Migration legacy |
| PD-07 | **PD-08** | QA |
| PD-08 | **PD-09** | Capitalisation |
| — | **PD-03A/B** | **Acte II** (nouveau slot) |

---

## 7. Critères capitalisation (PD-09)

Itérations réelles · usage amélioré · gabarits réutilisables · dette acceptable · **GO Morris**

---

## Liens

→ [08 Acceptation](08-sfia-discovery-acceptance-framework.md) · [README](README.md)
```


---

## git diff --stat (répétition fin de pack)

```
 .../07-sfia-discovery-transformation-roadmap.md    | 40 ++++++++------
 .../notion/discovery/editorial/README.md           | 61 +++++++++++++---------
 2 files changed, 60 insertions(+), 41 deletions(-)
```

---

## Correctif PD-06A — Réserves ChatGPT R1–R4

**Horodatage :** 2026-07-15 ~14:40 Europe/Paris (CEST)
**Décision :** Morris **GO R1–R4** (correctif éditorial ciblé — sans commit branche projet)
**Handoff avant :** `origin/sfia/review-handoff` @ `32f1c6607e81a5117bb7750096ff2980a9195fc8`
**Branche projet :** `documentation/sfia-discovery-acts-06-07-editorial` (non commitée)

### Git state before (correctif)

```text
M method/sfia-fast-track/documentation/notion/discovery-product-design/07-sfia-discovery-transformation-roadmap.md
 M method/sfia-fast-track/documentation/notion/discovery/editorial/README.md
?? .sfia/
?? .tmp-sfia-review/
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-1-sme-leader-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-2-project-manager-po-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-3-technical-team-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-project-yourself-editorial-draft.md
?? method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-07-explore-the-method-editorial-draft.md
?? sfia-review-handoff/
```

**Périmètre correctif vérifié :** modifications substantives **uniquement** sur
`sfia-discovery-act-07-explore-the-method-editorial-draft.md` et
`sfia-discovery-act-06-4-esn-partner-editorial-draft.md` — hub VI · VI.1–VI.3 · README · roadmap **hors** session correctif.

### Réserves — avant / après

| Réserve | Avant (ChatGPT) | Après (correctif Morris GO R1–R4) |
|---------|-----------------|-----------------------------------|
| **R1** | §3 Acte VII — table « Fichier cible futur Notion / Orientation Git » | §3 — « Destination Discovery / Approfondissement » |
| **R2** | §5 porte 1 — « Matrice exhaustive 15 cycles baseline » | « Référentiel détaillé des cycles candidats et règles internes de qualification » |
| **R3** | VI.4 §3 — « Leçons missionnables » · « il ne remplace pas » | « Leçons réutilisables… sans promotion automatique » · « elle ne remplace pas » |
| **R4** | VI.4 — « Contact Morris » (réserves + prochaine action) | « Non définie dans Discovery — décision Morris distincte » · sans étape Contact Morris |

### Acte VII — section 3 complète (corrigée)

```markdown
## 3. Sept portes d'entrée

| # | Porte | Destination Discovery | Approfondissement |
|---|-------|-----------------------|-------------------|
| 1 | [Cycles et profils](#porte-1--cycles-et-profils) | Page pédagogique dédiée | Documentation méthode dans Git |
| 2 | [Routage des demandes](#porte-2--routage-des-demandes) | Guide simplifié | Référentiel de routage |
| 3 | [Templates et assets](#porte-3--templates-et-assets) | Index pédagogique | Index des modèles disponibles |
| 4 | [Gouvernance](#porte-4--gouvernance) | Synthèse des garde-fous | Documentation de gouvernance |
| 5 | [Mettre SFIA en place](#porte-5--mettre-sfia-en-place) | Guide de démarrage | Documentation d'installation |
| 6 | [Documents de référence](#porte-6--documents-de-référence) | Portail documentaire | Corpus de référence |
| 7 | [Glossaire](#porte-7--glossaire) | Glossaire Discovery | Glossaire complet |

**Maximum sept portes visibles** — pas de sous-menu exhaustif ici.

---
```

### Acte VII — ligne corrigée (§5 tableau — porte 1)

```markdown
| **1. Cycles et profils** | Quel type de cycle pour ma demande ? | PO · méthode | L2 | Light · Standard · Critical · Capitalization — **orientation** | Référentiel détaillé des cycles candidats et règles internes de qualification |
```

### Acte VI.4 — sections corrigées

#### Ce que SFIA change pour vous

```markdown
## 3. Ce que SFIA change pour vous

| Changement | Intérêt partenaire |
|------------|-------------------|
| **Cadre reproductible** | Même logique de cycles · gates · livrables |
| **Gouvernance visible** | Client ou sponsor voit les arbitrages |
| **Livrables attendus** | Galerie Acte IV — catégories partagées |
| **REX et capitalisation** | Leçons réutilisables entre missions — sans promotion automatique |
| **Adaptation au contexte** | Périmètre client — pas copie intégrale méthode interne |

SFIA structure la **delivery** — elle ne remplace pas votre proposition commerciale.

---
```

#### Valeur attendue — sans chiffre inventé

```markdown
## 4. Valeur attendue — sans chiffre inventé

- **Meilleure lisibilité** pour le client sponsor ;
- **Reprise** en cas de changement d'équipe mission ;
- **Réduction du flou** scope · QA · merge ;
- **Discipline IA** alignée avec le contrat d'exécution.

Aucune promesse de **marge** · **win rate** · ou **différenciation marché garantie**.

---
```

#### Réserves obligatoires (persona ESN)

```markdown
### Réserves obligatoires (persona ESN)

| Sujet | Statut Discovery |
|-------|------------------|
| **Licensing** | Non défini — GO Morris distinct |
| **Redistribution** | Non autorisée implicitement |
| **Partenariat** | Non promis |
| **Propriété intellectuelle** | Non attribuée ni transférée ici |
| **Offre commerciale** | Non définie dans Discovery — décision Morris distincte |

---
```

#### Prochaine action pédagogique

```markdown
## 10. Prochaine action pédagogique

1. Lire [Acte V](sfia-discovery-act-05-why-it-works-editorial-draft.md) — garanties et non-garanties ;
2. Parcourir [Acte IV](sfia-discovery-act-04-what-sfia-produces-editorial-draft.md) — livrables attendus ;
3. [Acte VII](sfia-discovery-act-07-explore-the-method-editorial-draft.md) — gouvernance · setup ;

---
```

### git diff --stat (2 fichiers correctifs vs embed handoff PD-06A)

```text
 .../notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md |  57 +++++++++++++++++++++-----
 .../notion/discovery/editorial/sfia-discovery-act-07-explore-the-method-editorial-draft.md |  20 ++++++++++----------
 2 files changed, 64 insertions(+), 13 deletions(-)```

### QA — 34 contrôles (correctif R1–R4)

| # | Contrôle | Résultat |
|---|----------|----------|
| Q1 | Branche = `documentation/sfia-discovery-acts-06-07-editorial` | **PASS** |
| Q2 | HEAD = `96d1580e33baa1ec6e97622c7f2f59a4787ec510` | **PASS** |
| Q3 | Correctif — seuls act-07 + act-06-4 modifiés vs embed handoff (VI hub/1–3 préfixe inchangé) | **PASS** |
| Q4 | README / roadmap non touchés en session correctif | **PASS** |
| Q5 | Handoff avant = `32f1c6607e81a5117bb7750096ff2980a9195fc8` | **PASS** |
| Q6 | `Matrice exhaustive` absent (Acte VII §1–3 + VI.4) | **PASS** |
| Q7 | `Contact Morris` absent (VI.4) | **PASS** |
| Q8 | `Leçons missionnables` absent (VI.4) | **PASS** |
| Q9 | R1 — table §3 `Destination Discovery` / `Approfondissement` | **PASS** |
| Q10 | R1 — §3 sans colonnes Notion/P0 techniques | **PASS** |
| Q11 | R2 — §5 porte 1 formulation Référentiel détaillé… | **PASS** |
| Q12 | R2 — plus « Matrice exhaustive 15 cycles baseline » | **PASS** |
| Q13 | R3 — Leçons réutilisables… sans promotion automatique | **PASS** |
| Q14 | R3 — « elle ne remplace pas » | **PASS** |
| Q15 | R4 — Offre commerciale Discovery / Morris distincte | **PASS** |
| Q16 | R4 — Prochaine action sans Contact Morris | **PASS** |
| Q17 | Porte 1 — `Source inspiration` préservée (contrainte DIFF) | **PASS** |
| Q18 | Porte 2 — `Source inspiration` préservée (contrainte DIFF) | **PASS** |
| Q19 | Porte 3 — `Source inspiration` préservée (contrainte DIFF) | **PASS** |
| Q20 | Porte 4 — `Source inspiration` préservée (contrainte DIFF) | **PASS** |
| Q21 | Porte 5 — `Source inspiration` préservée (contrainte DIFF) | **PASS** |
| Q22 | Porte 6 — `Source inspiration` préservée (contrainte DIFF) | **PASS** |
| Q23 | Porte 7 — `Source inspiration` préservée (contrainte DIFF) | **PASS** |
| Q24 | Pattern `Morris tranchera` absent (6 drafts) | **PASS** |
| Q25 | §3 — sept portes numérotées 1–7 | **PASS** |
| Q26 | Maximum sept portes visibles (§3) | **PASS** |
| Q27 | Table profils sous porte 1 (Light→Capitalization) | **PASS** |
| Q28 | VI.4 — Réserves obligatoires présentes | **PASS** |
| Q29 | §7 protégé — Matrice de routage exhaustive (OK) | **PASS** |
| Q30 | Baseline SFIA v2.4 (Acte VII) | **PASS** |
| Q31 | HEAD 96d1580 dans fichiers correctifs | **PASS** |
| Q32 | 0 commit ahead origin/main (projet) | **PASS** |
| Q33 | Fichiers correctifs untracked | **PASS** |
| Q34 | Verdict correctif READY FOR CHATGPT RE-REVIEW | **PASS** |

*Note : portes 1–7 — lignes « Source inspiration » préservées (contrainte DIFF) ; table §3 nettoyée (R1).*

---

## Verdict final (post-correctif)

**ACTS VI-VII EDITORIAL CORRECTED — READY FOR CHATGPT RE-REVIEW**

Correctif PD-06A R1–R4 appliqué sur disque · branche projet non commitée · handoff `sfia/review-handoff` mis à jour séparément.

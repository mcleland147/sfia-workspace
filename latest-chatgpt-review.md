# SFIA Review Pack — Mono-cycle PD-09 — Capitalization Decision

**Date :** 2026-07-16 12:25 Europe/Paris (CEST)
**Repository :** mcleland147/sfia-workspace
**Workspace :** /Users/morris/Projects/sfia-workspace
**Branch :** `documentation/sfia-discovery-pd-09-capitalization`
**Cycle :** PD-09 — Décision de capitalisation / REX
**Profil SFIA :** Capitalization
**Typologie v2.4 :** CAPA / DOC · **Type :** 15
**Profondeur :** Standard
**Verdict :** **PD-09 CAPITALIZATION DECISION READY FOR MORRIS REVIEW**

---

## Git truth

| Champ | Valeur |
|-------|--------|
| **Branche** | `documentation/sfia-discovery-pd-09-capitalization` |
| **HEAD** | `b2ff105d6adcfe5d0db581b731b3b189eb16fb17` |
| **origin/main** | `b2ff105d6adcfe5d0db581b731b3b189eb16fb17` |
| **merge-base (HEAD, origin/main)** | `b2ff105d6adcfe5d0db581b731b3b189eb16fb17` |
| **Alignement** | HEAD = origin/main = merge-base = `b2ff105d6adcfe5d0db581b731b3b189eb16fb17` (merge PR #202 — PD-08) |

### git status --short

```text
?? .sfia/
?? .tmp-sfia-review/
?? method/sfia-fast-track/documentation/notion/discovery-product-design/10-sfia-discovery-pd-09-capitalization-decision.md
?? sfia-review-handoff/
```

### git diff --name-status

```text
(empty — no tracked file modifications)
```

### git diff --stat

```text
(empty — no tracked file modifications)
```

### git diff --check

```text
(empty — no whitespace errors; no tracked diffs)
```

### Fichier projet unique (untracked)

| Critère | Résultat |
|---------|----------|
| **Seul nouveau fichier projet attendu** | `method/sfia-fast-track/documentation/notion/discovery-product-design/10-sfia-discovery-pd-09-capitalization-decision.md` |
| **wc -l** | `315 /Users/morris/Projects/sfia-workspace/method/sfia-fast-track/documentation/notion/discovery-product-design/10-sfia-discovery-pd-09-capitalization-decision.md` |
| **Autres untracked (hors livrable projet)** | `.sfia/` · `.tmp-sfia-review/` · `sfia-review-handoff/` — **exclus** du commit projet |

**Aucun `git add` / commit / push de la branche projet dans ce cycle handoff.**

---

## Sources consulted

1. `method/sfia-fast-track/documentation/notion/discovery-product-design/10-sfia-discovery-pd-09-capitalization-decision.md` (livrable PD-09 — contenu intégral ci-dessous)
2. Trajectoire Discovery PD-01 → PD-08 (contexte décisionnel ; PR #195–#202)
3. `09-sfia-discovery-pd-08-qa-report.md` / merge `b2ff105` (baseline post PD-08)
4. Décision Morris VALIDÉE (10 points) — formalisée dans le livrable PD-09
5. Git truth local : `git status` · `git diff` · `git rev-parse HEAD` · `origin/main` · `merge-base`
6. Roadmap / framework d’acceptation / corpus editorial & migration (référencés dans le livrable, non modifiés)

---

## Morris decision — VALIDATED (10 points)

> Statut : **DÉCISION VALIDÉE** (exprimée et confirmée pour PD-09 — non une recommandation Cursor).

1. Discovery / Notion **n’est pas promu** dans `method/core`.
2. **Ne devient pas** un cycle projet SFIA standard.
3. **Ne devient pas** une étape obligatoire de la méthode.
4. Actifs **conservés** comme documentation, historique, exemples et **boîte à outils optionnelle**.
5. Toute évolution structurée Notion → **processus indépendant**.
6. Déclenchement **uniquement** sur besoin explicite + **GO Morris**.
7. Exécution **repo-first** pour les sources éditoriales.
8. Actions Notion **manuelles / contrôlées**, **réversibles**, sous **gates**.
9. **Aucune généralisation automatique**.
10. Conception / industrialisation du processus indépendant → **cycle séparé** + **nouveau GO Morris**.

---

## Observations O1–O8 (table summary)

| ID | Observation | Destination / statut |
|----|-------------|----------------------|
| O1 | Séparation A (Git) / B (Notion) → gates clairs | Conservé optionnel — boîte à outils |
| O2 | Inventaire avant migration réduit le risque | Conservé optionnel — historique + boîte |
| O3 | QA narrative C1–C20 structure l’arbitrage Morris | Conservé optionnel — référence |
| O4 | Dérive métadonnées Hub/README (ANOM-01–06) | Observation locale — non promu |
| O5 | Notion runtime non vérifiable depuis Cursor | Réserve — non promu |
| O6 | Dispositif volumineux (conception → QA) | Observation — justifie non-promotion |
| O7 | Spécificité Notion ≠ méthode d’exécution SFIA | Décision Morris — non promu en core |
| O8 | Fond narratif solide après corrections PD-08 | Conservé — documentation |

---

## Assets conserved vs not promoted

### Conservés (≠ obligation d’usage)

| Actif | Statut |
|-------|--------|
| Product Design PD-01…08 | Référence optionnelle |
| Roadmap · Framework C1–C20 | Historique / boîte à outils |
| Rapport QA PD-08A | Historique d’audit |
| Corpus `discovery/editorial/**` · `discovery/migration/**` | Documentation / historique / boîte |
| Historique PR #195–#202 | Preuve Git |
| Présent rapport PD-09 (`10-…-decision.md`) | Décision de gouvernance |

### Non promus

| Élément | Statut |
|---------|--------|
| Ajout `method/core` | **Non** |
| Template canonique / prompt catalog | **Non** |
| Checklist obligatoire projet | **Non** |
| Évolution baseline v2.4 / promotion v2.5 / v3.0 | **Non** |
| Processus projet imposé / cycle Discovery obligatoire | **Non** |

---

## Independent Notion process

| Point | Position PD-09 |
|-------|----------------|
| Nature | **Conceptuel uniquement** |
| Implémentation | **Non implémenté** |
| Emplacement permanent dans le repo | **Non choisi** |
| Déclenchement | Besoin explicite + GO Morris ; sinon **aucune action** |
| Relation cycles SFIA | Hors cycles projet applicatifs · hors cycle SFIA standard · hors baseline v2.4 comme obligation |

---

## Réserves R1–R6

| ID | Réserve | Impact |
|----|---------|--------|
| R1 | Notion runtime non vérifié par Cursor | Parité Git/Notion non prouvée techniquement |
| R2 | C9 / C16 NOT TESTABLE | Pas de test utilisateur / mobile |
| R3 | C18 PARTIAL | Badge Candidate Notion non prouvé |
| R4 | Pas de preuve de rentabilité hors contexte Morris | Généralisation non justifiée |
| R5 | Coût de maintenance si réutilisation | À arbitrer avant tout nouveau chantier |
| R6 | Roadmap § PD-09 encore « évaluer promotion method/core » | Document historique — **ne pas modifier** dans PD-09 ; la décision du présent fichier **prime** |

---

## Future options (toutes soumises à GO Morris)

| Option | Description | Action par défaut |
|--------|-------------|-------------------|
| **Aucune** | Clôturer ; conserver les actifs | **Recommandé / défaut** |
| A | Cadrer ultérieurement le processus indépendant Notion | **GO distinct requis** |
| B | Kit opératoire minimal (hors core) | **GO distinct requis** |
| C | QA ponctuelle (utilisateur / Notion) | **GO distinct requis** |
| D | Archiver / réorganiser pages Notion | **GO distinct · réversible** |

**Aucune suite n’est engagée par PD-09.** Options A/B/C/D need **GO**.

---

## Anti-stub / completeness

- Ce pack **doit** contenir le **contenu intégral verbatim** du fichier créé (section suivante).
- **Interdit** : synthèse seule sans corps du fichier.
- Livrable projet : **un seul** fichier Markdown de décision ; **aucune** modification `method/core` ; **aucune** action Notion.

---

## Contenu complet du fichier créé

Fichier : `method/sfia-fast-track/documentation/notion/discovery-product-design/10-sfia-discovery-pd-09-capitalization-decision.md`

```markdown
# 10 — PD-09 — Décision de capitalisation — SFIA Discovery / Notion

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — décision de capitalisation formalisée |
| **Propriétaire** | Morris |
| **Cycle** | PD-09 — Capitalisation / REX |
| **Type** | 15 — Capitalisation / REX |
| **Profil SFIA** | Capitalization |
| **Profondeur** | Standard |
| **Typologie v2.4** | CAPA / DOC |
| **Baseline opérationnelle** | SFIA v2.4 |
| **SFIA v2.5** | Candidate — non baseline |
| **SFIA v3.0** | Hors trajectoire |
| **Source de vérité** | Git (`mcleland147/sfia-workspace`) |
| **Branche** | `documentation/sfia-discovery-pd-09-capitalization` |
| **HEAD / base** | `b2ff105d6adcfe5d0db581b731b3b189eb16fb17` |
| **origin/main** | `b2ff105d6adcfe5d0db581b731b3b189eb16fb17` (merge PR #202 — PD-08) |
| **Horodatage** | 2026-07-16 12:20 Europe/Paris (CEST) |
| **Exécuteur** | Cursor (formalisation documentaire — aucune promotion méthode) |
| **Décision Morris** | **VALIDÉE** — non-promotion dans `method/core` · dispositif optionnel · processus indépendant Notion (conceptuel) |

---

## 1. Objet de PD-09

### 1.1 Pourquoi ce cycle

La trajectoire Discovery (PD-01 → PD-08) a conçu, préparé, implémenté, migré et audité une expérience Notion pédagogique. La roadmap prévoit PD-09 comme **décision de capitalisation** soumise à Morris — pas comme une promotion automatique.

Morris a tranché : le chantier **ne doit pas** devenir une composante obligatoire de la méthode SFIA. PD-09 formalise cette décision, clôture la trajectoire et positionne **conceptuellement** un processus indépendant d’évolution Notion — sans l’implémenter.

### 1.2 Relation avec PD-01 à PD-08

| Phase | Rôle | Statut |
|-------|------|--------|
| PD-01 | Product Design Candidate | Mergé (PR #195) |
| PD-02 à PD-06 | Editorial Git (A) + Notion (B) | Mergés / validés Morris |
| PD-07 | Migration legacy | PD-07A mergé (PR #201) · PD-07B validée Morris |
| PD-08 | QA + corrections éditoriales | Mergé (PR #202 · `b2ff105`) |
| **PD-09** | **Décision capitalisation** | **Présent** |

### 1.3 REX · capitalisation · promotion méthode

| Notion | Sens dans PD-09 |
|--------|-----------------|
| **REX** | Observations et frictions de la trajectoire |
| **Capitalisation** | Décider quoi conserver, où, et sous quel statut |
| **Promotion méthode** | Intégrer dans `method/core`, templates canoniques ou cycles obligatoires |

**PD-09 capitalise la décision et le statut des actifs. Elle ne promeut pas le dispositif dans la méthode.**

---

## 2. Synthèse de la trajectoire

### 2.1 Conception (PD-01)

Vision, architecture narrative (7 actes), storyline NovaBuild, personas, contrat éditorial, IA cible, roadmap, framework d’acceptation C1–C20. Statut **Candidate**. Aucune baseline.

### 2.2 Préparation Git (PD-nA)

Brouillons Markdown Hub + Actes I–VII + personas VI.1–VI.4. Ordre narratif : Acte II avant Acte III. Git = source éditoriale avant Notion.

### 2.3 Implémentation Notion (PD-nB)

Matérialisation L0 manuelle Hub → Actes → personas → portail VII. Validée Morris. Cursor n’a pas de preuve runtime Notion dans PD-08/PD-09.

### 2.4 Migration (PD-07)

Inventaire §00–11 · plan réversible · absence DELETE · annexes. PD-07A Git mergé · PD-07B Notion validée Morris.

### 2.5 QA et corrections (PD-08)

| Sous-cycle | Contenu | Preuve |
|------------|---------|--------|
| PD-08A | Audit narratif et métier · C1–C20 · 4 personas | `09-sfia-discovery-pd-08-qa-report.md` |
| PD-08B | Resync Hub · README · Actes (ANOM-01–06 hors personas) | Diff éditorial |
| PD-08B.1 | Fermeture ANOM-04 personas VI.1–VI.4 | Métadonnées alignées |
| Merge | PR #202 | `b2ff105d6adcfe5d0db581b731b3b189eb16fb17` |

**QA post-corrections (rappel) :** C12 PASS · C13 PASS · C18 PARTIAL · C9/C16 NOT TESTABLE.

---

## 3. Observations (PD-01 → PD-08)

| ID | Observation | Preuve Git | Apprentissage | Statut | Destination |
|----|-------------|------------|---------------|--------|-------------|
| O1 | Séparation A (Git) / B (Notion) a permis des gates clairs | Roadmap §2 · PRs #195–#202 | Pratique locale utile pour Notion | Conservé optionnel | Boîte à outils |
| O2 | Inventaire avant migration réduit le risque de perte | PD-07A inventaire + plan | Réversibilité > suppression | Conservé optionnel | Historique + boîte |
| O3 | QA narrative C1–C20 structure l’arbitrage Morris | Rapport PD-08A | Utile pour parcours pédagogiques | Conservé optionnel | Référence |
| O4 | Dérive métadonnées Hub/README après incréments | ANOM-01–06 · PD-08B | Resync périodique nécessaire si on réutilise le dispositif | Observation locale | Non promu |
| O5 | Notion runtime non vérifiable depuis Cursor | C16/C18 · PD-08A | Preuve Notion = Morris / ChatGPT | Réserve | Non promu |
| O6 | Dispositif volumineux (conception + 7 actes + migration + QA) | Trajectoire PR #195–#202 | Coût élevé pour un usage ponctuel | Observation | Justifie non-promotion |
| O7 | Spécificité Notion (couche pédagogique L0) ≠ méthode d’exécution SFIA | Contrat éditorial · Acte VII | Ne pas confondre Discovery et cycles projet | Décision Morris | Non promu en core |
| O8 | Fond narratif solide après corrections | PD-08A + B/B.1 | Expérience lisible — sans obligation méthode | Conservé | Documentation |

### 3.1 Ce qui a fonctionné

- Chaîne Git → Notion → QA → corrections → merge
- Distinction fiction NovaBuild / preuves réelles
- Opacité méthodologique (prompts, routing exhaustif masqués)
- Gates Morris explicites avant merge et Notion

### 3.2 Frictions

- Resynchronisation métadonnées tardive (PD-08B/B.1)
- Divergence déclarations « futur » vs corpus déjà livré
- Absence de preuve runtime Notion côté Cursor
- Coût documentaire élevé pour un parcours pédagogique

### 3.3 Spécificité contexte Notion

Discovery traite une **expérience lecteur** dans Notion, distincte des cycles SFIA d’exécution (delivery, QA applicative, capitalisation méthode). Son succès local **ne justifie pas** une intégration dans `method/core`.

---

## 4. Enseignements (pratiques locales — non obligations SFIA)

Les points suivants sont des **enseignements réutilisables localement** si Morris relance un chantier Notion similaire. Ils **ne deviennent pas** des règles SFIA v2.4.

1. **Git avant Notion** — valider les sources Markdown avant matérialisation.
2. **Réversibilité** — inventaire · redirections · pas de DELETE silencieux.
3. **QA narrative** — critères C1–C20 utiles pour un parcours pédagogique.
4. **Contrôle de parité** — Git / Notion peuvent diverger ; resync explicite.
5. **Gates Morris** — décision humaine avant merge, Notion et capitalisation.
6. **Opacité sélective** — valeur visible ; recettes internes masquées.

---

## 5. Décision Morris — VALIDÉE

> **Statut : DÉCISION VALIDÉE** (exprimée et confirmée pour PD-09 — non une recommandation Cursor).

1. Le chantier Discovery / Notion **n’est pas promu** dans `method/core`.
2. Il **ne devient pas** un cycle projet SFIA standard.
3. Il **ne devient pas** une étape obligatoire de la méthode.
4. Les actifs produits sont **conservés** comme documentation, historique, exemples et **boîte à outils optionnelle**.
5. Toute nouvelle évolution structurée de l’espace Notion doit passer par un **processus indépendant**.
6. Ce processus est déclenché **uniquement** sur besoin explicite et **GO Morris**.
7. Son exécution reste **repo-first** pour les sources éditoriales.
8. Toute action Notion reste **manuelle ou contrôlée**, **réversible** et soumise aux **gates** appropriés.
9. **Aucune généralisation automatique** n’est autorisée.
10. La conception détaillée ou l’industrialisation de ce processus indépendant nécessite un **cycle séparé** et un **nouveau GO Morris**.

### 5.1 Conséquences immédiates

| Action | Statut |
|--------|--------|
| Modification `method/core` | **Interdite** (ce cycle et sans GO futur distinct) |
| Nouveau template / prompt catalog | **Non créé** |
| Checklist obligatoire projet | **Non créée** |
| Promotion baseline / v2.5 | **Non** |
| Archivage ou suppression des actifs Discovery | **Non** — conservation |
| Processus indépendant Notion | **Positionné conceptuellement** — **non implémenté** |

---

## 6. Positionnement du processus indépendant (conceptuel)

> Ce chapitre **positionne** un futur processus. Il **n’est pas** conçu, localisé, ni opérationnel. Aucun emplacement définitif dans le repository n’est choisi ici.

### 6.1 Finalité

Permettre à Morris d’évoluer l’espace Notion SFIA (contenu pédagogique, structure, annexes) **hors** des cycles projet applicatifs et **hors** des cycles SFIA ordinaires (delivery, QA applicative, capitalisation méthode).

### 6.2 Déclencheurs (exemples — non exhaustifs)

- Besoin explicite de refonte ou d’extension Notion
- Divergence Git / Notion détectée et jugée structurante
- Nouvelle audience pédagogique à adresser
- GO Morris écrit pour un chantier Notion borné

**Absence de déclencheur = aucune action.**

### 6.3 Entrées / sorties (conceptuelles)

| Entrées possibles | Sorties possibles |
|-------------------|-------------------|
| Intention Morris | Sources Git mises à jour (si applicables) |
| Inventaire Notion / Git | Plan d’évolution borné |
| Actifs Discovery existants (optionnels) | Actions Notion manuelles contrôlées |
| GO Morris | Rapport / handoff / revue |

### 6.4 Acteurs

| Acteur | Rôle |
|--------|------|
| **Morris** | Décide · GO · gates |
| **ChatGPT** | Qualification · structuration · revue |
| **Cursor** | Exécution bornée dans Git si demandé |
| **Notion** | Couche d’expérience — pas source de vérité méthode |

### 6.5 Source de vérité

**Git** pour les sources éditoriales et la traçabilité. Notion = couche pédagogique / métier.

### 6.6 Gates et stop conditions (conceptuels)

| Gate | Objet |
|------|-------|
| GO démarrage | Besoin explicite + périmètre |
| GO Git | Avant commit / PR de sources |
| GO Notion | Avant toute action Notion |
| GO clôture | Avant tout effet méthode éventuel |

**Stop :** hors périmètre · besoin de modifier `method/core` · automatisation Notion · absence de GO · confusion avec un cycle projet SFIA.

### 6.7 Relation avec les cycles SFIA

| | Processus indépendant Notion | Cycle SFIA ordinaire |
|--|------------------------------|----------------------|
| Déclenchement | GO Morris hors projet | Routage cycle (Light/Standard/…) |
| Obligation | Optionnel | Selon méthode v2.4 |
| Promotion `method/core` | Interdite sans GO distinct | Possible via capitalisation méthode |
| Notion | Objet principal | Rarement l’objet |

---

## 7. Frontières

| Frontière | Règle |
|-----------|-------|
| Hors cycles projet applicatifs | Oui |
| Hors cycle SFIA standard | Oui |
| Hors baseline v2.4 | Oui — Discovery reste Candidate / optionnel |
| Exécution automatique | Interdite |
| Action Notion sans GO | Interdite |
| Impact méthode implicite | Interdit |
| Emplacement permanent du processus | **Non choisi** dans PD-09 |

---

## 8. Actifs conservés

| Actif | Chemin / preuve | Statut |
|-------|-----------------|--------|
| Product Design PD-01 | `discovery-product-design/01`–`08` | Référence optionnelle |
| Roadmap | `07-sfia-discovery-transformation-roadmap.md` | Historique + référence |
| Framework C1–C20 | `08-sfia-discovery-acceptance-framework.md` | Boîte à outils optionnelle |
| Rapport QA PD-08A | `09-sfia-discovery-pd-08-qa-report.md` | Historique d’audit |
| Corpus éditorial | `discovery/editorial/**` | Documentation / boîte à outils |
| Inventaire + plan migration | `discovery/migration/**` | Historique + boîte à outils |
| Historique PR | #195–#202 | Preuve Git |
| Présent rapport PD-09 | `10-sfia-discovery-pd-09-capitalization-decision.md` | Décision de gouvernance |

**Conservation ≠ obligation d’usage.**

---

## 9. Actifs non promus

| Élément | Statut |
|---------|--------|
| Ajout à `method/core` | **Non** |
| Template canonique nouveau | **Non** |
| Entrée prompt catalog | **Non** |
| Checklist obligatoire projet | **Non** |
| Évolution baseline v2.4 | **Non** |
| Processus projet imposé | **Non** |
| Cycle SFIA Discovery obligatoire | **Non** |
| Promotion SFIA v2.5 | **Non** |
| Ouverture SFIA v3.0 | **Non** |

---

## 10. Réserves

| ID | Réserve | Impact |
|----|---------|--------|
| R1 | Notion runtime non vérifié par Cursor | Parité Git/Notion non prouvée techniquement |
| R2 | C9 / C16 NOT TESTABLE | Pas de test utilisateur / mobile |
| R3 | C18 PARTIAL | Badge Candidate Notion non prouvé |
| R4 | Pas de preuve de rentabilité hors contexte Morris | Généralisation non justifiée |
| R5 | Coût de maintenance si réutilisation | À arbitrer avant tout nouveau chantier |
| R6 | Roadmap § PD-09 encore formulée « évaluer promotion method/core » | Document historique — **ne pas modifier** dans PD-09 ; la décision du présent fichier **prime** |

---

## 11. Suites possibles (toutes soumises à GO Morris)

| Option | Description | Action par défaut |
|--------|-------------|-------------------|
| **Aucune** | Clôturer ; conserver les actifs | **Recommandé** |
| A | Cadrer ultérieurement le processus indépendant Notion | GO distinct |
| B | Produire un kit opératoire minimal (hors core) | GO distinct |
| C | Relancer une QA ponctuelle (utilisateur / Notion) | GO distinct |
| D | Archiver ou réorganiser des pages Notion | GO distinct · réversible |

**Aucune suite n’est engagée par PD-09.**

---

## 12. Verdict

| Élément | Valeur |
|---------|--------|
| **Verdict documentaire** | **PD-09 CAPITALIZATION DECISION READY FOR MORRIS REVIEW** |
| **Trajectoire Discovery** | **Clôturée** sur le plan décisionnel de capitalisation |
| **Promotion `method/core`** | **Absente** — décision Morris validée |
| **Processus indépendant Notion** | **Positionné** — **non implémenté** |
| **Baseline** | SFIA v2.4 inchangée · v2.5 Candidate |

---

## 13. Gates Morris restants (exécution Git de ce livrable)

Avant `git add` · commit · push · PR · merge de la branche `documentation/sfia-discovery-pd-09-capitalization` — **GO Morris distinct requis**.

Avant conception détaillée du processus indépendant · choix d’emplacement permanent · action Notion — **GO Morris distinct requis**.

---

*Fin du rapport PD-09 — un seul fichier projet créé ; aucun changement `method/core` ; aucune action Notion.*
```

---

## Verdict

| Élément | Valeur |
|---------|--------|
| **Verdict** | **PD-09 CAPITALIZATION DECISION READY FOR MORRIS REVIEW** |
| **Trajectoire Discovery** | Clôturée sur le plan décisionnel de capitalisation |
| **Promotion `method/core`** | Absente — décision Morris validée |
| **Processus indépendant Notion** | Positionné conceptuellement — non implémenté — pas de chemin permanent choisi |
| **Branche projet** | **Non** commitée / pushée dans ce handoff |
| **Handoff** | Branche `sfia/review-handoff` uniquement |

---

*Fin du mono-cycle review pack PD-09 — anti-stub : contenu intégral du fichier `10-sfia-discovery-pd-09-capitalization-decision.md` inclus ci-dessus.*

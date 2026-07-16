# Inventaire du corpus legacy Notion — SFIA Discovery (PD-07A)

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | **Candidate** — inventaire Git pour migration future |
| **Cycle** | PD-07A (préparation Git — migration legacy) |
| **Propriétaire** | Morris |
| **Baseline** | SFIA v2.4 |
| **Source de vérité** | Git |
| **Branche** | `documentation/sfia-discovery-legacy-migration-plan` |
| **HEAD / base** | `9dd9dcfb4325b1b0fefaa39ba9c25899709b675c` |
| **Horodatage** | 2026-07-15 22:30 Europe/Paris (CEST) |
| **Exécution Notion** | **Non** — gate PD-07B future |
| **Verdict destructif** | **Aucun** — aucun delete, aucun archivage exécuté |

---

## 1. Méthode d'inventaire

| Étape | Action | Preuve |
|-------|--------|--------|
| 1 | `git ls-files` et recherche sous `method/sfia-fast-track/documentation/notion/editorial/` | drafts P0 `sfia-notion-00` … `08`, `11` |
| 2 | Recherche §09 / §10 / cas d'usage / Documents de référence | absence de brouillon §09 et §10 dans `editorial/` |
| 3 | Croisement avec Product Design §06 (mapping cible) | `discovery-product-design/06-sfia-discovery-target-information-architecture.md` |
| 4 | Croisement avec index P0 | `notion/editorial/README.md` |
| 5 | Qualification | observation Git · recommandation Candidate · **pas** de décision Notion |

**Périmètre de cet inventaire :** sources **Git** des pages legacy P0 (§00–11).

**Hors inventaire PD-07A :** état runtime Notion (IDs, URLs, pages parentes) — **Lot 0 PD-07B**.

**Convention de qualification :**

| Type | Signification |
|------|---------------|
| **Observation** | Fait vérifié dans Git |
| **Recommandation** | Proposition Candidate pour PD-07B |
| **Décision Morris** | Absente dans ce cycle — gates M7/M8 futures |

---

## 2. Lexique des recommandations futures

| Code | Signification | Delete autorisé ? |
|------|---------------|-------------------|
| **KEEP_PRIMARY** | Conserver dans la navigation primaire (temporaire) | Non |
| **KEEP_ANNEX** | Maintenir comme annexe pédagogique | Non |
| **REDIRECT_TO_DISCOVERY** | Rediriger vers Hub / Actes Discovery | Non |
| **REPLACE_IN_PRIMARY_NAVIGATION** | Remplacer dans le parcours principal par la cible Discovery | Non |
| **MERGED_CONTENT_PRESERVED** | Contenu déjà absorbé dans Actes I–VII — préserver l'accès | Non |
| **ARCHIVE_CANDIDATE_AFTER_VALIDATION** | Candidat à archivage **après** GO Morris PD-07B Lot 5 | Non (archivage réversible seulement) |
| **OUTSIDE_DISCOVERY_SCOPE** | Hors parcours Discovery principal | Non |
| **NEEDS_MORRIS_DECISION** | Ambiguïté ou absence — décision page par page | Non |

**Aucun statut DELETE n'est autorisé.**

---

## 3. Corpus Git legacy — synthèse

| § | Titre | Source Git trouvée | Confiance |
|---|-------|-------------------|-----------|
| §00 | Accueil | Oui — draft éditorial | Observation |
| §01 | Comprendre SFIA | Oui — draft éditorial | Observation |
| §02 | Proposition de valeur | Oui — draft éditorial | Observation |
| §03 | Comment fonctionne un cycle | Oui — draft éditorial | Observation |
| §04 | Cycles, profils et gates | Oui — draft éditorial | Observation |
| §05 | Routage des demandes | Oui — draft éditorial | Observation |
| §06 | Templates, prompts et livrables | Oui — draft éditorial | Observation |
| §07 | Gouvernance et garde-fous | Oui — draft éditorial | Observation |
| §08 | Mettre SFIA en place | Oui — draft éditorial | Observation |
| §09 | Cas d'usage | **Non** — volontairement P1 | Observation + documentation |
| §10 | Documents de référence | **Non** comme draft §10 — prévu comme vue Base | Observation + documentation |
| §11 | Glossaire | Oui — draft éditorial | Observation |

**Index companion (non page §) :**

| Fichier | Rôle |
|---------|------|
| `method/sfia-fast-track/documentation/notion/editorial/README.md` | Inventaire pack P0 Cycle 2 |
| `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-p0-editorial-review-checklist.md` | Checklist QA pack P0 |

---

## 4. Fiches §00–11

### §00 — Accueil

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §00 |
| **Titre** | Accueil |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-00-home-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié (métadonnée du fichier) |
| **Contenu principal** | Orientation 30 s · Git ↔ Notion · trois parcours temps · pointeurs vers §01–08 / §11 |
| **Rôle actuel** | Entrée primaire historique P0 |
| **Niveau** | L0–L1 |
| **Confidentialité** | Public / pédagogique |
| **Liens / dépendances** | Liens vers tous les drafts P0 §01–08 · §11 |
| **Destination Discovery** | Hub Discovery |
| **Risque doublon** | Élevé avec Hub (parcours, Git prime, orientation) |
| **Risque perte** | Faible si Hub couvre l'orientation — vérifier liens entrants Notion en Lot 0 |
| **Recommandation** | **REPLACE_IN_PRIMARY_NAVIGATION** + **REDIRECT_TO_DISCOVERY** |
| **Preuve / absence** | Observation draft · cible Product Design §06 |

### §01 — Comprendre SFIA

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §01 |
| **Titre** | Comprendre SFIA |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-01-understand-sfia-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Définition SFIA · baseline v2.4 · Candidate v2.5 · ChatGPT/Cursor · gouvernance |
| **Rôle actuel** | Page « comprendre » P0 |
| **Niveau** | L1–L2 |
| **Confidentialité** | Pédagogique · mention prompt catalog (orientation, non dump) |
| **Liens** | Vers §02–§04 · glossaire |
| **Destination Discovery** | Acte II + extrait Acte V |
| **Risque doublon** | Élevé avec Actes I–II |
| **Risque perte** | Faible — content absorbed · vérifier formulations uniques en Lot 4 |
| **Recommandation** | **MERGED_CONTENT_PRESERVED** + **REDIRECT_TO_DISCOVERY** |
| **Preuve** | Product Design §06 · Actes I–II mergés |

### §02 — Proposition de valeur

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §02 |
| **Titre** | Proposition de valeur |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-02-value-proposition-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Bénéfices · différenciation · anti-patterns · teaser cas d'usage P1 |
| **Rôle actuel** | Page valeur P0 |
| **Niveau** | L1 |
| **Confidentialité** | Public / pédagogique |
| **Liens** | Accueil · §01 · teaser §09 P1 |
| **Destination Discovery** | Acte I + Acte VI |
| **Risque doublon** | Élevé |
| **Risque perte** | Moyen sur formulations marketing spécifiques — Lot 4 contrôle |
| **Recommandation** | **MERGED_CONTENT_PRESERVED** + **REDIRECT_TO_DISCOVERY** |
| **Preuve** | Product Design §06 · Actes I / VI |

### §03 — Comment fonctionne un cycle

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §03 |
| **Titre** | Comment fonctionne un cycle |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-03-how-a-cycle-works-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Schéma cycle · ChatGPT ↔ Cursor · livrable unique · Candidate v2.5 note |
| **Rôle actuel** | Page cycle pédagogique P0 |
| **Niveau** | L2 |
| **Confidentialité** | Pédagogique |
| **Liens** | §04 · §05 · Acte III futur Discovery |
| **Destination Discovery** | Acte III (schéma) + Acte VII (approfondissement) |
| **Risque doublon** | Moyen–élevé avec Acte III |
| **Risque perte** | Moyen sur schéma unique — reporter si non présent dans Acte III |
| **Recommandation** | **MERGED_CONTENT_PRESERVED** + **KEEP_ANNEX** temporaire si schéma non dupliqué |
| **Preuve** | Product Design §06 · Acte III NovaBuild · Acte VII porte 1–2 |

### §04 — Cycles, profils et gates

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §04 |
| **Titre** | Cycles, profils et gates |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-04-cycles-profiles-gates-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | 15 cycles Candidate v2.5 · 4 profils · gates Morris · Critical jamais implicite |
| **Rôle actuel** | Référentiel cycles pédagogique P0 |
| **Niveau** | L2 |
| **Confidentialité** | **Sensibilité** : mention chemin protégé (Light) · catalogue 15 cycles Candidate — ne pas sur-exposer en Discovery |
| **Liens** | §05 · routing guide · Acte VII |
| **Destination Discovery** | Acte VII — porte Cycles et profils |
| **Risque doublon** | Moyen avec portail Acte VII |
| **Risque perte** | Faible si annexe ou vue Cycles conservée |
| **Recommandation** | **KEEP_ANNEX** (version simplifiée Discovery) + éventuel **ARCHIVE_CANDIDATE_AFTER_VALIDATION** du détail redondant |
| **Preuve** | Acte VII Porte 1 · Product Design §06 |

### §05 — Routage des demandes

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §05 |
| **Titre** | Routage des demandes |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-05-request-routing-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Orientation routing · categories de cycles · renvoi Git |
| **Rôle actuel** | Guide routage pédagogue P0 |
| **Niveau** | L2 |
| **Confidentialité** | **Sensibilité** : orientation seulement — matrice exhaustive restante dans Git |
| **Liens** | routing guide · §04 · §06 |
| **Destination Discovery** | Acte VII — porte Routage |
| **Risque doublon** | Moyen |
| **Risque perte** | Faible si orientation Acte VII complète |
| **Recommandation** | **KEEP_ANNEX** + **REDIRECT_TO_DISCOVERY** |
| **Preuve** | Acte VII Porte 2 |

### §06 — Templates, prompts et livrables

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §06 |
| **Titre** | Templates, prompts et livrables |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-06-templates-prompts-deliverables-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Rôle templates · index prompts · types de livrables |
| **Rôle actuel** | Pont vers prompts/templates |
| **Niveau** | L3 |
| **Confidentialité** | **Élevée** — références prompt catalog · **ne jamais publier** le catalog intégral dans Discovery |
| **Liens** | `prompts/prompt-catalog.md` · `prompts/templates/` · Référentiel |
| **Destination Discovery** | Acte VII — porte Templates (index uniquement) |
| **Risque doublon** | Faible côté Discovery si index seul |
| **Risque perte** | Faible sur index · **risque exposition** si page legacy trop détaillée en Notion |
| **Recommandation** | **KEEP_ANNEX** (index) · contrôle confidentialité Lot 2–4 · **NEEDS_MORRIS_DECISION** si contenu Notion runtime expose plus que l'index |
| **Preuve** | Acte VII Porte 3 · frontière PD-06A R1 |

### §07 — Gouvernance et garde-fous

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §07 |
| **Titre** | Gouvernance et garde-fous |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-07-governance-guardrails-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Git prime · décideur humain · gates · publication governance |
| **Rôle actuel** | Page gouvernance P0 |
| **Niveau** | L2–L3 |
| **Confidentialité** | Pédagogique · ne pas lister protected paths exhaustifs |
| **Liens** | rules-and-guardrails · publication governance · Acte V |
| **Destination Discovery** | Acte V + couche Meta + Acte VII porte Gouvernance |
| **Risque doublon** | Élevé avec Acte V |
| **Risque perte** | Faible |
| **Recommandation** | **MERGED_CONTENT_PRESERVED** + **REDIRECT_TO_DISCOVERY** |
| **Preuve** | Acte V · Product Design §06 |

### §08 — Mettre SFIA en place

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §08 |
| **Titre** | Mettre SFIA en place |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-08-setup-sfia-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | Prérequis · repo · outils · commencer petit |
| **Rôle actuel** | Guide setup P0 |
| **Niveau** | L3 |
| **Confidentialité** | Pédagogique / opérationnel léger |
| **Liens** | blueprint repo · Fast Track README |
| **Destination Discovery** | Acte VII — porte Mise en place |
| **Risque doublon** | Moyen |
| **Risque perte** | Moyen si checklists setup absentes d'Acte VII — préserver en annexe |
| **Recommandation** | **KEEP_ANNEX** |
| **Preuve** | Acte VII Porte 5 · Product Design §06 |

### §09 — Cas d'usage

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §09 |
| **Titre** | Cas d'usage |
| **Chemin Git exact** | **Absent** — aucun `sfia-notion-09*` dans `notion/editorial/` |
| **Statut Git** | Non rédigé en P0 Cycle 2 — **P1 futur** documenté |
| **Contenu principal** | Non applicable |
| **Rôle actuel** | Placeholder roadmap / backlog — hors pack publié |
| **Niveau** | — |
| **Confidentialité** | — |
| **Liens documentés** | Mentions dans Accueil · Proposition de valeur · MVP backlog · UX roadmap |
| **Destination Discovery** | Hors parcours principal — création future P1 |
| **Risque doublon** | Nul (contenu absent) |
| **Risque perte** | Nul sur contenu §09 Git — **ne pas inventer** de page |
| **Recommandation** | **OUTSIDE_DISCOVERY_SCOPE** |
| **Preuve absence** | `editorial/README.md` « §09 — P1 » · checklist A5 « §09 absent » · Product Design §06 |

### §10 — Documents de référence

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §10 |
| **Titre** | Documents de référence |
| **Chemin Git exact** | **Absent** comme draft `sfia-notion-10*` dans `notion/editorial/` |
| **Statut Git** | Prévu comme **vue Base Référentiel** (cycle 3 / Notion) — pas un brouillon Markdown P0 Cycle 2 |
| **Contenu principal** | Non matérialisé comme page éditoriale P0 |
| **Rôle actuel** | Cible architecture = base / index |
| **Niveau** | L4 (prévu) |
| **Confidentialité** | Dépend des documents indexés |
| **Liens documentés** | `editorial/README.md` : « §10 — vue Base Référentiel (cycle 3) » · Product Design §06 |
| **Destination Discovery** | Acte VII — porte Documents de référence (+ bases Référentiel / Cycles) |
| **Risque doublon** | Faible |
| **Risque perte** | **Moyen** si une base Notion existe déjà sans draft Git — **Lot 0 PD-07B** inventaire Notion obligatoire |
| **Recommandation** | **KEEP_ANNEX** (si vue/base existe) ou **NEEDS_MORRIS_DECISION** (si page créée hors inventaire Git) |
| **Preuve absence draft** | Aucun fichier `*10*` dans `editorial/` · README P0 |

### §11 — Glossaire

| Champ | Contenu |
|-------|---------|
| **Identifiant** | §11 |
| **Titre** | Glossaire |
| **Chemin Git exact** | `method/sfia-fast-track/documentation/notion/editorial/sfia-notion-11-glossary-editorial-draft.md` |
| **Statut Git** | Draft éditorial — non publié |
| **Contenu principal** | ≥20 termes · Candidate / baseline · liens croisés P0 |
| **Rôle actuel** | Annexe vocabulaire |
| **Niveau** | L1–L4 |
| **Confidentialité** | Public / pédagogique |
| **Liens** | Vers §01–§07 |
| **Destination Discovery** | Acte VII — porte Glossaire |
| **Risque doublon** | Faible–moyen (termes aussi dans Actes) |
| **Risque perte** | **Élevé** si archivage sans conservation — **contenu unique dense** |
| **Recommandation** | **KEEP_ANNEX** (prioritaire) |
| **Preuve** | Product Design §06 · Acte VII Porte 7 |

---

## 5. Contenus uniques à préserver

| Contenu | Source | Destination de préservation |
|---------|--------|----------------------------|
| Glossaire ≥20 termes avec liens | §11 | KEEP_ANNEX Acte VII · ne pas archiver sans copie Discovery |
| Tableau 15 cycles Candidate + profils détaillés | §04 | Annexe Acte VII ou Base Cycles — **Candidate badge** |
| Checklists / étapes setup concrètes | §08 | KEEP_ANNEX si absentes d'Acte VII |
| Index rôles templates vs prompts | §06 | Index Acte VII seulement — **pas** le catalog |
| Schéma cycle ChatGPT↔Cursor | §03 | Vérifier presence Acte III ; sinon reporter |
| Formulations anti-patterns valeur | §02 | Lot 4 — comparer Acte I |

---

## 6. Contenus déjà absorbés dans Actes I–VII

| Legacy | Absorbé dans (Git Discovery mergé) | Nature |
|--------|-----------------------------------|--------|
| §00 orientation | Hub Discovery | MERGED_CONTENT_PRESERVED |
| §01 comprendre | Acte I · Acte II | MERGED_CONTENT_PRESERVED |
| §02 valeur | Acte I · Acte VI | MERGED_CONTENT_PRESERVED |
| §03 cycle | Acte III · Acte VII | MERGED_CONTENT_PRESERVED (partiel) |
| §07 gouvernance | Acte V · Acte VII gouvernance | MERGED_CONTENT_PRESERVED |
| §04–§06 · §08 · §11 orientation | Acte VII sept portes | Orientation portail — **pas copie intégrale** |

Sources Discovery : `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-*.md` (PR #196–#200).

---

## 7. Contenus encore utiles comme annexes

| § | Raison |
|---|--------|
| §04 | Référentiel cycles/profils plus détaillé que le portail Acte VII |
| §05 | Guide routage pédagogique |
| §06 | Index templates (version filtrée) |
| §08 | Setup opérationnel |
| §10 | Base / documents de référence (si existe en Notion) |
| §11 | Glossaire complet |

---

## 8. Candidats à archivage **après validation** (Lot 5 seulement)

| § | Condition préalable | Statut proposé |
|---|---------------------|----------------|
| §00 | Hub Discovery stable · redirections OK · liens entrants traités | ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §01 | Contenu unique reporté ou accepté comme obsolète | ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §02 | Idem | ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §03 | Schéma unique préservé ailleurs | ARCHIVE_CANDIDATE_AFTER_VALIDATION |
| §07 | Gouvernance Acte V / Meta suffisante | ARCHIVE_CANDIDATE_AFTER_VALIDATION |

**Aucun archivage dans PD-07A.** Aucune suppression.

---

## 9. Absences, ambiguïtés et réserves

| ID | Réserve | Impact | Action |
|----|---------|--------|--------|
| R-LEG-01 | §09 absent en Git (P1) | Hors Discovery | OUTSIDE_DISCOVERY_SCOPE |
| R-LEG-02 | §10 sans draft Markdown P0 | Base Notion possible non inventoriée ici | Lot 0 PD-07B |
| R-LEG-03 | État Notion runtime inconnu (IDs, publication réelle) | Risque liens cassés / pages orphelines | Lot 0 obligatoire |
| R-LEG-04 | §06 sensibilité prompt catalog | Exposition méthode | Contrôle confidentialité Lot 2–4 |
| R-LEG-05 | §04 « 15 cycles » Candidate | Confusion baseline | Badge Candidate · baseline v2.4 |
| R-LEG-06 | Drafts Git marqués « non publié » vs espace Notion réel | Divergence possible | Lot 0 inventaire Notion |
| R-LEG-07 | Bases Référentiel et Cycles | Embarquées Acte VII — IDs inconnus | Lot 2 PD-07B |

---

## 10. Décisions non prises (Morris)

- Archivage page par page (§00–03 · §07) ;
- Conservation longue durée des annexes §04–§06 · §08 · §10–§11 ;
- Traitement d'une éventuelle page §09 ou §10 créée hors Git ;
- Niveau d'exposition Notion pour §06.

**Verdict inventaire :** inventaire §00–11 complet et sourcé — **aucune suppression proposée**.

# 09 — Rapport QA PD-08A — SFIA Discovery Experience

| Métadonnée | Valeur |
|------------|--------|
| **Cycle** | PD-08A — QA narrative et métier |
| **Type** | 9 — QA / validation |
| **Profil SFIA** | Standard |
| **Typologie v2.4** | DOC |
| **Propriétaire** | Morris |
| **Baseline opérationnelle** | SFIA v2.4 |
| **Exécuteur** | Cursor (audit seul — aucune correction corpus) |
| **Horodatage** | 2026-07-16 09:30 Europe/Paris (CEST) |
| **Branche** | `documentation/sfia-discovery-pd-08-qa` |
| **HEAD** | `1125972bb1a78379cdc485250bf34625141bdde6` |
| **origin/main** | `1125972bb1a78379cdc485250bf34625141bdde6` |
| **merge-base** | `1125972bb1a78379cdc485250bf34625141bdde6` |
| **Contexte Morris déclaré** | PD-07B validé (migration Notion, archivage legacy, restructuration annexes) — **non vérifié runtime par Cursor** |

---

## 1. Métadonnées

### 1.1 Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| Workspace | `/Users/morris/Projects/sfia-workspace` (sfia-workspace) |
| Branche active | `documentation/sfia-discovery-pd-08-qa` |
| HEAD | `1125972bb1a78379cdc485250bf34625141bdde6` |
| origin/main | `1125972bb1a78379cdc485250bf34625141bdde6` |
| Ancestre PD-07A merge | `1125972` — **OK** |
| Fichiers staged | Aucun (hors création rapport PD-08) |
| Working tree | Propre sur fichiers trackés ; untracked reconnus : `.sfia/`, `.tmp-sfia-review/`, `sfia-review-handoff/` |

### 1.2 Sources consultées

**Méthode et gouvernance :**

| Fichier | Rôle |
|---------|------|
| `prompts/templates/sfia-cycle-execution-template.md` | Template cycle (référence — non modifié) |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Routage cycles (principes — non exposés lecteur) |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md` | Niveaux automatisation L1–L5 |
| `method/sfia-fast-track/documentation/notion/discovery-product-design/README.md` | Index Product Design |
| `method/sfia-fast-track/documentation/notion/discovery-product-design/05-sfia-discovery-editorial-contract.md` | Contrat éditorial |
| `method/sfia-fast-track/documentation/notion/discovery-product-design/07-sfia-discovery-transformation-roadmap.md` | Roadmap (lecture — non modifiée) |
| `method/sfia-fast-track/documentation/notion/discovery-product-design/08-sfia-discovery-acceptance-framework.md` | Critères C1–C20 |

**Corpus éditorial Discovery (18 fichiers Markdown) :**

| # | Chemin Git |
|---|------------|
| 1 | `method/sfia-fast-track/documentation/notion/discovery/editorial/README.md` |
| 2 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-hub-editorial-draft.md` |
| 3 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-01-why-sfia-exists-editorial-draft.md` |
| 4 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-02-new-way-to-run-a-project-editorial-draft.md` |
| 5 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-follow-novabuild-editorial-draft.md` |
| 6 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-1-intention-and-framing-editorial-draft.md` |
| 7 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-2-design-and-ux-editorial-draft.md` |
| 8 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-3-delivery-and-qa-editorial-draft.md` |
| 9 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-03-4-release-and-run-editorial-draft.md` |
| 10 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-04-what-sfia-produces-editorial-draft.md` |
| 11 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-05-why-it-works-editorial-draft.md` |
| 12 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-project-yourself-editorial-draft.md` |
| 13 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-1-sme-leader-editorial-draft.md` |
| 14 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-2-project-manager-po-editorial-draft.md` |
| 15 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-3-technical-team-editorial-draft.md` |
| 16 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-06-4-esn-partner-editorial-draft.md` |
| 17 | `method/sfia-fast-track/documentation/notion/discovery/editorial/sfia-discovery-act-07-explore-the-method-editorial-draft.md` |
| 18 | `method/sfia-fast-track/documentation/notion/discovery/migration/sfia-discovery-legacy-content-inventory.md` |
| 19 | `method/sfia-fast-track/documentation/notion/discovery/migration/sfia-discovery-legacy-migration-plan.md` |

**Notion runtime :** aucun accès MCP Notion fiable — QA Notion classée **NOT TESTABLE** sauf contexte Morris déclaré (PD-07B).

---

## 2. Executive summary

### 2.1 Résultat général

Le corpus Discovery Git (Hub + Actes I–VII + personas VI.1–VI.4) constitue un **parcours narratif cohérent, pédagogique et fidèle à SFIA v2.4**. La promesse métier est compréhensible, NovaBuild est explicitement fictionnel, les garanties et limites sont articulées, la confidentialité méthodologique est respectée dans le corps lecteur, et les quatre personas sont différenciés.

**Réserve principale :** dérive de **métadonnées et navigation Hub** non resynchronisées après PD-03A à PD-06A (sections « futur », arborescence §14, CTAs obsolètes). Le contenu existe mais l'orientation d'entrée peut induire en erreur un lecteur Git ou Notion non averti.

### 2.2 Points forts

- Arc narratif I → II → III (NovaBuild) → IV → V → VI → VII **logique et progressif**
- Distinction **projet classique / IA libre / SFIA** (Acte II) claire et mémorable
- **NovaBuild** systématiquement qualifié composite / fiction / non témoignage
- **Acte V** : cinq mécanismes, tableaux garanties / non-garanties exemplaires
- **Personas VI.x** : objections, limites, parcours et absence de CTA commercial ESN
- **Acte VII** : sept portes, frontière public / protégé, pas de L5 globale
- **Aucun chiffre de performance non sourcé** détecté dans le corpus
- Baseline **v2.4** et Candidate **v2.5** correctement positionnées (Acte VII)

### 2.3 Principaux risques

| Risque | Sévérité |
|--------|----------|
| Hub §8 et §14 annoncent Actes II–VII « futur » alors qu'ils sont mergés | Majeure |
| README editorial : gates PD-07A « en attente » · PD-07B « futur » | Majeure |
| Métadonnées « Implémentation Notion : gate PD-0XB futur » sur tous les actes | Mineure |
| QA Notion / mobile / accessibilité runtime non prouvée | Réserve NOT TESTABLE |
| Durées de lecture cibles non mesurées empiriquement | Mineure |

### 2.4 Limites de l'audit

- **Lecture simulée experte** — pas de test utilisateur réel (C1, C3, C9)
- **Pas de preuve Notion runtime** — parité Git/Notion non vérifiée techniquement
- **Pas de test mobile** ni audit accessibilité visuelle Notion
- **Annexes SFIA** hors corpus editorial — non relues en détail (hors migration plan)
- Aucune modification du corpus — constats documentés uniquement

### 2.5 Verdict proposé

**READY WITH EDITORIAL RESERVES**

Le fond narratif et métier est **suffisant pour arbitrage Morris** et compatible avec un PD-08B ciblé (synchronisation métadonnées Hub/README, validation Notion). Aucune anomalie **Bloquante** sur le fond éditorial. Le verdict **ne valide pas** la baseline ni n'autorise PD-09.

---

## 3. Périmètre et méthode

### 3.1 Corpus

19 fichiers Markdown sous `discovery/editorial/` et `discovery/migration/` — inventaire complet §1.2.

### 3.2 Tests réalisés (Git)

- Lecture intégrale ou par sections de tous les actes et personas
- Matrice C1–C20 avec traçabilité fichier
- Grep corpus : promesses absolues, chiffres non sourcés, fuites méthodologiques
- Vérification liens Markdown relatifs inter-actes
- Contrôles Markdown : hiérarchie titres, tableaux, listes, libellés

### 3.3 Tests simulés

- Quatre lectures persona (dirigeant PME, PO, technique, ESN)
- Reformulation SFIA post-parcours 45 min (expert)
- Walkthrough navigation parcours 3 / 10 / 20 / 45 min (Git)

### 3.4 Tests non réalisables

| Domaine | Raison |
|---------|--------|
| Notion layout, boutons, toggles | Pas d'accès runtime |
| Mobile lisible (C16) | Pas de rendu Notion |
| Badge Candidate Notion (C18) | Pas de preuve visuelle |
| Score envie poursuivre (C9) | Pas d'entretien utilisateur |
| Test confidentialité Notion (C10 partiel) | Pas de crawl Notion |

### 3.5 Conventions statut

| Statut | Usage |
|--------|-------|
| **PASS** | Critère satisfait sur preuves Git |
| **PARTIAL** | Satisfait avec réserves ou lecture simulée seulement |
| **FAIL** | Non conforme au framework |
| **NOT TESTABLE** | Preuve requise absente (Notion, utilisateur, mobile) |

---

## 4. Matrice C1–C20

| ID | Exigence | Sources Git | Observation | Preuve / extrait | Statut | Sévérité | Réserve | Recommandation | Décision Morris |
|----|----------|-------------|-------------|------------------|--------|----------|---------|----------------|-----------------|
| **C1** | Compréhension immédiate valeur | Hub §2, §4 ; Acte I §1 | Promesse centrale lisible en < 3 min ; hero Option A orientée contrôle humain | « SFIA aide les organisations à conduire des projets numériques avec clarté, traçabilité et assistance IA » | **PARTIAL** | Mineure | Pas de test reformulation 2 min réel | Valider hero Option A en revue Morris ; PD-08B sync Hub | Non |
| **C2** | Distinction classique / IA libre / SFIA | Acte II §2–3 | Tableau tripartite complet, forces et fragilités équilibrées | Table 8 dimensions Acte II | **PASS** | — | — | Conserver tel quel | Non |
| **C3** | Raconter SFIA avec ses mots | Parcours I→V ; Hub §6.4 | Enchaînement permet reformulation ; Hub §6.4 cible ce résultat | « Je peux raconter SFIA avec mes propres mots » (Hub 6.4) | **PARTIAL** | Information | Lecture simulée experte uniquement | Test utilisateur optionnel post-PD-08B | Non |
| **C4** | Rôles Morris / ChatGPT / Cursor / Git / Notion | Hub §4 ; Acte II §4 ; Acte VII §4 | Cinq acteurs visibles, limites explicites | Table Acte II §4 | **PASS** | — | — | — | Non |
| **C5** | Projet bout en bout | Acte III + III.1–III.4 | 8+ phases : intention → RUN → capitalisation | Schéma parcours Acte III §5 | **PASS** | — | — | — | Non |
| **C6** | Livrables concrets ≥ 5 types | Acte IV §4 | Cinq familles : Cadrer, Concevoir, Livrer, Vérifier, Exploiter/Capitaliser | Galerie Acte IV | **PASS** | — | — | — | Non |
| **C7** | Garanties et limites | Acte V §4 | ≥ 2 garanties + ≥ 2 non-garanties tabulées | Tableaux §4 Acte V | **PASS** | — | — | — | Non |
| **C8** | Projection persona | Acte VI + VI.1–VI.4 | Quatre fiches complètes, tableau comparatif | Acte VI §3–4 | **PASS** | — | — | — | Non |
| **C9** | Envie poursuivre ≥ 4/5 | — | Non mesuré | — | **NOT TESTABLE** | Information | Pas d'entretien | Test utilisateur si Morris le souhaite | Non |
| **C10** | Absence fuite méthodologique | Acte VII §7 ; VI.3 §13 ; Acte V §10 | Prompt catalog, protected paths, routage exhaustif **masqués** ; références nommées en section gouvernance seulement | « Non publié lecteur : prompt catalog intégral » (Acte VII) | **PARTIAL** | Mineure | Git OK ; Notion non crawlé | Test confidentialité Notion en PD-08B | Oui (PD-08B) |
| **C11** | Absence promesse excessive | Hub §5, §11 ; Acte V ; contrat §5 | Formulations conditionnelles ; pas de succès garanti | « SFIA améliore le cadre — le contexte et l'engagement comptent » | **PASS** | — | — | — | Non |
| **C12** | Cohérence Git | Métadonnées tous actes ; Hub §8 | **Dérive** : Hub annonce Actes II–VII « futur » ; HEAD métadonnées obsolètes sur branches cycles | Hub §8 tableau statuts ; §14 arborescence | **PARTIAL** | Majeure | Contenu présent mais métadonnées désalignées | PD-08B : resync Hub §8, §14, §13, README | Oui |
| **C13** | Navigation sans impasse | Liens relatifs ; Hub parcours | Liens inter-actes fonctionnels en Markdown ; **Hub orientation obsolète** | `sfia-discovery-act-02-...` depuis Acte I | **PARTIAL** | Majeure | Lecteur suivant README OK ; lecteur Hub seul risque confusion | Corriger Hub navigation cible + CTAs | Oui |
| **C14** | Temps lecture maîtrisé | Durées cibles chaque acte | Budgets documentés (3 min → 45 min) ; non chronométrés | Hub §6 ; métadonnées actes | **PARTIAL** | Mineure | Cibles cohérentes, non mesurées | Mesure optionnelle PD-08B | Non |
| **C15** | Métier > méthode | Actes I–VI vs VII | ~80 % métier sur I–VI ; VII = portail L2–L4 | Contrat §3 ; Acte VII structure | **PASS** | — | — | — | Non |
| **C16** | Mobile lisible | Hub §15 notes Notion | Notes implémentation présentes ; **pas de test** | « Hero ≤ 4 lignes · parcours en accordéon » | **NOT TESTABLE** | Information | — | Test Morris/ChatGPT sur Notion | Oui (PD-08B) |
| **C17** | Accessibilité | Corpus Markdown | Hiérarchie H1–H3 cohérente ; sens porté par texte/tableaux ; pas de « voir en rouge » | Structure titres tous fichiers | **PARTIAL** | Mineure | Markdown OK ; Notion non testé | Revue accessibilité Notion PD-08B | Non |
| **C18** | Candidate visible | Métadonnées ; Acte VII porte 1 | **Candidate** en en-tête ; v2.5 non baseline | « Baseline opérationnelle : SFIA v2.4 » (Acte VII) | **PARTIAL** | Mineure | Git oui ; badge Notion non prouvé | Vérifier badge Notion | Oui (PD-08B) |
| **C19** | Fiction NovaBuild / preuves réelles | Acte III §2 ; Hub §10 | Distinction explicite et répétée | « NovaBuild est une PME du BTP **fictive** » | **PASS** | — | — | — | Non |
| **C20** | Absence statistiques non sourcées | Grep corpus ; Acte I | Aucun % ROI / délai chiffré inventé ; mentions = négations | VI.1 : « ROI chiffré — absents — non sourcés » | **PASS** | — | — | — | Non |

**Synthèse C1–C20 :** PASS 10 · PARTIAL 7 · FAIL 0 · NOT TESTABLE 3

---

## 5. QA narrative

### 5.1 Hub

| Dimension | Attendu | Observé | Verdict local |
|-----------|---------|---------|---------------|
| Rôle narratif | Orientation · promesse · portes persona | Rempli — hero, 5 parcours temps, 5 portes | **PASS** |
| Message principal | Contrôle humain + traçabilité | Option A retenue — clair pour PME | **PASS** |
| Lacune | Navigation à jour | §8, §13, §14 **obsolètes** (actes « futur ») | **PARTIAL** |

**Extrait problématique (Hub §8) :**

```text
| **II** | En quoi SFIA diffère-t-elle ? | **PD-03A** — brouillon en revue |
| **III** | À quoi ressemble un projet ? | Futur **PD-04A** (NovaBuild) |
```

→ Contredit l'inventaire README (tous actes mergés).

### 5.2 Matrice par Acte

| Acte | Rôle attendu | Rôle observé | Message principal | Dépendance précédent | Transition suivant | Répétitions | Lacunes | Verdict |
|------|--------------|--------------|-------------------|----------------------|-------------------|-------------|---------|---------|
| **I** | Pourquoi SFIA | Douleur PME · chaîne projet | Intention simple → complexité | Hub | → II | NovaBuild amorcé (chantier) | — | **PASS** |
| **II** | Modèle SFIA | Contraste tripartite · 5 acteurs | Organisation sans usine à gaz | I (problème) | → III | Rôles repris en V | — | **PASS** |
| **III** | Fil rouge NovaBuild | 4 séquences · fiction claire | Projet de bout en bout | II (cadre) | → IV | NovaBuild = fiction répété | — | **PASS** |
| **IV** | Livrables | 5 familles galerie | Tangible · catégories | III (mouvement) | → V | Lien III→IV explicite | — | **PASS** |
| **V** | Garanties | 5 mécanismes | Cadre crédible · limites | IV (artefacts) | → VI | Garanties ≠ succès | Transition « futur PD-06A » obsolète | **PARTIAL** |
| **VI** | Projection | Hub + 4 personas | « Pour mon rôle » | V (crédibilité) | → VII | Limites commerciales | — | **PASS** |
| **VII** | Portail méthode | 7 portes · L2–L4 | Git pour le détail | VI (besoin) | Hub / Git | v2.5 Candidate | PD-07A « futur » en §10 | **PARTIAL** |

### 5.3 Transitions

- **I → II → III** : articulation **obligatoire respectée** (README §2, Acte II §1, Acte III §1)
- **III → IV → V** : transitions formulées en questions miroir — **efficaces**
- **V → VI → VII** : logique personnelle puis exploration — **cohérente**

### 5.4 NovaBuild

| Contrôle | Résultat |
|----------|----------|
| Fiction explicite | ✓ Acte III §2, Hub §10, III.1 métadonnées |
| Continuité vers livrables | ✓ Catégories Acte IV distinctes de NovaBuild |
| Lien personas | ✓ VI.1 → III.1 ; PO → chaîne complète |
| Risque confusion preuve | **Faible** en lecture attentive ; Hub §10 renforce |

### 5.5 Répétitions et ruptures

- **Répétitions utiles** : Git prime, gates Morris, NovaBuild fiction, formulations conditionnelles — renforcement pédagogique
- **Ruptures de ton** : aucune rupture majeure ; sections « gouvernance / sources Git » plus techniques — **hors corps lecteur** (conforme contrat)
- **Rupture documentaire** : métadonnées « futur » — **rupture de confiance navigation** (non narrative)

### 5.6 Promesses et preuves

- Promesses **sobres** et conditionnelles (« lorsque le cadre est appliqué »)
- Preuves = catégories observables Git, review packs, PR — **sans témoignage client nommé**
- **Aucun chiffre non sourcé** (C20 PASS)

---

## 6. QA métier par persona

*Lecture simulée experte — ne constitue pas un test utilisateur réel.*

### 6.1 Dirigeant PME (VI.1)

| Dimension | Synthèse |
|-----------|----------|
| Après Hub | Problème conduite projet · SFIA = cadre gouverné, pas chatbot |
| Après I–III | Situation reconnue · contraste IA libre · NovaBuild illustre cadrage |
| Après IV–V | Livrables lisibles · garanties raisonnées · pas de délai fixe |
| Parcours VI.1 | Investissement cadre vs demande directe — objections adressées |
| Après VII | Où démarrer sans noyer l'équipe |
| Valeur perçue | Lisibilité · reprise · arbitrage |
| Objections | « Encore une méthode » · coût flou |
| Jargon bloquant | Faible en VI.1 |
| Manques | ROI chiffré (volontairement absent) · contact commercial hors Discovery |
| Confiance | **Moyenne-haute** si cadre accepté |
| Prochain pas | Acte II + III.1 + VII — **compréhensible** |

### 6.2 Chef de projet / PO (VI.2)

| Dimension | Synthèse |
|-----------|----------|
| Après Hub | Parcours 20 min vers cycles et livrables |
| Après I–III | Cycles bornés · backlog · review packs via NovaBuild |
| Après IV–V | Galerie livrables · mécanismes QA |
| Parcours VI.2 | Structurer sans bureaucratie — **résonne** |
| Après VII | Cycles · routage · templates |
| Valeur perçue | Coordination IA/équipe · moins de rework si cadrage tenu |
| Objections | Risque surcharge documentaire |
| Jargon | review pack, gates — **définis en parcours** |
| Confiance | **Haute** pour adoption méthode |
| Prochain pas | NovaBuild complet → Acte VII setup — **clair** |

### 6.3 Équipe technique (VI.3)

| Dimension | Synthèse |
|-----------|----------|
| Après Hub | Porte livrables & traçabilité |
| Après I–III | III.3 delivery/QA — périmètre fichiers, PR |
| Après IV–V | Familles Livrer/Vérifier · validation proportionnée |
| Parcours VI.3 | Limites Cursor explicites — **rassurant** |
| Après VII | Templates · gouvernance · Git direct |
| Valeur perçue | Traçabilité · moins de dette invisible |
| Objections | « Encore de la gouvernance » |
| Jargon | Technique autorisé — **approprié** |
| Confiance | **Haute** si accès Git |
| Prochain pas | Git routing guide — **explicite** (hors Discovery) |

### 6.4 ESN / partenaire (VI.4)

| Dimension | Synthèse |
|-----------|----------|
| Après Hub | Porte partenaire → II → V → VI.4 |
| Après I–III | Reproductibilité delivery · fiction vs preuves |
| Après IV–V | Livrables client · limites licensing |
| Parcours VI.4 | Pas de promesse IP / partenariat — **correct** |
| Après VII | Gouvernance · documents référence |
| Valeur perçue | Cadre delivery visible client |
| Objections | Appropriation méthode · white-label |
| Manques | Licensing — **décision Morris distincte** (documenté) |
| Confiance | **Moyenne** — cadre clair, offre absente |
| Prochain pas | Acte V + VII — **compréhensible** ; pas de CTA commercial |

---

## 7. Gouvernance et confidentialité

| Contrôle | Résultat |
|----------|----------|
| Baseline v2.4 | ✓ Tous actes · Acte VII porte 1 |
| v2.5 Candidate | ✓ Non promue baseline |
| Git source de vérité | ✓ Hub, II, V, VII |
| Morris décideur | ✓ Gates structurants |
| ChatGPT qualification | ✓ Acte II, III.1 |
| Cursor exécuteur borné | ✓ VI.3 |
| Notion couche pédagogique | ✓ Acte VII §6 |
| Méthode / outillage / automatisation | ✓ Distinction ; pas de L5 globale (Acte VII §5) |
| Annexes hors parcours | ✓ Migration = hors lecteur (README §5) |
| Prompts / routing exhaustif | ✓ Non reproduits corps lecteur |
| v3.0 | ✓ Mentionnée comme « non baseline » (Hub §5) |

**Réserve :** README editorial et migration plan indiquent PD-07B « futur » / « non exécuté » — **divergence avec contexte Morris PD-07B validé**. Traiter en PD-08B (sync métadonnées) sans présumer du runtime Notion.

---

## 8. Accessibilité et lisibilité (Markdown)

| Contrôle | Résultat |
|----------|----------|
| Hiérarchie titres | H1 unique par fichier · H2/H3 logiques |
| Clarté libellés | Tableaux à en-têtes explicites |
| Sens des liens | Texte descriptif (« Acte II », « NovaBuild III.1 ») |
| Dépendance couleur | Aucune instruction « voir en couleur » |
| Densité tableaux | Acceptable ; Acte II §3 et VII §5 denses mais lisibles |
| Longueur sections | Acte I long (~12 min cible) — acceptable |
| Listes | Parcours et CTAs en listes/tableaux |
| Langage inclusif | « Vous » · personas genrés minimalement (Laurent fictif) |

**NOT TESTABLE :** rendu mobile Notion, contraste, navigation clavier.

---

## 9. Anomalies et réserves

| ID | Sévérité | Description | Preuve | Impact | Recommandation | Fichiers | Gate Morris |
|----|----------|-------------|--------|--------|----------------|----------|-------------|
| **ANOM-01** | Majeure | Hub §8 annonce Actes II–VII comme futurs / en revue | Hub lignes 214–220 | Lecteur Hub croit contenu absent | Resync statuts éditoriaux post-PD-06A | `sfia-discovery-hub-editorial-draft.md` | PD-08B |
| **ANOM-02** | Majeure | Hub §14 arborescence et §13 CTAs référencent actes « futur » | Hub §13–14 | Navigation d'entrée trompeuse | Mettre à jour arbre et CTAs | Hub | PD-08B |
| **ANOM-03** | Majeure | README editorial : PD-07B futur · gates M1–M7 en attente | README §6, §10 | Gouvernance documentaire désalignée | Sync post-PD-07A merge et contexte PD-07B | `editorial/README.md` | Oui |
| **ANOM-04** | Mineure | Métadonnées « Implémentation Notion : gate PD-0XB futur » sur actes II–VII | Métadonnées chaque acte | Confusion statut A/B | Batch update métadonnées | Tous actes | Non |
| **ANOM-05** | Mineure | Transitions « futur PD-05A/06A » (III.4, Acte V) | III.4 fin ; Acte V §9 | Incohérence locale | Corriger libellés transition | III.4, Acte V | Non |
| **ANOM-06** | Mineure | Hub §6.3 note « Actes II et IV : cycles futurs » | Hub §6.3 | Parcours 20 min sous-documenté | Actualiser note | Hub | Non |
| **RES-01** | Information | QA Notion runtime non exécutée | Pas MCP Notion | Parité non prouvée | Validation Morris/ChatGPT Notion | — | PD-08B |
| **RES-02** | Information | Tests utilisateurs C9 non réalisés | — | Score envie inconnu | Optionnel post-PD-08B | — | Non |
| **RES-03** | Information | Mobile / accessibilité Notion | — | C16 NOT TESTABLE | Test manuel Notion | — | PD-08B |

**Déduplication :** ANOM-01, ANOM-02, ANOM-06 partagent la cause racine **Hub non resynchronisé post-PD-03A–06A**.

---

## 10. Recommandations PD-08B

### 10.1 Quick wins

1. Hub §8, §13, §14, §6.3 — statuts actes et CTAs à jour
2. README editorial — PD-07A mergé · PD-07B selon validation Morris
3. Transitions III.4 et Acte V — retirer « futur PD-0xA »
4. Batch métadonnées « Implémentation Notion » sur actes II–VII

### 10.2 Corrections majeures

- Walkthrough Notion des 4 parcours persona (C13, C16, C18)
- Test confidentialité Notion (C10) — échec attendu sur prompt catalog
- Vérifier parité contenu corps lecteur Hub/Actes vs Git HEAD

### 10.3 Sujets à ne pas modifier (sans GO)

- Fond narratif Actes I–V (substance validée)
- Positionnement NovaBuild fiction
- Tableaux garanties Acte V
- Réserves ESN licensing (VI.4)
- Corpus baseline v2.4 · prompts · routing interne

### 10.4 Ordre recommandé

1. Sync métadonnées Hub + README (ANOM-01 à 06)
2. Validation Notion Morris/ChatGPT (RES-01, C10, C16, C18)
3. Test utilisateur optionnel (C9)
4. Décision PD-09 capitalisation

### 10.5 Dette potentielle

- Faible si PD-08B limité à sync métadonnées
- Dette accrue si parité Notion non vérifiée avant PD-09

---

## 11. Décisions Morris

| # | Question | Options | Recommandation Cursor/ChatGPT |
|---|----------|---------|-------------------------------|
| **D1** | Lancer PD-08B corrections éditoriales ? | A) Oui — sync Hub/README · B) Non — reporter · C) Partiel — Hub seul | **A** — réserves non bloquantes, effort limité |
| **D2** | Valider parité Notion post-PD-07B ? | A) Revue ChatGPT depuis handoff · B) Walkthrough Morris · C) Reporter | **B puis A** — runtime non prouvé par Cursor |
| **D3** | Verdict QA fond narratif ? | A) DISCOVERY QA READY · B) READY WITH RESERVES · C) Retravail actes | **B** — métadonnées Hub |
| **D4** | Enclencher PD-09 capitalisation ? | A) Après PD-08B · B) Après tests utilisateurs · C) Non | **A** — sous réserve D2 |
| **D5** | Hero Hub Option A définitif ? | A) Oui · B) Variante titre Morris · C) Revoir options | **A** — aligné PD-02B déclaré |

*Aucune décision ci-dessus n'est validée — arbitrage Morris requis.*

---

## 12. Verdict final

| Élément | Valeur |
|---------|--------|
| **Verdict QA** | **READY WITH EDITORIAL RESERVES** |
| **Statut cycle** | **READY FOR REVIEW** |
| **Verdict cycle** | **PD-08 QA REPORT READY FOR MORRIS REVIEW** |
| **Bloquante ouverte** | Aucune sur le fond éditorial |
| **Condition READY complet** | PD-08B sync Hub/README + validation Notion (D1, D2) |

Le parcours Discovery Git est **compréhensible, cohérent, utile pour les quatre personas, fidèle à SFIA v2.4 et suffisamment maîtrisé** pour permettre à Morris d'arbitrer les corrections avant PD-09 — sous réserve de traiter la **dérive métadonnées Hub/README** et de **valider Notion** hors périmètre Cursor.

---

*Fin du rapport PD-08A — aucune modification du corpus Discovery hors ce fichier.*

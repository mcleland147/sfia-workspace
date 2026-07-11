# SFIA Review Pack — v2.6 Repository Read-Only Audit

**Date/heure :** 2026-07-11 05:56 Europe/Paris
**Repository :** mcleland147/sfia-workspace
**Cycle :** Audit read-only SFIA v2.6 étape 1
**Profil :** Standard
**Review pack level :** full
**Branche :** method/sfia-v2.6-repository-read-only-audit
**HEAD initial :** 30fb8e71bae8987b9dcf3fcafe57d9b2b4c36d65
**origin/main :** 30fb8e71bae8987b9dcf3fcafe57d9b2b4c36d65

---

## Local Git Truth Check

- main @ 30fb8e7 = origin/main
- Worktree tracked propre
- Untracked intacts (.tmp-sfia-review/, .sfia/)

---

## Méthode inventaire

- git ls-files: 1042 fichiers
- 652 Markdown total
- 214 Markdown method/prompts/docs analysés en-têtes
- 125 liens relatifs échantillonnés

---

## Statistiques principales

| Métrique | Valeur |
|----------|--------|
| Fichiers versionnés | 1042 |
| Markdown | 652 |
| projects/ | 688 |
| method/ | 172 |
| README | 67 |
| sfia-v3 tracked | 15 |
| Liens cassés potentiels | 23/125 |

---

## Fichier créé

method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md

---

## Contenu complet du rapport d'audit

# SFIA v2.6 — Repository Read-Only Audit

**Document :** `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-read-only-audit.md`  
**Date et heure :** 2026-07-11 05:56 Europe/Paris  
**Statut :** **Candidate** — audit read-only étape 1  
**Cycle projet :** Audit read-only SFIA v2.6 — standardisation et homogénéisation  
**Profil SFIA :** Standard  
**Typologie v2.4 :** DOC  
**Repository :** mcleland147/sfia-workspace  
**Branche :** method/sfia-v2.6-repository-read-only-audit  
**HEAD :** `30fb8e71bae8`  
**Base main :** `30fb8e7`  
**Autorité de décision :** Morris (L0)  
**Baseline opérationnelle :** SFIA v2.4  
**Trajectoires :** v2.5 candidate capitalisée ; v2.6 candidate  

### Limites du cycle

- Audit **read-only** — aucun fichier existant modifié  
- Aucun standard cible validé  
- Aucune classification garder / mettre à jour / fusionner / archiver / supprimer  
- Aucune arborescence cible validée  
- Aucune migration, homogénéisation effective, archivage ou suppression  
- Contenu non versionné (`.sfia/`, `.tmp-sfia-review/`) **exclu** du canon Git  
- Analyse sémantique profonde limitée sur le code applicatif (projects/*/app/)  

---

## 1. Executive summary

Le repository versionné compte **1042 fichiers** sur `main`, dont **652 Markdown** et **688 fichiers sous `projects/`** (majoritairement code et documentation projet). La documentation SFIA structurante est concentrée sous **`method/sfia-fast-track/`** (157 fichiers), **`prompts/`** (37) et **`docs/`** (58).

**Niveau global d'homogénéité observé :** **moyen à faible** — homogénéité **forte** sur le noyau méthode v2.4/v2.5 récent, **faible** sur les zones projet, capitalisation multi-trajectoire (v2/v2.5/v2.6/v3) et plans antérieurs de migration.

**Constats principaux :**

1. **Séparation partielle** méthode / projet / capitalisation / historique — lisible sur le papier, **hétérogène en pratique** (profondeur, nommage, métadonnées).  
2. **Capitalisation récente v2.5/v2.6** plus normalisée (dates, statuts Candidate, métadonnées) que l'héritage `docs/`, `prompts/` et `workspace-audit/`.  
3. **Trois plans antérieurs** (structure-target, migration-plan, cleanup round 2) **non réconciliés** avec le cadrage v2.6 — inputs historiques, pas standard actuel.  
4. **15 fichiers sfia-v3** et **17 chemins MCP** versionnés — **hors trajectoire courante**, signalés, non réactivés.  
5. **Dette de liens** : ~23 liens relatifs potentiellement cassés sur 125 échantillonnés (controlled-delivery → projects/).  
6. **Règles ChatGPT/Cursor** réparties sur template + 3 documents core — chevauchement fonctionnel documenté, pas doublon avéré de contenu intégral.

**Confirmation :** aucune classification, standard cible, migration ou modification de document existant dans ce cycle.

---

## 2. Finalité du chantier

Le chantier SFIA v2.6 vise à rendre le repository **cohérent, standardisé, homogène, lisible, maintenable** et **exploitable** par Morris, ChatGPT et Cursor. Le nettoyage est un **moyen** — pas une finalité autonome — pour réduire incohérences, clarifier rôles documentaires, unifier conventions et préparer une structure cible durable.

---

## 3. Méthode et périmètre

### Commandes et méthodes

| Commande / méthode | Usage |
|--------------------|-------|
| `git ls-files` | Inventaire canonique versionné |
| `git rev-parse HEAD` | HEAD de référence |
| Analyse extensions / profondeur / familles | Statistiques structurelles |
| Lecture en-têtes 214 Markdown (method/, prompts/, docs/) | Métadonnées, statuts, titres |
| Échantillonnage liens `](...)` relatifs | Références cassées potentielles |
| Lecture ciblée documents structurants et 4 inputs antérieurs | Réconciliation descriptive |

### Familles analysées

20 familles minimales du cadrage v2.6 couvertes (voir §5 et annexe A).

### Exclusions

- `.sfia/` non versionné  
- `.tmp-sfia-review/` non versionné  
- Dépendances node_modules, caches, artefacts générés non trackés  
- Inspection fonctionnelle profonde SFIA v3.0 / MCP / Bridge / Runner  
- Code applicatif TS/TSX : comptabilisé, non audité ligne à ligne  

---

## 4. Challenge obligatoire

| Question | Réponse |
|----------|---------|
| Audit complet utile maintenant ? | **Oui** — prérequis mesuré avant standard cible |
| Volume trop large ? | **Maîtrisable** — synthèse + annexes tabulaires |
| Approche plus simple ? | **Non** pour étape 1 — inventaire + écarts requis |
| Écarts significatifs ? | Métadonnées, statuts, nommage, liens, plans concurrents |
| Variantes légitimes ? | Structure projet vs méthode ; archives projet |
| Variantes créant dette ? | Plans migration multiples ; liens cassés ; v3 visible |
| Automatisable ? | Comptages, liens, métadonnées, nommage — oui |
| Humain requis ? | Rôle réel, chevauchements, arbitrages standard |
| Valeur pour standard cible ? | **Oui** — matrice maturité + écarts fournis |
| Dette du rapport ? | **Faible** si annexes tabulaires, pas dump brut |
| Scinder étape suivante ? | **Option candidate** — principes standard avant classification détaillée |
| Principes avant classification ? | **Recommandation candidate** — Morris décide |

**Position :** automatiser contrôles répétables ; interprétation prudente ; homogénéiser ≠ uniformiser ; arbitrages humains.

---

## 5. Inventaire structurel

### Statistiques globales

| Métrique | Valeur |
|----------|--------|
| Fichiers versionnés total | **1042** |
| Markdown | **652** |
| TypeScript (.ts) | 101 |
| TSX (.tsx) | 74 |
| JSON | 69 |
| README.md | **67** |
| Templates (prompts/templates/) | 13 fichiers |
| Checklists (method/.../checklists/) | 5 fichiers |
| Documents capitalisation (path) | sfia-v2: 17 ; v2.5: 3 ; v2.6: 2* ; v3: 15 |

*Après ce cycle : v2.6 contiendra cadrage + présent audit.

### Répartition premier niveau

| Répertoire | Fichiers |
|------------|----------|
| projects/ | 688 |
| method/ | 172 |
| tools/ | 66 |
| docs/ | 58 |
| prompts/ | 37 |
| exports/ | 12 |
| docker/ | 3 |
| .cursor/ | 2 |
| .github/ | 1 |

---

## 6. Évaluation de l'arborescence

**Structures observées :**

- **Méthode** : `method/sfia-fast-track/{core,checklists,documentation,cycles,...}` — profondeur max **6**  
- **Prompts** : familles thématiques + `templates/` — profondeur max **3** — **plus plate**  
- **Docs** : `docs/{practices,architecture,templates,tooling,...}` — profondeur max **4**  
- **Projects** : `projects/{projet}/{phase}/` — profondeur max **6** — **très dense** (interv360: 487 fichiers)

**Variantes et zones concurrentes :**

- Documentation transverse à la fois dans `docs/` et `method/sfia-fast-track/documentation/`  
- Capitalisation dans `method/.../capitalization/` vs `projects/*/09-capitalization/`  
- Audits antérieurs dans `workspace-audit/` vs `capitalization/` vs `projects/*/06-audit-rex/`

**Dispersion :** règles SFIA sur 4 fichiers core + 1 template ; MCP/v3 sur 3 zones.

**Zones sans rôle clair :** `docs/adr`, `docs/rex`, `docs/knowledge`, `docs/roadmaps` — **1 fichier chacun**, README présent mais index minimal.

---

## 7. Conventions de nommage

| Convention | Observation |
|------------|-------------|
| Dates YYYY-MM-DD | **16 fichiers** — capitalization récente uniquement |
| Versions v2/v2.5/v2.6 | Chemins explicites capitalization ; `v3` substring très fréquent (525 paths — bruit substring) |
| FR vs EN | **Noms EN dominants** ; titres FR fréquents en capitalization |
| README.md | **67 occurrences** — bonne couverture globale |
| Préfixes sfia- | Cohérent sur core et capitalization |
| Noms génériques | `qa-reserves.md`, `qa-strategy.md` répétés par increment Chantiers360 |

---

## 8. Métadonnées documentaires

**Présentes (capitalization v2.5/v2.6) :** titre, date/heure, fuseau, statut Candidate, cycle, profil, typologie, autorité, baseline, trajectoire, HEAD, périmètre.

**Absentes ou partielles :** majorité `docs/`, `prompts/` legacy, plans workspace-audit (titres EN sans bloc Statut).

**Variantes :** YAML front matter (Notion audit) vs bloc Markdown `**Statut:**` vs absence.

**Besoin futur candidate :** profil minimal par famille (core = complet ; checklist = léger ; projet = phase-based).

---

## 9. Statuts documentaires

| Statut | Observation |
|--------|-------------|
| baseline | Explicite core + capitalization (14 docs avec mot-clé) |
| candidate / Candidate | **42+32 hits** — surtout capitalization |
| canonique | 5 hits — rare, non systématique |
| archive | 11 hits — zones archive déclarées |
| draft | 10 hits — docs tooling MCP entre autres |
| absent | Fréquent hors capitalization |
| contradictoire potentiel | Statut candidate dans doc v3 tracked vs hors trajectoire déclarée |

---

## 10. Structures documentaires internes

**Homogènes :** core SFIA (sections numérotées, garde-fous), template cycle execution (sections §), capitalization récente (Executive summary, gates, garde-fous).

**Hétérogènes :** docs/practices (formats variés), workspace-audit plans (structure simple Objectif/Liste), prompts catalogue (entries courtes vs templates longs).

**Impact :** ChatGPT/Cursor doivent adapter parsing par famille — pas un seul schéma documentaire.

---

## 11. Indexation et navigation

- **67 README** — points d'entrée présents à de nombreux niveaux  
- **Index structurants :** `method/sfia-fast-track/README.md`, `prompts/README.md`, `docs/README.md`  
- **Index concurrents :** documentation-structure-target vs cadrage v2.6 (rôles différents, sujet proche)  
- **Zones faibles :** docs/adr, docs/rex, docs/knowledge — single-file  
- **Capacité nouvel agent :** core + template identifiables ; risque confusion v2/v3/plans migration sans guide unique  

---

## 12. Cartographie descriptive initiale

| Famille | Rôle apparent | Trajectoire | Homogénéité |
|---------|---------------|-------------|-------------|
| method/core | Canonique v2.4 + compléments v2.5 | baseline + candidate | forte |
| method/capitalization | REX, audits, trajectoires | v2/v2.5/v2.6/v3 | faible |
| method/workspace-audit | Plans migration antérieurs | historique | moyenne |
| prompts/ | Prompts opérationnels + templates | opérationnel | moyenne |
| docs/ | Docs transverses legacy | mixte | moyenne |
| projects/chantiers360 | Projet actif + capitalisation | projet | faible |
| projects/interv360 | Projet + archive profonde | projet/historique | faible |
| sfia-v3 (15 files) | Trajectoire suspendue | hors courante | moyenne |

*Section descriptive — pas l'étape 2 cartographie complète.*

---

## 13. Documents structurants

| Document | Rôle |
|----------|------|
| `prompts/templates/sfia-cycle-execution-template.md` | Template cycles Cursor |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Operating model |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Routing |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Rules |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md` | Cadrage v2.6 |
| `documentation-structure-target.md` | Arborescence cible **antérieure** |
| `sfia-workspace-migration-plan.md` | Plan migration **antérieur** |
| `sfia-workspace-cleanup-round-2-plan.md` | Cleanup round 2 **antérieur** |

---

## 14. Références et dépendances

- **125 liens relatifs** échantillonnés dans method/prompts/docs  
- **23 potentiellement cassés** — principalement `method/complementary/controlled-delivery/` → `../../projects/` (chemin incorrect)  
- **Références fréquentes :** template ↔ core docs (croisées)  
- **Documents isolés potentiels :** single-file docs/ zones — **absence référence entrante ≠ suppressible**

---

## 15. Chevauchements potentiels

| Sujet | Fichiers | Nature | Confiance |
|-------|----------|--------|-----------|
| Règles handoff / review pack | `sfia-cycle-execution-template.md`, `sfia-rules-and-guardrails.md`, `sfia-cycle-routing-guide.md`… | Gouvernance ChatGPT/Cursor répartie sur 4 sources | moyen |
| Plans cleanup / migration | `sfia-workspace-migration-plan.md`, `sfia-workspace-cleanup-round-2-plan.md`, `documentation-structure-target.md`… | Trois documents antérieurs sur structure/migration | élevé |
| Audits documentation | `sfia-documentation-capitalization-audit.md`, `sfia-3-documentation-routing-audit.md`, `sfia-documentation-completeness-matrix.md`… | Audits/matrices capitalisation | moyen |
| QA reserves/strategy | `qa-reserves.md`, `qa-reserves.md`, `qa-reserves.md`… | Même basename répété par increment | élevé |
| MCP documentation | `sfia-mcp-v2-architecture.md`, ``, ``… | MCP/v3 hors trajectoire, docs dispersées | moyen |

Analyse complémentaire requise avant toute fusion. Terme « doublon avéré » **non utilisé** sans preuve contenu intégral.

---

## 16. Maturité d'homogénéité par grande famille

| Famille | Fichiers | Markdown | Prof. max | Homogénéité candidate |
|---------|----------|----------|-----------|------------------------|
| PR2 — Interv360 | 487 | 306 | 6 | homogénéité faible — Archive volumineuse, profondeur élevée |
| PR1 — Chantiers360 | 200 | 119 | 6 | homogénéité faible — Structure projet + code mélangés |
| T — Tools | 66 | 7 | 4 | données insuffisantes — Outils techniques, peu doc |
| M3 — Capitalization | 59 | 50 | 6 | homogénéité faible — Dates récentes v2.5/v2.6, mélange trajectoires v2/v3 |
| D — Docs | 58 | 58 | 4 | homogénéité moyenne — README par zone, ADR/standards dispersés |
| M4 — Workspace audit | 44 | 9 | 5 | homogénéité moyenne — Plans antérieurs, titres EN, statuts partiels |
| P — Prompts | 37 | 28 | 3 | homogénéité moyenne — Catalogue partiel, familles thématiques |
| M10 — Complementary | 14 | 14 | 3 | non évaluée — — |
| M9 — Fast Track other | 14 | 14 | 3 | non évaluée — — |
| E — Exports | 12 | 1 | 2 | non évaluée — — |
| M7 — Archive | 9 | 9 | 4 | homogénéité moyenne — Zone archive explicite |
| M1 — Fast Track core | 9 | 9 | 3 | homogénéité forte — Documents structurés, statuts explicites, rôle clair |
| M5 — Notion | 7 | 7 | 4 | homogénéité moyenne — YAML front matter sur audit Notion |
| M8 — Method automation | 5 | 5 | 3 | homogénéité moyenne — Scripts + README |
| M2 — Checklists | 5 | 5 | 3 | homogénéité moyenne — Format cohérent, peu de métadonnées |
| M6 — Documentation (other) | 5 | 5 | 3 | homogénéité faible — Peu de fichiers, rôles variés |
| DK — Docker | 3 | 1 | 2 | non évaluée — — |
| CR — Cursor | 2 | 1 | 2 | non évaluée — — |
| R — Root | 2 | 1 | 0 | non évaluée — — |
| X — Other | 2 | 2 | 1 | non évaluée — — |
| GH — GitHub | 1 | 0 | 2 | non évaluée — — |
| PR3 — Projects other | 1 | 1 | 1 | non évaluée — — |

Échelle **candidate descriptive** — pas validation standard cible.

---

## 17. Risques et dette documentaire

| Risque | Observation | Niveau candidate | Preuves | Décision Morris |
|--------|-------------|------------------|---------|-----------------|
| Ambiguïté baseline/candidate | Statuts non homogènes hors capitalization | élevé | method/, prompts/, docs/ | oui |
| Plans migration concurrents | 3 docs antérieurs structure/migration non réconciliés | moyen | workspace-audit/, structure-target | oui |
| Liens Markdown cassés | 23/125 liens relatifs échantillonnés non résolus | moyen | method/complementary/controlled-delivery/ | plus tard |
| SFIA v3.0 visible | 15 fichiers tracked sfia-v3 + docs MCP | moyen | capitalization/sfia-v3/, docs/tooling/mcp/ | oui |
| Mélange méthode/projet/code | 688 fichiers projects/ dont code TS/TSX | moyen | projects/ | non |
| Archive interv360 volumineuse | 487 fichiers interv360 dont archive profonde | moyen | projects/interv360/archive/ | plus tard |
| Single-file directories | 10 répertoires à 1 seul fichier (method+docs) | faible | docs/adr, sfia-v2.6/ | non |
| Règles dupliquées | Handoff/review pack sur template + 3 core docs | moyen | template + core/ | plus tard |

Niveaux = appréciations candidates, pas décisions validées.

---

## 18. Réconciliation des quatre documents antérieurs (cadrage §1.3)

| Document | Rôle constaté | Pertinence | Écart cadrage v2.6 | Écart finalité standardisation | Questions ouvertes |
|----------|---------------|------------|--------------------|---------------------------------|-------------------|
| `documentation-structure-target.md` (209 L) | Arborescence cible proposée, non exécutée | Partielle — pré-v2.6 | Input, pas remplacement | Structure proposée ≠ standard validé | Quels éléments reprendre vs abandonner ? |
| `sfia-workspace-migration-plan.md` (186 L) | Liste déplacements proposés | Historique — pré-v2.6 gates | Révision requise | Plan physique ≠ standard documentaire | Exécution partielle ? |
| `sfia-workspace-cleanup-round-2-plan.md` (181 L) | Cleanup passe 2 | Historique | Éviter doublon plan | Concurrent avec migration-plan | Fusionner plans ou archiver ? |
| `sfia-notion-live-export-audit.md` (446 L) | Audit export Notion | Périmètre distinct | Référence croisée | Publication Notion ≠ canon Git | Politique Notion vs Git ? |

**Aucun arbitrage final** — observations et questions ouvertes uniquement.

---

## 19. Éléments hors trajectoire

| Zone | Fichiers trackés | Traitement audit |
|------|------------------|------------------|
| sfia-v3/ | 15 | Signalé, non réactivé, non analysé en profondeur |
| docs/tooling/mcp/ + prompts/tooling/mcp/ | ~17 chemins mcp | Hors trajectoire courante |
| bridge/runner experiments | 1+1 dans sfia-v3/experiments | Signalé |
| `.sfia/` | **0 versionné** | Exclu — local uniquement |

---

## 20. Éléments automatisables à terme

| Contrôle | Automatisable | Limite |
|----------|---------------|--------|
| Noms fichiers (dates, prefixes) | Oui | Arbitrage familles |
| Métadonnées obligatoires par zone | Oui | Définir profil par famille |
| Liens Markdown internes | Oui | Faux positifs chemins relatifs |
| Statuts baseline/candidate | Partiel | Lecture sémantique contenu |
| Structures sections | Partiel | Variantes légitimes |
| Rôle documentaire | Non | Humain + contexte |
| Classification garder/archiver | **Non** | Gates Morris G3–G7 |

**Aucune automatisation implémentée** dans ce cycle.

---

## 21. Documents ou zones non complètement analysés

- Code applicatif `projects/*/app/` (TS/TSX) — comptabilisé, non lu ligne à ligne  
- Fichiers binaires (png, etc.) — inventoriés uniquement  
- `tools/` scripts — rôle technique, analyse documentaire légère  
- Contenu intégral de 426 Markdown projects/ — échantillonnage structurel seulement  
- Historiques Git hors `main` — non consultés  

---

## 22. Questions ouvertes

1. Quels principes du standard repository v2.6 avant classification (G3) ?  
2. Quelle politique pour plans migration antérieurs vs cadrage v2.6 ?  
3. Niveau d'homogénéisation requis pour docs/ legacy vs capitalization récente ?  
4. Traitement sfia-v3 tracked : archive, isolation, ou maintien signalé ?  
5. Politique liens controlled-delivery → projects/ : correction ciblée ou report ?  
6. Faut-il scinder étape 2 cartographie par famille ou par trajectoire ?  

---

## 23. Données pour standard repository cible (futur)

- Matrice écarts § annexe B  
- Matrice maturité §16  
- Inventaire 214 Markdown method/prompts/docs § annexe C  
- Liste chevauchements §15  
- Risques §17  
- Réconciliation 4 docs §18  

---

## 24. Données pour étape 2 (cartographie)

- Tableau familles §12 + annexe A  
- Rôles apparents par chemin (annexe C)  
- Références cassées potentielles  
- Documents structurants §13  
- Zones hors trajectoire §19  

---

## 25. Réserves

- Échantillonnage liens non exhaustif (125/≈400+ liens estimés)  
- Heuristiques statut/métadonnées sur 40 premières lignes seulement  
- Profondeur interv360/archive peut biaiser perception dette  
- Untracked locaux (.sfia/, .tmp-*) non inventoriés  

---

## 26. Conclusion

| Élément | Statut |
|---------|--------|
| Audit read-only exécuté | **Oui** |
| Homogénéité globale | **Moyenne à faible** |
| Écarts standardisation identifiés | **Oui** — §7–11, annexe B |
| Documents existants modifiés | **Non** |
| Standard cible validé | **Non** |
| Classification consolidée | **Non** |
| Arborescence cible | **Non** |
| Migration | **Non** |
| Gate Morris suivant | **Revue audit** → puis qualification étape suivante (principes standard / cartographie / NO-GO) — **pas G3 automatique** |

---

## Annexe A — Inventaire grandes familles

| Famille | Fichiers | Markdown | Prof. max | Homogénéité candidate |
|---------|----------|----------|-----------|------------------------|
| PR2 — Interv360 | 487 | 306 | 6 | homogénéité faible — Archive volumineuse, profondeur élevée |
| PR1 — Chantiers360 | 200 | 119 | 6 | homogénéité faible — Structure projet + code mélangés |
| T — Tools | 66 | 7 | 4 | données insuffisantes — Outils techniques, peu doc |
| M3 — Capitalization | 59 | 50 | 6 | homogénéité faible — Dates récentes v2.5/v2.6, mélange trajectoires v2/v3 |
| D — Docs | 58 | 58 | 4 | homogénéité moyenne — README par zone, ADR/standards dispersés |
| M4 — Workspace audit | 44 | 9 | 5 | homogénéité moyenne — Plans antérieurs, titres EN, statuts partiels |
| P — Prompts | 37 | 28 | 3 | homogénéité moyenne — Catalogue partiel, familles thématiques |
| M10 — Complementary | 14 | 14 | 3 | non évaluée — — |
| M9 — Fast Track other | 14 | 14 | 3 | non évaluée — — |
| E — Exports | 12 | 1 | 2 | non évaluée — — |
| M7 — Archive | 9 | 9 | 4 | homogénéité moyenne — Zone archive explicite |
| M1 — Fast Track core | 9 | 9 | 3 | homogénéité forte — Documents structurés, statuts explicites, rôle clair |
| M5 — Notion | 7 | 7 | 4 | homogénéité moyenne — YAML front matter sur audit Notion |
| M8 — Method automation | 5 | 5 | 3 | homogénéité moyenne — Scripts + README |
| M2 — Checklists | 5 | 5 | 3 | homogénéité moyenne — Format cohérent, peu de métadonnées |
| M6 — Documentation (other) | 5 | 5 | 3 | homogénéité faible — Peu de fichiers, rôles variés |
| DK — Docker | 3 | 1 | 2 | non évaluée — — |
| CR — Cursor | 2 | 1 | 2 | non évaluée — — |
| R — Root | 2 | 1 | 0 | non évaluée — — |
| X — Other | 2 | 2 | 1 | non évaluée — — |
| GH — GitHub | 1 | 0 | 2 | non évaluée — — |
| PR3 — Projects other | 1 | 1 | 1 | non évaluée — — |

## Annexe B — Matrice descriptive écarts de standardisation

| Axe | Pratique observée | Variante | Zones | Impact | Confiance |
|-----|-------------------|----------|-------|--------|-----------|
| Nommage dates | 16 fichiers datés YYYY-MM-DD (capitalization récente) | Majorité sans date dans le nom | method/capitalization récent vs docs/ prompts/ legacy | moyen | Capitalisation récente vs reste du repo |
| Langue titres/fichiers | Noms EN majoritaires (67 heuristiques) | Titres FR fréquents dans capitalization | method/ vs docs/ | moyen | Bilinguisme non normalisé |
| Métadonnées Statut | Bloc **Statut** explicite (capitalization v2.5/v2.6) | Absence fréquente docs/ prompts/ legacy | 68/214 md avec mots-clés statut | élevé | Besoin standard par famille |
| Front matter YAML | notion audit, quelques docs | Majorité sans YAML | method/notion vs reste | faible | Option candidate par famille |
| Profondeur arborescence | prompts/ max 3 | projects/interv360 max 6 | PR2 vs P | élevé | Familles projet vs méthode |
| Index/README | 67 README | Zones single-file sans index (docs/adr, docs/rex) | 6 dirs docs/ à 1 fichier | moyen | Navigation inégale |
| Liens relatifs | 125 liens échantillonnés | 23 potentiellement cassés | controlled-delivery → projects/ | élevé | Dette liens |
| Statut baseline/candidate | Explicite capitalization | Implicite ou absent ailleurs | core vs projects | élevé | Risque confusion ChatGPT |

## Annexe C — Liste Markdown method/ prompts/ docs/ (214)

| Chemin | Titre | Rôle apparent | Statut déclaré | Mots-clés | Confiance |
|--------|-------|---------------|----------------|-----------|-----------|
| `docs/README.md` | SFIA Platform Documentation | docs transverse | absent | Notion, rex | élevé |
| `docs/adr/README.md` | ADR | docs transverse | absent | Notion, notion | élevé |
| `docs/architecture/README.md` | SFIA Architecture | docs transverse | absent | Notion | élevé |
| `docs/architecture/sfia-decision-engine.md` | SFIA Decision Engine v1.1 | docs transverse | foundation | Notion | élevé |
| `docs/architecture/sfia-delivery-pipeline.md` | SFIA Delivery Pipeline v1.1 | docs transverse | reference | Notion, REX, archive | élevé |
| `docs/architecture/sfia-domain-model.md` | SFIA Domain Model v1.1 | docs transverse | reference | Archive, Draft, Notion, archive | élevé |
| `docs/architecture/sfia-meta-model.md` | SFIA Meta Model v1.1 | docs transverse | reference | Archive, Candidate, Deprecated, Draft, Notion | élevé |
| `docs/architecture/sfia-platform-architecture.md` | SFIA Platform Architecture v1.1 | docs transverse | reference | Notion, archive | élevé |
| `docs/architecture/sfia-repository-blueprint.md` | SFIA Repository Blueprint v1.1 | docs transverse | reference | Notion, archive | élevé |
| `docs/foundation/README.md` | Foundation | docs transverse | absent | Notion | élevé |
| `docs/foundation/sfia-engineering-principles.md` | SFIA Engineering Principles v1.1 | docs transverse | foundation | Notion | élevé |
| `docs/knowledge/README.md` | Knowledge | docs transverse | absent | Notion, notion | élevé |
| `docs/practices/README.md` | SFIA Platform — Practices | docs transverse | absent | — | élevé |
| `docs/practices/architecture/functional-architecture-checklist.md` | Checklist — Architecture fonctionnelle détaillée | docs transverse | absent | Draft | élevé |
| `docs/practices/architecture/functional-architecture-deliverables-standard.md` | Standard des livrables — Architecture fonctionnelle détaillée | docs transverse | absent | Draft | élevé |
| `docs/practices/architecture/functional-architecture-method.md` | Méthode — Architecture fonctionnelle détaillée | docs transverse | absent | Draft | élevé |
| `docs/practices/methods-structure-check.md` | SFIA — Methods Structure Check | docs transverse | absent | Audit, Draft, Notion, rex | élevé |
| `docs/practices/process/bpmn-deliverables-standard.md` | SFIA — Standard des livrables BPMN | docs transverse | absent | Draft, audit, candidate | élevé |
| `docs/practices/process/bpmn-integration-checklist.md` | SFIA — Checklist d'intégration BPMN | docs transverse | absent | Draft, Notion, audit | élevé |
| `docs/practices/process/bpmn-method-cycle-closure.md` | SFIA — Clôture du cycle méthode BPMN | docs transverse | absent | Audit, Draft, audit | élevé |
| `docs/practices/process/bpmn-method-integration-audit.md` | SFIA — Audit d'intégration BPMN dans la méthodologie | docs transverse | absent | Audit, Draft, audit, candidate | élevé |
| `docs/practices/process/bpmn-process-modeling-method.md` | SFIA — Méthode de modélisation BPMN | docs transverse | absent | Draft, audit, candidate | élevé |
| `docs/practices/roles/README.md` | SFIA Role Methods | docs transverse | absent | — | élevé |
| `docs/practices/roles/architect-method.md` | Architecte — SFIA Role Method | docs transverse | absent | Candidate, Draft, REX, candidate | élevé |
| `docs/practices/roles/business-analyst-method.md` | Business Analyst — SFIA Role Method | docs transverse | absent | Draft, REX | élevé |
| `docs/practices/roles/product-owner-method.md` | Product Owner — SFIA Role Method | docs transverse | absent | Draft, REX, candidate | élevé |
| `docs/practices/roles/project-manager-method.md` | Chef de projet — SFIA Role Method | docs transverse | absent | Draft, Notion, REX | élevé |
| `docs/practices/roles/qa-tester-method.md` | Méthode rôle — QA / Testeur | docs transverse | absent | candidate | élevé |
| `docs/practices/roles/rssi-method.md` | RSSI — SFIA Role Method | docs transverse | absent | Draft, REX, candidate | élevé |
| `docs/practices/roles/ux-ui-designer-method.md` | UX/UI Designer — SFIA Role Method | docs transverse | absent | Draft, REX | élevé |
| `docs/practices/ux-ui/ux-ui-reprise-checklist.md` | Checklist — Reprise UX/UI documentaire | docs transverse | absent | Draft | élevé |
| `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md` | Standard des livrables — Reprise UX/UI documentaire | docs transverse | absent | Draft | élevé |
| `docs/practices/ux-ui/ux-ui-reprise-method.md` | Méthode — Reprise UX/UI documentaire | docs transverse | absent | Draft, Notion | élevé |
| `docs/rex/README.md` | REX | docs transverse | absent | Notion, REX, notion, rex | élevé |
| `docs/roadmaps/cmp-technical-roadmap.md` | Roadmap technique — CMP / SFIA outillage | docs transverse | absent | Draft, Notion, notion | élevé |
| `docs/standards/README.md` | SFIA Platform — Standards | docs transverse | absent | — | élevé |
| `docs/standards/ux-ui-v1-governance-standard.md` | SFIA — Standard gouvernance UX/UI V1 | docs transverse | absent | Notion | élevé |
| `docs/templates/README.md` | SFIA Platform — Templates | docs transverse | absent | — | élevé |
| `docs/templates/architecture/functional-architecture-cycle-closure-template.md` | [Nom du projet] — Clôture du cycle d'architecture fonctionnelle | docs transverse | absent | Draft | élevé |
| `docs/templates/architecture/functional-architecture-scope-template.md` | [Nom du projet] — Cadrage du périmètre d'architecture fonctionnelle | docs transverse | absent | Draft, Notion | élevé |
| `docs/templates/architecture/functional-architecture-summary-template.md` | [Nom du projet] — Synthèse d'architecture fonctionnelle détaillée | docs transverse | absent | Draft | élevé |
| `docs/templates/process/bpmn-cycle-closure-template.md` | [PROJECT] — Clôture du cycle BPMN | docs transverse | absent | Draft, Notion, candidate | élevé |
| `docs/templates/process/bpmn-process-analysis-template.md` | [PROJECT] — Analyse des processus BPMN | docs transverse | absent | Draft, candidate | élevé |
| `docs/templates/process/bpmn-process-scope-template.md` | [PROJECT] — Cadrage de la phase processus BPMN | docs transverse | absent | Draft, Notion | élevé |
| `docs/templates/tooling/penpot/README.md` | Templates Penpot — SFIA | docs transverse | absent | Draft | élevé |
| `docs/templates/ux-ui/ux-ui-cycle-closure-template.md` | [Nom du projet] — Clôture du cycle de reprise UX/UI | docs transverse | absent | Draft | élevé |
| `docs/templates/ux-ui/ux-ui-reprise-scope-template.md` | [Nom du projet] — Cadrage du cycle de reprise UX/UI | docs transverse | absent | Draft, Notion | élevé |
| `docs/templates/ux-ui/ux-ui-reprise-summary-template.md` | [Nom du projet] — Synthèse reprise UX/UI | docs transverse | absent | Draft | élevé |
| `docs/tooling/mcp/sfia-3-cycle-engine.md` | SFIA 3.0 — Cycle Engine (moteur de cycle orchestré) | docs transverse | Doctrine opérationnelle — alignée sur preuve technique 2026-07-07 | mcp | élevé |
| `docs/tooling/mcp/sfia-3-gates-and-stop-conditions.md` | SFIA 3.0 — Gates Morris et conditions d'arrêt | docs transverse | Aligné sur sfia-mcp v0.4.0 + bridge v0.1.0 + runner v0.1.0 | MCP, mcp | élevé |
| `docs/tooling/mcp/sfia-3-orchestration-doctrine.md` | SFIA 3.0 — Doctrine d'orchestration contrôlée | docs transverse | Trajectoire ouverte — preuve technique validée, industrialisation repo | MCP, mcp | élevé |
| `docs/tooling/mcp/sfia-mcp-v2-architecture.md` | SFIA MCP v2.0 — Architecture des échanges ChatGPT ↔ Cursor | docs transverse | Documentation — aucune implémentation serveur dans ce cycle | MCP, draft | élevé |
| `docs/tooling/penpot/penpot-cursor-agent-rules.md` | Penpot Cursor Agent — Règles d'usage SFIA | docs transverse | absent | Draft, MCP | élevé |
| `docs/tooling/penpot/penpot-design-agent-architecture.md` | Penpot Design Agent — Architecture d'intégration SFIA | docs transverse | absent | Audit, Draft, MCP | élevé |
| `docs/tooling/penpot/penpot-mcp-self-host-rex.md` | Penpot MCP self-host — REX d'installation locale | docs transverse | absent | Draft, MCP, REX, mcp | élevé |
| `docs/tooling/penpot/penpot-self-host-docker-guide.md` | Penpot self-host — Guide Docker SFIA | docs transverse | absent | Draft, MCP | élevé |
| `docs/tooling/penpot/penpot-sfia-method-integration.md` | Penpot — Intégration aux méthodes SFIA | docs transverse | absent | Audit, Draft | élevé |
| `docs/workspace-readiness-report.md` | SFIA Workspace Readiness Report | docs transverse | absent | Notion, notion | élevé |
| `method/README.md` | Method | incertain | absent | — | élevé |
| `method/complementary/README.md` | SFIA — Complementary Methods | incertain | absent | — | élevé |
| `method/complementary/controlled-delivery/README.md` | SFIA — Controlled Delivery | incertain | absent | Notion, REX, archive, rex | élevé |
| `method/complementary/controlled-delivery/controlled-delivery-checklist.md` | SFIA — Controlled Delivery Checklist | checklist | absent | Draft, candidate | élevé |
| `method/complementary/controlled-delivery/controlled-delivery-index-integration.md` | SFIA — Controlled Delivery Index Integration | incertain | absent | Draft, Notion, notion | élevé |
| `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md` | SFIA — Controlled Delivery Prompt Family | incertain | absent | Draft, Notion | élevé |
| `method/complementary/controlled-delivery/controlled-delivery-publication-checklist.md` | SFIA — Controlled Delivery Publication Checklist | checklist | absent | Draft, Notion | élevé |
| `method/complementary/controlled-delivery/controlled-delivery-publication-package-summary.md` | SFIA — Controlled Delivery Publication Package Summary | incertain | absent | Notion | élevé |
| `method/complementary/controlled-delivery/controlled-delivery-publication-package.md` | SFIA — Controlled Delivery Publication Package | incertain | absent | Notion | élevé |
| `method/complementary/controlled-delivery/controlled-delivery-publication-prep.md` | SFIA — Controlled Delivery Publication Prep | incertain | absent | Notion | élevé |
| `method/complementary/controlled-delivery/controlled-delivery-standard-hardening-summary.md` | SFIA — Controlled Delivery Standard Hardening Summary | incertain | absent | — | élevé |
| `method/complementary/controlled-delivery/controlled-delivery-standard-summary.md` | SFIA — Controlled Delivery Standard Summary | incertain | absent | REX, archive, candidate, rex | élevé |
| `method/complementary/controlled-delivery/controlled-delivery-standard.md` | SFIA — Controlled Delivery Standard | incertain | absent | Draft, archive, rex | élevé |
| `method/complementary/controlled-delivery/controlled-delivery-template.md` | SFIA — Controlled Delivery Template | incertain | absent | draft | élevé |
| `method/complementary/controlled-delivery/delivery-acceleration-level-3-rex.md` | SFIA — Delivery Acceleration Level 3 REX | incertain | absent | REX, rex | élevé |
| `method/sfia-fast-track/README.md` | SFIA Fast Track | incertain | absent | Audit, Notion, REX, archive, audit | élevé |
| `method/sfia-fast-track/archive/interv360-realization/README.md` | Archive — Interv360 Realization | archive déclarée | absent | Archive | élevé |
| `method/sfia-fast-track/archive/interv360-realization/capitalization-plan.md` | SFIA — Interv360 realization capitalization plan | capitalisation / trajectoire | absent | Draft | élevé |
| `method/sfia-fast-track/archive/interv360-realization/capitalization-summary.md` | SFIA — Interv360 realization capitalization summary | capitalisation / trajectoire | absent | Notion, notion | élevé |
| `method/sfia-fast-track/archive/interv360-realization/notion-integration-plan.md` | SFIA — Realization Notion integration plan | archive déclarée | absent | Draft, Notion | élevé |
| `method/sfia-fast-track/archive/interv360-realization/realization-checklists.md` | SFIA — Realization checklists | archive déclarée | absent | Draft | élevé |
| `method/sfia-fast-track/archive/interv360-realization/realization-deliverables-standard.md` | SFIA — Realization deliverables standard | archive déclarée | absent | Draft | élevé |
| `method/sfia-fast-track/archive/interv360-realization/realization-method.md` | SFIA — Realization preparation method | archive déclarée | absent | Draft | élevé |
| `method/sfia-fast-track/archive/interv360-realization/realization-prompt-family.md` | SFIA — Realization prompt family | archive déclarée | absent | Draft | élevé |
| `method/sfia-fast-track/archive/interv360-realization/realization-templates.md` | SFIA — Realization document templates | archive déclarée | absent | Draft | élevé |
| `method/sfia-fast-track/audit-rex/README.md` | SFIA Fast Track — Audit & REX | incertain | absent | Audit, REX | élevé |
| `method/sfia-fast-track/audit-rex/interv360-application-rex.md` | Interv360 — REX de l'application actuelle | incertain | absent | REX, audit, notion | élevé |
| `method/sfia-fast-track/automation/README.md` | SFIA Fast Track — Automation | incertain | absent | — | élevé |
| `method/sfia-fast-track/automation/sfia-automation-architecture.md` | SFIA Fast Track — Automation Architecture v1.1 | incertain | foundation | Notion, REX, audit | élevé |
| `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | SFIA Prompt Generation Engine v1.1 | incertain | foundation | Notion | élevé |
| `method/sfia-fast-track/automation/sfia-repository-execution-engine.md` | SFIA Repository Execution Engine v1.1 | incertain | foundation | Notion | élevé |
| `method/sfia-fast-track/automation/sfia-validation-engine.md` | SFIA Validation Engine v1.1 | incertain | foundation | Notion | élevé |
| `method/sfia-fast-track/checklists/README.md` | SFIA Fast Track — Checklists | checklist | absent | Notion, notion | élevé |
| `method/sfia-fast-track/checklists/guardrails-checklist.md` | SFIA Fast Track — Guardrails Checklist | checklist | absent | Notion, audit, notion | élevé |
| `method/sfia-fast-track/checklists/notion-publication-checklist.md` | SFIA Fast Track — Notion Publication Checklist | checklist | absent | Audit, Notion | élevé |
| `method/sfia-fast-track/checklists/sfia-validation-checklist.md` | SFIA Validation Checklist v1.2 | checklist | validated | Notion, audit | élevé |
| `method/sfia-fast-track/checklists/validation-checklist.md` | SFIA Fast Track — Validation Checklist | checklist | absent | — | élevé |
| `method/sfia-fast-track/core/README.md` | SFIA Fast Track — Core | méthode core | absent | Notion | élevé |
| `method/sfia-fast-track/core/sfia-architecture-standards.md` | SFIA Fast Track — Architecture Standards | méthode core | absent | Notion, migration | élevé |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | SFIA ChatGPT ↔ Cursor Operating Model v1.1 | méthode core | foundation | Notion | élevé |
| `method/sfia-fast-track/core/sfia-consolidation-roadmap.md` | SFIA Fast Track — Consolidation Roadmap | méthode core | absent | Audit, Notion, REX, audit | élevé |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Guide de routage des cycles SFIA | méthode core | validated | candidate | élevé |
| `method/sfia-fast-track/core/sfia-global-capitalization.md` | SFIA Fast Track — Global Capitalization | capitalisation / trajectoire | absent | REX, audit | élevé |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | SFIA Knowledge Layer v1.1 | méthode core | foundation | Archive, Audit, Notion, REX, canonique | élevé |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | SFIA Rules & Guardrails v1.1 | méthode core | foundation | Notion, canonique | élevé |
| `method/sfia-fast-track/core/sfia-rules-update.md` | SFIA Fast Track — Rules Update | méthode core | absent | Audit, Notion, REX, audit | élevé |
| `method/sfia-fast-track/cycles/README.md` | SFIA Fast Track — Cycles | incertain | absent | — | élevé |
| `method/sfia-fast-track/cycles/interv360-final-capitalization.md` | SFIA Fast Track — Interv360 Final Capitalization | capitalisation / trajectoire | absent | notion | élevé |
| `method/sfia-fast-track/cycles/interv360-mvp-delivery-capitalization.md` | SFIA Fast Track — MVP Delivery Capitalization | capitalisation / trajectoire | absent | Audit | élevé |
| `method/sfia-fast-track/documentation/README.md` | SFIA Fast Track — Documentation | incertain | absent | Notion | élevé |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-audit.md` | SFIA Foundation Documents — Audit | capitalisation / trajectoire | absent | Audit, Notion, audit, canonique | élevé |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/sfia-foundation-documents-inventory.md` | SFIA Foundation Documents — Inventory | capitalisation / trajectoire | absent | Notion, candidate | élevé |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/README.md` | SFIA v1.1 Audits | capitalisation / trajectoire | absent | Audit, audit | élevé |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md` | SFIA v1.1 P2 Cross-Reference Audit | capitalisation / trajectoire | candidate | Audit, Candidate, audit, candidate | élevé |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/README.md` | SFIA Foundation v1.1 Closure | capitalisation / trajectoire | absent | — | élevé |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md` | SFIA Foundation v1.1 Closure Status | capitalisation / trajectoire | closed | Notion, audit | élevé |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-closure/sfia-foundation-v1.1-post-merge-status.md` | PR #82 — SFIA Foundation v1.1 Post-Merge Status | capitalisation / trajectoire | absent | Audit, audit, canonique | élevé |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md` | SFIA v1.1 — Capitalization Inputs Inventory | capitalisation / trajectoire | absent | Audit, REX, audit, canonique, rex | élevé |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md` | SFIA v1.1 — Foundation Impact Matrix | capitalisation / trajectoire | absent | Audit, Draft, Notion, REX, archive | élevé |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md` | SFIA Foundation v1.1 — Consolidation Plan | capitalisation / trajectoire | absent | Audit, Notion, REX, audit | élevé |
| `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md` | SFIA Foundation v1.1 — Evolution Matrix | capitalisation / trajectoire | absent | Notion | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-3-documentation-routing-audit.md` | SFIA 3.0 — Audit de cartographie documentaire | capitalisation / trajectoire | absent | Audit, MCP, mcp, notion, v3.0 | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-documentation-capitalization-audit.md` | SFIA/SFA Documentation Capitalization Audit | capitalisation / trajectoire | absent | Audit, Draft, Notion, REX, audit | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` | SFIA Documentation Completeness Matrix | capitalisation / trajectoire | absent | Audit, Notion, archive, baseline | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` | SFIA v2.5 — REX Chantiers360 post-MVP — Roadmap de capitalisation | capitalisation / trajectoire | absent | Baseline, Candidate, REX, baseline, candidate | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-chantiers360-post-mvp-capitalization-close.md` | SFIA v2.5 — Clôture de capitalisation Chantiers360 post-MVP | capitalisation / trajectoire | absent | Baseline, Candidate, MCP, REX, baseline | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2.5/2026-07-11-sfia-v2.5-review-handoff-routing-fix-rex.md` | SFIA v2.5 — REX — Review Handoff routing fix | capitalisation / trajectoire | Candidate — traçabilité correctif | Baseline, Candidate, REX, baseline, candidate | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md` | SFIA v2.6 — Repository Cleanup — Cadrage du chantier | capitalisation / trajectoire | Candidate — cadrage du chantier SFIA v2.6 | Baseline, Candidate, REX, archive, audit | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-and-delivery-vision.md` | SFIA v2.0 — Automation and Delivery Vision | capitalisation / trajectoire | Candidate — validation Morris requise | Candidate, Notion, baseline, candidate, canonique | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-automation-levels.md` | SFIA v2.0 — Automation Levels | capitalisation / trajectoire | Candidate — validation Morris requise | Audit, Baseline, Candidate, Notion, baseline | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-delivery-qa-test-standard.md` | SFIA v2.0 — Delivery QA / Test Standard | capitalisation / trajectoire | absent | draft | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-coverage-standard.md` | SFIA v2.0 — Design Coverage Standard | capitalisation / trajectoire | absent | draft | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-design-figma-cycle-standard.md` | SFIA v2.0 — Design Figma MVP Cycle Standard | capitalisation / trajectoire | absent | draft | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-figma-fidelity-gate-standard.md` | SFIA v2.0 — Figma Fidelity Gate Standard | capitalisation / trajectoire | absent | draft | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-incremental-delivery-closure-standard.md` | SFIA v2.0 — Incremental Delivery Closure Standard | capitalisation / trajectoire | absent | draft | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-method-versioning-standard.md` | SFIA v2.x — Method Versioning Standard | capitalisation / trajectoire | absent | baseline, v3.0 | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-decision.md` | SFIA v2.0 — Pilot Selection Decision | capitalisation / trajectoire | Candidate — validation Morris requise | Baseline, Candidate, Notion, baseline, candidate | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-pilot-selection-scoring.md` | SFIA v2.0 — Pilot Selection Scoring | capitalisation / trajectoire | Candidate — décision Morris requise | Baseline, Candidate, Notion, baseline, candidate | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-project-bootstrap-standard.md` | SFIA v2.0 — Project Bootstrap Standard | capitalisation / trajectoire | Candidate — validation Morris requise | Baseline, Candidate, Notion, baseline, candidate | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2-technical-architecture-decision-documentation-standard.md` | SFIA v2.0 — Technical Architecture & Decision Documentation Standard | capitalisation / trajectoire | absent | draft | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md` | SFIA v2.4 — Consolidation & Operating Efficiency Standard | capitalisation / trajectoire | absent | Baseline, REX, rex, v3.0 | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4.1-documentation-status-promotion-report.md` | SFIA v2.4.1 — Documentation Status Promotion Report | capitalisation / trajectoire | absent | Baseline, CANDIDATE, Candidate, audit, draft | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` | Méthode des cycles projet SFIA v2.5 candidate | capitalisation / trajectoire | absent | Baseline, Candidate, baseline, candidate | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-plan.md` | SFIA v2.5 — Project Plan | capitalisation / trajectoire | absent | Baseline, Candidate, baseline, candidate, v3.0 | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-source-routing-map-candidate.md` | SFIA v2.5 candidate — Source routing map | capitalisation / trajectoire | absent | Baseline, Candidate, MCP, baseline, candidate | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-07-sfia-3-opening-report.md` | SFIA 3.0 — Opening Report | capitalisation / trajectoire | absent | MCP, mcp | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-08-sfia-3-exploration-closure.md` | SFIA 3.0 — Clôture d'exploration et retour trajectoire v2.4 | capitalisation / trajectoire | Clôture d'exploration | Baseline, baseline, mcp, v3.0 | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/2026-07-08-sfia-3-runtime-loop-validation.md` | SFIA 3.0 — Validation de la boucle runtime post-PR #142 | capitalisation / trajectoire | absent | MCP, canonique, mcp | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-cursor-integration-flow.md` | SFIA MCP — Rapport d'essai intégration Cursor (flux réel L1) | capitalisation / trajectoire | absent | MCP, mcp | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-cursor-interactive-validation.md` | SFIA MCP — Validation interactive Cursor UI v0.4.0 | capitalisation / trajectoire | absent | MCP, mcp, notion | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-e2e-v040-flow.md` | SFIA MCP — Flux bout-en-bout E2E v0.4.0 | capitalisation / trajectoire | absent | MCP, mcp | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l2-handoff-experiment.md` | SFIA MCP — Rapport d'expérimentation L2 handoff | capitalisation / trajectoire | absent | MCP, mcp | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-confined-handoff-experiment.md` | SFIA MCP — Rapport d'expérimentation L3 confiné handoff | capitalisation / trajectoire | absent | MCP, audit, mcp | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-l3-cycle-report-experiment.md` | SFIA MCP — Rapport d'expérimentation L3 cycle report | capitalisation / trajectoire | absent | Audit, MCP, audit, mcp | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-mcp-mvp-l1-experiment.md` | SFIA MCP v2.0 — Rapport d'expérimentation MVP L1 | capitalisation / trajectoire | absent | MCP, audit, mcp | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-cursor-task-runner-experiment.md` | SFIA Cursor Task Runner — Experiment Report | capitalisation / trajectoire | absent | MCP, audit, mcp | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/experiments/2026-07-07-sfia-orchestrator-bridge-architecture-and-mvp.md` | SFIA Orchestrator Bridge — Architecture & MVP Report | capitalisation / trajectoire | absent | MCP, audit, mcp | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-documentation-links-correction-report.md` | SFIA 3.0 — Rapport de correction liens Markdown | capitalisation / trajectoire | absent | audit, canonique, mcp | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-documentation-realignment-report.md` | SFIA 3.0 — Rapport de réalignement documentaire | capitalisation / trajectoire | absent | audit, mcp | élevé |
| `method/sfia-fast-track/documentation/capitalization/sfia-v3/sfia-3-pr-readiness-report.md` | SFIA 3.0 — Rapport PR readiness (documentation / MCP) | capitalisation / trajectoire | absent | MCP, audit, canonique, mcp, notion | élevé |
| `method/sfia-fast-track/documentation/documentation-audit.md` | SFIA Fast Track — Documentation Audit | incertain | absent | Audit, Notion, REX, archive, audit | élevé |
| `method/sfia-fast-track/documentation/documentation-structure-target.md` | SFIA Fast Track — Documentation Structure Target | incertain | absent | Notion, REX, archive, audit, notion | élevé |
| `method/sfia-fast-track/documentation/notion-publication-plan.md` | SFIA Fast Track — Notion Publication Plan | incertain | absent | Audit, Notion, REX, audit, notion | élevé |
| `method/sfia-fast-track/documentation/notion-target-content-map.md` | SFIA Fast Track — Notion Target Content Map | incertain | absent | Archive, Notion, REX, archive, audit | élevé |
| `method/sfia-fast-track/documentation/notion/sfia-notion-content-categorization.md` | SFIA Notion Content Categorization | incertain | Candidate | Archive, Candidate, Notion, REX, archive | élevé |
| `method/sfia-fast-track/documentation/notion/sfia-notion-current-space-inventory.md` | SFIA Notion Current Space Inventory | incertain | Candidate | Archive, Candidate, Notion, archive, audit | élevé |
| `method/sfia-fast-track/documentation/notion/sfia-notion-live-export-audit.md` | SFIA Notion Live Export Audit | incertain | Candidate | ARCHIVE, Audit, Candidate, Notion, archive | élevé |
| `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-dry-run-report.md` | SFIA Notion Provisioning — Dry-run Report | incertain | candidate | Archive, NOTION, Notion, candidate, notion | élevé |
| `method/sfia-fast-track/documentation/notion/sfia-notion-provisioning-engine-design.md` | SFIA Notion Provisioning Engine — Design | incertain | Candidate | Archive, Audit, Candidate, Notion, archive | élevé |
| `method/sfia-fast-track/documentation/notion/sfia-notion-publication-track-pause-decision.md` | SFIA Notion Publication Track Pause Decision | incertain | Validated | Audit, NOTION, Notion, notion | élevé |
| `method/sfia-fast-track/documentation/notion/sfia-notion-target-model-and-integration-plan.md` | SFIA Notion Target Model and Integration Plan | incertain | Candidate | Archive, Candidate, Notion, archive, candidate | élevé |
| `method/sfia-fast-track/documentation/workspace-audit/final-architecture-review/sfa-workspace-final-architecture-audit.md` | SFA Workspace — Final Architecture Audit | audit antérieur | absent | Audit, Notion, archive, audit | élevé |
| `method/sfia-fast-track/documentation/workspace-audit/interv360/interv360-folder-normalization-audit.md` | Interv360 — Folder Normalization Audit | audit antérieur | absent | Audit, Notion, archive, audit, rex | élevé |
| `method/sfia-fast-track/documentation/workspace-audit/operational-cleanup-report.md` | SFIA Workspace — Operational Cleanup Report | audit antérieur | absent | Archive, Audit, Notion, REX, archive | élevé |
| `method/sfia-fast-track/documentation/workspace-audit/pr-81-post-merge-status.md` | PR #81 — Post-Merge Status | audit antérieur | absent | Notion, audit, notion | élevé |
| `method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-audit.md` | SFIA Workspace — Cleanup Round 2 Audit | audit antérieur | absent | Archive, Audit, Notion, REX, archive | élevé |
| `method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-plan.md` | SFIA Workspace — Cleanup Round 2 Plan | audit antérieur | absent | Archive, Notion, REX, archive, audit | élevé |
| `method/sfia-fast-track/documentation/workspace-audit/round-2/sfia-workspace-cleanup-round-2-report.md` | SFIA Workspace — Cleanup Round 2 Report | audit antérieur | absent | Archive, Notion, archive, audit, notion | élevé |
| `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-global-audit.md` | SFIA Workspace — Global Audit | audit antérieur | absent | Audit, Notion, archive, audit, mcp | élevé |
| `method/sfia-fast-track/documentation/workspace-audit/sfia-workspace-migration-plan.md` | SFIA Workspace — Migration Plan | audit antérieur | absent | Audit, Migration, REX, archive, audit | élevé |
| `method/sfia-fast-track/templates/audit-template.md` | Audit — <Sujet> | incertain | absent | Audit, audit | élevé |
| `method/sfia-fast-track/templates/cycle-template.md` | SFIA Fast Track — Cycle Template | incertain | absent | — | élevé |
| `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md` | SFIA Fast Track — MVP Delivery Pattern Template | incertain | absent | audit | élevé |
| `method/sfia-fast-track/templates/post-merge-template.md` | Post-merge Status | incertain | absent | Notion | élevé |
| `method/sfia-fast-track/templates/pr-body-template.md` | — | incertain | absent | — | faible |
| `method/sfia-fast-track/templates/rex-template.md` | REX — <Sujet> | incertain | absent | REX | élevé |
| `method/sfia-fast-track/ui/README.md` | SFIA Fast Track — UI | incertain | absent | — | élevé |
| `method/sfia-fast-track/ui/figma-design-first-ui-method.md` | SFIA Fast Track — Figma Design-first UI Method | incertain | absent | — | élevé |
| `prompts/README.md` | SFIA Prompts | prompt | absent | Candidate | élevé |
| `prompts/architecture/PROMPT-ARCH-001-revue-integrations-et-erreurs.md` | PROMPT-ARCH-001 — Revue intégrations et erreurs | prompt | absent | Draft, candidate | élevé |
| `prompts/architecture/functional-architecture-prompt-family.md` | Famille de prompts — Architecture fonctionnelle détaillée | prompt | absent | Draft, Notion | élevé |
| `prompts/bpmn/bpmn-prompt-family.md` | SFIA — Famille de prompts BPMN | prompt | absent | Audit, Draft, Notion | élevé |
| `prompts/governance/sfia-3-morris-gate.md` | SFIA 3.0 — Morris Gate (prompt générique) | prompt | absent | audit, mcp | élevé |
| `prompts/prompt-catalog.md` | SFIA Prompt Catalog v1.1 | prompt | candidate | Audit, Candidate, Draft, candidate | élevé |
| `prompts/qa/delivery-qa-test-prompt-family.md` | Famille de prompts — Delivery QA / Test | prompt | Draft — capitalisation méthode | Draft | élevé |
| `prompts/qa/qa-tester-prompt-family.md` | Famille de prompts — QA / Testeur | prompt | absent | Candidate | élevé |
| `prompts/security/PROMPT-SEC-001-revue-canal-email-securise.md` | PROMPT-SEC-001 — Revue canal email sécurisé | prompt | absent | Draft, audit, candidate | élevé |
| `prompts/templates/01-create-foundation-document.md` | Create Foundation Document | template prompt | candidate | Candidate, Notion, candidate | élevé |
| `prompts/templates/02-update-document-v1-1.md` | Update Document to v1.1 | template prompt | candidate | Candidate, Notion, candidate | élevé |
| `prompts/templates/03-create-operational-checklist.md` | Create Operational Checklist | template prompt | candidate | Candidate, Notion, candidate | élevé |
| `prompts/templates/04-validate-cursor-result.md` | Validate Cursor Result | template prompt | candidate | Candidate, Notion, audit, candidate | élevé |
| `prompts/templates/05-validate-pr-readiness.md` | Validate PR Readiness | template prompt | candidate | Candidate, DRAFT, Notion, candidate | élevé |
| `prompts/templates/06-prepare-pr-summary.md` | Prepare PR Summary | template prompt | candidate | Candidate, Notion, candidate | élevé |
| `prompts/templates/07-write-post-merge-status.md` | Write Post-Merge Status | template prompt | candidate | Candidate, Notion, audit, candidate | élevé |
| `prompts/templates/08-capitalize-method-asset.md` | Capitalize Method Asset | template prompt | candidate | Candidate, Notion, candidate, draft | élevé |
| `prompts/templates/09-prepare-notion-mapping.md` | Prepare Notion Mapping | template prompt | candidate | Candidate, Notion, candidate, notion | élevé |
| `prompts/templates/10-perform-safe-repository-cleanup.md` | Perform Safe Repository Cleanup | template prompt | candidate | Audit, Candidate, Notion, audit, candidate | élevé |
| `prompts/templates/README.md` | SFIA Prompt Templates | template prompt | absent | Notion, notion | élevé |
| `prompts/templates/sfia-cycle-execution-template.md` | SFIA Cycle Execution — Template d'instanciation v2.5 candidate | template prompt | SFIA v2.5 candidate — non validé comme baseline | Baseline, Candidate, baseline, candidate, canonique | élevé |
| `prompts/templates/sfia-prompt-templates-context-pack.md` | — | template prompt | generated | Candidate, candidate, notion | élevé |
| `prompts/tooling/mcp/sfia-3-cycle-router.md` | SFIA 3.0 — Cycle Router (prompt générique) | prompt | absent | MCP, mcp | élevé |
| `prompts/tooling/mcp/sfia-3-report-analyzer.md` | SFIA 3.0 — Report Analyzer (prompt générique) | prompt | absent | MCP, mcp | élevé |
| `prompts/tooling/mcp/sfia-3-task-builder.md` | SFIA 3.0 — Task Builder (prompt générique) | prompt | absent | MCP, mcp | élevé |
| `prompts/tooling/penpot/penpot-design-agent-prompt-family.md` | Famille de prompts — Penpot Design Agent SFIA | prompt | absent | Draft, MCP, Notion | élevé |
| `prompts/ux-ui/figma-fidelity-gate-prompt-family.md` | Famille de prompts — Figma Fidelity Gate / Spike | prompt | Draft — capitalisé depuis Chantiers360 v2 (PR #104, #105) | Draft, migration | élevé |
| `prompts/ux-ui/ux-ui-reprise-prompt-family.md` | Famille de prompts — Reprise UX/UI documentaire | prompt | absent | Draft, Notion | élevé |

## Annexe D — Matrice maturité (voir §16)

## Annexe E — Références cassées potentielles (échantillon)

| Source | Cible | Nature |
|--------|-------|--------|
| method/complementary/controlled-delivery/*.md | ../../projects/interv360/archive/... | Chemin relatif incorrect (devrait ../../../projects/) |
| docs/templates/tooling/penpot/ | cibles template manquantes | Fichiers référencés absents du index Git |
| .cursor/mcp-templates/ | liens .md internes | Templates sans md trackés |

## Annexe F — Chevauchements potentiels (détail §15)

## Annexe G — Documents non complètement analysés (§21)

## Annexe H — Git Review Index

| Source | Rôle |
|--------|------|
| prompts/templates/sfia-cycle-execution-template.md | Template cycles |
| method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md | Operating model |
| method/sfia-fast-track/core/sfia-cycle-routing-guide.md | Routing |
| method/sfia-fast-track/core/sfia-rules-and-guardrails.md | Rules |
| method/.../sfia-v2.6/2026-07-11-sfia-v2.6-repository-cleanup-framing.md | Cadrage v2.6 |
| documentation-structure-target.md | Input historique |
| sfia-workspace-migration-plan.md | Input historique |
| sfia-workspace-cleanup-round-2-plan.md | Input historique |
| sfia-notion-live-export-audit.md | Input historique |

---

*SFIA v2.6 candidate — Audit read-only étape 1 — Morris décide.*


---

## Diff utile

```diff

```

---

## Garde-fous confirmés

- Aucun fichier existant modifié
- Aucun standard cible validé
- Aucune classification garder/archiver/supprimer
- Aucune migration
- sfia-v3/MCP signalés hors trajectoire

---

## Review pack coverage

| Critère | Valeur |
|---------|--------|
| created files full content | **yes** |
| modified sections complete | n/a |
| useful diff included | **yes** |
| synthesis only | **no** |
| **verdict** | **complete** |


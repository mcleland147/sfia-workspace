# SFIA STUDIO NEXT — FULL REVIEW PACK
# MACRO-LOT R0-B / CURSOR EXECUTION PACK — BINARY VISION INTEGRATION + REMOTE PROOF

## 1. Timestamp
2026-11-01T14:18:21+01:00 (Europe/Paris)

## 2. Objectif
Finaliser l'intégration des trois schémas de vision originaux dans `mcleland147/sfia-workspace` sur la branche candidate `docs/sfia-studio-next-r0b-foundation-01` ; synchroniser index vision + Roadmap ; contrôler coexistence routage historique/Next ; publier STRICTEMENT sur la branche candidate ; vérifier SHA-256 distants ; produire Review Pack FULL + Review Handoff. Aucune PR/merge.

## 3. Local Git Truth Check

| Champ | Valeur observée |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` (`origin` = https://github.com/mcleland147/sfia-workspace.git) |
| Branche locale initiale | `main` (worktree stale) → checkout `docs/sfia-studio-next-r0b-foundation-01` |
| Branche d'exécution | `docs/sfia-studio-next-r0b-foundation-01` |
| HEAD avant lot | `42cf61cac0e3be3da313d27bb27d3ee92187a359` (= origin candidate) |
| HEAD après lot | `9ffd699acca9ed66d5235f025f6af3429fde6597` |
| Commit binaire PNG | `3d3d09eca427e6dcaaec589a6a64561227f8a622` |
| origin/main | `cd2020c82ecdcdaa073debd6985ee9c113bfba3e` |
| Avance vs main | 17 commits ahead / 0 behind |
| Worktree hors allowlist | `.tmp-sfia-review/chatgpt-review.md` modifié (artefact local, non commité) |
| Force-push / reset / rebase | NON |
| Push main | NON |

## 4. Git Review Index

```text
Git Review Index
- base branch : origin/main = cd2020c82ecdcdaa073debd6985ee9c113bfba3e
- HEAD avant : 42cf61cac0e3be3da313d27bb27d3ee92187a359
- HEAD après : 9ffd699acca9ed66d5235f025f6af3429fde6597
- fichiers modifiés :
  - projects/sfia-studio-next/cadrage/vision-cible/README.md
  - projects/sfia-studio-next/governance/roadmap.md
- fichiers créés :
  - projects/sfia-studio-next/cadrage/vision-cible/assets/01-pilote-nora-capacites.png
  - projects/sfia-studio-next/cadrage/vision-cible/assets/02-cockpit-architecture-conceptuelle.png
  - projects/sfia-studio-next/cadrage/vision-cible/assets/03-mission-execution-restitution.png
- commits créés :
  - 3d3d09ec docs(studio-next): integrate three original vision PNGs on R0-B candidate
  - 9ffd699a docs(studio-next): mark three vision PNGs integrated after remote proof
- tests / validations :
  - SHA-256 pack = cible locale = blobs origin/candidate
  - signature PNG 89 50 4E 47 0D 0A 1A 0A
  - git diff --check / --cached --check PASS
  - allowlist exacte 5 chemins (puis 1 pour roadmap post-preuve)
  - routage §4.3.0a/§4.3.0b + template §2.0.G/§2.0.H coexistence STATIC PASS
  - CI branch : NOT OBSERVED (gh run list vide)
- diff stat (lot) :
  - 3 PNG binaires ajoutés (79859 / 97431 / 90573 octets)
  - README + roadmap mis à jour
- diff name-status :
  - A assets/01-pilote-nora-capacites.png
  - A assets/02-cockpit-architecture-conceptuelle.png
  - A assets/03-mission-execution-restitution.png
  - M cadrage/vision-cible/README.md
  - M governance/roadmap.md
- décisions Morris requises : GO PR/merge distinct ; application instructions ChatGPT ; CI/intégration
- review pack : full
- Fake/Real applicable : N/A (intégration documentaire/binaire, pas de runtime Next)
- niveau de preuve déclaré : DETERMINISTIC Git remote SHA-256 sur branche candidate ; NON REAL produit ; NON ADOPTED
- realism gaps : routage Next pas sur main ; ChatGPT instructions non appliquées ; CI non exécutée ; naming CANDIDATE encore dans fichiers partagés
- réserves : voir §11
```

## 5. Sources consultées (rôle + sections utiles)

| Source | Rôle | Extraits / sections |
| --- | --- | --- |
| Pack `PROMPT_CURSOR.txt` + `MANIFEST_SHA256.txt` | Contrat d'exécution R0-B | Allowlist, SHA attendus, GO borné, verdict PASS |
| `governance/SEF.md` | Méthode construction Next | Macro-lots, preuves/gates, §10 autorisations documentaires |
| `governance/roadmap.md` | État R0-B / capacité suivante | Avant : PNG NOT IN GIT ; après : INTEGRATED ON CANDIDATE |
| `governance/decisions/2026-11-01-r0a-sef-v02-validation.md` | Décisions Morris R0-A/R0-B | GO vision + routage ; pas PR/merge ; réserve binaire levée par ce lot |
| `governance/product-naming-conventions.md` | Naming VALIDATED MORRIS | Statut VALIDATED ; hors écriture ce lot |
| `cadrage/vision-cible/README.md` | Index vision | Avant : À INTÉGRER ; après : liens + assets |
| `method/.../sfia-cycle-routing-guide.md` §4.3.0a/§4.3.0b | Routage historique vs Next | Coexistence ; Next prioritaire par périmètre ; READ-ONLY |
| `prompts/templates/sfia-cycle-execution-template.md` §2.0.H / §7 / §7.10 | Template v2.6 | Pre-check Next ; Review Pack FULL ; handoff publish-in-cycle |
| `governance/chatgpt-project-instructions-next.md` | Contexte | Présent Git ≠ appliqué ChatGPT |
| Doctrine produit v3 30–37 | Référence métier | Lecture ponctuelle non nécessaire pour import binaire |

## 6. Assertions statiques routage Next / historique

- §4.3.0a présent et borné à `projects/sfia-studio/` ; désambiguïsation Next explicite.
- §4.3.0b présent ; sources SEF/Roadmap/décisions/vision/naming ; STOP Next documenté.
- Template §2.0.G historique vs §2.0.H Next : sélection par périmètre avant pre-check.
- Template version v2.6 inchangée dans ce lot (fichiers partagés non modifiés).
- SEF, Roadmap, décisions, naming, vision README présents sur branche.
- Runtime Next : N/A — NON IMPLÉMENTÉ.
- **Incohérence signalée (non corrigée — hors allowlist) :** guide §4.3.0b item 7 et template §2.0.H item 7 libellent encore le naming **CANDIDATE**, alors que `product-naming-conventions.md` + décision Morris = **VALIDATED BY MORRIS (2026-11-01)**.

## 7. Fichiers créés — PNG (identification binaire complète)

| Fichier | Taille | Dimensions | Type | SHA-256 pack/local/remote |
| --- | --- | --- | --- | --- |
| `.../assets/01-pilote-nora-capacites.png` | 79859 | 1172×664 RGBA | PNG `89504E470D0A1A0A` | `df80a9470c32d5f18aa0a21087300648f80dde5beec4f3fbba68d3d61073f1ef` |
| `.../assets/02-cockpit-architecture-conceptuelle.png` | 97431 | 1172×828 RGBA | PNG `89504E470D0A1A0A` | `1c12dedcca1ec1060636d9197b9e6039ef8aaa6edd99763a4cc74e710b139f50` |
| `.../assets/03-mission-execution-restitution.png` | 90573 | 1172×912 RGBA | PNG `89504E470D0A1A0A` | `b84363a0a3e70eb94013d998975f8646c83daf67013ffb5888e60d704d5fcede` |

Preuve distante : `git show origin/docs/sfia-studio-next-r0b-foundation-01:<path>` → SHA-256 identiques (octets récupérés depuis origin, pas uniquement locaux). Aucune recompression / redessin.

URL vérifiable assets :
https://github.com/mcleland147/sfia-workspace/tree/docs/sfia-studio-next-r0b-foundation-01/projects/sfia-studio-next/cadrage/vision-cible/assets

Commit binaire :
https://github.com/mcleland147/sfia-workspace/commit/3d3d09eca427e6dcaaec589a6a64561227f8a622

HEAD roadmap :
https://github.com/mcleland147/sfia-workspace/commit/9ffd699acca9ed66d5235f025f6af3429fde6597

## 8. Contenu complet — README modifié

```markdown
# Vision cible — trois schémas fournis par Morris

**Nature :** référentiel initial de vision fonctionnelle et d'expérience ; **VISION FONDATRICE** — **pas une architecture technique validée, ni un contrat complet d'implémentation, ni une preuve REAL**.

**Origine :** trois captures partagées par Morris en conversation, issues de travaux d'octobre 2026, réaffirmées comme point de départ de la reconstruction de SFIA Studio Next. Fichiers binaires originaux intégrés sous les noms fonctionnels ci-dessous (empreintes SHA-256 inchangées).

## Schéma 01 — Pilote ↔ Nora ↔ capacités

**Fichier :** [assets/01-pilote-nora-capacites.png](assets/01-pilote-nora-capacites.png)

**Nom fonctionnel :** `01-pilote-nora-capacites.png`

**SHA-256 (original fourni / octets Git)** : `df80a9470c32d5f18aa0a21087300648f80dde5beec4f3fbba68d3d61073f1ef`.

Le Pilote exprime, échange, arbitre et décide d'agir. Nora comprend, analyse, recommande, planifie, coordonne et interprète. Elle mobilise GitHub, Cursor ou d'autres outils au moment pertinent. Contexte projet, autorisations adaptées, traçabilité, preuves et continuité sont transversaux.

## Schéma 02 — Cockpit unique et responsabilités

**Fichier :** [assets/02-cockpit-architecture-conceptuelle.png](assets/02-cockpit-architecture-conceptuelle.png)

**Nom fonctionnel :** `02-cockpit-architecture-conceptuelle.png`

**SHA-256 (original fourni / octets Git)** : `1c12dedcca1ec1060636d9197b9e6039ef8aaa6edd99763a4cc74e710b139f50`.

Une expérience nominale unique associe le Pilote et Nora ; le Project Assistant prépare et orchestre les missions, l'OA Native Backbone matérialise l'autorité et les preuves, les capacités techniques exécutent sous contrats/permissions. La capture précise que cette architecture cible conceptuelle n'est pas encore intégralement implémentée ni validée en REAL.

## Schéma 03 — Mission gouvernée et restitution

**Fichier :** [assets/03-mission-execution-restitution.png](assets/03-mission-execution-restitution.png)

**Nom fonctionnel :** `03-mission-execution-restitution.png`

**SHA-256 (original fourni / octets Git)** : `b84363a0a3e70eb94013d998975f8646c83daf67013ffb5888e60d704d5fcede`.

Dialogue Pilote/Nora → préparation du contrat → GO humain « Exécuter » sur le contrat précis → exécution Cursor en lots jusqu'à achèvement/échec/STOP → rapport, preuves et analyse Nora → retour au Pilote pour arbitrage et éventuelle nouvelle mission.

## Statut d'intégration

- **Documentation des trois sources :** intégrée sur la branche R0-B.
- **Fichiers binaires PNG originaux :** présents sous `cadrage/vision-cible/assets/` avec les trois noms fonctionnels ci-dessus ; empreintes SHA-256 identiques aux originaux du pack d'exécution.
- **Liens relatifs :** les trois schémas sont accessibles depuis cet index.
- Ces visuels restent **VISION FONDATRICE** : ils inspirent et cadrent R1–R4, sans valider d'architecture technique ni de preuve REAL.

## Gouvernance de lecture

Ces trois images **inspirent et cadrent R1–R4**, mais ne préjugent pas les choix définitifs d'orchestration, d'architecture OA, de persistance, d'UX détaillée ou de modèle de données. Les contrats nécessaires seront instruits et validés dans leurs cycles de conception, avec décisions Morris applicables.

```

### Diff utile README (commit 3d3d09ec)

```diff
commit 3d3d09eca427e6dcaaec589a6a64561227f8a622
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Sun Nov 1 14:17:15 2026 +0100

    docs(studio-next): integrate three original vision PNGs on R0-B candidate
    
    Import byte-identical founding diagrams under vision-cible/assets with
    index links and LOCAL roadmap status pending remote SHA-256 proof.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/cadrage/vision-cible/README.md b/projects/sfia-studio-next/cadrage/vision-cible/README.md
index b9a5dbc1..3854bf75 100644
--- a/projects/sfia-studio-next/cadrage/vision-cible/README.md
+++ b/projects/sfia-studio-next/cadrage/vision-cible/README.md
@@ -1,42 +1,45 @@
 # Vision cible — trois schémas fournis par Morris
 
-**Nature :** référentiel initial de vision fonctionnelle et d'expérience ; **pas une architecture technique validée, ni un contrat complet d'implémentation**.
+**Nature :** référentiel initial de vision fonctionnelle et d'expérience ; **VISION FONDATRICE** — **pas une architecture technique validée, ni un contrat complet d'implémentation, ni une preuve REAL**.
 
-**Origine :** trois captures partagées par Morris en conversation, issues de travaux d'octobre 2026, réaffirmées comme point de départ de la reconstruction de SFIA Studio Next.
+**Origine :** trois captures partagées par Morris en conversation, issues de travaux d'octobre 2026, réaffirmées comme point de départ de la reconstruction de SFIA Studio Next. Fichiers binaires originaux intégrés sous les noms fonctionnels ci-dessous (empreintes SHA-256 inchangées).
 
 ## Schéma 01 — Pilote ↔ Nora ↔ capacités
 
-**Fichier source :** `Capture d’écran 2026-10-22 à 15.51.25(1).png`.
+**Fichier :** [assets/01-pilote-nora-capacites.png](assets/01-pilote-nora-capacites.png)
 
-**SHA-256 (original fourni)** : `df80a9470c32d5f18aa0a21087300648f80dde5beec4f3fbba68d3d61073f1ef`.
+**Nom fonctionnel :** `01-pilote-nora-capacites.png`
+
+**SHA-256 (original fourni / octets Git)** : `df80a9470c32d5f18aa0a21087300648f80dde5beec4f3fbba68d3d61073f1ef`.
 
 Le Pilote exprime, échange, arbitre et décide d'agir. Nora comprend, analyse, recommande, planifie, coordonne et interprète. Elle mobilise GitHub, Cursor ou d'autres outils au moment pertinent. Contexte projet, autorisations adaptées, traçabilité, preuves et continuité sont transversaux.
 
 ## Schéma 02 — Cockpit unique et responsabilités
 
-**Fichier source :** `Capture d’écran 2026-10-23 à 02.47.15(1).png`.
+**Fichier :** [assets/02-cockpit-architecture-conceptuelle.png](assets/02-cockpit-architecture-conceptuelle.png)
+
+**Nom fonctionnel :** `02-cockpit-architecture-conceptuelle.png`
 
-**SHA-256 (original fourni)** : `1c12dedcca1ec1060636d9197b9e6039ef8aaa6edd99763a4cc74e710b139f50`.
+**SHA-256 (original fourni / octets Git)** : `1c12dedcca1ec1060636d9197b9e6039ef8aaa6edd99763a4cc74e710b139f50`.
 
 Une expérience nominale unique associe le Pilote et Nora ; le Project Assistant prépare et orchestre les missions, l'OA Native Backbone matérialise l'autorité et les preuves, les capacités techniques exécutent sous contrats/permissions. La capture précise que cette architecture cible conceptuelle n'est pas encore intégralement implémentée ni validée en REAL.
 
 ## Schéma 03 — Mission gouvernée et restitution
 
-**Fichier source :** `Capture d’écran 2026-10-22 à 16.30.08(1).png`.
+**Fichier :** [assets/03-mission-execution-restitution.png](assets/03-mission-execution-restitution.png)
+
+**Nom fonctionnel :** `03-mission-execution-restitution.png`
 
-**SHA-256 (original fourni)** : `b84363a0a3e70eb94013d998975f8646c83daf67013ffb5888e60d704d5fcede`.
+**SHA-256 (original fourni / octets Git)** : `b84363a0a3e70eb94013d998975f8646c83daf67013ffb5888e60d704d5fcede`.
 
 Dialogue Pilote/Nora → préparation du contrat → GO humain « Exécuter » sur le contrat précis → exécution Cursor en lots jusqu'à achèvement/échec/STOP → rapport, preuves et analyse Nora → retour au Pilote pour arbitrage et éventuelle nouvelle mission.
 
 ## Statut d'intégration
 
 - **Documentation des trois sources :** intégrée sur la branche R0-B.
-- **Fichiers binaires PNG originaux : À INTÉGRER.** La présente version ne prétend pas contenir les images dans Git. Elles sont conservées dans la conversation et identifiées par leur empreinte.
-- **Chemins cibles recommandés :**
-  - `cadrage/vision-cible/assets/01-pilote-nora-capacites.png`
-  - `cadrage/vision-cible/assets/02-cockpit-architecture-conceptuelle.png`
-  - `cadrage/vision-cible/assets/03-mission-execution-restitution.png`
-- Lors du transfert binaire, vérifier chaque empreinte SHA-256, puis ajouter les images et leurs liens relatifs **dans le même lot R0-B**, sans réinventer les visuels.
+- **Fichiers binaires PNG originaux :** présents sous `cadrage/vision-cible/assets/` avec les trois noms fonctionnels ci-dessus ; empreintes SHA-256 identiques aux originaux du pack d'exécution.
+- **Liens relatifs :** les trois schémas sont accessibles depuis cet index.
+- Ces visuels restent **VISION FONDATRICE** : ils inspirent et cadrent R1–R4, sans valider d'architecture technique ni de preuve REAL.
 
 ## Gouvernance de lecture
 

```

## 9. Contenu complet — Roadmap modifié (état final post-preuve)

```markdown
# SFIA Studio Next — Living Roadmap

**Nature :** feuille de route de construction Next ; distincte de `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`.

**État courant au 2026-11-01 :** R0-A **VALIDATED BY MORRIS** (SEF v0.2) ; **THREE ORIGINAL PNG INTEGRATED ON CANDIDATE BRANCH** `docs/sfia-studio-next-r0b-foundation-01` @ `3d3d09eca427e6dcaaec589a6a64561227f8a622` ; **R0-B NOT CLOSED** — pas de merge à `main`. La documentation Next n'est pas encore la baseline publiée sur main.

| Jalon | Statut | Résultat/exit |
| --- | --- | --- |
| R0-A — méthode et rebaseline | **VALIDATED — CONVERSATION** ; publication Git candidate | SEF v0.2 approuvé, frontières et périmètre Next décidés |
| R0-B — bootstrap gouverné | **READY FOR MORRIS PR/MERGE GATE** | Source Git Next, SEF + décision, roadmap, convention naming **VALIDATED BY MORRIS**, vision + 3 PNG originaux intégrés sur branche candidate avec preuve distante, routage Next qualifié statiquement |
| R1 — cadrage produit | **NOT STARTED / NOT AUTHORIZED AS DELIVERY** | Vision, outcomes, capability map, frontières et exigences, REX explicite |
| R2 — conception fonctionnelle | **NOT STARTED** | Règles, processus, décisions, contrats et exceptions |
| R3 — UX/UI | **NOT STARTED** | Parcours, maquettes et contrats UX approuvés |
| R4 — architecture technique | **NOT STARTED** | Architecture, ADR, contrats, responsabilités et choix de persistence |
| R5 — reconstruction par macro-capacités | **NOT STARTED** | Code neuf, preuves verticales, documents synchronisés |
| R6 — qualification et bascule | **NOT STARTED** | Tests E2E/REAL applicables, gouvernance de transition, GO adoption |

## Chemin critique

1. **Routage SFIA v2.6 Next : CANDIDATE ON R0-B BRANCH** — guide partagé `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.0b et template partagé `prompts/templates/sfia-cycle-execution-template.md` §2.0.H modifiés sur branche, testés par contrôles statiques (présence sources, frontières, arrêt et absence de suppression du routage historique). **Pas actif sur `main`** ; la couche 1 Instructions projet ChatGPT est **rédigée sous `governance/chatgpt-project-instructions-next.md`**, mais **NON APPLIQUÉE** dans l'interface du projet ChatGPT (action Morris requise après revue/intégration).
2. **THREE ORIGINAL PNG INTEGRATED ON CANDIDATE BRANCH** — commit binaire `3d3d09eca427e6dcaaec589a6a64561227f8a622` ; octets relus depuis `origin/docs/sfia-studio-next-r0b-foundation-01` ; SHA-256 distants :
   - `01-pilote-nora-capacites.png` → `df80a9470c32d5f18aa0a21087300648f80dde5beec4f3fbba68d3d61073f1ef`
   - `02-cockpit-architecture-conceptuelle.png` → `1c12dedcca1ec1060636d9197b9e6039ef8aaa6edd99763a4cc74e710b139f50`
   - `03-mission-execution-restitution.png` → `b84363a0a3e70eb94013d998975f8646c83daf67013ffb5888e60d704d5fcede`
   Index navigable : `cadrage/vision-cible/README.md` (VISION FONDATRICE, non architecture validée / non REAL).
3. **R0-B Git integration : READY FOR MORRIS PR/MERGE GATE** — documents Next + PNG + deux fichiers routing/template partagés déjà sur branche. Aucun changement dans `projects/sfia-studio/` pour ce lot. **GO PR/merge Morris distincts** toujours nécessaires. **R0-B NOT CLOSED**.
4. **Nomenclature : VALIDATED BY MORRIS (2026-11-01)** — règles et principe fondateur adoptés pour la construction Next ; préciser le glossaire R1/R2 et les conventions techniques R4, sans micro-cycle documentaire dédié. *Réserve lecture seule :* guide/template partagés indiquent encore « CANDIDATE » pour le naming — écart documentaire non corrigé dans ce lot (chemins partagés hors allowlist).
5. **R1 : NON AUTORISÉ EN DELIVERY** — cadrage produit conditionné par les gates de sortie R0-B et la validation de sa trajectoire.

**Dépendance structurante :** décisions historiques H7/H8 et G0-A/B conservées en tant qu'historique ; leur portée pour la nouvelle architecture reste à arbitrer, sans supersession implicite. Ancien runtime v3 **NON ADOPTED**.

**Règle de mise à jour :** un statut ne devient PASSED/READY/ADOPTED qu'après preuve et décision ; mettre à jour cette roadmap dans le même macro-lot que le changement, sans cycle documentaire artificiel.

## R0-B — critères de clôture et réserves factuelles (2026-11-01)

| Contrôle | État | Preuve / suite |
| --- | --- | --- |
| R0-A SEF v0.2 | **VALIDATED MORRIS**, présent sur branche | `governance/SEF.md` + décision du 2026-11-01 |
| Convention nommage | **VALIDATED MORRIS**, présente sur branche | `governance/product-naming-conventions.md` + décision ; guide/template partagés encore libellés CANDIDATE (écart signalé, non modifié) |
| Routage v2.6 Next | **MODIFIED ON BRANCH / STATIC CHECK PASS** | Guide §4.3.0b + template §2.0.H ; **pas encore sur `main`** ; effets LIVE/REAL Cursor non prouvés |
| Trois schémas | **THREE ORIGINAL PNG INTEGRATED ON CANDIDATE BRANCH** | Branche `docs/sfia-studio-next-r0b-foundation-01` @ `3d3d09ec…` ; SHA-256 distants = pack |
| Instructions ChatGPT Next | **DRAFT READY / NOT APPLIED** | `governance/chatgpt-project-instructions-next.md` à appliquer par Morris dans les réglages du projet |
| CI/validation intégration | **NOT EXECUTED / NOT PROVEN** | Vérifier CI et impact des deux chemins de méthode partagés lors de l'intégration / PR |
| PR / merge / main | **NOT AUTHORIZED / NOT DONE** | GO Morris séparé puis vérification post-merge |

**Verdict : R0-B READY FOR MORRIS PR/MERGE GATE — NOT CLOSED — NOT ON MAIN.** Prochain gate : décision Morris distincte de PR/merge, puis CI/intégration et application éventuelle des instructions ChatGPT.

```

### Diff utile Roadmap — étape LOCAL (commit 3d3d09ec)

```diff
commit 3d3d09eca427e6dcaaec589a6a64561227f8a622
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Sun Nov 1 14:17:15 2026 +0100

    docs(studio-next): integrate three original vision PNGs on R0-B candidate
    
    Import byte-identical founding diagrams under vision-cible/assets with
    index links and LOCAL roadmap status pending remote SHA-256 proof.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/governance/roadmap.md b/projects/sfia-studio-next/governance/roadmap.md
index 65b278f9..cf68c2e2 100644
--- a/projects/sfia-studio-next/governance/roadmap.md
+++ b/projects/sfia-studio-next/governance/roadmap.md
@@ -2,12 +2,12 @@
 
 **Nature :** feuille de route de construction Next ; distincte de `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`.
 
-**État courant au 2026-11-01 :** R0-A **VALIDATED BY MORRIS** (SEF v0.2) ; **R0-B CLOSURE PREPARATION IN PROGRESS** sur branche documentaire, pas de merge à `main`. La documentation Next n'est pas encore la baseline publiée sur main.
+**État courant au 2026-11-01 :** R0-A **VALIDATED BY MORRIS** (SEF v0.2) ; **R0-B BINARY IMPORT LOCAL** sur branche documentaire `docs/sfia-studio-next-r0b-foundation-01`, pas de merge à `main`. La documentation Next n'est pas encore la baseline publiée sur main. Qualification distante des PNG **en cours** dans ce lot.
 
 | Jalon | Statut | Résultat/exit |
 | --- | --- | --- |
 | R0-A — méthode et rebaseline | **VALIDATED — CONVERSATION** ; publication Git candidate | SEF v0.2 approuvé, frontières et périmètre Next décidés |
-| R0-B — bootstrap gouverné | **IN PROGRESS** | Source Git Next, SEF + décision, roadmap, convention naming **VALIDATED BY MORRIS**, vision référencée, preuves d'intégration et routage qualifié |
+| R0-B — bootstrap gouverné | **IN PROGRESS** | Source Git Next, SEF + décision, roadmap, convention naming **VALIDATED BY MORRIS**, vision référencée + PNG locaux importés, preuves d'intégration et routage qualifié |
 | R1 — cadrage produit | **NOT STARTED / NOT AUTHORIZED AS DELIVERY** | Vision, outcomes, capability map, frontières et exigences, REX explicite |
 | R2 — conception fonctionnelle | **NOT STARTED** | Règles, processus, décisions, contrats et exceptions |
 | R3 — UX/UI | **NOT STARTED** | Parcours, maquettes et contrats UX approuvés |
@@ -18,8 +18,12 @@
 ## Chemin critique
 
 1. **Routage SFIA v2.6 Next : CANDIDATE ON R0-B BRANCH** — guide partagé `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.0b et template partagé `prompts/templates/sfia-cycle-execution-template.md` §2.0.H modifiés sur branche, testés par contrôles statiques (présence sources, frontières, arrêt et absence de suppression du routage historique). **Pas actif sur `main`** ; la couche 1 Instructions projet ChatGPT est **rédigée sous `governance/chatgpt-project-instructions-next.md`**, mais **NON APPLIQUÉE** dans l'interface du projet ChatGPT (action Morris requise après revue/intégration).
-2. **Intégration binaire trois schémas : PENDING** — trois PNG originaux inspectés et SHA-256 contrôlés ; archive avec les chemins/noms cibles et **script d'import local validé par test isolé**. L'API de modification Git actuellement disponible n'accepte pas directement les octets binaires locaux : `assets/*.png` sont **absents de cette branche**. Une importation via le worktree Cursor reste nécessaire, puis commit/push autorisés et vérification Git distante des octets et empreintes avant tout claim INTEGRATED.
-3. **R0-B Git integration : PENDING** — revue consolidée du macro-lot (documents Next + deux fichiers routing/template partagés). Aucun changement dans `projects/sfia-studio/`. **GO PR/merge Morris distincts** toujours nécessaires.
+2. **Intégration binaire trois schémas : LOCAL** — trois PNG originaux copiés octet pour octet sous `cadrage/vision-cible/assets/` ; SHA-256 locaux contrôlés :
+   - `01-pilote-nora-capacites.png` → `df80a9470c32d5f18aa0a21087300648f80dde5beec4f3fbba68d3d61073f1ef`
+   - `02-cockpit-architecture-conceptuelle.png` → `1c12dedcca1ec1060636d9197b9e6039ef8aaa6edd99763a4cc74e710b139f50`
+   - `03-mission-execution-restitution.png` → `b84363a0a3e70eb94013d998975f8646c83daf67013ffb5888e60d704d5fcede`
+   Index `cadrage/vision-cible/README.md` mis à jour avec liens relatifs. **Preuve distante origin/branche en attente** avant claim « THREE ORIGINAL PNG INTEGRATED ON CANDIDATE BRANCH ».
+3. **R0-B Git integration : IN PROGRESS** — revue consolidée du macro-lot (documents Next + deux fichiers routing/template partagés en lecture seule pour ce lot). Aucun changement dans `projects/sfia-studio/`. **GO PR/merge Morris distincts** toujours nécessaires.
 4. **Nomenclature : VALIDATED BY MORRIS (2026-11-01)** — règles et principe fondateur adoptés pour la construction Next ; préciser le glossaire R1/R2 et les conventions techniques R4, sans micro-cycle documentaire dédié.
 5. **R1 : NON AUTORISÉ EN DELIVERY** — cadrage produit conditionné par les gates de sortie R0-B et la validation de sa trajectoire.
 
@@ -33,10 +37,10 @@
 | --- | --- | --- |
 | R0-A SEF v0.2 | **VALIDATED MORRIS**, présent sur branche | `governance/SEF.md` + décision du 2026-11-01 |
 | Convention nommage | **VALIDATED MORRIS**, présente sur branche | `governance/product-naming-conventions.md` + décision |
-| Routage v2.6 Next | **MODIFIED ON BRANCH / STATIC CHECK PASS** | Guide §4.3.0b + template §2.0.H ; effets applicatifs non testés en Cursor |
-| Trois schémas | **SOURCE CONTENT VERIFIED, NOT IN GIT** | Originaux SHA-256 contrôlés, script d'import local testé en environnement isolé ; import Git et relecture distante requis |
+| Routage v2.6 Next | **MODIFIED ON BRANCH / STATIC CHECK PASS** | Guide §4.3.0b + template §2.0.H ; effets applicatifs non testés en Cursor LIVE/REAL ; **pas encore sur `main`** |
+| Trois schémas | **LOCAL — SHA-256 MATCH ; REMOTE PROOF PENDING** | PNG présents localement sous `assets/` ; empreintes = pack ; commit/push + relecture distante requis pour INTEGRATED |
 | Instructions ChatGPT Next | **DRAFT READY / NOT APPLIED** | `governance/chatgpt-project-instructions-next.md` à appliquer par Morris dans les réglages du projet |
 | CI/validation intégration | **NOT EXECUTED / NOT PROVEN** | Vérifier CI et impact des deux chemins de méthode partagés lors de l'intégration |
 | PR / merge / main | **NOT AUTHORIZED / NOT DONE** | GO Morris séparé puis vérification post-merge |
 
-**Verdict : R0-B NOT CLOSED — CLOSURE PACK IN PROGRESS.** Le GO Morris de poursuite autorise la préparation de clôture mais n'autorise pas implicitement PR, merge ou adoption runtime. Prochain gate : finir l'import binaire + qualification du routage, contrôle de l'intégration et décision Morris de PR/merge distincte.
+**Verdict : R0-B NOT CLOSED — BINARY IMPORT LOCAL, REMOTE PROOF PENDING.** Le GO Morris de poursuite autorise la finalisation d'import + push candidate, mais n'autorise pas implicitement PR, merge ou adoption runtime. Prochain gate après preuve distante : qualification readiness + décision Morris de PR/merge distincte.

```

### Diff utile Roadmap — étape INTEGRATED post-remote (commit 9ffd699a)

```diff
commit 9ffd699acca9ed66d5235f025f6af3429fde6597
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Sun Nov 1 14:17:38 2026 +0100

    docs(studio-next): mark three vision PNGs integrated after remote proof
    
    Record candidate-branch remote SHA-256 verification and R0-B readiness
    for Morris PR/merge gate without claiming closure or main.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/governance/roadmap.md b/projects/sfia-studio-next/governance/roadmap.md
index cf68c2e2..10f675dc 100644
--- a/projects/sfia-studio-next/governance/roadmap.md
+++ b/projects/sfia-studio-next/governance/roadmap.md
@@ -2,12 +2,12 @@
 
 **Nature :** feuille de route de construction Next ; distincte de `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`.
 
-**État courant au 2026-11-01 :** R0-A **VALIDATED BY MORRIS** (SEF v0.2) ; **R0-B BINARY IMPORT LOCAL** sur branche documentaire `docs/sfia-studio-next-r0b-foundation-01`, pas de merge à `main`. La documentation Next n'est pas encore la baseline publiée sur main. Qualification distante des PNG **en cours** dans ce lot.
+**État courant au 2026-11-01 :** R0-A **VALIDATED BY MORRIS** (SEF v0.2) ; **THREE ORIGINAL PNG INTEGRATED ON CANDIDATE BRANCH** `docs/sfia-studio-next-r0b-foundation-01` @ `3d3d09eca427e6dcaaec589a6a64561227f8a622` ; **R0-B NOT CLOSED** — pas de merge à `main`. La documentation Next n'est pas encore la baseline publiée sur main.
 
 | Jalon | Statut | Résultat/exit |
 | --- | --- | --- |
 | R0-A — méthode et rebaseline | **VALIDATED — CONVERSATION** ; publication Git candidate | SEF v0.2 approuvé, frontières et périmètre Next décidés |
-| R0-B — bootstrap gouverné | **IN PROGRESS** | Source Git Next, SEF + décision, roadmap, convention naming **VALIDATED BY MORRIS**, vision référencée + PNG locaux importés, preuves d'intégration et routage qualifié |
+| R0-B — bootstrap gouverné | **READY FOR MORRIS PR/MERGE GATE** | Source Git Next, SEF + décision, roadmap, convention naming **VALIDATED BY MORRIS**, vision + 3 PNG originaux intégrés sur branche candidate avec preuve distante, routage Next qualifié statiquement |
 | R1 — cadrage produit | **NOT STARTED / NOT AUTHORIZED AS DELIVERY** | Vision, outcomes, capability map, frontières et exigences, REX explicite |
 | R2 — conception fonctionnelle | **NOT STARTED** | Règles, processus, décisions, contrats et exceptions |
 | R3 — UX/UI | **NOT STARTED** | Parcours, maquettes et contrats UX approuvés |
@@ -18,13 +18,13 @@
 ## Chemin critique
 
 1. **Routage SFIA v2.6 Next : CANDIDATE ON R0-B BRANCH** — guide partagé `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.0b et template partagé `prompts/templates/sfia-cycle-execution-template.md` §2.0.H modifiés sur branche, testés par contrôles statiques (présence sources, frontières, arrêt et absence de suppression du routage historique). **Pas actif sur `main`** ; la couche 1 Instructions projet ChatGPT est **rédigée sous `governance/chatgpt-project-instructions-next.md`**, mais **NON APPLIQUÉE** dans l'interface du projet ChatGPT (action Morris requise après revue/intégration).
-2. **Intégration binaire trois schémas : LOCAL** — trois PNG originaux copiés octet pour octet sous `cadrage/vision-cible/assets/` ; SHA-256 locaux contrôlés :
+2. **THREE ORIGINAL PNG INTEGRATED ON CANDIDATE BRANCH** — commit binaire `3d3d09eca427e6dcaaec589a6a64561227f8a622` ; octets relus depuis `origin/docs/sfia-studio-next-r0b-foundation-01` ; SHA-256 distants :
    - `01-pilote-nora-capacites.png` → `df80a9470c32d5f18aa0a21087300648f80dde5beec4f3fbba68d3d61073f1ef`
    - `02-cockpit-architecture-conceptuelle.png` → `1c12dedcca1ec1060636d9197b9e6039ef8aaa6edd99763a4cc74e710b139f50`
    - `03-mission-execution-restitution.png` → `b84363a0a3e70eb94013d998975f8646c83daf67013ffb5888e60d704d5fcede`
-   Index `cadrage/vision-cible/README.md` mis à jour avec liens relatifs. **Preuve distante origin/branche en attente** avant claim « THREE ORIGINAL PNG INTEGRATED ON CANDIDATE BRANCH ».
-3. **R0-B Git integration : IN PROGRESS** — revue consolidée du macro-lot (documents Next + deux fichiers routing/template partagés en lecture seule pour ce lot). Aucun changement dans `projects/sfia-studio/`. **GO PR/merge Morris distincts** toujours nécessaires.
-4. **Nomenclature : VALIDATED BY MORRIS (2026-11-01)** — règles et principe fondateur adoptés pour la construction Next ; préciser le glossaire R1/R2 et les conventions techniques R4, sans micro-cycle documentaire dédié.
+   Index navigable : `cadrage/vision-cible/README.md` (VISION FONDATRICE, non architecture validée / non REAL).
+3. **R0-B Git integration : READY FOR MORRIS PR/MERGE GATE** — documents Next + PNG + deux fichiers routing/template partagés déjà sur branche. Aucun changement dans `projects/sfia-studio/` pour ce lot. **GO PR/merge Morris distincts** toujours nécessaires. **R0-B NOT CLOSED**.
+4. **Nomenclature : VALIDATED BY MORRIS (2026-11-01)** — règles et principe fondateur adoptés pour la construction Next ; préciser le glossaire R1/R2 et les conventions techniques R4, sans micro-cycle documentaire dédié. *Réserve lecture seule :* guide/template partagés indiquent encore « CANDIDATE » pour le naming — écart documentaire non corrigé dans ce lot (chemins partagés hors allowlist).
 5. **R1 : NON AUTORISÉ EN DELIVERY** — cadrage produit conditionné par les gates de sortie R0-B et la validation de sa trajectoire.
 
 **Dépendance structurante :** décisions historiques H7/H8 et G0-A/B conservées en tant qu'historique ; leur portée pour la nouvelle architecture reste à arbitrer, sans supersession implicite. Ancien runtime v3 **NON ADOPTED**.
@@ -36,11 +36,11 @@
 | Contrôle | État | Preuve / suite |
 | --- | --- | --- |
 | R0-A SEF v0.2 | **VALIDATED MORRIS**, présent sur branche | `governance/SEF.md` + décision du 2026-11-01 |
-| Convention nommage | **VALIDATED MORRIS**, présente sur branche | `governance/product-naming-conventions.md` + décision |
-| Routage v2.6 Next | **MODIFIED ON BRANCH / STATIC CHECK PASS** | Guide §4.3.0b + template §2.0.H ; effets applicatifs non testés en Cursor LIVE/REAL ; **pas encore sur `main`** |
-| Trois schémas | **LOCAL — SHA-256 MATCH ; REMOTE PROOF PENDING** | PNG présents localement sous `assets/` ; empreintes = pack ; commit/push + relecture distante requis pour INTEGRATED |
+| Convention nommage | **VALIDATED MORRIS**, présente sur branche | `governance/product-naming-conventions.md` + décision ; guide/template partagés encore libellés CANDIDATE (écart signalé, non modifié) |
+| Routage v2.6 Next | **MODIFIED ON BRANCH / STATIC CHECK PASS** | Guide §4.3.0b + template §2.0.H ; **pas encore sur `main`** ; effets LIVE/REAL Cursor non prouvés |
+| Trois schémas | **THREE ORIGINAL PNG INTEGRATED ON CANDIDATE BRANCH** | Branche `docs/sfia-studio-next-r0b-foundation-01` @ `3d3d09ec…` ; SHA-256 distants = pack |
 | Instructions ChatGPT Next | **DRAFT READY / NOT APPLIED** | `governance/chatgpt-project-instructions-next.md` à appliquer par Morris dans les réglages du projet |
-| CI/validation intégration | **NOT EXECUTED / NOT PROVEN** | Vérifier CI et impact des deux chemins de méthode partagés lors de l'intégration |
+| CI/validation intégration | **NOT EXECUTED / NOT PROVEN** | Vérifier CI et impact des deux chemins de méthode partagés lors de l'intégration / PR |
 | PR / merge / main | **NOT AUTHORIZED / NOT DONE** | GO Morris séparé puis vérification post-merge |
 
-**Verdict : R0-B NOT CLOSED — BINARY IMPORT LOCAL, REMOTE PROOF PENDING.** Le GO Morris de poursuite autorise la finalisation d'import + push candidate, mais n'autorise pas implicitement PR, merge ou adoption runtime. Prochain gate après preuve distante : qualification readiness + décision Morris de PR/merge distincte.
+**Verdict : R0-B READY FOR MORRIS PR/MERGE GATE — NOT CLOSED — NOT ON MAIN.** Prochain gate : décision Morris distincte de PR/merge, puis CI/intégration et application éventuelle des instructions ChatGPT.

```

## 10. Fake/Real Qualification
N/A — lot documentaire/binaire vision fondatrice. Aucun runtime Next, aucun claim REAL/ADOPTED/ON MAIN.

## 11. STOP / réserves / gates restants

1. **PR / merge / main : NOT AUTHORIZED** — GO Morris distinct requis.
2. **R0-B NOT CLOSED** — readiness gate seulement.
3. **Routage Next pas sur main** — actif seulement sur branche candidate.
4. **Instructions ChatGPT Next : DRAFT READY / NOT APPLIED**.
5. **CI : NOT OBSERVED / NOT EXECUTED** sur la branche candidate au moment du lot.
6. **Naming CANDIDATE vs VALIDATED** dans fichiers partagés `method/` + `prompts/` — écart signalé, non modifié (READ-ONLY / STOP requalification Critical si écriture).
7. **projects/sfia-studio/** inchangé (READ-ONLY respecté).
8. Vision = **VISION FONDATRICE**, pas architecture technique validée.

## 12. Décisions Morris requises (prochain gate)

1. GO ouverture PR depuis `docs/sfia-studio-next-r0b-foundation-01` vers `main` (ou autre stratégie d'intégration).
2. GO merge après revue/CI.
3. Application manuelle éventuelle de `governance/chatgpt-project-instructions-next.md` dans ChatGPT.
4. Arbitrage ultérieur éventuel pour aligner libellé naming dans guide/template partagés (GO Critical/méthode distinct).

## 13. Verdict

**PASS — R0-B READY FOR MORRIS PR/MERGE GATE**

- 3 originaux strictement identiques (pack = local = remote)
- index vision avec liens relatifs
- Roadmap exacte post-preuve distante
- contrôle routage coexistence STATIC PASS
- commit + push FF candidate + preuve distante
- Review Pack FULL + Handoff publish-in-cycle (ce document)

**Jamais : R0-B CLOSED / ON MAIN / ADOPTED / REAL.**

## 14. Publication handoff (à compléter après push L3)

- Mode : publish-in-cycle
- Branche : sfia/review-handoff
- Fichier : sfia-review-handoff/latest-chatgpt-review.md
- Retour branche initiale : docs/sfia-studio-next-r0b-foundation-01

### Handoff publication proof
- handoff commit : `85db1aaa7b885dbfd5a7e1652f7ddb2c115cf765`
- origin/sfia/review-handoff : `85db1aaa7b885dbfd5a7e1652f7ddb2c115cf765`
- remote file SHA-256 : `6a5c23b67d91f6e1442d53845af011f800d8e280ee9e64d36f31af5444da1f95`
- URL : https://github.com/mcleland147/sfia-workspace/blob/sfia/review-handoff/sfia-review-handoff/latest-chatgpt-review.md
- returned workspace branch : docs/sfia-studio-next-r0b-foundation-01 @ `9ffd699acca9ed66d5235f025f6af3429fde6597`
- note : publication via existing worktree (branch already checked out elsewhere)


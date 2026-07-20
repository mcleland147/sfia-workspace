# SFIA Studio — Review Pack — OPS1 Framing Mono-File Drift Correction

- **Date/heure/fuseau :** 2026-07-20 14:02:15 CEST
- **Repo :** mcleland147/sfia-workspace
- **Cycle :** 13 — PR readiness corrective
- **Profil :** Light
- **Gate Morris :** GO correction contrainte mono-fichier document 41
- **Branche :** `design/sfia-studio-ops1-functional`
- **Ancien HEAD :** `05034b69abb493d78466c9857d9fc1a6c002706f`
- **Nouveau HEAD :** `c5f1cead95c35d558261a17196f91da852c36eb4`
- **Parent du correctif :** `05034b69abb493d78466c9857d9fc1a6c002706f` (= ancien HEAD)
- **origin/main :** `62eb23f0b1934afbecc517fc83aff90493fb8f29`
- **ahead/behind :** `2/0`

## Truth Check

Conforme avant correction : HEAD `05034b6…` ; ahead 1/0 ; remote absente ; tracked propre ; staged vide.

## Anomalie initiale

PR readiness avait signalé des formulations **normatives** mono-fichier dans `41` (§1.3, §2.6, §4.3), en tension avec la conception validée multi-fichiers + allowlist (`45`–`47`, FD-CAND-20/26/27).

## Occurrences mono-fichier trouvées et traitement

| Localisation | Avant | Traitement |
|--------------|-------|------------|
| §1.3 liste d’action | « un seul fichier Markdown non protégé » | Remplacé par périmètre Campus360 + allowlist 1..n |
| §2.6 niveau Action | « Un Markdown non protégé… » | Remplacé par Markdown Campus360 éligibles + allowlist |
| §4.1 Action | formulation mono implicite | Alignée allowlist / Campus360 / pas d’autorisation globale |
| §4.2 étape 8 | « le Markdown autorisé » | « les fichiers Markdown de l’allowlist » |
| §4.3 Fichier | « Un seul Markdown non protégé » | Tableau bornes multi-fichiers + SCENARIO-VAL |
| §11 décisions non prises | « fichier Markdown exact » | Cartographie / branche / allowlist sous SCENARIO-VAL |

### Occurrences restantes (non normatives)

| Occurrence | Qualification |
|------------|---------------|
| « un seul cycle documentaire » | Limite de **cycle**, pas de fichier — **conservée** |
| « contrainte historique « un seul fichier Markdown » est supersédée » | Mention **historique explicite** — **conservée** |

## Diff complet — document 41 (commit correctif)

```diff
commit c5f1cead95c35d558261a17196f91da852c36eb4
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Mon Jul 20 14:01:59 2026 +0200

    docs(sfia-studio): align OPS1 framing with multi-file scope
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/41-operational-vertical-slice-1-framing.md b/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
index c9c0ec6..26f8359 100644
--- a/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
+++ b/projects/sfia-studio/41-operational-vertical-slice-1-framing.md
@@ -55,11 +55,14 @@ Morris doit pouvoir échanger **librement et réellement** avec ChatGPT depuis S
 La capacité d’**action** derrière cette conversation peut, pour le premier slice, rester limitée à :
 
 - un seul cycle documentaire ;
-- un seul fichier Markdown non protégé ;
+- le **périmètre documentaire Markdown non protégé** du projet **Campus360**, avec **un ou plusieurs** fichiers lorsque le besoin le justifie ;
+- une **allowlist explicite et exhaustive** par action, validée par Morris (Campus360 ≠ autorisation globale) ;
 - une branche locale dédiée ;
 - une exécution Cursor bornée ;
 - aucun commit, push, PR ou merge automatique.
 
+> **Alignement conception :** la contrainte historique « un seul fichier Markdown » est **supersédée**. Voir [`45`](./45-ops1-functional-design.md) §11 et `OPS1-FD-CAND-20`/`27`.
+
 ### 1.4 Formulation structurante obligatoire
 
 ```text
@@ -177,7 +180,7 @@ Résultat observable : fil multi-tours non prédéterminé ; corrections Morris
 | Niveau | Attendu |
 |--------|---------|
 | **Conversation** | GPT **réel**, libre, multi-tours, non scénarisé pour la preuve opératoire |
-| **Action** | Un Markdown non protégé, branche locale, Cursor après GO |
+| **Action** | Markdown Campus360 non protégés **éligibles** ; allowlist explicite par action (1..n) ; branche locale ; Cursor après GO |
 | **Fixtures** | Autorisées pour **tests automatisés** uniquement — pas pour la preuve métier du scénario pilote |
 | **Git distant** | Aucun effet automatique |
 
@@ -204,8 +207,9 @@ Résultat observable : fil multi-tours non prédéterminé ; corrections Morris
 
 ### 4.1 Recommandation
 
-**Action :** un cycle documentaire Markdown non protégé, branche locale dédiée, sans push auto.
+**Action :** cycle documentaire sur Markdown Campus360 non protégés ; **allowlist** explicite par exécution (un ou plusieurs fichiers si nécessaire) ; branche locale dédiée ; sans push auto.
 **Conversation :** dynamique **non prédéterminée** (chemins multiples cohérents).
+**Principe :** périmètre Campus360 **éligible** ≠ autorisation globale ; hors allowlist = interdit ; extension après GO = nouveau gate.
 
 ### 4.2 Dynamique attendue (non scriptée)
 
@@ -218,7 +222,7 @@ Exemple de dynamique — **ne pas figer les phrases** :
 5. Morris challenge ou modifie le périmètre ;
 6. ChatGPT produit une **proposition d’action structurée** (ou conclut qu’aucune action n’est nécessaire) ;
 7. Si action : Morris donne un **GO explicite** ;
-8. Cursor modifie uniquement le Markdown autorisé ;
+8. Cursor modifie uniquement les fichiers Markdown de l’**allowlist** autorisée ;
 9. Le rapport remonte ;
 10. Morris **échange à nouveau** avec ChatGPT sur le résultat ;
 11. Morris valide, demande correction, refuse ou abandonne ;
@@ -231,12 +235,15 @@ La preuve porte sur la capacité à gérer **plusieurs chemins conversationnels*
 | Champ | Proposition candidate |
 |-------|------------------------|
 | Repository | `sfia-workspace` |
-| Branche | Locale dédiée (sans push) |
-| Fichier | Un seul Markdown non protégé |
-| Interdits | `method/**`, `prompts/**`, `app/**`, `harness/**`, secrets, lockfiles, `.github/**` |
+| Projet pilote | **Campus360** (contexte exclusif) |
+| Branche | Locale dédiée (sans push) — convention sous `G-OPS1-SCENARIO-VAL` |
+| Fichiers | Markdown documentaires Campus360 **non protégés** **éligibles** ; action bornée par **allowlist** explicite (1..n fichiers si besoin) |
+| Interdits | `method/**`, `prompts/**`, `app/**`, `harness/**`, secrets, lockfiles, `.github/**` ; hors allowlist ; hors Campus360 éligible |
 | Effets distants | Aucun automatique |
+| Gate scénario | `G-OPS1-SCENARIO-VAL` — cartographie chemins/catégories, exclusions, branche, règles allowlist, scénario de preuve |
 
 Limitation Markdown = limite d’**action**, **pas** limite de **conversation**.
+Campus360 éligible ≠ autorisation globale. Hors allowlist = interdit. Extension d’allowlist après GO = nouveau gate.
 
 ---
 
@@ -320,7 +327,7 @@ OPS1 réussi = preuve de **conversation réelle utilisable** + **action gouvern
 
 ## 11. Décisions non prises
 
-Stack, protocole, Figma, plafonds numériques, noms techniques définitifs, fichier Markdown exact, ouverture conception/backlog/delivery, commit des docs cadrage.
+Stack, protocole, Figma, plafonds numériques, noms techniques définitifs ; cartographie exacte des chemins/catégories Markdown Campus360 éligibles, convention de branche et règles d’allowlist opératoires (`G-OPS1-SCENARIO-VAL`) ; ouverture backlog/delivery/live ; push/PR des docs hors GO distinct.
 
 ---
 

```

## Justification

Alignement du **cadrage** sur la décision Morris déjà validée en conception :
- Markdown Campus360 non protégés **éligibles** ;
- 1..n fichiers si besoin ;
- allowlist exhaustive par action ;
- Campus360 ≠ autorisation globale ;
- hors allowlist interdit ; extension après GO = nouveau gate ;
- no remote auto ;
- `G-OPS1-SCENARIO-VAL` redéfini (cartographie, exclusions, branche, allowlist, preuve).

Sans réécriture du cadrage ni modification de `45`–`47` / FD-CAND / OPS1-CAND.

## Contrôles

| Contrôle | Résultat |
|----------|----------|
| Fichier unique modifié | `41` seulement |
| `diff --check` | OK |
| Mono-fichier normatif résiduel | Aucun |
| Cohérence 45 §11 / FLOW-32 / FD-CAND-20/26/27 | OK |
| Claims interdits | Absents |
| Gates inchangés / fermés | OK |
| Staged exact avant commit | 1 fichier |

## Chaîne des commits

```text
c5f1cea docs(sfia-studio): align OPS1 framing with multi-file scope
05034b6 docs(sfia-studio): validate OPS1 functional design

```

1. `05034b69abb493d78466c9857d9fc1a6c002706f` — `docs(sfia-studio): validate OPS1 functional design`
2. `c5f1cead95c35d558261a17196f91da852c36eb4` — `docs(sfia-studio): align OPS1 framing with multi-file scope`

## Diff total branche ↔ origin/main

```text
 .../41-operational-vertical-slice-1-framing.md     |   34 +-
 projects/sfia-studio/45-ops1-functional-design.md  |  630 ++++++++++++
 .../46-ops1-functional-flows-and-rules.md          | 1056 ++++++++++++++++++++
 .../47-ops1-functional-decision-pack.md            |  517 ++++++++++
 4 files changed, 2225 insertions(+), 12 deletions(-)

```

Quatre fichiers : `41` (M) + `45`/`46`/`47` (A). +2225 / −12.

## PR readiness corrective

- Périmètre total = 4 fichiers — OK
- Aucune formulation normative mono-fichier dans 41 — OK
- Conception multi-fichiers cohérente 41↔45↔46↔47 — OK
- FD-CAND / réserves inchangées — OK
- Squash merge recommandé (2 commits locaux → 1 sur main)

## État final

```text
Branche : design/sfia-studio-ops1-functional
HEAD     : c5f1cead95c35d558261a17196f91da852c36eb4
ahead/behind : 2/0
Remote design : absente
Push / PR : absents
status : ?? .tmp-sfia-review/ ; ?? projects/.tmp-sfia-review/
```

## Handoff

- SHA : *(après push)*

## Verdict

**SFIA STUDIO OPS1 FUNCTIONAL DESIGN PR READY — MONO-FILE DRIFT CORRECTED — PUSH AND PR REQUIRE MORRIS GO**

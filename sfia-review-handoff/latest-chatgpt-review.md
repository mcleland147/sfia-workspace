# SFIA Studio — Review Handoff — OPS1 PR Readiness Corrective (Mono-File Drift)

## Métadonnées

- **Date/heure/fuseau :** 2026-07-20 14:07:23 CEST
- **Repo :** mcleland147/sfia-workspace
- **Cycle :** 13 — PR readiness corrective
- **Profil :** Light
- **Gate Morris (correction) :** GO correction contrainte mono-fichier document 41
- **Gate Morris (republication) :** GO republication du Review Handoff Git correctif
- **Branche projet :** `design/sfia-studio-ops1-functional`
- **origin/main :** `62eb23f0b1934afbecc517fc83aff90493fb8f29`
- **Ancien HEAD (avant correctif) :** `05034b69abb493d78466c9857d9fc1a6c002706f`
- **Nouveau HEAD (après correctif) :** `c5f1cead95c35d558261a17196f91da852c36eb4`
- **Parent du correctif :** `05034b69abb493d78466c9857d9fc1a6c002706f`
- **ahead/behind :** `2/0`
- **Branche distante projet :** absente
- **Push projet / PR :** absents
- **Note republication :** remplace le handoff précédent encore lisible sous `sfia-review-handoff/latest-chatgpt-review.md` (état `05034b6` / ahead `1/0` / anomalie mono-fichier ouverte). Cause : publication antérieure sur le chemin racine non canonique.

## Anomalie initiale

PR readiness (HEAD `05034b6`, ahead `1/0`) avait signalé des formulations **normatives** mono-fichier dans le document de cadrage `41` (§1.3, §2.6, §4.1–4.3, §11), en tension avec la conception fonctionnelle validée multi-fichiers + allowlist (`45`–`47`, `OPS1-FD-CAND-20` / `26` / `27`).

Qualification : **blocage PR readiness** (dérive cadrage vs conception).

Décision Morris : **GO correction contrainte mono-fichier document 41** — modifier uniquement `41`, commit correctif local distinct, republier le handoff.

## Correction

Sections corrigées dans `projects/sfia-studio/41-operational-vertical-slice-1-framing.md` :

| Localisation | Avant (normatif) | Après |
|--------------|------------------|-------|
| §1.3 liste d’action | « un seul fichier Markdown non protégé » | Périmètre Campus360 Markdown non protégé ; 1..n si besoin ; allowlist exhaustive |
| §2.6 niveau Action | « Un Markdown non protégé… » | Markdown Campus360 éligibles ; allowlist 1..n ; branche locale ; Cursor après GO |
| §4.1 Action | mono implicite | Allowlist / Campus360 / pas d’autorisation globale |
| §4.2 étape 8 | « le Markdown autorisé » | « les fichiers Markdown de l’allowlist » |
| §4.3 tableau | « Un seul Markdown non protégé » | Bornes multi-fichiers + objet `G-OPS1-SCENARIO-VAL` |
| §11 décisions non prises | « fichier Markdown exact » | Cartographie / branche / allowlist sous SCENARIO-VAL |

Modèle retenu (aligné conception) :

- Markdown Campus360 non protégés **éligibles** ;
- une action peut concerner **un ou plusieurs** fichiers lorsque le besoin le justifie ;
- **allowlist explicite et exhaustive** par action, validée par Morris ;
- Campus360 **≠** autorisation globale ;
- hors allowlist = **interdit** ;
- extension d’allowlist après GO = **nouveau gate** ;
- aucun commit / push / PR / merge automatique ;
- `G-OPS1-SCENARIO-VAL` porte sur cartographie chemins/catégories éligibles, exclusions, convention de branche, règles d’allowlist, scénario de preuve.

Occurrences restantes **non normatives** (conservées) :

- « un seul cycle documentaire » — limite de cycle, pas de fichier ;
- mention historique « contrainte … un seul fichier Markdown … supersédée ».

Fichiers projet **non** modifiés dans le correctif : `45`–`47`, README, `42`–`44`, code, method.

## Diff projet

Correctif limité au document 41. Message : `docs(sfia-studio): align OPS1 framing with multi-file scope`.

### Chaîne des commits (origin/main..HEAD)

1. `05034b69abb493d78466c9857d9fc1a6c002706f` — `docs(sfia-studio): validate OPS1 functional design`
2. `c5f1cead95c35d558261a17196f91da852c36eb4` — `docs(sfia-studio): align OPS1 framing with multi-file scope`

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

### Diff total branche ↔ origin/main

```text
 .../41-operational-vertical-slice-1-framing.md     |   34 +-
 projects/sfia-studio/45-ops1-functional-design.md  |  630 ++++++++++++
 .../46-ops1-functional-flows-and-rules.md          | 1056 ++++++++++++++++++++
 .../47-ops1-functional-decision-pack.md            |  517 ++++++++++
 4 files changed, 2225 insertions(+), 12 deletions(-)
```

Quatre fichiers au total : `41` (M) + `45` / `46` / `47` (A). Stat : **+2225 / −12**.

## Contrôles

| Contrôle | Résultat |
|----------|----------|
| `git diff --check` | OK |
| Formulation normative mono-fichier restante dans 41 | Aucune |
| Occurrences historiques / hors sujet | Qualifiées et conservées |
| Cohérence 41 / 45 §11 / FLOW-32 / FD-CAND-20, 26, 27 | OK |
| Claims interdits (MVP / production / READY FOR DELIVERY) | Absents |
| Fichiers interdits intacts | OK |
| Staged projet | Vide |
| Branche projet distante | Absente |
| Push projet | Aucun |
| PR | Aucune |

## Réserves et gates

- Réserves fonctionnelles (`OPS1-FD-CAND` WITH RESERVATION) **inchangées**.
- Gates suivants **fermés** : `G-OPS1-SCENARIO-VAL`, arch, UX, backlog, delivery, live, MVP.
- Push de `design/sfia-studio-ops1-functional` et création de PR soumis à **GO Morris distinct**.
- Merge recommandé : **squash** (2 commits locaux → 1 sur main).

## État projet au moment de la republication

```text
Branche : design/sfia-studio-ops1-functional
HEAD     : c5f1cead95c35d558261a17196f91da852c36eb4
Parent   : 05034b69abb493d78466c9857d9fc1a6c002706f
origin/main : 62eb23f0b1934afbecc517fc83aff90493fb8f29
ahead/behind : 2/0
Remote design : absente
Push / PR : absents
status : ?? .tmp-sfia-review/ ; ?? projects/.tmp-sfia-review/
```

## Verdict

**SFIA STUDIO OPS1 FUNCTIONAL DESIGN PR READY — MONO-FILE DRIFT CORRECTED — PUSH AND PR REQUIRE MORRIS GO**

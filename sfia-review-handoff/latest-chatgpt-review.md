# Review pack FULL — SFIA Studio post-merge (Cycle 14)

**Date / heure :** 2026-07-18 17:04:53 CEST
**Repository :** `/Users/morris/Projects/sfia-workspace` (`mcleland147/sfia-workspace`)
**Cycle :** 14 — Post-merge | **Profil :** Standard | **Typologie :** DOC
**Baseline :** SFIA v2.6 | **Option C**
**Blocs activés :** capitalisation/REX légère ; gouvernance Git ; traçabilité documentaire
**Blocs désactivés :** FinOps, GreenOps, RGPD, accessibilité, performance, UX/UI+Figma, sécurité, DevOps, release, RUN

---

## 1. Git Truth Check

| Champ | Valeur |
|-------|--------|
| Branche locale active | `project/sfia-studio-pre-framing` |
| HEAD local | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
| origin/main | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
| Merge attendu | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
| Correspondance | **OUI** |
| Checkout main | **NON** (working tree dirty — contrôles via `origin/main`) |

### État Git local

```
 M projects/campus360/README.md
?? .sfia/
?? .tmp-sfia-review/
?? projects/campus360/04-detailed-framing.md
?? projects/campus360/05-mvp-increment-trajectory.md
?? projects/campus360/06-governance-and-stakeholders.md
?? projects/campus360/07-risks-dependencies-and-gates.md
?? sfia-review-handoff/
```

**Règle respectée :** aucun stash / reset / clean / checkout destructif. Campus360 / `.tmp` / `.sfia` / handoff worktree **non touchés**.

---

## 2. Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- huit documents `projects/sfia-studio/` sur `origin/main`
- PR #207 ; commit projet `b853af1…` ; merge `ec21074…`
- handoff `sfia/review-handoff` @ `7a212989f1562b1a90a9500d250a0c47c335b7dc` (pré-cycle)

---

## 3. PR #207 et merge

| Champ | Valeur |
|-------|--------|
| URL | https://github.com/mcleland147/sfia-workspace/pull/207 |
| État | **MERGED** |
| Merged at | 2026-07-18T15:00:02Z (17:00:02 CEST) |
| Base | `main` |
| Head | `project/sfia-studio-pre-framing` |
| Commit projet | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
| Merge commit | `ec21074ee1bff63153a3aa179b8d33d0678db389` |
| Parents | `ec7f397` (main) + `b853af1` (projet) |
| Titre | docs: add SFIA Studio product framing |

### Ascendance

- `b853af1` est ancêtre de `origin/main` : **OUI**
- `ec21074` == `origin/main` : **OUI**

### ls-remote

```
ec21074ee1bff63153a3aa179b8d33d0678db389	refs/heads/main
b853af1113a2ff03de72a7db3a00724c3c53820e	refs/heads/project/sfia-studio-pre-framing
```

---

## 4. Diff du merge (périmètre)

### git show --stat

```
ec21074 (origin/main, origin/HEAD) Merge pull request #207 from mcleland147/project/sfia-studio-pre-framing

 projects/sfia-studio/01-opportunity-and-vision.md  | 341 +++++++++++++++++++
 .../02-sfia-cycle-coverage-hypothesis.md           | 165 +++++++++
 .../sfia-studio/03-pre-framing-decision-pack.md    | 259 ++++++++++++++
 .../sfia-studio/04-detailed-product-framing.md     | 236 +++++++++++++
 .../05-product-capabilities-and-use-cases.md       | 377 +++++++++++++++++++++
 .../06-scope-constraints-and-success-criteria.md   | 247 ++++++++++++++
 .../07-product-trajectory-and-decision-pack.md     | 269 +++++++++++++++
 projects/sfia-studio/README.md                     | 202 +++++++++++
 8 files changed, 2096 insertions(+)
```

### git diff --name-status ^1..merge

```
A	projects/sfia-studio/01-opportunity-and-vision.md
A	projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md
A	projects/sfia-studio/03-pre-framing-decision-pack.md
A	projects/sfia-studio/04-detailed-product-framing.md
A	projects/sfia-studio/05-product-capabilities-and-use-cases.md
A	projects/sfia-studio/06-scope-constraints-and-success-criteria.md
A	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
A	projects/sfia-studio/README.md
```

### git diff --stat ^1..merge

```
 projects/sfia-studio/01-opportunity-and-vision.md  | 341 +++++++++++++++++++
 .../02-sfia-cycle-coverage-hypothesis.md           | 165 +++++++++
 .../sfia-studio/03-pre-framing-decision-pack.md    | 259 ++++++++++++++
 .../sfia-studio/04-detailed-product-framing.md     | 236 +++++++++++++
 .../05-product-capabilities-and-use-cases.md       | 377 +++++++++++++++++++++
 .../06-scope-constraints-and-success-criteria.md   | 247 ++++++++++++++
 .../07-product-trajectory-and-decision-pack.md     | 269 +++++++++++++++
 projects/sfia-studio/README.md                     | 202 +++++++++++
 8 files changed, 2096 insertions(+)
```

### git show --name-status --format=fuller

```
commit ec21074ee1bff63153a3aa179b8d33d0678db389
Merge: ec7f397 b853af1
Author:     mcleland147 <m.cleland@live.fr>
AuthorDate: Sat Jul 18 17:00:02 2026 +0200
Commit:     GitHub <noreply@github.com>
CommitDate: Sat Jul 18 17:00:02 2026 +0200

    Merge pull request #207 from mcleland147/project/sfia-studio-pre-framing
    
    docs: add SFIA Studio product framing

```

**Périmètre :** exactement **8** fichiers sous `projects/sfia-studio/`.
**Hors périmètre dans le merge :** aucun (pas Campus360, méthode, prompts, code, config, tmp, handoff).

---

## 5. Intégrité des huit fichiers (commit projet vs origin/main)

### ls-tree origin/main

```
100644 blob 49669bb775b7a9e6619ccefccb3eba0f9f922ad5	projects/sfia-studio/01-opportunity-and-vision.md
100644 blob 56676e34d497bbf7f61c4d4362819aaa829dba1b	projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md
100644 blob 976b45e0a41e0d7bcc314bf36a52694d0478ca5e	projects/sfia-studio/03-pre-framing-decision-pack.md
100644 blob 4bbb2ea6aae22181fccb51deeb96432e13748109	projects/sfia-studio/04-detailed-product-framing.md
100644 blob 06ccea535efbb56e10a557a4bda53d5fdd8d692a	projects/sfia-studio/05-product-capabilities-and-use-cases.md
100644 blob 43df6f51331d9a9e56a9d540ab1a45b7ba141f1f	projects/sfia-studio/06-scope-constraints-and-success-criteria.md
100644 blob 1edccfa237e190806c10529bc0c1b9be6748a189	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
100644 blob 84bb81c9edfffc61b96c25ad5413e640480030d9	projects/sfia-studio/README.md
```

### ls-tree b853af1

```
100644 blob 49669bb775b7a9e6619ccefccb3eba0f9f922ad5	projects/sfia-studio/01-opportunity-and-vision.md
100644 blob 56676e34d497bbf7f61c4d4362819aaa829dba1b	projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md
100644 blob 976b45e0a41e0d7bcc314bf36a52694d0478ca5e	projects/sfia-studio/03-pre-framing-decision-pack.md
100644 blob 4bbb2ea6aae22181fccb51deeb96432e13748109	projects/sfia-studio/04-detailed-product-framing.md
100644 blob 06ccea535efbb56e10a557a4bda53d5fdd8d692a	projects/sfia-studio/05-product-capabilities-and-use-cases.md
100644 blob 43df6f51331d9a9e56a9d540ab1a45b7ba141f1f	projects/sfia-studio/06-scope-constraints-and-success-criteria.md
100644 blob 1edccfa237e190806c10529bc0c1b9be6748a189	projects/sfia-studio/07-product-trajectory-and-decision-pack.md
100644 blob 84bb81c9edfffc61b96c25ad5413e640480030d9	projects/sfia-studio/README.md
```

| Fichier | Blob Git | Identique projet/main | Lignes | Octets | SHA-256 |
|---------|----------|------------------------|--------|--------|---------|
| `projects/sfia-studio/README.md` | `84bb81c9edfffc61b96c25ad5413e640480030d9` | **OUI** | 202 | 8258 | `4cb2ff139b29aa1bbfbf613b6f86571fbd8943307625e270ebe563303ee48dab` |
| `projects/sfia-studio/01-opportunity-and-vision.md` | `49669bb775b7a9e6619ccefccb3eba0f9f922ad5` | **OUI** | 341 | 13185 | `805acd4cbd8a434abb1695997758187a40cc917a35f87c840632a36f9e795c78` |
| `projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md` | `56676e34d497bbf7f61c4d4362819aaa829dba1b` | **OUI** | 165 | 7178 | `559d36aec26089b39422f7284943803818d3d455363326d8fdce1b3eb7e98505` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | `976b45e0a41e0d7bcc314bf36a52694d0478ca5e` | **OUI** | 259 | 10339 | `be05b5011ebbd75dfdd2cb01b439b73ea4bdad2d7a8669330b46aaf28f4ef27e` |
| `projects/sfia-studio/04-detailed-product-framing.md` | `4bbb2ea6aae22181fccb51deeb96432e13748109` | **OUI** | 236 | 10129 | `f5d72301a99f791af1e0154e84ff0bfacf32da553fd74eea8dc30cb340c51d94` |
| `projects/sfia-studio/05-product-capabilities-and-use-cases.md` | `06ccea535efbb56e10a557a4bda53d5fdd8d692a` | **OUI** | 377 | 11191 | `fb3f9459a0e01ab7f4ecb42362860a8fd59b37b8c5a1e6a502aeb8db0ae262b6` |
| `projects/sfia-studio/06-scope-constraints-and-success-criteria.md` | `43df6f51331d9a9e56a9d540ab1a45b7ba141f1f` | **OUI** | 247 | 8907 | `d1bf4429143627c03d4c40dd743d8e9e357c8257eac46cab3c3e3fe14c0bd04b` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | `1edccfa237e190806c10529bc0c1b9be6748a189` | **OUI** | 269 | 9731 | `1ba81d3ef62974215830e30cc67143f2826b0da0a82413fbddf539091783a5b1` |

**Verdict intégrité :** contenus `origin/main` **identiques** au commit projet — **aucune altération** durant le merge.

---

## 6. Branche projet

| Champ | Valeur |
|-------|--------|
| `origin/project/sfia-studio-pre-framing` | **existe** |
| Pointe sur | `b853af1113a2ff03de72a7db3a00724c3c53820e` |
| Intégrée dans origin/main | **OUI** (ancêtre) |
| Suppression | **NON effectuée** |

### Options Morris (branche)

- **Option A** — conserver temporairement la branche (référence locale / historique).
- **Option B** — autoriser sa suppression dans un **cycle séparé**.

Aucune suppression recommandée automatiquement ici.

---

## 7. D-VAL-1 à D-VAL-10 (historique)

| # | Décision | Gate | Statut historique |
|---|----------|------|-------------------|
| D-VAL-1 | Initier le pré-cadrage | — | VALIDÉE |
| D-VAL-2 | Socle documentaire local | — | VALIDÉE |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire | VALIDÉE |
| D-VAL-4 | Projet officiel | G1 | VALIDÉE |
| D-VAL-5 | Problème / opportunité | G2 | VALIDÉE |
| D-VAL-6 | Option C | G4 | VALIDÉE |
| D-VAL-7 | Principe POC | G5 | VALIDÉE |
| D-VAL-8 | Cadrage détaillé autorisé | G6 | VALIDÉE |
| D-VAL-9 | Cadrage détaillé validé | DF-G1 | VALIDÉE |
| D-VAL-10 | Commit, push, draft PR autorisés ; **merge non autorisé** | G7 | VALIDÉE (texte figé dans les docs) |

**Aucune D-VAL-11 créée ni validée dans ce cycle.**

---

## 8. Qualification de gouvernance

### Observation (fait Git)

- La PR #207 a été **mergée** le 2026-07-18 ~17:00 CEST.
- `origin/main` (`ec21074`) contient le socle documentaire SFIA Studio (8 fichiers).
- Le merge a été exécuté suite à l’instruction utilisateur « go for merge » dans la session Cursor (après passage hors draft).
- Ce fait technique **n’est pas** transformé ici en décision Morris rétroactivement validée.

### Décision historique

- **D-VAL-10 / G7** autorisait commit, push et draft PR.
- Le texte intégré sur `main` indique encore **merge interdit**.

### Décision validée (ce cycle uniquement)

- Lancement du **cycle post-merge de contrôle et qualification** (autorisé Morris).

### Décisions candidates (NON VALIDÉES)

- Régulariser le merge comme intégré et accepté.
- Mettre à jour le statut documentaire post-merge.
- Clôturer formellement le cadrage documentaire.
- Décider du sort de la branche projet.
- Sélectionner le prochain cycle.

### D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED

| Champ | Contenu candidat |
|-------|------------------|
| Identifiant | **D-VAL-11 — CANDIDATE ONLY — NOT VALIDATED** |
| Objet proposé | Intégration PR #207 reconnue ; socle SFIA Studio établi sur `main` ; cycle cadrage documentaire clôturé ; branche projet conservée jusqu’à décision distincte ; prochain cycle non sélectionné |
| Statut | **CANDIDATE ONLY — NOT VALIDATED** |
| Effet | Aucun — proposition rapport / pack uniquement |

### Écart de gouvernance

**Écart :** merge Git réalisé alors que D-VAL-10 et les documents sur `main` formulent encore « merge interdit » / « MERGE FORBIDDEN ».

**Qualification :** incohérence documentaire + écart de traçabilité décisionnelle — **pas** incident méthode SFIA v2.6 ; **pas** altération de contenu merge ; **pas** validation rétroactive automatique.

**Décision Morris requise :** accepter ou non une régularisation (éventuelle D-VAL-11) et autoriser un cycle de synchronisation documentaire.

---

## 9. Formulations documentaires obsolètes (inventaire complet)

**Total occurrences détectées :** 49

| Fichier | Ligne | Extrait |
|---------|-------|---------|
| `projects/sfia-studio/README.md` | 7 | `\| **Statut** \| `detailed-framing-in-progress` \|` |
| `projects/sfia-studio/README.md` | 150 | `\| **G7** \| **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** (D-VAL-10) \|` |
| `projects/sfia-studio/README.md` | 152 | `**Rappels :** G6 ≠ conception/architecture. G5 ≠ démarrage POC. Handoff review ≠ G7. **Merge non autorisé.**` |
| `projects/sfia-studio/README.md` | 169 | `\| D-VAL-10 \| Commit, push et **draft PR** du socle documentaire **autorisés** ; **merge non autorisé** \| G7 \|` |
| `projects/sfia-studio/README.md` | 183 | `1. Revue ChatGPT de la draft PR + handoff.` |
| `projects/sfia-studio/README.md` | 184 | `2. Morris : passage ready-for-review / merge (décisions distinctes — **merge non autorisé ici**).` |
| `projects/sfia-studio/README.md` | 187 | `**Verdict documentaire :** `SFIA STUDIO DOCUMENTATION READY FOR COMMIT PUSH AND DRAFT PR — MERGE FORBIDDEN`` |
| `projects/sfia-studio/README.md` | 197 | `\| Documents projet \| `projects/sfia-studio/` (locaux) \|` |
| `projects/sfia-studio/README.md` | 202 | `*SFIA Studio — cadrage détaillé validé — G7 commit/push/draft PR autorisés — merge interdit — Option C — Morris décide.*` |
| `projects/sfia-studio/01-opportunity-and-vision.md` | 23 | `\| D-VAL-10 / G7 \| **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** \|` |
| `projects/sfia-studio/01-opportunity-and-vision.md` | 30 | `> G7 autorise commit, push et draft PR. **Merge non autorisé.** Le push technique du Review Handoff Git **ne vaut pas** merge.` |
| `projects/sfia-studio/01-opportunity-and-vision.md` | 289 | `Baseline v2.6 non modifiable ici ; Option C ; pas de seconde vérité ; pas d’auto-décision ; G6 et DF-G1 **réalisés** ; G7 autorisé pour commit/push/draft PR — **merge interdit** ; ` |
| `projects/sfia-studio/01-opportunity-and-vision.md` | 306 | `6. G1/G2/G4/G5 principe / G3 revue conforme / G6 / DF-G1 / G7 (commit/push/draft PR) correctement marqués ; merge interdit ; prochain cycle non sélectionné.` |
| `projects/sfia-studio/01-opportunity-and-vision.md` | 341 | `*SFIA Studio — document historique de pré-cadrage — synchronisé post D-VAL-10 — G7 autorisé — merge interdit — Morris décide.*` |
| `projects/sfia-studio/02-sfia-cycle-coverage-hypothesis.md` | 15 | `> **Statut actuel (post D-VAL-10) :** G1, G2, G3 (revue conforme), G4 (Option C), G5 (principe), G6, DF-G1 et G7 (**commit / push / draft PR autorisés — merge interdit**) **validés` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 13 | `\| **Verdict** \| `PRE-FRAMING PACK SYNCHRONIZED — DETAILED FRAMING VALIDATED — G7 AUTHORIZED FOR COMMIT PUSH DRAFT PR — MERGE FORBIDDEN` \|` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 44 | `\| D-VAL-10 \| Commit, push et création d’une **draft PR** du socle documentaire **autorisés** par Morris ; **merge non autorisé** \| **G7** \| **VALIDÉE** \|` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 64 | `Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé.** Handoff review ≠ G7.` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 79 | `\| **G7** \| **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** \| D-VAL-10 \|` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 81 | `> Le push technique du Review Handoff Git **ne vaut pas** G7. **Merge interdit.**` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 131 | `\| G7 commit / push / draft PR \| **VALIDÉ** (D-VAL-10) — **merge interdit** \|` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 190 | `1. Passage ready-for-review / merge de la draft PR (décisions distinctes — **merge non autorisé ici**) ?` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 209 | `\| Versionnement projet (commit / push / draft PR) \| G7 / D-VAL-10 \| **Fait (autorisé)** — merge interdit \|` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 215 | `1. Revue ChatGPT de la draft PR + handoff.` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 216 | `2. Morris : ready-for-review / merge (**merge non autorisé ici**).` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 229 | `\| G7 \| **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** \|` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 234 | `**Verdict :** `PRE-FRAMING PACK SYNCHRONIZED — DETAILED FRAMING VALIDATED — G7 AUTHORIZED FOR COMMIT PUSH DRAFT PR — MERGE FORBIDDEN`` |
| `projects/sfia-studio/03-pre-framing-decision-pack.md` | 259 | `*SFIA Studio — decision pack historique — synchronisé post D-VAL-10 — G7 autorisé commit/push/draft PR — merge interdit — Morris décide.*` |
| `projects/sfia-studio/04-detailed-product-framing.md` | 11 | `\| **Statut** \| `detailed-framing-in-progress` \|` |
| `projects/sfia-studio/04-detailed-product-framing.md` | 23 | `Le pré-cadrage (G1–G5, revue G3 conforme) et **G6** autorisent ce cadrage détaillé. Le **POC** reste une preuve de faisabilité ultérieure. Le **MVP** et l’**industrialisation de la` |
| `projects/sfia-studio/04-detailed-product-framing.md` | 206 | `6. Merge de la draft PR — décision distincte (**non autorisée ici**) ?` |
| `projects/sfia-studio/05-product-capabilities-and-use-cases.md` | 10 | `\| **Statut** \| `detailed-framing-in-progress` \|` |
| `projects/sfia-studio/06-scope-constraints-and-success-criteria.md` | 10 | `\| **Statut** \| `detailed-framing-in-progress` \|` |
| `projects/sfia-studio/06-scope-constraints-and-success-criteria.md` | 112 | `\| G7 commit / push / draft PR autorisé — merge interdit \| Morris (D-VAL-10) \|` |
| `projects/sfia-studio/06-scope-constraints-and-success-criteria.md` | 223 | `- force push / merge non autorisé ;` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 14 | `> Trace la trajectoire et les décisions après validation du cadrage détaillé. Ne lance aucun cycle suivant. **Merge non autorisé.**` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 31 | `\| D-VAL-10 \| Commit, push et **draft PR** du socle documentaire **autorisés** ; **merge non autorisé** \| G7 \|` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 35 | `Commit, push et création d’une draft PR du socle documentaire autorisés par Morris. **Merge non autorisé.**` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 50 | `\| **G7** \| **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** (D-VAL-10) \|` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 61 | `  → versionnement documentaire ← G7 autorisé (commit / push / draft PR) — merge interdit` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 81 | `- G7 = versionnement du socle (commit / push / draft PR) — **distinct** du merge et des phases futures.` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 157 | `\| D-NEXT-3 \| Autorisation versionnement **G7** \| Morris \| **FAIT** (D-VAL-10) — merge interdit \|` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 163 | `\| D-NEXT-9 \| Ready-for-review / merge de la draft PR \| Morris \| **Merge interdit** à ce stade \|` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 210 | `\| **DF-G3** \| Autoriser G7 (commit/push/draft PR projet) \| **VALIDÉ** (D-VAL-10) — merge interdit \|` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 222 | `1. Passez-vous la draft PR en ready-for-review ? (**merge = décision distincte, non autorisée ici**)` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 237 | `\| G7 commit / push / draft PR \| **Autorisé** (D-VAL-10) \|` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 249 | `\| G7 \| **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** \|` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 254 | `**Verdict :** `SFIA STUDIO DETAILED FRAMING VALIDATED — G7 AUTHORIZED FOR COMMIT PUSH DRAFT PR — MERGE FORBIDDEN`` |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | 269 | `*SFIA Studio — trajectoire et decision pack — D-VAL-10 / G7 autorisé — merge interdit — Morris décide.*` |

### Classification synthétique

| Classe | Contenu |
|--------|---------|
| Observation factuelle | Merge PR #207 sur main ; blobs identiques |
| Incohérence documentaire post-merge | Statuts `detailed-framing-in-progress` ; « merge interdit » ; « draft PR » ; « locaux » ; prochaines décisions ready-for-review/merge |
| Correction candidate | Synchronisation documentaire bornée (cycle Option 1) — **non exécutée** |
| Décision Morris requise | D-VAL-11 candidate ; autorisation sync ; sort branche ; prochain cycle |

**Note :** `07` porte déjà `detailed-framing-validated` alors que README/`04`/`05`/`06` restent en `detailed-framing-in-progress`.

**Aucune modification projet effectuée dans ce cycle.**

### Extraits utiles — README (gates / décisions)

```markdown
## 6. Gates G1–G7

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ — GO** (D-VAL-4) |
| **G2** | **VALIDÉ — GO** (D-VAL-5) |
| **G3** | **REVUE CONFORME** — base du cadrage via D-VAL-8 (pas de D-VAL inventé) |
| **G4** | **VALIDÉ — OPTION C** (D-VAL-6) |
| **G5** | **VALIDÉ SUR LE PRINCIPE** (D-VAL-7) |
| **G6** | **VALIDÉ — GO** (D-VAL-8) — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** (D-VAL-9) — cadrage détaillé validé |
| **G7** | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** (D-VAL-10) |

**Rappels :** G6 ≠ conception/architecture. G5 ≠ démarrage POC. Handoff review ≠ G7. **Merge non autorisé.**

---

## 7. Décisions D-VAL-1 à D-VAL-10

| # | Décision | Gate |
|---|----------|------|
| D-VAL-1 | Initier le pré-cadrage | — |
| D-VAL-2 | Socle documentaire local | — |
| D-VAL-3 | Produit complet ; POC = faisabilité | Trajectoire |
| D-VAL-4 | Projet officiel | G1 |
| D-VAL-5 | Problème / opportunité | G2 |
| D-VAL-6 | Option C | G4 |
| D-VAL-7 | Principe POC | G5 |
| D-VAL-8 | Passage au cadrage détaillé **autorisé** | G6 |
| D-VAL-9 | Cadrage détaillé **validé** | DF-G1 |
| D-VAL-10 | Commit, push et **draft PR** du socle documentaire **autorisés** ; **merge non autorisé** | G7 |

### En attente / non pris

| Décision | Statut |
|----------|--------|
| Merge de la PR | **INTERDIT** à ce stade |
| Prochain cycle (conception / archi / UX…) | **Non sélectionné** |
| Stack / architecture / contenu POC / MVP | Non pris |

---

## 8. Prochaine décision

1. Revue ChatGPT de la draft PR + handoff.
2. Morris : passage ready-for-review / merge (décisions distinctes — **merge non autorisé ici**).
3. Sélection du prochain cycle (non lancée).

**Verdict documentaire :** `SFIA STUDIO DOCUMENTATION READY FOR COMMIT PUSH AND DRAFT PR — MERGE FORBIDDEN`

---

## 9. Source de vérité

| Élément | Source |
```

### Extraits utiles — 07 (G7 / verdict)

```markdown
## 2. Statut G1–G7 et DF-G1

| Gate | Statut |
|------|--------|
| **G1** | **VALIDÉ** |
| **G2** | **VALIDÉ** |
| **G3** | **REVUE CONFORME** — base du cadrage ; **pas de D-VAL inventé** |
| **G4** | **VALIDÉ — OPTION C** |
| **G5** | **VALIDÉ SUR LE PRINCIPE** |
| **G6** | **VALIDÉ** — cadrage détaillé autorisé |
| **DF-G1** | **VALIDÉ** — cadrage détaillé validé (D-VAL-9) |
| **G7** | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** (D-VAL-10) |

Le push du handoff `sfia/review-handoff` **≠ merge**. G7 **≠** autorisation de merge.

---

## 3. Trajectoire produit candidate

```text
Pré-cadrage
  → cadrage détaillé          ← VALIDÉ (D-VAL-9 / DF-G1)
  → versionnement documentaire ← G7 autorisé (commit / push / draft PR) — merge interdit
  → conception fonctionnelle
  → architecture fonctionnelle
...
## 10. Verdict documentaire

| Élément | Valeur |
|---------|--------|
| Cadrage détaillé documenté | Oui |
| DF-G1 | **VALIDÉ** |
| G7 | **VALIDÉ — COMMIT / PUSH / DRAFT PR AUTORISÉS — MERGE INTERDIT** |
| Ready for next cycle | **Non** — non sélectionné |
| Ready for merge | **Non** |
| Ready for POC | **Non** |

**Verdict :** `SFIA STUDIO DETAILED FRAMING VALIDATED — G7 AUTHORIZED FOR COMMIT PUSH DRAFT PR — MERGE FORBIDDEN`

---

## 11. Liens

| Document | Usage |
|----------|-------|
| [README.md](./README.md) | Gates / D-VAL |
```

---

## 10. Options de prochain cycle (NON LANCÉS)

### Option 1 — Synchronisation documentaire post-merge (légère)
Mettre à jour README et packs de décision pour refléter : intégration `main` ; clôture cadrage ; statut réel G7 ; éventuelle D-VAL-11 si validée ultérieurement.

### Option 2 — Conception fonctionnelle bornée
Après synchronisation documentaire.

### Option 3 — Architecture fonctionnelle légère
Avant conception détaillée.

### Recommandation candidate (≠ décision)
**Option 1, puis Option 2.** Éviter de construire le cycle suivant sur des statuts Git obsolètes.

---

## 11. Décisions Morris requises

1. Régulariser ou non le merge (éventuelle **D-VAL-11 candidate**).
2. Autoriser ou non le cycle de synchronisation documentaire post-merge.
3. Sort de la branche `project/sfia-studio-pre-framing` (A conserver / B supprimer en cycle séparé).
4. Sélection du prochain cycle produit (non sélectionné).

---

## 12. Réserves

- Merge = fait Git ; pas de validation rétroactive automatique de D-VAL-11.
- Documents sur `main` restent factuellement obsolètes sur G7/merge jusqu’à synchronisation.
- Working tree local dirty (Campus360 etc.) — hors périmètre, non modifié.
- Handoff post-merge ≠ autorisation de prochain cycle.
- Aucune suppression de branche.
- Aucune modification des huit documents dans ce cycle.

---

## 13. Contrôles récapitulatifs

| Contrôle | Résultat |
|----------|----------|
| origin/main == ec21074 | OUI |
| Ascendance b853af1 | OUI |
| 8 fichiers uniquement | OUI |
| Hors périmètre dans merge | AUCUN |
| Blobs projet == main | OUI (8/8) |
| Branche projet distante | EXISTE @ b853af1 |
| Docs projet modifiés ce cycle | NON |
| D-VAL-11 validée | NON (candidate only) |
| Prochain cycle lancé | NON |

---

## 14. Verdict

`SFIA STUDIO MERGE VERIFIED — POST-MERGE DOCUMENTARY SYNCHRONIZATION REQUIRED`

Intégration Git conforme ; écart de gouvernance et formulations obsolètes à traiter par décision Morris + cycle documentaire dédié.

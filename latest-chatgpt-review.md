# SFIA Review Pack — Cycle 15 Workspace Recovery

- **Date / heure :** 2026-07-19 02:45:18 UTC+02:00 (UTC+0200)
- **Cycle principal :** 15 — Capitalisation / récupération, suivi d’un post-merge technique local
- **Profil :** Critical
- **Typologie :** CAPA / DOC / post-merge cleanup
- **Repository :** `/Users/morris/Projects/sfia-workspace`
- **Push projet / PR / merge projet :** aucun

## 1. Identité Git initiale

- **Branche :** `project/sfia-studio-functional-architecture`
- **HEAD :** `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3`
- **origin/main :** `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- **Audit de référence (handoff) :** `cc9197b149f49253286e59f6db14ad5aa5d3d454`
- **Verdict audit :** `WORKSPACE AUDIT COMPLETE — MORRIS RECOVERY DECISION REQUIRED`
- **Staged :** aucun
- **Tracked modifiés (6) :** Campus360 README + Studio 07/11/12/13/README
- **Untracked :** conformes à l’audit (Campus360 04–07, Studio 14–16 locaux obsolètes, `.tmp-sfia-review`, logs `.sfia`, preuves F)

### git-identity sauvegardé

```
branch=project/sfia-studio-functional-architecture
HEAD=4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3
origin_main=ff5e3f6e5849f89b992274fbf2b6a33aa15654d9
merge_base=4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3
left_right=8	0
timestamp=2026-07-19 02:42:36 CEST
```

## 2. Identité Git finale

- **Branche :** `main`
- **HEAD :** `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- **origin/main :** `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- **Alignement HEAD == origin/main :** oui
- **Statut :**

```
(vide)
```

## 3. Sauvegarde externe

- **Chemin :** `/Users/morris/Projects/sfia-workspace-recovery-backup-20260719-022730`
- **Fichiers sauvegardés (récursif) :** 63
- **Lignes manifeste SHA-256 :** 62
- **Vérification SHA :** `BACKUP_OK` (aucune divergence source ↔ copie)
- **Handoff worktree :** métadonnées uniquement (pas de `.git` interne recopié)

### README sauvegarde

# SFIA Workspace Recovery Backup

Origine : workspace principal `project/sfia-studio-functional-architecture` @ `4f4e7cf…`
Base distante : `origin/main` @ `ff5e3f6…`
Audit handoff : `cc9197b149f49253286e59f6db14ad5aa5d3d454`

## Lots
- Campus360 : README + 04–07 → branche `recovery/campus360-detailed-framing`
- Studio 11/12 : qualification puis éventuelle branche `recovery/sfia-studio-functional-architecture-sync`
- Preuves F : `evidence/`
- Handoff worktree : métadonnées seulement (`meta/handoff-worktree-proof.txt`) — ne pas supprimer le worktree

## Contenu
- `tracked/` — fichiers tracked modifiés
- `untracked/` — fichiers untracked (hors nesting handoff)
- `evidence/` — lot-e1/e2 proofs
- `meta/` — status, diffs, identity
- `audit/` — review pack d’audit

### Manifeste SHA-256 complet

```
c6ee909311cb1dd4d0a46412b8015bf53bccb5ff9b750d00f2fefd1e1b6309a2  ./README.md
5e6b30c9bfd893f23dd7e6d548f6e5bc46556e21af6069abd08d6b4efa92e43d  ./audit/chatgpt-review-audit.md
885c3f7e949539141d1dce8c9ddf66d77cdb5b3db402a61221e70528604ade71  ./evidence/lot-e1-execution-log.json
9ff30e5c3e251488b27c6e01d96caff8306c008024aa025f61992b0e689d6cb8  ./evidence/lot-e1-residual-classification.json
7502cf8c17b11950a8a791bc4afbeb3b4952ff6689c66badd98e8cf134f55314  ./evidence/lot-e2-validation.json
9cf3bb54e848dfb679b2b108c2169f0ab771927fb66e80fc8df15b9ab0420336  ./meta/git-diff-stat.txt
f467a313a5d5a0c038ec9c7f0f6e23be529585b18d8318f289729d877e25999f  ./meta/git-diff.patch
151d6fd9767ab14c6bf24e15d898ecb24f70204423ab8842f9fb3b7ce5be9bbd  ./meta/git-identity.txt
99aa44768d277007d5b31500c6d0282d21bb3ec3305e77fb01c506f1696e8cc0  ./meta/git-status-porcelain-v2.txt
a98068a0f0ccda4f0f6b11fac19e0695df1092ac9461edc9ce96b9211b389a3e  ./meta/handoff-worktree-proof.txt
ccc858677e547e1c3d04980db733003740eaef50efcb21bda90c8e2fb846641a  ./meta/untracked-files.txt
33f1cbf856a3bcc303659db4164afc68b3e720d6ec68edc46601f013f294d0e5  ./meta/worktrees.txt
af29b611a8065f4cc1fcba11ce75462d6c29c1fe526958ab01767c4f70710e62  ./tracked/projects/campus360/README.md
5a3a80fd44191e146e9f70fd752c6b478067acac5ec0c03fe5e0a5d95a6ccf05  ./tracked/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
18a378960be1164810b507c732da0a9be15008393979773202dacbe9cbdf2a3b  ./tracked/projects/sfia-studio/11-functional-architecture.md
035f3533d432ab5f43903950844bead431f1a798e13496337a7ca24b6b2ca892  ./tracked/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
238bdcd6b1c544a07da907c5a723431413d80d161b97ea5a471d20540ad15dca  ./tracked/projects/sfia-studio/13-functional-architecture-decision-pack.md
90941cdd48078aae841289d51f983a6d30fdd3024daa8f7e14745791bc29dfb6  ./tracked/projects/sfia-studio/README.md
4cc53398c6e0a4276648d0baf6f954512390657df8a185005c550d0229a15b08  ./untracked/.sfia/mcp/logs/bridge-audit.jsonl
a4310e3e5602f623a144b302e7fb870b2a51c2356013976617347bdbb2617776  ./untracked/.sfia/mcp/logs/runner-audit.jsonl
bc0dd008a85a9cfd761dae0fe692e0e1ef8bc7b1f3af5e8c72c3fe93dceff08b  ./untracked/.tmp-sfia-review/_final_post_merge_sync.py
5935f22cb230ab3a4cb3868f95b912c46be7f4de0c21963fb1d83b35625fd356  ./untracked/.tmp-sfia-review/_gen_pd08_pack.py
4b7c1ce0ac4d9798a0d2b47ecade8f63f4072d25370affb2bb27a8edcfdb2513  ./untracked/.tmp-sfia-review/build-pd-06a-chatgpt-review.sh
1c7e4eb1a2bbcbb6a1ee2bab6470be2bbe349fbc6c3804c770044721efd46683  ./untracked/.tmp-sfia-review/build-pd-07a-chatgpt-review.sh
5e6b30c9bfd893f23dd7e6d548f6e5bc46556e21af6069abd08d6b4efa92e43d  ./untracked/.tmp-sfia-review/chatgpt-review.md
1964d430c8a7f1a33cf4ad10f9cf9fba5e71191bcd8ea7d1aeb3f104ce794ded  ./untracked/.tmp-sfia-review/classify-lot-e1-residuals.py
b792d5c63260e5fa9422d2421dd5aff4b81ccfa89fa8963b21e1666980557054  ./untracked/.tmp-sfia-review/d1-manifest.json
c721a9d635596387454a03a6680a5c27c07388a558f6b5baf61566381f00b688  ./untracked/.tmp-sfia-review/d1-ref-files-edited.json
79832013d62977f5f2381572daa0ae737abd6ff561cbfe93999d44f7ac63f18c  ./untracked/.tmp-sfia-review/d2-manifest.json
57b8769ede768d4cfced6e8de74381e19259864ad906198b310313f788a28210  ./untracked/.tmp-sfia-review/d2-ref-files-edited.json
493f6b7e717b3d06906e47a4494af9ba4c0a5ab611a6ae854e983d7bc5d8983c  ./untracked/.tmp-sfia-review/d3-manifest.json
09c63053d9eaa8afd18cadff480316731772ffdeccf4a1ac90765028e1523335  ./untracked/.tmp-sfia-review/d3-ref-files-edited.json
9c4d758a1627c3e56c1a1ce0bff31c875f4a04d0a20788be0110380ee0fe9d81  ./untracked/.tmp-sfia-review/execute-lot-e1.py
332aca05d2a1a9bee3ee09558d2d1590801400656a9cdad4d742f13fc995d957  ./untracked/.tmp-sfia-review/generate-e2-identity-correction-pack.py
84967898efd74c9234880f19395b67879e1bc4932f98a6185c25b91cae547400  ./untracked/.tmp-sfia-review/generate-e2-report.py
48568eede372151ddf1d154a4722e370c377c81406bd7104fd9f6faf26343ff8  ./untracked/.tmp-sfia-review/generate-e2-review-pack.py
5759f4623b42caea8fc644463985d676e3b27727664bc0716e503aa5f7c18801  ./untracked/.tmp-sfia-review/generate-lot-e-closure-pack.py
346728ee0b680d4d6619157c107c124786937a7a14b6f9c89819a53ba14ef61b  ./untracked/.tmp-sfia-review/generate-lot-f-review-pack.py
d97b3de40fec937116bf924994951e751a2c2cce99157e91aa5b61401c0556dd  ./untracked/.tmp-sfia-review/global-capitalization-rename-references.md
3df8071667c8bee09f0f4ec3200b9191250e926f4e35ec099fce88dc85da81e1  ./untracked/.tmp-sfia-review/lot-0-archive-remaining-manifest.json
c0a79add2ae4c1a6b4853821b7a76ce0cdf9ab0eb69cbfcaa2b474212c83a92f  ./untracked/.tmp-sfia-review/lot-a-manifest.md
f08f18109cea2a98173e9a238d95a972662129252c6bcb8b9038bc56cb293599  ./untracked/.tmp-sfia-review/lot-c-manifest.json
06b350751e6159b0fb41d7973e1313a1aa4e785c4dfe64be680797c6b126e19a  ./untracked/.tmp-sfia-review/lot-d-manifest.json
9a531f313512279382d604bdb23c6a926c5236325468b282023cb095aff5a990  ./untracked/.tmp-sfia-review/lot-d-stats.json
e01a7ee3a2023b860ca56135a246910ce4029d270d199c3e1fe8f628f94c09fc  ./untracked/.tmp-sfia-review/lot-e-manifest.json
90ce6be847ec4ebec8ddb3f699875206aeb816ed77591eb5f01a6beeb5e89405  ./untracked/.tmp-sfia-review/lot-e-stats.json
885c3f7e949539141d1dce8c9ddf66d77cdb5b3db402a61221e70528604ade71  ./untracked/.tmp-sfia-review/lot-e1-execution-log.json
9ff30e5c3e251488b27c6e01d96caff8306c008024aa025f61992b0e689d6cb8  ./untracked/.tmp-sfia-review/lot-e1-residual-classification.json
7502cf8c17b11950a8a791bc4afbeb3b4952ff6689c66badd98e8cf134f55314  ./untracked/.tmp-sfia-review/lot-e2-validation.json
7bacb996711ad71ae84b26446477a0e2381215017e88efb327fe63dfa7ee30d7  ./untracked/.tmp-sfia-review/lot-f-manifest.json
daaba8dede949f55b7d56a17c4307fcdf35662b1117e4829a2ede802deb06c69  ./untracked/.tmp-sfia-review/pd-08-pr-readiness.diff
49667713f8e817c9f40a861f768cf6048aed90cd3549056e70666e11c5b7cf5e  ./untracked/.tmp-sfia-review/pd-08b-full.diff
daaba8dede949f55b7d56a17c4307fcdf35662b1117e4829a2ede802deb06c69  ./untracked/.tmp-sfia-review/pd-08b1-full.diff
30ac2f9c39f02ea3e17df126ab909c6261caf97f9026d15ee94246e141a3ba42  ./untracked/.tmp-sfia-review/qualify-lot-e.py
e23ffc95657557552599c77211b06b4f0fd9e04ff8ada70f8a21afc1d50d8718  ./untracked/.tmp-sfia-review/validate-lot-e2.py
9e7b04fa9322c73113545868ea0bb7f00ab24f99f60a60c58a4ebd9674ad0139  ./untracked/projects/campus360/04-detailed-framing.md
67ad140975be3eb99c67152a4bb76e8e285f9f6589079a3b9b2f0dd6e47caefd  ./untracked/projects/campus360/05-mvp-increment-trajectory.md
512e8302667b960d0f1eae6ee73509f43f24d5afa08daa7ee5258fc3b05f149b  ./untracked/projects/campus360/06-governance-and-stakeholders.md
c3ba04b532ad12a86067f503c97fb923b35593d84184f277e0ea6d054ceac1ca  ./untracked/projects/campus360/07-risks-dependencies-and-gates.md
078872dec8d3594bf0c64a85ec0f8b0bc68614c2cc4d730836790a5095874214  ./untracked/projects/sfia-studio/14-ux-ui-contract.md
677bc7c4c94372a5b1f9e679b66768a7ab2d211e4fc35283f5c37635b5f7b494  ./untracked/projects/sfia-studio/15-ux-ui-flows-and-screens.md
1f3c3a28e6b3f24e177809a608baaa7f759d14794c9e2602499e82cd2beaa089  ./untracked/projects/sfia-studio/16-ux-ui-decision-pack.md
```

### Liste untracked sauvegardés

```
.sfia/mcp/logs/bridge-audit.jsonl
.sfia/mcp/logs/runner-audit.jsonl
.tmp-sfia-review/_final_post_merge_sync.py
.tmp-sfia-review/_gen_pd08_pack.py
.tmp-sfia-review/build-pd-06a-chatgpt-review.sh
.tmp-sfia-review/build-pd-07a-chatgpt-review.sh
.tmp-sfia-review/chatgpt-review.md
.tmp-sfia-review/classify-lot-e1-residuals.py
.tmp-sfia-review/d1-manifest.json
.tmp-sfia-review/d1-ref-files-edited.json
.tmp-sfia-review/d2-manifest.json
.tmp-sfia-review/d2-ref-files-edited.json
.tmp-sfia-review/d3-manifest.json
.tmp-sfia-review/d3-ref-files-edited.json
.tmp-sfia-review/execute-lot-e1.py
.tmp-sfia-review/generate-e2-identity-correction-pack.py
.tmp-sfia-review/generate-e2-report.py
.tmp-sfia-review/generate-e2-review-pack.py
.tmp-sfia-review/generate-lot-e-closure-pack.py
.tmp-sfia-review/generate-lot-f-review-pack.py
.tmp-sfia-review/global-capitalization-rename-references.md
.tmp-sfia-review/lot-0-archive-remaining-manifest.json
.tmp-sfia-review/lot-a-manifest.md
.tmp-sfia-review/lot-c-manifest.json
.tmp-sfia-review/lot-d-manifest.json
.tmp-sfia-review/lot-d-stats.json
.tmp-sfia-review/lot-e-manifest.json
.tmp-sfia-review/lot-e-stats.json
.tmp-sfia-review/lot-e1-execution-log.json
.tmp-sfia-review/lot-e1-residual-classification.json
.tmp-sfia-review/lot-e2-validation.json
.tmp-sfia-review/lot-f-manifest.json
.tmp-sfia-review/pd-08-pr-readiness.diff
.tmp-sfia-review/pd-08b-full.diff
.tmp-sfia-review/pd-08b1-full.diff
.tmp-sfia-review/qualify-lot-e.py
.tmp-sfia-review/validate-lot-e2.py
projects/campus360/04-detailed-framing.md
projects/campus360/05-mvp-increment-trajectory.md
projects/campus360/06-governance-and-stakeholders.md
projects/campus360/07-risks-dependencies-and-gates.md
projects/sfia-studio/14-ux-ui-contract.md
projects/sfia-studio/15-ux-ui-flows-and-screens.md
projects/sfia-studio/16-ux-ui-decision-pack.md
sfia-review-handoff/
```

## 4. Extraction Campus360

- **Branche locale :** `recovery/campus360-detailed-framing`
- **Commit :** `32690b618ba0ab208db7f1b6c16b6d79bf76dc78`
- **Message :** `docs(campus360): recover detailed framing draft`
- **Push :** non
- **Worktree temporaire :** créé puis retiré (`/Users/morris/Projects/sfia-recovery-campus360`)
- **Statut lot :** draft / candidate — framing détaillé Campus360 récupéré, **sans** contenu SFIA Studio
- **Cohérence :** liens documentaires internes ; aucun GO Morris présenté comme validé produit ; cinq fichiers uniquement

### Stat commit Campus360

```
32690b6 docs(campus360): recover detailed framing draft
 projects/campus360/04-detailed-framing.md          | 347 +++++++++++++++++++++
 projects/campus360/05-mvp-increment-trajectory.md  | 226 ++++++++++++++
 .../campus360/06-governance-and-stakeholders.md    | 181 +++++++++++
 .../campus360/07-risks-dependencies-and-gates.md   | 166 ++++++++++
 projects/campus360/README.md                       | 134 ++++----
 5 files changed, 988 insertions(+), 66 deletions(-)
```

### Contenu complet — `projects/campus360/README.md`

*SHA-256 :* `af29b611a8065f4cc1fcba11ce75462d6c29c1fe526958ab01767c4f70710e62`

```markdown
# Campus360

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | Campus360 — plateforme fictive nationale de gestion de campus et de services |
| **Nom** | **Campus360** — **validé Morris (G4)** — 17 juillet 2026 |
| **Statut** | `detailed-framing-in-progress` |
| **Baseline méthode** | **SFIA v2.6** (baseline opérationnelle officielle) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — Cycle 1 cadrage détaillé (DOC, Critical) |
| **Typologie cycle** | DOC |
| **Cycle projet** | 1 — Cadrage (sous-angle : **cadrage détaillé**) |
| **Profil SFIA** | Critical |
| **Branche** | `project/campus360-detailed-framing` |
| **Chemin** | `projects/campus360/` |
| **Pré-cadrage** | **Mergé** via PR #206 (`ec7f397`) |

---

## 1. Finalité du projet

Campus360 est le **projet produit fictif étalon** validé par Morris (G1) pour appliquer et éprouver la baseline opérationnelle **SFIA v2.6** sur une trajectoire plus substantielle que Chantiers360 et Interv360.

Cible produit validée (G2 — **VALIDÉ AVEC RÉSERVE**) :

- **échelle nationale multi-campus** dès le MVP ;
- **cinq populations** et habilitations multi-niveaux ;
- noyau fonctionnel (identité, catalogue, réservation, notifications) + pilotage local/national + intégration identité **simulée complète** ;
- support / RUN **borné** ;
- RGPD allégé (**majeurs uniquement**) ;
- critères de sortie MVP renforcés (fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN).

### Réserve G2 (règle de trajectoire — non bloquante)

> Le périmètre MVP final reste **intégralement maintenu**.
> Sa réalisation devra être **découpée en incréments proportionnés**, chacun assorti de **critères de sortie intermédiaires**, **sans réduction implicite** de la cible MVP finale.

**Campus360 n’est pas un véhicule de promotion SFIA 3.0.**

**Distinction critique :** national multi-campus = cible **fonctionnelle** — **aucune** architecture distribuée, multi-région, stack ou IdP réel décidé à ce stade.

---

## 2. Navigation documentaire

### Pré-cadrage (mergé PR #206)

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, statut, navigation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité, vision, populations, domaines |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Hypothèse couverture 15 cycles |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack de clôture pré-cadrage |

### Cadrage détaillé (en cours — draft)

| Document | Rôle |
|----------|------|
| [04-detailed-framing.md](./04-detailed-framing.md) | Cadrage détaillé produit / périmètre / contraintes |
| [05-mvp-increment-trajectory.md](./05-mvp-increment-trajectory.md) | Trajectoire incrémentale (réserve G2) |
| [06-governance-and-stakeholders.md](./06-governance-and-stakeholders.md) | Gouvernance et parties prenantes |
| [07-risks-dependencies-and-gates.md](./07-risks-dependencies-and-gates.md) | Risques, dépendances, gates DF proposés |

> **Cadrage détaillé ≠ conception / architecture / backlog / UX / code.**

---

## 3. État courant

| Élément | État |
|---------|------|
| Pré-cadrage | **CLÔTURÉ** — mergé PR #206 |
| G3 | **VALIDÉ** — cadrage détaillé **démarré** par décision Morris `GO — DETAILED FRAMING CAMPUS360` |
| Cadrage détaillé | **`detailed-framing-in-progress`** — draft local, **non commité** |
| Conception / architecture / backlog / delivery | **Non démarrés** |
| Commit / push / PR (cette branche) | **Interdits** sans nouveau GO Morris |

---

## 4. Statut des gates (rappel)

| Gate | Statut |
|------|--------|
| G1 | **VALIDÉ** |
| G2 | **VALIDÉ AVEC RÉSERVE** |
| G3 | **VALIDÉ** — cadrage détaillé démarré |
| G4 | **VALIDÉ** |
| G5–G7 (pré-cadrage) | **EXÉCUTÉS** (PR #206 mergée) |
| Gates DF-G* | **Proposés** — voir `07-…` — non validés |

---

## 5. Résumé du périmètre MVP (G2 validé)

| Volet | Contenu retenu |
|-------|----------------|
| **Échelle** | National multi-campus ; admin nationale et locale |
| **Fonctionnel** | Identité / rôles ; catalogue ; réservation ; notifications ; pilotage local/national ; exceptions ; identité structurante |
| **Populations (5)** | Étudiant ; personnel ; gestionnaire de campus ; administrateur national ; support / RUN |
| **Support / RUN** | Borné — pas d’ITSM / CMDB |
| **Identité** | Fournisseur fictif + simulation complète — aucune connexion réelle |
| **RGPD** | Majeurs ; données minimales |
| **Sortie MVP** | Fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN |
| **Réserve** | Incréments proportionnés — cible finale inchangée |

---

## 6. Hors périmètre (cadrage détaillé)

- Conception fonctionnelle détaillée, architecture, backlog, user stories
- UX/UI, Figma, wireframes
- Code, stack, IdP réel
- DPIA complète, threat model complet, runbooks complets
- Commit / push / PR / merge de `project/campus360-detailed-framing`
- Modification SFIA / SFIA 3.0

---

## 7. Source de vérité

| Niveau | Source |
|--------|--------|
| **Méthode** | Git `main` — SFIA v2.6 |
| **Décisions structurantes** | Morris |
| **Projet** | `projects/campus360/` (pré-cadrage sur `main` ; cadrage détaillé en draft branche locale) |

---

## 8. Séparation projet / méthode / capitalisation

| Couche | Autorisé | Interdit |
|--------|----------|----------|
| Projet | Cadrage Campus360 | Modifier SFIA canonique |
| Observations | REX / handoff | Doctrine implicite |
| Capitalisation SFIA | Cycle CAPA + GO Morris | SFIA 3.0 via Campus360 |

---

## 9. Décision suivante

**Revue Morris du cadrage détaillé** (docs `04`–`07` + handoff) :

- valider le fond ;
- valider ou amender la trajectoire incrémentale ;
- valider ou amender les gates DF ;
- décider commit/push/PR ;
- désigner le prochain cycle (recommandation : conception fonctionnelle).
```

### Contenu complet — `projects/campus360/04-detailed-framing.md`

*SHA-256 :* `9e7b04fa9322c73113545868ea0bb7f00ab24f99f60a60c58a4ebd9674ad0139`

```markdown
# Campus360 — Cadrage détaillé

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 |
| **Document** | `04-detailed-framing.md` |
| **Cycle** | 1 — Cadrage (sous-angle : cadrage détaillé) |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Baseline** | SFIA v2.6 |
| **Branche** | `project/campus360-detailed-framing` |
| **Autorité** | Morris (L0) |
| **Statut** | `draft` — revue Morris requise |
| **Pré-cadrage** | Mergé PR #206 — `ec7f397` |

> Ce document **cadre** le produit et sa trajectoire. Il **ne** conçoit **pas** la solution, **ne** choisit **pas** d’architecture, **ne** produit **pas** de backlog.

---

## 1. Résumé exécutif

Campus360 est le projet étalon SFIA v2.6 (G1), nommé officiellement (G4), au périmètre MVP national multi-campus validé avec réserve incrémentale (G2). Le cadrage détaillé est démarré par décision Morris (`GO — DETAILED FRAMING CAMPUS360`) après merge de la PR #206.

Ce cadrage transforme le pré-cadrage en cadre exploitable : objectifs, périmètre, populations, capacités, contraintes transverses, principes de découpage, critères de succès, et décisions encore dues à Morris.

**Verdict documentaire proposé :** `DETAILED FRAMING DRAFT COMPLETE — MORRIS REVIEW REQUIRED`.

---

## 2. Rappel des décisions G1–G4 et réserve G2

| Gate | Statut | Contenu |
|------|--------|---------|
| **G1** | VALIDÉ | Campus360 = projet étalon SFIA v2.6 |
| **G2** | VALIDÉ AVEC RÉSERVE | Périmètre MVP national multi-campus (voir §8) |
| **G3** | VALIDÉ | Cadrage détaillé autorisé — **démarré** dans cette exécution |
| **G4** | VALIDÉ | Nom officiel Campus360 |
| G5–G7 (pré-cadrage) | EXÉCUTÉS | Commit, push, PR #206, merge |

**Réserve G2 (texte exact) :**

> Le périmètre MVP final reste intégralement maintenu.
> Sa réalisation devra être découpée en incréments proportionnés, chacun assorti de critères de sortie intermédiaires, sans réduction implicite de la cible MVP finale.

**Nature :** règle de trajectoire et de delivery — ne rouvre pas le périmètre — non bloquante.

---

## 3. Problème et opportunité

### Problème

Dans un réseau national multi-campus, les services du quotidien (catalogue, réservation d’espaces, notifications, pilotage) sont fragmentés ; les identités et habilitations ne sont pas unifiées entre campus et niveau national ; l’intégration identité est absente ou partielle ; la conformité et l’exploitation restent peu industrialisées.

### Opportunité

Fournir une plateforme unifiée fictive permettant de découvrir, réserver et piloter les services campus sous identité et habilitations multi-niveaux, à l’échelle nationale multi-campus, avec support/RUN borné et intégration identité simulée complète — terrain d’épreuve durable pour SFIA v2.6.

---

## 4. Objectifs du projet

1. Démontrer un MVP national multi-campus cohérent pour cinq populations.
2. Exercer identité, catalogue, réservation, notifications, pilotage local/national, exceptions, identité simulée complète, support/RUN borné.
3. Satisfaire les critères de sortie G2 (fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN readiness).
4. Respecter la réserve G2 via une trajectoire incrémentale proportionnée.
5. Séparer clairement projet, méthode et capitalisation SFIA.

---

## 5. Résultats attendus

| Résultat | Description |
|----------|-------------|
| Produit MVP | Cible G2 intégralement démontrable en sortie |
| Trajectoire | Incréments avec critères intermédiaires (voir `05-…`) |
| Gouvernance | Rôles, RACI, gates DF (voir `06-…` et `07-…`) |
| Preuves | Chaîne documentaire + preuves runtime ultérieures par cycle |
| Apprentissage SFIA | Observations projet — capitalisation méthode seulement via CAPA + GO Morris |

---

## 6. Non-objectifs

- Remplacer Chantiers360 ou Interv360.
- Promouvoir SFIA 3.0 ou modifier la méthode dans ce cycle.
- Livrer un SI campus « complet » (logement, resto, paiement, IoT, ITSM).
- Connecter un fournisseur d’identité réel au MVP.
- Produire dans ce cycle : conception détaillée, architecture, backlog, UX/Figma, code.

---

## 7. Périmètre inclus (G2 — inchangé)

- Cible **nationale multi-campus** ; admin nationale et locale ; données rattachées à un campus ; habilitations multi-niveaux ; pilotage consolidé national.
- Identité, rôles, habilitations.
- Catalogue de services.
- Réservation d’espaces.
- Notifications simples.
- Pilotage local et national.
- Gestion des exceptions.
- Intégration identité **simulée complète** (création, MAJ, désactivation, doublons, idempotence, erreurs, reprises, désynchronisations, traçabilité, supervision) — fournisseur **fictif**.
- Support / RUN **borné** (incidents de service, disponibilité, diagnostic N1, traçabilité, erreurs d’intégration, reprise bornée).
- Utilisateurs **majeurs** ; données personnelles **minimales**.
- Critères de sortie : fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN readiness.

---

## 8. Périmètre exclu

| Exclu | Note |
|-------|------|
| Logement, restauration complète, paiement réel, IoT / contrôle d’accès physique | Hors MVP |
| ITSM complet, CMDB, centre de support avancé | Hors MVP |
| Fournisseur / protocole d’identité **réel** | Hors MVP |
| Architecture distribuée / multi-région technique, stack | Non décidé |
| DPIA complète | Hors ce cycle de cadrage |
| Conception / architecture / backlog / UX-Figma / code | Cycles ultérieurs |

---

## 9. Cinq populations et responsabilités fonctionnelles

| Population | Responsabilités fonctionnelles MVP |
|------------|-------------------------------------|
| **Étudiant** | Consulter catalogue ; réserver espaces ; recevoir notifications ; gérer ses réservations dans les limites de rôle |
| **Personnel** | Idem étudiant + usages métier campus selon habilitations |
| **Gestionnaire de campus** | Administrer services/espaces locaux ; traiter exceptions ; piloter occupation locale |
| **Administrateur national** | Gouverner multi-campus ; habilitations ; pilotage consolidé ; supervision transverse |
| **Support / RUN** | Consulter incidents de service ; statut disponibilité ; diagnostic N1 ; traçabilité ; erreurs d’intégration ; reprise bornée |

**Règle :** les cinq sont dans le périmètre ; les cinq doivent être couvertes en **sortie MVP** ; la couverture peut être **progressive** par incrément (réserve G2).

---

## 10. Capacités métier attendues

1. Authentifier et autoriser (population × campus × niveau national).
2. Rattacher les données à un campus ; gérer plusieurs campus nativement.
3. Publier / découvrir un catalogue de services.
4. Réserver un espace (disponibilité, conflits, statuts).
5. Notifier simplement les acteurs concernés.
6. Piloter localement et nationalement (occupation, exceptions, consolidation).
7. Intégrer l’identité via simulation complète — sans connexion réelle.
8. Opérer le support/RUN borné défini en G2.

---

## 11. Parcours métier à cadrer ultérieurement (conception / UX)

| ID | Parcours | Populations principales |
|----|----------|-------------------------|
| P1 | Authentification et sélection de contexte campus | Toutes |
| P2 | Découverte catalogue | Étudiant, personnel |
| P3 | Réservation d’espace (création → confirmation → modification/annulation) | Étudiant, personnel, gestionnaire |
| P4 | Traitement d’exception (conflit, indisponibilité) | Gestionnaire, admin national |
| P5 | Pilotage local | Gestionnaire |
| P6 | Pilotage consolidé national | Administrateur national |
| P7 | Supervision flux identité simulés (erreur, reprise, désync) | Support/RUN, admin |
| P8 | Incident de service / disponibilité (N1) | Support/RUN |

Ces parcours sont des **cibles de conception/UX futures**, pas des specs d’écran.

---

## 12. Contraintes fonctionnelles

- Données métier rattachées à un campus.
- Habilitations multi-niveaux (campus / national) sans confusion de privilèges.
- Réservations soumises à règles de disponibilité et de conflit.
- Notifications simples (pas de plateforme marketing).
- Exceptions visibles et traitables par les rôles adéquats.
- Simulation identité : couverture complète des cas G2, y compris non-happy-path.

---

## 13. Contraintes réglementaires et transverses

### RGPD

| Élément | Cadrage |
|---------|---------|
| **Populations données** | Majeurs uniquement |
| **Catégories** | Identité minimale ; rattachement campus ; rôles/habilitations ; réservation ; logs techniques/sécurité nécessaires |
| **Finalités** | Fourniture des services campus MVP ; sécurité ; exploitation bornée |
| **Minimisation** | Pas de santé, logement, paiement réel, mineurs, responsables légaux |
| **Responsabilité** | Rôle DPO fictif + product owner fictif (voir `06-…`) |
| **Futur** | Registre des traitements ; éventuelle DPIA si élargissement ou risque élevé |
| **Déclencheurs DPIA (futurs)** | Introduction de mineurs ; données sensibles ; profilage ; nouveau traitement à risque élevé |

### Accessibilité

| Élément | Cadrage |
|---------|---------|
| **Populations** | Les cinq, avec attention usagers en situation de handicap |
| **Objectif** | Exigence d’accessibilité numérique pour parcours MVP |
| **Preuves futures** | Contrôles UX + QA (critère de sortie G2) |
| **Référentiel** | **À arbitrer Morris** (option candidate : alignement type RGAA / WCAG — non décidé) |

### Performance

| Élément | Cadrage |
|---------|---------|
| **Usages critiques** | Auth, catalogue, réservation, pilotage |
| **Pics** | Rentrée, examens, événements campus |
| **Attentes** | Temps de réponse « acceptables » à qualifier en conception/archi/QA — **pas de SLA chiffré ici** |
| **Preuves** | Tests de performance = critère sortie MVP |

### Sécurité

| Élément | Cadrage |
|---------|---------|
| Habilitations multi-niveaux | Séparation campus / national |
| Journalisation | Accès sensibles, flux identité |
| Intégrité flux identité | Erreurs, reprises, désynchronisations tracées |
| Futur | Analyse de risques / threat model en cycle sécurité |

### Release / RUN

| Élément | Cadrage |
|---------|---------|
| Release | Pilote démontrable + rollback testable |
| RUN | Logs, métriques, alertes minimales ; procédures RUN minimales ; support borné |
| Non-objectifs | ITSM/CMDB |

---

## 14. Hypothèses

| ID | Hypothèse | Statut |
|----|----------|--------|
| H-DF-01 | Quatre incréments suffisent pour respecter la réserve G2 sans réduire le MVP | Proposition — à valider Morris |
| H-DF-02 | La simulation identité peut être outillée progressivement (happy path puis non-happy-path) | Hypothèse |
| H-DF-03 | Le support/RUN borné peut être démontré sans ITSM | Hypothèse |
| H-DF-04 | Un référentiel d’accessibilité unique sera choisi avant UX Critical | Hypothèse |
| H-DF-05 | Les parcours P1–P8 couvrent le cœur MVP pour conception/UX | Hypothèse |

---

## 15. Dépendances

| Dépendance | Type | Commentaire |
|------------|------|-------------|
| Décisions G1–G4 / réserve G2 | Interne | Socle non négociable sans nouvelle décision Morris |
| Simulation identité | Structurante | Bloque une partie des preuves intégration/RUN |
| Choix référentiel accessibilité | Morris | Avant UX/QA accessibilité |
| Cycles conception → … → release | Méthode | Ordre non rigide ; déclencheurs réels |
| Aucun IdP réel | Externe fictif | Fournisseur fictif uniquement |

---

## 16. Principes de découpage incrémental

1. Chaque incrément apporte une **valeur démontrable**.
2. Aucun incrément ne **réduit** la cible MVP finale.
3. Les critères **intermédiaires** ≠ critères **finaux** G2.
4. Populations et capacités progressives, couverture **complète en sortie**.
5. Dépendances maîtrisées ; réversibilité relative ; risque proportionné.
6. Testabilité et observabilité dès que pertinent.
7. Pas de découpage par couche technique pure ; pas de micro-incréments artificiels.

Détail : `05-mvp-increment-trajectory.md`.

---

## 17. Résultats attendus par incrément (haut niveau)

| Incrément | Résultat attendu (haut niveau) |
|-----------|--------------------------------|
| **INC-01** | Socle identité multi-campus + catalogue opérable |
| **INC-02** | Réservation + notifications + exceptions |
| **INC-03** | Pilotage local et national |
| **INC-04** | Identité simulée complète + support/RUN borné + contribution aux critères transverses de sortie |

---

## 18. Critères de succès projet

1. Cible G2 démontrée sans réduction.
2. Cinq populations couvertes en sortie.
3. Trajectoire incrémentale exécutée avec critères intermédiaires tracés.
4. Séparation projet / méthode respectée.
5. Aucune promotion SFIA 3.0.
6. Gates Morris respectés avant conception, architecture, backlog, release.

---

## 19. Critères de sortie du cadrage détaillé

Le cadrage détaillé peut être considéré **complet** (après GO Morris) lorsque :

1. Les documents `04`–`07` + README sont cohérents avec G2/réserve.
2. La trajectoire incrémentale est **acceptée** ou **réorientée** explicitement.
3. Les gates DF proposés sont **acceptés, amendés ou rejetés**.
4. Les arbitrages listés §20 sont tranchés ou reportés avec traçabilité.
5. Aucune architecture/stack/backlog n’a été smuggled.
6. La suite de cycles candidats est claire.

---

## 20. Décisions Morris encore nécessaires

| ID | Décision | Urgence |
|----|----------|---------|
| DM-DF-01 | Valider le cadrage détaillé (`04`–`07`) | Immédiate (revue) |
| DM-DF-02 | Valider ou amender la trajectoire INC-01…04 | Immédiate |
| DM-DF-03 | Valider / amender les gates DF-G* | Immédiate |
| DM-DF-04 | Autoriser commit / push / PR de cette branche | Après validation fond |
| DM-DF-05 | Choisir le prochain cycle (conception vs autre) | Après DM-DF-01/02 |
| DM-DF-06 | Arbitrer référentiel accessibilité | Avant UX Critical |
| DM-DF-07 | Cleanup branche pré-cadrage (optionnel) | Indépendant |

---

## 21. Cycles suivants candidats

| Priorité pressentie | Cycle | Condition |
|---------------------|-------|-----------|
| 1 | Conception fonctionnelle | Après validation cadrage + GO |
| 2 | Architecture fonctionnelle | Si complexité flux le justifie |
| 3 | UX/UI | Après conception ; accessibilité activée |
| 4 | Backlog / user stories | Découpage INC → stories |
| … | Technique, DevOps, sécurité, QA, release, RUN | Selon déclencheurs |

Aucun cycle n’est lancé automatiquement.

---

## 22. Actions interdites avant gates

- Conception détaillée, architecture, backlog, UX/Figma, code.
- Choix de stack ou d’IdP réel.
- Réduction du MVP ou exclusion d’une population.
- Commit / push / PR / merge de cette branche sans GO Morris.
- Modification de la méthode SFIA.

---

## 23. Verdict documentaire

```text
DETAILED FRAMING DRAFT COMPLETE — MORRIS REVIEW REQUIRED
```

**Observation :** le cadrage est prêt pour revue.
**Recommandation :** valider `04`–`07` puis enchaîner sur conception fonctionnelle.
**Décision :** réservée à Morris.
```

### Contenu complet — `projects/campus360/05-mvp-increment-trajectory.md`

*SHA-256 :* `67ad140975be3eb99c67152a4bb76e8e285f9f6589079a3b9b2f0dd6e47caefd`

```markdown
# Campus360 — Trajectoire incrémentale MVP

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 |
| **Document** | `05-mvp-increment-trajectory.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | Proposition — **non validée** Morris |
| **Objet** | Satisfaire la réserve G2 sans réduire le MVP |

> Ce document définit une **trajectoire de cadrage** à haut niveau.
> Ce n’est **pas** un backlog, **pas** des user stories, **pas** un plan d’architecture.

---

## 1. Principes de découpage

1. **Non-réduction** : la cible MVP G2 reste intégrale en sortie.
2. **Valeur démontrable** à chaque incrément.
3. **Progressivité** des populations et capacités — couverture complète en fin de trajectoire.
4. **Dépendances maîtrisées** : pas d’incrément « orphelin ».
5. **Réversibilité relative** : éviter les paris techniques irréversibles (aucune stack imposée ici).
6. **Risque proportionné** : cas complexes identité/RUN en fin de trajectoire, pas exclus.
7. **Testabilité / observabilité** : chaque incrément doit pouvoir être prouvé.
8. **Pas de découpage couche technique** (front/back/infra) comme logique principale.
9. **Pas de micro-incréments** artificiels.
10. Critères **intermédiaires** ≠ critères **finaux** G2.

---

## 2. Critères de cohérence d’un incrément

| Critère | Question |
|---------|----------|
| Valeur démontrable | Que peut-on montrer à Morris / acteurs fictifs ? |
| Dépendances maîtrisées | Les prérequis sont-ils livrés ou simulés explicitement ? |
| Réversibilité | Peut-on ajuster sans dettes structurantes non gated ? |
| Risque proportionné | Le risque est-il justifié par la valeur ? |
| Testabilité | Existe-t-il des preuves fonctionnelles envisageables ? |
| Observabilité | Dispose-t-on de signaux minimaux si pertinent ? |
| Non-réduction MVP | Contribue-t-on à la cible finale sans la rogner ? |

---

## 3. Proposition d’incréments (recommandation)

**Nombre proposé : 4** — découle de l’analyse (socle → métier cœur → pilotage → durcissement identité/RUN).

| ID | Nom | Intention |
|----|-----|-----------|
| **INC-01** | Socle identité multi-campus & catalogue | Fonder le contexte national multi-campus et l’accès aux services |
| **INC-02** | Réservation, notifications & exceptions | Délivrer le parcours métier cœur |
| **INC-03** | Pilotage local & national | Exploiter la valeur multi-niveaux et multi-campus |
| **INC-04** | Identité simulée complète & support/RUN borné | Couvrir non-happy-path identité + exploitation bornée |

---

## 4. Détail des incréments

### INC-01 — Socle identité multi-campus & catalogue

| Champ | Contenu |
|-------|---------|
| **Objectifs** | Authentification/autorisation de base ; rattachement campus ; catalogue publiable/consultable ; skeleton multi-campus |
| **Populations (progressif)** | Étudiant, personnel (consultation) ; gestionnaire & admin national (publication/admin légère) ; support/RUN (accès lecture minimal / présence rôle) |
| **Capacités** | Cap. 1–3 (authZ de base, multi-campus, catalogue) |
| **Hors cet incrément** | Réservation ; notifications métier ; pilotage consolidé ; non-happy-path identité complets ; RUN incidents |
| **Critères intermédiaires** | Au moins 2 campus fictifs ; 4 rôles opérationnels démontrés ; catalogue consultable ; aucune connexion IdP réelle |
| **Contribution à la cible finale** | Socle indispensable à toutes les capacités G2 |
| **Gate Morris pressenti** | DF-G4 (GO INC-01) — voir `07-…` |

### INC-02 — Réservation, notifications & exceptions

| Champ | Contenu |
|-------|---------|
| **Objectifs** | Parcours réservation bout-en-bout ; notifications simples ; gestion d’exceptions |
| **Populations** | Étudiant & personnel (réserver) ; gestionnaire (exceptions/espaces) ; admin national (visibilité) ; support (lecture erreurs métier si exposées) |
| **Capacités** | Cap. 4–6 (réservation, notifications, exceptions ; amorces pilotage local) |
| **Dépendance** | INC-01 |
| **Hors cet incrément** | Pilotage national consolidé complet ; simulation identité non-happy-path complète ; RUN N1 complet |
| **Critères intermédiaires** | Création/modification/annulation réservation ; notification émise ; au moins un type d’exception traité ; tests fonctionnels du parcours P3/P4 amorçables |
| **Contribution** | Cœur de valeur usager |
| **Gate** | DF-G5 |

### INC-03 — Pilotage local & national

| Champ | Contenu |
|-------|---------|
| **Objectifs** | Vues de pilotage local et consolidé national ; démonstration habilitations multi-niveaux sur données multi-campus |
| **Populations** | Gestionnaire (local) ; administrateur national (consolidé) ; autres populations en consultation selon droits |
| **Capacités** | Cap. 6 approfondie (pilotage) |
| **Dépendance** | INC-01, INC-02 |
| **Hors cet incrément** | BI avancée ; ITSM ; identité non-happy-path complète |
| **Critères intermédiaires** | Indicateurs d’occupation/exceptions locaux ; vue consolidée ≥2 campus ; séparation des privilèges campus/national prouvée |
| **Contribution** | Différenciation étalon vs projets bornés |
| **Gate** | DF-G6 |

### INC-04 — Identité simulée complète & support/RUN borné

| Champ | Contenu |
|-------|---------|
| **Objectifs** | Couvrir le contrat d’intégration identité **complet** (cas G2) ; activer support/RUN borné ; préparer release/RUN readiness |
| **Populations** | Support/RUN pleinement exercé ; admin national ; impacts sur toutes les populations via sync identité |
| **Capacités** | Cap. 7–8 (identité simulée complète, support/RUN borné) |
| **Dépendance** | INC-01…03 (contexte métier pour donner sens aux flux) |
| **Hors cet incrément** | IdP réel ; ITSM/CMDB ; runbooks encyclopédiques |
| **Critères intermédiaires** | Scénarios : création/MAJ/désactivation, doublons, idempotence, erreur, reprise, désync, traçabilité, supervision ; incident de service + disponibilité + diagnostic N1 démontrables ; contribution explicite aux critères sortie sécurité/intégration/RUN/release |
| **Contribution** | Clôture des exigences G2 différenciantes |
| **Gate** | DF-G7 |

---

## 5. Matrice populations × incréments

| Population | INC-01 | INC-02 | INC-03 | INC-04 | Sortie MVP |
|------------|--------|--------|--------|--------|------------|
| Étudiant | Consult. | **Cœur** | Consult. | Impact sync | **Couverte** |
| Personnel | Consult. | **Cœur** | Consult. | Impact sync | **Couverte** |
| Gestionnaire campus | Admin légère | **Exceptions** | **Pilotage local** | Support collab. | **Couverte** |
| Admin national | Admin légère | Visibilité | **Pilotage national** | Supervision | **Couverte** |
| Support / RUN | Présence rôle | Lecture | Lecture | **Cœur** | **Couverte** |

Aucune population n’est exclue définitivement.

---

## 6. Matrice capacités × incréments

| Capacité | INC-01 | INC-02 | INC-03 | INC-04 |
|----------|--------|--------|--------|--------|
| AuthZ / multi-campus | **Base** | Étendu | Étendu | Durci (sync) |
| Catalogue | **Oui** | — | — | — |
| Réservation | — | **Oui** | — | — |
| Notifications | — | **Oui** | — | — |
| Exceptions | — | **Oui** | Suivi | — |
| Pilotage local/national | Amorcé | Amorcé | **Oui** | — |
| Identité simulée complète | Happy path minimal | — | — | **Complet** |
| Support/RUN borné | Stub rôle | — | — | **Oui** |

---

## 7. Dépendances entre incréments

```text
INC-01 → INC-02 → INC-03
                ↘
                 INC-04 (après INC-02 au minimum ; recommandé après INC-03)
```

**Règle :** INC-04 ne doit pas précéder le métier cœur (sinon simulation sans valeur métier). INC-03 peut être allégé si Morris priorise INC-04 plus tôt — **option B** ci-dessous.

---

## 8. Critères intermédiaires vs finaux

| Niveau | Rôle |
|--------|------|
| **Intermédiaire (par INC)** | Autoriser la clôture d’un incrément et le passage au suivant |
| **Final (G2)** | Déclarer le MVP atteint — liste des 12 critères de sortie du pré-cadrage |

Les critères intermédiaires **ne remplacent jamais** les critères finaux.

### Critères de non-régression

- Chaque nouvel INC doit préserver les parcours validés des INC précédents.
- Les habilitations déjà démontrées ne doivent pas régresser.
- Les campus fictifs et rattachements restent cohérents.

---

## 9. Éléments explicitement différés (hors MVP / hors trajectoire)

- Logement, resto complète, paiement réel, IoT.
- ITSM / CMDB / centre de support avancé.
- IdP réel / protocole définitif.
- Stack, architecture distribuée, multi-région technique.
- Incréments post-MVP (EVOL) : événements complets, etc.

---

## 10. Gates Morris entre incréments (propositions)

| Gate | Objet |
|------|-------|
| DF-G4 | GO démarrage / clôture INC-01 |
| DF-G5 | GO INC-02 |
| DF-G6 | GO INC-03 |
| DF-G7 | GO INC-04 |
| DF-G8 | GO déclaration sortie MVP (critères finaux) |

Détail et preuves : `07-risks-dependencies-and-gates.md`.
Ces gates sont des **propositions**, pas des décisions validées.

---

## 11. Risques de découpage

| Risque | Mitigation |
|--------|------------|
| Réduire le MVP « pour aller plus vite » | Réserve G2 ; revue DF-G* |
| Reporter indéfiniment Support/RUN | INC-04 obligatoire avant sortie MVP |
| Faire INC-04 trop tôt | Dépendance métier INC-02+ |
| Sur-découper (>4) | Recommandation 4 ; option C seulement si Morris l’exige |
| Architecture implicite via découpage | Interdiction stack/archi dans ce doc |

---

## 12. Options alternatives

| Option | Description | Forces | Faiblesses |
|--------|-------------|--------|------------|
| **A — 4 INC (recommandée)** | Socle → métier → pilotage → identité/RUN | Équilibre valeur / risque ; 5 pops couvertes | INC-04 dense |
| **B — 3 INC** | Fusion pilotage dans INC-02 ; INC-03 = identité/RUN | Plus court | Charge INC métier trop lourde ; risque de qualité |
| **C — 4 INC avec identité non-happy-path partagée INC-02/04** | Amorcer erreurs identité dès INC-02 | Risque identité plus tôt | Complexité précoce, moins de valeur usager |

---

## 13. Recommandation (non décision)

**Recommandation :** adopter l’**option A (4 incréments INC-01…04)** comme trajectoire de référence pour la suite (conception, backlog).

**Justification :** respecte la réserve G2 ; conserve les cinq populations ; place le métier cœur tôt ; reporte le durcissement identité/RUN sans l’exclure ; évite le sur-découpage.

**Décision attendue Morris :** DM-DF-02 — valider, amender ou choisir B/C.
```

### Contenu complet — `projects/campus360/06-governance-and-stakeholders.md`

*SHA-256 :* `512e8302667b960d0f1eae6ee73509f43f24d5afa08daa7ee5258fc3b05f149b`

```markdown
# Campus360 — Gouvernance et parties prenantes

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 |
| **Document** | `06-governance-and-stakeholders.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | Proposition de gouvernance — **non validée** Morris |
| **Autorité ultime** | Morris (L0) |

> Acteurs **fictifs par rôle**. Aucune personne réelle inventée.

---

## 1. Autorité de décision

| Niveau | Acteur | Pouvoir |
|--------|--------|---------|
| **L0** | **Morris** | GO/NO-GO structurants ; scope ; gates DF ; commit/push/PR/merge ; cycles suivants ; capitalisation méthode |
| L1 fictif | Product Owner Campus360 | Priorisation produit dans le cadre G2 ; préparation des arbitrages Morris |
| L2 fictifs | Responsables domaine / transverse | Propositions, preuves, exécution bornée |
| Exécution | Cursor / ChatGPT | Analyse et exécution bornée — **non décideurs** |

---

## 2. Acteurs projet fictifs nécessaires

| Rôle fictif | Mission |
|-------------|---------|
| **Product Owner (PO)** | Valeur MVP, trajectoire INC, arbitrages produit préparés |
| **Responsable métier campus** | Besoins gestionnaire / usagers campus |
| **Responsable national** | Cohérence multi-campus, pilotage consolidé |
| **Responsable identité / intégration** | Contrat simulation identité, cas non-happy-path |
| **RSSI fictif** | Exigences sécurité, habilitations, journaux |
| **DPO fictif** | Minimisation, majeurs-only, déclencheurs DPIA |
| **Référent accessibilité** | Objectifs et preuves accessibilité |
| **Responsable RUN / release** | Support borné, observabilité minimale, rollback |
| **QA Lead fictif** | Stratégie de preuves (sans plan détaillé ici) |
| **SFIA Method Observer** | Observations méthode — sans promotion baseline |

---

## 3. Représentation des cinq populations

| Population | Représentant fictif | Mode |
|------------|---------------------|------|
| Étudiant | Groupe usagers étudiants (fictif) | Besoins consultation via PO / métier campus |
| Personnel | Groupe usagers personnels (fictif) | Idem |
| Gestionnaire de campus | Responsable métier campus | Direct |
| Administrateur national | Responsable national | Direct |
| Support / RUN | Responsable RUN / release | Direct |

---

## 4. Matrice RACI (synthèse)

Légende : **R** Responsible · **A** Accountable · **C** Consulted · **I** Informed

| Décision / activité | Morris | PO | Métier campus | National | Identité | RSSI | DPO | Access. | RUN/Release | QA |
|---------------------|--------|-----|---------------|----------|----------|------|-----|---------|-------------|-----|
| Scope MVP G2 | **A** | C | C | C | C | C | C | C | C | I |
| Trajectoire INC | **A** | R | C | C | C | C | I | I | C | C |
| GO cycle suivant | **A** | R | C | C | C | C | C | C | C | C |
| Commit / PR / merge | **A** | R | I | I | I | I | I | I | I | I |
| Exigences sécurité | A* | C | I | C | C | **R** | C | I | C | C |
| Exigences RGPD | A* | C | I | I | C | C | **R** | I | I | I |
| Accessibilité | A* | C | C | I | I | I | I | **R** | I | C |
| Simulation identité | A* | C | I | C | **R** | C | C | I | C | C |
| RUN readiness | A* | C | I | I | C | C | I | I | **R** | C |
| Capitalisation SFIA | **A** | I | I | I | I | I | I | I | I | I |

\* Morris reste A sur tout arbitrage structurant ; R opérationnel préparé par le rôle métier/transverse.

---

## 5. Gouvernance nationale / campus

| Niveau | Responsabilités |
|--------|-----------------|
| **National** | Règles d’habilitation transverses ; catalogue de politiques ; pilotage consolidé ; arbitrage inter-campus |
| **Campus** | Exploitation locale des services/espaces ; exceptions locales ; qualité de service locale |
| **Règle** | Une donnée métier est rattachée à un campus ; le national voit/consolide selon habilitation — sans effacer la responsabilité locale |

---

## 6. Responsabilités par domaine

### Produit

- PO : cohérence MVP, non-réduction G2, préparation gates DF.
- Métier campus / national : validation métier des parcours cadrés.

### Sécurité / RGPD / accessibilité

- RSSI : modèle d’habilitation, journaux, exigences d’analyse future.
- DPO : minimisation, majeurs-only, registre futur, déclencheurs DPIA.
- Accessibilité : objectifs, preuves UX/QA, options de référentiel pour Morris.

### Intégration identité

- Responsable identité : couverture simulation complète ; traçabilité ; pas d’IdP réel au MVP.

### RUN / release

- Responsable RUN/release : support borné ; logs/métriques/alertes minimales ; rollback testable ; pas d’ITSM.

---

## 7. Instances

| Instance | Objet | Fréquence indicative |
|----------|-------|----------------------|
| **Arbitrage Morris** | Gates DF, scope, cycles, Git | À chaque jalon structurant |
| **Comité produit fictif** | Alignement PO / métiers / transverses | Par incrément (préparation) |
| **Revue transverse** | Sécurité, RGPD, accessibilité, RUN | Avant GO INC à risque (surtout INC-04) |
| **Validation de preuves** | QA / démonstrations | Clôture d’INC |

Pas de calendrier figé (pas de dates imposées).

---

## 8. Règles d’escalade

1. Tout risque de **réduction du MVP** → escalade immédiate Morris.
2. Tout besoin d’**architecture / stack / IdP réel** → stop + gate Morris.
3. Désaccord national vs campus sur habilitations → arbitrage Morris.
4. Élargissement hors G2 (logement, paiement, ITSM…) → NO-GO sauf nouvelle décision.
5. Friction méthodologique SFIA → observation documentée ; CAPA seulement avec GO Morris.

---

## 9. Décisions réservées à Morris

- Validation du cadrage détaillé et de la trajectoire INC.
- Activation des cycles suivants.
- GO commit / push / PR / merge.
- Choix référentiel accessibilité (si plusieurs options).
- Toute décision d’architecture / stack / fournisseur réel.
- Promotion d’un apprentissage en standard SFIA.
- Cleanup de branches.
- Réouverture ou amendement de G2.

---

## 10. Décisions délégables (dans le cadre G2)

- Rédaction de specs de conception **après** GO cycle.
- Priorisation fine **intra-incrément** (sans sortir du scope INC).
- Choix de formulations documentaires non structurantes.
- Organisation des revues fictives de préparation.

Toute délégation cesse dès qu’un gate DF est requis.

---

## 11. Preuves attendues par type de gate (haut niveau)

| Type de gate | Preuves typiques |
|--------------|------------------|
| Validation cadrage | Docs `04`–`07` cohérents ; revue ChatGPT/handoff |
| GO INC | Objectifs INC ; critères intermédiaires ; dépendances OK ; démo ou preuves QA selon maturité |
| GO cycle suivant | Brief cycle ; hors périmètre ; profil justifié |
| GO release | Release notes ; rollback testé ; RUN readiness minimale |
| GO sortie MVP | Matrice des 12 critères G2 ; non-régression ; 5 populations |

Détail numéroté : `07-risks-dependencies-and-gates.md`.

---

## 12. Séparation projet / méthode / capitalisation

| Couche | Contenu | Autorité |
|--------|---------|----------|
| **Projet** | Campus360 sous `projects/campus360/` | Morris + rôles fictifs |
| **Méthode SFIA** | Documents canoniques v2.6 | Morris via CAPA |
| **Observations** | REX dans handoff / docs projet | Non binding |
| **Capitalisation** | Standards réutilisables | Cycle CAPA + GO Morris uniquement |

Campus360 **n’est pas** un véhicule SFIA 3.0.
```

### Contenu complet — `projects/campus360/07-risks-dependencies-and-gates.md`

*SHA-256 :* `c3ba04b532ad12a86067f503c97fb923b35593d84184f277e0ea6d054ceac1ca`

```markdown
# Campus360 — Risques, dépendances et gates

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 |
| **Document** | `07-risks-dependencies-and-gates.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | Proposition — gates DF **non validés** Morris |
| **Série de gates** | DF-G1 … DF-G12 (nouvelle série, distincte de G1–G7 pré-cadrage) |

---

## 1. Registre des risques

| ID | Catégorie | Risque | Impact | Mitigation | Rôle |
|----|-----------|--------|--------|------------|------|
| R01 | Produit | Perte de clarté sur la valeur usager (catalogue/réservation) | Élevé | INC-02 tôt ; démos parcours | PO |
| R02 | Périmètre | Réduction implicite du MVP | Critique | Réserve G2 ; gates DF ; stop conditions | Morris / PO |
| R03 | Périmètre | Scope creep (logement, paiement, ITSM) | Élevé | Hors MVP explicite | PO / Morris |
| R04 | Multi-campus | Confusion responsabilité campus/national | Élevé | Règles rattachement ; RACI | National / campus |
| R05 | Habilitation | Élévation de privilèges cross-campus | Critique | Séparation niveaux ; preuves INC-03/sécurité | RSSI |
| R06 | Identité | Simulation incomplète (happy path only) | Élevé | INC-04 obligatoire avant sortie | Identité |
| R07 | Identité | Glissement vers IdP réel | Élevé | Interdiction MVP ; gate | Morris |
| R08 | RGPD | Introduction de mineurs ou données excessives | Critique | Majeurs-only ; minimisation ; DPO | DPO |
| R09 | Accessibilité | Report indéfini des preuves | Moyen | Critère sortie G2 ; gate avant UX | Access. / QA |
| R10 | Performance | Sous-estimation des pics multi-campus | Moyen | Cadrage pics ; tests futurs | QA / Archi future |
| R11 | Sécurité | Journaux insuffisants sur flux sensibles | Élevé | Exigences dès conception ; cycle sécurité | RSSI |
| R12 | Release/RUN | Release sans rollback testé | Élevé | Critère G2 ; DF-G12 | RUN/Release |
| R13 | RUN | Dérive vers ITSM | Moyen | Périmètre borné support | RUN |
| R14 | Découpage | Trop d’incréments / micro-découpage | Moyen | Plafond raisonnable (reco 4) | PO |
| R15 | Découpage | INC-04 trop tardif → dette identité | Moyen | Ne pas clôturer MVP sans INC-04 | PO |
| R16 | Méthode | Confusion projet / capitalisation SFIA | Moyen | Séparation ; CAPA gated | Method observer |
| R17 | Méthode | Forçage des 15 cycles | Moyen | Activation par déclencheur | PO / Morris |
| R18 | Gouvernance | Démarrage conception sans GO | Élevé | DF-G8 | Morris |

---

## 2. Dépendances

### Internes

| Dépendance | De → Vers |
|------------|-----------|
| Pré-cadrage G1–G4 / réserve | Socle de ce cadrage |
| INC-01 | INC-02, 03, 04 |
| INC-02 | INC-03, 04 |
| Docs `04`–`07` | Revue Morris avant cycles suivants |
| Simulation identité | Preuves intégration, sécurité, RUN |

### Externes fictives

| Dépendance | Nature |
|------------|--------|
| Fournisseur d’identité **fictif** | Contrat + simulation — pas de connexion réelle |
| Campus fictifs (données) | Jeux de données multi-campus |
| Aucun SI académique réel | Hors MVP |

---

## 3. Hypothèses à valider

| ID | Hypothèse | Validation pressentie |
|----|-----------|----------------------|
| HA-01 | 4 INC suffisent | Revue Morris DM-DF-02 |
| HA-02 | Accessibilité prouvable sans choix immédiat du référentiel | Avant UX : DM-DF-06 |
| HA-03 | Support borné suffisant vs attentes « nationales » | Revue INC-04 |
| HA-04 | Performance testable sans SLA chiffré précoce | Cycle perf/QA |

---

## 4. Signaux d’alerte

- Demande d’exclure une population « pour simplifier ».
- Demande d’IdP réel « juste pour démarrer ».
- Apparition de modules hors G2 dans un brief INC.
- Stories techniques sans valeur métier (découpage couche).
- Absence de critères intermédiaires dans un GO INC.
- Confusion entre critère intermédiaire et sortie MVP.
- Proposition de modifier SFIA « via Campus360 ».

---

## 5. Gates Morris proposés (série DF)

> **Proposition de gouvernance** — à valider / amender / rejeter par Morris.
> Ne remplacent pas G1–G7 historiques ; les complètent pour la suite.

| Gate | Objet | Preuves attendues | Statut |
|------|-------|-------------------|--------|
| **DF-G1** | Validation du cadrage détaillé (`04`–`07` + README) | Handoff FULL ; cohérence G2/réserve | **À valider** |
| **DF-G2** | Validation trajectoire INC-01…04 (ou alternative) | Doc `05` ; matrice pops/capacités | **À valider** |
| **DF-G3** | Validation gates DF et RACI | Docs `06`–`07` | **À valider** |
| **DF-G4** | GO INC-01 | Objectifs ; critères intermédiaires ; hors scope | Proposition |
| **DF-G5** | GO INC-02 | Dépendance INC-01 ; parcours réservation | Proposition |
| **DF-G6** | GO INC-03 | Pilotage local/national ; habilitations | Proposition |
| **DF-G7** | GO INC-04 | Plan simulation complète + RUN borné | Proposition |
| **DF-G8** | GO cycle conception fonctionnelle | Brief cycle ; hors périmètre | Proposition |
| **DF-G9** | GO architecture fonctionnelle (si déclenchée) | Justification complexité | Proposition |
| **DF-G10** | GO UX/UI (+ accessibilité cadrée) | Parcours ; option référentiel tranchée ou reportée | Proposition |
| **DF-G11** | GO backlog / architecture technique / DevOps (selon cycle) | Périmètre INC ; pas de stack smuggled sans gate dédié | Proposition |
| **DF-G12** | GO release pilote / RUN readiness / sortie MVP | Critères G2 ; rollback ; 5 pops | Proposition |

**Git (hors série DF mais rappelés) :** commit / push / PR de `project/campus360-detailed-framing` = décisions Morris **séparées**, non autorisées dans l’exécution courante.

---

## 6. Stop conditions

STOP et escalade Morris si :

1. Réduction du MVP ou exclusion d’une population.
2. Nécessité de choisir une architecture / stack / IdP réel pour continuer.
3. Contradiction avec G1–G4 / réserve G2.
4. Demande de modifier la méthode SFIA.
5. Scope impossible à fermer.
6. Trajectoire nécessitant un découpage artificiel non justifiable.
7. Action Git distante projet sans GO.

---

## 7. Critères de passage vers les cycles suivants

| Cycle cible | Prérequis de passage |
|-------------|----------------------|
| **Conception fonctionnelle** | DF-G1/G2 (ou équivalent validé) ; DF-G8 |
| **Architecture fonctionnelle** | Spec fonctionnelle ; complexité multi-domaines justifiée ; DF-G9 |
| **UX/UI** | Parcours priorisés ; accessibilité cadrée ; DF-G10 ; pas de Figma sans GO source |
| **Backlog / user stories** | Conception (± UX) ; trajectoire INC acceptée ; DF-G11 partiel |
| **Architecture technique** | Arbitrages fonctionnels ; gate stack dédié si irréversible |
| **Intégration / DevOps** | Besoin pipeline/env réel ; contrat identité simulé |
| **QA** | Stories/critères ; profil selon risque (Critical probable en sortie MVP) |
| **Sécurité** | Surfaces authZ/identité ; pas de threat model avant cycle dédié |
| **Release** | Artefacts ; rollback ; DF-G12 partiel |
| **RUN readiness** | Observabilité minimale ; support borné ; DF-G12 |

---

## 8. Lien avec les blocs transverses

| Bloc | Risques liés | Gate / cycle |
|------|--------------|--------------|
| RGPD | R08 | Conception, sécurité, QA ; DPIA si déclencheur |
| Accessibilité | R09 | UX, QA ; DM-DF-06 |
| Performance | R10 | Archi, QA, observabilité |
| Sécurité | R05, R11 | Sécurité, INC-03/04 |
| Intégration | R06, R07 | DevOps, INC-04 |
| Release/RUN | R12, R13 | Release, RUN, INC-04 |

---

## 9. Décisions Morris attendues (immédiat)

1. **DF-G1** — valider le cadrage détaillé.
2. **DF-G2** — valider la trajectoire (option A recommandée).
3. **DF-G3** — valider la série de gates DF.
4. Autoriser ou non commit/push/PR de la branche `project/campus360-detailed-framing`.
5. Désigner le prochain cycle (recommandation : conception fonctionnelle).

---

## 10. Verdict

Registre et gates **prêts pour arbitrage Morris**.
Aucune auto-validation des gates DF dans cette exécution.
```

## 5. Analyse Studio 11/12

### Qualification

Comparaison des versions locales sales sauvegardées vs `origin/main` :

- **Apports locaux uniques (11) :** métadonnées post-#214 (`5f1eb908…`) ; branche FA @ `4f4e7cf…` ; AF-CAND-11B **VALIDÉE (UX/UI)** ; PR #214 dans le bandeau ; clôture FA **non** prononcée.
- **Apports locaux uniques (12) :** base `5f1eb908…` ; PR #214 ; footer mis à jour.
- **Sur main avant récupération :** 11/12 encore ancrés à `19302836…` (#213) avec AF-CAND-11B **NON DÉCIDÉE** — **stale** par rapport à `13`/`14`–`16` déjà sur main (UX Option B clôturé).
- **Compatibilité :** alignement avec décisions Morris ultérieures (#214, #215, doc `13`) ; **ne** restaure **pas** inventaire dix écrans ; **ne** contredit **pas** node IDs Figma ; **ne** déclare **pas** clôture FA ; **ne** modifie **pas** 13–19.
- **Décision :** apports **substantiels** → branche créée ; intégration **chirurgicale** (pas copie aveugle) avec traçabilité « observation / alignement ».

### Résultat

- **Branche locale :** `recovery/sfia-studio-functional-architecture-sync`
- **Commit :** `a5ad0c07b60d652596d4962103ec445391a7827b`
- **Message :** `docs(sfia-studio): recover functional architecture deltas`
- **Push :** non
- **Worktree temporaire :** créé puis retiré (`/Users/morris/Projects/sfia-recovery-studio-fa`)
- **Fichiers touchés :** uniquement `11` et `12`

### Stat commit Studio

```
a5ad0c0 docs(sfia-studio): recover functional architecture deltas
 projects/sfia-studio/11-functional-architecture.md | 22 ++++++++++++----------
 ...functional-architecture-flows-and-boundaries.md |  8 +++++---
 2 files changed, 17 insertions(+), 13 deletions(-)
```

### Diff complet du delta Studio retenu

```diff
commit a5ad0c07b60d652596d4962103ec445391a7827b
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 19 02:43:27 2026 +0200

    docs(sfia-studio): recover functional architecture deltas

diff --git a/projects/sfia-studio/11-functional-architecture.md b/projects/sfia-studio/11-functional-architecture.md
index adea160..7d33339 100644
--- a/projects/sfia-studio/11-functional-architecture.md
+++ b/projects/sfia-studio/11-functional-architecture.md
@@ -8,17 +8,19 @@
 | **Profil** | Critical |
 | **Typologie** | DOC — EVOL produit |
 | **Baseline** | SFIA v2.6 (**Option C méthode** validée — D-VAL-6) |
-| **Base Git** | `origin/main` @ `19302836b45d49f19698c624e99f2d68afa7b290` |
-| **Branche travail** | `project/sfia-studio-functional-architecture` (**conservée** @ `0b61d728…`) |
-| **Commit / merge** | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync #212 `cb870544…` ; finalisation `0b61d728…` ; merge #213 `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **Base Git** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
+| **Branche travail** | `project/sfia-studio-functional-architecture` (**conservée** @ `4f4e7cf…`) |
+| **Commit / merge** | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync #212 `cb870544…` ; finalisation `0b61d728…` ; merge #213 `19302836…` ; trace `4f4e7cf…` ; merge #214 `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **Statut** | `functional-architecture-post-merge-integrated` |
 | **Autorité** | Morris (L0) |
 | **Entrée** | Conception validée `08`–`10` (inchangée) |
 | **Architecture** | **VALIDÉE** et **INTÉGRÉE** sur `main` — **AF-Option C** VALIDÉE |
-| **Décisions** | AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; aucune D-VAL-12 ; acceptation #211 **VALIDÉE** |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** |
+| **Décisions** | AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **VALIDÉE** — UX/UI clôturé (aligné `13`) ; aucune D-VAL-12 ; acceptation #211 **VALIDÉE** |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** ; [#214](https://github.com/mcleland147/sfia-workspace/pull/214) trace **MERGED** |
 
-> Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`) — **acceptée/régularisée** Morris 2026-07-18. Sync #212 + finalisation #213 **INTÉGRÉES** (`19302836…`). **Pas** d’architecture technique, stack, API, BDD, service, package, Figma, backlog, POC ou MVP. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode. Clôture formelle **non prononcée**.
+> Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`) — **acceptée/régularisée** Morris 2026-07-18. Sync #212 + finalisation #213 + trace #214 **INTÉGRÉES** (`5f1eb908…`). **Pas** d’architecture technique, stack, API, BDD, service, package, Figma, backlog, POC ou MVP *dans ce document*. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode. Clôture formelle architecture **non prononcée**.
+
+> **Récupération (cycle 15 — observation / alignement)** — métadonnées et statut AF-CAND-11B repris depuis l’état local historique sale (`project/sfia-studio-functional-architecture` @ `4f4e7cf…`, sauvegarde externe `sfia-workspace-recovery-backup-20260719-022730`) et **réconciliés** avec `13` / `14`–`16` déjà sur `main` (UX/UI Option B **clôturé**). Aucune nouvelle décision Morris. Ne restaure **pas** d’inventaire UX obsolète ni de clôture FA.
 
 ---
 
@@ -352,10 +354,10 @@ Ces vues préparent un futur UX/UI **sans** maquette ni Figma.
 
 ## 18. Réserves / risques / questions
 
-**Réserves :** FB ≠ composants ; Runtime candidat ; pas de stack ; pas de POC/MVP ; cycle suivant non sélectionné (AF-CAND-11B).
+**Réserves :** FB ≠ composants ; Runtime candidat ; pas de stack ; pas de POC/MVP *dans ce document FA* ; AF-CAND-11B ne clôt **pas** l’architecture fonctionnelle.
 **Risques :** confusion Studio/orchestrateur ; seconde vérité ; GO implicite ; confusion **AF-Option C** / Option C méthode.
-**Décidé :** **AF-Option C** VALIDÉE ; AF-CAND-01…10, 11A, 12 VALIDÉES.
-**Questions restantes :** AF-CAND-11B (sélection prochain cycle) ; clôture formelle ; sort des branches.
+**Décidé :** **AF-Option C** VALIDÉE ; AF-CAND-01…10, 11A, 12 VALIDÉES ; AF-CAND-11B **VALIDÉE** — UX/UI clôturé (voir `13`).
+**Questions restantes :** clôture formelle architecture fonctionnelle ; sort de la branche `project/sfia-studio-functional-architecture` ; delivery P0 (hors périmètre FA).
 
 ---
 
@@ -370,4 +372,4 @@ Ces vues préparent un futur UX/UI **sans** maquette ni Figma.
 
 ---
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — clôture NON PRONONCÉE — AF-Option C VALIDÉE — AF-CAND-11B NON DÉCIDÉE — Critical — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211–#214) — AF-CAND-11B VALIDÉE (UX/UI clôturé) — clôture architecture NON PRONONCÉE — AF-Option C VALIDÉE — Critical — Morris décide.*
diff --git a/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md b/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
index 7e2ed7c..bf2b6ae 100644
--- a/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
+++ b/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
@@ -5,12 +5,14 @@
 | **Document** | `12-functional-architecture-flows-and-boundaries.md` |
 | **Statut** | `functional-architecture-post-merge-integrated` |
 | **Cycle** | Architecture fonctionnelle — Critical |
-| **Base** | `19302836b45d49f19698c624e99f2d68afa7b290` |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** (`19302836…`) |
+| **Base** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** ; [#214](https://github.com/mcleland147/sfia-workspace/pull/214) trace **MERGED** (`5f1eb908…`) |
 | **Complète** | [11-functional-architecture.md](./11-functional-architecture.md) |
 
 > Flux **AF-*** candidats. Ne remplacent pas F1–F12 validés ; ils les **structurent** architecturalement.
 
+> **Récupération (cycle 15 — observation / alignement)** — base Git / PR #214 repris depuis l’état local historique sale (`4f4e7cf…`, sauvegarde externe). Aucune nouvelle décision Morris. Compatible avec AF-CAND-11B **VALIDÉE** — UX/UI clôturé (`13`) ; clôture FA **non** déclarée.
+
 ---
 
 ## 1. Acteurs
@@ -389,4 +391,4 @@ Voir document 11 §§9–10 et BR-001…025. Gates séparés : commit, push, PR,
 
 ---
 
-*Flux architecture VALIDÉS et INTÉGRÉS (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — Morris décide AF-CAND-11B / clôture.*
+*Flux architecture VALIDÉS et INTÉGRÉS (#211–#214) — sync #212 + finalisation #213 + trace #214 INTÉGRÉES (`5f1eb908…`) — AF-CAND-11B VALIDÉE (UX/UI clôturé) — clôture FA NON PRONONCÉE — Morris décide.*
```

## 6. Nettoyage workspace principal

### Fichiers restaurés depuis `origin/main`

- `projects/campus360/README.md`
- `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`
- `projects/sfia-studio/11-functional-architecture.md`
- `projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md`
- `projects/sfia-studio/13-functional-architecture-decision-pack.md`
- `projects/sfia-studio/README.md`

Note opérationnelle : après restore, le WT égalait déjà `origin/main` pour 07/13/README tandis que HEAD était encore FA ; un `git restore --source=HEAD` temporaire sur ces trois fichiers a été requis pour obtenir un statut propre avant `git switch main` (contenu final sur main = `origin/main`).

### Fichiers / dossiers supprimés

- `projects/sfia-studio/14-ux-ui-contract.md` (copie locale obsolète)
- `projects/sfia-studio/15-ux-ui-flows-and-screens.md` (copie locale obsolète)
- `projects/sfia-studio/16-ux-ui-decision-pack.md` (copie locale obsolète)
- `projects/campus360/04-detailed-framing.md`
- `projects/campus360/05-mvp-increment-trajectory.md`
- `projects/campus360/06-governance-and-stakeholders.md`
- `projects/campus360/07-risks-dependencies-and-gates.md`
- `.tmp-sfia-review/` (artefacts temporaires)
- `.sfia/mcp/logs/bridge-audit.jsonl`
- `.sfia/mcp/logs/runner-audit.jsonl`
- répertoires `.sfia` **vides** uniquement (`find … -empty -delete`)

### Preuves F archivées (puis supprimées du principal via `.tmp-sfia-review`)

- `lot-e1-execution-log.json` → `/Users/morris/Projects/sfia-workspace-recovery-backup-20260719-022730/evidence/lot-e1-execution-log.json` — SHA-256 `885c3f7e949539141d1dce8c9ddf66d77cdb5b3db402a61221e70528604ade71`
- `lot-e1-residual-classification.json` → `/Users/morris/Projects/sfia-workspace-recovery-backup-20260719-022730/evidence/lot-e1-residual-classification.json` — SHA-256 `9ff30e5c3e251488b27c6e01d96caff8306c008024aa025f61992b0e689d6cb8`
- `lot-e2-validation.json` → `/Users/morris/Projects/sfia-workspace-recovery-backup-20260719-022730/evidence/lot-e2-validation.json` — SHA-256 `7502cf8c17b11950a8a791bc4afbeb3b4952ff6689c66badd98e8cf134f55314`

### Traitement `.sfia`

- Logs runtime MCP ciblés supprimés.
- Pas de `rm -rf .sfia`.
- Reste local ignoré (ex. `.DS_Store`, éventuels `node_modules` bridge) — hors inventaire untracked Git.

### Protection worktree handoff

- Chemin : `/Users/morris/Projects/sfia-workspace/sfia-review-handoff`
- Branche : `sfia/review-handoff`
- HEAD avant publication handoff : `cc9197b149f49253286e59f6db14ad5aa5d3d454`
- Ajout local : `sfia-review-handoff/` dans `.git/info/exclude` (**pas** `.gitignore`)
- Non remonté comme untracked après exclude
- Worktree **intact** ; non supprimé

## 7. Retour sur main

- `git switch main`
- `git merge --ff-only origin/main` → fast-forward local uniquement
- HEAD final : `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9`
- Branche `project/sfia-studio-functional-architecture` **conservée** localement

## 8. Worktrees finaux

```
/Users/morris/Projects/sfia-workspace                      ff5e3f6 [main]
/Users/morris/Projects/sfia-codex-pilot                    ec7f397 [method/codex-operating-model-pilot]
/Users/morris/Projects/sfia-task-tracker                   b763a31 [cadrage/task-tracker-light]
/Users/morris/Projects/sfia-workspace-ux-reconciliation    7bdabdc [project/sfia-studio-ux-ui-reconciliation]
/Users/morris/Projects/sfia-workspace/sfia-review-handoff  cc9197b [sfia/review-handoff]
```

### Branches de récupération locales

```
  recovery/campus360-detailed-framing
  recovery/sfia-studio-functional-architecture-sync
```

### Branche FA historique

```
  project/sfia-studio-functional-architecture
```

## 9. Absences confirmées

- Aucun push des branches `recovery/*`
- Aucune PR créée
- Aucun merge projet (hors FF local `main` ← `origin/main`)
- Aucun force push
- Aucune suppression de branche distante
- Aucune modification Figma
- Delivery P0 **non** repris dans ce cycle
- Méthode SFIA non modifiée
- Pas de `git clean` / `git reset --hard` global

## 10. Réserves

- Worktree `sfia-workspace-ux-reconciliation` encore présent (hors périmètre de ce cycle).
- Branches `recovery/*` locales non poussées — GO Morris requis pour push/PR.
- Delta Studio 11/12 est un **alignement documentaire** ; clôture formelle FA reste un GO distinct.
- Contenu `.sfia` non vide (runtime local) laissé en place hors logs ciblés.

## 11. Décisions Morris encore nécessaires

- GO push/PR du lot Campus360 (`recovery/campus360-detailed-framing`)
- GO push/PR du delta Studio (`recovery/sfia-studio-functional-architecture-sync`)
- GO suppression éventuelle de `project/sfia-studio-functional-architecture`
- Reprise du Delivery P0 (cycle distinct)
- Futurs commit/push/PR/merge du Delivery

## 12. Verdict

**WORKSPACE RECOVERY COMPLETE — MAIN CLEAN — DELIVERY CAN RESUME**


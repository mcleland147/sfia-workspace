---
status: temporary-review-handoff
branch: sfia/review-handoff
source: .tmp-sfia-review/chatgpt-review.md
canonical: false
merge_to_main: forbidden
updated_for: PR 2 post-merge handoff activation
---

# Review pack — Cycle Capitalisation PR 2 — Repo-informed ChatGPT + review pack proportionné

**Date et heure de revue :** 2026-07-10 22:25 CEST (UTC+0200)

**Cycle :** 15 — Capitalisation / REX — PR 2 méthode v2.5 candidate  
**Branche :** `capitalization/sfia-v2.5-repo-informed-review-pack` @ `409be9e`  
**Base :** `main` @ `409be9e` (post merge PR #154)  
**Niveau review pack :** **full**  
**Gouvernance :** document candidate uniquement — **aucun commit à cette étape**

> Review pack **mono-cycle PR 2** — hors commit — réinitialisé intégralement (écrasement du cycle PR 1).  
> **Non stub final** — contenu complet selon niveau full.

---

## 1. Objectif du cycle

Formaliser et intégrer dans la méthode SFIA v2.5 candidate le processus « Repo-informed ChatGPT + review pack proportionné » validé par Morris, en correction de l'irritant review pack (duplication intégrale, confusion stub/final, volume non maîtrisé).

**Livrables attendus :**

- Mise à jour `prompts/templates/sfia-cycle-execution-template.md`
- Mise à jour `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- Complément court `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`

---

## 2. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| pwd | `/Users/morris/Projects/sfia-workspace` ✅ |
| Branche active | `capitalization/sfia-v2.5-repo-informed-review-pack` ✅ |
| HEAD | `409be9e` ✅ |
| origin/main | `409be9e` ✅ |
| PR #154 dans origin/main | `409be9e` ancêtre confirmé ✅ |
| Fichiers versionnés modifiés | 3 (périmètre autorisé) ✅ |
| Commit effectué | ❌ non (conforme) |
| `.tmp-sfia-review/` | untracked — hors commit ✅ |

### git status --short (extrait pertinent)

```
 M method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
 M method/sfia-fast-track/core/sfia-cycle-routing-guide.md
 M prompts/templates/sfia-cycle-execution-template.md
?? .tmp-sfia-review/
```

### git log --oneline -5

```
409be9e Merge pull request #154 from mcleland147/capitalization/sfia-v2.5-chantiers360-post-mvp-rex-roadmap
83787ea docs: add SFIA v2.5 Chantiers360 post-MVP REX roadmap
e461a06 Merge pull request #153 from mcleland147/ux/chantiers360-r-ux-01-prochaines-actions
a10b216 test: stabilize INC-05 prochaines actions assertions
649de62 docs: close R-UX-01 and align Prochaines Actions UI
```

---

## 3. Git Review Index

```text
Git Review Index
- base branch : main @ 409be9e
- HEAD avant : 409be9e
- HEAD après : 409be9e (pas de commit)
- fichiers modifiés :
  - prompts/templates/sfia-cycle-execution-template.md
  - method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
  - method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- fichiers créés : aucun versionné
- commits créés : aucun
- tests / validations : git diff --stat ; git diff --name-status ; périmètre vérifié ; pas de test applicatif requis
- diff stat : 3 files changed, 344 insertions(+), 65 deletions(-)
- diff name-status :
  M method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
  M method/sfia-fast-track/core/sfia-cycle-routing-guide.md
  M prompts/templates/sfia-cycle-execution-template.md
- décisions Morris requises : GO commit ; GO PR ; éventuelle purge review pack post-validation
- review pack : full
- réserves : voir §8
```

---

## 4. Sources consultées (références — sans copie intégrale)

| Source | Rôle | Sections utilisées |
|--------|------|-------------------|
| `method/.../2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` | Roadmap PR 2 — cadrage capitalisation | §5.1–5.3 (repo-informed, Git review backend, review pack proportionné) ; §6 PR 2 ; §7.2 C1–C4 |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Matrice routage — complément cible | §2 principe directeur ; §4.4 v2.5 |
| `method/.../sfia-v2.5-project-cycles-method-candidate.md` | Cycles projet v2.5 — contexte profils | §2 principe ; §4.15 capitalisation |
| `prompts/templates/sfia-cycle-execution-template.md` | Template canonique — cible principale | §2 protocole ; §7 review pack (avant) ; §10 instruction |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Operating model — cible secondaire | §18.2 profils ; §4 rôles |
| `.tmp-sfia-review/chatgpt-review.md` (PR 1) | Irritant observé — lecture contexte | Constat volume ~2200 lignes ; duplication — **non recopié** |

**Extrait utile (roadmap §5.3 — justification niveaux) :**

> none : micro-fix technique | light : delivery borné 1–5 fichiers | full : cycle documentaire structurant, capitalisation

---

## 5. Fichiers modifiés — traçabilité

### 5.1 `prompts/templates/sfia-cycle-execution-template.md` (+244 / -65 net)

**Synthèse :**

- **§2.0** — Repo-informed pre-check ChatGPT (trigger, séquence, matrice routage, mini-fiche, Git inaccessible, 3 niveaux persistants)
- **§2.1** — Déclenchement enrichi (étape 0 pre-check ; review pack none/light/full)
- **§2.2** — Nouveau chat recommandé ; hiérarchie Git > sources projet
- **§3** — Fiche instanciation : `Review pack : none / light / full`
- **§5** — Prompt généré : review pack par niveau + anti-stub
- **§7** — Refonte complète « Review pack proportionné » (7.1–7.9) : none/light/full, Git Review Index, anti-stub, seuils 500/1200, purge
- **§8** — Stop conditions alignées (stub final, duplication intégrale)
- **§9.1** — Champs rapport : niveau review pack, anti-stub
- **§10** — Instruction projet ChatGPT Repo-informed (texte complet proposé)

**Diff utile complet :** voir `git diff prompts/templates/sfia-cycle-execution-template.md` (309 lignes modifiées).

### 5.2 `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` (+98 lignes)

**Synthèse :**

- **§18.2 Light/Critical** — Alignement review pack none/light/full (remplace mention binaire chatgpt-review.md)
- **§18.2.8** — Section complète Repo-informed + review pack proportionné (rôles ChatGPT/Cursor/Git/Morris, 3 niveaux persistants, review pack, instruction projet)

**Sections complètes ajoutées :** §18.2.8 (A–G) — voir diff Git.

### 5.3 `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` (+2 lignes)

**Synthèse :**

- Complément §2 — pointeur Repo-informed + review pack proportionné vers template §2.0/§7 ; anti-duplication review pack

**Diff complet :**

```diff
+**Complément Repo-informed (candidate v2.5 — PR 2) :** avant génération d'un prompt Cursor repo-based, ChatGPT consulte Git si accessible et applique la matrice de routage documentaire. Le détail de la procédure Repo-informed pre-check et du review pack proportionné (none / light / full) est dans `prompts/templates/sfia-cycle-execution-template.md` §2.0 et §7. Les documents consultés accessibles Git **ne doivent pas** être recopiés intégralement dans le review pack — références, rôles et sections suffisent.
```

---

## 6. Matrice de routage intégrée

Chaîne formalisée dans template §2.0.C et operating model §18.2.8 :

```text
routing guide (sfia-cycle-routing-guide.md)
→ méthode cycles v2.5 (sfia-v2.5-project-cycles-method-candidate.md)
→ template d'exécution (prompts/templates/sfia-cycle-execution-template.md)
→ operating model (sfia-chatgpt-cursor-operating-model.md)
→ guardrails (sfia-rules-and-guardrails.md)
→ contexte projet (documents projet concernés)
→ prompt Cursor généré (contrat d'exécution + Local Git Truth Check)
```

---

## 7. Nouvelle méthode review pack — synthèse intégrée

| Élément | Statut |
|---------|--------|
| Niveaux none / light / full | ✅ template §7.3 ; operating §18.2.8.F |
| Git Review Index | ✅ template §7.4 |
| Documents consultés : références sans copie intégrale Git | ✅ template §7.2 ; routing §2 |
| Fichiers créés/modifiés : traçabilité complète ou diff | ✅ template §7.2 |
| Anti-stub final | ✅ template §7.5 ; operating §18.2.8.F |
| Seuils 500/1200 + purge post-validation | ✅ template §7.6 |
| Correction irritant PR 1 review pack | ✅ explicité |

---

## 8. Proposition instruction projet ChatGPT

Texte intégré dans template §10 (prêt pour ajout futur aux instructions projet ChatGPT — **aucun fichier externe modifié**) :

```text
Avant tout prompt Cursor SFIA repo-based, ChatGPT doit effectuer un Repo-informed pre-check si l'accès Git est disponible. Git main prime sur les sources projet ChatGPT. Si Git n'est pas accessible, ChatGPT doit le signaler explicitement et générer un prompt prudent renforçant la découverte locale par Cursor. Cursor reste responsable du Local Git Truth Check avant exécution locale. Morris décide les gates structurants, push, PR, merge et promotions de baseline. Le review pack est proportionné : les documents consultés accessibles Git sont référencés sans duplication intégrale ; les fichiers créés ou modifiés doivent rester traçables par contenu complet, sections complètes modifiées ou diff utile ; le fichier .tmp-sfia-review/chatgpt-review.md reste temporaire, hors commit, et peut être supprimé ou purgé après validation.
```

---

## 9. Garde-fous confirmés

| Garde-fou | Statut |
|-----------|--------|
| SFIA v2.5 reste candidate — pas de promotion baseline | ✅ |
| SFIA v2.4 baseline opérationnelle | ✅ |
| Aucun fichier Chantiers360 applicatif modifié | ✅ |
| Aucun fichier `.sfia/` / `.cursor/` / SFIA v3 modifié | ✅ |
| Aucun commit / push / PR / merge | ✅ |
| `.tmp-sfia-review/` non staged | ✅ |
| Hors périmètre PR 3 (Figma) / PR 4 (granularité Git) | ✅ |

---

## 10. Réserves / points d'attention

| # | Réserve | Sévérité |
|---|---------|----------|
| R1 | Seuils 500/1200 lignes = proposition candidate — à valider Morris en usage réel | Mineure |
| R2 | Instruction projet ChatGPT §10 préparée mais **non déployée** dans un projet ChatGPT externe | Attendue |
| R3 | `sfia-rules-and-guardrails.md` non modifié — cohérence assumée via pointeurs template/operating | Mineure |
| R4 | Ce review pack (~200 lignes) respecte la nouvelle règle anti-duplication — purge recommandée après validation Morris | Info |

---

## 11. Décisions Morris requises

| # | Question | Options |
|---|----------|---------|
| 1 | GO contenu PR 2 (3 fichiers méthode) ? | Oui / corrections |
| 2 | GO commit local ? | Oui / Non |
| 3 | GO push + création PR ? | Oui / Non / différer |
| 4 | Seuils review pack 500 (light) / 1200 (full) ? | Valider / ajuster |
| 5 | Purge `.tmp-sfia-review/chatgpt-review.md` après validation ? | Oui / conserver temporairement |

---

## 12. Validations exécutées

- [x] `git status --short` — 3 fichiers méthode modifiés uniquement
- [x] `git diff --stat` — 344 insertions, 65 suppressions
- [x] `git diff --name-status` — 3 M dans périmètre autorisé
- [x] `.tmp-sfia-review/` untracked
- [x] Aucun fichier SFIA v3 / `.sfia` / Chantiers360 applicatif touché
- [x] Markdown lisible
- [x] Review pack réinitialisé au début : **oui** (écrasement intégral)
- [x] Review pack complété avant rapport final : **oui**
- [x] Niveau appliqué : **full**
- [x] Absence de stub final : **confirmé**

---

## 13. Verdict review pack (draft initial)

**PR 2 REPO-INFORMED PROCESS DRAFT READY — AWAITING MORRIS REVIEW / COMMIT DECISION**

---

## 14. Complément — Review Handoff Git Branch

**Date et heure :** 2026-07-10 22:38 CEST (UTC+0200)

### Fichiers relus

| Fichier | Rôle |
|---------|------|
| `prompts/templates/sfia-cycle-execution-template.md` | §7 review pack — cible §7.10 |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | §18.2.8 — cible §18.2.8.H |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Pointeur optionnel |
| `.tmp-sfia-review/chatgpt-review.md` | Review pack existant — complément |

### Fichiers modifiés (complément)

| Fichier | Modification |
|---------|--------------|
| `prompts/templates/sfia-cycle-execution-template.md` | §7.10 Review Handoff Git Branch ; stop conditions §8 (24–26) |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | §18.2.8.H Review Handoff Git Branch |
| `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` | Phrase pointeur handoff optionnel |
| `.tmp-sfia-review/chatgpt-review.md` | Section 14 (cette section) |

### Sections ajoutées

**Template §7.10 — Review Handoff Git Branch optionnel**

- Objectif : lecture ChatGPT directe via Git sans copier-coller
- Principe : `.tmp-sfia-review/` local → `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff`
- Statut : branche non canonique, non mergée, handoff sans décision validée
- Règles : overwrite-only, push limité, pas de PR/merge main
- Automatisation L3 bornée + justification
- Stop conditions (6 cas)
- Séquence Cursor si mode activé

**Operating model §18.2.8.H**

- Rôles ChatGPT / Cursor / Git / Morris formalisés

**Routing guide §2**

- Pointeur : mode optionnel, ne remplace pas routage ni main

### Règles ajoutées — synthèse

| Règle | Détail |
|-------|--------|
| Artefact local | `.tmp-sfia-review/chatgpt-review.md` — temporaire Cursor |
| Artefact handoff | `sfia-review-handoff/latest-chatgpt-review.md` — copie Git pour ChatGPT |
| Branche | `sfia/review-handoff` — non mergée, non canonique |
| Activation | GO Morris uniquement |
| Push autorisé | Uniquement `sfia/review-handoff` + fichier handoff |
| Overwrite | Pas d'append infini |

### Niveau d'automatisation

**L3 — exécution bornée** — push automatique limité à une branche dédiée, un fichier unique, sans PR, sans merge, sans impact `main`, sans arbitrage Morris.

### Garde-fous confirmés

| Garde-fou | Statut |
|-----------|--------|
| Aucune branche `sfia/review-handoff` créée à cette étape | ✅ |
| Aucun dossier `sfia-review-handoff/` créé sur branche PR 2 | ✅ |
| Aucun commit / push / PR / merge | ✅ |
| `.tmp-sfia-review/` non staged | ✅ |
| `main` reste source de vérité | ✅ documenté |
| Pas de promotion v2.5 baseline | ✅ |

### Réserves

| # | Réserve | Sévérité |
|---|---------|----------|
| R5 | Branche `sfia/review-handoff` et fichier handoff **non créés** — doctrine seulement ; création = cycle Morris distinct post-merge PR 2 | Attendue |
| R6 | Seuil « fichier excessif sans synthèse » handoff — renvoie à §7.6 sans seuil numérique dédié handoff | Mineure |
| R7 | Instruction projet ChatGPT §10 non encore enrichie du handoff — peut être ajoutée au déploiement instructions | Mineure |

### Décisions Morris requises (complément)

| # | Question | Options |
|---|----------|---------|
| 6 | GO doctrine Review Handoff Git Branch dans PR 2 ? | Oui / corrections |
| 7 | GO activation opérationnelle du mode (création branche `sfia/review-handoff`) ? | Oui / Non / post-merge PR 2 |
| 8 | GO push L3 vers `sfia/review-handoff` en usage réel ? | Oui / Non / manuel Morris |

### Confirmations

- [x] Absence commit / push / PR / merge
- [x] Review pack complété — non stub final
- [x] Aucune branche handoff créée
- [x] Aucun fichier `sfia-review-handoff/` versionné

### Verdict complément

**PR 2 REVIEW HANDOFF COMPLEMENT READY — AWAITING MORRIS REVIEW / COMMIT DECISION**

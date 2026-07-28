# ChatGPT Review Pack — FULL — Accelerated T-A7 Next-Step Decision Integration

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-28 13:56:16 CEST (+0200) |
| **Cycle / profil** | 13 PR readiness (+9 · 14 · 15 · 1) · Critical |
| **Gate consommé** | `GO ACCELERATED REVIEW PUBLISH PR MERGE AND POST-MERGE FOR T-A7 NEXT-STEP DECISION RECORD — PUSH BRANCH — CREATE PR — MERGE ONLY IF REQUIRED CHECKS PASS AND SCOPE REMAINS EXACT — NO BRANCH DELETION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-next-decision` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step` |
| **Base historique** | `53bff7fac6e25c7db34ee48fbb56503ab416cad3` |
| **HEAD publié** | `33ea3e87facc8c99c9c5619d6d2424030d3918a2` |
| **Merge commit** | `7a3e512f562f480c345a12a744806aa4f2ef625b` |
| **origin/main** | `7a3e512f562f480c345a12a744806aa4f2ef625b` |
| **Tree merge** | `025ca7a5d8074dfca679a35a029907f7b1872fd3` |
| **Parents merge** | `53bff7fa…` + `33ea3e87…` |
| **mergedBy** | `mcleland147` |
| **mergedAt** | 2026-07-28T11:53:22Z |
| **Merge timestamp local** | 2026-07-28 13:53:20 CEST (+0200) |
| **PR** | #282 · https://github.com/mcleland147/sfia-workspace/pull/282 |
| **Branche source** | **préservée** @ `33ea3e87…` |
| **Push contenu projet** | **aucun nouveau commit** après `33ea3e87…` |

## Verdict exact

`T-A7 NEXT-STEP DECISION RECORD REVIEWED PUBLISHED AND MERGED — REQUIRED CHECKS PASS — MORRIS DECISIONS D01=.1 D02=.3 D03=.1 D04=.1 D05=.3 CONFIRMED ON MAIN — OPTION C TRAJECTORY ADOPTED WITHOUT OPENING ANY WAVE — TECHNICAL RESERVES REMAIN OPEN — F08 F09 AND F10 TIMING DECIDED WHILE CONTENT REMAINS NOT DECIDED — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — SOURCE BRANCH PRESERVED — POST-MERGE VERIFIED`

## Chaîne exécutée

| Étape | Verdict |
|-------|---------|
| Truth check | HEAD/parent/base exacts · 2 commits · clean · pack-only |
| Revue finale | D01–D05 adoptés · Option C trajectoire · T-A7 NOT OPEN · pas d’overreach |
| PR readiness | `T-A7 NEXT-STEP DECISION RECORD PR READY` |
| Push | `PROJECT BRANCH PUSHED — REMOTE HEAD VERIFIED` |
| PR | #282 créée · scope exact 6 fichiers · +639/−0 · 2 commits |
| Checks PR | run `30356436296` SUCCESS · Detect/Build/Required Gate SUCCESS |
| Merge | merge commit · `PR MERGED — SOURCE BRANCH PRESERVED` |
| Post-merge | run `30356608584` SUCCESS · blobs main = HEAD · `T-A7 NEXT-STEP DECISION RECORD POST-MERGE VERIFIED` |

## Commits

1. `019ce31f2efc45f0a6f53e1b1420102702a994f1` — `docs(sfia-studio): close A5.2 and frame next T-A7 decision step`
2. `33ea3e87facc8c99c9c5619d6d2424030d3918a2` — `docs(sfia-studio): record Morris T-A7 next-step decisions`
3. Merge `7a3e512f562f480c345a12a744806aa4f2ef625b` — Merge pull request #282

## Scope / blobs sur main

| Fichier | Blob |
|---------|------|
| README.md | `4a0ad4942ea5734690076d0fee9b5896fa5dc7b6` |
| 01-a5-2-documentary-closure.md | `329606765520f6ba392e078244abe5ca8c4b4d1b` |
| 02-t-a7-decision-landscape.md | `26ab19220b518ac4064c78f6099865ebbc8f1894` |
| 03-open-reserves-and-gates.md | `769ebb115e5be7164ff1367b9dace3f9948093e6` |
| 04-sequencing-options.md | `77b02b95162f11b25fa61a5fe076c8a360a497b2` |
| 05-morris-decision-pack.md | `be080d725ac82664e8dad085fc02a04805bbf317` |

Cumulatif `53bff7fa…`→`7a3e512…` : 6×A · +639/−0 · pack only.

## Décisions confirmées sur main

| ID | Choix | Statut |
|----|-------|--------|
| T-A7-D01 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D02 | `.3` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D03 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D04 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D05 | `.3` | `DECIDED — ADOPTED BY MORRIS` |

**Option C :** `DECIDED — ADOPTED BY MORRIS` · **aucune vague ouverte**

## Gouvernance

| Item | Statut |
|------|--------|
| B5 / R1 / R-M01 | `OPEN` |
| R-T-A3-1 / R-T-A3-2 | `OPEN HARD` |
| F08/F09/F10 | calendrier décidé · contenu `NOT DECIDED` |
| F03 / F11–F13 | `NOT DECIDED` |
| F04 | `DECIDED — UNCHANGED` |
| T-A6 COMPLETE | `NOT DECLARED` |
| Option A | `NOT COMPLETE` |
| T-A7 | `NOT OPEN` |
| Delivery prep / delivery / cutover | `NOT AUTHORIZED` |
| Persistence / IAM / RGPD | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |

## Checks PR (#282)

| Job | ID | Conclusion |
|-----|-----|------------|
| Detect SFIA Studio changes | 90265620101 | SUCCESS |
| Build and validate SFIA Studio | 90265643155 | SUCCESS |
| SFIA Studio Required Gate | 90265931878 | SUCCESS |

Run : `30356436296` · SUCCESS · warnings : aucun bloquant · aucun required skipped/pending/failed

## Checks post-merge (main)

| Job | ID | Conclusion |
|-----|-----|------------|
| Detect SFIA Studio changes | 90266167013 | SUCCESS |
| Build and validate SFIA Studio | 90266205124 | SUCCESS |
| SFIA Studio Required Gate | 90266513742 | SUCCESS |

Run : `30356608584` · SUCCESS

## Findings

Critical / Major / Minor = **0 / 0 / 0**

Observation : branche source volontairement préservée (gate + body PR).

## Actions non exécutées

- modification contenu projet · 3e commit · amend · rebase · force push
- suppression branche / worktree
- ouverture T-A7 / vague Option C
- delivery prep / delivery / cutover
- fermeture réserve · conso contenu F · COMPLETE · persistence/IAM
- runtime/modeled/workflow/method/OPS1 · Notion/CMP

---

## Contenu complet des six fichiers (origin/main)


### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/README.md`

```markdown
# T-A7 — Next Decision Step Framing (après A5.2)

| Champ | Valeur |
|-------|--------|
| **Gate framing (historique)** | `GO CLOSE A5.2 DOCUMENTARY INTEGRATION AND FRAME NEXT T-A7 DECISION STEP — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Gate décisions consommé** | `GO RECORD MORRIS T-A7 NEXT STEP DECISIONS — T-A7-D01=.1 — T-A7-D02=.3 — T-A7-D03=.1 — T-A7-D04=.1 — T-A7-D05=.3 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 13:36:06 CEST (+0200) |
| **Cycle / profil** | 15 — Capitalisation / enregistrement de décisions (+1 · 2 · 9 · 13) · Critical |
| **Base historique** | `origin/main` @ `53bff7fac6e25c7db34ee48fbb56503ab416cad3` |
| **Commit framing parent** | `019ce31f2efc45f0a6f53e1b1420102702a994f1` |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step` |
| **Worktree local** | `sfia-workspace-t-a7-next-decision` (hors repo path absolu) |
| **Statut pack** | `MORRIS T-A7-D01…D05 RECORDED — IMPLEMENTATION AND WAVE OPENING NOT AUTHORIZED` |
| **A5.2 documentaire** | `CLOSED` |
| **Option C (séquencement)** | `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) — **aucune vague ouverte** |
| **Réserves techniques** | `OPEN` / `OPEN HARD` (inchangées) |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation** | `NOT AUTHORIZED` |
| **Delivery** | `NOT AUTHORIZED` |
| **Cutover** | `NOT AUTHORIZED` |
| **T-A6 COMPLETE** | `NOT DECLARED` |
| **Option A** | `NOT COMPLETE` |
| **F03 / F08–F13 contenu** | `NOT DECIDED` |
| **F08/F09/F10 calendrier** | timing adopté (T-A7-D05=.3) — contenu toujours `NOT DECIDED` |
| **F04** | `DECIDED — UNCHANGED` |
| **Persistence / IAM / RGPD prod** | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |
| **Push / PR** | **aucun** |

## Objectif

1. Enregistrer strictement les décisions Morris T-A7-D01…D05.
2. Adopter documentairement le séquencement Option C (gates/vagues) **sans** ouvrir de vague.
3. **Ne pas** ouvrir T-A7 · **ne pas** autoriser delivery/cutover · **ne pas** fermer de réserve · **ne pas** consommer le contenu des décisions F.

## Décisions Morris enregistrées

| ID | Choix | Sens résumé | Statut |
|----|-------|-------------|--------|
| T-A7-D01 | `.1` | cadrage documentaire complémentaire borné **futur** (gate séparé) · sans B/C/D | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D02 | `.3` | séquencement Option C (5 vagues) · **aucune vague ouverte** | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D03 | `.1` | sujets techniques peuvent rester ouverts pendant framing documentaire | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D04 | `.1` | HARD/B5 ne bloquent pas *par elles-mêmes* une future prep documentaire | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D05 | `.3` | calendrier F : F08 avant delivery · F09 avant Critical/cutover · F10 avant persistence/IAM durable | `DECIDED — ADOPTED BY MORRIS` |

## Périmètre

- enregistrement documentaire T-A7-D01…D05 ;
- adoption Option C comme **trajectoire** (pas comme exécution) ;
- conservation des réserves, stops A5.2 et anti-claims.

## Hors périmètre

- ouverture T-A7 niveaux B/C/D · ouverture d’une vague Option C ;
- delivery preparation / delivery / cutover ;
- implémentation runtime / modeled / workflow / `method/**` / OPS1 ;
- fermeture B5 / R1 / R-T-A3-1 / R-T-A3-2 / R-M01 ;
- validation C1–C4 · consommation contenu F03/F08–F13 ;
- déclaration T-A6 COMPLETE / Option A COMPLETE ;
- sélection persistence / IAM.

## Fichiers

| Fichier | Rôle |
|---------|------|
| `01-a5-2-documentary-closure.md` | Preuve clôture documentaire A5.2 (inchangé) |
| `02-t-a7-decision-landscape.md` | Paysage + effets post-décisions |
| `03-open-reserves-and-gates.md` | Matrice réserves / gates + calendrier F |
| `04-sequencing-options.md` | Options A/B/C · Option C adoptée |
| `05-morris-decision-pack.md` | Bulletin T-A7-D01…D05 enregistré |

## Anti-claims

- `DECIDED — ADOPTED BY MORRIS` ≠ vague ouverte ≠ T-A7 `OPEN`
- Option C adoptée ≠ exécution lancée
- T-A7-D01 `.1` ≠ cadrage complémentaire déjà ouvert
- T-A7-D04 `.1` ≠ delivery preparation `AUTHORIZED`
- T-A7-D05 `.3` = calendrier F ≠ contenu F `DECIDED`
- A5.2 `CLOSED` (documentaire) ≠ réserves `CLOSED`
- T-A7 framing pack (PR #280) `VALIDATED` ≠ T-A7 ouvert
- aucun delivery / cutover autorisé
- T-A6 / Option A restent non COMPLETE

## Verdict

`MORRIS T-A7 NEXT-STEP DECISIONS RECORDED — D01=.1 D02=.3 D03=.1 D04=.1 D05=.3 ADOPTED — OPTION C GATE-BASED SEQUENCING ADOPTED WITHOUT OPENING ANY WAVE — TECHNICAL RESERVES REMAIN OPEN — F08 F09 AND F10 TIMING DECIDED BUT CONTENT REMAINS NOT DECIDED — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — T-A6 NOT DECLARED COMPLETE — OPTION A NOT COMPLETE — PROJECT BRANCH NOT PUSHED`

## Gate candidat suivant

`GO REVIEW MORRIS T-A7 NEXT-STEP DECISION RECORD — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/01-a5-2-documentary-closure.md`

```markdown
# 01 — Clôture documentaire A5.2

| Champ | Valeur |
|-------|--------|
| **Statut** | `A5.2 DOCUMENTARY INTEGRATION CLOSED` |
| **PR** | #281 · MERGED |
| **Merge commit** | `53bff7fac6e25c7db34ee48fbb56503ab416cad3` |
| **Parents** | `9f578ea…` + `bd3608c…` |
| **Tree** | `75f903b3c3f4779dce897922edf97b212e3bc9bd` |
| **Run post-merge** | `30343103225` · SUCCESS |
| **Pack** | `a5-2-reservations-authority-atomicity-framing/` |

## 1. Preuve d’intégration

| Élément | Valeur |
|---------|--------|
| Base pré-merge | `9f578ea1677ce65cffb4b05ddf5649a21a5b240c` |
| Head source | `bd3608c6220e820cc3fa017422a7564a565a1296` |
| Commits source | `cd7c00e…` (framing) · `bd3608c…` (décisions) |
| Scope | 7 fichiers · +785/−0 · pack only |
| Checks PR | Detect / Build / Required Gate SUCCESS (`30341472032`) |
| Checks post-merge | Detect `90222984648` · Build `90223022463` · Required Gate `90223349307` — SUCCESS |

### Blobs sur `main` (inchangés)

| Fichier | Blob |
|---------|------|
| README.md | `146eb122b898b21b6a8bda3f14d57c8f60253d05` |
| 01-scope-and-source-truth.md | `884ed9a9940c628a61d91a0b433645434766eeee` |
| 02-reservation-dependency-matrix.md | `5cadcde061fb3c350ac52a222dc5da7614e4ce2c` |
| 03-authority-model-and-gaps.md | `87bf876878427964e81a4ffd35b8e0b8beab3a3e` |
| 04-atomicity-model-and-options.md | `f693709a487d8023b9fa9e7b9afd61b87351c691` |
| 05-r-m01-and-c1-c4-assessment.md | `1d1b8cf5d3ba50e792ec061a29c9b6575660baeb` |
| 06-morris-arbitration-pack.md | `0fd1c10a3ef92e1f9ea24634f6394a3ca5dcddda` |

## 2. Sens de la clôture

`A5.2 DOCUMENTARY INTEGRATION CLOSED` signifie **uniquement** :

- pack cadré ;
- décisions Morris A52-D01…D05 enregistrées ;
- PR #281 intégrée ;
- checks PASS ;
- contenu versionné sur `main` ;
- preuves Git disponibles.

Elle **ne signifie jamais** :

- réserve fermée ;
- implémentation terminée ;
- T-A6 COMPLETE ;
- Option A COMPLETE ;
- T-A7 OPEN ;
- delivery / cutover autorisés.

## 3. Réalisé / non réalisé

### Réalisé

- cadrage réserves / autorité / atomicité ;
- cinq décisions Morris (A52-D01…D05) ;
- normes : simulation Critical · mémoire bornée · STOP BEFORE DELIVERY · C4→B5 tracking · C1–C3→R-M01 ;
- préparation documentaire F08/F09/F10 **sans** consommation.

### Non réalisé

- API Critical (`.1`) · persistence · IAM ;
- fermeture B5 / R1 / R-T-A3-1 / R-T-A3-2 / R-M01 ;
- validation C1–C4 ;
- consommation F03/F08–F13 ;
- ouverture T-A7 · delivery · cutover.

## 4. Décisions Morris A5.2 (versionnées sur main)

| ID | Choix | Statut |
|----|-------|--------|
| A52-D01 | `.3` + `STOP BEFORE DELIVERY` | `DECIDED — ADOPTED BY MORRIS` |
| A52-D02 | `.2` | `DECIDED — ADOPTED BY MORRIS` |
| A52-D03 | `.3` puis `.1` avant real Critical | `DECIDED — ADOPTED BY MORRIS` |
| A52-D04 | `.4` | `DECIDED — ADOPTED BY MORRIS` |
| A52-D05 | `.2 + .4` | `DECIDED — ADOPTED BY MORRIS` |

## 5. Statuts techniques inchangés

| Item | Statut |
|------|--------|
| B5 / R1 / R-M01 | `OPEN` |
| R-T-A3-1 / R-T-A3-2 | `OPEN HARD` |
| C1–C3 | `RECOMMENDED — NOT VALIDATED` |
| C4 | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
| F04 | `DECIDED — UNCHANGED` |
| F03 / F08–F13 | `NOT DECIDED` |
| T-A6 COMPLETE | `NOT DECLARED` |
| Option A | `NOT COMPLETE` |
| T-A7 | `NOT OPEN` |
| Delivery preparation / delivery / cutover | `NOT AUTHORIZED` |
| Persistence / IAM | `NOT SELECTED` |
| RGPD production | `NOT VALIDATED` |

## Verdict

`A5.2 DOCUMENTARY CLOSURE CONFIRMED — TECHNICAL RESERVES REMAIN OPEN`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/02-t-a7-decision-landscape.md`

```markdown
# 02 — Paysage décisionnel T-A7 (post-A5.2)

| Champ | Valeur |
|-------|--------|
| **T-A7** | `NOT OPEN` |
| **Niveaux A–D** | ADOPTED (A1.1) — transitions = gates distincts |
| **Framing T-A7 (pack #280)** | VALIDATED — **≠** T-A7 ouvert |
| **Séquencement** | Option C `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) — **aucune vague ouverte** |
| **Cadrage complémentaire borné** | autorisable ultérieurement (T-A7-D01=.1) · **pas ouvert** |
| **Ce document** | cartographie mise à jour · **pas** une autorisation d’exécution |

## 1. Niveaux T-A7 (rappel)

| Niveau | Contenu | Statut maintenant |
|--------|---------|-------------------|
| A. Framing | définition · préconditions · critères · aucune modif runtime | pack VALIDATED · **T-A7 NOT OPEN** |
| B. Delivery preparation | backlog · AT · plan · tests candidats · aucun cutover | `NOT AUTHORIZED` |
| C. Delivery | code/frontières · hold flags · migration progressive | `NOT AUTHORIZED` |
| D. Cutover | retrait/désactivation · preuves · rollback · GO dédié | `NOT AUTHORIZED` |

## 2. Sujets ouverts

Légende effets : **N** = non · **Y** = oui · **C** = candidate / selon F · **I** = indirect · **S** = stop documentaire A52

| Sujet | Statut actuel | Framing | Delivery prep | Delivery | Real Critical | Gate Morris | Dépendances |
|-------|---------------|---------|---------------|----------|---------------|-------------|-------------|
| Dette legacy / MethodMode / `method/**` | PARTIAL / MISSING (P03–P09, P24) | N (inventaire OK · D03=.1) | C (F03) | Y | I | F03 · F11 · vague 1 future | AT-11 · UX |
| OPS1 isolation | PARTIAL (P10) | N | C | Y | I | F13 | shared surfaces |
| B5 LPS satellites | `OPEN` + A52-D01 STOP before delivery · D04=.1 | N | N (peut rester ouvert pour *future* prep) | **S/Y** | I | F08 · A52-D01 | T-A1 · C4 |
| R1 Project↔Cycle | `OPEN` · A52-D02 `.2` · D03=.1 | N | N (stratégie) | Y | Y | F08 · F10 | persistence |
| Autorité Critical | R-T-A3-1 `OPEN HARD` · A52-D03 · D03=.1 | N | N (design) | C | **Y HARD** | F09 · F10 · vague 2 | IAM |
| Atomicité Decision links | R-T-A3-2 `OPEN HARD` · A52-D04 · D03=.1 | N | N (design) | Y | **Y HARD** | F08 · F10 · vague 3 | R1 |
| Persistence | `NOT SELECTED` | N | design OK | Y | Y | F10 (calendrier D05) | R1 · U-M02 |
| IAM | `NOT SELECTED` | N | design OK | C | Y | F10 (calendrier D05) | R-T-A3-1/3 |
| F08 réserves avant delivery | contenu `NOT DECIDED` · timing = avant delivery (D05) | N | C | Y | I | F08 bulletin | A52-D01/D02/D04 |
| F09 Critical/cutover | contenu `NOT DECIDED` · timing = avant Critical/cutover (D05) | N | C | C | Y | F09 bulletin | A52-D03 |
| F10 persistence/IAM order | contenu `NOT DECIDED` · timing = avant durable (D05) | N | C | Y | Y | F10 bulletin | A52-D02/D03/D04 |
| R-M01 / C1–C3 | `OPEN` / NOT VALIDATED · A52-D05 · D03=.1 | N | C | C | I | F04 bornage | T-A6 |
| Cutover (niveau D) | `NOT AUTHORIZED` | N | N | N | I | F09 + GO D · vague 5 | legacy + HARD |
| Real Critical execution | `NOT AUTHORIZED` | N | N | N | **Y** | A52-D03 `.1` + F09 | API + IAM |

## 3. Effets A5.2 + T-A7-D0x sur le paysage

- **Autorité** : simulation/read-only maintenant ; `.1` obligatoire avant real Critical (précondition future, pas implémentation).
- **Atomicité** : mémoire/logique maintenant ; durable avant real execution ; R1 et R-T-A3-2 restent ouverts.
- **B5** : tracking C4 fusionné ; **STOP BEFORE DELIVERY** (pas avant delivery preparation) — confirmé T-A7-D04=.1.
- **R-M01/C*** : rattachement + bornage avant future déclaration T-A6 COMPLETE ; F04 UNCHANGED.
- **Séquencement** : Option C adoptée ; vagues 1–5 = gates futurs uniquement.
- **Calendrier F** : D05=.3 · contenu F08/F09/F10 toujours `NOT DECIDED`.
- **Aucune F** consommée automatiquement.

## 4. Ce que ce pack n’autorise pas

- ouvrir T-A7 ;
- ouvrir une vague Option C ;
- entrer en delivery preparation / delivery / cutover ;
- sélectionner persistence ou IAM ;
- déclarer T-A6 ou Option A COMPLETE ;
- fermer une réserve technique ;
- consommer le contenu de F03/F08–F13.
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/03-open-reserves-and-gates.md`

```markdown
# 03 — Réserves ouvertes et gates

| Champ | Valeur |
|-------|--------|
| **Nature** | matrice alignée T-A7-D03=.1 · T-A7-D04=.1 · T-A7-D05=.3 · **pas** une fermeture |
| **Séquencement** | Option C adoptée · **aucune vague ouverte** |
| **T-A7** | `NOT OPEN` |
| **Aucune réserve fermée ici** | oui |

## 1. Matrice réserves / gates

Légende : **N** = non · **Y** = oui · **C** = candidate · **I** = indirect · **S** = stop A52

| Réserve / sujet | Peut rester ouvert pendant framing | Bloque ouverture framing | Bloque delivery prep | Bloque delivery | Bloque cutover | Bloque real Critical | F nécessaire | Morris nécessaire |
|-----------------|------------------------------------|--------------------------|----------------------|-----------------|----------------|----------------------|---------------|-------------------|
| B5 | **Y** (D03=.1) | N | N (D04=.1 · stratégie) | **S/Y** (STOP BEFORE DELIVERY) | Y | I | F08 | A52-D01 suivi / F08 |
| R1 | Y (D03=.1) | N | N | Y | Y | Y | F08 · F10 | stratégie durable |
| R-T-A3-1 HARD | Y (simu OK · D03=.1) | N | N (design · D04=.1) | C | C | **Y** | F09 · F10 | API `.1` avant real |
| R-T-A3-2 HARD | Y (mémoire OK · D03=.1) | N | N (design · D04=.1) | Y | Y | **Y** | F08 · F10 | pattern durable |
| R-M01 | Y (D03=.1) | N | C | C | I | I | F04 bornage | A52-D05.4 |
| C1–C3 | Y | N | N | Dette | I | I | via R-M01 | A52-D05 |
| C4 tracking | Y (via B5) | N | via B5 | via B5 | via B5 | I | via B5 | A52-D01 |
| Legacy / MethodMode / `method/**` | Y (inventaire · D03=.1) | N | C | Y | Y | I | F03 · F11 | inventaire/plan · vague 1 |
| OPS1 | Y | N | C | Y | Y | I | F13 | ACL |
| Persistence | Y (NOT SELECTED · D03=.1) | N | design OK | Y | Y | Y | F10 | SELECTED futur |
| IAM | Y (NOT SELECTED · D03=.1) | N | design OK | C | C | Y | F10 | SELECTED futur |
| F08 | contenu NOT DECIDED · timing = avant delivery (D05) | N | C | Y | Y | I | — | bulletin F08 |
| F09 | contenu NOT DECIDED · timing = avant Critical/cutover (D05) | N | C | C | Y | Y | — | bulletin F09 |
| F10 | contenu NOT DECIDED · timing = avant durable/IAM (D05) | N | C | Y | Y | Y | — | bulletin F10 |

### Lecture normative

- **Framing** : aucune réserve HARD n’empêche un cadrage read-only (T-A7-D03=.1 · T-A7 doc 04 + A5.2).
- **Delivery preparation** : HARD/B5 ne bloquent pas *par elles-mêmes* une *future* prep documentaire (T-A7-D04=.1) ; prep reste `NOT AUTHORIZED` maintenant.
- **Delivery** : STOP B5 ; F08 à arbitrer avant delivery (calendrier D05) ; HARD / R1 bloquants selon chemin.
- **Real Critical** : A52-D03 `.1` + fail-closed + IAM + F09 — **interdit maintenant**.
- **Cutover** : niveau D · F09 · legacy/OPS1 — **interdit maintenant**.
- **Option C** : vagues futures uniquement · aucune ouverte.

## 2. Décisions F (relation — aucune auto-consommation de contenu)

| F | Statut contenu | Calendrier (T-A7-D05=.3) | Relation |
|---|----------------|--------------------------|----------|
| F04 | `DECIDED — UNCHANGED` | — | A52-D05 borne application future |
| F03 | `NOT DECIDED` | vague 1 / inventaire | legacy / MethodMode |
| F08 | `NOT DECIDED` | **avant delivery** | réserves avant delivery |
| F09 | `NOT DECIDED` | **avant real Critical / cutover** | Critical / cutover |
| F10 | `NOT DECIDED` | **avant persistence/IAM durable** | persistence / IAM order |
| F11–F13 | `NOT DECIDED` | selon vagues | UX / gouvernance / OPS1 |

`NO F-DECISION CONTENT AUTO-CONSUMPTION` — seul le **calendrier** F08/F09/F10 est adopté (D05).

## 3. Anti-claims

- matrice ≠ fermeture
- « peut rester ouvert pendant framing » ≠ « résolu »
- « ne bloque pas delivery prep » ≠ « delivery prep AUTHORIZED »
- calendrier F adopté ≠ contenu F `DECIDED`
- Option C adoptée ≠ vague ouverte
- T-A7 reste `NOT OPEN`
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/04-sequencing-options.md`

```markdown
# 04 — Options de séquencement (prochain pas)

| Champ | Valeur |
|-------|--------|
| **Gate décisions** | `GO RECORD MORRIS T-A7 NEXT STEP DECISIONS — T-A7-D01=.1 — T-A7-D02=.3 — T-A7-D03=.1 — T-A7-D04=.1 — T-A7-D05=.3 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 13:36:06 CEST (+0200) |
| **Option C** | `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) |
| **Options A / B** | `NOT SELECTED` |
| **Vagues Option C** | **aucune ouverte** |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |

## Option A — Réserves critiques d’abord

**Statut :** `NOT SELECTED`

**Idée :** traiter d’abord R-T-A3-1 / R-T-A3-2 (autorité + atomicité Decision), puis B5 ; arbitrer F09/F10 ; ensuite élargir le cadrage legacy/cutover.

| Critère | Évaluation |
|---------|------------|
| Bénéfices | aligne A52-D02/D03/D04 ; réduit risque d’ouvrir un framing cutover avant stops Critical |
| Risques | retarde inventaire MethodMode/`method/**`/OPS1 ; peut surinvestir design API trop tôt |
| Dette | design API/atomicité sans SELECTED techno |
| Décisions requises | F09/F10 · évent. F08 partiel · gates design |
| Laissés ouverts | legacy P03–P11 · OPS1 · UX |
| Stops | STOP BEFORE DELIVERY (B5) · `.1` avant real Critical |
| Réversibilité | haute (documentaire) |
| Complexité | moyenne-haute |

**Challenge (historique) :** utile si priorité Critical ; Option C jugée plus progressive.

## Option B — Legacy / cutover d’abord en framing

**Statut :** `NOT SELECTED`

**Idée :** cadrer dette legacy, MethodMode, `method/**`, OPS1 et rollback ; maintenir les réserves techniques comme **stops avant delivery** (pas comme prérequis de framing).

| Critère | Évaluation |
|---------|------------|
| Bénéfices | complète le pack T-A7 (#280) côté P03–P11/P24 ; clarifie F03/F11/F13 |
| Risques | illusion de « T-A7 ready » ; sous-estimer HARD Critical |
| Dette | inventaires sans preuve CI boundary |
| Décisions requises | F03 · F11 · F13 candidates (pas auto) |
| Laissés ouverts | HARD · B5 · persistence/IAM |
| Stops | A52-D01 · A52-D03 · HARD · F08/F09 |
| Réversibilité | haute |
| Complexité | moyenne |

**Challenge (historique) :** réduction risque Critical faible à court terme ; anti-claims obligatoires.

## Option C — Séquencement par gates — **ADOPTÉE**

**Statut :** `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3)

**Idée (trajectoire adoptée) :** framing global **borné** (read-only), puis vagues Morris **distinctes** et **successives** — chacune ouverte uniquement par gate dédié :

1. legacy et périmètre (F03/F11/F13 inventaire) ;
2. autorité (F09 · trajectoire `.1`) ;
3. atomicité / persistence (F08/F10 · A52-D02/D04) ;
4. delivery readiness (F08 · B5 STOP) ;
5. cutover (niveau D · GO dédié).

| Critère | Évaluation |
|---------|------------|
| Bénéfices | préserve niveaux A–D ; évite big-bang ; compatible A5.2 |
| Risques | durée ; fatigue de gates ; sous-spécifier une vague |
| Dette | packs documentaires successifs |
| Décisions requises | une vague à la fois · F non consommées d’avance |
| Laissés ouverts | tout hors vague active |
| Stops | chaque vague réaffirme NOT OPEN / NOT AUTHORIZED |
| Réversibilité | très haute |
| Complexité | moyenne (orchestration) |

### Conséquences immédiates vs futures

| Immédiat (ce cycle) | Futur (gates séparés) |
|---------------------|------------------------|
| trajectoire Option C versionnée | vague 1+ = GO dédiés |
| aucune vague ouverte | cadrage complémentaire borné (T-A7-D01=.1) |
| T-A7 `NOT OPEN` | niveaux B/C/D restent à autoriser séparément |
| F contenu `NOT DECIDED` | F08/F09/F10 selon calendrier T-A7-D05 |

**Anti-claim :** adoption Option C ≠ lancement d’exécution ≠ ouverture vague 1 ≠ delivery preparation.

## Synthèse sélection

| Option | Statut |
|--------|--------|
| A | `NOT SELECTED` |
| B | `NOT SELECTED` |
| C | `DECIDED — ADOPTED BY MORRIS` |

**Trajectoire adoptée · exécution non autorisée.**
```

### `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/05-morris-decision-pack.md`

```markdown
# 05 — Pack d’arbitrage Morris (prochain pas T-A7)

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `MORRIS T-A7-D01…D05 RECORDED` |
| **Gate consommé** | `GO RECORD MORRIS T-A7 NEXT STEP DECISIONS — T-A7-D01=.1 — T-A7-D02=.3 — T-A7-D03=.1 — T-A7-D04=.1 — T-A7-D05=.3 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 13:36:06 CEST (+0200) |
| **T-A7** | `NOT OPEN` |
| **A5.2 documentaire** | `CLOSED` |
| **Option C** | `DECIDED — ADOPTED BY MORRIS` — aucune vague ouverte |
| **F03 / F08–F13 contenu** | `NOT DECIDED` |
| **F08/F09/F10 calendrier** | adopté (D05=.3) · contenu `NOT DECIDED` |
| **F04** | `DECIDED — UNCHANGED` |

---

## T-A7-D01 — Ouvrir un cadrage complémentaire T-A7 ?

**Question :** Faut-il ouvrir un cycle de cadrage documentaire complémentaire (sans ouvrir T-A7 B/C/D) ?

| Option | Description |
|--------|-------------|
| .1 | Oui — cadrage complémentaire borné (legacy inventaire + stops A5.2) |
| .2 | Non — attendre d’abord une autre priorité (ex. B5 / HARD design) |
| .3 | Différer / autre |

**Choix Morris :** `.1`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Sens :** autoriser *ultérieurement* un cycle de cadrage documentaire complémentaire borné, sans ouvrir T-A7 niveaux B/C/D.

**Conséquences :**

- un gate séparé sera requis pour ouvrir ce cadrage ;
- ce cycle n’ouvre pas le cadrage complémentaire ;
- compatible Option C vague 1 (legacy/périmètre) — vague **non** ouverte ici.

**Anti-claims :**

- T-A7-D01 ≠ ouverture actuelle du cadrage complémentaire ;
- T-A7-D01 ≠ T-A7 `OPEN` ;
- T-A7-D01 ≠ delivery preparation / delivery / cutover.

**Restant ouvert :** gate d’ouverture du cadrage complémentaire · inventaire legacy concret.

---

## T-A7-D02 — Quel séquencement ?

**Question :** Quel séquencement adopter pour la trajectoire post-A5.2 ?

| Option | Description |
|--------|-------------|
| .1 | Option A — réserves critiques d’abord (HARD puis B5 · F09/F10) |
| .2 | Option B — legacy/cutover framing d’abord (F03/F11/F13) |
| .3 | Option C — séquencement par gates / vagues |
| .4 | Custom |

**Choix Morris :** `.3`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Sens :** adopter le séquencement Option C par gates et vagues :

1. legacy et périmètre ;
2. autorité ;
3. atomicité / persistence ;
4. delivery readiness ;
5. cutover.

**Conséquences :**

- Options A et B = `NOT SELECTED` ;
- trajectoire documentaire versionnée ;
- **aucune vague n’est ouverte automatiquement**.

**Anti-claims :**

- Option C adoptée ≠ vague 1…5 lancée ;
- Option C ≠ niveaux B/C/D autorisés ;
- chaque vague exige un GO Morris dédié.

**Restant ouvert :** ouverture de chaque vague · contenu des F associées.

---

## T-A7-D03 — Sujets ouverts pendant framing

**Question :** Quels sujets peuvent rester ouverts pendant un cadrage documentaire ?

| Option | Description |
|--------|-------------|
| .1 | Tous les sujets techniques listés (B5, HARD, R1, R-M01, legacy, persistence/IAM NOT SELECTED) — framing N pour toutes |
| .2 | Exiger fermeture HARD avant tout cadrage complémentaire |
| .3 | Custom |

**Choix Morris :** `.1`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Sens :** les sujets techniques suivants peuvent rester ouverts pendant un cadrage documentaire borné :

- B5 ;
- R-T-A3-1 / R-T-A3-2 (`OPEN HARD`) ;
- R1 ;
- R-M01 ;
- legacy ;
- persistence / IAM `NOT SELECTED`.

**Conséquences :**

- framing documentaire n’exige pas la fermeture préalable des HARD ;
- aligné T-A7 doc 04 + A5.2.

**Anti-claims :**

- « peut rester ouvert pendant framing » ≠ résolu ;
- ≠ acceptable pour delivery ;
- ≠ fermeture différée automatique.

**Restant ouvert :** toutes les réserves listées (statuts techniques inchangés).

---

## T-A7-D04 — Bloqueurs delivery preparation

**Question :** Quels sujets bloquent la **delivery preparation** (niveau B) ?

| Option | Description |
|--------|-------------|
| .1 | Aucun HARD n’interdit la prep documentaire ; B5 peut rester OPEN (A52-D01) ; F08/F09/F10 restent NOT DECIDED jusqu’à bulletin |
| .2 | Exiger F08/F09/F10 DECIDED avant toute prep |
| .3 | Exiger fermeture B5 avant prep |
| .4 | Custom |

**Choix Morris :** `.1`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Sens :** les réserves HARD et B5 ne bloquent pas, *par elles-mêmes*, une **future** préparation documentaire du delivery.

**Conséquences :**

- STOP B5 reste **avant delivery** (A52-D01), pas avant prep ;
- une future prep documentaire reste conditionnée à un gate dédié.

**Anti-claims :**

- delivery preparation reste actuellement `NOT AUTHORIZED` ;
- B5 reste `STOP BEFORE DELIVERY` ;
- cette décision ne ferme aucune réserve ;
- cette décision ne consomme aucune F ;
- choisir `.1` ≠ autoriser prep maintenant.

**Restant ouvert :** gate `GO PREPARE T-A7 DELIVERY` (ou équivalent) · contenu F08.

---

## T-A7-D05 — Quand arbitrer F08/F09/F10 ?

**Question :** Faut-il arbitrer F08/F09/F10 avant le cadrage documentaire, ou avant delivery / real Critical ?

| Option | Description |
|--------|-------------|
| .1 | Avant tout cadrage complémentaire |
| .2 | Avant delivery preparation (B) |
| .3 | Avant delivery (C) / real Critical / cutover selon F (F08 delivery · F09 Critical/cutover · F10 persistence/IAM) |
| .4 | Custom |

**Choix Morris :** `.3`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

**Sens :** arbitrer chaque décision F à son point de risque :

- **F08** avant delivery ;
- **F09** avant real Critical / cutover ;
- **F10** avant choix durable persistence / IAM.

**Conséquences :**

- calendrier F adopté ;
- préparation documentaire A5.2 déjà faite reste valide ;
- consommation F = bulletins séparés futurs.

**Anti-claims :**

- F08 / F09 / F10 restent actuellement `NOT DECIDED` (contenu) ;
- le calendrier est décidé, **pas** le contenu ;
- aucun bulletin F n’est consommé dans ce cycle ;
- F03 / F11–F13 restent `NOT DECIDED`.

**Restant ouvert :** contenu de chaque F · GO bulletins F dédiés.

---

## Bulletin Morris consommé (enregistrement)

```
GO RECORD MORRIS T-A7 NEXT STEP DECISIONS — T-A7-D01=.1 — T-A7-D02=.3 — T-A7-D03=.1 — T-A7-D04=.1 — T-A7-D05=.3 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

**Statut gate :** `CONSUMED` (enregistrement documentaire uniquement).

Interdit suite à ce GO : ouvrir T-A7 · ouvrir une vague · delivery/cutover · fermeture implicite · consommation contenu F · COMPLETE.

---

## Synthèse décisions

| ID | Choix | Statut |
|----|-------|--------|
| T-A7-D01 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D02 | `.3` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D03 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D04 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D05 | `.3` | `DECIDED — ADOPTED BY MORRIS` |

## Garde-fous absolus

- A5.2 documentaire : `CLOSED`
- réserves techniques : `OPEN` / `OPEN HARD`
- T-A6 COMPLETE : `NOT DECLARED`
- Option A : `NOT COMPLETE`
- T-A7 : `NOT OPEN`
- delivery preparation / delivery / cutover : `NOT AUTHORIZED`
- F03 / F08–F13 contenu : `NOT DECIDED`
- F08/F09/F10 calendrier : adopté (D05) · contenu `NOT DECIDED`
- persistence / IAM : `NOT SELECTED`
- RGPD production : `NOT VALIDATED`

Formulations interdites : « T-A7 ready to execute » · « T-A7 opened » · « delivery ready » · « cutover approved » · « reserves resolved » · « Option A complete » · « Option C waves started » · « F08/F09/F10 content decided ».
```

---

## Diff complet utile (`53bff7fa…` → `7a3e512…` / main)

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/01-a5-2-documentary-closure.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/01-a5-2-documentary-closure.md
new file mode 100644
index 0000000..3296067
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/01-a5-2-documentary-closure.md
@@ -0,0 +1,102 @@
+# 01 — Clôture documentaire A5.2
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut** | `A5.2 DOCUMENTARY INTEGRATION CLOSED` |
+| **PR** | #281 · MERGED |
+| **Merge commit** | `53bff7fac6e25c7db34ee48fbb56503ab416cad3` |
+| **Parents** | `9f578ea…` + `bd3608c…` |
+| **Tree** | `75f903b3c3f4779dce897922edf97b212e3bc9bd` |
+| **Run post-merge** | `30343103225` · SUCCESS |
+| **Pack** | `a5-2-reservations-authority-atomicity-framing/` |
+
+## 1. Preuve d’intégration
+
+| Élément | Valeur |
+|---------|--------|
+| Base pré-merge | `9f578ea1677ce65cffb4b05ddf5649a21a5b240c` |
+| Head source | `bd3608c6220e820cc3fa017422a7564a565a1296` |
+| Commits source | `cd7c00e…` (framing) · `bd3608c…` (décisions) |
+| Scope | 7 fichiers · +785/−0 · pack only |
+| Checks PR | Detect / Build / Required Gate SUCCESS (`30341472032`) |
+| Checks post-merge | Detect `90222984648` · Build `90223022463` · Required Gate `90223349307` — SUCCESS |
+
+### Blobs sur `main` (inchangés)
+
+| Fichier | Blob |
+|---------|------|
+| README.md | `146eb122b898b21b6a8bda3f14d57c8f60253d05` |
+| 01-scope-and-source-truth.md | `884ed9a9940c628a61d91a0b433645434766eeee` |
+| 02-reservation-dependency-matrix.md | `5cadcde061fb3c350ac52a222dc5da7614e4ce2c` |
+| 03-authority-model-and-gaps.md | `87bf876878427964e81a4ffd35b8e0b8beab3a3e` |
+| 04-atomicity-model-and-options.md | `f693709a487d8023b9fa9e7b9afd61b87351c691` |
+| 05-r-m01-and-c1-c4-assessment.md | `1d1b8cf5d3ba50e792ec061a29c9b6575660baeb` |
+| 06-morris-arbitration-pack.md | `0fd1c10a3ef92e1f9ea24634f6394a3ca5dcddda` |
+
+## 2. Sens de la clôture
+
+`A5.2 DOCUMENTARY INTEGRATION CLOSED` signifie **uniquement** :
+
+- pack cadré ;
+- décisions Morris A52-D01…D05 enregistrées ;
+- PR #281 intégrée ;
+- checks PASS ;
+- contenu versionné sur `main` ;
+- preuves Git disponibles.
+
+Elle **ne signifie jamais** :
+
+- réserve fermée ;
+- implémentation terminée ;
+- T-A6 COMPLETE ;
+- Option A COMPLETE ;
+- T-A7 OPEN ;
+- delivery / cutover autorisés.
+
+## 3. Réalisé / non réalisé
+
+### Réalisé
+
+- cadrage réserves / autorité / atomicité ;
+- cinq décisions Morris (A52-D01…D05) ;
+- normes : simulation Critical · mémoire bornée · STOP BEFORE DELIVERY · C4→B5 tracking · C1–C3→R-M01 ;
+- préparation documentaire F08/F09/F10 **sans** consommation.
+
+### Non réalisé
+
+- API Critical (`.1`) · persistence · IAM ;
+- fermeture B5 / R1 / R-T-A3-1 / R-T-A3-2 / R-M01 ;
+- validation C1–C4 ;
+- consommation F03/F08–F13 ;
+- ouverture T-A7 · delivery · cutover.
+
+## 4. Décisions Morris A5.2 (versionnées sur main)
+
+| ID | Choix | Statut |
+|----|-------|--------|
+| A52-D01 | `.3` + `STOP BEFORE DELIVERY` | `DECIDED — ADOPTED BY MORRIS` |
+| A52-D02 | `.2` | `DECIDED — ADOPTED BY MORRIS` |
+| A52-D03 | `.3` puis `.1` avant real Critical | `DECIDED — ADOPTED BY MORRIS` |
+| A52-D04 | `.4` | `DECIDED — ADOPTED BY MORRIS` |
+| A52-D05 | `.2 + .4` | `DECIDED — ADOPTED BY MORRIS` |
+
+## 5. Statuts techniques inchangés
+
+| Item | Statut |
+|------|--------|
+| B5 / R1 / R-M01 | `OPEN` |
+| R-T-A3-1 / R-T-A3-2 | `OPEN HARD` |
+| C1–C3 | `RECOMMENDED — NOT VALIDATED` |
+| C4 | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
+| F04 | `DECIDED — UNCHANGED` |
+| F03 / F08–F13 | `NOT DECIDED` |
+| T-A6 COMPLETE | `NOT DECLARED` |
+| Option A | `NOT COMPLETE` |
+| T-A7 | `NOT OPEN` |
+| Delivery preparation / delivery / cutover | `NOT AUTHORIZED` |
+| Persistence / IAM | `NOT SELECTED` |
+| RGPD production | `NOT VALIDATED` |
+
+## Verdict
+
+`A5.2 DOCUMENTARY CLOSURE CONFIRMED — TECHNICAL RESERVES REMAIN OPEN`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/02-t-a7-decision-landscape.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/02-t-a7-decision-landscape.md
new file mode 100644
index 0000000..26ab192
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/02-t-a7-decision-landscape.md
@@ -0,0 +1,60 @@
+# 02 — Paysage décisionnel T-A7 (post-A5.2)
+
+| Champ | Valeur |
+|-------|--------|
+| **T-A7** | `NOT OPEN` |
+| **Niveaux A–D** | ADOPTED (A1.1) — transitions = gates distincts |
+| **Framing T-A7 (pack #280)** | VALIDATED — **≠** T-A7 ouvert |
+| **Séquencement** | Option C `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) — **aucune vague ouverte** |
+| **Cadrage complémentaire borné** | autorisable ultérieurement (T-A7-D01=.1) · **pas ouvert** |
+| **Ce document** | cartographie mise à jour · **pas** une autorisation d’exécution |
+
+## 1. Niveaux T-A7 (rappel)
+
+| Niveau | Contenu | Statut maintenant |
+|--------|---------|-------------------|
+| A. Framing | définition · préconditions · critères · aucune modif runtime | pack VALIDATED · **T-A7 NOT OPEN** |
+| B. Delivery preparation | backlog · AT · plan · tests candidats · aucun cutover | `NOT AUTHORIZED` |
+| C. Delivery | code/frontières · hold flags · migration progressive | `NOT AUTHORIZED` |
+| D. Cutover | retrait/désactivation · preuves · rollback · GO dédié | `NOT AUTHORIZED` |
+
+## 2. Sujets ouverts
+
+Légende effets : **N** = non · **Y** = oui · **C** = candidate / selon F · **I** = indirect · **S** = stop documentaire A52
+
+| Sujet | Statut actuel | Framing | Delivery prep | Delivery | Real Critical | Gate Morris | Dépendances |
+|-------|---------------|---------|---------------|----------|---------------|-------------|-------------|
+| Dette legacy / MethodMode / `method/**` | PARTIAL / MISSING (P03–P09, P24) | N (inventaire OK · D03=.1) | C (F03) | Y | I | F03 · F11 · vague 1 future | AT-11 · UX |
+| OPS1 isolation | PARTIAL (P10) | N | C | Y | I | F13 | shared surfaces |
+| B5 LPS satellites | `OPEN` + A52-D01 STOP before delivery · D04=.1 | N | N (peut rester ouvert pour *future* prep) | **S/Y** | I | F08 · A52-D01 | T-A1 · C4 |
+| R1 Project↔Cycle | `OPEN` · A52-D02 `.2` · D03=.1 | N | N (stratégie) | Y | Y | F08 · F10 | persistence |
+| Autorité Critical | R-T-A3-1 `OPEN HARD` · A52-D03 · D03=.1 | N | N (design) | C | **Y HARD** | F09 · F10 · vague 2 | IAM |
+| Atomicité Decision links | R-T-A3-2 `OPEN HARD` · A52-D04 · D03=.1 | N | N (design) | Y | **Y HARD** | F08 · F10 · vague 3 | R1 |
+| Persistence | `NOT SELECTED` | N | design OK | Y | Y | F10 (calendrier D05) | R1 · U-M02 |
+| IAM | `NOT SELECTED` | N | design OK | C | Y | F10 (calendrier D05) | R-T-A3-1/3 |
+| F08 réserves avant delivery | contenu `NOT DECIDED` · timing = avant delivery (D05) | N | C | Y | I | F08 bulletin | A52-D01/D02/D04 |
+| F09 Critical/cutover | contenu `NOT DECIDED` · timing = avant Critical/cutover (D05) | N | C | C | Y | F09 bulletin | A52-D03 |
+| F10 persistence/IAM order | contenu `NOT DECIDED` · timing = avant durable (D05) | N | C | Y | Y | F10 bulletin | A52-D02/D03/D04 |
+| R-M01 / C1–C3 | `OPEN` / NOT VALIDATED · A52-D05 · D03=.1 | N | C | C | I | F04 bornage | T-A6 |
+| Cutover (niveau D) | `NOT AUTHORIZED` | N | N | N | I | F09 + GO D · vague 5 | legacy + HARD |
+| Real Critical execution | `NOT AUTHORIZED` | N | N | N | **Y** | A52-D03 `.1` + F09 | API + IAM |
+
+## 3. Effets A5.2 + T-A7-D0x sur le paysage
+
+- **Autorité** : simulation/read-only maintenant ; `.1` obligatoire avant real Critical (précondition future, pas implémentation).
+- **Atomicité** : mémoire/logique maintenant ; durable avant real execution ; R1 et R-T-A3-2 restent ouverts.
+- **B5** : tracking C4 fusionné ; **STOP BEFORE DELIVERY** (pas avant delivery preparation) — confirmé T-A7-D04=.1.
+- **R-M01/C*** : rattachement + bornage avant future déclaration T-A6 COMPLETE ; F04 UNCHANGED.
+- **Séquencement** : Option C adoptée ; vagues 1–5 = gates futurs uniquement.
+- **Calendrier F** : D05=.3 · contenu F08/F09/F10 toujours `NOT DECIDED`.
+- **Aucune F** consommée automatiquement.
+
+## 4. Ce que ce pack n’autorise pas
+
+- ouvrir T-A7 ;
+- ouvrir une vague Option C ;
+- entrer en delivery preparation / delivery / cutover ;
+- sélectionner persistence ou IAM ;
+- déclarer T-A6 ou Option A COMPLETE ;
+- fermer une réserve technique ;
+- consommer le contenu de F03/F08–F13.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/03-open-reserves-and-gates.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/03-open-reserves-and-gates.md
new file mode 100644
index 0000000..769ebb1
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/03-open-reserves-and-gates.md
@@ -0,0 +1,60 @@
+# 03 — Réserves ouvertes et gates
+
+| Champ | Valeur |
+|-------|--------|
+| **Nature** | matrice alignée T-A7-D03=.1 · T-A7-D04=.1 · T-A7-D05=.3 · **pas** une fermeture |
+| **Séquencement** | Option C adoptée · **aucune vague ouverte** |
+| **T-A7** | `NOT OPEN` |
+| **Aucune réserve fermée ici** | oui |
+
+## 1. Matrice réserves / gates
+
+Légende : **N** = non · **Y** = oui · **C** = candidate · **I** = indirect · **S** = stop A52
+
+| Réserve / sujet | Peut rester ouvert pendant framing | Bloque ouverture framing | Bloque delivery prep | Bloque delivery | Bloque cutover | Bloque real Critical | F nécessaire | Morris nécessaire |
+|-----------------|------------------------------------|--------------------------|----------------------|-----------------|----------------|----------------------|---------------|-------------------|
+| B5 | **Y** (D03=.1) | N | N (D04=.1 · stratégie) | **S/Y** (STOP BEFORE DELIVERY) | Y | I | F08 | A52-D01 suivi / F08 |
+| R1 | Y (D03=.1) | N | N | Y | Y | Y | F08 · F10 | stratégie durable |
+| R-T-A3-1 HARD | Y (simu OK · D03=.1) | N | N (design · D04=.1) | C | C | **Y** | F09 · F10 | API `.1` avant real |
+| R-T-A3-2 HARD | Y (mémoire OK · D03=.1) | N | N (design · D04=.1) | Y | Y | **Y** | F08 · F10 | pattern durable |
+| R-M01 | Y (D03=.1) | N | C | C | I | I | F04 bornage | A52-D05.4 |
+| C1–C3 | Y | N | N | Dette | I | I | via R-M01 | A52-D05 |
+| C4 tracking | Y (via B5) | N | via B5 | via B5 | via B5 | I | via B5 | A52-D01 |
+| Legacy / MethodMode / `method/**` | Y (inventaire · D03=.1) | N | C | Y | Y | I | F03 · F11 | inventaire/plan · vague 1 |
+| OPS1 | Y | N | C | Y | Y | I | F13 | ACL |
+| Persistence | Y (NOT SELECTED · D03=.1) | N | design OK | Y | Y | Y | F10 | SELECTED futur |
+| IAM | Y (NOT SELECTED · D03=.1) | N | design OK | C | C | Y | F10 | SELECTED futur |
+| F08 | contenu NOT DECIDED · timing = avant delivery (D05) | N | C | Y | Y | I | — | bulletin F08 |
+| F09 | contenu NOT DECIDED · timing = avant Critical/cutover (D05) | N | C | C | Y | Y | — | bulletin F09 |
+| F10 | contenu NOT DECIDED · timing = avant durable/IAM (D05) | N | C | Y | Y | Y | — | bulletin F10 |
+
+### Lecture normative
+
+- **Framing** : aucune réserve HARD n’empêche un cadrage read-only (T-A7-D03=.1 · T-A7 doc 04 + A5.2).
+- **Delivery preparation** : HARD/B5 ne bloquent pas *par elles-mêmes* une *future* prep documentaire (T-A7-D04=.1) ; prep reste `NOT AUTHORIZED` maintenant.
+- **Delivery** : STOP B5 ; F08 à arbitrer avant delivery (calendrier D05) ; HARD / R1 bloquants selon chemin.
+- **Real Critical** : A52-D03 `.1` + fail-closed + IAM + F09 — **interdit maintenant**.
+- **Cutover** : niveau D · F09 · legacy/OPS1 — **interdit maintenant**.
+- **Option C** : vagues futures uniquement · aucune ouverte.
+
+## 2. Décisions F (relation — aucune auto-consommation de contenu)
+
+| F | Statut contenu | Calendrier (T-A7-D05=.3) | Relation |
+|---|----------------|--------------------------|----------|
+| F04 | `DECIDED — UNCHANGED` | — | A52-D05 borne application future |
+| F03 | `NOT DECIDED` | vague 1 / inventaire | legacy / MethodMode |
+| F08 | `NOT DECIDED` | **avant delivery** | réserves avant delivery |
+| F09 | `NOT DECIDED` | **avant real Critical / cutover** | Critical / cutover |
+| F10 | `NOT DECIDED` | **avant persistence/IAM durable** | persistence / IAM order |
+| F11–F13 | `NOT DECIDED` | selon vagues | UX / gouvernance / OPS1 |
+
+`NO F-DECISION CONTENT AUTO-CONSUMPTION` — seul le **calendrier** F08/F09/F10 est adopté (D05).
+
+## 3. Anti-claims
+
+- matrice ≠ fermeture
+- « peut rester ouvert pendant framing » ≠ « résolu »
+- « ne bloque pas delivery prep » ≠ « delivery prep AUTHORIZED »
+- calendrier F adopté ≠ contenu F `DECIDED`
+- Option C adoptée ≠ vague ouverte
+- T-A7 reste `NOT OPEN`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/04-sequencing-options.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/04-sequencing-options.md
new file mode 100644
index 0000000..77b02b9
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/04-sequencing-options.md
@@ -0,0 +1,93 @@
+# 04 — Options de séquencement (prochain pas)
+
+| Champ | Valeur |
+|-------|--------|
+| **Gate décisions** | `GO RECORD MORRIS T-A7 NEXT STEP DECISIONS — T-A7-D01=.1 — T-A7-D02=.3 — T-A7-D03=.1 — T-A7-D04=.1 — T-A7-D05=.3 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau** | 2026-07-28 13:36:06 CEST (+0200) |
+| **Option C** | `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) |
+| **Options A / B** | `NOT SELECTED` |
+| **Vagues Option C** | **aucune ouverte** |
+| **T-A7** | `NOT OPEN` |
+| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
+
+## Option A — Réserves critiques d’abord
+
+**Statut :** `NOT SELECTED`
+
+**Idée :** traiter d’abord R-T-A3-1 / R-T-A3-2 (autorité + atomicité Decision), puis B5 ; arbitrer F09/F10 ; ensuite élargir le cadrage legacy/cutover.
+
+| Critère | Évaluation |
+|---------|------------|
+| Bénéfices | aligne A52-D02/D03/D04 ; réduit risque d’ouvrir un framing cutover avant stops Critical |
+| Risques | retarde inventaire MethodMode/`method/**`/OPS1 ; peut surinvestir design API trop tôt |
+| Dette | design API/atomicité sans SELECTED techno |
+| Décisions requises | F09/F10 · évent. F08 partiel · gates design |
+| Laissés ouverts | legacy P03–P11 · OPS1 · UX |
+| Stops | STOP BEFORE DELIVERY (B5) · `.1` avant real Critical |
+| Réversibilité | haute (documentaire) |
+| Complexité | moyenne-haute |
+
+**Challenge (historique) :** utile si priorité Critical ; Option C jugée plus progressive.
+
+## Option B — Legacy / cutover d’abord en framing
+
+**Statut :** `NOT SELECTED`
+
+**Idée :** cadrer dette legacy, MethodMode, `method/**`, OPS1 et rollback ; maintenir les réserves techniques comme **stops avant delivery** (pas comme prérequis de framing).
+
+| Critère | Évaluation |
+|---------|------------|
+| Bénéfices | complète le pack T-A7 (#280) côté P03–P11/P24 ; clarifie F03/F11/F13 |
+| Risques | illusion de « T-A7 ready » ; sous-estimer HARD Critical |
+| Dette | inventaires sans preuve CI boundary |
+| Décisions requises | F03 · F11 · F13 candidates (pas auto) |
+| Laissés ouverts | HARD · B5 · persistence/IAM |
+| Stops | A52-D01 · A52-D03 · HARD · F08/F09 |
+| Réversibilité | haute |
+| Complexité | moyenne |
+
+**Challenge (historique) :** réduction risque Critical faible à court terme ; anti-claims obligatoires.
+
+## Option C — Séquencement par gates — **ADOPTÉE**
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3)
+
+**Idée (trajectoire adoptée) :** framing global **borné** (read-only), puis vagues Morris **distinctes** et **successives** — chacune ouverte uniquement par gate dédié :
+
+1. legacy et périmètre (F03/F11/F13 inventaire) ;
+2. autorité (F09 · trajectoire `.1`) ;
+3. atomicité / persistence (F08/F10 · A52-D02/D04) ;
+4. delivery readiness (F08 · B5 STOP) ;
+5. cutover (niveau D · GO dédié).
+
+| Critère | Évaluation |
+|---------|------------|
+| Bénéfices | préserve niveaux A–D ; évite big-bang ; compatible A5.2 |
+| Risques | durée ; fatigue de gates ; sous-spécifier une vague |
+| Dette | packs documentaires successifs |
+| Décisions requises | une vague à la fois · F non consommées d’avance |
+| Laissés ouverts | tout hors vague active |
+| Stops | chaque vague réaffirme NOT OPEN / NOT AUTHORIZED |
+| Réversibilité | très haute |
+| Complexité | moyenne (orchestration) |
+
+### Conséquences immédiates vs futures
+
+| Immédiat (ce cycle) | Futur (gates séparés) |
+|---------------------|------------------------|
+| trajectoire Option C versionnée | vague 1+ = GO dédiés |
+| aucune vague ouverte | cadrage complémentaire borné (T-A7-D01=.1) |
+| T-A7 `NOT OPEN` | niveaux B/C/D restent à autoriser séparément |
+| F contenu `NOT DECIDED` | F08/F09/F10 selon calendrier T-A7-D05 |
+
+**Anti-claim :** adoption Option C ≠ lancement d’exécution ≠ ouverture vague 1 ≠ delivery preparation.
+
+## Synthèse sélection
+
+| Option | Statut |
+|--------|--------|
+| A | `NOT SELECTED` |
+| B | `NOT SELECTED` |
+| C | `DECIDED — ADOPTED BY MORRIS` |
+
+**Trajectoire adoptée · exécution non autorisée.**
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/05-morris-decision-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/05-morris-decision-pack.md
new file mode 100644
index 0000000..be080d7
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/05-morris-decision-pack.md
@@ -0,0 +1,233 @@
+# 05 — Pack d’arbitrage Morris (prochain pas T-A7)
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut pack** | `MORRIS T-A7-D01…D05 RECORDED` |
+| **Gate consommé** | `GO RECORD MORRIS T-A7 NEXT STEP DECISIONS — T-A7-D01=.1 — T-A7-D02=.3 — T-A7-D03=.1 — T-A7-D04=.1 — T-A7-D05=.3 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau** | 2026-07-28 13:36:06 CEST (+0200) |
+| **T-A7** | `NOT OPEN` |
+| **A5.2 documentaire** | `CLOSED` |
+| **Option C** | `DECIDED — ADOPTED BY MORRIS` — aucune vague ouverte |
+| **F03 / F08–F13 contenu** | `NOT DECIDED` |
+| **F08/F09/F10 calendrier** | adopté (D05=.3) · contenu `NOT DECIDED` |
+| **F04** | `DECIDED — UNCHANGED` |
+
+---
+
+## T-A7-D01 — Ouvrir un cadrage complémentaire T-A7 ?
+
+**Question :** Faut-il ouvrir un cycle de cadrage documentaire complémentaire (sans ouvrir T-A7 B/C/D) ?
+
+| Option | Description |
+|--------|-------------|
+| .1 | Oui — cadrage complémentaire borné (legacy inventaire + stops A5.2) |
+| .2 | Non — attendre d’abord une autre priorité (ex. B5 / HARD design) |
+| .3 | Différer / autre |
+
+**Choix Morris :** `.1`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+**Sens :** autoriser *ultérieurement* un cycle de cadrage documentaire complémentaire borné, sans ouvrir T-A7 niveaux B/C/D.
+
+**Conséquences :**
+
+- un gate séparé sera requis pour ouvrir ce cadrage ;
+- ce cycle n’ouvre pas le cadrage complémentaire ;
+- compatible Option C vague 1 (legacy/périmètre) — vague **non** ouverte ici.
+
+**Anti-claims :**
+
+- T-A7-D01 ≠ ouverture actuelle du cadrage complémentaire ;
+- T-A7-D01 ≠ T-A7 `OPEN` ;
+- T-A7-D01 ≠ delivery preparation / delivery / cutover.
+
+**Restant ouvert :** gate d’ouverture du cadrage complémentaire · inventaire legacy concret.
+
+---
+
+## T-A7-D02 — Quel séquencement ?
+
+**Question :** Quel séquencement adopter pour la trajectoire post-A5.2 ?
+
+| Option | Description |
+|--------|-------------|
+| .1 | Option A — réserves critiques d’abord (HARD puis B5 · F09/F10) |
+| .2 | Option B — legacy/cutover framing d’abord (F03/F11/F13) |
+| .3 | Option C — séquencement par gates / vagues |
+| .4 | Custom |
+
+**Choix Morris :** `.3`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+**Sens :** adopter le séquencement Option C par gates et vagues :
+
+1. legacy et périmètre ;
+2. autorité ;
+3. atomicité / persistence ;
+4. delivery readiness ;
+5. cutover.
+
+**Conséquences :**
+
+- Options A et B = `NOT SELECTED` ;
+- trajectoire documentaire versionnée ;
+- **aucune vague n’est ouverte automatiquement**.
+
+**Anti-claims :**
+
+- Option C adoptée ≠ vague 1…5 lancée ;
+- Option C ≠ niveaux B/C/D autorisés ;
+- chaque vague exige un GO Morris dédié.
+
+**Restant ouvert :** ouverture de chaque vague · contenu des F associées.
+
+---
+
+## T-A7-D03 — Sujets ouverts pendant framing
+
+**Question :** Quels sujets peuvent rester ouverts pendant un cadrage documentaire ?
+
+| Option | Description |
+|--------|-------------|
+| .1 | Tous les sujets techniques listés (B5, HARD, R1, R-M01, legacy, persistence/IAM NOT SELECTED) — framing N pour toutes |
+| .2 | Exiger fermeture HARD avant tout cadrage complémentaire |
+| .3 | Custom |
+
+**Choix Morris :** `.1`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+**Sens :** les sujets techniques suivants peuvent rester ouverts pendant un cadrage documentaire borné :
+
+- B5 ;
+- R-T-A3-1 / R-T-A3-2 (`OPEN HARD`) ;
+- R1 ;
+- R-M01 ;
+- legacy ;
+- persistence / IAM `NOT SELECTED`.
+
+**Conséquences :**
+
+- framing documentaire n’exige pas la fermeture préalable des HARD ;
+- aligné T-A7 doc 04 + A5.2.
+
+**Anti-claims :**
+
+- « peut rester ouvert pendant framing » ≠ résolu ;
+- ≠ acceptable pour delivery ;
+- ≠ fermeture différée automatique.
+
+**Restant ouvert :** toutes les réserves listées (statuts techniques inchangés).
+
+---
+
+## T-A7-D04 — Bloqueurs delivery preparation
+
+**Question :** Quels sujets bloquent la **delivery preparation** (niveau B) ?
+
+| Option | Description |
+|--------|-------------|
+| .1 | Aucun HARD n’interdit la prep documentaire ; B5 peut rester OPEN (A52-D01) ; F08/F09/F10 restent NOT DECIDED jusqu’à bulletin |
+| .2 | Exiger F08/F09/F10 DECIDED avant toute prep |
+| .3 | Exiger fermeture B5 avant prep |
+| .4 | Custom |
+
+**Choix Morris :** `.1`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+**Sens :** les réserves HARD et B5 ne bloquent pas, *par elles-mêmes*, une **future** préparation documentaire du delivery.
+
+**Conséquences :**
+
+- STOP B5 reste **avant delivery** (A52-D01), pas avant prep ;
+- une future prep documentaire reste conditionnée à un gate dédié.
+
+**Anti-claims :**
+
+- delivery preparation reste actuellement `NOT AUTHORIZED` ;
+- B5 reste `STOP BEFORE DELIVERY` ;
+- cette décision ne ferme aucune réserve ;
+- cette décision ne consomme aucune F ;
+- choisir `.1` ≠ autoriser prep maintenant.
+
+**Restant ouvert :** gate `GO PREPARE T-A7 DELIVERY` (ou équivalent) · contenu F08.
+
+---
+
+## T-A7-D05 — Quand arbitrer F08/F09/F10 ?
+
+**Question :** Faut-il arbitrer F08/F09/F10 avant le cadrage documentaire, ou avant delivery / real Critical ?
+
+| Option | Description |
+|--------|-------------|
+| .1 | Avant tout cadrage complémentaire |
+| .2 | Avant delivery preparation (B) |
+| .3 | Avant delivery (C) / real Critical / cutover selon F (F08 delivery · F09 Critical/cutover · F10 persistence/IAM) |
+| .4 | Custom |
+
+**Choix Morris :** `.3`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+**Sens :** arbitrer chaque décision F à son point de risque :
+
+- **F08** avant delivery ;
+- **F09** avant real Critical / cutover ;
+- **F10** avant choix durable persistence / IAM.
+
+**Conséquences :**
+
+- calendrier F adopté ;
+- préparation documentaire A5.2 déjà faite reste valide ;
+- consommation F = bulletins séparés futurs.
+
+**Anti-claims :**
+
+- F08 / F09 / F10 restent actuellement `NOT DECIDED` (contenu) ;
+- le calendrier est décidé, **pas** le contenu ;
+- aucun bulletin F n’est consommé dans ce cycle ;
+- F03 / F11–F13 restent `NOT DECIDED`.
+
+**Restant ouvert :** contenu de chaque F · GO bulletins F dédiés.
+
+---
+
+## Bulletin Morris consommé (enregistrement)
+
+```
+GO RECORD MORRIS T-A7 NEXT STEP DECISIONS — T-A7-D01=.1 — T-A7-D02=.3 — T-A7-D03=.1 — T-A7-D04=.1 — T-A7-D05=.3 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
+```
+
+**Statut gate :** `CONSUMED` (enregistrement documentaire uniquement).
+
+Interdit suite à ce GO : ouvrir T-A7 · ouvrir une vague · delivery/cutover · fermeture implicite · consommation contenu F · COMPLETE.
+
+---
+
+## Synthèse décisions
+
+| ID | Choix | Statut |
+|----|-------|--------|
+| T-A7-D01 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-D02 | `.3` | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-D03 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-D04 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-D05 | `.3` | `DECIDED — ADOPTED BY MORRIS` |
+
+## Garde-fous absolus
+
+- A5.2 documentaire : `CLOSED`
+- réserves techniques : `OPEN` / `OPEN HARD`
+- T-A6 COMPLETE : `NOT DECLARED`
+- Option A : `NOT COMPLETE`
+- T-A7 : `NOT OPEN`
+- delivery preparation / delivery / cutover : `NOT AUTHORIZED`
+- F03 / F08–F13 contenu : `NOT DECIDED`
+- F08/F09/F10 calendrier : adopté (D05) · contenu `NOT DECIDED`
+- persistence / IAM : `NOT SELECTED`
+- RGPD production : `NOT VALIDATED`
+
+Formulations interdites : « T-A7 ready to execute » · « T-A7 opened » · « delivery ready » · « cutover approved » · « reserves resolved » · « Option A complete » · « Option C waves started » · « F08/F09/F10 content decided ».
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/README.md
new file mode 100644
index 0000000..4a0ad49
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a7-next-decision-step-framing/README.md
@@ -0,0 +1,91 @@
+# T-A7 — Next Decision Step Framing (après A5.2)
+
+| Champ | Valeur |
+|-------|--------|
+| **Gate framing (historique)** | `GO CLOSE A5.2 DOCUMENTARY INTEGRATION AND FRAME NEXT T-A7 DECISION STEP — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Gate décisions consommé** | `GO RECORD MORRIS T-A7 NEXT STEP DECISIONS — T-A7-D01=.1 — T-A7-D02=.3 — T-A7-D03=.1 — T-A7-D04=.1 — T-A7-D05=.3 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau** | 2026-07-28 13:36:06 CEST (+0200) |
+| **Cycle / profil** | 15 — Capitalisation / enregistrement de décisions (+1 · 2 · 9 · 13) · Critical |
+| **Base historique** | `origin/main` @ `53bff7fac6e25c7db34ee48fbb56503ab416cad3` |
+| **Commit framing parent** | `019ce31f2efc45f0a6f53e1b1420102702a994f1` |
+| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step` |
+| **Worktree local** | `sfia-workspace-t-a7-next-decision` (hors repo path absolu) |
+| **Statut pack** | `MORRIS T-A7-D01…D05 RECORDED — IMPLEMENTATION AND WAVE OPENING NOT AUTHORIZED` |
+| **A5.2 documentaire** | `CLOSED` |
+| **Option C (séquencement)** | `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) — **aucune vague ouverte** |
+| **Réserves techniques** | `OPEN` / `OPEN HARD` (inchangées) |
+| **T-A7** | `NOT OPEN` |
+| **Delivery preparation** | `NOT AUTHORIZED` |
+| **Delivery** | `NOT AUTHORIZED` |
+| **Cutover** | `NOT AUTHORIZED` |
+| **T-A6 COMPLETE** | `NOT DECLARED` |
+| **Option A** | `NOT COMPLETE` |
+| **F03 / F08–F13 contenu** | `NOT DECIDED` |
+| **F08/F09/F10 calendrier** | timing adopté (T-A7-D05=.3) — contenu toujours `NOT DECIDED` |
+| **F04** | `DECIDED — UNCHANGED` |
+| **Persistence / IAM / RGPD prod** | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |
+| **Push / PR** | **aucun** |
+
+## Objectif
+
+1. Enregistrer strictement les décisions Morris T-A7-D01…D05.
+2. Adopter documentairement le séquencement Option C (gates/vagues) **sans** ouvrir de vague.
+3. **Ne pas** ouvrir T-A7 · **ne pas** autoriser delivery/cutover · **ne pas** fermer de réserve · **ne pas** consommer le contenu des décisions F.
+
+## Décisions Morris enregistrées
+
+| ID | Choix | Sens résumé | Statut |
+|----|-------|-------------|--------|
+| T-A7-D01 | `.1` | cadrage documentaire complémentaire borné **futur** (gate séparé) · sans B/C/D | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-D02 | `.3` | séquencement Option C (5 vagues) · **aucune vague ouverte** | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-D03 | `.1` | sujets techniques peuvent rester ouverts pendant framing documentaire | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-D04 | `.1` | HARD/B5 ne bloquent pas *par elles-mêmes* une future prep documentaire | `DECIDED — ADOPTED BY MORRIS` |
+| T-A7-D05 | `.3` | calendrier F : F08 avant delivery · F09 avant Critical/cutover · F10 avant persistence/IAM durable | `DECIDED — ADOPTED BY MORRIS` |
+
+## Périmètre
+
+- enregistrement documentaire T-A7-D01…D05 ;
+- adoption Option C comme **trajectoire** (pas comme exécution) ;
+- conservation des réserves, stops A5.2 et anti-claims.
+
+## Hors périmètre
+
+- ouverture T-A7 niveaux B/C/D · ouverture d’une vague Option C ;
+- delivery preparation / delivery / cutover ;
+- implémentation runtime / modeled / workflow / `method/**` / OPS1 ;
+- fermeture B5 / R1 / R-T-A3-1 / R-T-A3-2 / R-M01 ;
+- validation C1–C4 · consommation contenu F03/F08–F13 ;
+- déclaration T-A6 COMPLETE / Option A COMPLETE ;
+- sélection persistence / IAM.
+
+## Fichiers
+
+| Fichier | Rôle |
+|---------|------|
+| `01-a5-2-documentary-closure.md` | Preuve clôture documentaire A5.2 (inchangé) |
+| `02-t-a7-decision-landscape.md` | Paysage + effets post-décisions |
+| `03-open-reserves-and-gates.md` | Matrice réserves / gates + calendrier F |
+| `04-sequencing-options.md` | Options A/B/C · Option C adoptée |
+| `05-morris-decision-pack.md` | Bulletin T-A7-D01…D05 enregistré |
+
+## Anti-claims
+
+- `DECIDED — ADOPTED BY MORRIS` ≠ vague ouverte ≠ T-A7 `OPEN`
+- Option C adoptée ≠ exécution lancée
+- T-A7-D01 `.1` ≠ cadrage complémentaire déjà ouvert
+- T-A7-D04 `.1` ≠ delivery preparation `AUTHORIZED`
+- T-A7-D05 `.3` = calendrier F ≠ contenu F `DECIDED`
+- A5.2 `CLOSED` (documentaire) ≠ réserves `CLOSED`
+- T-A7 framing pack (PR #280) `VALIDATED` ≠ T-A7 ouvert
+- aucun delivery / cutover autorisé
+- T-A6 / Option A restent non COMPLETE
+
+## Verdict
+
+`MORRIS T-A7 NEXT-STEP DECISIONS RECORDED — D01=.1 D02=.3 D03=.1 D04=.1 D05=.3 ADOPTED — OPTION C GATE-BASED SEQUENCING ADOPTED WITHOUT OPENING ANY WAVE — TECHNICAL RESERVES REMAIN OPEN — F08 F09 AND F10 TIMING DECIDED BUT CONTENT REMAINS NOT DECIDED — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — T-A6 NOT DECLARED COMPLETE — OPTION A NOT COMPLETE — PROJECT BRANCH NOT PUSHED`
+
+## Gate candidat suivant
+
+`GO REVIEW MORRIS T-A7 NEXT-STEP DECISION RECORD — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`
+
+**Statut :** `NOT CONSUMED`
```

# ChatGPT Review Pack — FULL
## Option A Document 32 correction post-P3 and M1

### 0. En-tête

| Champ | Valeur |
|-------|--------|
| Date/heure/fuseau | 2026-07-27 16:36:34 CEST (+0200) |
| Cycle | 2 — Conception fonctionnelle (correction documentaire ciblée) ; complémentaires 9 QA + 15 Capitalisation |
| Profil | Critical |
| Typologie | DOC / CORRECTION / TRAJECTOIRE / OPTION A |
| Gate consommé | `GO CORRECT OPTION A DOCUMENT 32 POST-P3 AND M1 — SFIA STUDIO V3-NATIVE` |
| Workspace initial | `/Users/morris/Projects/sfia-workspace` |
| Branche stable | `delivery/sfia-studio-control-tower-fast-track` @ `c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf` |
| HEAD stable | `c895a96b02ebd8c9a740dee5483fa4b9e48aa4cf` |
| origin/main | `b89065fa92d823843f1eb1014c304e7d13233556` |
| Status Git initial | branche stable propre hors `?? .tmp-sfia-review/` ; aucune mutation tracked/staged ; aucune op Git active |
| Staged | vide |
| Untracked | `.tmp-sfia-review/` uniquement (autorisé) |
| Opérations Git exécutées | `fetch origin --prune` ; lecture Git ; création branche/worktree locaux ; édition locale doc 32 ; validations ; publication handoff L3 bornée |
| Opérations Git NON exécutées | commit projet ; push projet ; PR ; merge ; amend ; rebase ; cherry-pick ; modification main ; ruleset ; workflow |

### 1. Handoff initial

| Champ | Valeur |
|-------|--------|
| Branche | `sfia/review-handoff` |
| Fichier | `sfia-review-handoff/latest-chatgpt-review.md` |
| Blob attendu (brief) | `2e989e363e7752cc3df174ec898a01fb5ad8880a` |
| Blob observé au truth-check | `d0b9889e39150232c32183d3f6a42b29d5398366` |
| Commit handoff observé | `a6fea2b78bd67a8945fa08dd3fe0779440ff7bab` |
| Qualification | Blob différent du brief (republication post-merge F-A6) ; contenu post-merge validation ; `origin/main` exact → **poursuite autorisée** (pas STOP main divergé) |

### 2. CKC

| Champ | Valeur |
|-------|--------|
| Recherché | oui |
| Cycle qualifié | conception fonctionnelle / correction documentaire |
| Statut | candidate ou absent |
| Usage | experimental cognitive guidance |
| Autorité | aucune autorité d’exécution |
| Fallback | template v2.6 + sources Git canoniques |
| Limites | aucun CKC n’autorise évolution fonctionnelle, clôture F-A6 ou promotion Option A |

### 3. Méthode de résolution du document 32

Commandes (depuis workspace stable, sur `origin/main`) :

- `git ls-tree -r --name-only origin/main | grep '/32-'`
- `git ls-tree -r --name-only origin/main | grep '32-poc-vertical-slice-functional-design.md'`
- `git grep -n "Conception fonctionnelle du premier vertical slice POC" origin/main --`

Résultat :

| Critère | Valeur |
|---------|--------|
| Basename exact | `32-poc-vertical-slice-functional-design.md` |
| Path exact unique (cible gate) | `projects/sfia-studio/32-poc-vertical-slice-functional-design.md` |
| Blob initial | `6129e1d62cdddab26b9c816aa07678a42839d88d` |
| Périmètre | SFIA Studio — conception fonctionnelle vertical slice POC |
| Collision documentaire | Autre fichier `.../v3-native-option-a/32-path-aware-required-check-and-main-protection-preparation.md` existe mais **n’est pas** le document logique cible (basename différent) — **exclu** |
| Statut documentaire | `validated-for-versioning` ; formulations gouvernance CI devenues obsolètes post-P3/M1 |

### 4. Contenu complet utile avant modification

Snapshot intégral pré-edit (328 lignes) archivé : `.tmp-sfia-review/doc32-post-p3-m1/doc32-before.md`

```markdown
# SFIA Studio — Conception fonctionnelle du premier vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `32-poc-vertical-slice-functional-design.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Critical |
| **Typologie** | DOC / CONCEPTION / POC |
| **Baseline méthode** | SFIA v2.6 |
| **Branche conception** | `design/sfia-studio-poc-vertical-slice` (**locale uniquement**) |
| **Base Git** | `origin/main` @ `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **Statut** | `validated-for-versioning` — conception fonctionnelle **validée Morris** ; merge PR = GO distinct |
| **Autorité** | Morris (L0) |
| **Décisions** | `VS-CAND-01` à `VS-CAND-13` et `VS-CAND-15` **validées** ; `VS-CAND-14` **validée avec réserve** — plafond GPT obligatoire, valeur numérique à définir, aucun retry automatique |
| **Code / live** | **Aucun** dans ce cycle |

> Contrat fonctionnel du **premier vertical slice POC** Studio → GPT → gate Morris → harness → Cursor → GPT verdict → décision Morris.
> **Pas** d’architecture technique, stack, API, BDD, Figma, backlog, delivery, MVP validé ni industrialisation.

---

## 1. Contexte et acquis

### Acquis retenus

| Source | Acquis |
|--------|--------|
| `08`–`10` | Acteurs, 12 états, F1–F12, FR/BR, FD-CAND-01…08 **validés** |
| AF-Option C | Studio ≠ orchestrateur ; Git = vérité durable ; Morris = L0 |
| POC Option B | Studio → adaptateur fin → harness autonome → ports GPT/Git/Cursor |
| `#224`–`#225` | Harness-only + spike Cursor sandbox |
| `#226` / `30`–`31` | GPT live + e2e GPT→Cursor sandbox **prouvé avec réserves** |
| `#227` | Sync documentaire post-merge |

### Écart motivant ce document

Les spikes prouvent la faisabilité **hors Studio UI**. Le vertical slice conçoit le **premier parcours réellement utilisable depuis SFIA Studio**, sans rouvrir Option B ni AF-Option C.

### Architecture structurante (immuable ici)

```text
Morris → SFIA Studio (cockpit, vue dérivée)
      → adaptateur fin sans autorité
      → harness autonome (gates, policy, journal, preuves)
      → ports GPT / Git / Cursor bornés
      → restitution dérivée dans Studio
```

Toute divergence → `STOP — ARCHITECTURE DECISION REQUIRED`.

---

## 2. Objectif

Permettre à Morris, **depuis SFIA Studio**, de :

1. saisir une demande de démonstration ;
2. obtenir une qualification GPT réelle contrôlée ;
3. autoriser (ou refuser) un gate lié au contrat et au HEAD ;
4. déclencher une exécution Cursor réelle dans une sandbox contrôlée ;
5. consulter le rapport et les preuves ;
6. obtenir un verdict GPT candidat ;
7. décider de la clôture, correction, relance ou abandon.

### Valeur démontrée

Faisabilité du **BeB gouverné** bout-en-bout sous autorité Morris, sans faire de Studio une seconde source de vérité.

---

## 3. Périmètre

### Dans le périmètre (POC vertical slice)

| Élément | Portée |
|---------|--------|
| Scénario démo | Créer un Markdown de démonstration dans une sandbox autorisée |
| Qualification GPT réelle | Proposition structurée visible avant gate |
| Gate Morris | GO / NO-GO / correction / abandon |
| Harness | Revalidation déterministe GO + contrat + allowlist |
| Cursor réel | Sandbox locale uniquement, après GO |
| Analyse GPT | Verdict candidat post-exécution |
| Studio | Saisie, affichage, décisions ; **vue dérivée** |
| Mode dégradé | Harness autonome sans Studio toujours possible |

### Hors périmètre

| Élément | Statut |
|---------|--------|
| UI/Figma détaillée | Hors cycle |
| Choix stack / API / BDD | Interdits |
| Écriture Git distante (commit/push/PR/merge) | Interdite dans le slice |
| L5 global | Interdit |
| MVP produit validé | Non |
| Industrialisation / CI SFIA Studio | Non |
| Multi-cycle / multi-projet | Non |
| Modification `app/**` / harness (ce cycle) | Conception seule |

### Niveaux (distinction obligatoire)

| Niveau | Portée |
|--------|--------|
| **POC vertical slice** | Faisabilité du parcours complet gouverné |
| **MVP candidat** | Première valeur métier future (non validé ici) |
| **Produit cible** | Couverture durable multi-cycle |
| **Industrialisation** | Exploitation sécurisée maintenable |

Le vertical slice **n’est pas** un MVP validé.

---

## 4. Acteurs et responsabilités

| Acteur | Responsabilité | Interdit |
|--------|----------------|----------|
| **Morris (L0)** | Saisie, revue, GO/NO-GO/correction/abandon, clôture | Déléguer un GO |
| **SFIA Studio** | Présenter, collecter, afficher états dérivés | Créer une autorité ; inventer un GO |
| **Adaptateur fin** | Transmettre sans élargir | Arbitrer ; assouplir |
| **Harness** | Appliquer policy, revalider gate/contrat, journaliser, preuves | Décider un GO |
| **GPT** | Qualifier / proposer / analyser | Décider ; clôturer ; élargir périmètre |
| **Cursor** | Exécuter dans le contrat | Arbitrer ; sortir sandbox |
| **Git** | Vérité durable / Truth Check | — |

---

## 5. Scénario de référence

**Intention utilisateur (candidate VS-CAND-01) :**

> Créer un document Markdown de démonstration dans un dossier sandbox autorisé, comprenant un titre, une synthèse de la demande et une checklist de validation.

Le document n’est qu’un **support de preuve**, pas une fonctionnalité produit finale.

### Préconditions

- Projet SFIA Studio connu ;
- Git accessible en lecture ;
- sandbox locale définie et isolée ;
- secrets non affichés ;
- flags live conditionnels (hors conception) ;
- Morris identifié comme autorité.

### Déclencheur

Morris ouvre « Nouvelle demande » dans SFIA Studio et saisit l’intention.

---

## 6. Parcours utilisateur (vue d’ensemble)

Dix étapes fonctionnelles (détail dans `33`) :

1. Nouvelle demande
2. Qualification en cours
3. Qualification proposée
4. Gate Morris
5. Exécution
6. Rapport disponible
7. Analyse GPT
8. Verdict proposé
9. Décision Morris
10. Clôture

---

## 7. Sous-ensemble d’états (réutilisation `08`)

États retenus pour le slice :

`intention_capturée` · `qualification_en_cours` · `qualification_prête` · `attente_gate_morris` · `autorisé` · `en_exécution` · `stoppé` · `rapport_disponible` · `revue_en_cours` · `décision_requise` · `clôturé` · `abandonné`

Le timeout **ne vaut jamais** GO.

Mapping harness (informatif, non conflateur) : `AUTHORIZED` → `EXECUTING` → `PROOF_READY` → `CLOSED` — états techniques parallèles, bridgés par Git/preuves.

---

## 8. Exigences fonctionnelles `VS-FR-*`

| ID | Exigence |
|----|----------|
| VS-FR-01 | Studio permet de saisir une demande de slice et d’afficher un `requestId` |
| VS-FR-02 | Une qualification GPT incomplète ou invalide est rejetée fail-closed |
| VS-FR-03 | La qualification est entièrement lisible avant tout GO |
| VS-FR-04 | Morris peut GO, NO-GO, demander correction ou abandonner |
| VS-FR-05 | Un GO est lié à requestId, contractId, contractHash, branche, HEAD, périmètre, allowlist, horodatage, autorité |
| VS-FR-06 | Tout changement de contrat, branche, HEAD ou périmètre invalide le GO |
| VS-FR-07 | Le harness revalide gate + contrat avant Cursor |
| VS-FR-08 | Cursor n’écrit que dans la sandbox allowlistée |
| VS-FR-09 | Aucune écriture Git distante dans le slice |
| VS-FR-10 | STOP Morris est prioritaire et journalisé |
| VS-FR-11 | Le rapport/preuves sont prérequis à l’analyse GPT |
| VS-FR-12 | Le verdict GPT est candidat ; Morris clôture |
| VS-FR-13 | Studio affiche des états dérivés ; Git/preuves priment |
| VS-FR-14 | Le harness reste utilisable sans Studio |
| VS-FR-15 | Aucun secret n’est affiché dans Studio ni dans les preuves |
| VS-FR-16 | Les appels GPT consommés sont visibles (FinOps) sans inventer un coût monétaire |
| VS-FR-17 | Un review pack incomplet bloque la clôture positive |

---

## 9. Objets fonctionnels (sans schéma BDD)

| Objet | Finalité | Propriétaire |
|-------|----------|--------------|
| StudioRequest | Demande saisie | Morris / Studio |
| QualificationCandidate | Proposition GPT pré-gate | GPT (propose) / Morris (accepte ou corrige) |
| ExecutionContract | Contrat borné d’exécution | Harness + Morris (via GO) |
| MorrisGateDecision | GO/NO-GO/correction/abandon | Morris |
| ExecutionStatus | État d’exécution dérivé | Harness → Studio |
| ExecutionEvent | Événement journalisé | Harness |
| CursorExecutionReport | Rapport d’exécution | Cursor/Harness |
| ReviewPackReference | Référence au pack de preuves | Harness |
| GptVerdictCandidate | Verdict candidat post-run | GPT |
| MorrisFinalDecision | Clôture / correction / relance / abandon | Morris |
| CycleSummary | Synthèse de cycle | Studio (dérivée) |

Règles communes : champs obligatoires, source, sensibilité (pas de secret), cohérence requestId/correlationId/contractId, preuve Git ou runtime.

Détail des champs : voir `33` § données et `34` impacts.

---

## 10. Sécurité / RGPD / FinOps / performance / observabilité

### Sécurité

- Fail closed ; moindre privilège ; allowlist fichiers/actions ; sandbox ; aucune action distante ; STOP prioritaire ; gate revalidé ; secrets jamais affichés.

### RGPD (minimal POC)

- Demande de test **sans** donnée personnelle réelle ;
- journaux sans secret ;
- minimisation ;
- masquage chemins/identités si nécessaire ;
- durée de conservation = **VS-CAND** à arbitrer (non fixée).

### FinOps

- Appels GPT visibles ;
- plafond d’appels candidat (à valider) ;
- **aucun retry automatique** ;
- coût monétaire **non inventé** ;
- arrêt possible avant nouvelle consommation.

### Performance (confort POC, pas SLA industriel)

| Phase | Observation |
|-------|-------------|
| Qualification GPT | Mesurée séparément |
| Attente Morris | Humaine, non SLA |
| Exécution Cursor | Mesurée séparément |
| Analyse GPT | Mesurée séparément |

Seuils de confort = candidats (ex. timeout Cursor POC déjà observé ~120 s côté spike — **non** imposé comme SLA).

### Observabilité

requestId · correlationId · contractId · eventId · timestamps + fuseau · étapes reconstructibles · statut source · erreur explicite · **aucun faux succès**.

---

## 11. Critères d’acceptation (BeB)

### Critère central

Depuis SFIA Studio, Morris doit pouvoir saisir une demande, contrôler la qualification GPT, autoriser l’exécution, voir Cursor produire le résultat borné, puis obtenir un verdict GPT exploitable **sans** manipulation manuelle du harness hors actions de gate.

### Succès obligatoire

- Parcours nominal 1→10 complété ;
- GO lié hash+HEAD revalidé ;
- sandbox respectée ;
- aucune écriture distante ;
- aucun secret exposé ;
- verdict GPT accepté par validateur fonctionnel ;
- clôture Morris enregistrée ;
- Studio = vue dérivée ;
- harness autonome toujours possible.

### Succès avec réserve

- Non-déterminisme GPT documenté ;
- journalisation commandes Cursor non exhaustive (contrôle post-facto) ;
- absence de CI SFIA Studio.

### Échec de faisabilité

- Impossible de lier GO au contrat/HEAD ;
- Studio contourne harness ;
- Cursor hors sandbox sans détection ;
- GPT clôture sans Morris.

### Abandon

- NO-GO / abandon Morris à tout gate ;
- STOP avec reprise ou abandon explicite.

Critères détaillés `VS-AC-*` : voir `33`.

---

## 12. Réserves

1. Pas de CI GitHub Actions pour `projects/sfia-studio/**`
2. Spike expérimental / scénario unique
3. Commandes internes Cursor non journalisées une à une
4. Réseau Cursor Agent non mesuré finement
5. S-GPT-09 encore en `json_object` (verdict en `json_schema` strict)
6. Non-déterminisme GPT
7. Studio UI non livré (conception seule)
8. Adapter Studio↔harness non spécifié techniquement

---

## 13. Décisions

Voir pack `34` — `VS-CAND-01` à `VS-CAND-13` et `VS-CAND-15` **validées** ; `VS-CAND-14` **validée avec réserve** — plafond GPT obligatoire, valeur numérique à définir, aucun retry automatique.

---

## 14. Documents liés

- [`33-poc-vertical-slice-flows-and-rules.md`](./33-poc-vertical-slice-flows-and-rules.md)
- [`34-poc-vertical-slice-decision-pack.md`](./34-poc-vertical-slice-decision-pack.md)
- Socle : [`08`](./08-functional-design.md) · [`09`](./09-functional-flows-and-rules.md) · [`10`](./10-functional-decision-pack.md)
- POC : [`23`](./23-poc-orchestration-technical-architecture.md)–[`28`](./28-poc-orchestration-delivery-gate-pack.md) · [`29`](./29-poc-cursor-real-spike-report.md)–[`31`](./31-poc-gpt-cursor-e2e-spike-report.md)

```

### 5. Occurrences P3 / M1 / CI / F-A6 (avant)

Avant correction, le POC doc 32 **ne mentionnait pas** P3, M1 ni F-A6. Occurrences CI/industrialisation obsolètes ou ambiguës :

| Ligne (approx) | Formulation | Statut |
|----------------|-------------|--------|
| Base Git | `eb180638…` | obsolète (métadonnée) |
| Hors périmètre | `Industrialisation / CI SFIA Studio \| Non` | ambiguë (POC hors périmètre vs état plateforme) |
| Succès avec réserve | `absence de CI SFIA Studio` | **obsolète** |
| Réserves §12.1 | `Pas de CI GitHub Actions pour projects/sfia-studio/**` | **obsolète** |
| Niveaux POC≠industrialisation | distinction conceptuelle | exacte / historique correctement qualifiée — **conservée** |

Occurrences « gate » / « industrialisation » non liées à P3/M1 (gates Morris du slice, niveau produit) : **hors périmètre** de cette correction — **non modifiées**.

### 6. Matrice des formulations

| Occurrence | Formulation actuelle (avant) | Statut | Source canonique | Correction nécessaire |
|------------|------------------------------|--------|------------------|-----------------------|
| Métadonnée Base Git | `origin/main` @ `eb180638…` | obsolète | `origin/main` = `b89065fa…` (PR #274) | Mettre à jour SHA + contexte post P3/F-A6 |
| Nouvelle métadonnée alignement | (absente) | manquante / ambiguë | Doc 24 F-A6 MITIGATED NOT CLOSED ; P3 #270 ; M1 | Ajouter ligne gouvernance post-P3/M1 sans CLOSED |
| Acquis retenus | (P3/M1 absents) | obsolète par omission | PR #270, #274, preuves #272/#273 | Ajouter ligne acquis post-conception hors livrable POC |
| Hors périmètre CI | `Industrialisation / CI SFIA Studio \| Non` | ambiguë | P3 intégré ; CI hors contrat POC | Clarifier : Non comme livrable POC ; CI plateforme existe |
| Succès avec réserve | `absence de CI SFIA Studio` | obsolète | Workflow blob `801a8759…` sur main | Remplacer par CI en place hors AC POC + F-A6 MITIGATED NOT CLOSED |
| Réserves §12.1 | `Pas de CI GitHub Actions…` | obsolète | Doc 24 + M1 COMPLETE / F-A6 NOT CLOSED | Remplacer par état P3/M1 + réserves REX/rollback/bypass |
| Distinction POC≠MVP≠industrialisation (§ niveaux) | inchangée | exacte | conception validée | Aucune |
| VS-FR-* / VS-AC-* / VS-CAND-* | inchangées | exacte | décisions Morris | Aucune |
| F-A6 CLOSED / Option A COMPLETE / T-A7 ouverte | absentes (bien) | exacte (anti-claims) | Doc 24 | Préserver négations explicites dans corrections |

### 7. Sources Git consultées

1. `projects/sfia-studio/32-poc-vertical-slice-functional-design.md` @ `6129e1d62cdddab26b9c816aa07678a42839d88d` (avant)
2. `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/24-ci-and-merge-governance-preparation.md` — F-A6 `MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED`
3. `.github/workflows/sfia-studio-ci.yml` blob `801a8759bb7440666799b95edf13f9ee6d9332f8`
4. Commits `4e2d5cf2f7e6865c4453ba0e8084e5ea85af5513` (P3 #270) et `b89065fa92d823843f1eb1014c304e7d13233556` (F-A6 #274)
5. Handoff initial `sfia/review-handoff` blob observé `d0b9889e…`
6. Preuves comportementales référencées : PR #272 PASS hors Studio ; PR #273 BLOCKED puis recovery ; #274 required gate + post-merge run `30266728916`

Ruleset M1 (référence, non modifié) : ID `19798462` — `SFIA Studio Main Required Gate — M1` — active — required check `SFIA Studio Required Gate` — integration `15368`.

### 8. Branche / worktree de correction

| Champ | Valeur |
|-------|--------|
| Branche créée | `docs/sfia-studio-doc32-post-p3-m1-correction` |
| Worktree | `/Users/morris/Projects/sfia-workspace-doc32-post-p3-m1` |
| HEAD branche | `b89065fa92d823843f1eb1014c304e7d13233556` |
| Upstream | **aucun** |
| Collision branche/PR | aucune |
| Commit projet | **aucun** |
| Push projet | **aucun** |
| Hash objet fichier modifié (worktree, non commité) | `43f5157a2bb198fb6fb04969677277d80645a434` |

### 9. Fichier modifié

| Champ | Valeur |
|-------|--------|
| Path | `projects/sfia-studio/32-poc-vertical-slice-functional-design.md` |
| Statut | `M` unique |
| Créés | 0 |
| Supprimés | 0 |
| Doc 24 | inchangé |
| Workflow / ruleset / code | inchangés |

### 10. Sections modifiées — AVANT

#### Métadonnées (extrait)

```markdown
# SFIA Studio — Conception fonctionnelle du premier vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `32-poc-vertical-slice-functional-design.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Critical |
| **Typologie** | DOC / CONCEPTION / POC |
| **Baseline méthode** | SFIA v2.6 |
| **Branche conception** | `design/sfia-studio-poc-vertical-slice` (**locale uniquement**) |
| **Base Git** | `origin/main` @ `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **Statut** | `validated-for-versioning` — conception fonctionnelle **validée Morris** ; merge PR = GO distinct |
| **Autorité** | Morris (L0) |
| **Décisions** | `VS-CAND-01` à `VS-CAND-13` et `VS-CAND-15` **validées** ; `VS-CAND-14` **validée avec réserve** — plafond GPT obligatoire, valeur numérique à définir, aucun retry automatique |
| **Code / live** | **Aucun** dans ce cycle |

> Contrat fonctionnel du **premier vertical slice POC** Studio → GPT → gate Morris → harness → Cursor → GPT verdict → décision Morris.
> **Pas** d’architecture technique, stack, API, BDD, Figma, backlog, delivery, MVP validé ni industrialisation.


```

#### Acquis retenus (extrait)

```markdown
### Acquis retenus

| Source | Acquis |
|--------|--------|
| `08`–`10` | Acteurs, 12 états, F1–F12, FR/BR, FD-CAND-01…08 **validés** |
| AF-Option C | Studio ≠ orchestrateur ; Git = vérité durable ; Morris = L0 |
| POC Option B | Studio → adaptateur fin → harness autonome → ports GPT/Git/Cursor |
| `#224`–`#225` | Harness-only + spike Cursor sandbox |
| `#226` / `30`–`31` | GPT live + e2e GPT→Cursor sandbox **prouvé avec réserves** |
| `#227` | Sync documentaire post-merge |

```

#### Hors périmètre (extrait)

```markdown
### Hors périmètre

| Élément | Statut |
|---------|--------|
| UI/Figma détaillée | Hors cycle |
| Choix stack / API / BDD | Interdits |
| Écriture Git distante (commit/push/PR/merge) | Interdite dans le slice |
| L5 global | Interdit |
| MVP produit validé | Non |
| Industrialisation / CI SFIA Studio | Non |
| Multi-cycle / multi-projet | Non |
| Modification `app/**` / harness (ce cycle) | Conception seule |

```

#### Succès avec réserve (extrait)

```markdown
### Succès avec réserve

- Non-déterminisme GPT documenté ;
- journalisation commandes Cursor non exhaustive (contrôle post-facto) ;
- absence de CI SFIA Studio.

```

#### §12 Réserves (extrait)

```markdown
## 12. Réserves

1. Pas de CI GitHub Actions pour `projects/sfia-studio/**`
2. Spike expérimental / scénario unique
3. Commandes internes Cursor non journalisées une à une
4. Réseau Cursor Agent non mesuré finement
5. S-GPT-09 encore en `json_object` (verdict en `json_schema` strict)
6. Non-déterminisme GPT
7. Studio UI non livré (conception seule)
8. Adapter Studio↔harness non spécifié techniquement

---

```

### 11. Sections modifiées — APRÈS

#### Métadonnées (extrait)

```markdown
# SFIA Studio — Conception fonctionnelle du premier vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `32-poc-vertical-slice-functional-design.md` |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Critical |
| **Typologie** | DOC / CONCEPTION / POC |
| **Baseline méthode** | SFIA v2.6 |
| **Branche conception** | `design/sfia-studio-poc-vertical-slice` (**locale uniquement**) |
| **Base Git** | `origin/main` @ `b89065fa92d823843f1eb1014c304e7d13233556` (post P3 #270 + F-A6 #274) |
| **Statut** | `validated-for-versioning` — conception fonctionnelle **validée Morris** ; merge PR = GO distinct |
| **Alignement gouvernance (post-P3/M1)** | P3 intégré (PR #270) ; M1 actif et prouvé ; F-A6-PM-G01 **MITIGATED** explicitement **NOT CLOSED** — ni Option A COMPLETE ni ouverture T-A7 |
| **Autorité** | Morris (L0) |
| **Décisions** | `VS-CAND-01` à `VS-CAND-13` et `VS-CAND-15` **validées** ; `VS-CAND-14` **validée avec réserve** — plafond GPT obligatoire, valeur numérique à définir, aucun retry automatique |
| **Code / live** | **Aucun** dans ce cycle |

> Contrat fonctionnel du **premier vertical slice POC** Studio → GPT → gate Morris → harness → Cursor → GPT verdict → décision Morris.
> **Pas** d’architecture technique, stack, API, BDD, Figma, backlog, delivery, MVP validé ni industrialisation.

---

```

#### Acquis retenus (extrait)

```markdown
### Acquis retenus

| Source | Acquis |
|--------|--------|
| `08`–`10` | Acteurs, 12 états, F1–F12, FR/BR, FD-CAND-01…08 **validés** |
| AF-Option C | Studio ≠ orchestrateur ; Git = vérité durable ; Morris = L0 |
| POC Option B | Studio → adaptateur fin → harness autonome → ports GPT/Git/Cursor |
| `#224`–`#225` | Harness-only + spike Cursor sandbox |
| `#226` / `30`–`31` | GPT live + e2e GPT→Cursor sandbox **prouvé avec réserves** |
| `#227` | Sync documentaire post-merge |
| P3 / M1 / F-A6 (post-conception) | Workflow `SFIA Studio CI` + ruleset M1 actifs sur `main` (PR #270 ; preuves #272/#273 ; F-A6 formalisé #274) — **hors livrable de ce POC** ; F-A6 **MITIGATED NOT CLOSED** |

```

#### Hors périmètre (extrait)

```markdown
### Hors périmètre

| Élément | Statut |
|---------|--------|
| UI/Figma détaillée | Hors cycle |
| Choix stack / API / BDD | Interdits |
| Écriture Git distante (commit/push/PR/merge) | Interdite dans le slice |
| L5 global | Interdit |
| MVP produit validé | Non |
| Industrialisation / CI SFIA Studio (livrable de ce POC) | Non — hors slice ; la CI plateforme P3/M1 existe désormais sur `main` sans faire partie de ce contrat POC |
| Multi-cycle / multi-projet | Non |
| Modification `app/**` / harness (ce cycle) | Conception seule |

```

#### Succès avec réserve (extrait)

```markdown
### Succès avec réserve

- Non-déterminisme GPT documenté ;
- journalisation commandes Cursor non exhaustive (contrôle post-facto) ;
- CI plateforme SFIA Studio désormais en place (P3/M1) mais hors critères d’acceptation de ce POC ; F-A6-PM-G01 reste **MITIGATED NOT CLOSED**.

```

#### §12 Réserves (extrait)

```markdown
## 12. Réserves

1. P3 est intégré sur `main` via PR #270 et M1 est actif/prouvé ; F-A6-PM-G01 est **MITIGATED** mais reste explicitement **NOT CLOSED** ; REX M1, rollback et bypass restent ouverts — ceci ne vaut ni Option A COMPLETE ni ouverture de T-A7
2. Spike expérimental / scénario unique
3. Commandes internes Cursor non journalisées une à une
4. Réseau Cursor Agent non mesuré finement
5. S-GPT-09 encore en `json_object` (verdict en `json_schema` strict)
6. Non-déterminisme GPT
7. Studio UI non livré (conception seule)
8. Adapter Studio↔harness non spécifié techniquement

---

```

### 12. Diff complet

```diff
diff --git a/projects/sfia-studio/32-poc-vertical-slice-functional-design.md b/projects/sfia-studio/32-poc-vertical-slice-functional-design.md
index 6129e1d..43f5157 100644
--- a/projects/sfia-studio/32-poc-vertical-slice-functional-design.md
+++ b/projects/sfia-studio/32-poc-vertical-slice-functional-design.md
@@ -9,8 +9,9 @@
 | **Typologie** | DOC / CONCEPTION / POC |
 | **Baseline méthode** | SFIA v2.6 |
 | **Branche conception** | `design/sfia-studio-poc-vertical-slice` (**locale uniquement**) |
-| **Base Git** | `origin/main` @ `eb180638ad334a29a86b9fb757f401814003a0d8` |
+| **Base Git** | `origin/main` @ `b89065fa92d823843f1eb1014c304e7d13233556` (post P3 #270 + F-A6 #274) |
 | **Statut** | `validated-for-versioning` — conception fonctionnelle **validée Morris** ; merge PR = GO distinct |
+| **Alignement gouvernance (post-P3/M1)** | P3 intégré (PR #270) ; M1 actif et prouvé ; F-A6-PM-G01 **MITIGATED** explicitement **NOT CLOSED** — ni Option A COMPLETE ni ouverture T-A7 |
 | **Autorité** | Morris (L0) |
 | **Décisions** | `VS-CAND-01` à `VS-CAND-13` et `VS-CAND-15` **validées** ; `VS-CAND-14` **validée avec réserve** — plafond GPT obligatoire, valeur numérique à définir, aucun retry automatique |
 | **Code / live** | **Aucun** dans ce cycle |
@@ -32,6 +33,7 @@
 | `#224`–`#225` | Harness-only + spike Cursor sandbox |
 | `#226` / `30`–`31` | GPT live + e2e GPT→Cursor sandbox **prouvé avec réserves** |
 | `#227` | Sync documentaire post-merge |
+| P3 / M1 / F-A6 (post-conception) | Workflow `SFIA Studio CI` + ruleset M1 actifs sur `main` (PR #270 ; preuves #272/#273 ; F-A6 formalisé #274) — **hors livrable de ce POC** ; F-A6 **MITIGATED NOT CLOSED** |

 ### Écart motivant ce document

@@ -93,7 +95,7 @@ Faisabilité du **BeB gouverné** bout-en-bout sous autorité Morris, sans faire
 | Écriture Git distante (commit/push/PR/merge) | Interdite dans le slice |
 | L5 global | Interdit |
 | MVP produit validé | Non |
-| Industrialisation / CI SFIA Studio | Non |
+| Industrialisation / CI SFIA Studio (livrable de ce POC) | Non — hors slice ; la CI plateforme P3/M1 existe désormais sur `main` sans faire partie de ce contrat POC |
 | Multi-cycle / multi-projet | Non |
 | Modification `app/**` / harness (ce cycle) | Conception seule |

@@ -283,7 +285,7 @@ Depuis SFIA Studio, Morris doit pouvoir saisir une demande, contrôler la qualif

 - Non-déterminisme GPT documenté ;
 - journalisation commandes Cursor non exhaustive (contrôle post-facto) ;
-- absence de CI SFIA Studio.
+- CI plateforme SFIA Studio désormais en place (P3/M1) mais hors critères d’acceptation de ce POC ; F-A6-PM-G01 reste **MITIGATED NOT CLOSED**.

 ### Échec de faisabilité

@@ -303,7 +305,7 @@ Critères détaillés `VS-AC-*` : voir `33`.

 ## 12. Réserves

-1. Pas de CI GitHub Actions pour `projects/sfia-studio/**`
+1. P3 est intégré sur `main` via PR #270 et M1 est actif/prouvé ; F-A6-PM-G01 est **MITIGATED** mais reste explicitement **NOT CLOSED** ; REX M1, rollback et bypass restent ouverts — ceci ne vaut ni Option A COMPLETE ni ouverture de T-A7
 2. Spike expérimental / scénario unique
 3. Commandes internes Cursor non journalisées une à une
 4. Réseau Cursor Agent non mesuré finement

```

### 13. Stat / name-status

```
 .../sfia-studio/32-poc-vertical-slice-functional-design.md | 10 ++++++----
 1 file changed, 6 insertions(+), 4 deletions(-)
M	projects/sfia-studio/32-poc-vertical-slice-functional-design.md
```

### 14. Validations

| Contrôle | Résultat |
|----------|----------|
| `git diff --check` | OK (exit 0) |
| Un seul fichier `M` | OK |
| Doc 24 inchangé | OK |
| Workflow inchangé | OK |
| Espaces finales | absents |
| Formulations interdites (CLOSED / COMPLETE / T-A7 ouverte / rollback validé…) | absentes comme claims positifs ; négations anti-claim présentes |
| Claims stale `Pas de CI` / `absence de CI` | **éliminés** |
| Secrets | aucun |
| Conflit doctrinal | aucun détecté |

### 15. Revue sémantique

1. OUI — P3 intégré via PR #270 mentionné (métadonnées, acquis, hors périmètre, réserves)
2. OUI — M1 actif et prouvé mentionné
3. OUI — F-A6 MITIGATED NOT CLOSED explicite
4. OUI — Option A COMPLETE explicitement niée
5. OUI — T-A7 explicitement non ouverte
6. OUI — REX, rollback, bypass conservés ouverts dans réserves
7. NON — VS-FR/VS-AC/scénario inchangés
8. NON — VS-CAND inchangées ; aucune nouvelle décision
9. NON — clarification post-P3/M1 sans nouvelle dette fonctionnelle
10. NON — les trois zones obsolètes (hors périmètre / succès-réserve / réserves) + métadonnées/acquis exigeaient une mise à jour minimale multi-points


Attendus : 1–3 OUI ; 4–6 OUI ; 7–9 NON ; 10 NON — **conforme**.

### 16. États canoniques post-correction

| Sujet | État |
|-------|------|
| P3 | **intégré** sur `main` via PR #270 (`4e2d5cf2…`) |
| Workflow SFIA Studio CI | **intégré** ; blob `801a8759…` |
| M1 | **COMPLETE** techniquement et comportementalement ; ruleset actif ; required check `SFIA Studio Required Gate` |
| F-A6-PM-G01 | **MITIGATED — M1 GOVERNANCE CONTROL APPLIED AND BEHAVIORALLY PROVEN — NOT CLOSED** |
| F-A6 CLOSED | **NON** |
| Option A COMPLETE | **NON** |
| T-A7 | **non ouverte** |
| REX M1 | **à produire** |
| Rollback / bypass | **non testés** |
| VS-FR / VS-AC / VS-CAND | **inchangés** |
| Décisions Morris | **aucune nouvelle** ; aucune décision validée modifiée |

### 17. Observation / Fait / Réserve / Décision

- **Observation** : formulations doc 32 sur « absence de CI » obsolètes après P3/M1.
- **Fait intégré** : P3 et M1 en place sur `main` ; preuves comportementales produites.
- **Réserve** : F-A6 NOT CLOSED ; REX/rollback/bypass ouverts.
- **Décision validée** : aucune nouvelle ; aucune promotion trajectoire.

### 18. Actions non exécutées

- commit projet / push projet / PR / merge
- amend / rebase / cherry-pick
- modification document 24
- modification workflow / ruleset
- F-A6 CLOSED / Option A COMPLETE / ouverture T-A7
- création REX M1
- test rollback / bypass
- suppression branches/worktrees F-A6 existants
- action Notion/CMP

### 19. Limites / incertitudes

- Handoff initial blob ≠ brief (`2e989e…` vs `d0b9889e…`) — qualificationée comme republication post-merge, non bloquante.
- Ruleset GitHub non re-fetché live dans ce cycle (référence doc 24 + contexte M1 antérieur).
- CKC : guidance expérimentale seulement.

### 20. Anti-claims

- document corrigé ≠ commit autorisé
- document corrigé ≠ push autorisé
- document corrigé ≠ PR autorisée
- P3 intégré ≠ Option A COMPLETE
- M1 COMPLETE ≠ F-A6 CLOSED
- F-A6 MITIGATED ≠ F-A6 CLOSED
- CI success ≠ rollback testé
- CI success ≠ bypass testé
- correction document 32 ≠ REX M1
- correction documentaire ≠ ouverture T-A7

### 21. Gates candidats (NOT CONSUMED)

- `GO COMMIT OPTION A DOCUMENT 32 POST-P3 AND M1 CORRECTION — SFIA STUDIO V3-NATIVE`
- `GO CAPITALIZE OPTION A M1 IMPLEMENTATION AND PROOFS — SFIA STUDIO V3-NATIVE`
- gate séparé de nettoyage des branches/worktrees F-A6

### 22. Verdict

`SFIA STUDIO V3-NATIVE OPTION A DOCUMENT 32 CORRECTED LOCALLY POST-P3 AND M1 — STALE GOVERNANCE CLAIMS REMOVED — F-A6 MITIGATED NOT CLOSED — NO COMMIT — NO PUSH`

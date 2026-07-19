# Review pack — SFIA Studio POC vertical slice PR readiness

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 22:18:38 CEST |
| **Cycle** | PR readiness |
| **Profil** | Standard |
| **Typologie** | DOC |
| **GO Morris consommé** | Commit docs 32–37 · push branche projet · création draft PR vers main |
| **Branche** | `design/sfia-studio-poc-vertical-slice` |
| **HEAD initial** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **origin/main** | `eb180638ad334a29a86b9fb757f401814003a0d8` (inchangé au commit) |
| **Commit** | `19118abd96487467d020678726b136080878090d` |
| **Message** | `docs(sfia-studio): define validated POC vertical slice` |
| **Draft PR** | [#228](https://github.com/mcleland147/sfia-workspace/pull/228) |
| **Verdict** | `SFIA STUDIO VERTICAL SLICE PR CREATED — MORRIS MERGE DECISION REQUIRED` |
| **Statut** | READY FOR PR REVIEW |

---

## 1. Truth Check

OK avant commit : branche `design/sfia-studio-poc-vertical-slice` · HEAD=origin/main=`eb180638…` · staged vide · six docs untracked · `.tmp` hors commit · aucune PR existante · pas d’app/harness.

Après push : HEAD=`19118abd96487467d020678726b136080878090d` · remote tip aligné · working tree = `?? .tmp-sfia-review/` uniquement.

---

## 2. Sources lues

Template cycle · docs 32–37 · handoff review antérieur (`8bc69ef…`) · Figma référence lecture seule (page `51:2`, gate `51:415`, clôture `51:1204`).

---

## 3. Validations documentaires

| Contrôle | Résultat |
|----------|----------|
| Six docs non vides | OK |
| Liens relatifs | OK (lien `23` corrigé vers `23-poc-orchestration-technical-architecture.md`) |
| `git diff --check` | OK |
| Dix états ≠ dix routes | Refléchi 35–37 |
| Quatre vues P0 | Refléchi |
| Gate 4 actions | Refléchi |
| Clôture slice-only | Refléchi |
| Plafond GPT À définir + no retry | Refléchi |
| Claims MVP/prod | Absents (listes d’interdits seulement) |
| Forme | Whitespace strip · statuts → `validated-for-versioning` |

Aucune modification de fond des règles/architecture/Figma.

---

## 4. Fichiers staged / commités (exactement 6)

```
projects/sfia-studio/32-poc-vertical-slice-functional-design.md
projects/sfia-studio/33-poc-vertical-slice-flows-and-rules.md
projects/sfia-studio/34-poc-vertical-slice-decision-pack.md
projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md
projects/sfia-studio/36-poc-vertical-slice-ux-ui-flows-and-frames.md
projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md
```

### Diff stat commit

```
 .../32-poc-vertical-slice-functional-design.md     | 328 +++++++++++++++++++
 .../33-poc-vertical-slice-flows-and-rules.md       | 353 +++++++++++++++++++++
 .../34-poc-vertical-slice-decision-pack.md         | 202 ++++++++++++
 .../35-poc-vertical-slice-ux-ui-contract.md        | 220 +++++++++++++
 ...36-poc-vertical-slice-ux-ui-flows-and-frames.md | 170 ++++++++++
 .../37-poc-vertical-slice-ux-ui-decision-pack.md   | 103 ++++++
 6 files changed, 1376 insertions(+)
```

### Push distant

```
19118abd96487467d020678726b136080878090d	refs/heads/design/sfia-studio-poc-vertical-slice
```

SHA local = distant = `19118abd96487467d020678726b136080878090d`

---

## 5. Draft PR

| Champ | Valeur |
|-------|--------|
| Numéro | **228** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/228 |
| État | OPEN · **draft** (`isDraft=true`) |
| Base | `main` |
| Head | `design/sfia-studio-poc-vertical-slice` |
| Fichiers | **6** (exactement les docs 32–37) |

Pas de ready-for-review · pas de merge.

---

## 6. Confirmation absences

- aucun `app/**`
- aucun `harness/**`
- aucun `.tmp-sfia-review` dans le commit
- aucun code
- aucune action Figma dans ce cycle
- aucun force push

---

## 7. git status final

```
?? .tmp-sfia-review/
```

---

## 8. Réserves

- valeur numérique plafond GPT non fixée ;
- accessibilité = contrat cible ;
- polish delivery possible ;
- backlog / delivery / live hors périmètre ;
- merge non autorisé.

---

## 9. Décisions Morris restantes

1. Revue ChatGPT de la draft PR #228  
2. **GO merge** (distinct)  
3. Ne pas ready-for-review / supprimer branche / delivery / live sans GO

---

## 10. Verdict

`SFIA STUDIO VERTICAL SLICE PR CREATED — MORRIS MERGE DECISION REQUIRED`

Instruction ChatGPT : lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

---

# ANNEXE A — Document 32 (intégral)

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
| **Décisions** | Candidates `VS-CAND-*` uniquement — **aucune validée** |
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

## 13. Décisions candidates

Voir pack `34` — `VS-CAND-01` … `VS-CAND-12` (**non validées**).

---

## 14. Documents liés

- [`33-poc-vertical-slice-flows-and-rules.md`](./33-poc-vertical-slice-flows-and-rules.md)
- [`34-poc-vertical-slice-decision-pack.md`](./34-poc-vertical-slice-decision-pack.md)
- Socle : [`08`](./08-functional-design.md) · [`09`](./09-functional-flows-and-rules.md) · [`10`](./10-functional-decision-pack.md)
- POC : [`23`](./23-poc-orchestration-technical-architecture.md)–[`28`](./28-poc-orchestration-delivery-gate-pack.md) · [`29`](./29-poc-cursor-real-spike-report.md)–[`31`](./31-poc-gpt-cursor-e2e-spike-report.md)


---

# ANNEXE B — Document 33 (intégral)

# SFIA Studio — Parcours, états et règles du vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `33-poc-vertical-slice-flows-and-rules.md` |
| **Complète** | [`32-poc-vertical-slice-functional-design.md`](./32-poc-vertical-slice-functional-design.md) |
| **Statut** | `validated-for-versioning` — parcours/règles **validés Morris** ; merge PR = GO distinct |
| **Baseline** | SFIA v2.6 · socle FD `08`–`10` · POC Option B · AF-Option C |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |

> Parcours détaillés, transitions, règles `VS-BR-*`, scénarios négatifs et preuves. **Pas** d’API technique.

---

## 1. Parcours nominal — dix étapes

### Étape 1 — Nouvelle demande

| Champ | Contenu |
|-------|---------|
| Objectif | Capturer l’intention de démonstration |
| Visible | Champ intention ; projet ; requestId généré ; rappel sandbox/no remote |
| Actions Morris | Saisir ; soumettre ; abandonner |
| Statut | `intention_capturée` |
| Préconditions | Studio accessible ; projet connu |
| Sortie | Soumission → étape 2 |
| Preuve | StudioRequest horodatée |
| Critique | Soumettre |

### Étape 2 — Qualification en cours

| Champ | Contenu |
|-------|---------|
| Objectif | Lancer qualification GPT réelle |
| Visible | Spinner/état ; requestId ; « aucun GO pendant cette phase » |
| Actions | Attendre ; STOP si disponible côté plateforme |
| Statut | `qualification_en_cours` |
| Preuve | event `qualification_started` |
| Erreurs | GPT indisponible → scénario N1/N9 |

### Étape 3 — Qualification proposée

| Champ | Contenu |
|-------|---------|
| Objectif | Présenter QualificationCandidate complète |
| Visible | Tous champs obligatoires §4 ; cycle ; profil ; blocs ; allowlist ; stops ; réserves |
| Actions | Continuer vers gate ; demander correction ; abandonner |
| Statut | `qualification_prête` → `attente_gate_morris` |
| Non modifiable sans re-qualification | cycle/profil/allowlist/stops proposés (correction = nouvelle passe) |
| Preuve | QualificationCandidate validée fail-closed |

### Étape 4 — Gate Morris

| Champ | Contenu |
|-------|---------|
| Objectif | Décision d’autorisation d’exécution |
| Visible | Dossier gate §5 ; Truth Check résumé ; contractHash ; HEAD ; branche |
| Actions | **GO** · **NO-GO** · **Demander correction** · **Abandonner** |
| Statut | `attente_gate_morris` → `autorisé` / retour / `abandonné` |
| Preuve | MorrisGateDecision ancrée |
| Critique | GO |

### Étape 5 — Exécution

| Champ | Contenu |
|-------|---------|
| Objectif | Cursor réel dans sandbox après revalidation harness |
| Visible | workspace ; HEAD ; contrat ; allowlist ; début ; durée ; phase ; STOP |
| Actions | STOP Morris |
| Statut | `autorisé` → `en_exécution` |
| Interdit | Fausse progression inventée |
| Preuve | ExecutionEvents |

### Étape 6 — Rapport disponible

| Champ | Contenu |
|-------|---------|
| Objectif | Afficher résultat d’exécution |
| Visible | statut ; fichiers touchés ; aperçu sanitisé ; erreurs ; refs preuves/review pack |
| Statut | `rapport_disponible` |
| Preuve | CursorExecutionReport + ReviewPackReference |

### Étape 7 — Analyse GPT

| Champ | Contenu |
|-------|---------|
| Objectif | Lancer analyse GPT du paquet de preuves |
| Visible | état analyse ; compteur appels |
| Statut | `revue_en_cours` |
| Précondition | Rapport + pack complets |

### Étape 8 — Verdict proposé

| Champ | Contenu |
|-------|---------|
| Objectif | Afficher GptVerdictCandidate |
| Visible | prouvé / non prouvé / écarts / risques / réserves / décisions requises / claims interdits / verdict proposé |
| Statut | `décision_requise` |
| Interdit | Bouton « clôturer automatiquement » |

### Étape 9 — Décision Morris

| Champ | Contenu |
|-------|---------|
| Objectif | Décision finale humaine |
| Actions | Accepter et clôturer · Demander correction · Relancer sous nouveau GO · Abandonner |
| Preuve | MorrisFinalDecision |

### Étape 10 — Clôture

| Champ | Contenu |
|-------|---------|
| Objectif | Figurer CycleSummary dérivé |
| Statut | `clôturé` ou `abandonné` |
| Visible | résumé ; liens preuves ; réserves ; « non production-ready » |

---

## 2. États et transitions

| De | Vers | Déclencheur | Gate | Échec |
|----|------|-------------|------|-------|
| — | `intention_capturée` | Saisie Morris | non | — |
| `intention_capturée` | `qualification_en_cours` | Soumettre | non | validation locale |
| `qualification_en_cours` | `qualification_prête` | GPT OK + validateur | non | → correction / abandon |
| `qualification_prête` | `attente_gate_morris` | Morris « continuer » | non | — |
| `attente_gate_morris` | `autorisé` | **GO** | oui | — |
| `attente_gate_morris` | `qualification_en_cours` | Correction | non | — |
| `attente_gate_morris` | `abandonné` | NO-GO / Abandon | oui | — |
| `autorisé` | `en_exécution` | Harness revalide + spawn | GO revalidé | → `stoppé` / erreur |
| `en_exécution` | `stoppé` | STOP / erreur / timeout | — | reprise ou abandon |
| `en_exécution` | `rapport_disponible` | Fin exécution | — | rapport incomplet |
| `rapport_disponible` | `revue_en_cours` | Lancer analyse | non | pack incomplet |
| `revue_en_cours` | `décision_requise` | Verdict GPT valide | non | verdict invalide |
| `décision_requise` | `clôturé` | Accepter | décision finale | — |
| `décision_requise` | `qualification_en_cours` | Correction / relance | **nouveau GO** si re-exec | — |
| `décision_requise` | `abandonné` | Abandon | oui | — |
| `stoppé` | `attente_gate_morris` / `abandonné` | Reprise / abandon | **nouveau GO** si re-exec | — |

**Règle :** timeout ≠ GO. **Règle :** GO invalide si contractHash, HEAD, branche ou allowlist changent.

---

## 3. Contrat fonctionnel — Qualification GPT

### Champs obligatoires (QualificationCandidate)

| Champ | Visible Morris | Modifiable sans re-qualif |
|-------|----------------|---------------------------|
| requestId / correlationId | oui | non |
| objectif reformulé | oui | non (correction = re-qualif) |
| hypothèses / observations | oui | non |
| cycle SFIA proposé | oui | non |
| profil + justification | oui | non |
| blocs activés / désactivés | oui | non |
| sources nécessaires | oui | non |
| gates Morris | oui | non |
| périmètre / hors périmètre | oui | non |
| fichiers autorisés / interdits | oui | non |
| stop conditions | oui | non |
| critères succès / échec | oui | non |
| réserves | oui | non |
| décisions requises | oui | non |
| verdict attendu (indicatif) | oui | non |
| schemaVersion / métadonnées modèle | oui (expérimental) | non |

### Règles

- Sortie incomplète → **rejet fail-closed** (VS-BR-01).
- Ambiguïté → correction ou abandon, **pas** de fallback permissif (VS-BR-02).
- Relance qualification = nouvelle consommation FinOps, jamais silencieuse (VS-BR-03).
- GPT recommande ; Morris décide (VS-BR-04).

---

## 4. Gate Morris — dossier de décision

### Actions

`GO` · `NO-GO` · `Demander une correction` · `Abandonner`

### Ancrage obligatoire du GO

requestId · contractId · contractHash · branche · HEAD · périmètre · fichiers autorisés · actions autorisées · date/heure/fuseau · identité autorité · validité éventuelle (candidat)

### Messages utilisateur (fonctionnels)

| Situation | Message type |
|-----------|--------------|
| HEAD changé | « Le HEAD a changé depuis la qualification. Le GO précédent est invalide. Nouvelle qualification ou Truth Check requis. » |
| Contrat changé | « Le contrat a changé. Relancez la qualification puis un nouveau gate. » |
| Fichier hors allowlist | « Un fichier hors allowlist a été détecté. Exécution refusée. » |
| Action interdite | « Action interdite par le contrat. Aucune exécution. » |
| Rapport incomplet | « Rapport ou preuves incomplets. Analyse GPT bloquée. » |
| Cursor échoue | « Exécution Cursor en échec. Consultez le rapport. Décision Morris requise. » |
| GPT invalide | « Sortie GPT rejetée (fail-closed). Correction ou abandon. » |

---

## 5. Exécution Cursor (fonctionnel)

### Avant

Afficher : workspace sandbox · branche · HEAD · objectif · contrat · allowlist · commandes/actions interdites · gate actif · contractHash.

### Pendant

État `en_exécution` · début · durée · phase courante (si connue) · STOP · événements · **aucune** barre de progression inventée.

### Après

Statut · fichiers créés/modifiés (sandbox) · actions observables · erreurs · rapport · review pack · preuves · écarts au contrat · confirmation aucune écriture distante.

**Ne pas** inventer une API Cursor : mécanisme = port harness existant / CLI agent observé dans `29`/`31`.

---

## 6. Rapport et verdict GPT

### Paquet minimal pour analyse

demande · qualification · contrat · décision Morris · Truth Check · journal · fichiers touchés · contenu utile sanitisé · tests éventuels · erreurs · stop · réserves · rapport Cursor · review pack.

### GptVerdictCandidate

observations · prouvé · non prouvé · conformité contrat · écarts · risques · réserves · recommandations · décisions Morris requises · claims interdits détectés · verdict proposé.

### Décisions Morris post-verdict

Accepter et clôturer · Demander correction · Relancer sous **nouveau GO** · Abandonner.

GPT **ne clôture pas**.

---

## 7. Scénarios négatifs (N1–N16)

| ID | Scénario | Détection | Comportement | Reprise | Nouveau GO |
|----|----------|-----------|--------------|---------|------------|
| N1 | Qualif GPT invalide | Validateur | Rejet ; message ; pas d’exécution | Re-qualif | non (pas encore) |
| N2 | Sources Git indisponibles | Truth Check | STOP lecture | Réessayer quand Git OK | non |
| N3 | HEAD modifié après qualif | Comparaison HEAD | Invalider GO/contrat | Re-qualif | oui si exec |
| N4 | GO absent | Harness | Refus spawn | Gate | oui |
| N5 | GO invalide/expiré | Revalidation | Refus | Nouveau gate | oui |
| N6 | Contrat modifié après GO | Hash | Refus | Re-qualif + gate | oui |
| N7 | Fichier hors allowlist | Policy | STOP / refus | Correction contrat | oui |
| N8 | Commande/action interdite | Policy / post-check | STOP | Correction | oui |
| N9 | Cursor indisponible | Port | Échec explicite | Retry manuel sous GO | oui |
| N10 | Cursor code erreur | exit ≠ 0 | Rapport d’échec | Décision Morris | selon reprise |
| N11 | Timeout | Timer | `stoppé` ; timeout ≠ GO | Reprise sous GO | oui |
| N12 | STOP Morris | Action | `stoppé` immédiat | Reprise/abandon | oui si re-exec |
| N13 | Rapport absent | Check | Bloque analyse | Relancer collecte | — |
| N14 | Review pack incomplet | Check | Bloque clôture positive | Compléter | — |
| N15 | Verdict GPT invalide | Validateur | Rejet | Relance analyse ou abandon | FinOps |
| N16 | Perte session Studio | Reprise UI | Recharger états **dérivés** depuis preuves/Git | Continuer sans inventer | selon état |

Chaque scénario journalise une preuve (`ExecutionEvent` / note).

---

## 8. Matrice gate / nouveau GO

| Situation | Nouveau GO requis ? |
|-----------|---------------------|
| Re-qualification seule | non |
| Première exécution | oui (GO initial) |
| Reprise après STOP/erreur avec re-exec | **oui** |
| Relance après verdict « correction » avec re-exec | **oui** |
| Clôture / abandon | décision finale (pas GO Cursor) |
| Lecture preuves seule | non |

---

## 9. Règles métier `VS-BR-*`

| ID | Règle |
|----|-------|
| VS-BR-01 | Sortie GPT hors contrat → rejet fail-closed |
| VS-BR-02 | Pas de fallback permissif |
| VS-BR-03 | Pas de retry automatique GPT/Cursor |
| VS-BR-04 | GPT ne décide pas ; Morris décide |
| VS-BR-05 | GO lié à contractHash + HEAD + branche + allowlist |
| VS-BR-06 | Changement hash/HEAD/branche/allowlist → GO invalide |
| VS-BR-07 | Harness revalide avant spawn |
| VS-BR-08 | Cursor sandbox only ; hors allowlist → STOP |
| VS-BR-09 | Aucune écriture Git distante dans le slice |
| VS-BR-10 | STOP prioritaire |
| VS-BR-11 | Timeout ≠ GO |
| VS-BR-12 | Studio n’est pas source de vérité |
| VS-BR-13 | Harness autonome sans Studio demeure possible |
| VS-BR-14 | Verdict GPT = candidat |
| VS-BR-15 | Review pack incomplet → pas de clôture positive |
| VS-BR-16 | Secrets jamais affichés |
| VS-BR-17 | Claims production-ready / merge auto / L5 = interdits |

---

## 10. Critères d’acceptation testables `VS-AC-*`

| ID | Critère |
|----|---------|
| VS-AC-01 | Parcours nominal 1→10 réalisable depuis Studio |
| VS-AC-02 | GO refusé si HEAD ≠ HEAD ancré |
| VS-AC-03 | GO refusé si contractHash ≠ hash courant |
| VS-AC-04 | Fichier hors allowlist → pas de succès d’exécution |
| VS-AC-05 | STOP interrompt et journalise |
| VS-AC-06 | Sans rapport/pack → pas d’analyse GPT réussie |
| VS-AC-07 | Verdict invalide → pas de clôture auto |
| VS-AC-08 | Clôture uniquement via MorrisFinalDecision |
| VS-AC-09 | Aucune preuve d’écriture distante |
| VS-AC-10 | Aucun secret dans UI/preuves |
| VS-AC-11 | États Studio cohérents avec preuves (vue dérivée) |
| VS-AC-12 | Même scénario exécutable via harness sans Studio |

---

## 11. Preuves attendues (fonctionnelles)

| Étape | Preuve |
|-------|--------|
| Demande | StudioRequest |
| Qualif | QualificationCandidate + observation GPT |
| Gate | MorrisGateDecision |
| Exec | ExecutionEvents + CursorExecutionReport |
| Pack | ReviewPackReference |
| Verdict | GptVerdictCandidate |
| Clôture | MorrisFinalDecision + CycleSummary |

---

## 12. Données — champs clés (extrait)

### ExecutionContract (fonctionnel)

contractId · contractHash · requestId · correlationId · objective · allowedReadPaths · allowedWritePaths · deniedPaths · allowedActions · forbiddenActions · stopConditions · requiredGates · gitEffect=`none-remote` · workspaceSandbox · initiatedBy · initiatedAt · validityWindow?

### MorrisGateDecision

decision ∈ {GO, NO_GO, CORRECTION, ABANDON} · requestId · contractId · contractHash · branch · head · actor · decidedAt · timezone · rationale?

---

## 13. Challenge (auto-contrôle)

| Question | Réponse conception |
|----------|-------------------|
| Utile maintenant ? | Oui — débloque UX/backlog/delivery sans réinterprétation dangereuse |
| Preuve BeB couverte ? | Oui — Studio→…→clôture conçue ; spikes = preuve technique partielle hors UI |
| Trop large ? | Borné à un scénario Markdown sandbox |
| Plus simple ? | Harness-only déjà prouvé ; slice ajoute Studio gouverné |
| Dérive MVP ? | Explicitement non — niveaux §32 |
| Gate visible ? | Oui — étape 4 + revalidation |
| Option B respectée ? | Oui |


---

# ANNEXE C — Document 34 (intégral)

# SFIA Studio — Decision pack vertical slice POC (candidat)

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `34-poc-vertical-slice-decision-pack.md` |
| **Cycle** | 2 — Conception fonctionnelle (vertical slice POC) |
| **Profil** | Critical |
| **Typologie** | DOC / CONCEPTION / POC |
| **Baseline** | SFIA v2.6 |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **Branche conception** | `design/sfia-studio-poc-vertical-slice` (**locale**) |
| **Statut** | `validated-for-versioning` — VS-CAND-01…13 & 15 **validées** ; VS-CAND-14 **validée avec réserve** ; merge PR = GO distinct |
| **Autorité** | Morris (L0) |
| **Complète** | [`32`](./32-poc-vertical-slice-functional-design.md) · [`33`](./33-poc-vertical-slice-flows-and-rules.md) |

> Pack de décisions du vertical slice. VS-CAND-01…13 et 15 **validées Morris** ; VS-CAND-14 **validée avec réserve** (plafond obligatoire, valeur **À définir**, aucun retry auto).
> Merge, delivery, live et backlog restent soumis à des GO distincts.

---

## 1. Synthèse

Ce cycle conçoit le **premier vertical slice POC utilisable depuis SFIA Studio** :

Demande → qualification GPT réelle → gate Morris → harness → Cursor sandbox → preuves → analyse GPT → verdict candidat → décision Morris.

Il **ne** livre pas de code, **ne** prouve pas le BeB UI, **ne** définit pas le MVP, **ne** rouvre pas Option B / AF-Option C.

| Livrable | Rôle |
|----------|------|
| `32` | Contrat fonctionnel du slice (périmètre, FR, objets, AC) |
| `33` | Parcours, états, BR, scénarios négatifs, preuves |
| `34` | Ce pack — observations, candidats, séquencement |

---

## 2. Observations

1. Les spikes `#226` / docs `29`–`31` prouvent GPT + Cursor **hors Studio UI**, avec réserves.
2. Le gap restant est **fonctionnel UX gouverné** : Studio comme cockpit / vue dérivée, pas comme orchestrateur.
3. Le socle `08`–`10` (FD-CAND validés) reste la base ; ce slice en est un **sous-ensemble POC** explicite.
4. Le scénario Markdown sandbox est un **support de preuve**, pas une feature produit finale.
5. Les risques majeurs sont : dérive MVP, contournement gate, seconde vérité Studio, écriture distante, retry permissif, claims « prêt ».

---

## 3. Hypothèses

| ID | Hypothèse |
|----|-----------|
| H1 | Architecture POC Option B reste inchangée |
| H2 | Morris reste seule autorité L0 ; GPT/Cursor sans pouvoir de décision |
| H3 | Git reste source de vérité durable ; Studio = vue dérivée |
| H4 | Aucune écriture Git distante dans le premier vertical slice |
| H5 | Exécution Cursor limitée à une sandbox allowlistée |
| H6 | Harness autonome sans Studio reste possible |
| H7 | Demande de démo sans donnée personnelle |
| H8 | Validation des VS-CAND précède UX/UI, backlog et delivery |

---

## 4. Options éventuelles (non tranchées techniquement)

| Sujet | Option A | Option B (recommandée conception) | Note |
|-------|----------|-----------------------------------|------|
| Scénario preuve | Multi-fichiers / multi-projets | **Un Markdown sandbox** | Moins de dette |
| Gate validity | GO sans fenêtre | GO + fenêtre de validité candidate | À arbitrer (VS-CAND-04) |
| Affichage événements | Polling UI | Stream dérivé | Non figé tech |
| Conservation logs | Indéfinie | Durée limitée candidate | RGPD / VS-CAND futur |

Aucune option ci-dessus ne sélectionne stack, BDD, ORM ou protocole.

---

## 5. Recommandations (non validées)

1. Valider d’abord les `VS-CAND-01`…`12` avant tout cycle UX/UI.
2. Garder le scénario **minimal** (Markdown sandbox) pour le BeB.
3. Exiger ancrage GO = contractHash + HEAD + branche + allowlist.
4. Conserver harness autonome comme chemin de contrôle.
5. Interdire claims MVP / production / L5 / « Studio complete ».
6. Enchaîner ensuite : UX/UI → backlog → delivery (sous GO distincts).

---

## 6. Décisions candidates `VS-CAND-*`

| ID | Décision candidate | Impact | Risque si non tranché | Dette si accepté |
|----|-------------------|--------|----------------------|------------------|
| **VS-CAND-01** | Scénario démo = Markdown sandbox (titre, synthèse, checklist) | Borne le BeB | Scénario flou → dérive | Faible |
| **VS-CAND-02** | Parcours utilisateur en **dix** étapes (Nouvelle demande → Clôture) | Cadre UX | Ambiguïté écrans | Faible |
| **VS-CAND-03** | Qualification GPT **visible** avant tout gate d’exécution | Contrôle humain | GO aveugle | Faible |
| **VS-CAND-04** | GO lié à contractHash + Git HEAD (+ branche + allowlist) | Invalidation stricte | Contournement / stale GO | Faible (discipline) |
| **VS-CAND-05** | Studio = vue dérivée ; harness = autorité d’application des gates | Option B | Studio orchestrateur | Faible |
| **VS-CAND-06** | Aucune écriture Git distante dans le slice | Sécurité | Fuite périmètre | Faible |
| **VS-CAND-07** | Cursor réel **uniquement** sandbox après GO revalidé | Bornage | Cursor libre | Moyenne (ops) |
| **VS-CAND-08** | Verdict GPT = candidat ; clôture = Morris | Autorité | Clôture auto | Faible |
| **VS-CAND-09** | STOP prioritaire (timeout ≠ GO) | Sécurité | Exécution zombie | Faible |
| **VS-CAND-10** | Mode harness autonome conservé | Résilience | Dépendance UI | Faible |
| **VS-CAND-11** | Critères de succès BeB = `VS-AC-*` + critère central doc `32` | Acceptation | « Succès » flou | Faible |
| **VS-CAND-12** | Séquencement post-validation : UX/UI → backlog → delivery | Ordre cycles | Delivery trop tôt | Faible |

### Compléments candidats (si nécessaires)

| ID | Décision candidate | Pourquoi |
|----|-------------------|----------|
| **VS-CAND-13** | Demande de test sans donnée personnelle ; journaux sans secret | RGPD minimal |
| **VS-CAND-14** | Plafond d’appels GPT candidat + pas de retry auto | FinOps |
| **VS-CAND-15** | Identifiants correlation (requestId, contractId, eventId) obligatoires en UI/preuves | Observabilité |

---

## 7. Impacts / risques / dette

| Thème | Impact | Risque | Dette |
|-------|--------|--------|-------|
| Conception Critical | Documents structurants pour UX/delivery | Sur-spécification | Maintenir alignement `32`–`34` vs spikes |
| Gates stricts | Sécurité BeB | Friction Morris | Discipline GO |
| Sandbox only | Preuve limitée | Sous-estimer prod | Acceptable pour POC |
| Pas de remote Git | Pas de merge auto | Moins « wow » démo | Volontaire |
| Studio dérivé | Complexité UX sync | États désync | Reprise N16 |

---

## 8. Proposition de validation Morris

Morris est invité à **valider ou refuser** séparément chaque `VS-CAND-*` (ou un lot explicite), **sans** autoriser :

- commit / push / PR / merge des docs `32`–`34` ;
- UX/UI, backlog, delivery ;
- modification `app/**` ou harness ;
- exécution OpenAI / Cursor réelle ;
- CI/CD, MVP, L5, industrialisation.

Effet attendu d’une validation conception : **autorisation** d’un cycle suivant (typiquement UX/UI ou versionnement documentaire sous GO distinct).

---

## 9. Gates suivants (GO distincts requis)

| Gate | Objet |
|------|-------|
| G-VS-VAL | Validation `VS-CAND-*` |
| G-VS-DOC | Commit / push / PR / merge docs `32`–`34` |
| G-VS-UX | Cycle UX/UI visuelle |
| G-VS-BL | Backlog delivery |
| G-VS-DEL | Delivery / code Studio+adaptateur |
| G-VS-LIVE | OpenAI / Cursor live |
| G-VS-CI | CI/CD |
| G-VS-MVP | Définition MVP |
| G-VS-IND | Industrialisation / L5 |

---

## 10. Séquencement candidat

```text
1. Validation conception (VS-CAND)     ← Morris — GO requis
2. (Optionnel) versionnement docs 32–34
3. UX/UI (écrans du parcours 10 étapes)
4. Backlog borné vertical slice
5. Delivery (app + adaptateur fin — hors harness authority)
6. Preuve BeB live sous GO live
```

Ordre recommandé : **validation → UX/UI → backlog → delivery**.
Ne pas lancer delivery avant validation des candidats.

---

## 11. Challenge (auto-contrôle)

| Question | Verdict conception |
|----------|-------------------|
| Utile maintenant ? | Oui |
| Preuve BeB conçue ? | Oui (exécution réelle = cycles suivants) |
| Dette créée ? | Documentaire limitée |
| Trop large ? | Non — scénario unique sandbox |
| Plus simple ? | Harness-only déjà fait ; slice = Studio gouverné |
| Dérive MVP ? | Explicitement bornée |
| Gate visible ? | Oui |
| Option B ? | Respectée |

---

## 12. Verdict candidat (cycle conception)

`SFIA STUDIO VERTICAL SLICE FUNCTIONAL DESIGN READY — MORRIS VALIDATION REQUIRED`

### Interdits (non applicables)

CONCEPTION VALIDATED · POC PROVEN · MVP DEFINED · READY FOR DELIVERY · PRODUCTION READY · STUDIO COMPLETE · API INTEGRATED · CURSOR INTEGRATED · DOCUMENTATION MERGED · L5 GLOBAL PROVEN

---

## 13. Décisions Morris attendues

1. Valider / amender / refuser `VS-CAND-01`…`15` (ou lot).
2. Autoriser ou non le versionnement documentaire.
3. Sélectionner le cycle suivant (UX/UI recommandé si validation).
4. **Ne pas** interpréter ce pack comme GO live, delivery ou merge.


---

# ANNEXE D — Document 35 (intégral)

# SFIA Studio — Contrat UX/UI du vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `35-poc-vertical-slice-ux-ui-contract.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Standard |
| **Typologie** | DOC / UX |
| **Baseline** | SFIA v2.6 |
| **Branche** | `design/sfia-studio-poc-vertical-slice` (**locale**) |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **Statut** | `validated-for-versioning` — UX/UI + correctif **validés Morris** ; merge PR = GO distinct |
| **Figma fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **Page source** | `UX-B — P0` |
| **Page créée** | `UX-B — POC Vertical Slice` |
| **Correctif** | GO UX/UI correctif borné — dix états / Abandonner / clôture slice |
| **Code / live** | **Aucun** |

> Contrat UX/UI du parcours gouverné en **dix états fonctionnels** (storyboard), **pas dix routes**.
> Continuité visuelle Product premium (P0). Les **quatre vues P0** restent la structure applicative de référence.
> Frames VS-UX = storyboard validé Morris sur le fond. Ne pas modifier les frames P0. Merge PR = GO distinct.

---

## 1. Décisions Morris appliquées (amont)

| ID | Statut appliqué |
|----|-----------------|
| VS-CAND-01 … VS-CAND-13 | **VALIDÉES** |
| VS-CAND-15 | **VALIDÉE** |
| VS-CAND-14 | **VALIDÉE AVEC RÉSERVE** — plafond GPT obligatoire, valeur numérique **À définir** (non inventée) |

Architecture Option B, Git = vérité, Morris L0, GPT ≠ décision, Cursor sandbox borné : **maintenus**.

### Correctif Morris appliqué (ce cycle)

| Décision | Statut |
|----------|--------|
| Dix frames = **dix états** de parcours, **pas dix routes** | **VALIDÉE / appliquée** |
| Quatre vues P0 = structure produit de référence | **VALIDÉE / appliquée** |
| Action **Abandonner** explicite dans le gate Morris | **VALIDÉE / appliquée** |
| Clôture spécifique au vertical slice (sans portfolio hors contexte) | **VALIDÉE / appliquée** |

---

## 1bis. Modèle de navigation — dix états, quatre vues

**Règle dure :** les frames VS-UX-01…10 forment un **storyboard d’états fonctionnels**. Elles **ne constituent pas** dix nouvelles routes applicatives. Toute nouvelle route = arbitrage Morris distinct.

| Vue applicative P0 (référence) | États VS-UX couverts | Mode delivery cible |
|--------------------------------|----------------------|---------------------|
| **Nouvelle demande** (P0-00C) | VS-UX-01, VS-UX-02, VS-UX-03 | États / panneaux / transitions dans la route existante |
| **Décision Morris / Gate** (P0-03C) | VS-UX-04 | Gate à 4 actions dans la vue décision |
| **Cycle actif** (P0-02C) | VS-UX-05, VS-UX-06, VS-UX-07, VS-UX-08 | Stepper / variantes d’état |
| **Décision Morris finale** (P0-03C) | VS-UX-09 | Même famille « décision », phase post-verdict |
| **Vue synthèse / clôture** (P0-01C) | VS-UX-10 | Synthèse **du slice courant** uniquement |

---

## 2. Contrat visuel Figma extrait

| Élément | Valeur observée / retenue |
|---------|---------------------------|
| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **page source** | `UX-B — P0` (`0:1`) |
| **frames sources** | P0-00C `19:2` · P0-01C `22:2` · P0-02C `22:133` · P0-03C `22:270` |
| **dimensions** | **1440 × 1024** (confirmé MCP sur les quatre frames) |
| **shell général** | Product premium — fond clair `#f6f9ff` / `#f6f9fe`, ink `#141c30` |
| **rail utilitaire** | ~64 px ; brand « S » ; icônes nav ; avatar / pill bas ; **aucun GO** |
| **topbar** | Eyebrow `SFIA STUDIO` ; titre workspace ; pills statut ; onglets ; CTA global non destructif |
| **canvas** | Hero + zone métier (formulaire / stepper / evidence / options) |
| **panneau copilote** | ~334–340 px ; résumé + suggestions **≠ décision** ; composer |
| **grille / colonnes** | Flush : canvas ~972 px + copilote 340 px ; Floating (00C) : workspace 968 + copilote 334 |
| **spacings clés** | 8 / 12 / 16 / 20 / 24 / 28 px ; rayons 12 / 16 / 20 / 24 |
| **typographies** | Inter (app) ; eyebrow meta 11–12 px ; titres hero ~24–29 px ; body 15–16 px |
| **couleurs / tokens** | Blue `#3863f5` · Purple `#7a4df5` · Green `#21c28a` · Orange `#faa629` · Pink `#f25794` · Navy heroes · Brand accent gradient |
| **cartes** | Surfaces blanches, ombres soft, accent bar métriques |
| **badges / statuts** | Pills (draft, ready, candidat, risque, Git, mode) — sens **aussi** textuel |
| **CTA** | Primaire plein ; secondaire outline ; STOP / danger distinct |
| **styles de gates** | Options décision + dossier preuves ; confirmation explicite |
| **preuves** | Listes evidence / inspector / trust blocks |
| **loading / erreur / STOP / vide** | P0 partiel (STOP box) ; **à étendre** sur VS (documenté ci-dessous) |
| **écarts connus** | App P0 = 4 écrans ; slice = 10 ; loading/error absents en app |
| **incertitudes** | Tokens Figma variables vides côté MCP — hex issus design context / `tokens.css` |
| **impacts VS** | Cloner shell P0 ; adapter canvas par étape ; ne pas toucher `19:2`/`22:*` P0 |

### Limites de lecture MCP

- `get_metadata` + `get_screenshot` : structure et dimensions confirmées.
- Variables Figma : historiquement vides ; tokens app `styles/tokens.css` comme relais documentaire.
- Textes exacts : partiellement masqués en metadata (noms de layers) — copy VS renseignée sur clones.

---

## 3. Objectif UX

Permettre à Morris de **voir et contrôler** le parcours Studio → GPT → gate → harness/Cursor → rapport → GPT verdict → décision → clôture, sans faire de Studio une source de vérité et sans auto-GO.

---

## 4. Matrice parcours → état (frame) → vue P0 → autorité

| État | Frame | Vue P0 de rattachement | Autorité action | Preuve UI |
|------|-------|------------------------|-----------------|-----------|
| 1 Nouvelle demande | VS-UX-01 | Nouvelle demande | Morris saisit | StudioRequest |
| 2 Qualification en cours | VS-UX-02 | Nouvelle demande | Système GPT ; STOP Morris | event qualif |
| 3 Qualification proposée | VS-UX-03 | Nouvelle demande | Morris revue | QualificationCandidate |
| 4 Gate Morris | VS-UX-04 | Décision Morris / Gate | **Morris seul** | MorrisGateDecision |
| 5 Exécution | VS-UX-05 | Cycle actif | Harness/Cursor ; STOP Morris | ExecutionEvents |
| 6 Rapport | VS-UX-06 | Cycle actif | Morris lit | CursorExecutionReport |
| 7 Analyse GPT | VS-UX-07 | Cycle actif | GPT analyse ; STOP conso | event analyse |
| 8 Verdict proposé | VS-UX-08 | Cycle actif | GPT candidat | GptVerdictCandidate |
| 9 Décision Morris | VS-UX-09 | Décision Morris finale | **Morris seul** | MorrisFinalDecision |
| 10 Clôture | VS-UX-10 | Vue synthèse / clôture | Affichage dérivé | CycleSummary |

> **Pas de routes nouvelles** : le delivery privilégie états, variantes, panneaux et transitions dans les quatre vues P0.

---

## 5. Exigences UX `VS-UX-FR-*`

| ID | Exigence |
|----|----------|
| VS-UX-FR-01 | Dix frames = **dix états** storyboard 1440×1024 ; **pas** dix routes ; pas de fusion silencieuse |
| VS-UX-FR-02 | Shell P0 conservé (rail / topbar / canvas / copilote) |
| VS-UX-FR-03 | Copilote jamais présenté comme décision Morris |
| VS-UX-FR-04 | GO visible uniquement sur VS-UX-04 ; ancré hash/HEAD/branche/allowlist |
| VS-UX-FR-05 | Invalidation GO représentée (bandeau / état invalide) — **distincte** d’Abandonner |
| VS-UX-FR-06 | STOP prioritaire et accessible clavier — **≠** Abandonner / NO-GO |
| VS-UX-FR-07 | FinOps : appels GPT séparés (qualif ≠ analyse) ; plafond « À définir » ; pas de retry auto |
| VS-UX-FR-08 | Verdict GPT étiqueté **candidat** |
| VS-UX-FR-09 | Clôture uniquement via décision Morris (VS-UX-09→10) |
| VS-UX-FR-10 | Aucun secret / token / PII réelle dans les maquettes |
| VS-UX-FR-11 | Aucune écriture Git distante groupée dans les CTA |
| VS-UX-FR-12 | Source de statut (Git / harness / dérivé Studio) lisible |
| VS-UX-FR-13 | Fail-closed GPT visible (erreur + pas de suite) |
| VS-UX-FR-14 | Frames P0 non modifiées ; VS non « baseline validée » |
| VS-UX-FR-15 | Gate Morris : **quatre** actions explicites GO · NO-GO · Demander une correction · **Abandonner** |
| VS-UX-FR-16 | Abandonner : visible, destructif, confirmation, conséquence « état abandonné », pas d’action Git distante |
| VS-UX-FR-17 | Clôture (VS-UX-10) : **uniquement** données du vertical slice courant — **aucun** portfolio multi-projet hors contexte |

---

## 6. États transverses (contrat)

| État | Représentation | Frames concernées |
|------|----------------|-------------------|
| Loading | Phase active + spinner textuel + compteur appel | 02, 05, 07 |
| Erreur fail-closed | Banner erreur + CTA correction/abandon | 02, 07 (+ autres) |
| STOP | CTA danger prioritaire + journal | 02, 05, 07 |
| GO invalide | Banner « GO invalide — HEAD/contrat changé » | 04, 05 |
| Vide / incomplet | Message « rapport/pack incomplet » | 06, 08 |
| Candidat | Badge « Candidat GPT » | 03, 08 |

---

## 7. Accessibilité (contrat cible — pas un audit)

Pour **chaque** frame VS-UX :

| Critère | Contrat |
|---------|---------|
| Ordre de tabulation | Rail → topbar → canvas → actions → copilote |
| Focus visible | Outline blue `#3863f5` (app) |
| Labels explicites | Inputs / CTA avec nom accessible |
| CTA | Nom = verbe + objet (ex. « Qualifier la demande ») |
| Couleur | Statuts aussi textuels / icônes |
| Contraste | Cible WCAG 2.2 AA |
| Annonce états | Live region pour loading / erreur / STOP |
| Erreurs | Associées au champ / phase |
| Gates | Conséquences textuelles sous chaque option |
| STOP | Toujours atteignable au clavier dès phases 02/05/07 |
| **Abandonner** | Nom accessible explicite « Abandonner le cycle » ; danger **aussi** textuel (pas couleur seule) ; confirmation clavier ; message de conséquence ; focus visible |

**Ne pas** prétendre qu’un audit complet a été réalisé.

---

## 8. FinOps UI

| Élément | Affichage |
|---------|-----------|
| Appels consommés | Compteur `n / plafond` |
| Plafond | **À définir** (obligatoire, non numérique) |
| Séparation | Qualification vs Analyse |
| Retry | Mention explicite « Aucun retry automatique » |
| Coût € | **Non affiché** (interdit d’inventer) |
| Arrêt | CTA avant nouvel appel |

---

## 9. Sécurité & observabilité UI

Afficher si pertinent : `requestId`, `correlationId`, `contractId`, `contractHash`, branche, HEAD, sandbox, allowlist, horodatage+fuseau, source statut, preuve, erreur, invalidation GO, STOP.

Ne jamais afficher : token, clé API, secret, chemin utilisateur sensible non masqué, PII réelle.

---

## 10. Continuité app (lecture seule)

Routes actuelles : `/nouvelle-demande`, `/synthese`, `/cycle-actif`, `/decision`.
Shell : `StudioShell` + tokens `styles/tokens.css`.
**Limite :** l’app ne couvre pas encore les 10 étapes — les frames VS sont le contrat pour un futur delivery (hors cycle).

---

## 11. Hors périmètre

Code · modif `app/**` / harness · API/BDD · live GPT/Cursor · responsive mobile · claim MVP/prod · modif docs `01`–`34` · modif frames P0 · promotion VS comme baseline.

---

## 12. Documents liés

- [`36-poc-vertical-slice-ux-ui-flows-and-frames.md`](./36-poc-vertical-slice-ux-ui-flows-and-frames.md)
- [`37-poc-vertical-slice-ux-ui-decision-pack.md`](./37-poc-vertical-slice-ux-ui-decision-pack.md)
- Fonctionnel : [`32`](./32-poc-vertical-slice-functional-design.md)–[`34`](./34-poc-vertical-slice-decision-pack.md)
- P0 : [`14`](./14-ux-ui-contract.md)–[`16`](./16-ux-ui-decision-pack.md)


---

# ANNEXE E — Document 36 (intégral)

# SFIA Studio — Flows, frames et inventaire Figma (vertical slice POC)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `36-poc-vertical-slice-ux-ui-flows-and-frames.md` |
| **Cycle** | 4 — UX/UI (correctif borné) |
| **Profil** | Standard |
| **Statut** | `validated-for-versioning` — inventaire frames/états **validé Morris** ; merge PR = GO distinct |
| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **Page** | `UX-B — POC Vertical Slice` (`51:2`) |
| **Companion** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`37`](./37-poc-vertical-slice-ux-ui-decision-pack.md) |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |

> Inventaire des frames = **storyboard d’états** validé Morris sur le fond.
> **Dix états, pas dix routes.** Quatre vues P0 = structure applicative de référence. Merge PR = GO distinct.

---

## 1. Pages Figma

| Page | node ID | Rôle |
|------|---------|------|
| `UX-B — P0` | `0:1` | Référence validée — **non modifiée** |
| `UX-B — POC Vertical Slice` | `51:2` | Frames VS candidates |

---

## 2. Frames sources P0 (lues, non modifiées)

| Frame | node ID | Dimensions |
|-------|---------|------------|
| P0-00C — Nouvelle demande | `19:2` | 1440 × 1024 |
| P0-01C — Vue synthèse | `22:2` | 1440 × 1024 |
| P0-02C — Cycle actif | `22:133` | 1440 × 1024 |
| P0-03C — Décision Morris | `22:270` | 1440 × 1024 |

---

## 3. Modèle — dix états → quatre vues P0

| Vue applicative P0 | États VS-UX | Delivery cible |
|--------------------|-------------|----------------|
| Nouvelle demande | 01, 02, 03 | États / panneaux dans route existante |
| Décision Morris / Gate | 04 | 4 actions gate |
| Cycle actif | 05, 06, 07, 08 | Stepper / variantes |
| Décision Morris finale | 09 | Phase post-verdict |
| Vue synthèse / clôture | 10 | Synthèse **slice courant** seul |

Toute **nouvelle route** = arbitrage Morris distinct (hors correctif).

---

## 4. Inventaire frames vertical slice

| Frame (état) | node ID | Dimensions | Vue P0 | Étape |
|--------------|---------|------------|--------|-------|
| VS-UX-01 — Nouvelle demande | `51:3` | 1440 × 1024 | Nouvelle demande | 1 |
| VS-UX-02 — Qualification en cours | `51:139` | 1440 × 1024 | Nouvelle demande | 2 |
| VS-UX-03 — Qualification proposée | `51:277` | 1440 × 1024 | Nouvelle demande | 3 |
| VS-UX-04 — Gate Morris | `51:415` | 1440 × 1024 | Décision / Gate | 4 |
| VS-UX-05 — Exécution | `51:540` | 1440 × 1024 | Cycle actif | 5 |
| VS-UX-06 — Rapport disponible | `51:678` | 1440 × 1024 | Cycle actif | 6 |
| VS-UX-07 — Analyse GPT | `51:816` | 1440 × 1024 | Cycle actif | 7 |
| VS-UX-08 — Verdict proposé | `51:954` | 1440 × 1024 | Cycle actif | 8 |
| VS-UX-09 — Décision Morris | `51:1079` | 1440 × 1024 | Décision finale | 9 |
| VS-UX-10 — Clôture | `51:1204` | 1440 × 1024 | Synthèse / clôture | 10 |

Lien : https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO?node-id=51-2

---

## 5. Variantes / annotations

| Variante | node ID | Dimensions | Rôle |
|----------|---------|------------|------|
| VS-UX-VAR — Loading GPT | `52:2` | 720 × 420 | Phase active + FinOps |
| VS-UX-VAR — Erreur fail-closed | `52:10` | 720 × 420 | Rejet GPT |
| VS-UX-VAR — STOP Morris | `52:18` | 720 × 420 | STOP prioritaire |
| VS-UX-VAR — GO invalide | `52:26` | 720 × 420 | Invalidation ancrage |

**Supprimée (correctif) :** `VS-UX-NOTE — Gate 4 actions` (`52:34`) — redondante après 4e action explicite.

---

## 6. Contenu fonctionnel par état

### VS-UX-01 … 03 — vue Nouvelle demande
Inchangés fonctionnellement (saisie → qualif → proposition). Aucun GO.

### VS-UX-04 — Gate Morris (**correctif**)
- Dossier ancré : requestId, contractId, contractHash, branche, HEAD, allowlist, autorité, horodatage.
- **Quatre actions explicites :**
  1. **GO** — autoriser Cursor sandbox
  2. **NO-GO** — refuser l’exécution (pas de spawn)
  3. **Demander une correction** (CORRIGER) — re-qualification
  4. **Abandonner** — visible, destructif (traitement danger), confirmation, conséquence « état abandonné », **aucune** action Git distante
- **Abandonner ≠ NO-GO ≠ STOP**
- Invalidation GO = bandeau / variante **séparée** (pas un substitut à Abandonner)

### VS-UX-05 … 08 — vue Cycle actif
Inchangés (exécution → rapport → analyse → verdict candidat).

### VS-UX-09 — Décision Morris finale
Clôturer · Corriger · Relancer (nouveau GO) · Abandonner — hors Git groupé.

### VS-UX-10 — Clôture (**correctif**)
Affiche **uniquement** le vertical slice courant :
- requestId · statut final · décision Morris
- fichier Markdown produit · rapport & preuves
- appels GPT (n / À définir) · réserves
- traçabilité branche / HEAD / contractHash
- prochaines actions candidates **séparées**
**Retiré :** portfolio multi-projet / lignes héritées P0 hors contexte.
**Aucun** claim MVP / production-ready.

---

## 7. Transitions UX

```text
01 → 02 (Qualifier)
02 → 03 (qualif OK) | erreur/STOP
03 → 04 (Ouvrir gate) | correction → 02
04 → 05 (GO) | NO-GO → clôture négative | Abandonner → abandonné | correction → 02
05 → 06 | STOP → stoppé
06 → 07
07 → 08 | fail-closed
08 → 09
09 → 10 | correction/relance (nouveau GO) | abandon
```

---

## 8. Distinction Abandonner / NO-GO / STOP

| Action | Moment | Effet | Git distant |
|--------|--------|-------|-------------|
| **STOP** | Pendant qualif / exec / analyse | Interrompt activité en cours → `stoppé` | Non |
| **NO-GO** | Gate pré-exécution | Refuse spawn Cursor | Non |
| **Abandonner** | Gate (et décision finale) | Cycle → `abandonné` après confirmation | Non |
| **Invalidation GO** | Si hash/HEAD/branche/allowlist change | GO invalide — re-gate | Non |

---

## 9. Écarts au P0 (après correctif)

| Écart | Traitement |
|-------|------------|
| 10 états vs 4 vues | Mapping §3 — **pas** 10 routes |
| Gate 4 actions | Matérialisé sur VS-UX-04 |
| Clôture vs synthèse | Contenu slice-only ; portfolio générique retiré |
| Note 52:34 | **Supprimée** |

---

## 10. Accessibilité (rappel Abandonner)

- Nom accessible : « Abandonner le cycle »
- Danger textuel + style (pas couleur seule)
- Confirmation focusable clavier
- Conséquence lisible
- Tab order : options → confirmation → confirmer

---

## 11. Limites

- Chrome topbar (CTA « Interv360 », pills héritées) peut rester générique — hors nettoyage portfolio.
- Variantes = annotations 720×420.
- Frames VS toujours **candidates** jusqu’à validation finale Morris.


---

# ANNEXE F — Document 37 (intégral)

# SFIA Studio — Decision pack UX/UI vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `37-poc-vertical-slice-ux-ui-decision-pack.md` |
| **Cycle** | 4 — UX/UI (correctif borné) |
| **Profil** | Standard |
| **Statut** | `validated-for-versioning` — correctif UX/UI **validé Morris** ; merge PR = GO distinct |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **Figma** | `lrjA1WEyRpL05vKR8k29LO` · page `51:2` |
| **Companions** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`36`](./36-poc-vertical-slice-ux-ui-flows-and-frames.md) |

> Pack après correctif Morris. Contenu UX/UI **validé** pour versionnement.
> Merge, delivery, live et backlog = GO Morris distincts.

---

## 1. Synthèse du correctif

GO Morris : **UX/UI correctif borné** consommé.

| Correction | Fait |
|------------|------|
| Dix frames = **états**, pas routes | Documenté 35/36/37 + mapping 4 vues P0 |
| Abandonner explicite au gate | VS-UX-04 — 4 actions ; note `52:34` **supprimée** |
| Clôture slice-only | VS-UX-10 — portfolio multi-projet **retiré** |

Aucun code · aucune route · aucune modif P0 / app / harness · aucun live · aucun commit projet.

---

## 2. Observations

1. Les quatre vues P0 restent le modèle applicatif de référence.
2. Le storyboard Figma reste utile pour revue visuelle sans imposer 10 routes.
3. Abandonner / NO-GO / STOP / invalidation GO sont désormais distingués.
4. La clôture ne doit plus être lue comme une synthèse portefeuille.

---

## 3. Décisions Morris déjà appliquées

| ID | Décision | Statut |
|----|----------|--------|
| VS-CAND-01…13, 15 | Amont fonctionnel | **VALIDÉES** |
| VS-CAND-14 | Plafond GPT obligatoire, valeur À définir | **VALIDÉE AVEC RÉSERVE** |
| **VS-UX-CAND-02** (amendée) | Dix frames = **dix états** (pas dix routes) | **VALIDÉE / appliquée** |
| **VS-UX-CAND-10** (amendée) | Abandonner = **4e action explicite** au gate | **VALIDÉE / appliquée** |
| Correctif clôture | VS-UX-10 sans portfolio hors contexte | **VALIDÉE / appliquée** |
| Mapping 4 vues | Regroupement états → vues P0 | **VALIDÉE / appliquée** |

---

## 4. Décisions UX candidates restantes

| ID | Décision candidate | Statut |
|----|-------------------|--------|
| VS-UX-CAND-01 | Page Figma dédiée | Ouverte (page créée) |
| VS-UX-CAND-03 | Continuité Product premium | Ouverte |
| VS-UX-CAND-04…09, 11 | FinOps / STOP / candidat / variantes / a11y | Ouvertes |
| VS-UX-CAND-12 | Séquencement validation → backlog → delivery | Ouverte |
| VS-UX-CAND-13 | Validation finale visuelle post-correctif | **Attendue** |

---

## 5. Impacts / risques / dette

| Thème | Impact | Risque | Dette |
|-------|--------|--------|-------|
| États ≠ routes | Clarifie delivery | Mésinterprétation future | Doc à préserver |
| 4 actions gate | Gate complet | Densité UI | Polish optionnel |
| Clôture slice | Moins de bruit | Chrome topbar encore générique | Mineure |
| Note 52:34 | Supprimée | — | — |

---

## 6. Gates Morris suivants

| Gate | Objet |
|------|-------|
| **G-VS-UX-FINAL** | Validation finale visuelle post-correctif |
| G-VS-UX-DOC | Commit / push / PR / merge docs 35–37 (+32–34 si lot) |
| G-VS-UX-DEL | Delivery UI (états dans 4 routes P0 — **pas** 10 routes) |
| G-VS-LIVE | Live GPT/Cursor |
| G-VS-LIMIT | Valeur numérique plafond GPT |

---

## 7. Décisions Morris attendues

1. Validation finale du correctif (frames 04/10 + docs).
2. Autoriser ou non versionnement documentaire.
3. **Ne pas** interpréter comme GO delivery / live / 10 routes / merge.

---

## 8. Verdict candidat

`SFIA STUDIO VERTICAL SLICE UX/UI CORRECTED — MORRIS FINAL VALIDATION REQUIRED`

### Interdits

CONCEPTION VALIDATED · POC PROVEN · MVP DEFINED · READY FOR DELIVERY · PRODUCTION READY · FRAMES VALIDATED · TEN ROUTES APPROVED · DOCUMENTATION MERGED · L5 GLOBAL PROVEN


---

# ANNEXE G — Diff utile complet (6 fichiers)

diff --git a/projects/sfia-studio/32-poc-vertical-slice-functional-design.md b/projects/sfia-studio/32-poc-vertical-slice-functional-design.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/32-poc-vertical-slice-functional-design.md
+# SFIA Studio — Conception fonctionnelle du premier vertical slice POC
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Projet** | SFIA Studio |
+| **Document** | `32-poc-vertical-slice-functional-design.md` |
+| **Cycle** | 2 — Conception fonctionnelle |
+| **Profil** | Critical |
+| **Typologie** | DOC / CONCEPTION / POC |
+| **Baseline méthode** | SFIA v2.6 |
+| **Branche conception** | `design/sfia-studio-poc-vertical-slice` (**locale uniquement**) |
+| **Base Git** | `origin/main` @ `eb180638ad334a29a86b9fb757f401814003a0d8` |
+| **Statut** | `validated-for-versioning` — conception fonctionnelle **validée Morris** ; merge PR = GO distinct |
+| **Autorité** | Morris (L0) |
+| **Décisions** | Candidates `VS-CAND-*` uniquement — **aucune validée** |
+| **Code / live** | **Aucun** dans ce cycle |
+
+> Contrat fonctionnel du **premier vertical slice POC** Studio → GPT → gate Morris → harness → Cursor → GPT verdict → décision Morris.
+> **Pas** d’architecture technique, stack, API, BDD, Figma, backlog, delivery, MVP validé ni industrialisation.
+
+---
+
+## 1. Contexte et acquis
+
+### Acquis retenus
+
+| Source | Acquis |
+|--------|--------|
+| `08`–`10` | Acteurs, 12 états, F1–F12, FR/BR, FD-CAND-01…08 **validés** |
+| AF-Option C | Studio ≠ orchestrateur ; Git = vérité durable ; Morris = L0 |
+| POC Option B | Studio → adaptateur fin → harness autonome → ports GPT/Git/Cursor |
+| `#224`–`#225` | Harness-only + spike Cursor sandbox |
+| `#226` / `30`–`31` | GPT live + e2e GPT→Cursor sandbox **prouvé avec réserves** |
+| `#227` | Sync documentaire post-merge |
+
+### Écart motivant ce document
+
+Les spikes prouvent la faisabilité **hors Studio UI**. Le vertical slice conçoit le **premier parcours réellement utilisable depuis SFIA Studio**, sans rouvrir Option B ni AF-Option C.
+
+### Architecture structurante (immuable ici)
+
+```text
+Morris → SFIA Studio (cockpit, vue dérivée)
+      → adaptateur fin sans autorité
+      → harness autonome (gates, policy, journal, preuves)
+      → ports GPT / Git / Cursor bornés
+      → restitution dérivée dans Studio
+```
+
+Toute divergence → `STOP — ARCHITECTURE DECISION REQUIRED`.
+
+---
+
+## 2. Objectif
+
+Permettre à Morris, **depuis SFIA Studio**, de :
+
+1. saisir une demande de démonstration ;
+2. obtenir une qualification GPT réelle contrôlée ;
+3. autoriser (ou refuser) un gate lié au contrat et au HEAD ;
+4. déclencher une exécution Cursor réelle dans une sandbox contrôlée ;
+5. consulter le rapport et les preuves ;
+6. obtenir un verdict GPT candidat ;
+7. décider de la clôture, correction, relance ou abandon.
+
+### Valeur démontrée
+
+Faisabilité du **BeB gouverné** bout-en-bout sous autorité Morris, sans faire de Studio une seconde source de vérité.
+
+---
+
+## 3. Périmètre
+
+### Dans le périmètre (POC vertical slice)
+
+| Élément | Portée |
+|---------|--------|
+| Scénario démo | Créer un Markdown de démonstration dans une sandbox autorisée |
+| Qualification GPT réelle | Proposition structurée visible avant gate |
+| Gate Morris | GO / NO-GO / correction / abandon |
+| Harness | Revalidation déterministe GO + contrat + allowlist |
+| Cursor réel | Sandbox locale uniquement, après GO |
+| Analyse GPT | Verdict candidat post-exécution |
+| Studio | Saisie, affichage, décisions ; **vue dérivée** |
+| Mode dégradé | Harness autonome sans Studio toujours possible |
+
+### Hors périmètre
+
+| Élément | Statut |
+|---------|--------|
+| UI/Figma détaillée | Hors cycle |
+| Choix stack / API / BDD | Interdits |
+| Écriture Git distante (commit/push/PR/merge) | Interdite dans le slice |
+| L5 global | Interdit |
+| MVP produit validé | Non |
+| Industrialisation / CI SFIA Studio | Non |
+| Multi-cycle / multi-projet | Non |
+| Modification `app/**` / harness (ce cycle) | Conception seule |
+
+### Niveaux (distinction obligatoire)
+
+| Niveau | Portée |
+|--------|--------|
+| **POC vertical slice** | Faisabilité du parcours complet gouverné |
+| **MVP candidat** | Première valeur métier future (non validé ici) |
+| **Produit cible** | Couverture durable multi-cycle |
+| **Industrialisation** | Exploitation sécurisée maintenable |
+
+Le vertical slice **n’est pas** un MVP validé.
+
+---
+
+## 4. Acteurs et responsabilités
+
+| Acteur | Responsabilité | Interdit |
+|--------|----------------|----------|
+| **Morris (L0)** | Saisie, revue, GO/NO-GO/correction/abandon, clôture | Déléguer un GO |
+| **SFIA Studio** | Présenter, collecter, afficher états dérivés | Créer une autorité ; inventer un GO |
+| **Adaptateur fin** | Transmettre sans élargir | Arbitrer ; assouplir |
+| **Harness** | Appliquer policy, revalider gate/contrat, journaliser, preuves | Décider un GO |
+| **GPT** | Qualifier / proposer / analyser | Décider ; clôturer ; élargir périmètre |
+| **Cursor** | Exécuter dans le contrat | Arbitrer ; sortir sandbox |
+| **Git** | Vérité durable / Truth Check | — |
+
+---
+
+## 5. Scénario de référence
+
+**Intention utilisateur (candidate VS-CAND-01) :**
+
+> Créer un document Markdown de démonstration dans un dossier sandbox autorisé, comprenant un titre, une synthèse de la demande et une checklist de validation.
+
+Le document n’est qu’un **support de preuve**, pas une fonctionnalité produit finale.
+
+### Préconditions
+
+- Projet SFIA Studio connu ;
+- Git accessible en lecture ;
+- sandbox locale définie et isolée ;
+- secrets non affichés ;
+- flags live conditionnels (hors conception) ;
+- Morris identifié comme autorité.
+
+### Déclencheur
+
+Morris ouvre « Nouvelle demande » dans SFIA Studio et saisit l’intention.
+
+---
+
+## 6. Parcours utilisateur (vue d’ensemble)
+
+Dix étapes fonctionnelles (détail dans `33`) :
+
+1. Nouvelle demande
+2. Qualification en cours
+3. Qualification proposée
+4. Gate Morris
+5. Exécution
+6. Rapport disponible
+7. Analyse GPT
+8. Verdict proposé
+9. Décision Morris
+10. Clôture
+
+---
+
+## 7. Sous-ensemble d’états (réutilisation `08`)
+
+États retenus pour le slice :
+
+`intention_capturée` · `qualification_en_cours` · `qualification_prête` · `attente_gate_morris` · `autorisé` · `en_exécution` · `stoppé` · `rapport_disponible` · `revue_en_cours` · `décision_requise` · `clôturé` · `abandonné`
+
+Le timeout **ne vaut jamais** GO.
+
+Mapping harness (informatif, non conflateur) : `AUTHORIZED` → `EXECUTING` → `PROOF_READY` → `CLOSED` — états techniques parallèles, bridgés par Git/preuves.
+
+---
+
+## 8. Exigences fonctionnelles `VS-FR-*`
+
+| ID | Exigence |
+|----|----------|
+| VS-FR-01 | Studio permet de saisir une demande de slice et d’afficher un `requestId` |
+| VS-FR-02 | Une qualification GPT incomplète ou invalide est rejetée fail-closed |
+| VS-FR-03 | La qualification est entièrement lisible avant tout GO |
+| VS-FR-04 | Morris peut GO, NO-GO, demander correction ou abandonner |
+| VS-FR-05 | Un GO est lié à requestId, contractId, contractHash, branche, HEAD, périmètre, allowlist, horodatage, autorité |
+| VS-FR-06 | Tout changement de contrat, branche, HEAD ou périmètre invalide le GO |
+| VS-FR-07 | Le harness revalide gate + contrat avant Cursor |
+| VS-FR-08 | Cursor n’écrit que dans la sandbox allowlistée |
+| VS-FR-09 | Aucune écriture Git distante dans le slice |
+| VS-FR-10 | STOP Morris est prioritaire et journalisé |
+| VS-FR-11 | Le rapport/preuves sont prérequis à l’analyse GPT |
+| VS-FR-12 | Le verdict GPT est candidat ; Morris clôture |
+| VS-FR-13 | Studio affiche des états dérivés ; Git/preuves priment |
+| VS-FR-14 | Le harness reste utilisable sans Studio |
+| VS-FR-15 | Aucun secret n’est affiché dans Studio ni dans les preuves |
+| VS-FR-16 | Les appels GPT consommés sont visibles (FinOps) sans inventer un coût monétaire |
+| VS-FR-17 | Un review pack incomplet bloque la clôture positive |
+
+---
+
+## 9. Objets fonctionnels (sans schéma BDD)
+
+| Objet | Finalité | Propriétaire |
+|-------|----------|--------------|
+| StudioRequest | Demande saisie | Morris / Studio |
+| QualificationCandidate | Proposition GPT pré-gate | GPT (propose) / Morris (accepte ou corrige) |
+| ExecutionContract | Contrat borné d’exécution | Harness + Morris (via GO) |
+| MorrisGateDecision | GO/NO-GO/correction/abandon | Morris |
+| ExecutionStatus | État d’exécution dérivé | Harness → Studio |
+| ExecutionEvent | Événement journalisé | Harness |
+| CursorExecutionReport | Rapport d’exécution | Cursor/Harness |
+| ReviewPackReference | Référence au pack de preuves | Harness |
+| GptVerdictCandidate | Verdict candidat post-run | GPT |
+| MorrisFinalDecision | Clôture / correction / relance / abandon | Morris |
+| CycleSummary | Synthèse de cycle | Studio (dérivée) |
+
+Règles communes : champs obligatoires, source, sensibilité (pas de secret), cohérence requestId/correlationId/contractId, preuve Git ou runtime.
+
+Détail des champs : voir `33` § données et `34` impacts.
+
+---
+
+## 10. Sécurité / RGPD / FinOps / performance / observabilité
+
+### Sécurité
+
+- Fail closed ; moindre privilège ; allowlist fichiers/actions ; sandbox ; aucune action distante ; STOP prioritaire ; gate revalidé ; secrets jamais affichés.
+
+### RGPD (minimal POC)
+
+- Demande de test **sans** donnée personnelle réelle ;
+- journaux sans secret ;
+- minimisation ;
+- masquage chemins/identités si nécessaire ;
+- durée de conservation = **VS-CAND** à arbitrer (non fixée).
+
+### FinOps
+
+- Appels GPT visibles ;
+- plafond d’appels candidat (à valider) ;
+- **aucun retry automatique** ;
+- coût monétaire **non inventé** ;
+- arrêt possible avant nouvelle consommation.
+
+### Performance (confort POC, pas SLA industriel)
+
+| Phase | Observation |
+|-------|-------------|
+| Qualification GPT | Mesurée séparément |
+| Attente Morris | Humaine, non SLA |
+| Exécution Cursor | Mesurée séparément |
+| Analyse GPT | Mesurée séparément |
+
+Seuils de confort = candidats (ex. timeout Cursor POC déjà observé ~120 s côté spike — **non** imposé comme SLA).
+
+### Observabilité
+
+requestId · correlationId · contractId · eventId · timestamps + fuseau · étapes reconstructibles · statut source · erreur explicite · **aucun faux succès**.
+
+---
+
+## 11. Critères d’acceptation (BeB)
+
+### Critère central
+
+Depuis SFIA Studio, Morris doit pouvoir saisir une demande, contrôler la qualification GPT, autoriser l’exécution, voir Cursor produire le résultat borné, puis obtenir un verdict GPT exploitable **sans** manipulation manuelle du harness hors actions de gate.
+
+### Succès obligatoire
+
+- Parcours nominal 1→10 complété ;
+- GO lié hash+HEAD revalidé ;
+- sandbox respectée ;
+- aucune écriture distante ;
+- aucun secret exposé ;
+- verdict GPT accepté par validateur fonctionnel ;
+- clôture Morris enregistrée ;
+- Studio = vue dérivée ;
+- harness autonome toujours possible.
+
+### Succès avec réserve
+
+- Non-déterminisme GPT documenté ;
+- journalisation commandes Cursor non exhaustive (contrôle post-facto) ;
+- absence de CI SFIA Studio.
+
+### Échec de faisabilité
+
+- Impossible de lier GO au contrat/HEAD ;
+- Studio contourne harness ;
+- Cursor hors sandbox sans détection ;
+- GPT clôture sans Morris.
+
+### Abandon
+
+- NO-GO / abandon Morris à tout gate ;
+- STOP avec reprise ou abandon explicite.
+
+Critères détaillés `VS-AC-*` : voir `33`.
+
+---
+
+## 12. Réserves
+
+1. Pas de CI GitHub Actions pour `projects/sfia-studio/**`
+2. Spike expérimental / scénario unique
+3. Commandes internes Cursor non journalisées une à une
+4. Réseau Cursor Agent non mesuré finement
+5. S-GPT-09 encore en `json_object` (verdict en `json_schema` strict)
+6. Non-déterminisme GPT
+7. Studio UI non livré (conception seule)
+8. Adapter Studio↔harness non spécifié techniquement
+
+---
+
+## 13. Décisions candidates
+
+Voir pack `34` — `VS-CAND-01` … `VS-CAND-12` (**non validées**).
+
+---
+
+## 14. Documents liés
+
+- [`33-poc-vertical-slice-flows-and-rules.md`](./33-poc-vertical-slice-flows-and-rules.md)
+- [`34-poc-vertical-slice-decision-pack.md`](./34-poc-vertical-slice-decision-pack.md)
+- Socle : [`08`](./08-functional-design.md) · [`09`](./09-functional-flows-and-rules.md) · [`10`](./10-functional-decision-pack.md)
+- POC : [`23`](./23-poc-orchestration-technical-architecture.md)–[`28`](./28-poc-orchestration-delivery-gate-pack.md) · [`29`](./29-poc-cursor-real-spike-report.md)–[`31`](./31-poc-gpt-cursor-e2e-spike-report.md)

diff --git a/projects/sfia-studio/33-poc-vertical-slice-flows-and-rules.md b/projects/sfia-studio/33-poc-vertical-slice-flows-and-rules.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/33-poc-vertical-slice-flows-and-rules.md
+# SFIA Studio — Parcours, états et règles du vertical slice POC
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `33-poc-vertical-slice-flows-and-rules.md` |
+| **Complète** | [`32-poc-vertical-slice-functional-design.md`](./32-poc-vertical-slice-functional-design.md) |
+| **Statut** | `validated-for-versioning` — parcours/règles **validés Morris** ; merge PR = GO distinct |
+| **Baseline** | SFIA v2.6 · socle FD `08`–`10` · POC Option B · AF-Option C |
+| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
+
+> Parcours détaillés, transitions, règles `VS-BR-*`, scénarios négatifs et preuves. **Pas** d’API technique.
+
+---
+
+## 1. Parcours nominal — dix étapes
+
+### Étape 1 — Nouvelle demande
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Capturer l’intention de démonstration |
+| Visible | Champ intention ; projet ; requestId généré ; rappel sandbox/no remote |
+| Actions Morris | Saisir ; soumettre ; abandonner |
+| Statut | `intention_capturée` |
+| Préconditions | Studio accessible ; projet connu |
+| Sortie | Soumission → étape 2 |
+| Preuve | StudioRequest horodatée |
+| Critique | Soumettre |
+
+### Étape 2 — Qualification en cours
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Lancer qualification GPT réelle |
+| Visible | Spinner/état ; requestId ; « aucun GO pendant cette phase » |
+| Actions | Attendre ; STOP si disponible côté plateforme |
+| Statut | `qualification_en_cours` |
+| Preuve | event `qualification_started` |
+| Erreurs | GPT indisponible → scénario N1/N9 |
+
+### Étape 3 — Qualification proposée
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Présenter QualificationCandidate complète |
+| Visible | Tous champs obligatoires §4 ; cycle ; profil ; blocs ; allowlist ; stops ; réserves |
+| Actions | Continuer vers gate ; demander correction ; abandonner |
+| Statut | `qualification_prête` → `attente_gate_morris` |
+| Non modifiable sans re-qualification | cycle/profil/allowlist/stops proposés (correction = nouvelle passe) |
+| Preuve | QualificationCandidate validée fail-closed |
+
+### Étape 4 — Gate Morris
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Décision d’autorisation d’exécution |
+| Visible | Dossier gate §5 ; Truth Check résumé ; contractHash ; HEAD ; branche |
+| Actions | **GO** · **NO-GO** · **Demander correction** · **Abandonner** |
+| Statut | `attente_gate_morris` → `autorisé` / retour / `abandonné` |
+| Preuve | MorrisGateDecision ancrée |
+| Critique | GO |
+
+### Étape 5 — Exécution
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Cursor réel dans sandbox après revalidation harness |
+| Visible | workspace ; HEAD ; contrat ; allowlist ; début ; durée ; phase ; STOP |
+| Actions | STOP Morris |
+| Statut | `autorisé` → `en_exécution` |
+| Interdit | Fausse progression inventée |
+| Preuve | ExecutionEvents |
+
+### Étape 6 — Rapport disponible
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Afficher résultat d’exécution |
+| Visible | statut ; fichiers touchés ; aperçu sanitisé ; erreurs ; refs preuves/review pack |
+| Statut | `rapport_disponible` |
+| Preuve | CursorExecutionReport + ReviewPackReference |
+
+### Étape 7 — Analyse GPT
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Lancer analyse GPT du paquet de preuves |
+| Visible | état analyse ; compteur appels |
+| Statut | `revue_en_cours` |
+| Précondition | Rapport + pack complets |
+
+### Étape 8 — Verdict proposé
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Afficher GptVerdictCandidate |
+| Visible | prouvé / non prouvé / écarts / risques / réserves / décisions requises / claims interdits / verdict proposé |
+| Statut | `décision_requise` |
+| Interdit | Bouton « clôturer automatiquement » |
+
+### Étape 9 — Décision Morris
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Décision finale humaine |
+| Actions | Accepter et clôturer · Demander correction · Relancer sous nouveau GO · Abandonner |
+| Preuve | MorrisFinalDecision |
+
+### Étape 10 — Clôture
+
+| Champ | Contenu |
+|-------|---------|
+| Objectif | Figurer CycleSummary dérivé |
+| Statut | `clôturé` ou `abandonné` |
+| Visible | résumé ; liens preuves ; réserves ; « non production-ready » |
+
+---
+
+## 2. États et transitions
+
+| De | Vers | Déclencheur | Gate | Échec |
+|----|------|-------------|------|-------|
+| — | `intention_capturée` | Saisie Morris | non | — |
+| `intention_capturée` | `qualification_en_cours` | Soumettre | non | validation locale |
+| `qualification_en_cours` | `qualification_prête` | GPT OK + validateur | non | → correction / abandon |
+| `qualification_prête` | `attente_gate_morris` | Morris « continuer » | non | — |
+| `attente_gate_morris` | `autorisé` | **GO** | oui | — |
+| `attente_gate_morris` | `qualification_en_cours` | Correction | non | — |
+| `attente_gate_morris` | `abandonné` | NO-GO / Abandon | oui | — |
+| `autorisé` | `en_exécution` | Harness revalide + spawn | GO revalidé | → `stoppé` / erreur |
+| `en_exécution` | `stoppé` | STOP / erreur / timeout | — | reprise ou abandon |
+| `en_exécution` | `rapport_disponible` | Fin exécution | — | rapport incomplet |
+| `rapport_disponible` | `revue_en_cours` | Lancer analyse | non | pack incomplet |
+| `revue_en_cours` | `décision_requise` | Verdict GPT valide | non | verdict invalide |
+| `décision_requise` | `clôturé` | Accepter | décision finale | — |
+| `décision_requise` | `qualification_en_cours` | Correction / relance | **nouveau GO** si re-exec | — |
+| `décision_requise` | `abandonné` | Abandon | oui | — |
+| `stoppé` | `attente_gate_morris` / `abandonné` | Reprise / abandon | **nouveau GO** si re-exec | — |
+
+**Règle :** timeout ≠ GO. **Règle :** GO invalide si contractHash, HEAD, branche ou allowlist changent.
+
+---
+
+## 3. Contrat fonctionnel — Qualification GPT
+
+### Champs obligatoires (QualificationCandidate)
+
+| Champ | Visible Morris | Modifiable sans re-qualif |
+|-------|----------------|---------------------------|
+| requestId / correlationId | oui | non |
+| objectif reformulé | oui | non (correction = re-qualif) |
+| hypothèses / observations | oui | non |
+| cycle SFIA proposé | oui | non |
+| profil + justification | oui | non |
+| blocs activés / désactivés | oui | non |
+| sources nécessaires | oui | non |
+| gates Morris | oui | non |
+| périmètre / hors périmètre | oui | non |
+| fichiers autorisés / interdits | oui | non |
+| stop conditions | oui | non |
+| critères succès / échec | oui | non |
+| réserves | oui | non |
+| décisions requises | oui | non |
+| verdict attendu (indicatif) | oui | non |
+| schemaVersion / métadonnées modèle | oui (expérimental) | non |
+
+### Règles
+
+- Sortie incomplète → **rejet fail-closed** (VS-BR-01).
+- Ambiguïté → correction ou abandon, **pas** de fallback permissif (VS-BR-02).
+- Relance qualification = nouvelle consommation FinOps, jamais silencieuse (VS-BR-03).
+- GPT recommande ; Morris décide (VS-BR-04).
+
+---
+
+## 4. Gate Morris — dossier de décision
+
+### Actions
+
+`GO` · `NO-GO` · `Demander une correction` · `Abandonner`
+
+### Ancrage obligatoire du GO
+
+requestId · contractId · contractHash · branche · HEAD · périmètre · fichiers autorisés · actions autorisées · date/heure/fuseau · identité autorité · validité éventuelle (candidat)
+
+### Messages utilisateur (fonctionnels)
+
+| Situation | Message type |
+|-----------|--------------|
+| HEAD changé | « Le HEAD a changé depuis la qualification. Le GO précédent est invalide. Nouvelle qualification ou Truth Check requis. » |
+| Contrat changé | « Le contrat a changé. Relancez la qualification puis un nouveau gate. » |
+| Fichier hors allowlist | « Un fichier hors allowlist a été détecté. Exécution refusée. » |
+| Action interdite | « Action interdite par le contrat. Aucune exécution. » |
+| Rapport incomplet | « Rapport ou preuves incomplets. Analyse GPT bloquée. » |
+| Cursor échoue | « Exécution Cursor en échec. Consultez le rapport. Décision Morris requise. » |
+| GPT invalide | « Sortie GPT rejetée (fail-closed). Correction ou abandon. » |
+
+---
+
+## 5. Exécution Cursor (fonctionnel)
+
+### Avant
+
+Afficher : workspace sandbox · branche · HEAD · objectif · contrat · allowlist · commandes/actions interdites · gate actif · contractHash.
+
+### Pendant
+
+État `en_exécution` · début · durée · phase courante (si connue) · STOP · événements · **aucune** barre de progression inventée.
+
+### Après
+
+Statut · fichiers créés/modifiés (sandbox) · actions observables · erreurs · rapport · review pack · preuves · écarts au contrat · confirmation aucune écriture distante.
+
+**Ne pas** inventer une API Cursor : mécanisme = port harness existant / CLI agent observé dans `29`/`31`.
+
+---
+
+## 6. Rapport et verdict GPT
+
+### Paquet minimal pour analyse
+
+demande · qualification · contrat · décision Morris · Truth Check · journal · fichiers touchés · contenu utile sanitisé · tests éventuels · erreurs · stop · réserves · rapport Cursor · review pack.
+
+### GptVerdictCandidate
+
+observations · prouvé · non prouvé · conformité contrat · écarts · risques · réserves · recommandations · décisions Morris requises · claims interdits détectés · verdict proposé.
+
+### Décisions Morris post-verdict
+
+Accepter et clôturer · Demander correction · Relancer sous **nouveau GO** · Abandonner.
+
+GPT **ne clôture pas**.
+
+---
+
+## 7. Scénarios négatifs (N1–N16)
+
+| ID | Scénario | Détection | Comportement | Reprise | Nouveau GO |
+|----|----------|-----------|--------------|---------|------------|
+| N1 | Qualif GPT invalide | Validateur | Rejet ; message ; pas d’exécution | Re-qualif | non (pas encore) |
+| N2 | Sources Git indisponibles | Truth Check | STOP lecture | Réessayer quand Git OK | non |
+| N3 | HEAD modifié après qualif | Comparaison HEAD | Invalider GO/contrat | Re-qualif | oui si exec |
+| N4 | GO absent | Harness | Refus spawn | Gate | oui |
+| N5 | GO invalide/expiré | Revalidation | Refus | Nouveau gate | oui |
+| N6 | Contrat modifié après GO | Hash | Refus | Re-qualif + gate | oui |
+| N7 | Fichier hors allowlist | Policy | STOP / refus | Correction contrat | oui |
+| N8 | Commande/action interdite | Policy / post-check | STOP | Correction | oui |
+| N9 | Cursor indisponible | Port | Échec explicite | Retry manuel sous GO | oui |
+| N10 | Cursor code erreur | exit ≠ 0 | Rapport d’échec | Décision Morris | selon reprise |
+| N11 | Timeout | Timer | `stoppé` ; timeout ≠ GO | Reprise sous GO | oui |
+| N12 | STOP Morris | Action | `stoppé` immédiat | Reprise/abandon | oui si re-exec |
+| N13 | Rapport absent | Check | Bloque analyse | Relancer collecte | — |
+| N14 | Review pack incomplet | Check | Bloque clôture positive | Compléter | — |
+| N15 | Verdict GPT invalide | Validateur | Rejet | Relance analyse ou abandon | FinOps |
+| N16 | Perte session Studio | Reprise UI | Recharger états **dérivés** depuis preuves/Git | Continuer sans inventer | selon état |
+
+Chaque scénario journalise une preuve (`ExecutionEvent` / note).
+
+---
+
+## 8. Matrice gate / nouveau GO
+
+| Situation | Nouveau GO requis ? |
+|-----------|---------------------|
+| Re-qualification seule | non |
+| Première exécution | oui (GO initial) |
+| Reprise après STOP/erreur avec re-exec | **oui** |
+| Relance après verdict « correction » avec re-exec | **oui** |
+| Clôture / abandon | décision finale (pas GO Cursor) |
+| Lecture preuves seule | non |
+
+---
+
+## 9. Règles métier `VS-BR-*`
+
+| ID | Règle |
+|----|-------|
+| VS-BR-01 | Sortie GPT hors contrat → rejet fail-closed |
+| VS-BR-02 | Pas de fallback permissif |
+| VS-BR-03 | Pas de retry automatique GPT/Cursor |
+| VS-BR-04 | GPT ne décide pas ; Morris décide |
+| VS-BR-05 | GO lié à contractHash + HEAD + branche + allowlist |
+| VS-BR-06 | Changement hash/HEAD/branche/allowlist → GO invalide |
+| VS-BR-07 | Harness revalide avant spawn |
+| VS-BR-08 | Cursor sandbox only ; hors allowlist → STOP |
+| VS-BR-09 | Aucune écriture Git distante dans le slice |
+| VS-BR-10 | STOP prioritaire |
+| VS-BR-11 | Timeout ≠ GO |
+| VS-BR-12 | Studio n’est pas source de vérité |
+| VS-BR-13 | Harness autonome sans Studio demeure possible |
+| VS-BR-14 | Verdict GPT = candidat |
+| VS-BR-15 | Review pack incomplet → pas de clôture positive |
+| VS-BR-16 | Secrets jamais affichés |
+| VS-BR-17 | Claims production-ready / merge auto / L5 = interdits |
+
+---
+
+## 10. Critères d’acceptation testables `VS-AC-*`
+
+| ID | Critère |
+|----|---------|
+| VS-AC-01 | Parcours nominal 1→10 réalisable depuis Studio |
+| VS-AC-02 | GO refusé si HEAD ≠ HEAD ancré |
+| VS-AC-03 | GO refusé si contractHash ≠ hash courant |
+| VS-AC-04 | Fichier hors allowlist → pas de succès d’exécution |
+| VS-AC-05 | STOP interrompt et journalise |
+| VS-AC-06 | Sans rapport/pack → pas d’analyse GPT réussie |
+| VS-AC-07 | Verdict invalide → pas de clôture auto |
+| VS-AC-08 | Clôture uniquement via MorrisFinalDecision |
+| VS-AC-09 | Aucune preuve d’écriture distante |
+| VS-AC-10 | Aucun secret dans UI/preuves |
+| VS-AC-11 | États Studio cohérents avec preuves (vue dérivée) |
+| VS-AC-12 | Même scénario exécutable via harness sans Studio |
+
+---
+
+## 11. Preuves attendues (fonctionnelles)
+
+| Étape | Preuve |
+|-------|--------|
+| Demande | StudioRequest |
+| Qualif | QualificationCandidate + observation GPT |
+| Gate | MorrisGateDecision |
+| Exec | ExecutionEvents + CursorExecutionReport |
+| Pack | ReviewPackReference |
+| Verdict | GptVerdictCandidate |
+| Clôture | MorrisFinalDecision + CycleSummary |
+
+---
+
+## 12. Données — champs clés (extrait)
+
+### ExecutionContract (fonctionnel)
+
+contractId · contractHash · requestId · correlationId · objective · allowedReadPaths · allowedWritePaths · deniedPaths · allowedActions · forbiddenActions · stopConditions · requiredGates · gitEffect=`none-remote` · workspaceSandbox · initiatedBy · initiatedAt · validityWindow?
+
+### MorrisGateDecision
+
+decision ∈ {GO, NO_GO, CORRECTION, ABANDON} · requestId · contractId · contractHash · branch · head · actor · decidedAt · timezone · rationale?
+
+---
+
+## 13. Challenge (auto-contrôle)
+
+| Question | Réponse conception |
+|----------|-------------------|
+| Utile maintenant ? | Oui — débloque UX/backlog/delivery sans réinterprétation dangereuse |
+| Preuve BeB couverte ? | Oui — Studio→…→clôture conçue ; spikes = preuve technique partielle hors UI |
+| Trop large ? | Borné à un scénario Markdown sandbox |
+| Plus simple ? | Harness-only déjà prouvé ; slice ajoute Studio gouverné |
+| Dérive MVP ? | Explicitement non — niveaux §32 |
+| Gate visible ? | Oui — étape 4 + revalidation |
+| Option B respectée ? | Oui |

diff --git a/projects/sfia-studio/34-poc-vertical-slice-decision-pack.md b/projects/sfia-studio/34-poc-vertical-slice-decision-pack.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/34-poc-vertical-slice-decision-pack.md
+# SFIA Studio — Decision pack vertical slice POC (candidat)
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Projet** | SFIA Studio |
+| **Document** | `34-poc-vertical-slice-decision-pack.md` |
+| **Cycle** | 2 — Conception fonctionnelle (vertical slice POC) |
+| **Profil** | Critical |
+| **Typologie** | DOC / CONCEPTION / POC |
+| **Baseline** | SFIA v2.6 |
+| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
+| **Branche conception** | `design/sfia-studio-poc-vertical-slice` (**locale**) |
+| **Statut** | `validated-for-versioning` — VS-CAND-01…13 & 15 **validées** ; VS-CAND-14 **validée avec réserve** ; merge PR = GO distinct |
+| **Autorité** | Morris (L0) |
+| **Complète** | [`32`](./32-poc-vertical-slice-functional-design.md) · [`33`](./33-poc-vertical-slice-flows-and-rules.md) |
+
+> Pack de décisions du vertical slice. VS-CAND-01…13 et 15 **validées Morris** ; VS-CAND-14 **validée avec réserve** (plafond obligatoire, valeur **À définir**, aucun retry auto).
+> Merge, delivery, live et backlog restent soumis à des GO distincts.
+
+---
+
+## 1. Synthèse
+
+Ce cycle conçoit le **premier vertical slice POC utilisable depuis SFIA Studio** :
+
+Demande → qualification GPT réelle → gate Morris → harness → Cursor sandbox → preuves → analyse GPT → verdict candidat → décision Morris.
+
+Il **ne** livre pas de code, **ne** prouve pas le BeB UI, **ne** définit pas le MVP, **ne** rouvre pas Option B / AF-Option C.
+
+| Livrable | Rôle |
+|----------|------|
+| `32` | Contrat fonctionnel du slice (périmètre, FR, objets, AC) |
+| `33` | Parcours, états, BR, scénarios négatifs, preuves |
+| `34` | Ce pack — observations, candidats, séquencement |
+
+---
+
+## 2. Observations
+
+1. Les spikes `#226` / docs `29`–`31` prouvent GPT + Cursor **hors Studio UI**, avec réserves.
+2. Le gap restant est **fonctionnel UX gouverné** : Studio comme cockpit / vue dérivée, pas comme orchestrateur.
+3. Le socle `08`–`10` (FD-CAND validés) reste la base ; ce slice en est un **sous-ensemble POC** explicite.
+4. Le scénario Markdown sandbox est un **support de preuve**, pas une feature produit finale.
+5. Les risques majeurs sont : dérive MVP, contournement gate, seconde vérité Studio, écriture distante, retry permissif, claims « prêt ».
+
+---
+
+## 3. Hypothèses
+
+| ID | Hypothèse |
+|----|-----------|
+| H1 | Architecture POC Option B reste inchangée |
+| H2 | Morris reste seule autorité L0 ; GPT/Cursor sans pouvoir de décision |
+| H3 | Git reste source de vérité durable ; Studio = vue dérivée |
+| H4 | Aucune écriture Git distante dans le premier vertical slice |
+| H5 | Exécution Cursor limitée à une sandbox allowlistée |
+| H6 | Harness autonome sans Studio reste possible |
+| H7 | Demande de démo sans donnée personnelle |
+| H8 | Validation des VS-CAND précède UX/UI, backlog et delivery |
+
+---
+
+## 4. Options éventuelles (non tranchées techniquement)
+
+| Sujet | Option A | Option B (recommandée conception) | Note |
+|-------|----------|-----------------------------------|------|
+| Scénario preuve | Multi-fichiers / multi-projets | **Un Markdown sandbox** | Moins de dette |
+| Gate validity | GO sans fenêtre | GO + fenêtre de validité candidate | À arbitrer (VS-CAND-04) |
+| Affichage événements | Polling UI | Stream dérivé | Non figé tech |
+| Conservation logs | Indéfinie | Durée limitée candidate | RGPD / VS-CAND futur |
+
+Aucune option ci-dessus ne sélectionne stack, BDD, ORM ou protocole.
+
+---
+
+## 5. Recommandations (non validées)
+
+1. Valider d’abord les `VS-CAND-01`…`12` avant tout cycle UX/UI.
+2. Garder le scénario **minimal** (Markdown sandbox) pour le BeB.
+3. Exiger ancrage GO = contractHash + HEAD + branche + allowlist.
+4. Conserver harness autonome comme chemin de contrôle.
+5. Interdire claims MVP / production / L5 / « Studio complete ».
+6. Enchaîner ensuite : UX/UI → backlog → delivery (sous GO distincts).
+
+---
+
+## 6. Décisions candidates `VS-CAND-*`
+
+| ID | Décision candidate | Impact | Risque si non tranché | Dette si accepté |
+|----|-------------------|--------|----------------------|------------------|
+| **VS-CAND-01** | Scénario démo = Markdown sandbox (titre, synthèse, checklist) | Borne le BeB | Scénario flou → dérive | Faible |
+| **VS-CAND-02** | Parcours utilisateur en **dix** étapes (Nouvelle demande → Clôture) | Cadre UX | Ambiguïté écrans | Faible |
+| **VS-CAND-03** | Qualification GPT **visible** avant tout gate d’exécution | Contrôle humain | GO aveugle | Faible |
+| **VS-CAND-04** | GO lié à contractHash + Git HEAD (+ branche + allowlist) | Invalidation stricte | Contournement / stale GO | Faible (discipline) |
+| **VS-CAND-05** | Studio = vue dérivée ; harness = autorité d’application des gates | Option B | Studio orchestrateur | Faible |
+| **VS-CAND-06** | Aucune écriture Git distante dans le slice | Sécurité | Fuite périmètre | Faible |
+| **VS-CAND-07** | Cursor réel **uniquement** sandbox après GO revalidé | Bornage | Cursor libre | Moyenne (ops) |
+| **VS-CAND-08** | Verdict GPT = candidat ; clôture = Morris | Autorité | Clôture auto | Faible |
+| **VS-CAND-09** | STOP prioritaire (timeout ≠ GO) | Sécurité | Exécution zombie | Faible |
+| **VS-CAND-10** | Mode harness autonome conservé | Résilience | Dépendance UI | Faible |
+| **VS-CAND-11** | Critères de succès BeB = `VS-AC-*` + critère central doc `32` | Acceptation | « Succès » flou | Faible |
+| **VS-CAND-12** | Séquencement post-validation : UX/UI → backlog → delivery | Ordre cycles | Delivery trop tôt | Faible |
+
+### Compléments candidats (si nécessaires)
+
+| ID | Décision candidate | Pourquoi |
+|----|-------------------|----------|
+| **VS-CAND-13** | Demande de test sans donnée personnelle ; journaux sans secret | RGPD minimal |
+| **VS-CAND-14** | Plafond d’appels GPT candidat + pas de retry auto | FinOps |
+| **VS-CAND-15** | Identifiants correlation (requestId, contractId, eventId) obligatoires en UI/preuves | Observabilité |
+
+---
+
+## 7. Impacts / risques / dette
+
+| Thème | Impact | Risque | Dette |
+|-------|--------|--------|-------|
+| Conception Critical | Documents structurants pour UX/delivery | Sur-spécification | Maintenir alignement `32`–`34` vs spikes |
+| Gates stricts | Sécurité BeB | Friction Morris | Discipline GO |
+| Sandbox only | Preuve limitée | Sous-estimer prod | Acceptable pour POC |
+| Pas de remote Git | Pas de merge auto | Moins « wow » démo | Volontaire |
+| Studio dérivé | Complexité UX sync | États désync | Reprise N16 |
+
+---
+
+## 8. Proposition de validation Morris
+
+Morris est invité à **valider ou refuser** séparément chaque `VS-CAND-*` (ou un lot explicite), **sans** autoriser :
+
+- commit / push / PR / merge des docs `32`–`34` ;
+- UX/UI, backlog, delivery ;
+- modification `app/**` ou harness ;
+- exécution OpenAI / Cursor réelle ;
+- CI/CD, MVP, L5, industrialisation.
+
+Effet attendu d’une validation conception : **autorisation** d’un cycle suivant (typiquement UX/UI ou versionnement documentaire sous GO distinct).
+
+---
+
+## 9. Gates suivants (GO distincts requis)
+
+| Gate | Objet |
+|------|-------|
+| G-VS-VAL | Validation `VS-CAND-*` |
+| G-VS-DOC | Commit / push / PR / merge docs `32`–`34` |
+| G-VS-UX | Cycle UX/UI visuelle |
+| G-VS-BL | Backlog delivery |
+| G-VS-DEL | Delivery / code Studio+adaptateur |
+| G-VS-LIVE | OpenAI / Cursor live |
+| G-VS-CI | CI/CD |
+| G-VS-MVP | Définition MVP |
+| G-VS-IND | Industrialisation / L5 |
+
+---
+
+## 10. Séquencement candidat
+
+```text
+1. Validation conception (VS-CAND)     ← Morris — GO requis
+2. (Optionnel) versionnement docs 32–34
+3. UX/UI (écrans du parcours 10 étapes)
+4. Backlog borné vertical slice
+5. Delivery (app + adaptateur fin — hors harness authority)
+6. Preuve BeB live sous GO live
+```
+
+Ordre recommandé : **validation → UX/UI → backlog → delivery**.
+Ne pas lancer delivery avant validation des candidats.
+
+---
+
+## 11. Challenge (auto-contrôle)
+
+| Question | Verdict conception |
+|----------|-------------------|
+| Utile maintenant ? | Oui |
+| Preuve BeB conçue ? | Oui (exécution réelle = cycles suivants) |
+| Dette créée ? | Documentaire limitée |
+| Trop large ? | Non — scénario unique sandbox |
+| Plus simple ? | Harness-only déjà fait ; slice = Studio gouverné |
+| Dérive MVP ? | Explicitement bornée |
+| Gate visible ? | Oui |
+| Option B ? | Respectée |
+
+---
+
+## 12. Verdict candidat (cycle conception)
+
+`SFIA STUDIO VERTICAL SLICE FUNCTIONAL DESIGN READY — MORRIS VALIDATION REQUIRED`
+
+### Interdits (non applicables)
+
+CONCEPTION VALIDATED · POC PROVEN · MVP DEFINED · READY FOR DELIVERY · PRODUCTION READY · STUDIO COMPLETE · API INTEGRATED · CURSOR INTEGRATED · DOCUMENTATION MERGED · L5 GLOBAL PROVEN
+
+---
+
+## 13. Décisions Morris attendues
+
+1. Valider / amender / refuser `VS-CAND-01`…`15` (ou lot).
+2. Autoriser ou non le versionnement documentaire.
+3. Sélectionner le cycle suivant (UX/UI recommandé si validation).
+4. **Ne pas** interpréter ce pack comme GO live, delivery ou merge.

diff --git a/projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md b/projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md
+# SFIA Studio — Contrat UX/UI du vertical slice POC
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Projet** | SFIA Studio |
+| **Document** | `35-poc-vertical-slice-ux-ui-contract.md` |
+| **Cycle** | 4 — UX/UI |
+| **Profil** | Standard |
+| **Typologie** | DOC / UX |
+| **Baseline** | SFIA v2.6 |
+| **Branche** | `design/sfia-studio-poc-vertical-slice` (**locale**) |
+| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
+| **Statut** | `validated-for-versioning` — UX/UI + correctif **validés Morris** ; merge PR = GO distinct |
+| **Figma fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
+| **Page source** | `UX-B — P0` |
+| **Page créée** | `UX-B — POC Vertical Slice` |
+| **Correctif** | GO UX/UI correctif borné — dix états / Abandonner / clôture slice |
+| **Code / live** | **Aucun** |
+
+> Contrat UX/UI du parcours gouverné en **dix états fonctionnels** (storyboard), **pas dix routes**.
+> Continuité visuelle Product premium (P0). Les **quatre vues P0** restent la structure applicative de référence.
+> Frames VS-UX = storyboard validé Morris sur le fond. Ne pas modifier les frames P0. Merge PR = GO distinct.
+
+---
+
+## 1. Décisions Morris appliquées (amont)
+
+| ID | Statut appliqué |
+|----|-----------------|
+| VS-CAND-01 … VS-CAND-13 | **VALIDÉES** |
+| VS-CAND-15 | **VALIDÉE** |
+| VS-CAND-14 | **VALIDÉE AVEC RÉSERVE** — plafond GPT obligatoire, valeur numérique **À définir** (non inventée) |
+
+Architecture Option B, Git = vérité, Morris L0, GPT ≠ décision, Cursor sandbox borné : **maintenus**.
+
+### Correctif Morris appliqué (ce cycle)
+
+| Décision | Statut |
+|----------|--------|
+| Dix frames = **dix états** de parcours, **pas dix routes** | **VALIDÉE / appliquée** |
+| Quatre vues P0 = structure produit de référence | **VALIDÉE / appliquée** |
+| Action **Abandonner** explicite dans le gate Morris | **VALIDÉE / appliquée** |
+| Clôture spécifique au vertical slice (sans portfolio hors contexte) | **VALIDÉE / appliquée** |
+
+---
+
+## 1bis. Modèle de navigation — dix états, quatre vues
+
+**Règle dure :** les frames VS-UX-01…10 forment un **storyboard d’états fonctionnels**. Elles **ne constituent pas** dix nouvelles routes applicatives. Toute nouvelle route = arbitrage Morris distinct.
+
+| Vue applicative P0 (référence) | États VS-UX couverts | Mode delivery cible |
+|--------------------------------|----------------------|---------------------|
+| **Nouvelle demande** (P0-00C) | VS-UX-01, VS-UX-02, VS-UX-03 | États / panneaux / transitions dans la route existante |
+| **Décision Morris / Gate** (P0-03C) | VS-UX-04 | Gate à 4 actions dans la vue décision |
+| **Cycle actif** (P0-02C) | VS-UX-05, VS-UX-06, VS-UX-07, VS-UX-08 | Stepper / variantes d’état |
+| **Décision Morris finale** (P0-03C) | VS-UX-09 | Même famille « décision », phase post-verdict |
+| **Vue synthèse / clôture** (P0-01C) | VS-UX-10 | Synthèse **du slice courant** uniquement |
+
+---
+
+## 2. Contrat visuel Figma extrait
+
+| Élément | Valeur observée / retenue |
+|---------|---------------------------|
+| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
+| **page source** | `UX-B — P0` (`0:1`) |
+| **frames sources** | P0-00C `19:2` · P0-01C `22:2` · P0-02C `22:133` · P0-03C `22:270` |
+| **dimensions** | **1440 × 1024** (confirmé MCP sur les quatre frames) |
+| **shell général** | Product premium — fond clair `#f6f9ff` / `#f6f9fe`, ink `#141c30` |
+| **rail utilitaire** | ~64 px ; brand « S » ; icônes nav ; avatar / pill bas ; **aucun GO** |
+| **topbar** | Eyebrow `SFIA STUDIO` ; titre workspace ; pills statut ; onglets ; CTA global non destructif |
+| **canvas** | Hero + zone métier (formulaire / stepper / evidence / options) |
+| **panneau copilote** | ~334–340 px ; résumé + suggestions **≠ décision** ; composer |
+| **grille / colonnes** | Flush : canvas ~972 px + copilote 340 px ; Floating (00C) : workspace 968 + copilote 334 |
+| **spacings clés** | 8 / 12 / 16 / 20 / 24 / 28 px ; rayons 12 / 16 / 20 / 24 |
+| **typographies** | Inter (app) ; eyebrow meta 11–12 px ; titres hero ~24–29 px ; body 15–16 px |
+| **couleurs / tokens** | Blue `#3863f5` · Purple `#7a4df5` · Green `#21c28a` · Orange `#faa629` · Pink `#f25794` · Navy heroes · Brand accent gradient |
+| **cartes** | Surfaces blanches, ombres soft, accent bar métriques |
+| **badges / statuts** | Pills (draft, ready, candidat, risque, Git, mode) — sens **aussi** textuel |
+| **CTA** | Primaire plein ; secondaire outline ; STOP / danger distinct |
+| **styles de gates** | Options décision + dossier preuves ; confirmation explicite |
+| **preuves** | Listes evidence / inspector / trust blocks |
+| **loading / erreur / STOP / vide** | P0 partiel (STOP box) ; **à étendre** sur VS (documenté ci-dessous) |
+| **écarts connus** | App P0 = 4 écrans ; slice = 10 ; loading/error absents en app |
+| **incertitudes** | Tokens Figma variables vides côté MCP — hex issus design context / `tokens.css` |
+| **impacts VS** | Cloner shell P0 ; adapter canvas par étape ; ne pas toucher `19:2`/`22:*` P0 |
+
+### Limites de lecture MCP
+
+- `get_metadata` + `get_screenshot` : structure et dimensions confirmées.
+- Variables Figma : historiquement vides ; tokens app `styles/tokens.css` comme relais documentaire.
+- Textes exacts : partiellement masqués en metadata (noms de layers) — copy VS renseignée sur clones.
+
+---
+
+## 3. Objectif UX
+
+Permettre à Morris de **voir et contrôler** le parcours Studio → GPT → gate → harness/Cursor → rapport → GPT verdict → décision → clôture, sans faire de Studio une source de vérité et sans auto-GO.
+
+---
+
+## 4. Matrice parcours → état (frame) → vue P0 → autorité
+
+| État | Frame | Vue P0 de rattachement | Autorité action | Preuve UI |
+|------|-------|------------------------|-----------------|-----------|
+| 1 Nouvelle demande | VS-UX-01 | Nouvelle demande | Morris saisit | StudioRequest |
+| 2 Qualification en cours | VS-UX-02 | Nouvelle demande | Système GPT ; STOP Morris | event qualif |
+| 3 Qualification proposée | VS-UX-03 | Nouvelle demande | Morris revue | QualificationCandidate |
+| 4 Gate Morris | VS-UX-04 | Décision Morris / Gate | **Morris seul** | MorrisGateDecision |
+| 5 Exécution | VS-UX-05 | Cycle actif | Harness/Cursor ; STOP Morris | ExecutionEvents |
+| 6 Rapport | VS-UX-06 | Cycle actif | Morris lit | CursorExecutionReport |
+| 7 Analyse GPT | VS-UX-07 | Cycle actif | GPT analyse ; STOP conso | event analyse |
+| 8 Verdict proposé | VS-UX-08 | Cycle actif | GPT candidat | GptVerdictCandidate |
+| 9 Décision Morris | VS-UX-09 | Décision Morris finale | **Morris seul** | MorrisFinalDecision |
+| 10 Clôture | VS-UX-10 | Vue synthèse / clôture | Affichage dérivé | CycleSummary |
+
+> **Pas de routes nouvelles** : le delivery privilégie états, variantes, panneaux et transitions dans les quatre vues P0.
+
+---
+
+## 5. Exigences UX `VS-UX-FR-*`
+
+| ID | Exigence |
+|----|----------|
+| VS-UX-FR-01 | Dix frames = **dix états** storyboard 1440×1024 ; **pas** dix routes ; pas de fusion silencieuse |
+| VS-UX-FR-02 | Shell P0 conservé (rail / topbar / canvas / copilote) |
+| VS-UX-FR-03 | Copilote jamais présenté comme décision Morris |
+| VS-UX-FR-04 | GO visible uniquement sur VS-UX-04 ; ancré hash/HEAD/branche/allowlist |
+| VS-UX-FR-05 | Invalidation GO représentée (bandeau / état invalide) — **distincte** d’Abandonner |
+| VS-UX-FR-06 | STOP prioritaire et accessible clavier — **≠** Abandonner / NO-GO |
+| VS-UX-FR-07 | FinOps : appels GPT séparés (qualif ≠ analyse) ; plafond « À définir » ; pas de retry auto |
+| VS-UX-FR-08 | Verdict GPT étiqueté **candidat** |
+| VS-UX-FR-09 | Clôture uniquement via décision Morris (VS-UX-09→10) |
+| VS-UX-FR-10 | Aucun secret / token / PII réelle dans les maquettes |
+| VS-UX-FR-11 | Aucune écriture Git distante groupée dans les CTA |
+| VS-UX-FR-12 | Source de statut (Git / harness / dérivé Studio) lisible |
+| VS-UX-FR-13 | Fail-closed GPT visible (erreur + pas de suite) |
+| VS-UX-FR-14 | Frames P0 non modifiées ; VS non « baseline validée » |
+| VS-UX-FR-15 | Gate Morris : **quatre** actions explicites GO · NO-GO · Demander une correction · **Abandonner** |
+| VS-UX-FR-16 | Abandonner : visible, destructif, confirmation, conséquence « état abandonné », pas d’action Git distante |
+| VS-UX-FR-17 | Clôture (VS-UX-10) : **uniquement** données du vertical slice courant — **aucun** portfolio multi-projet hors contexte |
+
+---
+
+## 6. États transverses (contrat)
+
+| État | Représentation | Frames concernées |
+|------|----------------|-------------------|
+| Loading | Phase active + spinner textuel + compteur appel | 02, 05, 07 |
+| Erreur fail-closed | Banner erreur + CTA correction/abandon | 02, 07 (+ autres) |
+| STOP | CTA danger prioritaire + journal | 02, 05, 07 |
+| GO invalide | Banner « GO invalide — HEAD/contrat changé » | 04, 05 |
+| Vide / incomplet | Message « rapport/pack incomplet » | 06, 08 |
+| Candidat | Badge « Candidat GPT » | 03, 08 |
+
+---
+
+## 7. Accessibilité (contrat cible — pas un audit)
+
+Pour **chaque** frame VS-UX :
+
+| Critère | Contrat |
+|---------|---------|
+| Ordre de tabulation | Rail → topbar → canvas → actions → copilote |
+| Focus visible | Outline blue `#3863f5` (app) |
+| Labels explicites | Inputs / CTA avec nom accessible |
+| CTA | Nom = verbe + objet (ex. « Qualifier la demande ») |
+| Couleur | Statuts aussi textuels / icônes |
+| Contraste | Cible WCAG 2.2 AA |
+| Annonce états | Live region pour loading / erreur / STOP |
+| Erreurs | Associées au champ / phase |
+| Gates | Conséquences textuelles sous chaque option |
+| STOP | Toujours atteignable au clavier dès phases 02/05/07 |
+| **Abandonner** | Nom accessible explicite « Abandonner le cycle » ; danger **aussi** textuel (pas couleur seule) ; confirmation clavier ; message de conséquence ; focus visible |
+
+**Ne pas** prétendre qu’un audit complet a été réalisé.
+
+---
+
+## 8. FinOps UI
+
+| Élément | Affichage |
+|---------|-----------|
+| Appels consommés | Compteur `n / plafond` |
+| Plafond | **À définir** (obligatoire, non numérique) |
+| Séparation | Qualification vs Analyse |
+| Retry | Mention explicite « Aucun retry automatique » |
+| Coût € | **Non affiché** (interdit d’inventer) |
+| Arrêt | CTA avant nouvel appel |
+
+---
+
+## 9. Sécurité & observabilité UI
+
+Afficher si pertinent : `requestId`, `correlationId`, `contractId`, `contractHash`, branche, HEAD, sandbox, allowlist, horodatage+fuseau, source statut, preuve, erreur, invalidation GO, STOP.
+
+Ne jamais afficher : token, clé API, secret, chemin utilisateur sensible non masqué, PII réelle.
+
+---
+
+## 10. Continuité app (lecture seule)
+
+Routes actuelles : `/nouvelle-demande`, `/synthese`, `/cycle-actif`, `/decision`.
+Shell : `StudioShell` + tokens `styles/tokens.css`.
+**Limite :** l’app ne couvre pas encore les 10 étapes — les frames VS sont le contrat pour un futur delivery (hors cycle).
+
+---
+
+## 11. Hors périmètre
+
+Code · modif `app/**` / harness · API/BDD · live GPT/Cursor · responsive mobile · claim MVP/prod · modif docs `01`–`34` · modif frames P0 · promotion VS comme baseline.
+
+---
+
+## 12. Documents liés
+
+- [`36-poc-vertical-slice-ux-ui-flows-and-frames.md`](./36-poc-vertical-slice-ux-ui-flows-and-frames.md)
+- [`37-poc-vertical-slice-ux-ui-decision-pack.md`](./37-poc-vertical-slice-ux-ui-decision-pack.md)
+- Fonctionnel : [`32`](./32-poc-vertical-slice-functional-design.md)–[`34`](./34-poc-vertical-slice-decision-pack.md)
+- P0 : [`14`](./14-ux-ui-contract.md)–[`16`](./16-ux-ui-decision-pack.md)

diff --git a/projects/sfia-studio/36-poc-vertical-slice-ux-ui-flows-and-frames.md b/projects/sfia-studio/36-poc-vertical-slice-ux-ui-flows-and-frames.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/36-poc-vertical-slice-ux-ui-flows-and-frames.md
+# SFIA Studio — Flows, frames et inventaire Figma (vertical slice POC)
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `36-poc-vertical-slice-ux-ui-flows-and-frames.md` |
+| **Cycle** | 4 — UX/UI (correctif borné) |
+| **Profil** | Standard |
+| **Statut** | `validated-for-versioning` — inventaire frames/états **validé Morris** ; merge PR = GO distinct |
+| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
+| **Page** | `UX-B — POC Vertical Slice` (`51:2`) |
+| **Companion** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`37`](./37-poc-vertical-slice-ux-ui-decision-pack.md) |
+| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
+
+> Inventaire des frames = **storyboard d’états** validé Morris sur le fond.
+> **Dix états, pas dix routes.** Quatre vues P0 = structure applicative de référence. Merge PR = GO distinct.
+
+---
+
+## 1. Pages Figma
+
+| Page | node ID | Rôle |
+|------|---------|------|
+| `UX-B — P0` | `0:1` | Référence validée — **non modifiée** |
+| `UX-B — POC Vertical Slice` | `51:2` | Frames VS candidates |
+
+---
+
+## 2. Frames sources P0 (lues, non modifiées)
+
+| Frame | node ID | Dimensions |
+|-------|---------|------------|
+| P0-00C — Nouvelle demande | `19:2` | 1440 × 1024 |
+| P0-01C — Vue synthèse | `22:2` | 1440 × 1024 |
+| P0-02C — Cycle actif | `22:133` | 1440 × 1024 |
+| P0-03C — Décision Morris | `22:270` | 1440 × 1024 |
+
+---
+
+## 3. Modèle — dix états → quatre vues P0
+
+| Vue applicative P0 | États VS-UX | Delivery cible |
+|--------------------|-------------|----------------|
+| Nouvelle demande | 01, 02, 03 | États / panneaux dans route existante |
+| Décision Morris / Gate | 04 | 4 actions gate |
+| Cycle actif | 05, 06, 07, 08 | Stepper / variantes |
+| Décision Morris finale | 09 | Phase post-verdict |
+| Vue synthèse / clôture | 10 | Synthèse **slice courant** seul |
+
+Toute **nouvelle route** = arbitrage Morris distinct (hors correctif).
+
+---
+
+## 4. Inventaire frames vertical slice
+
+| Frame (état) | node ID | Dimensions | Vue P0 | Étape |
+|--------------|---------|------------|--------|-------|
+| VS-UX-01 — Nouvelle demande | `51:3` | 1440 × 1024 | Nouvelle demande | 1 |
+| VS-UX-02 — Qualification en cours | `51:139` | 1440 × 1024 | Nouvelle demande | 2 |
+| VS-UX-03 — Qualification proposée | `51:277` | 1440 × 1024 | Nouvelle demande | 3 |
+| VS-UX-04 — Gate Morris | `51:415` | 1440 × 1024 | Décision / Gate | 4 |
+| VS-UX-05 — Exécution | `51:540` | 1440 × 1024 | Cycle actif | 5 |
+| VS-UX-06 — Rapport disponible | `51:678` | 1440 × 1024 | Cycle actif | 6 |
+| VS-UX-07 — Analyse GPT | `51:816` | 1440 × 1024 | Cycle actif | 7 |
+| VS-UX-08 — Verdict proposé | `51:954` | 1440 × 1024 | Cycle actif | 8 |
+| VS-UX-09 — Décision Morris | `51:1079` | 1440 × 1024 | Décision finale | 9 |
+| VS-UX-10 — Clôture | `51:1204` | 1440 × 1024 | Synthèse / clôture | 10 |
+
+Lien : https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO?node-id=51-2
+
+---
+
+## 5. Variantes / annotations
+
+| Variante | node ID | Dimensions | Rôle |
+|----------|---------|------------|------|
+| VS-UX-VAR — Loading GPT | `52:2` | 720 × 420 | Phase active + FinOps |
+| VS-UX-VAR — Erreur fail-closed | `52:10` | 720 × 420 | Rejet GPT |
+| VS-UX-VAR — STOP Morris | `52:18` | 720 × 420 | STOP prioritaire |
+| VS-UX-VAR — GO invalide | `52:26` | 720 × 420 | Invalidation ancrage |
+
+**Supprimée (correctif) :** `VS-UX-NOTE — Gate 4 actions` (`52:34`) — redondante après 4e action explicite.
+
+---
+
+## 6. Contenu fonctionnel par état
+
+### VS-UX-01 … 03 — vue Nouvelle demande
+Inchangés fonctionnellement (saisie → qualif → proposition). Aucun GO.
+
+### VS-UX-04 — Gate Morris (**correctif**)
+- Dossier ancré : requestId, contractId, contractHash, branche, HEAD, allowlist, autorité, horodatage.
+- **Quatre actions explicites :**
+  1. **GO** — autoriser Cursor sandbox
+  2. **NO-GO** — refuser l’exécution (pas de spawn)
+  3. **Demander une correction** (CORRIGER) — re-qualification
+  4. **Abandonner** — visible, destructif (traitement danger), confirmation, conséquence « état abandonné », **aucune** action Git distante
+- **Abandonner ≠ NO-GO ≠ STOP**
+- Invalidation GO = bandeau / variante **séparée** (pas un substitut à Abandonner)
+
+### VS-UX-05 … 08 — vue Cycle actif
+Inchangés (exécution → rapport → analyse → verdict candidat).
+
+### VS-UX-09 — Décision Morris finale
+Clôturer · Corriger · Relancer (nouveau GO) · Abandonner — hors Git groupé.
+
+### VS-UX-10 — Clôture (**correctif**)
+Affiche **uniquement** le vertical slice courant :
+- requestId · statut final · décision Morris
+- fichier Markdown produit · rapport & preuves
+- appels GPT (n / À définir) · réserves
+- traçabilité branche / HEAD / contractHash
+- prochaines actions candidates **séparées**
+**Retiré :** portfolio multi-projet / lignes héritées P0 hors contexte.
+**Aucun** claim MVP / production-ready.
+
+---
+
+## 7. Transitions UX
+
+```text
+01 → 02 (Qualifier)
+02 → 03 (qualif OK) | erreur/STOP
+03 → 04 (Ouvrir gate) | correction → 02
+04 → 05 (GO) | NO-GO → clôture négative | Abandonner → abandonné | correction → 02
+05 → 06 | STOP → stoppé
+06 → 07
+07 → 08 | fail-closed
+08 → 09
+09 → 10 | correction/relance (nouveau GO) | abandon
+```
+
+---
+
+## 8. Distinction Abandonner / NO-GO / STOP
+
+| Action | Moment | Effet | Git distant |
+|--------|--------|-------|-------------|
+| **STOP** | Pendant qualif / exec / analyse | Interrompt activité en cours → `stoppé` | Non |
+| **NO-GO** | Gate pré-exécution | Refuse spawn Cursor | Non |
+| **Abandonner** | Gate (et décision finale) | Cycle → `abandonné` après confirmation | Non |
+| **Invalidation GO** | Si hash/HEAD/branche/allowlist change | GO invalide — re-gate | Non |
+
+---
+
+## 9. Écarts au P0 (après correctif)
+
+| Écart | Traitement |
+|-------|------------|
+| 10 états vs 4 vues | Mapping §3 — **pas** 10 routes |
+| Gate 4 actions | Matérialisé sur VS-UX-04 |
+| Clôture vs synthèse | Contenu slice-only ; portfolio générique retiré |
+| Note 52:34 | **Supprimée** |
+
+---
+
+## 10. Accessibilité (rappel Abandonner)
+
+- Nom accessible : « Abandonner le cycle »
+- Danger textuel + style (pas couleur seule)
+- Confirmation focusable clavier
+- Conséquence lisible
+- Tab order : options → confirmation → confirmer
+
+---
+
+## 11. Limites
+
+- Chrome topbar (CTA « Interv360 », pills héritées) peut rester générique — hors nettoyage portfolio.
+- Variantes = annotations 720×420.
+- Frames VS toujours **candidates** jusqu’à validation finale Morris.

diff --git a/projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md b/projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md
+# SFIA Studio — Decision pack UX/UI vertical slice POC
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `37-poc-vertical-slice-ux-ui-decision-pack.md` |
+| **Cycle** | 4 — UX/UI (correctif borné) |
+| **Profil** | Standard |
+| **Statut** | `validated-for-versioning` — correctif UX/UI **validé Morris** ; merge PR = GO distinct |
+| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
+| **Figma** | `lrjA1WEyRpL05vKR8k29LO` · page `51:2` |
+| **Companions** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`36`](./36-poc-vertical-slice-ux-ui-flows-and-frames.md) |
+
+> Pack après correctif Morris. Contenu UX/UI **validé** pour versionnement.
+> Merge, delivery, live et backlog = GO Morris distincts.
+
+---
+
+## 1. Synthèse du correctif
+
+GO Morris : **UX/UI correctif borné** consommé.
+
+| Correction | Fait |
+|------------|------|
+| Dix frames = **états**, pas routes | Documenté 35/36/37 + mapping 4 vues P0 |
+| Abandonner explicite au gate | VS-UX-04 — 4 actions ; note `52:34` **supprimée** |
+| Clôture slice-only | VS-UX-10 — portfolio multi-projet **retiré** |
+
+Aucun code · aucune route · aucune modif P0 / app / harness · aucun live · aucun commit projet.
+
+---
+
+## 2. Observations
+
+1. Les quatre vues P0 restent le modèle applicatif de référence.
+2. Le storyboard Figma reste utile pour revue visuelle sans imposer 10 routes.
+3. Abandonner / NO-GO / STOP / invalidation GO sont désormais distingués.
+4. La clôture ne doit plus être lue comme une synthèse portefeuille.
+
+---
+
+## 3. Décisions Morris déjà appliquées
+
+| ID | Décision | Statut |
+|----|----------|--------|
+| VS-CAND-01…13, 15 | Amont fonctionnel | **VALIDÉES** |
+| VS-CAND-14 | Plafond GPT obligatoire, valeur À définir | **VALIDÉE AVEC RÉSERVE** |
+| **VS-UX-CAND-02** (amendée) | Dix frames = **dix états** (pas dix routes) | **VALIDÉE / appliquée** |
+| **VS-UX-CAND-10** (amendée) | Abandonner = **4e action explicite** au gate | **VALIDÉE / appliquée** |
+| Correctif clôture | VS-UX-10 sans portfolio hors contexte | **VALIDÉE / appliquée** |
+| Mapping 4 vues | Regroupement états → vues P0 | **VALIDÉE / appliquée** |
+
+---
+
+## 4. Décisions UX candidates restantes
+
+| ID | Décision candidate | Statut |
+|----|-------------------|--------|
+| VS-UX-CAND-01 | Page Figma dédiée | Ouverte (page créée) |
+| VS-UX-CAND-03 | Continuité Product premium | Ouverte |
+| VS-UX-CAND-04…09, 11 | FinOps / STOP / candidat / variantes / a11y | Ouvertes |
+| VS-UX-CAND-12 | Séquencement validation → backlog → delivery | Ouverte |
+| VS-UX-CAND-13 | Validation finale visuelle post-correctif | **Attendue** |
+
+---
+
+## 5. Impacts / risques / dette
+
+| Thème | Impact | Risque | Dette |
+|-------|--------|--------|-------|
+| États ≠ routes | Clarifie delivery | Mésinterprétation future | Doc à préserver |
+| 4 actions gate | Gate complet | Densité UI | Polish optionnel |
+| Clôture slice | Moins de bruit | Chrome topbar encore générique | Mineure |
+| Note 52:34 | Supprimée | — | — |
+
+---
+
+## 6. Gates Morris suivants
+
+| Gate | Objet |
+|------|-------|
+| **G-VS-UX-FINAL** | Validation finale visuelle post-correctif |
+| G-VS-UX-DOC | Commit / push / PR / merge docs 35–37 (+32–34 si lot) |
+| G-VS-UX-DEL | Delivery UI (états dans 4 routes P0 — **pas** 10 routes) |
+| G-VS-LIVE | Live GPT/Cursor |
+| G-VS-LIMIT | Valeur numérique plafond GPT |
+
+---
+
+## 7. Décisions Morris attendues
+
+1. Validation finale du correctif (frames 04/10 + docs).
+2. Autoriser ou non versionnement documentaire.
+3. **Ne pas** interpréter comme GO delivery / live / 10 routes / merge.
+
+---
+
+## 8. Verdict candidat
+
+`SFIA STUDIO VERTICAL SLICE UX/UI CORRECTED — MORRIS FINAL VALIDATION REQUIRED`
+
+### Interdits
+
+CONCEPTION VALIDATED · POC PROVEN · MVP DEFINED · READY FOR DELIVERY · PRODUCTION READY · FRAMES VALIDATED · TEN ROUTES APPROVED · DOCUMENTATION MERGED · L5 GLOBAL PROVEN


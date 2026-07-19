# Review pack — SFIA Studio POC vertical slice functional design

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 21:21:50 CEST |
| **Cycle** | 2 — Conception fonctionnelle |
| **Profil** | Critical |
| **Typologie** | DOC / CONCEPTION / POC |
| **Baseline** | SFIA v2.6 |
| **Niveau review pack** | **full** |
| **GO Morris consommé** | GO conception fonctionnelle du premier vertical slice SFIA Studio GPT + Cursor |
| **Branche conception** | `design/sfia-studio-poc-vertical-slice` (**locale uniquement** — aucun push) |
| **HEAD** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **origin/main** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **Alignement** | local main / origin/main alignés sur `eb180638…` |
| **Verdict** | `SFIA STUDIO VERTICAL SLICE FUNCTIONAL DESIGN READY — MORRIS VALIDATION REQUIRED` |

---

## 1. Truth Check

| Contrôle | Résultat |
|----------|----------|
| `pwd` | `/Users/morris/Projects/sfia-workspace` |
| Branche travail | `design/sfia-studio-poc-vertical-slice` |
| HEAD | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| origin/main | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| Alignement main | OK — `eb180638ad334a29a86b9fb757f401814003a0d8` |
| PR #226 | MERGED — `d3042230afa110e3c106146e85dfd5261a55afa8` |
| PR #227 | MERGED — `eb180638ad334a29a86b9fb757f401814003a0d8` |
| Staged | Aucun |
| Modifications versionnées étrangères | Aucune |
| Working tree | Untracked uniquement : docs `32`–`34` + `.tmp-sfia-review/` |
| Collision chemins 32–34 | Absente (création OK) |
| Fetch | Effectué ; pas de commit plus récent non compris |

---

## 2. GO Morris consommé

**Décision :** GO conception fonctionnelle du premier vertical slice SFIA Studio GPT + Cursor.

**Autorise :** consultation sources Git ; création docs conception ; parcours/variantes/erreurs/stops/gates/AC ; candidats VS-CAND ; review pack ; handoff Git review.

**N’autorise pas :** modif `app/**` / harness ; OpenAI live ; Cursor live ; stack ; Option B ; API/BDD/protocole ; commit/push/PR projet ; merge ; CI ; MVP ; L5 ; validation implicite VS-CAND.

---

## 3. Sources consultées

### Méthode
- `prompts/templates/sfia-cycle-execution-template.md` (référencé cycle)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- Socle FD validé `08`–`10`

### SFIA Studio (lecture)
- README, `04`–`13`, UX P0 `14`–`16`, tech P0 `18`–`19`, POC `20`–`28`, rapports `29`–`31`
- `app/**` / `harness/**` : lecture seule (non modifiés)
- PR #226, PR #227, handoff review antérieur

### Acquis retenus
- FD-CAND-01…08 validés ; états F1–F12
- AF-Option C : Studio ≠ orchestrateur ; Git vérité ; Morris L0
- POC Option B : Studio → adaptateur fin → harness → ports
- Spikes GPT+Cursor e2e prouvés **hors UI Studio** (#226) avec réserves
- Sync docs #227

### Écarts / besoins nouveaux
- Manque le parcours **depuis Studio** (cockpit) jusqu’à clôture
- Besoin de contrat fonctionnel précis gates / allowlist / invalidation GO / reprise
- Pas de dérive MVP ; pas de rouverture Option B

### Incohérences détectées
- Aucune bloquante entre docs canoniques `08`–`10` / Option B / AF-C
- Naming trap rappelé : AF Option C ≠ POC Option C ≠ method Option C (non conflateur)

---

## 4. Rôle des documents créés

| Doc | Rôle |
|-----|------|
| `32-poc-vertical-slice-functional-design.md` | Contrat fonctionnel (périmètre, acteurs, VS-FR, objets, sécurité, AC) |
| `33-poc-vertical-slice-flows-and-rules.md` | Parcours 10 étapes, transitions, GPT/gate/Cursor/verdict, N1–N16, VS-BR, VS-AC |
| `34-poc-vertical-slice-decision-pack.md` | Observations, VS-CAND-01…15, impacts, séquencement, verdict candidat |

---

## 5. Sections complètes créées

### Document 32
métadonnées · contexte/acquis · objectif · périmètre · acteurs · valeur · parcours · états · VS-FR-01…17 · objets · sécurité/RGPD/FinOps/perf/observabilité · AC · hors périmètre · réserves · liens VS-CAND

### Document 33
parcours nominal détaillé · états/transitions · flux GPT · gate · Cursor · rapport/verdict · N1–N16 · reprise · matrice GO · VS-BR-01…17 · VS-AC-01…12 · preuves · challenge

### Document 34
synthèse · observations · hypothèses · options · recommandations · VS-CAND-01…15 · impacts/risques/dette · validation Morris proposée · gates suivants · séquencement · verdict candidat

---

## 6. Architecture respectée

Option B minimale **inchangée** :
Morris → Studio cockpit → adaptateur fin sans autorité → harness autonome → GPT/Git/Cursor ports bornés → journal/preuves → vue dérivée Studio.

Pas de rouverture : séparation Studio/harness · Git vérité · Morris L0 · GPT sans décision · Cursor sans arbitrage · pas d’écriture distante · L5 interdit.

---

## 7. Fichiers créés / modifiés

### Créés (non stagés, non commités projet)
- `projects/sfia-studio/32-poc-vertical-slice-functional-design.md` (328 lignes)
- `projects/sfia-studio/33-poc-vertical-slice-flows-and-rules.md` (353 lignes)
- `projects/sfia-studio/34-poc-vertical-slice-decision-pack.md` (202 lignes)
- `.tmp-sfia-review/chatgpt-review.md` (ce pack)

### Modifiés
- **Aucun** fichier existant (`01`–`31`, `app/**`, `harness/**`, method, prompts : intacts)

---

## 8. git status

```
?? .tmp-sfia-review/
?? projects/sfia-studio/32-poc-vertical-slice-functional-design.md
?? projects/sfia-studio/33-poc-vertical-slice-flows-and-rules.md
?? projects/sfia-studio/34-poc-vertical-slice-decision-pack.md
```

---

## 9. Diff stat

| Fichier | Lignes |
|---------|--------|
| 32 | 328 |
| 33 | 353 |
| 34 | 202 |
| Total docs | 883 |

---

## 10. Décisions candidates

VS-CAND-01 … VS-CAND-15 (**aucune validée**). Détail dans document 34 ci-dessous.

---

## 11. Contrôles documentaires

| Contrôle | Résultat |
|----------|----------|
| Cohérence SFIA v2.6 | OK |
| Cohérence `08`–`10` | OK (sous-ensemble) |
| Cohérence AF-Option C | OK |
| Cohérence POC Option B | OK |
| Pas de stack implicite | OK |
| Pas de protocole/API figés | OK |
| Pas d’API Cursor inventée | OK |
| Pas de claim MVP/prod | OK |
| Pas de CI/CD ouvert | OK |
| Pas de contournement Morris | OK |
| Pas de seconde vérité | OK |
| Identifiants uniques VS-* | OK |
| Liens relatifs | OK |
| `git diff --check` | OK (fichiers nouveaux) |

### Challenge
Utile maintenant ? Oui. Preuve BeB conçue ? Oui. Dette ? Documentaire limitée. Trop large ? Non. Plus simple ? Harness-only déjà fait. Dérive MVP ? Bornée. Gate visible ? Oui. Option B ? Oui.

---

## 12. Garde-fous

- Timeout ≠ GO
- Fail-closed GPT
- GO invalidé si hash/HEAD/branche/allowlist changent
- STOP prioritaire
- Studio vue dérivée
- Harness autonome conservé
- Aucun secret affiché
- Aucune écriture distante

---

## 13. Réserves

1. Studio UI non livré (conception seule)
2. Adapter Studio↔harness non spécifié techniquement
3. Spikes hors UI = preuve technique partielle
4. Pas de CI SFIA Studio
5. Non-déterminisme GPT
6. Conservation logs = candidat non tranché
7. Documents non versionnés projet (attente GO)

---

## 14. Décisions Morris attendues

1. Valider / amender / refuser VS-CAND-*
2. Autoriser ou non versionnement docs 32–34
3. Sélectionner cycle suivant (UX/UI recommandé si validation)
4. Ne pas traiter ce pack comme GO live / delivery / merge

### Nouveau GO requis pour
validation VS-CAND · commit · push · PR · merge · UX/UI · backlog · delivery · app/** · harness · OpenAI live · Cursor live · CI · MVP · industrialisation · L5 · suppression branche

---

## 15. Confirmation

- **Aucun code** produit
- **Aucun commit projet**
- **Aucun push projet**
- **Aucune PR projet**
- Handoff Git review uniquement vers `sfia/review-handoff` (docs 32–34 **exclues** du handoff)

---

## 16. Verdict

`SFIA STUDIO VERTICAL SLICE FUNCTIONAL DESIGN READY — MORRIS VALIDATION REQUIRED`

---

# ANNEXE A — Contenu intégral document 32

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
| **Statut** | `draft-for-morris-validation` — **non validé** |
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
- POC : [`23`](./23-poc-orchestration-architecture.md)–[`28`](./28-poc-orchestration-delivery-gate-pack.md) · [`29`](./29-poc-cursor-real-spike-report.md)–[`31`](./31-poc-gpt-cursor-e2e-spike-report.md)

---

# ANNEXE B — Contenu intégral document 33

# SFIA Studio — Parcours, états et règles du vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `33-poc-vertical-slice-flows-and-rules.md` |
| **Complète** | [`32-poc-vertical-slice-functional-design.md`](./32-poc-vertical-slice-functional-design.md) |
| **Statut** | `draft-for-morris-validation` — **non validé** |
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

# ANNEXE C — Contenu intégral document 34

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
| **Statut** | `draft-for-morris-validation` — **aucune décision VS-CAND validée** |
| **Autorité** | Morris (L0) |
| **Complète** | [`32`](./32-poc-vertical-slice-functional-design.md) · [`33`](./33-poc-vertical-slice-flows-and-rules.md) |

> Pack de **propositions**. Les `VS-CAND-*` sont **candidates**.  
> Ne jamais écrire qu’elles sont validées. Validation Morris = GO distinct.

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

# ANNEXE D — Diff utile complet (fichiers nouveaux)

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
+| **Statut** | `draft-for-morris-validation` — **non validé** |
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
+- POC : [`23`](./23-poc-orchestration-architecture.md)–[`28`](./28-poc-orchestration-delivery-gate-pack.md) · [`29`](./29-poc-cursor-real-spike-report.md)–[`31`](./31-poc-gpt-cursor-e2e-spike-report.md)

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
+| **Statut** | `draft-for-morris-validation` — **non validé** |
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
+| **Statut** | `draft-for-morris-validation` — **aucune décision VS-CAND validée** |
+| **Autorité** | Morris (L0) |
+| **Complète** | [`32`](./32-poc-vertical-slice-functional-design.md) · [`33`](./33-poc-vertical-slice-flows-and-rules.md) |
+
+> Pack de **propositions**. Les `VS-CAND-*` sont **candidates**.  
+> Ne jamais écrire qu’elles sont validées. Validation Morris = GO distinct.
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

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

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

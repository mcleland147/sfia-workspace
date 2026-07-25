# FULL Review Pack — T-A6 Arbitration Pack (Option A)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 00:45:16 CEST (+0200) |
| **Cycle** | Arbitrage / conception fonctionnelle |
| **Profil** | Critical |
| **Gate** | `GO ARBITRATE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `40e92336b3e646f03354c7912c705b1d62b68097` |
| **HEAD final** | `d2d4cf5bee8d956ae9bc3ad899bce89a5d09d0b7` |
| **Commit** | `docs(sfia-studio): prepare T-A6 Morris arbitration` |
| **Status** | tracked clean ; staged vide ; untracked `.tmp-sfia-review/` only |
| **Worktrees** | tech (T-A6) + main + handoff |
| **Template** | `prompts/templates/sfia-cycle-execution-template.md` |
| **Handoff source** | blob `f09c773385104d16bbc66874fa95de10d2d4e2f5` — T-A6 FRAMING COMPLETED |
| **CKC** | `method/.../pilots/01-cadrage.md` — candidate ; `executionAuthority=false` |

## Truth Check

PASS — HEAD framing exact ; main exact ; ahead 1 framing puis +1 arbitration ; pas de PR/remote T-A6 ; ops absentes.

## Sources

01-framing + README T-A6 ; handoff framing ; modeled 01–10 + schemas Evidence/RB/Maturity ; T-A3/T-A4/T-A5 ; réserves B5/R1/R-T-A3/R-M01/U-M02 ; CKC cadrage.

## Fichiers

| Action | Path |
|--------|------|
| créé | `.../t-a6-.../02-arbitration.md` |
| modifié | `.../t-a6-.../README.md` |
| inchangé | `01-framing.md` |
| supprimé | aucun |

## Décisions validées nouvelles

**Aucune.** Toutes `RECOMMENDED — NOT DECIDED`.

## Synthèse recommandations D-T-A6-01…12

| ID | Reco |
|----|------|
| 01 | C |
| 02 | C |
| 03 | A+D |
| 04 | B |
| 05 | D |
| 06 | MATRIX |
| 07 | C |
| 08 | D |
| 09 | PRINCIPLES PACK |
| 10 | BOUNDARY |
| 11 | L0–L3 / L4 gated / L5 out |
| 12 | OUTPUT CONTRACT |

## Diff-check

PASS

## Contenu complet — 02-arbitration.md

# 02 — Arbitration Pack T-A6 Evidence, Review, Claims and Maturity

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Cycle** | Arbitrage / conception fonctionnelle (Critical) |
| **Gate** | `GO ARBITRATE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD framing** | `40e92336b3e646f03354c7912c705b1d62b68097` |
| **Modeled / runtime** | **NONE** modifié |
| **Horodatage** | 2026-07-26 00:43:49 CEST (+0200) |
| **Statut** | **ARBITRATION PACK PREPARED** — recommandations candidates |
| **Décisions Morris** | **NONE** — toutes `RECOMMENDED — NOT DECIDED` |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 ARBITRATION PACK PREPARED — MORRIS DECISIONS REQUIRED` |

---

## 1. Autorité du cycle

Ce gate autorise la **préparation** d’un decision pack fermé pour D-T-A6-01…12.

Il **n’autorise pas** à déclarer une option validée, approuvée, adoptée ou décidée.

| Rôle | Autorité |
|------|----------|
| Cursor | challenge, élimination, recommandation unique, format de réponse |
| Morris | sélection explicite `APPROVED` / `REJECTED` / `DEFERRED` |
| Git | trace documentaire locale + handoff L3 |

---

## 2. Sources

| Source | Usage |
|--------|-------|
| `01-framing.md` + README T-A6 | cadrage et options initiales |
| Handoff framing blob `f09c773…` | verdict framing |
| Modeled 01–03, 05–10 + README + decision pack | Evidence/RB/Maturity, M-OA-07/08 |
| Schemas Evidence, ReviewBundle, MaturityAssessment `0.1.0-oa` | contraintes existantes |
| T-A3/T-A4/T-A5 frontières publiques + D10 | Attempt technique only |
| Réserves B5, R1, R-T-A3-1…4, R-M01, U-M02 | contraintes OPEN |
| CKC `method/.../pilots/01-cadrage.md` | guidance candidate |

### CKC

| Item | Valeur |
|------|--------|
| Cycle | arbitrage (guidance via pilote cadrage) |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| `executionAuthority` | **false** |

---

## 3. Doctrine d’arbitrage

Pour chaque D-T-A6 :

1. reformuler la décision ;
2. lister options distinctes ;
3. éliminer les incompatibles avec Git / modeled / T-A5 D10 / invariants ;
4. analyser valeur, complexité, dette, sécurité, RGPD, coût, réversibilité, impacts modeled/runtime, dépendances, réserves ;
5. produire **une** recommandation ;
6. formuler la décision Morris exacte ;
7. statut : **`RECOMMENDED — NOT DECIDED`**.

Interdit dans ce document : `VALIDATED`, `ADOPTED`, `APPROVED`, `DECIDED` appliqués à une option T-A6.

---

## 4. Contraintes héritées (non re-votées)

| Contrainte | Source |
|------------|--------|
| Evidence ≠ ReviewBundle ≠ ClaimEvaluation | M-OA-07 |
| Pas de promotion auto de maturité ; `autoPromoted: false` | M-OA-08 / schema |
| T-A5 = technique only ; Evidence/Claim/maturity = T-A6 | T-A5 D10 |
| Attempt sans `claimId` / `partial` | Attempt `0.2.0-oa` |
| Synthèse seule ≠ bundle complet | modeled 08 |
| Secrets interdits en clair Evidence | modeled 08/10 |
| N3 ≠ Morris | T-A3/T-A5 |
| R-T-A3-1/2 HARD exécution réelle | T-A5 post-merge |
| B5, R1, R-M01, U-M02 OPEN | modeled / T-A5 |
| Prefixes : `ev:`, `rb:`, `clm:`, `debt:`, `mat:` | modeled 02 |

---

## 5. Décisions D-T-A6-01 … D-T-A6-12

### D-T-A6-01 — Nature et ownership d’Evidence

**Décision requise :** définir la nature et l’ownership d’Evidence dans Option A.

| Option | Description |
|--------|-------------|
| **A** | Agrégat autonome Evidence |
| **B** | Entité rattachée exclusivement à ExecutionAttempt (owned by T-A5) |
| **C** | Entité T-A6 indépendante avec bindings explicites (Attempt primaire possible) |
| **D** | Simple référence sans lifecycle propre |

**Éliminées :**

| Option | Justification |
|--------|---------------|
| **B** | Contredit T-A5 D10 (T-A5 ne possède pas Evidence) et ownership Attempt technique |
| **D** | Incompatible avec schema Evidence existant (status, provenance, digest) et I01–I03 |
| **A** | Trop lourd si ReviewBundle porte la cohérence de revue ; risque de double agrégat sans gain v1 |

**Recommandation :** **C**

- Evidence = entité T-A6 (`ev:`) avec identité, provenance, intégrité, lifecycle ;
- bindings explicites (`links` / EvidenceBinding) ;
- Attempt = source primaire pour résultats d’exécution, **pas** owner ;
- sources manuelles / externes autorisées via bindings ;
- ReviewBundle reste l’agrégat de cohérence de revue.

| Dimension | Analyse |
|-----------|---------|
| Valeur | Aligné schemas + multi-origine |
| Complexité | Moyenne |
| Dette | Bindings multi-objets à spécifier au materialize |
| Sécurité/RGPD | Classification au niveau Evidence |
| Réversibilité | Haute avant delivery |
| Impact modeled | Enrichissement docs/bindings ; schema déjà présent |
| Impact runtime | Futur module T-A6 ; pas T-A5 |
| Réserves | — |
| Statut | **RECOMMENDED — NOT DECIDED** |

**Formulation Morris proposée :**
`D-T-A6-01 = OPTION C — APPROVED`
(Evidence entité T-A6 indépendante à bindings explicites ; Attempt non-owner)

---

### D-T-A6-02 — Copie, référence ou hybride

**Décision requise :** modèle logique de conservation Evidence (sans vendor).

| Option | Description |
|--------|-------------|
| **A** | Référence externe uniquement |
| **B** | Snapshot interne uniquement |
| **C** | Hybride : metadata+digest internes ; payload interne ou externe selon classification |
| **D** | Content-addressed interne obligatoire pour tout payload |

**Éliminées :**

| Option | Justification |
|--------|---------------|
| **A** | Indisponibilité externe + R-T-A3-2 ; intégrité faible si pas de digest local |
| **B** | Coût/PII/rétention excessifs pour tous les artefacts |
| **D** | Trop strict trop tôt ; force stockage interne même pour artefacts publics techniques |

**Recommandation :** **C**

Règles minimales candidates :

| Règle | Contenu |
|-------|---------|
| Metadata | toujours canoniques internes |
| Digest | obligatoire dès qu’un payload est revendiqué |
| Payload | interne si PII/secret-class/legal hold ; sinon référence externe autorisée |
| Indisponibilité | status `stale` / `unavailable` ; pas de PASS sur Evidence obligatoire absente |
| Suppression | soft + legal hold ; purge selon classe |
| Secrets | interdits en clair (location/provenance/logs) |
| Portabilité | export metadata + digests toujours |

U-M02 reste **OPEN** (technologie non choisie).

| Statut | **RECOMMENDED — NOT DECIDED** |

**Formulation :**
`D-T-A6-02 = OPTION C — APPROVED`
(hybride logique ; aucun vendor)

---

### D-T-A6-03 — ReviewBundle

**Décision requise :** nature du ReviewBundle et règle de gel.

| Option | Description |
|--------|-------------|
| **A** | Agrégat autonome versionné |
| **B** | Projection dynamique |
| **C** | Liste mutable de références |
| **D** | Snapshot gelé à l’ouverture de review |
| **A+D** | Agrégat autonome + freeze immutable avant verdict |

**Éliminées :**

| Option | Justification |
|--------|---------------|
| **B** | Verdict non reproductible (I06) |
| **C** | Mutable pendant revue → drift (I05 / R-T-A6-2) |
| **A seule** | Sans freeze explicite, risque de mutation post-start |
| **D seule** | Snapshot sans agrégat/ownership H affaiblit identity/versioning |

**Recommandation :** **A+D** avec lifecycle v1 simplifié :

`draft → frozen → under_review → accepted | rejected | incomplete | superseded`

- `ready_for_review` modeled actuel **équivalent sémantique** de `frozen` en v1 (éviter double état) ;
- draft mutable sous OCC ;
- freeze crée version immutable ;
- verdict lié à `reviewBundleId` + version exacte ;
- correction = nouvelle version / nouvelle review (pas mutation historique).

| Statut | **RECOMMENDED — NOT DECIDED** |

**Formulation :**
`D-T-A6-03 = OPTION A+D — APPROVED`
(agrégat autonome ; freeze avant verdict ; ready_for_review ≡ frozen v1)

---

### D-T-A6-04 — Claim et ClaimEvaluation

**Décision requise :** modèle conceptuel et v1 physique.

| Option | Description |
|--------|-------------|
| **A** | Claim et ClaimEvaluation objets séparés (schemas séparés) |
| **B** | Fusion physique v1 dans ClaimEvaluation (champs claim inclus) |
| **C** | Claim seulement ; résultat porté par ReviewBundle |
| **D** | Claim catalogue statique + instances d’évaluation |

**Éliminées :**

| Option | Justification |
|--------|---------------|
| **C** | Dilue ClaimEvaluation ; contredit M-OA-07 et catalogue EvaluateClaim |
| **A pure v1** | Deux schemas avant R-M01 enrichi = dette prématurée |

**Recommandation :** **B** (physique v1) **avec séparation sémantique** (conceptuelle A) :

ClaimEvaluation v1 (`clm:`) porte :

- définition / énoncé du claim ;
- type (technique | conformité | qualité | sécurité | maturité-support) ;
- règle d’évaluation (réf explicite) ;
- Evidence requises ;
- statut `pending|evaluating|pass|fail|not_proven|waived|disputed` ;
- reviewer / confirmation ;
- waiver / dispute metadata.

Claim catalogue (D) = **évolution** optionnelle post-v1, pas bloquante.

R-M01 reste **OPEN** jusqu’à materialize/validation schema.

| Statut | **RECOMMENDED — NOT DECIDED** |

**Formulation :**
`D-T-A6-04 = OPTION B — APPROVED`
(ClaimEvaluation v1 unifié sémantiquement séparé ; schema prioritaire R-M01)

---

### D-T-A6-05 — Matrice d’évaluation Critical

**Décision requise :** qui évalue / confirme selon type × criticité.

| Option | Description |
|--------|-------------|
| **A** | Toutes évaluations humaines |
| **B** | Automatisation déterministe complète |
| **C** | Système propose, humain confirme toujours |
| **D** | Matrice type × criticité |

**Éliminées :**

| Option | Justification |
|--------|---------------|
| **B** | Auto-validation Critical / maturité = risque structurant |
| **A** | Coût excessif pour claims techniques non-Critical déterministes |
| **C** | Sur-contraint L3 légitime non-Critical |

**Recommandation :** **D** — matrice minimale :

| Type claim | Non-Critical | Critical |
|------------|--------------|----------|
| Technique déterministe (règle fermée + Evidence complète) | L3 auto **propose+applique** statut évaluatif technique | Système propose ; humain N≥ confirme |
| Conformité / qualité / sécurité | Système propose ; humain N≥ confirme | Humain N≥ confirme ; pas self-review |
| Support maturité | Système propose | Humain ; Morris si structurant / ADOPTED |
| Décisionnel | **INTERDIT** | **INTERDIT** |

Règles transverses :

- NOT_PROVEN ≠ PASS ; conversion implicite interdite ;
- WAIVED distinct, autorisé, motivé, horodaté ;
- auteur Attempt/agent ≠ validateur claim Critical.

| Statut | **RECOMMENDED — NOT DECIDED** |

**Formulation :**
`D-T-A6-05 = OPTION D — APPROVED`

---

### D-T-A6-06 — Autorité de confirmation

**Décision requise :** matrice fermée des acteurs.

| Acteur | Peut | Ne peut pas |
|--------|------|-------------|
| Système | proposer ; contrôles L1/L3 bornés | confirmer Critical ; fermer réserve ; se déclarer Morris ; autoriser exécution |
| Agent T-A5 | artefacts techniques (`resultRef`) | Evidence validée ; Claim confirmé |
| Reviewer N1 | revue scope N1 | usurper N2/N3/Morris |
| Reviewer N2 | revue scope N2 | Morris |
| Reviewer N3 | revue scope N3 | **≠ Morris** |
| Morris | claims/maturité/réserves/waivers structurants | — |
| Service technique | stocker/servir artefacts | juger conformité |

**Éliminé :** toute règle « N3 = Morris » (héritage T-A3/T-A5).

**Recommandation :** matrice ci-dessus + séparation des rôles + provenance obligatoire sur confirmations.

| Statut | **RECOMMENDED — NOT DECIDED** |

**Formulation :**
`D-T-A6-06 = MATRIX AS DOCUMENTED — APPROVED`

---

### D-T-A6-07 — Modèle de maturité

**Décision requise :** nature du MaturityAssessment.

| Option | Description |
|--------|-------------|
| **A** | Calculée automatiquement et finale |
| **B** | Proposée par système seulement |
| **C** | Proposée puis confirmée |
| **D** | Purement manuelle |
| **E** | Dérivée à la lecture (non persistée) |

**Éliminées :**

| Option | Justification |
|--------|---------------|
| **A** | Contredit `autoPromoted: false` / M-OA-08 |
| **E** | Non auditable / non versionnable |
| **B seule** | Sans confirmation = promotion de facto |
| **D seule** | Perd traçabilité des claims sous-jacents |

**Recommandation :** **C**

- assessment versionné (`mat:`) ;
- proposition dérivée de ClaimEvaluations + réserves ;
- confirmation humaine ; Morris pour niveau structurant / ADOPTED ;
- `autoPromoted=false` ;
- downgrade si claim/Evidence invalidés ;
- supersession plutôt que réécriture ;
- NOT_PROVEN et réserves bloquantes empêchent promotion ;
- pas de moyenne masquant une dimension bloquante ;
- maturité ≠ autorisation d’exécution.

| Statut | **RECOMMENDED — NOT DECIDED** |

**Formulation :**
`D-T-A6-07 = OPTION C — APPROVED`

---

### D-T-A6-08 — Réserves et maturité

**Décision requise :** effet des réserves sur les niveaux de maturité.

| Option | Description |
|--------|-------------|
| **A** | Réserves seulement affichées |
| **B** | Informatives sans effet |
| **C** | Bloquent tout niveau |
| **D** | Bloquent dimensions / niveaux associés |
| **E** | Waiver permet d’ignorer sans trace |

**Éliminées :**

| Option | Justification |
|--------|---------------|
| **A/B** | Inflation (R-T-A6-5) |
| **C** | Trop strict (DOCUMENTED bloqué par dette UX mineure) |
| **E** | Waiver silencieux (R-T-A6-6) |

**Recommandation :** **D**

- mapping réserve → dimension/niveau ;
- réserve HARD bloque assertion incompatible ;
- PASS claims ≠ fermeture réserve ;
- waiver ≠ fermeture : explicite, autorisé, motivé, horodaté, réversible ;
- B5 et R-T-A3-* restent OPEN ;
- système ne ferme aucune réserve structurante.

| Statut | **RECOMMENDED — NOT DECIDED** |

**Formulation :**
`D-T-A6-08 = OPTION D — APPROVED`

---

### D-T-A6-09 — Stockage et rétention (principes)

**Décision requise :** principes logiques uniquement — **pas** de technologie.

**Recommandation :** **PRINCIPLES PACK** (pas de vendor) :

| Principe | Règle candidate |
|----------|-----------------|
| Metadata | canoniques, versionnées, internes |
| Payload | séparé ; CAS lorsque pertinent |
| Classification | public technique / interne / PII / secret |
| Bornes | max size et count par Attempt/Claim/Bundle (valeurs au materialize) |
| Rétention | par classe |
| Indisponibilité | fail-closed pour Evidence obligatoire |
| Effacement | vs legal hold |
| Chiffrement / accès / export / purge / dédup | obligatoires conceptuellement |

U-M02 reste **OPEN**.

**Éliminé :** choix S3/Postgres/filesystem dans ce cycle.

| Statut | **RECOMMENDED — NOT DECIDED** |

**Formulation :**
`D-T-A6-09 = PRINCIPLES PACK — APPROVED`
(technologie DEFERRED ; U-M02 OPEN)

---

### D-T-A6-10 — Frontière T-A6 / T-A7

| Domaine | Owner |
|---------|-------|
| Evidence, ReviewBundle, ClaimEvaluation, MaturityAssessment, dette/findings de review, reco de gate | **T-A6** |
| Cutover legacy, MethodMode, OPS1, migration chemins historiques, activation opérationnelle globale | **T-A7** |

**Recommandation :** frontière ci-dessus.

- T-A6 ne lance pas T-A7 ;
- aucune exécution réelle ouverte par T-A6.

| Statut | **RECOMMENDED — NOT DECIDED** |

**Formulation :**
`D-T-A6-10 = BOUNDARY AS DOCUMENTED — APPROVED`

---

### D-T-A6-11 — Automatisation

**Recommandation :** doctrine fermée

| Niveau | Autorisé T-A6 |
|--------|---------------|
| L0 | revue manuelle assistée |
| L1 | présence / intégrité / cohérence |
| L2 | génération guidée bundles/claims |
| L3 | évaluation déterministe non-Critical bornée |
| L4 | orchestration sous gates Morris |
| L5 | **hors cible** Option A |

**Interdictions :**

- auto-confirm maturité ;
- auto-fermeture réserve humaine ;
- auto-lancement cycle suivant ;
- NOT_PROVEN → PASS ;
- self-review Critical.

| Statut | **RECOMMENDED — NOT DECIDED** |

**Formulation :**
`D-T-A6-11 = L0–L3 DEFAULT / L4 GATED / L5 OUT — APPROVED`

---

### D-T-A6-12 — Sortie T-A6

**Sorties autorisées :**

- Evidence refs ;
- ReviewBundle versionné ;
- ClaimEvaluation ;
- MaturityAssessment proposé/confirmé ;
- Debt/Reserve refs ;
- Findings ;
- verdict de revue ;
- **recommandation** de gate / cycle correctif.

**Sorties interdites :**

- lancement auto du cycle suivant ;
- mutation Trajectory sans commande+autorité ;
- autorisation d’exécution ;
- fermeture implicite de réserve ;
- promotion Option A ;
- décision Morris implicite.

Propagation LPS : refs sous réserve **B5 OPEN**.

| Statut | **RECOMMENDED — NOT DECIDED** |

**Formulation :**
`D-T-A6-12 = OUTPUT CONTRACT AS DOCUMENTED — APPROVED`

---

## 6. Synthèse des recommandations

| ID | Recommandation | Statut |
|----|----------------|--------|
| D-T-A6-01 | **C** Evidence entité T-A6 + bindings | RECOMMENDED — NOT DECIDED |
| D-T-A6-02 | **C** Hybride logique | RECOMMENDED — NOT DECIDED |
| D-T-A6-03 | **A+D** Agrégat + freeze (`ready_for_review`≡frozen v1) | RECOMMENDED — NOT DECIDED |
| D-T-A6-04 | **B** ClaimEvaluation v1 unifié (sémantique séparée) | RECOMMENDED — NOT DECIDED |
| D-T-A6-05 | **D** Matrice type × Critical | RECOMMENDED — NOT DECIDED |
| D-T-A6-06 | Matrice acteurs documentée | RECOMMENDED — NOT DECIDED |
| D-T-A6-07 | **C** Maturity proposée puis confirmée | RECOMMENDED — NOT DECIDED |
| D-T-A6-08 | **D** Réserves bloquent niveaux associés | RECOMMENDED — NOT DECIDED |
| D-T-A6-09 | Principles pack ; tech deferred | RECOMMENDED — NOT DECIDED |
| D-T-A6-10 | Boundary T-A6/T-A7 | RECOMMENDED — NOT DECIDED |
| D-T-A6-11 | L0–L3 / L4 gated / L5 out | RECOMMENDED — NOT DECIDED |
| D-T-A6-12 | Output contract | RECOMMENDED — NOT DECIDED |

**Décisions validées nouvelles : aucune.**

---

## 7. Matrice Critical (détail reco D-T-A6-05)

Voir §5 D-T-A6-05. Résumé :

- L3 déterministe non-Critical technique seulement ;
- Critical = proposition système + confirmation humaine ;
- structurant / ADOPTED / réserve = Morris ;
- self-review Critical interdit.

---

## 8. Matrice autorité (détail reco D-T-A6-06)

Voir §5 D-T-A6-06. N3 ≠ Morris. Système ne ferme pas les réserves humaines.

---

## 9. Doctrine stockage (détail reco D-T-A6-09)

Voir §5 D-T-A6-09. Alignée D-T-A6-02 hybride. U-M02 OPEN.

---

## 10. Doctrine automatisation (détail reco D-T-A6-11)

Voir §5 D-T-A6-11.

---

## 11. Réserves candidates R-T-A6-1…9

| ID | Risque | Couverture existante ? | Recommandation traitement | Owner | Fermeture | Blocker |
|----|--------|------------------------|---------------------------|-------|-----------|---------|
| R-T-A6-1 | Evidence falsifiée/mutable | partielle (digest schema) | **CREATE** candidate | T-A6 | VerifyIntegrity + tests | exec réelle |
| R-T-A6-2 | Bundle non gelé | I05 framing | **CREATE** candidate | T-A6 | Freeze obligatoire modeled/runtime | delivery review |
| R-T-A6-3 | Self-review | D-T-A6-05/06 | **CREATE** candidate | T-A6 | authz séparation rôles | Critical |
| R-T-A6-4 | NOT_PROVEN→PASS | enum candidat | **CREATE** candidate | T-A6 | tests adversariaux | delivery |
| R-T-A6-5 | Maturity inflation | D-T-A6-07/08 | **CREATE** candidate | T-A6 | mapping réserves | delivery |
| R-T-A6-6 | Waiver silencieux | D-T-A6-08 | **CREATE** candidate | T-A6 | WAIVED explicite | delivery |
| R-T-A6-7 | PII/secret | modeled 08/10 | **MERGE INTO** doctrine sécurité + **TRACK AS DEBT** | T-A6/Sec | scans + classification | delivery |
| R-T-A6-8 | Volumétrie/rétention | U-M02 | **MERGE INTO U-M02** | AT | bornes+rétention | soft |
| R-T-A6-9 | Divergence modeled/runtime | process gates | **TRACK AS DEBT** process | QA | materialize+validate gates | soft |

**Aucune créée comme réserve validée** sans Morris (`GO DECIDE T-A6`).

### Réserves existantes (inchangées OPEN)

B5 · R1 · R-T-A3-1 · R-T-A3-2 · R-T-A3-3 · R-T-A3-4 · R-M01 · U-M02

---

## 12. Decision pack Morris — format de réponse

Pour chaque ID, répondre exactement :

```text
D-T-A6-xx = OPTION X — APPROVED
```

ou

```text
D-T-A6-xx = REJECTED — [motif]
```

ou

```text
D-T-A6-xx = DEFERRED — [condition]
```

### Checklist groupée (optionnelle, non présumée)

```text
GO DECIDE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A
D-T-A6-01 = OPTION C — APPROVED
D-T-A6-02 = OPTION C — APPROVED
D-T-A6-03 = OPTION A+D — APPROVED
D-T-A6-04 = OPTION B — APPROVED
D-T-A6-05 = OPTION D — APPROVED
D-T-A6-06 = MATRIX AS DOCUMENTED — APPROVED
D-T-A6-07 = OPTION C — APPROVED
D-T-A6-08 = OPTION D — APPROVED
D-T-A6-09 = PRINCIPLES PACK — APPROVED
D-T-A6-10 = BOUNDARY AS DOCUMENTED — APPROVED
D-T-A6-11 = L0–L3 DEFAULT / L4 GATED / L5 OUT — APPROVED
D-T-A6-12 = OUTPUT CONTRACT AS DOCUMENTED — APPROVED
```

Ce bloc n’est **pas** un GO consommé. Il n’a d’effet qu’après réponse Morris explicite.

---

## 13. Anti-claims

- Aucune option T-A6 **décidée** / **validée** / **adoptée** par ce cycle ;
- Pas modeled ready / delivery ready / production ready ;
- Pas de technologie de stockage choisie ;
- Pas de schema ClaimEvaluation créé ;
- Pas de réserve créée ou fermée ;
- Pas T-A7 / exécution réelle / adapter réel ;
- Pas push / PR / merge projet.

---

## 14. Stop conditions

- Transformer une recommandation en décision sans Morris ;
- Modifier modeled/runtime ;
- Choisir un vendor ;
- Fermer B5/R1/R-T-A3/R-M01/U-M02 ;
- Présenter NOT_PROVEN comme PASS ;
- Auto-promotion maturité ;
- Ouvrir T-A7.

---

## 15. Gate suivant candidat

`GO DECIDE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A`
(**NOT consumed**)

Nécessite les choix Morris explicites D-T-A6-01…12.

---

## 16. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 ARBITRATION PACK PREPARED — MORRIS DECISIONS REQUIRED`

## Contenu complet — README.md

# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Titre cycle** | Evidence, Review, Claims and Maturity |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate arbitrage** | `GO ARBITRATE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` (PR #266 T-A5 merge) |
| **HEAD framing** | `40e92336b3e646f03354c7912c705b1d62b68097` |
| **Modeled / runtime** | **NONE** modifié — pack documentaire uniquement |
| **Push / PR / merge projet** | **NONE** — require Morris GO |
| **Statut pack** | **ARBITRATION PACK PREPARED** |
| **Horodatage** | 2026-07-26 00:43:49 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 ARBITRATION PACK PREPARED — MORRIS DECISIONS REQUIRED` |
| **Gate suivant** | `GO DECIDE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif

Préparer un decision pack fermé D-T-A6-01…12 permettant à Morris de statuer sans ambiguïté sur Evidence, ReviewBundle, ClaimEvaluation, maturité, autorité, stockage logique, automatisation et sorties T-A6.

## Périmètre

- Challenge contradictoire des options du cadrage ;
- Élimination des options incompatibles ;
- Recommandations uniques `RECOMMENDED — NOT DECIDED` ;
- Format de réponse Morris ;
- Traitement candidat des réserves R-T-A6-1…9.

## Hors périmètre

- Validation d’options à la place de Morris ;
- Enrichissement schema / runtime / tests ;
- Choix de technologie de stockage ;
- SQL, API, UI, worker, scheduler ;
- Fermeture de réserves ;
- T-A7 ;
- Push / PR / merge.

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) — cadrage (inchangé ce cycle)
3. [02-arbitration.md](./02-arbitration.md) — **decision pack Morris**

## Décisions validées (nouvelles)

**Aucune.**

Toutes les recommandations D-T-A6 restent `RECOMMENDED — NOT DECIDED` jusqu’à `GO DECIDE T-A6`.

Héritages utiles (non re-votés) : M-OA-07, M-OA-08, T-A5 D10.

## Décisions en attente Morris

| ID | Recommandation candidate |
|----|--------------------------|
| D-T-A6-01 | **C** Evidence entité T-A6 + bindings |
| D-T-A6-02 | **C** Hybride logique |
| D-T-A6-03 | **A+D** Agrégat + freeze |
| D-T-A6-04 | **B** ClaimEvaluation v1 unifié |
| D-T-A6-05 | **D** Matrice type × Critical |
| D-T-A6-06 | Matrice acteurs documentée |
| D-T-A6-07 | **C** Maturity proposée puis confirmée |
| D-T-A6-08 | **D** Réserves bloquent niveaux associés |
| D-T-A6-09 | Principles pack ; tech deferred |
| D-T-A6-10 | Boundary T-A6 / T-A7 |
| D-T-A6-11 | L0–L3 / L4 gated / L5 out |
| D-T-A6-12 | Output contract |

Format de réponse : voir [02-arbitration.md](./02-arbitration.md) §12.

## Réserves

### Existantes (OPEN — inchangées)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD exécution réelle Critical) |
| R-T-A3-2 | **OPEN** (HARD exécution réelle) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** (ClaimEvaluation schema) |
| U-M02 | **OPEN** (stockage Evidence) |

### Candidates (non validées — traitement proposé dans 02)

R-T-A6-1 … R-T-A6-9 — CREATE / MERGE / TRACK AS DEBT recommandés ; **aucune créée** sans Morris.

## Anti-claims

- Pas T-A6 décidé / validé / modeled ready / delivery ready / production ready
- Pas storage vendor choisi / schema ClaimEvaluation créé
- Pas réserves créées ou fermées
- Pas T-A7 / exécution réelle / adapter réel
- Pas push / PR / merge ce cycle

## Modeled de référence (lecture seule)

- `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/08-evidence-review-bundle-maturity-and-debt-model.md`
- `schemas/evidence/evidence.schema.json`
- `schemas/evidence/review-bundle.schema.json`
- `schemas/maturity/maturity-assessment.schema.json`

## Bornes

- Push projet : NON
- PR : NON
- Merge : NON
- Modeled modifié : NON
- Runtime modifié : NON
- T-A7 ouvert : NON
- Adapter réel : absent
- Exécution réelle : absente
- Réserves fermées/créées validées : aucune

## Working tree final

Branche T-A6 @ `d2d4cf5bee8d956ae9bc3ad899bce89a5d09d0b7` ; tracked clean ; `?? .tmp-sfia-review/`

## Verdict exact

SFIA STUDIO V3-NATIVE OPTION A T-A6 ARBITRATION PACK PREPARED — MORRIS DECISIONS REQUIRED

## Gate suivant (non consommé)

`GO DECIDE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A`

# REVIEW PACK FULL — CRITICAL
# AKG-M0 — DOCUMENTARY AUTHORING — ETAPE 1
# CONTENT READY FOR CHATGPT SEMANTIC REVIEW
# PRR DIGEST SYNCHRONIZATION PENDING

**Timestamp (UTC):** 2026-10-19T19:24:35Z
**Repository:** mcleland147/sfia-workspace
**Worktree documentaire:** `/Users/morris/Projects/sfia-workspace-akg-m0-documentary-authoring`
**Branche:** `docs/sfia-studio-akg-m0-documentary-authoring`
**HEAD:** `c9abdbc37830d687cc8a504b97db659b47aa0f5b` (tracks origin/main; uncommitted local authoring)
**origin/main:** `c9abdbc37830d687cc8a504b97db659b47aa0f5b`
**Baseline:** `c9abdbc37830d687cc8a504b97db659b47aa0f5b` — MATCH
**PR #590:** MERGED
**Prior handoff preparatoire:** `162ab68e` / blob `405c93ae`
**Cycle:** 8 — Delivery / implementation (specialisation documentaire gouvernance)
**Profil:** CRITICAL
**Typologie:** DOC / GOVERNANCE / METHOD
**Jalon:** AKG-M0 — METHODOLOGICAL FOUNDATION
**Fake/Real:** N/A

---

## 0. GO Morris consomme

| GO | Statut |
|----|--------|
| GO M0 DOCUMENTARY AUTHORING | CONSUMED |
| Allowlist 6 files | YES |
| Ecriture immediate A-E | YES (this step) |
| Ecriture F manifest | INTERDITE cette etape |
| CP01-CP06 | REQUIRED / APPLIED |
| Commit / push / PR / merge projet | NON |
| HQA / REAL / Product | NON |

Gate suivant: ChatGPT Semantic Review des cinq documents, puis etape 2 digest README uniquement.

---

## 1. Git Truth

Isolation: nouveau worktree depuis origin/main (pas HQA, pas Delivery). Staged: aucun. Manifest: inchange. Diff projet: 5 fichiers A-E. Review pack mono-cycle: `.tmp-sfia-review/chatgpt-review.md`.

---

## 2. Sources consultees

Template, Routing, Rules, Operating model, Knowledge Layer; Build Doctrine; Roadmap; C1 (read); doctrine 30-37 (read); PRR README+04+08+manifest (read only); handoff preparatoire 162ab68e; CP01-CP06.

---

## 3. Convergence Pre-check

V3-F05 transversal; P6 ouvert / GLOBAL PASS non acquis; AKG-M0 authoring local; KEEP v3/C1/PRR/v2.6; ADAPT A-E; CONSOLIDATE option future only; exit = Semantic Review + digest sync + Git Integration; suivant AKG-M1.

---

## 4. Fichiers

A Build Doctrine · B Roadmap · C PRR README · D Routing · E Template · F manifest **INCHANGE**.

---

## 5. Build Doctrine — extraits

### R23 / R24

```markdown
| **R23** | **Architecture-informed development (Studio).** Toute analyse, conception, correction, évolution, rationalisation ou validation pertinente de SFIA Studio doit s’appuyer sur une compréhension **actuelle et vérifiable** des mécanismes existants. Le niveau d’investigation est **proportionné** au risque. Les références architecturales applicables (`production-runtime-reference/**` et volumes concernés) sont consultées avant recommandation ou intervention. **Git courant et preuves primaires** priment sur la documentation descriptive ; toute contradiction devient un **gap** explicitement qualifié. |
| **R24** | **Architecture documentation continuity.** Toute intervention Studio doit évaluer ses **impacts documentaires**. Toute modification du fonctionnement réel doit déclencher la synchronisation des sections architecturales concernées (contrat living PRR). L’absence d’impact sémantique doit être explicitement qualifiée (`NO SEMANTIC IMPACT`) lorsqu’applicable. Un digest PRR conforme **ne prouve pas** la validité sémantique du référentiel. |

> **Lifecycle R22 : ACTIVE ON MAIN.** Principe de trajectoire explicitement consommé par Morris le 2026-09-01, intégré via PR **#453**, merge `d640b5ba7210b9da3593bea9eeae2100c6da6c09`, post-merge CI `33530815963` **SUCCESS**, Required Gate **PASS**.

> **Lifecycle R23 / R24 :** codification AKG-M0 (authoring local) — **pas encore ACTIVE ON MAIN** tant que l’intégration Git M0 n’est pas consommée sous gates distincts.


```

### A5 Q14-Q18

```markdown
14. Quelles **références PRR** (README / volumes / objets / flows / invariants / gaps) ont été consultées ? Si **N/A**, justification explicite.
15. Quels **composants, flows et invariants** sont concernés ? Impacts **directs** et **indirects** (proportionnés) ?
16. Quel **statut de couverture** documentaire pour les domaines touchés (DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP) ?
17. Quel **impact documentaire** : `NO SEMANTIC IMPACT` / `UPDATE REQUIRED` / gap à ouvrir ?
18. Y a-t-il un candidat **KEEP / ADAPT / COMPLETE / HARVEST / CONSOLIDATE / REPLACE / FREEZE / RETIRE LATER** fondé sur preuves (pas sur inertie) ? Une **suppression structurante** est-elle envisagée (→ STOP + GO Morris) ?

Si **1** ou **7** n’a pas de réponse exploitable :

```text
STOP — TRAJECTORY LINK MISSING
```

Pour un chantier cognitif Nora, l’absence du point **13** empêche de qualifier honnêtement la solution de construction : effectuer l’OpenAI Capability Fit Check avant design interne équivalent.

Lorsque le chantier touche le **fonctionnement Studio** (analyse, conception, architecture, impact, rationalisation — même en lecture seule) et que le point **14** est absent sans justification N/A :

```text
STOP — ARCHITECTURE CONTEXT NOT LOADED
```


```

### A8 CONSOLIDATE + P3

```markdown
| **CONSOLIDATE** | Fusionner / simplifier des briques redondantes **sans** remplacer le cœur utile | Preuve de redondance + dépendances mappées + pas de perte de capacité utilisateur | Lot borné de consolidation | Avant/après capacité e2e + impact PRR |
| **REPLACE** | Remplacer par équivalent cible | Brique incompatible / non alignée | Migration + exit ancien | Ancien hors chemin critique |
| **FREEZE** | Ne plus étendre | N’aide pas le chemin critique | STOP DOING recommandé jusqu’à GO | Recommandation ≠ décision tant que Morris n’a pas tranché |
| **RETIRE LATER** | Retrait différé gouverné | Remplacé ou inutile après milestone | Disposition gate + **conditions de sortie** | Plan de retrait + preuve non-régression + **GO Morris** pour suppression structurante |

> **Distinctions obligatoires (CP01 / P3).** Classifier un actif **≠** recommander une suppression **≠** décider Morris **≠** autoriser l’exécution du retrait. **CONSOLIDATE** n’est pas une suppression. **RETIRE LATER** reste une disposition gouvernée. **Evidence-based rationalization (P3)** : aucun actif n’est conservé uniquement par inertie historique ou coût passé (aligné R3). Toute consolidation, substitution ou suppression doit être justifiée par besoins fonctionnels, responsabilités, dépendances, impacts, risques, preuves et stratégie de sortie. Une **suppression structurante** exige un **GO Morris** spécifique.


```

### A11 PRR

```markdown
| **Production Runtime Reference (PRR)** | SoT **documentaire CURRENT as-implemented** du runtime Studio — **subordonnée** à Git + preuves primaires (R23 / CP03) |
| Sources cycle / repo | Preuves locales du chantier |
| Mémoire conversationnelle | Non SoT |


```

### A12 sequence

```markdown
Repo-informed pre-check
  → si Studio trigger : Convergence pre-check
  → si fonctionnement Studio concerné (analyse/conception/architecture/impact/rationalisation, même lecture seule) :
      PRR volumes applicables (R23) — sinon N/A justifié
  → qualification cycle
  → si Nora cognitive : OpenAI Capability Fit Check (R22)
  → CKC/process guidance applicable (v2.6 process only)
  → sources spécifiques
  → instanciation prompt Cursor
```


```

### A14 stops

```markdown
## A14. Stop markers

```text
STOP — TRAJECTORY LINK MISSING
STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
STOP — ARCHITECTURE CONTEXT NOT LOADED
STOP — STRUCTURAL RETIREMENT REQUIRES MORRIS GO
```

> Les marqueurs historiques sont **préservés**. `STOP — ARCHITECTURE CONTEXT NOT LOADED` aligne Build Doctrine, routing et template lorsqu’un contexte PRR obligatoire est absent. Ne pas multiplier des STOP sémantiquement équivalents.


```

---

## 6. Roadmap tip + B-AKG

### Tip CURRENT

```
| **Timestamp maintenance SFIA-STUDIO-ARCHITECTURAL-KNOWLEDGE-AND-CONSTRUCTION-GOVERNANCE AKG-M0 DOCUMENTARY AUTHORING** | 2026-10-19 Europe/Paris — **AKG-M0 — METHODOLOGICAL FOUNDATION — DOCUMENTARY AUTHORING LOCAL (ÉTAPE 1)** · Chantier transversal **SFIA-STUDIO-ARCHITECTURAL-KNOWLEDGE-AND-CONSTRUCTION-GOVERNANCE** · Cycle **8 — Delivery / implémentation (spécialisation documentaire gouvernance)** · Profile **Critical** · Typologie **DOC / GOVERNANCE / METHOD** · origin/main **`c9abdbc37830d687cc8a504b97db659b47aa0f5b`** · PR **#590** = **MERGED** · Single Human Execute / Option A = **INTEGRATED ON MAIN** · P6 GLOBAL PASS = **NOT ACQUIRED** · runtime v3 = **NON ADOPTED** · AKG-M0 = **LOCAL AUTHORING IN PROGRESS** (cinq documents de contenu A–E ; **≠** PREPARATION ONLY historique ; **≠** INTEGRATED ON MAIN ; **≠** METHOD ACTIVE ON MAIN) · Critical Review ChatGPT / intégration Git M0 = **OUVERTES** · PRR README digest sync = **PENDING** (étape 2 post-revue sémantique) · manifest PRR = **INCHANGÉ cette étape** · Product/runtime = **NONE** · Project push/PR/merge = **NONE** · Jalons méthodologiques **AKG-M0…AKG-M5** (≠ milestones Convergence historiques M1–M5) · C1 / doctrine v3 = **NOT MODIFIED** · Next = ChatGPT Semantic Review → PRR digest sync → Git Integration GO distinct · **≠** P6 PASS · **≠** v3 ADOPTED · **≠** AKG-M0 ACTIVE ON MAIN |
```

### B-AKG

```markdown
## B-AKG. Chantier transversal — Architectural Knowledge & Construction Governance

> **Portée :** méthode de construction / connaissance architecturale de SFIA Studio.
> **Ne remplace pas** Product Completion, ni le chemin critique Convergence historique (B10), ni les milestones historiques Convergence M1–M5.
> **Relation à P6 :** AKG **soutient** la transformation Product et la QA intégrée ; **ne constitue pas** une preuve P6 GLOBAL PASS.
> **Identifiants :** utiliser exclusivement le préfixe **AKG-M*** pour ce chantier (CP05 / anti-collision).

### Distinctions de statut (CP05 / CP06)

| Stade | Signification |
| --- | --- |
| Cadrage validé | GO Morris de préparation / cadrage consommé |
| Propositions préparées | Review Pack préparatoire (handoff `162ab68e`) |
| **Authoring local** | Cinq documents de contenu modifiés localement (cette étape) |
| Critical Review | Revue sémantique ChatGPT des contenus authorés |
| Intégration Git | Commit/PR/merge sous gates distincts |
| **ACTIVE ON MAIN** | Uniquement après intégration + vérification Git |

**AKG-M0 ne peut pas être déclaré INTEGRATED / ACTIVE ON MAIN** avant intégration et vérification Git sous gates distincts.

### Jalons AKG

| Jalon | Finalité | Capacité v3 | Dépendances | Livrables | Critères de sortie | Preuves | Risques | Gates Morris | Suivant |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **AKG-M0** Methodological Foundation | Encoder P1–P3 (architecture-informed, continuité doc, rationalisation evidence-based) dans Build Doctrine / Roadmap / PRR contrat / routing / template | V3-F05 (+ F02/F06/F07/F11/F12/F14/F15 transverses) | Cadrage M0 ; handoff préparatoire | Amendements documentaires allowlist ; Review Pack ; handoff | Critical Review PASS (ou réserves non bloquantes) + GO authoring consommé + (ultérieur) intégration Git | Diff borné ; handoff SHA/blob ; checker PRR (digest README pending) | Collision naming ; sur-contrôle ; claim ACTIVE trop tôt | GO M0 DOCUMENTARY AUTHORING (consommé) · Semantic Review · Digest sync · Git Integration GO | AKG-M1 |
| **AKG-M1** System Inventory | Inventaire exhaustif du système réellement implémenté | V3-F05 / F14 | AKG-M0 intégré ou GO inventaire explicite | Inventaire objets/flows/deps vs Git | Couverture inventaire bornée et traçable | Tables + refs code | Exhaustivité impossible en un lot | GO inventaire | AKG-M2 |
| **AKG-M2** Architecture Understanding | Cartes responsabilités / interactions | V3-F05 / F06 | AKG-M1 | Cartes validées | Revue de compréhension | Cartes + gaps | Sur-modélisation | GO understanding | AKG-M3 |
| **AKG-M3** Reference Consolidation | Consolider la PRR ; mesurer couverture | V3-F05 / F12 | AKG-M2 | PRR consolidée ; volume 09 à jour | Critères couverture appliqués | Conformance + revue sémantique | Tentation 2e référentiel | GO PRR sync | AKG-M4 |
| **AKG-M4** Rationalization Assessment | Matrice KEEP/ADAPT/CONSOLIDATE/REPLACE/RETIRE sur preuves | V3-F05 / F07 | AKG-M3 | Matrice + impact packs | Décisions Morris par lot | Impact + preuves | Suppression prématurée | GO rationalize (+ GO retire si structurant) | AKG-M5 |
| **AKG-M5** Product Transformation | Lots Product gouvernés si GO | V3-F05+ | AKG-M4 + GO Product distinct | Lots Product | Preuves Product selon GO | CI/HQA selon GO | Confusion avec P6 Exit | GO Product distinct | — |

### Non-claims AKG

- AKG-M0 AUTHORING LOCAL **≠** AKG-M0 ACTIVE ON MAIN
- AKG **≠** P6 GLOBAL PASS
- AKG **≠** runtime v3 ADOPTED
- Classification CONSOLIDATE/RETIRE **≠** autorisation de retrait immédiat



```

---

## 7. PRR README

```markdown
### Canonical documentary role (AKG-M0)

The PRR is the **canonical documentary reference** for Studio’s **CURRENT as-implemented** behaviour.

**CP03 — authority boundary:**

1. **Git current tree** and **primary proofs** (tests, schemas, runtime observations) remain **superior** to any descriptive documentation.
2. The PRR **never** outranks Git or primary proofs.
3. When code/proofs contradict the PRR: **code/proofs win**; record an explicit **KNOWN GAP** (do not silently “fix” narrative to match hope).

### Progressive architectural dimensions

Cover progressively via existing volumes (do **not** invent a parallel corpus; do **not** auto-create one volume per dimension):

| Dimension | Primary volumes |
|---|---|
| Functional capabilities / journeys | 03 (+ Roadmap B9 doctrine coverage) |
| Technical components | 01, 02 |
| Responsibilities | 02, 07 |
| Interfaces / interactions | 03, 04 |
| Dependencies | 04 |
| Flows / events | 03 |
| Business objects | 02 |
| Data / transformations | 02, 06 |
| Persistence / transactions | 06 |
| Authority / governance | 07 |
| Recovery / resilience | 06 |
| External integrations | 05 |
| Tests / proofs | 08 |
| Debt / reserves | 09 |
| Component history / disposition | 09 + Convergence Roadmap (history) — do not duplicate chronology here |

**Articulation:** technical inventory (01/02) ↔ functional capabilities & journeys (03) ↔ interactions/dependencies (03/04).

### Coverage status vocabulary (CP04)

Do **not** use “covered” as a synonym for “fully proven behaviour”.

| Status | Meaning |
|---|---|
| **DOCUMENTED** | Information is described in the corpus |
| **COVERAGE VERIFIED** | Scope identified and documentary coverage checked against relevant Git/sources |
| **BEHAVIOR PROVEN** | Behaviour supported by an explicit proof whose **level** is stated (deterministic / REAL boundary / E2E REAL / …) |
| **KNOWN GAP** | Missing, contradictory, or insufficiently demonstrated |

A domain may be DOCUMENTED without being COVERAGE VERIFIED or BEHAVIOR PROVEN. Digest match alone never implies semantic validity.

**AKG-M0 does not declare the PRR exhaustive.**


```

```markdown
## Living maintenance contract

For any Studio change touching tracked paths in the manifest — and for **architecture-informed** analyses of Studio behaviour (even read-only):

1. **Consult beforehand** the applicable PRR volumes (proportionate selection — not necessarily all volumes).
2. Run **impact analysis** (see volume 04): direct and indirect impacts.
3. Review affected object cards, flows, dependencies, invariants.
4. Review env / persistence / restart if applicable.
5. Record **coverage status** for touched domains (DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP).
6. Run mapped regression tests when behaviour is at stake.
7. Update architecture **content** if semantics changed (documentary continuity).
8. Record `NO SEMANTIC IMPACT` when only implementation changed without semantic shift.
9. Refresh digests **only after** human/ChatGPT **semantic** review of content.
10. Keep non-claims honest (no P6 GLOBAL PASS / runtime v3 ADOPTED inflation).

**AUTOMATE DRIFT DETECTION — NEVER AUTOMATE STRUCTURAL ARBITRATION.**

A digest mismatch means: `REFERENCE REVIEW REQUIRED`.
Refreshing a digest ≠ validating semantic correctness.
Documentary sync is a **validation criterion** of the change set when semantics move.


```

---

## 8. Routing 4.3.0a

```markdown
#### 4.3.0a SFIA STUDIO CONVERGENCE PRE-CHECK

> **Portée :** uniquement les travaux dont l’objet est la **construction ou l’évolution de SFIA Studio**.
> **Ne s’applique pas** aux autres projets SFIA sans rapport avec la construction de SFIA Studio.
> **Ne transforme pas** le routing générique SFIA en processus exclusif Studio.

**Trigger = oui** si la demande concerne analyse, cadrage, roadmap, architecture, conception, delivery, validation, PR readiness, post-merge, capitalisation, prompt Cursor, évolution méthode/template ou évolution runtime **de SFIA Studio**.

**Sources obligatoires supplémentaires (ordre) :**

1. Git courant + décisions Morris explicites ;
2. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` ;
3. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` ;
4. Product Completion C1 si le cycle touche Product Completion / C2+ : `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` ;
5. doctrine produit v3 applicable (`projects/sfia-studio/sfia-v3-framing/**`, notamment `30`–`37`) ;
6. **PRR applicable** — `projects/sfia-studio/production-runtime-reference/` (README + **volumes sélectionnés**) lorsque le cycle concerne le **fonctionnement Studio** : analyse, conception, architecture, étude d’impact, rationalisation, correction, delivery runtime, validation comportementale — **y compris en lecture seule** (CP02). Si non pertinent : déclarer **N/A** avec justification. **Ne pas** exiger la lecture intégrale de tous les volumes ;
7. sources Studio/repo techniques spécifiques au cycle ;
8. processus SFIA **v2.6** nécessaire à l’exécution du cycle (template, operating model, guardrails).

**Architecture-informed check (proportionné) :**

- volumes PRR retenus listés ;
- composants / flows / invariants concernés ;
- impacts directs et indirects proportionnels ;
- statut de couverture (DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP) ;
- si contradiction code↔doc : **KNOWN GAP** ; **Git + preuves primaires gagnent** (CP03).

**Clarifications obligatoires :**

| Affirmation | Statut |
| --- | --- |
| SFIA Studio v3 | doctrine **produit cible Studio** (décidée) |
| SFIA v2.6 | baseline **opérationnelle** du processus ChatGPT/Cursor externe |
| Build Doctrine + Roadmap | gouvernance de **construction** — **pas** doctrine runtime produit |
| PRR | référence **documentaire CURRENT** — **≠** autorité supérieure à Git/preuves |
| Runtime v3 ADOPTED | **non** tant que preuves/gates manquent |
| Coexistence doctrinale runtime v2.6/v3 dans Studio | **ne pas réintroduire** |

Consulter le template v2.6 pour **exécuter** les cycles de construction **ne signifie pas** charger v2.6 comme doctrine produit Studio.

Si le contexte convergence requis n’est pas chargé :

```text
STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
```

Si le fonctionnement Studio est concerné et que le contexte PRR applicable est absent sans N/A justifié :

```text
STOP — ARCHITECTURE CONTEXT NOT LOADED
```

**Sans gate Morris dédié** (contrôles L1 ou validations techniques non structurantes) :

- vérifications read-only de cohérence documentaire ;
- PR readiness technique sans arbitrage ;
- post-merge L1 (statut, liens, registre) ;
- contrôles répétables automatisables (L1/L2).

> Règle v2.4 : *réserver Morris aux arbitrages structurants — pas à chaque micro-alignement.*
> Les gates Morris existants (promotion, REAL, suppression structurante, Git Integration) sont **préservés**.


```

---

## 9. Template 2.0.D / 2.0.G

```markdown
SFIA Studio Convergence Pre-check :
- triggered : oui / non
- Build Doctrine :
  - path : projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
  - ref :
  - lue : oui/non
  - statut :
- Convergence Roadmap :
  - path : projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
  - ref :
  - lue : oui/non
  - snapshot/milestone courant :
- doctrine v3 applicable :
- capacité v3 ciblée :
- milestone ciblée :
- classification actifs :
- gap(s) fermé(s) :
- lien trajectoire :
- exit proof :
- dette temporaire :
- trajectoire de sortie :
- gates Morris :
- PRR applicable : oui / non / N/A
- PRR N/A justification : [obligatoire si N/A]
- PRR volumes consultés :
- composants / flows / invariants concernés :
- statut de couverture : DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP
- impact documentaire : NONE / UPDATE REQUIRED / GAP
- risques architecture :
- preuves applicables :
- verdict : CONVERGENCE CONTEXT LOADED / PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE / STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED / STOP — ARCHITECTURE CONTEXT NOT LOADED
```


```

```markdown
#### G. SFIA Studio Convergence Pre-check (spécialisation bornée)

> **Ne s’applique pas** aux projets SFIA sans rapport avec la construction de SFIA Studio.
> **Ne transforme pas** ce template en template Studio-only.
> **Ne promeut pas** SFIA v2.6 comme doctrine runtime Studio.

**Trigger Studio = oui** si l’objet est la construction, l’évolution, l’architecture, la roadmap, la validation ou le prompting de **SFIA Studio** (même trigger que routing guide §4.3.0a).

Lorsque trigger = oui, ChatGPT **doit** lire depuis Git **avant** de générer le prompt :

1. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
2. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
3. sources v3 applicables (`projects/sfia-studio/sfia-v3-framing/**`)
4. **PRR applicable** (`projects/sfia-studio/production-runtime-reference/` + volumes sélectionnés) lorsque le cycle concerne le **fonctionnement Studio** — analyse, conception, architecture, impact, rationalisation, correction, delivery runtime, validation comportementale — **y compris en lecture seule** (aligné routing §4.3.0a / CP02). Si non pertinent : **N/A** + justification. Ne pas exiger tous les volumes.
5. état repo/projet Studio concerné

**Règle dure :**

```text
trigger Studio = oui
ET (Build Doctrine non lue
    OU Roadmap non lue
    OU capacité / trajectory link non qualifié
    OU (fonctionnement Studio concerné
        ET PRR applicable non consultée
        ET N/A non justifié))
→ NE PAS générer le prompt Cursor

PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
```

Si l’analyse Studio elle-même n’a pas chargé le contexte convergence requis :

```text
STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
```

Si le fonctionnement Studio est concerné et que le contexte architectural PRR obligatoire est absent :

```text
STOP — ARCHITECTURE CONTEXT NOT LOADED
```

> Marqueur unique partagé avec Build Doctrine / routing — ne pas inventer des STOP équivalents supplémentaires.

Séquence :

```text
Repo-informed pre-check
→ si Studio trigger : Convergence Pre-check (§2.0.G + mini-fiche)
→ si fonctionnement Studio : PRR volumes applicables (sinon N/A)
→ qualification cycle
→ CKC/process guidance applicable
→ sources spécifiques
→ instanciation prompt Cursor
```

Clarifications : Build Doctrine + Roadmap = gouvernance de **construction** ; doctrine v3 = destination produit ; PRR = référence documentaire CURRENT (**subordonnée** à Git/preuves) ; v2.6 = baseline opérationnelle processus ; runtime v3 **non ADOPTED** par défaut.


```

---

## 10. CP01-CP06

| CP | Verdict | Preuve |
|----|---------|--------|
| CP01 | PASS | R4 coherent A8+CONSOLIDATE; CONSOLIDATE!=suppression; RETIRE LATER+GO Morris |
| CP02 | PASS | PRR pour analyse/conception/architecture/impact/rationalisation meme lecture seule |
| CP03 | PASS | PRR documentaire CURRENT; Git/preuves prioritaires |
| CP04 | PASS | DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP |
| CP05 | PASS | AUTHORING LOCAL != ACTIVE ON MAIN |
| CP06 | PASS | Tip CURRENT = DOCUMENTARY AUTHORING LOCAL |

---

## 11. Checker PRR (read-only)

```
OK: canonical README exists
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/README.md: manifest=409a4fe71bbb40df current=2d19c02ff9419a16 => REFERENCE REVIEW REQUIRED
RESULT: REFERENCE REVIEW REQUIRED / CONFORMANCE FAILED
```

Reserve attendue README only. Aucun --write-digests. Manifest inchange.

---

## 12. Diff unifie A-E

```diff
diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index 8949e764..a7d89f78 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -223,6 +223,7 @@ Morris valide le profil si **Critical** ou changement de doctrine.

 > **Portée :** uniquement les travaux dont l’objet est la **construction ou l’évolution de SFIA Studio**.
 > **Ne s’applique pas** aux autres projets SFIA sans rapport avec la construction de SFIA Studio.
+> **Ne transforme pas** le routing générique SFIA en processus exclusif Studio.

 **Trigger = oui** si la demande concerne analyse, cadrage, roadmap, architecture, conception, delivery, validation, PR readiness, post-merge, capitalisation, prompt Cursor, évolution méthode/template ou évolution runtime **de SFIA Studio**.

@@ -231,9 +232,19 @@ Morris valide le profil si **Critical** ou changement de doctrine.
 1. Git courant + décisions Morris explicites ;
 2. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` ;
 3. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` ;
-4. doctrine produit v3 applicable (`projects/sfia-studio/sfia-v3-framing/**`, notamment `30`–`37`) ;
-5. sources Studio/repo spécifiques au cycle ;
-6. processus SFIA **v2.6** nécessaire à l’exécution du cycle (template, operating model, guardrails).
+4. Product Completion C1 si le cycle touche Product Completion / C2+ : `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` ;
+5. doctrine produit v3 applicable (`projects/sfia-studio/sfia-v3-framing/**`, notamment `30`–`37`) ;
+6. **PRR applicable** — `projects/sfia-studio/production-runtime-reference/` (README + **volumes sélectionnés**) lorsque le cycle concerne le **fonctionnement Studio** : analyse, conception, architecture, étude d’impact, rationalisation, correction, delivery runtime, validation comportementale — **y compris en lecture seule** (CP02). Si non pertinent : déclarer **N/A** avec justification. **Ne pas** exiger la lecture intégrale de tous les volumes ;
+7. sources Studio/repo techniques spécifiques au cycle ;
+8. processus SFIA **v2.6** nécessaire à l’exécution du cycle (template, operating model, guardrails).
+
+**Architecture-informed check (proportionné) :**
+
+- volumes PRR retenus listés ;
+- composants / flows / invariants concernés ;
+- impacts directs et indirects proportionnels ;
+- statut de couverture (DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP) ;
+- si contradiction code↔doc : **KNOWN GAP** ; **Git + preuves primaires gagnent** (CP03).

 **Clarifications obligatoires :**

@@ -242,6 +253,7 @@ Morris valide le profil si **Critical** ou changement de doctrine.
 | SFIA Studio v3 | doctrine **produit cible Studio** (décidée) |
 | SFIA v2.6 | baseline **opérationnelle** du processus ChatGPT/Cursor externe |
 | Build Doctrine + Roadmap | gouvernance de **construction** — **pas** doctrine runtime produit |
+| PRR | référence **documentaire CURRENT** — **≠** autorité supérieure à Git/preuves |
 | Runtime v3 ADOPTED | **non** tant que preuves/gates manquent |
 | Coexistence doctrinale runtime v2.6/v3 dans Studio | **ne pas réintroduire** |

@@ -253,6 +265,12 @@ Si le contexte convergence requis n’est pas chargé :
 STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
 ```

+Si le fonctionnement Studio est concerné et que le contexte PRR applicable est absent sans N/A justifié :
+
+```text
+STOP — ARCHITECTURE CONTEXT NOT LOADED
+```
+
 **Sans gate Morris dédié** (contrôles L1 ou validations techniques non structurantes) :

 - vérifications read-only de cohérence documentaire ;
@@ -261,6 +279,7 @@ STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
 - contrôles répétables automatisables (L1/L2).

 > Règle v2.4 : *réserver Morris aux arbitrages structurants — pas à chaque micro-alignement.*
+> Les gates Morris existants (promotion, REAL, suppression structurante, Git Integration) sont **préservés**.

 #### 4.3.4 Séquence de routage cible v2.4

diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
index b7be2435..b67635fa 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
@@ -93,14 +93,14 @@ valid human authorization

 Fondations doctrine produit associées : **V3-F01…V3-F15** (VALIDATED doctrine ; runtime coverage progressive via Roadmap).

-## A4. Règles fondatrices de construction (R1–R22)
+## A4. Règles fondatrices de construction (R1–R24)

 | ID | Règle |
 | --- | --- |
 | **R1** | Tout développement doit avoir un **lien direct** avec une capacité v3 (fondation V3-Fxx et/ou étape de la boucle A3). |
 | **R2** | La **boucle métier complète** prime sur la profondeur locale non bloquante. |
 | **R3** | **Réutiliser** l’existant utile ; **ne jamais** conserver uniquement par inertie / coût passé. |
-| **R4** | Classifier les actifs : **KEEP / ADAPT / COMPLETE / HARVEST / REPLACE / FREEZE / RETIRE LATER**. |
+| **R4** | Classifier les actifs : **KEEP / ADAPT / COMPLETE / HARVEST / CONSOLIDATE / REPLACE / FREEZE / RETIRE LATER**. |
 | **R5** | Une étape **intermédiaire** n’est autorisée qu’avec justification, cible, condition de sortie et trajectoire de sortie. |
 | **R6** | Une impasse ou **architecture parallèle** sans cible explicite est **interdite** comme chemin de construction par défaut. |
 | **R7** | Aucun **POC / fixture / spike gratuit** sur le chemin critique. |
@@ -119,9 +119,13 @@ Fondations doctrine produit associées : **V3-F01…V3-F15** (VALIDATED doctrine
 | **R20** | Toute brique **temporaire** doit rendre visible sa **sortie**. |
 | **R21** | **Fidélité Fake/Real.** Un fake/fixture substitue une **frontière externe**, pas un second chemin produit. Preuve déterministe ≠ preuve REAL. REAL-shaped deterministic reste DETERMINISTIC PROVEN. Les realism gaps restent visibles. Une frontière REAL significative se prouve **progressivement** (déterministe → REAL borné → end-to-end REAL). Aucun claim supérieur à la preuve. Aucun REAL automatique. |
 | **R22** | **Nora OpenAI-native-first.** Pour tout besoin cognitif Nora, qualifier d’abord les capacités OpenAI courantes pertinentes avant de développer un équivalent interne. Si une primitive OpenAI satisfait les exigences fonctionnelles/cognitives, la frontière Studio↔Nora↔Pilote, les contraintes de gouvernance/autorité, de preuve, sécurité/confidentialité, coût/latence et réversibilité applicables, **préférer son usage ou son adaptation minimale**. Si la couverture est partielle, combiner la primitive avec le **delta réellement spécifique à SFIA**. Construire une mécanique cognitive générique interne seulement si l’insuffisance/incompatibilité OpenAI est qualifiée. Une primitive OpenAI n’acquiert jamais l’autorité métier SFIA. Les capacités fournisseur doivent être revalidées quand le claim en dépend ; un snapshot OpenAI courant **≠ doctrine permanente**. |
+| **R23** | **Architecture-informed development (Studio).** Toute analyse, conception, correction, évolution, rationalisation ou validation pertinente de SFIA Studio doit s’appuyer sur une compréhension **actuelle et vérifiable** des mécanismes existants. Le niveau d’investigation est **proportionné** au risque. Les références architecturales applicables (`production-runtime-reference/**` et volumes concernés) sont consultées avant recommandation ou intervention. **Git courant et preuves primaires** priment sur la documentation descriptive ; toute contradiction devient un **gap** explicitement qualifié. |
+| **R24** | **Architecture documentation continuity.** Toute intervention Studio doit évaluer ses **impacts documentaires**. Toute modification du fonctionnement réel doit déclencher la synchronisation des sections architecturales concernées (contrat living PRR). L’absence d’impact sémantique doit être explicitement qualifiée (`NO SEMANTIC IMPACT`) lorsqu’applicable. Un digest PRR conforme **ne prouve pas** la validité sémantique du référentiel. |

 > **Lifecycle R22 : ACTIVE ON MAIN.** Principe de trajectoire explicitement consommé par Morris le 2026-09-01, intégré via PR **#453**, merge `d640b5ba7210b9da3593bea9eeae2100c6da6c09`, post-merge CI `33530815963` **SUCCESS**, Required Gate **PASS**.

+> **Lifecycle R23 / R24 :** codification AKG-M0 (authoring local) — **pas encore ACTIVE ON MAIN** tant que l’intégration Git M0 n’est pas consommée sous gates distincts.
+
 ## A5. Challenge obligatoire avant tout chantier Studio

 Avant cadrage / prompt Cursor / delivery Studio, répondre :
@@ -139,6 +143,11 @@ Avant cadrage / prompt Cursor / delivery Studio, répondre :
 11. Y a-t-il une **frontière fake/mock/fixture** ? Substitue-t-elle la frontière externe, ou crée-t-elle un **chemin produit parallèle** ?
 12. Quel **niveau de preuve** ce chantier peut-il honnêtement atteindre (DETERMINISTIC / REAL BOUNDARY / END-TO-END REAL) ? Quels **realism gaps** restent ouverts ?
 13. **Si le chantier touche la cognition Nora : quelles capacités OpenAI courantes pertinentes ont été évaluées avant toute solution interne équivalente ? Quelle disposition USE/KEEP · ADAPT · COMBINE · COMPLETE/BUILD · DEFER/REJECT est retenue et pourquoi ?**
+14. Quelles **références PRR** (README / volumes / objets / flows / invariants / gaps) ont été consultées ? Si **N/A**, justification explicite.
+15. Quels **composants, flows et invariants** sont concernés ? Impacts **directs** et **indirects** (proportionnés) ?
+16. Quel **statut de couverture** documentaire pour les domaines touchés (DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP) ?
+17. Quel **impact documentaire** : `NO SEMANTIC IMPACT` / `UPDATE REQUIRED` / gap à ouvrir ?
+18. Y a-t-il un candidat **KEEP / ADAPT / COMPLETE / HARVEST / CONSOLIDATE / REPLACE / FREEZE / RETIRE LATER** fondé sur preuves (pas sur inertie) ? Une **suppression structurante** est-elle envisagée (→ STOP + GO Morris) ?

 Si **1** ou **7** n’a pas de réponse exploitable :

@@ -148,6 +157,12 @@ STOP — TRAJECTORY LINK MISSING

 Pour un chantier cognitif Nora, l’absence du point **13** empêche de qualifier honnêtement la solution de construction : effectuer l’OpenAI Capability Fit Check avant design interne équivalent.

+Lorsque le chantier touche le **fonctionnement Studio** (analyse, conception, architecture, impact, rationalisation — même en lecture seule) et que le point **14** est absent sans justification N/A :
+
+```text
+STOP — ARCHITECTURE CONTEXT NOT LOADED
+```
+
 ## A6. Politique POC / prototype / fixture

 | Cas | Règle |
@@ -177,9 +192,12 @@ Pour un chantier cognitif Nora, l’absence du point **13** empêche de qualifie
 | **ADAPT** | Conserver + adapter interfaces | Cœur utile ; frontières à aligner | Lot d’adaptation borné | Contrat/port clarifié |
 | **COMPLETE** | Combler un trou d’une brique presque prête | Manque wiring/durabilité/UI | Milestone COMPLETE | Capacité e2e démontrée |
 | **HARVEST** | Extraire une capacité d’un système parallèle | Valeur isolable (ex. Cursor spawn) | Anti-corruption adapter | Adapter branché sans dual-product |
+| **CONSOLIDATE** | Fusionner / simplifier des briques redondantes **sans** remplacer le cœur utile | Preuve de redondance + dépendances mappées + pas de perte de capacité utilisateur | Lot borné de consolidation | Avant/après capacité e2e + impact PRR |
 | **REPLACE** | Remplacer par équivalent cible | Brique incompatible / non alignée | Migration + exit ancien | Ancien hors chemin critique |
 | **FREEZE** | Ne plus étendre | N’aide pas le chemin critique | STOP DOING recommandé jusqu’à GO | Recommandation ≠ décision tant que Morris n’a pas tranché |
-| **RETIRE LATER** | Retrait différé | Remplacé ou inutile après milestone | Disposition gate | Plan de retrait + preuve non-régression |
+| **RETIRE LATER** | Retrait différé gouverné | Remplacé ou inutile après milestone | Disposition gate + **conditions de sortie** | Plan de retrait + preuve non-régression + **GO Morris** pour suppression structurante |
+
+> **Distinctions obligatoires (CP01 / P3).** Classifier un actif **≠** recommander une suppression **≠** décider Morris **≠** autoriser l’exécution du retrait. **CONSOLIDATE** n’est pas une suppression. **RETIRE LATER** reste une disposition gouvernée. **Evidence-based rationalization (P3)** : aucun actif n’est conservé uniquement par inertie historique ou coût passé (aligné R3). Toute consolidation, substitution ou suppression doit être justifiée par besoins fonctionnels, responsabilités, dépendances, impacts, risques, preuves et stratégie de sortie. Une **suppression structurante** exige un **GO Morris** spécifique.

 ## A9. Chemin critique (priorité)

@@ -210,6 +228,7 @@ Elle se termine lorsqu’une **capacité utilisateur** ou une **précondition st
 | **Convergence Roadmap** | État + prochaine capacité |
 | **Product Completion C1 intégré** | Cible / scope / trajectoire adoptés explicitement par Morris |
 | **Nora OpenAI-native-first trajectory** | **ACTIVE ON MAIN** · trajectoire transverse cognitive MW2→MW6 · capability-fit/model-reasoning policy · intégrée via PR **#453** |
+| **Production Runtime Reference (PRR)** | SoT **documentaire CURRENT as-implemented** du runtime Studio — **subordonnée** à Git + preuves primaires (R23 / CP03) |
 | Sources cycle / repo | Preuves locales du chantier |
 | Mémoire conversationnelle | Non SoT |

@@ -226,6 +245,8 @@ Séquence attendue :
 ```text
 Repo-informed pre-check
   → si Studio trigger : Convergence pre-check
+  → si fonctionnement Studio concerné (analyse/conception/architecture/impact/rationalisation, même lecture seule) :
+      PRR volumes applicables (R23) — sinon N/A justifié
   → qualification cycle
   → si Nora cognitive : OpenAI Capability Fit Check (R22)
   → CKC/process guidance applicable (v2.6 process only)
@@ -250,7 +271,13 @@ Repo-informed pre-check
 - DETERMINISTIC PROVEN promu READY FOR REAL ;
 - **reconstruire une mécanique cognitive générique Nora alors qu’une capacité OpenAI pertinente existe, sans OpenAI Capability Fit Check ni justification de rejet/complément** ;
 - **traiter une primitive OpenAI comme HumanDecision, Evidence, Truth C ou autorité métier SFIA** ;
-- **figer un snapshot fournisseur/modèle courant comme doctrine permanente sans gate/preuve**.
+- **figer un snapshot fournisseur/modèle courant comme doctrine permanente sans gate/preuve** ;
+- intervention Studio sur le fonctionnement sans consultation PRR / code lorsque applicable (R23) ;
+- digest PRR rafraîchi présenté comme validation sémantique (R24) ;
+- conservation d’un composant « parce qu’il existe déjà » sans classification evidence-based (P3) ;
+- **CONSOLIDATE** ou **RETIRE LATER** présentés comme autorisation de suppression immédiate ;
+- suppression structurante sans GO Morris / plan de retrait ;
+- second référentiel architectural parallèle à la PRR.

 ## A14. Stop markers

@@ -258,8 +285,12 @@ Repo-informed pre-check
 STOP — TRAJECTORY LINK MISSING
 STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
 PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
+STOP — ARCHITECTURE CONTEXT NOT LOADED
+STOP — STRUCTURAL RETIREMENT REQUIRES MORRIS GO
 ```

+> Les marqueurs historiques sont **préservés**. `STOP — ARCHITECTURE CONTEXT NOT LOADED` aligne Build Doctrine, routing et template lorsqu’un contexte PRR obligatoire est absent. Ne pas multiplier des STOP sémantiquement équivalents.
+
 ## A15. Gouvernance d’évolution

 - Document **stable** : modification uniquement via cycle explicite + impact analysé + décision Morris.
@@ -276,3 +307,4 @@ PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
 - Routing : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
 - Knowledge Layer : `method/sfia-fast-track/core/sfia-knowledge-layer.md`
 - Template : `prompts/templates/sfia-cycle-execution-template.md`
+- Production Runtime Reference : `projects/sfia-studio/production-runtime-reference/`
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 7885d752..ab272065 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 D-P6-SHE-01 SINGLE HUMAN EXECUTE GOVERNANCE SYNC** | 2026-10-18 Europe/Paris — **P6 — SINGLE HUMAN EXECUTE / OPTION A — GOVERNANCE DOCUMENTARY SYNCHRONIZATION CANDIDATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Chantier **P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY** · Cycle **3 — Architecture fonctionnelle** · Profile **Critical** · Typologie **DOC / GOVERNANCE / ARCHITECTURE DECISION SYNC** · Decision **D-P6-SHE-01** = **ADOPTED BY MORRIS — TARGET ARCHITECTURE** (2026-10-18) · Option A = **ADOPTED** · SINGLE HUMAN EXECUTE = **ADOPTED** · Sources sync (local candidate) = Build Doctrine A3 · D-ER-18 amendement · Authority Invariants CURRENT/TARGET · V3-F05/F11-F12 clarifications · this Roadmap tip · C1 = **NOT MODIFIED** (historique VALIDATED) · Architecture impact handoff = `c3095635` / blob `5e2fd1f5` · Structural refusal diagnostic = `eebc6e93` · origin/main / Delivery HEAD known **`304e30e8…`** · Option B Product dirty **PRESERVED / NOT THIS CYCLE** · HQA AtelierNova Generic PREPARE **BLOCKED (CURRENT)** · HQA replay = **NOT AUTHORIZED** · Delivery Product = **NOT AUTHORIZED** · Git Integration of this sync = **NOT AUTHORIZED** (gate ChatGPT Critical Review → GO distinct) · P6 GLOBAL PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · CURRENT ≠ TARGET · ADOPTED TARGET ≠ IMPLEMENTED · Trajectoire = V3-F05 → **D-P6-SHE-01** → Generic PREPARE inspectable → Execute orchestration → DET proof → HQA LIVE → P6 Exit · Gates restants = (1) ChatGPT documentary review (2) Git Integration GO (3) Delivery Product GO (4) HQA replay GO (5) P6 Exit / promotion · Dette **TOOL-FIRST-REAL-NOWRITE** = **OPEN** · **≠** Delivery · **≠** runtime implemented · **≠** P6 PASS · **≠** v3 ADOPTED |
+| **Timestamp maintenance SFIA-STUDIO-ARCHITECTURAL-KNOWLEDGE-AND-CONSTRUCTION-GOVERNANCE AKG-M0 DOCUMENTARY AUTHORING** | 2026-10-19 Europe/Paris — **AKG-M0 — METHODOLOGICAL FOUNDATION — DOCUMENTARY AUTHORING LOCAL (ÉTAPE 1)** · Chantier transversal **SFIA-STUDIO-ARCHITECTURAL-KNOWLEDGE-AND-CONSTRUCTION-GOVERNANCE** · Cycle **8 — Delivery / implémentation (spécialisation documentaire gouvernance)** · Profile **Critical** · Typologie **DOC / GOVERNANCE / METHOD** · origin/main **`c9abdbc37830d687cc8a504b97db659b47aa0f5b`** · PR **#590** = **MERGED** · Single Human Execute / Option A = **INTEGRATED ON MAIN** · P6 GLOBAL PASS = **NOT ACQUIRED** · runtime v3 = **NON ADOPTED** · AKG-M0 = **LOCAL AUTHORING IN PROGRESS** (cinq documents de contenu A–E ; **≠** PREPARATION ONLY historique ; **≠** INTEGRATED ON MAIN ; **≠** METHOD ACTIVE ON MAIN) · Critical Review ChatGPT / intégration Git M0 = **OUVERTES** · PRR README digest sync = **PENDING** (étape 2 post-revue sémantique) · manifest PRR = **INCHANGÉ cette étape** · Product/runtime = **NONE** · Project push/PR/merge = **NONE** · Jalons méthodologiques **AKG-M0…AKG-M5** (≠ milestones Convergence historiques M1–M5) · C1 / doctrine v3 = **NOT MODIFIED** · Next = ChatGPT Semantic Review → PRR digest sync → Git Integration GO distinct · **≠** P6 PASS · **≠** v3 ADOPTED · **≠** AKG-M0 ACTIVE ON MAIN |
+| **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 D-P6-SHE-01 SINGLE HUMAN EXECUTE GOVERNANCE SYNC** | 2026-10-18 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 — SINGLE HUMAN EXECUTE / OPTION A — GOVERNANCE DOCUMENTARY SYNCHRONIZATION CANDIDATE *(true then as tip; superseded as tip by AKG-M0 documentary authoring 2026-10-19 — SHE Option A TARGET ADOPTED facts remain ; PR #590 later MERGED on main `c9abdbc3`)* · **P6 — SINGLE HUMAN EXECUTE / OPTION A — GOVERNANCE DOCUMENTARY SYNCHRONIZATION CANDIDATE** · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Chantier **P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY** · Cycle **3 — Architecture fonctionnelle** · Profile **Critical** · Typologie **DOC / GOVERNANCE / ARCHITECTURE DECISION SYNC** · Decision **D-P6-SHE-01** = **ADOPTED BY MORRIS — TARGET ARCHITECTURE** (2026-10-18) · Option A = **ADOPTED** · SINGLE HUMAN EXECUTE = **ADOPTED** · Sources sync (local candidate) = Build Doctrine A3 · D-ER-18 amendement · Authority Invariants CURRENT/TARGET · V3-F05/F11-F12 clarifications · this Roadmap tip · C1 = **NOT MODIFIED** (historique VALIDATED) · Architecture impact handoff = `c3095635` / blob `5e2fd1f5` · Structural refusal diagnostic = `eebc6e93` · origin/main / Delivery HEAD known **`304e30e8…`** · Option B Product dirty **PRESERVED / NOT THIS CYCLE** · HQA AtelierNova Generic PREPARE **BLOCKED (CURRENT)** · HQA replay = **NOT AUTHORIZED** · Delivery Product = **NOT AUTHORIZED** · Git Integration of this sync = **NOT AUTHORIZED** (gate ChatGPT Critical Review → GO distinct) · P6 GLOBAL PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · CURRENT ≠ TARGET · ADOPTED TARGET ≠ IMPLEMENTED · Trajectoire = V3-F05 → **D-P6-SHE-01** → Generic PREPARE inspectable → Execute orchestration → DET proof → HQA LIVE → P6 Exit · Gates restants = (1) ChatGPT documentary review (2) Git Integration GO (3) Delivery Product GO (4) HQA replay GO (5) P6 Exit / promotion · Dette **TOOL-FIRST-REAL-NOWRITE** = **OPEN** · **≠** Delivery · **≠** runtime implemented · **≠** P6 PASS · **≠** v3 ADOPTED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 MACRO CAMPAIGN CONTINUATION** | 2026-10-08 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 GLOBAL INTEGRATED PRODUCT QA — MACRO CAMPAIGN CONTINUATION / PHASE-1 REQUALIFICATION *(true then; superseded as tip by D-P6-SHE-01 governance sync 2026-10-18 — campaign facts remain VALID / REUSED)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **9 — QA / validation** · Profile **Critical** · campaignId **P6-GLOBAL-INTEGRATED-PRODUCT-QA-01** · origin/main **`aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1`** · PR **#571** MERGED · CI **#713** SUCCESS · Phase 0 = **COMPLETE / INTEGRATED / POST-MERGE VERIFIED** · GO P6 EXECUTION / GO P6 REAL = **AUTHORIZED / CONSUMED** · Phase 1 = **PASS / REQUALIFIED WITH CURRENT P6 REAL SMOKES** (fresh SMOKE-01/02/03 · browser QUALIFIED · provider CAPTURED · authority profiles CONTROLLED) · prior Phase 2/3/4 evidence = **VALID / REUSED** · Phase 2 scenario disposition + Phase 3 Router-in-situ/discrimination continuation · Phase 5 Human QA batch = **REGENERATING / NOT YET PRIMARY HANDOFF** · P6 PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · production routing changed = **NO** · branche `qa/sfia-studio-p6-global-integrated-product-qa` · Project push / PR / merge = **NONE** · Next was exhaust AUTO → **MORRIS HUMAN QA BATCH** · **≠** P6 PASS · **≠** runtime v3 ADOPTED |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 MACRO CAMPAIGN EXECUTION** | 2026-10-08 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 MACRO CAMPAIGN EXECUTION *(true then; Phase-1 smokes later requalified as CURRENT P6 REAL)* · Phase 1 then claimed PASS with P5.S05 historical SMOKE-01 + DET-only SMOKE-03 · superseded by CONTINUATION / REQUALIFICATION tip · campaignId **P6-GLOBAL-INTEGRATED-PRODUCT-QA-01** · origin/main baseline **`aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1`** · PR **#571** MERGED · CI **#713** SUCCESS · GO P6 EXECUTION / GO P6 REAL = **AUTHORIZED / CONSUMED** · P6 STARTED = **YES** · P6 PASS = **NOT CLAIMED** · runtime v3 = **NON ADOPTED** · branche `qa/sfia-studio-p6-global-integrated-product-qa` · Project push / PR / merge = **NONE** |
 | **Timestamp maintenance STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 P6 QA CONTRACT GIT INTEGRATION** | 2026-10-08 Europe/Paris — **HISTORICAL / SUPERSEDED AS TIP** — prior tip P6 GLOBAL INTEGRATED PRODUCT QA — QA CONTRACT ACCEPTANCE & GIT INTEGRATION *(true then; superseded by PR #571 MERGED + CI #713 + GO P6 EXECUTION/REAL consumed)* · Macro **STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01** · Cycle **13 — PR readiness / Git Integration** · Profile **Critical** · Typologie **DOC / GOVERNANCE / PR READINESS / GIT INTEGRATION** · Milestone **P6** · Entry main **`1e9d261a252ffb44c73614db5d501cb93ce55d8b`** · PR **#570** MERGED · CI **#711** SUCCESS · P5 COMPLETE = **YES / INTEGRATED / POST-MERGE VERIFIED** · ChatGPT Closure Review = **PASS / CONSUMED** · P6-QA-CONTRACT-01…12 = **CLOSED** · Morris P6 QA Contract Acceptance = **AUTHORIZED / CONSUMED** · Morris P6 QA Contract Git Integration GO = **AUTHORIZED / CONSUMED** · Canonical = `product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md` · P6 QA CONTRACT = **MORRIS ACCEPTED / GIT INTEGRATION IN PROGRESS** · Phase 0 = **CONTRACT ACCEPTED / READY FOR GIT INTEGRATION** · Campaign strategy = **REAL-FIRST HYBRID** · GO P6 EXECUTION = **NOT AUTHORIZED** · GO P6 REAL — BOUNDED CAMPAIGN = **NOT AUTHORIZED** · P6 READY = **NO** · P6 STARTED = **NO** · runtime v3 = **NON ADOPTED** · entry candidate HEAD = **`29e91b348c1476156365c5d10fc3050823987916`** · branche `audit/sfia-studio-product-completion-p6-global-integrated-qa-qualification` · Project push / Draft PR = **AUTHORIZED THIS CYCLE** · Merge = **NOT AUTHORIZED** · Next then = Draft PR + CI → **MORRIS MERGE REVIEW / MERGE GO** *(superseded by PR #571 MERGED)* · **≠** P6 READY · **≠** P6 STARTED · **≠** GO P6 EXECUTION · **≠** GO P6 REAL · **≠** runtime v3 ADOPTED · **≠** merge |
@@ -239,6 +240,45 @@
 Roadmap de **capacités**. Pas de dates inventées. Pas de timeline calendaire artificielle.
 Observation / Recommendation / Decision Required doivent rester **distincts**.

+## B-AKG. Chantier transversal — Architectural Knowledge & Construction Governance
+
+> **Portée :** méthode de construction / connaissance architecturale de SFIA Studio.
+> **Ne remplace pas** Product Completion, ni le chemin critique Convergence historique (B10), ni les milestones historiques Convergence M1–M5.
+> **Relation à P6 :** AKG **soutient** la transformation Product et la QA intégrée ; **ne constitue pas** une preuve P6 GLOBAL PASS.
+> **Identifiants :** utiliser exclusivement le préfixe **AKG-M*** pour ce chantier (CP05 / anti-collision).
+
+### Distinctions de statut (CP05 / CP06)
+
+| Stade | Signification |
+| --- | --- |
+| Cadrage validé | GO Morris de préparation / cadrage consommé |
+| Propositions préparées | Review Pack préparatoire (handoff `162ab68e`) |
+| **Authoring local** | Cinq documents de contenu modifiés localement (cette étape) |
+| Critical Review | Revue sémantique ChatGPT des contenus authorés |
+| Intégration Git | Commit/PR/merge sous gates distincts |
+| **ACTIVE ON MAIN** | Uniquement après intégration + vérification Git |
+
+**AKG-M0 ne peut pas être déclaré INTEGRATED / ACTIVE ON MAIN** avant intégration et vérification Git sous gates distincts.
+
+### Jalons AKG
+
+| Jalon | Finalité | Capacité v3 | Dépendances | Livrables | Critères de sortie | Preuves | Risques | Gates Morris | Suivant |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| **AKG-M0** Methodological Foundation | Encoder P1–P3 (architecture-informed, continuité doc, rationalisation evidence-based) dans Build Doctrine / Roadmap / PRR contrat / routing / template | V3-F05 (+ F02/F06/F07/F11/F12/F14/F15 transverses) | Cadrage M0 ; handoff préparatoire | Amendements documentaires allowlist ; Review Pack ; handoff | Critical Review PASS (ou réserves non bloquantes) + GO authoring consommé + (ultérieur) intégration Git | Diff borné ; handoff SHA/blob ; checker PRR (digest README pending) | Collision naming ; sur-contrôle ; claim ACTIVE trop tôt | GO M0 DOCUMENTARY AUTHORING (consommé) · Semantic Review · Digest sync · Git Integration GO | AKG-M1 |
+| **AKG-M1** System Inventory | Inventaire exhaustif du système réellement implémenté | V3-F05 / F14 | AKG-M0 intégré ou GO inventaire explicite | Inventaire objets/flows/deps vs Git | Couverture inventaire bornée et traçable | Tables + refs code | Exhaustivité impossible en un lot | GO inventaire | AKG-M2 |
+| **AKG-M2** Architecture Understanding | Cartes responsabilités / interactions | V3-F05 / F06 | AKG-M1 | Cartes validées | Revue de compréhension | Cartes + gaps | Sur-modélisation | GO understanding | AKG-M3 |
+| **AKG-M3** Reference Consolidation | Consolider la PRR ; mesurer couverture | V3-F05 / F12 | AKG-M2 | PRR consolidée ; volume 09 à jour | Critères couverture appliqués | Conformance + revue sémantique | Tentation 2e référentiel | GO PRR sync | AKG-M4 |
+| **AKG-M4** Rationalization Assessment | Matrice KEEP/ADAPT/CONSOLIDATE/REPLACE/RETIRE sur preuves | V3-F05 / F07 | AKG-M3 | Matrice + impact packs | Décisions Morris par lot | Impact + preuves | Suppression prématurée | GO rationalize (+ GO retire si structurant) | AKG-M5 |
+| **AKG-M5** Product Transformation | Lots Product gouvernés si GO | V3-F05+ | AKG-M4 + GO Product distinct | Lots Product | Preuves Product selon GO | CI/HQA selon GO | Confusion avec P6 Exit | GO Product distinct | — |
+
+### Non-claims AKG
+
+- AKG-M0 AUTHORING LOCAL **≠** AKG-M0 ACTIVE ON MAIN
+- AKG **≠** P6 GLOBAL PASS
+- AKG **≠** runtime v3 ADOPTED
+- Classification CONSOLIDATE/RETIRE **≠** autorisation de retrait immédiat
+
+
 ## B2. Destination (boucle produit v3)

 Voir Build Doctrine A3 — boucle Pilote → Nora → … → Evidence → LPS / ProjectTrajectory → Pilote.
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index 37471f61..b7008808 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -15,6 +15,8 @@
 **PR #586 optional Artifact / Generic PREPARE overlay (scoped, Delivery):** Product baseline reviewed `9b9cd5e5052da5781678a23a86c82b8b3283627e` · 2026-10-15 (Europe/Paris) — P6-HQA-F05-GD4-01: ordinary documentary request without closure `REQUIRE_ARTIFACT` may route to Generic PREPARE on the same active cycle (`no_require_artifact` ≠ NEW_CYCLE_FORMALIZATION; ≠ invented HD); exact capability identities; Nora path candidates non-authoritative at PREPARE. Volumes 02 / 03 / 04 / 06 / 07 / 08 / 09 + digests. **BOUNDED SEMANTIC IMPACT** on F05 routing + Fake fixture cue. **Not** a full Living Reference re-audit. Pending offer process-local. OpenAI LIVE / e66 / Cursor REAL **NOT CLAIMED**. P6 GLOBAL PASS / runtime v3 **NOT CLAIMED**.
 **Tool-First Generic Execution + R1/R2 safety (local candidate — PENDING_GIT_INTEGRATION):** Product worktree `fix/sfia-studio-p6-tool-first-safety-r1r2` @ baseline `e03c7b9` — ordinary pathless analysis may PREPARE as NON_STRUCTURAL without invented file path / systematic HD / mandatory CycleInstance / mandatory Artifact when Product admits a **positive** non-mutating claim (`intentKind=read_only` **or** `repositoryMutationDeclared ∈ {none,read}`); `repositoryMutation` absent refuses only when `read_only` is also absent; unknown/write/contradictions remain fail-closed. Pilot UI **Exécuter** may fold server Confirm after inspection attestation (Inspect ≠ Execute). Cursor REAL generalist has no technical no-write; Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` — **Select** refuses before new Attempt; **Start** refuses launch while Attempt stays `accepted`. Fake/DET remains admissible. Volumes 02 / 03 / 04 / 05 / 07 / 08 / 09 (+ digests only after ChatGPT semantic content review). **BOUNDED SEMANTIC IMPACT**. **Not** integrated on main. REAL BOUNDARY / HQA / P6 GLOBAL PASS / runtime v3 **NOT CLAIMED**.

+**AKG-M0 methodological continuity overlay (LOCAL AUTHORING — NOT INTEGRATED ON MAIN):** 2026-10-19 — README role/coverage/maintenance strengthened under AKG-M0 documentary authoring (GO M0 DOCUMENTARY AUTHORING). **Manifest digests NOT refreshed in étape 1** — `REFERENCE REVIEW REQUIRED` for this README expected until ChatGPT semantic review + étape 2 digest sync. P6 GLOBAL PASS / runtime v3 / AKG-M0 ACTIVE ON MAIN **NOT CLAIMED**.
+
 ## What this corpus is

 This corpus describes **how SFIA Studio actually works now** in the checked-out Git tree:
@@ -30,6 +32,55 @@ This corpus describes **how SFIA Studio actually works now** in the checked-out

 It is the primary **impact-analysis substrate** for future Studio corrections.

+### Canonical documentary role (AKG-M0)
+
+The PRR is the **canonical documentary reference** for Studio’s **CURRENT as-implemented** behaviour.
+
+**CP03 — authority boundary:**
+
+1. **Git current tree** and **primary proofs** (tests, schemas, runtime observations) remain **superior** to any descriptive documentation.
+2. The PRR **never** outranks Git or primary proofs.
+3. When code/proofs contradict the PRR: **code/proofs win**; record an explicit **KNOWN GAP** (do not silently “fix” narrative to match hope).
+
+### Progressive architectural dimensions
+
+Cover progressively via existing volumes (do **not** invent a parallel corpus; do **not** auto-create one volume per dimension):
+
+| Dimension | Primary volumes |
+|---|---|
+| Functional capabilities / journeys | 03 (+ Roadmap B9 doctrine coverage) |
+| Technical components | 01, 02 |
+| Responsibilities | 02, 07 |
+| Interfaces / interactions | 03, 04 |
+| Dependencies | 04 |
+| Flows / events | 03 |
+| Business objects | 02 |
+| Data / transformations | 02, 06 |
+| Persistence / transactions | 06 |
+| Authority / governance | 07 |
+| Recovery / resilience | 06 |
+| External integrations | 05 |
+| Tests / proofs | 08 |
+| Debt / reserves | 09 |
+| Component history / disposition | 09 + Convergence Roadmap (history) — do not duplicate chronology here |
+
+**Articulation:** technical inventory (01/02) ↔ functional capabilities & journeys (03) ↔ interactions/dependencies (03/04).
+
+### Coverage status vocabulary (CP04)
+
+Do **not** use “covered” as a synonym for “fully proven behaviour”.
+
+| Status | Meaning |
+|---|---|
+| **DOCUMENTED** | Information is described in the corpus |
+| **COVERAGE VERIFIED** | Scope identified and documentary coverage checked against relevant Git/sources |
+| **BEHAVIOR PROVEN** | Behaviour supported by an explicit proof whose **level** is stated (deterministic / REAL boundary / E2E REAL / …) |
+| **KNOWN GAP** | Missing, contradictory, or insufficiently demonstrated |
+
+A domain may be DOCUMENTED without being COVERAGE VERIFIED or BEHAVIOR PROVEN. Digest match alone never implies semantic validity.
+
+**AKG-M0 does not declare the PRR exhaustive.**
+
 ## What this corpus is NOT

 It does **not** replace:
@@ -77,20 +128,24 @@ Do not treat the Transmission Guide as the as-implemented oracle.

 ## Living maintenance contract

-For any Studio change touching tracked paths in the manifest:
+For any Studio change touching tracked paths in the manifest — and for **architecture-informed** analyses of Studio behaviour (even read-only):

-1. Run **impact analysis** (see volume 04).
-2. Review affected object cards, flows, dependencies, invariants.
-3. Review env / persistence / restart if applicable.
-4. Run mapped regression tests.
-5. Update architecture **content** if semantics changed.
-6. Refresh digests **only after** human/ChatGPT review of content.
-7. Record `NO SEMANTIC IMPACT` when only implementation changed.
+1. **Consult beforehand** the applicable PRR volumes (proportionate selection — not necessarily all volumes).
+2. Run **impact analysis** (see volume 04): direct and indirect impacts.
+3. Review affected object cards, flows, dependencies, invariants.
+4. Review env / persistence / restart if applicable.
+5. Record **coverage status** for touched domains (DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP).
+6. Run mapped regression tests when behaviour is at stake.
+7. Update architecture **content** if semantics changed (documentary continuity).
+8. Record `NO SEMANTIC IMPACT` when only implementation changed without semantic shift.
+9. Refresh digests **only after** human/ChatGPT **semantic** review of content.
+10. Keep non-claims honest (no P6 GLOBAL PASS / runtime v3 ADOPTED inflation).

 **AUTOMATE DRIFT DETECTION — NEVER AUTOMATE STRUCTURAL ARBITRATION.**

 A digest mismatch means: `REFERENCE REVIEW REQUIRED`.
 Refreshing a digest ≠ validating semantic correctness.
+Documentary sync is a **validation criterion** of the change set when semantics move.

 ## Conformance tooling

diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index 948156a2..c7c82b63 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -167,7 +167,15 @@ SFIA Studio Convergence Pre-check :
 - dette temporaire :
 - trajectoire de sortie :
 - gates Morris :
-- verdict : CONVERGENCE CONTEXT LOADED / PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE / STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
+- PRR applicable : oui / non / N/A
+- PRR N/A justification : [obligatoire si N/A]
+- PRR volumes consultés :
+- composants / flows / invariants concernés :
+- statut de couverture : DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP
+- impact documentaire : NONE / UPDATE REQUIRED / GAP
+- risques architecture :
+- preuves applicables :
+- verdict : CONVERGENCE CONTEXT LOADED / PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE / STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED / STOP — ARCHITECTURE CONTEXT NOT LOADED
 ```

 #### E. Cas Git inaccessible
@@ -196,6 +204,7 @@ Cursor devra renforcer la découverte locale et stopper si divergence.

 > **Ne s’applique pas** aux projets SFIA sans rapport avec la construction de SFIA Studio.
 > **Ne transforme pas** ce template en template Studio-only.
+> **Ne promeut pas** SFIA v2.6 comme doctrine runtime Studio.

 **Trigger Studio = oui** si l’objet est la construction, l’évolution, l’architecture, la roadmap, la validation ou le prompting de **SFIA Studio** (même trigger que routing guide §4.3.0a).

@@ -204,7 +213,8 @@ Lorsque trigger = oui, ChatGPT **doit** lire depuis Git **avant** de générer l
 1. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
 2. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
 3. sources v3 applicables (`projects/sfia-studio/sfia-v3-framing/**`)
-4. état repo/projet Studio concerné
+4. **PRR applicable** (`projects/sfia-studio/production-runtime-reference/` + volumes sélectionnés) lorsque le cycle concerne le **fonctionnement Studio** — analyse, conception, architecture, impact, rationalisation, correction, delivery runtime, validation comportementale — **y compris en lecture seule** (aligné routing §4.3.0a / CP02). Si non pertinent : **N/A** + justification. Ne pas exiger tous les volumes.
+5. état repo/projet Studio concerné

 **Règle dure :**

@@ -212,7 +222,10 @@ Lorsque trigger = oui, ChatGPT **doit** lire depuis Git **avant** de générer l
 trigger Studio = oui
 ET (Build Doctrine non lue
     OU Roadmap non lue
-    OU capacité / trajectory link non qualifié)
+    OU capacité / trajectory link non qualifié
+    OU (fonctionnement Studio concerné
+        ET PRR applicable non consultée
+        ET N/A non justifié))
 → NE PAS générer le prompt Cursor

 PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
@@ -224,18 +237,27 @@ Si l’analyse Studio elle-même n’a pas chargé le contexte convergence requi
 STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
 ```

+Si le fonctionnement Studio est concerné et que le contexte architectural PRR obligatoire est absent :
+
+```text
+STOP — ARCHITECTURE CONTEXT NOT LOADED
+```
+
+> Marqueur unique partagé avec Build Doctrine / routing — ne pas inventer des STOP équivalents supplémentaires.
+
 Séquence :

 ```text
 Repo-informed pre-check
 → si Studio trigger : Convergence Pre-check (§2.0.G + mini-fiche)
+→ si fonctionnement Studio : PRR volumes applicables (sinon N/A)
 → qualification cycle
 → CKC/process guidance applicable
 → sources spécifiques
 → instanciation prompt Cursor
 ```

-Clarifications : Build Doctrine + Roadmap = gouvernance de **construction** ; doctrine v3 = destination produit ; v2.6 = baseline opérationnelle processus ; runtime v3 **non ADOPTED** par défaut.
+Clarifications : Build Doctrine + Roadmap = gouvernance de **construction** ; doctrine v3 = destination produit ; PRR = référence documentaire CURRENT (**subordonnée** à Git/preuves) ; v2.6 = baseline opérationnelle processus ; runtime v3 **non ADOPTED** par défaut.

 ### 2.1 Déclenchement


```

---

## 13. Risques / gates

Digest README pending etape 2. Ne pas claim ACTIVE ON MAIN / P6 PASS / v3 ADOPTED. Semantic Review puis digest sync puis Git Integration GO.

---

## 14. Non-claims

PRR CONFORMANCE PASS=NO; M0 INTEGRATED ON MAIN=NO; M0 METHOD ACTIVE ON MAIN=NO; READY FOR PR=NO; P6 GLOBAL PASS=NO; runtime v3 ADOPTED=NO.

---

## 15. Verdict

**AKG-M0 DOCUMENTARY AUTHORING — CONTENT READY FOR CHATGPT SEMANTIC REVIEW — PRR DIGEST SYNCHRONIZATION PENDING**

## 16. Instruction ChatGPT

Lire `sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md`.
Verifier cycle, branche, HEAD, contenu A-E vs diffs, CP01-CP06, manifest inchange, reserve digest, SHA/blob distant.
Si synthesis-only: REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING.
